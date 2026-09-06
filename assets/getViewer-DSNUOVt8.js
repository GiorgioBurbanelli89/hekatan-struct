import { N as It, a6 as Sn, q as jo, v as D, a7 as es, D as vt, M as Ke, B as ye, F as ft, a8 as ts, x as at, a9 as ns, aa as os, h as go, ab as vo, r as en, ac as Cn, ad as Fn, a4 as $o, _ as We, a as it, L as Xt, w as Io, b as ss, ae as as, f as je, V as M, $ as jt, af as Hn, H as oo, d as St, c as qn, Y as Lo, Z as An, G as is, z as gn, A as ls, ag as Vn, t as rs, o as cs, I as Wt, a2 as yn, E as Mo, S as rn, m as Jn, ah as xn, g as bo, i as _o, j as So, C as ko, K as ds, U as ps, W as us, X as fs, T as kn, P as Qn, O as hs } from "./theme-Co6w-pfC.js";
import { T as gt, O as Po } from "./Text-2W5davkr.js";
import { P as Bo } from "./tweakpane-BXg6ZhiP.js";
import { e as ms } from "./styles-BCXSueNT.js";
class Ro {
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
    this.map = On[a] || On.rainbow, this.n = u;
    const m = 1 / this.n, c = new It(), w = new It();
    this.lut.length = 0, this.lut.push(new It(this.map[0][1]));
    for (let p = 1; p < u; p++) {
      const g = p * m;
      for (let x = 0; x < this.map.length - 1; x++) if (g > this.map[x][0] && g <= this.map[x + 1][0]) {
        const b = this.map[x][0], z = this.map[x + 1][0];
        c.setHex(this.map[x][1], Sn), w.setHex(this.map[x + 1][1], Sn);
        const v = new It().lerpColors(c, w, (g - b) / (z - b));
        this.lut.push(v);
      }
    }
    return this.lut.push(new It(this.map[this.map.length - 1][1])), this;
  }
  copy(a) {
    return this.lut = a.lut, this.map = a.map, this.n = a.n, this.minV = a.minV, this.maxV = a.maxV, this;
  }
  getColor(a) {
    a = jo.clamp(a, this.minV, this.maxV), a = (a - this.minV) / (this.maxV - this.minV);
    const u = Math.round(a * this.n);
    return this.lut[u];
  }
  addColorMap(a, u) {
    return On[a] = u, this;
  }
  createCanvas() {
    const a = document.createElement("canvas");
    return a.width = 1, a.height = this.n, this.updateCanvas(a), a;
  }
  updateCanvas(a) {
    const u = a.getContext("2d", { alpha: false }), m = u.getImageData(0, 0, 1, this.n), c = m.data;
    let w = 0;
    const p = 1 / this.n, g = new It(), x = new It(), b = new It();
    for (let z = 1; z >= 0; z -= p) for (let v = this.map.length - 1; v >= 0; v--) if (z < this.map[v][0] && z >= this.map[v - 1][0]) {
      const N = this.map[v - 1][0], ue = this.map[v][0];
      g.setHex(this.map[v - 1][1], Sn), x.setHex(this.map[v][1], Sn), b.lerpColors(g, x, (z - N) / (ue - N)), c[w * 4] = Math.round(b.r * 255), c[w * 4 + 1] = Math.round(b.g * 255), c[w * 4 + 2] = Math.round(b.b * 255), c[w * 4 + 3] = 255, w += 1;
    }
    return u.putImageData(m, 0, 0), a;
  }
}
const On = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, Xo = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]], ws = { safe: [[0, 224, 13, 107], [0.13, 221, 20, 50], [0.27, 252, 99, 39], [0.4, 254, 161, 47], [0.52, 238, 234, 25], [0.64, 5, 193, 69], [0.78, 7, 178, 244], [0.9, 4, 132, 213], [1, 90, 175, 230]], csi: Xo, jet_r: [[0, 200, 0, 0], [0.15, 255, 80, 0], [0.32, 255, 200, 0], [0.48, 180, 255, 0], [0.6, 0, 230, 90], [0.74, 0, 220, 230], [0.88, 0, 110, 255], [1, 0, 0, 180]], jet: [[0, 0, 0, 180], [0.12, 0, 110, 255], [0.26, 0, 220, 230], [0.4, 0, 230, 90], [0.52, 180, 255, 0], [0.68, 255, 200, 0], [0.85, 255, 80, 0], [1, 200, 0, 0]], viridis: [[0, 68, 1, 84], [0.25, 59, 82, 139], [0.5, 33, 145, 140], [0.75, 94, 201, 98], [1, 253, 231, 37]] }, En = D.state("safe"), Do = D.state("auto");
function Yo(e) {
  e = Math.max(0, Math.min(1, e));
  const a = ws[En.val] ?? Xo;
  for (let m = 0; m < a.length - 1; m++) {
    const [c, w, p, g] = a[m], [x, b, z, v] = a[m + 1];
    if (e <= x) {
      const N = (e - c) / (x - c);
      return [w + (b - w) * N, p + (z - p) * N, g + (v - g) * N];
    }
  }
  const u = a[a.length - 1];
  return [u[1], u[2], u[3]];
}
function zo() {
  const a = new Uint8Array(1024);
  for (let m = 0; m < 256; m++) {
    const c = m / 255, [w, p, g] = Yo(c);
    a[m * 4 + 0] = w, a[m * 4 + 1] = p, a[m * 4 + 2] = g, a[m * 4 + 3] = 255;
  }
  const u = new ns(a, 256, 1, os);
  return u.minFilter = go, u.magFilter = go, u.wrapS = vo, u.wrapT = vo, u.needsUpdate = true, u;
}
function ys() {
  const a = [];
  for (let u = 0; u <= 12; u++) {
    const m = 1 - u / 12, [c, w, p] = Yo(m);
    a.push(`rgb(${c | 0},${w | 0},${p | 0}) ${(u / 12 * 100).toFixed(0)}%`);
  }
  return `linear-gradient(${a.join(",")})`;
}
function so(e) {
  if (!e.length) return [0, 1];
  const a = [...e].sort((w, p) => w - p), u = (w) => a[Math.min(a.length - 1, Math.max(0, Math.round(w * (a.length - 1))))];
  let m = a.length >= 20 ? u(0.01) : a[0], c = a.length >= 20 ? u(0.99) : a[a.length - 1];
  return m >= 0 && c > 0 && (m = 0), c <= 0 && m < 0 && (c = 0), [m, c];
}
function xs(e, a, u) {
  new Ro();
  const m = zo(), c = new es({ uniforms: { cmap: { value: m }, ambient: { value: 0.95 } }, vertexShader: `
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
    En.val;
    const p = c.uniforms.cmap.value;
    c.uniforms.cmap.value = zo(), (_a = p == null ? void 0 : p.dispose) == null ? void 0 : _a.call(p);
  });
  const w = new Ke(new ye(), c);
  return w.renderOrder = -1, w.frustumCulled = false, w.userData.isShellArea = true, w.name = "__hekatan_shell_colormap", D.derive(() => {
    w.geometry.setAttribute("position", new ft(e.val.flat(), 3));
    const p = [];
    for (const _ of a.val) _.length === 3 ? p.push(_[0], _[1], _[2]) : _.length === 4 && (p.push(_[0], _[1], _[2]), p.push(_[0], _[2], _[3]));
    w.geometry.setIndex(new ts(p, 1));
    const g = u.val.filter((_) => Number.isFinite(_));
    let x, b;
    const z = Mn.val;
    if (z ? (b = z[0], x = z[1]) : [b, x] = so(g), x === b) {
      const _ = Math.max(Math.abs(x) * 1e-6, 1e-9);
      x += _, b -= _;
    }
    const v = z && z[0] > z[1], N = Math.min(b, x), ue = Math.max(b, x), ne = ue - N, Q = new Float32Array(u.val.length);
    for (let _ = 0; _ < u.val.length; _++) {
      const O = u.val[_];
      if (!Number.isFinite(O)) {
        Q[_] = -1;
        continue;
      }
      const be = ((v ? ue + N - O : O) - N) / ne;
      Q[_] = Math.max(0, Math.min(1, be));
    }
    w.geometry.setAttribute("scalar", new at(Q, 1));
  }), w;
}
function gs(e, a, u) {
  const m = document.createElement("div"), c = new Bo({ title: "Settings", expanded: true, container: m });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(c), m.setAttribute("id", "settings");
  const w = "hk_settingsPos";
  let p = null;
  try {
    const v = localStorage.getItem(w);
    v && (p = JSON.parse(v));
  } catch {
  }
  m.style.cssText = ["position:fixed", p ? `left:${p.left}px` : "left:8px", p ? `top:${p.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const g = () => {
    const v = m.querySelector(".tp-rotv_b");
    if (!v) {
      setTimeout(g, 200);
      return;
    }
    v.style.cursor = "move", v.style.userSelect = "none";
    let N = false, ue = 0, ne = 0, Q = 0, _ = 0;
    v.addEventListener("mousedown", (O) => {
      N = true, ue = O.clientX, ne = O.clientY;
      const oe = m.getBoundingClientRect();
      Q = oe.left, _ = oe.top, m.style.left = `${Q}px`, m.style.top = `${_}px`;
    }), window.addEventListener("mousemove", (O) => {
      if (!N) return;
      const oe = O.clientX - ue, be = O.clientY - ne, me = Math.max(0, Math.min(window.innerWidth - 40, Q + oe)), B = Math.max(0, Math.min(window.innerHeight - 40, _ + be));
      m.style.left = `${me}px`, m.style.top = `${B}px`;
    }), window.addEventListener("mouseup", () => {
      if (N) {
        N = false;
        try {
          localStorage.setItem(w, JSON.stringify({ left: parseFloat(m.style.left), top: parseFloat(m.style.top) }));
        } catch {
        }
      }
    });
  };
  if (g(), a == null ? void 0 : a.nodes) {
    c.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 0.5 });
    const v = c.addFolder({ title: "\u{1F4D0} Grid", expanded: false });
    v.addBinding(e.gridSize, "val", { label: "Dimensi\xF3n (m)", min: 1, max: 100, step: 1 }), v.addBinding(e.gridStep, "val", { label: "Separaci\xF3n grid (m)", min: 0.05, max: 5, step: 0.05 }), v.addBinding(e.gridMajor, "val", { label: "Separaci\xF3n mayores (m)", min: 0.1, max: 50, step: 0.1 }), v.addBinding(e.cursorSnap, "val", { label: "Paso cursor (m)", min: 0.05, max: 5, step: 0.05 }), v.addBinding(e.gridVisible, "val", { label: "Mostrar" }), v.addBinding(e.gridOpacity, "val", { label: "Opacidad", min: 0, max: 1, step: 0.05 }), v.addBinding(e.gridXY, "val", { label: "Plano XY (planta)" }), v.addBinding(e.gridXZ, "val", { label: "Plano XZ (frontal)" }), v.addBinding(e.gridYZ, "val", { label: "Plano YZ (lateral)" });
    const N = c.addFolder({ title: "\u{1F441} Ver", expanded: false });
    N.addBinding(e.nodes, "val", { label: "Nodes" }), N.addBinding(e.elements, "val", { label: "Elements" }), N.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), N.addBinding(e.faces, "val", { label: "  Caras (fill)" }), N.addBinding(e.elemFrames, "val", { label: "  Frames (todos)" }), N.addBinding(e.elemColumns, "val", { label: "    Columnas" }), N.addBinding(e.elemBeams, "val", { label: "    Vigas" }), N.addBinding(e.elemZapatas, "val", { label: "  Zapatas (shells z\u22640)" }), N.addBinding(e.elemLosas, "val", { label: "  Losas (shells z>0)" }), N.addBinding(e.colorByType, "val", { label: "  \u{1F3A8} Color por tipo" }), N.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), N.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), N.addBinding(e.orientations, "val", { label: "Orientations" }), N.addBinding(e.sections, "val", { label: "Sections" }), N.addBinding(e.extruded, "val", { label: "Extruido (3D)" }), N.addBinding(e.sectionLabels, "val", { label: "  Sec. Labels (30x50)" }), N.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), N.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), N.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } });
  }
  if ((a == null ? void 0 : a.nodeInputs) || (a == null ? void 0 : a.elementInputs)) {
    const v = c.addFolder({ title: "\u{1F4CC} Analysis Inputs", expanded: false });
    v.addBinding(e.supports, "val", { label: "Supports" }), v.addBinding(e.loads, "val", { label: "Loads" }), v.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), v.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((a == null ? void 0 : a.deformOutputs) || (a == null ? void 0 : a.analyzeOutputs)) {
    const v = c.addFolder({ title: "\u{1F52C} Analyze", expanded: true });
    window.__hekatanOutputsFolder = v, v.addBinding(e.nodeResults, "val", { options: { none: "none", "U (deformations)": "deformations", "R (reactions)": "reactions" }, label: "Node results" }), v.addBinding(e.frameResults, "val", { options: { none: "none", "Axial Force": "normals", Torsion: "torsions", "Shear 2-2": "shearsY", "Shear 3-3": "shearsZ", "Moment 2-2": "bendingsY", "Moment 3-3": "bendingsZ", "Axial Force (diagram)": "contour:normals", "Shear 2-2 (diagram)": "contour:shearsY", "Shear 3-3 (diagram)": "contour:shearsZ", "Torsion (diagram)": "contour:torsions", "Moment 2-2 (diagram)": "contour:bendingsY", "Moment 3-3 (diagram)": "contour:bendingsZ" }, label: "Frame results" }), v.addBinding(e.shellResults, "val", { options: { none: "none", F11: "membraneXX", F22: "membraneYY", F12: "membraneXY", FMax: "membranePrincipalMax", FMin: "membranePrincipalMin", FVM: "vonMises", V13: "tranverseShearX", V23: "tranverseShearY", VMax: "transverseShearMax", M11: "bendingXX", M22: "bendingYY", M12: "bendingXY", MMax: "bendingPrincipalMax", MMin: "bendingPrincipalMin", "Pressure (suelo)": "pressure", Ux: "displacementX", Uy: "displacementY", Uz: "displacementZ" }, label: "Shell results" }), v.addBinding(En, "val", { options: { "SAFE (cimentaci\xF3n)": "safe", "ETABS / CSI (magenta\u2192azul)": "csi", "Jet_r (rojo\u2192azul)": "jet_r", "Jet (azul\u2192rojo)": "jet", Viridis: "viridis" }, label: "\u{1F3A8} Paleta colores" }), v.addBinding(Do, "val", { options: { "todas las c\xE1scaras": "auto", "solo muros": "muros", "solo losas": "losas" }, label: "\u{1F4D0} Rango colormap" }), v.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), v.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), v.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), v.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  u && c.addBinding(e.solids, "val", { label: "Solids" });
  const x = c.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), b = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), z = () => {
    const v = window.__hekatanClipApply;
    typeof v == "function" && v();
  };
  return x.addBinding(b, "enableX", { label: "Cortar X" }).on("change", z), x.addBinding(b, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", z), x.addBinding(b, "invertX", { label: "  invertir X" }).on("change", z), x.addBinding(b, "enableY", { label: "Cortar Y" }).on("change", z), x.addBinding(b, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", z), x.addBinding(b, "invertY", { label: "  invertir Y" }).on("change", z), x.addBinding(b, "enableZ", { label: "Cortar Z" }).on("change", z), x.addBinding(b, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", z), x.addBinding(b, "invertZ", { label: "  invertir Z" }).on("change", z), m;
}
function vs(e) {
  return { gridSize: D.state((e == null ? void 0 : e.gridSize) ?? 30), gridVisible: D.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: D.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: D.state((e == null ? void 0 : e.gridStep) ?? 1), gridMajor: D.state((e == null ? void 0 : e.gridMajor) ?? 5), cursorSnap: D.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: D.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: D.state((e == null ? void 0 : e.gridXZ) ?? false), gridYZ: D.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: D.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: D.state((e == null ? void 0 : e.nodes) ?? true), elements: D.state((e == null ? void 0 : e.elements) ?? true), edges: D.state((e == null ? void 0 : e.edges) ?? true), faces: D.state((e == null ? void 0 : e.faces) ?? true), elemColumns: D.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: D.state((e == null ? void 0 : e.elemBeams) ?? true), elemFrames: D.state((e == null ? void 0 : e.elemFrames) ?? true), elemZapatas: D.state((e == null ? void 0 : e.elemZapatas) ?? true), elemLosas: D.state((e == null ? void 0 : e.elemLosas) ?? true), colorByType: D.state((e == null ? void 0 : e.colorByType) ?? false), nodesIndexes: D.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: D.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: D.state((e == null ? void 0 : e.orientations) ?? false), sections: D.state((e == null ? void 0 : e.sections) ?? true), extruded: D.state((e == null ? void 0 : e.extruded) ?? false), sectionLabels: D.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: D.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: D.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: D.state((e == null ? void 0 : e.secFloor) ?? -1), supports: D.state((e == null ? void 0 : e.supports) ?? true), loads: D.state((e == null ? void 0 : e.loads) ?? false), deformedShape: D.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: D.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: D.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: D.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: D.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: D.state((e == null ? void 0 : e.flipAxes) ?? false), solids: D.state((e == null ? void 0 : e.solids) ?? true), custom3D: D.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: D.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: D.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: D.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function Ms(e, a, u) {
  const m = en(), c = new Cn(new ye(), new Fn({ color: m.nodePoint }));
  return $o((w, p) => {
    c.material.color.setHex(p.nodePoint);
  }), c.frustumCulled = false, D.derive(() => {
    e.nodes.val && c.geometry.setAttribute("position", new ft(a.val.flat(), 3));
  }), D.derive(() => {
    if (u.val, a.val, !e.nodes.rawVal) return;
    const w = a.rawVal ?? [];
    let p = e.gridSize.val * 0.5;
    if (w.length >= 2) {
      const x = [1 / 0, 1 / 0, 1 / 0], b = [-1 / 0, -1 / 0, -1 / 0];
      for (const z of w) for (let v = 0; v < 3; v++) x[v] = Math.min(x[v], z[v]), b[v] = Math.max(b[v], z[v]);
      p = Math.max(b[0] - x[0], b[1] - x[1], b[2] - x[2], 0.1);
    }
    const g = 0.03 * p;
    c.material.size = g * u.rawVal;
  }), D.derive(() => {
    c.visible = e.nodes.val;
  }), c;
}
function jn(e, a) {
  const u = en(), m = new We();
  m.name = "hekatan-grid";
  const c = (a == null ? void 0 : a.planes) ?? ["xy"];
  let w = (a == null ? void 0 : a.majorStep) ?? 1, p = (a == null ? void 0 : a.minorStep) ?? 0.1;
  for (w <= 0 && (w = 1), p <= 0 && (p = 0.1); e / p > 500; ) p *= 2;
  for (; e / w > 100; ) w *= 2;
  const g = e / 2;
  w = Math.max(p, Math.round(w / p) * p);
  const b = new It(u.grid), z = new It(u.grid).multiplyScalar(0.45), v = (Q, _, O, oe) => {
    const be = [], me = Q === "xy" ? (F, $) => [F, $, 0] : Q === "xz" ? (F, $) => [F, 0, $] : (F, $) => [0, F, $], B = Math.floor(g / _);
    for (let F = -B; F <= B; F++) {
      const $ = F * _, T = me($, -g), A = me($, g);
      be.push(...T, ...A);
    }
    for (let F = -B; F <= B; F++) {
      const $ = F * _, T = me(-g, $), A = me(g, $);
      be.push(...T, ...A);
    }
    const I = new ye();
    I.setAttribute("position", new ft(be, 3));
    const X = new it({ color: O, transparent: true, opacity: oe, depthWrite: false }), V = new Xt(I, X);
    return V.name = `grid-${Q}-${_ === p ? "minor" : "major"}`, V;
  }, N = (Q, _, O) => {
    const oe = Q === "xy" ? (V, F) => [V, F, 0] : Q === "xz" ? (V, F) => [V, 0, F] : (V, F) => [0, V, F], be = [[-g, -g], [g, -g], [g, g], [-g, g]], me = [];
    for (const [V, F] of be) me.push(...oe(V, F));
    const B = new ye();
    B.setAttribute("position", new ft(me, 3));
    const I = new it({ color: _, transparent: true, opacity: O, depthWrite: false }), X = new Io(B, I);
    return X.name = `grid-${Q}-border`, X.renderOrder = 1, X;
  }, ue = (Q, _, O) => {
    const oe = Q === "xy" ? (I, X) => [I, X, 0] : Q === "xz" ? (I, X) => [I, 0, X] : (I, X) => [0, I, X], be = _ === "u" ? [...oe(-g, 0), ...oe(g, 0)] : [...oe(0, -g), ...oe(0, g)], me = new ye();
    me.setAttribute("position", new ft(be, 3));
    const B = new Xt(me, new it({ color: O, transparent: true, opacity: 0.45, depthWrite: false }));
    return B.name = `grid-${Q}-eje-${_}`, B.renderOrder = 1, B;
  }, ne = { xy: [14042459, 5155178], xz: [14042459, 4882390], yz: [5155178, 4882390] };
  for (const Q of c) {
    m.add(v(Q, p, z, 0.12)), m.add(v(Q, w, b, 0.4));
    const [_, O] = ne[Q];
    m.add(ue(Q, "u", _)), m.add(ue(Q, "v", O)), m.add(N(Q, b, 0.55));
  }
  return m.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: w, minorStep: p, gridSize: e, planes: [...c] }, m;
}
function bs(e, a, u, m) {
  const c = new We(), w = new ss(0.5, 0.5, 0.5), p = new as(0.45, 0.7, 4);
  p.rotateX(Math.PI / 2), p.translate(0, 0, -0.35);
  const g = new je({ color: 10166822 }), x = new je({ color: 2792847 }), b = new je({ color: 3835647 }), z = () => {
    const ue = u.rawVal ?? [];
    if (ue.length < 2) return a.gridSize.val * 0.5;
    let ne = [1 / 0, 1 / 0, 1 / 0], Q = [-1 / 0, -1 / 0, -1 / 0];
    for (const _ of ue) for (let O = 0; O < 3; O++) _[O] < ne[O] && (ne[O] = _[O]), _[O] > Q[O] && (Q[O] = _[O]);
    return Math.max(Q[0] - ne[0], Q[1] - ne[1], Q[2] - ne[2], 0.1);
  }, v = () => 0.08 * z(), N = () => m.rawVal;
  return D.derive(() => {
    var _a, _b;
    if (a.deformedShape.val, !a.supports.val) return;
    c.clear();
    const ue = v();
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((ne, Q) => {
      const _ = u.val[Q];
      if (!_) return;
      const O = ne ?? [], oe = (O[0] ? 1 : 0) + (O[1] ? 1 : 0) + (O[2] ? 1 : 0), be = (O[3] ? 1 : 0) + (O[4] ? 1 : 0) + (O[5] ? 1 : 0);
      let me;
      oe >= 3 && be >= 3 ? me = new Ke(w, g) : oe >= 3 && be === 0 ? me = new Ke(p, x) : me = new Ke(p, b), me.position.set(_[0], _[1], _[2]);
      const B = ue * N();
      me.scale.set(B, B, B), c.add(me);
    });
  }), D.derive(() => {
    if (m.val, !a.supports.rawVal) return;
    const ne = v() * N();
    c.children.forEach((Q) => Q.scale.set(ne, ne, ne));
  }), D.derive(() => {
    c.visible = a.supports.val;
  }), c;
}
function _s(e, a, u, m) {
  const c = new We();
  c.name = "loadsGroup";
  function w(p) {
    if (p.length < 2) return 0.12 * a.gridSize.rawVal;
    const g = [1 / 0, 1 / 0, 1 / 0], x = [-1 / 0, -1 / 0, -1 / 0];
    for (const z of p) for (let v = 0; v < 3; v++) g[v] = Math.min(g[v], z[v]), x[v] = Math.max(x[v], z[v]);
    return 0.08 * Math.max(x[0] - g[0], x[1] - g[1], x[2] - g[2], 0.1);
  }
  return D.derive(() => {
    var _a, _b, _c;
    if (a.deformedShape.val, !a.loads.val) return;
    c.children.forEach((v) => v.dispose()), c.clear();
    const p = u.val, g = w(p), x = 240, b = [];
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((v, N) => {
      p[N] && v.slice(0, 3).some((ue) => Math.abs(ue) > 1e-15) && b.push(N);
    });
    let z = b;
    if (b.length > x) {
      const v = b.map((V) => p[V][0]), N = b.map((V) => p[V][1]), ue = Math.min(...v), ne = Math.max(...v), Q = Math.min(...N), _ = Math.max(...N), O = b.map((V) => p[V][2]), oe = Math.max(1e-6, (Math.max(...O) - Math.min(...O)) / 40), be = (V) => Math.round(V / oe), me = new Set(O.map(be)), B = Math.max(4, Math.floor(x / Math.max(1, me.size))), I = Math.max(2, Math.round(Math.sqrt(B))), X = /* @__PURE__ */ new Map();
      for (const V of b) {
        const F = ne - ue < 1e-9 ? 0 : (p[V][0] - ue) / (ne - ue), $ = _ - Q < 1e-9 ? 0 : (p[V][1] - Q) / (_ - Q), T = Math.min(I - 1, Math.floor(F * I)), A = Math.min(I - 1, Math.floor($ * I)), H = `${T},${A},${be(p[V][2])}`, se = Math.hypot(F * I - (T + 0.5), $ * I - (A + 0.5)), j = X.get(H);
        (!j || se < j.d) && X.set(H, { i: V, d: se });
      }
      z = [...X.values()].map((V) => V.i);
    }
    for (const v of z) {
      const N = e.nodeInputs.val.loads.get(v), ue = p[v];
      if (!ue) continue;
      const ne = new M(...N.slice(0, 3));
      if (ne.lengthSq() < 1e-30) continue;
      ne.normalize();
      const Q = new jt(ne, new M(...ue), 1, 15637248, 0.3, 0.3), _ = g * m.rawVal;
      Q.scale.set(_, _, _), c.add(Q);
    }
  }), D.derive(() => {
    if (m.val, !a.loads.rawVal) return;
    const g = w(u.rawVal) * m.rawVal;
    c.children.forEach((x) => x.scale.set(g, g, g));
  }), D.derive(() => {
    c.visible = a.loads.val;
  }), c;
}
function Ss(e, a, u) {
  const m = new We();
  return D.derive(() => {
    if (!e.nodesIndexes.val) return;
    m.children.forEach((w) => w.dispose()), m.clear();
    const c = 0.05 * e.gridSize.val * 0.6;
    a.val.forEach((w, p) => {
      const g = new gt(`${p}`);
      g.position.set(...w), g.updateScale(c * u.rawVal), m.add(g);
    });
  }), D.derive(() => {
    if (u.val, !e.nodesIndexes.rawVal) return;
    const c = 0.05 * e.gridSize.val * 0.6;
    m.children.forEach((w) => w.updateScale(c * u.rawVal));
  }), D.derive(() => {
    m.visible = e.nodesIndexes.val;
  }), m;
}
function ks(e, a, u, m) {
  const c = new We();
  return D.derive(() => {
    var _a;
    if (a.deformedShape.val, !a.elementsIndexes.val) return;
    c.children.forEach((p) => p.dispose()), c.clear();
    const w = 0.05 * a.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((p, g) => {
      const x = new gt(`${g}`, void 0, "#001219");
      x.position.set(...Ps(p.map((b) => u.rawVal[b]))), x.updateScale(w * m.rawVal), c.add(x);
    });
  }), D.derive(() => {
    if (m.val, !a.elementsIndexes.rawVal) return;
    const w = 0.05 * a.gridSize.val * 0.6;
    c.children.forEach((p) => p.updateScale(w * m.rawVal));
  }), D.derive(() => {
    c.visible = a.elementsIndexes.val;
  }), c;
}
function Ps(e) {
  const a = e.reduce((m, c) => [m[0] + c[0], m[1] + c[1], m[2] + c[2]], [0, 0, 0]), u = e.length;
  return [a[0] / u, a[1] / u, a[2] / u];
}
function Co(e, a) {
  const u = new We(), m = Math.min(0.05 * e, 0.6), c = en(), w = new gt("X", "red", "transparent"), p = new gt(a ? "Z" : "Y", "green", "transparent"), g = new gt(a ? "Y" : "Z", "blue", "transparent"), x = new jt(new M(1, 0, 0), new M(0, 0, 0), 1, c.axisArrow, 0.2, 0.2), b = new jt(new M(0, 1, 0), new M(0, 0, 0), 1, c.axisArrow, 0.2, 0.2), z = new jt(new M(0, 0, 1), new M(0, 0, 0), 1, c.axisArrow, 0.2, 0.2);
  return w.position.set(1.3 * m, 0, 0), p.position.set(0, 1.3 * m, 0), g.position.set(0, 0, 1.3 * m), w.updateScale(0.4 * m), p.updateScale(0.4 * m), g.updateScale(0.4 * m), x.scale.set(m, m, m), b.scale.set(m, m, m), z.scale.set(m, m, m), u.add(x, b, z, w, p, g), u;
}
function Tn(e, a) {
  const u = new M(...e), c = new M(...a).clone().sub(u), w = c.length(), p = c.dot(new M(1, 0, 0)) / w, g = c.dot(new M(0, 1, 0)) / w, x = c.dot(new M(0, 0, 1)) / w, b = Math.sqrt(p ** 2 + g ** 2);
  let z = new Hn().fromArray([[p, g, x], [-g / b, p / b, 0], [-p * x / b, -g * x / b, b]].flat());
  return x === 1 && (z = new Hn().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), x === -1 && (z = new Hn().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new oo().setFromMatrix3(z);
}
function to(e, a) {
  return e == null ? void 0 : e.map((u, m) => (9 * u + a[m]) / 10);
}
function vn(e) {
  const a = e.reduce((m, c) => [m[0] + c[0], m[1] + c[1], m[2] + c[2]], [0, 0, 0]), u = e.length;
  return [a[0] / u, a[1] / u, a[2] / u];
}
function zs(e, a, u) {
  const m = vn([a, u]), c = vn([e, u]), w = vn([e, a]), p = new M(...m).sub(new M(...c)).normalize(), g = new M(...u).sub(new M(...w)).normalize(), x = p.clone().cross(g).normalize(), b = x.clone().cross(p).normalize();
  return new oo().makeBasis(p, b, x);
}
function Cs(e, a, u, m) {
  const c = new We(), w = new ye(), p = new it({ vertexColors: true }), g = [0, 0, 0], x = [1, 0, 0], b = [0, 1, 0], z = [0, 0, 1];
  w.setAttribute("position", new ft([...g, ...x, ...g, ...b, ...g, ...z], 3));
  const v = [255, 0, 0], N = [0, 255, 0], ue = [0, 0, 255];
  return w.setAttribute("color", new ft([...v, ...v, ...N, ...N, ...ue, ...ue], 3)), D.derive(() => {
    var _a;
    a.deformedShape.val, a.orientations.val && (c.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((ne) => {
      const Q = new Xt(w, p), _ = u.rawVal[ne[0]], O = u.rawVal[ne[1]];
      if (ne.length === 2 && (Q.position.set(...to(_, O)), Q.rotation.setFromRotationMatrix(Tn(_, O))), ne.length === 3) {
        const me = u.rawVal[ne[2]];
        Q.position.set(...vn([_, O, me])), Q.rotation.setFromRotationMatrix(zs(_, O, me));
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
function Fs(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const a = (e.b * 100).toFixed(0), u = (e.h * 100).toFixed(0);
    return `${a}x${u}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function Vs(e, a, u, m) {
  const c = new We(), w = new We();
  c.add(w);
  function p(I, X) {
    const V = I / 2, F = X / 2, $ = new Float32Array([0, -V, -F, 0, V, -F, 0, V, F, 0, -V, -F, 0, V, F, 0, -V, F]), T = new ye();
    T.setAttribute("position", new at($, 3));
    const A = new Float32Array([0, -V, -F, 0, V, -F, 0, V, F, 0, -V, F, 0, -V, -F]), H = new ye();
    return H.setAttribute("position", new at(A, 3)), { fill: T, outline: H };
  }
  function g(I, X = 24) {
    const V = I / 2, F = new Float32Array(X * 9);
    for (let H = 0; H < X; H++) {
      const se = H / X * Math.PI * 2, j = (H + 1) / X * Math.PI * 2;
      F[H * 9] = 0, F[H * 9 + 1] = 0, F[H * 9 + 2] = 0, F[H * 9 + 3] = 0, F[H * 9 + 4] = V * Math.cos(se), F[H * 9 + 5] = V * Math.sin(se), F[H * 9 + 6] = 0, F[H * 9 + 7] = V * Math.cos(j), F[H * 9 + 8] = V * Math.sin(j);
    }
    const $ = new ye();
    $.setAttribute("position", new at(F, 3));
    const T = new Float32Array((X + 1) * 3);
    for (let H = 0; H <= X; H++) {
      const se = H / X * Math.PI * 2;
      T[H * 3] = 0, T[H * 3 + 1] = V * Math.cos(se), T[H * 3 + 2] = V * Math.sin(se);
    }
    const A = new ye();
    return A.setAttribute("position", new at(T, 3)), { fill: $, outline: A };
  }
  function x(I, X, V, F) {
    const $ = V ?? X * 0.08, T = F ?? I * 0.07, A = I / 2, H = X / 2, se = H - $, j = T / 2, J = [];
    function E(pe, ze, we, Ae) {
      J.push(0, pe, ze, 0, we, ze, 0, we, Ae, 0, pe, ze, 0, we, Ae, 0, pe, Ae);
    }
    E(-A, -H, A, -se), E(-j, -se, j, se), E(-A, se, A, H);
    const ie = new ye();
    ie.setAttribute("position", new at(new Float32Array(J), 3));
    const Z = new Float32Array([0, -A, -H, 0, A, -H, 0, A, -se, 0, j, -se, 0, j, se, 0, A, se, 0, A, H, 0, -A, H, 0, -A, se, 0, -j, se, 0, -j, -se, 0, -A, -se, 0, -A, -H]), ce = new ye();
    return ce.setAttribute("position", new at(Z, 3)), { fill: ie, outline: ce };
  }
  function b(I, X, V) {
    const F = I / 2, $ = X / 2, T = F - V, A = $ - V, H = [];
    function se(ie, Z, ce, pe) {
      H.push(0, ie, Z, 0, ce, Z, 0, ce, pe, 0, ie, Z, 0, ce, pe, 0, ie, pe);
    }
    se(-F, -$, F, -A), se(-F, A, F, $), se(-F, -A, -T, A), se(T, -A, F, A);
    const j = new ye();
    j.setAttribute("position", new at(new Float32Array(H), 3));
    const J = new Float32Array([0, -F, -$, 0, F, -$, 0, F, -$, 0, F, $, 0, F, $, 0, -F, $, 0, -F, $, 0, -F, -$, 0, -T, -A, 0, T, -A, 0, T, -A, 0, T, A, 0, T, A, 0, -T, A, 0, -T, A, 0, -T, -A]), E = new ye();
    return E.setAttribute("position", new at(J, 3)), { fill: j, outline: E };
  }
  function z(I, X, V) {
    const F = I / 2, $ = X / 2, T = F - V, A = $ - V, H = new ye(), se = new Float32Array([0, -T, -A, 0, T, -A, 0, T, A, 0, -T, -A, 0, T, A, 0, -T, A]);
    H.setAttribute("position", new at(se, 3));
    const j = [];
    function J(ce, pe, ze, we) {
      j.push(0, ce, pe, 0, ze, pe, 0, ze, we, 0, ce, pe, 0, ze, we, 0, ce, we);
    }
    J(-F, -$, F, -A), J(-F, A, F, $), J(-F, -A, -T, A), J(T, -A, F, A);
    const E = new ye();
    E.setAttribute("position", new at(new Float32Array(j), 3));
    const ie = new Float32Array([0, -F, -$, 0, F, -$, 0, F, -$, 0, F, $, 0, F, $, 0, -F, $, 0, -F, $, 0, -F, -$, 0, -T, -A, 0, T, -A, 0, T, -A, 0, T, A, 0, T, A, 0, -T, A, 0, -T, A, 0, -T, -A]), Z = new ye();
    return Z.setAttribute("position", new at(ie, 3)), { concFill: H, steelFillGeom: E, outline: Z };
  }
  function v(I, X, V) {
    const F = [], $ = [[0, -I / 2, -X / 2], [0, -I / 2 + V, -X / 2], [0, -I / 2 + V, X / 2 - V], [0, I / 2, X / 2 - V], [0, I / 2, X / 2], [0, -I / 2, X / 2]], T = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const j of T) F.push(...$[j]);
    const A = new ye();
    A.setAttribute("position", new at(new Float32Array(F), 3));
    const H = [];
    for (let j = 0; j < $.length; j++) {
      const J = (j + 1) % $.length;
      H.push(...$[j], ...$[J]);
    }
    const se = new ye();
    return se.setAttribute("position", new at(new Float32Array(H), 3)), { fill: A, outline: se };
  }
  function N(I, X, V, F) {
    const $ = F / 2, T = [], A = [[0, -I - $, -X / 2], [0, -V - $, -X / 2], [0, -V - $, X / 2 - V], [0, -$, X / 2 - V], [0, -$, X / 2], [0, -I - $, X / 2]], H = [[0, $, -X / 2], [0, $ + V, -X / 2], [0, $ + V, X / 2 - V], [0, I + $, X / 2 - V], [0, I + $, X / 2], [0, $, X / 2]], se = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const ie of se) T.push(...A[ie]);
    for (const ie of se) T.push(...H[ie]);
    const j = new ye();
    j.setAttribute("position", new at(new Float32Array(T), 3));
    const J = [];
    for (const ie of [A, H]) for (let Z = 0; Z < ie.length; Z++) {
      const ce = (Z + 1) % ie.length;
      J.push(...ie[Z], ...ie[ce]);
    }
    const E = new ye();
    return E.setAttribute("position", new at(new Float32Array(J), 3)), { fill: j, outline: E };
  }
  function ue(I, X, V, F) {
    const $ = X / 2, T = I, A = [[0, -T, -$], [0, -T, -$ + V], [0, -F, -$ + V], [0, -F, $ - V], [0, -T, $ - V], [0, -T, $], [0, 0, $], [0, 0, -$]], H = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], se = [];
    for (const ie of H) se.push(...A[ie]);
    const j = new ye();
    j.setAttribute("position", new at(new Float32Array(se), 3));
    const J = [];
    for (let ie = 0; ie < A.length; ie++) {
      const Z = (ie + 1) % A.length;
      J.push(...A[ie], ...A[Z]);
    }
    const E = new ye();
    return E.setAttribute("position", new at(new Float32Array(J), 3)), { fill: j, outline: E };
  }
  function ne(I, X, V, F, $) {
    const T = X / 2, A = $ / 2, H = [], se = [[0, -I, -T], [0, -I, -T + V], [0, -A - F, -T + V], [0, -A - F, T - V], [0, -I, T - V], [0, -I, T], [0, -A, T], [0, -A, -T]], j = se.map((ce) => [ce[0], -ce[1], ce[2]]), J = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const ce of J) H.push(...se[ce]);
    for (const ce of J) H.push(...j[ce]);
    const E = new ye();
    E.setAttribute("position", new at(new Float32Array(H), 3));
    const ie = [];
    for (const ce of [se, j]) for (let pe = 0; pe < ce.length; pe++) {
      const ze = (pe + 1) % ce.length;
      ie.push(...ce[pe], ...ce[ze]);
    }
    const Z = new ye();
    return Z.setAttribute("position", new at(new Float32Array(ie), 3)), { fill: E, outline: Z };
  }
  function Q(I, X, V, F) {
    const $ = I / 2, T = X / 2, A = F / 2, H = [[0, -A, -T], [0, A, -T], [0, A, T - V], [0, $, T - V], [0, $, T], [0, -$, T], [0, -$, T - V], [0, -A, T - V]], se = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], j = [];
    for (const Z of se) j.push(...H[Z]);
    const J = new ye();
    J.setAttribute("position", new at(new Float32Array(j), 3));
    const E = [];
    for (let Z = 0; Z < H.length; Z++) {
      const ce = (Z + 1) % H.length;
      E.push(...H[Z], ...H[ce]);
    }
    const ie = new ye();
    return ie.setAttribute("position", new at(new Float32Array(E), 3)), { fill: J, outline: ie };
  }
  function _(I, X, V = 24) {
    const F = I / 2, $ = F - X, T = [];
    for (let j = 0; j < V; j++) {
      const J = j / V * Math.PI * 2, E = (j + 1) / V * Math.PI * 2, ie = Math.cos(J), Z = Math.sin(J), ce = Math.cos(E), pe = Math.sin(E);
      T.push(0, F * ie, F * Z, 0, F * ce, F * pe, 0, $ * ce, $ * pe), T.push(0, F * ie, F * Z, 0, $ * ce, $ * pe, 0, $ * ie, $ * Z);
    }
    const A = new ye();
    A.setAttribute("position", new at(new Float32Array(T), 3));
    const H = [];
    for (let j = 0; j < V; j++) {
      const J = j / V * Math.PI * 2, E = (j + 1) / V * Math.PI * 2;
      H.push(0, F * Math.cos(J), F * Math.sin(J), 0, F * Math.cos(E), F * Math.sin(E)), H.push(0, $ * Math.cos(J), $ * Math.sin(J), 0, $ * Math.cos(E), $ * Math.sin(E));
    }
    const se = new ye();
    return se.setAttribute("position", new at(new Float32Array(H), 3)), { fill: A, outline: se };
  }
  const O = new je({ color: 52479, transparent: true, opacity: 0.35, side: vt, depthWrite: false }), oe = new it({ color: 52479 }), be = new je({ color: 16750848, transparent: true, opacity: 0.4, side: vt, depthWrite: false }), me = new it({ color: 16750848 });
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
    const $ = F.sectionShapes, T = a.secFloor.rawVal;
    V.forEach((A, H) => {
      if (A.length !== 2) return;
      const se = u.rawVal[A[0]], j = u.rawVal[A[1]];
      if (!se || !j) return;
      const J = B(se, j);
      if (J && !I || !J && !X) return;
      if (T >= 0) {
        const pe = Math.min(se[1], j[1]);
        Math.max(se[1], j[1]);
        const ze = a.gridSize.rawVal || 3;
        if (Math.floor(pe / ze + 0.01) !== T) return;
      }
      const E = $ == null ? void 0 : $.get(H);
      if (!E) return;
      const ie = [(se[0] + j[0]) / 2, (se[1] + j[1]) / 2, (se[2] + j[2]) / 2], Z = Tn(se, j);
      if (E.type === "CFT") {
        const pe = z(E.b, E.h, E.tw ?? E.b * 0.05), ze = new Ke(pe.concFill, O);
        ze.position.set(...ie), ze.rotation.setFromRotationMatrix(Z), c.add(ze);
        const we = new Ke(pe.steelFillGeom, be);
        we.position.set(...ie), we.rotation.setFromRotationMatrix(Z), c.add(we);
        const Ae = new St(pe.outline, me);
        Ae.position.set(...ie), Ae.rotation.setFromRotationMatrix(Z), c.add(Ae);
      } else {
        let pe, ze, we;
        switch (E.type) {
          case "rect":
            pe = p(E.b, E.h), ze = O, we = oe;
            break;
          case "circ":
            pe = g(E.d), ze = O, we = oe;
            break;
          case "I":
            pe = x(E.b, E.h, E.tf, E.tw), ze = be, we = me;
            break;
          case "HSS":
            pe = b(E.b, E.h, E.tw ?? E.b * 0.05), ze = be, we = me;
            break;
          case "CFT":
            pe = z(E.b, E.h, E.tw ?? E.b * 0.05), ze = be, we = me;
            break;
          case "L":
            pe = v(E.b ?? E.h, E.h, E.t ?? E.tw ?? 3e-3), ze = be, we = me;
            break;
          case "2L":
            pe = N(E.b ?? E.h, E.h, E.t ?? E.tw ?? 3e-3, E.dis ?? 0.01), ze = be, we = me;
            break;
          case "C":
          case "coldC":
            pe = ue(E.b, E.h, E.tf ?? E.t ?? 3e-3, E.tw ?? E.t ?? 3e-3), ze = be, we = me;
            break;
          case "2C":
            pe = ne(E.b, E.h, E.tf ?? 5e-3, E.tw ?? 5e-3, E.dis ?? 0.01), ze = be, we = me;
            break;
          case "T":
            pe = Q(E.b, E.h, E.tf ?? 0.01, E.tw ?? 6e-3), ze = be, we = me;
            break;
          case "pipe":
            pe = _(E.d, E.tw ?? E.d * 0.05), ze = be, we = me;
            break;
          default:
            return;
        }
        const Ae = new Ke(pe.fill, ze);
        Ae.position.set(...ie), Ae.rotation.setFromRotationMatrix(Z), c.add(Ae);
        const qe = new St(pe.outline, we);
        qe.position.set(...ie), qe.rotation.setFromRotationMatrix(Z), c.add(qe);
      }
      const ce = Fs(E);
      if (ce) {
        const ze = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(E.type) ? "#ff9900" : "#00ccff", we = new gt(ce, ze, "transparent");
        we.position.set(ie[0], ie[1], ie[2]);
        const Ae = 0.05 * a.gridSize.rawVal * 0.5;
        we.updateScale(Ae * ((m == null ? void 0 : m.rawVal) ?? 1)), w.add(we);
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
function As(e) {
  if (!e) return null;
  const a = e.type, u = (z, v) => [z, v], m = (z, v) => [u(-z / 2, -v / 2), u(z / 2, -v / 2), u(z / 2, v / 2), u(-z / 2, v / 2)], c = (z, v = 24) => {
    const N = z / 2, ue = [];
    for (let ne = 0; ne < v; ne++) {
      const Q = 2 * Math.PI * ne / v;
      ue.push(u(N * Math.cos(Q), N * Math.sin(Q)));
    }
    return ue;
  }, w = e.b ?? 0, p = e.h ?? 0, g = e.d ?? 0, x = e.tw ?? e.t ?? 0, b = e.tf ?? e.t ?? 0;
  switch (a) {
    case "rect":
      return w && p ? { contorno: m(w, p) } : null;
    case "circ":
      return g ? { contorno: c(g) } : null;
    case "pipe":
      return g && x ? { contorno: c(g), huecos: [c(g - 2 * x).reverse()] } : null;
    case "HSS":
      return w && p && x ? { contorno: m(w, p), huecos: [m(w - 2 * x, p - 2 * (b || x)).reverse()] } : null;
    case "CFT":
      return w && p ? { contorno: m(w, p) } : null;
    case "I":
      return w && p && x && b ? { contorno: [u(-w / 2, -p / 2), u(w / 2, -p / 2), u(w / 2, -p / 2 + b), u(x / 2, -p / 2 + b), u(x / 2, p / 2 - b), u(w / 2, p / 2 - b), u(w / 2, p / 2), u(-w / 2, p / 2), u(-w / 2, p / 2 - b), u(-x / 2, p / 2 - b), u(-x / 2, -p / 2 + b), u(-w / 2, -p / 2 + b)] } : null;
    case "C":
    case "2C":
    case "coldC":
      return w && p && x && b ? { contorno: [u(-w / 2, -p / 2), u(w / 2, -p / 2), u(w / 2, -p / 2 + b), u(-w / 2 + x, -p / 2 + b), u(-w / 2 + x, p / 2 - b), u(w / 2, p / 2 - b), u(w / 2, p / 2), u(-w / 2, p / 2)] } : null;
    case "T":
      return w && p && x && b ? { contorno: [u(-x / 2, -p / 2), u(x / 2, -p / 2), u(x / 2, p / 2 - b), u(w / 2, p / 2 - b), u(w / 2, p / 2), u(-w / 2, p / 2), u(-w / 2, p / 2 - b), u(-x / 2, p / 2 - b)] } : null;
    case "L":
    case "2L":
      return w && p && x ? { contorno: [u(-w / 2, -p / 2), u(w / 2, -p / 2), u(w / 2, -p / 2 + x), u(-w / 2 + x, -p / 2 + x), u(-w / 2 + x, p / 2), u(-w / 2, p / 2)] } : null;
    default:
      return w && p ? { contorno: m(w, p) } : g ? { contorno: c(g) } : null;
  }
}
function Es(e, a, u) {
  if (!e || e <= 0 || !a || !u || a <= 0 || u <= 0) return null;
  const m = Math.sqrt(Math.sqrt(u / a)), c = Math.sqrt(e / m), w = e / c;
  return !isFinite(c) || !isFinite(w) || c <= 0 || w <= 0 ? null : { contorno: [[-c / 2, -w / 2], [c / 2, -w / 2], [c / 2, w / 2], [-c / 2, w / 2]] };
}
function Ts(e) {
  const a = new gn();
  e.contorno.forEach(([u, m], c) => c ? a.lineTo(u, m) : a.moveTo(u, m)), a.closePath();
  for (const u of e.huecos ?? []) {
    const m = new ls();
    u.forEach(([c, w], p) => p ? m.lineTo(c, w) : m.moveTo(c, w)), m.closePath(), a.holes.push(m);
  }
  return a;
}
function $s(e, a, u) {
  const m = new We();
  m.name = "extrusion";
  const c = new qn({ color: 8369151, transparent: true, opacity: 0.92, side: vt }), w = new qn({ color: 12623968, transparent: true, opacity: 0.85, side: vt }), p = new qn({ color: 11583173, transparent: true, opacity: 0.85, side: vt }), g = new We();
  g.add(new Lo(16777215, 0.55));
  const x = new An(16777215, 0.75);
  x.position.set(30, 25, 40);
  const b = new An(16777215, 0.35);
  b.position.set(-25, -20, 15), g.add(x, b);
  let z = 0;
  return D.derive(() => {
    var _a, _b, _c, _d, _e;
    const v = ((_a = a.extruded) == null ? void 0 : _a.val) ?? false;
    globalThis.__extrusionDebug = { corridas: ++z, on: v }, m.visible = v;
    for (const oe of [...m.children]) oe !== g && (m.remove(oe), (_c = (_b = oe.geometry) == null ? void 0 : _b.dispose) == null ? void 0 : _c.call(_b));
    if (m.children.includes(g) || m.add(g), !v) return;
    const N = u.val ?? [], ue = ((_d = e.elements) == null ? void 0 : _d.val) ?? [], ne = ((_e = e.elementInputs) == null ? void 0 : _e.val) ?? {}, Q = ne.sectionShapes ?? /* @__PURE__ */ new Map(), _ = ne.thicknesses ?? /* @__PURE__ */ new Map();
    let O = "";
    try {
      ue.forEach((oe, be) => {
        var _a2, _b2, _c2;
        if (oe.length === 2) {
          let me = As(Q.get(be)), B = true;
          if (me || (me = Es((_a2 = ne.areas) == null ? void 0 : _a2.get(be), (_b2 = ne.momentsOfInertiaY) == null ? void 0 : _b2.get(be), (_c2 = ne.momentsOfInertiaZ) == null ? void 0 : _c2.get(be)), B = false), !me) return;
          const I = N[oe[0]], X = N[oe[1]];
          if (!I || !X) return;
          const V = Math.hypot(X[0] - I[0], X[1] - I[1], X[2] - I[2]);
          if (V < 1e-9) return;
          const F = new is(Ts(me), { depth: V, bevelEnabled: false, curveSegments: 4 });
          F.applyMatrix4(new oo().set(0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1));
          const $ = new Ke(F, B ? c : w);
          $.position.set(I[0], I[1], I[2]), $.rotation.setFromRotationMatrix(Tn(I, X)), m.add($);
          return;
        }
        if (oe.length === 3 || oe.length === 4) {
          const me = _.get(be);
          if (!me || me <= 0) return;
          const B = oe.map((Z) => N[Z]).filter(Boolean);
          if (B.length < 3) return;
          const I = [B[1][0] - B[0][0], B[1][1] - B[0][1], B[1][2] - B[0][2]], X = [B[2][0] - B[0][0], B[2][1] - B[0][1], B[2][2] - B[0][2]], V = I[1] * X[2] - I[2] * X[1], F = I[2] * X[0] - I[0] * X[2], $ = I[0] * X[1] - I[1] * X[0], T = Math.hypot(V, F, $);
          if (T < 1e-12) return;
          const A = [V / T, F / T, $ / T], H = [], se = (Z) => B.map((ce) => [ce[0] + A[0] * Z, ce[1] + A[1] * Z, ce[2] + A[2] * Z]), j = se(+me / 2), J = se(-me / 2), E = (Z, ce, pe) => H.push(...Z, ...ce, ...pe);
          for (const Z of [j, J]) E(Z[0], Z[1], Z[2]), Z.length === 4 && E(Z[0], Z[2], Z[3]);
          for (let Z = 0; Z < B.length; Z++) {
            const ce = (Z + 1) % B.length;
            E(j[Z], J[Z], J[ce]), E(j[Z], J[ce], j[ce]);
          }
          const ie = new ye();
          ie.setAttribute("position", new ft(H, 3)), ie.computeVertexNormals(), m.add(new Ke(ie, p));
        }
      });
    } catch (oe) {
      O = String((oe == null ? void 0 : oe.message) ?? oe);
    }
    globalThis.__extrusionDebug = { corridas: z, on: v, fallo: O, nElementos: ue.length, nFormas: Q.size, nEspesores: _.size, mallas: m.children.length - 1 };
  }), m;
}
class Pn extends We {
  constructor(a, u, m, c, w, p, g) {
    super();
    const x = new gn().moveTo(0, 0).lineTo(0, p[1]).lineTo(m, p[1]).lineTo(m, 0).lineTo(0, 0), b = x.getPoints(), z = new ye().setFromPoints(b);
    this.lines = new St(z, new it({ color: en().resultOutline })), this.lines.position.set(...a), this.lines.rotation.setFromRotationMatrix(c), g && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const v = new Vn(x), N = new je({ color: p[1] > 0 ? 24435 : 11411474, side: vt });
    this.mesh = new Ke(v, N), this.mesh.position.set(...a), this.mesh.rotation.setFromRotationMatrix(c), g && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new gt(`${w[1].toFixed(4)}`), this.normalizedResult = p, this.textPosition = vn([a, u]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(c), this.add(this.text);
  }
  updateScale(a) {
    this.lines.scale.set(1, a * 2, 1), this.mesh.scale.set(1, a * 2, 1), this.text.updateScale(a * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * a);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Fo extends We {
  constructor(a, u, m, c, w, p, g) {
    super();
    const x = w[0] * m / (w[0] + w[1]), b = w[0] * w[1] > 0;
    if (this.text = new gt(`${w[0].toFixed(4)}`), this.text2 = new gt(`${(w[1] * -1).toFixed(4)}`), this.normalizedResult = p, this.textPosition = to(a, u), this.text2Position = to(u, a), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(c), this.text2.rotation.setFromRotationMatrix(c), this.add(this.text, this.text2), b) {
      const z = new gn().moveTo(0, 0).lineTo(0, p[0]).lineTo(x, 0).lineTo(0, 0), v = new gn().moveTo(x, 0).lineTo(m, -p[1]).lineTo(m, 0).lineTo(x, 0), N = z.getPoints(), ue = v.getPoints(), ne = new ye().setFromPoints(N), Q = new ye().setFromPoints(ue), _ = new it({ color: en().resultOutline });
      this.lines = new St(ne, _), this.lines2 = new St(Q, _), this.lines.position.set(...a), this.lines2.position.set(...a), this.lines.rotation.setFromRotationMatrix(c), this.lines2.rotation.setFromRotationMatrix(c), g && this.lines.rotateX(Math.PI / 2), g && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const O = new Vn(z), oe = new Vn(v), be = new je({ color: p[0] > 0 ? 24435 : 11411474, side: vt }), me = new je({ color: -p[1] > 0 ? 24435 : 11411474, side: vt });
      this.mesh = new Ke(O, be), this.mesh2 = new Ke(oe, me), this.mesh.position.set(...a), this.mesh2.position.set(...a), this.mesh.rotation.setFromRotationMatrix(c), this.mesh2.rotation.setFromRotationMatrix(c), g && this.mesh.rotateX(Math.PI / 2), g && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const z = new gn().moveTo(0, 0).lineTo(0, p[0]).lineTo(m, -p[1]).lineTo(m, 0).lineTo(0, 0), v = z.getPoints(), N = new ye().setFromPoints(v);
      this.lines = new St(N, new it({ color: en().resultOutline })), this.lines.position.set(...a), this.lines.rotation.setFromRotationMatrix(c), g && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const ue = new Vn(z), ne = new je({ color: p[0] > 0 ? 24435 : 11411474, side: vt });
      this.mesh = new Ke(ue, ne), this.mesh.position.set(...a), this.mesh.rotation.setFromRotationMatrix(c), g && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var No = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(No || {});
function Is(e, a, u, m) {
  const c = new We(), w = { normals: Pn, shearsY: Pn, shearsZ: Pn, torsions: Pn, bendingsY: Fo, bendingsZ: Fo };
  return D.derive(() => {
    var _a, _b;
    if (a.deformedShape.val, u.val, a.frameResults.val == "none") return;
    c.children.forEach((g) => g.dispose()), c.clear();
    const p = No[a.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[p]) == null ? void 0 : _b.forEach((g, x) => {
      var _a2, _b2;
      const b = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[x]) ?? [0, 1], z = u.rawVal[b[0]], v = u.rawVal[b[1]], N = new M(...v).distanceTo(new M(...z)), ue = Ls((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[p]), ne = g == null ? void 0 : g.map((oe) => oe / (ue === 0 ? 1 : ue)), Q = Tn(z, v), _ = new w[p](z, v, N, Q, g ?? [0, 0], ne ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(p)), O = 0.05 * a.gridSize.rawVal;
      _.updateScale(O * m.rawVal), c.add(_);
    });
  }), D.derive(() => {
    if (m.val, a.frameResults.rawVal == "none") return;
    const p = 0.05 * a.gridSize.val;
    c.children.forEach((g) => g.updateScale(p * m.rawVal));
  }), D.derive(() => {
    c.visible = a.frameResults.val != "none";
  }), c;
}
function Ls(e) {
  let a = 0;
  return e == null ? void 0 : e.forEach((u) => {
    const m = Math.max(...u ?? [0, 0]);
    m > a && (a = m);
  }), a;
}
class Bs extends We {
  constructor(a, u, m) {
    super();
    const c = u === ao.reactions;
    m[0] && (this.xText1 = new gt(`${c ? "Fx" : "Dx"}: ` + m[0].toFixed(4))), m[3] && (this.xText2 = new gt(`${c ? "Mx" : "Rx"}: ` + m[3].toFixed(4))), m[1] && (this.yText1 = new gt(`${c ? "Fy" : "Dy"}: ` + m[1].toFixed(4))), m[4] && (this.yText2 = new gt(`${c ? "My" : "Ry"}: ` + m[4].toFixed(4))), m[2] && (this.zText1 = new gt(`${c ? "Fz" : "Dz"}: ` + m[2].toFixed(4))), m[5] && (this.zText2 = new gt(`${c ? "Mz" : "Rz"}: ` + m[5].toFixed(4))), (m[0] || m[3]) && (this.xArrow = new jt(new M(1, 0, 0), new M(0, 0, 0), 1, 15637248, 0.3, 0.3)), (m[1] || m[4]) && (this.yArrow = new jt(new M(0, 1, 0), new M(0, 0, 0), 1, 15637248, 0.3, 0.3)), (m[2] || m[5]) && (this.zArrow = new jt(new M(0, 0, 1), new M(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...a), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
  }
  updateScale(a) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2;
    (_a = this.xArrow) == null ? void 0 : _a.scale.set(a, a, a), (_b = this.yArrow) == null ? void 0 : _b.scale.set(a, a, a), (_c = this.zArrow) == null ? void 0 : _c.scale.set(a, a, a), (_d = this.xText1) == null ? void 0 : _d.position.set(1.3 * a, 0, 0), (_e = this.xText2) == null ? void 0 : _e.position.set(1.3 * a, 0, 0.5 * a), (_f = this.yText1) == null ? void 0 : _f.position.set(0, 1.3 * a, 0), (_g = this.yText2) == null ? void 0 : _g.position.set(0, 1.3 * a, 0.5 * a), (_h = this.zText1) == null ? void 0 : _h.position.set(0, 0, 1.3 * a), (_i = this.zText2) == null ? void 0 : _i.position.set(0, 0, 1.3 * a + 0.5 * a), (_j = this.xText1) == null ? void 0 : _j.updateScale(0.4 * a), (_k = this.xText2) == null ? void 0 : _k.updateScale(0.4 * a), (_l = this.yText1) == null ? void 0 : _l.updateScale(0.4 * a), (_m = this.yText2) == null ? void 0 : _m.updateScale(0.4 * a), (_n = this.zText1) == null ? void 0 : _n.updateScale(0.4 * a), (_o2 = this.zText2) == null ? void 0 : _o2.updateScale(0.4 * a);
  }
  dispose() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    (_a = this.xArrow) == null ? void 0 : _a.dispose(), (_b = this.yArrow) == null ? void 0 : _b.dispose(), (_c = this.zArrow) == null ? void 0 : _c.dispose(), (_d = this.xText1) == null ? void 0 : _d.dispose(), (_e = this.xText2) == null ? void 0 : _e.dispose(), (_f = this.yText1) == null ? void 0 : _f.dispose(), (_g = this.yText2) == null ? void 0 : _g.dispose(), (_h = this.zText1) == null ? void 0 : _h.dispose(), (_i = this.zText2) == null ? void 0 : _i.dispose();
  }
}
var ao = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(ao || {});
function Rs(e, a, u, m) {
  const c = new We();
  return D.derive(() => {
    var _a, _b;
    if (a.deformedShape.val, a.nodeResults.val == "none") return;
    c.children.forEach((g) => g.dispose()), c.clear();
    const w = ao[a.nodeResults.rawVal], p = 0.05 * a.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[w]) == null ? void 0 : _b.forEach((g, x) => {
      const b = new Bs(u.rawVal[x], w, g ?? [0, 0, 0, 0, 0, 0]);
      b.updateScale(p * m.rawVal), c.add(b);
    });
  }), D.derive(() => {
    if (m.val, a.nodeResults.rawVal == "none") return;
    const w = 0.05 * a.gridSize.val;
    c.children.forEach((p) => p.updateScale(w * m.rawVal));
  }), D.derive(() => {
    c.visible = a.nodeResults.val != "none";
  }), c;
}
function Xs({ drawingObj: e, gridObj: a, scene: u, getActiveCamera: m, controls: c, gridSize: w, derivedDisplayScale: p, rendererElm: g, viewerRender: x }) {
  const b = new rs(), z = new cs(), v = (n) => {
    const o = g.getBoundingClientRect(), i = n.clientX - o.left, t = n.clientY - o.top, r = o.width || 1, s = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const f = r / 2;
      if (i >= f) return z.x = (i - f) / f * 2 - 1, z.y = -(t / s) * 2 + 1, window.__hekatanSplitCamera ?? m();
      z.x = i / f * 2 - 1;
    } else z.x = i / r * 2 - 1;
    return z.y = -(t / s) * 2 + 1, m();
  }, N = new Ke(new Wt(1e4, 1e4), new je({ side: vt, transparent: true, opacity: 0, depthWrite: false }));
  N.visible = true, N.frustumCulled = false, u.add(N);
  const ue = (n, o, i) => {
    const t = new Ke(new Wt(1e4, 1e4), new je({ side: vt, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, i), t.visible = false, t.frustumCulled = false, u.add(t), t;
  }, ne = ue(Math.PI / 2, 0, 0), Q = ue(0, Math.PI / 2, 0);
  let _ = false;
  const O = () => {
    if (_) return b.intersectObjects([N], false);
    if (ne.visible = !!window.__hekatanGridPlaneXZ, Q.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanOrthoRaycast === true && Ce.visible) {
      const i = b.intersectObjects([Ce, $e, Ie], false);
      if (i.length > 0) return i;
    }
    const o = [N];
    return ne.visible && o.push(ne), Q.visible && o.push(Q), Rt.visible && Yt.length > 0 && o.push(...Yt), b.intersectObjects(o, false);
  }, oe = new Cn(new ye(), new Fn()), be = new Cn(new ye(), new Fn({ color: "gray", sizeAttenuation: false, size: 6 })), me = new Cn(new ye(), new Fn({ color: "orange", size: 0.1 }));
  u.add(me);
  const B = document.createElement("input");
  B.id = "hk-rubber-label", B.type = "text", B.spellcheck = false, B.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, B.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none", "pointer-events:none"].join(";") + ";", document.body.appendChild(B);
  let I = null, X = null, V = false;
  const F = new M(), $ = (n, o, i, t, r, s) => {
    const l = t - n, f = r - o, h = s - i, S = Math.hypot(l, f, h);
    if (S < 0.01) {
      B.style.display = "none";
      return;
    }
    I = [n, o, i], X = [l / S, f / S, h / S], F.set((n + t) / 2, (o + r) / 2, (i + s) / 2), F.project(m());
    const k = g.getBoundingClientRect(), d = k.left + (F.x * 0.5 + 0.5) * k.width, y = k.top + (-F.y * 0.5 + 0.5) * k.height;
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
  }, T = () => {
    B.style.display = "none", I = null, X = null, V = false, document.activeElement === B && B.blur();
  }, A = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      bt = n, fe(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), B.blur();
      return;
    }
    if (!I || !X || !e.polylines) return;
    let i = X[0], t = X[1], r = X[2];
    et === "x" ? (i = Math.sign(i) || 1, t = 0, r = 0) : et === "y" ? (i = 0, t = Math.sign(t) || 1, r = 0) : et === "z" && (i = 0, t = 0, r = Math.sign(r) || 1);
    const s = I[0] + i * n, l = I[1] + t * n, f = I[2] + r * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [s, l, f]];
    const h = e.polylines.rawVal, S = h.length ? h[h.length - 1] : [];
    e.polylines.val = [...h.slice(0, -1), [...S, e.points.rawVal.length - 1]], B.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    x();
  }, H = (n) => {
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
    x();
  };
  window.__hekatanTypeCoord = (n) => {
    var _a, _b, _c, _d;
    const o = H(n);
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
      const i = H(B.value);
      if (!i) return;
      if (V = false, i.kind === "length") A(i.L), fe(`\u270F DDE ${i.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = se(i);
        if (!t) return;
        j(t);
        const r = i.kind;
        fe(`\u270F ${r} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
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
  const J = document.createElement("div");
  J.id = "hk-coord-readout", J.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", J.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(J);
  const E = document.createElement("div");
  E.id = "hk-coord-fixed", E.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", E.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(E);
  const ie = new St(new ye().setFromPoints([new M(0, 0, 0), new M(0, 0, 0)]), new yn({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  ie.frustumCulled = false, ie.visible = false, u.add(ie);
  const Z = new St(new ye(), new it({ color: 2282478, transparent: true, opacity: 0.9 }));
  Z.frustumCulled = false, Z.visible = false, u.add(Z);
  let ce = [];
  const pe = new We(), ze = new Ke(new Wt(1, 1), new je({ color: 2282478, transparent: true, opacity: 0.08, side: vt, depthWrite: false })), we = new Xt(new Mo(new Wt(1, 1)), new it({ color: 2282478, transparent: true, opacity: 0.85 })), Ae = new Xt(new ye(), new it({ color: 2282478, transparent: true, opacity: 0.3 })), qe = (n, o) => {
    const i = [], t = Math.ceil(n / o);
    for (let r = -t; r <= t; r++) {
      const s = r * o;
      i.push(-n, s, 0, n, s, 0), i.push(s, -n, 0, s, n, 0);
    }
    Ae.geometry.dispose(), Ae.geometry = new ye(), Ae.geometry.setAttribute("position", new ft(i, 3));
  };
  pe.add(ze, we, Ae), pe.visible = false, pe.frustumCulled = false, u.add(pe);
  const lt = new We();
  lt.frustumCulled = false, lt.visible = false, u.add(lt);
  const ee = (n) => {
    const o = new ye().setFromPoints([new M(0, 0, 0), new M(0, 0, 0)]), i = new yn({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new St(o, i);
  }, C = ee(16711680), Y = ee(65280), L = ee(35071);
  lt.add(C, Y, L);
  const W = (n) => {
    const o = new ye().setFromPoints([new M(0, 0, 0), new M(0, 0, 0), new M(0, 0, 0), new M(0, 0, 0)]), i = new it({ color: n, transparent: true, opacity: 0.2, depthTest: false }), t = new Io(o, i);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, te = W(3462041), de = W(16724804), re = W(6333946), _e = new We();
  _e.frustumCulled = false, _e.visible = false, u.add(_e), _e.add(te, de, re);
  const Pe = (n) => {
    const o = new Wt(1, 1), i = new je({ color: n, transparent: true, opacity: 0.06, side: vt, depthWrite: false }), t = new Ke(o, i);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, Ce = Pe(3462041), $e = Pe(16724804), Ie = Pe(6333946);
  _e.add(Ce, $e, Ie);
  const Ne = (n, o, i, t) => {
    n.scale.set(2 * t, 2 * t, 1), i === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : i === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, Fe = document.createElement("div");
  Fe.id = "hk-refplane-badge", Fe.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(Fe), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, _e.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, i = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = i[i.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0], l = window.__hekatanOrthoExt ?? 8;
      Ue(te, s, "xy", l), Ue(de, s, "xz", l), Ue(re, s, "yz", l), Ne(Ce, s, "xy", l), Ne($e, s, "xz", l), Ne(Ie, s, "yz", l), Ce.material.opacity = 0.05, $e.material.opacity = 0.05, Ie.material.opacity = 0.05;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    x();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !_e.visible) {
      x();
      return;
    }
    const o = window.__hekatanOrthoAnchor, i = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = i[i.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0];
    Ue(te, s, "xy", n), Ue(de, s, "xz", n), Ue(re, s, "yz", n), Ne(Ce, s, "xy", n), Ne($e, s, "xz", n), Ne(Ie, s, "yz", n), x();
  };
  const rt = (n) => {
    if (Ce.material.opacity = n === "xy" ? 0.09 : 0.025, $e.material.opacity = n === "xz" ? 0.09 : 0.025, Ie.material.opacity = n === "yz" ? 0.09 : 0.025, n) {
      const r = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      Fe.style.background = r.bg, Fe.style.color = r.text, Fe.textContent = `\u25A6 Plano ${n.toUpperCase()}`, Fe.style.display = "block";
    } else Fe.style.display = "none";
  }, Ue = (n, o, i, t) => {
    let r;
    i === "xy" ? r = [new M(o[0] - t, o[1] - t, o[2]), new M(o[0] + t, o[1] - t, o[2]), new M(o[0] + t, o[1] + t, o[2]), new M(o[0] - t, o[1] + t, o[2]), new M(o[0] - t, o[1] - t, o[2])] : i === "xz" ? r = [new M(o[0] - t, o[1], o[2] - t), new M(o[0] + t, o[1], o[2] - t), new M(o[0] + t, o[1], o[2] + t), new M(o[0] - t, o[1], o[2] + t), new M(o[0] - t, o[1], o[2] - t)] : r = [new M(o[0], o[1] - t, o[2] - t), new M(o[0], o[1] + t, o[2] - t), new M(o[0], o[1] + t, o[2] + t), new M(o[0], o[1] - t, o[2] + t), new M(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(r);
  };
  let et = null;
  window.__hekatanAxisLock = () => et;
  let ot = null;
  const tt = document.createElement("div");
  tt.id = "hk-axis-lock-badge", tt.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "padding:4px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(20px,18px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(tt);
  const Lt = () => {
    if (!et) {
      tt.style.display = "none";
      return;
    }
    const n = { x: "#ff3344", y: "#34d399", z: "#60a5fa" };
    tt.style.background = "rgba(15,23,42,0.92)", tt.style.color = n[et], tt.style.border = `1.5px solid ${n[et]}`, tt.textContent = `\u{1F512} LOCK ${et.toUpperCase()}`, tt.style.display = "block";
  };
  window.addEventListener("keydown", (n) => {
    var _a, _b, _c, _d;
    const o = document.activeElement;
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== B) return;
    const i = n.key.toLowerCase(), t = (_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool;
    if (n.key === "Enter" && t === "polyarea" && ce.length >= 3) {
      const r = cn();
      fe(`\u2713 \xC1rea libre mallada \u2014 ${r} shells Q4 creados.`), n.preventDefault();
      return;
    }
    if (i === "x" || i === "y" || i === "z") et = et === i ? null : i, Lt(), n.preventDefault();
    else if (n.key === "Escape") {
      const r = document.activeElement;
      r && (r.tagName === "INPUT" || r.tagName === "TEXTAREA") && r.blur(), mo(), n.preventDefault();
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
  const Xe = new M(), Ee = new M(), Se = new M(), Ye = (n) => {
    if (!et) return null;
    const o = n[0], i = n[1], t = n[2];
    return et === "x" ? (Xe.set(o - 1e4, i, t), Ee.set(o + 1e4, i, t)) : et === "y" ? (Xe.set(o, i - 1e4, t), Ee.set(o, i + 1e4, t)) : (Xe.set(o, i, t - 1e4), Ee.set(o, i, t + 1e4)), b.ray.distanceSqToSegment(Xe, Ee, null, Se), Se;
  };
  window.__hekatanProjectOnAxis = Ye;
  const he = new St(new ye().setFromPoints([new M(0, 0, 0), new M(0, 0, 0)]), new it({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  he.renderOrder = 998, he.frustumCulled = false, he.visible = false, u.add(he);
  let Ze = -1, He = -1, dt = -1;
  const ge = /* @__PURE__ */ new Set();
  window.__hekatanSelection = ge;
  const Be = new St(new ye().setFromPoints([new M(), new M()]), new it({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  Be.renderOrder = 997, Be.frustumCulled = false, Be.visible = false, u.add(Be);
  const Je = new Ke(new rn(0.02, 12, 12), new je({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  Je.renderOrder = 998, Je.visible = false, u.add(Je);
  const pt = (n) => {
    const o = m();
    if (o.isOrthographicCamera) {
      const t = o, r = (t.top - t.bottom) / t.zoom;
      return Math.max(0.05, r * 6e-3);
    }
    const i = o.position.distanceTo(n);
    return Math.max(0.05, i / 10);
  }, Dt = () => {
    Je.visible && Je.scale.setScalar(pt(Je.position));
  }, ht = new We();
  ht.frustumCulled = false, u.add(ht);
  const zt = 2282478;
  let nt = null;
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
    for (const l of ge) {
      const [f, ...h] = l.split(":");
      if (f === "pt") {
        const S = n[+h[0]];
        if (!S) continue;
        const k = new Ke(new rn(0.025, 12, 12), new je({ color: zt, transparent: true, opacity: 0.9, depthTest: false }));
        k.position.set(S[0], S[1], S[2]), k.renderOrder = 999, k.__isSelectionPt = true, ht.add(k);
      } else if (f === "seg") {
        const S = o[+h[0]], k = n[S == null ? void 0 : S[+h[1]]], d = n[S == null ? void 0 : S[+h[1] + 1]];
        if (!k || !d) continue;
        const y = new ye().setFromPoints([new M(k[0], k[1], k[2]), new M(d[0], d[1], d[2])]), P = new St(y, new it({ color: zt, transparent: true, opacity: 0.95, depthTest: false }));
        P.renderOrder = 999, ht.add(P);
      } else if (f === "poly") {
        const k = o[+h[0]].map((P) => {
          const U = n[P];
          return U ? new M(U[0], U[1], U[2]) : null;
        }).filter(Boolean);
        if (k.length < 2) continue;
        const d = new ye().setFromPoints(k), y = new St(d, new it({ color: zt, transparent: true, opacity: 0.95, depthTest: false }));
        y.renderOrder = 999, ht.add(y);
      } else if (f === "aux") {
        const S = t[+h[0]];
        if (!S || S.length !== 6) continue;
        const k = new ye().setFromPoints([new M(S[0], S[1], S[2]), new M(S[3], S[4], S[5])]), d = new St(k, new it({ color: zt, transparent: true, opacity: 0.95, depthTest: false }));
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
    x();
  };
  window.__hekatanRefreshSelection = Bt, window.__hekatanClearSelection = () => {
    ge.clear(), Bt();
  };
  const tn = (n, o, i, t, r, s, l, f, h) => {
    const S = l - t, k = f - r, d = h - s, y = S * S + k * k + d * d;
    if (y < 1e-12) return Math.hypot(n - t, o - r, i - s);
    let P = ((n - t) * S + (o - r) * k + (i - s) * d) / y;
    P = Math.max(0, Math.min(1, P));
    const U = t + P * S, K = r + P * k, q = s + P * d;
    return Math.hypot(n - U, o - K, i - q);
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
  }, $n = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      he.visible = false;
      return;
    }
    he.geometry.setFromPoints([new M(t[0], t[1], t[2]), new M(t[3], t[4], t[5])]), he.visible = true;
  }, In = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const i = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!i || i.length < 2) {
      he.visible = false;
      return;
    }
    const r = ((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false, s = [];
    if (r || o < 0 || o >= i.length - 1) for (const l of i) {
      const f = t[l];
      f && s.push(new M(f[0], f[1], f[2]));
    }
    else {
      const l = t[i[o]], f = t[i[o + 1]];
      l && s.push(new M(l[0], l[1], l[2])), f && s.push(new M(f[0], f[1], f[2]));
    }
    he.geometry.setFromPoints(s), he.visible = true;
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
    e.points.val = l, e.polylines.val = f, e.areas && (e.areas.val = e.areas.rawVal.filter((h) => h !== n).map((h) => h > n ? h - 1 : h)), he.visible = false, Ze = -1, He = -1;
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
  }, Ln = (n, o) => {
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
    he.visible = false, Ze = -1, He = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  oe.geometry.setAttribute("position", new ft(e.points.rawVal.flat(), 3)), oe.geometry.computeBoundingSphere(), oe.frustumCulled = false, be.frustumCulled = false, u.add(be), N.position.set(0, 0, 0), N.rotateX(Math.PI / 2), N.geometry.rotateX(Math.PI / 2), N.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, i) => {
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
    const r = Math.max(4, Math.round(t)), s = new M(...n), l = new M(...o), f = new M(...i), h = new M().subVectors(l, s), S = new M().subVectors(f, s), k = new M().crossVectors(h, S).normalize(), d = new M().addVectors(s, l).multiplyScalar(0.5), y = new M().addVectors(l, f).multiplyScalar(0.5), P = new M().crossVectors(h, k).normalize(), U = new M().crossVectors(new M().subVectors(f, l), k).normalize(), K = new M().subVectors(y, d), q = P.x * U.y - P.y * U.x;
    let R;
    if (Math.abs(q) > 1e-9) {
      const De = (K.x * U.y - K.y * U.x) / q;
      R = new M().addVectors(d, P.clone().multiplyScalar(De));
    } else R = d.clone();
    const ae = s.distanceTo(R), le = new M().subVectors(s, R), xe = new M().subVectors(f, R), Le = Math.acos(Math.max(-1, Math.min(1, le.dot(xe) / (ae * ae)))), ve = e.points.rawVal.length, Me = [], wt = k.clone();
    for (let De = 0; De <= r; De++) {
      const Ve = De / r, Ge = Le * Ve, st = new Jn().setFromAxisAngle(wt, Ge), yt = le.clone().applyQuaternion(st).add(R);
      Me.push([yt.x, yt.y, yt.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...Me], e.polylines) {
      const De = Me.map((Ge, st) => ve + st), Ve = e.polylines.rawVal;
      e.polylines.val = [...Ve.slice(0, -1), De, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, i = 1, t = 6, r = 6) => {
    const s = Math.min(n[0], o[0]), l = Math.max(n[0], o[0]), f = Math.min(n[1], o[1]), h = Math.max(n[1], o[1]), S = (n[2] + o[2]) / 2, k = l - s, d = h - f, y = Math.min(i, k / 2 - 0.01, d / 2 - 0.01);
    if (y <= 0) return;
    const P = e.points.rawVal.length, U = [], K = [], q = (R, ae) => {
      U.push([R, ae, S]), K.push(P + U.length - 1);
    };
    for (let R = 0; R <= r; R++) q(s + y + (k - 2 * y) * R / r, f);
    for (let R = 1; R <= t; R++) {
      const ae = -Math.PI / 2 + Math.PI / 2 * R / t;
      q(l - y + y * Math.cos(ae), f + y + y * Math.sin(ae));
    }
    for (let R = 1; R <= r; R++) q(l, f + y + (d - 2 * y) * R / r);
    for (let R = 1; R <= t; R++) {
      const ae = 0 + Math.PI / 2 * R / t;
      q(l - y + y * Math.cos(ae), h - y + y * Math.sin(ae));
    }
    for (let R = 1; R <= r; R++) q(l - y - (k - 2 * y) * R / r, h);
    for (let R = 1; R <= t; R++) {
      const ae = Math.PI / 2 + Math.PI / 2 * R / t;
      q(s + y + y * Math.cos(ae), h - y + y * Math.sin(ae));
    }
    for (let R = 1; R <= r; R++) q(s, h - y - (d - 2 * y) * R / r);
    for (let R = 1; R <= t; R++) {
      const ae = Math.PI + Math.PI / 2 * R / t;
      q(s + y + y * Math.cos(ae), f + y + y * Math.sin(ae));
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
      const k = e.gridTarget.rawVal, d = new xn(...k.rotation), y = new M(1, 0, 0).applyEuler(d), P = new M(0, 1, 0).applyEuler(d), U = new M(...k.position), K = new M(t, r, s), q = new M(l, f, h), R = K.clone().sub(U).dot(y), ae = K.clone().sub(U).dot(P), le = q.clone().sub(U).dot(y), xe = q.clone().sub(U).dot(P), Le = (ve, Me) => U.clone().addScaledVector(y, ve).addScaledVector(P, Me).toArray();
      S = [Le(R, ae), Le(le, ae), Le(le, xe), Le(R, xe)];
    } else Math.abs(s - h) < 1e-6 ? S = [[t, r, s], [l, r, s], [l, f, s], [t, f, s]] : Math.abs(r - f) < 1e-6 ? S = [[t, r, s], [l, r, s], [l, r, h], [t, r, h]] : S = [[t, r, s], [t, f, s], [t, f, h], [t, r, h]];
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...S], e.polylines) {
      const k = e.polylines.rawVal, d = k.length - 1, y = [i, i + 1, i + 2, i + 3, i];
      e.polylines.val = [...k.slice(0, -1), y, []], e.areas && (e.areas.val = [...e.areas.rawVal, d]);
    }
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    x();
  }, window.__hekatanMeshPolyArea = (n, o) => {
    var _a;
    const i = n.length;
    if (i < 3) return 0;
    let t = 0, r = 0, s = 0;
    for (let ke = 0; ke < i; ke++) {
      const Re = n[ke], Oe = n[(ke + 1) % i];
      t += (Re[1] - Oe[1]) * (Re[2] + Oe[2]), r += (Re[2] - Oe[2]) * (Re[0] + Oe[0]), s += (Re[0] - Oe[0]) * (Re[1] + Oe[1]);
    }
    const l = Math.hypot(t, r, s) || 1;
    t /= l, r /= l, s /= l;
    let f = n[1][0] - n[0][0], h = n[1][1] - n[0][1], S = n[1][2] - n[0][2];
    const k = Math.hypot(f, h, S) || 1;
    f /= k, h /= k, S /= k;
    let d = r * S - s * h, y = s * f - t * S, P = t * h - r * f;
    const U = Math.hypot(d, y, P) || 1;
    d /= U, y /= U, P /= U;
    const K = n[0], q = (ke) => [(ke[0] - K[0]) * f + (ke[1] - K[1]) * h + (ke[2] - K[2]) * S, (ke[0] - K[0]) * d + (ke[1] - K[1]) * y + (ke[2] - K[2]) * P], R = (ke, Re) => [K[0] + ke * f + Re * d, K[1] + ke * h + Re * y, K[2] + ke * S + Re * P], ae = n.map(q);
    let le = 1 / 0, xe = -1 / 0, Le = 1 / 0, ve = -1 / 0;
    for (const [ke, Re] of ae) ke < le && (le = ke), ke > xe && (xe = ke), Re < Le && (Le = Re), Re > ve && (ve = Re);
    const Me = xe - le, wt = ve - Le;
    if (Me < 1e-6 || wt < 1e-6) return 0;
    let De = o && o > 0 ? o : 0.5;
    for (; Me / De * (wt / De) > 2500; ) De *= 2;
    De = Math.min(De, Math.min(Me, wt));
    const Ve = (ke, Re) => {
      let Oe = false;
      for (let Et = 0, Kt = ae.length - 1; Et < ae.length; Kt = Et++) {
        const [an, mn] = ae[Et], [ln, wn] = ae[Kt];
        mn > Re != wn > Re && ke < (ln - an) * (Re - mn) / (wn - mn) + an && (Oe = !Oe);
      }
      return Oe;
    }, Ge = Math.max(1, Math.round(Me / De)), st = Math.max(1, Math.round(wt / De)), yt = Me / Ge, Pt = wt / st, Ut = /* @__PURE__ */ new Map(), $t = [], xt = e.points.rawVal.length, At = (ke, Re) => {
      const Oe = ke + "," + Re, Et = Ut.get(Oe);
      if (Et !== void 0) return Et;
      const Kt = xt + $t.length;
      return $t.push(R(le + ke * yt, Le + Re * Pt)), Ut.set(Oe, Kt), Kt;
    }, _t = [];
    for (let ke = 0; ke < Ge; ke++) for (let Re = 0; Re < st; Re++) {
      if (!Ve(le + (ke + 0.5) * yt, Le + (Re + 0.5) * Pt)) continue;
      const Oe = At(ke, Re), Et = At(ke + 1, Re), Kt = At(ke + 1, Re + 1), an = At(ke, Re + 1);
      _t.push([Oe, Et, Kt, an]);
    }
    if (!_t.length) return 0;
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...$t], e.polylines && e.areas) {
      let ke = e.polylines.rawVal.slice();
      ke.length && ke[ke.length - 1].length === 0 && (ke = ke.slice(0, -1));
      const Re = [];
      for (const Oe of _t) Re.push(ke.length), ke.push([Oe[0], Oe[1], Oe[2], Oe[3], Oe[0]]);
      ke.push([]), e.polylines.val = ke, e.areas.val = [...e.areas.rawVal, ...Re];
    }
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    return x(), _t.length;
  };
  const cn = () => {
    if (ce.length < 3) return ce = [], Z.visible = false, x(), 0;
    const n = window.__hekatanMeshPolyArea(ce.slice());
    return ce = [], Z.visible = false, x(), n;
  };
  window.__hekatanFinalizePolyArea = cn, window.__hekatanSetInclinedPlaneFrom3 = (n, o, i) => {
    var _a;
    const t = new M(n[0], n[1], n[2]), r = new M(o[0], o[1], o[2]), s = new M(i[0], i[1], i[2]), l = new M().subVectors(r, t).cross(new M().subVectors(s, t));
    if (l.lengthSq() < 1e-9) return false;
    l.normalize();
    const f = new Jn().setFromUnitVectors(new M(0, 0, 1), l), h = new xn().setFromQuaternion(f);
    e.gridTarget && (e.gridTarget.val = { position: [t.x, t.y, t.z], rotation: [h.x, h.y, h.z] }), _ = true;
    const S = new M().addVectors(t, r).add(s).multiplyScalar(1 / 3), k = Math.max(t.distanceTo(r), t.distanceTo(s), r.distanceTo(s)) * 2.2 + 4, d = k / 2;
    ze.geometry.dispose(), ze.geometry = new Wt(k, k), we.geometry.dispose(), we.geometry = new Mo(new Wt(k, k)), qe(d, 1), pe.position.copy(S), pe.quaternion.copy(f), pe.scale.set(1, 1, 1), pe.visible = true;
    try {
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
    } catch {
    }
    return x(), true;
  }, window.__hekatanResetPlaneXY = () => {
    e.gridTarget && (e.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, 0] }), _ = false, pe.visible = false, x();
  };
  const Ct = new We();
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
      const q = K.getContext("2d");
      q.fillStyle = U, q.font = "bold 22px sans-serif", q.textAlign = "center", q.fillText(k, 32, 26);
      const R = new bo(K), ae = new _o({ map: R, transparent: true }), le = new So(ae);
      return le.position.set(d, y, P), le.scale.set(1.2, 0.6, 1), le;
    };
    n.forEach((k, d) => {
      const y = d < h.length ? h[d] : `X${d}`, P = new ye().setFromPoints([new M(k, r, 0), new M(k, s, 0), new M(k, r, 0), new M(k, r, i)]), U = new yn({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), K = new Xt(P, U);
      K.computeLineDistances(), Ct.add(K), Ct.add(S(y, k, r - 0.5, 0, "#60a5fa")), Ct.add(S(y, k, s + 0.5, 0, "#60a5fa"));
    }), o.forEach((k, d) => {
      const y = `${d + 1}`, P = new ye().setFromPoints([new M(l, k, 0), new M(f, k, 0), new M(l, k, 0), new M(l, k, i)]), U = new yn({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), K = new Xt(P, U);
      K.computeLineDistances(), Ct.add(K), Ct.add(S(y, l - 0.5, k, 0, "#fb7185")), Ct.add(S(y, f + 0.5, k, 0, "#fb7185"));
    }), Ct.visible = true, x();
  }, window.__hekatanHideAxes = () => {
    Ct.visible = false, x();
  };
  const Rt = new We();
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
      const f = r[l % r.length], h = o / 2, S = [new M(i - h, t - h, s), new M(i + h, t - h, s), new M(i + h, t + h, s), new M(i - h, t + h, s), new M(i - h, t - h, s)], k = new ye().setFromPoints(S), d = new it({ color: f, transparent: true, opacity: 0.55 });
      Rt.add(new St(k, d));
      const y = document.createElement("canvas");
      y.width = 128, y.height = 32;
      const P = y.getContext("2d");
      P.fillStyle = `#${f.toString(16).padStart(6, "0")}`, P.font = "bold 18px sans-serif", P.fillText(`Z = ${s} m`, 4, 22);
      const U = new bo(y), K = new _o({ map: U, transparent: true }), q = new So(K);
      q.position.set(i - h - 1.5, t - h - 1.5, s), q.scale.set(2.5, 0.6, 1), Rt.add(q);
      const R = new Wt(1e4, 1e4), ae = new je({ visible: false, side: vt }), le = new Ke(R, ae);
      le.position.set(0, 0, s), le.frustumCulled = false, le.userData = { refPlaneZ: s }, u.add(le), Yt.push(le);
    }), Rt.visible = true, x();
  }, window.__hekatanHideRefPlanes = () => {
    Rt.visible = false, Yt.forEach((n) => {
      n.visible = false;
    }), x();
  };
  const Qt = new We();
  Qt.frustumCulled = false, u.add(Qt);
  const Bn = () => {
    var _a, _b, _c, _d;
    for (; Qt.children.length; ) {
      const i = Qt.children.pop();
      (_b = (_a = i.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = i.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const i of o) {
      if (i.length !== 6) continue;
      const t = new ye().setFromPoints([new M(i[0], i[1], i[2]), new M(i[3], i[4], i[5])]), r = new yn({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), s = new St(t, r);
      s.computeLineDistances(), Qt.add(s);
    }
  };
  D.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, Bn(), x());
  });
  const Nt = new We();
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
      const t = new Ke(new rn(0.025, 12, 12), new je({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(i[0], i[1], i[2]), t.renderOrder = 996, t.scale.setScalar(pt(t.position)), Nt.add(t);
    }
  };
  D.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, dn(), x());
  }), c.addEventListener("change", () => {
    Nt.children.forEach((n) => {
      n.scale.setScalar(pt(n.position));
    });
  }), window.__hekatanRenderAuxPoints = dn;
  const mt = new We(), Zo = new Ke(new rn(0.01, 12, 12), new je({ color: 16724804, transparent: true, opacity: 0.95 })), Uo = new Ke(new rn(0.015, 12, 12), new je({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  mt.add(Zo, Uo);
  const on = 0.08, Rn = (n, o, i) => {
    const t = new ye().setFromPoints([new M(...n), new M(...o)]);
    return new St(t, new it({ color: i, transparent: true, opacity: 0.7 }));
  };
  mt.add(Rn([-on, 0, 0], [on, 0, 0], 16711680)), mt.add(Rn([0, -on, 0], [0, on, 0], 65280)), mt.add(Rn([0, 0, -on], [0, 0, on], 35071)), mt.visible = false, mt.frustumCulled = false, u.add(mt);
  const io = 40, Ko = 2.5, Xn = () => {
    if (!mt.visible) return;
    const o = m().position.distanceTo(mt.position), i = Math.max(0.05, Math.min(Ko, o / io));
    mt.scale.setScalar(i);
  }, lo = () => {
    ht.children.length !== 0 && ht.children.forEach((n) => {
      if (!n.__isSelectionPt) return;
      const o = n;
      o.scale.setScalar(pt(o.position) * 1.8);
    });
  };
  window.__hekatanUpdateSelectionPtScale = lo, c.addEventListener("change", () => {
    Xn(), Je.visible && Dt();
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = m().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / io));
    }
    lo();
  }), window.__hekatanShowSnap = (n, o, i) => {
    mt.position.set(n, o, i), mt.visible = true, Xn(), x();
  }, window.__hekatanHideSnap = () => {
    mt.visible = false, x();
  }, g.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q;
    const o = v(n);
    if (!o) return;
    b.setFromCamera(z, o);
    const i = O();
    if (i.length) {
      const t = i[0].point, r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, r);
      if (s) uo(s.type, s.x, s.y, s.z), mt.position.set(s.x, s.y, s.z), mt.visible = true, t.set(s.x, s.y, s.z);
      else {
        Nn();
        const k = window.__hekatanSnapEnabled !== false, d = window.__hekatanSnap2D ?? 0.5;
        k && d > 0 && (t.x = Math.round(t.x / d) * d, t.y = Math.round(t.y / d) * d, t.z = Math.round(t.z / d) * d), mt.position.copy(t), mt.visible = true;
      }
      Xn();
      const l = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (l === "select" || !l) {
        const k = (window.__hekatanSnap2D ?? 0.5) * 1.5, d = Ht(t.x, t.y, t.z, k), y = qt(t.x, t.y, t.z, k), P = Jt(t.x, t.y, t.z, k);
        if (d >= 0) {
          const R = e.points.rawVal[d];
          Je.position.set(R[0], R[1], R[2]), Je.visible = true, Dt(), Be.visible = false, nt = { kind: "pt", a: d };
        } else if (y) {
          const R = e.points.rawVal, ae = e.polylines.rawVal[y.polyIdx], le = R[ae[y.segIdx]], xe = R[ae[y.segIdx + 1]];
          Be.geometry.setFromPoints([new M(le[0], le[1], le[2]), new M(xe[0], xe[1], xe[2])]), Be.visible = true, Je.visible = false, nt = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(y.polyIdx)) ?? false ? { kind: "poly", a: y.polyIdx } : { kind: "seg", a: y.polyIdx, b: y.segIdx };
        } else if (P >= 0) {
          const ae = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[P];
          ae && (Be.geometry.setFromPoints([new M(ae[0], ae[1], ae[2]), new M(ae[3], ae[4], ae[5])]), Be.visible = true, Je.visible = false, nt = { kind: "aux", a: P });
        } else Be.visible = false, Je.visible = false, nt = null;
        J.style.left = n.clientX + "px", J.style.top = n.clientY + "px", J.style.display = "block";
        let U = t;
        if ((nt == null ? void 0 : nt.kind) === "pt") {
          const R = e.points.rawVal[nt.a];
          R && (U = new M(R[0], R[1], R[2]));
        }
        const K = `X=${U.x.toFixed(2)} Y=${U.y.toFixed(2)} Z=${U.z.toFixed(2)}`;
        if (nt) {
          const R = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          J.textContent = `${K}  \xB7  \u{1F5B1} Click \u2192 ${R[nt.kind]}`;
        } else J.textContent = K;
        const q = document.getElementById("hk-coord-fixed");
        q && (q.textContent = K), ie.visible = false, lt.visible = false, x();
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
        P ? (dt = y, Ze = -1, He = -1, $n(y)) : d ? (Ze = d.polyIdx, He = d.segIdx, dt = -1, In(d.polyIdx, d.segIdx)) : (Ze = -1, He = -1, dt = -1, he.visible = false), ie.visible = false, lt.visible = false, T(), J.style.left = n.clientX + "px", J.style.top = n.clientY + "px", J.style.display = "block";
        const U = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let K = "";
        P ? K = `\u{1F5D1} l\xEDnea aux #${dt + 1}` : d ? K = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(d.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${d.polyIdx + 1}` : `\u{1F5D1} seg ${d.segIdx + 1} / poly #${d.polyIdx + 1}` : K = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", J.textContent = `${U}  \xB7  ${K}`;
        const q = document.getElementById("hk-coord-fixed");
        q && (q.textContent = U), x();
        return;
      } else he.visible = false, Ze = -1, dt = -1;
      J.style.left = n.clientX + "px", J.style.top = n.clientY + "px", J.style.display = "block";
      const f = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], h = f[f.length - 1] ?? [], S = e.points.rawVal ?? [];
      if (h.length > 0 && S[h[h.length - 1]]) {
        const k = h[h.length - 1], d = S[k];
        let y = et;
        if (ot = null, !y && window.__hekatanAxisSnap !== false) {
          const Ve = g.getBoundingClientRect(), Ge = n.clientX, st = n.clientY, yt = ((_k = settings.gridSize) == null ? void 0 : _k.rawVal) ?? 10, Pt = new M(d[0], d[1], d[2]), Ut = [["x", new M(1, 0, 0)], ["y", new M(0, 1, 0)], ["z", new M(0, 0, 1)]], $t = (At) => {
            const _t = At.clone().project(o);
            return { x: (_t.x * 0.5 + 0.5) * Ve.width + Ve.left, y: (-_t.y * 0.5 + 0.5) * Ve.height + Ve.top };
          };
          let xt = null;
          for (const [At, _t] of Ut) {
            const ke = $t(Pt.clone().addScaledVector(_t, -yt)), Re = $t(Pt.clone().addScaledVector(_t, yt)), Oe = Re.x - ke.x, Et = Re.y - ke.y, Kt = Ge - ke.x, an = st - ke.y, mn = Oe * Oe + Et * Et || 1;
            let ln = (Kt * Oe + an * Et) / mn;
            ln = Math.max(0, Math.min(1, ln));
            const wn = Math.hypot(Ge - (ke.x + ln * Oe), st - (ke.y + ln * Et));
            if (xt === null || wn < xt.dpx) {
              const Gn = b.ray, wo = Pt.clone().sub(Gn.origin), Wn = _t.dot(Gn.direction), yo = _t.dot(wo), Qo = Gn.direction.dot(wo), xo = 1 - Wn * Wn, Oo = Math.abs(xo) < 1e-6 ? -yo : (Wn * Qo - yo) / xo;
              xt = { axis: At, dpx: wn, pt: Pt.clone().addScaledVector(_t, Oo) };
            }
          }
          xt && xt.dpx <= 12 && (t.copy(xt.pt), y = xt.axis, ot = xt.pt.clone());
        }
        const P = !!window.__hekatanOrthoMode;
        if (!y && P) {
          const Ve = Math.abs(t.x - d[0]), Ge = Math.abs(t.y - d[1]), st = Math.abs(t.z - d[2]), yt = (_l = i[0]) == null ? void 0 : _l.object;
          let Pt = null;
          yt === Ce ? Pt = "xy" : yt === $e ? Pt = "xz" : yt === Ie && (Pt = "yz"), Pt === "xy" ? y = Ve >= Ge ? "x" : "y" : Pt === "xz" ? y = Ve >= st ? "x" : "z" : Pt === "yz" ? y = Ge >= st ? "y" : "z" : y = Ve >= Ge && Ve >= st ? "x" : Ge >= st ? "y" : "z";
        }
        const U = window.__hekatanPolarTrack !== false;
        if (!y && U) {
          const Ve = t.x - d[0], Ge = t.y - d[1], st = t.z - d[2], yt = Math.hypot(Ve, Ge, st);
          if (yt > 1e-3) {
            const Ut = Math.tan(6 * Math.PI / 180) * yt, $t = Math.hypot(Ge, st), xt = Math.hypot(Ve, st), At = Math.hypot(Ve, Ge), _t = [["x", $t], ["y", xt], ["z", At]];
            _t.sort((ke, Re) => ke[1] - Re[1]), _t[0][1] <= Ut && (y = _t[0][0]);
          }
        }
        if (y) {
          const Ve = d[0], Ge = d[1], st = d[2];
          y === "x" ? t.set(t.x, Ge, st) : y === "y" ? t.set(Ve, t.y, st) : t.set(Ve, Ge, t.z);
          const yt = !!et, Ut = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[y];
          tt.style.background = "rgba(15,23,42,0.92)", tt.style.color = Ut, tt.style.border = `1.5px solid ${Ut}`;
          const $t = (_m = i[0]) == null ? void 0 : _m.object;
          let xt = null;
          $t === Ce ? xt = "xy" : $t === $e ? xt = "xz" : $t === Ie && (xt = "yz");
          const At = xt ? ` (plano ${xt.toUpperCase()})` : "";
          tt.textContent = yt ? `\u{1F512} LOCK ${y.toUpperCase()}${At}` : `\u22A5 ORTO ${y.toUpperCase()}${At}`, tt.style.left = n.clientX + 20 + "px", tt.style.top = n.clientY + 18 + "px", tt.style.transform = "none", tt.style.display = "block";
        } else et || (tt.style.display = "none");
        const K = Math.hypot(t.x - d[0], t.y - d[1], t.z - d[2]), q = Math.atan2(t.y - d[1], t.x - d[0]) * 180 / Math.PI, R = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        J.textContent = `${R} | \u0394L=${K.toFixed(2)}m ${q.toFixed(0)}\xB0`;
        const ae = document.getElementById("hk-coord-fixed");
        ae && (ae.textContent = R), ie.geometry.setFromPoints([new M(d[0], d[1], d[2]), new M(t.x, t.y, t.z)]), (_n2 = ie.computeLineDistances) == null ? void 0 : _n2.call(ie), ie.visible = true, $(d[0], d[1], d[2], t.x, t.y, t.z);
        const le = window.__hekatanOrthoExt ?? 8, xe = window.__hekatanShowOrthoPlanes !== false;
        _e.visible = xe, xe || rt(null), xe && (Ue(te, d, "xy", le), Ue(de, d, "xz", le), Ue(re, d, "yz", le), Ne(Ce, d, "xy", le), Ne($e, d, "xz", le), Ne(Ie, d, "yz", le));
        const Le = xe ? b.intersectObjects([Ce, $e, Ie], false) : [];
        let ve = null;
        if (Le.length > 0) {
          const Ve = Le[0].object;
          Ve === Ce ? ve = "xy" : Ve === $e ? ve = "xz" : Ve === Ie && (ve = "yz");
        }
        rt(ve), ve && (Fe.style.left = n.clientX + "px", Fe.style.top = n.clientY + "px"), C.geometry.setFromPoints([new M(d[0] - le, d[1], d[2]), new M(d[0] + le, d[1], d[2])]), (_o2 = C.computeLineDistances) == null ? void 0 : _o2.call(C), Y.geometry.setFromPoints([new M(d[0], d[1] - le, d[2]), new M(d[0], d[1] + le, d[2])]), (_p = Y.computeLineDistances) == null ? void 0 : _p.call(Y), L.geometry.setFromPoints([new M(d[0], d[1], d[2] - le), new M(d[0], d[1], d[2] + le)]), (_q = L.computeLineDistances) == null ? void 0 : _q.call(L), lt.visible = true;
        const Me = C.material, wt = Y.material, De = L.material;
        y === "x" ? (Me.opacity = 0.95, wt.opacity = 0.1, De.opacity = 0.1) : y === "y" ? (Me.opacity = 0.1, wt.opacity = 0.95, De.opacity = 0.1) : y === "z" ? (Me.opacity = 0.1, wt.opacity = 0.1, De.opacity = 0.95) : (Me.opacity = 0.5, wt.opacity = 0.5, De.opacity = 0.5);
      } else {
        const k = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        J.textContent = k;
        const d = document.getElementById("hk-coord-fixed");
        if (d && (d.textContent = k), ie.visible = false, lt.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(l)) {
          if (I = null, X = null, B.style.left = n.clientX + 20 + "px", B.style.top = n.clientY - 28 + "px", B.style.display = "block", !V) {
            B.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const P = document.activeElement;
            !(P && (P.tagName === "INPUT" || P.tagName === "TEXTAREA") && P !== B) && document.activeElement !== B && B.focus({ preventScroll: true });
            try {
              B.select();
            } catch {
            }
          }
        } else T();
      }
      x();
    } else Nn(), J.style.display = "none", mt.visible = false, ie.visible = false, lt.visible = false, T(), x();
  }), D.derive(() => {
    if (!e.gridTarget) return;
    Ds(a, { position: new M(...e.gridTarget.val.position), quaternion: new Jn().setFromEuler(new xn(...e.gridTarget.val.rotation)) }, x), N.position.set(...e.gridTarget.val.position), N.quaternion.setFromEuler(new xn(...e.gridTarget.val.rotation)), N.updateMatrixWorld();
    const n = new M(0, 0, 1).applyEuler(new xn(...e.gridTarget.val.rotation));
    _ = !(Math.abs(n.x) > 0.999 || Math.abs(n.y) > 0.999 || Math.abs(n.z) > 0.999);
  }), D.derive(() => {
    oe.geometry.setAttribute("position", new ft(e.points.val.flat(), 3)), oe.geometry.computeBoundingSphere();
  }), D.derive(() => {
    const n = 0.05 * w * 0.5 * p.val;
    b.params.Points.threshold = 0.4 * n;
  }), D.derive(() => {
    var _a;
    const n = e.points.val ?? [], i = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const s of i) {
      const [l, f, h] = n[s];
      t.push(l, f, h);
    }
    const r = new ye();
    r.setAttribute("position", new ft(t, 3)), me.geometry.dispose(), me.geometry = r;
  });
  let Dn = false, Ot = 0;
  g.addEventListener("pointerdown", () => {
    Dn = true;
  }), g.addEventListener("pointerup", () => {
    Dn = false;
  }), g.addEventListener("pointermove", () => {
    Dn && Ot++;
  });
  const kt = document.createElement("div");
  kt.id = "hk-window-select", kt.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(kt);
  let Tt = null, pn = false, Vt = null;
  const Yn = (n, o, i, t, r) => {
    r ? (kt.style.borderColor = "#34d399", kt.style.borderStyle = "dashed", kt.style.background = "rgba(52, 211, 153, 0.10)") : (kt.style.borderColor = "#22d3ee", kt.style.borderStyle = "solid", kt.style.background = "rgba(34, 211, 238, 0.10)"), kt.style.left = Math.min(n, i) + "px", kt.style.top = Math.min(o, t) + "px", kt.style.width = Math.abs(i - n) + "px", kt.style.height = Math.abs(t - o) + "px", kt.style.display = "block";
  }, ro = (n, o, i, t, r) => {
    var _a, _b, _c, _d;
    const s = Math.min(n, i), l = Math.max(n, i), f = Math.min(o, t), h = Math.max(o, t), S = i < n, k = g.getBoundingClientRect(), d = m();
    d.updateMatrixWorld();
    const y = (ve) => {
      const Me = new M(ve[0], ve[1], ve[2]);
      return Me.project(d), { x: k.left + (Me.x * 0.5 + 0.5) * k.width, y: k.top + (-Me.y * 0.5 + 0.5) * k.height };
    }, P = (ve) => ve.x >= s && ve.x <= l && ve.y >= f && ve.y <= h, U = (ve, Me) => !(ve.x < s && Me.x < s || ve.x > l && Me.x > l || ve.y < f && Me.y < f || ve.y > h && Me.y > h);
    r || ge.clear();
    let K = 0;
    const q = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let ve = 0; ve < q.length; ve++) {
      const Me = q[ve];
      Me && P(y(Me)) && (ge.add(`pt:${ve}`), K++);
    }
    const R = (ve, Me) => S ? P(ve) || P(Me) || U(ve, Me) : P(ve) && P(Me), ae = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], le = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let ve = 0; ve < ae.length; ve++) {
      const Me = ae[ve];
      if (le.includes(ve)) {
        let De;
        if (!S) De = Me.every((Ve) => {
          const Ge = q[Ve];
          return !!Ge && P(y(Ge));
        });
        else {
          De = false;
          for (let Ve = 0; Ve < Me.length - 1; Ve++) {
            const Ge = q[Me[Ve]], st = q[Me[Ve + 1]];
            if (!(!Ge || !st) && R(y(Ge), y(st))) {
              De = true;
              break;
            }
          }
        }
        De && (ge.add(`poly:${ve}`), K++);
      } else for (let De = 0; De < Me.length - 1; De++) {
        const Ve = q[Me[De]], Ge = q[Me[De + 1]];
        !Ve || !Ge || R(y(Ve), y(Ge)) && (ge.add(`seg:${ve}:${De}`), K++);
      }
    }
    const Le = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let ve = 0; ve < Le.length; ve++) {
      const Me = Le[ve];
      if (!Me || Me.length !== 6) continue;
      const wt = y([Me[0], Me[1], Me[2]]), De = y([Me[3], Me[4], Me[5]]);
      R(wt, De) && (ge.add(`aux:${ve}`), K++);
    }
    Bt(), fe(`${S ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${K} item(s) ${r ? "agregados a" : "\u2192"} selecci\xF3n (total ${ge.size})`), kt.style.display = "none";
  }, bn = () => {
    Vt && (Vt = null, kt.style.display = "none", fe("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = bn, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && Vt && bn();
  });
  const co = () => {
    var _a, _b, _c, _d;
    if (ge.size === 0) return false;
    const n = [...ge], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], i = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? [], l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Set();
    for (const U of n) {
      const [K, ...q] = U.split(":");
      if (K === "pt") l.add(+q[0]);
      else if (K === "poly") f.add(+q[0]);
      else if (K === "seg") {
        const R = +q[0], ae = +q[1];
        h.has(R) || h.set(R, /* @__PURE__ */ new Set()), h.get(R).add(ae);
      } else K === "aux" && S.add(+q[0]);
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
        let q = [];
        for (let R = 0; R < i[U].length; R++) q.push(i[U][R]), R < i[U].length - 1 && K.has(R) && (q.length >= 2 && d.push(q), q = [], k++);
        (q.length >= 2 || q.length === 1) && d.push(q);
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
      const q = [];
      for (const R of d) {
        let ae = [];
        for (const le of R) {
          const xe = K.get(le);
          xe === void 0 ? (ae.length >= 2 && q.push(ae), ae = []) : ae.push(xe);
        }
        ae.length >= 2 && q.push(ae);
      }
      d = q, e.points.val = U;
    }
    for (const U of t) {
      const K = P.get(U);
      K !== void 0 && K < d.length && y.push(K);
    }
    if (e.polylines && (e.polylines.val = d), e.areas && (e.areas.val = y), S.size > 0 && r) {
      const U = s.filter((K, q) => !S.has(q));
      "val" in r ? r.val = U : window.__hekatanDrawingAuxLines = U, k += S.size;
    }
    ge.clear(), Bt();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return fe(`\u{1F5D1} ${k} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = co, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement, i = o && (o.id === "hk3-cmd-input" || o.id === "hk-dyn-input") && o.value === "";
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && !i || ge.size !== 0 && (n.preventDefault(), co());
  });
  const Ft = document.createElement("div");
  Ft.id = "hk-properties-pane";
  const po = "hk-props-pane-pos";
  let un = null;
  try {
    const n = localStorage.getItem(po);
    n && (un = JSON.parse(n));
  } catch {
  }
  Ft.style.cssText = ["position:fixed", un ? `left:${un.left}px` : "left:14px", un ? `top:${un.top}px` : "top:452px", "transform:none", "width:min(300px, calc(100vw - 32px))", "max-height:calc(100vh - 560px)", "overflow-y:auto", "z-index:201", "box-shadow:0 6px 24px rgba(0,0,0,0.45)", "border-radius:6px", "display:none"].join(";") + ";", document.body.appendChild(Ft);
  const Go = () => {
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
          localStorage.setItem(po, JSON.stringify({ left: parseFloat(Ft.style.left), top: parseFloat(Ft.style.top) }));
        } catch {
        }
      }
    });
  }, G = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 }, Mt = { dx: 0, dy: 0, dz: 3, copias: 1 };
  let Qe = null;
  const ut = (n, o, i, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: i, value: t } }));
  }, Wo = () => {
    if (Qe && (Qe.dispose(), Qe = null), ge.size === 0) {
      Ft.style.display = "none";
      return;
    }
    const n = [...ge], o = n.filter((d) => d.startsWith("pt:")), i = n.filter((d) => d.startsWith("seg:")), t = n.filter((d) => d.startsWith("poly:")), r = n.filter((d) => d.startsWith("aux:")), s = o.length > 0, l = i.length > 0, f = t.length > 0, h = !s && !l && !f, S = [];
    o.length && S.push(`\u{1F535} ${o.length} nodo(s)`), i.length && S.push(`\u{1F4CF} ${i.length} segmento(s)`), t.length && S.push(`\u25AD ${t.length} \xE1rea(s)`), r.length && S.push(`\u250A ${r.length} aux`);
    const k = `\u{1F3AF} ${ge.size} item(s) \u2014 ${S.join(", ")}`;
    Qe = new Bo({ container: Ft, title: k });
    {
      const d = Qe.addFolder({ title: "\u270F\uFE0F Editar \u2014 Replicar / Mover", expanded: false });
      d.addBinding(Mt, "dx", { label: "\u0394x (m)", step: 0.1 }), d.addBinding(Mt, "dy", { label: "\u0394y (m)", step: 0.1 }), d.addBinding(Mt, "dz", { label: "\u0394z (m)", step: 0.1 }), d.addBinding(Mt, "copias", { label: "Copias", min: 1, max: 50, step: 1 }), d.addButton({ title: "\u29C9 Replicar selecci\xF3n" }).on("click", () => {
        var _a;
        const P = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, Mt.dx, Mt.dy, Mt.dz, Mt.copias);
        fe(P ? `\u29C9 Replicado \xD7${P} (\u0394 ${Mt.dx},${Mt.dy},${Mt.dz} m)` : "\u26A0 Nada que replicar \u2014 seleccion\xE1 nodos/frames/\xE1reas");
      }), d.addButton({ title: "\u2192 Mover selecci\xF3n (1 copia, sin duplicar geometr\xEDa base)" }).on("click", () => {
        var _a;
        const P = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, Mt.dx, Mt.dy, Mt.dz, 1);
        fe(P ? `\u2192 Copia desplazada \u0394 ${Mt.dx},${Mt.dy},${Mt.dz} m` : "\u26A0 Nada seleccionado");
      });
      const y = d.addFolder({ title: "\u{1F9F2} Snap", expanded: false });
      y.addButton({ title: "Snap a grilla ON/OFF (F9)" }).on("click", () => {
        var _a;
        return (_a = window.__hekatanToggleSnap) == null ? void 0 : _a.call(window);
      }), y.addButton({ title: "OSNAP (endpoints/medios) ON/OFF" }).on("click", () => {
        window.__hekatanOsnapOn = !(window.__hekatanOsnapOn ?? true), fe(`\u{1F9F2} OSNAP ${window.__hekatanOsnapOn ? "ON" : "OFF"}`);
      });
    }
    if (s) {
      const d = Qe.addFolder({ title: `\u{1F4CC} Restraints (DOFs) \u2014 ${o.length} nodo(s)` });
      d.addBinding(G, "Ux"), d.addBinding(G, "Uy"), d.addBinding(G, "Uz"), d.addBinding(G, "Rx"), d.addBinding(G, "Ry"), d.addBinding(G, "Rz");
      const y = Qe.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      y.addBinding(G, "Kx", { label: "Kx", min: 0, step: 100 }), y.addBinding(G, "Ky", { label: "Ky", min: 0, step: 100 }), y.addBinding(G, "Kz", { label: "Kz", min: 0, step: 100 }), y.addBinding(G, "Krx", { label: "Krx", min: 0, step: 1e3 }), y.addBinding(G, "Kry", { label: "Kry", min: 0, step: 1e3 }), y.addBinding(G, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const P = Qe.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      P.addBinding(G, "Fx", { step: 0.1 }), P.addBinding(G, "Fy", { step: 0.1 }), P.addBinding(G, "Fz", { step: 0.1 }), P.addBinding(G, "Mx", { step: 0.1 }), P.addBinding(G, "My", { step: 0.1 }), P.addBinding(G, "Mz", { step: 0.1 }), Qe.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(G, "mass", { label: "m", min: 0, step: 1 }), Qe.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(G, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), Qe.addButton({ title: `\u2713 Aplicar a ${o.length} nodo(s) seleccionado(s)` }).on("click", () => {
        let q = 0;
        const R = [G.Ux, G.Uy, G.Uz, G.Rx, G.Ry, G.Rz];
        R.some((xe) => xe) && (ut("nodes", o, "supports", R), q++);
        const ae = [G.Fx, G.Fy, G.Fz, G.Mx, G.My, G.Mz];
        ae.some((xe) => xe !== 0) && (ut("nodes", o, "loads", ae), q++);
        const le = [G.Kx, G.Ky, G.Kz, G.Krx, G.Kry, G.Krz];
        if (le.some((xe) => xe !== 0) && (ut("nodes", o, "springs", le), q++), G.mass !== 0 && (ut("nodes", o, "mass", G.mass), q++), G.diaphragm !== "Ninguno" && (ut("nodes", o, "diaphragm", G.diaphragm), q++), q === 0) {
          fe("\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para apoyo, o un valor de carga/resorte/masa, y volv\xE9 a aplicar.");
          let xe = document.getElementById("hk-prop-toast");
          xe || (xe = document.createElement("div"), xe.id = "hk-prop-toast", xe.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);z-index:99999;padding:9px 20px;border-radius:8px;font:600 14px system-ui;color:#fff;pointer-events:none;transition:opacity .25s;box-shadow:0 4px 16px rgba(0,0,0,.4)", document.body.appendChild(xe)), xe.textContent = "\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para empotrado/articulado, despu\xE9s Aplicar", xe.style.background = "rgba(217,119,6,0.97)", xe.style.opacity = "1", clearTimeout(window.__hekatanPropToastT), window.__hekatanPropToastT = setTimeout(() => {
            xe && (xe.style.opacity = "0");
          }, 3200);
        } else fe(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    }
    if (l) {
      const d = Qe.addFolder({ title: `\u{1F4CF} Secci\xF3n frame \u2014 ${i.length} seg(s)` });
      d.addBinding(G, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), d.addBinding(G, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const y = Qe.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      y.addBinding(G, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), y.addBinding(G, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), y.addBinding(G, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), y.addBinding(G, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), Qe.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(G, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), Qe.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(G, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const K = Qe.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      K.addBinding(G, "relMxI", { label: "Mx I" }), K.addBinding(G, "relMyI", { label: "My I" }), K.addBinding(G, "relMzI", { label: "Mz I" });
      const q = Qe.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      q.addBinding(G, "relMxJ", { label: "Mx J" }), q.addBinding(G, "relMyJ", { label: "My J" }), q.addBinding(G, "relMzJ", { label: "Mz J" }), Qe.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(G, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const ae = Qe.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      ae.addBinding(G, "LKx", { label: "LKx", min: 0, step: 100 }), ae.addBinding(G, "LKy", { label: "LKy", min: 0, step: 100 }), ae.addBinding(G, "LKz", { label: "LKz", min: 0, step: 100 });
      const le = Qe.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      le.addBinding(G, "qx", { step: 0.1 }), le.addBinding(G, "qy", { step: 0.1 }), le.addBinding(G, "qz", { step: 0.1 }), Qe.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(G, "massPerM", { label: "m/L", min: 0, step: 1 }), Qe.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        ut("segs", i, "section", G.section), ut("segs", i, "material", G.material_frame);
        const Le = { A: G.A_mod, Iz: G.Iz_mod, Iy: G.Iy_mod, J: G.J_mod };
        (Le.A !== 1 || Le.Iz !== 1 || Le.Iy !== 1 || Le.J !== 1) && ut("segs", i, "modifiers", Le), G.insertionPoint !== "10 \u2014 Centroid" && ut("segs", i, "insertionPoint", G.insertionPoint), G.beta !== 0 && ut("segs", i, "beta", G.beta);
        const ve = [G.relMxI, G.relMyI, G.relMzI], Me = [G.relMxJ, G.relMyJ, G.relMzJ];
        (ve.some((Ve) => Ve) || Me.some((Ve) => Ve)) && ut("segs", i, "releases", { i: ve, j: Me }), G.hinges !== "None" && ut("segs", i, "hinges", G.hinges);
        const wt = [G.LKx, G.LKy, G.LKz];
        wt.some((Ve) => Ve !== 0) && ut("segs", i, "lineSprings", wt);
        const De = [G.qx, G.qy, G.qz];
        De.some((Ve) => Ve !== 0) && ut("segs", i, "distLoad", De), G.massPerM !== 0 && ut("segs", i, "massPerM", G.massPerM), fe(`\u2713 Propiedades aplicadas a ${i.length} segmento(s)`);
      });
    }
    if (f) {
      const d = Qe.addFolder({ title: `\u25AD Shell / \xC1rea \u2014 ${t.length}` });
      d.addBinding(G, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), d.addBinding(G, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), d.addBinding(G, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), Qe.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(G, "surfLoad", { label: "q", step: 0.1 }), Qe.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        ut("areas", t, "shellType", G.shellType), ut("areas", t, "thickness", G.thickness), ut("areas", t, "material", G.material_shell), G.surfLoad !== 0 && ut("areas", t, "surfLoad", G.surfLoad), fe(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    }
    if (h) {
      const d = Qe.addFolder({ title: "\u2139 Selecci\xF3n" }), y = { msg: "Seleccion\xE1 nodos, frames o \xE1reas para editar" };
      d.addBinding(y, "msg", { readonly: true, label: "" });
    }
    Qe.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      ge.clear(), Bt();
    }), Ft.style.display = "block", Go();
  };
  window.__hekatanRefreshPropsPane = Wo;
  let sn = null, _n = false;
  g.addEventListener("pointerdown", (n) => {
    n.button === 2 && (sn = { x: n.clientX, y: n.clientY }, _n = false);
  }), g.addEventListener("pointermove", (n) => {
    if (sn && n.buttons & 2 && !_n) {
      const o = n.clientX - sn.x, i = n.clientY - sn.y;
      Math.hypot(o, i) > 8 && (_n = true);
    }
  }), g.addEventListener("pointerup", (n) => {
    var _a, _b, _c;
    if (n.button === 2) {
      const o = sn !== null && !_n;
      sn = null;
      const i = window.__hekatanRClickOnElement === true;
      if (window.__hekatanRClickOnElement = false, i) return;
      if (o) {
        if (Vt ? bn() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), ge.size > 0 && (ge.clear(), Bt()), e.polylines) {
          const s = e.polylines.rawVal;
          (s[s.length - 1] ?? []).length > 0 && (e.polylines.val = [...s, []]);
        }
        const t = window.__hekatanCadState, r = (_b = (_a = t == null ? void 0 : t.get) == null ? void 0 : _a.call(t)) == null ? void 0 : _b.tool;
        r && r !== "select" && r !== "none" ? ((_c = t == null ? void 0 : t.setTool) == null ? void 0 : _c.call(t, "select"), fe(`\u238B Cancelado \u2014 tool '${r}' cerrado, volv\xE9s a Seleccionar`)) : fe("\u238B Cancelado (click derecho)");
      }
    }
  }), g.addEventListener("contextmenu", (n) => {
    n.preventDefault(), n.stopPropagation();
  }, { capture: true }), g.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && (window.__hekatanBloquearVentana || n.pointerType !== "touch" && (Tt = null, pn = false));
  }), g.addEventListener("pointermove", (n) => {
    if (Vt && n.buttons === 0) {
      const s = n.clientX < Vt.x;
      Yn(Vt.x, Vt.y, n.clientX, n.clientY, s);
      return;
    }
    if (!Tt) return;
    const o = n.clientX - Tt.x, i = n.clientY - Tt.y, t = Math.hypot(o, i);
    if (!pn && t < 8) return;
    pn = true;
    const r = n.clientX < Tt.x;
    Yn(Tt.x, Tt.y, n.clientX, n.clientY, r);
  }), g.addEventListener("pointerup", (n) => {
    if (!Tt) return;
    if (!pn) {
      Tt = null;
      return;
    }
    const o = n.ctrlKey || n.metaKey || n.shiftKey;
    ro(Tt.x, Tt.y, n.clientX, n.clientY, o), Tt = null, pn = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const Zt = new We();
  Zt.visible = false, Zt.frustumCulled = false, u.add(Zt);
  const Ho = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, uo = (n, o, i, t) => {
    var _a, _b, _c, _d;
    for (; Zt.children.length; ) {
      const f = Zt.children.pop();
      (_b = (_a = f.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = f.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const r = Ho[n] ?? 16777215, s = 0.05, l = new ye().setFromPoints([new M(o - s, i - s, t), new M(o + s, i - s, t), new M(o + s, i - s, t), new M(o + s, i + s, t), new M(o + s, i + s, t), new M(o - s, i + s, t), new M(o - s, i + s, t), new M(o - s, i - s, t)]);
    Zt.add(new Xt(l, new it({ color: r, linewidth: 2 }))), Zt.position.set(0, 0, 0), Zt.visible = true;
  }, Nn = () => {
    Zt.visible = false;
  }, qo = (n, o, i, t) => {
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
        const K = U[0] - P[0], q = U[1] - P[1], R = U[2] - P[2], ae = K * K + q * q + R * R;
        if (ae < 1e-12) continue;
        const le = Math.max(0, Math.min(1, ((n - P[0]) * K + (o - P[1]) * q + (i - P[2]) * R) / ae)), xe = P[0] + le * K, Le = P[1] + le * q, ve = P[2] + le * R;
        r.nea && h("nea", xe, Le, ve), r.per && h("per", xe, Le, ve);
      }
    }
    const S = window.__hekatanDrawingAuxLines, k = (S == null ? void 0 : S.rawVal) ?? (S == null ? void 0 : S.val) ?? S ?? [];
    for (const d of k) {
      if (d.length !== 6) continue;
      const y = [d[0], d[1], d[2]], P = [d[3], d[4], d[5]];
      if (r.end && (h("end", y[0], y[1], y[2]), h("end", P[0], P[1], P[2])), r.mid && h("mid", (y[0] + P[0]) / 2, (y[1] + P[1]) / 2, (y[2] + P[2]) / 2), r.nea || r.per) {
        const U = P[0] - y[0], K = P[1] - y[1], q = P[2] - y[2], R = U * U + K * K + q * q;
        if (R < 1e-12) continue;
        const ae = Math.max(0, Math.min(1, ((n - y[0]) * U + (o - y[1]) * K + (i - y[2]) * q) / R)), le = y[0] + ae * U, xe = y[1] + ae * K, Le = y[2] + ae * q;
        r.nea && h("nea", le, xe, Le), r.per && h("per", le, xe, Le);
      }
    }
    return f ? { type: f.type, x: f.x, y: f.y, z: f.z } : null;
  };
  window.__hekatanOsnapCompute = qo, window.__hekatanOsnapShow = uo, window.__hekatanOsnapHide = Nn;
  let Te = [], bt = 0;
  const fn = document.createElement("div");
  fn.id = "hk-cad-status", fn.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", fn.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(fn);
  const Jo = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), et && n.push(`\u{1F512} LOCK ${et.toUpperCase()}`);
    const i = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(i) > 1e-3 && n.push(`Cota Z=${i}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, fe = (n) => {
    const o = n + Jo();
    fn.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    fe(o);
  }, window.__hekatanCadResetPending = () => {
    Te = [], ce = [], Z.visible = false, Zn(), x(), fe("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  function Zn() {
    if (!e.polylines) return;
    const n = e.polylines.rawVal.filter((o) => o.length >= 2);
    e.polylines.val = [...n, []];
  }
  window.__hekatanCerrarPolilinea = Zn;
  const hn = [], Gt = () => {
    var _a, _b;
    hn.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), hn.length > 100 && hn.shift();
  }, fo = () => {
    var _a;
    const n = hn.pop();
    if (!n) {
      fe("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), Te = [], ie.visible = false, lt.visible = false, T(), fe(`\u21B6 Undo \u2014 ${hn.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    x();
  };
  window.__hekatanPushUndo = Gt, window.__hekatanUndo = fo, document.addEventListener("keydown", (n) => {
    var _a;
    if ((n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey) {
      const o = n.target, i = o == null ? void 0 : o.tagName;
      if ((i === "INPUT" || i === "TEXTAREA") && o.type !== "checkbox" && o.type !== "range" && ((_a = o.value) == null ? void 0 : _a.length) > 0) return;
      n.preventDefault(), n.stopPropagation(), fo();
    }
  }, { capture: true });
  const ho = () => {
    Te = [], Zn(), et = null, Lt(), ie.visible = false, lt.visible = false, T(), fe("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), x();
  };
  window.__hekatanFinalizeDraw = ho;
  const mo = () => {
    var _a, _b, _c;
    Te = [], ce = [], Z.visible = false;
    let n = false;
    ge.size && (ge.clear(), Bt(), n = true), ho();
    try {
      const o = window.__hekatanCadState, i = (_b = (_a = o == null ? void 0 : o.get) == null ? void 0 : _a.call(o)) == null ? void 0 : _b.tool;
      i && i !== "select" && ((_c = o == null ? void 0 : o.setTool) == null ? void 0 : _c.call(o, "select"));
    } catch {
    }
    fe(n ? "\u238B Selecci\xF3n cancelada" : "\u238B Sin herramienta \u2014 arrastr\xE1 para seleccionar"), x();
  };
  window.__hekatanEscapeCancel = mo, window.__hekatanReplicateSelection = (n, o, i, t) => {
    var _a, _b, _c, _d;
    t = Math.max(1, Math.round(t || 1));
    const r = [...ge], s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], f = new Set(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? []), h = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Set(), k = [];
    if (r.forEach((K) => {
      if (K.startsWith("pt:")) h.add(+K.slice(3));
      else if (K.startsWith("poly:")) {
        const q = +K.slice(5);
        S.add(q), (l[q] || []).forEach((R) => h.add(R));
      } else if (K.startsWith("seg:")) {
        const q = K.split(":"), R = +q[1], ae = +q[2], le = l[R] || [], xe = le[ae], Le = le[ae + 1];
        xe != null && Le != null && (k.push([xe, Le]), h.add(xe), h.add(Le));
      }
    }), !h.size) return 0;
    Gt();
    const d = [...s];
    let y = l.slice();
    y.length && y[y.length - 1].length === 0 && (y = y.slice(0, -1));
    const P = [...((_c = e.areas) == null ? void 0 : _c.rawVal) ?? []], U = [...h];
    for (let K = 1; K <= t; K++) {
      const q = n * K, R = o * K, ae = i * K, le = /* @__PURE__ */ new Map();
      U.forEach((xe) => {
        le.set(xe, d.length), d.push([s[xe][0] + q, s[xe][1] + R, s[xe][2] + ae]);
      }), S.forEach((xe) => {
        const Le = l[xe].map((Me) => le.has(Me) ? le.get(Me) : Me), ve = y.length;
        y.push(Le), f.has(xe) && P.push(ve);
      }), k.forEach(([xe, Le]) => {
        y.push([le.get(xe), le.get(Le)]);
      });
    }
    y.push([]), e.points.val = d, e.polylines && (e.polylines.val = y), e.areas && (e.areas.val = P);
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return x(), t;
  }, g.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z;
    if (Ot > 5) {
      Ot = 0;
      return;
    }
    Ot = 0;
    const o = v(n);
    if (!o) return;
    b.setFromCamera(z, o);
    const i = O();
    if (!i.length) return;
    {
      const s = o.position.distanceTo(c.target) || 1, l = i[0].distance ?? o.position.distanceTo(i[0].point), f = i[0].point;
      if (!isFinite(f.x) || !isFinite(f.y) || !isFinite(f.z) || l > Math.max(s * 12, 300)) {
        fe("\u26A0 Click rasante descartado \u2014 cay\xF3 demasiado lejos. Acerc\xE1 la vista o clicke\xE1 sobre la grilla.");
        return;
      }
    }
    let t = i[0].point;
    (n.ctrlKey || n.metaKey) && (t = new M(Math.round(i[0].point.x), Math.round(i[0].point.y), Math.round(i[0].point.z)));
    {
      const s = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], l = s[s.length - 1] ?? [], f = e.points.rawVal ?? [];
      if (l.length > 0) {
        const h = f[l[l.length - 1]];
        if (h) {
          const S = !!window.__hekatanOrthoMode;
          let k = et;
          if (!k && S) {
            const d = Math.abs(t.x - h[0]), y = Math.abs(t.y - h[1]), P = Math.abs(t.z - h[2]);
            k = d >= y && d >= P ? "x" : y >= P ? "y" : "z";
          }
          k === "x" ? t = new M(t.x, h[1], h[2]) : k === "y" ? t = new M(h[0], t.y, h[2]) : k === "z" && (t = new M(h[0], h[1], t.z));
        }
      }
    }
    if (ot) t = ot.clone(), fe(`\u{1F4D0} Eje \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.2, l = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, s);
      if (l) t = new M(l.x, l.y, l.z), fe(`\u{1F3AF} Snap [${l.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      else {
        const f = window.__hekatanSnapEnabled !== false, h = window.__hekatanSnap2D ?? 0;
        f && h > 0 && (t = new M(Math.round(t.x / h) * h, Math.round(t.y / h) * h, Math.round(t.z / h) * h));
      }
    }
    const r = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (r === "select" || r === "none" || !r) {
      if (nt) {
        Vt && bn();
        const { kind: s, a: l, b: f } = nt, h = f !== void 0 ? `${s}:${l}:${f}` : `${s}:${l}`;
        n.ctrlKey || n.metaKey || n.shiftKey || ge.clear(), ge.has(h) ? ge.delete(h) : ge.add(h), Bt(), fe(`\u2713 Seleccionados ${ge.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const s = n.ctrlKey || n.metaKey || n.shiftKey, l = n.clientX, f = n.clientY;
        Vt ? (ro(Vt.x, Vt.y, l, f, s), Vt = null) : s || (Vt = { x: l, y: f }, fe("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), Yn(l, f, l + 1, f + 1, false));
      }
      return;
    }
    if (r === "axis") {
      const s = window.__hekatanAxisDraw;
      if (!s) return;
      if (!s.pendingStart) {
        s.pendingStart = [t.x, t.y, t.z], fe(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const l = s.mode === "number", f = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, s.pendingStart, [t.x, t.y, t.z], l);
      fe(`\u2713 Eje "${f}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (r === "delete") {
      if (dt >= 0) {
        const s = window.__hekatanDrawingAuxLines, l = (s == null ? void 0 : s.rawVal) ?? (s == null ? void 0 : s.val) ?? s ?? [], f = dt;
        if (f >= 0 && f < l.length) {
          Gt();
          const h = l.slice(0, f).concat(l.slice(f + 1));
          s && typeof s == "object" && "val" in s ? s.val = h : window.__hekatanDrawingAuxLines = h, fe(`\u{1F5D1} L\xEDnea auxiliar #${f + 1} borrada`), dt = -1, he.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (Ze >= 0) {
        const s = Ze, l = He;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(s)) ?? false ? (nn(s), fe(`\u{1F5D1} \xC1rea #${s + 1} (shell Q4) borrada`)) : l >= 0 ? (Ln(s, l), fe(`\u{1F5D1} Segmento ${l + 1} de polil\xEDnea #${s + 1} borrado`)) : (nn(s), fe(`\u{1F5D1} Polil\xEDnea #${s + 1} borrada`));
      } else fe("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (r === "circle") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        fe("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [s, l] = Te, f = Math.hypot(l[0] - s[0], l[1] - s[1], l[2] - s[2]);
      Math.abs(l[0] - s[0]);
      const h = Math.abs(l[1] - s[1]), k = Math.abs(l[2] - s[2]) < 1e-3 ? "xy" : h < 1e-3 ? "xz" : "yz", d = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, s[0], s[1], s[2], f, d, k), fe(`\u2713 C\xEDrculo dibujado en ${k.toUpperCase()} \u2014 r=${f.toFixed(2)}m, ${d} segmentos`), Te = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (r === "arc") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        fe("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (Te.length === 2) {
        fe("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [s, l, f] = Te, h = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, s, l, f, h), fe(`\u2713 Arco dibujado \u2014 ${h} segmentos`), Te = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (r === "rect") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        fe("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Te;
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, s, l), fe(`\u2713 Rect\xE1ngulo dibujado \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Te = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (r === "rectarea") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        fe("\u25AD \xC1rea rectangular \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Te;
      (_p = window.__hekatanDrawRectArea) == null ? void 0 : _p.call(window, s, l), fe(`\u2713 \xC1rea rectangular (shell Q4) creada \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Te = [];
      return;
    }
    if (r === "polyarea") {
      ce.push([t.x, t.y, t.z]), Z.geometry.setFromPoints(ce.map((s) => new M(s[0], s[1], s[2]))), Z.visible = ce.length >= 1, fe(`\u25B0 \xC1rea libre \u2014 ${ce.length} punto(s). Click m\xE1s v\xE9rtices, o Enter / click-derecho para cerrar y mallar (m\xEDn. 3).`), x();
      return;
    }
    if (r === "plane3") {
      if (Te.push([t.x, t.y, t.z]), Te.length < 3) {
        fe(`\u25E3 Plano inclinado \u2014 punto ${Te.length}/3. Tip: cambi\xE1 la Cota Z (o enganch\xE1 un nodo) entre clicks para darle inclinaci\xF3n.`);
        return;
      }
      const [s, l, f] = Te, h = (_q = window.__hekatanSetInclinedPlaneFrom3) == null ? void 0 : _q.call(window, s, l, f);
      fe(h ? "\u2713 Plano de trabajo INCLINADO activo. Dibuj\xE1 el \xE1rea (\u25AD/\u2B21) sobre \xE9l. (XY para resetear)" : "\u26A0 Los 3 puntos son colineales \u2014 no definen un plano. Reintent\xE1."), Te = [];
      return;
    }
    if (r === "col") {
      Gt();
      const s = t.z, l = bt && bt > 0 ? bt : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, s], [t.x, t.y, s + l]];
      const f = e.polylines.rawVal, h = e.points.rawVal.length;
      e.polylines.val = [...f.slice(0, -1), ...f[f.length - 1].length > 0 ? [f[f.length - 1]] : [], [h - 2, h - 1], []], bt = 0, fe(`\u258C Columna creada \u2014 h=${l.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (r === "wall") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        fe("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [s, l] = Te, f = bt && bt > 0 ? bt : 3;
      Gt();
      const h = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [s[0], s[1], s[2]], [l[0], l[1], l[2]], [l[0], l[1], l[2] + f], [s[0], s[1], s[2] + f]];
      const S = e.polylines.rawVal;
      if (S.length - 1, e.polylines.val = [...S.slice(0, -1), ...S[S.length - 1].length > 0 ? [S[S.length - 1]] : [], [h, h + 1, h + 2, h + 3, h], []], e.areas) {
        const k = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, k];
      }
      fe(`\u25A5 Pared Q4 creada \u2014 h=${f.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Te = [], bt = 0;
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
      e.polylines.val = [...f.slice(0, -1), ...f[f.length - 1].length > 0 ? [f[f.length - 1]] : [], [h - 2, h - 1], []], bt = 0, fe(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${s.toFixed(2)}m`);
      try {
        (_t = window.__hekatanRebuild) == null ? void 0 : _t.call(window);
      } catch {
      }
      return;
    }
    if (r === "extl") {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.5, l = qt(t.x, t.y, t.z, s);
      if (!l) {
        fe("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const f = e.polylines.rawVal, h = e.points.rawVal, S = f[l.polyIdx], k = h[S[l.segIdx]], d = h[S[l.segIdx + 1]];
      if (!k || !d) {
        fe("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
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
      bt = 0, fe(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${y.toFixed(2)}m`);
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
      fe(`\u2726 Punto auxiliar agregado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      return;
    }
    if (r === "aux") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        fe("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [s, l] = Te, f = window.__hekatanDrawingAuxLines;
      if (f) {
        const y = f.rawVal ?? f.val ?? [];
        f.val = [...y, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      const h = l[0] - s[0], S = l[1] - s[1], k = l[2] - s[2], d = Math.sqrt(h * h + S * S + k * k);
      fe(`\u2713 L\xEDnea auxiliar creada \u2014 L=${d.toFixed(2)}m (cyan, no FEM)`), Te = [];
      return;
    }
    if (r === "extend") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        fe("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [s, l] = Te, f = window.__hekatanDrawingAuxLines;
      if (f) {
        const h = f.rawVal ?? f.val ?? [];
        f.val = [...h, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      fe("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Te = [];
      return;
    }
    if (r === "chaflan") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        fe("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Te, f = window.__hekatanChaflanR ?? 1, h = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_v = window.__hekatanDrawSlabChaflan) == null ? void 0 : _v.call(window, s, l, f, h, 6);
      const S = Math.abs(l[0] - s[0]).toFixed(1), k = Math.abs(l[1] - s[1]).toFixed(1);
      fe(`\u2713 Losa con chaflanes dibujada \u2014 ${S}\xD7${k}m, r=${f}m, ${h} seg/chafl\xE1n`), Te = [];
      try {
        (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
      } catch {
      }
      return;
    }
    if (V = false, Gt(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const s = e.polylines.rawVal, l = s.length - 1, f = s[l] ?? [];
      if (r === "line" && f.length >= 2) {
        fe(`\uFF0F L\xEDnea \u2014 ${f.length - 1} tramo${f.length === 2 ? "" : "s"}. Segu\xED marcando puntos; Esc o clic derecho para terminar.`);
        try {
          (_x = window.__hekatanRebuild) == null ? void 0 : _x.call(window);
        } catch {
        }
        return;
      }
      if (r === "area" && f.length === 4) {
        e.polylines.val = [...s.slice(0, -1), [...f, f[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, l]), fe("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_y = window.__hekatanRebuild) == null ? void 0 : _y.call(window);
        } catch {
        }
        return;
      }
    }
    if (r === "node") fe(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (r === "line") fe("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (r === "polyline") fe("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (r === "area") {
      const s = ((_z = e.polylines) == null ? void 0 : _z.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      fe(`\u25A6 \xC1rea \u2014 click ${s.length}/4. Marc\xE1 ${4 - s.length} v\xE9rtice${4 - s.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), g.addEventListener("contextmenu", (n) => {
    var _a, _b, _c;
    if (((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "polyarea" && ce.length >= 3) {
      n.preventDefault();
      const i = cn();
      fe(`\u2713 \xC1rea libre mallada \u2014 ${i} shells Q4 creados.`);
      return;
    }
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), g.addEventListener("pointermove", (n) => {
    var _a, _b;
    const o = v(n);
    if (!o) return;
    b.setFromCamera(z, o);
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
            let d = et;
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
    x();
  }), g.addEventListener("pointermove", (n) => {
    var _a;
    const o = v(n);
    if (!o) return;
    b.setFromCamera(z, o);
    let i = false;
    const t = b.intersectObject(oe), r = O();
    if (t.length && r.length) {
      const s = new M(...e.points.rawVal[t[0].index]), l = new M(...r[0].point), f = s.sub(l), h = (_a = r[0].face) == null ? void 0 : _a.normal;
      h.transformDirection(N.matrixWorld), Math.abs(f.dot(h)) < 1e-4 && (i = true);
    }
    be.visible = !i;
  });
  let Un = false, Kn;
  g.addEventListener("pointermove", (n) => {
    var _a;
    if (!Ot) return;
    const o = v(n);
    if (!o) return;
    b.setFromCamera(z, o);
    let i = false;
    const t = b.intersectObject(oe), r = O();
    if (t.length && r.length) {
      const l = new M(...e.points.rawVal[t[0].index]), f = new M(...r[0].point), h = l.sub(f), S = (_a = r[0].face) == null ? void 0 : _a.normal;
      S.transformDirection(N.matrixWorld), Math.abs(h.dot(S)) < 1e-4 && (i = true);
    }
    if (i && Ot < 5 && (Un = true, c.enabled = false, Kn = t[0].index), !Un || Ot % 2 !== 0) return;
    const s = [...e.points.rawVal];
    if (Kn !== void 0) {
      let l = r[0].point;
      (n.ctrlKey || n.metaKey) && (l = new M(Math.round(l.x), Math.round(l.y), Math.round(l.z))), s[Kn] = l.toArray();
    }
    e.points.val = s;
  }), g.addEventListener("pointerup", () => {
    c.enabled = true, Un = false;
  }), g.addEventListener("contextmenu", (n) => {
    var _a;
    const o = v(n);
    if (!o) return;
    b.setFromCamera(z, o);
    let i = false;
    const t = b.intersectObject(oe), r = O();
    if (t.length && r.length) {
      const f = new M(...e.points.rawVal[t[0].index]), h = new M(...r[0].point), S = f.sub(h), k = (_a = r[0].face) == null ? void 0 : _a.normal;
      k.transformDirection(N.matrixWorld), Math.abs(S.dot(k)) < 1e-4 && (i = true);
    }
    if (!i) return;
    const s = [...e.points.rawVal];
    if (s.splice(t[0].index, 1), e.points.val = s, !e.polylines) return;
    const l = e.polylines.rawVal.map((f) => f.filter((h) => h !== t[0].index)).map((f) => f.map((h) => h > t[0].index ? h - 1 : h)).filter((f) => f.length);
    l.push([]), e.polylines.val = l;
  });
}
function Ds(e, a, u) {
  const w = Math.round(14.999999999999998), p = { position: e.position.clone(), quaternion: e.quaternion.clone() }, g = setInterval(b, 1e3 / 30);
  let x = 0;
  function b() {
    x++;
    const z = x / w;
    e.position.lerpVectors(p.position, a.position, z), e.quaternion.slerpQuaternions(p.quaternion, a.quaternion, z), u && u(), x == w && clearInterval(g);
  }
}
function Ys(e, a, u, m) {
  const c = xs(u, e.elements, m);
  return D.derive(() => {
    c.visible = a.shellResults.val != "none";
  }), c;
}
const Ns = 6, eo = 10, Zs = 0.012;
function Us(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function Ks(e, a, u, m) {
  if (!u && !m) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && u) {
    const w = u[e];
    if (w && w.has(a)) return w.get(a);
  }
  return null;
}
function Gs(e, a, u, m) {
  const c = new We(), w = new Ro();
  w.setColorMap("rainbow");
  const p = new It(), g = D.state([]);
  return D.derive(() => {
    var _a, _b, _c;
    a.deformedShape.val;
    const x = u.val, b = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], z = Us(a.frameResults.val);
    if (c.children.forEach((A) => {
      A.geometry && A.geometry.dispose(), A.material && A.material.dispose();
    }), c.clear(), !z || b.length === 0 || x.length === 0) {
      g.val = [];
      return;
    }
    const v = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, N = (_c = e.deformOutputs) == null ? void 0 : _c.val, ue = [], ne = [];
    for (let A = 0; A < b.length; A++) {
      if (b[A].length !== 2) continue;
      const se = Ks(z, A, v, N);
      se && (ue.push(se[0], se[1]), ne.push({ idx: A, vals: se }));
    }
    if (ue.length === 0) {
      g.val = [];
      return;
    }
    const Q = Math.min(...ue), _ = Math.max(...ue);
    w.setMin(Q), w.setMax(_), g.val = ue;
    const O = [1 / 0, 1 / 0, 1 / 0], oe = [-1 / 0, -1 / 0, -1 / 0];
    for (const A of x) for (let H = 0; H < 3; H++) O[H] = Math.min(O[H], A[H]), oe[H] = Math.max(oe[H], A[H]);
    const me = Math.max(oe[0] - O[0], oe[1] - O[1], oe[2] - O[2], 1) * Zs, B = [], I = [], X = [];
    let V = 0;
    for (const { idx: A, vals: H } of ne) {
      const se = b[A], j = x[se[0]], J = x[se[1]];
      if (!j || !J) continue;
      const E = new M(J[0] - j[0], J[1] - j[1], J[2] - j[2]), ie = E.length();
      if (ie < 1e-10) continue;
      E.normalize();
      const Z = Math.abs(E.y) < 0.99 ? new M(0, 1, 0) : new M(1, 0, 0), ce = new M().crossVectors(E, Z).normalize(), pe = new M().crossVectors(E, ce).normalize(), ze = eo + 1, we = Ns;
      for (let Ae = 0; Ae < ze; Ae++) {
        const qe = Ae / eo, lt = j[0] + E.x * ie * qe, ee = j[1] + E.y * ie * qe, C = j[2] + E.z * ie * qe, Y = H[0] + (H[1] - H[0]) * qe, L = w.getColor(Y) ?? new It(0, 0, 0);
        p.copy(L).convertSRGBToLinear();
        for (let W = 0; W < we; W++) {
          const te = W / we * Math.PI * 2, de = Math.cos(te), re = Math.sin(te);
          B.push(lt + (ce.x * de + pe.x * re) * me, ee + (ce.y * de + pe.y * re) * me, C + (ce.z * de + pe.z * re) * me), I.push(p.r, p.g, p.b);
        }
      }
      for (let Ae = 0; Ae < eo; Ae++) for (let qe = 0; qe < we; qe++) {
        const lt = (qe + 1) % we, ee = V + Ae * we + qe, C = V + Ae * we + lt, Y = V + (Ae + 1) * we + qe, L = V + (Ae + 1) * we + lt;
        X.push(ee, C, L), X.push(ee, L, Y);
      }
      V += ze * we;
    }
    if (B.length === 0) return;
    const F = new ye();
    F.setAttribute("position", new ft(B, 3)), F.setAttribute("color", new ft(I, 3)), F.setIndex(X), F.computeVertexNormals();
    const $ = new je({ vertexColors: true, side: vt }), T = new Ke(F, $);
    T.frustumCulled = false, c.add(T);
  }), c.__colorMapValues = g, c;
}
function Ws() {
  const e = window;
  return { forceUnit: e.__hekatanForceUnit ?? localStorage.getItem("hk_forceUnit") ?? "tonf", dispUnit: e.__hekatanDispUnit ?? localStorage.getItem("hk_dispUnit") ?? "mm", stressUnit: e.__hekatanStressUnit ?? localStorage.getItem("hk_stressUnit") ?? "tonf/m\xB2" };
}
const Hs = { kN: 1, tonf: 1 / 9.80665, kip: 1 / 4.4482216 }, qs = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Js = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76, "kip/ft\xB2": 1 / 47.88026 };
function ct(e, a = 4) {
  return e == null || !isFinite(e) ? "\u2014" : e === 0 ? "0" : Math.abs(e) < 1e-3 || Math.abs(e) > 1e5 ? e.toExponential(a) : e.toFixed(a);
}
const Qs = 16755200, Vo = 56831, Os = 56831, js = 56831, zn = 65382;
function ea(e) {
  const a = new We();
  a.name = "__hekatan_hover", a.renderOrder = 99;
  const u = new rn(1, 16, 16), m = new je({ color: Qs, transparent: true, opacity: 0.85, depthTest: false }), c = new Ke(u, m);
  c.visible = false, c.renderOrder = 100, a.add(c);
  const w = new ye(), p = new it({ color: Vo, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), g = new Xt(w, p);
  g.visible = false, g.renderOrder = 100, a.add(g);
  const x = new je({ color: Vo, transparent: true, opacity: 0.7, depthTest: false }), b = new Ke(new ko(1, 1, 1, 12), x);
  b.visible = false, b.renderOrder = 100, a.add(b);
  const z = new ye(), v = new je({ color: Os, transparent: true, opacity: 0.45, side: vt, depthTest: false }), N = new Ke(z, v);
  N.visible = false, N.renderOrder = 100, a.add(N);
  const ue = new ye(), ne = new it({ color: js, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), Q = new Xt(ue, ne);
  Q.visible = false, Q.renderOrder = 100, a.add(Q);
  const _ = new je({ color: zn, transparent: true, opacity: 0.95, depthTest: false }), O = new je({ color: zn, transparent: true, opacity: 0.85, depthTest: false }), oe = new ko(1, 1, 1, 12), be = new je({ color: zn, transparent: true, opacity: 0.55, side: vt, depthTest: false }), me = new it({ color: zn, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), B = [];
  window.__hekatanModelSelection = B;
  const I = new We();
  I.renderOrder = 101, a.add(I);
  const X = document.createElement("div");
  Object.assign(X.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), X.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(X);
  }, 0);
  function V(ee) {
    const C = e.derivedNodes.rawVal;
    return !C || ee < 0 || ee >= C.length ? null : new M(C[ee][0], C[ee][1], C[ee][2]);
  }
  function F(ee, C) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s2;
    const Y = e.getActiveCamera();
    if (!Y || !e.mesh) return null;
    const L = e.rendererElm.getBoundingClientRect(), W = ee - L.left, te = C - L.top, de = e.derivedNodes.rawVal, re = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!de || !re) return null;
    const _e = /* @__PURE__ */ new Map(), Pe = (Xe) => {
      if (_e.has(Xe)) return _e.get(Xe);
      const Ee = V(Xe);
      if (!Ee) return _e.set(Xe, null), null;
      const Se = Ee.clone().project(Y), Ye = (Se.x * 0.5 + 0.5) * L.width, he = (-Se.y * 0.5 + 0.5) * L.height, Ze = { x: Ye, y: he, z: Se.z };
      return _e.set(Xe, Ze), Ze;
    }, Ce = /* @__PURE__ */ new Set();
    for (const Xe of re) if (Xe) for (const Ee of Xe) Ce.add(Ee);
    const $e = 8;
    let Ie = -1, Ne = $e;
    for (let Xe = 0; Xe < de.length; Xe++) {
      if (!Ce.has(Xe)) continue;
      const Ee = Pe(Xe);
      if (!Ee || Ee.z < -1 || Ee.z > 1) continue;
      const Se = Ee.x - W, Ye = Ee.y - te, he = Math.sqrt(Se * Se + Ye * Ye);
      he < Ne && (Ne = he, Ie = Xe);
    }
    const Fe = Ws(), rt = qs[Fe.dispUnit] ?? 1e3, Ue = Hs[Fe.forceUnit] ?? 1;
    if (Ie >= 0) {
      const Xe = de[Ie];
      let Ee = `Nodo ${Ie}
(${Xe[0].toFixed(3)}, ${Xe[1].toFixed(3)}, ${Xe[2].toFixed(3)})`;
      const Se = (_c = (_b = e.mesh) == null ? void 0 : _b.deformOutputs) == null ? void 0 : _c.rawVal;
      if (Se == null ? void 0 : Se.deformations) {
        const Ye = Se.deformations.get(Ie);
        if (Ye && (Ee += `
\u2500\u2500\u2500\u2500 \u0394 desplaz. \u2500\u2500\u2500\u2500`, Ee += `
Ux = ${ct(Ye[0] * rt, 3)} ${Fe.dispUnit}`, Ee += `
Uy = ${ct(Ye[1] * rt, 3)} ${Fe.dispUnit}`, Ee += `
Uz = ${ct(Ye[2] * rt, 3)} ${Fe.dispUnit}`, (Math.abs(Ye[3]) > 1e-9 || Math.abs(Ye[4]) > 1e-9 || Math.abs(Ye[5]) > 1e-9) && (Ee += `
Rx = ${ct(Ye[3] * 1e3, 3)} mrad`, Ee += `
Ry = ${ct(Ye[4] * 1e3, 3)} mrad`, Ee += `
Rz = ${ct(Ye[5] * 1e3, 3)} mrad`)), Se.reactions) {
          const he = Se.reactions.get(Ie);
          he && (Math.abs(he[0]) > 1e-9 || Math.abs(he[1]) > 1e-9 || Math.abs(he[2]) > 1e-9 || Math.abs(he[3]) > 1e-6 || Math.abs(he[4]) > 1e-6 || Math.abs(he[5]) > 1e-6) && (Ee += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, Ee += `
Fx = ${ct(he[0] * Ue)} ${Fe.forceUnit}`, Ee += `
Fy = ${ct(he[1] * Ue)} ${Fe.forceUnit}`, Ee += `
Fz = ${ct(he[2] * Ue)} ${Fe.forceUnit}`, (Math.abs(he[3]) > 1e-6 || Math.abs(he[4]) > 1e-6 || Math.abs(he[5]) > 1e-6) && (Ee += `
Mx = ${ct(he[3] * Ue)} ${Fe.forceUnit}\xB7m`, Ee += `
My = ${ct(he[4] * Ue)} ${Fe.forceUnit}\xB7m`, Ee += `
Mz = ${ct(he[5] * Ue)} ${Fe.forceUnit}\xB7m`));
        }
      }
      return { type: "node", idx: Ie, info: Ee };
    }
    const et = 5;
    let ot = -1, tt = et, Lt = "frame";
    for (let Xe = 0; Xe < re.length; Xe++) {
      const Ee = re[Xe];
      if (!(!Ee || Ee.length < 2)) {
        if (Ee.length === 2) {
          const Se = Pe(Ee[0]), Ye = Pe(Ee[1]);
          if (!Se || !Ye || Se.z < -1 || Se.z > 1 || Ye.z < -1 || Ye.z > 1) continue;
          const he = ta(W, te, Se.x, Se.y, Ye.x, Ye.y);
          he < tt && (tt = he, ot = Xe, Lt = "frame");
        } else if (Ee.length === 3 || Ee.length === 4) {
          const Se = [];
          let Ye = true;
          for (const he of Ee) {
            const Ze = Pe(he);
            if (!Ze || Ze.z < -1 || Ze.z > 1) {
              Ye = false;
              break;
            }
            Se.push(Ze);
          }
          if (!Ye) continue;
          if (na(W, te, Se)) {
            const Ze = Se.reduce((He, dt) => He + dt.z, 0) / Se.length * 1e-3;
            Ze < tt && (tt = Ze, ot = Xe, Lt = "shell");
          }
        } else if (Ee.length === 8) {
          const Se = [];
          let Ye = true;
          for (const ge of Ee) {
            const Be = Pe(ge);
            if (!Be || Be.z < -1 || Be.z > 1) {
              Ye = false;
              break;
            }
            Se.push(Be);
          }
          if (!Ye) continue;
          const he = Math.min(...Se.map((ge) => ge.x)), Ze = Math.max(...Se.map((ge) => ge.x)), He = Math.min(...Se.map((ge) => ge.y)), dt = Math.max(...Se.map((ge) => ge.y));
          if (W >= he && W <= Ze && te >= He && te <= dt) {
            const Be = Se.reduce((Je, pt) => Je + pt.z, 0) / Se.length * 1e-3;
            Be < tt && (tt = Be, ot = Xe, Lt = "solid");
          }
        }
      }
    }
    if (ot >= 0) {
      const Xe = re[ot];
      let Se = `${Lt === "frame" ? "Frame" : Lt === "shell" ? "Shell" : "Solid"} ${ot}`;
      const Ye = (_e2 = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e2.rawVal, he = (_g = (_f = Ye == null ? void 0 : Ye.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, ot);
      if (he) {
        he.name && (Se += `
  \u{1F4CB} ${he.name}`), he.shape && (Se += `
  Shape: ${he.shape}`);
        const Ze = /concrete|hormig|rect.*sólida/i.test(he.shape || ""), He = Ze ? 100 : 1e3, dt = Ze ? "cm" : "mm", ge = (Je) => {
          const pt = Je * He;
          return Math.abs(pt - Math.round(pt)) < 0.05 ? `${Math.round(pt)}` : `${pt.toFixed(1)}`;
        }, Be = [];
        if (he.D != null && Be.push(`D=${ge(he.D)}`), he.B != null && Be.push(`B=${ge(he.B)}`), he.TF != null && Be.push(`TF=${ge(he.TF)}`), he.TW != null && Be.push(`TW=${ge(he.TW)}`), he.t != null && Be.push(`t=${ge(he.t)}`), Be.length && (Se += `
  Dim: ${Be.join(" ")} ${dt}`), he.material) {
          let Je = he.material;
          he.fillMaterial && (Je += ` + FILL "${he.fillMaterial}"`), Se += `
  Mat: ${Je}`;
        }
      } else {
        const Ze = (_i = (_h = Ye == null ? void 0 : Ye.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, ot), He = (_k = (_j = Ye == null ? void 0 : Ye.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, ot);
        Ze ? (Se += `
  ${Ze}`, He && !Ze.includes(He) && (Se += `  (${He})`)) : He && (Se += `
  Material: ${He}`);
      }
      if (Se += `
nodos: [${Xe.join(", ")}]`, Lt === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const Ze = e.mesh.analyzeOutputs.rawVal, He = Js[Fe.stressUnit] ?? 1, dt = [["bendingXX", "Mxx", Ue, `${Fe.forceUnit}\xB7m/m`], ["bendingYY", "Myy", Ue, `${Fe.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", Ue, `${Fe.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", Ue, `${Fe.forceUnit}/m`], ["membraneYY", "Nyy", Ue, `${Fe.forceUnit}/m`], ["membraneXY", "Nxy", Ue, `${Fe.forceUnit}/m`], ["shearX", "Qx", Ue, `${Fe.forceUnit}/m`], ["shearY", "Qy", Ue, `${Fe.forceUnit}/m`], ["vonMises", "\u03C3VM", He, Fe.stressUnit], ["pressure", "p", He, Fe.stressUnit]], ge = [];
        for (const [Be, Je, pt, Dt] of dt) {
          const ht = Ze == null ? void 0 : Ze[Be];
          if (ht && ht instanceof Map) {
            const zt = ht.get(ot);
            if (zt != null) {
              if (typeof zt == "number") ge.push(`${Je} = ${ct(zt * pt, 3)} ${Dt}`);
              else if (Array.isArray(zt)) {
                let nt = zt[0];
                for (const Ht of zt) Math.abs(Ht) > Math.abs(nt) && (nt = Ht);
                ge.push(`${Je} = ${ct(nt * pt, 3)} ${Dt}`);
              }
            }
          }
        }
        ge.length > 0 && (Se += `
\u2500\u2500\u2500\u2500 results \u2500\u2500\u2500\u2500
` + ge.slice(0, 8).join(`
`));
      }
      if (Lt === "frame" && ((_m = e.mesh) == null ? void 0 : _m.deformOutputs) && e.mesh.elementInputs) {
        const Ze = e.mesh.deformOutputs.rawVal, He = e.mesh.elementInputs.rawVal, dt = Ze == null ? void 0 : Ze.deformations;
        if (dt && Xe.length === 2) {
          const ge = dt.get(Xe[0]), Be = dt.get(Xe[1]), Je = de[Xe[0]], pt = de[Xe[1]];
          if (ge && Be && Je && pt) {
            const Dt = pt[0] - Je[0], ht = pt[1] - Je[1], zt = pt[2] - Je[2], nt = Math.sqrt(Dt * Dt + ht * ht + zt * zt);
            if (nt > 1e-9) {
              const Ht = Dt / nt, Bt = ht / nt, tn = zt / nt, qt = (Be[0] - ge[0]) * Ht + (Be[1] - ge[1]) * Bt + (Be[2] - ge[2]) * tn, Jt = ((_n = He.elasticities) == null ? void 0 : _n.get(ot)) ?? 0, $n = ((_o2 = He.areas) == null ? void 0 : _o2.get(ot)) ?? 0, In = ((_p = He.momentsOfInertiaY) == null ? void 0 : _p.get(ot)) ?? 0, nn = ((_q = He.momentsOfInertiaZ) == null ? void 0 : _q.get(ot)) ?? 0, Ln = ((_r = He.torsionalConstants) == null ? void 0 : _r.get(ot)) ?? 0, cn = ((_s2 = He.shearModuli) == null ? void 0 : _s2.get(ot)) ?? Jt / 2.6, Ct = Jt * $n * (qt / nt), Rt = (Be[3] - ge[3]) * Ht + (Be[4] - ge[4]) * Bt + (Be[5] - ge[5]) * tn, Yt = cn * Ln * (Rt / nt), Qt = Be[4] - ge[4], Bn = Be[5] - ge[5], Nt = Jt * In * Qt / nt, dn = Jt * nn * Bn / nt;
              Se += `
\u2500\u2500\u2500\u2500 frame \u2500\u2500\u2500\u2500`, Se += `
L = ${ct(nt, 3)} m`, Se += `
\u0394L = ${ct(qt * rt, 3)} ${Fe.dispUnit}`, Se += `
\u03B5 = ${ct(qt / nt, 6)}`, Math.abs(Ct) > 1e-6 && (Se += `
N \u2248 ${ct(Ct * Ue)} ${Fe.forceUnit}`), Math.abs(Yt) > 1e-6 && (Se += `
T \u2248 ${ct(Yt * Ue)} ${Fe.forceUnit}\xB7m`), Math.abs(Nt) > 1e-6 && (Se += `
My \u2248 ${ct(Nt * Ue)} ${Fe.forceUnit}\xB7m`), Math.abs(dn) > 1e-6 && (Se += `
Mz \u2248 ${ct(dn * Ue)} ${Fe.forceUnit}\xB7m`);
            }
          }
        }
      }
      return { type: Lt, idx: ot, info: Se };
    }
    return null;
  }
  function $(ee, C, Y) {
    var _a, _b, _c;
    if (c.visible = false, g.visible = false, b.visible = false, N.visible = false, Q.visible = false, !ee || !e.mesh) {
      X.style.display = "none", e.render();
      return;
    }
    const L = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (ee.type === "node") {
      const re = V(ee.idx);
      if (re) {
        const _e = e.derivedNodes.rawVal ?? [];
        let Pe = 1;
        if (_e.length >= 2) {
          let Ie = [1 / 0, 1 / 0, 1 / 0], Ne = [-1 / 0, -1 / 0, -1 / 0];
          for (const Fe of _e) for (let rt = 0; rt < 3; rt++) Fe[rt] < Ie[rt] && (Ie[rt] = Fe[rt]), Fe[rt] > Ne[rt] && (Ne[rt] = Fe[rt]);
          Pe = Math.max(Ne[0] - Ie[0], Ne[1] - Ie[1], Ne[2] - Ie[2], 0.1);
        }
        const Ce = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, $e = 0.021 * Pe * Ce;
        c.position.copy(re), c.scale.setScalar($e), c.visible = true;
      }
    } else if (ee.type === "frame" && L) {
      const re = L[ee.idx], _e = V(re[0]), Pe = V(re[1]);
      if (_e && Pe) {
        const Ce = _e.clone().add(Pe).multiplyScalar(0.5), $e = Pe.clone().sub(_e), Ie = $e.length(), rt = e.getActiveCamera().position.distanceTo(Ce) * 35e-4;
        b.position.copy(Ce);
        const Ue = new M(0, 1, 0), et = Ue.clone().cross($e).normalize(), ot = Ue.angleTo($e);
        b.quaternion.setFromAxisAngle(et, ot), b.scale.set(rt, Ie, rt), b.visible = true;
      }
    } else if (ee.type === "shell" && L) {
      const re = L[ee.idx], _e = [], Pe = [];
      for (const Ce of re) {
        const $e = V(Ce);
        if (!$e) return;
        _e.push($e.x, $e.y, $e.z);
      }
      re.length === 4 ? Pe.push(0, 1, 2, 0, 2, 3) : re.length === 3 && Pe.push(0, 1, 2), z.setAttribute("position", new ft(_e, 3)), z.setIndex(Pe), z.computeVertexNormals(), N.visible = true;
    } else if (ee.type === "solid" && L) {
      const re = L[ee.idx], _e = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], Pe = [];
      for (const [Ce, $e] of _e) {
        const Ie = V(re[Ce]), Ne = V(re[$e]);
        Ie && Ne && Pe.push(Ie.x, Ie.y, Ie.z, Ne.x, Ne.y, Ne.z);
      }
      ue.setAttribute("position", new ft(Pe, 3)), Q.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      X.style.display = "none", e.render();
      return;
    }
    X.textContent = ee.info, X.style.whiteSpace = "pre-line", X.style.display = "block";
    const te = e.rendererElm.getBoundingClientRect(), de = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? te;
    X.style.left = `${C - de.left}px`, X.style.top = `${Y - de.top}px`, e.render();
  }
  let T = "", A = 0, H = 0;
  const se = window.__hekatanHoverDebug ?? false, j = (ee) => {
    A && cancelAnimationFrame(A), A = requestAnimationFrame(() => {
      var _a, _b, _c;
      const C = F(ee.clientX, ee.clientY);
      if (se && H < 5) {
        const L = e.derivedNodes.rawVal, W = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${ee.clientX}, ${ee.clientY}) nodes=${(L == null ? void 0 : L.length) ?? 0} elems=${(W == null ? void 0 : W.length) ?? 0} hover=`, C), H++;
      }
      const Y = C ? `${C.type}:${C.idx}` : "";
      if (Y !== T) T = Y, $(C, ee.clientX, ee.clientY);
      else if (C) {
        const L = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        X.style.left = `${ee.clientX - L.left}px`, X.style.top = `${ee.clientY - L.top}px`;
      }
    });
  };
  let J = null;
  const E = () => {
    T = "", c.visible = false, g.visible = false, b.visible = false, N.visible = false, Q.visible = false, X.style.display = "none", e.render();
  }, ie = (ee) => {
    const C = e.rendererElm.getBoundingClientRect(), Y = ee.clientX - C.left, L = ee.clientY - C.top;
    (Y < -2 || L < -2 || Y > C.width + 2 || L > C.height + 2) && (J && clearTimeout(J), J = window.setTimeout(E, 200));
  }, Z = () => {
    J && (clearTimeout(J), J = null);
  };
  e.rendererElm.addEventListener("pointermove", j), e.rendererElm.addEventListener("pointerleave", ie), e.rendererElm.addEventListener("pointerenter", Z);
  function ce() {
    var _a, _b, _c;
    const ee = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    return ee === "select" || ee === "none" || !ee;
  }
  let pe = null;
  e.rendererElm.addEventListener("pointerdown", (ee) => {
    ee.button === 0 && (pe = { x: ee.clientX, y: ee.clientY });
  }), e.rendererElm.addEventListener("pointerup", (ee) => {
    if (ee.button !== 0 || !pe) return;
    const C = ee.clientX - pe.x, Y = ee.clientY - pe.y;
    if (pe = null, C * C + Y * Y > 9 || !ce()) return;
    const L = F(ee.clientX, ee.clientY);
    L ? (qe({ type: L.type, idx: L.idx }, ee.shiftKey), Ae()) : lt();
  }), window.addEventListener("keydown", (ee) => {
    if (ee.key !== "Escape" || !B.length) return;
    const C = document.activeElement, Y = !!C && (C.id === "hk3-cmd-input" || C.id === "hk-dyn-input") && C.value === "";
    C && (C.tagName === "INPUT" || C.tagName === "TEXTAREA" || C.isContentEditable) && !Y || lt();
  }, { capture: true });
  function ze() {
    for (const ee of I.children.slice()) {
      I.remove(ee);
      const C = ee.geometry;
      C && C !== u && C !== oe && C.dispose();
    }
  }
  function we(ee, C) {
    var _a, _b, _c;
    const Y = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
    if (ee.type === "node") {
      const L = V(ee.idx);
      if (!L) return;
      const W = ((_c = e.derivedDisplayScale) == null ? void 0 : _c.rawVal) ?? 1, te = new Ke(u, _);
      te.position.copy(L), te.scale.setScalar(0.025 * C * W), te.renderOrder = 101, I.add(te);
    } else if (ee.type === "frame" && Y) {
      const L = Y[ee.idx], W = V(L[0]), te = V(L[1]);
      if (!W || !te) return;
      const de = W.clone().add(te).multiplyScalar(0.5), re = te.clone().sub(W), _e = re.length(), Pe = e.getActiveCamera().position.distanceTo(de), Ce = new Ke(oe, O);
      Ce.position.copy(de);
      const $e = new M(0, 1, 0);
      Ce.quaternion.setFromAxisAngle($e.clone().cross(re).normalize(), $e.angleTo(re)), Ce.scale.set(Pe * 35e-4, _e, Pe * 35e-4), Ce.renderOrder = 101, I.add(Ce);
    } else if (ee.type === "shell" && Y) {
      const L = Y[ee.idx], W = [], te = [];
      for (const _e of L) {
        const Pe = V(_e);
        if (!Pe) return;
        W.push(Pe.x, Pe.y, Pe.z);
      }
      L.length === 4 ? te.push(0, 1, 2, 0, 2, 3) : L.length === 3 && te.push(0, 1, 2);
      const de = new ye();
      de.setAttribute("position", new ft(W, 3)), de.setIndex(te), de.computeVertexNormals();
      const re = new Ke(de, be);
      re.renderOrder = 101, I.add(re);
    } else if (ee.type === "solid" && Y) {
      const L = Y[ee.idx], W = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], te = [];
      for (const [_e, Pe] of W) {
        const Ce = V(L[_e]), $e = V(L[Pe]);
        Ce && $e && te.push(Ce.x, Ce.y, Ce.z, $e.x, $e.y, $e.z);
      }
      const de = new ye();
      de.setAttribute("position", new ft(te, 3));
      const re = new Xt(de, me);
      re.renderOrder = 101, I.add(re);
    }
  }
  function Ae() {
    if (ze(), !B.length || !e.mesh) {
      e.render();
      return;
    }
    const ee = e.derivedNodes.rawVal ?? [];
    let C = 1;
    if (ee.length >= 2) {
      const Y = [1 / 0, 1 / 0, 1 / 0], L = [-1 / 0, -1 / 0, -1 / 0];
      for (const W of ee) for (let te = 0; te < 3; te++) W[te] < Y[te] && (Y[te] = W[te]), W[te] > L[te] && (L[te] = W[te]);
      C = Math.max(L[0] - Y[0], L[1] - Y[1], L[2] - Y[2], 0.1);
    }
    for (const Y of B) we(Y, C);
    e.render();
  }
  function qe(ee, C) {
    const Y = B.findIndex((L) => L.type === ee.type && L.idx === ee.idx);
    Y >= 0 ? B.splice(Y, 1) : C || B.push(ee), B.length && B[B.length - 1];
  }
  function lt() {
    B.length = 0, Ae();
  }
  return D.derive(() => {
    e.derivedNodes.val, B.length && Ae();
  }), a;
}
function ta(e, a, u, m, c, w) {
  const p = c - u, g = w - m, x = p * p + g * g;
  if (x < 1e-9) {
    const ne = e - u, Q = a - m;
    return Math.sqrt(ne * ne + Q * Q);
  }
  let b = ((e - u) * p + (a - m) * g) / x;
  b = Math.max(0, Math.min(1, b));
  const z = u + b * p, v = m + b * g, N = e - z, ue = a - v;
  return Math.sqrt(N * N + ue * ue);
}
function na(e, a, u) {
  let m = false;
  for (let c = 0, w = u.length - 1; c < u.length; w = c++) {
    const p = u[c].x, g = u[c].y, x = u[w].x, b = u[w].y;
    g > a != b > a && e < (x - p) * (a - g) / (b - g + 1e-12) + p && (m = !m);
  }
  return m;
}
function Ao(e, a = 8) {
  const u = document.createElement("div");
  u.id = "legend", u.style.setProperty("--legend-n", String(a)), setTimeout(() => {
    D.derive(() => {
      En.val, u.style.background = ys();
    });
  });
  const m = document.createElement("div");
  m.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", u.appendChild(m), setTimeout(() => {
    D.derive(() => {
      m.textContent = no.val ? `[${no.val}]` : "";
    });
  });
  const c = Array.from({ length: a + 1 }, (x, b) => b / a).reverse();
  let w, p;
  c.forEach((x, b) => {
    w = document.createElement("div"), w.id = `marker-${b}`, w.className = "marker", w.style.marginTop = b == 0 ? "0px" : "calc(var(--legend-h) / var(--legend-n) - 1px)", p = document.createElement("p"), p.id = `marker-text-${b}`, w.append(p), u.append(w);
  });
  const g = [];
  return u.querySelectorAll("p").forEach((x) => g.push(x)), setTimeout(() => {
    D.derive(() => {
      c.forEach((x, b) => {
        const z = g[b];
        z && (z.innerText = oa(e.val, x).toString());
      });
    });
  }), u;
}
function oa(e, a) {
  const u = Mn.val;
  if (u) return Eo(u[0] + a * (u[1] - u[0]));
  const m = e.filter((p) => Number.isFinite(p));
  if (m.length === 0) return "0";
  const [c, w] = so(m);
  return Eo(c + a * (w - c));
}
function Eo(e) {
  if (!Number.isFinite(e)) return "\u2014";
  if (e === 0) return "0";
  const a = Math.abs(e);
  return a < 1e-3 || a >= 1e5 ? e.toExponential(2) : e.toPrecision(3);
}
function ma({ mesh: e, settingsObj: a, drawingObj: u, objects3D: m, solids: c }) {
  hs.DEFAULT_UP = new M(0, 0, 1);
  const w = document.createElement("div"), p = new ds(), g = new ps(45, 1, 0.1, 2 * 1e6), x = new us(-10, 10, 10, -10, -1e3, 2e6);
  let b = g;
  const z = new fs({ antialias: true });
  z.localClippingEnabled = true;
  const v = new Po(g, z.domElement);
  v.enableDamping = true, v.dampingFactor = 0.1, v.screenSpacePanning = true, v.zoomSpeed = 0.8, v.panSpeed = 1.2, v.rotateSpeed = 0.9, v.keyPanSpeed = 12, v.listenToKeyEvents(window), v.touches = { ONE: kn.ROTATE, TWO: kn.DOLLY_PAN }, z.domElement.addEventListener("wheel", (C) => {
    if (!C.ctrlKey && Math.abs(C.deltaX) > Math.abs(C.deltaY) * 1.5) {
      C.preventDefault();
      const Y = v.target, L = new M().subVectors(g.position, Y), W = new M();
      W.crossVectors(g.up, L).normalize();
      const de = L.length() * 1e-3 * v.panSpeed;
      Y.addScaledVector(W, C.deltaX * de), g.position.addScaledVector(W, C.deltaX * de), v.update();
    }
  }, { passive: false });
  const N = new Qn(new M(-1, 0, 0), 0), ue = new Qn(new M(0, -1, 0), 0), ne = new Qn(new M(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function Q() {
    const C = window.__hekatanClip, Y = [];
    C.enableX && (N.normal.set(C.invertX ? 1 : -1, 0, 0), N.constant = C.invertX ? -C.posX : C.posX, Y.push(N)), C.enableY && (ue.normal.set(0, C.invertY ? 1 : -1, 0), ue.constant = C.invertY ? -C.posY : C.posY, Y.push(ue)), C.enableZ && (ne.normal.set(0, 0, C.invertZ ? 1 : -1), ne.constant = C.invertZ ? -C.posZ : C.posZ, Y.push(ne)), z.clippingPlanes = Y, p.traverse((W) => {
      const te = W;
      if (te.material) {
        const de = Array.isArray(te.material) ? te.material : [te.material];
        for (const re of de) re.clippingPlanes = Y, re.needsUpdate = true;
      }
    });
    const L = window.__hekatanPanes ?? [];
    for (const W of L) try {
      W && typeof W.refresh == "function" && W.refresh();
    } catch {
    }
    z.render(p, b);
  }
  Q(), window.__hekatanClipApply = Q;
  const _ = vs(a), O = D.derive(() => Math.pow(10, _.displayScale.val / 10)), oe = sa(e, _), be = () => {
    const C = [];
    return _.gridXY.rawVal && C.push("xy"), _.gridXZ.rawVal && C.push("xz"), _.gridYZ.rawVal && C.push("yz"), C;
  }, me = () => {
    const C = _.gridStep.rawVal, Y = Math.max(C, _.gridMajor.rawVal);
    return { planes: be(), majorStep: Y, minorStep: C };
  };
  let B = jn(_.gridSize.rawVal, me());
  B.visible = _.gridVisible.rawVal, window.__hekatanSnap2D = _.cursorSnap.rawVal;
  const I = () => {
    const C = Math.max(0, Math.min(1, _.gridOpacity.rawVal));
    B.traverse((Y) => {
      const L = Y.material;
      if (!L || !("opacity" in L)) return;
      const W = Y.name ?? "";
      let te = 0.35;
      W.includes("border") ? te = 1 : W.includes("major") && (te = 0.75), L.opacity = C * te;
    });
  };
  I(), w.appendChild(gs(_, e, c)), w.setAttribute("id", "viewer"), w.appendChild(z.domElement), z.setPixelRatio(window.devicePixelRatio);
  const X = en();
  z.setClearColor(X.background, 1);
  const V = _.gridSize.rawVal, F = V * 0.5 + V * 0.5 / Math.tan(45 * 0.5);
  g.position.set(0, 0, F), g.up.set(0, 1, 0), v.target.set(0, 0, 0), v.minDistance = 0.1, v.maxDistance = 1e4, w.__settings = _, v.zoomSpeed = 1, v._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, v.update();
  let $ = Co(_.gridSize.rawVal, _.flipAxes.rawVal);
  p.add(B, $), D.derive(() => {
    window.__hekatanGridPlaneXY = _.gridXY.val, window.__hekatanGridPlaneXZ = _.gridXZ.val, window.__hekatanGridPlaneYZ = _.gridYZ.val;
  });
  let T = true;
  D.derive(() => {
    const C = _.gridVisible.val;
    if (T) {
      T = false;
      return;
    }
    B.visible = C, Z();
  });
  let A = true;
  D.derive(() => {
    if (_.gridOpacity.val, A) {
      A = false;
      return;
    }
    I(), Z();
  }), D.derive(() => {
    const C = _.cursorSnap.val;
    window.__hekatanSnap2D = C;
  });
  let H = true;
  D.derive(() => {
    var _a;
    const C = _.gridSize.val, Y = _.flipAxes.val;
    if (_.gridXY.val, _.gridXZ.val, _.gridYZ.val, _.gridStep.val, _.gridMajor.val, H) {
      H = false;
      return;
    }
    p.remove(B), (_a = B.traverse) == null ? void 0 : _a.call(B, (te) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = te.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = te.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), B = jn(C, me()), B.visible = _.gridVisible.rawVal, p.add(B), I(), p.remove($), $.traverse((te) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = te.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = te.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), $ = Co(C, Y), p.add($);
    const L = C * 0.5 + C * 0.5 / Math.tan(45 * 0.5);
    g.position.distanceTo(v.target), Math.abs(g.position.x) < 0.1 && Math.abs(g.position.y) < 0.1 && g.position.z > 0 ? g.position.set(0, 0, L) : g.position.set(0.5 * C, -L, 0.5 * C), v.target.set(0, 0, 0), v.minDistance = Math.max(0.05, C * 0.01), v.maxDistance = Math.max(50, C * 50), v.update(), Z();
  }), new ResizeObserver((C) => {
    var _a, _b;
    for (const Y of C) {
      const L = (_a = Y.target) == null ? void 0 : _a.clientWidth, W = (_b = Y.target) == null ? void 0 : _b.clientHeight;
      if (L === 0 || W === 0) continue;
      const de = (j ? L / 2 : L) / W;
      g.aspect = de, g.updateProjectionMatrix();
      const re = x.top;
      if (x.left = -re * de, x.right = re * de, x.updateProjectionMatrix(), J && J.isPerspectiveCamera) J.aspect = de, J.updateProjectionMatrix();
      else if (J && J.isOrthographicCamera) {
        const _e = J, Pe = _e.top;
        _e.left = -Pe * de, _e.right = Pe * de, _e.updateProjectionMatrix();
      }
      z.setSize(L, W), Z();
    }
  }).observe(w), v.addEventListener("change", Z), D.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, _.displayScale.val, _.nodes.val, _.elements.val, (_g = _.edges) == null ? void 0 : _g.val, _.elemColumns.val, _.elemBeams.val, _.nodesIndexes.val, _.elementsIndexes.val, _.orientations.val, _.sections.val, _.secColumns.val, _.secBeams.val, _.secFloor.val, _.supports.val, _.loads.val, _.deformedShape.val, _.nodeResults.val, _.frameResults.val, _.shellResults.val, (_h = _.solidResults) == null ? void 0 : _h.val, (_i = _.extruded) == null ? void 0 : _i.val, setTimeout(Z);
  });
  let j = false, J = null, E = null, ie = false;
  function Z() {
    const C = w.clientWidth || 1, Y = w.clientHeight || 1;
    if (!j || !J) {
      z.setScissorTest(false), z.setViewport(0, 0, C, Y), z.render(p, b);
      return;
    }
    const L = C / 2;
    z.setScissorTest(true), z.setViewport(0, 0, L, Y), z.setScissor(0, 0, L, Y), z.render(p, b), z.setViewport(L, 0, L, Y), z.setScissor(L, 0, L, Y), z.render(p, J), z.setScissorTest(false);
  }
  function ce(C) {
    b = C, v.object = C, v.update(), Z();
  }
  function pe(C, Y) {
    j = C, Y && (J = Y);
    const L = w.clientWidth || 1, W = w.clientHeight || 1, de = (C ? L / 2 : L) / W;
    g.isPerspectiveCamera && (g.aspect = de, g.updateProjectionMatrix());
    const re = x.top;
    if (x.left = -re * de, x.right = re * de, x.updateProjectionMatrix(), C && J) {
      if (E ? (E.object = J, E.update()) : (E = new Po(J, z.domElement), E.enableDamping = true, E.dampingFactor = 0.1, E.screenSpacePanning = true, E.zoomSpeed = 0.8, E.panSpeed = 1.2, E.rotateSpeed = 0.9, E.touches = { ONE: kn.ROTATE, TWO: kn.DOLLY_PAN }, E.target.copy(v.target), E.addEventListener("change", Z), E.enabled = false), !ie) {
        const _e = (Pe) => {
          if (!j || !E) return;
          const Ce = z.domElement.getBoundingClientRect(), $e = Pe.clientX - Ce.left, Ie = Ce.width / 2, Ne = $e >= Ie;
          v.enabled = !Ne, E.enabled = Ne;
        };
        z.domElement.addEventListener("pointerdown", _e, true), z.domElement.addEventListener("wheel", _e, { capture: true, passive: true }), ie = true;
      }
    } else C || (v.enabled = true, E && (E.enabled = false));
    w.__splitMode = C, window.__hekatanSplitMode = C, window.__hekatanSplitCamera = C ? J : null, Z();
  }
  if (e) {
    p.add(Ms(_, oe, O), ms(e, _, oe), Ss(_, oe, O), ks(e, _, oe, O), bs(e, _, oe, O), _s(e, _, oe, O), Cs(e, _, oe, O), Vs(e, _, oe, O), $s(e, _, oe), Rs(e, _, oe, O), Is(e, _, oe, O));
    const C = ea({ scene: p, rendererElm: z.domElement, getActiveCamera: () => b, derivedNodes: oe, derivedDisplayScale: O, mesh: e, settings: _, render: Z });
    p.add(C);
    const Y = da(e, _), L = Ys(e, _, oe, Y), W = Ao(Y);
    p.add(L), w.appendChild(W);
    const te = Gs(e, _, oe);
    p.add(te);
    const de = te.__colorMapValues, re = Ao(de);
    re.id = "frame-legend", w.appendChild(re), D.derive(() => {
      var _a;
      const _e = _.shellResults.val != "none", Pe = (((_a = _.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", Ce = _e || Pe, $e = _.frameResults.val.startsWith("contour:"), Ie = Y.val.some((Ne) => Number.isFinite(Ne));
      W.hidden = !Ce || !Ie, L.visible = Ce, re.hidden = !$e;
    });
  }
  if (c) {
    const C = new Lo(16777215, 0.5);
    p.add(C);
    const Y = new An(16777215, 0.5);
    Y.position.set(30, 25, -10), Y.shadow.mapSize.width = 1024, Y.shadow.mapSize.height = 1024, p.add(Y);
    const L = 10;
    Y.shadow.camera.left = -L, Y.shadow.camera.right = L, Y.shadow.camera.top = L, Y.shadow.camera.bottom = -L, Y.shadow.camera.far = 1e3;
    const W = new An(16777215, 0.5);
    W.color.setHSL(11, 43, 96), W.position.set(-10, 0, 30), p.add(W), D.derive(() => {
      (c == null ? void 0 : c.val.length) && (p.remove(...c.oldVal), p.add(...c.rawVal), Z());
    }), D.derive(() => {
      c.rawVal.forEach((te) => te.visible = _.solids.val), Z();
    });
  }
  if (m) {
    const C = [], Y = (W) => {
      var _a;
      return ((_a = W == null ? void 0 : W.userData) == null ? void 0 : _a.isCota) ? _.showCotas.val : _.custom3D.val;
    }, L = () => {
      for (const W of C) W.visible = Y(W);
      Z();
    };
    D.derive(() => {
      const W = m.val;
      C.length && (p.remove(...C), C.length = 0), W.length && (p.add(...W), C.push(...W), L()), Z();
    }), D.derive(() => {
      _.custom3D.val, L();
    }), D.derive(() => {
      _.showCotas.val, L();
    });
  }
  u && Xs({ drawingObj: u, gridObj: B, scene: p, getActiveCamera: () => b, controls: v, gridSize: V, derivedDisplayScale: O, rendererElm: z.domElement, viewerRender: Z }), $o((C, Y) => {
    var _a;
    z.setClearColor(Y.background, 1), p.remove(B), (_a = B.traverse) == null ? void 0 : _a.call(B, (L) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = L.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = L.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), B = jn(_.gridSize.rawVal, { planes: be() }), p.add(B), w.style.setProperty("--awatif-legend-color", Y.legendMarker), Z();
  });
  const ze = { scene: p, perspCamera: g, orthoCamera: x, get camera() {
    return b;
  }, controls: v, renderer: z, rendererElm: z.domElement, render: Z, setActiveCamera: ce, setSplitMode: pe, get splitMode() {
    return j;
  }, get splitCamera() {
    return J;
  }, settings: _ };
  w.__ctx = ze;
  const we = document.createElement("div");
  we.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const Ae = (C, Y, L) => {
    const W = document.createElement("button");
    return W.textContent = C, W.title = Y, W.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), W.onmouseenter = () => {
      W.style.background = "rgba(70,70,70,0.9)";
    }, W.onmouseleave = () => {
      W.style.background = "rgba(40,40,40,0.85)";
    }, W.onclick = (te) => {
      te.preventDefault(), L();
    }, W;
  }, qe = (C, Y) => {
    const L = v.target, W = new M().subVectors(b.position, L), te = W.length(), de = new M(), re = new M();
    de.crossVectors(b.up, W).normalize(), re.copy(b.up).normalize();
    const _e = te * 0.05;
    L.addScaledVector(de, -C * _e), L.addScaledVector(re, Y * _e), b.position.addScaledVector(de, -C * _e), b.position.addScaledVector(re, Y * _e), v.update(), Z();
  }, lt = (C) => {
    const Y = new M().subVectors(b.position, v.target);
    Y.multiplyScalar(C), b.position.copy(v.target).add(Y), v.update(), Z();
  }, ee = () => {
    const C = document.createElement("div");
    return C.style.cssText = "width:32px;height:32px;", C;
  };
  return we.append(ee()), we.append(Ae("\u2191", "Pan arriba", () => qe(0, 1))), we.append(Ae("\u2295", "Zoom in", () => lt(0.85))), we.append(Ae("\u2190", "Pan izquierda", () => qe(-1, 0))), we.append(Ae("\u2302", "Reset vista", () => {
    v.reset(), Z();
  })), we.append(Ae("\u2192", "Pan derecha", () => qe(1, 0))), we.append(Ae("\u2296", "Zoom out", () => lt(1.18))), we.append(Ae("\u2193", "Pan abajo", () => qe(0, -1))), we.append(ee()), getComputedStyle(w).position === "static" && (w.style.position = "relative"), w.appendChild(we), w;
}
function sa(e, a) {
  return D.derive(() => {
    var _a, _b, _c, _d;
    if (!a.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const u = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], m = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!m || u.length === 0) return u;
    const c = a.deformScale.val, w = a.deformScale.val * a.deformScaleZ.val, p = Number.isFinite(c) ? c : 1, g = Number.isFinite(w) ? w : 1;
    return u.map((x, b) => {
      var _a2;
      const z = ((_a2 = m.get(b)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], v = Number.isFinite(z[0]) ? z[0] : 0, N = Number.isFinite(z[1]) ? z[1] : 0, ue = Number.isFinite(z[2]) ? z[2] : 0;
      return [x[0] + v * p, x[1] + N * p, x[2] + ue * g];
    });
  });
}
const Mn = D.state(null), no = D.state(""), aa = D.state("kN"), ia = D.state("mm"), la = D.state("kN/m\xB2"), ra = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, To = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402, ft: 3.280839895 }, ca = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function da(e, a) {
  const u = D.state([]);
  let m;
  return ((c) => {
    c.bendingXX = "bendingXX", c.bendingYY = "bendingYY", c.bendingXY = "bendingXY", c.membraneXX = "membraneXX", c.membraneYY = "membraneYY", c.membraneXY = "membraneXY", c.tranverseShearX = "tranverseShearX", c.tranverseShearY = "tranverseShearY", c.membranePrincipalMax = "membranePrincipalMax", c.membranePrincipalMin = "membranePrincipalMin", c.bendingPrincipalMax = "bendingPrincipalMax", c.bendingPrincipalMin = "bendingPrincipalMin", c.transverseShearMax = "transverseShearMax", c.vonMises = "vonMises", c.pressure = "pressure", c.displacementX = "displacementX", c.displacementY = "displacementY", c.displacementZ = "displacementZ";
  })(m || (m = {})), D.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const c = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), ne = (Y, L) => {
      Y == null ? void 0 : Y.forEach((W, te) => {
        const de = e.elements.val[te];
        if (de) for (let re = 0; re < de.length; re++) L.set(de[re], [W[re] ?? W[0]]);
      });
    };
    ne((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, c), ne((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, w), ne((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, p), ne((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, g), ne((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, x), ne((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, b), ne((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, z), ne((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, v), ne((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, N), ne((_t = (_s2 = e.analyzeOutputs) == null ? void 0 : _s2.val) == null ? void 0 : _t.pressure, ue);
    const Q = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), me = (Y, L, W, te, de) => {
      Y.forEach((re, _e2) => {
        var _a2, _b2;
        const Pe = re[0] ?? 0, Ce = ((_a2 = L.get(_e2)) == null ? void 0 : _a2[0]) ?? 0, $e = ((_b2 = W.get(_e2)) == null ? void 0 : _b2[0]) ?? 0, Ie = (Pe + Ce) / 2, Ne = Math.hypot((Pe - Ce) / 2, $e);
        te.set(_e2, [Ie + Ne]), de.set(_e2, [Ie - Ne]);
      });
    };
    me(g, x, b, Q, _), me(c, w, p, O, oe), z.forEach((Y, L) => {
      var _a2;
      be.set(L, [Math.hypot(Y[0] ?? 0, ((_a2 = v.get(L)) == null ? void 0 : _a2[0]) ?? 0)]);
    });
    const B = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, I = (_w = a.solidResults) == null ? void 0 : _w.val, V = I && I !== "none" ? I : a.shellResults.val, F = B == null ? void 0 : B[V], $ = { bendingXX: [c, 0], bendingYY: [w, 0], bendingXY: [p, 0], membraneXX: [g, 0], membraneYY: [x, 0], membraneXY: [b, 0], tranverseShearX: [z, 0], tranverseShearY: [v, 0], membranePrincipalMax: [Q, 0], membranePrincipalMin: [_, 0], bendingPrincipalMax: [O, 0], bendingPrincipalMin: [oe, 0], transverseShearMax: [be, 0], vonMises: [N, 0], pressure: [ue, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, T = a.shellResults.val, A = aa.val, H = ia.val, se = T === "displacementX" || T === "displacementY" || T === "displacementZ", j = T === "bendingXX" || T === "bendingYY" || T === "bendingXY" || T === "bendingPrincipalMax" || T === "bendingPrincipalMin", J = T === "membraneXX" || T === "membraneYY" || T === "membraneXY" || T === "membranePrincipalMax" || T === "membranePrincipalMin", E = T === "vonMises" || T === "pressure", ie = T === "tranverseShearX" || T === "tranverseShearY" || T === "transverseShearMax", Z = (_D = a.solidResults) == null ? void 0 : _D.val, ce = Z === "vonMises" || Z === "sigmaXX" || Z === "sigmaYY" || Z === "sigmaZZ" || Z === "tauXY" || Z === "tauYZ" || Z === "tauXZ", pe = Z === "ux" || Z === "uy" || Z === "uz", ze = la.val, we = ce ? ca[ze] : pe || se ? To[H] : j || J || E || ie ? 1 / ra[A] : 1, Ae = ce ? ze : pe || se ? H : j ? `${A}\xB7m/m` : J ? `${A}/m\xB2` : E ? `${A}/m\xB2` : ie ? `${A}/m` : "";
    no.val = Ae, Mn.val = Array.isArray(F) && F.length === 2 ? [F[0] * we, F[1] * we] : null;
    const qe = Do.val, ee = Z && Z !== "none" ? [N, 0] : $[T], C = [];
    if (e.nodes.val.forEach((Y, L) => {
      const W = ee;
      if (!W || !W[0] || typeof W[0].has != "function") return;
      if (!W[0].has(L)) {
        C.push(Number.NaN);
        return;
      }
      const te = W[0].get(L), de = te ? te[W[1]] ?? 0 : 0;
      C.push(de * we);
    }), !Mn.val && qe !== "auto") {
      const Y = e.nodes.val, L = /* @__PURE__ */ new Set(), W = (de, re) => {
        var _a2;
        const _e2 = (_a2 = Y[de[0]]) == null ? void 0 : _a2[re];
        return de.every((Pe) => {
          var _a3;
          return Math.abs((((_a3 = Y[Pe]) == null ? void 0 : _a3[re]) ?? NaN) - _e2) < 1e-6;
        });
      };
      for (const de of e.elements.val) {
        if (de.length !== 4) continue;
        const re = W(de, 2), _e2 = !re && (W(de, 0) || W(de, 1));
        if (qe === "losas" && re || qe === "muros" && _e2) for (const Pe of de) L.add(Pe);
      }
      const te = [];
      for (const de of L) {
        const re = C[de];
        Number.isFinite(re) && te.push(re);
      }
      te.length && (Mn.val = so(te));
    }
    u.val = C;
  }), u;
}
export {
  xs as a,
  Ao as b,
  aa as c,
  ia as d,
  la as e,
  ma as g
};
