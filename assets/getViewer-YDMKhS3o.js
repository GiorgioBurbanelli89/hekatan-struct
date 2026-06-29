import { K as It, a5 as bn, o as Go, v as $, a6 as Wo, D as zt, d as We, B as fe, F as Mt, a7 as qo, w as at, a8 as Jo, a9 as Qo, b as ho, aa as mo, p as jt, ab as zn, ac as Pn, a3 as Fo, Z as je, L as it, h as Dt, t as Vo, g as Oo, ad as jo, i as et, V as m, _ as Ot, ae as Zn, G as Ao, a as vt, y as Cn, af as Fn, r as es, m as ts, H as Wt, a1 as hn, E as wo, f as rn, Q as Un, ag as mn, C as yo, S as xo, c as go, e as vo, J as ns, N as os, U as ss, W as as, T as _n, P as Kn, X as is, Y as Mo, O as ls } from "./theme-Buj43zQ_.js";
import { T as wt, O as bo } from "./Text-BaPYKrWi.js";
import { P as To } from "./tweakpane-BXg6ZhiP.js";
import { e as rs } from "./styles-CsTo04SN.js";
class Eo {
  constructor(i, y = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(i, y);
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
  setColorMap(i, y = 32) {
    this.map = Hn[i] || Hn.rainbow, this.n = y;
    const h = 1 / this.n, d = new It(), _ = new It();
    this.lut.length = 0, this.lut.push(new It(this.map[0][1]));
    for (let x = 1; x < y; x++) {
      const w = x * h;
      for (let v = 0; v < this.map.length - 1; v++) if (w > this.map[v][0] && w <= this.map[v + 1][0]) {
        const z = this.map[v][0], P = this.map[v + 1][0];
        d.setHex(this.map[v][1], bn), _.setHex(this.map[v + 1][1], bn);
        const b = new It().lerpColors(d, _, (w - z) / (P - z));
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
    const y = Math.round(i * this.n);
    return this.lut[y];
  }
  addColorMap(i, y) {
    return Hn[i] = y, this;
  }
  createCanvas() {
    const i = document.createElement("canvas");
    return i.width = 1, i.height = this.n, this.updateCanvas(i), i;
  }
  updateCanvas(i) {
    const y = i.getContext("2d", { alpha: false }), h = y.getImageData(0, 0, 1, this.n), d = h.data;
    let _ = 0;
    const x = 1 / this.n, w = new It(), v = new It(), z = new It();
    for (let P = 1; P >= 0; P -= x) for (let b = this.map.length - 1; b >= 0; b--) if (P < this.map[b][0] && P >= this.map[b - 1][0]) {
      const O = this.map[b - 1][0], ae = this.map[b][0];
      w.setHex(this.map[b - 1][1], bn), v.setHex(this.map[b][1], bn), z.lerpColors(w, v, (P - O) / (ae - O)), d[_ * 4] = Math.round(z.r * 255), d[_ * 4 + 1] = Math.round(z.g * 255), d[_ * 4 + 2] = Math.round(z.b * 255), d[_ * 4 + 3] = 255, _ += 1;
    }
    return y.putImageData(h, 0, 0), i;
  }
}
const Hn = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, $o = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]], cs = { safe: [[0, 224, 13, 107], [0.13, 221, 20, 50], [0.27, 252, 99, 39], [0.4, 254, 161, 47], [0.52, 238, 234, 25], [0.64, 5, 193, 69], [0.78, 7, 178, 244], [0.9, 4, 132, 213], [1, 90, 175, 230]], csi: $o, jet_r: [[0, 200, 0, 0], [0.15, 255, 80, 0], [0.32, 255, 200, 0], [0.48, 180, 255, 0], [0.6, 0, 230, 90], [0.74, 0, 220, 230], [0.88, 0, 110, 255], [1, 0, 0, 180]], jet: [[0, 0, 0, 180], [0.12, 0, 110, 255], [0.26, 0, 220, 230], [0.4, 0, 230, 90], [0.52, 180, 255, 0], [0.68, 255, 200, 0], [0.85, 255, 80, 0], [1, 200, 0, 0]], viridis: [[0, 68, 1, 84], [0.25, 59, 82, 139], [0.5, 33, 145, 140], [0.75, 94, 201, 98], [1, 253, 231, 37]] }, Vn = $.state("safe");
function Io(e) {
  e = Math.max(0, Math.min(1, e));
  const i = cs[Vn.val] ?? $o;
  for (let h = 0; h < i.length - 1; h++) {
    const [d, _, x, w] = i[h], [v, z, P, b] = i[h + 1];
    if (e <= v) {
      const O = (e - d) / (v - d);
      return [_ + (z - _) * O, x + (P - x) * O, w + (b - w) * O];
    }
  }
  const y = i[i.length - 1];
  return [y[1], y[2], y[3]];
}
function _o() {
  const i = new Uint8Array(1024);
  for (let h = 0; h < 256; h++) {
    const d = h / 255, [_, x, w] = Io(d);
    i[h * 4 + 0] = _, i[h * 4 + 1] = x, i[h * 4 + 2] = w, i[h * 4 + 3] = 255;
  }
  const y = new Jo(i, 256, 1, Qo);
  return y.minFilter = ho, y.magFilter = ho, y.wrapS = mo, y.wrapT = mo, y.needsUpdate = true, y;
}
function ds() {
  const i = [];
  for (let y = 0; y <= 12; y++) {
    const h = 1 - y / 12, [d, _, x] = Io(h);
    i.push(`rgb(${d | 0},${_ | 0},${x | 0}) ${(y / 12 * 100).toFixed(0)}%`);
  }
  return `linear-gradient(${i.join(",")})`;
}
function ps(e, i, y) {
  new Eo();
  const h = _o(), d = new Wo({ uniforms: { cmap: { value: h }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: zt, transparent: false, clipping: true, depthWrite: true, depthTest: true });
  $.derive(() => {
    var _a;
    Vn.val;
    const x = d.uniforms.cmap.value;
    d.uniforms.cmap.value = _o(), (_a = x == null ? void 0 : x.dispose) == null ? void 0 : _a.call(x);
  });
  const _ = new We(new fe(), d);
  return _.renderOrder = -1, _.frustumCulled = false, _.userData.isShellArea = true, _.name = "__hekatan_shell_colormap", $.derive(() => {
    _.geometry.setAttribute("position", new Mt(e.val.flat(), 3));
    const x = [];
    for (const k of i.val) k.length === 3 ? x.push(k[0], k[1], k[2]) : k.length === 4 && (x.push(k[0], k[1], k[2]), x.push(k[0], k[2], k[3]));
    _.geometry.setIndex(new qo(x, 1));
    const w = y.val.filter((k) => Number.isFinite(k));
    let v, z;
    const P = jn.val;
    if (P ? (z = P[0], v = P[1]) : (v = w.length ? Math.max(...w) : 1, z = w.length ? Math.min(...w) : 0, z >= 0 && v > 0 && (z = 0)), v === z) {
      const k = Math.max(Math.abs(v) * 1e-6, 1e-9);
      v += k, z -= k;
    }
    const b = P && P[0] > P[1], O = Math.min(z, v), ae = Math.max(z, v), ie = ae - O, ue = new Float32Array(y.val.length);
    for (let k = 0; k < y.val.length; k++) {
      const G = y.val[k];
      if (!Number.isFinite(G)) {
        ue[k] = -1;
        continue;
      }
      const ge = ((b ? ae + O - G : G) - O) / ie;
      ue[k] = Math.max(0, Math.min(1, ge));
    }
    _.geometry.setAttribute("scalar", new at(ue, 1));
  }), _;
}
function us(e, i, y) {
  const h = document.createElement("div"), d = new To({ title: "Settings", expanded: true, container: h });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(d), h.setAttribute("id", "settings");
  const _ = "hk_settingsPos";
  let x = null;
  try {
    const b = localStorage.getItem(_);
    b && (x = JSON.parse(b));
  } catch {
  }
  h.style.cssText = ["position:fixed", x ? `left:${x.left}px` : "left:8px", x ? `top:${x.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const w = () => {
    const b = h.querySelector(".tp-rotv_b");
    if (!b) {
      setTimeout(w, 200);
      return;
    }
    b.style.cursor = "move", b.style.userSelect = "none";
    let O = false, ae = 0, ie = 0, ue = 0, k = 0;
    b.addEventListener("mousedown", (G) => {
      O = true, ae = G.clientX, ie = G.clientY;
      const he = h.getBoundingClientRect();
      ue = he.left, k = he.top, h.style.left = `${ue}px`, h.style.top = `${k}px`;
    }), window.addEventListener("mousemove", (G) => {
      if (!O) return;
      const he = G.clientX - ae, ge = G.clientY - ie, Pe = Math.max(0, Math.min(window.innerWidth - 40, ue + he)), K = Math.max(0, Math.min(window.innerHeight - 40, k + ge));
      h.style.left = `${Pe}px`, h.style.top = `${K}px`;
    }), window.addEventListener("mouseup", () => {
      if (O) {
        O = false;
        try {
          localStorage.setItem(_, JSON.stringify({ left: parseFloat(h.style.left), top: parseFloat(h.style.top) }));
        } catch {
        }
      }
    });
  };
  if (w(), i == null ? void 0 : i.nodes) {
    d.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 0.5 });
    const b = d.addFolder({ title: "\u{1F4D0} Grid", expanded: true });
    b.addBinding(e.gridSize, "val", { label: "Dimensi\xF3n (m)", min: 1, max: 100, step: 1 }), b.addBinding(e.gridStep, "val", { label: "Separaci\xF3n grid (m)", min: 0.05, max: 5, step: 0.05 }), b.addBinding(e.gridMajor, "val", { label: "Separaci\xF3n mayores (m)", min: 0.1, max: 50, step: 0.1 }), b.addBinding(e.cursorSnap, "val", { label: "Paso cursor (m)", min: 0.05, max: 5, step: 0.05 }), b.addBinding(e.gridVisible, "val", { label: "Mostrar" }), b.addBinding(e.gridOpacity, "val", { label: "Opacidad", min: 0, max: 1, step: 0.05 }), b.addBinding(e.gridXY, "val", { label: "Plano XY (planta)" }), b.addBinding(e.gridXZ, "val", { label: "Plano XZ (frontal)" }), b.addBinding(e.gridYZ, "val", { label: "Plano YZ (lateral)" }), d.addBinding(e.nodes, "val", { label: "Nodes" }), d.addBinding(e.elements, "val", { label: "Elements" }), d.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), d.addBinding(e.faces, "val", { label: "  Caras (fill)" }), d.addBinding(e.elemFrames, "val", { label: "  Frames (todos)" }), d.addBinding(e.elemColumns, "val", { label: "    Columnas" }), d.addBinding(e.elemBeams, "val", { label: "    Vigas" }), d.addBinding(e.elemZapatas, "val", { label: "  Zapatas (shells z\u22640)" }), d.addBinding(e.elemLosas, "val", { label: "  Losas (shells z>0)" }), d.addBinding(e.colorByType, "val", { label: "  \u{1F3A8} Color por tipo" }), d.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), d.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), d.addBinding(e.orientations, "val", { label: "Orientations" }), d.addBinding(e.sections, "val", { label: "Sections" }), d.addBinding(e.sectionLabels, "val", { label: "  Sec. Labels (30x50)" }), d.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), d.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), d.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } });
  }
  if ((i == null ? void 0 : i.nodeInputs) || (i == null ? void 0 : i.elementInputs)) {
    const b = d.addFolder({ title: "Analysis Inputs" });
    b.addBinding(e.supports, "val", { label: "Supports" }), b.addBinding(e.loads, "val", { label: "Loads" }), b.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), b.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((i == null ? void 0 : i.deformOutputs) || (i == null ? void 0 : i.analyzeOutputs)) {
    const b = d.addFolder({ title: "Analysis Outputs" });
    window.__hekatanOutputsFolder = b, b.addBinding(e.nodeResults, "val", { options: { none: "none", "U (deformations)": "deformations", "R (reactions)": "reactions" }, label: "Node results" }), b.addBinding(e.frameResults, "val", { options: { none: "none", "Axial Force": "normals", Torsion: "torsions", "Shear 2-2": "shearsY", "Shear 3-3": "shearsZ", "Moment 2-2": "bendingsY", "Moment 3-3": "bendingsZ", "Axial Force (diagram)": "contour:normals", "Shear 2-2 (diagram)": "contour:shearsY", "Shear 3-3 (diagram)": "contour:shearsZ", "Torsion (diagram)": "contour:torsions", "Moment 2-2 (diagram)": "contour:bendingsY", "Moment 3-3 (diagram)": "contour:bendingsZ" }, label: "Frame results" }), b.addBinding(e.shellResults, "val", { options: { none: "none", F11: "membraneXX", F22: "membraneYY", F12: "membraneXY", FMax: "membranePrincipalMax", FMin: "membranePrincipalMin", FVM: "vonMises", V13: "tranverseShearX", V23: "tranverseShearY", VMax: "transverseShearMax", M11: "bendingXX", M22: "bendingYY", M12: "bendingXY", MMax: "bendingPrincipalMax", MMin: "bendingPrincipalMin", "Pressure (suelo)": "pressure", Ux: "displacementX", Uy: "displacementY", Uz: "displacementZ" }, label: "Shell results" }), b.addBinding(Vn, "val", { options: { "SAFE (cimentaci\xF3n)": "safe", "ETABS / CSI (magenta\u2192azul)": "csi", "Jet_r (rojo\u2192azul)": "jet_r", "Jet (azul\u2192rojo)": "jet", Viridis: "viridis" }, label: "\u{1F3A8} Paleta colores" }), b.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), b.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), b.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), b.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  y && d.addBinding(e.solids, "val", { label: "Solids" });
  const v = d.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), z = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), P = () => {
    const b = window.__hekatanClipApply;
    typeof b == "function" && b();
  };
  return v.addBinding(z, "enableX", { label: "Cortar X" }).on("change", P), v.addBinding(z, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", P), v.addBinding(z, "invertX", { label: "  invertir X" }).on("change", P), v.addBinding(z, "enableY", { label: "Cortar Y" }).on("change", P), v.addBinding(z, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", P), v.addBinding(z, "invertY", { label: "  invertir Y" }).on("change", P), v.addBinding(z, "enableZ", { label: "Cortar Z" }).on("change", P), v.addBinding(z, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", P), v.addBinding(z, "invertZ", { label: "  invertir Z" }).on("change", P), h;
}
function fs(e) {
  return { gridSize: $.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: $.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: $.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: $.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: $.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: $.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: $.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: $.state((e == null ? void 0 : e.gridXZ) ?? true), gridYZ: $.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: $.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: $.state((e == null ? void 0 : e.nodes) ?? true), elements: $.state((e == null ? void 0 : e.elements) ?? true), edges: $.state((e == null ? void 0 : e.edges) ?? true), faces: $.state((e == null ? void 0 : e.faces) ?? true), elemColumns: $.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: $.state((e == null ? void 0 : e.elemBeams) ?? true), elemFrames: $.state((e == null ? void 0 : e.elemFrames) ?? true), elemZapatas: $.state((e == null ? void 0 : e.elemZapatas) ?? true), elemLosas: $.state((e == null ? void 0 : e.elemLosas) ?? true), colorByType: $.state((e == null ? void 0 : e.colorByType) ?? false), nodesIndexes: $.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: $.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: $.state((e == null ? void 0 : e.orientations) ?? false), sections: $.state((e == null ? void 0 : e.sections) ?? true), sectionLabels: $.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: $.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: $.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: $.state((e == null ? void 0 : e.secFloor) ?? -1), supports: $.state((e == null ? void 0 : e.supports) ?? true), loads: $.state((e == null ? void 0 : e.loads) ?? false), deformedShape: $.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: $.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: $.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: $.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: $.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: $.state((e == null ? void 0 : e.flipAxes) ?? false), solids: $.state((e == null ? void 0 : e.solids) ?? true), custom3D: $.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: $.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: $.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: $.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function hs(e, i, y) {
  const h = jt(), d = new zn(new fe(), new Pn({ color: h.nodePoint }));
  return Fo((_, x) => {
    d.material.color.setHex(x.nodePoint);
  }), d.frustumCulled = false, $.derive(() => {
    e.nodes.val && d.geometry.setAttribute("position", new Mt(i.val.flat(), 3));
  }), $.derive(() => {
    if (y.val, i.val, !e.nodes.rawVal) return;
    const _ = i.rawVal ?? [];
    let x = e.gridSize.val * 0.5;
    if (_.length >= 2) {
      const v = [1 / 0, 1 / 0, 1 / 0], z = [-1 / 0, -1 / 0, -1 / 0];
      for (const P of _) for (let b = 0; b < 3; b++) v[b] = Math.min(v[b], P[b]), z[b] = Math.max(z[b], P[b]);
      x = Math.max(z[0] - v[0], z[1] - v[1], z[2] - v[2], 0.1);
    }
    const w = 0.03 * x;
    d.material.size = w * y.rawVal;
  }), $.derive(() => {
    d.visible = e.nodes.val;
  }), d;
}
function Gn(e, i) {
  const y = jt(), h = new je();
  h.name = "hekatan-grid";
  const d = (i == null ? void 0 : i.planes) ?? ["xy"];
  let _ = (i == null ? void 0 : i.majorStep) ?? 1, x = (i == null ? void 0 : i.minorStep) ?? 0.1;
  for (_ <= 0 && (_ = 1), x <= 0 && (x = 0.1); e / x > 500; ) x *= 2;
  for (; e / _ > 100; ) _ *= 2;
  const w = e / 2;
  _ = Math.max(x, Math.round(_ / x) * x);
  const z = new It(y.grid), P = new It(y.grid).multiplyScalar(0.45), b = (ae, ie, ue, k) => {
    const G = [], he = ae === "xy" ? (D, I) => [D, I, 0] : ae === "xz" ? (D, I) => [D, 0, I] : (D, I) => [0, D, I], ge = Math.floor(w / ie);
    for (let D = -ge; D <= ge; D++) {
      const I = D * ie, A = he(I, -w), E = he(I, w);
      G.push(...A, ...E);
    }
    for (let D = -ge; D <= ge; D++) {
      const I = D * ie, A = he(-w, I), E = he(w, I);
      G.push(...A, ...E);
    }
    const Pe = new fe();
    Pe.setAttribute("position", new Mt(G, 3));
    const K = new it({ color: ue, transparent: true, opacity: k, depthWrite: false }), Z = new Dt(Pe, K);
    return Z.name = `grid-${ae}-${ie === x ? "minor" : "major"}`, Z;
  }, O = (ae, ie, ue) => {
    const k = ae === "xy" ? (Z, D) => [Z, D, 0] : ae === "xz" ? (Z, D) => [Z, 0, D] : (Z, D) => [0, Z, D], G = [[-w, -w], [w, -w], [w, w], [-w, w]], he = [];
    for (const [Z, D] of G) he.push(...k(Z, D));
    const ge = new fe();
    ge.setAttribute("position", new Mt(he, 3));
    const Pe = new it({ color: ie, transparent: true, opacity: ue, depthWrite: false }), K = new Vo(ge, Pe);
    return K.name = `grid-${ae}-border`, K.renderOrder = 1, K;
  };
  for (const ae of d) h.add(b(ae, x, P, 0.12)), h.add(b(ae, _, z, 0.4)), h.add(O(ae, z, 0.55));
  return h.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: _, minorStep: x, gridSize: e, planes: [...d] }, h;
}
function ms(e, i, y, h) {
  const d = new je(), _ = new Oo(0.5, 0.5, 0.5), x = new jo(0.45, 0.7, 4);
  x.rotateX(Math.PI / 2), x.translate(0, 0, -0.35);
  const w = new et({ color: 10166822 }), v = new et({ color: 2792847 }), z = new et({ color: 3835647 }), P = () => {
    const ae = y.rawVal ?? [];
    if (ae.length < 2) return i.gridSize.val * 0.5;
    let ie = [1 / 0, 1 / 0, 1 / 0], ue = [-1 / 0, -1 / 0, -1 / 0];
    for (const k of ae) for (let G = 0; G < 3; G++) k[G] < ie[G] && (ie[G] = k[G]), k[G] > ue[G] && (ue[G] = k[G]);
    return Math.max(ue[0] - ie[0], ue[1] - ie[1], ue[2] - ie[2], 0.1);
  }, b = () => 0.08 * P(), O = () => h.rawVal;
  return $.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, !i.supports.val) return;
    d.clear();
    const ae = b();
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((ie, ue) => {
      const k = y.val[ue];
      if (!k) return;
      const G = ie ?? [], he = (G[0] ? 1 : 0) + (G[1] ? 1 : 0) + (G[2] ? 1 : 0), ge = (G[3] ? 1 : 0) + (G[4] ? 1 : 0) + (G[5] ? 1 : 0);
      let Pe;
      he >= 3 && ge >= 3 ? Pe = new We(_, w) : he >= 3 && ge === 0 ? Pe = new We(x, v) : Pe = new We(x, z), Pe.position.set(k[0], k[1], k[2]);
      const K = ae * O();
      Pe.scale.set(K, K, K), d.add(Pe);
    });
  }), $.derive(() => {
    if (h.val, !i.supports.rawVal) return;
    const ie = b() * O();
    d.children.forEach((ue) => ue.scale.set(ie, ie, ie));
  }), $.derive(() => {
    d.visible = i.supports.val;
  }), d;
}
function ws(e, i, y, h) {
  const d = new je();
  d.name = "loadsGroup";
  function _(x) {
    if (x.length < 2) return 0.12 * i.gridSize.rawVal;
    const w = [1 / 0, 1 / 0, 1 / 0], v = [-1 / 0, -1 / 0, -1 / 0];
    for (const P of x) for (let b = 0; b < 3; b++) w[b] = Math.min(w[b], P[b]), v[b] = Math.max(v[b], P[b]);
    return 0.08 * Math.max(v[0] - w[0], v[1] - w[1], v[2] - w[2], 0.1);
  }
  return $.derive(() => {
    var _a, _b, _c;
    if (i.deformedShape.val, !i.loads.val) return;
    d.children.forEach((v) => v.dispose()), d.clear();
    const x = y.val, w = _(x);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((v, z) => {
      const P = x[z];
      if (!P) return;
      const b = new m(...v.slice(0, 3));
      if (b.lengthSq() < 1e-30) return;
      b.normalize();
      const O = new Ot(b, new m(...P), 1, 15637248, 0.3, 0.3), ae = w * h.rawVal;
      O.scale.set(ae, ae, ae), d.add(O);
    });
  }), $.derive(() => {
    if (h.val, !i.loads.rawVal) return;
    const w = _(y.rawVal) * h.rawVal;
    d.children.forEach((v) => v.scale.set(w, w, w));
  }), $.derive(() => {
    d.visible = i.loads.val;
  }), d;
}
function ys(e, i, y) {
  const h = new je();
  return $.derive(() => {
    if (!e.nodesIndexes.val) return;
    h.children.forEach((_) => _.dispose()), h.clear();
    const d = 0.05 * e.gridSize.val * 0.6;
    i.val.forEach((_, x) => {
      const w = new wt(`${x}`);
      w.position.set(..._), w.updateScale(d * y.rawVal), h.add(w);
    });
  }), $.derive(() => {
    if (y.val, !e.nodesIndexes.rawVal) return;
    const d = 0.05 * e.gridSize.val * 0.6;
    h.children.forEach((_) => _.updateScale(d * y.rawVal));
  }), $.derive(() => {
    h.visible = e.nodesIndexes.val;
  }), h;
}
function xs(e, i, y, h) {
  const d = new je();
  return $.derive(() => {
    var _a;
    if (i.deformedShape.val, !i.elementsIndexes.val) return;
    d.children.forEach((x) => x.dispose()), d.clear();
    const _ = 0.05 * i.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((x, w) => {
      const v = new wt(`${w}`, void 0, "#001219");
      v.position.set(...gs(x.map((z) => y.rawVal[z]))), v.updateScale(_ * h.rawVal), d.add(v);
    });
  }), $.derive(() => {
    if (h.val, !i.elementsIndexes.rawVal) return;
    const _ = 0.05 * i.gridSize.val * 0.6;
    d.children.forEach((x) => x.updateScale(_ * h.rawVal));
  }), $.derive(() => {
    d.visible = i.elementsIndexes.val;
  }), d;
}
function gs(e) {
  const i = e.reduce((h, d) => [h[0] + d[0], h[1] + d[1], h[2] + d[2]], [0, 0, 0]), y = e.length;
  return [i[0] / y, i[1] / y, i[2] / y];
}
function So(e, i) {
  const y = new je(), h = 0.05 * e * 1, d = jt(), _ = new wt("X", "red", "transparent"), x = new wt(i ? "Z" : "Y", "green", "transparent"), w = new wt(i ? "Y" : "Z", "blue", "transparent"), v = new Ot(new m(1, 0, 0), new m(0, 0, 0), 1, d.axisArrow, 0.2, 0.2), z = new Ot(new m(0, 1, 0), new m(0, 0, 0), 1, d.axisArrow, 0.2, 0.2), P = new Ot(new m(0, 0, 1), new m(0, 0, 0), 1, d.axisArrow, 0.2, 0.2);
  return _.position.set(1.3 * h, 0, 0), x.position.set(0, 1.3 * h, 0), w.position.set(0, 0, 1.3 * h), _.updateScale(0.4 * h), x.updateScale(0.4 * h), w.updateScale(0.4 * h), v.scale.set(h, h, h), z.scale.set(h, h, h), P.scale.set(h, h, h), y.add(v, z, P, _, x, w), y;
}
function Qn(e, i) {
  const y = new m(...e), d = new m(...i).clone().sub(y), _ = d.length(), x = d.dot(new m(1, 0, 0)) / _, w = d.dot(new m(0, 1, 0)) / _, v = d.dot(new m(0, 0, 1)) / _, z = Math.sqrt(x ** 2 + w ** 2);
  let P = new Zn().fromArray([[x, w, v], [-w / z, x / z, 0], [-x * v / z, -w * v / z, z]].flat());
  return v === 1 && (P = new Zn().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), v === -1 && (P = new Zn().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Ao().setFromMatrix3(P);
}
function qn(e, i) {
  return e == null ? void 0 : e.map((y, h) => (9 * y + i[h]) / 10);
}
function wn(e) {
  const i = e.reduce((h, d) => [h[0] + d[0], h[1] + d[1], h[2] + d[2]], [0, 0, 0]), y = e.length;
  return [i[0] / y, i[1] / y, i[2] / y];
}
function vs(e, i, y) {
  const h = wn([i, y]), d = wn([e, y]), _ = wn([e, i]), x = new m(...h).sub(new m(...d)).normalize(), w = new m(...y).sub(new m(..._)).normalize(), v = x.clone().cross(w).normalize(), z = v.clone().cross(x).normalize();
  return new Ao().makeBasis(x, z, v);
}
function Ms(e, i, y, h) {
  const d = new je(), _ = new fe(), x = new it({ vertexColors: true }), w = [0, 0, 0], v = [1, 0, 0], z = [0, 1, 0], P = [0, 0, 1];
  _.setAttribute("position", new Mt([...w, ...v, ...w, ...z, ...w, ...P], 3));
  const b = [255, 0, 0], O = [0, 255, 0], ae = [0, 0, 255];
  return _.setAttribute("color", new Mt([...b, ...b, ...O, ...O, ...ae, ...ae], 3)), $.derive(() => {
    var _a;
    i.deformedShape.val, i.orientations.val && (d.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((ie) => {
      const ue = new Dt(_, x), k = y.rawVal[ie[0]], G = y.rawVal[ie[1]];
      if (ie.length === 2 && (ue.position.set(...qn(k, G)), ue.rotation.setFromRotationMatrix(Qn(k, G))), ie.length === 3) {
        const Pe = y.rawVal[ie[2]];
        ue.position.set(...wn([k, G, Pe])), ue.rotation.setFromRotationMatrix(vs(k, G, Pe));
      }
      const ge = 0.05 * i.gridSize.rawVal * 0.75 * h.rawVal;
      ue.scale.set(ge, ge, ge), d.add(ue);
    }));
  }), $.derive(() => {
    if (h.val, !i.orientations.rawVal) return;
    const ue = 0.05 * i.gridSize.val * 0.75 * h.rawVal;
    d.children.forEach((k) => k.scale.set(ue, ue, ue));
  }), $.derive(() => {
    d.visible = i.orientations.val;
  }), d;
}
function bs(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const i = (e.b * 100).toFixed(0), y = (e.h * 100).toFixed(0);
    return `${i}x${y}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function _s(e, i, y, h) {
  const d = new je(), _ = new je();
  d.add(_);
  function x(Z, D) {
    const I = Z / 2, A = D / 2, E = new Float32Array([0, -I, -A, 0, I, -A, 0, I, A, 0, -I, -A, 0, I, A, 0, -I, A]), B = new fe();
    B.setAttribute("position", new at(E, 3));
    const C = new Float32Array([0, -I, -A, 0, I, -A, 0, I, A, 0, -I, A, 0, -I, -A]), N = new fe();
    return N.setAttribute("position", new at(C, 3)), { fill: B, outline: N };
  }
  function w(Z, D = 24) {
    const I = Z / 2, A = new Float32Array(D * 9);
    for (let N = 0; N < D; N++) {
      const ne = N / D * Math.PI * 2, W = (N + 1) / D * Math.PI * 2;
      A[N * 9] = 0, A[N * 9 + 1] = 0, A[N * 9 + 2] = 0, A[N * 9 + 3] = 0, A[N * 9 + 4] = I * Math.cos(ne), A[N * 9 + 5] = I * Math.sin(ne), A[N * 9 + 6] = 0, A[N * 9 + 7] = I * Math.cos(W), A[N * 9 + 8] = I * Math.sin(W);
    }
    const E = new fe();
    E.setAttribute("position", new at(A, 3));
    const B = new Float32Array((D + 1) * 3);
    for (let N = 0; N <= D; N++) {
      const ne = N / D * Math.PI * 2;
      B[N * 3] = 0, B[N * 3 + 1] = I * Math.cos(ne), B[N * 3 + 2] = I * Math.sin(ne);
    }
    const C = new fe();
    return C.setAttribute("position", new at(B, 3)), { fill: E, outline: C };
  }
  function v(Z, D, I, A) {
    const E = I ?? D * 0.08, B = A ?? Z * 0.07, C = Z / 2, N = D / 2, ne = N - E, W = B / 2, H = [];
    function F(re, Fe, ce, _e) {
      H.push(0, re, Fe, 0, ce, Fe, 0, ce, _e, 0, re, Fe, 0, ce, _e, 0, re, _e);
    }
    F(-C, -N, C, -ne), F(-W, -ne, W, ne), F(-C, ne, C, N);
    const oe = new fe();
    oe.setAttribute("position", new at(new Float32Array(H), 3));
    const te = new Float32Array([0, -C, -N, 0, C, -N, 0, C, -ne, 0, W, -ne, 0, W, ne, 0, C, ne, 0, C, N, 0, -C, N, 0, -C, ne, 0, -W, ne, 0, -W, -ne, 0, -C, -ne, 0, -C, -N]), le = new fe();
    return le.setAttribute("position", new at(te, 3)), { fill: oe, outline: le };
  }
  function z(Z, D, I) {
    const A = Z / 2, E = D / 2, B = A - I, C = E - I, N = [];
    function ne(oe, te, le, re) {
      N.push(0, oe, te, 0, le, te, 0, le, re, 0, oe, te, 0, le, re, 0, oe, re);
    }
    ne(-A, -E, A, -C), ne(-A, C, A, E), ne(-A, -C, -B, C), ne(B, -C, A, C);
    const W = new fe();
    W.setAttribute("position", new at(new Float32Array(N), 3));
    const H = new Float32Array([0, -A, -E, 0, A, -E, 0, A, -E, 0, A, E, 0, A, E, 0, -A, E, 0, -A, E, 0, -A, -E, 0, -B, -C, 0, B, -C, 0, B, -C, 0, B, C, 0, B, C, 0, -B, C, 0, -B, C, 0, -B, -C]), F = new fe();
    return F.setAttribute("position", new at(H, 3)), { fill: W, outline: F };
  }
  function P(Z, D, I) {
    const A = Z / 2, E = D / 2, B = A - I, C = E - I, N = new fe(), ne = new Float32Array([0, -B, -C, 0, B, -C, 0, B, C, 0, -B, -C, 0, B, C, 0, -B, C]);
    N.setAttribute("position", new at(ne, 3));
    const W = [];
    function H(le, re, Fe, ce) {
      W.push(0, le, re, 0, Fe, re, 0, Fe, ce, 0, le, re, 0, Fe, ce, 0, le, ce);
    }
    H(-A, -E, A, -C), H(-A, C, A, E), H(-A, -C, -B, C), H(B, -C, A, C);
    const F = new fe();
    F.setAttribute("position", new at(new Float32Array(W), 3));
    const oe = new Float32Array([0, -A, -E, 0, A, -E, 0, A, -E, 0, A, E, 0, A, E, 0, -A, E, 0, -A, E, 0, -A, -E, 0, -B, -C, 0, B, -C, 0, B, -C, 0, B, C, 0, B, C, 0, -B, C, 0, -B, C, 0, -B, -C]), te = new fe();
    return te.setAttribute("position", new at(oe, 3)), { concFill: N, steelFillGeom: F, outline: te };
  }
  function b(Z, D, I) {
    const A = [], E = [[0, -Z / 2, -D / 2], [0, -Z / 2 + I, -D / 2], [0, -Z / 2 + I, D / 2 - I], [0, Z / 2, D / 2 - I], [0, Z / 2, D / 2], [0, -Z / 2, D / 2]], B = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const W of B) A.push(...E[W]);
    const C = new fe();
    C.setAttribute("position", new at(new Float32Array(A), 3));
    const N = [];
    for (let W = 0; W < E.length; W++) {
      const H = (W + 1) % E.length;
      N.push(...E[W], ...E[H]);
    }
    const ne = new fe();
    return ne.setAttribute("position", new at(new Float32Array(N), 3)), { fill: C, outline: ne };
  }
  function O(Z, D, I, A) {
    const E = A / 2, B = [], C = [[0, -Z - E, -D / 2], [0, -I - E, -D / 2], [0, -I - E, D / 2 - I], [0, -E, D / 2 - I], [0, -E, D / 2], [0, -Z - E, D / 2]], N = [[0, E, -D / 2], [0, E + I, -D / 2], [0, E + I, D / 2 - I], [0, Z + E, D / 2 - I], [0, Z + E, D / 2], [0, E, D / 2]], ne = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const oe of ne) B.push(...C[oe]);
    for (const oe of ne) B.push(...N[oe]);
    const W = new fe();
    W.setAttribute("position", new at(new Float32Array(B), 3));
    const H = [];
    for (const oe of [C, N]) for (let te = 0; te < oe.length; te++) {
      const le = (te + 1) % oe.length;
      H.push(...oe[te], ...oe[le]);
    }
    const F = new fe();
    return F.setAttribute("position", new at(new Float32Array(H), 3)), { fill: W, outline: F };
  }
  function ae(Z, D, I, A) {
    const E = D / 2, B = Z, C = [[0, -B, -E], [0, -B, -E + I], [0, -A, -E + I], [0, -A, E - I], [0, -B, E - I], [0, -B, E], [0, 0, E], [0, 0, -E]], N = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], ne = [];
    for (const oe of N) ne.push(...C[oe]);
    const W = new fe();
    W.setAttribute("position", new at(new Float32Array(ne), 3));
    const H = [];
    for (let oe = 0; oe < C.length; oe++) {
      const te = (oe + 1) % C.length;
      H.push(...C[oe], ...C[te]);
    }
    const F = new fe();
    return F.setAttribute("position", new at(new Float32Array(H), 3)), { fill: W, outline: F };
  }
  function ie(Z, D, I, A, E) {
    const B = D / 2, C = E / 2, N = [], ne = [[0, -Z, -B], [0, -Z, -B + I], [0, -C - A, -B + I], [0, -C - A, B - I], [0, -Z, B - I], [0, -Z, B], [0, -C, B], [0, -C, -B]], W = ne.map((le) => [le[0], -le[1], le[2]]), H = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const le of H) N.push(...ne[le]);
    for (const le of H) N.push(...W[le]);
    const F = new fe();
    F.setAttribute("position", new at(new Float32Array(N), 3));
    const oe = [];
    for (const le of [ne, W]) for (let re = 0; re < le.length; re++) {
      const Fe = (re + 1) % le.length;
      oe.push(...le[re], ...le[Fe]);
    }
    const te = new fe();
    return te.setAttribute("position", new at(new Float32Array(oe), 3)), { fill: F, outline: te };
  }
  function ue(Z, D, I, A) {
    const E = Z / 2, B = D / 2, C = A / 2, N = [[0, -C, -B], [0, C, -B], [0, C, B - I], [0, E, B - I], [0, E, B], [0, -E, B], [0, -E, B - I], [0, -C, B - I]], ne = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], W = [];
    for (const te of ne) W.push(...N[te]);
    const H = new fe();
    H.setAttribute("position", new at(new Float32Array(W), 3));
    const F = [];
    for (let te = 0; te < N.length; te++) {
      const le = (te + 1) % N.length;
      F.push(...N[te], ...N[le]);
    }
    const oe = new fe();
    return oe.setAttribute("position", new at(new Float32Array(F), 3)), { fill: H, outline: oe };
  }
  function k(Z, D, I = 24) {
    const A = Z / 2, E = A - D, B = [];
    for (let W = 0; W < I; W++) {
      const H = W / I * Math.PI * 2, F = (W + 1) / I * Math.PI * 2, oe = Math.cos(H), te = Math.sin(H), le = Math.cos(F), re = Math.sin(F);
      B.push(0, A * oe, A * te, 0, A * le, A * re, 0, E * le, E * re), B.push(0, A * oe, A * te, 0, E * le, E * re, 0, E * oe, E * te);
    }
    const C = new fe();
    C.setAttribute("position", new at(new Float32Array(B), 3));
    const N = [];
    for (let W = 0; W < I; W++) {
      const H = W / I * Math.PI * 2, F = (W + 1) / I * Math.PI * 2;
      N.push(0, A * Math.cos(H), A * Math.sin(H), 0, A * Math.cos(F), A * Math.sin(F)), N.push(0, E * Math.cos(H), E * Math.sin(H), 0, E * Math.cos(F), E * Math.sin(F));
    }
    const ne = new fe();
    return ne.setAttribute("position", new at(new Float32Array(N), 3)), { fill: C, outline: ne };
  }
  const G = new et({ color: 52479, transparent: true, opacity: 0.35, side: zt, depthWrite: false }), he = new it({ color: 52479 }), ge = new et({ color: 16750848, transparent: true, opacity: 0.4, side: zt, depthWrite: false }), Pe = new it({ color: 16750848 });
  function K(Z, D) {
    const I = Math.abs(D[0] - Z[0]), A = Math.abs(D[1] - Z[1]), E = Math.abs(D[2] - Z[2]);
    return E > I && E > A || A > I && A > E;
  }
  return $.derive(() => {
    var _a, _b;
    i.deformedShape.val, i.secColumns.val, i.secBeams.val, i.secFloor.val;
    const Z = i.secColumns.rawVal, D = i.secBeams.rawVal;
    if (!Z && !D) {
      d.children.forEach((C) => {
        C instanceof wt && C.dispose();
      }), d.clear();
      return;
    }
    d.children.forEach((C) => {
      C instanceof wt && C.dispose();
    }), d.clear();
    const I = (_a = e.elements) == null ? void 0 : _a.val, A = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!I || !A) return;
    const E = A.sectionShapes, B = i.secFloor.rawVal;
    I.forEach((C, N) => {
      if (C.length !== 2) return;
      const ne = y.rawVal[C[0]], W = y.rawVal[C[1]];
      if (!ne || !W) return;
      const H = K(ne, W);
      if (H && !Z || !H && !D) return;
      if (B >= 0) {
        const re = Math.min(ne[1], W[1]);
        Math.max(ne[1], W[1]);
        const Fe = i.gridSize.rawVal || 3;
        if (Math.floor(re / Fe + 0.01) !== B) return;
      }
      const F = E == null ? void 0 : E.get(N);
      if (!F) return;
      const oe = [(ne[0] + W[0]) / 2, (ne[1] + W[1]) / 2, (ne[2] + W[2]) / 2], te = Qn(ne, W);
      if (F.type === "CFT") {
        const re = P(F.b, F.h, F.tw ?? F.b * 0.05), Fe = new We(re.concFill, G);
        Fe.position.set(...oe), Fe.rotation.setFromRotationMatrix(te), d.add(Fe);
        const ce = new We(re.steelFillGeom, ge);
        ce.position.set(...oe), ce.rotation.setFromRotationMatrix(te), d.add(ce);
        const _e = new vt(re.outline, Pe);
        _e.position.set(...oe), _e.rotation.setFromRotationMatrix(te), d.add(_e);
      } else {
        let re, Fe, ce;
        switch (F.type) {
          case "rect":
            re = x(F.b, F.h), Fe = G, ce = he;
            break;
          case "circ":
            re = w(F.d), Fe = G, ce = he;
            break;
          case "I":
            re = v(F.b, F.h, F.tf, F.tw), Fe = ge, ce = Pe;
            break;
          case "HSS":
            re = z(F.b, F.h, F.tw ?? F.b * 0.05), Fe = ge, ce = Pe;
            break;
          case "CFT":
            re = P(F.b, F.h, F.tw ?? F.b * 0.05), Fe = ge, ce = Pe;
            break;
          case "L":
            re = b(F.b ?? F.h, F.h, F.t ?? F.tw ?? 3e-3), Fe = ge, ce = Pe;
            break;
          case "2L":
            re = O(F.b ?? F.h, F.h, F.t ?? F.tw ?? 3e-3, F.dis ?? 0.01), Fe = ge, ce = Pe;
            break;
          case "C":
          case "coldC":
            re = ae(F.b, F.h, F.tf ?? F.t ?? 3e-3, F.tw ?? F.t ?? 3e-3), Fe = ge, ce = Pe;
            break;
          case "2C":
            re = ie(F.b, F.h, F.tf ?? 5e-3, F.tw ?? 5e-3, F.dis ?? 0.01), Fe = ge, ce = Pe;
            break;
          case "T":
            re = ue(F.b, F.h, F.tf ?? 0.01, F.tw ?? 6e-3), Fe = ge, ce = Pe;
            break;
          case "pipe":
            re = k(F.d, F.tw ?? F.d * 0.05), Fe = ge, ce = Pe;
            break;
          default:
            return;
        }
        const _e = new We(re.fill, Fe);
        _e.position.set(...oe), _e.rotation.setFromRotationMatrix(te), d.add(_e);
        const Ze = new vt(re.outline, ce);
        Ze.position.set(...oe), Ze.rotation.setFromRotationMatrix(te), d.add(Ze);
      }
      const le = bs(F);
      if (le) {
        const Fe = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(F.type) ? "#ff9900" : "#00ccff", ce = new wt(le, Fe, "transparent");
        ce.position.set(oe[0], oe[1], oe[2]);
        const _e = 0.05 * i.gridSize.rawVal * 0.5;
        ce.updateScale(_e * ((h == null ? void 0 : h.rawVal) ?? 1)), _.add(ce);
      }
    });
  }), h && $.derive(() => {
    if (h.val, !i.sections.rawVal) return;
    const Z = 0.05 * i.gridSize.val * 0.5;
    _.children.forEach((D) => {
      D instanceof wt && D.updateScale(Z * h.rawVal);
    });
  }), $.derive(() => {
    d.visible = i.sections.val;
  }), $.derive(() => {
    _.visible = i.sectionLabels.val;
  }), d;
}
class Sn extends je {
  constructor(i, y, h, d, _, x, w) {
    super();
    const v = new Cn().moveTo(0, 0).lineTo(0, x[1]).lineTo(h, x[1]).lineTo(h, 0).lineTo(0, 0), z = v.getPoints(), P = new fe().setFromPoints(z);
    this.lines = new vt(P, new it({ color: jt().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(d), w && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const b = new Fn(v), O = new et({ color: x[1] > 0 ? 24435 : 11411474, side: zt });
    this.mesh = new We(b, O), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(d), w && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new wt(`${_[1].toFixed(4)}`), this.normalizedResult = x, this.textPosition = wn([i, y]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(d), this.add(this.text);
  }
  updateScale(i) {
    this.lines.scale.set(1, i * 2, 1), this.mesh.scale.set(1, i * 2, 1), this.text.updateScale(i * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * i);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class ko extends je {
  constructor(i, y, h, d, _, x, w) {
    super();
    const v = _[0] * h / (_[0] + _[1]), z = _[0] * _[1] > 0;
    if (this.text = new wt(`${_[0].toFixed(4)}`), this.text2 = new wt(`${(_[1] * -1).toFixed(4)}`), this.normalizedResult = x, this.textPosition = qn(i, y), this.text2Position = qn(y, i), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(d), this.text2.rotation.setFromRotationMatrix(d), this.add(this.text, this.text2), z) {
      const P = new Cn().moveTo(0, 0).lineTo(0, x[0]).lineTo(v, 0).lineTo(0, 0), b = new Cn().moveTo(v, 0).lineTo(h, -x[1]).lineTo(h, 0).lineTo(v, 0), O = P.getPoints(), ae = b.getPoints(), ie = new fe().setFromPoints(O), ue = new fe().setFromPoints(ae), k = new it({ color: jt().resultOutline });
      this.lines = new vt(ie, k), this.lines2 = new vt(ue, k), this.lines.position.set(...i), this.lines2.position.set(...i), this.lines.rotation.setFromRotationMatrix(d), this.lines2.rotation.setFromRotationMatrix(d), w && this.lines.rotateX(Math.PI / 2), w && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const G = new Fn(P), he = new Fn(b), ge = new et({ color: x[0] > 0 ? 24435 : 11411474, side: zt }), Pe = new et({ color: -x[1] > 0 ? 24435 : 11411474, side: zt });
      this.mesh = new We(G, ge), this.mesh2 = new We(he, Pe), this.mesh.position.set(...i), this.mesh2.position.set(...i), this.mesh.rotation.setFromRotationMatrix(d), this.mesh2.rotation.setFromRotationMatrix(d), w && this.mesh.rotateX(Math.PI / 2), w && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const P = new Cn().moveTo(0, 0).lineTo(0, x[0]).lineTo(h, -x[1]).lineTo(h, 0).lineTo(0, 0), b = P.getPoints(), O = new fe().setFromPoints(b);
      this.lines = new vt(O, new it({ color: jt().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(d), w && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const ae = new Fn(P), ie = new et({ color: x[0] > 0 ? 24435 : 11411474, side: zt });
      this.mesh = new We(ae, ie), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(d), w && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
function Ss(e, i, y, h) {
  const d = new je(), _ = { normals: Sn, shearsY: Sn, shearsZ: Sn, torsions: Sn, bendingsY: ko, bendingsZ: ko };
  return $.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, y.val, i.frameResults.val == "none") return;
    d.children.forEach((w) => w.dispose()), d.clear();
    const x = Lo[i.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[x]) == null ? void 0 : _b.forEach((w, v) => {
      var _a2, _b2;
      const z = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[v]) ?? [0, 1], P = y.rawVal[z[0]], b = y.rawVal[z[1]], O = new m(...b).distanceTo(new m(...P)), ae = ks((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[x]), ie = w == null ? void 0 : w.map((he) => he / (ae === 0 ? 1 : ae)), ue = Qn(P, b), k = new _[x](P, b, O, ue, w ?? [0, 0], ie ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(x)), G = 0.05 * i.gridSize.rawVal;
      k.updateScale(G * h.rawVal), d.add(k);
    });
  }), $.derive(() => {
    if (h.val, i.frameResults.rawVal == "none") return;
    const x = 0.05 * i.gridSize.val;
    d.children.forEach((w) => w.updateScale(x * h.rawVal));
  }), $.derive(() => {
    d.visible = i.frameResults.val != "none";
  }), d;
}
function ks(e) {
  let i = 0;
  return e == null ? void 0 : e.forEach((y) => {
    const h = Math.max(...y ?? [0, 0]);
    h > i && (i = h);
  }), i;
}
class zs extends je {
  constructor(i, y, h) {
    super();
    const d = y === On.reactions;
    h[0] && (this.xText1 = new wt(`${d ? "Fx" : "Dx"}: ` + h[0].toFixed(4))), h[3] && (this.xText2 = new wt(`${d ? "Mx" : "Rx"}: ` + h[3].toFixed(4))), h[1] && (this.yText1 = new wt(`${d ? "Fy" : "Dy"}: ` + h[1].toFixed(4))), h[4] && (this.yText2 = new wt(`${d ? "My" : "Ry"}: ` + h[4].toFixed(4))), h[2] && (this.zText1 = new wt(`${d ? "Fz" : "Dz"}: ` + h[2].toFixed(4))), h[5] && (this.zText2 = new wt(`${d ? "Mz" : "Rz"}: ` + h[5].toFixed(4))), (h[0] || h[3]) && (this.xArrow = new Ot(new m(1, 0, 0), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), (h[1] || h[4]) && (this.yArrow = new Ot(new m(0, 1, 0), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), (h[2] || h[5]) && (this.zArrow = new Ot(new m(0, 0, 1), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...i), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
var On = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(On || {});
function Ps(e, i, y, h) {
  const d = new je();
  return $.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, i.nodeResults.val == "none") return;
    d.children.forEach((w) => w.dispose()), d.clear();
    const _ = On[i.nodeResults.rawVal], x = 0.05 * i.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[_]) == null ? void 0 : _b.forEach((w, v) => {
      const z = new zs(y.rawVal[v], _, w ?? [0, 0, 0, 0, 0, 0]);
      z.updateScale(x * h.rawVal), d.add(z);
    });
  }), $.derive(() => {
    if (h.val, i.nodeResults.rawVal == "none") return;
    const _ = 0.05 * i.gridSize.val;
    d.children.forEach((x) => x.updateScale(_ * h.rawVal));
  }), $.derive(() => {
    d.visible = i.nodeResults.val != "none";
  }), d;
}
function Cs({ drawingObj: e, gridObj: i, scene: y, getActiveCamera: h, controls: d, gridSize: _, derivedDisplayScale: x, rendererElm: w, viewerRender: v }) {
  const z = new es(), P = new ts(), b = (n) => {
    const o = w.getBoundingClientRect(), a = n.clientX - o.left, t = n.clientY - o.top, r = o.width || 1, s = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const u = r / 2;
      if (a >= u) return P.x = (a - u) / u * 2 - 1, P.y = -(t / s) * 2 + 1, window.__hekatanSplitCamera ?? h();
      P.x = a / u * 2 - 1;
    } else P.x = a / r * 2 - 1;
    return P.y = -(t / s) * 2 + 1, h();
  }, O = new We(new Wt(1e4, 1e4), new et({ side: zt, transparent: true, opacity: 0, depthWrite: false }));
  O.visible = true, O.frustumCulled = false, y.add(O);
  const ae = (n, o, a) => {
    const t = new We(new Wt(1e4, 1e4), new et({ side: zt, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, a), t.visible = false, t.frustumCulled = false, y.add(t), t;
  }, ie = ae(Math.PI / 2, 0, 0), ue = ae(0, Math.PI / 2, 0);
  let k = false;
  const G = () => {
    if (k) return z.intersectObjects([O], false);
    if (ie.visible = !!window.__hekatanGridPlaneXZ, ue.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanOrthoRaycast === true && De.visible) {
      const a = z.intersectObjects([De, Be, Ge], false);
      if (a.length > 0) return a;
    }
    const o = [O];
    return ie.visible && o.push(ie), ue.visible && o.push(ue), Tt.visible && Ht.length > 0 && o.push(...Ht), z.intersectObjects(o, false);
  }, he = new zn(new fe(), new Pn()), ge = new zn(new fe(), new Pn({ color: "gray", sizeAttenuation: false, size: 6 })), Pe = new zn(new fe(), new Pn({ color: "orange", size: 0.1 }));
  y.add(Pe);
  const K = document.createElement("input");
  K.id = "hk-rubber-label", K.type = "text", K.spellcheck = false, K.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, K.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none", "pointer-events:none"].join(";") + ";", document.body.appendChild(K);
  let Z = null, D = null, I = false;
  const A = new m(), E = (n, o, a, t, r, s) => {
    const l = t - n, u = r - o, p = s - a, g = Math.hypot(l, u, p);
    if (g < 0.01) {
      K.style.display = "none";
      return;
    }
    Z = [n, o, a], D = [l / g, u / g, p / g], A.set((n + t) / 2, (o + r) / 2, (a + s) / 2), A.project(h());
    const M = w.getBoundingClientRect(), c = M.left + (A.x * 0.5 + 0.5) * M.width, f = M.top + (-A.y * 0.5 + 0.5) * M.height;
    if (K.style.left = c + "px", K.style.top = f + "px", K.style.display = "block", !I) {
      if (K.value = `${g.toFixed(2)} m`, document.activeElement !== K) {
        const S = document.activeElement;
        S && (S.tagName === "INPUT" || S.tagName === "TEXTAREA") && S !== K || K.focus({ preventScroll: true });
      }
      try {
        K.select();
      } catch {
      }
    }
  }, B = () => {
    K.style.display = "none", Z = null, D = null, I = false, document.activeElement === K && K.blur();
  }, C = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      xt = n, se(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), K.blur();
      return;
    }
    if (!Z || !D || !e.polylines) return;
    let a = D[0], t = D[1], r = D[2];
    Ee === "x" ? (a = Math.sign(a) || 1, t = 0, r = 0) : Ee === "y" ? (a = 0, t = Math.sign(t) || 1, r = 0) : Ee === "z" && (a = 0, t = 0, r = Math.sign(r) || 1);
    const s = Z[0] + a * n, l = Z[1] + t * n, u = Z[2] + r * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [s, l, u]];
    const p = e.polylines.rawVal, g = p.length ? p[p.length - 1] : [];
    e.polylines.val = [...p.slice(0, -1), [...g, e.points.rawVal.length - 1]], K.blur();
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
        const [s, l, u] = r;
        return { kind: "relSpherical", L: s, az: l, el: u };
      }
      return null;
    }
    if (o.includes(",")) {
      const r = o.split(",").map((p) => parseFloat(p.trim()));
      if (r.some(isNaN)) return null;
      const [s, l, u = 0] = r;
      return a ? { kind: "relCart", dx: s, dy: l, dz: u } : { kind: "absCart", x: s, y: l, z: u };
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
  }, W = (n) => {
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
  window.__hekatanTypeCoord = (n) => {
    var _a, _b, _c, _d;
    const o = N(n);
    if (!o) return false;
    if (o.kind === "length") return C(o.L), true;
    const a = ne(o);
    if (!a) return false;
    if (W(a), ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "area" && e.polylines) {
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
  }, K.addEventListener("keydown", (n) => {
    if (n.key === "Enter") {
      n.preventDefault();
      const a = N(K.value);
      if (!a) return;
      if (I = false, a.kind === "length") C(a.L), se(`\u270F DDE ${a.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = ne(a);
        if (!t) return;
        W(t);
        const r = a.kind;
        se(`\u270F ${r} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
      }
      return;
    }
    if (n.key === "Escape") {
      n.preventDefault(), I = false, K.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!I && K.style.display === "block") try {
          K.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && (I = true);
  }), window.addEventListener("keydown", (n) => {
    if (!Z || !D || document.activeElement === K) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (K.value = n.key, K.focus(), K.setSelectionRange(1, 1), n.preventDefault());
  });
  const H = document.createElement("div");
  H.id = "hk-coord-readout", H.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", H.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(H);
  const F = document.createElement("div");
  F.id = "hk-coord-fixed", F.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", F.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(F);
  const oe = new vt(new fe().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new hn({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  oe.frustumCulled = false, oe.visible = false, y.add(oe);
  const te = new vt(new fe(), new it({ color: 2282478, transparent: true, opacity: 0.9 }));
  te.frustumCulled = false, te.visible = false, y.add(te);
  let le = [];
  const re = new je(), Fe = new We(new Wt(1, 1), new et({ color: 2282478, transparent: true, opacity: 0.08, side: zt, depthWrite: false })), ce = new Dt(new wo(new Wt(1, 1)), new it({ color: 2282478, transparent: true, opacity: 0.85 })), _e = new Dt(new fe(), new it({ color: 2282478, transparent: true, opacity: 0.3 })), Ze = (n, o) => {
    const a = [], t = Math.ceil(n / o);
    for (let r = -t; r <= t; r++) {
      const s = r * o;
      a.push(-n, s, 0, n, s, 0), a.push(s, -n, 0, s, n, 0);
    }
    _e.geometry.dispose(), _e.geometry = new fe(), _e.geometry.setAttribute("position", new Mt(a, 3));
  };
  re.add(Fe, ce, _e), re.visible = false, re.frustumCulled = false, y.add(re);
  const j = new je();
  j.frustumCulled = false, j.visible = false, y.add(j);
  const Me = (n) => {
    const o = new fe().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), a = new hn({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new vt(o, a);
  }, V = Me(16711680), X = Me(65280), J = Me(35071);
  j.add(V, X, J);
  const q = (n) => {
    const o = new fe().setFromPoints([new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0)]), a = new it({ color: n, transparent: true, opacity: 0.2, depthTest: false }), t = new Vo(o, a);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, we = q(3462041), de = q(16724804), ze = q(6333946), me = new je();
  me.frustumCulled = false, me.visible = false, y.add(me), me.add(we, de, ze);
  const tt = (n) => {
    const o = new Wt(1, 1), a = new et({ color: n, transparent: true, opacity: 0.06, side: zt, depthWrite: false }), t = new We(o, a);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, De = tt(3462041), Be = tt(16724804), Ge = tt(6333946);
  me.add(De, Be, Ge);
  const Ce = (n, o, a, t) => {
    n.scale.set(2 * t, 2 * t, 1), a === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : a === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, Ke = document.createElement("div");
  Ke.id = "hk-refplane-badge", Ke.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(Ke), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, me.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0], l = window.__hekatanOrthoExt ?? 8;
      Ft(we, s, "xy", l), Ft(de, s, "xz", l), Ft(ze, s, "yz", l), Ce(De, s, "xy", l), Ce(Be, s, "xz", l), Ce(Ge, s, "yz", l), De.material.opacity = 0.05, Be.material.opacity = 0.05, Ge.material.opacity = 0.05;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    v();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !me.visible) {
      v();
      return;
    }
    const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0];
    Ft(we, s, "xy", n), Ft(de, s, "xz", n), Ft(ze, s, "yz", n), Ce(De, s, "xy", n), Ce(Be, s, "xz", n), Ce(Ge, s, "yz", n), v();
  };
  const ot = (n) => {
    if (De.material.opacity = n === "xy" ? 0.09 : 0.025, Be.material.opacity = n === "xz" ? 0.09 : 0.025, Ge.material.opacity = n === "yz" ? 0.09 : 0.025, n) {
      const r = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      Ke.style.background = r.bg, Ke.style.color = r.text, Ke.textContent = `\u25A6 Plano ${n.toUpperCase()}`, Ke.style.display = "block";
    } else Ke.style.display = "none";
  }, Ft = (n, o, a, t) => {
    let r;
    a === "xy" ? r = [new m(o[0] - t, o[1] - t, o[2]), new m(o[0] + t, o[1] - t, o[2]), new m(o[0] + t, o[1] + t, o[2]), new m(o[0] - t, o[1] + t, o[2]), new m(o[0] - t, o[1] - t, o[2])] : a === "xz" ? r = [new m(o[0] - t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] - t)] : r = [new m(o[0], o[1] - t, o[2] - t), new m(o[0], o[1] + t, o[2] - t), new m(o[0], o[1] + t, o[2] + t), new m(o[0], o[1] - t, o[2] + t), new m(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(r);
  };
  let Ee = null;
  window.__hekatanAxisLock = () => Ee;
  let Lt = null;
  const qe = document.createElement("div");
  qe.id = "hk-axis-lock-badge", qe.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "padding:4px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(20px,18px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(qe);
  const Ye = () => {
    if (!Ee) {
      qe.style.display = "none";
      return;
    }
    const n = { x: "#ff3344", y: "#34d399", z: "#60a5fa" };
    qe.style.background = "rgba(15,23,42,0.92)", qe.style.color = n[Ee], qe.style.border = `1.5px solid ${n[Ee]}`, qe.textContent = `\u{1F512} LOCK ${Ee.toUpperCase()}`, qe.style.display = "block";
  };
  window.addEventListener("keydown", (n) => {
    var _a, _b, _c, _d;
    const o = document.activeElement;
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== K) return;
    const a = n.key.toLowerCase(), t = (_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool;
    if (n.key === "Enter" && t === "polyarea" && le.length >= 3) {
      const r = tn();
      se(`\u2713 \xC1rea libre mallada \u2014 ${r} shells Q4 creados.`), n.preventDefault();
      return;
    }
    if (a === "x" || a === "y" || a === "z") Ee = Ee === a ? null : a, Ye(), n.preventDefault();
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
  const Ae = new m(), be = new m(), Ne = new m(), Se = (n) => {
    if (!Ee) return null;
    const o = n[0], a = n[1], t = n[2];
    return Ee === "x" ? (Ae.set(o - 1e4, a, t), be.set(o + 1e4, a, t)) : Ee === "y" ? (Ae.set(o, a - 1e4, t), be.set(o, a + 1e4, t)) : (Ae.set(o, a, t - 1e4), be.set(o, a, t + 1e4)), z.ray.distanceSqToSegment(Ae, be, null, Ne), Ne;
  };
  window.__hekatanProjectOnAxis = Se;
  const Ie = new vt(new fe().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new it({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  Ie.renderOrder = 998, Ie.frustumCulled = false, Ie.visible = false, y.add(Ie);
  let Ue = -1, pt = -1, $e = -1;
  const ve = /* @__PURE__ */ new Set();
  window.__hekatanSelection = ve;
  const nt = new vt(new fe().setFromPoints([new m(), new m()]), new it({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  nt.renderOrder = 997, nt.frustumCulled = false, nt.visible = false, y.add(nt);
  const Je = new We(new rn(0.02, 12, 12), new et({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  Je.renderOrder = 998, Je.visible = false, y.add(Je);
  const Bt = (n) => {
    const o = h();
    if (o.isOrthographicCamera) {
      const t = o, r = (t.top - t.bottom) / t.zoom;
      return Math.max(0.05, r * 6e-3);
    }
    const a = o.position.distanceTo(n);
    return Math.max(0.05, a / 10);
  }, Xt = () => {
    Je.visible && Je.scale.setScalar(Bt(Je.position));
  }, lt = new je();
  lt.frustumCulled = false, y.add(lt);
  const ct = 2282478;
  let bt = null;
  const yn = (n, o, a, t) => {
    if (!e.points) return -1;
    const r = e.points.rawVal;
    let s = -1, l = t;
    for (let u = 0; u < r.length; u++) {
      const p = r[u];
      if (!p) continue;
      const g = Math.hypot(n - p[0], o - p[1], a - p[2]);
      g < l && (l = g, s = u);
    }
    return s;
  }, Rt = () => {
    var _a, _b, _c, _d, _e2, _f, _g;
    for (; lt.children.length; ) {
      const l = lt.children.pop();
      (_b = (_a = l.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = l.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const l of ve) {
      const [u, ...p] = l.split(":");
      if (u === "pt") {
        const g = n[+p[0]];
        if (!g) continue;
        const M = new We(new rn(0.025, 12, 12), new et({ color: ct, transparent: true, opacity: 0.9, depthTest: false }));
        M.position.set(g[0], g[1], g[2]), M.renderOrder = 999, M.__isSelectionPt = true, lt.add(M);
      } else if (u === "seg") {
        const g = o[+p[0]], M = n[g == null ? void 0 : g[+p[1]]], c = n[g == null ? void 0 : g[+p[1] + 1]];
        if (!M || !c) continue;
        const f = new fe().setFromPoints([new m(M[0], M[1], M[2]), new m(c[0], c[1], c[2])]), S = new vt(f, new it({ color: ct, transparent: true, opacity: 0.95, depthTest: false }));
        S.renderOrder = 999, lt.add(S);
      } else if (u === "poly") {
        const M = o[+p[0]].map((S) => {
          const L = n[S];
          return L ? new m(L[0], L[1], L[2]) : null;
        }).filter(Boolean);
        if (M.length < 2) continue;
        const c = new fe().setFromPoints(M), f = new vt(c, new it({ color: ct, transparent: true, opacity: 0.95, depthTest: false }));
        f.renderOrder = 999, lt.add(f);
      } else if (u === "aux") {
        const g = t[+p[0]];
        if (!g || g.length !== 6) continue;
        const M = new fe().setFromPoints([new m(g[0], g[1], g[2]), new m(g[3], g[4], g[5])]), c = new vt(M, new it({ color: ct, transparent: true, opacity: 0.95, depthTest: false }));
        c.renderOrder = 999, lt.add(c);
      }
    }
    const r = window.__hekatanUpdateSelectionPtScale;
    r && r();
    const s = window.__hekatanRefreshPropsPane;
    s && s(), v();
  };
  window.__hekatanRefreshSelection = Rt, window.__hekatanClearSelection = () => {
    ve.clear(), Rt();
  };
  const qt = (n, o, a, t, r, s, l, u, p) => {
    const g = l - t, M = u - r, c = p - s, f = g * g + M * M + c * c;
    if (f < 1e-12) return Math.hypot(n - t, o - r, a - s);
    let S = ((n - t) * g + (o - r) * M + (a - s) * c) / f;
    S = Math.max(0, Math.min(1, S));
    const L = t + S * g, R = r + S * M, U = s + S * c;
    return Math.hypot(n - L, o - R, a - U);
  }, Kt = (n, o, a, t) => {
    if (!e.polylines) return null;
    const r = e.polylines.rawVal, s = e.points.rawVal;
    let l = -1, u = -1, p = t;
    for (let g = 0; g < r.length; g++) {
      const M = r[g];
      for (let c = 0; c < M.length - 1; c++) {
        const f = s[M[c]], S = s[M[c + 1]];
        if (!f || !S) continue;
        const L = qt(n, o, a, f[0], f[1], f[2], S[0], S[1], S[2]);
        L < p && (p = L, l = g, u = c);
      }
    }
    return l >= 0 ? { polyIdx: l, segIdx: u, dist: p } : null;
  }, xn = (n, o, a, t) => {
    const r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? (r == null ? void 0 : r.val) ?? r ?? [];
    let l = -1, u = t;
    for (let p = 0; p < s.length; p++) {
      const g = s[p];
      if (!g || g.length !== 6) continue;
      const M = qt(n, o, a, g[0], g[1], g[2], g[3], g[4], g[5]);
      M < u && (u = M, l = p);
    }
    return l;
  }, An = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      Ie.visible = false;
      return;
    }
    Ie.geometry.setFromPoints([new m(t[0], t[1], t[2]), new m(t[3], t[4], t[5])]), Ie.visible = true;
  }, Tn = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const a = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!a || a.length < 2) {
      Ie.visible = false;
      return;
    }
    const r = ((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false, s = [];
    if (r || o < 0 || o >= a.length - 1) for (const l of a) {
      const u = t[l];
      u && s.push(new m(u[0], u[1], u[2]));
    }
    else {
      const l = t[a[o]], u = t[a[o + 1]];
      l && s.push(new m(l[0], l[1], l[2])), u && s.push(new m(u[0], u[1], u[2]));
    }
    Ie.geometry.setFromPoints(s), Ie.visible = true;
  }, en = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const a = o.filter((p, g) => g !== n), t = /* @__PURE__ */ new Set();
    for (const p of a) for (const g of p) t.add(g);
    const r = e.points.rawVal, s = /* @__PURE__ */ new Map(), l = [];
    for (let p = 0; p < r.length; p++) t.has(p) && (s.set(p, l.length), l.push(r[p]));
    const u = a.map((p) => p.map((g) => s.get(g)).filter((g) => g !== void 0));
    e.points.val = l, e.polylines.val = u, e.areas && (e.areas.val = e.areas.rawVal.filter((p) => p !== n).map((p) => p > n ? p - 1 : p)), Ie.visible = false, Ue = -1, pt = -1;
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
      en(n);
      return;
    }
    const r = a[n];
    if (o < 0 || o >= r.length - 1) return;
    if (r.length === 2) {
      en(n);
      return;
    }
    let s;
    o === 0 ? s = [r.slice(1)] : o === r.length - 2 ? s = [r.slice(0, -1)] : s = [r.slice(0, o + 1), r.slice(o + 1)];
    const l = [...a.slice(0, n), ...s, ...a.slice(n + 1)], u = /* @__PURE__ */ new Set();
    for (const f of l) for (const S of f) u.add(S);
    const p = e.points.rawVal, g = /* @__PURE__ */ new Map(), M = [];
    for (let f = 0; f < p.length; f++) u.has(f) && (g.set(f, M.length), M.push(p[f]));
    const c = l.map((f) => f.map((S) => g.get(S)).filter((S) => S !== void 0));
    if (e.points.val = M, e.polylines.val = c, e.areas) {
      const f = s.length - 1;
      e.areas.val = e.areas.rawVal.map((S) => S > n ? S + f : S);
    }
    Ie.visible = false, Ue = -1, pt = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  he.geometry.setAttribute("position", new Mt(e.points.rawVal.flat(), 3)), he.geometry.computeBoundingSphere(), he.frustumCulled = false, ge.frustumCulled = false, y.add(ge), O.position.set(0, 0, 0), O.rotateX(Math.PI / 2), O.geometry.rotateX(Math.PI / 2), O.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, a) => {
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
    const l = Math.max(4, Math.round(r)), u = e.points.rawVal.length, p = [];
    for (let g = 0; g < l; g++) {
      const M = 2 * Math.PI * g / l, c = t * Math.cos(M), f = t * Math.sin(M);
      let S;
      s === "xy" ? S = [n + c, o + f, a] : s === "xz" ? S = [n + c, o, a + f] : S = [n, o + c, a + f], p.push(S);
    }
    if (e.points.val = [...e.points.rawVal, ...p], e.polylines) {
      const g = [...p.map((c, f) => u + f), u], M = e.polylines.rawVal;
      ((_a = M[M.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...M, g, []] : e.polylines.val = [...M.slice(0, -1), g, []];
    }
  }, window.__hekatanDrawArc = (n, o, a, t = window.__hekatanArcSegs ?? 12) => {
    const r = Math.max(4, Math.round(t)), s = new m(...n), l = new m(...o), u = new m(...a), p = new m().subVectors(l, s), g = new m().subVectors(u, s), M = new m().crossVectors(p, g).normalize(), c = new m().addVectors(s, l).multiplyScalar(0.5), f = new m().addVectors(l, u).multiplyScalar(0.5), S = new m().crossVectors(p, M).normalize(), L = new m().crossVectors(new m().subVectors(u, l), M).normalize(), R = new m().subVectors(f, c), U = S.x * L.y - S.y * L.x;
    let T;
    if (Math.abs(U) > 1e-9) {
      const Xe = (R.x * L.y - R.y * L.x) / U;
      T = new m().addVectors(c, S.clone().multiplyScalar(Xe));
    } else T = c.clone();
    const Q = s.distanceTo(T), ee = new m().subVectors(s, T), pe = new m().subVectors(u, T), Le = Math.acos(Math.max(-1, Math.min(1, ee.dot(pe) / (Q * Q)))), ye = e.points.rawVal.length, xe = [], ft = M.clone();
    for (let Xe = 0; Xe <= r; Xe++) {
      const Ve = Xe / r, He = Le * Ve, st = new Un().setFromAxisAngle(ft, He), ht = ee.clone().applyQuaternion(st).add(T);
      xe.push([ht.x, ht.y, ht.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...xe], e.polylines) {
      const Xe = xe.map((He, st) => ye + st), Ve = e.polylines.rawVal;
      e.polylines.val = [...Ve.slice(0, -1), Xe, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, a = 1, t = 6, r = 6) => {
    const s = Math.min(n[0], o[0]), l = Math.max(n[0], o[0]), u = Math.min(n[1], o[1]), p = Math.max(n[1], o[1]), g = (n[2] + o[2]) / 2, M = l - s, c = p - u, f = Math.min(a, M / 2 - 0.01, c / 2 - 0.01);
    if (f <= 0) return;
    const S = e.points.rawVal.length, L = [], R = [], U = (T, Q) => {
      L.push([T, Q, g]), R.push(S + L.length - 1);
    };
    for (let T = 0; T <= r; T++) U(s + f + (M - 2 * f) * T / r, u);
    for (let T = 1; T <= t; T++) {
      const Q = -Math.PI / 2 + Math.PI / 2 * T / t;
      U(l - f + f * Math.cos(Q), u + f + f * Math.sin(Q));
    }
    for (let T = 1; T <= r; T++) U(l, u + f + (c - 2 * f) * T / r);
    for (let T = 1; T <= t; T++) {
      const Q = 0 + Math.PI / 2 * T / t;
      U(l - f + f * Math.cos(Q), p - f + f * Math.sin(Q));
    }
    for (let T = 1; T <= r; T++) U(l - f - (M - 2 * f) * T / r, p);
    for (let T = 1; T <= t; T++) {
      const Q = Math.PI / 2 + Math.PI / 2 * T / t;
      U(s + f + f * Math.cos(Q), p - f + f * Math.sin(Q));
    }
    for (let T = 1; T <= r; T++) U(s, p - f - (c - 2 * f) * T / r);
    for (let T = 1; T <= t; T++) {
      const Q = Math.PI + Math.PI / 2 * T / t;
      U(s + f + f * Math.cos(Q), u + f + f * Math.sin(Q));
    }
    if (R.push(S), e.points.val = [...e.points.rawVal, ...L], e.polylines) {
      const T = e.polylines.rawVal;
      e.polylines.val = [...T.slice(0, -1), R, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const a = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], u = o[1], p = o[2];
    let g;
    if (Math.abs(s - p) < 1e-6 ? g = [[t, r, s], [l, r, s], [l, u, s], [t, u, s]] : Math.abs(r - u) < 1e-6 ? g = [[t, r, s], [l, r, s], [l, r, p], [t, r, p]] : g = [[t, r, s], [t, u, s], [t, u, p], [t, r, p]], e.points.val = [...e.points.rawVal, ...g], e.polylines) {
      const M = [a, a + 1, a + 2, a + 3, a], c = e.polylines.rawVal;
      e.polylines.val = [...c.slice(0, -1), M, []];
    }
  }, window.__hekatanDrawRectArea = (n, o) => {
    var _a;
    const a = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], u = o[1], p = o[2];
    let g;
    if (k && e.gridTarget) {
      const M = e.gridTarget.rawVal, c = new mn(...M.rotation), f = new m(1, 0, 0).applyEuler(c), S = new m(0, 1, 0).applyEuler(c), L = new m(...M.position), R = new m(t, r, s), U = new m(l, u, p), T = R.clone().sub(L).dot(f), Q = R.clone().sub(L).dot(S), ee = U.clone().sub(L).dot(f), pe = U.clone().sub(L).dot(S), Le = (ye, xe) => L.clone().addScaledVector(f, ye).addScaledVector(S, xe).toArray();
      g = [Le(T, Q), Le(ee, Q), Le(ee, pe), Le(T, pe)];
    } else Math.abs(s - p) < 1e-6 ? g = [[t, r, s], [l, r, s], [l, u, s], [t, u, s]] : Math.abs(r - u) < 1e-6 ? g = [[t, r, s], [l, r, s], [l, r, p], [t, r, p]] : g = [[t, r, s], [t, u, s], [t, u, p], [t, r, p]];
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
    for (let ke = 0; ke < a; ke++) {
      const Re = n[ke], Oe = n[(ke + 1) % a];
      t += (Re[1] - Oe[1]) * (Re[2] + Oe[2]), r += (Re[2] - Oe[2]) * (Re[0] + Oe[0]), s += (Re[0] - Oe[0]) * (Re[1] + Oe[1]);
    }
    const l = Math.hypot(t, r, s) || 1;
    t /= l, r /= l, s /= l;
    let u = n[1][0] - n[0][0], p = n[1][1] - n[0][1], g = n[1][2] - n[0][2];
    const M = Math.hypot(u, p, g) || 1;
    u /= M, p /= M, g /= M;
    let c = r * g - s * p, f = s * u - t * g, S = t * p - r * u;
    const L = Math.hypot(c, f, S) || 1;
    c /= L, f /= L, S /= L;
    const R = n[0], U = (ke) => [(ke[0] - R[0]) * u + (ke[1] - R[1]) * p + (ke[2] - R[2]) * g, (ke[0] - R[0]) * c + (ke[1] - R[1]) * f + (ke[2] - R[2]) * S], T = (ke, Re) => [R[0] + ke * u + Re * c, R[1] + ke * p + Re * f, R[2] + ke * g + Re * S], Q = n.map(U);
    let ee = 1 / 0, pe = -1 / 0, Le = 1 / 0, ye = -1 / 0;
    for (const [ke, Re] of Q) ke < ee && (ee = ke), ke > pe && (pe = ke), Re < Le && (Le = Re), Re > ye && (ye = Re);
    const xe = pe - ee, ft = ye - Le;
    if (xe < 1e-6 || ft < 1e-6) return 0;
    let Xe = o && o > 0 ? o : 0.5;
    for (; xe / Xe * (ft / Xe) > 2500; ) Xe *= 2;
    Xe = Math.min(Xe, Math.min(xe, ft));
    const Ve = (ke, Re) => {
      let Oe = false;
      for (let At = 0, Ut = Q.length - 1; At < Q.length; Ut = At++) {
        const [an, un] = Q[At], [ln, fn] = Q[Ut];
        un > Re != fn > Re && ke < (ln - an) * (Re - un) / (fn - un) + an && (Oe = !Oe);
      }
      return Oe;
    }, He = Math.max(1, Math.round(xe / Xe)), st = Math.max(1, Math.round(ft / Xe)), ht = xe / He, St = ft / st, Zt = /* @__PURE__ */ new Map(), $t = [], mt = e.points.rawVal.length, Vt = (ke, Re) => {
      const Oe = ke + "," + Re, At = Zt.get(Oe);
      if (At !== void 0) return At;
      const Ut = mt + $t.length;
      return $t.push(T(ee + ke * ht, Le + Re * St)), Zt.set(Oe, Ut), Ut;
    }, gt = [];
    for (let ke = 0; ke < He; ke++) for (let Re = 0; Re < st; Re++) {
      if (!Ve(ee + (ke + 0.5) * ht, Le + (Re + 0.5) * St)) continue;
      const Oe = Vt(ke, Re), At = Vt(ke + 1, Re), Ut = Vt(ke + 1, Re + 1), an = Vt(ke, Re + 1);
      gt.push([Oe, At, Ut, an]);
    }
    if (!gt.length) return 0;
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...$t], e.polylines && e.areas) {
      let ke = e.polylines.rawVal.slice();
      ke.length && ke[ke.length - 1].length === 0 && (ke = ke.slice(0, -1));
      const Re = [];
      for (const Oe of gt) Re.push(ke.length), ke.push([Oe[0], Oe[1], Oe[2], Oe[3], Oe[0]]);
      ke.push([]), e.polylines.val = ke, e.areas.val = [...e.areas.rawVal, ...Re];
    }
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    return v(), gt.length;
  };
  const tn = () => {
    if (le.length < 3) return le = [], te.visible = false, v(), 0;
    const n = window.__hekatanMeshPolyArea(le.slice());
    return le = [], te.visible = false, v(), n;
  };
  window.__hekatanFinalizePolyArea = tn, window.__hekatanSetInclinedPlaneFrom3 = (n, o, a) => {
    var _a;
    const t = new m(n[0], n[1], n[2]), r = new m(o[0], o[1], o[2]), s = new m(a[0], a[1], a[2]), l = new m().subVectors(r, t).cross(new m().subVectors(s, t));
    if (l.lengthSq() < 1e-9) return false;
    l.normalize();
    const u = new Un().setFromUnitVectors(new m(0, 0, 1), l), p = new mn().setFromQuaternion(u);
    e.gridTarget && (e.gridTarget.val = { position: [t.x, t.y, t.z], rotation: [p.x, p.y, p.z] }), k = true;
    const g = new m().addVectors(t, r).add(s).multiplyScalar(1 / 3), M = Math.max(t.distanceTo(r), t.distanceTo(s), r.distanceTo(s)) * 2.2 + 4, c = M / 2;
    Fe.geometry.dispose(), Fe.geometry = new Wt(M, M), ce.geometry.dispose(), ce.geometry = new wo(new Wt(M, M)), Ze(c, 1), re.position.copy(g), re.quaternion.copy(u), re.scale.set(1, 1, 1), re.visible = true;
    try {
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
    } catch {
    }
    return v(), true;
  }, window.__hekatanResetPlaneXY = () => {
    e.gridTarget && (e.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, 0] }), k = false, re.visible = false, v();
  };
  const Pt = new je();
  Pt.visible = false, y.add(Pt), window.__hekatanShowAxes = (n, o, a = 12, t = 2) => {
    var _a, _b;
    for (; Pt.children.length; ) {
      const M = Pt.children.pop();
      (_a = M.geometry) == null ? void 0 : _a.dispose(), (_b = M.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const r = Math.min(...o) - t, s = Math.max(...o) + t, l = Math.min(...n) - t, u = Math.max(...n) + t, p = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", g = (M, c, f, S, L) => {
      const R = document.createElement("canvas");
      R.width = 64, R.height = 32;
      const U = R.getContext("2d");
      U.fillStyle = L, U.font = "bold 22px sans-serif", U.textAlign = "center", U.fillText(M, 32, 26);
      const T = new yo(R), Q = new xo({ map: T, transparent: true }), ee = new go(Q);
      return ee.position.set(c, f, S), ee.scale.set(1.2, 0.6, 1), ee;
    };
    n.forEach((M, c) => {
      const f = c < p.length ? p[c] : `X${c}`, S = new fe().setFromPoints([new m(M, r, 0), new m(M, s, 0), new m(M, r, 0), new m(M, r, a)]), L = new hn({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), R = new Dt(S, L);
      R.computeLineDistances(), Pt.add(R), Pt.add(g(f, M, r - 0.5, 0, "#60a5fa")), Pt.add(g(f, M, s + 0.5, 0, "#60a5fa"));
    }), o.forEach((M, c) => {
      const f = `${c + 1}`, S = new fe().setFromPoints([new m(l, M, 0), new m(u, M, 0), new m(l, M, 0), new m(l, M, a)]), L = new hn({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), R = new Dt(S, L);
      R.computeLineDistances(), Pt.add(R), Pt.add(g(f, l - 0.5, M, 0, "#fb7185")), Pt.add(g(f, u + 0.5, M, 0, "#fb7185"));
    }), Pt.visible = true, v();
  }, window.__hekatanHideAxes = () => {
    Pt.visible = false, v();
  };
  const Tt = new je();
  Tt.visible = false, y.add(Tt);
  let Ht = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, a = 0, t = 0) => {
    var _a, _b;
    for (; Tt.children.length; ) {
      const s = Tt.children.pop();
      (_a = s.geometry) == null ? void 0 : _a.dispose(), (_b = s.material) == null ? void 0 : _b.dispose();
    }
    Ht.forEach((s) => {
      y.remove(s), s.geometry.dispose(), s.material.dispose();
    }), Ht = [];
    const r = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((s, l) => {
      const u = r[l % r.length], p = o / 2, g = [new m(a - p, t - p, s), new m(a + p, t - p, s), new m(a + p, t + p, s), new m(a - p, t + p, s), new m(a - p, t - p, s)], M = new fe().setFromPoints(g), c = new it({ color: u, transparent: true, opacity: 0.55 });
      Tt.add(new vt(M, c));
      const f = document.createElement("canvas");
      f.width = 128, f.height = 32;
      const S = f.getContext("2d");
      S.fillStyle = `#${u.toString(16).padStart(6, "0")}`, S.font = "bold 18px sans-serif", S.fillText(`Z = ${s} m`, 4, 22);
      const L = new yo(f), R = new xo({ map: L, transparent: true }), U = new go(R);
      U.position.set(a - p - 1.5, t - p - 1.5, s), U.scale.set(2.5, 0.6, 1), Tt.add(U);
      const T = new Wt(1e4, 1e4), Q = new et({ visible: false, side: zt }), ee = new We(T, Q);
      ee.position.set(0, 0, s), ee.frustumCulled = false, ee.userData = { refPlaneZ: s }, y.add(ee), Ht.push(ee);
    }), Tt.visible = true, v();
  }, window.__hekatanHideRefPlanes = () => {
    Tt.visible = false, Ht.forEach((n) => {
      n.visible = false;
    }), v();
  };
  const Jt = new je();
  Jt.frustumCulled = false, y.add(Jt);
  const gn = () => {
    var _a, _b, _c, _d;
    for (; Jt.children.length; ) {
      const a = Jt.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (a.length !== 6) continue;
      const t = new fe().setFromPoints([new m(a[0], a[1], a[2]), new m(a[3], a[4], a[5])]), r = new hn({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), s = new vt(t, r);
      s.computeLineDistances(), Jt.add(s);
    }
  };
  $.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, gn(), v());
  });
  const Yt = new je();
  Yt.frustumCulled = false, y.add(Yt);
  const eo = () => {
    var _a, _b, _c, _d;
    for (; Yt.children.length; ) {
      const a = Yt.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxPoints, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (!a || a.length !== 3) continue;
      const t = new We(new rn(0.025, 12, 12), new et({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(a[0], a[1], a[2]), t.renderOrder = 996, t.scale.setScalar(Bt(t.position)), Yt.add(t);
    }
  };
  $.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, eo(), v());
  }), d.addEventListener("change", () => {
    Yt.children.forEach((n) => {
      n.scale.setScalar(Bt(n.position));
    });
  }), window.__hekatanRenderAuxPoints = eo;
  const ut = new je(), Bo = new We(new rn(0.01, 12, 12), new et({ color: 16724804, transparent: true, opacity: 0.95 })), Ro = new We(new rn(0.015, 12, 12), new et({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  ut.add(Bo, Ro);
  const nn = 0.08, $n = (n, o, a) => {
    const t = new fe().setFromPoints([new m(...n), new m(...o)]);
    return new vt(t, new it({ color: a, transparent: true, opacity: 0.7 }));
  };
  ut.add($n([-nn, 0, 0], [nn, 0, 0], 16711680)), ut.add($n([0, -nn, 0], [0, nn, 0], 65280)), ut.add($n([0, 0, -nn], [0, 0, nn], 35071)), ut.visible = false, ut.frustumCulled = false, y.add(ut);
  const to = 40, Xo = 2.5, In = () => {
    if (!ut.visible) return;
    const o = h().position.distanceTo(ut.position), a = Math.max(0.05, Math.min(Xo, o / to));
    ut.scale.setScalar(a);
  }, no = () => {
    lt.children.length !== 0 && lt.children.forEach((n) => {
      if (!n.__isSelectionPt) return;
      const o = n;
      o.scale.setScalar(Bt(o.position));
    });
  };
  window.__hekatanUpdateSelectionPtScale = no, d.addEventListener("change", () => {
    In(), Je.visible && Xt();
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = h().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / to));
    }
    no();
  }), window.__hekatanShowSnap = (n, o, a) => {
    ut.position.set(n, o, a), ut.visible = true, In(), v();
  }, window.__hekatanHideSnap = () => {
    ut.visible = false, v();
  }, w.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q;
    const o = b(n);
    if (!o) return;
    z.setFromCamera(P, o);
    const a = G();
    if (a.length) {
      const t = a[0].point, r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, r);
      if (s) io(s.type, s.x, s.y, s.z), ut.position.set(s.x, s.y, s.z), ut.visible = true, t.set(s.x, s.y, s.z);
      else {
        Rn();
        const M = window.__hekatanSnapEnabled !== false, c = window.__hekatanSnap2D ?? 0.5;
        M && c > 0 && (t.x = Math.round(t.x / c) * c, t.y = Math.round(t.y / c) * c, t.z = Math.round(t.z / c) * c), ut.position.copy(t), ut.visible = true;
      }
      In();
      const l = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (l === "select" || !l) {
        const M = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = yn(t.x, t.y, t.z, M), f = Kt(t.x, t.y, t.z, M), S = xn(t.x, t.y, t.z, M);
        if (c >= 0) {
          const T = e.points.rawVal[c];
          Je.position.set(T[0], T[1], T[2]), Je.visible = true, Xt(), nt.visible = false, bt = { kind: "pt", a: c };
        } else if (f) {
          const T = e.points.rawVal, Q = e.polylines.rawVal[f.polyIdx], ee = T[Q[f.segIdx]], pe = T[Q[f.segIdx + 1]];
          nt.geometry.setFromPoints([new m(ee[0], ee[1], ee[2]), new m(pe[0], pe[1], pe[2])]), nt.visible = true, Je.visible = false, bt = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(f.polyIdx)) ?? false ? { kind: "poly", a: f.polyIdx } : { kind: "seg", a: f.polyIdx, b: f.segIdx };
        } else if (S >= 0) {
          const Q = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[S];
          Q && (nt.geometry.setFromPoints([new m(Q[0], Q[1], Q[2]), new m(Q[3], Q[4], Q[5])]), nt.visible = true, Je.visible = false, bt = { kind: "aux", a: S });
        } else nt.visible = false, Je.visible = false, bt = null;
        H.style.left = n.clientX + "px", H.style.top = n.clientY + "px", H.style.display = "block";
        let L = t;
        if ((bt == null ? void 0 : bt.kind) === "pt") {
          const T = e.points.rawVal[bt.a];
          T && (L = new m(T[0], T[1], T[2]));
        }
        const R = `X=${L.x.toFixed(2)} Y=${L.y.toFixed(2)} Z=${L.z.toFixed(2)}`;
        if (bt) {
          const T = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          H.textContent = `${R}  \xB7  \u{1F5B1} Click \u2192 ${T[bt.kind]}`;
        } else H.textContent = R;
        const U = document.getElementById("hk-coord-fixed");
        U && (U.textContent = R), oe.visible = false, j.visible = false, v();
        return;
      }
      if (l === "delete") {
        const M = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = Kt(t.x, t.y, t.z, M), f = xn(t.x, t.y, t.z, M);
        let S = false;
        if (f >= 0) if (!c) S = true;
        else {
          const T = window.__hekatanDrawingAuxLines, ee = ((T == null ? void 0 : T.rawVal) ?? (T == null ? void 0 : T.val) ?? T ?? [])[f];
          qt(t.x, t.y, t.z, ee[0], ee[1], ee[2], ee[3], ee[4], ee[5]) < c.dist && (S = true);
        }
        S ? ($e = f, Ue = -1, pt = -1, An(f)) : c ? (Ue = c.polyIdx, pt = c.segIdx, $e = -1, Tn(c.polyIdx, c.segIdx)) : (Ue = -1, pt = -1, $e = -1, Ie.visible = false), oe.visible = false, j.visible = false, B(), H.style.left = n.clientX + "px", H.style.top = n.clientY + "px", H.style.display = "block";
        const L = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let R = "";
        S ? R = `\u{1F5D1} l\xEDnea aux #${$e + 1}` : c ? R = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(c.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${c.polyIdx + 1}` : `\u{1F5D1} seg ${c.segIdx + 1} / poly #${c.polyIdx + 1}` : R = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", H.textContent = `${L}  \xB7  ${R}`;
        const U = document.getElementById("hk-coord-fixed");
        U && (U.textContent = L), v();
        return;
      } else Ie.visible = false, Ue = -1, $e = -1;
      H.style.left = n.clientX + "px", H.style.top = n.clientY + "px", H.style.display = "block";
      const u = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], p = u[u.length - 1] ?? [], g = e.points.rawVal ?? [];
      if (p.length > 0 && g[p[p.length - 1]]) {
        const M = p[p.length - 1], c = g[M];
        let f = Ee;
        if (Lt = null, !f && window.__hekatanAxisSnap !== false) {
          const Ve = w.getBoundingClientRect(), He = n.clientX, st = n.clientY, ht = ((_k = settings.gridSize) == null ? void 0 : _k.rawVal) ?? 10, St = new m(c[0], c[1], c[2]), Zt = [["x", new m(1, 0, 0)], ["y", new m(0, 1, 0)], ["z", new m(0, 0, 1)]], $t = (Vt) => {
            const gt = Vt.clone().project(o);
            return { x: (gt.x * 0.5 + 0.5) * Ve.width + Ve.left, y: (-gt.y * 0.5 + 0.5) * Ve.height + Ve.top };
          };
          let mt = null;
          for (const [Vt, gt] of Zt) {
            const ke = $t(St.clone().addScaledVector(gt, -ht)), Re = $t(St.clone().addScaledVector(gt, ht)), Oe = Re.x - ke.x, At = Re.y - ke.y, Ut = He - ke.x, an = st - ke.y, un = Oe * Oe + At * At || 1;
            let ln = (Ut * Oe + an * At) / un;
            ln = Math.max(0, Math.min(1, ln));
            const fn = Math.hypot(He - (ke.x + ln * Oe), st - (ke.y + ln * At));
            if (mt === null || fn < mt.dpx) {
              const Yn = z.ray, po = St.clone().sub(Yn.origin), Nn = gt.dot(Yn.direction), uo = gt.dot(po), Ko = Yn.direction.dot(po), fo = 1 - Nn * Nn, Ho = Math.abs(fo) < 1e-6 ? -uo : (Nn * Ko - uo) / fo;
              mt = { axis: Vt, dpx: fn, pt: St.clone().addScaledVector(gt, Ho) };
            }
          }
          mt && mt.dpx <= 12 && (t.copy(mt.pt), f = mt.axis, Lt = mt.pt.clone());
        }
        const S = !!window.__hekatanOrthoMode;
        if (!f && S) {
          const Ve = Math.abs(t.x - c[0]), He = Math.abs(t.y - c[1]), st = Math.abs(t.z - c[2]), ht = (_l = a[0]) == null ? void 0 : _l.object;
          let St = null;
          ht === De ? St = "xy" : ht === Be ? St = "xz" : ht === Ge && (St = "yz"), St === "xy" ? f = Ve >= He ? "x" : "y" : St === "xz" ? f = Ve >= st ? "x" : "z" : St === "yz" ? f = He >= st ? "y" : "z" : f = Ve >= He && Ve >= st ? "x" : He >= st ? "y" : "z";
        }
        const L = window.__hekatanPolarTrack !== false;
        if (!f && L) {
          const Ve = t.x - c[0], He = t.y - c[1], st = t.z - c[2], ht = Math.hypot(Ve, He, st);
          if (ht > 1e-3) {
            const Zt = Math.tan(6 * Math.PI / 180) * ht, $t = Math.hypot(He, st), mt = Math.hypot(Ve, st), Vt = Math.hypot(Ve, He), gt = [["x", $t], ["y", mt], ["z", Vt]];
            gt.sort((ke, Re) => ke[1] - Re[1]), gt[0][1] <= Zt && (f = gt[0][0]);
          }
        }
        if (f) {
          const Ve = c[0], He = c[1], st = c[2];
          f === "x" ? t.set(t.x, He, st) : f === "y" ? t.set(Ve, t.y, st) : t.set(Ve, He, t.z);
          const ht = !!Ee, Zt = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[f];
          qe.style.background = "rgba(15,23,42,0.92)", qe.style.color = Zt, qe.style.border = `1.5px solid ${Zt}`;
          const $t = (_m = a[0]) == null ? void 0 : _m.object;
          let mt = null;
          $t === De ? mt = "xy" : $t === Be ? mt = "xz" : $t === Ge && (mt = "yz");
          const Vt = mt ? ` (plano ${mt.toUpperCase()})` : "";
          qe.textContent = ht ? `\u{1F512} LOCK ${f.toUpperCase()}${Vt}` : `\u22A5 ORTO ${f.toUpperCase()}${Vt}`, qe.style.left = n.clientX + 20 + "px", qe.style.top = n.clientY + 18 + "px", qe.style.transform = "none", qe.style.display = "block";
        } else Ee || (qe.style.display = "none");
        const R = Math.hypot(t.x - c[0], t.y - c[1], t.z - c[2]), U = Math.atan2(t.y - c[1], t.x - c[0]) * 180 / Math.PI, T = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        H.textContent = `${T} | \u0394L=${R.toFixed(2)}m ${U.toFixed(0)}\xB0`;
        const Q = document.getElementById("hk-coord-fixed");
        Q && (Q.textContent = T), oe.geometry.setFromPoints([new m(c[0], c[1], c[2]), new m(t.x, t.y, t.z)]), (_n2 = oe.computeLineDistances) == null ? void 0 : _n2.call(oe), oe.visible = true, E(c[0], c[1], c[2], t.x, t.y, t.z);
        const ee = window.__hekatanOrthoExt ?? 8, pe = window.__hekatanShowOrthoPlanes !== false;
        me.visible = pe, pe || ot(null), pe && (Ft(we, c, "xy", ee), Ft(de, c, "xz", ee), Ft(ze, c, "yz", ee), Ce(De, c, "xy", ee), Ce(Be, c, "xz", ee), Ce(Ge, c, "yz", ee));
        const Le = pe ? z.intersectObjects([De, Be, Ge], false) : [];
        let ye = null;
        if (Le.length > 0) {
          const Ve = Le[0].object;
          Ve === De ? ye = "xy" : Ve === Be ? ye = "xz" : Ve === Ge && (ye = "yz");
        }
        ot(ye), ye && (Ke.style.left = n.clientX + "px", Ke.style.top = n.clientY + "px"), V.geometry.setFromPoints([new m(c[0] - ee, c[1], c[2]), new m(c[0] + ee, c[1], c[2])]), (_o2 = V.computeLineDistances) == null ? void 0 : _o2.call(V), X.geometry.setFromPoints([new m(c[0], c[1] - ee, c[2]), new m(c[0], c[1] + ee, c[2])]), (_p = X.computeLineDistances) == null ? void 0 : _p.call(X), J.geometry.setFromPoints([new m(c[0], c[1], c[2] - ee), new m(c[0], c[1], c[2] + ee)]), (_q = J.computeLineDistances) == null ? void 0 : _q.call(J), j.visible = true;
        const xe = V.material, ft = X.material, Xe = J.material;
        f === "x" ? (xe.opacity = 0.95, ft.opacity = 0.1, Xe.opacity = 0.1) : f === "y" ? (xe.opacity = 0.1, ft.opacity = 0.95, Xe.opacity = 0.1) : f === "z" ? (xe.opacity = 0.1, ft.opacity = 0.1, Xe.opacity = 0.95) : (xe.opacity = 0.5, ft.opacity = 0.5, Xe.opacity = 0.5);
      } else {
        const M = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        H.textContent = M;
        const c = document.getElementById("hk-coord-fixed");
        if (c && (c.textContent = M), oe.visible = false, j.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(l)) {
          if (Z = null, D = null, K.style.left = n.clientX + 20 + "px", K.style.top = n.clientY - 28 + "px", K.style.display = "block", !I) {
            K.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const S = document.activeElement;
            !(S && (S.tagName === "INPUT" || S.tagName === "TEXTAREA") && S !== K) && document.activeElement !== K && K.focus({ preventScroll: true });
            try {
              K.select();
            } catch {
            }
          }
        } else B();
      }
      v();
    } else Rn(), H.style.display = "none", ut.visible = false, oe.visible = false, j.visible = false, B(), v();
  }), $.derive(() => {
    if (!e.gridTarget) return;
    Fs(i, { position: new m(...e.gridTarget.val.position), quaternion: new Un().setFromEuler(new mn(...e.gridTarget.val.rotation)) }, v), O.position.set(...e.gridTarget.val.position), O.quaternion.setFromEuler(new mn(...e.gridTarget.val.rotation)), O.updateMatrixWorld();
    const n = new m(0, 0, 1).applyEuler(new mn(...e.gridTarget.val.rotation));
    k = !(Math.abs(n.x) > 0.999 || Math.abs(n.y) > 0.999 || Math.abs(n.z) > 0.999);
  }), $.derive(() => {
    he.geometry.setAttribute("position", new Mt(e.points.val.flat(), 3)), he.geometry.computeBoundingSphere();
  }), $.derive(() => {
    const n = 0.05 * _ * 0.5 * x.val;
    z.params.Points.threshold = 0.4 * n;
  }), $.derive(() => {
    var _a;
    const n = e.points.val ?? [], a = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const s of a) {
      const [l, u, p] = n[s];
      t.push(l, u, p);
    }
    const r = new fe();
    r.setAttribute("position", new Mt(t, 3)), Pe.geometry.dispose(), Pe.geometry = r;
  });
  let Ln = false, Qt = 0;
  w.addEventListener("pointerdown", () => {
    Ln = true;
  }), w.addEventListener("pointerup", () => {
    Ln = false;
  }), w.addEventListener("pointermove", () => {
    Ln && Qt++;
  });
  const _t = document.createElement("div");
  _t.id = "hk-window-select", _t.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(_t);
  let Et = null, cn = false, Ct = null;
  const Bn = (n, o, a, t, r) => {
    r ? (_t.style.borderColor = "#34d399", _t.style.borderStyle = "dashed", _t.style.background = "rgba(52, 211, 153, 0.10)") : (_t.style.borderColor = "#22d3ee", _t.style.borderStyle = "solid", _t.style.background = "rgba(34, 211, 238, 0.10)"), _t.style.left = Math.min(n, a) + "px", _t.style.top = Math.min(o, t) + "px", _t.style.width = Math.abs(a - n) + "px", _t.style.height = Math.abs(t - o) + "px", _t.style.display = "block";
  }, oo = (n, o, a, t, r) => {
    var _a, _b, _c, _d;
    const s = Math.min(n, a), l = Math.max(n, a), u = Math.min(o, t), p = Math.max(o, t), g = a < n, M = w.getBoundingClientRect(), c = h();
    c.updateMatrixWorld();
    const f = (ye) => {
      const xe = new m(ye[0], ye[1], ye[2]);
      return xe.project(c), { x: M.left + (xe.x * 0.5 + 0.5) * M.width, y: M.top + (-xe.y * 0.5 + 0.5) * M.height };
    }, S = (ye) => ye.x >= s && ye.x <= l && ye.y >= u && ye.y <= p, L = (ye, xe) => !(ye.x < s && xe.x < s || ye.x > l && xe.x > l || ye.y < u && xe.y < u || ye.y > p && xe.y > p);
    r || ve.clear();
    let R = 0;
    const U = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let ye = 0; ye < U.length; ye++) {
      const xe = U[ye];
      xe && S(f(xe)) && (ve.add(`pt:${ye}`), R++);
    }
    const T = (ye, xe) => g ? S(ye) || S(xe) || L(ye, xe) : S(ye) && S(xe), Q = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], ee = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let ye = 0; ye < Q.length; ye++) {
      const xe = Q[ye];
      if (ee.includes(ye)) {
        let Xe;
        if (!g) Xe = xe.every((Ve) => {
          const He = U[Ve];
          return !!He && S(f(He));
        });
        else {
          Xe = false;
          for (let Ve = 0; Ve < xe.length - 1; Ve++) {
            const He = U[xe[Ve]], st = U[xe[Ve + 1]];
            if (!(!He || !st) && T(f(He), f(st))) {
              Xe = true;
              break;
            }
          }
        }
        Xe && (ve.add(`poly:${ye}`), R++);
      } else for (let Xe = 0; Xe < xe.length - 1; Xe++) {
        const Ve = U[xe[Xe]], He = U[xe[Xe + 1]];
        !Ve || !He || T(f(Ve), f(He)) && (ve.add(`seg:${ye}:${Xe}`), R++);
      }
    }
    const Le = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let ye = 0; ye < Le.length; ye++) {
      const xe = Le[ye];
      if (!xe || xe.length !== 6) continue;
      const ft = f([xe[0], xe[1], xe[2]]), Xe = f([xe[3], xe[4], xe[5]]);
      T(ft, Xe) && (ve.add(`aux:${ye}`), R++);
    }
    Rt(), se(`${g ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${R} item(s) ${r ? "agregados a" : "\u2192"} selecci\xF3n (total ${ve.size})`), _t.style.display = "none";
  }, vn = () => {
    Ct && (Ct = null, _t.style.display = "none", se("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = vn, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && Ct && vn();
  });
  const so = () => {
    var _a, _b, _c, _d;
    if (ve.size === 0) return false;
    const n = [...ve], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], a = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? [], l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Set();
    for (const L of n) {
      const [R, ...U] = L.split(":");
      if (R === "pt") l.add(+U[0]);
      else if (R === "poly") u.add(+U[0]);
      else if (R === "seg") {
        const T = +U[0], Q = +U[1];
        p.has(T) || p.set(T, /* @__PURE__ */ new Set()), p.get(T).add(Q);
      } else R === "aux" && g.add(+U[0]);
    }
    let M = 0, c = [], f = [];
    const S = /* @__PURE__ */ new Map();
    for (let L = 0; L < a.length; L++) {
      if (u.has(L)) {
        M++;
        continue;
      }
      S.set(L, c.length);
      const R = p.get(L);
      if (R && R.size > 0) {
        let U = [];
        for (let T = 0; T < a[L].length; T++) U.push(a[L][T]), T < a[L].length - 1 && R.has(T) && (U.length >= 2 && c.push(U), U = [], M++);
        (U.length >= 2 || U.length === 1) && c.push(U);
      } else c.push([...a[L]]);
    }
    if (l.size > 0) {
      const L = [], R = /* @__PURE__ */ new Map();
      for (let T = 0; T < o.length; T++) {
        if (l.has(T)) {
          M++;
          continue;
        }
        R.set(T, L.length), L.push([...o[T]]);
      }
      const U = [];
      for (const T of c) {
        let Q = [];
        for (const ee of T) {
          const pe = R.get(ee);
          pe === void 0 ? (Q.length >= 2 && U.push(Q), Q = []) : Q.push(pe);
        }
        Q.length >= 2 && U.push(Q);
      }
      c = U, e.points.val = L;
    }
    for (const L of t) {
      const R = S.get(L);
      R !== void 0 && R < c.length && f.push(R);
    }
    if (e.polylines && (e.polylines.val = c), e.areas && (e.areas.val = f), g.size > 0 && r) {
      const L = s.filter((R, U) => !g.has(U));
      "val" in r ? r.val = L : window.__hekatanDrawingAuxLines = L, M += g.size;
    }
    ve.clear(), Rt();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return se(`\u{1F5D1} ${M} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = so, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement, a = o && (o.id === "hk3-cmd-input" || o.id === "hk-dyn-input") && o.value === "";
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && !a || ve.size !== 0 && (n.preventDefault(), so());
  });
  const kt = document.createElement("div");
  kt.id = "hk-properties-pane";
  const ao = "hk-props-pane-pos";
  let on = null;
  try {
    const n = localStorage.getItem(ao);
    n && (on = JSON.parse(n));
  } catch {
  }
  kt.style.cssText = ["position:fixed", on ? `left:${on.left}px` : "left:50%", on ? `top:${on.top}px` : "top:8px", on ? "transform:none" : "transform:translateX(-50%)", "width:min(320px, calc(100vw - 32px))", "max-height:60vh", "overflow-y:auto", "z-index:201", "box-shadow:0 6px 24px rgba(0,0,0,0.45)", "border-radius:6px", "display:none"].join(";") + ";", document.body.appendChild(kt);
  const Do = () => {
    const n = kt.querySelector(".tp-rotv_b");
    if (!n || n.__hkDragWired) return;
    n.__hkDragWired = true, n.style.cursor = "move", n.style.userSelect = "none";
    let o = false, a = 0, t = 0, r = 0, s = 0;
    n.addEventListener("mousedown", (l) => {
      o = true, a = l.clientX, t = l.clientY;
      const u = kt.getBoundingClientRect();
      r = u.left, s = u.top, kt.style.transform = "none", kt.style.left = `${r}px`, kt.style.top = `${s}px`, l.preventDefault();
    }), window.addEventListener("mousemove", (l) => {
      if (!o) return;
      const u = l.clientX - a, p = l.clientY - t, g = Math.max(0, Math.min(window.innerWidth - 80, r + u)), M = Math.max(0, Math.min(window.innerHeight - 40, s + p));
      kt.style.left = `${g}px`, kt.style.top = `${M}px`;
    }), window.addEventListener("mouseup", () => {
      if (o) {
        o = false;
        try {
          localStorage.setItem(ao, JSON.stringify({ left: parseFloat(kt.style.left), top: parseFloat(kt.style.top) }));
        } catch {
        }
      }
    });
  }, Y = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 }, yt = { dx: 0, dy: 0, dz: 3, copias: 1 };
  let Qe = null;
  const dt = (n, o, a, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: a, value: t } }));
  }, Yo = () => {
    if (Qe && (Qe.dispose(), Qe = null), ve.size === 0) {
      kt.style.display = "none";
      return;
    }
    const n = [...ve], o = n.filter((c) => c.startsWith("pt:")), a = n.filter((c) => c.startsWith("seg:")), t = n.filter((c) => c.startsWith("poly:")), r = n.filter((c) => c.startsWith("aux:")), s = o.length > 0, l = a.length > 0, u = t.length > 0, p = !s && !l && !u, g = [];
    o.length && g.push(`\u{1F535} ${o.length} nodo(s)`), a.length && g.push(`\u{1F4CF} ${a.length} segmento(s)`), t.length && g.push(`\u25AD ${t.length} \xE1rea(s)`), r.length && g.push(`\u250A ${r.length} aux`);
    const M = `\u{1F3AF} ${ve.size} item(s) \u2014 ${g.join(", ")}`;
    Qe = new To({ container: kt, title: M });
    {
      const c = Qe.addFolder({ title: "\u270F\uFE0F Editar \u2014 Replicar / Mover", expanded: false });
      c.addBinding(yt, "dx", { label: "\u0394x (m)", step: 0.1 }), c.addBinding(yt, "dy", { label: "\u0394y (m)", step: 0.1 }), c.addBinding(yt, "dz", { label: "\u0394z (m)", step: 0.1 }), c.addBinding(yt, "copias", { label: "Copias", min: 1, max: 50, step: 1 }), c.addButton({ title: "\u29C9 Replicar selecci\xF3n" }).on("click", () => {
        var _a;
        const S = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, yt.dx, yt.dy, yt.dz, yt.copias);
        se(S ? `\u29C9 Replicado \xD7${S} (\u0394 ${yt.dx},${yt.dy},${yt.dz} m)` : "\u26A0 Nada que replicar \u2014 seleccion\xE1 nodos/frames/\xE1reas");
      }), c.addButton({ title: "\u2192 Mover selecci\xF3n (1 copia, sin duplicar geometr\xEDa base)" }).on("click", () => {
        var _a;
        const S = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, yt.dx, yt.dy, yt.dz, 1);
        se(S ? `\u2192 Copia desplazada \u0394 ${yt.dx},${yt.dy},${yt.dz} m` : "\u26A0 Nada seleccionado");
      });
      const f = c.addFolder({ title: "\u{1F9F2} Snap", expanded: false });
      f.addButton({ title: "Snap a grilla ON/OFF (F9)" }).on("click", () => {
        var _a;
        return (_a = window.__hekatanToggleSnap) == null ? void 0 : _a.call(window);
      }), f.addButton({ title: "OSNAP (endpoints/medios) ON/OFF" }).on("click", () => {
        window.__hekatanOsnapOn = !(window.__hekatanOsnapOn ?? true), se(`\u{1F9F2} OSNAP ${window.__hekatanOsnapOn ? "ON" : "OFF"}`);
      });
    }
    if (s) {
      const c = Qe.addFolder({ title: `\u{1F4CC} Restraints (DOFs) \u2014 ${o.length} nodo(s)` });
      c.addBinding(Y, "Ux"), c.addBinding(Y, "Uy"), c.addBinding(Y, "Uz"), c.addBinding(Y, "Rx"), c.addBinding(Y, "Ry"), c.addBinding(Y, "Rz");
      const f = Qe.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      f.addBinding(Y, "Kx", { label: "Kx", min: 0, step: 100 }), f.addBinding(Y, "Ky", { label: "Ky", min: 0, step: 100 }), f.addBinding(Y, "Kz", { label: "Kz", min: 0, step: 100 }), f.addBinding(Y, "Krx", { label: "Krx", min: 0, step: 1e3 }), f.addBinding(Y, "Kry", { label: "Kry", min: 0, step: 1e3 }), f.addBinding(Y, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const S = Qe.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      S.addBinding(Y, "Fx", { step: 0.1 }), S.addBinding(Y, "Fy", { step: 0.1 }), S.addBinding(Y, "Fz", { step: 0.1 }), S.addBinding(Y, "Mx", { step: 0.1 }), S.addBinding(Y, "My", { step: 0.1 }), S.addBinding(Y, "Mz", { step: 0.1 }), Qe.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(Y, "mass", { label: "m", min: 0, step: 1 }), Qe.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(Y, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), Qe.addButton({ title: `\u2713 Aplicar a ${o.length} nodo(s) seleccionado(s)` }).on("click", () => {
        let U = 0;
        const T = [Y.Ux, Y.Uy, Y.Uz, Y.Rx, Y.Ry, Y.Rz];
        T.some((pe) => pe) && (dt("nodes", o, "supports", T), U++);
        const Q = [Y.Fx, Y.Fy, Y.Fz, Y.Mx, Y.My, Y.Mz];
        Q.some((pe) => pe !== 0) && (dt("nodes", o, "loads", Q), U++);
        const ee = [Y.Kx, Y.Ky, Y.Kz, Y.Krx, Y.Kry, Y.Krz];
        if (ee.some((pe) => pe !== 0) && (dt("nodes", o, "springs", ee), U++), Y.mass !== 0 && (dt("nodes", o, "mass", Y.mass), U++), Y.diaphragm !== "Ninguno" && (dt("nodes", o, "diaphragm", Y.diaphragm), U++), U === 0) {
          se("\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para apoyo, o un valor de carga/resorte/masa, y volv\xE9 a aplicar.");
          let pe = document.getElementById("hk-prop-toast");
          pe || (pe = document.createElement("div"), pe.id = "hk-prop-toast", pe.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);z-index:99999;padding:9px 20px;border-radius:8px;font:600 14px system-ui;color:#fff;pointer-events:none;transition:opacity .25s;box-shadow:0 4px 16px rgba(0,0,0,.4)", document.body.appendChild(pe)), pe.textContent = "\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para empotrado/articulado, despu\xE9s Aplicar", pe.style.background = "rgba(217,119,6,0.97)", pe.style.opacity = "1", clearTimeout(window.__hekatanPropToastT), window.__hekatanPropToastT = setTimeout(() => {
            pe && (pe.style.opacity = "0");
          }, 3200);
        } else se(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    }
    if (l) {
      const c = Qe.addFolder({ title: `\u{1F4CF} Secci\xF3n frame \u2014 ${a.length} seg(s)` });
      c.addBinding(Y, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), c.addBinding(Y, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const f = Qe.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      f.addBinding(Y, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), f.addBinding(Y, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), f.addBinding(Y, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), f.addBinding(Y, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), Qe.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(Y, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), Qe.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(Y, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const R = Qe.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      R.addBinding(Y, "relMxI", { label: "Mx I" }), R.addBinding(Y, "relMyI", { label: "My I" }), R.addBinding(Y, "relMzI", { label: "Mz I" });
      const U = Qe.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      U.addBinding(Y, "relMxJ", { label: "Mx J" }), U.addBinding(Y, "relMyJ", { label: "My J" }), U.addBinding(Y, "relMzJ", { label: "Mz J" }), Qe.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(Y, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const Q = Qe.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      Q.addBinding(Y, "LKx", { label: "LKx", min: 0, step: 100 }), Q.addBinding(Y, "LKy", { label: "LKy", min: 0, step: 100 }), Q.addBinding(Y, "LKz", { label: "LKz", min: 0, step: 100 });
      const ee = Qe.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      ee.addBinding(Y, "qx", { step: 0.1 }), ee.addBinding(Y, "qy", { step: 0.1 }), ee.addBinding(Y, "qz", { step: 0.1 }), Qe.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(Y, "massPerM", { label: "m/L", min: 0, step: 1 }), Qe.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        dt("segs", a, "section", Y.section), dt("segs", a, "material", Y.material_frame);
        const Le = { A: Y.A_mod, Iz: Y.Iz_mod, Iy: Y.Iy_mod, J: Y.J_mod };
        (Le.A !== 1 || Le.Iz !== 1 || Le.Iy !== 1 || Le.J !== 1) && dt("segs", a, "modifiers", Le), Y.insertionPoint !== "10 \u2014 Centroid" && dt("segs", a, "insertionPoint", Y.insertionPoint), Y.beta !== 0 && dt("segs", a, "beta", Y.beta);
        const ye = [Y.relMxI, Y.relMyI, Y.relMzI], xe = [Y.relMxJ, Y.relMyJ, Y.relMzJ];
        (ye.some((Ve) => Ve) || xe.some((Ve) => Ve)) && dt("segs", a, "releases", { i: ye, j: xe }), Y.hinges !== "None" && dt("segs", a, "hinges", Y.hinges);
        const ft = [Y.LKx, Y.LKy, Y.LKz];
        ft.some((Ve) => Ve !== 0) && dt("segs", a, "lineSprings", ft);
        const Xe = [Y.qx, Y.qy, Y.qz];
        Xe.some((Ve) => Ve !== 0) && dt("segs", a, "distLoad", Xe), Y.massPerM !== 0 && dt("segs", a, "massPerM", Y.massPerM), se(`\u2713 Propiedades aplicadas a ${a.length} segmento(s)`);
      });
    }
    if (u) {
      const c = Qe.addFolder({ title: `\u25AD Shell / \xC1rea \u2014 ${t.length}` });
      c.addBinding(Y, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), c.addBinding(Y, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), c.addBinding(Y, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), Qe.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(Y, "surfLoad", { label: "q", step: 0.1 }), Qe.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        dt("areas", t, "shellType", Y.shellType), dt("areas", t, "thickness", Y.thickness), dt("areas", t, "material", Y.material_shell), Y.surfLoad !== 0 && dt("areas", t, "surfLoad", Y.surfLoad), se(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    }
    if (p) {
      const c = Qe.addFolder({ title: "\u2139 Selecci\xF3n" }), f = { msg: "Seleccion\xE1 nodos, frames o \xE1reas para editar" };
      c.addBinding(f, "msg", { readonly: true, label: "" });
    }
    Qe.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      ve.clear(), Rt();
    }), kt.style.display = "block", Do();
  };
  window.__hekatanRefreshPropsPane = Yo;
  let sn = null, Mn = false;
  w.addEventListener("pointerdown", (n) => {
    n.button === 2 && (sn = { x: n.clientX, y: n.clientY }, Mn = false);
  }), w.addEventListener("pointermove", (n) => {
    if (sn && n.buttons & 2 && !Mn) {
      const o = n.clientX - sn.x, a = n.clientY - sn.y;
      Math.hypot(o, a) > 8 && (Mn = true);
    }
  }), w.addEventListener("pointerup", (n) => {
    var _a, _b, _c;
    if (n.button === 2) {
      const o = sn !== null && !Mn;
      sn = null;
      const a = window.__hekatanRClickOnElement === true;
      if (window.__hekatanRClickOnElement = false, a) return;
      if (o) {
        if (Ct ? vn() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), ve.size > 0 && (ve.clear(), Rt()), e.polylines) {
          const s = e.polylines.rawVal;
          (s[s.length - 1] ?? []).length > 0 && (e.polylines.val = [...s, []]);
        }
        const t = window.__hekatanCadState, r = (_b = (_a = t == null ? void 0 : t.get) == null ? void 0 : _a.call(t)) == null ? void 0 : _b.tool;
        r && r !== "select" && r !== "none" ? ((_c = t == null ? void 0 : t.setTool) == null ? void 0 : _c.call(t, "select"), se(`\u238B Cancelado \u2014 tool '${r}' cerrado, volv\xE9s a Seleccionar`)) : se("\u238B Cancelado (click derecho)");
      }
    }
  }), w.addEventListener("contextmenu", (n) => {
    n.preventDefault(), n.stopPropagation();
  }, { capture: true }), w.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && window.__hekatanRectSelectExplicit && n.pointerType !== "touch" && (Et = { x: n.clientX, y: n.clientY }, cn = false);
  }), w.addEventListener("pointermove", (n) => {
    if (Ct && n.buttons === 0) {
      const s = n.clientX < Ct.x;
      Bn(Ct.x, Ct.y, n.clientX, n.clientY, s);
      return;
    }
    if (!Et) return;
    const o = n.clientX - Et.x, a = n.clientY - Et.y, t = Math.hypot(o, a);
    if (!cn && t < 8) return;
    cn = true;
    const r = n.clientX < Et.x;
    Bn(Et.x, Et.y, n.clientX, n.clientY, r);
  }), w.addEventListener("pointerup", (n) => {
    if (!Et) return;
    if (!cn) {
      Et = null;
      return;
    }
    const o = n.ctrlKey || n.metaKey || n.shiftKey;
    oo(Et.x, Et.y, n.clientX, n.clientY, o), Et = null, cn = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const Nt = new je();
  Nt.visible = false, Nt.frustumCulled = false, y.add(Nt);
  const No = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, io = (n, o, a, t) => {
    var _a, _b, _c, _d;
    for (; Nt.children.length; ) {
      const u = Nt.children.pop();
      (_b = (_a = u.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = u.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const r = No[n] ?? 16777215, s = 0.05, l = new fe().setFromPoints([new m(o - s, a - s, t), new m(o + s, a - s, t), new m(o + s, a - s, t), new m(o + s, a + s, t), new m(o + s, a + s, t), new m(o - s, a + s, t), new m(o - s, a + s, t), new m(o - s, a - s, t)]);
    Nt.add(new Dt(l, new it({ color: r, linewidth: 2 }))), Nt.position.set(0, 0, 0), Nt.visible = true;
  }, Rn = () => {
    Nt.visible = false;
  }, Zo = (n, o, a, t) => {
    var _a;
    const r = window.__hekatanOsnap, s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let u = null;
    const p = (c, f, S, L) => {
      const R = Math.hypot(f - n, S - o, L - a);
      R > t || (!u || R < u.d) && (u = { type: c, x: f, y: S, z: L, d: R });
    };
    (r.node || r.end) && s.forEach((c) => {
      r.node && p("node", c[0], c[1], c[2]);
    });
    for (const c of l) if (!(c.length < 2)) for (let f = 0; f < c.length - 1; f++) {
      const S = s[c[f]], L = s[c[f + 1]];
      if (!(!S || !L) && (r.end && (p("end", S[0], S[1], S[2]), p("end", L[0], L[1], L[2])), r.mid && p("mid", (S[0] + L[0]) / 2, (S[1] + L[1]) / 2, (S[2] + L[2]) / 2), r.nea || r.per)) {
        const R = L[0] - S[0], U = L[1] - S[1], T = L[2] - S[2], Q = R * R + U * U + T * T;
        if (Q < 1e-12) continue;
        const ee = Math.max(0, Math.min(1, ((n - S[0]) * R + (o - S[1]) * U + (a - S[2]) * T) / Q)), pe = S[0] + ee * R, Le = S[1] + ee * U, ye = S[2] + ee * T;
        r.nea && p("nea", pe, Le, ye), r.per && p("per", pe, Le, ye);
      }
    }
    const g = window.__hekatanDrawingAuxLines, M = (g == null ? void 0 : g.rawVal) ?? (g == null ? void 0 : g.val) ?? g ?? [];
    for (const c of M) {
      if (c.length !== 6) continue;
      const f = [c[0], c[1], c[2]], S = [c[3], c[4], c[5]];
      if (r.end && (p("end", f[0], f[1], f[2]), p("end", S[0], S[1], S[2])), r.mid && p("mid", (f[0] + S[0]) / 2, (f[1] + S[1]) / 2, (f[2] + S[2]) / 2), r.nea || r.per) {
        const L = S[0] - f[0], R = S[1] - f[1], U = S[2] - f[2], T = L * L + R * R + U * U;
        if (T < 1e-12) continue;
        const Q = Math.max(0, Math.min(1, ((n - f[0]) * L + (o - f[1]) * R + (a - f[2]) * U) / T)), ee = f[0] + Q * L, pe = f[1] + Q * R, Le = f[2] + Q * U;
        r.nea && p("nea", ee, pe, Le), r.per && p("per", ee, pe, Le);
      }
    }
    return u ? { type: u.type, x: u.x, y: u.y, z: u.z } : null;
  };
  window.__hekatanOsnapCompute = Zo, window.__hekatanOsnapShow = io, window.__hekatanOsnapHide = Rn;
  let Te = [], xt = 0;
  const dn = document.createElement("div");
  dn.id = "hk-cad-status", dn.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", dn.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(dn);
  const Uo = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), Ee && n.push(`\u{1F512} LOCK ${Ee.toUpperCase()}`);
    const a = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(a) > 1e-3 && n.push(`Cota Z=${a}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, se = (n) => {
    const o = n + Uo();
    dn.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    se(o);
  }, window.__hekatanCadResetPending = () => {
    Te = [], le = [], te.visible = false, v(), se("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  const pn = [], Gt = () => {
    var _a, _b;
    pn.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), pn.length > 100 && pn.shift();
  }, lo = () => {
    var _a;
    const n = pn.pop();
    if (!n) {
      se("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), Te = [], oe.visible = false, j.visible = false, B(), se(`\u21B6 Undo \u2014 ${pn.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    v();
  };
  window.__hekatanPushUndo = Gt, window.__hekatanUndo = lo, document.addEventListener("keydown", (n) => {
    var _a;
    if ((n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey) {
      const o = n.target, a = o == null ? void 0 : o.tagName;
      if ((a === "INPUT" || a === "TEXTAREA") && o.type !== "checkbox" && o.type !== "range" && ((_a = o.value) == null ? void 0 : _a.length) > 0) return;
      n.preventDefault(), n.stopPropagation(), lo();
    }
  }, { capture: true });
  const ro = () => {
    if (Te = [], e.polylines) {
      const n = e.polylines.rawVal, o = n[n.length - 1];
      o && o.length > 0 && (e.polylines.val = [...n, []]);
    }
    Ee = null, Ye(), oe.visible = false, j.visible = false, B(), se("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), v();
  };
  window.__hekatanFinalizeDraw = ro;
  const co = () => {
    Te = [], le = [], te.visible = false;
    let n = false;
    ve.size && (ve.clear(), Rt(), n = true), ro(), se(n ? "\u238B Selecci\xF3n cancelada" : "\u238B Acci\xF3n cancelada"), v();
  };
  window.__hekatanEscapeCancel = co, window.__hekatanReplicateSelection = (n, o, a, t) => {
    var _a, _b, _c, _d;
    t = Math.max(1, Math.round(t || 1));
    const r = [...ve], s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], u = new Set(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? []), p = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), M = [];
    if (r.forEach((R) => {
      if (R.startsWith("pt:")) p.add(+R.slice(3));
      else if (R.startsWith("poly:")) {
        const U = +R.slice(5);
        g.add(U), (l[U] || []).forEach((T) => p.add(T));
      } else if (R.startsWith("seg:")) {
        const U = R.split(":"), T = +U[1], Q = +U[2], ee = l[T] || [], pe = ee[Q], Le = ee[Q + 1];
        pe != null && Le != null && (M.push([pe, Le]), p.add(pe), p.add(Le));
      }
    }), !p.size) return 0;
    Gt();
    const c = [...s];
    let f = l.slice();
    f.length && f[f.length - 1].length === 0 && (f = f.slice(0, -1));
    const S = [...((_c = e.areas) == null ? void 0 : _c.rawVal) ?? []], L = [...p];
    for (let R = 1; R <= t; R++) {
      const U = n * R, T = o * R, Q = a * R, ee = /* @__PURE__ */ new Map();
      L.forEach((pe) => {
        ee.set(pe, c.length), c.push([s[pe][0] + U, s[pe][1] + T, s[pe][2] + Q]);
      }), g.forEach((pe) => {
        const Le = l[pe].map((xe) => ee.has(xe) ? ee.get(xe) : xe), ye = f.length;
        f.push(Le), u.has(pe) && S.push(ye);
      }), M.forEach(([pe, Le]) => {
        f.push([ee.get(pe), ee.get(Le)]);
      });
    }
    f.push([]), e.points.val = c, e.polylines && (e.polylines.val = f), e.areas && (e.areas.val = S);
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return v(), t;
  }, w.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z;
    if (Qt > 5) {
      Qt = 0;
      return;
    }
    Qt = 0;
    const o = b(n);
    if (!o) return;
    z.setFromCamera(P, o);
    const a = G();
    if (!a.length) return;
    {
      const s = o.position.distanceTo(d.target) || 1, l = a[0].distance ?? o.position.distanceTo(a[0].point), u = a[0].point;
      if (!isFinite(u.x) || !isFinite(u.y) || !isFinite(u.z) || l > Math.max(s * 12, 300)) {
        se("\u26A0 Click rasante descartado \u2014 cay\xF3 demasiado lejos. Acerc\xE1 la vista o clicke\xE1 sobre la grilla.");
        return;
      }
    }
    let t = a[0].point;
    (n.ctrlKey || n.metaKey) && (t = new m(Math.round(a[0].point.x), Math.round(a[0].point.y), Math.round(a[0].point.z)));
    {
      const s = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], l = s[s.length - 1] ?? [], u = e.points.rawVal ?? [];
      if (l.length > 0) {
        const p = u[l[l.length - 1]];
        if (p) {
          const g = !!window.__hekatanOrthoMode;
          let M = Ee;
          if (!M && g) {
            const c = Math.abs(t.x - p[0]), f = Math.abs(t.y - p[1]), S = Math.abs(t.z - p[2]);
            M = c >= f && c >= S ? "x" : f >= S ? "y" : "z";
          }
          M === "x" ? t = new m(t.x, p[1], p[2]) : M === "y" ? t = new m(p[0], t.y, p[2]) : M === "z" && (t = new m(p[0], p[1], t.z));
        }
      }
    }
    if (Lt) t = Lt.clone(), se(`\u{1F4D0} Eje \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.2, l = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, s);
      if (l) t = new m(l.x, l.y, l.z), se(`\u{1F3AF} Snap [${l.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      else {
        const u = window.__hekatanSnapEnabled !== false, p = window.__hekatanSnap2D ?? 0;
        u && p > 0 && (t = new m(Math.round(t.x / p) * p, Math.round(t.y / p) * p, Math.round(t.z / p) * p));
      }
    }
    const r = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (r === "select" || r === "none" || !r) {
      if (bt) {
        Ct && vn();
        const { kind: s, a: l, b: u } = bt, p = u !== void 0 ? `${s}:${l}:${u}` : `${s}:${l}`;
        n.ctrlKey || n.metaKey || n.shiftKey || ve.clear(), ve.has(p) ? ve.delete(p) : ve.add(p), Rt(), se(`\u2713 Seleccionados ${ve.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const s = n.ctrlKey || n.metaKey || n.shiftKey, l = n.clientX, u = n.clientY;
        Ct ? (oo(Ct.x, Ct.y, l, u, s), Ct = null) : s || (Ct = { x: l, y: u }, se("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), Bn(l, u, l + 1, u + 1, false));
      }
      return;
    }
    if (r === "axis") {
      const s = window.__hekatanAxisDraw;
      if (!s) return;
      if (!s.pendingStart) {
        s.pendingStart = [t.x, t.y, t.z], se(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const l = s.mode === "number", u = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, s.pendingStart, [t.x, t.y, t.z], l);
      se(`\u2713 Eje "${u}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (r === "delete") {
      if ($e >= 0) {
        const s = window.__hekatanDrawingAuxLines, l = (s == null ? void 0 : s.rawVal) ?? (s == null ? void 0 : s.val) ?? s ?? [], u = $e;
        if (u >= 0 && u < l.length) {
          Gt();
          const p = l.slice(0, u).concat(l.slice(u + 1));
          s && typeof s == "object" && "val" in s ? s.val = p : window.__hekatanDrawingAuxLines = p, se(`\u{1F5D1} L\xEDnea auxiliar #${u + 1} borrada`), $e = -1, Ie.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (Ue >= 0) {
        const s = Ue, l = pt;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(s)) ?? false ? (en(s), se(`\u{1F5D1} \xC1rea #${s + 1} (shell Q4) borrada`)) : l >= 0 ? (En(s, l), se(`\u{1F5D1} Segmento ${l + 1} de polil\xEDnea #${s + 1} borrado`)) : (en(s), se(`\u{1F5D1} Polil\xEDnea #${s + 1} borrada`));
      } else se("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (r === "circle") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        se("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [s, l] = Te, u = Math.hypot(l[0] - s[0], l[1] - s[1], l[2] - s[2]);
      Math.abs(l[0] - s[0]);
      const p = Math.abs(l[1] - s[1]), M = Math.abs(l[2] - s[2]) < 1e-3 ? "xy" : p < 1e-3 ? "xz" : "yz", c = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, s[0], s[1], s[2], u, c, M), se(`\u2713 C\xEDrculo dibujado en ${M.toUpperCase()} \u2014 r=${u.toFixed(2)}m, ${c} segmentos`), Te = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (r === "arc") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        se("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (Te.length === 2) {
        se("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [s, l, u] = Te, p = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, s, l, u, p), se(`\u2713 Arco dibujado \u2014 ${p} segmentos`), Te = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (r === "rect") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        se("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Te;
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, s, l), se(`\u2713 Rect\xE1ngulo dibujado \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Te = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (r === "rectarea") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        se("\u25AD \xC1rea rectangular \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Te;
      (_p = window.__hekatanDrawRectArea) == null ? void 0 : _p.call(window, s, l), se(`\u2713 \xC1rea rectangular (shell Q4) creada \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Te = [];
      return;
    }
    if (r === "polyarea") {
      le.push([t.x, t.y, t.z]), te.geometry.setFromPoints(le.map((s) => new m(s[0], s[1], s[2]))), te.visible = le.length >= 1, se(`\u25B0 \xC1rea libre \u2014 ${le.length} punto(s). Click m\xE1s v\xE9rtices, o Enter / click-derecho para cerrar y mallar (m\xEDn. 3).`), v();
      return;
    }
    if (r === "plane3") {
      if (Te.push([t.x, t.y, t.z]), Te.length < 3) {
        se(`\u25E3 Plano inclinado \u2014 punto ${Te.length}/3. Tip: cambi\xE1 la Cota Z (o enganch\xE1 un nodo) entre clicks para darle inclinaci\xF3n.`);
        return;
      }
      const [s, l, u] = Te, p = (_q = window.__hekatanSetInclinedPlaneFrom3) == null ? void 0 : _q.call(window, s, l, u);
      se(p ? "\u2713 Plano de trabajo INCLINADO activo. Dibuj\xE1 el \xE1rea (\u25AD/\u2B21) sobre \xE9l. (XY para resetear)" : "\u26A0 Los 3 puntos son colineales \u2014 no definen un plano. Reintent\xE1."), Te = [];
      return;
    }
    if (r === "col") {
      Gt();
      const s = t.z, l = xt && xt > 0 ? xt : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, s], [t.x, t.y, s + l]];
      const u = e.polylines.rawVal, p = e.points.rawVal.length;
      e.polylines.val = [...u.slice(0, -1), ...u[u.length - 1].length > 0 ? [u[u.length - 1]] : [], [p - 2, p - 1], []], xt = 0, se(`\u258C Columna creada \u2014 h=${l.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (r === "wall") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        se("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [s, l] = Te, u = xt && xt > 0 ? xt : 3;
      Gt();
      const p = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [s[0], s[1], s[2]], [l[0], l[1], l[2]], [l[0], l[1], l[2] + u], [s[0], s[1], s[2] + u]];
      const g = e.polylines.rawVal;
      if (g.length - 1, e.polylines.val = [...g.slice(0, -1), ...g[g.length - 1].length > 0 ? [g[g.length - 1]] : [], [p, p + 1, p + 2, p + 3, p], []], e.areas) {
        const M = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, M];
      }
      se(`\u25A5 Pared Q4 creada \u2014 h=${u.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Te = [], xt = 0;
      try {
        (_s2 = window.__hekatanRebuild) == null ? void 0 : _s2.call(window);
      } catch {
      }
      return;
    }
    if (r === "extp") {
      Gt();
      const s = xt && xt > 0 ? xt : 3, l = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, l], [t.x, t.y, l + s]];
      const u = e.polylines.rawVal, p = e.points.rawVal.length;
      e.polylines.val = [...u.slice(0, -1), ...u[u.length - 1].length > 0 ? [u[u.length - 1]] : [], [p - 2, p - 1], []], xt = 0, se(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${s.toFixed(2)}m`);
      try {
        (_t2 = window.__hekatanRebuild) == null ? void 0 : _t2.call(window);
      } catch {
      }
      return;
    }
    if (r === "extl") {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.5, l = Kt(t.x, t.y, t.z, s);
      if (!l) {
        se("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const u = e.polylines.rawVal, p = e.points.rawVal, g = u[l.polyIdx], M = p[g[l.segIdx]], c = p[g[l.segIdx + 1]];
      if (!M || !c) {
        se("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const f = xt && xt > 0 ? xt : 3;
      Gt();
      const S = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [M[0], M[1], M[2]], [c[0], c[1], c[2]], [c[0], c[1], c[2] + f], [M[0], M[1], M[2] + f]];
      const L = e.polylines.rawVal;
      if (e.polylines.val = [...L.slice(0, -1), ...L[L.length - 1].length > 0 ? [L[L.length - 1]] : [], [S, S + 1, S + 2, S + 3, S], []], e.areas) {
        const R = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, R];
      }
      xt = 0, se(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${f.toFixed(2)}m`);
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
      se(`\u2726 Punto auxiliar agregado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      return;
    }
    if (r === "aux") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        se("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [s, l] = Te, u = window.__hekatanDrawingAuxLines;
      if (u) {
        const f = u.rawVal ?? u.val ?? [];
        u.val = [...f, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      const p = l[0] - s[0], g = l[1] - s[1], M = l[2] - s[2], c = Math.sqrt(p * p + g * g + M * M);
      se(`\u2713 L\xEDnea auxiliar creada \u2014 L=${c.toFixed(2)}m (cyan, no FEM)`), Te = [];
      return;
    }
    if (r === "extend") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        se("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [s, l] = Te, u = window.__hekatanDrawingAuxLines;
      if (u) {
        const p = u.rawVal ?? u.val ?? [];
        u.val = [...p, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      se("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Te = [];
      return;
    }
    if (r === "chaflan") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        se("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Te, u = window.__hekatanChaflanR ?? 1, p = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_v = window.__hekatanDrawSlabChaflan) == null ? void 0 : _v.call(window, s, l, u, p, 6);
      const g = Math.abs(l[0] - s[0]).toFixed(1), M = Math.abs(l[1] - s[1]).toFixed(1);
      se(`\u2713 Losa con chaflanes dibujada \u2014 ${g}\xD7${M}m, r=${u}m, ${p} seg/chafl\xE1n`), Te = [];
      try {
        (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
      } catch {
      }
      return;
    }
    if (I = false, Gt(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const s = e.polylines.rawVal, l = s.length - 1, u = s[l] ?? [];
      if (r === "line" && u.length === 2) {
        e.polylines.val = [...s, []], se("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_x = window.__hekatanRebuild) == null ? void 0 : _x.call(window);
        } catch {
        }
        return;
      }
      if (r === "area" && u.length === 4) {
        e.polylines.val = [...s.slice(0, -1), [...u, u[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, l]), se("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_y = window.__hekatanRebuild) == null ? void 0 : _y.call(window);
        } catch {
        }
        return;
      }
    }
    if (r === "node") se(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (r === "line") se("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (r === "polyline") se("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (r === "area") {
      const s = ((_z = e.polylines) == null ? void 0 : _z.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      se(`\u25A6 \xC1rea \u2014 click ${s.length}/4. Marc\xE1 ${4 - s.length} v\xE9rtice${4 - s.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), w.addEventListener("contextmenu", (n) => {
    var _a, _b, _c;
    if (((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "polyarea" && le.length >= 3) {
      n.preventDefault();
      const a = tn();
      se(`\u2713 \xC1rea libre mallada \u2014 ${a} shells Q4 creados.`);
      return;
    }
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), w.addEventListener("pointermove", (n) => {
    var _a, _b;
    const o = b(n);
    if (!o) return;
    z.setFromCamera(P, o);
    const a = G();
    if (ge.geometry.deleteAttribute("position"), a.length) {
      let t = a[0].point.clone();
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z));
      {
        const l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], u = l[l.length - 1] ?? [], p = e.points.rawVal ?? [];
        if (u.length > 0) {
          const g = p[u[u.length - 1]];
          if (g) {
            const M = !!window.__hekatanOrthoMode;
            let c = Ee;
            if (!c && M) {
              const f = Math.abs(t.x - g[0]), S = Math.abs(t.y - g[1]), L = Math.abs(t.z - g[2]);
              c = f >= S && f >= L ? "x" : S >= L ? "y" : "z";
            }
            c === "x" ? t.set(t.x, g[1], g[2]) : c === "y" ? t.set(g[0], t.y, g[2]) : c === "z" && t.set(g[0], g[1], t.z);
          }
        }
      }
      const r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, r);
      if (s) t.set(s.x, s.y, s.z);
      else {
        const l = window.__hekatanSnapEnabled !== false, u = window.__hekatanSnap2D ?? 0.5;
        l && u > 0 && (t.x = Math.round(t.x / u) * u, t.y = Math.round(t.y / u) * u, t.z = Math.round(t.z / u) * u);
      }
      ge.geometry.setAttribute("position", new Mt(t.toArray(), 3));
    }
    v();
  }), w.addEventListener("pointermove", (n) => {
    var _a;
    const o = b(n);
    if (!o) return;
    z.setFromCamera(P, o);
    let a = false;
    const t = z.intersectObject(he), r = G();
    if (t.length && r.length) {
      const s = new m(...e.points.rawVal[t[0].index]), l = new m(...r[0].point), u = s.sub(l), p = (_a = r[0].face) == null ? void 0 : _a.normal;
      p.transformDirection(O.matrixWorld), Math.abs(u.dot(p)) < 1e-4 && (a = true);
    }
    ge.visible = !a;
  });
  let Xn = false, Dn;
  w.addEventListener("pointermove", (n) => {
    var _a;
    if (!Qt) return;
    const o = b(n);
    if (!o) return;
    z.setFromCamera(P, o);
    let a = false;
    const t = z.intersectObject(he), r = G();
    if (t.length && r.length) {
      const l = new m(...e.points.rawVal[t[0].index]), u = new m(...r[0].point), p = l.sub(u), g = (_a = r[0].face) == null ? void 0 : _a.normal;
      g.transformDirection(O.matrixWorld), Math.abs(p.dot(g)) < 1e-4 && (a = true);
    }
    if (a && Qt < 5 && (Xn = true, d.enabled = false, Dn = t[0].index), !Xn || Qt % 2 !== 0) return;
    const s = [...e.points.rawVal];
    if (Dn !== void 0) {
      let l = r[0].point;
      (n.ctrlKey || n.metaKey) && (l = new m(Math.round(l.x), Math.round(l.y), Math.round(l.z))), s[Dn] = l.toArray();
    }
    e.points.val = s;
  }), w.addEventListener("pointerup", () => {
    d.enabled = true, Xn = false;
  }), w.addEventListener("contextmenu", (n) => {
    var _a;
    const o = b(n);
    if (!o) return;
    z.setFromCamera(P, o);
    let a = false;
    const t = z.intersectObject(he), r = G();
    if (t.length && r.length) {
      const u = new m(...e.points.rawVal[t[0].index]), p = new m(...r[0].point), g = u.sub(p), M = (_a = r[0].face) == null ? void 0 : _a.normal;
      M.transformDirection(O.matrixWorld), Math.abs(g.dot(M)) < 1e-4 && (a = true);
    }
    if (!a) return;
    const s = [...e.points.rawVal];
    if (s.splice(t[0].index, 1), e.points.val = s, !e.polylines) return;
    const l = e.polylines.rawVal.map((u) => u.filter((p) => p !== t[0].index)).map((u) => u.map((p) => p > t[0].index ? p - 1 : p)).filter((u) => u.length);
    l.push([]), e.polylines.val = l;
  });
}
function Fs(e, i, y) {
  const _ = Math.round(14.999999999999998), x = { position: e.position.clone(), quaternion: e.quaternion.clone() }, w = setInterval(z, 1e3 / 30);
  let v = 0;
  function z() {
    v++;
    const P = v / _;
    e.position.lerpVectors(x.position, i.position, P), e.quaternion.slerpQuaternions(x.quaternion, i.quaternion, P), y && y(), v == _ && clearInterval(w);
  }
}
function Vs(e, i, y, h) {
  const d = ps(y, e.elements, h);
  return $.derive(() => {
    d.visible = i.shellResults.val != "none";
  }), d;
}
const As = 6, Wn = 10, Ts = 0.012;
function Es(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function $s(e, i, y, h) {
  if (!y && !h) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && y) {
    const _ = y[e];
    if (_ && _.has(i)) return _.get(i);
  }
  return null;
}
function Is(e, i, y, h) {
  const d = new je(), _ = new Eo();
  _.setColorMap("rainbow");
  const x = new It(), w = $.state([]);
  return $.derive(() => {
    var _a, _b, _c;
    i.deformedShape.val;
    const v = y.val, z = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], P = Es(i.frameResults.val);
    if (d.children.forEach((C) => {
      C.geometry && C.geometry.dispose(), C.material && C.material.dispose();
    }), d.clear(), !P || z.length === 0 || v.length === 0) {
      w.val = [];
      return;
    }
    const b = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, O = (_c = e.deformOutputs) == null ? void 0 : _c.val, ae = [], ie = [];
    for (let C = 0; C < z.length; C++) {
      if (z[C].length !== 2) continue;
      const ne = $s(P, C, b, O);
      ne && (ae.push(ne[0], ne[1]), ie.push({ idx: C, vals: ne }));
    }
    if (ae.length === 0) {
      w.val = [];
      return;
    }
    const ue = Math.min(...ae), k = Math.max(...ae);
    _.setMin(ue), _.setMax(k), w.val = ae;
    const G = [1 / 0, 1 / 0, 1 / 0], he = [-1 / 0, -1 / 0, -1 / 0];
    for (const C of v) for (let N = 0; N < 3; N++) G[N] = Math.min(G[N], C[N]), he[N] = Math.max(he[N], C[N]);
    const Pe = Math.max(he[0] - G[0], he[1] - G[1], he[2] - G[2], 1) * Ts, K = [], Z = [], D = [];
    let I = 0;
    for (const { idx: C, vals: N } of ie) {
      const ne = z[C], W = v[ne[0]], H = v[ne[1]];
      if (!W || !H) continue;
      const F = new m(H[0] - W[0], H[1] - W[1], H[2] - W[2]), oe = F.length();
      if (oe < 1e-10) continue;
      F.normalize();
      const te = Math.abs(F.y) < 0.99 ? new m(0, 1, 0) : new m(1, 0, 0), le = new m().crossVectors(F, te).normalize(), re = new m().crossVectors(F, le).normalize(), Fe = Wn + 1, ce = As;
      for (let _e = 0; _e < Fe; _e++) {
        const Ze = _e / Wn, j = W[0] + F.x * oe * Ze, Me = W[1] + F.y * oe * Ze, V = W[2] + F.z * oe * Ze, X = N[0] + (N[1] - N[0]) * Ze, J = _.getColor(X) ?? new It(0, 0, 0);
        x.copy(J).convertSRGBToLinear();
        for (let q = 0; q < ce; q++) {
          const we = q / ce * Math.PI * 2, de = Math.cos(we), ze = Math.sin(we);
          K.push(j + (le.x * de + re.x * ze) * Pe, Me + (le.y * de + re.y * ze) * Pe, V + (le.z * de + re.z * ze) * Pe), Z.push(x.r, x.g, x.b);
        }
      }
      for (let _e = 0; _e < Wn; _e++) for (let Ze = 0; Ze < ce; Ze++) {
        const j = (Ze + 1) % ce, Me = I + _e * ce + Ze, V = I + _e * ce + j, X = I + (_e + 1) * ce + Ze, J = I + (_e + 1) * ce + j;
        D.push(Me, V, J), D.push(Me, J, X);
      }
      I += Fe * ce;
    }
    if (K.length === 0) return;
    const A = new fe();
    A.setAttribute("position", new Mt(K, 3)), A.setAttribute("color", new Mt(Z, 3)), A.setIndex(D), A.computeVertexNormals();
    const E = new et({ vertexColors: true, side: zt }), B = new We(A, E);
    B.frustumCulled = false, d.add(B);
  }), d.__colorMapValues = w, d;
}
function Ls() {
  const e = window;
  return { forceUnit: e.__hekatanForceUnit ?? localStorage.getItem("hk_forceUnit") ?? "tonf", dispUnit: e.__hekatanDispUnit ?? localStorage.getItem("hk_dispUnit") ?? "mm", stressUnit: e.__hekatanStressUnit ?? localStorage.getItem("hk_stressUnit") ?? "tonf/m\xB2" };
}
const Bs = { kN: 1, tonf: 1 / 9.80665, kip: 1 / 4.4482216 }, Rs = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Xs = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76, "kip/ft\xB2": 1 / 47.88026 };
function rt(e, i = 4) {
  return e == null || !isFinite(e) ? "\u2014" : e === 0 ? "0" : Math.abs(e) < 1e-3 || Math.abs(e) > 1e5 ? e.toExponential(i) : e.toFixed(i);
}
const Ds = 16755200, zo = 56831, Ys = 56831, Ns = 56831, kn = 65382;
function Zs(e) {
  const i = new je();
  i.name = "__hekatan_hover", i.renderOrder = 99;
  const y = new rn(1, 16, 16), h = new et({ color: Ds, transparent: true, opacity: 0.85, depthTest: false }), d = new We(y, h);
  d.visible = false, d.renderOrder = 100, i.add(d);
  const _ = new fe(), x = new it({ color: zo, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), w = new Dt(_, x);
  w.visible = false, w.renderOrder = 100, i.add(w);
  const v = new et({ color: zo, transparent: true, opacity: 0.7, depthTest: false }), z = new We(new vo(1, 1, 1, 12), v);
  z.visible = false, z.renderOrder = 100, i.add(z);
  const P = new fe(), b = new et({ color: Ys, transparent: true, opacity: 0.45, side: zt, depthTest: false }), O = new We(P, b);
  O.visible = false, O.renderOrder = 100, i.add(O);
  const ae = new fe(), ie = new it({ color: Ns, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), ue = new Dt(ae, ie);
  ue.visible = false, ue.renderOrder = 100, i.add(ue);
  const k = new et({ color: kn, transparent: true, opacity: 0.95, depthTest: false }), G = new We(y, k);
  G.visible = false, G.renderOrder = 101, i.add(G);
  const he = new et({ color: kn, transparent: true, opacity: 0.85, depthTest: false }), ge = new We(new vo(1, 1, 1, 12), he);
  ge.visible = false, ge.renderOrder = 101, i.add(ge);
  const Pe = new fe(), K = new et({ color: kn, transparent: true, opacity: 0.55, side: zt, depthTest: false }), Z = new We(Pe, K);
  Z.visible = false, Z.renderOrder = 101, i.add(Z);
  const D = new fe(), I = new it({ color: kn, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), A = new Dt(D, I);
  A.visible = false, A.renderOrder = 101, i.add(A);
  let E = null;
  const B = document.createElement("div");
  Object.assign(B.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), B.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(B);
  }, 0);
  function C(j) {
    const Me = e.derivedNodes.rawVal;
    return !Me || j < 0 || j >= Me.length ? null : new m(Me[j][0], Me[j][1], Me[j][2]);
  }
  function N(j, Me) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2;
    const V = e.getActiveCamera();
    if (!V || !e.mesh) return null;
    const X = e.rendererElm.getBoundingClientRect(), J = j - X.left, q = Me - X.top, we = e.derivedNodes.rawVal, de = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!we || !de) return null;
    const ze = /* @__PURE__ */ new Map(), me = (Ye) => {
      if (ze.has(Ye)) return ze.get(Ye);
      const Ae = C(Ye);
      if (!Ae) return ze.set(Ye, null), null;
      const be = Ae.clone().project(V), Ne = (be.x * 0.5 + 0.5) * X.width, Se = (-be.y * 0.5 + 0.5) * X.height, Ie = { x: Ne, y: Se, z: be.z };
      return ze.set(Ye, Ie), Ie;
    }, tt = /* @__PURE__ */ new Set();
    for (const Ye of de) if (Ye) for (const Ae of Ye) tt.add(Ae);
    const De = 8;
    let Be = -1, Ge = De;
    for (let Ye = 0; Ye < we.length; Ye++) {
      if (!tt.has(Ye)) continue;
      const Ae = me(Ye);
      if (!Ae || Ae.z < -1 || Ae.z > 1) continue;
      const be = Ae.x - J, Ne = Ae.y - q, Se = Math.sqrt(be * be + Ne * Ne);
      Se < Ge && (Ge = Se, Be = Ye);
    }
    const Ce = Ls(), Ke = Rs[Ce.dispUnit] ?? 1e3, ot = Bs[Ce.forceUnit] ?? 1;
    if (Be >= 0) {
      const Ye = we[Be];
      let Ae = `Nodo ${Be}
(${Ye[0].toFixed(3)}, ${Ye[1].toFixed(3)}, ${Ye[2].toFixed(3)})`;
      const be = (_c = (_b = e.mesh) == null ? void 0 : _b.deformOutputs) == null ? void 0 : _c.rawVal;
      if (be == null ? void 0 : be.deformations) {
        const Ne = be.deformations.get(Be);
        if (Ne && (Ae += `
\u2500\u2500\u2500\u2500 \u0394 desplaz. \u2500\u2500\u2500\u2500`, Ae += `
Ux = ${rt(Ne[0] * Ke, 3)} ${Ce.dispUnit}`, Ae += `
Uy = ${rt(Ne[1] * Ke, 3)} ${Ce.dispUnit}`, Ae += `
Uz = ${rt(Ne[2] * Ke, 3)} ${Ce.dispUnit}`, (Math.abs(Ne[3]) > 1e-9 || Math.abs(Ne[4]) > 1e-9 || Math.abs(Ne[5]) > 1e-9) && (Ae += `
Rx = ${rt(Ne[3] * 1e3, 3)} mrad`, Ae += `
Ry = ${rt(Ne[4] * 1e3, 3)} mrad`, Ae += `
Rz = ${rt(Ne[5] * 1e3, 3)} mrad`)), be.reactions) {
          const Se = be.reactions.get(Be);
          Se && (Math.abs(Se[0]) > 1e-9 || Math.abs(Se[1]) > 1e-9 || Math.abs(Se[2]) > 1e-9 || Math.abs(Se[3]) > 1e-6 || Math.abs(Se[4]) > 1e-6 || Math.abs(Se[5]) > 1e-6) && (Ae += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, Ae += `
Fx = ${rt(Se[0] * ot)} ${Ce.forceUnit}`, Ae += `
Fy = ${rt(Se[1] * ot)} ${Ce.forceUnit}`, Ae += `
Fz = ${rt(Se[2] * ot)} ${Ce.forceUnit}`, (Math.abs(Se[3]) > 1e-6 || Math.abs(Se[4]) > 1e-6 || Math.abs(Se[5]) > 1e-6) && (Ae += `
Mx = ${rt(Se[3] * ot)} ${Ce.forceUnit}\xB7m`, Ae += `
My = ${rt(Se[4] * ot)} ${Ce.forceUnit}\xB7m`, Ae += `
Mz = ${rt(Se[5] * ot)} ${Ce.forceUnit}\xB7m`));
        }
      }
      return { type: "node", idx: Be, info: Ae };
    }
    const Ft = 5;
    let Ee = -1, Lt = Ft, qe = "frame";
    for (let Ye = 0; Ye < de.length; Ye++) {
      const Ae = de[Ye];
      if (!(!Ae || Ae.length < 2)) {
        if (Ae.length === 2) {
          const be = me(Ae[0]), Ne = me(Ae[1]);
          if (!be || !Ne || be.z < -1 || be.z > 1 || Ne.z < -1 || Ne.z > 1) continue;
          const Se = Us(J, q, be.x, be.y, Ne.x, Ne.y);
          Se < Lt && (Lt = Se, Ee = Ye, qe = "frame");
        } else if (Ae.length === 3 || Ae.length === 4) {
          const be = [];
          let Ne = true;
          for (const Se of Ae) {
            const Ie = me(Se);
            if (!Ie || Ie.z < -1 || Ie.z > 1) {
              Ne = false;
              break;
            }
            be.push(Ie);
          }
          if (!Ne) continue;
          if (Ks(J, q, be)) {
            const Ie = be.reduce((Ue, pt) => Ue + pt.z, 0) / be.length * 1e-3;
            Ie < Lt && (Lt = Ie, Ee = Ye, qe = "shell");
          }
        } else if (Ae.length === 8) {
          const be = [];
          let Ne = true;
          for (const $e of Ae) {
            const ve = me($e);
            if (!ve || ve.z < -1 || ve.z > 1) {
              Ne = false;
              break;
            }
            be.push(ve);
          }
          if (!Ne) continue;
          const Se = Math.min(...be.map(($e) => $e.x)), Ie = Math.max(...be.map(($e) => $e.x)), Ue = Math.min(...be.map(($e) => $e.y)), pt = Math.max(...be.map(($e) => $e.y));
          if (J >= Se && J <= Ie && q >= Ue && q <= pt) {
            const ve = be.reduce((nt, Je) => nt + Je.z, 0) / be.length * 1e-3;
            ve < Lt && (Lt = ve, Ee = Ye, qe = "solid");
          }
        }
      }
    }
    if (Ee >= 0) {
      const Ye = de[Ee];
      let be = `${qe === "frame" ? "Frame" : qe === "shell" ? "Shell" : "Solid"} ${Ee}`;
      const Ne = (_e2 = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e2.rawVal, Se = (_g = (_f = Ne == null ? void 0 : Ne.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, Ee);
      if (Se) {
        Se.name && (be += `
  \u{1F4CB} ${Se.name}`), Se.shape && (be += `
  Shape: ${Se.shape}`);
        const Ie = /concrete|hormig|rect.*sólida/i.test(Se.shape || ""), Ue = Ie ? 100 : 1e3, pt = Ie ? "cm" : "mm", $e = (nt) => {
          const Je = nt * Ue;
          return Math.abs(Je - Math.round(Je)) < 0.05 ? `${Math.round(Je)}` : `${Je.toFixed(1)}`;
        }, ve = [];
        if (Se.D != null && ve.push(`D=${$e(Se.D)}`), Se.B != null && ve.push(`B=${$e(Se.B)}`), Se.TF != null && ve.push(`TF=${$e(Se.TF)}`), Se.TW != null && ve.push(`TW=${$e(Se.TW)}`), Se.t != null && ve.push(`t=${$e(Se.t)}`), ve.length && (be += `
  Dim: ${ve.join(" ")} ${pt}`), Se.material) {
          let nt = Se.material;
          Se.fillMaterial && (nt += ` + FILL "${Se.fillMaterial}"`), be += `
  Mat: ${nt}`;
        }
      } else {
        const Ie = (_i = (_h = Ne == null ? void 0 : Ne.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, Ee), Ue = (_k = (_j = Ne == null ? void 0 : Ne.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, Ee);
        Ie ? (be += `
  ${Ie}`, Ue && !Ie.includes(Ue) && (be += `  (${Ue})`)) : Ue && (be += `
  Material: ${Ue}`);
      }
      if (be += `
nodos: [${Ye.join(", ")}]`, qe === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const Ie = e.mesh.analyzeOutputs.rawVal, Ue = Xs[Ce.stressUnit] ?? 1, pt = [["bendingXX", "Mxx", ot, `${Ce.forceUnit}\xB7m/m`], ["bendingYY", "Myy", ot, `${Ce.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", ot, `${Ce.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", ot, `${Ce.forceUnit}/m`], ["membraneYY", "Nyy", ot, `${Ce.forceUnit}/m`], ["membraneXY", "Nxy", ot, `${Ce.forceUnit}/m`], ["shearX", "Qx", ot, `${Ce.forceUnit}/m`], ["shearY", "Qy", ot, `${Ce.forceUnit}/m`], ["vonMises", "\u03C3VM", Ue, Ce.stressUnit], ["pressure", "p", Ue, Ce.stressUnit]], $e = [];
        for (const [ve, nt, Je, Bt] of pt) {
          const Xt = Ie == null ? void 0 : Ie[ve];
          if (Xt && Xt instanceof Map) {
            const lt = Xt.get(Ee);
            if (lt != null) {
              if (typeof lt == "number") $e.push(`${nt} = ${rt(lt * Je, 3)} ${Bt}`);
              else if (Array.isArray(lt)) {
                let ct = lt[0];
                for (const bt of lt) Math.abs(bt) > Math.abs(ct) && (ct = bt);
                $e.push(`${nt} = ${rt(ct * Je, 3)} ${Bt}`);
              }
            }
          }
        }
        $e.length > 0 && (be += `
\u2500\u2500\u2500\u2500 results \u2500\u2500\u2500\u2500
` + $e.slice(0, 8).join(`
`));
      }
      if (qe === "frame" && ((_m = e.mesh) == null ? void 0 : _m.deformOutputs) && e.mesh.elementInputs) {
        const Ie = e.mesh.deformOutputs.rawVal, Ue = e.mesh.elementInputs.rawVal, pt = Ie == null ? void 0 : Ie.deformations;
        if (pt && Ye.length === 2) {
          const $e = pt.get(Ye[0]), ve = pt.get(Ye[1]), nt = we[Ye[0]], Je = we[Ye[1]];
          if ($e && ve && nt && Je) {
            const Bt = Je[0] - nt[0], Xt = Je[1] - nt[1], lt = Je[2] - nt[2], ct = Math.sqrt(Bt * Bt + Xt * Xt + lt * lt);
            if (ct > 1e-9) {
              const bt = Bt / ct, yn = Xt / ct, Rt = lt / ct, qt = (ve[0] - $e[0]) * bt + (ve[1] - $e[1]) * yn + (ve[2] - $e[2]) * Rt, Kt = ((_n2 = Ue.elasticities) == null ? void 0 : _n2.get(Ee)) ?? 0, xn = ((_o2 = Ue.areas) == null ? void 0 : _o2.get(Ee)) ?? 0, An = ((_p = Ue.momentsOfInertiaY) == null ? void 0 : _p.get(Ee)) ?? 0, Tn = ((_q = Ue.momentsOfInertiaZ) == null ? void 0 : _q.get(Ee)) ?? 0, en = ((_r = Ue.torsionalConstants) == null ? void 0 : _r.get(Ee)) ?? 0, En = ((_s2 = Ue.shearModuli) == null ? void 0 : _s2.get(Ee)) ?? Kt / 2.6, tn = Kt * xn * (qt / ct), Pt = (ve[3] - $e[3]) * bt + (ve[4] - $e[4]) * yn + (ve[5] - $e[5]) * Rt, Tt = En * en * (Pt / ct), Ht = ve[4] - $e[4], Jt = ve[5] - $e[5], gn = Kt * An * Ht / ct, Yt = Kt * Tn * Jt / ct;
              be += `
\u2500\u2500\u2500\u2500 frame \u2500\u2500\u2500\u2500`, be += `
L = ${rt(ct, 3)} m`, be += `
\u0394L = ${rt(qt * Ke, 3)} ${Ce.dispUnit}`, be += `
\u03B5 = ${rt(qt / ct, 6)}`, Math.abs(tn) > 1e-6 && (be += `
N \u2248 ${rt(tn * ot)} ${Ce.forceUnit}`), Math.abs(Tt) > 1e-6 && (be += `
T \u2248 ${rt(Tt * ot)} ${Ce.forceUnit}\xB7m`), Math.abs(gn) > 1e-6 && (be += `
My \u2248 ${rt(gn * ot)} ${Ce.forceUnit}\xB7m`), Math.abs(Yt) > 1e-6 && (be += `
Mz \u2248 ${rt(Yt * ot)} ${Ce.forceUnit}\xB7m`);
            }
          }
        }
      }
      return { type: qe, idx: Ee, info: be };
    }
    return null;
  }
  function ne(j, Me, V) {
    var _a, _b, _c;
    if (d.visible = false, w.visible = false, z.visible = false, O.visible = false, ue.visible = false, !j || !e.mesh) {
      B.style.display = "none", e.render();
      return;
    }
    const X = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (j.type === "node") {
      const de = C(j.idx);
      if (de) {
        const ze = e.derivedNodes.rawVal ?? [];
        let me = 1;
        if (ze.length >= 2) {
          let Be = [1 / 0, 1 / 0, 1 / 0], Ge = [-1 / 0, -1 / 0, -1 / 0];
          for (const Ce of ze) for (let Ke = 0; Ke < 3; Ke++) Ce[Ke] < Be[Ke] && (Be[Ke] = Ce[Ke]), Ce[Ke] > Ge[Ke] && (Ge[Ke] = Ce[Ke]);
          me = Math.max(Ge[0] - Be[0], Ge[1] - Be[1], Ge[2] - Be[2], 0.1);
        }
        const tt = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, De = 0.021 * me * tt;
        d.position.copy(de), d.scale.setScalar(De), d.visible = true;
      }
    } else if (j.type === "frame" && X) {
      const de = X[j.idx], ze = C(de[0]), me = C(de[1]);
      if (ze && me) {
        const tt = ze.clone().add(me).multiplyScalar(0.5), De = me.clone().sub(ze), Be = De.length(), Ke = e.getActiveCamera().position.distanceTo(tt) * 35e-4;
        z.position.copy(tt);
        const ot = new m(0, 1, 0), Ft = ot.clone().cross(De).normalize(), Ee = ot.angleTo(De);
        z.quaternion.setFromAxisAngle(Ft, Ee), z.scale.set(Ke, Be, Ke), z.visible = true;
      }
    } else if (j.type === "shell" && X) {
      const de = X[j.idx], ze = [], me = [];
      for (const tt of de) {
        const De = C(tt);
        if (!De) return;
        ze.push(De.x, De.y, De.z);
      }
      de.length === 4 ? me.push(0, 1, 2, 0, 2, 3) : de.length === 3 && me.push(0, 1, 2), P.setAttribute("position", new Mt(ze, 3)), P.setIndex(me), P.computeVertexNormals(), O.visible = true;
    } else if (j.type === "solid" && X) {
      const de = X[j.idx], ze = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], me = [];
      for (const [tt, De] of ze) {
        const Be = C(de[tt]), Ge = C(de[De]);
        Be && Ge && me.push(Be.x, Be.y, Be.z, Ge.x, Ge.y, Ge.z);
      }
      ae.setAttribute("position", new Mt(me, 3)), ue.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      B.style.display = "none", e.render();
      return;
    }
    B.textContent = j.info, B.style.whiteSpace = "pre-line", B.style.display = "block";
    const q = e.rendererElm.getBoundingClientRect(), we = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? q;
    B.style.left = `${Me - we.left}px`, B.style.top = `${V - we.top}px`, e.render();
  }
  let W = "", H = 0, F = 0;
  const oe = window.__hekatanHoverDebug ?? false, te = (j) => {
    H && cancelAnimationFrame(H), H = requestAnimationFrame(() => {
      var _a, _b, _c;
      const Me = N(j.clientX, j.clientY);
      if (oe && F < 5) {
        const X = e.derivedNodes.rawVal, J = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${j.clientX}, ${j.clientY}) nodes=${(X == null ? void 0 : X.length) ?? 0} elems=${(J == null ? void 0 : J.length) ?? 0} hover=`, Me), F++;
      }
      const V = Me ? `${Me.type}:${Me.idx}` : "";
      if (V !== W) W = V, ne(Me, j.clientX, j.clientY);
      else if (Me) {
        const X = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        B.style.left = `${j.clientX - X.left}px`, B.style.top = `${j.clientY - X.top}px`;
      }
    });
  };
  let le = null;
  const re = () => {
    W = "", d.visible = false, w.visible = false, z.visible = false, O.visible = false, ue.visible = false, B.style.display = "none", e.render();
  }, Fe = (j) => {
    const Me = e.rendererElm.getBoundingClientRect(), V = j.clientX - Me.left, X = j.clientY - Me.top;
    (V < -2 || X < -2 || V > Me.width + 2 || X > Me.height + 2) && (le && clearTimeout(le), le = window.setTimeout(re, 200));
  }, ce = () => {
    le && (clearTimeout(le), le = null);
  };
  e.rendererElm.addEventListener("pointermove", te), e.rendererElm.addEventListener("pointerleave", Fe), e.rendererElm.addEventListener("pointerenter", ce);
  let _e = null;
  e.rendererElm.addEventListener("pointerdown", (j) => {
    j.button === 0 && (_e = { x: j.clientX, y: j.clientY });
  }), e.rendererElm.addEventListener("pointerup", (j) => {
    if (j.button !== 0 || !_e) return;
    const Me = j.clientX - _e.x, V = j.clientY - _e.y;
    if (_e = null, Me * Me + V * V > 9) return;
    const X = N(j.clientX, j.clientY);
    X ? (E = { type: X.type, idx: X.idx }, Ze()) : (E = null, Ze());
  });
  function Ze() {
    var _a, _b;
    if (G.visible = false, ge.visible = false, Z.visible = false, A.visible = false, !E || !e.mesh) {
      e.render();
      return;
    }
    const j = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (E.type === "node") {
      const Me = C(E.idx);
      if (Me) {
        const V = e.derivedNodes.rawVal ?? [];
        let X = 1;
        if (V.length >= 2) {
          let we = [1 / 0, 1 / 0, 1 / 0], de = [-1 / 0, -1 / 0, -1 / 0];
          for (const ze of V) for (let me = 0; me < 3; me++) ze[me] < we[me] && (we[me] = ze[me]), ze[me] > de[me] && (de[me] = ze[me]);
          X = Math.max(de[0] - we[0], de[1] - we[1], de[2] - we[2], 0.1);
        }
        const J = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, q = 0.025 * X * J;
        G.position.copy(Me), G.scale.setScalar(q), G.visible = true;
      }
    } else if (E.type === "frame" && j) {
      const Me = j[E.idx], V = C(Me[0]), X = C(Me[1]);
      if (V && X) {
        const J = V.clone().add(X).multiplyScalar(0.5), q = X.clone().sub(V), we = q.length(), me = e.getActiveCamera().position.distanceTo(J) * 35e-4;
        ge.position.copy(J);
        const tt = new m(0, 1, 0), De = tt.clone().cross(q).normalize(), Be = tt.angleTo(q);
        ge.quaternion.setFromAxisAngle(De, Be), ge.scale.set(me, we, me), ge.visible = true;
      }
    } else if (E.type === "shell" && j) {
      const Me = j[E.idx], V = [], X = [];
      for (const J of Me) {
        const q = C(J);
        if (!q) return;
        V.push(q.x, q.y, q.z);
      }
      Me.length === 4 ? X.push(0, 1, 2, 0, 2, 3) : Me.length === 3 && X.push(0, 1, 2), Pe.setAttribute("position", new Mt(V, 3)), Pe.setIndex(X), Pe.computeVertexNormals(), Z.visible = true;
    } else if (E.type === "solid" && j) {
      const Me = j[E.idx], V = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], X = [];
      for (const [J, q] of V) {
        const we = C(Me[J]), de = C(Me[q]);
        we && de && X.push(we.x, we.y, we.z, de.x, de.y, de.z);
      }
      D.setAttribute("position", new Mt(X, 3)), A.visible = true;
    }
    e.render();
  }
  return $.derive(() => {
    e.derivedNodes.val, E && Ze();
  }), i;
}
function Us(e, i, y, h, d, _) {
  const x = d - y, w = _ - h, v = x * x + w * w;
  if (v < 1e-9) {
    const ie = e - y, ue = i - h;
    return Math.sqrt(ie * ie + ue * ue);
  }
  let z = ((e - y) * x + (i - h) * w) / v;
  z = Math.max(0, Math.min(1, z));
  const P = y + z * x, b = h + z * w, O = e - P, ae = i - b;
  return Math.sqrt(O * O + ae * ae);
}
function Ks(e, i, y) {
  let h = false;
  for (let d = 0, _ = y.length - 1; d < y.length; _ = d++) {
    const x = y[d].x, w = y[d].y, v = y[_].x, z = y[_].y;
    w > i != z > i && e < (v - x) * (i - w) / (z - w + 1e-12) + x && (h = !h);
  }
  return h;
}
function Po(e, i = 8) {
  const y = document.createElement("div");
  y.id = "legend", setTimeout(() => {
    $.derive(() => {
      Vn.val, y.style.background = ds();
    });
  });
  const h = document.createElement("div");
  h.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", y.appendChild(h), setTimeout(() => {
    $.derive(() => {
      h.textContent = Jn.val ? `[${Jn.val}]` : "";
    });
  });
  const d = Array.from({ length: i + 1 }, (v, z) => z / i).reverse();
  let _, x;
  d.forEach((v, z) => {
    _ = document.createElement("div"), _.id = `marker-${z}`, _.className = "marker", _.style.marginTop = z == 0 ? "0px" : `calc(${50 / i}vh - 1px)`, x = document.createElement("p"), x.id = `marker-text-${z}`, _.append(x), y.append(_);
  });
  const w = [];
  return y.querySelectorAll("p").forEach((v) => w.push(v)), setTimeout(() => {
    $.derive(() => {
      d.forEach((v, z) => {
        const P = w[z];
        P && (P.innerText = Hs(e.val, v).toString());
      });
    });
  }), y;
}
function Hs(e, i) {
  const y = jn.val;
  if (y) return (y[0] + i * (y[1] - y[0])).toPrecision(3);
  const h = e.filter((x) => Number.isFinite(x));
  if (h.length === 0) return "0";
  let d = Math.min(...h);
  const _ = Math.max(...h);
  return d >= 0 && _ > 0 && (d = 0), (d + i * (_ - d)).toPrecision(3);
}
function sa({ mesh: e, settingsObj: i, drawingObj: y, objects3D: h, solids: d }) {
  ls.DEFAULT_UP = new m(0, 0, 1);
  const _ = document.createElement("div"), x = new ns(), w = new os(45, 1, 0.1, 2 * 1e6), v = new ss(-10, 10, 10, -10, -1e3, 2e6);
  let z = w;
  const P = new as({ antialias: true });
  P.localClippingEnabled = true;
  const b = new bo(w, P.domElement);
  b.enableDamping = true, b.dampingFactor = 0.1, b.screenSpacePanning = true, b.zoomSpeed = 0.8, b.panSpeed = 1.2, b.rotateSpeed = 0.9, b.keyPanSpeed = 12, b.listenToKeyEvents(window), b.touches = { ONE: _n.ROTATE, TWO: _n.DOLLY_PAN }, P.domElement.addEventListener("wheel", (V) => {
    if (!V.ctrlKey && Math.abs(V.deltaX) > Math.abs(V.deltaY) * 1.5) {
      V.preventDefault();
      const X = b.target, J = new m().subVectors(w.position, X), q = new m();
      q.crossVectors(w.up, J).normalize();
      const de = J.length() * 1e-3 * b.panSpeed;
      X.addScaledVector(q, V.deltaX * de), w.position.addScaledVector(q, V.deltaX * de), b.update();
    }
  }, { passive: false });
  const O = new Kn(new m(-1, 0, 0), 0), ae = new Kn(new m(0, -1, 0), 0), ie = new Kn(new m(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function ue() {
    const V = window.__hekatanClip, X = [];
    V.enableX && (O.normal.set(V.invertX ? 1 : -1, 0, 0), O.constant = V.invertX ? -V.posX : V.posX, X.push(O)), V.enableY && (ae.normal.set(0, V.invertY ? 1 : -1, 0), ae.constant = V.invertY ? -V.posY : V.posY, X.push(ae)), V.enableZ && (ie.normal.set(0, 0, V.invertZ ? 1 : -1), ie.constant = V.invertZ ? -V.posZ : V.posZ, X.push(ie)), P.clippingPlanes = X, x.traverse((q) => {
      const we = q;
      if (we.material) {
        const de = Array.isArray(we.material) ? we.material : [we.material];
        for (const ze of de) ze.clippingPlanes = X, ze.needsUpdate = true;
      }
    });
    const J = window.__hekatanPanes ?? [];
    for (const q of J) try {
      q && typeof q.refresh == "function" && q.refresh();
    } catch {
    }
    P.render(x, z);
  }
  ue(), window.__hekatanClipApply = ue;
  const k = fs(i), G = $.derive(() => Math.pow(10, k.displayScale.val / 10)), he = Gs(e, k), ge = () => {
    const V = [];
    return k.gridXY.rawVal && V.push("xy"), k.gridXZ.rawVal && V.push("xz"), k.gridYZ.rawVal && V.push("yz"), V;
  }, Pe = () => {
    const V = k.gridStep.rawVal, X = Math.max(V, k.gridMajor.rawVal);
    return { planes: ge(), majorStep: X, minorStep: V };
  };
  let K = Gn(k.gridSize.rawVal, Pe());
  K.visible = k.gridVisible.rawVal, window.__hekatanSnap2D = k.cursorSnap.rawVal;
  const Z = () => {
    const V = Math.max(0, Math.min(1, k.gridOpacity.rawVal));
    K.traverse((X) => {
      const J = X.material;
      if (!J || !("opacity" in J)) return;
      const q = X.name ?? "";
      let we = 0.35;
      q.includes("border") ? we = 1 : q.includes("major") && (we = 0.75), J.opacity = V * we;
    });
  };
  Z(), _.appendChild(us(k, e, d)), _.setAttribute("id", "viewer"), _.appendChild(P.domElement), P.setPixelRatio(window.devicePixelRatio);
  const D = jt();
  P.setClearColor(D.background, 1);
  const I = k.gridSize.rawVal, A = I * 0.5 + I * 0.5 / Math.tan(45 * 0.5);
  w.position.set(0, 0, A), w.up.set(0, 1, 0), b.target.set(0, 0, 0), b.minDistance = 0.1, b.maxDistance = 1e4, _.__settings = k, b.zoomSpeed = 1, b._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, b.update();
  let E = So(k.gridSize.rawVal, k.flipAxes.rawVal);
  x.add(K, E), $.derive(() => {
    window.__hekatanGridPlaneXY = k.gridXY.val, window.__hekatanGridPlaneXZ = k.gridXZ.val, window.__hekatanGridPlaneYZ = k.gridYZ.val;
  });
  let B = true;
  $.derive(() => {
    const V = k.gridVisible.val;
    if (B) {
      B = false;
      return;
    }
    K.visible = V, te();
  });
  let C = true;
  $.derive(() => {
    if (k.gridOpacity.val, C) {
      C = false;
      return;
    }
    Z(), te();
  }), $.derive(() => {
    const V = k.cursorSnap.val;
    window.__hekatanSnap2D = V;
  });
  let N = true;
  $.derive(() => {
    var _a;
    const V = k.gridSize.val, X = k.flipAxes.val;
    if (k.gridXY.val, k.gridXZ.val, k.gridYZ.val, k.gridStep.val, k.gridMajor.val, N) {
      N = false;
      return;
    }
    x.remove(K), (_a = K.traverse) == null ? void 0 : _a.call(K, (we) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = we.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = we.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), K = Gn(V, Pe()), K.visible = k.gridVisible.rawVal, x.add(K), Z(), x.remove(E), E.traverse((we) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = we.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = we.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), E = So(V, X), x.add(E);
    const J = V * 0.5 + V * 0.5 / Math.tan(45 * 0.5);
    w.position.distanceTo(b.target), Math.abs(w.position.x) < 0.1 && Math.abs(w.position.y) < 0.1 && w.position.z > 0 ? w.position.set(0, 0, J) : w.position.set(0.5 * V, -J, 0.5 * V), b.target.set(0, 0, 0), b.minDistance = Math.max(0.05, V * 0.01), b.maxDistance = Math.max(50, V * 50), b.update(), te();
  }), new ResizeObserver((V) => {
    var _a, _b;
    for (const X of V) {
      const J = (_a = X.target) == null ? void 0 : _a.clientWidth, q = (_b = X.target) == null ? void 0 : _b.clientHeight;
      if (J === 0 || q === 0) continue;
      const de = (W ? J / 2 : J) / q;
      w.aspect = de, w.updateProjectionMatrix();
      const ze = v.top;
      if (v.left = -ze * de, v.right = ze * de, v.updateProjectionMatrix(), H && H.isPerspectiveCamera) H.aspect = de, H.updateProjectionMatrix();
      else if (H && H.isOrthographicCamera) {
        const me = H, tt = me.top;
        me.left = -tt * de, me.right = tt * de, me.updateProjectionMatrix();
      }
      P.setSize(J, q), te();
    }
  }).observe(_), b.addEventListener("change", te), $.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, k.displayScale.val, k.nodes.val, k.elements.val, (_g = k.edges) == null ? void 0 : _g.val, k.elemColumns.val, k.elemBeams.val, k.nodesIndexes.val, k.elementsIndexes.val, k.orientations.val, k.sections.val, k.secColumns.val, k.secBeams.val, k.secFloor.val, k.supports.val, k.loads.val, k.deformedShape.val, k.nodeResults.val, k.frameResults.val, k.shellResults.val, (_h = k.solidResults) == null ? void 0 : _h.val, setTimeout(te);
  });
  let W = false, H = null, F = null, oe = false;
  function te() {
    const V = _.clientWidth || 1, X = _.clientHeight || 1;
    if (!W || !H) {
      P.setScissorTest(false), P.setViewport(0, 0, V, X), P.render(x, z);
      return;
    }
    const J = V / 2;
    P.setScissorTest(true), P.setViewport(0, 0, J, X), P.setScissor(0, 0, J, X), P.render(x, z), P.setViewport(J, 0, J, X), P.setScissor(J, 0, J, X), P.render(x, H), P.setScissorTest(false);
  }
  function le(V) {
    z = V, b.object = V, b.update(), te();
  }
  function re(V, X) {
    W = V, X && (H = X);
    const J = _.clientWidth || 1, q = _.clientHeight || 1, de = (V ? J / 2 : J) / q;
    w.isPerspectiveCamera && (w.aspect = de, w.updateProjectionMatrix());
    const ze = v.top;
    if (v.left = -ze * de, v.right = ze * de, v.updateProjectionMatrix(), V && H) {
      if (F ? (F.object = H, F.update()) : (F = new bo(H, P.domElement), F.enableDamping = true, F.dampingFactor = 0.1, F.screenSpacePanning = true, F.zoomSpeed = 0.8, F.panSpeed = 1.2, F.rotateSpeed = 0.9, F.touches = { ONE: _n.ROTATE, TWO: _n.DOLLY_PAN }, F.target.copy(b.target), F.addEventListener("change", te), F.enabled = false), !oe) {
        const me = (tt) => {
          if (!W || !F) return;
          const De = P.domElement.getBoundingClientRect(), Be = tt.clientX - De.left, Ge = De.width / 2, Ce = Be >= Ge;
          b.enabled = !Ce, F.enabled = Ce;
        };
        P.domElement.addEventListener("pointerdown", me, true), P.domElement.addEventListener("wheel", me, { capture: true, passive: true }), oe = true;
      }
    } else V || (b.enabled = true, F && (F.enabled = false));
    _.__splitMode = V, window.__hekatanSplitMode = V, window.__hekatanSplitCamera = V ? H : null, te();
  }
  if (e) {
    x.add(hs(k, he, G), rs(e, k, he), ys(k, he, G), xs(e, k, he, G), ms(e, k, he, G), ws(e, k, he, G), Ms(e, k, he, G), _s(e, k, he, G), Ps(e, k, he, G), Ss(e, k, he, G));
    const V = Zs({ scene: x, rendererElm: P.domElement, getActiveCamera: () => z, derivedNodes: he, derivedDisplayScale: G, mesh: e, settings: k, render: te });
    x.add(V);
    const X = js(e, k), J = Vs(e, k, he, X), q = Po(X);
    x.add(J), _.appendChild(q);
    const we = Is(e, k, he);
    x.add(we);
    const de = we.__colorMapValues, ze = Po(de);
    ze.id = "frame-legend", _.appendChild(ze), $.derive(() => {
      var _a;
      const me = k.shellResults.val != "none", tt = (((_a = k.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", De = me || tt, Be = k.frameResults.val.startsWith("contour:");
      q.hidden = !De, J.visible = De, ze.hidden = !Be;
    });
  }
  if (d) {
    const V = new is(16777215, 0.5);
    x.add(V);
    const X = new Mo(16777215, 0.5);
    X.position.set(30, 25, -10), X.shadow.mapSize.width = 1024, X.shadow.mapSize.height = 1024, x.add(X);
    const J = 10;
    X.shadow.camera.left = -J, X.shadow.camera.right = J, X.shadow.camera.top = J, X.shadow.camera.bottom = -J, X.shadow.camera.far = 1e3;
    const q = new Mo(16777215, 0.5);
    q.color.setHSL(11, 43, 96), q.position.set(-10, 0, 30), x.add(q), $.derive(() => {
      (d == null ? void 0 : d.val.length) && (x.remove(...d.oldVal), x.add(...d.rawVal), te());
    }), $.derive(() => {
      d.rawVal.forEach((we) => we.visible = k.solids.val), te();
    });
  }
  if (h) {
    const V = [], X = (q) => {
      var _a;
      return ((_a = q == null ? void 0 : q.userData) == null ? void 0 : _a.isCota) ? k.showCotas.val : k.custom3D.val;
    }, J = () => {
      for (const q of V) q.visible = X(q);
      te();
    };
    $.derive(() => {
      const q = h.val;
      V.length && (x.remove(...V), V.length = 0), q.length && (x.add(...q), V.push(...q), J()), te();
    }), $.derive(() => {
      k.custom3D.val, J();
    }), $.derive(() => {
      k.showCotas.val, J();
    });
  }
  y && Cs({ drawingObj: y, gridObj: K, scene: x, getActiveCamera: () => z, controls: b, gridSize: I, derivedDisplayScale: G, rendererElm: P.domElement, viewerRender: te }), Fo((V, X) => {
    var _a;
    P.setClearColor(X.background, 1), x.remove(K), (_a = K.traverse) == null ? void 0 : _a.call(K, (J) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = J.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = J.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), K = Gn(k.gridSize.rawVal, { planes: ge() }), x.add(K), _.style.setProperty("--awatif-legend-color", X.legendMarker), te();
  });
  const Fe = { scene: x, perspCamera: w, orthoCamera: v, get camera() {
    return z;
  }, controls: b, renderer: P, rendererElm: P.domElement, render: te, setActiveCamera: le, setSplitMode: re, get splitMode() {
    return W;
  }, get splitCamera() {
    return H;
  }, settings: k };
  _.__ctx = Fe;
  const ce = document.createElement("div");
  ce.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const _e = (V, X, J) => {
    const q = document.createElement("button");
    return q.textContent = V, q.title = X, q.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), q.onmouseenter = () => {
      q.style.background = "rgba(70,70,70,0.9)";
    }, q.onmouseleave = () => {
      q.style.background = "rgba(40,40,40,0.85)";
    }, q.onclick = (we) => {
      we.preventDefault(), J();
    }, q;
  }, Ze = (V, X) => {
    const J = b.target, q = new m().subVectors(z.position, J), we = q.length(), de = new m(), ze = new m();
    de.crossVectors(z.up, q).normalize(), ze.copy(z.up).normalize();
    const me = we * 0.05;
    J.addScaledVector(de, -V * me), J.addScaledVector(ze, X * me), z.position.addScaledVector(de, -V * me), z.position.addScaledVector(ze, X * me), b.update(), te();
  }, j = (V) => {
    const X = new m().subVectors(z.position, b.target);
    X.multiplyScalar(V), z.position.copy(b.target).add(X), b.update(), te();
  }, Me = () => {
    const V = document.createElement("div");
    return V.style.cssText = "width:32px;height:32px;", V;
  };
  return ce.append(Me()), ce.append(_e("\u2191", "Pan arriba", () => Ze(0, 1))), ce.append(_e("\u2295", "Zoom in", () => j(0.85))), ce.append(_e("\u2190", "Pan izquierda", () => Ze(-1, 0))), ce.append(_e("\u2302", "Reset vista", () => {
    b.reset(), te();
  })), ce.append(_e("\u2192", "Pan derecha", () => Ze(1, 0))), ce.append(_e("\u2296", "Zoom out", () => j(1.18))), ce.append(_e("\u2193", "Pan abajo", () => Ze(0, -1))), ce.append(Me()), getComputedStyle(_).position === "static" && (_.style.position = "relative"), _.appendChild(ce), _;
}
function Gs(e, i) {
  return $.derive(() => {
    var _a, _b, _c, _d;
    if (!i.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const y = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], h = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!h || y.length === 0) return y;
    const d = i.deformScale.val, _ = i.deformScale.val * i.deformScaleZ.val, x = Number.isFinite(d) ? d : 1, w = Number.isFinite(_) ? _ : 1;
    return y.map((v, z) => {
      var _a2;
      const P = ((_a2 = h.get(z)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], b = Number.isFinite(P[0]) ? P[0] : 0, O = Number.isFinite(P[1]) ? P[1] : 0, ae = Number.isFinite(P[2]) ? P[2] : 0;
      return [v[0] + b * x, v[1] + O * x, v[2] + ae * w];
    });
  });
}
const jn = $.state(null), Jn = $.state(""), Ws = $.state("kN"), qs = $.state("mm"), Js = $.state("kN/m\xB2"), Qs = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, Co = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Os = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function js(e, i) {
  const y = $.state([]);
  let h;
  return ((d) => {
    d.bendingXX = "bendingXX", d.bendingYY = "bendingYY", d.bendingXY = "bendingXY", d.membraneXX = "membraneXX", d.membraneYY = "membraneYY", d.membraneXY = "membraneXY", d.tranverseShearX = "tranverseShearX", d.tranverseShearY = "tranverseShearY", d.vonMises = "vonMises", d.pressure = "pressure", d.displacementX = "displacementX", d.displacementY = "displacementY", d.displacementZ = "displacementZ";
  })(h || (h = {})), $.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const d = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), ie = (Fe, ce) => {
      Fe == null ? void 0 : Fe.forEach((_e2, Ze) => {
        const j = e.elements.val[Ze];
        if (j) for (let Me = 0; Me < j.length; Me++) ce.set(j[Me], [_e2[Me] ?? _e2[0]]);
      });
    };
    ie((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, d), ie((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, _), ie((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, x), ie((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, w), ie((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, v), ie((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, z), ie((_n2 = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n2.tranverseShearX, P), ie((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, b), ie((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, O), ie((_t = (_s2 = e.analyzeOutputs) == null ? void 0 : _s2.val) == null ? void 0 : _t.pressure, ae);
    const ue = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, k = (_w = i.solidResults) == null ? void 0 : _w.val, he = k && k !== "none" ? k : i.shellResults.val, ge = ue == null ? void 0 : ue[he], Pe = { bendingXX: [d, 0], bendingYY: [_, 0], bendingXY: [x, 0], membraneXX: [w, 0], membraneYY: [v, 0], membraneXY: [z, 0], tranverseShearX: [P, 0], tranverseShearY: [b, 0], vonMises: [O, 0], pressure: [ae, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, K = i.shellResults.val, Z = Ws.val, D = qs.val, I = K === "displacementX" || K === "displacementY" || K === "displacementZ", A = K === "bendingXX" || K === "bendingYY" || K === "bendingXY", E = K === "membraneXX" || K === "membraneYY" || K === "membraneXY", B = K === "vonMises" || K === "pressure", C = K === "tranverseShearX" || K === "tranverseShearY", N = (_D = i.solidResults) == null ? void 0 : _D.val, ne = N === "vonMises" || N === "sigmaXX" || N === "sigmaYY" || N === "sigmaZZ" || N === "tauXY" || N === "tauYZ" || N === "tauXZ", W = N === "ux" || N === "uy" || N === "uz", H = Js.val, F = ne ? Os[H] : W || I ? Co[D] : A || E || B || C ? 1 / Qs[Z] : 1, oe = ne ? H : W || I ? D : A ? `${Z}\xB7m/m` : E ? `${Z}/m\xB2` : B ? `${Z}/m\xB2` : C ? `${Z}/m` : "";
    Jn.val = oe, jn.val = Array.isArray(ge) && ge.length === 2 ? [ge[0] * F, ge[1] * F] : null;
    const le = N && N !== "none" ? [O, 0] : Pe[K], re = [];
    e.nodes.val.forEach((Fe, ce) => {
      const _e2 = le;
      if (!_e2 || !_e2[0] || typeof _e2[0].has != "function") return;
      if (!_e2[0].has(ce)) {
        re.push(Number.NaN);
        return;
      }
      const Ze = _e2[0].get(ce), j = Ze ? Ze[_e2[1]] ?? 0 : 0;
      re.push(j * F);
    }), y.val = re;
  }), y;
}
export {
  qs as a,
  Js as b,
  Ws as c,
  ps as d,
  Po as e,
  sa as g
};
