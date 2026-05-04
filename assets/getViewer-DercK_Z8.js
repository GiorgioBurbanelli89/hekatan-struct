import { X as Mt, B as oe, Y as _t, F as Ye, G as Se, d as rt, L as Le, e as Xe, D as Ie, b as Ve, v as Pe, Z as pn, c as Pn, V as g, y as tt, z as Ce, _ as Xt, k as un, a as Ze, f as Me, h as St, $ as kt, l as Cn, j as zn, q as yt, K as ft, a0 as Qt, m as Jt, o as Ot, p as jt, S as en, a1 as tn, a2 as vt, a3 as Vn, a4 as Fn, a5 as An, a6 as Tn, a7 as En, n as nn, a8 as on, u as Xn, s as Yn, O as Ln, W as In, w as sn, a9 as gt, I as Yt, A as Rn, x as an, t as $n } from "./Text-zqZVOzPB.js";
import { v as L, P as Bn, g as Qe, o as Pt } from "./theme-2eEBQPmF.js";
import "./styles-Cjdl64P4.js";
function Zn(e, s, u) {
  const c = document.createElement("div"), a = new Bn({ title: "Settings", expanded: true, container: c });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(a), c.setAttribute("id", "settings");
  const x = "hk_settingsPos";
  let h = null;
  try {
    const w = localStorage.getItem(x);
    w && (h = JSON.parse(w));
  } catch {
  }
  c.style.cssText = ["position:fixed", h ? `left:${h.left}px` : "left:8px", h ? `top:${h.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const p = () => {
    const w = c.querySelector(".tp-rotv_b");
    if (!w) {
      setTimeout(p, 200);
      return;
    }
    w.style.cursor = "move", w.style.userSelect = "none";
    let N = false, H = 0, Z = 0, ie = 0, m = 0;
    w.addEventListener("mousedown", (O) => {
      N = true, H = O.clientX, Z = O.clientY;
      const j = c.getBoundingClientRect();
      ie = j.left, m = j.top, c.style.left = `${ie}px`, c.style.top = `${m}px`;
    }), window.addEventListener("mousemove", (O) => {
      if (!N) return;
      const j = O.clientX - H, ce = O.clientY - Z, D = Math.max(0, Math.min(window.innerWidth - 40, ie + j)), P = Math.max(0, Math.min(window.innerHeight - 40, m + ce));
      c.style.left = `${D}px`, c.style.top = `${P}px`;
    }), window.addEventListener("mouseup", () => {
      if (N) {
        N = false;
        try {
          localStorage.setItem(x, JSON.stringify({ left: parseFloat(c.style.left), top: parseFloat(c.style.top) }));
        } catch {
        }
      }
    });
  };
  if (p(), s == null ? void 0 : s.nodes) {
    a.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 });
    const w = a.addFolder({ title: "\u{1F4D0} Grid", expanded: true });
    w.addBinding(e.gridSize, "val", { label: "Dimensi\xF3n (m)", min: 1, max: 100, step: 1 }), w.addBinding(e.gridStep, "val", { label: "Separaci\xF3n grid (m)", min: 0.05, max: 5, step: 0.05 }), w.addBinding(e.gridMajor, "val", { label: "Separaci\xF3n mayores (m)", min: 0.1, max: 50, step: 0.1 }), w.addBinding(e.cursorSnap, "val", { label: "Paso cursor (m)", min: 0.05, max: 5, step: 0.05 }), w.addBinding(e.gridVisible, "val", { label: "Mostrar" }), w.addBinding(e.gridOpacity, "val", { label: "Opacidad", min: 0, max: 1, step: 0.05 }), w.addBinding(e.gridXY, "val", { label: "Plano XY (planta)" }), w.addBinding(e.gridXZ, "val", { label: "Plano XZ (frontal)" }), w.addBinding(e.gridYZ, "val", { label: "Plano YZ (lateral)" }), a.addBinding(e.nodes, "val", { label: "Nodes" }), a.addBinding(e.elements, "val", { label: "Elements" }), a.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), a.addBinding(e.faces, "val", { label: "  Caras (fill)" }), a.addBinding(e.elemColumns, "val", { label: "  Columnas" }), a.addBinding(e.elemBeams, "val", { label: "  Vigas" }), a.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), a.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), a.addBinding(e.orientations, "val", { label: "Orientations" }), a.addBinding(e.sections, "val", { label: "Sections" }), a.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), a.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), a.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } });
  }
  if ((s == null ? void 0 : s.nodeInputs) || (s == null ? void 0 : s.elementInputs)) {
    const w = a.addFolder({ title: "Analysis Inputs" });
    w.addBinding(e.supports, "val", { label: "Supports" }), w.addBinding(e.loads, "val", { label: "Loads" }), w.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), w.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((s == null ? void 0 : s.deformOutputs) || (s == null ? void 0 : s.analyzeOutputs)) {
    const w = a.addFolder({ title: "Analysis Outputs" });
    w.addBinding(e.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), w.addBinding(e.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), w.addBinding(e.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), w.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), w.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), w.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), w.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  u && a.addBinding(e.solids, "val", { label: "Solids" });
  const v = a.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), z = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), _ = () => {
    const w = window.__hekatanClipApply;
    typeof w == "function" && w();
  };
  return v.addBinding(z, "enableX", { label: "Cortar X" }).on("change", _), v.addBinding(z, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", _), v.addBinding(z, "invertX", { label: "  invertir X" }).on("change", _), v.addBinding(z, "enableY", { label: "Cortar Y" }).on("change", _), v.addBinding(z, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", _), v.addBinding(z, "invertY", { label: "  invertir Y" }).on("change", _), v.addBinding(z, "enableZ", { label: "Cortar Z" }).on("change", _), v.addBinding(z, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", _), v.addBinding(z, "invertZ", { label: "  invertir Z" }).on("change", _), c;
}
function Dn(e) {
  return { gridSize: L.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: L.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: L.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: L.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: L.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: L.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: L.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: L.state((e == null ? void 0 : e.gridXZ) ?? false), gridYZ: L.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: L.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: L.state((e == null ? void 0 : e.nodes) ?? true), elements: L.state((e == null ? void 0 : e.elements) ?? true), edges: L.state((e == null ? void 0 : e.edges) ?? true), faces: L.state((e == null ? void 0 : e.faces) ?? true), elemColumns: L.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: L.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: L.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: L.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: L.state((e == null ? void 0 : e.orientations) ?? false), sections: L.state((e == null ? void 0 : e.sections) ?? true), secColumns: L.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: L.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: L.state((e == null ? void 0 : e.secFloor) ?? -1), supports: L.state((e == null ? void 0 : e.supports) ?? true), loads: L.state((e == null ? void 0 : e.loads) ?? false), deformedShape: L.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: L.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: L.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: L.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: L.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: L.state((e == null ? void 0 : e.flipAxes) ?? false), solids: L.state((e == null ? void 0 : e.solids) ?? true), custom3D: L.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: L.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: L.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: L.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function Nn(e, s, u) {
  const c = Qe(), a = new Mt(new oe(), new _t({ color: c.nodePoint }));
  return Pt((x, h) => {
    a.material.color.setHex(h.nodePoint);
  }), a.frustumCulled = false, L.derive(() => {
    e.nodes.val && a.geometry.setAttribute("position", new Ye(s.val.flat(), 3));
  }), L.derive(() => {
    u.val;
    const x = 0.02 * e.gridSize.val * 0.5;
    e.nodes.rawVal && (a.material.size = x * u.rawVal);
  }), L.derive(() => {
    a.visible = e.nodes.val;
  }), a;
}
function Wn(e, s, u) {
  const c = Qe(), a = new Se(), x = new rt(new oe(), new Le({ color: c.elementLine }));
  Pt((N, H) => {
    x.material.color.setHex(H.elementLine);
  }), x.frustumCulled = false, x.renderOrder = 2, a.add(x);
  const h = new Xe({ vertexColors: true, transparent: true, opacity: c.shellOpacity, side: Ie, depthWrite: false, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }), p = new Ve(new oe(), h);
  p.frustumCulled = false, a.add(p);
  let v = new Pe(c.shellWall), z = new Pe(c.shellSlab), _ = new Pe(c.shellTri);
  Pt((N, H) => {
    v = new Pe(H.shellWall), z = new Pe(H.shellSlab), _ = new Pe(H.shellTri), h.opacity = H.shellOpacity, h.needsUpdate = true;
  });
  function w(N, H) {
    const Z = Math.abs(H[0] - N[0]), ie = Math.abs(H[1] - N[1]), m = Math.abs(H[2] - N[2]);
    return m > Z && m > ie || ie > Z && ie > m;
  }
  return L.derive(() => {
    var _a;
    if (s.deformedShape.val, s.elemColumns.val, s.elemBeams.val, !s.elements.val) return;
    const N = s.elemColumns.rawVal, H = s.elemBeams.rawVal, Z = u.val, ie = ((_a = e.elements) == null ? void 0 : _a.val) || [], m = ie.filter((D) => {
      if (D.length !== 2) return true;
      const P = Z[D[0]], I = Z[D[1]];
      if (!P || !I) return true;
      const S = w(P, I);
      return !(S && !N || !S && !H);
    }).map((D) => Un(D).map((P) => [...Z[P[0]], ...Z[P[1]]]).flat()).flat();
    x.geometry.setAttribute("position", new Ye(m, 3));
    const O = [], j = [];
    function ce(D, P, I, S) {
      const b = [P[0] - D[0], P[1] - D[1], P[2] - D[2]], T = [S[0] - D[0], S[1] - D[1], S[2] - D[2]], Y = b[1] * T[2] - b[2] * T[1], E = b[2] * T[0] - b[0] * T[2], R = b[0] * T[1] - b[1] * T[0], $ = Math.sqrt(Y * Y + E * E + R * R);
      return $ < 1e-12 ? false : Math.abs(R / $) < 0.5;
    }
    for (const D of ie) if (D.length === 3) {
      const [P, I, S] = D;
      if (Z[P] && Z[I] && Z[S]) {
        O.push(...Z[P], ...Z[I], ...Z[S]);
        for (let b = 0; b < 3; b++) j.push(_.r, _.g, _.b);
      }
    } else if (D.length === 4) {
      const [P, I, S, b] = D;
      if (Z[P] && Z[I] && Z[S] && Z[b]) {
        const T = ce(Z[P], Z[I], Z[S], Z[b]) ? v : z;
        O.push(...Z[P], ...Z[I], ...Z[S]), O.push(...Z[P], ...Z[S], ...Z[b]);
        for (let Y = 0; Y < 6; Y++) j.push(T.r, T.g, T.b);
      }
    }
    O.length > 0 ? (p.geometry.dispose(), p.geometry = new oe(), p.geometry.setAttribute("position", new Ye(O, 3)), p.geometry.setAttribute("color", new Ye(j, 3)), p.geometry.computeVertexNormals(), p.visible = s.faces ? s.faces.rawVal : true) : p.visible = false;
  }), L.derive(() => {
    a.visible = s.elements.val;
  }), L.derive(() => {
    s.edges && (x.visible = s.edges.val);
  }), L.derive(() => {
    if (!s.faces) return;
    const N = s.faces.val;
    p.geometry.attributes.position ? p.visible = N : N || (p.visible = false);
  }), a;
}
function Un(e) {
  if (e.length === 2) return [e];
  const s = [];
  for (let u = 0; u < e.length; u++) s.push([e[u], e[(u + 1) % e.length]]);
  return s;
}
function Lt(e, s) {
  const u = Qe(), c = new Se();
  c.name = "hekatan-grid";
  const a = (s == null ? void 0 : s.planes) ?? ["xy"];
  let x = (s == null ? void 0 : s.majorStep) ?? 1, h = (s == null ? void 0 : s.minorStep) ?? 0.1;
  for (x <= 0 && (x = 1), h <= 0 && (h = 0.1); e / h > 500; ) h *= 2;
  for (; e / x > 100; ) x *= 2;
  const p = e / 2;
  x = Math.max(h, Math.round(x / h) * h);
  const z = new Pe(u.grid), _ = new Pe(u.grid).multiplyScalar(0.45), w = (H, Z, ie, m) => {
    const O = [], j = H === "xy" ? (S, b) => [S, b, 0] : H === "xz" ? (S, b) => [S, 0, b] : (S, b) => [0, S, b], ce = Math.floor(p / Z);
    for (let S = -ce; S <= ce; S++) {
      const b = S * Z, T = j(b, -p), Y = j(b, p);
      O.push(...T, ...Y);
    }
    for (let S = -ce; S <= ce; S++) {
      const b = S * Z, T = j(-p, b), Y = j(p, b);
      O.push(...T, ...Y);
    }
    const D = new oe();
    D.setAttribute("position", new Ye(O, 3));
    const P = new Le({ color: ie, transparent: true, opacity: m, depthWrite: false }), I = new rt(D, P);
    return I.name = `grid-${H}-${Z === h ? "minor" : "major"}`, I;
  }, N = (H, Z, ie) => {
    const m = H === "xy" ? (I, S) => [I, S, 0] : H === "xz" ? (I, S) => [I, 0, S] : (I, S) => [0, I, S], O = [[-p, -p], [p, -p], [p, p], [-p, p]], j = [];
    for (const [I, S] of O) j.push(...m(I, S));
    const ce = new oe();
    ce.setAttribute("position", new Ye(j, 3));
    const D = new Le({ color: Z, transparent: true, opacity: ie, depthWrite: false }), P = new pn(ce, D);
    return P.name = `grid-${H}-border`, P.renderOrder = 1, P;
  };
  for (const H of a) c.add(w(H, h, _, 0.12)), c.add(w(H, x, z, 0.4)), c.add(N(H, z, 0.55));
  return c.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: x, minorStep: h, gridSize: e, planes: [...a] }, c;
}
function Gn(e, s, u, c) {
  const a = new Se(), x = new Pn(0.5, 0.5, 0.5), h = new Xe({ color: 10166822 });
  return L.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, !s.supports.val) return;
    a.clear();
    const p = 0.05 * s.gridSize.val * 0.6;
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((v, z) => {
      const _ = u.val[z];
      if (!_) return;
      const w = new Ve(x, h);
      w.position.set(..._);
      const N = p * c.rawVal;
      w.scale.set(N, N, N), a.add(w);
    });
  }), L.derive(() => {
    if (c.val, !s.supports.rawVal) return;
    const v = 0.05 * s.gridSize.val * 0.6 * c.rawVal;
    a.children.forEach((z) => z.scale.set(v, v, v));
  }), L.derive(() => {
    a.visible = s.supports.val;
  }), a;
}
function Hn(e, s, u, c) {
  const a = new Se();
  a.name = "loadsGroup";
  function x(h) {
    if (h.length < 2) return 0.12 * s.gridSize.rawVal;
    const p = [1 / 0, 1 / 0, 1 / 0], v = [-1 / 0, -1 / 0, -1 / 0];
    for (const _ of h) for (let w = 0; w < 3; w++) p[w] = Math.min(p[w], _[w]), v[w] = Math.max(v[w], _[w]);
    return 0.08 * Math.max(v[0] - p[0], v[1] - p[1], v[2] - p[2], 0.1);
  }
  return L.derive(() => {
    var _a, _b, _c;
    if (s.deformedShape.val, !s.loads.val) return;
    a.children.forEach((v) => v.dispose()), a.clear();
    const h = u.val, p = x(h);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((v, z) => {
      const _ = h[z];
      if (!_) return;
      const w = new g(...v.slice(0, 3));
      if (w.lengthSq() < 1e-30) return;
      w.normalize();
      const N = new tt(w, new g(..._), 1, 15637248, 0.3, 0.3), H = p * c.rawVal;
      N.scale.set(H, H, H), a.add(N);
    });
  }), L.derive(() => {
    if (c.val, !s.loads.rawVal) return;
    const p = x(u.rawVal) * c.rawVal;
    a.children.forEach((v) => v.scale.set(p, p, p));
  }), L.derive(() => {
    a.visible = s.loads.val;
  }), a;
}
function Kn(e, s, u) {
  const c = new Se();
  return L.derive(() => {
    if (!e.nodesIndexes.val) return;
    c.children.forEach((x) => x.dispose()), c.clear();
    const a = 0.05 * e.gridSize.val * 0.6;
    s.val.forEach((x, h) => {
      const p = new Ce(`${h}`);
      p.position.set(...x), p.updateScale(a * u.rawVal), c.add(p);
    });
  }), L.derive(() => {
    if (u.val, !e.nodesIndexes.rawVal) return;
    const a = 0.05 * e.gridSize.val * 0.6;
    c.children.forEach((x) => x.updateScale(a * u.rawVal));
  }), L.derive(() => {
    c.visible = e.nodesIndexes.val;
  }), c;
}
function qn(e, s, u, c) {
  const a = new Se();
  return L.derive(() => {
    var _a;
    if (s.deformedShape.val, !s.elementsIndexes.val) return;
    a.children.forEach((h) => h.dispose()), a.clear();
    const x = 0.05 * s.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((h, p) => {
      const v = new Ce(`${p}`, void 0, "#001219");
      v.position.set(...Qn(h.map((z) => u.rawVal[z]))), v.updateScale(x * c.rawVal), a.add(v);
    });
  }), L.derive(() => {
    if (c.val, !s.elementsIndexes.rawVal) return;
    const x = 0.05 * s.gridSize.val * 0.6;
    a.children.forEach((h) => h.updateScale(x * c.rawVal));
  }), L.derive(() => {
    a.visible = s.elementsIndexes.val;
  }), a;
}
function Qn(e) {
  const s = e.reduce((c, a) => [c[0] + a[0], c[1] + a[1], c[2] + a[2]], [0, 0, 0]), u = e.length;
  return [s[0] / u, s[1] / u, s[2] / u];
}
function ln(e, s) {
  const u = new Se(), c = 0.05 * e * 1, a = Qe(), x = new Ce("X", "red", "transparent"), h = new Ce(s ? "Z" : "Y", "green", "transparent"), p = new Ce(s ? "Y" : "Z", "blue", "transparent"), v = new tt(new g(1, 0, 0), new g(0, 0, 0), 1, a.axisArrow, 0.2, 0.2), z = new tt(new g(0, 1, 0), new g(0, 0, 0), 1, a.axisArrow, 0.2, 0.2), _ = new tt(new g(0, 0, 1), new g(0, 0, 0), 1, a.axisArrow, 0.2, 0.2);
  return x.position.set(1.3 * c, 0, 0), h.position.set(0, 1.3 * c, 0), p.position.set(0, 0, 1.3 * c), x.updateScale(0.4 * c), h.updateScale(0.4 * c), p.updateScale(0.4 * c), v.scale.set(c, c, c), z.scale.set(c, c, c), _.scale.set(c, c, c), u.add(v, z, _, x, h, p), u;
}
function Zt(e, s) {
  const u = new g(...e), a = new g(...s).clone().sub(u), x = a.length(), h = a.dot(new g(1, 0, 0)) / x, p = a.dot(new g(0, 1, 0)) / x, v = a.dot(new g(0, 0, 1)) / x, z = Math.sqrt(h ** 2 + p ** 2);
  let _ = new Xt().fromArray([[h, p, v], [-p / z, h / z, 0], [-h * v / z, -p * v / z, z]].flat());
  return v === 1 && (_ = new Xt().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), v === -1 && (_ = new Xt().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new un().setFromMatrix3(_);
}
function $t(e, s) {
  return e == null ? void 0 : e.map((u, c) => (9 * u + s[c]) / 10);
}
function wt(e) {
  const s = e.reduce((c, a) => [c[0] + a[0], c[1] + a[1], c[2] + a[2]], [0, 0, 0]), u = e.length;
  return [s[0] / u, s[1] / u, s[2] / u];
}
function Jn(e, s, u) {
  const c = wt([s, u]), a = wt([e, u]), x = wt([e, s]), h = new g(...c).sub(new g(...a)).normalize(), p = new g(...u).sub(new g(...x)).normalize(), v = h.clone().cross(p).normalize(), z = v.clone().cross(h).normalize();
  return new un().makeBasis(h, z, v);
}
function On(e, s, u, c) {
  const a = new Se(), x = new oe(), h = new Le({ vertexColors: true }), p = [0, 0, 0], v = [1, 0, 0], z = [0, 1, 0], _ = [0, 0, 1];
  x.setAttribute("position", new Ye([...p, ...v, ...p, ...z, ...p, ..._], 3));
  const w = [255, 0, 0], N = [0, 255, 0], H = [0, 0, 255];
  return x.setAttribute("color", new Ye([...w, ...w, ...N, ...N, ...H, ...H], 3)), L.derive(() => {
    var _a;
    s.deformedShape.val, s.orientations.val && (a.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((Z) => {
      const ie = new rt(x, h), m = u.rawVal[Z[0]], O = u.rawVal[Z[1]];
      if (Z.length === 2 && (ie.position.set(...$t(m, O)), ie.rotation.setFromRotationMatrix(Zt(m, O))), Z.length === 3) {
        const D = u.rawVal[Z[2]];
        ie.position.set(...wt([m, O, D])), ie.rotation.setFromRotationMatrix(Jn(m, O, D));
      }
      const ce = 0.05 * s.gridSize.rawVal * 0.75 * c.rawVal;
      ie.scale.set(ce, ce, ce), a.add(ie);
    }));
  }), L.derive(() => {
    if (c.val, !s.orientations.rawVal) return;
    const ie = 0.05 * s.gridSize.val * 0.75 * c.rawVal;
    a.children.forEach((m) => m.scale.set(ie, ie, ie));
  }), L.derive(() => {
    a.visible = s.orientations.val;
  }), a;
}
function jn(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const s = (e.b * 100).toFixed(0), u = (e.h * 100).toFixed(0);
    return `${s}x${u}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function eo(e, s, u, c) {
  const a = new Se();
  function x(P, I) {
    const S = P / 2, b = I / 2, T = new Float32Array([0, -S, -b, 0, S, -b, 0, S, b, 0, -S, -b, 0, S, b, 0, -S, b]), Y = new oe();
    Y.setAttribute("position", new Me(T, 3));
    const E = new Float32Array([0, -S, -b, 0, S, -b, 0, S, b, 0, -S, b, 0, -S, -b]), R = new oe();
    return R.setAttribute("position", new Me(E, 3)), { fill: Y, outline: R };
  }
  function h(P, I = 24) {
    const S = P / 2, b = new Float32Array(I * 9);
    for (let R = 0; R < I; R++) {
      const $ = R / I * Math.PI * 2, G = (R + 1) / I * Math.PI * 2;
      b[R * 9] = 0, b[R * 9 + 1] = 0, b[R * 9 + 2] = 0, b[R * 9 + 3] = 0, b[R * 9 + 4] = S * Math.cos($), b[R * 9 + 5] = S * Math.sin($), b[R * 9 + 6] = 0, b[R * 9 + 7] = S * Math.cos(G), b[R * 9 + 8] = S * Math.sin(G);
    }
    const T = new oe();
    T.setAttribute("position", new Me(b, 3));
    const Y = new Float32Array((I + 1) * 3);
    for (let R = 0; R <= I; R++) {
      const $ = R / I * Math.PI * 2;
      Y[R * 3] = 0, Y[R * 3 + 1] = S * Math.cos($), Y[R * 3 + 2] = S * Math.sin($);
    }
    const E = new oe();
    return E.setAttribute("position", new Me(Y, 3)), { fill: T, outline: E };
  }
  function p(P, I, S, b) {
    const T = S ?? I * 0.08, Y = b ?? P * 0.07, E = P / 2, R = I / 2, $ = R - T, G = Y / 2, U = [];
    function C(ne, re, de, le) {
      U.push(0, ne, re, 0, de, re, 0, de, le, 0, ne, re, 0, de, le, 0, ne, le);
    }
    C(-E, -R, E, -$), C(-G, -$, G, $), C(-E, $, E, R);
    const B = new oe();
    B.setAttribute("position", new Me(new Float32Array(U), 3));
    const se = new Float32Array([0, -E, -R, 0, E, -R, 0, E, -$, 0, G, -$, 0, G, $, 0, E, $, 0, E, R, 0, -E, R, 0, -E, $, 0, -G, $, 0, -G, -$, 0, -E, -$, 0, -E, -R]), Q = new oe();
    return Q.setAttribute("position", new Me(se, 3)), { fill: B, outline: Q };
  }
  function v(P, I, S) {
    const b = P / 2, T = I / 2, Y = b - S, E = T - S, R = [];
    function $(B, se, Q, ne) {
      R.push(0, B, se, 0, Q, se, 0, Q, ne, 0, B, se, 0, Q, ne, 0, B, ne);
    }
    $(-b, -T, b, -E), $(-b, E, b, T), $(-b, -E, -Y, E), $(Y, -E, b, E);
    const G = new oe();
    G.setAttribute("position", new Me(new Float32Array(R), 3));
    const U = new Float32Array([0, -b, -T, 0, b, -T, 0, b, -T, 0, b, T, 0, b, T, 0, -b, T, 0, -b, T, 0, -b, -T, 0, -Y, -E, 0, Y, -E, 0, Y, -E, 0, Y, E, 0, Y, E, 0, -Y, E, 0, -Y, E, 0, -Y, -E]), C = new oe();
    return C.setAttribute("position", new Me(U, 3)), { fill: G, outline: C };
  }
  function z(P, I, S) {
    const b = P / 2, T = I / 2, Y = b - S, E = T - S, R = new oe(), $ = new Float32Array([0, -Y, -E, 0, Y, -E, 0, Y, E, 0, -Y, -E, 0, Y, E, 0, -Y, E]);
    R.setAttribute("position", new Me($, 3));
    const G = [];
    function U(Q, ne, re, de) {
      G.push(0, Q, ne, 0, re, ne, 0, re, de, 0, Q, ne, 0, re, de, 0, Q, de);
    }
    U(-b, -T, b, -E), U(-b, E, b, T), U(-b, -E, -Y, E), U(Y, -E, b, E);
    const C = new oe();
    C.setAttribute("position", new Me(new Float32Array(G), 3));
    const B = new Float32Array([0, -b, -T, 0, b, -T, 0, b, -T, 0, b, T, 0, b, T, 0, -b, T, 0, -b, T, 0, -b, -T, 0, -Y, -E, 0, Y, -E, 0, Y, -E, 0, Y, E, 0, Y, E, 0, -Y, E, 0, -Y, E, 0, -Y, -E]), se = new oe();
    return se.setAttribute("position", new Me(B, 3)), { concFill: R, steelFillGeom: C, outline: se };
  }
  function _(P, I, S) {
    const b = [], T = [[0, -P / 2, -I / 2], [0, -P / 2 + S, -I / 2], [0, -P / 2 + S, I / 2 - S], [0, P / 2, I / 2 - S], [0, P / 2, I / 2], [0, -P / 2, I / 2]], Y = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const G of Y) b.push(...T[G]);
    const E = new oe();
    E.setAttribute("position", new Me(new Float32Array(b), 3));
    const R = [];
    for (let G = 0; G < T.length; G++) {
      const U = (G + 1) % T.length;
      R.push(...T[G], ...T[U]);
    }
    const $ = new oe();
    return $.setAttribute("position", new Me(new Float32Array(R), 3)), { fill: E, outline: $ };
  }
  function w(P, I, S, b) {
    const T = b / 2, Y = [], E = [[0, -P - T, -I / 2], [0, -S - T, -I / 2], [0, -S - T, I / 2 - S], [0, -T, I / 2 - S], [0, -T, I / 2], [0, -P - T, I / 2]], R = [[0, T, -I / 2], [0, T + S, -I / 2], [0, T + S, I / 2 - S], [0, P + T, I / 2 - S], [0, P + T, I / 2], [0, T, I / 2]], $ = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const B of $) Y.push(...E[B]);
    for (const B of $) Y.push(...R[B]);
    const G = new oe();
    G.setAttribute("position", new Me(new Float32Array(Y), 3));
    const U = [];
    for (const B of [E, R]) for (let se = 0; se < B.length; se++) {
      const Q = (se + 1) % B.length;
      U.push(...B[se], ...B[Q]);
    }
    const C = new oe();
    return C.setAttribute("position", new Me(new Float32Array(U), 3)), { fill: G, outline: C };
  }
  function N(P, I, S, b) {
    const T = I / 2, Y = P, E = [[0, -Y, -T], [0, -Y, -T + S], [0, -b, -T + S], [0, -b, T - S], [0, -Y, T - S], [0, -Y, T], [0, 0, T], [0, 0, -T]], R = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], $ = [];
    for (const B of R) $.push(...E[B]);
    const G = new oe();
    G.setAttribute("position", new Me(new Float32Array($), 3));
    const U = [];
    for (let B = 0; B < E.length; B++) {
      const se = (B + 1) % E.length;
      U.push(...E[B], ...E[se]);
    }
    const C = new oe();
    return C.setAttribute("position", new Me(new Float32Array(U), 3)), { fill: G, outline: C };
  }
  function H(P, I, S, b, T) {
    const Y = I / 2, E = T / 2, R = [], $ = [[0, -P, -Y], [0, -P, -Y + S], [0, -E - b, -Y + S], [0, -E - b, Y - S], [0, -P, Y - S], [0, -P, Y], [0, -E, Y], [0, -E, -Y]], G = $.map((Q) => [Q[0], -Q[1], Q[2]]), U = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const Q of U) R.push(...$[Q]);
    for (const Q of U) R.push(...G[Q]);
    const C = new oe();
    C.setAttribute("position", new Me(new Float32Array(R), 3));
    const B = [];
    for (const Q of [$, G]) for (let ne = 0; ne < Q.length; ne++) {
      const re = (ne + 1) % Q.length;
      B.push(...Q[ne], ...Q[re]);
    }
    const se = new oe();
    return se.setAttribute("position", new Me(new Float32Array(B), 3)), { fill: C, outline: se };
  }
  function Z(P, I, S, b) {
    const T = P / 2, Y = I / 2, E = b / 2, R = [[0, -E, -Y], [0, E, -Y], [0, E, Y - S], [0, T, Y - S], [0, T, Y], [0, -T, Y], [0, -T, Y - S], [0, -E, Y - S]], $ = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], G = [];
    for (const se of $) G.push(...R[se]);
    const U = new oe();
    U.setAttribute("position", new Me(new Float32Array(G), 3));
    const C = [];
    for (let se = 0; se < R.length; se++) {
      const Q = (se + 1) % R.length;
      C.push(...R[se], ...R[Q]);
    }
    const B = new oe();
    return B.setAttribute("position", new Me(new Float32Array(C), 3)), { fill: U, outline: B };
  }
  function ie(P, I, S = 24) {
    const b = P / 2, T = b - I, Y = [];
    for (let G = 0; G < S; G++) {
      const U = G / S * Math.PI * 2, C = (G + 1) / S * Math.PI * 2, B = Math.cos(U), se = Math.sin(U), Q = Math.cos(C), ne = Math.sin(C);
      Y.push(0, b * B, b * se, 0, b * Q, b * ne, 0, T * Q, T * ne), Y.push(0, b * B, b * se, 0, T * Q, T * ne, 0, T * B, T * se);
    }
    const E = new oe();
    E.setAttribute("position", new Me(new Float32Array(Y), 3));
    const R = [];
    for (let G = 0; G < S; G++) {
      const U = G / S * Math.PI * 2, C = (G + 1) / S * Math.PI * 2;
      R.push(0, b * Math.cos(U), b * Math.sin(U), 0, b * Math.cos(C), b * Math.sin(C)), R.push(0, T * Math.cos(U), T * Math.sin(U), 0, T * Math.cos(C), T * Math.sin(C));
    }
    const $ = new oe();
    return $.setAttribute("position", new Me(new Float32Array(R), 3)), { fill: E, outline: $ };
  }
  const m = new Xe({ color: 52479, transparent: true, opacity: 0.35, side: Ie, depthWrite: false }), O = new Le({ color: 52479 }), j = new Xe({ color: 16750848, transparent: true, opacity: 0.4, side: Ie, depthWrite: false }), ce = new Le({ color: 16750848 });
  function D(P, I) {
    const S = Math.abs(I[0] - P[0]), b = Math.abs(I[1] - P[1]), T = Math.abs(I[2] - P[2]);
    return T > S && T > b || b > S && b > T;
  }
  return L.derive(() => {
    var _a, _b;
    s.deformedShape.val, s.secColumns.val, s.secBeams.val, s.secFloor.val;
    const P = s.secColumns.rawVal, I = s.secBeams.rawVal;
    if (!P && !I) {
      a.children.forEach((E) => {
        E instanceof Ce && E.dispose();
      }), a.clear();
      return;
    }
    a.children.forEach((E) => {
      E instanceof Ce && E.dispose();
    }), a.clear();
    const S = (_a = e.elements) == null ? void 0 : _a.val, b = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!S || !b) return;
    const T = b.sectionShapes, Y = s.secFloor.rawVal;
    S.forEach((E, R) => {
      if (E.length !== 2) return;
      const $ = u.rawVal[E[0]], G = u.rawVal[E[1]];
      if (!$ || !G) return;
      const U = D($, G);
      if (U && !P || !U && !I) return;
      if (Y >= 0) {
        const ne = Math.min($[1], G[1]);
        Math.max($[1], G[1]);
        const re = s.gridSize.rawVal || 3;
        if (Math.floor(ne / re + 0.01) !== Y) return;
      }
      const C = T == null ? void 0 : T.get(R);
      if (!C) return;
      const B = [($[0] + G[0]) / 2, ($[1] + G[1]) / 2, ($[2] + G[2]) / 2], se = Zt($, G);
      if (C.type === "CFT") {
        const ne = z(C.b, C.h, C.tw ?? C.b * 0.05), re = new Ve(ne.concFill, m);
        re.position.set(...B), re.rotation.setFromRotationMatrix(se), a.add(re);
        const de = new Ve(ne.steelFillGeom, j);
        de.position.set(...B), de.rotation.setFromRotationMatrix(se), a.add(de);
        const le = new Ze(ne.outline, ce);
        le.position.set(...B), le.rotation.setFromRotationMatrix(se), a.add(le);
      } else {
        let ne, re, de;
        switch (C.type) {
          case "rect":
            ne = x(C.b, C.h), re = m, de = O;
            break;
          case "circ":
            ne = h(C.d), re = m, de = O;
            break;
          case "I":
            ne = p(C.b, C.h, C.tf, C.tw), re = j, de = ce;
            break;
          case "HSS":
            ne = v(C.b, C.h, C.tw ?? C.b * 0.05), re = j, de = ce;
            break;
          case "CFT":
            ne = z(C.b, C.h, C.tw ?? C.b * 0.05), re = j, de = ce;
            break;
          case "L":
            ne = _(C.b ?? C.h, C.h, C.t ?? C.tw ?? 3e-3), re = j, de = ce;
            break;
          case "2L":
            ne = w(C.b ?? C.h, C.h, C.t ?? C.tw ?? 3e-3, C.dis ?? 0.01), re = j, de = ce;
            break;
          case "C":
          case "coldC":
            ne = N(C.b, C.h, C.tf ?? C.t ?? 3e-3, C.tw ?? C.t ?? 3e-3), re = j, de = ce;
            break;
          case "2C":
            ne = H(C.b, C.h, C.tf ?? 5e-3, C.tw ?? 5e-3, C.dis ?? 0.01), re = j, de = ce;
            break;
          case "T":
            ne = Z(C.b, C.h, C.tf ?? 0.01, C.tw ?? 6e-3), re = j, de = ce;
            break;
          case "pipe":
            ne = ie(C.d, C.tw ?? C.d * 0.05), re = j, de = ce;
            break;
          default:
            return;
        }
        const le = new Ve(ne.fill, re);
        le.position.set(...B), le.rotation.setFromRotationMatrix(se), a.add(le);
        const he = new Ze(ne.outline, de);
        he.position.set(...B), he.rotation.setFromRotationMatrix(se), a.add(he);
      }
      const Q = jn(C);
      if (Q) {
        const re = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(C.type) ? "#ff9900" : "#00ccff", de = new Ce(Q, re, "transparent");
        de.position.set(B[0], B[1], B[2]);
        const le = 0.05 * s.gridSize.rawVal * 0.5;
        de.updateScale(le * ((c == null ? void 0 : c.rawVal) ?? 1)), a.add(de);
      }
    });
  }), c && L.derive(() => {
    if (c.val, !s.sections.rawVal) return;
    const P = 0.05 * s.gridSize.val * 0.5;
    a.children.forEach((I) => {
      I instanceof Ce && I.updateScale(P * c.rawVal);
    });
  }), L.derive(() => {
    a.visible = s.sections.val;
  }), a;
}
class bt extends Se {
  constructor(s, u, c, a, x, h, p) {
    super();
    const v = new St().moveTo(0, 0).lineTo(0, h[1]).lineTo(c, h[1]).lineTo(c, 0).lineTo(0, 0), z = v.getPoints(), _ = new oe().setFromPoints(z);
    this.lines = new Ze(_, new Le({ color: Qe().resultOutline })), this.lines.position.set(...s), this.lines.rotation.setFromRotationMatrix(a), p && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const w = new kt(v), N = new Xe({ color: h[1] > 0 ? 24435 : 11411474, side: Ie });
    this.mesh = new Ve(w, N), this.mesh.position.set(...s), this.mesh.rotation.setFromRotationMatrix(a), p && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new Ce(`${x[1].toFixed(4)}`), this.normalizedResult = h, this.textPosition = wt([s, u]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(a), this.add(this.text);
  }
  updateScale(s) {
    this.lines.scale.set(1, s * 2, 1), this.mesh.scale.set(1, s * 2, 1), this.text.updateScale(s * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * s);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class rn extends Se {
  constructor(s, u, c, a, x, h, p) {
    super();
    const v = x[0] * c / (x[0] + x[1]), z = x[0] * x[1] > 0;
    if (this.text = new Ce(`${x[0].toFixed(4)}`), this.text2 = new Ce(`${(x[1] * -1).toFixed(4)}`), this.normalizedResult = h, this.textPosition = $t(s, u), this.text2Position = $t(u, s), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(a), this.text2.rotation.setFromRotationMatrix(a), this.add(this.text, this.text2), z) {
      const _ = new St().moveTo(0, 0).lineTo(0, h[0]).lineTo(v, 0).lineTo(0, 0), w = new St().moveTo(v, 0).lineTo(c, -h[1]).lineTo(c, 0).lineTo(v, 0), N = _.getPoints(), H = w.getPoints(), Z = new oe().setFromPoints(N), ie = new oe().setFromPoints(H), m = new Le({ color: Qe().resultOutline });
      this.lines = new Ze(Z, m), this.lines2 = new Ze(ie, m), this.lines.position.set(...s), this.lines2.position.set(...s), this.lines.rotation.setFromRotationMatrix(a), this.lines2.rotation.setFromRotationMatrix(a), p && this.lines.rotateX(Math.PI / 2), p && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const O = new kt(_), j = new kt(w), ce = new Xe({ color: h[0] > 0 ? 24435 : 11411474, side: Ie }), D = new Xe({ color: -h[1] > 0 ? 24435 : 11411474, side: Ie });
      this.mesh = new Ve(O, ce), this.mesh2 = new Ve(j, D), this.mesh.position.set(...s), this.mesh2.position.set(...s), this.mesh.rotation.setFromRotationMatrix(a), this.mesh2.rotation.setFromRotationMatrix(a), p && this.mesh.rotateX(Math.PI / 2), p && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const _ = new St().moveTo(0, 0).lineTo(0, h[0]).lineTo(c, -h[1]).lineTo(c, 0).lineTo(0, 0), w = _.getPoints(), N = new oe().setFromPoints(w);
      this.lines = new Ze(N, new Le({ color: Qe().resultOutline })), this.lines.position.set(...s), this.lines.rotation.setFromRotationMatrix(a), p && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const H = new kt(_), Z = new Xe({ color: h[0] > 0 ? 24435 : 11411474, side: Ie });
      this.mesh = new Ve(H, Z), this.mesh.position.set(...s), this.mesh.rotation.setFromRotationMatrix(a), p && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var hn = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(hn || {});
function to(e, s, u, c) {
  const a = new Se(), x = { normals: bt, shearsY: bt, shearsZ: bt, torsions: bt, bendingsY: rn, bendingsZ: rn };
  return L.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, u.val, s.frameResults.val == "none") return;
    a.children.forEach((p) => p.dispose()), a.clear();
    const h = hn[s.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[h]) == null ? void 0 : _b.forEach((p, v) => {
      var _a2, _b2;
      const z = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[v]) ?? [0, 1], _ = u.rawVal[z[0]], w = u.rawVal[z[1]], N = new g(...w).distanceTo(new g(..._)), H = no((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[h]), Z = p == null ? void 0 : p.map((j) => j / (H === 0 ? 1 : H)), ie = Zt(_, w), m = new x[h](_, w, N, ie, p ?? [0, 0], Z ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(h)), O = 0.05 * s.gridSize.rawVal;
      m.updateScale(O * c.rawVal), a.add(m);
    });
  }), L.derive(() => {
    if (c.val, s.frameResults.rawVal == "none") return;
    const h = 0.05 * s.gridSize.val;
    a.children.forEach((p) => p.updateScale(h * c.rawVal));
  }), L.derive(() => {
    a.visible = s.frameResults.val != "none";
  }), a;
}
function no(e) {
  let s = 0;
  return e == null ? void 0 : e.forEach((u) => {
    const c = Math.max(...u ?? [0, 0]);
    c > s && (s = c);
  }), s;
}
class oo extends Se {
  constructor(s, u, c) {
    super();
    const a = u === Dt.reactions;
    c[0] && (this.xText1 = new Ce(`${a ? "Fx" : "Dx"}: ` + c[0].toFixed(4))), c[3] && (this.xText2 = new Ce(`${a ? "Mx" : "Rx"}: ` + c[3].toFixed(4))), c[1] && (this.yText1 = new Ce(`${a ? "Fy" : "Dy"}: ` + c[1].toFixed(4))), c[4] && (this.yText2 = new Ce(`${a ? "My" : "Ry"}: ` + c[4].toFixed(4))), c[2] && (this.zText1 = new Ce(`${a ? "Fz" : "Dz"}: ` + c[2].toFixed(4))), c[5] && (this.zText2 = new Ce(`${a ? "Mz" : "Rz"}: ` + c[5].toFixed(4))), (c[0] || c[3]) && (this.xArrow = new tt(new g(1, 0, 0), new g(0, 0, 0), 1, 15637248, 0.3, 0.3)), (c[1] || c[4]) && (this.yArrow = new tt(new g(0, 1, 0), new g(0, 0, 0), 1, 15637248, 0.3, 0.3)), (c[2] || c[5]) && (this.zArrow = new tt(new g(0, 0, 1), new g(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...s), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
var Dt = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(Dt || {});
function so(e, s, u, c) {
  const a = new Se();
  return L.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, s.nodeResults.val == "none") return;
    a.children.forEach((p) => p.dispose()), a.clear();
    const x = Dt[s.nodeResults.rawVal], h = 0.05 * s.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[x]) == null ? void 0 : _b.forEach((p, v) => {
      const z = new oo(u.rawVal[v], x, p ?? [0, 0, 0, 0, 0, 0]);
      z.updateScale(h * c.rawVal), a.add(z);
    });
  }), L.derive(() => {
    if (c.val, s.nodeResults.rawVal == "none") return;
    const x = 0.05 * s.gridSize.val;
    a.children.forEach((h) => h.updateScale(x * c.rawVal));
  }), L.derive(() => {
    a.visible = s.nodeResults.val != "none";
  }), a;
}
function ao({ drawingObj: e, gridObj: s, scene: u, getActiveCamera: c, controls: a, gridSize: x, derivedDisplayScale: h, rendererElm: p, viewerRender: v }) {
  const z = new Cn(), _ = new zn(), w = (n) => {
    const o = p.getBoundingClientRect(), r = n.clientX - o.left, t = n.clientY - o.top, f = o.width || 1, d = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const l = f / 2;
      if (r >= l) return _.x = (r - l) / l * 2 - 1, _.y = -(t / d) * 2 + 1, window.__hekatanSplitCamera ?? c();
      _.x = r / l * 2 - 1;
    } else _.x = r / f * 2 - 1;
    return _.y = -(t / d) * 2 + 1, c();
  }, N = new Ve(new yt(1e4, 1e4), new Xe({ side: Ie, transparent: true, opacity: 0, depthWrite: false }));
  N.visible = true, N.frustumCulled = false, u.add(N);
  const H = (n, o, r) => {
    const t = new Ve(new yt(1e4, 1e4), new Xe({ side: Ie, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, r), t.visible = false, t.frustumCulled = false, u.add(t), t;
  }, Z = H(Math.PI / 2, 0, 0), ie = H(0, Math.PI / 2, 0), m = () => {
    if (Z.visible = !!window.__hekatanGridPlaneXZ, ie.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanShowOrthoPlanes !== false && X.visible) {
      const r = z.intersectObjects([X, W, K], false);
      if (r.length > 0) return r;
    }
    const o = [N];
    return Z.visible && o.push(Z), ie.visible && o.push(ie), Ne.visible && at.length > 0 && o.push(...at), z.intersectObjects(o, false);
  }, O = new Mt(new oe(), new _t()), j = new Mt(new oe(), new _t({ color: "gray", sizeAttenuation: false, size: 6 })), ce = new Mt(new oe(), new _t({ color: "orange", size: 0.1 }));
  u.add(ce);
  const D = document.createElement("input");
  D.id = "hk-rubber-label", D.type = "text", D.spellcheck = false, D.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, D.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none"].join(";") + ";", document.body.appendChild(D);
  let P = null, I = null, S = false;
  const b = new g(), T = (n, o, r, t, f, d) => {
    const A = t - n, l = f - o, i = d - r, M = Math.hypot(A, l, i);
    if (M < 0.01) {
      D.style.display = "none";
      return;
    }
    P = [n, o, r], I = [A / M, l / M, i / M], b.set((n + t) / 2, (o + f) / 2, (r + d) / 2), b.project(c());
    const V = p.getBoundingClientRect(), y = V.left + (b.x * 0.5 + 0.5) * V.width, k = V.top + (-b.y * 0.5 + 0.5) * V.height;
    if (D.style.left = y + "px", D.style.top = k + "px", D.style.display = "block", !S) {
      if (D.value = `${M.toFixed(2)} m`, document.activeElement !== D) {
        const F = document.activeElement;
        F && (F.tagName === "INPUT" || F.tagName === "TEXTAREA") && F !== D || D.focus({ preventScroll: true });
      }
      try {
        D.select();
      } catch {
      }
    }
  }, Y = () => {
    D.style.display = "none", P = null, I = null, S = false, document.activeElement === D && D.blur();
  }, E = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      ze = n, pe(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), D.blur();
      return;
    }
    if (!P || !I || !e.polylines) return;
    let r = I[0], t = I[1], f = I[2];
    fe === "x" ? (r = Math.sign(r) || 1, t = 0, f = 0) : fe === "y" ? (r = 0, t = Math.sign(t) || 1, f = 0) : fe === "z" && (r = 0, t = 0, f = Math.sign(f) || 1);
    const d = P[0] + r * n, A = P[1] + t * n, l = P[2] + f * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [d, A, l]];
    const i = e.polylines.rawVal, M = i.length ? i[i.length - 1] : [];
    e.polylines.val = [...i.slice(0, -1), [...M, e.points.rawVal.length - 1]], D.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    v();
  }, R = (n) => {
    let o = n.trim().toLowerCase().replace(/m$/g, "").trim();
    if (!o) return null;
    const r = o.startsWith("@");
    if (r && (o = o.slice(1)), o.includes("<")) {
      const f = o.split("<").map((d) => parseFloat(d.trim()));
      if (f.some(isNaN)) return null;
      if (f.length === 2) {
        const [d, A] = f;
        return r ? { kind: "relPolar", L: d, ang: A } : { kind: "absPolar", L: d, ang: A };
      }
      if (f.length === 3 && r) {
        const [d, A, l] = f;
        return { kind: "relSpherical", L: d, az: A, el: l };
      }
      return null;
    }
    if (o.includes(",")) {
      const f = o.split(",").map((i) => parseFloat(i.trim()));
      if (f.some(isNaN)) return null;
      const [d, A, l = 0] = f;
      return r ? { kind: "relCart", dx: d, dy: A, dz: l } : { kind: "absCart", x: d, y: A, z: l };
    }
    const t = parseFloat(o);
    return isNaN(t) || t <= 0 ? null : { kind: "length", L: t };
  }, $ = (n) => {
    if (!n) return null;
    if (n.kind === "absCart") return [n.x, n.y, n.z];
    if (n.kind === "relCart") return P ? [P[0] + n.dx, P[1] + n.dy, P[2] + n.dz] : null;
    if (n.kind === "absPolar") {
      const o = n.ang * Math.PI / 180;
      return [n.L * Math.cos(o), n.L * Math.sin(o), 0];
    }
    if (n.kind === "relPolar") {
      if (!P) return null;
      const o = n.ang * Math.PI / 180;
      return [P[0] + n.L * Math.cos(o), P[1] + n.L * Math.sin(o), P[2]];
    }
    if (n.kind === "relSpherical") {
      if (!P) return null;
      const o = n.az * Math.PI / 180, r = n.el * Math.PI / 180, t = n.L * Math.cos(r);
      return [P[0] + t * Math.cos(o), P[1] + t * Math.sin(o), P[2] + n.L * Math.sin(r)];
    }
    return null;
  }, G = (n) => {
    var _a;
    if (!e.polylines) return;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, n];
    const o = e.polylines.rawVal, r = o.length ? o[o.length - 1] : [];
    e.polylines.val = [...o.slice(0, -1), [...r, e.points.rawVal.length - 1]], D.blur();
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    v();
  };
  D.addEventListener("keydown", (n) => {
    if (n.key === "Enter") {
      n.preventDefault();
      const r = R(D.value);
      if (!r) return;
      if (S = false, r.kind === "length") E(r.L), pe(`\u270F DDE ${r.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = $(r);
        if (!t) return;
        G(t);
        const f = r.kind;
        pe(`\u270F ${f} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
      }
      return;
    }
    if (n.key === "Escape") {
      n.preventDefault(), S = false, D.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!S && D.style.display === "block") try {
          D.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && (S = true);
  }), window.addEventListener("keydown", (n) => {
    if (!P || !I || document.activeElement === D) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (D.value = n.key, D.focus(), D.setSelectionRange(1, 1), n.preventDefault());
  });
  const U = document.createElement("div");
  U.id = "hk-coord-readout", U.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", U.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(U);
  const C = new Ze(new oe().setFromPoints([new g(0, 0, 0), new g(0, 0, 0)]), new ft({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  C.frustumCulled = false, C.visible = false, u.add(C);
  const B = new Se();
  B.frustumCulled = false, B.visible = false, u.add(B);
  const se = (n) => {
    const o = new oe().setFromPoints([new g(0, 0, 0), new g(0, 0, 0)]), r = new ft({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new Ze(o, r);
  }, Q = se(16711680), ne = se(65280), re = se(35071);
  B.add(Q, ne, re);
  const de = (n) => {
    const o = new oe().setFromPoints([new g(0, 0, 0), new g(0, 0, 0), new g(0, 0, 0), new g(0, 0, 0)]), r = new Le({ color: n, transparent: true, opacity: 0.45, depthTest: false }), t = new pn(o, r);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, le = de(3462041), he = de(16724804), ve = de(6333946), _e = new Se();
  _e.frustumCulled = false, _e.visible = false, u.add(_e), _e.add(le, he, ve);
  const Fe = (n) => {
    const o = new yt(1, 1), r = new Xe({ color: n, transparent: true, opacity: 0.06, side: Ie, depthWrite: false }), t = new Ve(o, r);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, X = Fe(3462041), W = Fe(16724804), K = Fe(6333946);
  _e.add(X, W, K);
  const q = (n, o, r, t) => {
    n.scale.set(2 * t, 2 * t, 1), r === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : r === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, ue = document.createElement("div");
  ue.id = "hk-refplane-badge", ue.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(ue), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, _e.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, r = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = r[r.length - 1] ?? [], f = e.points.rawVal ?? [], d = o && o.length === 3 ? o : t.length > 0 && f[t[t.length - 1]] ? f[t[t.length - 1]] : [0, 0, 0], A = window.__hekatanOrthoExt ?? 8;
      we(le, d, "xy", A), we(he, d, "xz", A), we(ve, d, "yz", A), q(X, d, "xy", A), q(W, d, "xz", A), q(K, d, "yz", A), X.material.opacity = 0.1, W.material.opacity = 0.1, K.material.opacity = 0.1;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    v();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !_e.visible) {
      v();
      return;
    }
    const o = window.__hekatanOrthoAnchor, r = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = r[r.length - 1] ?? [], f = e.points.rawVal ?? [], d = o && o.length === 3 ? o : t.length > 0 && f[t[t.length - 1]] ? f[t[t.length - 1]] : [0, 0, 0];
    we(le, d, "xy", n), we(he, d, "xz", n), we(ve, d, "yz", n), q(X, d, "xy", n), q(W, d, "xz", n), q(K, d, "yz", n), v();
  };
  const xe = (n) => {
    if (X.material.opacity = n === "xy" ? 0.22 : 0.04, W.material.opacity = n === "xz" ? 0.22 : 0.04, K.material.opacity = n === "yz" ? 0.22 : 0.04, n) {
      const f = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      ue.style.background = f.bg, ue.style.color = f.text, ue.textContent = `\u25A6 Plano ${n.toUpperCase()}`, ue.style.display = "block";
    } else ue.style.display = "none";
  }, we = (n, o, r, t) => {
    let f;
    r === "xy" ? f = [new g(o[0] - t, o[1] - t, o[2]), new g(o[0] + t, o[1] - t, o[2]), new g(o[0] + t, o[1] + t, o[2]), new g(o[0] - t, o[1] + t, o[2]), new g(o[0] - t, o[1] - t, o[2])] : r === "xz" ? f = [new g(o[0] - t, o[1], o[2] - t), new g(o[0] + t, o[1], o[2] - t), new g(o[0] + t, o[1], o[2] + t), new g(o[0] - t, o[1], o[2] + t), new g(o[0] - t, o[1], o[2] - t)] : f = [new g(o[0], o[1] - t, o[2] - t), new g(o[0], o[1] + t, o[2] - t), new g(o[0], o[1] + t, o[2] + t), new g(o[0], o[1] - t, o[2] + t), new g(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(f);
  };
  let fe = null;
  window.__hekatanAxisLock = () => fe;
  const ge = document.createElement("div");
  ge.id = "hk-axis-lock-badge", ge.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "padding:4px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(20px,18px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(ge);
  const Je = () => {
    if (!fe) {
      ge.style.display = "none";
      return;
    }
    const n = { x: "#ff3344", y: "#34d399", z: "#60a5fa" };
    ge.style.background = "rgba(15,23,42,0.92)", ge.style.color = n[fe], ge.style.border = `1.5px solid ${n[fe]}`, ge.textContent = `\u{1F512} LOCK ${fe.toUpperCase()}`, ge.style.display = "block";
  };
  window.addEventListener("keydown", (n) => {
    var _a;
    const o = document.activeElement;
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== D) return;
    const r = n.key.toLowerCase();
    if (r === "x" || r === "y" || r === "z") fe = fe === r ? null : r, Je(), n.preventDefault();
    else if (n.key === "Escape") {
      const t = document.activeElement;
      t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA") && t.blur(), Kt(), n.preventDefault();
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
  const nt = new g(), ot = new g(), ct = new g(), mn = (n) => {
    if (!fe) return null;
    const o = n[0], r = n[1], t = n[2];
    return fe === "x" ? (nt.set(o - 1e4, r, t), ot.set(o + 1e4, r, t)) : fe === "y" ? (nt.set(o, r - 1e4, t), ot.set(o, r + 1e4, t)) : (nt.set(o, r, t - 1e4), ot.set(o, r, t + 1e4)), z.ray.distanceSqToSegment(nt, ot, null, ct), ct;
  };
  window.__hekatanProjectOnAxis = mn;
  const Ae = new Ze(new oe().setFromPoints([new g(0, 0, 0), new g(0, 0, 0)]), new Le({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  Ae.renderOrder = 998, Ae.frustumCulled = false, Ae.visible = false, u.add(Ae);
  let Ke = -1, st = -1, qe = -1;
  const Ct = (n, o, r, t, f, d, A, l, i) => {
    const M = A - t, V = l - f, y = i - d, k = M * M + V * V + y * y;
    if (k < 1e-12) return Math.hypot(n - t, o - f, r - d);
    let F = ((n - t) * M + (o - f) * V + (r - d) * y) / k;
    F = Math.max(0, Math.min(1, F));
    const ee = t + F * M, ae = f + F * V, te = d + F * y;
    return Math.hypot(n - ee, o - ae, r - te);
  }, Wt = (n, o, r, t) => {
    if (!e.polylines) return null;
    const f = e.polylines.rawVal, d = e.points.rawVal;
    let A = -1, l = -1, i = t;
    for (let M = 0; M < f.length; M++) {
      const V = f[M];
      for (let y = 0; y < V.length - 1; y++) {
        const k = d[V[y]], F = d[V[y + 1]];
        if (!k || !F) continue;
        const ee = Ct(n, o, r, k[0], k[1], k[2], F[0], F[1], F[2]);
        ee < i && (i = ee, A = M, l = y);
      }
    }
    return A >= 0 ? { polyIdx: A, segIdx: l, dist: i } : null;
  }, wn = (n, o, r, t) => {
    const f = window.__hekatanDrawingAuxLines, d = (f == null ? void 0 : f.rawVal) ?? (f == null ? void 0 : f.val) ?? f ?? [];
    let A = -1, l = t;
    for (let i = 0; i < d.length; i++) {
      const M = d[i];
      if (!M || M.length !== 6) continue;
      const V = Ct(n, o, r, M[0], M[1], M[2], M[3], M[4], M[5]);
      V < l && (l = V, A = i);
    }
    return A;
  }, xn = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      Ae.visible = false;
      return;
    }
    Ae.geometry.setFromPoints([new g(t[0], t[1], t[2]), new g(t[3], t[4], t[5])]), Ae.visible = true;
  }, yn = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const r = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!r || r.length < 2) {
      Ae.visible = false;
      return;
    }
    const f = ((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false, d = [];
    if (f || o < 0 || o >= r.length - 1) for (const A of r) {
      const l = t[A];
      l && d.push(new g(l[0], l[1], l[2]));
    }
    else {
      const A = t[r[o]], l = t[r[o + 1]];
      A && d.push(new g(A[0], A[1], A[2])), l && d.push(new g(l[0], l[1], l[2]));
    }
    Ae.geometry.setFromPoints(d), Ae.visible = true;
  }, xt = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const r = o.filter((i, M) => M !== n), t = /* @__PURE__ */ new Set();
    for (const i of r) for (const M of i) t.add(M);
    const f = e.points.rawVal, d = /* @__PURE__ */ new Map(), A = [];
    for (let i = 0; i < f.length; i++) t.has(i) && (d.set(i, A.length), A.push(f[i]));
    const l = r.map((i) => i.map((M) => d.get(M)).filter((M) => M !== void 0));
    e.points.val = A, e.polylines.val = l, e.areas && (e.areas.val = e.areas.rawVal.filter((i) => i !== n).map((i) => i > n ? i - 1 : i)), Ae.visible = false, Ke = -1, st = -1;
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
  }, vn = (n, o) => {
    var _a, _b, _c;
    if (!e.polylines) return;
    const r = e.polylines.rawVal;
    if (n < 0 || n >= r.length) return;
    if (((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false) {
      xt(n);
      return;
    }
    const f = r[n];
    if (o < 0 || o >= f.length - 1) return;
    if (f.length === 2) {
      xt(n);
      return;
    }
    let d;
    o === 0 ? d = [f.slice(1)] : o === f.length - 2 ? d = [f.slice(0, -1)] : d = [f.slice(0, o + 1), f.slice(o + 1)];
    const A = [...r.slice(0, n), ...d, ...r.slice(n + 1)], l = /* @__PURE__ */ new Set();
    for (const k of A) for (const F of k) l.add(F);
    const i = e.points.rawVal, M = /* @__PURE__ */ new Map(), V = [];
    for (let k = 0; k < i.length; k++) l.has(k) && (M.set(k, V.length), V.push(i[k]));
    const y = A.map((k) => k.map((F) => M.get(F)).filter((F) => F !== void 0));
    if (e.points.val = V, e.polylines.val = y, e.areas) {
      const k = d.length - 1;
      e.areas.val = e.areas.rawVal.map((F) => F > n ? F + k : F);
    }
    Ae.visible = false, Ke = -1, st = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  O.geometry.setAttribute("position", new Ye(e.points.rawVal.flat(), 3)), O.geometry.computeBoundingSphere(), O.frustumCulled = false, j.frustumCulled = false, u.add(j), N.position.set(0, 0, 0), N.rotateX(Math.PI / 2), N.geometry.rotateX(Math.PI / 2), N.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, r) => {
    if (e.points.val = [...e.points.rawVal, [n, o, r]], e.polylines) {
      const t = e.polylines.rawVal, f = t.length ? t[t.length - 1] : [];
      e.polylines.val = [...t.slice(0, -1), [...f, e.points.rawVal.length - 1]];
    }
  }, window.__hekatanDrawNewPoly = () => {
    var _a;
    if (!e.polylines) return;
    const n = e.polylines.rawVal;
    ((_a = n[n.length - 1]) == null ? void 0 : _a.length) !== 0 && (e.polylines.val = [...n, []]);
  }, window.__hekatanDrawCircle = (n, o, r, t, f = window.__hekatanArcSegs ?? 12, d = "xy") => {
    var _a;
    const A = Math.max(4, Math.round(f)), l = e.points.rawVal.length, i = [];
    for (let M = 0; M < A; M++) {
      const V = 2 * Math.PI * M / A, y = t * Math.cos(V), k = t * Math.sin(V);
      let F;
      d === "xy" ? F = [n + y, o + k, r] : d === "xz" ? F = [n + y, o, r + k] : F = [n, o + y, r + k], i.push(F);
    }
    if (e.points.val = [...e.points.rawVal, ...i], e.polylines) {
      const M = [...i.map((y, k) => l + k), l], V = e.polylines.rawVal;
      ((_a = V[V.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...V, M, []] : e.polylines.val = [...V.slice(0, -1), M, []];
    }
  }, window.__hekatanDrawArc = (n, o, r, t = window.__hekatanArcSegs ?? 12) => {
    const f = Math.max(4, Math.round(t)), d = new g(...n), A = new g(...o), l = new g(...r), i = new g().subVectors(A, d), M = new g().subVectors(l, d), V = new g().crossVectors(i, M).normalize(), y = new g().addVectors(d, A).multiplyScalar(0.5), k = new g().addVectors(A, l).multiplyScalar(0.5), F = new g().crossVectors(i, V).normalize(), ee = new g().crossVectors(new g().subVectors(l, A), V).normalize(), ae = new g().subVectors(k, y), te = F.x * ee.y - F.y * ee.x;
    let J;
    if (Math.abs(te) > 1e-9) {
      const Ee = (ae.x * ee.y - ae.y * ee.x) / te;
      J = new g().addVectors(y, F.clone().multiplyScalar(Ee));
    } else J = y.clone();
    const ye = d.distanceTo(J), be = new g().subVectors(d, J), $e = new g().subVectors(l, J), Be = Math.acos(Math.max(-1, Math.min(1, be.dot($e) / (ye * ye)))), Ue = e.points.rawVal.length, Te = [], Ge = V.clone();
    for (let Ee = 0; Ee <= f; Ee++) {
      const He = Ee / f, De = Be * He, lt = new Qt().setFromAxisAngle(Ge, De), et = be.clone().applyQuaternion(lt).add(J);
      Te.push([et.x, et.y, et.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...Te], e.polylines) {
      const Ee = Te.map((De, lt) => Ue + lt), He = e.polylines.rawVal;
      e.polylines.val = [...He.slice(0, -1), Ee, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, r = 1, t = 6, f = 6) => {
    const d = Math.min(n[0], o[0]), A = Math.max(n[0], o[0]), l = Math.min(n[1], o[1]), i = Math.max(n[1], o[1]), M = (n[2] + o[2]) / 2, V = A - d, y = i - l, k = Math.min(r, V / 2 - 0.01, y / 2 - 0.01);
    if (k <= 0) return;
    const F = e.points.rawVal.length, ee = [], ae = [], te = (J, ye) => {
      ee.push([J, ye, M]), ae.push(F + ee.length - 1);
    };
    for (let J = 0; J <= f; J++) te(d + k + (V - 2 * k) * J / f, l);
    for (let J = 1; J <= t; J++) {
      const ye = -Math.PI / 2 + Math.PI / 2 * J / t;
      te(A - k + k * Math.cos(ye), l + k + k * Math.sin(ye));
    }
    for (let J = 1; J <= f; J++) te(A, l + k + (y - 2 * k) * J / f);
    for (let J = 1; J <= t; J++) {
      const ye = 0 + Math.PI / 2 * J / t;
      te(A - k + k * Math.cos(ye), i - k + k * Math.sin(ye));
    }
    for (let J = 1; J <= f; J++) te(A - k - (V - 2 * k) * J / f, i);
    for (let J = 1; J <= t; J++) {
      const ye = Math.PI / 2 + Math.PI / 2 * J / t;
      te(d + k + k * Math.cos(ye), i - k + k * Math.sin(ye));
    }
    for (let J = 1; J <= f; J++) te(d, i - k - (y - 2 * k) * J / f);
    for (let J = 1; J <= t; J++) {
      const ye = Math.PI + Math.PI / 2 * J / t;
      te(d + k + k * Math.cos(ye), l + k + k * Math.sin(ye));
    }
    if (ae.push(F), e.points.val = [...e.points.rawVal, ...ee], e.polylines) {
      const J = e.polylines.rawVal;
      e.polylines.val = [...J.slice(0, -1), ae, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const r = e.points.rawVal.length, t = n[0], f = n[1], d = n[2], A = o[0], l = o[1], i = o[2];
    let M;
    if (Math.abs(d - i) < 1e-6 ? M = [[t, f, d], [A, f, d], [A, l, d], [t, l, d]] : Math.abs(f - l) < 1e-6 ? M = [[t, f, d], [A, f, d], [A, f, i], [t, f, i]] : M = [[t, f, d], [t, l, d], [t, l, i], [t, f, i]], e.points.val = [...e.points.rawVal, ...M], e.polylines) {
      const V = [r, r + 1, r + 2, r + 3, r], y = e.polylines.rawVal;
      e.polylines.val = [...y.slice(0, -1), V, []];
    }
  };
  const Re = new Se();
  Re.visible = false, u.add(Re), window.__hekatanShowAxes = (n, o, r = 12, t = 2) => {
    var _a, _b;
    for (; Re.children.length; ) {
      const V = Re.children.pop();
      (_a = V.geometry) == null ? void 0 : _a.dispose(), (_b = V.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const f = Math.min(...o) - t, d = Math.max(...o) + t, A = Math.min(...n) - t, l = Math.max(...n) + t, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", M = (V, y, k, F, ee) => {
      const ae = document.createElement("canvas");
      ae.width = 64, ae.height = 32;
      const te = ae.getContext("2d");
      te.fillStyle = ee, te.font = "bold 22px sans-serif", te.textAlign = "center", te.fillText(V, 32, 26);
      const J = new Jt(ae), ye = new Ot({ map: J, transparent: true }), be = new jt(ye);
      return be.position.set(y, k, F), be.scale.set(1.2, 0.6, 1), be;
    };
    n.forEach((V, y) => {
      const k = y < i.length ? i[y] : `X${y}`, F = new oe().setFromPoints([new g(V, f, 0), new g(V, d, 0), new g(V, f, 0), new g(V, f, r)]), ee = new ft({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), ae = new rt(F, ee);
      ae.computeLineDistances(), Re.add(ae), Re.add(M(k, V, f - 0.5, 0, "#60a5fa")), Re.add(M(k, V, d + 0.5, 0, "#60a5fa"));
    }), o.forEach((V, y) => {
      const k = `${y + 1}`, F = new oe().setFromPoints([new g(A, V, 0), new g(l, V, 0), new g(A, V, 0), new g(A, V, r)]), ee = new ft({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), ae = new rt(F, ee);
      ae.computeLineDistances(), Re.add(ae), Re.add(M(k, A - 0.5, V, 0, "#fb7185")), Re.add(M(k, l + 0.5, V, 0, "#fb7185"));
    }), Re.visible = true, v();
  }, window.__hekatanHideAxes = () => {
    Re.visible = false, v();
  };
  const Ne = new Se();
  Ne.visible = false, u.add(Ne);
  let at = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, r = 0, t = 0) => {
    var _a, _b;
    for (; Ne.children.length; ) {
      const d = Ne.children.pop();
      (_a = d.geometry) == null ? void 0 : _a.dispose(), (_b = d.material) == null ? void 0 : _b.dispose();
    }
    at.forEach((d) => {
      u.remove(d), d.geometry.dispose(), d.material.dispose();
    }), at = [];
    const f = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((d, A) => {
      const l = f[A % f.length], i = o / 2, M = [new g(r - i, t - i, d), new g(r + i, t - i, d), new g(r + i, t + i, d), new g(r - i, t + i, d), new g(r - i, t - i, d)], V = new oe().setFromPoints(M), y = new Le({ color: l, transparent: true, opacity: 0.55 });
      Ne.add(new Ze(V, y));
      const k = document.createElement("canvas");
      k.width = 128, k.height = 32;
      const F = k.getContext("2d");
      F.fillStyle = `#${l.toString(16).padStart(6, "0")}`, F.font = "bold 18px sans-serif", F.fillText(`Z = ${d} m`, 4, 22);
      const ee = new Jt(k), ae = new Ot({ map: ee, transparent: true }), te = new jt(ae);
      te.position.set(r - i - 1.5, t - i - 1.5, d), te.scale.set(2.5, 0.6, 1), Ne.add(te);
      const J = new yt(1e4, 1e4), ye = new Xe({ visible: false, side: Ie }), be = new Ve(J, ye);
      be.position.set(0, 0, d), be.frustumCulled = false, be.userData = { refPlaneZ: d }, u.add(be), at.push(be);
    }), Ne.visible = true, v();
  }, window.__hekatanHideRefPlanes = () => {
    Ne.visible = false, at.forEach((n) => {
      n.visible = false;
    }), v();
  };
  const dt = new Se();
  dt.frustumCulled = false, u.add(dt);
  const gn = () => {
    var _a, _b, _c, _d;
    for (; dt.children.length; ) {
      const r = dt.children.pop();
      (_b = (_a = r.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = r.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const r of o) {
      if (r.length !== 6) continue;
      const t = new oe().setFromPoints([new g(r[0], r[1], r[2]), new g(r[3], r[4], r[5])]), f = new ft({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), d = new Ze(t, f);
      d.computeLineDistances(), dt.add(d);
    }
  };
  L.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, gn(), v());
  });
  const ke = new Se(), bn = new Ve(new en(0.02, 12, 12), new Xe({ color: 16724804, transparent: true, opacity: 0.95 })), Mn = new Ve(new en(0.04, 12, 12), new Xe({ color: 16498468, transparent: true, opacity: 0.25, depthWrite: false }));
  ke.add(bn, Mn);
  const it = 0.15, zt = (n, o, r) => {
    const t = new oe().setFromPoints([new g(...n), new g(...o)]);
    return new Ze(t, new Le({ color: r, transparent: true, opacity: 0.7 }));
  };
  ke.add(zt([-it, 0, 0], [it, 0, 0], 16711680)), ke.add(zt([0, -it, 0], [0, it, 0], 65280)), ke.add(zt([0, 0, -it], [0, 0, it], 35071)), ke.visible = false, ke.frustumCulled = false, u.add(ke);
  const Ut = 10, Vt = () => {
    if (!ke.visible) return;
    const o = c().position.distanceTo(ke.position), r = Math.max(0.05, o / Ut);
    ke.scale.setScalar(r);
  };
  a.addEventListener("change", () => {
    Vt();
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = c().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / Ut));
    }
  }), window.__hekatanShowSnap = (n, o, r) => {
    ke.position.set(n, o, r), ke.visible = true, Vt(), v();
  }, window.__hekatanHideSnap = () => {
    ke.visible = false, v();
  }, p.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m;
    const o = w(n);
    if (!o) return;
    z.setFromCamera(_, o);
    const r = m();
    if (r.length) {
      const t = r[0].point, f = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, f);
      if (d) Gt(d.type, d.x, d.y, d.z), ke.position.set(d.x, d.y, d.z), ke.visible = true, t.set(d.x, d.y, d.z);
      else {
        At();
        const V = window.__hekatanSnapEnabled !== false, y = window.__hekatanSnap2D ?? 0.5;
        V && y > 0 && (t.x = Math.round(t.x / y) * y, t.y = Math.round(t.y / y) * y, t.z = Math.round(t.z / y) * y), ke.position.copy(t), ke.visible = true;
      }
      if (Vt(), (((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select") === "delete") {
        const V = (window.__hekatanSnap2D ?? 0.5) * 1.5, y = Wt(t.x, t.y, t.z, V), k = wn(t.x, t.y, t.z, V);
        let F = false;
        if (k >= 0) if (!y) F = true;
        else {
          const ee = window.__hekatanDrawingAuxLines, te = ((ee == null ? void 0 : ee.rawVal) ?? (ee == null ? void 0 : ee.val) ?? ee ?? [])[k];
          Ct(t.x, t.y, t.z, te[0], te[1], te[2], te[3], te[4], te[5]) < y.dist && (F = true);
        }
        if (F ? (qe = k, Ke = -1, st = -1, xn(k)) : y ? (Ke = y.polyIdx, st = y.segIdx, qe = -1, yn(y.polyIdx, y.segIdx)) : (Ke = -1, st = -1, qe = -1, Ae.visible = false), C.visible = false, B.visible = false, Y(), U.style.left = n.clientX + "px", U.style.top = n.clientY + "px", U.style.display = "block", F) U.textContent = `\u{1F5D1} Click para borrar l\xEDnea auxiliar #${qe + 1}`;
        else if (y) {
          const ee = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(y.polyIdx)) ?? false;
          U.textContent = ee ? `\u{1F5D1} Click para borrar \xE1rea #${y.polyIdx + 1} completa` : `\u{1F5D1} Click para borrar segmento ${y.segIdx + 1} de polil\xEDnea #${y.polyIdx + 1}`;
        } else U.textContent = "\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para resaltarla";
        v();
        return;
      } else Ae.visible = false, Ke = -1, qe = -1;
      U.style.left = n.clientX + "px", U.style.top = n.clientY + "px", U.style.display = "block";
      const l = ((_g = e.polylines) == null ? void 0 : _g.rawVal) ?? [], i = l[l.length - 1] ?? [], M = e.points.rawVal ?? [];
      if (i.length > 0 && M[i[i.length - 1]]) {
        const V = i[i.length - 1], y = M[V], k = !!window.__hekatanOrthoMode;
        let F = fe;
        if (!F && k) {
          const Te = Math.abs(t.x - y[0]), Ge = Math.abs(t.y - y[1]), Ee = Math.abs(t.z - y[2]), He = (_h = r[0]) == null ? void 0 : _h.object;
          let De = null;
          He === X ? De = "xy" : He === W ? De = "xz" : He === K && (De = "yz"), De === "xy" ? F = Te >= Ge ? "x" : "y" : De === "xz" ? F = Te >= Ee ? "x" : "z" : De === "yz" ? F = Ge >= Ee ? "y" : "z" : F = Te >= Ge && Te >= Ee ? "x" : Ge >= Ee ? "y" : "z";
        }
        if (F) {
          const Te = y[0], Ge = y[1], Ee = y[2];
          F === "x" ? t.set(t.x, Ge, Ee) : F === "y" ? t.set(Te, t.y, Ee) : t.set(Te, Ge, t.z);
          const He = !!fe, lt = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[F];
          ge.style.background = "rgba(15,23,42,0.92)", ge.style.color = lt, ge.style.border = `1.5px solid ${lt}`;
          const et = (_i = r[0]) == null ? void 0 : _i.object;
          let ht = null;
          et === X ? ht = "xy" : et === W ? ht = "xz" : et === K && (ht = "yz");
          const qt = ht ? ` (plano ${ht.toUpperCase()})` : "";
          ge.textContent = He ? `\u{1F512} LOCK ${F.toUpperCase()}${qt}` : `\u22A5 ORTO ${F.toUpperCase()}${qt}`, ge.style.left = n.clientX + 20 + "px", ge.style.top = n.clientY + 18 + "px", ge.style.transform = "none", ge.style.display = "block";
        } else fe || (ge.style.display = "none");
        const ee = Math.hypot(t.x - y[0], t.y - y[1], t.z - y[2]), ae = Math.atan2(t.y - y[1], t.x - y[0]) * 180 / Math.PI;
        U.textContent = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)} | \u0394L=${ee.toFixed(2)}m ${ae.toFixed(0)}\xB0`, C.geometry.setFromPoints([new g(y[0], y[1], y[2]), new g(t.x, t.y, t.z)]), (_j = C.computeLineDistances) == null ? void 0 : _j.call(C), C.visible = true, T(y[0], y[1], y[2], t.x, t.y, t.z);
        const te = window.__hekatanOrthoExt ?? 8, J = window.__hekatanShowOrthoPlanes !== false;
        _e.visible = J, J || xe(null), J && (we(le, y, "xy", te), we(he, y, "xz", te), we(ve, y, "yz", te), q(X, y, "xy", te), q(W, y, "xz", te), q(K, y, "yz", te));
        const ye = J ? z.intersectObjects([X, W, K], false) : [];
        let be = null;
        if (ye.length > 0) {
          const Te = ye[0].object;
          Te === X ? be = "xy" : Te === W ? be = "xz" : Te === K && (be = "yz");
        }
        xe(be), be && (ue.style.left = n.clientX + "px", ue.style.top = n.clientY + "px"), Q.geometry.setFromPoints([new g(y[0] - te, y[1], y[2]), new g(y[0] + te, y[1], y[2])]), (_k = Q.computeLineDistances) == null ? void 0 : _k.call(Q), ne.geometry.setFromPoints([new g(y[0], y[1] - te, y[2]), new g(y[0], y[1] + te, y[2])]), (_l = ne.computeLineDistances) == null ? void 0 : _l.call(ne), re.geometry.setFromPoints([new g(y[0], y[1], y[2] - te), new g(y[0], y[1], y[2] + te)]), (_m = re.computeLineDistances) == null ? void 0 : _m.call(re), B.visible = true;
        const $e = Q.material, Be = ne.material, Ue = re.material;
        F === "x" ? ($e.opacity = 0.95, Be.opacity = 0.1, Ue.opacity = 0.1) : F === "y" ? ($e.opacity = 0.1, Be.opacity = 0.95, Ue.opacity = 0.1) : F === "z" ? ($e.opacity = 0.1, Be.opacity = 0.1, Ue.opacity = 0.95) : ($e.opacity = 0.5, Be.opacity = 0.5, Ue.opacity = 0.5);
      } else U.textContent = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`, C.visible = false, B.visible = false, Y();
      v();
    } else At(), U.style.display = "none", ke.visible = false, C.visible = false, B.visible = false, Y(), v();
  }), L.derive(() => {
    e.gridTarget && (io(s, { position: new g(...e.gridTarget.val.position), quaternion: new Qt().setFromEuler(new tn(...e.gridTarget.val.rotation)) }, v), N.position.set(...e.gridTarget.val.position), N.quaternion.setFromEuler(new tn(...e.gridTarget.val.rotation)), N.updateMatrixWorld());
  }), L.derive(() => {
    O.geometry.setAttribute("position", new Ye(e.points.val.flat(), 3)), O.geometry.computeBoundingSphere();
  }), L.derive(() => {
    const n = 0.05 * x * 0.5 * h.val;
    z.params.Points.threshold = 0.4 * n;
  }), L.derive(() => {
    var _a;
    const n = e.points.val ?? [], r = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const d of r) {
      const [A, l, i] = n[d];
      t.push(A, l, i);
    }
    const f = new oe();
    f.setAttribute("position", new Ye(t, 3)), ce.geometry.dispose(), ce.geometry = f;
  });
  let Ft = false, Oe = 0;
  p.addEventListener("pointerdown", () => {
    Ft = true;
  }), p.addEventListener("pointerup", () => {
    Ft = false;
  }), p.addEventListener("pointermove", () => {
    Ft && Oe++;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const We = new Se();
  We.visible = false, We.frustumCulled = false, u.add(We);
  const _n = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, Gt = (n, o, r, t) => {
    var _a, _b, _c, _d;
    for (; We.children.length; ) {
      const l = We.children.pop();
      (_b = (_a = l.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = l.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const f = _n[n] ?? 16777215, d = 0.05, A = new oe().setFromPoints([new g(o - d, r - d, t), new g(o + d, r - d, t), new g(o + d, r - d, t), new g(o + d, r + d, t), new g(o + d, r + d, t), new g(o - d, r + d, t), new g(o - d, r + d, t), new g(o - d, r - d, t)]);
    We.add(new rt(A, new Le({ color: f, linewidth: 2 }))), We.position.set(0, 0, 0), We.visible = true;
  }, At = () => {
    We.visible = false;
  }, Sn = (n, o, r, t) => {
    var _a;
    const f = window.__hekatanOsnap, d = e.points.rawVal, A = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let l = null;
    const i = (y, k, F, ee) => {
      const ae = Math.hypot(k - n, F - o, ee - r);
      ae > t || (!l || ae < l.d) && (l = { type: y, x: k, y: F, z: ee, d: ae });
    };
    (f.node || f.end) && d.forEach((y) => {
      f.node && i("node", y[0], y[1], y[2]);
    });
    for (const y of A) if (!(y.length < 2)) for (let k = 0; k < y.length - 1; k++) {
      const F = d[y[k]], ee = d[y[k + 1]];
      if (!(!F || !ee) && (f.end && (i("end", F[0], F[1], F[2]), i("end", ee[0], ee[1], ee[2])), f.mid && i("mid", (F[0] + ee[0]) / 2, (F[1] + ee[1]) / 2, (F[2] + ee[2]) / 2), f.nea || f.per)) {
        const ae = ee[0] - F[0], te = ee[1] - F[1], J = ee[2] - F[2], ye = ae * ae + te * te + J * J;
        if (ye < 1e-12) continue;
        const be = Math.max(0, Math.min(1, ((n - F[0]) * ae + (o - F[1]) * te + (r - F[2]) * J) / ye)), $e = F[0] + be * ae, Be = F[1] + be * te, Ue = F[2] + be * J;
        f.nea && i("nea", $e, Be, Ue), f.per && i("per", $e, Be, Ue);
      }
    }
    const M = window.__hekatanDrawingAuxLines, V = (M == null ? void 0 : M.rawVal) ?? (M == null ? void 0 : M.val) ?? M ?? [];
    for (const y of V) {
      if (y.length !== 6) continue;
      const k = [y[0], y[1], y[2]], F = [y[3], y[4], y[5]];
      if (f.end && (i("end", k[0], k[1], k[2]), i("end", F[0], F[1], F[2])), f.mid && i("mid", (k[0] + F[0]) / 2, (k[1] + F[1]) / 2, (k[2] + F[2]) / 2), f.nea || f.per) {
        const ee = F[0] - k[0], ae = F[1] - k[1], te = F[2] - k[2], J = ee * ee + ae * ae + te * te;
        if (J < 1e-12) continue;
        const ye = Math.max(0, Math.min(1, ((n - k[0]) * ee + (o - k[1]) * ae + (r - k[2]) * te) / J)), be = k[0] + ye * ee, $e = k[1] + ye * ae, Be = k[2] + ye * te;
        f.nea && i("nea", be, $e, Be), f.per && i("per", be, $e, Be);
      }
    }
    return l ? { type: l.type, x: l.x, y: l.y, z: l.z } : null;
  };
  window.__hekatanOsnapCompute = Sn, window.__hekatanOsnapShow = Gt, window.__hekatanOsnapHide = At;
  let me = [], ze = 0;
  const pt = document.createElement("div");
  pt.id = "hk-cad-status", pt.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", pt.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool y hac\xE9 click en el viewer", document.body.appendChild(pt);
  const kn = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), fe && n.push(`\u{1F512} LOCK ${fe.toUpperCase()}`);
    const r = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(r) > 1e-3 && n.push(`Cota Z=${r}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, pe = (n) => {
    const o = n + kn();
    pt.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    pe(o);
  }, window.__hekatanCadResetPending = () => {
    me = [], pe("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  const ut = [], je = () => {
    var _a, _b;
    ut.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), ut.length > 100 && ut.shift();
  }, Ht = () => {
    var _a;
    const n = ut.pop();
    if (!n) {
      pe("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), me = [], C.visible = false, B.visible = false, Y(), pe(`\u21B6 Undo \u2014 ${ut.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    v();
  };
  window.__hekatanPushUndo = je, window.__hekatanUndo = Ht, window.addEventListener("keydown", (n) => {
    (n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey && (n.preventDefault(), Ht());
  });
  const Kt = () => {
    if (me = [], e.polylines) {
      const n = e.polylines.rawVal, o = n[n.length - 1];
      o && o.length > 0 && (e.polylines.val = [...n, []]);
    }
    fe = null, Je(), C.visible = false, B.visible = false, Y(), pe("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), v();
  };
  window.__hekatanFinalizeDraw = Kt, p.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s, _t2, _u, _v, _w;
    if (Oe > 5) {
      Oe = 0;
      return;
    }
    Oe = 0;
    const o = w(n);
    if (!o) return;
    z.setFromCamera(_, o);
    const r = m();
    if (!r.length) return;
    let t = r[0].point;
    (n.ctrlKey || n.metaKey) && (t = new g(Math.round(r[0].point.x), Math.round(r[0].point.y), Math.round(r[0].point.z)));
    {
      const l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], i = l[l.length - 1] ?? [], M = e.points.rawVal ?? [];
      if (i.length > 0) {
        const V = M[i[i.length - 1]];
        if (V) {
          const y = !!window.__hekatanOrthoMode;
          let k = fe;
          if (!k && y) {
            const F = Math.abs(t.x - V[0]), ee = Math.abs(t.y - V[1]), ae = Math.abs(t.z - V[2]);
            k = F >= ee && F >= ae ? "x" : ee >= ae ? "y" : "z";
          }
          k === "x" ? t = new g(t.x, V[1], V[2]) : k === "y" ? t = new g(V[0], t.y, V[2]) : k === "z" && (t = new g(V[0], V[1], t.z));
        }
      }
    }
    const f = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, f);
    if (d) t = new g(d.x, d.y, d.z), pe(`\u{1F3AF} Snap [${d.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const l = window.__hekatanSnapEnabled !== false, i = window.__hekatanSnap2D ?? 0;
      l && i > 0 && (t = new g(Math.round(t.x / i) * i, Math.round(t.y / i) * i, Math.round(t.z / i) * i));
    }
    const A = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (A === "select" || A === "none" || !A) {
      if (window.__hekatanShowOrthoPlanes !== false && _e.visible) {
        const i = window.__hekatanOrthoExt ?? 8, M = [t.x, t.y, t.z];
        we(le, M, "xy", i), we(he, M, "xz", i), we(ve, M, "yz", i), q(X, M, "xy", i), q(W, M, "xz", i), q(K, M, "yz", i), window.__hekatanOrthoAnchor = M, pe(`\u25A6 Anchor planos ortogonales \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`), v();
      }
      return;
    }
    if (A === "delete") {
      if (qe >= 0) {
        const l = window.__hekatanDrawingAuxLines, i = (l == null ? void 0 : l.rawVal) ?? (l == null ? void 0 : l.val) ?? l ?? [], M = qe;
        if (M >= 0 && M < i.length) {
          je();
          const V = i.slice(0, M).concat(i.slice(M + 1));
          l && typeof l == "object" && "val" in l ? l.val = V : window.__hekatanDrawingAuxLines = V, pe(`\u{1F5D1} L\xEDnea auxiliar #${M + 1} borrada`), qe = -1, Ae.visible = false;
          try {
            (_f = window.__hekatanRebuild) == null ? void 0 : _f.call(window);
          } catch {
          }
        }
      } else if (Ke >= 0) {
        const l = Ke, i = st;
        ((_h = (_g = e.areas) == null ? void 0 : _g.rawVal) == null ? void 0 : _h.includes(l)) ?? false ? (xt(l), pe(`\u{1F5D1} \xC1rea #${l + 1} (shell Q4) borrada`)) : i >= 0 ? (vn(l, i), pe(`\u{1F5D1} Segmento ${i + 1} de polil\xEDnea #${l + 1} borrado`)) : (xt(l), pe(`\u{1F5D1} Polil\xEDnea #${l + 1} borrada`));
      } else pe("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (A === "circle") {
      if (me.push([t.x, t.y, t.z]), me.length === 1) {
        pe("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [l, i] = me, M = Math.hypot(i[0] - l[0], i[1] - l[1], i[2] - l[2]);
      Math.abs(i[0] - l[0]);
      const V = Math.abs(i[1] - l[1]), k = Math.abs(i[2] - l[2]) < 1e-3 ? "xy" : V < 1e-3 ? "xz" : "yz", F = window.__hekatanArcSegs ?? 12;
      (_i = window.__hekatanDrawCircle) == null ? void 0 : _i.call(window, l[0], l[1], l[2], M, F, k), pe(`\u2713 C\xEDrculo dibujado en ${k.toUpperCase()} \u2014 r=${M.toFixed(2)}m, ${F} segmentos`), me = [];
      try {
        (_j = window.__hekatanRebuild) == null ? void 0 : _j.call(window);
      } catch {
      }
      return;
    }
    if (A === "arc") {
      if (me.push([t.x, t.y, t.z]), me.length === 1) {
        pe("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (me.length === 2) {
        pe("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [l, i, M] = me, V = window.__hekatanArcSegs ?? 12;
      (_k = window.__hekatanDrawArc) == null ? void 0 : _k.call(window, l, i, M, V), pe(`\u2713 Arco dibujado \u2014 ${V} segmentos`), me = [];
      try {
        (_l = window.__hekatanRebuild) == null ? void 0 : _l.call(window);
      } catch {
      }
      return;
    }
    if (A === "rect") {
      if (me.push([t.x, t.y, t.z]), me.length === 1) {
        pe("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [l, i] = me;
      (_m = window.__hekatanDrawRect) == null ? void 0 : _m.call(window, l, i), pe(`\u2713 Rect\xE1ngulo dibujado \u2014 (${l[0].toFixed(1)},${l[1].toFixed(1)}) \u2192 (${i[0].toFixed(1)},${i[1].toFixed(1)})`), me = [];
      try {
        (_n2 = window.__hekatanRebuild) == null ? void 0 : _n2.call(window);
      } catch {
      }
      return;
    }
    if (A === "col") {
      je();
      const l = t.z, i = ze && ze > 0 ? ze : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, l], [t.x, t.y, l + i]];
      const M = e.polylines.rawVal, V = e.points.rawVal.length;
      e.polylines.val = [...M.slice(0, -1), ...M[M.length - 1].length > 0 ? [M[M.length - 1]] : [], [V - 2, V - 1], []], ze = 0, pe(`\u258C Columna creada \u2014 h=${i.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (A === "wall") {
      if (me.push([t.x, t.y, t.z]), me.length === 1) {
        pe("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [l, i] = me, M = ze && ze > 0 ? ze : 3;
      je();
      const V = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [l[0], l[1], l[2]], [i[0], i[1], i[2]], [i[0], i[1], i[2] + M], [l[0], l[1], l[2] + M]];
      const y = e.polylines.rawVal;
      if (y.length - 1, e.polylines.val = [...y.slice(0, -1), ...y[y.length - 1].length > 0 ? [y[y.length - 1]] : [], [V, V + 1, V + 2, V + 3, V], []], e.areas) {
        const k = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, k];
      }
      pe(`\u25A5 Pared Q4 creada \u2014 h=${M.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), me = [], ze = 0;
      try {
        (_p = window.__hekatanRebuild) == null ? void 0 : _p.call(window);
      } catch {
      }
      return;
    }
    if (A === "extp") {
      je();
      const l = ze && ze > 0 ? ze : 3, i = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, i], [t.x, t.y, i + l]];
      const M = e.polylines.rawVal, V = e.points.rawVal.length;
      e.polylines.val = [...M.slice(0, -1), ...M[M.length - 1].length > 0 ? [M[M.length - 1]] : [], [V - 2, V - 1], []], ze = 0, pe(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${l.toFixed(2)}m`);
      try {
        (_q = window.__hekatanRebuild) == null ? void 0 : _q.call(window);
      } catch {
      }
      return;
    }
    if (A === "extl") {
      const l = (window.__hekatanSnap2D ?? 0.5) * 1.5, i = Wt(t.x, t.y, t.z, l);
      if (!i) {
        pe("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const M = e.polylines.rawVal, V = e.points.rawVal, y = M[i.polyIdx], k = V[y[i.segIdx]], F = V[y[i.segIdx + 1]];
      if (!k || !F) {
        pe("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const ee = ze && ze > 0 ? ze : 3;
      je();
      const ae = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [k[0], k[1], k[2]], [F[0], F[1], F[2]], [F[0], F[1], F[2] + ee], [k[0], k[1], k[2] + ee]];
      const te = e.polylines.rawVal;
      if (e.polylines.val = [...te.slice(0, -1), ...te[te.length - 1].length > 0 ? [te[te.length - 1]] : [], [ae, ae + 1, ae + 2, ae + 3, ae], []], e.areas) {
        const J = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, J];
      }
      ze = 0, pe(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${ee.toFixed(2)}m`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (A === "aux") {
      if (me.push([t.x, t.y, t.z]), me.length === 1) {
        pe("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [l, i] = me, M = window.__hekatanDrawingAuxLines;
      if (M) {
        const ee = M.rawVal ?? M.val ?? [];
        M.val = [...ee, [l[0], l[1], l[2], i[0], i[1], i[2]]];
      }
      const V = i[0] - l[0], y = i[1] - l[1], k = i[2] - l[2], F = Math.sqrt(V * V + y * y + k * k);
      pe(`\u2713 L\xEDnea auxiliar creada \u2014 L=${F.toFixed(2)}m (cyan, no FEM)`), me = [];
      return;
    }
    if (A === "extend") {
      if (me.push([t.x, t.y, t.z]), me.length === 1) {
        pe("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [l, i] = me, M = window.__hekatanDrawingAuxLines;
      if (M) {
        const V = M.rawVal ?? M.val ?? [];
        M.val = [...V, [l[0], l[1], l[2], i[0], i[1], i[2]]];
      }
      pe("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), me = [];
      return;
    }
    if (A === "chaflan") {
      if (me.push([t.x, t.y, t.z]), me.length === 1) {
        pe("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [l, i] = me, M = window.__hekatanChaflanR ?? 1, V = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_s = window.__hekatanDrawSlabChaflan) == null ? void 0 : _s.call(window, l, i, M, V, 6);
      const y = Math.abs(i[0] - l[0]).toFixed(1), k = Math.abs(i[1] - l[1]).toFixed(1);
      pe(`\u2713 Losa con chaflanes dibujada \u2014 ${y}\xD7${k}m, r=${M}m, ${V} seg/chafl\xE1n`), me = [];
      try {
        (_t2 = window.__hekatanRebuild) == null ? void 0 : _t2.call(window);
      } catch {
      }
      return;
    }
    if (S = false, je(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const l = e.polylines.rawVal, i = l.length - 1, M = l[i] ?? [];
      if (A === "line" && M.length === 2) {
        e.polylines.val = [...l, []], pe("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_u = window.__hekatanRebuild) == null ? void 0 : _u.call(window);
        } catch {
        }
        return;
      }
      if (A === "area" && M.length === 4) {
        e.polylines.val = [...l.slice(0, -1), [...M, M[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, i]), pe("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_v = window.__hekatanRebuild) == null ? void 0 : _v.call(window);
        } catch {
        }
        return;
      }
    }
    if (A === "node") pe(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (A === "line") pe("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (A === "polyline") pe("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (A === "area") {
      const l = ((_w = e.polylines) == null ? void 0 : _w.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      pe(`\u25A6 \xC1rea \u2014 click ${l.length}/4. Marc\xE1 ${4 - l.length} v\xE9rtice${4 - l.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), p.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), p.addEventListener("pointermove", (n) => {
    var _a;
    const o = w(n);
    if (!o) return;
    z.setFromCamera(_, o);
    const r = m();
    if (j.geometry.deleteAttribute("position"), r.length) {
      let t = r[0].point.clone();
      const f = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, f);
      if (d) t.set(d.x, d.y, d.z);
      else {
        const A = window.__hekatanSnapEnabled !== false, l = window.__hekatanSnap2D ?? 0.5;
        A && l > 0 && (t.x = Math.round(t.x / l) * l, t.y = Math.round(t.y / l) * l, t.z = Math.round(t.z / l) * l);
      }
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z)), j.geometry.setAttribute("position", new Ye(t.toArray(), 3));
    }
    v();
  }), p.addEventListener("pointermove", (n) => {
    var _a;
    const o = w(n);
    if (!o) return;
    z.setFromCamera(_, o);
    let r = false;
    const t = z.intersectObject(O), f = m();
    if (t.length && f.length) {
      const d = new g(...e.points.rawVal[t[0].index]), A = new g(...f[0].point), l = d.sub(A), i = (_a = f[0].face) == null ? void 0 : _a.normal;
      i.transformDirection(N.matrixWorld), Math.abs(l.dot(i)) < 1e-4 && (r = true);
    }
    j.visible = !r;
  });
  let Tt = false, Et;
  p.addEventListener("pointermove", (n) => {
    var _a;
    if (!Oe) return;
    const o = w(n);
    if (!o) return;
    z.setFromCamera(_, o);
    let r = false;
    const t = z.intersectObject(O), f = m();
    if (t.length && f.length) {
      const A = new g(...e.points.rawVal[t[0].index]), l = new g(...f[0].point), i = A.sub(l), M = (_a = f[0].face) == null ? void 0 : _a.normal;
      M.transformDirection(N.matrixWorld), Math.abs(i.dot(M)) < 1e-4 && (r = true);
    }
    if (r && Oe < 5 && (Tt = true, a.enabled = false, Et = t[0].index), !Tt || Oe % 2 !== 0) return;
    const d = [...e.points.rawVal];
    if (Et !== void 0) {
      let A = f[0].point;
      (n.ctrlKey || n.metaKey) && (A = new g(Math.round(A.x), Math.round(A.y), Math.round(A.z))), d[Et] = A.toArray();
    }
    e.points.val = d;
  }), p.addEventListener("pointerup", () => {
    a.enabled = true, Tt = false;
  }), p.addEventListener("contextmenu", (n) => {
    var _a;
    const o = w(n);
    if (!o) return;
    z.setFromCamera(_, o);
    let r = false;
    const t = z.intersectObject(O), f = m();
    if (t.length && f.length) {
      const l = new g(...e.points.rawVal[t[0].index]), i = new g(...f[0].point), M = l.sub(i), V = (_a = f[0].face) == null ? void 0 : _a.normal;
      V.transformDirection(N.matrixWorld), Math.abs(M.dot(V)) < 1e-4 && (r = true);
    }
    if (!r) return;
    const d = [...e.points.rawVal];
    if (d.splice(t[0].index, 1), e.points.val = d, !e.polylines) return;
    const A = e.polylines.rawVal.map((l) => l.filter((i) => i !== t[0].index)).map((l) => l.map((i) => i > t[0].index ? i - 1 : i)).filter((l) => l.length);
    A.push([]), e.polylines.val = A;
  });
}
function io(e, s, u) {
  const x = Math.round(14.999999999999998), h = { position: e.position.clone(), quaternion: e.quaternion.clone() }, p = setInterval(z, 1e3 / 30);
  let v = 0;
  function z() {
    v++;
    const _ = v / x;
    e.position.lerpVectors(h.position, s.position, _), e.quaternion.slerpQuaternions(h.quaternion, s.quaternion, _), u && u(), v == x && clearInterval(p);
  }
}
class fn {
  constructor(s, u = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(s, u);
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
  setColorMap(s, u = 32) {
    this.map = It[s] || It.rainbow, this.n = u;
    const c = 1 / this.n, a = new Pe(), x = new Pe();
    this.lut.length = 0, this.lut.push(new Pe(this.map[0][1]));
    for (let h = 1; h < u; h++) {
      const p = h * c;
      for (let v = 0; v < this.map.length - 1; v++) if (p > this.map[v][0] && p <= this.map[v + 1][0]) {
        const z = this.map[v][0], _ = this.map[v + 1][0];
        a.setHex(this.map[v][1], vt), x.setHex(this.map[v + 1][1], vt);
        const w = new Pe().lerpColors(a, x, (p - z) / (_ - z));
        this.lut.push(w);
      }
    }
    return this.lut.push(new Pe(this.map[this.map.length - 1][1])), this;
  }
  copy(s) {
    return this.lut = s.lut, this.map = s.map, this.n = s.n, this.minV = s.minV, this.maxV = s.maxV, this;
  }
  getColor(s) {
    s = Vn.clamp(s, this.minV, this.maxV), s = (s - this.minV) / (this.maxV - this.minV);
    const u = Math.round(s * this.n);
    return this.lut[u];
  }
  addColorMap(s, u) {
    return It[s] = u, this;
  }
  createCanvas() {
    const s = document.createElement("canvas");
    return s.width = 1, s.height = this.n, this.updateCanvas(s), s;
  }
  updateCanvas(s) {
    const u = s.getContext("2d", { alpha: false }), c = u.getImageData(0, 0, 1, this.n), a = c.data;
    let x = 0;
    const h = 1 / this.n, p = new Pe(), v = new Pe(), z = new Pe();
    for (let _ = 1; _ >= 0; _ -= h) for (let w = this.map.length - 1; w >= 0; w--) if (_ < this.map[w][0] && _ >= this.map[w - 1][0]) {
      const N = this.map[w - 1][0], H = this.map[w][0];
      p.setHex(this.map[w - 1][1], vt), v.setHex(this.map[w][1], vt), z.lerpColors(p, v, (_ - N) / (H - N)), a[x * 4] = Math.round(z.r * 255), a[x * 4 + 1] = Math.round(z.g * 255), a[x * 4 + 2] = Math.round(z.b * 255), a[x * 4 + 3] = 255, x += 1;
    }
    return u.putImageData(c, 0, 0), s;
  }
}
const It = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, mt = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function lo(e) {
  e = Math.max(0, Math.min(1, e));
  for (let u = 0; u < mt.length - 1; u++) {
    const [c, a, x, h] = mt[u], [p, v, z, _] = mt[u + 1];
    if (e <= p) {
      const w = (e - c) / (p - c);
      return [a + (v - a) * w, x + (z - x) * w, h + (_ - h) * w];
    }
  }
  const s = mt[mt.length - 1];
  return [s[1], s[2], s[3]];
}
function ro() {
  const s = new Uint8Array(1024);
  for (let c = 0; c < 256; c++) {
    const a = c / 255, [x, h, p] = lo(a);
    s[c * 4 + 0] = x, s[c * 4 + 1] = h, s[c * 4 + 2] = p, s[c * 4 + 3] = 255;
  }
  const u = new Tn(s, 256, 1, En);
  return u.minFilter = nn, u.magFilter = nn, u.wrapS = on, u.wrapT = on, u.needsUpdate = true, u;
}
function co(e, s, u) {
  new fn();
  const c = ro(), a = new Fn({ uniforms: { cmap: { value: c }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: Ie, transparent: false, clipping: true, depthWrite: true, depthTest: true }), x = new Ve(new oe(), a);
  return x.renderOrder = -1, x.frustumCulled = false, L.derive(() => {
    x.geometry.setAttribute("position", new Ye(e.val.flat(), 3));
    const h = [];
    for (const m of s.val) m.length === 3 ? h.push(m[0], m[1], m[2]) : m.length === 4 && (h.push(m[0], m[1], m[2]), h.push(m[0], m[2], m[3]));
    x.geometry.setIndex(new An(h, 1));
    const p = u.val.filter((m) => Number.isFinite(m));
    let v, z;
    const _ = Nt.val;
    if (_ ? (z = _[0], v = _[1]) : (v = p.length ? Math.max(...p) : 1, z = p.length ? Math.min(...p) : 0, z >= 0 && v > 0 && (z = 0)), v === z) {
      const m = Math.max(Math.abs(v) * 1e-6, 1e-9);
      v += m, z -= m;
    }
    const w = _ && _[0] > _[1], N = Math.min(z, v), H = Math.max(z, v), Z = H - N, ie = new Float32Array(u.val.length);
    for (let m = 0; m < u.val.length; m++) {
      const O = u.val[m];
      if (!Number.isFinite(O)) {
        ie[m] = -1;
        continue;
      }
      const ce = ((w ? H + N - O : O) - N) / Z;
      ie[m] = Math.max(0, Math.min(1, ce));
    }
    x.geometry.setAttribute("scalar", new Me(ie, 1));
  }), x;
}
function po(e, s, u, c) {
  const a = co(u, e.elements, c);
  return L.derive(() => {
    a.visible = s.shellResults.val != "none";
  }), a;
}
const uo = 6, Rt = 10, ho = 0.012;
function fo(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function mo(e, s, u, c) {
  if (!u && !c) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && u) {
    const x = u[e];
    if (x && x.has(s)) return x.get(s);
  }
  return null;
}
function wo(e, s, u, c) {
  const a = new Se(), x = new fn();
  x.setColorMap("rainbow");
  const h = new Pe(), p = L.state([]);
  return L.derive(() => {
    var _a, _b, _c;
    s.deformedShape.val;
    const v = u.val, z = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], _ = fo(s.frameResults.val);
    if (a.children.forEach((R) => {
      R.geometry && R.geometry.dispose(), R.material && R.material.dispose();
    }), a.clear(), !_ || z.length === 0 || v.length === 0) {
      p.val = [];
      return;
    }
    const w = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, N = (_c = e.deformOutputs) == null ? void 0 : _c.val, H = [], Z = [];
    for (let R = 0; R < z.length; R++) {
      if (z[R].length !== 2) continue;
      const G = mo(_, R, w, N);
      G && (H.push(G[0], G[1]), Z.push({ idx: R, vals: G }));
    }
    if (H.length === 0) {
      p.val = [];
      return;
    }
    const ie = Math.min(...H), m = Math.max(...H);
    x.setMin(ie), x.setMax(m), p.val = H;
    const O = [1 / 0, 1 / 0, 1 / 0], j = [-1 / 0, -1 / 0, -1 / 0];
    for (const R of v) for (let $ = 0; $ < 3; $++) O[$] = Math.min(O[$], R[$]), j[$] = Math.max(j[$], R[$]);
    const D = Math.max(j[0] - O[0], j[1] - O[1], j[2] - O[2], 1) * ho, P = [], I = [], S = [];
    let b = 0;
    for (const { idx: R, vals: $ } of Z) {
      const G = z[R], U = v[G[0]], C = v[G[1]];
      if (!U || !C) continue;
      const B = new g(C[0] - U[0], C[1] - U[1], C[2] - U[2]), se = B.length();
      if (se < 1e-10) continue;
      B.normalize();
      const Q = Math.abs(B.y) < 0.99 ? new g(0, 1, 0) : new g(1, 0, 0), ne = new g().crossVectors(B, Q).normalize(), re = new g().crossVectors(B, ne).normalize(), de = Rt + 1, le = uo;
      for (let he = 0; he < de; he++) {
        const ve = he / Rt, _e = U[0] + B.x * se * ve, Fe = U[1] + B.y * se * ve, X = U[2] + B.z * se * ve, W = $[0] + ($[1] - $[0]) * ve, K = x.getColor(W) ?? new Pe(0, 0, 0);
        h.copy(K).convertSRGBToLinear();
        for (let q = 0; q < le; q++) {
          const ue = q / le * Math.PI * 2, xe = Math.cos(ue), we = Math.sin(ue);
          P.push(_e + (ne.x * xe + re.x * we) * D, Fe + (ne.y * xe + re.y * we) * D, X + (ne.z * xe + re.z * we) * D), I.push(h.r, h.g, h.b);
        }
      }
      for (let he = 0; he < Rt; he++) for (let ve = 0; ve < le; ve++) {
        const _e = (ve + 1) % le, Fe = b + he * le + ve, X = b + he * le + _e, W = b + (he + 1) * le + ve, K = b + (he + 1) * le + _e;
        S.push(Fe, X, K), S.push(Fe, K, W);
      }
      b += de * le;
    }
    if (P.length === 0) return;
    const T = new oe();
    T.setAttribute("position", new Ye(P, 3)), T.setAttribute("color", new Ye(I, 3)), T.setIndex(S), T.computeVertexNormals();
    const Y = new Xe({ vertexColors: true, side: Ie }), E = new Ve(T, Y);
    E.frustumCulled = false, a.add(E);
  }), a.__colorMapValues = p, a;
}
function cn(e, s = 8) {
  const u = document.createElement("div");
  u.id = "legend";
  const c = document.createElement("div");
  c.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", u.appendChild(c), setTimeout(() => {
    L.derive(() => {
      c.textContent = Bt.val ? `[${Bt.val}]` : "";
    });
  });
  const a = Array.from({ length: s + 1 }, (v, z) => z / s).reverse();
  let x, h;
  a.forEach((v, z) => {
    x = document.createElement("div"), x.id = `marker-${z}`, x.className = "marker", x.style.marginTop = z == 0 ? "0px" : `calc(${50 / s}vh - 1px)`, h = document.createElement("p"), h.id = `marker-text-${z}`, x.append(h), u.append(x);
  });
  const p = [];
  return u.querySelectorAll("p").forEach((v) => p.push(v)), setTimeout(() => {
    L.derive(() => {
      a.forEach((v, z) => {
        const _ = p[z];
        _ && (_.innerText = xo(e.val, v).toString());
      });
    });
  }), u;
}
function xo(e, s) {
  const u = Nt.val;
  if (u) return (u[0] + s * (u[1] - u[0])).toPrecision(3);
  const c = e.filter((h) => Number.isFinite(h));
  if (c.length === 0) return "0";
  let a = Math.min(...c);
  const x = Math.max(...c);
  return a >= 0 && x > 0 && (a = 0), (a + s * (x - a)).toPrecision(3);
}
function zo({ mesh: e, settingsObj: s, drawingObj: u, objects3D: c, solids: a }) {
  $n.DEFAULT_UP = new g(0, 0, 1);
  const x = document.createElement("div"), h = new Xn(), p = new Yn(45, 1, 0.1, 2 * 1e6), v = new Ln(-10, 10, 10, -10, -1e3, 2e6);
  let z = p;
  const _ = new In({ antialias: true });
  _.localClippingEnabled = true;
  const w = new sn(p, _.domElement);
  w.enableDamping = true, w.dampingFactor = 0.1, w.screenSpacePanning = true, w.zoomSpeed = 0.8, w.panSpeed = 1.2, w.rotateSpeed = 0.9, w.keyPanSpeed = 12, w.listenToKeyEvents(window), w.touches = { ONE: gt.ROTATE, TWO: gt.DOLLY_PAN }, _.domElement.addEventListener("wheel", (X) => {
    if (!X.ctrlKey && Math.abs(X.deltaX) > Math.abs(X.deltaY) * 1.5) {
      X.preventDefault();
      const W = w.target, K = new g().subVectors(p.position, W), q = new g();
      q.crossVectors(p.up, K).normalize();
      const xe = K.length() * 1e-3 * w.panSpeed;
      W.addScaledVector(q, X.deltaX * xe), p.position.addScaledVector(q, X.deltaX * xe), w.update();
    }
  }, { passive: false });
  const N = new Yt(new g(-1, 0, 0), 0), H = new Yt(new g(0, -1, 0), 0), Z = new Yt(new g(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function ie() {
    const X = window.__hekatanClip, W = [];
    X.enableX && (N.normal.set(X.invertX ? 1 : -1, 0, 0), N.constant = X.invertX ? -X.posX : X.posX, W.push(N)), X.enableY && (H.normal.set(0, X.invertY ? 1 : -1, 0), H.constant = X.invertY ? -X.posY : X.posY, W.push(H)), X.enableZ && (Z.normal.set(0, 0, X.invertZ ? 1 : -1), Z.constant = X.invertZ ? -X.posZ : X.posZ, W.push(Z)), _.clippingPlanes = W, h.traverse((q) => {
      const ue = q;
      if (ue.material) {
        const xe = Array.isArray(ue.material) ? ue.material : [ue.material];
        for (const we of xe) we.clippingPlanes = W, we.needsUpdate = true;
      }
    });
    const K = window.__hekatanPanes ?? [];
    for (const q of K) try {
      q && typeof q.refresh == "function" && q.refresh();
    } catch {
    }
    _.render(h, z);
  }
  ie(), window.__hekatanClipApply = ie;
  const m = Dn(s), O = L.derive(() => m.displayScale.val === 0 ? 1 : m.displayScale.val > 0 ? m.displayScale.val : -1 / m.displayScale.val), j = yo(e, m), ce = () => {
    const X = [];
    return m.gridXY.rawVal && X.push("xy"), m.gridXZ.rawVal && X.push("xz"), m.gridYZ.rawVal && X.push("yz"), X;
  }, D = () => {
    const X = m.gridStep.rawVal, W = Math.max(X, m.gridMajor.rawVal);
    return { planes: ce(), majorStep: W, minorStep: X };
  };
  let P = Lt(m.gridSize.rawVal, D());
  P.visible = m.gridVisible.rawVal, window.__hekatanSnap2D = m.cursorSnap.rawVal;
  const I = () => {
    const X = Math.max(0, Math.min(1, m.gridOpacity.rawVal));
    P.traverse((W) => {
      const K = W.material;
      if (!K || !("opacity" in K)) return;
      const q = W.name ?? "";
      let ue = 0.35;
      q.includes("border") ? ue = 1 : q.includes("major") && (ue = 0.75), K.opacity = X * ue;
    });
  };
  I(), x.appendChild(Zn(m, e, a)), x.setAttribute("id", "viewer"), x.appendChild(_.domElement), _.setPixelRatio(window.devicePixelRatio);
  const S = Qe();
  _.setClearColor(S.background, 1);
  const b = m.gridSize.rawVal, T = b * 0.5 + b * 0.5 / Math.tan(45 * 0.5);
  p.position.set(0, 0, T), p.up.set(0, 1, 0), w.target.set(0, 0, 0), w.minDistance = 0.1, w.maxDistance = 1e4, x.__settings = m, w.zoomSpeed = 1, w._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, w.update();
  let Y = ln(m.gridSize.rawVal, m.flipAxes.rawVal);
  h.add(P, Y), L.derive(() => {
    window.__hekatanGridPlaneXY = m.gridXY.val, window.__hekatanGridPlaneXZ = m.gridXZ.val, window.__hekatanGridPlaneYZ = m.gridYZ.val;
  });
  let E = true;
  L.derive(() => {
    const X = m.gridVisible.val;
    if (E) {
      E = false;
      return;
    }
    P.visible = X, Q();
  });
  let R = true;
  L.derive(() => {
    if (m.gridOpacity.val, R) {
      R = false;
      return;
    }
    I(), Q();
  }), L.derive(() => {
    const X = m.cursorSnap.val;
    window.__hekatanSnap2D = X;
  });
  let $ = true;
  L.derive(() => {
    var _a;
    const X = m.gridSize.val, W = m.flipAxes.val;
    if (m.gridXY.val, m.gridXZ.val, m.gridYZ.val, m.gridStep.val, m.gridMajor.val, $) {
      $ = false;
      return;
    }
    h.remove(P), (_a = P.traverse) == null ? void 0 : _a.call(P, (ue) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = ue.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = ue.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), P = Lt(X, D()), P.visible = m.gridVisible.rawVal, h.add(P), I(), h.remove(Y), Y.traverse((ue) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = ue.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = ue.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), Y = ln(X, W), h.add(Y);
    const K = X * 0.5 + X * 0.5 / Math.tan(45 * 0.5);
    p.position.distanceTo(w.target), Math.abs(p.position.x) < 0.1 && Math.abs(p.position.y) < 0.1 && p.position.z > 0 ? p.position.set(0, 0, K) : p.position.set(0.5 * X, -K, 0.5 * X), w.target.set(0, 0, 0), w.minDistance = Math.max(0.05, X * 0.01), w.maxDistance = Math.max(50, X * 50), w.update(), Q();
  }), new ResizeObserver((X) => {
    var _a, _b;
    for (const W of X) {
      const K = (_a = W.target) == null ? void 0 : _a.clientWidth, q = (_b = W.target) == null ? void 0 : _b.clientHeight;
      if (K === 0 || q === 0) continue;
      const xe = (U ? K / 2 : K) / q;
      p.aspect = xe, p.updateProjectionMatrix();
      const we = v.top;
      if (v.left = -we * xe, v.right = we * xe, v.updateProjectionMatrix(), C && C.isPerspectiveCamera) C.aspect = xe, C.updateProjectionMatrix();
      else if (C && C.isOrthographicCamera) {
        const fe = C, ge = fe.top;
        fe.left = -ge * xe, fe.right = ge * xe, fe.updateProjectionMatrix();
      }
      _.setSize(K, q), Q();
    }
  }).observe(x), w.addEventListener("change", Q), L.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, m.displayScale.val, m.nodes.val, m.elements.val, (_g = m.edges) == null ? void 0 : _g.val, m.elemColumns.val, m.elemBeams.val, m.nodesIndexes.val, m.elementsIndexes.val, m.orientations.val, m.sections.val, m.secColumns.val, m.secBeams.val, m.secFloor.val, m.supports.val, m.loads.val, m.deformedShape.val, m.nodeResults.val, m.frameResults.val, m.shellResults.val, (_h = m.solidResults) == null ? void 0 : _h.val, setTimeout(Q);
  });
  let U = false, C = null, B = null, se = false;
  function Q() {
    const X = x.clientWidth || 1, W = x.clientHeight || 1;
    if (!U || !C) {
      _.setScissorTest(false), _.setViewport(0, 0, X, W), _.render(h, z);
      return;
    }
    const K = X / 2;
    _.setScissorTest(true), _.setViewport(0, 0, K, W), _.setScissor(0, 0, K, W), _.render(h, z), _.setViewport(K, 0, K, W), _.setScissor(K, 0, K, W), _.render(h, C), _.setScissorTest(false);
  }
  function ne(X) {
    z = X, w.object = X, w.update(), Q();
  }
  function re(X, W) {
    U = X, W && (C = W);
    const K = x.clientWidth || 1, q = x.clientHeight || 1, xe = (X ? K / 2 : K) / q;
    p.isPerspectiveCamera && (p.aspect = xe, p.updateProjectionMatrix());
    const we = v.top;
    if (v.left = -we * xe, v.right = we * xe, v.updateProjectionMatrix(), X && C) {
      if (B ? (B.object = C, B.update()) : (B = new sn(C, _.domElement), B.enableDamping = true, B.dampingFactor = 0.1, B.screenSpacePanning = true, B.zoomSpeed = 0.8, B.panSpeed = 1.2, B.rotateSpeed = 0.9, B.touches = { ONE: gt.ROTATE, TWO: gt.DOLLY_PAN }, B.target.copy(w.target), B.addEventListener("change", Q), B.enabled = false), !se) {
        const fe = (ge) => {
          if (!U || !B) return;
          const Je = _.domElement.getBoundingClientRect(), nt = ge.clientX - Je.left, ot = Je.width / 2, ct = nt >= ot;
          w.enabled = !ct, B.enabled = ct;
        };
        _.domElement.addEventListener("pointerdown", fe, true), _.domElement.addEventListener("wheel", fe, { capture: true, passive: true }), se = true;
      }
    } else X || (w.enabled = true, B && (B.enabled = false));
    x.__splitMode = X, window.__hekatanSplitMode = X, window.__hekatanSplitCamera = X ? C : null, Q();
  }
  if (e) {
    h.add(Nn(m, j, O), Wn(e, m, j), Kn(m, j, O), qn(e, m, j, O), Gn(e, m, j, O), Hn(e, m, j, O), On(e, m, j, O), eo(e, m, j, O), so(e, m, j, O), to(e, m, j, O));
    const X = So(e, m), W = po(e, m, j, X), K = cn(X);
    h.add(W), x.appendChild(K);
    const q = wo(e, m, j);
    h.add(q);
    const ue = q.__colorMapValues, xe = cn(ue);
    xe.id = "frame-legend", x.appendChild(xe), L.derive(() => {
      var _a;
      const we = m.shellResults.val != "none", fe = (((_a = m.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", ge = we || fe, Je = m.frameResults.val.startsWith("contour:");
      K.hidden = !ge, W.visible = ge, xe.hidden = !Je;
    });
  }
  if (a) {
    const X = new Rn(16777215, 0.5);
    h.add(X);
    const W = new an(16777215, 0.5);
    W.position.set(30, 25, -10), W.shadow.mapSize.width = 1024, W.shadow.mapSize.height = 1024, h.add(W);
    const K = 10;
    W.shadow.camera.left = -K, W.shadow.camera.right = K, W.shadow.camera.top = K, W.shadow.camera.bottom = -K, W.shadow.camera.far = 1e3;
    const q = new an(16777215, 0.5);
    q.color.setHSL(11, 43, 96), q.position.set(-10, 0, 30), h.add(q), L.derive(() => {
      (a == null ? void 0 : a.val.length) && (h.remove(...a.oldVal), h.add(...a.rawVal), Q());
    }), L.derive(() => {
      a.rawVal.forEach((ue) => ue.visible = m.solids.val), Q();
    });
  }
  if (c) {
    const X = [], W = (q) => {
      var _a;
      return ((_a = q == null ? void 0 : q.userData) == null ? void 0 : _a.isCota) ? m.showCotas.val : m.custom3D.val;
    }, K = () => {
      for (const q of X) q.visible = W(q);
      Q();
    };
    L.derive(() => {
      const q = c.val;
      X.length && (h.remove(...X), X.length = 0), q.length && (h.add(...q), X.push(...q), K()), Q();
    }), L.derive(() => {
      m.custom3D.val, K();
    }), L.derive(() => {
      m.showCotas.val, K();
    });
  }
  u && ao({ drawingObj: u, gridObj: P, scene: h, getActiveCamera: () => z, controls: w, gridSize: b, derivedDisplayScale: O, rendererElm: _.domElement, viewerRender: Q }), Pt((X, W) => {
    var _a;
    _.setClearColor(W.background, 1), h.remove(P), (_a = P.traverse) == null ? void 0 : _a.call(P, (K) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = K.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = K.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), P = Lt(m.gridSize.rawVal, { planes: ce() }), h.add(P), x.style.setProperty("--awatif-legend-color", W.legendMarker), Q();
  });
  const de = { scene: h, perspCamera: p, orthoCamera: v, get camera() {
    return z;
  }, controls: w, renderer: _, rendererElm: _.domElement, render: Q, setActiveCamera: ne, setSplitMode: re, get splitMode() {
    return U;
  }, get splitCamera() {
    return C;
  }, settings: m };
  x.__ctx = de;
  const le = document.createElement("div");
  le.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const he = (X, W, K) => {
    const q = document.createElement("button");
    return q.textContent = X, q.title = W, q.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), q.onmouseenter = () => {
      q.style.background = "rgba(70,70,70,0.9)";
    }, q.onmouseleave = () => {
      q.style.background = "rgba(40,40,40,0.85)";
    }, q.onclick = (ue) => {
      ue.preventDefault(), K();
    }, q;
  }, ve = (X, W) => {
    const K = w.target, q = new g().subVectors(z.position, K), ue = q.length(), xe = new g(), we = new g();
    xe.crossVectors(z.up, q).normalize(), we.copy(z.up).normalize();
    const fe = ue * 0.05;
    K.addScaledVector(xe, -X * fe), K.addScaledVector(we, W * fe), z.position.addScaledVector(xe, -X * fe), z.position.addScaledVector(we, W * fe), w.update(), Q();
  }, _e = (X) => {
    const W = new g().subVectors(z.position, w.target);
    W.multiplyScalar(X), z.position.copy(w.target).add(W), w.update(), Q();
  }, Fe = () => {
    const X = document.createElement("div");
    return X.style.cssText = "width:32px;height:32px;", X;
  };
  return le.append(Fe()), le.append(he("\u2191", "Pan arriba", () => ve(0, 1))), le.append(he("\u2295", "Zoom in", () => _e(0.85))), le.append(he("\u2190", "Pan izquierda", () => ve(-1, 0))), le.append(he("\u2302", "Reset vista", () => {
    w.reset(), Q();
  })), le.append(he("\u2192", "Pan derecha", () => ve(1, 0))), le.append(he("\u2296", "Zoom out", () => _e(1.18))), le.append(he("\u2193", "Pan abajo", () => ve(0, -1))), le.append(Fe()), getComputedStyle(x).position === "static" && (x.style.position = "relative"), x.appendChild(le), x;
}
function yo(e, s) {
  return L.derive(() => {
    var _a, _b, _c, _d;
    if (!s.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const u = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], c = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!c || u.length === 0) return u;
    const a = s.deformScale.val, x = s.deformScale.val * s.deformScaleZ.val, h = Number.isFinite(a) ? a : 1, p = Number.isFinite(x) ? x : 1;
    return u.map((v, z) => {
      var _a2;
      const _ = ((_a2 = c.get(z)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], w = Number.isFinite(_[0]) ? _[0] : 0, N = Number.isFinite(_[1]) ? _[1] : 0, H = Number.isFinite(_[2]) ? _[2] : 0;
      return [v[0] + w * h, v[1] + N * h, v[2] + H * p];
    });
  });
}
const Nt = L.state(null), Bt = L.state(""), vo = L.state("kN"), go = L.state("mm"), bo = L.state("kN/m\xB2"), Mo = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, dn = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, _o = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function So(e, s) {
  const u = L.state([]);
  let c;
  return ((a) => {
    a.bendingXX = "bendingXX", a.bendingYY = "bendingYY", a.bendingXY = "bendingXY", a.membraneXX = "membraneXX", a.membraneYY = "membraneYY", a.membraneXY = "membraneXY", a.tranverseShearX = "tranverseShearX", a.tranverseShearY = "tranverseShearY", a.vonMises = "vonMises", a.pressure = "pressure", a.displacementX = "displacementX", a.displacementY = "displacementY", a.displacementZ = "displacementZ";
  })(c || (c = {})), L.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const a = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), Z = (de, le) => {
      de == null ? void 0 : de.forEach((he, ve) => {
        const _e2 = e.elements.val[ve];
        if (_e2) for (let Fe = 0; Fe < _e2.length; Fe++) le.set(_e2[Fe], [he[Fe] ?? he[0]]);
      });
    };
    Z((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, a), Z((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, x), Z((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, h), Z((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, p), Z((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, v), Z((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, z), Z((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, _), Z((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, w), Z((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, N), Z((_t2 = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t2.pressure, H);
    const ie = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, m = (_w = s.solidResults) == null ? void 0 : _w.val, j = m && m !== "none" ? m : s.shellResults.val, ce = ie == null ? void 0 : ie[j], D = { bendingXX: [a, 0], bendingYY: [x, 0], bendingXY: [h, 0], membraneXX: [p, 0], membraneYY: [v, 0], membraneXY: [z, 0], tranverseShearX: [_, 0], tranverseShearY: [w, 0], vonMises: [N, 0], pressure: [H, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, P = s.shellResults.val, I = vo.val, S = go.val, b = P === "displacementX" || P === "displacementY" || P === "displacementZ", T = P === "bendingXX" || P === "bendingYY" || P === "bendingXY", Y = P === "membraneXX" || P === "membraneYY" || P === "membraneXY", E = P === "vonMises" || P === "pressure", R = P === "tranverseShearX" || P === "tranverseShearY", $ = (_D = s.solidResults) == null ? void 0 : _D.val, G = $ === "vonMises" || $ === "sigmaXX" || $ === "sigmaYY" || $ === "sigmaZZ" || $ === "tauXY" || $ === "tauYZ" || $ === "tauXZ", U = $ === "ux" || $ === "uy" || $ === "uz", C = bo.val, B = G ? _o[C] : U || b ? dn[S] : T || Y || E || R ? 1 / Mo[I] : 1, se = G ? C : U || b ? S : T ? `${I}\xB7m/m` : Y ? `${I}/m\xB2` : E ? `${I}/m\xB2` : R ? `${I}/m` : "";
    Bt.val = se, Nt.val = Array.isArray(ce) && ce.length === 2 ? [ce[0] * B, ce[1] * B] : null;
    const ne = $ && $ !== "none" ? [N, 0] : D[P], re = [];
    e.nodes.val.forEach((de, le) => {
      const he = ne;
      if (!he || !he[0] || typeof he[0].has != "function") return;
      if (!he[0].has(le)) {
        re.push(Number.NaN);
        return;
      }
      const ve = he[0].get(le), _e2 = ve ? ve[he[1]] ?? 0 : 0;
      re.push(_e2 * B);
    }), u.val = re;
  }), u;
}
export {
  go as a,
  co as b,
  vo as c,
  cn as d,
  bo as e,
  zo as g
};
