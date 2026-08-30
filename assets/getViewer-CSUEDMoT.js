import { N as It, a6 as _n, q as Jo, v as D, a7 as Qo, D as vt, M as Ue, B as me, F as ft, a8 as Oo, x as it, a9 as jo, aa as es, h as xo, ab as go, r as en, ac as zn, ad as Cn, a4 as To, _ as Ge, a as lt, L as Xt, w as Eo, b as ts, ae as ns, f as Oe, V as b, $ as jt, af as Wn, H as no, d as St, c as Hn, Y as $o, Z as Vn, G as os, z as gn, A as ss, ag as Fn, t as as, o as is, I as Wt, a2 as yn, E as vo, S as rn, m as qn, ah as xn, g as Mo, i as bo, j as _o, C as So, K as ls, U as rs, W as cs, X as ds, T as Sn, P as Jn, O as ps } from "./theme-Co6w-pfC.js";
import { T as gt, O as ko } from "./Text-2W5davkr.js";
import { P as Io } from "./tweakpane-BXg6ZhiP.js";
import { e as us } from "./styles-BcI84iw5.js";
class Lo {
  constructor(a, u = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(a, u);
  }
  set(a) {
    return a.isLut === true && this.copy(a), this;
  }
  setMin(a) {
    return this.minV = a, this;
  }
  setMax(a) {
    return this.maxV = a, this;
  }
  setColorMap(a, u = 32) {
    this.map = Qn[a] || Qn.rainbow, this.n = u;
    const m = 1 / this.n, c = new It(), w = new It();
    this.lut.length = 0, this.lut.push(new It(this.map[0][1]));
    for (let p = 1; p < u; p++) {
      const x = p * m;
      for (let g = 0; g < this.map.length - 1; g++) if (x > this.map[g][0] && x <= this.map[g + 1][0]) {
        const M = this.map[g][0], z = this.map[g + 1][0];
        c.setHex(this.map[g][1], _n), w.setHex(this.map[g + 1][1], _n);
        const v = new It().lerpColors(c, w, (x - M) / (z - M));
        this.lut.push(v);
      }
    }
    return this.lut.push(new It(this.map[this.map.length - 1][1])), this;
  }
  copy(a) {
    return this.lut = a.lut, this.map = a.map, this.n = a.n, this.minV = a.minV, this.maxV = a.maxV, this;
  }
  getColor(a) {
    a = Jo.clamp(a, this.minV, this.maxV), a = (a - this.minV) / (this.maxV - this.minV);
    const u = Math.round(a * this.n);
    return this.lut[u];
  }
  addColorMap(a, u) {
    return Qn[a] = u, this;
  }
  createCanvas() {
    const a = document.createElement("canvas");
    return a.width = 1, a.height = this.n, this.updateCanvas(a), a;
  }
  updateCanvas(a) {
    const u = a.getContext("2d", { alpha: false }), m = u.getImageData(0, 0, 1, this.n), c = m.data;
    let w = 0;
    const p = 1 / this.n, x = new It(), g = new It(), M = new It();
    for (let z = 1; z >= 0; z -= p) for (let v = this.map.length - 1; v >= 0; v--) if (z < this.map[v][0] && z >= this.map[v - 1][0]) {
      const Y = this.map[v - 1][0], de = this.map[v][0];
      x.setHex(this.map[v - 1][1], _n), g.setHex(this.map[v][1], _n), M.lerpColors(x, g, (z - Y) / (de - Y)), c[w * 4] = Math.round(M.r * 255), c[w * 4 + 1] = Math.round(M.g * 255), c[w * 4 + 2] = Math.round(M.b * 255), c[w * 4 + 3] = 255, w += 1;
    }
    return u.putImageData(m, 0, 0), a;
  }
}
const Qn = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, Bo = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]], fs = { safe: [[0, 224, 13, 107], [0.13, 221, 20, 50], [0.27, 252, 99, 39], [0.4, 254, 161, 47], [0.52, 238, 234, 25], [0.64, 5, 193, 69], [0.78, 7, 178, 244], [0.9, 4, 132, 213], [1, 90, 175, 230]], csi: Bo, jet_r: [[0, 200, 0, 0], [0.15, 255, 80, 0], [0.32, 255, 200, 0], [0.48, 180, 255, 0], [0.6, 0, 230, 90], [0.74, 0, 220, 230], [0.88, 0, 110, 255], [1, 0, 0, 180]], jet: [[0, 0, 0, 180], [0.12, 0, 110, 255], [0.26, 0, 220, 230], [0.4, 0, 230, 90], [0.52, 180, 255, 0], [0.68, 255, 200, 0], [0.85, 255, 80, 0], [1, 200, 0, 0]], viridis: [[0, 68, 1, 84], [0.25, 59, 82, 139], [0.5, 33, 145, 140], [0.75, 94, 201, 98], [1, 253, 231, 37]] }, An = D.state("safe");
function Ro(e) {
  e = Math.max(0, Math.min(1, e));
  const a = fs[An.val] ?? Bo;
  for (let m = 0; m < a.length - 1; m++) {
    const [c, w, p, x] = a[m], [g, M, z, v] = a[m + 1];
    if (e <= g) {
      const Y = (e - c) / (g - c);
      return [w + (M - w) * Y, p + (z - p) * Y, x + (v - x) * Y];
    }
  }
  const u = a[a.length - 1];
  return [u[1], u[2], u[3]];
}
function Po() {
  const a = new Uint8Array(1024);
  for (let m = 0; m < 256; m++) {
    const c = m / 255, [w, p, x] = Ro(c);
    a[m * 4 + 0] = w, a[m * 4 + 1] = p, a[m * 4 + 2] = x, a[m * 4 + 3] = 255;
  }
  const u = new jo(a, 256, 1, es);
  return u.minFilter = xo, u.magFilter = xo, u.wrapS = go, u.wrapT = go, u.needsUpdate = true, u;
}
function hs() {
  const a = [];
  for (let u = 0; u <= 12; u++) {
    const m = 1 - u / 12, [c, w, p] = Ro(m);
    a.push(`rgb(${c | 0},${w | 0},${p | 0}) ${(u / 12 * 100).toFixed(0)}%`);
  }
  return `linear-gradient(${a.join(",")})`;
}
function ms(e, a, u) {
  new Lo();
  const m = Po(), c = new Qo({ uniforms: { cmap: { value: m }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: vt, transparent: false, clipping: true, depthWrite: true, depthTest: true });
  D.derive(() => {
    var _a;
    An.val;
    const p = c.uniforms.cmap.value;
    c.uniforms.cmap.value = Po(), (_a = p == null ? void 0 : p.dispose) == null ? void 0 : _a.call(p);
  });
  const w = new Ue(new me(), c);
  return w.renderOrder = -1, w.frustumCulled = false, w.userData.isShellArea = true, w.name = "__hekatan_shell_colormap", D.derive(() => {
    w.geometry.setAttribute("position", new ft(e.val.flat(), 3));
    const p = [];
    for (const _ of a.val) _.length === 3 ? p.push(_[0], _[1], _[2]) : _.length === 4 && (p.push(_[0], _[1], _[2]), p.push(_[0], _[2], _[3]));
    w.geometry.setIndex(new Oo(p, 1));
    const x = u.val.filter((_) => Number.isFinite(_));
    let g, M;
    const z = so.val;
    if (z ? (M = z[0], g = z[1]) : (g = x.length ? Math.max(...x) : 1, M = x.length ? Math.min(...x) : 0, M >= 0 && g > 0 && (M = 0)), g === M) {
      const _ = Math.max(Math.abs(g) * 1e-6, 1e-9);
      g += _, M -= _;
    }
    const v = z && z[0] > z[1], Y = Math.min(M, g), de = Math.max(M, g), te = de - Y, Q = new Float32Array(u.val.length);
    for (let _ = 0; _ < u.val.length; _++) {
      const O = u.val[_];
      if (!Number.isFinite(O)) {
        Q[_] = -1;
        continue;
      }
      const be = ((v ? de + Y - O : O) - Y) / te;
      Q[_] = Math.max(0, Math.min(1, be));
    }
    w.geometry.setAttribute("scalar", new it(Q, 1));
  }), w;
}
function ws(e, a, u) {
  const m = document.createElement("div"), c = new Io({ title: "Settings", expanded: true, container: m });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(c), m.setAttribute("id", "settings");
  const w = "hk_settingsPos";
  let p = null;
  try {
    const v = localStorage.getItem(w);
    v && (p = JSON.parse(v));
  } catch {
  }
  m.style.cssText = ["position:fixed", p ? `left:${p.left}px` : "left:8px", p ? `top:${p.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const x = () => {
    const v = m.querySelector(".tp-rotv_b");
    if (!v) {
      setTimeout(x, 200);
      return;
    }
    v.style.cursor = "move", v.style.userSelect = "none";
    let Y = false, de = 0, te = 0, Q = 0, _ = 0;
    v.addEventListener("mousedown", (O) => {
      Y = true, de = O.clientX, te = O.clientY;
      const ne = m.getBoundingClientRect();
      Q = ne.left, _ = ne.top, m.style.left = `${Q}px`, m.style.top = `${_}px`;
    }), window.addEventListener("mousemove", (O) => {
      if (!Y) return;
      const ne = O.clientX - de, be = O.clientY - te, fe = Math.max(0, Math.min(window.innerWidth - 40, Q + ne)), B = Math.max(0, Math.min(window.innerHeight - 40, _ + be));
      m.style.left = `${fe}px`, m.style.top = `${B}px`;
    }), window.addEventListener("mouseup", () => {
      if (Y) {
        Y = false;
        try {
          localStorage.setItem(w, JSON.stringify({ left: parseFloat(m.style.left), top: parseFloat(m.style.top) }));
        } catch {
        }
      }
    });
  };
  if (x(), a == null ? void 0 : a.nodes) {
    c.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 0.5 });
    const v = c.addFolder({ title: "\u{1F4D0} Grid", expanded: false });
    v.addBinding(e.gridSize, "val", { label: "Dimensi\xF3n (m)", min: 1, max: 100, step: 1 }), v.addBinding(e.gridStep, "val", { label: "Separaci\xF3n grid (m)", min: 0.05, max: 5, step: 0.05 }), v.addBinding(e.gridMajor, "val", { label: "Separaci\xF3n mayores (m)", min: 0.1, max: 50, step: 0.1 }), v.addBinding(e.cursorSnap, "val", { label: "Paso cursor (m)", min: 0.05, max: 5, step: 0.05 }), v.addBinding(e.gridVisible, "val", { label: "Mostrar" }), v.addBinding(e.gridOpacity, "val", { label: "Opacidad", min: 0, max: 1, step: 0.05 }), v.addBinding(e.gridXY, "val", { label: "Plano XY (planta)" }), v.addBinding(e.gridXZ, "val", { label: "Plano XZ (frontal)" }), v.addBinding(e.gridYZ, "val", { label: "Plano YZ (lateral)" });
    const Y = c.addFolder({ title: "\u{1F441} Ver", expanded: false });
    Y.addBinding(e.nodes, "val", { label: "Nodes" }), Y.addBinding(e.elements, "val", { label: "Elements" }), Y.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), Y.addBinding(e.faces, "val", { label: "  Caras (fill)" }), Y.addBinding(e.elemFrames, "val", { label: "  Frames (todos)" }), Y.addBinding(e.elemColumns, "val", { label: "    Columnas" }), Y.addBinding(e.elemBeams, "val", { label: "    Vigas" }), Y.addBinding(e.elemZapatas, "val", { label: "  Zapatas (shells z\u22640)" }), Y.addBinding(e.elemLosas, "val", { label: "  Losas (shells z>0)" }), Y.addBinding(e.colorByType, "val", { label: "  \u{1F3A8} Color por tipo" }), Y.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), Y.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), Y.addBinding(e.orientations, "val", { label: "Orientations" }), Y.addBinding(e.sections, "val", { label: "Sections" }), Y.addBinding(e.extruded, "val", { label: "Extruido (3D)" }), Y.addBinding(e.sectionLabels, "val", { label: "  Sec. Labels (30x50)" }), Y.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), Y.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), Y.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } });
  }
  if ((a == null ? void 0 : a.nodeInputs) || (a == null ? void 0 : a.elementInputs)) {
    const v = c.addFolder({ title: "\u{1F4CC} Analysis Inputs", expanded: false });
    v.addBinding(e.supports, "val", { label: "Supports" }), v.addBinding(e.loads, "val", { label: "Loads" }), v.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), v.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((a == null ? void 0 : a.deformOutputs) || (a == null ? void 0 : a.analyzeOutputs)) {
    const v = c.addFolder({ title: "\u{1F52C} Analyze", expanded: true });
    window.__hekatanOutputsFolder = v, v.addBinding(e.nodeResults, "val", { options: { none: "none", "U (deformations)": "deformations", "R (reactions)": "reactions" }, label: "Node results" }), v.addBinding(e.frameResults, "val", { options: { none: "none", "Axial Force": "normals", Torsion: "torsions", "Shear 2-2": "shearsY", "Shear 3-3": "shearsZ", "Moment 2-2": "bendingsY", "Moment 3-3": "bendingsZ", "Axial Force (diagram)": "contour:normals", "Shear 2-2 (diagram)": "contour:shearsY", "Shear 3-3 (diagram)": "contour:shearsZ", "Torsion (diagram)": "contour:torsions", "Moment 2-2 (diagram)": "contour:bendingsY", "Moment 3-3 (diagram)": "contour:bendingsZ" }, label: "Frame results" }), v.addBinding(e.shellResults, "val", { options: { none: "none", F11: "membraneXX", F22: "membraneYY", F12: "membraneXY", FMax: "membranePrincipalMax", FMin: "membranePrincipalMin", FVM: "vonMises", V13: "tranverseShearX", V23: "tranverseShearY", VMax: "transverseShearMax", M11: "bendingXX", M22: "bendingYY", M12: "bendingXY", MMax: "bendingPrincipalMax", MMin: "bendingPrincipalMin", "Pressure (suelo)": "pressure", Ux: "displacementX", Uy: "displacementY", Uz: "displacementZ" }, label: "Shell results" }), v.addBinding(An, "val", { options: { "SAFE (cimentaci\xF3n)": "safe", "ETABS / CSI (magenta\u2192azul)": "csi", "Jet_r (rojo\u2192azul)": "jet_r", "Jet (azul\u2192rojo)": "jet", Viridis: "viridis" }, label: "\u{1F3A8} Paleta colores" }), v.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), v.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), v.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), v.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  u && c.addBinding(e.solids, "val", { label: "Solids" });
  const g = c.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), M = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), z = () => {
    const v = window.__hekatanClipApply;
    typeof v == "function" && v();
  };
  return g.addBinding(M, "enableX", { label: "Cortar X" }).on("change", z), g.addBinding(M, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", z), g.addBinding(M, "invertX", { label: "  invertir X" }).on("change", z), g.addBinding(M, "enableY", { label: "Cortar Y" }).on("change", z), g.addBinding(M, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", z), g.addBinding(M, "invertY", { label: "  invertir Y" }).on("change", z), g.addBinding(M, "enableZ", { label: "Cortar Z" }).on("change", z), g.addBinding(M, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", z), g.addBinding(M, "invertZ", { label: "  invertir Z" }).on("change", z), m;
}
function ys(e) {
  return { gridSize: D.state((e == null ? void 0 : e.gridSize) ?? 30), gridVisible: D.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: D.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: D.state((e == null ? void 0 : e.gridStep) ?? 1), gridMajor: D.state((e == null ? void 0 : e.gridMajor) ?? 5), cursorSnap: D.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: D.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: D.state((e == null ? void 0 : e.gridXZ) ?? false), gridYZ: D.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: D.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: D.state((e == null ? void 0 : e.nodes) ?? true), elements: D.state((e == null ? void 0 : e.elements) ?? true), edges: D.state((e == null ? void 0 : e.edges) ?? true), faces: D.state((e == null ? void 0 : e.faces) ?? true), elemColumns: D.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: D.state((e == null ? void 0 : e.elemBeams) ?? true), elemFrames: D.state((e == null ? void 0 : e.elemFrames) ?? true), elemZapatas: D.state((e == null ? void 0 : e.elemZapatas) ?? true), elemLosas: D.state((e == null ? void 0 : e.elemLosas) ?? true), colorByType: D.state((e == null ? void 0 : e.colorByType) ?? false), nodesIndexes: D.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: D.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: D.state((e == null ? void 0 : e.orientations) ?? false), sections: D.state((e == null ? void 0 : e.sections) ?? true), extruded: D.state((e == null ? void 0 : e.extruded) ?? false), sectionLabels: D.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: D.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: D.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: D.state((e == null ? void 0 : e.secFloor) ?? -1), supports: D.state((e == null ? void 0 : e.supports) ?? true), loads: D.state((e == null ? void 0 : e.loads) ?? false), deformedShape: D.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: D.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: D.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: D.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: D.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: D.state((e == null ? void 0 : e.flipAxes) ?? false), solids: D.state((e == null ? void 0 : e.solids) ?? true), custom3D: D.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: D.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: D.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: D.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function xs(e, a, u) {
  const m = en(), c = new zn(new me(), new Cn({ color: m.nodePoint }));
  return To((w, p) => {
    c.material.color.setHex(p.nodePoint);
  }), c.frustumCulled = false, D.derive(() => {
    e.nodes.val && c.geometry.setAttribute("position", new ft(a.val.flat(), 3));
  }), D.derive(() => {
    if (u.val, a.val, !e.nodes.rawVal) return;
    const w = a.rawVal ?? [];
    let p = e.gridSize.val * 0.5;
    if (w.length >= 2) {
      const g = [1 / 0, 1 / 0, 1 / 0], M = [-1 / 0, -1 / 0, -1 / 0];
      for (const z of w) for (let v = 0; v < 3; v++) g[v] = Math.min(g[v], z[v]), M[v] = Math.max(M[v], z[v]);
      p = Math.max(M[0] - g[0], M[1] - g[1], M[2] - g[2], 0.1);
    }
    const x = 0.03 * p;
    c.material.size = x * u.rawVal;
  }), D.derive(() => {
    c.visible = e.nodes.val;
  }), c;
}
function On(e, a) {
  const u = en(), m = new Ge();
  m.name = "hekatan-grid";
  const c = (a == null ? void 0 : a.planes) ?? ["xy"];
  let w = (a == null ? void 0 : a.majorStep) ?? 1, p = (a == null ? void 0 : a.minorStep) ?? 0.1;
  for (w <= 0 && (w = 1), p <= 0 && (p = 0.1); e / p > 500; ) p *= 2;
  for (; e / w > 100; ) w *= 2;
  const x = e / 2;
  w = Math.max(p, Math.round(w / p) * p);
  const M = new It(u.grid), z = new It(u.grid).multiplyScalar(0.45), v = (Q, _, O, ne) => {
    const be = [], fe = Q === "xy" ? (F, $) => [F, $, 0] : Q === "xz" ? (F, $) => [F, 0, $] : (F, $) => [0, F, $], B = Math.floor(x / _);
    for (let F = -B; F <= B; F++) {
      const $ = F * _, E = fe($, -x), A = fe($, x);
      be.push(...E, ...A);
    }
    for (let F = -B; F <= B; F++) {
      const $ = F * _, E = fe(-x, $), A = fe(x, $);
      be.push(...E, ...A);
    }
    const I = new me();
    I.setAttribute("position", new ft(be, 3));
    const X = new lt({ color: O, transparent: true, opacity: ne, depthWrite: false }), V = new Xt(I, X);
    return V.name = `grid-${Q}-${_ === p ? "minor" : "major"}`, V;
  }, Y = (Q, _, O) => {
    const ne = Q === "xy" ? (V, F) => [V, F, 0] : Q === "xz" ? (V, F) => [V, 0, F] : (V, F) => [0, V, F], be = [[-x, -x], [x, -x], [x, x], [-x, x]], fe = [];
    for (const [V, F] of be) fe.push(...ne(V, F));
    const B = new me();
    B.setAttribute("position", new ft(fe, 3));
    const I = new lt({ color: _, transparent: true, opacity: O, depthWrite: false }), X = new Eo(B, I);
    return X.name = `grid-${Q}-border`, X.renderOrder = 1, X;
  }, de = (Q, _, O) => {
    const ne = Q === "xy" ? (I, X) => [I, X, 0] : Q === "xz" ? (I, X) => [I, 0, X] : (I, X) => [0, I, X], be = _ === "u" ? [...ne(-x, 0), ...ne(x, 0)] : [...ne(0, -x), ...ne(0, x)], fe = new me();
    fe.setAttribute("position", new ft(be, 3));
    const B = new Xt(fe, new lt({ color: O, transparent: true, opacity: 0.45, depthWrite: false }));
    return B.name = `grid-${Q}-eje-${_}`, B.renderOrder = 1, B;
  }, te = { xy: [14042459, 5155178], xz: [14042459, 4882390], yz: [5155178, 4882390] };
  for (const Q of c) {
    m.add(v(Q, p, z, 0.12)), m.add(v(Q, w, M, 0.4));
    const [_, O] = te[Q];
    m.add(de(Q, "u", _)), m.add(de(Q, "v", O)), m.add(Y(Q, M, 0.55));
  }
  return m.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: w, minorStep: p, gridSize: e, planes: [...c] }, m;
}
function gs(e, a, u, m) {
  const c = new Ge(), w = new ts(0.5, 0.5, 0.5), p = new ns(0.45, 0.7, 4);
  p.rotateX(Math.PI / 2), p.translate(0, 0, -0.35);
  const x = new Oe({ color: 10166822 }), g = new Oe({ color: 2792847 }), M = new Oe({ color: 3835647 }), z = () => {
    const de = u.rawVal ?? [];
    if (de.length < 2) return a.gridSize.val * 0.5;
    let te = [1 / 0, 1 / 0, 1 / 0], Q = [-1 / 0, -1 / 0, -1 / 0];
    for (const _ of de) for (let O = 0; O < 3; O++) _[O] < te[O] && (te[O] = _[O]), _[O] > Q[O] && (Q[O] = _[O]);
    return Math.max(Q[0] - te[0], Q[1] - te[1], Q[2] - te[2], 0.1);
  }, v = () => 0.08 * z(), Y = () => m.rawVal;
  return D.derive(() => {
    var _a, _b;
    if (a.deformedShape.val, !a.supports.val) return;
    c.clear();
    const de = v();
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((te, Q) => {
      const _ = u.val[Q];
      if (!_) return;
      const O = te ?? [], ne = (O[0] ? 1 : 0) + (O[1] ? 1 : 0) + (O[2] ? 1 : 0), be = (O[3] ? 1 : 0) + (O[4] ? 1 : 0) + (O[5] ? 1 : 0);
      let fe;
      ne >= 3 && be >= 3 ? fe = new Ue(w, x) : ne >= 3 && be === 0 ? fe = new Ue(p, g) : fe = new Ue(p, M), fe.position.set(_[0], _[1], _[2]);
      const B = de * Y();
      fe.scale.set(B, B, B), c.add(fe);
    });
  }), D.derive(() => {
    if (m.val, !a.supports.rawVal) return;
    const te = v() * Y();
    c.children.forEach((Q) => Q.scale.set(te, te, te));
  }), D.derive(() => {
    c.visible = a.supports.val;
  }), c;
}
function vs(e, a, u, m) {
  const c = new Ge();
  c.name = "loadsGroup";
  function w(p) {
    if (p.length < 2) return 0.12 * a.gridSize.rawVal;
    const x = [1 / 0, 1 / 0, 1 / 0], g = [-1 / 0, -1 / 0, -1 / 0];
    for (const z of p) for (let v = 0; v < 3; v++) x[v] = Math.min(x[v], z[v]), g[v] = Math.max(g[v], z[v]);
    return 0.08 * Math.max(g[0] - x[0], g[1] - x[1], g[2] - x[2], 0.1);
  }
  return D.derive(() => {
    var _a, _b, _c;
    if (a.deformedShape.val, !a.loads.val) return;
    c.children.forEach((v) => v.dispose()), c.clear();
    const p = u.val, x = w(p), g = 240, M = [];
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((v, Y) => {
      p[Y] && v.slice(0, 3).some((de) => Math.abs(de) > 1e-15) && M.push(Y);
    });
    let z = M;
    if (M.length > g) {
      const v = M.map((V) => p[V][0]), Y = M.map((V) => p[V][1]), de = Math.min(...v), te = Math.max(...v), Q = Math.min(...Y), _ = Math.max(...Y), O = M.map((V) => p[V][2]), ne = Math.max(1e-6, (Math.max(...O) - Math.min(...O)) / 40), be = (V) => Math.round(V / ne), fe = new Set(O.map(be)), B = Math.max(4, Math.floor(g / Math.max(1, fe.size))), I = Math.max(2, Math.round(Math.sqrt(B))), X = /* @__PURE__ */ new Map();
      for (const V of M) {
        const F = te - de < 1e-9 ? 0 : (p[V][0] - de) / (te - de), $ = _ - Q < 1e-9 ? 0 : (p[V][1] - Q) / (_ - Q), E = Math.min(I - 1, Math.floor(F * I)), A = Math.min(I - 1, Math.floor($ * I)), W = `${E},${A},${be(p[V][2])}`, se = Math.hypot(F * I - (E + 0.5), $ * I - (A + 0.5)), j = X.get(W);
        (!j || se < j.d) && X.set(W, { i: V, d: se });
      }
      z = [...X.values()].map((V) => V.i);
    }
    for (const v of z) {
      const Y = e.nodeInputs.val.loads.get(v), de = p[v];
      if (!de) continue;
      const te = new b(...Y.slice(0, 3));
      if (te.lengthSq() < 1e-30) continue;
      te.normalize();
      const Q = new jt(te, new b(...de), 1, 15637248, 0.3, 0.3), _ = x * m.rawVal;
      Q.scale.set(_, _, _), c.add(Q);
    }
  }), D.derive(() => {
    if (m.val, !a.loads.rawVal) return;
    const x = w(u.rawVal) * m.rawVal;
    c.children.forEach((g) => g.scale.set(x, x, x));
  }), D.derive(() => {
    c.visible = a.loads.val;
  }), c;
}
function Ms(e, a, u) {
  const m = new Ge();
  return D.derive(() => {
    if (!e.nodesIndexes.val) return;
    m.children.forEach((w) => w.dispose()), m.clear();
    const c = 0.05 * e.gridSize.val * 0.6;
    a.val.forEach((w, p) => {
      const x = new gt(`${p}`);
      x.position.set(...w), x.updateScale(c * u.rawVal), m.add(x);
    });
  }), D.derive(() => {
    if (u.val, !e.nodesIndexes.rawVal) return;
    const c = 0.05 * e.gridSize.val * 0.6;
    m.children.forEach((w) => w.updateScale(c * u.rawVal));
  }), D.derive(() => {
    m.visible = e.nodesIndexes.val;
  }), m;
}
function bs(e, a, u, m) {
  const c = new Ge();
  return D.derive(() => {
    var _a;
    if (a.deformedShape.val, !a.elementsIndexes.val) return;
    c.children.forEach((p) => p.dispose()), c.clear();
    const w = 0.05 * a.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((p, x) => {
      const g = new gt(`${x}`, void 0, "#001219");
      g.position.set(..._s(p.map((M) => u.rawVal[M]))), g.updateScale(w * m.rawVal), c.add(g);
    });
  }), D.derive(() => {
    if (m.val, !a.elementsIndexes.rawVal) return;
    const w = 0.05 * a.gridSize.val * 0.6;
    c.children.forEach((p) => p.updateScale(w * m.rawVal));
  }), D.derive(() => {
    c.visible = a.elementsIndexes.val;
  }), c;
}
function _s(e) {
  const a = e.reduce((m, c) => [m[0] + c[0], m[1] + c[1], m[2] + c[2]], [0, 0, 0]), u = e.length;
  return [a[0] / u, a[1] / u, a[2] / u];
}
function zo(e, a) {
  const u = new Ge(), m = Math.min(0.05 * e, 0.6), c = en(), w = new gt("X", "red", "transparent"), p = new gt(a ? "Z" : "Y", "green", "transparent"), x = new gt(a ? "Y" : "Z", "blue", "transparent"), g = new jt(new b(1, 0, 0), new b(0, 0, 0), 1, c.axisArrow, 0.2, 0.2), M = new jt(new b(0, 1, 0), new b(0, 0, 0), 1, c.axisArrow, 0.2, 0.2), z = new jt(new b(0, 0, 1), new b(0, 0, 0), 1, c.axisArrow, 0.2, 0.2);
  return w.position.set(1.3 * m, 0, 0), p.position.set(0, 1.3 * m, 0), x.position.set(0, 0, 1.3 * m), w.updateScale(0.4 * m), p.updateScale(0.4 * m), x.updateScale(0.4 * m), g.scale.set(m, m, m), M.scale.set(m, m, m), z.scale.set(m, m, m), u.add(g, M, z, w, p, x), u;
}
function Tn(e, a) {
  const u = new b(...e), c = new b(...a).clone().sub(u), w = c.length(), p = c.dot(new b(1, 0, 0)) / w, x = c.dot(new b(0, 1, 0)) / w, g = c.dot(new b(0, 0, 1)) / w, M = Math.sqrt(p ** 2 + x ** 2);
  let z = new Wn().fromArray([[p, x, g], [-x / M, p / M, 0], [-p * g / M, -x * g / M, M]].flat());
  return g === 1 && (z = new Wn().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), g === -1 && (z = new Wn().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new no().setFromMatrix3(z);
}
function eo(e, a) {
  return e == null ? void 0 : e.map((u, m) => (9 * u + a[m]) / 10);
}
function vn(e) {
  const a = e.reduce((m, c) => [m[0] + c[0], m[1] + c[1], m[2] + c[2]], [0, 0, 0]), u = e.length;
  return [a[0] / u, a[1] / u, a[2] / u];
}
function Ss(e, a, u) {
  const m = vn([a, u]), c = vn([e, u]), w = vn([e, a]), p = new b(...m).sub(new b(...c)).normalize(), x = new b(...u).sub(new b(...w)).normalize(), g = p.clone().cross(x).normalize(), M = g.clone().cross(p).normalize();
  return new no().makeBasis(p, M, g);
}
function ks(e, a, u, m) {
  const c = new Ge(), w = new me(), p = new lt({ vertexColors: true }), x = [0, 0, 0], g = [1, 0, 0], M = [0, 1, 0], z = [0, 0, 1];
  w.setAttribute("position", new ft([...x, ...g, ...x, ...M, ...x, ...z], 3));
  const v = [255, 0, 0], Y = [0, 255, 0], de = [0, 0, 255];
  return w.setAttribute("color", new ft([...v, ...v, ...Y, ...Y, ...de, ...de], 3)), D.derive(() => {
    var _a;
    a.deformedShape.val, a.orientations.val && (c.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((te) => {
      const Q = new Xt(w, p), _ = u.rawVal[te[0]], O = u.rawVal[te[1]];
      if (te.length === 2 && (Q.position.set(...eo(_, O)), Q.rotation.setFromRotationMatrix(Tn(_, O))), te.length === 3) {
        const fe = u.rawVal[te[2]];
        Q.position.set(...vn([_, O, fe])), Q.rotation.setFromRotationMatrix(Ss(_, O, fe));
      }
      const be = 0.05 * a.gridSize.rawVal * 0.75 * m.rawVal;
      Q.scale.set(be, be, be), c.add(Q);
    }));
  }), D.derive(() => {
    if (m.val, !a.orientations.rawVal) return;
    const Q = 0.05 * a.gridSize.val * 0.75 * m.rawVal;
    c.children.forEach((_) => _.scale.set(Q, Q, Q));
  }), D.derive(() => {
    c.visible = a.orientations.val;
  }), c;
}
function Ps(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const a = (e.b * 100).toFixed(0), u = (e.h * 100).toFixed(0);
    return `${a}x${u}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function zs(e, a, u, m) {
  const c = new Ge(), w = new Ge();
  c.add(w);
  function p(I, X) {
    const V = I / 2, F = X / 2, $ = new Float32Array([0, -V, -F, 0, V, -F, 0, V, F, 0, -V, -F, 0, V, F, 0, -V, F]), E = new me();
    E.setAttribute("position", new it($, 3));
    const A = new Float32Array([0, -V, -F, 0, V, -F, 0, V, F, 0, -V, F, 0, -V, -F]), W = new me();
    return W.setAttribute("position", new it(A, 3)), { fill: E, outline: W };
  }
  function x(I, X = 24) {
    const V = I / 2, F = new Float32Array(X * 9);
    for (let W = 0; W < X; W++) {
      const se = W / X * Math.PI * 2, j = (W + 1) / X * Math.PI * 2;
      F[W * 9] = 0, F[W * 9 + 1] = 0, F[W * 9 + 2] = 0, F[W * 9 + 3] = 0, F[W * 9 + 4] = V * Math.cos(se), F[W * 9 + 5] = V * Math.sin(se), F[W * 9 + 6] = 0, F[W * 9 + 7] = V * Math.cos(j), F[W * 9 + 8] = V * Math.sin(j);
    }
    const $ = new me();
    $.setAttribute("position", new it(F, 3));
    const E = new Float32Array((X + 1) * 3);
    for (let W = 0; W <= X; W++) {
      const se = W / X * Math.PI * 2;
      E[W * 3] = 0, E[W * 3 + 1] = V * Math.cos(se), E[W * 3 + 2] = V * Math.sin(se);
    }
    const A = new me();
    return A.setAttribute("position", new it(E, 3)), { fill: $, outline: A };
  }
  function g(I, X, V, F) {
    const $ = V ?? X * 0.08, E = F ?? I * 0.07, A = I / 2, W = X / 2, se = W - $, j = E / 2, q = [];
    function T(ce, Pe, he, Fe) {
      q.push(0, ce, Pe, 0, he, Pe, 0, he, Fe, 0, ce, Pe, 0, he, Fe, 0, ce, Fe);
    }
    T(-A, -W, A, -se), T(-j, -se, j, se), T(-A, se, A, W);
    const ie = new me();
    ie.setAttribute("position", new it(new Float32Array(q), 3));
    const N = new Float32Array([0, -A, -W, 0, A, -W, 0, A, -se, 0, j, -se, 0, j, se, 0, A, se, 0, A, W, 0, -A, W, 0, -A, se, 0, -j, se, 0, -j, -se, 0, -A, -se, 0, -A, -W]), re = new me();
    return re.setAttribute("position", new it(N, 3)), { fill: ie, outline: re };
  }
  function M(I, X, V) {
    const F = I / 2, $ = X / 2, E = F - V, A = $ - V, W = [];
    function se(ie, N, re, ce) {
      W.push(0, ie, N, 0, re, N, 0, re, ce, 0, ie, N, 0, re, ce, 0, ie, ce);
    }
    se(-F, -$, F, -A), se(-F, A, F, $), se(-F, -A, -E, A), se(E, -A, F, A);
    const j = new me();
    j.setAttribute("position", new it(new Float32Array(W), 3));
    const q = new Float32Array([0, -F, -$, 0, F, -$, 0, F, -$, 0, F, $, 0, F, $, 0, -F, $, 0, -F, $, 0, -F, -$, 0, -E, -A, 0, E, -A, 0, E, -A, 0, E, A, 0, E, A, 0, -E, A, 0, -E, A, 0, -E, -A]), T = new me();
    return T.setAttribute("position", new it(q, 3)), { fill: j, outline: T };
  }
  function z(I, X, V) {
    const F = I / 2, $ = X / 2, E = F - V, A = $ - V, W = new me(), se = new Float32Array([0, -E, -A, 0, E, -A, 0, E, A, 0, -E, -A, 0, E, A, 0, -E, A]);
    W.setAttribute("position", new it(se, 3));
    const j = [];
    function q(re, ce, Pe, he) {
      j.push(0, re, ce, 0, Pe, ce, 0, Pe, he, 0, re, ce, 0, Pe, he, 0, re, he);
    }
    q(-F, -$, F, -A), q(-F, A, F, $), q(-F, -A, -E, A), q(E, -A, F, A);
    const T = new me();
    T.setAttribute("position", new it(new Float32Array(j), 3));
    const ie = new Float32Array([0, -F, -$, 0, F, -$, 0, F, -$, 0, F, $, 0, F, $, 0, -F, $, 0, -F, $, 0, -F, -$, 0, -E, -A, 0, E, -A, 0, E, -A, 0, E, A, 0, E, A, 0, -E, A, 0, -E, A, 0, -E, -A]), N = new me();
    return N.setAttribute("position", new it(ie, 3)), { concFill: W, steelFillGeom: T, outline: N };
  }
  function v(I, X, V) {
    const F = [], $ = [[0, -I / 2, -X / 2], [0, -I / 2 + V, -X / 2], [0, -I / 2 + V, X / 2 - V], [0, I / 2, X / 2 - V], [0, I / 2, X / 2], [0, -I / 2, X / 2]], E = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const j of E) F.push(...$[j]);
    const A = new me();
    A.setAttribute("position", new it(new Float32Array(F), 3));
    const W = [];
    for (let j = 0; j < $.length; j++) {
      const q = (j + 1) % $.length;
      W.push(...$[j], ...$[q]);
    }
    const se = new me();
    return se.setAttribute("position", new it(new Float32Array(W), 3)), { fill: A, outline: se };
  }
  function Y(I, X, V, F) {
    const $ = F / 2, E = [], A = [[0, -I - $, -X / 2], [0, -V - $, -X / 2], [0, -V - $, X / 2 - V], [0, -$, X / 2 - V], [0, -$, X / 2], [0, -I - $, X / 2]], W = [[0, $, -X / 2], [0, $ + V, -X / 2], [0, $ + V, X / 2 - V], [0, I + $, X / 2 - V], [0, I + $, X / 2], [0, $, X / 2]], se = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const ie of se) E.push(...A[ie]);
    for (const ie of se) E.push(...W[ie]);
    const j = new me();
    j.setAttribute("position", new it(new Float32Array(E), 3));
    const q = [];
    for (const ie of [A, W]) for (let N = 0; N < ie.length; N++) {
      const re = (N + 1) % ie.length;
      q.push(...ie[N], ...ie[re]);
    }
    const T = new me();
    return T.setAttribute("position", new it(new Float32Array(q), 3)), { fill: j, outline: T };
  }
  function de(I, X, V, F) {
    const $ = X / 2, E = I, A = [[0, -E, -$], [0, -E, -$ + V], [0, -F, -$ + V], [0, -F, $ - V], [0, -E, $ - V], [0, -E, $], [0, 0, $], [0, 0, -$]], W = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], se = [];
    for (const ie of W) se.push(...A[ie]);
    const j = new me();
    j.setAttribute("position", new it(new Float32Array(se), 3));
    const q = [];
    for (let ie = 0; ie < A.length; ie++) {
      const N = (ie + 1) % A.length;
      q.push(...A[ie], ...A[N]);
    }
    const T = new me();
    return T.setAttribute("position", new it(new Float32Array(q), 3)), { fill: j, outline: T };
  }
  function te(I, X, V, F, $) {
    const E = X / 2, A = $ / 2, W = [], se = [[0, -I, -E], [0, -I, -E + V], [0, -A - F, -E + V], [0, -A - F, E - V], [0, -I, E - V], [0, -I, E], [0, -A, E], [0, -A, -E]], j = se.map((re) => [re[0], -re[1], re[2]]), q = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const re of q) W.push(...se[re]);
    for (const re of q) W.push(...j[re]);
    const T = new me();
    T.setAttribute("position", new it(new Float32Array(W), 3));
    const ie = [];
    for (const re of [se, j]) for (let ce = 0; ce < re.length; ce++) {
      const Pe = (ce + 1) % re.length;
      ie.push(...re[ce], ...re[Pe]);
    }
    const N = new me();
    return N.setAttribute("position", new it(new Float32Array(ie), 3)), { fill: T, outline: N };
  }
  function Q(I, X, V, F) {
    const $ = I / 2, E = X / 2, A = F / 2, W = [[0, -A, -E], [0, A, -E], [0, A, E - V], [0, $, E - V], [0, $, E], [0, -$, E], [0, -$, E - V], [0, -A, E - V]], se = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], j = [];
    for (const N of se) j.push(...W[N]);
    const q = new me();
    q.setAttribute("position", new it(new Float32Array(j), 3));
    const T = [];
    for (let N = 0; N < W.length; N++) {
      const re = (N + 1) % W.length;
      T.push(...W[N], ...W[re]);
    }
    const ie = new me();
    return ie.setAttribute("position", new it(new Float32Array(T), 3)), { fill: q, outline: ie };
  }
  function _(I, X, V = 24) {
    const F = I / 2, $ = F - X, E = [];
    for (let j = 0; j < V; j++) {
      const q = j / V * Math.PI * 2, T = (j + 1) / V * Math.PI * 2, ie = Math.cos(q), N = Math.sin(q), re = Math.cos(T), ce = Math.sin(T);
      E.push(0, F * ie, F * N, 0, F * re, F * ce, 0, $ * re, $ * ce), E.push(0, F * ie, F * N, 0, $ * re, $ * ce, 0, $ * ie, $ * N);
    }
    const A = new me();
    A.setAttribute("position", new it(new Float32Array(E), 3));
    const W = [];
    for (let j = 0; j < V; j++) {
      const q = j / V * Math.PI * 2, T = (j + 1) / V * Math.PI * 2;
      W.push(0, F * Math.cos(q), F * Math.sin(q), 0, F * Math.cos(T), F * Math.sin(T)), W.push(0, $ * Math.cos(q), $ * Math.sin(q), 0, $ * Math.cos(T), $ * Math.sin(T));
    }
    const se = new me();
    return se.setAttribute("position", new it(new Float32Array(W), 3)), { fill: A, outline: se };
  }
  const O = new Oe({ color: 52479, transparent: true, opacity: 0.35, side: vt, depthWrite: false }), ne = new lt({ color: 52479 }), be = new Oe({ color: 16750848, transparent: true, opacity: 0.4, side: vt, depthWrite: false }), fe = new lt({ color: 16750848 });
  function B(I, X) {
    const V = Math.abs(X[0] - I[0]), F = Math.abs(X[1] - I[1]), $ = Math.abs(X[2] - I[2]);
    return $ > V && $ > F || F > V && F > $;
  }
  return D.derive(() => {
    var _a, _b;
    a.deformedShape.val, a.secColumns.val, a.secBeams.val, a.secFloor.val;
    const I = a.secColumns.rawVal, X = a.secBeams.rawVal;
    if (!I && !X) {
      c.children.forEach((A) => {
        A instanceof gt && A.dispose();
      }), c.clear();
      return;
    }
    c.children.forEach((A) => {
      A instanceof gt && A.dispose();
    }), c.clear();
    const V = (_a = e.elements) == null ? void 0 : _a.val, F = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!V || !F) return;
    const $ = F.sectionShapes, E = a.secFloor.rawVal;
    V.forEach((A, W) => {
      if (A.length !== 2) return;
      const se = u.rawVal[A[0]], j = u.rawVal[A[1]];
      if (!se || !j) return;
      const q = B(se, j);
      if (q && !I || !q && !X) return;
      if (E >= 0) {
        const ce = Math.min(se[1], j[1]);
        Math.max(se[1], j[1]);
        const Pe = a.gridSize.rawVal || 3;
        if (Math.floor(ce / Pe + 0.01) !== E) return;
      }
      const T = $ == null ? void 0 : $.get(W);
      if (!T) return;
      const ie = [(se[0] + j[0]) / 2, (se[1] + j[1]) / 2, (se[2] + j[2]) / 2], N = Tn(se, j);
      if (T.type === "CFT") {
        const ce = z(T.b, T.h, T.tw ?? T.b * 0.05), Pe = new Ue(ce.concFill, O);
        Pe.position.set(...ie), Pe.rotation.setFromRotationMatrix(N), c.add(Pe);
        const he = new Ue(ce.steelFillGeom, be);
        he.position.set(...ie), he.rotation.setFromRotationMatrix(N), c.add(he);
        const Fe = new St(ce.outline, fe);
        Fe.position.set(...ie), Fe.rotation.setFromRotationMatrix(N), c.add(Fe);
      } else {
        let ce, Pe, he;
        switch (T.type) {
          case "rect":
            ce = p(T.b, T.h), Pe = O, he = ne;
            break;
          case "circ":
            ce = x(T.d), Pe = O, he = ne;
            break;
          case "I":
            ce = g(T.b, T.h, T.tf, T.tw), Pe = be, he = fe;
            break;
          case "HSS":
            ce = M(T.b, T.h, T.tw ?? T.b * 0.05), Pe = be, he = fe;
            break;
          case "CFT":
            ce = z(T.b, T.h, T.tw ?? T.b * 0.05), Pe = be, he = fe;
            break;
          case "L":
            ce = v(T.b ?? T.h, T.h, T.t ?? T.tw ?? 3e-3), Pe = be, he = fe;
            break;
          case "2L":
            ce = Y(T.b ?? T.h, T.h, T.t ?? T.tw ?? 3e-3, T.dis ?? 0.01), Pe = be, he = fe;
            break;
          case "C":
          case "coldC":
            ce = de(T.b, T.h, T.tf ?? T.t ?? 3e-3, T.tw ?? T.t ?? 3e-3), Pe = be, he = fe;
            break;
          case "2C":
            ce = te(T.b, T.h, T.tf ?? 5e-3, T.tw ?? 5e-3, T.dis ?? 0.01), Pe = be, he = fe;
            break;
          case "T":
            ce = Q(T.b, T.h, T.tf ?? 0.01, T.tw ?? 6e-3), Pe = be, he = fe;
            break;
          case "pipe":
            ce = _(T.d, T.tw ?? T.d * 0.05), Pe = be, he = fe;
            break;
          default:
            return;
        }
        const Fe = new Ue(ce.fill, Pe);
        Fe.position.set(...ie), Fe.rotation.setFromRotationMatrix(N), c.add(Fe);
        const nt = new St(ce.outline, he);
        nt.position.set(...ie), nt.rotation.setFromRotationMatrix(N), c.add(nt);
      }
      const re = Ps(T);
      if (re) {
        const Pe = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(T.type) ? "#ff9900" : "#00ccff", he = new gt(re, Pe, "transparent");
        he.position.set(ie[0], ie[1], ie[2]);
        const Fe = 0.05 * a.gridSize.rawVal * 0.5;
        he.updateScale(Fe * ((m == null ? void 0 : m.rawVal) ?? 1)), w.add(he);
      }
    });
  }), m && D.derive(() => {
    if (m.val, !a.sections.rawVal) return;
    const I = 0.05 * a.gridSize.val * 0.5;
    w.children.forEach((X) => {
      X instanceof gt && X.updateScale(I * m.rawVal);
    });
  }), D.derive(() => {
    c.visible = a.sections.val;
  }), D.derive(() => {
    w.visible = a.sectionLabels.val;
  }), c;
}
function Cs(e) {
  if (!e) return null;
  const a = e.type, u = (z, v) => [z, v], m = (z, v) => [u(-z / 2, -v / 2), u(z / 2, -v / 2), u(z / 2, v / 2), u(-z / 2, v / 2)], c = (z, v = 24) => {
    const Y = z / 2, de = [];
    for (let te = 0; te < v; te++) {
      const Q = 2 * Math.PI * te / v;
      de.push(u(Y * Math.cos(Q), Y * Math.sin(Q)));
    }
    return de;
  }, w = e.b ?? 0, p = e.h ?? 0, x = e.d ?? 0, g = e.tw ?? e.t ?? 0, M = e.tf ?? e.t ?? 0;
  switch (a) {
    case "rect":
      return w && p ? { contorno: m(w, p) } : null;
    case "circ":
      return x ? { contorno: c(x) } : null;
    case "pipe":
      return x && g ? { contorno: c(x), huecos: [c(x - 2 * g).reverse()] } : null;
    case "HSS":
      return w && p && g ? { contorno: m(w, p), huecos: [m(w - 2 * g, p - 2 * (M || g)).reverse()] } : null;
    case "CFT":
      return w && p ? { contorno: m(w, p) } : null;
    case "I":
      return w && p && g && M ? { contorno: [u(-w / 2, -p / 2), u(w / 2, -p / 2), u(w / 2, -p / 2 + M), u(g / 2, -p / 2 + M), u(g / 2, p / 2 - M), u(w / 2, p / 2 - M), u(w / 2, p / 2), u(-w / 2, p / 2), u(-w / 2, p / 2 - M), u(-g / 2, p / 2 - M), u(-g / 2, -p / 2 + M), u(-w / 2, -p / 2 + M)] } : null;
    case "C":
    case "2C":
    case "coldC":
      return w && p && g && M ? { contorno: [u(-w / 2, -p / 2), u(w / 2, -p / 2), u(w / 2, -p / 2 + M), u(-w / 2 + g, -p / 2 + M), u(-w / 2 + g, p / 2 - M), u(w / 2, p / 2 - M), u(w / 2, p / 2), u(-w / 2, p / 2)] } : null;
    case "T":
      return w && p && g && M ? { contorno: [u(-g / 2, -p / 2), u(g / 2, -p / 2), u(g / 2, p / 2 - M), u(w / 2, p / 2 - M), u(w / 2, p / 2), u(-w / 2, p / 2), u(-w / 2, p / 2 - M), u(-g / 2, p / 2 - M)] } : null;
    case "L":
    case "2L":
      return w && p && g ? { contorno: [u(-w / 2, -p / 2), u(w / 2, -p / 2), u(w / 2, -p / 2 + g), u(-w / 2 + g, -p / 2 + g), u(-w / 2 + g, p / 2), u(-w / 2, p / 2)] } : null;
    default:
      return w && p ? { contorno: m(w, p) } : x ? { contorno: c(x) } : null;
  }
}
function Fs(e, a, u) {
  if (!e || e <= 0 || !a || !u || a <= 0 || u <= 0) return null;
  const m = Math.sqrt(Math.sqrt(u / a)), c = Math.sqrt(e / m), w = e / c;
  return !isFinite(c) || !isFinite(w) || c <= 0 || w <= 0 ? null : { contorno: [[-c / 2, -w / 2], [c / 2, -w / 2], [c / 2, w / 2], [-c / 2, w / 2]] };
}
function Vs(e) {
  const a = new gn();
  e.contorno.forEach(([u, m], c) => c ? a.lineTo(u, m) : a.moveTo(u, m)), a.closePath();
  for (const u of e.huecos ?? []) {
    const m = new ss();
    u.forEach(([c, w], p) => p ? m.lineTo(c, w) : m.moveTo(c, w)), m.closePath(), a.holes.push(m);
  }
  return a;
}
function As(e, a, u) {
  const m = new Ge();
  m.name = "extrusion";
  const c = new Hn({ color: 8369151, transparent: true, opacity: 0.92, side: vt }), w = new Hn({ color: 12623968, transparent: true, opacity: 0.85, side: vt }), p = new Hn({ color: 11583173, transparent: true, opacity: 0.85, side: vt }), x = new Ge();
  x.add(new $o(16777215, 0.55));
  const g = new Vn(16777215, 0.75);
  g.position.set(30, 25, 40);
  const M = new Vn(16777215, 0.35);
  M.position.set(-25, -20, 15), x.add(g, M);
  let z = 0;
  return D.derive(() => {
    var _a, _b, _c, _d, _e;
    const v = ((_a = a.extruded) == null ? void 0 : _a.val) ?? false;
    globalThis.__extrusionDebug = { corridas: ++z, on: v }, m.visible = v;
    for (const ne of [...m.children]) ne !== x && (m.remove(ne), (_c = (_b = ne.geometry) == null ? void 0 : _b.dispose) == null ? void 0 : _c.call(_b));
    if (m.children.includes(x) || m.add(x), !v) return;
    const Y = u.val ?? [], de = ((_d = e.elements) == null ? void 0 : _d.val) ?? [], te = ((_e = e.elementInputs) == null ? void 0 : _e.val) ?? {}, Q = te.sectionShapes ?? /* @__PURE__ */ new Map(), _ = te.thicknesses ?? /* @__PURE__ */ new Map();
    let O = "";
    try {
      de.forEach((ne, be) => {
        var _a2, _b2, _c2;
        if (ne.length === 2) {
          let fe = Cs(Q.get(be)), B = true;
          if (fe || (fe = Fs((_a2 = te.areas) == null ? void 0 : _a2.get(be), (_b2 = te.momentsOfInertiaY) == null ? void 0 : _b2.get(be), (_c2 = te.momentsOfInertiaZ) == null ? void 0 : _c2.get(be)), B = false), !fe) return;
          const I = Y[ne[0]], X = Y[ne[1]];
          if (!I || !X) return;
          const V = Math.hypot(X[0] - I[0], X[1] - I[1], X[2] - I[2]);
          if (V < 1e-9) return;
          const F = new os(Vs(fe), { depth: V, bevelEnabled: false, curveSegments: 4 });
          F.applyMatrix4(new no().set(0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1));
          const $ = new Ue(F, B ? c : w);
          $.position.set(I[0], I[1], I[2]), $.rotation.setFromRotationMatrix(Tn(I, X)), m.add($);
          return;
        }
        if (ne.length === 3 || ne.length === 4) {
          const fe = _.get(be);
          if (!fe || fe <= 0) return;
          const B = ne.map((N) => Y[N]).filter(Boolean);
          if (B.length < 3) return;
          const I = [B[1][0] - B[0][0], B[1][1] - B[0][1], B[1][2] - B[0][2]], X = [B[2][0] - B[0][0], B[2][1] - B[0][1], B[2][2] - B[0][2]], V = I[1] * X[2] - I[2] * X[1], F = I[2] * X[0] - I[0] * X[2], $ = I[0] * X[1] - I[1] * X[0], E = Math.hypot(V, F, $);
          if (E < 1e-12) return;
          const A = [V / E, F / E, $ / E], W = [], se = (N) => B.map((re) => [re[0] + A[0] * N, re[1] + A[1] * N, re[2] + A[2] * N]), j = se(+fe / 2), q = se(-fe / 2), T = (N, re, ce) => W.push(...N, ...re, ...ce);
          for (const N of [j, q]) T(N[0], N[1], N[2]), N.length === 4 && T(N[0], N[2], N[3]);
          for (let N = 0; N < B.length; N++) {
            const re = (N + 1) % B.length;
            T(j[N], q[N], q[re]), T(j[N], q[re], j[re]);
          }
          const ie = new me();
          ie.setAttribute("position", new ft(W, 3)), ie.computeVertexNormals(), m.add(new Ue(ie, p));
        }
      });
    } catch (ne) {
      O = String((ne == null ? void 0 : ne.message) ?? ne);
    }
    globalThis.__extrusionDebug = { corridas: z, on: v, fallo: O, nElementos: de.length, nFormas: Q.size, nEspesores: _.size, mallas: m.children.length - 1 };
  }), m;
}
class kn extends Ge {
  constructor(a, u, m, c, w, p, x) {
    super();
    const g = new gn().moveTo(0, 0).lineTo(0, p[1]).lineTo(m, p[1]).lineTo(m, 0).lineTo(0, 0), M = g.getPoints(), z = new me().setFromPoints(M);
    this.lines = new St(z, new lt({ color: en().resultOutline })), this.lines.position.set(...a), this.lines.rotation.setFromRotationMatrix(c), x && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const v = new Fn(g), Y = new Oe({ color: p[1] > 0 ? 24435 : 11411474, side: vt });
    this.mesh = new Ue(v, Y), this.mesh.position.set(...a), this.mesh.rotation.setFromRotationMatrix(c), x && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new gt(`${w[1].toFixed(4)}`), this.normalizedResult = p, this.textPosition = vn([a, u]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(c), this.add(this.text);
  }
  updateScale(a) {
    this.lines.scale.set(1, a * 2, 1), this.mesh.scale.set(1, a * 2, 1), this.text.updateScale(a * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * a);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Co extends Ge {
  constructor(a, u, m, c, w, p, x) {
    super();
    const g = w[0] * m / (w[0] + w[1]), M = w[0] * w[1] > 0;
    if (this.text = new gt(`${w[0].toFixed(4)}`), this.text2 = new gt(`${(w[1] * -1).toFixed(4)}`), this.normalizedResult = p, this.textPosition = eo(a, u), this.text2Position = eo(u, a), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(c), this.text2.rotation.setFromRotationMatrix(c), this.add(this.text, this.text2), M) {
      const z = new gn().moveTo(0, 0).lineTo(0, p[0]).lineTo(g, 0).lineTo(0, 0), v = new gn().moveTo(g, 0).lineTo(m, -p[1]).lineTo(m, 0).lineTo(g, 0), Y = z.getPoints(), de = v.getPoints(), te = new me().setFromPoints(Y), Q = new me().setFromPoints(de), _ = new lt({ color: en().resultOutline });
      this.lines = new St(te, _), this.lines2 = new St(Q, _), this.lines.position.set(...a), this.lines2.position.set(...a), this.lines.rotation.setFromRotationMatrix(c), this.lines2.rotation.setFromRotationMatrix(c), x && this.lines.rotateX(Math.PI / 2), x && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const O = new Fn(z), ne = new Fn(v), be = new Oe({ color: p[0] > 0 ? 24435 : 11411474, side: vt }), fe = new Oe({ color: -p[1] > 0 ? 24435 : 11411474, side: vt });
      this.mesh = new Ue(O, be), this.mesh2 = new Ue(ne, fe), this.mesh.position.set(...a), this.mesh2.position.set(...a), this.mesh.rotation.setFromRotationMatrix(c), this.mesh2.rotation.setFromRotationMatrix(c), x && this.mesh.rotateX(Math.PI / 2), x && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const z = new gn().moveTo(0, 0).lineTo(0, p[0]).lineTo(m, -p[1]).lineTo(m, 0).lineTo(0, 0), v = z.getPoints(), Y = new me().setFromPoints(v);
      this.lines = new St(Y, new lt({ color: en().resultOutline })), this.lines.position.set(...a), this.lines.rotation.setFromRotationMatrix(c), x && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const de = new Fn(z), te = new Oe({ color: p[0] > 0 ? 24435 : 11411474, side: vt });
      this.mesh = new Ue(de, te), this.mesh.position.set(...a), this.mesh.rotation.setFromRotationMatrix(c), x && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
    }
  }
  updateScale(a) {
    var _a, _b;
    this.lines.scale.set(1, a * 2, 1), (_a = this.lines2) == null ? void 0 : _a.scale.set(1, a * 2, 1), this.mesh.scale.set(1, a * 2, 1), (_b = this.mesh2) == null ? void 0 : _b.scale.set(1, a * 2, 1), this.text.updateScale(a * 0.6), this.text2.updateScale(a * 0.6), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.translateZ(this.normalizedResult[0] * 2.5 * a), this.text2.translateZ(-this.normalizedResult[1] * 2.5 * a);
  }
  dispose() {
    var _a, _b, _c, _d, _e, _f;
    this.lines.geometry.dispose(), (_a = this.lines2) == null ? void 0 : _a.geometry.dispose(), this.lines.material.dispose(), (_c = (_b = this.lines2) == null ? void 0 : _b.material) == null ? void 0 : _c.dispose(), this.mesh.geometry.dispose(), (_d = this.mesh2) == null ? void 0 : _d.geometry.dispose(), this.mesh.material.dispose(), (_f = (_e = this.mesh2) == null ? void 0 : _e.material) == null ? void 0 : _f.dispose(), this.text.dispose(), this.text2.dispose();
  }
}
var Xo = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(Xo || {});
function Ts(e, a, u, m) {
  const c = new Ge(), w = { normals: kn, shearsY: kn, shearsZ: kn, torsions: kn, bendingsY: Co, bendingsZ: Co };
  return D.derive(() => {
    var _a, _b;
    if (a.deformedShape.val, u.val, a.frameResults.val == "none") return;
    c.children.forEach((x) => x.dispose()), c.clear();
    const p = Xo[a.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[p]) == null ? void 0 : _b.forEach((x, g) => {
      var _a2, _b2;
      const M = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[g]) ?? [0, 1], z = u.rawVal[M[0]], v = u.rawVal[M[1]], Y = new b(...v).distanceTo(new b(...z)), de = Es((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[p]), te = x == null ? void 0 : x.map((ne) => ne / (de === 0 ? 1 : de)), Q = Tn(z, v), _ = new w[p](z, v, Y, Q, x ?? [0, 0], te ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(p)), O = 0.05 * a.gridSize.rawVal;
      _.updateScale(O * m.rawVal), c.add(_);
    });
  }), D.derive(() => {
    if (m.val, a.frameResults.rawVal == "none") return;
    const p = 0.05 * a.gridSize.val;
    c.children.forEach((x) => x.updateScale(p * m.rawVal));
  }), D.derive(() => {
    c.visible = a.frameResults.val != "none";
  }), c;
}
function Es(e) {
  let a = 0;
  return e == null ? void 0 : e.forEach((u) => {
    const m = Math.max(...u ?? [0, 0]);
    m > a && (a = m);
  }), a;
}
class $s extends Ge {
  constructor(a, u, m) {
    super();
    const c = u === oo.reactions;
    m[0] && (this.xText1 = new gt(`${c ? "Fx" : "Dx"}: ` + m[0].toFixed(4))), m[3] && (this.xText2 = new gt(`${c ? "Mx" : "Rx"}: ` + m[3].toFixed(4))), m[1] && (this.yText1 = new gt(`${c ? "Fy" : "Dy"}: ` + m[1].toFixed(4))), m[4] && (this.yText2 = new gt(`${c ? "My" : "Ry"}: ` + m[4].toFixed(4))), m[2] && (this.zText1 = new gt(`${c ? "Fz" : "Dz"}: ` + m[2].toFixed(4))), m[5] && (this.zText2 = new gt(`${c ? "Mz" : "Rz"}: ` + m[5].toFixed(4))), (m[0] || m[3]) && (this.xArrow = new jt(new b(1, 0, 0), new b(0, 0, 0), 1, 15637248, 0.3, 0.3)), (m[1] || m[4]) && (this.yArrow = new jt(new b(0, 1, 0), new b(0, 0, 0), 1, 15637248, 0.3, 0.3)), (m[2] || m[5]) && (this.zArrow = new jt(new b(0, 0, 1), new b(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...a), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
  }
  updateScale(a) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2;
    (_a = this.xArrow) == null ? void 0 : _a.scale.set(a, a, a), (_b = this.yArrow) == null ? void 0 : _b.scale.set(a, a, a), (_c = this.zArrow) == null ? void 0 : _c.scale.set(a, a, a), (_d = this.xText1) == null ? void 0 : _d.position.set(1.3 * a, 0, 0), (_e = this.xText2) == null ? void 0 : _e.position.set(1.3 * a, 0, 0.5 * a), (_f = this.yText1) == null ? void 0 : _f.position.set(0, 1.3 * a, 0), (_g = this.yText2) == null ? void 0 : _g.position.set(0, 1.3 * a, 0.5 * a), (_h = this.zText1) == null ? void 0 : _h.position.set(0, 0, 1.3 * a), (_i = this.zText2) == null ? void 0 : _i.position.set(0, 0, 1.3 * a + 0.5 * a), (_j = this.xText1) == null ? void 0 : _j.updateScale(0.4 * a), (_k = this.xText2) == null ? void 0 : _k.updateScale(0.4 * a), (_l = this.yText1) == null ? void 0 : _l.updateScale(0.4 * a), (_m = this.yText2) == null ? void 0 : _m.updateScale(0.4 * a), (_n2 = this.zText1) == null ? void 0 : _n2.updateScale(0.4 * a), (_o2 = this.zText2) == null ? void 0 : _o2.updateScale(0.4 * a);
  }
  dispose() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    (_a = this.xArrow) == null ? void 0 : _a.dispose(), (_b = this.yArrow) == null ? void 0 : _b.dispose(), (_c = this.zArrow) == null ? void 0 : _c.dispose(), (_d = this.xText1) == null ? void 0 : _d.dispose(), (_e = this.xText2) == null ? void 0 : _e.dispose(), (_f = this.yText1) == null ? void 0 : _f.dispose(), (_g = this.yText2) == null ? void 0 : _g.dispose(), (_h = this.zText1) == null ? void 0 : _h.dispose(), (_i = this.zText2) == null ? void 0 : _i.dispose();
  }
}
var oo = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(oo || {});
function Is(e, a, u, m) {
  const c = new Ge();
  return D.derive(() => {
    var _a, _b;
    if (a.deformedShape.val, a.nodeResults.val == "none") return;
    c.children.forEach((x) => x.dispose()), c.clear();
    const w = oo[a.nodeResults.rawVal], p = 0.05 * a.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[w]) == null ? void 0 : _b.forEach((x, g) => {
      const M = new $s(u.rawVal[g], w, x ?? [0, 0, 0, 0, 0, 0]);
      M.updateScale(p * m.rawVal), c.add(M);
    });
  }), D.derive(() => {
    if (m.val, a.nodeResults.rawVal == "none") return;
    const w = 0.05 * a.gridSize.val;
    c.children.forEach((p) => p.updateScale(w * m.rawVal));
  }), D.derive(() => {
    c.visible = a.nodeResults.val != "none";
  }), c;
}
function Ls({ drawingObj: e, gridObj: a, scene: u, getActiveCamera: m, controls: c, gridSize: w, derivedDisplayScale: p, rendererElm: x, viewerRender: g }) {
  const M = new as(), z = new is(), v = (n) => {
    const o = x.getBoundingClientRect(), i = n.clientX - o.left, t = n.clientY - o.top, r = o.width || 1, s = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const f = r / 2;
      if (i >= f) return z.x = (i - f) / f * 2 - 1, z.y = -(t / s) * 2 + 1, window.__hekatanSplitCamera ?? m();
      z.x = i / f * 2 - 1;
    } else z.x = i / r * 2 - 1;
    return z.y = -(t / s) * 2 + 1, m();
  }, Y = new Ue(new Wt(1e4, 1e4), new Oe({ side: vt, transparent: true, opacity: 0, depthWrite: false }));
  Y.visible = true, Y.frustumCulled = false, u.add(Y);
  const de = (n, o, i) => {
    const t = new Ue(new Wt(1e4, 1e4), new Oe({ side: vt, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, i), t.visible = false, t.frustumCulled = false, u.add(t), t;
  }, te = de(Math.PI / 2, 0, 0), Q = de(0, Math.PI / 2, 0);
  let _ = false;
  const O = () => {
    if (_) return M.intersectObjects([Y], false);
    if (te.visible = !!window.__hekatanGridPlaneXZ, Q.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanOrthoRaycast === true && Ae.visible) {
      const i = M.intersectObjects([Ae, $e, Re], false);
      if (i.length > 0) return i;
    }
    const o = [Y];
    return te.visible && o.push(te), Q.visible && o.push(Q), Rt.visible && Yt.length > 0 && o.push(...Yt), M.intersectObjects(o, false);
  }, ne = new zn(new me(), new Cn()), be = new zn(new me(), new Cn({ color: "gray", sizeAttenuation: false, size: 6 })), fe = new zn(new me(), new Cn({ color: "orange", size: 0.1 }));
  u.add(fe);
  const B = document.createElement("input");
  B.id = "hk-rubber-label", B.type = "text", B.spellcheck = false, B.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, B.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none", "pointer-events:none"].join(";") + ";", document.body.appendChild(B);
  let I = null, X = null, V = false;
  const F = new b(), $ = (n, o, i, t, r, s) => {
    const l = t - n, f = r - o, h = s - i, S = Math.hypot(l, f, h);
    if (S < 0.01) {
      B.style.display = "none";
      return;
    }
    I = [n, o, i], X = [l / S, f / S, h / S], F.set((n + t) / 2, (o + r) / 2, (i + s) / 2), F.project(m());
    const k = x.getBoundingClientRect(), d = k.left + (F.x * 0.5 + 0.5) * k.width, y = k.top + (-F.y * 0.5 + 0.5) * k.height;
    if (B.style.left = d + "px", B.style.top = y + "px", B.style.display = "block", !V) {
      if (B.value = `${S.toFixed(2)} m`, document.activeElement !== B) {
        const P = document.activeElement;
        P && (P.tagName === "INPUT" || P.tagName === "TEXTAREA") && P !== B || B.focus({ preventScroll: true });
      }
      try {
        B.select();
      } catch {
      }
    }
  }, E = () => {
    B.style.display = "none", I = null, X = null, V = false, document.activeElement === B && B.blur();
  }, A = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      bt = n, pe(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), B.blur();
      return;
    }
    if (!I || !X || !e.polylines) return;
    let i = X[0], t = X[1], r = X[2];
    je === "x" ? (i = Math.sign(i) || 1, t = 0, r = 0) : je === "y" ? (i = 0, t = Math.sign(t) || 1, r = 0) : je === "z" && (i = 0, t = 0, r = Math.sign(r) || 1);
    const s = I[0] + i * n, l = I[1] + t * n, f = I[2] + r * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [s, l, f]];
    const h = e.polylines.rawVal, S = h.length ? h[h.length - 1] : [];
    e.polylines.val = [...h.slice(0, -1), [...S, e.points.rawVal.length - 1]], B.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    g();
  }, W = (n) => {
    let o = n.trim().toLowerCase().replace(/m$/g, "").trim();
    if (!o) return null;
    const i = o.startsWith("@");
    if (i && (o = o.slice(1)), o.includes("<")) {
      const r = o.split("<").map((s) => parseFloat(s.trim()));
      if (r.some(isNaN)) return null;
      if (r.length === 2) {
        const [s, l] = r;
        return i ? { kind: "relPolar", L: s, ang: l } : { kind: "absPolar", L: s, ang: l };
      }
      if (r.length === 3 && i) {
        const [s, l, f] = r;
        return { kind: "relSpherical", L: s, az: l, el: f };
      }
      return null;
    }
    if (o.includes(",")) {
      const r = o.split(",").map((h) => parseFloat(h.trim()));
      if (r.some(isNaN)) return null;
      const [s, l, f = 0] = r;
      return i ? { kind: "relCart", dx: s, dy: l, dz: f } : { kind: "absCart", x: s, y: l, z: f };
    }
    const t = parseFloat(o);
    return isNaN(t) || t <= 0 ? null : { kind: "length", L: t };
  }, se = (n) => {
    if (!n) return null;
    if (n.kind === "absCart") return [n.x, n.y, n.z];
    if (n.kind === "relCart") return I ? [I[0] + n.dx, I[1] + n.dy, I[2] + n.dz] : null;
    if (n.kind === "absPolar") {
      const o = n.ang * Math.PI / 180;
      return [n.L * Math.cos(o), n.L * Math.sin(o), 0];
    }
    if (n.kind === "relPolar") {
      if (!I) return null;
      const o = n.ang * Math.PI / 180;
      return [I[0] + n.L * Math.cos(o), I[1] + n.L * Math.sin(o), I[2]];
    }
    if (n.kind === "relSpherical") {
      if (!I) return null;
      const o = n.az * Math.PI / 180, i = n.el * Math.PI / 180, t = n.L * Math.cos(i);
      return [I[0] + t * Math.cos(o), I[1] + t * Math.sin(o), I[2] + n.L * Math.sin(i)];
    }
    return null;
  }, j = (n) => {
    var _a;
    if (!e.polylines) return;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, n];
    const o = e.polylines.rawVal, i = o.length ? o[o.length - 1] : [];
    e.polylines.val = [...o.slice(0, -1), [...i, e.points.rawVal.length - 1]], B.blur();
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    g();
  };
  window.__hekatanTypeCoord = (n) => {
    var _a, _b, _c, _d;
    const o = W(n);
    if (!o) return false;
    if (o.kind === "length") return A(o.L), true;
    const i = se(o);
    if (!i) return false;
    if (j(i), ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "area" && e.polylines) {
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
  }, B.addEventListener("keydown", (n) => {
    if (n.key === "Enter") {
      n.preventDefault();
      const i = W(B.value);
      if (!i) return;
      if (V = false, i.kind === "length") A(i.L), pe(`\u270F DDE ${i.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = se(i);
        if (!t) return;
        j(t);
        const r = i.kind;
        pe(`\u270F ${r} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
      }
      return;
    }
    if (n.key === "Escape") {
      n.preventDefault(), V = false, B.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!V && B.style.display === "block") try {
          B.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && (V = true);
  }), window.addEventListener("keydown", (n) => {
    if (!I || !X || document.activeElement === B) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (B.value = n.key, B.focus(), B.setSelectionRange(1, 1), n.preventDefault());
  });
  const q = document.createElement("div");
  q.id = "hk-coord-readout", q.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", q.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(q);
  const T = document.createElement("div");
  T.id = "hk-coord-fixed", T.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", T.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(T);
  const ie = new St(new me().setFromPoints([new b(0, 0, 0), new b(0, 0, 0)]), new yn({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  ie.frustumCulled = false, ie.visible = false, u.add(ie);
  const N = new St(new me(), new lt({ color: 2282478, transparent: true, opacity: 0.9 }));
  N.frustumCulled = false, N.visible = false, u.add(N);
  let re = [];
  const ce = new Ge(), Pe = new Ue(new Wt(1, 1), new Oe({ color: 2282478, transparent: true, opacity: 0.08, side: vt, depthWrite: false })), he = new Xt(new vo(new Wt(1, 1)), new lt({ color: 2282478, transparent: true, opacity: 0.85 })), Fe = new Xt(new me(), new lt({ color: 2282478, transparent: true, opacity: 0.3 })), nt = (n, o) => {
    const i = [], t = Math.ceil(n / o);
    for (let r = -t; r <= t; r++) {
      const s = r * o;
      i.push(-n, s, 0, n, s, 0), i.push(s, -n, 0, s, n, 0);
    }
    Fe.geometry.dispose(), Fe.geometry = new me(), Fe.geometry.setAttribute("position", new ft(i, 3));
  };
  ce.add(Pe, he, Fe), ce.visible = false, ce.frustumCulled = false, u.add(ce);
  const ot = new Ge();
  ot.frustumCulled = false, ot.visible = false, u.add(ot);
  const ee = (n) => {
    const o = new me().setFromPoints([new b(0, 0, 0), new b(0, 0, 0)]), i = new yn({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new St(o, i);
  }, C = ee(16711680), Z = ee(65280), L = ee(35071);
  ot.add(C, Z, L);
  const J = (n) => {
    const o = new me().setFromPoints([new b(0, 0, 0), new b(0, 0, 0), new b(0, 0, 0), new b(0, 0, 0)]), i = new lt({ color: n, transparent: true, opacity: 0.2, depthTest: false }), t = new Eo(o, i);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, oe = J(3462041), ge = J(16724804), ye = J(6333946), ke = new Ge();
  ke.frustumCulled = false, ke.visible = false, u.add(ke), ke.add(oe, ge, ye);
  const Ve = (n) => {
    const o = new Wt(1, 1), i = new Oe({ color: n, transparent: true, opacity: 0.06, side: vt, depthWrite: false }), t = new Ue(o, i);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, Ae = Ve(3462041), $e = Ve(16724804), Re = Ve(6333946);
  ke.add(Ae, $e, Re);
  const He = (n, o, i, t) => {
    n.scale.set(2 * t, 2 * t, 1), i === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : i === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, ze = document.createElement("div");
  ze.id = "hk-refplane-badge", ze.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(ze), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, ke.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, i = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = i[i.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0], l = window.__hekatanOrthoExt ?? 8;
      Ze(oe, s, "xy", l), Ze(ge, s, "xz", l), Ze(ye, s, "yz", l), He(Ae, s, "xy", l), He($e, s, "xz", l), He(Re, s, "yz", l), Ae.material.opacity = 0.05, $e.material.opacity = 0.05, Re.material.opacity = 0.05;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    g();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !ke.visible) {
      g();
      return;
    }
    const o = window.__hekatanOrthoAnchor, i = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = i[i.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0];
    Ze(oe, s, "xy", n), Ze(ge, s, "xz", n), Ze(ye, s, "yz", n), He(Ae, s, "xy", n), He($e, s, "xz", n), He(Re, s, "yz", n), g();
  };
  const rt = (n) => {
    if (Ae.material.opacity = n === "xy" ? 0.09 : 0.025, $e.material.opacity = n === "xz" ? 0.09 : 0.025, Re.material.opacity = n === "yz" ? 0.09 : 0.025, n) {
      const r = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      ze.style.background = r.bg, ze.style.color = r.text, ze.textContent = `\u25A6 Plano ${n.toUpperCase()}`, ze.style.display = "block";
    } else ze.style.display = "none";
  }, Ze = (n, o, i, t) => {
    let r;
    i === "xy" ? r = [new b(o[0] - t, o[1] - t, o[2]), new b(o[0] + t, o[1] - t, o[2]), new b(o[0] + t, o[1] + t, o[2]), new b(o[0] - t, o[1] + t, o[2]), new b(o[0] - t, o[1] - t, o[2])] : i === "xz" ? r = [new b(o[0] - t, o[1], o[2] - t), new b(o[0] + t, o[1], o[2] - t), new b(o[0] + t, o[1], o[2] + t), new b(o[0] - t, o[1], o[2] + t), new b(o[0] - t, o[1], o[2] - t)] : r = [new b(o[0], o[1] - t, o[2] - t), new b(o[0], o[1] + t, o[2] - t), new b(o[0], o[1] + t, o[2] + t), new b(o[0], o[1] - t, o[2] + t), new b(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(r);
  };
  let je = null;
  window.__hekatanAxisLock = () => je;
  let st = null;
  const et = document.createElement("div");
  et.id = "hk-axis-lock-badge", et.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "padding:4px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(20px,18px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(et);
  const Lt = () => {
    if (!je) {
      et.style.display = "none";
      return;
    }
    const n = { x: "#ff3344", y: "#34d399", z: "#60a5fa" };
    et.style.background = "rgba(15,23,42,0.92)", et.style.color = n[je], et.style.border = `1.5px solid ${n[je]}`, et.textContent = `\u{1F512} LOCK ${je.toUpperCase()}`, et.style.display = "block";
  };
  window.addEventListener("keydown", (n) => {
    var _a, _b, _c, _d;
    const o = document.activeElement;
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== B) return;
    const i = n.key.toLowerCase(), t = (_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool;
    if (n.key === "Enter" && t === "polyarea" && re.length >= 3) {
      const r = cn();
      pe(`\u2713 \xC1rea libre mallada \u2014 ${r} shells Q4 creados.`), n.preventDefault();
      return;
    }
    if (i === "x" || i === "y" || i === "z") je = je === i ? null : i, Lt(), n.preventDefault();
    else if (n.key === "Escape") {
      const r = document.activeElement;
      r && (r.tagName === "INPUT" || r.tagName === "TEXTAREA") && r.blur(), ho(), n.preventDefault();
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
  const Xe = new b(), Te = new b(), _e = new b(), Ye = (n) => {
    if (!je) return null;
    const o = n[0], i = n[1], t = n[2];
    return je === "x" ? (Xe.set(o - 1e4, i, t), Te.set(o + 1e4, i, t)) : je === "y" ? (Xe.set(o, i - 1e4, t), Te.set(o, i + 1e4, t)) : (Xe.set(o, i, t - 1e4), Te.set(o, i, t + 1e4)), M.ray.distanceSqToSegment(Xe, Te, null, _e), _e;
  };
  window.__hekatanProjectOnAxis = Ye;
  const ue = new St(new me().setFromPoints([new b(0, 0, 0), new b(0, 0, 0)]), new lt({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  ue.renderOrder = 998, ue.frustumCulled = false, ue.visible = false, u.add(ue);
  let Ne = -1, We = -1, dt = -1;
  const xe = /* @__PURE__ */ new Set();
  window.__hekatanSelection = xe;
  const Le = new St(new me().setFromPoints([new b(), new b()]), new lt({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  Le.renderOrder = 997, Le.frustumCulled = false, Le.visible = false, u.add(Le);
  const qe = new Ue(new rn(0.02, 12, 12), new Oe({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  qe.renderOrder = 998, qe.visible = false, u.add(qe);
  const pt = (n) => {
    const o = m();
    if (o.isOrthographicCamera) {
      const t = o, r = (t.top - t.bottom) / t.zoom;
      return Math.max(0.05, r * 6e-3);
    }
    const i = o.position.distanceTo(n);
    return Math.max(0.05, i / 10);
  }, Dt = () => {
    qe.visible && qe.scale.setScalar(pt(qe.position));
  }, ht = new Ge();
  ht.frustumCulled = false, u.add(ht);
  const zt = 2282478;
  let tt = null;
  const Ht = (n, o, i, t) => {
    if (!e.points) return -1;
    const r = e.points.rawVal;
    let s = -1, l = t;
    for (let f = 0; f < r.length; f++) {
      const h = r[f];
      if (!h) continue;
      const S = Math.hypot(n - h[0], o - h[1], i - h[2]);
      S < l && (l = S, s = f);
    }
    return s;
  }, Bt = () => {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    for (; ht.children.length; ) {
      const l = ht.children.pop();
      (_b = (_a = l.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = l.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const l of xe) {
      const [f, ...h] = l.split(":");
      if (f === "pt") {
        const S = n[+h[0]];
        if (!S) continue;
        const k = new Ue(new rn(0.025, 12, 12), new Oe({ color: zt, transparent: true, opacity: 0.9, depthTest: false }));
        k.position.set(S[0], S[1], S[2]), k.renderOrder = 999, k.__isSelectionPt = true, ht.add(k);
      } else if (f === "seg") {
        const S = o[+h[0]], k = n[S == null ? void 0 : S[+h[1]]], d = n[S == null ? void 0 : S[+h[1] + 1]];
        if (!k || !d) continue;
        const y = new me().setFromPoints([new b(k[0], k[1], k[2]), new b(d[0], d[1], d[2])]), P = new St(y, new lt({ color: zt, transparent: true, opacity: 0.95, depthTest: false }));
        P.renderOrder = 999, ht.add(P);
      } else if (f === "poly") {
        const k = o[+h[0]].map((P) => {
          const U = n[P];
          return U ? new b(U[0], U[1], U[2]) : null;
        }).filter(Boolean);
        if (k.length < 2) continue;
        const d = new me().setFromPoints(k), y = new St(d, new lt({ color: zt, transparent: true, opacity: 0.95, depthTest: false }));
        y.renderOrder = 999, ht.add(y);
      } else if (f === "aux") {
        const S = t[+h[0]];
        if (!S || S.length !== 6) continue;
        const k = new me().setFromPoints([new b(S[0], S[1], S[2]), new b(S[3], S[4], S[5])]), d = new St(k, new lt({ color: zt, transparent: true, opacity: 0.95, depthTest: false }));
        d.renderOrder = 999, ht.add(d);
      }
    }
    const r = window.__hekatanUpdateSelectionPtScale;
    r && r();
    const s = window.__hekatanRefreshPropsPane;
    s && s();
    try {
      (_h = window.__hekatanUpdateSelectionPtScale) == null ? void 0 : _h.call(window);
    } catch {
    }
    g();
  };
  window.__hekatanRefreshSelection = Bt, window.__hekatanClearSelection = () => {
    xe.clear(), Bt();
  };
  const tn = (n, o, i, t, r, s, l, f, h) => {
    const S = l - t, k = f - r, d = h - s, y = S * S + k * k + d * d;
    if (y < 1e-12) return Math.hypot(n - t, o - r, i - s);
    let P = ((n - t) * S + (o - r) * k + (i - s) * d) / y;
    P = Math.max(0, Math.min(1, P));
    const U = t + P * S, K = r + P * k, H = s + P * d;
    return Math.hypot(n - U, o - K, i - H);
  }, qt = (n, o, i, t) => {
    if (!e.polylines) return null;
    const r = e.polylines.rawVal, s = e.points.rawVal;
    let l = -1, f = -1, h = t;
    for (let S = 0; S < r.length; S++) {
      const k = r[S];
      for (let d = 0; d < k.length - 1; d++) {
        const y = s[k[d]], P = s[k[d + 1]];
        if (!y || !P) continue;
        const U = tn(n, o, i, y[0], y[1], y[2], P[0], P[1], P[2]);
        U < h && (h = U, l = S, f = d);
      }
    }
    return l >= 0 ? { polyIdx: l, segIdx: f, dist: h } : null;
  }, Jt = (n, o, i, t) => {
    const r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? (r == null ? void 0 : r.val) ?? r ?? [];
    let l = -1, f = t;
    for (let h = 0; h < s.length; h++) {
      const S = s[h];
      if (!S || S.length !== 6) continue;
      const k = tn(n, o, i, S[0], S[1], S[2], S[3], S[4], S[5]);
      k < f && (f = k, l = h);
    }
    return l;
  }, En = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      ue.visible = false;
      return;
    }
    ue.geometry.setFromPoints([new b(t[0], t[1], t[2]), new b(t[3], t[4], t[5])]), ue.visible = true;
  }, $n = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const i = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!i || i.length < 2) {
      ue.visible = false;
      return;
    }
    const r = ((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false, s = [];
    if (r || o < 0 || o >= i.length - 1) for (const l of i) {
      const f = t[l];
      f && s.push(new b(f[0], f[1], f[2]));
    }
    else {
      const l = t[i[o]], f = t[i[o + 1]];
      l && s.push(new b(l[0], l[1], l[2])), f && s.push(new b(f[0], f[1], f[2]));
    }
    ue.geometry.setFromPoints(s), ue.visible = true;
  }, nn = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const i = o.filter((h, S) => S !== n), t = /* @__PURE__ */ new Set();
    for (const h of i) for (const S of h) t.add(S);
    const r = e.points.rawVal, s = /* @__PURE__ */ new Map(), l = [];
    for (let h = 0; h < r.length; h++) t.has(h) && (s.set(h, l.length), l.push(r[h]));
    const f = i.map((h) => h.map((S) => s.get(S)).filter((S) => S !== void 0));
    e.points.val = l, e.polylines.val = f, e.areas && (e.areas.val = e.areas.rawVal.filter((h) => h !== n).map((h) => h > n ? h - 1 : h)), ue.visible = false, Ne = -1, We = -1;
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
  }, In = (n, o) => {
    var _a, _b, _c;
    if (!e.polylines) return;
    const i = e.polylines.rawVal;
    if (n < 0 || n >= i.length) return;
    if (((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false) {
      nn(n);
      return;
    }
    const r = i[n];
    if (o < 0 || o >= r.length - 1) return;
    if (r.length === 2) {
      nn(n);
      return;
    }
    let s;
    o === 0 ? s = [r.slice(1)] : o === r.length - 2 ? s = [r.slice(0, -1)] : s = [r.slice(0, o + 1), r.slice(o + 1)];
    const l = [...i.slice(0, n), ...s, ...i.slice(n + 1)], f = /* @__PURE__ */ new Set();
    for (const y of l) for (const P of y) f.add(P);
    const h = e.points.rawVal, S = /* @__PURE__ */ new Map(), k = [];
    for (let y = 0; y < h.length; y++) f.has(y) && (S.set(y, k.length), k.push(h[y]));
    const d = l.map((y) => y.map((P) => S.get(P)).filter((P) => P !== void 0));
    if (e.points.val = k, e.polylines.val = d, e.areas) {
      const y = s.length - 1;
      e.areas.val = e.areas.rawVal.map((P) => P > n ? P + y : P);
    }
    ue.visible = false, Ne = -1, We = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  ne.geometry.setAttribute("position", new ft(e.points.rawVal.flat(), 3)), ne.geometry.computeBoundingSphere(), ne.frustumCulled = false, be.frustumCulled = false, u.add(be), Y.position.set(0, 0, 0), Y.rotateX(Math.PI / 2), Y.geometry.rotateX(Math.PI / 2), Y.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, i) => {
    if (e.points.val = [...e.points.rawVal, [n, o, i]], e.polylines) {
      const t = e.polylines.rawVal, r = t.length ? t[t.length - 1] : [];
      e.polylines.val = [...t.slice(0, -1), [...r, e.points.rawVal.length - 1]];
    }
  }, window.__hekatanDrawNewPoly = () => {
    var _a;
    if (!e.polylines) return;
    const n = e.polylines.rawVal;
    ((_a = n[n.length - 1]) == null ? void 0 : _a.length) !== 0 && (e.polylines.val = [...n, []]);
  }, window.__hekatanDrawCircle = (n, o, i, t, r = window.__hekatanArcSegs ?? 12, s = "xy") => {
    var _a;
    const l = Math.max(4, Math.round(r)), f = e.points.rawVal.length, h = [];
    for (let S = 0; S < l; S++) {
      const k = 2 * Math.PI * S / l, d = t * Math.cos(k), y = t * Math.sin(k);
      let P;
      s === "xy" ? P = [n + d, o + y, i] : s === "xz" ? P = [n + d, o, i + y] : P = [n, o + d, i + y], h.push(P);
    }
    if (e.points.val = [...e.points.rawVal, ...h], e.polylines) {
      const S = [...h.map((d, y) => f + y), f], k = e.polylines.rawVal;
      ((_a = k[k.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...k, S, []] : e.polylines.val = [...k.slice(0, -1), S, []];
    }
  }, window.__hekatanDrawArc = (n, o, i, t = window.__hekatanArcSegs ?? 12) => {
    const r = Math.max(4, Math.round(t)), s = new b(...n), l = new b(...o), f = new b(...i), h = new b().subVectors(l, s), S = new b().subVectors(f, s), k = new b().crossVectors(h, S).normalize(), d = new b().addVectors(s, l).multiplyScalar(0.5), y = new b().addVectors(l, f).multiplyScalar(0.5), P = new b().crossVectors(h, k).normalize(), U = new b().crossVectors(new b().subVectors(f, l), k).normalize(), K = new b().subVectors(y, d), H = P.x * U.y - P.y * U.x;
    let R;
    if (Math.abs(H) > 1e-9) {
      const De = (K.x * U.y - K.y * U.x) / H;
      R = new b().addVectors(d, P.clone().multiplyScalar(De));
    } else R = d.clone();
    const ae = s.distanceTo(R), le = new b().subVectors(s, R), we = new b().subVectors(f, R), Ie = Math.acos(Math.max(-1, Math.min(1, le.dot(we) / (ae * ae)))), ve = e.points.rawVal.length, Me = [], wt = k.clone();
    for (let De = 0; De <= r; De++) {
      const Ce = De / r, Ke = Ie * Ce, at = new qn().setFromAxisAngle(wt, Ke), yt = le.clone().applyQuaternion(at).add(R);
      Me.push([yt.x, yt.y, yt.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...Me], e.polylines) {
      const De = Me.map((Ke, at) => ve + at), Ce = e.polylines.rawVal;
      e.polylines.val = [...Ce.slice(0, -1), De, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, i = 1, t = 6, r = 6) => {
    const s = Math.min(n[0], o[0]), l = Math.max(n[0], o[0]), f = Math.min(n[1], o[1]), h = Math.max(n[1], o[1]), S = (n[2] + o[2]) / 2, k = l - s, d = h - f, y = Math.min(i, k / 2 - 0.01, d / 2 - 0.01);
    if (y <= 0) return;
    const P = e.points.rawVal.length, U = [], K = [], H = (R, ae) => {
      U.push([R, ae, S]), K.push(P + U.length - 1);
    };
    for (let R = 0; R <= r; R++) H(s + y + (k - 2 * y) * R / r, f);
    for (let R = 1; R <= t; R++) {
      const ae = -Math.PI / 2 + Math.PI / 2 * R / t;
      H(l - y + y * Math.cos(ae), f + y + y * Math.sin(ae));
    }
    for (let R = 1; R <= r; R++) H(l, f + y + (d - 2 * y) * R / r);
    for (let R = 1; R <= t; R++) {
      const ae = 0 + Math.PI / 2 * R / t;
      H(l - y + y * Math.cos(ae), h - y + y * Math.sin(ae));
    }
    for (let R = 1; R <= r; R++) H(l - y - (k - 2 * y) * R / r, h);
    for (let R = 1; R <= t; R++) {
      const ae = Math.PI / 2 + Math.PI / 2 * R / t;
      H(s + y + y * Math.cos(ae), h - y + y * Math.sin(ae));
    }
    for (let R = 1; R <= r; R++) H(s, h - y - (d - 2 * y) * R / r);
    for (let R = 1; R <= t; R++) {
      const ae = Math.PI + Math.PI / 2 * R / t;
      H(s + y + y * Math.cos(ae), f + y + y * Math.sin(ae));
    }
    if (K.push(P), e.points.val = [...e.points.rawVal, ...U], e.polylines) {
      const R = e.polylines.rawVal;
      e.polylines.val = [...R.slice(0, -1), K, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const i = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], f = o[1], h = o[2];
    let S;
    if (Math.abs(s - h) < 1e-6 ? S = [[t, r, s], [l, r, s], [l, f, s], [t, f, s]] : Math.abs(r - f) < 1e-6 ? S = [[t, r, s], [l, r, s], [l, r, h], [t, r, h]] : S = [[t, r, s], [t, f, s], [t, f, h], [t, r, h]], e.points.val = [...e.points.rawVal, ...S], e.polylines) {
      const k = [i, i + 1, i + 2, i + 3, i], d = e.polylines.rawVal;
      e.polylines.val = [...d.slice(0, -1), k, []];
    }
  }, window.__hekatanDrawRectArea = (n, o) => {
    var _a;
    const i = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], f = o[1], h = o[2];
    let S;
    if (_ && e.gridTarget) {
      const k = e.gridTarget.rawVal, d = new xn(...k.rotation), y = new b(1, 0, 0).applyEuler(d), P = new b(0, 1, 0).applyEuler(d), U = new b(...k.position), K = new b(t, r, s), H = new b(l, f, h), R = K.clone().sub(U).dot(y), ae = K.clone().sub(U).dot(P), le = H.clone().sub(U).dot(y), we = H.clone().sub(U).dot(P), Ie = (ve, Me) => U.clone().addScaledVector(y, ve).addScaledVector(P, Me).toArray();
      S = [Ie(R, ae), Ie(le, ae), Ie(le, we), Ie(R, we)];
    } else Math.abs(s - h) < 1e-6 ? S = [[t, r, s], [l, r, s], [l, f, s], [t, f, s]] : Math.abs(r - f) < 1e-6 ? S = [[t, r, s], [l, r, s], [l, r, h], [t, r, h]] : S = [[t, r, s], [t, f, s], [t, f, h], [t, r, h]];
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...S], e.polylines) {
      const k = e.polylines.rawVal, d = k.length - 1, y = [i, i + 1, i + 2, i + 3, i];
      e.polylines.val = [...k.slice(0, -1), y, []], e.areas && (e.areas.val = [...e.areas.rawVal, d]);
    }
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    g();
  }, window.__hekatanMeshPolyArea = (n, o) => {
    var _a;
    const i = n.length;
    if (i < 3) return 0;
    let t = 0, r = 0, s = 0;
    for (let Se = 0; Se < i; Se++) {
      const Be = n[Se], Qe = n[(Se + 1) % i];
      t += (Be[1] - Qe[1]) * (Be[2] + Qe[2]), r += (Be[2] - Qe[2]) * (Be[0] + Qe[0]), s += (Be[0] - Qe[0]) * (Be[1] + Qe[1]);
    }
    const l = Math.hypot(t, r, s) || 1;
    t /= l, r /= l, s /= l;
    let f = n[1][0] - n[0][0], h = n[1][1] - n[0][1], S = n[1][2] - n[0][2];
    const k = Math.hypot(f, h, S) || 1;
    f /= k, h /= k, S /= k;
    let d = r * S - s * h, y = s * f - t * S, P = t * h - r * f;
    const U = Math.hypot(d, y, P) || 1;
    d /= U, y /= U, P /= U;
    const K = n[0], H = (Se) => [(Se[0] - K[0]) * f + (Se[1] - K[1]) * h + (Se[2] - K[2]) * S, (Se[0] - K[0]) * d + (Se[1] - K[1]) * y + (Se[2] - K[2]) * P], R = (Se, Be) => [K[0] + Se * f + Be * d, K[1] + Se * h + Be * y, K[2] + Se * S + Be * P], ae = n.map(H);
    let le = 1 / 0, we = -1 / 0, Ie = 1 / 0, ve = -1 / 0;
    for (const [Se, Be] of ae) Se < le && (le = Se), Se > we && (we = Se), Be < Ie && (Ie = Be), Be > ve && (ve = Be);
    const Me = we - le, wt = ve - Ie;
    if (Me < 1e-6 || wt < 1e-6) return 0;
    let De = o && o > 0 ? o : 0.5;
    for (; Me / De * (wt / De) > 2500; ) De *= 2;
    De = Math.min(De, Math.min(Me, wt));
    const Ce = (Se, Be) => {
      let Qe = false;
      for (let Tt = 0, Kt = ae.length - 1; Tt < ae.length; Kt = Tt++) {
        const [an, mn] = ae[Tt], [ln, wn] = ae[Kt];
        mn > Be != wn > Be && Se < (ln - an) * (Be - mn) / (wn - mn) + an && (Qe = !Qe);
      }
      return Qe;
    }, Ke = Math.max(1, Math.round(Me / De)), at = Math.max(1, Math.round(wt / De)), yt = Me / Ke, Pt = wt / at, Ut = /* @__PURE__ */ new Map(), $t = [], xt = e.points.rawVal.length, At = (Se, Be) => {
      const Qe = Se + "," + Be, Tt = Ut.get(Qe);
      if (Tt !== void 0) return Tt;
      const Kt = xt + $t.length;
      return $t.push(R(le + Se * yt, Ie + Be * Pt)), Ut.set(Qe, Kt), Kt;
    }, _t = [];
    for (let Se = 0; Se < Ke; Se++) for (let Be = 0; Be < at; Be++) {
      if (!Ce(le + (Se + 0.5) * yt, Ie + (Be + 0.5) * Pt)) continue;
      const Qe = At(Se, Be), Tt = At(Se + 1, Be), Kt = At(Se + 1, Be + 1), an = At(Se, Be + 1);
      _t.push([Qe, Tt, Kt, an]);
    }
    if (!_t.length) return 0;
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...$t], e.polylines && e.areas) {
      let Se = e.polylines.rawVal.slice();
      Se.length && Se[Se.length - 1].length === 0 && (Se = Se.slice(0, -1));
      const Be = [];
      for (const Qe of _t) Be.push(Se.length), Se.push([Qe[0], Qe[1], Qe[2], Qe[3], Qe[0]]);
      Se.push([]), e.polylines.val = Se, e.areas.val = [...e.areas.rawVal, ...Be];
    }
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    return g(), _t.length;
  };
  const cn = () => {
    if (re.length < 3) return re = [], N.visible = false, g(), 0;
    const n = window.__hekatanMeshPolyArea(re.slice());
    return re = [], N.visible = false, g(), n;
  };
  window.__hekatanFinalizePolyArea = cn, window.__hekatanSetInclinedPlaneFrom3 = (n, o, i) => {
    var _a;
    const t = new b(n[0], n[1], n[2]), r = new b(o[0], o[1], o[2]), s = new b(i[0], i[1], i[2]), l = new b().subVectors(r, t).cross(new b().subVectors(s, t));
    if (l.lengthSq() < 1e-9) return false;
    l.normalize();
    const f = new qn().setFromUnitVectors(new b(0, 0, 1), l), h = new xn().setFromQuaternion(f);
    e.gridTarget && (e.gridTarget.val = { position: [t.x, t.y, t.z], rotation: [h.x, h.y, h.z] }), _ = true;
    const S = new b().addVectors(t, r).add(s).multiplyScalar(1 / 3), k = Math.max(t.distanceTo(r), t.distanceTo(s), r.distanceTo(s)) * 2.2 + 4, d = k / 2;
    Pe.geometry.dispose(), Pe.geometry = new Wt(k, k), he.geometry.dispose(), he.geometry = new vo(new Wt(k, k)), nt(d, 1), ce.position.copy(S), ce.quaternion.copy(f), ce.scale.set(1, 1, 1), ce.visible = true;
    try {
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
    } catch {
    }
    return g(), true;
  }, window.__hekatanResetPlaneXY = () => {
    e.gridTarget && (e.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, 0] }), _ = false, ce.visible = false, g();
  };
  const Ct = new Ge();
  Ct.visible = false, u.add(Ct), window.__hekatanShowAxes = (n, o, i = 12, t = 2) => {
    var _a, _b;
    for (; Ct.children.length; ) {
      const k = Ct.children.pop();
      (_a = k.geometry) == null ? void 0 : _a.dispose(), (_b = k.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const r = Math.min(...o) - t, s = Math.max(...o) + t, l = Math.min(...n) - t, f = Math.max(...n) + t, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", S = (k, d, y, P, U) => {
      const K = document.createElement("canvas");
      K.width = 64, K.height = 32;
      const H = K.getContext("2d");
      H.fillStyle = U, H.font = "bold 22px sans-serif", H.textAlign = "center", H.fillText(k, 32, 26);
      const R = new Mo(K), ae = new bo({ map: R, transparent: true }), le = new _o(ae);
      return le.position.set(d, y, P), le.scale.set(1.2, 0.6, 1), le;
    };
    n.forEach((k, d) => {
      const y = d < h.length ? h[d] : `X${d}`, P = new me().setFromPoints([new b(k, r, 0), new b(k, s, 0), new b(k, r, 0), new b(k, r, i)]), U = new yn({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), K = new Xt(P, U);
      K.computeLineDistances(), Ct.add(K), Ct.add(S(y, k, r - 0.5, 0, "#60a5fa")), Ct.add(S(y, k, s + 0.5, 0, "#60a5fa"));
    }), o.forEach((k, d) => {
      const y = `${d + 1}`, P = new me().setFromPoints([new b(l, k, 0), new b(f, k, 0), new b(l, k, 0), new b(l, k, i)]), U = new yn({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), K = new Xt(P, U);
      K.computeLineDistances(), Ct.add(K), Ct.add(S(y, l - 0.5, k, 0, "#fb7185")), Ct.add(S(y, f + 0.5, k, 0, "#fb7185"));
    }), Ct.visible = true, g();
  }, window.__hekatanHideAxes = () => {
    Ct.visible = false, g();
  };
  const Rt = new Ge();
  Rt.visible = false, u.add(Rt);
  let Yt = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, i = 0, t = 0) => {
    var _a, _b;
    for (; Rt.children.length; ) {
      const s = Rt.children.pop();
      (_a = s.geometry) == null ? void 0 : _a.dispose(), (_b = s.material) == null ? void 0 : _b.dispose();
    }
    Yt.forEach((s) => {
      u.remove(s), s.geometry.dispose(), s.material.dispose();
    }), Yt = [];
    const r = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((s, l) => {
      const f = r[l % r.length], h = o / 2, S = [new b(i - h, t - h, s), new b(i + h, t - h, s), new b(i + h, t + h, s), new b(i - h, t + h, s), new b(i - h, t - h, s)], k = new me().setFromPoints(S), d = new lt({ color: f, transparent: true, opacity: 0.55 });
      Rt.add(new St(k, d));
      const y = document.createElement("canvas");
      y.width = 128, y.height = 32;
      const P = y.getContext("2d");
      P.fillStyle = `#${f.toString(16).padStart(6, "0")}`, P.font = "bold 18px sans-serif", P.fillText(`Z = ${s} m`, 4, 22);
      const U = new Mo(y), K = new bo({ map: U, transparent: true }), H = new _o(K);
      H.position.set(i - h - 1.5, t - h - 1.5, s), H.scale.set(2.5, 0.6, 1), Rt.add(H);
      const R = new Wt(1e4, 1e4), ae = new Oe({ visible: false, side: vt }), le = new Ue(R, ae);
      le.position.set(0, 0, s), le.frustumCulled = false, le.userData = { refPlaneZ: s }, u.add(le), Yt.push(le);
    }), Rt.visible = true, g();
  }, window.__hekatanHideRefPlanes = () => {
    Rt.visible = false, Yt.forEach((n) => {
      n.visible = false;
    }), g();
  };
  const Qt = new Ge();
  Qt.frustumCulled = false, u.add(Qt);
  const Ln = () => {
    var _a, _b, _c, _d;
    for (; Qt.children.length; ) {
      const i = Qt.children.pop();
      (_b = (_a = i.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = i.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const i of o) {
      if (i.length !== 6) continue;
      const t = new me().setFromPoints([new b(i[0], i[1], i[2]), new b(i[3], i[4], i[5])]), r = new yn({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), s = new St(t, r);
      s.computeLineDistances(), Qt.add(s);
    }
  };
  D.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, Ln(), g());
  });
  const Nt = new Ge();
  Nt.frustumCulled = false, u.add(Nt);
  const dn = () => {
    var _a, _b, _c, _d;
    for (; Nt.children.length; ) {
      const i = Nt.children.pop();
      (_b = (_a = i.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = i.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxPoints, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const i of o) {
      if (!i || i.length !== 3) continue;
      const t = new Ue(new rn(0.025, 12, 12), new Oe({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(i[0], i[1], i[2]), t.renderOrder = 996, t.scale.setScalar(pt(t.position)), Nt.add(t);
    }
  };
  D.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, dn(), g());
  }), c.addEventListener("change", () => {
    Nt.children.forEach((n) => {
      n.scale.setScalar(pt(n.position));
    });
  }), window.__hekatanRenderAuxPoints = dn;
  const mt = new Ge(), Do = new Ue(new rn(0.01, 12, 12), new Oe({ color: 16724804, transparent: true, opacity: 0.95 })), Yo = new Ue(new rn(0.015, 12, 12), new Oe({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  mt.add(Do, Yo);
  const on = 0.08, Bn = (n, o, i) => {
    const t = new me().setFromPoints([new b(...n), new b(...o)]);
    return new St(t, new lt({ color: i, transparent: true, opacity: 0.7 }));
  };
  mt.add(Bn([-on, 0, 0], [on, 0, 0], 16711680)), mt.add(Bn([0, -on, 0], [0, on, 0], 65280)), mt.add(Bn([0, 0, -on], [0, 0, on], 35071)), mt.visible = false, mt.frustumCulled = false, u.add(mt);
  const ao = 40, No = 2.5, Rn = () => {
    if (!mt.visible) return;
    const o = m().position.distanceTo(mt.position), i = Math.max(0.05, Math.min(No, o / ao));
    mt.scale.setScalar(i);
  }, io = () => {
    ht.children.length !== 0 && ht.children.forEach((n) => {
      if (!n.__isSelectionPt) return;
      const o = n;
      o.scale.setScalar(pt(o.position) * 1.8);
    });
  };
  window.__hekatanUpdateSelectionPtScale = io, c.addEventListener("change", () => {
    Rn(), qe.visible && Dt();
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = m().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / ao));
    }
    io();
  }), window.__hekatanShowSnap = (n, o, i) => {
    mt.position.set(n, o, i), mt.visible = true, Rn(), g();
  }, window.__hekatanHideSnap = () => {
    mt.visible = false, g();
  }, x.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(z, o);
    const i = O();
    if (i.length) {
      const t = i[0].point, r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, r);
      if (s) po(s.type, s.x, s.y, s.z), mt.position.set(s.x, s.y, s.z), mt.visible = true, t.set(s.x, s.y, s.z);
      else {
        Yn();
        const k = window.__hekatanSnapEnabled !== false, d = window.__hekatanSnap2D ?? 0.5;
        k && d > 0 && (t.x = Math.round(t.x / d) * d, t.y = Math.round(t.y / d) * d, t.z = Math.round(t.z / d) * d), mt.position.copy(t), mt.visible = true;
      }
      Rn();
      const l = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (l === "select" || !l) {
        const k = (window.__hekatanSnap2D ?? 0.5) * 1.5, d = Ht(t.x, t.y, t.z, k), y = qt(t.x, t.y, t.z, k), P = Jt(t.x, t.y, t.z, k);
        if (d >= 0) {
          const R = e.points.rawVal[d];
          qe.position.set(R[0], R[1], R[2]), qe.visible = true, Dt(), Le.visible = false, tt = { kind: "pt", a: d };
        } else if (y) {
          const R = e.points.rawVal, ae = e.polylines.rawVal[y.polyIdx], le = R[ae[y.segIdx]], we = R[ae[y.segIdx + 1]];
          Le.geometry.setFromPoints([new b(le[0], le[1], le[2]), new b(we[0], we[1], we[2])]), Le.visible = true, qe.visible = false, tt = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(y.polyIdx)) ?? false ? { kind: "poly", a: y.polyIdx } : { kind: "seg", a: y.polyIdx, b: y.segIdx };
        } else if (P >= 0) {
          const ae = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[P];
          ae && (Le.geometry.setFromPoints([new b(ae[0], ae[1], ae[2]), new b(ae[3], ae[4], ae[5])]), Le.visible = true, qe.visible = false, tt = { kind: "aux", a: P });
        } else Le.visible = false, qe.visible = false, tt = null;
        q.style.left = n.clientX + "px", q.style.top = n.clientY + "px", q.style.display = "block";
        let U = t;
        if ((tt == null ? void 0 : tt.kind) === "pt") {
          const R = e.points.rawVal[tt.a];
          R && (U = new b(R[0], R[1], R[2]));
        }
        const K = `X=${U.x.toFixed(2)} Y=${U.y.toFixed(2)} Z=${U.z.toFixed(2)}`;
        if (tt) {
          const R = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          q.textContent = `${K}  \xB7  \u{1F5B1} Click \u2192 ${R[tt.kind]}`;
        } else q.textContent = K;
        const H = document.getElementById("hk-coord-fixed");
        H && (H.textContent = K), ie.visible = false, ot.visible = false, g();
        return;
      }
      if (l === "delete") {
        const k = (window.__hekatanSnap2D ?? 0.5) * 1.5, d = qt(t.x, t.y, t.z, k), y = Jt(t.x, t.y, t.z, k);
        let P = false;
        if (y >= 0) if (!d) P = true;
        else {
          const R = window.__hekatanDrawingAuxLines, le = ((R == null ? void 0 : R.rawVal) ?? (R == null ? void 0 : R.val) ?? R ?? [])[y];
          tn(t.x, t.y, t.z, le[0], le[1], le[2], le[3], le[4], le[5]) < d.dist && (P = true);
        }
        P ? (dt = y, Ne = -1, We = -1, En(y)) : d ? (Ne = d.polyIdx, We = d.segIdx, dt = -1, $n(d.polyIdx, d.segIdx)) : (Ne = -1, We = -1, dt = -1, ue.visible = false), ie.visible = false, ot.visible = false, E(), q.style.left = n.clientX + "px", q.style.top = n.clientY + "px", q.style.display = "block";
        const U = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let K = "";
        P ? K = `\u{1F5D1} l\xEDnea aux #${dt + 1}` : d ? K = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(d.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${d.polyIdx + 1}` : `\u{1F5D1} seg ${d.segIdx + 1} / poly #${d.polyIdx + 1}` : K = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", q.textContent = `${U}  \xB7  ${K}`;
        const H = document.getElementById("hk-coord-fixed");
        H && (H.textContent = U), g();
        return;
      } else ue.visible = false, Ne = -1, dt = -1;
      q.style.left = n.clientX + "px", q.style.top = n.clientY + "px", q.style.display = "block";
      const f = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], h = f[f.length - 1] ?? [], S = e.points.rawVal ?? [];
      if (h.length > 0 && S[h[h.length - 1]]) {
        const k = h[h.length - 1], d = S[k];
        let y = je;
        if (st = null, !y && window.__hekatanAxisSnap !== false) {
          const Ce = x.getBoundingClientRect(), Ke = n.clientX, at = n.clientY, yt = ((_k = settings.gridSize) == null ? void 0 : _k.rawVal) ?? 10, Pt = new b(d[0], d[1], d[2]), Ut = [["x", new b(1, 0, 0)], ["y", new b(0, 1, 0)], ["z", new b(0, 0, 1)]], $t = (At) => {
            const _t = At.clone().project(o);
            return { x: (_t.x * 0.5 + 0.5) * Ce.width + Ce.left, y: (-_t.y * 0.5 + 0.5) * Ce.height + Ce.top };
          };
          let xt = null;
          for (const [At, _t] of Ut) {
            const Se = $t(Pt.clone().addScaledVector(_t, -yt)), Be = $t(Pt.clone().addScaledVector(_t, yt)), Qe = Be.x - Se.x, Tt = Be.y - Se.y, Kt = Ke - Se.x, an = at - Se.y, mn = Qe * Qe + Tt * Tt || 1;
            let ln = (Kt * Qe + an * Tt) / mn;
            ln = Math.max(0, Math.min(1, ln));
            const wn = Math.hypot(Ke - (Se.x + ln * Qe), at - (Se.y + ln * Tt));
            if (xt === null || wn < xt.dpx) {
              const Kn = M.ray, mo = Pt.clone().sub(Kn.origin), Gn = _t.dot(Kn.direction), wo = _t.dot(mo), Ho = Kn.direction.dot(mo), yo = 1 - Gn * Gn, qo = Math.abs(yo) < 1e-6 ? -wo : (Gn * Ho - wo) / yo;
              xt = { axis: At, dpx: wn, pt: Pt.clone().addScaledVector(_t, qo) };
            }
          }
          xt && xt.dpx <= 12 && (t.copy(xt.pt), y = xt.axis, st = xt.pt.clone());
        }
        const P = !!window.__hekatanOrthoMode;
        if (!y && P) {
          const Ce = Math.abs(t.x - d[0]), Ke = Math.abs(t.y - d[1]), at = Math.abs(t.z - d[2]), yt = (_l = i[0]) == null ? void 0 : _l.object;
          let Pt = null;
          yt === Ae ? Pt = "xy" : yt === $e ? Pt = "xz" : yt === Re && (Pt = "yz"), Pt === "xy" ? y = Ce >= Ke ? "x" : "y" : Pt === "xz" ? y = Ce >= at ? "x" : "z" : Pt === "yz" ? y = Ke >= at ? "y" : "z" : y = Ce >= Ke && Ce >= at ? "x" : Ke >= at ? "y" : "z";
        }
        const U = window.__hekatanPolarTrack !== false;
        if (!y && U) {
          const Ce = t.x - d[0], Ke = t.y - d[1], at = t.z - d[2], yt = Math.hypot(Ce, Ke, at);
          if (yt > 1e-3) {
            const Ut = Math.tan(6 * Math.PI / 180) * yt, $t = Math.hypot(Ke, at), xt = Math.hypot(Ce, at), At = Math.hypot(Ce, Ke), _t = [["x", $t], ["y", xt], ["z", At]];
            _t.sort((Se, Be) => Se[1] - Be[1]), _t[0][1] <= Ut && (y = _t[0][0]);
          }
        }
        if (y) {
          const Ce = d[0], Ke = d[1], at = d[2];
          y === "x" ? t.set(t.x, Ke, at) : y === "y" ? t.set(Ce, t.y, at) : t.set(Ce, Ke, t.z);
          const yt = !!je, Ut = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[y];
          et.style.background = "rgba(15,23,42,0.92)", et.style.color = Ut, et.style.border = `1.5px solid ${Ut}`;
          const $t = (_m = i[0]) == null ? void 0 : _m.object;
          let xt = null;
          $t === Ae ? xt = "xy" : $t === $e ? xt = "xz" : $t === Re && (xt = "yz");
          const At = xt ? ` (plano ${xt.toUpperCase()})` : "";
          et.textContent = yt ? `\u{1F512} LOCK ${y.toUpperCase()}${At}` : `\u22A5 ORTO ${y.toUpperCase()}${At}`, et.style.left = n.clientX + 20 + "px", et.style.top = n.clientY + 18 + "px", et.style.transform = "none", et.style.display = "block";
        } else je || (et.style.display = "none");
        const K = Math.hypot(t.x - d[0], t.y - d[1], t.z - d[2]), H = Math.atan2(t.y - d[1], t.x - d[0]) * 180 / Math.PI, R = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        q.textContent = `${R} | \u0394L=${K.toFixed(2)}m ${H.toFixed(0)}\xB0`;
        const ae = document.getElementById("hk-coord-fixed");
        ae && (ae.textContent = R), ie.geometry.setFromPoints([new b(d[0], d[1], d[2]), new b(t.x, t.y, t.z)]), (_n2 = ie.computeLineDistances) == null ? void 0 : _n2.call(ie), ie.visible = true, $(d[0], d[1], d[2], t.x, t.y, t.z);
        const le = window.__hekatanOrthoExt ?? 8, we = window.__hekatanShowOrthoPlanes !== false;
        ke.visible = we, we || rt(null), we && (Ze(oe, d, "xy", le), Ze(ge, d, "xz", le), Ze(ye, d, "yz", le), He(Ae, d, "xy", le), He($e, d, "xz", le), He(Re, d, "yz", le));
        const Ie = we ? M.intersectObjects([Ae, $e, Re], false) : [];
        let ve = null;
        if (Ie.length > 0) {
          const Ce = Ie[0].object;
          Ce === Ae ? ve = "xy" : Ce === $e ? ve = "xz" : Ce === Re && (ve = "yz");
        }
        rt(ve), ve && (ze.style.left = n.clientX + "px", ze.style.top = n.clientY + "px"), C.geometry.setFromPoints([new b(d[0] - le, d[1], d[2]), new b(d[0] + le, d[1], d[2])]), (_o2 = C.computeLineDistances) == null ? void 0 : _o2.call(C), Z.geometry.setFromPoints([new b(d[0], d[1] - le, d[2]), new b(d[0], d[1] + le, d[2])]), (_p = Z.computeLineDistances) == null ? void 0 : _p.call(Z), L.geometry.setFromPoints([new b(d[0], d[1], d[2] - le), new b(d[0], d[1], d[2] + le)]), (_q = L.computeLineDistances) == null ? void 0 : _q.call(L), ot.visible = true;
        const Me = C.material, wt = Z.material, De = L.material;
        y === "x" ? (Me.opacity = 0.95, wt.opacity = 0.1, De.opacity = 0.1) : y === "y" ? (Me.opacity = 0.1, wt.opacity = 0.95, De.opacity = 0.1) : y === "z" ? (Me.opacity = 0.1, wt.opacity = 0.1, De.opacity = 0.95) : (Me.opacity = 0.5, wt.opacity = 0.5, De.opacity = 0.5);
      } else {
        const k = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        q.textContent = k;
        const d = document.getElementById("hk-coord-fixed");
        if (d && (d.textContent = k), ie.visible = false, ot.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(l)) {
          if (I = null, X = null, B.style.left = n.clientX + 20 + "px", B.style.top = n.clientY - 28 + "px", B.style.display = "block", !V) {
            B.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const P = document.activeElement;
            !(P && (P.tagName === "INPUT" || P.tagName === "TEXTAREA") && P !== B) && document.activeElement !== B && B.focus({ preventScroll: true });
            try {
              B.select();
            } catch {
            }
          }
        } else E();
      }
      g();
    } else Yn(), q.style.display = "none", mt.visible = false, ie.visible = false, ot.visible = false, E(), g();
  }), D.derive(() => {
    if (!e.gridTarget) return;
    Bs(a, { position: new b(...e.gridTarget.val.position), quaternion: new qn().setFromEuler(new xn(...e.gridTarget.val.rotation)) }, g), Y.position.set(...e.gridTarget.val.position), Y.quaternion.setFromEuler(new xn(...e.gridTarget.val.rotation)), Y.updateMatrixWorld();
    const n = new b(0, 0, 1).applyEuler(new xn(...e.gridTarget.val.rotation));
    _ = !(Math.abs(n.x) > 0.999 || Math.abs(n.y) > 0.999 || Math.abs(n.z) > 0.999);
  }), D.derive(() => {
    ne.geometry.setAttribute("position", new ft(e.points.val.flat(), 3)), ne.geometry.computeBoundingSphere();
  }), D.derive(() => {
    const n = 0.05 * w * 0.5 * p.val;
    M.params.Points.threshold = 0.4 * n;
  }), D.derive(() => {
    var _a;
    const n = e.points.val ?? [], i = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const s of i) {
      const [l, f, h] = n[s];
      t.push(l, f, h);
    }
    const r = new me();
    r.setAttribute("position", new ft(t, 3)), fe.geometry.dispose(), fe.geometry = r;
  });
  let Xn = false, Ot = 0;
  x.addEventListener("pointerdown", () => {
    Xn = true;
  }), x.addEventListener("pointerup", () => {
    Xn = false;
  }), x.addEventListener("pointermove", () => {
    Xn && Ot++;
  });
  const kt = document.createElement("div");
  kt.id = "hk-window-select", kt.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(kt);
  let Et = null, pn = false, Vt = null;
  const Dn = (n, o, i, t, r) => {
    r ? (kt.style.borderColor = "#34d399", kt.style.borderStyle = "dashed", kt.style.background = "rgba(52, 211, 153, 0.10)") : (kt.style.borderColor = "#22d3ee", kt.style.borderStyle = "solid", kt.style.background = "rgba(34, 211, 238, 0.10)"), kt.style.left = Math.min(n, i) + "px", kt.style.top = Math.min(o, t) + "px", kt.style.width = Math.abs(i - n) + "px", kt.style.height = Math.abs(t - o) + "px", kt.style.display = "block";
  }, lo = (n, o, i, t, r) => {
    var _a, _b, _c, _d;
    const s = Math.min(n, i), l = Math.max(n, i), f = Math.min(o, t), h = Math.max(o, t), S = i < n, k = x.getBoundingClientRect(), d = m();
    d.updateMatrixWorld();
    const y = (ve) => {
      const Me = new b(ve[0], ve[1], ve[2]);
      return Me.project(d), { x: k.left + (Me.x * 0.5 + 0.5) * k.width, y: k.top + (-Me.y * 0.5 + 0.5) * k.height };
    }, P = (ve) => ve.x >= s && ve.x <= l && ve.y >= f && ve.y <= h, U = (ve, Me) => !(ve.x < s && Me.x < s || ve.x > l && Me.x > l || ve.y < f && Me.y < f || ve.y > h && Me.y > h);
    r || xe.clear();
    let K = 0;
    const H = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let ve = 0; ve < H.length; ve++) {
      const Me = H[ve];
      Me && P(y(Me)) && (xe.add(`pt:${ve}`), K++);
    }
    const R = (ve, Me) => S ? P(ve) || P(Me) || U(ve, Me) : P(ve) && P(Me), ae = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], le = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let ve = 0; ve < ae.length; ve++) {
      const Me = ae[ve];
      if (le.includes(ve)) {
        let De;
        if (!S) De = Me.every((Ce) => {
          const Ke = H[Ce];
          return !!Ke && P(y(Ke));
        });
        else {
          De = false;
          for (let Ce = 0; Ce < Me.length - 1; Ce++) {
            const Ke = H[Me[Ce]], at = H[Me[Ce + 1]];
            if (!(!Ke || !at) && R(y(Ke), y(at))) {
              De = true;
              break;
            }
          }
        }
        De && (xe.add(`poly:${ve}`), K++);
      } else for (let De = 0; De < Me.length - 1; De++) {
        const Ce = H[Me[De]], Ke = H[Me[De + 1]];
        !Ce || !Ke || R(y(Ce), y(Ke)) && (xe.add(`seg:${ve}:${De}`), K++);
      }
    }
    const Ie = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let ve = 0; ve < Ie.length; ve++) {
      const Me = Ie[ve];
      if (!Me || Me.length !== 6) continue;
      const wt = y([Me[0], Me[1], Me[2]]), De = y([Me[3], Me[4], Me[5]]);
      R(wt, De) && (xe.add(`aux:${ve}`), K++);
    }
    Bt(), pe(`${S ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${K} item(s) ${r ? "agregados a" : "\u2192"} selecci\xF3n (total ${xe.size})`), kt.style.display = "none";
  }, Mn = () => {
    Vt && (Vt = null, kt.style.display = "none", pe("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = Mn, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && Vt && Mn();
  });
  const ro = () => {
    var _a, _b, _c, _d;
    if (xe.size === 0) return false;
    const n = [...xe], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], i = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? [], l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Set();
    for (const U of n) {
      const [K, ...H] = U.split(":");
      if (K === "pt") l.add(+H[0]);
      else if (K === "poly") f.add(+H[0]);
      else if (K === "seg") {
        const R = +H[0], ae = +H[1];
        h.has(R) || h.set(R, /* @__PURE__ */ new Set()), h.get(R).add(ae);
      } else K === "aux" && S.add(+H[0]);
    }
    let k = 0, d = [], y = [];
    const P = /* @__PURE__ */ new Map();
    for (let U = 0; U < i.length; U++) {
      if (f.has(U)) {
        k++;
        continue;
      }
      P.set(U, d.length);
      const K = h.get(U);
      if (K && K.size > 0) {
        let H = [];
        for (let R = 0; R < i[U].length; R++) H.push(i[U][R]), R < i[U].length - 1 && K.has(R) && (H.length >= 2 && d.push(H), H = [], k++);
        (H.length >= 2 || H.length === 1) && d.push(H);
      } else d.push([...i[U]]);
    }
    if (l.size > 0) {
      const U = [], K = /* @__PURE__ */ new Map();
      for (let R = 0; R < o.length; R++) {
        if (l.has(R)) {
          k++;
          continue;
        }
        K.set(R, U.length), U.push([...o[R]]);
      }
      const H = [];
      for (const R of d) {
        let ae = [];
        for (const le of R) {
          const we = K.get(le);
          we === void 0 ? (ae.length >= 2 && H.push(ae), ae = []) : ae.push(we);
        }
        ae.length >= 2 && H.push(ae);
      }
      d = H, e.points.val = U;
    }
    for (const U of t) {
      const K = P.get(U);
      K !== void 0 && K < d.length && y.push(K);
    }
    if (e.polylines && (e.polylines.val = d), e.areas && (e.areas.val = y), S.size > 0 && r) {
      const U = s.filter((K, H) => !S.has(H));
      "val" in r ? r.val = U : window.__hekatanDrawingAuxLines = U, k += S.size;
    }
    xe.clear(), Bt();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return pe(`\u{1F5D1} ${k} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = ro, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement, i = o && (o.id === "hk3-cmd-input" || o.id === "hk-dyn-input") && o.value === "";
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && !i || xe.size !== 0 && (n.preventDefault(), ro());
  });
  const Ft = document.createElement("div");
  Ft.id = "hk-properties-pane";
  const co = "hk-props-pane-pos";
  let un = null;
  try {
    const n = localStorage.getItem(co);
    n && (un = JSON.parse(n));
  } catch {
  }
  Ft.style.cssText = ["position:fixed", un ? `left:${un.left}px` : "left:14px", un ? `top:${un.top}px` : "top:452px", "transform:none", "width:min(300px, calc(100vw - 32px))", "max-height:calc(100vh - 560px)", "overflow-y:auto", "z-index:201", "box-shadow:0 6px 24px rgba(0,0,0,0.45)", "border-radius:6px", "display:none"].join(";") + ";", document.body.appendChild(Ft);
  const Zo = () => {
    const n = Ft.querySelector(".tp-rotv_b");
    if (!n || n.__hkDragWired) return;
    n.__hkDragWired = true, n.style.cursor = "move", n.style.userSelect = "none";
    let o = false, i = 0, t = 0, r = 0, s = 0;
    n.addEventListener("mousedown", (l) => {
      o = true, i = l.clientX, t = l.clientY;
      const f = Ft.getBoundingClientRect();
      r = f.left, s = f.top, Ft.style.transform = "none", Ft.style.left = `${r}px`, Ft.style.top = `${s}px`, l.preventDefault();
    }), window.addEventListener("mousemove", (l) => {
      if (!o) return;
      const f = l.clientX - i, h = l.clientY - t, S = Math.max(0, Math.min(window.innerWidth - 80, r + f)), k = Math.max(0, Math.min(window.innerHeight - 40, s + h));
      Ft.style.left = `${S}px`, Ft.style.top = `${k}px`;
    }), window.addEventListener("mouseup", () => {
      if (o) {
        o = false;
        try {
          localStorage.setItem(co, JSON.stringify({ left: parseFloat(Ft.style.left), top: parseFloat(Ft.style.top) }));
        } catch {
        }
      }
    });
  }, G = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 }, Mt = { dx: 0, dy: 0, dz: 3, copias: 1 };
  let Je = null;
  const ut = (n, o, i, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: i, value: t } }));
  }, Uo = () => {
    if (Je && (Je.dispose(), Je = null), xe.size === 0) {
      Ft.style.display = "none";
      return;
    }
    const n = [...xe], o = n.filter((d) => d.startsWith("pt:")), i = n.filter((d) => d.startsWith("seg:")), t = n.filter((d) => d.startsWith("poly:")), r = n.filter((d) => d.startsWith("aux:")), s = o.length > 0, l = i.length > 0, f = t.length > 0, h = !s && !l && !f, S = [];
    o.length && S.push(`\u{1F535} ${o.length} nodo(s)`), i.length && S.push(`\u{1F4CF} ${i.length} segmento(s)`), t.length && S.push(`\u25AD ${t.length} \xE1rea(s)`), r.length && S.push(`\u250A ${r.length} aux`);
    const k = `\u{1F3AF} ${xe.size} item(s) \u2014 ${S.join(", ")}`;
    Je = new Io({ container: Ft, title: k });
    {
      const d = Je.addFolder({ title: "\u270F\uFE0F Editar \u2014 Replicar / Mover", expanded: false });
      d.addBinding(Mt, "dx", { label: "\u0394x (m)", step: 0.1 }), d.addBinding(Mt, "dy", { label: "\u0394y (m)", step: 0.1 }), d.addBinding(Mt, "dz", { label: "\u0394z (m)", step: 0.1 }), d.addBinding(Mt, "copias", { label: "Copias", min: 1, max: 50, step: 1 }), d.addButton({ title: "\u29C9 Replicar selecci\xF3n" }).on("click", () => {
        var _a;
        const P = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, Mt.dx, Mt.dy, Mt.dz, Mt.copias);
        pe(P ? `\u29C9 Replicado \xD7${P} (\u0394 ${Mt.dx},${Mt.dy},${Mt.dz} m)` : "\u26A0 Nada que replicar \u2014 seleccion\xE1 nodos/frames/\xE1reas");
      }), d.addButton({ title: "\u2192 Mover selecci\xF3n (1 copia, sin duplicar geometr\xEDa base)" }).on("click", () => {
        var _a;
        const P = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, Mt.dx, Mt.dy, Mt.dz, 1);
        pe(P ? `\u2192 Copia desplazada \u0394 ${Mt.dx},${Mt.dy},${Mt.dz} m` : "\u26A0 Nada seleccionado");
      });
      const y = d.addFolder({ title: "\u{1F9F2} Snap", expanded: false });
      y.addButton({ title: "Snap a grilla ON/OFF (F9)" }).on("click", () => {
        var _a;
        return (_a = window.__hekatanToggleSnap) == null ? void 0 : _a.call(window);
      }), y.addButton({ title: "OSNAP (endpoints/medios) ON/OFF" }).on("click", () => {
        window.__hekatanOsnapOn = !(window.__hekatanOsnapOn ?? true), pe(`\u{1F9F2} OSNAP ${window.__hekatanOsnapOn ? "ON" : "OFF"}`);
      });
    }
    if (s) {
      const d = Je.addFolder({ title: `\u{1F4CC} Restraints (DOFs) \u2014 ${o.length} nodo(s)` });
      d.addBinding(G, "Ux"), d.addBinding(G, "Uy"), d.addBinding(G, "Uz"), d.addBinding(G, "Rx"), d.addBinding(G, "Ry"), d.addBinding(G, "Rz");
      const y = Je.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      y.addBinding(G, "Kx", { label: "Kx", min: 0, step: 100 }), y.addBinding(G, "Ky", { label: "Ky", min: 0, step: 100 }), y.addBinding(G, "Kz", { label: "Kz", min: 0, step: 100 }), y.addBinding(G, "Krx", { label: "Krx", min: 0, step: 1e3 }), y.addBinding(G, "Kry", { label: "Kry", min: 0, step: 1e3 }), y.addBinding(G, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const P = Je.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      P.addBinding(G, "Fx", { step: 0.1 }), P.addBinding(G, "Fy", { step: 0.1 }), P.addBinding(G, "Fz", { step: 0.1 }), P.addBinding(G, "Mx", { step: 0.1 }), P.addBinding(G, "My", { step: 0.1 }), P.addBinding(G, "Mz", { step: 0.1 }), Je.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(G, "mass", { label: "m", min: 0, step: 1 }), Je.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(G, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), Je.addButton({ title: `\u2713 Aplicar a ${o.length} nodo(s) seleccionado(s)` }).on("click", () => {
        let H = 0;
        const R = [G.Ux, G.Uy, G.Uz, G.Rx, G.Ry, G.Rz];
        R.some((we) => we) && (ut("nodes", o, "supports", R), H++);
        const ae = [G.Fx, G.Fy, G.Fz, G.Mx, G.My, G.Mz];
        ae.some((we) => we !== 0) && (ut("nodes", o, "loads", ae), H++);
        const le = [G.Kx, G.Ky, G.Kz, G.Krx, G.Kry, G.Krz];
        if (le.some((we) => we !== 0) && (ut("nodes", o, "springs", le), H++), G.mass !== 0 && (ut("nodes", o, "mass", G.mass), H++), G.diaphragm !== "Ninguno" && (ut("nodes", o, "diaphragm", G.diaphragm), H++), H === 0) {
          pe("\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para apoyo, o un valor de carga/resorte/masa, y volv\xE9 a aplicar.");
          let we = document.getElementById("hk-prop-toast");
          we || (we = document.createElement("div"), we.id = "hk-prop-toast", we.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);z-index:99999;padding:9px 20px;border-radius:8px;font:600 14px system-ui;color:#fff;pointer-events:none;transition:opacity .25s;box-shadow:0 4px 16px rgba(0,0,0,.4)", document.body.appendChild(we)), we.textContent = "\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para empotrado/articulado, despu\xE9s Aplicar", we.style.background = "rgba(217,119,6,0.97)", we.style.opacity = "1", clearTimeout(window.__hekatanPropToastT), window.__hekatanPropToastT = setTimeout(() => {
            we && (we.style.opacity = "0");
          }, 3200);
        } else pe(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    }
    if (l) {
      const d = Je.addFolder({ title: `\u{1F4CF} Secci\xF3n frame \u2014 ${i.length} seg(s)` });
      d.addBinding(G, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), d.addBinding(G, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const y = Je.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      y.addBinding(G, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), y.addBinding(G, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), y.addBinding(G, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), y.addBinding(G, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), Je.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(G, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), Je.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(G, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const K = Je.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      K.addBinding(G, "relMxI", { label: "Mx I" }), K.addBinding(G, "relMyI", { label: "My I" }), K.addBinding(G, "relMzI", { label: "Mz I" });
      const H = Je.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      H.addBinding(G, "relMxJ", { label: "Mx J" }), H.addBinding(G, "relMyJ", { label: "My J" }), H.addBinding(G, "relMzJ", { label: "Mz J" }), Je.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(G, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const ae = Je.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      ae.addBinding(G, "LKx", { label: "LKx", min: 0, step: 100 }), ae.addBinding(G, "LKy", { label: "LKy", min: 0, step: 100 }), ae.addBinding(G, "LKz", { label: "LKz", min: 0, step: 100 });
      const le = Je.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      le.addBinding(G, "qx", { step: 0.1 }), le.addBinding(G, "qy", { step: 0.1 }), le.addBinding(G, "qz", { step: 0.1 }), Je.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(G, "massPerM", { label: "m/L", min: 0, step: 1 }), Je.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        ut("segs", i, "section", G.section), ut("segs", i, "material", G.material_frame);
        const Ie = { A: G.A_mod, Iz: G.Iz_mod, Iy: G.Iy_mod, J: G.J_mod };
        (Ie.A !== 1 || Ie.Iz !== 1 || Ie.Iy !== 1 || Ie.J !== 1) && ut("segs", i, "modifiers", Ie), G.insertionPoint !== "10 \u2014 Centroid" && ut("segs", i, "insertionPoint", G.insertionPoint), G.beta !== 0 && ut("segs", i, "beta", G.beta);
        const ve = [G.relMxI, G.relMyI, G.relMzI], Me = [G.relMxJ, G.relMyJ, G.relMzJ];
        (ve.some((Ce) => Ce) || Me.some((Ce) => Ce)) && ut("segs", i, "releases", { i: ve, j: Me }), G.hinges !== "None" && ut("segs", i, "hinges", G.hinges);
        const wt = [G.LKx, G.LKy, G.LKz];
        wt.some((Ce) => Ce !== 0) && ut("segs", i, "lineSprings", wt);
        const De = [G.qx, G.qy, G.qz];
        De.some((Ce) => Ce !== 0) && ut("segs", i, "distLoad", De), G.massPerM !== 0 && ut("segs", i, "massPerM", G.massPerM), pe(`\u2713 Propiedades aplicadas a ${i.length} segmento(s)`);
      });
    }
    if (f) {
      const d = Je.addFolder({ title: `\u25AD Shell / \xC1rea \u2014 ${t.length}` });
      d.addBinding(G, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), d.addBinding(G, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), d.addBinding(G, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), Je.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(G, "surfLoad", { label: "q", step: 0.1 }), Je.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        ut("areas", t, "shellType", G.shellType), ut("areas", t, "thickness", G.thickness), ut("areas", t, "material", G.material_shell), G.surfLoad !== 0 && ut("areas", t, "surfLoad", G.surfLoad), pe(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    }
    if (h) {
      const d = Je.addFolder({ title: "\u2139 Selecci\xF3n" }), y = { msg: "Seleccion\xE1 nodos, frames o \xE1reas para editar" };
      d.addBinding(y, "msg", { readonly: true, label: "" });
    }
    Je.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      xe.clear(), Bt();
    }), Ft.style.display = "block", Zo();
  };
  window.__hekatanRefreshPropsPane = Uo;
  let sn = null, bn = false;
  x.addEventListener("pointerdown", (n) => {
    n.button === 2 && (sn = { x: n.clientX, y: n.clientY }, bn = false);
  }), x.addEventListener("pointermove", (n) => {
    if (sn && n.buttons & 2 && !bn) {
      const o = n.clientX - sn.x, i = n.clientY - sn.y;
      Math.hypot(o, i) > 8 && (bn = true);
    }
  }), x.addEventListener("pointerup", (n) => {
    var _a, _b, _c;
    if (n.button === 2) {
      const o = sn !== null && !bn;
      sn = null;
      const i = window.__hekatanRClickOnElement === true;
      if (window.__hekatanRClickOnElement = false, i) return;
      if (o) {
        if (Vt ? Mn() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), xe.size > 0 && (xe.clear(), Bt()), e.polylines) {
          const s = e.polylines.rawVal;
          (s[s.length - 1] ?? []).length > 0 && (e.polylines.val = [...s, []]);
        }
        const t = window.__hekatanCadState, r = (_b = (_a = t == null ? void 0 : t.get) == null ? void 0 : _a.call(t)) == null ? void 0 : _b.tool;
        r && r !== "select" && r !== "none" ? ((_c = t == null ? void 0 : t.setTool) == null ? void 0 : _c.call(t, "select"), pe(`\u238B Cancelado \u2014 tool '${r}' cerrado, volv\xE9s a Seleccionar`)) : pe("\u238B Cancelado (click derecho)");
      }
    }
  }), x.addEventListener("contextmenu", (n) => {
    n.preventDefault(), n.stopPropagation();
  }, { capture: true }), x.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && (window.__hekatanBloquearVentana || n.pointerType !== "touch" && (Et = null, pn = false));
  }), x.addEventListener("pointermove", (n) => {
    if (Vt && n.buttons === 0) {
      const s = n.clientX < Vt.x;
      Dn(Vt.x, Vt.y, n.clientX, n.clientY, s);
      return;
    }
    if (!Et) return;
    const o = n.clientX - Et.x, i = n.clientY - Et.y, t = Math.hypot(o, i);
    if (!pn && t < 8) return;
    pn = true;
    const r = n.clientX < Et.x;
    Dn(Et.x, Et.y, n.clientX, n.clientY, r);
  }), x.addEventListener("pointerup", (n) => {
    if (!Et) return;
    if (!pn) {
      Et = null;
      return;
    }
    const o = n.ctrlKey || n.metaKey || n.shiftKey;
    lo(Et.x, Et.y, n.clientX, n.clientY, o), Et = null, pn = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const Zt = new Ge();
  Zt.visible = false, Zt.frustumCulled = false, u.add(Zt);
  const Ko = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, po = (n, o, i, t) => {
    var _a, _b, _c, _d;
    for (; Zt.children.length; ) {
      const f = Zt.children.pop();
      (_b = (_a = f.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = f.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const r = Ko[n] ?? 16777215, s = 0.05, l = new me().setFromPoints([new b(o - s, i - s, t), new b(o + s, i - s, t), new b(o + s, i - s, t), new b(o + s, i + s, t), new b(o + s, i + s, t), new b(o - s, i + s, t), new b(o - s, i + s, t), new b(o - s, i - s, t)]);
    Zt.add(new Xt(l, new lt({ color: r, linewidth: 2 }))), Zt.position.set(0, 0, 0), Zt.visible = true;
  }, Yn = () => {
    Zt.visible = false;
  }, Go = (n, o, i, t) => {
    var _a;
    const r = window.__hekatanOsnap, s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let f = null;
    const h = (d, y, P, U) => {
      const K = Math.hypot(y - n, P - o, U - i);
      K > t || (!f || K < f.d) && (f = { type: d, x: y, y: P, z: U, d: K });
    };
    (r.node || r.end) && s.forEach((d) => {
      r.node && h("node", d[0], d[1], d[2]);
    });
    for (const d of l) if (!(d.length < 2)) for (let y = 0; y < d.length - 1; y++) {
      const P = s[d[y]], U = s[d[y + 1]];
      if (!(!P || !U) && (r.end && (h("end", P[0], P[1], P[2]), h("end", U[0], U[1], U[2])), r.mid && h("mid", (P[0] + U[0]) / 2, (P[1] + U[1]) / 2, (P[2] + U[2]) / 2), r.nea || r.per)) {
        const K = U[0] - P[0], H = U[1] - P[1], R = U[2] - P[2], ae = K * K + H * H + R * R;
        if (ae < 1e-12) continue;
        const le = Math.max(0, Math.min(1, ((n - P[0]) * K + (o - P[1]) * H + (i - P[2]) * R) / ae)), we = P[0] + le * K, Ie = P[1] + le * H, ve = P[2] + le * R;
        r.nea && h("nea", we, Ie, ve), r.per && h("per", we, Ie, ve);
      }
    }
    const S = window.__hekatanDrawingAuxLines, k = (S == null ? void 0 : S.rawVal) ?? (S == null ? void 0 : S.val) ?? S ?? [];
    for (const d of k) {
      if (d.length !== 6) continue;
      const y = [d[0], d[1], d[2]], P = [d[3], d[4], d[5]];
      if (r.end && (h("end", y[0], y[1], y[2]), h("end", P[0], P[1], P[2])), r.mid && h("mid", (y[0] + P[0]) / 2, (y[1] + P[1]) / 2, (y[2] + P[2]) / 2), r.nea || r.per) {
        const U = P[0] - y[0], K = P[1] - y[1], H = P[2] - y[2], R = U * U + K * K + H * H;
        if (R < 1e-12) continue;
        const ae = Math.max(0, Math.min(1, ((n - y[0]) * U + (o - y[1]) * K + (i - y[2]) * H) / R)), le = y[0] + ae * U, we = y[1] + ae * K, Ie = y[2] + ae * H;
        r.nea && h("nea", le, we, Ie), r.per && h("per", le, we, Ie);
      }
    }
    return f ? { type: f.type, x: f.x, y: f.y, z: f.z } : null;
  };
  window.__hekatanOsnapCompute = Go, window.__hekatanOsnapShow = po, window.__hekatanOsnapHide = Yn;
  let Ee = [], bt = 0;
  const fn = document.createElement("div");
  fn.id = "hk-cad-status", fn.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", fn.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(fn);
  const Wo = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), je && n.push(`\u{1F512} LOCK ${je.toUpperCase()}`);
    const i = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(i) > 1e-3 && n.push(`Cota Z=${i}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, pe = (n) => {
    const o = n + Wo();
    fn.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    pe(o);
  }, window.__hekatanCadResetPending = () => {
    Ee = [], re = [], N.visible = false, Nn(), g(), pe("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  function Nn() {
    if (!e.polylines) return;
    const n = e.polylines.rawVal.filter((o) => o.length >= 2);
    e.polylines.val = [...n, []];
  }
  window.__hekatanCerrarPolilinea = Nn;
  const hn = [], Gt = () => {
    var _a, _b;
    hn.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), hn.length > 100 && hn.shift();
  }, uo = () => {
    var _a;
    const n = hn.pop();
    if (!n) {
      pe("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), Ee = [], ie.visible = false, ot.visible = false, E(), pe(`\u21B6 Undo \u2014 ${hn.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    g();
  };
  window.__hekatanPushUndo = Gt, window.__hekatanUndo = uo, document.addEventListener("keydown", (n) => {
    var _a;
    if ((n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey) {
      const o = n.target, i = o == null ? void 0 : o.tagName;
      if ((i === "INPUT" || i === "TEXTAREA") && o.type !== "checkbox" && o.type !== "range" && ((_a = o.value) == null ? void 0 : _a.length) > 0) return;
      n.preventDefault(), n.stopPropagation(), uo();
    }
  }, { capture: true });
  const fo = () => {
    Ee = [], Nn(), je = null, Lt(), ie.visible = false, ot.visible = false, E(), pe("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), g();
  };
  window.__hekatanFinalizeDraw = fo;
  const ho = () => {
    var _a, _b, _c;
    Ee = [], re = [], N.visible = false;
    let n = false;
    xe.size && (xe.clear(), Bt(), n = true), fo();
    try {
      const o = window.__hekatanCadState, i = (_b = (_a = o == null ? void 0 : o.get) == null ? void 0 : _a.call(o)) == null ? void 0 : _b.tool;
      i && i !== "select" && ((_c = o == null ? void 0 : o.setTool) == null ? void 0 : _c.call(o, "select"));
    } catch {
    }
    pe(n ? "\u238B Selecci\xF3n cancelada" : "\u238B Sin herramienta \u2014 arrastr\xE1 para seleccionar"), g();
  };
  window.__hekatanEscapeCancel = ho, window.__hekatanReplicateSelection = (n, o, i, t) => {
    var _a, _b, _c, _d;
    t = Math.max(1, Math.round(t || 1));
    const r = [...xe], s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], f = new Set(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? []), h = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Set(), k = [];
    if (r.forEach((K) => {
      if (K.startsWith("pt:")) h.add(+K.slice(3));
      else if (K.startsWith("poly:")) {
        const H = +K.slice(5);
        S.add(H), (l[H] || []).forEach((R) => h.add(R));
      } else if (K.startsWith("seg:")) {
        const H = K.split(":"), R = +H[1], ae = +H[2], le = l[R] || [], we = le[ae], Ie = le[ae + 1];
        we != null && Ie != null && (k.push([we, Ie]), h.add(we), h.add(Ie));
      }
    }), !h.size) return 0;
    Gt();
    const d = [...s];
    let y = l.slice();
    y.length && y[y.length - 1].length === 0 && (y = y.slice(0, -1));
    const P = [...((_c = e.areas) == null ? void 0 : _c.rawVal) ?? []], U = [...h];
    for (let K = 1; K <= t; K++) {
      const H = n * K, R = o * K, ae = i * K, le = /* @__PURE__ */ new Map();
      U.forEach((we) => {
        le.set(we, d.length), d.push([s[we][0] + H, s[we][1] + R, s[we][2] + ae]);
      }), S.forEach((we) => {
        const Ie = l[we].map((Me) => le.has(Me) ? le.get(Me) : Me), ve = y.length;
        y.push(Ie), f.has(we) && P.push(ve);
      }), k.forEach(([we, Ie]) => {
        y.push([le.get(we), le.get(Ie)]);
      });
    }
    y.push([]), e.points.val = d, e.polylines && (e.polylines.val = y), e.areas && (e.areas.val = P);
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return g(), t;
  }, x.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z;
    if (Ot > 5) {
      Ot = 0;
      return;
    }
    Ot = 0;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(z, o);
    const i = O();
    if (!i.length) return;
    {
      const s = o.position.distanceTo(c.target) || 1, l = i[0].distance ?? o.position.distanceTo(i[0].point), f = i[0].point;
      if (!isFinite(f.x) || !isFinite(f.y) || !isFinite(f.z) || l > Math.max(s * 12, 300)) {
        pe("\u26A0 Click rasante descartado \u2014 cay\xF3 demasiado lejos. Acerc\xE1 la vista o clicke\xE1 sobre la grilla.");
        return;
      }
    }
    let t = i[0].point;
    (n.ctrlKey || n.metaKey) && (t = new b(Math.round(i[0].point.x), Math.round(i[0].point.y), Math.round(i[0].point.z)));
    {
      const s = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], l = s[s.length - 1] ?? [], f = e.points.rawVal ?? [];
      if (l.length > 0) {
        const h = f[l[l.length - 1]];
        if (h) {
          const S = !!window.__hekatanOrthoMode;
          let k = je;
          if (!k && S) {
            const d = Math.abs(t.x - h[0]), y = Math.abs(t.y - h[1]), P = Math.abs(t.z - h[2]);
            k = d >= y && d >= P ? "x" : y >= P ? "y" : "z";
          }
          k === "x" ? t = new b(t.x, h[1], h[2]) : k === "y" ? t = new b(h[0], t.y, h[2]) : k === "z" && (t = new b(h[0], h[1], t.z));
        }
      }
    }
    if (st) t = st.clone(), pe(`\u{1F4D0} Eje \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.2, l = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, s);
      if (l) t = new b(l.x, l.y, l.z), pe(`\u{1F3AF} Snap [${l.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      else {
        const f = window.__hekatanSnapEnabled !== false, h = window.__hekatanSnap2D ?? 0;
        f && h > 0 && (t = new b(Math.round(t.x / h) * h, Math.round(t.y / h) * h, Math.round(t.z / h) * h));
      }
    }
    const r = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (r === "select" || r === "none" || !r) {
      if (tt) {
        Vt && Mn();
        const { kind: s, a: l, b: f } = tt, h = f !== void 0 ? `${s}:${l}:${f}` : `${s}:${l}`;
        n.ctrlKey || n.metaKey || n.shiftKey || xe.clear(), xe.has(h) ? xe.delete(h) : xe.add(h), Bt(), pe(`\u2713 Seleccionados ${xe.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const s = n.ctrlKey || n.metaKey || n.shiftKey, l = n.clientX, f = n.clientY;
        Vt ? (lo(Vt.x, Vt.y, l, f, s), Vt = null) : s || (Vt = { x: l, y: f }, pe("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), Dn(l, f, l + 1, f + 1, false));
      }
      return;
    }
    if (r === "axis") {
      const s = window.__hekatanAxisDraw;
      if (!s) return;
      if (!s.pendingStart) {
        s.pendingStart = [t.x, t.y, t.z], pe(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const l = s.mode === "number", f = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, s.pendingStart, [t.x, t.y, t.z], l);
      pe(`\u2713 Eje "${f}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (r === "delete") {
      if (dt >= 0) {
        const s = window.__hekatanDrawingAuxLines, l = (s == null ? void 0 : s.rawVal) ?? (s == null ? void 0 : s.val) ?? s ?? [], f = dt;
        if (f >= 0 && f < l.length) {
          Gt();
          const h = l.slice(0, f).concat(l.slice(f + 1));
          s && typeof s == "object" && "val" in s ? s.val = h : window.__hekatanDrawingAuxLines = h, pe(`\u{1F5D1} L\xEDnea auxiliar #${f + 1} borrada`), dt = -1, ue.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (Ne >= 0) {
        const s = Ne, l = We;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(s)) ?? false ? (nn(s), pe(`\u{1F5D1} \xC1rea #${s + 1} (shell Q4) borrada`)) : l >= 0 ? (In(s, l), pe(`\u{1F5D1} Segmento ${l + 1} de polil\xEDnea #${s + 1} borrado`)) : (nn(s), pe(`\u{1F5D1} Polil\xEDnea #${s + 1} borrada`));
      } else pe("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (r === "circle") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        pe("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [s, l] = Ee, f = Math.hypot(l[0] - s[0], l[1] - s[1], l[2] - s[2]);
      Math.abs(l[0] - s[0]);
      const h = Math.abs(l[1] - s[1]), k = Math.abs(l[2] - s[2]) < 1e-3 ? "xy" : h < 1e-3 ? "xz" : "yz", d = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, s[0], s[1], s[2], f, d, k), pe(`\u2713 C\xEDrculo dibujado en ${k.toUpperCase()} \u2014 r=${f.toFixed(2)}m, ${d} segmentos`), Ee = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (r === "arc") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        pe("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (Ee.length === 2) {
        pe("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [s, l, f] = Ee, h = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, s, l, f, h), pe(`\u2713 Arco dibujado \u2014 ${h} segmentos`), Ee = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (r === "rect") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        pe("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ee;
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, s, l), pe(`\u2713 Rect\xE1ngulo dibujado \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Ee = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (r === "rectarea") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        pe("\u25AD \xC1rea rectangular \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ee;
      (_p = window.__hekatanDrawRectArea) == null ? void 0 : _p.call(window, s, l), pe(`\u2713 \xC1rea rectangular (shell Q4) creada \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Ee = [];
      return;
    }
    if (r === "polyarea") {
      re.push([t.x, t.y, t.z]), N.geometry.setFromPoints(re.map((s) => new b(s[0], s[1], s[2]))), N.visible = re.length >= 1, pe(`\u25B0 \xC1rea libre \u2014 ${re.length} punto(s). Click m\xE1s v\xE9rtices, o Enter / click-derecho para cerrar y mallar (m\xEDn. 3).`), g();
      return;
    }
    if (r === "plane3") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length < 3) {
        pe(`\u25E3 Plano inclinado \u2014 punto ${Ee.length}/3. Tip: cambi\xE1 la Cota Z (o enganch\xE1 un nodo) entre clicks para darle inclinaci\xF3n.`);
        return;
      }
      const [s, l, f] = Ee, h = (_q = window.__hekatanSetInclinedPlaneFrom3) == null ? void 0 : _q.call(window, s, l, f);
      pe(h ? "\u2713 Plano de trabajo INCLINADO activo. Dibuj\xE1 el \xE1rea (\u25AD/\u2B21) sobre \xE9l. (XY para resetear)" : "\u26A0 Los 3 puntos son colineales \u2014 no definen un plano. Reintent\xE1."), Ee = [];
      return;
    }
    if (r === "col") {
      Gt();
      const s = t.z, l = bt && bt > 0 ? bt : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, s], [t.x, t.y, s + l]];
      const f = e.polylines.rawVal, h = e.points.rawVal.length;
      e.polylines.val = [...f.slice(0, -1), ...f[f.length - 1].length > 0 ? [f[f.length - 1]] : [], [h - 2, h - 1], []], bt = 0, pe(`\u258C Columna creada \u2014 h=${l.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (r === "wall") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        pe("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [s, l] = Ee, f = bt && bt > 0 ? bt : 3;
      Gt();
      const h = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [s[0], s[1], s[2]], [l[0], l[1], l[2]], [l[0], l[1], l[2] + f], [s[0], s[1], s[2] + f]];
      const S = e.polylines.rawVal;
      if (S.length - 1, e.polylines.val = [...S.slice(0, -1), ...S[S.length - 1].length > 0 ? [S[S.length - 1]] : [], [h, h + 1, h + 2, h + 3, h], []], e.areas) {
        const k = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, k];
      }
      pe(`\u25A5 Pared Q4 creada \u2014 h=${f.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Ee = [], bt = 0;
      try {
        (_s2 = window.__hekatanRebuild) == null ? void 0 : _s2.call(window);
      } catch {
      }
      return;
    }
    if (r === "extp") {
      Gt();
      const s = bt && bt > 0 ? bt : 3, l = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, l], [t.x, t.y, l + s]];
      const f = e.polylines.rawVal, h = e.points.rawVal.length;
      e.polylines.val = [...f.slice(0, -1), ...f[f.length - 1].length > 0 ? [f[f.length - 1]] : [], [h - 2, h - 1], []], bt = 0, pe(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${s.toFixed(2)}m`);
      try {
        (_t = window.__hekatanRebuild) == null ? void 0 : _t.call(window);
      } catch {
      }
      return;
    }
    if (r === "extl") {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.5, l = qt(t.x, t.y, t.z, s);
      if (!l) {
        pe("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const f = e.polylines.rawVal, h = e.points.rawVal, S = f[l.polyIdx], k = h[S[l.segIdx]], d = h[S[l.segIdx + 1]];
      if (!k || !d) {
        pe("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const y = bt && bt > 0 ? bt : 3;
      Gt();
      const P = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [k[0], k[1], k[2]], [d[0], d[1], d[2]], [d[0], d[1], d[2] + y], [k[0], k[1], k[2] + y]];
      const U = e.polylines.rawVal;
      if (e.polylines.val = [...U.slice(0, -1), ...U[U.length - 1].length > 0 ? [U[U.length - 1]] : [], [P, P + 1, P + 2, P + 3, P], []], e.areas) {
        const K = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, K];
      }
      bt = 0, pe(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${y.toFixed(2)}m`);
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
      pe(`\u2726 Punto auxiliar agregado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      return;
    }
    if (r === "aux") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        pe("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [s, l] = Ee, f = window.__hekatanDrawingAuxLines;
      if (f) {
        const y = f.rawVal ?? f.val ?? [];
        f.val = [...y, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      const h = l[0] - s[0], S = l[1] - s[1], k = l[2] - s[2], d = Math.sqrt(h * h + S * S + k * k);
      pe(`\u2713 L\xEDnea auxiliar creada \u2014 L=${d.toFixed(2)}m (cyan, no FEM)`), Ee = [];
      return;
    }
    if (r === "extend") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        pe("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [s, l] = Ee, f = window.__hekatanDrawingAuxLines;
      if (f) {
        const h = f.rawVal ?? f.val ?? [];
        f.val = [...h, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      pe("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Ee = [];
      return;
    }
    if (r === "chaflan") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        pe("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ee, f = window.__hekatanChaflanR ?? 1, h = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_v = window.__hekatanDrawSlabChaflan) == null ? void 0 : _v.call(window, s, l, f, h, 6);
      const S = Math.abs(l[0] - s[0]).toFixed(1), k = Math.abs(l[1] - s[1]).toFixed(1);
      pe(`\u2713 Losa con chaflanes dibujada \u2014 ${S}\xD7${k}m, r=${f}m, ${h} seg/chafl\xE1n`), Ee = [];
      try {
        (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
      } catch {
      }
      return;
    }
    if (V = false, Gt(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const s = e.polylines.rawVal, l = s.length - 1, f = s[l] ?? [];
      if (r === "line" && f.length >= 2) {
        pe(`\uFF0F L\xEDnea \u2014 ${f.length - 1} tramo${f.length === 2 ? "" : "s"}. Segu\xED marcando puntos; Esc o clic derecho para terminar.`);
        try {
          (_x = window.__hekatanRebuild) == null ? void 0 : _x.call(window);
        } catch {
        }
        return;
      }
      if (r === "area" && f.length === 4) {
        e.polylines.val = [...s.slice(0, -1), [...f, f[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, l]), pe("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_y = window.__hekatanRebuild) == null ? void 0 : _y.call(window);
        } catch {
        }
        return;
      }
    }
    if (r === "node") pe(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (r === "line") pe("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (r === "polyline") pe("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (r === "area") {
      const s = ((_z = e.polylines) == null ? void 0 : _z.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      pe(`\u25A6 \xC1rea \u2014 click ${s.length}/4. Marc\xE1 ${4 - s.length} v\xE9rtice${4 - s.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), x.addEventListener("contextmenu", (n) => {
    var _a, _b, _c;
    if (((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "polyarea" && re.length >= 3) {
      n.preventDefault();
      const i = cn();
      pe(`\u2713 \xC1rea libre mallada \u2014 ${i} shells Q4 creados.`);
      return;
    }
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), x.addEventListener("pointermove", (n) => {
    var _a, _b;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(z, o);
    const i = O();
    if (be.geometry.deleteAttribute("position"), i.length) {
      let t = i[0].point.clone();
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z));
      {
        const l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], f = l[l.length - 1] ?? [], h = e.points.rawVal ?? [];
        if (f.length > 0) {
          const S = h[f[f.length - 1]];
          if (S) {
            const k = !!window.__hekatanOrthoMode;
            let d = je;
            if (!d && k) {
              const y = Math.abs(t.x - S[0]), P = Math.abs(t.y - S[1]), U = Math.abs(t.z - S[2]);
              d = y >= P && y >= U ? "x" : P >= U ? "y" : "z";
            }
            d === "x" ? t.set(t.x, S[1], S[2]) : d === "y" ? t.set(S[0], t.y, S[2]) : d === "z" && t.set(S[0], S[1], t.z);
          }
        }
      }
      const r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, r);
      if (s) t.set(s.x, s.y, s.z);
      else {
        const l = window.__hekatanSnapEnabled !== false, f = window.__hekatanSnap2D ?? 0.5;
        l && f > 0 && (t.x = Math.round(t.x / f) * f, t.y = Math.round(t.y / f) * f, t.z = Math.round(t.z / f) * f);
      }
      be.geometry.setAttribute("position", new ft(t.toArray(), 3));
    }
    g();
  }), x.addEventListener("pointermove", (n) => {
    var _a;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(z, o);
    let i = false;
    const t = M.intersectObject(ne), r = O();
    if (t.length && r.length) {
      const s = new b(...e.points.rawVal[t[0].index]), l = new b(...r[0].point), f = s.sub(l), h = (_a = r[0].face) == null ? void 0 : _a.normal;
      h.transformDirection(Y.matrixWorld), Math.abs(f.dot(h)) < 1e-4 && (i = true);
    }
    be.visible = !i;
  });
  let Zn = false, Un;
  x.addEventListener("pointermove", (n) => {
    var _a;
    if (!Ot) return;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(z, o);
    let i = false;
    const t = M.intersectObject(ne), r = O();
    if (t.length && r.length) {
      const l = new b(...e.points.rawVal[t[0].index]), f = new b(...r[0].point), h = l.sub(f), S = (_a = r[0].face) == null ? void 0 : _a.normal;
      S.transformDirection(Y.matrixWorld), Math.abs(h.dot(S)) < 1e-4 && (i = true);
    }
    if (i && Ot < 5 && (Zn = true, c.enabled = false, Un = t[0].index), !Zn || Ot % 2 !== 0) return;
    const s = [...e.points.rawVal];
    if (Un !== void 0) {
      let l = r[0].point;
      (n.ctrlKey || n.metaKey) && (l = new b(Math.round(l.x), Math.round(l.y), Math.round(l.z))), s[Un] = l.toArray();
    }
    e.points.val = s;
  }), x.addEventListener("pointerup", () => {
    c.enabled = true, Zn = false;
  }), x.addEventListener("contextmenu", (n) => {
    var _a;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(z, o);
    let i = false;
    const t = M.intersectObject(ne), r = O();
    if (t.length && r.length) {
      const f = new b(...e.points.rawVal[t[0].index]), h = new b(...r[0].point), S = f.sub(h), k = (_a = r[0].face) == null ? void 0 : _a.normal;
      k.transformDirection(Y.matrixWorld), Math.abs(S.dot(k)) < 1e-4 && (i = true);
    }
    if (!i) return;
    const s = [...e.points.rawVal];
    if (s.splice(t[0].index, 1), e.points.val = s, !e.polylines) return;
    const l = e.polylines.rawVal.map((f) => f.filter((h) => h !== t[0].index)).map((f) => f.map((h) => h > t[0].index ? h - 1 : h)).filter((f) => f.length);
    l.push([]), e.polylines.val = l;
  });
}
function Bs(e, a, u) {
  const w = Math.round(14.999999999999998), p = { position: e.position.clone(), quaternion: e.quaternion.clone() }, x = setInterval(M, 1e3 / 30);
  let g = 0;
  function M() {
    g++;
    const z = g / w;
    e.position.lerpVectors(p.position, a.position, z), e.quaternion.slerpQuaternions(p.quaternion, a.quaternion, z), u && u(), g == w && clearInterval(x);
  }
}
function Rs(e, a, u, m) {
  const c = ms(u, e.elements, m);
  return D.derive(() => {
    c.visible = a.shellResults.val != "none";
  }), c;
}
const Xs = 6, jn = 10, Ds = 0.012;
function Ys(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function Ns(e, a, u, m) {
  if (!u && !m) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && u) {
    const w = u[e];
    if (w && w.has(a)) return w.get(a);
  }
  return null;
}
function Zs(e, a, u, m) {
  const c = new Ge(), w = new Lo();
  w.setColorMap("rainbow");
  const p = new It(), x = D.state([]);
  return D.derive(() => {
    var _a, _b, _c;
    a.deformedShape.val;
    const g = u.val, M = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], z = Ys(a.frameResults.val);
    if (c.children.forEach((A) => {
      A.geometry && A.geometry.dispose(), A.material && A.material.dispose();
    }), c.clear(), !z || M.length === 0 || g.length === 0) {
      x.val = [];
      return;
    }
    const v = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, Y = (_c = e.deformOutputs) == null ? void 0 : _c.val, de = [], te = [];
    for (let A = 0; A < M.length; A++) {
      if (M[A].length !== 2) continue;
      const se = Ns(z, A, v, Y);
      se && (de.push(se[0], se[1]), te.push({ idx: A, vals: se }));
    }
    if (de.length === 0) {
      x.val = [];
      return;
    }
    const Q = Math.min(...de), _ = Math.max(...de);
    w.setMin(Q), w.setMax(_), x.val = de;
    const O = [1 / 0, 1 / 0, 1 / 0], ne = [-1 / 0, -1 / 0, -1 / 0];
    for (const A of g) for (let W = 0; W < 3; W++) O[W] = Math.min(O[W], A[W]), ne[W] = Math.max(ne[W], A[W]);
    const fe = Math.max(ne[0] - O[0], ne[1] - O[1], ne[2] - O[2], 1) * Ds, B = [], I = [], X = [];
    let V = 0;
    for (const { idx: A, vals: W } of te) {
      const se = M[A], j = g[se[0]], q = g[se[1]];
      if (!j || !q) continue;
      const T = new b(q[0] - j[0], q[1] - j[1], q[2] - j[2]), ie = T.length();
      if (ie < 1e-10) continue;
      T.normalize();
      const N = Math.abs(T.y) < 0.99 ? new b(0, 1, 0) : new b(1, 0, 0), re = new b().crossVectors(T, N).normalize(), ce = new b().crossVectors(T, re).normalize(), Pe = jn + 1, he = Xs;
      for (let Fe = 0; Fe < Pe; Fe++) {
        const nt = Fe / jn, ot = j[0] + T.x * ie * nt, ee = j[1] + T.y * ie * nt, C = j[2] + T.z * ie * nt, Z = W[0] + (W[1] - W[0]) * nt, L = w.getColor(Z) ?? new It(0, 0, 0);
        p.copy(L).convertSRGBToLinear();
        for (let J = 0; J < he; J++) {
          const oe = J / he * Math.PI * 2, ge = Math.cos(oe), ye = Math.sin(oe);
          B.push(ot + (re.x * ge + ce.x * ye) * fe, ee + (re.y * ge + ce.y * ye) * fe, C + (re.z * ge + ce.z * ye) * fe), I.push(p.r, p.g, p.b);
        }
      }
      for (let Fe = 0; Fe < jn; Fe++) for (let nt = 0; nt < he; nt++) {
        const ot = (nt + 1) % he, ee = V + Fe * he + nt, C = V + Fe * he + ot, Z = V + (Fe + 1) * he + nt, L = V + (Fe + 1) * he + ot;
        X.push(ee, C, L), X.push(ee, L, Z);
      }
      V += Pe * he;
    }
    if (B.length === 0) return;
    const F = new me();
    F.setAttribute("position", new ft(B, 3)), F.setAttribute("color", new ft(I, 3)), F.setIndex(X), F.computeVertexNormals();
    const $ = new Oe({ vertexColors: true, side: vt }), E = new Ue(F, $);
    E.frustumCulled = false, c.add(E);
  }), c.__colorMapValues = x, c;
}
function Us() {
  const e = window;
  return { forceUnit: e.__hekatanForceUnit ?? localStorage.getItem("hk_forceUnit") ?? "tonf", dispUnit: e.__hekatanDispUnit ?? localStorage.getItem("hk_dispUnit") ?? "mm", stressUnit: e.__hekatanStressUnit ?? localStorage.getItem("hk_stressUnit") ?? "tonf/m\xB2" };
}
const Ks = { kN: 1, tonf: 1 / 9.80665, kip: 1 / 4.4482216 }, Gs = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Ws = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76, "kip/ft\xB2": 1 / 47.88026 };
function ct(e, a = 4) {
  return e == null || !isFinite(e) ? "\u2014" : e === 0 ? "0" : Math.abs(e) < 1e-3 || Math.abs(e) > 1e5 ? e.toExponential(a) : e.toFixed(a);
}
const Hs = 16755200, Fo = 56831, qs = 56831, Js = 56831, Pn = 65382;
function Qs(e) {
  const a = new Ge();
  a.name = "__hekatan_hover", a.renderOrder = 99;
  const u = new rn(1, 16, 16), m = new Oe({ color: Hs, transparent: true, opacity: 0.85, depthTest: false }), c = new Ue(u, m);
  c.visible = false, c.renderOrder = 100, a.add(c);
  const w = new me(), p = new lt({ color: Fo, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), x = new Xt(w, p);
  x.visible = false, x.renderOrder = 100, a.add(x);
  const g = new Oe({ color: Fo, transparent: true, opacity: 0.7, depthTest: false }), M = new Ue(new So(1, 1, 1, 12), g);
  M.visible = false, M.renderOrder = 100, a.add(M);
  const z = new me(), v = new Oe({ color: qs, transparent: true, opacity: 0.45, side: vt, depthTest: false }), Y = new Ue(z, v);
  Y.visible = false, Y.renderOrder = 100, a.add(Y);
  const de = new me(), te = new lt({ color: Js, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), Q = new Xt(de, te);
  Q.visible = false, Q.renderOrder = 100, a.add(Q);
  const _ = new Oe({ color: Pn, transparent: true, opacity: 0.95, depthTest: false }), O = new Oe({ color: Pn, transparent: true, opacity: 0.85, depthTest: false }), ne = new So(1, 1, 1, 12), be = new Oe({ color: Pn, transparent: true, opacity: 0.55, side: vt, depthTest: false }), fe = new lt({ color: Pn, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), B = [];
  window.__hekatanModelSelection = B;
  const I = new Ge();
  I.renderOrder = 101, a.add(I);
  const X = document.createElement("div");
  Object.assign(X.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), X.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(X);
  }, 0);
  function V(ee) {
    const C = e.derivedNodes.rawVal;
    return !C || ee < 0 || ee >= C.length ? null : new b(C[ee][0], C[ee][1], C[ee][2]);
  }
  function F(ee, C) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2;
    const Z = e.getActiveCamera();
    if (!Z || !e.mesh) return null;
    const L = e.rendererElm.getBoundingClientRect(), J = ee - L.left, oe = C - L.top, ge = e.derivedNodes.rawVal, ye = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!ge || !ye) return null;
    const ke = /* @__PURE__ */ new Map(), Ve = (Xe) => {
      if (ke.has(Xe)) return ke.get(Xe);
      const Te = V(Xe);
      if (!Te) return ke.set(Xe, null), null;
      const _e2 = Te.clone().project(Z), Ye = (_e2.x * 0.5 + 0.5) * L.width, ue = (-_e2.y * 0.5 + 0.5) * L.height, Ne = { x: Ye, y: ue, z: _e2.z };
      return ke.set(Xe, Ne), Ne;
    }, Ae = /* @__PURE__ */ new Set();
    for (const Xe of ye) if (Xe) for (const Te of Xe) Ae.add(Te);
    const $e = 8;
    let Re = -1, He = $e;
    for (let Xe = 0; Xe < ge.length; Xe++) {
      if (!Ae.has(Xe)) continue;
      const Te = Ve(Xe);
      if (!Te || Te.z < -1 || Te.z > 1) continue;
      const _e2 = Te.x - J, Ye = Te.y - oe, ue = Math.sqrt(_e2 * _e2 + Ye * Ye);
      ue < He && (He = ue, Re = Xe);
    }
    const ze = Us(), rt = Gs[ze.dispUnit] ?? 1e3, Ze = Ks[ze.forceUnit] ?? 1;
    if (Re >= 0) {
      const Xe = ge[Re];
      let Te = `Nodo ${Re}
(${Xe[0].toFixed(3)}, ${Xe[1].toFixed(3)}, ${Xe[2].toFixed(3)})`;
      const _e2 = (_c = (_b = e.mesh) == null ? void 0 : _b.deformOutputs) == null ? void 0 : _c.rawVal;
      if (_e2 == null ? void 0 : _e2.deformations) {
        const Ye = _e2.deformations.get(Re);
        if (Ye && (Te += `
\u2500\u2500\u2500\u2500 \u0394 desplaz. \u2500\u2500\u2500\u2500`, Te += `
Ux = ${ct(Ye[0] * rt, 3)} ${ze.dispUnit}`, Te += `
Uy = ${ct(Ye[1] * rt, 3)} ${ze.dispUnit}`, Te += `
Uz = ${ct(Ye[2] * rt, 3)} ${ze.dispUnit}`, (Math.abs(Ye[3]) > 1e-9 || Math.abs(Ye[4]) > 1e-9 || Math.abs(Ye[5]) > 1e-9) && (Te += `
Rx = ${ct(Ye[3] * 1e3, 3)} mrad`, Te += `
Ry = ${ct(Ye[4] * 1e3, 3)} mrad`, Te += `
Rz = ${ct(Ye[5] * 1e3, 3)} mrad`)), _e2.reactions) {
          const ue = _e2.reactions.get(Re);
          ue && (Math.abs(ue[0]) > 1e-9 || Math.abs(ue[1]) > 1e-9 || Math.abs(ue[2]) > 1e-9 || Math.abs(ue[3]) > 1e-6 || Math.abs(ue[4]) > 1e-6 || Math.abs(ue[5]) > 1e-6) && (Te += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, Te += `
Fx = ${ct(ue[0] * Ze)} ${ze.forceUnit}`, Te += `
Fy = ${ct(ue[1] * Ze)} ${ze.forceUnit}`, Te += `
Fz = ${ct(ue[2] * Ze)} ${ze.forceUnit}`, (Math.abs(ue[3]) > 1e-6 || Math.abs(ue[4]) > 1e-6 || Math.abs(ue[5]) > 1e-6) && (Te += `
Mx = ${ct(ue[3] * Ze)} ${ze.forceUnit}\xB7m`, Te += `
My = ${ct(ue[4] * Ze)} ${ze.forceUnit}\xB7m`, Te += `
Mz = ${ct(ue[5] * Ze)} ${ze.forceUnit}\xB7m`));
        }
      }
      return { type: "node", idx: Re, info: Te };
    }
    const je = 5;
    let st = -1, et = je, Lt = "frame";
    for (let Xe = 0; Xe < ye.length; Xe++) {
      const Te = ye[Xe];
      if (!(!Te || Te.length < 2)) {
        if (Te.length === 2) {
          const _e2 = Ve(Te[0]), Ye = Ve(Te[1]);
          if (!_e2 || !Ye || _e2.z < -1 || _e2.z > 1 || Ye.z < -1 || Ye.z > 1) continue;
          const ue = Os(J, oe, _e2.x, _e2.y, Ye.x, Ye.y);
          ue < et && (et = ue, st = Xe, Lt = "frame");
        } else if (Te.length === 3 || Te.length === 4) {
          const _e2 = [];
          let Ye = true;
          for (const ue of Te) {
            const Ne = Ve(ue);
            if (!Ne || Ne.z < -1 || Ne.z > 1) {
              Ye = false;
              break;
            }
            _e2.push(Ne);
          }
          if (!Ye) continue;
          if (js(J, oe, _e2)) {
            const Ne = _e2.reduce((We, dt) => We + dt.z, 0) / _e2.length * 1e-3;
            Ne < et && (et = Ne, st = Xe, Lt = "shell");
          }
        } else if (Te.length === 8) {
          const _e2 = [];
          let Ye = true;
          for (const xe of Te) {
            const Le = Ve(xe);
            if (!Le || Le.z < -1 || Le.z > 1) {
              Ye = false;
              break;
            }
            _e2.push(Le);
          }
          if (!Ye) continue;
          const ue = Math.min(..._e2.map((xe) => xe.x)), Ne = Math.max(..._e2.map((xe) => xe.x)), We = Math.min(..._e2.map((xe) => xe.y)), dt = Math.max(..._e2.map((xe) => xe.y));
          if (J >= ue && J <= Ne && oe >= We && oe <= dt) {
            const Le = _e2.reduce((qe, pt) => qe + pt.z, 0) / _e2.length * 1e-3;
            Le < et && (et = Le, st = Xe, Lt = "solid");
          }
        }
      }
    }
    if (st >= 0) {
      const Xe = ye[st];
      let _e2 = `${Lt === "frame" ? "Frame" : Lt === "shell" ? "Shell" : "Solid"} ${st}`;
      const Ye = (_e = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e.rawVal, ue = (_g = (_f = Ye == null ? void 0 : Ye.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, st);
      if (ue) {
        ue.name && (_e2 += `
  \u{1F4CB} ${ue.name}`), ue.shape && (_e2 += `
  Shape: ${ue.shape}`);
        const Ne = /concrete|hormig|rect.*sólida/i.test(ue.shape || ""), We = Ne ? 100 : 1e3, dt = Ne ? "cm" : "mm", xe = (qe) => {
          const pt = qe * We;
          return Math.abs(pt - Math.round(pt)) < 0.05 ? `${Math.round(pt)}` : `${pt.toFixed(1)}`;
        }, Le = [];
        if (ue.D != null && Le.push(`D=${xe(ue.D)}`), ue.B != null && Le.push(`B=${xe(ue.B)}`), ue.TF != null && Le.push(`TF=${xe(ue.TF)}`), ue.TW != null && Le.push(`TW=${xe(ue.TW)}`), ue.t != null && Le.push(`t=${xe(ue.t)}`), Le.length && (_e2 += `
  Dim: ${Le.join(" ")} ${dt}`), ue.material) {
          let qe = ue.material;
          ue.fillMaterial && (qe += ` + FILL "${ue.fillMaterial}"`), _e2 += `
  Mat: ${qe}`;
        }
      } else {
        const Ne = (_i = (_h = Ye == null ? void 0 : Ye.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, st), We = (_k = (_j = Ye == null ? void 0 : Ye.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, st);
        Ne ? (_e2 += `
  ${Ne}`, We && !Ne.includes(We) && (_e2 += `  (${We})`)) : We && (_e2 += `
  Material: ${We}`);
      }
      if (_e2 += `
nodos: [${Xe.join(", ")}]`, Lt === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const Ne = e.mesh.analyzeOutputs.rawVal, We = Ws[ze.stressUnit] ?? 1, dt = [["bendingXX", "Mxx", Ze, `${ze.forceUnit}\xB7m/m`], ["bendingYY", "Myy", Ze, `${ze.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", Ze, `${ze.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", Ze, `${ze.forceUnit}/m`], ["membraneYY", "Nyy", Ze, `${ze.forceUnit}/m`], ["membraneXY", "Nxy", Ze, `${ze.forceUnit}/m`], ["shearX", "Qx", Ze, `${ze.forceUnit}/m`], ["shearY", "Qy", Ze, `${ze.forceUnit}/m`], ["vonMises", "\u03C3VM", We, ze.stressUnit], ["pressure", "p", We, ze.stressUnit]], xe = [];
        for (const [Le, qe, pt, Dt] of dt) {
          const ht = Ne == null ? void 0 : Ne[Le];
          if (ht && ht instanceof Map) {
            const zt = ht.get(st);
            if (zt != null) {
              if (typeof zt == "number") xe.push(`${qe} = ${ct(zt * pt, 3)} ${Dt}`);
              else if (Array.isArray(zt)) {
                let tt = zt[0];
                for (const Ht of zt) Math.abs(Ht) > Math.abs(tt) && (tt = Ht);
                xe.push(`${qe} = ${ct(tt * pt, 3)} ${Dt}`);
              }
            }
          }
        }
        xe.length > 0 && (_e2 += `
\u2500\u2500\u2500\u2500 results \u2500\u2500\u2500\u2500
` + xe.slice(0, 8).join(`
`));
      }
      if (Lt === "frame" && ((_m = e.mesh) == null ? void 0 : _m.deformOutputs) && e.mesh.elementInputs) {
        const Ne = e.mesh.deformOutputs.rawVal, We = e.mesh.elementInputs.rawVal, dt = Ne == null ? void 0 : Ne.deformations;
        if (dt && Xe.length === 2) {
          const xe = dt.get(Xe[0]), Le = dt.get(Xe[1]), qe = ge[Xe[0]], pt = ge[Xe[1]];
          if (xe && Le && qe && pt) {
            const Dt = pt[0] - qe[0], ht = pt[1] - qe[1], zt = pt[2] - qe[2], tt = Math.sqrt(Dt * Dt + ht * ht + zt * zt);
            if (tt > 1e-9) {
              const Ht = Dt / tt, Bt = ht / tt, tn = zt / tt, qt = (Le[0] - xe[0]) * Ht + (Le[1] - xe[1]) * Bt + (Le[2] - xe[2]) * tn, Jt = ((_n2 = We.elasticities) == null ? void 0 : _n2.get(st)) ?? 0, En = ((_o2 = We.areas) == null ? void 0 : _o2.get(st)) ?? 0, $n = ((_p = We.momentsOfInertiaY) == null ? void 0 : _p.get(st)) ?? 0, nn = ((_q = We.momentsOfInertiaZ) == null ? void 0 : _q.get(st)) ?? 0, In = ((_r = We.torsionalConstants) == null ? void 0 : _r.get(st)) ?? 0, cn = ((_s2 = We.shearModuli) == null ? void 0 : _s2.get(st)) ?? Jt / 2.6, Ct = Jt * En * (qt / tt), Rt = (Le[3] - xe[3]) * Ht + (Le[4] - xe[4]) * Bt + (Le[5] - xe[5]) * tn, Yt = cn * In * (Rt / tt), Qt = Le[4] - xe[4], Ln = Le[5] - xe[5], Nt = Jt * $n * Qt / tt, dn = Jt * nn * Ln / tt;
              _e2 += `
\u2500\u2500\u2500\u2500 frame \u2500\u2500\u2500\u2500`, _e2 += `
L = ${ct(tt, 3)} m`, _e2 += `
\u0394L = ${ct(qt * rt, 3)} ${ze.dispUnit}`, _e2 += `
\u03B5 = ${ct(qt / tt, 6)}`, Math.abs(Ct) > 1e-6 && (_e2 += `
N \u2248 ${ct(Ct * Ze)} ${ze.forceUnit}`), Math.abs(Yt) > 1e-6 && (_e2 += `
T \u2248 ${ct(Yt * Ze)} ${ze.forceUnit}\xB7m`), Math.abs(Nt) > 1e-6 && (_e2 += `
My \u2248 ${ct(Nt * Ze)} ${ze.forceUnit}\xB7m`), Math.abs(dn) > 1e-6 && (_e2 += `
Mz \u2248 ${ct(dn * Ze)} ${ze.forceUnit}\xB7m`);
            }
          }
        }
      }
      return { type: Lt, idx: st, info: _e2 };
    }
    return null;
  }
  function $(ee, C, Z) {
    var _a, _b, _c;
    if (c.visible = false, x.visible = false, M.visible = false, Y.visible = false, Q.visible = false, !ee || !e.mesh) {
      X.style.display = "none", e.render();
      return;
    }
    const L = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (ee.type === "node") {
      const ye = V(ee.idx);
      if (ye) {
        const ke = e.derivedNodes.rawVal ?? [];
        let Ve = 1;
        if (ke.length >= 2) {
          let Re = [1 / 0, 1 / 0, 1 / 0], He = [-1 / 0, -1 / 0, -1 / 0];
          for (const ze of ke) for (let rt = 0; rt < 3; rt++) ze[rt] < Re[rt] && (Re[rt] = ze[rt]), ze[rt] > He[rt] && (He[rt] = ze[rt]);
          Ve = Math.max(He[0] - Re[0], He[1] - Re[1], He[2] - Re[2], 0.1);
        }
        const Ae = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, $e = 0.021 * Ve * Ae;
        c.position.copy(ye), c.scale.setScalar($e), c.visible = true;
      }
    } else if (ee.type === "frame" && L) {
      const ye = L[ee.idx], ke = V(ye[0]), Ve = V(ye[1]);
      if (ke && Ve) {
        const Ae = ke.clone().add(Ve).multiplyScalar(0.5), $e = Ve.clone().sub(ke), Re = $e.length(), rt = e.getActiveCamera().position.distanceTo(Ae) * 35e-4;
        M.position.copy(Ae);
        const Ze = new b(0, 1, 0), je = Ze.clone().cross($e).normalize(), st = Ze.angleTo($e);
        M.quaternion.setFromAxisAngle(je, st), M.scale.set(rt, Re, rt), M.visible = true;
      }
    } else if (ee.type === "shell" && L) {
      const ye = L[ee.idx], ke = [], Ve = [];
      for (const Ae of ye) {
        const $e = V(Ae);
        if (!$e) return;
        ke.push($e.x, $e.y, $e.z);
      }
      ye.length === 4 ? Ve.push(0, 1, 2, 0, 2, 3) : ye.length === 3 && Ve.push(0, 1, 2), z.setAttribute("position", new ft(ke, 3)), z.setIndex(Ve), z.computeVertexNormals(), Y.visible = true;
    } else if (ee.type === "solid" && L) {
      const ye = L[ee.idx], ke = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], Ve = [];
      for (const [Ae, $e] of ke) {
        const Re = V(ye[Ae]), He = V(ye[$e]);
        Re && He && Ve.push(Re.x, Re.y, Re.z, He.x, He.y, He.z);
      }
      de.setAttribute("position", new ft(Ve, 3)), Q.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      X.style.display = "none", e.render();
      return;
    }
    X.textContent = ee.info, X.style.whiteSpace = "pre-line", X.style.display = "block";
    const oe = e.rendererElm.getBoundingClientRect(), ge = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? oe;
    X.style.left = `${C - ge.left}px`, X.style.top = `${Z - ge.top}px`, e.render();
  }
  let E = "", A = 0, W = 0;
  const se = window.__hekatanHoverDebug ?? false, j = (ee) => {
    A && cancelAnimationFrame(A), A = requestAnimationFrame(() => {
      var _a, _b, _c;
      const C = F(ee.clientX, ee.clientY);
      if (se && W < 5) {
        const L = e.derivedNodes.rawVal, J = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${ee.clientX}, ${ee.clientY}) nodes=${(L == null ? void 0 : L.length) ?? 0} elems=${(J == null ? void 0 : J.length) ?? 0} hover=`, C), W++;
      }
      const Z = C ? `${C.type}:${C.idx}` : "";
      if (Z !== E) E = Z, $(C, ee.clientX, ee.clientY);
      else if (C) {
        const L = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        X.style.left = `${ee.clientX - L.left}px`, X.style.top = `${ee.clientY - L.top}px`;
      }
    });
  };
  let q = null;
  const T = () => {
    E = "", c.visible = false, x.visible = false, M.visible = false, Y.visible = false, Q.visible = false, X.style.display = "none", e.render();
  }, ie = (ee) => {
    const C = e.rendererElm.getBoundingClientRect(), Z = ee.clientX - C.left, L = ee.clientY - C.top;
    (Z < -2 || L < -2 || Z > C.width + 2 || L > C.height + 2) && (q && clearTimeout(q), q = window.setTimeout(T, 200));
  }, N = () => {
    q && (clearTimeout(q), q = null);
  };
  e.rendererElm.addEventListener("pointermove", j), e.rendererElm.addEventListener("pointerleave", ie), e.rendererElm.addEventListener("pointerenter", N);
  function re() {
    var _a, _b, _c;
    const ee = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    return ee === "select" || ee === "none" || !ee;
  }
  let ce = null;
  e.rendererElm.addEventListener("pointerdown", (ee) => {
    ee.button === 0 && (ce = { x: ee.clientX, y: ee.clientY });
  }), e.rendererElm.addEventListener("pointerup", (ee) => {
    if (ee.button !== 0 || !ce) return;
    const C = ee.clientX - ce.x, Z = ee.clientY - ce.y;
    if (ce = null, C * C + Z * Z > 9 || !re()) return;
    const L = F(ee.clientX, ee.clientY);
    L ? (nt({ type: L.type, idx: L.idx }, ee.shiftKey), Fe()) : ot();
  }), window.addEventListener("keydown", (ee) => {
    if (ee.key !== "Escape" || !B.length) return;
    const C = document.activeElement, Z = !!C && (C.id === "hk3-cmd-input" || C.id === "hk-dyn-input") && C.value === "";
    C && (C.tagName === "INPUT" || C.tagName === "TEXTAREA" || C.isContentEditable) && !Z || ot();
  }, { capture: true });
  function Pe() {
    for (const ee of I.children.slice()) {
      I.remove(ee);
      const C = ee.geometry;
      C && C !== u && C !== ne && C.dispose();
    }
  }
  function he(ee, C) {
    var _a, _b, _c;
    const Z = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
    if (ee.type === "node") {
      const L = V(ee.idx);
      if (!L) return;
      const J = ((_c = e.derivedDisplayScale) == null ? void 0 : _c.rawVal) ?? 1, oe = new Ue(u, _);
      oe.position.copy(L), oe.scale.setScalar(0.025 * C * J), oe.renderOrder = 101, I.add(oe);
    } else if (ee.type === "frame" && Z) {
      const L = Z[ee.idx], J = V(L[0]), oe = V(L[1]);
      if (!J || !oe) return;
      const ge = J.clone().add(oe).multiplyScalar(0.5), ye = oe.clone().sub(J), ke = ye.length(), Ve = e.getActiveCamera().position.distanceTo(ge), Ae = new Ue(ne, O);
      Ae.position.copy(ge);
      const $e = new b(0, 1, 0);
      Ae.quaternion.setFromAxisAngle($e.clone().cross(ye).normalize(), $e.angleTo(ye)), Ae.scale.set(Ve * 35e-4, ke, Ve * 35e-4), Ae.renderOrder = 101, I.add(Ae);
    } else if (ee.type === "shell" && Z) {
      const L = Z[ee.idx], J = [], oe = [];
      for (const ke of L) {
        const Ve = V(ke);
        if (!Ve) return;
        J.push(Ve.x, Ve.y, Ve.z);
      }
      L.length === 4 ? oe.push(0, 1, 2, 0, 2, 3) : L.length === 3 && oe.push(0, 1, 2);
      const ge = new me();
      ge.setAttribute("position", new ft(J, 3)), ge.setIndex(oe), ge.computeVertexNormals();
      const ye = new Ue(ge, be);
      ye.renderOrder = 101, I.add(ye);
    } else if (ee.type === "solid" && Z) {
      const L = Z[ee.idx], J = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], oe = [];
      for (const [ke, Ve] of J) {
        const Ae = V(L[ke]), $e = V(L[Ve]);
        Ae && $e && oe.push(Ae.x, Ae.y, Ae.z, $e.x, $e.y, $e.z);
      }
      const ge = new me();
      ge.setAttribute("position", new ft(oe, 3));
      const ye = new Xt(ge, fe);
      ye.renderOrder = 101, I.add(ye);
    }
  }
  function Fe() {
    if (Pe(), !B.length || !e.mesh) {
      e.render();
      return;
    }
    const ee = e.derivedNodes.rawVal ?? [];
    let C = 1;
    if (ee.length >= 2) {
      const Z = [1 / 0, 1 / 0, 1 / 0], L = [-1 / 0, -1 / 0, -1 / 0];
      for (const J of ee) for (let oe = 0; oe < 3; oe++) J[oe] < Z[oe] && (Z[oe] = J[oe]), J[oe] > L[oe] && (L[oe] = J[oe]);
      C = Math.max(L[0] - Z[0], L[1] - Z[1], L[2] - Z[2], 0.1);
    }
    for (const Z of B) he(Z, C);
    e.render();
  }
  function nt(ee, C) {
    const Z = B.findIndex((L) => L.type === ee.type && L.idx === ee.idx);
    Z >= 0 ? B.splice(Z, 1) : C || B.push(ee), B.length && B[B.length - 1];
  }
  function ot() {
    B.length = 0, Fe();
  }
  return D.derive(() => {
    e.derivedNodes.val, B.length && Fe();
  }), a;
}
function Os(e, a, u, m, c, w) {
  const p = c - u, x = w - m, g = p * p + x * x;
  if (g < 1e-9) {
    const te = e - u, Q = a - m;
    return Math.sqrt(te * te + Q * Q);
  }
  let M = ((e - u) * p + (a - m) * x) / g;
  M = Math.max(0, Math.min(1, M));
  const z = u + M * p, v = m + M * x, Y = e - z, de = a - v;
  return Math.sqrt(Y * Y + de * de);
}
function js(e, a, u) {
  let m = false;
  for (let c = 0, w = u.length - 1; c < u.length; w = c++) {
    const p = u[c].x, x = u[c].y, g = u[w].x, M = u[w].y;
    x > a != M > a && e < (g - p) * (a - x) / (M - x + 1e-12) + p && (m = !m);
  }
  return m;
}
function Vo(e, a = 8) {
  const u = document.createElement("div");
  u.id = "legend", u.style.setProperty("--legend-n", String(a)), setTimeout(() => {
    D.derive(() => {
      An.val, u.style.background = hs();
    });
  });
  const m = document.createElement("div");
  m.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", u.appendChild(m), setTimeout(() => {
    D.derive(() => {
      m.textContent = to.val ? `[${to.val}]` : "";
    });
  });
  const c = Array.from({ length: a + 1 }, (g, M) => M / a).reverse();
  let w, p;
  c.forEach((g, M) => {
    w = document.createElement("div"), w.id = `marker-${M}`, w.className = "marker", w.style.marginTop = M == 0 ? "0px" : "calc(var(--legend-h) / var(--legend-n) - 1px)", p = document.createElement("p"), p.id = `marker-text-${M}`, w.append(p), u.append(w);
  });
  const x = [];
  return u.querySelectorAll("p").forEach((g) => x.push(g)), setTimeout(() => {
    D.derive(() => {
      c.forEach((g, M) => {
        const z = x[M];
        z && (z.innerText = ea(e.val, g).toString());
      });
    });
  }), u;
}
function ea(e, a) {
  const u = so.val;
  if (u) return (u[0] + a * (u[1] - u[0])).toPrecision(3);
  const m = e.filter((p) => Number.isFinite(p));
  if (m.length === 0) return "0";
  let c = Math.min(...m);
  const w = Math.max(...m);
  return c >= 0 && w > 0 && (c = 0), (c + a * (w - c)).toPrecision(3);
}
function ua({ mesh: e, settingsObj: a, drawingObj: u, objects3D: m, solids: c }) {
  ps.DEFAULT_UP = new b(0, 0, 1);
  const w = document.createElement("div"), p = new ls(), x = new rs(45, 1, 0.1, 2 * 1e6), g = new cs(-10, 10, 10, -10, -1e3, 2e6);
  let M = x;
  const z = new ds({ antialias: true });
  z.localClippingEnabled = true;
  const v = new ko(x, z.domElement);
  v.enableDamping = true, v.dampingFactor = 0.1, v.screenSpacePanning = true, v.zoomSpeed = 0.8, v.panSpeed = 1.2, v.rotateSpeed = 0.9, v.keyPanSpeed = 12, v.listenToKeyEvents(window), v.touches = { ONE: Sn.ROTATE, TWO: Sn.DOLLY_PAN }, z.domElement.addEventListener("wheel", (C) => {
    if (!C.ctrlKey && Math.abs(C.deltaX) > Math.abs(C.deltaY) * 1.5) {
      C.preventDefault();
      const Z = v.target, L = new b().subVectors(x.position, Z), J = new b();
      J.crossVectors(x.up, L).normalize();
      const ge = L.length() * 1e-3 * v.panSpeed;
      Z.addScaledVector(J, C.deltaX * ge), x.position.addScaledVector(J, C.deltaX * ge), v.update();
    }
  }, { passive: false });
  const Y = new Jn(new b(-1, 0, 0), 0), de = new Jn(new b(0, -1, 0), 0), te = new Jn(new b(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function Q() {
    const C = window.__hekatanClip, Z = [];
    C.enableX && (Y.normal.set(C.invertX ? 1 : -1, 0, 0), Y.constant = C.invertX ? -C.posX : C.posX, Z.push(Y)), C.enableY && (de.normal.set(0, C.invertY ? 1 : -1, 0), de.constant = C.invertY ? -C.posY : C.posY, Z.push(de)), C.enableZ && (te.normal.set(0, 0, C.invertZ ? 1 : -1), te.constant = C.invertZ ? -C.posZ : C.posZ, Z.push(te)), z.clippingPlanes = Z, p.traverse((J) => {
      const oe = J;
      if (oe.material) {
        const ge = Array.isArray(oe.material) ? oe.material : [oe.material];
        for (const ye of ge) ye.clippingPlanes = Z, ye.needsUpdate = true;
      }
    });
    const L = window.__hekatanPanes ?? [];
    for (const J of L) try {
      J && typeof J.refresh == "function" && J.refresh();
    } catch {
    }
    z.render(p, M);
  }
  Q(), window.__hekatanClipApply = Q;
  const _ = ys(a), O = D.derive(() => Math.pow(10, _.displayScale.val / 10)), ne = ta(e, _), be = () => {
    const C = [];
    return _.gridXY.rawVal && C.push("xy"), _.gridXZ.rawVal && C.push("xz"), _.gridYZ.rawVal && C.push("yz"), C;
  }, fe = () => {
    const C = _.gridStep.rawVal, Z = Math.max(C, _.gridMajor.rawVal);
    return { planes: be(), majorStep: Z, minorStep: C };
  };
  let B = On(_.gridSize.rawVal, fe());
  B.visible = _.gridVisible.rawVal, window.__hekatanSnap2D = _.cursorSnap.rawVal;
  const I = () => {
    const C = Math.max(0, Math.min(1, _.gridOpacity.rawVal));
    B.traverse((Z) => {
      const L = Z.material;
      if (!L || !("opacity" in L)) return;
      const J = Z.name ?? "";
      let oe = 0.35;
      J.includes("border") ? oe = 1 : J.includes("major") && (oe = 0.75), L.opacity = C * oe;
    });
  };
  I(), w.appendChild(ws(_, e, c)), w.setAttribute("id", "viewer"), w.appendChild(z.domElement), z.setPixelRatio(window.devicePixelRatio);
  const X = en();
  z.setClearColor(X.background, 1);
  const V = _.gridSize.rawVal, F = V * 0.5 + V * 0.5 / Math.tan(45 * 0.5);
  x.position.set(0, 0, F), x.up.set(0, 1, 0), v.target.set(0, 0, 0), v.minDistance = 0.1, v.maxDistance = 1e4, w.__settings = _, v.zoomSpeed = 1, v._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, v.update();
  let $ = zo(_.gridSize.rawVal, _.flipAxes.rawVal);
  p.add(B, $), D.derive(() => {
    window.__hekatanGridPlaneXY = _.gridXY.val, window.__hekatanGridPlaneXZ = _.gridXZ.val, window.__hekatanGridPlaneYZ = _.gridYZ.val;
  });
  let E = true;
  D.derive(() => {
    const C = _.gridVisible.val;
    if (E) {
      E = false;
      return;
    }
    B.visible = C, N();
  });
  let A = true;
  D.derive(() => {
    if (_.gridOpacity.val, A) {
      A = false;
      return;
    }
    I(), N();
  }), D.derive(() => {
    const C = _.cursorSnap.val;
    window.__hekatanSnap2D = C;
  });
  let W = true;
  D.derive(() => {
    var _a;
    const C = _.gridSize.val, Z = _.flipAxes.val;
    if (_.gridXY.val, _.gridXZ.val, _.gridYZ.val, _.gridStep.val, _.gridMajor.val, W) {
      W = false;
      return;
    }
    p.remove(B), (_a = B.traverse) == null ? void 0 : _a.call(B, (oe) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = oe.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = oe.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), B = On(C, fe()), B.visible = _.gridVisible.rawVal, p.add(B), I(), p.remove($), $.traverse((oe) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = oe.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = oe.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), $ = zo(C, Z), p.add($);
    const L = C * 0.5 + C * 0.5 / Math.tan(45 * 0.5);
    x.position.distanceTo(v.target), Math.abs(x.position.x) < 0.1 && Math.abs(x.position.y) < 0.1 && x.position.z > 0 ? x.position.set(0, 0, L) : x.position.set(0.5 * C, -L, 0.5 * C), v.target.set(0, 0, 0), v.minDistance = Math.max(0.05, C * 0.01), v.maxDistance = Math.max(50, C * 50), v.update(), N();
  }), new ResizeObserver((C) => {
    var _a, _b;
    for (const Z of C) {
      const L = (_a = Z.target) == null ? void 0 : _a.clientWidth, J = (_b = Z.target) == null ? void 0 : _b.clientHeight;
      if (L === 0 || J === 0) continue;
      const ge = (j ? L / 2 : L) / J;
      x.aspect = ge, x.updateProjectionMatrix();
      const ye = g.top;
      if (g.left = -ye * ge, g.right = ye * ge, g.updateProjectionMatrix(), q && q.isPerspectiveCamera) q.aspect = ge, q.updateProjectionMatrix();
      else if (q && q.isOrthographicCamera) {
        const ke = q, Ve = ke.top;
        ke.left = -Ve * ge, ke.right = Ve * ge, ke.updateProjectionMatrix();
      }
      z.setSize(L, J), N();
    }
  }).observe(w), v.addEventListener("change", N), D.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, _.displayScale.val, _.nodes.val, _.elements.val, (_g = _.edges) == null ? void 0 : _g.val, _.elemColumns.val, _.elemBeams.val, _.nodesIndexes.val, _.elementsIndexes.val, _.orientations.val, _.sections.val, _.secColumns.val, _.secBeams.val, _.secFloor.val, _.supports.val, _.loads.val, _.deformedShape.val, _.nodeResults.val, _.frameResults.val, _.shellResults.val, (_h = _.solidResults) == null ? void 0 : _h.val, (_i = _.extruded) == null ? void 0 : _i.val, setTimeout(N);
  });
  let j = false, q = null, T = null, ie = false;
  function N() {
    const C = w.clientWidth || 1, Z = w.clientHeight || 1;
    if (!j || !q) {
      z.setScissorTest(false), z.setViewport(0, 0, C, Z), z.render(p, M);
      return;
    }
    const L = C / 2;
    z.setScissorTest(true), z.setViewport(0, 0, L, Z), z.setScissor(0, 0, L, Z), z.render(p, M), z.setViewport(L, 0, L, Z), z.setScissor(L, 0, L, Z), z.render(p, q), z.setScissorTest(false);
  }
  function re(C) {
    M = C, v.object = C, v.update(), N();
  }
  function ce(C, Z) {
    j = C, Z && (q = Z);
    const L = w.clientWidth || 1, J = w.clientHeight || 1, ge = (C ? L / 2 : L) / J;
    x.isPerspectiveCamera && (x.aspect = ge, x.updateProjectionMatrix());
    const ye = g.top;
    if (g.left = -ye * ge, g.right = ye * ge, g.updateProjectionMatrix(), C && q) {
      if (T ? (T.object = q, T.update()) : (T = new ko(q, z.domElement), T.enableDamping = true, T.dampingFactor = 0.1, T.screenSpacePanning = true, T.zoomSpeed = 0.8, T.panSpeed = 1.2, T.rotateSpeed = 0.9, T.touches = { ONE: Sn.ROTATE, TWO: Sn.DOLLY_PAN }, T.target.copy(v.target), T.addEventListener("change", N), T.enabled = false), !ie) {
        const ke = (Ve) => {
          if (!j || !T) return;
          const Ae = z.domElement.getBoundingClientRect(), $e = Ve.clientX - Ae.left, Re = Ae.width / 2, He = $e >= Re;
          v.enabled = !He, T.enabled = He;
        };
        z.domElement.addEventListener("pointerdown", ke, true), z.domElement.addEventListener("wheel", ke, { capture: true, passive: true }), ie = true;
      }
    } else C || (v.enabled = true, T && (T.enabled = false));
    w.__splitMode = C, window.__hekatanSplitMode = C, window.__hekatanSplitCamera = C ? q : null, N();
  }
  if (e) {
    p.add(xs(_, ne, O), us(e, _, ne), Ms(_, ne, O), bs(e, _, ne, O), gs(e, _, ne, O), vs(e, _, ne, O), ks(e, _, ne, O), zs(e, _, ne, O), As(e, _, ne), Is(e, _, ne, O), Ts(e, _, ne, O));
    const C = Qs({ scene: p, rendererElm: z.domElement, getActiveCamera: () => M, derivedNodes: ne, derivedDisplayScale: O, mesh: e, settings: _, render: N });
    p.add(C);
    const Z = la(e, _), L = Rs(e, _, ne, Z), J = Vo(Z);
    p.add(L), w.appendChild(J);
    const oe = Zs(e, _, ne);
    p.add(oe);
    const ge = oe.__colorMapValues, ye = Vo(ge);
    ye.id = "frame-legend", w.appendChild(ye), D.derive(() => {
      var _a;
      const ke = _.shellResults.val != "none", Ve = (((_a = _.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", Ae = ke || Ve, $e = _.frameResults.val.startsWith("contour:");
      J.hidden = !Ae, L.visible = Ae, ye.hidden = !$e;
    });
  }
  if (c) {
    const C = new $o(16777215, 0.5);
    p.add(C);
    const Z = new Vn(16777215, 0.5);
    Z.position.set(30, 25, -10), Z.shadow.mapSize.width = 1024, Z.shadow.mapSize.height = 1024, p.add(Z);
    const L = 10;
    Z.shadow.camera.left = -L, Z.shadow.camera.right = L, Z.shadow.camera.top = L, Z.shadow.camera.bottom = -L, Z.shadow.camera.far = 1e3;
    const J = new Vn(16777215, 0.5);
    J.color.setHSL(11, 43, 96), J.position.set(-10, 0, 30), p.add(J), D.derive(() => {
      (c == null ? void 0 : c.val.length) && (p.remove(...c.oldVal), p.add(...c.rawVal), N());
    }), D.derive(() => {
      c.rawVal.forEach((oe) => oe.visible = _.solids.val), N();
    });
  }
  if (m) {
    const C = [], Z = (J) => {
      var _a;
      return ((_a = J == null ? void 0 : J.userData) == null ? void 0 : _a.isCota) ? _.showCotas.val : _.custom3D.val;
    }, L = () => {
      for (const J of C) J.visible = Z(J);
      N();
    };
    D.derive(() => {
      const J = m.val;
      C.length && (p.remove(...C), C.length = 0), J.length && (p.add(...J), C.push(...J), L()), N();
    }), D.derive(() => {
      _.custom3D.val, L();
    }), D.derive(() => {
      _.showCotas.val, L();
    });
  }
  u && Ls({ drawingObj: u, gridObj: B, scene: p, getActiveCamera: () => M, controls: v, gridSize: V, derivedDisplayScale: O, rendererElm: z.domElement, viewerRender: N }), To((C, Z) => {
    var _a;
    z.setClearColor(Z.background, 1), p.remove(B), (_a = B.traverse) == null ? void 0 : _a.call(B, (L) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = L.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = L.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), B = On(_.gridSize.rawVal, { planes: be() }), p.add(B), w.style.setProperty("--awatif-legend-color", Z.legendMarker), N();
  });
  const Pe = { scene: p, perspCamera: x, orthoCamera: g, get camera() {
    return M;
  }, controls: v, renderer: z, rendererElm: z.domElement, render: N, setActiveCamera: re, setSplitMode: ce, get splitMode() {
    return j;
  }, get splitCamera() {
    return q;
  }, settings: _ };
  w.__ctx = Pe;
  const he = document.createElement("div");
  he.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const Fe = (C, Z, L) => {
    const J = document.createElement("button");
    return J.textContent = C, J.title = Z, J.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), J.onmouseenter = () => {
      J.style.background = "rgba(70,70,70,0.9)";
    }, J.onmouseleave = () => {
      J.style.background = "rgba(40,40,40,0.85)";
    }, J.onclick = (oe) => {
      oe.preventDefault(), L();
    }, J;
  }, nt = (C, Z) => {
    const L = v.target, J = new b().subVectors(M.position, L), oe = J.length(), ge = new b(), ye = new b();
    ge.crossVectors(M.up, J).normalize(), ye.copy(M.up).normalize();
    const ke = oe * 0.05;
    L.addScaledVector(ge, -C * ke), L.addScaledVector(ye, Z * ke), M.position.addScaledVector(ge, -C * ke), M.position.addScaledVector(ye, Z * ke), v.update(), N();
  }, ot = (C) => {
    const Z = new b().subVectors(M.position, v.target);
    Z.multiplyScalar(C), M.position.copy(v.target).add(Z), v.update(), N();
  }, ee = () => {
    const C = document.createElement("div");
    return C.style.cssText = "width:32px;height:32px;", C;
  };
  return he.append(ee()), he.append(Fe("\u2191", "Pan arriba", () => nt(0, 1))), he.append(Fe("\u2295", "Zoom in", () => ot(0.85))), he.append(Fe("\u2190", "Pan izquierda", () => nt(-1, 0))), he.append(Fe("\u2302", "Reset vista", () => {
    v.reset(), N();
  })), he.append(Fe("\u2192", "Pan derecha", () => nt(1, 0))), he.append(Fe("\u2296", "Zoom out", () => ot(1.18))), he.append(Fe("\u2193", "Pan abajo", () => nt(0, -1))), he.append(ee()), getComputedStyle(w).position === "static" && (w.style.position = "relative"), w.appendChild(he), w;
}
function ta(e, a) {
  return D.derive(() => {
    var _a, _b, _c, _d;
    if (!a.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const u = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], m = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!m || u.length === 0) return u;
    const c = a.deformScale.val, w = a.deformScale.val * a.deformScaleZ.val, p = Number.isFinite(c) ? c : 1, x = Number.isFinite(w) ? w : 1;
    return u.map((g, M) => {
      var _a2;
      const z = ((_a2 = m.get(M)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], v = Number.isFinite(z[0]) ? z[0] : 0, Y = Number.isFinite(z[1]) ? z[1] : 0, de = Number.isFinite(z[2]) ? z[2] : 0;
      return [g[0] + v * p, g[1] + Y * p, g[2] + de * x];
    });
  });
}
const so = D.state(null), to = D.state(""), na = D.state("kN"), oa = D.state("mm"), sa = D.state("kN/m\xB2"), aa = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, Ao = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402, ft: 3.280839895 }, ia = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function la(e, a) {
  const u = D.state([]);
  let m;
  return ((c) => {
    c.bendingXX = "bendingXX", c.bendingYY = "bendingYY", c.bendingXY = "bendingXY", c.membraneXX = "membraneXX", c.membraneYY = "membraneYY", c.membraneXY = "membraneXY", c.tranverseShearX = "tranverseShearX", c.tranverseShearY = "tranverseShearY", c.membranePrincipalMax = "membranePrincipalMax", c.membranePrincipalMin = "membranePrincipalMin", c.bendingPrincipalMax = "bendingPrincipalMax", c.bendingPrincipalMin = "bendingPrincipalMin", c.transverseShearMax = "transverseShearMax", c.vonMises = "vonMises", c.pressure = "pressure", c.displacementX = "displacementX", c.displacementY = "displacementY", c.displacementZ = "displacementZ";
  })(m || (m = {})), D.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const c = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), te = (C, Z) => {
      C == null ? void 0 : C.forEach((L, J) => {
        const oe = e.elements.val[J];
        if (oe) for (let ge = 0; ge < oe.length; ge++) Z.set(oe[ge], [L[ge] ?? L[0]]);
      });
    };
    te((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, c), te((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, w), te((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, p), te((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, x), te((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, g), te((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, M), te((_n2 = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n2.tranverseShearX, z), te((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, v), te((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, Y), te((_t = (_s2 = e.analyzeOutputs) == null ? void 0 : _s2.val) == null ? void 0 : _t.pressure, de);
    const Q = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), fe = (C, Z, L, J, oe) => {
      C.forEach((ge, ye) => {
        var _a2, _b2;
        const ke = ge[0] ?? 0, Ve = ((_a2 = Z.get(ye)) == null ? void 0 : _a2[0]) ?? 0, Ae = ((_b2 = L.get(ye)) == null ? void 0 : _b2[0]) ?? 0, $e = (ke + Ve) / 2, Re = Math.hypot((ke - Ve) / 2, Ae);
        J.set(ye, [$e + Re]), oe.set(ye, [$e - Re]);
      });
    };
    fe(x, g, M, Q, _), fe(c, w, p, O, ne), z.forEach((C, Z) => {
      var _a2;
      be.set(Z, [Math.hypot(C[0] ?? 0, ((_a2 = v.get(Z)) == null ? void 0 : _a2[0]) ?? 0)]);
    });
    const B = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, I = (_w = a.solidResults) == null ? void 0 : _w.val, V = I && I !== "none" ? I : a.shellResults.val, F = B == null ? void 0 : B[V], $ = { bendingXX: [c, 0], bendingYY: [w, 0], bendingXY: [p, 0], membraneXX: [x, 0], membraneYY: [g, 0], membraneXY: [M, 0], tranverseShearX: [z, 0], tranverseShearY: [v, 0], membranePrincipalMax: [Q, 0], membranePrincipalMin: [_, 0], bendingPrincipalMax: [O, 0], bendingPrincipalMin: [ne, 0], transverseShearMax: [be, 0], vonMises: [Y, 0], pressure: [de, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, E = a.shellResults.val, A = na.val, W = oa.val, se = E === "displacementX" || E === "displacementY" || E === "displacementZ", j = E === "bendingXX" || E === "bendingYY" || E === "bendingXY" || E === "bendingPrincipalMax" || E === "bendingPrincipalMin", q = E === "membraneXX" || E === "membraneYY" || E === "membraneXY" || E === "membranePrincipalMax" || E === "membranePrincipalMin", T = E === "vonMises" || E === "pressure", ie = E === "tranverseShearX" || E === "tranverseShearY" || E === "transverseShearMax", N = (_D = a.solidResults) == null ? void 0 : _D.val, re = N === "vonMises" || N === "sigmaXX" || N === "sigmaYY" || N === "sigmaZZ" || N === "tauXY" || N === "tauYZ" || N === "tauXZ", ce = N === "ux" || N === "uy" || N === "uz", Pe = sa.val, he = re ? ia[Pe] : ce || se ? Ao[W] : j || q || T || ie ? 1 / aa[A] : 1, Fe = re ? Pe : ce || se ? W : j ? `${A}\xB7m/m` : q ? `${A}/m\xB2` : T ? `${A}/m\xB2` : ie ? `${A}/m` : "";
    to.val = Fe, so.val = Array.isArray(F) && F.length === 2 ? [F[0] * he, F[1] * he] : null;
    const ot = N && N !== "none" ? [Y, 0] : $[E], ee = [];
    e.nodes.val.forEach((C, Z) => {
      const L = ot;
      if (!L || !L[0] || typeof L[0].has != "function") return;
      if (!L[0].has(Z)) {
        ee.push(Number.NaN);
        return;
      }
      const J = L[0].get(Z), oe = J ? J[L[1]] ?? 0 : 0;
      ee.push(oe * he);
    }), u.val = ee;
  }), u;
}
export {
  ms as a,
  Vo as b,
  na as c,
  oa as d,
  sa as e,
  ua as g
};
