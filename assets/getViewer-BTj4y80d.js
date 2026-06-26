import { v as L, p as jt, a5 as Pn, B as fe, a6 as Cn, F as Mt, a3 as Co, Z as je, K as It, L as it, h as Yt, t as Fo, g as Uo, a7 as Ko, i as et, d as Ge, V as m, _ as Ot, a8 as Zn, G as Vo, D as zt, a as vt, w as at, y as Fn, a9 as Vn, r as Ho, m as Wo, H as Gt, a1 as hn, E as ho, f as rn, Q as Un, aa as mn, C as mo, S as wo, c as yo, ab as _n, o as Go, ac as qo, ad as Jo, ae as Qo, af as Oo, b as xo, ag as go, e as vo, J as jo, N as es, U as ts, W as ns, T as Sn, P as Kn, X as os, Y as Mo, O as ss } from "./theme-Cr2LU0HL.js";
import { T as wt, O as bo } from "./Text-BbGxMO8j.js";
import { P as Ao } from "./tweakpane-BXg6ZhiP.js";
import { e as as } from "./styles-ChEEn6BP.js";
function is(e, i, y) {
  const h = document.createElement("div"), u = new Ao({ title: "Settings", expanded: true, container: h });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(u), h.setAttribute("id", "settings");
  const _ = "hk_settingsPos";
  let x = null;
  try {
    const b = localStorage.getItem(_);
    b && (x = JSON.parse(b));
  } catch {
  }
  h.style.cssText = ["position:fixed", x ? `left:${x.left}px` : "left:8px", x ? `top:${x.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const w = () => {
    const b = h.querySelector(".tp-rotv_b");
    if (!b) {
      setTimeout(w, 200);
      return;
    }
    b.style.cursor = "move", b.style.userSelect = "none";
    let te = false, ae = 0, ie = 0, ue = 0, k = 0;
    b.addEventListener("mousedown", (W) => {
      te = true, ae = W.clientX, ie = W.clientY;
      const he = h.getBoundingClientRect();
      ue = he.left, k = he.top, h.style.left = `${ue}px`, h.style.top = `${k}px`;
    }), window.addEventListener("mousemove", (W) => {
      if (!te) return;
      const he = W.clientX - ae, ge = W.clientY - ie, Pe = Math.max(0, Math.min(window.innerWidth - 40, ue + he)), K = Math.max(0, Math.min(window.innerHeight - 40, k + ge));
      h.style.left = `${Pe}px`, h.style.top = `${K}px`;
    }), window.addEventListener("mouseup", () => {
      if (te) {
        te = false;
        try {
          localStorage.setItem(_, JSON.stringify({ left: parseFloat(h.style.left), top: parseFloat(h.style.top) }));
        } catch {
        }
      }
    });
  };
  if (w(), i == null ? void 0 : i.nodes) {
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
    window.__hekatanOutputsFolder = b, b.addBinding(e.nodeResults, "val", { options: { none: "none", "U (deformations)": "deformations", "R (reactions)": "reactions" }, label: "Node results" }), b.addBinding(e.frameResults, "val", { options: { none: "none", "P (normals)": "normals", "V2 (shearY)": "shearsY", "V3 (shearZ)": "shearsZ", "T (torsion)": "torsions", "M2 (bendingY)": "bendingsY", "M3 (bendingZ)": "bendingsZ", "contour P": "contour:normals", "contour V2": "contour:shearsY", "contour V3": "contour:shearsZ", "contour T": "contour:torsions", "contour M2": "contour:bendingsY", "contour M3": "contour:bendingsZ" }, label: "Frame results" }), b.addBinding(e.shellResults, "val", { options: { none: "none", "F11 (membraneXX)": "membraneXX", "F22 (membraneYY)": "membraneYY", "F12 (membraneXY)": "membraneXY", "FMax (principal)": "membranePrincipalMax", "FMin (principal)": "membranePrincipalMin", "M11 (bendingXX)": "bendingXX", "M22 (bendingYY)": "bendingYY", "M12 (bendingXY)": "bendingXY", "MMax (principal)": "bendingPrincipalMax", "MMin (principal)": "bendingPrincipalMin", "V13 (shearX)": "tranverseShearX", "V23 (shearY)": "tranverseShearY", "VMax (magnitud)": "transverseShearMax", "Von Mises": "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), b.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), b.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), b.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), b.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  y && u.addBinding(e.solids, "val", { label: "Solids" });
  const v = u.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), z = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), P = () => {
    const b = window.__hekatanClipApply;
    typeof b == "function" && b();
  };
  return v.addBinding(z, "enableX", { label: "Cortar X" }).on("change", P), v.addBinding(z, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", P), v.addBinding(z, "invertX", { label: "  invertir X" }).on("change", P), v.addBinding(z, "enableY", { label: "Cortar Y" }).on("change", P), v.addBinding(z, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", P), v.addBinding(z, "invertY", { label: "  invertir Y" }).on("change", P), v.addBinding(z, "enableZ", { label: "Cortar Z" }).on("change", P), v.addBinding(z, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", P), v.addBinding(z, "invertZ", { label: "  invertir Z" }).on("change", P), h;
}
function ls(e) {
  return { gridSize: L.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: L.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: L.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: L.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: L.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: L.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: L.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: L.state((e == null ? void 0 : e.gridXZ) ?? true), gridYZ: L.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: L.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: L.state((e == null ? void 0 : e.nodes) ?? true), elements: L.state((e == null ? void 0 : e.elements) ?? true), edges: L.state((e == null ? void 0 : e.edges) ?? true), faces: L.state((e == null ? void 0 : e.faces) ?? true), elemColumns: L.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: L.state((e == null ? void 0 : e.elemBeams) ?? true), elemFrames: L.state((e == null ? void 0 : e.elemFrames) ?? true), elemZapatas: L.state((e == null ? void 0 : e.elemZapatas) ?? true), elemLosas: L.state((e == null ? void 0 : e.elemLosas) ?? true), colorByType: L.state((e == null ? void 0 : e.colorByType) ?? false), nodesIndexes: L.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: L.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: L.state((e == null ? void 0 : e.orientations) ?? false), sections: L.state((e == null ? void 0 : e.sections) ?? true), sectionLabels: L.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: L.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: L.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: L.state((e == null ? void 0 : e.secFloor) ?? -1), supports: L.state((e == null ? void 0 : e.supports) ?? true), loads: L.state((e == null ? void 0 : e.loads) ?? false), deformedShape: L.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: L.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: L.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: L.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: L.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: L.state((e == null ? void 0 : e.flipAxes) ?? false), solids: L.state((e == null ? void 0 : e.solids) ?? true), custom3D: L.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: L.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: L.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: L.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function rs(e, i, y) {
  const h = jt(), u = new Pn(new fe(), new Cn({ color: h.nodePoint }));
  return Co((_, x) => {
    u.material.color.setHex(x.nodePoint);
  }), u.frustumCulled = false, L.derive(() => {
    e.nodes.val && u.geometry.setAttribute("position", new Mt(i.val.flat(), 3));
  }), L.derive(() => {
    if (y.val, i.val, !e.nodes.rawVal) return;
    const _ = i.rawVal ?? [];
    let x = e.gridSize.val * 0.5;
    if (_.length >= 2) {
      const v = [1 / 0, 1 / 0, 1 / 0], z = [-1 / 0, -1 / 0, -1 / 0];
      for (const P of _) for (let b = 0; b < 3; b++) v[b] = Math.min(v[b], P[b]), z[b] = Math.max(z[b], P[b]);
      x = Math.max(z[0] - v[0], z[1] - v[1], z[2] - v[2], 0.1);
    }
    const w = 0.03 * x;
    u.material.size = w * y.rawVal;
  }), L.derive(() => {
    u.visible = e.nodes.val;
  }), u;
}
function Hn(e, i) {
  const y = jt(), h = new je();
  h.name = "hekatan-grid";
  const u = (i == null ? void 0 : i.planes) ?? ["xy"];
  let _ = (i == null ? void 0 : i.majorStep) ?? 1, x = (i == null ? void 0 : i.minorStep) ?? 0.1;
  for (_ <= 0 && (_ = 1), x <= 0 && (x = 0.1); e / x > 500; ) x *= 2;
  for (; e / _ > 100; ) _ *= 2;
  const w = e / 2;
  _ = Math.max(x, Math.round(_ / x) * x);
  const z = new It(y.grid), P = new It(y.grid).multiplyScalar(0.45), b = (ae, ie, ue, k) => {
    const W = [], he = ae === "xy" ? (Y, $) => [Y, $, 0] : ae === "xz" ? (Y, $) => [Y, 0, $] : (Y, $) => [0, Y, $], ge = Math.floor(w / ie);
    for (let Y = -ge; Y <= ge; Y++) {
      const $ = Y * ie, A = he($, -w), E = he($, w);
      W.push(...A, ...E);
    }
    for (let Y = -ge; Y <= ge; Y++) {
      const $ = Y * ie, A = he(-w, $), E = he(w, $);
      W.push(...A, ...E);
    }
    const Pe = new fe();
    Pe.setAttribute("position", new Mt(W, 3));
    const K = new it({ color: ue, transparent: true, opacity: k, depthWrite: false }), Z = new Yt(Pe, K);
    return Z.name = `grid-${ae}-${ie === x ? "minor" : "major"}`, Z;
  }, te = (ae, ie, ue) => {
    const k = ae === "xy" ? (Z, Y) => [Z, Y, 0] : ae === "xz" ? (Z, Y) => [Z, 0, Y] : (Z, Y) => [0, Z, Y], W = [[-w, -w], [w, -w], [w, w], [-w, w]], he = [];
    for (const [Z, Y] of W) he.push(...k(Z, Y));
    const ge = new fe();
    ge.setAttribute("position", new Mt(he, 3));
    const Pe = new it({ color: ie, transparent: true, opacity: ue, depthWrite: false }), K = new Fo(ge, Pe);
    return K.name = `grid-${ae}-border`, K.renderOrder = 1, K;
  };
  for (const ae of u) h.add(b(ae, x, P, 0.12)), h.add(b(ae, _, z, 0.4)), h.add(te(ae, z, 0.55));
  return h.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: _, minorStep: x, gridSize: e, planes: [...u] }, h;
}
function cs(e, i, y, h) {
  const u = new je(), _ = new Uo(0.5, 0.5, 0.5), x = new Ko(0.45, 0.7, 4);
  x.rotateX(Math.PI / 2), x.translate(0, 0, -0.35);
  const w = new et({ color: 10166822 }), v = new et({ color: 2792847 }), z = new et({ color: 3835647 }), P = () => {
    const ae = y.rawVal ?? [];
    if (ae.length < 2) return i.gridSize.val * 0.5;
    let ie = [1 / 0, 1 / 0, 1 / 0], ue = [-1 / 0, -1 / 0, -1 / 0];
    for (const k of ae) for (let W = 0; W < 3; W++) k[W] < ie[W] && (ie[W] = k[W]), k[W] > ue[W] && (ue[W] = k[W]);
    return Math.max(ue[0] - ie[0], ue[1] - ie[1], ue[2] - ie[2], 0.1);
  }, b = () => 0.08 * P(), te = () => h.rawVal;
  return L.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, !i.supports.val) return;
    u.clear();
    const ae = b();
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((ie, ue) => {
      const k = y.val[ue];
      if (!k) return;
      const W = ie ?? [], he = (W[0] ? 1 : 0) + (W[1] ? 1 : 0) + (W[2] ? 1 : 0), ge = (W[3] ? 1 : 0) + (W[4] ? 1 : 0) + (W[5] ? 1 : 0);
      let Pe;
      he >= 3 && ge >= 3 ? Pe = new Ge(_, w) : he >= 3 && ge === 0 ? Pe = new Ge(x, v) : Pe = new Ge(x, z), Pe.position.set(k[0], k[1], k[2]);
      const K = ae * te();
      Pe.scale.set(K, K, K), u.add(Pe);
    });
  }), L.derive(() => {
    if (h.val, !i.supports.rawVal) return;
    const ie = b() * te();
    u.children.forEach((ue) => ue.scale.set(ie, ie, ie));
  }), L.derive(() => {
    u.visible = i.supports.val;
  }), u;
}
function ds(e, i, y, h) {
  const u = new je();
  u.name = "loadsGroup";
  function _(x) {
    if (x.length < 2) return 0.12 * i.gridSize.rawVal;
    const w = [1 / 0, 1 / 0, 1 / 0], v = [-1 / 0, -1 / 0, -1 / 0];
    for (const P of x) for (let b = 0; b < 3; b++) w[b] = Math.min(w[b], P[b]), v[b] = Math.max(v[b], P[b]);
    return 0.08 * Math.max(v[0] - w[0], v[1] - w[1], v[2] - w[2], 0.1);
  }
  return L.derive(() => {
    var _a, _b, _c;
    if (i.deformedShape.val, !i.loads.val) return;
    u.children.forEach((v) => v.dispose()), u.clear();
    const x = y.val, w = _(x);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((v, z) => {
      const P = x[z];
      if (!P) return;
      const b = new m(...v.slice(0, 3));
      if (b.lengthSq() < 1e-30) return;
      b.normalize();
      const te = new Ot(b, new m(...P), 1, 15637248, 0.3, 0.3), ae = w * h.rawVal;
      te.scale.set(ae, ae, ae), u.add(te);
    });
  }), L.derive(() => {
    if (h.val, !i.loads.rawVal) return;
    const w = _(y.rawVal) * h.rawVal;
    u.children.forEach((v) => v.scale.set(w, w, w));
  }), L.derive(() => {
    u.visible = i.loads.val;
  }), u;
}
function ps(e, i, y) {
  const h = new je();
  return L.derive(() => {
    if (!e.nodesIndexes.val) return;
    h.children.forEach((_) => _.dispose()), h.clear();
    const u = 0.05 * e.gridSize.val * 0.6;
    i.val.forEach((_, x) => {
      const w = new wt(`${x}`);
      w.position.set(..._), w.updateScale(u * y.rawVal), h.add(w);
    });
  }), L.derive(() => {
    if (y.val, !e.nodesIndexes.rawVal) return;
    const u = 0.05 * e.gridSize.val * 0.6;
    h.children.forEach((_) => _.updateScale(u * y.rawVal));
  }), L.derive(() => {
    h.visible = e.nodesIndexes.val;
  }), h;
}
function us(e, i, y, h) {
  const u = new je();
  return L.derive(() => {
    var _a;
    if (i.deformedShape.val, !i.elementsIndexes.val) return;
    u.children.forEach((x) => x.dispose()), u.clear();
    const _ = 0.05 * i.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((x, w) => {
      const v = new wt(`${w}`, void 0, "#001219");
      v.position.set(...fs(x.map((z) => y.rawVal[z]))), v.updateScale(_ * h.rawVal), u.add(v);
    });
  }), L.derive(() => {
    if (h.val, !i.elementsIndexes.rawVal) return;
    const _ = 0.05 * i.gridSize.val * 0.6;
    u.children.forEach((x) => x.updateScale(_ * h.rawVal));
  }), L.derive(() => {
    u.visible = i.elementsIndexes.val;
  }), u;
}
function fs(e) {
  const i = e.reduce((h, u) => [h[0] + u[0], h[1] + u[1], h[2] + u[2]], [0, 0, 0]), y = e.length;
  return [i[0] / y, i[1] / y, i[2] / y];
}
function _o(e, i) {
  const y = new je(), h = 0.05 * e * 1, u = jt(), _ = new wt("X", "red", "transparent"), x = new wt(i ? "Z" : "Y", "green", "transparent"), w = new wt(i ? "Y" : "Z", "blue", "transparent"), v = new Ot(new m(1, 0, 0), new m(0, 0, 0), 1, u.axisArrow, 0.2, 0.2), z = new Ot(new m(0, 1, 0), new m(0, 0, 0), 1, u.axisArrow, 0.2, 0.2), P = new Ot(new m(0, 0, 1), new m(0, 0, 0), 1, u.axisArrow, 0.2, 0.2);
  return _.position.set(1.3 * h, 0, 0), x.position.set(0, 1.3 * h, 0), w.position.set(0, 0, 1.3 * h), _.updateScale(0.4 * h), x.updateScale(0.4 * h), w.updateScale(0.4 * h), v.scale.set(h, h, h), z.scale.set(h, h, h), P.scale.set(h, h, h), y.add(v, z, P, _, x, w), y;
}
function Qn(e, i) {
  const y = new m(...e), u = new m(...i).clone().sub(y), _ = u.length(), x = u.dot(new m(1, 0, 0)) / _, w = u.dot(new m(0, 1, 0)) / _, v = u.dot(new m(0, 0, 1)) / _, z = Math.sqrt(x ** 2 + w ** 2);
  let P = new Zn().fromArray([[x, w, v], [-w / z, x / z, 0], [-x * v / z, -w * v / z, z]].flat());
  return v === 1 && (P = new Zn().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), v === -1 && (P = new Zn().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Vo().setFromMatrix3(P);
}
function qn(e, i) {
  return e == null ? void 0 : e.map((y, h) => (9 * y + i[h]) / 10);
}
function yn(e) {
  const i = e.reduce((h, u) => [h[0] + u[0], h[1] + u[1], h[2] + u[2]], [0, 0, 0]), y = e.length;
  return [i[0] / y, i[1] / y, i[2] / y];
}
function hs(e, i, y) {
  const h = yn([i, y]), u = yn([e, y]), _ = yn([e, i]), x = new m(...h).sub(new m(...u)).normalize(), w = new m(...y).sub(new m(..._)).normalize(), v = x.clone().cross(w).normalize(), z = v.clone().cross(x).normalize();
  return new Vo().makeBasis(x, z, v);
}
function ms(e, i, y, h) {
  const u = new je(), _ = new fe(), x = new it({ vertexColors: true }), w = [0, 0, 0], v = [1, 0, 0], z = [0, 1, 0], P = [0, 0, 1];
  _.setAttribute("position", new Mt([...w, ...v, ...w, ...z, ...w, ...P], 3));
  const b = [255, 0, 0], te = [0, 255, 0], ae = [0, 0, 255];
  return _.setAttribute("color", new Mt([...b, ...b, ...te, ...te, ...ae, ...ae], 3)), L.derive(() => {
    var _a;
    i.deformedShape.val, i.orientations.val && (u.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((ie) => {
      const ue = new Yt(_, x), k = y.rawVal[ie[0]], W = y.rawVal[ie[1]];
      if (ie.length === 2 && (ue.position.set(...qn(k, W)), ue.rotation.setFromRotationMatrix(Qn(k, W))), ie.length === 3) {
        const Pe = y.rawVal[ie[2]];
        ue.position.set(...yn([k, W, Pe])), ue.rotation.setFromRotationMatrix(hs(k, W, Pe));
      }
      const ge = 0.05 * i.gridSize.rawVal * 0.75 * h.rawVal;
      ue.scale.set(ge, ge, ge), u.add(ue);
    }));
  }), L.derive(() => {
    if (h.val, !i.orientations.rawVal) return;
    const ue = 0.05 * i.gridSize.val * 0.75 * h.rawVal;
    u.children.forEach((k) => k.scale.set(ue, ue, ue));
  }), L.derive(() => {
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
  const u = new je(), _ = new je();
  u.add(_);
  function x(Z, Y) {
    const $ = Z / 2, A = Y / 2, E = new Float32Array([0, -$, -A, 0, $, -A, 0, $, A, 0, -$, -A, 0, $, A, 0, -$, A]), R = new fe();
    R.setAttribute("position", new at(E, 3));
    const C = new Float32Array([0, -$, -A, 0, $, -A, 0, $, A, 0, -$, A, 0, -$, -A]), N = new fe();
    return N.setAttribute("position", new at(C, 3)), { fill: R, outline: N };
  }
  function w(Z, Y = 24) {
    const $ = Z / 2, A = new Float32Array(Y * 9);
    for (let N = 0; N < Y; N++) {
      const ne = N / Y * Math.PI * 2, G = (N + 1) / Y * Math.PI * 2;
      A[N * 9] = 0, A[N * 9 + 1] = 0, A[N * 9 + 2] = 0, A[N * 9 + 3] = 0, A[N * 9 + 4] = $ * Math.cos(ne), A[N * 9 + 5] = $ * Math.sin(ne), A[N * 9 + 6] = 0, A[N * 9 + 7] = $ * Math.cos(G), A[N * 9 + 8] = $ * Math.sin(G);
    }
    const E = new fe();
    E.setAttribute("position", new at(A, 3));
    const R = new Float32Array((Y + 1) * 3);
    for (let N = 0; N <= Y; N++) {
      const ne = N / Y * Math.PI * 2;
      R[N * 3] = 0, R[N * 3 + 1] = $ * Math.cos(ne), R[N * 3 + 2] = $ * Math.sin(ne);
    }
    const C = new fe();
    return C.setAttribute("position", new at(R, 3)), { fill: E, outline: C };
  }
  function v(Z, Y, $, A) {
    const E = $ ?? Y * 0.08, R = A ?? Z * 0.07, C = Z / 2, N = Y / 2, ne = N - E, G = R / 2, H = [];
    function F(re, Fe, ce, _e) {
      H.push(0, re, Fe, 0, ce, Fe, 0, ce, _e, 0, re, Fe, 0, ce, _e, 0, re, _e);
    }
    F(-C, -N, C, -ne), F(-G, -ne, G, ne), F(-C, ne, C, N);
    const oe = new fe();
    oe.setAttribute("position", new at(new Float32Array(H), 3));
    const ee = new Float32Array([0, -C, -N, 0, C, -N, 0, C, -ne, 0, G, -ne, 0, G, ne, 0, C, ne, 0, C, N, 0, -C, N, 0, -C, ne, 0, -G, ne, 0, -G, -ne, 0, -C, -ne, 0, -C, -N]), le = new fe();
    return le.setAttribute("position", new at(ee, 3)), { fill: oe, outline: le };
  }
  function z(Z, Y, $) {
    const A = Z / 2, E = Y / 2, R = A - $, C = E - $, N = [];
    function ne(oe, ee, le, re) {
      N.push(0, oe, ee, 0, le, ee, 0, le, re, 0, oe, ee, 0, le, re, 0, oe, re);
    }
    ne(-A, -E, A, -C), ne(-A, C, A, E), ne(-A, -C, -R, C), ne(R, -C, A, C);
    const G = new fe();
    G.setAttribute("position", new at(new Float32Array(N), 3));
    const H = new Float32Array([0, -A, -E, 0, A, -E, 0, A, -E, 0, A, E, 0, A, E, 0, -A, E, 0, -A, E, 0, -A, -E, 0, -R, -C, 0, R, -C, 0, R, -C, 0, R, C, 0, R, C, 0, -R, C, 0, -R, C, 0, -R, -C]), F = new fe();
    return F.setAttribute("position", new at(H, 3)), { fill: G, outline: F };
  }
  function P(Z, Y, $) {
    const A = Z / 2, E = Y / 2, R = A - $, C = E - $, N = new fe(), ne = new Float32Array([0, -R, -C, 0, R, -C, 0, R, C, 0, -R, -C, 0, R, C, 0, -R, C]);
    N.setAttribute("position", new at(ne, 3));
    const G = [];
    function H(le, re, Fe, ce) {
      G.push(0, le, re, 0, Fe, re, 0, Fe, ce, 0, le, re, 0, Fe, ce, 0, le, ce);
    }
    H(-A, -E, A, -C), H(-A, C, A, E), H(-A, -C, -R, C), H(R, -C, A, C);
    const F = new fe();
    F.setAttribute("position", new at(new Float32Array(G), 3));
    const oe = new Float32Array([0, -A, -E, 0, A, -E, 0, A, -E, 0, A, E, 0, A, E, 0, -A, E, 0, -A, E, 0, -A, -E, 0, -R, -C, 0, R, -C, 0, R, -C, 0, R, C, 0, R, C, 0, -R, C, 0, -R, C, 0, -R, -C]), ee = new fe();
    return ee.setAttribute("position", new at(oe, 3)), { concFill: N, steelFillGeom: F, outline: ee };
  }
  function b(Z, Y, $) {
    const A = [], E = [[0, -Z / 2, -Y / 2], [0, -Z / 2 + $, -Y / 2], [0, -Z / 2 + $, Y / 2 - $], [0, Z / 2, Y / 2 - $], [0, Z / 2, Y / 2], [0, -Z / 2, Y / 2]], R = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const G of R) A.push(...E[G]);
    const C = new fe();
    C.setAttribute("position", new at(new Float32Array(A), 3));
    const N = [];
    for (let G = 0; G < E.length; G++) {
      const H = (G + 1) % E.length;
      N.push(...E[G], ...E[H]);
    }
    const ne = new fe();
    return ne.setAttribute("position", new at(new Float32Array(N), 3)), { fill: C, outline: ne };
  }
  function te(Z, Y, $, A) {
    const E = A / 2, R = [], C = [[0, -Z - E, -Y / 2], [0, -$ - E, -Y / 2], [0, -$ - E, Y / 2 - $], [0, -E, Y / 2 - $], [0, -E, Y / 2], [0, -Z - E, Y / 2]], N = [[0, E, -Y / 2], [0, E + $, -Y / 2], [0, E + $, Y / 2 - $], [0, Z + E, Y / 2 - $], [0, Z + E, Y / 2], [0, E, Y / 2]], ne = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const oe of ne) R.push(...C[oe]);
    for (const oe of ne) R.push(...N[oe]);
    const G = new fe();
    G.setAttribute("position", new at(new Float32Array(R), 3));
    const H = [];
    for (const oe of [C, N]) for (let ee = 0; ee < oe.length; ee++) {
      const le = (ee + 1) % oe.length;
      H.push(...oe[ee], ...oe[le]);
    }
    const F = new fe();
    return F.setAttribute("position", new at(new Float32Array(H), 3)), { fill: G, outline: F };
  }
  function ae(Z, Y, $, A) {
    const E = Y / 2, R = Z, C = [[0, -R, -E], [0, -R, -E + $], [0, -A, -E + $], [0, -A, E - $], [0, -R, E - $], [0, -R, E], [0, 0, E], [0, 0, -E]], N = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], ne = [];
    for (const oe of N) ne.push(...C[oe]);
    const G = new fe();
    G.setAttribute("position", new at(new Float32Array(ne), 3));
    const H = [];
    for (let oe = 0; oe < C.length; oe++) {
      const ee = (oe + 1) % C.length;
      H.push(...C[oe], ...C[ee]);
    }
    const F = new fe();
    return F.setAttribute("position", new at(new Float32Array(H), 3)), { fill: G, outline: F };
  }
  function ie(Z, Y, $, A, E) {
    const R = Y / 2, C = E / 2, N = [], ne = [[0, -Z, -R], [0, -Z, -R + $], [0, -C - A, -R + $], [0, -C - A, R - $], [0, -Z, R - $], [0, -Z, R], [0, -C, R], [0, -C, -R]], G = ne.map((le) => [le[0], -le[1], le[2]]), H = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const le of H) N.push(...ne[le]);
    for (const le of H) N.push(...G[le]);
    const F = new fe();
    F.setAttribute("position", new at(new Float32Array(N), 3));
    const oe = [];
    for (const le of [ne, G]) for (let re = 0; re < le.length; re++) {
      const Fe = (re + 1) % le.length;
      oe.push(...le[re], ...le[Fe]);
    }
    const ee = new fe();
    return ee.setAttribute("position", new at(new Float32Array(oe), 3)), { fill: F, outline: ee };
  }
  function ue(Z, Y, $, A) {
    const E = Z / 2, R = Y / 2, C = A / 2, N = [[0, -C, -R], [0, C, -R], [0, C, R - $], [0, E, R - $], [0, E, R], [0, -E, R], [0, -E, R - $], [0, -C, R - $]], ne = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], G = [];
    for (const ee of ne) G.push(...N[ee]);
    const H = new fe();
    H.setAttribute("position", new at(new Float32Array(G), 3));
    const F = [];
    for (let ee = 0; ee < N.length; ee++) {
      const le = (ee + 1) % N.length;
      F.push(...N[ee], ...N[le]);
    }
    const oe = new fe();
    return oe.setAttribute("position", new at(new Float32Array(F), 3)), { fill: H, outline: oe };
  }
  function k(Z, Y, $ = 24) {
    const A = Z / 2, E = A - Y, R = [];
    for (let G = 0; G < $; G++) {
      const H = G / $ * Math.PI * 2, F = (G + 1) / $ * Math.PI * 2, oe = Math.cos(H), ee = Math.sin(H), le = Math.cos(F), re = Math.sin(F);
      R.push(0, A * oe, A * ee, 0, A * le, A * re, 0, E * le, E * re), R.push(0, A * oe, A * ee, 0, E * le, E * re, 0, E * oe, E * ee);
    }
    const C = new fe();
    C.setAttribute("position", new at(new Float32Array(R), 3));
    const N = [];
    for (let G = 0; G < $; G++) {
      const H = G / $ * Math.PI * 2, F = (G + 1) / $ * Math.PI * 2;
      N.push(0, A * Math.cos(H), A * Math.sin(H), 0, A * Math.cos(F), A * Math.sin(F)), N.push(0, E * Math.cos(H), E * Math.sin(H), 0, E * Math.cos(F), E * Math.sin(F));
    }
    const ne = new fe();
    return ne.setAttribute("position", new at(new Float32Array(N), 3)), { fill: C, outline: ne };
  }
  const W = new et({ color: 52479, transparent: true, opacity: 0.35, side: zt, depthWrite: false }), he = new it({ color: 52479 }), ge = new et({ color: 16750848, transparent: true, opacity: 0.4, side: zt, depthWrite: false }), Pe = new it({ color: 16750848 });
  function K(Z, Y) {
    const $ = Math.abs(Y[0] - Z[0]), A = Math.abs(Y[1] - Z[1]), E = Math.abs(Y[2] - Z[2]);
    return E > $ && E > A || A > $ && A > E;
  }
  return L.derive(() => {
    var _a, _b;
    i.deformedShape.val, i.secColumns.val, i.secBeams.val, i.secFloor.val;
    const Z = i.secColumns.rawVal, Y = i.secBeams.rawVal;
    if (!Z && !Y) {
      u.children.forEach((C) => {
        C instanceof wt && C.dispose();
      }), u.clear();
      return;
    }
    u.children.forEach((C) => {
      C instanceof wt && C.dispose();
    }), u.clear();
    const $ = (_a = e.elements) == null ? void 0 : _a.val, A = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!$ || !A) return;
    const E = A.sectionShapes, R = i.secFloor.rawVal;
    $.forEach((C, N) => {
      if (C.length !== 2) return;
      const ne = y.rawVal[C[0]], G = y.rawVal[C[1]];
      if (!ne || !G) return;
      const H = K(ne, G);
      if (H && !Z || !H && !Y) return;
      if (R >= 0) {
        const re = Math.min(ne[1], G[1]);
        Math.max(ne[1], G[1]);
        const Fe = i.gridSize.rawVal || 3;
        if (Math.floor(re / Fe + 0.01) !== R) return;
      }
      const F = E == null ? void 0 : E.get(N);
      if (!F) return;
      const oe = [(ne[0] + G[0]) / 2, (ne[1] + G[1]) / 2, (ne[2] + G[2]) / 2], ee = Qn(ne, G);
      if (F.type === "CFT") {
        const re = P(F.b, F.h, F.tw ?? F.b * 0.05), Fe = new Ge(re.concFill, W);
        Fe.position.set(...oe), Fe.rotation.setFromRotationMatrix(ee), u.add(Fe);
        const ce = new Ge(re.steelFillGeom, ge);
        ce.position.set(...oe), ce.rotation.setFromRotationMatrix(ee), u.add(ce);
        const _e = new vt(re.outline, Pe);
        _e.position.set(...oe), _e.rotation.setFromRotationMatrix(ee), u.add(_e);
      } else {
        let re, Fe, ce;
        switch (F.type) {
          case "rect":
            re = x(F.b, F.h), Fe = W, ce = he;
            break;
          case "circ":
            re = w(F.d), Fe = W, ce = he;
            break;
          case "I":
            re = v(F.b, F.h, F.tf, F.tw), Fe = ge, ce = Pe;
            break;
          case "HSS":
            re = z(F.b, F.h, F.tw ?? F.b * 0.05), Fe = ge, ce = Pe;
            break;
          case "CFT":
            re = P(F.b, F.h, F.tw ?? F.b * 0.05), Fe = ge, ce = Pe;
            break;
          case "L":
            re = b(F.b ?? F.h, F.h, F.t ?? F.tw ?? 3e-3), Fe = ge, ce = Pe;
            break;
          case "2L":
            re = te(F.b ?? F.h, F.h, F.t ?? F.tw ?? 3e-3, F.dis ?? 0.01), Fe = ge, ce = Pe;
            break;
          case "C":
          case "coldC":
            re = ae(F.b, F.h, F.tf ?? F.t ?? 3e-3, F.tw ?? F.t ?? 3e-3), Fe = ge, ce = Pe;
            break;
          case "2C":
            re = ie(F.b, F.h, F.tf ?? 5e-3, F.tw ?? 5e-3, F.dis ?? 0.01), Fe = ge, ce = Pe;
            break;
          case "T":
            re = ue(F.b, F.h, F.tf ?? 0.01, F.tw ?? 6e-3), Fe = ge, ce = Pe;
            break;
          case "pipe":
            re = k(F.d, F.tw ?? F.d * 0.05), Fe = ge, ce = Pe;
            break;
          default:
            return;
        }
        const _e = new Ge(re.fill, Fe);
        _e.position.set(...oe), _e.rotation.setFromRotationMatrix(ee), u.add(_e);
        const Ze = new vt(re.outline, ce);
        Ze.position.set(...oe), Ze.rotation.setFromRotationMatrix(ee), u.add(Ze);
      }
      const le = ws(F);
      if (le) {
        const Fe = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(F.type) ? "#ff9900" : "#00ccff", ce = new wt(le, Fe, "transparent");
        ce.position.set(oe[0], oe[1], oe[2]);
        const _e = 0.05 * i.gridSize.rawVal * 0.5;
        ce.updateScale(_e * ((h == null ? void 0 : h.rawVal) ?? 1)), _.add(ce);
      }
    });
  }), h && L.derive(() => {
    if (h.val, !i.sections.rawVal) return;
    const Z = 0.05 * i.gridSize.val * 0.5;
    _.children.forEach((Y) => {
      Y instanceof wt && Y.updateScale(Z * h.rawVal);
    });
  }), L.derive(() => {
    u.visible = i.sections.val;
  }), L.derive(() => {
    _.visible = i.sectionLabels.val;
  }), u;
}
class kn extends je {
  constructor(i, y, h, u, _, x, w) {
    super();
    const v = new Fn().moveTo(0, 0).lineTo(0, x[1]).lineTo(h, x[1]).lineTo(h, 0).lineTo(0, 0), z = v.getPoints(), P = new fe().setFromPoints(z);
    this.lines = new vt(P, new it({ color: jt().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(u), w && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const b = new Vn(v), te = new et({ color: x[1] > 0 ? 24435 : 11411474, side: zt });
    this.mesh = new Ge(b, te), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(u), w && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new wt(`${_[1].toFixed(4)}`), this.normalizedResult = x, this.textPosition = yn([i, y]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(u), this.add(this.text);
  }
  updateScale(i) {
    this.lines.scale.set(1, i * 2, 1), this.mesh.scale.set(1, i * 2, 1), this.text.updateScale(i * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * i);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class So extends je {
  constructor(i, y, h, u, _, x, w) {
    super();
    const v = _[0] * h / (_[0] + _[1]), z = _[0] * _[1] > 0;
    if (this.text = new wt(`${_[0].toFixed(4)}`), this.text2 = new wt(`${(_[1] * -1).toFixed(4)}`), this.normalizedResult = x, this.textPosition = qn(i, y), this.text2Position = qn(y, i), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(u), this.text2.rotation.setFromRotationMatrix(u), this.add(this.text, this.text2), z) {
      const P = new Fn().moveTo(0, 0).lineTo(0, x[0]).lineTo(v, 0).lineTo(0, 0), b = new Fn().moveTo(v, 0).lineTo(h, -x[1]).lineTo(h, 0).lineTo(v, 0), te = P.getPoints(), ae = b.getPoints(), ie = new fe().setFromPoints(te), ue = new fe().setFromPoints(ae), k = new it({ color: jt().resultOutline });
      this.lines = new vt(ie, k), this.lines2 = new vt(ue, k), this.lines.position.set(...i), this.lines2.position.set(...i), this.lines.rotation.setFromRotationMatrix(u), this.lines2.rotation.setFromRotationMatrix(u), w && this.lines.rotateX(Math.PI / 2), w && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const W = new Vn(P), he = new Vn(b), ge = new et({ color: x[0] > 0 ? 24435 : 11411474, side: zt }), Pe = new et({ color: -x[1] > 0 ? 24435 : 11411474, side: zt });
      this.mesh = new Ge(W, ge), this.mesh2 = new Ge(he, Pe), this.mesh.position.set(...i), this.mesh2.position.set(...i), this.mesh.rotation.setFromRotationMatrix(u), this.mesh2.rotation.setFromRotationMatrix(u), w && this.mesh.rotateX(Math.PI / 2), w && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const P = new Fn().moveTo(0, 0).lineTo(0, x[0]).lineTo(h, -x[1]).lineTo(h, 0).lineTo(0, 0), b = P.getPoints(), te = new fe().setFromPoints(b);
      this.lines = new vt(te, new it({ color: jt().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(u), w && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const ae = new Vn(P), ie = new et({ color: x[0] > 0 ? 24435 : 11411474, side: zt });
      this.mesh = new Ge(ae, ie), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(u), w && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
function xs(e, i, y, h) {
  const u = new je(), _ = { normals: kn, shearsY: kn, shearsZ: kn, torsions: kn, bendingsY: So, bendingsZ: So };
  return L.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, y.val, i.frameResults.val == "none") return;
    u.children.forEach((w) => w.dispose()), u.clear();
    const x = To[i.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[x]) == null ? void 0 : _b.forEach((w, v) => {
      var _a2, _b2;
      const z = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[v]) ?? [0, 1], P = y.rawVal[z[0]], b = y.rawVal[z[1]], te = new m(...b).distanceTo(new m(...P)), ae = gs((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[x]), ie = w == null ? void 0 : w.map((he) => he / (ae === 0 ? 1 : ae)), ue = Qn(P, b), k = new _[x](P, b, te, ue, w ?? [0, 0], ie ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(x)), W = 0.05 * i.gridSize.rawVal;
      k.updateScale(W * h.rawVal), u.add(k);
    });
  }), L.derive(() => {
    if (h.val, i.frameResults.rawVal == "none") return;
    const x = 0.05 * i.gridSize.val;
    u.children.forEach((w) => w.updateScale(x * h.rawVal));
  }), L.derive(() => {
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
class vs extends je {
  constructor(i, y, h) {
    super();
    const u = y === On.reactions;
    h[0] && (this.xText1 = new wt(`${u ? "Fx" : "Dx"}: ` + h[0].toFixed(4))), h[3] && (this.xText2 = new wt(`${u ? "Mx" : "Rx"}: ` + h[3].toFixed(4))), h[1] && (this.yText1 = new wt(`${u ? "Fy" : "Dy"}: ` + h[1].toFixed(4))), h[4] && (this.yText2 = new wt(`${u ? "My" : "Ry"}: ` + h[4].toFixed(4))), h[2] && (this.zText1 = new wt(`${u ? "Fz" : "Dz"}: ` + h[2].toFixed(4))), h[5] && (this.zText2 = new wt(`${u ? "Mz" : "Rz"}: ` + h[5].toFixed(4))), (h[0] || h[3]) && (this.xArrow = new Ot(new m(1, 0, 0), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), (h[1] || h[4]) && (this.yArrow = new Ot(new m(0, 1, 0), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), (h[2] || h[5]) && (this.zArrow = new Ot(new m(0, 0, 1), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...i), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
function Ms(e, i, y, h) {
  const u = new je();
  return L.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, i.nodeResults.val == "none") return;
    u.children.forEach((w) => w.dispose()), u.clear();
    const _ = On[i.nodeResults.rawVal], x = 0.05 * i.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[_]) == null ? void 0 : _b.forEach((w, v) => {
      const z = new vs(y.rawVal[v], _, w ?? [0, 0, 0, 0, 0, 0]);
      z.updateScale(x * h.rawVal), u.add(z);
    });
  }), L.derive(() => {
    if (h.val, i.nodeResults.rawVal == "none") return;
    const _ = 0.05 * i.gridSize.val;
    u.children.forEach((x) => x.updateScale(_ * h.rawVal));
  }), L.derive(() => {
    u.visible = i.nodeResults.val != "none";
  }), u;
}
function bs({ drawingObj: e, gridObj: i, scene: y, getActiveCamera: h, controls: u, gridSize: _, derivedDisplayScale: x, rendererElm: w, viewerRender: v }) {
  const z = new Ho(), P = new Wo(), b = (n) => {
    const o = w.getBoundingClientRect(), a = n.clientX - o.left, t = n.clientY - o.top, r = o.width || 1, s = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const p = r / 2;
      if (a >= p) return P.x = (a - p) / p * 2 - 1, P.y = -(t / s) * 2 + 1, window.__hekatanSplitCamera ?? h();
      P.x = a / p * 2 - 1;
    } else P.x = a / r * 2 - 1;
    return P.y = -(t / s) * 2 + 1, h();
  }, te = new Ge(new Gt(1e4, 1e4), new et({ side: zt, transparent: true, opacity: 0, depthWrite: false }));
  te.visible = true, te.frustumCulled = false, y.add(te);
  const ae = (n, o, a) => {
    const t = new Ge(new Gt(1e4, 1e4), new et({ side: zt, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, a), t.visible = false, t.frustumCulled = false, y.add(t), t;
  }, ie = ae(Math.PI / 2, 0, 0), ue = ae(0, Math.PI / 2, 0);
  let k = false;
  const W = () => {
    if (k) return z.intersectObjects([te], false);
    if (ie.visible = !!window.__hekatanGridPlaneXZ, ue.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanOrthoRaycast === true && Ye.visible) {
      const a = z.intersectObjects([Ye, Re, We], false);
      if (a.length > 0) return a;
    }
    const o = [te];
    return ie.visible && o.push(ie), ue.visible && o.push(ue), Tt.visible && Ht.length > 0 && o.push(...Ht), z.intersectObjects(o, false);
  }, he = new Pn(new fe(), new Cn()), ge = new Pn(new fe(), new Cn({ color: "gray", sizeAttenuation: false, size: 6 })), Pe = new Pn(new fe(), new Cn({ color: "orange", size: 0.1 }));
  y.add(Pe);
  const K = document.createElement("input");
  K.id = "hk-rubber-label", K.type = "text", K.spellcheck = false, K.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, K.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none", "pointer-events:none"].join(";") + ";", document.body.appendChild(K);
  let Z = null, Y = null, $ = false;
  const A = new m(), E = (n, o, a, t, r, s) => {
    const l = t - n, p = r - o, d = s - a, g = Math.hypot(l, p, d);
    if (g < 0.01) {
      K.style.display = "none";
      return;
    }
    Z = [n, o, a], Y = [l / g, p / g, d / g], A.set((n + t) / 2, (o + r) / 2, (a + s) / 2), A.project(h());
    const M = w.getBoundingClientRect(), c = M.left + (A.x * 0.5 + 0.5) * M.width, f = M.top + (-A.y * 0.5 + 0.5) * M.height;
    if (K.style.left = c + "px", K.style.top = f + "px", K.style.display = "block", !$) {
      if (K.value = `${g.toFixed(2)} m`, document.activeElement !== K) {
        const S = document.activeElement;
        S && (S.tagName === "INPUT" || S.tagName === "TEXTAREA") && S !== K || K.focus({ preventScroll: true });
      }
      try {
        K.select();
      } catch {
      }
    }
  }, R = () => {
    K.style.display = "none", Z = null, Y = null, $ = false, document.activeElement === K && K.blur();
  }, C = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      xt = n, se(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), K.blur();
      return;
    }
    if (!Z || !Y || !e.polylines) return;
    let a = Y[0], t = Y[1], r = Y[2];
    Ee === "x" ? (a = Math.sign(a) || 1, t = 0, r = 0) : Ee === "y" ? (a = 0, t = Math.sign(t) || 1, r = 0) : Ee === "z" && (a = 0, t = 0, r = Math.sign(r) || 1);
    const s = Z[0] + a * n, l = Z[1] + t * n, p = Z[2] + r * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [s, l, p]];
    const d = e.polylines.rawVal, g = d.length ? d[d.length - 1] : [];
    e.polylines.val = [...d.slice(0, -1), [...g, e.points.rawVal.length - 1]], K.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    v();
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
  }, ne = (n) => {
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
  }, G = (n) => {
    var _a;
    if (!e.polylines) return;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, n];
    const o = e.polylines.rawVal, a = o.length ? o[o.length - 1] : [];
    e.polylines.val = [...o.slice(0, -1), [...a, e.points.rawVal.length - 1]], K.blur();
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    v();
  };
  window.__hekatanTypeCoord = (n) => {
    var _a, _b, _c, _d;
    const o = N(n);
    if (!o) return false;
    if (o.kind === "length") return C(o.L), true;
    const a = ne(o);
    if (!a) return false;
    if (G(a), ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "area" && e.polylines) {
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
      const a = N(K.value);
      if (!a) return;
      if ($ = false, a.kind === "length") C(a.L), se(`\u270F DDE ${a.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = ne(a);
        if (!t) return;
        G(t);
        const r = a.kind;
        se(`\u270F ${r} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
      }
      return;
    }
    if (n.key === "Escape") {
      n.preventDefault(), $ = false, K.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!$ && K.style.display === "block") try {
          K.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && ($ = true);
  }), window.addEventListener("keydown", (n) => {
    if (!Z || !Y || document.activeElement === K) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (K.value = n.key, K.focus(), K.setSelectionRange(1, 1), n.preventDefault());
  });
  const H = document.createElement("div");
  H.id = "hk-coord-readout", H.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", H.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(H);
  const F = document.createElement("div");
  F.id = "hk-coord-fixed", F.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", F.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(F);
  const oe = new vt(new fe().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new hn({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  oe.frustumCulled = false, oe.visible = false, y.add(oe);
  const ee = new vt(new fe(), new it({ color: 2282478, transparent: true, opacity: 0.9 }));
  ee.frustumCulled = false, ee.visible = false, y.add(ee);
  let le = [];
  const re = new je(), Fe = new Ge(new Gt(1, 1), new et({ color: 2282478, transparent: true, opacity: 0.08, side: zt, depthWrite: false })), ce = new Yt(new ho(new Gt(1, 1)), new it({ color: 2282478, transparent: true, opacity: 0.85 })), _e = new Yt(new fe(), new it({ color: 2282478, transparent: true, opacity: 0.3 })), Ze = (n, o) => {
    const a = [], t = Math.ceil(n / o);
    for (let r = -t; r <= t; r++) {
      const s = r * o;
      a.push(-n, s, 0, n, s, 0), a.push(s, -n, 0, s, n, 0);
    }
    _e.geometry.dispose(), _e.geometry = new fe(), _e.geometry.setAttribute("position", new Mt(a, 3));
  };
  re.add(Fe, ce, _e), re.visible = false, re.frustumCulled = false, y.add(re);
  const O = new je();
  O.frustumCulled = false, O.visible = false, y.add(O);
  const Me = (n) => {
    const o = new fe().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), a = new hn({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new vt(o, a);
  }, V = Me(16711680), X = Me(65280), J = Me(35071);
  O.add(V, X, J);
  const q = (n) => {
    const o = new fe().setFromPoints([new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0)]), a = new it({ color: n, transparent: true, opacity: 0.2, depthTest: false }), t = new Fo(o, a);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, we = q(3462041), de = q(16724804), ze = q(6333946), me = new je();
  me.frustumCulled = false, me.visible = false, y.add(me), me.add(we, de, ze);
  const tt = (n) => {
    const o = new Gt(1, 1), a = new et({ color: n, transparent: true, opacity: 0.06, side: zt, depthWrite: false }), t = new Ge(o, a);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, Ye = tt(3462041), Re = tt(16724804), We = tt(6333946);
  me.add(Ye, Re, We);
  const Ce = (n, o, a, t) => {
    n.scale.set(2 * t, 2 * t, 1), a === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : a === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, Ke = document.createElement("div");
  Ke.id = "hk-refplane-badge", Ke.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(Ke), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, me.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0], l = window.__hekatanOrthoExt ?? 8;
      Ft(we, s, "xy", l), Ft(de, s, "xz", l), Ft(ze, s, "yz", l), Ce(Ye, s, "xy", l), Ce(Re, s, "xz", l), Ce(We, s, "yz", l), Ye.material.opacity = 0.05, Re.material.opacity = 0.05, We.material.opacity = 0.05;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    v();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !me.visible) {
      v();
      return;
    }
    const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0];
    Ft(we, s, "xy", n), Ft(de, s, "xz", n), Ft(ze, s, "yz", n), Ce(Ye, s, "xy", n), Ce(Re, s, "xz", n), Ce(We, s, "yz", n), v();
  };
  const ot = (n) => {
    if (Ye.material.opacity = n === "xy" ? 0.09 : 0.025, Re.material.opacity = n === "xz" ? 0.09 : 0.025, We.material.opacity = n === "yz" ? 0.09 : 0.025, n) {
      const r = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      Ke.style.background = r.bg, Ke.style.color = r.text, Ke.textContent = `\u25A6 Plano ${n.toUpperCase()}`, Ke.style.display = "block";
    } else Ke.style.display = "none";
  }, Ft = (n, o, a, t) => {
    let r;
    a === "xy" ? r = [new m(o[0] - t, o[1] - t, o[2]), new m(o[0] + t, o[1] - t, o[2]), new m(o[0] + t, o[1] + t, o[2]), new m(o[0] - t, o[1] + t, o[2]), new m(o[0] - t, o[1] - t, o[2])] : a === "xz" ? r = [new m(o[0] - t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] - t)] : r = [new m(o[0], o[1] - t, o[2] - t), new m(o[0], o[1] + t, o[2] - t), new m(o[0], o[1] + t, o[2] + t), new m(o[0], o[1] - t, o[2] + t), new m(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(r);
  };
  let Ee = null;
  window.__hekatanAxisLock = () => Ee;
  let Lt = null;
  const qe = document.createElement("div");
  qe.id = "hk-axis-lock-badge", qe.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "padding:4px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(20px,18px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(qe);
  const De = () => {
    if (!Ee) {
      qe.style.display = "none";
      return;
    }
    const n = { x: "#ff3344", y: "#34d399", z: "#60a5fa" };
    qe.style.background = "rgba(15,23,42,0.92)", qe.style.color = n[Ee], qe.style.border = `1.5px solid ${n[Ee]}`, qe.textContent = `\u{1F512} LOCK ${Ee.toUpperCase()}`, qe.style.display = "block";
  };
  window.addEventListener("keydown", (n) => {
    var _a, _b, _c, _d;
    const o = document.activeElement;
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== K) return;
    const a = n.key.toLowerCase(), t = (_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool;
    if (n.key === "Enter" && t === "polyarea" && le.length >= 3) {
      const r = tn();
      se(`\u2713 \xC1rea libre mallada \u2014 ${r} shells Q4 creados.`), n.preventDefault();
      return;
    }
    if (a === "x" || a === "y" || a === "z") Ee = Ee === a ? null : a, De(), n.preventDefault();
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
  const Ae = new m(), be = new m(), Ne = new m(), Se = (n) => {
    if (!Ee) return null;
    const o = n[0], a = n[1], t = n[2];
    return Ee === "x" ? (Ae.set(o - 1e4, a, t), be.set(o + 1e4, a, t)) : Ee === "y" ? (Ae.set(o, a - 1e4, t), be.set(o, a + 1e4, t)) : (Ae.set(o, a, t - 1e4), be.set(o, a, t + 1e4)), z.ray.distanceSqToSegment(Ae, be, null, Ne), Ne;
  };
  window.__hekatanProjectOnAxis = Se;
  const Ie = new vt(new fe().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new it({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  Ie.renderOrder = 998, Ie.frustumCulled = false, Ie.visible = false, y.add(Ie);
  let Ue = -1, pt = -1, $e = -1;
  const ve = /* @__PURE__ */ new Set();
  window.__hekatanSelection = ve;
  const nt = new vt(new fe().setFromPoints([new m(), new m()]), new it({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  nt.renderOrder = 997, nt.frustumCulled = false, nt.visible = false, y.add(nt);
  const Je = new Ge(new rn(0.02, 12, 12), new et({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  Je.renderOrder = 998, Je.visible = false, y.add(Je);
  const Rt = (n) => {
    const o = h();
    if (o.isOrthographicCamera) {
      const t = o, r = (t.top - t.bottom) / t.zoom;
      return Math.max(0.05, r * 6e-3);
    }
    const a = o.position.distanceTo(n);
    return Math.max(0.05, a / 10);
  }, Xt = () => {
    Je.visible && Je.scale.setScalar(Rt(Je.position));
  }, lt = new je();
  lt.frustumCulled = false, y.add(lt);
  const ct = 2282478;
  let bt = null;
  const xn = (n, o, a, t) => {
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
  }, Bt = () => {
    var _a, _b, _c, _d, _e2, _f, _g;
    for (; lt.children.length; ) {
      const l = lt.children.pop();
      (_b = (_a = l.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = l.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const l of ve) {
      const [p, ...d] = l.split(":");
      if (p === "pt") {
        const g = n[+d[0]];
        if (!g) continue;
        const M = new Ge(new rn(0.025, 12, 12), new et({ color: ct, transparent: true, opacity: 0.9, depthTest: false }));
        M.position.set(g[0], g[1], g[2]), M.renderOrder = 999, M.__isSelectionPt = true, lt.add(M);
      } else if (p === "seg") {
        const g = o[+d[0]], M = n[g == null ? void 0 : g[+d[1]]], c = n[g == null ? void 0 : g[+d[1] + 1]];
        if (!M || !c) continue;
        const f = new fe().setFromPoints([new m(M[0], M[1], M[2]), new m(c[0], c[1], c[2])]), S = new vt(f, new it({ color: ct, transparent: true, opacity: 0.95, depthTest: false }));
        S.renderOrder = 999, lt.add(S);
      } else if (p === "poly") {
        const M = o[+d[0]].map((S) => {
          const I = n[S];
          return I ? new m(I[0], I[1], I[2]) : null;
        }).filter(Boolean);
        if (M.length < 2) continue;
        const c = new fe().setFromPoints(M), f = new vt(c, new it({ color: ct, transparent: true, opacity: 0.95, depthTest: false }));
        f.renderOrder = 999, lt.add(f);
      } else if (p === "aux") {
        const g = t[+d[0]];
        if (!g || g.length !== 6) continue;
        const M = new fe().setFromPoints([new m(g[0], g[1], g[2]), new m(g[3], g[4], g[5])]), c = new vt(M, new it({ color: ct, transparent: true, opacity: 0.95, depthTest: false }));
        c.renderOrder = 999, lt.add(c);
      }
    }
    const r = window.__hekatanUpdateSelectionPtScale;
    r && r();
    const s = window.__hekatanRefreshPropsPane;
    s && s(), v();
  };
  window.__hekatanRefreshSelection = Bt, window.__hekatanClearSelection = () => {
    ve.clear(), Bt();
  };
  const qt = (n, o, a, t, r, s, l, p, d) => {
    const g = l - t, M = p - r, c = d - s, f = g * g + M * M + c * c;
    if (f < 1e-12) return Math.hypot(n - t, o - r, a - s);
    let S = ((n - t) * g + (o - r) * M + (a - s) * c) / f;
    S = Math.max(0, Math.min(1, S));
    const I = t + S * g, B = r + S * M, U = s + S * c;
    return Math.hypot(n - I, o - B, a - U);
  }, Kt = (n, o, a, t) => {
    if (!e.polylines) return null;
    const r = e.polylines.rawVal, s = e.points.rawVal;
    let l = -1, p = -1, d = t;
    for (let g = 0; g < r.length; g++) {
      const M = r[g];
      for (let c = 0; c < M.length - 1; c++) {
        const f = s[M[c]], S = s[M[c + 1]];
        if (!f || !S) continue;
        const I = qt(n, o, a, f[0], f[1], f[2], S[0], S[1], S[2]);
        I < d && (d = I, l = g, p = c);
      }
    }
    return l >= 0 ? { polyIdx: l, segIdx: p, dist: d } : null;
  }, gn = (n, o, a, t) => {
    const r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? (r == null ? void 0 : r.val) ?? r ?? [];
    let l = -1, p = t;
    for (let d = 0; d < s.length; d++) {
      const g = s[d];
      if (!g || g.length !== 6) continue;
      const M = qt(n, o, a, g[0], g[1], g[2], g[3], g[4], g[5]);
      M < p && (p = M, l = d);
    }
    return l;
  }, An = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      Ie.visible = false;
      return;
    }
    Ie.geometry.setFromPoints([new m(t[0], t[1], t[2]), new m(t[3], t[4], t[5])]), Ie.visible = true;
  }, Tn = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const a = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!a || a.length < 2) {
      Ie.visible = false;
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
    Ie.geometry.setFromPoints(s), Ie.visible = true;
  }, en = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const a = o.filter((d, g) => g !== n), t = /* @__PURE__ */ new Set();
    for (const d of a) for (const g of d) t.add(g);
    const r = e.points.rawVal, s = /* @__PURE__ */ new Map(), l = [];
    for (let d = 0; d < r.length; d++) t.has(d) && (s.set(d, l.length), l.push(r[d]));
    const p = a.map((d) => d.map((g) => s.get(g)).filter((g) => g !== void 0));
    e.points.val = l, e.polylines.val = p, e.areas && (e.areas.val = e.areas.rawVal.filter((d) => d !== n).map((d) => d > n ? d - 1 : d)), Ie.visible = false, Ue = -1, pt = -1;
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
  }, En = (n, o) => {
    var _a, _b, _c;
    if (!e.polylines) return;
    const a = e.polylines.rawVal;
    if (n < 0 || n >= a.length) return;
    if (((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false) {
      en(n);
      return;
    }
    const r = a[n];
    if (o < 0 || o >= r.length - 1) return;
    if (r.length === 2) {
      en(n);
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
    Ie.visible = false, Ue = -1, pt = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  he.geometry.setAttribute("position", new Mt(e.points.rawVal.flat(), 3)), he.geometry.computeBoundingSphere(), he.frustumCulled = false, ge.frustumCulled = false, y.add(ge), te.position.set(0, 0, 0), te.rotateX(Math.PI / 2), te.geometry.rotateX(Math.PI / 2), te.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, a) => {
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
    const r = Math.max(4, Math.round(t)), s = new m(...n), l = new m(...o), p = new m(...a), d = new m().subVectors(l, s), g = new m().subVectors(p, s), M = new m().crossVectors(d, g).normalize(), c = new m().addVectors(s, l).multiplyScalar(0.5), f = new m().addVectors(l, p).multiplyScalar(0.5), S = new m().crossVectors(d, M).normalize(), I = new m().crossVectors(new m().subVectors(p, l), M).normalize(), B = new m().subVectors(f, c), U = S.x * I.y - S.y * I.x;
    let T;
    if (Math.abs(U) > 1e-9) {
      const Xe = (B.x * I.y - B.y * I.x) / U;
      T = new m().addVectors(c, S.clone().multiplyScalar(Xe));
    } else T = c.clone();
    const Q = s.distanceTo(T), j = new m().subVectors(s, T), pe = new m().subVectors(p, T), Le = Math.acos(Math.max(-1, Math.min(1, j.dot(pe) / (Q * Q)))), ye = e.points.rawVal.length, xe = [], ft = M.clone();
    for (let Xe = 0; Xe <= r; Xe++) {
      const Ve = Xe / r, He = Le * Ve, st = new Un().setFromAxisAngle(ft, He), ht = j.clone().applyQuaternion(st).add(T);
      xe.push([ht.x, ht.y, ht.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...xe], e.polylines) {
      const Xe = xe.map((He, st) => ye + st), Ve = e.polylines.rawVal;
      e.polylines.val = [...Ve.slice(0, -1), Xe, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, a = 1, t = 6, r = 6) => {
    const s = Math.min(n[0], o[0]), l = Math.max(n[0], o[0]), p = Math.min(n[1], o[1]), d = Math.max(n[1], o[1]), g = (n[2] + o[2]) / 2, M = l - s, c = d - p, f = Math.min(a, M / 2 - 0.01, c / 2 - 0.01);
    if (f <= 0) return;
    const S = e.points.rawVal.length, I = [], B = [], U = (T, Q) => {
      I.push([T, Q, g]), B.push(S + I.length - 1);
    };
    for (let T = 0; T <= r; T++) U(s + f + (M - 2 * f) * T / r, p);
    for (let T = 1; T <= t; T++) {
      const Q = -Math.PI / 2 + Math.PI / 2 * T / t;
      U(l - f + f * Math.cos(Q), p + f + f * Math.sin(Q));
    }
    for (let T = 1; T <= r; T++) U(l, p + f + (c - 2 * f) * T / r);
    for (let T = 1; T <= t; T++) {
      const Q = 0 + Math.PI / 2 * T / t;
      U(l - f + f * Math.cos(Q), d - f + f * Math.sin(Q));
    }
    for (let T = 1; T <= r; T++) U(l - f - (M - 2 * f) * T / r, d);
    for (let T = 1; T <= t; T++) {
      const Q = Math.PI / 2 + Math.PI / 2 * T / t;
      U(s + f + f * Math.cos(Q), d - f + f * Math.sin(Q));
    }
    for (let T = 1; T <= r; T++) U(s, d - f - (c - 2 * f) * T / r);
    for (let T = 1; T <= t; T++) {
      const Q = Math.PI + Math.PI / 2 * T / t;
      U(s + f + f * Math.cos(Q), p + f + f * Math.sin(Q));
    }
    if (B.push(S), e.points.val = [...e.points.rawVal, ...I], e.polylines) {
      const T = e.polylines.rawVal;
      e.polylines.val = [...T.slice(0, -1), B, []];
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
    if (k && e.gridTarget) {
      const M = e.gridTarget.rawVal, c = new mn(...M.rotation), f = new m(1, 0, 0).applyEuler(c), S = new m(0, 1, 0).applyEuler(c), I = new m(...M.position), B = new m(t, r, s), U = new m(l, p, d), T = B.clone().sub(I).dot(f), Q = B.clone().sub(I).dot(S), j = U.clone().sub(I).dot(f), pe = U.clone().sub(I).dot(S), Le = (ye, xe) => I.clone().addScaledVector(f, ye).addScaledVector(S, xe).toArray();
      g = [Le(T, Q), Le(j, Q), Le(j, pe), Le(T, pe)];
    } else Math.abs(s - d) < 1e-6 ? g = [[t, r, s], [l, r, s], [l, p, s], [t, p, s]] : Math.abs(r - p) < 1e-6 ? g = [[t, r, s], [l, r, s], [l, r, d], [t, r, d]] : g = [[t, r, s], [t, p, s], [t, p, d], [t, r, d]];
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...g], e.polylines) {
      const M = e.polylines.rawVal, c = M.length - 1, f = [a, a + 1, a + 2, a + 3, a];
      e.polylines.val = [...M.slice(0, -1), f, []], e.areas && (e.areas.val = [...e.areas.rawVal, c]);
    }
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    v();
  }, window.__hekatanMeshPolyArea = (n, o) => {
    var _a;
    const a = n.length;
    if (a < 3) return 0;
    let t = 0, r = 0, s = 0;
    for (let ke = 0; ke < a; ke++) {
      const Be = n[ke], Oe = n[(ke + 1) % a];
      t += (Be[1] - Oe[1]) * (Be[2] + Oe[2]), r += (Be[2] - Oe[2]) * (Be[0] + Oe[0]), s += (Be[0] - Oe[0]) * (Be[1] + Oe[1]);
    }
    const l = Math.hypot(t, r, s) || 1;
    t /= l, r /= l, s /= l;
    let p = n[1][0] - n[0][0], d = n[1][1] - n[0][1], g = n[1][2] - n[0][2];
    const M = Math.hypot(p, d, g) || 1;
    p /= M, d /= M, g /= M;
    let c = r * g - s * d, f = s * p - t * g, S = t * d - r * p;
    const I = Math.hypot(c, f, S) || 1;
    c /= I, f /= I, S /= I;
    const B = n[0], U = (ke) => [(ke[0] - B[0]) * p + (ke[1] - B[1]) * d + (ke[2] - B[2]) * g, (ke[0] - B[0]) * c + (ke[1] - B[1]) * f + (ke[2] - B[2]) * S], T = (ke, Be) => [B[0] + ke * p + Be * c, B[1] + ke * d + Be * f, B[2] + ke * g + Be * S], Q = n.map(U);
    let j = 1 / 0, pe = -1 / 0, Le = 1 / 0, ye = -1 / 0;
    for (const [ke, Be] of Q) ke < j && (j = ke), ke > pe && (pe = ke), Be < Le && (Le = Be), Be > ye && (ye = Be);
    const xe = pe - j, ft = ye - Le;
    if (xe < 1e-6 || ft < 1e-6) return 0;
    let Xe = o && o > 0 ? o : 0.5;
    for (; xe / Xe * (ft / Xe) > 2500; ) Xe *= 2;
    Xe = Math.min(Xe, Math.min(xe, ft));
    const Ve = (ke, Be) => {
      let Oe = false;
      for (let At = 0, Ut = Q.length - 1; At < Q.length; Ut = At++) {
        const [an, un] = Q[At], [ln, fn] = Q[Ut];
        un > Be != fn > Be && ke < (ln - an) * (Be - un) / (fn - un) + an && (Oe = !Oe);
      }
      return Oe;
    }, He = Math.max(1, Math.round(xe / Xe)), st = Math.max(1, Math.round(ft / Xe)), ht = xe / He, St = ft / st, Zt = /* @__PURE__ */ new Map(), $t = [], mt = e.points.rawVal.length, Vt = (ke, Be) => {
      const Oe = ke + "," + Be, At = Zt.get(Oe);
      if (At !== void 0) return At;
      const Ut = mt + $t.length;
      return $t.push(T(j + ke * ht, Le + Be * St)), Zt.set(Oe, Ut), Ut;
    }, gt = [];
    for (let ke = 0; ke < He; ke++) for (let Be = 0; Be < st; Be++) {
      if (!Ve(j + (ke + 0.5) * ht, Le + (Be + 0.5) * St)) continue;
      const Oe = Vt(ke, Be), At = Vt(ke + 1, Be), Ut = Vt(ke + 1, Be + 1), an = Vt(ke, Be + 1);
      gt.push([Oe, At, Ut, an]);
    }
    if (!gt.length) return 0;
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...$t], e.polylines && e.areas) {
      let ke = e.polylines.rawVal.slice();
      ke.length && ke[ke.length - 1].length === 0 && (ke = ke.slice(0, -1));
      const Be = [];
      for (const Oe of gt) Be.push(ke.length), ke.push([Oe[0], Oe[1], Oe[2], Oe[3], Oe[0]]);
      ke.push([]), e.polylines.val = ke, e.areas.val = [...e.areas.rawVal, ...Be];
    }
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    return v(), gt.length;
  };
  const tn = () => {
    if (le.length < 3) return le = [], ee.visible = false, v(), 0;
    const n = window.__hekatanMeshPolyArea(le.slice());
    return le = [], ee.visible = false, v(), n;
  };
  window.__hekatanFinalizePolyArea = tn, window.__hekatanSetInclinedPlaneFrom3 = (n, o, a) => {
    var _a;
    const t = new m(n[0], n[1], n[2]), r = new m(o[0], o[1], o[2]), s = new m(a[0], a[1], a[2]), l = new m().subVectors(r, t).cross(new m().subVectors(s, t));
    if (l.lengthSq() < 1e-9) return false;
    l.normalize();
    const p = new Un().setFromUnitVectors(new m(0, 0, 1), l), d = new mn().setFromQuaternion(p);
    e.gridTarget && (e.gridTarget.val = { position: [t.x, t.y, t.z], rotation: [d.x, d.y, d.z] }), k = true;
    const g = new m().addVectors(t, r).add(s).multiplyScalar(1 / 3), M = Math.max(t.distanceTo(r), t.distanceTo(s), r.distanceTo(s)) * 2.2 + 4, c = M / 2;
    Fe.geometry.dispose(), Fe.geometry = new Gt(M, M), ce.geometry.dispose(), ce.geometry = new ho(new Gt(M, M)), Ze(c, 1), re.position.copy(g), re.quaternion.copy(p), re.scale.set(1, 1, 1), re.visible = true;
    try {
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
    } catch {
    }
    return v(), true;
  }, window.__hekatanResetPlaneXY = () => {
    e.gridTarget && (e.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, 0] }), k = false, re.visible = false, v();
  };
  const Pt = new je();
  Pt.visible = false, y.add(Pt), window.__hekatanShowAxes = (n, o, a = 12, t = 2) => {
    var _a, _b;
    for (; Pt.children.length; ) {
      const M = Pt.children.pop();
      (_a = M.geometry) == null ? void 0 : _a.dispose(), (_b = M.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const r = Math.min(...o) - t, s = Math.max(...o) + t, l = Math.min(...n) - t, p = Math.max(...n) + t, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", g = (M, c, f, S, I) => {
      const B = document.createElement("canvas");
      B.width = 64, B.height = 32;
      const U = B.getContext("2d");
      U.fillStyle = I, U.font = "bold 22px sans-serif", U.textAlign = "center", U.fillText(M, 32, 26);
      const T = new mo(B), Q = new wo({ map: T, transparent: true }), j = new yo(Q);
      return j.position.set(c, f, S), j.scale.set(1.2, 0.6, 1), j;
    };
    n.forEach((M, c) => {
      const f = c < d.length ? d[c] : `X${c}`, S = new fe().setFromPoints([new m(M, r, 0), new m(M, s, 0), new m(M, r, 0), new m(M, r, a)]), I = new hn({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), B = new Yt(S, I);
      B.computeLineDistances(), Pt.add(B), Pt.add(g(f, M, r - 0.5, 0, "#60a5fa")), Pt.add(g(f, M, s + 0.5, 0, "#60a5fa"));
    }), o.forEach((M, c) => {
      const f = `${c + 1}`, S = new fe().setFromPoints([new m(l, M, 0), new m(p, M, 0), new m(l, M, 0), new m(l, M, a)]), I = new hn({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), B = new Yt(S, I);
      B.computeLineDistances(), Pt.add(B), Pt.add(g(f, l - 0.5, M, 0, "#fb7185")), Pt.add(g(f, p + 0.5, M, 0, "#fb7185"));
    }), Pt.visible = true, v();
  }, window.__hekatanHideAxes = () => {
    Pt.visible = false, v();
  };
  const Tt = new je();
  Tt.visible = false, y.add(Tt);
  let Ht = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, a = 0, t = 0) => {
    var _a, _b;
    for (; Tt.children.length; ) {
      const s = Tt.children.pop();
      (_a = s.geometry) == null ? void 0 : _a.dispose(), (_b = s.material) == null ? void 0 : _b.dispose();
    }
    Ht.forEach((s) => {
      y.remove(s), s.geometry.dispose(), s.material.dispose();
    }), Ht = [];
    const r = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((s, l) => {
      const p = r[l % r.length], d = o / 2, g = [new m(a - d, t - d, s), new m(a + d, t - d, s), new m(a + d, t + d, s), new m(a - d, t + d, s), new m(a - d, t - d, s)], M = new fe().setFromPoints(g), c = new it({ color: p, transparent: true, opacity: 0.55 });
      Tt.add(new vt(M, c));
      const f = document.createElement("canvas");
      f.width = 128, f.height = 32;
      const S = f.getContext("2d");
      S.fillStyle = `#${p.toString(16).padStart(6, "0")}`, S.font = "bold 18px sans-serif", S.fillText(`Z = ${s} m`, 4, 22);
      const I = new mo(f), B = new wo({ map: I, transparent: true }), U = new yo(B);
      U.position.set(a - d - 1.5, t - d - 1.5, s), U.scale.set(2.5, 0.6, 1), Tt.add(U);
      const T = new Gt(1e4, 1e4), Q = new et({ visible: false, side: zt }), j = new Ge(T, Q);
      j.position.set(0, 0, s), j.frustumCulled = false, j.userData = { refPlaneZ: s }, y.add(j), Ht.push(j);
    }), Tt.visible = true, v();
  }, window.__hekatanHideRefPlanes = () => {
    Tt.visible = false, Ht.forEach((n) => {
      n.visible = false;
    }), v();
  };
  const Jt = new je();
  Jt.frustumCulled = false, y.add(Jt);
  const vn = () => {
    var _a, _b, _c, _d;
    for (; Jt.children.length; ) {
      const a = Jt.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (a.length !== 6) continue;
      const t = new fe().setFromPoints([new m(a[0], a[1], a[2]), new m(a[3], a[4], a[5])]), r = new hn({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), s = new vt(t, r);
      s.computeLineDistances(), Jt.add(s);
    }
  };
  L.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, vn(), v());
  });
  const Dt = new je();
  Dt.frustumCulled = false, y.add(Dt);
  const eo = () => {
    var _a, _b, _c, _d;
    for (; Dt.children.length; ) {
      const a = Dt.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxPoints, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (!a || a.length !== 3) continue;
      const t = new Ge(new rn(0.025, 12, 12), new et({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(a[0], a[1], a[2]), t.renderOrder = 996, t.scale.setScalar(Rt(t.position)), Dt.add(t);
    }
  };
  L.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, eo(), v());
  }), u.addEventListener("change", () => {
    Dt.children.forEach((n) => {
      n.scale.setScalar(Rt(n.position));
    });
  }), window.__hekatanRenderAuxPoints = eo;
  const ut = new je(), $o = new Ge(new rn(0.01, 12, 12), new et({ color: 16724804, transparent: true, opacity: 0.95 })), Io = new Ge(new rn(0.015, 12, 12), new et({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  ut.add($o, Io);
  const nn = 0.08, $n = (n, o, a) => {
    const t = new fe().setFromPoints([new m(...n), new m(...o)]);
    return new vt(t, new it({ color: a, transparent: true, opacity: 0.7 }));
  };
  ut.add($n([-nn, 0, 0], [nn, 0, 0], 16711680)), ut.add($n([0, -nn, 0], [0, nn, 0], 65280)), ut.add($n([0, 0, -nn], [0, 0, nn], 35071)), ut.visible = false, ut.frustumCulled = false, y.add(ut);
  const to = 40, Lo = 2.5, In = () => {
    if (!ut.visible) return;
    const o = h().position.distanceTo(ut.position), a = Math.max(0.05, Math.min(Lo, o / to));
    ut.scale.setScalar(a);
  }, no = () => {
    lt.children.length !== 0 && lt.children.forEach((n) => {
      if (!n.__isSelectionPt) return;
      const o = n;
      o.scale.setScalar(Rt(o.position));
    });
  };
  window.__hekatanUpdateSelectionPtScale = no, u.addEventListener("change", () => {
    In(), Je.visible && Xt();
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = h().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / to));
    }
    no();
  }), window.__hekatanShowSnap = (n, o, a) => {
    ut.position.set(n, o, a), ut.visible = true, In(), v();
  }, window.__hekatanHideSnap = () => {
    ut.visible = false, v();
  }, w.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q;
    const o = b(n);
    if (!o) return;
    z.setFromCamera(P, o);
    const a = W();
    if (a.length) {
      const t = a[0].point, r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, r);
      if (s) io(s.type, s.x, s.y, s.z), ut.position.set(s.x, s.y, s.z), ut.visible = true, t.set(s.x, s.y, s.z);
      else {
        Bn();
        const M = window.__hekatanSnapEnabled !== false, c = window.__hekatanSnap2D ?? 0.5;
        M && c > 0 && (t.x = Math.round(t.x / c) * c, t.y = Math.round(t.y / c) * c, t.z = Math.round(t.z / c) * c), ut.position.copy(t), ut.visible = true;
      }
      In();
      const l = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (l === "select" || !l) {
        const M = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = xn(t.x, t.y, t.z, M), f = Kt(t.x, t.y, t.z, M), S = gn(t.x, t.y, t.z, M);
        if (c >= 0) {
          const T = e.points.rawVal[c];
          Je.position.set(T[0], T[1], T[2]), Je.visible = true, Xt(), nt.visible = false, bt = { kind: "pt", a: c };
        } else if (f) {
          const T = e.points.rawVal, Q = e.polylines.rawVal[f.polyIdx], j = T[Q[f.segIdx]], pe = T[Q[f.segIdx + 1]];
          nt.geometry.setFromPoints([new m(j[0], j[1], j[2]), new m(pe[0], pe[1], pe[2])]), nt.visible = true, Je.visible = false, bt = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(f.polyIdx)) ?? false ? { kind: "poly", a: f.polyIdx } : { kind: "seg", a: f.polyIdx, b: f.segIdx };
        } else if (S >= 0) {
          const Q = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[S];
          Q && (nt.geometry.setFromPoints([new m(Q[0], Q[1], Q[2]), new m(Q[3], Q[4], Q[5])]), nt.visible = true, Je.visible = false, bt = { kind: "aux", a: S });
        } else nt.visible = false, Je.visible = false, bt = null;
        H.style.left = n.clientX + "px", H.style.top = n.clientY + "px", H.style.display = "block";
        let I = t;
        if ((bt == null ? void 0 : bt.kind) === "pt") {
          const T = e.points.rawVal[bt.a];
          T && (I = new m(T[0], T[1], T[2]));
        }
        const B = `X=${I.x.toFixed(2)} Y=${I.y.toFixed(2)} Z=${I.z.toFixed(2)}`;
        if (bt) {
          const T = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          H.textContent = `${B}  \xB7  \u{1F5B1} Click \u2192 ${T[bt.kind]}`;
        } else H.textContent = B;
        const U = document.getElementById("hk-coord-fixed");
        U && (U.textContent = B), oe.visible = false, O.visible = false, v();
        return;
      }
      if (l === "delete") {
        const M = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = Kt(t.x, t.y, t.z, M), f = gn(t.x, t.y, t.z, M);
        let S = false;
        if (f >= 0) if (!c) S = true;
        else {
          const T = window.__hekatanDrawingAuxLines, j = ((T == null ? void 0 : T.rawVal) ?? (T == null ? void 0 : T.val) ?? T ?? [])[f];
          qt(t.x, t.y, t.z, j[0], j[1], j[2], j[3], j[4], j[5]) < c.dist && (S = true);
        }
        S ? ($e = f, Ue = -1, pt = -1, An(f)) : c ? (Ue = c.polyIdx, pt = c.segIdx, $e = -1, Tn(c.polyIdx, c.segIdx)) : (Ue = -1, pt = -1, $e = -1, Ie.visible = false), oe.visible = false, O.visible = false, R(), H.style.left = n.clientX + "px", H.style.top = n.clientY + "px", H.style.display = "block";
        const I = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let B = "";
        S ? B = `\u{1F5D1} l\xEDnea aux #${$e + 1}` : c ? B = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(c.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${c.polyIdx + 1}` : `\u{1F5D1} seg ${c.segIdx + 1} / poly #${c.polyIdx + 1}` : B = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", H.textContent = `${I}  \xB7  ${B}`;
        const U = document.getElementById("hk-coord-fixed");
        U && (U.textContent = I), v();
        return;
      } else Ie.visible = false, Ue = -1, $e = -1;
      H.style.left = n.clientX + "px", H.style.top = n.clientY + "px", H.style.display = "block";
      const p = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], d = p[p.length - 1] ?? [], g = e.points.rawVal ?? [];
      if (d.length > 0 && g[d[d.length - 1]]) {
        const M = d[d.length - 1], c = g[M];
        let f = Ee;
        if (Lt = null, !f && window.__hekatanAxisSnap !== false) {
          const Ve = w.getBoundingClientRect(), He = n.clientX, st = n.clientY, ht = ((_k = settings.gridSize) == null ? void 0 : _k.rawVal) ?? 10, St = new m(c[0], c[1], c[2]), Zt = [["x", new m(1, 0, 0)], ["y", new m(0, 1, 0)], ["z", new m(0, 0, 1)]], $t = (Vt) => {
            const gt = Vt.clone().project(o);
            return { x: (gt.x * 0.5 + 0.5) * Ve.width + Ve.left, y: (-gt.y * 0.5 + 0.5) * Ve.height + Ve.top };
          };
          let mt = null;
          for (const [Vt, gt] of Zt) {
            const ke = $t(St.clone().addScaledVector(gt, -ht)), Be = $t(St.clone().addScaledVector(gt, ht)), Oe = Be.x - ke.x, At = Be.y - ke.y, Ut = He - ke.x, an = st - ke.y, un = Oe * Oe + At * At || 1;
            let ln = (Ut * Oe + an * At) / un;
            ln = Math.max(0, Math.min(1, ln));
            const fn = Math.hypot(He - (ke.x + ln * Oe), st - (ke.y + ln * At));
            if (mt === null || fn < mt.dpx) {
              const Dn = z.ray, po = St.clone().sub(Dn.origin), Nn = gt.dot(Dn.direction), uo = gt.dot(po), No = Dn.direction.dot(po), fo = 1 - Nn * Nn, Zo = Math.abs(fo) < 1e-6 ? -uo : (Nn * No - uo) / fo;
              mt = { axis: Vt, dpx: fn, pt: St.clone().addScaledVector(gt, Zo) };
            }
          }
          mt && mt.dpx <= 12 && (t.copy(mt.pt), f = mt.axis, Lt = mt.pt.clone());
        }
        const S = !!window.__hekatanOrthoMode;
        if (!f && S) {
          const Ve = Math.abs(t.x - c[0]), He = Math.abs(t.y - c[1]), st = Math.abs(t.z - c[2]), ht = (_l = a[0]) == null ? void 0 : _l.object;
          let St = null;
          ht === Ye ? St = "xy" : ht === Re ? St = "xz" : ht === We && (St = "yz"), St === "xy" ? f = Ve >= He ? "x" : "y" : St === "xz" ? f = Ve >= st ? "x" : "z" : St === "yz" ? f = He >= st ? "y" : "z" : f = Ve >= He && Ve >= st ? "x" : He >= st ? "y" : "z";
        }
        const I = window.__hekatanPolarTrack !== false;
        if (!f && I) {
          const Ve = t.x - c[0], He = t.y - c[1], st = t.z - c[2], ht = Math.hypot(Ve, He, st);
          if (ht > 1e-3) {
            const Zt = Math.tan(6 * Math.PI / 180) * ht, $t = Math.hypot(He, st), mt = Math.hypot(Ve, st), Vt = Math.hypot(Ve, He), gt = [["x", $t], ["y", mt], ["z", Vt]];
            gt.sort((ke, Be) => ke[1] - Be[1]), gt[0][1] <= Zt && (f = gt[0][0]);
          }
        }
        if (f) {
          const Ve = c[0], He = c[1], st = c[2];
          f === "x" ? t.set(t.x, He, st) : f === "y" ? t.set(Ve, t.y, st) : t.set(Ve, He, t.z);
          const ht = !!Ee, Zt = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[f];
          qe.style.background = "rgba(15,23,42,0.92)", qe.style.color = Zt, qe.style.border = `1.5px solid ${Zt}`;
          const $t = (_m = a[0]) == null ? void 0 : _m.object;
          let mt = null;
          $t === Ye ? mt = "xy" : $t === Re ? mt = "xz" : $t === We && (mt = "yz");
          const Vt = mt ? ` (plano ${mt.toUpperCase()})` : "";
          qe.textContent = ht ? `\u{1F512} LOCK ${f.toUpperCase()}${Vt}` : `\u22A5 ORTO ${f.toUpperCase()}${Vt}`, qe.style.left = n.clientX + 20 + "px", qe.style.top = n.clientY + 18 + "px", qe.style.transform = "none", qe.style.display = "block";
        } else Ee || (qe.style.display = "none");
        const B = Math.hypot(t.x - c[0], t.y - c[1], t.z - c[2]), U = Math.atan2(t.y - c[1], t.x - c[0]) * 180 / Math.PI, T = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        H.textContent = `${T} | \u0394L=${B.toFixed(2)}m ${U.toFixed(0)}\xB0`;
        const Q = document.getElementById("hk-coord-fixed");
        Q && (Q.textContent = T), oe.geometry.setFromPoints([new m(c[0], c[1], c[2]), new m(t.x, t.y, t.z)]), (_n2 = oe.computeLineDistances) == null ? void 0 : _n2.call(oe), oe.visible = true, E(c[0], c[1], c[2], t.x, t.y, t.z);
        const j = window.__hekatanOrthoExt ?? 8, pe = window.__hekatanShowOrthoPlanes !== false;
        me.visible = pe, pe || ot(null), pe && (Ft(we, c, "xy", j), Ft(de, c, "xz", j), Ft(ze, c, "yz", j), Ce(Ye, c, "xy", j), Ce(Re, c, "xz", j), Ce(We, c, "yz", j));
        const Le = pe ? z.intersectObjects([Ye, Re, We], false) : [];
        let ye = null;
        if (Le.length > 0) {
          const Ve = Le[0].object;
          Ve === Ye ? ye = "xy" : Ve === Re ? ye = "xz" : Ve === We && (ye = "yz");
        }
        ot(ye), ye && (Ke.style.left = n.clientX + "px", Ke.style.top = n.clientY + "px"), V.geometry.setFromPoints([new m(c[0] - j, c[1], c[2]), new m(c[0] + j, c[1], c[2])]), (_o2 = V.computeLineDistances) == null ? void 0 : _o2.call(V), X.geometry.setFromPoints([new m(c[0], c[1] - j, c[2]), new m(c[0], c[1] + j, c[2])]), (_p = X.computeLineDistances) == null ? void 0 : _p.call(X), J.geometry.setFromPoints([new m(c[0], c[1], c[2] - j), new m(c[0], c[1], c[2] + j)]), (_q = J.computeLineDistances) == null ? void 0 : _q.call(J), O.visible = true;
        const xe = V.material, ft = X.material, Xe = J.material;
        f === "x" ? (xe.opacity = 0.95, ft.opacity = 0.1, Xe.opacity = 0.1) : f === "y" ? (xe.opacity = 0.1, ft.opacity = 0.95, Xe.opacity = 0.1) : f === "z" ? (xe.opacity = 0.1, ft.opacity = 0.1, Xe.opacity = 0.95) : (xe.opacity = 0.5, ft.opacity = 0.5, Xe.opacity = 0.5);
      } else {
        const M = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        H.textContent = M;
        const c = document.getElementById("hk-coord-fixed");
        if (c && (c.textContent = M), oe.visible = false, O.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(l)) {
          if (Z = null, Y = null, K.style.left = n.clientX + 20 + "px", K.style.top = n.clientY - 28 + "px", K.style.display = "block", !$) {
            K.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const S = document.activeElement;
            !(S && (S.tagName === "INPUT" || S.tagName === "TEXTAREA") && S !== K) && document.activeElement !== K && K.focus({ preventScroll: true });
            try {
              K.select();
            } catch {
            }
          }
        } else R();
      }
      v();
    } else Bn(), H.style.display = "none", ut.visible = false, oe.visible = false, O.visible = false, R(), v();
  }), L.derive(() => {
    if (!e.gridTarget) return;
    _s(i, { position: new m(...e.gridTarget.val.position), quaternion: new Un().setFromEuler(new mn(...e.gridTarget.val.rotation)) }, v), te.position.set(...e.gridTarget.val.position), te.quaternion.setFromEuler(new mn(...e.gridTarget.val.rotation)), te.updateMatrixWorld();
    const n = new m(0, 0, 1).applyEuler(new mn(...e.gridTarget.val.rotation));
    k = !(Math.abs(n.x) > 0.999 || Math.abs(n.y) > 0.999 || Math.abs(n.z) > 0.999);
  }), L.derive(() => {
    he.geometry.setAttribute("position", new Mt(e.points.val.flat(), 3)), he.geometry.computeBoundingSphere();
  }), L.derive(() => {
    const n = 0.05 * _ * 0.5 * x.val;
    z.params.Points.threshold = 0.4 * n;
  }), L.derive(() => {
    var _a;
    const n = e.points.val ?? [], a = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const s of a) {
      const [l, p, d] = n[s];
      t.push(l, p, d);
    }
    const r = new fe();
    r.setAttribute("position", new Mt(t, 3)), Pe.geometry.dispose(), Pe.geometry = r;
  });
  let Ln = false, Qt = 0;
  w.addEventListener("pointerdown", () => {
    Ln = true;
  }), w.addEventListener("pointerup", () => {
    Ln = false;
  }), w.addEventListener("pointermove", () => {
    Ln && Qt++;
  });
  const _t = document.createElement("div");
  _t.id = "hk-window-select", _t.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(_t);
  let Et = null, cn = false, Ct = null;
  const Rn = (n, o, a, t, r) => {
    r ? (_t.style.borderColor = "#34d399", _t.style.borderStyle = "dashed", _t.style.background = "rgba(52, 211, 153, 0.10)") : (_t.style.borderColor = "#22d3ee", _t.style.borderStyle = "solid", _t.style.background = "rgba(34, 211, 238, 0.10)"), _t.style.left = Math.min(n, a) + "px", _t.style.top = Math.min(o, t) + "px", _t.style.width = Math.abs(a - n) + "px", _t.style.height = Math.abs(t - o) + "px", _t.style.display = "block";
  }, oo = (n, o, a, t, r) => {
    var _a, _b, _c, _d;
    const s = Math.min(n, a), l = Math.max(n, a), p = Math.min(o, t), d = Math.max(o, t), g = a < n, M = w.getBoundingClientRect(), c = h();
    c.updateMatrixWorld();
    const f = (ye) => {
      const xe = new m(ye[0], ye[1], ye[2]);
      return xe.project(c), { x: M.left + (xe.x * 0.5 + 0.5) * M.width, y: M.top + (-xe.y * 0.5 + 0.5) * M.height };
    }, S = (ye) => ye.x >= s && ye.x <= l && ye.y >= p && ye.y <= d, I = (ye, xe) => !(ye.x < s && xe.x < s || ye.x > l && xe.x > l || ye.y < p && xe.y < p || ye.y > d && xe.y > d);
    r || ve.clear();
    let B = 0;
    const U = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let ye = 0; ye < U.length; ye++) {
      const xe = U[ye];
      xe && S(f(xe)) && (ve.add(`pt:${ye}`), B++);
    }
    const T = (ye, xe) => g ? S(ye) || S(xe) || I(ye, xe) : S(ye) && S(xe), Q = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], j = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let ye = 0; ye < Q.length; ye++) {
      const xe = Q[ye];
      if (j.includes(ye)) {
        let Xe;
        if (!g) Xe = xe.every((Ve) => {
          const He = U[Ve];
          return !!He && S(f(He));
        });
        else {
          Xe = false;
          for (let Ve = 0; Ve < xe.length - 1; Ve++) {
            const He = U[xe[Ve]], st = U[xe[Ve + 1]];
            if (!(!He || !st) && T(f(He), f(st))) {
              Xe = true;
              break;
            }
          }
        }
        Xe && (ve.add(`poly:${ye}`), B++);
      } else for (let Xe = 0; Xe < xe.length - 1; Xe++) {
        const Ve = U[xe[Xe]], He = U[xe[Xe + 1]];
        !Ve || !He || T(f(Ve), f(He)) && (ve.add(`seg:${ye}:${Xe}`), B++);
      }
    }
    const Le = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let ye = 0; ye < Le.length; ye++) {
      const xe = Le[ye];
      if (!xe || xe.length !== 6) continue;
      const ft = f([xe[0], xe[1], xe[2]]), Xe = f([xe[3], xe[4], xe[5]]);
      T(ft, Xe) && (ve.add(`aux:${ye}`), B++);
    }
    Bt(), se(`${g ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${B} item(s) ${r ? "agregados a" : "\u2192"} selecci\xF3n (total ${ve.size})`), _t.style.display = "none";
  }, Mn = () => {
    Ct && (Ct = null, _t.style.display = "none", se("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = Mn, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && Ct && Mn();
  });
  const so = () => {
    var _a, _b, _c, _d;
    if (ve.size === 0) return false;
    const n = [...ve], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], a = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? [], l = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Set();
    for (const I of n) {
      const [B, ...U] = I.split(":");
      if (B === "pt") l.add(+U[0]);
      else if (B === "poly") p.add(+U[0]);
      else if (B === "seg") {
        const T = +U[0], Q = +U[1];
        d.has(T) || d.set(T, /* @__PURE__ */ new Set()), d.get(T).add(Q);
      } else B === "aux" && g.add(+U[0]);
    }
    let M = 0, c = [], f = [];
    const S = /* @__PURE__ */ new Map();
    for (let I = 0; I < a.length; I++) {
      if (p.has(I)) {
        M++;
        continue;
      }
      S.set(I, c.length);
      const B = d.get(I);
      if (B && B.size > 0) {
        let U = [];
        for (let T = 0; T < a[I].length; T++) U.push(a[I][T]), T < a[I].length - 1 && B.has(T) && (U.length >= 2 && c.push(U), U = [], M++);
        (U.length >= 2 || U.length === 1) && c.push(U);
      } else c.push([...a[I]]);
    }
    if (l.size > 0) {
      const I = [], B = /* @__PURE__ */ new Map();
      for (let T = 0; T < o.length; T++) {
        if (l.has(T)) {
          M++;
          continue;
        }
        B.set(T, I.length), I.push([...o[T]]);
      }
      const U = [];
      for (const T of c) {
        let Q = [];
        for (const j of T) {
          const pe = B.get(j);
          pe === void 0 ? (Q.length >= 2 && U.push(Q), Q = []) : Q.push(pe);
        }
        Q.length >= 2 && U.push(Q);
      }
      c = U, e.points.val = I;
    }
    for (const I of t) {
      const B = S.get(I);
      B !== void 0 && B < c.length && f.push(B);
    }
    if (e.polylines && (e.polylines.val = c), e.areas && (e.areas.val = f), g.size > 0 && r) {
      const I = s.filter((B, U) => !g.has(U));
      "val" in r ? r.val = I : window.__hekatanDrawingAuxLines = I, M += g.size;
    }
    ve.clear(), Bt();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return se(`\u{1F5D1} ${M} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = so, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement, a = o && (o.id === "hk3-cmd-input" || o.id === "hk-dyn-input") && o.value === "";
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && !a || ve.size !== 0 && (n.preventDefault(), so());
  });
  const kt = document.createElement("div");
  kt.id = "hk-properties-pane";
  const ao = "hk-props-pane-pos";
  let on = null;
  try {
    const n = localStorage.getItem(ao);
    n && (on = JSON.parse(n));
  } catch {
  }
  kt.style.cssText = ["position:fixed", on ? `left:${on.left}px` : "left:50%", on ? `top:${on.top}px` : "top:8px", on ? "transform:none" : "transform:translateX(-50%)", "width:min(320px, calc(100vw - 32px))", "max-height:60vh", "overflow-y:auto", "z-index:201", "box-shadow:0 6px 24px rgba(0,0,0,0.45)", "border-radius:6px", "display:none"].join(";") + ";", document.body.appendChild(kt);
  const Ro = () => {
    const n = kt.querySelector(".tp-rotv_b");
    if (!n || n.__hkDragWired) return;
    n.__hkDragWired = true, n.style.cursor = "move", n.style.userSelect = "none";
    let o = false, a = 0, t = 0, r = 0, s = 0;
    n.addEventListener("mousedown", (l) => {
      o = true, a = l.clientX, t = l.clientY;
      const p = kt.getBoundingClientRect();
      r = p.left, s = p.top, kt.style.transform = "none", kt.style.left = `${r}px`, kt.style.top = `${s}px`, l.preventDefault();
    }), window.addEventListener("mousemove", (l) => {
      if (!o) return;
      const p = l.clientX - a, d = l.clientY - t, g = Math.max(0, Math.min(window.innerWidth - 80, r + p)), M = Math.max(0, Math.min(window.innerHeight - 40, s + d));
      kt.style.left = `${g}px`, kt.style.top = `${M}px`;
    }), window.addEventListener("mouseup", () => {
      if (o) {
        o = false;
        try {
          localStorage.setItem(ao, JSON.stringify({ left: parseFloat(kt.style.left), top: parseFloat(kt.style.top) }));
        } catch {
        }
      }
    });
  }, D = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 }, yt = { dx: 0, dy: 0, dz: 3, copias: 1 };
  let Qe = null;
  const dt = (n, o, a, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: a, value: t } }));
  }, Bo = () => {
    if (Qe && (Qe.dispose(), Qe = null), ve.size === 0) {
      kt.style.display = "none";
      return;
    }
    const n = [...ve], o = n.filter((c) => c.startsWith("pt:")), a = n.filter((c) => c.startsWith("seg:")), t = n.filter((c) => c.startsWith("poly:")), r = n.filter((c) => c.startsWith("aux:")), s = o.length > 0, l = a.length > 0, p = t.length > 0, d = !s && !l && !p, g = [];
    o.length && g.push(`\u{1F535} ${o.length} nodo(s)`), a.length && g.push(`\u{1F4CF} ${a.length} segmento(s)`), t.length && g.push(`\u25AD ${t.length} \xE1rea(s)`), r.length && g.push(`\u250A ${r.length} aux`);
    const M = `\u{1F3AF} ${ve.size} item(s) \u2014 ${g.join(", ")}`;
    Qe = new Ao({ container: kt, title: M });
    {
      const c = Qe.addFolder({ title: "\u270F\uFE0F Editar \u2014 Replicar / Mover", expanded: false });
      c.addBinding(yt, "dx", { label: "\u0394x (m)", step: 0.1 }), c.addBinding(yt, "dy", { label: "\u0394y (m)", step: 0.1 }), c.addBinding(yt, "dz", { label: "\u0394z (m)", step: 0.1 }), c.addBinding(yt, "copias", { label: "Copias", min: 1, max: 50, step: 1 }), c.addButton({ title: "\u29C9 Replicar selecci\xF3n" }).on("click", () => {
        var _a;
        const S = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, yt.dx, yt.dy, yt.dz, yt.copias);
        se(S ? `\u29C9 Replicado \xD7${S} (\u0394 ${yt.dx},${yt.dy},${yt.dz} m)` : "\u26A0 Nada que replicar \u2014 seleccion\xE1 nodos/frames/\xE1reas");
      }), c.addButton({ title: "\u2192 Mover selecci\xF3n (1 copia, sin duplicar geometr\xEDa base)" }).on("click", () => {
        var _a;
        const S = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, yt.dx, yt.dy, yt.dz, 1);
        se(S ? `\u2192 Copia desplazada \u0394 ${yt.dx},${yt.dy},${yt.dz} m` : "\u26A0 Nada seleccionado");
      });
      const f = c.addFolder({ title: "\u{1F9F2} Snap", expanded: false });
      f.addButton({ title: "Snap a grilla ON/OFF (F9)" }).on("click", () => {
        var _a;
        return (_a = window.__hekatanToggleSnap) == null ? void 0 : _a.call(window);
      }), f.addButton({ title: "OSNAP (endpoints/medios) ON/OFF" }).on("click", () => {
        window.__hekatanOsnapOn = !(window.__hekatanOsnapOn ?? true), se(`\u{1F9F2} OSNAP ${window.__hekatanOsnapOn ? "ON" : "OFF"}`);
      });
    }
    if (s) {
      const c = Qe.addFolder({ title: `\u{1F4CC} Restraints (DOFs) \u2014 ${o.length} nodo(s)` });
      c.addBinding(D, "Ux"), c.addBinding(D, "Uy"), c.addBinding(D, "Uz"), c.addBinding(D, "Rx"), c.addBinding(D, "Ry"), c.addBinding(D, "Rz");
      const f = Qe.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      f.addBinding(D, "Kx", { label: "Kx", min: 0, step: 100 }), f.addBinding(D, "Ky", { label: "Ky", min: 0, step: 100 }), f.addBinding(D, "Kz", { label: "Kz", min: 0, step: 100 }), f.addBinding(D, "Krx", { label: "Krx", min: 0, step: 1e3 }), f.addBinding(D, "Kry", { label: "Kry", min: 0, step: 1e3 }), f.addBinding(D, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const S = Qe.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      S.addBinding(D, "Fx", { step: 0.1 }), S.addBinding(D, "Fy", { step: 0.1 }), S.addBinding(D, "Fz", { step: 0.1 }), S.addBinding(D, "Mx", { step: 0.1 }), S.addBinding(D, "My", { step: 0.1 }), S.addBinding(D, "Mz", { step: 0.1 }), Qe.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(D, "mass", { label: "m", min: 0, step: 1 }), Qe.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(D, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), Qe.addButton({ title: `\u2713 Aplicar a ${o.length} nodo(s) seleccionado(s)` }).on("click", () => {
        let U = 0;
        const T = [D.Ux, D.Uy, D.Uz, D.Rx, D.Ry, D.Rz];
        T.some((pe) => pe) && (dt("nodes", o, "supports", T), U++);
        const Q = [D.Fx, D.Fy, D.Fz, D.Mx, D.My, D.Mz];
        Q.some((pe) => pe !== 0) && (dt("nodes", o, "loads", Q), U++);
        const j = [D.Kx, D.Ky, D.Kz, D.Krx, D.Kry, D.Krz];
        if (j.some((pe) => pe !== 0) && (dt("nodes", o, "springs", j), U++), D.mass !== 0 && (dt("nodes", o, "mass", D.mass), U++), D.diaphragm !== "Ninguno" && (dt("nodes", o, "diaphragm", D.diaphragm), U++), U === 0) {
          se("\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para apoyo, o un valor de carga/resorte/masa, y volv\xE9 a aplicar.");
          let pe = document.getElementById("hk-prop-toast");
          pe || (pe = document.createElement("div"), pe.id = "hk-prop-toast", pe.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);z-index:99999;padding:9px 20px;border-radius:8px;font:600 14px system-ui;color:#fff;pointer-events:none;transition:opacity .25s;box-shadow:0 4px 16px rgba(0,0,0,.4)", document.body.appendChild(pe)), pe.textContent = "\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para empotrado/articulado, despu\xE9s Aplicar", pe.style.background = "rgba(217,119,6,0.97)", pe.style.opacity = "1", clearTimeout(window.__hekatanPropToastT), window.__hekatanPropToastT = setTimeout(() => {
            pe && (pe.style.opacity = "0");
          }, 3200);
        } else se(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    }
    if (l) {
      const c = Qe.addFolder({ title: `\u{1F4CF} Secci\xF3n frame \u2014 ${a.length} seg(s)` });
      c.addBinding(D, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), c.addBinding(D, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const f = Qe.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      f.addBinding(D, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), f.addBinding(D, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), f.addBinding(D, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), f.addBinding(D, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), Qe.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(D, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), Qe.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(D, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const B = Qe.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      B.addBinding(D, "relMxI", { label: "Mx I" }), B.addBinding(D, "relMyI", { label: "My I" }), B.addBinding(D, "relMzI", { label: "Mz I" });
      const U = Qe.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      U.addBinding(D, "relMxJ", { label: "Mx J" }), U.addBinding(D, "relMyJ", { label: "My J" }), U.addBinding(D, "relMzJ", { label: "Mz J" }), Qe.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(D, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const Q = Qe.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      Q.addBinding(D, "LKx", { label: "LKx", min: 0, step: 100 }), Q.addBinding(D, "LKy", { label: "LKy", min: 0, step: 100 }), Q.addBinding(D, "LKz", { label: "LKz", min: 0, step: 100 });
      const j = Qe.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      j.addBinding(D, "qx", { step: 0.1 }), j.addBinding(D, "qy", { step: 0.1 }), j.addBinding(D, "qz", { step: 0.1 }), Qe.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(D, "massPerM", { label: "m/L", min: 0, step: 1 }), Qe.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        dt("segs", a, "section", D.section), dt("segs", a, "material", D.material_frame);
        const Le = { A: D.A_mod, Iz: D.Iz_mod, Iy: D.Iy_mod, J: D.J_mod };
        (Le.A !== 1 || Le.Iz !== 1 || Le.Iy !== 1 || Le.J !== 1) && dt("segs", a, "modifiers", Le), D.insertionPoint !== "10 \u2014 Centroid" && dt("segs", a, "insertionPoint", D.insertionPoint), D.beta !== 0 && dt("segs", a, "beta", D.beta);
        const ye = [D.relMxI, D.relMyI, D.relMzI], xe = [D.relMxJ, D.relMyJ, D.relMzJ];
        (ye.some((Ve) => Ve) || xe.some((Ve) => Ve)) && dt("segs", a, "releases", { i: ye, j: xe }), D.hinges !== "None" && dt("segs", a, "hinges", D.hinges);
        const ft = [D.LKx, D.LKy, D.LKz];
        ft.some((Ve) => Ve !== 0) && dt("segs", a, "lineSprings", ft);
        const Xe = [D.qx, D.qy, D.qz];
        Xe.some((Ve) => Ve !== 0) && dt("segs", a, "distLoad", Xe), D.massPerM !== 0 && dt("segs", a, "massPerM", D.massPerM), se(`\u2713 Propiedades aplicadas a ${a.length} segmento(s)`);
      });
    }
    if (p) {
      const c = Qe.addFolder({ title: `\u25AD Shell / \xC1rea \u2014 ${t.length}` });
      c.addBinding(D, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), c.addBinding(D, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), c.addBinding(D, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), Qe.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(D, "surfLoad", { label: "q", step: 0.1 }), Qe.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        dt("areas", t, "shellType", D.shellType), dt("areas", t, "thickness", D.thickness), dt("areas", t, "material", D.material_shell), D.surfLoad !== 0 && dt("areas", t, "surfLoad", D.surfLoad), se(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    }
    if (d) {
      const c = Qe.addFolder({ title: "\u2139 Selecci\xF3n" }), f = { msg: "Seleccion\xE1 nodos, frames o \xE1reas para editar" };
      c.addBinding(f, "msg", { readonly: true, label: "" });
    }
    Qe.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      ve.clear(), Bt();
    }), kt.style.display = "block", Ro();
  };
  window.__hekatanRefreshPropsPane = Bo;
  let sn = null, bn = false;
  w.addEventListener("pointerdown", (n) => {
    n.button === 2 && (sn = { x: n.clientX, y: n.clientY }, bn = false);
  }), w.addEventListener("pointermove", (n) => {
    if (sn && n.buttons & 2 && !bn) {
      const o = n.clientX - sn.x, a = n.clientY - sn.y;
      Math.hypot(o, a) > 8 && (bn = true);
    }
  }), w.addEventListener("pointerup", (n) => {
    var _a, _b, _c;
    if (n.button === 2) {
      const o = sn !== null && !bn;
      sn = null;
      const a = window.__hekatanRClickOnElement === true;
      if (window.__hekatanRClickOnElement = false, a) return;
      if (o) {
        if (Ct ? Mn() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), ve.size > 0 && (ve.clear(), Bt()), e.polylines) {
          const s = e.polylines.rawVal;
          (s[s.length - 1] ?? []).length > 0 && (e.polylines.val = [...s, []]);
        }
        const t = window.__hekatanCadState, r = (_b = (_a = t == null ? void 0 : t.get) == null ? void 0 : _a.call(t)) == null ? void 0 : _b.tool;
        r && r !== "select" && r !== "none" ? ((_c = t == null ? void 0 : t.setTool) == null ? void 0 : _c.call(t, "select"), se(`\u238B Cancelado \u2014 tool '${r}' cerrado, volv\xE9s a Seleccionar`)) : se("\u238B Cancelado (click derecho)");
      }
    }
  }), w.addEventListener("contextmenu", (n) => {
    n.preventDefault(), n.stopPropagation();
  }, { capture: true }), w.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && window.__hekatanRectSelectExplicit && n.pointerType !== "touch" && (Et = { x: n.clientX, y: n.clientY }, cn = false);
  }), w.addEventListener("pointermove", (n) => {
    if (Ct && n.buttons === 0) {
      const s = n.clientX < Ct.x;
      Rn(Ct.x, Ct.y, n.clientX, n.clientY, s);
      return;
    }
    if (!Et) return;
    const o = n.clientX - Et.x, a = n.clientY - Et.y, t = Math.hypot(o, a);
    if (!cn && t < 8) return;
    cn = true;
    const r = n.clientX < Et.x;
    Rn(Et.x, Et.y, n.clientX, n.clientY, r);
  }), w.addEventListener("pointerup", (n) => {
    if (!Et) return;
    if (!cn) {
      Et = null;
      return;
    }
    const o = n.ctrlKey || n.metaKey || n.shiftKey;
    oo(Et.x, Et.y, n.clientX, n.clientY, o), Et = null, cn = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const Nt = new je();
  Nt.visible = false, Nt.frustumCulled = false, y.add(Nt);
  const Xo = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, io = (n, o, a, t) => {
    var _a, _b, _c, _d;
    for (; Nt.children.length; ) {
      const p = Nt.children.pop();
      (_b = (_a = p.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = p.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const r = Xo[n] ?? 16777215, s = 0.05, l = new fe().setFromPoints([new m(o - s, a - s, t), new m(o + s, a - s, t), new m(o + s, a - s, t), new m(o + s, a + s, t), new m(o + s, a + s, t), new m(o - s, a + s, t), new m(o - s, a + s, t), new m(o - s, a - s, t)]);
    Nt.add(new Yt(l, new it({ color: r, linewidth: 2 }))), Nt.position.set(0, 0, 0), Nt.visible = true;
  }, Bn = () => {
    Nt.visible = false;
  }, Yo = (n, o, a, t) => {
    var _a;
    const r = window.__hekatanOsnap, s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let p = null;
    const d = (c, f, S, I) => {
      const B = Math.hypot(f - n, S - o, I - a);
      B > t || (!p || B < p.d) && (p = { type: c, x: f, y: S, z: I, d: B });
    };
    (r.node || r.end) && s.forEach((c) => {
      r.node && d("node", c[0], c[1], c[2]);
    });
    for (const c of l) if (!(c.length < 2)) for (let f = 0; f < c.length - 1; f++) {
      const S = s[c[f]], I = s[c[f + 1]];
      if (!(!S || !I) && (r.end && (d("end", S[0], S[1], S[2]), d("end", I[0], I[1], I[2])), r.mid && d("mid", (S[0] + I[0]) / 2, (S[1] + I[1]) / 2, (S[2] + I[2]) / 2), r.nea || r.per)) {
        const B = I[0] - S[0], U = I[1] - S[1], T = I[2] - S[2], Q = B * B + U * U + T * T;
        if (Q < 1e-12) continue;
        const j = Math.max(0, Math.min(1, ((n - S[0]) * B + (o - S[1]) * U + (a - S[2]) * T) / Q)), pe = S[0] + j * B, Le = S[1] + j * U, ye = S[2] + j * T;
        r.nea && d("nea", pe, Le, ye), r.per && d("per", pe, Le, ye);
      }
    }
    const g = window.__hekatanDrawingAuxLines, M = (g == null ? void 0 : g.rawVal) ?? (g == null ? void 0 : g.val) ?? g ?? [];
    for (const c of M) {
      if (c.length !== 6) continue;
      const f = [c[0], c[1], c[2]], S = [c[3], c[4], c[5]];
      if (r.end && (d("end", f[0], f[1], f[2]), d("end", S[0], S[1], S[2])), r.mid && d("mid", (f[0] + S[0]) / 2, (f[1] + S[1]) / 2, (f[2] + S[2]) / 2), r.nea || r.per) {
        const I = S[0] - f[0], B = S[1] - f[1], U = S[2] - f[2], T = I * I + B * B + U * U;
        if (T < 1e-12) continue;
        const Q = Math.max(0, Math.min(1, ((n - f[0]) * I + (o - f[1]) * B + (a - f[2]) * U) / T)), j = f[0] + Q * I, pe = f[1] + Q * B, Le = f[2] + Q * U;
        r.nea && d("nea", j, pe, Le), r.per && d("per", j, pe, Le);
      }
    }
    return p ? { type: p.type, x: p.x, y: p.y, z: p.z } : null;
  };
  window.__hekatanOsnapCompute = Yo, window.__hekatanOsnapShow = io, window.__hekatanOsnapHide = Bn;
  let Te = [], xt = 0;
  const dn = document.createElement("div");
  dn.id = "hk-cad-status", dn.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", dn.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(dn);
  const Do = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), Ee && n.push(`\u{1F512} LOCK ${Ee.toUpperCase()}`);
    const a = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(a) > 1e-3 && n.push(`Cota Z=${a}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, se = (n) => {
    const o = n + Do();
    dn.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    se(o);
  }, window.__hekatanCadResetPending = () => {
    Te = [], le = [], ee.visible = false, v(), se("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  const pn = [], Wt = () => {
    var _a, _b;
    pn.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), pn.length > 100 && pn.shift();
  }, lo = () => {
    var _a;
    const n = pn.pop();
    if (!n) {
      se("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), Te = [], oe.visible = false, O.visible = false, R(), se(`\u21B6 Undo \u2014 ${pn.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    v();
  };
  window.__hekatanPushUndo = Wt, window.__hekatanUndo = lo, document.addEventListener("keydown", (n) => {
    var _a;
    if ((n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey) {
      const o = n.target, a = o == null ? void 0 : o.tagName;
      if ((a === "INPUT" || a === "TEXTAREA") && o.type !== "checkbox" && o.type !== "range" && ((_a = o.value) == null ? void 0 : _a.length) > 0) return;
      n.preventDefault(), n.stopPropagation(), lo();
    }
  }, { capture: true });
  const ro = () => {
    if (Te = [], e.polylines) {
      const n = e.polylines.rawVal, o = n[n.length - 1];
      o && o.length > 0 && (e.polylines.val = [...n, []]);
    }
    Ee = null, De(), oe.visible = false, O.visible = false, R(), se("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), v();
  };
  window.__hekatanFinalizeDraw = ro;
  const co = () => {
    Te = [], le = [], ee.visible = false;
    let n = false;
    ve.size && (ve.clear(), Bt(), n = true), ro(), se(n ? "\u238B Selecci\xF3n cancelada" : "\u238B Acci\xF3n cancelada"), v();
  };
  window.__hekatanEscapeCancel = co, window.__hekatanReplicateSelection = (n, o, a, t) => {
    var _a, _b, _c, _d;
    t = Math.max(1, Math.round(t || 1));
    const r = [...ve], s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], p = new Set(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? []), d = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), M = [];
    if (r.forEach((B) => {
      if (B.startsWith("pt:")) d.add(+B.slice(3));
      else if (B.startsWith("poly:")) {
        const U = +B.slice(5);
        g.add(U), (l[U] || []).forEach((T) => d.add(T));
      } else if (B.startsWith("seg:")) {
        const U = B.split(":"), T = +U[1], Q = +U[2], j = l[T] || [], pe = j[Q], Le = j[Q + 1];
        pe != null && Le != null && (M.push([pe, Le]), d.add(pe), d.add(Le));
      }
    }), !d.size) return 0;
    Wt();
    const c = [...s];
    let f = l.slice();
    f.length && f[f.length - 1].length === 0 && (f = f.slice(0, -1));
    const S = [...((_c = e.areas) == null ? void 0 : _c.rawVal) ?? []], I = [...d];
    for (let B = 1; B <= t; B++) {
      const U = n * B, T = o * B, Q = a * B, j = /* @__PURE__ */ new Map();
      I.forEach((pe) => {
        j.set(pe, c.length), c.push([s[pe][0] + U, s[pe][1] + T, s[pe][2] + Q]);
      }), g.forEach((pe) => {
        const Le = l[pe].map((xe) => j.has(xe) ? j.get(xe) : xe), ye = f.length;
        f.push(Le), p.has(pe) && S.push(ye);
      }), M.forEach(([pe, Le]) => {
        f.push([j.get(pe), j.get(Le)]);
      });
    }
    f.push([]), e.points.val = c, e.polylines && (e.polylines.val = f), e.areas && (e.areas.val = S);
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return v(), t;
  }, w.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z;
    if (Qt > 5) {
      Qt = 0;
      return;
    }
    Qt = 0;
    const o = b(n);
    if (!o) return;
    z.setFromCamera(P, o);
    const a = W();
    if (!a.length) return;
    {
      const s = o.position.distanceTo(u.target) || 1, l = a[0].distance ?? o.position.distanceTo(a[0].point), p = a[0].point;
      if (!isFinite(p.x) || !isFinite(p.y) || !isFinite(p.z) || l > Math.max(s * 12, 300)) {
        se("\u26A0 Click rasante descartado \u2014 cay\xF3 demasiado lejos. Acerc\xE1 la vista o clicke\xE1 sobre la grilla.");
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
          let M = Ee;
          if (!M && g) {
            const c = Math.abs(t.x - d[0]), f = Math.abs(t.y - d[1]), S = Math.abs(t.z - d[2]);
            M = c >= f && c >= S ? "x" : f >= S ? "y" : "z";
          }
          M === "x" ? t = new m(t.x, d[1], d[2]) : M === "y" ? t = new m(d[0], t.y, d[2]) : M === "z" && (t = new m(d[0], d[1], t.z));
        }
      }
    }
    if (Lt) t = Lt.clone(), se(`\u{1F4D0} Eje \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.2, l = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, s);
      if (l) t = new m(l.x, l.y, l.z), se(`\u{1F3AF} Snap [${l.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      else {
        const p = window.__hekatanSnapEnabled !== false, d = window.__hekatanSnap2D ?? 0;
        p && d > 0 && (t = new m(Math.round(t.x / d) * d, Math.round(t.y / d) * d, Math.round(t.z / d) * d));
      }
    }
    const r = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (r === "select" || r === "none" || !r) {
      if (bt) {
        Ct && Mn();
        const { kind: s, a: l, b: p } = bt, d = p !== void 0 ? `${s}:${l}:${p}` : `${s}:${l}`;
        n.ctrlKey || n.metaKey || n.shiftKey || ve.clear(), ve.has(d) ? ve.delete(d) : ve.add(d), Bt(), se(`\u2713 Seleccionados ${ve.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const s = n.ctrlKey || n.metaKey || n.shiftKey, l = n.clientX, p = n.clientY;
        Ct ? (oo(Ct.x, Ct.y, l, p, s), Ct = null) : s || (Ct = { x: l, y: p }, se("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), Rn(l, p, l + 1, p + 1, false));
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
      const l = s.mode === "number", p = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, s.pendingStart, [t.x, t.y, t.z], l);
      se(`\u2713 Eje "${p}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (r === "delete") {
      if ($e >= 0) {
        const s = window.__hekatanDrawingAuxLines, l = (s == null ? void 0 : s.rawVal) ?? (s == null ? void 0 : s.val) ?? s ?? [], p = $e;
        if (p >= 0 && p < l.length) {
          Wt();
          const d = l.slice(0, p).concat(l.slice(p + 1));
          s && typeof s == "object" && "val" in s ? s.val = d : window.__hekatanDrawingAuxLines = d, se(`\u{1F5D1} L\xEDnea auxiliar #${p + 1} borrada`), $e = -1, Ie.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (Ue >= 0) {
        const s = Ue, l = pt;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(s)) ?? false ? (en(s), se(`\u{1F5D1} \xC1rea #${s + 1} (shell Q4) borrada`)) : l >= 0 ? (En(s, l), se(`\u{1F5D1} Segmento ${l + 1} de polil\xEDnea #${s + 1} borrado`)) : (en(s), se(`\u{1F5D1} Polil\xEDnea #${s + 1} borrada`));
      } else se("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (r === "circle") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        se("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [s, l] = Te, p = Math.hypot(l[0] - s[0], l[1] - s[1], l[2] - s[2]);
      Math.abs(l[0] - s[0]);
      const d = Math.abs(l[1] - s[1]), M = Math.abs(l[2] - s[2]) < 1e-3 ? "xy" : d < 1e-3 ? "xz" : "yz", c = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, s[0], s[1], s[2], p, c, M), se(`\u2713 C\xEDrculo dibujado en ${M.toUpperCase()} \u2014 r=${p.toFixed(2)}m, ${c} segmentos`), Te = [];
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
      const [s, l, p] = Te, d = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, s, l, p, d), se(`\u2713 Arco dibujado \u2014 ${d} segmentos`), Te = [];
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
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, s, l), se(`\u2713 Rect\xE1ngulo dibujado \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Te = [];
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
      le.push([t.x, t.y, t.z]), ee.geometry.setFromPoints(le.map((s) => new m(s[0], s[1], s[2]))), ee.visible = le.length >= 1, se(`\u25B0 \xC1rea libre \u2014 ${le.length} punto(s). Click m\xE1s v\xE9rtices, o Enter / click-derecho para cerrar y mallar (m\xEDn. 3).`), v();
      return;
    }
    if (r === "plane3") {
      if (Te.push([t.x, t.y, t.z]), Te.length < 3) {
        se(`\u25E3 Plano inclinado \u2014 punto ${Te.length}/3. Tip: cambi\xE1 la Cota Z (o enganch\xE1 un nodo) entre clicks para darle inclinaci\xF3n.`);
        return;
      }
      const [s, l, p] = Te, d = (_q = window.__hekatanSetInclinedPlaneFrom3) == null ? void 0 : _q.call(window, s, l, p);
      se(d ? "\u2713 Plano de trabajo INCLINADO activo. Dibuj\xE1 el \xE1rea (\u25AD/\u2B21) sobre \xE9l. (XY para resetear)" : "\u26A0 Los 3 puntos son colineales \u2014 no definen un plano. Reintent\xE1."), Te = [];
      return;
    }
    if (r === "col") {
      Wt();
      const s = t.z, l = xt && xt > 0 ? xt : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, s], [t.x, t.y, s + l]];
      const p = e.polylines.rawVal, d = e.points.rawVal.length;
      e.polylines.val = [...p.slice(0, -1), ...p[p.length - 1].length > 0 ? [p[p.length - 1]] : [], [d - 2, d - 1], []], xt = 0, se(`\u258C Columna creada \u2014 h=${l.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
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
      const [s, l] = Te, p = xt && xt > 0 ? xt : 3;
      Wt();
      const d = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [s[0], s[1], s[2]], [l[0], l[1], l[2]], [l[0], l[1], l[2] + p], [s[0], s[1], s[2] + p]];
      const g = e.polylines.rawVal;
      if (g.length - 1, e.polylines.val = [...g.slice(0, -1), ...g[g.length - 1].length > 0 ? [g[g.length - 1]] : [], [d, d + 1, d + 2, d + 3, d], []], e.areas) {
        const M = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, M];
      }
      se(`\u25A5 Pared Q4 creada \u2014 h=${p.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Te = [], xt = 0;
      try {
        (_s2 = window.__hekatanRebuild) == null ? void 0 : _s2.call(window);
      } catch {
      }
      return;
    }
    if (r === "extp") {
      Wt();
      const s = xt && xt > 0 ? xt : 3, l = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, l], [t.x, t.y, l + s]];
      const p = e.polylines.rawVal, d = e.points.rawVal.length;
      e.polylines.val = [...p.slice(0, -1), ...p[p.length - 1].length > 0 ? [p[p.length - 1]] : [], [d - 2, d - 1], []], xt = 0, se(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${s.toFixed(2)}m`);
      try {
        (_t2 = window.__hekatanRebuild) == null ? void 0 : _t2.call(window);
      } catch {
      }
      return;
    }
    if (r === "extl") {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.5, l = Kt(t.x, t.y, t.z, s);
      if (!l) {
        se("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const p = e.polylines.rawVal, d = e.points.rawVal, g = p[l.polyIdx], M = d[g[l.segIdx]], c = d[g[l.segIdx + 1]];
      if (!M || !c) {
        se("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const f = xt && xt > 0 ? xt : 3;
      Wt();
      const S = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [M[0], M[1], M[2]], [c[0], c[1], c[2]], [c[0], c[1], c[2] + f], [M[0], M[1], M[2] + f]];
      const I = e.polylines.rawVal;
      if (e.polylines.val = [...I.slice(0, -1), ...I[I.length - 1].length > 0 ? [I[I.length - 1]] : [], [S, S + 1, S + 2, S + 3, S], []], e.areas) {
        const B = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, B];
      }
      xt = 0, se(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${f.toFixed(2)}m`);
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
      const [s, l] = Te, p = window.__hekatanDrawingAuxLines;
      if (p) {
        const f = p.rawVal ?? p.val ?? [];
        p.val = [...f, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      const d = l[0] - s[0], g = l[1] - s[1], M = l[2] - s[2], c = Math.sqrt(d * d + g * g + M * M);
      se(`\u2713 L\xEDnea auxiliar creada \u2014 L=${c.toFixed(2)}m (cyan, no FEM)`), Te = [];
      return;
    }
    if (r === "extend") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        se("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [s, l] = Te, p = window.__hekatanDrawingAuxLines;
      if (p) {
        const d = p.rawVal ?? p.val ?? [];
        p.val = [...d, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      se("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Te = [];
      return;
    }
    if (r === "chaflan") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        se("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Te, p = window.__hekatanChaflanR ?? 1, d = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_v = window.__hekatanDrawSlabChaflan) == null ? void 0 : _v.call(window, s, l, p, d, 6);
      const g = Math.abs(l[0] - s[0]).toFixed(1), M = Math.abs(l[1] - s[1]).toFixed(1);
      se(`\u2713 Losa con chaflanes dibujada \u2014 ${g}\xD7${M}m, r=${p}m, ${d} seg/chafl\xE1n`), Te = [];
      try {
        (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
      } catch {
      }
      return;
    }
    if ($ = false, Wt(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const s = e.polylines.rawVal, l = s.length - 1, p = s[l] ?? [];
      if (r === "line" && p.length === 2) {
        e.polylines.val = [...s, []], se("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_x = window.__hekatanRebuild) == null ? void 0 : _x.call(window);
        } catch {
        }
        return;
      }
      if (r === "area" && p.length === 4) {
        e.polylines.val = [...s.slice(0, -1), [...p, p[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, l]), se("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
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
  }), w.addEventListener("contextmenu", (n) => {
    var _a, _b, _c;
    if (((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "polyarea" && le.length >= 3) {
      n.preventDefault();
      const a = tn();
      se(`\u2713 \xC1rea libre mallada \u2014 ${a} shells Q4 creados.`);
      return;
    }
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), w.addEventListener("pointermove", (n) => {
    var _a, _b;
    const o = b(n);
    if (!o) return;
    z.setFromCamera(P, o);
    const a = W();
    if (ge.geometry.deleteAttribute("position"), a.length) {
      let t = a[0].point.clone();
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z));
      {
        const l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], p = l[l.length - 1] ?? [], d = e.points.rawVal ?? [];
        if (p.length > 0) {
          const g = d[p[p.length - 1]];
          if (g) {
            const M = !!window.__hekatanOrthoMode;
            let c = Ee;
            if (!c && M) {
              const f = Math.abs(t.x - g[0]), S = Math.abs(t.y - g[1]), I = Math.abs(t.z - g[2]);
              c = f >= S && f >= I ? "x" : S >= I ? "y" : "z";
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
      ge.geometry.setAttribute("position", new Mt(t.toArray(), 3));
    }
    v();
  }), w.addEventListener("pointermove", (n) => {
    var _a;
    const o = b(n);
    if (!o) return;
    z.setFromCamera(P, o);
    let a = false;
    const t = z.intersectObject(he), r = W();
    if (t.length && r.length) {
      const s = new m(...e.points.rawVal[t[0].index]), l = new m(...r[0].point), p = s.sub(l), d = (_a = r[0].face) == null ? void 0 : _a.normal;
      d.transformDirection(te.matrixWorld), Math.abs(p.dot(d)) < 1e-4 && (a = true);
    }
    ge.visible = !a;
  });
  let Xn = false, Yn;
  w.addEventListener("pointermove", (n) => {
    var _a;
    if (!Qt) return;
    const o = b(n);
    if (!o) return;
    z.setFromCamera(P, o);
    let a = false;
    const t = z.intersectObject(he), r = W();
    if (t.length && r.length) {
      const l = new m(...e.points.rawVal[t[0].index]), p = new m(...r[0].point), d = l.sub(p), g = (_a = r[0].face) == null ? void 0 : _a.normal;
      g.transformDirection(te.matrixWorld), Math.abs(d.dot(g)) < 1e-4 && (a = true);
    }
    if (a && Qt < 5 && (Xn = true, u.enabled = false, Yn = t[0].index), !Xn || Qt % 2 !== 0) return;
    const s = [...e.points.rawVal];
    if (Yn !== void 0) {
      let l = r[0].point;
      (n.ctrlKey || n.metaKey) && (l = new m(Math.round(l.x), Math.round(l.y), Math.round(l.z))), s[Yn] = l.toArray();
    }
    e.points.val = s;
  }), w.addEventListener("pointerup", () => {
    u.enabled = true, Xn = false;
  }), w.addEventListener("contextmenu", (n) => {
    var _a;
    const o = b(n);
    if (!o) return;
    z.setFromCamera(P, o);
    let a = false;
    const t = z.intersectObject(he), r = W();
    if (t.length && r.length) {
      const p = new m(...e.points.rawVal[t[0].index]), d = new m(...r[0].point), g = p.sub(d), M = (_a = r[0].face) == null ? void 0 : _a.normal;
      M.transformDirection(te.matrixWorld), Math.abs(g.dot(M)) < 1e-4 && (a = true);
    }
    if (!a) return;
    const s = [...e.points.rawVal];
    if (s.splice(t[0].index, 1), e.points.val = s, !e.polylines) return;
    const l = e.polylines.rawVal.map((p) => p.filter((d) => d !== t[0].index)).map((p) => p.map((d) => d > t[0].index ? d - 1 : d)).filter((p) => p.length);
    l.push([]), e.polylines.val = l;
  });
}
function _s(e, i, y) {
  const _ = Math.round(14.999999999999998), x = { position: e.position.clone(), quaternion: e.quaternion.clone() }, w = setInterval(z, 1e3 / 30);
  let v = 0;
  function z() {
    v++;
    const P = v / _;
    e.position.lerpVectors(x.position, i.position, P), e.quaternion.slerpQuaternions(x.quaternion, i.quaternion, P), y && y(), v == _ && clearInterval(w);
  }
}
class Eo {
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
    this.map = Wn[i] || Wn.rainbow, this.n = y;
    const h = 1 / this.n, u = new It(), _ = new It();
    this.lut.length = 0, this.lut.push(new It(this.map[0][1]));
    for (let x = 1; x < y; x++) {
      const w = x * h;
      for (let v = 0; v < this.map.length - 1; v++) if (w > this.map[v][0] && w <= this.map[v + 1][0]) {
        const z = this.map[v][0], P = this.map[v + 1][0];
        u.setHex(this.map[v][1], _n), _.setHex(this.map[v + 1][1], _n);
        const b = new It().lerpColors(u, _, (w - z) / (P - z));
        this.lut.push(b);
      }
    }
    return this.lut.push(new It(this.map[this.map.length - 1][1])), this;
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
    return Wn[i] = y, this;
  }
  createCanvas() {
    const i = document.createElement("canvas");
    return i.width = 1, i.height = this.n, this.updateCanvas(i), i;
  }
  updateCanvas(i) {
    const y = i.getContext("2d", { alpha: false }), h = y.getImageData(0, 0, 1, this.n), u = h.data;
    let _ = 0;
    const x = 1 / this.n, w = new It(), v = new It(), z = new It();
    for (let P = 1; P >= 0; P -= x) for (let b = this.map.length - 1; b >= 0; b--) if (P < this.map[b][0] && P >= this.map[b - 1][0]) {
      const te = this.map[b - 1][0], ae = this.map[b][0];
      w.setHex(this.map[b - 1][1], _n), v.setHex(this.map[b][1], _n), z.lerpColors(w, v, (P - te) / (ae - te)), u[_ * 4] = Math.round(z.r * 255), u[_ * 4 + 1] = Math.round(z.g * 255), u[_ * 4 + 2] = Math.round(z.b * 255), u[_ * 4 + 3] = 255, _ += 1;
    }
    return y.putImageData(h, 0, 0), i;
  }
}
const Wn = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, wn = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function Ss(e) {
  e = Math.max(0, Math.min(1, e));
  for (let y = 0; y < wn.length - 1; y++) {
    const [h, u, _, x] = wn[y], [w, v, z, P] = wn[y + 1];
    if (e <= w) {
      const b = (e - h) / (w - h);
      return [u + (v - u) * b, _ + (z - _) * b, x + (P - x) * b];
    }
  }
  const i = wn[wn.length - 1];
  return [i[1], i[2], i[3]];
}
function ks() {
  const i = new Uint8Array(1024);
  for (let h = 0; h < 256; h++) {
    const u = h / 255, [_, x, w] = Ss(u);
    i[h * 4 + 0] = _, i[h * 4 + 1] = x, i[h * 4 + 2] = w, i[h * 4 + 3] = 255;
  }
  const y = new Qo(i, 256, 1, Oo);
  return y.minFilter = xo, y.magFilter = xo, y.wrapS = go, y.wrapT = go, y.needsUpdate = true, y;
}
function zs(e, i, y) {
  new Eo();
  const h = ks(), u = new qo({ uniforms: { cmap: { value: h }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: zt, transparent: false, clipping: true, depthWrite: true, depthTest: true }), _ = new Ge(new fe(), u);
  return _.renderOrder = -1, _.frustumCulled = false, _.userData.isShellArea = true, _.name = "__hekatan_shell_colormap", L.derive(() => {
    _.geometry.setAttribute("position", new Mt(e.val.flat(), 3));
    const x = [];
    for (const k of i.val) k.length === 3 ? x.push(k[0], k[1], k[2]) : k.length === 4 && (x.push(k[0], k[1], k[2]), x.push(k[0], k[2], k[3]));
    _.geometry.setIndex(new Jo(x, 1));
    const w = y.val.filter((k) => Number.isFinite(k));
    let v, z;
    const P = jn.val;
    if (P ? (z = P[0], v = P[1]) : (v = w.length ? Math.max(...w) : 1, z = w.length ? Math.min(...w) : 0, z >= 0 && v > 0 && (z = 0)), v === z) {
      const k = Math.max(Math.abs(v) * 1e-6, 1e-9);
      v += k, z -= k;
    }
    const b = P && P[0] > P[1], te = Math.min(z, v), ae = Math.max(z, v), ie = ae - te, ue = new Float32Array(y.val.length);
    for (let k = 0; k < y.val.length; k++) {
      const W = y.val[k];
      if (!Number.isFinite(W)) {
        ue[k] = -1;
        continue;
      }
      const ge = ((b ? ae + te - W : W) - te) / ie;
      ue[k] = Math.max(0, Math.min(1, ge));
    }
    _.geometry.setAttribute("scalar", new at(ue, 1));
  }), _;
}
function Ps(e, i, y, h) {
  const u = zs(y, e.elements, h);
  return L.derive(() => {
    u.visible = i.shellResults.val != "none";
  }), u;
}
const Cs = 6, Gn = 10, Fs = 0.012;
function Vs(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function As(e, i, y, h) {
  if (!y && !h) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && y) {
    const _ = y[e];
    if (_ && _.has(i)) return _.get(i);
  }
  return null;
}
function Ts(e, i, y, h) {
  const u = new je(), _ = new Eo();
  _.setColorMap("rainbow");
  const x = new It(), w = L.state([]);
  return L.derive(() => {
    var _a, _b, _c;
    i.deformedShape.val;
    const v = y.val, z = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], P = Vs(i.frameResults.val);
    if (u.children.forEach((C) => {
      C.geometry && C.geometry.dispose(), C.material && C.material.dispose();
    }), u.clear(), !P || z.length === 0 || v.length === 0) {
      w.val = [];
      return;
    }
    const b = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, te = (_c = e.deformOutputs) == null ? void 0 : _c.val, ae = [], ie = [];
    for (let C = 0; C < z.length; C++) {
      if (z[C].length !== 2) continue;
      const ne = As(P, C, b, te);
      ne && (ae.push(ne[0], ne[1]), ie.push({ idx: C, vals: ne }));
    }
    if (ae.length === 0) {
      w.val = [];
      return;
    }
    const ue = Math.min(...ae), k = Math.max(...ae);
    _.setMin(ue), _.setMax(k), w.val = ae;
    const W = [1 / 0, 1 / 0, 1 / 0], he = [-1 / 0, -1 / 0, -1 / 0];
    for (const C of v) for (let N = 0; N < 3; N++) W[N] = Math.min(W[N], C[N]), he[N] = Math.max(he[N], C[N]);
    const Pe = Math.max(he[0] - W[0], he[1] - W[1], he[2] - W[2], 1) * Fs, K = [], Z = [], Y = [];
    let $ = 0;
    for (const { idx: C, vals: N } of ie) {
      const ne = z[C], G = v[ne[0]], H = v[ne[1]];
      if (!G || !H) continue;
      const F = new m(H[0] - G[0], H[1] - G[1], H[2] - G[2]), oe = F.length();
      if (oe < 1e-10) continue;
      F.normalize();
      const ee = Math.abs(F.y) < 0.99 ? new m(0, 1, 0) : new m(1, 0, 0), le = new m().crossVectors(F, ee).normalize(), re = new m().crossVectors(F, le).normalize(), Fe = Gn + 1, ce = Cs;
      for (let _e = 0; _e < Fe; _e++) {
        const Ze = _e / Gn, O = G[0] + F.x * oe * Ze, Me = G[1] + F.y * oe * Ze, V = G[2] + F.z * oe * Ze, X = N[0] + (N[1] - N[0]) * Ze, J = _.getColor(X) ?? new It(0, 0, 0);
        x.copy(J).convertSRGBToLinear();
        for (let q = 0; q < ce; q++) {
          const we = q / ce * Math.PI * 2, de = Math.cos(we), ze = Math.sin(we);
          K.push(O + (le.x * de + re.x * ze) * Pe, Me + (le.y * de + re.y * ze) * Pe, V + (le.z * de + re.z * ze) * Pe), Z.push(x.r, x.g, x.b);
        }
      }
      for (let _e = 0; _e < Gn; _e++) for (let Ze = 0; Ze < ce; Ze++) {
        const O = (Ze + 1) % ce, Me = $ + _e * ce + Ze, V = $ + _e * ce + O, X = $ + (_e + 1) * ce + Ze, J = $ + (_e + 1) * ce + O;
        Y.push(Me, V, J), Y.push(Me, J, X);
      }
      $ += Fe * ce;
    }
    if (K.length === 0) return;
    const A = new fe();
    A.setAttribute("position", new Mt(K, 3)), A.setAttribute("color", new Mt(Z, 3)), A.setIndex(Y), A.computeVertexNormals();
    const E = new et({ vertexColors: true, side: zt }), R = new Ge(A, E);
    R.frustumCulled = false, u.add(R);
  }), u.__colorMapValues = w, u;
}
function Es() {
  const e = window;
  return { forceUnit: e.__hekatanForceUnit ?? localStorage.getItem("hk_forceUnit") ?? "tonf", dispUnit: e.__hekatanDispUnit ?? localStorage.getItem("hk_dispUnit") ?? "mm", stressUnit: e.__hekatanStressUnit ?? localStorage.getItem("hk_stressUnit") ?? "tonf/m\xB2" };
}
const $s = { kN: 1, tonf: 1 / 9.80665, kip: 1 / 4.4482216 }, Is = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Ls = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76, "kip/ft\xB2": 1 / 47.88026 };
function rt(e, i = 4) {
  return e == null || !isFinite(e) ? "\u2014" : e === 0 ? "0" : Math.abs(e) < 1e-3 || Math.abs(e) > 1e5 ? e.toExponential(i) : e.toFixed(i);
}
const Rs = 16755200, ko = 56831, Bs = 56831, Xs = 56831, zn = 65382;
function Ys(e) {
  const i = new je();
  i.name = "__hekatan_hover", i.renderOrder = 99;
  const y = new rn(1, 16, 16), h = new et({ color: Rs, transparent: true, opacity: 0.85, depthTest: false }), u = new Ge(y, h);
  u.visible = false, u.renderOrder = 100, i.add(u);
  const _ = new fe(), x = new it({ color: ko, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), w = new Yt(_, x);
  w.visible = false, w.renderOrder = 100, i.add(w);
  const v = new et({ color: ko, transparent: true, opacity: 0.7, depthTest: false }), z = new Ge(new vo(1, 1, 1, 12), v);
  z.visible = false, z.renderOrder = 100, i.add(z);
  const P = new fe(), b = new et({ color: Bs, transparent: true, opacity: 0.45, side: zt, depthTest: false }), te = new Ge(P, b);
  te.visible = false, te.renderOrder = 100, i.add(te);
  const ae = new fe(), ie = new it({ color: Xs, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), ue = new Yt(ae, ie);
  ue.visible = false, ue.renderOrder = 100, i.add(ue);
  const k = new et({ color: zn, transparent: true, opacity: 0.95, depthTest: false }), W = new Ge(y, k);
  W.visible = false, W.renderOrder = 101, i.add(W);
  const he = new et({ color: zn, transparent: true, opacity: 0.85, depthTest: false }), ge = new Ge(new vo(1, 1, 1, 12), he);
  ge.visible = false, ge.renderOrder = 101, i.add(ge);
  const Pe = new fe(), K = new et({ color: zn, transparent: true, opacity: 0.55, side: zt, depthTest: false }), Z = new Ge(Pe, K);
  Z.visible = false, Z.renderOrder = 101, i.add(Z);
  const Y = new fe(), $ = new it({ color: zn, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), A = new Yt(Y, $);
  A.visible = false, A.renderOrder = 101, i.add(A);
  let E = null;
  const R = document.createElement("div");
  Object.assign(R.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), R.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(R);
  }, 0);
  function C(O) {
    const Me = e.derivedNodes.rawVal;
    return !Me || O < 0 || O >= Me.length ? null : new m(Me[O][0], Me[O][1], Me[O][2]);
  }
  function N(O, Me) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2;
    const V = e.getActiveCamera();
    if (!V || !e.mesh) return null;
    const X = e.rendererElm.getBoundingClientRect(), J = O - X.left, q = Me - X.top, we = e.derivedNodes.rawVal, de = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!we || !de) return null;
    const ze = /* @__PURE__ */ new Map(), me = (De) => {
      if (ze.has(De)) return ze.get(De);
      const Ae = C(De);
      if (!Ae) return ze.set(De, null), null;
      const be = Ae.clone().project(V), Ne = (be.x * 0.5 + 0.5) * X.width, Se = (-be.y * 0.5 + 0.5) * X.height, Ie = { x: Ne, y: Se, z: be.z };
      return ze.set(De, Ie), Ie;
    }, tt = /* @__PURE__ */ new Set();
    for (const De of de) if (De) for (const Ae of De) tt.add(Ae);
    const Ye = 8;
    let Re = -1, We = Ye;
    for (let De = 0; De < we.length; De++) {
      if (!tt.has(De)) continue;
      const Ae = me(De);
      if (!Ae || Ae.z < -1 || Ae.z > 1) continue;
      const be = Ae.x - J, Ne = Ae.y - q, Se = Math.sqrt(be * be + Ne * Ne);
      Se < We && (We = Se, Re = De);
    }
    const Ce = Es(), Ke = Is[Ce.dispUnit] ?? 1e3, ot = $s[Ce.forceUnit] ?? 1;
    if (Re >= 0) {
      const De = we[Re];
      let Ae = `Nodo ${Re}
(${De[0].toFixed(3)}, ${De[1].toFixed(3)}, ${De[2].toFixed(3)})`;
      const be = (_c = (_b = e.mesh) == null ? void 0 : _b.deformOutputs) == null ? void 0 : _c.rawVal;
      if (be == null ? void 0 : be.deformations) {
        const Ne = be.deformations.get(Re);
        if (Ne && (Ae += `
\u2500\u2500\u2500\u2500 \u0394 desplaz. \u2500\u2500\u2500\u2500`, Ae += `
Ux = ${rt(Ne[0] * Ke, 3)} ${Ce.dispUnit}`, Ae += `
Uy = ${rt(Ne[1] * Ke, 3)} ${Ce.dispUnit}`, Ae += `
Uz = ${rt(Ne[2] * Ke, 3)} ${Ce.dispUnit}`, (Math.abs(Ne[3]) > 1e-9 || Math.abs(Ne[4]) > 1e-9 || Math.abs(Ne[5]) > 1e-9) && (Ae += `
Rx = ${rt(Ne[3] * 1e3, 3)} mrad`, Ae += `
Ry = ${rt(Ne[4] * 1e3, 3)} mrad`, Ae += `
Rz = ${rt(Ne[5] * 1e3, 3)} mrad`)), be.reactions) {
          const Se = be.reactions.get(Re);
          Se && (Math.abs(Se[0]) > 1e-9 || Math.abs(Se[1]) > 1e-9 || Math.abs(Se[2]) > 1e-9 || Math.abs(Se[3]) > 1e-6 || Math.abs(Se[4]) > 1e-6 || Math.abs(Se[5]) > 1e-6) && (Ae += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, Ae += `
Fx = ${rt(Se[0] * ot)} ${Ce.forceUnit}`, Ae += `
Fy = ${rt(Se[1] * ot)} ${Ce.forceUnit}`, Ae += `
Fz = ${rt(Se[2] * ot)} ${Ce.forceUnit}`, (Math.abs(Se[3]) > 1e-6 || Math.abs(Se[4]) > 1e-6 || Math.abs(Se[5]) > 1e-6) && (Ae += `
Mx = ${rt(Se[3] * ot)} ${Ce.forceUnit}\xB7m`, Ae += `
My = ${rt(Se[4] * ot)} ${Ce.forceUnit}\xB7m`, Ae += `
Mz = ${rt(Se[5] * ot)} ${Ce.forceUnit}\xB7m`));
        }
      }
      return { type: "node", idx: Re, info: Ae };
    }
    const Ft = 5;
    let Ee = -1, Lt = Ft, qe = "frame";
    for (let De = 0; De < de.length; De++) {
      const Ae = de[De];
      if (!(!Ae || Ae.length < 2)) {
        if (Ae.length === 2) {
          const be = me(Ae[0]), Ne = me(Ae[1]);
          if (!be || !Ne || be.z < -1 || be.z > 1 || Ne.z < -1 || Ne.z > 1) continue;
          const Se = Ds(J, q, be.x, be.y, Ne.x, Ne.y);
          Se < Lt && (Lt = Se, Ee = De, qe = "frame");
        } else if (Ae.length === 3 || Ae.length === 4) {
          const be = [];
          let Ne = true;
          for (const Se of Ae) {
            const Ie = me(Se);
            if (!Ie || Ie.z < -1 || Ie.z > 1) {
              Ne = false;
              break;
            }
            be.push(Ie);
          }
          if (!Ne) continue;
          if (Ns(J, q, be)) {
            const Ie = be.reduce((Ue, pt) => Ue + pt.z, 0) / be.length * 1e-3;
            Ie < Lt && (Lt = Ie, Ee = De, qe = "shell");
          }
        } else if (Ae.length === 8) {
          const be = [];
          let Ne = true;
          for (const $e of Ae) {
            const ve = me($e);
            if (!ve || ve.z < -1 || ve.z > 1) {
              Ne = false;
              break;
            }
            be.push(ve);
          }
          if (!Ne) continue;
          const Se = Math.min(...be.map(($e) => $e.x)), Ie = Math.max(...be.map(($e) => $e.x)), Ue = Math.min(...be.map(($e) => $e.y)), pt = Math.max(...be.map(($e) => $e.y));
          if (J >= Se && J <= Ie && q >= Ue && q <= pt) {
            const ve = be.reduce((nt, Je) => nt + Je.z, 0) / be.length * 1e-3;
            ve < Lt && (Lt = ve, Ee = De, qe = "solid");
          }
        }
      }
    }
    if (Ee >= 0) {
      const De = de[Ee];
      let be = `${qe === "frame" ? "Frame" : qe === "shell" ? "Shell" : "Solid"} ${Ee}`;
      const Ne = (_e2 = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e2.rawVal, Se = (_g = (_f = Ne == null ? void 0 : Ne.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, Ee);
      if (Se) {
        Se.name && (be += `
  \u{1F4CB} ${Se.name}`), Se.shape && (be += `
  Shape: ${Se.shape}`);
        const Ie = /concrete|hormig|rect.*sólida/i.test(Se.shape || ""), Ue = Ie ? 100 : 1e3, pt = Ie ? "cm" : "mm", $e = (nt) => {
          const Je = nt * Ue;
          return Math.abs(Je - Math.round(Je)) < 0.05 ? `${Math.round(Je)}` : `${Je.toFixed(1)}`;
        }, ve = [];
        if (Se.D != null && ve.push(`D=${$e(Se.D)}`), Se.B != null && ve.push(`B=${$e(Se.B)}`), Se.TF != null && ve.push(`TF=${$e(Se.TF)}`), Se.TW != null && ve.push(`TW=${$e(Se.TW)}`), Se.t != null && ve.push(`t=${$e(Se.t)}`), ve.length && (be += `
  Dim: ${ve.join(" ")} ${pt}`), Se.material) {
          let nt = Se.material;
          Se.fillMaterial && (nt += ` + FILL "${Se.fillMaterial}"`), be += `
  Mat: ${nt}`;
        }
      } else {
        const Ie = (_i = (_h = Ne == null ? void 0 : Ne.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, Ee), Ue = (_k = (_j = Ne == null ? void 0 : Ne.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, Ee);
        Ie ? (be += `
  ${Ie}`, Ue && !Ie.includes(Ue) && (be += `  (${Ue})`)) : Ue && (be += `
  Material: ${Ue}`);
      }
      if (be += `
nodos: [${De.join(", ")}]`, qe === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const Ie = e.mesh.analyzeOutputs.rawVal, Ue = Ls[Ce.stressUnit] ?? 1, pt = [["bendingXX", "Mxx", ot, `${Ce.forceUnit}\xB7m/m`], ["bendingYY", "Myy", ot, `${Ce.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", ot, `${Ce.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", ot, `${Ce.forceUnit}/m`], ["membraneYY", "Nyy", ot, `${Ce.forceUnit}/m`], ["membraneXY", "Nxy", ot, `${Ce.forceUnit}/m`], ["shearX", "Qx", ot, `${Ce.forceUnit}/m`], ["shearY", "Qy", ot, `${Ce.forceUnit}/m`], ["vonMises", "\u03C3VM", Ue, Ce.stressUnit], ["pressure", "p", Ue, Ce.stressUnit]], $e = [];
        for (const [ve, nt, Je, Rt] of pt) {
          const Xt = Ie == null ? void 0 : Ie[ve];
          if (Xt && Xt instanceof Map) {
            const lt = Xt.get(Ee);
            if (lt != null) {
              if (typeof lt == "number") $e.push(`${nt} = ${rt(lt * Je, 3)} ${Rt}`);
              else if (Array.isArray(lt)) {
                let ct = lt[0];
                for (const bt of lt) Math.abs(bt) > Math.abs(ct) && (ct = bt);
                $e.push(`${nt} = ${rt(ct * Je, 3)} ${Rt}`);
              }
            }
          }
        }
        $e.length > 0 && (be += `
\u2500\u2500\u2500\u2500 results \u2500\u2500\u2500\u2500
` + $e.slice(0, 8).join(`
`));
      }
      if (qe === "frame" && ((_m = e.mesh) == null ? void 0 : _m.deformOutputs) && e.mesh.elementInputs) {
        const Ie = e.mesh.deformOutputs.rawVal, Ue = e.mesh.elementInputs.rawVal, pt = Ie == null ? void 0 : Ie.deformations;
        if (pt && De.length === 2) {
          const $e = pt.get(De[0]), ve = pt.get(De[1]), nt = we[De[0]], Je = we[De[1]];
          if ($e && ve && nt && Je) {
            const Rt = Je[0] - nt[0], Xt = Je[1] - nt[1], lt = Je[2] - nt[2], ct = Math.sqrt(Rt * Rt + Xt * Xt + lt * lt);
            if (ct > 1e-9) {
              const bt = Rt / ct, xn = Xt / ct, Bt = lt / ct, qt = (ve[0] - $e[0]) * bt + (ve[1] - $e[1]) * xn + (ve[2] - $e[2]) * Bt, Kt = ((_n2 = Ue.elasticities) == null ? void 0 : _n2.get(Ee)) ?? 0, gn = ((_o2 = Ue.areas) == null ? void 0 : _o2.get(Ee)) ?? 0, An = ((_p = Ue.momentsOfInertiaY) == null ? void 0 : _p.get(Ee)) ?? 0, Tn = ((_q = Ue.momentsOfInertiaZ) == null ? void 0 : _q.get(Ee)) ?? 0, en = ((_r = Ue.torsionalConstants) == null ? void 0 : _r.get(Ee)) ?? 0, En = ((_s2 = Ue.shearModuli) == null ? void 0 : _s2.get(Ee)) ?? Kt / 2.6, tn = Kt * gn * (qt / ct), Pt = (ve[3] - $e[3]) * bt + (ve[4] - $e[4]) * xn + (ve[5] - $e[5]) * Bt, Tt = En * en * (Pt / ct), Ht = ve[4] - $e[4], Jt = ve[5] - $e[5], vn = Kt * An * Ht / ct, Dt = Kt * Tn * Jt / ct;
              be += `
\u2500\u2500\u2500\u2500 frame \u2500\u2500\u2500\u2500`, be += `
L = ${rt(ct, 3)} m`, be += `
\u0394L = ${rt(qt * Ke, 3)} ${Ce.dispUnit}`, be += `
\u03B5 = ${rt(qt / ct, 6)}`, Math.abs(tn) > 1e-6 && (be += `
N \u2248 ${rt(tn * ot)} ${Ce.forceUnit}`), Math.abs(Tt) > 1e-6 && (be += `
T \u2248 ${rt(Tt * ot)} ${Ce.forceUnit}\xB7m`), Math.abs(vn) > 1e-6 && (be += `
My \u2248 ${rt(vn * ot)} ${Ce.forceUnit}\xB7m`), Math.abs(Dt) > 1e-6 && (be += `
Mz \u2248 ${rt(Dt * ot)} ${Ce.forceUnit}\xB7m`);
            }
          }
        }
      }
      return { type: qe, idx: Ee, info: be };
    }
    return null;
  }
  function ne(O, Me, V) {
    var _a, _b, _c;
    if (u.visible = false, w.visible = false, z.visible = false, te.visible = false, ue.visible = false, !O || !e.mesh) {
      R.style.display = "none", e.render();
      return;
    }
    const X = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (O.type === "node") {
      const de = C(O.idx);
      if (de) {
        const ze = e.derivedNodes.rawVal ?? [];
        let me = 1;
        if (ze.length >= 2) {
          let Re = [1 / 0, 1 / 0, 1 / 0], We = [-1 / 0, -1 / 0, -1 / 0];
          for (const Ce of ze) for (let Ke = 0; Ke < 3; Ke++) Ce[Ke] < Re[Ke] && (Re[Ke] = Ce[Ke]), Ce[Ke] > We[Ke] && (We[Ke] = Ce[Ke]);
          me = Math.max(We[0] - Re[0], We[1] - Re[1], We[2] - Re[2], 0.1);
        }
        const tt = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, Ye = 0.021 * me * tt;
        u.position.copy(de), u.scale.setScalar(Ye), u.visible = true;
      }
    } else if (O.type === "frame" && X) {
      const de = X[O.idx], ze = C(de[0]), me = C(de[1]);
      if (ze && me) {
        const tt = ze.clone().add(me).multiplyScalar(0.5), Ye = me.clone().sub(ze), Re = Ye.length(), Ke = e.getActiveCamera().position.distanceTo(tt) * 35e-4;
        z.position.copy(tt);
        const ot = new m(0, 1, 0), Ft = ot.clone().cross(Ye).normalize(), Ee = ot.angleTo(Ye);
        z.quaternion.setFromAxisAngle(Ft, Ee), z.scale.set(Ke, Re, Ke), z.visible = true;
      }
    } else if (O.type === "shell" && X) {
      const de = X[O.idx], ze = [], me = [];
      for (const tt of de) {
        const Ye = C(tt);
        if (!Ye) return;
        ze.push(Ye.x, Ye.y, Ye.z);
      }
      de.length === 4 ? me.push(0, 1, 2, 0, 2, 3) : de.length === 3 && me.push(0, 1, 2), P.setAttribute("position", new Mt(ze, 3)), P.setIndex(me), P.computeVertexNormals(), te.visible = true;
    } else if (O.type === "solid" && X) {
      const de = X[O.idx], ze = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], me = [];
      for (const [tt, Ye] of ze) {
        const Re = C(de[tt]), We = C(de[Ye]);
        Re && We && me.push(Re.x, Re.y, Re.z, We.x, We.y, We.z);
      }
      ae.setAttribute("position", new Mt(me, 3)), ue.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      R.style.display = "none", e.render();
      return;
    }
    R.textContent = O.info, R.style.whiteSpace = "pre-line", R.style.display = "block";
    const q = e.rendererElm.getBoundingClientRect(), we = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? q;
    R.style.left = `${Me - we.left}px`, R.style.top = `${V - we.top}px`, e.render();
  }
  let G = "", H = 0, F = 0;
  const oe = window.__hekatanHoverDebug ?? false, ee = (O) => {
    H && cancelAnimationFrame(H), H = requestAnimationFrame(() => {
      var _a, _b, _c;
      const Me = N(O.clientX, O.clientY);
      if (oe && F < 5) {
        const X = e.derivedNodes.rawVal, J = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${O.clientX}, ${O.clientY}) nodes=${(X == null ? void 0 : X.length) ?? 0} elems=${(J == null ? void 0 : J.length) ?? 0} hover=`, Me), F++;
      }
      const V = Me ? `${Me.type}:${Me.idx}` : "";
      if (V !== G) G = V, ne(Me, O.clientX, O.clientY);
      else if (Me) {
        const X = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        R.style.left = `${O.clientX - X.left}px`, R.style.top = `${O.clientY - X.top}px`;
      }
    });
  };
  let le = null;
  const re = () => {
    G = "", u.visible = false, w.visible = false, z.visible = false, te.visible = false, ue.visible = false, R.style.display = "none", e.render();
  }, Fe = (O) => {
    const Me = e.rendererElm.getBoundingClientRect(), V = O.clientX - Me.left, X = O.clientY - Me.top;
    (V < -2 || X < -2 || V > Me.width + 2 || X > Me.height + 2) && (le && clearTimeout(le), le = window.setTimeout(re, 200));
  }, ce = () => {
    le && (clearTimeout(le), le = null);
  };
  e.rendererElm.addEventListener("pointermove", ee), e.rendererElm.addEventListener("pointerleave", Fe), e.rendererElm.addEventListener("pointerenter", ce);
  let _e = null;
  e.rendererElm.addEventListener("pointerdown", (O) => {
    O.button === 0 && (_e = { x: O.clientX, y: O.clientY });
  }), e.rendererElm.addEventListener("pointerup", (O) => {
    if (O.button !== 0 || !_e) return;
    const Me = O.clientX - _e.x, V = O.clientY - _e.y;
    if (_e = null, Me * Me + V * V > 9) return;
    const X = N(O.clientX, O.clientY);
    X ? (E = { type: X.type, idx: X.idx }, Ze()) : (E = null, Ze());
  });
  function Ze() {
    var _a, _b;
    if (W.visible = false, ge.visible = false, Z.visible = false, A.visible = false, !E || !e.mesh) {
      e.render();
      return;
    }
    const O = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (E.type === "node") {
      const Me = C(E.idx);
      if (Me) {
        const V = e.derivedNodes.rawVal ?? [];
        let X = 1;
        if (V.length >= 2) {
          let we = [1 / 0, 1 / 0, 1 / 0], de = [-1 / 0, -1 / 0, -1 / 0];
          for (const ze of V) for (let me = 0; me < 3; me++) ze[me] < we[me] && (we[me] = ze[me]), ze[me] > de[me] && (de[me] = ze[me]);
          X = Math.max(de[0] - we[0], de[1] - we[1], de[2] - we[2], 0.1);
        }
        const J = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, q = 0.025 * X * J;
        W.position.copy(Me), W.scale.setScalar(q), W.visible = true;
      }
    } else if (E.type === "frame" && O) {
      const Me = O[E.idx], V = C(Me[0]), X = C(Me[1]);
      if (V && X) {
        const J = V.clone().add(X).multiplyScalar(0.5), q = X.clone().sub(V), we = q.length(), me = e.getActiveCamera().position.distanceTo(J) * 35e-4;
        ge.position.copy(J);
        const tt = new m(0, 1, 0), Ye = tt.clone().cross(q).normalize(), Re = tt.angleTo(q);
        ge.quaternion.setFromAxisAngle(Ye, Re), ge.scale.set(me, we, me), ge.visible = true;
      }
    } else if (E.type === "shell" && O) {
      const Me = O[E.idx], V = [], X = [];
      for (const J of Me) {
        const q = C(J);
        if (!q) return;
        V.push(q.x, q.y, q.z);
      }
      Me.length === 4 ? X.push(0, 1, 2, 0, 2, 3) : Me.length === 3 && X.push(0, 1, 2), Pe.setAttribute("position", new Mt(V, 3)), Pe.setIndex(X), Pe.computeVertexNormals(), Z.visible = true;
    } else if (E.type === "solid" && O) {
      const Me = O[E.idx], V = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], X = [];
      for (const [J, q] of V) {
        const we = C(Me[J]), de = C(Me[q]);
        we && de && X.push(we.x, we.y, we.z, de.x, de.y, de.z);
      }
      Y.setAttribute("position", new Mt(X, 3)), A.visible = true;
    }
    e.render();
  }
  return L.derive(() => {
    e.derivedNodes.val, E && Ze();
  }), i;
}
function Ds(e, i, y, h, u, _) {
  const x = u - y, w = _ - h, v = x * x + w * w;
  if (v < 1e-9) {
    const ie = e - y, ue = i - h;
    return Math.sqrt(ie * ie + ue * ue);
  }
  let z = ((e - y) * x + (i - h) * w) / v;
  z = Math.max(0, Math.min(1, z));
  const P = y + z * x, b = h + z * w, te = e - P, ae = i - b;
  return Math.sqrt(te * te + ae * ae);
}
function Ns(e, i, y) {
  let h = false;
  for (let u = 0, _ = y.length - 1; u < y.length; _ = u++) {
    const x = y[u].x, w = y[u].y, v = y[_].x, z = y[_].y;
    w > i != z > i && e < (v - x) * (i - w) / (z - w + 1e-12) + x && (h = !h);
  }
  return h;
}
function zo(e, i = 8) {
  const y = document.createElement("div");
  y.id = "legend";
  const h = document.createElement("div");
  h.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", y.appendChild(h), setTimeout(() => {
    L.derive(() => {
      h.textContent = Jn.val ? `[${Jn.val}]` : "";
    });
  });
  const u = Array.from({ length: i + 1 }, (v, z) => z / i).reverse();
  let _, x;
  u.forEach((v, z) => {
    _ = document.createElement("div"), _.id = `marker-${z}`, _.className = "marker", _.style.marginTop = z == 0 ? "0px" : `calc(${50 / i}vh - 1px)`, x = document.createElement("p"), x.id = `marker-text-${z}`, _.append(x), y.append(_);
  });
  const w = [];
  return y.querySelectorAll("p").forEach((v) => w.push(v)), setTimeout(() => {
    L.derive(() => {
      u.forEach((v, z) => {
        const P = w[z];
        P && (P.innerText = Zs(e.val, v).toString());
      });
    });
  }), y;
}
function Zs(e, i) {
  const y = jn.val;
  if (y) return (y[0] + i * (y[1] - y[0])).toPrecision(3);
  const h = e.filter((x) => Number.isFinite(x));
  if (h.length === 0) return "0";
  let u = Math.min(...h);
  const _ = Math.max(...h);
  return u >= 0 && _ > 0 && (u = 0), (u + i * (_ - u)).toPrecision(3);
}
function ta({ mesh: e, settingsObj: i, drawingObj: y, objects3D: h, solids: u }) {
  ss.DEFAULT_UP = new m(0, 0, 1);
  const _ = document.createElement("div"), x = new jo(), w = new es(45, 1, 0.1, 2 * 1e6), v = new ts(-10, 10, 10, -10, -1e3, 2e6);
  let z = w;
  const P = new ns({ antialias: true });
  P.localClippingEnabled = true;
  const b = new bo(w, P.domElement);
  b.enableDamping = true, b.dampingFactor = 0.1, b.screenSpacePanning = true, b.zoomSpeed = 0.8, b.panSpeed = 1.2, b.rotateSpeed = 0.9, b.keyPanSpeed = 12, b.listenToKeyEvents(window), b.touches = { ONE: Sn.ROTATE, TWO: Sn.DOLLY_PAN }, P.domElement.addEventListener("wheel", (V) => {
    if (!V.ctrlKey && Math.abs(V.deltaX) > Math.abs(V.deltaY) * 1.5) {
      V.preventDefault();
      const X = b.target, J = new m().subVectors(w.position, X), q = new m();
      q.crossVectors(w.up, J).normalize();
      const de = J.length() * 1e-3 * b.panSpeed;
      X.addScaledVector(q, V.deltaX * de), w.position.addScaledVector(q, V.deltaX * de), b.update();
    }
  }, { passive: false });
  const te = new Kn(new m(-1, 0, 0), 0), ae = new Kn(new m(0, -1, 0), 0), ie = new Kn(new m(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function ue() {
    const V = window.__hekatanClip, X = [];
    V.enableX && (te.normal.set(V.invertX ? 1 : -1, 0, 0), te.constant = V.invertX ? -V.posX : V.posX, X.push(te)), V.enableY && (ae.normal.set(0, V.invertY ? 1 : -1, 0), ae.constant = V.invertY ? -V.posY : V.posY, X.push(ae)), V.enableZ && (ie.normal.set(0, 0, V.invertZ ? 1 : -1), ie.constant = V.invertZ ? -V.posZ : V.posZ, X.push(ie)), P.clippingPlanes = X, x.traverse((q) => {
      const we = q;
      if (we.material) {
        const de = Array.isArray(we.material) ? we.material : [we.material];
        for (const ze of de) ze.clippingPlanes = X, ze.needsUpdate = true;
      }
    });
    const J = window.__hekatanPanes ?? [];
    for (const q of J) try {
      q && typeof q.refresh == "function" && q.refresh();
    } catch {
    }
    P.render(x, z);
  }
  ue(), window.__hekatanClipApply = ue;
  const k = ls(i), W = L.derive(() => Math.pow(10, k.displayScale.val / 10)), he = Us(e, k), ge = () => {
    const V = [];
    return k.gridXY.rawVal && V.push("xy"), k.gridXZ.rawVal && V.push("xz"), k.gridYZ.rawVal && V.push("yz"), V;
  }, Pe = () => {
    const V = k.gridStep.rawVal, X = Math.max(V, k.gridMajor.rawVal);
    return { planes: ge(), majorStep: X, minorStep: V };
  };
  let K = Hn(k.gridSize.rawVal, Pe());
  K.visible = k.gridVisible.rawVal, window.__hekatanSnap2D = k.cursorSnap.rawVal;
  const Z = () => {
    const V = Math.max(0, Math.min(1, k.gridOpacity.rawVal));
    K.traverse((X) => {
      const J = X.material;
      if (!J || !("opacity" in J)) return;
      const q = X.name ?? "";
      let we = 0.35;
      q.includes("border") ? we = 1 : q.includes("major") && (we = 0.75), J.opacity = V * we;
    });
  };
  Z(), _.appendChild(is(k, e, u)), _.setAttribute("id", "viewer"), _.appendChild(P.domElement), P.setPixelRatio(window.devicePixelRatio);
  const Y = jt();
  P.setClearColor(Y.background, 1);
  const $ = k.gridSize.rawVal, A = $ * 0.5 + $ * 0.5 / Math.tan(45 * 0.5);
  w.position.set(0, 0, A), w.up.set(0, 1, 0), b.target.set(0, 0, 0), b.minDistance = 0.1, b.maxDistance = 1e4, _.__settings = k, b.zoomSpeed = 1, b._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, b.update();
  let E = _o(k.gridSize.rawVal, k.flipAxes.rawVal);
  x.add(K, E), L.derive(() => {
    window.__hekatanGridPlaneXY = k.gridXY.val, window.__hekatanGridPlaneXZ = k.gridXZ.val, window.__hekatanGridPlaneYZ = k.gridYZ.val;
  });
  let R = true;
  L.derive(() => {
    const V = k.gridVisible.val;
    if (R) {
      R = false;
      return;
    }
    K.visible = V, ee();
  });
  let C = true;
  L.derive(() => {
    if (k.gridOpacity.val, C) {
      C = false;
      return;
    }
    Z(), ee();
  }), L.derive(() => {
    const V = k.cursorSnap.val;
    window.__hekatanSnap2D = V;
  });
  let N = true;
  L.derive(() => {
    var _a;
    const V = k.gridSize.val, X = k.flipAxes.val;
    if (k.gridXY.val, k.gridXZ.val, k.gridYZ.val, k.gridStep.val, k.gridMajor.val, N) {
      N = false;
      return;
    }
    x.remove(K), (_a = K.traverse) == null ? void 0 : _a.call(K, (we) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = we.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = we.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), K = Hn(V, Pe()), K.visible = k.gridVisible.rawVal, x.add(K), Z(), x.remove(E), E.traverse((we) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = we.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = we.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), E = _o(V, X), x.add(E);
    const J = V * 0.5 + V * 0.5 / Math.tan(45 * 0.5);
    w.position.distanceTo(b.target), Math.abs(w.position.x) < 0.1 && Math.abs(w.position.y) < 0.1 && w.position.z > 0 ? w.position.set(0, 0, J) : w.position.set(0.5 * V, -J, 0.5 * V), b.target.set(0, 0, 0), b.minDistance = Math.max(0.05, V * 0.01), b.maxDistance = Math.max(50, V * 50), b.update(), ee();
  }), new ResizeObserver((V) => {
    var _a, _b;
    for (const X of V) {
      const J = (_a = X.target) == null ? void 0 : _a.clientWidth, q = (_b = X.target) == null ? void 0 : _b.clientHeight;
      if (J === 0 || q === 0) continue;
      const de = (G ? J / 2 : J) / q;
      w.aspect = de, w.updateProjectionMatrix();
      const ze = v.top;
      if (v.left = -ze * de, v.right = ze * de, v.updateProjectionMatrix(), H && H.isPerspectiveCamera) H.aspect = de, H.updateProjectionMatrix();
      else if (H && H.isOrthographicCamera) {
        const me = H, tt = me.top;
        me.left = -tt * de, me.right = tt * de, me.updateProjectionMatrix();
      }
      P.setSize(J, q), ee();
    }
  }).observe(_), b.addEventListener("change", ee), L.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, k.displayScale.val, k.nodes.val, k.elements.val, (_g = k.edges) == null ? void 0 : _g.val, k.elemColumns.val, k.elemBeams.val, k.nodesIndexes.val, k.elementsIndexes.val, k.orientations.val, k.sections.val, k.secColumns.val, k.secBeams.val, k.secFloor.val, k.supports.val, k.loads.val, k.deformedShape.val, k.nodeResults.val, k.frameResults.val, k.shellResults.val, (_h = k.solidResults) == null ? void 0 : _h.val, setTimeout(ee);
  });
  let G = false, H = null, F = null, oe = false;
  function ee() {
    const V = _.clientWidth || 1, X = _.clientHeight || 1;
    if (!G || !H) {
      P.setScissorTest(false), P.setViewport(0, 0, V, X), P.render(x, z);
      return;
    }
    const J = V / 2;
    P.setScissorTest(true), P.setViewport(0, 0, J, X), P.setScissor(0, 0, J, X), P.render(x, z), P.setViewport(J, 0, J, X), P.setScissor(J, 0, J, X), P.render(x, H), P.setScissorTest(false);
  }
  function le(V) {
    z = V, b.object = V, b.update(), ee();
  }
  function re(V, X) {
    G = V, X && (H = X);
    const J = _.clientWidth || 1, q = _.clientHeight || 1, de = (V ? J / 2 : J) / q;
    w.isPerspectiveCamera && (w.aspect = de, w.updateProjectionMatrix());
    const ze = v.top;
    if (v.left = -ze * de, v.right = ze * de, v.updateProjectionMatrix(), V && H) {
      if (F ? (F.object = H, F.update()) : (F = new bo(H, P.domElement), F.enableDamping = true, F.dampingFactor = 0.1, F.screenSpacePanning = true, F.zoomSpeed = 0.8, F.panSpeed = 1.2, F.rotateSpeed = 0.9, F.touches = { ONE: Sn.ROTATE, TWO: Sn.DOLLY_PAN }, F.target.copy(b.target), F.addEventListener("change", ee), F.enabled = false), !oe) {
        const me = (tt) => {
          if (!G || !F) return;
          const Ye = P.domElement.getBoundingClientRect(), Re = tt.clientX - Ye.left, We = Ye.width / 2, Ce = Re >= We;
          b.enabled = !Ce, F.enabled = Ce;
        };
        P.domElement.addEventListener("pointerdown", me, true), P.domElement.addEventListener("wheel", me, { capture: true, passive: true }), oe = true;
      }
    } else V || (b.enabled = true, F && (F.enabled = false));
    _.__splitMode = V, window.__hekatanSplitMode = V, window.__hekatanSplitCamera = V ? H : null, ee();
  }
  if (e) {
    x.add(rs(k, he, W), as(e, k, he), ps(k, he, W), us(e, k, he, W), cs(e, k, he, W), ds(e, k, he, W), ms(e, k, he, W), ys(e, k, he, W), Ms(e, k, he, W), xs(e, k, he, W));
    const V = Ys({ scene: x, rendererElm: P.domElement, getActiveCamera: () => z, derivedNodes: he, derivedDisplayScale: W, mesh: e, settings: k, render: ee });
    x.add(V);
    const X = Js(e, k), J = Ps(e, k, he, X), q = zo(X);
    x.add(J), _.appendChild(q);
    const we = Ts(e, k, he);
    x.add(we);
    const de = we.__colorMapValues, ze = zo(de);
    ze.id = "frame-legend", _.appendChild(ze), L.derive(() => {
      var _a;
      const me = k.shellResults.val != "none", tt = (((_a = k.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", Ye = me || tt, Re = k.frameResults.val.startsWith("contour:");
      q.hidden = !Ye, J.visible = Ye, ze.hidden = !Re;
    });
  }
  if (u) {
    const V = new os(16777215, 0.5);
    x.add(V);
    const X = new Mo(16777215, 0.5);
    X.position.set(30, 25, -10), X.shadow.mapSize.width = 1024, X.shadow.mapSize.height = 1024, x.add(X);
    const J = 10;
    X.shadow.camera.left = -J, X.shadow.camera.right = J, X.shadow.camera.top = J, X.shadow.camera.bottom = -J, X.shadow.camera.far = 1e3;
    const q = new Mo(16777215, 0.5);
    q.color.setHSL(11, 43, 96), q.position.set(-10, 0, 30), x.add(q), L.derive(() => {
      (u == null ? void 0 : u.val.length) && (x.remove(...u.oldVal), x.add(...u.rawVal), ee());
    }), L.derive(() => {
      u.rawVal.forEach((we) => we.visible = k.solids.val), ee();
    });
  }
  if (h) {
    const V = [], X = (q) => {
      var _a;
      return ((_a = q == null ? void 0 : q.userData) == null ? void 0 : _a.isCota) ? k.showCotas.val : k.custom3D.val;
    }, J = () => {
      for (const q of V) q.visible = X(q);
      ee();
    };
    L.derive(() => {
      const q = h.val;
      V.length && (x.remove(...V), V.length = 0), q.length && (x.add(...q), V.push(...q), J()), ee();
    }), L.derive(() => {
      k.custom3D.val, J();
    }), L.derive(() => {
      k.showCotas.val, J();
    });
  }
  y && bs({ drawingObj: y, gridObj: K, scene: x, getActiveCamera: () => z, controls: b, gridSize: $, derivedDisplayScale: W, rendererElm: P.domElement, viewerRender: ee }), Co((V, X) => {
    var _a;
    P.setClearColor(X.background, 1), x.remove(K), (_a = K.traverse) == null ? void 0 : _a.call(K, (J) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = J.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = J.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), K = Hn(k.gridSize.rawVal, { planes: ge() }), x.add(K), _.style.setProperty("--awatif-legend-color", X.legendMarker), ee();
  });
  const Fe = { scene: x, perspCamera: w, orthoCamera: v, get camera() {
    return z;
  }, controls: b, renderer: P, rendererElm: P.domElement, render: ee, setActiveCamera: le, setSplitMode: re, get splitMode() {
    return G;
  }, get splitCamera() {
    return H;
  }, settings: k };
  _.__ctx = Fe;
  const ce = document.createElement("div");
  ce.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const _e = (V, X, J) => {
    const q = document.createElement("button");
    return q.textContent = V, q.title = X, q.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), q.onmouseenter = () => {
      q.style.background = "rgba(70,70,70,0.9)";
    }, q.onmouseleave = () => {
      q.style.background = "rgba(40,40,40,0.85)";
    }, q.onclick = (we) => {
      we.preventDefault(), J();
    }, q;
  }, Ze = (V, X) => {
    const J = b.target, q = new m().subVectors(z.position, J), we = q.length(), de = new m(), ze = new m();
    de.crossVectors(z.up, q).normalize(), ze.copy(z.up).normalize();
    const me = we * 0.05;
    J.addScaledVector(de, -V * me), J.addScaledVector(ze, X * me), z.position.addScaledVector(de, -V * me), z.position.addScaledVector(ze, X * me), b.update(), ee();
  }, O = (V) => {
    const X = new m().subVectors(z.position, b.target);
    X.multiplyScalar(V), z.position.copy(b.target).add(X), b.update(), ee();
  }, Me = () => {
    const V = document.createElement("div");
    return V.style.cssText = "width:32px;height:32px;", V;
  };
  return ce.append(Me()), ce.append(_e("\u2191", "Pan arriba", () => Ze(0, 1))), ce.append(_e("\u2295", "Zoom in", () => O(0.85))), ce.append(_e("\u2190", "Pan izquierda", () => Ze(-1, 0))), ce.append(_e("\u2302", "Reset vista", () => {
    b.reset(), ee();
  })), ce.append(_e("\u2192", "Pan derecha", () => Ze(1, 0))), ce.append(_e("\u2296", "Zoom out", () => O(1.18))), ce.append(_e("\u2193", "Pan abajo", () => Ze(0, -1))), ce.append(Me()), getComputedStyle(_).position === "static" && (_.style.position = "relative"), _.appendChild(ce), _;
}
function Us(e, i) {
  return L.derive(() => {
    var _a, _b, _c, _d;
    if (!i.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const y = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], h = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!h || y.length === 0) return y;
    const u = i.deformScale.val, _ = i.deformScale.val * i.deformScaleZ.val, x = Number.isFinite(u) ? u : 1, w = Number.isFinite(_) ? _ : 1;
    return y.map((v, z) => {
      var _a2;
      const P = ((_a2 = h.get(z)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], b = Number.isFinite(P[0]) ? P[0] : 0, te = Number.isFinite(P[1]) ? P[1] : 0, ae = Number.isFinite(P[2]) ? P[2] : 0;
      return [v[0] + b * x, v[1] + te * x, v[2] + ae * w];
    });
  });
}
const jn = L.state(null), Jn = L.state(""), Ks = L.state("kN"), Hs = L.state("mm"), Ws = L.state("kN/m\xB2"), Gs = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, Po = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, qs = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function Js(e, i) {
  const y = L.state([]);
  let h;
  return ((u) => {
    u.bendingXX = "bendingXX", u.bendingYY = "bendingYY", u.bendingXY = "bendingXY", u.membraneXX = "membraneXX", u.membraneYY = "membraneYY", u.membraneXY = "membraneXY", u.tranverseShearX = "tranverseShearX", u.tranverseShearY = "tranverseShearY", u.vonMises = "vonMises", u.pressure = "pressure", u.displacementX = "displacementX", u.displacementY = "displacementY", u.displacementZ = "displacementZ";
  })(h || (h = {})), L.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const u = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), ie = (Fe, ce) => {
      Fe == null ? void 0 : Fe.forEach((_e2, Ze) => {
        const O = e.elements.val[Ze];
        if (O) for (let Me = 0; Me < O.length; Me++) ce.set(O[Me], [_e2[Me] ?? _e2[0]]);
      });
    };
    ie((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, u), ie((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, _), ie((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, x), ie((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, w), ie((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, v), ie((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, z), ie((_n2 = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n2.tranverseShearX, P), ie((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, b), ie((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, te), ie((_t = (_s2 = e.analyzeOutputs) == null ? void 0 : _s2.val) == null ? void 0 : _t.pressure, ae);
    const ue = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, k = (_w = i.solidResults) == null ? void 0 : _w.val, he = k && k !== "none" ? k : i.shellResults.val, ge = ue == null ? void 0 : ue[he], Pe = { bendingXX: [u, 0], bendingYY: [_, 0], bendingXY: [x, 0], membraneXX: [w, 0], membraneYY: [v, 0], membraneXY: [z, 0], tranverseShearX: [P, 0], tranverseShearY: [b, 0], vonMises: [te, 0], pressure: [ae, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, K = i.shellResults.val, Z = Ks.val, Y = Hs.val, $ = K === "displacementX" || K === "displacementY" || K === "displacementZ", A = K === "bendingXX" || K === "bendingYY" || K === "bendingXY", E = K === "membraneXX" || K === "membraneYY" || K === "membraneXY", R = K === "vonMises" || K === "pressure", C = K === "tranverseShearX" || K === "tranverseShearY", N = (_D = i.solidResults) == null ? void 0 : _D.val, ne = N === "vonMises" || N === "sigmaXX" || N === "sigmaYY" || N === "sigmaZZ" || N === "tauXY" || N === "tauYZ" || N === "tauXZ", G = N === "ux" || N === "uy" || N === "uz", H = Ws.val, F = ne ? qs[H] : G || $ ? Po[Y] : A || E || R || C ? 1 / Gs[Z] : 1, oe = ne ? H : G || $ ? Y : A ? `${Z}\xB7m/m` : E ? `${Z}/m\xB2` : R ? `${Z}/m\xB2` : C ? `${Z}/m` : "";
    Jn.val = oe, jn.val = Array.isArray(ge) && ge.length === 2 ? [ge[0] * F, ge[1] * F] : null;
    const le = N && N !== "none" ? [te, 0] : Pe[K], re = [];
    e.nodes.val.forEach((Fe, ce) => {
      const _e2 = le;
      if (!_e2 || !_e2[0] || typeof _e2[0].has != "function") return;
      if (!_e2[0].has(ce)) {
        re.push(Number.NaN);
        return;
      }
      const Ze = _e2[0].get(ce), O = Ze ? Ze[_e2[1]] ?? 0 : 0;
      re.push(O * F);
    }), y.val = re;
  }), y;
}
export {
  Hs as a,
  Ws as b,
  Ks as c,
  zs as d,
  zo as e,
  ta as g
};
