import { X as Te, B as te, Y as Xe, F as ve, G as pe, d as Pe, L as be, e as xe, D as ge, b as fe, t as he, H as xt, c as yt, V as y, y as Ce, z as ue, Z as De, k as ut, a as ye, f as re, h as Ee, _ as Ie, l as bt, j as gt, q as Mt, m as Ne, o as We, p as He, K as Ae, $ as tt, S as nt, a0 as ot, a1 as ke, a2 as St, a3 as Ft, a4 as Ct, a5 as Vt, a6 as Pt, n as st, a7 as at, s as _t, u as zt, v as At, W as kt, w as Yt, a8 as it, I as Ge, A as Tt, x as rt, O as Xt } from "./Text-CU7BY_Ns.js";
import { v as _, P as Et, g as Se, o as Le } from "./theme-2eEBQPmF.js";
import "./styles-Cjdl64P4.js";
function It(e, t, a) {
  const o = document.createElement("div"), n = new Et({ title: "Settings", expanded: true, container: o });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(n), o.setAttribute("id", "settings");
  const l = "hk_settingsPos";
  let p = null;
  try {
    const i = localStorage.getItem(l);
    i && (p = JSON.parse(i));
  } catch {
  }
  o.style.cssText = ["position:fixed", p ? `left:${p.left}px` : "left:8px", p ? `top:${p.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const c = () => {
    const i = o.querySelector(".tp-rotv_b");
    if (!i) {
      setTimeout(c, 200);
      return;
    }
    i.style.cursor = "move", i.style.userSelect = "none";
    let D = false, N = 0, R = 0, j = 0, v = 0;
    i.addEventListener("mousedown", (Q) => {
      D = true, N = Q.clientX, R = Q.clientY;
      const H = o.getBoundingClientRect();
      j = H.left, v = H.top, o.style.left = `${j}px`, o.style.top = `${v}px`;
    }), window.addEventListener("mousemove", (Q) => {
      if (!D) return;
      const H = Q.clientX - N, ee = Q.clientY - R, ne = Math.max(0, Math.min(window.innerWidth - 40, j + H)), S = Math.max(0, Math.min(window.innerHeight - 40, v + ee));
      o.style.left = `${ne}px`, o.style.top = `${S}px`;
    }), window.addEventListener("mouseup", () => {
      if (D) {
        D = false;
        try {
          localStorage.setItem(l, JSON.stringify({ left: parseFloat(o.style.left), top: parseFloat(o.style.top) }));
        } catch {
        }
      }
    });
  };
  if (c(), (t == null ? void 0 : t.nodes) && (n.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 }), n.addBinding(e.nodes, "val", { label: "Nodes" }), n.addBinding(e.elements, "val", { label: "Elements" }), n.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), n.addBinding(e.faces, "val", { label: "  Caras (fill)" }), n.addBinding(e.elemColumns, "val", { label: "  Columnas" }), n.addBinding(e.elemBeams, "val", { label: "  Vigas" }), n.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), n.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), n.addBinding(e.orientations, "val", { label: "Orientations" }), n.addBinding(e.sections, "val", { label: "Sections" }), n.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), n.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), n.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } })), (t == null ? void 0 : t.nodeInputs) || (t == null ? void 0 : t.elementInputs)) {
    const i = n.addFolder({ title: "Analysis Inputs" });
    i.addBinding(e.supports, "val", { label: "Supports" }), i.addBinding(e.loads, "val", { label: "Loads" }), i.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), i.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((t == null ? void 0 : t.deformOutputs) || (t == null ? void 0 : t.analyzeOutputs)) {
    const i = n.addFolder({ title: "Analysis Outputs" });
    i.addBinding(e.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), i.addBinding(e.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), i.addBinding(e.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), i.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), i.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), i.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), i.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  a && n.addBinding(e.solids, "val", { label: "Solids" });
  const h = n.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), w = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), f = () => {
    const i = window.__hekatanClipApply;
    typeof i == "function" && i();
  };
  return h.addBinding(w, "enableX", { label: "Cortar X" }).on("change", f), h.addBinding(w, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", f), h.addBinding(w, "invertX", { label: "  invertir X" }).on("change", f), h.addBinding(w, "enableY", { label: "Cortar Y" }).on("change", f), h.addBinding(w, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", f), h.addBinding(w, "invertY", { label: "  invertir Y" }).on("change", f), h.addBinding(w, "enableZ", { label: "Cortar Z" }).on("change", f), h.addBinding(w, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", f), h.addBinding(w, "invertZ", { label: "  invertir Z" }).on("change", f), o;
}
function Lt(e) {
  return { gridSize: _.state((e == null ? void 0 : e.gridSize) ?? 20), displayScale: _.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: _.state((e == null ? void 0 : e.nodes) ?? true), elements: _.state((e == null ? void 0 : e.elements) ?? true), edges: _.state((e == null ? void 0 : e.edges) ?? true), faces: _.state((e == null ? void 0 : e.faces) ?? true), elemColumns: _.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: _.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: _.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: _.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: _.state((e == null ? void 0 : e.orientations) ?? false), sections: _.state((e == null ? void 0 : e.sections) ?? true), secColumns: _.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: _.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: _.state((e == null ? void 0 : e.secFloor) ?? -1), supports: _.state((e == null ? void 0 : e.supports) ?? true), loads: _.state((e == null ? void 0 : e.loads) ?? false), deformedShape: _.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: _.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: _.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: _.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: _.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: _.state((e == null ? void 0 : e.flipAxes) ?? false), solids: _.state((e == null ? void 0 : e.solids) ?? true), custom3D: _.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: _.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: _.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: _.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function Bt(e, t, a) {
  const o = Se(), n = new Te(new te(), new Xe({ color: o.nodePoint }));
  return Le((l, p) => {
    n.material.color.setHex(p.nodePoint);
  }), n.frustumCulled = false, _.derive(() => {
    e.nodes.val && n.geometry.setAttribute("position", new ve(t.val.flat(), 3));
  }), _.derive(() => {
    a.val;
    const l = 0.02 * e.gridSize.val * 0.5;
    e.nodes.rawVal && (n.material.size = l * a.rawVal);
  }), _.derive(() => {
    n.visible = e.nodes.val;
  }), n;
}
function Rt(e, t, a) {
  const o = Se(), n = new pe(), l = new Pe(new te(), new be({ color: o.elementLine }));
  Le((D, N) => {
    l.material.color.setHex(N.elementLine);
  }), l.frustumCulled = false, l.renderOrder = 2, n.add(l);
  const p = new xe({ vertexColors: true, transparent: true, opacity: o.shellOpacity, side: ge, depthWrite: false, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }), c = new fe(new te(), p);
  c.frustumCulled = false, n.add(c);
  let h = new he(o.shellWall), w = new he(o.shellSlab), f = new he(o.shellTri);
  Le((D, N) => {
    h = new he(N.shellWall), w = new he(N.shellSlab), f = new he(N.shellTri), p.opacity = N.shellOpacity, p.needsUpdate = true;
  });
  function i(D, N) {
    const R = Math.abs(N[0] - D[0]), j = Math.abs(N[1] - D[1]), v = Math.abs(N[2] - D[2]);
    return v > R && v > j || j > R && j > v;
  }
  return _.derive(() => {
    var _a;
    if (t.deformedShape.val, t.elemColumns.val, t.elemBeams.val, !t.elements.val) return;
    const D = t.elemColumns.rawVal, N = t.elemBeams.rawVal, R = a.val, j = ((_a = e.elements) == null ? void 0 : _a.val) || [], v = j.filter((ne) => {
      if (ne.length !== 2) return true;
      const S = R[ne[0]], Y = R[ne[1]];
      if (!S || !Y) return true;
      const b = i(S, Y);
      return !(b && !D || !b && !N);
    }).map((ne) => Zt(ne).map((S) => [...R[S[0]], ...R[S[1]]]).flat()).flat();
    l.geometry.setAttribute("position", new ve(v, 3));
    const Q = [], H = [];
    function ee(ne, S, Y, b) {
      const r = [S[0] - ne[0], S[1] - ne[1], S[2] - ne[2]], m = [b[0] - ne[0], b[1] - ne[1], b[2] - ne[2]], g = r[1] * m[2] - r[2] * m[1], u = r[2] * m[0] - r[0] * m[2], M = r[0] * m[1] - r[1] * m[0], C = Math.sqrt(g * g + u * u + M * M);
      return C < 1e-12 ? false : Math.abs(M / C) < 0.5;
    }
    for (const ne of j) if (ne.length === 3) {
      const [S, Y, b] = ne;
      if (R[S] && R[Y] && R[b]) {
        Q.push(...R[S], ...R[Y], ...R[b]);
        for (let r = 0; r < 3; r++) H.push(f.r, f.g, f.b);
      }
    } else if (ne.length === 4) {
      const [S, Y, b, r] = ne;
      if (R[S] && R[Y] && R[b] && R[r]) {
        const m = ee(R[S], R[Y], R[b], R[r]) ? h : w;
        Q.push(...R[S], ...R[Y], ...R[b]), Q.push(...R[S], ...R[b], ...R[r]);
        for (let g = 0; g < 6; g++) H.push(m.r, m.g, m.b);
      }
    }
    Q.length > 0 ? (c.geometry.dispose(), c.geometry = new te(), c.geometry.setAttribute("position", new ve(Q, 3)), c.geometry.setAttribute("color", new ve(H, 3)), c.geometry.computeVertexNormals(), c.visible = t.faces ? t.faces.rawVal : true) : c.visible = false;
  }), _.derive(() => {
    n.visible = t.elements.val;
  }), _.derive(() => {
    t.edges && (l.visible = t.edges.val);
  }), _.derive(() => {
    if (!t.faces) return;
    const D = t.faces.val;
    c.geometry.attributes.position ? c.visible = D : D || (c.visible = false);
  }), n;
}
function Zt(e) {
  if (e.length === 2) return [e];
  const t = [];
  for (let a = 0; a < e.length; a++) t.push([e[a], e[(a + 1) % e.length]]);
  return t;
}
function lt(e) {
  const t = Se(), a = new xt(e, 20, t.grid, t.grid);
  return a.position.set(0.5 * e, 0.5 * e, 0), a.rotateX(Math.PI / 2), a;
}
function $t(e, t, a, o) {
  const n = new pe(), l = new yt(0.5, 0.5, 0.5), p = new xe({ color: 10166822 });
  return _.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, !t.supports.val) return;
    n.clear();
    const c = 0.05 * t.gridSize.val * 0.6;
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((h, w) => {
      const f = a.val[w];
      if (!f) return;
      const i = new fe(l, p);
      i.position.set(...f);
      const D = c * o.rawVal;
      i.scale.set(D, D, D), n.add(i);
    });
  }), _.derive(() => {
    if (o.val, !t.supports.rawVal) return;
    const h = 0.05 * t.gridSize.val * 0.6 * o.rawVal;
    n.children.forEach((w) => w.scale.set(h, h, h));
  }), _.derive(() => {
    n.visible = t.supports.val;
  }), n;
}
function Dt(e, t, a, o) {
  const n = new pe();
  n.name = "loadsGroup";
  function l(p) {
    if (p.length < 2) return 0.12 * t.gridSize.rawVal;
    const c = [1 / 0, 1 / 0, 1 / 0], h = [-1 / 0, -1 / 0, -1 / 0];
    for (const f of p) for (let i = 0; i < 3; i++) c[i] = Math.min(c[i], f[i]), h[i] = Math.max(h[i], f[i]);
    return 0.08 * Math.max(h[0] - c[0], h[1] - c[1], h[2] - c[2], 0.1);
  }
  return _.derive(() => {
    var _a, _b, _c;
    if (t.deformedShape.val, !t.loads.val) return;
    n.children.forEach((h) => h.dispose()), n.clear();
    const p = a.val, c = l(p);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((h, w) => {
      const f = p[w];
      if (!f) return;
      const i = new y(...h.slice(0, 3));
      if (i.lengthSq() < 1e-30) return;
      i.normalize();
      const D = new Ce(i, new y(...f), 1, 15637248, 0.3, 0.3), N = c * o.rawVal;
      D.scale.set(N, N, N), n.add(D);
    });
  }), _.derive(() => {
    if (o.val, !t.loads.rawVal) return;
    const c = l(a.rawVal) * o.rawVal;
    n.children.forEach((h) => h.scale.set(c, c, c));
  }), _.derive(() => {
    n.visible = t.loads.val;
  }), n;
}
function Nt(e, t, a) {
  const o = new pe();
  return _.derive(() => {
    if (!e.nodesIndexes.val) return;
    o.children.forEach((l) => l.dispose()), o.clear();
    const n = 0.05 * e.gridSize.val * 0.6;
    t.val.forEach((l, p) => {
      const c = new ue(`${p}`);
      c.position.set(...l), c.updateScale(n * a.rawVal), o.add(c);
    });
  }), _.derive(() => {
    if (a.val, !e.nodesIndexes.rawVal) return;
    const n = 0.05 * e.gridSize.val * 0.6;
    o.children.forEach((l) => l.updateScale(n * a.rawVal));
  }), _.derive(() => {
    o.visible = e.nodesIndexes.val;
  }), o;
}
function Wt(e, t, a, o) {
  const n = new pe();
  return _.derive(() => {
    var _a;
    if (t.deformedShape.val, !t.elementsIndexes.val) return;
    n.children.forEach((p) => p.dispose()), n.clear();
    const l = 0.05 * t.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((p, c) => {
      const h = new ue(`${c}`, void 0, "#001219");
      h.position.set(...Ht(p.map((w) => a.rawVal[w]))), h.updateScale(l * o.rawVal), n.add(h);
    });
  }), _.derive(() => {
    if (o.val, !t.elementsIndexes.rawVal) return;
    const l = 0.05 * t.gridSize.val * 0.6;
    n.children.forEach((p) => p.updateScale(l * o.rawVal));
  }), _.derive(() => {
    n.visible = t.elementsIndexes.val;
  }), n;
}
function Ht(e) {
  const t = e.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), a = e.length;
  return [t[0] / a, t[1] / a, t[2] / a];
}
function Gt(e, t) {
  const a = new pe(), o = 0.05 * e * 1, n = Se(), l = new ue("X", "red", "transparent"), p = new ue(t ? "Z" : "Y", "green", "transparent"), c = new ue(t ? "Y" : "Z", "blue", "transparent"), h = new Ce(new y(1, 0, 0), new y(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), w = new Ce(new y(0, 1, 0), new y(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), f = new Ce(new y(0, 0, 1), new y(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return l.position.set(1.3 * o, 0, 0), p.position.set(0, 1.3 * o, 0), c.position.set(0, 0, 1.3 * o), l.updateScale(0.4 * o), p.updateScale(0.4 * o), c.updateScale(0.4 * o), h.scale.set(o, o, o), w.scale.set(o, o, o), f.scale.set(o, o, o), a.add(h, w, f, l, p, c), a;
}
function Je(e, t) {
  const a = new y(...e), n = new y(...t).clone().sub(a), l = n.length(), p = n.dot(new y(1, 0, 0)) / l, c = n.dot(new y(0, 1, 0)) / l, h = n.dot(new y(0, 0, 1)) / l, w = Math.sqrt(p ** 2 + c ** 2);
  let f = new De().fromArray([[p, c, h], [-c / w, p / w, 0], [-p * h / w, -c * h / w, w]].flat());
  return h === 1 && (f = new De().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), h === -1 && (f = new De().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new ut().setFromMatrix3(f);
}
function Ke(e, t) {
  return e == null ? void 0 : e.map((a, o) => (9 * a + t[o]) / 10);
}
function _e(e) {
  const t = e.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), a = e.length;
  return [t[0] / a, t[1] / a, t[2] / a];
}
function Ut(e, t, a) {
  const o = _e([t, a]), n = _e([e, a]), l = _e([e, t]), p = new y(...o).sub(new y(...n)).normalize(), c = new y(...a).sub(new y(...l)).normalize(), h = p.clone().cross(c).normalize(), w = h.clone().cross(p).normalize();
  return new ut().makeBasis(p, w, h);
}
function qt(e, t, a, o) {
  const n = new pe(), l = new te(), p = new be({ vertexColors: true }), c = [0, 0, 0], h = [1, 0, 0], w = [0, 1, 0], f = [0, 0, 1];
  l.setAttribute("position", new ve([...c, ...h, ...c, ...w, ...c, ...f], 3));
  const i = [255, 0, 0], D = [0, 255, 0], N = [0, 0, 255];
  return l.setAttribute("color", new ve([...i, ...i, ...D, ...D, ...N, ...N], 3)), _.derive(() => {
    var _a;
    t.deformedShape.val, t.orientations.val && (n.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((R) => {
      const j = new Pe(l, p), v = a.rawVal[R[0]], Q = a.rawVal[R[1]];
      if (R.length === 2 && (j.position.set(...Ke(v, Q)), j.rotation.setFromRotationMatrix(Je(v, Q))), R.length === 3) {
        const ne = a.rawVal[R[2]];
        j.position.set(..._e([v, Q, ne])), j.rotation.setFromRotationMatrix(Ut(v, Q, ne));
      }
      const ee = 0.05 * t.gridSize.rawVal * 0.75 * o.rawVal;
      j.scale.set(ee, ee, ee), n.add(j);
    }));
  }), _.derive(() => {
    if (o.val, !t.orientations.rawVal) return;
    const j = 0.05 * t.gridSize.val * 0.75 * o.rawVal;
    n.children.forEach((v) => v.scale.set(j, j, j));
  }), _.derive(() => {
    n.visible = t.orientations.val;
  }), n;
}
function Kt(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const t = (e.b * 100).toFixed(0), a = (e.h * 100).toFixed(0);
    return `${t}x${a}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function Qt(e, t, a, o) {
  const n = new pe();
  function l(S, Y) {
    const b = S / 2, r = Y / 2, m = new Float32Array([0, -b, -r, 0, b, -r, 0, b, r, 0, -b, -r, 0, b, r, 0, -b, r]), g = new te();
    g.setAttribute("position", new re(m, 3));
    const u = new Float32Array([0, -b, -r, 0, b, -r, 0, b, r, 0, -b, r, 0, -b, -r]), M = new te();
    return M.setAttribute("position", new re(u, 3)), { fill: g, outline: M };
  }
  function p(S, Y = 24) {
    const b = S / 2, r = new Float32Array(Y * 9);
    for (let M = 0; M < Y; M++) {
      const C = M / Y * Math.PI * 2, I = (M + 1) / Y * Math.PI * 2;
      r[M * 9] = 0, r[M * 9 + 1] = 0, r[M * 9 + 2] = 0, r[M * 9 + 3] = 0, r[M * 9 + 4] = b * Math.cos(C), r[M * 9 + 5] = b * Math.sin(C), r[M * 9 + 6] = 0, r[M * 9 + 7] = b * Math.cos(I), r[M * 9 + 8] = b * Math.sin(I);
    }
    const m = new te();
    m.setAttribute("position", new re(r, 3));
    const g = new Float32Array((Y + 1) * 3);
    for (let M = 0; M <= Y; M++) {
      const C = M / Y * Math.PI * 2;
      g[M * 3] = 0, g[M * 3 + 1] = b * Math.cos(C), g[M * 3 + 2] = b * Math.sin(C);
    }
    const u = new te();
    return u.setAttribute("position", new re(g, 3)), { fill: m, outline: u };
  }
  function c(S, Y, b, r) {
    const m = b ?? Y * 0.08, g = r ?? S * 0.07, u = S / 2, M = Y / 2, C = M - m, I = g / 2, U = [];
    function s(Z, W, O, G) {
      U.push(0, Z, W, 0, O, W, 0, O, G, 0, Z, W, 0, O, G, 0, Z, G);
    }
    s(-u, -M, u, -C), s(-I, -C, I, C), s(-u, C, u, M);
    const x = new te();
    x.setAttribute("position", new re(new Float32Array(U), 3));
    const T = new Float32Array([0, -u, -M, 0, u, -M, 0, u, -C, 0, I, -C, 0, I, C, 0, u, C, 0, u, M, 0, -u, M, 0, -u, C, 0, -I, C, 0, -I, -C, 0, -u, -C, 0, -u, -M]), A = new te();
    return A.setAttribute("position", new re(T, 3)), { fill: x, outline: A };
  }
  function h(S, Y, b) {
    const r = S / 2, m = Y / 2, g = r - b, u = m - b, M = [];
    function C(x, T, A, Z) {
      M.push(0, x, T, 0, A, T, 0, A, Z, 0, x, T, 0, A, Z, 0, x, Z);
    }
    C(-r, -m, r, -u), C(-r, u, r, m), C(-r, -u, -g, u), C(g, -u, r, u);
    const I = new te();
    I.setAttribute("position", new re(new Float32Array(M), 3));
    const U = new Float32Array([0, -r, -m, 0, r, -m, 0, r, -m, 0, r, m, 0, r, m, 0, -r, m, 0, -r, m, 0, -r, -m, 0, -g, -u, 0, g, -u, 0, g, -u, 0, g, u, 0, g, u, 0, -g, u, 0, -g, u, 0, -g, -u]), s = new te();
    return s.setAttribute("position", new re(U, 3)), { fill: I, outline: s };
  }
  function w(S, Y, b) {
    const r = S / 2, m = Y / 2, g = r - b, u = m - b, M = new te(), C = new Float32Array([0, -g, -u, 0, g, -u, 0, g, u, 0, -g, -u, 0, g, u, 0, -g, u]);
    M.setAttribute("position", new re(C, 3));
    const I = [];
    function U(A, Z, W, O) {
      I.push(0, A, Z, 0, W, Z, 0, W, O, 0, A, Z, 0, W, O, 0, A, O);
    }
    U(-r, -m, r, -u), U(-r, u, r, m), U(-r, -u, -g, u), U(g, -u, r, u);
    const s = new te();
    s.setAttribute("position", new re(new Float32Array(I), 3));
    const x = new Float32Array([0, -r, -m, 0, r, -m, 0, r, -m, 0, r, m, 0, r, m, 0, -r, m, 0, -r, m, 0, -r, -m, 0, -g, -u, 0, g, -u, 0, g, -u, 0, g, u, 0, g, u, 0, -g, u, 0, -g, u, 0, -g, -u]), T = new te();
    return T.setAttribute("position", new re(x, 3)), { concFill: M, steelFillGeom: s, outline: T };
  }
  function f(S, Y, b) {
    const r = [], m = [[0, -S / 2, -Y / 2], [0, -S / 2 + b, -Y / 2], [0, -S / 2 + b, Y / 2 - b], [0, S / 2, Y / 2 - b], [0, S / 2, Y / 2], [0, -S / 2, Y / 2]], g = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const I of g) r.push(...m[I]);
    const u = new te();
    u.setAttribute("position", new re(new Float32Array(r), 3));
    const M = [];
    for (let I = 0; I < m.length; I++) {
      const U = (I + 1) % m.length;
      M.push(...m[I], ...m[U]);
    }
    const C = new te();
    return C.setAttribute("position", new re(new Float32Array(M), 3)), { fill: u, outline: C };
  }
  function i(S, Y, b, r) {
    const m = r / 2, g = [], u = [[0, -S - m, -Y / 2], [0, -b - m, -Y / 2], [0, -b - m, Y / 2 - b], [0, -m, Y / 2 - b], [0, -m, Y / 2], [0, -S - m, Y / 2]], M = [[0, m, -Y / 2], [0, m + b, -Y / 2], [0, m + b, Y / 2 - b], [0, S + m, Y / 2 - b], [0, S + m, Y / 2], [0, m, Y / 2]], C = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const x of C) g.push(...u[x]);
    for (const x of C) g.push(...M[x]);
    const I = new te();
    I.setAttribute("position", new re(new Float32Array(g), 3));
    const U = [];
    for (const x of [u, M]) for (let T = 0; T < x.length; T++) {
      const A = (T + 1) % x.length;
      U.push(...x[T], ...x[A]);
    }
    const s = new te();
    return s.setAttribute("position", new re(new Float32Array(U), 3)), { fill: I, outline: s };
  }
  function D(S, Y, b, r) {
    const m = Y / 2, g = S, u = [[0, -g, -m], [0, -g, -m + b], [0, -r, -m + b], [0, -r, m - b], [0, -g, m - b], [0, -g, m], [0, 0, m], [0, 0, -m]], M = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], C = [];
    for (const x of M) C.push(...u[x]);
    const I = new te();
    I.setAttribute("position", new re(new Float32Array(C), 3));
    const U = [];
    for (let x = 0; x < u.length; x++) {
      const T = (x + 1) % u.length;
      U.push(...u[x], ...u[T]);
    }
    const s = new te();
    return s.setAttribute("position", new re(new Float32Array(U), 3)), { fill: I, outline: s };
  }
  function N(S, Y, b, r, m) {
    const g = Y / 2, u = m / 2, M = [], C = [[0, -S, -g], [0, -S, -g + b], [0, -u - r, -g + b], [0, -u - r, g - b], [0, -S, g - b], [0, -S, g], [0, -u, g], [0, -u, -g]], I = C.map((A) => [A[0], -A[1], A[2]]), U = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const A of U) M.push(...C[A]);
    for (const A of U) M.push(...I[A]);
    const s = new te();
    s.setAttribute("position", new re(new Float32Array(M), 3));
    const x = [];
    for (const A of [C, I]) for (let Z = 0; Z < A.length; Z++) {
      const W = (Z + 1) % A.length;
      x.push(...A[Z], ...A[W]);
    }
    const T = new te();
    return T.setAttribute("position", new re(new Float32Array(x), 3)), { fill: s, outline: T };
  }
  function R(S, Y, b, r) {
    const m = S / 2, g = Y / 2, u = r / 2, M = [[0, -u, -g], [0, u, -g], [0, u, g - b], [0, m, g - b], [0, m, g], [0, -m, g], [0, -m, g - b], [0, -u, g - b]], C = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], I = [];
    for (const T of C) I.push(...M[T]);
    const U = new te();
    U.setAttribute("position", new re(new Float32Array(I), 3));
    const s = [];
    for (let T = 0; T < M.length; T++) {
      const A = (T + 1) % M.length;
      s.push(...M[T], ...M[A]);
    }
    const x = new te();
    return x.setAttribute("position", new re(new Float32Array(s), 3)), { fill: U, outline: x };
  }
  function j(S, Y, b = 24) {
    const r = S / 2, m = r - Y, g = [];
    for (let I = 0; I < b; I++) {
      const U = I / b * Math.PI * 2, s = (I + 1) / b * Math.PI * 2, x = Math.cos(U), T = Math.sin(U), A = Math.cos(s), Z = Math.sin(s);
      g.push(0, r * x, r * T, 0, r * A, r * Z, 0, m * A, m * Z), g.push(0, r * x, r * T, 0, m * A, m * Z, 0, m * x, m * T);
    }
    const u = new te();
    u.setAttribute("position", new re(new Float32Array(g), 3));
    const M = [];
    for (let I = 0; I < b; I++) {
      const U = I / b * Math.PI * 2, s = (I + 1) / b * Math.PI * 2;
      M.push(0, r * Math.cos(U), r * Math.sin(U), 0, r * Math.cos(s), r * Math.sin(s)), M.push(0, m * Math.cos(U), m * Math.sin(U), 0, m * Math.cos(s), m * Math.sin(s));
    }
    const C = new te();
    return C.setAttribute("position", new re(new Float32Array(M), 3)), { fill: u, outline: C };
  }
  const v = new xe({ color: 52479, transparent: true, opacity: 0.35, side: ge, depthWrite: false }), Q = new be({ color: 52479 }), H = new xe({ color: 16750848, transparent: true, opacity: 0.4, side: ge, depthWrite: false }), ee = new be({ color: 16750848 });
  function ne(S, Y) {
    const b = Math.abs(Y[0] - S[0]), r = Math.abs(Y[1] - S[1]), m = Math.abs(Y[2] - S[2]);
    return m > b && m > r || r > b && r > m;
  }
  return _.derive(() => {
    var _a, _b;
    t.deformedShape.val, t.secColumns.val, t.secBeams.val, t.secFloor.val;
    const S = t.secColumns.rawVal, Y = t.secBeams.rawVal;
    if (!S && !Y) {
      n.children.forEach((u) => {
        u instanceof ue && u.dispose();
      }), n.clear();
      return;
    }
    n.children.forEach((u) => {
      u instanceof ue && u.dispose();
    }), n.clear();
    const b = (_a = e.elements) == null ? void 0 : _a.val, r = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!b || !r) return;
    const m = r.sectionShapes, g = t.secFloor.rawVal;
    b.forEach((u, M) => {
      if (u.length !== 2) return;
      const C = a.rawVal[u[0]], I = a.rawVal[u[1]];
      if (!C || !I) return;
      const U = ne(C, I);
      if (U && !S || !U && !Y) return;
      if (g >= 0) {
        const Z = Math.min(C[1], I[1]);
        Math.max(C[1], I[1]);
        const W = t.gridSize.rawVal || 3;
        if (Math.floor(Z / W + 0.01) !== g) return;
      }
      const s = m == null ? void 0 : m.get(M);
      if (!s) return;
      const x = [(C[0] + I[0]) / 2, (C[1] + I[1]) / 2, (C[2] + I[2]) / 2], T = Je(C, I);
      if (s.type === "CFT") {
        const Z = w(s.b, s.h, s.tw ?? s.b * 0.05), W = new fe(Z.concFill, v);
        W.position.set(...x), W.rotation.setFromRotationMatrix(T), n.add(W);
        const O = new fe(Z.steelFillGeom, H);
        O.position.set(...x), O.rotation.setFromRotationMatrix(T), n.add(O);
        const G = new ye(Z.outline, ee);
        G.position.set(...x), G.rotation.setFromRotationMatrix(T), n.add(G);
      } else {
        let Z, W, O;
        switch (s.type) {
          case "rect":
            Z = l(s.b, s.h), W = v, O = Q;
            break;
          case "circ":
            Z = p(s.d), W = v, O = Q;
            break;
          case "I":
            Z = c(s.b, s.h, s.tf, s.tw), W = H, O = ee;
            break;
          case "HSS":
            Z = h(s.b, s.h, s.tw ?? s.b * 0.05), W = H, O = ee;
            break;
          case "CFT":
            Z = w(s.b, s.h, s.tw ?? s.b * 0.05), W = H, O = ee;
            break;
          case "L":
            Z = f(s.b ?? s.h, s.h, s.t ?? s.tw ?? 3e-3), W = H, O = ee;
            break;
          case "2L":
            Z = i(s.b ?? s.h, s.h, s.t ?? s.tw ?? 3e-3, s.dis ?? 0.01), W = H, O = ee;
            break;
          case "C":
          case "coldC":
            Z = D(s.b, s.h, s.tf ?? s.t ?? 3e-3, s.tw ?? s.t ?? 3e-3), W = H, O = ee;
            break;
          case "2C":
            Z = N(s.b, s.h, s.tf ?? 5e-3, s.tw ?? 5e-3, s.dis ?? 0.01), W = H, O = ee;
            break;
          case "T":
            Z = R(s.b, s.h, s.tf ?? 0.01, s.tw ?? 6e-3), W = H, O = ee;
            break;
          case "pipe":
            Z = j(s.d, s.tw ?? s.d * 0.05), W = H, O = ee;
            break;
          default:
            return;
        }
        const G = new fe(Z.fill, W);
        G.position.set(...x), G.rotation.setFromRotationMatrix(T), n.add(G);
        const oe = new ye(Z.outline, O);
        oe.position.set(...x), oe.rotation.setFromRotationMatrix(T), n.add(oe);
      }
      const A = Kt(s);
      if (A) {
        const W = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(s.type) ? "#ff9900" : "#00ccff", O = new ue(A, W, "transparent");
        O.position.set(x[0], x[1], x[2]);
        const G = 0.05 * t.gridSize.rawVal * 0.5;
        O.updateScale(G * ((o == null ? void 0 : o.rawVal) ?? 1)), n.add(O);
      }
    });
  }), o && _.derive(() => {
    if (o.val, !t.sections.rawVal) return;
    const S = 0.05 * t.gridSize.val * 0.5;
    n.children.forEach((Y) => {
      Y instanceof ue && Y.updateScale(S * o.rawVal);
    });
  }), _.derive(() => {
    n.visible = t.sections.val;
  }), n;
}
class Ye extends pe {
  constructor(t, a, o, n, l, p, c) {
    super();
    const h = new Ee().moveTo(0, 0).lineTo(0, p[1]).lineTo(o, p[1]).lineTo(o, 0).lineTo(0, 0), w = h.getPoints(), f = new te().setFromPoints(w);
    this.lines = new ye(f, new be({ color: Se().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), c && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const i = new Ie(h), D = new xe({ color: p[1] > 0 ? 24435 : 11411474, side: ge });
    this.mesh = new fe(i, D), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), c && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new ue(`${l[1].toFixed(4)}`), this.normalizedResult = p, this.textPosition = _e([t, a]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(t) {
    this.lines.scale.set(1, t * 2, 1), this.mesh.scale.set(1, t * 2, 1), this.text.updateScale(t * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * t);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class ct extends pe {
  constructor(t, a, o, n, l, p, c) {
    super();
    const h = l[0] * o / (l[0] + l[1]), w = l[0] * l[1] > 0;
    if (this.text = new ue(`${l[0].toFixed(4)}`), this.text2 = new ue(`${(l[1] * -1).toFixed(4)}`), this.normalizedResult = p, this.textPosition = Ke(t, a), this.text2Position = Ke(a, t), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), w) {
      const f = new Ee().moveTo(0, 0).lineTo(0, p[0]).lineTo(h, 0).lineTo(0, 0), i = new Ee().moveTo(h, 0).lineTo(o, -p[1]).lineTo(o, 0).lineTo(h, 0), D = f.getPoints(), N = i.getPoints(), R = new te().setFromPoints(D), j = new te().setFromPoints(N), v = new be({ color: Se().resultOutline });
      this.lines = new ye(R, v), this.lines2 = new ye(j, v), this.lines.position.set(...t), this.lines2.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), c && this.lines.rotateX(Math.PI / 2), c && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const Q = new Ie(f), H = new Ie(i), ee = new xe({ color: p[0] > 0 ? 24435 : 11411474, side: ge }), ne = new xe({ color: -p[1] > 0 ? 24435 : 11411474, side: ge });
      this.mesh = new fe(Q, ee), this.mesh2 = new fe(H, ne), this.mesh.position.set(...t), this.mesh2.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), c && this.mesh.rotateX(Math.PI / 2), c && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const f = new Ee().moveTo(0, 0).lineTo(0, p[0]).lineTo(o, -p[1]).lineTo(o, 0).lineTo(0, 0), i = f.getPoints(), D = new te().setFromPoints(i);
      this.lines = new ye(D, new be({ color: Se().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), c && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const N = new Ie(f), R = new xe({ color: p[0] > 0 ? 24435 : 11411474, side: ge });
      this.mesh = new fe(N, R), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), c && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
    }
  }
  updateScale(t) {
    var _a, _b;
    this.lines.scale.set(1, t * 2, 1), (_a = this.lines2) == null ? void 0 : _a.scale.set(1, t * 2, 1), this.mesh.scale.set(1, t * 2, 1), (_b = this.mesh2) == null ? void 0 : _b.scale.set(1, t * 2, 1), this.text.updateScale(t * 0.6), this.text2.updateScale(t * 0.6), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.translateZ(this.normalizedResult[0] * 2.5 * t), this.text2.translateZ(-this.normalizedResult[1] * 2.5 * t);
  }
  dispose() {
    var _a, _b, _c, _d, _e2, _f;
    this.lines.geometry.dispose(), (_a = this.lines2) == null ? void 0 : _a.geometry.dispose(), this.lines.material.dispose(), (_c = (_b = this.lines2) == null ? void 0 : _b.material) == null ? void 0 : _c.dispose(), this.mesh.geometry.dispose(), (_d = this.mesh2) == null ? void 0 : _d.geometry.dispose(), this.mesh.material.dispose(), (_f = (_e2 = this.mesh2) == null ? void 0 : _e2.material) == null ? void 0 : _f.dispose(), this.text.dispose(), this.text2.dispose();
  }
}
var ht = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(ht || {});
function Jt(e, t, a, o) {
  const n = new pe(), l = { normals: Ye, shearsY: Ye, shearsZ: Ye, torsions: Ye, bendingsY: ct, bendingsZ: ct };
  return _.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, a.val, t.frameResults.val == "none") return;
    n.children.forEach((c) => c.dispose()), n.clear();
    const p = ht[t.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[p]) == null ? void 0 : _b.forEach((c, h) => {
      var _a2, _b2;
      const w = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[h]) ?? [0, 1], f = a.rawVal[w[0]], i = a.rawVal[w[1]], D = new y(...i).distanceTo(new y(...f)), N = Ot((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[p]), R = c == null ? void 0 : c.map((H) => H / (N === 0 ? 1 : N)), j = Je(f, i), v = new l[p](f, i, D, j, c ?? [0, 0], R ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(p)), Q = 0.05 * t.gridSize.rawVal;
      v.updateScale(Q * o.rawVal), n.add(v);
    });
  }), _.derive(() => {
    if (o.val, t.frameResults.rawVal == "none") return;
    const p = 0.05 * t.gridSize.val;
    n.children.forEach((c) => c.updateScale(p * o.rawVal));
  }), _.derive(() => {
    n.visible = t.frameResults.val != "none";
  }), n;
}
function Ot(e) {
  let t = 0;
  return e == null ? void 0 : e.forEach((a) => {
    const o = Math.max(...a ?? [0, 0]);
    o > t && (t = o);
  }), t;
}
class jt extends pe {
  constructor(t, a, o) {
    super();
    const n = a === Oe.reactions;
    o[0] && (this.xText1 = new ue(`${n ? "Fx" : "Dx"}: ` + o[0].toFixed(4))), o[3] && (this.xText2 = new ue(`${n ? "Mx" : "Rx"}: ` + o[3].toFixed(4))), o[1] && (this.yText1 = new ue(`${n ? "Fy" : "Dy"}: ` + o[1].toFixed(4))), o[4] && (this.yText2 = new ue(`${n ? "My" : "Ry"}: ` + o[4].toFixed(4))), o[2] && (this.zText1 = new ue(`${n ? "Fz" : "Dz"}: ` + o[2].toFixed(4))), o[5] && (this.zText2 = new ue(`${n ? "Mz" : "Rz"}: ` + o[5].toFixed(4))), (o[0] || o[3]) && (this.xArrow = new Ce(new y(1, 0, 0), new y(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[1] || o[4]) && (this.yArrow = new Ce(new y(0, 1, 0), new y(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[2] || o[5]) && (this.zArrow = new Ce(new y(0, 0, 1), new y(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...t), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
  }
  updateScale(t) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
    (_a = this.xArrow) == null ? void 0 : _a.scale.set(t, t, t), (_b = this.yArrow) == null ? void 0 : _b.scale.set(t, t, t), (_c = this.zArrow) == null ? void 0 : _c.scale.set(t, t, t), (_d = this.xText1) == null ? void 0 : _d.position.set(1.3 * t, 0, 0), (_e2 = this.xText2) == null ? void 0 : _e2.position.set(1.3 * t, 0, 0.5 * t), (_f = this.yText1) == null ? void 0 : _f.position.set(0, 1.3 * t, 0), (_g = this.yText2) == null ? void 0 : _g.position.set(0, 1.3 * t, 0.5 * t), (_h = this.zText1) == null ? void 0 : _h.position.set(0, 0, 1.3 * t), (_i = this.zText2) == null ? void 0 : _i.position.set(0, 0, 1.3 * t + 0.5 * t), (_j = this.xText1) == null ? void 0 : _j.updateScale(0.4 * t), (_k = this.xText2) == null ? void 0 : _k.updateScale(0.4 * t), (_l = this.yText1) == null ? void 0 : _l.updateScale(0.4 * t), (_m = this.yText2) == null ? void 0 : _m.updateScale(0.4 * t), (_n = this.zText1) == null ? void 0 : _n.updateScale(0.4 * t), (_o = this.zText2) == null ? void 0 : _o.updateScale(0.4 * t);
  }
  dispose() {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i;
    (_a = this.xArrow) == null ? void 0 : _a.dispose(), (_b = this.yArrow) == null ? void 0 : _b.dispose(), (_c = this.zArrow) == null ? void 0 : _c.dispose(), (_d = this.xText1) == null ? void 0 : _d.dispose(), (_e2 = this.xText2) == null ? void 0 : _e2.dispose(), (_f = this.yText1) == null ? void 0 : _f.dispose(), (_g = this.yText2) == null ? void 0 : _g.dispose(), (_h = this.zText1) == null ? void 0 : _h.dispose(), (_i = this.zText2) == null ? void 0 : _i.dispose();
  }
}
var Oe = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(Oe || {});
function en(e, t, a, o) {
  const n = new pe();
  return _.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, t.nodeResults.val == "none") return;
    n.children.forEach((c) => c.dispose()), n.clear();
    const l = Oe[t.nodeResults.rawVal], p = 0.05 * t.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[l]) == null ? void 0 : _b.forEach((c, h) => {
      const w = new jt(a.rawVal[h], l, c ?? [0, 0, 0, 0, 0, 0]);
      w.updateScale(p * o.rawVal), n.add(w);
    });
  }), _.derive(() => {
    if (o.val, t.nodeResults.rawVal == "none") return;
    const l = 0.05 * t.gridSize.val;
    n.children.forEach((p) => p.updateScale(l * o.rawVal));
  }), _.derive(() => {
    n.visible = t.nodeResults.val != "none";
  }), n;
}
function tn({ drawingObj: e, gridObj: t, scene: a, camera: o, controls: n, gridSize: l, derivedDisplayScale: p, rendererElm: c, viewerRender: h }) {
  const w = new bt(), f = new gt(), i = new fe(new Mt(l, l), new xe({ side: ge, transparent: true, opacity: 0, depthWrite: false }));
  i.visible = true, i.frustumCulled = false, a.add(i);
  const D = new Te(new te(), new Xe()), N = new Te(new te(), new Xe({ color: "gray" })), R = new Te(new te(), new Xe({ color: "orange", size: 0.1 }));
  a.add(R);
  const j = (() => {
    const P = document.createElement("canvas");
    P.width = 96, P.height = 32;
    const E = new Ne(P), d = new We({ map: E, transparent: true, depthTest: false }), V = new He(d);
    return V.scale.set(1, 0.33, 1), V.renderOrder = 999, V.visible = false, V.frustumCulled = false, a.add(V), { sprite: V, canvas: P, texture: E };
  })(), v = (P, E, d, V, X, F) => {
    const z = Math.hypot(V - P, X - E, F - d);
    if (z < 0.01) {
      j.sprite.visible = false;
      return;
    }
    const k = j.canvas.getContext("2d");
    k.clearRect(0, 0, 96, 32), k.fillStyle = "rgba(15,23,42,0.92)", k.fillRect(0, 0, 96, 32), k.strokeStyle = "#22d3ee", k.lineWidth = 2, k.strokeRect(1, 1, 94, 30), k.fillStyle = "#22d3ee", k.font = "bold 16px Consolas, monospace", k.textAlign = "center", k.fillText(`${z.toFixed(2)} m`, 48, 22), j.texture.needsUpdate = true, j.sprite.position.set((P + V) / 2, (E + X) / 2, (d + F) / 2), j.sprite.visible = true;
  }, Q = () => {
    j.sprite.visible = false;
  }, H = document.createElement("div");
  H.id = "hk-coord-readout", H.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", H.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(H);
  const ee = new ye(new te().setFromPoints([new y(0, 0, 0), new y(0, 0, 0)]), new Ae({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  ee.frustumCulled = false, ee.visible = false, a.add(ee);
  const ne = new pe();
  ne.frustumCulled = false, ne.visible = false, a.add(ne);
  const S = (P) => {
    const E = new te().setFromPoints([new y(0, 0, 0), new y(0, 0, 0)]), d = new Ae({ color: P, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new ye(E, d);
  }, Y = S(16711680), b = S(65280), r = S(35071);
  ne.add(Y, b, r), D.geometry.setAttribute("position", new ve(e.points.rawVal.flat(), 3)), D.geometry.computeBoundingSphere(), D.frustumCulled = false, N.frustumCulled = false, a.add(N), i.position.set(0.5 * l, 0.5 * l, 0), i.rotateX(Math.PI / 2), i.geometry.rotateX(Math.PI / 2), i.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (P, E, d) => {
    if (e.points.val = [...e.points.rawVal, [P, E, d]], e.polylines) {
      const V = e.polylines.rawVal, X = V.length ? V[V.length - 1] : [];
      e.polylines.val = [...V.slice(0, -1), [...X, e.points.rawVal.length - 1]];
    }
  }, window.__hekatanDrawNewPoly = () => {
    var _a;
    if (!e.polylines) return;
    const P = e.polylines.rawVal;
    ((_a = P[P.length - 1]) == null ? void 0 : _a.length) !== 0 && (e.polylines.val = [...P, []]);
  }, window.__hekatanDrawCircle = (P, E, d, V, X = window.__hekatanArcSegs ?? 12, F = "xy") => {
    var _a;
    const z = Math.max(4, Math.round(X)), k = e.points.rawVal.length, $ = [];
    for (let L = 0; L < z; L++) {
      const q = 2 * Math.PI * L / z, K = V * Math.cos(q), B = V * Math.sin(q);
      let ae;
      F === "xy" ? ae = [P + K, E + B, d] : F === "xz" ? ae = [P + K, E, d + B] : ae = [P, E + K, d + B], $.push(ae);
    }
    if (e.points.val = [...e.points.rawVal, ...$], e.polylines) {
      const L = [...$.map((K, B) => k + B), k], q = e.polylines.rawVal;
      ((_a = q[q.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...q, L, []] : e.polylines.val = [...q.slice(0, -1), L, []];
    }
  }, window.__hekatanDrawArc = (P, E, d, V = window.__hekatanArcSegs ?? 12) => {
    const X = Math.max(4, Math.round(V)), F = new y(...P), z = new y(...E), k = new y(...d), $ = new y().subVectors(z, F), L = new y().subVectors(k, F), q = new y().crossVectors($, L).normalize(), K = new y().addVectors(F, z).multiplyScalar(0.5), B = new y().addVectors(z, k).multiplyScalar(0.5), ae = new y().crossVectors($, q).normalize(), ce = new y().crossVectors(new y().subVectors(k, z), q).normalize(), ie = new y().subVectors(B, K), le = ae.x * ce.y - ae.y * ce.x;
    let J;
    if (Math.abs(le) > 1e-9) {
      const Fe = (ie.x * ce.y - ie.y * ce.x) / le;
      J = new y().addVectors(K, ae.clone().multiplyScalar(Fe));
    } else J = K.clone();
    const de = F.distanceTo(J), Me = new y().subVectors(F, J), ze = new y().subVectors(k, J), ft = Math.acos(Math.max(-1, Math.min(1, Me.dot(ze) / (de * de)))), wt = e.points.rawVal.length, Be = [], vt = q.clone();
    for (let Fe = 0; Fe <= X; Fe++) {
      const Re = Fe / X, et = ft * Re, Ze = new tt().setFromAxisAngle(vt, et), $e = Me.clone().applyQuaternion(Ze).add(J);
      Be.push([$e.x, $e.y, $e.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...Be], e.polylines) {
      const Fe = Be.map((et, Ze) => wt + Ze), Re = e.polylines.rawVal;
      e.polylines.val = [...Re.slice(0, -1), Fe, []];
    }
  }, window.__hekatanDrawSlabChaflan = (P, E, d = 1, V = 6, X = 6) => {
    const F = Math.min(P[0], E[0]), z = Math.max(P[0], E[0]), k = Math.min(P[1], E[1]), $ = Math.max(P[1], E[1]), L = (P[2] + E[2]) / 2, q = z - F, K = $ - k, B = Math.min(d, q / 2 - 0.01, K / 2 - 0.01);
    if (B <= 0) return;
    const ae = e.points.rawVal.length, ce = [], ie = [], le = (J, de) => {
      ce.push([J, de, L]), ie.push(ae + ce.length - 1);
    };
    for (let J = 0; J <= X; J++) le(F + B + (q - 2 * B) * J / X, k);
    for (let J = 1; J <= V; J++) {
      const de = -Math.PI / 2 + Math.PI / 2 * J / V;
      le(z - B + B * Math.cos(de), k + B + B * Math.sin(de));
    }
    for (let J = 1; J <= X; J++) le(z, k + B + (K - 2 * B) * J / X);
    for (let J = 1; J <= V; J++) {
      const de = 0 + Math.PI / 2 * J / V;
      le(z - B + B * Math.cos(de), $ - B + B * Math.sin(de));
    }
    for (let J = 1; J <= X; J++) le(z - B - (q - 2 * B) * J / X, $);
    for (let J = 1; J <= V; J++) {
      const de = Math.PI / 2 + Math.PI / 2 * J / V;
      le(F + B + B * Math.cos(de), $ - B + B * Math.sin(de));
    }
    for (let J = 1; J <= X; J++) le(F, $ - B - (K - 2 * B) * J / X);
    for (let J = 1; J <= V; J++) {
      const de = Math.PI + Math.PI / 2 * J / V;
      le(F + B + B * Math.cos(de), k + B + B * Math.sin(de));
    }
    if (ie.push(ae), e.points.val = [...e.points.rawVal, ...ce], e.polylines) {
      const J = e.polylines.rawVal;
      e.polylines.val = [...J.slice(0, -1), ie, []];
    }
  }, window.__hekatanDrawRect = (P, E) => {
    const d = e.points.rawVal.length, V = P[0], X = P[1], F = P[2], z = E[0], k = E[1], $ = E[2];
    let L;
    if (Math.abs(F - $) < 1e-6 ? L = [[V, X, F], [z, X, F], [z, k, F], [V, k, F]] : Math.abs(X - k) < 1e-6 ? L = [[V, X, F], [z, X, F], [z, X, $], [V, X, $]] : L = [[V, X, F], [V, k, F], [V, k, $], [V, X, $]], e.points.val = [...e.points.rawVal, ...L], e.polylines) {
      const q = [d, d + 1, d + 2, d + 3, d], K = e.polylines.rawVal;
      e.polylines.val = [...K.slice(0, -1), q, []];
    }
  };
  const m = new pe();
  m.visible = false, a.add(m), window.__hekatanShowAxes = (P, E, d = 12, V = 2) => {
    var _a, _b;
    for (; m.children.length; ) {
      const q = m.children.pop();
      (_a = q.geometry) == null ? void 0 : _a.dispose(), (_b = q.material) == null ? void 0 : _b.dispose();
    }
    if (!P.length || !E.length) return;
    const X = Math.min(...E) - V, F = Math.max(...E) + V, z = Math.min(...P) - V, k = Math.max(...P) + V, $ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", L = (q, K, B, ae, ce) => {
      const ie = document.createElement("canvas");
      ie.width = 64, ie.height = 32;
      const le = ie.getContext("2d");
      le.fillStyle = ce, le.font = "bold 22px sans-serif", le.textAlign = "center", le.fillText(q, 32, 26);
      const J = new Ne(ie), de = new We({ map: J, transparent: true }), Me = new He(de);
      return Me.position.set(K, B, ae), Me.scale.set(1.2, 0.6, 1), Me;
    };
    P.forEach((q, K) => {
      const B = K < $.length ? $[K] : `X${K}`, ae = new te().setFromPoints([new y(q, X, 0), new y(q, F, 0), new y(q, X, 0), new y(q, X, d)]), ce = new Ae({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), ie = new Pe(ae, ce);
      ie.computeLineDistances(), m.add(ie), m.add(L(B, q, X - 0.5, 0, "#60a5fa")), m.add(L(B, q, F + 0.5, 0, "#60a5fa"));
    }), E.forEach((q, K) => {
      const B = `${K + 1}`, ae = new te().setFromPoints([new y(z, q, 0), new y(k, q, 0), new y(z, q, 0), new y(z, q, d)]), ce = new Ae({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), ie = new Pe(ae, ce);
      ie.computeLineDistances(), m.add(ie), m.add(L(B, z - 0.5, q, 0, "#fb7185")), m.add(L(B, k + 0.5, q, 0, "#fb7185"));
    }), m.visible = true, h();
  }, window.__hekatanHideAxes = () => {
    m.visible = false, h();
  };
  const g = new pe();
  g.visible = false, a.add(g), window.__hekatanShowRefPlanes = (P = [0, 3, 6, 9, 12], E = 20, d = 10, V = 10) => {
    var _a, _b;
    for (; g.children.length; ) {
      const F = g.children.pop();
      (_a = F.geometry) == null ? void 0 : _a.dispose(), (_b = F.material) == null ? void 0 : _b.dispose();
    }
    const X = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    P.forEach((F, z) => {
      const k = X[z % X.length], $ = E / 2, L = [new y(d - $, V - $, F), new y(d + $, V - $, F), new y(d + $, V + $, F), new y(d - $, V + $, F), new y(d - $, V - $, F)], q = new te().setFromPoints(L), K = new be({ color: k, transparent: true, opacity: 0.55 });
      g.add(new ye(q, K));
      const B = document.createElement("canvas");
      B.width = 128, B.height = 32;
      const ae = B.getContext("2d");
      ae.fillStyle = `#${k.toString(16).padStart(6, "0")}`, ae.font = "bold 18px sans-serif", ae.fillText(`Z = ${F} m`, 4, 22);
      const ce = new Ne(B), ie = new We({ map: ce, transparent: true }), le = new He(ie);
      le.position.set(d - $ - 1.5, V - $ - 1.5, F), le.scale.set(2.5, 0.6, 1), g.add(le);
    }), g.visible = true, h();
  }, window.__hekatanHideRefPlanes = () => {
    g.visible = false, h();
  };
  const u = new pe(), M = new fe(new nt(0.05, 12, 12), new xe({ color: 16724804, transparent: true, opacity: 0.95 })), C = new fe(new nt(0.1, 12, 12), new xe({ color: 16498468, transparent: true, opacity: 0.25, depthWrite: false }));
  u.add(M, C);
  const I = 0.4, U = (P, E, d) => {
    const V = new te().setFromPoints([new y(...P), new y(...E)]);
    return new ye(V, new be({ color: d, transparent: true, opacity: 0.7 }));
  };
  u.add(U([-I, 0, 0], [I, 0, 0], 16711680)), u.add(U([0, -I, 0], [0, I, 0], 65280)), u.add(U([0, 0, -I], [0, 0, I], 35071)), u.visible = false, u.frustumCulled = false, a.add(u), window.__hekatanShowSnap = (P, E, d) => {
    u.position.set(P, E, d), u.visible = true, h();
  }, window.__hekatanHideSnap = () => {
    u.visible = false, h();
  }, c.addEventListener("pointermove", (P) => {
    var _a, _b, _c, _d, _e2, _f;
    f.x = P.clientX / window.innerWidth * 2 - 1, f.y = -(P.clientY / window.innerHeight) * 2 + 1, w.setFromCamera(f, o);
    const E = w.intersectObject(i);
    if (E.length) {
      const d = E[0].point, V = (window.__hekatanSnap2D ?? 0.5) * 1.2, X = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, d.x, d.y, d.z, V);
      if (X) Z(X.type, X.x, X.y, X.z), u.position.set(X.x, X.y, X.z), u.visible = true, d.set(X.x, X.y, X.z);
      else {
        W();
        const $ = window.__hekatanSnap2D ?? 0.5;
        $ > 0 && (d.x = Math.round(d.x / $) * $, d.y = Math.round(d.y / $) * $, d.z = Math.round(d.z / $) * $), u.position.copy(d), u.visible = true;
      }
      H.style.left = P.clientX + "px", H.style.top = P.clientY + "px", H.style.display = "block";
      const F = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], z = F[F.length - 1] ?? [], k = e.points.rawVal ?? [];
      if (z.length > 0 && k[z[z.length - 1]]) {
        const $ = z[z.length - 1], L = k[$], q = Math.hypot(d.x - L[0], d.y - L[1], d.z - L[2]), K = Math.atan2(d.y - L[1], d.x - L[0]) * 180 / Math.PI;
        H.textContent = `X=${d.x.toFixed(2)} Y=${d.y.toFixed(2)} Z=${d.z.toFixed(2)} | \u0394L=${q.toFixed(2)}m ${K.toFixed(0)}\xB0`, ee.geometry.setFromPoints([new y(L[0], L[1], L[2]), new y(d.x, d.y, d.z)]), (_c = ee.computeLineDistances) == null ? void 0 : _c.call(ee), ee.visible = true, v(L[0], L[1], L[2], d.x, d.y, d.z);
        const B = 8;
        Y.geometry.setFromPoints([new y(L[0] - B, L[1], L[2]), new y(L[0] + B, L[1], L[2])]), (_d = Y.computeLineDistances) == null ? void 0 : _d.call(Y), b.geometry.setFromPoints([new y(L[0], L[1] - B, L[2]), new y(L[0], L[1] + B, L[2])]), (_e2 = b.computeLineDistances) == null ? void 0 : _e2.call(b), r.geometry.setFromPoints([new y(L[0], L[1], L[2] - B), new y(L[0], L[1], L[2] + B)]), (_f = r.computeLineDistances) == null ? void 0 : _f.call(r), ne.visible = true;
      } else H.textContent = `X=${d.x.toFixed(2)} Y=${d.y.toFixed(2)} Z=${d.z.toFixed(2)}`, ee.visible = false, ne.visible = false, Q();
      h();
    } else W(), H.style.display = "none", u.visible = false, ee.visible = false, ne.visible = false, Q(), h();
  }), _.derive(() => {
    e.gridTarget && (nn(t, { position: new y(...e.gridTarget.val.position), quaternion: new tt().setFromEuler(new ot(...e.gridTarget.val.rotation)) }, h), i.position.set(...e.gridTarget.val.position), i.quaternion.setFromEuler(new ot(...e.gridTarget.val.rotation)), i.updateMatrixWorld());
  }), _.derive(() => {
    D.geometry.setAttribute("position", new ve(e.points.val.flat(), 3)), D.geometry.computeBoundingSphere();
  }), _.derive(() => {
    const P = 0.05 * l * 0.5 * p.val;
    N.material.size = P, w.params.Points.threshold = 0.4 * P;
  }), _.derive(() => {
    var _a;
    const P = e.points.val ?? [], d = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], V = [];
    for (const F of d) {
      const [z, k, $] = P[F];
      V.push(z, k, $);
    }
    const X = new te();
    X.setAttribute("position", new ve(V, 3)), R.geometry.dispose(), R.geometry = X;
  });
  let s = false, x = 0;
  c.addEventListener("pointerdown", () => {
    s = true;
  }), c.addEventListener("pointerup", () => {
    s = false;
  }), c.addEventListener("pointermove", () => {
    s && x++;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const T = new pe();
  T.visible = false, T.frustumCulled = false, a.add(T);
  const A = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, Z = (P, E, d, V) => {
    var _a, _b, _c, _d;
    for (; T.children.length; ) {
      const k = T.children.pop();
      (_b = (_a = k.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = k.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const X = A[P] ?? 16777215, F = 0.12, z = new te().setFromPoints([new y(E - F, d - F, V), new y(E + F, d - F, V), new y(E + F, d - F, V), new y(E + F, d + F, V), new y(E + F, d + F, V), new y(E - F, d + F, V), new y(E - F, d + F, V), new y(E - F, d - F, V)]);
    T.add(new Pe(z, new be({ color: X, linewidth: 2 }))), T.position.set(0, 0, 0), T.visible = true;
  }, W = () => {
    T.visible = false;
  }, O = (P, E, d, V) => {
    var _a;
    const X = window.__hekatanOsnap, F = e.points.rawVal, z = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let k = null;
    const $ = (L, q, K, B) => {
      const ae = Math.hypot(q - P, K - E, B - d);
      ae > V || (!k || ae < k.d) && (k = { type: L, x: q, y: K, z: B, d: ae });
    };
    (X.node || X.end) && F.forEach((L) => {
      X.node && $("node", L[0], L[1], L[2]);
    });
    for (const L of z) if (!(L.length < 2)) for (let q = 0; q < L.length - 1; q++) {
      const K = F[L[q]], B = F[L[q + 1]];
      if (!(!K || !B) && (X.end && ($("end", K[0], K[1], K[2]), $("end", B[0], B[1], B[2])), X.mid && $("mid", (K[0] + B[0]) / 2, (K[1] + B[1]) / 2, (K[2] + B[2]) / 2), X.nea || X.per)) {
        const ae = B[0] - K[0], ce = B[1] - K[1], ie = B[2] - K[2], le = ae * ae + ce * ce + ie * ie;
        if (le < 1e-12) continue;
        const J = Math.max(0, Math.min(1, ((P - K[0]) * ae + (E - K[1]) * ce + (d - K[2]) * ie) / le)), de = K[0] + J * ae, Me = K[1] + J * ce, ze = K[2] + J * ie;
        X.nea && $("nea", de, Me, ze), X.per && $("per", de, Me, ze);
      }
    }
    return k ? { type: k.type, x: k.x, y: k.y, z: k.z } : null;
  };
  window.__hekatanOsnapCompute = O, window.__hekatanOsnapShow = Z, window.__hekatanOsnapHide = W;
  let G = [];
  const oe = document.createElement("div");
  oe.id = "hk-cad-status", oe.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", oe.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool y hac\xE9 click en el viewer", document.body.appendChild(oe);
  const se = (P) => {
    oe.textContent = P, window.__hekatanCadStatusText = P;
  };
  window.__hekatanCadResetPending = () => {
    G = [], se("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  }, c.addEventListener("click", (P) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l;
    if (x > 5) {
      x = 0;
      return;
    }
    x = 0, f.x = P.clientX / window.innerWidth * 2 - 1, f.y = -(P.clientY / window.innerHeight) * 2 + 1, w.setFromCamera(f, o);
    const E = w.intersectObject(i);
    if (!E.length) return;
    let d = E[0].point;
    (P.ctrlKey || P.metaKey) && (d = new y(Math.round(E[0].point.x), Math.round(E[0].point.y), Math.round(E[0].point.z)));
    const V = (window.__hekatanSnap2D ?? 0.5) * 1.2, X = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, d.x, d.y, d.z, V);
    if (X) d = new y(X.x, X.y, X.z), se(`\u{1F3AF} Snap [${X.type.toUpperCase()}] \u2192 (${d.x.toFixed(2)}, ${d.y.toFixed(2)}, ${d.z.toFixed(2)})`);
    else {
      const z = window.__hekatanSnap2D ?? 0;
      z > 0 && (d = new y(Math.round(d.x / z) * z, Math.round(d.y / z) * z, Math.round(d.z / z) * z));
    }
    const F = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "node";
    if (F === "circle") {
      if (G.push([d.x, d.y, d.z]), G.length === 1) {
        se("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [z, k] = G, $ = Math.hypot(k[0] - z[0], k[1] - z[1], k[2] - z[2]);
      Math.abs(k[0] - z[0]);
      const L = Math.abs(k[1] - z[1]), K = Math.abs(k[2] - z[2]) < 1e-3 ? "xy" : L < 1e-3 ? "xz" : "yz", B = window.__hekatanArcSegs ?? 12;
      (_e2 = window.__hekatanDrawCircle) == null ? void 0 : _e2.call(window, z[0], z[1], z[2], $, B, K), se(`\u2713 C\xEDrculo dibujado en ${K.toUpperCase()} \u2014 r=${$.toFixed(2)}m, ${B} segmentos`), G = [];
      try {
        (_f = window.__hekatanRebuild) == null ? void 0 : _f.call(window);
      } catch {
      }
      return;
    }
    if (F === "arc") {
      if (G.push([d.x, d.y, d.z]), G.length === 1) {
        se("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (G.length === 2) {
        se("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [z, k, $] = G, L = window.__hekatanArcSegs ?? 12;
      (_g = window.__hekatanDrawArc) == null ? void 0 : _g.call(window, z, k, $, L), se(`\u2713 Arco dibujado \u2014 ${L} segmentos`), G = [];
      try {
        (_h = window.__hekatanRebuild) == null ? void 0 : _h.call(window);
      } catch {
      }
      return;
    }
    if (F === "rect") {
      if (G.push([d.x, d.y, d.z]), G.length === 1) {
        se("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [z, k] = G;
      (_i = window.__hekatanDrawRect) == null ? void 0 : _i.call(window, z, k), se(`\u2713 Rect\xE1ngulo dibujado \u2014 (${z[0].toFixed(1)},${z[1].toFixed(1)}) \u2192 (${k[0].toFixed(1)},${k[1].toFixed(1)})`), G = [];
      try {
        (_j = window.__hekatanRebuild) == null ? void 0 : _j.call(window);
      } catch {
      }
      return;
    }
    if (F === "chaflan") {
      if (G.push([d.x, d.y, d.z]), G.length === 1) {
        se("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [z, k] = G, $ = window.__hekatanChaflanR ?? 1, L = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_k = window.__hekatanDrawSlabChaflan) == null ? void 0 : _k.call(window, z, k, $, L, 6);
      const q = Math.abs(k[0] - z[0]).toFixed(1), K = Math.abs(k[1] - z[1]).toFixed(1);
      se(`\u2713 Losa con chaflanes dibujada \u2014 ${q}\xD7${K}m, r=${$}m, ${L} seg/chafl\xE1n`), G = [];
      try {
        (_l = window.__hekatanRebuild) == null ? void 0 : _l.call(window);
      } catch {
      }
      return;
    }
    e.points.val = [...e.points.rawVal, d.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), F === "node" ? se(`\u25CF Nodo creado en (${d.x.toFixed(2)}, ${d.y.toFixed(2)}, ${d.z.toFixed(2)})`) : F === "line" && se("\uFF0F L\xEDnea \u2014 punto agregado. Continu\xE1 clickeando para extender, right-click para terminar.");
  }), c.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), c.addEventListener("pointermove", (P) => {
    f.x = P.clientX / window.innerWidth * 2 - 1, f.y = -(P.clientY / window.innerHeight) * 2 + 1, w.setFromCamera(f, o);
    const E = w.intersectObject(i);
    if (N.geometry.deleteAttribute("position"), E.length) {
      let d = E[0].point;
      (P.ctrlKey || P.metaKey) && (d = new y(Math.round(E[0].point.x), Math.round(E[0].point.y), Math.round(E[0].point.z))), N.geometry.setAttribute("position", new ve(d.toArray(), 3));
    }
    h();
  }), c.addEventListener("pointermove", (P) => {
    var _a;
    f.x = P.clientX / window.innerWidth * 2 - 1, f.y = -(P.clientY / window.innerHeight) * 2 + 1, w.setFromCamera(f, o);
    let E = false;
    const d = w.intersectObject(D), V = w.intersectObject(i);
    if (d.length && V.length) {
      const X = new y(...e.points.rawVal[d[0].index]), F = new y(...V[0].point), z = X.sub(F), k = (_a = V[0].face) == null ? void 0 : _a.normal;
      k.transformDirection(i.matrixWorld), Math.abs(z.dot(k)) < 1e-4 && (E = true);
    }
    N.visible = !E;
  });
  let me = false, we;
  c.addEventListener("pointermove", (P) => {
    var _a;
    if (!x) return;
    f.x = P.clientX / window.innerWidth * 2 - 1, f.y = -(P.clientY / window.innerHeight) * 2 + 1, w.setFromCamera(f, o);
    let E = false;
    const d = w.intersectObject(D), V = w.intersectObject(i);
    if (d.length && V.length) {
      const F = new y(...e.points.rawVal[d[0].index]), z = new y(...V[0].point), k = F.sub(z), $ = (_a = V[0].face) == null ? void 0 : _a.normal;
      $.transformDirection(i.matrixWorld), Math.abs(k.dot($)) < 1e-4 && (E = true);
    }
    if (E && x < 5 && (me = true, n.enabled = false, we = d[0].index), !me || x % 2 !== 0) return;
    const X = [...e.points.rawVal];
    if (we !== void 0) {
      let F = V[0].point;
      (P.ctrlKey || P.metaKey) && (F = new y(Math.round(F.x), Math.round(F.y), Math.round(F.z))), X[we] = F.toArray();
    }
    e.points.val = X;
  }), c.addEventListener("pointerup", () => {
    n.enabled = true, me = false;
  }), c.addEventListener("contextmenu", (P) => {
    var _a;
    f.x = P.clientX / window.innerWidth * 2 - 1, f.y = -(P.clientY / window.innerHeight) * 2 + 1, w.setFromCamera(f, o);
    let E = false;
    const d = w.intersectObject(D), V = w.intersectObject(i);
    if (d.length && V.length) {
      const z = new y(...e.points.rawVal[d[0].index]), k = new y(...V[0].point), $ = z.sub(k), L = (_a = V[0].face) == null ? void 0 : _a.normal;
      L.transformDirection(i.matrixWorld), Math.abs($.dot(L)) < 1e-4 && (E = true);
    }
    if (!E) return;
    const X = [...e.points.rawVal];
    if (X.splice(d[0].index, 1), e.points.val = X, !e.polylines) return;
    const F = e.polylines.rawVal.map((z) => z.filter((k) => k !== d[0].index)).map((z) => z.map((k) => k > d[0].index ? k - 1 : k)).filter((z) => z.length);
    F.push([]), e.polylines.val = F;
  });
}
function nn(e, t, a) {
  const l = Math.round(14.999999999999998), p = { position: e.position.clone(), quaternion: e.quaternion.clone() }, c = setInterval(w, 1e3 / 30);
  let h = 0;
  function w() {
    h++;
    const f = h / l;
    e.position.lerpVectors(p.position, t.position, f), e.quaternion.slerpQuaternions(p.quaternion, t.quaternion, f), a && a(), h == l && clearInterval(c);
  }
}
class mt {
  constructor(t, a = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(t, a);
  }
  set(t) {
    return t.isLut === true && this.copy(t), this;
  }
  setMin(t) {
    return this.minV = t, this;
  }
  setMax(t) {
    return this.maxV = t, this;
  }
  setColorMap(t, a = 32) {
    this.map = Ue[t] || Ue.rainbow, this.n = a;
    const o = 1 / this.n, n = new he(), l = new he();
    this.lut.length = 0, this.lut.push(new he(this.map[0][1]));
    for (let p = 1; p < a; p++) {
      const c = p * o;
      for (let h = 0; h < this.map.length - 1; h++) if (c > this.map[h][0] && c <= this.map[h + 1][0]) {
        const w = this.map[h][0], f = this.map[h + 1][0];
        n.setHex(this.map[h][1], ke), l.setHex(this.map[h + 1][1], ke);
        const i = new he().lerpColors(n, l, (c - w) / (f - w));
        this.lut.push(i);
      }
    }
    return this.lut.push(new he(this.map[this.map.length - 1][1])), this;
  }
  copy(t) {
    return this.lut = t.lut, this.map = t.map, this.n = t.n, this.minV = t.minV, this.maxV = t.maxV, this;
  }
  getColor(t) {
    t = St.clamp(t, this.minV, this.maxV), t = (t - this.minV) / (this.maxV - this.minV);
    const a = Math.round(t * this.n);
    return this.lut[a];
  }
  addColorMap(t, a) {
    return Ue[t] = a, this;
  }
  createCanvas() {
    const t = document.createElement("canvas");
    return t.width = 1, t.height = this.n, this.updateCanvas(t), t;
  }
  updateCanvas(t) {
    const a = t.getContext("2d", { alpha: false }), o = a.getImageData(0, 0, 1, this.n), n = o.data;
    let l = 0;
    const p = 1 / this.n, c = new he(), h = new he(), w = new he();
    for (let f = 1; f >= 0; f -= p) for (let i = this.map.length - 1; i >= 0; i--) if (f < this.map[i][0] && f >= this.map[i - 1][0]) {
      const D = this.map[i - 1][0], N = this.map[i][0];
      c.setHex(this.map[i - 1][1], ke), h.setHex(this.map[i][1], ke), w.lerpColors(c, h, (f - D) / (N - D)), n[l * 4] = Math.round(w.r * 255), n[l * 4 + 1] = Math.round(w.g * 255), n[l * 4 + 2] = Math.round(w.b * 255), n[l * 4 + 3] = 255, l += 1;
    }
    return a.putImageData(o, 0, 0), t;
  }
}
const Ue = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, Ve = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function on(e) {
  e = Math.max(0, Math.min(1, e));
  for (let a = 0; a < Ve.length - 1; a++) {
    const [o, n, l, p] = Ve[a], [c, h, w, f] = Ve[a + 1];
    if (e <= c) {
      const i = (e - o) / (c - o);
      return [n + (h - n) * i, l + (w - l) * i, p + (f - p) * i];
    }
  }
  const t = Ve[Ve.length - 1];
  return [t[1], t[2], t[3]];
}
function sn() {
  const t = new Uint8Array(1024);
  for (let o = 0; o < 256; o++) {
    const n = o / 255, [l, p, c] = on(n);
    t[o * 4 + 0] = l, t[o * 4 + 1] = p, t[o * 4 + 2] = c, t[o * 4 + 3] = 255;
  }
  const a = new Vt(t, 256, 1, Pt);
  return a.minFilter = st, a.magFilter = st, a.wrapS = at, a.wrapT = at, a.needsUpdate = true, a;
}
function an(e, t, a) {
  new mt();
  const o = sn(), n = new Ft({ uniforms: { cmap: { value: o }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: ge, transparent: false, clipping: true, depthWrite: true, depthTest: true }), l = new fe(new te(), n);
  return l.renderOrder = -1, l.frustumCulled = false, _.derive(() => {
    l.geometry.setAttribute("position", new ve(e.val.flat(), 3));
    const p = [];
    for (const v of t.val) v.length === 3 ? p.push(v[0], v[1], v[2]) : v.length === 4 && (p.push(v[0], v[1], v[2]), p.push(v[0], v[2], v[3]));
    l.geometry.setIndex(new Ct(p, 1));
    const c = a.val.filter((v) => Number.isFinite(v));
    let h, w;
    const f = je.val;
    if (f ? (w = f[0], h = f[1]) : (h = c.length ? Math.max(...c) : 1, w = c.length ? Math.min(...c) : 0, w >= 0 && h > 0 && (w = 0)), h === w) {
      const v = Math.max(Math.abs(h) * 1e-6, 1e-9);
      h += v, w -= v;
    }
    const i = f && f[0] > f[1], D = Math.min(w, h), N = Math.max(w, h), R = N - D, j = new Float32Array(a.val.length);
    for (let v = 0; v < a.val.length; v++) {
      const Q = a.val[v];
      if (!Number.isFinite(Q)) {
        j[v] = -1;
        continue;
      }
      const ee = ((i ? N + D - Q : Q) - D) / R;
      j[v] = Math.max(0, Math.min(1, ee));
    }
    l.geometry.setAttribute("scalar", new re(j, 1));
  }), l;
}
function rn(e, t, a, o) {
  const n = an(a, e.elements, o);
  return _.derive(() => {
    n.visible = t.shellResults.val != "none";
  }), n;
}
const ln = 6, qe = 10, cn = 0.012;
function dn(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function pn(e, t, a, o) {
  if (!a && !o) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && a) {
    const l = a[e];
    if (l && l.has(t)) return l.get(t);
  }
  return null;
}
function un(e, t, a, o) {
  const n = new pe(), l = new mt();
  l.setColorMap("rainbow");
  const p = new he(), c = _.state([]);
  return _.derive(() => {
    var _a, _b, _c;
    t.deformedShape.val;
    const h = a.val, w = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], f = dn(t.frameResults.val);
    if (n.children.forEach((M) => {
      M.geometry && M.geometry.dispose(), M.material && M.material.dispose();
    }), n.clear(), !f || w.length === 0 || h.length === 0) {
      c.val = [];
      return;
    }
    const i = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, D = (_c = e.deformOutputs) == null ? void 0 : _c.val, N = [], R = [];
    for (let M = 0; M < w.length; M++) {
      if (w[M].length !== 2) continue;
      const I = pn(f, M, i, D);
      I && (N.push(I[0], I[1]), R.push({ idx: M, vals: I }));
    }
    if (N.length === 0) {
      c.val = [];
      return;
    }
    const j = Math.min(...N), v = Math.max(...N);
    l.setMin(j), l.setMax(v), c.val = N;
    const Q = [1 / 0, 1 / 0, 1 / 0], H = [-1 / 0, -1 / 0, -1 / 0];
    for (const M of h) for (let C = 0; C < 3; C++) Q[C] = Math.min(Q[C], M[C]), H[C] = Math.max(H[C], M[C]);
    const ne = Math.max(H[0] - Q[0], H[1] - Q[1], H[2] - Q[2], 1) * cn, S = [], Y = [], b = [];
    let r = 0;
    for (const { idx: M, vals: C } of R) {
      const I = w[M], U = h[I[0]], s = h[I[1]];
      if (!U || !s) continue;
      const x = new y(s[0] - U[0], s[1] - U[1], s[2] - U[2]), T = x.length();
      if (T < 1e-10) continue;
      x.normalize();
      const A = Math.abs(x.y) < 0.99 ? new y(0, 1, 0) : new y(1, 0, 0), Z = new y().crossVectors(x, A).normalize(), W = new y().crossVectors(x, Z).normalize(), O = qe + 1, G = ln;
      for (let oe = 0; oe < O; oe++) {
        const se = oe / qe, me = U[0] + x.x * T * se, we = U[1] + x.y * T * se, P = U[2] + x.z * T * se, E = C[0] + (C[1] - C[0]) * se, d = l.getColor(E) ?? new he(0, 0, 0);
        p.copy(d).convertSRGBToLinear();
        for (let V = 0; V < G; V++) {
          const X = V / G * Math.PI * 2, F = Math.cos(X), z = Math.sin(X);
          S.push(me + (Z.x * F + W.x * z) * ne, we + (Z.y * F + W.y * z) * ne, P + (Z.z * F + W.z * z) * ne), Y.push(p.r, p.g, p.b);
        }
      }
      for (let oe = 0; oe < qe; oe++) for (let se = 0; se < G; se++) {
        const me = (se + 1) % G, we = r + oe * G + se, P = r + oe * G + me, E = r + (oe + 1) * G + se, d = r + (oe + 1) * G + me;
        b.push(we, P, d), b.push(we, d, E);
      }
      r += O * G;
    }
    if (S.length === 0) return;
    const m = new te();
    m.setAttribute("position", new ve(S, 3)), m.setAttribute("color", new ve(Y, 3)), m.setIndex(b), m.computeVertexNormals();
    const g = new xe({ vertexColors: true, side: ge }), u = new fe(m, g);
    u.frustumCulled = false, n.add(u);
  }), n.__colorMapValues = c, n;
}
function dt(e, t = 8) {
  const a = document.createElement("div");
  a.id = "legend";
  const o = document.createElement("div");
  o.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", a.appendChild(o), setTimeout(() => {
    _.derive(() => {
      o.textContent = Qe.val ? `[${Qe.val}]` : "";
    });
  });
  const n = Array.from({ length: t + 1 }, (h, w) => w / t).reverse();
  let l, p;
  n.forEach((h, w) => {
    l = document.createElement("div"), l.id = `marker-${w}`, l.className = "marker", l.style.marginTop = w == 0 ? "0px" : `calc(${50 / t}vh - 1px)`, p = document.createElement("p"), p.id = `marker-text-${w}`, l.append(p), a.append(l);
  });
  const c = [];
  return a.querySelectorAll("p").forEach((h) => c.push(h)), setTimeout(() => {
    _.derive(() => {
      n.forEach((h, w) => {
        const f = c[w];
        f && (f.innerText = hn(e.val, h).toString());
      });
    });
  }), a;
}
function hn(e, t) {
  const a = je.val;
  if (a) return (a[0] + t * (a[1] - a[0])).toPrecision(3);
  const o = e.filter((p) => Number.isFinite(p));
  if (o.length === 0) return "0";
  let n = Math.min(...o);
  const l = Math.max(...o);
  return n >= 0 && l > 0 && (n = 0), (n + t * (l - n)).toPrecision(3);
}
function Fn({ mesh: e, settingsObj: t, drawingObj: a, objects3D: o, solids: n }) {
  Xt.DEFAULT_UP = new y(0, 0, 1);
  const l = document.createElement("div"), p = new _t(), c = new zt(45, 1, 0.1, 2 * 1e6), h = new At(-10, 10, 10, -10, -1e3, 2e6);
  let w = c;
  const f = new kt({ antialias: true });
  f.localClippingEnabled = true;
  const i = new Yt(c, f.domElement);
  i.enableDamping = true, i.dampingFactor = 0.1, i.screenSpacePanning = true, i.zoomSpeed = 0.8, i.panSpeed = 1.2, i.rotateSpeed = 0.9, i.keyPanSpeed = 12, i.listenToKeyEvents(window), i.touches = { ONE: it.ROTATE, TWO: it.DOLLY_PAN }, f.domElement.addEventListener("wheel", (s) => {
    if (!s.ctrlKey && Math.abs(s.deltaX) > Math.abs(s.deltaY) * 1.5) {
      s.preventDefault();
      const x = i.target, T = new y().subVectors(c.position, x), A = new y();
      A.crossVectors(c.up, T).normalize();
      const W = T.length() * 1e-3 * i.panSpeed;
      x.addScaledVector(A, s.deltaX * W), c.position.addScaledVector(A, s.deltaX * W), i.update();
    }
  }, { passive: false });
  const D = new Ge(new y(-1, 0, 0), 0), N = new Ge(new y(0, -1, 0), 0), R = new Ge(new y(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function j() {
    const s = window.__hekatanClip, x = [];
    s.enableX && (D.normal.set(s.invertX ? 1 : -1, 0, 0), D.constant = s.invertX ? -s.posX : s.posX, x.push(D)), s.enableY && (N.normal.set(0, s.invertY ? 1 : -1, 0), N.constant = s.invertY ? -s.posY : s.posY, x.push(N)), s.enableZ && (R.normal.set(0, 0, s.invertZ ? 1 : -1), R.constant = s.invertZ ? -s.posZ : s.posZ, x.push(R)), f.clippingPlanes = x, p.traverse((A) => {
      const Z = A;
      if (Z.material) {
        const W = Array.isArray(Z.material) ? Z.material : [Z.material];
        for (const O of W) O.clippingPlanes = x, O.needsUpdate = true;
      }
    });
    const T = window.__hekatanPanes ?? [];
    for (const A of T) try {
      A && typeof A.refresh == "function" && A.refresh();
    } catch {
    }
    f.render(p, w);
  }
  j(), window.__hekatanClipApply = j;
  const v = Lt(t), Q = _.derive(() => v.displayScale.val === 0 ? 1 : v.displayScale.val > 0 ? v.displayScale.val : -1 / v.displayScale.val), H = mn(e, v);
  let ee = lt(v.gridSize.rawVal);
  l.appendChild(It(v, e, n)), l.setAttribute("id", "viewer"), l.appendChild(f.domElement), f.setPixelRatio(window.devicePixelRatio);
  const ne = Se();
  f.setClearColor(ne.background, 1);
  const S = v.gridSize.rawVal, Y = S * 0.5 + S * 0.5 / Math.tan(45 * 0.5);
  c.position.set(0.5 * S, 0.8 * -Y, 0.5 * S), i.target.set(0.5 * S, 0.5 * S, 0), i.minDistance = 0.1, i.maxDistance = 1e4, l.__settings = v, i.zoomSpeed = 1, i._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, i.update(), p.add(ee, Gt(v.gridSize.rawVal, v.flipAxes.rawVal)), new ResizeObserver((s) => {
    var _a, _b;
    for (const x of s) {
      const T = (_a = x.target) == null ? void 0 : _a.clientWidth, A = (_b = x.target) == null ? void 0 : _b.clientHeight;
      if (T === 0 || A === 0) continue;
      c.aspect = T / A, c.updateProjectionMatrix();
      const Z = T / A, W = h.top;
      h.left = -W * Z, h.right = W * Z, h.updateProjectionMatrix(), f.setSize(T, A), r();
    }
  }).observe(l), i.addEventListener("change", r), _.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, v.displayScale.val, v.nodes.val, v.elements.val, (_g = v.edges) == null ? void 0 : _g.val, v.elemColumns.val, v.elemBeams.val, v.nodesIndexes.val, v.elementsIndexes.val, v.orientations.val, v.sections.val, v.secColumns.val, v.secBeams.val, v.secFloor.val, v.supports.val, v.loads.val, v.deformedShape.val, v.nodeResults.val, v.frameResults.val, v.shellResults.val, (_h = v.solidResults) == null ? void 0 : _h.val, setTimeout(r);
  });
  function r() {
    f.render(p, w);
  }
  function m(s) {
    w = s, i.object = s, i.update(), r();
  }
  if (e) {
    p.add(Bt(v, H, Q), Rt(e, v, H), Nt(v, H, Q), Wt(e, v, H, Q), $t(e, v, H, Q), Dt(e, v, H, Q), qt(e, v, H, Q), Qt(e, v, H, Q), en(e, v, H, Q), Jt(e, v, H, Q));
    const s = bn(e, v), x = rn(e, v, H, s), T = dt(s);
    p.add(x), l.appendChild(T);
    const A = un(e, v, H);
    p.add(A);
    const Z = A.__colorMapValues, W = dt(Z);
    W.id = "frame-legend", l.appendChild(W), _.derive(() => {
      var _a;
      const O = v.shellResults.val != "none", G = (((_a = v.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", oe = O || G, se = v.frameResults.val.startsWith("contour:");
      T.hidden = !oe, x.visible = oe, W.hidden = !se;
    });
  }
  if (n) {
    const s = new Tt(16777215, 0.5);
    p.add(s);
    const x = new rt(16777215, 0.5);
    x.position.set(30, 25, -10), x.shadow.mapSize.width = 1024, x.shadow.mapSize.height = 1024, p.add(x);
    const T = 10;
    x.shadow.camera.left = -T, x.shadow.camera.right = T, x.shadow.camera.top = T, x.shadow.camera.bottom = -T, x.shadow.camera.far = 1e3;
    const A = new rt(16777215, 0.5);
    A.color.setHSL(11, 43, 96), A.position.set(-10, 0, 30), p.add(A), _.derive(() => {
      (n == null ? void 0 : n.val.length) && (p.remove(...n.oldVal), p.add(...n.rawVal), r());
    }), _.derive(() => {
      n.rawVal.forEach((Z) => Z.visible = v.solids.val), r();
    });
  }
  if (o) {
    const s = [], x = (A) => {
      var _a;
      return ((_a = A == null ? void 0 : A.userData) == null ? void 0 : _a.isCota) ? v.showCotas.val : v.custom3D.val;
    }, T = () => {
      for (const A of s) A.visible = x(A);
      r();
    };
    _.derive(() => {
      const A = o.val;
      s.length && (p.remove(...s), s.length = 0), A.length && (p.add(...A), s.push(...A), T()), r();
    }), _.derive(() => {
      v.custom3D.val, T();
    }), _.derive(() => {
      v.showCotas.val, T();
    });
  }
  a && tn({ drawingObj: a, gridObj: ee, scene: p, camera: c, controls: i, gridSize: S, derivedDisplayScale: Q, rendererElm: f.domElement, viewerRender: r }), Le((s, x) => {
    f.setClearColor(x.background, 1), p.remove(ee), ee.geometry.dispose(), ee.material.dispose(), ee = lt(v.gridSize.rawVal), p.add(ee), l.style.setProperty("--awatif-legend-color", x.legendMarker), r();
  });
  const g = { scene: p, perspCamera: c, orthoCamera: h, get camera() {
    return w;
  }, controls: i, renderer: f, rendererElm: f.domElement, render: r, setActiveCamera: m, settings: v };
  l.__ctx = g;
  const u = document.createElement("div");
  u.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const M = (s, x, T) => {
    const A = document.createElement("button");
    return A.textContent = s, A.title = x, A.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), A.onmouseenter = () => {
      A.style.background = "rgba(70,70,70,0.9)";
    }, A.onmouseleave = () => {
      A.style.background = "rgba(40,40,40,0.85)";
    }, A.onclick = (Z) => {
      Z.preventDefault(), T();
    }, A;
  }, C = (s, x) => {
    const T = i.target, A = new y().subVectors(w.position, T), Z = A.length(), W = new y(), O = new y();
    W.crossVectors(w.up, A).normalize(), O.copy(w.up).normalize();
    const G = Z * 0.05;
    T.addScaledVector(W, -s * G), T.addScaledVector(O, x * G), w.position.addScaledVector(W, -s * G), w.position.addScaledVector(O, x * G), i.update(), r();
  }, I = (s) => {
    const x = new y().subVectors(w.position, i.target);
    x.multiplyScalar(s), w.position.copy(i.target).add(x), i.update(), r();
  }, U = () => {
    const s = document.createElement("div");
    return s.style.cssText = "width:32px;height:32px;", s;
  };
  return u.append(U()), u.append(M("\u2191", "Pan arriba", () => C(0, 1))), u.append(M("\u2295", "Zoom in", () => I(0.85))), u.append(M("\u2190", "Pan izquierda", () => C(-1, 0))), u.append(M("\u2302", "Reset vista", () => {
    i.reset(), r();
  })), u.append(M("\u2192", "Pan derecha", () => C(1, 0))), u.append(M("\u2296", "Zoom out", () => I(1.18))), u.append(M("\u2193", "Pan abajo", () => C(0, -1))), u.append(U()), getComputedStyle(l).position === "static" && (l.style.position = "relative"), l.appendChild(u), l;
}
function mn(e, t) {
  return _.derive(() => {
    var _a, _b, _c, _d;
    if (!t.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const a = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], o = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!o || a.length === 0) return a;
    const n = t.deformScale.val, l = t.deformScale.val * t.deformScaleZ.val, p = Number.isFinite(n) ? n : 1, c = Number.isFinite(l) ? l : 1;
    return a.map((h, w) => {
      var _a2;
      const f = ((_a2 = o.get(w)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], i = Number.isFinite(f[0]) ? f[0] : 0, D = Number.isFinite(f[1]) ? f[1] : 0, N = Number.isFinite(f[2]) ? f[2] : 0;
      return [h[0] + i * p, h[1] + D * p, h[2] + N * c];
    });
  });
}
const je = _.state(null), Qe = _.state(""), fn = _.state("kN"), wn = _.state("mm"), vn = _.state("kN/m\xB2"), xn = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, pt = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, yn = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function bn(e, t) {
  const a = _.state([]);
  let o;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.membraneXX = "membraneXX", n.membraneYY = "membraneYY", n.membraneXY = "membraneXY", n.tranverseShearX = "tranverseShearX", n.tranverseShearY = "tranverseShearY", n.vonMises = "vonMises", n.pressure = "pressure", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(o || (o = {})), _.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const n = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), R = (O, G) => {
      O == null ? void 0 : O.forEach((oe, se) => {
        const me = e.elements.val[se];
        if (me) for (let we = 0; we < me.length; we++) G.set(me[we], [oe[we] ?? oe[0]]);
      });
    };
    R((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), R((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, l), R((_f = (_e2 = e.analyzeOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.bendingXY, p), R((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, c), R((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, h), R((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, w), R((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, f), R((_p = (_o = e.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, i), R((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, D), R((_t2 = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t2.pressure, N);
    const j = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, v = (_w = t.solidResults) == null ? void 0 : _w.val, H = v && v !== "none" ? v : t.shellResults.val, ee = j == null ? void 0 : j[H], ne = { bendingXX: [n, 0], bendingYY: [l, 0], bendingXY: [p, 0], membraneXX: [c, 0], membraneYY: [h, 0], membraneXY: [w, 0], tranverseShearX: [f, 0], tranverseShearY: [i, 0], vonMises: [D, 0], pressure: [N, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, S = t.shellResults.val, Y = fn.val, b = wn.val, r = S === "displacementX" || S === "displacementY" || S === "displacementZ", m = S === "bendingXX" || S === "bendingYY" || S === "bendingXY", g = S === "membraneXX" || S === "membraneYY" || S === "membraneXY", u = S === "vonMises" || S === "pressure", M = S === "tranverseShearX" || S === "tranverseShearY", C = (_D = t.solidResults) == null ? void 0 : _D.val, I = C === "vonMises" || C === "sigmaXX" || C === "sigmaYY" || C === "sigmaZZ" || C === "tauXY" || C === "tauYZ" || C === "tauXZ", U = C === "ux" || C === "uy" || C === "uz", s = vn.val, x = I ? yn[s] : U || r ? pt[b] : m || g || u || M ? 1 / xn[Y] : 1, T = I ? s : U || r ? b : m ? `${Y}\xB7m/m` : g ? `${Y}/m\xB2` : u ? `${Y}/m\xB2` : M ? `${Y}/m` : "";
    Qe.val = T, je.val = Array.isArray(ee) && ee.length === 2 ? [ee[0] * x, ee[1] * x] : null;
    const Z = C && C !== "none" ? [D, 0] : ne[S], W = [];
    e.nodes.val.forEach((O, G) => {
      const oe = Z;
      if (!oe || !oe[0] || typeof oe[0].has != "function") return;
      if (!oe[0].has(G)) {
        W.push(Number.NaN);
        return;
      }
      const se = oe[0].get(G), me = se ? se[oe[1]] ?? 0 : 0;
      W.push(me * x);
    }), a.val = W;
  }), a;
}
export {
  wn as a,
  an as b,
  fn as c,
  dt as d,
  vn as e,
  Fn as g
};
