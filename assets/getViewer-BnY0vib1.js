import { v as I, P as no, r as Gt, a7 as yn, B as ce, a8 as gn, F as _t, a4 as oo, _ as Je, N as It, L as ct, c as Kt, w as so, b as uo, e as nt, d as Oe, V as v, $ as Wt, a9 as Cn, H as ao, D as zt, a as kt, x as je, z as vn, aa as bn, t as fo, n as ho, I as fn, a2 as sn, S as Ot, l as Dn, f as Nn, h as Zn, i as Un, ab as Kn, ac as hn, q as mo, ad as wo, ae as xo, af as yo, ag as go, g as Hn, ah as Wn, C as Gn, K as vo, U as bo, W as Mo, X as So, T as mn, p as zn, Y as ko, Z as qn, O as _o } from "./theme-CaJUXK9g.js";
import { T as xt, O as Jn } from "./Text-DxCJlSr5.js";
import { e as Po } from "./styles-Dn-MFVx_.js";
function Co(e, s, x) {
  const u = document.createElement("div"), l = new no({ title: "Settings", expanded: true, container: u });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(l), u.setAttribute("id", "settings");
  const _ = "hk_settingsPos";
  let b = null;
  try {
    const m = localStorage.getItem(_);
    m && (b = JSON.parse(m));
  } catch {
  }
  u.style.cssText = ["position:fixed", b ? `left:${b.left}px` : "left:8px", b ? `top:${b.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const w = () => {
    const m = u.querySelector(".tp-rotv_b");
    if (!m) {
      setTimeout(w, 200);
      return;
    }
    m.style.cursor = "move", m.style.userSelect = "none";
    let U = false, O = 0, ye = 0, we = 0, C = 0;
    m.addEventListener("mousedown", (ne) => {
      U = true, O = ne.clientX, ye = ne.clientY;
      const fe = u.getBoundingClientRect();
      we = fe.left, C = fe.top, u.style.left = `${we}px`, u.style.top = `${C}px`;
    }), window.addEventListener("mousemove", (ne) => {
      if (!U) return;
      const fe = ne.clientX - O, ie = ne.clientY - ye, G = Math.max(0, Math.min(window.innerWidth - 40, we + fe)), de = Math.max(0, Math.min(window.innerHeight - 40, C + ie));
      u.style.left = `${G}px`, u.style.top = `${de}px`;
    }), window.addEventListener("mouseup", () => {
      if (U) {
        U = false;
        try {
          localStorage.setItem(_, JSON.stringify({ left: parseFloat(u.style.left), top: parseFloat(u.style.top) }));
        } catch {
        }
      }
    });
  };
  if (w(), s == null ? void 0 : s.nodes) {
    l.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 0.5 });
    const m = l.addFolder({ title: "\u{1F4D0} Grid", expanded: true });
    m.addBinding(e.gridSize, "val", { label: "Dimensi\xF3n (m)", min: 1, max: 100, step: 1 }), m.addBinding(e.gridStep, "val", { label: "Separaci\xF3n grid (m)", min: 0.05, max: 5, step: 0.05 }), m.addBinding(e.gridMajor, "val", { label: "Separaci\xF3n mayores (m)", min: 0.1, max: 50, step: 0.1 }), m.addBinding(e.cursorSnap, "val", { label: "Paso cursor (m)", min: 0.05, max: 5, step: 0.05 }), m.addBinding(e.gridVisible, "val", { label: "Mostrar" }), m.addBinding(e.gridOpacity, "val", { label: "Opacidad", min: 0, max: 1, step: 0.05 }), m.addBinding(e.gridXY, "val", { label: "Plano XY (planta)" }), m.addBinding(e.gridXZ, "val", { label: "Plano XZ (frontal)" }), m.addBinding(e.gridYZ, "val", { label: "Plano YZ (lateral)" }), l.addBinding(e.nodes, "val", { label: "Nodes" }), l.addBinding(e.elements, "val", { label: "Elements" }), l.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), l.addBinding(e.faces, "val", { label: "  Caras (fill)" }), l.addBinding(e.elemFrames, "val", { label: "  Frames (todos)" }), l.addBinding(e.elemColumns, "val", { label: "    Columnas" }), l.addBinding(e.elemBeams, "val", { label: "    Vigas" }), l.addBinding(e.elemZapatas, "val", { label: "  Zapatas (shells z\u22640)" }), l.addBinding(e.elemLosas, "val", { label: "  Losas (shells z>0)" }), l.addBinding(e.colorByType, "val", { label: "  \u{1F3A8} Color por tipo" }), l.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), l.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), l.addBinding(e.orientations, "val", { label: "Orientations" }), l.addBinding(e.sections, "val", { label: "Sections" }), l.addBinding(e.sectionLabels, "val", { label: "  Sec. Labels (30x50)" }), l.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), l.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), l.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } });
  }
  if ((s == null ? void 0 : s.nodeInputs) || (s == null ? void 0 : s.elementInputs)) {
    const m = l.addFolder({ title: "Analysis Inputs" });
    m.addBinding(e.supports, "val", { label: "Supports" }), m.addBinding(e.loads, "val", { label: "Loads" }), m.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), m.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((s == null ? void 0 : s.deformOutputs) || (s == null ? void 0 : s.analyzeOutputs)) {
    const m = l.addFolder({ title: "Analysis Outputs" });
    m.addBinding(e.nodeResults, "val", { options: { none: "none", "U (deformations)": "deformations", "R (reactions)": "reactions" }, label: "Node results" }), m.addBinding(e.frameResults, "val", { options: { none: "none", "P (normals)": "normals", "V2 (shearY)": "shearsY", "V3 (shearZ)": "shearsZ", "T (torsion)": "torsions", "M2 (bendingY)": "bendingsY", "M3 (bendingZ)": "bendingsZ", "contour P": "contour:normals", "contour V2": "contour:shearsY", "contour V3": "contour:shearsZ", "contour T": "contour:torsions", "contour M2": "contour:bendingsY", "contour M3": "contour:bendingsZ" }, label: "Frame results" }), m.addBinding(e.shellResults, "val", { options: { none: "none", "F11 (membraneXX)": "membraneXX", "F22 (membraneYY)": "membraneYY", "F12 (membraneXY)": "membraneXY", "FMax (principal)": "membranePrincipalMax", "FMin (principal)": "membranePrincipalMin", "M11 (bendingXX)": "bendingXX", "M22 (bendingYY)": "bendingYY", "M12 (bendingXY)": "bendingXY", "MMax (principal)": "bendingPrincipalMax", "MMin (principal)": "bendingPrincipalMin", "V13 (shearX)": "tranverseShearX", "V23 (shearY)": "tranverseShearY", "VMax (magnitud)": "transverseShearMax", "Von Mises": "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), m.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), m.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), m.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), m.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  x && l.addBinding(e.solids, "val", { label: "Solids" });
  const g = l.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), M = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), P = () => {
    const m = window.__hekatanClipApply;
    typeof m == "function" && m();
  };
  return g.addBinding(M, "enableX", { label: "Cortar X" }).on("change", P), g.addBinding(M, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", P), g.addBinding(M, "invertX", { label: "  invertir X" }).on("change", P), g.addBinding(M, "enableY", { label: "Cortar Y" }).on("change", P), g.addBinding(M, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", P), g.addBinding(M, "invertY", { label: "  invertir Y" }).on("change", P), g.addBinding(M, "enableZ", { label: "Cortar Z" }).on("change", P), g.addBinding(M, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", P), g.addBinding(M, "invertZ", { label: "  invertir Z" }).on("change", P), u;
}
function zo(e) {
  return { gridSize: I.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: I.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: I.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: I.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: I.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: I.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: I.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: I.state((e == null ? void 0 : e.gridXZ) ?? true), gridYZ: I.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: I.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: I.state((e == null ? void 0 : e.nodes) ?? true), elements: I.state((e == null ? void 0 : e.elements) ?? true), edges: I.state((e == null ? void 0 : e.edges) ?? true), faces: I.state((e == null ? void 0 : e.faces) ?? true), elemColumns: I.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: I.state((e == null ? void 0 : e.elemBeams) ?? true), elemFrames: I.state((e == null ? void 0 : e.elemFrames) ?? true), elemZapatas: I.state((e == null ? void 0 : e.elemZapatas) ?? true), elemLosas: I.state((e == null ? void 0 : e.elemLosas) ?? true), colorByType: I.state((e == null ? void 0 : e.colorByType) ?? false), nodesIndexes: I.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: I.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: I.state((e == null ? void 0 : e.orientations) ?? false), sections: I.state((e == null ? void 0 : e.sections) ?? true), sectionLabels: I.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: I.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: I.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: I.state((e == null ? void 0 : e.secFloor) ?? -1), supports: I.state((e == null ? void 0 : e.supports) ?? true), loads: I.state((e == null ? void 0 : e.loads) ?? false), deformedShape: I.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: I.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: I.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: I.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: I.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: I.state((e == null ? void 0 : e.flipAxes) ?? false), solids: I.state((e == null ? void 0 : e.solids) ?? true), custom3D: I.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: I.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: I.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: I.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function Fo(e, s, x) {
  const u = Gt(), l = new yn(new ce(), new gn({ color: u.nodePoint }));
  return oo((_, b) => {
    l.material.color.setHex(b.nodePoint);
  }), l.frustumCulled = false, I.derive(() => {
    e.nodes.val && l.geometry.setAttribute("position", new _t(s.val.flat(), 3));
  }), I.derive(() => {
    if (x.val, s.val, !e.nodes.rawVal) return;
    const _ = s.rawVal ?? [];
    let b = e.gridSize.val * 0.5;
    if (_.length >= 2) {
      const g = [1 / 0, 1 / 0, 1 / 0], M = [-1 / 0, -1 / 0, -1 / 0];
      for (const P of _) for (let m = 0; m < 3; m++) g[m] = Math.min(g[m], P[m]), M[m] = Math.max(M[m], P[m]);
      b = Math.max(M[0] - g[0], M[1] - g[1], M[2] - g[2], 0.1);
    }
    const w = 0.03 * b;
    l.material.size = w * x.rawVal;
  }), I.derive(() => {
    l.visible = e.nodes.val;
  }), l;
}
function Fn(e, s) {
  const x = Gt(), u = new Je();
  u.name = "hekatan-grid";
  const l = (s == null ? void 0 : s.planes) ?? ["xy"];
  let _ = (s == null ? void 0 : s.majorStep) ?? 1, b = (s == null ? void 0 : s.minorStep) ?? 0.1;
  for (_ <= 0 && (_ = 1), b <= 0 && (b = 0.1); e / b > 500; ) b *= 2;
  for (; e / _ > 100; ) _ *= 2;
  const w = e / 2;
  _ = Math.max(b, Math.round(_ / b) * b);
  const M = new It(x.grid), P = new It(x.grid).multiplyScalar(0.45), m = (O, ye, we, C) => {
    const ne = [], fe = O === "xy" ? (B, $) => [B, $, 0] : O === "xz" ? (B, $) => [B, 0, $] : (B, $) => [0, B, $], ie = Math.floor(w / ye);
    for (let B = -ie; B <= ie; B++) {
      const $ = B * ye, V = fe($, -w), F = fe($, w);
      ne.push(...V, ...F);
    }
    for (let B = -ie; B <= ie; B++) {
      const $ = B * ye, V = fe(-w, $), F = fe(w, $);
      ne.push(...V, ...F);
    }
    const G = new ce();
    G.setAttribute("position", new _t(ne, 3));
    const de = new ct({ color: we, transparent: true, opacity: C, depthWrite: false }), q = new Kt(G, de);
    return q.name = `grid-${O}-${ye === b ? "minor" : "major"}`, q;
  }, U = (O, ye, we) => {
    const C = O === "xy" ? (q, B) => [q, B, 0] : O === "xz" ? (q, B) => [q, 0, B] : (q, B) => [0, q, B], ne = [[-w, -w], [w, -w], [w, w], [-w, w]], fe = [];
    for (const [q, B] of ne) fe.push(...C(q, B));
    const ie = new ce();
    ie.setAttribute("position", new _t(fe, 3));
    const G = new ct({ color: ye, transparent: true, opacity: we, depthWrite: false }), de = new so(ie, G);
    return de.name = `grid-${O}-border`, de.renderOrder = 1, de;
  };
  for (const O of l) u.add(m(O, b, P, 0.12)), u.add(m(O, _, M, 0.4)), u.add(U(O, M, 0.55));
  return u.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: _, minorStep: b, gridSize: e, planes: [...l] }, u;
}
function Eo(e, s, x, u) {
  const l = new Je(), _ = new uo(0.5, 0.5, 0.5), b = new nt({ color: 10166822 }), w = () => {
    const M = x.rawVal ?? [];
    if (M.length < 2) return s.gridSize.val * 0.5;
    let P = [1 / 0, 1 / 0, 1 / 0], m = [-1 / 0, -1 / 0, -1 / 0];
    for (const U of M) for (let O = 0; O < 3; O++) U[O] < P[O] && (P[O] = U[O]), U[O] > m[O] && (m[O] = U[O]);
    return Math.max(m[0] - P[0], m[1] - P[1], m[2] - P[2], 0.1);
  }, g = () => 0.025 * w();
  return I.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, !s.supports.val) return;
    l.clear();
    const M = g();
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((P, m) => {
      const U = x.val[m];
      if (!U) return;
      const O = new Oe(_, b);
      O.position.set(...U);
      const ye = M * u.rawVal;
      O.scale.set(ye, ye, ye), l.add(O);
    });
  }), I.derive(() => {
    if (u.val, !s.supports.rawVal) return;
    const P = g() * u.rawVal;
    l.children.forEach((m) => m.scale.set(P, P, P));
  }), I.derive(() => {
    l.visible = s.supports.val;
  }), l;
}
function Ao(e, s, x, u) {
  const l = new Je();
  l.name = "loadsGroup";
  function _(b) {
    if (b.length < 2) return 0.12 * s.gridSize.rawVal;
    const w = [1 / 0, 1 / 0, 1 / 0], g = [-1 / 0, -1 / 0, -1 / 0];
    for (const P of b) for (let m = 0; m < 3; m++) w[m] = Math.min(w[m], P[m]), g[m] = Math.max(g[m], P[m]);
    return 0.08 * Math.max(g[0] - w[0], g[1] - w[1], g[2] - w[2], 0.1);
  }
  return I.derive(() => {
    var _a, _b, _c;
    if (s.deformedShape.val, !s.loads.val) return;
    l.children.forEach((g) => g.dispose()), l.clear();
    const b = x.val, w = _(b);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((g, M) => {
      const P = b[M];
      if (!P) return;
      const m = new v(...g.slice(0, 3));
      if (m.lengthSq() < 1e-30) return;
      m.normalize();
      const U = new Wt(m, new v(...P), 1, 15637248, 0.3, 0.3), O = w * u.rawVal;
      U.scale.set(O, O, O), l.add(U);
    });
  }), I.derive(() => {
    if (u.val, !s.loads.rawVal) return;
    const w = _(x.rawVal) * u.rawVal;
    l.children.forEach((g) => g.scale.set(w, w, w));
  }), I.derive(() => {
    l.visible = s.loads.val;
  }), l;
}
function Vo(e, s, x) {
  const u = new Je();
  return I.derive(() => {
    if (!e.nodesIndexes.val) return;
    u.children.forEach((_) => _.dispose()), u.clear();
    const l = 0.05 * e.gridSize.val * 0.6;
    s.val.forEach((_, b) => {
      const w = new xt(`${b}`);
      w.position.set(..._), w.updateScale(l * x.rawVal), u.add(w);
    });
  }), I.derive(() => {
    if (x.val, !e.nodesIndexes.rawVal) return;
    const l = 0.05 * e.gridSize.val * 0.6;
    u.children.forEach((_) => _.updateScale(l * x.rawVal));
  }), I.derive(() => {
    u.visible = e.nodesIndexes.val;
  }), u;
}
function Lo(e, s, x, u) {
  const l = new Je();
  return I.derive(() => {
    var _a;
    if (s.deformedShape.val, !s.elementsIndexes.val) return;
    l.children.forEach((b) => b.dispose()), l.clear();
    const _ = 0.05 * s.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((b, w) => {
      const g = new xt(`${w}`, void 0, "#001219");
      g.position.set(...To(b.map((M) => x.rawVal[M]))), g.updateScale(_ * u.rawVal), l.add(g);
    });
  }), I.derive(() => {
    if (u.val, !s.elementsIndexes.rawVal) return;
    const _ = 0.05 * s.gridSize.val * 0.6;
    l.children.forEach((b) => b.updateScale(_ * u.rawVal));
  }), I.derive(() => {
    l.visible = s.elementsIndexes.val;
  }), l;
}
function To(e) {
  const s = e.reduce((u, l) => [u[0] + l[0], u[1] + l[1], u[2] + l[2]], [0, 0, 0]), x = e.length;
  return [s[0] / x, s[1] / x, s[2] / x];
}
function On(e, s) {
  const x = new Je(), u = 0.05 * e * 1, l = Gt(), _ = new xt("X", "red", "transparent"), b = new xt(s ? "Z" : "Y", "green", "transparent"), w = new xt(s ? "Y" : "Z", "blue", "transparent"), g = new Wt(new v(1, 0, 0), new v(0, 0, 0), 1, l.axisArrow, 0.2, 0.2), M = new Wt(new v(0, 1, 0), new v(0, 0, 0), 1, l.axisArrow, 0.2, 0.2), P = new Wt(new v(0, 0, 1), new v(0, 0, 0), 1, l.axisArrow, 0.2, 0.2);
  return _.position.set(1.3 * u, 0, 0), b.position.set(0, 1.3 * u, 0), w.position.set(0, 0, 1.3 * u), _.updateScale(0.4 * u), b.updateScale(0.4 * u), w.updateScale(0.4 * u), g.scale.set(u, u, u), M.scale.set(u, u, u), P.scale.set(u, u, u), x.add(g, M, P, _, b, w), x;
}
function Tn(e, s) {
  const x = new v(...e), l = new v(...s).clone().sub(x), _ = l.length(), b = l.dot(new v(1, 0, 0)) / _, w = l.dot(new v(0, 1, 0)) / _, g = l.dot(new v(0, 0, 1)) / _, M = Math.sqrt(b ** 2 + w ** 2);
  let P = new Cn().fromArray([[b, w, g], [-w / M, b / M, 0], [-b * g / M, -w * g / M, M]].flat());
  return g === 1 && (P = new Cn().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), g === -1 && (P = new Cn().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new ao().setFromMatrix3(P);
}
function Vn(e, s) {
  return e == null ? void 0 : e.map((x, u) => (9 * x + s[u]) / 10);
}
function ln(e) {
  const s = e.reduce((u, l) => [u[0] + l[0], u[1] + l[1], u[2] + l[2]], [0, 0, 0]), x = e.length;
  return [s[0] / x, s[1] / x, s[2] / x];
}
function Io(e, s, x) {
  const u = ln([s, x]), l = ln([e, x]), _ = ln([e, s]), b = new v(...u).sub(new v(...l)).normalize(), w = new v(...x).sub(new v(..._)).normalize(), g = b.clone().cross(w).normalize(), M = g.clone().cross(b).normalize();
  return new ao().makeBasis(b, M, g);
}
function $o(e, s, x, u) {
  const l = new Je(), _ = new ce(), b = new ct({ vertexColors: true }), w = [0, 0, 0], g = [1, 0, 0], M = [0, 1, 0], P = [0, 0, 1];
  _.setAttribute("position", new _t([...w, ...g, ...w, ...M, ...w, ...P], 3));
  const m = [255, 0, 0], U = [0, 255, 0], O = [0, 0, 255];
  return _.setAttribute("color", new _t([...m, ...m, ...U, ...U, ...O, ...O], 3)), I.derive(() => {
    var _a;
    s.deformedShape.val, s.orientations.val && (l.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((ye) => {
      const we = new Kt(_, b), C = x.rawVal[ye[0]], ne = x.rawVal[ye[1]];
      if (ye.length === 2 && (we.position.set(...Vn(C, ne)), we.rotation.setFromRotationMatrix(Tn(C, ne))), ye.length === 3) {
        const G = x.rawVal[ye[2]];
        we.position.set(...ln([C, ne, G])), we.rotation.setFromRotationMatrix(Io(C, ne, G));
      }
      const ie = 0.05 * s.gridSize.rawVal * 0.75 * u.rawVal;
      we.scale.set(ie, ie, ie), l.add(we);
    }));
  }), I.derive(() => {
    if (u.val, !s.orientations.rawVal) return;
    const we = 0.05 * s.gridSize.val * 0.75 * u.rawVal;
    l.children.forEach((C) => C.scale.set(we, we, we));
  }), I.derive(() => {
    l.visible = s.orientations.val;
  }), l;
}
function Ro(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const s = (e.b * 100).toFixed(0), x = (e.h * 100).toFixed(0);
    return `${s}x${x}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function Bo(e, s, x, u) {
  const l = new Je(), _ = new Je();
  l.add(_);
  function b(q, B) {
    const $ = q / 2, V = B / 2, F = new Float32Array([0, -$, -V, 0, $, -V, 0, $, V, 0, -$, -V, 0, $, V, 0, -$, V]), L = new ce();
    L.setAttribute("position", new je(F, 3));
    const z = new Float32Array([0, -$, -V, 0, $, -V, 0, $, V, 0, -$, V, 0, -$, -V]), Z = new ce();
    return Z.setAttribute("position", new je(z, 3)), { fill: L, outline: Z };
  }
  function w(q, B = 24) {
    const $ = q / 2, V = new Float32Array(B * 9);
    for (let Z = 0; Z < B; Z++) {
      const Q = Z / B * Math.PI * 2, D = (Z + 1) / B * Math.PI * 2;
      V[Z * 9] = 0, V[Z * 9 + 1] = 0, V[Z * 9 + 2] = 0, V[Z * 9 + 3] = 0, V[Z * 9 + 4] = $ * Math.cos(Q), V[Z * 9 + 5] = $ * Math.sin(Q), V[Z * 9 + 6] = 0, V[Z * 9 + 7] = $ * Math.cos(D), V[Z * 9 + 8] = $ * Math.sin(D);
    }
    const F = new ce();
    F.setAttribute("position", new je(V, 3));
    const L = new Float32Array((B + 1) * 3);
    for (let Z = 0; Z <= B; Z++) {
      const Q = Z / B * Math.PI * 2;
      L[Z * 3] = 0, L[Z * 3 + 1] = $ * Math.cos(Q), L[Z * 3 + 2] = $ * Math.sin(Q);
    }
    const z = new ce();
    return z.setAttribute("position", new je(L, 3)), { fill: F, outline: z };
  }
  function g(q, B, $, V) {
    const F = $ ?? B * 0.08, L = V ?? q * 0.07, z = q / 2, Z = B / 2, Q = Z - F, D = L / 2, me = [];
    function E(J, Se, ge, ve) {
      me.push(0, J, Se, 0, ge, Se, 0, ge, ve, 0, J, Se, 0, ge, ve, 0, J, ve);
    }
    E(-z, -Z, z, -Q), E(-D, -Q, D, Q), E(-z, Q, z, Z);
    const N = new ce();
    N.setAttribute("position", new je(new Float32Array(me), 3));
    const oe = new Float32Array([0, -z, -Z, 0, z, -Z, 0, z, -Q, 0, D, -Q, 0, D, Q, 0, z, Q, 0, z, Z, 0, -z, Z, 0, -z, Q, 0, -D, Q, 0, -D, -Q, 0, -z, -Q, 0, -z, -Z]), le = new ce();
    return le.setAttribute("position", new je(oe, 3)), { fill: N, outline: le };
  }
  function M(q, B, $) {
    const V = q / 2, F = B / 2, L = V - $, z = F - $, Z = [];
    function Q(N, oe, le, J) {
      Z.push(0, N, oe, 0, le, oe, 0, le, J, 0, N, oe, 0, le, J, 0, N, J);
    }
    Q(-V, -F, V, -z), Q(-V, z, V, F), Q(-V, -z, -L, z), Q(L, -z, V, z);
    const D = new ce();
    D.setAttribute("position", new je(new Float32Array(Z), 3));
    const me = new Float32Array([0, -V, -F, 0, V, -F, 0, V, -F, 0, V, F, 0, V, F, 0, -V, F, 0, -V, F, 0, -V, -F, 0, -L, -z, 0, L, -z, 0, L, -z, 0, L, z, 0, L, z, 0, -L, z, 0, -L, z, 0, -L, -z]), E = new ce();
    return E.setAttribute("position", new je(me, 3)), { fill: D, outline: E };
  }
  function P(q, B, $) {
    const V = q / 2, F = B / 2, L = V - $, z = F - $, Z = new ce(), Q = new Float32Array([0, -L, -z, 0, L, -z, 0, L, z, 0, -L, -z, 0, L, z, 0, -L, z]);
    Z.setAttribute("position", new je(Q, 3));
    const D = [];
    function me(le, J, Se, ge) {
      D.push(0, le, J, 0, Se, J, 0, Se, ge, 0, le, J, 0, Se, ge, 0, le, ge);
    }
    me(-V, -F, V, -z), me(-V, z, V, F), me(-V, -z, -L, z), me(L, -z, V, z);
    const E = new ce();
    E.setAttribute("position", new je(new Float32Array(D), 3));
    const N = new Float32Array([0, -V, -F, 0, V, -F, 0, V, -F, 0, V, F, 0, V, F, 0, -V, F, 0, -V, F, 0, -V, -F, 0, -L, -z, 0, L, -z, 0, L, -z, 0, L, z, 0, L, z, 0, -L, z, 0, -L, z, 0, -L, -z]), oe = new ce();
    return oe.setAttribute("position", new je(N, 3)), { concFill: Z, steelFillGeom: E, outline: oe };
  }
  function m(q, B, $) {
    const V = [], F = [[0, -q / 2, -B / 2], [0, -q / 2 + $, -B / 2], [0, -q / 2 + $, B / 2 - $], [0, q / 2, B / 2 - $], [0, q / 2, B / 2], [0, -q / 2, B / 2]], L = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const D of L) V.push(...F[D]);
    const z = new ce();
    z.setAttribute("position", new je(new Float32Array(V), 3));
    const Z = [];
    for (let D = 0; D < F.length; D++) {
      const me = (D + 1) % F.length;
      Z.push(...F[D], ...F[me]);
    }
    const Q = new ce();
    return Q.setAttribute("position", new je(new Float32Array(Z), 3)), { fill: z, outline: Q };
  }
  function U(q, B, $, V) {
    const F = V / 2, L = [], z = [[0, -q - F, -B / 2], [0, -$ - F, -B / 2], [0, -$ - F, B / 2 - $], [0, -F, B / 2 - $], [0, -F, B / 2], [0, -q - F, B / 2]], Z = [[0, F, -B / 2], [0, F + $, -B / 2], [0, F + $, B / 2 - $], [0, q + F, B / 2 - $], [0, q + F, B / 2], [0, F, B / 2]], Q = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const N of Q) L.push(...z[N]);
    for (const N of Q) L.push(...Z[N]);
    const D = new ce();
    D.setAttribute("position", new je(new Float32Array(L), 3));
    const me = [];
    for (const N of [z, Z]) for (let oe = 0; oe < N.length; oe++) {
      const le = (oe + 1) % N.length;
      me.push(...N[oe], ...N[le]);
    }
    const E = new ce();
    return E.setAttribute("position", new je(new Float32Array(me), 3)), { fill: D, outline: E };
  }
  function O(q, B, $, V) {
    const F = B / 2, L = q, z = [[0, -L, -F], [0, -L, -F + $], [0, -V, -F + $], [0, -V, F - $], [0, -L, F - $], [0, -L, F], [0, 0, F], [0, 0, -F]], Z = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], Q = [];
    for (const N of Z) Q.push(...z[N]);
    const D = new ce();
    D.setAttribute("position", new je(new Float32Array(Q), 3));
    const me = [];
    for (let N = 0; N < z.length; N++) {
      const oe = (N + 1) % z.length;
      me.push(...z[N], ...z[oe]);
    }
    const E = new ce();
    return E.setAttribute("position", new je(new Float32Array(me), 3)), { fill: D, outline: E };
  }
  function ye(q, B, $, V, F) {
    const L = B / 2, z = F / 2, Z = [], Q = [[0, -q, -L], [0, -q, -L + $], [0, -z - V, -L + $], [0, -z - V, L - $], [0, -q, L - $], [0, -q, L], [0, -z, L], [0, -z, -L]], D = Q.map((le) => [le[0], -le[1], le[2]]), me = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const le of me) Z.push(...Q[le]);
    for (const le of me) Z.push(...D[le]);
    const E = new ce();
    E.setAttribute("position", new je(new Float32Array(Z), 3));
    const N = [];
    for (const le of [Q, D]) for (let J = 0; J < le.length; J++) {
      const Se = (J + 1) % le.length;
      N.push(...le[J], ...le[Se]);
    }
    const oe = new ce();
    return oe.setAttribute("position", new je(new Float32Array(N), 3)), { fill: E, outline: oe };
  }
  function we(q, B, $, V) {
    const F = q / 2, L = B / 2, z = V / 2, Z = [[0, -z, -L], [0, z, -L], [0, z, L - $], [0, F, L - $], [0, F, L], [0, -F, L], [0, -F, L - $], [0, -z, L - $]], Q = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], D = [];
    for (const oe of Q) D.push(...Z[oe]);
    const me = new ce();
    me.setAttribute("position", new je(new Float32Array(D), 3));
    const E = [];
    for (let oe = 0; oe < Z.length; oe++) {
      const le = (oe + 1) % Z.length;
      E.push(...Z[oe], ...Z[le]);
    }
    const N = new ce();
    return N.setAttribute("position", new je(new Float32Array(E), 3)), { fill: me, outline: N };
  }
  function C(q, B, $ = 24) {
    const V = q / 2, F = V - B, L = [];
    for (let D = 0; D < $; D++) {
      const me = D / $ * Math.PI * 2, E = (D + 1) / $ * Math.PI * 2, N = Math.cos(me), oe = Math.sin(me), le = Math.cos(E), J = Math.sin(E);
      L.push(0, V * N, V * oe, 0, V * le, V * J, 0, F * le, F * J), L.push(0, V * N, V * oe, 0, F * le, F * J, 0, F * N, F * oe);
    }
    const z = new ce();
    z.setAttribute("position", new je(new Float32Array(L), 3));
    const Z = [];
    for (let D = 0; D < $; D++) {
      const me = D / $ * Math.PI * 2, E = (D + 1) / $ * Math.PI * 2;
      Z.push(0, V * Math.cos(me), V * Math.sin(me), 0, V * Math.cos(E), V * Math.sin(E)), Z.push(0, F * Math.cos(me), F * Math.sin(me), 0, F * Math.cos(E), F * Math.sin(E));
    }
    const Q = new ce();
    return Q.setAttribute("position", new je(new Float32Array(Z), 3)), { fill: z, outline: Q };
  }
  const ne = new nt({ color: 52479, transparent: true, opacity: 0.35, side: zt, depthWrite: false }), fe = new ct({ color: 52479 }), ie = new nt({ color: 16750848, transparent: true, opacity: 0.4, side: zt, depthWrite: false }), G = new ct({ color: 16750848 });
  function de(q, B) {
    const $ = Math.abs(B[0] - q[0]), V = Math.abs(B[1] - q[1]), F = Math.abs(B[2] - q[2]);
    return F > $ && F > V || V > $ && V > F;
  }
  return I.derive(() => {
    var _a, _b;
    s.deformedShape.val, s.secColumns.val, s.secBeams.val, s.secFloor.val;
    const q = s.secColumns.rawVal, B = s.secBeams.rawVal;
    if (!q && !B) {
      l.children.forEach((z) => {
        z instanceof xt && z.dispose();
      }), l.clear();
      return;
    }
    l.children.forEach((z) => {
      z instanceof xt && z.dispose();
    }), l.clear();
    const $ = (_a = e.elements) == null ? void 0 : _a.val, V = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!$ || !V) return;
    const F = V.sectionShapes, L = s.secFloor.rawVal;
    $.forEach((z, Z) => {
      if (z.length !== 2) return;
      const Q = x.rawVal[z[0]], D = x.rawVal[z[1]];
      if (!Q || !D) return;
      const me = de(Q, D);
      if (me && !q || !me && !B) return;
      if (L >= 0) {
        const J = Math.min(Q[1], D[1]);
        Math.max(Q[1], D[1]);
        const Se = s.gridSize.rawVal || 3;
        if (Math.floor(J / Se + 0.01) !== L) return;
      }
      const E = F == null ? void 0 : F.get(Z);
      if (!E) return;
      const N = [(Q[0] + D[0]) / 2, (Q[1] + D[1]) / 2, (Q[2] + D[2]) / 2], oe = Tn(Q, D);
      if (E.type === "CFT") {
        const J = P(E.b, E.h, E.tw ?? E.b * 0.05), Se = new Oe(J.concFill, ne);
        Se.position.set(...N), Se.rotation.setFromRotationMatrix(oe), l.add(Se);
        const ge = new Oe(J.steelFillGeom, ie);
        ge.position.set(...N), ge.rotation.setFromRotationMatrix(oe), l.add(ge);
        const ve = new kt(J.outline, G);
        ve.position.set(...N), ve.rotation.setFromRotationMatrix(oe), l.add(ve);
      } else {
        let J, Se, ge;
        switch (E.type) {
          case "rect":
            J = b(E.b, E.h), Se = ne, ge = fe;
            break;
          case "circ":
            J = w(E.d), Se = ne, ge = fe;
            break;
          case "I":
            J = g(E.b, E.h, E.tf, E.tw), Se = ie, ge = G;
            break;
          case "HSS":
            J = M(E.b, E.h, E.tw ?? E.b * 0.05), Se = ie, ge = G;
            break;
          case "CFT":
            J = P(E.b, E.h, E.tw ?? E.b * 0.05), Se = ie, ge = G;
            break;
          case "L":
            J = m(E.b ?? E.h, E.h, E.t ?? E.tw ?? 3e-3), Se = ie, ge = G;
            break;
          case "2L":
            J = U(E.b ?? E.h, E.h, E.t ?? E.tw ?? 3e-3, E.dis ?? 0.01), Se = ie, ge = G;
            break;
          case "C":
          case "coldC":
            J = O(E.b, E.h, E.tf ?? E.t ?? 3e-3, E.tw ?? E.t ?? 3e-3), Se = ie, ge = G;
            break;
          case "2C":
            J = ye(E.b, E.h, E.tf ?? 5e-3, E.tw ?? 5e-3, E.dis ?? 0.01), Se = ie, ge = G;
            break;
          case "T":
            J = we(E.b, E.h, E.tf ?? 0.01, E.tw ?? 6e-3), Se = ie, ge = G;
            break;
          case "pipe":
            J = C(E.d, E.tw ?? E.d * 0.05), Se = ie, ge = G;
            break;
          default:
            return;
        }
        const ve = new Oe(J.fill, Se);
        ve.position.set(...N), ve.rotation.setFromRotationMatrix(oe), l.add(ve);
        const Pe = new kt(J.outline, ge);
        Pe.position.set(...N), Pe.rotation.setFromRotationMatrix(oe), l.add(Pe);
      }
      const le = Ro(E);
      if (le) {
        const Se = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(E.type) ? "#ff9900" : "#00ccff", ge = new xt(le, Se, "transparent");
        ge.position.set(N[0], N[1], N[2]);
        const ve = 0.05 * s.gridSize.rawVal * 0.5;
        ge.updateScale(ve * ((u == null ? void 0 : u.rawVal) ?? 1)), _.add(ge);
      }
    });
  }), u && I.derive(() => {
    if (u.val, !s.sections.rawVal) return;
    const q = 0.05 * s.gridSize.val * 0.5;
    _.children.forEach((B) => {
      B instanceof xt && B.updateScale(q * u.rawVal);
    });
  }), I.derive(() => {
    l.visible = s.sections.val;
  }), I.derive(() => {
    _.visible = s.sectionLabels.val;
  }), l;
}
class wn extends Je {
  constructor(s, x, u, l, _, b, w) {
    super();
    const g = new vn().moveTo(0, 0).lineTo(0, b[1]).lineTo(u, b[1]).lineTo(u, 0).lineTo(0, 0), M = g.getPoints(), P = new ce().setFromPoints(M);
    this.lines = new kt(P, new ct({ color: Gt().resultOutline })), this.lines.position.set(...s), this.lines.rotation.setFromRotationMatrix(l), w && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const m = new bn(g), U = new nt({ color: b[1] > 0 ? 24435 : 11411474, side: zt });
    this.mesh = new Oe(m, U), this.mesh.position.set(...s), this.mesh.rotation.setFromRotationMatrix(l), w && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new xt(`${_[1].toFixed(2)}`), this.normalizedResult = b, this.textPosition = ln([s, x]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(l), this.add(this.text);
  }
  updateScale(s) {
    this.lines.scale.set(1, s * 2, 1), this.mesh.scale.set(1, s * 2, 1), this.text.updateScale(s * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * s);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Qn extends Je {
  constructor(s, x, u, l, _, b, w) {
    super();
    const g = _[0] * u / (_[0] + _[1]), M = _[0] * _[1] > 0;
    if (this.text = new xt(`${_[0].toFixed(2)}`), this.text2 = new xt(`${(_[1] * -1).toFixed(2)}`), this.normalizedResult = b, this.textPosition = Vn(s, x), this.text2Position = Vn(x, s), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(l), this.text2.rotation.setFromRotationMatrix(l), this.add(this.text, this.text2), M) {
      const P = new vn().moveTo(0, 0).lineTo(0, b[0]).lineTo(g, 0).lineTo(0, 0), m = new vn().moveTo(g, 0).lineTo(u, -b[1]).lineTo(u, 0).lineTo(g, 0), U = P.getPoints(), O = m.getPoints(), ye = new ce().setFromPoints(U), we = new ce().setFromPoints(O), C = new ct({ color: Gt().resultOutline });
      this.lines = new kt(ye, C), this.lines2 = new kt(we, C), this.lines.position.set(...s), this.lines2.position.set(...s), this.lines.rotation.setFromRotationMatrix(l), this.lines2.rotation.setFromRotationMatrix(l), w && this.lines.rotateX(Math.PI / 2), w && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const ne = new bn(P), fe = new bn(m), ie = new nt({ color: b[0] > 0 ? 24435 : 11411474, side: zt }), G = new nt({ color: -b[1] > 0 ? 24435 : 11411474, side: zt });
      this.mesh = new Oe(ne, ie), this.mesh2 = new Oe(fe, G), this.mesh.position.set(...s), this.mesh2.position.set(...s), this.mesh.rotation.setFromRotationMatrix(l), this.mesh2.rotation.setFromRotationMatrix(l), w && this.mesh.rotateX(Math.PI / 2), w && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const P = new vn().moveTo(0, 0).lineTo(0, b[0]).lineTo(u, -b[1]).lineTo(u, 0).lineTo(0, 0), m = P.getPoints(), U = new ce().setFromPoints(m);
      this.lines = new kt(U, new ct({ color: Gt().resultOutline })), this.lines.position.set(...s), this.lines.rotation.setFromRotationMatrix(l), w && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const O = new bn(P), ye = new nt({ color: b[0] > 0 ? 24435 : 11411474, side: zt });
      this.mesh = new Oe(O, ye), this.mesh.position.set(...s), this.mesh.rotation.setFromRotationMatrix(l), w && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
    }
  }
  updateScale(s) {
    var _a, _b;
    this.lines.scale.set(1, s * 2, 1), (_a = this.lines2) == null ? void 0 : _a.scale.set(1, s * 2, 1), this.mesh.scale.set(1, s * 2, 1), (_b = this.mesh2) == null ? void 0 : _b.scale.set(1, s * 2, 1), this.text.updateScale(s * 0.6), this.text2.updateScale(s * 0.6), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.translateZ(this.normalizedResult[0] * 2.5 * s), this.text2.translateZ(-this.normalizedResult[1] * 2.5 * s);
  }
  dispose() {
    var _a, _b, _c, _d, _e, _f;
    this.lines.geometry.dispose(), (_a = this.lines2) == null ? void 0 : _a.geometry.dispose(), this.lines.material.dispose(), (_c = (_b = this.lines2) == null ? void 0 : _b.material) == null ? void 0 : _c.dispose(), this.mesh.geometry.dispose(), (_d = this.mesh2) == null ? void 0 : _d.geometry.dispose(), this.mesh.material.dispose(), (_f = (_e = this.mesh2) == null ? void 0 : _e.material) == null ? void 0 : _f.dispose(), this.text.dispose(), this.text2.dispose();
  }
}
var io = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(io || {});
function Xo(e, s, x, u) {
  const l = new Je(), _ = () => {
    const g = x.rawVal ?? [];
    if (g.length < 2) return s.gridSize.val * 0.5;
    let M = [1 / 0, 1 / 0, 1 / 0], P = [-1 / 0, -1 / 0, -1 / 0];
    for (const m of g) for (let U = 0; U < 3; U++) m[U] < M[U] && (M[U] = m[U]), m[U] > P[U] && (P[U] = m[U]);
    return Math.max(P[0] - M[0], P[1] - M[1], P[2] - M[2], 0.1);
  }, b = () => 0.025 * _(), w = { normals: wn, shearsY: wn, shearsZ: wn, torsions: wn, bendingsY: Qn, bendingsZ: Qn };
  return I.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, x.val, s.frameResults.val == "none") return;
    l.children.forEach((M) => M.dispose()), l.clear();
    const g = io[s.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[g]) == null ? void 0 : _b.forEach((M, P) => {
      var _a2, _b2;
      const m = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[P]) ?? [0, 1], U = x.rawVal[m[0]], O = x.rawVal[m[1]], ye = new v(...O).distanceTo(new v(...U)), we = Yo((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[g]), C = M == null ? void 0 : M.map((G) => G / (we === 0 ? 1 : we)), ne = Tn(U, O), fe = new w[g](U, O, ye, ne, M ?? [0, 0], C ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(g)), ie = b();
      fe.updateScale(ie * u.rawVal), l.add(fe);
    });
  }), I.derive(() => {
    if (u.val, s.frameResults.rawVal == "none") return;
    const g = b();
    l.children.forEach((M) => M.updateScale(g * u.rawVal));
  }), I.derive(() => {
    l.visible = s.frameResults.val != "none";
  }), l;
}
function Yo(e) {
  let s = 0;
  return e == null ? void 0 : e.forEach((x) => {
    const u = Math.max(...x ?? [0, 0]);
    u > s && (s = u);
  }), s;
}
class Do extends Je {
  constructor(s, x, u) {
    super();
    const l = x === In.reactions;
    u[0] && (this.xText1 = new xt(`${l ? "Fx" : "Dx"}: ` + u[0].toFixed(4))), u[3] && (this.xText2 = new xt(`${l ? "Mx" : "Rx"}: ` + u[3].toFixed(4))), u[1] && (this.yText1 = new xt(`${l ? "Fy" : "Dy"}: ` + u[1].toFixed(4))), u[4] && (this.yText2 = new xt(`${l ? "My" : "Ry"}: ` + u[4].toFixed(4))), u[2] && (this.zText1 = new xt(`${l ? "Fz" : "Dz"}: ` + u[2].toFixed(4))), u[5] && (this.zText2 = new xt(`${l ? "Mz" : "Rz"}: ` + u[5].toFixed(4))), (u[0] || u[3]) && (this.xArrow = new Wt(new v(1, 0, 0), new v(0, 0, 0), 1, 15637248, 0.3, 0.3)), (u[1] || u[4]) && (this.yArrow = new Wt(new v(0, 1, 0), new v(0, 0, 0), 1, 15637248, 0.3, 0.3)), (u[2] || u[5]) && (this.zArrow = new Wt(new v(0, 0, 1), new v(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...s), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
  }
  updateScale(s) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2;
    (_a = this.xArrow) == null ? void 0 : _a.scale.set(s, s, s), (_b = this.yArrow) == null ? void 0 : _b.scale.set(s, s, s), (_c = this.zArrow) == null ? void 0 : _c.scale.set(s, s, s), (_d = this.xText1) == null ? void 0 : _d.position.set(1.3 * s, 0, 0), (_e = this.xText2) == null ? void 0 : _e.position.set(1.3 * s, 0, 0.5 * s), (_f = this.yText1) == null ? void 0 : _f.position.set(0, 1.3 * s, 0), (_g = this.yText2) == null ? void 0 : _g.position.set(0, 1.3 * s, 0.5 * s), (_h = this.zText1) == null ? void 0 : _h.position.set(0, 0, 1.3 * s), (_i = this.zText2) == null ? void 0 : _i.position.set(0, 0, 1.3 * s + 0.5 * s), (_j = this.xText1) == null ? void 0 : _j.updateScale(0.4 * s), (_k = this.xText2) == null ? void 0 : _k.updateScale(0.4 * s), (_l = this.yText1) == null ? void 0 : _l.updateScale(0.4 * s), (_m = this.yText2) == null ? void 0 : _m.updateScale(0.4 * s), (_n = this.zText1) == null ? void 0 : _n.updateScale(0.4 * s), (_o2 = this.zText2) == null ? void 0 : _o2.updateScale(0.4 * s);
  }
  dispose() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    (_a = this.xArrow) == null ? void 0 : _a.dispose(), (_b = this.yArrow) == null ? void 0 : _b.dispose(), (_c = this.zArrow) == null ? void 0 : _c.dispose(), (_d = this.xText1) == null ? void 0 : _d.dispose(), (_e = this.xText2) == null ? void 0 : _e.dispose(), (_f = this.yText1) == null ? void 0 : _f.dispose(), (_g = this.yText2) == null ? void 0 : _g.dispose(), (_h = this.zText1) == null ? void 0 : _h.dispose(), (_i = this.zText2) == null ? void 0 : _i.dispose();
  }
}
var In = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(In || {});
function No(e, s, x, u) {
  const l = new Je();
  return I.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, s.nodeResults.val == "none") return;
    l.children.forEach((w) => w.dispose()), l.clear();
    const _ = In[s.nodeResults.rawVal], b = 0.05 * s.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[_]) == null ? void 0 : _b.forEach((w, g) => {
      const M = new Do(x.rawVal[g], _, w ?? [0, 0, 0, 0, 0, 0]);
      M.updateScale(b * u.rawVal), l.add(M);
    });
  }), I.derive(() => {
    if (u.val, s.nodeResults.rawVal == "none") return;
    const _ = 0.05 * s.gridSize.val;
    l.children.forEach((b) => b.updateScale(_ * u.rawVal));
  }), I.derive(() => {
    l.visible = s.nodeResults.val != "none";
  }), l;
}
function Zo({ drawingObj: e, gridObj: s, scene: x, getActiveCamera: u, controls: l, gridSize: _, derivedDisplayScale: b, rendererElm: w, viewerRender: g }) {
  const M = new fo(), P = new ho(), m = (n) => {
    const o = w.getBoundingClientRect(), a = n.clientX - o.left, t = n.clientY - o.top, f = o.width || 1, d = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const i = f / 2;
      if (a >= i) return P.x = (a - i) / i * 2 - 1, P.y = -(t / d) * 2 + 1, window.__hekatanSplitCamera ?? u();
      P.x = a / i * 2 - 1;
    } else P.x = a / f * 2 - 1;
    return P.y = -(t / d) * 2 + 1, u();
  }, U = new Oe(new fn(1e4, 1e4), new nt({ side: zt, transparent: true, opacity: 0, depthWrite: false }));
  U.visible = true, U.frustumCulled = false, x.add(U);
  const O = (n, o, a) => {
    const t = new Oe(new fn(1e4, 1e4), new nt({ side: zt, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, a), t.visible = false, t.frustumCulled = false, x.add(t), t;
  }, ye = O(Math.PI / 2, 0, 0), we = O(0, Math.PI / 2, 0), C = () => {
    if (ye.visible = !!window.__hekatanGridPlaneXZ, we.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanShowOrthoPlanes !== false && Ue.visible) {
      const a = M.intersectObjects([Ue, A, W], false);
      if (a.length > 0) return a;
    }
    const o = [U];
    return ye.visible && o.push(ye), we.visible && o.push(we), _e.visible && ke.length > 0 && o.push(...ke), M.intersectObjects(o, false);
  }, ne = new yn(new ce(), new gn()), fe = new yn(new ce(), new gn({ color: "gray", sizeAttenuation: false, size: 6 })), ie = new yn(new ce(), new gn({ color: "orange", size: 0.1 }));
  x.add(ie);
  const G = document.createElement("input");
  G.id = "hk-rubber-label", G.type = "text", G.spellcheck = false, G.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, G.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none"].join(";") + ";", document.body.appendChild(G);
  let de = null, q = null, B = false;
  const $ = new v(), V = (n, o, a, t, f, d) => {
    const k = t - n, i = f - o, r = d - a, p = Math.hypot(k, i, r);
    if (p < 0.01) {
      G.style.display = "none";
      return;
    }
    de = [n, o, a], q = [k / p, i / p, r / p], $.set((n + t) / 2, (o + f) / 2, (a + d) / 2), $.project(u());
    const y = w.getBoundingClientRect(), c = y.left + ($.x * 0.5 + 0.5) * y.width, h = y.top + (-$.y * 0.5 + 0.5) * y.height;
    if (G.style.left = c + "px", G.style.top = h + "px", G.style.display = "block", !B) {
      if (G.value = `${p.toFixed(2)} m`, document.activeElement !== G) {
        const S = document.activeElement;
        S && (S.tagName === "INPUT" || S.tagName === "TEXTAREA") && S !== G || G.focus({ preventScroll: true });
      }
      try {
        G.select();
      } catch {
      }
    }
  }, F = () => {
    G.style.display = "none", de = null, q = null, B = false, document.activeElement === G && G.blur();
  }, L = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      bt = n, he(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), G.blur();
      return;
    }
    if (!de || !q || !e.polylines) return;
    let a = q[0], t = q[1], f = q[2];
    Ce === "x" ? (a = Math.sign(a) || 1, t = 0, f = 0) : Ce === "y" ? (a = 0, t = Math.sign(t) || 1, f = 0) : Ce === "z" && (a = 0, t = 0, f = Math.sign(f) || 1);
    const d = de[0] + a * n, k = de[1] + t * n, i = de[2] + f * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [d, k, i]];
    const r = e.polylines.rawVal, p = r.length ? r[r.length - 1] : [];
    e.polylines.val = [...r.slice(0, -1), [...p, e.points.rawVal.length - 1]], G.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    g();
  }, z = (n) => {
    let o = n.trim().toLowerCase().replace(/m$/g, "").trim();
    if (!o) return null;
    const a = o.startsWith("@");
    if (a && (o = o.slice(1)), o.includes("<")) {
      const f = o.split("<").map((d) => parseFloat(d.trim()));
      if (f.some(isNaN)) return null;
      if (f.length === 2) {
        const [d, k] = f;
        return a ? { kind: "relPolar", L: d, ang: k } : { kind: "absPolar", L: d, ang: k };
      }
      if (f.length === 3 && a) {
        const [d, k, i] = f;
        return { kind: "relSpherical", L: d, az: k, el: i };
      }
      return null;
    }
    if (o.includes(",")) {
      const f = o.split(",").map((r) => parseFloat(r.trim()));
      if (f.some(isNaN)) return null;
      const [d, k, i = 0] = f;
      return a ? { kind: "relCart", dx: d, dy: k, dz: i } : { kind: "absCart", x: d, y: k, z: i };
    }
    const t = parseFloat(o);
    return isNaN(t) || t <= 0 ? null : { kind: "length", L: t };
  }, Z = (n) => {
    if (!n) return null;
    if (n.kind === "absCart") return [n.x, n.y, n.z];
    if (n.kind === "relCart") return de ? [de[0] + n.dx, de[1] + n.dy, de[2] + n.dz] : null;
    if (n.kind === "absPolar") {
      const o = n.ang * Math.PI / 180;
      return [n.L * Math.cos(o), n.L * Math.sin(o), 0];
    }
    if (n.kind === "relPolar") {
      if (!de) return null;
      const o = n.ang * Math.PI / 180;
      return [de[0] + n.L * Math.cos(o), de[1] + n.L * Math.sin(o), de[2]];
    }
    if (n.kind === "relSpherical") {
      if (!de) return null;
      const o = n.az * Math.PI / 180, a = n.el * Math.PI / 180, t = n.L * Math.cos(a);
      return [de[0] + t * Math.cos(o), de[1] + t * Math.sin(o), de[2] + n.L * Math.sin(a)];
    }
    return null;
  }, Q = (n) => {
    var _a;
    if (!e.polylines) return;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, n];
    const o = e.polylines.rawVal, a = o.length ? o[o.length - 1] : [];
    e.polylines.val = [...o.slice(0, -1), [...a, e.points.rawVal.length - 1]], G.blur();
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    g();
  };
  G.addEventListener("keydown", (n) => {
    if (n.key === "Enter") {
      n.preventDefault();
      const a = z(G.value);
      if (!a) return;
      if (B = false, a.kind === "length") L(a.L), he(`\u270F DDE ${a.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = Z(a);
        if (!t) return;
        Q(t);
        const f = a.kind;
        he(`\u270F ${f} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
      }
      return;
    }
    if (n.key === "Escape") {
      n.preventDefault(), B = false, G.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!B && G.style.display === "block") try {
          G.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && (B = true);
  }), window.addEventListener("keydown", (n) => {
    if (!de || !q || document.activeElement === G) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (G.value = n.key, G.focus(), G.setSelectionRange(1, 1), n.preventDefault());
  });
  const D = document.createElement("div");
  D.id = "hk-coord-readout", D.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", D.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(D);
  const me = document.createElement("div");
  me.id = "hk-coord-fixed", me.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", me.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(me);
  const E = new kt(new ce().setFromPoints([new v(0, 0, 0), new v(0, 0, 0)]), new sn({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  E.frustumCulled = false, E.visible = false, x.add(E);
  const N = new Je();
  N.frustumCulled = false, N.visible = false, x.add(N);
  const oe = (n) => {
    const o = new ce().setFromPoints([new v(0, 0, 0), new v(0, 0, 0)]), a = new sn({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new kt(o, a);
  }, le = oe(16711680), J = oe(65280), Se = oe(35071);
  N.add(le, J, Se);
  const ge = (n) => {
    const o = new ce().setFromPoints([new v(0, 0, 0), new v(0, 0, 0), new v(0, 0, 0), new v(0, 0, 0)]), a = new ct({ color: n, transparent: true, opacity: 0.45, depthTest: false }), t = new so(o, a);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, ve = ge(3462041), Pe = ge(16724804), Be = ge(6333946), et = new Je();
  et.frustumCulled = false, et.visible = false, x.add(et), et.add(ve, Pe, Be);
  const yt = (n) => {
    const o = new fn(1, 1), a = new nt({ color: n, transparent: true, opacity: 0.06, side: zt, depthWrite: false }), t = new Oe(o, a);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, Ue = yt(3462041), A = yt(16724804), W = yt(6333946);
  et.add(Ue, A, W);
  const ee = (n, o, a, t) => {
    n.scale.set(2 * t, 2 * t, 1), a === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : a === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, se = document.createElement("div");
  se.id = "hk-refplane-badge", se.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(se), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, et.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], f = e.points.rawVal ?? [], d = o && o.length === 3 ? o : t.length > 0 && f[t[t.length - 1]] ? f[t[t.length - 1]] : [0, 0, 0], k = window.__hekatanOrthoExt ?? 8;
      Xe(ve, d, "xy", k), Xe(Pe, d, "xz", k), Xe(Be, d, "yz", k), ee(Ue, d, "xy", k), ee(A, d, "xz", k), ee(W, d, "yz", k), Ue.material.opacity = 0.1, A.material.opacity = 0.1, W.material.opacity = 0.1;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    g();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !et.visible) {
      g();
      return;
    }
    const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], f = e.points.rawVal ?? [], d = o && o.length === 3 ? o : t.length > 0 && f[t[t.length - 1]] ? f[t[t.length - 1]] : [0, 0, 0];
    Xe(ve, d, "xy", n), Xe(Pe, d, "xz", n), Xe(Be, d, "yz", n), ee(Ue, d, "xy", n), ee(A, d, "xz", n), ee(W, d, "yz", n), g();
  };
  const Ve = (n) => {
    if (Ue.material.opacity = n === "xy" ? 0.22 : 0.04, A.material.opacity = n === "xz" ? 0.22 : 0.04, W.material.opacity = n === "yz" ? 0.22 : 0.04, n) {
      const f = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      se.style.background = f.bg, se.style.color = f.text, se.textContent = `\u25A6 Plano ${n.toUpperCase()}`, se.style.display = "block";
    } else se.style.display = "none";
  }, Xe = (n, o, a, t) => {
    let f;
    a === "xy" ? f = [new v(o[0] - t, o[1] - t, o[2]), new v(o[0] + t, o[1] - t, o[2]), new v(o[0] + t, o[1] + t, o[2]), new v(o[0] - t, o[1] + t, o[2]), new v(o[0] - t, o[1] - t, o[2])] : a === "xz" ? f = [new v(o[0] - t, o[1], o[2] - t), new v(o[0] + t, o[1], o[2] - t), new v(o[0] + t, o[1], o[2] + t), new v(o[0] - t, o[1], o[2] + t), new v(o[0] - t, o[1], o[2] - t)] : f = [new v(o[0], o[1] - t, o[2] - t), new v(o[0], o[1] + t, o[2] - t), new v(o[0], o[1] + t, o[2] + t), new v(o[0], o[1] - t, o[2] + t), new v(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(f);
  };
  let Ce = null;
  window.__hekatanAxisLock = () => Ce;
  const Fe = document.createElement("div");
  Fe.id = "hk-axis-lock-badge", Fe.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "padding:4px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(20px,18px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(Fe);
  const Ft = () => {
    if (!Ce) {
      Fe.style.display = "none";
      return;
    }
    const n = { x: "#ff3344", y: "#34d399", z: "#60a5fa" };
    Fe.style.background = "rgba(15,23,42,0.92)", Fe.style.color = n[Ce], Fe.style.border = `1.5px solid ${n[Ce]}`, Fe.textContent = `\u{1F512} LOCK ${Ce.toUpperCase()}`, Fe.style.display = "block";
  };
  window.addEventListener("keydown", (n) => {
    var _a;
    const o = document.activeElement;
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== G) return;
    const a = n.key.toLowerCase();
    if (a === "x" || a === "y" || a === "z") Ce = Ce === a ? null : a, Ft(), n.preventDefault();
    else if (n.key === "Escape") {
      const t = document.activeElement;
      t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA") && t.blur(), Xn(), n.preventDefault();
    } else if (n.key === "F8") {
      n.preventDefault(), window.__hekatanOrthoMode = !window.__hekatanOrthoMode;
      const t = window.__hekatanOrthoMode;
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
      let f = document.getElementById("hk-ortho-frame");
      f || (f = document.createElement("div"), f.id = "hk-ortho-frame", f.style.cssText = ["position:fixed", "inset:0", "z-index:99996", "border:3px solid rgba(34,211,238,0.85)", "box-shadow:inset 0 0 24px rgba(34,211,238,0.35)", "pointer-events:none"].join(";") + ";", document.body.appendChild(f)), f.style.display = t ? "block" : "none";
      let d = document.getElementById("hk-ortho-badge");
      d || (d = document.createElement("div"), d.id = "hk-ortho-badge", d.style.cssText = ["position:fixed", "top:10px", "left:50%", "transform:translateX(-50%)", "z-index:99998", "padding:6px 16px", "background:rgba(34,211,238,0.95)", "color:#0a1f24", "border-radius:6px", "border:2px solid rgba(8,145,178,1)", "box-shadow:0 4px 16px rgba(34,211,238,0.5)", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "pointer-events:none", "white-space:nowrap"].join(";") + ";", d.textContent = "\u22A5 ORTO ON (F8)", document.body.appendChild(d)), d.style.display = t ? "block" : "none";
    }
  });
  const Mt = new v(), Rt = new v(), Bt = new v(), Dt = (n) => {
    if (!Ce) return null;
    const o = n[0], a = n[1], t = n[2];
    return Ce === "x" ? (Mt.set(o - 1e4, a, t), Rt.set(o + 1e4, a, t)) : Ce === "y" ? (Mt.set(o, a - 1e4, t), Rt.set(o, a + 1e4, t)) : (Mt.set(o, a, t - 1e4), Rt.set(o, a, t + 1e4)), M.ray.distanceSqToSegment(Mt, Rt, null, Bt), Bt;
  };
  window.__hekatanProjectOnAxis = Dt;
  const X = new kt(new ce().setFromPoints([new v(0, 0, 0), new v(0, 0, 0)]), new ct({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  X.renderOrder = 998, X.frustumCulled = false, X.visible = false, x.add(X);
  let ae = -1, be = -1, te = -1;
  const ue = /* @__PURE__ */ new Set();
  window.__hekatanSelection = ue;
  const Ee = new kt(new ce().setFromPoints([new v(), new v()]), new ct({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  Ee.renderOrder = 997, Ee.frustumCulled = false, Ee.visible = false, x.add(Ee);
  const Re = new Oe(new Ot(0.02, 12, 12), new nt({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  Re.renderOrder = 998, Re.visible = false, x.add(Re);
  const Le = () => {
    if (!Re.visible) return;
    const n = u();
    let o;
    if (n.isOrthographicCamera) {
      const a = n, t = (a.top - a.bottom) / a.zoom;
      o = Math.max(0.05, t * 6e-3);
    } else {
      const a = n.position.distanceTo(Re.position);
      o = Math.max(0.05, a / 10);
    }
    Re.scale.setScalar(o);
  }, Te = new Je();
  Te.frustumCulled = false, x.add(Te);
  const Ae = 2282478;
  let qe = null;
  const ut = (n, o, a, t) => {
    if (!e.points) return -1;
    const f = e.points.rawVal;
    let d = -1, k = t;
    for (let i = 0; i < f.length; i++) {
      const r = f[i];
      if (!r) continue;
      const p = Math.hypot(n - r[0], o - r[1], a - r[2]);
      p < k && (k = p, d = i);
    }
    return d;
  }, Ke = () => {
    var _a, _b, _c, _d, _e2, _f, _g;
    for (; Te.children.length; ) {
      const k = Te.children.pop();
      (_b = (_a = k.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = k.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const k of ue) {
      const [i, ...r] = k.split(":");
      if (i === "pt") {
        const p = n[+r[0]];
        if (!p) continue;
        const y = new Oe(new Ot(0.025, 12, 12), new nt({ color: Ae, transparent: true, opacity: 0.9, depthTest: false }));
        y.position.set(p[0], p[1], p[2]), y.renderOrder = 999, y.__isSelectionPt = true, Te.add(y);
      } else if (i === "seg") {
        const p = o[+r[0]], y = n[p == null ? void 0 : p[+r[1]]], c = n[p == null ? void 0 : p[+r[1] + 1]];
        if (!y || !c) continue;
        const h = new ce().setFromPoints([new v(y[0], y[1], y[2]), new v(c[0], c[1], c[2])]), S = new kt(h, new ct({ color: Ae, transparent: true, opacity: 0.95, depthTest: false }));
        S.renderOrder = 999, Te.add(S);
      } else if (i === "poly") {
        const y = o[+r[0]].map((S) => {
          const Y = n[S];
          return Y ? new v(Y[0], Y[1], Y[2]) : null;
        }).filter(Boolean);
        if (y.length < 2) continue;
        const c = new ce().setFromPoints(y), h = new kt(c, new ct({ color: Ae, transparent: true, opacity: 0.95, depthTest: false }));
        h.renderOrder = 999, Te.add(h);
      } else if (i === "aux") {
        const p = t[+r[0]];
        if (!p || p.length !== 6) continue;
        const y = new ce().setFromPoints([new v(p[0], p[1], p[2]), new v(p[3], p[4], p[5])]), c = new kt(y, new ct({ color: Ae, transparent: true, opacity: 0.95, depthTest: false }));
        c.renderOrder = 999, Te.add(c);
      }
    }
    const f = window.__hekatanUpdateSelectionPtScale;
    f && f();
    const d = window.__hekatanRefreshPropsPane;
    d && d(), g();
  };
  window.__hekatanRefreshSelection = Ke, window.__hekatanClearSelection = () => {
    ue.clear(), Ke();
  };
  const ft = (n, o, a, t, f, d, k, i, r) => {
    const p = k - t, y = i - f, c = r - d, h = p * p + y * y + c * c;
    if (h < 1e-12) return Math.hypot(n - t, o - f, a - d);
    let S = ((n - t) * p + (o - f) * y + (a - d) * c) / h;
    S = Math.max(0, Math.min(1, S));
    const Y = t + S * p, K = f + S * y, H = d + S * c;
    return Math.hypot(n - Y, o - K, a - H);
  }, Ie = (n, o, a, t) => {
    if (!e.polylines) return null;
    const f = e.polylines.rawVal, d = e.points.rawVal;
    let k = -1, i = -1, r = t;
    for (let p = 0; p < f.length; p++) {
      const y = f[p];
      for (let c = 0; c < y.length - 1; c++) {
        const h = d[y[c]], S = d[y[c + 1]];
        if (!h || !S) continue;
        const Y = ft(n, o, a, h[0], h[1], h[2], S[0], S[1], S[2]);
        Y < r && (r = Y, k = p, i = c);
      }
    }
    return k >= 0 ? { polyIdx: k, segIdx: i, dist: r } : null;
  }, it = (n, o, a, t) => {
    const f = window.__hekatanDrawingAuxLines, d = (f == null ? void 0 : f.rawVal) ?? (f == null ? void 0 : f.val) ?? f ?? [];
    let k = -1, i = t;
    for (let r = 0; r < d.length; r++) {
      const p = d[r];
      if (!p || p.length !== 6) continue;
      const y = ft(n, o, a, p[0], p[1], p[2], p[3], p[4], p[5]);
      y < i && (i = y, k = r);
    }
    return k;
  }, tt = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      X.visible = false;
      return;
    }
    X.geometry.setFromPoints([new v(t[0], t[1], t[2]), new v(t[3], t[4], t[5])]), X.visible = true;
  }, Qt = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const a = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!a || a.length < 2) {
      X.visible = false;
      return;
    }
    const f = ((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false, d = [];
    if (f || o < 0 || o >= a.length - 1) for (const k of a) {
      const i = t[k];
      i && d.push(new v(i[0], i[1], i[2]));
    }
    else {
      const k = t[a[o]], i = t[a[o + 1]];
      k && d.push(new v(k[0], k[1], k[2])), i && d.push(new v(i[0], i[1], i[2]));
    }
    X.geometry.setFromPoints(d), X.visible = true;
  }, Qe = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const a = o.filter((r, p) => p !== n), t = /* @__PURE__ */ new Set();
    for (const r of a) for (const p of r) t.add(p);
    const f = e.points.rawVal, d = /* @__PURE__ */ new Map(), k = [];
    for (let r = 0; r < f.length; r++) t.has(r) && (d.set(r, k.length), k.push(f[r]));
    const i = a.map((r) => r.map((p) => d.get(p)).filter((p) => p !== void 0));
    e.points.val = k, e.polylines.val = i, e.areas && (e.areas.val = e.areas.rawVal.filter((r) => r !== n).map((r) => r > n ? r - 1 : r)), X.visible = false, ae = -1, be = -1;
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
  }, Nt = (n, o) => {
    var _a, _b, _c;
    if (!e.polylines) return;
    const a = e.polylines.rawVal;
    if (n < 0 || n >= a.length) return;
    if (((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false) {
      Qe(n);
      return;
    }
    const f = a[n];
    if (o < 0 || o >= f.length - 1) return;
    if (f.length === 2) {
      Qe(n);
      return;
    }
    let d;
    o === 0 ? d = [f.slice(1)] : o === f.length - 2 ? d = [f.slice(0, -1)] : d = [f.slice(0, o + 1), f.slice(o + 1)];
    const k = [...a.slice(0, n), ...d, ...a.slice(n + 1)], i = /* @__PURE__ */ new Set();
    for (const h of k) for (const S of h) i.add(S);
    const r = e.points.rawVal, p = /* @__PURE__ */ new Map(), y = [];
    for (let h = 0; h < r.length; h++) i.has(h) && (p.set(h, y.length), y.push(r[h]));
    const c = k.map((h) => h.map((S) => p.get(S)).filter((S) => S !== void 0));
    if (e.points.val = y, e.polylines.val = c, e.areas) {
      const h = d.length - 1;
      e.areas.val = e.areas.rawVal.map((S) => S > n ? S + h : S);
    }
    X.visible = false, ae = -1, be = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  ne.geometry.setAttribute("position", new _t(e.points.rawVal.flat(), 3)), ne.geometry.computeBoundingSphere(), ne.frustumCulled = false, fe.frustumCulled = false, x.add(fe), U.position.set(0, 0, 0), U.rotateX(Math.PI / 2), U.geometry.rotateX(Math.PI / 2), U.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, a) => {
    if (e.points.val = [...e.points.rawVal, [n, o, a]], e.polylines) {
      const t = e.polylines.rawVal, f = t.length ? t[t.length - 1] : [];
      e.polylines.val = [...t.slice(0, -1), [...f, e.points.rawVal.length - 1]];
    }
  }, window.__hekatanDrawNewPoly = () => {
    var _a;
    if (!e.polylines) return;
    const n = e.polylines.rawVal;
    ((_a = n[n.length - 1]) == null ? void 0 : _a.length) !== 0 && (e.polylines.val = [...n, []]);
  }, window.__hekatanDrawCircle = (n, o, a, t, f = window.__hekatanArcSegs ?? 12, d = "xy") => {
    var _a;
    const k = Math.max(4, Math.round(f)), i = e.points.rawVal.length, r = [];
    for (let p = 0; p < k; p++) {
      const y = 2 * Math.PI * p / k, c = t * Math.cos(y), h = t * Math.sin(y);
      let S;
      d === "xy" ? S = [n + c, o + h, a] : d === "xz" ? S = [n + c, o, a + h] : S = [n, o + c, a + h], r.push(S);
    }
    if (e.points.val = [...e.points.rawVal, ...r], e.polylines) {
      const p = [...r.map((c, h) => i + h), i], y = e.polylines.rawVal;
      ((_a = y[y.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...y, p, []] : e.polylines.val = [...y.slice(0, -1), p, []];
    }
  }, window.__hekatanDrawArc = (n, o, a, t = window.__hekatanArcSegs ?? 12) => {
    const f = Math.max(4, Math.round(t)), d = new v(...n), k = new v(...o), i = new v(...a), r = new v().subVectors(k, d), p = new v().subVectors(i, d), y = new v().crossVectors(r, p).normalize(), c = new v().addVectors(d, k).multiplyScalar(0.5), h = new v().addVectors(k, i).multiplyScalar(0.5), S = new v().crossVectors(r, y).normalize(), Y = new v().crossVectors(new v().subVectors(i, k), y).normalize(), K = new v().subVectors(h, c), H = S.x * Y.y - S.y * Y.x;
    let T;
    if (Math.abs(H) > 1e-9) {
      const He = (K.x * Y.y - K.y * Y.x) / H;
      T = new v().addVectors(c, S.clone().multiplyScalar(He));
    } else T = c.clone();
    const j = d.distanceTo(T), Me = new v().subVectors(d, T), st = new v().subVectors(i, T), xe = Math.acos(Math.max(-1, Math.min(1, Me.dot(st) / (j * j)))), $e = e.points.rawVal.length, wt = [], St = y.clone();
    for (let He = 0; He <= f; He++) {
      const at = He / f, Lt = xe * at, Tt = new Dn().setFromAxisAngle(St, Lt), Ct = Me.clone().applyQuaternion(Tt).add(T);
      wt.push([Ct.x, Ct.y, Ct.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...wt], e.polylines) {
      const He = wt.map((Lt, Tt) => $e + Tt), at = e.polylines.rawVal;
      e.polylines.val = [...at.slice(0, -1), He, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, a = 1, t = 6, f = 6) => {
    const d = Math.min(n[0], o[0]), k = Math.max(n[0], o[0]), i = Math.min(n[1], o[1]), r = Math.max(n[1], o[1]), p = (n[2] + o[2]) / 2, y = k - d, c = r - i, h = Math.min(a, y / 2 - 0.01, c / 2 - 0.01);
    if (h <= 0) return;
    const S = e.points.rawVal.length, Y = [], K = [], H = (T, j) => {
      Y.push([T, j, p]), K.push(S + Y.length - 1);
    };
    for (let T = 0; T <= f; T++) H(d + h + (y - 2 * h) * T / f, i);
    for (let T = 1; T <= t; T++) {
      const j = -Math.PI / 2 + Math.PI / 2 * T / t;
      H(k - h + h * Math.cos(j), i + h + h * Math.sin(j));
    }
    for (let T = 1; T <= f; T++) H(k, i + h + (c - 2 * h) * T / f);
    for (let T = 1; T <= t; T++) {
      const j = 0 + Math.PI / 2 * T / t;
      H(k - h + h * Math.cos(j), r - h + h * Math.sin(j));
    }
    for (let T = 1; T <= f; T++) H(k - h - (y - 2 * h) * T / f, r);
    for (let T = 1; T <= t; T++) {
      const j = Math.PI / 2 + Math.PI / 2 * T / t;
      H(d + h + h * Math.cos(j), r - h + h * Math.sin(j));
    }
    for (let T = 1; T <= f; T++) H(d, r - h - (c - 2 * h) * T / f);
    for (let T = 1; T <= t; T++) {
      const j = Math.PI + Math.PI / 2 * T / t;
      H(d + h + h * Math.cos(j), i + h + h * Math.sin(j));
    }
    if (K.push(S), e.points.val = [...e.points.rawVal, ...Y], e.polylines) {
      const T = e.polylines.rawVal;
      e.polylines.val = [...T.slice(0, -1), K, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const a = e.points.rawVal.length, t = n[0], f = n[1], d = n[2], k = o[0], i = o[1], r = o[2];
    let p;
    if (Math.abs(d - r) < 1e-6 ? p = [[t, f, d], [k, f, d], [k, i, d], [t, i, d]] : Math.abs(f - i) < 1e-6 ? p = [[t, f, d], [k, f, d], [k, f, r], [t, f, r]] : p = [[t, f, d], [t, i, d], [t, i, r], [t, f, r]], e.points.val = [...e.points.rawVal, ...p], e.polylines) {
      const y = [a, a + 1, a + 2, a + 3, a], c = e.polylines.rawVal;
      e.polylines.val = [...c.slice(0, -1), y, []];
    }
  };
  const lt = new Je();
  lt.visible = false, x.add(lt), window.__hekatanShowAxes = (n, o, a = 12, t = 2) => {
    var _a, _b;
    for (; lt.children.length; ) {
      const y = lt.children.pop();
      (_a = y.geometry) == null ? void 0 : _a.dispose(), (_b = y.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const f = Math.min(...o) - t, d = Math.max(...o) + t, k = Math.min(...n) - t, i = Math.max(...n) + t, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", p = (y, c, h, S, Y) => {
      const K = document.createElement("canvas");
      K.width = 64, K.height = 32;
      const H = K.getContext("2d");
      H.fillStyle = Y, H.font = "bold 22px sans-serif", H.textAlign = "center", H.fillText(y, 32, 26);
      const T = new Nn(K), j = new Zn({ map: T, transparent: true }), Me = new Un(j);
      return Me.position.set(c, h, S), Me.scale.set(1.2, 0.6, 1), Me;
    };
    n.forEach((y, c) => {
      const h = c < r.length ? r[c] : `X${c}`, S = new ce().setFromPoints([new v(y, f, 0), new v(y, d, 0), new v(y, f, 0), new v(y, f, a)]), Y = new sn({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), K = new Kt(S, Y);
      K.computeLineDistances(), lt.add(K), lt.add(p(h, y, f - 0.5, 0, "#60a5fa")), lt.add(p(h, y, d + 0.5, 0, "#60a5fa"));
    }), o.forEach((y, c) => {
      const h = `${c + 1}`, S = new ce().setFromPoints([new v(k, y, 0), new v(i, y, 0), new v(k, y, 0), new v(k, y, a)]), Y = new sn({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), K = new Kt(S, Y);
      K.computeLineDistances(), lt.add(K), lt.add(p(h, k - 0.5, y, 0, "#fb7185")), lt.add(p(h, i + 0.5, y, 0, "#fb7185"));
    }), lt.visible = true, g();
  }, window.__hekatanHideAxes = () => {
    lt.visible = false, g();
  };
  const _e = new Je();
  _e.visible = false, x.add(_e);
  let ke = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, a = 0, t = 0) => {
    var _a, _b;
    for (; _e.children.length; ) {
      const d = _e.children.pop();
      (_a = d.geometry) == null ? void 0 : _a.dispose(), (_b = d.material) == null ? void 0 : _b.dispose();
    }
    ke.forEach((d) => {
      x.remove(d), d.geometry.dispose(), d.material.dispose();
    }), ke = [];
    const f = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((d, k) => {
      const i = f[k % f.length], r = o / 2, p = [new v(a - r, t - r, d), new v(a + r, t - r, d), new v(a + r, t + r, d), new v(a - r, t + r, d), new v(a - r, t - r, d)], y = new ce().setFromPoints(p), c = new ct({ color: i, transparent: true, opacity: 0.55 });
      _e.add(new kt(y, c));
      const h = document.createElement("canvas");
      h.width = 128, h.height = 32;
      const S = h.getContext("2d");
      S.fillStyle = `#${i.toString(16).padStart(6, "0")}`, S.font = "bold 18px sans-serif", S.fillText(`Z = ${d} m`, 4, 22);
      const Y = new Nn(h), K = new Zn({ map: Y, transparent: true }), H = new Un(K);
      H.position.set(a - r - 1.5, t - r - 1.5, d), H.scale.set(2.5, 0.6, 1), _e.add(H);
      const T = new fn(1e4, 1e4), j = new nt({ visible: false, side: zt }), Me = new Oe(T, j);
      Me.position.set(0, 0, d), Me.frustumCulled = false, Me.userData = { refPlaneZ: d }, x.add(Me), ke.push(Me);
    }), _e.visible = true, g();
  }, window.__hekatanHideRefPlanes = () => {
    _e.visible = false, ke.forEach((n) => {
      n.visible = false;
    }), g();
  };
  const pe = new Je();
  pe.frustumCulled = false, x.add(pe);
  const De = () => {
    var _a, _b, _c, _d;
    for (; pe.children.length; ) {
      const a = pe.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (a.length !== 6) continue;
      const t = new ce().setFromPoints([new v(a[0], a[1], a[2]), new v(a[3], a[4], a[5])]), f = new sn({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), d = new kt(t, f);
      d.computeLineDistances(), pe.add(d);
    }
  };
  I.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, De(), g());
  });
  const re = new Je();
  re.frustumCulled = false, x.add(re);
  const Ge = () => {
    var _a, _b, _c, _d;
    for (; re.children.length; ) {
      const a = re.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxPoints, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (!a || a.length !== 3) continue;
      const t = new Oe(new Ot(0.025, 12, 12), new nt({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(a[0], a[1], a[2]), t.renderOrder = 996;
      const d = u().position.distanceTo(t.position);
      t.scale.setScalar(Math.max(0.05, d / 10)), re.add(t);
    }
  };
  I.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, Ge(), g());
  }), l.addEventListener("change", () => {
    const n = u();
    re.children.forEach((o) => {
      const a = n.position.distanceTo(o.position);
      o.scale.setScalar(Math.max(0.05, a / 10));
    });
  }), window.__hekatanRenderAuxPoints = Ge;
  const ze = new Je(), Et = new Oe(new Ot(0.01, 12, 12), new nt({ color: 16724804, transparent: true, opacity: 0.95 })), Ne = new Oe(new Ot(0.015, 12, 12), new nt({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  ze.add(Et, Ne);
  const Ye = 0.08, ht = (n, o, a) => {
    const t = new ce().setFromPoints([new v(...n), new v(...o)]);
    return new kt(t, new ct({ color: a, transparent: true, opacity: 0.7 }));
  };
  ze.add(ht([-Ye, 0, 0], [Ye, 0, 0], 16711680)), ze.add(ht([0, -Ye, 0], [0, Ye, 0], 65280)), ze.add(ht([0, 0, -Ye], [0, 0, Ye], 35071)), ze.visible = false, ze.frustumCulled = false, x.add(ze);
  const gt = 40, Zt = 2.5, $t = () => {
    if (!ze.visible) return;
    const o = u().position.distanceTo(ze.position), a = Math.max(0.05, Math.min(Zt, o / gt));
    ze.scale.setScalar(a);
  }, At = () => {
    if (Te.children.length === 0) return;
    const n = u();
    Te.children.forEach((o) => {
      if (!o.__isSelectionPt) return;
      const a = n.position.distanceTo(o.position), t = Math.max(0.05, a / 10);
      o.scale.setScalar(t);
    });
  };
  window.__hekatanUpdateSelectionPtScale = At, l.addEventListener("change", () => {
    $t(), Re.visible && Le();
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = u().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / gt));
    }
    At();
  }), window.__hekatanShowSnap = (n, o, a) => {
    ze.position.set(n, o, a), ze.visible = true, $t(), g();
  }, window.__hekatanHideSnap = () => {
    ze.visible = false, g();
  }, w.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p;
    const o = m(n);
    if (!o) return;
    M.setFromCamera(P, o);
    const a = C();
    if (a.length) {
      const t = a[0].point, f = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, f);
      if (d) Rn(d.type, d.x, d.y, d.z), ze.position.set(d.x, d.y, d.z), ze.visible = true, t.set(d.x, d.y, d.z);
      else {
        Mn();
        const y = window.__hekatanSnapEnabled !== false, c = window.__hekatanSnap2D ?? 0.5;
        y && c > 0 && (t.x = Math.round(t.x / c) * c, t.y = Math.round(t.y / c) * c, t.z = Math.round(t.z / c) * c), ze.position.copy(t), ze.visible = true;
      }
      $t();
      const k = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (k === "select" || !k) {
        const y = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = ut(t.x, t.y, t.z, y), h = Ie(t.x, t.y, t.z, y), S = it(t.x, t.y, t.z, y);
        if (c >= 0) {
          const T = e.points.rawVal[c];
          Re.position.set(T[0], T[1], T[2]), Re.visible = true, Le(), Ee.visible = false, qe = { kind: "pt", a: c };
        } else if (h) {
          const T = e.points.rawVal, j = e.polylines.rawVal[h.polyIdx], Me = T[j[h.segIdx]], st = T[j[h.segIdx + 1]];
          Ee.geometry.setFromPoints([new v(Me[0], Me[1], Me[2]), new v(st[0], st[1], st[2])]), Ee.visible = true, Re.visible = false, qe = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(h.polyIdx)) ?? false ? { kind: "poly", a: h.polyIdx } : { kind: "seg", a: h.polyIdx, b: h.segIdx };
        } else if (S >= 0) {
          const j = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[S];
          j && (Ee.geometry.setFromPoints([new v(j[0], j[1], j[2]), new v(j[3], j[4], j[5])]), Ee.visible = true, Re.visible = false, qe = { kind: "aux", a: S });
        } else Ee.visible = false, Re.visible = false, qe = null;
        D.style.left = n.clientX + "px", D.style.top = n.clientY + "px", D.style.display = "block";
        let Y = t;
        if ((qe == null ? void 0 : qe.kind) === "pt") {
          const T = e.points.rawVal[qe.a];
          T && (Y = new v(T[0], T[1], T[2]));
        }
        const K = `X=${Y.x.toFixed(2)} Y=${Y.y.toFixed(2)} Z=${Y.z.toFixed(2)}`;
        if (qe) {
          const T = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          D.textContent = `${K}  \xB7  \u{1F5B1} Click \u2192 ${T[qe.kind]}`;
        } else D.textContent = K;
        const H = document.getElementById("hk-coord-fixed");
        H && (H.textContent = K), E.visible = false, N.visible = false, g();
        return;
      }
      if (k === "delete") {
        const y = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = Ie(t.x, t.y, t.z, y), h = it(t.x, t.y, t.z, y);
        let S = false;
        if (h >= 0) if (!c) S = true;
        else {
          const T = window.__hekatanDrawingAuxLines, Me = ((T == null ? void 0 : T.rawVal) ?? (T == null ? void 0 : T.val) ?? T ?? [])[h];
          ft(t.x, t.y, t.z, Me[0], Me[1], Me[2], Me[3], Me[4], Me[5]) < c.dist && (S = true);
        }
        S ? (te = h, ae = -1, be = -1, tt(h)) : c ? (ae = c.polyIdx, be = c.segIdx, te = -1, Qt(c.polyIdx, c.segIdx)) : (ae = -1, be = -1, te = -1, X.visible = false), E.visible = false, N.visible = false, F(), D.style.left = n.clientX + "px", D.style.top = n.clientY + "px", D.style.display = "block";
        const Y = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let K = "";
        S ? K = `\u{1F5D1} l\xEDnea aux #${te + 1}` : c ? K = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(c.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${c.polyIdx + 1}` : `\u{1F5D1} seg ${c.segIdx + 1} / poly #${c.polyIdx + 1}` : K = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", D.textContent = `${Y}  \xB7  ${K}`;
        const H = document.getElementById("hk-coord-fixed");
        H && (H.textContent = Y), g();
        return;
      } else X.visible = false, ae = -1, te = -1;
      D.style.left = n.clientX + "px", D.style.top = n.clientY + "px", D.style.display = "block";
      const i = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], r = i[i.length - 1] ?? [], p = e.points.rawVal ?? [];
      if (r.length > 0 && p[r[r.length - 1]]) {
        const y = r[r.length - 1], c = p[y], h = !!window.__hekatanOrthoMode;
        let S = Ce;
        if (!S && h) {
          const He = Math.abs(t.x - c[0]), at = Math.abs(t.y - c[1]), Lt = Math.abs(t.z - c[2]), Tt = (_k = a[0]) == null ? void 0 : _k.object;
          let Ct = null;
          Tt === Ue ? Ct = "xy" : Tt === A ? Ct = "xz" : Tt === W && (Ct = "yz"), Ct === "xy" ? S = He >= at ? "x" : "y" : Ct === "xz" ? S = He >= Lt ? "x" : "z" : Ct === "yz" ? S = at >= Lt ? "y" : "z" : S = He >= at && He >= Lt ? "x" : at >= Lt ? "y" : "z";
        }
        if (S) {
          const He = c[0], at = c[1], Lt = c[2];
          S === "x" ? t.set(t.x, at, Lt) : S === "y" ? t.set(He, t.y, Lt) : t.set(He, at, t.z);
          const Tt = !!Ce, _n2 = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[S];
          Fe.style.background = "rgba(15,23,42,0.92)", Fe.style.color = _n2, Fe.style.border = `1.5px solid ${_n2}`;
          const Pn = (_l = a[0]) == null ? void 0 : _l.object;
          let on = null;
          Pn === Ue ? on = "xy" : Pn === A ? on = "xz" : Pn === W && (on = "yz");
          const Yn = on ? ` (plano ${on.toUpperCase()})` : "";
          Fe.textContent = Tt ? `\u{1F512} LOCK ${S.toUpperCase()}${Yn}` : `\u22A5 ORTO ${S.toUpperCase()}${Yn}`, Fe.style.left = n.clientX + 20 + "px", Fe.style.top = n.clientY + 18 + "px", Fe.style.transform = "none", Fe.style.display = "block";
        } else Ce || (Fe.style.display = "none");
        const Y = Math.hypot(t.x - c[0], t.y - c[1], t.z - c[2]), K = Math.atan2(t.y - c[1], t.x - c[0]) * 180 / Math.PI, H = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        D.textContent = `${H} | \u0394L=${Y.toFixed(2)}m ${K.toFixed(0)}\xB0`;
        const T = document.getElementById("hk-coord-fixed");
        T && (T.textContent = H), E.geometry.setFromPoints([new v(c[0], c[1], c[2]), new v(t.x, t.y, t.z)]), (_m = E.computeLineDistances) == null ? void 0 : _m.call(E), E.visible = true, V(c[0], c[1], c[2], t.x, t.y, t.z);
        const j = window.__hekatanOrthoExt ?? 8, Me = window.__hekatanShowOrthoPlanes !== false;
        et.visible = Me, Me || Ve(null), Me && (Xe(ve, c, "xy", j), Xe(Pe, c, "xz", j), Xe(Be, c, "yz", j), ee(Ue, c, "xy", j), ee(A, c, "xz", j), ee(W, c, "yz", j));
        const st = Me ? M.intersectObjects([Ue, A, W], false) : [];
        let xe = null;
        if (st.length > 0) {
          const He = st[0].object;
          He === Ue ? xe = "xy" : He === A ? xe = "xz" : He === W && (xe = "yz");
        }
        Ve(xe), xe && (se.style.left = n.clientX + "px", se.style.top = n.clientY + "px"), le.geometry.setFromPoints([new v(c[0] - j, c[1], c[2]), new v(c[0] + j, c[1], c[2])]), (_n = le.computeLineDistances) == null ? void 0 : _n.call(le), J.geometry.setFromPoints([new v(c[0], c[1] - j, c[2]), new v(c[0], c[1] + j, c[2])]), (_o2 = J.computeLineDistances) == null ? void 0 : _o2.call(J), Se.geometry.setFromPoints([new v(c[0], c[1], c[2] - j), new v(c[0], c[1], c[2] + j)]), (_p = Se.computeLineDistances) == null ? void 0 : _p.call(Se), N.visible = true;
        const $e = le.material, wt = J.material, St = Se.material;
        S === "x" ? ($e.opacity = 0.95, wt.opacity = 0.1, St.opacity = 0.1) : S === "y" ? ($e.opacity = 0.1, wt.opacity = 0.95, St.opacity = 0.1) : S === "z" ? ($e.opacity = 0.1, wt.opacity = 0.1, St.opacity = 0.95) : ($e.opacity = 0.5, wt.opacity = 0.5, St.opacity = 0.5);
      } else {
        const y = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        D.textContent = y;
        const c = document.getElementById("hk-coord-fixed");
        if (c && (c.textContent = y), E.visible = false, N.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(k)) {
          if (de = null, q = null, G.style.left = n.clientX + 20 + "px", G.style.top = n.clientY - 28 + "px", G.style.display = "block", !B) {
            G.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const S = document.activeElement;
            !(S && (S.tagName === "INPUT" || S.tagName === "TEXTAREA") && S !== G) && document.activeElement !== G && G.focus({ preventScroll: true });
            try {
              G.select();
            } catch {
            }
          }
        } else F();
      }
      g();
    } else Mn(), D.style.display = "none", ze.visible = false, E.visible = false, N.visible = false, F(), g();
  }), I.derive(() => {
    e.gridTarget && (Uo(s, { position: new v(...e.gridTarget.val.position), quaternion: new Dn().setFromEuler(new Kn(...e.gridTarget.val.rotation)) }, g), U.position.set(...e.gridTarget.val.position), U.quaternion.setFromEuler(new Kn(...e.gridTarget.val.rotation)), U.updateMatrixWorld());
  }), I.derive(() => {
    ne.geometry.setAttribute("position", new _t(e.points.val.flat(), 3)), ne.geometry.computeBoundingSphere();
  }), I.derive(() => {
    const n = 0.05 * _ * 0.5 * b.val;
    M.params.Points.threshold = 0.4 * n;
  }), I.derive(() => {
    var _a;
    const n = e.points.val ?? [], a = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const d of a) {
      const [k, i, r] = n[d];
      t.push(k, i, r);
    }
    const f = new ce();
    f.setAttribute("position", new _t(t, 3)), ie.geometry.dispose(), ie.geometry = f;
  });
  let mt = false, Vt = 0;
  w.addEventListener("pointerdown", () => {
    mt = true;
  }), w.addEventListener("pointerup", () => {
    mt = false;
  }), w.addEventListener("pointermove", () => {
    mt && Vt++;
  });
  const dt = document.createElement("div");
  dt.id = "hk-window-select", dt.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(dt);
  let Pt = null, Xt = false, pt = null;
  const jt = (n, o, a, t, f) => {
    f ? (dt.style.borderColor = "#34d399", dt.style.borderStyle = "dashed", dt.style.background = "rgba(52, 211, 153, 0.10)") : (dt.style.borderColor = "#22d3ee", dt.style.borderStyle = "solid", dt.style.background = "rgba(34, 211, 238, 0.10)"), dt.style.left = Math.min(n, a) + "px", dt.style.top = Math.min(o, t) + "px", dt.style.width = Math.abs(a - n) + "px", dt.style.height = Math.abs(t - o) + "px", dt.style.display = "block";
  }, rn = (n, o, a, t, f) => {
    var _a, _b, _c, _d;
    const d = Math.min(n, a), k = Math.max(n, a), i = Math.min(o, t), r = Math.max(o, t), p = a < n, y = w.getBoundingClientRect(), c = u();
    c.updateMatrixWorld();
    const h = (xe) => {
      const $e = new v(xe[0], xe[1], xe[2]);
      return $e.project(c), { x: y.left + ($e.x * 0.5 + 0.5) * y.width, y: y.top + (-$e.y * 0.5 + 0.5) * y.height };
    }, S = (xe) => xe.x >= d && xe.x <= k && xe.y >= i && xe.y <= r, Y = (xe, $e) => !(xe.x < d && $e.x < d || xe.x > k && $e.x > k || xe.y < i && $e.y < i || xe.y > r && $e.y > r);
    f || ue.clear();
    let K = 0;
    const H = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let xe = 0; xe < H.length; xe++) {
      const $e = H[xe];
      $e && S(h($e)) && (ue.add(`pt:${xe}`), K++);
    }
    const T = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], j = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let xe = 0; xe < T.length; xe++) {
      const $e = T[xe], wt = j.includes(xe);
      let St = false;
      for (let He = 0; He < $e.length - 1; He++) {
        const at = H[$e[He]], Lt = H[$e[He + 1]];
        if (!at || !Lt) continue;
        const Tt = h(at), Ct = h(Lt);
        if (p ? S(Tt) || S(Ct) || Y(Tt, Ct) : S(Tt) && S(Ct)) {
          if (wt) {
            St = true;
            break;
          }
          ue.add(`seg:${xe}:${He}`), K++;
        }
      }
      wt && St && (ue.add(`poly:${xe}`), K++);
    }
    const st = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let xe = 0; xe < st.length; xe++) {
      const $e = st[xe];
      if (!$e || $e.length !== 6) continue;
      const wt = h([$e[0], $e[1], $e[2]]), St = h([$e[3], $e[4], $e[5]]);
      (p ? S(wt) || S(St) || Y(wt, St) : S(wt) && S(St)) && (ue.add(`aux:${xe}`), K++);
    }
    Ke(), he(`${p ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${K} item(s) ${f ? "agregados a" : "\u2192"} selecci\xF3n (total ${ue.size})`), dt.style.display = "none";
  }, qt = () => {
    pt && (pt = null, dt.style.display = "none", he("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = qt, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && pt && qt();
  });
  const cn = () => {
    var _a, _b, _c, _d;
    if (ue.size === 0) return false;
    const n = [...ue], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], a = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], f = window.__hekatanDrawingAuxLines, d = (f == null ? void 0 : f.rawVal) ?? [], k = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Set();
    for (const Y of n) {
      const [K, ...H] = Y.split(":");
      if (K === "pt") k.add(+H[0]);
      else if (K === "poly") i.add(+H[0]);
      else if (K === "seg") {
        const T = +H[0], j = +H[1];
        r.has(T) || r.set(T, /* @__PURE__ */ new Set()), r.get(T).add(j);
      } else K === "aux" && p.add(+H[0]);
    }
    let y = 0, c = [], h = [];
    const S = /* @__PURE__ */ new Map();
    for (let Y = 0; Y < a.length; Y++) {
      if (i.has(Y)) {
        y++;
        continue;
      }
      S.set(Y, c.length);
      const K = r.get(Y);
      if (K && K.size > 0) {
        let H = [];
        for (let T = 0; T < a[Y].length; T++) H.push(a[Y][T]), T < a[Y].length - 1 && K.has(T) && (H.length >= 2 && c.push(H), H = [], y++);
        (H.length >= 2 || H.length === 1) && c.push(H);
      } else c.push([...a[Y]]);
    }
    if (k.size > 0) {
      const Y = [], K = /* @__PURE__ */ new Map();
      for (let T = 0; T < o.length; T++) {
        if (k.has(T)) {
          y++;
          continue;
        }
        K.set(T, Y.length), Y.push([...o[T]]);
      }
      const H = [];
      for (const T of c) {
        let j = [];
        for (const Me of T) {
          const st = K.get(Me);
          st === void 0 ? (j.length >= 2 && H.push(j), j = []) : j.push(st);
        }
        j.length >= 2 && H.push(j);
      }
      c = H, e.points.val = Y;
    }
    for (const Y of t) {
      const K = S.get(Y);
      K !== void 0 && K < c.length && h.push(K);
    }
    if (e.polylines && (e.polylines.val = c), e.areas && (e.areas.val = h), p.size > 0 && f) {
      const Y = d.filter((K, H) => !p.has(H));
      "val" in f ? f.val = Y : window.__hekatanDrawingAuxLines = Y, y += p.size;
    }
    ue.clear(), Ke();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return he(`\u{1F5D1} ${y} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = cn, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) || ue.size !== 0 && (n.preventDefault(), cn());
  });
  const vt = document.createElement("div");
  vt.id = "hk-properties-pane";
  const en = "hk-props-pane-pos";
  let Ut = null;
  try {
    const n = localStorage.getItem(en);
    n && (Ut = JSON.parse(n));
  } catch {
  }
  vt.style.cssText = ["position:fixed", Ut ? `left:${Ut.left}px` : "left:50%", Ut ? `top:${Ut.top}px` : "top:8px", Ut ? "transform:none" : "transform:translateX(-50%)", "width:min(320px, calc(100vw - 32px))", "max-height:60vh", "overflow-y:auto", "z-index:201", "box-shadow:0 6px 24px rgba(0,0,0,0.45)", "border-radius:6px", "display:none"].join(";") + ";", document.body.appendChild(vt);
  const dn = () => {
    const n = vt.querySelector(".tp-rotv_b");
    if (!n || n.__hkDragWired) return;
    n.__hkDragWired = true, n.style.cursor = "move", n.style.userSelect = "none";
    let o = false, a = 0, t = 0, f = 0, d = 0;
    n.addEventListener("mousedown", (k) => {
      o = true, a = k.clientX, t = k.clientY;
      const i = vt.getBoundingClientRect();
      f = i.left, d = i.top, vt.style.transform = "none", vt.style.left = `${f}px`, vt.style.top = `${d}px`, k.preventDefault();
    }), window.addEventListener("mousemove", (k) => {
      if (!o) return;
      const i = k.clientX - a, r = k.clientY - t, p = Math.max(0, Math.min(window.innerWidth - 80, f + i)), y = Math.max(0, Math.min(window.innerHeight - 40, d + r));
      vt.style.left = `${p}px`, vt.style.top = `${y}px`;
    }), window.addEventListener("mouseup", () => {
      if (o) {
        o = false;
        try {
          localStorage.setItem(en, JSON.stringify({ left: parseFloat(vt.style.left), top: parseFloat(vt.style.top) }));
        } catch {
        }
      }
    });
  }, R = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 };
  let We = null;
  const ot = (n, o, a, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: a, value: t } }));
  }, pn = () => {
    if (We && (We.dispose(), We = null), ue.size === 0) {
      vt.style.display = "none";
      return;
    }
    const n = [...ue], o = n.filter((c) => c.startsWith("pt:")), a = n.filter((c) => c.startsWith("seg:")), t = n.filter((c) => c.startsWith("poly:")), f = n.filter((c) => c.startsWith("aux:")), d = o.length === n.length && o.length > 0, k = a.length === n.length && a.length > 0, i = t.length === n.length && t.length > 0, r = !d && !k && !i, p = [];
    o.length && p.push(`\u{1F535} ${o.length} nodo(s)`), a.length && p.push(`\u{1F4CF} ${a.length} segmento(s)`), t.length && p.push(`\u25AD ${t.length} \xE1rea(s)`), f.length && p.push(`\u250A ${f.length} aux`);
    const y = `\u{1F3AF} ${ue.size} item(s) \u2014 ${p.join(", ")}`;
    if (We = new no({ container: vt, title: y }), d) {
      const c = We.addFolder({ title: "\u{1F4CC} Restraints (DOFs)" });
      c.addBinding(R, "Ux"), c.addBinding(R, "Uy"), c.addBinding(R, "Uz"), c.addBinding(R, "Rx"), c.addBinding(R, "Ry"), c.addBinding(R, "Rz");
      const h = We.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      h.addBinding(R, "Kx", { label: "Kx", min: 0, step: 100 }), h.addBinding(R, "Ky", { label: "Ky", min: 0, step: 100 }), h.addBinding(R, "Kz", { label: "Kz", min: 0, step: 100 }), h.addBinding(R, "Krx", { label: "Krx", min: 0, step: 1e3 }), h.addBinding(R, "Kry", { label: "Kry", min: 0, step: 1e3 }), h.addBinding(R, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const S = We.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      S.addBinding(R, "Fx", { step: 0.1 }), S.addBinding(R, "Fy", { step: 0.1 }), S.addBinding(R, "Fz", { step: 0.1 }), S.addBinding(R, "Mx", { step: 0.1 }), S.addBinding(R, "My", { step: 0.1 }), S.addBinding(R, "Mz", { step: 0.1 }), We.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(R, "mass", { label: "m", min: 0, step: 1 }), We.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(R, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), We.addButton({ title: "\u2713 Aplicar a nodos seleccionados" }).on("click", () => {
        const H = [R.Ux, R.Uy, R.Uz, R.Rx, R.Ry, R.Rz];
        H.some((Me) => Me) && ot("nodes", o, "supports", H);
        const T = [R.Fx, R.Fy, R.Fz, R.Mx, R.My, R.Mz];
        T.some((Me) => Me !== 0) && ot("nodes", o, "loads", T);
        const j = [R.Kx, R.Ky, R.Kz, R.Krx, R.Kry, R.Krz];
        j.some((Me) => Me !== 0) && ot("nodes", o, "springs", j), R.mass !== 0 && ot("nodes", o, "mass", R.mass), R.diaphragm !== "Ninguno" && ot("nodes", o, "diaphragm", R.diaphragm), he(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    } else if (k) {
      const c = We.addFolder({ title: "\u{1F4CF} Secci\xF3n frame" });
      c.addBinding(R, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), c.addBinding(R, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const h = We.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      h.addBinding(R, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), h.addBinding(R, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), h.addBinding(R, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), h.addBinding(R, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), We.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(R, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), We.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(R, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const K = We.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      K.addBinding(R, "relMxI", { label: "Mx I" }), K.addBinding(R, "relMyI", { label: "My I" }), K.addBinding(R, "relMzI", { label: "Mz I" });
      const H = We.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      H.addBinding(R, "relMxJ", { label: "Mx J" }), H.addBinding(R, "relMyJ", { label: "My J" }), H.addBinding(R, "relMzJ", { label: "Mz J" }), We.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(R, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const j = We.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      j.addBinding(R, "LKx", { label: "LKx", min: 0, step: 100 }), j.addBinding(R, "LKy", { label: "LKy", min: 0, step: 100 }), j.addBinding(R, "LKz", { label: "LKz", min: 0, step: 100 });
      const Me = We.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      Me.addBinding(R, "qx", { step: 0.1 }), Me.addBinding(R, "qy", { step: 0.1 }), Me.addBinding(R, "qz", { step: 0.1 }), We.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(R, "massPerM", { label: "m/L", min: 0, step: 1 }), We.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        ot("segs", a, "section", R.section), ot("segs", a, "material", R.material_frame);
        const xe = { A: R.A_mod, Iz: R.Iz_mod, Iy: R.Iy_mod, J: R.J_mod };
        (xe.A !== 1 || xe.Iz !== 1 || xe.Iy !== 1 || xe.J !== 1) && ot("segs", a, "modifiers", xe), R.insertionPoint !== "10 \u2014 Centroid" && ot("segs", a, "insertionPoint", R.insertionPoint), R.beta !== 0 && ot("segs", a, "beta", R.beta);
        const $e = [R.relMxI, R.relMyI, R.relMzI], wt = [R.relMxJ, R.relMyJ, R.relMzJ];
        ($e.some((at) => at) || wt.some((at) => at)) && ot("segs", a, "releases", { i: $e, j: wt }), R.hinges !== "None" && ot("segs", a, "hinges", R.hinges);
        const St = [R.LKx, R.LKy, R.LKz];
        St.some((at) => at !== 0) && ot("segs", a, "lineSprings", St);
        const He = [R.qx, R.qy, R.qz];
        He.some((at) => at !== 0) && ot("segs", a, "distLoad", He), R.massPerM !== 0 && ot("segs", a, "massPerM", R.massPerM), he(`\u2713 Propiedades aplicadas a ${a.length} segmento(s)`);
      });
    } else if (i) {
      const c = We.addFolder({ title: "\u25AD Shell / \xC1rea" });
      c.addBinding(R, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), c.addBinding(R, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), c.addBinding(R, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), We.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(R, "surfLoad", { label: "q", step: 0.1 }), We.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        ot("areas", t, "shellType", R.shellType), ot("areas", t, "thickness", R.thickness), ot("areas", t, "material", R.material_shell), R.surfLoad !== 0 && ot("areas", t, "surfLoad", R.surfLoad), he(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    } else if (r) {
      const c = We.addFolder({ title: "\u2139 Selecci\xF3n mixta" }), h = { msg: "Selecciona un solo tipo para editar propiedades" };
      c.addBinding(h, "msg", { readonly: true, label: "" });
    }
    We.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      ue.clear(), Ke();
    }), vt.style.display = "block", dn();
  };
  window.__hekatanRefreshPropsPane = pn;
  let Jt = null, un = false;
  w.addEventListener("pointerdown", (n) => {
    n.button === 2 && (Jt = { x: n.clientX, y: n.clientY }, un = false);
  }), w.addEventListener("pointermove", (n) => {
    if (Jt && n.buttons & 2 && !un) {
      const o = n.clientX - Jt.x, a = n.clientY - Jt.y;
      Math.hypot(o, a) > 8 && (un = true);
    }
  }), w.addEventListener("pointerup", (n) => {
    var _a, _b, _c;
    if (n.button === 2) {
      const o = Jt !== null && !un;
      Jt = null;
      const a = window.__hekatanRClickOnElement === true;
      if (window.__hekatanRClickOnElement = false, a) return;
      if (o) {
        if (pt ? qt() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), ue.size > 0 && (ue.clear(), Ke()), e.polylines) {
          const d = e.polylines.rawVal;
          (d[d.length - 1] ?? []).length > 0 && (e.polylines.val = [...d, []]);
        }
        const t = window.__hekatanCadState, f = (_b = (_a = t == null ? void 0 : t.get) == null ? void 0 : _a.call(t)) == null ? void 0 : _b.tool;
        f && f !== "select" && f !== "none" ? ((_c = t == null ? void 0 : t.setTool) == null ? void 0 : _c.call(t, "select"), he(`\u238B Cancelado \u2014 tool '${f}' cerrado, volv\xE9s a Seleccionar`)) : he("\u238B Cancelado (click derecho)");
      }
    }
  }), w.addEventListener("contextmenu", (n) => {
    n.preventDefault(), n.stopPropagation();
  }, { capture: true }), w.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && window.__hekatanRectSelectExplicit && n.pointerType !== "touch" && (Pt = { x: n.clientX, y: n.clientY }, Xt = false);
  }), w.addEventListener("pointermove", (n) => {
    if (pt && n.buttons === 0) {
      const d = n.clientX < pt.x;
      jt(pt.x, pt.y, n.clientX, n.clientY, d);
      return;
    }
    if (!Pt) return;
    const o = n.clientX - Pt.x, a = n.clientY - Pt.y, t = Math.hypot(o, a);
    if (!Xt && t < 8) return;
    Xt = true;
    const f = n.clientX < Pt.x;
    jt(Pt.x, Pt.y, n.clientX, n.clientY, f);
  }), w.addEventListener("pointerup", (n) => {
    if (!Pt) return;
    if (!Xt) {
      Pt = null;
      return;
    }
    const o = n.ctrlKey || n.metaKey || n.shiftKey;
    rn(Pt.x, Pt.y, n.clientX, n.clientY, o), Pt = null, Xt = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const Yt = new Je();
  Yt.visible = false, Yt.frustumCulled = false, x.add(Yt);
  const ro = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, Rn = (n, o, a, t) => {
    var _a, _b, _c, _d;
    for (; Yt.children.length; ) {
      const i = Yt.children.pop();
      (_b = (_a = i.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = i.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const f = ro[n] ?? 16777215, d = 0.05, k = new ce().setFromPoints([new v(o - d, a - d, t), new v(o + d, a - d, t), new v(o + d, a - d, t), new v(o + d, a + d, t), new v(o + d, a + d, t), new v(o - d, a + d, t), new v(o - d, a + d, t), new v(o - d, a - d, t)]);
    Yt.add(new Kt(k, new ct({ color: f, linewidth: 2 }))), Yt.position.set(0, 0, 0), Yt.visible = true;
  }, Mn = () => {
    Yt.visible = false;
  }, co = (n, o, a, t) => {
    var _a;
    const f = window.__hekatanOsnap, d = e.points.rawVal, k = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let i = null;
    const r = (c, h, S, Y) => {
      const K = Math.hypot(h - n, S - o, Y - a);
      K > t || (!i || K < i.d) && (i = { type: c, x: h, y: S, z: Y, d: K });
    };
    (f.node || f.end) && d.forEach((c) => {
      f.node && r("node", c[0], c[1], c[2]);
    });
    for (const c of k) if (!(c.length < 2)) for (let h = 0; h < c.length - 1; h++) {
      const S = d[c[h]], Y = d[c[h + 1]];
      if (!(!S || !Y) && (f.end && (r("end", S[0], S[1], S[2]), r("end", Y[0], Y[1], Y[2])), f.mid && r("mid", (S[0] + Y[0]) / 2, (S[1] + Y[1]) / 2, (S[2] + Y[2]) / 2), f.nea || f.per)) {
        const K = Y[0] - S[0], H = Y[1] - S[1], T = Y[2] - S[2], j = K * K + H * H + T * T;
        if (j < 1e-12) continue;
        const Me = Math.max(0, Math.min(1, ((n - S[0]) * K + (o - S[1]) * H + (a - S[2]) * T) / j)), st = S[0] + Me * K, xe = S[1] + Me * H, $e = S[2] + Me * T;
        f.nea && r("nea", st, xe, $e), f.per && r("per", st, xe, $e);
      }
    }
    const p = window.__hekatanDrawingAuxLines, y = (p == null ? void 0 : p.rawVal) ?? (p == null ? void 0 : p.val) ?? p ?? [];
    for (const c of y) {
      if (c.length !== 6) continue;
      const h = [c[0], c[1], c[2]], S = [c[3], c[4], c[5]];
      if (f.end && (r("end", h[0], h[1], h[2]), r("end", S[0], S[1], S[2])), f.mid && r("mid", (h[0] + S[0]) / 2, (h[1] + S[1]) / 2, (h[2] + S[2]) / 2), f.nea || f.per) {
        const Y = S[0] - h[0], K = S[1] - h[1], H = S[2] - h[2], T = Y * Y + K * K + H * H;
        if (T < 1e-12) continue;
        const j = Math.max(0, Math.min(1, ((n - h[0]) * Y + (o - h[1]) * K + (a - h[2]) * H) / T)), Me = h[0] + j * Y, st = h[1] + j * K, xe = h[2] + j * H;
        f.nea && r("nea", Me, st, xe), f.per && r("per", Me, st, xe);
      }
    }
    return i ? { type: i.type, x: i.x, y: i.y, z: i.z } : null;
  };
  window.__hekatanOsnapCompute = co, window.__hekatanOsnapShow = Rn, window.__hekatanOsnapHide = Mn;
  let Ze = [], bt = 0;
  const tn = document.createElement("div");
  tn.id = "hk-cad-status", tn.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", tn.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(tn);
  const po = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), Ce && n.push(`\u{1F512} LOCK ${Ce.toUpperCase()}`);
    const a = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(a) > 1e-3 && n.push(`Cota Z=${a}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, he = (n) => {
    const o = n + po();
    tn.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    he(o);
  }, window.__hekatanCadResetPending = () => {
    Ze = [], he("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  const nn = [], Ht = () => {
    var _a, _b;
    nn.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), nn.length > 100 && nn.shift();
  }, Bn = () => {
    var _a;
    const n = nn.pop();
    if (!n) {
      he("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), Ze = [], E.visible = false, N.visible = false, F(), he(`\u21B6 Undo \u2014 ${nn.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    g();
  };
  window.__hekatanPushUndo = Ht, window.__hekatanUndo = Bn, document.addEventListener("keydown", (n) => {
    var _a;
    if ((n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey) {
      const o = n.target, a = o == null ? void 0 : o.tagName;
      if ((a === "INPUT" || a === "TEXTAREA") && o.type !== "checkbox" && o.type !== "range" && ((_a = o.value) == null ? void 0 : _a.length) > 0) return;
      n.preventDefault(), n.stopPropagation(), Bn();
    }
  }, { capture: true });
  const Xn = () => {
    if (Ze = [], e.polylines) {
      const n = e.polylines.rawVal, o = n[n.length - 1];
      o && o.length > 0 && (e.polylines.val = [...n, []]);
    }
    Ce = null, Ft(), E.visible = false, N.visible = false, F(), he("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), g();
  };
  window.__hekatanFinalizeDraw = Xn, w.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s, _t2, _u, _v, _w, _x;
    if (Vt > 5) {
      Vt = 0;
      return;
    }
    Vt = 0;
    const o = m(n);
    if (!o) return;
    M.setFromCamera(P, o);
    const a = C();
    if (!a.length) return;
    let t = a[0].point;
    (n.ctrlKey || n.metaKey) && (t = new v(Math.round(a[0].point.x), Math.round(a[0].point.y), Math.round(a[0].point.z)));
    {
      const i = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], r = i[i.length - 1] ?? [], p = e.points.rawVal ?? [];
      if (r.length > 0) {
        const y = p[r[r.length - 1]];
        if (y) {
          const c = !!window.__hekatanOrthoMode;
          let h = Ce;
          if (!h && c) {
            const S = Math.abs(t.x - y[0]), Y = Math.abs(t.y - y[1]), K = Math.abs(t.z - y[2]);
            h = S >= Y && S >= K ? "x" : Y >= K ? "y" : "z";
          }
          h === "x" ? t = new v(t.x, y[1], y[2]) : h === "y" ? t = new v(y[0], t.y, y[2]) : h === "z" && (t = new v(y[0], y[1], t.z));
        }
      }
    }
    const f = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, f);
    if (d) t = new v(d.x, d.y, d.z), he(`\u{1F3AF} Snap [${d.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const i = window.__hekatanSnapEnabled !== false, r = window.__hekatanSnap2D ?? 0;
      i && r > 0 && (t = new v(Math.round(t.x / r) * r, Math.round(t.y / r) * r, Math.round(t.z / r) * r));
    }
    const k = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (k === "select" || k === "none" || !k) {
      if (qe) {
        pt && qt();
        const { kind: i, a: r, b: p } = qe, y = p !== void 0 ? `${i}:${r}:${p}` : `${i}:${r}`;
        n.ctrlKey || n.metaKey || n.shiftKey || ue.clear(), ue.has(y) ? ue.delete(y) : ue.add(y), Ke(), he(`\u2713 Seleccionados ${ue.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const i = n.ctrlKey || n.metaKey || n.shiftKey, r = n.clientX, p = n.clientY;
        pt ? (rn(pt.x, pt.y, r, p, i), pt = null) : i || (pt = { x: r, y: p }, he("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), jt(r, p, r + 1, p + 1, false));
      }
      return;
    }
    if (k === "axis") {
      const i = window.__hekatanAxisDraw;
      if (!i) return;
      if (!i.pendingStart) {
        i.pendingStart = [t.x, t.y, t.z], he(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const r = i.mode === "number", p = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, i.pendingStart, [t.x, t.y, t.z], r);
      he(`\u2713 Eje "${p}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (k === "delete") {
      if (te >= 0) {
        const i = window.__hekatanDrawingAuxLines, r = (i == null ? void 0 : i.rawVal) ?? (i == null ? void 0 : i.val) ?? i ?? [], p = te;
        if (p >= 0 && p < r.length) {
          Ht();
          const y = r.slice(0, p).concat(r.slice(p + 1));
          i && typeof i == "object" && "val" in i ? i.val = y : window.__hekatanDrawingAuxLines = y, he(`\u{1F5D1} L\xEDnea auxiliar #${p + 1} borrada`), te = -1, X.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (ae >= 0) {
        const i = ae, r = be;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(i)) ?? false ? (Qe(i), he(`\u{1F5D1} \xC1rea #${i + 1} (shell Q4) borrada`)) : r >= 0 ? (Nt(i, r), he(`\u{1F5D1} Segmento ${r + 1} de polil\xEDnea #${i + 1} borrado`)) : (Qe(i), he(`\u{1F5D1} Polil\xEDnea #${i + 1} borrada`));
      } else he("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (k === "circle") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        he("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [i, r] = Ze, p = Math.hypot(r[0] - i[0], r[1] - i[1], r[2] - i[2]);
      Math.abs(r[0] - i[0]);
      const y = Math.abs(r[1] - i[1]), h = Math.abs(r[2] - i[2]) < 1e-3 ? "xy" : y < 1e-3 ? "xz" : "yz", S = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, i[0], i[1], i[2], p, S, h), he(`\u2713 C\xEDrculo dibujado en ${h.toUpperCase()} \u2014 r=${p.toFixed(2)}m, ${S} segmentos`), Ze = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (k === "arc") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        he("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (Ze.length === 2) {
        he("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [i, r, p] = Ze, y = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, i, r, p, y), he(`\u2713 Arco dibujado \u2014 ${y} segmentos`), Ze = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (k === "rect") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        he("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [i, r] = Ze;
      (_n = window.__hekatanDrawRect) == null ? void 0 : _n.call(window, i, r), he(`\u2713 Rect\xE1ngulo dibujado \u2014 (${i[0].toFixed(1)},${i[1].toFixed(1)}) \u2192 (${r[0].toFixed(1)},${r[1].toFixed(1)})`), Ze = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (k === "col") {
      Ht();
      const i = t.z, r = bt && bt > 0 ? bt : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, i], [t.x, t.y, i + r]];
      const p = e.polylines.rawVal, y = e.points.rawVal.length;
      e.polylines.val = [...p.slice(0, -1), ...p[p.length - 1].length > 0 ? [p[p.length - 1]] : [], [y - 2, y - 1], []], bt = 0, he(`\u258C Columna creada \u2014 h=${r.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_p = window.__hekatanRebuild) == null ? void 0 : _p.call(window);
      } catch {
      }
      return;
    }
    if (k === "wall") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        he("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [i, r] = Ze, p = bt && bt > 0 ? bt : 3;
      Ht();
      const y = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [i[0], i[1], i[2]], [r[0], r[1], r[2]], [r[0], r[1], r[2] + p], [i[0], i[1], i[2] + p]];
      const c = e.polylines.rawVal;
      if (c.length - 1, e.polylines.val = [...c.slice(0, -1), ...c[c.length - 1].length > 0 ? [c[c.length - 1]] : [], [y, y + 1, y + 2, y + 3, y], []], e.areas) {
        const h = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, h];
      }
      he(`\u25A5 Pared Q4 creada \u2014 h=${p.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Ze = [], bt = 0;
      try {
        (_q = window.__hekatanRebuild) == null ? void 0 : _q.call(window);
      } catch {
      }
      return;
    }
    if (k === "extp") {
      Ht();
      const i = bt && bt > 0 ? bt : 3, r = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, r], [t.x, t.y, r + i]];
      const p = e.polylines.rawVal, y = e.points.rawVal.length;
      e.polylines.val = [...p.slice(0, -1), ...p[p.length - 1].length > 0 ? [p[p.length - 1]] : [], [y - 2, y - 1], []], bt = 0, he(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${i.toFixed(2)}m`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (k === "extl") {
      const i = (window.__hekatanSnap2D ?? 0.5) * 1.5, r = Ie(t.x, t.y, t.z, i);
      if (!r) {
        he("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const p = e.polylines.rawVal, y = e.points.rawVal, c = p[r.polyIdx], h = y[c[r.segIdx]], S = y[c[r.segIdx + 1]];
      if (!h || !S) {
        he("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const Y = bt && bt > 0 ? bt : 3;
      Ht();
      const K = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [h[0], h[1], h[2]], [S[0], S[1], S[2]], [S[0], S[1], S[2] + Y], [h[0], h[1], h[2] + Y]];
      const H = e.polylines.rawVal;
      if (e.polylines.val = [...H.slice(0, -1), ...H[H.length - 1].length > 0 ? [H[H.length - 1]] : [], [K, K + 1, K + 2, K + 3, K], []], e.areas) {
        const T = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, T];
      }
      bt = 0, he(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${Y.toFixed(2)}m`);
      try {
        (_s = window.__hekatanRebuild) == null ? void 0 : _s.call(window);
      } catch {
      }
      return;
    }
    if (k === "auxp") {
      const i = window.__hekatanDrawingAuxPoints;
      if (i) {
        const r = i.rawVal ?? i.val ?? [];
        i.val = [...r, [t.x, t.y, t.z]];
      }
      he(`\u2726 Punto auxiliar agregado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      return;
    }
    if (k === "aux") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        he("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [i, r] = Ze, p = window.__hekatanDrawingAuxLines;
      if (p) {
        const Y = p.rawVal ?? p.val ?? [];
        p.val = [...Y, [i[0], i[1], i[2], r[0], r[1], r[2]]];
      }
      const y = r[0] - i[0], c = r[1] - i[1], h = r[2] - i[2], S = Math.sqrt(y * y + c * c + h * h);
      he(`\u2713 L\xEDnea auxiliar creada \u2014 L=${S.toFixed(2)}m (cyan, no FEM)`), Ze = [];
      return;
    }
    if (k === "extend") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        he("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [i, r] = Ze, p = window.__hekatanDrawingAuxLines;
      if (p) {
        const y = p.rawVal ?? p.val ?? [];
        p.val = [...y, [i[0], i[1], i[2], r[0], r[1], r[2]]];
      }
      he("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Ze = [];
      return;
    }
    if (k === "chaflan") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        he("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [i, r] = Ze, p = window.__hekatanChaflanR ?? 1, y = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_t2 = window.__hekatanDrawSlabChaflan) == null ? void 0 : _t2.call(window, i, r, p, y, 6);
      const c = Math.abs(r[0] - i[0]).toFixed(1), h = Math.abs(r[1] - i[1]).toFixed(1);
      he(`\u2713 Losa con chaflanes dibujada \u2014 ${c}\xD7${h}m, r=${p}m, ${y} seg/chafl\xE1n`), Ze = [];
      try {
        (_u = window.__hekatanRebuild) == null ? void 0 : _u.call(window);
      } catch {
      }
      return;
    }
    if (B = false, Ht(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const i = e.polylines.rawVal, r = i.length - 1, p = i[r] ?? [];
      if (k === "line" && p.length === 2) {
        e.polylines.val = [...i, []], he("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_v = window.__hekatanRebuild) == null ? void 0 : _v.call(window);
        } catch {
        }
        return;
      }
      if (k === "area" && p.length === 4) {
        e.polylines.val = [...i.slice(0, -1), [...p, p[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, r]), he("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
        } catch {
        }
        return;
      }
    }
    if (k === "node") he(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (k === "line") he("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (k === "polyline") he("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (k === "area") {
      const i = ((_x = e.polylines) == null ? void 0 : _x.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      he(`\u25A6 \xC1rea \u2014 click ${i.length}/4. Marc\xE1 ${4 - i.length} v\xE9rtice${4 - i.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), w.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), w.addEventListener("pointermove", (n) => {
    var _a, _b;
    const o = m(n);
    if (!o) return;
    M.setFromCamera(P, o);
    const a = C();
    if (fe.geometry.deleteAttribute("position"), a.length) {
      let t = a[0].point.clone();
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z));
      {
        const k = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], i = k[k.length - 1] ?? [], r = e.points.rawVal ?? [];
        if (i.length > 0) {
          const p = r[i[i.length - 1]];
          if (p) {
            const y = !!window.__hekatanOrthoMode;
            let c = Ce;
            if (!c && y) {
              const h = Math.abs(t.x - p[0]), S = Math.abs(t.y - p[1]), Y = Math.abs(t.z - p[2]);
              c = h >= S && h >= Y ? "x" : S >= Y ? "y" : "z";
            }
            c === "x" ? t.set(t.x, p[1], p[2]) : c === "y" ? t.set(p[0], t.y, p[2]) : c === "z" && t.set(p[0], p[1], t.z);
          }
        }
      }
      const f = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, f);
      if (d) t.set(d.x, d.y, d.z);
      else {
        const k = window.__hekatanSnapEnabled !== false, i = window.__hekatanSnap2D ?? 0.5;
        k && i > 0 && (t.x = Math.round(t.x / i) * i, t.y = Math.round(t.y / i) * i, t.z = Math.round(t.z / i) * i);
      }
      fe.geometry.setAttribute("position", new _t(t.toArray(), 3));
    }
    g();
  }), w.addEventListener("pointermove", (n) => {
    var _a;
    const o = m(n);
    if (!o) return;
    M.setFromCamera(P, o);
    let a = false;
    const t = M.intersectObject(ne), f = C();
    if (t.length && f.length) {
      const d = new v(...e.points.rawVal[t[0].index]), k = new v(...f[0].point), i = d.sub(k), r = (_a = f[0].face) == null ? void 0 : _a.normal;
      r.transformDirection(U.matrixWorld), Math.abs(i.dot(r)) < 1e-4 && (a = true);
    }
    fe.visible = !a;
  });
  let Sn = false, kn;
  w.addEventListener("pointermove", (n) => {
    var _a;
    if (!Vt) return;
    const o = m(n);
    if (!o) return;
    M.setFromCamera(P, o);
    let a = false;
    const t = M.intersectObject(ne), f = C();
    if (t.length && f.length) {
      const k = new v(...e.points.rawVal[t[0].index]), i = new v(...f[0].point), r = k.sub(i), p = (_a = f[0].face) == null ? void 0 : _a.normal;
      p.transformDirection(U.matrixWorld), Math.abs(r.dot(p)) < 1e-4 && (a = true);
    }
    if (a && Vt < 5 && (Sn = true, l.enabled = false, kn = t[0].index), !Sn || Vt % 2 !== 0) return;
    const d = [...e.points.rawVal];
    if (kn !== void 0) {
      let k = f[0].point;
      (n.ctrlKey || n.metaKey) && (k = new v(Math.round(k.x), Math.round(k.y), Math.round(k.z))), d[kn] = k.toArray();
    }
    e.points.val = d;
  }), w.addEventListener("pointerup", () => {
    l.enabled = true, Sn = false;
  }), w.addEventListener("contextmenu", (n) => {
    var _a;
    const o = m(n);
    if (!o) return;
    M.setFromCamera(P, o);
    let a = false;
    const t = M.intersectObject(ne), f = C();
    if (t.length && f.length) {
      const i = new v(...e.points.rawVal[t[0].index]), r = new v(...f[0].point), p = i.sub(r), y = (_a = f[0].face) == null ? void 0 : _a.normal;
      y.transformDirection(U.matrixWorld), Math.abs(p.dot(y)) < 1e-4 && (a = true);
    }
    if (!a) return;
    const d = [...e.points.rawVal];
    if (d.splice(t[0].index, 1), e.points.val = d, !e.polylines) return;
    const k = e.polylines.rawVal.map((i) => i.filter((r) => r !== t[0].index)).map((i) => i.map((r) => r > t[0].index ? r - 1 : r)).filter((i) => i.length);
    k.push([]), e.polylines.val = k;
  });
}
function Uo(e, s, x) {
  const _ = Math.round(14.999999999999998), b = { position: e.position.clone(), quaternion: e.quaternion.clone() }, w = setInterval(M, 1e3 / 30);
  let g = 0;
  function M() {
    g++;
    const P = g / _;
    e.position.lerpVectors(b.position, s.position, P), e.quaternion.slerpQuaternions(b.quaternion, s.quaternion, P), x && x(), g == _ && clearInterval(w);
  }
}
class lo {
  constructor(s, x = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(s, x);
  }
  set(s) {
    return s.isLut === true && this.copy(s), this;
  }
  setMin(s) {
    return this.minV = s, this;
  }
  setMax(s) {
    return this.maxV = s, this;
  }
  setColorMap(s, x = 32) {
    this.map = En[s] || En.rainbow, this.n = x;
    const u = 1 / this.n, l = new It(), _ = new It();
    this.lut.length = 0, this.lut.push(new It(this.map[0][1]));
    for (let b = 1; b < x; b++) {
      const w = b * u;
      for (let g = 0; g < this.map.length - 1; g++) if (w > this.map[g][0] && w <= this.map[g + 1][0]) {
        const M = this.map[g][0], P = this.map[g + 1][0];
        l.setHex(this.map[g][1], hn), _.setHex(this.map[g + 1][1], hn);
        const m = new It().lerpColors(l, _, (w - M) / (P - M));
        this.lut.push(m);
      }
    }
    return this.lut.push(new It(this.map[this.map.length - 1][1])), this;
  }
  copy(s) {
    return this.lut = s.lut, this.map = s.map, this.n = s.n, this.minV = s.minV, this.maxV = s.maxV, this;
  }
  getColor(s) {
    s = mo.clamp(s, this.minV, this.maxV), s = (s - this.minV) / (this.maxV - this.minV);
    const x = Math.round(s * this.n);
    return this.lut[x];
  }
  addColorMap(s, x) {
    return En[s] = x, this;
  }
  createCanvas() {
    const s = document.createElement("canvas");
    return s.width = 1, s.height = this.n, this.updateCanvas(s), s;
  }
  updateCanvas(s) {
    const x = s.getContext("2d", { alpha: false }), u = x.getImageData(0, 0, 1, this.n), l = u.data;
    let _ = 0;
    const b = 1 / this.n, w = new It(), g = new It(), M = new It();
    for (let P = 1; P >= 0; P -= b) for (let m = this.map.length - 1; m >= 0; m--) if (P < this.map[m][0] && P >= this.map[m - 1][0]) {
      const U = this.map[m - 1][0], O = this.map[m][0];
      w.setHex(this.map[m - 1][1], hn), g.setHex(this.map[m][1], hn), M.lerpColors(w, g, (P - U) / (O - U)), l[_ * 4] = Math.round(M.r * 255), l[_ * 4 + 1] = Math.round(M.g * 255), l[_ * 4 + 2] = Math.round(M.b * 255), l[_ * 4 + 3] = 255, _ += 1;
    }
    return x.putImageData(u, 0, 0), s;
  }
}
const En = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, an = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function Ko(e) {
  e = Math.max(0, Math.min(1, e));
  for (let x = 0; x < an.length - 1; x++) {
    const [u, l, _, b] = an[x], [w, g, M, P] = an[x + 1];
    if (e <= w) {
      const m = (e - u) / (w - u);
      return [l + (g - l) * m, _ + (M - _) * m, b + (P - b) * m];
    }
  }
  const s = an[an.length - 1];
  return [s[1], s[2], s[3]];
}
function Ho() {
  const s = new Uint8Array(1024);
  for (let u = 0; u < 256; u++) {
    const l = u / 255, [_, b, w] = Ko(l);
    s[u * 4 + 0] = _, s[u * 4 + 1] = b, s[u * 4 + 2] = w, s[u * 4 + 3] = 255;
  }
  const x = new yo(s, 256, 1, go);
  return x.minFilter = Hn, x.magFilter = Hn, x.wrapS = Wn, x.wrapT = Wn, x.needsUpdate = true, x;
}
function Wo(e, s, x) {
  new lo();
  const u = Ho(), l = new wo({ uniforms: { cmap: { value: u }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: zt, transparent: false, clipping: true, depthWrite: true, depthTest: true }), _ = new Oe(new ce(), l);
  return _.renderOrder = -1, _.frustumCulled = false, _.userData.isShellArea = true, _.name = "__hekatan_shell_colormap", I.derive(() => {
    _.geometry.setAttribute("position", new _t(e.val.flat(), 3));
    const b = [];
    for (const C of s.val) C.length === 3 ? b.push(C[0], C[1], C[2]) : C.length === 4 && (b.push(C[0], C[1], C[2]), b.push(C[0], C[2], C[3]));
    _.geometry.setIndex(new xo(b, 1));
    const w = x.val.filter((C) => Number.isFinite(C));
    let g, M;
    const P = $n.val;
    if (P ? (M = P[0], g = P[1]) : (g = w.length ? Math.max(...w) : 1, M = w.length ? Math.min(...w) : 0, M >= 0 && g > 0 && (M = 0)), g === M) {
      const C = Math.max(Math.abs(g) * 1e-6, 1e-9);
      g += C, M -= C;
    }
    const m = P && P[0] > P[1], U = Math.min(M, g), O = Math.max(M, g), ye = O - U, we = new Float32Array(x.val.length);
    for (let C = 0; C < x.val.length; C++) {
      const ne = x.val[C];
      if (!Number.isFinite(ne)) {
        we[C] = -1;
        continue;
      }
      const ie = ((m ? O + U - ne : ne) - U) / ye;
      we[C] = Math.max(0, Math.min(1, ie));
    }
    _.geometry.setAttribute("scalar", new je(we, 1));
  }), _;
}
function Go(e, s, x, u) {
  const l = Wo(x, e.elements, u);
  return I.derive(() => {
    l.visible = s.shellResults.val != "none";
  }), l;
}
const qo = 6, An = 10, Jo = 0.012;
function Oo(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function Qo(e, s, x, u) {
  if (!x && !u) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && x) {
    const _ = x[e];
    if (_ && _.has(s)) return _.get(s);
  }
  return null;
}
function jo(e, s, x, u) {
  const l = new Je(), _ = new lo();
  _.setColorMap("rainbow");
  const b = new It(), w = I.state([]);
  return I.derive(() => {
    var _a, _b, _c;
    s.deformedShape.val;
    const g = x.val, M = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], P = Oo(s.frameResults.val);
    if (l.children.forEach((z) => {
      z.geometry && z.geometry.dispose(), z.material && z.material.dispose();
    }), l.clear(), !P || M.length === 0 || g.length === 0) {
      w.val = [];
      return;
    }
    const m = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, U = (_c = e.deformOutputs) == null ? void 0 : _c.val, O = [], ye = [];
    for (let z = 0; z < M.length; z++) {
      if (M[z].length !== 2) continue;
      const Q = Qo(P, z, m, U);
      Q && (O.push(Q[0], Q[1]), ye.push({ idx: z, vals: Q }));
    }
    if (O.length === 0) {
      w.val = [];
      return;
    }
    const we = Math.min(...O), C = Math.max(...O);
    _.setMin(we), _.setMax(C), w.val = O;
    const ne = [1 / 0, 1 / 0, 1 / 0], fe = [-1 / 0, -1 / 0, -1 / 0];
    for (const z of g) for (let Z = 0; Z < 3; Z++) ne[Z] = Math.min(ne[Z], z[Z]), fe[Z] = Math.max(fe[Z], z[Z]);
    const G = Math.max(fe[0] - ne[0], fe[1] - ne[1], fe[2] - ne[2], 1) * Jo, de = [], q = [], B = [];
    let $ = 0;
    for (const { idx: z, vals: Z } of ye) {
      const Q = M[z], D = g[Q[0]], me = g[Q[1]];
      if (!D || !me) continue;
      const E = new v(me[0] - D[0], me[1] - D[1], me[2] - D[2]), N = E.length();
      if (N < 1e-10) continue;
      E.normalize();
      const oe = Math.abs(E.y) < 0.99 ? new v(0, 1, 0) : new v(1, 0, 0), le = new v().crossVectors(E, oe).normalize(), J = new v().crossVectors(E, le).normalize(), Se = An + 1, ge = qo;
      for (let ve = 0; ve < Se; ve++) {
        const Pe = ve / An, Be = D[0] + E.x * N * Pe, et = D[1] + E.y * N * Pe, yt = D[2] + E.z * N * Pe, Ue = Z[0] + (Z[1] - Z[0]) * Pe, A = _.getColor(Ue) ?? new It(0, 0, 0);
        b.copy(A).convertSRGBToLinear();
        for (let W = 0; W < ge; W++) {
          const ee = W / ge * Math.PI * 2, se = Math.cos(ee), Ve = Math.sin(ee);
          de.push(Be + (le.x * se + J.x * Ve) * G, et + (le.y * se + J.y * Ve) * G, yt + (le.z * se + J.z * Ve) * G), q.push(b.r, b.g, b.b);
        }
      }
      for (let ve = 0; ve < An; ve++) for (let Pe = 0; Pe < ge; Pe++) {
        const Be = (Pe + 1) % ge, et = $ + ve * ge + Pe, yt = $ + ve * ge + Be, Ue = $ + (ve + 1) * ge + Pe, A = $ + (ve + 1) * ge + Be;
        B.push(et, yt, A), B.push(et, A, Ue);
      }
      $ += Se * ge;
    }
    if (de.length === 0) return;
    const V = new ce();
    V.setAttribute("position", new _t(de, 3)), V.setAttribute("color", new _t(q, 3)), V.setIndex(B), V.computeVertexNormals();
    const F = new nt({ vertexColors: true, side: zt }), L = new Oe(V, F);
    L.frustumCulled = false, l.add(L);
  }), l.__colorMapValues = w, l;
}
function es() {
  const e = window;
  return { forceUnit: e.__hekatanForceUnit ?? localStorage.getItem("hk_forceUnit") ?? "tonf", dispUnit: e.__hekatanDispUnit ?? localStorage.getItem("hk_dispUnit") ?? "mm", stressUnit: e.__hekatanStressUnit ?? localStorage.getItem("hk_stressUnit") ?? "tonf/m\xB2" };
}
const ts = { kN: 1, tonf: 1 / 9.80665, kip: 1 / 4.4482216 }, ns = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, os = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76, "kip/ft\xB2": 1 / 47.88026 };
function rt(e, s = 4) {
  return e == null || !isFinite(e) ? "\u2014" : e === 0 ? "0" : Math.abs(e) < 1e-3 || Math.abs(e) > 1e5 ? e.toExponential(s) : e.toFixed(s);
}
const ss = 16755200, jn = 56831, as = 56831, is = 56831, xn = 65382;
function ls(e) {
  const s = new Je();
  s.name = "__hekatan_hover", s.renderOrder = 99;
  const x = new Ot(1, 16, 16), u = new nt({ color: ss, transparent: true, opacity: 0.85, depthTest: false }), l = new Oe(x, u);
  l.visible = false, l.renderOrder = 100, s.add(l);
  const _ = new ce(), b = new ct({ color: jn, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), w = new Kt(_, b);
  w.visible = false, w.renderOrder = 100, s.add(w);
  const g = new nt({ color: jn, transparent: true, opacity: 0.7, depthTest: false }), M = new Oe(new Gn(1, 1, 1, 12), g);
  M.visible = false, M.renderOrder = 100, s.add(M);
  const P = new ce(), m = new nt({ color: as, transparent: true, opacity: 0.45, side: zt, depthTest: false }), U = new Oe(P, m);
  U.visible = false, U.renderOrder = 100, s.add(U);
  const O = new ce(), ye = new ct({ color: is, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), we = new Kt(O, ye);
  we.visible = false, we.renderOrder = 100, s.add(we);
  const C = new nt({ color: xn, transparent: true, opacity: 0.95, depthTest: false }), ne = new Oe(x, C);
  ne.visible = false, ne.renderOrder = 101, s.add(ne);
  const fe = new nt({ color: xn, transparent: true, opacity: 0.85, depthTest: false }), ie = new Oe(new Gn(1, 1, 1, 12), fe);
  ie.visible = false, ie.renderOrder = 101, s.add(ie);
  const G = new ce(), de = new nt({ color: xn, transparent: true, opacity: 0.55, side: zt, depthTest: false }), q = new Oe(G, de);
  q.visible = false, q.renderOrder = 101, s.add(q);
  const B = new ce(), $ = new ct({ color: xn, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), V = new Kt(B, $);
  V.visible = false, V.renderOrder = 101, s.add(V);
  let F = null;
  const L = document.createElement("div");
  Object.assign(L.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), L.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(L);
  }, 0);
  function z(X) {
    const ae = e.derivedNodes.rawVal;
    return !ae || X < 0 || X >= ae.length ? null : new v(ae[X][0], ae[X][1], ae[X][2]);
  }
  function Z(X, ae) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s;
    const be = e.getActiveCamera();
    if (!be || !e.mesh) return null;
    const te = e.rendererElm.getBoundingClientRect(), ue = X - te.left, Ee = ae - te.top, Re = e.derivedNodes.rawVal, Le = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!Re || !Le) return null;
    const Te = /* @__PURE__ */ new Map(), Ae = (_e2) => {
      if (Te.has(_e2)) return Te.get(_e2);
      const ke = z(_e2);
      if (!ke) return Te.set(_e2, null), null;
      const pe = ke.clone().project(be), De = (pe.x * 0.5 + 0.5) * te.width, re = (-pe.y * 0.5 + 0.5) * te.height, Ge = { x: De, y: re, z: pe.z };
      return Te.set(_e2, Ge), Ge;
    }, qe = /* @__PURE__ */ new Set();
    for (const _e2 of Le) if (_e2) for (const ke of _e2) qe.add(ke);
    const ut = 8;
    let Ke = -1, ft = ut;
    for (let _e2 = 0; _e2 < Re.length; _e2++) {
      if (!qe.has(_e2)) continue;
      const ke = Ae(_e2);
      if (!ke || ke.z < -1 || ke.z > 1) continue;
      const pe = ke.x - ue, De = ke.y - Ee, re = Math.sqrt(pe * pe + De * De);
      re < ft && (ft = re, Ke = _e2);
    }
    const Ie = es(), it = ns[Ie.dispUnit] ?? 1e3, tt = ts[Ie.forceUnit] ?? 1;
    if (Ke >= 0) {
      const _e2 = Re[Ke];
      let ke = `Nodo ${Ke}
(${_e2[0].toFixed(3)}, ${_e2[1].toFixed(3)}, ${_e2[2].toFixed(3)})`;
      const pe = (_c = (_b = e.mesh) == null ? void 0 : _b.deformOutputs) == null ? void 0 : _c.rawVal;
      if (pe == null ? void 0 : pe.deformations) {
        const De = pe.deformations.get(Ke);
        if (De && (ke += `
\u2500\u2500\u2500\u2500 \u0394 desplaz. \u2500\u2500\u2500\u2500`, ke += `
Ux = ${rt(De[0] * it, 3)} ${Ie.dispUnit}`, ke += `
Uy = ${rt(De[1] * it, 3)} ${Ie.dispUnit}`, ke += `
Uz = ${rt(De[2] * it, 3)} ${Ie.dispUnit}`, (Math.abs(De[3]) > 1e-9 || Math.abs(De[4]) > 1e-9 || Math.abs(De[5]) > 1e-9) && (ke += `
Rx = ${rt(De[3] * 1e3, 3)} mrad`, ke += `
Ry = ${rt(De[4] * 1e3, 3)} mrad`, ke += `
Rz = ${rt(De[5] * 1e3, 3)} mrad`)), pe.reactions) {
          const re = pe.reactions.get(Ke);
          re && (Math.abs(re[0]) > 1e-9 || Math.abs(re[1]) > 1e-9 || Math.abs(re[2]) > 1e-9 || Math.abs(re[3]) > 1e-6 || Math.abs(re[4]) > 1e-6 || Math.abs(re[5]) > 1e-6) && (ke += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, ke += `
Fx = ${rt(re[0] * tt)} ${Ie.forceUnit}`, ke += `
Fy = ${rt(re[1] * tt)} ${Ie.forceUnit}`, ke += `
Fz = ${rt(re[2] * tt)} ${Ie.forceUnit}`, (Math.abs(re[3]) > 1e-6 || Math.abs(re[4]) > 1e-6 || Math.abs(re[5]) > 1e-6) && (ke += `
Mx = ${rt(re[3] * tt)} ${Ie.forceUnit}\xB7m`, ke += `
My = ${rt(re[4] * tt)} ${Ie.forceUnit}\xB7m`, ke += `
Mz = ${rt(re[5] * tt)} ${Ie.forceUnit}\xB7m`));
        }
      }
      return { type: "node", idx: Ke, info: ke };
    }
    const Qt = 5;
    let Qe = -1, Nt = Qt, lt = "frame";
    for (let _e2 = 0; _e2 < Le.length; _e2++) {
      const ke = Le[_e2];
      if (!(!ke || ke.length < 2)) {
        if (ke.length === 2) {
          const pe = Ae(ke[0]), De = Ae(ke[1]);
          if (!pe || !De || pe.z < -1 || pe.z > 1 || De.z < -1 || De.z > 1) continue;
          const re = rs(ue, Ee, pe.x, pe.y, De.x, De.y);
          re < Nt && (Nt = re, Qe = _e2, lt = "frame");
        } else if (ke.length === 3 || ke.length === 4) {
          const pe = [];
          let De = true;
          for (const re of ke) {
            const Ge = Ae(re);
            if (!Ge || Ge.z < -1 || Ge.z > 1) {
              De = false;
              break;
            }
            pe.push(Ge);
          }
          if (!De) continue;
          if (cs(ue, Ee, pe)) {
            const Ge = pe.reduce((ze, Et) => ze + Et.z, 0) / pe.length * 1e-3;
            Ge < Nt && (Nt = Ge, Qe = _e2, lt = "shell");
          }
        } else if (ke.length === 8) {
          const pe = [];
          let De = true;
          for (const Ne of ke) {
            const Ye = Ae(Ne);
            if (!Ye || Ye.z < -1 || Ye.z > 1) {
              De = false;
              break;
            }
            pe.push(Ye);
          }
          if (!De) continue;
          const re = Math.min(...pe.map((Ne) => Ne.x)), Ge = Math.max(...pe.map((Ne) => Ne.x)), ze = Math.min(...pe.map((Ne) => Ne.y)), Et = Math.max(...pe.map((Ne) => Ne.y));
          if (ue >= re && ue <= Ge && Ee >= ze && Ee <= Et) {
            const Ye = pe.reduce((ht, gt) => ht + gt.z, 0) / pe.length * 1e-3;
            Ye < Nt && (Nt = Ye, Qe = _e2, lt = "solid");
          }
        }
      }
    }
    if (Qe >= 0) {
      const _e2 = Le[Qe];
      let pe = `${lt === "frame" ? "Frame" : lt === "shell" ? "Shell" : "Solid"} ${Qe}`;
      const De = (_e = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e.rawVal, re = (_g = (_f = De == null ? void 0 : De.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, Qe);
      if (re) {
        re.name && (pe += `
  \u{1F4CB} ${re.name}`), re.shape && (pe += `
  Shape: ${re.shape}`);
        const Ge = /concrete|hormig|rect.*sólida/i.test(re.shape || ""), ze = Ge ? 100 : 1e3, Et = Ge ? "cm" : "mm", Ne = (ht) => {
          const gt = ht * ze;
          return Math.abs(gt - Math.round(gt)) < 0.05 ? `${Math.round(gt)}` : `${gt.toFixed(1)}`;
        }, Ye = [];
        if (re.D != null && Ye.push(`D=${Ne(re.D)}`), re.B != null && Ye.push(`B=${Ne(re.B)}`), re.TF != null && Ye.push(`TF=${Ne(re.TF)}`), re.TW != null && Ye.push(`TW=${Ne(re.TW)}`), re.t != null && Ye.push(`t=${Ne(re.t)}`), Ye.length && (pe += `
  Dim: ${Ye.join(" ")} ${Et}`), re.material) {
          let ht = re.material;
          re.fillMaterial && (ht += ` + FILL "${re.fillMaterial}"`), pe += `
  Mat: ${ht}`;
        }
      } else {
        const Ge = (_i = (_h = De == null ? void 0 : De.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, Qe), ze = (_k = (_j = De == null ? void 0 : De.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, Qe);
        Ge ? (pe += `
  ${Ge}`, ze && !Ge.includes(ze) && (pe += `  (${ze})`)) : ze && (pe += `
  Material: ${ze}`);
      }
      if (pe += `
nodos: [${_e2.join(", ")}]`, lt === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const Ge = e.mesh.analyzeOutputs.rawVal, ze = os[Ie.stressUnit] ?? 1, Et = [["bendingXX", "Mxx", tt, `${Ie.forceUnit}\xB7m/m`], ["bendingYY", "Myy", tt, `${Ie.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", tt, `${Ie.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", tt, `${Ie.forceUnit}/m`], ["membraneYY", "Nyy", tt, `${Ie.forceUnit}/m`], ["membraneXY", "Nxy", tt, `${Ie.forceUnit}/m`], ["shearX", "Qx", tt, `${Ie.forceUnit}/m`], ["shearY", "Qy", tt, `${Ie.forceUnit}/m`], ["vonMises", "\u03C3VM", ze, Ie.stressUnit], ["pressure", "p", ze, Ie.stressUnit]], Ne = [];
        for (const [Ye, ht, gt, Zt] of Et) {
          const $t = Ge == null ? void 0 : Ge[Ye];
          if ($t && $t instanceof Map) {
            const At = $t.get(Qe);
            if (At != null) {
              if (typeof At == "number") Ne.push(`${ht} = ${rt(At * gt, 3)} ${Zt}`);
              else if (Array.isArray(At)) {
                let mt = At[0];
                for (const Vt of At) Math.abs(Vt) > Math.abs(mt) && (mt = Vt);
                Ne.push(`${ht} = ${rt(mt * gt, 3)} ${Zt}`);
              }
            }
          }
        }
        Ne.length > 0 && (pe += `
\u2500\u2500\u2500\u2500 results \u2500\u2500\u2500\u2500
` + Ne.slice(0, 8).join(`
`));
      }
      if (lt === "frame" && ((_m = e.mesh) == null ? void 0 : _m.deformOutputs) && e.mesh.elementInputs) {
        const Ge = e.mesh.deformOutputs.rawVal, ze = e.mesh.elementInputs.rawVal, Et = Ge == null ? void 0 : Ge.deformations;
        if (Et && _e2.length === 2) {
          const Ne = Et.get(_e2[0]), Ye = Et.get(_e2[1]), ht = Re[_e2[0]], gt = Re[_e2[1]];
          if (Ne && Ye && ht && gt) {
            const Zt = gt[0] - ht[0], $t = gt[1] - ht[1], At = gt[2] - ht[2], mt = Math.sqrt(Zt * Zt + $t * $t + At * At);
            if (mt > 1e-9) {
              const Vt = Zt / mt, dt = $t / mt, Pt = At / mt, Xt = (Ye[0] - Ne[0]) * Vt + (Ye[1] - Ne[1]) * dt + (Ye[2] - Ne[2]) * Pt, pt = ((_n = ze.elasticities) == null ? void 0 : _n.get(Qe)) ?? 0, jt = ((_o2 = ze.areas) == null ? void 0 : _o2.get(Qe)) ?? 0, rn = ((_p = ze.momentsOfInertiaY) == null ? void 0 : _p.get(Qe)) ?? 0, qt = ((_q = ze.momentsOfInertiaZ) == null ? void 0 : _q.get(Qe)) ?? 0, cn = ((_r = ze.torsionalConstants) == null ? void 0 : _r.get(Qe)) ?? 0, vt = ((_s = ze.shearModuli) == null ? void 0 : _s.get(Qe)) ?? pt / 2.6, en = pt * jt * (Xt / mt), Ut = (Ye[3] - Ne[3]) * Vt + (Ye[4] - Ne[4]) * dt + (Ye[5] - Ne[5]) * Pt, dn = vt * cn * (Ut / mt), R = Ye[4] - Ne[4], We = Ye[5] - Ne[5], ot = pt * rn * R / mt, pn = pt * qt * We / mt;
              pe += `
\u2500\u2500\u2500\u2500 frame \u2500\u2500\u2500\u2500`, pe += `
L = ${rt(mt, 3)} m`, pe += `
\u0394L = ${rt(Xt * it, 3)} ${Ie.dispUnit}`, pe += `
\u03B5 = ${rt(Xt / mt, 6)}`, Math.abs(en) > 1e-6 && (pe += `
N \u2248 ${rt(en * tt)} ${Ie.forceUnit}`), Math.abs(dn) > 1e-6 && (pe += `
T \u2248 ${rt(dn * tt)} ${Ie.forceUnit}\xB7m`), Math.abs(ot) > 1e-6 && (pe += `
My \u2248 ${rt(ot * tt)} ${Ie.forceUnit}\xB7m`), Math.abs(pn) > 1e-6 && (pe += `
Mz \u2248 ${rt(pn * tt)} ${Ie.forceUnit}\xB7m`);
            }
          }
        }
      }
      return { type: lt, idx: Qe, info: pe };
    }
    return null;
  }
  function Q(X, ae, be) {
    var _a, _b, _c;
    if (l.visible = false, w.visible = false, M.visible = false, U.visible = false, we.visible = false, !X || !e.mesh) {
      L.style.display = "none", e.render();
      return;
    }
    const te = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (X.type === "node") {
      const Le = z(X.idx);
      if (Le) {
        const Te = e.derivedNodes.rawVal ?? [];
        let Ae = 1;
        if (Te.length >= 2) {
          let Ke = [1 / 0, 1 / 0, 1 / 0], ft = [-1 / 0, -1 / 0, -1 / 0];
          for (const Ie of Te) for (let it = 0; it < 3; it++) Ie[it] < Ke[it] && (Ke[it] = Ie[it]), Ie[it] > ft[it] && (ft[it] = Ie[it]);
          Ae = Math.max(ft[0] - Ke[0], ft[1] - Ke[1], ft[2] - Ke[2], 0.1);
        }
        const qe = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, ut = 0.015 * Ae * qe;
        l.position.copy(Le), l.scale.setScalar(ut), l.visible = true;
      }
    } else if (X.type === "frame" && te) {
      const Le = te[X.idx], Te = z(Le[0]), Ae = z(Le[1]);
      if (Te && Ae) {
        const qe = Te.clone().add(Ae).multiplyScalar(0.5), ut = Ae.clone().sub(Te), Ke = ut.length(), it = e.getActiveCamera().position.distanceTo(qe) * 35e-4;
        M.position.copy(qe);
        const tt = new v(0, 1, 0), Qt = tt.clone().cross(ut).normalize(), Qe = tt.angleTo(ut);
        M.quaternion.setFromAxisAngle(Qt, Qe), M.scale.set(it, Ke, it), M.visible = true;
      }
    } else if (X.type === "shell" && te) {
      const Le = te[X.idx], Te = [], Ae = [];
      for (const qe of Le) {
        const ut = z(qe);
        if (!ut) return;
        Te.push(ut.x, ut.y, ut.z);
      }
      Le.length === 4 ? Ae.push(0, 1, 2, 0, 2, 3) : Le.length === 3 && Ae.push(0, 1, 2), P.setAttribute("position", new _t(Te, 3)), P.setIndex(Ae), P.computeVertexNormals(), U.visible = true;
    } else if (X.type === "solid" && te) {
      const Le = te[X.idx], Te = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], Ae = [];
      for (const [qe, ut] of Te) {
        const Ke = z(Le[qe]), ft = z(Le[ut]);
        Ke && ft && Ae.push(Ke.x, Ke.y, Ke.z, ft.x, ft.y, ft.z);
      }
      O.setAttribute("position", new _t(Ae, 3)), we.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      L.style.display = "none", e.render();
      return;
    }
    L.textContent = X.info, L.style.whiteSpace = "pre-line", L.style.display = "block";
    const Ee = e.rendererElm.getBoundingClientRect(), Re = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? Ee;
    L.style.left = `${ae - Re.left}px`, L.style.top = `${be - Re.top}px`, e.render();
  }
  let D = "", me = 0, E = 0;
  const N = window.__hekatanHoverDebug ?? false, oe = (X) => {
    me && cancelAnimationFrame(me), me = requestAnimationFrame(() => {
      var _a, _b, _c;
      const ae = Z(X.clientX, X.clientY);
      if (N && E < 5) {
        const te = e.derivedNodes.rawVal, ue = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${X.clientX}, ${X.clientY}) nodes=${(te == null ? void 0 : te.length) ?? 0} elems=${(ue == null ? void 0 : ue.length) ?? 0} hover=`, ae), E++;
      }
      const be = ae ? `${ae.type}:${ae.idx}` : "";
      if (be !== D) D = be, Q(ae, X.clientX, X.clientY);
      else if (ae) {
        const te = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        L.style.left = `${X.clientX - te.left}px`, L.style.top = `${X.clientY - te.top}px`;
      }
    });
  };
  let le = null;
  const J = () => {
    D = "", l.visible = false, w.visible = false, M.visible = false, U.visible = false, we.visible = false, L.style.display = "none", e.render();
  }, Se = (X) => {
    const ae = e.rendererElm.getBoundingClientRect(), be = X.clientX - ae.left, te = X.clientY - ae.top;
    (be < -2 || te < -2 || be > ae.width + 2 || te > ae.height + 2) && (le && clearTimeout(le), le = window.setTimeout(J, 200));
  }, ge = () => {
    le && (clearTimeout(le), le = null);
  };
  e.rendererElm.addEventListener("pointermove", oe), e.rendererElm.addEventListener("pointerleave", Se), e.rendererElm.addEventListener("pointerenter", ge);
  const ve = document.createElement("div");
  Object.assign(ve.style, { position: "absolute", zIndex: "10000", background: "rgba(20, 20, 25, 0.96)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "180px", fontFamily: "Segoe UI, sans-serif", fontSize: "13px", color: "#e8e8e8", userSelect: "none", display: "none" }), ve.classList.add("hekatan-context-menu");
  let Pe = null;
  const Be = document.createElement("div");
  Object.assign(Be.style, { position: "absolute", background: "rgba(20, 20, 25, 0.97)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "240px", fontFamily: "Segoe UI, sans-serif", fontSize: "12.5px", color: "#e8e8e8", userSelect: "none", display: "none", zIndex: "10001" });
  const et = [{ icon: "\u{1F4D0}", label: "Section Property...", key: "section" }, { icon: "\u{1F527}", label: "Property Modifiers...", key: "modifiers" }, { icon: "\u{1F513}", label: "Releases / Partial Fixity...", key: "releases" }, { icon: "\u2194", label: "End Length Offsets...", key: "endOffsets" }, { icon: "\u{1F4CD}", label: "Insertion Point...", key: "insertionPoint" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "localAxes" }, { icon: "\u{1F4CA}", label: "Output Stations...", key: "outputStations" }, { icon: "\u2696", label: "Tension / Compression Limits...", key: "tcLimits" }, { icon: "\u{1F300}", label: "Line Springs...", key: "lineSprings" }, { icon: "\u2693", label: "Additional Mass...", key: "addMass" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "materialOverwrite" }], yt = [{ icon: "\u{1F53B}", label: "Joint Restraints (Supports)...", key: "restraints" }, { icon: "\u{1F300}", label: "Point Springs...", key: "pointSprings" }, { icon: "\u{1F4AA}", label: "Joint Loads \u2014 Force...", key: "jointForce" }, { icon: "\u{1F504}", label: "Joint Loads \u2014 Moment...", key: "jointMoment" }, { icon: "\u2693", label: "Additional Mass (Joint)...", key: "jointMass" }], Ue = [{ icon: "\u{1F4D0}", label: "Section Property (Slab/Wall)...", key: "shellSection" }, { icon: "\u{1F527}", label: "Property Modifiers (f/m/v)...", key: "shellModifiers" }, { icon: "\u{1F300}", label: "Area Springs (Winkler)...", key: "areaSprings" }, { icon: "\u{1F4AA}", label: "Uniform Load (Shell)...", key: "shellLoad" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "shellLocalAxes" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "shellMaterial" }], A = [{ icon: "\u{1F4D0}", label: "Solid Property...", key: "solidProp" }, { icon: "\u{1F4AA}", label: "Surface Pressure...", key: "solidPressure" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "solidLocalAxes" }], W = (X, ae, be) => {
    const te = document.createElement("div");
    return te.style.cssText = `
      padding: 5px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 9px;
      transition: background 0.08s;
      white-space: nowrap;
    `, te.innerHTML = `<span style="font-size:13px;width:18px;text-align:center;">${X}</span><span>${ae}</span>`, te.addEventListener("mouseenter", () => {
      te.style.background = "rgba(100, 160, 255, 0.22)";
    }), te.addEventListener("mouseleave", () => {
      te.style.background = "transparent";
    }), te.addEventListener("click", (ue) => {
      ue.stopPropagation();
      const Ee = Pe;
      Mt(), Ee && (window.dispatchEvent(new CustomEvent(`hekatan:assign:${be}`, { detail: { type: Ee.type, idx: Ee.idx, subAction: be } })), window.dispatchEvent(new CustomEvent("hekatan:assign", { detail: { type: Ee.type, idx: Ee.idx, subAction: be } })));
    }), te;
  };
  function ee(X) {
    Be.innerHTML = "";
    const ae = X === "frame" ? et : X === "node" ? yt : X === "shell" ? Ue : A, be = document.createElement("div");
    be.style.cssText = "padding: 4px 14px; font-size: 11px; color: #88a; border-bottom: 1px solid rgba(120,180,255,0.18); margin-bottom: 3px;", be.textContent = `Asignar a ${X.toUpperCase()} #${(Pe == null ? void 0 : Pe.idx) ?? "?"}`, Be.appendChild(be);
    for (const te of ae) Be.appendChild(W(te.icon, te.label, te.key));
  }
  setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(Be);
  }, 0);
  function se(X, ae) {
    var _a;
    if (!Pe) return;
    ee(Pe.type);
    const be = ve.getBoundingClientRect();
    ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect(), Be.style.left = `${X + be.width}px`, Be.style.top = `${ae}px`, Be.style.display = "block", setTimeout(() => {
      const te = Be.getBoundingClientRect();
      te.right > window.innerWidth - 10 && (Be.style.left = `${X - te.width}px`);
    }, 0);
  }
  function Ve() {
    Be.style.display = "none";
  }
  const Xe = (X, ae, be, te) => {
    const ue = document.createElement("div");
    ue.style.cssText = `
      padding: 6px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: background 0.1s;
      justify-content: space-between;
    `;
    const Ee = `<span style="display:flex;align-items:center;gap:10px;"><span style="font-size:14px;width:18px;text-align:center;">${X}</span><span>${ae}</span></span>`, Re = be ? '<span style="color:#888;">\u25B8</span>' : "";
    return ue.innerHTML = Ee + Re, ue.addEventListener("mouseenter", () => {
      if (ue.style.background = "rgba(100, 160, 255, 0.18)", be) {
        const Le = parseFloat(ve.style.left || "0"), Te = parseFloat(ve.style.top || "0");
        se(Le, Te);
      } else Ve();
    }), ue.addEventListener("mouseleave", () => {
      ue.style.background = "transparent";
    }), ue.addEventListener("click", (Le) => {
      if (Le.stopPropagation(), be) return;
      const Te = Pe;
      Mt(), te(Te);
    }), ue;
  }, Ce = Xe("\u{1F4DD}", "Asignar", true, () => {
  }), Fe = Xe("\u2139", "Ver informaci\xF3n", false, (X) => {
    X && window.dispatchEvent(new CustomEvent("hekatan:info", { detail: { type: X.type, idx: X.idx } }));
  });
  Fe.addEventListener("mouseenter", () => {
    Ve();
  }), ve.appendChild(Ce), ve.appendChild(Fe), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(ve);
  }, 0);
  function Ft(X, ae, be) {
    var _a, _b;
    Pe = be;
    const te = ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
    ve.style.left = `${X - te.left}px`, ve.style.top = `${ae - te.top}px`, ve.style.display = "block";
    try {
      (_b = window.__hekatanCancelClickClickRect) == null ? void 0 : _b.call(window);
    } catch {
    }
  }
  function Mt() {
    ve.style.display = "none", Ve(), Pe = null;
  }
  e.rendererElm.addEventListener("pointerdown", (X) => {
    if (X.button !== 2) return;
    const ae = Z(X.clientX, X.clientY);
    window.__hekatanRClickOnElement = !!ae;
  }, { capture: true }), e.rendererElm.addEventListener("contextmenu", (X) => {
    const ae = Z(X.clientX, X.clientY);
    if (!ae) {
      Mt(), window.__hekatanRClickOnElement = false;
      return;
    }
    X.preventDefault(), X.stopImmediatePropagation(), Ft(X.clientX, X.clientY, { type: ae.type, idx: ae.idx }), window.__hekatanRClickOnElement = false;
  }, { capture: true });
  const Rt = (X) => {
    if (ve.style.display !== "block") return;
    const ae = X.target;
    ve.contains(ae) || Be.contains(ae) || Mt();
  };
  document.addEventListener("mousedown", Rt, true), document.addEventListener("keydown", (X) => {
    X.key === "Escape" && ve.style.display === "block" && Mt();
  });
  let Bt = null;
  e.rendererElm.addEventListener("pointerdown", (X) => {
    X.button === 0 && (Bt = { x: X.clientX, y: X.clientY });
  }), e.rendererElm.addEventListener("pointerup", (X) => {
    if (X.button !== 0 || !Bt) return;
    const ae = X.clientX - Bt.x, be = X.clientY - Bt.y;
    if (Bt = null, ae * ae + be * be > 9) return;
    const te = Z(X.clientX, X.clientY);
    te ? (F = { type: te.type, idx: te.idx }, Dt()) : (F = null, Dt());
  });
  function Dt() {
    var _a, _b;
    if (ne.visible = false, ie.visible = false, q.visible = false, V.visible = false, !F || !e.mesh) {
      e.render();
      return;
    }
    const X = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (F.type === "node") {
      const ae = z(F.idx);
      if (ae) {
        const be = e.derivedNodes.rawVal ?? [];
        let te = 1;
        if (be.length >= 2) {
          let Re = [1 / 0, 1 / 0, 1 / 0], Le = [-1 / 0, -1 / 0, -1 / 0];
          for (const Te of be) for (let Ae = 0; Ae < 3; Ae++) Te[Ae] < Re[Ae] && (Re[Ae] = Te[Ae]), Te[Ae] > Le[Ae] && (Le[Ae] = Te[Ae]);
          te = Math.max(Le[0] - Re[0], Le[1] - Re[1], Le[2] - Re[2], 0.1);
        }
        const ue = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, Ee = 0.017 * te * ue;
        ne.position.copy(ae), ne.scale.setScalar(Ee), ne.visible = true;
      }
    } else if (F.type === "frame" && X) {
      const ae = X[F.idx], be = z(ae[0]), te = z(ae[1]);
      if (be && te) {
        const ue = be.clone().add(te).multiplyScalar(0.5), Ee = te.clone().sub(be), Re = Ee.length(), Ae = e.getActiveCamera().position.distanceTo(ue) * 35e-4;
        ie.position.copy(ue);
        const qe = new v(0, 1, 0), ut = qe.clone().cross(Ee).normalize(), Ke = qe.angleTo(Ee);
        ie.quaternion.setFromAxisAngle(ut, Ke), ie.scale.set(Ae, Re, Ae), ie.visible = true;
      }
    } else if (F.type === "shell" && X) {
      const ae = X[F.idx], be = [], te = [];
      for (const ue of ae) {
        const Ee = z(ue);
        if (!Ee) return;
        be.push(Ee.x, Ee.y, Ee.z);
      }
      ae.length === 4 ? te.push(0, 1, 2, 0, 2, 3) : ae.length === 3 && te.push(0, 1, 2), G.setAttribute("position", new _t(be, 3)), G.setIndex(te), G.computeVertexNormals(), q.visible = true;
    } else if (F.type === "solid" && X) {
      const ae = X[F.idx], be = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], te = [];
      for (const [ue, Ee] of be) {
        const Re = z(ae[ue]), Le = z(ae[Ee]);
        Re && Le && te.push(Re.x, Re.y, Re.z, Le.x, Le.y, Le.z);
      }
      B.setAttribute("position", new _t(te, 3)), V.visible = true;
    }
    e.render();
  }
  return I.derive(() => {
    e.derivedNodes.val, F && Dt();
  }), s;
}
function rs(e, s, x, u, l, _) {
  const b = l - x, w = _ - u, g = b * b + w * w;
  if (g < 1e-9) {
    const ye = e - x, we = s - u;
    return Math.sqrt(ye * ye + we * we);
  }
  let M = ((e - x) * b + (s - u) * w) / g;
  M = Math.max(0, Math.min(1, M));
  const P = x + M * b, m = u + M * w, U = e - P, O = s - m;
  return Math.sqrt(U * U + O * O);
}
function cs(e, s, x) {
  let u = false;
  for (let l = 0, _ = x.length - 1; l < x.length; _ = l++) {
    const b = x[l].x, w = x[l].y, g = x[_].x, M = x[_].y;
    w > s != M > s && e < (g - b) * (s - w) / (M - w + 1e-12) + b && (u = !u);
  }
  return u;
}
function eo(e, s = 8) {
  const x = document.createElement("div");
  x.id = "legend";
  const u = document.createElement("div");
  u.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", x.appendChild(u), setTimeout(() => {
    I.derive(() => {
      u.textContent = Ln.val ? `[${Ln.val}]` : "";
    });
  });
  const l = Array.from({ length: s + 1 }, (g, M) => M / s).reverse();
  let _, b;
  l.forEach((g, M) => {
    _ = document.createElement("div"), _.id = `marker-${M}`, _.className = "marker", _.style.marginTop = M == 0 ? "0px" : `calc(${50 / s}vh - 1px)`, b = document.createElement("p"), b.id = `marker-text-${M}`, _.append(b), x.append(_);
  });
  const w = [];
  return x.querySelectorAll("p").forEach((g) => w.push(g)), setTimeout(() => {
    I.derive(() => {
      l.forEach((g, M) => {
        const P = w[M];
        P && (P.innerText = ds(e.val, g).toString());
      });
    });
  }), x;
}
function ds(e, s) {
  const x = $n.val;
  if (x) return (x[0] + s * (x[1] - x[0])).toPrecision(3);
  const u = e.filter((b) => Number.isFinite(b));
  if (u.length === 0) return "0";
  let l = Math.min(...u);
  const _ = Math.max(...u);
  return l >= 0 && _ > 0 && (l = 0), (l + s * (_ - l)).toPrecision(3);
}
function bs({ mesh: e, settingsObj: s, drawingObj: x, objects3D: u, solids: l }) {
  _o.DEFAULT_UP = new v(0, 0, 1);
  const _ = document.createElement("div"), b = new vo(), w = new bo(45, 1, 0.1, 2 * 1e6), g = new Mo(-10, 10, 10, -10, -1e3, 2e6);
  let M = w;
  const P = new So({ antialias: true });
  P.localClippingEnabled = true;
  const m = new Jn(w, P.domElement);
  m.enableDamping = true, m.dampingFactor = 0.1, m.screenSpacePanning = true, m.zoomSpeed = 0.8, m.panSpeed = 1.2, m.rotateSpeed = 0.9, m.keyPanSpeed = 12, m.listenToKeyEvents(window), m.touches = { ONE: mn.ROTATE, TWO: mn.DOLLY_PAN }, P.domElement.addEventListener("wheel", (A) => {
    if (!A.ctrlKey && Math.abs(A.deltaX) > Math.abs(A.deltaY) * 1.5) {
      A.preventDefault();
      const W = m.target, ee = new v().subVectors(w.position, W), se = new v();
      se.crossVectors(w.up, ee).normalize();
      const Xe = ee.length() * 1e-3 * m.panSpeed;
      W.addScaledVector(se, A.deltaX * Xe), w.position.addScaledVector(se, A.deltaX * Xe), m.update();
    }
  }, { passive: false });
  const U = new zn(new v(-1, 0, 0), 0), O = new zn(new v(0, -1, 0), 0), ye = new zn(new v(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function we() {
    const A = window.__hekatanClip, W = [];
    A.enableX && (U.normal.set(A.invertX ? 1 : -1, 0, 0), U.constant = A.invertX ? -A.posX : A.posX, W.push(U)), A.enableY && (O.normal.set(0, A.invertY ? 1 : -1, 0), O.constant = A.invertY ? -A.posY : A.posY, W.push(O)), A.enableZ && (ye.normal.set(0, 0, A.invertZ ? 1 : -1), ye.constant = A.invertZ ? -A.posZ : A.posZ, W.push(ye)), P.clippingPlanes = W, b.traverse((se) => {
      const Ve = se;
      if (Ve.material) {
        const Xe = Array.isArray(Ve.material) ? Ve.material : [Ve.material];
        for (const Ce of Xe) Ce.clippingPlanes = W, Ce.needsUpdate = true;
      }
    });
    const ee = window.__hekatanPanes ?? [];
    for (const se of ee) try {
      se && typeof se.refresh == "function" && se.refresh();
    } catch {
    }
    P.render(b, M);
  }
  we(), window.__hekatanClipApply = we;
  const C = zo(s), ne = I.derive(() => C.displayScale.val === 0 ? 1 : C.displayScale.val > 0 ? C.displayScale.val : -1 / C.displayScale.val), fe = ps(e, C), ie = () => {
    const A = [];
    return C.gridXY.rawVal && A.push("xy"), C.gridXZ.rawVal && A.push("xz"), C.gridYZ.rawVal && A.push("yz"), A;
  }, G = () => {
    const A = C.gridStep.rawVal, W = Math.max(A, C.gridMajor.rawVal);
    return { planes: ie(), majorStep: W, minorStep: A };
  };
  let de = Fn(C.gridSize.rawVal, G());
  de.visible = C.gridVisible.rawVal, window.__hekatanSnap2D = C.cursorSnap.rawVal;
  const q = () => {
    const A = Math.max(0, Math.min(1, C.gridOpacity.rawVal));
    de.traverse((W) => {
      const ee = W.material;
      if (!ee || !("opacity" in ee)) return;
      const se = W.name ?? "";
      let Ve = 0.35;
      se.includes("border") ? Ve = 1 : se.includes("major") && (Ve = 0.75), ee.opacity = A * Ve;
    });
  };
  q(), _.appendChild(Co(C, e, l)), _.setAttribute("id", "viewer"), _.appendChild(P.domElement), P.setPixelRatio(window.devicePixelRatio);
  const B = Gt();
  P.setClearColor(B.background, 1);
  const $ = C.gridSize.rawVal, V = $ * 0.5 + $ * 0.5 / Math.tan(45 * 0.5);
  w.position.set(0, 0, V), w.up.set(0, 1, 0), m.target.set(0, 0, 0), m.minDistance = 0.1, m.maxDistance = 1e4, _.__settings = C, m.zoomSpeed = 1;
  let F = 100, L = 0;
  P.domElement.addEventListener("wheel", (A) => {
    F = A.deltaY, L = A.deltaMode;
  }, { passive: true, capture: true }), m._getZoomScale = function() {
    const A = Math.abs(F);
    if (A >= 80 && L === 0) return Math.pow(0.9, this.zoomSpeed);
    if (L === 1) return Math.pow(0.88, this.zoomSpeed);
    const W = Math.max(0.05, Math.min(A / 80, 1));
    return Math.pow(0.95, this.zoomSpeed * W);
  }, m.update();
  let z = On(C.gridSize.rawVal, C.flipAxes.rawVal);
  b.add(de, z), I.derive(() => {
    window.__hekatanGridPlaneXY = C.gridXY.val, window.__hekatanGridPlaneXZ = C.gridXZ.val, window.__hekatanGridPlaneYZ = C.gridYZ.val;
  });
  let Z = true;
  I.derive(() => {
    const A = C.gridVisible.val;
    if (Z) {
      Z = false;
      return;
    }
    de.visible = A, J();
  });
  let Q = true;
  I.derive(() => {
    if (C.gridOpacity.val, Q) {
      Q = false;
      return;
    }
    q(), J();
  }), I.derive(() => {
    const A = C.cursorSnap.val;
    window.__hekatanSnap2D = A;
  });
  let D = true;
  I.derive(() => {
    var _a;
    const A = C.gridSize.val, W = C.flipAxes.val;
    if (C.gridXY.val, C.gridXZ.val, C.gridYZ.val, C.gridStep.val, C.gridMajor.val, D) {
      D = false;
      return;
    }
    b.remove(de), (_a = de.traverse) == null ? void 0 : _a.call(de, (Ve) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Ve.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Ve.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), de = Fn(A, G()), de.visible = C.gridVisible.rawVal, b.add(de), q(), b.remove(z), z.traverse((Ve) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Ve.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Ve.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), z = On(A, W), b.add(z);
    const ee = A * 0.5 + A * 0.5 / Math.tan(45 * 0.5);
    w.position.distanceTo(m.target), Math.abs(w.position.x) < 0.1 && Math.abs(w.position.y) < 0.1 && w.position.z > 0 ? w.position.set(0, 0, ee) : w.position.set(0.5 * A, -ee, 0.5 * A), m.target.set(0, 0, 0), m.minDistance = Math.max(0.05, A * 0.01), m.maxDistance = Math.max(50, A * 50), m.update(), J();
  }), new ResizeObserver((A) => {
    var _a, _b;
    for (const W of A) {
      const ee = (_a = W.target) == null ? void 0 : _a.clientWidth, se = (_b = W.target) == null ? void 0 : _b.clientHeight;
      if (ee === 0 || se === 0) continue;
      const Xe = (E ? ee / 2 : ee) / se;
      w.aspect = Xe, w.updateProjectionMatrix();
      const Ce = g.top;
      if (g.left = -Ce * Xe, g.right = Ce * Xe, g.updateProjectionMatrix(), N && N.isPerspectiveCamera) N.aspect = Xe, N.updateProjectionMatrix();
      else if (N && N.isOrthographicCamera) {
        const Fe = N, Ft = Fe.top;
        Fe.left = -Ft * Xe, Fe.right = Ft * Xe, Fe.updateProjectionMatrix();
      }
      P.setSize(ee, se), J();
    }
  }).observe(_), m.addEventListener("change", J), I.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, C.displayScale.val, C.nodes.val, C.elements.val, (_g = C.edges) == null ? void 0 : _g.val, C.elemColumns.val, C.elemBeams.val, C.nodesIndexes.val, C.elementsIndexes.val, C.orientations.val, C.sections.val, C.secColumns.val, C.secBeams.val, C.secFloor.val, C.supports.val, C.loads.val, C.deformedShape.val, C.nodeResults.val, C.frameResults.val, C.shellResults.val, (_h = C.solidResults) == null ? void 0 : _h.val, setTimeout(J);
  });
  let E = false, N = null, oe = null, le = false;
  function J() {
    const A = _.clientWidth || 1, W = _.clientHeight || 1;
    if (!E || !N) {
      P.setScissorTest(false), P.setViewport(0, 0, A, W), P.render(b, M);
      return;
    }
    const ee = A / 2;
    P.setScissorTest(true), P.setViewport(0, 0, ee, W), P.setScissor(0, 0, ee, W), P.render(b, M), P.setViewport(ee, 0, ee, W), P.setScissor(ee, 0, ee, W), P.render(b, N), P.setScissorTest(false);
  }
  function Se(A) {
    M = A, m.object = A, m.update(), J();
  }
  function ge(A, W) {
    E = A, W && (N = W);
    const ee = _.clientWidth || 1, se = _.clientHeight || 1, Xe = (A ? ee / 2 : ee) / se;
    w.isPerspectiveCamera && (w.aspect = Xe, w.updateProjectionMatrix());
    const Ce = g.top;
    if (g.left = -Ce * Xe, g.right = Ce * Xe, g.updateProjectionMatrix(), A && N) {
      if (oe ? (oe.object = N, oe.update()) : (oe = new Jn(N, P.domElement), oe.enableDamping = true, oe.dampingFactor = 0.1, oe.screenSpacePanning = true, oe.zoomSpeed = 0.8, oe.panSpeed = 1.2, oe.rotateSpeed = 0.9, oe.touches = { ONE: mn.ROTATE, TWO: mn.DOLLY_PAN }, oe._getZoomScale = function() {
        const Fe = Math.abs(F);
        if (Fe >= 80 && L === 0) return Math.pow(0.9, this.zoomSpeed);
        if (L === 1) return Math.pow(0.88, this.zoomSpeed);
        const Ft = Math.max(0.05, Math.min(Fe / 80, 1));
        return Math.pow(0.95, this.zoomSpeed * Ft);
      }, oe.target.copy(m.target), oe.addEventListener("change", J), oe.enabled = false), !le) {
        const Fe = (Ft) => {
          if (!E || !oe) return;
          const Mt = P.domElement.getBoundingClientRect(), Rt = Ft.clientX - Mt.left, Bt = Mt.width / 2, Dt = Rt >= Bt;
          m.enabled = !Dt, oe.enabled = Dt;
        };
        P.domElement.addEventListener("pointerdown", Fe, true), P.domElement.addEventListener("wheel", Fe, { capture: true, passive: true }), le = true;
      }
    } else A || (m.enabled = true, oe && (oe.enabled = false));
    _.__splitMode = A, window.__hekatanSplitMode = A, window.__hekatanSplitCamera = A ? N : null, J();
  }
  if (e) {
    b.add(Fo(C, fe, ne), Po(e, C, fe), Vo(C, fe, ne), Lo(e, C, fe, ne), Eo(e, C, fe, ne), Ao(e, C, fe, ne), $o(e, C, fe, ne), Bo(e, C, fe, ne), No(e, C, fe, ne), Xo(e, C, fe, ne));
    const A = ls({ scene: b, rendererElm: P.domElement, getActiveCamera: () => M, derivedNodes: fe, derivedDisplayScale: ne, mesh: e, settings: C, render: J });
    b.add(A);
    const W = xs(e, C), ee = Go(e, C, fe, W), se = eo(W);
    b.add(ee), _.appendChild(se);
    const Ve = jo(e, C, fe);
    b.add(Ve);
    const Xe = Ve.__colorMapValues, Ce = eo(Xe);
    Ce.id = "frame-legend", _.appendChild(Ce), I.derive(() => {
      var _a;
      const Fe = C.shellResults.val != "none", Ft = (((_a = C.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", Mt = Fe || Ft, Rt = C.frameResults.val.startsWith("contour:");
      se.hidden = !Mt, ee.visible = Mt, Ce.hidden = !Rt;
    });
  }
  if (l) {
    const A = new ko(16777215, 0.5);
    b.add(A);
    const W = new qn(16777215, 0.5);
    W.position.set(30, 25, -10), W.shadow.mapSize.width = 1024, W.shadow.mapSize.height = 1024, b.add(W);
    const ee = 10;
    W.shadow.camera.left = -ee, W.shadow.camera.right = ee, W.shadow.camera.top = ee, W.shadow.camera.bottom = -ee, W.shadow.camera.far = 1e3;
    const se = new qn(16777215, 0.5);
    se.color.setHSL(11, 43, 96), se.position.set(-10, 0, 30), b.add(se), I.derive(() => {
      (l == null ? void 0 : l.val.length) && (b.remove(...l.oldVal), b.add(...l.rawVal), J());
    }), I.derive(() => {
      l.rawVal.forEach((Ve) => Ve.visible = C.solids.val), J();
    });
  }
  if (u) {
    const A = [], W = (se) => {
      var _a, _b;
      return ((_a = se == null ? void 0 : se.userData) == null ? void 0 : _a.isCota) ? C.showCotas.val : ((_b = se == null ? void 0 : se.userData) == null ? void 0 : _b.isDistLoad) ? C.loads.val : C.custom3D.val;
    }, ee = () => {
      for (const se of A) se.visible = W(se);
      J();
    };
    I.derive(() => {
      const se = u.val;
      A.length && (b.remove(...A), A.length = 0), se.length && (b.add(...se), A.push(...se), ee()), J();
    }), I.derive(() => {
      C.custom3D.val, ee();
    }), I.derive(() => {
      C.showCotas.val, ee();
    }), I.derive(() => {
      C.loads.val, ee();
    });
  }
  x && Zo({ drawingObj: x, gridObj: de, scene: b, getActiveCamera: () => M, controls: m, gridSize: $, derivedDisplayScale: ne, rendererElm: P.domElement, viewerRender: J }), oo((A, W) => {
    var _a;
    P.setClearColor(W.background, 1), b.remove(de), (_a = de.traverse) == null ? void 0 : _a.call(de, (ee) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = ee.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = ee.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), de = Fn(C.gridSize.rawVal, { planes: ie() }), b.add(de), _.style.setProperty("--awatif-legend-color", W.legendMarker), J();
  });
  const ve = { scene: b, perspCamera: w, orthoCamera: g, get camera() {
    return M;
  }, controls: m, renderer: P, rendererElm: P.domElement, render: J, setActiveCamera: Se, setSplitMode: ge, get splitMode() {
    return E;
  }, get splitCamera() {
    return N;
  }, settings: C };
  _.__ctx = ve;
  const Pe = document.createElement("div");
  Pe.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const Be = (A, W, ee) => {
    const se = document.createElement("button");
    return se.textContent = A, se.title = W, se.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), se.onmouseenter = () => {
      se.style.background = "rgba(70,70,70,0.9)";
    }, se.onmouseleave = () => {
      se.style.background = "rgba(40,40,40,0.85)";
    }, se.onclick = (Ve) => {
      Ve.preventDefault(), ee();
    }, se;
  }, et = (A, W) => {
    const ee = m.target, se = new v().subVectors(M.position, ee), Ve = se.length(), Xe = new v(), Ce = new v();
    Xe.crossVectors(M.up, se).normalize(), Ce.copy(M.up).normalize();
    const Fe = Ve * 0.05;
    ee.addScaledVector(Xe, -A * Fe), ee.addScaledVector(Ce, W * Fe), M.position.addScaledVector(Xe, -A * Fe), M.position.addScaledVector(Ce, W * Fe), m.update(), J();
  }, yt = (A) => {
    const W = new v().subVectors(M.position, m.target);
    W.multiplyScalar(A), M.position.copy(m.target).add(W), m.update(), J();
  }, Ue = () => {
    const A = document.createElement("div");
    return A.style.cssText = "width:32px;height:32px;", A;
  };
  return Pe.append(Ue()), Pe.append(Be("\u2191", "Pan arriba", () => et(0, 1))), Pe.append(Be("\u2295", "Zoom in", () => yt(0.85))), Pe.append(Be("\u2190", "Pan izquierda", () => et(-1, 0))), Pe.append(Be("\u2302", "Reset vista", () => {
    m.reset(), J();
  })), Pe.append(Be("\u2192", "Pan derecha", () => et(1, 0))), Pe.append(Be("\u2296", "Zoom out", () => yt(1.18))), Pe.append(Be("\u2193", "Pan abajo", () => et(0, -1))), Pe.append(Ue()), getComputedStyle(_).position === "static" && (_.style.position = "relative"), _.appendChild(Pe), _;
}
function ps(e, s) {
  return I.derive(() => {
    var _a, _b, _c, _d;
    if (!s.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const x = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], u = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!u || x.length === 0) return x;
    const l = s.deformScale.val, _ = s.deformScale.val * s.deformScaleZ.val, b = Number.isFinite(l) ? l : 1, w = Number.isFinite(_) ? _ : 1;
    return x.map((g, M) => {
      var _a2;
      const P = ((_a2 = u.get(M)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], m = Number.isFinite(P[0]) ? P[0] : 0, U = Number.isFinite(P[1]) ? P[1] : 0, O = Number.isFinite(P[2]) ? P[2] : 0;
      return [g[0] + m * b, g[1] + U * b, g[2] + O * w];
    });
  });
}
const $n = I.state(null), Ln = I.state(""), us = I.state("kN"), fs = I.state("mm"), hs = I.state("kN/m\xB2"), ms = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, to = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, ws = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function xs(e, s) {
  const x = I.state([]);
  let u;
  return ((l) => {
    l.bendingXX = "bendingXX", l.bendingYY = "bendingYY", l.bendingXY = "bendingXY", l.membraneXX = "membraneXX", l.membraneYY = "membraneYY", l.membraneXY = "membraneXY", l.tranverseShearX = "tranverseShearX", l.tranverseShearY = "tranverseShearY", l.vonMises = "vonMises", l.membranePrincipalMax = "membranePrincipalMax", l.membranePrincipalMin = "membranePrincipalMin", l.bendingPrincipalMax = "bendingPrincipalMax", l.bendingPrincipalMin = "bendingPrincipalMin", l.transverseShearMax = "transverseShearMax", l.pressure = "pressure", l.displacementX = "displacementX", l.displacementY = "displacementY", l.displacementZ = "displacementZ";
  })(u || (u = {})), I.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N;
    const l = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), ie = (et, yt) => {
      et == null ? void 0 : et.forEach((Ue, A) => {
        const W = e.elements.val[A];
        if (W) for (let ee = 0; ee < W.length; ee++) yt.set(W[ee], [Ue[ee] ?? Ue[0]]);
      });
    };
    ie((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, l), ie((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, _), ie((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, b), ie((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, w), ie((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, g), ie((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, M), ie((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, P), ie((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, m), ie((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, U), ie((_t2 = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t2.membranePrincipalMax, O), ie((_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.membranePrincipalMin, ye), ie((_x = (_w = e.analyzeOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.bendingPrincipalMax, we), ie((_z = (_y = e.analyzeOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.bendingPrincipalMin, C), ie((_B = (_A = e.analyzeOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.transverseShearMax, ne), ie((_D = (_C = e.analyzeOutputs) == null ? void 0 : _C.val) == null ? void 0 : _D.pressure, fe);
    const G = (_F = (_E = e.analyzeOutputs) == null ? void 0 : _E.val) == null ? void 0 : _F.colorMapRanges, de = (_G = s.solidResults) == null ? void 0 : _G.val, B = de && de !== "none" ? de : s.shellResults.val, $ = G == null ? void 0 : G[B], V = { bendingXX: [l, 0], bendingYY: [_, 0], bendingXY: [b, 0], membraneXX: [w, 0], membraneYY: [g, 0], membraneXY: [M, 0], tranverseShearX: [P, 0], tranverseShearY: [m, 0], vonMises: [U, 0], membranePrincipalMax: [O, 0], membranePrincipalMin: [ye, 0], bendingPrincipalMax: [we, 0], bendingPrincipalMin: [C, 0], transverseShearMax: [ne, 0], pressure: [fe, 0], displacementX: [(_I = (_H = e.deformOutputs) == null ? void 0 : _H.val) == null ? void 0 : _I.deformations, 0], displacementY: [(_K = (_J = e.deformOutputs) == null ? void 0 : _J.val) == null ? void 0 : _K.deformations, 1], displacementZ: [(_M = (_L = e.deformOutputs) == null ? void 0 : _L.val) == null ? void 0 : _M.deformations, 2] }, F = s.shellResults.val, L = us.val, z = fs.val, Z = F === "displacementX" || F === "displacementY" || F === "displacementZ", Q = F === "bendingXX" || F === "bendingYY" || F === "bendingXY" || F === "bendingPrincipalMax" || F === "bendingPrincipalMin", D = F === "membraneXX" || F === "membraneYY" || F === "membraneXY" || F === "membranePrincipalMax" || F === "membranePrincipalMin", me = F === "vonMises" || F === "pressure", E = F === "tranverseShearX" || F === "tranverseShearY" || F === "transverseShearMax", N = (_N = s.solidResults) == null ? void 0 : _N.val, oe = N === "vonMises" || N === "sigmaXX" || N === "sigmaYY" || N === "sigmaZZ" || N === "tauXY" || N === "tauYZ" || N === "tauXZ", le = N === "ux" || N === "uy" || N === "uz", J = hs.val, Se = oe ? ws[J] : le || Z ? to[z] : Q || D || me || E ? 1 / ms[L] : 1, ge = oe ? J : le || Z ? z : Q ? `${L}\xB7m/m` : D ? `${L}/m\xB2` : me ? `${L}/m\xB2` : E ? `${L}/m` : "";
    Ln.val = ge, $n.val = Array.isArray($) && $.length === 2 ? [$[0] * Se, $[1] * Se] : null;
    const Pe = N && N !== "none" ? [U, 0] : V[F], Be = [];
    e.nodes.val.forEach((et, yt) => {
      const Ue = Pe;
      if (!Ue || !Ue[0] || typeof Ue[0].has != "function") return;
      if (!Ue[0].has(yt)) {
        Be.push(Number.NaN);
        return;
      }
      const A = Ue[0].get(yt), W = A ? A[Ue[1]] ?? 0 : 0;
      Be.push(W * Se);
    }), x.val = Be;
  }), x;
}
export {
  Wo as a,
  eo as b,
  us as c,
  fs as d,
  hs as e,
  bs as g
};
