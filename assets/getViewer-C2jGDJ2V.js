import { X as Nt, B as le, Y as Kt, F as Je, G as ze, d as St, L as $e, e as Re, D as tt, b as Le, s as De, Z as Dn, c as io, V as g, x as wt, y as Ze, _ as an, k as Zn, a as Ue, f as Ce, h as Wt, $ as Ut, l as lo, j as ro, q as $t, J as Vt, S as At, a0 as zn, m as Fn, o as Vn, p as An, a1 as Tn, a2 as Rt, a3 as co, a4 as po, a5 as uo, a6 as ho, a7 as fo, n as En, a8 as Ln, r as mo, t as wo, u as xo, W as yo, v as In, a9 as Dt, H as ln, A as go, w as Bn, O as vo } from "./Text-BE0JKoqd.js";
import { v as B, P as Nn, g as pt, o as Gt } from "./theme-2eEBQPmF.js";
import "./styles-lf_LNy9d.js";
function bo(e, s, y) {
  const u = document.createElement("div"), c = new Nn({ title: "Settings", expanded: true, container: u });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(c), u.setAttribute("id", "settings");
  const S = "hk_settingsPos";
  let b = null;
  try {
    const _ = localStorage.getItem(S);
    _ && (b = JSON.parse(_));
  } catch {
  }
  u.style.cssText = ["position:fixed", b ? `left:${b.left}px` : "left:8px", b ? `top:${b.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const m = () => {
    const _ = u.querySelector(".tp-rotv_b");
    if (!_) {
      setTimeout(m, 200);
      return;
    }
    _.style.cursor = "move", _.style.userSelect = "none";
    let H = false, j = 0, G = 0, pe = 0, M = 0;
    _.addEventListener("mousedown", (oe) => {
      H = true, j = oe.clientX, G = oe.clientY;
      const se = u.getBoundingClientRect();
      pe = se.left, M = se.top, u.style.left = `${pe}px`, u.style.top = `${M}px`;
    }), window.addEventListener("mousemove", (oe) => {
      if (!H) return;
      const se = oe.clientX - j, fe = oe.clientY - G, W = Math.max(0, Math.min(window.innerWidth - 40, pe + se)), F = Math.max(0, Math.min(window.innerHeight - 40, M + fe));
      u.style.left = `${W}px`, u.style.top = `${F}px`;
    }), window.addEventListener("mouseup", () => {
      if (H) {
        H = false;
        try {
          localStorage.setItem(S, JSON.stringify({ left: parseFloat(u.style.left), top: parseFloat(u.style.top) }));
        } catch {
        }
      }
    });
  };
  if (m(), s == null ? void 0 : s.nodes) {
    c.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 });
    const _ = c.addFolder({ title: "\u{1F4D0} Grid", expanded: true });
    _.addBinding(e.gridSize, "val", { label: "Dimensi\xF3n (m)", min: 1, max: 100, step: 1 }), _.addBinding(e.gridStep, "val", { label: "Separaci\xF3n grid (m)", min: 0.05, max: 5, step: 0.05 }), _.addBinding(e.gridMajor, "val", { label: "Separaci\xF3n mayores (m)", min: 0.1, max: 50, step: 0.1 }), _.addBinding(e.cursorSnap, "val", { label: "Paso cursor (m)", min: 0.05, max: 5, step: 0.05 }), _.addBinding(e.gridVisible, "val", { label: "Mostrar" }), _.addBinding(e.gridOpacity, "val", { label: "Opacidad", min: 0, max: 1, step: 0.05 }), _.addBinding(e.gridXY, "val", { label: "Plano XY (planta)" }), _.addBinding(e.gridXZ, "val", { label: "Plano XZ (frontal)" }), _.addBinding(e.gridYZ, "val", { label: "Plano YZ (lateral)" }), c.addBinding(e.nodes, "val", { label: "Nodes" }), c.addBinding(e.elements, "val", { label: "Elements" }), c.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), c.addBinding(e.faces, "val", { label: "  Caras (fill)" }), c.addBinding(e.elemColumns, "val", { label: "  Columnas" }), c.addBinding(e.elemBeams, "val", { label: "  Vigas" }), c.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), c.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), c.addBinding(e.orientations, "val", { label: "Orientations" }), c.addBinding(e.sections, "val", { label: "Sections" }), c.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), c.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), c.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } });
  }
  if ((s == null ? void 0 : s.nodeInputs) || (s == null ? void 0 : s.elementInputs)) {
    const _ = c.addFolder({ title: "Analysis Inputs" });
    _.addBinding(e.supports, "val", { label: "Supports" }), _.addBinding(e.loads, "val", { label: "Loads" }), _.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), _.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((s == null ? void 0 : s.deformOutputs) || (s == null ? void 0 : s.analyzeOutputs)) {
    const _ = c.addFolder({ title: "Analysis Outputs" });
    _.addBinding(e.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), _.addBinding(e.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), _.addBinding(e.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), _.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), _.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), _.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), _.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  y && c.addBinding(e.solids, "val", { label: "Solids" });
  const k = c.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), V = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), C = () => {
    const _ = window.__hekatanClipApply;
    typeof _ == "function" && _();
  };
  return k.addBinding(V, "enableX", { label: "Cortar X" }).on("change", C), k.addBinding(V, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", C), k.addBinding(V, "invertX", { label: "  invertir X" }).on("change", C), k.addBinding(V, "enableY", { label: "Cortar Y" }).on("change", C), k.addBinding(V, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", C), k.addBinding(V, "invertY", { label: "  invertir Y" }).on("change", C), k.addBinding(V, "enableZ", { label: "Cortar Z" }).on("change", C), k.addBinding(V, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", C), k.addBinding(V, "invertZ", { label: "  invertir Z" }).on("change", C), u;
}
function Mo(e) {
  return { gridSize: B.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: B.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: B.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: B.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: B.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: B.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: B.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: B.state((e == null ? void 0 : e.gridXZ) ?? false), gridYZ: B.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: B.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: B.state((e == null ? void 0 : e.nodes) ?? true), elements: B.state((e == null ? void 0 : e.elements) ?? true), edges: B.state((e == null ? void 0 : e.edges) ?? true), faces: B.state((e == null ? void 0 : e.faces) ?? true), elemColumns: B.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: B.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: B.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: B.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: B.state((e == null ? void 0 : e.orientations) ?? false), sections: B.state((e == null ? void 0 : e.sections) ?? true), secColumns: B.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: B.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: B.state((e == null ? void 0 : e.secFloor) ?? -1), supports: B.state((e == null ? void 0 : e.supports) ?? true), loads: B.state((e == null ? void 0 : e.loads) ?? false), deformedShape: B.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: B.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: B.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: B.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: B.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: B.state((e == null ? void 0 : e.flipAxes) ?? false), solids: B.state((e == null ? void 0 : e.solids) ?? true), custom3D: B.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: B.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: B.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: B.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function _o(e, s, y) {
  const u = pt(), c = new Nt(new le(), new Kt({ color: u.nodePoint }));
  return Gt((S, b) => {
    c.material.color.setHex(b.nodePoint);
  }), c.frustumCulled = false, B.derive(() => {
    e.nodes.val && c.geometry.setAttribute("position", new Je(s.val.flat(), 3));
  }), B.derive(() => {
    y.val;
    const S = 0.02 * e.gridSize.val * 0.5;
    e.nodes.rawVal && (c.material.size = S * y.rawVal);
  }), B.derive(() => {
    c.visible = e.nodes.val;
  }), c;
}
function So(e, s, y) {
  const u = pt(), c = new ze(), S = new St(new le(), new $e({ color: u.elementLine }));
  Gt((H, j) => {
    S.material.color.setHex(j.elementLine);
  }), S.frustumCulled = false, S.renderOrder = 2, c.add(S);
  const b = new Re({ vertexColors: true, transparent: true, opacity: u.shellOpacity, side: tt, depthWrite: false, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }), m = new Le(new le(), b);
  m.frustumCulled = false, c.add(m);
  let k = new De(u.shellWall), V = new De(u.shellSlab), C = new De(u.shellTri);
  Gt((H, j) => {
    k = new De(j.shellWall), V = new De(j.shellSlab), C = new De(j.shellTri), b.opacity = j.shellOpacity, b.needsUpdate = true;
  });
  function _(H, j) {
    const G = Math.abs(j[0] - H[0]), pe = Math.abs(j[1] - H[1]), M = Math.abs(j[2] - H[2]);
    return M > G && M > pe || pe > G && pe > M;
  }
  return B.derive(() => {
    var _a;
    if (s.deformedShape.val, s.elemColumns.val, s.elemBeams.val, !s.elements.val) return;
    const H = s.elemColumns.rawVal, j = s.elemBeams.rawVal, G = y.val, pe = ((_a = e.elements) == null ? void 0 : _a.val) || [], M = pe.filter((W) => {
      if (W.length !== 2) return true;
      const F = G[W[0]], Y = G[W[1]];
      if (!F || !Y) return true;
      const z = _(F, Y);
      return !(z && !H || !z && !j);
    }).map((W) => ko(W).map((F) => [...G[F[0]], ...G[F[1]]]).flat()).flat();
    S.geometry.setAttribute("position", new Je(M, 3));
    const oe = [], se = [];
    function fe(W, F, Y, z) {
      const P = [F[0] - W[0], F[1] - W[1], F[2] - W[2]], T = [z[0] - W[0], z[1] - W[1], z[2] - W[2]], I = P[1] * T[2] - P[2] * T[1], L = P[2] * T[0] - P[0] * T[2], D = P[0] * T[1] - P[1] * T[0], N = Math.sqrt(I * I + L * L + D * D);
      return N < 1e-12 ? false : Math.abs(D / N) < 0.5;
    }
    for (const W of pe) if (W.length === 3) {
      const [F, Y, z] = W;
      if (G[F] && G[Y] && G[z]) {
        oe.push(...G[F], ...G[Y], ...G[z]);
        for (let P = 0; P < 3; P++) se.push(C.r, C.g, C.b);
      }
    } else if (W.length === 4) {
      const [F, Y, z, P] = W;
      if (G[F] && G[Y] && G[z] && G[P]) {
        const T = fe(G[F], G[Y], G[z], G[P]) ? k : V;
        oe.push(...G[F], ...G[Y], ...G[z]), oe.push(...G[F], ...G[z], ...G[P]);
        for (let I = 0; I < 6; I++) se.push(T.r, T.g, T.b);
      }
    }
    oe.length > 0 ? (m.geometry.dispose(), m.geometry = new le(), m.geometry.setAttribute("position", new Je(oe, 3)), m.geometry.setAttribute("color", new Je(se, 3)), m.geometry.computeVertexNormals(), m.visible = s.faces ? s.faces.rawVal : true) : m.visible = false;
  }), B.derive(() => {
    c.visible = s.elements.val;
  }), B.derive(() => {
    s.edges && (S.visible = s.edges.val);
  }), B.derive(() => {
    if (!s.faces) return;
    const H = s.faces.val;
    m.geometry.attributes.position ? m.visible = H : H || (m.visible = false);
  }), c;
}
function ko(e) {
  if (e.length === 2) return [e];
  const s = [];
  for (let y = 0; y < e.length; y++) s.push([e[y], e[(y + 1) % e.length]]);
  return s;
}
function rn(e, s) {
  const y = pt(), u = new ze();
  u.name = "hekatan-grid";
  const c = (s == null ? void 0 : s.planes) ?? ["xy"];
  let S = (s == null ? void 0 : s.majorStep) ?? 1, b = (s == null ? void 0 : s.minorStep) ?? 0.1;
  for (S <= 0 && (S = 1), b <= 0 && (b = 0.1); e / b > 500; ) b *= 2;
  for (; e / S > 100; ) S *= 2;
  const m = e / 2;
  S = Math.max(b, Math.round(S / b) * b);
  const V = new De(y.grid), C = new De(y.grid).multiplyScalar(0.45), _ = (j, G, pe, M) => {
    const oe = [], se = j === "xy" ? (z, P) => [z, P, 0] : j === "xz" ? (z, P) => [z, 0, P] : (z, P) => [0, z, P], fe = Math.floor(m / G);
    for (let z = -fe; z <= fe; z++) {
      const P = z * G, T = se(P, -m), I = se(P, m);
      oe.push(...T, ...I);
    }
    for (let z = -fe; z <= fe; z++) {
      const P = z * G, T = se(-m, P), I = se(m, P);
      oe.push(...T, ...I);
    }
    const W = new le();
    W.setAttribute("position", new Je(oe, 3));
    const F = new $e({ color: pe, transparent: true, opacity: M, depthWrite: false }), Y = new St(W, F);
    return Y.name = `grid-${j}-${G === b ? "minor" : "major"}`, Y;
  }, H = (j, G, pe) => {
    const M = j === "xy" ? (Y, z) => [Y, z, 0] : j === "xz" ? (Y, z) => [Y, 0, z] : (Y, z) => [0, Y, z], oe = [[-m, -m], [m, -m], [m, m], [-m, m]], se = [];
    for (const [Y, z] of oe) se.push(...M(Y, z));
    const fe = new le();
    fe.setAttribute("position", new Je(se, 3));
    const W = new $e({ color: G, transparent: true, opacity: pe, depthWrite: false }), F = new Dn(fe, W);
    return F.name = `grid-${j}-border`, F.renderOrder = 1, F;
  };
  for (const j of c) u.add(_(j, b, C, 0.12)), u.add(_(j, S, V, 0.4)), u.add(H(j, V, 0.55));
  return u.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: S, minorStep: b, gridSize: e, planes: [...c] }, u;
}
function Po(e, s, y, u) {
  const c = new ze(), S = new io(0.5, 0.5, 0.5), b = new Re({ color: 10166822 });
  return B.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, !s.supports.val) return;
    c.clear();
    const m = 0.18 * s.gridSize.val * 0.6;
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((k, V) => {
      const C = y.val[V];
      if (!C) return;
      const _ = new Le(S, b);
      _.position.set(...C);
      const H = m * u.rawVal;
      _.scale.set(H, H, H), c.add(_);
    });
  }), B.derive(() => {
    if (u.val, !s.supports.rawVal) return;
    const k = 0.18 * s.gridSize.val * 0.6 * u.rawVal;
    c.children.forEach((V) => V.scale.set(k, k, k));
  }), B.derive(() => {
    c.visible = s.supports.val;
  }), c;
}
function Co(e, s, y, u) {
  const c = new ze();
  c.name = "loadsGroup";
  function S(b) {
    if (b.length < 2) return 0.12 * s.gridSize.rawVal;
    const m = [1 / 0, 1 / 0, 1 / 0], k = [-1 / 0, -1 / 0, -1 / 0];
    for (const C of b) for (let _ = 0; _ < 3; _++) m[_] = Math.min(m[_], C[_]), k[_] = Math.max(k[_], C[_]);
    return 0.08 * Math.max(k[0] - m[0], k[1] - m[1], k[2] - m[2], 0.1);
  }
  return B.derive(() => {
    var _a, _b, _c;
    if (s.deformedShape.val, !s.loads.val) return;
    c.children.forEach((k) => k.dispose()), c.clear();
    const b = y.val, m = S(b);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((k, V) => {
      const C = b[V];
      if (!C) return;
      const _ = new g(...k.slice(0, 3));
      if (_.lengthSq() < 1e-30) return;
      _.normalize();
      const H = new wt(_, new g(...C), 1, 15637248, 0.3, 0.3), j = m * u.rawVal;
      H.scale.set(j, j, j), c.add(H);
    });
  }), B.derive(() => {
    if (u.val, !s.loads.rawVal) return;
    const m = S(y.rawVal) * u.rawVal;
    c.children.forEach((k) => k.scale.set(m, m, m));
  }), B.derive(() => {
    c.visible = s.loads.val;
  }), c;
}
function zo(e, s, y) {
  const u = new ze();
  return B.derive(() => {
    if (!e.nodesIndexes.val) return;
    u.children.forEach((S) => S.dispose()), u.clear();
    const c = 0.05 * e.gridSize.val * 0.6;
    s.val.forEach((S, b) => {
      const m = new Ze(`${b}`);
      m.position.set(...S), m.updateScale(c * y.rawVal), u.add(m);
    });
  }), B.derive(() => {
    if (y.val, !e.nodesIndexes.rawVal) return;
    const c = 0.05 * e.gridSize.val * 0.6;
    u.children.forEach((S) => S.updateScale(c * y.rawVal));
  }), B.derive(() => {
    u.visible = e.nodesIndexes.val;
  }), u;
}
function Fo(e, s, y, u) {
  const c = new ze();
  return B.derive(() => {
    var _a;
    if (s.deformedShape.val, !s.elementsIndexes.val) return;
    c.children.forEach((b) => b.dispose()), c.clear();
    const S = 0.05 * s.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((b, m) => {
      const k = new Ze(`${m}`, void 0, "#001219");
      k.position.set(...Vo(b.map((V) => y.rawVal[V]))), k.updateScale(S * u.rawVal), c.add(k);
    });
  }), B.derive(() => {
    if (u.val, !s.elementsIndexes.rawVal) return;
    const S = 0.05 * s.gridSize.val * 0.6;
    c.children.forEach((b) => b.updateScale(S * u.rawVal));
  }), B.derive(() => {
    c.visible = s.elementsIndexes.val;
  }), c;
}
function Vo(e) {
  const s = e.reduce((u, c) => [u[0] + c[0], u[1] + c[1], u[2] + c[2]], [0, 0, 0]), y = e.length;
  return [s[0] / y, s[1] / y, s[2] / y];
}
function Xn(e, s) {
  const y = new ze(), u = 0.05 * e * 1, c = pt(), S = new Ze("X", "red", "transparent"), b = new Ze(s ? "Z" : "Y", "green", "transparent"), m = new Ze(s ? "Y" : "Z", "blue", "transparent"), k = new wt(new g(1, 0, 0), new g(0, 0, 0), 1, c.axisArrow, 0.2, 0.2), V = new wt(new g(0, 1, 0), new g(0, 0, 0), 1, c.axisArrow, 0.2, 0.2), C = new wt(new g(0, 0, 1), new g(0, 0, 0), 1, c.axisArrow, 0.2, 0.2);
  return S.position.set(1.3 * u, 0, 0), b.position.set(0, 1.3 * u, 0), m.position.set(0, 0, 1.3 * u), S.updateScale(0.4 * u), b.updateScale(0.4 * u), m.updateScale(0.4 * u), k.scale.set(u, u, u), V.scale.set(u, u, u), C.scale.set(u, u, u), y.add(k, V, C, S, b, m), y;
}
function hn(e, s) {
  const y = new g(...e), c = new g(...s).clone().sub(y), S = c.length(), b = c.dot(new g(1, 0, 0)) / S, m = c.dot(new g(0, 1, 0)) / S, k = c.dot(new g(0, 0, 1)) / S, V = Math.sqrt(b ** 2 + m ** 2);
  let C = new an().fromArray([[b, m, k], [-m / V, b / V, 0], [-b * k / V, -m * k / V, V]].flat());
  return k === 1 && (C = new an().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), k === -1 && (C = new an().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Zn().setFromMatrix3(C);
}
function pn(e, s) {
  return e == null ? void 0 : e.map((y, u) => (9 * y + s[u]) / 10);
}
function Et(e) {
  const s = e.reduce((u, c) => [u[0] + c[0], u[1] + c[1], u[2] + c[2]], [0, 0, 0]), y = e.length;
  return [s[0] / y, s[1] / y, s[2] / y];
}
function Ao(e, s, y) {
  const u = Et([s, y]), c = Et([e, y]), S = Et([e, s]), b = new g(...u).sub(new g(...c)).normalize(), m = new g(...y).sub(new g(...S)).normalize(), k = b.clone().cross(m).normalize(), V = k.clone().cross(b).normalize();
  return new Zn().makeBasis(b, V, k);
}
function To(e, s, y, u) {
  const c = new ze(), S = new le(), b = new $e({ vertexColors: true }), m = [0, 0, 0], k = [1, 0, 0], V = [0, 1, 0], C = [0, 0, 1];
  S.setAttribute("position", new Je([...m, ...k, ...m, ...V, ...m, ...C], 3));
  const _ = [255, 0, 0], H = [0, 255, 0], j = [0, 0, 255];
  return S.setAttribute("color", new Je([..._, ..._, ...H, ...H, ...j, ...j], 3)), B.derive(() => {
    var _a;
    s.deformedShape.val, s.orientations.val && (c.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((G) => {
      const pe = new St(S, b), M = y.rawVal[G[0]], oe = y.rawVal[G[1]];
      if (G.length === 2 && (pe.position.set(...pn(M, oe)), pe.rotation.setFromRotationMatrix(hn(M, oe))), G.length === 3) {
        const W = y.rawVal[G[2]];
        pe.position.set(...Et([M, oe, W])), pe.rotation.setFromRotationMatrix(Ao(M, oe, W));
      }
      const fe = 0.05 * s.gridSize.rawVal * 0.75 * u.rawVal;
      pe.scale.set(fe, fe, fe), c.add(pe);
    }));
  }), B.derive(() => {
    if (u.val, !s.orientations.rawVal) return;
    const pe = 0.05 * s.gridSize.val * 0.75 * u.rawVal;
    c.children.forEach((M) => M.scale.set(pe, pe, pe));
  }), B.derive(() => {
    c.visible = s.orientations.val;
  }), c;
}
function Eo(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const s = (e.b * 100).toFixed(0), y = (e.h * 100).toFixed(0);
    return `${s}x${y}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function Lo(e, s, y, u) {
  const c = new ze();
  function S(F, Y) {
    const z = F / 2, P = Y / 2, T = new Float32Array([0, -z, -P, 0, z, -P, 0, z, P, 0, -z, -P, 0, z, P, 0, -z, P]), I = new le();
    I.setAttribute("position", new Ce(T, 3));
    const L = new Float32Array([0, -z, -P, 0, z, -P, 0, z, P, 0, -z, P, 0, -z, -P]), D = new le();
    return D.setAttribute("position", new Ce(L, 3)), { fill: I, outline: D };
  }
  function b(F, Y = 24) {
    const z = F / 2, P = new Float32Array(Y * 9);
    for (let D = 0; D < Y; D++) {
      const N = D / Y * Math.PI * 2, O = (D + 1) / Y * Math.PI * 2;
      P[D * 9] = 0, P[D * 9 + 1] = 0, P[D * 9 + 2] = 0, P[D * 9 + 3] = 0, P[D * 9 + 4] = z * Math.cos(N), P[D * 9 + 5] = z * Math.sin(N), P[D * 9 + 6] = 0, P[D * 9 + 7] = z * Math.cos(O), P[D * 9 + 8] = z * Math.sin(O);
    }
    const T = new le();
    T.setAttribute("position", new Ce(P, 3));
    const I = new Float32Array((Y + 1) * 3);
    for (let D = 0; D <= Y; D++) {
      const N = D / Y * Math.PI * 2;
      I[D * 3] = 0, I[D * 3 + 1] = z * Math.cos(N), I[D * 3 + 2] = z * Math.sin(N);
    }
    const L = new le();
    return L.setAttribute("position", new Ce(I, 3)), { fill: T, outline: L };
  }
  function m(F, Y, z, P) {
    const T = z ?? Y * 0.08, I = P ?? F * 0.07, L = F / 2, D = Y / 2, N = D - T, O = I / 2, q = [];
    function A(ie, ue, me, he) {
      q.push(0, ie, ue, 0, me, ue, 0, me, he, 0, ie, ue, 0, me, he, 0, ie, he);
    }
    A(-L, -D, L, -N), A(-O, -N, O, N), A(-L, N, L, D);
    const Z = new le();
    Z.setAttribute("position", new Ce(new Float32Array(q), 3));
    const ae = new Float32Array([0, -L, -D, 0, L, -D, 0, L, -N, 0, O, -N, 0, O, N, 0, L, N, 0, L, D, 0, -L, D, 0, -L, N, 0, -O, N, 0, -O, -N, 0, -L, -N, 0, -L, -D]), ne = new le();
    return ne.setAttribute("position", new Ce(ae, 3)), { fill: Z, outline: ne };
  }
  function k(F, Y, z) {
    const P = F / 2, T = Y / 2, I = P - z, L = T - z, D = [];
    function N(Z, ae, ne, ie) {
      D.push(0, Z, ae, 0, ne, ae, 0, ne, ie, 0, Z, ae, 0, ne, ie, 0, Z, ie);
    }
    N(-P, -T, P, -L), N(-P, L, P, T), N(-P, -L, -I, L), N(I, -L, P, L);
    const O = new le();
    O.setAttribute("position", new Ce(new Float32Array(D), 3));
    const q = new Float32Array([0, -P, -T, 0, P, -T, 0, P, -T, 0, P, T, 0, P, T, 0, -P, T, 0, -P, T, 0, -P, -T, 0, -I, -L, 0, I, -L, 0, I, -L, 0, I, L, 0, I, L, 0, -I, L, 0, -I, L, 0, -I, -L]), A = new le();
    return A.setAttribute("position", new Ce(q, 3)), { fill: O, outline: A };
  }
  function V(F, Y, z) {
    const P = F / 2, T = Y / 2, I = P - z, L = T - z, D = new le(), N = new Float32Array([0, -I, -L, 0, I, -L, 0, I, L, 0, -I, -L, 0, I, L, 0, -I, L]);
    D.setAttribute("position", new Ce(N, 3));
    const O = [];
    function q(ne, ie, ue, me) {
      O.push(0, ne, ie, 0, ue, ie, 0, ue, me, 0, ne, ie, 0, ue, me, 0, ne, me);
    }
    q(-P, -T, P, -L), q(-P, L, P, T), q(-P, -L, -I, L), q(I, -L, P, L);
    const A = new le();
    A.setAttribute("position", new Ce(new Float32Array(O), 3));
    const Z = new Float32Array([0, -P, -T, 0, P, -T, 0, P, -T, 0, P, T, 0, P, T, 0, -P, T, 0, -P, T, 0, -P, -T, 0, -I, -L, 0, I, -L, 0, I, -L, 0, I, L, 0, I, L, 0, -I, L, 0, -I, L, 0, -I, -L]), ae = new le();
    return ae.setAttribute("position", new Ce(Z, 3)), { concFill: D, steelFillGeom: A, outline: ae };
  }
  function C(F, Y, z) {
    const P = [], T = [[0, -F / 2, -Y / 2], [0, -F / 2 + z, -Y / 2], [0, -F / 2 + z, Y / 2 - z], [0, F / 2, Y / 2 - z], [0, F / 2, Y / 2], [0, -F / 2, Y / 2]], I = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const O of I) P.push(...T[O]);
    const L = new le();
    L.setAttribute("position", new Ce(new Float32Array(P), 3));
    const D = [];
    for (let O = 0; O < T.length; O++) {
      const q = (O + 1) % T.length;
      D.push(...T[O], ...T[q]);
    }
    const N = new le();
    return N.setAttribute("position", new Ce(new Float32Array(D), 3)), { fill: L, outline: N };
  }
  function _(F, Y, z, P) {
    const T = P / 2, I = [], L = [[0, -F - T, -Y / 2], [0, -z - T, -Y / 2], [0, -z - T, Y / 2 - z], [0, -T, Y / 2 - z], [0, -T, Y / 2], [0, -F - T, Y / 2]], D = [[0, T, -Y / 2], [0, T + z, -Y / 2], [0, T + z, Y / 2 - z], [0, F + T, Y / 2 - z], [0, F + T, Y / 2], [0, T, Y / 2]], N = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const Z of N) I.push(...L[Z]);
    for (const Z of N) I.push(...D[Z]);
    const O = new le();
    O.setAttribute("position", new Ce(new Float32Array(I), 3));
    const q = [];
    for (const Z of [L, D]) for (let ae = 0; ae < Z.length; ae++) {
      const ne = (ae + 1) % Z.length;
      q.push(...Z[ae], ...Z[ne]);
    }
    const A = new le();
    return A.setAttribute("position", new Ce(new Float32Array(q), 3)), { fill: O, outline: A };
  }
  function H(F, Y, z, P) {
    const T = Y / 2, I = F, L = [[0, -I, -T], [0, -I, -T + z], [0, -P, -T + z], [0, -P, T - z], [0, -I, T - z], [0, -I, T], [0, 0, T], [0, 0, -T]], D = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], N = [];
    for (const Z of D) N.push(...L[Z]);
    const O = new le();
    O.setAttribute("position", new Ce(new Float32Array(N), 3));
    const q = [];
    for (let Z = 0; Z < L.length; Z++) {
      const ae = (Z + 1) % L.length;
      q.push(...L[Z], ...L[ae]);
    }
    const A = new le();
    return A.setAttribute("position", new Ce(new Float32Array(q), 3)), { fill: O, outline: A };
  }
  function j(F, Y, z, P, T) {
    const I = Y / 2, L = T / 2, D = [], N = [[0, -F, -I], [0, -F, -I + z], [0, -L - P, -I + z], [0, -L - P, I - z], [0, -F, I - z], [0, -F, I], [0, -L, I], [0, -L, -I]], O = N.map((ne) => [ne[0], -ne[1], ne[2]]), q = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const ne of q) D.push(...N[ne]);
    for (const ne of q) D.push(...O[ne]);
    const A = new le();
    A.setAttribute("position", new Ce(new Float32Array(D), 3));
    const Z = [];
    for (const ne of [N, O]) for (let ie = 0; ie < ne.length; ie++) {
      const ue = (ie + 1) % ne.length;
      Z.push(...ne[ie], ...ne[ue]);
    }
    const ae = new le();
    return ae.setAttribute("position", new Ce(new Float32Array(Z), 3)), { fill: A, outline: ae };
  }
  function G(F, Y, z, P) {
    const T = F / 2, I = Y / 2, L = P / 2, D = [[0, -L, -I], [0, L, -I], [0, L, I - z], [0, T, I - z], [0, T, I], [0, -T, I], [0, -T, I - z], [0, -L, I - z]], N = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], O = [];
    for (const ae of N) O.push(...D[ae]);
    const q = new le();
    q.setAttribute("position", new Ce(new Float32Array(O), 3));
    const A = [];
    for (let ae = 0; ae < D.length; ae++) {
      const ne = (ae + 1) % D.length;
      A.push(...D[ae], ...D[ne]);
    }
    const Z = new le();
    return Z.setAttribute("position", new Ce(new Float32Array(A), 3)), { fill: q, outline: Z };
  }
  function pe(F, Y, z = 24) {
    const P = F / 2, T = P - Y, I = [];
    for (let O = 0; O < z; O++) {
      const q = O / z * Math.PI * 2, A = (O + 1) / z * Math.PI * 2, Z = Math.cos(q), ae = Math.sin(q), ne = Math.cos(A), ie = Math.sin(A);
      I.push(0, P * Z, P * ae, 0, P * ne, P * ie, 0, T * ne, T * ie), I.push(0, P * Z, P * ae, 0, T * ne, T * ie, 0, T * Z, T * ae);
    }
    const L = new le();
    L.setAttribute("position", new Ce(new Float32Array(I), 3));
    const D = [];
    for (let O = 0; O < z; O++) {
      const q = O / z * Math.PI * 2, A = (O + 1) / z * Math.PI * 2;
      D.push(0, P * Math.cos(q), P * Math.sin(q), 0, P * Math.cos(A), P * Math.sin(A)), D.push(0, T * Math.cos(q), T * Math.sin(q), 0, T * Math.cos(A), T * Math.sin(A));
    }
    const N = new le();
    return N.setAttribute("position", new Ce(new Float32Array(D), 3)), { fill: L, outline: N };
  }
  const M = new Re({ color: 52479, transparent: true, opacity: 0.35, side: tt, depthWrite: false }), oe = new $e({ color: 52479 }), se = new Re({ color: 16750848, transparent: true, opacity: 0.4, side: tt, depthWrite: false }), fe = new $e({ color: 16750848 });
  function W(F, Y) {
    const z = Math.abs(Y[0] - F[0]), P = Math.abs(Y[1] - F[1]), T = Math.abs(Y[2] - F[2]);
    return T > z && T > P || P > z && P > T;
  }
  return B.derive(() => {
    var _a, _b;
    s.deformedShape.val, s.secColumns.val, s.secBeams.val, s.secFloor.val;
    const F = s.secColumns.rawVal, Y = s.secBeams.rawVal;
    if (!F && !Y) {
      c.children.forEach((L) => {
        L instanceof Ze && L.dispose();
      }), c.clear();
      return;
    }
    c.children.forEach((L) => {
      L instanceof Ze && L.dispose();
    }), c.clear();
    const z = (_a = e.elements) == null ? void 0 : _a.val, P = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!z || !P) return;
    const T = P.sectionShapes, I = s.secFloor.rawVal;
    z.forEach((L, D) => {
      if (L.length !== 2) return;
      const N = y.rawVal[L[0]], O = y.rawVal[L[1]];
      if (!N || !O) return;
      const q = W(N, O);
      if (q && !F || !q && !Y) return;
      if (I >= 0) {
        const ie = Math.min(N[1], O[1]);
        Math.max(N[1], O[1]);
        const ue = s.gridSize.rawVal || 3;
        if (Math.floor(ie / ue + 0.01) !== I) return;
      }
      const A = T == null ? void 0 : T.get(D);
      if (!A) return;
      const Z = [(N[0] + O[0]) / 2, (N[1] + O[1]) / 2, (N[2] + O[2]) / 2], ae = hn(N, O);
      if (A.type === "CFT") {
        const ie = V(A.b, A.h, A.tw ?? A.b * 0.05), ue = new Le(ie.concFill, M);
        ue.position.set(...Z), ue.rotation.setFromRotationMatrix(ae), c.add(ue);
        const me = new Le(ie.steelFillGeom, se);
        me.position.set(...Z), me.rotation.setFromRotationMatrix(ae), c.add(me);
        const he = new Ue(ie.outline, fe);
        he.position.set(...Z), he.rotation.setFromRotationMatrix(ae), c.add(he);
      } else {
        let ie, ue, me;
        switch (A.type) {
          case "rect":
            ie = S(A.b, A.h), ue = M, me = oe;
            break;
          case "circ":
            ie = b(A.d), ue = M, me = oe;
            break;
          case "I":
            ie = m(A.b, A.h, A.tf, A.tw), ue = se, me = fe;
            break;
          case "HSS":
            ie = k(A.b, A.h, A.tw ?? A.b * 0.05), ue = se, me = fe;
            break;
          case "CFT":
            ie = V(A.b, A.h, A.tw ?? A.b * 0.05), ue = se, me = fe;
            break;
          case "L":
            ie = C(A.b ?? A.h, A.h, A.t ?? A.tw ?? 3e-3), ue = se, me = fe;
            break;
          case "2L":
            ie = _(A.b ?? A.h, A.h, A.t ?? A.tw ?? 3e-3, A.dis ?? 0.01), ue = se, me = fe;
            break;
          case "C":
          case "coldC":
            ie = H(A.b, A.h, A.tf ?? A.t ?? 3e-3, A.tw ?? A.t ?? 3e-3), ue = se, me = fe;
            break;
          case "2C":
            ie = j(A.b, A.h, A.tf ?? 5e-3, A.tw ?? 5e-3, A.dis ?? 0.01), ue = se, me = fe;
            break;
          case "T":
            ie = G(A.b, A.h, A.tf ?? 0.01, A.tw ?? 6e-3), ue = se, me = fe;
            break;
          case "pipe":
            ie = pe(A.d, A.tw ?? A.d * 0.05), ue = se, me = fe;
            break;
          default:
            return;
        }
        const he = new Le(ie.fill, ue);
        he.position.set(...Z), he.rotation.setFromRotationMatrix(ae), c.add(he);
        const ye = new Ue(ie.outline, me);
        ye.position.set(...Z), ye.rotation.setFromRotationMatrix(ae), c.add(ye);
      }
      const ne = Eo(A);
      if (ne) {
        const ue = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(A.type) ? "#ff9900" : "#00ccff", me = new Ze(ne, ue, "transparent");
        me.position.set(Z[0], Z[1], Z[2]);
        const he = 0.05 * s.gridSize.rawVal * 0.5;
        me.updateScale(he * ((u == null ? void 0 : u.rawVal) ?? 1)), c.add(me);
      }
    });
  }), u && B.derive(() => {
    if (u.val, !s.sections.rawVal) return;
    const F = 0.05 * s.gridSize.val * 0.5;
    c.children.forEach((Y) => {
      Y instanceof Ze && Y.updateScale(F * u.rawVal);
    });
  }), B.derive(() => {
    c.visible = s.sections.val;
  }), c;
}
class Zt extends ze {
  constructor(s, y, u, c, S, b, m) {
    super();
    const k = new Wt().moveTo(0, 0).lineTo(0, b[1]).lineTo(u, b[1]).lineTo(u, 0).lineTo(0, 0), V = k.getPoints(), C = new le().setFromPoints(V);
    this.lines = new Ue(C, new $e({ color: pt().resultOutline })), this.lines.position.set(...s), this.lines.rotation.setFromRotationMatrix(c), m && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const _ = new Ut(k), H = new Re({ color: b[1] > 0 ? 24435 : 11411474, side: tt });
    this.mesh = new Le(_, H), this.mesh.position.set(...s), this.mesh.rotation.setFromRotationMatrix(c), m && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new Ze(`${S[1].toFixed(4)}`), this.normalizedResult = b, this.textPosition = Et([s, y]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(c), this.add(this.text);
  }
  updateScale(s) {
    this.lines.scale.set(1, s * 2, 1), this.mesh.scale.set(1, s * 2, 1), this.text.updateScale(s * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * s);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Yn extends ze {
  constructor(s, y, u, c, S, b, m) {
    super();
    const k = S[0] * u / (S[0] + S[1]), V = S[0] * S[1] > 0;
    if (this.text = new Ze(`${S[0].toFixed(4)}`), this.text2 = new Ze(`${(S[1] * -1).toFixed(4)}`), this.normalizedResult = b, this.textPosition = pn(s, y), this.text2Position = pn(y, s), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(c), this.text2.rotation.setFromRotationMatrix(c), this.add(this.text, this.text2), V) {
      const C = new Wt().moveTo(0, 0).lineTo(0, b[0]).lineTo(k, 0).lineTo(0, 0), _ = new Wt().moveTo(k, 0).lineTo(u, -b[1]).lineTo(u, 0).lineTo(k, 0), H = C.getPoints(), j = _.getPoints(), G = new le().setFromPoints(H), pe = new le().setFromPoints(j), M = new $e({ color: pt().resultOutline });
      this.lines = new Ue(G, M), this.lines2 = new Ue(pe, M), this.lines.position.set(...s), this.lines2.position.set(...s), this.lines.rotation.setFromRotationMatrix(c), this.lines2.rotation.setFromRotationMatrix(c), m && this.lines.rotateX(Math.PI / 2), m && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const oe = new Ut(C), se = new Ut(_), fe = new Re({ color: b[0] > 0 ? 24435 : 11411474, side: tt }), W = new Re({ color: -b[1] > 0 ? 24435 : 11411474, side: tt });
      this.mesh = new Le(oe, fe), this.mesh2 = new Le(se, W), this.mesh.position.set(...s), this.mesh2.position.set(...s), this.mesh.rotation.setFromRotationMatrix(c), this.mesh2.rotation.setFromRotationMatrix(c), m && this.mesh.rotateX(Math.PI / 2), m && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const C = new Wt().moveTo(0, 0).lineTo(0, b[0]).lineTo(u, -b[1]).lineTo(u, 0).lineTo(0, 0), _ = C.getPoints(), H = new le().setFromPoints(_);
      this.lines = new Ue(H, new $e({ color: pt().resultOutline })), this.lines.position.set(...s), this.lines.rotation.setFromRotationMatrix(c), m && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const j = new Ut(C), G = new Re({ color: b[0] > 0 ? 24435 : 11411474, side: tt });
      this.mesh = new Le(j, G), this.mesh.position.set(...s), this.mesh.rotation.setFromRotationMatrix(c), m && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var Kn = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(Kn || {});
function Io(e, s, y, u) {
  const c = new ze(), S = { normals: Zt, shearsY: Zt, shearsZ: Zt, torsions: Zt, bendingsY: Yn, bendingsZ: Yn };
  return B.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, y.val, s.frameResults.val == "none") return;
    c.children.forEach((m) => m.dispose()), c.clear();
    const b = Kn[s.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[b]) == null ? void 0 : _b.forEach((m, k) => {
      var _a2, _b2;
      const V = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[k]) ?? [0, 1], C = y.rawVal[V[0]], _ = y.rawVal[V[1]], H = new g(..._).distanceTo(new g(...C)), j = Bo((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[b]), G = m == null ? void 0 : m.map((se) => se / (j === 0 ? 1 : j)), pe = hn(C, _), M = new S[b](C, _, H, pe, m ?? [0, 0], G ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(b)), oe = 0.05 * s.gridSize.rawVal;
      M.updateScale(oe * u.rawVal), c.add(M);
    });
  }), B.derive(() => {
    if (u.val, s.frameResults.rawVal == "none") return;
    const b = 0.05 * s.gridSize.val;
    c.children.forEach((m) => m.updateScale(b * u.rawVal));
  }), B.derive(() => {
    c.visible = s.frameResults.val != "none";
  }), c;
}
function Bo(e) {
  let s = 0;
  return e == null ? void 0 : e.forEach((y) => {
    const u = Math.max(...y ?? [0, 0]);
    u > s && (s = u);
  }), s;
}
class Xo extends ze {
  constructor(s, y, u) {
    super();
    const c = y === fn.reactions;
    u[0] && (this.xText1 = new Ze(`${c ? "Fx" : "Dx"}: ` + u[0].toFixed(4))), u[3] && (this.xText2 = new Ze(`${c ? "Mx" : "Rx"}: ` + u[3].toFixed(4))), u[1] && (this.yText1 = new Ze(`${c ? "Fy" : "Dy"}: ` + u[1].toFixed(4))), u[4] && (this.yText2 = new Ze(`${c ? "My" : "Ry"}: ` + u[4].toFixed(4))), u[2] && (this.zText1 = new Ze(`${c ? "Fz" : "Dz"}: ` + u[2].toFixed(4))), u[5] && (this.zText2 = new Ze(`${c ? "Mz" : "Rz"}: ` + u[5].toFixed(4))), (u[0] || u[3]) && (this.xArrow = new wt(new g(1, 0, 0), new g(0, 0, 0), 1, 15637248, 0.3, 0.3)), (u[1] || u[4]) && (this.yArrow = new wt(new g(0, 1, 0), new g(0, 0, 0), 1, 15637248, 0.3, 0.3)), (u[2] || u[5]) && (this.zArrow = new wt(new g(0, 0, 1), new g(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...s), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
var fn = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(fn || {});
function Yo(e, s, y, u) {
  const c = new ze();
  return B.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, s.nodeResults.val == "none") return;
    c.children.forEach((m) => m.dispose()), c.clear();
    const S = fn[s.nodeResults.rawVal], b = 0.05 * s.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[S]) == null ? void 0 : _b.forEach((m, k) => {
      const V = new Xo(y.rawVal[k], S, m ?? [0, 0, 0, 0, 0, 0]);
      V.updateScale(b * u.rawVal), c.add(V);
    });
  }), B.derive(() => {
    if (u.val, s.nodeResults.rawVal == "none") return;
    const S = 0.05 * s.gridSize.val;
    c.children.forEach((b) => b.updateScale(S * u.rawVal));
  }), B.derive(() => {
    c.visible = s.nodeResults.val != "none";
  }), c;
}
function $o({ drawingObj: e, gridObj: s, scene: y, getActiveCamera: u, controls: c, gridSize: S, derivedDisplayScale: b, rendererElm: m, viewerRender: k }) {
  const V = new lo(), C = new ro(), _ = (n) => {
    const o = m.getBoundingClientRect(), a = n.clientX - o.left, t = n.clientY - o.top, h = o.width || 1, d = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const i = h / 2;
      if (a >= i) return C.x = (a - i) / i * 2 - 1, C.y = -(t / d) * 2 + 1, window.__hekatanSplitCamera ?? u();
      C.x = a / i * 2 - 1;
    } else C.x = a / h * 2 - 1;
    return C.y = -(t / d) * 2 + 1, u();
  }, H = new Le(new $t(1e4, 1e4), new Re({ side: tt, transparent: true, opacity: 0, depthWrite: false }));
  H.visible = true, H.frustumCulled = false, y.add(H);
  const j = (n, o, a) => {
    const t = new Le(new $t(1e4, 1e4), new Re({ side: tt, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, a), t.visible = false, t.frustumCulled = false, y.add(t), t;
  }, G = j(Math.PI / 2, 0, 0), pe = j(0, Math.PI / 2, 0), M = () => {
    if (G.visible = !!window.__hekatanGridPlaneXZ, pe.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanShowOrthoPlanes !== false && J.visible) {
      const a = V.intersectObjects([J, ee, te], false);
      if (a.length > 0) return a;
    }
    const o = [H];
    return G.visible && o.push(G), pe.visible && o.push(pe), lt.visible && gt.length > 0 && o.push(...gt), V.intersectObjects(o, false);
  }, oe = new Nt(new le(), new Kt()), se = new Nt(new le(), new Kt({ color: "gray", sizeAttenuation: false, size: 6 })), fe = new Nt(new le(), new Kt({ color: "orange", size: 0.1 }));
  y.add(fe);
  const W = document.createElement("input");
  W.id = "hk-rubber-label", W.type = "text", W.spellcheck = false, W.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, W.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none"].join(";") + ";", document.body.appendChild(W);
  let F = null, Y = null, z = false;
  const P = new g(), T = (n, o, a, t, h, d) => {
    const v = t - n, i = h - o, l = d - a, p = Math.hypot(v, i, l);
    if (p < 0.01) {
      W.style.display = "none";
      return;
    }
    F = [n, o, a], Y = [v / p, i / p, l / p], P.set((n + t) / 2, (o + h) / 2, (a + d) / 2), P.project(u());
    const w = m.getBoundingClientRect(), r = w.left + (P.x * 0.5 + 0.5) * w.width, f = w.top + (-P.y * 0.5 + 0.5) * w.height;
    if (W.style.left = r + "px", W.style.top = f + "px", W.style.display = "block", !z) {
      if (W.value = `${p.toFixed(2)} m`, document.activeElement !== W) {
        const x = document.activeElement;
        x && (x.tagName === "INPUT" || x.tagName === "TEXTAREA") && x !== W || W.focus({ preventScroll: true });
      }
      try {
        W.select();
      } catch {
      }
    }
  }, I = () => {
    W.style.display = "none", F = null, Y = null, z = false, document.activeElement === W && W.blur();
  }, L = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      Ne = n, re(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), W.blur();
      return;
    }
    if (!F || !Y || !e.polylines) return;
    let a = Y[0], t = Y[1], h = Y[2];
    be === "x" ? (a = Math.sign(a) || 1, t = 0, h = 0) : be === "y" ? (a = 0, t = Math.sign(t) || 1, h = 0) : be === "z" && (a = 0, t = 0, h = Math.sign(h) || 1);
    const d = F[0] + a * n, v = F[1] + t * n, i = F[2] + h * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [d, v, i]];
    const l = e.polylines.rawVal, p = l.length ? l[l.length - 1] : [];
    e.polylines.val = [...l.slice(0, -1), [...p, e.points.rawVal.length - 1]], W.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    k();
  }, D = (n) => {
    let o = n.trim().toLowerCase().replace(/m$/g, "").trim();
    if (!o) return null;
    const a = o.startsWith("@");
    if (a && (o = o.slice(1)), o.includes("<")) {
      const h = o.split("<").map((d) => parseFloat(d.trim()));
      if (h.some(isNaN)) return null;
      if (h.length === 2) {
        const [d, v] = h;
        return a ? { kind: "relPolar", L: d, ang: v } : { kind: "absPolar", L: d, ang: v };
      }
      if (h.length === 3 && a) {
        const [d, v, i] = h;
        return { kind: "relSpherical", L: d, az: v, el: i };
      }
      return null;
    }
    if (o.includes(",")) {
      const h = o.split(",").map((l) => parseFloat(l.trim()));
      if (h.some(isNaN)) return null;
      const [d, v, i = 0] = h;
      return a ? { kind: "relCart", dx: d, dy: v, dz: i } : { kind: "absCart", x: d, y: v, z: i };
    }
    const t = parseFloat(o);
    return isNaN(t) || t <= 0 ? null : { kind: "length", L: t };
  }, N = (n) => {
    if (!n) return null;
    if (n.kind === "absCart") return [n.x, n.y, n.z];
    if (n.kind === "relCart") return F ? [F[0] + n.dx, F[1] + n.dy, F[2] + n.dz] : null;
    if (n.kind === "absPolar") {
      const o = n.ang * Math.PI / 180;
      return [n.L * Math.cos(o), n.L * Math.sin(o), 0];
    }
    if (n.kind === "relPolar") {
      if (!F) return null;
      const o = n.ang * Math.PI / 180;
      return [F[0] + n.L * Math.cos(o), F[1] + n.L * Math.sin(o), F[2]];
    }
    if (n.kind === "relSpherical") {
      if (!F) return null;
      const o = n.az * Math.PI / 180, a = n.el * Math.PI / 180, t = n.L * Math.cos(a);
      return [F[0] + t * Math.cos(o), F[1] + t * Math.sin(o), F[2] + n.L * Math.sin(a)];
    }
    return null;
  }, O = (n) => {
    var _a;
    if (!e.polylines) return;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, n];
    const o = e.polylines.rawVal, a = o.length ? o[o.length - 1] : [];
    e.polylines.val = [...o.slice(0, -1), [...a, e.points.rawVal.length - 1]], W.blur();
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    k();
  };
  W.addEventListener("keydown", (n) => {
    if (n.key === "Enter") {
      n.preventDefault();
      const a = D(W.value);
      if (!a) return;
      if (z = false, a.kind === "length") L(a.L), re(`\u270F DDE ${a.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = N(a);
        if (!t) return;
        O(t);
        const h = a.kind;
        re(`\u270F ${h} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
      }
      return;
    }
    if (n.key === "Escape") {
      n.preventDefault(), z = false, W.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!z && W.style.display === "block") try {
          W.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && (z = true);
  }), window.addEventListener("keydown", (n) => {
    if (!F || !Y || document.activeElement === W) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (W.value = n.key, W.focus(), W.setSelectionRange(1, 1), n.preventDefault());
  });
  const q = document.createElement("div");
  q.id = "hk-coord-readout", q.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", q.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(q);
  const A = document.createElement("div");
  A.id = "hk-coord-fixed", A.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", A.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(A);
  const Z = new Ue(new le().setFromPoints([new g(0, 0, 0), new g(0, 0, 0)]), new Vt({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  Z.frustumCulled = false, Z.visible = false, y.add(Z);
  const ae = new ze();
  ae.frustumCulled = false, ae.visible = false, y.add(ae);
  const ne = (n) => {
    const o = new le().setFromPoints([new g(0, 0, 0), new g(0, 0, 0)]), a = new Vt({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new Ue(o, a);
  }, ie = ne(16711680), ue = ne(65280), me = ne(35071);
  ae.add(ie, ue, me);
  const he = (n) => {
    const o = new le().setFromPoints([new g(0, 0, 0), new g(0, 0, 0), new g(0, 0, 0), new g(0, 0, 0)]), a = new $e({ color: n, transparent: true, opacity: 0.45, depthTest: false }), t = new Dn(o, a);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, ye = he(3462041), Se = he(16724804), Be = he(6333946), Te = new ze();
  Te.frustumCulled = false, Te.visible = false, y.add(Te), Te.add(ye, Se, Be);
  const R = (n) => {
    const o = new $t(1, 1), a = new Re({ color: n, transparent: true, opacity: 0.06, side: tt, depthWrite: false }), t = new Le(o, a);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, J = R(3462041), ee = R(16724804), te = R(6333946);
  Te.add(J, ee, te);
  const we = (n, o, a, t) => {
    n.scale.set(2 * t, 2 * t, 1), a === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : a === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, xe = document.createElement("div");
  xe.id = "hk-refplane-badge", xe.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(xe), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, Te.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], h = e.points.rawVal ?? [], d = o && o.length === 3 ? o : t.length > 0 && h[t[t.length - 1]] ? h[t[t.length - 1]] : [0, 0, 0], v = window.__hekatanOrthoExt ?? 8;
      ke(ye, d, "xy", v), ke(Se, d, "xz", v), ke(Be, d, "yz", v), we(J, d, "xy", v), we(ee, d, "xz", v), we(te, d, "yz", v), J.material.opacity = 0.1, ee.material.opacity = 0.1, te.material.opacity = 0.1;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    k();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !Te.visible) {
      k();
      return;
    }
    const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], h = e.points.rawVal ?? [], d = o && o.length === 3 ? o : t.length > 0 && h[t[t.length - 1]] ? h[t[t.length - 1]] : [0, 0, 0];
    ke(ye, d, "xy", n), ke(Se, d, "xz", n), ke(Be, d, "yz", n), we(J, d, "xy", n), we(ee, d, "xz", n), we(te, d, "yz", n), k();
  };
  const Ee = (n) => {
    if (J.material.opacity = n === "xy" ? 0.22 : 0.04, ee.material.opacity = n === "xz" ? 0.22 : 0.04, te.material.opacity = n === "yz" ? 0.22 : 0.04, n) {
      const h = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      xe.style.background = h.bg, xe.style.color = h.text, xe.textContent = `\u25A6 Plano ${n.toUpperCase()}`, xe.style.display = "block";
    } else xe.style.display = "none";
  }, ke = (n, o, a, t) => {
    let h;
    a === "xy" ? h = [new g(o[0] - t, o[1] - t, o[2]), new g(o[0] + t, o[1] - t, o[2]), new g(o[0] + t, o[1] + t, o[2]), new g(o[0] - t, o[1] + t, o[2]), new g(o[0] - t, o[1] - t, o[2])] : a === "xz" ? h = [new g(o[0] - t, o[1], o[2] - t), new g(o[0] + t, o[1], o[2] - t), new g(o[0] + t, o[1], o[2] + t), new g(o[0] - t, o[1], o[2] + t), new g(o[0] - t, o[1], o[2] - t)] : h = [new g(o[0], o[1] - t, o[2] - t), new g(o[0], o[1] + t, o[2] - t), new g(o[0], o[1] + t, o[2] + t), new g(o[0], o[1] - t, o[2] + t), new g(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(h);
  };
  let be = null;
  window.__hekatanAxisLock = () => be;
  const Fe = document.createElement("div");
  Fe.id = "hk-axis-lock-badge", Fe.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "padding:4px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(20px,18px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(Fe);
  const Lt = () => {
    if (!be) {
      Fe.style.display = "none";
      return;
    }
    const n = { x: "#ff3344", y: "#34d399", z: "#60a5fa" };
    Fe.style.background = "rgba(15,23,42,0.92)", Fe.style.color = n[be], Fe.style.border = `1.5px solid ${n[be]}`, Fe.textContent = `\u{1F512} LOCK ${be.toUpperCase()}`, Fe.style.display = "block";
  };
  window.addEventListener("keydown", (n) => {
    var _a;
    const o = document.activeElement;
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== W) return;
    const a = n.key.toLowerCase();
    if (a === "x" || a === "y" || a === "z") be = be === a ? null : a, Lt(), n.preventDefault();
    else if (n.key === "Escape") {
      const t = document.activeElement;
      t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA") && t.blur(), Pn(), n.preventDefault();
    } else if (n.key === "F8") {
      n.preventDefault(), window.__hekatanOrthoMode = !window.__hekatanOrthoMode;
      const t = window.__hekatanOrthoMode;
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
      let h = document.getElementById("hk-ortho-frame");
      h || (h = document.createElement("div"), h.id = "hk-ortho-frame", h.style.cssText = ["position:fixed", "inset:0", "z-index:99996", "border:3px solid rgba(34,211,238,0.85)", "box-shadow:inset 0 0 24px rgba(34,211,238,0.35)", "pointer-events:none"].join(";") + ";", document.body.appendChild(h)), h.style.display = t ? "block" : "none";
      let d = document.getElementById("hk-ortho-badge");
      d || (d = document.createElement("div"), d.id = "hk-ortho-badge", d.style.cssText = ["position:fixed", "top:10px", "left:50%", "transform:translateX(-50%)", "z-index:99998", "padding:6px 16px", "background:rgba(34,211,238,0.95)", "color:#0a1f24", "border-radius:6px", "border:2px solid rgba(8,145,178,1)", "box-shadow:0 4px 16px rgba(34,211,238,0.5)", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "pointer-events:none", "white-space:nowrap"].join(";") + ";", d.textContent = "\u22A5 ORTO ON (F8)", document.body.appendChild(d)), d.style.display = t ? "block" : "none";
    }
  });
  const xt = new g(), ut = new g(), wn = new g(), Un = (n) => {
    if (!be) return null;
    const o = n[0], a = n[1], t = n[2];
    return be === "x" ? (xt.set(o - 1e4, a, t), ut.set(o + 1e4, a, t)) : be === "y" ? (xt.set(o, a - 1e4, t), ut.set(o, a + 1e4, t)) : (xt.set(o, a, t - 1e4), ut.set(o, a, t + 1e4)), V.ray.distanceSqToSegment(xt, ut, null, wn), wn;
  };
  window.__hekatanProjectOnAxis = Un;
  const Ge = new Ue(new le().setFromPoints([new g(0, 0, 0), new g(0, 0, 0)]), new $e({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  Ge.renderOrder = 998, Ge.frustumCulled = false, Ge.visible = false, y.add(Ge);
  let ct = -1, yt = -1, dt = -1;
  const Pe = /* @__PURE__ */ new Set();
  window.__hekatanSelection = Pe;
  const st = new Ue(new le().setFromPoints([new g(), new g()]), new $e({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  st.renderOrder = 997, st.frustumCulled = false, st.visible = false, y.add(st);
  const Qe = new Le(new At(0.02, 12, 12), new Re({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  Qe.renderOrder = 998, Qe.visible = false, y.add(Qe);
  const Gn = () => {
    if (!Qe.visible) return;
    const o = u().position.distanceTo(Qe.position), a = Math.max(0.05, o / 10);
    Qe.scale.setScalar(a);
  }, at = new ze();
  at.frustumCulled = false, y.add(at);
  const It = 2282478;
  let it = null;
  const Hn = (n, o, a, t) => {
    if (!e.points) return -1;
    const h = e.points.rawVal;
    let d = -1, v = t;
    for (let i = 0; i < h.length; i++) {
      const l = h[i];
      if (!l) continue;
      const p = Math.hypot(n - l[0], o - l[1], a - l[2]);
      p < v && (v = p, d = i);
    }
    return d;
  }, ht = () => {
    var _a, _b, _c, _d, _e2, _f, _g;
    for (; at.children.length; ) {
      const v = at.children.pop();
      (_b = (_a = v.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = v.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const v of Pe) {
      const [i, ...l] = v.split(":");
      if (i === "pt") {
        const p = n[+l[0]];
        if (!p) continue;
        const w = new Le(new At(0.025, 12, 12), new Re({ color: It, transparent: true, opacity: 0.9, depthTest: false }));
        w.position.set(p[0], p[1], p[2]), w.renderOrder = 999, w.__isSelectionPt = true, at.add(w);
      } else if (i === "seg") {
        const p = o[+l[0]], w = n[p == null ? void 0 : p[+l[1]]], r = n[p == null ? void 0 : p[+l[1] + 1]];
        if (!w || !r) continue;
        const f = new le().setFromPoints([new g(w[0], w[1], w[2]), new g(r[0], r[1], r[2])]), x = new Ue(f, new $e({ color: It, transparent: true, opacity: 0.95, depthTest: false }));
        x.renderOrder = 999, at.add(x);
      } else if (i === "poly") {
        const w = o[+l[0]].map((x) => {
          const $ = n[x];
          return $ ? new g($[0], $[1], $[2]) : null;
        }).filter(Boolean);
        if (w.length < 2) continue;
        const r = new le().setFromPoints(w), f = new Ue(r, new $e({ color: It, transparent: true, opacity: 0.95, depthTest: false }));
        f.renderOrder = 999, at.add(f);
      } else if (i === "aux") {
        const p = t[+l[0]];
        if (!p || p.length !== 6) continue;
        const w = new le().setFromPoints([new g(p[0], p[1], p[2]), new g(p[3], p[4], p[5])]), r = new Ue(w, new $e({ color: It, transparent: true, opacity: 0.95, depthTest: false }));
        r.renderOrder = 999, at.add(r);
      }
    }
    const h = window.__hekatanUpdateSelectionPtScale;
    h && h();
    const d = window.__hekatanRefreshPropsPane;
    d && d(), k();
  };
  window.__hekatanRefreshSelection = ht, window.__hekatanClearSelection = () => {
    Pe.clear(), ht();
  };
  const Ht = (n, o, a, t, h, d, v, i, l) => {
    const p = v - t, w = i - h, r = l - d, f = p * p + w * w + r * r;
    if (f < 1e-12) return Math.hypot(n - t, o - h, a - d);
    let x = ((n - t) * p + (o - h) * w + (a - d) * r) / f;
    x = Math.max(0, Math.min(1, x));
    const $ = t + x * p, K = h + x * w, U = d + x * r;
    return Math.hypot(n - $, o - K, a - U);
  }, qt = (n, o, a, t) => {
    if (!e.polylines) return null;
    const h = e.polylines.rawVal, d = e.points.rawVal;
    let v = -1, i = -1, l = t;
    for (let p = 0; p < h.length; p++) {
      const w = h[p];
      for (let r = 0; r < w.length - 1; r++) {
        const f = d[w[r]], x = d[w[r + 1]];
        if (!f || !x) continue;
        const $ = Ht(n, o, a, f[0], f[1], f[2], x[0], x[1], x[2]);
        $ < l && (l = $, v = p, i = r);
      }
    }
    return v >= 0 ? { polyIdx: v, segIdx: i, dist: l } : null;
  }, xn = (n, o, a, t) => {
    const h = window.__hekatanDrawingAuxLines, d = (h == null ? void 0 : h.rawVal) ?? (h == null ? void 0 : h.val) ?? h ?? [];
    let v = -1, i = t;
    for (let l = 0; l < d.length; l++) {
      const p = d[l];
      if (!p || p.length !== 6) continue;
      const w = Ht(n, o, a, p[0], p[1], p[2], p[3], p[4], p[5]);
      w < i && (i = w, v = l);
    }
    return v;
  }, qn = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      Ge.visible = false;
      return;
    }
    Ge.geometry.setFromPoints([new g(t[0], t[1], t[2]), new g(t[3], t[4], t[5])]), Ge.visible = true;
  }, Jn = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const a = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!a || a.length < 2) {
      Ge.visible = false;
      return;
    }
    const h = ((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false, d = [];
    if (h || o < 0 || o >= a.length - 1) for (const v of a) {
      const i = t[v];
      i && d.push(new g(i[0], i[1], i[2]));
    }
    else {
      const v = t[a[o]], i = t[a[o + 1]];
      v && d.push(new g(v[0], v[1], v[2])), i && d.push(new g(i[0], i[1], i[2]));
    }
    Ge.geometry.setFromPoints(d), Ge.visible = true;
  }, Bt = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const a = o.filter((l, p) => p !== n), t = /* @__PURE__ */ new Set();
    for (const l of a) for (const p of l) t.add(p);
    const h = e.points.rawVal, d = /* @__PURE__ */ new Map(), v = [];
    for (let l = 0; l < h.length; l++) t.has(l) && (d.set(l, v.length), v.push(h[l]));
    const i = a.map((l) => l.map((p) => d.get(p)).filter((p) => p !== void 0));
    e.points.val = v, e.polylines.val = i, e.areas && (e.areas.val = e.areas.rawVal.filter((l) => l !== n).map((l) => l > n ? l - 1 : l)), Ge.visible = false, ct = -1, yt = -1;
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
  }, Qn = (n, o) => {
    var _a, _b, _c;
    if (!e.polylines) return;
    const a = e.polylines.rawVal;
    if (n < 0 || n >= a.length) return;
    if (((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false) {
      Bt(n);
      return;
    }
    const h = a[n];
    if (o < 0 || o >= h.length - 1) return;
    if (h.length === 2) {
      Bt(n);
      return;
    }
    let d;
    o === 0 ? d = [h.slice(1)] : o === h.length - 2 ? d = [h.slice(0, -1)] : d = [h.slice(0, o + 1), h.slice(o + 1)];
    const v = [...a.slice(0, n), ...d, ...a.slice(n + 1)], i = /* @__PURE__ */ new Set();
    for (const f of v) for (const x of f) i.add(x);
    const l = e.points.rawVal, p = /* @__PURE__ */ new Map(), w = [];
    for (let f = 0; f < l.length; f++) i.has(f) && (p.set(f, w.length), w.push(l[f]));
    const r = v.map((f) => f.map((x) => p.get(x)).filter((x) => x !== void 0));
    if (e.points.val = w, e.polylines.val = r, e.areas) {
      const f = d.length - 1;
      e.areas.val = e.areas.rawVal.map((x) => x > n ? x + f : x);
    }
    Ge.visible = false, ct = -1, yt = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  oe.geometry.setAttribute("position", new Je(e.points.rawVal.flat(), 3)), oe.geometry.computeBoundingSphere(), oe.frustumCulled = false, se.frustumCulled = false, y.add(se), H.position.set(0, 0, 0), H.rotateX(Math.PI / 2), H.geometry.rotateX(Math.PI / 2), H.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, a) => {
    if (e.points.val = [...e.points.rawVal, [n, o, a]], e.polylines) {
      const t = e.polylines.rawVal, h = t.length ? t[t.length - 1] : [];
      e.polylines.val = [...t.slice(0, -1), [...h, e.points.rawVal.length - 1]];
    }
  }, window.__hekatanDrawNewPoly = () => {
    var _a;
    if (!e.polylines) return;
    const n = e.polylines.rawVal;
    ((_a = n[n.length - 1]) == null ? void 0 : _a.length) !== 0 && (e.polylines.val = [...n, []]);
  }, window.__hekatanDrawCircle = (n, o, a, t, h = window.__hekatanArcSegs ?? 12, d = "xy") => {
    var _a;
    const v = Math.max(4, Math.round(h)), i = e.points.rawVal.length, l = [];
    for (let p = 0; p < v; p++) {
      const w = 2 * Math.PI * p / v, r = t * Math.cos(w), f = t * Math.sin(w);
      let x;
      d === "xy" ? x = [n + r, o + f, a] : d === "xz" ? x = [n + r, o, a + f] : x = [n, o + r, a + f], l.push(x);
    }
    if (e.points.val = [...e.points.rawVal, ...l], e.polylines) {
      const p = [...l.map((r, f) => i + f), i], w = e.polylines.rawVal;
      ((_a = w[w.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...w, p, []] : e.polylines.val = [...w.slice(0, -1), p, []];
    }
  }, window.__hekatanDrawArc = (n, o, a, t = window.__hekatanArcSegs ?? 12) => {
    const h = Math.max(4, Math.round(t)), d = new g(...n), v = new g(...o), i = new g(...a), l = new g().subVectors(v, d), p = new g().subVectors(i, d), w = new g().crossVectors(l, p).normalize(), r = new g().addVectors(d, v).multiplyScalar(0.5), f = new g().addVectors(v, i).multiplyScalar(0.5), x = new g().crossVectors(l, w).normalize(), $ = new g().crossVectors(new g().subVectors(i, v), w).normalize(), K = new g().subVectors(f, r), U = x.x * $.y - x.y * $.x;
    let E;
    if (Math.abs(U) > 1e-9) {
      const Me = (K.x * $.y - K.y * $.x) / U;
      E = new g().addVectors(r, x.clone().multiplyScalar(Me));
    } else E = r.clone();
    const Q = d.distanceTo(E), de = new g().subVectors(d, E), Ve = new g().subVectors(i, E), ce = Math.acos(Math.max(-1, Math.min(1, de.dot(Ve) / (Q * Q)))), ge = e.points.rawVal.length, Ye = [], We = w.clone();
    for (let Me = 0; Me <= h; Me++) {
      const Ae = Me / h, je = ce * Ae, et = new zn().setFromAxisAngle(We, je), qe = de.clone().applyQuaternion(et).add(E);
      Ye.push([qe.x, qe.y, qe.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...Ye], e.polylines) {
      const Me = Ye.map((je, et) => ge + et), Ae = e.polylines.rawVal;
      e.polylines.val = [...Ae.slice(0, -1), Me, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, a = 1, t = 6, h = 6) => {
    const d = Math.min(n[0], o[0]), v = Math.max(n[0], o[0]), i = Math.min(n[1], o[1]), l = Math.max(n[1], o[1]), p = (n[2] + o[2]) / 2, w = v - d, r = l - i, f = Math.min(a, w / 2 - 0.01, r / 2 - 0.01);
    if (f <= 0) return;
    const x = e.points.rawVal.length, $ = [], K = [], U = (E, Q) => {
      $.push([E, Q, p]), K.push(x + $.length - 1);
    };
    for (let E = 0; E <= h; E++) U(d + f + (w - 2 * f) * E / h, i);
    for (let E = 1; E <= t; E++) {
      const Q = -Math.PI / 2 + Math.PI / 2 * E / t;
      U(v - f + f * Math.cos(Q), i + f + f * Math.sin(Q));
    }
    for (let E = 1; E <= h; E++) U(v, i + f + (r - 2 * f) * E / h);
    for (let E = 1; E <= t; E++) {
      const Q = 0 + Math.PI / 2 * E / t;
      U(v - f + f * Math.cos(Q), l - f + f * Math.sin(Q));
    }
    for (let E = 1; E <= h; E++) U(v - f - (w - 2 * f) * E / h, l);
    for (let E = 1; E <= t; E++) {
      const Q = Math.PI / 2 + Math.PI / 2 * E / t;
      U(d + f + f * Math.cos(Q), l - f + f * Math.sin(Q));
    }
    for (let E = 1; E <= h; E++) U(d, l - f - (r - 2 * f) * E / h);
    for (let E = 1; E <= t; E++) {
      const Q = Math.PI + Math.PI / 2 * E / t;
      U(d + f + f * Math.cos(Q), i + f + f * Math.sin(Q));
    }
    if (K.push(x), e.points.val = [...e.points.rawVal, ...$], e.polylines) {
      const E = e.polylines.rawVal;
      e.polylines.val = [...E.slice(0, -1), K, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const a = e.points.rawVal.length, t = n[0], h = n[1], d = n[2], v = o[0], i = o[1], l = o[2];
    let p;
    if (Math.abs(d - l) < 1e-6 ? p = [[t, h, d], [v, h, d], [v, i, d], [t, i, d]] : Math.abs(h - i) < 1e-6 ? p = [[t, h, d], [v, h, d], [v, h, l], [t, h, l]] : p = [[t, h, d], [t, i, d], [t, i, l], [t, h, l]], e.points.val = [...e.points.rawVal, ...p], e.polylines) {
      const w = [a, a + 1, a + 2, a + 3, a], r = e.polylines.rawVal;
      e.polylines.val = [...r.slice(0, -1), w, []];
    }
  };
  const nt = new ze();
  nt.visible = false, y.add(nt), window.__hekatanShowAxes = (n, o, a = 12, t = 2) => {
    var _a, _b;
    for (; nt.children.length; ) {
      const w = nt.children.pop();
      (_a = w.geometry) == null ? void 0 : _a.dispose(), (_b = w.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const h = Math.min(...o) - t, d = Math.max(...o) + t, v = Math.min(...n) - t, i = Math.max(...n) + t, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", p = (w, r, f, x, $) => {
      const K = document.createElement("canvas");
      K.width = 64, K.height = 32;
      const U = K.getContext("2d");
      U.fillStyle = $, U.font = "bold 22px sans-serif", U.textAlign = "center", U.fillText(w, 32, 26);
      const E = new Fn(K), Q = new Vn({ map: E, transparent: true }), de = new An(Q);
      return de.position.set(r, f, x), de.scale.set(1.2, 0.6, 1), de;
    };
    n.forEach((w, r) => {
      const f = r < l.length ? l[r] : `X${r}`, x = new le().setFromPoints([new g(w, h, 0), new g(w, d, 0), new g(w, h, 0), new g(w, h, a)]), $ = new Vt({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), K = new St(x, $);
      K.computeLineDistances(), nt.add(K), nt.add(p(f, w, h - 0.5, 0, "#60a5fa")), nt.add(p(f, w, d + 0.5, 0, "#60a5fa"));
    }), o.forEach((w, r) => {
      const f = `${r + 1}`, x = new le().setFromPoints([new g(v, w, 0), new g(i, w, 0), new g(v, w, 0), new g(v, w, a)]), $ = new Vt({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), K = new St(x, $);
      K.computeLineDistances(), nt.add(K), nt.add(p(f, v - 0.5, w, 0, "#fb7185")), nt.add(p(f, i + 0.5, w, 0, "#fb7185"));
    }), nt.visible = true, k();
  }, window.__hekatanHideAxes = () => {
    nt.visible = false, k();
  };
  const lt = new ze();
  lt.visible = false, y.add(lt);
  let gt = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, a = 0, t = 0) => {
    var _a, _b;
    for (; lt.children.length; ) {
      const d = lt.children.pop();
      (_a = d.geometry) == null ? void 0 : _a.dispose(), (_b = d.material) == null ? void 0 : _b.dispose();
    }
    gt.forEach((d) => {
      y.remove(d), d.geometry.dispose(), d.material.dispose();
    }), gt = [];
    const h = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((d, v) => {
      const i = h[v % h.length], l = o / 2, p = [new g(a - l, t - l, d), new g(a + l, t - l, d), new g(a + l, t + l, d), new g(a - l, t + l, d), new g(a - l, t - l, d)], w = new le().setFromPoints(p), r = new $e({ color: i, transparent: true, opacity: 0.55 });
      lt.add(new Ue(w, r));
      const f = document.createElement("canvas");
      f.width = 128, f.height = 32;
      const x = f.getContext("2d");
      x.fillStyle = `#${i.toString(16).padStart(6, "0")}`, x.font = "bold 18px sans-serif", x.fillText(`Z = ${d} m`, 4, 22);
      const $ = new Fn(f), K = new Vn({ map: $, transparent: true }), U = new An(K);
      U.position.set(a - l - 1.5, t - l - 1.5, d), U.scale.set(2.5, 0.6, 1), lt.add(U);
      const E = new $t(1e4, 1e4), Q = new Re({ visible: false, side: tt }), de = new Le(E, Q);
      de.position.set(0, 0, d), de.frustumCulled = false, de.userData = { refPlaneZ: d }, y.add(de), gt.push(de);
    }), lt.visible = true, k();
  }, window.__hekatanHideRefPlanes = () => {
    lt.visible = false, gt.forEach((n) => {
      n.visible = false;
    }), k();
  };
  const kt = new ze();
  kt.frustumCulled = false, y.add(kt);
  const On = () => {
    var _a, _b, _c, _d;
    for (; kt.children.length; ) {
      const a = kt.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (a.length !== 6) continue;
      const t = new le().setFromPoints([new g(a[0], a[1], a[2]), new g(a[3], a[4], a[5])]), h = new Vt({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), d = new Ue(t, h);
      d.computeLineDistances(), kt.add(d);
    }
  };
  B.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, On(), k());
  });
  const vt = new ze();
  vt.frustumCulled = false, y.add(vt);
  const yn = () => {
    var _a, _b, _c, _d;
    for (; vt.children.length; ) {
      const a = vt.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxPoints, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (!a || a.length !== 3) continue;
      const t = new Le(new At(0.025, 12, 12), new Re({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(a[0], a[1], a[2]), t.renderOrder = 996;
      const d = u().position.distanceTo(t.position);
      t.scale.setScalar(Math.max(0.05, d / 10)), vt.add(t);
    }
  };
  B.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, yn(), k());
  }), c.addEventListener("change", () => {
    const n = u();
    vt.children.forEach((o) => {
      const a = n.position.distanceTo(o.position);
      o.scale.setScalar(Math.max(0.05, a / 10));
    });
  }), window.__hekatanRenderAuxPoints = yn;
  const Xe = new ze(), jn = new Le(new At(0.02, 12, 12), new Re({ color: 16724804, transparent: true, opacity: 0.95 })), eo = new Le(new At(0.04, 12, 12), new Re({ color: 16498468, transparent: true, opacity: 0.25, depthWrite: false }));
  Xe.add(jn, eo);
  const bt = 0.15, Jt = (n, o, a) => {
    const t = new le().setFromPoints([new g(...n), new g(...o)]);
    return new Ue(t, new $e({ color: a, transparent: true, opacity: 0.7 }));
  };
  Xe.add(Jt([-bt, 0, 0], [bt, 0, 0], 16711680)), Xe.add(Jt([0, -bt, 0], [0, bt, 0], 65280)), Xe.add(Jt([0, 0, -bt], [0, 0, bt], 35071)), Xe.visible = false, Xe.frustumCulled = false, y.add(Xe);
  const gn = 10, Qt = () => {
    if (!Xe.visible) return;
    const o = u().position.distanceTo(Xe.position), a = Math.max(0.05, o / gn);
    Xe.scale.setScalar(a);
  }, vn = () => {
    if (at.children.length === 0) return;
    const n = u();
    at.children.forEach((o) => {
      if (!o.__isSelectionPt) return;
      const a = n.position.distanceTo(o.position), t = Math.max(0.05, a / 10);
      o.scale.setScalar(t);
    });
  };
  window.__hekatanUpdateSelectionPtScale = vn, c.addEventListener("change", () => {
    if (Qt(), Qe.visible) {
      const o = u().position.distanceTo(Qe.position);
      Qe.scale.setScalar(Math.max(0.05, o / 10));
    }
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = u().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / gn));
    }
    vn();
  }), window.__hekatanShowSnap = (n, o, a) => {
    Xe.position.set(n, o, a), Xe.visible = true, Qt(), k();
  }, window.__hekatanHideSnap = () => {
    Xe.visible = false, k();
  }, m.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p;
    const o = _(n);
    if (!o) return;
    V.setFromCamera(C, o);
    const a = M();
    if (a.length) {
      const t = a[0].point, h = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, h);
      if (d) Sn(d.type, d.x, d.y, d.z), Xe.position.set(d.x, d.y, d.z), Xe.visible = true, t.set(d.x, d.y, d.z);
      else {
        en();
        const w = window.__hekatanSnapEnabled !== false, r = window.__hekatanSnap2D ?? 0.5;
        w && r > 0 && (t.x = Math.round(t.x / r) * r, t.y = Math.round(t.y / r) * r, t.z = Math.round(t.z / r) * r), Xe.position.copy(t), Xe.visible = true;
      }
      Qt();
      const v = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (v === "select" || !v) {
        const w = (window.__hekatanSnap2D ?? 0.5) * 1.5, r = Hn(t.x, t.y, t.z, w), f = qt(t.x, t.y, t.z, w), x = xn(t.x, t.y, t.z, w);
        if (r >= 0) {
          const E = e.points.rawVal[r];
          Qe.position.set(E[0], E[1], E[2]), Qe.visible = true, Gn(), st.visible = false, it = { kind: "pt", a: r };
        } else if (f) {
          const E = e.points.rawVal, Q = e.polylines.rawVal[f.polyIdx], de = E[Q[f.segIdx]], Ve = E[Q[f.segIdx + 1]];
          st.geometry.setFromPoints([new g(de[0], de[1], de[2]), new g(Ve[0], Ve[1], Ve[2])]), st.visible = true, Qe.visible = false, it = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(f.polyIdx)) ?? false ? { kind: "poly", a: f.polyIdx } : { kind: "seg", a: f.polyIdx, b: f.segIdx };
        } else if (x >= 0) {
          const Q = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[x];
          Q && (st.geometry.setFromPoints([new g(Q[0], Q[1], Q[2]), new g(Q[3], Q[4], Q[5])]), st.visible = true, Qe.visible = false, it = { kind: "aux", a: x });
        } else st.visible = false, Qe.visible = false, it = null;
        q.style.left = n.clientX + "px", q.style.top = n.clientY + "px", q.style.display = "block";
        let $ = t;
        if ((it == null ? void 0 : it.kind) === "pt") {
          const E = e.points.rawVal[it.a];
          E && ($ = new g(E[0], E[1], E[2]));
        }
        const K = `X=${$.x.toFixed(2)} Y=${$.y.toFixed(2)} Z=${$.z.toFixed(2)}`;
        if (it) {
          const E = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          q.textContent = `${K}  \xB7  \u{1F5B1} Click \u2192 ${E[it.kind]}`;
        } else q.textContent = K;
        const U = document.getElementById("hk-coord-fixed");
        U && (U.textContent = K), Z.visible = false, ae.visible = false, k();
        return;
      }
      if (v === "delete") {
        const w = (window.__hekatanSnap2D ?? 0.5) * 1.5, r = qt(t.x, t.y, t.z, w), f = xn(t.x, t.y, t.z, w);
        let x = false;
        if (f >= 0) if (!r) x = true;
        else {
          const E = window.__hekatanDrawingAuxLines, de = ((E == null ? void 0 : E.rawVal) ?? (E == null ? void 0 : E.val) ?? E ?? [])[f];
          Ht(t.x, t.y, t.z, de[0], de[1], de[2], de[3], de[4], de[5]) < r.dist && (x = true);
        }
        x ? (dt = f, ct = -1, yt = -1, qn(f)) : r ? (ct = r.polyIdx, yt = r.segIdx, dt = -1, Jn(r.polyIdx, r.segIdx)) : (ct = -1, yt = -1, dt = -1, Ge.visible = false), Z.visible = false, ae.visible = false, I(), q.style.left = n.clientX + "px", q.style.top = n.clientY + "px", q.style.display = "block";
        const $ = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let K = "";
        x ? K = `\u{1F5D1} l\xEDnea aux #${dt + 1}` : r ? K = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(r.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${r.polyIdx + 1}` : `\u{1F5D1} seg ${r.segIdx + 1} / poly #${r.polyIdx + 1}` : K = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", q.textContent = `${$}  \xB7  ${K}`;
        const U = document.getElementById("hk-coord-fixed");
        U && (U.textContent = $), k();
        return;
      } else Ge.visible = false, ct = -1, dt = -1;
      q.style.left = n.clientX + "px", q.style.top = n.clientY + "px", q.style.display = "block";
      const i = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], l = i[i.length - 1] ?? [], p = e.points.rawVal ?? [];
      if (l.length > 0 && p[l[l.length - 1]]) {
        const w = l[l.length - 1], r = p[w], f = !!window.__hekatanOrthoMode;
        let x = be;
        if (!x && f) {
          const Me = Math.abs(t.x - r[0]), Ae = Math.abs(t.y - r[1]), je = Math.abs(t.z - r[2]), et = (_k = a[0]) == null ? void 0 : _k.object;
          let qe = null;
          et === J ? qe = "xy" : et === ee ? qe = "xz" : et === te && (qe = "yz"), qe === "xy" ? x = Me >= Ae ? "x" : "y" : qe === "xz" ? x = Me >= je ? "x" : "z" : qe === "yz" ? x = Ae >= je ? "y" : "z" : x = Me >= Ae && Me >= je ? "x" : Ae >= je ? "y" : "z";
        }
        if (x) {
          const Me = r[0], Ae = r[1], je = r[2];
          x === "x" ? t.set(t.x, Ae, je) : x === "y" ? t.set(Me, t.y, je) : t.set(Me, Ae, t.z);
          const et = !!be, on = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[x];
          Fe.style.background = "rgba(15,23,42,0.92)", Fe.style.color = on, Fe.style.border = `1.5px solid ${on}`;
          const sn = (_l = a[0]) == null ? void 0 : _l.object;
          let Ft = null;
          sn === J ? Ft = "xy" : sn === ee ? Ft = "xz" : sn === te && (Ft = "yz");
          const Cn = Ft ? ` (plano ${Ft.toUpperCase()})` : "";
          Fe.textContent = et ? `\u{1F512} LOCK ${x.toUpperCase()}${Cn}` : `\u22A5 ORTO ${x.toUpperCase()}${Cn}`, Fe.style.left = n.clientX + 20 + "px", Fe.style.top = n.clientY + 18 + "px", Fe.style.transform = "none", Fe.style.display = "block";
        } else be || (Fe.style.display = "none");
        const $ = Math.hypot(t.x - r[0], t.y - r[1], t.z - r[2]), K = Math.atan2(t.y - r[1], t.x - r[0]) * 180 / Math.PI, U = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        q.textContent = `${U} | \u0394L=${$.toFixed(2)}m ${K.toFixed(0)}\xB0`;
        const E = document.getElementById("hk-coord-fixed");
        E && (E.textContent = U), Z.geometry.setFromPoints([new g(r[0], r[1], r[2]), new g(t.x, t.y, t.z)]), (_m = Z.computeLineDistances) == null ? void 0 : _m.call(Z), Z.visible = true, T(r[0], r[1], r[2], t.x, t.y, t.z);
        const Q = window.__hekatanOrthoExt ?? 8, de = window.__hekatanShowOrthoPlanes !== false;
        Te.visible = de, de || Ee(null), de && (ke(ye, r, "xy", Q), ke(Se, r, "xz", Q), ke(Be, r, "yz", Q), we(J, r, "xy", Q), we(ee, r, "xz", Q), we(te, r, "yz", Q));
        const Ve = de ? V.intersectObjects([J, ee, te], false) : [];
        let ce = null;
        if (Ve.length > 0) {
          const Me = Ve[0].object;
          Me === J ? ce = "xy" : Me === ee ? ce = "xz" : Me === te && (ce = "yz");
        }
        Ee(ce), ce && (xe.style.left = n.clientX + "px", xe.style.top = n.clientY + "px"), ie.geometry.setFromPoints([new g(r[0] - Q, r[1], r[2]), new g(r[0] + Q, r[1], r[2])]), (_n2 = ie.computeLineDistances) == null ? void 0 : _n2.call(ie), ue.geometry.setFromPoints([new g(r[0], r[1] - Q, r[2]), new g(r[0], r[1] + Q, r[2])]), (_o2 = ue.computeLineDistances) == null ? void 0 : _o2.call(ue), me.geometry.setFromPoints([new g(r[0], r[1], r[2] - Q), new g(r[0], r[1], r[2] + Q)]), (_p = me.computeLineDistances) == null ? void 0 : _p.call(me), ae.visible = true;
        const ge = ie.material, Ye = ue.material, We = me.material;
        x === "x" ? (ge.opacity = 0.95, Ye.opacity = 0.1, We.opacity = 0.1) : x === "y" ? (ge.opacity = 0.1, Ye.opacity = 0.95, We.opacity = 0.1) : x === "z" ? (ge.opacity = 0.1, Ye.opacity = 0.1, We.opacity = 0.95) : (ge.opacity = 0.5, Ye.opacity = 0.5, We.opacity = 0.5);
      } else {
        const w = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        q.textContent = w;
        const r = document.getElementById("hk-coord-fixed");
        if (r && (r.textContent = w), Z.visible = false, ae.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(v)) {
          if (F = null, Y = null, W.style.left = n.clientX + 20 + "px", W.style.top = n.clientY - 28 + "px", W.style.display = "block", !z) {
            W.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const x = document.activeElement;
            !(x && (x.tagName === "INPUT" || x.tagName === "TEXTAREA") && x !== W) && document.activeElement !== W && W.focus({ preventScroll: true });
            try {
              W.select();
            } catch {
            }
          }
        } else I();
      }
      k();
    } else en(), q.style.display = "none", Xe.visible = false, Z.visible = false, ae.visible = false, I(), k();
  }), B.derive(() => {
    e.gridTarget && (Ro(s, { position: new g(...e.gridTarget.val.position), quaternion: new zn().setFromEuler(new Tn(...e.gridTarget.val.rotation)) }, k), H.position.set(...e.gridTarget.val.position), H.quaternion.setFromEuler(new Tn(...e.gridTarget.val.rotation)), H.updateMatrixWorld());
  }), B.derive(() => {
    oe.geometry.setAttribute("position", new Je(e.points.val.flat(), 3)), oe.geometry.computeBoundingSphere();
  }), B.derive(() => {
    const n = 0.05 * S * 0.5 * b.val;
    V.params.Points.threshold = 0.4 * n;
  }), B.derive(() => {
    var _a;
    const n = e.points.val ?? [], a = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const d of a) {
      const [v, i, l] = n[d];
      t.push(v, i, l);
    }
    const h = new le();
    h.setAttribute("position", new Je(t, 3)), fe.geometry.dispose(), fe.geometry = h;
  });
  let Ot = false, ft = 0;
  m.addEventListener("pointerdown", () => {
    Ot = true;
  }), m.addEventListener("pointerup", () => {
    Ot = false;
  }), m.addEventListener("pointermove", () => {
    Ot && ft++;
  });
  const Ke = document.createElement("div");
  Ke.id = "hk-window-select", Ke.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(Ke);
  let ot = null, Pt = false, Oe = null;
  const jt = (n, o, a, t, h) => {
    h ? (Ke.style.borderColor = "#34d399", Ke.style.borderStyle = "dashed", Ke.style.background = "rgba(52, 211, 153, 0.10)") : (Ke.style.borderColor = "#22d3ee", Ke.style.borderStyle = "solid", Ke.style.background = "rgba(34, 211, 238, 0.10)"), Ke.style.left = Math.min(n, a) + "px", Ke.style.top = Math.min(o, t) + "px", Ke.style.width = Math.abs(a - n) + "px", Ke.style.height = Math.abs(t - o) + "px", Ke.style.display = "block";
  }, bn = (n, o, a, t, h) => {
    var _a, _b, _c, _d;
    const d = Math.min(n, a), v = Math.max(n, a), i = Math.min(o, t), l = Math.max(o, t), p = a < n, w = m.getBoundingClientRect(), r = u();
    r.updateMatrixWorld();
    const f = (ce) => {
      const ge = new g(ce[0], ce[1], ce[2]);
      return ge.project(r), { x: w.left + (ge.x * 0.5 + 0.5) * w.width, y: w.top + (-ge.y * 0.5 + 0.5) * w.height };
    }, x = (ce) => ce.x >= d && ce.x <= v && ce.y >= i && ce.y <= l, $ = (ce, ge) => !(ce.x < d && ge.x < d || ce.x > v && ge.x > v || ce.y < i && ge.y < i || ce.y > l && ge.y > l);
    h || Pe.clear();
    let K = 0;
    const U = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let ce = 0; ce < U.length; ce++) {
      const ge = U[ce];
      ge && x(f(ge)) && (Pe.add(`pt:${ce}`), K++);
    }
    const E = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], Q = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let ce = 0; ce < E.length; ce++) {
      const ge = E[ce], Ye = Q.includes(ce);
      let We = false;
      for (let Me = 0; Me < ge.length - 1; Me++) {
        const Ae = U[ge[Me]], je = U[ge[Me + 1]];
        if (!Ae || !je) continue;
        const et = f(Ae), qe = f(je);
        if (p ? x(et) || x(qe) || $(et, qe) : x(et) && x(qe)) {
          if (Ye) {
            We = true;
            break;
          }
          Pe.add(`seg:${ce}:${Me}`), K++;
        }
      }
      Ye && We && (Pe.add(`poly:${ce}`), K++);
    }
    const Ve = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let ce = 0; ce < Ve.length; ce++) {
      const ge = Ve[ce];
      if (!ge || ge.length !== 6) continue;
      const Ye = f([ge[0], ge[1], ge[2]]), We = f([ge[3], ge[4], ge[5]]);
      (p ? x(Ye) || x(We) || $(Ye, We) : x(Ye) && x(We)) && (Pe.add(`aux:${ce}`), K++);
    }
    ht(), re(`${p ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${K} item(s) ${h ? "agregados a" : "\u2192"} selecci\xF3n (total ${Pe.size})`), Ke.style.display = "none";
  }, Xt = () => {
    Oe && (Oe = null, Ke.style.display = "none", re("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = Xt, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && Oe && Xt();
  });
  const Mn = () => {
    var _a, _b, _c, _d;
    if (Pe.size === 0) return false;
    const n = [...Pe], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], a = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], h = window.__hekatanDrawingAuxLines, d = (h == null ? void 0 : h.rawVal) ?? [], v = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Set();
    for (const $ of n) {
      const [K, ...U] = $.split(":");
      if (K === "pt") v.add(+U[0]);
      else if (K === "poly") i.add(+U[0]);
      else if (K === "seg") {
        const E = +U[0], Q = +U[1];
        l.has(E) || l.set(E, /* @__PURE__ */ new Set()), l.get(E).add(Q);
      } else K === "aux" && p.add(+U[0]);
    }
    let w = 0, r = [], f = [];
    const x = /* @__PURE__ */ new Map();
    for (let $ = 0; $ < a.length; $++) {
      if (i.has($)) {
        w++;
        continue;
      }
      x.set($, r.length);
      const K = l.get($);
      if (K && K.size > 0) {
        let U = [];
        for (let E = 0; E < a[$].length; E++) U.push(a[$][E]), E < a[$].length - 1 && K.has(E) && (U.length >= 2 && r.push(U), U = [], w++);
        (U.length >= 2 || U.length === 1) && r.push(U);
      } else r.push([...a[$]]);
    }
    if (v.size > 0) {
      const $ = [], K = /* @__PURE__ */ new Map();
      for (let E = 0; E < o.length; E++) {
        if (v.has(E)) {
          w++;
          continue;
        }
        K.set(E, $.length), $.push([...o[E]]);
      }
      const U = [];
      for (const E of r) {
        let Q = [];
        for (const de of E) {
          const Ve = K.get(de);
          Ve === void 0 ? (Q.length >= 2 && U.push(Q), Q = []) : Q.push(Ve);
        }
        Q.length >= 2 && U.push(Q);
      }
      r = U, e.points.val = $;
    }
    for (const $ of t) {
      const K = x.get($);
      K !== void 0 && K < r.length && f.push(K);
    }
    if (e.polylines && (e.polylines.val = r), e.areas && (e.areas.val = f), p.size > 0 && h) {
      const $ = d.filter((K, U) => !p.has(U));
      "val" in h ? h.val = $ : window.__hekatanDrawingAuxLines = $, w += p.size;
    }
    Pe.clear(), ht();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return re(`\u{1F5D1} ${w} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = Mn, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) || Pe.size !== 0 && (n.preventDefault(), Mn());
  });
  const He = document.createElement("div");
  He.id = "hk-properties-pane";
  const _n = "hk-props-pane-pos";
  let Mt = null;
  try {
    const n = localStorage.getItem(_n);
    n && (Mt = JSON.parse(n));
  } catch {
  }
  He.style.cssText = ["position:fixed", Mt ? `left:${Mt.left}px` : "left:50%", Mt ? `top:${Mt.top}px` : "top:8px", Mt ? "transform:none" : "transform:translateX(-50%)", "width:min(320px, calc(100vw - 32px))", "max-height:60vh", "overflow-y:auto", "z-index:201", "box-shadow:0 6px 24px rgba(0,0,0,0.45)", "border-radius:6px", "display:none"].join(";") + ";", document.body.appendChild(He);
  const to = () => {
    const n = He.querySelector(".tp-rotv_b");
    if (!n || n.__hkDragWired) return;
    n.__hkDragWired = true, n.style.cursor = "move", n.style.userSelect = "none";
    let o = false, a = 0, t = 0, h = 0, d = 0;
    n.addEventListener("mousedown", (v) => {
      o = true, a = v.clientX, t = v.clientY;
      const i = He.getBoundingClientRect();
      h = i.left, d = i.top, He.style.transform = "none", He.style.left = `${h}px`, He.style.top = `${d}px`, v.preventDefault();
    }), window.addEventListener("mousemove", (v) => {
      if (!o) return;
      const i = v.clientX - a, l = v.clientY - t, p = Math.max(0, Math.min(window.innerWidth - 80, h + i)), w = Math.max(0, Math.min(window.innerHeight - 40, d + l));
      He.style.left = `${p}px`, He.style.top = `${w}px`;
    }), window.addEventListener("mouseup", () => {
      if (o) {
        o = false;
        try {
          localStorage.setItem(_n, JSON.stringify({ left: parseFloat(He.style.left), top: parseFloat(He.style.top) }));
        } catch {
        }
      }
    });
  }, X = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 };
  let _e = null;
  const Ie = (n, o, a, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: a, value: t } }));
  }, no = () => {
    if (_e && (_e.dispose(), _e = null), Pe.size === 0) {
      He.style.display = "none";
      return;
    }
    const n = [...Pe], o = n.filter((r) => r.startsWith("pt:")), a = n.filter((r) => r.startsWith("seg:")), t = n.filter((r) => r.startsWith("poly:")), h = n.filter((r) => r.startsWith("aux:")), d = o.length === n.length && o.length > 0, v = a.length === n.length && a.length > 0, i = t.length === n.length && t.length > 0, l = !d && !v && !i, p = [];
    o.length && p.push(`\u{1F535} ${o.length} nodo(s)`), a.length && p.push(`\u{1F4CF} ${a.length} segmento(s)`), t.length && p.push(`\u25AD ${t.length} \xE1rea(s)`), h.length && p.push(`\u250A ${h.length} aux`);
    const w = `\u{1F3AF} ${Pe.size} item(s) \u2014 ${p.join(", ")}`;
    if (_e = new Nn({ container: He, title: w }), d) {
      const r = _e.addFolder({ title: "\u{1F4CC} Restraints (DOFs)" });
      r.addBinding(X, "Ux"), r.addBinding(X, "Uy"), r.addBinding(X, "Uz"), r.addBinding(X, "Rx"), r.addBinding(X, "Ry"), r.addBinding(X, "Rz");
      const f = _e.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      f.addBinding(X, "Kx", { label: "Kx", min: 0, step: 100 }), f.addBinding(X, "Ky", { label: "Ky", min: 0, step: 100 }), f.addBinding(X, "Kz", { label: "Kz", min: 0, step: 100 }), f.addBinding(X, "Krx", { label: "Krx", min: 0, step: 1e3 }), f.addBinding(X, "Kry", { label: "Kry", min: 0, step: 1e3 }), f.addBinding(X, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const x = _e.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      x.addBinding(X, "Fx", { step: 0.1 }), x.addBinding(X, "Fy", { step: 0.1 }), x.addBinding(X, "Fz", { step: 0.1 }), x.addBinding(X, "Mx", { step: 0.1 }), x.addBinding(X, "My", { step: 0.1 }), x.addBinding(X, "Mz", { step: 0.1 }), _e.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(X, "mass", { label: "m", min: 0, step: 1 }), _e.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(X, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), _e.addButton({ title: "\u2713 Aplicar a nodos seleccionados" }).on("click", () => {
        const U = [X.Ux, X.Uy, X.Uz, X.Rx, X.Ry, X.Rz];
        U.some((de) => de) && Ie("nodes", o, "supports", U);
        const E = [X.Fx, X.Fy, X.Fz, X.Mx, X.My, X.Mz];
        E.some((de) => de !== 0) && Ie("nodes", o, "loads", E);
        const Q = [X.Kx, X.Ky, X.Kz, X.Krx, X.Kry, X.Krz];
        Q.some((de) => de !== 0) && Ie("nodes", o, "springs", Q), X.mass !== 0 && Ie("nodes", o, "mass", X.mass), X.diaphragm !== "Ninguno" && Ie("nodes", o, "diaphragm", X.diaphragm), re(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    } else if (v) {
      const r = _e.addFolder({ title: "\u{1F4CF} Secci\xF3n frame" });
      r.addBinding(X, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), r.addBinding(X, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const f = _e.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      f.addBinding(X, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), f.addBinding(X, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), f.addBinding(X, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), f.addBinding(X, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), _e.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(X, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), _e.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(X, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const K = _e.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      K.addBinding(X, "relMxI", { label: "Mx I" }), K.addBinding(X, "relMyI", { label: "My I" }), K.addBinding(X, "relMzI", { label: "Mz I" });
      const U = _e.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      U.addBinding(X, "relMxJ", { label: "Mx J" }), U.addBinding(X, "relMyJ", { label: "My J" }), U.addBinding(X, "relMzJ", { label: "Mz J" }), _e.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(X, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const Q = _e.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      Q.addBinding(X, "LKx", { label: "LKx", min: 0, step: 100 }), Q.addBinding(X, "LKy", { label: "LKy", min: 0, step: 100 }), Q.addBinding(X, "LKz", { label: "LKz", min: 0, step: 100 });
      const de = _e.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      de.addBinding(X, "qx", { step: 0.1 }), de.addBinding(X, "qy", { step: 0.1 }), de.addBinding(X, "qz", { step: 0.1 }), _e.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(X, "massPerM", { label: "m/L", min: 0, step: 1 }), _e.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        Ie("segs", a, "section", X.section), Ie("segs", a, "material", X.material_frame);
        const ce = { A: X.A_mod, Iz: X.Iz_mod, Iy: X.Iy_mod, J: X.J_mod };
        (ce.A !== 1 || ce.Iz !== 1 || ce.Iy !== 1 || ce.J !== 1) && Ie("segs", a, "modifiers", ce), X.insertionPoint !== "10 \u2014 Centroid" && Ie("segs", a, "insertionPoint", X.insertionPoint), X.beta !== 0 && Ie("segs", a, "beta", X.beta);
        const ge = [X.relMxI, X.relMyI, X.relMzI], Ye = [X.relMxJ, X.relMyJ, X.relMzJ];
        (ge.some((Ae) => Ae) || Ye.some((Ae) => Ae)) && Ie("segs", a, "releases", { i: ge, j: Ye }), X.hinges !== "None" && Ie("segs", a, "hinges", X.hinges);
        const We = [X.LKx, X.LKy, X.LKz];
        We.some((Ae) => Ae !== 0) && Ie("segs", a, "lineSprings", We);
        const Me = [X.qx, X.qy, X.qz];
        Me.some((Ae) => Ae !== 0) && Ie("segs", a, "distLoad", Me), X.massPerM !== 0 && Ie("segs", a, "massPerM", X.massPerM), re(`\u2713 Propiedades aplicadas a ${a.length} segmento(s)`);
      });
    } else if (i) {
      const r = _e.addFolder({ title: "\u25AD Shell / \xC1rea" });
      r.addBinding(X, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), r.addBinding(X, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), r.addBinding(X, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), _e.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(X, "surfLoad", { label: "q", step: 0.1 }), _e.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        Ie("areas", t, "shellType", X.shellType), Ie("areas", t, "thickness", X.thickness), Ie("areas", t, "material", X.material_shell), X.surfLoad !== 0 && Ie("areas", t, "surfLoad", X.surfLoad), re(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    } else if (l) {
      const r = _e.addFolder({ title: "\u2139 Selecci\xF3n mixta" }), f = { msg: "Selecciona un solo tipo para editar propiedades" };
      r.addBinding(f, "msg", { readonly: true, label: "" });
    }
    _e.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      Pe.clear(), ht();
    }), He.style.display = "block", to();
  };
  window.__hekatanRefreshPropsPane = no;
  let _t = null, Yt = false;
  m.addEventListener("pointerdown", (n) => {
    n.button === 2 && (_t = { x: n.clientX, y: n.clientY }, Yt = false);
  }), m.addEventListener("pointermove", (n) => {
    if (_t && n.buttons & 2 && !Yt) {
      const o = n.clientX - _t.x, a = n.clientY - _t.y;
      Math.hypot(o, a) > 8 && (Yt = true);
    }
  }), m.addEventListener("pointerup", (n) => {
    var _a, _b, _c;
    if (n.button === 2) {
      const o = _t !== null && !Yt;
      if (_t = null, o) {
        if (Oe ? Xt() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), Pe.size > 0 && (Pe.clear(), ht()), e.polylines) {
          const h = e.polylines.rawVal;
          (h[h.length - 1] ?? []).length > 0 && (e.polylines.val = [...h, []]);
        }
        const a = window.__hekatanCadState, t = (_b = (_a = a == null ? void 0 : a.get) == null ? void 0 : _a.call(a)) == null ? void 0 : _b.tool;
        t && t !== "select" && t !== "none" ? ((_c = a == null ? void 0 : a.setTool) == null ? void 0 : _c.call(a, "select"), re(`\u238B Cancelado \u2014 tool '${t}' cerrado, volv\xE9s a Seleccionar`)) : re("\u238B Cancelado (click derecho)");
      }
    }
  }), m.addEventListener("contextmenu", (n) => {
    n.preventDefault(), n.stopPropagation();
  }, { capture: true }), m.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && window.__hekatanRectSelectExplicit && n.pointerType !== "touch" && (ot = { x: n.clientX, y: n.clientY }, Pt = false);
  }), m.addEventListener("pointermove", (n) => {
    if (Oe && n.buttons === 0) {
      const d = n.clientX < Oe.x;
      jt(Oe.x, Oe.y, n.clientX, n.clientY, d);
      return;
    }
    if (!ot) return;
    const o = n.clientX - ot.x, a = n.clientY - ot.y, t = Math.hypot(o, a);
    if (!Pt && t < 8) return;
    Pt = true;
    const h = n.clientX < ot.x;
    jt(ot.x, ot.y, n.clientX, n.clientY, h);
  }), m.addEventListener("pointerup", (n) => {
    if (!ot) return;
    if (!Pt) {
      ot = null;
      return;
    }
    const o = n.ctrlKey || n.metaKey || n.shiftKey;
    bn(ot.x, ot.y, n.clientX, n.clientY, o), ot = null, Pt = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const rt = new ze();
  rt.visible = false, rt.frustumCulled = false, y.add(rt);
  const oo = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, Sn = (n, o, a, t) => {
    var _a, _b, _c, _d;
    for (; rt.children.length; ) {
      const i = rt.children.pop();
      (_b = (_a = i.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = i.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const h = oo[n] ?? 16777215, d = 0.05, v = new le().setFromPoints([new g(o - d, a - d, t), new g(o + d, a - d, t), new g(o + d, a - d, t), new g(o + d, a + d, t), new g(o + d, a + d, t), new g(o - d, a + d, t), new g(o - d, a + d, t), new g(o - d, a - d, t)]);
    rt.add(new St(v, new $e({ color: h, linewidth: 2 }))), rt.position.set(0, 0, 0), rt.visible = true;
  }, en = () => {
    rt.visible = false;
  }, so = (n, o, a, t) => {
    var _a;
    const h = window.__hekatanOsnap, d = e.points.rawVal, v = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let i = null;
    const l = (r, f, x, $) => {
      const K = Math.hypot(f - n, x - o, $ - a);
      K > t || (!i || K < i.d) && (i = { type: r, x: f, y: x, z: $, d: K });
    };
    (h.node || h.end) && d.forEach((r) => {
      h.node && l("node", r[0], r[1], r[2]);
    });
    for (const r of v) if (!(r.length < 2)) for (let f = 0; f < r.length - 1; f++) {
      const x = d[r[f]], $ = d[r[f + 1]];
      if (!(!x || !$) && (h.end && (l("end", x[0], x[1], x[2]), l("end", $[0], $[1], $[2])), h.mid && l("mid", (x[0] + $[0]) / 2, (x[1] + $[1]) / 2, (x[2] + $[2]) / 2), h.nea || h.per)) {
        const K = $[0] - x[0], U = $[1] - x[1], E = $[2] - x[2], Q = K * K + U * U + E * E;
        if (Q < 1e-12) continue;
        const de = Math.max(0, Math.min(1, ((n - x[0]) * K + (o - x[1]) * U + (a - x[2]) * E) / Q)), Ve = x[0] + de * K, ce = x[1] + de * U, ge = x[2] + de * E;
        h.nea && l("nea", Ve, ce, ge), h.per && l("per", Ve, ce, ge);
      }
    }
    const p = window.__hekatanDrawingAuxLines, w = (p == null ? void 0 : p.rawVal) ?? (p == null ? void 0 : p.val) ?? p ?? [];
    for (const r of w) {
      if (r.length !== 6) continue;
      const f = [r[0], r[1], r[2]], x = [r[3], r[4], r[5]];
      if (h.end && (l("end", f[0], f[1], f[2]), l("end", x[0], x[1], x[2])), h.mid && l("mid", (f[0] + x[0]) / 2, (f[1] + x[1]) / 2, (f[2] + x[2]) / 2), h.nea || h.per) {
        const $ = x[0] - f[0], K = x[1] - f[1], U = x[2] - f[2], E = $ * $ + K * K + U * U;
        if (E < 1e-12) continue;
        const Q = Math.max(0, Math.min(1, ((n - f[0]) * $ + (o - f[1]) * K + (a - f[2]) * U) / E)), de = f[0] + Q * $, Ve = f[1] + Q * K, ce = f[2] + Q * U;
        h.nea && l("nea", de, Ve, ce), h.per && l("per", de, Ve, ce);
      }
    }
    return i ? { type: i.type, x: i.x, y: i.y, z: i.z } : null;
  };
  window.__hekatanOsnapCompute = so, window.__hekatanOsnapShow = Sn, window.__hekatanOsnapHide = en;
  let ve = [], Ne = 0;
  const Ct = document.createElement("div");
  Ct.id = "hk-cad-status", Ct.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", Ct.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(Ct);
  const ao = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), be && n.push(`\u{1F512} LOCK ${be.toUpperCase()}`);
    const a = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(a) > 1e-3 && n.push(`Cota Z=${a}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, re = (n) => {
    const o = n + ao();
    Ct.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    re(o);
  }, window.__hekatanCadResetPending = () => {
    ve = [], re("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  const zt = [], mt = () => {
    var _a, _b;
    zt.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), zt.length > 100 && zt.shift();
  }, kn = () => {
    var _a;
    const n = zt.pop();
    if (!n) {
      re("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), ve = [], Z.visible = false, ae.visible = false, I(), re(`\u21B6 Undo \u2014 ${zt.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    k();
  };
  window.__hekatanPushUndo = mt, window.__hekatanUndo = kn, window.addEventListener("keydown", (n) => {
    (n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey && (n.preventDefault(), kn());
  });
  const Pn = () => {
    if (ve = [], e.polylines) {
      const n = e.polylines.rawVal, o = n[n.length - 1];
      o && o.length > 0 && (e.polylines.val = [...n, []]);
    }
    be = null, Lt(), Z.visible = false, ae.visible = false, I(), re("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), k();
  };
  window.__hekatanFinalizeDraw = Pn, m.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s, _t2, _u, _v, _w, _x;
    if (ft > 5) {
      ft = 0;
      return;
    }
    ft = 0;
    const o = _(n);
    if (!o) return;
    V.setFromCamera(C, o);
    const a = M();
    if (!a.length) return;
    let t = a[0].point;
    (n.ctrlKey || n.metaKey) && (t = new g(Math.round(a[0].point.x), Math.round(a[0].point.y), Math.round(a[0].point.z)));
    {
      const i = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], l = i[i.length - 1] ?? [], p = e.points.rawVal ?? [];
      if (l.length > 0) {
        const w = p[l[l.length - 1]];
        if (w) {
          const r = !!window.__hekatanOrthoMode;
          let f = be;
          if (!f && r) {
            const x = Math.abs(t.x - w[0]), $ = Math.abs(t.y - w[1]), K = Math.abs(t.z - w[2]);
            f = x >= $ && x >= K ? "x" : $ >= K ? "y" : "z";
          }
          f === "x" ? t = new g(t.x, w[1], w[2]) : f === "y" ? t = new g(w[0], t.y, w[2]) : f === "z" && (t = new g(w[0], w[1], t.z));
        }
      }
    }
    const h = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, h);
    if (d) t = new g(d.x, d.y, d.z), re(`\u{1F3AF} Snap [${d.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const i = window.__hekatanSnapEnabled !== false, l = window.__hekatanSnap2D ?? 0;
      i && l > 0 && (t = new g(Math.round(t.x / l) * l, Math.round(t.y / l) * l, Math.round(t.z / l) * l));
    }
    const v = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (v === "select" || v === "none" || !v) {
      if (it) {
        Oe && Xt();
        const { kind: i, a: l, b: p } = it, w = p !== void 0 ? `${i}:${l}:${p}` : `${i}:${l}`;
        n.ctrlKey || n.metaKey || n.shiftKey || Pe.clear(), Pe.has(w) ? Pe.delete(w) : Pe.add(w), ht(), re(`\u2713 Seleccionados ${Pe.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const i = n.ctrlKey || n.metaKey || n.shiftKey, l = n.clientX, p = n.clientY;
        Oe ? (bn(Oe.x, Oe.y, l, p, i), Oe = null) : i || (Oe = { x: l, y: p }, re("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), jt(l, p, l + 1, p + 1, false));
      }
      return;
    }
    if (v === "axis") {
      const i = window.__hekatanAxisDraw;
      if (!i) return;
      if (!i.pendingStart) {
        i.pendingStart = [t.x, t.y, t.z], re(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const l = i.mode === "number", p = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, i.pendingStart, [t.x, t.y, t.z], l);
      re(`\u2713 Eje "${p}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (v === "delete") {
      if (dt >= 0) {
        const i = window.__hekatanDrawingAuxLines, l = (i == null ? void 0 : i.rawVal) ?? (i == null ? void 0 : i.val) ?? i ?? [], p = dt;
        if (p >= 0 && p < l.length) {
          mt();
          const w = l.slice(0, p).concat(l.slice(p + 1));
          i && typeof i == "object" && "val" in i ? i.val = w : window.__hekatanDrawingAuxLines = w, re(`\u{1F5D1} L\xEDnea auxiliar #${p + 1} borrada`), dt = -1, Ge.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (ct >= 0) {
        const i = ct, l = yt;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(i)) ?? false ? (Bt(i), re(`\u{1F5D1} \xC1rea #${i + 1} (shell Q4) borrada`)) : l >= 0 ? (Qn(i, l), re(`\u{1F5D1} Segmento ${l + 1} de polil\xEDnea #${i + 1} borrado`)) : (Bt(i), re(`\u{1F5D1} Polil\xEDnea #${i + 1} borrada`));
      } else re("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (v === "circle") {
      if (ve.push([t.x, t.y, t.z]), ve.length === 1) {
        re("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [i, l] = ve, p = Math.hypot(l[0] - i[0], l[1] - i[1], l[2] - i[2]);
      Math.abs(l[0] - i[0]);
      const w = Math.abs(l[1] - i[1]), f = Math.abs(l[2] - i[2]) < 1e-3 ? "xy" : w < 1e-3 ? "xz" : "yz", x = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, i[0], i[1], i[2], p, x, f), re(`\u2713 C\xEDrculo dibujado en ${f.toUpperCase()} \u2014 r=${p.toFixed(2)}m, ${x} segmentos`), ve = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (v === "arc") {
      if (ve.push([t.x, t.y, t.z]), ve.length === 1) {
        re("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (ve.length === 2) {
        re("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [i, l, p] = ve, w = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, i, l, p, w), re(`\u2713 Arco dibujado \u2014 ${w} segmentos`), ve = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (v === "rect") {
      if (ve.push([t.x, t.y, t.z]), ve.length === 1) {
        re("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [i, l] = ve;
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, i, l), re(`\u2713 Rect\xE1ngulo dibujado \u2014 (${i[0].toFixed(1)},${i[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), ve = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (v === "col") {
      mt();
      const i = t.z, l = Ne && Ne > 0 ? Ne : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, i], [t.x, t.y, i + l]];
      const p = e.polylines.rawVal, w = e.points.rawVal.length;
      e.polylines.val = [...p.slice(0, -1), ...p[p.length - 1].length > 0 ? [p[p.length - 1]] : [], [w - 2, w - 1], []], Ne = 0, re(`\u258C Columna creada \u2014 h=${l.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_p = window.__hekatanRebuild) == null ? void 0 : _p.call(window);
      } catch {
      }
      return;
    }
    if (v === "wall") {
      if (ve.push([t.x, t.y, t.z]), ve.length === 1) {
        re("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [i, l] = ve, p = Ne && Ne > 0 ? Ne : 3;
      mt();
      const w = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [i[0], i[1], i[2]], [l[0], l[1], l[2]], [l[0], l[1], l[2] + p], [i[0], i[1], i[2] + p]];
      const r = e.polylines.rawVal;
      if (r.length - 1, e.polylines.val = [...r.slice(0, -1), ...r[r.length - 1].length > 0 ? [r[r.length - 1]] : [], [w, w + 1, w + 2, w + 3, w], []], e.areas) {
        const f = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, f];
      }
      re(`\u25A5 Pared Q4 creada \u2014 h=${p.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), ve = [], Ne = 0;
      try {
        (_q = window.__hekatanRebuild) == null ? void 0 : _q.call(window);
      } catch {
      }
      return;
    }
    if (v === "extp") {
      mt();
      const i = Ne && Ne > 0 ? Ne : 3, l = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, l], [t.x, t.y, l + i]];
      const p = e.polylines.rawVal, w = e.points.rawVal.length;
      e.polylines.val = [...p.slice(0, -1), ...p[p.length - 1].length > 0 ? [p[p.length - 1]] : [], [w - 2, w - 1], []], Ne = 0, re(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${i.toFixed(2)}m`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (v === "extl") {
      const i = (window.__hekatanSnap2D ?? 0.5) * 1.5, l = qt(t.x, t.y, t.z, i);
      if (!l) {
        re("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const p = e.polylines.rawVal, w = e.points.rawVal, r = p[l.polyIdx], f = w[r[l.segIdx]], x = w[r[l.segIdx + 1]];
      if (!f || !x) {
        re("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const $ = Ne && Ne > 0 ? Ne : 3;
      mt();
      const K = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [f[0], f[1], f[2]], [x[0], x[1], x[2]], [x[0], x[1], x[2] + $], [f[0], f[1], f[2] + $]];
      const U = e.polylines.rawVal;
      if (e.polylines.val = [...U.slice(0, -1), ...U[U.length - 1].length > 0 ? [U[U.length - 1]] : [], [K, K + 1, K + 2, K + 3, K], []], e.areas) {
        const E = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, E];
      }
      Ne = 0, re(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${$.toFixed(2)}m`);
      try {
        (_s = window.__hekatanRebuild) == null ? void 0 : _s.call(window);
      } catch {
      }
      return;
    }
    if (v === "auxp") {
      const i = window.__hekatanDrawingAuxPoints;
      if (i) {
        const l = i.rawVal ?? i.val ?? [];
        i.val = [...l, [t.x, t.y, t.z]];
      }
      re(`\u2726 Punto auxiliar agregado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      return;
    }
    if (v === "aux") {
      if (ve.push([t.x, t.y, t.z]), ve.length === 1) {
        re("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [i, l] = ve, p = window.__hekatanDrawingAuxLines;
      if (p) {
        const $ = p.rawVal ?? p.val ?? [];
        p.val = [...$, [i[0], i[1], i[2], l[0], l[1], l[2]]];
      }
      const w = l[0] - i[0], r = l[1] - i[1], f = l[2] - i[2], x = Math.sqrt(w * w + r * r + f * f);
      re(`\u2713 L\xEDnea auxiliar creada \u2014 L=${x.toFixed(2)}m (cyan, no FEM)`), ve = [];
      return;
    }
    if (v === "extend") {
      if (ve.push([t.x, t.y, t.z]), ve.length === 1) {
        re("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [i, l] = ve, p = window.__hekatanDrawingAuxLines;
      if (p) {
        const w = p.rawVal ?? p.val ?? [];
        p.val = [...w, [i[0], i[1], i[2], l[0], l[1], l[2]]];
      }
      re("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), ve = [];
      return;
    }
    if (v === "chaflan") {
      if (ve.push([t.x, t.y, t.z]), ve.length === 1) {
        re("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [i, l] = ve, p = window.__hekatanChaflanR ?? 1, w = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_t2 = window.__hekatanDrawSlabChaflan) == null ? void 0 : _t2.call(window, i, l, p, w, 6);
      const r = Math.abs(l[0] - i[0]).toFixed(1), f = Math.abs(l[1] - i[1]).toFixed(1);
      re(`\u2713 Losa con chaflanes dibujada \u2014 ${r}\xD7${f}m, r=${p}m, ${w} seg/chafl\xE1n`), ve = [];
      try {
        (_u = window.__hekatanRebuild) == null ? void 0 : _u.call(window);
      } catch {
      }
      return;
    }
    if (z = false, mt(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const i = e.polylines.rawVal, l = i.length - 1, p = i[l] ?? [];
      if (v === "line" && p.length === 2) {
        e.polylines.val = [...i, []], re("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_v = window.__hekatanRebuild) == null ? void 0 : _v.call(window);
        } catch {
        }
        return;
      }
      if (v === "area" && p.length === 4) {
        e.polylines.val = [...i.slice(0, -1), [...p, p[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, l]), re("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
        } catch {
        }
        return;
      }
    }
    if (v === "node") re(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (v === "line") re("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (v === "polyline") re("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (v === "area") {
      const i = ((_x = e.polylines) == null ? void 0 : _x.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      re(`\u25A6 \xC1rea \u2014 click ${i.length}/4. Marc\xE1 ${4 - i.length} v\xE9rtice${4 - i.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), m.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), m.addEventListener("pointermove", (n) => {
    var _a, _b;
    const o = _(n);
    if (!o) return;
    V.setFromCamera(C, o);
    const a = M();
    if (se.geometry.deleteAttribute("position"), a.length) {
      let t = a[0].point.clone();
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z));
      {
        const v = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], i = v[v.length - 1] ?? [], l = e.points.rawVal ?? [];
        if (i.length > 0) {
          const p = l[i[i.length - 1]];
          if (p) {
            const w = !!window.__hekatanOrthoMode;
            let r = be;
            if (!r && w) {
              const f = Math.abs(t.x - p[0]), x = Math.abs(t.y - p[1]), $ = Math.abs(t.z - p[2]);
              r = f >= x && f >= $ ? "x" : x >= $ ? "y" : "z";
            }
            r === "x" ? t.set(t.x, p[1], p[2]) : r === "y" ? t.set(p[0], t.y, p[2]) : r === "z" && t.set(p[0], p[1], t.z);
          }
        }
      }
      const h = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, h);
      if (d) t.set(d.x, d.y, d.z);
      else {
        const v = window.__hekatanSnapEnabled !== false, i = window.__hekatanSnap2D ?? 0.5;
        v && i > 0 && (t.x = Math.round(t.x / i) * i, t.y = Math.round(t.y / i) * i, t.z = Math.round(t.z / i) * i);
      }
      se.geometry.setAttribute("position", new Je(t.toArray(), 3));
    }
    k();
  }), m.addEventListener("pointermove", (n) => {
    var _a;
    const o = _(n);
    if (!o) return;
    V.setFromCamera(C, o);
    let a = false;
    const t = V.intersectObject(oe), h = M();
    if (t.length && h.length) {
      const d = new g(...e.points.rawVal[t[0].index]), v = new g(...h[0].point), i = d.sub(v), l = (_a = h[0].face) == null ? void 0 : _a.normal;
      l.transformDirection(H.matrixWorld), Math.abs(i.dot(l)) < 1e-4 && (a = true);
    }
    se.visible = !a;
  });
  let tn = false, nn;
  m.addEventListener("pointermove", (n) => {
    var _a;
    if (!ft) return;
    const o = _(n);
    if (!o) return;
    V.setFromCamera(C, o);
    let a = false;
    const t = V.intersectObject(oe), h = M();
    if (t.length && h.length) {
      const v = new g(...e.points.rawVal[t[0].index]), i = new g(...h[0].point), l = v.sub(i), p = (_a = h[0].face) == null ? void 0 : _a.normal;
      p.transformDirection(H.matrixWorld), Math.abs(l.dot(p)) < 1e-4 && (a = true);
    }
    if (a && ft < 5 && (tn = true, c.enabled = false, nn = t[0].index), !tn || ft % 2 !== 0) return;
    const d = [...e.points.rawVal];
    if (nn !== void 0) {
      let v = h[0].point;
      (n.ctrlKey || n.metaKey) && (v = new g(Math.round(v.x), Math.round(v.y), Math.round(v.z))), d[nn] = v.toArray();
    }
    e.points.val = d;
  }), m.addEventListener("pointerup", () => {
    c.enabled = true, tn = false;
  }), m.addEventListener("contextmenu", (n) => {
    var _a;
    const o = _(n);
    if (!o) return;
    V.setFromCamera(C, o);
    let a = false;
    const t = V.intersectObject(oe), h = M();
    if (t.length && h.length) {
      const i = new g(...e.points.rawVal[t[0].index]), l = new g(...h[0].point), p = i.sub(l), w = (_a = h[0].face) == null ? void 0 : _a.normal;
      w.transformDirection(H.matrixWorld), Math.abs(p.dot(w)) < 1e-4 && (a = true);
    }
    if (!a) return;
    const d = [...e.points.rawVal];
    if (d.splice(t[0].index, 1), e.points.val = d, !e.polylines) return;
    const v = e.polylines.rawVal.map((i) => i.filter((l) => l !== t[0].index)).map((i) => i.map((l) => l > t[0].index ? l - 1 : l)).filter((i) => i.length);
    v.push([]), e.polylines.val = v;
  });
}
function Ro(e, s, y) {
  const S = Math.round(14.999999999999998), b = { position: e.position.clone(), quaternion: e.quaternion.clone() }, m = setInterval(V, 1e3 / 30);
  let k = 0;
  function V() {
    k++;
    const C = k / S;
    e.position.lerpVectors(b.position, s.position, C), e.quaternion.slerpQuaternions(b.quaternion, s.quaternion, C), y && y(), k == S && clearInterval(m);
  }
}
class Wn {
  constructor(s, y = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(s, y);
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
  setColorMap(s, y = 32) {
    this.map = cn[s] || cn.rainbow, this.n = y;
    const u = 1 / this.n, c = new De(), S = new De();
    this.lut.length = 0, this.lut.push(new De(this.map[0][1]));
    for (let b = 1; b < y; b++) {
      const m = b * u;
      for (let k = 0; k < this.map.length - 1; k++) if (m > this.map[k][0] && m <= this.map[k + 1][0]) {
        const V = this.map[k][0], C = this.map[k + 1][0];
        c.setHex(this.map[k][1], Rt), S.setHex(this.map[k + 1][1], Rt);
        const _ = new De().lerpColors(c, S, (m - V) / (C - V));
        this.lut.push(_);
      }
    }
    return this.lut.push(new De(this.map[this.map.length - 1][1])), this;
  }
  copy(s) {
    return this.lut = s.lut, this.map = s.map, this.n = s.n, this.minV = s.minV, this.maxV = s.maxV, this;
  }
  getColor(s) {
    s = co.clamp(s, this.minV, this.maxV), s = (s - this.minV) / (this.maxV - this.minV);
    const y = Math.round(s * this.n);
    return this.lut[y];
  }
  addColorMap(s, y) {
    return cn[s] = y, this;
  }
  createCanvas() {
    const s = document.createElement("canvas");
    return s.width = 1, s.height = this.n, this.updateCanvas(s), s;
  }
  updateCanvas(s) {
    const y = s.getContext("2d", { alpha: false }), u = y.getImageData(0, 0, 1, this.n), c = u.data;
    let S = 0;
    const b = 1 / this.n, m = new De(), k = new De(), V = new De();
    for (let C = 1; C >= 0; C -= b) for (let _ = this.map.length - 1; _ >= 0; _--) if (C < this.map[_][0] && C >= this.map[_ - 1][0]) {
      const H = this.map[_ - 1][0], j = this.map[_][0];
      m.setHex(this.map[_ - 1][1], Rt), k.setHex(this.map[_][1], Rt), V.lerpColors(m, k, (C - H) / (j - H)), c[S * 4] = Math.round(V.r * 255), c[S * 4 + 1] = Math.round(V.g * 255), c[S * 4 + 2] = Math.round(V.b * 255), c[S * 4 + 3] = 255, S += 1;
    }
    return y.putImageData(u, 0, 0), s;
  }
}
const cn = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, Tt = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function Do(e) {
  e = Math.max(0, Math.min(1, e));
  for (let y = 0; y < Tt.length - 1; y++) {
    const [u, c, S, b] = Tt[y], [m, k, V, C] = Tt[y + 1];
    if (e <= m) {
      const _ = (e - u) / (m - u);
      return [c + (k - c) * _, S + (V - S) * _, b + (C - b) * _];
    }
  }
  const s = Tt[Tt.length - 1];
  return [s[1], s[2], s[3]];
}
function Zo() {
  const s = new Uint8Array(1024);
  for (let u = 0; u < 256; u++) {
    const c = u / 255, [S, b, m] = Do(c);
    s[u * 4 + 0] = S, s[u * 4 + 1] = b, s[u * 4 + 2] = m, s[u * 4 + 3] = 255;
  }
  const y = new ho(s, 256, 1, fo);
  return y.minFilter = En, y.magFilter = En, y.wrapS = Ln, y.wrapT = Ln, y.needsUpdate = true, y;
}
function No(e, s, y) {
  new Wn();
  const u = Zo(), c = new po({ uniforms: { cmap: { value: u }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: tt, transparent: false, clipping: true, depthWrite: true, depthTest: true }), S = new Le(new le(), c);
  return S.renderOrder = -1, S.frustumCulled = false, B.derive(() => {
    S.geometry.setAttribute("position", new Je(e.val.flat(), 3));
    const b = [];
    for (const M of s.val) M.length === 3 ? b.push(M[0], M[1], M[2]) : M.length === 4 && (b.push(M[0], M[1], M[2]), b.push(M[0], M[2], M[3]));
    S.geometry.setIndex(new uo(b, 1));
    const m = y.val.filter((M) => Number.isFinite(M));
    let k, V;
    const C = mn.val;
    if (C ? (V = C[0], k = C[1]) : (k = m.length ? Math.max(...m) : 1, V = m.length ? Math.min(...m) : 0, V >= 0 && k > 0 && (V = 0)), k === V) {
      const M = Math.max(Math.abs(k) * 1e-6, 1e-9);
      k += M, V -= M;
    }
    const _ = C && C[0] > C[1], H = Math.min(V, k), j = Math.max(V, k), G = j - H, pe = new Float32Array(y.val.length);
    for (let M = 0; M < y.val.length; M++) {
      const oe = y.val[M];
      if (!Number.isFinite(oe)) {
        pe[M] = -1;
        continue;
      }
      const fe = ((_ ? j + H - oe : oe) - H) / G;
      pe[M] = Math.max(0, Math.min(1, fe));
    }
    S.geometry.setAttribute("scalar", new Ce(pe, 1));
  }), S;
}
function Ko(e, s, y, u) {
  const c = No(y, e.elements, u);
  return B.derive(() => {
    c.visible = s.shellResults.val != "none";
  }), c;
}
const Wo = 6, dn = 10, Uo = 0.012;
function Go(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function Ho(e, s, y, u) {
  if (!y && !u) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && y) {
    const S = y[e];
    if (S && S.has(s)) return S.get(s);
  }
  return null;
}
function qo(e, s, y, u) {
  const c = new ze(), S = new Wn();
  S.setColorMap("rainbow");
  const b = new De(), m = B.state([]);
  return B.derive(() => {
    var _a, _b, _c;
    s.deformedShape.val;
    const k = y.val, V = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], C = Go(s.frameResults.val);
    if (c.children.forEach((D) => {
      D.geometry && D.geometry.dispose(), D.material && D.material.dispose();
    }), c.clear(), !C || V.length === 0 || k.length === 0) {
      m.val = [];
      return;
    }
    const _ = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, H = (_c = e.deformOutputs) == null ? void 0 : _c.val, j = [], G = [];
    for (let D = 0; D < V.length; D++) {
      if (V[D].length !== 2) continue;
      const O = Ho(C, D, _, H);
      O && (j.push(O[0], O[1]), G.push({ idx: D, vals: O }));
    }
    if (j.length === 0) {
      m.val = [];
      return;
    }
    const pe = Math.min(...j), M = Math.max(...j);
    S.setMin(pe), S.setMax(M), m.val = j;
    const oe = [1 / 0, 1 / 0, 1 / 0], se = [-1 / 0, -1 / 0, -1 / 0];
    for (const D of k) for (let N = 0; N < 3; N++) oe[N] = Math.min(oe[N], D[N]), se[N] = Math.max(se[N], D[N]);
    const W = Math.max(se[0] - oe[0], se[1] - oe[1], se[2] - oe[2], 1) * Uo, F = [], Y = [], z = [];
    let P = 0;
    for (const { idx: D, vals: N } of G) {
      const O = V[D], q = k[O[0]], A = k[O[1]];
      if (!q || !A) continue;
      const Z = new g(A[0] - q[0], A[1] - q[1], A[2] - q[2]), ae = Z.length();
      if (ae < 1e-10) continue;
      Z.normalize();
      const ne = Math.abs(Z.y) < 0.99 ? new g(0, 1, 0) : new g(1, 0, 0), ie = new g().crossVectors(Z, ne).normalize(), ue = new g().crossVectors(Z, ie).normalize(), me = dn + 1, he = Wo;
      for (let ye = 0; ye < me; ye++) {
        const Se = ye / dn, Be = q[0] + Z.x * ae * Se, Te = q[1] + Z.y * ae * Se, R = q[2] + Z.z * ae * Se, J = N[0] + (N[1] - N[0]) * Se, ee = S.getColor(J) ?? new De(0, 0, 0);
        b.copy(ee).convertSRGBToLinear();
        for (let te = 0; te < he; te++) {
          const we = te / he * Math.PI * 2, xe = Math.cos(we), Ee = Math.sin(we);
          F.push(Be + (ie.x * xe + ue.x * Ee) * W, Te + (ie.y * xe + ue.y * Ee) * W, R + (ie.z * xe + ue.z * Ee) * W), Y.push(b.r, b.g, b.b);
        }
      }
      for (let ye = 0; ye < dn; ye++) for (let Se = 0; Se < he; Se++) {
        const Be = (Se + 1) % he, Te = P + ye * he + Se, R = P + ye * he + Be, J = P + (ye + 1) * he + Se, ee = P + (ye + 1) * he + Be;
        z.push(Te, R, ee), z.push(Te, ee, J);
      }
      P += me * he;
    }
    if (F.length === 0) return;
    const T = new le();
    T.setAttribute("position", new Je(F, 3)), T.setAttribute("color", new Je(Y, 3)), T.setIndex(z), T.computeVertexNormals();
    const I = new Re({ vertexColors: true, side: tt }), L = new Le(T, I);
    L.frustumCulled = false, c.add(L);
  }), c.__colorMapValues = m, c;
}
function $n(e, s = 8) {
  const y = document.createElement("div");
  y.id = "legend";
  const u = document.createElement("div");
  u.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", y.appendChild(u), setTimeout(() => {
    B.derive(() => {
      u.textContent = un.val ? `[${un.val}]` : "";
    });
  });
  const c = Array.from({ length: s + 1 }, (k, V) => V / s).reverse();
  let S, b;
  c.forEach((k, V) => {
    S = document.createElement("div"), S.id = `marker-${V}`, S.className = "marker", S.style.marginTop = V == 0 ? "0px" : `calc(${50 / s}vh - 1px)`, b = document.createElement("p"), b.id = `marker-text-${V}`, S.append(b), y.append(S);
  });
  const m = [];
  return y.querySelectorAll("p").forEach((k) => m.push(k)), setTimeout(() => {
    B.derive(() => {
      c.forEach((k, V) => {
        const C = m[V];
        C && (C.innerText = Jo(e.val, k).toString());
      });
    });
  }), y;
}
function Jo(e, s) {
  const y = mn.val;
  if (y) return (y[0] + s * (y[1] - y[0])).toPrecision(3);
  const u = e.filter((b) => Number.isFinite(b));
  if (u.length === 0) return "0";
  let c = Math.min(...u);
  const S = Math.max(...u);
  return c >= 0 && S > 0 && (c = 0), (c + s * (S - c)).toPrecision(3);
}
function ls({ mesh: e, settingsObj: s, drawingObj: y, objects3D: u, solids: c }) {
  vo.DEFAULT_UP = new g(0, 0, 1);
  const S = document.createElement("div"), b = new mo(), m = new wo(45, 1, 0.1, 2 * 1e6), k = new xo(-10, 10, 10, -10, -1e3, 2e6);
  let V = m;
  const C = new yo({ antialias: true });
  C.localClippingEnabled = true;
  const _ = new In(m, C.domElement);
  _.enableDamping = true, _.dampingFactor = 0.1, _.screenSpacePanning = true, _.zoomSpeed = 0.8, _.panSpeed = 1.2, _.rotateSpeed = 0.9, _.keyPanSpeed = 12, _.listenToKeyEvents(window), _.touches = { ONE: Dt.ROTATE, TWO: Dt.DOLLY_PAN }, C.domElement.addEventListener("wheel", (R) => {
    if (!R.ctrlKey && Math.abs(R.deltaX) > Math.abs(R.deltaY) * 1.5) {
      R.preventDefault();
      const J = _.target, ee = new g().subVectors(m.position, J), te = new g();
      te.crossVectors(m.up, ee).normalize();
      const xe = ee.length() * 1e-3 * _.panSpeed;
      J.addScaledVector(te, R.deltaX * xe), m.position.addScaledVector(te, R.deltaX * xe), _.update();
    }
  }, { passive: false });
  const H = new ln(new g(-1, 0, 0), 0), j = new ln(new g(0, -1, 0), 0), G = new ln(new g(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function pe() {
    const R = window.__hekatanClip, J = [];
    R.enableX && (H.normal.set(R.invertX ? 1 : -1, 0, 0), H.constant = R.invertX ? -R.posX : R.posX, J.push(H)), R.enableY && (j.normal.set(0, R.invertY ? 1 : -1, 0), j.constant = R.invertY ? -R.posY : R.posY, J.push(j)), R.enableZ && (G.normal.set(0, 0, R.invertZ ? 1 : -1), G.constant = R.invertZ ? -R.posZ : R.posZ, J.push(G)), C.clippingPlanes = J, b.traverse((te) => {
      const we = te;
      if (we.material) {
        const xe = Array.isArray(we.material) ? we.material : [we.material];
        for (const Ee of xe) Ee.clippingPlanes = J, Ee.needsUpdate = true;
      }
    });
    const ee = window.__hekatanPanes ?? [];
    for (const te of ee) try {
      te && typeof te.refresh == "function" && te.refresh();
    } catch {
    }
    C.render(b, V);
  }
  pe(), window.__hekatanClipApply = pe;
  const M = Mo(s), oe = B.derive(() => M.displayScale.val === 0 ? 1 : M.displayScale.val > 0 ? M.displayScale.val : -1 / M.displayScale.val), se = Qo(e, M), fe = () => {
    const R = [];
    return M.gridXY.rawVal && R.push("xy"), M.gridXZ.rawVal && R.push("xz"), M.gridYZ.rawVal && R.push("yz"), R;
  }, W = () => {
    const R = M.gridStep.rawVal, J = Math.max(R, M.gridMajor.rawVal);
    return { planes: fe(), majorStep: J, minorStep: R };
  };
  let F = rn(M.gridSize.rawVal, W());
  F.visible = M.gridVisible.rawVal, window.__hekatanSnap2D = M.cursorSnap.rawVal;
  const Y = () => {
    const R = Math.max(0, Math.min(1, M.gridOpacity.rawVal));
    F.traverse((J) => {
      const ee = J.material;
      if (!ee || !("opacity" in ee)) return;
      const te = J.name ?? "";
      let we = 0.35;
      te.includes("border") ? we = 1 : te.includes("major") && (we = 0.75), ee.opacity = R * we;
    });
  };
  Y(), S.appendChild(bo(M, e, c)), S.setAttribute("id", "viewer"), S.appendChild(C.domElement), C.setPixelRatio(window.devicePixelRatio);
  const z = pt();
  C.setClearColor(z.background, 1);
  const P = M.gridSize.rawVal, T = P * 0.5 + P * 0.5 / Math.tan(45 * 0.5);
  m.position.set(0, 0, T), m.up.set(0, 1, 0), _.target.set(0, 0, 0), _.minDistance = 0.1, _.maxDistance = 1e4, S.__settings = M, _.zoomSpeed = 1, _._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, _.update();
  let I = Xn(M.gridSize.rawVal, M.flipAxes.rawVal);
  b.add(F, I), B.derive(() => {
    window.__hekatanGridPlaneXY = M.gridXY.val, window.__hekatanGridPlaneXZ = M.gridXZ.val, window.__hekatanGridPlaneYZ = M.gridYZ.val;
  });
  let L = true;
  B.derive(() => {
    const R = M.gridVisible.val;
    if (L) {
      L = false;
      return;
    }
    F.visible = R, ne();
  });
  let D = true;
  B.derive(() => {
    if (M.gridOpacity.val, D) {
      D = false;
      return;
    }
    Y(), ne();
  }), B.derive(() => {
    const R = M.cursorSnap.val;
    window.__hekatanSnap2D = R;
  });
  let N = true;
  B.derive(() => {
    var _a;
    const R = M.gridSize.val, J = M.flipAxes.val;
    if (M.gridXY.val, M.gridXZ.val, M.gridYZ.val, M.gridStep.val, M.gridMajor.val, N) {
      N = false;
      return;
    }
    b.remove(F), (_a = F.traverse) == null ? void 0 : _a.call(F, (we) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = we.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = we.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), F = rn(R, W()), F.visible = M.gridVisible.rawVal, b.add(F), Y(), b.remove(I), I.traverse((we) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = we.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = we.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), I = Xn(R, J), b.add(I);
    const ee = R * 0.5 + R * 0.5 / Math.tan(45 * 0.5);
    m.position.distanceTo(_.target), Math.abs(m.position.x) < 0.1 && Math.abs(m.position.y) < 0.1 && m.position.z > 0 ? m.position.set(0, 0, ee) : m.position.set(0.5 * R, -ee, 0.5 * R), _.target.set(0, 0, 0), _.minDistance = Math.max(0.05, R * 0.01), _.maxDistance = Math.max(50, R * 50), _.update(), ne();
  }), new ResizeObserver((R) => {
    var _a, _b;
    for (const J of R) {
      const ee = (_a = J.target) == null ? void 0 : _a.clientWidth, te = (_b = J.target) == null ? void 0 : _b.clientHeight;
      if (ee === 0 || te === 0) continue;
      const xe = (q ? ee / 2 : ee) / te;
      m.aspect = xe, m.updateProjectionMatrix();
      const Ee = k.top;
      if (k.left = -Ee * xe, k.right = Ee * xe, k.updateProjectionMatrix(), A && A.isPerspectiveCamera) A.aspect = xe, A.updateProjectionMatrix();
      else if (A && A.isOrthographicCamera) {
        const ke = A, be = ke.top;
        ke.left = -be * xe, ke.right = be * xe, ke.updateProjectionMatrix();
      }
      C.setSize(ee, te), ne();
    }
  }).observe(S), _.addEventListener("change", ne), B.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, M.displayScale.val, M.nodes.val, M.elements.val, (_g = M.edges) == null ? void 0 : _g.val, M.elemColumns.val, M.elemBeams.val, M.nodesIndexes.val, M.elementsIndexes.val, M.orientations.val, M.sections.val, M.secColumns.val, M.secBeams.val, M.secFloor.val, M.supports.val, M.loads.val, M.deformedShape.val, M.nodeResults.val, M.frameResults.val, M.shellResults.val, (_h = M.solidResults) == null ? void 0 : _h.val, setTimeout(ne);
  });
  let q = false, A = null, Z = null, ae = false;
  function ne() {
    const R = S.clientWidth || 1, J = S.clientHeight || 1;
    if (!q || !A) {
      C.setScissorTest(false), C.setViewport(0, 0, R, J), C.render(b, V);
      return;
    }
    const ee = R / 2;
    C.setScissorTest(true), C.setViewport(0, 0, ee, J), C.setScissor(0, 0, ee, J), C.render(b, V), C.setViewport(ee, 0, ee, J), C.setScissor(ee, 0, ee, J), C.render(b, A), C.setScissorTest(false);
  }
  function ie(R) {
    V = R, _.object = R, _.update(), ne();
  }
  function ue(R, J) {
    q = R, J && (A = J);
    const ee = S.clientWidth || 1, te = S.clientHeight || 1, xe = (R ? ee / 2 : ee) / te;
    m.isPerspectiveCamera && (m.aspect = xe, m.updateProjectionMatrix());
    const Ee = k.top;
    if (k.left = -Ee * xe, k.right = Ee * xe, k.updateProjectionMatrix(), R && A) {
      if (Z ? (Z.object = A, Z.update()) : (Z = new In(A, C.domElement), Z.enableDamping = true, Z.dampingFactor = 0.1, Z.screenSpacePanning = true, Z.zoomSpeed = 0.8, Z.panSpeed = 1.2, Z.rotateSpeed = 0.9, Z.touches = { ONE: Dt.ROTATE, TWO: Dt.DOLLY_PAN }, Z.target.copy(_.target), Z.addEventListener("change", ne), Z.enabled = false), !ae) {
        const ke = (be) => {
          if (!q || !Z) return;
          const Fe = C.domElement.getBoundingClientRect(), Lt = be.clientX - Fe.left, xt = Fe.width / 2, ut = Lt >= xt;
          _.enabled = !ut, Z.enabled = ut;
        };
        C.domElement.addEventListener("pointerdown", ke, true), C.domElement.addEventListener("wheel", ke, { capture: true, passive: true }), ae = true;
      }
    } else R || (_.enabled = true, Z && (Z.enabled = false));
    S.__splitMode = R, window.__hekatanSplitMode = R, window.__hekatanSplitCamera = R ? A : null, ne();
  }
  if (e) {
    b.add(_o(M, se, oe), So(e, M, se), zo(M, se, oe), Fo(e, M, se, oe), Po(e, M, se, oe), Co(e, M, se, oe), To(e, M, se, oe), Lo(e, M, se, oe), Yo(e, M, se, oe), Io(e, M, se, oe));
    const R = os(e, M), J = Ko(e, M, se, R), ee = $n(R);
    b.add(J), S.appendChild(ee);
    const te = qo(e, M, se);
    b.add(te);
    const we = te.__colorMapValues, xe = $n(we);
    xe.id = "frame-legend", S.appendChild(xe), B.derive(() => {
      var _a;
      const Ee = M.shellResults.val != "none", ke = (((_a = M.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", be = Ee || ke, Fe = M.frameResults.val.startsWith("contour:");
      ee.hidden = !be, J.visible = be, xe.hidden = !Fe;
    });
  }
  if (c) {
    const R = new go(16777215, 0.5);
    b.add(R);
    const J = new Bn(16777215, 0.5);
    J.position.set(30, 25, -10), J.shadow.mapSize.width = 1024, J.shadow.mapSize.height = 1024, b.add(J);
    const ee = 10;
    J.shadow.camera.left = -ee, J.shadow.camera.right = ee, J.shadow.camera.top = ee, J.shadow.camera.bottom = -ee, J.shadow.camera.far = 1e3;
    const te = new Bn(16777215, 0.5);
    te.color.setHSL(11, 43, 96), te.position.set(-10, 0, 30), b.add(te), B.derive(() => {
      (c == null ? void 0 : c.val.length) && (b.remove(...c.oldVal), b.add(...c.rawVal), ne());
    }), B.derive(() => {
      c.rawVal.forEach((we) => we.visible = M.solids.val), ne();
    });
  }
  if (u) {
    const R = [], J = (te) => {
      var _a;
      return ((_a = te == null ? void 0 : te.userData) == null ? void 0 : _a.isCota) ? M.showCotas.val : M.custom3D.val;
    }, ee = () => {
      for (const te of R) te.visible = J(te);
      ne();
    };
    B.derive(() => {
      const te = u.val;
      R.length && (b.remove(...R), R.length = 0), te.length && (b.add(...te), R.push(...te), ee()), ne();
    }), B.derive(() => {
      M.custom3D.val, ee();
    }), B.derive(() => {
      M.showCotas.val, ee();
    });
  }
  y && $o({ drawingObj: y, gridObj: F, scene: b, getActiveCamera: () => V, controls: _, gridSize: P, derivedDisplayScale: oe, rendererElm: C.domElement, viewerRender: ne }), Gt((R, J) => {
    var _a;
    C.setClearColor(J.background, 1), b.remove(F), (_a = F.traverse) == null ? void 0 : _a.call(F, (ee) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = ee.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = ee.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), F = rn(M.gridSize.rawVal, { planes: fe() }), b.add(F), S.style.setProperty("--awatif-legend-color", J.legendMarker), ne();
  });
  const me = { scene: b, perspCamera: m, orthoCamera: k, get camera() {
    return V;
  }, controls: _, renderer: C, rendererElm: C.domElement, render: ne, setActiveCamera: ie, setSplitMode: ue, get splitMode() {
    return q;
  }, get splitCamera() {
    return A;
  }, settings: M };
  S.__ctx = me;
  const he = document.createElement("div");
  he.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const ye = (R, J, ee) => {
    const te = document.createElement("button");
    return te.textContent = R, te.title = J, te.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), te.onmouseenter = () => {
      te.style.background = "rgba(70,70,70,0.9)";
    }, te.onmouseleave = () => {
      te.style.background = "rgba(40,40,40,0.85)";
    }, te.onclick = (we) => {
      we.preventDefault(), ee();
    }, te;
  }, Se = (R, J) => {
    const ee = _.target, te = new g().subVectors(V.position, ee), we = te.length(), xe = new g(), Ee = new g();
    xe.crossVectors(V.up, te).normalize(), Ee.copy(V.up).normalize();
    const ke = we * 0.05;
    ee.addScaledVector(xe, -R * ke), ee.addScaledVector(Ee, J * ke), V.position.addScaledVector(xe, -R * ke), V.position.addScaledVector(Ee, J * ke), _.update(), ne();
  }, Be = (R) => {
    const J = new g().subVectors(V.position, _.target);
    J.multiplyScalar(R), V.position.copy(_.target).add(J), _.update(), ne();
  }, Te = () => {
    const R = document.createElement("div");
    return R.style.cssText = "width:32px;height:32px;", R;
  };
  return he.append(Te()), he.append(ye("\u2191", "Pan arriba", () => Se(0, 1))), he.append(ye("\u2295", "Zoom in", () => Be(0.85))), he.append(ye("\u2190", "Pan izquierda", () => Se(-1, 0))), he.append(ye("\u2302", "Reset vista", () => {
    _.reset(), ne();
  })), he.append(ye("\u2192", "Pan derecha", () => Se(1, 0))), he.append(ye("\u2296", "Zoom out", () => Be(1.18))), he.append(ye("\u2193", "Pan abajo", () => Se(0, -1))), he.append(Te()), getComputedStyle(S).position === "static" && (S.style.position = "relative"), S.appendChild(he), S;
}
function Qo(e, s) {
  return B.derive(() => {
    var _a, _b, _c, _d;
    if (!s.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const y = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], u = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!u || y.length === 0) return y;
    const c = s.deformScale.val, S = s.deformScale.val * s.deformScaleZ.val, b = Number.isFinite(c) ? c : 1, m = Number.isFinite(S) ? S : 1;
    return y.map((k, V) => {
      var _a2;
      const C = ((_a2 = u.get(V)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], _ = Number.isFinite(C[0]) ? C[0] : 0, H = Number.isFinite(C[1]) ? C[1] : 0, j = Number.isFinite(C[2]) ? C[2] : 0;
      return [k[0] + _ * b, k[1] + H * b, k[2] + j * m];
    });
  });
}
const mn = B.state(null), un = B.state(""), Oo = B.state("kN"), jo = B.state("mm"), es = B.state("kN/m\xB2"), ts = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, Rn = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, ns = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function os(e, s) {
  const y = B.state([]);
  let u;
  return ((c) => {
    c.bendingXX = "bendingXX", c.bendingYY = "bendingYY", c.bendingXY = "bendingXY", c.membraneXX = "membraneXX", c.membraneYY = "membraneYY", c.membraneXY = "membraneXY", c.tranverseShearX = "tranverseShearX", c.tranverseShearY = "tranverseShearY", c.vonMises = "vonMises", c.pressure = "pressure", c.displacementX = "displacementX", c.displacementY = "displacementY", c.displacementZ = "displacementZ";
  })(u || (u = {})), B.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const c = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), G = (me, he) => {
      me == null ? void 0 : me.forEach((ye, Se) => {
        const Be = e.elements.val[Se];
        if (Be) for (let Te = 0; Te < Be.length; Te++) he.set(Be[Te], [ye[Te] ?? ye[0]]);
      });
    };
    G((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, c), G((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, S), G((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, b), G((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, m), G((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, k), G((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, V), G((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, C), G((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, _), G((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, H), G((_t = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t.pressure, j);
    const pe = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, M = (_w = s.solidResults) == null ? void 0 : _w.val, se = M && M !== "none" ? M : s.shellResults.val, fe = pe == null ? void 0 : pe[se], W = { bendingXX: [c, 0], bendingYY: [S, 0], bendingXY: [b, 0], membraneXX: [m, 0], membraneYY: [k, 0], membraneXY: [V, 0], tranverseShearX: [C, 0], tranverseShearY: [_, 0], vonMises: [H, 0], pressure: [j, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, F = s.shellResults.val, Y = Oo.val, z = jo.val, P = F === "displacementX" || F === "displacementY" || F === "displacementZ", T = F === "bendingXX" || F === "bendingYY" || F === "bendingXY", I = F === "membraneXX" || F === "membraneYY" || F === "membraneXY", L = F === "vonMises" || F === "pressure", D = F === "tranverseShearX" || F === "tranverseShearY", N = (_D = s.solidResults) == null ? void 0 : _D.val, O = N === "vonMises" || N === "sigmaXX" || N === "sigmaYY" || N === "sigmaZZ" || N === "tauXY" || N === "tauYZ" || N === "tauXZ", q = N === "ux" || N === "uy" || N === "uz", A = es.val, Z = O ? ns[A] : q || P ? Rn[z] : T || I || L || D ? 1 / ts[Y] : 1, ae = O ? A : q || P ? z : T ? `${Y}\xB7m/m` : I ? `${Y}/m\xB2` : L ? `${Y}/m\xB2` : D ? `${Y}/m` : "";
    un.val = ae, mn.val = Array.isArray(fe) && fe.length === 2 ? [fe[0] * Z, fe[1] * Z] : null;
    const ie = N && N !== "none" ? [H, 0] : W[F], ue = [];
    e.nodes.val.forEach((me, he) => {
      const ye = ie;
      if (!ye || !ye[0] || typeof ye[0].has != "function") return;
      if (!ye[0].has(he)) {
        ue.push(Number.NaN);
        return;
      }
      const Se = ye[0].get(he), Be = Se ? Se[ye[1]] ?? 0 : 0;
      ue.push(Be * Z);
    }), y.val = ue;
  }), y;
}
export {
  jo as a,
  No as b,
  Oo as c,
  $n as d,
  es as e,
  ls as g
};
