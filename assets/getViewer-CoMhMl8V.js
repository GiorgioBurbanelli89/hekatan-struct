import { Y as cn, B as fe, Z as dn, F as nt, G as Ne, c as At, L as Oe, e as Ke, D as yt, d as Ze, u as it, i as to, b as fo, V as M, z as Xt, H as lt, _ as _n, n as no, a as ht, j as Ue, l as pn, $ as fn, g as uo, f as ho, s as on, N as Qt, S as Nt, a0 as Rn, o as Dn, q as Nn, r as Zn, a1 as Un, a2 as sn, a3 as mo, a4 as wo, a5 as xo, a6 as yo, a7 as go, p as Kn, a8 as Hn, C as Wn, t as vo, v as bo, w as Mo, W as _o, x as Gn, a9 as an, J as Sn, A as So, y as qn, O as ko } from "./Text-BmY6zyQy.js";
import { v as X, P as oo, g as Lt, o as un } from "./theme-2eEBQPmF.js";
import "./styles-lf_LNy9d.js";
function Co(e, s, w) {
  const p = document.createElement("div"), r = new oo({ title: "Settings", expanded: true, container: p });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(r), p.setAttribute("id", "settings");
  const g = "hk_settingsPos";
  let x = null;
  try {
    const v = localStorage.getItem(g);
    v && (x = JSON.parse(v));
  } catch {
  }
  p.style.cssText = ["position:fixed", x ? `left:${x.left}px` : "left:8px", x ? `top:${x.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const f = () => {
    const v = p.querySelector(".tp-rotv_b");
    if (!v) {
      setTimeout(f, 200);
      return;
    }
    v.style.cursor = "move", v.style.userSelect = "none";
    let q = false, O = 0, J = 0, we = 0, k = 0;
    v.addEventListener("mousedown", (j) => {
      q = true, O = j.clientX, J = j.clientY;
      const xe = p.getBoundingClientRect();
      we = xe.left, k = xe.top, p.style.left = `${we}px`, p.style.top = `${k}px`;
    }), window.addEventListener("mousemove", (j) => {
      if (!q) return;
      const xe = j.clientX - O, be = j.clientY - J, N = Math.max(0, Math.min(window.innerWidth - 40, we + xe)), H = Math.max(0, Math.min(window.innerHeight - 40, k + be));
      p.style.left = `${N}px`, p.style.top = `${H}px`;
    }), window.addEventListener("mouseup", () => {
      if (q) {
        q = false;
        try {
          localStorage.setItem(g, JSON.stringify({ left: parseFloat(p.style.left), top: parseFloat(p.style.top) }));
        } catch {
        }
      }
    });
  };
  if (f(), s == null ? void 0 : s.nodes) {
    r.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 });
    const v = r.addFolder({ title: "\u{1F4D0} Grid", expanded: true });
    v.addBinding(e.gridSize, "val", { label: "Dimensi\xF3n (m)", min: 1, max: 100, step: 1 }), v.addBinding(e.gridStep, "val", { label: "Separaci\xF3n grid (m)", min: 0.05, max: 5, step: 0.05 }), v.addBinding(e.gridMajor, "val", { label: "Separaci\xF3n mayores (m)", min: 0.1, max: 50, step: 0.1 }), v.addBinding(e.cursorSnap, "val", { label: "Paso cursor (m)", min: 0.05, max: 5, step: 0.05 }), v.addBinding(e.gridVisible, "val", { label: "Mostrar" }), v.addBinding(e.gridOpacity, "val", { label: "Opacidad", min: 0, max: 1, step: 0.05 }), v.addBinding(e.gridXY, "val", { label: "Plano XY (planta)" }), v.addBinding(e.gridXZ, "val", { label: "Plano XZ (frontal)" }), v.addBinding(e.gridYZ, "val", { label: "Plano YZ (lateral)" }), r.addBinding(e.nodes, "val", { label: "Nodes" }), r.addBinding(e.elements, "val", { label: "Elements" }), r.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), r.addBinding(e.faces, "val", { label: "  Caras (fill)" }), r.addBinding(e.elemColumns, "val", { label: "  Columnas" }), r.addBinding(e.elemBeams, "val", { label: "  Vigas" }), r.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), r.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), r.addBinding(e.orientations, "val", { label: "Orientations" }), r.addBinding(e.sections, "val", { label: "Sections" }), r.addBinding(e.sectionLabels, "val", { label: "  Sec. Labels (30x50)" }), r.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), r.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), r.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } });
  }
  if ((s == null ? void 0 : s.nodeInputs) || (s == null ? void 0 : s.elementInputs)) {
    const v = r.addFolder({ title: "Analysis Inputs" });
    v.addBinding(e.supports, "val", { label: "Supports" }), v.addBinding(e.loads, "val", { label: "Loads" }), v.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), v.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((s == null ? void 0 : s.deformOutputs) || (s == null ? void 0 : s.analyzeOutputs)) {
    const v = r.addFolder({ title: "Analysis Outputs" });
    v.addBinding(e.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), v.addBinding(e.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), v.addBinding(e.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), v.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), v.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), v.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), v.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  w && r.addBinding(e.solids, "val", { label: "Solids" });
  const b = r.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), C = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), z = () => {
    const v = window.__hekatanClipApply;
    typeof v == "function" && v();
  };
  return b.addBinding(C, "enableX", { label: "Cortar X" }).on("change", z), b.addBinding(C, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", z), b.addBinding(C, "invertX", { label: "  invertir X" }).on("change", z), b.addBinding(C, "enableY", { label: "Cortar Y" }).on("change", z), b.addBinding(C, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", z), b.addBinding(C, "invertY", { label: "  invertir Y" }).on("change", z), b.addBinding(C, "enableZ", { label: "Cortar Z" }).on("change", z), b.addBinding(C, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", z), b.addBinding(C, "invertZ", { label: "  invertir Z" }).on("change", z), p;
}
function zo(e) {
  return { gridSize: X.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: X.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: X.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: X.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: X.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: X.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: X.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: X.state((e == null ? void 0 : e.gridXZ) ?? false), gridYZ: X.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: X.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: X.state((e == null ? void 0 : e.nodes) ?? true), elements: X.state((e == null ? void 0 : e.elements) ?? true), edges: X.state((e == null ? void 0 : e.edges) ?? true), faces: X.state((e == null ? void 0 : e.faces) ?? true), elemColumns: X.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: X.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: X.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: X.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: X.state((e == null ? void 0 : e.orientations) ?? false), sections: X.state((e == null ? void 0 : e.sections) ?? true), sectionLabels: X.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: X.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: X.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: X.state((e == null ? void 0 : e.secFloor) ?? -1), supports: X.state((e == null ? void 0 : e.supports) ?? true), loads: X.state((e == null ? void 0 : e.loads) ?? false), deformedShape: X.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: X.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: X.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: X.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: X.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: X.state((e == null ? void 0 : e.flipAxes) ?? false), solids: X.state((e == null ? void 0 : e.solids) ?? true), custom3D: X.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: X.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: X.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: X.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function Po(e, s, w) {
  const p = Lt(), r = new cn(new fe(), new dn({ color: p.nodePoint }));
  return un((g, x) => {
    r.material.color.setHex(x.nodePoint);
  }), r.frustumCulled = false, X.derive(() => {
    e.nodes.val && r.geometry.setAttribute("position", new nt(s.val.flat(), 3));
  }), X.derive(() => {
    if (w.val, s.val, !e.nodes.rawVal) return;
    const g = s.rawVal ?? [];
    let x = e.gridSize.val * 0.5;
    if (g.length >= 2) {
      const b = [1 / 0, 1 / 0, 1 / 0], C = [-1 / 0, -1 / 0, -1 / 0];
      for (const z of g) for (let v = 0; v < 3; v++) b[v] = Math.min(b[v], z[v]), C[v] = Math.max(C[v], z[v]);
      x = Math.max(C[0] - b[0], C[1] - b[1], C[2] - b[2], 0.1);
    }
    const f = 0.03 * x;
    r.material.size = f * w.rawVal;
  }), X.derive(() => {
    r.visible = e.nodes.val;
  }), r;
}
function Fo(e, s, w) {
  const p = Lt(), r = new Ne(), g = new At(new fe(), new Oe({ color: p.elementLine }));
  un((q, O) => {
    g.material.color.setHex(O.elementLine);
  }), g.frustumCulled = false, g.renderOrder = 2, r.add(g);
  const x = new Ke({ vertexColors: true, transparent: true, opacity: p.shellOpacity, side: yt, depthWrite: false, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }), f = new Ze(new fe(), x);
  f.frustumCulled = false, f.userData.isShellArea = true, f.name = "__hekatan_shell_area", r.add(f);
  let b = new it(p.shellWall), C = new it(p.shellSlab), z = new it(p.shellTri);
  un((q, O) => {
    b = new it(O.shellWall), C = new it(O.shellSlab), z = new it(O.shellTri), x.opacity = O.shellOpacity, x.needsUpdate = true;
  });
  function v(q, O) {
    const J = Math.abs(O[0] - q[0]), we = Math.abs(O[1] - q[1]), k = Math.abs(O[2] - q[2]);
    return k > J && k > we || we > J && we > k;
  }
  return X.derive(() => {
    var _a;
    if (s.deformedShape.val, s.elemColumns.val, s.elemBeams.val, !s.elements.val) return;
    const q = s.elemColumns.rawVal, O = s.elemBeams.rawVal, J = w.val, we = ((_a = e.elements) == null ? void 0 : _a.val) || [], k = we.filter((N) => {
      if (N.length !== 2) return true;
      const H = J[N[0]], U = J[N[1]];
      if (!H || !U) return true;
      const E = v(H, U);
      return !(E && !q || !E && !O);
    }).map((N) => Vo(N).map((H) => [...J[H[0]], ...J[H[1]]]).flat()).flat();
    g.geometry.setAttribute("position", new nt(k, 3));
    const j = [], xe = [];
    function be(N, H, U, E) {
      const L = [H[0] - N[0], H[1] - N[1], H[2] - N[2]], V = [E[0] - N[0], E[1] - N[1], E[2] - N[2]], A = L[1] * V[2] - L[2] * V[1], Y = L[2] * V[0] - L[0] * V[2], P = L[0] * V[1] - L[1] * V[0], B = Math.sqrt(A * A + Y * Y + P * P);
      return B < 1e-12 ? false : Math.abs(P / B) < 0.5;
    }
    for (const N of we) if (N.length === 3) {
      const [H, U, E] = N;
      if (J[H] && J[U] && J[E]) {
        j.push(...J[H], ...J[U], ...J[E]);
        for (let L = 0; L < 3; L++) xe.push(z.r, z.g, z.b);
      }
    } else if (N.length === 4) {
      const [H, U, E, L] = N;
      if (J[H] && J[U] && J[E] && J[L]) {
        const V = be(J[H], J[U], J[E], J[L]) ? b : C;
        j.push(...J[H], ...J[U], ...J[E]), j.push(...J[H], ...J[E], ...J[L]);
        for (let A = 0; A < 6; A++) xe.push(V.r, V.g, V.b);
      }
    }
    j.length > 0 ? (f.geometry.dispose(), f.geometry = new fe(), f.geometry.setAttribute("position", new nt(j, 3)), f.geometry.setAttribute("color", new nt(xe, 3)), f.geometry.computeVertexNormals(), f.visible = s.faces ? s.faces.rawVal : true) : f.visible = false;
  }), X.derive(() => {
    r.visible = s.elements.val;
  }), X.derive(() => {
    s.edges && (g.visible = s.edges.val);
  }), X.derive(() => {
    if (!s.faces) return;
    const q = s.faces.val;
    f.geometry.attributes.position ? f.visible = q : q || (f.visible = false);
  }), r;
}
function Vo(e) {
  if (e.length === 2) return [e];
  const s = [];
  for (let w = 0; w < e.length; w++) s.push([e[w], e[(w + 1) % e.length]]);
  return s;
}
function kn(e, s) {
  const w = Lt(), p = new Ne();
  p.name = "hekatan-grid";
  const r = (s == null ? void 0 : s.planes) ?? ["xy"];
  let g = (s == null ? void 0 : s.majorStep) ?? 1, x = (s == null ? void 0 : s.minorStep) ?? 0.1;
  for (g <= 0 && (g = 1), x <= 0 && (x = 0.1); e / x > 500; ) x *= 2;
  for (; e / g > 100; ) g *= 2;
  const f = e / 2;
  g = Math.max(x, Math.round(g / x) * x);
  const C = new it(w.grid), z = new it(w.grid).multiplyScalar(0.45), v = (O, J, we, k) => {
    const j = [], xe = O === "xy" ? (E, L) => [E, L, 0] : O === "xz" ? (E, L) => [E, 0, L] : (E, L) => [0, E, L], be = Math.floor(f / J);
    for (let E = -be; E <= be; E++) {
      const L = E * J, V = xe(L, -f), A = xe(L, f);
      j.push(...V, ...A);
    }
    for (let E = -be; E <= be; E++) {
      const L = E * J, V = xe(-f, L), A = xe(f, L);
      j.push(...V, ...A);
    }
    const N = new fe();
    N.setAttribute("position", new nt(j, 3));
    const H = new Oe({ color: we, transparent: true, opacity: k, depthWrite: false }), U = new At(N, H);
    return U.name = `grid-${O}-${J === x ? "minor" : "major"}`, U;
  }, q = (O, J, we) => {
    const k = O === "xy" ? (U, E) => [U, E, 0] : O === "xz" ? (U, E) => [U, 0, E] : (U, E) => [0, U, E], j = [[-f, -f], [f, -f], [f, f], [-f, f]], xe = [];
    for (const [U, E] of j) xe.push(...k(U, E));
    const be = new fe();
    be.setAttribute("position", new nt(xe, 3));
    const N = new Oe({ color: J, transparent: true, opacity: we, depthWrite: false }), H = new to(be, N);
    return H.name = `grid-${O}-border`, H.renderOrder = 1, H;
  };
  for (const O of r) p.add(v(O, x, z, 0.12)), p.add(v(O, g, C, 0.4)), p.add(q(O, C, 0.55));
  return p.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: g, minorStep: x, gridSize: e, planes: [...r] }, p;
}
function Ao(e, s, w, p) {
  const r = new Ne(), g = new fo(0.5, 0.5, 0.5), x = new Ke({ color: 10166822 });
  return X.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, !s.supports.val) return;
    r.clear();
    const f = 0.18 * s.gridSize.val * 0.6;
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((b, C) => {
      const z = w.val[C];
      if (!z) return;
      const v = new Ze(g, x);
      v.position.set(...z);
      const q = f * p.rawVal;
      v.scale.set(q, q, q), r.add(v);
    });
  }), X.derive(() => {
    if (p.val, !s.supports.rawVal) return;
    const b = 0.18 * s.gridSize.val * 0.6 * p.rawVal;
    r.children.forEach((C) => C.scale.set(b, b, b));
  }), X.derive(() => {
    r.visible = s.supports.val;
  }), r;
}
function To(e, s, w, p) {
  const r = new Ne();
  r.name = "loadsGroup";
  function g(x) {
    if (x.length < 2) return 0.12 * s.gridSize.rawVal;
    const f = [1 / 0, 1 / 0, 1 / 0], b = [-1 / 0, -1 / 0, -1 / 0];
    for (const z of x) for (let v = 0; v < 3; v++) f[v] = Math.min(f[v], z[v]), b[v] = Math.max(b[v], z[v]);
    return 0.08 * Math.max(b[0] - f[0], b[1] - f[1], b[2] - f[2], 0.1);
  }
  return X.derive(() => {
    var _a, _b, _c;
    if (s.deformedShape.val, !s.loads.val) return;
    r.children.forEach((b) => b.dispose()), r.clear();
    const x = w.val, f = g(x);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((b, C) => {
      const z = x[C];
      if (!z) return;
      const v = new M(...b.slice(0, 3));
      if (v.lengthSq() < 1e-30) return;
      v.normalize();
      const q = new Xt(v, new M(...z), 1, 15637248, 0.3, 0.3), O = f * p.rawVal;
      q.scale.set(O, O, O), r.add(q);
    });
  }), X.derive(() => {
    if (p.val, !s.loads.rawVal) return;
    const f = g(w.rawVal) * p.rawVal;
    r.children.forEach((b) => b.scale.set(f, f, f));
  }), X.derive(() => {
    r.visible = s.loads.val;
  }), r;
}
function Eo(e, s, w) {
  const p = new Ne();
  return X.derive(() => {
    if (!e.nodesIndexes.val) return;
    p.children.forEach((g) => g.dispose()), p.clear();
    const r = 0.05 * e.gridSize.val * 0.6;
    s.val.forEach((g, x) => {
      const f = new lt(`${x}`);
      f.position.set(...g), f.updateScale(r * w.rawVal), p.add(f);
    });
  }), X.derive(() => {
    if (w.val, !e.nodesIndexes.rawVal) return;
    const r = 0.05 * e.gridSize.val * 0.6;
    p.children.forEach((g) => g.updateScale(r * w.rawVal));
  }), X.derive(() => {
    p.visible = e.nodesIndexes.val;
  }), p;
}
function Lo(e, s, w, p) {
  const r = new Ne();
  return X.derive(() => {
    var _a;
    if (s.deformedShape.val, !s.elementsIndexes.val) return;
    r.children.forEach((x) => x.dispose()), r.clear();
    const g = 0.05 * s.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((x, f) => {
      const b = new lt(`${f}`, void 0, "#001219");
      b.position.set(...$o(x.map((C) => w.rawVal[C]))), b.updateScale(g * p.rawVal), r.add(b);
    });
  }), X.derive(() => {
    if (p.val, !s.elementsIndexes.rawVal) return;
    const g = 0.05 * s.gridSize.val * 0.6;
    r.children.forEach((x) => x.updateScale(g * p.rawVal));
  }), X.derive(() => {
    r.visible = s.elementsIndexes.val;
  }), r;
}
function $o(e) {
  const s = e.reduce((p, r) => [p[0] + r[0], p[1] + r[1], p[2] + r[2]], [0, 0, 0]), w = e.length;
  return [s[0] / w, s[1] / w, s[2] / w];
}
function Jn(e, s) {
  const w = new Ne(), p = 0.05 * e * 1, r = Lt(), g = new lt("X", "red", "transparent"), x = new lt(s ? "Z" : "Y", "green", "transparent"), f = new lt(s ? "Y" : "Z", "blue", "transparent"), b = new Xt(new M(1, 0, 0), new M(0, 0, 0), 1, r.axisArrow, 0.2, 0.2), C = new Xt(new M(0, 1, 0), new M(0, 0, 0), 1, r.axisArrow, 0.2, 0.2), z = new Xt(new M(0, 0, 1), new M(0, 0, 0), 1, r.axisArrow, 0.2, 0.2);
  return g.position.set(1.3 * p, 0, 0), x.position.set(0, 1.3 * p, 0), f.position.set(0, 0, 1.3 * p), g.updateScale(0.4 * p), x.updateScale(0.4 * p), f.updateScale(0.4 * p), b.scale.set(p, p, p), C.scale.set(p, p, p), z.scale.set(p, p, p), w.add(b, C, z, g, x, f), w;
}
function Vn(e, s) {
  const w = new M(...e), r = new M(...s).clone().sub(w), g = r.length(), x = r.dot(new M(1, 0, 0)) / g, f = r.dot(new M(0, 1, 0)) / g, b = r.dot(new M(0, 0, 1)) / g, C = Math.sqrt(x ** 2 + f ** 2);
  let z = new _n().fromArray([[x, f, b], [-f / C, x / C, 0], [-x * b / C, -f * b / C, C]].flat());
  return b === 1 && (z = new _n().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), b === -1 && (z = new _n().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new no().setFromMatrix3(z);
}
function Pn(e, s) {
  return e == null ? void 0 : e.map((w, p) => (9 * w + s[p]) / 10);
}
function jt(e) {
  const s = e.reduce((p, r) => [p[0] + r[0], p[1] + r[1], p[2] + r[2]], [0, 0, 0]), w = e.length;
  return [s[0] / w, s[1] / w, s[2] / w];
}
function Io(e, s, w) {
  const p = jt([s, w]), r = jt([e, w]), g = jt([e, s]), x = new M(...p).sub(new M(...r)).normalize(), f = new M(...w).sub(new M(...g)).normalize(), b = x.clone().cross(f).normalize(), C = b.clone().cross(x).normalize();
  return new no().makeBasis(x, C, b);
}
function Xo(e, s, w, p) {
  const r = new Ne(), g = new fe(), x = new Oe({ vertexColors: true }), f = [0, 0, 0], b = [1, 0, 0], C = [0, 1, 0], z = [0, 0, 1];
  g.setAttribute("position", new nt([...f, ...b, ...f, ...C, ...f, ...z], 3));
  const v = [255, 0, 0], q = [0, 255, 0], O = [0, 0, 255];
  return g.setAttribute("color", new nt([...v, ...v, ...q, ...q, ...O, ...O], 3)), X.derive(() => {
    var _a;
    s.deformedShape.val, s.orientations.val && (r.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((J) => {
      const we = new At(g, x), k = w.rawVal[J[0]], j = w.rawVal[J[1]];
      if (J.length === 2 && (we.position.set(...Pn(k, j)), we.rotation.setFromRotationMatrix(Vn(k, j))), J.length === 3) {
        const N = w.rawVal[J[2]];
        we.position.set(...jt([k, j, N])), we.rotation.setFromRotationMatrix(Io(k, j, N));
      }
      const be = 0.05 * s.gridSize.rawVal * 0.75 * p.rawVal;
      we.scale.set(be, be, be), r.add(we);
    }));
  }), X.derive(() => {
    if (p.val, !s.orientations.rawVal) return;
    const we = 0.05 * s.gridSize.val * 0.75 * p.rawVal;
    r.children.forEach((k) => k.scale.set(we, we, we));
  }), X.derive(() => {
    r.visible = s.orientations.val;
  }), r;
}
function Yo(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const s = (e.b * 100).toFixed(0), w = (e.h * 100).toFixed(0);
    return `${s}x${w}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function Bo(e, s, w, p) {
  const r = new Ne(), g = new Ne();
  r.add(g);
  function x(U, E) {
    const L = U / 2, V = E / 2, A = new Float32Array([0, -L, -V, 0, L, -V, 0, L, V, 0, -L, -V, 0, L, V, 0, -L, V]), Y = new fe();
    Y.setAttribute("position", new Ue(A, 3));
    const P = new Float32Array([0, -L, -V, 0, L, -V, 0, L, V, 0, -L, V, 0, -L, -V]), B = new fe();
    return B.setAttribute("position", new Ue(P, 3)), { fill: Y, outline: B };
  }
  function f(U, E = 24) {
    const L = U / 2, V = new Float32Array(E * 9);
    for (let B = 0; B < E; B++) {
      const te = B / E * Math.PI * 2, Z = (B + 1) / E * Math.PI * 2;
      V[B * 9] = 0, V[B * 9 + 1] = 0, V[B * 9 + 2] = 0, V[B * 9 + 3] = 0, V[B * 9 + 4] = L * Math.cos(te), V[B * 9 + 5] = L * Math.sin(te), V[B * 9 + 6] = 0, V[B * 9 + 7] = L * Math.cos(Z), V[B * 9 + 8] = L * Math.sin(Z);
    }
    const A = new fe();
    A.setAttribute("position", new Ue(V, 3));
    const Y = new Float32Array((E + 1) * 3);
    for (let B = 0; B <= E; B++) {
      const te = B / E * Math.PI * 2;
      Y[B * 3] = 0, Y[B * 3 + 1] = L * Math.cos(te), Y[B * 3 + 2] = L * Math.sin(te);
    }
    const P = new fe();
    return P.setAttribute("position", new Ue(Y, 3)), { fill: A, outline: P };
  }
  function b(U, E, L, V) {
    const A = L ?? E * 0.08, Y = V ?? U * 0.07, P = U / 2, B = E / 2, te = B - A, Z = Y / 2, ne = [];
    function F(ue, Ce, re, ge) {
      ne.push(0, ue, Ce, 0, re, Ce, 0, re, ge, 0, ue, Ce, 0, re, ge, 0, ue, ge);
    }
    F(-P, -B, P, -te), F(-Z, -te, Z, te), F(-P, te, P, B);
    const oe = new fe();
    oe.setAttribute("position", new Ue(new Float32Array(ne), 3));
    const ie = new Float32Array([0, -P, -B, 0, P, -B, 0, P, -te, 0, Z, -te, 0, Z, te, 0, P, te, 0, P, B, 0, -P, B, 0, -P, te, 0, -Z, te, 0, -Z, -te, 0, -P, -te, 0, -P, -B]), ye = new fe();
    return ye.setAttribute("position", new Ue(ie, 3)), { fill: oe, outline: ye };
  }
  function C(U, E, L) {
    const V = U / 2, A = E / 2, Y = V - L, P = A - L, B = [];
    function te(oe, ie, ye, ue) {
      B.push(0, oe, ie, 0, ye, ie, 0, ye, ue, 0, oe, ie, 0, ye, ue, 0, oe, ue);
    }
    te(-V, -A, V, -P), te(-V, P, V, A), te(-V, -P, -Y, P), te(Y, -P, V, P);
    const Z = new fe();
    Z.setAttribute("position", new Ue(new Float32Array(B), 3));
    const ne = new Float32Array([0, -V, -A, 0, V, -A, 0, V, -A, 0, V, A, 0, V, A, 0, -V, A, 0, -V, A, 0, -V, -A, 0, -Y, -P, 0, Y, -P, 0, Y, -P, 0, Y, P, 0, Y, P, 0, -Y, P, 0, -Y, P, 0, -Y, -P]), F = new fe();
    return F.setAttribute("position", new Ue(ne, 3)), { fill: Z, outline: F };
  }
  function z(U, E, L) {
    const V = U / 2, A = E / 2, Y = V - L, P = A - L, B = new fe(), te = new Float32Array([0, -Y, -P, 0, Y, -P, 0, Y, P, 0, -Y, -P, 0, Y, P, 0, -Y, P]);
    B.setAttribute("position", new Ue(te, 3));
    const Z = [];
    function ne(ye, ue, Ce, re) {
      Z.push(0, ye, ue, 0, Ce, ue, 0, Ce, re, 0, ye, ue, 0, Ce, re, 0, ye, re);
    }
    ne(-V, -A, V, -P), ne(-V, P, V, A), ne(-V, -P, -Y, P), ne(Y, -P, V, P);
    const F = new fe();
    F.setAttribute("position", new Ue(new Float32Array(Z), 3));
    const oe = new Float32Array([0, -V, -A, 0, V, -A, 0, V, -A, 0, V, A, 0, V, A, 0, -V, A, 0, -V, A, 0, -V, -A, 0, -Y, -P, 0, Y, -P, 0, Y, -P, 0, Y, P, 0, Y, P, 0, -Y, P, 0, -Y, P, 0, -Y, -P]), ie = new fe();
    return ie.setAttribute("position", new Ue(oe, 3)), { concFill: B, steelFillGeom: F, outline: ie };
  }
  function v(U, E, L) {
    const V = [], A = [[0, -U / 2, -E / 2], [0, -U / 2 + L, -E / 2], [0, -U / 2 + L, E / 2 - L], [0, U / 2, E / 2 - L], [0, U / 2, E / 2], [0, -U / 2, E / 2]], Y = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const Z of Y) V.push(...A[Z]);
    const P = new fe();
    P.setAttribute("position", new Ue(new Float32Array(V), 3));
    const B = [];
    for (let Z = 0; Z < A.length; Z++) {
      const ne = (Z + 1) % A.length;
      B.push(...A[Z], ...A[ne]);
    }
    const te = new fe();
    return te.setAttribute("position", new Ue(new Float32Array(B), 3)), { fill: P, outline: te };
  }
  function q(U, E, L, V) {
    const A = V / 2, Y = [], P = [[0, -U - A, -E / 2], [0, -L - A, -E / 2], [0, -L - A, E / 2 - L], [0, -A, E / 2 - L], [0, -A, E / 2], [0, -U - A, E / 2]], B = [[0, A, -E / 2], [0, A + L, -E / 2], [0, A + L, E / 2 - L], [0, U + A, E / 2 - L], [0, U + A, E / 2], [0, A, E / 2]], te = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const oe of te) Y.push(...P[oe]);
    for (const oe of te) Y.push(...B[oe]);
    const Z = new fe();
    Z.setAttribute("position", new Ue(new Float32Array(Y), 3));
    const ne = [];
    for (const oe of [P, B]) for (let ie = 0; ie < oe.length; ie++) {
      const ye = (ie + 1) % oe.length;
      ne.push(...oe[ie], ...oe[ye]);
    }
    const F = new fe();
    return F.setAttribute("position", new Ue(new Float32Array(ne), 3)), { fill: Z, outline: F };
  }
  function O(U, E, L, V) {
    const A = E / 2, Y = U, P = [[0, -Y, -A], [0, -Y, -A + L], [0, -V, -A + L], [0, -V, A - L], [0, -Y, A - L], [0, -Y, A], [0, 0, A], [0, 0, -A]], B = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], te = [];
    for (const oe of B) te.push(...P[oe]);
    const Z = new fe();
    Z.setAttribute("position", new Ue(new Float32Array(te), 3));
    const ne = [];
    for (let oe = 0; oe < P.length; oe++) {
      const ie = (oe + 1) % P.length;
      ne.push(...P[oe], ...P[ie]);
    }
    const F = new fe();
    return F.setAttribute("position", new Ue(new Float32Array(ne), 3)), { fill: Z, outline: F };
  }
  function J(U, E, L, V, A) {
    const Y = E / 2, P = A / 2, B = [], te = [[0, -U, -Y], [0, -U, -Y + L], [0, -P - V, -Y + L], [0, -P - V, Y - L], [0, -U, Y - L], [0, -U, Y], [0, -P, Y], [0, -P, -Y]], Z = te.map((ye) => [ye[0], -ye[1], ye[2]]), ne = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const ye of ne) B.push(...te[ye]);
    for (const ye of ne) B.push(...Z[ye]);
    const F = new fe();
    F.setAttribute("position", new Ue(new Float32Array(B), 3));
    const oe = [];
    for (const ye of [te, Z]) for (let ue = 0; ue < ye.length; ue++) {
      const Ce = (ue + 1) % ye.length;
      oe.push(...ye[ue], ...ye[Ce]);
    }
    const ie = new fe();
    return ie.setAttribute("position", new Ue(new Float32Array(oe), 3)), { fill: F, outline: ie };
  }
  function we(U, E, L, V) {
    const A = U / 2, Y = E / 2, P = V / 2, B = [[0, -P, -Y], [0, P, -Y], [0, P, Y - L], [0, A, Y - L], [0, A, Y], [0, -A, Y], [0, -A, Y - L], [0, -P, Y - L]], te = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], Z = [];
    for (const ie of te) Z.push(...B[ie]);
    const ne = new fe();
    ne.setAttribute("position", new Ue(new Float32Array(Z), 3));
    const F = [];
    for (let ie = 0; ie < B.length; ie++) {
      const ye = (ie + 1) % B.length;
      F.push(...B[ie], ...B[ye]);
    }
    const oe = new fe();
    return oe.setAttribute("position", new Ue(new Float32Array(F), 3)), { fill: ne, outline: oe };
  }
  function k(U, E, L = 24) {
    const V = U / 2, A = V - E, Y = [];
    for (let Z = 0; Z < L; Z++) {
      const ne = Z / L * Math.PI * 2, F = (Z + 1) / L * Math.PI * 2, oe = Math.cos(ne), ie = Math.sin(ne), ye = Math.cos(F), ue = Math.sin(F);
      Y.push(0, V * oe, V * ie, 0, V * ye, V * ue, 0, A * ye, A * ue), Y.push(0, V * oe, V * ie, 0, A * ye, A * ue, 0, A * oe, A * ie);
    }
    const P = new fe();
    P.setAttribute("position", new Ue(new Float32Array(Y), 3));
    const B = [];
    for (let Z = 0; Z < L; Z++) {
      const ne = Z / L * Math.PI * 2, F = (Z + 1) / L * Math.PI * 2;
      B.push(0, V * Math.cos(ne), V * Math.sin(ne), 0, V * Math.cos(F), V * Math.sin(F)), B.push(0, A * Math.cos(ne), A * Math.sin(ne), 0, A * Math.cos(F), A * Math.sin(F));
    }
    const te = new fe();
    return te.setAttribute("position", new Ue(new Float32Array(B), 3)), { fill: P, outline: te };
  }
  const j = new Ke({ color: 52479, transparent: true, opacity: 0.35, side: yt, depthWrite: false }), xe = new Oe({ color: 52479 }), be = new Ke({ color: 16750848, transparent: true, opacity: 0.4, side: yt, depthWrite: false }), N = new Oe({ color: 16750848 });
  function H(U, E) {
    const L = Math.abs(E[0] - U[0]), V = Math.abs(E[1] - U[1]), A = Math.abs(E[2] - U[2]);
    return A > L && A > V || V > L && V > A;
  }
  return X.derive(() => {
    var _a, _b;
    s.deformedShape.val, s.secColumns.val, s.secBeams.val, s.secFloor.val;
    const U = s.secColumns.rawVal, E = s.secBeams.rawVal;
    if (!U && !E) {
      r.children.forEach((P) => {
        P instanceof lt && P.dispose();
      }), r.clear();
      return;
    }
    r.children.forEach((P) => {
      P instanceof lt && P.dispose();
    }), r.clear();
    const L = (_a = e.elements) == null ? void 0 : _a.val, V = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!L || !V) return;
    const A = V.sectionShapes, Y = s.secFloor.rawVal;
    L.forEach((P, B) => {
      if (P.length !== 2) return;
      const te = w.rawVal[P[0]], Z = w.rawVal[P[1]];
      if (!te || !Z) return;
      const ne = H(te, Z);
      if (ne && !U || !ne && !E) return;
      if (Y >= 0) {
        const ue = Math.min(te[1], Z[1]);
        Math.max(te[1], Z[1]);
        const Ce = s.gridSize.rawVal || 3;
        if (Math.floor(ue / Ce + 0.01) !== Y) return;
      }
      const F = A == null ? void 0 : A.get(B);
      if (!F) return;
      const oe = [(te[0] + Z[0]) / 2, (te[1] + Z[1]) / 2, (te[2] + Z[2]) / 2], ie = Vn(te, Z);
      if (F.type === "CFT") {
        const ue = z(F.b, F.h, F.tw ?? F.b * 0.05), Ce = new Ze(ue.concFill, j);
        Ce.position.set(...oe), Ce.rotation.setFromRotationMatrix(ie), r.add(Ce);
        const re = new Ze(ue.steelFillGeom, be);
        re.position.set(...oe), re.rotation.setFromRotationMatrix(ie), r.add(re);
        const ge = new ht(ue.outline, N);
        ge.position.set(...oe), ge.rotation.setFromRotationMatrix(ie), r.add(ge);
      } else {
        let ue, Ce, re;
        switch (F.type) {
          case "rect":
            ue = x(F.b, F.h), Ce = j, re = xe;
            break;
          case "circ":
            ue = f(F.d), Ce = j, re = xe;
            break;
          case "I":
            ue = b(F.b, F.h, F.tf, F.tw), Ce = be, re = N;
            break;
          case "HSS":
            ue = C(F.b, F.h, F.tw ?? F.b * 0.05), Ce = be, re = N;
            break;
          case "CFT":
            ue = z(F.b, F.h, F.tw ?? F.b * 0.05), Ce = be, re = N;
            break;
          case "L":
            ue = v(F.b ?? F.h, F.h, F.t ?? F.tw ?? 3e-3), Ce = be, re = N;
            break;
          case "2L":
            ue = q(F.b ?? F.h, F.h, F.t ?? F.tw ?? 3e-3, F.dis ?? 0.01), Ce = be, re = N;
            break;
          case "C":
          case "coldC":
            ue = O(F.b, F.h, F.tf ?? F.t ?? 3e-3, F.tw ?? F.t ?? 3e-3), Ce = be, re = N;
            break;
          case "2C":
            ue = J(F.b, F.h, F.tf ?? 5e-3, F.tw ?? 5e-3, F.dis ?? 0.01), Ce = be, re = N;
            break;
          case "T":
            ue = we(F.b, F.h, F.tf ?? 0.01, F.tw ?? 6e-3), Ce = be, re = N;
            break;
          case "pipe":
            ue = k(F.d, F.tw ?? F.d * 0.05), Ce = be, re = N;
            break;
          default:
            return;
        }
        const ge = new Ze(ue.fill, Ce);
        ge.position.set(...oe), ge.rotation.setFromRotationMatrix(ie), r.add(ge);
        const Te = new ht(ue.outline, re);
        Te.position.set(...oe), Te.rotation.setFromRotationMatrix(ie), r.add(Te);
      }
      const ye = Yo(F);
      if (ye) {
        const Ce = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(F.type) ? "#ff9900" : "#00ccff", re = new lt(ye, Ce, "transparent");
        re.position.set(oe[0], oe[1], oe[2]);
        const ge = 0.05 * s.gridSize.rawVal * 0.5;
        re.updateScale(ge * ((p == null ? void 0 : p.rawVal) ?? 1)), g.add(re);
      }
    });
  }), p && X.derive(() => {
    if (p.val, !s.sections.rawVal) return;
    const U = 0.05 * s.gridSize.val * 0.5;
    g.children.forEach((E) => {
      E instanceof lt && E.updateScale(U * p.rawVal);
    });
  }), X.derive(() => {
    r.visible = s.sections.val;
  }), X.derive(() => {
    g.visible = s.sectionLabels.val;
  }), r;
}
class ln extends Ne {
  constructor(s, w, p, r, g, x, f) {
    super();
    const b = new pn().moveTo(0, 0).lineTo(0, x[1]).lineTo(p, x[1]).lineTo(p, 0).lineTo(0, 0), C = b.getPoints(), z = new fe().setFromPoints(C);
    this.lines = new ht(z, new Oe({ color: Lt().resultOutline })), this.lines.position.set(...s), this.lines.rotation.setFromRotationMatrix(r), f && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const v = new fn(b), q = new Ke({ color: x[1] > 0 ? 24435 : 11411474, side: yt });
    this.mesh = new Ze(v, q), this.mesh.position.set(...s), this.mesh.rotation.setFromRotationMatrix(r), f && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new lt(`${g[1].toFixed(4)}`), this.normalizedResult = x, this.textPosition = jt([s, w]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(r), this.add(this.text);
  }
  updateScale(s) {
    this.lines.scale.set(1, s * 2, 1), this.mesh.scale.set(1, s * 2, 1), this.text.updateScale(s * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * s);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Qn extends Ne {
  constructor(s, w, p, r, g, x, f) {
    super();
    const b = g[0] * p / (g[0] + g[1]), C = g[0] * g[1] > 0;
    if (this.text = new lt(`${g[0].toFixed(4)}`), this.text2 = new lt(`${(g[1] * -1).toFixed(4)}`), this.normalizedResult = x, this.textPosition = Pn(s, w), this.text2Position = Pn(w, s), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(r), this.text2.rotation.setFromRotationMatrix(r), this.add(this.text, this.text2), C) {
      const z = new pn().moveTo(0, 0).lineTo(0, x[0]).lineTo(b, 0).lineTo(0, 0), v = new pn().moveTo(b, 0).lineTo(p, -x[1]).lineTo(p, 0).lineTo(b, 0), q = z.getPoints(), O = v.getPoints(), J = new fe().setFromPoints(q), we = new fe().setFromPoints(O), k = new Oe({ color: Lt().resultOutline });
      this.lines = new ht(J, k), this.lines2 = new ht(we, k), this.lines.position.set(...s), this.lines2.position.set(...s), this.lines.rotation.setFromRotationMatrix(r), this.lines2.rotation.setFromRotationMatrix(r), f && this.lines.rotateX(Math.PI / 2), f && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const j = new fn(z), xe = new fn(v), be = new Ke({ color: x[0] > 0 ? 24435 : 11411474, side: yt }), N = new Ke({ color: -x[1] > 0 ? 24435 : 11411474, side: yt });
      this.mesh = new Ze(j, be), this.mesh2 = new Ze(xe, N), this.mesh.position.set(...s), this.mesh2.position.set(...s), this.mesh.rotation.setFromRotationMatrix(r), this.mesh2.rotation.setFromRotationMatrix(r), f && this.mesh.rotateX(Math.PI / 2), f && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const z = new pn().moveTo(0, 0).lineTo(0, x[0]).lineTo(p, -x[1]).lineTo(p, 0).lineTo(0, 0), v = z.getPoints(), q = new fe().setFromPoints(v);
      this.lines = new ht(q, new Oe({ color: Lt().resultOutline })), this.lines.position.set(...s), this.lines.rotation.setFromRotationMatrix(r), f && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const O = new fn(z), J = new Ke({ color: x[0] > 0 ? 24435 : 11411474, side: yt });
      this.mesh = new Ze(O, J), this.mesh.position.set(...s), this.mesh.rotation.setFromRotationMatrix(r), f && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var so = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(so || {});
function Ro(e, s, w, p) {
  const r = new Ne(), g = { normals: ln, shearsY: ln, shearsZ: ln, torsions: ln, bendingsY: Qn, bendingsZ: Qn };
  return X.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, w.val, s.frameResults.val == "none") return;
    r.children.forEach((f) => f.dispose()), r.clear();
    const x = so[s.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[x]) == null ? void 0 : _b.forEach((f, b) => {
      var _a2, _b2;
      const C = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[b]) ?? [0, 1], z = w.rawVal[C[0]], v = w.rawVal[C[1]], q = new M(...v).distanceTo(new M(...z)), O = Do((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[x]), J = f == null ? void 0 : f.map((xe) => xe / (O === 0 ? 1 : O)), we = Vn(z, v), k = new g[x](z, v, q, we, f ?? [0, 0], J ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(x)), j = 0.05 * s.gridSize.rawVal;
      k.updateScale(j * p.rawVal), r.add(k);
    });
  }), X.derive(() => {
    if (p.val, s.frameResults.rawVal == "none") return;
    const x = 0.05 * s.gridSize.val;
    r.children.forEach((f) => f.updateScale(x * p.rawVal));
  }), X.derive(() => {
    r.visible = s.frameResults.val != "none";
  }), r;
}
function Do(e) {
  let s = 0;
  return e == null ? void 0 : e.forEach((w) => {
    const p = Math.max(...w ?? [0, 0]);
    p > s && (s = p);
  }), s;
}
class No extends Ne {
  constructor(s, w, p) {
    super();
    const r = w === An.reactions;
    p[0] && (this.xText1 = new lt(`${r ? "Fx" : "Dx"}: ` + p[0].toFixed(4))), p[3] && (this.xText2 = new lt(`${r ? "Mx" : "Rx"}: ` + p[3].toFixed(4))), p[1] && (this.yText1 = new lt(`${r ? "Fy" : "Dy"}: ` + p[1].toFixed(4))), p[4] && (this.yText2 = new lt(`${r ? "My" : "Ry"}: ` + p[4].toFixed(4))), p[2] && (this.zText1 = new lt(`${r ? "Fz" : "Dz"}: ` + p[2].toFixed(4))), p[5] && (this.zText2 = new lt(`${r ? "Mz" : "Rz"}: ` + p[5].toFixed(4))), (p[0] || p[3]) && (this.xArrow = new Xt(new M(1, 0, 0), new M(0, 0, 0), 1, 15637248, 0.3, 0.3)), (p[1] || p[4]) && (this.yArrow = new Xt(new M(0, 1, 0), new M(0, 0, 0), 1, 15637248, 0.3, 0.3)), (p[2] || p[5]) && (this.zArrow = new Xt(new M(0, 0, 1), new M(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...s), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
var An = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(An || {});
function Zo(e, s, w, p) {
  const r = new Ne();
  return X.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, s.nodeResults.val == "none") return;
    r.children.forEach((f) => f.dispose()), r.clear();
    const g = An[s.nodeResults.rawVal], x = 0.05 * s.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[g]) == null ? void 0 : _b.forEach((f, b) => {
      const C = new No(w.rawVal[b], g, f ?? [0, 0, 0, 0, 0, 0]);
      C.updateScale(x * p.rawVal), r.add(C);
    });
  }), X.derive(() => {
    if (p.val, s.nodeResults.rawVal == "none") return;
    const g = 0.05 * s.gridSize.val;
    r.children.forEach((x) => x.updateScale(g * p.rawVal));
  }), X.derive(() => {
    r.visible = s.nodeResults.val != "none";
  }), r;
}
function Uo({ drawingObj: e, gridObj: s, scene: w, getActiveCamera: p, controls: r, gridSize: g, derivedDisplayScale: x, rendererElm: f, viewerRender: b }) {
  const C = new uo(), z = new ho(), v = (n) => {
    const o = f.getBoundingClientRect(), a = n.clientX - o.left, t = n.clientY - o.top, h = o.width || 1, d = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const i = h / 2;
      if (a >= i) return z.x = (a - i) / i * 2 - 1, z.y = -(t / d) * 2 + 1, window.__hekatanSplitCamera ?? p();
      z.x = a / i * 2 - 1;
    } else z.x = a / h * 2 - 1;
    return z.y = -(t / d) * 2 + 1, p();
  }, q = new Ze(new on(1e4, 1e4), new Ke({ side: yt, transparent: true, opacity: 0, depthWrite: false }));
  q.visible = true, q.frustumCulled = false, w.add(q);
  const O = (n, o, a) => {
    const t = new Ze(new on(1e4, 1e4), new Ke({ side: yt, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, a), t.visible = false, t.frustumCulled = false, w.add(t), t;
  }, J = O(Math.PI / 2, 0, 0), we = O(0, Math.PI / 2, 0), k = () => {
    if (J.visible = !!window.__hekatanGridPlaneXZ, we.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanShowOrthoPlanes !== false && $.visible) {
      const a = C.intersectObjects([$, W, K], false);
      if (a.length > 0) return a;
    }
    const o = [q];
    return J.visible && o.push(J), we.visible && o.push(we), St.visible && zt.length > 0 && o.push(...zt), C.intersectObjects(o, false);
  }, j = new cn(new fe(), new dn()), xe = new cn(new fe(), new dn({ color: "gray", sizeAttenuation: false, size: 6 })), be = new cn(new fe(), new dn({ color: "orange", size: 0.1 }));
  w.add(be);
  const N = document.createElement("input");
  N.id = "hk-rubber-label", N.type = "text", N.spellcheck = false, N.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, N.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none"].join(";") + ";", document.body.appendChild(N);
  let H = null, U = null, E = false;
  const L = new M(), V = (n, o, a, t, h, d) => {
    const S = t - n, i = h - o, l = d - a, u = Math.hypot(S, i, l);
    if (u < 0.01) {
      N.style.display = "none";
      return;
    }
    H = [n, o, a], U = [S / u, i / u, l / u], L.set((n + t) / 2, (o + h) / 2, (a + d) / 2), L.project(p());
    const y = f.getBoundingClientRect(), c = y.left + (L.x * 0.5 + 0.5) * y.width, m = y.top + (-L.y * 0.5 + 0.5) * y.height;
    if (N.style.left = c + "px", N.style.top = m + "px", N.style.display = "block", !E) {
      if (N.value = `${u.toFixed(2)} m`, document.activeElement !== N) {
        const _ = document.activeElement;
        _ && (_.tagName === "INPUT" || _.tagName === "TEXTAREA") && _ !== N || N.focus({ preventScroll: true });
      }
      try {
        N.select();
      } catch {
      }
    }
  }, A = () => {
    N.style.display = "none", H = null, U = null, E = false, document.activeElement === N && N.blur();
  }, Y = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      dt = n, ve(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), N.blur();
      return;
    }
    if (!H || !U || !e.polylines) return;
    let a = U[0], t = U[1], h = U[2];
    ze === "x" ? (a = Math.sign(a) || 1, t = 0, h = 0) : ze === "y" ? (a = 0, t = Math.sign(t) || 1, h = 0) : ze === "z" && (a = 0, t = 0, h = Math.sign(h) || 1);
    const d = H[0] + a * n, S = H[1] + t * n, i = H[2] + h * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [d, S, i]];
    const l = e.polylines.rawVal, u = l.length ? l[l.length - 1] : [];
    e.polylines.val = [...l.slice(0, -1), [...u, e.points.rawVal.length - 1]], N.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    b();
  }, P = (n) => {
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
  }, B = (n) => {
    if (!n) return null;
    if (n.kind === "absCart") return [n.x, n.y, n.z];
    if (n.kind === "relCart") return H ? [H[0] + n.dx, H[1] + n.dy, H[2] + n.dz] : null;
    if (n.kind === "absPolar") {
      const o = n.ang * Math.PI / 180;
      return [n.L * Math.cos(o), n.L * Math.sin(o), 0];
    }
    if (n.kind === "relPolar") {
      if (!H) return null;
      const o = n.ang * Math.PI / 180;
      return [H[0] + n.L * Math.cos(o), H[1] + n.L * Math.sin(o), H[2]];
    }
    if (n.kind === "relSpherical") {
      if (!H) return null;
      const o = n.az * Math.PI / 180, a = n.el * Math.PI / 180, t = n.L * Math.cos(a);
      return [H[0] + t * Math.cos(o), H[1] + t * Math.sin(o), H[2] + n.L * Math.sin(a)];
    }
    return null;
  }, te = (n) => {
    var _a;
    if (!e.polylines) return;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, n];
    const o = e.polylines.rawVal, a = o.length ? o[o.length - 1] : [];
    e.polylines.val = [...o.slice(0, -1), [...a, e.points.rawVal.length - 1]], N.blur();
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    b();
  };
  N.addEventListener("keydown", (n) => {
    if (n.key === "Enter") {
      n.preventDefault();
      const a = P(N.value);
      if (!a) return;
      if (E = false, a.kind === "length") Y(a.L), ve(`\u270F DDE ${a.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = B(a);
        if (!t) return;
        te(t);
        const h = a.kind;
        ve(`\u270F ${h} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
      }
      return;
    }
    if (n.key === "Escape") {
      n.preventDefault(), E = false, N.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!E && N.style.display === "block") try {
          N.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && (E = true);
  }), window.addEventListener("keydown", (n) => {
    if (!H || !U || document.activeElement === N) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (N.value = n.key, N.focus(), N.setSelectionRange(1, 1), n.preventDefault());
  });
  const Z = document.createElement("div");
  Z.id = "hk-coord-readout", Z.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", Z.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(Z);
  const ne = document.createElement("div");
  ne.id = "hk-coord-fixed", ne.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", ne.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(ne);
  const F = new ht(new fe().setFromPoints([new M(0, 0, 0), new M(0, 0, 0)]), new Qt({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  F.frustumCulled = false, F.visible = false, w.add(F);
  const oe = new Ne();
  oe.frustumCulled = false, oe.visible = false, w.add(oe);
  const ie = (n) => {
    const o = new fe().setFromPoints([new M(0, 0, 0), new M(0, 0, 0)]), a = new Qt({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new ht(o, a);
  }, ye = ie(16711680), ue = ie(65280), Ce = ie(35071);
  oe.add(ye, ue, Ce);
  const re = (n) => {
    const o = new fe().setFromPoints([new M(0, 0, 0), new M(0, 0, 0), new M(0, 0, 0), new M(0, 0, 0)]), a = new Oe({ color: n, transparent: true, opacity: 0.45, depthTest: false }), t = new to(o, a);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, ge = re(3462041), Te = re(16724804), ae = re(6333946), pe = new Ne();
  pe.frustumCulled = false, pe.visible = false, w.add(pe), pe.add(ge, Te, ae);
  const T = (n) => {
    const o = new on(1, 1), a = new Ke({ color: n, transparent: true, opacity: 0.06, side: yt, depthWrite: false }), t = new Ze(o, a);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, $ = T(3462041), W = T(16724804), K = T(6333946);
  pe.add($, W, K);
  const ce = (n, o, a, t) => {
    n.scale.set(2 * t, 2 * t, 1), a === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : a === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, se = document.createElement("div");
  se.id = "hk-refplane-badge", se.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(se), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, pe.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], h = e.points.rawVal ?? [], d = o && o.length === 3 ? o : t.length > 0 && h[t[t.length - 1]] ? h[t[t.length - 1]] : [0, 0, 0], S = window.__hekatanOrthoExt ?? 8;
      he(ge, d, "xy", S), he(Te, d, "xz", S), he(ae, d, "yz", S), ce($, d, "xy", S), ce(W, d, "xz", S), ce(K, d, "yz", S), $.material.opacity = 0.1, W.material.opacity = 0.1, K.material.opacity = 0.1;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    b();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !pe.visible) {
      b();
      return;
    }
    const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], h = e.points.rawVal ?? [], d = o && o.length === 3 ? o : t.length > 0 && h[t[t.length - 1]] ? h[t[t.length - 1]] : [0, 0, 0];
    he(ge, d, "xy", n), he(Te, d, "xz", n), he(ae, d, "yz", n), ce($, d, "xy", n), ce(W, d, "xz", n), ce(K, d, "yz", n), b();
  };
  const ke = (n) => {
    if ($.material.opacity = n === "xy" ? 0.22 : 0.04, W.material.opacity = n === "xz" ? 0.22 : 0.04, K.material.opacity = n === "yz" ? 0.22 : 0.04, n) {
      const h = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      se.style.background = h.bg, se.style.color = h.text, se.textContent = `\u25A6 Plano ${n.toUpperCase()}`, se.style.display = "block";
    } else se.style.display = "none";
  }, he = (n, o, a, t) => {
    let h;
    a === "xy" ? h = [new M(o[0] - t, o[1] - t, o[2]), new M(o[0] + t, o[1] - t, o[2]), new M(o[0] + t, o[1] + t, o[2]), new M(o[0] - t, o[1] + t, o[2]), new M(o[0] - t, o[1] - t, o[2])] : a === "xz" ? h = [new M(o[0] - t, o[1], o[2] - t), new M(o[0] + t, o[1], o[2] - t), new M(o[0] + t, o[1], o[2] + t), new M(o[0] - t, o[1], o[2] + t), new M(o[0] - t, o[1], o[2] - t)] : h = [new M(o[0], o[1] - t, o[2] - t), new M(o[0], o[1] + t, o[2] - t), new M(o[0], o[1] + t, o[2] + t), new M(o[0], o[1] - t, o[2] + t), new M(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(h);
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
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== N) return;
    const a = n.key.toLowerCase();
    if (a === "x" || a === "y" || a === "z") ze = ze === a ? null : a, Xe(), n.preventDefault();
    else if (n.key === "Escape") {
      const t = document.activeElement;
      t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA") && t.blur(), Yn(), n.preventDefault();
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
  const qe = new M(), Fe = new M(), Je = new M(), He = (n) => {
    if (!ze) return null;
    const o = n[0], a = n[1], t = n[2];
    return ze === "x" ? (qe.set(o - 1e4, a, t), Fe.set(o + 1e4, a, t)) : ze === "y" ? (qe.set(o, a - 1e4, t), Fe.set(o, a + 1e4, t)) : (qe.set(o, a, t - 1e4), Fe.set(o, a, t + 1e4)), C.ray.distanceSqToSegment(qe, Fe, null, Je), Je;
  };
  window.__hekatanProjectOnAxis = He;
  const et = new ht(new fe().setFromPoints([new M(0, 0, 0), new M(0, 0, 0)]), new Oe({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  et.renderOrder = 998, et.frustumCulled = false, et.visible = false, w.add(et);
  let Be = -1, vt = -1, rt = -1;
  const me = /* @__PURE__ */ new Set();
  window.__hekatanSelection = me;
  const _e = new ht(new fe().setFromPoints([new M(), new M()]), new Oe({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  _e.renderOrder = 997, _e.frustumCulled = false, _e.visible = false, w.add(_e);
  const le = new Ze(new Nt(0.02, 12, 12), new Ke({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  le.renderOrder = 998, le.visible = false, w.add(le);
  const Ee = () => {
    if (!le.visible) return;
    const o = p().position.distanceTo(le.position), a = Math.max(0.05, o / 10);
    le.scale.setScalar(a);
  }, de = new Ne();
  de.frustumCulled = false, w.add(de);
  const Re = 2282478;
  let Le = null;
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
        const y = new Ze(new Nt(0.025, 12, 12), new Ke({ color: Re, transparent: true, opacity: 0.9, depthTest: false }));
        y.position.set(u[0], u[1], u[2]), y.renderOrder = 999, y.__isSelectionPt = true, de.add(y);
      } else if (i === "seg") {
        const u = o[+l[0]], y = n[u == null ? void 0 : u[+l[1]]], c = n[u == null ? void 0 : u[+l[1] + 1]];
        if (!y || !c) continue;
        const m = new fe().setFromPoints([new M(y[0], y[1], y[2]), new M(c[0], c[1], c[2])]), _ = new ht(m, new Oe({ color: Re, transparent: true, opacity: 0.95, depthTest: false }));
        _.renderOrder = 999, de.add(_);
      } else if (i === "poly") {
        const y = o[+l[0]].map((_) => {
          const D = n[_];
          return D ? new M(D[0], D[1], D[2]) : null;
        }).filter(Boolean);
        if (y.length < 2) continue;
        const c = new fe().setFromPoints(y), m = new ht(c, new Oe({ color: Re, transparent: true, opacity: 0.95, depthTest: false }));
        m.renderOrder = 999, de.add(m);
      } else if (i === "aux") {
        const u = t[+l[0]];
        if (!u || u.length !== 6) continue;
        const y = new fe().setFromPoints([new M(u[0], u[1], u[2]), new M(u[3], u[4], u[5])]), c = new ht(y, new Oe({ color: Re, transparent: true, opacity: 0.95, depthTest: false }));
        c.renderOrder = 999, de.add(c);
      }
    }
    const h = window.__hekatanUpdateSelectionPtScale;
    h && h();
    const d = window.__hekatanRefreshPropsPane;
    d && d(), b();
  };
  window.__hekatanRefreshSelection = Ve, window.__hekatanClearSelection = () => {
    me.clear(), Ve();
  };
  const Ie = (n, o, a, t, h, d, S, i, l) => {
    const u = S - t, y = i - h, c = l - d, m = u * u + y * y + c * c;
    if (m < 1e-12) return Math.hypot(n - t, o - h, a - d);
    let _ = ((n - t) * u + (o - h) * y + (a - d) * c) / m;
    _ = Math.max(0, Math.min(1, _));
    const D = t + _ * u, G = h + _ * y, Q = d + _ * c;
    return Math.hypot(n - D, o - G, a - Q);
  }, ot = (n, o, a, t) => {
    if (!e.polylines) return null;
    const h = e.polylines.rawVal, d = e.points.rawVal;
    let S = -1, i = -1, l = t;
    for (let u = 0; u < h.length; u++) {
      const y = h[u];
      for (let c = 0; c < y.length - 1; c++) {
        const m = d[y[c]], _ = d[y[c + 1]];
        if (!m || !_) continue;
        const D = Ie(n, o, a, m[0], m[1], m[2], _[0], _[1], _[2]);
        D < l && (l = D, S = u, i = c);
      }
    }
    return S >= 0 ? { polyIdx: S, segIdx: i, dist: l } : null;
  }, ct = (n, o, a, t) => {
    const h = window.__hekatanDrawingAuxLines, d = (h == null ? void 0 : h.rawVal) ?? (h == null ? void 0 : h.val) ?? h ?? [];
    let S = -1, i = t;
    for (let l = 0; l < d.length; l++) {
      const u = d[l];
      if (!u || u.length !== 6) continue;
      const y = Ie(n, o, a, u[0], u[1], u[2], u[3], u[4], u[5]);
      y < i && (i = y, S = l);
    }
    return S;
  }, Tt = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      et.visible = false;
      return;
    }
    et.geometry.setFromPoints([new M(t[0], t[1], t[2]), new M(t[3], t[4], t[5])]), et.visible = true;
  }, Ct = (n, o = -1) => {
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
      i && d.push(new M(i[0], i[1], i[2]));
    }
    else {
      const S = t[a[o]], i = t[a[o + 1]];
      S && d.push(new M(S[0], S[1], S[2])), i && d.push(new M(i[0], i[1], i[2]));
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
    e.points.val = S, e.polylines.val = i, e.areas && (e.areas.val = e.areas.rawVal.filter((l) => l !== n).map((l) => l > n ? l - 1 : l)), et.visible = false, Be = -1, vt = -1;
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
    for (const m of S) for (const _ of m) i.add(_);
    const l = e.points.rawVal, u = /* @__PURE__ */ new Map(), y = [];
    for (let m = 0; m < l.length; m++) i.has(m) && (u.set(m, y.length), y.push(l[m]));
    const c = S.map((m) => m.map((_) => u.get(_)).filter((_) => _ !== void 0));
    if (e.points.val = y, e.polylines.val = c, e.areas) {
      const m = d.length - 1;
      e.areas.val = e.areas.rawVal.map((_) => _ > n ? _ + m : _);
    }
    et.visible = false, Be = -1, vt = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  j.geometry.setAttribute("position", new nt(e.points.rawVal.flat(), 3)), j.geometry.computeBoundingSphere(), j.frustumCulled = false, xe.frustumCulled = false, w.add(xe), q.position.set(0, 0, 0), q.rotateX(Math.PI / 2), q.geometry.rotateX(Math.PI / 2), q.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, a) => {
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
      const y = 2 * Math.PI * u / S, c = t * Math.cos(y), m = t * Math.sin(y);
      let _;
      d === "xy" ? _ = [n + c, o + m, a] : d === "xz" ? _ = [n + c, o, a + m] : _ = [n, o + c, a + m], l.push(_);
    }
    if (e.points.val = [...e.points.rawVal, ...l], e.polylines) {
      const u = [...l.map((c, m) => i + m), i], y = e.polylines.rawVal;
      ((_a = y[y.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...y, u, []] : e.polylines.val = [...y.slice(0, -1), u, []];
    }
  }, window.__hekatanDrawArc = (n, o, a, t = window.__hekatanArcSegs ?? 12) => {
    const h = Math.max(4, Math.round(t)), d = new M(...n), S = new M(...o), i = new M(...a), l = new M().subVectors(S, d), u = new M().subVectors(i, d), y = new M().crossVectors(l, u).normalize(), c = new M().addVectors(d, S).multiplyScalar(0.5), m = new M().addVectors(S, i).multiplyScalar(0.5), _ = new M().crossVectors(l, y).normalize(), D = new M().crossVectors(new M().subVectors(i, S), y).normalize(), G = new M().subVectors(m, c), Q = _.x * D.y - _.y * D.x;
    let I;
    if (Math.abs(Q) > 1e-9) {
      const Ye = (G.x * D.y - G.y * D.x) / Q;
      I = new M().addVectors(c, _.clone().multiplyScalar(Ye));
    } else I = c.clone();
    const ee = d.distanceTo(I), Se = new M().subVectors(d, I), We = new M().subVectors(i, I), Me = Math.acos(Math.max(-1, Math.min(1, Se.dot(We) / (ee * ee)))), Ae = e.points.rawVal.length, at = [], ut = y.clone();
    for (let Ye = 0; Ye <= h; Ye++) {
      const Ge = Ye / h, Mt = Me * Ge, _t = new Rn().setFromAxisAngle(ut, Mt), xt = Se.clone().applyQuaternion(_t).add(I);
      at.push([xt.x, xt.y, xt.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...at], e.polylines) {
      const Ye = at.map((Mt, _t) => Ae + _t), Ge = e.polylines.rawVal;
      e.polylines.val = [...Ge.slice(0, -1), Ye, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, a = 1, t = 6, h = 6) => {
    const d = Math.min(n[0], o[0]), S = Math.max(n[0], o[0]), i = Math.min(n[1], o[1]), l = Math.max(n[1], o[1]), u = (n[2] + o[2]) / 2, y = S - d, c = l - i, m = Math.min(a, y / 2 - 0.01, c / 2 - 0.01);
    if (m <= 0) return;
    const _ = e.points.rawVal.length, D = [], G = [], Q = (I, ee) => {
      D.push([I, ee, u]), G.push(_ + D.length - 1);
    };
    for (let I = 0; I <= h; I++) Q(d + m + (y - 2 * m) * I / h, i);
    for (let I = 1; I <= t; I++) {
      const ee = -Math.PI / 2 + Math.PI / 2 * I / t;
      Q(S - m + m * Math.cos(ee), i + m + m * Math.sin(ee));
    }
    for (let I = 1; I <= h; I++) Q(S, i + m + (c - 2 * m) * I / h);
    for (let I = 1; I <= t; I++) {
      const ee = 0 + Math.PI / 2 * I / t;
      Q(S - m + m * Math.cos(ee), l - m + m * Math.sin(ee));
    }
    for (let I = 1; I <= h; I++) Q(S - m - (y - 2 * m) * I / h, l);
    for (let I = 1; I <= t; I++) {
      const ee = Math.PI / 2 + Math.PI / 2 * I / t;
      Q(d + m + m * Math.cos(ee), l - m + m * Math.sin(ee));
    }
    for (let I = 1; I <= h; I++) Q(d, l - m - (c - 2 * m) * I / h);
    for (let I = 1; I <= t; I++) {
      const ee = Math.PI + Math.PI / 2 * I / t;
      Q(d + m + m * Math.cos(ee), i + m + m * Math.sin(ee));
    }
    if (G.push(_), e.points.val = [...e.points.rawVal, ...D], e.polylines) {
      const I = e.polylines.rawVal;
      e.polylines.val = [...I.slice(0, -1), G, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const a = e.points.rawVal.length, t = n[0], h = n[1], d = n[2], S = o[0], i = o[1], l = o[2];
    let u;
    if (Math.abs(d - l) < 1e-6 ? u = [[t, h, d], [S, h, d], [S, i, d], [t, i, d]] : Math.abs(h - i) < 1e-6 ? u = [[t, h, d], [S, h, d], [S, h, l], [t, h, l]] : u = [[t, h, d], [t, i, d], [t, i, l], [t, h, l]], e.points.val = [...e.points.rawVal, ...u], e.polylines) {
      const y = [a, a + 1, a + 2, a + 3, a], c = e.polylines.rawVal;
      e.polylines.val = [...c.slice(0, -1), y, []];
    }
  };
  const st = new Ne();
  st.visible = false, w.add(st), window.__hekatanShowAxes = (n, o, a = 12, t = 2) => {
    var _a, _b;
    for (; st.children.length; ) {
      const y = st.children.pop();
      (_a = y.geometry) == null ? void 0 : _a.dispose(), (_b = y.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const h = Math.min(...o) - t, d = Math.max(...o) + t, S = Math.min(...n) - t, i = Math.max(...n) + t, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", u = (y, c, m, _, D) => {
      const G = document.createElement("canvas");
      G.width = 64, G.height = 32;
      const Q = G.getContext("2d");
      Q.fillStyle = D, Q.font = "bold 22px sans-serif", Q.textAlign = "center", Q.fillText(y, 32, 26);
      const I = new Dn(G), ee = new Nn({ map: I, transparent: true }), Se = new Zn(ee);
      return Se.position.set(c, m, _), Se.scale.set(1.2, 0.6, 1), Se;
    };
    n.forEach((y, c) => {
      const m = c < l.length ? l[c] : `X${c}`, _ = new fe().setFromPoints([new M(y, h, 0), new M(y, d, 0), new M(y, h, 0), new M(y, h, a)]), D = new Qt({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), G = new At(_, D);
      G.computeLineDistances(), st.add(G), st.add(u(m, y, h - 0.5, 0, "#60a5fa")), st.add(u(m, y, d + 0.5, 0, "#60a5fa"));
    }), o.forEach((y, c) => {
      const m = `${c + 1}`, _ = new fe().setFromPoints([new M(S, y, 0), new M(i, y, 0), new M(S, y, 0), new M(S, y, a)]), D = new Qt({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), G = new At(_, D);
      G.computeLineDistances(), st.add(G), st.add(u(m, S - 0.5, y, 0, "#fb7185")), st.add(u(m, i + 0.5, y, 0, "#fb7185"));
    }), st.visible = true, b();
  }, window.__hekatanHideAxes = () => {
    st.visible = false, b();
  };
  const St = new Ne();
  St.visible = false, w.add(St);
  let zt = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, a = 0, t = 0) => {
    var _a, _b;
    for (; St.children.length; ) {
      const d = St.children.pop();
      (_a = d.geometry) == null ? void 0 : _a.dispose(), (_b = d.material) == null ? void 0 : _b.dispose();
    }
    zt.forEach((d) => {
      w.remove(d), d.geometry.dispose(), d.material.dispose();
    }), zt = [];
    const h = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((d, S) => {
      const i = h[S % h.length], l = o / 2, u = [new M(a - l, t - l, d), new M(a + l, t - l, d), new M(a + l, t + l, d), new M(a - l, t + l, d), new M(a - l, t - l, d)], y = new fe().setFromPoints(u), c = new Oe({ color: i, transparent: true, opacity: 0.55 });
      St.add(new ht(y, c));
      const m = document.createElement("canvas");
      m.width = 128, m.height = 32;
      const _ = m.getContext("2d");
      _.fillStyle = `#${i.toString(16).padStart(6, "0")}`, _.font = "bold 18px sans-serif", _.fillText(`Z = ${d} m`, 4, 22);
      const D = new Dn(m), G = new Nn({ map: D, transparent: true }), Q = new Zn(G);
      Q.position.set(a - l - 1.5, t - l - 1.5, d), Q.scale.set(2.5, 0.6, 1), St.add(Q);
      const I = new on(1e4, 1e4), ee = new Ke({ visible: false, side: yt }), Se = new Ze(I, ee);
      Se.position.set(0, 0, d), Se.frustumCulled = false, Se.userData = { refPlaneZ: d }, w.add(Se), zt.push(Se);
    }), St.visible = true, b();
  }, window.__hekatanHideRefPlanes = () => {
    St.visible = false, zt.forEach((n) => {
      n.visible = false;
    }), b();
  };
  const Pt = new Ne();
  Pt.frustumCulled = false, w.add(Pt);
  const Yt = () => {
    var _a, _b, _c, _d;
    for (; Pt.children.length; ) {
      const a = Pt.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (a.length !== 6) continue;
      const t = new fe().setFromPoints([new M(a[0], a[1], a[2]), new M(a[3], a[4], a[5])]), h = new Qt({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), d = new ht(t, h);
      d.computeLineDistances(), Pt.add(d);
    }
  };
  X.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, Yt(), b());
  });
  const Et = new Ne();
  Et.frustumCulled = false, w.add(Et);
  const en = () => {
    var _a, _b, _c, _d;
    for (; Et.children.length; ) {
      const a = Et.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxPoints, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (!a || a.length !== 3) continue;
      const t = new Ze(new Nt(0.025, 12, 12), new Ke({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(a[0], a[1], a[2]), t.renderOrder = 996;
      const d = p().position.distanceTo(t.position);
      t.scale.setScalar(Math.max(0.05, d / 10)), Et.add(t);
    }
  };
  X.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, en(), b());
  }), r.addEventListener("change", () => {
    const n = p();
    Et.children.forEach((o) => {
      const a = n.position.distanceTo(o.position);
      o.scale.setScalar(Math.max(0.05, a / 10));
    });
  }), window.__hekatanRenderAuxPoints = en;
  const je = new Ne(), hn = new Ze(new Nt(0.01, 12, 12), new Ke({ color: 16724804, transparent: true, opacity: 0.95 })), mn = new Ze(new Nt(0.015, 12, 12), new Ke({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  je.add(hn, mn);
  const Ft = 0.08, Zt = (n, o, a) => {
    const t = new fe().setFromPoints([new M(...n), new M(...o)]);
    return new ht(t, new Oe({ color: a, transparent: true, opacity: 0.7 }));
  };
  je.add(Zt([-Ft, 0, 0], [Ft, 0, 0], 16711680)), je.add(Zt([0, -Ft, 0], [0, Ft, 0], 65280)), je.add(Zt([0, 0, -Ft], [0, 0, Ft], 35071)), je.visible = false, je.frustumCulled = false, w.add(je);
  const Ut = 40, wn = 2.5, Kt = () => {
    if (!je.visible) return;
    const o = p().position.distanceTo(je.position), a = Math.max(0.05, Math.min(wn, o / Ut));
    je.scale.setScalar(a);
  }, Ht = () => {
    if (de.children.length === 0) return;
    const n = p();
    de.children.forEach((o) => {
      if (!o.__isSelectionPt) return;
      const a = n.position.distanceTo(o.position), t = Math.max(0.05, a / 10);
      o.scale.setScalar(t);
    });
  };
  window.__hekatanUpdateSelectionPtScale = Ht, r.addEventListener("change", () => {
    if (Kt(), le.visible) {
      const o = p().position.distanceTo(le.position);
      le.scale.setScalar(Math.max(0.05, o / 10));
    }
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = p().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / Ut));
    }
    Ht();
  }), window.__hekatanShowSnap = (n, o, a) => {
    je.position.set(n, o, a), je.visible = true, Kt(), b();
  }, window.__hekatanHideSnap = () => {
    je.visible = false, b();
  }, f.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p;
    const o = v(n);
    if (!o) return;
    C.setFromCamera(z, o);
    const a = k();
    if (a.length) {
      const t = a[0].point, h = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, h);
      if (d) In(d.type, d.x, d.y, d.z), je.position.set(d.x, d.y, d.z), je.visible = true, t.set(d.x, d.y, d.z);
      else {
        yn();
        const y = window.__hekatanSnapEnabled !== false, c = window.__hekatanSnap2D ?? 0.5;
        y && c > 0 && (t.x = Math.round(t.x / c) * c, t.y = Math.round(t.y / c) * c, t.z = Math.round(t.z / c) * c), je.position.copy(t), je.visible = true;
      }
      Kt();
      const S = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (S === "select" || !S) {
        const y = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = bt(t.x, t.y, t.z, y), m = ot(t.x, t.y, t.z, y), _ = ct(t.x, t.y, t.z, y);
        if (c >= 0) {
          const I = e.points.rawVal[c];
          le.position.set(I[0], I[1], I[2]), le.visible = true, Ee(), _e.visible = false, Le = { kind: "pt", a: c };
        } else if (m) {
          const I = e.points.rawVal, ee = e.polylines.rawVal[m.polyIdx], Se = I[ee[m.segIdx]], We = I[ee[m.segIdx + 1]];
          _e.geometry.setFromPoints([new M(Se[0], Se[1], Se[2]), new M(We[0], We[1], We[2])]), _e.visible = true, le.visible = false, Le = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(m.polyIdx)) ?? false ? { kind: "poly", a: m.polyIdx } : { kind: "seg", a: m.polyIdx, b: m.segIdx };
        } else if (_ >= 0) {
          const ee = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[_];
          ee && (_e.geometry.setFromPoints([new M(ee[0], ee[1], ee[2]), new M(ee[3], ee[4], ee[5])]), _e.visible = true, le.visible = false, Le = { kind: "aux", a: _ });
        } else _e.visible = false, le.visible = false, Le = null;
        Z.style.left = n.clientX + "px", Z.style.top = n.clientY + "px", Z.style.display = "block";
        let D = t;
        if ((Le == null ? void 0 : Le.kind) === "pt") {
          const I = e.points.rawVal[Le.a];
          I && (D = new M(I[0], I[1], I[2]));
        }
        const G = `X=${D.x.toFixed(2)} Y=${D.y.toFixed(2)} Z=${D.z.toFixed(2)}`;
        if (Le) {
          const I = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          Z.textContent = `${G}  \xB7  \u{1F5B1} Click \u2192 ${I[Le.kind]}`;
        } else Z.textContent = G;
        const Q = document.getElementById("hk-coord-fixed");
        Q && (Q.textContent = G), F.visible = false, oe.visible = false, b();
        return;
      }
      if (S === "delete") {
        const y = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = ot(t.x, t.y, t.z, y), m = ct(t.x, t.y, t.z, y);
        let _ = false;
        if (m >= 0) if (!c) _ = true;
        else {
          const I = window.__hekatanDrawingAuxLines, Se = ((I == null ? void 0 : I.rawVal) ?? (I == null ? void 0 : I.val) ?? I ?? [])[m];
          Ie(t.x, t.y, t.z, Se[0], Se[1], Se[2], Se[3], Se[4], Se[5]) < c.dist && (_ = true);
        }
        _ ? (rt = m, Be = -1, vt = -1, Tt(m)) : c ? (Be = c.polyIdx, vt = c.segIdx, rt = -1, Ct(c.polyIdx, c.segIdx)) : (Be = -1, vt = -1, rt = -1, et.visible = false), F.visible = false, oe.visible = false, A(), Z.style.left = n.clientX + "px", Z.style.top = n.clientY + "px", Z.style.display = "block";
        const D = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let G = "";
        _ ? G = `\u{1F5D1} l\xEDnea aux #${rt + 1}` : c ? G = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(c.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${c.polyIdx + 1}` : `\u{1F5D1} seg ${c.segIdx + 1} / poly #${c.polyIdx + 1}` : G = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", Z.textContent = `${D}  \xB7  ${G}`;
        const Q = document.getElementById("hk-coord-fixed");
        Q && (Q.textContent = D), b();
        return;
      } else et.visible = false, Be = -1, rt = -1;
      Z.style.left = n.clientX + "px", Z.style.top = n.clientY + "px", Z.style.display = "block";
      const i = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], l = i[i.length - 1] ?? [], u = e.points.rawVal ?? [];
      if (l.length > 0 && u[l[l.length - 1]]) {
        const y = l[l.length - 1], c = u[y], m = !!window.__hekatanOrthoMode;
        let _ = ze;
        if (!_ && m) {
          const Ye = Math.abs(t.x - c[0]), Ge = Math.abs(t.y - c[1]), Mt = Math.abs(t.z - c[2]), _t = (_k = a[0]) == null ? void 0 : _k.object;
          let xt = null;
          _t === $ ? xt = "xy" : _t === W ? xt = "xz" : _t === K && (xt = "yz"), xt === "xy" ? _ = Ye >= Ge ? "x" : "y" : xt === "xz" ? _ = Ye >= Mt ? "x" : "z" : xt === "yz" ? _ = Ge >= Mt ? "y" : "z" : _ = Ye >= Ge && Ye >= Mt ? "x" : Ge >= Mt ? "y" : "z";
        }
        if (_) {
          const Ye = c[0], Ge = c[1], Mt = c[2];
          _ === "x" ? t.set(t.x, Ge, Mt) : _ === "y" ? t.set(Ye, t.y, Mt) : t.set(Ye, Ge, t.z);
          const _t = !!ze, bn = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[_];
          Pe.style.background = "rgba(15,23,42,0.92)", Pe.style.color = bn, Pe.style.border = `1.5px solid ${bn}`;
          const Mn = (_l = a[0]) == null ? void 0 : _l.object;
          let Jt = null;
          Mn === $ ? Jt = "xy" : Mn === W ? Jt = "xz" : Mn === K && (Jt = "yz");
          const Bn = Jt ? ` (plano ${Jt.toUpperCase()})` : "";
          Pe.textContent = _t ? `\u{1F512} LOCK ${_.toUpperCase()}${Bn}` : `\u22A5 ORTO ${_.toUpperCase()}${Bn}`, Pe.style.left = n.clientX + 20 + "px", Pe.style.top = n.clientY + 18 + "px", Pe.style.transform = "none", Pe.style.display = "block";
        } else ze || (Pe.style.display = "none");
        const D = Math.hypot(t.x - c[0], t.y - c[1], t.z - c[2]), G = Math.atan2(t.y - c[1], t.x - c[0]) * 180 / Math.PI, Q = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        Z.textContent = `${Q} | \u0394L=${D.toFixed(2)}m ${G.toFixed(0)}\xB0`;
        const I = document.getElementById("hk-coord-fixed");
        I && (I.textContent = Q), F.geometry.setFromPoints([new M(c[0], c[1], c[2]), new M(t.x, t.y, t.z)]), (_m = F.computeLineDistances) == null ? void 0 : _m.call(F), F.visible = true, V(c[0], c[1], c[2], t.x, t.y, t.z);
        const ee = window.__hekatanOrthoExt ?? 8, Se = window.__hekatanShowOrthoPlanes !== false;
        pe.visible = Se, Se || ke(null), Se && (he(ge, c, "xy", ee), he(Te, c, "xz", ee), he(ae, c, "yz", ee), ce($, c, "xy", ee), ce(W, c, "xz", ee), ce(K, c, "yz", ee));
        const We = Se ? C.intersectObjects([$, W, K], false) : [];
        let Me = null;
        if (We.length > 0) {
          const Ye = We[0].object;
          Ye === $ ? Me = "xy" : Ye === W ? Me = "xz" : Ye === K && (Me = "yz");
        }
        ke(Me), Me && (se.style.left = n.clientX + "px", se.style.top = n.clientY + "px"), ye.geometry.setFromPoints([new M(c[0] - ee, c[1], c[2]), new M(c[0] + ee, c[1], c[2])]), (_n2 = ye.computeLineDistances) == null ? void 0 : _n2.call(ye), ue.geometry.setFromPoints([new M(c[0], c[1] - ee, c[2]), new M(c[0], c[1] + ee, c[2])]), (_o2 = ue.computeLineDistances) == null ? void 0 : _o2.call(ue), Ce.geometry.setFromPoints([new M(c[0], c[1], c[2] - ee), new M(c[0], c[1], c[2] + ee)]), (_p = Ce.computeLineDistances) == null ? void 0 : _p.call(Ce), oe.visible = true;
        const Ae = ye.material, at = ue.material, ut = Ce.material;
        _ === "x" ? (Ae.opacity = 0.95, at.opacity = 0.1, ut.opacity = 0.1) : _ === "y" ? (Ae.opacity = 0.1, at.opacity = 0.95, ut.opacity = 0.1) : _ === "z" ? (Ae.opacity = 0.1, at.opacity = 0.1, ut.opacity = 0.95) : (Ae.opacity = 0.5, at.opacity = 0.5, ut.opacity = 0.5);
      } else {
        const y = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        Z.textContent = y;
        const c = document.getElementById("hk-coord-fixed");
        if (c && (c.textContent = y), F.visible = false, oe.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(S)) {
          if (H = null, U = null, N.style.left = n.clientX + 20 + "px", N.style.top = n.clientY - 28 + "px", N.style.display = "block", !E) {
            N.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const _ = document.activeElement;
            !(_ && (_.tagName === "INPUT" || _.tagName === "TEXTAREA") && _ !== N) && document.activeElement !== N && N.focus({ preventScroll: true });
            try {
              N.select();
            } catch {
            }
          }
        } else A();
      }
      b();
    } else yn(), Z.style.display = "none", je.visible = false, F.visible = false, oe.visible = false, A(), b();
  }), X.derive(() => {
    e.gridTarget && (Ko(s, { position: new M(...e.gridTarget.val.position), quaternion: new Rn().setFromEuler(new Un(...e.gridTarget.val.rotation)) }, b), q.position.set(...e.gridTarget.val.position), q.quaternion.setFromEuler(new Un(...e.gridTarget.val.rotation)), q.updateMatrixWorld());
  }), X.derive(() => {
    j.geometry.setAttribute("position", new nt(e.points.val.flat(), 3)), j.geometry.computeBoundingSphere();
  }), X.derive(() => {
    const n = 0.05 * g * 0.5 * x.val;
    C.params.Points.threshold = 0.4 * n;
  }), X.derive(() => {
    var _a;
    const n = e.points.val ?? [], a = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const d of a) {
      const [S, i, l] = n[d];
      t.push(S, i, l);
    }
    const h = new fe();
    h.setAttribute("position", new nt(t, 3)), be.geometry.dispose(), be.geometry = h;
  });
  let Bt = false, $t = 0;
  f.addEventListener("pointerdown", () => {
    Bt = true;
  }), f.addEventListener("pointerup", () => {
    Bt = false;
  }), f.addEventListener("pointermove", () => {
    Bt && $t++;
  });
  const ft = document.createElement("div");
  ft.id = "hk-window-select", ft.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(ft);
  let kt = null, Wt = false, gt = null;
  const xn = (n, o, a, t, h) => {
    h ? (ft.style.borderColor = "#34d399", ft.style.borderStyle = "dashed", ft.style.background = "rgba(52, 211, 153, 0.10)") : (ft.style.borderColor = "#22d3ee", ft.style.borderStyle = "solid", ft.style.background = "rgba(34, 211, 238, 0.10)"), ft.style.left = Math.min(n, a) + "px", ft.style.top = Math.min(o, t) + "px", ft.style.width = Math.abs(a - n) + "px", ft.style.height = Math.abs(t - o) + "px", ft.style.display = "block";
  }, En = (n, o, a, t, h) => {
    var _a, _b, _c, _d;
    const d = Math.min(n, a), S = Math.max(n, a), i = Math.min(o, t), l = Math.max(o, t), u = a < n, y = f.getBoundingClientRect(), c = p();
    c.updateMatrixWorld();
    const m = (Me) => {
      const Ae = new M(Me[0], Me[1], Me[2]);
      return Ae.project(c), { x: y.left + (Ae.x * 0.5 + 0.5) * y.width, y: y.top + (-Ae.y * 0.5 + 0.5) * y.height };
    }, _ = (Me) => Me.x >= d && Me.x <= S && Me.y >= i && Me.y <= l, D = (Me, Ae) => !(Me.x < d && Ae.x < d || Me.x > S && Ae.x > S || Me.y < i && Ae.y < i || Me.y > l && Ae.y > l);
    h || me.clear();
    let G = 0;
    const Q = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let Me = 0; Me < Q.length; Me++) {
      const Ae = Q[Me];
      Ae && _(m(Ae)) && (me.add(`pt:${Me}`), G++);
    }
    const I = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], ee = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let Me = 0; Me < I.length; Me++) {
      const Ae = I[Me], at = ee.includes(Me);
      let ut = false;
      for (let Ye = 0; Ye < Ae.length - 1; Ye++) {
        const Ge = Q[Ae[Ye]], Mt = Q[Ae[Ye + 1]];
        if (!Ge || !Mt) continue;
        const _t = m(Ge), xt = m(Mt);
        if (u ? _(_t) || _(xt) || D(_t, xt) : _(_t) && _(xt)) {
          if (at) {
            ut = true;
            break;
          }
          me.add(`seg:${Me}:${Ye}`), G++;
        }
      }
      at && ut && (me.add(`poly:${Me}`), G++);
    }
    const We = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let Me = 0; Me < We.length; Me++) {
      const Ae = We[Me];
      if (!Ae || Ae.length !== 6) continue;
      const at = m([Ae[0], Ae[1], Ae[2]]), ut = m([Ae[3], Ae[4], Ae[5]]);
      (u ? _(at) || _(ut) || D(at, ut) : _(at) && _(ut)) && (me.add(`aux:${Me}`), G++);
    }
    Ve(), ve(`${u ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${G} item(s) ${h ? "agregados a" : "\u2192"} selecci\xF3n (total ${me.size})`), ft.style.display = "none";
  }, tn = () => {
    gt && (gt = null, ft.style.display = "none", ve("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = tn, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && gt && tn();
  });
  const Ln = () => {
    var _a, _b, _c, _d;
    if (me.size === 0) return false;
    const n = [...me], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], a = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], h = window.__hekatanDrawingAuxLines, d = (h == null ? void 0 : h.rawVal) ?? [], S = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Set();
    for (const D of n) {
      const [G, ...Q] = D.split(":");
      if (G === "pt") S.add(+Q[0]);
      else if (G === "poly") i.add(+Q[0]);
      else if (G === "seg") {
        const I = +Q[0], ee = +Q[1];
        l.has(I) || l.set(I, /* @__PURE__ */ new Set()), l.get(I).add(ee);
      } else G === "aux" && u.add(+Q[0]);
    }
    let y = 0, c = [], m = [];
    const _ = /* @__PURE__ */ new Map();
    for (let D = 0; D < a.length; D++) {
      if (i.has(D)) {
        y++;
        continue;
      }
      _.set(D, c.length);
      const G = l.get(D);
      if (G && G.size > 0) {
        let Q = [];
        for (let I = 0; I < a[D].length; I++) Q.push(a[D][I]), I < a[D].length - 1 && G.has(I) && (Q.length >= 2 && c.push(Q), Q = [], y++);
        (Q.length >= 2 || Q.length === 1) && c.push(Q);
      } else c.push([...a[D]]);
    }
    if (S.size > 0) {
      const D = [], G = /* @__PURE__ */ new Map();
      for (let I = 0; I < o.length; I++) {
        if (S.has(I)) {
          y++;
          continue;
        }
        G.set(I, D.length), D.push([...o[I]]);
      }
      const Q = [];
      for (const I of c) {
        let ee = [];
        for (const Se of I) {
          const We = G.get(Se);
          We === void 0 ? (ee.length >= 2 && Q.push(ee), ee = []) : ee.push(We);
        }
        ee.length >= 2 && Q.push(ee);
      }
      c = Q, e.points.val = D;
    }
    for (const D of t) {
      const G = _.get(D);
      G !== void 0 && G < c.length && m.push(G);
    }
    if (e.polylines && (e.polylines.val = c), e.areas && (e.areas.val = m), u.size > 0 && h) {
      const D = d.filter((G, Q) => !u.has(Q));
      "val" in h ? h.val = D : window.__hekatanDrawingAuxLines = D, y += u.size;
    }
    me.clear(), Ve();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return ve(`\u{1F5D1} ${y} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = Ln, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) || me.size !== 0 && (n.preventDefault(), Ln());
  });
  const wt = document.createElement("div");
  wt.id = "hk-properties-pane";
  const $n = "hk-props-pane-pos";
  let Rt = null;
  try {
    const n = localStorage.getItem($n);
    n && (Rt = JSON.parse(n));
  } catch {
  }
  wt.style.cssText = ["position:fixed", Rt ? `left:${Rt.left}px` : "left:50%", Rt ? `top:${Rt.top}px` : "top:8px", Rt ? "transform:none" : "transform:translateX(-50%)", "width:min(320px, calc(100vw - 32px))", "max-height:60vh", "overflow-y:auto", "z-index:201", "box-shadow:0 6px 24px rgba(0,0,0,0.45)", "border-radius:6px", "display:none"].join(";") + ";", document.body.appendChild(wt);
  const io = () => {
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
      const i = S.clientX - a, l = S.clientY - t, u = Math.max(0, Math.min(window.innerWidth - 80, h + i)), y = Math.max(0, Math.min(window.innerHeight - 40, d + l));
      wt.style.left = `${u}px`, wt.style.top = `${y}px`;
    }), window.addEventListener("mouseup", () => {
      if (o) {
        o = false;
        try {
          localStorage.setItem($n, JSON.stringify({ left: parseFloat(wt.style.left), top: parseFloat(wt.style.top) }));
        } catch {
        }
      }
    });
  }, R = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 };
  let De = null;
  const tt = (n, o, a, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: a, value: t } }));
  }, lo = () => {
    if (De && (De.dispose(), De = null), me.size === 0) {
      wt.style.display = "none";
      return;
    }
    const n = [...me], o = n.filter((c) => c.startsWith("pt:")), a = n.filter((c) => c.startsWith("seg:")), t = n.filter((c) => c.startsWith("poly:")), h = n.filter((c) => c.startsWith("aux:")), d = o.length === n.length && o.length > 0, S = a.length === n.length && a.length > 0, i = t.length === n.length && t.length > 0, l = !d && !S && !i, u = [];
    o.length && u.push(`\u{1F535} ${o.length} nodo(s)`), a.length && u.push(`\u{1F4CF} ${a.length} segmento(s)`), t.length && u.push(`\u25AD ${t.length} \xE1rea(s)`), h.length && u.push(`\u250A ${h.length} aux`);
    const y = `\u{1F3AF} ${me.size} item(s) \u2014 ${u.join(", ")}`;
    if (De = new oo({ container: wt, title: y }), d) {
      const c = De.addFolder({ title: "\u{1F4CC} Restraints (DOFs)" });
      c.addBinding(R, "Ux"), c.addBinding(R, "Uy"), c.addBinding(R, "Uz"), c.addBinding(R, "Rx"), c.addBinding(R, "Ry"), c.addBinding(R, "Rz");
      const m = De.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      m.addBinding(R, "Kx", { label: "Kx", min: 0, step: 100 }), m.addBinding(R, "Ky", { label: "Ky", min: 0, step: 100 }), m.addBinding(R, "Kz", { label: "Kz", min: 0, step: 100 }), m.addBinding(R, "Krx", { label: "Krx", min: 0, step: 1e3 }), m.addBinding(R, "Kry", { label: "Kry", min: 0, step: 1e3 }), m.addBinding(R, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const _ = De.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      _.addBinding(R, "Fx", { step: 0.1 }), _.addBinding(R, "Fy", { step: 0.1 }), _.addBinding(R, "Fz", { step: 0.1 }), _.addBinding(R, "Mx", { step: 0.1 }), _.addBinding(R, "My", { step: 0.1 }), _.addBinding(R, "Mz", { step: 0.1 }), De.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(R, "mass", { label: "m", min: 0, step: 1 }), De.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(R, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), De.addButton({ title: "\u2713 Aplicar a nodos seleccionados" }).on("click", () => {
        const Q = [R.Ux, R.Uy, R.Uz, R.Rx, R.Ry, R.Rz];
        Q.some((Se) => Se) && tt("nodes", o, "supports", Q);
        const I = [R.Fx, R.Fy, R.Fz, R.Mx, R.My, R.Mz];
        I.some((Se) => Se !== 0) && tt("nodes", o, "loads", I);
        const ee = [R.Kx, R.Ky, R.Kz, R.Krx, R.Kry, R.Krz];
        ee.some((Se) => Se !== 0) && tt("nodes", o, "springs", ee), R.mass !== 0 && tt("nodes", o, "mass", R.mass), R.diaphragm !== "Ninguno" && tt("nodes", o, "diaphragm", R.diaphragm), ve(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    } else if (S) {
      const c = De.addFolder({ title: "\u{1F4CF} Secci\xF3n frame" });
      c.addBinding(R, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), c.addBinding(R, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const m = De.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      m.addBinding(R, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), m.addBinding(R, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), m.addBinding(R, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), m.addBinding(R, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), De.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(R, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), De.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(R, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const G = De.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      G.addBinding(R, "relMxI", { label: "Mx I" }), G.addBinding(R, "relMyI", { label: "My I" }), G.addBinding(R, "relMzI", { label: "Mz I" });
      const Q = De.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      Q.addBinding(R, "relMxJ", { label: "Mx J" }), Q.addBinding(R, "relMyJ", { label: "My J" }), Q.addBinding(R, "relMzJ", { label: "Mz J" }), De.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(R, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const ee = De.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      ee.addBinding(R, "LKx", { label: "LKx", min: 0, step: 100 }), ee.addBinding(R, "LKy", { label: "LKy", min: 0, step: 100 }), ee.addBinding(R, "LKz", { label: "LKz", min: 0, step: 100 });
      const Se = De.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      Se.addBinding(R, "qx", { step: 0.1 }), Se.addBinding(R, "qy", { step: 0.1 }), Se.addBinding(R, "qz", { step: 0.1 }), De.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(R, "massPerM", { label: "m/L", min: 0, step: 1 }), De.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        tt("segs", a, "section", R.section), tt("segs", a, "material", R.material_frame);
        const Me = { A: R.A_mod, Iz: R.Iz_mod, Iy: R.Iy_mod, J: R.J_mod };
        (Me.A !== 1 || Me.Iz !== 1 || Me.Iy !== 1 || Me.J !== 1) && tt("segs", a, "modifiers", Me), R.insertionPoint !== "10 \u2014 Centroid" && tt("segs", a, "insertionPoint", R.insertionPoint), R.beta !== 0 && tt("segs", a, "beta", R.beta);
        const Ae = [R.relMxI, R.relMyI, R.relMzI], at = [R.relMxJ, R.relMyJ, R.relMzJ];
        (Ae.some((Ge) => Ge) || at.some((Ge) => Ge)) && tt("segs", a, "releases", { i: Ae, j: at }), R.hinges !== "None" && tt("segs", a, "hinges", R.hinges);
        const ut = [R.LKx, R.LKy, R.LKz];
        ut.some((Ge) => Ge !== 0) && tt("segs", a, "lineSprings", ut);
        const Ye = [R.qx, R.qy, R.qz];
        Ye.some((Ge) => Ge !== 0) && tt("segs", a, "distLoad", Ye), R.massPerM !== 0 && tt("segs", a, "massPerM", R.massPerM), ve(`\u2713 Propiedades aplicadas a ${a.length} segmento(s)`);
      });
    } else if (i) {
      const c = De.addFolder({ title: "\u25AD Shell / \xC1rea" });
      c.addBinding(R, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), c.addBinding(R, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), c.addBinding(R, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), De.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(R, "surfLoad", { label: "q", step: 0.1 }), De.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        tt("areas", t, "shellType", R.shellType), tt("areas", t, "thickness", R.thickness), tt("areas", t, "material", R.material_shell), R.surfLoad !== 0 && tt("areas", t, "surfLoad", R.surfLoad), ve(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    } else if (l) {
      const c = De.addFolder({ title: "\u2139 Selecci\xF3n mixta" }), m = { msg: "Selecciona un solo tipo para editar propiedades" };
      c.addBinding(m, "msg", { readonly: true, label: "" });
    }
    De.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      me.clear(), Ve();
    }), wt.style.display = "block", io();
  };
  window.__hekatanRefreshPropsPane = lo;
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
        t && t !== "select" && t !== "none" ? ((_c = a == null ? void 0 : a.setTool) == null ? void 0 : _c.call(a, "select"), ve(`\u238B Cancelado \u2014 tool '${t}' cerrado, volv\xE9s a Seleccionar`)) : ve("\u238B Cancelado (click derecho)");
      }
    }
  }), f.addEventListener("contextmenu", (n) => {
    n.preventDefault(), n.stopPropagation();
  }, { capture: true }), f.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && window.__hekatanRectSelectExplicit && n.pointerType !== "touch" && (kt = { x: n.clientX, y: n.clientY }, Wt = false);
  }), f.addEventListener("pointermove", (n) => {
    if (gt && n.buttons === 0) {
      const d = n.clientX < gt.x;
      xn(gt.x, gt.y, n.clientX, n.clientY, d);
      return;
    }
    if (!kt) return;
    const o = n.clientX - kt.x, a = n.clientY - kt.y, t = Math.hypot(o, a);
    if (!Wt && t < 8) return;
    Wt = true;
    const h = n.clientX < kt.x;
    xn(kt.x, kt.y, n.clientX, n.clientY, h);
  }), f.addEventListener("pointerup", (n) => {
    if (!kt) return;
    if (!Wt) {
      kt = null;
      return;
    }
    const o = n.ctrlKey || n.metaKey || n.shiftKey;
    En(kt.x, kt.y, n.clientX, n.clientY, o), kt = null, Wt = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const Vt = new Ne();
  Vt.visible = false, Vt.frustumCulled = false, w.add(Vt);
  const ro = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, In = (n, o, a, t) => {
    var _a, _b, _c, _d;
    for (; Vt.children.length; ) {
      const i = Vt.children.pop();
      (_b = (_a = i.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = i.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const h = ro[n] ?? 16777215, d = 0.05, S = new fe().setFromPoints([new M(o - d, a - d, t), new M(o + d, a - d, t), new M(o + d, a - d, t), new M(o + d, a + d, t), new M(o + d, a + d, t), new M(o - d, a + d, t), new M(o - d, a + d, t), new M(o - d, a - d, t)]);
    Vt.add(new At(S, new Oe({ color: h, linewidth: 2 }))), Vt.position.set(0, 0, 0), Vt.visible = true;
  }, yn = () => {
    Vt.visible = false;
  }, co = (n, o, a, t) => {
    var _a;
    const h = window.__hekatanOsnap, d = e.points.rawVal, S = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let i = null;
    const l = (c, m, _, D) => {
      const G = Math.hypot(m - n, _ - o, D - a);
      G > t || (!i || G < i.d) && (i = { type: c, x: m, y: _, z: D, d: G });
    };
    (h.node || h.end) && d.forEach((c) => {
      h.node && l("node", c[0], c[1], c[2]);
    });
    for (const c of S) if (!(c.length < 2)) for (let m = 0; m < c.length - 1; m++) {
      const _ = d[c[m]], D = d[c[m + 1]];
      if (!(!_ || !D) && (h.end && (l("end", _[0], _[1], _[2]), l("end", D[0], D[1], D[2])), h.mid && l("mid", (_[0] + D[0]) / 2, (_[1] + D[1]) / 2, (_[2] + D[2]) / 2), h.nea || h.per)) {
        const G = D[0] - _[0], Q = D[1] - _[1], I = D[2] - _[2], ee = G * G + Q * Q + I * I;
        if (ee < 1e-12) continue;
        const Se = Math.max(0, Math.min(1, ((n - _[0]) * G + (o - _[1]) * Q + (a - _[2]) * I) / ee)), We = _[0] + Se * G, Me = _[1] + Se * Q, Ae = _[2] + Se * I;
        h.nea && l("nea", We, Me, Ae), h.per && l("per", We, Me, Ae);
      }
    }
    const u = window.__hekatanDrawingAuxLines, y = (u == null ? void 0 : u.rawVal) ?? (u == null ? void 0 : u.val) ?? u ?? [];
    for (const c of y) {
      if (c.length !== 6) continue;
      const m = [c[0], c[1], c[2]], _ = [c[3], c[4], c[5]];
      if (h.end && (l("end", m[0], m[1], m[2]), l("end", _[0], _[1], _[2])), h.mid && l("mid", (m[0] + _[0]) / 2, (m[1] + _[1]) / 2, (m[2] + _[2]) / 2), h.nea || h.per) {
        const D = _[0] - m[0], G = _[1] - m[1], Q = _[2] - m[2], I = D * D + G * G + Q * Q;
        if (I < 1e-12) continue;
        const ee = Math.max(0, Math.min(1, ((n - m[0]) * D + (o - m[1]) * G + (a - m[2]) * Q) / I)), Se = m[0] + ee * D, We = m[1] + ee * G, Me = m[2] + ee * Q;
        h.nea && l("nea", Se, We, Me), h.per && l("per", Se, We, Me);
      }
    }
    return i ? { type: i.type, x: i.x, y: i.y, z: i.z } : null;
  };
  window.__hekatanOsnapCompute = co, window.__hekatanOsnapShow = In, window.__hekatanOsnapHide = yn;
  let $e = [], dt = 0;
  const Gt = document.createElement("div");
  Gt.id = "hk-cad-status", Gt.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", Gt.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(Gt);
  const po = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), ze && n.push(`\u{1F512} LOCK ${ze.toUpperCase()}`);
    const a = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(a) > 1e-3 && n.push(`Cota Z=${a}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, ve = (n) => {
    const o = n + po();
    Gt.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    ve(o);
  }, window.__hekatanCadResetPending = () => {
    $e = [], ve("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  const qt = [], It = () => {
    var _a, _b;
    qt.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), qt.length > 100 && qt.shift();
  }, Xn = () => {
    var _a;
    const n = qt.pop();
    if (!n) {
      ve("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), $e = [], F.visible = false, oe.visible = false, A(), ve(`\u21B6 Undo \u2014 ${qt.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    b();
  };
  window.__hekatanPushUndo = It, window.__hekatanUndo = Xn, document.addEventListener("keydown", (n) => {
    var _a;
    if ((n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey) {
      const o = n.target, a = o == null ? void 0 : o.tagName;
      if ((a === "INPUT" || a === "TEXTAREA") && o.type !== "checkbox" && o.type !== "range" && ((_a = o.value) == null ? void 0 : _a.length) > 0) return;
      n.preventDefault(), n.stopPropagation(), Xn();
    }
  }, { capture: true });
  const Yn = () => {
    if ($e = [], e.polylines) {
      const n = e.polylines.rawVal, o = n[n.length - 1];
      o && o.length > 0 && (e.polylines.val = [...n, []]);
    }
    ze = null, Xe(), F.visible = false, oe.visible = false, A(), ve("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), b();
  };
  window.__hekatanFinalizeDraw = Yn, f.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    if ($t > 5) {
      $t = 0;
      return;
    }
    $t = 0;
    const o = v(n);
    if (!o) return;
    C.setFromCamera(z, o);
    const a = k();
    if (!a.length) return;
    let t = a[0].point;
    (n.ctrlKey || n.metaKey) && (t = new M(Math.round(a[0].point.x), Math.round(a[0].point.y), Math.round(a[0].point.z)));
    {
      const i = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], l = i[i.length - 1] ?? [], u = e.points.rawVal ?? [];
      if (l.length > 0) {
        const y = u[l[l.length - 1]];
        if (y) {
          const c = !!window.__hekatanOrthoMode;
          let m = ze;
          if (!m && c) {
            const _ = Math.abs(t.x - y[0]), D = Math.abs(t.y - y[1]), G = Math.abs(t.z - y[2]);
            m = _ >= D && _ >= G ? "x" : D >= G ? "y" : "z";
          }
          m === "x" ? t = new M(t.x, y[1], y[2]) : m === "y" ? t = new M(y[0], t.y, y[2]) : m === "z" && (t = new M(y[0], y[1], t.z));
        }
      }
    }
    const h = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, h);
    if (d) t = new M(d.x, d.y, d.z), ve(`\u{1F3AF} Snap [${d.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const i = window.__hekatanSnapEnabled !== false, l = window.__hekatanSnap2D ?? 0;
      i && l > 0 && (t = new M(Math.round(t.x / l) * l, Math.round(t.y / l) * l, Math.round(t.z / l) * l));
    }
    const S = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (S === "select" || S === "none" || !S) {
      if (Le) {
        gt && tn();
        const { kind: i, a: l, b: u } = Le, y = u !== void 0 ? `${i}:${l}:${u}` : `${i}:${l}`;
        n.ctrlKey || n.metaKey || n.shiftKey || me.clear(), me.has(y) ? me.delete(y) : me.add(y), Ve(), ve(`\u2713 Seleccionados ${me.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const i = n.ctrlKey || n.metaKey || n.shiftKey, l = n.clientX, u = n.clientY;
        gt ? (En(gt.x, gt.y, l, u, i), gt = null) : i || (gt = { x: l, y: u }, ve("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), xn(l, u, l + 1, u + 1, false));
      }
      return;
    }
    if (S === "axis") {
      const i = window.__hekatanAxisDraw;
      if (!i) return;
      if (!i.pendingStart) {
        i.pendingStart = [t.x, t.y, t.z], ve(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const l = i.mode === "number", u = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, i.pendingStart, [t.x, t.y, t.z], l);
      ve(`\u2713 Eje "${u}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (S === "delete") {
      if (rt >= 0) {
        const i = window.__hekatanDrawingAuxLines, l = (i == null ? void 0 : i.rawVal) ?? (i == null ? void 0 : i.val) ?? i ?? [], u = rt;
        if (u >= 0 && u < l.length) {
          It();
          const y = l.slice(0, u).concat(l.slice(u + 1));
          i && typeof i == "object" && "val" in i ? i.val = y : window.__hekatanDrawingAuxLines = y, ve(`\u{1F5D1} L\xEDnea auxiliar #${u + 1} borrada`), rt = -1, et.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (Be >= 0) {
        const i = Be, l = vt;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(i)) ?? false ? (mt(i), ve(`\u{1F5D1} \xC1rea #${i + 1} (shell Q4) borrada`)) : l >= 0 ? (pt(i, l), ve(`\u{1F5D1} Segmento ${l + 1} de polil\xEDnea #${i + 1} borrado`)) : (mt(i), ve(`\u{1F5D1} Polil\xEDnea #${i + 1} borrada`));
      } else ve("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (S === "circle") {
      if ($e.push([t.x, t.y, t.z]), $e.length === 1) {
        ve("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [i, l] = $e, u = Math.hypot(l[0] - i[0], l[1] - i[1], l[2] - i[2]);
      Math.abs(l[0] - i[0]);
      const y = Math.abs(l[1] - i[1]), m = Math.abs(l[2] - i[2]) < 1e-3 ? "xy" : y < 1e-3 ? "xz" : "yz", _ = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, i[0], i[1], i[2], u, _, m), ve(`\u2713 C\xEDrculo dibujado en ${m.toUpperCase()} \u2014 r=${u.toFixed(2)}m, ${_} segmentos`), $e = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (S === "arc") {
      if ($e.push([t.x, t.y, t.z]), $e.length === 1) {
        ve("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if ($e.length === 2) {
        ve("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [i, l, u] = $e, y = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, i, l, u, y), ve(`\u2713 Arco dibujado \u2014 ${y} segmentos`), $e = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (S === "rect") {
      if ($e.push([t.x, t.y, t.z]), $e.length === 1) {
        ve("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [i, l] = $e;
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, i, l), ve(`\u2713 Rect\xE1ngulo dibujado \u2014 (${i[0].toFixed(1)},${i[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), $e = [];
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
      const u = e.polylines.rawVal, y = e.points.rawVal.length;
      e.polylines.val = [...u.slice(0, -1), ...u[u.length - 1].length > 0 ? [u[u.length - 1]] : [], [y - 2, y - 1], []], dt = 0, ve(`\u258C Columna creada \u2014 h=${l.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_p = window.__hekatanRebuild) == null ? void 0 : _p.call(window);
      } catch {
      }
      return;
    }
    if (S === "wall") {
      if ($e.push([t.x, t.y, t.z]), $e.length === 1) {
        ve("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [i, l] = $e, u = dt && dt > 0 ? dt : 3;
      It();
      const y = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [i[0], i[1], i[2]], [l[0], l[1], l[2]], [l[0], l[1], l[2] + u], [i[0], i[1], i[2] + u]];
      const c = e.polylines.rawVal;
      if (c.length - 1, e.polylines.val = [...c.slice(0, -1), ...c[c.length - 1].length > 0 ? [c[c.length - 1]] : [], [y, y + 1, y + 2, y + 3, y], []], e.areas) {
        const m = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, m];
      }
      ve(`\u25A5 Pared Q4 creada \u2014 h=${u.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), $e = [], dt = 0;
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
      const u = e.polylines.rawVal, y = e.points.rawVal.length;
      e.polylines.val = [...u.slice(0, -1), ...u[u.length - 1].length > 0 ? [u[u.length - 1]] : [], [y - 2, y - 1], []], dt = 0, ve(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${i.toFixed(2)}m`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (S === "extl") {
      const i = (window.__hekatanSnap2D ?? 0.5) * 1.5, l = ot(t.x, t.y, t.z, i);
      if (!l) {
        ve("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const u = e.polylines.rawVal, y = e.points.rawVal, c = u[l.polyIdx], m = y[c[l.segIdx]], _ = y[c[l.segIdx + 1]];
      if (!m || !_) {
        ve("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const D = dt && dt > 0 ? dt : 3;
      It();
      const G = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [m[0], m[1], m[2]], [_[0], _[1], _[2]], [_[0], _[1], _[2] + D], [m[0], m[1], m[2] + D]];
      const Q = e.polylines.rawVal;
      if (e.polylines.val = [...Q.slice(0, -1), ...Q[Q.length - 1].length > 0 ? [Q[Q.length - 1]] : [], [G, G + 1, G + 2, G + 3, G], []], e.areas) {
        const I = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, I];
      }
      dt = 0, ve(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${D.toFixed(2)}m`);
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
      ve(`\u2726 Punto auxiliar agregado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      return;
    }
    if (S === "aux") {
      if ($e.push([t.x, t.y, t.z]), $e.length === 1) {
        ve("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [i, l] = $e, u = window.__hekatanDrawingAuxLines;
      if (u) {
        const D = u.rawVal ?? u.val ?? [];
        u.val = [...D, [i[0], i[1], i[2], l[0], l[1], l[2]]];
      }
      const y = l[0] - i[0], c = l[1] - i[1], m = l[2] - i[2], _ = Math.sqrt(y * y + c * c + m * m);
      ve(`\u2713 L\xEDnea auxiliar creada \u2014 L=${_.toFixed(2)}m (cyan, no FEM)`), $e = [];
      return;
    }
    if (S === "extend") {
      if ($e.push([t.x, t.y, t.z]), $e.length === 1) {
        ve("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [i, l] = $e, u = window.__hekatanDrawingAuxLines;
      if (u) {
        const y = u.rawVal ?? u.val ?? [];
        u.val = [...y, [i[0], i[1], i[2], l[0], l[1], l[2]]];
      }
      ve("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), $e = [];
      return;
    }
    if (S === "chaflan") {
      if ($e.push([t.x, t.y, t.z]), $e.length === 1) {
        ve("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [i, l] = $e, u = window.__hekatanChaflanR ?? 1, y = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_t = window.__hekatanDrawSlabChaflan) == null ? void 0 : _t.call(window, i, l, u, y, 6);
      const c = Math.abs(l[0] - i[0]).toFixed(1), m = Math.abs(l[1] - i[1]).toFixed(1);
      ve(`\u2713 Losa con chaflanes dibujada \u2014 ${c}\xD7${m}m, r=${u}m, ${y} seg/chafl\xE1n`), $e = [];
      try {
        (_u = window.__hekatanRebuild) == null ? void 0 : _u.call(window);
      } catch {
      }
      return;
    }
    if (E = false, It(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const i = e.polylines.rawVal, l = i.length - 1, u = i[l] ?? [];
      if (S === "line" && u.length === 2) {
        e.polylines.val = [...i, []], ve("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_v = window.__hekatanRebuild) == null ? void 0 : _v.call(window);
        } catch {
        }
        return;
      }
      if (S === "area" && u.length === 4) {
        e.polylines.val = [...i.slice(0, -1), [...u, u[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, l]), ve("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
        } catch {
        }
        return;
      }
    }
    if (S === "node") ve(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (S === "line") ve("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (S === "polyline") ve("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (S === "area") {
      const i = ((_x = e.polylines) == null ? void 0 : _x.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      ve(`\u25A6 \xC1rea \u2014 click ${i.length}/4. Marc\xE1 ${4 - i.length} v\xE9rtice${4 - i.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), f.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), f.addEventListener("pointermove", (n) => {
    var _a, _b;
    const o = v(n);
    if (!o) return;
    C.setFromCamera(z, o);
    const a = k();
    if (xe.geometry.deleteAttribute("position"), a.length) {
      let t = a[0].point.clone();
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z));
      {
        const S = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], i = S[S.length - 1] ?? [], l = e.points.rawVal ?? [];
        if (i.length > 0) {
          const u = l[i[i.length - 1]];
          if (u) {
            const y = !!window.__hekatanOrthoMode;
            let c = ze;
            if (!c && y) {
              const m = Math.abs(t.x - u[0]), _ = Math.abs(t.y - u[1]), D = Math.abs(t.z - u[2]);
              c = m >= _ && m >= D ? "x" : _ >= D ? "y" : "z";
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
      xe.geometry.setAttribute("position", new nt(t.toArray(), 3));
    }
    b();
  }), f.addEventListener("pointermove", (n) => {
    var _a;
    const o = v(n);
    if (!o) return;
    C.setFromCamera(z, o);
    let a = false;
    const t = C.intersectObject(j), h = k();
    if (t.length && h.length) {
      const d = new M(...e.points.rawVal[t[0].index]), S = new M(...h[0].point), i = d.sub(S), l = (_a = h[0].face) == null ? void 0 : _a.normal;
      l.transformDirection(q.matrixWorld), Math.abs(i.dot(l)) < 1e-4 && (a = true);
    }
    xe.visible = !a;
  });
  let gn = false, vn;
  f.addEventListener("pointermove", (n) => {
    var _a;
    if (!$t) return;
    const o = v(n);
    if (!o) return;
    C.setFromCamera(z, o);
    let a = false;
    const t = C.intersectObject(j), h = k();
    if (t.length && h.length) {
      const S = new M(...e.points.rawVal[t[0].index]), i = new M(...h[0].point), l = S.sub(i), u = (_a = h[0].face) == null ? void 0 : _a.normal;
      u.transformDirection(q.matrixWorld), Math.abs(l.dot(u)) < 1e-4 && (a = true);
    }
    if (a && $t < 5 && (gn = true, r.enabled = false, vn = t[0].index), !gn || $t % 2 !== 0) return;
    const d = [...e.points.rawVal];
    if (vn !== void 0) {
      let S = h[0].point;
      (n.ctrlKey || n.metaKey) && (S = new M(Math.round(S.x), Math.round(S.y), Math.round(S.z))), d[vn] = S.toArray();
    }
    e.points.val = d;
  }), f.addEventListener("pointerup", () => {
    r.enabled = true, gn = false;
  }), f.addEventListener("contextmenu", (n) => {
    var _a;
    const o = v(n);
    if (!o) return;
    C.setFromCamera(z, o);
    let a = false;
    const t = C.intersectObject(j), h = k();
    if (t.length && h.length) {
      const i = new M(...e.points.rawVal[t[0].index]), l = new M(...h[0].point), u = i.sub(l), y = (_a = h[0].face) == null ? void 0 : _a.normal;
      y.transformDirection(q.matrixWorld), Math.abs(u.dot(y)) < 1e-4 && (a = true);
    }
    if (!a) return;
    const d = [...e.points.rawVal];
    if (d.splice(t[0].index, 1), e.points.val = d, !e.polylines) return;
    const S = e.polylines.rawVal.map((i) => i.filter((l) => l !== t[0].index)).map((i) => i.map((l) => l > t[0].index ? l - 1 : l)).filter((i) => i.length);
    S.push([]), e.polylines.val = S;
  });
}
function Ko(e, s, w) {
  const g = Math.round(14.999999999999998), x = { position: e.position.clone(), quaternion: e.quaternion.clone() }, f = setInterval(C, 1e3 / 30);
  let b = 0;
  function C() {
    b++;
    const z = b / g;
    e.position.lerpVectors(x.position, s.position, z), e.quaternion.slerpQuaternions(x.quaternion, s.quaternion, z), w && w(), b == g && clearInterval(f);
  }
}
class ao {
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
    this.map = Cn[s] || Cn.rainbow, this.n = w;
    const p = 1 / this.n, r = new it(), g = new it();
    this.lut.length = 0, this.lut.push(new it(this.map[0][1]));
    for (let x = 1; x < w; x++) {
      const f = x * p;
      for (let b = 0; b < this.map.length - 1; b++) if (f > this.map[b][0] && f <= this.map[b + 1][0]) {
        const C = this.map[b][0], z = this.map[b + 1][0];
        r.setHex(this.map[b][1], sn), g.setHex(this.map[b + 1][1], sn);
        const v = new it().lerpColors(r, g, (f - C) / (z - C));
        this.lut.push(v);
      }
    }
    return this.lut.push(new it(this.map[this.map.length - 1][1])), this;
  }
  copy(s) {
    return this.lut = s.lut, this.map = s.map, this.n = s.n, this.minV = s.minV, this.maxV = s.maxV, this;
  }
  getColor(s) {
    s = mo.clamp(s, this.minV, this.maxV), s = (s - this.minV) / (this.maxV - this.minV);
    const w = Math.round(s * this.n);
    return this.lut[w];
  }
  addColorMap(s, w) {
    return Cn[s] = w, this;
  }
  createCanvas() {
    const s = document.createElement("canvas");
    return s.width = 1, s.height = this.n, this.updateCanvas(s), s;
  }
  updateCanvas(s) {
    const w = s.getContext("2d", { alpha: false }), p = w.getImageData(0, 0, 1, this.n), r = p.data;
    let g = 0;
    const x = 1 / this.n, f = new it(), b = new it(), C = new it();
    for (let z = 1; z >= 0; z -= x) for (let v = this.map.length - 1; v >= 0; v--) if (z < this.map[v][0] && z >= this.map[v - 1][0]) {
      const q = this.map[v - 1][0], O = this.map[v][0];
      f.setHex(this.map[v - 1][1], sn), b.setHex(this.map[v][1], sn), C.lerpColors(f, b, (z - q) / (O - q)), r[g * 4] = Math.round(C.r * 255), r[g * 4 + 1] = Math.round(C.g * 255), r[g * 4 + 2] = Math.round(C.b * 255), r[g * 4 + 3] = 255, g += 1;
    }
    return w.putImageData(p, 0, 0), s;
  }
}
const Cn = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, Ot = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function Ho(e) {
  e = Math.max(0, Math.min(1, e));
  for (let w = 0; w < Ot.length - 1; w++) {
    const [p, r, g, x] = Ot[w], [f, b, C, z] = Ot[w + 1];
    if (e <= f) {
      const v = (e - p) / (f - p);
      return [r + (b - r) * v, g + (C - g) * v, x + (z - x) * v];
    }
  }
  const s = Ot[Ot.length - 1];
  return [s[1], s[2], s[3]];
}
function Wo() {
  const s = new Uint8Array(1024);
  for (let p = 0; p < 256; p++) {
    const r = p / 255, [g, x, f] = Ho(r);
    s[p * 4 + 0] = g, s[p * 4 + 1] = x, s[p * 4 + 2] = f, s[p * 4 + 3] = 255;
  }
  const w = new yo(s, 256, 1, go);
  return w.minFilter = Kn, w.magFilter = Kn, w.wrapS = Hn, w.wrapT = Hn, w.needsUpdate = true, w;
}
function Go(e, s, w) {
  new ao();
  const p = Wo(), r = new wo({ uniforms: { cmap: { value: p }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: yt, transparent: false, clipping: true, depthWrite: true, depthTest: true }), g = new Ze(new fe(), r);
  return g.renderOrder = -1, g.frustumCulled = false, g.userData.isShellArea = true, g.name = "__hekatan_shell_colormap", X.derive(() => {
    g.geometry.setAttribute("position", new nt(e.val.flat(), 3));
    const x = [];
    for (const k of s.val) k.length === 3 ? x.push(k[0], k[1], k[2]) : k.length === 4 && (x.push(k[0], k[1], k[2]), x.push(k[0], k[2], k[3]));
    g.geometry.setIndex(new xo(x, 1));
    const f = w.val.filter((k) => Number.isFinite(k));
    let b, C;
    const z = Tn.val;
    if (z ? (C = z[0], b = z[1]) : (b = f.length ? Math.max(...f) : 1, C = f.length ? Math.min(...f) : 0, C >= 0 && b > 0 && (C = 0)), b === C) {
      const k = Math.max(Math.abs(b) * 1e-6, 1e-9);
      b += k, C -= k;
    }
    const v = z && z[0] > z[1], q = Math.min(C, b), O = Math.max(C, b), J = O - q, we = new Float32Array(w.val.length);
    for (let k = 0; k < w.val.length; k++) {
      const j = w.val[k];
      if (!Number.isFinite(j)) {
        we[k] = -1;
        continue;
      }
      const be = ((v ? O + q - j : j) - q) / J;
      we[k] = Math.max(0, Math.min(1, be));
    }
    g.geometry.setAttribute("scalar", new Ue(we, 1));
  }), g;
}
function qo(e, s, w, p) {
  const r = Go(w, e.elements, p);
  return X.derive(() => {
    r.visible = s.shellResults.val != "none";
  }), r;
}
const Jo = 6, zn = 10, Qo = 0.012;
function Oo(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function jo(e, s, w, p) {
  if (!w && !p) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && w) {
    const g = w[e];
    if (g && g.has(s)) return g.get(s);
  }
  return null;
}
function es(e, s, w, p) {
  const r = new Ne(), g = new ao();
  g.setColorMap("rainbow");
  const x = new it(), f = X.state([]);
  return X.derive(() => {
    var _a, _b, _c;
    s.deformedShape.val;
    const b = w.val, C = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], z = Oo(s.frameResults.val);
    if (r.children.forEach((P) => {
      P.geometry && P.geometry.dispose(), P.material && P.material.dispose();
    }), r.clear(), !z || C.length === 0 || b.length === 0) {
      f.val = [];
      return;
    }
    const v = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, q = (_c = e.deformOutputs) == null ? void 0 : _c.val, O = [], J = [];
    for (let P = 0; P < C.length; P++) {
      if (C[P].length !== 2) continue;
      const te = jo(z, P, v, q);
      te && (O.push(te[0], te[1]), J.push({ idx: P, vals: te }));
    }
    if (O.length === 0) {
      f.val = [];
      return;
    }
    const we = Math.min(...O), k = Math.max(...O);
    g.setMin(we), g.setMax(k), f.val = O;
    const j = [1 / 0, 1 / 0, 1 / 0], xe = [-1 / 0, -1 / 0, -1 / 0];
    for (const P of b) for (let B = 0; B < 3; B++) j[B] = Math.min(j[B], P[B]), xe[B] = Math.max(xe[B], P[B]);
    const N = Math.max(xe[0] - j[0], xe[1] - j[1], xe[2] - j[2], 1) * Qo, H = [], U = [], E = [];
    let L = 0;
    for (const { idx: P, vals: B } of J) {
      const te = C[P], Z = b[te[0]], ne = b[te[1]];
      if (!Z || !ne) continue;
      const F = new M(ne[0] - Z[0], ne[1] - Z[1], ne[2] - Z[2]), oe = F.length();
      if (oe < 1e-10) continue;
      F.normalize();
      const ie = Math.abs(F.y) < 0.99 ? new M(0, 1, 0) : new M(1, 0, 0), ye = new M().crossVectors(F, ie).normalize(), ue = new M().crossVectors(F, ye).normalize(), Ce = zn + 1, re = Jo;
      for (let ge = 0; ge < Ce; ge++) {
        const Te = ge / zn, ae = Z[0] + F.x * oe * Te, pe = Z[1] + F.y * oe * Te, T = Z[2] + F.z * oe * Te, $ = B[0] + (B[1] - B[0]) * Te, W = g.getColor($) ?? new it(0, 0, 0);
        x.copy(W).convertSRGBToLinear();
        for (let K = 0; K < re; K++) {
          const ce = K / re * Math.PI * 2, se = Math.cos(ce), ke = Math.sin(ce);
          H.push(ae + (ye.x * se + ue.x * ke) * N, pe + (ye.y * se + ue.y * ke) * N, T + (ye.z * se + ue.z * ke) * N), U.push(x.r, x.g, x.b);
        }
      }
      for (let ge = 0; ge < zn; ge++) for (let Te = 0; Te < re; Te++) {
        const ae = (Te + 1) % re, pe = L + ge * re + Te, T = L + ge * re + ae, $ = L + (ge + 1) * re + Te, W = L + (ge + 1) * re + ae;
        E.push(pe, T, W), E.push(pe, W, $);
      }
      L += Ce * re;
    }
    if (H.length === 0) return;
    const V = new fe();
    V.setAttribute("position", new nt(H, 3)), V.setAttribute("color", new nt(U, 3)), V.setIndex(E), V.computeVertexNormals();
    const A = new Ke({ vertexColors: true, side: yt }), Y = new Ze(V, A);
    Y.frustumCulled = false, r.add(Y);
  }), r.__colorMapValues = f, r;
}
function ts() {
  const e = window;
  return { forceUnit: e.__hekatanForceUnit ?? localStorage.getItem("hk_forceUnit") ?? "tonf", dispUnit: e.__hekatanDispUnit ?? localStorage.getItem("hk_dispUnit") ?? "mm", stressUnit: e.__hekatanStressUnit ?? localStorage.getItem("hk_stressUnit") ?? "tonf/m\xB2" };
}
const ns = { kN: 1, tonf: 1 / 9.80665, kip: 1 / 4.4482216 }, os = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, ss = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76, "kip/ft\xB2": 1 / 47.88026 };
function Qe(e, s = 4) {
  return e == null || !isFinite(e) ? "\u2014" : e === 0 ? "0" : Math.abs(e) < 1e-3 || Math.abs(e) > 1e5 ? e.toExponential(s) : e.toFixed(s);
}
const as = 16755200, On = 56831, is = 56831, ls = 56831, rn = 65382;
function rs(e) {
  const s = new Ne();
  s.name = "__hekatan_hover", s.renderOrder = 99;
  const w = new Nt(1, 16, 16), p = new Ke({ color: as, transparent: true, opacity: 0.85, depthTest: false }), r = new Ze(w, p);
  r.visible = false, r.renderOrder = 100, s.add(r);
  const g = new fe(), x = new Oe({ color: On, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), f = new At(g, x);
  f.visible = false, f.renderOrder = 100, s.add(f);
  const b = new Ke({ color: On, transparent: true, opacity: 0.7, depthTest: false }), C = new Ze(new Wn(1, 1, 1, 12), b);
  C.visible = false, C.renderOrder = 100, s.add(C);
  const z = new fe(), v = new Ke({ color: is, transparent: true, opacity: 0.45, side: yt, depthTest: false }), q = new Ze(z, v);
  q.visible = false, q.renderOrder = 100, s.add(q);
  const O = new fe(), J = new Oe({ color: ls, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), we = new At(O, J);
  we.visible = false, we.renderOrder = 100, s.add(we);
  const k = new Ke({ color: rn, transparent: true, opacity: 0.95, depthTest: false }), j = new Ze(w, k);
  j.visible = false, j.renderOrder = 101, s.add(j);
  const xe = new Ke({ color: rn, transparent: true, opacity: 0.85, depthTest: false }), be = new Ze(new Wn(1, 1, 1, 12), xe);
  be.visible = false, be.renderOrder = 101, s.add(be);
  const N = new fe(), H = new Ke({ color: rn, transparent: true, opacity: 0.55, side: yt, depthTest: false }), U = new Ze(N, H);
  U.visible = false, U.renderOrder = 101, s.add(U);
  const E = new fe(), L = new Oe({ color: rn, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), V = new At(E, L);
  V.visible = false, V.renderOrder = 101, s.add(V);
  let A = null;
  const Y = document.createElement("div");
  Object.assign(Y.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), Y.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(Y);
  }, 0);
  function P(ae) {
    const pe = e.derivedNodes.rawVal;
    return !pe || ae < 0 || ae >= pe.length ? null : new M(pe[ae][0], pe[ae][1], pe[ae][2]);
  }
  function B(ae, pe) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s;
    const T = e.getActiveCamera();
    if (!T || !e.mesh) return null;
    const $ = e.rendererElm.getBoundingClientRect(), W = ae - $.left, K = pe - $.top, ce = e.derivedNodes.rawVal, se = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!ce || !se) return null;
    const ke = /* @__PURE__ */ new Map(), he = (me) => {
      if (ke.has(me)) return ke.get(me);
      const _e2 = P(me);
      if (!_e2) return ke.set(me, null), null;
      const le = _e2.clone().project(T), Ee = (le.x * 0.5 + 0.5) * $.width, de = (-le.y * 0.5 + 0.5) * $.height, Re = { x: Ee, y: de, z: le.z };
      return ke.set(me, Re), Re;
    }, ze = /* @__PURE__ */ new Set();
    for (const me of se) if (me) for (const _e2 of me) ze.add(_e2);
    const Pe = 8;
    let Xe = -1, qe = Pe;
    for (let me = 0; me < ce.length; me++) {
      if (!ze.has(me)) continue;
      const _e2 = he(me);
      if (!_e2 || _e2.z < -1 || _e2.z > 1) continue;
      const le = _e2.x - W, Ee = _e2.y - K, de = Math.sqrt(le * le + Ee * Ee);
      de < qe && (qe = de, Xe = me);
    }
    const Fe = ts(), Je = os[Fe.dispUnit] ?? 1e3, He = ns[Fe.forceUnit] ?? 1;
    if (Xe >= 0) {
      const me = ce[Xe];
      let _e2 = `Nodo ${Xe}
(${me[0].toFixed(3)}, ${me[1].toFixed(3)}, ${me[2].toFixed(3)})`;
      const le = (_c = (_b = e.mesh) == null ? void 0 : _b.deformOutputs) == null ? void 0 : _c.rawVal;
      if (le == null ? void 0 : le.deformations) {
        const Ee = le.deformations.get(Xe);
        if (Ee && (_e2 += `
\u2500\u2500\u2500\u2500 \u0394 desplaz. \u2500\u2500\u2500\u2500`, _e2 += `
Ux = ${Qe(Ee[0] * Je, 3)} ${Fe.dispUnit}`, _e2 += `
Uy = ${Qe(Ee[1] * Je, 3)} ${Fe.dispUnit}`, _e2 += `
Uz = ${Qe(Ee[2] * Je, 3)} ${Fe.dispUnit}`, (Math.abs(Ee[3]) > 1e-9 || Math.abs(Ee[4]) > 1e-9 || Math.abs(Ee[5]) > 1e-9) && (_e2 += `
Rx = ${Qe(Ee[3] * 1e3, 3)} mrad`, _e2 += `
Ry = ${Qe(Ee[4] * 1e3, 3)} mrad`, _e2 += `
Rz = ${Qe(Ee[5] * 1e3, 3)} mrad`)), le.reactions) {
          const de = le.reactions.get(Xe);
          de && (Math.abs(de[0]) > 1e-9 || Math.abs(de[1]) > 1e-9 || Math.abs(de[2]) > 1e-9 || Math.abs(de[3]) > 1e-6 || Math.abs(de[4]) > 1e-6 || Math.abs(de[5]) > 1e-6) && (_e2 += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, _e2 += `
Fx = ${Qe(de[0] * He)} ${Fe.forceUnit}`, _e2 += `
Fy = ${Qe(de[1] * He)} ${Fe.forceUnit}`, _e2 += `
Fz = ${Qe(de[2] * He)} ${Fe.forceUnit}`, (Math.abs(de[3]) > 1e-6 || Math.abs(de[4]) > 1e-6 || Math.abs(de[5]) > 1e-6) && (_e2 += `
Mx = ${Qe(de[3] * He)} ${Fe.forceUnit}\xB7m`, _e2 += `
My = ${Qe(de[4] * He)} ${Fe.forceUnit}\xB7m`, _e2 += `
Mz = ${Qe(de[5] * He)} ${Fe.forceUnit}\xB7m`));
        }
      }
      return { type: "node", idx: Xe, info: _e2 };
    }
    const et = 5;
    let Be = -1, vt = et, rt = "frame";
    for (let me = 0; me < se.length; me++) {
      const _e2 = se[me];
      if (!(!_e2 || _e2.length < 2)) {
        if (_e2.length === 2) {
          const le = he(_e2[0]), Ee = he(_e2[1]);
          if (!le || !Ee || le.z < -1 || le.z > 1 || Ee.z < -1 || Ee.z > 1) continue;
          const de = cs(W, K, le.x, le.y, Ee.x, Ee.y);
          de < vt && (vt = de, Be = me, rt = "frame");
        } else if (_e2.length === 3 || _e2.length === 4) {
          const le = [];
          let Ee = true;
          for (const de of _e2) {
            const Re = he(de);
            if (!Re || Re.z < -1 || Re.z > 1) {
              Ee = false;
              break;
            }
            le.push(Re);
          }
          if (!Ee) continue;
          if (ds(W, K, le)) {
            const Re = le.reduce((Le, bt) => Le + bt.z, 0) / le.length * 1e-3;
            Re < vt && (vt = Re, Be = me, rt = "shell");
          }
        } else if (_e2.length === 8) {
          const le = [];
          let Ee = true;
          for (const Ve of _e2) {
            const Ie = he(Ve);
            if (!Ie || Ie.z < -1 || Ie.z > 1) {
              Ee = false;
              break;
            }
            le.push(Ie);
          }
          if (!Ee) continue;
          const de = Math.min(...le.map((Ve) => Ve.x)), Re = Math.max(...le.map((Ve) => Ve.x)), Le = Math.min(...le.map((Ve) => Ve.y)), bt = Math.max(...le.map((Ve) => Ve.y));
          if (W >= de && W <= Re && K >= Le && K <= bt) {
            const Ie = le.reduce((ot, ct) => ot + ct.z, 0) / le.length * 1e-3;
            Ie < vt && (vt = Ie, Be = me, rt = "solid");
          }
        }
      }
    }
    if (Be >= 0) {
      const me = se[Be];
      let le = `${rt === "frame" ? "Frame" : rt === "shell" ? "Shell" : "Solid"} ${Be}`;
      const Ee = (_e = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e.rawVal, de = (_g = (_f = Ee == null ? void 0 : Ee.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, Be);
      if (de) {
        de.name && (le += `
  \u{1F4CB} ${de.name}`), de.shape && (le += `
  Shape: ${de.shape}`);
        const Re = /concrete|hormig|rect.*sólida/i.test(de.shape || ""), Le = Re ? 100 : 1e3, bt = Re ? "cm" : "mm", Ve = (ot) => {
          const ct = ot * Le;
          return Math.abs(ct - Math.round(ct)) < 0.05 ? `${Math.round(ct)}` : `${ct.toFixed(1)}`;
        }, Ie = [];
        if (de.D != null && Ie.push(`D=${Ve(de.D)}`), de.B != null && Ie.push(`B=${Ve(de.B)}`), de.TF != null && Ie.push(`TF=${Ve(de.TF)}`), de.TW != null && Ie.push(`TW=${Ve(de.TW)}`), de.t != null && Ie.push(`t=${Ve(de.t)}`), Ie.length && (le += `
  Dim: ${Ie.join(" ")} ${bt}`), de.material) {
          let ot = de.material;
          de.fillMaterial && (ot += ` + FILL "${de.fillMaterial}"`), le += `
  Mat: ${ot}`;
        }
      } else {
        const Re = (_i = (_h = Ee == null ? void 0 : Ee.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, Be), Le = (_k = (_j = Ee == null ? void 0 : Ee.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, Be);
        Re ? (le += `
  ${Re}`, Le && !Re.includes(Le) && (le += `  (${Le})`)) : Le && (le += `
  Material: ${Le}`);
      }
      if (le += `
nodos: [${me.join(", ")}]`, rt === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const Re = e.mesh.analyzeOutputs.rawVal, Le = ss[Fe.stressUnit] ?? 1, bt = [["bendingXX", "Mxx", He, `${Fe.forceUnit}\xB7m/m`], ["bendingYY", "Myy", He, `${Fe.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", He, `${Fe.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", He, `${Fe.forceUnit}/m`], ["membraneYY", "Nyy", He, `${Fe.forceUnit}/m`], ["membraneXY", "Nxy", He, `${Fe.forceUnit}/m`], ["shearX", "Qx", He, `${Fe.forceUnit}/m`], ["shearY", "Qy", He, `${Fe.forceUnit}/m`], ["vonMises", "\u03C3VM", Le, Fe.stressUnit], ["pressure", "p", Le, Fe.stressUnit]], Ve = [];
        for (const [Ie, ot, ct, Tt] of bt) {
          const Ct = Re == null ? void 0 : Re[Ie];
          if (Ct && Ct instanceof Map) {
            const mt = Ct.get(Be);
            if (mt != null) {
              if (typeof mt == "number") Ve.push(`${ot} = ${Qe(mt * ct, 3)} ${Tt}`);
              else if (Array.isArray(mt)) {
                let pt = mt[0];
                for (const st of mt) Math.abs(st) > Math.abs(pt) && (pt = st);
                Ve.push(`${ot} = ${Qe(pt * ct, 3)} ${Tt}`);
              }
            }
          }
        }
        Ve.length > 0 && (le += `
\u2500\u2500\u2500\u2500 results \u2500\u2500\u2500\u2500
` + Ve.slice(0, 8).join(`
`));
      }
      if (rt === "frame" && ((_m = e.mesh) == null ? void 0 : _m.deformOutputs) && e.mesh.elementInputs) {
        const Re = e.mesh.deformOutputs.rawVal, Le = e.mesh.elementInputs.rawVal, bt = Re == null ? void 0 : Re.deformations;
        if (bt && me.length === 2) {
          const Ve = bt.get(me[0]), Ie = bt.get(me[1]), ot = ce[me[0]], ct = ce[me[1]];
          if (Ve && Ie && ot && ct) {
            const Tt = ct[0] - ot[0], Ct = ct[1] - ot[1], mt = ct[2] - ot[2], pt = Math.sqrt(Tt * Tt + Ct * Ct + mt * mt);
            if (pt > 1e-9) {
              const st = Tt / pt, St = Ct / pt, zt = mt / pt, Pt = (Ie[0] - Ve[0]) * st + (Ie[1] - Ve[1]) * St + (Ie[2] - Ve[2]) * zt, Yt = ((_n2 = Le.elasticities) == null ? void 0 : _n2.get(Be)) ?? 0, Et = ((_o2 = Le.areas) == null ? void 0 : _o2.get(Be)) ?? 0, en = ((_p = Le.momentsOfInertiaY) == null ? void 0 : _p.get(Be)) ?? 0, je = ((_q = Le.momentsOfInertiaZ) == null ? void 0 : _q.get(Be)) ?? 0, hn = ((_r = Le.torsionalConstants) == null ? void 0 : _r.get(Be)) ?? 0, mn = ((_s = Le.shearModuli) == null ? void 0 : _s.get(Be)) ?? Yt / 2.6, Ft = Yt * Et * (Pt / pt), Zt = (Ie[3] - Ve[3]) * st + (Ie[4] - Ve[4]) * St + (Ie[5] - Ve[5]) * zt, Ut = mn * hn * (Zt / pt), wn = Ie[4] - Ve[4], Kt = Ie[5] - Ve[5], Ht = Yt * en * wn / pt, Bt = Yt * je * Kt / pt;
              le += `
\u2500\u2500\u2500\u2500 frame \u2500\u2500\u2500\u2500`, le += `
L = ${Qe(pt, 3)} m`, le += `
\u0394L = ${Qe(Pt * Je, 3)} ${Fe.dispUnit}`, le += `
\u03B5 = ${Qe(Pt / pt, 6)}`, Math.abs(Ft) > 1e-6 && (le += `
N \u2248 ${Qe(Ft * He)} ${Fe.forceUnit}`), Math.abs(Ut) > 1e-6 && (le += `
T \u2248 ${Qe(Ut * He)} ${Fe.forceUnit}\xB7m`), Math.abs(Ht) > 1e-6 && (le += `
My \u2248 ${Qe(Ht * He)} ${Fe.forceUnit}\xB7m`), Math.abs(Bt) > 1e-6 && (le += `
Mz \u2248 ${Qe(Bt * He)} ${Fe.forceUnit}\xB7m`);
            }
          }
        }
      }
      return { type: rt, idx: Be, info: le };
    }
    return null;
  }
  function te(ae, pe, T) {
    var _a, _b, _c;
    if (r.visible = false, f.visible = false, C.visible = false, q.visible = false, we.visible = false, !ae || !e.mesh) {
      Y.style.display = "none", e.render();
      return;
    }
    const $ = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (ae.type === "node") {
      const se = P(ae.idx);
      if (se) {
        const ke = e.derivedNodes.rawVal ?? [];
        let he = 1;
        if (ke.length >= 2) {
          let Xe = [1 / 0, 1 / 0, 1 / 0], qe = [-1 / 0, -1 / 0, -1 / 0];
          for (const Fe of ke) for (let Je = 0; Je < 3; Je++) Fe[Je] < Xe[Je] && (Xe[Je] = Fe[Je]), Fe[Je] > qe[Je] && (qe[Je] = Fe[Je]);
          he = Math.max(qe[0] - Xe[0], qe[1] - Xe[1], qe[2] - Xe[2], 0.1);
        }
        const ze = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, Pe = 0.021 * he * ze;
        r.position.copy(se), r.scale.setScalar(Pe), r.visible = true;
      }
    } else if (ae.type === "frame" && $) {
      const se = $[ae.idx], ke = P(se[0]), he = P(se[1]);
      if (ke && he) {
        const ze = ke.clone().add(he).multiplyScalar(0.5), Pe = he.clone().sub(ke), Xe = Pe.length(), Je = e.getActiveCamera().position.distanceTo(ze) * 35e-4;
        C.position.copy(ze);
        const He = new M(0, 1, 0), et = He.clone().cross(Pe).normalize(), Be = He.angleTo(Pe);
        C.quaternion.setFromAxisAngle(et, Be), C.scale.set(Je, Xe, Je), C.visible = true;
      }
    } else if (ae.type === "shell" && $) {
      const se = $[ae.idx], ke = [], he = [];
      for (const ze of se) {
        const Pe = P(ze);
        if (!Pe) return;
        ke.push(Pe.x, Pe.y, Pe.z);
      }
      se.length === 4 ? he.push(0, 1, 2, 0, 2, 3) : se.length === 3 && he.push(0, 1, 2), z.setAttribute("position", new nt(ke, 3)), z.setIndex(he), z.computeVertexNormals(), q.visible = true;
    } else if (ae.type === "solid" && $) {
      const se = $[ae.idx], ke = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], he = [];
      for (const [ze, Pe] of ke) {
        const Xe = P(se[ze]), qe = P(se[Pe]);
        Xe && qe && he.push(Xe.x, Xe.y, Xe.z, qe.x, qe.y, qe.z);
      }
      O.setAttribute("position", new nt(he, 3)), we.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      Y.style.display = "none", e.render();
      return;
    }
    Y.textContent = ae.info, Y.style.whiteSpace = "pre-line", Y.style.display = "block";
    const K = e.rendererElm.getBoundingClientRect(), ce = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? K;
    Y.style.left = `${pe - ce.left}px`, Y.style.top = `${T - ce.top}px`, e.render();
  }
  let Z = "", ne = 0, F = 0;
  const oe = window.__hekatanHoverDebug ?? false, ie = (ae) => {
    ne && cancelAnimationFrame(ne), ne = requestAnimationFrame(() => {
      var _a, _b, _c;
      const pe = B(ae.clientX, ae.clientY);
      if (oe && F < 5) {
        const $ = e.derivedNodes.rawVal, W = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${ae.clientX}, ${ae.clientY}) nodes=${($ == null ? void 0 : $.length) ?? 0} elems=${(W == null ? void 0 : W.length) ?? 0} hover=`, pe), F++;
      }
      const T = pe ? `${pe.type}:${pe.idx}` : "";
      if (T !== Z) Z = T, te(pe, ae.clientX, ae.clientY);
      else if (pe) {
        const $ = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        Y.style.left = `${ae.clientX - $.left}px`, Y.style.top = `${ae.clientY - $.top}px`;
      }
    });
  };
  let ye = null;
  const ue = () => {
    Z = "", r.visible = false, f.visible = false, C.visible = false, q.visible = false, we.visible = false, Y.style.display = "none", e.render();
  }, Ce = (ae) => {
    const pe = e.rendererElm.getBoundingClientRect(), T = ae.clientX - pe.left, $ = ae.clientY - pe.top;
    (T < -2 || $ < -2 || T > pe.width + 2 || $ > pe.height + 2) && (ye && clearTimeout(ye), ye = window.setTimeout(ue, 200));
  }, re = () => {
    ye && (clearTimeout(ye), ye = null);
  };
  e.rendererElm.addEventListener("pointermove", ie), e.rendererElm.addEventListener("pointerleave", Ce), e.rendererElm.addEventListener("pointerenter", re);
  let ge = null;
  e.rendererElm.addEventListener("pointerdown", (ae) => {
    ae.button === 0 && (ge = { x: ae.clientX, y: ae.clientY });
  }), e.rendererElm.addEventListener("pointerup", (ae) => {
    if (ae.button !== 0 || !ge) return;
    const pe = ae.clientX - ge.x, T = ae.clientY - ge.y;
    if (ge = null, pe * pe + T * T > 9) return;
    const $ = B(ae.clientX, ae.clientY);
    $ ? (A = { type: $.type, idx: $.idx }, Te()) : (A = null, Te());
  });
  function Te() {
    var _a, _b;
    if (j.visible = false, be.visible = false, U.visible = false, V.visible = false, !A || !e.mesh) {
      e.render();
      return;
    }
    const ae = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (A.type === "node") {
      const pe = P(A.idx);
      if (pe) {
        const T = e.derivedNodes.rawVal ?? [];
        let $ = 1;
        if (T.length >= 2) {
          let ce = [1 / 0, 1 / 0, 1 / 0], se = [-1 / 0, -1 / 0, -1 / 0];
          for (const ke of T) for (let he = 0; he < 3; he++) ke[he] < ce[he] && (ce[he] = ke[he]), ke[he] > se[he] && (se[he] = ke[he]);
          $ = Math.max(se[0] - ce[0], se[1] - ce[1], se[2] - ce[2], 0.1);
        }
        const W = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, K = 0.025 * $ * W;
        j.position.copy(pe), j.scale.setScalar(K), j.visible = true;
      }
    } else if (A.type === "frame" && ae) {
      const pe = ae[A.idx], T = P(pe[0]), $ = P(pe[1]);
      if (T && $) {
        const W = T.clone().add($).multiplyScalar(0.5), K = $.clone().sub(T), ce = K.length(), he = e.getActiveCamera().position.distanceTo(W) * 35e-4;
        be.position.copy(W);
        const ze = new M(0, 1, 0), Pe = ze.clone().cross(K).normalize(), Xe = ze.angleTo(K);
        be.quaternion.setFromAxisAngle(Pe, Xe), be.scale.set(he, ce, he), be.visible = true;
      }
    } else if (A.type === "shell" && ae) {
      const pe = ae[A.idx], T = [], $ = [];
      for (const W of pe) {
        const K = P(W);
        if (!K) return;
        T.push(K.x, K.y, K.z);
      }
      pe.length === 4 ? $.push(0, 1, 2, 0, 2, 3) : pe.length === 3 && $.push(0, 1, 2), N.setAttribute("position", new nt(T, 3)), N.setIndex($), N.computeVertexNormals(), U.visible = true;
    } else if (A.type === "solid" && ae) {
      const pe = ae[A.idx], T = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], $ = [];
      for (const [W, K] of T) {
        const ce = P(pe[W]), se = P(pe[K]);
        ce && se && $.push(ce.x, ce.y, ce.z, se.x, se.y, se.z);
      }
      E.setAttribute("position", new nt($, 3)), V.visible = true;
    }
    e.render();
  }
  return X.derive(() => {
    e.derivedNodes.val, A && Te();
  }), s;
}
function cs(e, s, w, p, r, g) {
  const x = r - w, f = g - p, b = x * x + f * f;
  if (b < 1e-9) {
    const J = e - w, we = s - p;
    return Math.sqrt(J * J + we * we);
  }
  let C = ((e - w) * x + (s - p) * f) / b;
  C = Math.max(0, Math.min(1, C));
  const z = w + C * x, v = p + C * f, q = e - z, O = s - v;
  return Math.sqrt(q * q + O * O);
}
function ds(e, s, w) {
  let p = false;
  for (let r = 0, g = w.length - 1; r < w.length; g = r++) {
    const x = w[r].x, f = w[r].y, b = w[g].x, C = w[g].y;
    f > s != C > s && e < (b - x) * (s - f) / (C - f + 1e-12) + x && (p = !p);
  }
  return p;
}
function jn(e, s = 8) {
  const w = document.createElement("div");
  w.id = "legend";
  const p = document.createElement("div");
  p.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", w.appendChild(p), setTimeout(() => {
    X.derive(() => {
      p.textContent = Fn.val ? `[${Fn.val}]` : "";
    });
  });
  const r = Array.from({ length: s + 1 }, (b, C) => C / s).reverse();
  let g, x;
  r.forEach((b, C) => {
    g = document.createElement("div"), g.id = `marker-${C}`, g.className = "marker", g.style.marginTop = C == 0 ? "0px" : `calc(${50 / s}vh - 1px)`, x = document.createElement("p"), x.id = `marker-text-${C}`, g.append(x), w.append(g);
  });
  const f = [];
  return w.querySelectorAll("p").forEach((b) => f.push(b)), setTimeout(() => {
    X.derive(() => {
      r.forEach((b, C) => {
        const z = f[C];
        z && (z.innerText = ps(e.val, b).toString());
      });
    });
  }), w;
}
function ps(e, s) {
  const w = Tn.val;
  if (w) return (w[0] + s * (w[1] - w[0])).toPrecision(3);
  const p = e.filter((x) => Number.isFinite(x));
  if (p.length === 0) return "0";
  let r = Math.min(...p);
  const g = Math.max(...p);
  return r >= 0 && g > 0 && (r = 0), (r + s * (g - r)).toPrecision(3);
}
function Ms({ mesh: e, settingsObj: s, drawingObj: w, objects3D: p, solids: r }) {
  ko.DEFAULT_UP = new M(0, 0, 1);
  const g = document.createElement("div"), x = new vo(), f = new bo(45, 1, 0.1, 2 * 1e6), b = new Mo(-10, 10, 10, -10, -1e3, 2e6);
  let C = f;
  const z = new _o({ antialias: true });
  z.localClippingEnabled = true;
  const v = new Gn(f, z.domElement);
  v.enableDamping = true, v.dampingFactor = 0.1, v.screenSpacePanning = true, v.zoomSpeed = 0.8, v.panSpeed = 1.2, v.rotateSpeed = 0.9, v.keyPanSpeed = 12, v.listenToKeyEvents(window), v.touches = { ONE: an.ROTATE, TWO: an.DOLLY_PAN }, z.domElement.addEventListener("wheel", (T) => {
    if (!T.ctrlKey && Math.abs(T.deltaX) > Math.abs(T.deltaY) * 1.5) {
      T.preventDefault();
      const $ = v.target, W = new M().subVectors(f.position, $), K = new M();
      K.crossVectors(f.up, W).normalize();
      const se = W.length() * 1e-3 * v.panSpeed;
      $.addScaledVector(K, T.deltaX * se), f.position.addScaledVector(K, T.deltaX * se), v.update();
    }
  }, { passive: false });
  const q = new Sn(new M(-1, 0, 0), 0), O = new Sn(new M(0, -1, 0), 0), J = new Sn(new M(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function we() {
    const T = window.__hekatanClip, $ = [];
    T.enableX && (q.normal.set(T.invertX ? 1 : -1, 0, 0), q.constant = T.invertX ? -T.posX : T.posX, $.push(q)), T.enableY && (O.normal.set(0, T.invertY ? 1 : -1, 0), O.constant = T.invertY ? -T.posY : T.posY, $.push(O)), T.enableZ && (J.normal.set(0, 0, T.invertZ ? 1 : -1), J.constant = T.invertZ ? -T.posZ : T.posZ, $.push(J)), z.clippingPlanes = $, x.traverse((K) => {
      const ce = K;
      if (ce.material) {
        const se = Array.isArray(ce.material) ? ce.material : [ce.material];
        for (const ke of se) ke.clippingPlanes = $, ke.needsUpdate = true;
      }
    });
    const W = window.__hekatanPanes ?? [];
    for (const K of W) try {
      K && typeof K.refresh == "function" && K.refresh();
    } catch {
    }
    z.render(x, C);
  }
  we(), window.__hekatanClipApply = we;
  const k = zo(s), j = X.derive(() => k.displayScale.val === 0 ? 1 : k.displayScale.val > 0 ? k.displayScale.val : -1 / k.displayScale.val), xe = fs(e, k), be = () => {
    const T = [];
    return k.gridXY.rawVal && T.push("xy"), k.gridXZ.rawVal && T.push("xz"), k.gridYZ.rawVal && T.push("yz"), T;
  }, N = () => {
    const T = k.gridStep.rawVal, $ = Math.max(T, k.gridMajor.rawVal);
    return { planes: be(), majorStep: $, minorStep: T };
  };
  let H = kn(k.gridSize.rawVal, N());
  H.visible = k.gridVisible.rawVal, window.__hekatanSnap2D = k.cursorSnap.rawVal;
  const U = () => {
    const T = Math.max(0, Math.min(1, k.gridOpacity.rawVal));
    H.traverse(($) => {
      const W = $.material;
      if (!W || !("opacity" in W)) return;
      const K = $.name ?? "";
      let ce = 0.35;
      K.includes("border") ? ce = 1 : K.includes("major") && (ce = 0.75), W.opacity = T * ce;
    });
  };
  U(), g.appendChild(Co(k, e, r)), g.setAttribute("id", "viewer"), g.appendChild(z.domElement), z.setPixelRatio(window.devicePixelRatio);
  const E = Lt();
  z.setClearColor(E.background, 1);
  const L = k.gridSize.rawVal, V = L * 0.5 + L * 0.5 / Math.tan(45 * 0.5);
  f.position.set(0, 0, V), f.up.set(0, 1, 0), v.target.set(0, 0, 0), v.minDistance = 0.1, v.maxDistance = 1e4, g.__settings = k, v.zoomSpeed = 1, v._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, v.update();
  let A = Jn(k.gridSize.rawVal, k.flipAxes.rawVal);
  x.add(H, A), X.derive(() => {
    window.__hekatanGridPlaneXY = k.gridXY.val, window.__hekatanGridPlaneXZ = k.gridXZ.val, window.__hekatanGridPlaneYZ = k.gridYZ.val;
  });
  let Y = true;
  X.derive(() => {
    const T = k.gridVisible.val;
    if (Y) {
      Y = false;
      return;
    }
    H.visible = T, ie();
  });
  let P = true;
  X.derive(() => {
    if (k.gridOpacity.val, P) {
      P = false;
      return;
    }
    U(), ie();
  }), X.derive(() => {
    const T = k.cursorSnap.val;
    window.__hekatanSnap2D = T;
  });
  let B = true;
  X.derive(() => {
    var _a;
    const T = k.gridSize.val, $ = k.flipAxes.val;
    if (k.gridXY.val, k.gridXZ.val, k.gridYZ.val, k.gridStep.val, k.gridMajor.val, B) {
      B = false;
      return;
    }
    x.remove(H), (_a = H.traverse) == null ? void 0 : _a.call(H, (ce) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = ce.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = ce.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), H = kn(T, N()), H.visible = k.gridVisible.rawVal, x.add(H), U(), x.remove(A), A.traverse((ce) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = ce.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = ce.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), A = Jn(T, $), x.add(A);
    const W = T * 0.5 + T * 0.5 / Math.tan(45 * 0.5);
    f.position.distanceTo(v.target), Math.abs(f.position.x) < 0.1 && Math.abs(f.position.y) < 0.1 && f.position.z > 0 ? f.position.set(0, 0, W) : f.position.set(0.5 * T, -W, 0.5 * T), v.target.set(0, 0, 0), v.minDistance = Math.max(0.05, T * 0.01), v.maxDistance = Math.max(50, T * 50), v.update(), ie();
  }), new ResizeObserver((T) => {
    var _a, _b;
    for (const $ of T) {
      const W = (_a = $.target) == null ? void 0 : _a.clientWidth, K = (_b = $.target) == null ? void 0 : _b.clientHeight;
      if (W === 0 || K === 0) continue;
      const se = (Z ? W / 2 : W) / K;
      f.aspect = se, f.updateProjectionMatrix();
      const ke = b.top;
      if (b.left = -ke * se, b.right = ke * se, b.updateProjectionMatrix(), ne && ne.isPerspectiveCamera) ne.aspect = se, ne.updateProjectionMatrix();
      else if (ne && ne.isOrthographicCamera) {
        const he = ne, ze = he.top;
        he.left = -ze * se, he.right = ze * se, he.updateProjectionMatrix();
      }
      z.setSize(W, K), ie();
    }
  }).observe(g), v.addEventListener("change", ie), X.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, k.displayScale.val, k.nodes.val, k.elements.val, (_g = k.edges) == null ? void 0 : _g.val, k.elemColumns.val, k.elemBeams.val, k.nodesIndexes.val, k.elementsIndexes.val, k.orientations.val, k.sections.val, k.secColumns.val, k.secBeams.val, k.secFloor.val, k.supports.val, k.loads.val, k.deformedShape.val, k.nodeResults.val, k.frameResults.val, k.shellResults.val, (_h = k.solidResults) == null ? void 0 : _h.val, setTimeout(ie);
  });
  let Z = false, ne = null, F = null, oe = false;
  function ie() {
    const T = g.clientWidth || 1, $ = g.clientHeight || 1;
    if (!Z || !ne) {
      z.setScissorTest(false), z.setViewport(0, 0, T, $), z.render(x, C);
      return;
    }
    const W = T / 2;
    z.setScissorTest(true), z.setViewport(0, 0, W, $), z.setScissor(0, 0, W, $), z.render(x, C), z.setViewport(W, 0, W, $), z.setScissor(W, 0, W, $), z.render(x, ne), z.setScissorTest(false);
  }
  function ye(T) {
    C = T, v.object = T, v.update(), ie();
  }
  function ue(T, $) {
    Z = T, $ && (ne = $);
    const W = g.clientWidth || 1, K = g.clientHeight || 1, se = (T ? W / 2 : W) / K;
    f.isPerspectiveCamera && (f.aspect = se, f.updateProjectionMatrix());
    const ke = b.top;
    if (b.left = -ke * se, b.right = ke * se, b.updateProjectionMatrix(), T && ne) {
      if (F ? (F.object = ne, F.update()) : (F = new Gn(ne, z.domElement), F.enableDamping = true, F.dampingFactor = 0.1, F.screenSpacePanning = true, F.zoomSpeed = 0.8, F.panSpeed = 1.2, F.rotateSpeed = 0.9, F.touches = { ONE: an.ROTATE, TWO: an.DOLLY_PAN }, F.target.copy(v.target), F.addEventListener("change", ie), F.enabled = false), !oe) {
        const he = (ze) => {
          if (!Z || !F) return;
          const Pe = z.domElement.getBoundingClientRect(), Xe = ze.clientX - Pe.left, qe = Pe.width / 2, Fe = Xe >= qe;
          v.enabled = !Fe, F.enabled = Fe;
        };
        z.domElement.addEventListener("pointerdown", he, true), z.domElement.addEventListener("wheel", he, { capture: true, passive: true }), oe = true;
      }
    } else T || (v.enabled = true, F && (F.enabled = false));
    g.__splitMode = T, window.__hekatanSplitMode = T, window.__hekatanSplitCamera = T ? ne : null, ie();
  }
  if (e) {
    x.add(Po(k, xe, j), Fo(e, k, xe), Eo(k, xe, j), Lo(e, k, xe, j), Ao(e, k, xe, j), To(e, k, xe, j), Xo(e, k, xe, j), Bo(e, k, xe, j), Zo(e, k, xe, j), Ro(e, k, xe, j));
    const T = rs({ scene: x, rendererElm: z.domElement, getActiveCamera: () => C, derivedNodes: xe, derivedDisplayScale: j, mesh: e, settings: k, render: ie });
    x.add(T);
    const $ = ys(e, k), W = qo(e, k, xe, $), K = jn($);
    x.add(W), g.appendChild(K);
    const ce = es(e, k, xe);
    x.add(ce);
    const se = ce.__colorMapValues, ke = jn(se);
    ke.id = "frame-legend", g.appendChild(ke), X.derive(() => {
      var _a;
      const he = k.shellResults.val != "none", ze = (((_a = k.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", Pe = he || ze, Xe = k.frameResults.val.startsWith("contour:");
      K.hidden = !Pe, W.visible = Pe, ke.hidden = !Xe;
    });
  }
  if (r) {
    const T = new So(16777215, 0.5);
    x.add(T);
    const $ = new qn(16777215, 0.5);
    $.position.set(30, 25, -10), $.shadow.mapSize.width = 1024, $.shadow.mapSize.height = 1024, x.add($);
    const W = 10;
    $.shadow.camera.left = -W, $.shadow.camera.right = W, $.shadow.camera.top = W, $.shadow.camera.bottom = -W, $.shadow.camera.far = 1e3;
    const K = new qn(16777215, 0.5);
    K.color.setHSL(11, 43, 96), K.position.set(-10, 0, 30), x.add(K), X.derive(() => {
      (r == null ? void 0 : r.val.length) && (x.remove(...r.oldVal), x.add(...r.rawVal), ie());
    }), X.derive(() => {
      r.rawVal.forEach((ce) => ce.visible = k.solids.val), ie();
    });
  }
  if (p) {
    const T = [], $ = (K) => {
      var _a;
      return ((_a = K == null ? void 0 : K.userData) == null ? void 0 : _a.isCota) ? k.showCotas.val : k.custom3D.val;
    }, W = () => {
      for (const K of T) K.visible = $(K);
      ie();
    };
    X.derive(() => {
      const K = p.val;
      T.length && (x.remove(...T), T.length = 0), K.length && (x.add(...K), T.push(...K), W()), ie();
    }), X.derive(() => {
      k.custom3D.val, W();
    }), X.derive(() => {
      k.showCotas.val, W();
    });
  }
  w && Uo({ drawingObj: w, gridObj: H, scene: x, getActiveCamera: () => C, controls: v, gridSize: L, derivedDisplayScale: j, rendererElm: z.domElement, viewerRender: ie }), un((T, $) => {
    var _a;
    z.setClearColor($.background, 1), x.remove(H), (_a = H.traverse) == null ? void 0 : _a.call(H, (W) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = W.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = W.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), H = kn(k.gridSize.rawVal, { planes: be() }), x.add(H), g.style.setProperty("--awatif-legend-color", $.legendMarker), ie();
  });
  const Ce = { scene: x, perspCamera: f, orthoCamera: b, get camera() {
    return C;
  }, controls: v, renderer: z, rendererElm: z.domElement, render: ie, setActiveCamera: ye, setSplitMode: ue, get splitMode() {
    return Z;
  }, get splitCamera() {
    return ne;
  }, settings: k };
  g.__ctx = Ce;
  const re = document.createElement("div");
  re.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const ge = (T, $, W) => {
    const K = document.createElement("button");
    return K.textContent = T, K.title = $, K.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), K.onmouseenter = () => {
      K.style.background = "rgba(70,70,70,0.9)";
    }, K.onmouseleave = () => {
      K.style.background = "rgba(40,40,40,0.85)";
    }, K.onclick = (ce) => {
      ce.preventDefault(), W();
    }, K;
  }, Te = (T, $) => {
    const W = v.target, K = new M().subVectors(C.position, W), ce = K.length(), se = new M(), ke = new M();
    se.crossVectors(C.up, K).normalize(), ke.copy(C.up).normalize();
    const he = ce * 0.05;
    W.addScaledVector(se, -T * he), W.addScaledVector(ke, $ * he), C.position.addScaledVector(se, -T * he), C.position.addScaledVector(ke, $ * he), v.update(), ie();
  }, ae = (T) => {
    const $ = new M().subVectors(C.position, v.target);
    $.multiplyScalar(T), C.position.copy(v.target).add($), v.update(), ie();
  }, pe = () => {
    const T = document.createElement("div");
    return T.style.cssText = "width:32px;height:32px;", T;
  };
  return re.append(pe()), re.append(ge("\u2191", "Pan arriba", () => Te(0, 1))), re.append(ge("\u2295", "Zoom in", () => ae(0.85))), re.append(ge("\u2190", "Pan izquierda", () => Te(-1, 0))), re.append(ge("\u2302", "Reset vista", () => {
    v.reset(), ie();
  })), re.append(ge("\u2192", "Pan derecha", () => Te(1, 0))), re.append(ge("\u2296", "Zoom out", () => ae(1.18))), re.append(ge("\u2193", "Pan abajo", () => Te(0, -1))), re.append(pe()), getComputedStyle(g).position === "static" && (g.style.position = "relative"), g.appendChild(re), g;
}
function fs(e, s) {
  return X.derive(() => {
    var _a, _b, _c, _d;
    if (!s.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const w = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], p = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!p || w.length === 0) return w;
    const r = s.deformScale.val, g = s.deformScale.val * s.deformScaleZ.val, x = Number.isFinite(r) ? r : 1, f = Number.isFinite(g) ? g : 1;
    return w.map((b, C) => {
      var _a2;
      const z = ((_a2 = p.get(C)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], v = Number.isFinite(z[0]) ? z[0] : 0, q = Number.isFinite(z[1]) ? z[1] : 0, O = Number.isFinite(z[2]) ? z[2] : 0;
      return [b[0] + v * x, b[1] + q * x, b[2] + O * f];
    });
  });
}
const Tn = X.state(null), Fn = X.state(""), us = X.state("kN"), hs = X.state("mm"), ms = X.state("kN/m\xB2"), ws = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, eo = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, xs = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function ys(e, s) {
  const w = X.state([]);
  let p;
  return ((r) => {
    r.bendingXX = "bendingXX", r.bendingYY = "bendingYY", r.bendingXY = "bendingXY", r.membraneXX = "membraneXX", r.membraneYY = "membraneYY", r.membraneXY = "membraneXY", r.tranverseShearX = "tranverseShearX", r.tranverseShearY = "tranverseShearY", r.vonMises = "vonMises", r.pressure = "pressure", r.displacementX = "displacementX", r.displacementY = "displacementY", r.displacementZ = "displacementZ";
  })(p || (p = {})), X.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const r = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), J = (Ce, re) => {
      Ce == null ? void 0 : Ce.forEach((ge, Te) => {
        const ae = e.elements.val[Te];
        if (ae) for (let pe = 0; pe < ae.length; pe++) re.set(ae[pe], [ge[pe] ?? ge[0]]);
      });
    };
    J((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, r), J((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, g), J((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, x), J((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, f), J((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, b), J((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, C), J((_n2 = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n2.tranverseShearX, z), J((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, v), J((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, q), J((_t = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t.pressure, O);
    const we = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, k = (_w = s.solidResults) == null ? void 0 : _w.val, xe = k && k !== "none" ? k : s.shellResults.val, be = we == null ? void 0 : we[xe], N = { bendingXX: [r, 0], bendingYY: [g, 0], bendingXY: [x, 0], membraneXX: [f, 0], membraneYY: [b, 0], membraneXY: [C, 0], tranverseShearX: [z, 0], tranverseShearY: [v, 0], vonMises: [q, 0], pressure: [O, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, H = s.shellResults.val, U = us.val, E = hs.val, L = H === "displacementX" || H === "displacementY" || H === "displacementZ", V = H === "bendingXX" || H === "bendingYY" || H === "bendingXY", A = H === "membraneXX" || H === "membraneYY" || H === "membraneXY", Y = H === "vonMises" || H === "pressure", P = H === "tranverseShearX" || H === "tranverseShearY", B = (_D = s.solidResults) == null ? void 0 : _D.val, te = B === "vonMises" || B === "sigmaXX" || B === "sigmaYY" || B === "sigmaZZ" || B === "tauXY" || B === "tauYZ" || B === "tauXZ", Z = B === "ux" || B === "uy" || B === "uz", ne = ms.val, F = te ? xs[ne] : Z || L ? eo[E] : V || A || Y || P ? 1 / ws[U] : 1, oe = te ? ne : Z || L ? E : V ? `${U}\xB7m/m` : A ? `${U}/m\xB2` : Y ? `${U}/m\xB2` : P ? `${U}/m` : "";
    Fn.val = oe, Tn.val = Array.isArray(be) && be.length === 2 ? [be[0] * F, be[1] * F] : null;
    const ye = B && B !== "none" ? [q, 0] : N[H], ue = [];
    e.nodes.val.forEach((Ce, re) => {
      const ge = ye;
      if (!ge || !ge[0] || typeof ge[0].has != "function") return;
      if (!ge[0].has(re)) {
        ue.push(Number.NaN);
        return;
      }
      const Te = ge[0].get(re), ae = Te ? Te[ge[1]] ?? 0 : 0;
      ue.push(ae * F);
    }), w.val = ue;
  }), w;
}
export {
  Go as a,
  jn as b,
  us as c,
  hs as d,
  ms as e,
  Ms as g
};
