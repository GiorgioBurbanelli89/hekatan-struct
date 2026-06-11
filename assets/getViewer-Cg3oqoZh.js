import { v as R, P as Ao, q as dn, a7 as Xn, B as me, a8 as Yn, F as Rt, a4 as Vo, K as nt, X as Jt, L as ht, h as Ot, u as To, g as Uo, a9 as Ko, i as ot, d as Oe, V as m, $ as cn, aa as qn, H as Lo, D as Dt, a as $t, x as rt, z as Dn, ab as Nn, s as Ho, m as Wo, I as ln, a2 as Pn, E as yo, f as xn, Q as Jn, ac as zn, C as xo, S as go, c as vo, ad as In, p as Go, ae as qo, af as Jo, ag as Qo, ah as Oo, b as bo, ai as Mo, e as _o, W as jo, N as es, O as ts, Y as ns, T as $n, o as Qn, Z as os, _ as So, U as ss } from "./theme-BUyDDEHW.js";
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
    let H = false, re = 0, we = 0, ue = 0, S = 0;
    b.addEventListener("mousedown", (W) => {
      H = true, re = W.clientX, we = W.clientY;
      const he = h.getBoundingClientRect();
      ue = he.left, S = he.top, h.style.left = `${ue}px`, h.style.top = `${S}px`;
    }), window.addEventListener("mousemove", (W) => {
      if (!H) return;
      const he = W.clientX - re, se = W.clientY - we, ve = Math.max(0, Math.min(window.innerWidth - 40, ue + he)), q = Math.max(0, Math.min(window.innerHeight - 40, S + se));
      h.style.left = `${ve}px`, h.style.top = `${q}px`;
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
  return { gridSize: R.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: R.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: R.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: R.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: R.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: R.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: R.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: R.state((e == null ? void 0 : e.gridXZ) ?? true), gridYZ: R.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: R.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: R.state((e == null ? void 0 : e.nodes) ?? true), elements: R.state((e == null ? void 0 : e.elements) ?? true), edges: R.state((e == null ? void 0 : e.edges) ?? true), faces: R.state((e == null ? void 0 : e.faces) ?? true), elemColumns: R.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: R.state((e == null ? void 0 : e.elemBeams) ?? true), elemFrames: R.state((e == null ? void 0 : e.elemFrames) ?? true), elemZapatas: R.state((e == null ? void 0 : e.elemZapatas) ?? true), elemLosas: R.state((e == null ? void 0 : e.elemLosas) ?? true), colorByType: R.state((e == null ? void 0 : e.colorByType) ?? false), nodesIndexes: R.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: R.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: R.state((e == null ? void 0 : e.orientations) ?? false), sections: R.state((e == null ? void 0 : e.sections) ?? true), sectionLabels: R.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: R.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: R.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: R.state((e == null ? void 0 : e.secFloor) ?? -1), supports: R.state((e == null ? void 0 : e.supports) ?? true), loads: R.state((e == null ? void 0 : e.loads) ?? false), deformedShape: R.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: R.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: R.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: R.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: R.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: R.state((e == null ? void 0 : e.flipAxes) ?? false), solids: R.state((e == null ? void 0 : e.solids) ?? true), custom3D: R.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: R.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: R.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: R.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function rs(e, i, y) {
  const h = dn(), d = new Xn(new me(), new Yn({ color: h.nodePoint }));
  return Vo((k, v) => {
    d.material.color.setHex(v.nodePoint);
  }), d.frustumCulled = false, R.derive(() => {
    e.nodes.val && d.geometry.setAttribute("position", new Rt(i.val.flat(), 3));
  }), R.derive(() => {
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
  }), R.derive(() => {
    d.visible = e.nodes.val;
  }), d;
}
function On(e, i) {
  const y = dn(), h = new nt();
  h.name = "hekatan-grid";
  const d = (i == null ? void 0 : i.planes) ?? ["xy"];
  let k = (i == null ? void 0 : i.majorStep) ?? 1, v = (i == null ? void 0 : i.minorStep) ?? 0.1;
  for (k <= 0 && (k = 1), v <= 0 && (v = 0.1); e / v > 500; ) v *= 2;
  for (; e / k > 100; ) k *= 2;
  const x = e / 2;
  k = Math.max(v, Math.round(k / v) * v);
  const _ = new Jt(y.grid), z = new Jt(y.grid).multiplyScalar(0.45), b = (re, we, ue, S) => {
    const W = [], he = re === "xy" ? (Y, L) => [Y, L, 0] : re === "xz" ? (Y, L) => [Y, 0, L] : (Y, L) => [0, Y, L], se = Math.floor(x / we);
    for (let Y = -se; Y <= se; Y++) {
      const L = Y * we, E = he(L, -x), F = he(L, x);
      W.push(...E, ...F);
    }
    for (let Y = -se; Y <= se; Y++) {
      const L = Y * we, E = he(-x, L), F = he(x, L);
      W.push(...E, ...F);
    }
    const ve = new me();
    ve.setAttribute("position", new Rt(W, 3));
    const q = new ht({ color: ue, transparent: true, opacity: S, depthWrite: false }), K = new Ot(ve, q);
    return K.name = `grid-${re}-${we === v ? "minor" : "major"}`, K;
  }, H = (re, we, ue) => {
    const S = re === "xy" ? (K, Y) => [K, Y, 0] : re === "xz" ? (K, Y) => [K, 0, Y] : (K, Y) => [0, K, Y], W = [[-x, -x], [x, -x], [x, x], [-x, x]], he = [];
    for (const [K, Y] of W) he.push(...S(K, Y));
    const se = new me();
    se.setAttribute("position", new Rt(he, 3));
    const ve = new ht({ color: we, transparent: true, opacity: ue, depthWrite: false }), q = new To(se, ve);
    return q.name = `grid-${re}-border`, q.renderOrder = 1, q;
  };
  for (const re of d) h.add(b(re, v, z, 0.12)), h.add(b(re, k, _, 0.4)), h.add(H(re, _, 0.55));
  return h.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: k, minorStep: v, gridSize: e, planes: [...d] }, h;
}
function cs(e, i, y, h) {
  const d = new nt(), k = new Uo(0.5, 0.5, 0.5), v = new Ko(0.45, 0.7, 4);
  v.rotateX(Math.PI / 2), v.translate(0, 0, -0.35);
  const x = new ot({ color: 10166822 }), w = new ot({ color: 2792847 }), _ = new ot({ color: 3835647 }), z = () => {
    const re = y.rawVal ?? [];
    if (re.length < 2) return i.gridSize.val * 0.5;
    let we = [1 / 0, 1 / 0, 1 / 0], ue = [-1 / 0, -1 / 0, -1 / 0];
    for (const S of re) for (let W = 0; W < 3; W++) S[W] < we[W] && (we[W] = S[W]), S[W] > ue[W] && (ue[W] = S[W]);
    return Math.max(ue[0] - we[0], ue[1] - we[1], ue[2] - we[2], 0.1);
  }, b = () => 0.08 * z(), H = () => Math.max(h.rawVal, 1);
  return R.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, !i.supports.val) return;
    d.clear();
    const re = b();
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((we, ue) => {
      const S = y.val[ue];
      if (!S) return;
      const W = we ?? [], he = (W[0] ? 1 : 0) + (W[1] ? 1 : 0) + (W[2] ? 1 : 0), se = (W[3] ? 1 : 0) + (W[4] ? 1 : 0) + (W[5] ? 1 : 0);
      let ve;
      he >= 3 && se >= 3 ? ve = new Oe(k, x) : he >= 3 && se === 0 ? ve = new Oe(v, w) : ve = new Oe(v, _), ve.position.set(S[0], S[1], S[2]);
      const q = re * H();
      ve.scale.set(q, q, q), d.add(ve);
    });
  }), R.derive(() => {
    if (h.val, !i.supports.rawVal) return;
    const we = b() * H();
    d.children.forEach((ue) => ue.scale.set(we, we, we));
  }), R.derive(() => {
    d.visible = i.supports.val;
  }), d;
}
function ds(e, i, y, h) {
  const d = new nt();
  d.name = "loadsGroup";
  function k(v) {
    if (v.length < 2) return 0.12 * i.gridSize.rawVal;
    const x = [1 / 0, 1 / 0, 1 / 0], w = [-1 / 0, -1 / 0, -1 / 0];
    for (const z of v) for (let b = 0; b < 3; b++) x[b] = Math.min(x[b], z[b]), w[b] = Math.max(w[b], z[b]);
    return 0.08 * Math.max(w[0] - x[0], w[1] - x[1], w[2] - x[2], 0.1);
  }
  return R.derive(() => {
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
      const H = new cn(b, new m(...z), 1, 15637248, 0.3, 0.3), re = x * h.rawVal;
      H.scale.set(re, re, re), d.add(H);
    });
  }), R.derive(() => {
    if (h.val, !i.loads.rawVal) return;
    const x = k(y.rawVal) * h.rawVal;
    d.children.forEach((w) => w.scale.set(x, x, x));
  }), R.derive(() => {
    d.visible = i.loads.val;
  }), d;
}
function ps(e, i, y) {
  const h = new nt();
  return R.derive(() => {
    if (!e.nodesIndexes.val) return;
    h.children.forEach((k) => k.dispose()), h.clear();
    const d = 0.05 * e.gridSize.val * 0.6;
    i.val.forEach((k, v) => {
      const x = new Et(`${v}`);
      x.position.set(...k), x.updateScale(d * y.rawVal), h.add(x);
    });
  }), R.derive(() => {
    if (y.val, !e.nodesIndexes.rawVal) return;
    const d = 0.05 * e.gridSize.val * 0.6;
    h.children.forEach((k) => k.updateScale(d * y.rawVal));
  }), R.derive(() => {
    h.visible = e.nodesIndexes.val;
  }), h;
}
function us(e, i, y, h) {
  const d = new nt();
  return R.derive(() => {
    var _a;
    if (i.deformedShape.val, !i.elementsIndexes.val) return;
    d.children.forEach((v) => v.dispose()), d.clear();
    const k = 0.05 * i.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((v, x) => {
      const w = new Et(`${x}`, void 0, "#001219");
      w.position.set(...fs(v.map((_) => y.rawVal[_]))), w.updateScale(k * h.rawVal), d.add(w);
    });
  }), R.derive(() => {
    if (h.val, !i.elementsIndexes.rawVal) return;
    const k = 0.05 * i.gridSize.val * 0.6;
    d.children.forEach((v) => v.updateScale(k * h.rawVal));
  }), R.derive(() => {
    d.visible = i.elementsIndexes.val;
  }), d;
}
function fs(e) {
  const i = e.reduce((h, d) => [h[0] + d[0], h[1] + d[1], h[2] + d[2]], [0, 0, 0]), y = e.length;
  return [i[0] / y, i[1] / y, i[2] / y];
}
function Po(e, i) {
  const y = new nt(), h = 0.05 * e * 1, d = dn(), k = new Et("X", "red", "transparent"), v = new Et(i ? "Z" : "Y", "green", "transparent"), x = new Et(i ? "Y" : "Z", "blue", "transparent"), w = new cn(new m(1, 0, 0), new m(0, 0, 0), 1, d.axisArrow, 0.2, 0.2), _ = new cn(new m(0, 1, 0), new m(0, 0, 0), 1, d.axisArrow, 0.2, 0.2), z = new cn(new m(0, 0, 1), new m(0, 0, 0), 1, d.axisArrow, 0.2, 0.2);
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
  const d = new nt(), k = new me(), v = new ht({ vertexColors: true }), x = [0, 0, 0], w = [1, 0, 0], _ = [0, 1, 0], z = [0, 0, 1];
  k.setAttribute("position", new Rt([...x, ...w, ...x, ..._, ...x, ...z], 3));
  const b = [255, 0, 0], H = [0, 255, 0], re = [0, 0, 255];
  return k.setAttribute("color", new Rt([...b, ...b, ...H, ...H, ...re, ...re], 3)), R.derive(() => {
    var _a;
    i.deformedShape.val, i.orientations.val && (d.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((we) => {
      const ue = new Ot(k, v), S = y.rawVal[we[0]], W = y.rawVal[we[1]];
      if (we.length === 2 && (ue.position.set(...to(S, W)), ue.rotation.setFromRotationMatrix(oo(S, W))), we.length === 3) {
        const ve = y.rawVal[we[2]];
        ue.position.set(...Fn([S, W, ve])), ue.rotation.setFromRotationMatrix(hs(S, W, ve));
      }
      const se = 0.05 * i.gridSize.rawVal * 0.75 * h.rawVal;
      ue.scale.set(se, se, se), d.add(ue);
    }));
  }), R.derive(() => {
    if (h.val, !i.orientations.rawVal) return;
    const ue = 0.05 * i.gridSize.val * 0.75 * h.rawVal;
    d.children.forEach((S) => S.scale.set(ue, ue, ue));
  }), R.derive(() => {
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
  const d = new nt(), k = new nt();
  d.add(k);
  function v(K, Y) {
    const L = K / 2, E = Y / 2, F = new Float32Array([0, -L, -E, 0, L, -E, 0, L, E, 0, -L, -E, 0, L, E, 0, -L, E]), T = new me();
    T.setAttribute("position", new rt(F, 3));
    const C = new Float32Array([0, -L, -E, 0, L, -E, 0, L, E, 0, -L, E, 0, -L, -E]), N = new me();
    return N.setAttribute("position", new rt(C, 3)), { fill: T, outline: N };
  }
  function x(K, Y = 24) {
    const L = K / 2, E = new Float32Array(Y * 9);
    for (let N = 0; N < Y; N++) {
      const te = N / Y * Math.PI * 2, O = (N + 1) / Y * Math.PI * 2;
      E[N * 9] = 0, E[N * 9 + 1] = 0, E[N * 9 + 2] = 0, E[N * 9 + 3] = 0, E[N * 9 + 4] = L * Math.cos(te), E[N * 9 + 5] = L * Math.sin(te), E[N * 9 + 6] = 0, E[N * 9 + 7] = L * Math.cos(O), E[N * 9 + 8] = L * Math.sin(O);
    }
    const F = new me();
    F.setAttribute("position", new rt(E, 3));
    const T = new Float32Array((Y + 1) * 3);
    for (let N = 0; N <= Y; N++) {
      const te = N / Y * Math.PI * 2;
      T[N * 3] = 0, T[N * 3 + 1] = L * Math.cos(te), T[N * 3 + 2] = L * Math.sin(te);
    }
    const C = new me();
    return C.setAttribute("position", new rt(T, 3)), { fill: F, outline: C };
  }
  function w(K, Y, L, E) {
    const F = L ?? Y * 0.08, T = E ?? K * 0.07, C = K / 2, N = Y / 2, te = N - F, O = T / 2, ae = [];
    function V(G, Fe, be, _e) {
      ae.push(0, G, Fe, 0, be, Fe, 0, be, _e, 0, G, Fe, 0, be, _e, 0, G, _e);
    }
    V(-C, -N, C, -te), V(-O, -te, O, te), V(-C, te, C, N);
    const D = new me();
    D.setAttribute("position", new rt(new Float32Array(ae), 3));
    const ee = new Float32Array([0, -C, -N, 0, C, -N, 0, C, -te, 0, O, -te, 0, O, te, 0, C, te, 0, C, N, 0, -C, N, 0, -C, te, 0, -O, te, 0, -O, -te, 0, -C, -te, 0, -C, -N]), ce = new me();
    return ce.setAttribute("position", new rt(ee, 3)), { fill: D, outline: ce };
  }
  function _(K, Y, L) {
    const E = K / 2, F = Y / 2, T = E - L, C = F - L, N = [];
    function te(D, ee, ce, G) {
      N.push(0, D, ee, 0, ce, ee, 0, ce, G, 0, D, ee, 0, ce, G, 0, D, G);
    }
    te(-E, -F, E, -C), te(-E, C, E, F), te(-E, -C, -T, C), te(T, -C, E, C);
    const O = new me();
    O.setAttribute("position", new rt(new Float32Array(N), 3));
    const ae = new Float32Array([0, -E, -F, 0, E, -F, 0, E, -F, 0, E, F, 0, E, F, 0, -E, F, 0, -E, F, 0, -E, -F, 0, -T, -C, 0, T, -C, 0, T, -C, 0, T, C, 0, T, C, 0, -T, C, 0, -T, C, 0, -T, -C]), V = new me();
    return V.setAttribute("position", new rt(ae, 3)), { fill: O, outline: V };
  }
  function z(K, Y, L) {
    const E = K / 2, F = Y / 2, T = E - L, C = F - L, N = new me(), te = new Float32Array([0, -T, -C, 0, T, -C, 0, T, C, 0, -T, -C, 0, T, C, 0, -T, C]);
    N.setAttribute("position", new rt(te, 3));
    const O = [];
    function ae(ce, G, Fe, be) {
      O.push(0, ce, G, 0, Fe, G, 0, Fe, be, 0, ce, G, 0, Fe, be, 0, ce, be);
    }
    ae(-E, -F, E, -C), ae(-E, C, E, F), ae(-E, -C, -T, C), ae(T, -C, E, C);
    const V = new me();
    V.setAttribute("position", new rt(new Float32Array(O), 3));
    const D = new Float32Array([0, -E, -F, 0, E, -F, 0, E, -F, 0, E, F, 0, E, F, 0, -E, F, 0, -E, F, 0, -E, -F, 0, -T, -C, 0, T, -C, 0, T, -C, 0, T, C, 0, T, C, 0, -T, C, 0, -T, C, 0, -T, -C]), ee = new me();
    return ee.setAttribute("position", new rt(D, 3)), { concFill: N, steelFillGeom: V, outline: ee };
  }
  function b(K, Y, L) {
    const E = [], F = [[0, -K / 2, -Y / 2], [0, -K / 2 + L, -Y / 2], [0, -K / 2 + L, Y / 2 - L], [0, K / 2, Y / 2 - L], [0, K / 2, Y / 2], [0, -K / 2, Y / 2]], T = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const O of T) E.push(...F[O]);
    const C = new me();
    C.setAttribute("position", new rt(new Float32Array(E), 3));
    const N = [];
    for (let O = 0; O < F.length; O++) {
      const ae = (O + 1) % F.length;
      N.push(...F[O], ...F[ae]);
    }
    const te = new me();
    return te.setAttribute("position", new rt(new Float32Array(N), 3)), { fill: C, outline: te };
  }
  function H(K, Y, L, E) {
    const F = E / 2, T = [], C = [[0, -K - F, -Y / 2], [0, -L - F, -Y / 2], [0, -L - F, Y / 2 - L], [0, -F, Y / 2 - L], [0, -F, Y / 2], [0, -K - F, Y / 2]], N = [[0, F, -Y / 2], [0, F + L, -Y / 2], [0, F + L, Y / 2 - L], [0, K + F, Y / 2 - L], [0, K + F, Y / 2], [0, F, Y / 2]], te = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const D of te) T.push(...C[D]);
    for (const D of te) T.push(...N[D]);
    const O = new me();
    O.setAttribute("position", new rt(new Float32Array(T), 3));
    const ae = [];
    for (const D of [C, N]) for (let ee = 0; ee < D.length; ee++) {
      const ce = (ee + 1) % D.length;
      ae.push(...D[ee], ...D[ce]);
    }
    const V = new me();
    return V.setAttribute("position", new rt(new Float32Array(ae), 3)), { fill: O, outline: V };
  }
  function re(K, Y, L, E) {
    const F = Y / 2, T = K, C = [[0, -T, -F], [0, -T, -F + L], [0, -E, -F + L], [0, -E, F - L], [0, -T, F - L], [0, -T, F], [0, 0, F], [0, 0, -F]], N = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], te = [];
    for (const D of N) te.push(...C[D]);
    const O = new me();
    O.setAttribute("position", new rt(new Float32Array(te), 3));
    const ae = [];
    for (let D = 0; D < C.length; D++) {
      const ee = (D + 1) % C.length;
      ae.push(...C[D], ...C[ee]);
    }
    const V = new me();
    return V.setAttribute("position", new rt(new Float32Array(ae), 3)), { fill: O, outline: V };
  }
  function we(K, Y, L, E, F) {
    const T = Y / 2, C = F / 2, N = [], te = [[0, -K, -T], [0, -K, -T + L], [0, -C - E, -T + L], [0, -C - E, T - L], [0, -K, T - L], [0, -K, T], [0, -C, T], [0, -C, -T]], O = te.map((ce) => [ce[0], -ce[1], ce[2]]), ae = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const ce of ae) N.push(...te[ce]);
    for (const ce of ae) N.push(...O[ce]);
    const V = new me();
    V.setAttribute("position", new rt(new Float32Array(N), 3));
    const D = [];
    for (const ce of [te, O]) for (let G = 0; G < ce.length; G++) {
      const Fe = (G + 1) % ce.length;
      D.push(...ce[G], ...ce[Fe]);
    }
    const ee = new me();
    return ee.setAttribute("position", new rt(new Float32Array(D), 3)), { fill: V, outline: ee };
  }
  function ue(K, Y, L, E) {
    const F = K / 2, T = Y / 2, C = E / 2, N = [[0, -C, -T], [0, C, -T], [0, C, T - L], [0, F, T - L], [0, F, T], [0, -F, T], [0, -F, T - L], [0, -C, T - L]], te = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], O = [];
    for (const ee of te) O.push(...N[ee]);
    const ae = new me();
    ae.setAttribute("position", new rt(new Float32Array(O), 3));
    const V = [];
    for (let ee = 0; ee < N.length; ee++) {
      const ce = (ee + 1) % N.length;
      V.push(...N[ee], ...N[ce]);
    }
    const D = new me();
    return D.setAttribute("position", new rt(new Float32Array(V), 3)), { fill: ae, outline: D };
  }
  function S(K, Y, L = 24) {
    const E = K / 2, F = E - Y, T = [];
    for (let O = 0; O < L; O++) {
      const ae = O / L * Math.PI * 2, V = (O + 1) / L * Math.PI * 2, D = Math.cos(ae), ee = Math.sin(ae), ce = Math.cos(V), G = Math.sin(V);
      T.push(0, E * D, E * ee, 0, E * ce, E * G, 0, F * ce, F * G), T.push(0, E * D, E * ee, 0, F * ce, F * G, 0, F * D, F * ee);
    }
    const C = new me();
    C.setAttribute("position", new rt(new Float32Array(T), 3));
    const N = [];
    for (let O = 0; O < L; O++) {
      const ae = O / L * Math.PI * 2, V = (O + 1) / L * Math.PI * 2;
      N.push(0, E * Math.cos(ae), E * Math.sin(ae), 0, E * Math.cos(V), E * Math.sin(V)), N.push(0, F * Math.cos(ae), F * Math.sin(ae), 0, F * Math.cos(V), F * Math.sin(V));
    }
    const te = new me();
    return te.setAttribute("position", new rt(new Float32Array(N), 3)), { fill: C, outline: te };
  }
  const W = new ot({ color: 52479, transparent: true, opacity: 0.35, side: Dt, depthWrite: false }), he = new ht({ color: 52479 }), se = new ot({ color: 16750848, transparent: true, opacity: 0.4, side: Dt, depthWrite: false }), ve = new ht({ color: 16750848 });
  function q(K, Y) {
    const L = Math.abs(Y[0] - K[0]), E = Math.abs(Y[1] - K[1]), F = Math.abs(Y[2] - K[2]);
    return F > L && F > E || E > L && E > F;
  }
  return R.derive(() => {
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
    const L = (_a = e.elements) == null ? void 0 : _a.val, E = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!L || !E) return;
    const F = E.sectionShapes, T = i.secFloor.rawVal;
    L.forEach((C, N) => {
      if (C.length !== 2) return;
      const te = y.rawVal[C[0]], O = y.rawVal[C[1]];
      if (!te || !O) return;
      const ae = q(te, O);
      if (ae && !K || !ae && !Y) return;
      if (T >= 0) {
        const G = Math.min(te[1], O[1]);
        Math.max(te[1], O[1]);
        const Fe = i.gridSize.rawVal || 3;
        if (Math.floor(G / Fe + 0.01) !== T) return;
      }
      const V = F == null ? void 0 : F.get(N);
      if (!V) return;
      const D = [(te[0] + O[0]) / 2, (te[1] + O[1]) / 2, (te[2] + O[2]) / 2], ee = oo(te, O);
      if (V.type === "CFT") {
        const G = z(V.b, V.h, V.tw ?? V.b * 0.05), Fe = new Oe(G.concFill, W);
        Fe.position.set(...D), Fe.rotation.setFromRotationMatrix(ee), d.add(Fe);
        const be = new Oe(G.steelFillGeom, se);
        be.position.set(...D), be.rotation.setFromRotationMatrix(ee), d.add(be);
        const _e = new $t(G.outline, ve);
        _e.position.set(...D), _e.rotation.setFromRotationMatrix(ee), d.add(_e);
      } else {
        let G, Fe, be;
        switch (V.type) {
          case "rect":
            G = v(V.b, V.h), Fe = W, be = he;
            break;
          case "circ":
            G = x(V.d), Fe = W, be = he;
            break;
          case "I":
            G = w(V.b, V.h, V.tf, V.tw), Fe = se, be = ve;
            break;
          case "HSS":
            G = _(V.b, V.h, V.tw ?? V.b * 0.05), Fe = se, be = ve;
            break;
          case "CFT":
            G = z(V.b, V.h, V.tw ?? V.b * 0.05), Fe = se, be = ve;
            break;
          case "L":
            G = b(V.b ?? V.h, V.h, V.t ?? V.tw ?? 3e-3), Fe = se, be = ve;
            break;
          case "2L":
            G = H(V.b ?? V.h, V.h, V.t ?? V.tw ?? 3e-3, V.dis ?? 0.01), Fe = se, be = ve;
            break;
          case "C":
          case "coldC":
            G = re(V.b, V.h, V.tf ?? V.t ?? 3e-3, V.tw ?? V.t ?? 3e-3), Fe = se, be = ve;
            break;
          case "2C":
            G = we(V.b, V.h, V.tf ?? 5e-3, V.tw ?? 5e-3, V.dis ?? 0.01), Fe = se, be = ve;
            break;
          case "T":
            G = ue(V.b, V.h, V.tf ?? 0.01, V.tw ?? 6e-3), Fe = se, be = ve;
            break;
          case "pipe":
            G = S(V.d, V.tw ?? V.d * 0.05), Fe = se, be = ve;
            break;
          default:
            return;
        }
        const _e = new Oe(G.fill, Fe);
        _e.position.set(...D), _e.rotation.setFromRotationMatrix(ee), d.add(_e);
        const Le = new $t(G.outline, be);
        Le.position.set(...D), Le.rotation.setFromRotationMatrix(ee), d.add(Le);
      }
      const ce = ws(V);
      if (ce) {
        const Fe = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(V.type) ? "#ff9900" : "#00ccff", be = new Et(ce, Fe, "transparent");
        be.position.set(D[0], D[1], D[2]);
        const _e = 0.05 * i.gridSize.rawVal * 0.5;
        be.updateScale(_e * ((h == null ? void 0 : h.rawVal) ?? 1)), k.add(be);
      }
    });
  }), h && R.derive(() => {
    if (h.val, !i.sections.rawVal) return;
    const K = 0.05 * i.gridSize.val * 0.5;
    k.children.forEach((Y) => {
      Y instanceof Et && Y.updateScale(K * h.rawVal);
    });
  }), R.derive(() => {
    d.visible = i.sections.val;
  }), R.derive(() => {
    k.visible = i.sectionLabels.val;
  }), d;
}
class Rn extends nt {
  constructor(i, y, h, d, k, v, x) {
    super();
    const w = new Dn().moveTo(0, 0).lineTo(0, v[1]).lineTo(h, v[1]).lineTo(h, 0).lineTo(0, 0), _ = w.getPoints(), z = new me().setFromPoints(_);
    this.lines = new $t(z, new ht({ color: dn().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(d), x && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const b = new Nn(w), H = new ot({ color: v[1] > 0 ? 24435 : 11411474, side: Dt });
    this.mesh = new Oe(b, H), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(d), x && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new Et(`${k[1].toFixed(2)}`), this.normalizedResult = v, this.textPosition = Fn([i, y]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(d), this.add(this.text);
  }
  updateScale(i) {
    this.lines.scale.set(1, i * 2, 1), this.mesh.scale.set(1, i * 2, 1), this.text.updateScale(i * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * i);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class zo extends nt {
  constructor(i, y, h, d, k, v, x) {
    super();
    const w = k[0] * h / (k[0] + k[1]), _ = k[0] * k[1] > 0;
    if (this.text = new Et(`${k[0].toFixed(2)}`), this.text2 = new Et(`${(k[1] * -1).toFixed(2)}`), this.normalizedResult = v, this.textPosition = to(i, y), this.text2Position = to(y, i), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(d), this.text2.rotation.setFromRotationMatrix(d), this.add(this.text, this.text2), _) {
      const z = new Dn().moveTo(0, 0).lineTo(0, v[0]).lineTo(w, 0).lineTo(0, 0), b = new Dn().moveTo(w, 0).lineTo(h, -v[1]).lineTo(h, 0).lineTo(w, 0), H = z.getPoints(), re = b.getPoints(), we = new me().setFromPoints(H), ue = new me().setFromPoints(re), S = new ht({ color: dn().resultOutline });
      this.lines = new $t(we, S), this.lines2 = new $t(ue, S), this.lines.position.set(...i), this.lines2.position.set(...i), this.lines.rotation.setFromRotationMatrix(d), this.lines2.rotation.setFromRotationMatrix(d), x && this.lines.rotateX(Math.PI / 2), x && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const W = new Nn(z), he = new Nn(b), se = new ot({ color: v[0] > 0 ? 24435 : 11411474, side: Dt }), ve = new ot({ color: -v[1] > 0 ? 24435 : 11411474, side: Dt });
      this.mesh = new Oe(W, se), this.mesh2 = new Oe(he, ve), this.mesh.position.set(...i), this.mesh2.position.set(...i), this.mesh.rotation.setFromRotationMatrix(d), this.mesh2.rotation.setFromRotationMatrix(d), x && this.mesh.rotateX(Math.PI / 2), x && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const z = new Dn().moveTo(0, 0).lineTo(0, v[0]).lineTo(h, -v[1]).lineTo(h, 0).lineTo(0, 0), b = z.getPoints(), H = new me().setFromPoints(b);
      this.lines = new $t(H, new ht({ color: dn().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(d), x && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const re = new Nn(z), we = new ot({ color: v[0] > 0 ? 24435 : 11411474, side: Dt });
      this.mesh = new Oe(re, we), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(d), x && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
  const d = new nt(), k = () => {
    const w = y.rawVal ?? [];
    if (w.length < 2) return i.gridSize.val * 0.5;
    let _ = [1 / 0, 1 / 0, 1 / 0], z = [-1 / 0, -1 / 0, -1 / 0];
    for (const b of w) for (let H = 0; H < 3; H++) b[H] < _[H] && (_[H] = b[H]), b[H] > z[H] && (z[H] = b[H]);
    return Math.max(z[0] - _[0], z[1] - _[1], z[2] - _[2], 0.1);
  }, v = () => 0.025 * k(), x = { normals: Rn, shearsY: Rn, shearsZ: Rn, torsions: Rn, bendingsY: zo, bendingsZ: zo };
  return R.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, y.val, i.frameResults.val == "none") return;
    d.children.forEach((_) => _.dispose()), d.clear();
    const w = Io[i.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[w]) == null ? void 0 : _b.forEach((_, z) => {
      var _a2, _b2;
      const b = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[z]) ?? [0, 1], H = y.rawVal[b[0]], re = y.rawVal[b[1]], we = new m(...re).distanceTo(new m(...H)), ue = gs((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[w]), S = _ == null ? void 0 : _.map((ve) => ve / (ue === 0 ? 1 : ue)), W = oo(H, re), he = new x[w](H, re, we, W, _ ?? [0, 0], S ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(w)), se = v();
      he.updateScale(se * h.rawVal), d.add(he);
    });
  }), R.derive(() => {
    if (h.val, i.frameResults.rawVal == "none") return;
    const w = v();
    d.children.forEach((_) => _.updateScale(w * h.rawVal));
  }), R.derive(() => {
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
class vs extends nt {
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
  const d = new nt();
  return R.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, i.nodeResults.val == "none") return;
    d.children.forEach((x) => x.dispose()), d.clear();
    const k = so[i.nodeResults.rawVal], v = 0.05 * i.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[k]) == null ? void 0 : _b.forEach((x, w) => {
      const _ = new vs(y.rawVal[w], k, x ?? [0, 0, 0, 0, 0, 0]);
      _.updateScale(v * h.rawVal), d.add(_);
    });
  }), R.derive(() => {
    if (h.val, i.nodeResults.rawVal == "none") return;
    const k = 0.05 * i.gridSize.val;
    d.children.forEach((v) => v.updateScale(k * h.rawVal));
  }), R.derive(() => {
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
  }, H = new Oe(new ln(1e4, 1e4), new ot({ side: Dt, transparent: true, opacity: 0, depthWrite: false }));
  H.visible = true, H.frustumCulled = false, y.add(H);
  const re = (n, o, a) => {
    const t = new Oe(new ln(1e4, 1e4), new ot({ side: Dt, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, a), t.visible = false, t.frustumCulled = false, y.add(t), t;
  }, we = re(Math.PI / 2, 0, 0), ue = re(0, Math.PI / 2, 0);
  let S = false;
  const W = () => {
    if (S) return _.intersectObjects([H], false);
    if (we.visible = !!window.__hekatanGridPlaneXZ, ue.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanOrthoRaycast === true && De.visible) {
      const a = _.intersectObjects([De, wt, dt], false);
      if (a.length > 0) return a;
    }
    const o = [H];
    return we.visible && o.push(we), ue.visible && o.push(ue), it.visible && Zt.length > 0 && o.push(...Zt), _.intersectObjects(o, false);
  }, he = new Xn(new me(), new Yn()), se = new Xn(new me(), new Yn({ color: "gray", sizeAttenuation: false, size: 6 })), ve = new Xn(new me(), new Yn({ color: "orange", size: 0.1 }));
  y.add(ve);
  const q = document.createElement("input");
  q.id = "hk-rubber-label", q.type = "text", q.spellcheck = false, q.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, q.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none", "pointer-events:none"].join(";") + ";", document.body.appendChild(q);
  let K = null, Y = null, L = false;
  const E = new m(), F = (n, o, a, t, r, s) => {
    const l = t - n, u = r - o, p = s - a, g = Math.hypot(l, u, p);
    if (g < 0.01) {
      q.style.display = "none";
      return;
    }
    K = [n, o, a], Y = [l / g, u / g, p / g], E.set((n + t) / 2, (o + r) / 2, (a + s) / 2), E.project(h());
    const M = x.getBoundingClientRect(), c = M.left + (E.x * 0.5 + 0.5) * M.width, f = M.top + (-E.y * 0.5 + 0.5) * M.height;
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
  }, N = (n) => {
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
  }, te = (n) => {
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
    const o = N(n);
    if (!o) return false;
    if (o.kind === "length") return C(o.L), true;
    const a = te(o);
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
      const a = N(q.value);
      if (!a) return;
      if (L = false, a.kind === "length") C(a.L), ie(`\u270F DDE ${a.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = te(a);
        if (!t) return;
        O(t);
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
  const D = new $t(new me().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new Pn({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  D.frustumCulled = false, D.visible = false, y.add(D);
  const ee = new $t(new me(), new ht({ color: 2282478, transparent: true, opacity: 0.9 }));
  ee.frustumCulled = false, ee.visible = false, y.add(ee);
  let ce = [];
  const G = new nt(), Fe = new Oe(new ln(1, 1), new ot({ color: 2282478, transparent: true, opacity: 0.08, side: Dt, depthWrite: false })), be = new Ot(new yo(new ln(1, 1)), new ht({ color: 2282478, transparent: true, opacity: 0.85 })), _e = new Ot(new me(), new ht({ color: 2282478, transparent: true, opacity: 0.3 })), Le = (n, o) => {
    const a = [], t = Math.ceil(n / o);
    for (let r = -t; r <= t; r++) {
      const s = r * o;
      a.push(-n, s, 0, n, s, 0), a.push(s, -n, 0, s, n, 0);
    }
    _e.geometry.dispose(), _e.geometry = new me(), _e.geometry.setAttribute("position", new Rt(a, 3));
  };
  G.add(Fe, be, _e), G.visible = false, G.frustumCulled = false, y.add(G);
  const Ae = new nt();
  Ae.frustumCulled = false, Ae.visible = false, y.add(Ae);
  const Pt = (n) => {
    const o = new me().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), a = new Pn({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new $t(o, a);
  }, zt = Pt(16711680), ct = Pt(65280), I = Pt(35071);
  Ae.add(zt, ct, I);
  const ne = (n) => {
    const o = new me().setFromPoints([new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0)]), a = new ht({ color: n, transparent: true, opacity: 0.2, depthTest: false }), t = new To(o, a);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, de = ne(3462041), fe = ne(16724804), Te = ne(6333946), Ye = new nt();
  Ye.frustumCulled = false, Ye.visible = false, y.add(Ye), Ye.add(de, fe, Te);
  const mt = (n) => {
    const o = new ln(1, 1), a = new ot({ color: n, transparent: true, opacity: 0.06, side: Dt, depthWrite: false }), t = new Oe(o, a);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, De = mt(3462041), wt = mt(16724804), dt = mt(6333946);
  Ye.add(De, wt, dt);
  const Xt = (n, o, a, t) => {
    n.scale.set(2 * t, 2 * t, 1), a === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : a === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, Ct = document.createElement("div");
  Ct.id = "hk-refplane-badge", Ct.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(Ct), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, Ye.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0], l = window.__hekatanOrthoExt ?? 8;
      Z(de, s, "xy", l), Z(fe, s, "xz", l), Z(Te, s, "yz", l), Xt(De, s, "xy", l), Xt(wt, s, "xz", l), Xt(dt, s, "yz", l), De.material.opacity = 0.05, wt.material.opacity = 0.05, dt.material.opacity = 0.05;
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
    Z(de, s, "xy", n), Z(fe, s, "xz", n), Z(Te, s, "yz", n), Xt(De, s, "xy", n), Xt(wt, s, "xz", n), Xt(dt, s, "yz", n), w();
  };
  const jt = (n) => {
    if (De.material.opacity = n === "xy" ? 0.09 : 0.025, wt.material.opacity = n === "xz" ? 0.09 : 0.025, dt.material.opacity = n === "yz" ? 0.09 : 0.025, n) {
      const r = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      Ct.style.background = r.bg, Ct.style.color = r.text, Ct.textContent = `\u25A6 Plano ${n.toUpperCase()}`, Ct.style.display = "block";
    } else Ct.style.display = "none";
  }, Z = (n, o, a, t) => {
    let r;
    a === "xy" ? r = [new m(o[0] - t, o[1] - t, o[2]), new m(o[0] + t, o[1] - t, o[2]), new m(o[0] + t, o[1] + t, o[2]), new m(o[0] - t, o[1] + t, o[2]), new m(o[0] - t, o[1] - t, o[2])] : a === "xz" ? r = [new m(o[0] - t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] - t)] : r = [new m(o[0], o[1] - t, o[2] - t), new m(o[0], o[1] + t, o[2] - t), new m(o[0], o[1] + t, o[2] + t), new m(o[0], o[1] - t, o[2] + t), new m(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(r);
  };
  let J = null;
  window.__hekatanAxisLock = () => J;
  let Pe = null;
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
    if (n.key === "Enter" && t === "polyarea" && ce.length >= 3) {
      const r = Ge();
      ie(`\u2713 \xC1rea libre mallada \u2014 ${r} shells Q4 creados.`), n.preventDefault();
      return;
    }
    if (a === "x" || a === "y" || a === "z") J = J === a ? null : a, Ke(), n.preventDefault();
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
  const Ne = new m(), Qe = new m(), Ve = new m(), He = (n) => {
    if (!J) return null;
    const o = n[0], a = n[1], t = n[2];
    return J === "x" ? (Ne.set(o - 1e4, a, t), Qe.set(o + 1e4, a, t)) : J === "y" ? (Ne.set(o, a - 1e4, t), Qe.set(o, a + 1e4, t)) : (Ne.set(o, a, t - 1e4), Qe.set(o, a, t + 1e4)), _.ray.distanceSqToSegment(Ne, Qe, null, Ve), Ve;
  };
  window.__hekatanProjectOnAxis = He;
  const Me = new $t(new me().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new ht({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  Me.renderOrder = 998, Me.frustumCulled = false, Me.visible = false, y.add(Me);
  let yt = -1, pt = -1, Be = -1;
  const ze = /* @__PURE__ */ new Set();
  window.__hekatanSelection = ze;
  const Se = new $t(new me().setFromPoints([new m(), new m()]), new ht({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  Se.renderOrder = 997, Se.frustumCulled = false, Se.visible = false, y.add(Se);
  const We = new Oe(new xn(0.02, 12, 12), new ot({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  We.renderOrder = 998, We.visible = false, y.add(We);
  const st = (n) => {
    const o = h();
    if (o.isOrthographicCamera) {
      const t = o, r = (t.top - t.bottom) / t.zoom;
      return Math.max(0.05, r * 6e-3);
    }
    const a = o.position.distanceTo(n);
    return Math.max(0.05, a / 10);
  }, pn = () => {
    We.visible && We.scale.setScalar(st(We.position));
  }, Ze = new nt();
  Ze.frustumCulled = false, y.add(Ze);
  const Wt = 2282478;
  let _t = null;
  const Xe = (n, o, a, t) => {
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
  }, ke = () => {
    var _a, _b, _c, _d, _e2, _f, _g;
    for (; Ze.children.length; ) {
      const l = Ze.children.pop();
      (_b = (_a = l.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = l.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const l of ze) {
      const [u, ...p] = l.split(":");
      if (u === "pt") {
        const g = n[+p[0]];
        if (!g) continue;
        const M = new Oe(new xn(0.025, 12, 12), new ot({ color: Wt, transparent: true, opacity: 0.9, depthTest: false }));
        M.position.set(g[0], g[1], g[2]), M.renderOrder = 999, M.__isSelectionPt = true, Ze.add(M);
      } else if (u === "seg") {
        const g = o[+p[0]], M = n[g == null ? void 0 : g[+p[1]]], c = n[g == null ? void 0 : g[+p[1] + 1]];
        if (!M || !c) continue;
        const f = new me().setFromPoints([new m(M[0], M[1], M[2]), new m(c[0], c[1], c[2])]), P = new $t(f, new ht({ color: Wt, transparent: true, opacity: 0.95, depthTest: false }));
        P.renderOrder = 999, Ze.add(P);
      } else if (u === "poly") {
        const M = o[+p[0]].map((P) => {
          const $ = n[P];
          return $ ? new m($[0], $[1], $[2]) : null;
        }).filter(Boolean);
        if (M.length < 2) continue;
        const c = new me().setFromPoints(M), f = new $t(c, new ht({ color: Wt, transparent: true, opacity: 0.95, depthTest: false }));
        f.renderOrder = 999, Ze.add(f);
      } else if (u === "aux") {
        const g = t[+p[0]];
        if (!g || g.length !== 6) continue;
        const M = new me().setFromPoints([new m(g[0], g[1], g[2]), new m(g[3], g[4], g[5])]), c = new $t(M, new ht({ color: Wt, transparent: true, opacity: 0.95, depthTest: false }));
        c.renderOrder = 999, Ze.add(c);
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
  const ye = (n, o, a, t, r, s, l, u, p) => {
    const g = l - t, M = u - r, c = p - s, f = g * g + M * M + c * c;
    if (f < 1e-12) return Math.hypot(n - t, o - r, a - s);
    let P = ((n - t) * g + (o - r) * M + (a - s) * c) / f;
    P = Math.max(0, Math.min(1, P));
    const $ = t + P * g, B = r + P * M, U = s + P * c;
    return Math.hypot(n - $, o - B, a - U);
  }, Re = (n, o, a, t) => {
    if (!e.polylines) return null;
    const r = e.polylines.rawVal, s = e.points.rawVal;
    let l = -1, u = -1, p = t;
    for (let g = 0; g < r.length; g++) {
      const M = r[g];
      for (let c = 0; c < M.length - 1; c++) {
        const f = s[M[c]], P = s[M[c + 1]];
        if (!f || !P) continue;
        const $ = ye(n, o, a, f[0], f[1], f[2], P[0], P[1], P[2]);
        $ < p && (p = $, l = g, u = c);
      }
    }
    return l >= 0 ? { polyIdx: l, segIdx: u, dist: p } : null;
  }, xe = (n, o, a, t) => {
    const r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? (r == null ? void 0 : r.val) ?? r ?? [];
    let l = -1, u = t;
    for (let p = 0; p < s.length; p++) {
      const g = s[p];
      if (!g || g.length !== 6) continue;
      const M = ye(n, o, a, g[0], g[1], g[2], g[3], g[4], g[5]);
      M < u && (u = M, l = p);
    }
    return l;
  }, at = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      Me.visible = false;
      return;
    }
    Me.geometry.setFromPoints([new m(t[0], t[1], t[2]), new m(t[3], t[4], t[5])]), Me.visible = true;
  }, ut = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const a = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!a || a.length < 2) {
      Me.visible = false;
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
    Me.geometry.setFromPoints(s), Me.visible = true;
  }, Bt = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const a = o.filter((p, g) => g !== n), t = /* @__PURE__ */ new Set();
    for (const p of a) for (const g of p) t.add(g);
    const r = e.points.rawVal, s = /* @__PURE__ */ new Map(), l = [];
    for (let p = 0; p < r.length; p++) t.has(p) && (s.set(p, l.length), l.push(r[p]));
    const u = a.map((p) => p.map((g) => s.get(g)).filter((g) => g !== void 0));
    e.points.val = l, e.polylines.val = u, e.areas && (e.areas.val = e.areas.rawVal.filter((p) => p !== n).map((p) => p > n ? p - 1 : p)), Me.visible = false, yt = -1, pt = -1;
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
      Bt(n);
      return;
    }
    const r = a[n];
    if (o < 0 || o >= r.length - 1) return;
    if (r.length === 2) {
      Bt(n);
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
    Me.visible = false, yt = -1, pt = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  he.geometry.setAttribute("position", new Rt(e.points.rawVal.flat(), 3)), he.geometry.computeBoundingSphere(), he.frustumCulled = false, se.frustumCulled = false, y.add(se), H.position.set(0, 0, 0), H.rotateX(Math.PI / 2), H.geometry.rotateX(Math.PI / 2), H.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, a) => {
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
    const r = Math.max(4, Math.round(t)), s = new m(...n), l = new m(...o), u = new m(...a), p = new m().subVectors(l, s), g = new m().subVectors(u, s), M = new m().crossVectors(p, g).normalize(), c = new m().addVectors(s, l).multiplyScalar(0.5), f = new m().addVectors(l, u).multiplyScalar(0.5), P = new m().crossVectors(p, M).normalize(), $ = new m().crossVectors(new m().subVectors(u, l), M).normalize(), B = new m().subVectors(f, c), U = P.x * $.y - P.y * $.x;
    let A;
    if (Math.abs(U) > 1e-9) {
      const qe = (B.x * $.y - B.y * $.x) / U;
      A = new m().addVectors(c, P.clone().multiplyScalar(qe));
    } else A = c.clone();
    const j = s.distanceTo(A), oe = new m().subVectors(s, A), pe = new m().subVectors(u, A), le = Math.acos(Math.max(-1, Math.min(1, oe.dot(pe) / (j * j)))), Ce = e.points.rawVal.length, Je = [], vt = M.clone();
    for (let qe = 0; qe <= r; qe++) {
      const $e = qe / r, ft = le * $e, lt = new Jn().setFromAxisAngle(vt, ft), bt = oe.clone().applyQuaternion(lt).add(A);
      Je.push([bt.x, bt.y, bt.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...Je], e.polylines) {
      const qe = Je.map((ft, lt) => Ce + lt), $e = e.polylines.rawVal;
      e.polylines.val = [...$e.slice(0, -1), qe, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, a = 1, t = 6, r = 6) => {
    const s = Math.min(n[0], o[0]), l = Math.max(n[0], o[0]), u = Math.min(n[1], o[1]), p = Math.max(n[1], o[1]), g = (n[2] + o[2]) / 2, M = l - s, c = p - u, f = Math.min(a, M / 2 - 0.01, c / 2 - 0.01);
    if (f <= 0) return;
    const P = e.points.rawVal.length, $ = [], B = [], U = (A, j) => {
      $.push([A, j, g]), B.push(P + $.length - 1);
    };
    for (let A = 0; A <= r; A++) U(s + f + (M - 2 * f) * A / r, u);
    for (let A = 1; A <= t; A++) {
      const j = -Math.PI / 2 + Math.PI / 2 * A / t;
      U(l - f + f * Math.cos(j), u + f + f * Math.sin(j));
    }
    for (let A = 1; A <= r; A++) U(l, u + f + (c - 2 * f) * A / r);
    for (let A = 1; A <= t; A++) {
      const j = 0 + Math.PI / 2 * A / t;
      U(l - f + f * Math.cos(j), p - f + f * Math.sin(j));
    }
    for (let A = 1; A <= r; A++) U(l - f - (M - 2 * f) * A / r, p);
    for (let A = 1; A <= t; A++) {
      const j = Math.PI / 2 + Math.PI / 2 * A / t;
      U(s + f + f * Math.cos(j), p - f + f * Math.sin(j));
    }
    for (let A = 1; A <= r; A++) U(s, p - f - (c - 2 * f) * A / r);
    for (let A = 1; A <= t; A++) {
      const j = Math.PI + Math.PI / 2 * A / t;
      U(s + f + f * Math.cos(j), u + f + f * Math.sin(j));
    }
    if (B.push(P), e.points.val = [...e.points.rawVal, ...$], e.polylines) {
      const A = e.polylines.rawVal;
      e.polylines.val = [...A.slice(0, -1), B, []];
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
      const M = e.gridTarget.rawVal, c = new zn(...M.rotation), f = new m(1, 0, 0).applyEuler(c), P = new m(0, 1, 0).applyEuler(c), $ = new m(...M.position), B = new m(t, r, s), U = new m(l, u, p), A = B.clone().sub($).dot(f), j = B.clone().sub($).dot(P), oe = U.clone().sub($).dot(f), pe = U.clone().sub($).dot(P), le = (Ce, Je) => $.clone().addScaledVector(f, Ce).addScaledVector(P, Je).toArray();
      g = [le(A, j), le(oe, j), le(oe, pe), le(A, pe)];
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
    for (let ge = 0; ge < a; ge++) {
      const Ie = n[ge], tt = n[(ge + 1) % a];
      t += (Ie[1] - tt[1]) * (Ie[2] + tt[2]), r += (Ie[2] - tt[2]) * (Ie[0] + tt[0]), s += (Ie[0] - tt[0]) * (Ie[1] + tt[1]);
    }
    const l = Math.hypot(t, r, s) || 1;
    t /= l, r /= l, s /= l;
    let u = n[1][0] - n[0][0], p = n[1][1] - n[0][1], g = n[1][2] - n[0][2];
    const M = Math.hypot(u, p, g) || 1;
    u /= M, p /= M, g /= M;
    let c = r * g - s * p, f = s * u - t * g, P = t * p - r * u;
    const $ = Math.hypot(c, f, P) || 1;
    c /= $, f /= $, P /= $;
    const B = n[0], U = (ge) => [(ge[0] - B[0]) * u + (ge[1] - B[1]) * p + (ge[2] - B[2]) * g, (ge[0] - B[0]) * c + (ge[1] - B[1]) * f + (ge[2] - B[2]) * P], A = (ge, Ie) => [B[0] + ge * u + Ie * c, B[1] + ge * p + Ie * f, B[2] + ge * g + Ie * P], j = n.map(U);
    let oe = 1 / 0, pe = -1 / 0, le = 1 / 0, Ce = -1 / 0;
    for (const [ge, Ie] of j) ge < oe && (oe = ge), ge > pe && (pe = ge), Ie < le && (le = Ie), Ie > Ce && (Ce = Ie);
    const Je = pe - oe, vt = Ce - le;
    if (Je < 1e-6 || vt < 1e-6) return 0;
    let qe = o && o > 0 ? o : 0.5;
    for (; Je / qe * (vt / qe) > 2500; ) qe *= 2;
    qe = Math.min(qe, Math.min(Je, vt));
    const $e = (ge, Ie) => {
      let tt = false;
      for (let Ht = 0, on = j.length - 1; Ht < j.length; on = Ht++) {
        const [wn, Sn] = j[Ht], [yn, kn] = j[on];
        Sn > Ie != kn > Ie && ge < (yn - wn) * (Ie - Sn) / (kn - Sn) + wn && (tt = !tt);
      }
      return tt;
    }, ft = Math.max(1, Math.round(Je / qe)), lt = Math.max(1, Math.round(vt / qe)), bt = Je / ft, Lt = vt / lt, nn = /* @__PURE__ */ new Map(), qt = [], Ft = e.points.rawVal.length, Kt = (ge, Ie) => {
      const tt = ge + "," + Ie, Ht = nn.get(tt);
      if (Ht !== void 0) return Ht;
      const on = Ft + qt.length;
      return qt.push(A(oe + ge * bt, le + Ie * Lt)), nn.set(tt, on), on;
    }, It = [];
    for (let ge = 0; ge < ft; ge++) for (let Ie = 0; Ie < lt; Ie++) {
      if (!$e(oe + (ge + 0.5) * bt, le + (Ie + 0.5) * Lt)) continue;
      const tt = Kt(ge, Ie), Ht = Kt(ge + 1, Ie), on = Kt(ge + 1, Ie + 1), wn = Kt(ge, Ie + 1);
      It.push([tt, Ht, on, wn]);
    }
    if (!It.length) return 0;
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...qt], e.polylines && e.areas) {
      let ge = e.polylines.rawVal.slice();
      ge.length && ge[ge.length - 1].length === 0 && (ge = ge.slice(0, -1));
      const Ie = [];
      for (const tt of It) Ie.push(ge.length), ge.push([tt[0], tt[1], tt[2], tt[3], tt[0]]);
      ge.push([]), e.polylines.val = ge, e.areas.val = [...e.areas.rawVal, ...Ie];
    }
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    return w(), It.length;
  };
  const Ge = () => {
    if (ce.length < 3) return ce = [], ee.visible = false, w(), 0;
    const n = window.__hekatanMeshPolyArea(ce.slice());
    return ce = [], ee.visible = false, w(), n;
  };
  window.__hekatanFinalizePolyArea = Ge, window.__hekatanSetInclinedPlaneFrom3 = (n, o, a) => {
    var _a;
    const t = new m(n[0], n[1], n[2]), r = new m(o[0], o[1], o[2]), s = new m(a[0], a[1], a[2]), l = new m().subVectors(r, t).cross(new m().subVectors(s, t));
    if (l.lengthSq() < 1e-9) return false;
    l.normalize();
    const u = new Jn().setFromUnitVectors(new m(0, 0, 1), l), p = new zn().setFromQuaternion(u);
    e.gridTarget && (e.gridTarget.val = { position: [t.x, t.y, t.z], rotation: [p.x, p.y, p.z] }), S = true;
    const g = new m().addVectors(t, r).add(s).multiplyScalar(1 / 3), M = Math.max(t.distanceTo(r), t.distanceTo(s), r.distanceTo(s)) * 2.2 + 4, c = M / 2;
    Fe.geometry.dispose(), Fe.geometry = new ln(M, M), be.geometry.dispose(), be.geometry = new yo(new ln(M, M)), Le(c, 1), G.position.copy(g), G.quaternion.copy(u), G.scale.set(1, 1, 1), G.visible = true;
    try {
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
    } catch {
    }
    return w(), true;
  }, window.__hekatanResetPlaneXY = () => {
    e.gridTarget && (e.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, 0] }), S = false, G.visible = false, w();
  };
  const je = new nt();
  je.visible = false, y.add(je), window.__hekatanShowAxes = (n, o, a = 12, t = 2) => {
    var _a, _b;
    for (; je.children.length; ) {
      const M = je.children.pop();
      (_a = M.geometry) == null ? void 0 : _a.dispose(), (_b = M.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const r = Math.min(...o) - t, s = Math.max(...o) + t, l = Math.min(...n) - t, u = Math.max(...n) + t, p = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", g = (M, c, f, P, $) => {
      const B = document.createElement("canvas");
      B.width = 64, B.height = 32;
      const U = B.getContext("2d");
      U.fillStyle = $, U.font = "bold 22px sans-serif", U.textAlign = "center", U.fillText(M, 32, 26);
      const A = new xo(B), j = new go({ map: A, transparent: true }), oe = new vo(j);
      return oe.position.set(c, f, P), oe.scale.set(1.2, 0.6, 1), oe;
    };
    n.forEach((M, c) => {
      const f = c < p.length ? p[c] : `X${c}`, P = new me().setFromPoints([new m(M, r, 0), new m(M, s, 0), new m(M, r, 0), new m(M, r, a)]), $ = new Pn({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), B = new Ot(P, $);
      B.computeLineDistances(), je.add(B), je.add(g(f, M, r - 0.5, 0, "#60a5fa")), je.add(g(f, M, s + 0.5, 0, "#60a5fa"));
    }), o.forEach((M, c) => {
      const f = `${c + 1}`, P = new me().setFromPoints([new m(l, M, 0), new m(u, M, 0), new m(l, M, 0), new m(l, M, a)]), $ = new Pn({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), B = new Ot(P, $);
      B.computeLineDistances(), je.add(B), je.add(g(f, l - 0.5, M, 0, "#fb7185")), je.add(g(f, u + 0.5, M, 0, "#fb7185"));
    }), je.visible = true, w();
  }, window.__hekatanHideAxes = () => {
    je.visible = false, w();
  };
  const it = new nt();
  it.visible = false, y.add(it);
  let Zt = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, a = 0, t = 0) => {
    var _a, _b;
    for (; it.children.length; ) {
      const s = it.children.pop();
      (_a = s.geometry) == null ? void 0 : _a.dispose(), (_b = s.material) == null ? void 0 : _b.dispose();
    }
    Zt.forEach((s) => {
      y.remove(s), s.geometry.dispose(), s.material.dispose();
    }), Zt = [];
    const r = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((s, l) => {
      const u = r[l % r.length], p = o / 2, g = [new m(a - p, t - p, s), new m(a + p, t - p, s), new m(a + p, t + p, s), new m(a - p, t + p, s), new m(a - p, t - p, s)], M = new me().setFromPoints(g), c = new ht({ color: u, transparent: true, opacity: 0.55 });
      it.add(new $t(M, c));
      const f = document.createElement("canvas");
      f.width = 128, f.height = 32;
      const P = f.getContext("2d");
      P.fillStyle = `#${u.toString(16).padStart(6, "0")}`, P.font = "bold 18px sans-serif", P.fillText(`Z = ${s} m`, 4, 22);
      const $ = new xo(f), B = new go({ map: $, transparent: true }), U = new vo(B);
      U.position.set(a - p - 1.5, t - p - 1.5, s), U.scale.set(2.5, 0.6, 1), it.add(U);
      const A = new ln(1e4, 1e4), j = new ot({ visible: false, side: Dt }), oe = new Oe(A, j);
      oe.position.set(0, 0, s), oe.frustumCulled = false, oe.userData = { refPlaneZ: s }, y.add(oe), Zt.push(oe);
    }), it.visible = true, w();
  }, window.__hekatanHideRefPlanes = () => {
    it.visible = false, Zt.forEach((n) => {
      n.visible = false;
    }), w();
  };
  const Ut = new nt();
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
      const t = new me().setFromPoints([new m(a[0], a[1], a[2]), new m(a[3], a[4], a[5])]), r = new Pn({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), s = new $t(t, r);
      s.computeLineDistances(), Ut.add(s);
    }
  };
  R.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, Gt(), w());
  });
  const xt = new nt();
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
      const t = new Oe(new xn(0.025, 12, 12), new ot({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(a[0], a[1], a[2]), t.renderOrder = 996, t.scale.setScalar(st(t.position)), xt.add(t);
    }
  };
  R.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, sn(), w());
  }), d.addEventListener("change", () => {
    xt.children.forEach((n) => {
      n.scale.setScalar(st(n.position));
    });
  }), window.__hekatanRenderAuxPoints = sn;
  const gt = new nt(), En = new Oe(new xn(0.01, 12, 12), new ot({ color: 16724804, transparent: true, opacity: 0.95 })), gn = new Oe(new xn(0.015, 12, 12), new ot({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  gt.add(En, gn);
  const Qt = 0.08, vn = (n, o, a) => {
    const t = new me().setFromPoints([new m(...n), new m(...o)]);
    return new $t(t, new ht({ color: a, transparent: true, opacity: 0.7 }));
  };
  gt.add(vn([-Qt, 0, 0], [Qt, 0, 0], 16711680)), gt.add(vn([0, -Qt, 0], [0, Qt, 0], 65280)), gt.add(vn([0, 0, -Qt], [0, 0, Qt], 35071)), gt.visible = false, gt.frustumCulled = false, y.add(gt);
  const An = 40, Zn = 2.5, bn = () => {
    if (!gt.visible) return;
    const o = h().position.distanceTo(gt.position), a = Math.max(0.05, Math.min(Zn, o / An));
    gt.scale.setScalar(a);
  }, Vn = () => {
    Ze.children.length !== 0 && Ze.children.forEach((n) => {
      if (!n.__isSelectionPt) return;
      const o = n;
      o.scale.setScalar(st(o.position));
    });
  };
  window.__hekatanUpdateSelectionPtScale = Vn, d.addEventListener("change", () => {
    bn(), We.visible && pn();
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
        const M = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = Xe(t.x, t.y, t.z, M), f = Re(t.x, t.y, t.z, M), P = xe(t.x, t.y, t.z, M);
        if (c >= 0) {
          const A = e.points.rawVal[c];
          We.position.set(A[0], A[1], A[2]), We.visible = true, pn(), Se.visible = false, _t = { kind: "pt", a: c };
        } else if (f) {
          const A = e.points.rawVal, j = e.polylines.rawVal[f.polyIdx], oe = A[j[f.segIdx]], pe = A[j[f.segIdx + 1]];
          Se.geometry.setFromPoints([new m(oe[0], oe[1], oe[2]), new m(pe[0], pe[1], pe[2])]), Se.visible = true, We.visible = false, _t = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(f.polyIdx)) ?? false ? { kind: "poly", a: f.polyIdx } : { kind: "seg", a: f.polyIdx, b: f.segIdx };
        } else if (P >= 0) {
          const j = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[P];
          j && (Se.geometry.setFromPoints([new m(j[0], j[1], j[2]), new m(j[3], j[4], j[5])]), Se.visible = true, We.visible = false, _t = { kind: "aux", a: P });
        } else Se.visible = false, We.visible = false, _t = null;
        ae.style.left = n.clientX + "px", ae.style.top = n.clientY + "px", ae.style.display = "block";
        let $ = t;
        if ((_t == null ? void 0 : _t.kind) === "pt") {
          const A = e.points.rawVal[_t.a];
          A && ($ = new m(A[0], A[1], A[2]));
        }
        const B = `X=${$.x.toFixed(2)} Y=${$.y.toFixed(2)} Z=${$.z.toFixed(2)}`;
        if (_t) {
          const A = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          ae.textContent = `${B}  \xB7  \u{1F5B1} Click \u2192 ${A[_t.kind]}`;
        } else ae.textContent = B;
        const U = document.getElementById("hk-coord-fixed");
        U && (U.textContent = B), D.visible = false, Ae.visible = false, w();
        return;
      }
      if (l === "delete") {
        const M = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = Re(t.x, t.y, t.z, M), f = xe(t.x, t.y, t.z, M);
        let P = false;
        if (f >= 0) if (!c) P = true;
        else {
          const A = window.__hekatanDrawingAuxLines, oe = ((A == null ? void 0 : A.rawVal) ?? (A == null ? void 0 : A.val) ?? A ?? [])[f];
          ye(t.x, t.y, t.z, oe[0], oe[1], oe[2], oe[3], oe[4], oe[5]) < c.dist && (P = true);
        }
        P ? (Be = f, yt = -1, pt = -1, at(f)) : c ? (yt = c.polyIdx, pt = c.segIdx, Be = -1, ut(c.polyIdx, c.segIdx)) : (yt = -1, pt = -1, Be = -1, Me.visible = false), D.visible = false, Ae.visible = false, T(), ae.style.left = n.clientX + "px", ae.style.top = n.clientY + "px", ae.style.display = "block";
        const $ = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let B = "";
        P ? B = `\u{1F5D1} l\xEDnea aux #${Be + 1}` : c ? B = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(c.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${c.polyIdx + 1}` : `\u{1F5D1} seg ${c.segIdx + 1} / poly #${c.polyIdx + 1}` : B = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", ae.textContent = `${$}  \xB7  ${B}`;
        const U = document.getElementById("hk-coord-fixed");
        U && (U.textContent = $), w();
        return;
      } else Me.visible = false, yt = -1, Be = -1;
      ae.style.left = n.clientX + "px", ae.style.top = n.clientY + "px", ae.style.display = "block";
      const u = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], p = u[u.length - 1] ?? [], g = e.points.rawVal ?? [];
      if (p.length > 0 && g[p[p.length - 1]]) {
        const M = p[p.length - 1], c = g[M];
        let f = J;
        if (Pe = null, !f && window.__hekatanAxisSnap !== false) {
          const $e = x.getBoundingClientRect(), ft = n.clientX, lt = n.clientY, bt = ((_k = settings.gridSize) == null ? void 0 : _k.rawVal) ?? 10, Lt = new m(c[0], c[1], c[2]), nn = [["x", new m(1, 0, 0)], ["y", new m(0, 1, 0)], ["z", new m(0, 0, 1)]], qt = (Kt) => {
            const It = Kt.clone().project(o);
            return { x: (It.x * 0.5 + 0.5) * $e.width + $e.left, y: (-It.y * 0.5 + 0.5) * $e.height + $e.top };
          };
          let Ft = null;
          for (const [Kt, It] of nn) {
            const ge = qt(Lt.clone().addScaledVector(It, -bt)), Ie = qt(Lt.clone().addScaledVector(It, bt)), tt = Ie.x - ge.x, Ht = Ie.y - ge.y, on = ft - ge.x, wn = lt - ge.y, Sn = tt * tt + Ht * Ht || 1;
            let yn = (on * tt + wn * Ht) / Sn;
            yn = Math.max(0, Math.min(1, yn));
            const kn = Math.hypot(ft - (ge.x + yn * tt), lt - (ge.y + yn * Ht));
            if (Ft === null || kn < Ft.dpx) {
              const Wn = _.ray, ho = Lt.clone().sub(Wn.origin), Gn = It.dot(Wn.direction), mo = It.dot(ho), No = Wn.direction.dot(ho), wo = 1 - Gn * Gn, Zo = Math.abs(wo) < 1e-6 ? -mo : (Gn * No - mo) / wo;
              Ft = { axis: Kt, dpx: kn, pt: Lt.clone().addScaledVector(It, Zo) };
            }
          }
          Ft && Ft.dpx <= 12 && (t.copy(Ft.pt), f = Ft.axis, Pe = Ft.pt.clone());
        }
        const P = !!window.__hekatanOrthoMode;
        if (!f && P) {
          const $e = Math.abs(t.x - c[0]), ft = Math.abs(t.y - c[1]), lt = Math.abs(t.z - c[2]), bt = (_l = a[0]) == null ? void 0 : _l.object;
          let Lt = null;
          bt === De ? Lt = "xy" : bt === wt ? Lt = "xz" : bt === dt && (Lt = "yz"), Lt === "xy" ? f = $e >= ft ? "x" : "y" : Lt === "xz" ? f = $e >= lt ? "x" : "z" : Lt === "yz" ? f = ft >= lt ? "y" : "z" : f = $e >= ft && $e >= lt ? "x" : ft >= lt ? "y" : "z";
        }
        const $ = window.__hekatanPolarTrack !== false;
        if (!f && $) {
          const $e = t.x - c[0], ft = t.y - c[1], lt = t.z - c[2], bt = Math.hypot($e, ft, lt);
          if (bt > 1e-3) {
            const nn = Math.tan(6 * Math.PI / 180) * bt, qt = Math.hypot(ft, lt), Ft = Math.hypot($e, lt), Kt = Math.hypot($e, ft), It = [["x", qt], ["y", Ft], ["z", Kt]];
            It.sort((ge, Ie) => ge[1] - Ie[1]), It[0][1] <= nn && (f = It[0][0]);
          }
        }
        if (f) {
          const $e = c[0], ft = c[1], lt = c[2];
          f === "x" ? t.set(t.x, ft, lt) : f === "y" ? t.set($e, t.y, lt) : t.set($e, ft, t.z);
          const bt = !!J, nn = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[f];
          Q.style.background = "rgba(15,23,42,0.92)", Q.style.color = nn, Q.style.border = `1.5px solid ${nn}`;
          const qt = (_m = a[0]) == null ? void 0 : _m.object;
          let Ft = null;
          qt === De ? Ft = "xy" : qt === wt ? Ft = "xz" : qt === dt && (Ft = "yz");
          const Kt = Ft ? ` (plano ${Ft.toUpperCase()})` : "";
          Q.textContent = bt ? `\u{1F512} LOCK ${f.toUpperCase()}${Kt}` : `\u22A5 ORTO ${f.toUpperCase()}${Kt}`, Q.style.left = n.clientX + 20 + "px", Q.style.top = n.clientY + 18 + "px", Q.style.transform = "none", Q.style.display = "block";
        } else J || (Q.style.display = "none");
        const B = Math.hypot(t.x - c[0], t.y - c[1], t.z - c[2]), U = Math.atan2(t.y - c[1], t.x - c[0]) * 180 / Math.PI, A = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        ae.textContent = `${A} | \u0394L=${B.toFixed(2)}m ${U.toFixed(0)}\xB0`;
        const j = document.getElementById("hk-coord-fixed");
        j && (j.textContent = A), D.geometry.setFromPoints([new m(c[0], c[1], c[2]), new m(t.x, t.y, t.z)]), (_n2 = D.computeLineDistances) == null ? void 0 : _n2.call(D), D.visible = true, F(c[0], c[1], c[2], t.x, t.y, t.z);
        const oe = window.__hekatanOrthoExt ?? 8, pe = window.__hekatanShowOrthoPlanes !== false;
        Ye.visible = pe, pe || jt(null), pe && (Z(de, c, "xy", oe), Z(fe, c, "xz", oe), Z(Te, c, "yz", oe), Xt(De, c, "xy", oe), Xt(wt, c, "xz", oe), Xt(dt, c, "yz", oe));
        const le = pe ? _.intersectObjects([De, wt, dt], false) : [];
        let Ce = null;
        if (le.length > 0) {
          const $e = le[0].object;
          $e === De ? Ce = "xy" : $e === wt ? Ce = "xz" : $e === dt && (Ce = "yz");
        }
        jt(Ce), Ce && (Ct.style.left = n.clientX + "px", Ct.style.top = n.clientY + "px"), zt.geometry.setFromPoints([new m(c[0] - oe, c[1], c[2]), new m(c[0] + oe, c[1], c[2])]), (_o2 = zt.computeLineDistances) == null ? void 0 : _o2.call(zt), ct.geometry.setFromPoints([new m(c[0], c[1] - oe, c[2]), new m(c[0], c[1] + oe, c[2])]), (_p = ct.computeLineDistances) == null ? void 0 : _p.call(ct), I.geometry.setFromPoints([new m(c[0], c[1], c[2] - oe), new m(c[0], c[1], c[2] + oe)]), (_q = I.computeLineDistances) == null ? void 0 : _q.call(I), Ae.visible = true;
        const Je = zt.material, vt = ct.material, qe = I.material;
        f === "x" ? (Je.opacity = 0.95, vt.opacity = 0.1, qe.opacity = 0.1) : f === "y" ? (Je.opacity = 0.1, vt.opacity = 0.95, qe.opacity = 0.1) : f === "z" ? (Je.opacity = 0.1, vt.opacity = 0.1, qe.opacity = 0.95) : (Je.opacity = 0.5, vt.opacity = 0.5, qe.opacity = 0.5);
      } else {
        const M = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        ae.textContent = M;
        const c = document.getElementById("hk-coord-fixed");
        if (c && (c.textContent = M), D.visible = false, Ae.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(l)) {
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
    } else Un(), ae.style.display = "none", gt.visible = false, D.visible = false, Ae.visible = false, T(), w();
  }), R.derive(() => {
    if (!e.gridTarget) return;
    _s(i, { position: new m(...e.gridTarget.val.position), quaternion: new Jn().setFromEuler(new zn(...e.gridTarget.val.rotation)) }, w), H.position.set(...e.gridTarget.val.position), H.quaternion.setFromEuler(new zn(...e.gridTarget.val.rotation)), H.updateMatrixWorld();
    const n = new m(0, 0, 1).applyEuler(new zn(...e.gridTarget.val.rotation));
    S = !(Math.abs(n.x) > 0.999 || Math.abs(n.y) > 0.999 || Math.abs(n.z) > 0.999);
  }), R.derive(() => {
    he.geometry.setAttribute("position", new Rt(e.points.val.flat(), 3)), he.geometry.computeBoundingSphere();
  }), R.derive(() => {
    const n = 0.05 * k * 0.5 * v.val;
    _.params.Points.threshold = 0.4 * n;
  }), R.derive(() => {
    var _a;
    const n = e.points.val ?? [], a = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const s of a) {
      const [l, u, p] = n[s];
      t.push(l, u, p);
    }
    const r = new me();
    r.setAttribute("position", new Rt(t, 3)), ve.geometry.dispose(), ve.geometry = r;
  });
  let un = false, en = 0;
  x.addEventListener("pointerdown", () => {
    un = true;
  }), x.addEventListener("pointerup", () => {
    un = false;
  }), x.addEventListener("pointermove", () => {
    un && en++;
  });
  const St = document.createElement("div");
  St.id = "hk-window-select", St.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(St);
  let Nt = null, rn = false, At = null;
  const fn = (n, o, a, t, r) => {
    r ? (St.style.borderColor = "#34d399", St.style.borderStyle = "dashed", St.style.background = "rgba(52, 211, 153, 0.10)") : (St.style.borderColor = "#22d3ee", St.style.borderStyle = "solid", St.style.background = "rgba(34, 211, 238, 0.10)"), St.style.left = Math.min(n, a) + "px", St.style.top = Math.min(o, t) + "px", St.style.width = Math.abs(a - n) + "px", St.style.height = Math.abs(t - o) + "px", St.style.display = "block";
  }, io = (n, o, a, t, r) => {
    var _a, _b, _c, _d;
    const s = Math.min(n, a), l = Math.max(n, a), u = Math.min(o, t), p = Math.max(o, t), g = a < n, M = x.getBoundingClientRect(), c = h();
    c.updateMatrixWorld();
    const f = (le) => {
      const Ce = new m(le[0], le[1], le[2]);
      return Ce.project(c), { x: M.left + (Ce.x * 0.5 + 0.5) * M.width, y: M.top + (-Ce.y * 0.5 + 0.5) * M.height };
    }, P = (le) => le.x >= s && le.x <= l && le.y >= u && le.y <= p, $ = (le, Ce) => !(le.x < s && Ce.x < s || le.x > l && Ce.x > l || le.y < u && Ce.y < u || le.y > p && Ce.y > p);
    r || ze.clear();
    let B = 0;
    const U = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let le = 0; le < U.length; le++) {
      const Ce = U[le];
      Ce && P(f(Ce)) && (ze.add(`pt:${le}`), B++);
    }
    const A = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], j = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let le = 0; le < A.length; le++) {
      const Ce = A[le], Je = j.includes(le);
      let vt = false;
      for (let qe = 0; qe < Ce.length - 1; qe++) {
        const $e = U[Ce[qe]], ft = U[Ce[qe + 1]];
        if (!$e || !ft) continue;
        const lt = f($e), bt = f(ft);
        if (P(lt) || P(bt) || $(lt, bt)) {
          if (Je) {
            vt = true;
            break;
          }
          ze.add(`seg:${le}:${qe}`), B++;
        }
      }
      Je && vt && (ze.add(`poly:${le}`), B++);
    }
    const pe = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let le = 0; le < pe.length; le++) {
      const Ce = pe[le];
      if (!Ce || Ce.length !== 6) continue;
      const Je = f([Ce[0], Ce[1], Ce[2]]), vt = f([Ce[3], Ce[4], Ce[5]]);
      (P(Je) || P(vt) || $(Je, vt)) && (ze.add(`aux:${le}`), B++);
    }
    ke(), ie(`${g ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${B} item(s) ${r ? "agregados a" : "\u2192"} selecci\xF3n (total ${ze.size})`), St.style.display = "none";
  }, Tn = () => {
    At && (At = null, St.style.display = "none", ie("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = Tn, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && At && Tn();
  });
  const lo = () => {
    var _a, _b, _c, _d;
    if (ze.size === 0) return false;
    const n = [...ze], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], a = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? [], l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Set();
    for (const $ of n) {
      const [B, ...U] = $.split(":");
      if (B === "pt") l.add(+U[0]);
      else if (B === "poly") u.add(+U[0]);
      else if (B === "seg") {
        const A = +U[0], j = +U[1];
        p.has(A) || p.set(A, /* @__PURE__ */ new Set()), p.get(A).add(j);
      } else B === "aux" && g.add(+U[0]);
    }
    let M = 0, c = [], f = [];
    const P = /* @__PURE__ */ new Map();
    for (let $ = 0; $ < a.length; $++) {
      if (u.has($)) {
        M++;
        continue;
      }
      P.set($, c.length);
      const B = p.get($);
      if (B && B.size > 0) {
        let U = [];
        for (let A = 0; A < a[$].length; A++) U.push(a[$][A]), A < a[$].length - 1 && B.has(A) && (U.length >= 2 && c.push(U), U = [], M++);
        (U.length >= 2 || U.length === 1) && c.push(U);
      } else c.push([...a[$]]);
    }
    if (l.size > 0) {
      const $ = [], B = /* @__PURE__ */ new Map();
      for (let A = 0; A < o.length; A++) {
        if (l.has(A)) {
          M++;
          continue;
        }
        B.set(A, $.length), $.push([...o[A]]);
      }
      const U = [];
      for (const A of c) {
        let j = [];
        for (const oe of A) {
          const pe = B.get(oe);
          pe === void 0 ? (j.length >= 2 && U.push(j), j = []) : j.push(pe);
        }
        j.length >= 2 && U.push(j);
      }
      c = U, e.points.val = $;
    }
    for (const $ of t) {
      const B = P.get($);
      B !== void 0 && B < c.length && f.push(B);
    }
    if (e.polylines && (e.polylines.val = c), e.areas && (e.areas.val = f), g.size > 0 && r) {
      const $ = s.filter((B, U) => !g.has(U));
      "val" in r ? r.val = $ : window.__hekatanDrawingAuxLines = $, M += g.size;
    }
    ze.clear(), ke();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return ie(`\u{1F5D1} ${M} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = lo, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement, a = o && (o.id === "hk3-cmd-input" || o.id === "hk-dyn-input") && o.value === "";
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && !a || ze.size !== 0 && (n.preventDefault(), lo());
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
  let et = null;
  const kt = (n, o, a, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: a, value: t } }));
  }, Bo = () => {
    if (et && (et.dispose(), et = null), ze.size === 0) {
      Yt.style.display = "none";
      return;
    }
    const n = [...ze], o = n.filter((c) => c.startsWith("pt:")), a = n.filter((c) => c.startsWith("seg:")), t = n.filter((c) => c.startsWith("poly:")), r = n.filter((c) => c.startsWith("aux:")), s = o.length > 0, l = a.length > 0, u = t.length > 0, p = !s && !l && !u, g = [];
    o.length && g.push(`\u{1F535} ${o.length} nodo(s)`), a.length && g.push(`\u{1F4CF} ${a.length} segmento(s)`), t.length && g.push(`\u25AD ${t.length} \xE1rea(s)`), r.length && g.push(`\u250A ${r.length} aux`);
    const M = `\u{1F3AF} ${ze.size} item(s) \u2014 ${g.join(", ")}`;
    et = new Ao({ container: Yt, title: M });
    {
      const c = et.addFolder({ title: "\u270F\uFE0F Editar \u2014 Replicar / Mover", expanded: false });
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
      const c = et.addFolder({ title: `\u{1F4CC} Restraints (DOFs) \u2014 ${o.length} nodo(s)` });
      c.addBinding(X, "Ux"), c.addBinding(X, "Uy"), c.addBinding(X, "Uz"), c.addBinding(X, "Rx"), c.addBinding(X, "Ry"), c.addBinding(X, "Rz");
      const f = et.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      f.addBinding(X, "Kx", { label: "Kx", min: 0, step: 100 }), f.addBinding(X, "Ky", { label: "Ky", min: 0, step: 100 }), f.addBinding(X, "Kz", { label: "Kz", min: 0, step: 100 }), f.addBinding(X, "Krx", { label: "Krx", min: 0, step: 1e3 }), f.addBinding(X, "Kry", { label: "Kry", min: 0, step: 1e3 }), f.addBinding(X, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const P = et.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      P.addBinding(X, "Fx", { step: 0.1 }), P.addBinding(X, "Fy", { step: 0.1 }), P.addBinding(X, "Fz", { step: 0.1 }), P.addBinding(X, "Mx", { step: 0.1 }), P.addBinding(X, "My", { step: 0.1 }), P.addBinding(X, "Mz", { step: 0.1 }), et.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(X, "mass", { label: "m", min: 0, step: 1 }), et.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(X, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), et.addButton({ title: `\u2713 Aplicar a ${o.length} nodo(s) seleccionado(s)` }).on("click", () => {
        let U = 0;
        const A = [X.Ux, X.Uy, X.Uz, X.Rx, X.Ry, X.Rz];
        A.some((pe) => pe) && (kt("nodes", o, "supports", A), U++);
        const j = [X.Fx, X.Fy, X.Fz, X.Mx, X.My, X.Mz];
        j.some((pe) => pe !== 0) && (kt("nodes", o, "loads", j), U++);
        const oe = [X.Kx, X.Ky, X.Kz, X.Krx, X.Kry, X.Krz];
        if (oe.some((pe) => pe !== 0) && (kt("nodes", o, "springs", oe), U++), X.mass !== 0 && (kt("nodes", o, "mass", X.mass), U++), X.diaphragm !== "Ninguno" && (kt("nodes", o, "diaphragm", X.diaphragm), U++), U === 0) {
          ie("\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para apoyo, o un valor de carga/resorte/masa, y volv\xE9 a aplicar.");
          let pe = document.getElementById("hk-prop-toast");
          pe || (pe = document.createElement("div"), pe.id = "hk-prop-toast", pe.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);z-index:99999;padding:9px 20px;border-radius:8px;font:600 14px system-ui;color:#fff;pointer-events:none;transition:opacity .25s;box-shadow:0 4px 16px rgba(0,0,0,.4)", document.body.appendChild(pe)), pe.textContent = "\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para empotrado/articulado, despu\xE9s Aplicar", pe.style.background = "rgba(217,119,6,0.97)", pe.style.opacity = "1", clearTimeout(window.__hekatanPropToastT), window.__hekatanPropToastT = setTimeout(() => {
            pe && (pe.style.opacity = "0");
          }, 3200);
        } else ie(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    }
    if (l) {
      const c = et.addFolder({ title: `\u{1F4CF} Secci\xF3n frame \u2014 ${a.length} seg(s)` });
      c.addBinding(X, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), c.addBinding(X, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const f = et.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      f.addBinding(X, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), f.addBinding(X, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), f.addBinding(X, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), f.addBinding(X, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), et.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(X, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), et.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(X, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const B = et.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      B.addBinding(X, "relMxI", { label: "Mx I" }), B.addBinding(X, "relMyI", { label: "My I" }), B.addBinding(X, "relMzI", { label: "Mz I" });
      const U = et.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      U.addBinding(X, "relMxJ", { label: "Mx J" }), U.addBinding(X, "relMyJ", { label: "My J" }), U.addBinding(X, "relMzJ", { label: "Mz J" }), et.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(X, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const j = et.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      j.addBinding(X, "LKx", { label: "LKx", min: 0, step: 100 }), j.addBinding(X, "LKy", { label: "LKy", min: 0, step: 100 }), j.addBinding(X, "LKz", { label: "LKz", min: 0, step: 100 });
      const oe = et.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      oe.addBinding(X, "qx", { step: 0.1 }), oe.addBinding(X, "qy", { step: 0.1 }), oe.addBinding(X, "qz", { step: 0.1 }), et.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(X, "massPerM", { label: "m/L", min: 0, step: 1 }), et.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        kt("segs", a, "section", X.section), kt("segs", a, "material", X.material_frame);
        const le = { A: X.A_mod, Iz: X.Iz_mod, Iy: X.Iy_mod, J: X.J_mod };
        (le.A !== 1 || le.Iz !== 1 || le.Iy !== 1 || le.J !== 1) && kt("segs", a, "modifiers", le), X.insertionPoint !== "10 \u2014 Centroid" && kt("segs", a, "insertionPoint", X.insertionPoint), X.beta !== 0 && kt("segs", a, "beta", X.beta);
        const Ce = [X.relMxI, X.relMyI, X.relMzI], Je = [X.relMxJ, X.relMyJ, X.relMzJ];
        (Ce.some(($e) => $e) || Je.some(($e) => $e)) && kt("segs", a, "releases", { i: Ce, j: Je }), X.hinges !== "None" && kt("segs", a, "hinges", X.hinges);
        const vt = [X.LKx, X.LKy, X.LKz];
        vt.some(($e) => $e !== 0) && kt("segs", a, "lineSprings", vt);
        const qe = [X.qx, X.qy, X.qz];
        qe.some(($e) => $e !== 0) && kt("segs", a, "distLoad", qe), X.massPerM !== 0 && kt("segs", a, "massPerM", X.massPerM), ie(`\u2713 Propiedades aplicadas a ${a.length} segmento(s)`);
      });
    }
    if (u) {
      const c = et.addFolder({ title: `\u25AD Shell / \xC1rea \u2014 ${t.length}` });
      c.addBinding(X, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), c.addBinding(X, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), c.addBinding(X, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), et.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(X, "surfLoad", { label: "q", step: 0.1 }), et.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        kt("areas", t, "shellType", X.shellType), kt("areas", t, "thickness", X.thickness), kt("areas", t, "material", X.material_shell), X.surfLoad !== 0 && kt("areas", t, "surfLoad", X.surfLoad), ie(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    }
    if (p) {
      const c = et.addFolder({ title: "\u2139 Selecci\xF3n" }), f = { msg: "Seleccion\xE1 nodos, frames o \xE1reas para editar" };
      c.addBinding(f, "msg", { readonly: true, label: "" });
    }
    et.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      ze.clear(), ke();
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
        if (At ? Tn() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), ze.size > 0 && (ze.clear(), ke()), e.polylines) {
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
  const tn = new nt();
  tn.visible = false, tn.frustumCulled = false, y.add(tn);
  const Xo = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, co = (n, o, a, t) => {
    var _a, _b, _c, _d;
    for (; tn.children.length; ) {
      const u = tn.children.pop();
      (_b = (_a = u.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = u.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const r = Xo[n] ?? 16777215, s = 0.05, l = new me().setFromPoints([new m(o - s, a - s, t), new m(o + s, a - s, t), new m(o + s, a - s, t), new m(o + s, a + s, t), new m(o + s, a + s, t), new m(o - s, a + s, t), new m(o - s, a + s, t), new m(o - s, a - s, t)]);
    tn.add(new Ot(l, new ht({ color: r, linewidth: 2 }))), tn.position.set(0, 0, 0), tn.visible = true;
  }, Un = () => {
    tn.visible = false;
  }, Yo = (n, o, a, t) => {
    var _a;
    const r = window.__hekatanOsnap, s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let u = null;
    const p = (c, f, P, $) => {
      const B = Math.hypot(f - n, P - o, $ - a);
      B > t || (!u || B < u.d) && (u = { type: c, x: f, y: P, z: $, d: B });
    };
    (r.node || r.end) && s.forEach((c) => {
      r.node && p("node", c[0], c[1], c[2]);
    });
    for (const c of l) if (!(c.length < 2)) for (let f = 0; f < c.length - 1; f++) {
      const P = s[c[f]], $ = s[c[f + 1]];
      if (!(!P || !$) && (r.end && (p("end", P[0], P[1], P[2]), p("end", $[0], $[1], $[2])), r.mid && p("mid", (P[0] + $[0]) / 2, (P[1] + $[1]) / 2, (P[2] + $[2]) / 2), r.nea || r.per)) {
        const B = $[0] - P[0], U = $[1] - P[1], A = $[2] - P[2], j = B * B + U * U + A * A;
        if (j < 1e-12) continue;
        const oe = Math.max(0, Math.min(1, ((n - P[0]) * B + (o - P[1]) * U + (a - P[2]) * A) / j)), pe = P[0] + oe * B, le = P[1] + oe * U, Ce = P[2] + oe * A;
        r.nea && p("nea", pe, le, Ce), r.per && p("per", pe, le, Ce);
      }
    }
    const g = window.__hekatanDrawingAuxLines, M = (g == null ? void 0 : g.rawVal) ?? (g == null ? void 0 : g.val) ?? g ?? [];
    for (const c of M) {
      if (c.length !== 6) continue;
      const f = [c[0], c[1], c[2]], P = [c[3], c[4], c[5]];
      if (r.end && (p("end", f[0], f[1], f[2]), p("end", P[0], P[1], P[2])), r.mid && p("mid", (f[0] + P[0]) / 2, (f[1] + P[1]) / 2, (f[2] + P[2]) / 2), r.nea || r.per) {
        const $ = P[0] - f[0], B = P[1] - f[1], U = P[2] - f[2], A = $ * $ + B * B + U * U;
        if (A < 1e-12) continue;
        const j = Math.max(0, Math.min(1, ((n - f[0]) * $ + (o - f[1]) * B + (a - f[2]) * U) / A)), oe = f[0] + j * $, pe = f[1] + j * B, le = f[2] + j * U;
        r.nea && p("nea", oe, pe, le), r.per && p("per", oe, pe, le);
      }
    }
    return u ? { type: u.type, x: u.x, y: u.y, z: u.z } : null;
  };
  window.__hekatanOsnapCompute = Yo, window.__hekatanOsnapShow = co, window.__hekatanOsnapHide = Un;
  let Ee = [], Tt = 0;
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
    Ee = [], ce = [], ee.visible = false, w(), ie("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
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
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), Ee = [], D.visible = false, Ae.visible = false, T(), ie(`\u21B6 Undo \u2014 ${_n.length} estados restantes`);
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
    if (Ee = [], e.polylines) {
      const n = e.polylines.rawVal, o = n[n.length - 1];
      o && o.length > 0 && (e.polylines.val = [...n, []]);
    }
    J = null, Ke(), D.visible = false, Ae.visible = false, T(), ie("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), w();
  };
  window.__hekatanFinalizeDraw = uo;
  const fo = () => {
    Ee = [], ce = [], ee.visible = false;
    let n = false;
    ze.size && (ze.clear(), ke(), n = true), uo(), ie(n ? "\u238B Selecci\xF3n cancelada" : "\u238B Acci\xF3n cancelada"), w();
  };
  window.__hekatanEscapeCancel = fo, window.__hekatanReplicateSelection = (n, o, a, t) => {
    var _a, _b, _c, _d;
    t = Math.max(1, Math.round(t || 1));
    const r = [...ze], s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], u = new Set(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? []), p = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), M = [];
    if (r.forEach((B) => {
      if (B.startsWith("pt:")) p.add(+B.slice(3));
      else if (B.startsWith("poly:")) {
        const U = +B.slice(5);
        g.add(U), (l[U] || []).forEach((A) => p.add(A));
      } else if (B.startsWith("seg:")) {
        const U = B.split(":"), A = +U[1], j = +U[2], oe = l[A] || [], pe = oe[j], le = oe[j + 1];
        pe != null && le != null && (M.push([pe, le]), p.add(pe), p.add(le));
      }
    }), !p.size) return 0;
    an();
    const c = [...s];
    let f = l.slice();
    f.length && f[f.length - 1].length === 0 && (f = f.slice(0, -1));
    const P = [...((_c = e.areas) == null ? void 0 : _c.rawVal) ?? []], $ = [...p];
    for (let B = 1; B <= t; B++) {
      const U = n * B, A = o * B, j = a * B, oe = /* @__PURE__ */ new Map();
      $.forEach((pe) => {
        oe.set(pe, c.length), c.push([s[pe][0] + U, s[pe][1] + A, s[pe][2] + j]);
      }), g.forEach((pe) => {
        const le = l[pe].map((Je) => oe.has(Je) ? oe.get(Je) : Je), Ce = f.length;
        f.push(le), u.has(pe) && P.push(Ce);
      }), M.forEach(([pe, le]) => {
        f.push([oe.get(pe), oe.get(le)]);
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
    if (Pe) t = Pe.clone(), ie(`\u{1F4D0} Eje \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
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
      if (_t) {
        At && Tn();
        const { kind: s, a: l, b: u } = _t, p = u !== void 0 ? `${s}:${l}:${u}` : `${s}:${l}`;
        n.ctrlKey || n.metaKey || n.shiftKey || ze.clear(), ze.has(p) ? ze.delete(p) : ze.add(p), ke(), ie(`\u2713 Seleccionados ${ze.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
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
      if (Be >= 0) {
        const s = window.__hekatanDrawingAuxLines, l = (s == null ? void 0 : s.rawVal) ?? (s == null ? void 0 : s.val) ?? s ?? [], u = Be;
        if (u >= 0 && u < l.length) {
          an();
          const p = l.slice(0, u).concat(l.slice(u + 1));
          s && typeof s == "object" && "val" in s ? s.val = p : window.__hekatanDrawingAuxLines = p, ie(`\u{1F5D1} L\xEDnea auxiliar #${u + 1} borrada`), Be = -1, Me.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (yt >= 0) {
        const s = yt, l = pt;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(s)) ?? false ? (Bt(s), ie(`\u{1F5D1} \xC1rea #${s + 1} (shell Q4) borrada`)) : l >= 0 ? (Ue(s, l), ie(`\u{1F5D1} Segmento ${l + 1} de polil\xEDnea #${s + 1} borrado`)) : (Bt(s), ie(`\u{1F5D1} Polil\xEDnea #${s + 1} borrada`));
      } else ie("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (r === "circle") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        ie("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [s, l] = Ee, u = Math.hypot(l[0] - s[0], l[1] - s[1], l[2] - s[2]);
      Math.abs(l[0] - s[0]);
      const p = Math.abs(l[1] - s[1]), M = Math.abs(l[2] - s[2]) < 1e-3 ? "xy" : p < 1e-3 ? "xz" : "yz", c = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, s[0], s[1], s[2], u, c, M), ie(`\u2713 C\xEDrculo dibujado en ${M.toUpperCase()} \u2014 r=${u.toFixed(2)}m, ${c} segmentos`), Ee = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (r === "arc") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        ie("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (Ee.length === 2) {
        ie("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [s, l, u] = Ee, p = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, s, l, u, p), ie(`\u2713 Arco dibujado \u2014 ${p} segmentos`), Ee = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (r === "rect") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        ie("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ee;
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, s, l), ie(`\u2713 Rect\xE1ngulo dibujado \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Ee = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (r === "rectarea") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        ie("\u25AD \xC1rea rectangular \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ee;
      (_p = window.__hekatanDrawRectArea) == null ? void 0 : _p.call(window, s, l), ie(`\u2713 \xC1rea rectangular (shell Q4) creada \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Ee = [];
      return;
    }
    if (r === "polyarea") {
      ce.push([t.x, t.y, t.z]), ee.geometry.setFromPoints(ce.map((s) => new m(s[0], s[1], s[2]))), ee.visible = ce.length >= 1, ie(`\u25B0 \xC1rea libre \u2014 ${ce.length} punto(s). Click m\xE1s v\xE9rtices, o Enter / click-derecho para cerrar y mallar (m\xEDn. 3).`), w();
      return;
    }
    if (r === "plane3") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length < 3) {
        ie(`\u25E3 Plano inclinado \u2014 punto ${Ee.length}/3. Tip: cambi\xE1 la Cota Z (o enganch\xE1 un nodo) entre clicks para darle inclinaci\xF3n.`);
        return;
      }
      const [s, l, u] = Ee, p = (_q = window.__hekatanSetInclinedPlaneFrom3) == null ? void 0 : _q.call(window, s, l, u);
      ie(p ? "\u2713 Plano de trabajo INCLINADO activo. Dibuj\xE1 el \xE1rea (\u25AD/\u2B21) sobre \xE9l. (XY para resetear)" : "\u26A0 Los 3 puntos son colineales \u2014 no definen un plano. Reintent\xE1."), Ee = [];
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
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        ie("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [s, l] = Ee, u = Tt && Tt > 0 ? Tt : 3;
      an();
      const p = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [s[0], s[1], s[2]], [l[0], l[1], l[2]], [l[0], l[1], l[2] + u], [s[0], s[1], s[2] + u]];
      const g = e.polylines.rawVal;
      if (g.length - 1, e.polylines.val = [...g.slice(0, -1), ...g[g.length - 1].length > 0 ? [g[g.length - 1]] : [], [p, p + 1, p + 2, p + 3, p], []], e.areas) {
        const M = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, M];
      }
      ie(`\u25A5 Pared Q4 creada \u2014 h=${u.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Ee = [], Tt = 0;
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
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.5, l = Re(t.x, t.y, t.z, s);
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
      const $ = e.polylines.rawVal;
      if (e.polylines.val = [...$.slice(0, -1), ...$[$.length - 1].length > 0 ? [$[$.length - 1]] : [], [P, P + 1, P + 2, P + 3, P], []], e.areas) {
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
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        ie("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [s, l] = Ee, u = window.__hekatanDrawingAuxLines;
      if (u) {
        const f = u.rawVal ?? u.val ?? [];
        u.val = [...f, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      const p = l[0] - s[0], g = l[1] - s[1], M = l[2] - s[2], c = Math.sqrt(p * p + g * g + M * M);
      ie(`\u2713 L\xEDnea auxiliar creada \u2014 L=${c.toFixed(2)}m (cyan, no FEM)`), Ee = [];
      return;
    }
    if (r === "extend") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        ie("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [s, l] = Ee, u = window.__hekatanDrawingAuxLines;
      if (u) {
        const p = u.rawVal ?? u.val ?? [];
        u.val = [...p, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      ie("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Ee = [];
      return;
    }
    if (r === "chaflan") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        ie("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ee, u = window.__hekatanChaflanR ?? 1, p = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_v = window.__hekatanDrawSlabChaflan) == null ? void 0 : _v.call(window, s, l, u, p, 6);
      const g = Math.abs(l[0] - s[0]).toFixed(1), M = Math.abs(l[1] - s[1]).toFixed(1);
      ie(`\u2713 Losa con chaflanes dibujada \u2014 ${g}\xD7${M}m, r=${u}m, ${p} seg/chafl\xE1n`), Ee = [];
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
    if (((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "polyarea" && ce.length >= 3) {
      n.preventDefault();
      const a = Ge();
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
              const f = Math.abs(t.x - g[0]), P = Math.abs(t.y - g[1]), $ = Math.abs(t.z - g[2]);
              c = f >= P && f >= $ ? "x" : P >= $ ? "y" : "z";
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
      se.geometry.setAttribute("position", new Rt(t.toArray(), 3));
    }
    w();
  }), x.addEventListener("pointermove", (n) => {
    var _a;
    const o = b(n);
    if (!o) return;
    _.setFromCamera(z, o);
    let a = false;
    const t = _.intersectObject(he), r = W();
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
    const t = _.intersectObject(he), r = W();
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
    const t = _.intersectObject(he), r = W();
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
      const H = this.map[b - 1][0], re = this.map[b][0];
      x.setHex(this.map[b - 1][1], In), w.setHex(this.map[b][1], In), _.lerpColors(x, w, (z - H) / (re - H)), d[k * 4] = Math.round(_.r * 255), d[k * 4 + 1] = Math.round(_.g * 255), d[k * 4 + 2] = Math.round(_.b * 255), d[k * 4 + 3] = 255, k += 1;
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
    `, side: Dt, transparent: false, clipping: true, depthWrite: true, depthTest: true }), k = new Oe(new me(), d);
  return k.renderOrder = -1, k.frustumCulled = false, k.userData.isShellArea = true, k.name = "__hekatan_shell_colormap", R.derive(() => {
    k.geometry.setAttribute("position", new Rt(e.val.flat(), 3));
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
    const b = z && z[0] > z[1], H = Math.min(_, w), re = Math.max(_, w), we = re - H, ue = new Float32Array(y.val.length);
    for (let S = 0; S < y.val.length; S++) {
      const W = y.val[S];
      if (!Number.isFinite(W)) {
        ue[S] = -1;
        continue;
      }
      const se = ((b ? re + H - W : W) - H) / we;
      ue[S] = Math.max(0, Math.min(1, se));
    }
    k.geometry.setAttribute("scalar", new rt(ue, 1));
  }), k;
}
function zs(e, i, y, h) {
  const d = Ps(y, e.elements, h);
  return R.derive(() => {
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
  const d = new nt(), k = new $o();
  k.setColorMap("rainbow");
  const v = new Jt(), x = R.state([]);
  return R.derive(() => {
    var _a, _b, _c;
    i.deformedShape.val;
    const w = y.val, _ = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], z = Es(i.frameResults.val);
    if (d.children.forEach((C) => {
      C.geometry && C.geometry.dispose(), C.material && C.material.dispose();
    }), d.clear(), !z || _.length === 0 || w.length === 0) {
      x.val = [];
      return;
    }
    const b = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, H = (_c = e.deformOutputs) == null ? void 0 : _c.val, re = [], we = [];
    for (let C = 0; C < _.length; C++) {
      if (_[C].length !== 2) continue;
      const te = As(z, C, b, H);
      te && (re.push(te[0], te[1]), we.push({ idx: C, vals: te }));
    }
    if (re.length === 0) {
      x.val = [];
      return;
    }
    const ue = Math.min(...re), S = Math.max(...re);
    k.setMin(ue), k.setMax(S), x.val = re;
    const W = [1 / 0, 1 / 0, 1 / 0], he = [-1 / 0, -1 / 0, -1 / 0];
    for (const C of w) for (let N = 0; N < 3; N++) W[N] = Math.min(W[N], C[N]), he[N] = Math.max(he[N], C[N]);
    const ve = Math.max(he[0] - W[0], he[1] - W[1], he[2] - W[2], 1) * Fs, q = [], K = [], Y = [];
    let L = 0;
    for (const { idx: C, vals: N } of we) {
      const te = _[C], O = w[te[0]], ae = w[te[1]];
      if (!O || !ae) continue;
      const V = new m(ae[0] - O[0], ae[1] - O[1], ae[2] - O[2]), D = V.length();
      if (D < 1e-10) continue;
      V.normalize();
      const ee = Math.abs(V.y) < 0.99 ? new m(0, 1, 0) : new m(1, 0, 0), ce = new m().crossVectors(V, ee).normalize(), G = new m().crossVectors(V, ce).normalize(), Fe = eo + 1, be = Cs;
      for (let _e = 0; _e < Fe; _e++) {
        const Le = _e / eo, Ae = O[0] + V.x * D * Le, Pt = O[1] + V.y * D * Le, zt = O[2] + V.z * D * Le, ct = N[0] + (N[1] - N[0]) * Le, I = k.getColor(ct) ?? new Jt(0, 0, 0);
        v.copy(I).convertSRGBToLinear();
        for (let ne = 0; ne < be; ne++) {
          const de = ne / be * Math.PI * 2, fe = Math.cos(de), Te = Math.sin(de);
          q.push(Ae + (ce.x * fe + G.x * Te) * ve, Pt + (ce.y * fe + G.y * Te) * ve, zt + (ce.z * fe + G.z * Te) * ve), K.push(v.r, v.g, v.b);
        }
      }
      for (let _e = 0; _e < eo; _e++) for (let Le = 0; Le < be; Le++) {
        const Ae = (Le + 1) % be, Pt = L + _e * be + Le, zt = L + _e * be + Ae, ct = L + (_e + 1) * be + Le, I = L + (_e + 1) * be + Ae;
        Y.push(Pt, zt, I), Y.push(Pt, I, ct);
      }
      L += Fe * be;
    }
    if (q.length === 0) return;
    const E = new me();
    E.setAttribute("position", new Rt(q, 3)), E.setAttribute("color", new Rt(K, 3)), E.setIndex(Y), E.computeVertexNormals();
    const F = new ot({ vertexColors: true, side: Dt }), T = new Oe(E, F);
    T.frustumCulled = false, d.add(T);
  }), d.__colorMapValues = x, d;
}
function Ts() {
  const e = window;
  return { forceUnit: e.__hekatanForceUnit ?? localStorage.getItem("hk_forceUnit") ?? "tonf", dispUnit: e.__hekatanDispUnit ?? localStorage.getItem("hk_dispUnit") ?? "mm", stressUnit: e.__hekatanStressUnit ?? localStorage.getItem("hk_stressUnit") ?? "tonf/m\xB2" };
}
const Ls = { kN: 1, tonf: 1 / 9.80665, kip: 1 / 4.4482216 }, Is = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, $s = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76, "kip/ft\xB2": 1 / 47.88026 };
function Mt(e, i = 4) {
  return e == null || !isFinite(e) ? "\u2014" : e === 0 ? "0" : Math.abs(e) < 1e-3 || Math.abs(e) > 1e5 ? e.toExponential(i) : e.toFixed(i);
}
const Rs = 16755200, Co = 56831, Bs = 56831, Xs = 56831, Bn = 65382;
function Ys(e) {
  const i = new nt();
  i.name = "__hekatan_hover", i.renderOrder = 99;
  const y = new xn(1, 16, 16), h = new ot({ color: Rs, transparent: true, opacity: 0.85, depthTest: false }), d = new Oe(y, h);
  d.visible = false, d.renderOrder = 100, i.add(d);
  const k = new me(), v = new ht({ color: Co, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), x = new Ot(k, v);
  x.visible = false, x.renderOrder = 100, i.add(x);
  const w = new ot({ color: Co, transparent: true, opacity: 0.7, depthTest: false }), _ = new Oe(new _o(1, 1, 1, 12), w);
  _.visible = false, _.renderOrder = 100, i.add(_);
  const z = new me(), b = new ot({ color: Bs, transparent: true, opacity: 0.45, side: Dt, depthTest: false }), H = new Oe(z, b);
  H.visible = false, H.renderOrder = 100, i.add(H);
  const re = new me(), we = new ht({ color: Xs, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), ue = new Ot(re, we);
  ue.visible = false, ue.renderOrder = 100, i.add(ue);
  const S = new ot({ color: Bn, transparent: true, opacity: 0.95, depthTest: false }), W = new Oe(y, S);
  W.visible = false, W.renderOrder = 101, i.add(W);
  const he = new ot({ color: Bn, transparent: true, opacity: 0.85, depthTest: false }), se = new Oe(new _o(1, 1, 1, 12), he);
  se.visible = false, se.renderOrder = 101, i.add(se);
  const ve = new me(), q = new ot({ color: Bn, transparent: true, opacity: 0.55, side: Dt, depthTest: false }), K = new Oe(ve, q);
  K.visible = false, K.renderOrder = 101, i.add(K);
  const Y = new me(), L = new ht({ color: Bn, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), E = new Ot(Y, L);
  E.visible = false, E.renderOrder = 101, i.add(E);
  let F = null;
  const T = document.createElement("div");
  Object.assign(T.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), T.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(T);
  }, 0);
  function C(Z) {
    const J = e.derivedNodes.rawVal;
    return !J || Z < 0 || Z >= J.length ? null : new m(J[Z][0], J[Z][1], J[Z][2]);
  }
  function N(Z, J) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s2;
    const Pe = e.getActiveCamera();
    if (!Pe || !e.mesh) return null;
    const Q = e.rendererElm.getBoundingClientRect(), Ke = Z - Q.left, Ne = J - Q.top, Qe = e.derivedNodes.rawVal, Ve = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!Qe || !Ve) return null;
    const He = /* @__PURE__ */ new Map(), Me = (Xe) => {
      if (He.has(Xe)) return He.get(Xe);
      const ke = C(Xe);
      if (!ke) return He.set(Xe, null), null;
      const ye = ke.clone().project(Pe), Re = (ye.x * 0.5 + 0.5) * Q.width, xe = (-ye.y * 0.5 + 0.5) * Q.height, at = { x: Re, y: xe, z: ye.z };
      return He.set(Xe, at), at;
    }, yt = /* @__PURE__ */ new Set();
    for (const Xe of Ve) if (Xe) for (const ke of Xe) yt.add(ke);
    const pt = 8;
    let Be = -1, ze = pt;
    for (let Xe = 0; Xe < Qe.length; Xe++) {
      if (!yt.has(Xe)) continue;
      const ke = Me(Xe);
      if (!ke || ke.z < -1 || ke.z > 1) continue;
      const ye = ke.x - Ke, Re = ke.y - Ne, xe = Math.sqrt(ye * ye + Re * Re);
      xe < ze && (ze = xe, Be = Xe);
    }
    const Se = Ts(), We = Is[Se.dispUnit] ?? 1e3, st = Ls[Se.forceUnit] ?? 1;
    if (Be >= 0) {
      const Xe = Qe[Be];
      let ke = `Nodo ${Be}
(${Xe[0].toFixed(3)}, ${Xe[1].toFixed(3)}, ${Xe[2].toFixed(3)})`;
      const ye = (_c = (_b = e.mesh) == null ? void 0 : _b.deformOutputs) == null ? void 0 : _c.rawVal;
      if (ye == null ? void 0 : ye.deformations) {
        const Re = ye.deformations.get(Be);
        if (Re && (ke += `
\u2500\u2500\u2500\u2500 \u0394 desplaz. \u2500\u2500\u2500\u2500`, ke += `
Ux = ${Mt(Re[0] * We, 3)} ${Se.dispUnit}`, ke += `
Uy = ${Mt(Re[1] * We, 3)} ${Se.dispUnit}`, ke += `
Uz = ${Mt(Re[2] * We, 3)} ${Se.dispUnit}`, (Math.abs(Re[3]) > 1e-9 || Math.abs(Re[4]) > 1e-9 || Math.abs(Re[5]) > 1e-9) && (ke += `
Rx = ${Mt(Re[3] * 1e3, 3)} mrad`, ke += `
Ry = ${Mt(Re[4] * 1e3, 3)} mrad`, ke += `
Rz = ${Mt(Re[5] * 1e3, 3)} mrad`)), ye.reactions) {
          const xe = ye.reactions.get(Be);
          xe && (Math.abs(xe[0]) > 1e-9 || Math.abs(xe[1]) > 1e-9 || Math.abs(xe[2]) > 1e-9 || Math.abs(xe[3]) > 1e-6 || Math.abs(xe[4]) > 1e-6 || Math.abs(xe[5]) > 1e-6) && (ke += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, ke += `
Fx = ${Mt(xe[0] * st)} ${Se.forceUnit}`, ke += `
Fy = ${Mt(xe[1] * st)} ${Se.forceUnit}`, ke += `
Fz = ${Mt(xe[2] * st)} ${Se.forceUnit}`, (Math.abs(xe[3]) > 1e-6 || Math.abs(xe[4]) > 1e-6 || Math.abs(xe[5]) > 1e-6) && (ke += `
Mx = ${Mt(xe[3] * st)} ${Se.forceUnit}\xB7m`, ke += `
My = ${Mt(xe[4] * st)} ${Se.forceUnit}\xB7m`, ke += `
Mz = ${Mt(xe[5] * st)} ${Se.forceUnit}\xB7m`));
        }
      }
      return { type: "node", idx: Be, info: ke };
    }
    const pn = 5;
    let Ze = -1, Wt = pn, _t = "frame";
    for (let Xe = 0; Xe < Ve.length; Xe++) {
      const ke = Ve[Xe];
      if (!(!ke || ke.length < 2)) {
        if (ke.length === 2) {
          const ye = Me(ke[0]), Re = Me(ke[1]);
          if (!ye || !Re || ye.z < -1 || ye.z > 1 || Re.z < -1 || Re.z > 1) continue;
          const xe = Ds(Ke, Ne, ye.x, ye.y, Re.x, Re.y);
          xe < Wt && (Wt = xe, Ze = Xe, _t = "frame");
        } else if (ke.length === 3 || ke.length === 4) {
          const ye = [];
          let Re = true;
          for (const xe of ke) {
            const at = Me(xe);
            if (!at || at.z < -1 || at.z > 1) {
              Re = false;
              break;
            }
            ye.push(at);
          }
          if (!Re) continue;
          if (Ns(Ke, Ne, ye)) {
            const at = ye.reduce((ut, Bt) => ut + Bt.z, 0) / ye.length * 1e-3;
            at < Wt && (Wt = at, Ze = Xe, _t = "shell");
          }
        } else if (ke.length === 8) {
          const ye = [];
          let Re = true;
          for (const Ue of ke) {
            const Ge = Me(Ue);
            if (!Ge || Ge.z < -1 || Ge.z > 1) {
              Re = false;
              break;
            }
            ye.push(Ge);
          }
          if (!Re) continue;
          const xe = Math.min(...ye.map((Ue) => Ue.x)), at = Math.max(...ye.map((Ue) => Ue.x)), ut = Math.min(...ye.map((Ue) => Ue.y)), Bt = Math.max(...ye.map((Ue) => Ue.y));
          if (Ke >= xe && Ke <= at && Ne >= ut && Ne <= Bt) {
            const Ge = ye.reduce((je, it) => je + it.z, 0) / ye.length * 1e-3;
            Ge < Wt && (Wt = Ge, Ze = Xe, _t = "solid");
          }
        }
      }
    }
    if (Ze >= 0) {
      const Xe = Ve[Ze];
      let ye = `${_t === "frame" ? "Frame" : _t === "shell" ? "Shell" : "Solid"} ${Ze}`;
      const Re = (_e2 = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e2.rawVal, xe = (_g = (_f = Re == null ? void 0 : Re.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, Ze);
      if (xe) {
        xe.name && (ye += `
  \u{1F4CB} ${xe.name}`), xe.shape && (ye += `
  Shape: ${xe.shape}`);
        const at = /concrete|hormig|rect.*sólida/i.test(xe.shape || ""), ut = at ? 100 : 1e3, Bt = at ? "cm" : "mm", Ue = (je) => {
          const it = je * ut;
          return Math.abs(it - Math.round(it)) < 0.05 ? `${Math.round(it)}` : `${it.toFixed(1)}`;
        }, Ge = [];
        if (xe.D != null && Ge.push(`D=${Ue(xe.D)}`), xe.B != null && Ge.push(`B=${Ue(xe.B)}`), xe.TF != null && Ge.push(`TF=${Ue(xe.TF)}`), xe.TW != null && Ge.push(`TW=${Ue(xe.TW)}`), xe.t != null && Ge.push(`t=${Ue(xe.t)}`), Ge.length && (ye += `
  Dim: ${Ge.join(" ")} ${Bt}`), xe.material) {
          let je = xe.material;
          xe.fillMaterial && (je += ` + FILL "${xe.fillMaterial}"`), ye += `
  Mat: ${je}`;
        }
      } else {
        const at = (_i = (_h = Re == null ? void 0 : Re.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, Ze), ut = (_k = (_j = Re == null ? void 0 : Re.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, Ze);
        at ? (ye += `
  ${at}`, ut && !at.includes(ut) && (ye += `  (${ut})`)) : ut && (ye += `
  Material: ${ut}`);
      }
      if (ye += `
nodos: [${Xe.join(", ")}]`, _t === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const at = e.mesh.analyzeOutputs.rawVal, ut = $s[Se.stressUnit] ?? 1, Bt = [["bendingXX", "Mxx", st, `${Se.forceUnit}\xB7m/m`], ["bendingYY", "Myy", st, `${Se.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", st, `${Se.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", st, `${Se.forceUnit}/m`], ["membraneYY", "Nyy", st, `${Se.forceUnit}/m`], ["membraneXY", "Nxy", st, `${Se.forceUnit}/m`], ["shearX", "Qx", st, `${Se.forceUnit}/m`], ["shearY", "Qy", st, `${Se.forceUnit}/m`], ["vonMises", "\u03C3VM", ut, Se.stressUnit], ["pressure", "p", ut, Se.stressUnit]], Ue = [];
        for (const [Ge, je, it, Zt] of Bt) {
          const Ut = at == null ? void 0 : at[Ge];
          if (Ut && Ut instanceof Map) {
            const Gt = Ut.get(Ze);
            if (Gt != null) {
              if (typeof Gt == "number") Ue.push(`${je} = ${Mt(Gt * it, 3)} ${Zt}`);
              else if (Array.isArray(Gt)) {
                let xt = Gt[0];
                for (const sn of Gt) Math.abs(sn) > Math.abs(xt) && (xt = sn);
                Ue.push(`${je} = ${Mt(xt * it, 3)} ${Zt}`);
              }
            }
          }
        }
        Ue.length > 0 && (ye += `
\u2500\u2500\u2500\u2500 results \u2500\u2500\u2500\u2500
` + Ue.slice(0, 8).join(`
`));
      }
      if (_t === "frame" && ((_m = e.mesh) == null ? void 0 : _m.deformOutputs) && e.mesh.elementInputs) {
        const at = e.mesh.deformOutputs.rawVal, ut = e.mesh.elementInputs.rawVal, Bt = at == null ? void 0 : at.deformations;
        if (Bt && Xe.length === 2) {
          const Ue = Bt.get(Xe[0]), Ge = Bt.get(Xe[1]), je = Qe[Xe[0]], it = Qe[Xe[1]];
          if (Ue && Ge && je && it) {
            const Zt = it[0] - je[0], Ut = it[1] - je[1], Gt = it[2] - je[2], xt = Math.sqrt(Zt * Zt + Ut * Ut + Gt * Gt);
            if (xt > 1e-9) {
              const sn = Zt / xt, gt = Ut / xt, En = Gt / xt, gn = (Ge[0] - Ue[0]) * sn + (Ge[1] - Ue[1]) * gt + (Ge[2] - Ue[2]) * En, Qt = ((_n = ut.elasticities) == null ? void 0 : _n.get(Ze)) ?? 0, vn = ((_o2 = ut.areas) == null ? void 0 : _o2.get(Ze)) ?? 0, An = ((_p = ut.momentsOfInertiaY) == null ? void 0 : _p.get(Ze)) ?? 0, Zn = ((_q = ut.momentsOfInertiaZ) == null ? void 0 : _q.get(Ze)) ?? 0, bn = ((_r = ut.torsionalConstants) == null ? void 0 : _r.get(Ze)) ?? 0, Vn = ((_s2 = ut.shearModuli) == null ? void 0 : _s2.get(Ze)) ?? Qt / 2.6, un = Qt * vn * (gn / xt), en = (Ge[3] - Ue[3]) * sn + (Ge[4] - Ue[4]) * gt + (Ge[5] - Ue[5]) * En, St = Vn * bn * (en / xt), Nt = Ge[4] - Ue[4], rn = Ge[5] - Ue[5], At = Qt * An * Nt / xt, fn = Qt * Zn * rn / xt;
              ye += `
\u2500\u2500\u2500\u2500 frame \u2500\u2500\u2500\u2500`, ye += `
L = ${Mt(xt, 3)} m`, ye += `
\u0394L = ${Mt(gn * We, 3)} ${Se.dispUnit}`, ye += `
\u03B5 = ${Mt(gn / xt, 6)}`, Math.abs(un) > 1e-6 && (ye += `
N \u2248 ${Mt(un * st)} ${Se.forceUnit}`), Math.abs(St) > 1e-6 && (ye += `
T \u2248 ${Mt(St * st)} ${Se.forceUnit}\xB7m`), Math.abs(At) > 1e-6 && (ye += `
My \u2248 ${Mt(At * st)} ${Se.forceUnit}\xB7m`), Math.abs(fn) > 1e-6 && (ye += `
Mz \u2248 ${Mt(fn * st)} ${Se.forceUnit}\xB7m`);
            }
          }
        }
      }
      return { type: _t, idx: Ze, info: ye };
    }
    return null;
  }
  function te(Z, J, Pe) {
    var _a, _b, _c;
    if (d.visible = false, x.visible = false, _.visible = false, H.visible = false, ue.visible = false, !Z || !e.mesh) {
      T.style.display = "none", e.render();
      return;
    }
    const Q = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (Z.type === "node") {
      const Ve = C(Z.idx);
      if (Ve) {
        const He = e.derivedNodes.rawVal ?? [];
        let Me = 1;
        if (He.length >= 2) {
          let Be = [1 / 0, 1 / 0, 1 / 0], ze = [-1 / 0, -1 / 0, -1 / 0];
          for (const Se of He) for (let We = 0; We < 3; We++) Se[We] < Be[We] && (Be[We] = Se[We]), Se[We] > ze[We] && (ze[We] = Se[We]);
          Me = Math.max(ze[0] - Be[0], ze[1] - Be[1], ze[2] - Be[2], 0.1);
        }
        const yt = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, pt = 0.015 * Me * yt;
        d.position.copy(Ve), d.scale.setScalar(pt), d.visible = true;
      }
    } else if (Z.type === "frame" && Q) {
      const Ve = Q[Z.idx], He = C(Ve[0]), Me = C(Ve[1]);
      if (He && Me) {
        const yt = He.clone().add(Me).multiplyScalar(0.5), pt = Me.clone().sub(He), Be = pt.length(), ze = e.getActiveCamera();
        let Se;
        if (ze.isOrthographicCamera) {
          const Ze = ze;
          Se = (Ze.top - Ze.bottom) / Ze.zoom * 35e-4;
        } else Se = ze.position.distanceTo(yt) * 35e-4;
        _.position.copy(yt);
        const We = new m(0, 1, 0), st = We.clone().cross(pt).normalize(), pn = We.angleTo(pt);
        _.quaternion.setFromAxisAngle(st, pn), _.scale.set(Se, Be, Se), _.visible = true;
      }
    } else if (Z.type === "shell" && Q) {
      const Ve = Q[Z.idx], He = [], Me = [];
      for (const yt of Ve) {
        const pt = C(yt);
        if (!pt) return;
        He.push(pt.x, pt.y, pt.z);
      }
      Ve.length === 4 ? Me.push(0, 1, 2, 0, 2, 3) : Ve.length === 3 && Me.push(0, 1, 2), z.setAttribute("position", new Rt(He, 3)), z.setIndex(Me), z.computeVertexNormals(), H.visible = true;
    } else if (Z.type === "solid" && Q) {
      const Ve = Q[Z.idx], He = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], Me = [];
      for (const [yt, pt] of He) {
        const Be = C(Ve[yt]), ze = C(Ve[pt]);
        Be && ze && Me.push(Be.x, Be.y, Be.z, ze.x, ze.y, ze.z);
      }
      re.setAttribute("position", new Rt(Me, 3)), ue.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      T.style.display = "none", e.render();
      return;
    }
    T.textContent = Z.info, T.style.whiteSpace = "pre-line", T.style.display = "block";
    const Ne = e.rendererElm.getBoundingClientRect(), Qe = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? Ne;
    T.style.left = `${J - Qe.left}px`, T.style.top = `${Pe - Qe.top}px`, e.render();
  }
  let O = "", ae = 0, V = 0;
  const D = window.__hekatanHoverDebug ?? false, ee = (Z) => {
    ae && cancelAnimationFrame(ae), ae = requestAnimationFrame(() => {
      var _a, _b, _c;
      const J = N(Z.clientX, Z.clientY);
      if (D && V < 5) {
        const Q = e.derivedNodes.rawVal, Ke = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${Z.clientX}, ${Z.clientY}) nodes=${(Q == null ? void 0 : Q.length) ?? 0} elems=${(Ke == null ? void 0 : Ke.length) ?? 0} hover=`, J), V++;
      }
      const Pe = J ? `${J.type}:${J.idx}` : "";
      if (Pe !== O) O = Pe, te(J, Z.clientX, Z.clientY);
      else if (J) {
        const Q = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        T.style.left = `${Z.clientX - Q.left}px`, T.style.top = `${Z.clientY - Q.top}px`;
      }
    });
  };
  let ce = null;
  const G = () => {
    O = "", d.visible = false, x.visible = false, _.visible = false, H.visible = false, ue.visible = false, T.style.display = "none", e.render();
  }, Fe = (Z) => {
    const J = e.rendererElm.getBoundingClientRect(), Pe = Z.clientX - J.left, Q = Z.clientY - J.top;
    (Pe < -2 || Q < -2 || Pe > J.width + 2 || Q > J.height + 2) && (ce && clearTimeout(ce), ce = window.setTimeout(G, 200));
  }, be = () => {
    ce && (clearTimeout(ce), ce = null);
  };
  e.rendererElm.addEventListener("pointermove", ee), e.rendererElm.addEventListener("pointerleave", Fe), e.rendererElm.addEventListener("pointerenter", be);
  const _e = document.createElement("div");
  Object.assign(_e.style, { position: "absolute", zIndex: "10000", background: "rgba(20, 20, 25, 0.96)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "180px", fontFamily: "Segoe UI, sans-serif", fontSize: "13px", color: "#e8e8e8", userSelect: "none", display: "none" }), _e.classList.add("hekatan-context-menu");
  let Le = null;
  const Ae = document.createElement("div");
  Object.assign(Ae.style, { position: "absolute", background: "rgba(20, 20, 25, 0.97)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "240px", fontFamily: "Segoe UI, sans-serif", fontSize: "12.5px", color: "#e8e8e8", userSelect: "none", display: "none", zIndex: "10001" });
  const Pt = [{ icon: "\u{1F4D0}", label: "Section Property...", key: "section" }, { icon: "\u{1F527}", label: "Property Modifiers...", key: "modifiers" }, { icon: "\u{1F513}", label: "Releases / Partial Fixity...", key: "releases" }, { icon: "\u2194", label: "End Length Offsets...", key: "endOffsets" }, { icon: "\u{1F4CD}", label: "Insertion Point...", key: "insertionPoint" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "localAxes" }, { icon: "\u{1F4CA}", label: "Output Stations...", key: "outputStations" }, { icon: "\u2696", label: "Tension / Compression Limits...", key: "tcLimits" }, { icon: "\u{1F300}", label: "Line Springs...", key: "lineSprings" }, { icon: "\u2693", label: "Additional Mass...", key: "addMass" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "materialOverwrite" }], zt = [{ icon: "\u{1F53B}", label: "Joint Restraints (Supports)...", key: "restraints" }, { icon: "\u{1F300}", label: "Point Springs...", key: "pointSprings" }, { icon: "\u{1F4AA}", label: "Joint Loads \u2014 Force...", key: "jointForce" }, { icon: "\u{1F504}", label: "Joint Loads \u2014 Moment...", key: "jointMoment" }, { icon: "\u2693", label: "Additional Mass (Joint)...", key: "jointMass" }], ct = [{ icon: "\u{1F4D0}", label: "Section Property (Slab/Wall)...", key: "shellSection" }, { icon: "\u{1F527}", label: "Property Modifiers (f/m/v)...", key: "shellModifiers" }, { icon: "\u{1F300}", label: "Area Springs (Winkler)...", key: "areaSprings" }, { icon: "\u{1F4AA}", label: "Uniform Load (Shell)...", key: "shellLoad" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "shellLocalAxes" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "shellMaterial" }], I = [{ icon: "\u{1F4D0}", label: "Solid Property...", key: "solidProp" }, { icon: "\u{1F4AA}", label: "Surface Pressure...", key: "solidPressure" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "solidLocalAxes" }], ne = (Z, J, Pe) => {
    const Q = document.createElement("div");
    return Q.style.cssText = `
      padding: 5px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 9px;
      transition: background 0.08s;
      white-space: nowrap;
    `, Q.innerHTML = `<span style="font-size:13px;width:18px;text-align:center;">${Z}</span><span>${J}</span>`, Q.addEventListener("mouseenter", () => {
      Q.style.background = "rgba(100, 160, 255, 0.22)";
    }), Q.addEventListener("mouseleave", () => {
      Q.style.background = "transparent";
    }), Q.addEventListener("click", (Ke) => {
      Ke.stopPropagation();
      const Ne = Le;
      dt(), Ne && (window.dispatchEvent(new CustomEvent(`hekatan:assign:${Pe}`, { detail: { type: Ne.type, idx: Ne.idx, subAction: Pe } })), window.dispatchEvent(new CustomEvent("hekatan:assign", { detail: { type: Ne.type, idx: Ne.idx, subAction: Pe } })));
    }), Q;
  };
  function de(Z) {
    Ae.innerHTML = "";
    const J = Z === "frame" ? Pt : Z === "node" ? zt : Z === "shell" ? ct : I, Pe = document.createElement("div");
    Pe.style.cssText = "padding: 4px 14px; font-size: 11px; color: #88a; border-bottom: 1px solid rgba(120,180,255,0.18); margin-bottom: 3px;", Pe.textContent = `Asignar a ${Z.toUpperCase()} #${(Le == null ? void 0 : Le.idx) ?? "?"}`, Ae.appendChild(Pe);
    for (const Q of J) Ae.appendChild(ne(Q.icon, Q.label, Q.key));
  }
  setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(Ae);
  }, 0);
  function fe(Z, J) {
    var _a;
    if (!Le) return;
    de(Le.type);
    const Pe = _e.getBoundingClientRect();
    ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect(), Ae.style.left = `${Z + Pe.width}px`, Ae.style.top = `${J}px`, Ae.style.display = "block", setTimeout(() => {
      const Q = Ae.getBoundingClientRect();
      Q.right > window.innerWidth - 10 && (Ae.style.left = `${Z - Q.width}px`);
    }, 0);
  }
  function Te() {
    Ae.style.display = "none";
  }
  const Ye = (Z, J, Pe, Q) => {
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
    const Ne = `<span style="display:flex;align-items:center;gap:10px;"><span style="font-size:14px;width:18px;text-align:center;">${Z}</span><span>${J}</span></span>`, Qe = Pe ? '<span style="color:#888;">\u25B8</span>' : "";
    return Ke.innerHTML = Ne + Qe, Ke.addEventListener("mouseenter", () => {
      if (Ke.style.background = "rgba(100, 160, 255, 0.18)", Pe) {
        const Ve = parseFloat(_e.style.left || "0"), He = parseFloat(_e.style.top || "0");
        fe(Ve, He);
      } else Te();
    }), Ke.addEventListener("mouseleave", () => {
      Ke.style.background = "transparent";
    }), Ke.addEventListener("click", (Ve) => {
      if (Ve.stopPropagation(), Pe) return;
      const He = Le;
      dt(), Q(He);
    }), Ke;
  }, mt = Ye("\u{1F4DD}", "Asignar", true, () => {
  }), De = Ye("\u2139", "Ver informaci\xF3n", false, (Z) => {
    Z && window.dispatchEvent(new CustomEvent("hekatan:info", { detail: { type: Z.type, idx: Z.idx } }));
  });
  De.addEventListener("mouseenter", () => {
    Te();
  }), _e.appendChild(mt), _e.appendChild(De), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(_e);
  }, 0);
  function wt(Z, J, Pe) {
    var _a, _b;
    Le = Pe;
    const Q = ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
    _e.style.left = `${Z - Q.left}px`, _e.style.top = `${J - Q.top}px`, _e.style.display = "block";
    try {
      (_b = window.__hekatanCancelClickClickRect) == null ? void 0 : _b.call(window);
    } catch {
    }
  }
  function dt() {
    _e.style.display = "none", Te(), Le = null;
  }
  e.rendererElm.addEventListener("pointerdown", (Z) => {
    if (Z.button !== 2) return;
    const J = N(Z.clientX, Z.clientY);
    window.__hekatanRClickOnElement = !!J;
  }, { capture: true }), e.rendererElm.addEventListener("contextmenu", (Z) => {
    const J = N(Z.clientX, Z.clientY);
    if (!J) {
      dt(), window.__hekatanRClickOnElement = false;
      return;
    }
    Z.preventDefault(), Z.stopImmediatePropagation(), wt(Z.clientX, Z.clientY, { type: J.type, idx: J.idx }), window.__hekatanRClickOnElement = false;
  }, { capture: true });
  const Xt = (Z) => {
    if (_e.style.display !== "block") return;
    const J = Z.target;
    _e.contains(J) || Ae.contains(J) || dt();
  };
  document.addEventListener("mousedown", Xt, true), document.addEventListener("keydown", (Z) => {
    Z.key === "Escape" && _e.style.display === "block" && dt();
  });
  let Ct = null;
  e.rendererElm.addEventListener("pointerdown", (Z) => {
    Z.button === 0 && (Ct = { x: Z.clientX, y: Z.clientY });
  }), e.rendererElm.addEventListener("pointerup", (Z) => {
    if (Z.button !== 0 || !Ct) return;
    const J = Z.clientX - Ct.x, Pe = Z.clientY - Ct.y;
    if (Ct = null, J * J + Pe * Pe > 9) return;
    const Q = N(Z.clientX, Z.clientY);
    Q ? (F = { type: Q.type, idx: Q.idx }, jt()) : (F = null, jt());
  });
  function jt() {
    var _a, _b;
    if (W.visible = false, se.visible = false, K.visible = false, E.visible = false, !F || !e.mesh) {
      e.render();
      return;
    }
    const Z = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (F.type === "node") {
      const J = C(F.idx);
      if (J) {
        const Pe = e.derivedNodes.rawVal ?? [];
        let Q = 1;
        if (Pe.length >= 2) {
          let Qe = [1 / 0, 1 / 0, 1 / 0], Ve = [-1 / 0, -1 / 0, -1 / 0];
          for (const He of Pe) for (let Me = 0; Me < 3; Me++) He[Me] < Qe[Me] && (Qe[Me] = He[Me]), He[Me] > Ve[Me] && (Ve[Me] = He[Me]);
          Q = Math.max(Ve[0] - Qe[0], Ve[1] - Qe[1], Ve[2] - Qe[2], 0.1);
        }
        const Ke = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, Ne = 0.017 * Q * Ke;
        W.position.copy(J), W.scale.setScalar(Ne), W.visible = true;
      }
    } else if (F.type === "frame" && Z) {
      const J = Z[F.idx], Pe = C(J[0]), Q = C(J[1]);
      if (Pe && Q) {
        const Ke = Pe.clone().add(Q).multiplyScalar(0.5), Ne = Q.clone().sub(Pe), Qe = Ne.length(), Ve = e.getActiveCamera();
        let He;
        if (Ve.isOrthographicCamera) {
          const Be = Ve;
          He = (Be.top - Be.bottom) / Be.zoom * 35e-4;
        } else He = Ve.position.distanceTo(Ke) * 35e-4;
        se.position.copy(Ke);
        const Me = new m(0, 1, 0), yt = Me.clone().cross(Ne).normalize(), pt = Me.angleTo(Ne);
        se.quaternion.setFromAxisAngle(yt, pt), se.scale.set(He, Qe, He), se.visible = true;
      }
    } else if (F.type === "shell" && Z) {
      const J = Z[F.idx], Pe = [], Q = [];
      for (const Ke of J) {
        const Ne = C(Ke);
        if (!Ne) return;
        Pe.push(Ne.x, Ne.y, Ne.z);
      }
      J.length === 4 ? Q.push(0, 1, 2, 0, 2, 3) : J.length === 3 && Q.push(0, 1, 2), ve.setAttribute("position", new Rt(Pe, 3)), ve.setIndex(Q), ve.computeVertexNormals(), K.visible = true;
    } else if (F.type === "solid" && Z) {
      const J = Z[F.idx], Pe = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], Q = [];
      for (const [Ke, Ne] of Pe) {
        const Qe = C(J[Ke]), Ve = C(J[Ne]);
        Qe && Ve && Q.push(Qe.x, Qe.y, Qe.z, Ve.x, Ve.y, Ve.z);
      }
      Y.setAttribute("position", new Rt(Q, 3)), E.visible = true;
    }
    e.render();
  }
  return R.derive(() => {
    e.derivedNodes.val, F && jt();
  }), i;
}
function Ds(e, i, y, h, d, k) {
  const v = d - y, x = k - h, w = v * v + x * x;
  if (w < 1e-9) {
    const we = e - y, ue = i - h;
    return Math.sqrt(we * we + ue * ue);
  }
  let _ = ((e - y) * v + (i - h) * x) / w;
  _ = Math.max(0, Math.min(1, _));
  const z = y + _ * v, b = h + _ * x, H = e - z, re = i - b;
  return Math.sqrt(H * H + re * re);
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
    R.derive(() => {
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
    R.derive(() => {
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
      const ne = b.target, de = new m().subVectors(x.position, ne), fe = new m();
      fe.crossVectors(x.up, de).normalize();
      const Ye = de.length() * 1e-3 * b.panSpeed;
      ne.addScaledVector(fe, I.deltaX * Ye), x.position.addScaledVector(fe, I.deltaX * Ye), b.update();
    }
  }, { passive: false });
  const H = new Qn(new m(-1, 0, 0), 0), re = new Qn(new m(0, -1, 0), 0), we = new Qn(new m(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function ue() {
    const I = window.__hekatanClip, ne = [];
    I.enableX && (H.normal.set(I.invertX ? 1 : -1, 0, 0), H.constant = I.invertX ? -I.posX : I.posX, ne.push(H)), I.enableY && (re.normal.set(0, I.invertY ? 1 : -1, 0), re.constant = I.invertY ? -I.posY : I.posY, ne.push(re)), I.enableZ && (we.normal.set(0, 0, I.invertZ ? 1 : -1), we.constant = I.invertZ ? -I.posZ : I.posZ, ne.push(we)), z.clippingPlanes = ne, v.traverse((fe) => {
      const Te = fe;
      if (Te.material) {
        const Ye = Array.isArray(Te.material) ? Te.material : [Te.material];
        for (const mt of Ye) mt.clippingPlanes = ne, mt.needsUpdate = true;
      }
    });
    const de = window.__hekatanPanes ?? [];
    for (const fe of de) try {
      fe && typeof fe.refresh == "function" && fe.refresh();
    } catch {
    }
    z.render(v, _);
  }
  ue(), window.__hekatanClipApply = ue;
  const S = ls(i), W = R.derive(() => S.displayScale.val === 0 ? 1 : S.displayScale.val > 0 ? S.displayScale.val : -1 / S.displayScale.val), he = Us(e, S), se = () => {
    const I = [];
    return S.gridXY.rawVal && I.push("xy"), S.gridXZ.rawVal && I.push("xz"), S.gridYZ.rawVal && I.push("yz"), I;
  }, ve = () => {
    const I = S.gridStep.rawVal, ne = Math.max(I, S.gridMajor.rawVal);
    return { planes: se(), majorStep: ne, minorStep: I };
  };
  let q = On(S.gridSize.rawVal, ve());
  q.visible = S.gridVisible.rawVal, window.__hekatanSnap2D = S.cursorSnap.rawVal;
  const K = () => {
    const I = Math.max(0, Math.min(1, S.gridOpacity.rawVal));
    q.traverse((ne) => {
      const de = ne.material;
      if (!de || !("opacity" in de)) return;
      const fe = ne.name ?? "";
      let Te = 0.35;
      fe.includes("border") ? Te = 1 : fe.includes("major") && (Te = 0.75), de.opacity = I * Te;
    });
  };
  K(), k.appendChild(is(S, e, d)), k.setAttribute("id", "viewer"), k.appendChild(z.domElement), z.setPixelRatio(window.devicePixelRatio);
  const Y = dn();
  z.setClearColor(Y.background, 1);
  const L = S.gridSize.rawVal, E = L * 0.5 + L * 0.5 / Math.tan(45 * 0.5);
  x.position.set(0, 0, E), x.up.set(0, 1, 0), b.target.set(0, 0, 0), b.minDistance = 0.1, b.maxDistance = 1e4, k.__settings = S, b.zoomSpeed = 1;
  let F = 100, T = 0;
  z.domElement.addEventListener("wheel", (I) => {
    F = I.deltaY, T = I.deltaMode;
  }, { passive: true, capture: true }), b._getZoomScale = function() {
    const I = Math.abs(F);
    if (I >= 80 && T === 0) return Math.pow(0.9, this.zoomSpeed);
    if (T === 1) return Math.pow(0.88, this.zoomSpeed);
    const ne = Math.max(0.05, Math.min(I / 80, 1));
    return Math.pow(0.95, this.zoomSpeed * ne);
  }, b.update();
  let C = Po(S.gridSize.rawVal, S.flipAxes.rawVal);
  v.add(q, C), R.derive(() => {
    window.__hekatanGridPlaneXY = S.gridXY.val, window.__hekatanGridPlaneXZ = S.gridXZ.val, window.__hekatanGridPlaneYZ = S.gridYZ.val;
  });
  let N = true;
  R.derive(() => {
    const I = S.gridVisible.val;
    if (N) {
      N = false;
      return;
    }
    q.visible = I, G();
  });
  let te = true;
  R.derive(() => {
    if (S.gridOpacity.val, te) {
      te = false;
      return;
    }
    K(), G();
  }), R.derive(() => {
    const I = S.cursorSnap.val;
    window.__hekatanSnap2D = I;
  });
  let O = true;
  R.derive(() => {
    var _a;
    const I = S.gridSize.val, ne = S.flipAxes.val;
    if (S.gridXY.val, S.gridXZ.val, S.gridYZ.val, S.gridStep.val, S.gridMajor.val, O) {
      O = false;
      return;
    }
    v.remove(q), (_a = q.traverse) == null ? void 0 : _a.call(q, (Te) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Te.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Te.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), q = On(I, ve()), q.visible = S.gridVisible.rawVal, v.add(q), K(), v.remove(C), C.traverse((Te) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Te.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Te.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), C = Po(I, ne), v.add(C);
    const de = I * 0.5 + I * 0.5 / Math.tan(45 * 0.5);
    x.position.distanceTo(b.target), Math.abs(x.position.x) < 0.1 && Math.abs(x.position.y) < 0.1 && x.position.z > 0 ? x.position.set(0, 0, de) : x.position.set(0.5 * I, -de, 0.5 * I), b.target.set(0, 0, 0), b.minDistance = Math.max(0.05, I * 0.01), b.maxDistance = Math.max(50, I * 50), b.update(), G();
  }), new ResizeObserver((I) => {
    var _a, _b;
    for (const ne of I) {
      const de = (_a = ne.target) == null ? void 0 : _a.clientWidth, fe = (_b = ne.target) == null ? void 0 : _b.clientHeight;
      if (de === 0 || fe === 0) continue;
      const Ye = (V ? de / 2 : de) / fe;
      x.aspect = Ye, x.updateProjectionMatrix();
      const mt = w.top;
      if (w.left = -mt * Ye, w.right = mt * Ye, w.updateProjectionMatrix(), D && D.isPerspectiveCamera) D.aspect = Ye, D.updateProjectionMatrix();
      else if (D && D.isOrthographicCamera) {
        const De = D, wt = De.top;
        De.left = -wt * Ye, De.right = wt * Ye, De.updateProjectionMatrix();
      }
      z.setSize(de, fe), G();
    }
  }).observe(k), b.addEventListener("change", G), R.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, S.displayScale.val, S.nodes.val, S.elements.val, (_g = S.edges) == null ? void 0 : _g.val, S.elemColumns.val, S.elemBeams.val, S.nodesIndexes.val, S.elementsIndexes.val, S.orientations.val, S.sections.val, S.secColumns.val, S.secBeams.val, S.secFloor.val, S.supports.val, S.loads.val, S.deformedShape.val, S.nodeResults.val, S.frameResults.val, S.shellResults.val, (_h = S.solidResults) == null ? void 0 : _h.val, setTimeout(G);
  });
  let V = false, D = null, ee = null, ce = false;
  function G() {
    const I = k.clientWidth || 1, ne = k.clientHeight || 1;
    if (!V || !D) {
      z.setScissorTest(false), z.setViewport(0, 0, I, ne), z.render(v, _);
      return;
    }
    const de = I / 2;
    z.setScissorTest(true), z.setViewport(0, 0, de, ne), z.setScissor(0, 0, de, ne), z.render(v, _), z.setViewport(de, 0, de, ne), z.setScissor(de, 0, de, ne), z.render(v, D), z.setScissorTest(false);
  }
  function Fe(I) {
    _ = I, b.object = I, b.update(), G();
  }
  function be(I, ne) {
    V = I, ne && (D = ne);
    const de = k.clientWidth || 1, fe = k.clientHeight || 1, Ye = (I ? de / 2 : de) / fe;
    x.isPerspectiveCamera && (x.aspect = Ye, x.updateProjectionMatrix());
    const mt = w.top;
    if (w.left = -mt * Ye, w.right = mt * Ye, w.updateProjectionMatrix(), I && D) {
      if (ee ? (ee.object = D, ee.update()) : (ee = new ko(D, z.domElement), ee.enableDamping = true, ee.dampingFactor = 0.1, ee.screenSpacePanning = true, ee.zoomSpeed = 0.8, ee.panSpeed = 1.2, ee.rotateSpeed = 0.9, ee.touches = { ONE: $n.ROTATE, TWO: $n.DOLLY_PAN }, ee._getZoomScale = function() {
        const De = Math.abs(F);
        if (De >= 80 && T === 0) return Math.pow(0.9, this.zoomSpeed);
        if (T === 1) return Math.pow(0.88, this.zoomSpeed);
        const wt = Math.max(0.05, Math.min(De / 80, 1));
        return Math.pow(0.95, this.zoomSpeed * wt);
      }, ee.target.copy(b.target), ee.addEventListener("change", G), ee.enabled = false), !ce) {
        const De = (wt) => {
          if (!V || !ee) return;
          const dt = z.domElement.getBoundingClientRect(), Xt = wt.clientX - dt.left, Ct = dt.width / 2, jt = Xt >= Ct;
          b.enabled = !jt, ee.enabled = jt;
        };
        z.domElement.addEventListener("pointerdown", De, true), z.domElement.addEventListener("wheel", De, { capture: true, passive: true }), ce = true;
      }
    } else I || (b.enabled = true, ee && (ee.enabled = false));
    k.__splitMode = I, window.__hekatanSplitMode = I, window.__hekatanSplitCamera = I ? D : null, G();
  }
  if (e) {
    v.add(rs(S, he, W), as(e, S, he), ps(S, he, W), us(e, S, he, W), cs(e, S, he, W), ds(e, S, he, W), ms(e, S, he, W), ys(e, S, he, W), bs(e, S, he, W), xs(e, S, he, W));
    const I = Ys({ scene: v, rendererElm: z.domElement, getActiveCamera: () => _, derivedNodes: he, derivedDisplayScale: W, mesh: e, settings: S, render: G });
    v.add(I);
    const ne = Js(e, S), de = zs(e, S, he, ne), fe = Fo(ne);
    v.add(de), k.appendChild(fe);
    const Te = Vs(e, S, he);
    v.add(Te);
    const Ye = Te.__colorMapValues, mt = Fo(Ye);
    mt.id = "frame-legend", k.appendChild(mt), R.derive(() => {
      var _a;
      const De = S.shellResults.val != "none", wt = (((_a = S.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", dt = De || wt, Xt = S.frameResults.val.startsWith("contour:");
      fe.hidden = !dt, de.visible = dt, mt.hidden = !Xt;
    });
  }
  if (d) {
    const I = new os(16777215, 0.5);
    v.add(I);
    const ne = new So(16777215, 0.5);
    ne.position.set(30, 25, -10), ne.shadow.mapSize.width = 1024, ne.shadow.mapSize.height = 1024, v.add(ne);
    const de = 10;
    ne.shadow.camera.left = -de, ne.shadow.camera.right = de, ne.shadow.camera.top = de, ne.shadow.camera.bottom = -de, ne.shadow.camera.far = 1e3;
    const fe = new So(16777215, 0.5);
    fe.color.setHSL(11, 43, 96), fe.position.set(-10, 0, 30), v.add(fe), R.derive(() => {
      (d == null ? void 0 : d.val.length) && (v.remove(...d.oldVal), v.add(...d.rawVal), G());
    }), R.derive(() => {
      d.rawVal.forEach((Te) => Te.visible = S.solids.val), G();
    });
  }
  if (h) {
    const I = [], ne = (fe) => {
      var _a, _b;
      return ((_a = fe == null ? void 0 : fe.userData) == null ? void 0 : _a.isCota) ? S.showCotas.val : ((_b = fe == null ? void 0 : fe.userData) == null ? void 0 : _b.isDistLoad) ? S.loads.val : S.custom3D.val;
    }, de = () => {
      for (const fe of I) fe.visible = ne(fe);
      G();
    };
    R.derive(() => {
      const fe = h.val;
      I.length && (v.remove(...I), I.length = 0), fe.length && (v.add(...fe), I.push(...fe), de()), G();
    }), R.derive(() => {
      S.custom3D.val, de();
    }), R.derive(() => {
      S.showCotas.val, de();
    }), R.derive(() => {
      S.loads.val, de();
    });
  }
  y && Ms({ drawingObj: y, gridObj: q, scene: v, getActiveCamera: () => _, controls: b, gridSize: L, derivedDisplayScale: W, rendererElm: z.domElement, viewerRender: G }), Vo((I, ne) => {
    var _a;
    z.setClearColor(ne.background, 1), v.remove(q), (_a = q.traverse) == null ? void 0 : _a.call(q, (de) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = de.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = de.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), q = On(S.gridSize.rawVal, { planes: se() }), v.add(q), k.style.setProperty("--awatif-legend-color", ne.legendMarker), G();
  });
  const _e = { scene: v, perspCamera: x, orthoCamera: w, get camera() {
    return _;
  }, controls: b, renderer: z, rendererElm: z.domElement, render: G, setActiveCamera: Fe, setSplitMode: be, get splitMode() {
    return V;
  }, get splitCamera() {
    return D;
  }, settings: S };
  k.__ctx = _e;
  const Le = document.createElement("div");
  Le.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const Ae = (I, ne, de) => {
    const fe = document.createElement("button");
    return fe.textContent = I, fe.title = ne, fe.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), fe.onmouseenter = () => {
      fe.style.background = "rgba(70,70,70,0.9)";
    }, fe.onmouseleave = () => {
      fe.style.background = "rgba(40,40,40,0.85)";
    }, fe.onclick = (Te) => {
      Te.preventDefault(), de();
    }, fe;
  }, Pt = (I, ne) => {
    const de = b.target, fe = new m().subVectors(_.position, de), Te = fe.length(), Ye = new m(), mt = new m();
    Ye.crossVectors(_.up, fe).normalize(), mt.copy(_.up).normalize();
    const De = Te * 0.05;
    de.addScaledVector(Ye, -I * De), de.addScaledVector(mt, ne * De), _.position.addScaledVector(Ye, -I * De), _.position.addScaledVector(mt, ne * De), b.update(), G();
  }, zt = (I) => {
    const ne = new m().subVectors(_.position, b.target);
    ne.multiplyScalar(I), _.position.copy(b.target).add(ne), b.update(), G();
  }, ct = () => {
    const I = document.createElement("div");
    return I.style.cssText = "width:32px;height:32px;", I;
  };
  return Le.append(ct()), Le.append(Ae("\u2191", "Pan arriba", () => Pt(0, 1))), Le.append(Ae("\u2295", "Zoom in", () => zt(0.85))), Le.append(Ae("\u2190", "Pan izquierda", () => Pt(-1, 0))), Le.append(Ae("\u2302", "Reset vista", () => {
    b.reset(), G();
  })), Le.append(Ae("\u2192", "Pan derecha", () => Pt(1, 0))), Le.append(Ae("\u2296", "Zoom out", () => zt(1.18))), Le.append(Ae("\u2193", "Pan abajo", () => Pt(0, -1))), Le.append(ct()), getComputedStyle(k).position === "static" && (k.style.position = "relative"), k.appendChild(Le), k;
}
function Us(e, i) {
  return R.derive(() => {
    var _a, _b, _c, _d;
    if (!i.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const y = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], h = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!h || y.length === 0) return y;
    const d = i.deformScale.val, k = i.deformScale.val * i.deformScaleZ.val, v = Number.isFinite(d) ? d : 1, x = Number.isFinite(k) ? k : 1;
    return y.map((w, _) => {
      var _a2;
      const z = ((_a2 = h.get(_)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], b = Number.isFinite(z[0]) ? z[0] : 0, H = Number.isFinite(z[1]) ? z[1] : 0, re = Number.isFinite(z[2]) ? z[2] : 0;
      return [w[0] + b * v, w[1] + H * v, w[2] + re * x];
    });
  });
}
const ao = R.state(null), no = R.state(""), Ks = R.state("kN"), Hs = R.state("mm"), Ws = R.state("kN/m\xB2"), Gs = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, Eo = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, qs = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function Js(e, i) {
  const y = R.state([]);
  let h;
  return ((d) => {
    d.bendingXX = "bendingXX", d.bendingYY = "bendingYY", d.bendingXY = "bendingXY", d.membraneXX = "membraneXX", d.membraneYY = "membraneYY", d.membraneXY = "membraneXY", d.tranverseShearX = "tranverseShearX", d.tranverseShearY = "tranverseShearY", d.vonMises = "vonMises", d.membranePrincipalMax = "membranePrincipalMax", d.membranePrincipalMin = "membranePrincipalMin", d.bendingPrincipalMax = "bendingPrincipalMax", d.bendingPrincipalMin = "bendingPrincipalMin", d.transverseShearMax = "transverseShearMax", d.pressure = "pressure", d.displacementX = "displacementX", d.displacementY = "displacementY", d.displacementZ = "displacementZ";
  })(h || (h = {})), R.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N;
    const d = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), se = (Pt, zt) => {
      Pt == null ? void 0 : Pt.forEach((ct, I) => {
        const ne = e.elements.val[I];
        if (ne) for (let de = 0; de < ne.length; de++) zt.set(ne[de], [ct[de] ?? ct[0]]);
      });
    };
    se((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, d), se((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, k), se((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, v), se((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, x), se((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, w), se((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, _), se((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, z), se((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, b), se((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, H), se((_t = (_s2 = e.analyzeOutputs) == null ? void 0 : _s2.val) == null ? void 0 : _t.membranePrincipalMax, re), se((_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.membranePrincipalMin, we), se((_x = (_w = e.analyzeOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.bendingPrincipalMax, ue), se((_z = (_y = e.analyzeOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.bendingPrincipalMin, S), se((_B = (_A = e.analyzeOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.transverseShearMax, W), se((_D = (_C = e.analyzeOutputs) == null ? void 0 : _C.val) == null ? void 0 : _D.pressure, he);
    const ve = (_F = (_E = e.analyzeOutputs) == null ? void 0 : _E.val) == null ? void 0 : _F.colorMapRanges, q = (_G = i.solidResults) == null ? void 0 : _G.val, Y = q && q !== "none" ? q : i.shellResults.val, L = ve == null ? void 0 : ve[Y], E = { bendingXX: [d, 0], bendingYY: [k, 0], bendingXY: [v, 0], membraneXX: [x, 0], membraneYY: [w, 0], membraneXY: [_, 0], tranverseShearX: [z, 0], tranverseShearY: [b, 0], vonMises: [H, 0], membranePrincipalMax: [re, 0], membranePrincipalMin: [we, 0], bendingPrincipalMax: [ue, 0], bendingPrincipalMin: [S, 0], transverseShearMax: [W, 0], pressure: [he, 0], displacementX: [(_I = (_H = e.deformOutputs) == null ? void 0 : _H.val) == null ? void 0 : _I.deformations, 0], displacementY: [(_K = (_J = e.deformOutputs) == null ? void 0 : _J.val) == null ? void 0 : _K.deformations, 1], displacementZ: [(_M = (_L = e.deformOutputs) == null ? void 0 : _L.val) == null ? void 0 : _M.deformations, 2] }, F = i.shellResults.val, T = Ks.val, C = Hs.val, N = F === "displacementX" || F === "displacementY" || F === "displacementZ", te = F === "bendingXX" || F === "bendingYY" || F === "bendingXY" || F === "bendingPrincipalMax" || F === "bendingPrincipalMin", O = F === "membraneXX" || F === "membraneYY" || F === "membraneXY" || F === "membranePrincipalMax" || F === "membranePrincipalMin", ae = F === "vonMises" || F === "pressure", V = F === "tranverseShearX" || F === "tranverseShearY" || F === "transverseShearMax", D = (_N = i.solidResults) == null ? void 0 : _N.val, ee = D === "vonMises" || D === "sigmaXX" || D === "sigmaYY" || D === "sigmaZZ" || D === "tauXY" || D === "tauYZ" || D === "tauXZ", ce = D === "ux" || D === "uy" || D === "uz", G = Ws.val, Fe = ee ? qs[G] : ce || N ? Eo[C] : te || O || ae || V ? 1 / Gs[T] : 1, be = ee ? G : ce || N ? C : te ? `${T}\xB7m/m` : O ? `${T}/m\xB2` : ae ? `${T}/m\xB2` : V ? `${T}/m` : "";
    no.val = be, ao.val = Array.isArray(L) && L.length === 2 ? [L[0] * Fe, L[1] * Fe] : null;
    const Le = D && D !== "none" ? [H, 0] : E[F], Ae = [];
    e.nodes.val.forEach((Pt, zt) => {
      const ct = Le;
      if (!ct || !ct[0] || typeof ct[0].has != "function") return;
      if (!ct[0].has(zt)) {
        Ae.push(Number.NaN);
        return;
      }
      const I = ct[0].get(zt), ne = I ? I[ct[1]] ?? 0 : 0;
      Ae.push(ne * Fe);
    }), y.val = Ae;
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
