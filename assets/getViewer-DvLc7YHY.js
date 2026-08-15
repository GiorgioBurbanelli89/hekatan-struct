import { N as It, a6 as bn, q as Go, v as I, a7 as Ho, D as Ft, M as He, B as he, F as _t, a8 as qo, x as it, a9 as Jo, aa as Qo, h as ho, ab as mo, r as en, ac as zn, ad as Pn, a4 as Fo, _ as Oe, a as lt, L as Xt, w as Vo, b as Oo, ae as jo, f as et, V as m, $ as jt, af as Un, H as Ao, d as bt, z as Cn, ag as Fn, t as es, o as ts, I as Gt, a2 as yn, E as wo, S as cn, m as Kn, ah as xn, g as yo, i as xo, j as go, C as vo, K as ns, U as os, W as ss, X as as, T as _n, P as Wn, Y as is, Z as Mo, O as ls } from "./theme-Co6w-pfC.js";
import { T as xt, O as bo } from "./Text-2W5davkr.js";
import { P as To } from "./tweakpane-BXg6ZhiP.js";
import { e as rs } from "./styles-CcTqhjpF.js";
class Eo {
  constructor(i, w = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(i, w);
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
  setColorMap(i, w = 32) {
    this.map = Gn[i] || Gn.rainbow, this.n = w;
    const h = 1 / this.n, u = new It(), _ = new It();
    this.lut.length = 0, this.lut.push(new It(this.map[0][1]));
    for (let x = 1; x < w; x++) {
      const y = x * h;
      for (let v = 0; v < this.map.length - 1; v++) if (y > this.map[v][0] && y <= this.map[v + 1][0]) {
        const z = this.map[v][0], C = this.map[v + 1][0];
        u.setHex(this.map[v][1], bn), _.setHex(this.map[v + 1][1], bn);
        const b = new It().lerpColors(u, _, (y - z) / (C - z));
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
    const w = Math.round(i * this.n);
    return this.lut[w];
  }
  addColorMap(i, w) {
    return Gn[i] = w, this;
  }
  createCanvas() {
    const i = document.createElement("canvas");
    return i.width = 1, i.height = this.n, this.updateCanvas(i), i;
  }
  updateCanvas(i) {
    const w = i.getContext("2d", { alpha: false }), h = w.getImageData(0, 0, 1, this.n), u = h.data;
    let _ = 0;
    const x = 1 / this.n, y = new It(), v = new It(), z = new It();
    for (let C = 1; C >= 0; C -= x) for (let b = this.map.length - 1; b >= 0; b--) if (C < this.map[b][0] && C >= this.map[b - 1][0]) {
      const K = this.map[b - 1][0], re = this.map[b][0];
      y.setHex(this.map[b - 1][1], bn), v.setHex(this.map[b][1], bn), z.lerpColors(y, v, (C - K) / (re - K)), u[_ * 4] = Math.round(z.r * 255), u[_ * 4 + 1] = Math.round(z.g * 255), u[_ * 4 + 2] = Math.round(z.b * 255), u[_ * 4 + 3] = 255, _ += 1;
    }
    return w.putImageData(h, 0, 0), i;
  }
}
const Gn = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, $o = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]], cs = { safe: [[0, 224, 13, 107], [0.13, 221, 20, 50], [0.27, 252, 99, 39], [0.4, 254, 161, 47], [0.52, 238, 234, 25], [0.64, 5, 193, 69], [0.78, 7, 178, 244], [0.9, 4, 132, 213], [1, 90, 175, 230]], csi: $o, jet_r: [[0, 200, 0, 0], [0.15, 255, 80, 0], [0.32, 255, 200, 0], [0.48, 180, 255, 0], [0.6, 0, 230, 90], [0.74, 0, 220, 230], [0.88, 0, 110, 255], [1, 0, 0, 180]], jet: [[0, 0, 0, 180], [0.12, 0, 110, 255], [0.26, 0, 220, 230], [0.4, 0, 230, 90], [0.52, 180, 255, 0], [0.68, 255, 200, 0], [0.85, 255, 80, 0], [1, 200, 0, 0]], viridis: [[0, 68, 1, 84], [0.25, 59, 82, 139], [0.5, 33, 145, 140], [0.75, 94, 201, 98], [1, 253, 231, 37]] }, Vn = I.state("safe");
function Io(e) {
  e = Math.max(0, Math.min(1, e));
  const i = cs[Vn.val] ?? $o;
  for (let h = 0; h < i.length - 1; h++) {
    const [u, _, x, y] = i[h], [v, z, C, b] = i[h + 1];
    if (e <= v) {
      const K = (e - u) / (v - u);
      return [_ + (z - _) * K, x + (C - x) * K, y + (b - y) * K];
    }
  }
  const w = i[i.length - 1];
  return [w[1], w[2], w[3]];
}
function _o() {
  const i = new Uint8Array(1024);
  for (let h = 0; h < 256; h++) {
    const u = h / 255, [_, x, y] = Io(u);
    i[h * 4 + 0] = _, i[h * 4 + 1] = x, i[h * 4 + 2] = y, i[h * 4 + 3] = 255;
  }
  const w = new Jo(i, 256, 1, Qo);
  return w.minFilter = ho, w.magFilter = ho, w.wrapS = mo, w.wrapT = mo, w.needsUpdate = true, w;
}
function ds() {
  const i = [];
  for (let w = 0; w <= 12; w++) {
    const h = 1 - w / 12, [u, _, x] = Io(h);
    i.push(`rgb(${u | 0},${_ | 0},${x | 0}) ${(w / 12 * 100).toFixed(0)}%`);
  }
  return `linear-gradient(${i.join(",")})`;
}
function ps(e, i, w) {
  new Eo();
  const h = _o(), u = new Ho({ uniforms: { cmap: { value: h }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: Ft, transparent: false, clipping: true, depthWrite: true, depthTest: true });
  I.derive(() => {
    var _a;
    Vn.val;
    const x = u.uniforms.cmap.value;
    u.uniforms.cmap.value = _o(), (_a = x == null ? void 0 : x.dispose) == null ? void 0 : _a.call(x);
  });
  const _ = new He(new he(), u);
  return _.renderOrder = -1, _.frustumCulled = false, _.userData.isShellArea = true, _.name = "__hekatan_shell_colormap", I.derive(() => {
    _.geometry.setAttribute("position", new _t(e.val.flat(), 3));
    const x = [];
    for (const k of i.val) k.length === 3 ? x.push(k[0], k[1], k[2]) : k.length === 4 && (x.push(k[0], k[1], k[2]), x.push(k[0], k[2], k[3]));
    _.geometry.setIndex(new qo(x, 1));
    const y = w.val.filter((k) => Number.isFinite(k));
    let v, z;
    const C = eo.val;
    if (C ? (z = C[0], v = C[1]) : (v = y.length ? Math.max(...y) : 1, z = y.length ? Math.min(...y) : 0, z >= 0 && v > 0 && (z = 0)), v === z) {
      const k = Math.max(Math.abs(v) * 1e-6, 1e-9);
      v += k, z -= k;
    }
    const b = C && C[0] > C[1], K = Math.min(z, v), re = Math.max(z, v), ce = re - K, ue = new Float32Array(w.val.length);
    for (let k = 0; k < w.val.length; k++) {
      const j = w.val[k];
      if (!Number.isFinite(j)) {
        ue[k] = -1;
        continue;
      }
      const Se = ((b ? re + K - j : j) - K) / ce;
      ue[k] = Math.max(0, Math.min(1, Se));
    }
    _.geometry.setAttribute("scalar", new it(ue, 1));
  }), _;
}
function us(e, i, w) {
  const h = document.createElement("div"), u = new To({ title: "Settings", expanded: true, container: h });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(u), h.setAttribute("id", "settings");
  const _ = "hk_settingsPos";
  let x = null;
  try {
    const b = localStorage.getItem(_);
    b && (x = JSON.parse(b));
  } catch {
  }
  h.style.cssText = ["position:fixed", x ? `left:${x.left}px` : "left:8px", x ? `top:${x.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const y = () => {
    const b = h.querySelector(".tp-rotv_b");
    if (!b) {
      setTimeout(y, 200);
      return;
    }
    b.style.cursor = "move", b.style.userSelect = "none";
    let K = false, re = 0, ce = 0, ue = 0, k = 0;
    b.addEventListener("mousedown", (j) => {
      K = true, re = j.clientX, ce = j.clientY;
      const me = h.getBoundingClientRect();
      ue = me.left, k = me.top, h.style.left = `${ue}px`, h.style.top = `${k}px`;
    }), window.addEventListener("mousemove", (j) => {
      if (!K) return;
      const me = j.clientX - re, Se = j.clientY - ce, ze = Math.max(0, Math.min(window.innerWidth - 40, ue + me)), D = Math.max(0, Math.min(window.innerHeight - 40, k + Se));
      h.style.left = `${ze}px`, h.style.top = `${D}px`;
    }), window.addEventListener("mouseup", () => {
      if (K) {
        K = false;
        try {
          localStorage.setItem(_, JSON.stringify({ left: parseFloat(h.style.left), top: parseFloat(h.style.top) }));
        } catch {
        }
      }
    });
  };
  if (y(), i == null ? void 0 : i.nodes) {
    u.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 0.5 });
    const b = u.addFolder({ title: "\u{1F4D0} Grid", expanded: false });
    b.addBinding(e.gridSize, "val", { label: "Dimensi\xF3n (m)", min: 1, max: 100, step: 1 }), b.addBinding(e.gridStep, "val", { label: "Separaci\xF3n grid (m)", min: 0.05, max: 5, step: 0.05 }), b.addBinding(e.gridMajor, "val", { label: "Separaci\xF3n mayores (m)", min: 0.1, max: 50, step: 0.1 }), b.addBinding(e.cursorSnap, "val", { label: "Paso cursor (m)", min: 0.05, max: 5, step: 0.05 }), b.addBinding(e.gridVisible, "val", { label: "Mostrar" }), b.addBinding(e.gridOpacity, "val", { label: "Opacidad", min: 0, max: 1, step: 0.05 }), b.addBinding(e.gridXY, "val", { label: "Plano XY (planta)" }), b.addBinding(e.gridXZ, "val", { label: "Plano XZ (frontal)" }), b.addBinding(e.gridYZ, "val", { label: "Plano YZ (lateral)" });
    const K = u.addFolder({ title: "\u{1F441} Ver", expanded: false });
    K.addBinding(e.nodes, "val", { label: "Nodes" }), K.addBinding(e.elements, "val", { label: "Elements" }), K.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), K.addBinding(e.faces, "val", { label: "  Caras (fill)" }), K.addBinding(e.elemFrames, "val", { label: "  Frames (todos)" }), K.addBinding(e.elemColumns, "val", { label: "    Columnas" }), K.addBinding(e.elemBeams, "val", { label: "    Vigas" }), K.addBinding(e.elemZapatas, "val", { label: "  Zapatas (shells z\u22640)" }), K.addBinding(e.elemLosas, "val", { label: "  Losas (shells z>0)" }), K.addBinding(e.colorByType, "val", { label: "  \u{1F3A8} Color por tipo" }), K.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), K.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), K.addBinding(e.orientations, "val", { label: "Orientations" }), K.addBinding(e.sections, "val", { label: "Sections" }), K.addBinding(e.sectionLabels, "val", { label: "  Sec. Labels (30x50)" }), K.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), K.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), K.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } });
  }
  if ((i == null ? void 0 : i.nodeInputs) || (i == null ? void 0 : i.elementInputs)) {
    const b = u.addFolder({ title: "\u{1F4CC} Analysis Inputs", expanded: false });
    b.addBinding(e.supports, "val", { label: "Supports" }), b.addBinding(e.loads, "val", { label: "Loads" }), b.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), b.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((i == null ? void 0 : i.deformOutputs) || (i == null ? void 0 : i.analyzeOutputs)) {
    const b = u.addFolder({ title: "\u{1F52C} Analyze", expanded: true });
    window.__hekatanOutputsFolder = b, b.addBinding(e.nodeResults, "val", { options: { none: "none", "U (deformations)": "deformations", "R (reactions)": "reactions" }, label: "Node results" }), b.addBinding(e.frameResults, "val", { options: { none: "none", "Axial Force": "normals", Torsion: "torsions", "Shear 2-2": "shearsY", "Shear 3-3": "shearsZ", "Moment 2-2": "bendingsY", "Moment 3-3": "bendingsZ", "Axial Force (diagram)": "contour:normals", "Shear 2-2 (diagram)": "contour:shearsY", "Shear 3-3 (diagram)": "contour:shearsZ", "Torsion (diagram)": "contour:torsions", "Moment 2-2 (diagram)": "contour:bendingsY", "Moment 3-3 (diagram)": "contour:bendingsZ" }, label: "Frame results" }), b.addBinding(e.shellResults, "val", { options: { none: "none", F11: "membraneXX", F22: "membraneYY", F12: "membraneXY", FMax: "membranePrincipalMax", FMin: "membranePrincipalMin", FVM: "vonMises", V13: "tranverseShearX", V23: "tranverseShearY", VMax: "transverseShearMax", M11: "bendingXX", M22: "bendingYY", M12: "bendingXY", MMax: "bendingPrincipalMax", MMin: "bendingPrincipalMin", "Pressure (suelo)": "pressure", Ux: "displacementX", Uy: "displacementY", Uz: "displacementZ" }, label: "Shell results" }), b.addBinding(Vn, "val", { options: { "SAFE (cimentaci\xF3n)": "safe", "ETABS / CSI (magenta\u2192azul)": "csi", "Jet_r (rojo\u2192azul)": "jet_r", "Jet (azul\u2192rojo)": "jet", Viridis: "viridis" }, label: "\u{1F3A8} Paleta colores" }), b.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), b.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), b.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), b.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  w && u.addBinding(e.solids, "val", { label: "Solids" });
  const v = u.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), z = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), C = () => {
    const b = window.__hekatanClipApply;
    typeof b == "function" && b();
  };
  return v.addBinding(z, "enableX", { label: "Cortar X" }).on("change", C), v.addBinding(z, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", C), v.addBinding(z, "invertX", { label: "  invertir X" }).on("change", C), v.addBinding(z, "enableY", { label: "Cortar Y" }).on("change", C), v.addBinding(z, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", C), v.addBinding(z, "invertY", { label: "  invertir Y" }).on("change", C), v.addBinding(z, "enableZ", { label: "Cortar Z" }).on("change", C), v.addBinding(z, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", C), v.addBinding(z, "invertZ", { label: "  invertir Z" }).on("change", C), h;
}
function fs(e) {
  return { gridSize: I.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: I.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: I.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: I.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: I.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: I.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: I.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: I.state((e == null ? void 0 : e.gridXZ) ?? true), gridYZ: I.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: I.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: I.state((e == null ? void 0 : e.nodes) ?? true), elements: I.state((e == null ? void 0 : e.elements) ?? true), edges: I.state((e == null ? void 0 : e.edges) ?? true), faces: I.state((e == null ? void 0 : e.faces) ?? true), elemColumns: I.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: I.state((e == null ? void 0 : e.elemBeams) ?? true), elemFrames: I.state((e == null ? void 0 : e.elemFrames) ?? true), elemZapatas: I.state((e == null ? void 0 : e.elemZapatas) ?? true), elemLosas: I.state((e == null ? void 0 : e.elemLosas) ?? true), colorByType: I.state((e == null ? void 0 : e.colorByType) ?? false), nodesIndexes: I.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: I.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: I.state((e == null ? void 0 : e.orientations) ?? false), sections: I.state((e == null ? void 0 : e.sections) ?? true), sectionLabels: I.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: I.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: I.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: I.state((e == null ? void 0 : e.secFloor) ?? -1), supports: I.state((e == null ? void 0 : e.supports) ?? true), loads: I.state((e == null ? void 0 : e.loads) ?? false), deformedShape: I.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: I.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: I.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: I.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: I.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: I.state((e == null ? void 0 : e.flipAxes) ?? false), solids: I.state((e == null ? void 0 : e.solids) ?? true), custom3D: I.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: I.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: I.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: I.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function hs(e, i, w) {
  const h = en(), u = new zn(new he(), new Pn({ color: h.nodePoint }));
  return Fo((_, x) => {
    u.material.color.setHex(x.nodePoint);
  }), u.frustumCulled = false, I.derive(() => {
    e.nodes.val && u.geometry.setAttribute("position", new _t(i.val.flat(), 3));
  }), I.derive(() => {
    if (w.val, i.val, !e.nodes.rawVal) return;
    const _ = i.rawVal ?? [];
    let x = e.gridSize.val * 0.5;
    if (_.length >= 2) {
      const v = [1 / 0, 1 / 0, 1 / 0], z = [-1 / 0, -1 / 0, -1 / 0];
      for (const C of _) for (let b = 0; b < 3; b++) v[b] = Math.min(v[b], C[b]), z[b] = Math.max(z[b], C[b]);
      x = Math.max(z[0] - v[0], z[1] - v[1], z[2] - v[2], 0.1);
    }
    const y = 0.03 * x;
    u.material.size = y * w.rawVal;
  }), I.derive(() => {
    u.visible = e.nodes.val;
  }), u;
}
function Hn(e, i) {
  const w = en(), h = new Oe();
  h.name = "hekatan-grid";
  const u = (i == null ? void 0 : i.planes) ?? ["xy"];
  let _ = (i == null ? void 0 : i.majorStep) ?? 1, x = (i == null ? void 0 : i.minorStep) ?? 0.1;
  for (_ <= 0 && (_ = 1), x <= 0 && (x = 0.1); e / x > 500; ) x *= 2;
  for (; e / _ > 100; ) _ *= 2;
  const y = e / 2;
  _ = Math.max(x, Math.round(_ / x) * x);
  const z = new It(w.grid), C = new It(w.grid).multiplyScalar(0.45), b = (re, ce, ue, k) => {
    const j = [], me = re === "xy" ? ($, A) => [$, A, 0] : re === "xz" ? ($, A) => [$, 0, A] : ($, A) => [0, $, A], Se = Math.floor(y / ce);
    for (let $ = -Se; $ <= Se; $++) {
      const A = $ * ce, E = me(A, -y), X = me(A, y);
      j.push(...E, ...X);
    }
    for (let $ = -Se; $ <= Se; $++) {
      const A = $ * ce, E = me(-y, A), X = me(y, A);
      j.push(...E, ...X);
    }
    const ze = new he();
    ze.setAttribute("position", new _t(j, 3));
    const D = new lt({ color: ue, transparent: true, opacity: k, depthWrite: false }), Z = new Xt(ze, D);
    return Z.name = `grid-${re}-${ce === x ? "minor" : "major"}`, Z;
  }, K = (re, ce, ue) => {
    const k = re === "xy" ? (Z, $) => [Z, $, 0] : re === "xz" ? (Z, $) => [Z, 0, $] : (Z, $) => [0, Z, $], j = [[-y, -y], [y, -y], [y, y], [-y, y]], me = [];
    for (const [Z, $] of j) me.push(...k(Z, $));
    const Se = new he();
    Se.setAttribute("position", new _t(me, 3));
    const ze = new lt({ color: ce, transparent: true, opacity: ue, depthWrite: false }), D = new Vo(Se, ze);
    return D.name = `grid-${re}-border`, D.renderOrder = 1, D;
  };
  for (const re of u) h.add(b(re, x, C, 0.12)), h.add(b(re, _, z, 0.4)), h.add(K(re, z, 0.55));
  return h.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: _, minorStep: x, gridSize: e, planes: [...u] }, h;
}
function ms(e, i, w, h) {
  const u = new Oe(), _ = new Oo(0.5, 0.5, 0.5), x = new jo(0.45, 0.7, 4);
  x.rotateX(Math.PI / 2), x.translate(0, 0, -0.35);
  const y = new et({ color: 10166822 }), v = new et({ color: 2792847 }), z = new et({ color: 3835647 }), C = () => {
    const re = w.rawVal ?? [];
    if (re.length < 2) return i.gridSize.val * 0.5;
    let ce = [1 / 0, 1 / 0, 1 / 0], ue = [-1 / 0, -1 / 0, -1 / 0];
    for (const k of re) for (let j = 0; j < 3; j++) k[j] < ce[j] && (ce[j] = k[j]), k[j] > ue[j] && (ue[j] = k[j]);
    return Math.max(ue[0] - ce[0], ue[1] - ce[1], ue[2] - ce[2], 0.1);
  }, b = () => 0.08 * C(), K = () => h.rawVal;
  return I.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, !i.supports.val) return;
    u.clear();
    const re = b();
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((ce, ue) => {
      const k = w.val[ue];
      if (!k) return;
      const j = ce ?? [], me = (j[0] ? 1 : 0) + (j[1] ? 1 : 0) + (j[2] ? 1 : 0), Se = (j[3] ? 1 : 0) + (j[4] ? 1 : 0) + (j[5] ? 1 : 0);
      let ze;
      me >= 3 && Se >= 3 ? ze = new He(_, y) : me >= 3 && Se === 0 ? ze = new He(x, v) : ze = new He(x, z), ze.position.set(k[0], k[1], k[2]);
      const D = re * K();
      ze.scale.set(D, D, D), u.add(ze);
    });
  }), I.derive(() => {
    if (h.val, !i.supports.rawVal) return;
    const ce = b() * K();
    u.children.forEach((ue) => ue.scale.set(ce, ce, ce));
  }), I.derive(() => {
    u.visible = i.supports.val;
  }), u;
}
function ws(e, i, w, h) {
  const u = new Oe();
  u.name = "loadsGroup";
  function _(x) {
    if (x.length < 2) return 0.12 * i.gridSize.rawVal;
    const y = [1 / 0, 1 / 0, 1 / 0], v = [-1 / 0, -1 / 0, -1 / 0];
    for (const C of x) for (let b = 0; b < 3; b++) y[b] = Math.min(y[b], C[b]), v[b] = Math.max(v[b], C[b]);
    return 0.08 * Math.max(v[0] - y[0], v[1] - y[1], v[2] - y[2], 0.1);
  }
  return I.derive(() => {
    var _a, _b, _c;
    if (i.deformedShape.val, !i.loads.val) return;
    u.children.forEach((v) => v.dispose()), u.clear();
    const x = w.val, y = _(x);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((v, z) => {
      const C = x[z];
      if (!C) return;
      const b = new m(...v.slice(0, 3));
      if (b.lengthSq() < 1e-30) return;
      b.normalize();
      const K = new jt(b, new m(...C), 1, 15637248, 0.3, 0.3), re = y * h.rawVal;
      K.scale.set(re, re, re), u.add(K);
    });
  }), I.derive(() => {
    if (h.val, !i.loads.rawVal) return;
    const y = _(w.rawVal) * h.rawVal;
    u.children.forEach((v) => v.scale.set(y, y, y));
  }), I.derive(() => {
    u.visible = i.loads.val;
  }), u;
}
function ys(e, i, w) {
  const h = new Oe();
  return I.derive(() => {
    if (!e.nodesIndexes.val) return;
    h.children.forEach((_) => _.dispose()), h.clear();
    const u = 0.05 * e.gridSize.val * 0.6;
    i.val.forEach((_, x) => {
      const y = new xt(`${x}`);
      y.position.set(..._), y.updateScale(u * w.rawVal), h.add(y);
    });
  }), I.derive(() => {
    if (w.val, !e.nodesIndexes.rawVal) return;
    const u = 0.05 * e.gridSize.val * 0.6;
    h.children.forEach((_) => _.updateScale(u * w.rawVal));
  }), I.derive(() => {
    h.visible = e.nodesIndexes.val;
  }), h;
}
function xs(e, i, w, h) {
  const u = new Oe();
  return I.derive(() => {
    var _a;
    if (i.deformedShape.val, !i.elementsIndexes.val) return;
    u.children.forEach((x) => x.dispose()), u.clear();
    const _ = 0.05 * i.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((x, y) => {
      const v = new xt(`${y}`, void 0, "#001219");
      v.position.set(...gs(x.map((z) => w.rawVal[z]))), v.updateScale(_ * h.rawVal), u.add(v);
    });
  }), I.derive(() => {
    if (h.val, !i.elementsIndexes.rawVal) return;
    const _ = 0.05 * i.gridSize.val * 0.6;
    u.children.forEach((x) => x.updateScale(_ * h.rawVal));
  }), I.derive(() => {
    u.visible = i.elementsIndexes.val;
  }), u;
}
function gs(e) {
  const i = e.reduce((h, u) => [h[0] + u[0], h[1] + u[1], h[2] + u[2]], [0, 0, 0]), w = e.length;
  return [i[0] / w, i[1] / w, i[2] / w];
}
function So(e, i) {
  const w = new Oe(), h = 0.05 * e * 1, u = en(), _ = new xt("X", "red", "transparent"), x = new xt(i ? "Z" : "Y", "green", "transparent"), y = new xt(i ? "Y" : "Z", "blue", "transparent"), v = new jt(new m(1, 0, 0), new m(0, 0, 0), 1, u.axisArrow, 0.2, 0.2), z = new jt(new m(0, 1, 0), new m(0, 0, 0), 1, u.axisArrow, 0.2, 0.2), C = new jt(new m(0, 0, 1), new m(0, 0, 0), 1, u.axisArrow, 0.2, 0.2);
  return _.position.set(1.3 * h, 0, 0), x.position.set(0, 1.3 * h, 0), y.position.set(0, 0, 1.3 * h), _.updateScale(0.4 * h), x.updateScale(0.4 * h), y.updateScale(0.4 * h), v.scale.set(h, h, h), z.scale.set(h, h, h), C.scale.set(h, h, h), w.add(v, z, C, _, x, y), w;
}
function On(e, i) {
  const w = new m(...e), u = new m(...i).clone().sub(w), _ = u.length(), x = u.dot(new m(1, 0, 0)) / _, y = u.dot(new m(0, 1, 0)) / _, v = u.dot(new m(0, 0, 1)) / _, z = Math.sqrt(x ** 2 + y ** 2);
  let C = new Un().fromArray([[x, y, v], [-y / z, x / z, 0], [-x * v / z, -y * v / z, z]].flat());
  return v === 1 && (C = new Un().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), v === -1 && (C = new Un().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Ao().setFromMatrix3(C);
}
function Jn(e, i) {
  return e == null ? void 0 : e.map((w, h) => (9 * w + i[h]) / 10);
}
function gn(e) {
  const i = e.reduce((h, u) => [h[0] + u[0], h[1] + u[1], h[2] + u[2]], [0, 0, 0]), w = e.length;
  return [i[0] / w, i[1] / w, i[2] / w];
}
function vs(e, i, w) {
  const h = gn([i, w]), u = gn([e, w]), _ = gn([e, i]), x = new m(...h).sub(new m(...u)).normalize(), y = new m(...w).sub(new m(..._)).normalize(), v = x.clone().cross(y).normalize(), z = v.clone().cross(x).normalize();
  return new Ao().makeBasis(x, z, v);
}
function Ms(e, i, w, h) {
  const u = new Oe(), _ = new he(), x = new lt({ vertexColors: true }), y = [0, 0, 0], v = [1, 0, 0], z = [0, 1, 0], C = [0, 0, 1];
  _.setAttribute("position", new _t([...y, ...v, ...y, ...z, ...y, ...C], 3));
  const b = [255, 0, 0], K = [0, 255, 0], re = [0, 0, 255];
  return _.setAttribute("color", new _t([...b, ...b, ...K, ...K, ...re, ...re], 3)), I.derive(() => {
    var _a;
    i.deformedShape.val, i.orientations.val && (u.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((ce) => {
      const ue = new Xt(_, x), k = w.rawVal[ce[0]], j = w.rawVal[ce[1]];
      if (ce.length === 2 && (ue.position.set(...Jn(k, j)), ue.rotation.setFromRotationMatrix(On(k, j))), ce.length === 3) {
        const ze = w.rawVal[ce[2]];
        ue.position.set(...gn([k, j, ze])), ue.rotation.setFromRotationMatrix(vs(k, j, ze));
      }
      const Se = 0.05 * i.gridSize.rawVal * 0.75 * h.rawVal;
      ue.scale.set(Se, Se, Se), u.add(ue);
    }));
  }), I.derive(() => {
    if (h.val, !i.orientations.rawVal) return;
    const ue = 0.05 * i.gridSize.val * 0.75 * h.rawVal;
    u.children.forEach((k) => k.scale.set(ue, ue, ue));
  }), I.derive(() => {
    u.visible = i.orientations.val;
  }), u;
}
function bs(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const i = (e.b * 100).toFixed(0), w = (e.h * 100).toFixed(0);
    return `${i}x${w}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function _s(e, i, w, h) {
  const u = new Oe(), _ = new Oe();
  u.add(_);
  function x(Z, $) {
    const A = Z / 2, E = $ / 2, X = new Float32Array([0, -A, -E, 0, A, -E, 0, A, E, 0, -A, -E, 0, A, E, 0, -A, E]), G = new he();
    G.setAttribute("position", new it(X, 3));
    const V = new Float32Array([0, -A, -E, 0, A, -E, 0, A, E, 0, -A, E, 0, -A, -E]), N = new he();
    return N.setAttribute("position", new it(V, 3)), { fill: G, outline: N };
  }
  function y(Z, $ = 24) {
    const A = Z / 2, E = new Float32Array($ * 9);
    for (let N = 0; N < $; N++) {
      const ne = N / $ * Math.PI * 2, Q = (N + 1) / $ * Math.PI * 2;
      E[N * 9] = 0, E[N * 9 + 1] = 0, E[N * 9 + 2] = 0, E[N * 9 + 3] = 0, E[N * 9 + 4] = A * Math.cos(ne), E[N * 9 + 5] = A * Math.sin(ne), E[N * 9 + 6] = 0, E[N * 9 + 7] = A * Math.cos(Q), E[N * 9 + 8] = A * Math.sin(Q);
    }
    const X = new he();
    X.setAttribute("position", new it(E, 3));
    const G = new Float32Array(($ + 1) * 3);
    for (let N = 0; N <= $; N++) {
      const ne = N / $ * Math.PI * 2;
      G[N * 3] = 0, G[N * 3 + 1] = A * Math.cos(ne), G[N * 3 + 2] = A * Math.sin(ne);
    }
    const V = new he();
    return V.setAttribute("position", new it(G, 3)), { fill: X, outline: V };
  }
  function v(Z, $, A, E) {
    const X = A ?? $ * 0.08, G = E ?? Z * 0.07, V = Z / 2, N = $ / 2, ne = N - X, Q = G / 2, H = [];
    function F(ae, Pe, de, be) {
      H.push(0, ae, Pe, 0, de, Pe, 0, de, be, 0, ae, Pe, 0, de, be, 0, ae, be);
    }
    F(-V, -N, V, -ne), F(-Q, -ne, Q, ne), F(-V, ne, V, N);
    const se = new he();
    se.setAttribute("position", new it(new Float32Array(H), 3));
    const te = new Float32Array([0, -V, -N, 0, V, -N, 0, V, -ne, 0, Q, -ne, 0, Q, ne, 0, V, ne, 0, V, N, 0, -V, N, 0, -V, ne, 0, -Q, ne, 0, -Q, -ne, 0, -V, -ne, 0, -V, -N]), we = new he();
    return we.setAttribute("position", new it(te, 3)), { fill: se, outline: we };
  }
  function z(Z, $, A) {
    const E = Z / 2, X = $ / 2, G = E - A, V = X - A, N = [];
    function ne(se, te, we, ae) {
      N.push(0, se, te, 0, we, te, 0, we, ae, 0, se, te, 0, we, ae, 0, se, ae);
    }
    ne(-E, -X, E, -V), ne(-E, V, E, X), ne(-E, -V, -G, V), ne(G, -V, E, V);
    const Q = new he();
    Q.setAttribute("position", new it(new Float32Array(N), 3));
    const H = new Float32Array([0, -E, -X, 0, E, -X, 0, E, -X, 0, E, X, 0, E, X, 0, -E, X, 0, -E, X, 0, -E, -X, 0, -G, -V, 0, G, -V, 0, G, -V, 0, G, V, 0, G, V, 0, -G, V, 0, -G, V, 0, -G, -V]), F = new he();
    return F.setAttribute("position", new it(H, 3)), { fill: Q, outline: F };
  }
  function C(Z, $, A) {
    const E = Z / 2, X = $ / 2, G = E - A, V = X - A, N = new he(), ne = new Float32Array([0, -G, -V, 0, G, -V, 0, G, V, 0, -G, -V, 0, G, V, 0, -G, V]);
    N.setAttribute("position", new it(ne, 3));
    const Q = [];
    function H(we, ae, Pe, de) {
      Q.push(0, we, ae, 0, Pe, ae, 0, Pe, de, 0, we, ae, 0, Pe, de, 0, we, de);
    }
    H(-E, -X, E, -V), H(-E, V, E, X), H(-E, -V, -G, V), H(G, -V, E, V);
    const F = new he();
    F.setAttribute("position", new it(new Float32Array(Q), 3));
    const se = new Float32Array([0, -E, -X, 0, E, -X, 0, E, -X, 0, E, X, 0, E, X, 0, -E, X, 0, -E, X, 0, -E, -X, 0, -G, -V, 0, G, -V, 0, G, -V, 0, G, V, 0, G, V, 0, -G, V, 0, -G, V, 0, -G, -V]), te = new he();
    return te.setAttribute("position", new it(se, 3)), { concFill: N, steelFillGeom: F, outline: te };
  }
  function b(Z, $, A) {
    const E = [], X = [[0, -Z / 2, -$ / 2], [0, -Z / 2 + A, -$ / 2], [0, -Z / 2 + A, $ / 2 - A], [0, Z / 2, $ / 2 - A], [0, Z / 2, $ / 2], [0, -Z / 2, $ / 2]], G = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const Q of G) E.push(...X[Q]);
    const V = new he();
    V.setAttribute("position", new it(new Float32Array(E), 3));
    const N = [];
    for (let Q = 0; Q < X.length; Q++) {
      const H = (Q + 1) % X.length;
      N.push(...X[Q], ...X[H]);
    }
    const ne = new he();
    return ne.setAttribute("position", new it(new Float32Array(N), 3)), { fill: V, outline: ne };
  }
  function K(Z, $, A, E) {
    const X = E / 2, G = [], V = [[0, -Z - X, -$ / 2], [0, -A - X, -$ / 2], [0, -A - X, $ / 2 - A], [0, -X, $ / 2 - A], [0, -X, $ / 2], [0, -Z - X, $ / 2]], N = [[0, X, -$ / 2], [0, X + A, -$ / 2], [0, X + A, $ / 2 - A], [0, Z + X, $ / 2 - A], [0, Z + X, $ / 2], [0, X, $ / 2]], ne = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const se of ne) G.push(...V[se]);
    for (const se of ne) G.push(...N[se]);
    const Q = new he();
    Q.setAttribute("position", new it(new Float32Array(G), 3));
    const H = [];
    for (const se of [V, N]) for (let te = 0; te < se.length; te++) {
      const we = (te + 1) % se.length;
      H.push(...se[te], ...se[we]);
    }
    const F = new he();
    return F.setAttribute("position", new it(new Float32Array(H), 3)), { fill: Q, outline: F };
  }
  function re(Z, $, A, E) {
    const X = $ / 2, G = Z, V = [[0, -G, -X], [0, -G, -X + A], [0, -E, -X + A], [0, -E, X - A], [0, -G, X - A], [0, -G, X], [0, 0, X], [0, 0, -X]], N = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], ne = [];
    for (const se of N) ne.push(...V[se]);
    const Q = new he();
    Q.setAttribute("position", new it(new Float32Array(ne), 3));
    const H = [];
    for (let se = 0; se < V.length; se++) {
      const te = (se + 1) % V.length;
      H.push(...V[se], ...V[te]);
    }
    const F = new he();
    return F.setAttribute("position", new it(new Float32Array(H), 3)), { fill: Q, outline: F };
  }
  function ce(Z, $, A, E, X) {
    const G = $ / 2, V = X / 2, N = [], ne = [[0, -Z, -G], [0, -Z, -G + A], [0, -V - E, -G + A], [0, -V - E, G - A], [0, -Z, G - A], [0, -Z, G], [0, -V, G], [0, -V, -G]], Q = ne.map((we) => [we[0], -we[1], we[2]]), H = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const we of H) N.push(...ne[we]);
    for (const we of H) N.push(...Q[we]);
    const F = new he();
    F.setAttribute("position", new it(new Float32Array(N), 3));
    const se = [];
    for (const we of [ne, Q]) for (let ae = 0; ae < we.length; ae++) {
      const Pe = (ae + 1) % we.length;
      se.push(...we[ae], ...we[Pe]);
    }
    const te = new he();
    return te.setAttribute("position", new it(new Float32Array(se), 3)), { fill: F, outline: te };
  }
  function ue(Z, $, A, E) {
    const X = Z / 2, G = $ / 2, V = E / 2, N = [[0, -V, -G], [0, V, -G], [0, V, G - A], [0, X, G - A], [0, X, G], [0, -X, G], [0, -X, G - A], [0, -V, G - A]], ne = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], Q = [];
    for (const te of ne) Q.push(...N[te]);
    const H = new he();
    H.setAttribute("position", new it(new Float32Array(Q), 3));
    const F = [];
    for (let te = 0; te < N.length; te++) {
      const we = (te + 1) % N.length;
      F.push(...N[te], ...N[we]);
    }
    const se = new he();
    return se.setAttribute("position", new it(new Float32Array(F), 3)), { fill: H, outline: se };
  }
  function k(Z, $, A = 24) {
    const E = Z / 2, X = E - $, G = [];
    for (let Q = 0; Q < A; Q++) {
      const H = Q / A * Math.PI * 2, F = (Q + 1) / A * Math.PI * 2, se = Math.cos(H), te = Math.sin(H), we = Math.cos(F), ae = Math.sin(F);
      G.push(0, E * se, E * te, 0, E * we, E * ae, 0, X * we, X * ae), G.push(0, E * se, E * te, 0, X * we, X * ae, 0, X * se, X * te);
    }
    const V = new he();
    V.setAttribute("position", new it(new Float32Array(G), 3));
    const N = [];
    for (let Q = 0; Q < A; Q++) {
      const H = Q / A * Math.PI * 2, F = (Q + 1) / A * Math.PI * 2;
      N.push(0, E * Math.cos(H), E * Math.sin(H), 0, E * Math.cos(F), E * Math.sin(F)), N.push(0, X * Math.cos(H), X * Math.sin(H), 0, X * Math.cos(F), X * Math.sin(F));
    }
    const ne = new he();
    return ne.setAttribute("position", new it(new Float32Array(N), 3)), { fill: V, outline: ne };
  }
  const j = new et({ color: 52479, transparent: true, opacity: 0.35, side: Ft, depthWrite: false }), me = new lt({ color: 52479 }), Se = new et({ color: 16750848, transparent: true, opacity: 0.4, side: Ft, depthWrite: false }), ze = new lt({ color: 16750848 });
  function D(Z, $) {
    const A = Math.abs($[0] - Z[0]), E = Math.abs($[1] - Z[1]), X = Math.abs($[2] - Z[2]);
    return X > A && X > E || E > A && E > X;
  }
  return I.derive(() => {
    var _a, _b;
    i.deformedShape.val, i.secColumns.val, i.secBeams.val, i.secFloor.val;
    const Z = i.secColumns.rawVal, $ = i.secBeams.rawVal;
    if (!Z && !$) {
      u.children.forEach((V) => {
        V instanceof xt && V.dispose();
      }), u.clear();
      return;
    }
    u.children.forEach((V) => {
      V instanceof xt && V.dispose();
    }), u.clear();
    const A = (_a = e.elements) == null ? void 0 : _a.val, E = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!A || !E) return;
    const X = E.sectionShapes, G = i.secFloor.rawVal;
    A.forEach((V, N) => {
      if (V.length !== 2) return;
      const ne = w.rawVal[V[0]], Q = w.rawVal[V[1]];
      if (!ne || !Q) return;
      const H = D(ne, Q);
      if (H && !Z || !H && !$) return;
      if (G >= 0) {
        const ae = Math.min(ne[1], Q[1]);
        Math.max(ne[1], Q[1]);
        const Pe = i.gridSize.rawVal || 3;
        if (Math.floor(ae / Pe + 0.01) !== G) return;
      }
      const F = X == null ? void 0 : X.get(N);
      if (!F) return;
      const se = [(ne[0] + Q[0]) / 2, (ne[1] + Q[1]) / 2, (ne[2] + Q[2]) / 2], te = On(ne, Q);
      if (F.type === "CFT") {
        const ae = C(F.b, F.h, F.tw ?? F.b * 0.05), Pe = new He(ae.concFill, j);
        Pe.position.set(...se), Pe.rotation.setFromRotationMatrix(te), u.add(Pe);
        const de = new He(ae.steelFillGeom, Se);
        de.position.set(...se), de.rotation.setFromRotationMatrix(te), u.add(de);
        const be = new bt(ae.outline, ze);
        be.position.set(...se), be.rotation.setFromRotationMatrix(te), u.add(be);
      } else {
        let ae, Pe, de;
        switch (F.type) {
          case "rect":
            ae = x(F.b, F.h), Pe = j, de = me;
            break;
          case "circ":
            ae = y(F.d), Pe = j, de = me;
            break;
          case "I":
            ae = v(F.b, F.h, F.tf, F.tw), Pe = Se, de = ze;
            break;
          case "HSS":
            ae = z(F.b, F.h, F.tw ?? F.b * 0.05), Pe = Se, de = ze;
            break;
          case "CFT":
            ae = C(F.b, F.h, F.tw ?? F.b * 0.05), Pe = Se, de = ze;
            break;
          case "L":
            ae = b(F.b ?? F.h, F.h, F.t ?? F.tw ?? 3e-3), Pe = Se, de = ze;
            break;
          case "2L":
            ae = K(F.b ?? F.h, F.h, F.t ?? F.tw ?? 3e-3, F.dis ?? 0.01), Pe = Se, de = ze;
            break;
          case "C":
          case "coldC":
            ae = re(F.b, F.h, F.tf ?? F.t ?? 3e-3, F.tw ?? F.t ?? 3e-3), Pe = Se, de = ze;
            break;
          case "2C":
            ae = ce(F.b, F.h, F.tf ?? 5e-3, F.tw ?? 5e-3, F.dis ?? 0.01), Pe = Se, de = ze;
            break;
          case "T":
            ae = ue(F.b, F.h, F.tf ?? 0.01, F.tw ?? 6e-3), Pe = Se, de = ze;
            break;
          case "pipe":
            ae = k(F.d, F.tw ?? F.d * 0.05), Pe = Se, de = ze;
            break;
          default:
            return;
        }
        const be = new He(ae.fill, Pe);
        be.position.set(...se), be.rotation.setFromRotationMatrix(te), u.add(be);
        const Ke = new bt(ae.outline, de);
        Ke.position.set(...se), Ke.rotation.setFromRotationMatrix(te), u.add(Ke);
      }
      const we = bs(F);
      if (we) {
        const Pe = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(F.type) ? "#ff9900" : "#00ccff", de = new xt(we, Pe, "transparent");
        de.position.set(se[0], se[1], se[2]);
        const be = 0.05 * i.gridSize.rawVal * 0.5;
        de.updateScale(be * ((h == null ? void 0 : h.rawVal) ?? 1)), _.add(de);
      }
    });
  }), h && I.derive(() => {
    if (h.val, !i.sections.rawVal) return;
    const Z = 0.05 * i.gridSize.val * 0.5;
    _.children.forEach(($) => {
      $ instanceof xt && $.updateScale(Z * h.rawVal);
    });
  }), I.derive(() => {
    u.visible = i.sections.val;
  }), I.derive(() => {
    _.visible = i.sectionLabels.val;
  }), u;
}
class Sn extends Oe {
  constructor(i, w, h, u, _, x, y) {
    super();
    const v = new Cn().moveTo(0, 0).lineTo(0, x[1]).lineTo(h, x[1]).lineTo(h, 0).lineTo(0, 0), z = v.getPoints(), C = new he().setFromPoints(z);
    this.lines = new bt(C, new lt({ color: en().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(u), y && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const b = new Fn(v), K = new et({ color: x[1] > 0 ? 24435 : 11411474, side: Ft });
    this.mesh = new He(b, K), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(u), y && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new xt(`${_[1].toFixed(4)}`), this.normalizedResult = x, this.textPosition = gn([i, w]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(u), this.add(this.text);
  }
  updateScale(i) {
    this.lines.scale.set(1, i * 2, 1), this.mesh.scale.set(1, i * 2, 1), this.text.updateScale(i * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * i);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class ko extends Oe {
  constructor(i, w, h, u, _, x, y) {
    super();
    const v = _[0] * h / (_[0] + _[1]), z = _[0] * _[1] > 0;
    if (this.text = new xt(`${_[0].toFixed(4)}`), this.text2 = new xt(`${(_[1] * -1).toFixed(4)}`), this.normalizedResult = x, this.textPosition = Jn(i, w), this.text2Position = Jn(w, i), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(u), this.text2.rotation.setFromRotationMatrix(u), this.add(this.text, this.text2), z) {
      const C = new Cn().moveTo(0, 0).lineTo(0, x[0]).lineTo(v, 0).lineTo(0, 0), b = new Cn().moveTo(v, 0).lineTo(h, -x[1]).lineTo(h, 0).lineTo(v, 0), K = C.getPoints(), re = b.getPoints(), ce = new he().setFromPoints(K), ue = new he().setFromPoints(re), k = new lt({ color: en().resultOutline });
      this.lines = new bt(ce, k), this.lines2 = new bt(ue, k), this.lines.position.set(...i), this.lines2.position.set(...i), this.lines.rotation.setFromRotationMatrix(u), this.lines2.rotation.setFromRotationMatrix(u), y && this.lines.rotateX(Math.PI / 2), y && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const j = new Fn(C), me = new Fn(b), Se = new et({ color: x[0] > 0 ? 24435 : 11411474, side: Ft }), ze = new et({ color: -x[1] > 0 ? 24435 : 11411474, side: Ft });
      this.mesh = new He(j, Se), this.mesh2 = new He(me, ze), this.mesh.position.set(...i), this.mesh2.position.set(...i), this.mesh.rotation.setFromRotationMatrix(u), this.mesh2.rotation.setFromRotationMatrix(u), y && this.mesh.rotateX(Math.PI / 2), y && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const C = new Cn().moveTo(0, 0).lineTo(0, x[0]).lineTo(h, -x[1]).lineTo(h, 0).lineTo(0, 0), b = C.getPoints(), K = new he().setFromPoints(b);
      this.lines = new bt(K, new lt({ color: en().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(u), y && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const re = new Fn(C), ce = new et({ color: x[0] > 0 ? 24435 : 11411474, side: Ft });
      this.mesh = new He(re, ce), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(u), y && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var Lo = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(Lo || {});
function Ss(e, i, w, h) {
  const u = new Oe(), _ = { normals: Sn, shearsY: Sn, shearsZ: Sn, torsions: Sn, bendingsY: ko, bendingsZ: ko };
  return I.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, w.val, i.frameResults.val == "none") return;
    u.children.forEach((y) => y.dispose()), u.clear();
    const x = Lo[i.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[x]) == null ? void 0 : _b.forEach((y, v) => {
      var _a2, _b2;
      const z = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[v]) ?? [0, 1], C = w.rawVal[z[0]], b = w.rawVal[z[1]], K = new m(...b).distanceTo(new m(...C)), re = ks((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[x]), ce = y == null ? void 0 : y.map((me) => me / (re === 0 ? 1 : re)), ue = On(C, b), k = new _[x](C, b, K, ue, y ?? [0, 0], ce ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(x)), j = 0.05 * i.gridSize.rawVal;
      k.updateScale(j * h.rawVal), u.add(k);
    });
  }), I.derive(() => {
    if (h.val, i.frameResults.rawVal == "none") return;
    const x = 0.05 * i.gridSize.val;
    u.children.forEach((y) => y.updateScale(x * h.rawVal));
  }), I.derive(() => {
    u.visible = i.frameResults.val != "none";
  }), u;
}
function ks(e) {
  let i = 0;
  return e == null ? void 0 : e.forEach((w) => {
    const h = Math.max(...w ?? [0, 0]);
    h > i && (i = h);
  }), i;
}
class zs extends Oe {
  constructor(i, w, h) {
    super();
    const u = w === jn.reactions;
    h[0] && (this.xText1 = new xt(`${u ? "Fx" : "Dx"}: ` + h[0].toFixed(4))), h[3] && (this.xText2 = new xt(`${u ? "Mx" : "Rx"}: ` + h[3].toFixed(4))), h[1] && (this.yText1 = new xt(`${u ? "Fy" : "Dy"}: ` + h[1].toFixed(4))), h[4] && (this.yText2 = new xt(`${u ? "My" : "Ry"}: ` + h[4].toFixed(4))), h[2] && (this.zText1 = new xt(`${u ? "Fz" : "Dz"}: ` + h[2].toFixed(4))), h[5] && (this.zText2 = new xt(`${u ? "Mz" : "Rz"}: ` + h[5].toFixed(4))), (h[0] || h[3]) && (this.xArrow = new jt(new m(1, 0, 0), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), (h[1] || h[4]) && (this.yArrow = new jt(new m(0, 1, 0), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), (h[2] || h[5]) && (this.zArrow = new jt(new m(0, 0, 1), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...i), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
var jn = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(jn || {});
function Ps(e, i, w, h) {
  const u = new Oe();
  return I.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, i.nodeResults.val == "none") return;
    u.children.forEach((y) => y.dispose()), u.clear();
    const _ = jn[i.nodeResults.rawVal], x = 0.05 * i.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[_]) == null ? void 0 : _b.forEach((y, v) => {
      const z = new zs(w.rawVal[v], _, y ?? [0, 0, 0, 0, 0, 0]);
      z.updateScale(x * h.rawVal), u.add(z);
    });
  }), I.derive(() => {
    if (h.val, i.nodeResults.rawVal == "none") return;
    const _ = 0.05 * i.gridSize.val;
    u.children.forEach((x) => x.updateScale(_ * h.rawVal));
  }), I.derive(() => {
    u.visible = i.nodeResults.val != "none";
  }), u;
}
function Cs({ drawingObj: e, gridObj: i, scene: w, getActiveCamera: h, controls: u, gridSize: _, derivedDisplayScale: x, rendererElm: y, viewerRender: v }) {
  const z = new es(), C = new ts(), b = (n) => {
    const o = y.getBoundingClientRect(), a = n.clientX - o.left, t = n.clientY - o.top, r = o.width || 1, s = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const p = r / 2;
      if (a >= p) return C.x = (a - p) / p * 2 - 1, C.y = -(t / s) * 2 + 1, window.__hekatanSplitCamera ?? h();
      C.x = a / p * 2 - 1;
    } else C.x = a / r * 2 - 1;
    return C.y = -(t / s) * 2 + 1, h();
  }, K = new He(new Gt(1e4, 1e4), new et({ side: Ft, transparent: true, opacity: 0, depthWrite: false }));
  K.visible = true, K.frustumCulled = false, w.add(K);
  const re = (n, o, a) => {
    const t = new He(new Gt(1e4, 1e4), new et({ side: Ft, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, a), t.visible = false, t.frustumCulled = false, w.add(t), t;
  }, ce = re(Math.PI / 2, 0, 0), ue = re(0, Math.PI / 2, 0);
  let k = false;
  const j = () => {
    if (k) return z.intersectObjects([K], false);
    if (ce.visible = !!window.__hekatanGridPlaneXZ, ue.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanOrthoRaycast === true && Te.visible) {
      const a = z.intersectObjects([Te, Ie, De], false);
      if (a.length > 0) return a;
    }
    const o = [K];
    return ce.visible && o.push(ce), ue.visible && o.push(ue), Bt.visible && Yt.length > 0 && o.push(...Yt), z.intersectObjects(o, false);
  }, me = new zn(new he(), new Pn()), Se = new zn(new he(), new Pn({ color: "gray", sizeAttenuation: false, size: 6 })), ze = new zn(new he(), new Pn({ color: "orange", size: 0.1 }));
  w.add(ze);
  const D = document.createElement("input");
  D.id = "hk-rubber-label", D.type = "text", D.spellcheck = false, D.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, D.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none", "pointer-events:none"].join(";") + ";", document.body.appendChild(D);
  let Z = null, $ = null, A = false;
  const E = new m(), X = (n, o, a, t, r, s) => {
    const l = t - n, p = r - o, d = s - a, g = Math.hypot(l, p, d);
    if (g < 0.01) {
      D.style.display = "none";
      return;
    }
    Z = [n, o, a], $ = [l / g, p / g, d / g], E.set((n + t) / 2, (o + r) / 2, (a + s) / 2), E.project(h());
    const M = y.getBoundingClientRect(), c = M.left + (E.x * 0.5 + 0.5) * M.width, f = M.top + (-E.y * 0.5 + 0.5) * M.height;
    if (D.style.left = c + "px", D.style.top = f + "px", D.style.display = "block", !A) {
      if (D.value = `${g.toFixed(2)} m`, document.activeElement !== D) {
        const S = document.activeElement;
        S && (S.tagName === "INPUT" || S.tagName === "TEXTAREA") && S !== D || D.focus({ preventScroll: true });
      }
      try {
        D.select();
      } catch {
      }
    }
  }, G = () => {
    D.style.display = "none", Z = null, $ = null, A = false, document.activeElement === D && D.blur();
  }, V = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      vt = n, ie(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), D.blur();
      return;
    }
    if (!Z || !$ || !e.polylines) return;
    let a = $[0], t = $[1], r = $[2];
    tt === "x" ? (a = Math.sign(a) || 1, t = 0, r = 0) : tt === "y" ? (a = 0, t = Math.sign(t) || 1, r = 0) : tt === "z" && (a = 0, t = 0, r = Math.sign(r) || 1);
    const s = Z[0] + a * n, l = Z[1] + t * n, p = Z[2] + r * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [s, l, p]];
    const d = e.polylines.rawVal, g = d.length ? d[d.length - 1] : [];
    e.polylines.val = [...d.slice(0, -1), [...g, e.points.rawVal.length - 1]], D.blur();
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
  }, Q = (n) => {
    var _a;
    if (!e.polylines) return;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, n];
    const o = e.polylines.rawVal, a = o.length ? o[o.length - 1] : [];
    e.polylines.val = [...o.slice(0, -1), [...a, e.points.rawVal.length - 1]], D.blur();
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
    if (o.kind === "length") return V(o.L), true;
    const a = ne(o);
    if (!a) return false;
    if (Q(a), ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "area" && e.polylines) {
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
  }, D.addEventListener("keydown", (n) => {
    if (n.key === "Enter") {
      n.preventDefault();
      const a = N(D.value);
      if (!a) return;
      if (A = false, a.kind === "length") V(a.L), ie(`\u270F DDE ${a.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = ne(a);
        if (!t) return;
        Q(t);
        const r = a.kind;
        ie(`\u270F ${r} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
      }
      return;
    }
    if (n.key === "Escape") {
      n.preventDefault(), A = false, D.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!A && D.style.display === "block") try {
          D.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && (A = true);
  }), window.addEventListener("keydown", (n) => {
    if (!Z || !$ || document.activeElement === D) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (D.value = n.key, D.focus(), D.setSelectionRange(1, 1), n.preventDefault());
  });
  const H = document.createElement("div");
  H.id = "hk-coord-readout", H.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", H.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(H);
  const F = document.createElement("div");
  F.id = "hk-coord-fixed", F.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", F.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(F);
  const se = new bt(new he().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new yn({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  se.frustumCulled = false, se.visible = false, w.add(se);
  const te = new bt(new he(), new lt({ color: 2282478, transparent: true, opacity: 0.9 }));
  te.frustumCulled = false, te.visible = false, w.add(te);
  let we = [];
  const ae = new Oe(), Pe = new He(new Gt(1, 1), new et({ color: 2282478, transparent: true, opacity: 0.08, side: Ft, depthWrite: false })), de = new Xt(new wo(new Gt(1, 1)), new lt({ color: 2282478, transparent: true, opacity: 0.85 })), be = new Xt(new he(), new lt({ color: 2282478, transparent: true, opacity: 0.3 })), Ke = (n, o) => {
    const a = [], t = Math.ceil(n / o);
    for (let r = -t; r <= t; r++) {
      const s = r * o;
      a.push(-n, s, 0, n, s, 0), a.push(s, -n, 0, s, n, 0);
    }
    be.geometry.dispose(), be.geometry = new he(), be.geometry.setAttribute("position", new _t(a, 3));
  };
  ae.add(Pe, de, be), ae.visible = false, ae.frustumCulled = false, w.add(ae);
  const We = new Oe();
  We.frustumCulled = false, We.visible = false, w.add(We);
  const q = (n) => {
    const o = new he().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), a = new yn({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new bt(o, a);
  }, P = q(16711680), U = q(65280), L = q(35071);
  We.add(P, U, L);
  const J = (n) => {
    const o = new he().setFromPoints([new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0)]), a = new lt({ color: n, transparent: true, opacity: 0.2, depthTest: false }), t = new Vo(o, a);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, oe = J(3462041), _e = J(16724804), ge = J(6333946), ke = new Oe();
  ke.frustumCulled = false, ke.visible = false, w.add(ke), ke.add(oe, _e, ge);
  const Ee = (n) => {
    const o = new Gt(1, 1), a = new et({ color: n, transparent: true, opacity: 0.06, side: Ft, depthWrite: false }), t = new He(o, a);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, Te = Ee(3462041), Ie = Ee(16724804), De = Ee(6333946);
  ke.add(Te, Ie, De);
  const qe = (n, o, a, t) => {
    n.scale.set(2 * t, 2 * t, 1), a === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : a === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, Ce = document.createElement("div");
  Ce.id = "hk-refplane-badge", Ce.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(Ce), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, ke.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0], l = window.__hekatanOrthoExt ?? 8;
      Ze(oe, s, "xy", l), Ze(_e, s, "xz", l), Ze(ge, s, "yz", l), qe(Te, s, "xy", l), qe(Ie, s, "xz", l), qe(De, s, "yz", l), Te.material.opacity = 0.05, Ie.material.opacity = 0.05, De.material.opacity = 0.05;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    v();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !ke.visible) {
      v();
      return;
    }
    const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0];
    Ze(oe, s, "xy", n), Ze(_e, s, "xz", n), Ze(ge, s, "yz", n), qe(Te, s, "xy", n), qe(Ie, s, "xz", n), qe(De, s, "yz", n), v();
  };
  const rt = (n) => {
    if (Te.material.opacity = n === "xy" ? 0.09 : 0.025, Ie.material.opacity = n === "xz" ? 0.09 : 0.025, De.material.opacity = n === "yz" ? 0.09 : 0.025, n) {
      const r = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      Ce.style.background = r.bg, Ce.style.color = r.text, Ce.textContent = `\u25A6 Plano ${n.toUpperCase()}`, Ce.style.display = "block";
    } else Ce.style.display = "none";
  }, Ze = (n, o, a, t) => {
    let r;
    a === "xy" ? r = [new m(o[0] - t, o[1] - t, o[2]), new m(o[0] + t, o[1] - t, o[2]), new m(o[0] + t, o[1] + t, o[2]), new m(o[0] - t, o[1] + t, o[2]), new m(o[0] - t, o[1] - t, o[2])] : a === "xz" ? r = [new m(o[0] - t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] - t)] : r = [new m(o[0], o[1] - t, o[2] - t), new m(o[0], o[1] + t, o[2] - t), new m(o[0], o[1] + t, o[2] + t), new m(o[0], o[1] - t, o[2] + t), new m(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(r);
  };
  let tt = null;
  window.__hekatanAxisLock = () => tt;
  let st = null;
  const nt = document.createElement("div");
  nt.id = "hk-axis-lock-badge", nt.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "padding:4px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(20px,18px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(nt);
  const Lt = () => {
    if (!tt) {
      nt.style.display = "none";
      return;
    }
    const n = { x: "#ff3344", y: "#34d399", z: "#60a5fa" };
    nt.style.background = "rgba(15,23,42,0.92)", nt.style.color = n[tt], nt.style.border = `1.5px solid ${n[tt]}`, nt.textContent = `\u{1F512} LOCK ${tt.toUpperCase()}`, nt.style.display = "block";
  };
  window.addEventListener("keydown", (n) => {
    var _a, _b, _c, _d;
    const o = document.activeElement;
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== D) return;
    const a = n.key.toLowerCase(), t = (_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool;
    if (n.key === "Enter" && t === "polyarea" && we.length >= 3) {
      const r = dn();
      ie(`\u2713 \xC1rea libre mallada \u2014 ${r} shells Q4 creados.`), n.preventDefault();
      return;
    }
    if (a === "x" || a === "y" || a === "z") tt = tt === a ? null : a, Lt(), n.preventDefault();
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
  const Be = new m(), Ve = new m(), ve = new m(), Ye = (n) => {
    if (!tt) return null;
    const o = n[0], a = n[1], t = n[2];
    return tt === "x" ? (Be.set(o - 1e4, a, t), Ve.set(o + 1e4, a, t)) : tt === "y" ? (Be.set(o, a - 1e4, t), Ve.set(o, a + 1e4, t)) : (Be.set(o, a, t - 1e4), Ve.set(o, a, t + 1e4)), z.ray.distanceSqToSegment(Be, Ve, null, ve), ve;
  };
  window.__hekatanProjectOnAxis = Ye;
  const le = new bt(new he().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new lt({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  le.renderOrder = 998, le.frustumCulled = false, le.visible = false, w.add(le);
  let Ne = -1, Ge = -1, dt = -1;
  const fe = /* @__PURE__ */ new Set();
  window.__hekatanSelection = fe;
  const Le = new bt(new he().setFromPoints([new m(), new m()]), new lt({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  Le.renderOrder = 997, Le.frustumCulled = false, Le.visible = false, w.add(Le);
  const Je = new He(new cn(0.02, 12, 12), new et({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  Je.renderOrder = 998, Je.visible = false, w.add(Je);
  const pt = (n) => {
    const o = h();
    if (o.isOrthographicCamera) {
      const t = o, r = (t.top - t.bottom) / t.zoom;
      return Math.max(0.05, r * 6e-3);
    }
    const a = o.position.distanceTo(n);
    return Math.max(0.05, a / 10);
  }, Dt = () => {
    Je.visible && Je.scale.setScalar(pt(Je.position));
  }, ft = new Oe();
  ft.frustumCulled = false, w.add(ft);
  const zt = 2282478;
  let ot = null;
  const Ht = (n, o, a, t) => {
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
  }, Rt = () => {
    var _a, _b, _c, _d, _e2, _f, _g;
    for (; ft.children.length; ) {
      const l = ft.children.pop();
      (_b = (_a = l.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = l.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const l of fe) {
      const [p, ...d] = l.split(":");
      if (p === "pt") {
        const g = n[+d[0]];
        if (!g) continue;
        const M = new He(new cn(0.025, 12, 12), new et({ color: zt, transparent: true, opacity: 0.9, depthTest: false }));
        M.position.set(g[0], g[1], g[2]), M.renderOrder = 999, M.__isSelectionPt = true, ft.add(M);
      } else if (p === "seg") {
        const g = o[+d[0]], M = n[g == null ? void 0 : g[+d[1]]], c = n[g == null ? void 0 : g[+d[1] + 1]];
        if (!M || !c) continue;
        const f = new he().setFromPoints([new m(M[0], M[1], M[2]), new m(c[0], c[1], c[2])]), S = new bt(f, new lt({ color: zt, transparent: true, opacity: 0.95, depthTest: false }));
        S.renderOrder = 999, ft.add(S);
      } else if (p === "poly") {
        const M = o[+d[0]].map((S) => {
          const R = n[S];
          return R ? new m(R[0], R[1], R[2]) : null;
        }).filter(Boolean);
        if (M.length < 2) continue;
        const c = new he().setFromPoints(M), f = new bt(c, new lt({ color: zt, transparent: true, opacity: 0.95, depthTest: false }));
        f.renderOrder = 999, ft.add(f);
      } else if (p === "aux") {
        const g = t[+d[0]];
        if (!g || g.length !== 6) continue;
        const M = new he().setFromPoints([new m(g[0], g[1], g[2]), new m(g[3], g[4], g[5])]), c = new bt(M, new lt({ color: zt, transparent: true, opacity: 0.95, depthTest: false }));
        c.renderOrder = 999, ft.add(c);
      }
    }
    const r = window.__hekatanUpdateSelectionPtScale;
    r && r();
    const s = window.__hekatanRefreshPropsPane;
    s && s(), v();
  };
  window.__hekatanRefreshSelection = Rt, window.__hekatanClearSelection = () => {
    fe.clear(), Rt();
  };
  const tn = (n, o, a, t, r, s, l, p, d) => {
    const g = l - t, M = p - r, c = d - s, f = g * g + M * M + c * c;
    if (f < 1e-12) return Math.hypot(n - t, o - r, a - s);
    let S = ((n - t) * g + (o - r) * M + (a - s) * c) / f;
    S = Math.max(0, Math.min(1, S));
    const R = t + S * g, B = r + S * M, W = s + S * c;
    return Math.hypot(n - R, o - B, a - W);
  }, qt = (n, o, a, t) => {
    if (!e.polylines) return null;
    const r = e.polylines.rawVal, s = e.points.rawVal;
    let l = -1, p = -1, d = t;
    for (let g = 0; g < r.length; g++) {
      const M = r[g];
      for (let c = 0; c < M.length - 1; c++) {
        const f = s[M[c]], S = s[M[c + 1]];
        if (!f || !S) continue;
        const R = tn(n, o, a, f[0], f[1], f[2], S[0], S[1], S[2]);
        R < d && (d = R, l = g, p = c);
      }
    }
    return l >= 0 ? { polyIdx: l, segIdx: p, dist: d } : null;
  }, Jt = (n, o, a, t) => {
    const r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? (r == null ? void 0 : r.val) ?? r ?? [];
    let l = -1, p = t;
    for (let d = 0; d < s.length; d++) {
      const g = s[d];
      if (!g || g.length !== 6) continue;
      const M = tn(n, o, a, g[0], g[1], g[2], g[3], g[4], g[5]);
      M < p && (p = M, l = d);
    }
    return l;
  }, An = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      le.visible = false;
      return;
    }
    le.geometry.setFromPoints([new m(t[0], t[1], t[2]), new m(t[3], t[4], t[5])]), le.visible = true;
  }, Tn = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const a = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!a || a.length < 2) {
      le.visible = false;
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
    le.geometry.setFromPoints(s), le.visible = true;
  }, nn = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const a = o.filter((d, g) => g !== n), t = /* @__PURE__ */ new Set();
    for (const d of a) for (const g of d) t.add(g);
    const r = e.points.rawVal, s = /* @__PURE__ */ new Map(), l = [];
    for (let d = 0; d < r.length; d++) t.has(d) && (s.set(d, l.length), l.push(r[d]));
    const p = a.map((d) => d.map((g) => s.get(g)).filter((g) => g !== void 0));
    e.points.val = l, e.polylines.val = p, e.areas && (e.areas.val = e.areas.rawVal.filter((d) => d !== n).map((d) => d > n ? d - 1 : d)), le.visible = false, Ne = -1, Ge = -1;
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
      nn(n);
      return;
    }
    const r = a[n];
    if (o < 0 || o >= r.length - 1) return;
    if (r.length === 2) {
      nn(n);
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
    le.visible = false, Ne = -1, Ge = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  me.geometry.setAttribute("position", new _t(e.points.rawVal.flat(), 3)), me.geometry.computeBoundingSphere(), me.frustumCulled = false, Se.frustumCulled = false, w.add(Se), K.position.set(0, 0, 0), K.rotateX(Math.PI / 2), K.geometry.rotateX(Math.PI / 2), K.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, a) => {
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
    const r = Math.max(4, Math.round(t)), s = new m(...n), l = new m(...o), p = new m(...a), d = new m().subVectors(l, s), g = new m().subVectors(p, s), M = new m().crossVectors(d, g).normalize(), c = new m().addVectors(s, l).multiplyScalar(0.5), f = new m().addVectors(l, p).multiplyScalar(0.5), S = new m().crossVectors(d, M).normalize(), R = new m().crossVectors(new m().subVectors(p, l), M).normalize(), B = new m().subVectors(f, c), W = S.x * R.y - S.y * R.x;
    let T;
    if (Math.abs(W) > 1e-9) {
      const Xe = (B.x * R.y - B.y * R.x) / W;
      T = new m().addVectors(c, S.clone().multiplyScalar(Xe));
    } else T = c.clone();
    const O = s.distanceTo(T), ee = new m().subVectors(s, T), pe = new m().subVectors(p, T), $e = Math.acos(Math.max(-1, Math.min(1, ee.dot(pe) / (O * O)))), ye = e.points.rawVal.length, xe = [], mt = M.clone();
    for (let Xe = 0; Xe <= r; Xe++) {
      const Fe = Xe / r, Ue = $e * Fe, at = new Kn().setFromAxisAngle(mt, Ue), wt = ee.clone().applyQuaternion(at).add(T);
      xe.push([wt.x, wt.y, wt.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...xe], e.polylines) {
      const Xe = xe.map((Ue, at) => ye + at), Fe = e.polylines.rawVal;
      e.polylines.val = [...Fe.slice(0, -1), Xe, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, a = 1, t = 6, r = 6) => {
    const s = Math.min(n[0], o[0]), l = Math.max(n[0], o[0]), p = Math.min(n[1], o[1]), d = Math.max(n[1], o[1]), g = (n[2] + o[2]) / 2, M = l - s, c = d - p, f = Math.min(a, M / 2 - 0.01, c / 2 - 0.01);
    if (f <= 0) return;
    const S = e.points.rawVal.length, R = [], B = [], W = (T, O) => {
      R.push([T, O, g]), B.push(S + R.length - 1);
    };
    for (let T = 0; T <= r; T++) W(s + f + (M - 2 * f) * T / r, p);
    for (let T = 1; T <= t; T++) {
      const O = -Math.PI / 2 + Math.PI / 2 * T / t;
      W(l - f + f * Math.cos(O), p + f + f * Math.sin(O));
    }
    for (let T = 1; T <= r; T++) W(l, p + f + (c - 2 * f) * T / r);
    for (let T = 1; T <= t; T++) {
      const O = 0 + Math.PI / 2 * T / t;
      W(l - f + f * Math.cos(O), d - f + f * Math.sin(O));
    }
    for (let T = 1; T <= r; T++) W(l - f - (M - 2 * f) * T / r, d);
    for (let T = 1; T <= t; T++) {
      const O = Math.PI / 2 + Math.PI / 2 * T / t;
      W(s + f + f * Math.cos(O), d - f + f * Math.sin(O));
    }
    for (let T = 1; T <= r; T++) W(s, d - f - (c - 2 * f) * T / r);
    for (let T = 1; T <= t; T++) {
      const O = Math.PI + Math.PI / 2 * T / t;
      W(s + f + f * Math.cos(O), p + f + f * Math.sin(O));
    }
    if (B.push(S), e.points.val = [...e.points.rawVal, ...R], e.polylines) {
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
      const M = e.gridTarget.rawVal, c = new xn(...M.rotation), f = new m(1, 0, 0).applyEuler(c), S = new m(0, 1, 0).applyEuler(c), R = new m(...M.position), B = new m(t, r, s), W = new m(l, p, d), T = B.clone().sub(R).dot(f), O = B.clone().sub(R).dot(S), ee = W.clone().sub(R).dot(f), pe = W.clone().sub(R).dot(S), $e = (ye, xe) => R.clone().addScaledVector(f, ye).addScaledVector(S, xe).toArray();
      g = [$e(T, O), $e(ee, O), $e(ee, pe), $e(T, pe)];
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
    for (let Me = 0; Me < a; Me++) {
      const Re = n[Me], je = n[(Me + 1) % a];
      t += (Re[1] - je[1]) * (Re[2] + je[2]), r += (Re[2] - je[2]) * (Re[0] + je[0]), s += (Re[0] - je[0]) * (Re[1] + je[1]);
    }
    const l = Math.hypot(t, r, s) || 1;
    t /= l, r /= l, s /= l;
    let p = n[1][0] - n[0][0], d = n[1][1] - n[0][1], g = n[1][2] - n[0][2];
    const M = Math.hypot(p, d, g) || 1;
    p /= M, d /= M, g /= M;
    let c = r * g - s * d, f = s * p - t * g, S = t * d - r * p;
    const R = Math.hypot(c, f, S) || 1;
    c /= R, f /= R, S /= R;
    const B = n[0], W = (Me) => [(Me[0] - B[0]) * p + (Me[1] - B[1]) * d + (Me[2] - B[2]) * g, (Me[0] - B[0]) * c + (Me[1] - B[1]) * f + (Me[2] - B[2]) * S], T = (Me, Re) => [B[0] + Me * p + Re * c, B[1] + Me * d + Re * f, B[2] + Me * g + Re * S], O = n.map(W);
    let ee = 1 / 0, pe = -1 / 0, $e = 1 / 0, ye = -1 / 0;
    for (const [Me, Re] of O) Me < ee && (ee = Me), Me > pe && (pe = Me), Re < $e && ($e = Re), Re > ye && (ye = Re);
    const xe = pe - ee, mt = ye - $e;
    if (xe < 1e-6 || mt < 1e-6) return 0;
    let Xe = o && o > 0 ? o : 0.5;
    for (; xe / Xe * (mt / Xe) > 2500; ) Xe *= 2;
    Xe = Math.min(Xe, Math.min(xe, mt));
    const Fe = (Me, Re) => {
      let je = false;
      for (let Tt = 0, Kt = O.length - 1; Tt < O.length; Kt = Tt++) {
        const [ln, mn] = O[Tt], [rn, wn] = O[Kt];
        mn > Re != wn > Re && Me < (rn - ln) * (Re - mn) / (wn - mn) + ln && (je = !je);
      }
      return je;
    }, Ue = Math.max(1, Math.round(xe / Xe)), at = Math.max(1, Math.round(mt / Xe)), wt = xe / Ue, kt = mt / at, Ut = /* @__PURE__ */ new Map(), $t = [], yt = e.points.rawVal.length, At = (Me, Re) => {
      const je = Me + "," + Re, Tt = Ut.get(je);
      if (Tt !== void 0) return Tt;
      const Kt = yt + $t.length;
      return $t.push(T(ee + Me * wt, $e + Re * kt)), Ut.set(je, Kt), Kt;
    }, Mt = [];
    for (let Me = 0; Me < Ue; Me++) for (let Re = 0; Re < at; Re++) {
      if (!Fe(ee + (Me + 0.5) * wt, $e + (Re + 0.5) * kt)) continue;
      const je = At(Me, Re), Tt = At(Me + 1, Re), Kt = At(Me + 1, Re + 1), ln = At(Me, Re + 1);
      Mt.push([je, Tt, Kt, ln]);
    }
    if (!Mt.length) return 0;
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...$t], e.polylines && e.areas) {
      let Me = e.polylines.rawVal.slice();
      Me.length && Me[Me.length - 1].length === 0 && (Me = Me.slice(0, -1));
      const Re = [];
      for (const je of Mt) Re.push(Me.length), Me.push([je[0], je[1], je[2], je[3], je[0]]);
      Me.push([]), e.polylines.val = Me, e.areas.val = [...e.areas.rawVal, ...Re];
    }
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    return v(), Mt.length;
  };
  const dn = () => {
    if (we.length < 3) return we = [], te.visible = false, v(), 0;
    const n = window.__hekatanMeshPolyArea(we.slice());
    return we = [], te.visible = false, v(), n;
  };
  window.__hekatanFinalizePolyArea = dn, window.__hekatanSetInclinedPlaneFrom3 = (n, o, a) => {
    var _a;
    const t = new m(n[0], n[1], n[2]), r = new m(o[0], o[1], o[2]), s = new m(a[0], a[1], a[2]), l = new m().subVectors(r, t).cross(new m().subVectors(s, t));
    if (l.lengthSq() < 1e-9) return false;
    l.normalize();
    const p = new Kn().setFromUnitVectors(new m(0, 0, 1), l), d = new xn().setFromQuaternion(p);
    e.gridTarget && (e.gridTarget.val = { position: [t.x, t.y, t.z], rotation: [d.x, d.y, d.z] }), k = true;
    const g = new m().addVectors(t, r).add(s).multiplyScalar(1 / 3), M = Math.max(t.distanceTo(r), t.distanceTo(s), r.distanceTo(s)) * 2.2 + 4, c = M / 2;
    Pe.geometry.dispose(), Pe.geometry = new Gt(M, M), de.geometry.dispose(), de.geometry = new wo(new Gt(M, M)), Ke(c, 1), ae.position.copy(g), ae.quaternion.copy(p), ae.scale.set(1, 1, 1), ae.visible = true;
    try {
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
    } catch {
    }
    return v(), true;
  }, window.__hekatanResetPlaneXY = () => {
    e.gridTarget && (e.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, 0] }), k = false, ae.visible = false, v();
  };
  const Pt = new Oe();
  Pt.visible = false, w.add(Pt), window.__hekatanShowAxes = (n, o, a = 12, t = 2) => {
    var _a, _b;
    for (; Pt.children.length; ) {
      const M = Pt.children.pop();
      (_a = M.geometry) == null ? void 0 : _a.dispose(), (_b = M.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const r = Math.min(...o) - t, s = Math.max(...o) + t, l = Math.min(...n) - t, p = Math.max(...n) + t, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", g = (M, c, f, S, R) => {
      const B = document.createElement("canvas");
      B.width = 64, B.height = 32;
      const W = B.getContext("2d");
      W.fillStyle = R, W.font = "bold 22px sans-serif", W.textAlign = "center", W.fillText(M, 32, 26);
      const T = new yo(B), O = new xo({ map: T, transparent: true }), ee = new go(O);
      return ee.position.set(c, f, S), ee.scale.set(1.2, 0.6, 1), ee;
    };
    n.forEach((M, c) => {
      const f = c < d.length ? d[c] : `X${c}`, S = new he().setFromPoints([new m(M, r, 0), new m(M, s, 0), new m(M, r, 0), new m(M, r, a)]), R = new yn({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), B = new Xt(S, R);
      B.computeLineDistances(), Pt.add(B), Pt.add(g(f, M, r - 0.5, 0, "#60a5fa")), Pt.add(g(f, M, s + 0.5, 0, "#60a5fa"));
    }), o.forEach((M, c) => {
      const f = `${c + 1}`, S = new he().setFromPoints([new m(l, M, 0), new m(p, M, 0), new m(l, M, 0), new m(l, M, a)]), R = new yn({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), B = new Xt(S, R);
      B.computeLineDistances(), Pt.add(B), Pt.add(g(f, l - 0.5, M, 0, "#fb7185")), Pt.add(g(f, p + 0.5, M, 0, "#fb7185"));
    }), Pt.visible = true, v();
  }, window.__hekatanHideAxes = () => {
    Pt.visible = false, v();
  };
  const Bt = new Oe();
  Bt.visible = false, w.add(Bt);
  let Yt = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, a = 0, t = 0) => {
    var _a, _b;
    for (; Bt.children.length; ) {
      const s = Bt.children.pop();
      (_a = s.geometry) == null ? void 0 : _a.dispose(), (_b = s.material) == null ? void 0 : _b.dispose();
    }
    Yt.forEach((s) => {
      w.remove(s), s.geometry.dispose(), s.material.dispose();
    }), Yt = [];
    const r = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((s, l) => {
      const p = r[l % r.length], d = o / 2, g = [new m(a - d, t - d, s), new m(a + d, t - d, s), new m(a + d, t + d, s), new m(a - d, t + d, s), new m(a - d, t - d, s)], M = new he().setFromPoints(g), c = new lt({ color: p, transparent: true, opacity: 0.55 });
      Bt.add(new bt(M, c));
      const f = document.createElement("canvas");
      f.width = 128, f.height = 32;
      const S = f.getContext("2d");
      S.fillStyle = `#${p.toString(16).padStart(6, "0")}`, S.font = "bold 18px sans-serif", S.fillText(`Z = ${s} m`, 4, 22);
      const R = new yo(f), B = new xo({ map: R, transparent: true }), W = new go(B);
      W.position.set(a - d - 1.5, t - d - 1.5, s), W.scale.set(2.5, 0.6, 1), Bt.add(W);
      const T = new Gt(1e4, 1e4), O = new et({ visible: false, side: Ft }), ee = new He(T, O);
      ee.position.set(0, 0, s), ee.frustumCulled = false, ee.userData = { refPlaneZ: s }, w.add(ee), Yt.push(ee);
    }), Bt.visible = true, v();
  }, window.__hekatanHideRefPlanes = () => {
    Bt.visible = false, Yt.forEach((n) => {
      n.visible = false;
    }), v();
  };
  const Qt = new Oe();
  Qt.frustumCulled = false, w.add(Qt);
  const $n = () => {
    var _a, _b, _c, _d;
    for (; Qt.children.length; ) {
      const a = Qt.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (a.length !== 6) continue;
      const t = new he().setFromPoints([new m(a[0], a[1], a[2]), new m(a[3], a[4], a[5])]), r = new yn({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), s = new bt(t, r);
      s.computeLineDistances(), Qt.add(s);
    }
  };
  I.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, $n(), v());
  });
  const Nt = new Oe();
  Nt.frustumCulled = false, w.add(Nt);
  const pn = () => {
    var _a, _b, _c, _d;
    for (; Nt.children.length; ) {
      const a = Nt.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxPoints, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (!a || a.length !== 3) continue;
      const t = new He(new cn(0.025, 12, 12), new et({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(a[0], a[1], a[2]), t.renderOrder = 996, t.scale.setScalar(pt(t.position)), Nt.add(t);
    }
  };
  I.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, pn(), v());
  }), u.addEventListener("change", () => {
    Nt.children.forEach((n) => {
      n.scale.setScalar(pt(n.position));
    });
  }), window.__hekatanRenderAuxPoints = pn;
  const ht = new Oe(), Ro = new He(new cn(0.01, 12, 12), new et({ color: 16724804, transparent: true, opacity: 0.95 })), Bo = new He(new cn(0.015, 12, 12), new et({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  ht.add(Ro, Bo);
  const on = 0.08, In = (n, o, a) => {
    const t = new he().setFromPoints([new m(...n), new m(...o)]);
    return new bt(t, new lt({ color: a, transparent: true, opacity: 0.7 }));
  };
  ht.add(In([-on, 0, 0], [on, 0, 0], 16711680)), ht.add(In([0, -on, 0], [0, on, 0], 65280)), ht.add(In([0, 0, -on], [0, 0, on], 35071)), ht.visible = false, ht.frustumCulled = false, w.add(ht);
  const to = 40, Xo = 2.5, Ln = () => {
    if (!ht.visible) return;
    const o = h().position.distanceTo(ht.position), a = Math.max(0.05, Math.min(Xo, o / to));
    ht.scale.setScalar(a);
  }, no = () => {
    ft.children.length !== 0 && ft.children.forEach((n) => {
      if (!n.__isSelectionPt) return;
      const o = n;
      o.scale.setScalar(pt(o.position));
    });
  };
  window.__hekatanUpdateSelectionPtScale = no, u.addEventListener("change", () => {
    Ln(), Je.visible && Dt();
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = h().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / to));
    }
    no();
  }), window.__hekatanShowSnap = (n, o, a) => {
    ht.position.set(n, o, a), ht.visible = true, Ln(), v();
  }, window.__hekatanHideSnap = () => {
    ht.visible = false, v();
  }, y.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q;
    const o = b(n);
    if (!o) return;
    z.setFromCamera(C, o);
    const a = j();
    if (a.length) {
      const t = a[0].point, r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, r);
      if (s) io(s.type, s.x, s.y, s.z), ht.position.set(s.x, s.y, s.z), ht.visible = true, t.set(s.x, s.y, s.z);
      else {
        Xn();
        const M = window.__hekatanSnapEnabled !== false, c = window.__hekatanSnap2D ?? 0.5;
        M && c > 0 && (t.x = Math.round(t.x / c) * c, t.y = Math.round(t.y / c) * c, t.z = Math.round(t.z / c) * c), ht.position.copy(t), ht.visible = true;
      }
      Ln();
      const l = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (l === "select" || !l) {
        const M = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = Ht(t.x, t.y, t.z, M), f = qt(t.x, t.y, t.z, M), S = Jt(t.x, t.y, t.z, M);
        if (c >= 0) {
          const T = e.points.rawVal[c];
          Je.position.set(T[0], T[1], T[2]), Je.visible = true, Dt(), Le.visible = false, ot = { kind: "pt", a: c };
        } else if (f) {
          const T = e.points.rawVal, O = e.polylines.rawVal[f.polyIdx], ee = T[O[f.segIdx]], pe = T[O[f.segIdx + 1]];
          Le.geometry.setFromPoints([new m(ee[0], ee[1], ee[2]), new m(pe[0], pe[1], pe[2])]), Le.visible = true, Je.visible = false, ot = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(f.polyIdx)) ?? false ? { kind: "poly", a: f.polyIdx } : { kind: "seg", a: f.polyIdx, b: f.segIdx };
        } else if (S >= 0) {
          const O = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[S];
          O && (Le.geometry.setFromPoints([new m(O[0], O[1], O[2]), new m(O[3], O[4], O[5])]), Le.visible = true, Je.visible = false, ot = { kind: "aux", a: S });
        } else Le.visible = false, Je.visible = false, ot = null;
        H.style.left = n.clientX + "px", H.style.top = n.clientY + "px", H.style.display = "block";
        let R = t;
        if ((ot == null ? void 0 : ot.kind) === "pt") {
          const T = e.points.rawVal[ot.a];
          T && (R = new m(T[0], T[1], T[2]));
        }
        const B = `X=${R.x.toFixed(2)} Y=${R.y.toFixed(2)} Z=${R.z.toFixed(2)}`;
        if (ot) {
          const T = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          H.textContent = `${B}  \xB7  \u{1F5B1} Click \u2192 ${T[ot.kind]}`;
        } else H.textContent = B;
        const W = document.getElementById("hk-coord-fixed");
        W && (W.textContent = B), se.visible = false, We.visible = false, v();
        return;
      }
      if (l === "delete") {
        const M = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = qt(t.x, t.y, t.z, M), f = Jt(t.x, t.y, t.z, M);
        let S = false;
        if (f >= 0) if (!c) S = true;
        else {
          const T = window.__hekatanDrawingAuxLines, ee = ((T == null ? void 0 : T.rawVal) ?? (T == null ? void 0 : T.val) ?? T ?? [])[f];
          tn(t.x, t.y, t.z, ee[0], ee[1], ee[2], ee[3], ee[4], ee[5]) < c.dist && (S = true);
        }
        S ? (dt = f, Ne = -1, Ge = -1, An(f)) : c ? (Ne = c.polyIdx, Ge = c.segIdx, dt = -1, Tn(c.polyIdx, c.segIdx)) : (Ne = -1, Ge = -1, dt = -1, le.visible = false), se.visible = false, We.visible = false, G(), H.style.left = n.clientX + "px", H.style.top = n.clientY + "px", H.style.display = "block";
        const R = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let B = "";
        S ? B = `\u{1F5D1} l\xEDnea aux #${dt + 1}` : c ? B = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(c.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${c.polyIdx + 1}` : `\u{1F5D1} seg ${c.segIdx + 1} / poly #${c.polyIdx + 1}` : B = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", H.textContent = `${R}  \xB7  ${B}`;
        const W = document.getElementById("hk-coord-fixed");
        W && (W.textContent = R), v();
        return;
      } else le.visible = false, Ne = -1, dt = -1;
      H.style.left = n.clientX + "px", H.style.top = n.clientY + "px", H.style.display = "block";
      const p = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], d = p[p.length - 1] ?? [], g = e.points.rawVal ?? [];
      if (d.length > 0 && g[d[d.length - 1]]) {
        const M = d[d.length - 1], c = g[M];
        let f = tt;
        if (st = null, !f && window.__hekatanAxisSnap !== false) {
          const Fe = y.getBoundingClientRect(), Ue = n.clientX, at = n.clientY, wt = ((_k = settings.gridSize) == null ? void 0 : _k.rawVal) ?? 10, kt = new m(c[0], c[1], c[2]), Ut = [["x", new m(1, 0, 0)], ["y", new m(0, 1, 0)], ["z", new m(0, 0, 1)]], $t = (At) => {
            const Mt = At.clone().project(o);
            return { x: (Mt.x * 0.5 + 0.5) * Fe.width + Fe.left, y: (-Mt.y * 0.5 + 0.5) * Fe.height + Fe.top };
          };
          let yt = null;
          for (const [At, Mt] of Ut) {
            const Me = $t(kt.clone().addScaledVector(Mt, -wt)), Re = $t(kt.clone().addScaledVector(Mt, wt)), je = Re.x - Me.x, Tt = Re.y - Me.y, Kt = Ue - Me.x, ln = at - Me.y, mn = je * je + Tt * Tt || 1;
            let rn = (Kt * je + ln * Tt) / mn;
            rn = Math.max(0, Math.min(1, rn));
            const wn = Math.hypot(Ue - (Me.x + rn * je), at - (Me.y + rn * Tt));
            if (yt === null || wn < yt.dpx) {
              const Nn = z.ray, po = kt.clone().sub(Nn.origin), Zn = Mt.dot(Nn.direction), uo = Mt.dot(po), Ko = Nn.direction.dot(po), fo = 1 - Zn * Zn, Wo = Math.abs(fo) < 1e-6 ? -uo : (Zn * Ko - uo) / fo;
              yt = { axis: At, dpx: wn, pt: kt.clone().addScaledVector(Mt, Wo) };
            }
          }
          yt && yt.dpx <= 12 && (t.copy(yt.pt), f = yt.axis, st = yt.pt.clone());
        }
        const S = !!window.__hekatanOrthoMode;
        if (!f && S) {
          const Fe = Math.abs(t.x - c[0]), Ue = Math.abs(t.y - c[1]), at = Math.abs(t.z - c[2]), wt = (_l = a[0]) == null ? void 0 : _l.object;
          let kt = null;
          wt === Te ? kt = "xy" : wt === Ie ? kt = "xz" : wt === De && (kt = "yz"), kt === "xy" ? f = Fe >= Ue ? "x" : "y" : kt === "xz" ? f = Fe >= at ? "x" : "z" : kt === "yz" ? f = Ue >= at ? "y" : "z" : f = Fe >= Ue && Fe >= at ? "x" : Ue >= at ? "y" : "z";
        }
        const R = window.__hekatanPolarTrack !== false;
        if (!f && R) {
          const Fe = t.x - c[0], Ue = t.y - c[1], at = t.z - c[2], wt = Math.hypot(Fe, Ue, at);
          if (wt > 1e-3) {
            const Ut = Math.tan(6 * Math.PI / 180) * wt, $t = Math.hypot(Ue, at), yt = Math.hypot(Fe, at), At = Math.hypot(Fe, Ue), Mt = [["x", $t], ["y", yt], ["z", At]];
            Mt.sort((Me, Re) => Me[1] - Re[1]), Mt[0][1] <= Ut && (f = Mt[0][0]);
          }
        }
        if (f) {
          const Fe = c[0], Ue = c[1], at = c[2];
          f === "x" ? t.set(t.x, Ue, at) : f === "y" ? t.set(Fe, t.y, at) : t.set(Fe, Ue, t.z);
          const wt = !!tt, Ut = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[f];
          nt.style.background = "rgba(15,23,42,0.92)", nt.style.color = Ut, nt.style.border = `1.5px solid ${Ut}`;
          const $t = (_m = a[0]) == null ? void 0 : _m.object;
          let yt = null;
          $t === Te ? yt = "xy" : $t === Ie ? yt = "xz" : $t === De && (yt = "yz");
          const At = yt ? ` (plano ${yt.toUpperCase()})` : "";
          nt.textContent = wt ? `\u{1F512} LOCK ${f.toUpperCase()}${At}` : `\u22A5 ORTO ${f.toUpperCase()}${At}`, nt.style.left = n.clientX + 20 + "px", nt.style.top = n.clientY + 18 + "px", nt.style.transform = "none", nt.style.display = "block";
        } else tt || (nt.style.display = "none");
        const B = Math.hypot(t.x - c[0], t.y - c[1], t.z - c[2]), W = Math.atan2(t.y - c[1], t.x - c[0]) * 180 / Math.PI, T = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        H.textContent = `${T} | \u0394L=${B.toFixed(2)}m ${W.toFixed(0)}\xB0`;
        const O = document.getElementById("hk-coord-fixed");
        O && (O.textContent = T), se.geometry.setFromPoints([new m(c[0], c[1], c[2]), new m(t.x, t.y, t.z)]), (_n2 = se.computeLineDistances) == null ? void 0 : _n2.call(se), se.visible = true, X(c[0], c[1], c[2], t.x, t.y, t.z);
        const ee = window.__hekatanOrthoExt ?? 8, pe = window.__hekatanShowOrthoPlanes !== false;
        ke.visible = pe, pe || rt(null), pe && (Ze(oe, c, "xy", ee), Ze(_e, c, "xz", ee), Ze(ge, c, "yz", ee), qe(Te, c, "xy", ee), qe(Ie, c, "xz", ee), qe(De, c, "yz", ee));
        const $e = pe ? z.intersectObjects([Te, Ie, De], false) : [];
        let ye = null;
        if ($e.length > 0) {
          const Fe = $e[0].object;
          Fe === Te ? ye = "xy" : Fe === Ie ? ye = "xz" : Fe === De && (ye = "yz");
        }
        rt(ye), ye && (Ce.style.left = n.clientX + "px", Ce.style.top = n.clientY + "px"), P.geometry.setFromPoints([new m(c[0] - ee, c[1], c[2]), new m(c[0] + ee, c[1], c[2])]), (_o2 = P.computeLineDistances) == null ? void 0 : _o2.call(P), U.geometry.setFromPoints([new m(c[0], c[1] - ee, c[2]), new m(c[0], c[1] + ee, c[2])]), (_p = U.computeLineDistances) == null ? void 0 : _p.call(U), L.geometry.setFromPoints([new m(c[0], c[1], c[2] - ee), new m(c[0], c[1], c[2] + ee)]), (_q = L.computeLineDistances) == null ? void 0 : _q.call(L), We.visible = true;
        const xe = P.material, mt = U.material, Xe = L.material;
        f === "x" ? (xe.opacity = 0.95, mt.opacity = 0.1, Xe.opacity = 0.1) : f === "y" ? (xe.opacity = 0.1, mt.opacity = 0.95, Xe.opacity = 0.1) : f === "z" ? (xe.opacity = 0.1, mt.opacity = 0.1, Xe.opacity = 0.95) : (xe.opacity = 0.5, mt.opacity = 0.5, Xe.opacity = 0.5);
      } else {
        const M = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        H.textContent = M;
        const c = document.getElementById("hk-coord-fixed");
        if (c && (c.textContent = M), se.visible = false, We.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(l)) {
          if (Z = null, $ = null, D.style.left = n.clientX + 20 + "px", D.style.top = n.clientY - 28 + "px", D.style.display = "block", !A) {
            D.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const S = document.activeElement;
            !(S && (S.tagName === "INPUT" || S.tagName === "TEXTAREA") && S !== D) && document.activeElement !== D && D.focus({ preventScroll: true });
            try {
              D.select();
            } catch {
            }
          }
        } else G();
      }
      v();
    } else Xn(), H.style.display = "none", ht.visible = false, se.visible = false, We.visible = false, G(), v();
  }), I.derive(() => {
    if (!e.gridTarget) return;
    Fs(i, { position: new m(...e.gridTarget.val.position), quaternion: new Kn().setFromEuler(new xn(...e.gridTarget.val.rotation)) }, v), K.position.set(...e.gridTarget.val.position), K.quaternion.setFromEuler(new xn(...e.gridTarget.val.rotation)), K.updateMatrixWorld();
    const n = new m(0, 0, 1).applyEuler(new xn(...e.gridTarget.val.rotation));
    k = !(Math.abs(n.x) > 0.999 || Math.abs(n.y) > 0.999 || Math.abs(n.z) > 0.999);
  }), I.derive(() => {
    me.geometry.setAttribute("position", new _t(e.points.val.flat(), 3)), me.geometry.computeBoundingSphere();
  }), I.derive(() => {
    const n = 0.05 * _ * 0.5 * x.val;
    z.params.Points.threshold = 0.4 * n;
  }), I.derive(() => {
    var _a;
    const n = e.points.val ?? [], a = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const s of a) {
      const [l, p, d] = n[s];
      t.push(l, p, d);
    }
    const r = new he();
    r.setAttribute("position", new _t(t, 3)), ze.geometry.dispose(), ze.geometry = r;
  });
  let Rn = false, Ot = 0;
  y.addEventListener("pointerdown", () => {
    Rn = true;
  }), y.addEventListener("pointerup", () => {
    Rn = false;
  }), y.addEventListener("pointermove", () => {
    Rn && Ot++;
  });
  const St = document.createElement("div");
  St.id = "hk-window-select", St.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(St);
  let Et = null, un = false, Vt = null;
  const Bn = (n, o, a, t, r) => {
    r ? (St.style.borderColor = "#34d399", St.style.borderStyle = "dashed", St.style.background = "rgba(52, 211, 153, 0.10)") : (St.style.borderColor = "#22d3ee", St.style.borderStyle = "solid", St.style.background = "rgba(34, 211, 238, 0.10)"), St.style.left = Math.min(n, a) + "px", St.style.top = Math.min(o, t) + "px", St.style.width = Math.abs(a - n) + "px", St.style.height = Math.abs(t - o) + "px", St.style.display = "block";
  }, oo = (n, o, a, t, r) => {
    var _a, _b, _c, _d;
    const s = Math.min(n, a), l = Math.max(n, a), p = Math.min(o, t), d = Math.max(o, t), g = a < n, M = y.getBoundingClientRect(), c = h();
    c.updateMatrixWorld();
    const f = (ye) => {
      const xe = new m(ye[0], ye[1], ye[2]);
      return xe.project(c), { x: M.left + (xe.x * 0.5 + 0.5) * M.width, y: M.top + (-xe.y * 0.5 + 0.5) * M.height };
    }, S = (ye) => ye.x >= s && ye.x <= l && ye.y >= p && ye.y <= d, R = (ye, xe) => !(ye.x < s && xe.x < s || ye.x > l && xe.x > l || ye.y < p && xe.y < p || ye.y > d && xe.y > d);
    r || fe.clear();
    let B = 0;
    const W = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let ye = 0; ye < W.length; ye++) {
      const xe = W[ye];
      xe && S(f(xe)) && (fe.add(`pt:${ye}`), B++);
    }
    const T = (ye, xe) => g ? S(ye) || S(xe) || R(ye, xe) : S(ye) && S(xe), O = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], ee = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let ye = 0; ye < O.length; ye++) {
      const xe = O[ye];
      if (ee.includes(ye)) {
        let Xe;
        if (!g) Xe = xe.every((Fe) => {
          const Ue = W[Fe];
          return !!Ue && S(f(Ue));
        });
        else {
          Xe = false;
          for (let Fe = 0; Fe < xe.length - 1; Fe++) {
            const Ue = W[xe[Fe]], at = W[xe[Fe + 1]];
            if (!(!Ue || !at) && T(f(Ue), f(at))) {
              Xe = true;
              break;
            }
          }
        }
        Xe && (fe.add(`poly:${ye}`), B++);
      } else for (let Xe = 0; Xe < xe.length - 1; Xe++) {
        const Fe = W[xe[Xe]], Ue = W[xe[Xe + 1]];
        !Fe || !Ue || T(f(Fe), f(Ue)) && (fe.add(`seg:${ye}:${Xe}`), B++);
      }
    }
    const $e = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let ye = 0; ye < $e.length; ye++) {
      const xe = $e[ye];
      if (!xe || xe.length !== 6) continue;
      const mt = f([xe[0], xe[1], xe[2]]), Xe = f([xe[3], xe[4], xe[5]]);
      T(mt, Xe) && (fe.add(`aux:${ye}`), B++);
    }
    Rt(), ie(`${g ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${B} item(s) ${r ? "agregados a" : "\u2192"} selecci\xF3n (total ${fe.size})`), St.style.display = "none";
  }, vn = () => {
    Vt && (Vt = null, St.style.display = "none", ie("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = vn, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && Vt && vn();
  });
  const so = () => {
    var _a, _b, _c, _d;
    if (fe.size === 0) return false;
    const n = [...fe], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], a = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? [], l = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Set();
    for (const R of n) {
      const [B, ...W] = R.split(":");
      if (B === "pt") l.add(+W[0]);
      else if (B === "poly") p.add(+W[0]);
      else if (B === "seg") {
        const T = +W[0], O = +W[1];
        d.has(T) || d.set(T, /* @__PURE__ */ new Set()), d.get(T).add(O);
      } else B === "aux" && g.add(+W[0]);
    }
    let M = 0, c = [], f = [];
    const S = /* @__PURE__ */ new Map();
    for (let R = 0; R < a.length; R++) {
      if (p.has(R)) {
        M++;
        continue;
      }
      S.set(R, c.length);
      const B = d.get(R);
      if (B && B.size > 0) {
        let W = [];
        for (let T = 0; T < a[R].length; T++) W.push(a[R][T]), T < a[R].length - 1 && B.has(T) && (W.length >= 2 && c.push(W), W = [], M++);
        (W.length >= 2 || W.length === 1) && c.push(W);
      } else c.push([...a[R]]);
    }
    if (l.size > 0) {
      const R = [], B = /* @__PURE__ */ new Map();
      for (let T = 0; T < o.length; T++) {
        if (l.has(T)) {
          M++;
          continue;
        }
        B.set(T, R.length), R.push([...o[T]]);
      }
      const W = [];
      for (const T of c) {
        let O = [];
        for (const ee of T) {
          const pe = B.get(ee);
          pe === void 0 ? (O.length >= 2 && W.push(O), O = []) : O.push(pe);
        }
        O.length >= 2 && W.push(O);
      }
      c = W, e.points.val = R;
    }
    for (const R of t) {
      const B = S.get(R);
      B !== void 0 && B < c.length && f.push(B);
    }
    if (e.polylines && (e.polylines.val = c), e.areas && (e.areas.val = f), g.size > 0 && r) {
      const R = s.filter((B, W) => !g.has(W));
      "val" in r ? r.val = R : window.__hekatanDrawingAuxLines = R, M += g.size;
    }
    fe.clear(), Rt();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return ie(`\u{1F5D1} ${M} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = so, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement, a = o && (o.id === "hk3-cmd-input" || o.id === "hk-dyn-input") && o.value === "";
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && !a || fe.size !== 0 && (n.preventDefault(), so());
  });
  const Ct = document.createElement("div");
  Ct.id = "hk-properties-pane";
  const ao = "hk-props-pane-pos";
  let sn = null;
  try {
    const n = localStorage.getItem(ao);
    n && (sn = JSON.parse(n));
  } catch {
  }
  Ct.style.cssText = ["position:fixed", sn ? `left:${sn.left}px` : "left:50%", sn ? `top:${sn.top}px` : "top:8px", sn ? "transform:none" : "transform:translateX(-50%)", "width:min(320px, calc(100vw - 32px))", "max-height:60vh", "overflow-y:auto", "z-index:201", "box-shadow:0 6px 24px rgba(0,0,0,0.45)", "border-radius:6px", "display:none"].join(";") + ";", document.body.appendChild(Ct);
  const Do = () => {
    const n = Ct.querySelector(".tp-rotv_b");
    if (!n || n.__hkDragWired) return;
    n.__hkDragWired = true, n.style.cursor = "move", n.style.userSelect = "none";
    let o = false, a = 0, t = 0, r = 0, s = 0;
    n.addEventListener("mousedown", (l) => {
      o = true, a = l.clientX, t = l.clientY;
      const p = Ct.getBoundingClientRect();
      r = p.left, s = p.top, Ct.style.transform = "none", Ct.style.left = `${r}px`, Ct.style.top = `${s}px`, l.preventDefault();
    }), window.addEventListener("mousemove", (l) => {
      if (!o) return;
      const p = l.clientX - a, d = l.clientY - t, g = Math.max(0, Math.min(window.innerWidth - 80, r + p)), M = Math.max(0, Math.min(window.innerHeight - 40, s + d));
      Ct.style.left = `${g}px`, Ct.style.top = `${M}px`;
    }), window.addEventListener("mouseup", () => {
      if (o) {
        o = false;
        try {
          localStorage.setItem(ao, JSON.stringify({ left: parseFloat(Ct.style.left), top: parseFloat(Ct.style.top) }));
        } catch {
        }
      }
    });
  }, Y = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 }, gt = { dx: 0, dy: 0, dz: 3, copias: 1 };
  let Qe = null;
  const ut = (n, o, a, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: a, value: t } }));
  }, Yo = () => {
    if (Qe && (Qe.dispose(), Qe = null), fe.size === 0) {
      Ct.style.display = "none";
      return;
    }
    const n = [...fe], o = n.filter((c) => c.startsWith("pt:")), a = n.filter((c) => c.startsWith("seg:")), t = n.filter((c) => c.startsWith("poly:")), r = n.filter((c) => c.startsWith("aux:")), s = o.length > 0, l = a.length > 0, p = t.length > 0, d = !s && !l && !p, g = [];
    o.length && g.push(`\u{1F535} ${o.length} nodo(s)`), a.length && g.push(`\u{1F4CF} ${a.length} segmento(s)`), t.length && g.push(`\u25AD ${t.length} \xE1rea(s)`), r.length && g.push(`\u250A ${r.length} aux`);
    const M = `\u{1F3AF} ${fe.size} item(s) \u2014 ${g.join(", ")}`;
    Qe = new To({ container: Ct, title: M });
    {
      const c = Qe.addFolder({ title: "\u270F\uFE0F Editar \u2014 Replicar / Mover", expanded: false });
      c.addBinding(gt, "dx", { label: "\u0394x (m)", step: 0.1 }), c.addBinding(gt, "dy", { label: "\u0394y (m)", step: 0.1 }), c.addBinding(gt, "dz", { label: "\u0394z (m)", step: 0.1 }), c.addBinding(gt, "copias", { label: "Copias", min: 1, max: 50, step: 1 }), c.addButton({ title: "\u29C9 Replicar selecci\xF3n" }).on("click", () => {
        var _a;
        const S = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, gt.dx, gt.dy, gt.dz, gt.copias);
        ie(S ? `\u29C9 Replicado \xD7${S} (\u0394 ${gt.dx},${gt.dy},${gt.dz} m)` : "\u26A0 Nada que replicar \u2014 seleccion\xE1 nodos/frames/\xE1reas");
      }), c.addButton({ title: "\u2192 Mover selecci\xF3n (1 copia, sin duplicar geometr\xEDa base)" }).on("click", () => {
        var _a;
        const S = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, gt.dx, gt.dy, gt.dz, 1);
        ie(S ? `\u2192 Copia desplazada \u0394 ${gt.dx},${gt.dy},${gt.dz} m` : "\u26A0 Nada seleccionado");
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
      const c = Qe.addFolder({ title: `\u{1F4CC} Restraints (DOFs) \u2014 ${o.length} nodo(s)` });
      c.addBinding(Y, "Ux"), c.addBinding(Y, "Uy"), c.addBinding(Y, "Uz"), c.addBinding(Y, "Rx"), c.addBinding(Y, "Ry"), c.addBinding(Y, "Rz");
      const f = Qe.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      f.addBinding(Y, "Kx", { label: "Kx", min: 0, step: 100 }), f.addBinding(Y, "Ky", { label: "Ky", min: 0, step: 100 }), f.addBinding(Y, "Kz", { label: "Kz", min: 0, step: 100 }), f.addBinding(Y, "Krx", { label: "Krx", min: 0, step: 1e3 }), f.addBinding(Y, "Kry", { label: "Kry", min: 0, step: 1e3 }), f.addBinding(Y, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const S = Qe.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      S.addBinding(Y, "Fx", { step: 0.1 }), S.addBinding(Y, "Fy", { step: 0.1 }), S.addBinding(Y, "Fz", { step: 0.1 }), S.addBinding(Y, "Mx", { step: 0.1 }), S.addBinding(Y, "My", { step: 0.1 }), S.addBinding(Y, "Mz", { step: 0.1 }), Qe.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(Y, "mass", { label: "m", min: 0, step: 1 }), Qe.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(Y, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), Qe.addButton({ title: `\u2713 Aplicar a ${o.length} nodo(s) seleccionado(s)` }).on("click", () => {
        let W = 0;
        const T = [Y.Ux, Y.Uy, Y.Uz, Y.Rx, Y.Ry, Y.Rz];
        T.some((pe) => pe) && (ut("nodes", o, "supports", T), W++);
        const O = [Y.Fx, Y.Fy, Y.Fz, Y.Mx, Y.My, Y.Mz];
        O.some((pe) => pe !== 0) && (ut("nodes", o, "loads", O), W++);
        const ee = [Y.Kx, Y.Ky, Y.Kz, Y.Krx, Y.Kry, Y.Krz];
        if (ee.some((pe) => pe !== 0) && (ut("nodes", o, "springs", ee), W++), Y.mass !== 0 && (ut("nodes", o, "mass", Y.mass), W++), Y.diaphragm !== "Ninguno" && (ut("nodes", o, "diaphragm", Y.diaphragm), W++), W === 0) {
          ie("\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para apoyo, o un valor de carga/resorte/masa, y volv\xE9 a aplicar.");
          let pe = document.getElementById("hk-prop-toast");
          pe || (pe = document.createElement("div"), pe.id = "hk-prop-toast", pe.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);z-index:99999;padding:9px 20px;border-radius:8px;font:600 14px system-ui;color:#fff;pointer-events:none;transition:opacity .25s;box-shadow:0 4px 16px rgba(0,0,0,.4)", document.body.appendChild(pe)), pe.textContent = "\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para empotrado/articulado, despu\xE9s Aplicar", pe.style.background = "rgba(217,119,6,0.97)", pe.style.opacity = "1", clearTimeout(window.__hekatanPropToastT), window.__hekatanPropToastT = setTimeout(() => {
            pe && (pe.style.opacity = "0");
          }, 3200);
        } else ie(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    }
    if (l) {
      const c = Qe.addFolder({ title: `\u{1F4CF} Secci\xF3n frame \u2014 ${a.length} seg(s)` });
      c.addBinding(Y, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), c.addBinding(Y, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const f = Qe.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      f.addBinding(Y, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), f.addBinding(Y, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), f.addBinding(Y, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), f.addBinding(Y, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), Qe.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(Y, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), Qe.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(Y, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const B = Qe.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      B.addBinding(Y, "relMxI", { label: "Mx I" }), B.addBinding(Y, "relMyI", { label: "My I" }), B.addBinding(Y, "relMzI", { label: "Mz I" });
      const W = Qe.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      W.addBinding(Y, "relMxJ", { label: "Mx J" }), W.addBinding(Y, "relMyJ", { label: "My J" }), W.addBinding(Y, "relMzJ", { label: "Mz J" }), Qe.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(Y, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const O = Qe.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      O.addBinding(Y, "LKx", { label: "LKx", min: 0, step: 100 }), O.addBinding(Y, "LKy", { label: "LKy", min: 0, step: 100 }), O.addBinding(Y, "LKz", { label: "LKz", min: 0, step: 100 });
      const ee = Qe.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      ee.addBinding(Y, "qx", { step: 0.1 }), ee.addBinding(Y, "qy", { step: 0.1 }), ee.addBinding(Y, "qz", { step: 0.1 }), Qe.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(Y, "massPerM", { label: "m/L", min: 0, step: 1 }), Qe.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        ut("segs", a, "section", Y.section), ut("segs", a, "material", Y.material_frame);
        const $e = { A: Y.A_mod, Iz: Y.Iz_mod, Iy: Y.Iy_mod, J: Y.J_mod };
        ($e.A !== 1 || $e.Iz !== 1 || $e.Iy !== 1 || $e.J !== 1) && ut("segs", a, "modifiers", $e), Y.insertionPoint !== "10 \u2014 Centroid" && ut("segs", a, "insertionPoint", Y.insertionPoint), Y.beta !== 0 && ut("segs", a, "beta", Y.beta);
        const ye = [Y.relMxI, Y.relMyI, Y.relMzI], xe = [Y.relMxJ, Y.relMyJ, Y.relMzJ];
        (ye.some((Fe) => Fe) || xe.some((Fe) => Fe)) && ut("segs", a, "releases", { i: ye, j: xe }), Y.hinges !== "None" && ut("segs", a, "hinges", Y.hinges);
        const mt = [Y.LKx, Y.LKy, Y.LKz];
        mt.some((Fe) => Fe !== 0) && ut("segs", a, "lineSprings", mt);
        const Xe = [Y.qx, Y.qy, Y.qz];
        Xe.some((Fe) => Fe !== 0) && ut("segs", a, "distLoad", Xe), Y.massPerM !== 0 && ut("segs", a, "massPerM", Y.massPerM), ie(`\u2713 Propiedades aplicadas a ${a.length} segmento(s)`);
      });
    }
    if (p) {
      const c = Qe.addFolder({ title: `\u25AD Shell / \xC1rea \u2014 ${t.length}` });
      c.addBinding(Y, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), c.addBinding(Y, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), c.addBinding(Y, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), Qe.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(Y, "surfLoad", { label: "q", step: 0.1 }), Qe.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        ut("areas", t, "shellType", Y.shellType), ut("areas", t, "thickness", Y.thickness), ut("areas", t, "material", Y.material_shell), Y.surfLoad !== 0 && ut("areas", t, "surfLoad", Y.surfLoad), ie(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    }
    if (d) {
      const c = Qe.addFolder({ title: "\u2139 Selecci\xF3n" }), f = { msg: "Seleccion\xE1 nodos, frames o \xE1reas para editar" };
      c.addBinding(f, "msg", { readonly: true, label: "" });
    }
    Qe.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      fe.clear(), Rt();
    }), Ct.style.display = "block", Do();
  };
  window.__hekatanRefreshPropsPane = Yo;
  let an = null, Mn = false;
  y.addEventListener("pointerdown", (n) => {
    n.button === 2 && (an = { x: n.clientX, y: n.clientY }, Mn = false);
  }), y.addEventListener("pointermove", (n) => {
    if (an && n.buttons & 2 && !Mn) {
      const o = n.clientX - an.x, a = n.clientY - an.y;
      Math.hypot(o, a) > 8 && (Mn = true);
    }
  }), y.addEventListener("pointerup", (n) => {
    var _a, _b, _c;
    if (n.button === 2) {
      const o = an !== null && !Mn;
      an = null;
      const a = window.__hekatanRClickOnElement === true;
      if (window.__hekatanRClickOnElement = false, a) return;
      if (o) {
        if (Vt ? vn() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), fe.size > 0 && (fe.clear(), Rt()), e.polylines) {
          const s = e.polylines.rawVal;
          (s[s.length - 1] ?? []).length > 0 && (e.polylines.val = [...s, []]);
        }
        const t = window.__hekatanCadState, r = (_b = (_a = t == null ? void 0 : t.get) == null ? void 0 : _a.call(t)) == null ? void 0 : _b.tool;
        r && r !== "select" && r !== "none" ? ((_c = t == null ? void 0 : t.setTool) == null ? void 0 : _c.call(t, "select"), ie(`\u238B Cancelado \u2014 tool '${r}' cerrado, volv\xE9s a Seleccionar`)) : ie("\u238B Cancelado (click derecho)");
      }
    }
  }), y.addEventListener("contextmenu", (n) => {
    n.preventDefault(), n.stopPropagation();
  }, { capture: true }), y.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && window.__hekatanRectSelectExplicit && n.pointerType !== "touch" && (Et = { x: n.clientX, y: n.clientY }, un = false);
  }), y.addEventListener("pointermove", (n) => {
    if (Vt && n.buttons === 0) {
      const s = n.clientX < Vt.x;
      Bn(Vt.x, Vt.y, n.clientX, n.clientY, s);
      return;
    }
    if (!Et) return;
    const o = n.clientX - Et.x, a = n.clientY - Et.y, t = Math.hypot(o, a);
    if (!un && t < 8) return;
    un = true;
    const r = n.clientX < Et.x;
    Bn(Et.x, Et.y, n.clientX, n.clientY, r);
  }), y.addEventListener("pointerup", (n) => {
    if (!Et) return;
    if (!un) {
      Et = null;
      return;
    }
    const o = n.ctrlKey || n.metaKey || n.shiftKey;
    oo(Et.x, Et.y, n.clientX, n.clientY, o), Et = null, un = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const Zt = new Oe();
  Zt.visible = false, Zt.frustumCulled = false, w.add(Zt);
  const No = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, io = (n, o, a, t) => {
    var _a, _b, _c, _d;
    for (; Zt.children.length; ) {
      const p = Zt.children.pop();
      (_b = (_a = p.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = p.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const r = No[n] ?? 16777215, s = 0.05, l = new he().setFromPoints([new m(o - s, a - s, t), new m(o + s, a - s, t), new m(o + s, a - s, t), new m(o + s, a + s, t), new m(o + s, a + s, t), new m(o - s, a + s, t), new m(o - s, a + s, t), new m(o - s, a - s, t)]);
    Zt.add(new Xt(l, new lt({ color: r, linewidth: 2 }))), Zt.position.set(0, 0, 0), Zt.visible = true;
  }, Xn = () => {
    Zt.visible = false;
  }, Zo = (n, o, a, t) => {
    var _a;
    const r = window.__hekatanOsnap, s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let p = null;
    const d = (c, f, S, R) => {
      const B = Math.hypot(f - n, S - o, R - a);
      B > t || (!p || B < p.d) && (p = { type: c, x: f, y: S, z: R, d: B });
    };
    (r.node || r.end) && s.forEach((c) => {
      r.node && d("node", c[0], c[1], c[2]);
    });
    for (const c of l) if (!(c.length < 2)) for (let f = 0; f < c.length - 1; f++) {
      const S = s[c[f]], R = s[c[f + 1]];
      if (!(!S || !R) && (r.end && (d("end", S[0], S[1], S[2]), d("end", R[0], R[1], R[2])), r.mid && d("mid", (S[0] + R[0]) / 2, (S[1] + R[1]) / 2, (S[2] + R[2]) / 2), r.nea || r.per)) {
        const B = R[0] - S[0], W = R[1] - S[1], T = R[2] - S[2], O = B * B + W * W + T * T;
        if (O < 1e-12) continue;
        const ee = Math.max(0, Math.min(1, ((n - S[0]) * B + (o - S[1]) * W + (a - S[2]) * T) / O)), pe = S[0] + ee * B, $e = S[1] + ee * W, ye = S[2] + ee * T;
        r.nea && d("nea", pe, $e, ye), r.per && d("per", pe, $e, ye);
      }
    }
    const g = window.__hekatanDrawingAuxLines, M = (g == null ? void 0 : g.rawVal) ?? (g == null ? void 0 : g.val) ?? g ?? [];
    for (const c of M) {
      if (c.length !== 6) continue;
      const f = [c[0], c[1], c[2]], S = [c[3], c[4], c[5]];
      if (r.end && (d("end", f[0], f[1], f[2]), d("end", S[0], S[1], S[2])), r.mid && d("mid", (f[0] + S[0]) / 2, (f[1] + S[1]) / 2, (f[2] + S[2]) / 2), r.nea || r.per) {
        const R = S[0] - f[0], B = S[1] - f[1], W = S[2] - f[2], T = R * R + B * B + W * W;
        if (T < 1e-12) continue;
        const O = Math.max(0, Math.min(1, ((n - f[0]) * R + (o - f[1]) * B + (a - f[2]) * W) / T)), ee = f[0] + O * R, pe = f[1] + O * B, $e = f[2] + O * W;
        r.nea && d("nea", ee, pe, $e), r.per && d("per", ee, pe, $e);
      }
    }
    return p ? { type: p.type, x: p.x, y: p.y, z: p.z } : null;
  };
  window.__hekatanOsnapCompute = Zo, window.__hekatanOsnapShow = io, window.__hekatanOsnapHide = Xn;
  let Ae = [], vt = 0;
  const fn = document.createElement("div");
  fn.id = "hk-cad-status", fn.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", fn.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(fn);
  const Uo = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), tt && n.push(`\u{1F512} LOCK ${tt.toUpperCase()}`);
    const a = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(a) > 1e-3 && n.push(`Cota Z=${a}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, ie = (n) => {
    const o = n + Uo();
    fn.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    ie(o);
  }, window.__hekatanCadResetPending = () => {
    Ae = [], we = [], te.visible = false, v(), ie("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  const hn = [], Wt = () => {
    var _a, _b;
    hn.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), hn.length > 100 && hn.shift();
  }, lo = () => {
    var _a;
    const n = hn.pop();
    if (!n) {
      ie("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), Ae = [], se.visible = false, We.visible = false, G(), ie(`\u21B6 Undo \u2014 ${hn.length} estados restantes`);
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
    if (Ae = [], e.polylines) {
      const n = e.polylines.rawVal, o = n[n.length - 1];
      o && o.length > 0 && (e.polylines.val = [...n, []]);
    }
    tt = null, Lt(), se.visible = false, We.visible = false, G(), ie("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), v();
  };
  window.__hekatanFinalizeDraw = ro;
  const co = () => {
    Ae = [], we = [], te.visible = false;
    let n = false;
    fe.size && (fe.clear(), Rt(), n = true), ro(), ie(n ? "\u238B Selecci\xF3n cancelada" : "\u238B Acci\xF3n cancelada"), v();
  };
  window.__hekatanEscapeCancel = co, window.__hekatanReplicateSelection = (n, o, a, t) => {
    var _a, _b, _c, _d;
    t = Math.max(1, Math.round(t || 1));
    const r = [...fe], s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], p = new Set(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? []), d = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), M = [];
    if (r.forEach((B) => {
      if (B.startsWith("pt:")) d.add(+B.slice(3));
      else if (B.startsWith("poly:")) {
        const W = +B.slice(5);
        g.add(W), (l[W] || []).forEach((T) => d.add(T));
      } else if (B.startsWith("seg:")) {
        const W = B.split(":"), T = +W[1], O = +W[2], ee = l[T] || [], pe = ee[O], $e = ee[O + 1];
        pe != null && $e != null && (M.push([pe, $e]), d.add(pe), d.add($e));
      }
    }), !d.size) return 0;
    Wt();
    const c = [...s];
    let f = l.slice();
    f.length && f[f.length - 1].length === 0 && (f = f.slice(0, -1));
    const S = [...((_c = e.areas) == null ? void 0 : _c.rawVal) ?? []], R = [...d];
    for (let B = 1; B <= t; B++) {
      const W = n * B, T = o * B, O = a * B, ee = /* @__PURE__ */ new Map();
      R.forEach((pe) => {
        ee.set(pe, c.length), c.push([s[pe][0] + W, s[pe][1] + T, s[pe][2] + O]);
      }), g.forEach((pe) => {
        const $e = l[pe].map((xe) => ee.has(xe) ? ee.get(xe) : xe), ye = f.length;
        f.push($e), p.has(pe) && S.push(ye);
      }), M.forEach(([pe, $e]) => {
        f.push([ee.get(pe), ee.get($e)]);
      });
    }
    f.push([]), e.points.val = c, e.polylines && (e.polylines.val = f), e.areas && (e.areas.val = S);
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return v(), t;
  }, y.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z;
    if (Ot > 5) {
      Ot = 0;
      return;
    }
    Ot = 0;
    const o = b(n);
    if (!o) return;
    z.setFromCamera(C, o);
    const a = j();
    if (!a.length) return;
    {
      const s = o.position.distanceTo(u.target) || 1, l = a[0].distance ?? o.position.distanceTo(a[0].point), p = a[0].point;
      if (!isFinite(p.x) || !isFinite(p.y) || !isFinite(p.z) || l > Math.max(s * 12, 300)) {
        ie("\u26A0 Click rasante descartado \u2014 cay\xF3 demasiado lejos. Acerc\xE1 la vista o clicke\xE1 sobre la grilla.");
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
          let M = tt;
          if (!M && g) {
            const c = Math.abs(t.x - d[0]), f = Math.abs(t.y - d[1]), S = Math.abs(t.z - d[2]);
            M = c >= f && c >= S ? "x" : f >= S ? "y" : "z";
          }
          M === "x" ? t = new m(t.x, d[1], d[2]) : M === "y" ? t = new m(d[0], t.y, d[2]) : M === "z" && (t = new m(d[0], d[1], t.z));
        }
      }
    }
    if (st) t = st.clone(), ie(`\u{1F4D0} Eje \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.2, l = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, s);
      if (l) t = new m(l.x, l.y, l.z), ie(`\u{1F3AF} Snap [${l.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      else {
        const p = window.__hekatanSnapEnabled !== false, d = window.__hekatanSnap2D ?? 0;
        p && d > 0 && (t = new m(Math.round(t.x / d) * d, Math.round(t.y / d) * d, Math.round(t.z / d) * d));
      }
    }
    const r = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (r === "select" || r === "none" || !r) {
      if (ot) {
        Vt && vn();
        const { kind: s, a: l, b: p } = ot, d = p !== void 0 ? `${s}:${l}:${p}` : `${s}:${l}`;
        n.ctrlKey || n.metaKey || n.shiftKey || fe.clear(), fe.has(d) ? fe.delete(d) : fe.add(d), Rt(), ie(`\u2713 Seleccionados ${fe.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const s = n.ctrlKey || n.metaKey || n.shiftKey, l = n.clientX, p = n.clientY;
        Vt ? (oo(Vt.x, Vt.y, l, p, s), Vt = null) : s || (Vt = { x: l, y: p }, ie("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), Bn(l, p, l + 1, p + 1, false));
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
      const l = s.mode === "number", p = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, s.pendingStart, [t.x, t.y, t.z], l);
      ie(`\u2713 Eje "${p}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (r === "delete") {
      if (dt >= 0) {
        const s = window.__hekatanDrawingAuxLines, l = (s == null ? void 0 : s.rawVal) ?? (s == null ? void 0 : s.val) ?? s ?? [], p = dt;
        if (p >= 0 && p < l.length) {
          Wt();
          const d = l.slice(0, p).concat(l.slice(p + 1));
          s && typeof s == "object" && "val" in s ? s.val = d : window.__hekatanDrawingAuxLines = d, ie(`\u{1F5D1} L\xEDnea auxiliar #${p + 1} borrada`), dt = -1, le.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (Ne >= 0) {
        const s = Ne, l = Ge;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(s)) ?? false ? (nn(s), ie(`\u{1F5D1} \xC1rea #${s + 1} (shell Q4) borrada`)) : l >= 0 ? (En(s, l), ie(`\u{1F5D1} Segmento ${l + 1} de polil\xEDnea #${s + 1} borrado`)) : (nn(s), ie(`\u{1F5D1} Polil\xEDnea #${s + 1} borrada`));
      } else ie("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (r === "circle") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        ie("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [s, l] = Ae, p = Math.hypot(l[0] - s[0], l[1] - s[1], l[2] - s[2]);
      Math.abs(l[0] - s[0]);
      const d = Math.abs(l[1] - s[1]), M = Math.abs(l[2] - s[2]) < 1e-3 ? "xy" : d < 1e-3 ? "xz" : "yz", c = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, s[0], s[1], s[2], p, c, M), ie(`\u2713 C\xEDrculo dibujado en ${M.toUpperCase()} \u2014 r=${p.toFixed(2)}m, ${c} segmentos`), Ae = [];
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
      const [s, l, p] = Ae, d = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, s, l, p, d), ie(`\u2713 Arco dibujado \u2014 ${d} segmentos`), Ae = [];
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
      we.push([t.x, t.y, t.z]), te.geometry.setFromPoints(we.map((s) => new m(s[0], s[1], s[2]))), te.visible = we.length >= 1, ie(`\u25B0 \xC1rea libre \u2014 ${we.length} punto(s). Click m\xE1s v\xE9rtices, o Enter / click-derecho para cerrar y mallar (m\xEDn. 3).`), v();
      return;
    }
    if (r === "plane3") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length < 3) {
        ie(`\u25E3 Plano inclinado \u2014 punto ${Ae.length}/3. Tip: cambi\xE1 la Cota Z (o enganch\xE1 un nodo) entre clicks para darle inclinaci\xF3n.`);
        return;
      }
      const [s, l, p] = Ae, d = (_q = window.__hekatanSetInclinedPlaneFrom3) == null ? void 0 : _q.call(window, s, l, p);
      ie(d ? "\u2713 Plano de trabajo INCLINADO activo. Dibuj\xE1 el \xE1rea (\u25AD/\u2B21) sobre \xE9l. (XY para resetear)" : "\u26A0 Los 3 puntos son colineales \u2014 no definen un plano. Reintent\xE1."), Ae = [];
      return;
    }
    if (r === "col") {
      Wt();
      const s = t.z, l = vt && vt > 0 ? vt : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, s], [t.x, t.y, s + l]];
      const p = e.polylines.rawVal, d = e.points.rawVal.length;
      e.polylines.val = [...p.slice(0, -1), ...p[p.length - 1].length > 0 ? [p[p.length - 1]] : [], [d - 2, d - 1], []], vt = 0, ie(`\u258C Columna creada \u2014 h=${l.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
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
      const [s, l] = Ae, p = vt && vt > 0 ? vt : 3;
      Wt();
      const d = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [s[0], s[1], s[2]], [l[0], l[1], l[2]], [l[0], l[1], l[2] + p], [s[0], s[1], s[2] + p]];
      const g = e.polylines.rawVal;
      if (g.length - 1, e.polylines.val = [...g.slice(0, -1), ...g[g.length - 1].length > 0 ? [g[g.length - 1]] : [], [d, d + 1, d + 2, d + 3, d], []], e.areas) {
        const M = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, M];
      }
      ie(`\u25A5 Pared Q4 creada \u2014 h=${p.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Ae = [], vt = 0;
      try {
        (_s2 = window.__hekatanRebuild) == null ? void 0 : _s2.call(window);
      } catch {
      }
      return;
    }
    if (r === "extp") {
      Wt();
      const s = vt && vt > 0 ? vt : 3, l = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, l], [t.x, t.y, l + s]];
      const p = e.polylines.rawVal, d = e.points.rawVal.length;
      e.polylines.val = [...p.slice(0, -1), ...p[p.length - 1].length > 0 ? [p[p.length - 1]] : [], [d - 2, d - 1], []], vt = 0, ie(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${s.toFixed(2)}m`);
      try {
        (_t2 = window.__hekatanRebuild) == null ? void 0 : _t2.call(window);
      } catch {
      }
      return;
    }
    if (r === "extl") {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.5, l = qt(t.x, t.y, t.z, s);
      if (!l) {
        ie("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const p = e.polylines.rawVal, d = e.points.rawVal, g = p[l.polyIdx], M = d[g[l.segIdx]], c = d[g[l.segIdx + 1]];
      if (!M || !c) {
        ie("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const f = vt && vt > 0 ? vt : 3;
      Wt();
      const S = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [M[0], M[1], M[2]], [c[0], c[1], c[2]], [c[0], c[1], c[2] + f], [M[0], M[1], M[2] + f]];
      const R = e.polylines.rawVal;
      if (e.polylines.val = [...R.slice(0, -1), ...R[R.length - 1].length > 0 ? [R[R.length - 1]] : [], [S, S + 1, S + 2, S + 3, S], []], e.areas) {
        const B = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, B];
      }
      vt = 0, ie(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${f.toFixed(2)}m`);
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
      const [s, l] = Ae, p = window.__hekatanDrawingAuxLines;
      if (p) {
        const f = p.rawVal ?? p.val ?? [];
        p.val = [...f, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      const d = l[0] - s[0], g = l[1] - s[1], M = l[2] - s[2], c = Math.sqrt(d * d + g * g + M * M);
      ie(`\u2713 L\xEDnea auxiliar creada \u2014 L=${c.toFixed(2)}m (cyan, no FEM)`), Ae = [];
      return;
    }
    if (r === "extend") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        ie("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [s, l] = Ae, p = window.__hekatanDrawingAuxLines;
      if (p) {
        const d = p.rawVal ?? p.val ?? [];
        p.val = [...d, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      ie("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Ae = [];
      return;
    }
    if (r === "chaflan") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        ie("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ae, p = window.__hekatanChaflanR ?? 1, d = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_v = window.__hekatanDrawSlabChaflan) == null ? void 0 : _v.call(window, s, l, p, d, 6);
      const g = Math.abs(l[0] - s[0]).toFixed(1), M = Math.abs(l[1] - s[1]).toFixed(1);
      ie(`\u2713 Losa con chaflanes dibujada \u2014 ${g}\xD7${M}m, r=${p}m, ${d} seg/chafl\xE1n`), Ae = [];
      try {
        (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
      } catch {
      }
      return;
    }
    if (A = false, Wt(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const s = e.polylines.rawVal, l = s.length - 1, p = s[l] ?? [];
      if (r === "line" && p.length === 2) {
        e.polylines.val = [...s, []], ie("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_x = window.__hekatanRebuild) == null ? void 0 : _x.call(window);
        } catch {
        }
        return;
      }
      if (r === "area" && p.length === 4) {
        e.polylines.val = [...s.slice(0, -1), [...p, p[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, l]), ie("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
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
  }), y.addEventListener("contextmenu", (n) => {
    var _a, _b, _c;
    if (((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "polyarea" && we.length >= 3) {
      n.preventDefault();
      const a = dn();
      ie(`\u2713 \xC1rea libre mallada \u2014 ${a} shells Q4 creados.`);
      return;
    }
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), y.addEventListener("pointermove", (n) => {
    var _a, _b;
    const o = b(n);
    if (!o) return;
    z.setFromCamera(C, o);
    const a = j();
    if (Se.geometry.deleteAttribute("position"), a.length) {
      let t = a[0].point.clone();
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z));
      {
        const l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], p = l[l.length - 1] ?? [], d = e.points.rawVal ?? [];
        if (p.length > 0) {
          const g = d[p[p.length - 1]];
          if (g) {
            const M = !!window.__hekatanOrthoMode;
            let c = tt;
            if (!c && M) {
              const f = Math.abs(t.x - g[0]), S = Math.abs(t.y - g[1]), R = Math.abs(t.z - g[2]);
              c = f >= S && f >= R ? "x" : S >= R ? "y" : "z";
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
      Se.geometry.setAttribute("position", new _t(t.toArray(), 3));
    }
    v();
  }), y.addEventListener("pointermove", (n) => {
    var _a;
    const o = b(n);
    if (!o) return;
    z.setFromCamera(C, o);
    let a = false;
    const t = z.intersectObject(me), r = j();
    if (t.length && r.length) {
      const s = new m(...e.points.rawVal[t[0].index]), l = new m(...r[0].point), p = s.sub(l), d = (_a = r[0].face) == null ? void 0 : _a.normal;
      d.transformDirection(K.matrixWorld), Math.abs(p.dot(d)) < 1e-4 && (a = true);
    }
    Se.visible = !a;
  });
  let Dn = false, Yn;
  y.addEventListener("pointermove", (n) => {
    var _a;
    if (!Ot) return;
    const o = b(n);
    if (!o) return;
    z.setFromCamera(C, o);
    let a = false;
    const t = z.intersectObject(me), r = j();
    if (t.length && r.length) {
      const l = new m(...e.points.rawVal[t[0].index]), p = new m(...r[0].point), d = l.sub(p), g = (_a = r[0].face) == null ? void 0 : _a.normal;
      g.transformDirection(K.matrixWorld), Math.abs(d.dot(g)) < 1e-4 && (a = true);
    }
    if (a && Ot < 5 && (Dn = true, u.enabled = false, Yn = t[0].index), !Dn || Ot % 2 !== 0) return;
    const s = [...e.points.rawVal];
    if (Yn !== void 0) {
      let l = r[0].point;
      (n.ctrlKey || n.metaKey) && (l = new m(Math.round(l.x), Math.round(l.y), Math.round(l.z))), s[Yn] = l.toArray();
    }
    e.points.val = s;
  }), y.addEventListener("pointerup", () => {
    u.enabled = true, Dn = false;
  }), y.addEventListener("contextmenu", (n) => {
    var _a;
    const o = b(n);
    if (!o) return;
    z.setFromCamera(C, o);
    let a = false;
    const t = z.intersectObject(me), r = j();
    if (t.length && r.length) {
      const p = new m(...e.points.rawVal[t[0].index]), d = new m(...r[0].point), g = p.sub(d), M = (_a = r[0].face) == null ? void 0 : _a.normal;
      M.transformDirection(K.matrixWorld), Math.abs(g.dot(M)) < 1e-4 && (a = true);
    }
    if (!a) return;
    const s = [...e.points.rawVal];
    if (s.splice(t[0].index, 1), e.points.val = s, !e.polylines) return;
    const l = e.polylines.rawVal.map((p) => p.filter((d) => d !== t[0].index)).map((p) => p.map((d) => d > t[0].index ? d - 1 : d)).filter((p) => p.length);
    l.push([]), e.polylines.val = l;
  });
}
function Fs(e, i, w) {
  const _ = Math.round(14.999999999999998), x = { position: e.position.clone(), quaternion: e.quaternion.clone() }, y = setInterval(z, 1e3 / 30);
  let v = 0;
  function z() {
    v++;
    const C = v / _;
    e.position.lerpVectors(x.position, i.position, C), e.quaternion.slerpQuaternions(x.quaternion, i.quaternion, C), w && w(), v == _ && clearInterval(y);
  }
}
function Vs(e, i, w, h) {
  const u = ps(w, e.elements, h);
  return I.derive(() => {
    u.visible = i.shellResults.val != "none";
  }), u;
}
const As = 6, qn = 10, Ts = 0.012;
function Es(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function $s(e, i, w, h) {
  if (!w && !h) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && w) {
    const _ = w[e];
    if (_ && _.has(i)) return _.get(i);
  }
  return null;
}
function Is(e, i, w, h) {
  const u = new Oe(), _ = new Eo();
  _.setColorMap("rainbow");
  const x = new It(), y = I.state([]);
  return I.derive(() => {
    var _a, _b, _c;
    i.deformedShape.val;
    const v = w.val, z = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], C = Es(i.frameResults.val);
    if (u.children.forEach((V) => {
      V.geometry && V.geometry.dispose(), V.material && V.material.dispose();
    }), u.clear(), !C || z.length === 0 || v.length === 0) {
      y.val = [];
      return;
    }
    const b = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, K = (_c = e.deformOutputs) == null ? void 0 : _c.val, re = [], ce = [];
    for (let V = 0; V < z.length; V++) {
      if (z[V].length !== 2) continue;
      const ne = $s(C, V, b, K);
      ne && (re.push(ne[0], ne[1]), ce.push({ idx: V, vals: ne }));
    }
    if (re.length === 0) {
      y.val = [];
      return;
    }
    const ue = Math.min(...re), k = Math.max(...re);
    _.setMin(ue), _.setMax(k), y.val = re;
    const j = [1 / 0, 1 / 0, 1 / 0], me = [-1 / 0, -1 / 0, -1 / 0];
    for (const V of v) for (let N = 0; N < 3; N++) j[N] = Math.min(j[N], V[N]), me[N] = Math.max(me[N], V[N]);
    const ze = Math.max(me[0] - j[0], me[1] - j[1], me[2] - j[2], 1) * Ts, D = [], Z = [], $ = [];
    let A = 0;
    for (const { idx: V, vals: N } of ce) {
      const ne = z[V], Q = v[ne[0]], H = v[ne[1]];
      if (!Q || !H) continue;
      const F = new m(H[0] - Q[0], H[1] - Q[1], H[2] - Q[2]), se = F.length();
      if (se < 1e-10) continue;
      F.normalize();
      const te = Math.abs(F.y) < 0.99 ? new m(0, 1, 0) : new m(1, 0, 0), we = new m().crossVectors(F, te).normalize(), ae = new m().crossVectors(F, we).normalize(), Pe = qn + 1, de = As;
      for (let be = 0; be < Pe; be++) {
        const Ke = be / qn, We = Q[0] + F.x * se * Ke, q = Q[1] + F.y * se * Ke, P = Q[2] + F.z * se * Ke, U = N[0] + (N[1] - N[0]) * Ke, L = _.getColor(U) ?? new It(0, 0, 0);
        x.copy(L).convertSRGBToLinear();
        for (let J = 0; J < de; J++) {
          const oe = J / de * Math.PI * 2, _e = Math.cos(oe), ge = Math.sin(oe);
          D.push(We + (we.x * _e + ae.x * ge) * ze, q + (we.y * _e + ae.y * ge) * ze, P + (we.z * _e + ae.z * ge) * ze), Z.push(x.r, x.g, x.b);
        }
      }
      for (let be = 0; be < qn; be++) for (let Ke = 0; Ke < de; Ke++) {
        const We = (Ke + 1) % de, q = A + be * de + Ke, P = A + be * de + We, U = A + (be + 1) * de + Ke, L = A + (be + 1) * de + We;
        $.push(q, P, L), $.push(q, L, U);
      }
      A += Pe * de;
    }
    if (D.length === 0) return;
    const E = new he();
    E.setAttribute("position", new _t(D, 3)), E.setAttribute("color", new _t(Z, 3)), E.setIndex($), E.computeVertexNormals();
    const X = new et({ vertexColors: true, side: Ft }), G = new He(E, X);
    G.frustumCulled = false, u.add(G);
  }), u.__colorMapValues = y, u;
}
function Ls() {
  const e = window;
  return { forceUnit: e.__hekatanForceUnit ?? localStorage.getItem("hk_forceUnit") ?? "tonf", dispUnit: e.__hekatanDispUnit ?? localStorage.getItem("hk_dispUnit") ?? "mm", stressUnit: e.__hekatanStressUnit ?? localStorage.getItem("hk_stressUnit") ?? "tonf/m\xB2" };
}
const Rs = { kN: 1, tonf: 1 / 9.80665, kip: 1 / 4.4482216 }, Bs = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Xs = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76, "kip/ft\xB2": 1 / 47.88026 };
function ct(e, i = 4) {
  return e == null || !isFinite(e) ? "\u2014" : e === 0 ? "0" : Math.abs(e) < 1e-3 || Math.abs(e) > 1e5 ? e.toExponential(i) : e.toFixed(i);
}
const Ds = 16755200, zo = 56831, Ys = 56831, Ns = 56831, kn = 65382;
function Zs(e) {
  const i = new Oe();
  i.name = "__hekatan_hover", i.renderOrder = 99;
  const w = new cn(1, 16, 16), h = new et({ color: Ds, transparent: true, opacity: 0.85, depthTest: false }), u = new He(w, h);
  u.visible = false, u.renderOrder = 100, i.add(u);
  const _ = new he(), x = new lt({ color: zo, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), y = new Xt(_, x);
  y.visible = false, y.renderOrder = 100, i.add(y);
  const v = new et({ color: zo, transparent: true, opacity: 0.7, depthTest: false }), z = new He(new vo(1, 1, 1, 12), v);
  z.visible = false, z.renderOrder = 100, i.add(z);
  const C = new he(), b = new et({ color: Ys, transparent: true, opacity: 0.45, side: Ft, depthTest: false }), K = new He(C, b);
  K.visible = false, K.renderOrder = 100, i.add(K);
  const re = new he(), ce = new lt({ color: Ns, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), ue = new Xt(re, ce);
  ue.visible = false, ue.renderOrder = 100, i.add(ue);
  const k = new et({ color: kn, transparent: true, opacity: 0.95, depthTest: false }), j = new et({ color: kn, transparent: true, opacity: 0.85, depthTest: false }), me = new vo(1, 1, 1, 12), Se = new et({ color: kn, transparent: true, opacity: 0.55, side: Ft, depthTest: false }), ze = new lt({ color: kn, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), D = [];
  window.__hekatanModelSelection = D;
  const Z = new Oe();
  Z.renderOrder = 101, i.add(Z);
  const $ = document.createElement("div");
  Object.assign($.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), $.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild($);
  }, 0);
  function A(q) {
    const P = e.derivedNodes.rawVal;
    return !P || q < 0 || q >= P.length ? null : new m(P[q][0], P[q][1], P[q][2]);
  }
  function E(q, P) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2;
    const U = e.getActiveCamera();
    if (!U || !e.mesh) return null;
    const L = e.rendererElm.getBoundingClientRect(), J = q - L.left, oe = P - L.top, _e = e.derivedNodes.rawVal, ge = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!_e || !ge) return null;
    const ke = /* @__PURE__ */ new Map(), Ee = (Be) => {
      if (ke.has(Be)) return ke.get(Be);
      const Ve = A(Be);
      if (!Ve) return ke.set(Be, null), null;
      const ve = Ve.clone().project(U), Ye = (ve.x * 0.5 + 0.5) * L.width, le = (-ve.y * 0.5 + 0.5) * L.height, Ne = { x: Ye, y: le, z: ve.z };
      return ke.set(Be, Ne), Ne;
    }, Te = /* @__PURE__ */ new Set();
    for (const Be of ge) if (Be) for (const Ve of Be) Te.add(Ve);
    const Ie = 8;
    let De = -1, qe = Ie;
    for (let Be = 0; Be < _e.length; Be++) {
      if (!Te.has(Be)) continue;
      const Ve = Ee(Be);
      if (!Ve || Ve.z < -1 || Ve.z > 1) continue;
      const ve = Ve.x - J, Ye = Ve.y - oe, le = Math.sqrt(ve * ve + Ye * Ye);
      le < qe && (qe = le, De = Be);
    }
    const Ce = Ls(), rt = Bs[Ce.dispUnit] ?? 1e3, Ze = Rs[Ce.forceUnit] ?? 1;
    if (De >= 0) {
      const Be = _e[De];
      let Ve = `Nodo ${De}
(${Be[0].toFixed(3)}, ${Be[1].toFixed(3)}, ${Be[2].toFixed(3)})`;
      const ve = (_c = (_b = e.mesh) == null ? void 0 : _b.deformOutputs) == null ? void 0 : _c.rawVal;
      if (ve == null ? void 0 : ve.deformations) {
        const Ye = ve.deformations.get(De);
        if (Ye && (Ve += `
\u2500\u2500\u2500\u2500 \u0394 desplaz. \u2500\u2500\u2500\u2500`, Ve += `
Ux = ${ct(Ye[0] * rt, 3)} ${Ce.dispUnit}`, Ve += `
Uy = ${ct(Ye[1] * rt, 3)} ${Ce.dispUnit}`, Ve += `
Uz = ${ct(Ye[2] * rt, 3)} ${Ce.dispUnit}`, (Math.abs(Ye[3]) > 1e-9 || Math.abs(Ye[4]) > 1e-9 || Math.abs(Ye[5]) > 1e-9) && (Ve += `
Rx = ${ct(Ye[3] * 1e3, 3)} mrad`, Ve += `
Ry = ${ct(Ye[4] * 1e3, 3)} mrad`, Ve += `
Rz = ${ct(Ye[5] * 1e3, 3)} mrad`)), ve.reactions) {
          const le = ve.reactions.get(De);
          le && (Math.abs(le[0]) > 1e-9 || Math.abs(le[1]) > 1e-9 || Math.abs(le[2]) > 1e-9 || Math.abs(le[3]) > 1e-6 || Math.abs(le[4]) > 1e-6 || Math.abs(le[5]) > 1e-6) && (Ve += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, Ve += `
Fx = ${ct(le[0] * Ze)} ${Ce.forceUnit}`, Ve += `
Fy = ${ct(le[1] * Ze)} ${Ce.forceUnit}`, Ve += `
Fz = ${ct(le[2] * Ze)} ${Ce.forceUnit}`, (Math.abs(le[3]) > 1e-6 || Math.abs(le[4]) > 1e-6 || Math.abs(le[5]) > 1e-6) && (Ve += `
Mx = ${ct(le[3] * Ze)} ${Ce.forceUnit}\xB7m`, Ve += `
My = ${ct(le[4] * Ze)} ${Ce.forceUnit}\xB7m`, Ve += `
Mz = ${ct(le[5] * Ze)} ${Ce.forceUnit}\xB7m`));
        }
      }
      return { type: "node", idx: De, info: Ve };
    }
    const tt = 5;
    let st = -1, nt = tt, Lt = "frame";
    for (let Be = 0; Be < ge.length; Be++) {
      const Ve = ge[Be];
      if (!(!Ve || Ve.length < 2)) {
        if (Ve.length === 2) {
          const ve = Ee(Ve[0]), Ye = Ee(Ve[1]);
          if (!ve || !Ye || ve.z < -1 || ve.z > 1 || Ye.z < -1 || Ye.z > 1) continue;
          const le = Us(J, oe, ve.x, ve.y, Ye.x, Ye.y);
          le < nt && (nt = le, st = Be, Lt = "frame");
        } else if (Ve.length === 3 || Ve.length === 4) {
          const ve = [];
          let Ye = true;
          for (const le of Ve) {
            const Ne = Ee(le);
            if (!Ne || Ne.z < -1 || Ne.z > 1) {
              Ye = false;
              break;
            }
            ve.push(Ne);
          }
          if (!Ye) continue;
          if (Ks(J, oe, ve)) {
            const Ne = ve.reduce((Ge, dt) => Ge + dt.z, 0) / ve.length * 1e-3;
            Ne < nt && (nt = Ne, st = Be, Lt = "shell");
          }
        } else if (Ve.length === 8) {
          const ve = [];
          let Ye = true;
          for (const fe of Ve) {
            const Le = Ee(fe);
            if (!Le || Le.z < -1 || Le.z > 1) {
              Ye = false;
              break;
            }
            ve.push(Le);
          }
          if (!Ye) continue;
          const le = Math.min(...ve.map((fe) => fe.x)), Ne = Math.max(...ve.map((fe) => fe.x)), Ge = Math.min(...ve.map((fe) => fe.y)), dt = Math.max(...ve.map((fe) => fe.y));
          if (J >= le && J <= Ne && oe >= Ge && oe <= dt) {
            const Le = ve.reduce((Je, pt) => Je + pt.z, 0) / ve.length * 1e-3;
            Le < nt && (nt = Le, st = Be, Lt = "solid");
          }
        }
      }
    }
    if (st >= 0) {
      const Be = ge[st];
      let ve = `${Lt === "frame" ? "Frame" : Lt === "shell" ? "Shell" : "Solid"} ${st}`;
      const Ye = (_e2 = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e2.rawVal, le = (_g = (_f = Ye == null ? void 0 : Ye.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, st);
      if (le) {
        le.name && (ve += `
  \u{1F4CB} ${le.name}`), le.shape && (ve += `
  Shape: ${le.shape}`);
        const Ne = /concrete|hormig|rect.*sólida/i.test(le.shape || ""), Ge = Ne ? 100 : 1e3, dt = Ne ? "cm" : "mm", fe = (Je) => {
          const pt = Je * Ge;
          return Math.abs(pt - Math.round(pt)) < 0.05 ? `${Math.round(pt)}` : `${pt.toFixed(1)}`;
        }, Le = [];
        if (le.D != null && Le.push(`D=${fe(le.D)}`), le.B != null && Le.push(`B=${fe(le.B)}`), le.TF != null && Le.push(`TF=${fe(le.TF)}`), le.TW != null && Le.push(`TW=${fe(le.TW)}`), le.t != null && Le.push(`t=${fe(le.t)}`), Le.length && (ve += `
  Dim: ${Le.join(" ")} ${dt}`), le.material) {
          let Je = le.material;
          le.fillMaterial && (Je += ` + FILL "${le.fillMaterial}"`), ve += `
  Mat: ${Je}`;
        }
      } else {
        const Ne = (_i = (_h = Ye == null ? void 0 : Ye.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, st), Ge = (_k = (_j = Ye == null ? void 0 : Ye.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, st);
        Ne ? (ve += `
  ${Ne}`, Ge && !Ne.includes(Ge) && (ve += `  (${Ge})`)) : Ge && (ve += `
  Material: ${Ge}`);
      }
      if (ve += `
nodos: [${Be.join(", ")}]`, Lt === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const Ne = e.mesh.analyzeOutputs.rawVal, Ge = Xs[Ce.stressUnit] ?? 1, dt = [["bendingXX", "Mxx", Ze, `${Ce.forceUnit}\xB7m/m`], ["bendingYY", "Myy", Ze, `${Ce.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", Ze, `${Ce.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", Ze, `${Ce.forceUnit}/m`], ["membraneYY", "Nyy", Ze, `${Ce.forceUnit}/m`], ["membraneXY", "Nxy", Ze, `${Ce.forceUnit}/m`], ["shearX", "Qx", Ze, `${Ce.forceUnit}/m`], ["shearY", "Qy", Ze, `${Ce.forceUnit}/m`], ["vonMises", "\u03C3VM", Ge, Ce.stressUnit], ["pressure", "p", Ge, Ce.stressUnit]], fe = [];
        for (const [Le, Je, pt, Dt] of dt) {
          const ft = Ne == null ? void 0 : Ne[Le];
          if (ft && ft instanceof Map) {
            const zt = ft.get(st);
            if (zt != null) {
              if (typeof zt == "number") fe.push(`${Je} = ${ct(zt * pt, 3)} ${Dt}`);
              else if (Array.isArray(zt)) {
                let ot = zt[0];
                for (const Ht of zt) Math.abs(Ht) > Math.abs(ot) && (ot = Ht);
                fe.push(`${Je} = ${ct(ot * pt, 3)} ${Dt}`);
              }
            }
          }
        }
        fe.length > 0 && (ve += `
\u2500\u2500\u2500\u2500 results \u2500\u2500\u2500\u2500
` + fe.slice(0, 8).join(`
`));
      }
      if (Lt === "frame" && ((_m = e.mesh) == null ? void 0 : _m.deformOutputs) && e.mesh.elementInputs) {
        const Ne = e.mesh.deformOutputs.rawVal, Ge = e.mesh.elementInputs.rawVal, dt = Ne == null ? void 0 : Ne.deformations;
        if (dt && Be.length === 2) {
          const fe = dt.get(Be[0]), Le = dt.get(Be[1]), Je = _e[Be[0]], pt = _e[Be[1]];
          if (fe && Le && Je && pt) {
            const Dt = pt[0] - Je[0], ft = pt[1] - Je[1], zt = pt[2] - Je[2], ot = Math.sqrt(Dt * Dt + ft * ft + zt * zt);
            if (ot > 1e-9) {
              const Ht = Dt / ot, Rt = ft / ot, tn = zt / ot, qt = (Le[0] - fe[0]) * Ht + (Le[1] - fe[1]) * Rt + (Le[2] - fe[2]) * tn, Jt = ((_n2 = Ge.elasticities) == null ? void 0 : _n2.get(st)) ?? 0, An = ((_o2 = Ge.areas) == null ? void 0 : _o2.get(st)) ?? 0, Tn = ((_p = Ge.momentsOfInertiaY) == null ? void 0 : _p.get(st)) ?? 0, nn = ((_q = Ge.momentsOfInertiaZ) == null ? void 0 : _q.get(st)) ?? 0, En = ((_r = Ge.torsionalConstants) == null ? void 0 : _r.get(st)) ?? 0, dn = ((_s2 = Ge.shearModuli) == null ? void 0 : _s2.get(st)) ?? Jt / 2.6, Pt = Jt * An * (qt / ot), Bt = (Le[3] - fe[3]) * Ht + (Le[4] - fe[4]) * Rt + (Le[5] - fe[5]) * tn, Yt = dn * En * (Bt / ot), Qt = Le[4] - fe[4], $n = Le[5] - fe[5], Nt = Jt * Tn * Qt / ot, pn = Jt * nn * $n / ot;
              ve += `
\u2500\u2500\u2500\u2500 frame \u2500\u2500\u2500\u2500`, ve += `
L = ${ct(ot, 3)} m`, ve += `
\u0394L = ${ct(qt * rt, 3)} ${Ce.dispUnit}`, ve += `
\u03B5 = ${ct(qt / ot, 6)}`, Math.abs(Pt) > 1e-6 && (ve += `
N \u2248 ${ct(Pt * Ze)} ${Ce.forceUnit}`), Math.abs(Yt) > 1e-6 && (ve += `
T \u2248 ${ct(Yt * Ze)} ${Ce.forceUnit}\xB7m`), Math.abs(Nt) > 1e-6 && (ve += `
My \u2248 ${ct(Nt * Ze)} ${Ce.forceUnit}\xB7m`), Math.abs(pn) > 1e-6 && (ve += `
Mz \u2248 ${ct(pn * Ze)} ${Ce.forceUnit}\xB7m`);
            }
          }
        }
      }
      return { type: Lt, idx: st, info: ve };
    }
    return null;
  }
  function X(q, P, U) {
    var _a, _b, _c;
    if (u.visible = false, y.visible = false, z.visible = false, K.visible = false, ue.visible = false, !q || !e.mesh) {
      $.style.display = "none", e.render();
      return;
    }
    const L = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (q.type === "node") {
      const ge = A(q.idx);
      if (ge) {
        const ke = e.derivedNodes.rawVal ?? [];
        let Ee = 1;
        if (ke.length >= 2) {
          let De = [1 / 0, 1 / 0, 1 / 0], qe = [-1 / 0, -1 / 0, -1 / 0];
          for (const Ce of ke) for (let rt = 0; rt < 3; rt++) Ce[rt] < De[rt] && (De[rt] = Ce[rt]), Ce[rt] > qe[rt] && (qe[rt] = Ce[rt]);
          Ee = Math.max(qe[0] - De[0], qe[1] - De[1], qe[2] - De[2], 0.1);
        }
        const Te = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, Ie = 0.021 * Ee * Te;
        u.position.copy(ge), u.scale.setScalar(Ie), u.visible = true;
      }
    } else if (q.type === "frame" && L) {
      const ge = L[q.idx], ke = A(ge[0]), Ee = A(ge[1]);
      if (ke && Ee) {
        const Te = ke.clone().add(Ee).multiplyScalar(0.5), Ie = Ee.clone().sub(ke), De = Ie.length(), rt = e.getActiveCamera().position.distanceTo(Te) * 35e-4;
        z.position.copy(Te);
        const Ze = new m(0, 1, 0), tt = Ze.clone().cross(Ie).normalize(), st = Ze.angleTo(Ie);
        z.quaternion.setFromAxisAngle(tt, st), z.scale.set(rt, De, rt), z.visible = true;
      }
    } else if (q.type === "shell" && L) {
      const ge = L[q.idx], ke = [], Ee = [];
      for (const Te of ge) {
        const Ie = A(Te);
        if (!Ie) return;
        ke.push(Ie.x, Ie.y, Ie.z);
      }
      ge.length === 4 ? Ee.push(0, 1, 2, 0, 2, 3) : ge.length === 3 && Ee.push(0, 1, 2), C.setAttribute("position", new _t(ke, 3)), C.setIndex(Ee), C.computeVertexNormals(), K.visible = true;
    } else if (q.type === "solid" && L) {
      const ge = L[q.idx], ke = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], Ee = [];
      for (const [Te, Ie] of ke) {
        const De = A(ge[Te]), qe = A(ge[Ie]);
        De && qe && Ee.push(De.x, De.y, De.z, qe.x, qe.y, qe.z);
      }
      re.setAttribute("position", new _t(Ee, 3)), ue.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      $.style.display = "none", e.render();
      return;
    }
    $.textContent = q.info, $.style.whiteSpace = "pre-line", $.style.display = "block";
    const oe = e.rendererElm.getBoundingClientRect(), _e = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? oe;
    $.style.left = `${P - _e.left}px`, $.style.top = `${U - _e.top}px`, e.render();
  }
  let G = "", V = 0, N = 0;
  const ne = window.__hekatanHoverDebug ?? false, Q = (q) => {
    V && cancelAnimationFrame(V), V = requestAnimationFrame(() => {
      var _a, _b, _c;
      const P = E(q.clientX, q.clientY);
      if (ne && N < 5) {
        const L = e.derivedNodes.rawVal, J = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${q.clientX}, ${q.clientY}) nodes=${(L == null ? void 0 : L.length) ?? 0} elems=${(J == null ? void 0 : J.length) ?? 0} hover=`, P), N++;
      }
      const U = P ? `${P.type}:${P.idx}` : "";
      if (U !== G) G = U, X(P, q.clientX, q.clientY);
      else if (P) {
        const L = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        $.style.left = `${q.clientX - L.left}px`, $.style.top = `${q.clientY - L.top}px`;
      }
    });
  };
  let H = null;
  const F = () => {
    G = "", u.visible = false, y.visible = false, z.visible = false, K.visible = false, ue.visible = false, $.style.display = "none", e.render();
  }, se = (q) => {
    const P = e.rendererElm.getBoundingClientRect(), U = q.clientX - P.left, L = q.clientY - P.top;
    (U < -2 || L < -2 || U > P.width + 2 || L > P.height + 2) && (H && clearTimeout(H), H = window.setTimeout(F, 200));
  }, te = () => {
    H && (clearTimeout(H), H = null);
  };
  e.rendererElm.addEventListener("pointermove", Q), e.rendererElm.addEventListener("pointerleave", se), e.rendererElm.addEventListener("pointerenter", te);
  function we() {
    var _a, _b, _c;
    const q = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    return q === "select" || q === "none" || !q;
  }
  let ae = null;
  e.rendererElm.addEventListener("pointerdown", (q) => {
    q.button === 0 && (ae = { x: q.clientX, y: q.clientY });
  }), e.rendererElm.addEventListener("pointerup", (q) => {
    if (q.button !== 0 || !ae) return;
    const P = q.clientX - ae.x, U = q.clientY - ae.y;
    if (ae = null, P * P + U * U > 9 || !we()) return;
    const L = E(q.clientX, q.clientY);
    L ? (Ke({ type: L.type, idx: L.idx }, q.shiftKey), be()) : We();
  }), window.addEventListener("keydown", (q) => {
    if (q.key !== "Escape" || !D.length) return;
    const P = document.activeElement, U = !!P && (P.id === "hk3-cmd-input" || P.id === "hk-dyn-input") && P.value === "";
    P && (P.tagName === "INPUT" || P.tagName === "TEXTAREA" || P.isContentEditable) && !U || We();
  }, { capture: true });
  function Pe() {
    for (const q of Z.children.slice()) {
      Z.remove(q);
      const P = q.geometry;
      P && P !== w && P !== me && P.dispose();
    }
  }
  function de(q, P) {
    var _a, _b, _c;
    const U = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
    if (q.type === "node") {
      const L = A(q.idx);
      if (!L) return;
      const J = ((_c = e.derivedDisplayScale) == null ? void 0 : _c.rawVal) ?? 1, oe = new He(w, k);
      oe.position.copy(L), oe.scale.setScalar(0.025 * P * J), oe.renderOrder = 101, Z.add(oe);
    } else if (q.type === "frame" && U) {
      const L = U[q.idx], J = A(L[0]), oe = A(L[1]);
      if (!J || !oe) return;
      const _e = J.clone().add(oe).multiplyScalar(0.5), ge = oe.clone().sub(J), ke = ge.length(), Ee = e.getActiveCamera().position.distanceTo(_e), Te = new He(me, j);
      Te.position.copy(_e);
      const Ie = new m(0, 1, 0);
      Te.quaternion.setFromAxisAngle(Ie.clone().cross(ge).normalize(), Ie.angleTo(ge)), Te.scale.set(Ee * 35e-4, ke, Ee * 35e-4), Te.renderOrder = 101, Z.add(Te);
    } else if (q.type === "shell" && U) {
      const L = U[q.idx], J = [], oe = [];
      for (const ke of L) {
        const Ee = A(ke);
        if (!Ee) return;
        J.push(Ee.x, Ee.y, Ee.z);
      }
      L.length === 4 ? oe.push(0, 1, 2, 0, 2, 3) : L.length === 3 && oe.push(0, 1, 2);
      const _e = new he();
      _e.setAttribute("position", new _t(J, 3)), _e.setIndex(oe), _e.computeVertexNormals();
      const ge = new He(_e, Se);
      ge.renderOrder = 101, Z.add(ge);
    } else if (q.type === "solid" && U) {
      const L = U[q.idx], J = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], oe = [];
      for (const [ke, Ee] of J) {
        const Te = A(L[ke]), Ie = A(L[Ee]);
        Te && Ie && oe.push(Te.x, Te.y, Te.z, Ie.x, Ie.y, Ie.z);
      }
      const _e = new he();
      _e.setAttribute("position", new _t(oe, 3));
      const ge = new Xt(_e, ze);
      ge.renderOrder = 101, Z.add(ge);
    }
  }
  function be() {
    if (Pe(), !D.length || !e.mesh) {
      e.render();
      return;
    }
    const q = e.derivedNodes.rawVal ?? [];
    let P = 1;
    if (q.length >= 2) {
      const U = [1 / 0, 1 / 0, 1 / 0], L = [-1 / 0, -1 / 0, -1 / 0];
      for (const J of q) for (let oe = 0; oe < 3; oe++) J[oe] < U[oe] && (U[oe] = J[oe]), J[oe] > L[oe] && (L[oe] = J[oe]);
      P = Math.max(L[0] - U[0], L[1] - U[1], L[2] - U[2], 0.1);
    }
    for (const U of D) de(U, P);
    e.render();
  }
  function Ke(q, P) {
    const U = D.findIndex((L) => L.type === q.type && L.idx === q.idx);
    U >= 0 ? D.splice(U, 1) : P || D.push(q), D.length && D[D.length - 1];
  }
  function We() {
    D.length = 0, be();
  }
  return I.derive(() => {
    e.derivedNodes.val, D.length && be();
  }), i;
}
function Us(e, i, w, h, u, _) {
  const x = u - w, y = _ - h, v = x * x + y * y;
  if (v < 1e-9) {
    const ce = e - w, ue = i - h;
    return Math.sqrt(ce * ce + ue * ue);
  }
  let z = ((e - w) * x + (i - h) * y) / v;
  z = Math.max(0, Math.min(1, z));
  const C = w + z * x, b = h + z * y, K = e - C, re = i - b;
  return Math.sqrt(K * K + re * re);
}
function Ks(e, i, w) {
  let h = false;
  for (let u = 0, _ = w.length - 1; u < w.length; _ = u++) {
    const x = w[u].x, y = w[u].y, v = w[_].x, z = w[_].y;
    y > i != z > i && e < (v - x) * (i - y) / (z - y + 1e-12) + x && (h = !h);
  }
  return h;
}
function Po(e, i = 8) {
  const w = document.createElement("div");
  w.id = "legend", w.style.setProperty("--legend-n", String(i)), setTimeout(() => {
    I.derive(() => {
      Vn.val, w.style.background = ds();
    });
  });
  const h = document.createElement("div");
  h.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", w.appendChild(h), setTimeout(() => {
    I.derive(() => {
      h.textContent = Qn.val ? `[${Qn.val}]` : "";
    });
  });
  const u = Array.from({ length: i + 1 }, (v, z) => z / i).reverse();
  let _, x;
  u.forEach((v, z) => {
    _ = document.createElement("div"), _.id = `marker-${z}`, _.className = "marker", _.style.marginTop = z == 0 ? "0px" : "calc(var(--legend-h) / var(--legend-n) - 1px)", x = document.createElement("p"), x.id = `marker-text-${z}`, _.append(x), w.append(_);
  });
  const y = [];
  return w.querySelectorAll("p").forEach((v) => y.push(v)), setTimeout(() => {
    I.derive(() => {
      u.forEach((v, z) => {
        const C = y[z];
        C && (C.innerText = Ws(e.val, v).toString());
      });
    });
  }), w;
}
function Ws(e, i) {
  const w = eo.val;
  if (w) return (w[0] + i * (w[1] - w[0])).toPrecision(3);
  const h = e.filter((x) => Number.isFinite(x));
  if (h.length === 0) return "0";
  let u = Math.min(...h);
  const _ = Math.max(...h);
  return u >= 0 && _ > 0 && (u = 0), (u + i * (_ - u)).toPrecision(3);
}
function sa({ mesh: e, settingsObj: i, drawingObj: w, objects3D: h, solids: u }) {
  ls.DEFAULT_UP = new m(0, 0, 1);
  const _ = document.createElement("div"), x = new ns(), y = new os(45, 1, 0.1, 2 * 1e6), v = new ss(-10, 10, 10, -10, -1e3, 2e6);
  let z = y;
  const C = new as({ antialias: true });
  C.localClippingEnabled = true;
  const b = new bo(y, C.domElement);
  b.enableDamping = true, b.dampingFactor = 0.1, b.screenSpacePanning = true, b.zoomSpeed = 0.8, b.panSpeed = 1.2, b.rotateSpeed = 0.9, b.keyPanSpeed = 12, b.listenToKeyEvents(window), b.touches = { ONE: _n.ROTATE, TWO: _n.DOLLY_PAN }, C.domElement.addEventListener("wheel", (P) => {
    if (!P.ctrlKey && Math.abs(P.deltaX) > Math.abs(P.deltaY) * 1.5) {
      P.preventDefault();
      const U = b.target, L = new m().subVectors(y.position, U), J = new m();
      J.crossVectors(y.up, L).normalize();
      const _e = L.length() * 1e-3 * b.panSpeed;
      U.addScaledVector(J, P.deltaX * _e), y.position.addScaledVector(J, P.deltaX * _e), b.update();
    }
  }, { passive: false });
  const K = new Wn(new m(-1, 0, 0), 0), re = new Wn(new m(0, -1, 0), 0), ce = new Wn(new m(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function ue() {
    const P = window.__hekatanClip, U = [];
    P.enableX && (K.normal.set(P.invertX ? 1 : -1, 0, 0), K.constant = P.invertX ? -P.posX : P.posX, U.push(K)), P.enableY && (re.normal.set(0, P.invertY ? 1 : -1, 0), re.constant = P.invertY ? -P.posY : P.posY, U.push(re)), P.enableZ && (ce.normal.set(0, 0, P.invertZ ? 1 : -1), ce.constant = P.invertZ ? -P.posZ : P.posZ, U.push(ce)), C.clippingPlanes = U, x.traverse((J) => {
      const oe = J;
      if (oe.material) {
        const _e = Array.isArray(oe.material) ? oe.material : [oe.material];
        for (const ge of _e) ge.clippingPlanes = U, ge.needsUpdate = true;
      }
    });
    const L = window.__hekatanPanes ?? [];
    for (const J of L) try {
      J && typeof J.refresh == "function" && J.refresh();
    } catch {
    }
    C.render(x, z);
  }
  ue(), window.__hekatanClipApply = ue;
  const k = fs(i), j = I.derive(() => Math.pow(10, k.displayScale.val / 10)), me = Gs(e, k), Se = () => {
    const P = [];
    return k.gridXY.rawVal && P.push("xy"), k.gridXZ.rawVal && P.push("xz"), k.gridYZ.rawVal && P.push("yz"), P;
  }, ze = () => {
    const P = k.gridStep.rawVal, U = Math.max(P, k.gridMajor.rawVal);
    return { planes: Se(), majorStep: U, minorStep: P };
  };
  let D = Hn(k.gridSize.rawVal, ze());
  D.visible = k.gridVisible.rawVal, window.__hekatanSnap2D = k.cursorSnap.rawVal;
  const Z = () => {
    const P = Math.max(0, Math.min(1, k.gridOpacity.rawVal));
    D.traverse((U) => {
      const L = U.material;
      if (!L || !("opacity" in L)) return;
      const J = U.name ?? "";
      let oe = 0.35;
      J.includes("border") ? oe = 1 : J.includes("major") && (oe = 0.75), L.opacity = P * oe;
    });
  };
  Z(), _.appendChild(us(k, e, u)), _.setAttribute("id", "viewer"), _.appendChild(C.domElement), C.setPixelRatio(window.devicePixelRatio);
  const $ = en();
  C.setClearColor($.background, 1);
  const A = k.gridSize.rawVal, E = A * 0.5 + A * 0.5 / Math.tan(45 * 0.5);
  y.position.set(0, 0, E), y.up.set(0, 1, 0), b.target.set(0, 0, 0), b.minDistance = 0.1, b.maxDistance = 1e4, _.__settings = k, b.zoomSpeed = 1, b._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, b.update();
  let X = So(k.gridSize.rawVal, k.flipAxes.rawVal);
  x.add(D, X), I.derive(() => {
    window.__hekatanGridPlaneXY = k.gridXY.val, window.__hekatanGridPlaneXZ = k.gridXZ.val, window.__hekatanGridPlaneYZ = k.gridYZ.val;
  });
  let G = true;
  I.derive(() => {
    const P = k.gridVisible.val;
    if (G) {
      G = false;
      return;
    }
    D.visible = P, te();
  });
  let V = true;
  I.derive(() => {
    if (k.gridOpacity.val, V) {
      V = false;
      return;
    }
    Z(), te();
  }), I.derive(() => {
    const P = k.cursorSnap.val;
    window.__hekatanSnap2D = P;
  });
  let N = true;
  I.derive(() => {
    var _a;
    const P = k.gridSize.val, U = k.flipAxes.val;
    if (k.gridXY.val, k.gridXZ.val, k.gridYZ.val, k.gridStep.val, k.gridMajor.val, N) {
      N = false;
      return;
    }
    x.remove(D), (_a = D.traverse) == null ? void 0 : _a.call(D, (oe) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = oe.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = oe.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), D = Hn(P, ze()), D.visible = k.gridVisible.rawVal, x.add(D), Z(), x.remove(X), X.traverse((oe) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = oe.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = oe.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), X = So(P, U), x.add(X);
    const L = P * 0.5 + P * 0.5 / Math.tan(45 * 0.5);
    y.position.distanceTo(b.target), Math.abs(y.position.x) < 0.1 && Math.abs(y.position.y) < 0.1 && y.position.z > 0 ? y.position.set(0, 0, L) : y.position.set(0.5 * P, -L, 0.5 * P), b.target.set(0, 0, 0), b.minDistance = Math.max(0.05, P * 0.01), b.maxDistance = Math.max(50, P * 50), b.update(), te();
  }), new ResizeObserver((P) => {
    var _a, _b;
    for (const U of P) {
      const L = (_a = U.target) == null ? void 0 : _a.clientWidth, J = (_b = U.target) == null ? void 0 : _b.clientHeight;
      if (L === 0 || J === 0) continue;
      const _e = (Q ? L / 2 : L) / J;
      y.aspect = _e, y.updateProjectionMatrix();
      const ge = v.top;
      if (v.left = -ge * _e, v.right = ge * _e, v.updateProjectionMatrix(), H && H.isPerspectiveCamera) H.aspect = _e, H.updateProjectionMatrix();
      else if (H && H.isOrthographicCamera) {
        const ke = H, Ee = ke.top;
        ke.left = -Ee * _e, ke.right = Ee * _e, ke.updateProjectionMatrix();
      }
      C.setSize(L, J), te();
    }
  }).observe(_), b.addEventListener("change", te), I.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, k.displayScale.val, k.nodes.val, k.elements.val, (_g = k.edges) == null ? void 0 : _g.val, k.elemColumns.val, k.elemBeams.val, k.nodesIndexes.val, k.elementsIndexes.val, k.orientations.val, k.sections.val, k.secColumns.val, k.secBeams.val, k.secFloor.val, k.supports.val, k.loads.val, k.deformedShape.val, k.nodeResults.val, k.frameResults.val, k.shellResults.val, (_h = k.solidResults) == null ? void 0 : _h.val, setTimeout(te);
  });
  let Q = false, H = null, F = null, se = false;
  function te() {
    const P = _.clientWidth || 1, U = _.clientHeight || 1;
    if (!Q || !H) {
      C.setScissorTest(false), C.setViewport(0, 0, P, U), C.render(x, z);
      return;
    }
    const L = P / 2;
    C.setScissorTest(true), C.setViewport(0, 0, L, U), C.setScissor(0, 0, L, U), C.render(x, z), C.setViewport(L, 0, L, U), C.setScissor(L, 0, L, U), C.render(x, H), C.setScissorTest(false);
  }
  function we(P) {
    z = P, b.object = P, b.update(), te();
  }
  function ae(P, U) {
    Q = P, U && (H = U);
    const L = _.clientWidth || 1, J = _.clientHeight || 1, _e = (P ? L / 2 : L) / J;
    y.isPerspectiveCamera && (y.aspect = _e, y.updateProjectionMatrix());
    const ge = v.top;
    if (v.left = -ge * _e, v.right = ge * _e, v.updateProjectionMatrix(), P && H) {
      if (F ? (F.object = H, F.update()) : (F = new bo(H, C.domElement), F.enableDamping = true, F.dampingFactor = 0.1, F.screenSpacePanning = true, F.zoomSpeed = 0.8, F.panSpeed = 1.2, F.rotateSpeed = 0.9, F.touches = { ONE: _n.ROTATE, TWO: _n.DOLLY_PAN }, F.target.copy(b.target), F.addEventListener("change", te), F.enabled = false), !se) {
        const ke = (Ee) => {
          if (!Q || !F) return;
          const Te = C.domElement.getBoundingClientRect(), Ie = Ee.clientX - Te.left, De = Te.width / 2, qe = Ie >= De;
          b.enabled = !qe, F.enabled = qe;
        };
        C.domElement.addEventListener("pointerdown", ke, true), C.domElement.addEventListener("wheel", ke, { capture: true, passive: true }), se = true;
      }
    } else P || (b.enabled = true, F && (F.enabled = false));
    _.__splitMode = P, window.__hekatanSplitMode = P, window.__hekatanSplitCamera = P ? H : null, te();
  }
  if (e) {
    x.add(hs(k, me, j), rs(e, k, me), ys(k, me, j), xs(e, k, me, j), ms(e, k, me, j), ws(e, k, me, j), Ms(e, k, me, j), _s(e, k, me, j), Ps(e, k, me, j), Ss(e, k, me, j));
    const P = Zs({ scene: x, rendererElm: C.domElement, getActiveCamera: () => z, derivedNodes: me, derivedDisplayScale: j, mesh: e, settings: k, render: te });
    x.add(P);
    const U = js(e, k), L = Vs(e, k, me, U), J = Po(U);
    x.add(L), _.appendChild(J);
    const oe = Is(e, k, me);
    x.add(oe);
    const _e = oe.__colorMapValues, ge = Po(_e);
    ge.id = "frame-legend", _.appendChild(ge), I.derive(() => {
      var _a;
      const ke = k.shellResults.val != "none", Ee = (((_a = k.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", Te = ke || Ee, Ie = k.frameResults.val.startsWith("contour:");
      J.hidden = !Te, L.visible = Te, ge.hidden = !Ie;
    });
  }
  if (u) {
    const P = new is(16777215, 0.5);
    x.add(P);
    const U = new Mo(16777215, 0.5);
    U.position.set(30, 25, -10), U.shadow.mapSize.width = 1024, U.shadow.mapSize.height = 1024, x.add(U);
    const L = 10;
    U.shadow.camera.left = -L, U.shadow.camera.right = L, U.shadow.camera.top = L, U.shadow.camera.bottom = -L, U.shadow.camera.far = 1e3;
    const J = new Mo(16777215, 0.5);
    J.color.setHSL(11, 43, 96), J.position.set(-10, 0, 30), x.add(J), I.derive(() => {
      (u == null ? void 0 : u.val.length) && (x.remove(...u.oldVal), x.add(...u.rawVal), te());
    }), I.derive(() => {
      u.rawVal.forEach((oe) => oe.visible = k.solids.val), te();
    });
  }
  if (h) {
    const P = [], U = (J) => {
      var _a;
      return ((_a = J == null ? void 0 : J.userData) == null ? void 0 : _a.isCota) ? k.showCotas.val : k.custom3D.val;
    }, L = () => {
      for (const J of P) J.visible = U(J);
      te();
    };
    I.derive(() => {
      const J = h.val;
      P.length && (x.remove(...P), P.length = 0), J.length && (x.add(...J), P.push(...J), L()), te();
    }), I.derive(() => {
      k.custom3D.val, L();
    }), I.derive(() => {
      k.showCotas.val, L();
    });
  }
  w && Cs({ drawingObj: w, gridObj: D, scene: x, getActiveCamera: () => z, controls: b, gridSize: A, derivedDisplayScale: j, rendererElm: C.domElement, viewerRender: te }), Fo((P, U) => {
    var _a;
    C.setClearColor(U.background, 1), x.remove(D), (_a = D.traverse) == null ? void 0 : _a.call(D, (L) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = L.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = L.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), D = Hn(k.gridSize.rawVal, { planes: Se() }), x.add(D), _.style.setProperty("--awatif-legend-color", U.legendMarker), te();
  });
  const Pe = { scene: x, perspCamera: y, orthoCamera: v, get camera() {
    return z;
  }, controls: b, renderer: C, rendererElm: C.domElement, render: te, setActiveCamera: we, setSplitMode: ae, get splitMode() {
    return Q;
  }, get splitCamera() {
    return H;
  }, settings: k };
  _.__ctx = Pe;
  const de = document.createElement("div");
  de.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const be = (P, U, L) => {
    const J = document.createElement("button");
    return J.textContent = P, J.title = U, J.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), J.onmouseenter = () => {
      J.style.background = "rgba(70,70,70,0.9)";
    }, J.onmouseleave = () => {
      J.style.background = "rgba(40,40,40,0.85)";
    }, J.onclick = (oe) => {
      oe.preventDefault(), L();
    }, J;
  }, Ke = (P, U) => {
    const L = b.target, J = new m().subVectors(z.position, L), oe = J.length(), _e = new m(), ge = new m();
    _e.crossVectors(z.up, J).normalize(), ge.copy(z.up).normalize();
    const ke = oe * 0.05;
    L.addScaledVector(_e, -P * ke), L.addScaledVector(ge, U * ke), z.position.addScaledVector(_e, -P * ke), z.position.addScaledVector(ge, U * ke), b.update(), te();
  }, We = (P) => {
    const U = new m().subVectors(z.position, b.target);
    U.multiplyScalar(P), z.position.copy(b.target).add(U), b.update(), te();
  }, q = () => {
    const P = document.createElement("div");
    return P.style.cssText = "width:32px;height:32px;", P;
  };
  return de.append(q()), de.append(be("\u2191", "Pan arriba", () => Ke(0, 1))), de.append(be("\u2295", "Zoom in", () => We(0.85))), de.append(be("\u2190", "Pan izquierda", () => Ke(-1, 0))), de.append(be("\u2302", "Reset vista", () => {
    b.reset(), te();
  })), de.append(be("\u2192", "Pan derecha", () => Ke(1, 0))), de.append(be("\u2296", "Zoom out", () => We(1.18))), de.append(be("\u2193", "Pan abajo", () => Ke(0, -1))), de.append(q()), getComputedStyle(_).position === "static" && (_.style.position = "relative"), _.appendChild(de), _;
}
function Gs(e, i) {
  return I.derive(() => {
    var _a, _b, _c, _d;
    if (!i.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const w = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], h = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!h || w.length === 0) return w;
    const u = i.deformScale.val, _ = i.deformScale.val * i.deformScaleZ.val, x = Number.isFinite(u) ? u : 1, y = Number.isFinite(_) ? _ : 1;
    return w.map((v, z) => {
      var _a2;
      const C = ((_a2 = h.get(z)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], b = Number.isFinite(C[0]) ? C[0] : 0, K = Number.isFinite(C[1]) ? C[1] : 0, re = Number.isFinite(C[2]) ? C[2] : 0;
      return [v[0] + b * x, v[1] + K * x, v[2] + re * y];
    });
  });
}
const eo = I.state(null), Qn = I.state(""), Hs = I.state("kN"), qs = I.state("mm"), Js = I.state("kN/m\xB2"), Qs = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, Co = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Os = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function js(e, i) {
  const w = I.state([]);
  let h;
  return ((u) => {
    u.bendingXX = "bendingXX", u.bendingYY = "bendingYY", u.bendingXY = "bendingXY", u.membraneXX = "membraneXX", u.membraneYY = "membraneYY", u.membraneXY = "membraneXY", u.tranverseShearX = "tranverseShearX", u.tranverseShearY = "tranverseShearY", u.vonMises = "vonMises", u.pressure = "pressure", u.displacementX = "displacementX", u.displacementY = "displacementY", u.displacementZ = "displacementZ";
  })(h || (h = {})), I.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const u = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), ce = (Pe, de) => {
      Pe == null ? void 0 : Pe.forEach((be, Ke) => {
        const We = e.elements.val[Ke];
        if (We) for (let q = 0; q < We.length; q++) de.set(We[q], [be[q] ?? be[0]]);
      });
    };
    ce((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, u), ce((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, _), ce((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, x), ce((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, y), ce((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, v), ce((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, z), ce((_n2 = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n2.tranverseShearX, C), ce((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, b), ce((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, K), ce((_t2 = (_s2 = e.analyzeOutputs) == null ? void 0 : _s2.val) == null ? void 0 : _t2.pressure, re);
    const ue = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, k = (_w = i.solidResults) == null ? void 0 : _w.val, me = k && k !== "none" ? k : i.shellResults.val, Se = ue == null ? void 0 : ue[me], ze = { bendingXX: [u, 0], bendingYY: [_, 0], bendingXY: [x, 0], membraneXX: [y, 0], membraneYY: [v, 0], membraneXY: [z, 0], tranverseShearX: [C, 0], tranverseShearY: [b, 0], vonMises: [K, 0], pressure: [re, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, D = i.shellResults.val, Z = Hs.val, $ = qs.val, A = D === "displacementX" || D === "displacementY" || D === "displacementZ", E = D === "bendingXX" || D === "bendingYY" || D === "bendingXY", X = D === "membraneXX" || D === "membraneYY" || D === "membraneXY", G = D === "vonMises" || D === "pressure", V = D === "tranverseShearX" || D === "tranverseShearY", N = (_D = i.solidResults) == null ? void 0 : _D.val, ne = N === "vonMises" || N === "sigmaXX" || N === "sigmaYY" || N === "sigmaZZ" || N === "tauXY" || N === "tauYZ" || N === "tauXZ", Q = N === "ux" || N === "uy" || N === "uz", H = Js.val, F = ne ? Os[H] : Q || A ? Co[$] : E || X || G || V ? 1 / Qs[Z] : 1, se = ne ? H : Q || A ? $ : E ? `${Z}\xB7m/m` : X ? `${Z}/m\xB2` : G ? `${Z}/m\xB2` : V ? `${Z}/m` : "";
    Qn.val = se, eo.val = Array.isArray(Se) && Se.length === 2 ? [Se[0] * F, Se[1] * F] : null;
    const we = N && N !== "none" ? [K, 0] : ze[D], ae = [];
    e.nodes.val.forEach((Pe, de) => {
      const be = we;
      if (!be || !be[0] || typeof be[0].has != "function") return;
      if (!be[0].has(de)) {
        ae.push(Number.NaN);
        return;
      }
      const Ke = be[0].get(de), We = Ke ? Ke[be[1]] ?? 0 : 0;
      ae.push(We * F);
    }), w.val = ae;
  }), w;
}
export {
  ps as a,
  Po as b,
  Hs as c,
  qs as d,
  Js as e,
  sa as g
};
