import { Y as cn, B as ue, Z as dn, F as nt, G as Ze, c as Tt, L as Oe, d as Ke, D as xt, M as Ne, u as it, i as eo, b as po, V as b, z as Xt, H as lt, _ as Mn, n as to, a as ht, j as Ue, l as pn, $ as fn, g as fo, f as uo, s as on, N as Jt, S as Nt, a0 as Rn, o as Bn, q as Dn, r as Nn, a1 as Zn, a2 as sn, a3 as ho, a4 as mo, a5 as wo, a6 as yo, a7 as xo, p as Un, a8 as Kn, C as Hn, t as go, v as vo, w as bo, W as Mo, x as Wn, a9 as an, J as _n, A as _o, y as Gn, O as So } from "./Text-Dbk7DZ4h.js";
import { v as B, P as no, g as $t, o as un } from "./theme-2eEBQPmF.js";
import "./styles-lf_LNy9d.js";
function ko(e, s, w) {
  const p = document.createElement("div"), r = new no({ title: "Settings", expanded: true, container: p });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(r), p.setAttribute("id", "settings");
  const _ = "hk_settingsPos";
  let y = null;
  try {
    const g = localStorage.getItem(_);
    g && (y = JSON.parse(g));
  } catch {
  }
  p.style.cssText = ["position:fixed", y ? `left:${y.left}px` : "left:8px", y ? `top:${y.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const f = () => {
    const g = p.querySelector(".tp-rotv_b");
    if (!g) {
      setTimeout(f, 200);
      return;
    }
    g.style.cursor = "move", g.style.userSelect = "none";
    let q = false, j = 0, J = 0, we = 0, k = 0;
    g.addEventListener("mousedown", (te) => {
      q = true, j = te.clientX, J = te.clientY;
      const le = p.getBoundingClientRect();
      we = le.left, k = le.top, p.style.left = `${we}px`, p.style.top = `${k}px`;
    }), window.addEventListener("mousemove", (te) => {
      if (!q) return;
      const le = te.clientX - j, xe = te.clientY - J, K = Math.max(0, Math.min(window.innerWidth - 40, we + le)), V = Math.max(0, Math.min(window.innerHeight - 40, k + xe));
      p.style.left = `${K}px`, p.style.top = `${V}px`;
    }), window.addEventListener("mouseup", () => {
      if (q) {
        q = false;
        try {
          localStorage.setItem(_, JSON.stringify({ left: parseFloat(p.style.left), top: parseFloat(p.style.top) }));
        } catch {
        }
      }
    });
  };
  if (f(), s == null ? void 0 : s.nodes) {
    r.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 });
    const g = r.addFolder({ title: "\u{1F4D0} Grid", expanded: true });
    g.addBinding(e.gridSize, "val", { label: "Dimensi\xF3n (m)", min: 1, max: 100, step: 1 }), g.addBinding(e.gridStep, "val", { label: "Separaci\xF3n grid (m)", min: 0.05, max: 5, step: 0.05 }), g.addBinding(e.gridMajor, "val", { label: "Separaci\xF3n mayores (m)", min: 0.1, max: 50, step: 0.1 }), g.addBinding(e.cursorSnap, "val", { label: "Paso cursor (m)", min: 0.05, max: 5, step: 0.05 }), g.addBinding(e.gridVisible, "val", { label: "Mostrar" }), g.addBinding(e.gridOpacity, "val", { label: "Opacidad", min: 0, max: 1, step: 0.05 }), g.addBinding(e.gridXY, "val", { label: "Plano XY (planta)" }), g.addBinding(e.gridXZ, "val", { label: "Plano XZ (frontal)" }), g.addBinding(e.gridYZ, "val", { label: "Plano YZ (lateral)" }), r.addBinding(e.nodes, "val", { label: "Nodes" }), r.addBinding(e.elements, "val", { label: "Elements" }), r.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), r.addBinding(e.faces, "val", { label: "  Caras (fill)" }), r.addBinding(e.elemColumns, "val", { label: "  Columnas" }), r.addBinding(e.elemBeams, "val", { label: "  Vigas" }), r.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), r.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), r.addBinding(e.orientations, "val", { label: "Orientations" }), r.addBinding(e.sections, "val", { label: "Sections" }), r.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), r.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), r.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } });
  }
  if ((s == null ? void 0 : s.nodeInputs) || (s == null ? void 0 : s.elementInputs)) {
    const g = r.addFolder({ title: "Analysis Inputs" });
    g.addBinding(e.supports, "val", { label: "Supports" }), g.addBinding(e.loads, "val", { label: "Loads" }), g.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), g.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((s == null ? void 0 : s.deformOutputs) || (s == null ? void 0 : s.analyzeOutputs)) {
    const g = r.addFolder({ title: "Analysis Outputs" });
    g.addBinding(e.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), g.addBinding(e.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), g.addBinding(e.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), g.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), g.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), g.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), g.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  w && r.addBinding(e.solids, "val", { label: "Solids" });
  const v = r.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), C = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), z = () => {
    const g = window.__hekatanClipApply;
    typeof g == "function" && g();
  };
  return v.addBinding(C, "enableX", { label: "Cortar X" }).on("change", z), v.addBinding(C, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", z), v.addBinding(C, "invertX", { label: "  invertir X" }).on("change", z), v.addBinding(C, "enableY", { label: "Cortar Y" }).on("change", z), v.addBinding(C, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", z), v.addBinding(C, "invertY", { label: "  invertir Y" }).on("change", z), v.addBinding(C, "enableZ", { label: "Cortar Z" }).on("change", z), v.addBinding(C, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", z), v.addBinding(C, "invertZ", { label: "  invertir Z" }).on("change", z), p;
}
function Co(e) {
  return { gridSize: B.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: B.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: B.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: B.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: B.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: B.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: B.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: B.state((e == null ? void 0 : e.gridXZ) ?? false), gridYZ: B.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: B.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: B.state((e == null ? void 0 : e.nodes) ?? true), elements: B.state((e == null ? void 0 : e.elements) ?? true), edges: B.state((e == null ? void 0 : e.edges) ?? true), faces: B.state((e == null ? void 0 : e.faces) ?? true), elemColumns: B.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: B.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: B.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: B.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: B.state((e == null ? void 0 : e.orientations) ?? false), sections: B.state((e == null ? void 0 : e.sections) ?? true), secColumns: B.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: B.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: B.state((e == null ? void 0 : e.secFloor) ?? -1), supports: B.state((e == null ? void 0 : e.supports) ?? true), loads: B.state((e == null ? void 0 : e.loads) ?? false), deformedShape: B.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: B.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: B.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: B.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: B.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: B.state((e == null ? void 0 : e.flipAxes) ?? false), solids: B.state((e == null ? void 0 : e.solids) ?? true), custom3D: B.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: B.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: B.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: B.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function zo(e, s, w) {
  const p = $t(), r = new cn(new ue(), new dn({ color: p.nodePoint }));
  return un((_, y) => {
    r.material.color.setHex(y.nodePoint);
  }), r.frustumCulled = false, B.derive(() => {
    e.nodes.val && r.geometry.setAttribute("position", new nt(s.val.flat(), 3));
  }), B.derive(() => {
    if (w.val, s.val, !e.nodes.rawVal) return;
    const _ = s.rawVal ?? [];
    let y = e.gridSize.val * 0.5;
    if (_.length >= 2) {
      const v = [1 / 0, 1 / 0, 1 / 0], C = [-1 / 0, -1 / 0, -1 / 0];
      for (const z of _) for (let g = 0; g < 3; g++) v[g] = Math.min(v[g], z[g]), C[g] = Math.max(C[g], z[g]);
      y = Math.max(C[0] - v[0], C[1] - v[1], C[2] - v[2], 0.1);
    }
    const f = 0.03 * y;
    r.material.size = f * w.rawVal;
  }), B.derive(() => {
    r.visible = e.nodes.val;
  }), r;
}
function Po(e, s, w) {
  const p = $t(), r = new Ze(), _ = new Tt(new ue(), new Oe({ color: p.elementLine }));
  un((q, j) => {
    _.material.color.setHex(j.elementLine);
  }), _.frustumCulled = false, _.renderOrder = 2, r.add(_);
  const y = new Ke({ vertexColors: true, transparent: true, opacity: p.shellOpacity, side: xt, depthWrite: false, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }), f = new Ne(new ue(), y);
  f.frustumCulled = false, f.userData.isShellArea = true, f.name = "__hekatan_shell_area", r.add(f);
  let v = new it(p.shellWall), C = new it(p.shellSlab), z = new it(p.shellTri);
  un((q, j) => {
    v = new it(j.shellWall), C = new it(j.shellSlab), z = new it(j.shellTri), y.opacity = j.shellOpacity, y.needsUpdate = true;
  });
  function g(q, j) {
    const J = Math.abs(j[0] - q[0]), we = Math.abs(j[1] - q[1]), k = Math.abs(j[2] - q[2]);
    return k > J && k > we || we > J && we > k;
  }
  return B.derive(() => {
    var _a;
    if (s.deformedShape.val, s.elemColumns.val, s.elemBeams.val, !s.elements.val) return;
    const q = s.elemColumns.rawVal, j = s.elemBeams.rawVal, J = w.val, we = ((_a = e.elements) == null ? void 0 : _a.val) || [], k = we.filter((K) => {
      if (K.length !== 2) return true;
      const V = J[K[0]], X = J[K[1]];
      if (!V || !X) return true;
      const F = g(V, X);
      return !(F && !q || !F && !j);
    }).map((K) => Fo(K).map((V) => [...J[V[0]], ...J[V[1]]]).flat()).flat();
    _.geometry.setAttribute("position", new nt(k, 3));
    const te = [], le = [];
    function xe(K, V, X, F) {
      const P = [V[0] - K[0], V[1] - K[1], V[2] - K[2]], T = [F[0] - K[0], F[1] - K[1], F[2] - K[2]], $ = P[1] * T[2] - P[2] * T[1], A = P[2] * T[0] - P[0] * T[2], Y = P[0] * T[1] - P[1] * T[0], U = Math.sqrt($ * $ + A * A + Y * Y);
      return U < 1e-12 ? false : Math.abs(Y / U) < 0.5;
    }
    for (const K of we) if (K.length === 3) {
      const [V, X, F] = K;
      if (J[V] && J[X] && J[F]) {
        te.push(...J[V], ...J[X], ...J[F]);
        for (let P = 0; P < 3; P++) le.push(z.r, z.g, z.b);
      }
    } else if (K.length === 4) {
      const [V, X, F, P] = K;
      if (J[V] && J[X] && J[F] && J[P]) {
        const T = xe(J[V], J[X], J[F], J[P]) ? v : C;
        te.push(...J[V], ...J[X], ...J[F]), te.push(...J[V], ...J[F], ...J[P]);
        for (let $ = 0; $ < 6; $++) le.push(T.r, T.g, T.b);
      }
    }
    te.length > 0 ? (f.geometry.dispose(), f.geometry = new ue(), f.geometry.setAttribute("position", new nt(te, 3)), f.geometry.setAttribute("color", new nt(le, 3)), f.geometry.computeVertexNormals(), f.visible = s.faces ? s.faces.rawVal : true) : f.visible = false;
  }), B.derive(() => {
    r.visible = s.elements.val;
  }), B.derive(() => {
    s.edges && (_.visible = s.edges.val);
  }), B.derive(() => {
    if (!s.faces) return;
    const q = s.faces.val;
    f.geometry.attributes.position ? f.visible = q : q || (f.visible = false);
  }), r;
}
function Fo(e) {
  if (e.length === 2) return [e];
  const s = [];
  for (let w = 0; w < e.length; w++) s.push([e[w], e[(w + 1) % e.length]]);
  return s;
}
function Sn(e, s) {
  const w = $t(), p = new Ze();
  p.name = "hekatan-grid";
  const r = (s == null ? void 0 : s.planes) ?? ["xy"];
  let _ = (s == null ? void 0 : s.majorStep) ?? 1, y = (s == null ? void 0 : s.minorStep) ?? 0.1;
  for (_ <= 0 && (_ = 1), y <= 0 && (y = 0.1); e / y > 500; ) y *= 2;
  for (; e / _ > 100; ) _ *= 2;
  const f = e / 2;
  _ = Math.max(y, Math.round(_ / y) * y);
  const C = new it(w.grid), z = new it(w.grid).multiplyScalar(0.45), g = (j, J, we, k) => {
    const te = [], le = j === "xy" ? (F, P) => [F, P, 0] : j === "xz" ? (F, P) => [F, 0, P] : (F, P) => [0, F, P], xe = Math.floor(f / J);
    for (let F = -xe; F <= xe; F++) {
      const P = F * J, T = le(P, -f), $ = le(P, f);
      te.push(...T, ...$);
    }
    for (let F = -xe; F <= xe; F++) {
      const P = F * J, T = le(-f, P), $ = le(f, P);
      te.push(...T, ...$);
    }
    const K = new ue();
    K.setAttribute("position", new nt(te, 3));
    const V = new Oe({ color: we, transparent: true, opacity: k, depthWrite: false }), X = new Tt(K, V);
    return X.name = `grid-${j}-${J === y ? "minor" : "major"}`, X;
  }, q = (j, J, we) => {
    const k = j === "xy" ? (X, F) => [X, F, 0] : j === "xz" ? (X, F) => [X, 0, F] : (X, F) => [0, X, F], te = [[-f, -f], [f, -f], [f, f], [-f, f]], le = [];
    for (const [X, F] of te) le.push(...k(X, F));
    const xe = new ue();
    xe.setAttribute("position", new nt(le, 3));
    const K = new Oe({ color: J, transparent: true, opacity: we, depthWrite: false }), V = new eo(xe, K);
    return V.name = `grid-${j}-border`, V.renderOrder = 1, V;
  };
  for (const j of r) p.add(g(j, y, z, 0.12)), p.add(g(j, _, C, 0.4)), p.add(q(j, C, 0.55));
  return p.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: _, minorStep: y, gridSize: e, planes: [...r] }, p;
}
function Vo(e, s, w, p) {
  const r = new Ze(), _ = new po(0.5, 0.5, 0.5), y = new Ke({ color: 10166822 });
  return B.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, !s.supports.val) return;
    r.clear();
    const f = 0.18 * s.gridSize.val * 0.6;
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((v, C) => {
      const z = w.val[C];
      if (!z) return;
      const g = new Ne(_, y);
      g.position.set(...z);
      const q = f * p.rawVal;
      g.scale.set(q, q, q), r.add(g);
    });
  }), B.derive(() => {
    if (p.val, !s.supports.rawVal) return;
    const v = 0.18 * s.gridSize.val * 0.6 * p.rawVal;
    r.children.forEach((C) => C.scale.set(v, v, v));
  }), B.derive(() => {
    r.visible = s.supports.val;
  }), r;
}
function Ao(e, s, w, p) {
  const r = new Ze();
  r.name = "loadsGroup";
  function _(y) {
    if (y.length < 2) return 0.12 * s.gridSize.rawVal;
    const f = [1 / 0, 1 / 0, 1 / 0], v = [-1 / 0, -1 / 0, -1 / 0];
    for (const z of y) for (let g = 0; g < 3; g++) f[g] = Math.min(f[g], z[g]), v[g] = Math.max(v[g], z[g]);
    return 0.08 * Math.max(v[0] - f[0], v[1] - f[1], v[2] - f[2], 0.1);
  }
  return B.derive(() => {
    var _a, _b, _c;
    if (s.deformedShape.val, !s.loads.val) return;
    r.children.forEach((v) => v.dispose()), r.clear();
    const y = w.val, f = _(y);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((v, C) => {
      const z = y[C];
      if (!z) return;
      const g = new b(...v.slice(0, 3));
      if (g.lengthSq() < 1e-30) return;
      g.normalize();
      const q = new Xt(g, new b(...z), 1, 15637248, 0.3, 0.3), j = f * p.rawVal;
      q.scale.set(j, j, j), r.add(q);
    });
  }), B.derive(() => {
    if (p.val, !s.loads.rawVal) return;
    const f = _(w.rawVal) * p.rawVal;
    r.children.forEach((v) => v.scale.set(f, f, f));
  }), B.derive(() => {
    r.visible = s.loads.val;
  }), r;
}
function To(e, s, w) {
  const p = new Ze();
  return B.derive(() => {
    if (!e.nodesIndexes.val) return;
    p.children.forEach((_) => _.dispose()), p.clear();
    const r = 0.05 * e.gridSize.val * 0.6;
    s.val.forEach((_, y) => {
      const f = new lt(`${y}`);
      f.position.set(..._), f.updateScale(r * w.rawVal), p.add(f);
    });
  }), B.derive(() => {
    if (w.val, !e.nodesIndexes.rawVal) return;
    const r = 0.05 * e.gridSize.val * 0.6;
    p.children.forEach((_) => _.updateScale(r * w.rawVal));
  }), B.derive(() => {
    p.visible = e.nodesIndexes.val;
  }), p;
}
function Eo(e, s, w, p) {
  const r = new Ze();
  return B.derive(() => {
    var _a;
    if (s.deformedShape.val, !s.elementsIndexes.val) return;
    r.children.forEach((y) => y.dispose()), r.clear();
    const _ = 0.05 * s.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((y, f) => {
      const v = new lt(`${f}`, void 0, "#001219");
      v.position.set(...Lo(y.map((C) => w.rawVal[C]))), v.updateScale(_ * p.rawVal), r.add(v);
    });
  }), B.derive(() => {
    if (p.val, !s.elementsIndexes.rawVal) return;
    const _ = 0.05 * s.gridSize.val * 0.6;
    r.children.forEach((y) => y.updateScale(_ * p.rawVal));
  }), B.derive(() => {
    r.visible = s.elementsIndexes.val;
  }), r;
}
function Lo(e) {
  const s = e.reduce((p, r) => [p[0] + r[0], p[1] + r[1], p[2] + r[2]], [0, 0, 0]), w = e.length;
  return [s[0] / w, s[1] / w, s[2] / w];
}
function qn(e, s) {
  const w = new Ze(), p = 0.05 * e * 1, r = $t(), _ = new lt("X", "red", "transparent"), y = new lt(s ? "Z" : "Y", "green", "transparent"), f = new lt(s ? "Y" : "Z", "blue", "transparent"), v = new Xt(new b(1, 0, 0), new b(0, 0, 0), 1, r.axisArrow, 0.2, 0.2), C = new Xt(new b(0, 1, 0), new b(0, 0, 0), 1, r.axisArrow, 0.2, 0.2), z = new Xt(new b(0, 0, 1), new b(0, 0, 0), 1, r.axisArrow, 0.2, 0.2);
  return _.position.set(1.3 * p, 0, 0), y.position.set(0, 1.3 * p, 0), f.position.set(0, 0, 1.3 * p), _.updateScale(0.4 * p), y.updateScale(0.4 * p), f.updateScale(0.4 * p), v.scale.set(p, p, p), C.scale.set(p, p, p), z.scale.set(p, p, p), w.add(v, C, z, _, y, f), w;
}
function Fn(e, s) {
  const w = new b(...e), r = new b(...s).clone().sub(w), _ = r.length(), y = r.dot(new b(1, 0, 0)) / _, f = r.dot(new b(0, 1, 0)) / _, v = r.dot(new b(0, 0, 1)) / _, C = Math.sqrt(y ** 2 + f ** 2);
  let z = new Mn().fromArray([[y, f, v], [-f / C, y / C, 0], [-y * v / C, -f * v / C, C]].flat());
  return v === 1 && (z = new Mn().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), v === -1 && (z = new Mn().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new to().setFromMatrix3(z);
}
function zn(e, s) {
  return e == null ? void 0 : e.map((w, p) => (9 * w + s[p]) / 10);
}
function Ot(e) {
  const s = e.reduce((p, r) => [p[0] + r[0], p[1] + r[1], p[2] + r[2]], [0, 0, 0]), w = e.length;
  return [s[0] / w, s[1] / w, s[2] / w];
}
function $o(e, s, w) {
  const p = Ot([s, w]), r = Ot([e, w]), _ = Ot([e, s]), y = new b(...p).sub(new b(...r)).normalize(), f = new b(...w).sub(new b(..._)).normalize(), v = y.clone().cross(f).normalize(), C = v.clone().cross(y).normalize();
  return new to().makeBasis(y, C, v);
}
function Io(e, s, w, p) {
  const r = new Ze(), _ = new ue(), y = new Oe({ vertexColors: true }), f = [0, 0, 0], v = [1, 0, 0], C = [0, 1, 0], z = [0, 0, 1];
  _.setAttribute("position", new nt([...f, ...v, ...f, ...C, ...f, ...z], 3));
  const g = [255, 0, 0], q = [0, 255, 0], j = [0, 0, 255];
  return _.setAttribute("color", new nt([...g, ...g, ...q, ...q, ...j, ...j], 3)), B.derive(() => {
    var _a;
    s.deformedShape.val, s.orientations.val && (r.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((J) => {
      const we = new Tt(_, y), k = w.rawVal[J[0]], te = w.rawVal[J[1]];
      if (J.length === 2 && (we.position.set(...zn(k, te)), we.rotation.setFromRotationMatrix(Fn(k, te))), J.length === 3) {
        const K = w.rawVal[J[2]];
        we.position.set(...Ot([k, te, K])), we.rotation.setFromRotationMatrix($o(k, te, K));
      }
      const xe = 0.05 * s.gridSize.rawVal * 0.75 * p.rawVal;
      we.scale.set(xe, xe, xe), r.add(we);
    }));
  }), B.derive(() => {
    if (p.val, !s.orientations.rawVal) return;
    const we = 0.05 * s.gridSize.val * 0.75 * p.rawVal;
    r.children.forEach((k) => k.scale.set(we, we, we));
  }), B.derive(() => {
    r.visible = s.orientations.val;
  }), r;
}
function Xo(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const s = (e.b * 100).toFixed(0), w = (e.h * 100).toFixed(0);
    return `${s}x${w}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function Yo(e, s, w, p) {
  const r = new Ze();
  function _(V, X) {
    const F = V / 2, P = X / 2, T = new Float32Array([0, -F, -P, 0, F, -P, 0, F, P, 0, -F, -P, 0, F, P, 0, -F, P]), $ = new ue();
    $.setAttribute("position", new Ue(T, 3));
    const A = new Float32Array([0, -F, -P, 0, F, -P, 0, F, P, 0, -F, P, 0, -F, -P]), Y = new ue();
    return Y.setAttribute("position", new Ue(A, 3)), { fill: $, outline: Y };
  }
  function y(V, X = 24) {
    const F = V / 2, P = new Float32Array(X * 9);
    for (let Y = 0; Y < X; Y++) {
      const U = Y / X * Math.PI * 2, ne = (Y + 1) / X * Math.PI * 2;
      P[Y * 9] = 0, P[Y * 9 + 1] = 0, P[Y * 9 + 2] = 0, P[Y * 9 + 3] = 0, P[Y * 9 + 4] = F * Math.cos(U), P[Y * 9 + 5] = F * Math.sin(U), P[Y * 9 + 6] = 0, P[Y * 9 + 7] = F * Math.cos(ne), P[Y * 9 + 8] = F * Math.sin(ne);
    }
    const T = new ue();
    T.setAttribute("position", new Ue(P, 3));
    const $ = new Float32Array((X + 1) * 3);
    for (let Y = 0; Y <= X; Y++) {
      const U = Y / X * Math.PI * 2;
      $[Y * 3] = 0, $[Y * 3 + 1] = F * Math.cos(U), $[Y * 3 + 2] = F * Math.sin(U);
    }
    const A = new ue();
    return A.setAttribute("position", new Ue($, 3)), { fill: T, outline: A };
  }
  function f(V, X, F, P) {
    const T = F ?? X * 0.08, $ = P ?? V * 0.07, A = V / 2, Y = X / 2, U = Y - T, ne = $ / 2, O = [];
    function E(re, Me, ke, _e) {
      O.push(0, re, Me, 0, ke, Me, 0, ke, _e, 0, re, Me, 0, ke, _e, 0, re, _e);
    }
    E(-A, -Y, A, -U), E(-ne, -U, ne, U), E(-A, U, A, Y);
    const Z = new ue();
    Z.setAttribute("position", new Ue(new Float32Array(O), 3));
    const pe = new Float32Array([0, -A, -Y, 0, A, -Y, 0, A, -U, 0, ne, -U, 0, ne, U, 0, A, U, 0, A, Y, 0, -A, Y, 0, -A, U, 0, -ne, U, 0, -ne, -U, 0, -A, -U, 0, -A, -Y]), ae = new ue();
    return ae.setAttribute("position", new Ue(pe, 3)), { fill: Z, outline: ae };
  }
  function v(V, X, F) {
    const P = V / 2, T = X / 2, $ = P - F, A = T - F, Y = [];
    function U(Z, pe, ae, re) {
      Y.push(0, Z, pe, 0, ae, pe, 0, ae, re, 0, Z, pe, 0, ae, re, 0, Z, re);
    }
    U(-P, -T, P, -A), U(-P, A, P, T), U(-P, -A, -$, A), U($, -A, P, A);
    const ne = new ue();
    ne.setAttribute("position", new Ue(new Float32Array(Y), 3));
    const O = new Float32Array([0, -P, -T, 0, P, -T, 0, P, -T, 0, P, T, 0, P, T, 0, -P, T, 0, -P, T, 0, -P, -T, 0, -$, -A, 0, $, -A, 0, $, -A, 0, $, A, 0, $, A, 0, -$, A, 0, -$, A, 0, -$, -A]), E = new ue();
    return E.setAttribute("position", new Ue(O, 3)), { fill: ne, outline: E };
  }
  function C(V, X, F) {
    const P = V / 2, T = X / 2, $ = P - F, A = T - F, Y = new ue(), U = new Float32Array([0, -$, -A, 0, $, -A, 0, $, A, 0, -$, -A, 0, $, A, 0, -$, A]);
    Y.setAttribute("position", new Ue(U, 3));
    const ne = [];
    function O(ae, re, Me, ke) {
      ne.push(0, ae, re, 0, Me, re, 0, Me, ke, 0, ae, re, 0, Me, ke, 0, ae, ke);
    }
    O(-P, -T, P, -A), O(-P, A, P, T), O(-P, -A, -$, A), O($, -A, P, A);
    const E = new ue();
    E.setAttribute("position", new Ue(new Float32Array(ne), 3));
    const Z = new Float32Array([0, -P, -T, 0, P, -T, 0, P, -T, 0, P, T, 0, P, T, 0, -P, T, 0, -P, T, 0, -P, -T, 0, -$, -A, 0, $, -A, 0, $, -A, 0, $, A, 0, $, A, 0, -$, A, 0, -$, A, 0, -$, -A]), pe = new ue();
    return pe.setAttribute("position", new Ue(Z, 3)), { concFill: Y, steelFillGeom: E, outline: pe };
  }
  function z(V, X, F) {
    const P = [], T = [[0, -V / 2, -X / 2], [0, -V / 2 + F, -X / 2], [0, -V / 2 + F, X / 2 - F], [0, V / 2, X / 2 - F], [0, V / 2, X / 2], [0, -V / 2, X / 2]], $ = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const ne of $) P.push(...T[ne]);
    const A = new ue();
    A.setAttribute("position", new Ue(new Float32Array(P), 3));
    const Y = [];
    for (let ne = 0; ne < T.length; ne++) {
      const O = (ne + 1) % T.length;
      Y.push(...T[ne], ...T[O]);
    }
    const U = new ue();
    return U.setAttribute("position", new Ue(new Float32Array(Y), 3)), { fill: A, outline: U };
  }
  function g(V, X, F, P) {
    const T = P / 2, $ = [], A = [[0, -V - T, -X / 2], [0, -F - T, -X / 2], [0, -F - T, X / 2 - F], [0, -T, X / 2 - F], [0, -T, X / 2], [0, -V - T, X / 2]], Y = [[0, T, -X / 2], [0, T + F, -X / 2], [0, T + F, X / 2 - F], [0, V + T, X / 2 - F], [0, V + T, X / 2], [0, T, X / 2]], U = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const Z of U) $.push(...A[Z]);
    for (const Z of U) $.push(...Y[Z]);
    const ne = new ue();
    ne.setAttribute("position", new Ue(new Float32Array($), 3));
    const O = [];
    for (const Z of [A, Y]) for (let pe = 0; pe < Z.length; pe++) {
      const ae = (pe + 1) % Z.length;
      O.push(...Z[pe], ...Z[ae]);
    }
    const E = new ue();
    return E.setAttribute("position", new Ue(new Float32Array(O), 3)), { fill: ne, outline: E };
  }
  function q(V, X, F, P) {
    const T = X / 2, $ = V, A = [[0, -$, -T], [0, -$, -T + F], [0, -P, -T + F], [0, -P, T - F], [0, -$, T - F], [0, -$, T], [0, 0, T], [0, 0, -T]], Y = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], U = [];
    for (const Z of Y) U.push(...A[Z]);
    const ne = new ue();
    ne.setAttribute("position", new Ue(new Float32Array(U), 3));
    const O = [];
    for (let Z = 0; Z < A.length; Z++) {
      const pe = (Z + 1) % A.length;
      O.push(...A[Z], ...A[pe]);
    }
    const E = new ue();
    return E.setAttribute("position", new Ue(new Float32Array(O), 3)), { fill: ne, outline: E };
  }
  function j(V, X, F, P, T) {
    const $ = X / 2, A = T / 2, Y = [], U = [[0, -V, -$], [0, -V, -$ + F], [0, -A - P, -$ + F], [0, -A - P, $ - F], [0, -V, $ - F], [0, -V, $], [0, -A, $], [0, -A, -$]], ne = U.map((ae) => [ae[0], -ae[1], ae[2]]), O = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const ae of O) Y.push(...U[ae]);
    for (const ae of O) Y.push(...ne[ae]);
    const E = new ue();
    E.setAttribute("position", new Ue(new Float32Array(Y), 3));
    const Z = [];
    for (const ae of [U, ne]) for (let re = 0; re < ae.length; re++) {
      const Me = (re + 1) % ae.length;
      Z.push(...ae[re], ...ae[Me]);
    }
    const pe = new ue();
    return pe.setAttribute("position", new Ue(new Float32Array(Z), 3)), { fill: E, outline: pe };
  }
  function J(V, X, F, P) {
    const T = V / 2, $ = X / 2, A = P / 2, Y = [[0, -A, -$], [0, A, -$], [0, A, $ - F], [0, T, $ - F], [0, T, $], [0, -T, $], [0, -T, $ - F], [0, -A, $ - F]], U = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], ne = [];
    for (const pe of U) ne.push(...Y[pe]);
    const O = new ue();
    O.setAttribute("position", new Ue(new Float32Array(ne), 3));
    const E = [];
    for (let pe = 0; pe < Y.length; pe++) {
      const ae = (pe + 1) % Y.length;
      E.push(...Y[pe], ...Y[ae]);
    }
    const Z = new ue();
    return Z.setAttribute("position", new Ue(new Float32Array(E), 3)), { fill: O, outline: Z };
  }
  function we(V, X, F = 24) {
    const P = V / 2, T = P - X, $ = [];
    for (let ne = 0; ne < F; ne++) {
      const O = ne / F * Math.PI * 2, E = (ne + 1) / F * Math.PI * 2, Z = Math.cos(O), pe = Math.sin(O), ae = Math.cos(E), re = Math.sin(E);
      $.push(0, P * Z, P * pe, 0, P * ae, P * re, 0, T * ae, T * re), $.push(0, P * Z, P * pe, 0, T * ae, T * re, 0, T * Z, T * pe);
    }
    const A = new ue();
    A.setAttribute("position", new Ue(new Float32Array($), 3));
    const Y = [];
    for (let ne = 0; ne < F; ne++) {
      const O = ne / F * Math.PI * 2, E = (ne + 1) / F * Math.PI * 2;
      Y.push(0, P * Math.cos(O), P * Math.sin(O), 0, P * Math.cos(E), P * Math.sin(E)), Y.push(0, T * Math.cos(O), T * Math.sin(O), 0, T * Math.cos(E), T * Math.sin(E));
    }
    const U = new ue();
    return U.setAttribute("position", new Ue(new Float32Array(Y), 3)), { fill: A, outline: U };
  }
  const k = new Ke({ color: 52479, transparent: true, opacity: 0.35, side: xt, depthWrite: false }), te = new Oe({ color: 52479 }), le = new Ke({ color: 16750848, transparent: true, opacity: 0.4, side: xt, depthWrite: false }), xe = new Oe({ color: 16750848 });
  function K(V, X) {
    const F = Math.abs(X[0] - V[0]), P = Math.abs(X[1] - V[1]), T = Math.abs(X[2] - V[2]);
    return T > F && T > P || P > F && P > T;
  }
  return B.derive(() => {
    var _a, _b;
    s.deformedShape.val, s.secColumns.val, s.secBeams.val, s.secFloor.val;
    const V = s.secColumns.rawVal, X = s.secBeams.rawVal;
    if (!V && !X) {
      r.children.forEach((A) => {
        A instanceof lt && A.dispose();
      }), r.clear();
      return;
    }
    r.children.forEach((A) => {
      A instanceof lt && A.dispose();
    }), r.clear();
    const F = (_a = e.elements) == null ? void 0 : _a.val, P = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!F || !P) return;
    const T = P.sectionShapes, $ = s.secFloor.rawVal;
    F.forEach((A, Y) => {
      if (A.length !== 2) return;
      const U = w.rawVal[A[0]], ne = w.rawVal[A[1]];
      if (!U || !ne) return;
      const O = K(U, ne);
      if (O && !V || !O && !X) return;
      if ($ >= 0) {
        const re = Math.min(U[1], ne[1]);
        Math.max(U[1], ne[1]);
        const Me = s.gridSize.rawVal || 3;
        if (Math.floor(re / Me + 0.01) !== $) return;
      }
      const E = T == null ? void 0 : T.get(Y);
      if (!E) return;
      const Z = [(U[0] + ne[0]) / 2, (U[1] + ne[1]) / 2, (U[2] + ne[2]) / 2], pe = Fn(U, ne);
      if (E.type === "CFT") {
        const re = C(E.b, E.h, E.tw ?? E.b * 0.05), Me = new Ne(re.concFill, k);
        Me.position.set(...Z), Me.rotation.setFromRotationMatrix(pe), r.add(Me);
        const ke = new Ne(re.steelFillGeom, le);
        ke.position.set(...Z), ke.rotation.setFromRotationMatrix(pe), r.add(ke);
        const _e = new ht(re.outline, xe);
        _e.position.set(...Z), _e.rotation.setFromRotationMatrix(pe), r.add(_e);
      } else {
        let re, Me, ke;
        switch (E.type) {
          case "rect":
            re = _(E.b, E.h), Me = k, ke = te;
            break;
          case "circ":
            re = y(E.d), Me = k, ke = te;
            break;
          case "I":
            re = f(E.b, E.h, E.tf, E.tw), Me = le, ke = xe;
            break;
          case "HSS":
            re = v(E.b, E.h, E.tw ?? E.b * 0.05), Me = le, ke = xe;
            break;
          case "CFT":
            re = C(E.b, E.h, E.tw ?? E.b * 0.05), Me = le, ke = xe;
            break;
          case "L":
            re = z(E.b ?? E.h, E.h, E.t ?? E.tw ?? 3e-3), Me = le, ke = xe;
            break;
          case "2L":
            re = g(E.b ?? E.h, E.h, E.t ?? E.tw ?? 3e-3, E.dis ?? 0.01), Me = le, ke = xe;
            break;
          case "C":
          case "coldC":
            re = q(E.b, E.h, E.tf ?? E.t ?? 3e-3, E.tw ?? E.t ?? 3e-3), Me = le, ke = xe;
            break;
          case "2C":
            re = j(E.b, E.h, E.tf ?? 5e-3, E.tw ?? 5e-3, E.dis ?? 0.01), Me = le, ke = xe;
            break;
          case "T":
            re = J(E.b, E.h, E.tf ?? 0.01, E.tw ?? 6e-3), Me = le, ke = xe;
            break;
          case "pipe":
            re = we(E.d, E.tw ?? E.d * 0.05), Me = le, ke = xe;
            break;
          default:
            return;
        }
        const _e = new Ne(re.fill, Me);
        _e.position.set(...Z), _e.rotation.setFromRotationMatrix(pe), r.add(_e);
        const Ce = new ht(re.outline, ke);
        Ce.position.set(...Z), Ce.rotation.setFromRotationMatrix(pe), r.add(Ce);
      }
      const ae = Xo(E);
      if (ae) {
        const Me = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(E.type) ? "#ff9900" : "#00ccff", ke = new lt(ae, Me, "transparent");
        ke.position.set(Z[0], Z[1], Z[2]);
        const _e = 0.05 * s.gridSize.rawVal * 0.5;
        ke.updateScale(_e * ((p == null ? void 0 : p.rawVal) ?? 1)), r.add(ke);
      }
    });
  }), p && B.derive(() => {
    if (p.val, !s.sections.rawVal) return;
    const V = 0.05 * s.gridSize.val * 0.5;
    r.children.forEach((X) => {
      X instanceof lt && X.updateScale(V * p.rawVal);
    });
  }), B.derive(() => {
    r.visible = s.sections.val;
  }), r;
}
class ln extends Ze {
  constructor(s, w, p, r, _, y, f) {
    super();
    const v = new pn().moveTo(0, 0).lineTo(0, y[1]).lineTo(p, y[1]).lineTo(p, 0).lineTo(0, 0), C = v.getPoints(), z = new ue().setFromPoints(C);
    this.lines = new ht(z, new Oe({ color: $t().resultOutline })), this.lines.position.set(...s), this.lines.rotation.setFromRotationMatrix(r), f && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const g = new fn(v), q = new Ke({ color: y[1] > 0 ? 24435 : 11411474, side: xt });
    this.mesh = new Ne(g, q), this.mesh.position.set(...s), this.mesh.rotation.setFromRotationMatrix(r), f && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new lt(`${_[1].toFixed(4)}`), this.normalizedResult = y, this.textPosition = Ot([s, w]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(r), this.add(this.text);
  }
  updateScale(s) {
    this.lines.scale.set(1, s * 2, 1), this.mesh.scale.set(1, s * 2, 1), this.text.updateScale(s * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * s);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Jn extends Ze {
  constructor(s, w, p, r, _, y, f) {
    super();
    const v = _[0] * p / (_[0] + _[1]), C = _[0] * _[1] > 0;
    if (this.text = new lt(`${_[0].toFixed(4)}`), this.text2 = new lt(`${(_[1] * -1).toFixed(4)}`), this.normalizedResult = y, this.textPosition = zn(s, w), this.text2Position = zn(w, s), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(r), this.text2.rotation.setFromRotationMatrix(r), this.add(this.text, this.text2), C) {
      const z = new pn().moveTo(0, 0).lineTo(0, y[0]).lineTo(v, 0).lineTo(0, 0), g = new pn().moveTo(v, 0).lineTo(p, -y[1]).lineTo(p, 0).lineTo(v, 0), q = z.getPoints(), j = g.getPoints(), J = new ue().setFromPoints(q), we = new ue().setFromPoints(j), k = new Oe({ color: $t().resultOutline });
      this.lines = new ht(J, k), this.lines2 = new ht(we, k), this.lines.position.set(...s), this.lines2.position.set(...s), this.lines.rotation.setFromRotationMatrix(r), this.lines2.rotation.setFromRotationMatrix(r), f && this.lines.rotateX(Math.PI / 2), f && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const te = new fn(z), le = new fn(g), xe = new Ke({ color: y[0] > 0 ? 24435 : 11411474, side: xt }), K = new Ke({ color: -y[1] > 0 ? 24435 : 11411474, side: xt });
      this.mesh = new Ne(te, xe), this.mesh2 = new Ne(le, K), this.mesh.position.set(...s), this.mesh2.position.set(...s), this.mesh.rotation.setFromRotationMatrix(r), this.mesh2.rotation.setFromRotationMatrix(r), f && this.mesh.rotateX(Math.PI / 2), f && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const z = new pn().moveTo(0, 0).lineTo(0, y[0]).lineTo(p, -y[1]).lineTo(p, 0).lineTo(0, 0), g = z.getPoints(), q = new ue().setFromPoints(g);
      this.lines = new ht(q, new Oe({ color: $t().resultOutline })), this.lines.position.set(...s), this.lines.rotation.setFromRotationMatrix(r), f && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const j = new fn(z), J = new Ke({ color: y[0] > 0 ? 24435 : 11411474, side: xt });
      this.mesh = new Ne(j, J), this.mesh.position.set(...s), this.mesh.rotation.setFromRotationMatrix(r), f && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var oo = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(oo || {});
function Ro(e, s, w, p) {
  const r = new Ze(), _ = { normals: ln, shearsY: ln, shearsZ: ln, torsions: ln, bendingsY: Jn, bendingsZ: Jn };
  return B.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, w.val, s.frameResults.val == "none") return;
    r.children.forEach((f) => f.dispose()), r.clear();
    const y = oo[s.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[y]) == null ? void 0 : _b.forEach((f, v) => {
      var _a2, _b2;
      const C = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[v]) ?? [0, 1], z = w.rawVal[C[0]], g = w.rawVal[C[1]], q = new b(...g).distanceTo(new b(...z)), j = Bo((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[y]), J = f == null ? void 0 : f.map((le) => le / (j === 0 ? 1 : j)), we = Fn(z, g), k = new _[y](z, g, q, we, f ?? [0, 0], J ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(y)), te = 0.05 * s.gridSize.rawVal;
      k.updateScale(te * p.rawVal), r.add(k);
    });
  }), B.derive(() => {
    if (p.val, s.frameResults.rawVal == "none") return;
    const y = 0.05 * s.gridSize.val;
    r.children.forEach((f) => f.updateScale(y * p.rawVal));
  }), B.derive(() => {
    r.visible = s.frameResults.val != "none";
  }), r;
}
function Bo(e) {
  let s = 0;
  return e == null ? void 0 : e.forEach((w) => {
    const p = Math.max(...w ?? [0, 0]);
    p > s && (s = p);
  }), s;
}
class Do extends Ze {
  constructor(s, w, p) {
    super();
    const r = w === Vn.reactions;
    p[0] && (this.xText1 = new lt(`${r ? "Fx" : "Dx"}: ` + p[0].toFixed(4))), p[3] && (this.xText2 = new lt(`${r ? "Mx" : "Rx"}: ` + p[3].toFixed(4))), p[1] && (this.yText1 = new lt(`${r ? "Fy" : "Dy"}: ` + p[1].toFixed(4))), p[4] && (this.yText2 = new lt(`${r ? "My" : "Ry"}: ` + p[4].toFixed(4))), p[2] && (this.zText1 = new lt(`${r ? "Fz" : "Dz"}: ` + p[2].toFixed(4))), p[5] && (this.zText2 = new lt(`${r ? "Mz" : "Rz"}: ` + p[5].toFixed(4))), (p[0] || p[3]) && (this.xArrow = new Xt(new b(1, 0, 0), new b(0, 0, 0), 1, 15637248, 0.3, 0.3)), (p[1] || p[4]) && (this.yArrow = new Xt(new b(0, 1, 0), new b(0, 0, 0), 1, 15637248, 0.3, 0.3)), (p[2] || p[5]) && (this.zArrow = new Xt(new b(0, 0, 1), new b(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...s), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
  }
  updateScale(s) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2;
    (_a = this.xArrow) == null ? void 0 : _a.scale.set(s, s, s), (_b = this.yArrow) == null ? void 0 : _b.scale.set(s, s, s), (_c = this.zArrow) == null ? void 0 : _c.scale.set(s, s, s), (_d = this.xText1) == null ? void 0 : _d.position.set(1.3 * s, 0, 0), (_e = this.xText2) == null ? void 0 : _e.position.set(1.3 * s, 0, 0.5 * s), (_f = this.yText1) == null ? void 0 : _f.position.set(0, 1.3 * s, 0), (_g = this.yText2) == null ? void 0 : _g.position.set(0, 1.3 * s, 0.5 * s), (_h = this.zText1) == null ? void 0 : _h.position.set(0, 0, 1.3 * s), (_i = this.zText2) == null ? void 0 : _i.position.set(0, 0, 1.3 * s + 0.5 * s), (_j = this.xText1) == null ? void 0 : _j.updateScale(0.4 * s), (_k = this.xText2) == null ? void 0 : _k.updateScale(0.4 * s), (_l = this.yText1) == null ? void 0 : _l.updateScale(0.4 * s), (_m = this.yText2) == null ? void 0 : _m.updateScale(0.4 * s), (_n2 = this.zText1) == null ? void 0 : _n2.updateScale(0.4 * s), (_o2 = this.zText2) == null ? void 0 : _o2.updateScale(0.4 * s);
  }
  dispose() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    (_a = this.xArrow) == null ? void 0 : _a.dispose(), (_b = this.yArrow) == null ? void 0 : _b.dispose(), (_c = this.zArrow) == null ? void 0 : _c.dispose(), (_d = this.xText1) == null ? void 0 : _d.dispose(), (_e = this.xText2) == null ? void 0 : _e.dispose(), (_f = this.yText1) == null ? void 0 : _f.dispose(), (_g = this.yText2) == null ? void 0 : _g.dispose(), (_h = this.zText1) == null ? void 0 : _h.dispose(), (_i = this.zText2) == null ? void 0 : _i.dispose();
  }
}
var Vn = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(Vn || {});
function No(e, s, w, p) {
  const r = new Ze();
  return B.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, s.nodeResults.val == "none") return;
    r.children.forEach((f) => f.dispose()), r.clear();
    const _ = Vn[s.nodeResults.rawVal], y = 0.05 * s.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[_]) == null ? void 0 : _b.forEach((f, v) => {
      const C = new Do(w.rawVal[v], _, f ?? [0, 0, 0, 0, 0, 0]);
      C.updateScale(y * p.rawVal), r.add(C);
    });
  }), B.derive(() => {
    if (p.val, s.nodeResults.rawVal == "none") return;
    const _ = 0.05 * s.gridSize.val;
    r.children.forEach((y) => y.updateScale(_ * p.rawVal));
  }), B.derive(() => {
    r.visible = s.nodeResults.val != "none";
  }), r;
}
function Zo({ drawingObj: e, gridObj: s, scene: w, getActiveCamera: p, controls: r, gridSize: _, derivedDisplayScale: y, rendererElm: f, viewerRender: v }) {
  const C = new fo(), z = new uo(), g = (n) => {
    const o = f.getBoundingClientRect(), a = n.clientX - o.left, t = n.clientY - o.top, h = o.width || 1, d = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const i = h / 2;
      if (a >= i) return z.x = (a - i) / i * 2 - 1, z.y = -(t / d) * 2 + 1, window.__hekatanSplitCamera ?? p();
      z.x = a / i * 2 - 1;
    } else z.x = a / h * 2 - 1;
    return z.y = -(t / d) * 2 + 1, p();
  }, q = new Ne(new on(1e4, 1e4), new Ke({ side: xt, transparent: true, opacity: 0, depthWrite: false }));
  q.visible = true, q.frustumCulled = false, w.add(q);
  const j = (n, o, a) => {
    const t = new Ne(new on(1e4, 1e4), new Ke({ side: xt, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, a), t.visible = false, t.frustumCulled = false, w.add(t), t;
  }, J = j(Math.PI / 2, 0, 0), we = j(0, Math.PI / 2, 0), k = () => {
    if (J.visible = !!window.__hekatanGridPlaneXZ, we.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanShowOrthoPlanes !== false && I.visible) {
      const a = C.intersectObjects([I, W, H], false);
      if (a.length > 0) return a;
    }
    const o = [q];
    return J.visible && o.push(J), we.visible && o.push(we), St.visible && Pt.length > 0 && o.push(...Pt), C.intersectObjects(o, false);
  }, te = new cn(new ue(), new dn()), le = new cn(new ue(), new dn({ color: "gray", sizeAttenuation: false, size: 6 })), xe = new cn(new ue(), new dn({ color: "orange", size: 0.1 }));
  w.add(xe);
  const K = document.createElement("input");
  K.id = "hk-rubber-label", K.type = "text", K.spellcheck = false, K.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, K.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none"].join(";") + ";", document.body.appendChild(K);
  let V = null, X = null, F = false;
  const P = new b(), T = (n, o, a, t, h, d) => {
    const S = t - n, i = h - o, l = d - a, u = Math.hypot(S, i, l);
    if (u < 0.01) {
      K.style.display = "none";
      return;
    }
    V = [n, o, a], X = [S / u, i / u, l / u], P.set((n + t) / 2, (o + h) / 2, (a + d) / 2), P.project(p());
    const x = f.getBoundingClientRect(), c = x.left + (P.x * 0.5 + 0.5) * x.width, m = x.top + (-P.y * 0.5 + 0.5) * x.height;
    if (K.style.left = c + "px", K.style.top = m + "px", K.style.display = "block", !F) {
      if (K.value = `${u.toFixed(2)} m`, document.activeElement !== K) {
        const M = document.activeElement;
        M && (M.tagName === "INPUT" || M.tagName === "TEXTAREA") && M !== K || K.focus({ preventScroll: true });
      }
      try {
        K.select();
      } catch {
      }
    }
  }, $ = () => {
    K.style.display = "none", V = null, X = null, F = false, document.activeElement === K && K.blur();
  }, A = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      dt = n, ye(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), K.blur();
      return;
    }
    if (!V || !X || !e.polylines) return;
    let a = X[0], t = X[1], h = X[2];
    ze === "x" ? (a = Math.sign(a) || 1, t = 0, h = 0) : ze === "y" ? (a = 0, t = Math.sign(t) || 1, h = 0) : ze === "z" && (a = 0, t = 0, h = Math.sign(h) || 1);
    const d = V[0] + a * n, S = V[1] + t * n, i = V[2] + h * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [d, S, i]];
    const l = e.polylines.rawVal, u = l.length ? l[l.length - 1] : [];
    e.polylines.val = [...l.slice(0, -1), [...u, e.points.rawVal.length - 1]], K.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    v();
  }, Y = (n) => {
    let o = n.trim().toLowerCase().replace(/m$/g, "").trim();
    if (!o) return null;
    const a = o.startsWith("@");
    if (a && (o = o.slice(1)), o.includes("<")) {
      const h = o.split("<").map((d) => parseFloat(d.trim()));
      if (h.some(isNaN)) return null;
      if (h.length === 2) {
        const [d, S] = h;
        return a ? { kind: "relPolar", L: d, ang: S } : { kind: "absPolar", L: d, ang: S };
      }
      if (h.length === 3 && a) {
        const [d, S, i] = h;
        return { kind: "relSpherical", L: d, az: S, el: i };
      }
      return null;
    }
    if (o.includes(",")) {
      const h = o.split(",").map((l) => parseFloat(l.trim()));
      if (h.some(isNaN)) return null;
      const [d, S, i = 0] = h;
      return a ? { kind: "relCart", dx: d, dy: S, dz: i } : { kind: "absCart", x: d, y: S, z: i };
    }
    const t = parseFloat(o);
    return isNaN(t) || t <= 0 ? null : { kind: "length", L: t };
  }, U = (n) => {
    if (!n) return null;
    if (n.kind === "absCart") return [n.x, n.y, n.z];
    if (n.kind === "relCart") return V ? [V[0] + n.dx, V[1] + n.dy, V[2] + n.dz] : null;
    if (n.kind === "absPolar") {
      const o = n.ang * Math.PI / 180;
      return [n.L * Math.cos(o), n.L * Math.sin(o), 0];
    }
    if (n.kind === "relPolar") {
      if (!V) return null;
      const o = n.ang * Math.PI / 180;
      return [V[0] + n.L * Math.cos(o), V[1] + n.L * Math.sin(o), V[2]];
    }
    if (n.kind === "relSpherical") {
      if (!V) return null;
      const o = n.az * Math.PI / 180, a = n.el * Math.PI / 180, t = n.L * Math.cos(a);
      return [V[0] + t * Math.cos(o), V[1] + t * Math.sin(o), V[2] + n.L * Math.sin(a)];
    }
    return null;
  }, ne = (n) => {
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
  K.addEventListener("keydown", (n) => {
    if (n.key === "Enter") {
      n.preventDefault();
      const a = Y(K.value);
      if (!a) return;
      if (F = false, a.kind === "length") A(a.L), ye(`\u270F DDE ${a.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = U(a);
        if (!t) return;
        ne(t);
        const h = a.kind;
        ye(`\u270F ${h} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
      }
      return;
    }
    if (n.key === "Escape") {
      n.preventDefault(), F = false, K.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!F && K.style.display === "block") try {
          K.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && (F = true);
  }), window.addEventListener("keydown", (n) => {
    if (!V || !X || document.activeElement === K) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (K.value = n.key, K.focus(), K.setSelectionRange(1, 1), n.preventDefault());
  });
  const O = document.createElement("div");
  O.id = "hk-coord-readout", O.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", O.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(O);
  const E = document.createElement("div");
  E.id = "hk-coord-fixed", E.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", E.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(E);
  const Z = new ht(new ue().setFromPoints([new b(0, 0, 0), new b(0, 0, 0)]), new Jt({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  Z.frustumCulled = false, Z.visible = false, w.add(Z);
  const pe = new Ze();
  pe.frustumCulled = false, pe.visible = false, w.add(pe);
  const ae = (n) => {
    const o = new ue().setFromPoints([new b(0, 0, 0), new b(0, 0, 0)]), a = new Jt({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new ht(o, a);
  }, re = ae(16711680), Me = ae(65280), ke = ae(35071);
  pe.add(re, Me, ke);
  const _e = (n) => {
    const o = new ue().setFromPoints([new b(0, 0, 0), new b(0, 0, 0), new b(0, 0, 0), new b(0, 0, 0)]), a = new Oe({ color: n, transparent: true, opacity: 0.45, depthTest: false }), t = new eo(o, a);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, Ce = _e(3462041), Ie = _e(16724804), se = _e(6333946), fe = new Ze();
  fe.frustumCulled = false, fe.visible = false, w.add(fe), fe.add(Ce, Ie, se);
  const L = (n) => {
    const o = new on(1, 1), a = new Ke({ color: n, transparent: true, opacity: 0.06, side: xt, depthWrite: false }), t = new Ne(o, a);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, I = L(3462041), W = L(16724804), H = L(6333946);
  fe.add(I, W, H);
  const ce = (n, o, a, t) => {
    n.scale.set(2 * t, 2 * t, 1), a === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : a === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, oe = document.createElement("div");
  oe.id = "hk-refplane-badge", oe.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(oe), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, fe.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], h = e.points.rawVal ?? [], d = o && o.length === 3 ? o : t.length > 0 && h[t[t.length - 1]] ? h[t[t.length - 1]] : [0, 0, 0], S = window.__hekatanOrthoExt ?? 8;
      he(Ce, d, "xy", S), he(Ie, d, "xz", S), he(se, d, "yz", S), ce(I, d, "xy", S), ce(W, d, "xz", S), ce(H, d, "yz", S), I.material.opacity = 0.1, W.material.opacity = 0.1, H.material.opacity = 0.1;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    v();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !fe.visible) {
      v();
      return;
    }
    const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], h = e.points.rawVal ?? [], d = o && o.length === 3 ? o : t.length > 0 && h[t[t.length - 1]] ? h[t[t.length - 1]] : [0, 0, 0];
    he(Ce, d, "xy", n), he(Ie, d, "xz", n), he(se, d, "yz", n), ce(I, d, "xy", n), ce(W, d, "xz", n), ce(H, d, "yz", n), v();
  };
  const Se = (n) => {
    if (I.material.opacity = n === "xy" ? 0.22 : 0.04, W.material.opacity = n === "xz" ? 0.22 : 0.04, H.material.opacity = n === "yz" ? 0.22 : 0.04, n) {
      const h = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      oe.style.background = h.bg, oe.style.color = h.text, oe.textContent = `\u25A6 Plano ${n.toUpperCase()}`, oe.style.display = "block";
    } else oe.style.display = "none";
  }, he = (n, o, a, t) => {
    let h;
    a === "xy" ? h = [new b(o[0] - t, o[1] - t, o[2]), new b(o[0] + t, o[1] - t, o[2]), new b(o[0] + t, o[1] + t, o[2]), new b(o[0] - t, o[1] + t, o[2]), new b(o[0] - t, o[1] - t, o[2])] : a === "xz" ? h = [new b(o[0] - t, o[1], o[2] - t), new b(o[0] + t, o[1], o[2] - t), new b(o[0] + t, o[1], o[2] + t), new b(o[0] - t, o[1], o[2] + t), new b(o[0] - t, o[1], o[2] - t)] : h = [new b(o[0], o[1] - t, o[2] - t), new b(o[0], o[1] + t, o[2] - t), new b(o[0], o[1] + t, o[2] + t), new b(o[0], o[1] - t, o[2] + t), new b(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(h);
  };
  let ze = null;
  window.__hekatanAxisLock = () => ze;
  const Pe = document.createElement("div");
  Pe.id = "hk-axis-lock-badge", Pe.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "padding:4px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(20px,18px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(Pe);
  const Xe = () => {
    if (!ze) {
      Pe.style.display = "none";
      return;
    }
    const n = { x: "#ff3344", y: "#34d399", z: "#60a5fa" };
    Pe.style.background = "rgba(15,23,42,0.92)", Pe.style.color = n[ze], Pe.style.border = `1.5px solid ${n[ze]}`, Pe.textContent = `\u{1F512} LOCK ${ze.toUpperCase()}`, Pe.style.display = "block";
  };
  window.addEventListener("keydown", (n) => {
    var _a;
    const o = document.activeElement;
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== K) return;
    const a = n.key.toLowerCase();
    if (a === "x" || a === "y" || a === "z") ze = ze === a ? null : a, Xe(), n.preventDefault();
    else if (n.key === "Escape") {
      const t = document.activeElement;
      t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA") && t.blur(), Xn(), n.preventDefault();
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
  const qe = new b(), Fe = new b(), Je = new b(), He = (n) => {
    if (!ze) return null;
    const o = n[0], a = n[1], t = n[2];
    return ze === "x" ? (qe.set(o - 1e4, a, t), Fe.set(o + 1e4, a, t)) : ze === "y" ? (qe.set(o, a - 1e4, t), Fe.set(o, a + 1e4, t)) : (qe.set(o, a, t - 1e4), Fe.set(o, a, t + 1e4)), C.ray.distanceSqToSegment(qe, Fe, null, Je), Je;
  };
  window.__hekatanProjectOnAxis = He;
  const et = new ht(new ue().setFromPoints([new b(0, 0, 0), new b(0, 0, 0)]), new Oe({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  et.renderOrder = 998, et.frustumCulled = false, et.visible = false, w.add(et);
  let Re = -1, vt = -1, rt = -1;
  const me = /* @__PURE__ */ new Set();
  window.__hekatanSelection = me;
  const ve = new ht(new ue().setFromPoints([new b(), new b()]), new Oe({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  ve.renderOrder = 997, ve.frustumCulled = false, ve.visible = false, w.add(ve);
  const ie = new Ne(new Nt(0.02, 12, 12), new Ke({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  ie.renderOrder = 998, ie.visible = false, w.add(ie);
  const Te = () => {
    if (!ie.visible) return;
    const o = p().position.distanceTo(ie.position), a = Math.max(0.05, o / 10);
    ie.scale.setScalar(a);
  }, de = new Ze();
  de.frustumCulled = false, w.add(de);
  const Be = 2282478;
  let Ee = null;
  const bt = (n, o, a, t) => {
    if (!e.points) return -1;
    const h = e.points.rawVal;
    let d = -1, S = t;
    for (let i = 0; i < h.length; i++) {
      const l = h[i];
      if (!l) continue;
      const u = Math.hypot(n - l[0], o - l[1], a - l[2]);
      u < S && (S = u, d = i);
    }
    return d;
  }, Ve = () => {
    var _a, _b, _c, _d, _e2, _f, _g;
    for (; de.children.length; ) {
      const S = de.children.pop();
      (_b = (_a = S.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = S.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const S of me) {
      const [i, ...l] = S.split(":");
      if (i === "pt") {
        const u = n[+l[0]];
        if (!u) continue;
        const x = new Ne(new Nt(0.025, 12, 12), new Ke({ color: Be, transparent: true, opacity: 0.9, depthTest: false }));
        x.position.set(u[0], u[1], u[2]), x.renderOrder = 999, x.__isSelectionPt = true, de.add(x);
      } else if (i === "seg") {
        const u = o[+l[0]], x = n[u == null ? void 0 : u[+l[1]]], c = n[u == null ? void 0 : u[+l[1] + 1]];
        if (!x || !c) continue;
        const m = new ue().setFromPoints([new b(x[0], x[1], x[2]), new b(c[0], c[1], c[2])]), M = new ht(m, new Oe({ color: Be, transparent: true, opacity: 0.95, depthTest: false }));
        M.renderOrder = 999, de.add(M);
      } else if (i === "poly") {
        const x = o[+l[0]].map((M) => {
          const N = n[M];
          return N ? new b(N[0], N[1], N[2]) : null;
        }).filter(Boolean);
        if (x.length < 2) continue;
        const c = new ue().setFromPoints(x), m = new ht(c, new Oe({ color: Be, transparent: true, opacity: 0.95, depthTest: false }));
        m.renderOrder = 999, de.add(m);
      } else if (i === "aux") {
        const u = t[+l[0]];
        if (!u || u.length !== 6) continue;
        const x = new ue().setFromPoints([new b(u[0], u[1], u[2]), new b(u[3], u[4], u[5])]), c = new ht(x, new Oe({ color: Be, transparent: true, opacity: 0.95, depthTest: false }));
        c.renderOrder = 999, de.add(c);
      }
    }
    const h = window.__hekatanUpdateSelectionPtScale;
    h && h();
    const d = window.__hekatanRefreshPropsPane;
    d && d(), v();
  };
  window.__hekatanRefreshSelection = Ve, window.__hekatanClearSelection = () => {
    me.clear(), Ve();
  };
  const $e = (n, o, a, t, h, d, S, i, l) => {
    const u = S - t, x = i - h, c = l - d, m = u * u + x * x + c * c;
    if (m < 1e-12) return Math.hypot(n - t, o - h, a - d);
    let M = ((n - t) * u + (o - h) * x + (a - d) * c) / m;
    M = Math.max(0, Math.min(1, M));
    const N = t + M * u, G = h + M * x, Q = d + M * c;
    return Math.hypot(n - N, o - G, a - Q);
  }, ot = (n, o, a, t) => {
    if (!e.polylines) return null;
    const h = e.polylines.rawVal, d = e.points.rawVal;
    let S = -1, i = -1, l = t;
    for (let u = 0; u < h.length; u++) {
      const x = h[u];
      for (let c = 0; c < x.length - 1; c++) {
        const m = d[x[c]], M = d[x[c + 1]];
        if (!m || !M) continue;
        const N = $e(n, o, a, m[0], m[1], m[2], M[0], M[1], M[2]);
        N < l && (l = N, S = u, i = c);
      }
    }
    return S >= 0 ? { polyIdx: S, segIdx: i, dist: l } : null;
  }, ct = (n, o, a, t) => {
    const h = window.__hekatanDrawingAuxLines, d = (h == null ? void 0 : h.rawVal) ?? (h == null ? void 0 : h.val) ?? h ?? [];
    let S = -1, i = t;
    for (let l = 0; l < d.length; l++) {
      const u = d[l];
      if (!u || u.length !== 6) continue;
      const x = $e(n, o, a, u[0], u[1], u[2], u[3], u[4], u[5]);
      x < i && (i = x, S = l);
    }
    return S;
  }, Et = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      et.visible = false;
      return;
    }
    et.geometry.setFromPoints([new b(t[0], t[1], t[2]), new b(t[3], t[4], t[5])]), et.visible = true;
  }, zt = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const a = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!a || a.length < 2) {
      et.visible = false;
      return;
    }
    const h = ((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false, d = [];
    if (h || o < 0 || o >= a.length - 1) for (const S of a) {
      const i = t[S];
      i && d.push(new b(i[0], i[1], i[2]));
    }
    else {
      const S = t[a[o]], i = t[a[o + 1]];
      S && d.push(new b(S[0], S[1], S[2])), i && d.push(new b(i[0], i[1], i[2]));
    }
    et.geometry.setFromPoints(d), et.visible = true;
  }, mt = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const a = o.filter((l, u) => u !== n), t = /* @__PURE__ */ new Set();
    for (const l of a) for (const u of l) t.add(u);
    const h = e.points.rawVal, d = /* @__PURE__ */ new Map(), S = [];
    for (let l = 0; l < h.length; l++) t.has(l) && (d.set(l, S.length), S.push(h[l]));
    const i = a.map((l) => l.map((u) => d.get(u)).filter((u) => u !== void 0));
    e.points.val = S, e.polylines.val = i, e.areas && (e.areas.val = e.areas.rawVal.filter((l) => l !== n).map((l) => l > n ? l - 1 : l)), et.visible = false, Re = -1, vt = -1;
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
  }, pt = (n, o) => {
    var _a, _b, _c;
    if (!e.polylines) return;
    const a = e.polylines.rawVal;
    if (n < 0 || n >= a.length) return;
    if (((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false) {
      mt(n);
      return;
    }
    const h = a[n];
    if (o < 0 || o >= h.length - 1) return;
    if (h.length === 2) {
      mt(n);
      return;
    }
    let d;
    o === 0 ? d = [h.slice(1)] : o === h.length - 2 ? d = [h.slice(0, -1)] : d = [h.slice(0, o + 1), h.slice(o + 1)];
    const S = [...a.slice(0, n), ...d, ...a.slice(n + 1)], i = /* @__PURE__ */ new Set();
    for (const m of S) for (const M of m) i.add(M);
    const l = e.points.rawVal, u = /* @__PURE__ */ new Map(), x = [];
    for (let m = 0; m < l.length; m++) i.has(m) && (u.set(m, x.length), x.push(l[m]));
    const c = S.map((m) => m.map((M) => u.get(M)).filter((M) => M !== void 0));
    if (e.points.val = x, e.polylines.val = c, e.areas) {
      const m = d.length - 1;
      e.areas.val = e.areas.rawVal.map((M) => M > n ? M + m : M);
    }
    et.visible = false, Re = -1, vt = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  te.geometry.setAttribute("position", new nt(e.points.rawVal.flat(), 3)), te.geometry.computeBoundingSphere(), te.frustumCulled = false, le.frustumCulled = false, w.add(le), q.position.set(0, 0, 0), q.rotateX(Math.PI / 2), q.geometry.rotateX(Math.PI / 2), q.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, a) => {
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
    const S = Math.max(4, Math.round(h)), i = e.points.rawVal.length, l = [];
    for (let u = 0; u < S; u++) {
      const x = 2 * Math.PI * u / S, c = t * Math.cos(x), m = t * Math.sin(x);
      let M;
      d === "xy" ? M = [n + c, o + m, a] : d === "xz" ? M = [n + c, o, a + m] : M = [n, o + c, a + m], l.push(M);
    }
    if (e.points.val = [...e.points.rawVal, ...l], e.polylines) {
      const u = [...l.map((c, m) => i + m), i], x = e.polylines.rawVal;
      ((_a = x[x.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...x, u, []] : e.polylines.val = [...x.slice(0, -1), u, []];
    }
  }, window.__hekatanDrawArc = (n, o, a, t = window.__hekatanArcSegs ?? 12) => {
    const h = Math.max(4, Math.round(t)), d = new b(...n), S = new b(...o), i = new b(...a), l = new b().subVectors(S, d), u = new b().subVectors(i, d), x = new b().crossVectors(l, u).normalize(), c = new b().addVectors(d, S).multiplyScalar(0.5), m = new b().addVectors(S, i).multiplyScalar(0.5), M = new b().crossVectors(l, x).normalize(), N = new b().crossVectors(new b().subVectors(i, S), x).normalize(), G = new b().subVectors(m, c), Q = M.x * N.y - M.y * N.x;
    let R;
    if (Math.abs(Q) > 1e-9) {
      const Ye = (G.x * N.y - G.y * N.x) / Q;
      R = new b().addVectors(c, M.clone().multiplyScalar(Ye));
    } else R = c.clone();
    const ee = d.distanceTo(R), be = new b().subVectors(d, R), We = new b().subVectors(i, R), ge = Math.acos(Math.max(-1, Math.min(1, be.dot(We) / (ee * ee)))), Ae = e.points.rawVal.length, at = [], ut = x.clone();
    for (let Ye = 0; Ye <= h; Ye++) {
      const Ge = Ye / h, Mt = ge * Ge, _t = new Rn().setFromAxisAngle(ut, Mt), yt = be.clone().applyQuaternion(_t).add(R);
      at.push([yt.x, yt.y, yt.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...at], e.polylines) {
      const Ye = at.map((Mt, _t) => Ae + _t), Ge = e.polylines.rawVal;
      e.polylines.val = [...Ge.slice(0, -1), Ye, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, a = 1, t = 6, h = 6) => {
    const d = Math.min(n[0], o[0]), S = Math.max(n[0], o[0]), i = Math.min(n[1], o[1]), l = Math.max(n[1], o[1]), u = (n[2] + o[2]) / 2, x = S - d, c = l - i, m = Math.min(a, x / 2 - 0.01, c / 2 - 0.01);
    if (m <= 0) return;
    const M = e.points.rawVal.length, N = [], G = [], Q = (R, ee) => {
      N.push([R, ee, u]), G.push(M + N.length - 1);
    };
    for (let R = 0; R <= h; R++) Q(d + m + (x - 2 * m) * R / h, i);
    for (let R = 1; R <= t; R++) {
      const ee = -Math.PI / 2 + Math.PI / 2 * R / t;
      Q(S - m + m * Math.cos(ee), i + m + m * Math.sin(ee));
    }
    for (let R = 1; R <= h; R++) Q(S, i + m + (c - 2 * m) * R / h);
    for (let R = 1; R <= t; R++) {
      const ee = 0 + Math.PI / 2 * R / t;
      Q(S - m + m * Math.cos(ee), l - m + m * Math.sin(ee));
    }
    for (let R = 1; R <= h; R++) Q(S - m - (x - 2 * m) * R / h, l);
    for (let R = 1; R <= t; R++) {
      const ee = Math.PI / 2 + Math.PI / 2 * R / t;
      Q(d + m + m * Math.cos(ee), l - m + m * Math.sin(ee));
    }
    for (let R = 1; R <= h; R++) Q(d, l - m - (c - 2 * m) * R / h);
    for (let R = 1; R <= t; R++) {
      const ee = Math.PI + Math.PI / 2 * R / t;
      Q(d + m + m * Math.cos(ee), i + m + m * Math.sin(ee));
    }
    if (G.push(M), e.points.val = [...e.points.rawVal, ...N], e.polylines) {
      const R = e.polylines.rawVal;
      e.polylines.val = [...R.slice(0, -1), G, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const a = e.points.rawVal.length, t = n[0], h = n[1], d = n[2], S = o[0], i = o[1], l = o[2];
    let u;
    if (Math.abs(d - l) < 1e-6 ? u = [[t, h, d], [S, h, d], [S, i, d], [t, i, d]] : Math.abs(h - i) < 1e-6 ? u = [[t, h, d], [S, h, d], [S, h, l], [t, h, l]] : u = [[t, h, d], [t, i, d], [t, i, l], [t, h, l]], e.points.val = [...e.points.rawVal, ...u], e.polylines) {
      const x = [a, a + 1, a + 2, a + 3, a], c = e.polylines.rawVal;
      e.polylines.val = [...c.slice(0, -1), x, []];
    }
  };
  const st = new Ze();
  st.visible = false, w.add(st), window.__hekatanShowAxes = (n, o, a = 12, t = 2) => {
    var _a, _b;
    for (; st.children.length; ) {
      const x = st.children.pop();
      (_a = x.geometry) == null ? void 0 : _a.dispose(), (_b = x.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const h = Math.min(...o) - t, d = Math.max(...o) + t, S = Math.min(...n) - t, i = Math.max(...n) + t, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", u = (x, c, m, M, N) => {
      const G = document.createElement("canvas");
      G.width = 64, G.height = 32;
      const Q = G.getContext("2d");
      Q.fillStyle = N, Q.font = "bold 22px sans-serif", Q.textAlign = "center", Q.fillText(x, 32, 26);
      const R = new Bn(G), ee = new Dn({ map: R, transparent: true }), be = new Nn(ee);
      return be.position.set(c, m, M), be.scale.set(1.2, 0.6, 1), be;
    };
    n.forEach((x, c) => {
      const m = c < l.length ? l[c] : `X${c}`, M = new ue().setFromPoints([new b(x, h, 0), new b(x, d, 0), new b(x, h, 0), new b(x, h, a)]), N = new Jt({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), G = new Tt(M, N);
      G.computeLineDistances(), st.add(G), st.add(u(m, x, h - 0.5, 0, "#60a5fa")), st.add(u(m, x, d + 0.5, 0, "#60a5fa"));
    }), o.forEach((x, c) => {
      const m = `${c + 1}`, M = new ue().setFromPoints([new b(S, x, 0), new b(i, x, 0), new b(S, x, 0), new b(S, x, a)]), N = new Jt({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), G = new Tt(M, N);
      G.computeLineDistances(), st.add(G), st.add(u(m, S - 0.5, x, 0, "#fb7185")), st.add(u(m, i + 0.5, x, 0, "#fb7185"));
    }), st.visible = true, v();
  }, window.__hekatanHideAxes = () => {
    st.visible = false, v();
  };
  const St = new Ze();
  St.visible = false, w.add(St);
  let Pt = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, a = 0, t = 0) => {
    var _a, _b;
    for (; St.children.length; ) {
      const d = St.children.pop();
      (_a = d.geometry) == null ? void 0 : _a.dispose(), (_b = d.material) == null ? void 0 : _b.dispose();
    }
    Pt.forEach((d) => {
      w.remove(d), d.geometry.dispose(), d.material.dispose();
    }), Pt = [];
    const h = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((d, S) => {
      const i = h[S % h.length], l = o / 2, u = [new b(a - l, t - l, d), new b(a + l, t - l, d), new b(a + l, t + l, d), new b(a - l, t + l, d), new b(a - l, t - l, d)], x = new ue().setFromPoints(u), c = new Oe({ color: i, transparent: true, opacity: 0.55 });
      St.add(new ht(x, c));
      const m = document.createElement("canvas");
      m.width = 128, m.height = 32;
      const M = m.getContext("2d");
      M.fillStyle = `#${i.toString(16).padStart(6, "0")}`, M.font = "bold 18px sans-serif", M.fillText(`Z = ${d} m`, 4, 22);
      const N = new Bn(m), G = new Dn({ map: N, transparent: true }), Q = new Nn(G);
      Q.position.set(a - l - 1.5, t - l - 1.5, d), Q.scale.set(2.5, 0.6, 1), St.add(Q);
      const R = new on(1e4, 1e4), ee = new Ke({ visible: false, side: xt }), be = new Ne(R, ee);
      be.position.set(0, 0, d), be.frustumCulled = false, be.userData = { refPlaneZ: d }, w.add(be), Pt.push(be);
    }), St.visible = true, v();
  }, window.__hekatanHideRefPlanes = () => {
    St.visible = false, Pt.forEach((n) => {
      n.visible = false;
    }), v();
  };
  const Ft = new Ze();
  Ft.frustumCulled = false, w.add(Ft);
  const Yt = () => {
    var _a, _b, _c, _d;
    for (; Ft.children.length; ) {
      const a = Ft.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (a.length !== 6) continue;
      const t = new ue().setFromPoints([new b(a[0], a[1], a[2]), new b(a[3], a[4], a[5])]), h = new Jt({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), d = new ht(t, h);
      d.computeLineDistances(), Ft.add(d);
    }
  };
  B.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, Yt(), v());
  });
  const Lt = new Ze();
  Lt.frustumCulled = false, w.add(Lt);
  const jt = () => {
    var _a, _b, _c, _d;
    for (; Lt.children.length; ) {
      const a = Lt.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxPoints, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (!a || a.length !== 3) continue;
      const t = new Ne(new Nt(0.025, 12, 12), new Ke({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(a[0], a[1], a[2]), t.renderOrder = 996;
      const d = p().position.distanceTo(t.position);
      t.scale.setScalar(Math.max(0.05, d / 10)), Lt.add(t);
    }
  };
  B.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, jt(), v());
  }), r.addEventListener("change", () => {
    const n = p();
    Lt.children.forEach((o) => {
      const a = n.position.distanceTo(o.position);
      o.scale.setScalar(Math.max(0.05, a / 10));
    });
  }), window.__hekatanRenderAuxPoints = jt;
  const je = new Ze(), hn = new Ne(new Nt(0.02, 12, 12), new Ke({ color: 16724804, transparent: true, opacity: 0.95 })), mn = new Ne(new Nt(0.04, 12, 12), new Ke({ color: 16498468, transparent: true, opacity: 0.25, depthWrite: false }));
  je.add(hn, mn);
  const Vt = 0.15, Zt = (n, o, a) => {
    const t = new ue().setFromPoints([new b(...n), new b(...o)]);
    return new ht(t, new Oe({ color: a, transparent: true, opacity: 0.7 }));
  };
  je.add(Zt([-Vt, 0, 0], [Vt, 0, 0], 16711680)), je.add(Zt([0, -Vt, 0], [0, Vt, 0], 65280)), je.add(Zt([0, 0, -Vt], [0, 0, Vt], 35071)), je.visible = false, je.frustumCulled = false, w.add(je);
  const Ut = 10, Kt = () => {
    if (!je.visible) return;
    const o = p().position.distanceTo(je.position), a = Math.max(0.05, o / Ut);
    je.scale.setScalar(a);
  }, en = () => {
    if (de.children.length === 0) return;
    const n = p();
    de.children.forEach((o) => {
      if (!o.__isSelectionPt) return;
      const a = n.position.distanceTo(o.position), t = Math.max(0.05, a / 10);
      o.scale.setScalar(t);
    });
  };
  window.__hekatanUpdateSelectionPtScale = en, r.addEventListener("change", () => {
    if (Kt(), ie.visible) {
      const o = p().position.distanceTo(ie.position);
      ie.scale.setScalar(Math.max(0.05, o / 10));
    }
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = p().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / Ut));
    }
    en();
  }), window.__hekatanShowSnap = (n, o, a) => {
    je.position.set(n, o, a), je.visible = true, Kt(), v();
  }, window.__hekatanHideSnap = () => {
    je.visible = false, v();
  }, f.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p;
    const o = g(n);
    if (!o) return;
    C.setFromCamera(z, o);
    const a = k();
    if (a.length) {
      const t = a[0].point, h = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, h);
      if (d) $n(d.type, d.x, d.y, d.z), je.position.set(d.x, d.y, d.z), je.visible = true, t.set(d.x, d.y, d.z);
      else {
        yn();
        const x = window.__hekatanSnapEnabled !== false, c = window.__hekatanSnap2D ?? 0.5;
        x && c > 0 && (t.x = Math.round(t.x / c) * c, t.y = Math.round(t.y / c) * c, t.z = Math.round(t.z / c) * c), je.position.copy(t), je.visible = true;
      }
      Kt();
      const S = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (S === "select" || !S) {
        const x = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = bt(t.x, t.y, t.z, x), m = ot(t.x, t.y, t.z, x), M = ct(t.x, t.y, t.z, x);
        if (c >= 0) {
          const R = e.points.rawVal[c];
          ie.position.set(R[0], R[1], R[2]), ie.visible = true, Te(), ve.visible = false, Ee = { kind: "pt", a: c };
        } else if (m) {
          const R = e.points.rawVal, ee = e.polylines.rawVal[m.polyIdx], be = R[ee[m.segIdx]], We = R[ee[m.segIdx + 1]];
          ve.geometry.setFromPoints([new b(be[0], be[1], be[2]), new b(We[0], We[1], We[2])]), ve.visible = true, ie.visible = false, Ee = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(m.polyIdx)) ?? false ? { kind: "poly", a: m.polyIdx } : { kind: "seg", a: m.polyIdx, b: m.segIdx };
        } else if (M >= 0) {
          const ee = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[M];
          ee && (ve.geometry.setFromPoints([new b(ee[0], ee[1], ee[2]), new b(ee[3], ee[4], ee[5])]), ve.visible = true, ie.visible = false, Ee = { kind: "aux", a: M });
        } else ve.visible = false, ie.visible = false, Ee = null;
        O.style.left = n.clientX + "px", O.style.top = n.clientY + "px", O.style.display = "block";
        let N = t;
        if ((Ee == null ? void 0 : Ee.kind) === "pt") {
          const R = e.points.rawVal[Ee.a];
          R && (N = new b(R[0], R[1], R[2]));
        }
        const G = `X=${N.x.toFixed(2)} Y=${N.y.toFixed(2)} Z=${N.z.toFixed(2)}`;
        if (Ee) {
          const R = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          O.textContent = `${G}  \xB7  \u{1F5B1} Click \u2192 ${R[Ee.kind]}`;
        } else O.textContent = G;
        const Q = document.getElementById("hk-coord-fixed");
        Q && (Q.textContent = G), Z.visible = false, pe.visible = false, v();
        return;
      }
      if (S === "delete") {
        const x = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = ot(t.x, t.y, t.z, x), m = ct(t.x, t.y, t.z, x);
        let M = false;
        if (m >= 0) if (!c) M = true;
        else {
          const R = window.__hekatanDrawingAuxLines, be = ((R == null ? void 0 : R.rawVal) ?? (R == null ? void 0 : R.val) ?? R ?? [])[m];
          $e(t.x, t.y, t.z, be[0], be[1], be[2], be[3], be[4], be[5]) < c.dist && (M = true);
        }
        M ? (rt = m, Re = -1, vt = -1, Et(m)) : c ? (Re = c.polyIdx, vt = c.segIdx, rt = -1, zt(c.polyIdx, c.segIdx)) : (Re = -1, vt = -1, rt = -1, et.visible = false), Z.visible = false, pe.visible = false, $(), O.style.left = n.clientX + "px", O.style.top = n.clientY + "px", O.style.display = "block";
        const N = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let G = "";
        M ? G = `\u{1F5D1} l\xEDnea aux #${rt + 1}` : c ? G = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(c.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${c.polyIdx + 1}` : `\u{1F5D1} seg ${c.segIdx + 1} / poly #${c.polyIdx + 1}` : G = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", O.textContent = `${N}  \xB7  ${G}`;
        const Q = document.getElementById("hk-coord-fixed");
        Q && (Q.textContent = N), v();
        return;
      } else et.visible = false, Re = -1, rt = -1;
      O.style.left = n.clientX + "px", O.style.top = n.clientY + "px", O.style.display = "block";
      const i = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], l = i[i.length - 1] ?? [], u = e.points.rawVal ?? [];
      if (l.length > 0 && u[l[l.length - 1]]) {
        const x = l[l.length - 1], c = u[x], m = !!window.__hekatanOrthoMode;
        let M = ze;
        if (!M && m) {
          const Ye = Math.abs(t.x - c[0]), Ge = Math.abs(t.y - c[1]), Mt = Math.abs(t.z - c[2]), _t = (_k = a[0]) == null ? void 0 : _k.object;
          let yt = null;
          _t === I ? yt = "xy" : _t === W ? yt = "xz" : _t === H && (yt = "yz"), yt === "xy" ? M = Ye >= Ge ? "x" : "y" : yt === "xz" ? M = Ye >= Mt ? "x" : "z" : yt === "yz" ? M = Ge >= Mt ? "y" : "z" : M = Ye >= Ge && Ye >= Mt ? "x" : Ge >= Mt ? "y" : "z";
        }
        if (M) {
          const Ye = c[0], Ge = c[1], Mt = c[2];
          M === "x" ? t.set(t.x, Ge, Mt) : M === "y" ? t.set(Ye, t.y, Mt) : t.set(Ye, Ge, t.z);
          const _t = !!ze, vn = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[M];
          Pe.style.background = "rgba(15,23,42,0.92)", Pe.style.color = vn, Pe.style.border = `1.5px solid ${vn}`;
          const bn = (_l = a[0]) == null ? void 0 : _l.object;
          let qt = null;
          bn === I ? qt = "xy" : bn === W ? qt = "xz" : bn === H && (qt = "yz");
          const Yn = qt ? ` (plano ${qt.toUpperCase()})` : "";
          Pe.textContent = _t ? `\u{1F512} LOCK ${M.toUpperCase()}${Yn}` : `\u22A5 ORTO ${M.toUpperCase()}${Yn}`, Pe.style.left = n.clientX + 20 + "px", Pe.style.top = n.clientY + 18 + "px", Pe.style.transform = "none", Pe.style.display = "block";
        } else ze || (Pe.style.display = "none");
        const N = Math.hypot(t.x - c[0], t.y - c[1], t.z - c[2]), G = Math.atan2(t.y - c[1], t.x - c[0]) * 180 / Math.PI, Q = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        O.textContent = `${Q} | \u0394L=${N.toFixed(2)}m ${G.toFixed(0)}\xB0`;
        const R = document.getElementById("hk-coord-fixed");
        R && (R.textContent = Q), Z.geometry.setFromPoints([new b(c[0], c[1], c[2]), new b(t.x, t.y, t.z)]), (_m = Z.computeLineDistances) == null ? void 0 : _m.call(Z), Z.visible = true, T(c[0], c[1], c[2], t.x, t.y, t.z);
        const ee = window.__hekatanOrthoExt ?? 8, be = window.__hekatanShowOrthoPlanes !== false;
        fe.visible = be, be || Se(null), be && (he(Ce, c, "xy", ee), he(Ie, c, "xz", ee), he(se, c, "yz", ee), ce(I, c, "xy", ee), ce(W, c, "xz", ee), ce(H, c, "yz", ee));
        const We = be ? C.intersectObjects([I, W, H], false) : [];
        let ge = null;
        if (We.length > 0) {
          const Ye = We[0].object;
          Ye === I ? ge = "xy" : Ye === W ? ge = "xz" : Ye === H && (ge = "yz");
        }
        Se(ge), ge && (oe.style.left = n.clientX + "px", oe.style.top = n.clientY + "px"), re.geometry.setFromPoints([new b(c[0] - ee, c[1], c[2]), new b(c[0] + ee, c[1], c[2])]), (_n2 = re.computeLineDistances) == null ? void 0 : _n2.call(re), Me.geometry.setFromPoints([new b(c[0], c[1] - ee, c[2]), new b(c[0], c[1] + ee, c[2])]), (_o2 = Me.computeLineDistances) == null ? void 0 : _o2.call(Me), ke.geometry.setFromPoints([new b(c[0], c[1], c[2] - ee), new b(c[0], c[1], c[2] + ee)]), (_p = ke.computeLineDistances) == null ? void 0 : _p.call(ke), pe.visible = true;
        const Ae = re.material, at = Me.material, ut = ke.material;
        M === "x" ? (Ae.opacity = 0.95, at.opacity = 0.1, ut.opacity = 0.1) : M === "y" ? (Ae.opacity = 0.1, at.opacity = 0.95, ut.opacity = 0.1) : M === "z" ? (Ae.opacity = 0.1, at.opacity = 0.1, ut.opacity = 0.95) : (Ae.opacity = 0.5, at.opacity = 0.5, ut.opacity = 0.5);
      } else {
        const x = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        O.textContent = x;
        const c = document.getElementById("hk-coord-fixed");
        if (c && (c.textContent = x), Z.visible = false, pe.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(S)) {
          if (V = null, X = null, K.style.left = n.clientX + 20 + "px", K.style.top = n.clientY - 28 + "px", K.style.display = "block", !F) {
            K.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const M = document.activeElement;
            !(M && (M.tagName === "INPUT" || M.tagName === "TEXTAREA") && M !== K) && document.activeElement !== K && K.focus({ preventScroll: true });
            try {
              K.select();
            } catch {
            }
          }
        } else $();
      }
      v();
    } else yn(), O.style.display = "none", je.visible = false, Z.visible = false, pe.visible = false, $(), v();
  }), B.derive(() => {
    e.gridTarget && (Uo(s, { position: new b(...e.gridTarget.val.position), quaternion: new Rn().setFromEuler(new Zn(...e.gridTarget.val.rotation)) }, v), q.position.set(...e.gridTarget.val.position), q.quaternion.setFromEuler(new Zn(...e.gridTarget.val.rotation)), q.updateMatrixWorld());
  }), B.derive(() => {
    te.geometry.setAttribute("position", new nt(e.points.val.flat(), 3)), te.geometry.computeBoundingSphere();
  }), B.derive(() => {
    const n = 0.05 * _ * 0.5 * y.val;
    C.params.Points.threshold = 0.4 * n;
  }), B.derive(() => {
    var _a;
    const n = e.points.val ?? [], a = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const d of a) {
      const [S, i, l] = n[d];
      t.push(S, i, l);
    }
    const h = new ue();
    h.setAttribute("position", new nt(t, 3)), xe.geometry.dispose(), xe.geometry = h;
  });
  let Rt = false, Ct = 0;
  f.addEventListener("pointerdown", () => {
    Rt = true;
  }), f.addEventListener("pointerup", () => {
    Rt = false;
  }), f.addEventListener("pointermove", () => {
    Rt && Ct++;
  });
  const ft = document.createElement("div");
  ft.id = "hk-window-select", ft.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(ft);
  let kt = null, Ht = false, gt = null;
  const wn = (n, o, a, t, h) => {
    h ? (ft.style.borderColor = "#34d399", ft.style.borderStyle = "dashed", ft.style.background = "rgba(52, 211, 153, 0.10)") : (ft.style.borderColor = "#22d3ee", ft.style.borderStyle = "solid", ft.style.background = "rgba(34, 211, 238, 0.10)"), ft.style.left = Math.min(n, a) + "px", ft.style.top = Math.min(o, t) + "px", ft.style.width = Math.abs(a - n) + "px", ft.style.height = Math.abs(t - o) + "px", ft.style.display = "block";
  }, Tn = (n, o, a, t, h) => {
    var _a, _b, _c, _d;
    const d = Math.min(n, a), S = Math.max(n, a), i = Math.min(o, t), l = Math.max(o, t), u = a < n, x = f.getBoundingClientRect(), c = p();
    c.updateMatrixWorld();
    const m = (ge) => {
      const Ae = new b(ge[0], ge[1], ge[2]);
      return Ae.project(c), { x: x.left + (Ae.x * 0.5 + 0.5) * x.width, y: x.top + (-Ae.y * 0.5 + 0.5) * x.height };
    }, M = (ge) => ge.x >= d && ge.x <= S && ge.y >= i && ge.y <= l, N = (ge, Ae) => !(ge.x < d && Ae.x < d || ge.x > S && Ae.x > S || ge.y < i && Ae.y < i || ge.y > l && Ae.y > l);
    h || me.clear();
    let G = 0;
    const Q = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let ge = 0; ge < Q.length; ge++) {
      const Ae = Q[ge];
      Ae && M(m(Ae)) && (me.add(`pt:${ge}`), G++);
    }
    const R = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], ee = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let ge = 0; ge < R.length; ge++) {
      const Ae = R[ge], at = ee.includes(ge);
      let ut = false;
      for (let Ye = 0; Ye < Ae.length - 1; Ye++) {
        const Ge = Q[Ae[Ye]], Mt = Q[Ae[Ye + 1]];
        if (!Ge || !Mt) continue;
        const _t = m(Ge), yt = m(Mt);
        if (u ? M(_t) || M(yt) || N(_t, yt) : M(_t) && M(yt)) {
          if (at) {
            ut = true;
            break;
          }
          me.add(`seg:${ge}:${Ye}`), G++;
        }
      }
      at && ut && (me.add(`poly:${ge}`), G++);
    }
    const We = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let ge = 0; ge < We.length; ge++) {
      const Ae = We[ge];
      if (!Ae || Ae.length !== 6) continue;
      const at = m([Ae[0], Ae[1], Ae[2]]), ut = m([Ae[3], Ae[4], Ae[5]]);
      (u ? M(at) || M(ut) || N(at, ut) : M(at) && M(ut)) && (me.add(`aux:${ge}`), G++);
    }
    Ve(), ye(`${u ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${G} item(s) ${h ? "agregados a" : "\u2192"} selecci\xF3n (total ${me.size})`), ft.style.display = "none";
  }, tn = () => {
    gt && (gt = null, ft.style.display = "none", ye("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = tn, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && gt && tn();
  });
  const En = () => {
    var _a, _b, _c, _d;
    if (me.size === 0) return false;
    const n = [...me], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], a = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], h = window.__hekatanDrawingAuxLines, d = (h == null ? void 0 : h.rawVal) ?? [], S = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Set();
    for (const N of n) {
      const [G, ...Q] = N.split(":");
      if (G === "pt") S.add(+Q[0]);
      else if (G === "poly") i.add(+Q[0]);
      else if (G === "seg") {
        const R = +Q[0], ee = +Q[1];
        l.has(R) || l.set(R, /* @__PURE__ */ new Set()), l.get(R).add(ee);
      } else G === "aux" && u.add(+Q[0]);
    }
    let x = 0, c = [], m = [];
    const M = /* @__PURE__ */ new Map();
    for (let N = 0; N < a.length; N++) {
      if (i.has(N)) {
        x++;
        continue;
      }
      M.set(N, c.length);
      const G = l.get(N);
      if (G && G.size > 0) {
        let Q = [];
        for (let R = 0; R < a[N].length; R++) Q.push(a[N][R]), R < a[N].length - 1 && G.has(R) && (Q.length >= 2 && c.push(Q), Q = [], x++);
        (Q.length >= 2 || Q.length === 1) && c.push(Q);
      } else c.push([...a[N]]);
    }
    if (S.size > 0) {
      const N = [], G = /* @__PURE__ */ new Map();
      for (let R = 0; R < o.length; R++) {
        if (S.has(R)) {
          x++;
          continue;
        }
        G.set(R, N.length), N.push([...o[R]]);
      }
      const Q = [];
      for (const R of c) {
        let ee = [];
        for (const be of R) {
          const We = G.get(be);
          We === void 0 ? (ee.length >= 2 && Q.push(ee), ee = []) : ee.push(We);
        }
        ee.length >= 2 && Q.push(ee);
      }
      c = Q, e.points.val = N;
    }
    for (const N of t) {
      const G = M.get(N);
      G !== void 0 && G < c.length && m.push(G);
    }
    if (e.polylines && (e.polylines.val = c), e.areas && (e.areas.val = m), u.size > 0 && h) {
      const N = d.filter((G, Q) => !u.has(Q));
      "val" in h ? h.val = N : window.__hekatanDrawingAuxLines = N, x += u.size;
    }
    me.clear(), Ve();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return ye(`\u{1F5D1} ${x} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = En, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) || me.size !== 0 && (n.preventDefault(), En());
  });
  const wt = document.createElement("div");
  wt.id = "hk-properties-pane";
  const Ln = "hk-props-pane-pos";
  let Bt = null;
  try {
    const n = localStorage.getItem(Ln);
    n && (Bt = JSON.parse(n));
  } catch {
  }
  wt.style.cssText = ["position:fixed", Bt ? `left:${Bt.left}px` : "left:50%", Bt ? `top:${Bt.top}px` : "top:8px", Bt ? "transform:none" : "transform:translateX(-50%)", "width:min(320px, calc(100vw - 32px))", "max-height:60vh", "overflow-y:auto", "z-index:201", "box-shadow:0 6px 24px rgba(0,0,0,0.45)", "border-radius:6px", "display:none"].join(";") + ";", document.body.appendChild(wt);
  const ao = () => {
    const n = wt.querySelector(".tp-rotv_b");
    if (!n || n.__hkDragWired) return;
    n.__hkDragWired = true, n.style.cursor = "move", n.style.userSelect = "none";
    let o = false, a = 0, t = 0, h = 0, d = 0;
    n.addEventListener("mousedown", (S) => {
      o = true, a = S.clientX, t = S.clientY;
      const i = wt.getBoundingClientRect();
      h = i.left, d = i.top, wt.style.transform = "none", wt.style.left = `${h}px`, wt.style.top = `${d}px`, S.preventDefault();
    }), window.addEventListener("mousemove", (S) => {
      if (!o) return;
      const i = S.clientX - a, l = S.clientY - t, u = Math.max(0, Math.min(window.innerWidth - 80, h + i)), x = Math.max(0, Math.min(window.innerHeight - 40, d + l));
      wt.style.left = `${u}px`, wt.style.top = `${x}px`;
    }), window.addEventListener("mouseup", () => {
      if (o) {
        o = false;
        try {
          localStorage.setItem(Ln, JSON.stringify({ left: parseFloat(wt.style.left), top: parseFloat(wt.style.top) }));
        } catch {
        }
      }
    });
  }, D = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 };
  let De = null;
  const tt = (n, o, a, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: a, value: t } }));
  }, io = () => {
    if (De && (De.dispose(), De = null), me.size === 0) {
      wt.style.display = "none";
      return;
    }
    const n = [...me], o = n.filter((c) => c.startsWith("pt:")), a = n.filter((c) => c.startsWith("seg:")), t = n.filter((c) => c.startsWith("poly:")), h = n.filter((c) => c.startsWith("aux:")), d = o.length === n.length && o.length > 0, S = a.length === n.length && a.length > 0, i = t.length === n.length && t.length > 0, l = !d && !S && !i, u = [];
    o.length && u.push(`\u{1F535} ${o.length} nodo(s)`), a.length && u.push(`\u{1F4CF} ${a.length} segmento(s)`), t.length && u.push(`\u25AD ${t.length} \xE1rea(s)`), h.length && u.push(`\u250A ${h.length} aux`);
    const x = `\u{1F3AF} ${me.size} item(s) \u2014 ${u.join(", ")}`;
    if (De = new no({ container: wt, title: x }), d) {
      const c = De.addFolder({ title: "\u{1F4CC} Restraints (DOFs)" });
      c.addBinding(D, "Ux"), c.addBinding(D, "Uy"), c.addBinding(D, "Uz"), c.addBinding(D, "Rx"), c.addBinding(D, "Ry"), c.addBinding(D, "Rz");
      const m = De.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      m.addBinding(D, "Kx", { label: "Kx", min: 0, step: 100 }), m.addBinding(D, "Ky", { label: "Ky", min: 0, step: 100 }), m.addBinding(D, "Kz", { label: "Kz", min: 0, step: 100 }), m.addBinding(D, "Krx", { label: "Krx", min: 0, step: 1e3 }), m.addBinding(D, "Kry", { label: "Kry", min: 0, step: 1e3 }), m.addBinding(D, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const M = De.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      M.addBinding(D, "Fx", { step: 0.1 }), M.addBinding(D, "Fy", { step: 0.1 }), M.addBinding(D, "Fz", { step: 0.1 }), M.addBinding(D, "Mx", { step: 0.1 }), M.addBinding(D, "My", { step: 0.1 }), M.addBinding(D, "Mz", { step: 0.1 }), De.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(D, "mass", { label: "m", min: 0, step: 1 }), De.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(D, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), De.addButton({ title: "\u2713 Aplicar a nodos seleccionados" }).on("click", () => {
        const Q = [D.Ux, D.Uy, D.Uz, D.Rx, D.Ry, D.Rz];
        Q.some((be) => be) && tt("nodes", o, "supports", Q);
        const R = [D.Fx, D.Fy, D.Fz, D.Mx, D.My, D.Mz];
        R.some((be) => be !== 0) && tt("nodes", o, "loads", R);
        const ee = [D.Kx, D.Ky, D.Kz, D.Krx, D.Kry, D.Krz];
        ee.some((be) => be !== 0) && tt("nodes", o, "springs", ee), D.mass !== 0 && tt("nodes", o, "mass", D.mass), D.diaphragm !== "Ninguno" && tt("nodes", o, "diaphragm", D.diaphragm), ye(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    } else if (S) {
      const c = De.addFolder({ title: "\u{1F4CF} Secci\xF3n frame" });
      c.addBinding(D, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), c.addBinding(D, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const m = De.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      m.addBinding(D, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), m.addBinding(D, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), m.addBinding(D, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), m.addBinding(D, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), De.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(D, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), De.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(D, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const G = De.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      G.addBinding(D, "relMxI", { label: "Mx I" }), G.addBinding(D, "relMyI", { label: "My I" }), G.addBinding(D, "relMzI", { label: "Mz I" });
      const Q = De.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      Q.addBinding(D, "relMxJ", { label: "Mx J" }), Q.addBinding(D, "relMyJ", { label: "My J" }), Q.addBinding(D, "relMzJ", { label: "Mz J" }), De.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(D, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const ee = De.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      ee.addBinding(D, "LKx", { label: "LKx", min: 0, step: 100 }), ee.addBinding(D, "LKy", { label: "LKy", min: 0, step: 100 }), ee.addBinding(D, "LKz", { label: "LKz", min: 0, step: 100 });
      const be = De.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      be.addBinding(D, "qx", { step: 0.1 }), be.addBinding(D, "qy", { step: 0.1 }), be.addBinding(D, "qz", { step: 0.1 }), De.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(D, "massPerM", { label: "m/L", min: 0, step: 1 }), De.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        tt("segs", a, "section", D.section), tt("segs", a, "material", D.material_frame);
        const ge = { A: D.A_mod, Iz: D.Iz_mod, Iy: D.Iy_mod, J: D.J_mod };
        (ge.A !== 1 || ge.Iz !== 1 || ge.Iy !== 1 || ge.J !== 1) && tt("segs", a, "modifiers", ge), D.insertionPoint !== "10 \u2014 Centroid" && tt("segs", a, "insertionPoint", D.insertionPoint), D.beta !== 0 && tt("segs", a, "beta", D.beta);
        const Ae = [D.relMxI, D.relMyI, D.relMzI], at = [D.relMxJ, D.relMyJ, D.relMzJ];
        (Ae.some((Ge) => Ge) || at.some((Ge) => Ge)) && tt("segs", a, "releases", { i: Ae, j: at }), D.hinges !== "None" && tt("segs", a, "hinges", D.hinges);
        const ut = [D.LKx, D.LKy, D.LKz];
        ut.some((Ge) => Ge !== 0) && tt("segs", a, "lineSprings", ut);
        const Ye = [D.qx, D.qy, D.qz];
        Ye.some((Ge) => Ge !== 0) && tt("segs", a, "distLoad", Ye), D.massPerM !== 0 && tt("segs", a, "massPerM", D.massPerM), ye(`\u2713 Propiedades aplicadas a ${a.length} segmento(s)`);
      });
    } else if (i) {
      const c = De.addFolder({ title: "\u25AD Shell / \xC1rea" });
      c.addBinding(D, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), c.addBinding(D, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), c.addBinding(D, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), De.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(D, "surfLoad", { label: "q", step: 0.1 }), De.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        tt("areas", t, "shellType", D.shellType), tt("areas", t, "thickness", D.thickness), tt("areas", t, "material", D.material_shell), D.surfLoad !== 0 && tt("areas", t, "surfLoad", D.surfLoad), ye(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    } else if (l) {
      const c = De.addFolder({ title: "\u2139 Selecci\xF3n mixta" }), m = { msg: "Selecciona un solo tipo para editar propiedades" };
      c.addBinding(m, "msg", { readonly: true, label: "" });
    }
    De.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      me.clear(), Ve();
    }), wt.style.display = "block", ao();
  };
  window.__hekatanRefreshPropsPane = io;
  let Dt = null, nn = false;
  f.addEventListener("pointerdown", (n) => {
    n.button === 2 && (Dt = { x: n.clientX, y: n.clientY }, nn = false);
  }), f.addEventListener("pointermove", (n) => {
    if (Dt && n.buttons & 2 && !nn) {
      const o = n.clientX - Dt.x, a = n.clientY - Dt.y;
      Math.hypot(o, a) > 8 && (nn = true);
    }
  }), f.addEventListener("pointerup", (n) => {
    var _a, _b, _c;
    if (n.button === 2) {
      const o = Dt !== null && !nn;
      if (Dt = null, o) {
        if (gt ? tn() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), me.size > 0 && (me.clear(), Ve()), e.polylines) {
          const h = e.polylines.rawVal;
          (h[h.length - 1] ?? []).length > 0 && (e.polylines.val = [...h, []]);
        }
        const a = window.__hekatanCadState, t = (_b = (_a = a == null ? void 0 : a.get) == null ? void 0 : _a.call(a)) == null ? void 0 : _b.tool;
        t && t !== "select" && t !== "none" ? ((_c = a == null ? void 0 : a.setTool) == null ? void 0 : _c.call(a, "select"), ye(`\u238B Cancelado \u2014 tool '${t}' cerrado, volv\xE9s a Seleccionar`)) : ye("\u238B Cancelado (click derecho)");
      }
    }
  }), f.addEventListener("contextmenu", (n) => {
    n.preventDefault(), n.stopPropagation();
  }, { capture: true }), f.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && window.__hekatanRectSelectExplicit && n.pointerType !== "touch" && (kt = { x: n.clientX, y: n.clientY }, Ht = false);
  }), f.addEventListener("pointermove", (n) => {
    if (gt && n.buttons === 0) {
      const d = n.clientX < gt.x;
      wn(gt.x, gt.y, n.clientX, n.clientY, d);
      return;
    }
    if (!kt) return;
    const o = n.clientX - kt.x, a = n.clientY - kt.y, t = Math.hypot(o, a);
    if (!Ht && t < 8) return;
    Ht = true;
    const h = n.clientX < kt.x;
    wn(kt.x, kt.y, n.clientX, n.clientY, h);
  }), f.addEventListener("pointerup", (n) => {
    if (!kt) return;
    if (!Ht) {
      kt = null;
      return;
    }
    const o = n.ctrlKey || n.metaKey || n.shiftKey;
    Tn(kt.x, kt.y, n.clientX, n.clientY, o), kt = null, Ht = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const At = new Ze();
  At.visible = false, At.frustumCulled = false, w.add(At);
  const lo = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, $n = (n, o, a, t) => {
    var _a, _b, _c, _d;
    for (; At.children.length; ) {
      const i = At.children.pop();
      (_b = (_a = i.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = i.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const h = lo[n] ?? 16777215, d = 0.05, S = new ue().setFromPoints([new b(o - d, a - d, t), new b(o + d, a - d, t), new b(o + d, a - d, t), new b(o + d, a + d, t), new b(o + d, a + d, t), new b(o - d, a + d, t), new b(o - d, a + d, t), new b(o - d, a - d, t)]);
    At.add(new Tt(S, new Oe({ color: h, linewidth: 2 }))), At.position.set(0, 0, 0), At.visible = true;
  }, yn = () => {
    At.visible = false;
  }, ro = (n, o, a, t) => {
    var _a;
    const h = window.__hekatanOsnap, d = e.points.rawVal, S = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let i = null;
    const l = (c, m, M, N) => {
      const G = Math.hypot(m - n, M - o, N - a);
      G > t || (!i || G < i.d) && (i = { type: c, x: m, y: M, z: N, d: G });
    };
    (h.node || h.end) && d.forEach((c) => {
      h.node && l("node", c[0], c[1], c[2]);
    });
    for (const c of S) if (!(c.length < 2)) for (let m = 0; m < c.length - 1; m++) {
      const M = d[c[m]], N = d[c[m + 1]];
      if (!(!M || !N) && (h.end && (l("end", M[0], M[1], M[2]), l("end", N[0], N[1], N[2])), h.mid && l("mid", (M[0] + N[0]) / 2, (M[1] + N[1]) / 2, (M[2] + N[2]) / 2), h.nea || h.per)) {
        const G = N[0] - M[0], Q = N[1] - M[1], R = N[2] - M[2], ee = G * G + Q * Q + R * R;
        if (ee < 1e-12) continue;
        const be = Math.max(0, Math.min(1, ((n - M[0]) * G + (o - M[1]) * Q + (a - M[2]) * R) / ee)), We = M[0] + be * G, ge = M[1] + be * Q, Ae = M[2] + be * R;
        h.nea && l("nea", We, ge, Ae), h.per && l("per", We, ge, Ae);
      }
    }
    const u = window.__hekatanDrawingAuxLines, x = (u == null ? void 0 : u.rawVal) ?? (u == null ? void 0 : u.val) ?? u ?? [];
    for (const c of x) {
      if (c.length !== 6) continue;
      const m = [c[0], c[1], c[2]], M = [c[3], c[4], c[5]];
      if (h.end && (l("end", m[0], m[1], m[2]), l("end", M[0], M[1], M[2])), h.mid && l("mid", (m[0] + M[0]) / 2, (m[1] + M[1]) / 2, (m[2] + M[2]) / 2), h.nea || h.per) {
        const N = M[0] - m[0], G = M[1] - m[1], Q = M[2] - m[2], R = N * N + G * G + Q * Q;
        if (R < 1e-12) continue;
        const ee = Math.max(0, Math.min(1, ((n - m[0]) * N + (o - m[1]) * G + (a - m[2]) * Q) / R)), be = m[0] + ee * N, We = m[1] + ee * G, ge = m[2] + ee * Q;
        h.nea && l("nea", be, We, ge), h.per && l("per", be, We, ge);
      }
    }
    return i ? { type: i.type, x: i.x, y: i.y, z: i.z } : null;
  };
  window.__hekatanOsnapCompute = ro, window.__hekatanOsnapShow = $n, window.__hekatanOsnapHide = yn;
  let Le = [], dt = 0;
  const Wt = document.createElement("div");
  Wt.id = "hk-cad-status", Wt.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", Wt.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(Wt);
  const co = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), ze && n.push(`\u{1F512} LOCK ${ze.toUpperCase()}`);
    const a = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(a) > 1e-3 && n.push(`Cota Z=${a}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, ye = (n) => {
    const o = n + co();
    Wt.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    ye(o);
  }, window.__hekatanCadResetPending = () => {
    Le = [], ye("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  const Gt = [], It = () => {
    var _a, _b;
    Gt.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), Gt.length > 100 && Gt.shift();
  }, In = () => {
    var _a;
    const n = Gt.pop();
    if (!n) {
      ye("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), Le = [], Z.visible = false, pe.visible = false, $(), ye(`\u21B6 Undo \u2014 ${Gt.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    v();
  };
  window.__hekatanPushUndo = It, window.__hekatanUndo = In, document.addEventListener("keydown", (n) => {
    var _a;
    if ((n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey) {
      const o = n.target, a = o == null ? void 0 : o.tagName;
      if ((a === "INPUT" || a === "TEXTAREA") && o.type !== "checkbox" && o.type !== "range" && ((_a = o.value) == null ? void 0 : _a.length) > 0) return;
      n.preventDefault(), n.stopPropagation(), In();
    }
  }, { capture: true });
  const Xn = () => {
    if (Le = [], e.polylines) {
      const n = e.polylines.rawVal, o = n[n.length - 1];
      o && o.length > 0 && (e.polylines.val = [...n, []]);
    }
    ze = null, Xe(), Z.visible = false, pe.visible = false, $(), ye("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), v();
  };
  window.__hekatanFinalizeDraw = Xn, f.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    if (Ct > 5) {
      Ct = 0;
      return;
    }
    Ct = 0;
    const o = g(n);
    if (!o) return;
    C.setFromCamera(z, o);
    const a = k();
    if (!a.length) return;
    let t = a[0].point;
    (n.ctrlKey || n.metaKey) && (t = new b(Math.round(a[0].point.x), Math.round(a[0].point.y), Math.round(a[0].point.z)));
    {
      const i = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], l = i[i.length - 1] ?? [], u = e.points.rawVal ?? [];
      if (l.length > 0) {
        const x = u[l[l.length - 1]];
        if (x) {
          const c = !!window.__hekatanOrthoMode;
          let m = ze;
          if (!m && c) {
            const M = Math.abs(t.x - x[0]), N = Math.abs(t.y - x[1]), G = Math.abs(t.z - x[2]);
            m = M >= N && M >= G ? "x" : N >= G ? "y" : "z";
          }
          m === "x" ? t = new b(t.x, x[1], x[2]) : m === "y" ? t = new b(x[0], t.y, x[2]) : m === "z" && (t = new b(x[0], x[1], t.z));
        }
      }
    }
    const h = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, h);
    if (d) t = new b(d.x, d.y, d.z), ye(`\u{1F3AF} Snap [${d.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const i = window.__hekatanSnapEnabled !== false, l = window.__hekatanSnap2D ?? 0;
      i && l > 0 && (t = new b(Math.round(t.x / l) * l, Math.round(t.y / l) * l, Math.round(t.z / l) * l));
    }
    const S = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (S === "select" || S === "none" || !S) {
      if (Ee) {
        gt && tn();
        const { kind: i, a: l, b: u } = Ee, x = u !== void 0 ? `${i}:${l}:${u}` : `${i}:${l}`;
        n.ctrlKey || n.metaKey || n.shiftKey || me.clear(), me.has(x) ? me.delete(x) : me.add(x), Ve(), ye(`\u2713 Seleccionados ${me.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const i = n.ctrlKey || n.metaKey || n.shiftKey, l = n.clientX, u = n.clientY;
        gt ? (Tn(gt.x, gt.y, l, u, i), gt = null) : i || (gt = { x: l, y: u }, ye("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), wn(l, u, l + 1, u + 1, false));
      }
      return;
    }
    if (S === "axis") {
      const i = window.__hekatanAxisDraw;
      if (!i) return;
      if (!i.pendingStart) {
        i.pendingStart = [t.x, t.y, t.z], ye(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const l = i.mode === "number", u = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, i.pendingStart, [t.x, t.y, t.z], l);
      ye(`\u2713 Eje "${u}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (S === "delete") {
      if (rt >= 0) {
        const i = window.__hekatanDrawingAuxLines, l = (i == null ? void 0 : i.rawVal) ?? (i == null ? void 0 : i.val) ?? i ?? [], u = rt;
        if (u >= 0 && u < l.length) {
          It();
          const x = l.slice(0, u).concat(l.slice(u + 1));
          i && typeof i == "object" && "val" in i ? i.val = x : window.__hekatanDrawingAuxLines = x, ye(`\u{1F5D1} L\xEDnea auxiliar #${u + 1} borrada`), rt = -1, et.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (Re >= 0) {
        const i = Re, l = vt;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(i)) ?? false ? (mt(i), ye(`\u{1F5D1} \xC1rea #${i + 1} (shell Q4) borrada`)) : l >= 0 ? (pt(i, l), ye(`\u{1F5D1} Segmento ${l + 1} de polil\xEDnea #${i + 1} borrado`)) : (mt(i), ye(`\u{1F5D1} Polil\xEDnea #${i + 1} borrada`));
      } else ye("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (S === "circle") {
      if (Le.push([t.x, t.y, t.z]), Le.length === 1) {
        ye("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [i, l] = Le, u = Math.hypot(l[0] - i[0], l[1] - i[1], l[2] - i[2]);
      Math.abs(l[0] - i[0]);
      const x = Math.abs(l[1] - i[1]), m = Math.abs(l[2] - i[2]) < 1e-3 ? "xy" : x < 1e-3 ? "xz" : "yz", M = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, i[0], i[1], i[2], u, M, m), ye(`\u2713 C\xEDrculo dibujado en ${m.toUpperCase()} \u2014 r=${u.toFixed(2)}m, ${M} segmentos`), Le = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (S === "arc") {
      if (Le.push([t.x, t.y, t.z]), Le.length === 1) {
        ye("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (Le.length === 2) {
        ye("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [i, l, u] = Le, x = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, i, l, u, x), ye(`\u2713 Arco dibujado \u2014 ${x} segmentos`), Le = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (S === "rect") {
      if (Le.push([t.x, t.y, t.z]), Le.length === 1) {
        ye("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [i, l] = Le;
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, i, l), ye(`\u2713 Rect\xE1ngulo dibujado \u2014 (${i[0].toFixed(1)},${i[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Le = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (S === "col") {
      It();
      const i = t.z, l = dt && dt > 0 ? dt : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, i], [t.x, t.y, i + l]];
      const u = e.polylines.rawVal, x = e.points.rawVal.length;
      e.polylines.val = [...u.slice(0, -1), ...u[u.length - 1].length > 0 ? [u[u.length - 1]] : [], [x - 2, x - 1], []], dt = 0, ye(`\u258C Columna creada \u2014 h=${l.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_p = window.__hekatanRebuild) == null ? void 0 : _p.call(window);
      } catch {
      }
      return;
    }
    if (S === "wall") {
      if (Le.push([t.x, t.y, t.z]), Le.length === 1) {
        ye("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [i, l] = Le, u = dt && dt > 0 ? dt : 3;
      It();
      const x = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [i[0], i[1], i[2]], [l[0], l[1], l[2]], [l[0], l[1], l[2] + u], [i[0], i[1], i[2] + u]];
      const c = e.polylines.rawVal;
      if (c.length - 1, e.polylines.val = [...c.slice(0, -1), ...c[c.length - 1].length > 0 ? [c[c.length - 1]] : [], [x, x + 1, x + 2, x + 3, x], []], e.areas) {
        const m = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, m];
      }
      ye(`\u25A5 Pared Q4 creada \u2014 h=${u.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Le = [], dt = 0;
      try {
        (_q = window.__hekatanRebuild) == null ? void 0 : _q.call(window);
      } catch {
      }
      return;
    }
    if (S === "extp") {
      It();
      const i = dt && dt > 0 ? dt : 3, l = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, l], [t.x, t.y, l + i]];
      const u = e.polylines.rawVal, x = e.points.rawVal.length;
      e.polylines.val = [...u.slice(0, -1), ...u[u.length - 1].length > 0 ? [u[u.length - 1]] : [], [x - 2, x - 1], []], dt = 0, ye(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${i.toFixed(2)}m`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (S === "extl") {
      const i = (window.__hekatanSnap2D ?? 0.5) * 1.5, l = ot(t.x, t.y, t.z, i);
      if (!l) {
        ye("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const u = e.polylines.rawVal, x = e.points.rawVal, c = u[l.polyIdx], m = x[c[l.segIdx]], M = x[c[l.segIdx + 1]];
      if (!m || !M) {
        ye("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const N = dt && dt > 0 ? dt : 3;
      It();
      const G = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [m[0], m[1], m[2]], [M[0], M[1], M[2]], [M[0], M[1], M[2] + N], [m[0], m[1], m[2] + N]];
      const Q = e.polylines.rawVal;
      if (e.polylines.val = [...Q.slice(0, -1), ...Q[Q.length - 1].length > 0 ? [Q[Q.length - 1]] : [], [G, G + 1, G + 2, G + 3, G], []], e.areas) {
        const R = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, R];
      }
      dt = 0, ye(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${N.toFixed(2)}m`);
      try {
        (_s = window.__hekatanRebuild) == null ? void 0 : _s.call(window);
      } catch {
      }
      return;
    }
    if (S === "auxp") {
      const i = window.__hekatanDrawingAuxPoints;
      if (i) {
        const l = i.rawVal ?? i.val ?? [];
        i.val = [...l, [t.x, t.y, t.z]];
      }
      ye(`\u2726 Punto auxiliar agregado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      return;
    }
    if (S === "aux") {
      if (Le.push([t.x, t.y, t.z]), Le.length === 1) {
        ye("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [i, l] = Le, u = window.__hekatanDrawingAuxLines;
      if (u) {
        const N = u.rawVal ?? u.val ?? [];
        u.val = [...N, [i[0], i[1], i[2], l[0], l[1], l[2]]];
      }
      const x = l[0] - i[0], c = l[1] - i[1], m = l[2] - i[2], M = Math.sqrt(x * x + c * c + m * m);
      ye(`\u2713 L\xEDnea auxiliar creada \u2014 L=${M.toFixed(2)}m (cyan, no FEM)`), Le = [];
      return;
    }
    if (S === "extend") {
      if (Le.push([t.x, t.y, t.z]), Le.length === 1) {
        ye("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [i, l] = Le, u = window.__hekatanDrawingAuxLines;
      if (u) {
        const x = u.rawVal ?? u.val ?? [];
        u.val = [...x, [i[0], i[1], i[2], l[0], l[1], l[2]]];
      }
      ye("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Le = [];
      return;
    }
    if (S === "chaflan") {
      if (Le.push([t.x, t.y, t.z]), Le.length === 1) {
        ye("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [i, l] = Le, u = window.__hekatanChaflanR ?? 1, x = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_t = window.__hekatanDrawSlabChaflan) == null ? void 0 : _t.call(window, i, l, u, x, 6);
      const c = Math.abs(l[0] - i[0]).toFixed(1), m = Math.abs(l[1] - i[1]).toFixed(1);
      ye(`\u2713 Losa con chaflanes dibujada \u2014 ${c}\xD7${m}m, r=${u}m, ${x} seg/chafl\xE1n`), Le = [];
      try {
        (_u = window.__hekatanRebuild) == null ? void 0 : _u.call(window);
      } catch {
      }
      return;
    }
    if (F = false, It(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const i = e.polylines.rawVal, l = i.length - 1, u = i[l] ?? [];
      if (S === "line" && u.length === 2) {
        e.polylines.val = [...i, []], ye("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_v = window.__hekatanRebuild) == null ? void 0 : _v.call(window);
        } catch {
        }
        return;
      }
      if (S === "area" && u.length === 4) {
        e.polylines.val = [...i.slice(0, -1), [...u, u[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, l]), ye("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
        } catch {
        }
        return;
      }
    }
    if (S === "node") ye(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (S === "line") ye("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (S === "polyline") ye("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (S === "area") {
      const i = ((_x = e.polylines) == null ? void 0 : _x.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      ye(`\u25A6 \xC1rea \u2014 click ${i.length}/4. Marc\xE1 ${4 - i.length} v\xE9rtice${4 - i.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), f.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), f.addEventListener("pointermove", (n) => {
    var _a, _b;
    const o = g(n);
    if (!o) return;
    C.setFromCamera(z, o);
    const a = k();
    if (le.geometry.deleteAttribute("position"), a.length) {
      let t = a[0].point.clone();
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z));
      {
        const S = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], i = S[S.length - 1] ?? [], l = e.points.rawVal ?? [];
        if (i.length > 0) {
          const u = l[i[i.length - 1]];
          if (u) {
            const x = !!window.__hekatanOrthoMode;
            let c = ze;
            if (!c && x) {
              const m = Math.abs(t.x - u[0]), M = Math.abs(t.y - u[1]), N = Math.abs(t.z - u[2]);
              c = m >= M && m >= N ? "x" : M >= N ? "y" : "z";
            }
            c === "x" ? t.set(t.x, u[1], u[2]) : c === "y" ? t.set(u[0], t.y, u[2]) : c === "z" && t.set(u[0], u[1], t.z);
          }
        }
      }
      const h = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, h);
      if (d) t.set(d.x, d.y, d.z);
      else {
        const S = window.__hekatanSnapEnabled !== false, i = window.__hekatanSnap2D ?? 0.5;
        S && i > 0 && (t.x = Math.round(t.x / i) * i, t.y = Math.round(t.y / i) * i, t.z = Math.round(t.z / i) * i);
      }
      le.geometry.setAttribute("position", new nt(t.toArray(), 3));
    }
    v();
  }), f.addEventListener("pointermove", (n) => {
    var _a;
    const o = g(n);
    if (!o) return;
    C.setFromCamera(z, o);
    let a = false;
    const t = C.intersectObject(te), h = k();
    if (t.length && h.length) {
      const d = new b(...e.points.rawVal[t[0].index]), S = new b(...h[0].point), i = d.sub(S), l = (_a = h[0].face) == null ? void 0 : _a.normal;
      l.transformDirection(q.matrixWorld), Math.abs(i.dot(l)) < 1e-4 && (a = true);
    }
    le.visible = !a;
  });
  let xn = false, gn;
  f.addEventListener("pointermove", (n) => {
    var _a;
    if (!Ct) return;
    const o = g(n);
    if (!o) return;
    C.setFromCamera(z, o);
    let a = false;
    const t = C.intersectObject(te), h = k();
    if (t.length && h.length) {
      const S = new b(...e.points.rawVal[t[0].index]), i = new b(...h[0].point), l = S.sub(i), u = (_a = h[0].face) == null ? void 0 : _a.normal;
      u.transformDirection(q.matrixWorld), Math.abs(l.dot(u)) < 1e-4 && (a = true);
    }
    if (a && Ct < 5 && (xn = true, r.enabled = false, gn = t[0].index), !xn || Ct % 2 !== 0) return;
    const d = [...e.points.rawVal];
    if (gn !== void 0) {
      let S = h[0].point;
      (n.ctrlKey || n.metaKey) && (S = new b(Math.round(S.x), Math.round(S.y), Math.round(S.z))), d[gn] = S.toArray();
    }
    e.points.val = d;
  }), f.addEventListener("pointerup", () => {
    r.enabled = true, xn = false;
  }), f.addEventListener("contextmenu", (n) => {
    var _a;
    const o = g(n);
    if (!o) return;
    C.setFromCamera(z, o);
    let a = false;
    const t = C.intersectObject(te), h = k();
    if (t.length && h.length) {
      const i = new b(...e.points.rawVal[t[0].index]), l = new b(...h[0].point), u = i.sub(l), x = (_a = h[0].face) == null ? void 0 : _a.normal;
      x.transformDirection(q.matrixWorld), Math.abs(u.dot(x)) < 1e-4 && (a = true);
    }
    if (!a) return;
    const d = [...e.points.rawVal];
    if (d.splice(t[0].index, 1), e.points.val = d, !e.polylines) return;
    const S = e.polylines.rawVal.map((i) => i.filter((l) => l !== t[0].index)).map((i) => i.map((l) => l > t[0].index ? l - 1 : l)).filter((i) => i.length);
    S.push([]), e.polylines.val = S;
  });
}
function Uo(e, s, w) {
  const _ = Math.round(14.999999999999998), y = { position: e.position.clone(), quaternion: e.quaternion.clone() }, f = setInterval(C, 1e3 / 30);
  let v = 0;
  function C() {
    v++;
    const z = v / _;
    e.position.lerpVectors(y.position, s.position, z), e.quaternion.slerpQuaternions(y.quaternion, s.quaternion, z), w && w(), v == _ && clearInterval(f);
  }
}
class so {
  constructor(s, w = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(s, w);
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
  setColorMap(s, w = 32) {
    this.map = kn[s] || kn.rainbow, this.n = w;
    const p = 1 / this.n, r = new it(), _ = new it();
    this.lut.length = 0, this.lut.push(new it(this.map[0][1]));
    for (let y = 1; y < w; y++) {
      const f = y * p;
      for (let v = 0; v < this.map.length - 1; v++) if (f > this.map[v][0] && f <= this.map[v + 1][0]) {
        const C = this.map[v][0], z = this.map[v + 1][0];
        r.setHex(this.map[v][1], sn), _.setHex(this.map[v + 1][1], sn);
        const g = new it().lerpColors(r, _, (f - C) / (z - C));
        this.lut.push(g);
      }
    }
    return this.lut.push(new it(this.map[this.map.length - 1][1])), this;
  }
  copy(s) {
    return this.lut = s.lut, this.map = s.map, this.n = s.n, this.minV = s.minV, this.maxV = s.maxV, this;
  }
  getColor(s) {
    s = ho.clamp(s, this.minV, this.maxV), s = (s - this.minV) / (this.maxV - this.minV);
    const w = Math.round(s * this.n);
    return this.lut[w];
  }
  addColorMap(s, w) {
    return kn[s] = w, this;
  }
  createCanvas() {
    const s = document.createElement("canvas");
    return s.width = 1, s.height = this.n, this.updateCanvas(s), s;
  }
  updateCanvas(s) {
    const w = s.getContext("2d", { alpha: false }), p = w.getImageData(0, 0, 1, this.n), r = p.data;
    let _ = 0;
    const y = 1 / this.n, f = new it(), v = new it(), C = new it();
    for (let z = 1; z >= 0; z -= y) for (let g = this.map.length - 1; g >= 0; g--) if (z < this.map[g][0] && z >= this.map[g - 1][0]) {
      const q = this.map[g - 1][0], j = this.map[g][0];
      f.setHex(this.map[g - 1][1], sn), v.setHex(this.map[g][1], sn), C.lerpColors(f, v, (z - q) / (j - q)), r[_ * 4] = Math.round(C.r * 255), r[_ * 4 + 1] = Math.round(C.g * 255), r[_ * 4 + 2] = Math.round(C.b * 255), r[_ * 4 + 3] = 255, _ += 1;
    }
    return w.putImageData(p, 0, 0), s;
  }
}
const kn = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, Qt = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function Ko(e) {
  e = Math.max(0, Math.min(1, e));
  for (let w = 0; w < Qt.length - 1; w++) {
    const [p, r, _, y] = Qt[w], [f, v, C, z] = Qt[w + 1];
    if (e <= f) {
      const g = (e - p) / (f - p);
      return [r + (v - r) * g, _ + (C - _) * g, y + (z - y) * g];
    }
  }
  const s = Qt[Qt.length - 1];
  return [s[1], s[2], s[3]];
}
function Ho() {
  const s = new Uint8Array(1024);
  for (let p = 0; p < 256; p++) {
    const r = p / 255, [_, y, f] = Ko(r);
    s[p * 4 + 0] = _, s[p * 4 + 1] = y, s[p * 4 + 2] = f, s[p * 4 + 3] = 255;
  }
  const w = new yo(s, 256, 1, xo);
  return w.minFilter = Un, w.magFilter = Un, w.wrapS = Kn, w.wrapT = Kn, w.needsUpdate = true, w;
}
function Wo(e, s, w) {
  new so();
  const p = Ho(), r = new mo({ uniforms: { cmap: { value: p }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: xt, transparent: false, clipping: true, depthWrite: true, depthTest: true }), _ = new Ne(new ue(), r);
  return _.renderOrder = -1, _.frustumCulled = false, _.userData.isShellArea = true, _.name = "__hekatan_shell_colormap", B.derive(() => {
    _.geometry.setAttribute("position", new nt(e.val.flat(), 3));
    const y = [];
    for (const k of s.val) k.length === 3 ? y.push(k[0], k[1], k[2]) : k.length === 4 && (y.push(k[0], k[1], k[2]), y.push(k[0], k[2], k[3]));
    _.geometry.setIndex(new wo(y, 1));
    const f = w.val.filter((k) => Number.isFinite(k));
    let v, C;
    const z = An.val;
    if (z ? (C = z[0], v = z[1]) : (v = f.length ? Math.max(...f) : 1, C = f.length ? Math.min(...f) : 0, C >= 0 && v > 0 && (C = 0)), v === C) {
      const k = Math.max(Math.abs(v) * 1e-6, 1e-9);
      v += k, C -= k;
    }
    const g = z && z[0] > z[1], q = Math.min(C, v), j = Math.max(C, v), J = j - q, we = new Float32Array(w.val.length);
    for (let k = 0; k < w.val.length; k++) {
      const te = w.val[k];
      if (!Number.isFinite(te)) {
        we[k] = -1;
        continue;
      }
      const xe = ((g ? j + q - te : te) - q) / J;
      we[k] = Math.max(0, Math.min(1, xe));
    }
    _.geometry.setAttribute("scalar", new Ue(we, 1));
  }), _;
}
function Go(e, s, w, p) {
  const r = Wo(w, e.elements, p);
  return B.derive(() => {
    r.visible = s.shellResults.val != "none";
  }), r;
}
const qo = 6, Cn = 10, Jo = 0.012;
function Qo(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function Oo(e, s, w, p) {
  if (!w && !p) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && w) {
    const _ = w[e];
    if (_ && _.has(s)) return _.get(s);
  }
  return null;
}
function jo(e, s, w, p) {
  const r = new Ze(), _ = new so();
  _.setColorMap("rainbow");
  const y = new it(), f = B.state([]);
  return B.derive(() => {
    var _a, _b, _c;
    s.deformedShape.val;
    const v = w.val, C = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], z = Qo(s.frameResults.val);
    if (r.children.forEach((Y) => {
      Y.geometry && Y.geometry.dispose(), Y.material && Y.material.dispose();
    }), r.clear(), !z || C.length === 0 || v.length === 0) {
      f.val = [];
      return;
    }
    const g = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, q = (_c = e.deformOutputs) == null ? void 0 : _c.val, j = [], J = [];
    for (let Y = 0; Y < C.length; Y++) {
      if (C[Y].length !== 2) continue;
      const ne = Oo(z, Y, g, q);
      ne && (j.push(ne[0], ne[1]), J.push({ idx: Y, vals: ne }));
    }
    if (j.length === 0) {
      f.val = [];
      return;
    }
    const we = Math.min(...j), k = Math.max(...j);
    _.setMin(we), _.setMax(k), f.val = j;
    const te = [1 / 0, 1 / 0, 1 / 0], le = [-1 / 0, -1 / 0, -1 / 0];
    for (const Y of v) for (let U = 0; U < 3; U++) te[U] = Math.min(te[U], Y[U]), le[U] = Math.max(le[U], Y[U]);
    const K = Math.max(le[0] - te[0], le[1] - te[1], le[2] - te[2], 1) * Jo, V = [], X = [], F = [];
    let P = 0;
    for (const { idx: Y, vals: U } of J) {
      const ne = C[Y], O = v[ne[0]], E = v[ne[1]];
      if (!O || !E) continue;
      const Z = new b(E[0] - O[0], E[1] - O[1], E[2] - O[2]), pe = Z.length();
      if (pe < 1e-10) continue;
      Z.normalize();
      const ae = Math.abs(Z.y) < 0.99 ? new b(0, 1, 0) : new b(1, 0, 0), re = new b().crossVectors(Z, ae).normalize(), Me = new b().crossVectors(Z, re).normalize(), ke = Cn + 1, _e = qo;
      for (let Ce = 0; Ce < ke; Ce++) {
        const Ie = Ce / Cn, se = O[0] + Z.x * pe * Ie, fe = O[1] + Z.y * pe * Ie, L = O[2] + Z.z * pe * Ie, I = U[0] + (U[1] - U[0]) * Ie, W = _.getColor(I) ?? new it(0, 0, 0);
        y.copy(W).convertSRGBToLinear();
        for (let H = 0; H < _e; H++) {
          const ce = H / _e * Math.PI * 2, oe = Math.cos(ce), Se = Math.sin(ce);
          V.push(se + (re.x * oe + Me.x * Se) * K, fe + (re.y * oe + Me.y * Se) * K, L + (re.z * oe + Me.z * Se) * K), X.push(y.r, y.g, y.b);
        }
      }
      for (let Ce = 0; Ce < Cn; Ce++) for (let Ie = 0; Ie < _e; Ie++) {
        const se = (Ie + 1) % _e, fe = P + Ce * _e + Ie, L = P + Ce * _e + se, I = P + (Ce + 1) * _e + Ie, W = P + (Ce + 1) * _e + se;
        F.push(fe, L, W), F.push(fe, W, I);
      }
      P += ke * _e;
    }
    if (V.length === 0) return;
    const T = new ue();
    T.setAttribute("position", new nt(V, 3)), T.setAttribute("color", new nt(X, 3)), T.setIndex(F), T.computeVertexNormals();
    const $ = new Ke({ vertexColors: true, side: xt }), A = new Ne(T, $);
    A.frustumCulled = false, r.add(A);
  }), r.__colorMapValues = f, r;
}
function es() {
  const e = window;
  return { forceUnit: e.__hekatanForceUnit ?? localStorage.getItem("hk_forceUnit") ?? "tonf", dispUnit: e.__hekatanDispUnit ?? localStorage.getItem("hk_dispUnit") ?? "mm", stressUnit: e.__hekatanStressUnit ?? localStorage.getItem("hk_stressUnit") ?? "tonf/m\xB2" };
}
const ts = { kN: 1, tonf: 1 / 9.80665, kip: 1 / 4.4482216 }, ns = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, os = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76, "kip/ft\xB2": 1 / 47.88026 };
function Qe(e, s = 4) {
  return e == null || !isFinite(e) ? "\u2014" : e === 0 ? "0" : Math.abs(e) < 1e-3 || Math.abs(e) > 1e5 ? e.toExponential(s) : e.toFixed(s);
}
const ss = 16755200, Qn = 56831, as = 56831, is = 56831, rn = 65382;
function ls(e) {
  const s = new Ze();
  s.name = "__hekatan_hover", s.renderOrder = 99;
  const w = new Nt(1, 16, 16), p = new Ke({ color: ss, transparent: true, opacity: 0.85, depthTest: false }), r = new Ne(w, p);
  r.visible = false, r.renderOrder = 100, s.add(r);
  const _ = new ue(), y = new Oe({ color: Qn, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), f = new Tt(_, y);
  f.visible = false, f.renderOrder = 100, s.add(f);
  const v = new Ke({ color: Qn, transparent: true, opacity: 0.7, depthTest: false }), C = new Ne(new Hn(1, 1, 1, 12), v);
  C.visible = false, C.renderOrder = 100, s.add(C);
  const z = new ue(), g = new Ke({ color: as, transparent: true, opacity: 0.45, side: xt, depthTest: false }), q = new Ne(z, g);
  q.visible = false, q.renderOrder = 100, s.add(q);
  const j = new ue(), J = new Oe({ color: is, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), we = new Tt(j, J);
  we.visible = false, we.renderOrder = 100, s.add(we);
  const k = new Ke({ color: rn, transparent: true, opacity: 0.95, depthTest: false }), te = new Ne(w, k);
  te.visible = false, te.renderOrder = 101, s.add(te);
  const le = new Ke({ color: rn, transparent: true, opacity: 0.85, depthTest: false }), xe = new Ne(new Hn(1, 1, 1, 12), le);
  xe.visible = false, xe.renderOrder = 101, s.add(xe);
  const K = new ue(), V = new Ke({ color: rn, transparent: true, opacity: 0.55, side: xt, depthTest: false }), X = new Ne(K, V);
  X.visible = false, X.renderOrder = 101, s.add(X);
  const F = new ue(), P = new Oe({ color: rn, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), T = new Tt(F, P);
  T.visible = false, T.renderOrder = 101, s.add(T);
  let $ = null;
  const A = document.createElement("div");
  Object.assign(A.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), A.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(A);
  }, 0);
  function Y(se) {
    const fe = e.derivedNodes.rawVal;
    return !fe || se < 0 || se >= fe.length ? null : new b(fe[se][0], fe[se][1], fe[se][2]);
  }
  function U(se, fe) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s;
    const L = e.getActiveCamera();
    if (!L || !e.mesh) return null;
    const I = e.rendererElm.getBoundingClientRect(), W = se - I.left, H = fe - I.top, ce = e.derivedNodes.rawVal, oe = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!ce || !oe) return null;
    const Se = /* @__PURE__ */ new Map(), he = (me) => {
      if (Se.has(me)) return Se.get(me);
      const ve = Y(me);
      if (!ve) return Se.set(me, null), null;
      const ie = ve.clone().project(L), Te = (ie.x * 0.5 + 0.5) * I.width, de = (-ie.y * 0.5 + 0.5) * I.height, Be = { x: Te, y: de, z: ie.z };
      return Se.set(me, Be), Be;
    }, ze = /* @__PURE__ */ new Set();
    for (const me of oe) if (me) for (const ve of me) ze.add(ve);
    const Pe = 8;
    let Xe = -1, qe = Pe;
    for (let me = 0; me < ce.length; me++) {
      if (!ze.has(me)) continue;
      const ve = he(me);
      if (!ve || ve.z < -1 || ve.z > 1) continue;
      const ie = ve.x - W, Te = ve.y - H, de = Math.sqrt(ie * ie + Te * Te);
      de < qe && (qe = de, Xe = me);
    }
    const Fe = es(), Je = ns[Fe.dispUnit] ?? 1e3, He = ts[Fe.forceUnit] ?? 1;
    if (Xe >= 0) {
      const me = ce[Xe];
      let ve = `Nodo ${Xe}
(${me[0].toFixed(3)}, ${me[1].toFixed(3)}, ${me[2].toFixed(3)})`;
      const ie = (_c = (_b = e.mesh) == null ? void 0 : _b.deformOutputs) == null ? void 0 : _c.rawVal;
      if (ie == null ? void 0 : ie.deformations) {
        const Te = ie.deformations.get(Xe);
        if (Te && (ve += `
\u2500\u2500\u2500\u2500 \u0394 desplaz. \u2500\u2500\u2500\u2500`, ve += `
Ux = ${Qe(Te[0] * Je, 3)} ${Fe.dispUnit}`, ve += `
Uy = ${Qe(Te[1] * Je, 3)} ${Fe.dispUnit}`, ve += `
Uz = ${Qe(Te[2] * Je, 3)} ${Fe.dispUnit}`, (Math.abs(Te[3]) > 1e-9 || Math.abs(Te[4]) > 1e-9 || Math.abs(Te[5]) > 1e-9) && (ve += `
Rx = ${Qe(Te[3] * 1e3, 3)} mrad`, ve += `
Ry = ${Qe(Te[4] * 1e3, 3)} mrad`, ve += `
Rz = ${Qe(Te[5] * 1e3, 3)} mrad`)), ie.reactions) {
          const de = ie.reactions.get(Xe);
          de && (Math.abs(de[0]) > 1e-9 || Math.abs(de[1]) > 1e-9 || Math.abs(de[2]) > 1e-9 || Math.abs(de[3]) > 1e-6 || Math.abs(de[4]) > 1e-6 || Math.abs(de[5]) > 1e-6) && (ve += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, ve += `
Fx = ${Qe(de[0] * He)} ${Fe.forceUnit}`, ve += `
Fy = ${Qe(de[1] * He)} ${Fe.forceUnit}`, ve += `
Fz = ${Qe(de[2] * He)} ${Fe.forceUnit}`, (Math.abs(de[3]) > 1e-6 || Math.abs(de[4]) > 1e-6 || Math.abs(de[5]) > 1e-6) && (ve += `
Mx = ${Qe(de[3] * He)} ${Fe.forceUnit}\xB7m`, ve += `
My = ${Qe(de[4] * He)} ${Fe.forceUnit}\xB7m`, ve += `
Mz = ${Qe(de[5] * He)} ${Fe.forceUnit}\xB7m`));
        }
      }
      return { type: "node", idx: Xe, info: ve };
    }
    const et = 5;
    let Re = -1, vt = et, rt = "frame";
    for (let me = 0; me < oe.length; me++) {
      const ve = oe[me];
      if (!(!ve || ve.length < 2)) {
        if (ve.length === 2) {
          const ie = he(ve[0]), Te = he(ve[1]);
          if (!ie || !Te || ie.z < -1 || ie.z > 1 || Te.z < -1 || Te.z > 1) continue;
          const de = rs(W, H, ie.x, ie.y, Te.x, Te.y);
          de < vt && (vt = de, Re = me, rt = "frame");
        } else if (ve.length === 3 || ve.length === 4) {
          const ie = [];
          let Te = true;
          for (const de of ve) {
            const Be = he(de);
            if (!Be || Be.z < -1 || Be.z > 1) {
              Te = false;
              break;
            }
            ie.push(Be);
          }
          if (!Te) continue;
          if (cs(W, H, ie)) {
            const Be = ie.reduce((Ee, bt) => Ee + bt.z, 0) / ie.length * 1e-3;
            Be < vt && (vt = Be, Re = me, rt = "shell");
          }
        } else if (ve.length === 8) {
          const ie = [];
          let Te = true;
          for (const Ve of ve) {
            const $e = he(Ve);
            if (!$e || $e.z < -1 || $e.z > 1) {
              Te = false;
              break;
            }
            ie.push($e);
          }
          if (!Te) continue;
          const de = Math.min(...ie.map((Ve) => Ve.x)), Be = Math.max(...ie.map((Ve) => Ve.x)), Ee = Math.min(...ie.map((Ve) => Ve.y)), bt = Math.max(...ie.map((Ve) => Ve.y));
          if (W >= de && W <= Be && H >= Ee && H <= bt) {
            const $e = ie.reduce((ot, ct) => ot + ct.z, 0) / ie.length * 1e-3;
            $e < vt && (vt = $e, Re = me, rt = "solid");
          }
        }
      }
    }
    if (Re >= 0) {
      const me = oe[Re];
      let ie = `${rt === "frame" ? "Frame" : rt === "shell" ? "Shell" : "Solid"} ${Re}`;
      const Te = (_e2 = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e2.rawVal, de = (_g = (_f = Te == null ? void 0 : Te.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, Re);
      if (de) {
        de.name && (ie += `
  \u{1F4CB} ${de.name}`), de.shape && (ie += `
  Shape: ${de.shape}`);
        const Be = /concrete|hormig|rect.*sólida/i.test(de.shape || ""), Ee = Be ? 100 : 1e3, bt = Be ? "cm" : "mm", Ve = (ot) => {
          const ct = ot * Ee;
          return Math.abs(ct - Math.round(ct)) < 0.05 ? `${Math.round(ct)}` : `${ct.toFixed(1)}`;
        }, $e = [];
        if (de.D != null && $e.push(`D=${Ve(de.D)}`), de.B != null && $e.push(`B=${Ve(de.B)}`), de.TF != null && $e.push(`TF=${Ve(de.TF)}`), de.TW != null && $e.push(`TW=${Ve(de.TW)}`), de.t != null && $e.push(`t=${Ve(de.t)}`), $e.length && (ie += `
  Dim: ${$e.join(" ")} ${bt}`), de.material) {
          let ot = de.material;
          de.fillMaterial && (ot += ` + FILL "${de.fillMaterial}"`), ie += `
  Mat: ${ot}`;
        }
      } else {
        const Be = (_i = (_h = Te == null ? void 0 : Te.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, Re), Ee = (_k = (_j = Te == null ? void 0 : Te.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, Re);
        Be ? (ie += `
  ${Be}`, Ee && !Be.includes(Ee) && (ie += `  (${Ee})`)) : Ee && (ie += `
  Material: ${Ee}`);
      }
      if (ie += `
nodos: [${me.join(", ")}]`, rt === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const Be = e.mesh.analyzeOutputs.rawVal, Ee = os[Fe.stressUnit] ?? 1, bt = [["bendingXX", "Mxx", He, `${Fe.forceUnit}\xB7m/m`], ["bendingYY", "Myy", He, `${Fe.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", He, `${Fe.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", He, `${Fe.forceUnit}/m`], ["membraneYY", "Nyy", He, `${Fe.forceUnit}/m`], ["membraneXY", "Nxy", He, `${Fe.forceUnit}/m`], ["shearX", "Qx", He, `${Fe.forceUnit}/m`], ["shearY", "Qy", He, `${Fe.forceUnit}/m`], ["vonMises", "\u03C3VM", Ee, Fe.stressUnit], ["pressure", "p", Ee, Fe.stressUnit]], Ve = [];
        for (const [$e, ot, ct, Et] of bt) {
          const zt = Be == null ? void 0 : Be[$e];
          if (zt && zt instanceof Map) {
            const mt = zt.get(Re);
            if (mt != null) {
              if (typeof mt == "number") Ve.push(`${ot} = ${Qe(mt * ct, 3)} ${Et}`);
              else if (Array.isArray(mt)) {
                let pt = mt[0];
                for (const st of mt) Math.abs(st) > Math.abs(pt) && (pt = st);
                Ve.push(`${ot} = ${Qe(pt * ct, 3)} ${Et}`);
              }
            }
          }
        }
        Ve.length > 0 && (ie += `
\u2500\u2500\u2500\u2500 results \u2500\u2500\u2500\u2500
` + Ve.slice(0, 8).join(`
`));
      }
      if (rt === "frame" && ((_m = e.mesh) == null ? void 0 : _m.deformOutputs) && e.mesh.elementInputs) {
        const Be = e.mesh.deformOutputs.rawVal, Ee = e.mesh.elementInputs.rawVal, bt = Be == null ? void 0 : Be.deformations;
        if (bt && me.length === 2) {
          const Ve = bt.get(me[0]), $e = bt.get(me[1]), ot = ce[me[0]], ct = ce[me[1]];
          if (Ve && $e && ot && ct) {
            const Et = ct[0] - ot[0], zt = ct[1] - ot[1], mt = ct[2] - ot[2], pt = Math.sqrt(Et * Et + zt * zt + mt * mt);
            if (pt > 1e-9) {
              const st = Et / pt, St = zt / pt, Pt = mt / pt, Ft = ($e[0] - Ve[0]) * st + ($e[1] - Ve[1]) * St + ($e[2] - Ve[2]) * Pt, Yt = ((_n2 = Ee.elasticities) == null ? void 0 : _n2.get(Re)) ?? 0, Lt = ((_o2 = Ee.areas) == null ? void 0 : _o2.get(Re)) ?? 0, jt = ((_p = Ee.momentsOfInertiaY) == null ? void 0 : _p.get(Re)) ?? 0, je = ((_q = Ee.momentsOfInertiaZ) == null ? void 0 : _q.get(Re)) ?? 0, hn = ((_r = Ee.torsionalConstants) == null ? void 0 : _r.get(Re)) ?? 0, mn = ((_s = Ee.shearModuli) == null ? void 0 : _s.get(Re)) ?? Yt / 2.6, Vt = Yt * Lt * (Ft / pt), Zt = ($e[3] - Ve[3]) * st + ($e[4] - Ve[4]) * St + ($e[5] - Ve[5]) * Pt, Ut = mn * hn * (Zt / pt), Kt = $e[4] - Ve[4], en = $e[5] - Ve[5], Rt = Yt * jt * Kt / pt, Ct = Yt * je * en / pt;
              ie += `
\u2500\u2500\u2500\u2500 frame \u2500\u2500\u2500\u2500`, ie += `
L = ${Qe(pt, 3)} m`, ie += `
\u0394L = ${Qe(Ft * Je, 3)} ${Fe.dispUnit}`, ie += `
\u03B5 = ${Qe(Ft / pt, 6)}`, Math.abs(Vt) > 1e-6 && (ie += `
N \u2248 ${Qe(Vt * He)} ${Fe.forceUnit}`), Math.abs(Ut) > 1e-6 && (ie += `
T \u2248 ${Qe(Ut * He)} ${Fe.forceUnit}\xB7m`), Math.abs(Rt) > 1e-6 && (ie += `
My \u2248 ${Qe(Rt * He)} ${Fe.forceUnit}\xB7m`), Math.abs(Ct) > 1e-6 && (ie += `
Mz \u2248 ${Qe(Ct * He)} ${Fe.forceUnit}\xB7m`);
            }
          }
        }
      }
      return { type: rt, idx: Re, info: ie };
    }
    return null;
  }
  function ne(se, fe, L) {
    var _a, _b, _c;
    if (r.visible = false, f.visible = false, C.visible = false, q.visible = false, we.visible = false, !se || !e.mesh) {
      A.style.display = "none", e.render();
      return;
    }
    const I = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (se.type === "node") {
      const oe = Y(se.idx);
      if (oe) {
        const Se = e.derivedNodes.rawVal ?? [];
        let he = 1;
        if (Se.length >= 2) {
          let Xe = [1 / 0, 1 / 0, 1 / 0], qe = [-1 / 0, -1 / 0, -1 / 0];
          for (const Fe of Se) for (let Je = 0; Je < 3; Je++) Fe[Je] < Xe[Je] && (Xe[Je] = Fe[Je]), Fe[Je] > qe[Je] && (qe[Je] = Fe[Je]);
          he = Math.max(qe[0] - Xe[0], qe[1] - Xe[1], qe[2] - Xe[2], 0.1);
        }
        const ze = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, Pe = 0.021 * he * ze;
        r.position.copy(oe), r.scale.setScalar(Pe), r.visible = true;
      }
    } else if (se.type === "frame" && I) {
      const oe = I[se.idx], Se = Y(oe[0]), he = Y(oe[1]);
      if (Se && he) {
        const ze = Se.clone().add(he).multiplyScalar(0.5), Pe = he.clone().sub(Se), Xe = Pe.length(), Je = e.getActiveCamera().position.distanceTo(ze) * 35e-4;
        C.position.copy(ze);
        const He = new b(0, 1, 0), et = He.clone().cross(Pe).normalize(), Re = He.angleTo(Pe);
        C.quaternion.setFromAxisAngle(et, Re), C.scale.set(Je, Xe, Je), C.visible = true;
      }
    } else if (se.type === "shell" && I) {
      const oe = I[se.idx], Se = [], he = [];
      for (const ze of oe) {
        const Pe = Y(ze);
        if (!Pe) return;
        Se.push(Pe.x, Pe.y, Pe.z);
      }
      oe.length === 4 ? he.push(0, 1, 2, 0, 2, 3) : oe.length === 3 && he.push(0, 1, 2), z.setAttribute("position", new nt(Se, 3)), z.setIndex(he), z.computeVertexNormals(), q.visible = true;
    } else if (se.type === "solid" && I) {
      const oe = I[se.idx], Se = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], he = [];
      for (const [ze, Pe] of Se) {
        const Xe = Y(oe[ze]), qe = Y(oe[Pe]);
        Xe && qe && he.push(Xe.x, Xe.y, Xe.z, qe.x, qe.y, qe.z);
      }
      j.setAttribute("position", new nt(he, 3)), we.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      A.style.display = "none", e.render();
      return;
    }
    A.textContent = se.info, A.style.whiteSpace = "pre-line", A.style.display = "block";
    const H = e.rendererElm.getBoundingClientRect(), ce = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? H;
    A.style.left = `${fe - ce.left}px`, A.style.top = `${L - ce.top}px`, e.render();
  }
  let O = "", E = 0, Z = 0;
  const pe = window.__hekatanHoverDebug ?? false, ae = (se) => {
    E && cancelAnimationFrame(E), E = requestAnimationFrame(() => {
      var _a, _b, _c;
      const fe = U(se.clientX, se.clientY);
      if (pe && Z < 5) {
        const I = e.derivedNodes.rawVal, W = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${se.clientX}, ${se.clientY}) nodes=${(I == null ? void 0 : I.length) ?? 0} elems=${(W == null ? void 0 : W.length) ?? 0} hover=`, fe), Z++;
      }
      const L = fe ? `${fe.type}:${fe.idx}` : "";
      if (L !== O) O = L, ne(fe, se.clientX, se.clientY);
      else if (fe) {
        const I = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        A.style.left = `${se.clientX - I.left}px`, A.style.top = `${se.clientY - I.top}px`;
      }
    });
  };
  let re = null;
  const Me = () => {
    O = "", r.visible = false, f.visible = false, C.visible = false, q.visible = false, we.visible = false, A.style.display = "none", e.render();
  }, ke = (se) => {
    const fe = e.rendererElm.getBoundingClientRect(), L = se.clientX - fe.left, I = se.clientY - fe.top;
    (L < -2 || I < -2 || L > fe.width + 2 || I > fe.height + 2) && (re && clearTimeout(re), re = window.setTimeout(Me, 200));
  }, _e = () => {
    re && (clearTimeout(re), re = null);
  };
  e.rendererElm.addEventListener("pointermove", ae), e.rendererElm.addEventListener("pointerleave", ke), e.rendererElm.addEventListener("pointerenter", _e);
  let Ce = null;
  e.rendererElm.addEventListener("pointerdown", (se) => {
    se.button === 0 && (Ce = { x: se.clientX, y: se.clientY });
  }), e.rendererElm.addEventListener("pointerup", (se) => {
    if (se.button !== 0 || !Ce) return;
    const fe = se.clientX - Ce.x, L = se.clientY - Ce.y;
    if (Ce = null, fe * fe + L * L > 9) return;
    const I = U(se.clientX, se.clientY);
    I ? ($ = { type: I.type, idx: I.idx }, Ie()) : ($ = null, Ie());
  });
  function Ie() {
    var _a, _b;
    if (te.visible = false, xe.visible = false, X.visible = false, T.visible = false, !$ || !e.mesh) {
      e.render();
      return;
    }
    const se = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if ($.type === "node") {
      const fe = Y($.idx);
      if (fe) {
        const L = e.derivedNodes.rawVal ?? [];
        let I = 1;
        if (L.length >= 2) {
          let ce = [1 / 0, 1 / 0, 1 / 0], oe = [-1 / 0, -1 / 0, -1 / 0];
          for (const Se of L) for (let he = 0; he < 3; he++) Se[he] < ce[he] && (ce[he] = Se[he]), Se[he] > oe[he] && (oe[he] = Se[he]);
          I = Math.max(oe[0] - ce[0], oe[1] - ce[1], oe[2] - ce[2], 0.1);
        }
        const W = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, H = 0.025 * I * W;
        te.position.copy(fe), te.scale.setScalar(H), te.visible = true;
      }
    } else if ($.type === "frame" && se) {
      const fe = se[$.idx], L = Y(fe[0]), I = Y(fe[1]);
      if (L && I) {
        const W = L.clone().add(I).multiplyScalar(0.5), H = I.clone().sub(L), ce = H.length(), he = e.getActiveCamera().position.distanceTo(W) * 35e-4;
        xe.position.copy(W);
        const ze = new b(0, 1, 0), Pe = ze.clone().cross(H).normalize(), Xe = ze.angleTo(H);
        xe.quaternion.setFromAxisAngle(Pe, Xe), xe.scale.set(he, ce, he), xe.visible = true;
      }
    } else if ($.type === "shell" && se) {
      const fe = se[$.idx], L = [], I = [];
      for (const W of fe) {
        const H = Y(W);
        if (!H) return;
        L.push(H.x, H.y, H.z);
      }
      fe.length === 4 ? I.push(0, 1, 2, 0, 2, 3) : fe.length === 3 && I.push(0, 1, 2), K.setAttribute("position", new nt(L, 3)), K.setIndex(I), K.computeVertexNormals(), X.visible = true;
    } else if ($.type === "solid" && se) {
      const fe = se[$.idx], L = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], I = [];
      for (const [W, H] of L) {
        const ce = Y(fe[W]), oe = Y(fe[H]);
        ce && oe && I.push(ce.x, ce.y, ce.z, oe.x, oe.y, oe.z);
      }
      F.setAttribute("position", new nt(I, 3)), T.visible = true;
    }
    e.render();
  }
  return B.derive(() => {
    e.derivedNodes.val, $ && Ie();
  }), s;
}
function rs(e, s, w, p, r, _) {
  const y = r - w, f = _ - p, v = y * y + f * f;
  if (v < 1e-9) {
    const J = e - w, we = s - p;
    return Math.sqrt(J * J + we * we);
  }
  let C = ((e - w) * y + (s - p) * f) / v;
  C = Math.max(0, Math.min(1, C));
  const z = w + C * y, g = p + C * f, q = e - z, j = s - g;
  return Math.sqrt(q * q + j * j);
}
function cs(e, s, w) {
  let p = false;
  for (let r = 0, _ = w.length - 1; r < w.length; _ = r++) {
    const y = w[r].x, f = w[r].y, v = w[_].x, C = w[_].y;
    f > s != C > s && e < (v - y) * (s - f) / (C - f + 1e-12) + y && (p = !p);
  }
  return p;
}
function On(e, s = 8) {
  const w = document.createElement("div");
  w.id = "legend";
  const p = document.createElement("div");
  p.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", w.appendChild(p), setTimeout(() => {
    B.derive(() => {
      p.textContent = Pn.val ? `[${Pn.val}]` : "";
    });
  });
  const r = Array.from({ length: s + 1 }, (v, C) => C / s).reverse();
  let _, y;
  r.forEach((v, C) => {
    _ = document.createElement("div"), _.id = `marker-${C}`, _.className = "marker", _.style.marginTop = C == 0 ? "0px" : `calc(${50 / s}vh - 1px)`, y = document.createElement("p"), y.id = `marker-text-${C}`, _.append(y), w.append(_);
  });
  const f = [];
  return w.querySelectorAll("p").forEach((v) => f.push(v)), setTimeout(() => {
    B.derive(() => {
      r.forEach((v, C) => {
        const z = f[C];
        z && (z.innerText = ds(e.val, v).toString());
      });
    });
  }), w;
}
function ds(e, s) {
  const w = An.val;
  if (w) return (w[0] + s * (w[1] - w[0])).toPrecision(3);
  const p = e.filter((y) => Number.isFinite(y));
  if (p.length === 0) return "0";
  let r = Math.min(...p);
  const _ = Math.max(...p);
  return r >= 0 && _ > 0 && (r = 0), (r + s * (_ - r)).toPrecision(3);
}
function bs({ mesh: e, settingsObj: s, drawingObj: w, objects3D: p, solids: r }) {
  So.DEFAULT_UP = new b(0, 0, 1);
  const _ = document.createElement("div"), y = new go(), f = new vo(45, 1, 0.1, 2 * 1e6), v = new bo(-10, 10, 10, -10, -1e3, 2e6);
  let C = f;
  const z = new Mo({ antialias: true });
  z.localClippingEnabled = true;
  const g = new Wn(f, z.domElement);
  g.enableDamping = true, g.dampingFactor = 0.1, g.screenSpacePanning = true, g.zoomSpeed = 0.8, g.panSpeed = 1.2, g.rotateSpeed = 0.9, g.keyPanSpeed = 12, g.listenToKeyEvents(window), g.touches = { ONE: an.ROTATE, TWO: an.DOLLY_PAN }, z.domElement.addEventListener("wheel", (L) => {
    if (!L.ctrlKey && Math.abs(L.deltaX) > Math.abs(L.deltaY) * 1.5) {
      L.preventDefault();
      const I = g.target, W = new b().subVectors(f.position, I), H = new b();
      H.crossVectors(f.up, W).normalize();
      const oe = W.length() * 1e-3 * g.panSpeed;
      I.addScaledVector(H, L.deltaX * oe), f.position.addScaledVector(H, L.deltaX * oe), g.update();
    }
  }, { passive: false });
  const q = new _n(new b(-1, 0, 0), 0), j = new _n(new b(0, -1, 0), 0), J = new _n(new b(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function we() {
    const L = window.__hekatanClip, I = [];
    L.enableX && (q.normal.set(L.invertX ? 1 : -1, 0, 0), q.constant = L.invertX ? -L.posX : L.posX, I.push(q)), L.enableY && (j.normal.set(0, L.invertY ? 1 : -1, 0), j.constant = L.invertY ? -L.posY : L.posY, I.push(j)), L.enableZ && (J.normal.set(0, 0, L.invertZ ? 1 : -1), J.constant = L.invertZ ? -L.posZ : L.posZ, I.push(J)), z.clippingPlanes = I, y.traverse((H) => {
      const ce = H;
      if (ce.material) {
        const oe = Array.isArray(ce.material) ? ce.material : [ce.material];
        for (const Se of oe) Se.clippingPlanes = I, Se.needsUpdate = true;
      }
    });
    const W = window.__hekatanPanes ?? [];
    for (const H of W) try {
      H && typeof H.refresh == "function" && H.refresh();
    } catch {
    }
    z.render(y, C);
  }
  we(), window.__hekatanClipApply = we;
  const k = Co(s), te = B.derive(() => k.displayScale.val === 0 ? 1 : k.displayScale.val > 0 ? k.displayScale.val : -1 / k.displayScale.val), le = ps(e, k), xe = () => {
    const L = [];
    return k.gridXY.rawVal && L.push("xy"), k.gridXZ.rawVal && L.push("xz"), k.gridYZ.rawVal && L.push("yz"), L;
  }, K = () => {
    const L = k.gridStep.rawVal, I = Math.max(L, k.gridMajor.rawVal);
    return { planes: xe(), majorStep: I, minorStep: L };
  };
  let V = Sn(k.gridSize.rawVal, K());
  V.visible = k.gridVisible.rawVal, window.__hekatanSnap2D = k.cursorSnap.rawVal;
  const X = () => {
    const L = Math.max(0, Math.min(1, k.gridOpacity.rawVal));
    V.traverse((I) => {
      const W = I.material;
      if (!W || !("opacity" in W)) return;
      const H = I.name ?? "";
      let ce = 0.35;
      H.includes("border") ? ce = 1 : H.includes("major") && (ce = 0.75), W.opacity = L * ce;
    });
  };
  X(), _.appendChild(ko(k, e, r)), _.setAttribute("id", "viewer"), _.appendChild(z.domElement), z.setPixelRatio(window.devicePixelRatio);
  const F = $t();
  z.setClearColor(F.background, 1);
  const P = k.gridSize.rawVal, T = P * 0.5 + P * 0.5 / Math.tan(45 * 0.5);
  f.position.set(0, 0, T), f.up.set(0, 1, 0), g.target.set(0, 0, 0), g.minDistance = 0.1, g.maxDistance = 1e4, _.__settings = k, g.zoomSpeed = 1, g._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, g.update();
  let $ = qn(k.gridSize.rawVal, k.flipAxes.rawVal);
  y.add(V, $), B.derive(() => {
    window.__hekatanGridPlaneXY = k.gridXY.val, window.__hekatanGridPlaneXZ = k.gridXZ.val, window.__hekatanGridPlaneYZ = k.gridYZ.val;
  });
  let A = true;
  B.derive(() => {
    const L = k.gridVisible.val;
    if (A) {
      A = false;
      return;
    }
    V.visible = L, ae();
  });
  let Y = true;
  B.derive(() => {
    if (k.gridOpacity.val, Y) {
      Y = false;
      return;
    }
    X(), ae();
  }), B.derive(() => {
    const L = k.cursorSnap.val;
    window.__hekatanSnap2D = L;
  });
  let U = true;
  B.derive(() => {
    var _a;
    const L = k.gridSize.val, I = k.flipAxes.val;
    if (k.gridXY.val, k.gridXZ.val, k.gridYZ.val, k.gridStep.val, k.gridMajor.val, U) {
      U = false;
      return;
    }
    y.remove(V), (_a = V.traverse) == null ? void 0 : _a.call(V, (ce) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = ce.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = ce.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), V = Sn(L, K()), V.visible = k.gridVisible.rawVal, y.add(V), X(), y.remove($), $.traverse((ce) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = ce.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = ce.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), $ = qn(L, I), y.add($);
    const W = L * 0.5 + L * 0.5 / Math.tan(45 * 0.5);
    f.position.distanceTo(g.target), Math.abs(f.position.x) < 0.1 && Math.abs(f.position.y) < 0.1 && f.position.z > 0 ? f.position.set(0, 0, W) : f.position.set(0.5 * L, -W, 0.5 * L), g.target.set(0, 0, 0), g.minDistance = Math.max(0.05, L * 0.01), g.maxDistance = Math.max(50, L * 50), g.update(), ae();
  }), new ResizeObserver((L) => {
    var _a, _b;
    for (const I of L) {
      const W = (_a = I.target) == null ? void 0 : _a.clientWidth, H = (_b = I.target) == null ? void 0 : _b.clientHeight;
      if (W === 0 || H === 0) continue;
      const oe = (O ? W / 2 : W) / H;
      f.aspect = oe, f.updateProjectionMatrix();
      const Se = v.top;
      if (v.left = -Se * oe, v.right = Se * oe, v.updateProjectionMatrix(), E && E.isPerspectiveCamera) E.aspect = oe, E.updateProjectionMatrix();
      else if (E && E.isOrthographicCamera) {
        const he = E, ze = he.top;
        he.left = -ze * oe, he.right = ze * oe, he.updateProjectionMatrix();
      }
      z.setSize(W, H), ae();
    }
  }).observe(_), g.addEventListener("change", ae), B.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, k.displayScale.val, k.nodes.val, k.elements.val, (_g = k.edges) == null ? void 0 : _g.val, k.elemColumns.val, k.elemBeams.val, k.nodesIndexes.val, k.elementsIndexes.val, k.orientations.val, k.sections.val, k.secColumns.val, k.secBeams.val, k.secFloor.val, k.supports.val, k.loads.val, k.deformedShape.val, k.nodeResults.val, k.frameResults.val, k.shellResults.val, (_h = k.solidResults) == null ? void 0 : _h.val, setTimeout(ae);
  });
  let O = false, E = null, Z = null, pe = false;
  function ae() {
    const L = _.clientWidth || 1, I = _.clientHeight || 1;
    if (!O || !E) {
      z.setScissorTest(false), z.setViewport(0, 0, L, I), z.render(y, C);
      return;
    }
    const W = L / 2;
    z.setScissorTest(true), z.setViewport(0, 0, W, I), z.setScissor(0, 0, W, I), z.render(y, C), z.setViewport(W, 0, W, I), z.setScissor(W, 0, W, I), z.render(y, E), z.setScissorTest(false);
  }
  function re(L) {
    C = L, g.object = L, g.update(), ae();
  }
  function Me(L, I) {
    O = L, I && (E = I);
    const W = _.clientWidth || 1, H = _.clientHeight || 1, oe = (L ? W / 2 : W) / H;
    f.isPerspectiveCamera && (f.aspect = oe, f.updateProjectionMatrix());
    const Se = v.top;
    if (v.left = -Se * oe, v.right = Se * oe, v.updateProjectionMatrix(), L && E) {
      if (Z ? (Z.object = E, Z.update()) : (Z = new Wn(E, z.domElement), Z.enableDamping = true, Z.dampingFactor = 0.1, Z.screenSpacePanning = true, Z.zoomSpeed = 0.8, Z.panSpeed = 1.2, Z.rotateSpeed = 0.9, Z.touches = { ONE: an.ROTATE, TWO: an.DOLLY_PAN }, Z.target.copy(g.target), Z.addEventListener("change", ae), Z.enabled = false), !pe) {
        const he = (ze) => {
          if (!O || !Z) return;
          const Pe = z.domElement.getBoundingClientRect(), Xe = ze.clientX - Pe.left, qe = Pe.width / 2, Fe = Xe >= qe;
          g.enabled = !Fe, Z.enabled = Fe;
        };
        z.domElement.addEventListener("pointerdown", he, true), z.domElement.addEventListener("wheel", he, { capture: true, passive: true }), pe = true;
      }
    } else L || (g.enabled = true, Z && (Z.enabled = false));
    _.__splitMode = L, window.__hekatanSplitMode = L, window.__hekatanSplitCamera = L ? E : null, ae();
  }
  if (e) {
    y.add(zo(k, le, te), Po(e, k, le), To(k, le, te), Eo(e, k, le, te), Vo(e, k, le, te), Ao(e, k, le, te), Io(e, k, le, te), Yo(e, k, le, te), No(e, k, le, te), Ro(e, k, le, te));
    const L = ls({ scene: y, rendererElm: z.domElement, getActiveCamera: () => C, derivedNodes: le, derivedDisplayScale: te, mesh: e, settings: k, render: ae });
    y.add(L);
    const I = ys(e, k), W = Go(e, k, le, I), H = On(I);
    y.add(W), _.appendChild(H);
    const ce = jo(e, k, le);
    y.add(ce);
    const oe = ce.__colorMapValues, Se = On(oe);
    Se.id = "frame-legend", _.appendChild(Se), B.derive(() => {
      var _a;
      const he = k.shellResults.val != "none", ze = (((_a = k.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", Pe = he || ze, Xe = k.frameResults.val.startsWith("contour:");
      H.hidden = !Pe, W.visible = Pe, Se.hidden = !Xe;
    });
  }
  if (r) {
    const L = new _o(16777215, 0.5);
    y.add(L);
    const I = new Gn(16777215, 0.5);
    I.position.set(30, 25, -10), I.shadow.mapSize.width = 1024, I.shadow.mapSize.height = 1024, y.add(I);
    const W = 10;
    I.shadow.camera.left = -W, I.shadow.camera.right = W, I.shadow.camera.top = W, I.shadow.camera.bottom = -W, I.shadow.camera.far = 1e3;
    const H = new Gn(16777215, 0.5);
    H.color.setHSL(11, 43, 96), H.position.set(-10, 0, 30), y.add(H), B.derive(() => {
      (r == null ? void 0 : r.val.length) && (y.remove(...r.oldVal), y.add(...r.rawVal), ae());
    }), B.derive(() => {
      r.rawVal.forEach((ce) => ce.visible = k.solids.val), ae();
    });
  }
  if (p) {
    const L = [], I = (H) => {
      var _a;
      return ((_a = H == null ? void 0 : H.userData) == null ? void 0 : _a.isCota) ? k.showCotas.val : k.custom3D.val;
    }, W = () => {
      for (const H of L) H.visible = I(H);
      ae();
    };
    B.derive(() => {
      const H = p.val;
      L.length && (y.remove(...L), L.length = 0), H.length && (y.add(...H), L.push(...H), W()), ae();
    }), B.derive(() => {
      k.custom3D.val, W();
    }), B.derive(() => {
      k.showCotas.val, W();
    });
  }
  w && Zo({ drawingObj: w, gridObj: V, scene: y, getActiveCamera: () => C, controls: g, gridSize: P, derivedDisplayScale: te, rendererElm: z.domElement, viewerRender: ae }), un((L, I) => {
    var _a;
    z.setClearColor(I.background, 1), y.remove(V), (_a = V.traverse) == null ? void 0 : _a.call(V, (W) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = W.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = W.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), V = Sn(k.gridSize.rawVal, { planes: xe() }), y.add(V), _.style.setProperty("--awatif-legend-color", I.legendMarker), ae();
  });
  const ke = { scene: y, perspCamera: f, orthoCamera: v, get camera() {
    return C;
  }, controls: g, renderer: z, rendererElm: z.domElement, render: ae, setActiveCamera: re, setSplitMode: Me, get splitMode() {
    return O;
  }, get splitCamera() {
    return E;
  }, settings: k };
  _.__ctx = ke;
  const _e = document.createElement("div");
  _e.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const Ce = (L, I, W) => {
    const H = document.createElement("button");
    return H.textContent = L, H.title = I, H.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), H.onmouseenter = () => {
      H.style.background = "rgba(70,70,70,0.9)";
    }, H.onmouseleave = () => {
      H.style.background = "rgba(40,40,40,0.85)";
    }, H.onclick = (ce) => {
      ce.preventDefault(), W();
    }, H;
  }, Ie = (L, I) => {
    const W = g.target, H = new b().subVectors(C.position, W), ce = H.length(), oe = new b(), Se = new b();
    oe.crossVectors(C.up, H).normalize(), Se.copy(C.up).normalize();
    const he = ce * 0.05;
    W.addScaledVector(oe, -L * he), W.addScaledVector(Se, I * he), C.position.addScaledVector(oe, -L * he), C.position.addScaledVector(Se, I * he), g.update(), ae();
  }, se = (L) => {
    const I = new b().subVectors(C.position, g.target);
    I.multiplyScalar(L), C.position.copy(g.target).add(I), g.update(), ae();
  }, fe = () => {
    const L = document.createElement("div");
    return L.style.cssText = "width:32px;height:32px;", L;
  };
  return _e.append(fe()), _e.append(Ce("\u2191", "Pan arriba", () => Ie(0, 1))), _e.append(Ce("\u2295", "Zoom in", () => se(0.85))), _e.append(Ce("\u2190", "Pan izquierda", () => Ie(-1, 0))), _e.append(Ce("\u2302", "Reset vista", () => {
    g.reset(), ae();
  })), _e.append(Ce("\u2192", "Pan derecha", () => Ie(1, 0))), _e.append(Ce("\u2296", "Zoom out", () => se(1.18))), _e.append(Ce("\u2193", "Pan abajo", () => Ie(0, -1))), _e.append(fe()), getComputedStyle(_).position === "static" && (_.style.position = "relative"), _.appendChild(_e), _;
}
function ps(e, s) {
  return B.derive(() => {
    var _a, _b, _c, _d;
    if (!s.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const w = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], p = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!p || w.length === 0) return w;
    const r = s.deformScale.val, _ = s.deformScale.val * s.deformScaleZ.val, y = Number.isFinite(r) ? r : 1, f = Number.isFinite(_) ? _ : 1;
    return w.map((v, C) => {
      var _a2;
      const z = ((_a2 = p.get(C)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], g = Number.isFinite(z[0]) ? z[0] : 0, q = Number.isFinite(z[1]) ? z[1] : 0, j = Number.isFinite(z[2]) ? z[2] : 0;
      return [v[0] + g * y, v[1] + q * y, v[2] + j * f];
    });
  });
}
const An = B.state(null), Pn = B.state(""), fs = B.state("kN"), us = B.state("mm"), hs = B.state("kN/m\xB2"), ms = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, jn = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, ws = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function ys(e, s) {
  const w = B.state([]);
  let p;
  return ((r) => {
    r.bendingXX = "bendingXX", r.bendingYY = "bendingYY", r.bendingXY = "bendingXY", r.membraneXX = "membraneXX", r.membraneYY = "membraneYY", r.membraneXY = "membraneXY", r.tranverseShearX = "tranverseShearX", r.tranverseShearY = "tranverseShearY", r.vonMises = "vonMises", r.pressure = "pressure", r.displacementX = "displacementX", r.displacementY = "displacementY", r.displacementZ = "displacementZ";
  })(p || (p = {})), B.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const r = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), J = (ke, _e2) => {
      ke == null ? void 0 : ke.forEach((Ce, Ie) => {
        const se = e.elements.val[Ie];
        if (se) for (let fe = 0; fe < se.length; fe++) _e2.set(se[fe], [Ce[fe] ?? Ce[0]]);
      });
    };
    J((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, r), J((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, _), J((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, y), J((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, f), J((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, v), J((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, C), J((_n2 = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n2.tranverseShearX, z), J((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, g), J((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, q), J((_t = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t.pressure, j);
    const we = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, k = (_w = s.solidResults) == null ? void 0 : _w.val, le = k && k !== "none" ? k : s.shellResults.val, xe = we == null ? void 0 : we[le], K = { bendingXX: [r, 0], bendingYY: [_, 0], bendingXY: [y, 0], membraneXX: [f, 0], membraneYY: [v, 0], membraneXY: [C, 0], tranverseShearX: [z, 0], tranverseShearY: [g, 0], vonMises: [q, 0], pressure: [j, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, V = s.shellResults.val, X = fs.val, F = us.val, P = V === "displacementX" || V === "displacementY" || V === "displacementZ", T = V === "bendingXX" || V === "bendingYY" || V === "bendingXY", $ = V === "membraneXX" || V === "membraneYY" || V === "membraneXY", A = V === "vonMises" || V === "pressure", Y = V === "tranverseShearX" || V === "tranverseShearY", U = (_D = s.solidResults) == null ? void 0 : _D.val, ne = U === "vonMises" || U === "sigmaXX" || U === "sigmaYY" || U === "sigmaZZ" || U === "tauXY" || U === "tauYZ" || U === "tauXZ", O = U === "ux" || U === "uy" || U === "uz", E = hs.val, Z = ne ? ws[E] : O || P ? jn[F] : T || $ || A || Y ? 1 / ms[X] : 1, pe = ne ? E : O || P ? F : T ? `${X}\xB7m/m` : $ ? `${X}/m\xB2` : A ? `${X}/m\xB2` : Y ? `${X}/m` : "";
    Pn.val = pe, An.val = Array.isArray(xe) && xe.length === 2 ? [xe[0] * Z, xe[1] * Z] : null;
    const re = U && U !== "none" ? [q, 0] : K[V], Me = [];
    e.nodes.val.forEach((ke, _e2) => {
      const Ce = re;
      if (!Ce || !Ce[0] || typeof Ce[0].has != "function") return;
      if (!Ce[0].has(_e2)) {
        Me.push(Number.NaN);
        return;
      }
      const Ie = Ce[0].get(_e2), se = Ie ? Ie[Ce[1]] ?? 0 : 0;
      Me.push(se * Z);
    }), w.val = Me;
  }), w;
}
export {
  Wo as a,
  On as b,
  fs as c,
  us as d,
  hs as e,
  bs as g
};
