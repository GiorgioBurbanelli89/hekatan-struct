import { N as It, a6 as Sn, q as jo, v as Y, a7 as es, D as vt, M as Ke, B as xe, F as ft, a8 as ts, x as at, a9 as ns, aa as os, h as go, ab as vo, r as en, ac as Cn, ad as Fn, a4 as $o, _ as He, a as it, L as Xt, w as Io, b as ss, ae as as, f as je, V as M, $ as jt, af as Hn, H as oo, d as St, c as qn, Y as Lo, Z as An, G as is, z as gn, A as ls, ag as Vn, t as rs, o as cs, I as Wt, a2 as yn, E as Mo, S as rn, m as Jn, ah as xn, g as bo, i as _o, j as So, C as ko, K as ds, U as ps, W as us, X as fs, T as kn, P as Qn, O as hs } from "./theme-Co6w-pfC.js";
import { T as gt, O as Po } from "./Text-2W5davkr.js";
import { P as Bo } from "./tweakpane-BXg6ZhiP.js";
import { e as ms } from "./styles-Cbl14-j9.js";
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
      const x = p * m;
      for (let g = 0; g < this.map.length - 1; g++) if (x > this.map[g][0] && x <= this.map[g + 1][0]) {
        const b = this.map[g][0], k = this.map[g + 1][0];
        c.setHex(this.map[g][1], Sn), w.setHex(this.map[g + 1][1], Sn);
        const v = new It().lerpColors(c, w, (x - b) / (k - b));
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
    const p = 1 / this.n, x = new It(), g = new It(), b = new It();
    for (let k = 1; k >= 0; k -= p) for (let v = this.map.length - 1; v >= 0; v--) if (k < this.map[v][0] && k >= this.map[v - 1][0]) {
      const D = this.map[v - 1][0], fe = this.map[v][0];
      x.setHex(this.map[v - 1][1], Sn), g.setHex(this.map[v][1], Sn), b.lerpColors(x, g, (k - D) / (fe - D)), c[w * 4] = Math.round(b.r * 255), c[w * 4 + 1] = Math.round(b.g * 255), c[w * 4 + 2] = Math.round(b.b * 255), c[w * 4 + 3] = 255, w += 1;
    }
    return u.putImageData(m, 0, 0), a;
  }
}
const On = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, Xo = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]], ws = { safe: [[0, 224, 13, 107], [0.13, 221, 20, 50], [0.27, 252, 99, 39], [0.4, 254, 161, 47], [0.52, 238, 234, 25], [0.64, 5, 193, 69], [0.78, 7, 178, 244], [0.9, 4, 132, 213], [1, 90, 175, 230]], csi: Xo, jet_r: [[0, 200, 0, 0], [0.15, 255, 80, 0], [0.32, 255, 200, 0], [0.48, 180, 255, 0], [0.6, 0, 230, 90], [0.74, 0, 220, 230], [0.88, 0, 110, 255], [1, 0, 0, 180]], jet: [[0, 0, 0, 180], [0.12, 0, 110, 255], [0.26, 0, 220, 230], [0.4, 0, 230, 90], [0.52, 180, 255, 0], [0.68, 255, 200, 0], [0.85, 255, 80, 0], [1, 200, 0, 0]], viridis: [[0, 68, 1, 84], [0.25, 59, 82, 139], [0.5, 33, 145, 140], [0.75, 94, 201, 98], [1, 253, 231, 37]] }, En = Y.state("safe"), Do = Y.state("auto");
function Yo(e) {
  e = Math.max(0, Math.min(1, e));
  const a = ws[En.val] ?? Xo;
  for (let m = 0; m < a.length - 1; m++) {
    const [c, w, p, x] = a[m], [g, b, k, v] = a[m + 1];
    if (e <= g) {
      const D = (e - c) / (g - c);
      return [w + (b - w) * D, p + (k - p) * D, x + (v - x) * D];
    }
  }
  const u = a[a.length - 1];
  return [u[1], u[2], u[3]];
}
function zo() {
  const a = new Uint8Array(1024);
  for (let m = 0; m < 256; m++) {
    const c = m / 255, [w, p, x] = Yo(c);
    a[m * 4 + 0] = w, a[m * 4 + 1] = p, a[m * 4 + 2] = x, a[m * 4 + 3] = 255;
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
  Y.derive(() => {
    var _a;
    En.val;
    const p = c.uniforms.cmap.value;
    c.uniforms.cmap.value = zo(), (_a = p == null ? void 0 : p.dispose) == null ? void 0 : _a.call(p);
  });
  const w = new Ke(new xe(), c);
  return w.renderOrder = -1, w.frustumCulled = false, w.userData.isShellArea = true, w.name = "__hekatan_shell_colormap", Y.derive(() => {
    w.geometry.setAttribute("position", new ft(e.val.flat(), 3));
    const p = [], x = [], g = [];
    a.val.forEach((G, we) => {
      G.length === 3 ? (p.push(G[0], G[1], G[2]), x.push(we), g.push(0)) : G.length === 4 && (p.push(G[0], G[1], G[2]), p.push(G[0], G[2], G[3]), x.push(we, we), g.push(0, 1));
    }), w.geometry.setIndex(new ts(p, 1)), w.userData.faceToElem = x, w.userData.faceLocal = g;
    const b = u.val.filter((G) => Number.isFinite(G));
    let k, v;
    const D = Mn.val;
    if (D ? (v = D[0], k = D[1]) : [v, k] = so(b), k === v) {
      const G = Math.max(Math.abs(k) * 1e-6, 1e-9);
      k += G, v -= G;
    }
    const fe = D && D[0] > D[1], oe = Math.min(v, k), O = Math.max(v, k), z = O - oe, j = new Float32Array(u.val.length);
    for (let G = 0; G < u.val.length; G++) {
      const we = u.val[G];
      if (!Number.isFinite(we)) {
        j[G] = -1;
        continue;
      }
      const I = ((fe ? O + oe - we : we) - oe) / z;
      j[G] = Math.max(0, Math.min(1, I));
    }
    w.geometry.setAttribute("scalar", new at(j, 1));
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
  const x = () => {
    const v = m.querySelector(".tp-rotv_b");
    if (!v) {
      setTimeout(x, 200);
      return;
    }
    v.style.cursor = "move", v.style.userSelect = "none";
    let D = false, fe = 0, oe = 0, O = 0, z = 0;
    v.addEventListener("mousedown", (j) => {
      D = true, fe = j.clientX, oe = j.clientY;
      const G = m.getBoundingClientRect();
      O = G.left, z = G.top, m.style.left = `${O}px`, m.style.top = `${z}px`;
    }), window.addEventListener("mousemove", (j) => {
      if (!D) return;
      const G = j.clientX - fe, we = j.clientY - oe, me = Math.max(0, Math.min(window.innerWidth - 40, O + G)), I = Math.max(0, Math.min(window.innerHeight - 40, z + we));
      m.style.left = `${me}px`, m.style.top = `${I}px`;
    }), window.addEventListener("mouseup", () => {
      if (D) {
        D = false;
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
    const D = c.addFolder({ title: "\u{1F441} Ver", expanded: false });
    D.addBinding(e.nodes, "val", { label: "Nodes" }), D.addBinding(e.elements, "val", { label: "Elements" }), D.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), D.addBinding(e.faces, "val", { label: "  Caras (fill)" }), D.addBinding(e.elemFrames, "val", { label: "  Frames (todos)" }), D.addBinding(e.elemColumns, "val", { label: "    Columnas" }), D.addBinding(e.elemBeams, "val", { label: "    Vigas" }), D.addBinding(e.elemZapatas, "val", { label: "  Zapatas (shells z\u22640)" }), D.addBinding(e.elemLosas, "val", { label: "  Losas (shells z>0)" }), D.addBinding(e.colorByType, "val", { label: "  \u{1F3A8} Color por tipo" }), D.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), D.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), D.addBinding(e.orientations, "val", { label: "Orientations" }), D.addBinding(e.sections, "val", { label: "Sections" }), D.addBinding(e.extruded, "val", { label: "Extruido (3D)" }), D.addBinding(e.sectionLabels, "val", { label: "  Sec. Labels (30x50)" }), D.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), D.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), D.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } });
  }
  if ((a == null ? void 0 : a.nodeInputs) || (a == null ? void 0 : a.elementInputs)) {
    const v = c.addFolder({ title: "\u{1F4CC} Analysis Inputs", expanded: false });
    v.addBinding(e.supports, "val", { label: "Supports" }), v.addBinding(e.loads, "val", { label: "Loads" }), v.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), v.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((a == null ? void 0 : a.deformOutputs) || (a == null ? void 0 : a.analyzeOutputs)) {
    const v = c.addFolder({ title: "\u{1F52C} Analyze", expanded: true });
    window.__hekatanOutputsFolder = v, v.addBinding(e.nodeResults, "val", { options: { none: "none", "U (deformations)": "deformations", "R (reactions)": "reactions" }, label: "Node results" }), v.addBinding(e.frameResults, "val", { options: { none: "none", "Axial Force": "normals", Torsion: "torsions", "Shear 2-2": "shearsY", "Shear 3-3": "shearsZ", "Moment 2-2": "bendingsY", "Moment 3-3": "bendingsZ", "Axial Force (diagram)": "contour:normals", "Shear 2-2 (diagram)": "contour:shearsY", "Shear 3-3 (diagram)": "contour:shearsZ", "Torsion (diagram)": "contour:torsions", "Moment 2-2 (diagram)": "contour:bendingsY", "Moment 3-3 (diagram)": "contour:bendingsZ" }, label: "Frame results" }), v.addBinding(e.shellResults, "val", { options: { none: "none", F11: "membraneXX", F22: "membraneYY", F12: "membraneXY", FMax: "membranePrincipalMax", FMin: "membranePrincipalMin", FVM: "vonMises", V13: "tranverseShearX", V23: "tranverseShearY", VMax: "transverseShearMax", M11: "bendingXX", M22: "bendingYY", M12: "bendingXY", MMax: "bendingPrincipalMax", MMin: "bendingPrincipalMin", "Pressure (suelo)": "pressure", Ux: "displacementX", Uy: "displacementY", Uz: "displacementZ" }, label: "Shell results" }), v.addBinding(En, "val", { options: { "SAFE (cimentaci\xF3n)": "safe", "ETABS / CSI (magenta\u2192azul)": "csi", "Jet_r (rojo\u2192azul)": "jet_r", "Jet (azul\u2192rojo)": "jet", Viridis: "viridis" }, label: "\u{1F3A8} Paleta colores" }), v.addBinding(Do, "val", { options: { "todas las c\xE1scaras": "auto", "solo muros": "muros", "muros X (plano x=cte)": "murosX", "muros Y (plano y=cte)": "murosY", "solo losas": "losas" }, label: "\u{1F4D0} Rango colormap" }), v.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), v.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), v.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), v.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  u && c.addBinding(e.solids, "val", { label: "Solids" });
  const g = c.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), b = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), k = () => {
    const v = window.__hekatanClipApply;
    typeof v == "function" && v();
  };
  return g.addBinding(b, "enableX", { label: "Cortar X" }).on("change", k), g.addBinding(b, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", k), g.addBinding(b, "invertX", { label: "  invertir X" }).on("change", k), g.addBinding(b, "enableY", { label: "Cortar Y" }).on("change", k), g.addBinding(b, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", k), g.addBinding(b, "invertY", { label: "  invertir Y" }).on("change", k), g.addBinding(b, "enableZ", { label: "Cortar Z" }).on("change", k), g.addBinding(b, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", k), g.addBinding(b, "invertZ", { label: "  invertir Z" }).on("change", k), m;
}
function vs(e) {
  return { gridSize: Y.state((e == null ? void 0 : e.gridSize) ?? 30), gridVisible: Y.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: Y.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: Y.state((e == null ? void 0 : e.gridStep) ?? 1), gridMajor: Y.state((e == null ? void 0 : e.gridMajor) ?? 5), cursorSnap: Y.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: Y.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: Y.state((e == null ? void 0 : e.gridXZ) ?? false), gridYZ: Y.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: Y.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: Y.state((e == null ? void 0 : e.nodes) ?? true), elements: Y.state((e == null ? void 0 : e.elements) ?? true), edges: Y.state((e == null ? void 0 : e.edges) ?? true), faces: Y.state((e == null ? void 0 : e.faces) ?? true), elemColumns: Y.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: Y.state((e == null ? void 0 : e.elemBeams) ?? true), elemFrames: Y.state((e == null ? void 0 : e.elemFrames) ?? true), elemZapatas: Y.state((e == null ? void 0 : e.elemZapatas) ?? true), elemLosas: Y.state((e == null ? void 0 : e.elemLosas) ?? true), colorByType: Y.state((e == null ? void 0 : e.colorByType) ?? false), nodesIndexes: Y.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: Y.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: Y.state((e == null ? void 0 : e.orientations) ?? false), sections: Y.state((e == null ? void 0 : e.sections) ?? true), extruded: Y.state((e == null ? void 0 : e.extruded) ?? false), sectionLabels: Y.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: Y.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: Y.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: Y.state((e == null ? void 0 : e.secFloor) ?? -1), supports: Y.state((e == null ? void 0 : e.supports) ?? true), loads: Y.state((e == null ? void 0 : e.loads) ?? false), deformedShape: Y.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: Y.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: Y.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: Y.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: Y.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: Y.state((e == null ? void 0 : e.flipAxes) ?? false), solids: Y.state((e == null ? void 0 : e.solids) ?? true), custom3D: Y.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: Y.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: Y.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: Y.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function Ms(e, a, u) {
  const m = en(), c = new Cn(new xe(), new Fn({ color: m.nodePoint }));
  return $o((w, p) => {
    c.material.color.setHex(p.nodePoint);
  }), c.frustumCulled = false, Y.derive(() => {
    e.nodes.val && c.geometry.setAttribute("position", new ft(a.val.flat(), 3));
  }), Y.derive(() => {
    if (u.val, a.val, !e.nodes.rawVal) return;
    const w = a.rawVal ?? [];
    let p = e.gridSize.val * 0.5;
    if (w.length >= 2) {
      const g = [1 / 0, 1 / 0, 1 / 0], b = [-1 / 0, -1 / 0, -1 / 0];
      for (const k of w) for (let v = 0; v < 3; v++) g[v] = Math.min(g[v], k[v]), b[v] = Math.max(b[v], k[v]);
      p = Math.max(b[0] - g[0], b[1] - g[1], b[2] - g[2], 0.1);
    }
    const x = 0.03 * p;
    c.material.size = x * u.rawVal;
  }), Y.derive(() => {
    c.visible = e.nodes.val;
  }), c;
}
function jn(e, a) {
  const u = en(), m = new He();
  m.name = "hekatan-grid";
  const c = (a == null ? void 0 : a.planes) ?? ["xy"];
  let w = (a == null ? void 0 : a.majorStep) ?? 1, p = (a == null ? void 0 : a.minorStep) ?? 0.1;
  for (w <= 0 && (w = 1), p <= 0 && (p = 0.1); e / p > 500; ) p *= 2;
  for (; e / w > 100; ) w *= 2;
  const x = e / 2;
  w = Math.max(p, Math.round(w / p) * p);
  const b = new It(u.grid), k = new It(u.grid).multiplyScalar(0.45), v = (O, z, j, G) => {
    const we = [], me = O === "xy" ? (F, $) => [F, $, 0] : O === "xz" ? (F, $) => [F, 0, $] : (F, $) => [0, F, $], I = Math.floor(x / z);
    for (let F = -I; F <= I; F++) {
      const $ = F * z, T = me($, -x), A = me($, x);
      we.push(...T, ...A);
    }
    for (let F = -I; F <= I; F++) {
      const $ = F * z, T = me(-x, $), A = me(x, $);
      we.push(...T, ...A);
    }
    const L = new xe();
    L.setAttribute("position", new ft(we, 3));
    const X = new it({ color: j, transparent: true, opacity: G, depthWrite: false }), V = new Xt(L, X);
    return V.name = `grid-${O}-${z === p ? "minor" : "major"}`, V;
  }, D = (O, z, j) => {
    const G = O === "xy" ? (V, F) => [V, F, 0] : O === "xz" ? (V, F) => [V, 0, F] : (V, F) => [0, V, F], we = [[-x, -x], [x, -x], [x, x], [-x, x]], me = [];
    for (const [V, F] of we) me.push(...G(V, F));
    const I = new xe();
    I.setAttribute("position", new ft(me, 3));
    const L = new it({ color: z, transparent: true, opacity: j, depthWrite: false }), X = new Io(I, L);
    return X.name = `grid-${O}-border`, X.renderOrder = 1, X;
  }, fe = (O, z, j) => {
    const G = O === "xy" ? (L, X) => [L, X, 0] : O === "xz" ? (L, X) => [L, 0, X] : (L, X) => [0, L, X], we = z === "u" ? [...G(-x, 0), ...G(x, 0)] : [...G(0, -x), ...G(0, x)], me = new xe();
    me.setAttribute("position", new ft(we, 3));
    const I = new Xt(me, new it({ color: j, transparent: true, opacity: 0.45, depthWrite: false }));
    return I.name = `grid-${O}-eje-${z}`, I.renderOrder = 1, I;
  }, oe = { xy: [14042459, 5155178], xz: [14042459, 4882390], yz: [5155178, 4882390] };
  for (const O of c) {
    m.add(v(O, p, k, 0.12)), m.add(v(O, w, b, 0.4));
    const [z, j] = oe[O];
    m.add(fe(O, "u", z)), m.add(fe(O, "v", j)), m.add(D(O, b, 0.55));
  }
  return m.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: w, minorStep: p, gridSize: e, planes: [...c] }, m;
}
function bs(e, a, u, m) {
  const c = new He(), w = new ss(0.5, 0.5, 0.5), p = new as(0.45, 0.7, 4);
  p.rotateX(Math.PI / 2), p.translate(0, 0, -0.35);
  const x = new je({ color: 10166822 }), g = new je({ color: 2792847 }), b = new je({ color: 3835647 }), k = () => {
    const fe = u.rawVal ?? [];
    if (fe.length < 2) return a.gridSize.val * 0.5;
    let oe = [1 / 0, 1 / 0, 1 / 0], O = [-1 / 0, -1 / 0, -1 / 0];
    for (const z of fe) for (let j = 0; j < 3; j++) z[j] < oe[j] && (oe[j] = z[j]), z[j] > O[j] && (O[j] = z[j]);
    return Math.max(O[0] - oe[0], O[1] - oe[1], O[2] - oe[2], 0.1);
  }, v = () => 0.08 * k(), D = () => m.rawVal;
  return Y.derive(() => {
    var _a, _b;
    if (a.deformedShape.val, !a.supports.val) return;
    c.clear();
    const fe = v();
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((oe, O) => {
      const z = u.val[O];
      if (!z) return;
      const j = oe ?? [], G = (j[0] ? 1 : 0) + (j[1] ? 1 : 0) + (j[2] ? 1 : 0), we = (j[3] ? 1 : 0) + (j[4] ? 1 : 0) + (j[5] ? 1 : 0);
      let me;
      G >= 3 && we >= 3 ? me = new Ke(w, x) : G >= 3 && we === 0 ? me = new Ke(p, g) : me = new Ke(p, b), me.position.set(z[0], z[1], z[2]);
      const I = fe * D();
      me.scale.set(I, I, I), c.add(me);
    });
  }), Y.derive(() => {
    if (m.val, !a.supports.rawVal) return;
    const oe = v() * D();
    c.children.forEach((O) => O.scale.set(oe, oe, oe));
  }), Y.derive(() => {
    c.visible = a.supports.val;
  }), c;
}
function _s(e, a, u, m) {
  const c = new He();
  c.name = "loadsGroup";
  function w(p) {
    if (p.length < 2) return 0.12 * a.gridSize.rawVal;
    const x = [1 / 0, 1 / 0, 1 / 0], g = [-1 / 0, -1 / 0, -1 / 0];
    for (const k of p) for (let v = 0; v < 3; v++) x[v] = Math.min(x[v], k[v]), g[v] = Math.max(g[v], k[v]);
    return 0.08 * Math.max(g[0] - x[0], g[1] - x[1], g[2] - x[2], 0.1);
  }
  return Y.derive(() => {
    var _a, _b, _c;
    if (a.deformedShape.val, !a.loads.val) return;
    c.children.forEach((v) => v.dispose()), c.clear();
    const p = u.val, x = w(p), g = 240, b = [];
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((v, D) => {
      p[D] && v.slice(0, 3).some((fe) => Math.abs(fe) > 1e-15) && b.push(D);
    });
    let k = b;
    if (b.length > g) {
      const v = b.map((V) => p[V][0]), D = b.map((V) => p[V][1]), fe = Math.min(...v), oe = Math.max(...v), O = Math.min(...D), z = Math.max(...D), j = b.map((V) => p[V][2]), G = Math.max(1e-6, (Math.max(...j) - Math.min(...j)) / 40), we = (V) => Math.round(V / G), me = new Set(j.map(we)), I = Math.max(4, Math.floor(g / Math.max(1, me.size))), L = Math.max(2, Math.round(Math.sqrt(I))), X = /* @__PURE__ */ new Map();
      for (const V of b) {
        const F = oe - fe < 1e-9 ? 0 : (p[V][0] - fe) / (oe - fe), $ = z - O < 1e-9 ? 0 : (p[V][1] - O) / (z - O), T = Math.min(L - 1, Math.floor(F * L)), A = Math.min(L - 1, Math.floor($ * L)), q = `${T},${A},${we(p[V][2])}`, se = Math.hypot(F * L - (T + 0.5), $ * L - (A + 0.5)), ee = X.get(q);
        (!ee || se < ee.d) && X.set(q, { i: V, d: se });
      }
      k = [...X.values()].map((V) => V.i);
    }
    for (const v of k) {
      const D = e.nodeInputs.val.loads.get(v), fe = p[v];
      if (!fe) continue;
      const oe = new M(...D.slice(0, 3));
      if (oe.lengthSq() < 1e-30) continue;
      oe.normalize();
      const O = new jt(oe, new M(...fe), 1, 15637248, 0.3, 0.3), z = x * m.rawVal;
      O.scale.set(z, z, z), c.add(O);
    }
  }), Y.derive(() => {
    if (m.val, !a.loads.rawVal) return;
    const x = w(u.rawVal) * m.rawVal;
    c.children.forEach((g) => g.scale.set(x, x, x));
  }), Y.derive(() => {
    c.visible = a.loads.val;
  }), c;
}
function Ss(e, a, u) {
  const m = new He();
  return Y.derive(() => {
    if (!e.nodesIndexes.val) return;
    m.children.forEach((w) => w.dispose()), m.clear();
    const c = 0.05 * e.gridSize.val * 0.6;
    a.val.forEach((w, p) => {
      const x = new gt(`${p}`);
      x.position.set(...w), x.updateScale(c * u.rawVal), m.add(x);
    });
  }), Y.derive(() => {
    if (u.val, !e.nodesIndexes.rawVal) return;
    const c = 0.05 * e.gridSize.val * 0.6;
    m.children.forEach((w) => w.updateScale(c * u.rawVal));
  }), Y.derive(() => {
    m.visible = e.nodesIndexes.val;
  }), m;
}
function ks(e, a, u, m) {
  const c = new He();
  return Y.derive(() => {
    var _a;
    if (a.deformedShape.val, !a.elementsIndexes.val) return;
    c.children.forEach((p) => p.dispose()), c.clear();
    const w = 0.05 * a.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((p, x) => {
      const g = new gt(`${x}`, void 0, "#001219");
      g.position.set(...Ps(p.map((b) => u.rawVal[b]))), g.updateScale(w * m.rawVal), c.add(g);
    });
  }), Y.derive(() => {
    if (m.val, !a.elementsIndexes.rawVal) return;
    const w = 0.05 * a.gridSize.val * 0.6;
    c.children.forEach((p) => p.updateScale(w * m.rawVal));
  }), Y.derive(() => {
    c.visible = a.elementsIndexes.val;
  }), c;
}
function Ps(e) {
  const a = e.reduce((m, c) => [m[0] + c[0], m[1] + c[1], m[2] + c[2]], [0, 0, 0]), u = e.length;
  return [a[0] / u, a[1] / u, a[2] / u];
}
function Co(e, a) {
  const u = new He(), m = Math.min(0.05 * e, 0.6), c = en(), w = new gt("X", "red", "transparent"), p = new gt(a ? "Z" : "Y", "green", "transparent"), x = new gt(a ? "Y" : "Z", "blue", "transparent"), g = new jt(new M(1, 0, 0), new M(0, 0, 0), 1, c.axisArrow, 0.2, 0.2), b = new jt(new M(0, 1, 0), new M(0, 0, 0), 1, c.axisArrow, 0.2, 0.2), k = new jt(new M(0, 0, 1), new M(0, 0, 0), 1, c.axisArrow, 0.2, 0.2);
  return w.position.set(1.3 * m, 0, 0), p.position.set(0, 1.3 * m, 0), x.position.set(0, 0, 1.3 * m), w.updateScale(0.4 * m), p.updateScale(0.4 * m), x.updateScale(0.4 * m), g.scale.set(m, m, m), b.scale.set(m, m, m), k.scale.set(m, m, m), u.add(g, b, k, w, p, x), u;
}
function Tn(e, a) {
  const u = new M(...e), c = new M(...a).clone().sub(u), w = c.length(), p = c.dot(new M(1, 0, 0)) / w, x = c.dot(new M(0, 1, 0)) / w, g = c.dot(new M(0, 0, 1)) / w, b = Math.sqrt(p ** 2 + x ** 2);
  let k = new Hn().fromArray([[p, x, g], [-x / b, p / b, 0], [-p * g / b, -x * g / b, b]].flat());
  return g === 1 && (k = new Hn().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), g === -1 && (k = new Hn().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new oo().setFromMatrix3(k);
}
function to(e, a) {
  return e == null ? void 0 : e.map((u, m) => (9 * u + a[m]) / 10);
}
function vn(e) {
  const a = e.reduce((m, c) => [m[0] + c[0], m[1] + c[1], m[2] + c[2]], [0, 0, 0]), u = e.length;
  return [a[0] / u, a[1] / u, a[2] / u];
}
function zs(e, a, u) {
  const m = vn([a, u]), c = vn([e, u]), w = vn([e, a]), p = new M(...m).sub(new M(...c)).normalize(), x = new M(...u).sub(new M(...w)).normalize(), g = p.clone().cross(x).normalize(), b = g.clone().cross(p).normalize();
  return new oo().makeBasis(p, b, g);
}
function Cs(e, a, u, m) {
  const c = new He(), w = new xe(), p = new it({ vertexColors: true }), x = [0, 0, 0], g = [1, 0, 0], b = [0, 1, 0], k = [0, 0, 1];
  w.setAttribute("position", new ft([...x, ...g, ...x, ...b, ...x, ...k], 3));
  const v = [255, 0, 0], D = [0, 255, 0], fe = [0, 0, 255];
  return w.setAttribute("color", new ft([...v, ...v, ...D, ...D, ...fe, ...fe], 3)), Y.derive(() => {
    var _a;
    a.deformedShape.val, a.orientations.val && (c.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((oe) => {
      const O = new Xt(w, p), z = u.rawVal[oe[0]], j = u.rawVal[oe[1]];
      if (oe.length === 2 && (O.position.set(...to(z, j)), O.rotation.setFromRotationMatrix(Tn(z, j))), oe.length === 3) {
        const me = u.rawVal[oe[2]];
        O.position.set(...vn([z, j, me])), O.rotation.setFromRotationMatrix(zs(z, j, me));
      }
      const we = 0.05 * a.gridSize.rawVal * 0.75 * m.rawVal;
      O.scale.set(we, we, we), c.add(O);
    }));
  }), Y.derive(() => {
    if (m.val, !a.orientations.rawVal) return;
    const O = 0.05 * a.gridSize.val * 0.75 * m.rawVal;
    c.children.forEach((z) => z.scale.set(O, O, O));
  }), Y.derive(() => {
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
  const c = new He(), w = new He();
  c.add(w);
  function p(L, X) {
    const V = L / 2, F = X / 2, $ = new Float32Array([0, -V, -F, 0, V, -F, 0, V, F, 0, -V, -F, 0, V, F, 0, -V, F]), T = new xe();
    T.setAttribute("position", new at($, 3));
    const A = new Float32Array([0, -V, -F, 0, V, -F, 0, V, F, 0, -V, F, 0, -V, -F]), q = new xe();
    return q.setAttribute("position", new at(A, 3)), { fill: T, outline: q };
  }
  function x(L, X = 24) {
    const V = L / 2, F = new Float32Array(X * 9);
    for (let q = 0; q < X; q++) {
      const se = q / X * Math.PI * 2, ee = (q + 1) / X * Math.PI * 2;
      F[q * 9] = 0, F[q * 9 + 1] = 0, F[q * 9 + 2] = 0, F[q * 9 + 3] = 0, F[q * 9 + 4] = V * Math.cos(se), F[q * 9 + 5] = V * Math.sin(se), F[q * 9 + 6] = 0, F[q * 9 + 7] = V * Math.cos(ee), F[q * 9 + 8] = V * Math.sin(ee);
    }
    const $ = new xe();
    $.setAttribute("position", new at(F, 3));
    const T = new Float32Array((X + 1) * 3);
    for (let q = 0; q <= X; q++) {
      const se = q / X * Math.PI * 2;
      T[q * 3] = 0, T[q * 3 + 1] = V * Math.cos(se), T[q * 3 + 2] = V * Math.sin(se);
    }
    const A = new xe();
    return A.setAttribute("position", new at(T, 3)), { fill: $, outline: A };
  }
  function g(L, X, V, F) {
    const $ = V ?? X * 0.08, T = F ?? L * 0.07, A = L / 2, q = X / 2, se = q - $, ee = T / 2, Q = [];
    function E(pe, Ce, ye, Ae) {
      Q.push(0, pe, Ce, 0, ye, Ce, 0, ye, Ae, 0, pe, Ce, 0, ye, Ae, 0, pe, Ae);
    }
    E(-A, -q, A, -se), E(-ee, -se, ee, se), E(-A, se, A, q);
    const ie = new xe();
    ie.setAttribute("position", new at(new Float32Array(Q), 3));
    const Z = new Float32Array([0, -A, -q, 0, A, -q, 0, A, -se, 0, ee, -se, 0, ee, se, 0, A, se, 0, A, q, 0, -A, q, 0, -A, se, 0, -ee, se, 0, -ee, -se, 0, -A, -se, 0, -A, -q]), ce = new xe();
    return ce.setAttribute("position", new at(Z, 3)), { fill: ie, outline: ce };
  }
  function b(L, X, V) {
    const F = L / 2, $ = X / 2, T = F - V, A = $ - V, q = [];
    function se(ie, Z, ce, pe) {
      q.push(0, ie, Z, 0, ce, Z, 0, ce, pe, 0, ie, Z, 0, ce, pe, 0, ie, pe);
    }
    se(-F, -$, F, -A), se(-F, A, F, $), se(-F, -A, -T, A), se(T, -A, F, A);
    const ee = new xe();
    ee.setAttribute("position", new at(new Float32Array(q), 3));
    const Q = new Float32Array([0, -F, -$, 0, F, -$, 0, F, -$, 0, F, $, 0, F, $, 0, -F, $, 0, -F, $, 0, -F, -$, 0, -T, -A, 0, T, -A, 0, T, -A, 0, T, A, 0, T, A, 0, -T, A, 0, -T, A, 0, -T, -A]), E = new xe();
    return E.setAttribute("position", new at(Q, 3)), { fill: ee, outline: E };
  }
  function k(L, X, V) {
    const F = L / 2, $ = X / 2, T = F - V, A = $ - V, q = new xe(), se = new Float32Array([0, -T, -A, 0, T, -A, 0, T, A, 0, -T, -A, 0, T, A, 0, -T, A]);
    q.setAttribute("position", new at(se, 3));
    const ee = [];
    function Q(ce, pe, Ce, ye) {
      ee.push(0, ce, pe, 0, Ce, pe, 0, Ce, ye, 0, ce, pe, 0, Ce, ye, 0, ce, ye);
    }
    Q(-F, -$, F, -A), Q(-F, A, F, $), Q(-F, -A, -T, A), Q(T, -A, F, A);
    const E = new xe();
    E.setAttribute("position", new at(new Float32Array(ee), 3));
    const ie = new Float32Array([0, -F, -$, 0, F, -$, 0, F, -$, 0, F, $, 0, F, $, 0, -F, $, 0, -F, $, 0, -F, -$, 0, -T, -A, 0, T, -A, 0, T, -A, 0, T, A, 0, T, A, 0, -T, A, 0, -T, A, 0, -T, -A]), Z = new xe();
    return Z.setAttribute("position", new at(ie, 3)), { concFill: q, steelFillGeom: E, outline: Z };
  }
  function v(L, X, V) {
    const F = [], $ = [[0, -L / 2, -X / 2], [0, -L / 2 + V, -X / 2], [0, -L / 2 + V, X / 2 - V], [0, L / 2, X / 2 - V], [0, L / 2, X / 2], [0, -L / 2, X / 2]], T = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const ee of T) F.push(...$[ee]);
    const A = new xe();
    A.setAttribute("position", new at(new Float32Array(F), 3));
    const q = [];
    for (let ee = 0; ee < $.length; ee++) {
      const Q = (ee + 1) % $.length;
      q.push(...$[ee], ...$[Q]);
    }
    const se = new xe();
    return se.setAttribute("position", new at(new Float32Array(q), 3)), { fill: A, outline: se };
  }
  function D(L, X, V, F) {
    const $ = F / 2, T = [], A = [[0, -L - $, -X / 2], [0, -V - $, -X / 2], [0, -V - $, X / 2 - V], [0, -$, X / 2 - V], [0, -$, X / 2], [0, -L - $, X / 2]], q = [[0, $, -X / 2], [0, $ + V, -X / 2], [0, $ + V, X / 2 - V], [0, L + $, X / 2 - V], [0, L + $, X / 2], [0, $, X / 2]], se = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const ie of se) T.push(...A[ie]);
    for (const ie of se) T.push(...q[ie]);
    const ee = new xe();
    ee.setAttribute("position", new at(new Float32Array(T), 3));
    const Q = [];
    for (const ie of [A, q]) for (let Z = 0; Z < ie.length; Z++) {
      const ce = (Z + 1) % ie.length;
      Q.push(...ie[Z], ...ie[ce]);
    }
    const E = new xe();
    return E.setAttribute("position", new at(new Float32Array(Q), 3)), { fill: ee, outline: E };
  }
  function fe(L, X, V, F) {
    const $ = X / 2, T = L, A = [[0, -T, -$], [0, -T, -$ + V], [0, -F, -$ + V], [0, -F, $ - V], [0, -T, $ - V], [0, -T, $], [0, 0, $], [0, 0, -$]], q = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], se = [];
    for (const ie of q) se.push(...A[ie]);
    const ee = new xe();
    ee.setAttribute("position", new at(new Float32Array(se), 3));
    const Q = [];
    for (let ie = 0; ie < A.length; ie++) {
      const Z = (ie + 1) % A.length;
      Q.push(...A[ie], ...A[Z]);
    }
    const E = new xe();
    return E.setAttribute("position", new at(new Float32Array(Q), 3)), { fill: ee, outline: E };
  }
  function oe(L, X, V, F, $) {
    const T = X / 2, A = $ / 2, q = [], se = [[0, -L, -T], [0, -L, -T + V], [0, -A - F, -T + V], [0, -A - F, T - V], [0, -L, T - V], [0, -L, T], [0, -A, T], [0, -A, -T]], ee = se.map((ce) => [ce[0], -ce[1], ce[2]]), Q = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const ce of Q) q.push(...se[ce]);
    for (const ce of Q) q.push(...ee[ce]);
    const E = new xe();
    E.setAttribute("position", new at(new Float32Array(q), 3));
    const ie = [];
    for (const ce of [se, ee]) for (let pe = 0; pe < ce.length; pe++) {
      const Ce = (pe + 1) % ce.length;
      ie.push(...ce[pe], ...ce[Ce]);
    }
    const Z = new xe();
    return Z.setAttribute("position", new at(new Float32Array(ie), 3)), { fill: E, outline: Z };
  }
  function O(L, X, V, F) {
    const $ = L / 2, T = X / 2, A = F / 2, q = [[0, -A, -T], [0, A, -T], [0, A, T - V], [0, $, T - V], [0, $, T], [0, -$, T], [0, -$, T - V], [0, -A, T - V]], se = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], ee = [];
    for (const Z of se) ee.push(...q[Z]);
    const Q = new xe();
    Q.setAttribute("position", new at(new Float32Array(ee), 3));
    const E = [];
    for (let Z = 0; Z < q.length; Z++) {
      const ce = (Z + 1) % q.length;
      E.push(...q[Z], ...q[ce]);
    }
    const ie = new xe();
    return ie.setAttribute("position", new at(new Float32Array(E), 3)), { fill: Q, outline: ie };
  }
  function z(L, X, V = 24) {
    const F = L / 2, $ = F - X, T = [];
    for (let ee = 0; ee < V; ee++) {
      const Q = ee / V * Math.PI * 2, E = (ee + 1) / V * Math.PI * 2, ie = Math.cos(Q), Z = Math.sin(Q), ce = Math.cos(E), pe = Math.sin(E);
      T.push(0, F * ie, F * Z, 0, F * ce, F * pe, 0, $ * ce, $ * pe), T.push(0, F * ie, F * Z, 0, $ * ce, $ * pe, 0, $ * ie, $ * Z);
    }
    const A = new xe();
    A.setAttribute("position", new at(new Float32Array(T), 3));
    const q = [];
    for (let ee = 0; ee < V; ee++) {
      const Q = ee / V * Math.PI * 2, E = (ee + 1) / V * Math.PI * 2;
      q.push(0, F * Math.cos(Q), F * Math.sin(Q), 0, F * Math.cos(E), F * Math.sin(E)), q.push(0, $ * Math.cos(Q), $ * Math.sin(Q), 0, $ * Math.cos(E), $ * Math.sin(E));
    }
    const se = new xe();
    return se.setAttribute("position", new at(new Float32Array(q), 3)), { fill: A, outline: se };
  }
  const j = new je({ color: 52479, transparent: true, opacity: 0.35, side: vt, depthWrite: false }), G = new it({ color: 52479 }), we = new je({ color: 16750848, transparent: true, opacity: 0.4, side: vt, depthWrite: false }), me = new it({ color: 16750848 });
  function I(L, X) {
    const V = Math.abs(X[0] - L[0]), F = Math.abs(X[1] - L[1]), $ = Math.abs(X[2] - L[2]);
    return $ > V && $ > F || F > V && F > $;
  }
  return Y.derive(() => {
    var _a, _b;
    a.deformedShape.val, a.secColumns.val, a.secBeams.val, a.secFloor.val;
    const L = a.secColumns.rawVal, X = a.secBeams.rawVal;
    if (!L && !X) {
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
    V.forEach((A, q) => {
      if (A.length !== 2) return;
      const se = u.rawVal[A[0]], ee = u.rawVal[A[1]];
      if (!se || !ee) return;
      const Q = I(se, ee);
      if (Q && !L || !Q && !X) return;
      if (T >= 0) {
        const pe = Math.min(se[1], ee[1]);
        Math.max(se[1], ee[1]);
        const Ce = a.gridSize.rawVal || 3;
        if (Math.floor(pe / Ce + 0.01) !== T) return;
      }
      const E = $ == null ? void 0 : $.get(q);
      if (!E) return;
      const ie = [(se[0] + ee[0]) / 2, (se[1] + ee[1]) / 2, (se[2] + ee[2]) / 2], Z = Tn(se, ee);
      if (E.type === "CFT") {
        const pe = k(E.b, E.h, E.tw ?? E.b * 0.05), Ce = new Ke(pe.concFill, j);
        Ce.position.set(...ie), Ce.rotation.setFromRotationMatrix(Z), c.add(Ce);
        const ye = new Ke(pe.steelFillGeom, we);
        ye.position.set(...ie), ye.rotation.setFromRotationMatrix(Z), c.add(ye);
        const Ae = new St(pe.outline, me);
        Ae.position.set(...ie), Ae.rotation.setFromRotationMatrix(Z), c.add(Ae);
      } else {
        let pe, Ce, ye;
        switch (E.type) {
          case "rect":
            pe = p(E.b, E.h), Ce = j, ye = G;
            break;
          case "circ":
            pe = x(E.d), Ce = j, ye = G;
            break;
          case "I":
            pe = g(E.b, E.h, E.tf, E.tw), Ce = we, ye = me;
            break;
          case "HSS":
            pe = b(E.b, E.h, E.tw ?? E.b * 0.05), Ce = we, ye = me;
            break;
          case "CFT":
            pe = k(E.b, E.h, E.tw ?? E.b * 0.05), Ce = we, ye = me;
            break;
          case "L":
            pe = v(E.b ?? E.h, E.h, E.t ?? E.tw ?? 3e-3), Ce = we, ye = me;
            break;
          case "2L":
            pe = D(E.b ?? E.h, E.h, E.t ?? E.tw ?? 3e-3, E.dis ?? 0.01), Ce = we, ye = me;
            break;
          case "C":
          case "coldC":
            pe = fe(E.b, E.h, E.tf ?? E.t ?? 3e-3, E.tw ?? E.t ?? 3e-3), Ce = we, ye = me;
            break;
          case "2C":
            pe = oe(E.b, E.h, E.tf ?? 5e-3, E.tw ?? 5e-3, E.dis ?? 0.01), Ce = we, ye = me;
            break;
          case "T":
            pe = O(E.b, E.h, E.tf ?? 0.01, E.tw ?? 6e-3), Ce = we, ye = me;
            break;
          case "pipe":
            pe = z(E.d, E.tw ?? E.d * 0.05), Ce = we, ye = me;
            break;
          default:
            return;
        }
        const Ae = new Ke(pe.fill, Ce);
        Ae.position.set(...ie), Ae.rotation.setFromRotationMatrix(Z), c.add(Ae);
        const Ge = new St(pe.outline, ye);
        Ge.position.set(...ie), Ge.rotation.setFromRotationMatrix(Z), c.add(Ge);
      }
      const ce = Fs(E);
      if (ce) {
        const Ce = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(E.type) ? "#ff9900" : "#00ccff", ye = new gt(ce, Ce, "transparent");
        ye.position.set(ie[0], ie[1], ie[2]);
        const Ae = 0.05 * a.gridSize.rawVal * 0.5;
        ye.updateScale(Ae * ((m == null ? void 0 : m.rawVal) ?? 1)), w.add(ye);
      }
    });
  }), m && Y.derive(() => {
    if (m.val, !a.sections.rawVal) return;
    const L = 0.05 * a.gridSize.val * 0.5;
    w.children.forEach((X) => {
      X instanceof gt && X.updateScale(L * m.rawVal);
    });
  }), Y.derive(() => {
    c.visible = a.sections.val;
  }), Y.derive(() => {
    w.visible = a.sectionLabels.val;
  }), c;
}
function As(e) {
  if (!e) return null;
  const a = e.type, u = (k, v) => [k, v], m = (k, v) => [u(-k / 2, -v / 2), u(k / 2, -v / 2), u(k / 2, v / 2), u(-k / 2, v / 2)], c = (k, v = 24) => {
    const D = k / 2, fe = [];
    for (let oe = 0; oe < v; oe++) {
      const O = 2 * Math.PI * oe / v;
      fe.push(u(D * Math.cos(O), D * Math.sin(O)));
    }
    return fe;
  }, w = e.b ?? 0, p = e.h ?? 0, x = e.d ?? 0, g = e.tw ?? e.t ?? 0, b = e.tf ?? e.t ?? 0;
  switch (a) {
    case "rect":
      return w && p ? { contorno: m(w, p) } : null;
    case "circ":
      return x ? { contorno: c(x) } : null;
    case "pipe":
      return x && g ? { contorno: c(x), huecos: [c(x - 2 * g).reverse()] } : null;
    case "HSS":
      return w && p && g ? { contorno: m(w, p), huecos: [m(w - 2 * g, p - 2 * (b || g)).reverse()] } : null;
    case "CFT":
      return w && p ? { contorno: m(w, p) } : null;
    case "I":
      return w && p && g && b ? { contorno: [u(-w / 2, -p / 2), u(w / 2, -p / 2), u(w / 2, -p / 2 + b), u(g / 2, -p / 2 + b), u(g / 2, p / 2 - b), u(w / 2, p / 2 - b), u(w / 2, p / 2), u(-w / 2, p / 2), u(-w / 2, p / 2 - b), u(-g / 2, p / 2 - b), u(-g / 2, -p / 2 + b), u(-w / 2, -p / 2 + b)] } : null;
    case "C":
    case "2C":
    case "coldC":
      return w && p && g && b ? { contorno: [u(-w / 2, -p / 2), u(w / 2, -p / 2), u(w / 2, -p / 2 + b), u(-w / 2 + g, -p / 2 + b), u(-w / 2 + g, p / 2 - b), u(w / 2, p / 2 - b), u(w / 2, p / 2), u(-w / 2, p / 2)] } : null;
    case "T":
      return w && p && g && b ? { contorno: [u(-g / 2, -p / 2), u(g / 2, -p / 2), u(g / 2, p / 2 - b), u(w / 2, p / 2 - b), u(w / 2, p / 2), u(-w / 2, p / 2), u(-w / 2, p / 2 - b), u(-g / 2, p / 2 - b)] } : null;
    case "L":
    case "2L":
      return w && p && g ? { contorno: [u(-w / 2, -p / 2), u(w / 2, -p / 2), u(w / 2, -p / 2 + g), u(-w / 2 + g, -p / 2 + g), u(-w / 2 + g, p / 2), u(-w / 2, p / 2)] } : null;
    default:
      return w && p ? { contorno: m(w, p) } : x ? { contorno: c(x) } : null;
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
  const m = new He();
  m.name = "extrusion";
  const c = new qn({ color: 8369151, transparent: true, opacity: 0.92, side: vt }), w = new qn({ color: 12623968, transparent: true, opacity: 0.85, side: vt }), p = new qn({ color: 11583173, transparent: true, opacity: 0.85, side: vt }), x = new He();
  x.add(new Lo(16777215, 0.55));
  const g = new An(16777215, 0.75);
  g.position.set(30, 25, 40);
  const b = new An(16777215, 0.35);
  b.position.set(-25, -20, 15), x.add(g, b);
  let k = 0;
  return Y.derive(() => {
    var _a, _b, _c, _d, _e;
    const v = ((_a = a.extruded) == null ? void 0 : _a.val) ?? false;
    globalThis.__extrusionDebug = { corridas: ++k, on: v }, m.visible = v;
    for (const G of [...m.children]) G !== x && (m.remove(G), (_c = (_b = G.geometry) == null ? void 0 : _b.dispose) == null ? void 0 : _c.call(_b));
    if (m.children.includes(x) || m.add(x), !v) return;
    const D = u.val ?? [], fe = ((_d = e.elements) == null ? void 0 : _d.val) ?? [], oe = ((_e = e.elementInputs) == null ? void 0 : _e.val) ?? {}, O = oe.sectionShapes ?? /* @__PURE__ */ new Map(), z = oe.thicknesses ?? /* @__PURE__ */ new Map();
    let j = "";
    try {
      fe.forEach((G, we) => {
        var _a2, _b2, _c2;
        if (G.length === 2) {
          let me = As(O.get(we)), I = true;
          if (me || (me = Es((_a2 = oe.areas) == null ? void 0 : _a2.get(we), (_b2 = oe.momentsOfInertiaY) == null ? void 0 : _b2.get(we), (_c2 = oe.momentsOfInertiaZ) == null ? void 0 : _c2.get(we)), I = false), !me) return;
          const L = D[G[0]], X = D[G[1]];
          if (!L || !X) return;
          const V = Math.hypot(X[0] - L[0], X[1] - L[1], X[2] - L[2]);
          if (V < 1e-9) return;
          const F = new is(Ts(me), { depth: V, bevelEnabled: false, curveSegments: 4 });
          F.applyMatrix4(new oo().set(0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1));
          const $ = new Ke(F, I ? c : w);
          $.position.set(L[0], L[1], L[2]), $.rotation.setFromRotationMatrix(Tn(L, X)), m.add($);
          return;
        }
        if (G.length === 3 || G.length === 4) {
          const me = z.get(we);
          if (!me || me <= 0) return;
          const I = G.map((Z) => D[Z]).filter(Boolean);
          if (I.length < 3) return;
          const L = [I[1][0] - I[0][0], I[1][1] - I[0][1], I[1][2] - I[0][2]], X = [I[2][0] - I[0][0], I[2][1] - I[0][1], I[2][2] - I[0][2]], V = L[1] * X[2] - L[2] * X[1], F = L[2] * X[0] - L[0] * X[2], $ = L[0] * X[1] - L[1] * X[0], T = Math.hypot(V, F, $);
          if (T < 1e-12) return;
          const A = [V / T, F / T, $ / T], q = [], se = (Z) => I.map((ce) => [ce[0] + A[0] * Z, ce[1] + A[1] * Z, ce[2] + A[2] * Z]), ee = se(+me / 2), Q = se(-me / 2), E = (Z, ce, pe) => q.push(...Z, ...ce, ...pe);
          for (const Z of [ee, Q]) E(Z[0], Z[1], Z[2]), Z.length === 4 && E(Z[0], Z[2], Z[3]);
          for (let Z = 0; Z < I.length; Z++) {
            const ce = (Z + 1) % I.length;
            E(ee[Z], Q[Z], Q[ce]), E(ee[Z], Q[ce], ee[ce]);
          }
          const ie = new xe();
          ie.setAttribute("position", new ft(q, 3)), ie.computeVertexNormals(), m.add(new Ke(ie, p));
        }
      });
    } catch (G) {
      j = String((G == null ? void 0 : G.message) ?? G);
    }
    globalThis.__extrusionDebug = { corridas: k, on: v, fallo: j, nElementos: fe.length, nFormas: O.size, nEspesores: z.size, mallas: m.children.length - 1 };
  }), m;
}
class Pn extends He {
  constructor(a, u, m, c, w, p, x) {
    super();
    const g = new gn().moveTo(0, 0).lineTo(0, p[1]).lineTo(m, p[1]).lineTo(m, 0).lineTo(0, 0), b = g.getPoints(), k = new xe().setFromPoints(b);
    this.lines = new St(k, new it({ color: en().resultOutline })), this.lines.position.set(...a), this.lines.rotation.setFromRotationMatrix(c), x && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const v = new Vn(g), D = new je({ color: p[1] > 0 ? 24435 : 11411474, side: vt });
    this.mesh = new Ke(v, D), this.mesh.position.set(...a), this.mesh.rotation.setFromRotationMatrix(c), x && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new gt(`${w[1].toFixed(4)}`), this.normalizedResult = p, this.textPosition = vn([a, u]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(c), this.add(this.text);
  }
  updateScale(a) {
    this.lines.scale.set(1, a * 2, 1), this.mesh.scale.set(1, a * 2, 1), this.text.updateScale(a * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * a);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Fo extends He {
  constructor(a, u, m, c, w, p, x) {
    super();
    const g = w[0] * m / (w[0] + w[1]), b = w[0] * w[1] > 0;
    if (this.text = new gt(`${w[0].toFixed(4)}`), this.text2 = new gt(`${(w[1] * -1).toFixed(4)}`), this.normalizedResult = p, this.textPosition = to(a, u), this.text2Position = to(u, a), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(c), this.text2.rotation.setFromRotationMatrix(c), this.add(this.text, this.text2), b) {
      const k = new gn().moveTo(0, 0).lineTo(0, p[0]).lineTo(g, 0).lineTo(0, 0), v = new gn().moveTo(g, 0).lineTo(m, -p[1]).lineTo(m, 0).lineTo(g, 0), D = k.getPoints(), fe = v.getPoints(), oe = new xe().setFromPoints(D), O = new xe().setFromPoints(fe), z = new it({ color: en().resultOutline });
      this.lines = new St(oe, z), this.lines2 = new St(O, z), this.lines.position.set(...a), this.lines2.position.set(...a), this.lines.rotation.setFromRotationMatrix(c), this.lines2.rotation.setFromRotationMatrix(c), x && this.lines.rotateX(Math.PI / 2), x && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const j = new Vn(k), G = new Vn(v), we = new je({ color: p[0] > 0 ? 24435 : 11411474, side: vt }), me = new je({ color: -p[1] > 0 ? 24435 : 11411474, side: vt });
      this.mesh = new Ke(j, we), this.mesh2 = new Ke(G, me), this.mesh.position.set(...a), this.mesh2.position.set(...a), this.mesh.rotation.setFromRotationMatrix(c), this.mesh2.rotation.setFromRotationMatrix(c), x && this.mesh.rotateX(Math.PI / 2), x && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const k = new gn().moveTo(0, 0).lineTo(0, p[0]).lineTo(m, -p[1]).lineTo(m, 0).lineTo(0, 0), v = k.getPoints(), D = new xe().setFromPoints(v);
      this.lines = new St(D, new it({ color: en().resultOutline })), this.lines.position.set(...a), this.lines.rotation.setFromRotationMatrix(c), x && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const fe = new Vn(k), oe = new je({ color: p[0] > 0 ? 24435 : 11411474, side: vt });
      this.mesh = new Ke(fe, oe), this.mesh.position.set(...a), this.mesh.rotation.setFromRotationMatrix(c), x && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
  const c = new He(), w = { normals: Pn, shearsY: Pn, shearsZ: Pn, torsions: Pn, bendingsY: Fo, bendingsZ: Fo };
  return Y.derive(() => {
    var _a, _b;
    if (a.deformedShape.val, u.val, a.frameResults.val == "none") return;
    c.children.forEach((x) => x.dispose()), c.clear();
    const p = No[a.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[p]) == null ? void 0 : _b.forEach((x, g) => {
      var _a2, _b2;
      const b = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[g]) ?? [0, 1], k = u.rawVal[b[0]], v = u.rawVal[b[1]], D = new M(...v).distanceTo(new M(...k)), fe = Ls((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[p]), oe = x == null ? void 0 : x.map((G) => G / (fe === 0 ? 1 : fe)), O = Tn(k, v), z = new w[p](k, v, D, O, x ?? [0, 0], oe ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(p)), j = 0.05 * a.gridSize.rawVal;
      z.updateScale(j * m.rawVal), c.add(z);
    });
  }), Y.derive(() => {
    if (m.val, a.frameResults.rawVal == "none") return;
    const p = 0.05 * a.gridSize.val;
    c.children.forEach((x) => x.updateScale(p * m.rawVal));
  }), Y.derive(() => {
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
class Bs extends He {
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
  const c = new He();
  return Y.derive(() => {
    var _a, _b;
    if (a.deformedShape.val, a.nodeResults.val == "none") return;
    c.children.forEach((x) => x.dispose()), c.clear();
    const w = ao[a.nodeResults.rawVal], p = 0.05 * a.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[w]) == null ? void 0 : _b.forEach((x, g) => {
      const b = new Bs(u.rawVal[g], w, x ?? [0, 0, 0, 0, 0, 0]);
      b.updateScale(p * m.rawVal), c.add(b);
    });
  }), Y.derive(() => {
    if (m.val, a.nodeResults.rawVal == "none") return;
    const w = 0.05 * a.gridSize.val;
    c.children.forEach((p) => p.updateScale(w * m.rawVal));
  }), Y.derive(() => {
    c.visible = a.nodeResults.val != "none";
  }), c;
}
function Xs({ drawingObj: e, gridObj: a, scene: u, getActiveCamera: m, controls: c, gridSize: w, derivedDisplayScale: p, rendererElm: x, viewerRender: g }) {
  const b = new rs(), k = new cs(), v = (n) => {
    const o = x.getBoundingClientRect(), i = n.clientX - o.left, t = n.clientY - o.top, r = o.width || 1, s = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const f = r / 2;
      if (i >= f) return k.x = (i - f) / f * 2 - 1, k.y = -(t / s) * 2 + 1, window.__hekatanSplitCamera ?? m();
      k.x = i / f * 2 - 1;
    } else k.x = i / r * 2 - 1;
    return k.y = -(t / s) * 2 + 1, m();
  }, D = new Ke(new Wt(1e4, 1e4), new je({ side: vt, transparent: true, opacity: 0, depthWrite: false }));
  D.visible = true, D.frustumCulled = false, u.add(D);
  const fe = (n, o, i) => {
    const t = new Ke(new Wt(1e4, 1e4), new je({ side: vt, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, i), t.visible = false, t.frustumCulled = false, u.add(t), t;
  }, oe = fe(Math.PI / 2, 0, 0), O = fe(0, Math.PI / 2, 0);
  let z = false;
  const j = () => {
    if (z) return b.intersectObjects([D], false);
    if (oe.visible = !!window.__hekatanGridPlaneXZ, O.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanOrthoRaycast === true && ze.visible) {
      const i = b.intersectObjects([ze, $e, Ie], false);
      if (i.length > 0) return i;
    }
    const o = [D];
    return oe.visible && o.push(oe), O.visible && o.push(O), Rt.visible && Yt.length > 0 && o.push(...Yt), b.intersectObjects(o, false);
  }, G = new Cn(new xe(), new Fn()), we = new Cn(new xe(), new Fn({ color: "gray", sizeAttenuation: false, size: 6 })), me = new Cn(new xe(), new Fn({ color: "orange", size: 0.1 }));
  u.add(me);
  const I = document.createElement("input");
  I.id = "hk-rubber-label", I.type = "text", I.spellcheck = false, I.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, I.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none", "pointer-events:none"].join(";") + ";", document.body.appendChild(I);
  let L = null, X = null, V = false;
  const F = new M(), $ = (n, o, i, t, r, s) => {
    const l = t - n, f = r - o, h = s - i, _ = Math.hypot(l, f, h);
    if (_ < 0.01) {
      I.style.display = "none";
      return;
    }
    L = [n, o, i], X = [l / _, f / _, h / _], F.set((n + t) / 2, (o + r) / 2, (i + s) / 2), F.project(m());
    const S = x.getBoundingClientRect(), d = S.left + (F.x * 0.5 + 0.5) * S.width, y = S.top + (-F.y * 0.5 + 0.5) * S.height;
    if (I.style.left = d + "px", I.style.top = y + "px", I.style.display = "block", !V) {
      if (I.value = `${_.toFixed(2)} m`, document.activeElement !== I) {
        const P = document.activeElement;
        P && (P.tagName === "INPUT" || P.tagName === "TEXTAREA") && P !== I || I.focus({ preventScroll: true });
      }
      try {
        I.select();
      } catch {
      }
    }
  }, T = () => {
    I.style.display = "none", L = null, X = null, V = false, document.activeElement === I && I.blur();
  }, A = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      bt = n, ue(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), I.blur();
      return;
    }
    if (!L || !X || !e.polylines) return;
    let i = X[0], t = X[1], r = X[2];
    et === "x" ? (i = Math.sign(i) || 1, t = 0, r = 0) : et === "y" ? (i = 0, t = Math.sign(t) || 1, r = 0) : et === "z" && (i = 0, t = 0, r = Math.sign(r) || 1);
    const s = L[0] + i * n, l = L[1] + t * n, f = L[2] + r * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [s, l, f]];
    const h = e.polylines.rawVal, _ = h.length ? h[h.length - 1] : [];
    e.polylines.val = [...h.slice(0, -1), [..._, e.points.rawVal.length - 1]], I.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    g();
  }, q = (n) => {
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
    if (n.kind === "relCart") return L ? [L[0] + n.dx, L[1] + n.dy, L[2] + n.dz] : null;
    if (n.kind === "absPolar") {
      const o = n.ang * Math.PI / 180;
      return [n.L * Math.cos(o), n.L * Math.sin(o), 0];
    }
    if (n.kind === "relPolar") {
      if (!L) return null;
      const o = n.ang * Math.PI / 180;
      return [L[0] + n.L * Math.cos(o), L[1] + n.L * Math.sin(o), L[2]];
    }
    if (n.kind === "relSpherical") {
      if (!L) return null;
      const o = n.az * Math.PI / 180, i = n.el * Math.PI / 180, t = n.L * Math.cos(i);
      return [L[0] + t * Math.cos(o), L[1] + t * Math.sin(o), L[2] + n.L * Math.sin(i)];
    }
    return null;
  }, ee = (n) => {
    var _a;
    if (!e.polylines) return;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, n];
    const o = e.polylines.rawVal, i = o.length ? o[o.length - 1] : [];
    e.polylines.val = [...o.slice(0, -1), [...i, e.points.rawVal.length - 1]], I.blur();
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    g();
  };
  window.__hekatanTypeCoord = (n) => {
    var _a, _b, _c, _d;
    const o = q(n);
    if (!o) return false;
    if (o.kind === "length") return A(o.L), true;
    const i = se(o);
    if (!i) return false;
    if (ee(i), ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "area" && e.polylines) {
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
  }, I.addEventListener("keydown", (n) => {
    if (n.key === "Enter") {
      n.preventDefault();
      const i = q(I.value);
      if (!i) return;
      if (V = false, i.kind === "length") A(i.L), ue(`\u270F DDE ${i.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = se(i);
        if (!t) return;
        ee(t);
        const r = i.kind;
        ue(`\u270F ${r} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
      }
      return;
    }
    if (n.key === "Escape") {
      n.preventDefault(), V = false, I.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!V && I.style.display === "block") try {
          I.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && (V = true);
  }), window.addEventListener("keydown", (n) => {
    if (!L || !X || document.activeElement === I) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (I.value = n.key, I.focus(), I.setSelectionRange(1, 1), n.preventDefault());
  });
  const Q = document.createElement("div");
  Q.id = "hk-coord-readout", Q.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", Q.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(Q);
  const E = document.createElement("div");
  E.id = "hk-coord-fixed", E.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", E.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(E);
  const ie = new St(new xe().setFromPoints([new M(0, 0, 0), new M(0, 0, 0)]), new yn({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  ie.frustumCulled = false, ie.visible = false, u.add(ie);
  const Z = new St(new xe(), new it({ color: 2282478, transparent: true, opacity: 0.9 }));
  Z.frustumCulled = false, Z.visible = false, u.add(Z);
  let ce = [];
  const pe = new He(), Ce = new Ke(new Wt(1, 1), new je({ color: 2282478, transparent: true, opacity: 0.08, side: vt, depthWrite: false })), ye = new Xt(new Mo(new Wt(1, 1)), new it({ color: 2282478, transparent: true, opacity: 0.85 })), Ae = new Xt(new xe(), new it({ color: 2282478, transparent: true, opacity: 0.3 })), Ge = (n, o) => {
    const i = [], t = Math.ceil(n / o);
    for (let r = -t; r <= t; r++) {
      const s = r * o;
      i.push(-n, s, 0, n, s, 0), i.push(s, -n, 0, s, n, 0);
    }
    Ae.geometry.dispose(), Ae.geometry = new xe(), Ae.geometry.setAttribute("position", new ft(i, 3));
  };
  pe.add(Ce, ye, Ae), pe.visible = false, pe.frustumCulled = false, u.add(pe);
  const lt = new He();
  lt.frustumCulled = false, lt.visible = false, u.add(lt);
  const te = (n) => {
    const o = new xe().setFromPoints([new M(0, 0, 0), new M(0, 0, 0)]), i = new yn({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new St(o, i);
  }, C = te(16711680), N = te(65280), B = te(35071);
  lt.add(C, N, B);
  const H = (n) => {
    const o = new xe().setFromPoints([new M(0, 0, 0), new M(0, 0, 0), new M(0, 0, 0), new M(0, 0, 0)]), i = new it({ color: n, transparent: true, opacity: 0.2, depthTest: false }), t = new Io(o, i);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, ne = H(3462041), de = H(16724804), re = H(6333946), Me = new He();
  Me.frustumCulled = false, Me.visible = false, u.add(Me), Me.add(ne, de, re);
  const Pe = (n) => {
    const o = new Wt(1, 1), i = new je({ color: n, transparent: true, opacity: 0.06, side: vt, depthWrite: false }), t = new Ke(o, i);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, ze = Pe(3462041), $e = Pe(16724804), Ie = Pe(6333946);
  Me.add(ze, $e, Ie);
  const Ne = (n, o, i, t) => {
    n.scale.set(2 * t, 2 * t, 1), i === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : i === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, Fe = document.createElement("div");
  Fe.id = "hk-refplane-badge", Fe.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(Fe), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, Me.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, i = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = i[i.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0], l = window.__hekatanOrthoExt ?? 8;
      Ue(ne, s, "xy", l), Ue(de, s, "xz", l), Ue(re, s, "yz", l), Ne(ze, s, "xy", l), Ne($e, s, "xz", l), Ne(Ie, s, "yz", l), ze.material.opacity = 0.05, $e.material.opacity = 0.05, Ie.material.opacity = 0.05;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    g();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !Me.visible) {
      g();
      return;
    }
    const o = window.__hekatanOrthoAnchor, i = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = i[i.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0];
    Ue(ne, s, "xy", n), Ue(de, s, "xz", n), Ue(re, s, "yz", n), Ne(ze, s, "xy", n), Ne($e, s, "xz", n), Ne(Ie, s, "yz", n), g();
  };
  const rt = (n) => {
    if (ze.material.opacity = n === "xy" ? 0.09 : 0.025, $e.material.opacity = n === "xz" ? 0.09 : 0.025, Ie.material.opacity = n === "yz" ? 0.09 : 0.025, n) {
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
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== I) return;
    const i = n.key.toLowerCase(), t = (_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool;
    if (n.key === "Enter" && t === "polyarea" && ce.length >= 3) {
      const r = cn();
      ue(`\u2713 \xC1rea libre mallada \u2014 ${r} shells Q4 creados.`), n.preventDefault();
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
  const he = new St(new xe().setFromPoints([new M(0, 0, 0), new M(0, 0, 0)]), new it({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  he.renderOrder = 998, he.frustumCulled = false, he.visible = false, u.add(he);
  let Ze = -1, qe = -1, dt = -1;
  const ve = /* @__PURE__ */ new Set();
  window.__hekatanSelection = ve;
  const Be = new St(new xe().setFromPoints([new M(), new M()]), new it({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
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
  }, ht = new He();
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
      const _ = Math.hypot(n - h[0], o - h[1], i - h[2]);
      _ < l && (l = _, s = f);
    }
    return s;
  }, Bt = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    for (; ht.children.length; ) {
      const l = ht.children.pop();
      (_b = (_a = l.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = l.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e = e.points) == null ? void 0 : _e.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const l of ve) {
      const [f, ...h] = l.split(":");
      if (f === "pt") {
        const _ = n[+h[0]];
        if (!_) continue;
        const S = new Ke(new rn(0.025, 12, 12), new je({ color: zt, transparent: true, opacity: 0.9, depthTest: false }));
        S.position.set(_[0], _[1], _[2]), S.renderOrder = 999, S.__isSelectionPt = true, ht.add(S);
      } else if (f === "seg") {
        const _ = o[+h[0]], S = n[_ == null ? void 0 : _[+h[1]]], d = n[_ == null ? void 0 : _[+h[1] + 1]];
        if (!S || !d) continue;
        const y = new xe().setFromPoints([new M(S[0], S[1], S[2]), new M(d[0], d[1], d[2])]), P = new St(y, new it({ color: zt, transparent: true, opacity: 0.95, depthTest: false }));
        P.renderOrder = 999, ht.add(P);
      } else if (f === "poly") {
        const S = o[+h[0]].map((P) => {
          const U = n[P];
          return U ? new M(U[0], U[1], U[2]) : null;
        }).filter(Boolean);
        if (S.length < 2) continue;
        const d = new xe().setFromPoints(S), y = new St(d, new it({ color: zt, transparent: true, opacity: 0.95, depthTest: false }));
        y.renderOrder = 999, ht.add(y);
      } else if (f === "aux") {
        const _ = t[+h[0]];
        if (!_ || _.length !== 6) continue;
        const S = new xe().setFromPoints([new M(_[0], _[1], _[2]), new M(_[3], _[4], _[5])]), d = new St(S, new it({ color: zt, transparent: true, opacity: 0.95, depthTest: false }));
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
    ve.clear(), Bt();
  };
  const tn = (n, o, i, t, r, s, l, f, h) => {
    const _ = l - t, S = f - r, d = h - s, y = _ * _ + S * S + d * d;
    if (y < 1e-12) return Math.hypot(n - t, o - r, i - s);
    let P = ((n - t) * _ + (o - r) * S + (i - s) * d) / y;
    P = Math.max(0, Math.min(1, P));
    const U = t + P * _, K = r + P * S, J = s + P * d;
    return Math.hypot(n - U, o - K, i - J);
  }, qt = (n, o, i, t) => {
    if (!e.polylines) return null;
    const r = e.polylines.rawVal, s = e.points.rawVal;
    let l = -1, f = -1, h = t;
    for (let _ = 0; _ < r.length; _++) {
      const S = r[_];
      for (let d = 0; d < S.length - 1; d++) {
        const y = s[S[d]], P = s[S[d + 1]];
        if (!y || !P) continue;
        const U = tn(n, o, i, y[0], y[1], y[2], P[0], P[1], P[2]);
        U < h && (h = U, l = _, f = d);
      }
    }
    return l >= 0 ? { polyIdx: l, segIdx: f, dist: h } : null;
  }, Jt = (n, o, i, t) => {
    const r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? (r == null ? void 0 : r.val) ?? r ?? [];
    let l = -1, f = t;
    for (let h = 0; h < s.length; h++) {
      const _ = s[h];
      if (!_ || _.length !== 6) continue;
      const S = tn(n, o, i, _[0], _[1], _[2], _[3], _[4], _[5]);
      S < f && (f = S, l = h);
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
    const i = o.filter((h, _) => _ !== n), t = /* @__PURE__ */ new Set();
    for (const h of i) for (const _ of h) t.add(_);
    const r = e.points.rawVal, s = /* @__PURE__ */ new Map(), l = [];
    for (let h = 0; h < r.length; h++) t.has(h) && (s.set(h, l.length), l.push(r[h]));
    const f = i.map((h) => h.map((_) => s.get(_)).filter((_) => _ !== void 0));
    e.points.val = l, e.polylines.val = f, e.areas && (e.areas.val = e.areas.rawVal.filter((h) => h !== n).map((h) => h > n ? h - 1 : h)), he.visible = false, Ze = -1, qe = -1;
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
    const h = e.points.rawVal, _ = /* @__PURE__ */ new Map(), S = [];
    for (let y = 0; y < h.length; y++) f.has(y) && (_.set(y, S.length), S.push(h[y]));
    const d = l.map((y) => y.map((P) => _.get(P)).filter((P) => P !== void 0));
    if (e.points.val = S, e.polylines.val = d, e.areas) {
      const y = s.length - 1;
      e.areas.val = e.areas.rawVal.map((P) => P > n ? P + y : P);
    }
    he.visible = false, Ze = -1, qe = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  G.geometry.setAttribute("position", new ft(e.points.rawVal.flat(), 3)), G.geometry.computeBoundingSphere(), G.frustumCulled = false, we.frustumCulled = false, u.add(we), D.position.set(0, 0, 0), D.rotateX(Math.PI / 2), D.geometry.rotateX(Math.PI / 2), D.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, i) => {
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
    for (let _ = 0; _ < l; _++) {
      const S = 2 * Math.PI * _ / l, d = t * Math.cos(S), y = t * Math.sin(S);
      let P;
      s === "xy" ? P = [n + d, o + y, i] : s === "xz" ? P = [n + d, o, i + y] : P = [n, o + d, i + y], h.push(P);
    }
    if (e.points.val = [...e.points.rawVal, ...h], e.polylines) {
      const _ = [...h.map((d, y) => f + y), f], S = e.polylines.rawVal;
      ((_a = S[S.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...S, _, []] : e.polylines.val = [...S.slice(0, -1), _, []];
    }
  }, window.__hekatanDrawArc = (n, o, i, t = window.__hekatanArcSegs ?? 12) => {
    const r = Math.max(4, Math.round(t)), s = new M(...n), l = new M(...o), f = new M(...i), h = new M().subVectors(l, s), _ = new M().subVectors(f, s), S = new M().crossVectors(h, _).normalize(), d = new M().addVectors(s, l).multiplyScalar(0.5), y = new M().addVectors(l, f).multiplyScalar(0.5), P = new M().crossVectors(h, S).normalize(), U = new M().crossVectors(new M().subVectors(f, l), S).normalize(), K = new M().subVectors(y, d), J = P.x * U.y - P.y * U.x;
    let R;
    if (Math.abs(J) > 1e-9) {
      const De = (K.x * U.y - K.y * U.x) / J;
      R = new M().addVectors(d, P.clone().multiplyScalar(De));
    } else R = d.clone();
    const ae = s.distanceTo(R), le = new M().subVectors(s, R), ge = new M().subVectors(f, R), Le = Math.acos(Math.max(-1, Math.min(1, le.dot(ge) / (ae * ae)))), be = e.points.rawVal.length, _e = [], wt = S.clone();
    for (let De = 0; De <= r; De++) {
      const Ve = De / r, We = Le * Ve, st = new Jn().setFromAxisAngle(wt, We), yt = le.clone().applyQuaternion(st).add(R);
      _e.push([yt.x, yt.y, yt.z]);
    }
    if (e.points.val = [...e.points.rawVal, ..._e], e.polylines) {
      const De = _e.map((We, st) => be + st), Ve = e.polylines.rawVal;
      e.polylines.val = [...Ve.slice(0, -1), De, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, i = 1, t = 6, r = 6) => {
    const s = Math.min(n[0], o[0]), l = Math.max(n[0], o[0]), f = Math.min(n[1], o[1]), h = Math.max(n[1], o[1]), _ = (n[2] + o[2]) / 2, S = l - s, d = h - f, y = Math.min(i, S / 2 - 0.01, d / 2 - 0.01);
    if (y <= 0) return;
    const P = e.points.rawVal.length, U = [], K = [], J = (R, ae) => {
      U.push([R, ae, _]), K.push(P + U.length - 1);
    };
    for (let R = 0; R <= r; R++) J(s + y + (S - 2 * y) * R / r, f);
    for (let R = 1; R <= t; R++) {
      const ae = -Math.PI / 2 + Math.PI / 2 * R / t;
      J(l - y + y * Math.cos(ae), f + y + y * Math.sin(ae));
    }
    for (let R = 1; R <= r; R++) J(l, f + y + (d - 2 * y) * R / r);
    for (let R = 1; R <= t; R++) {
      const ae = 0 + Math.PI / 2 * R / t;
      J(l - y + y * Math.cos(ae), h - y + y * Math.sin(ae));
    }
    for (let R = 1; R <= r; R++) J(l - y - (S - 2 * y) * R / r, h);
    for (let R = 1; R <= t; R++) {
      const ae = Math.PI / 2 + Math.PI / 2 * R / t;
      J(s + y + y * Math.cos(ae), h - y + y * Math.sin(ae));
    }
    for (let R = 1; R <= r; R++) J(s, h - y - (d - 2 * y) * R / r);
    for (let R = 1; R <= t; R++) {
      const ae = Math.PI + Math.PI / 2 * R / t;
      J(s + y + y * Math.cos(ae), f + y + y * Math.sin(ae));
    }
    if (K.push(P), e.points.val = [...e.points.rawVal, ...U], e.polylines) {
      const R = e.polylines.rawVal;
      e.polylines.val = [...R.slice(0, -1), K, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const i = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], f = o[1], h = o[2];
    let _;
    if (Math.abs(s - h) < 1e-6 ? _ = [[t, r, s], [l, r, s], [l, f, s], [t, f, s]] : Math.abs(r - f) < 1e-6 ? _ = [[t, r, s], [l, r, s], [l, r, h], [t, r, h]] : _ = [[t, r, s], [t, f, s], [t, f, h], [t, r, h]], e.points.val = [...e.points.rawVal, ..._], e.polylines) {
      const S = [i, i + 1, i + 2, i + 3, i], d = e.polylines.rawVal;
      e.polylines.val = [...d.slice(0, -1), S, []];
    }
  }, window.__hekatanDrawRectArea = (n, o) => {
    var _a;
    const i = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], f = o[1], h = o[2];
    let _;
    if (z && e.gridTarget) {
      const S = e.gridTarget.rawVal, d = new xn(...S.rotation), y = new M(1, 0, 0).applyEuler(d), P = new M(0, 1, 0).applyEuler(d), U = new M(...S.position), K = new M(t, r, s), J = new M(l, f, h), R = K.clone().sub(U).dot(y), ae = K.clone().sub(U).dot(P), le = J.clone().sub(U).dot(y), ge = J.clone().sub(U).dot(P), Le = (be, _e) => U.clone().addScaledVector(y, be).addScaledVector(P, _e).toArray();
      _ = [Le(R, ae), Le(le, ae), Le(le, ge), Le(R, ge)];
    } else Math.abs(s - h) < 1e-6 ? _ = [[t, r, s], [l, r, s], [l, f, s], [t, f, s]] : Math.abs(r - f) < 1e-6 ? _ = [[t, r, s], [l, r, s], [l, r, h], [t, r, h]] : _ = [[t, r, s], [t, f, s], [t, f, h], [t, r, h]];
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ..._], e.polylines) {
      const S = e.polylines.rawVal, d = S.length - 1, y = [i, i + 1, i + 2, i + 3, i];
      e.polylines.val = [...S.slice(0, -1), y, []], e.areas && (e.areas.val = [...e.areas.rawVal, d]);
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
    for (let ke = 0; ke < i; ke++) {
      const Re = n[ke], Oe = n[(ke + 1) % i];
      t += (Re[1] - Oe[1]) * (Re[2] + Oe[2]), r += (Re[2] - Oe[2]) * (Re[0] + Oe[0]), s += (Re[0] - Oe[0]) * (Re[1] + Oe[1]);
    }
    const l = Math.hypot(t, r, s) || 1;
    t /= l, r /= l, s /= l;
    let f = n[1][0] - n[0][0], h = n[1][1] - n[0][1], _ = n[1][2] - n[0][2];
    const S = Math.hypot(f, h, _) || 1;
    f /= S, h /= S, _ /= S;
    let d = r * _ - s * h, y = s * f - t * _, P = t * h - r * f;
    const U = Math.hypot(d, y, P) || 1;
    d /= U, y /= U, P /= U;
    const K = n[0], J = (ke) => [(ke[0] - K[0]) * f + (ke[1] - K[1]) * h + (ke[2] - K[2]) * _, (ke[0] - K[0]) * d + (ke[1] - K[1]) * y + (ke[2] - K[2]) * P], R = (ke, Re) => [K[0] + ke * f + Re * d, K[1] + ke * h + Re * y, K[2] + ke * _ + Re * P], ae = n.map(J);
    let le = 1 / 0, ge = -1 / 0, Le = 1 / 0, be = -1 / 0;
    for (const [ke, Re] of ae) ke < le && (le = ke), ke > ge && (ge = ke), Re < Le && (Le = Re), Re > be && (be = Re);
    const _e = ge - le, wt = be - Le;
    if (_e < 1e-6 || wt < 1e-6) return 0;
    let De = o && o > 0 ? o : 0.5;
    for (; _e / De * (wt / De) > 2500; ) De *= 2;
    De = Math.min(De, Math.min(_e, wt));
    const Ve = (ke, Re) => {
      let Oe = false;
      for (let Et = 0, Kt = ae.length - 1; Et < ae.length; Kt = Et++) {
        const [an, mn] = ae[Et], [ln, wn] = ae[Kt];
        mn > Re != wn > Re && ke < (ln - an) * (Re - mn) / (wn - mn) + an && (Oe = !Oe);
      }
      return Oe;
    }, We = Math.max(1, Math.round(_e / De)), st = Math.max(1, Math.round(wt / De)), yt = _e / We, Pt = wt / st, Ut = /* @__PURE__ */ new Map(), $t = [], xt = e.points.rawVal.length, At = (ke, Re) => {
      const Oe = ke + "," + Re, Et = Ut.get(Oe);
      if (Et !== void 0) return Et;
      const Kt = xt + $t.length;
      return $t.push(R(le + ke * yt, Le + Re * Pt)), Ut.set(Oe, Kt), Kt;
    }, _t = [];
    for (let ke = 0; ke < We; ke++) for (let Re = 0; Re < st; Re++) {
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
    return g(), _t.length;
  };
  const cn = () => {
    if (ce.length < 3) return ce = [], Z.visible = false, g(), 0;
    const n = window.__hekatanMeshPolyArea(ce.slice());
    return ce = [], Z.visible = false, g(), n;
  };
  window.__hekatanFinalizePolyArea = cn, window.__hekatanSetInclinedPlaneFrom3 = (n, o, i) => {
    var _a;
    const t = new M(n[0], n[1], n[2]), r = new M(o[0], o[1], o[2]), s = new M(i[0], i[1], i[2]), l = new M().subVectors(r, t).cross(new M().subVectors(s, t));
    if (l.lengthSq() < 1e-9) return false;
    l.normalize();
    const f = new Jn().setFromUnitVectors(new M(0, 0, 1), l), h = new xn().setFromQuaternion(f);
    e.gridTarget && (e.gridTarget.val = { position: [t.x, t.y, t.z], rotation: [h.x, h.y, h.z] }), z = true;
    const _ = new M().addVectors(t, r).add(s).multiplyScalar(1 / 3), S = Math.max(t.distanceTo(r), t.distanceTo(s), r.distanceTo(s)) * 2.2 + 4, d = S / 2;
    Ce.geometry.dispose(), Ce.geometry = new Wt(S, S), ye.geometry.dispose(), ye.geometry = new Mo(new Wt(S, S)), Ge(d, 1), pe.position.copy(_), pe.quaternion.copy(f), pe.scale.set(1, 1, 1), pe.visible = true;
    try {
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
    } catch {
    }
    return g(), true;
  }, window.__hekatanResetPlaneXY = () => {
    e.gridTarget && (e.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, 0] }), z = false, pe.visible = false, g();
  };
  const Ct = new He();
  Ct.visible = false, u.add(Ct), window.__hekatanShowAxes = (n, o, i = 12, t = 2) => {
    var _a, _b;
    for (; Ct.children.length; ) {
      const S = Ct.children.pop();
      (_a = S.geometry) == null ? void 0 : _a.dispose(), (_b = S.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const r = Math.min(...o) - t, s = Math.max(...o) + t, l = Math.min(...n) - t, f = Math.max(...n) + t, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", _ = (S, d, y, P, U) => {
      const K = document.createElement("canvas");
      K.width = 64, K.height = 32;
      const J = K.getContext("2d");
      J.fillStyle = U, J.font = "bold 22px sans-serif", J.textAlign = "center", J.fillText(S, 32, 26);
      const R = new bo(K), ae = new _o({ map: R, transparent: true }), le = new So(ae);
      return le.position.set(d, y, P), le.scale.set(1.2, 0.6, 1), le;
    };
    n.forEach((S, d) => {
      const y = d < h.length ? h[d] : `X${d}`, P = new xe().setFromPoints([new M(S, r, 0), new M(S, s, 0), new M(S, r, 0), new M(S, r, i)]), U = new yn({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), K = new Xt(P, U);
      K.computeLineDistances(), Ct.add(K), Ct.add(_(y, S, r - 0.5, 0, "#60a5fa")), Ct.add(_(y, S, s + 0.5, 0, "#60a5fa"));
    }), o.forEach((S, d) => {
      const y = `${d + 1}`, P = new xe().setFromPoints([new M(l, S, 0), new M(f, S, 0), new M(l, S, 0), new M(l, S, i)]), U = new yn({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), K = new Xt(P, U);
      K.computeLineDistances(), Ct.add(K), Ct.add(_(y, l - 0.5, S, 0, "#fb7185")), Ct.add(_(y, f + 0.5, S, 0, "#fb7185"));
    }), Ct.visible = true, g();
  }, window.__hekatanHideAxes = () => {
    Ct.visible = false, g();
  };
  const Rt = new He();
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
      const f = r[l % r.length], h = o / 2, _ = [new M(i - h, t - h, s), new M(i + h, t - h, s), new M(i + h, t + h, s), new M(i - h, t + h, s), new M(i - h, t - h, s)], S = new xe().setFromPoints(_), d = new it({ color: f, transparent: true, opacity: 0.55 });
      Rt.add(new St(S, d));
      const y = document.createElement("canvas");
      y.width = 128, y.height = 32;
      const P = y.getContext("2d");
      P.fillStyle = `#${f.toString(16).padStart(6, "0")}`, P.font = "bold 18px sans-serif", P.fillText(`Z = ${s} m`, 4, 22);
      const U = new bo(y), K = new _o({ map: U, transparent: true }), J = new So(K);
      J.position.set(i - h - 1.5, t - h - 1.5, s), J.scale.set(2.5, 0.6, 1), Rt.add(J);
      const R = new Wt(1e4, 1e4), ae = new je({ visible: false, side: vt }), le = new Ke(R, ae);
      le.position.set(0, 0, s), le.frustumCulled = false, le.userData = { refPlaneZ: s }, u.add(le), Yt.push(le);
    }), Rt.visible = true, g();
  }, window.__hekatanHideRefPlanes = () => {
    Rt.visible = false, Yt.forEach((n) => {
      n.visible = false;
    }), g();
  };
  const Qt = new He();
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
      const t = new xe().setFromPoints([new M(i[0], i[1], i[2]), new M(i[3], i[4], i[5])]), r = new yn({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), s = new St(t, r);
      s.computeLineDistances(), Qt.add(s);
    }
  };
  Y.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, Bn(), g());
  });
  const Nt = new He();
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
  Y.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, dn(), g());
  }), c.addEventListener("change", () => {
    Nt.children.forEach((n) => {
      n.scale.setScalar(pt(n.position));
    });
  }), window.__hekatanRenderAuxPoints = dn;
  const mt = new He(), Zo = new Ke(new rn(0.01, 12, 12), new je({ color: 16724804, transparent: true, opacity: 0.95 })), Uo = new Ke(new rn(0.015, 12, 12), new je({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  mt.add(Zo, Uo);
  const on = 0.08, Rn = (n, o, i) => {
    const t = new xe().setFromPoints([new M(...n), new M(...o)]);
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
    mt.position.set(n, o, i), mt.visible = true, Xn(), g();
  }, window.__hekatanHideSnap = () => {
    mt.visible = false, g();
  }, x.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q;
    const o = v(n);
    if (!o) return;
    b.setFromCamera(k, o);
    const i = j();
    if (i.length) {
      const t = i[0].point, r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, r);
      if (s) uo(s.type, s.x, s.y, s.z), mt.position.set(s.x, s.y, s.z), mt.visible = true, t.set(s.x, s.y, s.z);
      else {
        Nn();
        const S = window.__hekatanSnapEnabled !== false, d = window.__hekatanSnap2D ?? 0.5;
        S && d > 0 && (t.x = Math.round(t.x / d) * d, t.y = Math.round(t.y / d) * d, t.z = Math.round(t.z / d) * d), mt.position.copy(t), mt.visible = true;
      }
      Xn();
      const l = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (l === "select" || !l) {
        const S = (window.__hekatanSnap2D ?? 0.5) * 1.5, d = Ht(t.x, t.y, t.z, S), y = qt(t.x, t.y, t.z, S), P = Jt(t.x, t.y, t.z, S);
        if (d >= 0) {
          const R = e.points.rawVal[d];
          Je.position.set(R[0], R[1], R[2]), Je.visible = true, Dt(), Be.visible = false, nt = { kind: "pt", a: d };
        } else if (y) {
          const R = e.points.rawVal, ae = e.polylines.rawVal[y.polyIdx], le = R[ae[y.segIdx]], ge = R[ae[y.segIdx + 1]];
          Be.geometry.setFromPoints([new M(le[0], le[1], le[2]), new M(ge[0], ge[1], ge[2])]), Be.visible = true, Je.visible = false, nt = ((_f = (_e = e.areas) == null ? void 0 : _e.rawVal) == null ? void 0 : _f.includes(y.polyIdx)) ?? false ? { kind: "poly", a: y.polyIdx } : { kind: "seg", a: y.polyIdx, b: y.segIdx };
        } else if (P >= 0) {
          const ae = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[P];
          ae && (Be.geometry.setFromPoints([new M(ae[0], ae[1], ae[2]), new M(ae[3], ae[4], ae[5])]), Be.visible = true, Je.visible = false, nt = { kind: "aux", a: P });
        } else Be.visible = false, Je.visible = false, nt = null;
        Q.style.left = n.clientX + "px", Q.style.top = n.clientY + "px", Q.style.display = "block";
        let U = t;
        if ((nt == null ? void 0 : nt.kind) === "pt") {
          const R = e.points.rawVal[nt.a];
          R && (U = new M(R[0], R[1], R[2]));
        }
        const K = `X=${U.x.toFixed(2)} Y=${U.y.toFixed(2)} Z=${U.z.toFixed(2)}`;
        if (nt) {
          const R = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          Q.textContent = `${K}  \xB7  \u{1F5B1} Click \u2192 ${R[nt.kind]}`;
        } else Q.textContent = K;
        const J = document.getElementById("hk-coord-fixed");
        J && (J.textContent = K), ie.visible = false, lt.visible = false, g();
        return;
      }
      if (l === "delete") {
        const S = (window.__hekatanSnap2D ?? 0.5) * 1.5, d = qt(t.x, t.y, t.z, S), y = Jt(t.x, t.y, t.z, S);
        let P = false;
        if (y >= 0) if (!d) P = true;
        else {
          const R = window.__hekatanDrawingAuxLines, le = ((R == null ? void 0 : R.rawVal) ?? (R == null ? void 0 : R.val) ?? R ?? [])[y];
          tn(t.x, t.y, t.z, le[0], le[1], le[2], le[3], le[4], le[5]) < d.dist && (P = true);
        }
        P ? (dt = y, Ze = -1, qe = -1, $n(y)) : d ? (Ze = d.polyIdx, qe = d.segIdx, dt = -1, In(d.polyIdx, d.segIdx)) : (Ze = -1, qe = -1, dt = -1, he.visible = false), ie.visible = false, lt.visible = false, T(), Q.style.left = n.clientX + "px", Q.style.top = n.clientY + "px", Q.style.display = "block";
        const U = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let K = "";
        P ? K = `\u{1F5D1} l\xEDnea aux #${dt + 1}` : d ? K = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(d.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${d.polyIdx + 1}` : `\u{1F5D1} seg ${d.segIdx + 1} / poly #${d.polyIdx + 1}` : K = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", Q.textContent = `${U}  \xB7  ${K}`;
        const J = document.getElementById("hk-coord-fixed");
        J && (J.textContent = U), g();
        return;
      } else he.visible = false, Ze = -1, dt = -1;
      Q.style.left = n.clientX + "px", Q.style.top = n.clientY + "px", Q.style.display = "block";
      const f = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], h = f[f.length - 1] ?? [], _ = e.points.rawVal ?? [];
      if (h.length > 0 && _[h[h.length - 1]]) {
        const S = h[h.length - 1], d = _[S];
        let y = et;
        if (ot = null, !y && window.__hekatanAxisSnap !== false) {
          const Ve = x.getBoundingClientRect(), We = n.clientX, st = n.clientY, yt = ((_k = settings.gridSize) == null ? void 0 : _k.rawVal) ?? 10, Pt = new M(d[0], d[1], d[2]), Ut = [["x", new M(1, 0, 0)], ["y", new M(0, 1, 0)], ["z", new M(0, 0, 1)]], $t = (At) => {
            const _t = At.clone().project(o);
            return { x: (_t.x * 0.5 + 0.5) * Ve.width + Ve.left, y: (-_t.y * 0.5 + 0.5) * Ve.height + Ve.top };
          };
          let xt = null;
          for (const [At, _t] of Ut) {
            const ke = $t(Pt.clone().addScaledVector(_t, -yt)), Re = $t(Pt.clone().addScaledVector(_t, yt)), Oe = Re.x - ke.x, Et = Re.y - ke.y, Kt = We - ke.x, an = st - ke.y, mn = Oe * Oe + Et * Et || 1;
            let ln = (Kt * Oe + an * Et) / mn;
            ln = Math.max(0, Math.min(1, ln));
            const wn = Math.hypot(We - (ke.x + ln * Oe), st - (ke.y + ln * Et));
            if (xt === null || wn < xt.dpx) {
              const Gn = b.ray, wo = Pt.clone().sub(Gn.origin), Wn = _t.dot(Gn.direction), yo = _t.dot(wo), Qo = Gn.direction.dot(wo), xo = 1 - Wn * Wn, Oo = Math.abs(xo) < 1e-6 ? -yo : (Wn * Qo - yo) / xo;
              xt = { axis: At, dpx: wn, pt: Pt.clone().addScaledVector(_t, Oo) };
            }
          }
          xt && xt.dpx <= 12 && (t.copy(xt.pt), y = xt.axis, ot = xt.pt.clone());
        }
        const P = !!window.__hekatanOrthoMode;
        if (!y && P) {
          const Ve = Math.abs(t.x - d[0]), We = Math.abs(t.y - d[1]), st = Math.abs(t.z - d[2]), yt = (_l = i[0]) == null ? void 0 : _l.object;
          let Pt = null;
          yt === ze ? Pt = "xy" : yt === $e ? Pt = "xz" : yt === Ie && (Pt = "yz"), Pt === "xy" ? y = Ve >= We ? "x" : "y" : Pt === "xz" ? y = Ve >= st ? "x" : "z" : Pt === "yz" ? y = We >= st ? "y" : "z" : y = Ve >= We && Ve >= st ? "x" : We >= st ? "y" : "z";
        }
        const U = window.__hekatanPolarTrack !== false;
        if (!y && U) {
          const Ve = t.x - d[0], We = t.y - d[1], st = t.z - d[2], yt = Math.hypot(Ve, We, st);
          if (yt > 1e-3) {
            const Ut = Math.tan(6 * Math.PI / 180) * yt, $t = Math.hypot(We, st), xt = Math.hypot(Ve, st), At = Math.hypot(Ve, We), _t = [["x", $t], ["y", xt], ["z", At]];
            _t.sort((ke, Re) => ke[1] - Re[1]), _t[0][1] <= Ut && (y = _t[0][0]);
          }
        }
        if (y) {
          const Ve = d[0], We = d[1], st = d[2];
          y === "x" ? t.set(t.x, We, st) : y === "y" ? t.set(Ve, t.y, st) : t.set(Ve, We, t.z);
          const yt = !!et, Ut = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[y];
          tt.style.background = "rgba(15,23,42,0.92)", tt.style.color = Ut, tt.style.border = `1.5px solid ${Ut}`;
          const $t = (_m = i[0]) == null ? void 0 : _m.object;
          let xt = null;
          $t === ze ? xt = "xy" : $t === $e ? xt = "xz" : $t === Ie && (xt = "yz");
          const At = xt ? ` (plano ${xt.toUpperCase()})` : "";
          tt.textContent = yt ? `\u{1F512} LOCK ${y.toUpperCase()}${At}` : `\u22A5 ORTO ${y.toUpperCase()}${At}`, tt.style.left = n.clientX + 20 + "px", tt.style.top = n.clientY + 18 + "px", tt.style.transform = "none", tt.style.display = "block";
        } else et || (tt.style.display = "none");
        const K = Math.hypot(t.x - d[0], t.y - d[1], t.z - d[2]), J = Math.atan2(t.y - d[1], t.x - d[0]) * 180 / Math.PI, R = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        Q.textContent = `${R} | \u0394L=${K.toFixed(2)}m ${J.toFixed(0)}\xB0`;
        const ae = document.getElementById("hk-coord-fixed");
        ae && (ae.textContent = R), ie.geometry.setFromPoints([new M(d[0], d[1], d[2]), new M(t.x, t.y, t.z)]), (_n2 = ie.computeLineDistances) == null ? void 0 : _n2.call(ie), ie.visible = true, $(d[0], d[1], d[2], t.x, t.y, t.z);
        const le = window.__hekatanOrthoExt ?? 8, ge = window.__hekatanShowOrthoPlanes !== false;
        Me.visible = ge, ge || rt(null), ge && (Ue(ne, d, "xy", le), Ue(de, d, "xz", le), Ue(re, d, "yz", le), Ne(ze, d, "xy", le), Ne($e, d, "xz", le), Ne(Ie, d, "yz", le));
        const Le = ge ? b.intersectObjects([ze, $e, Ie], false) : [];
        let be = null;
        if (Le.length > 0) {
          const Ve = Le[0].object;
          Ve === ze ? be = "xy" : Ve === $e ? be = "xz" : Ve === Ie && (be = "yz");
        }
        rt(be), be && (Fe.style.left = n.clientX + "px", Fe.style.top = n.clientY + "px"), C.geometry.setFromPoints([new M(d[0] - le, d[1], d[2]), new M(d[0] + le, d[1], d[2])]), (_o2 = C.computeLineDistances) == null ? void 0 : _o2.call(C), N.geometry.setFromPoints([new M(d[0], d[1] - le, d[2]), new M(d[0], d[1] + le, d[2])]), (_p = N.computeLineDistances) == null ? void 0 : _p.call(N), B.geometry.setFromPoints([new M(d[0], d[1], d[2] - le), new M(d[0], d[1], d[2] + le)]), (_q = B.computeLineDistances) == null ? void 0 : _q.call(B), lt.visible = true;
        const _e2 = C.material, wt = N.material, De = B.material;
        y === "x" ? (_e2.opacity = 0.95, wt.opacity = 0.1, De.opacity = 0.1) : y === "y" ? (_e2.opacity = 0.1, wt.opacity = 0.95, De.opacity = 0.1) : y === "z" ? (_e2.opacity = 0.1, wt.opacity = 0.1, De.opacity = 0.95) : (_e2.opacity = 0.5, wt.opacity = 0.5, De.opacity = 0.5);
      } else {
        const S = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        Q.textContent = S;
        const d = document.getElementById("hk-coord-fixed");
        if (d && (d.textContent = S), ie.visible = false, lt.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(l)) {
          if (L = null, X = null, I.style.left = n.clientX + 20 + "px", I.style.top = n.clientY - 28 + "px", I.style.display = "block", !V) {
            I.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const P = document.activeElement;
            !(P && (P.tagName === "INPUT" || P.tagName === "TEXTAREA") && P !== I) && document.activeElement !== I && I.focus({ preventScroll: true });
            try {
              I.select();
            } catch {
            }
          }
        } else T();
      }
      g();
    } else Nn(), Q.style.display = "none", mt.visible = false, ie.visible = false, lt.visible = false, T(), g();
  }), Y.derive(() => {
    if (!e.gridTarget) return;
    Ds(a, { position: new M(...e.gridTarget.val.position), quaternion: new Jn().setFromEuler(new xn(...e.gridTarget.val.rotation)) }, g), D.position.set(...e.gridTarget.val.position), D.quaternion.setFromEuler(new xn(...e.gridTarget.val.rotation)), D.updateMatrixWorld();
    const n = new M(0, 0, 1).applyEuler(new xn(...e.gridTarget.val.rotation));
    z = !(Math.abs(n.x) > 0.999 || Math.abs(n.y) > 0.999 || Math.abs(n.z) > 0.999);
  }), Y.derive(() => {
    G.geometry.setAttribute("position", new ft(e.points.val.flat(), 3)), G.geometry.computeBoundingSphere();
  }), Y.derive(() => {
    const n = 0.05 * w * 0.5 * p.val;
    b.params.Points.threshold = 0.4 * n;
  }), Y.derive(() => {
    var _a;
    const n = e.points.val ?? [], i = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const s of i) {
      const [l, f, h] = n[s];
      t.push(l, f, h);
    }
    const r = new xe();
    r.setAttribute("position", new ft(t, 3)), me.geometry.dispose(), me.geometry = r;
  });
  let Dn = false, Ot = 0;
  x.addEventListener("pointerdown", () => {
    Dn = true;
  }), x.addEventListener("pointerup", () => {
    Dn = false;
  }), x.addEventListener("pointermove", () => {
    Dn && Ot++;
  });
  const kt = document.createElement("div");
  kt.id = "hk-window-select", kt.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(kt);
  let Tt = null, pn = false, Vt = null;
  const Yn = (n, o, i, t, r) => {
    r ? (kt.style.borderColor = "#34d399", kt.style.borderStyle = "dashed", kt.style.background = "rgba(52, 211, 153, 0.10)") : (kt.style.borderColor = "#22d3ee", kt.style.borderStyle = "solid", kt.style.background = "rgba(34, 211, 238, 0.10)"), kt.style.left = Math.min(n, i) + "px", kt.style.top = Math.min(o, t) + "px", kt.style.width = Math.abs(i - n) + "px", kt.style.height = Math.abs(t - o) + "px", kt.style.display = "block";
  }, ro = (n, o, i, t, r) => {
    var _a, _b, _c, _d;
    const s = Math.min(n, i), l = Math.max(n, i), f = Math.min(o, t), h = Math.max(o, t), _ = i < n, S = x.getBoundingClientRect(), d = m();
    d.updateMatrixWorld();
    const y = (be) => {
      const _e = new M(be[0], be[1], be[2]);
      return _e.project(d), { x: S.left + (_e.x * 0.5 + 0.5) * S.width, y: S.top + (-_e.y * 0.5 + 0.5) * S.height };
    }, P = (be) => be.x >= s && be.x <= l && be.y >= f && be.y <= h, U = (be, _e) => !(be.x < s && _e.x < s || be.x > l && _e.x > l || be.y < f && _e.y < f || be.y > h && _e.y > h);
    r || ve.clear();
    let K = 0;
    const J = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let be = 0; be < J.length; be++) {
      const _e = J[be];
      _e && P(y(_e)) && (ve.add(`pt:${be}`), K++);
    }
    const R = (be, _e) => _ ? P(be) || P(_e) || U(be, _e) : P(be) && P(_e), ae = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], le = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let be = 0; be < ae.length; be++) {
      const _e = ae[be];
      if (le.includes(be)) {
        let De;
        if (!_) De = _e.every((Ve) => {
          const We = J[Ve];
          return !!We && P(y(We));
        });
        else {
          De = false;
          for (let Ve = 0; Ve < _e.length - 1; Ve++) {
            const We = J[_e[Ve]], st = J[_e[Ve + 1]];
            if (!(!We || !st) && R(y(We), y(st))) {
              De = true;
              break;
            }
          }
        }
        De && (ve.add(`poly:${be}`), K++);
      } else for (let De = 0; De < _e.length - 1; De++) {
        const Ve = J[_e[De]], We = J[_e[De + 1]];
        !Ve || !We || R(y(Ve), y(We)) && (ve.add(`seg:${be}:${De}`), K++);
      }
    }
    const Le = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let be = 0; be < Le.length; be++) {
      const _e = Le[be];
      if (!_e || _e.length !== 6) continue;
      const wt = y([_e[0], _e[1], _e[2]]), De = y([_e[3], _e[4], _e[5]]);
      R(wt, De) && (ve.add(`aux:${be}`), K++);
    }
    Bt(), ue(`${_ ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${K} item(s) ${r ? "agregados a" : "\u2192"} selecci\xF3n (total ${ve.size})`), kt.style.display = "none";
  }, bn = () => {
    Vt && (Vt = null, kt.style.display = "none", ue("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = bn, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && Vt && bn();
  });
  const co = () => {
    var _a, _b, _c, _d;
    if (ve.size === 0) return false;
    const n = [...ve], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], i = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? [], l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Set();
    for (const U of n) {
      const [K, ...J] = U.split(":");
      if (K === "pt") l.add(+J[0]);
      else if (K === "poly") f.add(+J[0]);
      else if (K === "seg") {
        const R = +J[0], ae = +J[1];
        h.has(R) || h.set(R, /* @__PURE__ */ new Set()), h.get(R).add(ae);
      } else K === "aux" && _.add(+J[0]);
    }
    let S = 0, d = [], y = [];
    const P = /* @__PURE__ */ new Map();
    for (let U = 0; U < i.length; U++) {
      if (f.has(U)) {
        S++;
        continue;
      }
      P.set(U, d.length);
      const K = h.get(U);
      if (K && K.size > 0) {
        let J = [];
        for (let R = 0; R < i[U].length; R++) J.push(i[U][R]), R < i[U].length - 1 && K.has(R) && (J.length >= 2 && d.push(J), J = [], S++);
        (J.length >= 2 || J.length === 1) && d.push(J);
      } else d.push([...i[U]]);
    }
    if (l.size > 0) {
      const U = [], K = /* @__PURE__ */ new Map();
      for (let R = 0; R < o.length; R++) {
        if (l.has(R)) {
          S++;
          continue;
        }
        K.set(R, U.length), U.push([...o[R]]);
      }
      const J = [];
      for (const R of d) {
        let ae = [];
        for (const le of R) {
          const ge = K.get(le);
          ge === void 0 ? (ae.length >= 2 && J.push(ae), ae = []) : ae.push(ge);
        }
        ae.length >= 2 && J.push(ae);
      }
      d = J, e.points.val = U;
    }
    for (const U of t) {
      const K = P.get(U);
      K !== void 0 && K < d.length && y.push(K);
    }
    if (e.polylines && (e.polylines.val = d), e.areas && (e.areas.val = y), _.size > 0 && r) {
      const U = s.filter((K, J) => !_.has(J));
      "val" in r ? r.val = U : window.__hekatanDrawingAuxLines = U, S += _.size;
    }
    ve.clear(), Bt();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return ue(`\u{1F5D1} ${S} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = co, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement, i = o && (o.id === "hk3-cmd-input" || o.id === "hk-dyn-input") && o.value === "";
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && !i || ve.size !== 0 && (n.preventDefault(), co());
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
      const f = l.clientX - i, h = l.clientY - t, _ = Math.max(0, Math.min(window.innerWidth - 80, r + f)), S = Math.max(0, Math.min(window.innerHeight - 40, s + h));
      Ft.style.left = `${_}px`, Ft.style.top = `${S}px`;
    }), window.addEventListener("mouseup", () => {
      if (o) {
        o = false;
        try {
          localStorage.setItem(po, JSON.stringify({ left: parseFloat(Ft.style.left), top: parseFloat(Ft.style.top) }));
        } catch {
        }
      }
    });
  }, W = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 }, Mt = { dx: 0, dy: 0, dz: 3, copias: 1 };
  let Qe = null;
  const ut = (n, o, i, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: i, value: t } }));
  }, Wo = () => {
    if (Qe && (Qe.dispose(), Qe = null), ve.size === 0) {
      Ft.style.display = "none";
      return;
    }
    const n = [...ve], o = n.filter((d) => d.startsWith("pt:")), i = n.filter((d) => d.startsWith("seg:")), t = n.filter((d) => d.startsWith("poly:")), r = n.filter((d) => d.startsWith("aux:")), s = o.length > 0, l = i.length > 0, f = t.length > 0, h = !s && !l && !f, _ = [];
    o.length && _.push(`\u{1F535} ${o.length} nodo(s)`), i.length && _.push(`\u{1F4CF} ${i.length} segmento(s)`), t.length && _.push(`\u25AD ${t.length} \xE1rea(s)`), r.length && _.push(`\u250A ${r.length} aux`);
    const S = `\u{1F3AF} ${ve.size} item(s) \u2014 ${_.join(", ")}`;
    Qe = new Bo({ container: Ft, title: S });
    {
      const d = Qe.addFolder({ title: "\u270F\uFE0F Editar \u2014 Replicar / Mover", expanded: false });
      d.addBinding(Mt, "dx", { label: "\u0394x (m)", step: 0.1 }), d.addBinding(Mt, "dy", { label: "\u0394y (m)", step: 0.1 }), d.addBinding(Mt, "dz", { label: "\u0394z (m)", step: 0.1 }), d.addBinding(Mt, "copias", { label: "Copias", min: 1, max: 50, step: 1 }), d.addButton({ title: "\u29C9 Replicar selecci\xF3n" }).on("click", () => {
        var _a;
        const P = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, Mt.dx, Mt.dy, Mt.dz, Mt.copias);
        ue(P ? `\u29C9 Replicado \xD7${P} (\u0394 ${Mt.dx},${Mt.dy},${Mt.dz} m)` : "\u26A0 Nada que replicar \u2014 seleccion\xE1 nodos/frames/\xE1reas");
      }), d.addButton({ title: "\u2192 Mover selecci\xF3n (1 copia, sin duplicar geometr\xEDa base)" }).on("click", () => {
        var _a;
        const P = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, Mt.dx, Mt.dy, Mt.dz, 1);
        ue(P ? `\u2192 Copia desplazada \u0394 ${Mt.dx},${Mt.dy},${Mt.dz} m` : "\u26A0 Nada seleccionado");
      });
      const y = d.addFolder({ title: "\u{1F9F2} Snap", expanded: false });
      y.addButton({ title: "Snap a grilla ON/OFF (F9)" }).on("click", () => {
        var _a;
        return (_a = window.__hekatanToggleSnap) == null ? void 0 : _a.call(window);
      }), y.addButton({ title: "OSNAP (endpoints/medios) ON/OFF" }).on("click", () => {
        window.__hekatanOsnapOn = !(window.__hekatanOsnapOn ?? true), ue(`\u{1F9F2} OSNAP ${window.__hekatanOsnapOn ? "ON" : "OFF"}`);
      });
    }
    if (s) {
      const d = Qe.addFolder({ title: `\u{1F4CC} Restraints (DOFs) \u2014 ${o.length} nodo(s)` });
      d.addBinding(W, "Ux"), d.addBinding(W, "Uy"), d.addBinding(W, "Uz"), d.addBinding(W, "Rx"), d.addBinding(W, "Ry"), d.addBinding(W, "Rz");
      const y = Qe.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      y.addBinding(W, "Kx", { label: "Kx", min: 0, step: 100 }), y.addBinding(W, "Ky", { label: "Ky", min: 0, step: 100 }), y.addBinding(W, "Kz", { label: "Kz", min: 0, step: 100 }), y.addBinding(W, "Krx", { label: "Krx", min: 0, step: 1e3 }), y.addBinding(W, "Kry", { label: "Kry", min: 0, step: 1e3 }), y.addBinding(W, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const P = Qe.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      P.addBinding(W, "Fx", { step: 0.1 }), P.addBinding(W, "Fy", { step: 0.1 }), P.addBinding(W, "Fz", { step: 0.1 }), P.addBinding(W, "Mx", { step: 0.1 }), P.addBinding(W, "My", { step: 0.1 }), P.addBinding(W, "Mz", { step: 0.1 }), Qe.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(W, "mass", { label: "m", min: 0, step: 1 }), Qe.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(W, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), Qe.addButton({ title: `\u2713 Aplicar a ${o.length} nodo(s) seleccionado(s)` }).on("click", () => {
        let J = 0;
        const R = [W.Ux, W.Uy, W.Uz, W.Rx, W.Ry, W.Rz];
        R.some((ge) => ge) && (ut("nodes", o, "supports", R), J++);
        const ae = [W.Fx, W.Fy, W.Fz, W.Mx, W.My, W.Mz];
        ae.some((ge) => ge !== 0) && (ut("nodes", o, "loads", ae), J++);
        const le = [W.Kx, W.Ky, W.Kz, W.Krx, W.Kry, W.Krz];
        if (le.some((ge) => ge !== 0) && (ut("nodes", o, "springs", le), J++), W.mass !== 0 && (ut("nodes", o, "mass", W.mass), J++), W.diaphragm !== "Ninguno" && (ut("nodes", o, "diaphragm", W.diaphragm), J++), J === 0) {
          ue("\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para apoyo, o un valor de carga/resorte/masa, y volv\xE9 a aplicar.");
          let ge = document.getElementById("hk-prop-toast");
          ge || (ge = document.createElement("div"), ge.id = "hk-prop-toast", ge.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);z-index:99999;padding:9px 20px;border-radius:8px;font:600 14px system-ui;color:#fff;pointer-events:none;transition:opacity .25s;box-shadow:0 4px 16px rgba(0,0,0,.4)", document.body.appendChild(ge)), ge.textContent = "\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para empotrado/articulado, despu\xE9s Aplicar", ge.style.background = "rgba(217,119,6,0.97)", ge.style.opacity = "1", clearTimeout(window.__hekatanPropToastT), window.__hekatanPropToastT = setTimeout(() => {
            ge && (ge.style.opacity = "0");
          }, 3200);
        } else ue(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    }
    if (l) {
      const d = Qe.addFolder({ title: `\u{1F4CF} Secci\xF3n frame \u2014 ${i.length} seg(s)` });
      d.addBinding(W, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), d.addBinding(W, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const y = Qe.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      y.addBinding(W, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), y.addBinding(W, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), y.addBinding(W, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), y.addBinding(W, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), Qe.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(W, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), Qe.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(W, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const K = Qe.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      K.addBinding(W, "relMxI", { label: "Mx I" }), K.addBinding(W, "relMyI", { label: "My I" }), K.addBinding(W, "relMzI", { label: "Mz I" });
      const J = Qe.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      J.addBinding(W, "relMxJ", { label: "Mx J" }), J.addBinding(W, "relMyJ", { label: "My J" }), J.addBinding(W, "relMzJ", { label: "Mz J" }), Qe.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(W, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const ae = Qe.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      ae.addBinding(W, "LKx", { label: "LKx", min: 0, step: 100 }), ae.addBinding(W, "LKy", { label: "LKy", min: 0, step: 100 }), ae.addBinding(W, "LKz", { label: "LKz", min: 0, step: 100 });
      const le = Qe.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      le.addBinding(W, "qx", { step: 0.1 }), le.addBinding(W, "qy", { step: 0.1 }), le.addBinding(W, "qz", { step: 0.1 }), Qe.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(W, "massPerM", { label: "m/L", min: 0, step: 1 }), Qe.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        ut("segs", i, "section", W.section), ut("segs", i, "material", W.material_frame);
        const Le = { A: W.A_mod, Iz: W.Iz_mod, Iy: W.Iy_mod, J: W.J_mod };
        (Le.A !== 1 || Le.Iz !== 1 || Le.Iy !== 1 || Le.J !== 1) && ut("segs", i, "modifiers", Le), W.insertionPoint !== "10 \u2014 Centroid" && ut("segs", i, "insertionPoint", W.insertionPoint), W.beta !== 0 && ut("segs", i, "beta", W.beta);
        const be = [W.relMxI, W.relMyI, W.relMzI], _e = [W.relMxJ, W.relMyJ, W.relMzJ];
        (be.some((Ve) => Ve) || _e.some((Ve) => Ve)) && ut("segs", i, "releases", { i: be, j: _e }), W.hinges !== "None" && ut("segs", i, "hinges", W.hinges);
        const wt = [W.LKx, W.LKy, W.LKz];
        wt.some((Ve) => Ve !== 0) && ut("segs", i, "lineSprings", wt);
        const De = [W.qx, W.qy, W.qz];
        De.some((Ve) => Ve !== 0) && ut("segs", i, "distLoad", De), W.massPerM !== 0 && ut("segs", i, "massPerM", W.massPerM), ue(`\u2713 Propiedades aplicadas a ${i.length} segmento(s)`);
      });
    }
    if (f) {
      const d = Qe.addFolder({ title: `\u25AD Shell / \xC1rea \u2014 ${t.length}` });
      d.addBinding(W, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), d.addBinding(W, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), d.addBinding(W, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), Qe.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(W, "surfLoad", { label: "q", step: 0.1 }), Qe.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        ut("areas", t, "shellType", W.shellType), ut("areas", t, "thickness", W.thickness), ut("areas", t, "material", W.material_shell), W.surfLoad !== 0 && ut("areas", t, "surfLoad", W.surfLoad), ue(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    }
    if (h) {
      const d = Qe.addFolder({ title: "\u2139 Selecci\xF3n" }), y = { msg: "Seleccion\xE1 nodos, frames o \xE1reas para editar" };
      d.addBinding(y, "msg", { readonly: true, label: "" });
    }
    Qe.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      ve.clear(), Bt();
    }), Ft.style.display = "block", Go();
  };
  window.__hekatanRefreshPropsPane = Wo;
  let sn = null, _n = false;
  x.addEventListener("pointerdown", (n) => {
    n.button === 2 && (sn = { x: n.clientX, y: n.clientY }, _n = false);
  }), x.addEventListener("pointermove", (n) => {
    if (sn && n.buttons & 2 && !_n) {
      const o = n.clientX - sn.x, i = n.clientY - sn.y;
      Math.hypot(o, i) > 8 && (_n = true);
    }
  }), x.addEventListener("pointerup", (n) => {
    var _a, _b, _c;
    if (n.button === 2) {
      const o = sn !== null && !_n;
      sn = null;
      const i = window.__hekatanRClickOnElement === true;
      if (window.__hekatanRClickOnElement = false, i) return;
      if (o) {
        if (Vt ? bn() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), ve.size > 0 && (ve.clear(), Bt()), e.polylines) {
          const s = e.polylines.rawVal;
          (s[s.length - 1] ?? []).length > 0 && (e.polylines.val = [...s, []]);
        }
        const t = window.__hekatanCadState, r = (_b = (_a = t == null ? void 0 : t.get) == null ? void 0 : _a.call(t)) == null ? void 0 : _b.tool;
        r && r !== "select" && r !== "none" ? ((_c = t == null ? void 0 : t.setTool) == null ? void 0 : _c.call(t, "select"), ue(`\u238B Cancelado \u2014 tool '${r}' cerrado, volv\xE9s a Seleccionar`)) : ue("\u238B Cancelado (click derecho)");
      }
    }
  }), x.addEventListener("contextmenu", (n) => {
    n.preventDefault(), n.stopPropagation();
  }, { capture: true }), x.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && (window.__hekatanBloquearVentana || n.pointerType !== "touch" && (Tt = null, pn = false));
  }), x.addEventListener("pointermove", (n) => {
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
  }), x.addEventListener("pointerup", (n) => {
    if (!Tt) return;
    if (!pn) {
      Tt = null;
      return;
    }
    const o = n.ctrlKey || n.metaKey || n.shiftKey;
    ro(Tt.x, Tt.y, n.clientX, n.clientY, o), Tt = null, pn = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const Zt = new He();
  Zt.visible = false, Zt.frustumCulled = false, u.add(Zt);
  const Ho = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, uo = (n, o, i, t) => {
    var _a, _b, _c, _d;
    for (; Zt.children.length; ) {
      const f = Zt.children.pop();
      (_b = (_a = f.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = f.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const r = Ho[n] ?? 16777215, s = 0.05, l = new xe().setFromPoints([new M(o - s, i - s, t), new M(o + s, i - s, t), new M(o + s, i - s, t), new M(o + s, i + s, t), new M(o + s, i + s, t), new M(o - s, i + s, t), new M(o - s, i + s, t), new M(o - s, i - s, t)]);
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
        const K = U[0] - P[0], J = U[1] - P[1], R = U[2] - P[2], ae = K * K + J * J + R * R;
        if (ae < 1e-12) continue;
        const le = Math.max(0, Math.min(1, ((n - P[0]) * K + (o - P[1]) * J + (i - P[2]) * R) / ae)), ge = P[0] + le * K, Le = P[1] + le * J, be = P[2] + le * R;
        r.nea && h("nea", ge, Le, be), r.per && h("per", ge, Le, be);
      }
    }
    const _ = window.__hekatanDrawingAuxLines, S = (_ == null ? void 0 : _.rawVal) ?? (_ == null ? void 0 : _.val) ?? _ ?? [];
    for (const d of S) {
      if (d.length !== 6) continue;
      const y = [d[0], d[1], d[2]], P = [d[3], d[4], d[5]];
      if (r.end && (h("end", y[0], y[1], y[2]), h("end", P[0], P[1], P[2])), r.mid && h("mid", (y[0] + P[0]) / 2, (y[1] + P[1]) / 2, (y[2] + P[2]) / 2), r.nea || r.per) {
        const U = P[0] - y[0], K = P[1] - y[1], J = P[2] - y[2], R = U * U + K * K + J * J;
        if (R < 1e-12) continue;
        const ae = Math.max(0, Math.min(1, ((n - y[0]) * U + (o - y[1]) * K + (i - y[2]) * J) / R)), le = y[0] + ae * U, ge = y[1] + ae * K, Le = y[2] + ae * J;
        r.nea && h("nea", le, ge, Le), r.per && h("per", le, ge, Le);
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
  }, ue = (n) => {
    const o = n + Jo();
    fn.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    ue(o);
  }, window.__hekatanCadResetPending = () => {
    Te = [], ce = [], Z.visible = false, Zn(), g(), ue("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
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
      ue("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), Te = [], ie.visible = false, lt.visible = false, T(), ue(`\u21B6 Undo \u2014 ${hn.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    g();
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
    Te = [], Zn(), et = null, Lt(), ie.visible = false, lt.visible = false, T(), ue("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), g();
  };
  window.__hekatanFinalizeDraw = ho;
  const mo = () => {
    var _a, _b, _c;
    Te = [], ce = [], Z.visible = false;
    let n = false;
    ve.size && (ve.clear(), Bt(), n = true), ho();
    try {
      const o = window.__hekatanCadState, i = (_b = (_a = o == null ? void 0 : o.get) == null ? void 0 : _a.call(o)) == null ? void 0 : _b.tool;
      i && i !== "select" && ((_c = o == null ? void 0 : o.setTool) == null ? void 0 : _c.call(o, "select"));
    } catch {
    }
    ue(n ? "\u238B Selecci\xF3n cancelada" : "\u238B Sin herramienta \u2014 arrastr\xE1 para seleccionar"), g();
  };
  window.__hekatanEscapeCancel = mo, window.__hekatanReplicateSelection = (n, o, i, t) => {
    var _a, _b, _c, _d;
    t = Math.max(1, Math.round(t || 1));
    const r = [...ve], s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], f = new Set(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? []), h = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Set(), S = [];
    if (r.forEach((K) => {
      if (K.startsWith("pt:")) h.add(+K.slice(3));
      else if (K.startsWith("poly:")) {
        const J = +K.slice(5);
        _.add(J), (l[J] || []).forEach((R) => h.add(R));
      } else if (K.startsWith("seg:")) {
        const J = K.split(":"), R = +J[1], ae = +J[2], le = l[R] || [], ge = le[ae], Le = le[ae + 1];
        ge != null && Le != null && (S.push([ge, Le]), h.add(ge), h.add(Le));
      }
    }), !h.size) return 0;
    Gt();
    const d = [...s];
    let y = l.slice();
    y.length && y[y.length - 1].length === 0 && (y = y.slice(0, -1));
    const P = [...((_c = e.areas) == null ? void 0 : _c.rawVal) ?? []], U = [...h];
    for (let K = 1; K <= t; K++) {
      const J = n * K, R = o * K, ae = i * K, le = /* @__PURE__ */ new Map();
      U.forEach((ge) => {
        le.set(ge, d.length), d.push([s[ge][0] + J, s[ge][1] + R, s[ge][2] + ae]);
      }), _.forEach((ge) => {
        const Le = l[ge].map((_e) => le.has(_e) ? le.get(_e) : _e), be = y.length;
        y.push(Le), f.has(ge) && P.push(be);
      }), S.forEach(([ge, Le]) => {
        y.push([le.get(ge), le.get(Le)]);
      });
    }
    y.push([]), e.points.val = d, e.polylines && (e.polylines.val = y), e.areas && (e.areas.val = P);
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return g(), t;
  }, x.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z;
    if (Ot > 5) {
      Ot = 0;
      return;
    }
    Ot = 0;
    const o = v(n);
    if (!o) return;
    b.setFromCamera(k, o);
    const i = j();
    if (!i.length) return;
    {
      const s = o.position.distanceTo(c.target) || 1, l = i[0].distance ?? o.position.distanceTo(i[0].point), f = i[0].point;
      if (!isFinite(f.x) || !isFinite(f.y) || !isFinite(f.z) || l > Math.max(s * 12, 300)) {
        ue("\u26A0 Click rasante descartado \u2014 cay\xF3 demasiado lejos. Acerc\xE1 la vista o clicke\xE1 sobre la grilla.");
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
          const _ = !!window.__hekatanOrthoMode;
          let S = et;
          if (!S && _) {
            const d = Math.abs(t.x - h[0]), y = Math.abs(t.y - h[1]), P = Math.abs(t.z - h[2]);
            S = d >= y && d >= P ? "x" : y >= P ? "y" : "z";
          }
          S === "x" ? t = new M(t.x, h[1], h[2]) : S === "y" ? t = new M(h[0], t.y, h[2]) : S === "z" && (t = new M(h[0], h[1], t.z));
        }
      }
    }
    if (ot) t = ot.clone(), ue(`\u{1F4D0} Eje \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.2, l = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, s);
      if (l) t = new M(l.x, l.y, l.z), ue(`\u{1F3AF} Snap [${l.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      else {
        const f = window.__hekatanSnapEnabled !== false, h = window.__hekatanSnap2D ?? 0;
        f && h > 0 && (t = new M(Math.round(t.x / h) * h, Math.round(t.y / h) * h, Math.round(t.z / h) * h));
      }
    }
    const r = ((_e = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e.tool) ?? "select";
    if (r === "select" || r === "none" || !r) {
      if (nt) {
        Vt && bn();
        const { kind: s, a: l, b: f } = nt, h = f !== void 0 ? `${s}:${l}:${f}` : `${s}:${l}`;
        n.ctrlKey || n.metaKey || n.shiftKey || ve.clear(), ve.has(h) ? ve.delete(h) : ve.add(h), Bt(), ue(`\u2713 Seleccionados ${ve.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const s = n.ctrlKey || n.metaKey || n.shiftKey, l = n.clientX, f = n.clientY;
        Vt ? (ro(Vt.x, Vt.y, l, f, s), Vt = null) : s || (Vt = { x: l, y: f }, ue("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), Yn(l, f, l + 1, f + 1, false));
      }
      return;
    }
    if (r === "axis") {
      const s = window.__hekatanAxisDraw;
      if (!s) return;
      if (!s.pendingStart) {
        s.pendingStart = [t.x, t.y, t.z], ue(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const l = s.mode === "number", f = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, s.pendingStart, [t.x, t.y, t.z], l);
      ue(`\u2713 Eje "${f}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (r === "delete") {
      if (dt >= 0) {
        const s = window.__hekatanDrawingAuxLines, l = (s == null ? void 0 : s.rawVal) ?? (s == null ? void 0 : s.val) ?? s ?? [], f = dt;
        if (f >= 0 && f < l.length) {
          Gt();
          const h = l.slice(0, f).concat(l.slice(f + 1));
          s && typeof s == "object" && "val" in s ? s.val = h : window.__hekatanDrawingAuxLines = h, ue(`\u{1F5D1} L\xEDnea auxiliar #${f + 1} borrada`), dt = -1, he.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (Ze >= 0) {
        const s = Ze, l = qe;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(s)) ?? false ? (nn(s), ue(`\u{1F5D1} \xC1rea #${s + 1} (shell Q4) borrada`)) : l >= 0 ? (Ln(s, l), ue(`\u{1F5D1} Segmento ${l + 1} de polil\xEDnea #${s + 1} borrado`)) : (nn(s), ue(`\u{1F5D1} Polil\xEDnea #${s + 1} borrada`));
      } else ue("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (r === "circle") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        ue("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [s, l] = Te, f = Math.hypot(l[0] - s[0], l[1] - s[1], l[2] - s[2]);
      Math.abs(l[0] - s[0]);
      const h = Math.abs(l[1] - s[1]), S = Math.abs(l[2] - s[2]) < 1e-3 ? "xy" : h < 1e-3 ? "xz" : "yz", d = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, s[0], s[1], s[2], f, d, S), ue(`\u2713 C\xEDrculo dibujado en ${S.toUpperCase()} \u2014 r=${f.toFixed(2)}m, ${d} segmentos`), Te = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (r === "arc") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        ue("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (Te.length === 2) {
        ue("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [s, l, f] = Te, h = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, s, l, f, h), ue(`\u2713 Arco dibujado \u2014 ${h} segmentos`), Te = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (r === "rect") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        ue("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Te;
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, s, l), ue(`\u2713 Rect\xE1ngulo dibujado \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Te = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (r === "rectarea") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        ue("\u25AD \xC1rea rectangular \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Te;
      (_p = window.__hekatanDrawRectArea) == null ? void 0 : _p.call(window, s, l), ue(`\u2713 \xC1rea rectangular (shell Q4) creada \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Te = [];
      return;
    }
    if (r === "polyarea") {
      ce.push([t.x, t.y, t.z]), Z.geometry.setFromPoints(ce.map((s) => new M(s[0], s[1], s[2]))), Z.visible = ce.length >= 1, ue(`\u25B0 \xC1rea libre \u2014 ${ce.length} punto(s). Click m\xE1s v\xE9rtices, o Enter / click-derecho para cerrar y mallar (m\xEDn. 3).`), g();
      return;
    }
    if (r === "plane3") {
      if (Te.push([t.x, t.y, t.z]), Te.length < 3) {
        ue(`\u25E3 Plano inclinado \u2014 punto ${Te.length}/3. Tip: cambi\xE1 la Cota Z (o enganch\xE1 un nodo) entre clicks para darle inclinaci\xF3n.`);
        return;
      }
      const [s, l, f] = Te, h = (_q = window.__hekatanSetInclinedPlaneFrom3) == null ? void 0 : _q.call(window, s, l, f);
      ue(h ? "\u2713 Plano de trabajo INCLINADO activo. Dibuj\xE1 el \xE1rea (\u25AD/\u2B21) sobre \xE9l. (XY para resetear)" : "\u26A0 Los 3 puntos son colineales \u2014 no definen un plano. Reintent\xE1."), Te = [];
      return;
    }
    if (r === "col") {
      Gt();
      const s = t.z, l = bt && bt > 0 ? bt : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, s], [t.x, t.y, s + l]];
      const f = e.polylines.rawVal, h = e.points.rawVal.length;
      e.polylines.val = [...f.slice(0, -1), ...f[f.length - 1].length > 0 ? [f[f.length - 1]] : [], [h - 2, h - 1], []], bt = 0, ue(`\u258C Columna creada \u2014 h=${l.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (r === "wall") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        ue("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [s, l] = Te, f = bt && bt > 0 ? bt : 3;
      Gt();
      const h = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [s[0], s[1], s[2]], [l[0], l[1], l[2]], [l[0], l[1], l[2] + f], [s[0], s[1], s[2] + f]];
      const _ = e.polylines.rawVal;
      if (_.length - 1, e.polylines.val = [..._.slice(0, -1), ..._[_.length - 1].length > 0 ? [_[_.length - 1]] : [], [h, h + 1, h + 2, h + 3, h], []], e.areas) {
        const S = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, S];
      }
      ue(`\u25A5 Pared Q4 creada \u2014 h=${f.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Te = [], bt = 0;
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
      e.polylines.val = [...f.slice(0, -1), ...f[f.length - 1].length > 0 ? [f[f.length - 1]] : [], [h - 2, h - 1], []], bt = 0, ue(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${s.toFixed(2)}m`);
      try {
        (_t = window.__hekatanRebuild) == null ? void 0 : _t.call(window);
      } catch {
      }
      return;
    }
    if (r === "extl") {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.5, l = qt(t.x, t.y, t.z, s);
      if (!l) {
        ue("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const f = e.polylines.rawVal, h = e.points.rawVal, _ = f[l.polyIdx], S = h[_[l.segIdx]], d = h[_[l.segIdx + 1]];
      if (!S || !d) {
        ue("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const y = bt && bt > 0 ? bt : 3;
      Gt();
      const P = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [S[0], S[1], S[2]], [d[0], d[1], d[2]], [d[0], d[1], d[2] + y], [S[0], S[1], S[2] + y]];
      const U = e.polylines.rawVal;
      if (e.polylines.val = [...U.slice(0, -1), ...U[U.length - 1].length > 0 ? [U[U.length - 1]] : [], [P, P + 1, P + 2, P + 3, P], []], e.areas) {
        const K = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, K];
      }
      bt = 0, ue(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${y.toFixed(2)}m`);
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
      ue(`\u2726 Punto auxiliar agregado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      return;
    }
    if (r === "aux") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        ue("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [s, l] = Te, f = window.__hekatanDrawingAuxLines;
      if (f) {
        const y = f.rawVal ?? f.val ?? [];
        f.val = [...y, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      const h = l[0] - s[0], _ = l[1] - s[1], S = l[2] - s[2], d = Math.sqrt(h * h + _ * _ + S * S);
      ue(`\u2713 L\xEDnea auxiliar creada \u2014 L=${d.toFixed(2)}m (cyan, no FEM)`), Te = [];
      return;
    }
    if (r === "extend") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        ue("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [s, l] = Te, f = window.__hekatanDrawingAuxLines;
      if (f) {
        const h = f.rawVal ?? f.val ?? [];
        f.val = [...h, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      ue("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Te = [];
      return;
    }
    if (r === "chaflan") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        ue("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Te, f = window.__hekatanChaflanR ?? 1, h = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_v = window.__hekatanDrawSlabChaflan) == null ? void 0 : _v.call(window, s, l, f, h, 6);
      const _ = Math.abs(l[0] - s[0]).toFixed(1), S = Math.abs(l[1] - s[1]).toFixed(1);
      ue(`\u2713 Losa con chaflanes dibujada \u2014 ${_}\xD7${S}m, r=${f}m, ${h} seg/chafl\xE1n`), Te = [];
      try {
        (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
      } catch {
      }
      return;
    }
    if (V = false, Gt(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const s = e.polylines.rawVal, l = s.length - 1, f = s[l] ?? [];
      if (r === "line" && f.length >= 2) {
        ue(`\uFF0F L\xEDnea \u2014 ${f.length - 1} tramo${f.length === 2 ? "" : "s"}. Segu\xED marcando puntos; Esc o clic derecho para terminar.`);
        try {
          (_x = window.__hekatanRebuild) == null ? void 0 : _x.call(window);
        } catch {
        }
        return;
      }
      if (r === "area" && f.length === 4) {
        e.polylines.val = [...s.slice(0, -1), [...f, f[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, l]), ue("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_y = window.__hekatanRebuild) == null ? void 0 : _y.call(window);
        } catch {
        }
        return;
      }
    }
    if (r === "node") ue(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (r === "line") ue("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (r === "polyline") ue("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (r === "area") {
      const s = ((_z = e.polylines) == null ? void 0 : _z.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      ue(`\u25A6 \xC1rea \u2014 click ${s.length}/4. Marc\xE1 ${4 - s.length} v\xE9rtice${4 - s.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), x.addEventListener("contextmenu", (n) => {
    var _a, _b, _c;
    if (((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "polyarea" && ce.length >= 3) {
      n.preventDefault();
      const i = cn();
      ue(`\u2713 \xC1rea libre mallada \u2014 ${i} shells Q4 creados.`);
      return;
    }
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), x.addEventListener("pointermove", (n) => {
    var _a, _b;
    const o = v(n);
    if (!o) return;
    b.setFromCamera(k, o);
    const i = j();
    if (we.geometry.deleteAttribute("position"), i.length) {
      let t = i[0].point.clone();
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z));
      {
        const l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], f = l[l.length - 1] ?? [], h = e.points.rawVal ?? [];
        if (f.length > 0) {
          const _ = h[f[f.length - 1]];
          if (_) {
            const S = !!window.__hekatanOrthoMode;
            let d = et;
            if (!d && S) {
              const y = Math.abs(t.x - _[0]), P = Math.abs(t.y - _[1]), U = Math.abs(t.z - _[2]);
              d = y >= P && y >= U ? "x" : P >= U ? "y" : "z";
            }
            d === "x" ? t.set(t.x, _[1], _[2]) : d === "y" ? t.set(_[0], t.y, _[2]) : d === "z" && t.set(_[0], _[1], t.z);
          }
        }
      }
      const r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, r);
      if (s) t.set(s.x, s.y, s.z);
      else {
        const l = window.__hekatanSnapEnabled !== false, f = window.__hekatanSnap2D ?? 0.5;
        l && f > 0 && (t.x = Math.round(t.x / f) * f, t.y = Math.round(t.y / f) * f, t.z = Math.round(t.z / f) * f);
      }
      we.geometry.setAttribute("position", new ft(t.toArray(), 3));
    }
    g();
  }), x.addEventListener("pointermove", (n) => {
    var _a;
    const o = v(n);
    if (!o) return;
    b.setFromCamera(k, o);
    let i = false;
    const t = b.intersectObject(G), r = j();
    if (t.length && r.length) {
      const s = new M(...e.points.rawVal[t[0].index]), l = new M(...r[0].point), f = s.sub(l), h = (_a = r[0].face) == null ? void 0 : _a.normal;
      h.transformDirection(D.matrixWorld), Math.abs(f.dot(h)) < 1e-4 && (i = true);
    }
    we.visible = !i;
  });
  let Un = false, Kn;
  x.addEventListener("pointermove", (n) => {
    var _a;
    if (!Ot) return;
    const o = v(n);
    if (!o) return;
    b.setFromCamera(k, o);
    let i = false;
    const t = b.intersectObject(G), r = j();
    if (t.length && r.length) {
      const l = new M(...e.points.rawVal[t[0].index]), f = new M(...r[0].point), h = l.sub(f), _ = (_a = r[0].face) == null ? void 0 : _a.normal;
      _.transformDirection(D.matrixWorld), Math.abs(h.dot(_)) < 1e-4 && (i = true);
    }
    if (i && Ot < 5 && (Un = true, c.enabled = false, Kn = t[0].index), !Un || Ot % 2 !== 0) return;
    const s = [...e.points.rawVal];
    if (Kn !== void 0) {
      let l = r[0].point;
      (n.ctrlKey || n.metaKey) && (l = new M(Math.round(l.x), Math.round(l.y), Math.round(l.z))), s[Kn] = l.toArray();
    }
    e.points.val = s;
  }), x.addEventListener("pointerup", () => {
    c.enabled = true, Un = false;
  }), x.addEventListener("contextmenu", (n) => {
    var _a;
    const o = v(n);
    if (!o) return;
    b.setFromCamera(k, o);
    let i = false;
    const t = b.intersectObject(G), r = j();
    if (t.length && r.length) {
      const f = new M(...e.points.rawVal[t[0].index]), h = new M(...r[0].point), _ = f.sub(h), S = (_a = r[0].face) == null ? void 0 : _a.normal;
      S.transformDirection(D.matrixWorld), Math.abs(_.dot(S)) < 1e-4 && (i = true);
    }
    if (!i) return;
    const s = [...e.points.rawVal];
    if (s.splice(t[0].index, 1), e.points.val = s, !e.polylines) return;
    const l = e.polylines.rawVal.map((f) => f.filter((h) => h !== t[0].index)).map((f) => f.map((h) => h > t[0].index ? h - 1 : h)).filter((f) => f.length);
    l.push([]), e.polylines.val = l;
  });
}
function Ds(e, a, u) {
  const w = Math.round(14.999999999999998), p = { position: e.position.clone(), quaternion: e.quaternion.clone() }, x = setInterval(b, 1e3 / 30);
  let g = 0;
  function b() {
    g++;
    const k = g / w;
    e.position.lerpVectors(p.position, a.position, k), e.quaternion.slerpQuaternions(p.quaternion, a.quaternion, k), u && u(), g == w && clearInterval(x);
  }
}
function Ys(e, a, u, m) {
  const c = xs(u, e.elements, m);
  return Y.derive(() => {
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
  const c = new He(), w = new Ro();
  w.setColorMap("rainbow");
  const p = new It(), x = Y.state([]);
  return Y.derive(() => {
    var _a, _b, _c;
    a.deformedShape.val;
    const g = u.val, b = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], k = Us(a.frameResults.val);
    if (c.children.forEach((A) => {
      A.geometry && A.geometry.dispose(), A.material && A.material.dispose();
    }), c.clear(), !k || b.length === 0 || g.length === 0) {
      x.val = [];
      return;
    }
    const v = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, D = (_c = e.deformOutputs) == null ? void 0 : _c.val, fe = [], oe = [];
    for (let A = 0; A < b.length; A++) {
      if (b[A].length !== 2) continue;
      const se = Ks(k, A, v, D);
      se && (fe.push(se[0], se[1]), oe.push({ idx: A, vals: se }));
    }
    if (fe.length === 0) {
      x.val = [];
      return;
    }
    const O = Math.min(...fe), z = Math.max(...fe);
    w.setMin(O), w.setMax(z), x.val = fe;
    const j = [1 / 0, 1 / 0, 1 / 0], G = [-1 / 0, -1 / 0, -1 / 0];
    for (const A of g) for (let q = 0; q < 3; q++) j[q] = Math.min(j[q], A[q]), G[q] = Math.max(G[q], A[q]);
    const me = Math.max(G[0] - j[0], G[1] - j[1], G[2] - j[2], 1) * Zs, I = [], L = [], X = [];
    let V = 0;
    for (const { idx: A, vals: q } of oe) {
      const se = b[A], ee = g[se[0]], Q = g[se[1]];
      if (!ee || !Q) continue;
      const E = new M(Q[0] - ee[0], Q[1] - ee[1], Q[2] - ee[2]), ie = E.length();
      if (ie < 1e-10) continue;
      E.normalize();
      const Z = Math.abs(E.y) < 0.99 ? new M(0, 1, 0) : new M(1, 0, 0), ce = new M().crossVectors(E, Z).normalize(), pe = new M().crossVectors(E, ce).normalize(), Ce = eo + 1, ye = Ns;
      for (let Ae = 0; Ae < Ce; Ae++) {
        const Ge = Ae / eo, lt = ee[0] + E.x * ie * Ge, te = ee[1] + E.y * ie * Ge, C = ee[2] + E.z * ie * Ge, N = q[0] + (q[1] - q[0]) * Ge, B = w.getColor(N) ?? new It(0, 0, 0);
        p.copy(B).convertSRGBToLinear();
        for (let H = 0; H < ye; H++) {
          const ne = H / ye * Math.PI * 2, de = Math.cos(ne), re = Math.sin(ne);
          I.push(lt + (ce.x * de + pe.x * re) * me, te + (ce.y * de + pe.y * re) * me, C + (ce.z * de + pe.z * re) * me), L.push(p.r, p.g, p.b);
        }
      }
      for (let Ae = 0; Ae < eo; Ae++) for (let Ge = 0; Ge < ye; Ge++) {
        const lt = (Ge + 1) % ye, te = V + Ae * ye + Ge, C = V + Ae * ye + lt, N = V + (Ae + 1) * ye + Ge, B = V + (Ae + 1) * ye + lt;
        X.push(te, C, B), X.push(te, B, N);
      }
      V += Ce * ye;
    }
    if (I.length === 0) return;
    const F = new xe();
    F.setAttribute("position", new ft(I, 3)), F.setAttribute("color", new ft(L, 3)), F.setIndex(X), F.computeVertexNormals();
    const $ = new je({ vertexColors: true, side: vt }), T = new Ke(F, $);
    T.frustumCulled = false, c.add(T);
  }), c.__colorMapValues = x, c;
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
  const a = new He();
  a.name = "__hekatan_hover", a.renderOrder = 99;
  const u = new rn(1, 16, 16), m = new je({ color: Qs, transparent: true, opacity: 0.85, depthTest: false }), c = new Ke(u, m);
  c.visible = false, c.renderOrder = 100, a.add(c);
  const w = new xe(), p = new it({ color: Vo, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), x = new Xt(w, p);
  x.visible = false, x.renderOrder = 100, a.add(x);
  const g = new je({ color: Vo, transparent: true, opacity: 0.7, depthTest: false }), b = new Ke(new ko(1, 1, 1, 12), g);
  b.visible = false, b.renderOrder = 100, a.add(b);
  const k = new xe(), v = new je({ color: Os, transparent: true, opacity: 0.45, side: vt, depthTest: false }), D = new Ke(k, v);
  D.visible = false, D.renderOrder = 100, a.add(D);
  const fe = new xe(), oe = new it({ color: js, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), O = new Xt(fe, oe);
  O.visible = false, O.renderOrder = 100, a.add(O);
  const z = new je({ color: zn, transparent: true, opacity: 0.95, depthTest: false }), j = new je({ color: zn, transparent: true, opacity: 0.85, depthTest: false }), G = new ko(1, 1, 1, 12), we = new je({ color: zn, transparent: true, opacity: 0.55, side: vt, depthTest: false }), me = new it({ color: zn, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), I = [];
  window.__hekatanModelSelection = I;
  const L = new He();
  L.renderOrder = 101, a.add(L);
  const X = document.createElement("div");
  Object.assign(X.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), X.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(X);
  }, 0);
  function V(te) {
    const C = e.derivedNodes.rawVal;
    return !C || te < 0 || te >= C.length ? null : new M(C[te][0], C[te][1], C[te][2]);
  }
  function F(te, C) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s2;
    const N = e.getActiveCamera();
    if (!N || !e.mesh) return null;
    const B = e.rendererElm.getBoundingClientRect(), H = te - B.left, ne = C - B.top, de = e.derivedNodes.rawVal, re = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!de || !re) return null;
    const Me = /* @__PURE__ */ new Map(), Pe = (Xe) => {
      if (Me.has(Xe)) return Me.get(Xe);
      const Ee = V(Xe);
      if (!Ee) return Me.set(Xe, null), null;
      const Se = Ee.clone().project(N), Ye = (Se.x * 0.5 + 0.5) * B.width, he = (-Se.y * 0.5 + 0.5) * B.height, Ze = { x: Ye, y: he, z: Se.z };
      return Me.set(Xe, Ze), Ze;
    }, ze = /* @__PURE__ */ new Set();
    for (const Xe of re) if (Xe) for (const Ee of Xe) ze.add(Ee);
    const $e = 8;
    let Ie = -1, Ne = $e;
    for (let Xe = 0; Xe < de.length; Xe++) {
      if (!ze.has(Xe)) continue;
      const Ee = Pe(Xe);
      if (!Ee || Ee.z < -1 || Ee.z > 1) continue;
      const Se = Ee.x - H, Ye = Ee.y - ne, he = Math.sqrt(Se * Se + Ye * Ye);
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
          const he = ta(H, ne, Se.x, Se.y, Ye.x, Ye.y);
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
          if (na(H, ne, Se)) {
            const Ze = Se.reduce((qe, dt) => qe + dt.z, 0) / Se.length * 1e-3;
            Ze < tt && (tt = Ze, ot = Xe, Lt = "shell");
          }
        } else if (Ee.length === 8) {
          const Se = [];
          let Ye = true;
          for (const ve of Ee) {
            const Be = Pe(ve);
            if (!Be || Be.z < -1 || Be.z > 1) {
              Ye = false;
              break;
            }
            Se.push(Be);
          }
          if (!Ye) continue;
          const he = Math.min(...Se.map((ve) => ve.x)), Ze = Math.max(...Se.map((ve) => ve.x)), qe = Math.min(...Se.map((ve) => ve.y)), dt = Math.max(...Se.map((ve) => ve.y));
          if (H >= he && H <= Ze && ne >= qe && ne <= dt) {
            const Be = Se.reduce((Je, pt) => Je + pt.z, 0) / Se.length * 1e-3;
            Be < tt && (tt = Be, ot = Xe, Lt = "solid");
          }
        }
      }
    }
    if (ot >= 0) {
      const Xe = re[ot];
      let Se = `${Lt === "frame" ? "Frame" : Lt === "shell" ? "Shell" : "Solid"} ${ot}`;
      const Ye = (_e = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e.rawVal, he = (_g = (_f = Ye == null ? void 0 : Ye.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, ot);
      if (he) {
        he.name && (Se += `
  \u{1F4CB} ${he.name}`), he.shape && (Se += `
  Shape: ${he.shape}`);
        const Ze = /concrete|hormig|rect.*sólida/i.test(he.shape || ""), qe = Ze ? 100 : 1e3, dt = Ze ? "cm" : "mm", ve = (Je) => {
          const pt = Je * qe;
          return Math.abs(pt - Math.round(pt)) < 0.05 ? `${Math.round(pt)}` : `${pt.toFixed(1)}`;
        }, Be = [];
        if (he.D != null && Be.push(`D=${ve(he.D)}`), he.B != null && Be.push(`B=${ve(he.B)}`), he.TF != null && Be.push(`TF=${ve(he.TF)}`), he.TW != null && Be.push(`TW=${ve(he.TW)}`), he.t != null && Be.push(`t=${ve(he.t)}`), Be.length && (Se += `
  Dim: ${Be.join(" ")} ${dt}`), he.material) {
          let Je = he.material;
          he.fillMaterial && (Je += ` + FILL "${he.fillMaterial}"`), Se += `
  Mat: ${Je}`;
        }
      } else {
        const Ze = (_i = (_h = Ye == null ? void 0 : Ye.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, ot), qe = (_k = (_j = Ye == null ? void 0 : Ye.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, ot);
        Ze ? (Se += `
  ${Ze}`, qe && !Ze.includes(qe) && (Se += `  (${qe})`)) : qe && (Se += `
  Material: ${qe}`);
      }
      if (Se += `
nodos: [${Xe.join(", ")}]`, Lt === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const Ze = e.mesh.analyzeOutputs.rawVal, qe = Js[Fe.stressUnit] ?? 1, dt = [["bendingXX", "Mxx", Ue, `${Fe.forceUnit}\xB7m/m`], ["bendingYY", "Myy", Ue, `${Fe.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", Ue, `${Fe.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", Ue, `${Fe.forceUnit}/m`], ["membraneYY", "Nyy", Ue, `${Fe.forceUnit}/m`], ["membraneXY", "Nxy", Ue, `${Fe.forceUnit}/m`], ["shearX", "Qx", Ue, `${Fe.forceUnit}/m`], ["shearY", "Qy", Ue, `${Fe.forceUnit}/m`], ["vonMises", "\u03C3VM", qe, Fe.stressUnit], ["pressure", "p", qe, Fe.stressUnit]], ve = [];
        for (const [Be, Je, pt, Dt] of dt) {
          const ht = Ze == null ? void 0 : Ze[Be];
          if (ht && ht instanceof Map) {
            const zt = ht.get(ot);
            if (zt != null) {
              if (typeof zt == "number") ve.push(`${Je} = ${ct(zt * pt, 3)} ${Dt}`);
              else if (Array.isArray(zt)) {
                let nt = zt[0];
                for (const Ht of zt) Math.abs(Ht) > Math.abs(nt) && (nt = Ht);
                ve.push(`${Je} = ${ct(nt * pt, 3)} ${Dt}`);
              }
            }
          }
        }
        ve.length > 0 && (Se += `
\u2500\u2500\u2500\u2500 results \u2500\u2500\u2500\u2500
` + ve.slice(0, 8).join(`
`));
      }
      if (Lt === "frame" && ((_m = e.mesh) == null ? void 0 : _m.deformOutputs) && e.mesh.elementInputs) {
        const Ze = e.mesh.deformOutputs.rawVal, qe = e.mesh.elementInputs.rawVal, dt = Ze == null ? void 0 : Ze.deformations;
        if (dt && Xe.length === 2) {
          const ve = dt.get(Xe[0]), Be = dt.get(Xe[1]), Je = de[Xe[0]], pt = de[Xe[1]];
          if (ve && Be && Je && pt) {
            const Dt = pt[0] - Je[0], ht = pt[1] - Je[1], zt = pt[2] - Je[2], nt = Math.sqrt(Dt * Dt + ht * ht + zt * zt);
            if (nt > 1e-9) {
              const Ht = Dt / nt, Bt = ht / nt, tn = zt / nt, qt = (Be[0] - ve[0]) * Ht + (Be[1] - ve[1]) * Bt + (Be[2] - ve[2]) * tn, Jt = ((_n = qe.elasticities) == null ? void 0 : _n.get(ot)) ?? 0, $n = ((_o2 = qe.areas) == null ? void 0 : _o2.get(ot)) ?? 0, In = ((_p = qe.momentsOfInertiaY) == null ? void 0 : _p.get(ot)) ?? 0, nn = ((_q = qe.momentsOfInertiaZ) == null ? void 0 : _q.get(ot)) ?? 0, Ln = ((_r = qe.torsionalConstants) == null ? void 0 : _r.get(ot)) ?? 0, cn = ((_s2 = qe.shearModuli) == null ? void 0 : _s2.get(ot)) ?? Jt / 2.6, Ct = Jt * $n * (qt / nt), Rt = (Be[3] - ve[3]) * Ht + (Be[4] - ve[4]) * Bt + (Be[5] - ve[5]) * tn, Yt = cn * Ln * (Rt / nt), Qt = Be[4] - ve[4], Bn = Be[5] - ve[5], Nt = Jt * In * Qt / nt, dn = Jt * nn * Bn / nt;
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
  function $(te, C, N) {
    var _a, _b, _c;
    if (c.visible = false, x.visible = false, b.visible = false, D.visible = false, O.visible = false, !te || !e.mesh) {
      X.style.display = "none", e.render();
      return;
    }
    const B = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (te.type === "node") {
      const re = V(te.idx);
      if (re) {
        const Me = e.derivedNodes.rawVal ?? [];
        let Pe = 1;
        if (Me.length >= 2) {
          let Ie = [1 / 0, 1 / 0, 1 / 0], Ne = [-1 / 0, -1 / 0, -1 / 0];
          for (const Fe of Me) for (let rt = 0; rt < 3; rt++) Fe[rt] < Ie[rt] && (Ie[rt] = Fe[rt]), Fe[rt] > Ne[rt] && (Ne[rt] = Fe[rt]);
          Pe = Math.max(Ne[0] - Ie[0], Ne[1] - Ie[1], Ne[2] - Ie[2], 0.1);
        }
        const ze = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, $e = 0.021 * Pe * ze;
        c.position.copy(re), c.scale.setScalar($e), c.visible = true;
      }
    } else if (te.type === "frame" && B) {
      const re = B[te.idx], Me = V(re[0]), Pe = V(re[1]);
      if (Me && Pe) {
        const ze = Me.clone().add(Pe).multiplyScalar(0.5), $e = Pe.clone().sub(Me), Ie = $e.length(), rt = e.getActiveCamera().position.distanceTo(ze) * 35e-4;
        b.position.copy(ze);
        const Ue = new M(0, 1, 0), et = Ue.clone().cross($e).normalize(), ot = Ue.angleTo($e);
        b.quaternion.setFromAxisAngle(et, ot), b.scale.set(rt, Ie, rt), b.visible = true;
      }
    } else if (te.type === "shell" && B) {
      const re = B[te.idx], Me = [], Pe = [];
      for (const ze of re) {
        const $e = V(ze);
        if (!$e) return;
        Me.push($e.x, $e.y, $e.z);
      }
      re.length === 4 ? Pe.push(0, 1, 2, 0, 2, 3) : re.length === 3 && Pe.push(0, 1, 2), k.setAttribute("position", new ft(Me, 3)), k.setIndex(Pe), k.computeVertexNormals(), D.visible = true;
    } else if (te.type === "solid" && B) {
      const re = B[te.idx], Me = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], Pe = [];
      for (const [ze, $e] of Me) {
        const Ie = V(re[ze]), Ne = V(re[$e]);
        Ie && Ne && Pe.push(Ie.x, Ie.y, Ie.z, Ne.x, Ne.y, Ne.z);
      }
      fe.setAttribute("position", new ft(Pe, 3)), O.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      X.style.display = "none", e.render();
      return;
    }
    X.textContent = te.info, X.style.whiteSpace = "pre-line", X.style.display = "block";
    const ne = e.rendererElm.getBoundingClientRect(), de = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? ne;
    X.style.left = `${C - de.left}px`, X.style.top = `${N - de.top}px`, e.render();
  }
  let T = "", A = 0, q = 0;
  const se = window.__hekatanHoverDebug ?? false, ee = (te) => {
    A && cancelAnimationFrame(A), A = requestAnimationFrame(() => {
      var _a, _b, _c;
      const C = F(te.clientX, te.clientY);
      if (se && q < 5) {
        const B = e.derivedNodes.rawVal, H = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${te.clientX}, ${te.clientY}) nodes=${(B == null ? void 0 : B.length) ?? 0} elems=${(H == null ? void 0 : H.length) ?? 0} hover=`, C), q++;
      }
      const N = C ? `${C.type}:${C.idx}` : "";
      if (N !== T) T = N, $(C, te.clientX, te.clientY);
      else if (C) {
        const B = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        X.style.left = `${te.clientX - B.left}px`, X.style.top = `${te.clientY - B.top}px`;
      }
    });
  };
  let Q = null;
  const E = () => {
    T = "", c.visible = false, x.visible = false, b.visible = false, D.visible = false, O.visible = false, X.style.display = "none", e.render();
  }, ie = (te) => {
    const C = e.rendererElm.getBoundingClientRect(), N = te.clientX - C.left, B = te.clientY - C.top;
    (N < -2 || B < -2 || N > C.width + 2 || B > C.height + 2) && (Q && clearTimeout(Q), Q = window.setTimeout(E, 200));
  }, Z = () => {
    Q && (clearTimeout(Q), Q = null);
  };
  e.rendererElm.addEventListener("pointermove", ee), e.rendererElm.addEventListener("pointerleave", ie), e.rendererElm.addEventListener("pointerenter", Z);
  function ce() {
    var _a, _b, _c;
    const te = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    return te === "select" || te === "none" || !te;
  }
  let pe = null;
  e.rendererElm.addEventListener("pointerdown", (te) => {
    te.button === 0 && (pe = { x: te.clientX, y: te.clientY });
  }), e.rendererElm.addEventListener("pointerup", (te) => {
    if (te.button !== 0 || !pe) return;
    const C = te.clientX - pe.x, N = te.clientY - pe.y;
    if (pe = null, C * C + N * N > 9 || !ce()) return;
    const B = F(te.clientX, te.clientY);
    B ? (Ge({ type: B.type, idx: B.idx }, te.shiftKey), Ae()) : lt();
  }), window.addEventListener("keydown", (te) => {
    if (te.key !== "Escape" || !I.length) return;
    const C = document.activeElement, N = !!C && (C.id === "hk3-cmd-input" || C.id === "hk-dyn-input") && C.value === "";
    C && (C.tagName === "INPUT" || C.tagName === "TEXTAREA" || C.isContentEditable) && !N || lt();
  }, { capture: true });
  function Ce() {
    for (const te of L.children.slice()) {
      L.remove(te);
      const C = te.geometry;
      C && C !== u && C !== G && C.dispose();
    }
  }
  function ye(te, C) {
    var _a, _b, _c;
    const N = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
    if (te.type === "node") {
      const B = V(te.idx);
      if (!B) return;
      const H = ((_c = e.derivedDisplayScale) == null ? void 0 : _c.rawVal) ?? 1, ne = new Ke(u, z);
      ne.position.copy(B), ne.scale.setScalar(0.025 * C * H), ne.renderOrder = 101, L.add(ne);
    } else if (te.type === "frame" && N) {
      const B = N[te.idx], H = V(B[0]), ne = V(B[1]);
      if (!H || !ne) return;
      const de = H.clone().add(ne).multiplyScalar(0.5), re = ne.clone().sub(H), Me = re.length(), Pe = e.getActiveCamera().position.distanceTo(de), ze = new Ke(G, j);
      ze.position.copy(de);
      const $e = new M(0, 1, 0);
      ze.quaternion.setFromAxisAngle($e.clone().cross(re).normalize(), $e.angleTo(re)), ze.scale.set(Pe * 35e-4, Me, Pe * 35e-4), ze.renderOrder = 101, L.add(ze);
    } else if (te.type === "shell" && N) {
      const B = N[te.idx], H = [], ne = [];
      for (const Me of B) {
        const Pe = V(Me);
        if (!Pe) return;
        H.push(Pe.x, Pe.y, Pe.z);
      }
      B.length === 4 ? ne.push(0, 1, 2, 0, 2, 3) : B.length === 3 && ne.push(0, 1, 2);
      const de = new xe();
      de.setAttribute("position", new ft(H, 3)), de.setIndex(ne), de.computeVertexNormals();
      const re = new Ke(de, we);
      re.renderOrder = 101, L.add(re);
    } else if (te.type === "solid" && N) {
      const B = N[te.idx], H = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], ne = [];
      for (const [Me, Pe] of H) {
        const ze = V(B[Me]), $e = V(B[Pe]);
        ze && $e && ne.push(ze.x, ze.y, ze.z, $e.x, $e.y, $e.z);
      }
      const de = new xe();
      de.setAttribute("position", new ft(ne, 3));
      const re = new Xt(de, me);
      re.renderOrder = 101, L.add(re);
    }
  }
  function Ae() {
    if (Ce(), !I.length || !e.mesh) {
      e.render();
      return;
    }
    const te = e.derivedNodes.rawVal ?? [];
    let C = 1;
    if (te.length >= 2) {
      const N = [1 / 0, 1 / 0, 1 / 0], B = [-1 / 0, -1 / 0, -1 / 0];
      for (const H of te) for (let ne = 0; ne < 3; ne++) H[ne] < N[ne] && (N[ne] = H[ne]), H[ne] > B[ne] && (B[ne] = H[ne]);
      C = Math.max(B[0] - N[0], B[1] - N[1], B[2] - N[2], 0.1);
    }
    for (const N of I) ye(N, C);
    e.render();
  }
  function Ge(te, C) {
    const N = I.findIndex((B) => B.type === te.type && B.idx === te.idx);
    N >= 0 ? I.splice(N, 1) : C || I.push(te), I.length && I[I.length - 1];
  }
  function lt() {
    I.length = 0, Ae();
  }
  return Y.derive(() => {
    e.derivedNodes.val, I.length && Ae();
  }), a;
}
function ta(e, a, u, m, c, w) {
  const p = c - u, x = w - m, g = p * p + x * x;
  if (g < 1e-9) {
    const oe = e - u, O = a - m;
    return Math.sqrt(oe * oe + O * O);
  }
  let b = ((e - u) * p + (a - m) * x) / g;
  b = Math.max(0, Math.min(1, b));
  const k = u + b * p, v = m + b * x, D = e - k, fe = a - v;
  return Math.sqrt(D * D + fe * fe);
}
function na(e, a, u) {
  let m = false;
  for (let c = 0, w = u.length - 1; c < u.length; w = c++) {
    const p = u[c].x, x = u[c].y, g = u[w].x, b = u[w].y;
    x > a != b > a && e < (g - p) * (a - x) / (b - x + 1e-12) + p && (m = !m);
  }
  return m;
}
function Ao(e, a = 8) {
  const u = document.createElement("div");
  u.id = "legend", u.style.setProperty("--legend-n", String(a)), setTimeout(() => {
    Y.derive(() => {
      En.val, u.style.background = ys();
    });
  });
  const m = document.createElement("div");
  m.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", u.appendChild(m), setTimeout(() => {
    Y.derive(() => {
      m.textContent = no.val ? `[${no.val}]` : "";
    });
  });
  const c = Array.from({ length: a + 1 }, (g, b) => b / a).reverse();
  let w, p;
  c.forEach((g, b) => {
    w = document.createElement("div"), w.id = `marker-${b}`, w.className = "marker", w.style.marginTop = b == 0 ? "0px" : "calc(var(--legend-h) / var(--legend-n) - 1px)", p = document.createElement("p"), p.id = `marker-text-${b}`, w.append(p), u.append(w);
  });
  const x = [];
  return u.querySelectorAll("p").forEach((g) => x.push(g)), setTimeout(() => {
    Y.derive(() => {
      c.forEach((g, b) => {
        const k = x[b];
        k && (k.innerText = oa(e.val, g).toString());
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
  const w = document.createElement("div"), p = new ds(), x = new ps(45, 1, 0.1, 2 * 1e6), g = new us(-10, 10, 10, -10, -1e3, 2e6);
  let b = x;
  const k = new fs({ antialias: true });
  k.localClippingEnabled = true;
  const v = new Po(x, k.domElement);
  v.enableDamping = true, v.dampingFactor = 0.1, v.screenSpacePanning = true, v.zoomSpeed = 0.8, v.panSpeed = 1.2, v.rotateSpeed = 0.9, v.keyPanSpeed = 12, v.listenToKeyEvents(window), v.touches = { ONE: kn.ROTATE, TWO: kn.DOLLY_PAN }, k.domElement.addEventListener("wheel", (C) => {
    if (!C.ctrlKey && Math.abs(C.deltaX) > Math.abs(C.deltaY) * 1.5) {
      C.preventDefault();
      const N = v.target, B = new M().subVectors(x.position, N), H = new M();
      H.crossVectors(x.up, B).normalize();
      const de = B.length() * 1e-3 * v.panSpeed;
      N.addScaledVector(H, C.deltaX * de), x.position.addScaledVector(H, C.deltaX * de), v.update();
    }
  }, { passive: false });
  const D = new Qn(new M(-1, 0, 0), 0), fe = new Qn(new M(0, -1, 0), 0), oe = new Qn(new M(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function O() {
    const C = window.__hekatanClip, N = [];
    C.enableX && (D.normal.set(C.invertX ? 1 : -1, 0, 0), D.constant = C.invertX ? -C.posX : C.posX, N.push(D)), C.enableY && (fe.normal.set(0, C.invertY ? 1 : -1, 0), fe.constant = C.invertY ? -C.posY : C.posY, N.push(fe)), C.enableZ && (oe.normal.set(0, 0, C.invertZ ? 1 : -1), oe.constant = C.invertZ ? -C.posZ : C.posZ, N.push(oe)), k.clippingPlanes = N, p.traverse((H) => {
      const ne = H;
      if (ne.material) {
        const de = Array.isArray(ne.material) ? ne.material : [ne.material];
        for (const re of de) re.clippingPlanes = N, re.needsUpdate = true;
      }
    });
    const B = window.__hekatanPanes ?? [];
    for (const H of B) try {
      H && typeof H.refresh == "function" && H.refresh();
    } catch {
    }
    k.render(p, b);
  }
  O(), window.__hekatanClipApply = O;
  const z = vs(a), j = Y.derive(() => Math.pow(10, z.displayScale.val / 10)), G = sa(e, z), we = () => {
    const C = [];
    return z.gridXY.rawVal && C.push("xy"), z.gridXZ.rawVal && C.push("xz"), z.gridYZ.rawVal && C.push("yz"), C;
  }, me = () => {
    const C = z.gridStep.rawVal, N = Math.max(C, z.gridMajor.rawVal);
    return { planes: we(), majorStep: N, minorStep: C };
  };
  let I = jn(z.gridSize.rawVal, me());
  I.visible = z.gridVisible.rawVal, window.__hekatanSnap2D = z.cursorSnap.rawVal;
  const L = () => {
    const C = Math.max(0, Math.min(1, z.gridOpacity.rawVal));
    I.traverse((N) => {
      const B = N.material;
      if (!B || !("opacity" in B)) return;
      const H = N.name ?? "";
      let ne = 0.35;
      H.includes("border") ? ne = 1 : H.includes("major") && (ne = 0.75), B.opacity = C * ne;
    });
  };
  L(), w.appendChild(gs(z, e, c)), w.setAttribute("id", "viewer"), w.appendChild(k.domElement), k.setPixelRatio(window.devicePixelRatio);
  const X = en();
  k.setClearColor(X.background, 1);
  const V = z.gridSize.rawVal, F = V * 0.5 + V * 0.5 / Math.tan(45 * 0.5);
  x.position.set(0, 0, F), x.up.set(0, 1, 0), v.target.set(0, 0, 0), v.minDistance = 0.1, v.maxDistance = 1e4, w.__settings = z, v.zoomSpeed = 1, v._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, v.update();
  let $ = Co(z.gridSize.rawVal, z.flipAxes.rawVal);
  p.add(I, $), Y.derive(() => {
    window.__hekatanGridPlaneXY = z.gridXY.val, window.__hekatanGridPlaneXZ = z.gridXZ.val, window.__hekatanGridPlaneYZ = z.gridYZ.val;
  });
  let T = true;
  Y.derive(() => {
    const C = z.gridVisible.val;
    if (T) {
      T = false;
      return;
    }
    I.visible = C, Z();
  });
  let A = true;
  Y.derive(() => {
    if (z.gridOpacity.val, A) {
      A = false;
      return;
    }
    L(), Z();
  }), Y.derive(() => {
    const C = z.cursorSnap.val;
    window.__hekatanSnap2D = C;
  });
  let q = true;
  Y.derive(() => {
    var _a;
    const C = z.gridSize.val, N = z.flipAxes.val;
    if (z.gridXY.val, z.gridXZ.val, z.gridYZ.val, z.gridStep.val, z.gridMajor.val, q) {
      q = false;
      return;
    }
    p.remove(I), (_a = I.traverse) == null ? void 0 : _a.call(I, (ne) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = ne.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = ne.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), I = jn(C, me()), I.visible = z.gridVisible.rawVal, p.add(I), L(), p.remove($), $.traverse((ne) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = ne.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = ne.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), $ = Co(C, N), p.add($);
    const B = C * 0.5 + C * 0.5 / Math.tan(45 * 0.5);
    x.position.distanceTo(v.target), Math.abs(x.position.x) < 0.1 && Math.abs(x.position.y) < 0.1 && x.position.z > 0 ? x.position.set(0, 0, B) : x.position.set(0.5 * C, -B, 0.5 * C), v.target.set(0, 0, 0), v.minDistance = Math.max(0.05, C * 0.01), v.maxDistance = Math.max(50, C * 50), v.update(), Z();
  }), new ResizeObserver((C) => {
    var _a, _b;
    for (const N of C) {
      const B = (_a = N.target) == null ? void 0 : _a.clientWidth, H = (_b = N.target) == null ? void 0 : _b.clientHeight;
      if (B === 0 || H === 0) continue;
      const de = (ee ? B / 2 : B) / H;
      x.aspect = de, x.updateProjectionMatrix();
      const re = g.top;
      if (g.left = -re * de, g.right = re * de, g.updateProjectionMatrix(), Q && Q.isPerspectiveCamera) Q.aspect = de, Q.updateProjectionMatrix();
      else if (Q && Q.isOrthographicCamera) {
        const Me = Q, Pe = Me.top;
        Me.left = -Pe * de, Me.right = Pe * de, Me.updateProjectionMatrix();
      }
      k.setSize(B, H), Z();
    }
  }).observe(w), v.addEventListener("change", Z), Y.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, z.displayScale.val, z.nodes.val, z.elements.val, (_g = z.edges) == null ? void 0 : _g.val, z.elemColumns.val, z.elemBeams.val, z.nodesIndexes.val, z.elementsIndexes.val, z.orientations.val, z.sections.val, z.secColumns.val, z.secBeams.val, z.secFloor.val, z.supports.val, z.loads.val, z.deformedShape.val, z.nodeResults.val, z.frameResults.val, z.shellResults.val, (_h = z.solidResults) == null ? void 0 : _h.val, (_i = z.extruded) == null ? void 0 : _i.val, setTimeout(Z);
  });
  let ee = false, Q = null, E = null, ie = false;
  function Z() {
    const C = w.clientWidth || 1, N = w.clientHeight || 1;
    if (!ee || !Q) {
      k.setScissorTest(false), k.setViewport(0, 0, C, N), k.render(p, b);
      return;
    }
    const B = C / 2;
    k.setScissorTest(true), k.setViewport(0, 0, B, N), k.setScissor(0, 0, B, N), k.render(p, b), k.setViewport(B, 0, B, N), k.setScissor(B, 0, B, N), k.render(p, Q), k.setScissorTest(false);
  }
  function ce(C) {
    b = C, v.object = C, v.update(), Z();
  }
  function pe(C, N) {
    ee = C, N && (Q = N);
    const B = w.clientWidth || 1, H = w.clientHeight || 1, de = (C ? B / 2 : B) / H;
    x.isPerspectiveCamera && (x.aspect = de, x.updateProjectionMatrix());
    const re = g.top;
    if (g.left = -re * de, g.right = re * de, g.updateProjectionMatrix(), C && Q) {
      if (E ? (E.object = Q, E.update()) : (E = new Po(Q, k.domElement), E.enableDamping = true, E.dampingFactor = 0.1, E.screenSpacePanning = true, E.zoomSpeed = 0.8, E.panSpeed = 1.2, E.rotateSpeed = 0.9, E.touches = { ONE: kn.ROTATE, TWO: kn.DOLLY_PAN }, E.target.copy(v.target), E.addEventListener("change", Z), E.enabled = false), !ie) {
        const Me = (Pe) => {
          if (!ee || !E) return;
          const ze = k.domElement.getBoundingClientRect(), $e = Pe.clientX - ze.left, Ie = ze.width / 2, Ne = $e >= Ie;
          v.enabled = !Ne, E.enabled = Ne;
        };
        k.domElement.addEventListener("pointerdown", Me, true), k.domElement.addEventListener("wheel", Me, { capture: true, passive: true }), ie = true;
      }
    } else C || (v.enabled = true, E && (E.enabled = false));
    w.__splitMode = C, window.__hekatanSplitMode = C, window.__hekatanSplitCamera = C ? Q : null, Z();
  }
  if (e) {
    p.add(Ms(z, G, j), ms(e, z, G), Ss(z, G, j), ks(e, z, G, j), bs(e, z, G, j), _s(e, z, G, j), Cs(e, z, G, j), Vs(e, z, G, j), $s(e, z, G), Rs(e, z, G, j), Is(e, z, G, j));
    const C = ea({ scene: p, rendererElm: k.domElement, getActiveCamera: () => b, derivedNodes: G, derivedDisplayScale: j, mesh: e, settings: z, render: Z });
    p.add(C);
    const N = da(e, z), B = Ys(e, z, G, N), H = Ao(N);
    p.add(B), w.appendChild(H);
    const ne = Gs(e, z, G);
    p.add(ne);
    const de = ne.__colorMapValues, re = Ao(de);
    re.id = "frame-legend", w.appendChild(re), Y.derive(() => {
      var _a;
      const Me = z.shellResults.val != "none", Pe = (((_a = z.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", ze = Me || Pe, $e = z.frameResults.val.startsWith("contour:"), Ie = N.val.some((Ne) => Number.isFinite(Ne));
      H.hidden = !ze || !Ie, B.visible = ze, re.hidden = !$e;
    });
  }
  if (c) {
    const C = new Lo(16777215, 0.5);
    p.add(C);
    const N = new An(16777215, 0.5);
    N.position.set(30, 25, -10), N.shadow.mapSize.width = 1024, N.shadow.mapSize.height = 1024, p.add(N);
    const B = 10;
    N.shadow.camera.left = -B, N.shadow.camera.right = B, N.shadow.camera.top = B, N.shadow.camera.bottom = -B, N.shadow.camera.far = 1e3;
    const H = new An(16777215, 0.5);
    H.color.setHSL(11, 43, 96), H.position.set(-10, 0, 30), p.add(H), Y.derive(() => {
      (c == null ? void 0 : c.val.length) && (p.remove(...c.oldVal), p.add(...c.rawVal), Z());
    }), Y.derive(() => {
      c.rawVal.forEach((ne) => ne.visible = z.solids.val), Z();
    });
  }
  if (m) {
    const C = [], N = (H) => {
      var _a;
      return ((_a = H == null ? void 0 : H.userData) == null ? void 0 : _a.isCota) ? z.showCotas.val : z.custom3D.val;
    }, B = () => {
      for (const H of C) H.visible = N(H);
      Z();
    };
    Y.derive(() => {
      const H = m.val;
      C.length && (p.remove(...C), C.length = 0), H.length && (p.add(...H), C.push(...H), B()), Z();
    }), Y.derive(() => {
      z.custom3D.val, B();
    }), Y.derive(() => {
      z.showCotas.val, B();
    });
  }
  u && Xs({ drawingObj: u, gridObj: I, scene: p, getActiveCamera: () => b, controls: v, gridSize: V, derivedDisplayScale: j, rendererElm: k.domElement, viewerRender: Z }), $o((C, N) => {
    var _a;
    k.setClearColor(N.background, 1), p.remove(I), (_a = I.traverse) == null ? void 0 : _a.call(I, (B) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = B.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = B.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), I = jn(z.gridSize.rawVal, { planes: we() }), p.add(I), w.style.setProperty("--awatif-legend-color", N.legendMarker), Z();
  });
  const Ce = { scene: p, perspCamera: x, orthoCamera: g, get camera() {
    return b;
  }, controls: v, renderer: k, rendererElm: k.domElement, render: Z, setActiveCamera: ce, setSplitMode: pe, get splitMode() {
    return ee;
  }, get splitCamera() {
    return Q;
  }, settings: z };
  w.__ctx = Ce;
  const ye = document.createElement("div");
  ye.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const Ae = (C, N, B) => {
    const H = document.createElement("button");
    return H.textContent = C, H.title = N, H.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), H.onmouseenter = () => {
      H.style.background = "rgba(70,70,70,0.9)";
    }, H.onmouseleave = () => {
      H.style.background = "rgba(40,40,40,0.85)";
    }, H.onclick = (ne) => {
      ne.preventDefault(), B();
    }, H;
  }, Ge = (C, N) => {
    const B = v.target, H = new M().subVectors(b.position, B), ne = H.length(), de = new M(), re = new M();
    de.crossVectors(b.up, H).normalize(), re.copy(b.up).normalize();
    const Me = ne * 0.05;
    B.addScaledVector(de, -C * Me), B.addScaledVector(re, N * Me), b.position.addScaledVector(de, -C * Me), b.position.addScaledVector(re, N * Me), v.update(), Z();
  }, lt = (C) => {
    const N = new M().subVectors(b.position, v.target);
    N.multiplyScalar(C), b.position.copy(v.target).add(N), v.update(), Z();
  }, te = () => {
    const C = document.createElement("div");
    return C.style.cssText = "width:32px;height:32px;", C;
  };
  return ye.append(te()), ye.append(Ae("\u2191", "Pan arriba", () => Ge(0, 1))), ye.append(Ae("\u2295", "Zoom in", () => lt(0.85))), ye.append(Ae("\u2190", "Pan izquierda", () => Ge(-1, 0))), ye.append(Ae("\u2302", "Reset vista", () => {
    v.reset(), Z();
  })), ye.append(Ae("\u2192", "Pan derecha", () => Ge(1, 0))), ye.append(Ae("\u2296", "Zoom out", () => lt(1.18))), ye.append(Ae("\u2193", "Pan abajo", () => Ge(0, -1))), ye.append(te()), getComputedStyle(w).position === "static" && (w.style.position = "relative"), w.appendChild(ye), w;
}
function sa(e, a) {
  return Y.derive(() => {
    var _a, _b, _c, _d;
    if (!a.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const u = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], m = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!m || u.length === 0) return u;
    const c = a.deformScale.val, w = a.deformScale.val * a.deformScaleZ.val, p = Number.isFinite(c) ? c : 1, x = Number.isFinite(w) ? w : 1;
    return u.map((g, b) => {
      var _a2;
      const k = ((_a2 = m.get(b)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], v = Number.isFinite(k[0]) ? k[0] : 0, D = Number.isFinite(k[1]) ? k[1] : 0, fe = Number.isFinite(k[2]) ? k[2] : 0;
      return [g[0] + v * p, g[1] + D * p, g[2] + fe * x];
    });
  });
}
const Mn = Y.state(null), no = Y.state(""), aa = Y.state("kN"), ia = Y.state("mm"), la = Y.state("kN/m\xB2"), ra = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, To = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402, ft: 3.280839895 }, ca = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function da(e, a) {
  const u = Y.state([]);
  let m;
  return ((c) => {
    c.bendingXX = "bendingXX", c.bendingYY = "bendingYY", c.bendingXY = "bendingXY", c.membraneXX = "membraneXX", c.membraneYY = "membraneYY", c.membraneXY = "membraneXY", c.tranverseShearX = "tranverseShearX", c.tranverseShearY = "tranverseShearY", c.membranePrincipalMax = "membranePrincipalMax", c.membranePrincipalMin = "membranePrincipalMin", c.bendingPrincipalMax = "bendingPrincipalMax", c.bendingPrincipalMin = "bendingPrincipalMin", c.transverseShearMax = "transverseShearMax", c.vonMises = "vonMises", c.pressure = "pressure", c.displacementX = "displacementX", c.displacementY = "displacementY", c.displacementZ = "displacementZ";
  })(m || (m = {})), Y.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const c = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), oe = (N, B) => {
      N == null ? void 0 : N.forEach((H, ne) => {
        const de = e.elements.val[ne];
        if (de) for (let re = 0; re < de.length; re++) B.set(de[re], [H[re] ?? H[0]]);
      });
    };
    oe((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, c), oe((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, w), oe((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, p), oe((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, x), oe((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, g), oe((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, b), oe((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, k), oe((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, v), oe((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, D), oe((_t = (_s2 = e.analyzeOutputs) == null ? void 0 : _s2.val) == null ? void 0 : _t.pressure, fe);
    const O = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), me = (N, B, H, ne, de) => {
      N.forEach((re, Me) => {
        var _a2, _b2;
        const Pe = re[0] ?? 0, ze = ((_a2 = B.get(Me)) == null ? void 0 : _a2[0]) ?? 0, $e = ((_b2 = H.get(Me)) == null ? void 0 : _b2[0]) ?? 0, Ie = (Pe + ze) / 2, Ne = Math.hypot((Pe - ze) / 2, $e);
        ne.set(Me, [Ie + Ne]), de.set(Me, [Ie - Ne]);
      });
    };
    me(x, g, b, O, z), me(c, w, p, j, G), k.forEach((N, B) => {
      var _a2;
      we.set(B, [Math.hypot(N[0] ?? 0, ((_a2 = v.get(B)) == null ? void 0 : _a2[0]) ?? 0)]);
    });
    const I = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, L = (_w = a.solidResults) == null ? void 0 : _w.val, V = L && L !== "none" ? L : a.shellResults.val, F = I == null ? void 0 : I[V], $ = { bendingXX: [c, 0], bendingYY: [w, 0], bendingXY: [p, 0], membraneXX: [x, 0], membraneYY: [g, 0], membraneXY: [b, 0], tranverseShearX: [k, 0], tranverseShearY: [v, 0], membranePrincipalMax: [O, 0], membranePrincipalMin: [z, 0], bendingPrincipalMax: [j, 0], bendingPrincipalMin: [G, 0], transverseShearMax: [we, 0], vonMises: [D, 0], pressure: [fe, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, T = a.shellResults.val, A = aa.val, q = ia.val, se = T === "displacementX" || T === "displacementY" || T === "displacementZ", ee = T === "bendingXX" || T === "bendingYY" || T === "bendingXY" || T === "bendingPrincipalMax" || T === "bendingPrincipalMin", Q = T === "membraneXX" || T === "membraneYY" || T === "membraneXY" || T === "membranePrincipalMax" || T === "membranePrincipalMin", E = T === "vonMises" || T === "pressure", ie = T === "tranverseShearX" || T === "tranverseShearY" || T === "transverseShearMax", Z = (_D = a.solidResults) == null ? void 0 : _D.val, ce = Z === "vonMises" || Z === "sigmaXX" || Z === "sigmaYY" || Z === "sigmaZZ" || Z === "tauXY" || Z === "tauYZ" || Z === "tauXZ", pe = Z === "ux" || Z === "uy" || Z === "uz", Ce = la.val, ye = ce ? ca[Ce] : pe || se ? To[q] : ee || Q || E || ie ? 1 / ra[A] : 1, Ae = ce ? Ce : pe || se ? q : ee ? `${A}\xB7m/m` : Q ? `${A}/m\xB2` : E ? `${A}/m\xB2` : ie ? `${A}/m` : "";
    no.val = Ae, Mn.val = Array.isArray(F) && F.length === 2 ? [F[0] * ye, F[1] * ye] : null;
    const Ge = Do.val, te = Z && Z !== "none" ? [D, 0] : $[T], C = [];
    if (e.nodes.val.forEach((N, B) => {
      const H = te;
      if (!H || !H[0] || typeof H[0].has != "function") return;
      if (!H[0].has(B)) {
        C.push(Number.NaN);
        return;
      }
      const ne = H[0].get(B), de = ne ? ne[H[1]] ?? 0 : 0;
      C.push(de * ye);
    }), !Mn.val && Ge !== "auto") {
      const N = e.nodes.val, B = /* @__PURE__ */ new Set(), H = (de, re) => {
        var _a2;
        const Me = (_a2 = N[de[0]]) == null ? void 0 : _a2[re];
        return de.every((Pe) => {
          var _a3;
          return Math.abs((((_a3 = N[Pe]) == null ? void 0 : _a3[re]) ?? NaN) - Me) < 1e-6;
        });
      };
      for (const de of e.elements.val) {
        if (de.length !== 4) continue;
        const re = H(de, 2), Me = !re && H(de, 0), Pe = !re && H(de, 1);
        if (Ge === "losas" ? re : Ge === "muros" ? Me || Pe : Ge === "murosX" ? Me : Ge === "murosY" ? Pe : false) for (const Ie of de) B.add(Ie);
      }
      const ne = [];
      for (const de of B) {
        const re = C[de];
        Number.isFinite(re) && ne.push(re);
      }
      ne.length && (Mn.val = so(ne));
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
