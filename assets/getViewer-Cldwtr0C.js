import { N as It, a6 as bn, q as Ho, v as L, a7 as qo, D as Ft, M as He, B as ue, F as gt, a8 as Jo, x as it, a9 as Qo, aa as Oo, h as mo, ab as wo, r as en, ac as zn, ad as Pn, a4 as Vo, _ as Oe, a as lt, L as Xt, w as Ao, b as jo, ae as es, f as et, V as w, $ as jt, af as Kn, H as To, d as _t, z as Cn, ag as Fn, t as ts, o as ns, I as Gt, a2 as yn, E as yo, S as rn, m as Wn, ah as xn, g as xo, i as go, j as vo, C as Mo, K as os, U as ss, W as as, X as is, T as _n, P as Gn, Y as ls, Z as bo, O as rs } from "./theme-Co6w-pfC.js";
import { T as xt, O as _o } from "./Text-2W5davkr.js";
import { P as Eo } from "./tweakpane-BXg6ZhiP.js";
import { e as cs } from "./styles-CcTqhjpF.js";
class $o {
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
    const h = 1 / this.n, u = new It(), S = new It();
    this.lut.length = 0, this.lut.push(new It(this.map[0][1]));
    for (let x = 1; x < y; x++) {
      const m = x * h;
      for (let v = 0; v < this.map.length - 1; v++) if (m > this.map[v][0] && m <= this.map[v + 1][0]) {
        const z = this.map[v][0], C = this.map[v + 1][0];
        u.setHex(this.map[v][1], bn), S.setHex(this.map[v + 1][1], bn);
        const _ = new It().lerpColors(u, S, (m - z) / (C - z));
        this.lut.push(_);
      }
    }
    return this.lut.push(new It(this.map[this.map.length - 1][1])), this;
  }
  copy(i) {
    return this.lut = i.lut, this.map = i.map, this.n = i.n, this.minV = i.minV, this.maxV = i.maxV, this;
  }
  getColor(i) {
    i = Ho.clamp(i, this.minV, this.maxV), i = (i - this.minV) / (this.maxV - this.minV);
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
    const y = i.getContext("2d", { alpha: false }), h = y.getImageData(0, 0, 1, this.n), u = h.data;
    let S = 0;
    const x = 1 / this.n, m = new It(), v = new It(), z = new It();
    for (let C = 1; C >= 0; C -= x) for (let _ = this.map.length - 1; _ >= 0; _--) if (C < this.map[_][0] && C >= this.map[_ - 1][0]) {
      const W = this.map[_ - 1][0], we = this.map[_][0];
      m.setHex(this.map[_ - 1][1], bn), v.setHex(this.map[_][1], bn), z.lerpColors(m, v, (C - W) / (we - W)), u[S * 4] = Math.round(z.r * 255), u[S * 4 + 1] = Math.round(z.g * 255), u[S * 4 + 2] = Math.round(z.b * 255), u[S * 4 + 3] = 255, S += 1;
    }
    return y.putImageData(h, 0, 0), i;
  }
}
const Hn = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, Io = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]], ds = { safe: [[0, 224, 13, 107], [0.13, 221, 20, 50], [0.27, 252, 99, 39], [0.4, 254, 161, 47], [0.52, 238, 234, 25], [0.64, 5, 193, 69], [0.78, 7, 178, 244], [0.9, 4, 132, 213], [1, 90, 175, 230]], csi: Io, jet_r: [[0, 200, 0, 0], [0.15, 255, 80, 0], [0.32, 255, 200, 0], [0.48, 180, 255, 0], [0.6, 0, 230, 90], [0.74, 0, 220, 230], [0.88, 0, 110, 255], [1, 0, 0, 180]], jet: [[0, 0, 0, 180], [0.12, 0, 110, 255], [0.26, 0, 220, 230], [0.4, 0, 230, 90], [0.52, 180, 255, 0], [0.68, 255, 200, 0], [0.85, 255, 80, 0], [1, 200, 0, 0]], viridis: [[0, 68, 1, 84], [0.25, 59, 82, 139], [0.5, 33, 145, 140], [0.75, 94, 201, 98], [1, 253, 231, 37]] }, Vn = L.state("safe");
function Lo(e) {
  e = Math.max(0, Math.min(1, e));
  const i = ds[Vn.val] ?? Io;
  for (let h = 0; h < i.length - 1; h++) {
    const [u, S, x, m] = i[h], [v, z, C, _] = i[h + 1];
    if (e <= v) {
      const W = (e - u) / (v - u);
      return [S + (z - S) * W, x + (C - x) * W, m + (_ - m) * W];
    }
  }
  const y = i[i.length - 1];
  return [y[1], y[2], y[3]];
}
function So() {
  const i = new Uint8Array(1024);
  for (let h = 0; h < 256; h++) {
    const u = h / 255, [S, x, m] = Lo(u);
    i[h * 4 + 0] = S, i[h * 4 + 1] = x, i[h * 4 + 2] = m, i[h * 4 + 3] = 255;
  }
  const y = new Qo(i, 256, 1, Oo);
  return y.minFilter = mo, y.magFilter = mo, y.wrapS = wo, y.wrapT = wo, y.needsUpdate = true, y;
}
function ps() {
  const i = [];
  for (let y = 0; y <= 12; y++) {
    const h = 1 - y / 12, [u, S, x] = Lo(h);
    i.push(`rgb(${u | 0},${S | 0},${x | 0}) ${(y / 12 * 100).toFixed(0)}%`);
  }
  return `linear-gradient(${i.join(",")})`;
}
function us(e, i, y) {
  new $o();
  const h = So(), u = new qo({ uniforms: { cmap: { value: h }, ambient: { value: 0.95 } }, vertexShader: `
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
  L.derive(() => {
    var _a;
    Vn.val;
    const x = u.uniforms.cmap.value;
    u.uniforms.cmap.value = So(), (_a = x == null ? void 0 : x.dispose) == null ? void 0 : _a.call(x);
  });
  const S = new He(new ue(), u);
  return S.renderOrder = -1, S.frustumCulled = false, S.userData.isShellArea = true, S.name = "__hekatan_shell_colormap", L.derive(() => {
    S.geometry.setAttribute("position", new gt(e.val.flat(), 3));
    const x = [];
    for (const b of i.val) b.length === 3 ? x.push(b[0], b[1], b[2]) : b.length === 4 && (x.push(b[0], b[1], b[2]), x.push(b[0], b[2], b[3]));
    S.geometry.setIndex(new Jo(x, 1));
    const m = y.val.filter((b) => Number.isFinite(b));
    let v, z;
    const C = to.val;
    if (C ? (z = C[0], v = C[1]) : (v = m.length ? Math.max(...m) : 1, z = m.length ? Math.min(...m) : 0, z >= 0 && v > 0 && (z = 0)), v === z) {
      const b = Math.max(Math.abs(v) * 1e-6, 1e-9);
      v += b, z -= b;
    }
    const _ = C && C[0] > C[1], W = Math.min(z, v), we = Math.max(z, v), de = we - W, ee = new Float32Array(y.val.length);
    for (let b = 0; b < y.val.length; b++) {
      const Q = y.val[b];
      if (!Number.isFinite(Q)) {
        ee[b] = -1;
        continue;
      }
      const ke = ((_ ? we + W - Q : Q) - W) / de;
      ee[b] = Math.max(0, Math.min(1, ke));
    }
    S.geometry.setAttribute("scalar", new it(ee, 1));
  }), S;
}
function fs(e, i, y) {
  const h = document.createElement("div"), u = new Eo({ title: "Settings", expanded: true, container: h });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(u), h.setAttribute("id", "settings");
  const S = "hk_settingsPos";
  let x = null;
  try {
    const _ = localStorage.getItem(S);
    _ && (x = JSON.parse(_));
  } catch {
  }
  h.style.cssText = ["position:fixed", x ? `left:${x.left}px` : "left:8px", x ? `top:${x.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const m = () => {
    const _ = h.querySelector(".tp-rotv_b");
    if (!_) {
      setTimeout(m, 200);
      return;
    }
    _.style.cursor = "move", _.style.userSelect = "none";
    let W = false, we = 0, de = 0, ee = 0, b = 0;
    _.addEventListener("mousedown", (Q) => {
      W = true, we = Q.clientX, de = Q.clientY;
      const fe = h.getBoundingClientRect();
      ee = fe.left, b = fe.top, h.style.left = `${ee}px`, h.style.top = `${b}px`;
    }), window.addEventListener("mousemove", (Q) => {
      if (!W) return;
      const fe = Q.clientX - we, ke = Q.clientY - de, _e = Math.max(0, Math.min(window.innerWidth - 40, ee + fe)), I = Math.max(0, Math.min(window.innerHeight - 40, b + ke));
      h.style.left = `${_e}px`, h.style.top = `${I}px`;
    }), window.addEventListener("mouseup", () => {
      if (W) {
        W = false;
        try {
          localStorage.setItem(S, JSON.stringify({ left: parseFloat(h.style.left), top: parseFloat(h.style.top) }));
        } catch {
        }
      }
    });
  };
  if (m(), i == null ? void 0 : i.nodes) {
    u.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 0.5 });
    const _ = u.addFolder({ title: "\u{1F4D0} Grid", expanded: false });
    _.addBinding(e.gridSize, "val", { label: "Dimensi\xF3n (m)", min: 1, max: 100, step: 1 }), _.addBinding(e.gridStep, "val", { label: "Separaci\xF3n grid (m)", min: 0.05, max: 5, step: 0.05 }), _.addBinding(e.gridMajor, "val", { label: "Separaci\xF3n mayores (m)", min: 0.1, max: 50, step: 0.1 }), _.addBinding(e.cursorSnap, "val", { label: "Paso cursor (m)", min: 0.05, max: 5, step: 0.05 }), _.addBinding(e.gridVisible, "val", { label: "Mostrar" }), _.addBinding(e.gridOpacity, "val", { label: "Opacidad", min: 0, max: 1, step: 0.05 }), _.addBinding(e.gridXY, "val", { label: "Plano XY (planta)" }), _.addBinding(e.gridXZ, "val", { label: "Plano XZ (frontal)" }), _.addBinding(e.gridYZ, "val", { label: "Plano YZ (lateral)" });
    const W = u.addFolder({ title: "\u{1F441} Ver", expanded: false });
    W.addBinding(e.nodes, "val", { label: "Nodes" }), W.addBinding(e.elements, "val", { label: "Elements" }), W.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), W.addBinding(e.faces, "val", { label: "  Caras (fill)" }), W.addBinding(e.elemFrames, "val", { label: "  Frames (todos)" }), W.addBinding(e.elemColumns, "val", { label: "    Columnas" }), W.addBinding(e.elemBeams, "val", { label: "    Vigas" }), W.addBinding(e.elemZapatas, "val", { label: "  Zapatas (shells z\u22640)" }), W.addBinding(e.elemLosas, "val", { label: "  Losas (shells z>0)" }), W.addBinding(e.colorByType, "val", { label: "  \u{1F3A8} Color por tipo" }), W.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), W.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), W.addBinding(e.orientations, "val", { label: "Orientations" }), W.addBinding(e.sections, "val", { label: "Sections" }), W.addBinding(e.sectionLabels, "val", { label: "  Sec. Labels (30x50)" }), W.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), W.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), W.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } });
  }
  if ((i == null ? void 0 : i.nodeInputs) || (i == null ? void 0 : i.elementInputs)) {
    const _ = u.addFolder({ title: "\u{1F4CC} Analysis Inputs", expanded: false });
    _.addBinding(e.supports, "val", { label: "Supports" }), _.addBinding(e.loads, "val", { label: "Loads" }), _.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), _.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((i == null ? void 0 : i.deformOutputs) || (i == null ? void 0 : i.analyzeOutputs)) {
    const _ = u.addFolder({ title: "\u{1F52C} Analyze", expanded: true });
    window.__hekatanOutputsFolder = _, _.addBinding(e.nodeResults, "val", { options: { none: "none", "U (deformations)": "deformations", "R (reactions)": "reactions" }, label: "Node results" }), _.addBinding(e.frameResults, "val", { options: { none: "none", "Axial Force": "normals", Torsion: "torsions", "Shear 2-2": "shearsY", "Shear 3-3": "shearsZ", "Moment 2-2": "bendingsY", "Moment 3-3": "bendingsZ", "Axial Force (diagram)": "contour:normals", "Shear 2-2 (diagram)": "contour:shearsY", "Shear 3-3 (diagram)": "contour:shearsZ", "Torsion (diagram)": "contour:torsions", "Moment 2-2 (diagram)": "contour:bendingsY", "Moment 3-3 (diagram)": "contour:bendingsZ" }, label: "Frame results" }), _.addBinding(e.shellResults, "val", { options: { none: "none", F11: "membraneXX", F22: "membraneYY", F12: "membraneXY", FMax: "membranePrincipalMax", FMin: "membranePrincipalMin", FVM: "vonMises", V13: "tranverseShearX", V23: "tranverseShearY", VMax: "transverseShearMax", M11: "bendingXX", M22: "bendingYY", M12: "bendingXY", MMax: "bendingPrincipalMax", MMin: "bendingPrincipalMin", "Pressure (suelo)": "pressure", Ux: "displacementX", Uy: "displacementY", Uz: "displacementZ" }, label: "Shell results" }), _.addBinding(Vn, "val", { options: { "SAFE (cimentaci\xF3n)": "safe", "ETABS / CSI (magenta\u2192azul)": "csi", "Jet_r (rojo\u2192azul)": "jet_r", "Jet (azul\u2192rojo)": "jet", Viridis: "viridis" }, label: "\u{1F3A8} Paleta colores" }), _.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), _.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), _.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), _.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  y && u.addBinding(e.solids, "val", { label: "Solids" });
  const v = u.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), z = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), C = () => {
    const _ = window.__hekatanClipApply;
    typeof _ == "function" && _();
  };
  return v.addBinding(z, "enableX", { label: "Cortar X" }).on("change", C), v.addBinding(z, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", C), v.addBinding(z, "invertX", { label: "  invertir X" }).on("change", C), v.addBinding(z, "enableY", { label: "Cortar Y" }).on("change", C), v.addBinding(z, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", C), v.addBinding(z, "invertY", { label: "  invertir Y" }).on("change", C), v.addBinding(z, "enableZ", { label: "Cortar Z" }).on("change", C), v.addBinding(z, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", C), v.addBinding(z, "invertZ", { label: "  invertir Z" }).on("change", C), h;
}
function hs(e) {
  return { gridSize: L.state((e == null ? void 0 : e.gridSize) ?? 30), gridVisible: L.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: L.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: L.state((e == null ? void 0 : e.gridStep) ?? 1), gridMajor: L.state((e == null ? void 0 : e.gridMajor) ?? 5), cursorSnap: L.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: L.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: L.state((e == null ? void 0 : e.gridXZ) ?? false), gridYZ: L.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: L.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: L.state((e == null ? void 0 : e.nodes) ?? true), elements: L.state((e == null ? void 0 : e.elements) ?? true), edges: L.state((e == null ? void 0 : e.edges) ?? true), faces: L.state((e == null ? void 0 : e.faces) ?? true), elemColumns: L.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: L.state((e == null ? void 0 : e.elemBeams) ?? true), elemFrames: L.state((e == null ? void 0 : e.elemFrames) ?? true), elemZapatas: L.state((e == null ? void 0 : e.elemZapatas) ?? true), elemLosas: L.state((e == null ? void 0 : e.elemLosas) ?? true), colorByType: L.state((e == null ? void 0 : e.colorByType) ?? false), nodesIndexes: L.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: L.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: L.state((e == null ? void 0 : e.orientations) ?? false), sections: L.state((e == null ? void 0 : e.sections) ?? true), sectionLabels: L.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: L.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: L.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: L.state((e == null ? void 0 : e.secFloor) ?? -1), supports: L.state((e == null ? void 0 : e.supports) ?? true), loads: L.state((e == null ? void 0 : e.loads) ?? false), deformedShape: L.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: L.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: L.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: L.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: L.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: L.state((e == null ? void 0 : e.flipAxes) ?? false), solids: L.state((e == null ? void 0 : e.solids) ?? true), custom3D: L.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: L.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: L.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: L.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function ms(e, i, y) {
  const h = en(), u = new zn(new ue(), new Pn({ color: h.nodePoint }));
  return Vo((S, x) => {
    u.material.color.setHex(x.nodePoint);
  }), u.frustumCulled = false, L.derive(() => {
    e.nodes.val && u.geometry.setAttribute("position", new gt(i.val.flat(), 3));
  }), L.derive(() => {
    if (y.val, i.val, !e.nodes.rawVal) return;
    const S = i.rawVal ?? [];
    let x = e.gridSize.val * 0.5;
    if (S.length >= 2) {
      const v = [1 / 0, 1 / 0, 1 / 0], z = [-1 / 0, -1 / 0, -1 / 0];
      for (const C of S) for (let _ = 0; _ < 3; _++) v[_] = Math.min(v[_], C[_]), z[_] = Math.max(z[_], C[_]);
      x = Math.max(z[0] - v[0], z[1] - v[1], z[2] - v[2], 0.1);
    }
    const m = 0.03 * x;
    u.material.size = m * y.rawVal;
  }), L.derive(() => {
    u.visible = e.nodes.val;
  }), u;
}
function qn(e, i) {
  const y = en(), h = new Oe();
  h.name = "hekatan-grid";
  const u = (i == null ? void 0 : i.planes) ?? ["xy"];
  let S = (i == null ? void 0 : i.majorStep) ?? 1, x = (i == null ? void 0 : i.minorStep) ?? 0.1;
  for (S <= 0 && (S = 1), x <= 0 && (x = 0.1); e / x > 500; ) x *= 2;
  for (; e / S > 100; ) S *= 2;
  const m = e / 2;
  S = Math.max(x, Math.round(S / x) * x);
  const z = new It(y.grid), C = new It(y.grid).multiplyScalar(0.45), _ = (ee, b, Q, fe) => {
    const ke = [], _e = ee === "xy" ? (F, $) => [F, $, 0] : ee === "xz" ? (F, $) => [F, 0, $] : (F, $) => [0, F, $], I = Math.floor(m / b);
    for (let F = -I; F <= I; F++) {
      const $ = F * b, U = _e($, -m), V = _e($, m);
      ke.push(...U, ...V);
    }
    for (let F = -I; F <= I; F++) {
      const $ = F * b, U = _e(-m, $), V = _e(m, $);
      ke.push(...U, ...V);
    }
    const Z = new ue();
    Z.setAttribute("position", new gt(ke, 3));
    const D = new lt({ color: Q, transparent: true, opacity: fe, depthWrite: false }), T = new Xt(Z, D);
    return T.name = `grid-${ee}-${b === x ? "minor" : "major"}`, T;
  }, W = (ee, b, Q) => {
    const fe = ee === "xy" ? (T, F) => [T, F, 0] : ee === "xz" ? (T, F) => [T, 0, F] : (T, F) => [0, T, F], ke = [[-m, -m], [m, -m], [m, m], [-m, m]], _e = [];
    for (const [T, F] of ke) _e.push(...fe(T, F));
    const I = new ue();
    I.setAttribute("position", new gt(_e, 3));
    const Z = new lt({ color: b, transparent: true, opacity: Q, depthWrite: false }), D = new Ao(I, Z);
    return D.name = `grid-${ee}-border`, D.renderOrder = 1, D;
  }, we = (ee, b, Q) => {
    const fe = ee === "xy" ? (Z, D) => [Z, D, 0] : ee === "xz" ? (Z, D) => [Z, 0, D] : (Z, D) => [0, Z, D], ke = b === "u" ? [...fe(-m, 0), ...fe(m, 0)] : [...fe(0, -m), ...fe(0, m)], _e = new ue();
    _e.setAttribute("position", new gt(ke, 3));
    const I = new Xt(_e, new lt({ color: Q, transparent: true, opacity: 0.45, depthWrite: false }));
    return I.name = `grid-${ee}-eje-${b}`, I.renderOrder = 1, I;
  }, de = { xy: [14042459, 5155178], xz: [14042459, 4882390], yz: [5155178, 4882390] };
  for (const ee of u) {
    h.add(_(ee, x, C, 0.12)), h.add(_(ee, S, z, 0.4));
    const [b, Q] = de[ee];
    h.add(we(ee, "u", b)), h.add(we(ee, "v", Q)), h.add(W(ee, z, 0.55));
  }
  return h.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: S, minorStep: x, gridSize: e, planes: [...u] }, h;
}
function ws(e, i, y, h) {
  const u = new Oe(), S = new jo(0.5, 0.5, 0.5), x = new es(0.45, 0.7, 4);
  x.rotateX(Math.PI / 2), x.translate(0, 0, -0.35);
  const m = new et({ color: 10166822 }), v = new et({ color: 2792847 }), z = new et({ color: 3835647 }), C = () => {
    const we = y.rawVal ?? [];
    if (we.length < 2) return i.gridSize.val * 0.5;
    let de = [1 / 0, 1 / 0, 1 / 0], ee = [-1 / 0, -1 / 0, -1 / 0];
    for (const b of we) for (let Q = 0; Q < 3; Q++) b[Q] < de[Q] && (de[Q] = b[Q]), b[Q] > ee[Q] && (ee[Q] = b[Q]);
    return Math.max(ee[0] - de[0], ee[1] - de[1], ee[2] - de[2], 0.1);
  }, _ = () => 0.08 * C(), W = () => h.rawVal;
  return L.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, !i.supports.val) return;
    u.clear();
    const we = _();
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((de, ee) => {
      const b = y.val[ee];
      if (!b) return;
      const Q = de ?? [], fe = (Q[0] ? 1 : 0) + (Q[1] ? 1 : 0) + (Q[2] ? 1 : 0), ke = (Q[3] ? 1 : 0) + (Q[4] ? 1 : 0) + (Q[5] ? 1 : 0);
      let _e;
      fe >= 3 && ke >= 3 ? _e = new He(S, m) : fe >= 3 && ke === 0 ? _e = new He(x, v) : _e = new He(x, z), _e.position.set(b[0], b[1], b[2]);
      const I = we * W();
      _e.scale.set(I, I, I), u.add(_e);
    });
  }), L.derive(() => {
    if (h.val, !i.supports.rawVal) return;
    const de = _() * W();
    u.children.forEach((ee) => ee.scale.set(de, de, de));
  }), L.derive(() => {
    u.visible = i.supports.val;
  }), u;
}
function ys(e, i, y, h) {
  const u = new Oe();
  u.name = "loadsGroup";
  function S(x) {
    if (x.length < 2) return 0.12 * i.gridSize.rawVal;
    const m = [1 / 0, 1 / 0, 1 / 0], v = [-1 / 0, -1 / 0, -1 / 0];
    for (const C of x) for (let _ = 0; _ < 3; _++) m[_] = Math.min(m[_], C[_]), v[_] = Math.max(v[_], C[_]);
    return 0.08 * Math.max(v[0] - m[0], v[1] - m[1], v[2] - m[2], 0.1);
  }
  return L.derive(() => {
    var _a, _b, _c;
    if (i.deformedShape.val, !i.loads.val) return;
    u.children.forEach((v) => v.dispose()), u.clear();
    const x = y.val, m = S(x);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((v, z) => {
      const C = x[z];
      if (!C) return;
      const _ = new w(...v.slice(0, 3));
      if (_.lengthSq() < 1e-30) return;
      _.normalize();
      const W = new jt(_, new w(...C), 1, 15637248, 0.3, 0.3), we = m * h.rawVal;
      W.scale.set(we, we, we), u.add(W);
    });
  }), L.derive(() => {
    if (h.val, !i.loads.rawVal) return;
    const m = S(y.rawVal) * h.rawVal;
    u.children.forEach((v) => v.scale.set(m, m, m));
  }), L.derive(() => {
    u.visible = i.loads.val;
  }), u;
}
function xs(e, i, y) {
  const h = new Oe();
  return L.derive(() => {
    if (!e.nodesIndexes.val) return;
    h.children.forEach((S) => S.dispose()), h.clear();
    const u = 0.05 * e.gridSize.val * 0.6;
    i.val.forEach((S, x) => {
      const m = new xt(`${x}`);
      m.position.set(...S), m.updateScale(u * y.rawVal), h.add(m);
    });
  }), L.derive(() => {
    if (y.val, !e.nodesIndexes.rawVal) return;
    const u = 0.05 * e.gridSize.val * 0.6;
    h.children.forEach((S) => S.updateScale(u * y.rawVal));
  }), L.derive(() => {
    h.visible = e.nodesIndexes.val;
  }), h;
}
function gs(e, i, y, h) {
  const u = new Oe();
  return L.derive(() => {
    var _a;
    if (i.deformedShape.val, !i.elementsIndexes.val) return;
    u.children.forEach((x) => x.dispose()), u.clear();
    const S = 0.05 * i.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((x, m) => {
      const v = new xt(`${m}`, void 0, "#001219");
      v.position.set(...vs(x.map((z) => y.rawVal[z]))), v.updateScale(S * h.rawVal), u.add(v);
    });
  }), L.derive(() => {
    if (h.val, !i.elementsIndexes.rawVal) return;
    const S = 0.05 * i.gridSize.val * 0.6;
    u.children.forEach((x) => x.updateScale(S * h.rawVal));
  }), L.derive(() => {
    u.visible = i.elementsIndexes.val;
  }), u;
}
function vs(e) {
  const i = e.reduce((h, u) => [h[0] + u[0], h[1] + u[1], h[2] + u[2]], [0, 0, 0]), y = e.length;
  return [i[0] / y, i[1] / y, i[2] / y];
}
function ko(e, i) {
  const y = new Oe(), h = Math.min(0.05 * e, 0.6), u = en(), S = new xt("X", "red", "transparent"), x = new xt(i ? "Z" : "Y", "green", "transparent"), m = new xt(i ? "Y" : "Z", "blue", "transparent"), v = new jt(new w(1, 0, 0), new w(0, 0, 0), 1, u.axisArrow, 0.2, 0.2), z = new jt(new w(0, 1, 0), new w(0, 0, 0), 1, u.axisArrow, 0.2, 0.2), C = new jt(new w(0, 0, 1), new w(0, 0, 0), 1, u.axisArrow, 0.2, 0.2);
  return S.position.set(1.3 * h, 0, 0), x.position.set(0, 1.3 * h, 0), m.position.set(0, 0, 1.3 * h), S.updateScale(0.4 * h), x.updateScale(0.4 * h), m.updateScale(0.4 * h), v.scale.set(h, h, h), z.scale.set(h, h, h), C.scale.set(h, h, h), y.add(v, z, C, S, x, m), y;
}
function jn(e, i) {
  const y = new w(...e), u = new w(...i).clone().sub(y), S = u.length(), x = u.dot(new w(1, 0, 0)) / S, m = u.dot(new w(0, 1, 0)) / S, v = u.dot(new w(0, 0, 1)) / S, z = Math.sqrt(x ** 2 + m ** 2);
  let C = new Kn().fromArray([[x, m, v], [-m / z, x / z, 0], [-x * v / z, -m * v / z, z]].flat());
  return v === 1 && (C = new Kn().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), v === -1 && (C = new Kn().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new To().setFromMatrix3(C);
}
function Qn(e, i) {
  return e == null ? void 0 : e.map((y, h) => (9 * y + i[h]) / 10);
}
function gn(e) {
  const i = e.reduce((h, u) => [h[0] + u[0], h[1] + u[1], h[2] + u[2]], [0, 0, 0]), y = e.length;
  return [i[0] / y, i[1] / y, i[2] / y];
}
function Ms(e, i, y) {
  const h = gn([i, y]), u = gn([e, y]), S = gn([e, i]), x = new w(...h).sub(new w(...u)).normalize(), m = new w(...y).sub(new w(...S)).normalize(), v = x.clone().cross(m).normalize(), z = v.clone().cross(x).normalize();
  return new To().makeBasis(x, z, v);
}
function bs(e, i, y, h) {
  const u = new Oe(), S = new ue(), x = new lt({ vertexColors: true }), m = [0, 0, 0], v = [1, 0, 0], z = [0, 1, 0], C = [0, 0, 1];
  S.setAttribute("position", new gt([...m, ...v, ...m, ...z, ...m, ...C], 3));
  const _ = [255, 0, 0], W = [0, 255, 0], we = [0, 0, 255];
  return S.setAttribute("color", new gt([..._, ..._, ...W, ...W, ...we, ...we], 3)), L.derive(() => {
    var _a;
    i.deformedShape.val, i.orientations.val && (u.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((de) => {
      const ee = new Xt(S, x), b = y.rawVal[de[0]], Q = y.rawVal[de[1]];
      if (de.length === 2 && (ee.position.set(...Qn(b, Q)), ee.rotation.setFromRotationMatrix(jn(b, Q))), de.length === 3) {
        const _e = y.rawVal[de[2]];
        ee.position.set(...gn([b, Q, _e])), ee.rotation.setFromRotationMatrix(Ms(b, Q, _e));
      }
      const ke = 0.05 * i.gridSize.rawVal * 0.75 * h.rawVal;
      ee.scale.set(ke, ke, ke), u.add(ee);
    }));
  }), L.derive(() => {
    if (h.val, !i.orientations.rawVal) return;
    const ee = 0.05 * i.gridSize.val * 0.75 * h.rawVal;
    u.children.forEach((b) => b.scale.set(ee, ee, ee));
  }), L.derive(() => {
    u.visible = i.orientations.val;
  }), u;
}
function _s(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const i = (e.b * 100).toFixed(0), y = (e.h * 100).toFixed(0);
    return `${i}x${y}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function Ss(e, i, y, h) {
  const u = new Oe(), S = new Oe();
  u.add(S);
  function x(Z, D) {
    const T = Z / 2, F = D / 2, $ = new Float32Array([0, -T, -F, 0, T, -F, 0, T, F, 0, -T, -F, 0, T, F, 0, -T, F]), U = new ue();
    U.setAttribute("position", new it($, 3));
    const V = new Float32Array([0, -T, -F, 0, T, -F, 0, T, F, 0, -T, F, 0, -T, -F]), N = new ue();
    return N.setAttribute("position", new it(V, 3)), { fill: U, outline: N };
  }
  function m(Z, D = 24) {
    const T = Z / 2, F = new Float32Array(D * 9);
    for (let N = 0; N < D; N++) {
      const oe = N / D * Math.PI * 2, O = (N + 1) / D * Math.PI * 2;
      F[N * 9] = 0, F[N * 9 + 1] = 0, F[N * 9 + 2] = 0, F[N * 9 + 3] = 0, F[N * 9 + 4] = T * Math.cos(oe), F[N * 9 + 5] = T * Math.sin(oe), F[N * 9 + 6] = 0, F[N * 9 + 7] = T * Math.cos(O), F[N * 9 + 8] = T * Math.sin(O);
    }
    const $ = new ue();
    $.setAttribute("position", new it(F, 3));
    const U = new Float32Array((D + 1) * 3);
    for (let N = 0; N <= D; N++) {
      const oe = N / D * Math.PI * 2;
      U[N * 3] = 0, U[N * 3 + 1] = T * Math.cos(oe), U[N * 3 + 2] = T * Math.sin(oe);
    }
    const V = new ue();
    return V.setAttribute("position", new it(U, 3)), { fill: $, outline: V };
  }
  function v(Z, D, T, F) {
    const $ = T ?? D * 0.08, U = F ?? Z * 0.07, V = Z / 2, N = D / 2, oe = N - $, O = U / 2, H = [];
    function A(ie, Pe, ce, be) {
      H.push(0, ie, Pe, 0, ce, Pe, 0, ce, be, 0, ie, Pe, 0, ce, be, 0, ie, be);
    }
    A(-V, -N, V, -oe), A(-O, -oe, O, oe), A(-V, oe, V, N);
    const ae = new ue();
    ae.setAttribute("position", new it(new Float32Array(H), 3));
    const ne = new Float32Array([0, -V, -N, 0, V, -N, 0, V, -oe, 0, O, -oe, 0, O, oe, 0, V, oe, 0, V, N, 0, -V, N, 0, -V, oe, 0, -O, oe, 0, -O, -oe, 0, -V, -oe, 0, -V, -N]), me = new ue();
    return me.setAttribute("position", new it(ne, 3)), { fill: ae, outline: me };
  }
  function z(Z, D, T) {
    const F = Z / 2, $ = D / 2, U = F - T, V = $ - T, N = [];
    function oe(ae, ne, me, ie) {
      N.push(0, ae, ne, 0, me, ne, 0, me, ie, 0, ae, ne, 0, me, ie, 0, ae, ie);
    }
    oe(-F, -$, F, -V), oe(-F, V, F, $), oe(-F, -V, -U, V), oe(U, -V, F, V);
    const O = new ue();
    O.setAttribute("position", new it(new Float32Array(N), 3));
    const H = new Float32Array([0, -F, -$, 0, F, -$, 0, F, -$, 0, F, $, 0, F, $, 0, -F, $, 0, -F, $, 0, -F, -$, 0, -U, -V, 0, U, -V, 0, U, -V, 0, U, V, 0, U, V, 0, -U, V, 0, -U, V, 0, -U, -V]), A = new ue();
    return A.setAttribute("position", new it(H, 3)), { fill: O, outline: A };
  }
  function C(Z, D, T) {
    const F = Z / 2, $ = D / 2, U = F - T, V = $ - T, N = new ue(), oe = new Float32Array([0, -U, -V, 0, U, -V, 0, U, V, 0, -U, -V, 0, U, V, 0, -U, V]);
    N.setAttribute("position", new it(oe, 3));
    const O = [];
    function H(me, ie, Pe, ce) {
      O.push(0, me, ie, 0, Pe, ie, 0, Pe, ce, 0, me, ie, 0, Pe, ce, 0, me, ce);
    }
    H(-F, -$, F, -V), H(-F, V, F, $), H(-F, -V, -U, V), H(U, -V, F, V);
    const A = new ue();
    A.setAttribute("position", new it(new Float32Array(O), 3));
    const ae = new Float32Array([0, -F, -$, 0, F, -$, 0, F, -$, 0, F, $, 0, F, $, 0, -F, $, 0, -F, $, 0, -F, -$, 0, -U, -V, 0, U, -V, 0, U, -V, 0, U, V, 0, U, V, 0, -U, V, 0, -U, V, 0, -U, -V]), ne = new ue();
    return ne.setAttribute("position", new it(ae, 3)), { concFill: N, steelFillGeom: A, outline: ne };
  }
  function _(Z, D, T) {
    const F = [], $ = [[0, -Z / 2, -D / 2], [0, -Z / 2 + T, -D / 2], [0, -Z / 2 + T, D / 2 - T], [0, Z / 2, D / 2 - T], [0, Z / 2, D / 2], [0, -Z / 2, D / 2]], U = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const O of U) F.push(...$[O]);
    const V = new ue();
    V.setAttribute("position", new it(new Float32Array(F), 3));
    const N = [];
    for (let O = 0; O < $.length; O++) {
      const H = (O + 1) % $.length;
      N.push(...$[O], ...$[H]);
    }
    const oe = new ue();
    return oe.setAttribute("position", new it(new Float32Array(N), 3)), { fill: V, outline: oe };
  }
  function W(Z, D, T, F) {
    const $ = F / 2, U = [], V = [[0, -Z - $, -D / 2], [0, -T - $, -D / 2], [0, -T - $, D / 2 - T], [0, -$, D / 2 - T], [0, -$, D / 2], [0, -Z - $, D / 2]], N = [[0, $, -D / 2], [0, $ + T, -D / 2], [0, $ + T, D / 2 - T], [0, Z + $, D / 2 - T], [0, Z + $, D / 2], [0, $, D / 2]], oe = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const ae of oe) U.push(...V[ae]);
    for (const ae of oe) U.push(...N[ae]);
    const O = new ue();
    O.setAttribute("position", new it(new Float32Array(U), 3));
    const H = [];
    for (const ae of [V, N]) for (let ne = 0; ne < ae.length; ne++) {
      const me = (ne + 1) % ae.length;
      H.push(...ae[ne], ...ae[me]);
    }
    const A = new ue();
    return A.setAttribute("position", new it(new Float32Array(H), 3)), { fill: O, outline: A };
  }
  function we(Z, D, T, F) {
    const $ = D / 2, U = Z, V = [[0, -U, -$], [0, -U, -$ + T], [0, -F, -$ + T], [0, -F, $ - T], [0, -U, $ - T], [0, -U, $], [0, 0, $], [0, 0, -$]], N = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], oe = [];
    for (const ae of N) oe.push(...V[ae]);
    const O = new ue();
    O.setAttribute("position", new it(new Float32Array(oe), 3));
    const H = [];
    for (let ae = 0; ae < V.length; ae++) {
      const ne = (ae + 1) % V.length;
      H.push(...V[ae], ...V[ne]);
    }
    const A = new ue();
    return A.setAttribute("position", new it(new Float32Array(H), 3)), { fill: O, outline: A };
  }
  function de(Z, D, T, F, $) {
    const U = D / 2, V = $ / 2, N = [], oe = [[0, -Z, -U], [0, -Z, -U + T], [0, -V - F, -U + T], [0, -V - F, U - T], [0, -Z, U - T], [0, -Z, U], [0, -V, U], [0, -V, -U]], O = oe.map((me) => [me[0], -me[1], me[2]]), H = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const me of H) N.push(...oe[me]);
    for (const me of H) N.push(...O[me]);
    const A = new ue();
    A.setAttribute("position", new it(new Float32Array(N), 3));
    const ae = [];
    for (const me of [oe, O]) for (let ie = 0; ie < me.length; ie++) {
      const Pe = (ie + 1) % me.length;
      ae.push(...me[ie], ...me[Pe]);
    }
    const ne = new ue();
    return ne.setAttribute("position", new it(new Float32Array(ae), 3)), { fill: A, outline: ne };
  }
  function ee(Z, D, T, F) {
    const $ = Z / 2, U = D / 2, V = F / 2, N = [[0, -V, -U], [0, V, -U], [0, V, U - T], [0, $, U - T], [0, $, U], [0, -$, U], [0, -$, U - T], [0, -V, U - T]], oe = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], O = [];
    for (const ne of oe) O.push(...N[ne]);
    const H = new ue();
    H.setAttribute("position", new it(new Float32Array(O), 3));
    const A = [];
    for (let ne = 0; ne < N.length; ne++) {
      const me = (ne + 1) % N.length;
      A.push(...N[ne], ...N[me]);
    }
    const ae = new ue();
    return ae.setAttribute("position", new it(new Float32Array(A), 3)), { fill: H, outline: ae };
  }
  function b(Z, D, T = 24) {
    const F = Z / 2, $ = F - D, U = [];
    for (let O = 0; O < T; O++) {
      const H = O / T * Math.PI * 2, A = (O + 1) / T * Math.PI * 2, ae = Math.cos(H), ne = Math.sin(H), me = Math.cos(A), ie = Math.sin(A);
      U.push(0, F * ae, F * ne, 0, F * me, F * ie, 0, $ * me, $ * ie), U.push(0, F * ae, F * ne, 0, $ * me, $ * ie, 0, $ * ae, $ * ne);
    }
    const V = new ue();
    V.setAttribute("position", new it(new Float32Array(U), 3));
    const N = [];
    for (let O = 0; O < T; O++) {
      const H = O / T * Math.PI * 2, A = (O + 1) / T * Math.PI * 2;
      N.push(0, F * Math.cos(H), F * Math.sin(H), 0, F * Math.cos(A), F * Math.sin(A)), N.push(0, $ * Math.cos(H), $ * Math.sin(H), 0, $ * Math.cos(A), $ * Math.sin(A));
    }
    const oe = new ue();
    return oe.setAttribute("position", new it(new Float32Array(N), 3)), { fill: V, outline: oe };
  }
  const Q = new et({ color: 52479, transparent: true, opacity: 0.35, side: Ft, depthWrite: false }), fe = new lt({ color: 52479 }), ke = new et({ color: 16750848, transparent: true, opacity: 0.4, side: Ft, depthWrite: false }), _e = new lt({ color: 16750848 });
  function I(Z, D) {
    const T = Math.abs(D[0] - Z[0]), F = Math.abs(D[1] - Z[1]), $ = Math.abs(D[2] - Z[2]);
    return $ > T && $ > F || F > T && F > $;
  }
  return L.derive(() => {
    var _a, _b;
    i.deformedShape.val, i.secColumns.val, i.secBeams.val, i.secFloor.val;
    const Z = i.secColumns.rawVal, D = i.secBeams.rawVal;
    if (!Z && !D) {
      u.children.forEach((V) => {
        V instanceof xt && V.dispose();
      }), u.clear();
      return;
    }
    u.children.forEach((V) => {
      V instanceof xt && V.dispose();
    }), u.clear();
    const T = (_a = e.elements) == null ? void 0 : _a.val, F = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!T || !F) return;
    const $ = F.sectionShapes, U = i.secFloor.rawVal;
    T.forEach((V, N) => {
      if (V.length !== 2) return;
      const oe = y.rawVal[V[0]], O = y.rawVal[V[1]];
      if (!oe || !O) return;
      const H = I(oe, O);
      if (H && !Z || !H && !D) return;
      if (U >= 0) {
        const ie = Math.min(oe[1], O[1]);
        Math.max(oe[1], O[1]);
        const Pe = i.gridSize.rawVal || 3;
        if (Math.floor(ie / Pe + 0.01) !== U) return;
      }
      const A = $ == null ? void 0 : $.get(N);
      if (!A) return;
      const ae = [(oe[0] + O[0]) / 2, (oe[1] + O[1]) / 2, (oe[2] + O[2]) / 2], ne = jn(oe, O);
      if (A.type === "CFT") {
        const ie = C(A.b, A.h, A.tw ?? A.b * 0.05), Pe = new He(ie.concFill, Q);
        Pe.position.set(...ae), Pe.rotation.setFromRotationMatrix(ne), u.add(Pe);
        const ce = new He(ie.steelFillGeom, ke);
        ce.position.set(...ae), ce.rotation.setFromRotationMatrix(ne), u.add(ce);
        const be = new _t(ie.outline, _e);
        be.position.set(...ae), be.rotation.setFromRotationMatrix(ne), u.add(be);
      } else {
        let ie, Pe, ce;
        switch (A.type) {
          case "rect":
            ie = x(A.b, A.h), Pe = Q, ce = fe;
            break;
          case "circ":
            ie = m(A.d), Pe = Q, ce = fe;
            break;
          case "I":
            ie = v(A.b, A.h, A.tf, A.tw), Pe = ke, ce = _e;
            break;
          case "HSS":
            ie = z(A.b, A.h, A.tw ?? A.b * 0.05), Pe = ke, ce = _e;
            break;
          case "CFT":
            ie = C(A.b, A.h, A.tw ?? A.b * 0.05), Pe = ke, ce = _e;
            break;
          case "L":
            ie = _(A.b ?? A.h, A.h, A.t ?? A.tw ?? 3e-3), Pe = ke, ce = _e;
            break;
          case "2L":
            ie = W(A.b ?? A.h, A.h, A.t ?? A.tw ?? 3e-3, A.dis ?? 0.01), Pe = ke, ce = _e;
            break;
          case "C":
          case "coldC":
            ie = we(A.b, A.h, A.tf ?? A.t ?? 3e-3, A.tw ?? A.t ?? 3e-3), Pe = ke, ce = _e;
            break;
          case "2C":
            ie = de(A.b, A.h, A.tf ?? 5e-3, A.tw ?? 5e-3, A.dis ?? 0.01), Pe = ke, ce = _e;
            break;
          case "T":
            ie = ee(A.b, A.h, A.tf ?? 0.01, A.tw ?? 6e-3), Pe = ke, ce = _e;
            break;
          case "pipe":
            ie = b(A.d, A.tw ?? A.d * 0.05), Pe = ke, ce = _e;
            break;
          default:
            return;
        }
        const be = new He(ie.fill, Pe);
        be.position.set(...ae), be.rotation.setFromRotationMatrix(ne), u.add(be);
        const Ke = new _t(ie.outline, ce);
        Ke.position.set(...ae), Ke.rotation.setFromRotationMatrix(ne), u.add(Ke);
      }
      const me = _s(A);
      if (me) {
        const Pe = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(A.type) ? "#ff9900" : "#00ccff", ce = new xt(me, Pe, "transparent");
        ce.position.set(ae[0], ae[1], ae[2]);
        const be = 0.05 * i.gridSize.rawVal * 0.5;
        ce.updateScale(be * ((h == null ? void 0 : h.rawVal) ?? 1)), S.add(ce);
      }
    });
  }), h && L.derive(() => {
    if (h.val, !i.sections.rawVal) return;
    const Z = 0.05 * i.gridSize.val * 0.5;
    S.children.forEach((D) => {
      D instanceof xt && D.updateScale(Z * h.rawVal);
    });
  }), L.derive(() => {
    u.visible = i.sections.val;
  }), L.derive(() => {
    S.visible = i.sectionLabels.val;
  }), u;
}
class Sn extends Oe {
  constructor(i, y, h, u, S, x, m) {
    super();
    const v = new Cn().moveTo(0, 0).lineTo(0, x[1]).lineTo(h, x[1]).lineTo(h, 0).lineTo(0, 0), z = v.getPoints(), C = new ue().setFromPoints(z);
    this.lines = new _t(C, new lt({ color: en().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(u), m && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const _ = new Fn(v), W = new et({ color: x[1] > 0 ? 24435 : 11411474, side: Ft });
    this.mesh = new He(_, W), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(u), m && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new xt(`${S[1].toFixed(4)}`), this.normalizedResult = x, this.textPosition = gn([i, y]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(u), this.add(this.text);
  }
  updateScale(i) {
    this.lines.scale.set(1, i * 2, 1), this.mesh.scale.set(1, i * 2, 1), this.text.updateScale(i * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * i);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class zo extends Oe {
  constructor(i, y, h, u, S, x, m) {
    super();
    const v = S[0] * h / (S[0] + S[1]), z = S[0] * S[1] > 0;
    if (this.text = new xt(`${S[0].toFixed(4)}`), this.text2 = new xt(`${(S[1] * -1).toFixed(4)}`), this.normalizedResult = x, this.textPosition = Qn(i, y), this.text2Position = Qn(y, i), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(u), this.text2.rotation.setFromRotationMatrix(u), this.add(this.text, this.text2), z) {
      const C = new Cn().moveTo(0, 0).lineTo(0, x[0]).lineTo(v, 0).lineTo(0, 0), _ = new Cn().moveTo(v, 0).lineTo(h, -x[1]).lineTo(h, 0).lineTo(v, 0), W = C.getPoints(), we = _.getPoints(), de = new ue().setFromPoints(W), ee = new ue().setFromPoints(we), b = new lt({ color: en().resultOutline });
      this.lines = new _t(de, b), this.lines2 = new _t(ee, b), this.lines.position.set(...i), this.lines2.position.set(...i), this.lines.rotation.setFromRotationMatrix(u), this.lines2.rotation.setFromRotationMatrix(u), m && this.lines.rotateX(Math.PI / 2), m && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const Q = new Fn(C), fe = new Fn(_), ke = new et({ color: x[0] > 0 ? 24435 : 11411474, side: Ft }), _e = new et({ color: -x[1] > 0 ? 24435 : 11411474, side: Ft });
      this.mesh = new He(Q, ke), this.mesh2 = new He(fe, _e), this.mesh.position.set(...i), this.mesh2.position.set(...i), this.mesh.rotation.setFromRotationMatrix(u), this.mesh2.rotation.setFromRotationMatrix(u), m && this.mesh.rotateX(Math.PI / 2), m && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const C = new Cn().moveTo(0, 0).lineTo(0, x[0]).lineTo(h, -x[1]).lineTo(h, 0).lineTo(0, 0), _ = C.getPoints(), W = new ue().setFromPoints(_);
      this.lines = new _t(W, new lt({ color: en().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(u), m && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const we = new Fn(C), de = new et({ color: x[0] > 0 ? 24435 : 11411474, side: Ft });
      this.mesh = new He(we, de), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(u), m && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var Bo = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(Bo || {});
function ks(e, i, y, h) {
  const u = new Oe(), S = { normals: Sn, shearsY: Sn, shearsZ: Sn, torsions: Sn, bendingsY: zo, bendingsZ: zo };
  return L.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, y.val, i.frameResults.val == "none") return;
    u.children.forEach((m) => m.dispose()), u.clear();
    const x = Bo[i.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[x]) == null ? void 0 : _b.forEach((m, v) => {
      var _a2, _b2;
      const z = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[v]) ?? [0, 1], C = y.rawVal[z[0]], _ = y.rawVal[z[1]], W = new w(..._).distanceTo(new w(...C)), we = zs((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[x]), de = m == null ? void 0 : m.map((fe) => fe / (we === 0 ? 1 : we)), ee = jn(C, _), b = new S[x](C, _, W, ee, m ?? [0, 0], de ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(x)), Q = 0.05 * i.gridSize.rawVal;
      b.updateScale(Q * h.rawVal), u.add(b);
    });
  }), L.derive(() => {
    if (h.val, i.frameResults.rawVal == "none") return;
    const x = 0.05 * i.gridSize.val;
    u.children.forEach((m) => m.updateScale(x * h.rawVal));
  }), L.derive(() => {
    u.visible = i.frameResults.val != "none";
  }), u;
}
function zs(e) {
  let i = 0;
  return e == null ? void 0 : e.forEach((y) => {
    const h = Math.max(...y ?? [0, 0]);
    h > i && (i = h);
  }), i;
}
class Ps extends Oe {
  constructor(i, y, h) {
    super();
    const u = y === eo.reactions;
    h[0] && (this.xText1 = new xt(`${u ? "Fx" : "Dx"}: ` + h[0].toFixed(4))), h[3] && (this.xText2 = new xt(`${u ? "Mx" : "Rx"}: ` + h[3].toFixed(4))), h[1] && (this.yText1 = new xt(`${u ? "Fy" : "Dy"}: ` + h[1].toFixed(4))), h[4] && (this.yText2 = new xt(`${u ? "My" : "Ry"}: ` + h[4].toFixed(4))), h[2] && (this.zText1 = new xt(`${u ? "Fz" : "Dz"}: ` + h[2].toFixed(4))), h[5] && (this.zText2 = new xt(`${u ? "Mz" : "Rz"}: ` + h[5].toFixed(4))), (h[0] || h[3]) && (this.xArrow = new jt(new w(1, 0, 0), new w(0, 0, 0), 1, 15637248, 0.3, 0.3)), (h[1] || h[4]) && (this.yArrow = new jt(new w(0, 1, 0), new w(0, 0, 0), 1, 15637248, 0.3, 0.3)), (h[2] || h[5]) && (this.zArrow = new jt(new w(0, 0, 1), new w(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...i), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
var eo = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(eo || {});
function Cs(e, i, y, h) {
  const u = new Oe();
  return L.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, i.nodeResults.val == "none") return;
    u.children.forEach((m) => m.dispose()), u.clear();
    const S = eo[i.nodeResults.rawVal], x = 0.05 * i.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[S]) == null ? void 0 : _b.forEach((m, v) => {
      const z = new Ps(y.rawVal[v], S, m ?? [0, 0, 0, 0, 0, 0]);
      z.updateScale(x * h.rawVal), u.add(z);
    });
  }), L.derive(() => {
    if (h.val, i.nodeResults.rawVal == "none") return;
    const S = 0.05 * i.gridSize.val;
    u.children.forEach((x) => x.updateScale(S * h.rawVal));
  }), L.derive(() => {
    u.visible = i.nodeResults.val != "none";
  }), u;
}
function Fs({ drawingObj: e, gridObj: i, scene: y, getActiveCamera: h, controls: u, gridSize: S, derivedDisplayScale: x, rendererElm: m, viewerRender: v }) {
  const z = new ts(), C = new ns(), _ = (n) => {
    const o = m.getBoundingClientRect(), a = n.clientX - o.left, t = n.clientY - o.top, r = o.width || 1, s = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const d = r / 2;
      if (a >= d) return C.x = (a - d) / d * 2 - 1, C.y = -(t / s) * 2 + 1, window.__hekatanSplitCamera ?? h();
      C.x = a / d * 2 - 1;
    } else C.x = a / r * 2 - 1;
    return C.y = -(t / s) * 2 + 1, h();
  }, W = new He(new Gt(1e4, 1e4), new et({ side: Ft, transparent: true, opacity: 0, depthWrite: false }));
  W.visible = true, W.frustumCulled = false, y.add(W);
  const we = (n, o, a) => {
    const t = new He(new Gt(1e4, 1e4), new et({ side: Ft, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, a), t.visible = false, t.frustumCulled = false, y.add(t), t;
  }, de = we(Math.PI / 2, 0, 0), ee = we(0, Math.PI / 2, 0);
  let b = false;
  const Q = () => {
    if (b) return z.intersectObjects([W], false);
    if (de.visible = !!window.__hekatanGridPlaneXZ, ee.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanOrthoRaycast === true && Te.visible) {
      const a = z.intersectObjects([Te, Ie, De], false);
      if (a.length > 0) return a;
    }
    const o = [W];
    return de.visible && o.push(de), ee.visible && o.push(ee), Rt.visible && Yt.length > 0 && o.push(...Yt), z.intersectObjects(o, false);
  }, fe = new zn(new ue(), new Pn()), ke = new zn(new ue(), new Pn({ color: "gray", sizeAttenuation: false, size: 6 })), _e = new zn(new ue(), new Pn({ color: "orange", size: 0.1 }));
  y.add(_e);
  const I = document.createElement("input");
  I.id = "hk-rubber-label", I.type = "text", I.spellcheck = false, I.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, I.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none", "pointer-events:none"].join(";") + ";", document.body.appendChild(I);
  let Z = null, D = null, T = false;
  const F = new w(), $ = (n, o, a, t, r, s) => {
    const l = t - n, d = r - o, p = s - a, g = Math.hypot(l, d, p);
    if (g < 0.01) {
      I.style.display = "none";
      return;
    }
    Z = [n, o, a], D = [l / g, d / g, p / g], F.set((n + t) / 2, (o + r) / 2, (a + s) / 2), F.project(h());
    const M = m.getBoundingClientRect(), c = M.left + (F.x * 0.5 + 0.5) * M.width, f = M.top + (-F.y * 0.5 + 0.5) * M.height;
    if (I.style.left = c + "px", I.style.top = f + "px", I.style.display = "block", !T) {
      if (I.value = `${g.toFixed(2)} m`, document.activeElement !== I) {
        const k = document.activeElement;
        k && (k.tagName === "INPUT" || k.tagName === "TEXTAREA") && k !== I || I.focus({ preventScroll: true });
      }
      try {
        I.select();
      } catch {
      }
    }
  }, U = () => {
    I.style.display = "none", Z = null, D = null, T = false, document.activeElement === I && I.blur();
  }, V = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      Mt = n, le(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), I.blur();
      return;
    }
    if (!Z || !D || !e.polylines) return;
    let a = D[0], t = D[1], r = D[2];
    tt === "x" ? (a = Math.sign(a) || 1, t = 0, r = 0) : tt === "y" ? (a = 0, t = Math.sign(t) || 1, r = 0) : tt === "z" && (a = 0, t = 0, r = Math.sign(r) || 1);
    const s = Z[0] + a * n, l = Z[1] + t * n, d = Z[2] + r * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [s, l, d]];
    const p = e.polylines.rawVal, g = p.length ? p[p.length - 1] : [];
    e.polylines.val = [...p.slice(0, -1), [...g, e.points.rawVal.length - 1]], I.blur();
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
        const [s, l, d] = r;
        return { kind: "relSpherical", L: s, az: l, el: d };
      }
      return null;
    }
    if (o.includes(",")) {
      const r = o.split(",").map((p) => parseFloat(p.trim()));
      if (r.some(isNaN)) return null;
      const [s, l, d = 0] = r;
      return a ? { kind: "relCart", dx: s, dy: l, dz: d } : { kind: "absCart", x: s, y: l, z: d };
    }
    const t = parseFloat(o);
    return isNaN(t) || t <= 0 ? null : { kind: "length", L: t };
  }, oe = (n) => {
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
  }, O = (n) => {
    var _a;
    if (!e.polylines) return;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, n];
    const o = e.polylines.rawVal, a = o.length ? o[o.length - 1] : [];
    e.polylines.val = [...o.slice(0, -1), [...a, e.points.rawVal.length - 1]], I.blur();
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
    const a = oe(o);
    if (!a) return false;
    if (O(a), ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "area" && e.polylines) {
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
      const a = N(I.value);
      if (!a) return;
      if (T = false, a.kind === "length") V(a.L), le(`\u270F DDE ${a.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = oe(a);
        if (!t) return;
        O(t);
        const r = a.kind;
        le(`\u270F ${r} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
      }
      return;
    }
    if (n.key === "Escape") {
      n.preventDefault(), T = false, I.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!T && I.style.display === "block") try {
          I.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && (T = true);
  }), window.addEventListener("keydown", (n) => {
    if (!Z || !D || document.activeElement === I) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (I.value = n.key, I.focus(), I.setSelectionRange(1, 1), n.preventDefault());
  });
  const H = document.createElement("div");
  H.id = "hk-coord-readout", H.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", H.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(H);
  const A = document.createElement("div");
  A.id = "hk-coord-fixed", A.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", A.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(A);
  const ae = new _t(new ue().setFromPoints([new w(0, 0, 0), new w(0, 0, 0)]), new yn({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  ae.frustumCulled = false, ae.visible = false, y.add(ae);
  const ne = new _t(new ue(), new lt({ color: 2282478, transparent: true, opacity: 0.9 }));
  ne.frustumCulled = false, ne.visible = false, y.add(ne);
  let me = [];
  const ie = new Oe(), Pe = new He(new Gt(1, 1), new et({ color: 2282478, transparent: true, opacity: 0.08, side: Ft, depthWrite: false })), ce = new Xt(new yo(new Gt(1, 1)), new lt({ color: 2282478, transparent: true, opacity: 0.85 })), be = new Xt(new ue(), new lt({ color: 2282478, transparent: true, opacity: 0.3 })), Ke = (n, o) => {
    const a = [], t = Math.ceil(n / o);
    for (let r = -t; r <= t; r++) {
      const s = r * o;
      a.push(-n, s, 0, n, s, 0), a.push(s, -n, 0, s, n, 0);
    }
    be.geometry.dispose(), be.geometry = new ue(), be.geometry.setAttribute("position", new gt(a, 3));
  };
  ie.add(Pe, ce, be), ie.visible = false, ie.frustumCulled = false, y.add(ie);
  const We = new Oe();
  We.frustumCulled = false, We.visible = false, y.add(We);
  const q = (n) => {
    const o = new ue().setFromPoints([new w(0, 0, 0), new w(0, 0, 0)]), a = new yn({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new _t(o, a);
  }, P = q(16711680), K = q(65280), B = q(35071);
  We.add(P, K, B);
  const J = (n) => {
    const o = new ue().setFromPoints([new w(0, 0, 0), new w(0, 0, 0), new w(0, 0, 0), new w(0, 0, 0)]), a = new lt({ color: n, transparent: true, opacity: 0.2, depthTest: false }), t = new Ao(o, a);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, se = J(3462041), Se = J(16724804), ge = J(6333946), ze = new Oe();
  ze.frustumCulled = false, ze.visible = false, y.add(ze), ze.add(se, Se, ge);
  const Ee = (n) => {
    const o = new Gt(1, 1), a = new et({ color: n, transparent: true, opacity: 0.06, side: Ft, depthWrite: false }), t = new He(o, a);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, Te = Ee(3462041), Ie = Ee(16724804), De = Ee(6333946);
  ze.add(Te, Ie, De);
  const qe = (n, o, a, t) => {
    n.scale.set(2 * t, 2 * t, 1), a === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : a === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, Ce = document.createElement("div");
  Ce.id = "hk-refplane-badge", Ce.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(Ce), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, ze.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0], l = window.__hekatanOrthoExt ?? 8;
      Ze(se, s, "xy", l), Ze(Se, s, "xz", l), Ze(ge, s, "yz", l), qe(Te, s, "xy", l), qe(Ie, s, "xz", l), qe(De, s, "yz", l), Te.material.opacity = 0.05, Ie.material.opacity = 0.05, De.material.opacity = 0.05;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    v();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !ze.visible) {
      v();
      return;
    }
    const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0];
    Ze(se, s, "xy", n), Ze(Se, s, "xz", n), Ze(ge, s, "yz", n), qe(Te, s, "xy", n), qe(Ie, s, "xz", n), qe(De, s, "yz", n), v();
  };
  const rt = (n) => {
    if (Te.material.opacity = n === "xy" ? 0.09 : 0.025, Ie.material.opacity = n === "xz" ? 0.09 : 0.025, De.material.opacity = n === "yz" ? 0.09 : 0.025, n) {
      const r = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      Ce.style.background = r.bg, Ce.style.color = r.text, Ce.textContent = `\u25A6 Plano ${n.toUpperCase()}`, Ce.style.display = "block";
    } else Ce.style.display = "none";
  }, Ze = (n, o, a, t) => {
    let r;
    a === "xy" ? r = [new w(o[0] - t, o[1] - t, o[2]), new w(o[0] + t, o[1] - t, o[2]), new w(o[0] + t, o[1] + t, o[2]), new w(o[0] - t, o[1] + t, o[2]), new w(o[0] - t, o[1] - t, o[2])] : a === "xz" ? r = [new w(o[0] - t, o[1], o[2] - t), new w(o[0] + t, o[1], o[2] - t), new w(o[0] + t, o[1], o[2] + t), new w(o[0] - t, o[1], o[2] + t), new w(o[0] - t, o[1], o[2] - t)] : r = [new w(o[0], o[1] - t, o[2] - t), new w(o[0], o[1] + t, o[2] - t), new w(o[0], o[1] + t, o[2] + t), new w(o[0], o[1] - t, o[2] + t), new w(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(r);
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
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== I) return;
    const a = n.key.toLowerCase(), t = (_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool;
    if (n.key === "Enter" && t === "polyarea" && me.length >= 3) {
      const r = cn();
      le(`\u2713 \xC1rea libre mallada \u2014 ${r} shells Q4 creados.`), n.preventDefault();
      return;
    }
    if (a === "x" || a === "y" || a === "z") tt = tt === a ? null : a, Lt(), n.preventDefault();
    else if (n.key === "Escape") {
      const r = document.activeElement;
      r && (r.tagName === "INPUT" || r.tagName === "TEXTAREA") && r.blur(), po(), n.preventDefault();
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
  const Re = new w(), Ve = new w(), ve = new w(), Ye = (n) => {
    if (!tt) return null;
    const o = n[0], a = n[1], t = n[2];
    return tt === "x" ? (Re.set(o - 1e4, a, t), Ve.set(o + 1e4, a, t)) : tt === "y" ? (Re.set(o, a - 1e4, t), Ve.set(o, a + 1e4, t)) : (Re.set(o, a, t - 1e4), Ve.set(o, a, t + 1e4)), z.ray.distanceSqToSegment(Re, Ve, null, ve), ve;
  };
  window.__hekatanProjectOnAxis = Ye;
  const re = new _t(new ue().setFromPoints([new w(0, 0, 0), new w(0, 0, 0)]), new lt({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  re.renderOrder = 998, re.frustumCulled = false, re.visible = false, y.add(re);
  let Ne = -1, Ge = -1, dt = -1;
  const he = /* @__PURE__ */ new Set();
  window.__hekatanSelection = he;
  const Le = new _t(new ue().setFromPoints([new w(), new w()]), new lt({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  Le.renderOrder = 997, Le.frustumCulled = false, Le.visible = false, y.add(Le);
  const Je = new He(new rn(0.02, 12, 12), new et({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  Je.renderOrder = 998, Je.visible = false, y.add(Je);
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
  ft.frustumCulled = false, y.add(ft);
  const zt = 2282478;
  let ot = null;
  const Ht = (n, o, a, t) => {
    if (!e.points) return -1;
    const r = e.points.rawVal;
    let s = -1, l = t;
    for (let d = 0; d < r.length; d++) {
      const p = r[d];
      if (!p) continue;
      const g = Math.hypot(n - p[0], o - p[1], a - p[2]);
      g < l && (l = g, s = d);
    }
    return s;
  }, Bt = () => {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    for (; ft.children.length; ) {
      const l = ft.children.pop();
      (_b = (_a = l.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = l.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const l of he) {
      const [d, ...p] = l.split(":");
      if (d === "pt") {
        const g = n[+p[0]];
        if (!g) continue;
        const M = new He(new rn(0.025, 12, 12), new et({ color: zt, transparent: true, opacity: 0.9, depthTest: false }));
        M.position.set(g[0], g[1], g[2]), M.renderOrder = 999, M.__isSelectionPt = true, ft.add(M);
      } else if (d === "seg") {
        const g = o[+p[0]], M = n[g == null ? void 0 : g[+p[1]]], c = n[g == null ? void 0 : g[+p[1] + 1]];
        if (!M || !c) continue;
        const f = new ue().setFromPoints([new w(M[0], M[1], M[2]), new w(c[0], c[1], c[2])]), k = new _t(f, new lt({ color: zt, transparent: true, opacity: 0.95, depthTest: false }));
        k.renderOrder = 999, ft.add(k);
      } else if (d === "poly") {
        const M = o[+p[0]].map((k) => {
          const R = n[k];
          return R ? new w(R[0], R[1], R[2]) : null;
        }).filter(Boolean);
        if (M.length < 2) continue;
        const c = new ue().setFromPoints(M), f = new _t(c, new lt({ color: zt, transparent: true, opacity: 0.95, depthTest: false }));
        f.renderOrder = 999, ft.add(f);
      } else if (d === "aux") {
        const g = t[+p[0]];
        if (!g || g.length !== 6) continue;
        const M = new ue().setFromPoints([new w(g[0], g[1], g[2]), new w(g[3], g[4], g[5])]), c = new _t(M, new lt({ color: zt, transparent: true, opacity: 0.95, depthTest: false }));
        c.renderOrder = 999, ft.add(c);
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
    v();
  };
  window.__hekatanRefreshSelection = Bt, window.__hekatanClearSelection = () => {
    he.clear(), Bt();
  };
  const tn = (n, o, a, t, r, s, l, d, p) => {
    const g = l - t, M = d - r, c = p - s, f = g * g + M * M + c * c;
    if (f < 1e-12) return Math.hypot(n - t, o - r, a - s);
    let k = ((n - t) * g + (o - r) * M + (a - s) * c) / f;
    k = Math.max(0, Math.min(1, k));
    const R = t + k * g, X = r + k * M, G = s + k * c;
    return Math.hypot(n - R, o - X, a - G);
  }, qt = (n, o, a, t) => {
    if (!e.polylines) return null;
    const r = e.polylines.rawVal, s = e.points.rawVal;
    let l = -1, d = -1, p = t;
    for (let g = 0; g < r.length; g++) {
      const M = r[g];
      for (let c = 0; c < M.length - 1; c++) {
        const f = s[M[c]], k = s[M[c + 1]];
        if (!f || !k) continue;
        const R = tn(n, o, a, f[0], f[1], f[2], k[0], k[1], k[2]);
        R < p && (p = R, l = g, d = c);
      }
    }
    return l >= 0 ? { polyIdx: l, segIdx: d, dist: p } : null;
  }, Jt = (n, o, a, t) => {
    const r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? (r == null ? void 0 : r.val) ?? r ?? [];
    let l = -1, d = t;
    for (let p = 0; p < s.length; p++) {
      const g = s[p];
      if (!g || g.length !== 6) continue;
      const M = tn(n, o, a, g[0], g[1], g[2], g[3], g[4], g[5]);
      M < d && (d = M, l = p);
    }
    return l;
  }, An = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      re.visible = false;
      return;
    }
    re.geometry.setFromPoints([new w(t[0], t[1], t[2]), new w(t[3], t[4], t[5])]), re.visible = true;
  }, Tn = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const a = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!a || a.length < 2) {
      re.visible = false;
      return;
    }
    const r = ((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false, s = [];
    if (r || o < 0 || o >= a.length - 1) for (const l of a) {
      const d = t[l];
      d && s.push(new w(d[0], d[1], d[2]));
    }
    else {
      const l = t[a[o]], d = t[a[o + 1]];
      l && s.push(new w(l[0], l[1], l[2])), d && s.push(new w(d[0], d[1], d[2]));
    }
    re.geometry.setFromPoints(s), re.visible = true;
  }, nn = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const a = o.filter((p, g) => g !== n), t = /* @__PURE__ */ new Set();
    for (const p of a) for (const g of p) t.add(g);
    const r = e.points.rawVal, s = /* @__PURE__ */ new Map(), l = [];
    for (let p = 0; p < r.length; p++) t.has(p) && (s.set(p, l.length), l.push(r[p]));
    const d = a.map((p) => p.map((g) => s.get(g)).filter((g) => g !== void 0));
    e.points.val = l, e.polylines.val = d, e.areas && (e.areas.val = e.areas.rawVal.filter((p) => p !== n).map((p) => p > n ? p - 1 : p)), re.visible = false, Ne = -1, Ge = -1;
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
    const l = [...a.slice(0, n), ...s, ...a.slice(n + 1)], d = /* @__PURE__ */ new Set();
    for (const f of l) for (const k of f) d.add(k);
    const p = e.points.rawVal, g = /* @__PURE__ */ new Map(), M = [];
    for (let f = 0; f < p.length; f++) d.has(f) && (g.set(f, M.length), M.push(p[f]));
    const c = l.map((f) => f.map((k) => g.get(k)).filter((k) => k !== void 0));
    if (e.points.val = M, e.polylines.val = c, e.areas) {
      const f = s.length - 1;
      e.areas.val = e.areas.rawVal.map((k) => k > n ? k + f : k);
    }
    re.visible = false, Ne = -1, Ge = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  fe.geometry.setAttribute("position", new gt(e.points.rawVal.flat(), 3)), fe.geometry.computeBoundingSphere(), fe.frustumCulled = false, ke.frustumCulled = false, y.add(ke), W.position.set(0, 0, 0), W.rotateX(Math.PI / 2), W.geometry.rotateX(Math.PI / 2), W.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, a) => {
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
    const l = Math.max(4, Math.round(r)), d = e.points.rawVal.length, p = [];
    for (let g = 0; g < l; g++) {
      const M = 2 * Math.PI * g / l, c = t * Math.cos(M), f = t * Math.sin(M);
      let k;
      s === "xy" ? k = [n + c, o + f, a] : s === "xz" ? k = [n + c, o, a + f] : k = [n, o + c, a + f], p.push(k);
    }
    if (e.points.val = [...e.points.rawVal, ...p], e.polylines) {
      const g = [...p.map((c, f) => d + f), d], M = e.polylines.rawVal;
      ((_a = M[M.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...M, g, []] : e.polylines.val = [...M.slice(0, -1), g, []];
    }
  }, window.__hekatanDrawArc = (n, o, a, t = window.__hekatanArcSegs ?? 12) => {
    const r = Math.max(4, Math.round(t)), s = new w(...n), l = new w(...o), d = new w(...a), p = new w().subVectors(l, s), g = new w().subVectors(d, s), M = new w().crossVectors(p, g).normalize(), c = new w().addVectors(s, l).multiplyScalar(0.5), f = new w().addVectors(l, d).multiplyScalar(0.5), k = new w().crossVectors(p, M).normalize(), R = new w().crossVectors(new w().subVectors(d, l), M).normalize(), X = new w().subVectors(f, c), G = k.x * R.y - k.y * R.x;
    let E;
    if (Math.abs(G) > 1e-9) {
      const Xe = (X.x * R.y - X.y * R.x) / G;
      E = new w().addVectors(c, k.clone().multiplyScalar(Xe));
    } else E = c.clone();
    const j = s.distanceTo(E), te = new w().subVectors(s, E), pe = new w().subVectors(d, E), $e = Math.acos(Math.max(-1, Math.min(1, te.dot(pe) / (j * j)))), ye = e.points.rawVal.length, xe = [], mt = M.clone();
    for (let Xe = 0; Xe <= r; Xe++) {
      const Fe = Xe / r, Ue = $e * Fe, at = new Wn().setFromAxisAngle(mt, Ue), wt = te.clone().applyQuaternion(at).add(E);
      xe.push([wt.x, wt.y, wt.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...xe], e.polylines) {
      const Xe = xe.map((Ue, at) => ye + at), Fe = e.polylines.rawVal;
      e.polylines.val = [...Fe.slice(0, -1), Xe, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, a = 1, t = 6, r = 6) => {
    const s = Math.min(n[0], o[0]), l = Math.max(n[0], o[0]), d = Math.min(n[1], o[1]), p = Math.max(n[1], o[1]), g = (n[2] + o[2]) / 2, M = l - s, c = p - d, f = Math.min(a, M / 2 - 0.01, c / 2 - 0.01);
    if (f <= 0) return;
    const k = e.points.rawVal.length, R = [], X = [], G = (E, j) => {
      R.push([E, j, g]), X.push(k + R.length - 1);
    };
    for (let E = 0; E <= r; E++) G(s + f + (M - 2 * f) * E / r, d);
    for (let E = 1; E <= t; E++) {
      const j = -Math.PI / 2 + Math.PI / 2 * E / t;
      G(l - f + f * Math.cos(j), d + f + f * Math.sin(j));
    }
    for (let E = 1; E <= r; E++) G(l, d + f + (c - 2 * f) * E / r);
    for (let E = 1; E <= t; E++) {
      const j = 0 + Math.PI / 2 * E / t;
      G(l - f + f * Math.cos(j), p - f + f * Math.sin(j));
    }
    for (let E = 1; E <= r; E++) G(l - f - (M - 2 * f) * E / r, p);
    for (let E = 1; E <= t; E++) {
      const j = Math.PI / 2 + Math.PI / 2 * E / t;
      G(s + f + f * Math.cos(j), p - f + f * Math.sin(j));
    }
    for (let E = 1; E <= r; E++) G(s, p - f - (c - 2 * f) * E / r);
    for (let E = 1; E <= t; E++) {
      const j = Math.PI + Math.PI / 2 * E / t;
      G(s + f + f * Math.cos(j), d + f + f * Math.sin(j));
    }
    if (X.push(k), e.points.val = [...e.points.rawVal, ...R], e.polylines) {
      const E = e.polylines.rawVal;
      e.polylines.val = [...E.slice(0, -1), X, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const a = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], d = o[1], p = o[2];
    let g;
    if (Math.abs(s - p) < 1e-6 ? g = [[t, r, s], [l, r, s], [l, d, s], [t, d, s]] : Math.abs(r - d) < 1e-6 ? g = [[t, r, s], [l, r, s], [l, r, p], [t, r, p]] : g = [[t, r, s], [t, d, s], [t, d, p], [t, r, p]], e.points.val = [...e.points.rawVal, ...g], e.polylines) {
      const M = [a, a + 1, a + 2, a + 3, a], c = e.polylines.rawVal;
      e.polylines.val = [...c.slice(0, -1), M, []];
    }
  }, window.__hekatanDrawRectArea = (n, o) => {
    var _a;
    const a = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], d = o[1], p = o[2];
    let g;
    if (b && e.gridTarget) {
      const M = e.gridTarget.rawVal, c = new xn(...M.rotation), f = new w(1, 0, 0).applyEuler(c), k = new w(0, 1, 0).applyEuler(c), R = new w(...M.position), X = new w(t, r, s), G = new w(l, d, p), E = X.clone().sub(R).dot(f), j = X.clone().sub(R).dot(k), te = G.clone().sub(R).dot(f), pe = G.clone().sub(R).dot(k), $e = (ye, xe) => R.clone().addScaledVector(f, ye).addScaledVector(k, xe).toArray();
      g = [$e(E, j), $e(te, j), $e(te, pe), $e(E, pe)];
    } else Math.abs(s - p) < 1e-6 ? g = [[t, r, s], [l, r, s], [l, d, s], [t, d, s]] : Math.abs(r - d) < 1e-6 ? g = [[t, r, s], [l, r, s], [l, r, p], [t, r, p]] : g = [[t, r, s], [t, d, s], [t, d, p], [t, r, p]];
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
      const Be = n[Me], je = n[(Me + 1) % a];
      t += (Be[1] - je[1]) * (Be[2] + je[2]), r += (Be[2] - je[2]) * (Be[0] + je[0]), s += (Be[0] - je[0]) * (Be[1] + je[1]);
    }
    const l = Math.hypot(t, r, s) || 1;
    t /= l, r /= l, s /= l;
    let d = n[1][0] - n[0][0], p = n[1][1] - n[0][1], g = n[1][2] - n[0][2];
    const M = Math.hypot(d, p, g) || 1;
    d /= M, p /= M, g /= M;
    let c = r * g - s * p, f = s * d - t * g, k = t * p - r * d;
    const R = Math.hypot(c, f, k) || 1;
    c /= R, f /= R, k /= R;
    const X = n[0], G = (Me) => [(Me[0] - X[0]) * d + (Me[1] - X[1]) * p + (Me[2] - X[2]) * g, (Me[0] - X[0]) * c + (Me[1] - X[1]) * f + (Me[2] - X[2]) * k], E = (Me, Be) => [X[0] + Me * d + Be * c, X[1] + Me * p + Be * f, X[2] + Me * g + Be * k], j = n.map(G);
    let te = 1 / 0, pe = -1 / 0, $e = 1 / 0, ye = -1 / 0;
    for (const [Me, Be] of j) Me < te && (te = Me), Me > pe && (pe = Me), Be < $e && ($e = Be), Be > ye && (ye = Be);
    const xe = pe - te, mt = ye - $e;
    if (xe < 1e-6 || mt < 1e-6) return 0;
    let Xe = o && o > 0 ? o : 0.5;
    for (; xe / Xe * (mt / Xe) > 2500; ) Xe *= 2;
    Xe = Math.min(Xe, Math.min(xe, mt));
    const Fe = (Me, Be) => {
      let je = false;
      for (let Tt = 0, Kt = j.length - 1; Tt < j.length; Kt = Tt++) {
        const [an, mn] = j[Tt], [ln, wn] = j[Kt];
        mn > Be != wn > Be && Me < (ln - an) * (Be - mn) / (wn - mn) + an && (je = !je);
      }
      return je;
    }, Ue = Math.max(1, Math.round(xe / Xe)), at = Math.max(1, Math.round(mt / Xe)), wt = xe / Ue, kt = mt / at, Ut = /* @__PURE__ */ new Map(), $t = [], yt = e.points.rawVal.length, At = (Me, Be) => {
      const je = Me + "," + Be, Tt = Ut.get(je);
      if (Tt !== void 0) return Tt;
      const Kt = yt + $t.length;
      return $t.push(E(te + Me * wt, $e + Be * kt)), Ut.set(je, Kt), Kt;
    }, bt = [];
    for (let Me = 0; Me < Ue; Me++) for (let Be = 0; Be < at; Be++) {
      if (!Fe(te + (Me + 0.5) * wt, $e + (Be + 0.5) * kt)) continue;
      const je = At(Me, Be), Tt = At(Me + 1, Be), Kt = At(Me + 1, Be + 1), an = At(Me, Be + 1);
      bt.push([je, Tt, Kt, an]);
    }
    if (!bt.length) return 0;
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...$t], e.polylines && e.areas) {
      let Me = e.polylines.rawVal.slice();
      Me.length && Me[Me.length - 1].length === 0 && (Me = Me.slice(0, -1));
      const Be = [];
      for (const je of bt) Be.push(Me.length), Me.push([je[0], je[1], je[2], je[3], je[0]]);
      Me.push([]), e.polylines.val = Me, e.areas.val = [...e.areas.rawVal, ...Be];
    }
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    return v(), bt.length;
  };
  const cn = () => {
    if (me.length < 3) return me = [], ne.visible = false, v(), 0;
    const n = window.__hekatanMeshPolyArea(me.slice());
    return me = [], ne.visible = false, v(), n;
  };
  window.__hekatanFinalizePolyArea = cn, window.__hekatanSetInclinedPlaneFrom3 = (n, o, a) => {
    var _a;
    const t = new w(n[0], n[1], n[2]), r = new w(o[0], o[1], o[2]), s = new w(a[0], a[1], a[2]), l = new w().subVectors(r, t).cross(new w().subVectors(s, t));
    if (l.lengthSq() < 1e-9) return false;
    l.normalize();
    const d = new Wn().setFromUnitVectors(new w(0, 0, 1), l), p = new xn().setFromQuaternion(d);
    e.gridTarget && (e.gridTarget.val = { position: [t.x, t.y, t.z], rotation: [p.x, p.y, p.z] }), b = true;
    const g = new w().addVectors(t, r).add(s).multiplyScalar(1 / 3), M = Math.max(t.distanceTo(r), t.distanceTo(s), r.distanceTo(s)) * 2.2 + 4, c = M / 2;
    Pe.geometry.dispose(), Pe.geometry = new Gt(M, M), ce.geometry.dispose(), ce.geometry = new yo(new Gt(M, M)), Ke(c, 1), ie.position.copy(g), ie.quaternion.copy(d), ie.scale.set(1, 1, 1), ie.visible = true;
    try {
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
    } catch {
    }
    return v(), true;
  }, window.__hekatanResetPlaneXY = () => {
    e.gridTarget && (e.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, 0] }), b = false, ie.visible = false, v();
  };
  const Pt = new Oe();
  Pt.visible = false, y.add(Pt), window.__hekatanShowAxes = (n, o, a = 12, t = 2) => {
    var _a, _b;
    for (; Pt.children.length; ) {
      const M = Pt.children.pop();
      (_a = M.geometry) == null ? void 0 : _a.dispose(), (_b = M.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const r = Math.min(...o) - t, s = Math.max(...o) + t, l = Math.min(...n) - t, d = Math.max(...n) + t, p = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", g = (M, c, f, k, R) => {
      const X = document.createElement("canvas");
      X.width = 64, X.height = 32;
      const G = X.getContext("2d");
      G.fillStyle = R, G.font = "bold 22px sans-serif", G.textAlign = "center", G.fillText(M, 32, 26);
      const E = new xo(X), j = new go({ map: E, transparent: true }), te = new vo(j);
      return te.position.set(c, f, k), te.scale.set(1.2, 0.6, 1), te;
    };
    n.forEach((M, c) => {
      const f = c < p.length ? p[c] : `X${c}`, k = new ue().setFromPoints([new w(M, r, 0), new w(M, s, 0), new w(M, r, 0), new w(M, r, a)]), R = new yn({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), X = new Xt(k, R);
      X.computeLineDistances(), Pt.add(X), Pt.add(g(f, M, r - 0.5, 0, "#60a5fa")), Pt.add(g(f, M, s + 0.5, 0, "#60a5fa"));
    }), o.forEach((M, c) => {
      const f = `${c + 1}`, k = new ue().setFromPoints([new w(l, M, 0), new w(d, M, 0), new w(l, M, 0), new w(l, M, a)]), R = new yn({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), X = new Xt(k, R);
      X.computeLineDistances(), Pt.add(X), Pt.add(g(f, l - 0.5, M, 0, "#fb7185")), Pt.add(g(f, d + 0.5, M, 0, "#fb7185"));
    }), Pt.visible = true, v();
  }, window.__hekatanHideAxes = () => {
    Pt.visible = false, v();
  };
  const Rt = new Oe();
  Rt.visible = false, y.add(Rt);
  let Yt = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, a = 0, t = 0) => {
    var _a, _b;
    for (; Rt.children.length; ) {
      const s = Rt.children.pop();
      (_a = s.geometry) == null ? void 0 : _a.dispose(), (_b = s.material) == null ? void 0 : _b.dispose();
    }
    Yt.forEach((s) => {
      y.remove(s), s.geometry.dispose(), s.material.dispose();
    }), Yt = [];
    const r = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((s, l) => {
      const d = r[l % r.length], p = o / 2, g = [new w(a - p, t - p, s), new w(a + p, t - p, s), new w(a + p, t + p, s), new w(a - p, t + p, s), new w(a - p, t - p, s)], M = new ue().setFromPoints(g), c = new lt({ color: d, transparent: true, opacity: 0.55 });
      Rt.add(new _t(M, c));
      const f = document.createElement("canvas");
      f.width = 128, f.height = 32;
      const k = f.getContext("2d");
      k.fillStyle = `#${d.toString(16).padStart(6, "0")}`, k.font = "bold 18px sans-serif", k.fillText(`Z = ${s} m`, 4, 22);
      const R = new xo(f), X = new go({ map: R, transparent: true }), G = new vo(X);
      G.position.set(a - p - 1.5, t - p - 1.5, s), G.scale.set(2.5, 0.6, 1), Rt.add(G);
      const E = new Gt(1e4, 1e4), j = new et({ visible: false, side: Ft }), te = new He(E, j);
      te.position.set(0, 0, s), te.frustumCulled = false, te.userData = { refPlaneZ: s }, y.add(te), Yt.push(te);
    }), Rt.visible = true, v();
  }, window.__hekatanHideRefPlanes = () => {
    Rt.visible = false, Yt.forEach((n) => {
      n.visible = false;
    }), v();
  };
  const Qt = new Oe();
  Qt.frustumCulled = false, y.add(Qt);
  const $n = () => {
    var _a, _b, _c, _d;
    for (; Qt.children.length; ) {
      const a = Qt.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (a.length !== 6) continue;
      const t = new ue().setFromPoints([new w(a[0], a[1], a[2]), new w(a[3], a[4], a[5])]), r = new yn({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), s = new _t(t, r);
      s.computeLineDistances(), Qt.add(s);
    }
  };
  L.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, $n(), v());
  });
  const Nt = new Oe();
  Nt.frustumCulled = false, y.add(Nt);
  const dn = () => {
    var _a, _b, _c, _d;
    for (; Nt.children.length; ) {
      const a = Nt.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxPoints, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (!a || a.length !== 3) continue;
      const t = new He(new rn(0.025, 12, 12), new et({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(a[0], a[1], a[2]), t.renderOrder = 996, t.scale.setScalar(pt(t.position)), Nt.add(t);
    }
  };
  L.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, dn(), v());
  }), u.addEventListener("change", () => {
    Nt.children.forEach((n) => {
      n.scale.setScalar(pt(n.position));
    });
  }), window.__hekatanRenderAuxPoints = dn;
  const ht = new Oe(), Ro = new He(new rn(0.01, 12, 12), new et({ color: 16724804, transparent: true, opacity: 0.95 })), Xo = new He(new rn(0.015, 12, 12), new et({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  ht.add(Ro, Xo);
  const on = 0.08, In = (n, o, a) => {
    const t = new ue().setFromPoints([new w(...n), new w(...o)]);
    return new _t(t, new lt({ color: a, transparent: true, opacity: 0.7 }));
  };
  ht.add(In([-on, 0, 0], [on, 0, 0], 16711680)), ht.add(In([0, -on, 0], [0, on, 0], 65280)), ht.add(In([0, 0, -on], [0, 0, on], 35071)), ht.visible = false, ht.frustumCulled = false, y.add(ht);
  const no = 40, Do = 2.5, Ln = () => {
    if (!ht.visible) return;
    const o = h().position.distanceTo(ht.position), a = Math.max(0.05, Math.min(Do, o / no));
    ht.scale.setScalar(a);
  }, oo = () => {
    ft.children.length !== 0 && ft.children.forEach((n) => {
      if (!n.__isSelectionPt) return;
      const o = n;
      o.scale.setScalar(pt(o.position) * 1.8);
    });
  };
  window.__hekatanUpdateSelectionPtScale = oo, u.addEventListener("change", () => {
    Ln(), Je.visible && Dt();
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = h().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / no));
    }
    oo();
  }), window.__hekatanShowSnap = (n, o, a) => {
    ht.position.set(n, o, a), ht.visible = true, Ln(), v();
  }, window.__hekatanHideSnap = () => {
    ht.visible = false, v();
  }, m.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q;
    const o = _(n);
    if (!o) return;
    z.setFromCamera(C, o);
    const a = Q();
    if (a.length) {
      const t = a[0].point, r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, r);
      if (s) lo(s.type, s.x, s.y, s.z), ht.position.set(s.x, s.y, s.z), ht.visible = true, t.set(s.x, s.y, s.z);
      else {
        Xn();
        const M = window.__hekatanSnapEnabled !== false, c = window.__hekatanSnap2D ?? 0.5;
        M && c > 0 && (t.x = Math.round(t.x / c) * c, t.y = Math.round(t.y / c) * c, t.z = Math.round(t.z / c) * c), ht.position.copy(t), ht.visible = true;
      }
      Ln();
      const l = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (l === "select" || !l) {
        const M = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = Ht(t.x, t.y, t.z, M), f = qt(t.x, t.y, t.z, M), k = Jt(t.x, t.y, t.z, M);
        if (c >= 0) {
          const E = e.points.rawVal[c];
          Je.position.set(E[0], E[1], E[2]), Je.visible = true, Dt(), Le.visible = false, ot = { kind: "pt", a: c };
        } else if (f) {
          const E = e.points.rawVal, j = e.polylines.rawVal[f.polyIdx], te = E[j[f.segIdx]], pe = E[j[f.segIdx + 1]];
          Le.geometry.setFromPoints([new w(te[0], te[1], te[2]), new w(pe[0], pe[1], pe[2])]), Le.visible = true, Je.visible = false, ot = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(f.polyIdx)) ?? false ? { kind: "poly", a: f.polyIdx } : { kind: "seg", a: f.polyIdx, b: f.segIdx };
        } else if (k >= 0) {
          const j = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[k];
          j && (Le.geometry.setFromPoints([new w(j[0], j[1], j[2]), new w(j[3], j[4], j[5])]), Le.visible = true, Je.visible = false, ot = { kind: "aux", a: k });
        } else Le.visible = false, Je.visible = false, ot = null;
        H.style.left = n.clientX + "px", H.style.top = n.clientY + "px", H.style.display = "block";
        let R = t;
        if ((ot == null ? void 0 : ot.kind) === "pt") {
          const E = e.points.rawVal[ot.a];
          E && (R = new w(E[0], E[1], E[2]));
        }
        const X = `X=${R.x.toFixed(2)} Y=${R.y.toFixed(2)} Z=${R.z.toFixed(2)}`;
        if (ot) {
          const E = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          H.textContent = `${X}  \xB7  \u{1F5B1} Click \u2192 ${E[ot.kind]}`;
        } else H.textContent = X;
        const G = document.getElementById("hk-coord-fixed");
        G && (G.textContent = X), ae.visible = false, We.visible = false, v();
        return;
      }
      if (l === "delete") {
        const M = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = qt(t.x, t.y, t.z, M), f = Jt(t.x, t.y, t.z, M);
        let k = false;
        if (f >= 0) if (!c) k = true;
        else {
          const E = window.__hekatanDrawingAuxLines, te = ((E == null ? void 0 : E.rawVal) ?? (E == null ? void 0 : E.val) ?? E ?? [])[f];
          tn(t.x, t.y, t.z, te[0], te[1], te[2], te[3], te[4], te[5]) < c.dist && (k = true);
        }
        k ? (dt = f, Ne = -1, Ge = -1, An(f)) : c ? (Ne = c.polyIdx, Ge = c.segIdx, dt = -1, Tn(c.polyIdx, c.segIdx)) : (Ne = -1, Ge = -1, dt = -1, re.visible = false), ae.visible = false, We.visible = false, U(), H.style.left = n.clientX + "px", H.style.top = n.clientY + "px", H.style.display = "block";
        const R = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let X = "";
        k ? X = `\u{1F5D1} l\xEDnea aux #${dt + 1}` : c ? X = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(c.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${c.polyIdx + 1}` : `\u{1F5D1} seg ${c.segIdx + 1} / poly #${c.polyIdx + 1}` : X = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", H.textContent = `${R}  \xB7  ${X}`;
        const G = document.getElementById("hk-coord-fixed");
        G && (G.textContent = R), v();
        return;
      } else re.visible = false, Ne = -1, dt = -1;
      H.style.left = n.clientX + "px", H.style.top = n.clientY + "px", H.style.display = "block";
      const d = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], p = d[d.length - 1] ?? [], g = e.points.rawVal ?? [];
      if (p.length > 0 && g[p[p.length - 1]]) {
        const M = p[p.length - 1], c = g[M];
        let f = tt;
        if (st = null, !f && window.__hekatanAxisSnap !== false) {
          const Fe = m.getBoundingClientRect(), Ue = n.clientX, at = n.clientY, wt = ((_k = settings.gridSize) == null ? void 0 : _k.rawVal) ?? 10, kt = new w(c[0], c[1], c[2]), Ut = [["x", new w(1, 0, 0)], ["y", new w(0, 1, 0)], ["z", new w(0, 0, 1)]], $t = (At) => {
            const bt = At.clone().project(o);
            return { x: (bt.x * 0.5 + 0.5) * Fe.width + Fe.left, y: (-bt.y * 0.5 + 0.5) * Fe.height + Fe.top };
          };
          let yt = null;
          for (const [At, bt] of Ut) {
            const Me = $t(kt.clone().addScaledVector(bt, -wt)), Be = $t(kt.clone().addScaledVector(bt, wt)), je = Be.x - Me.x, Tt = Be.y - Me.y, Kt = Ue - Me.x, an = at - Me.y, mn = je * je + Tt * Tt || 1;
            let ln = (Kt * je + an * Tt) / mn;
            ln = Math.max(0, Math.min(1, ln));
            const wn = Math.hypot(Ue - (Me.x + ln * je), at - (Me.y + ln * Tt));
            if (yt === null || wn < yt.dpx) {
              const Zn = z.ray, uo = kt.clone().sub(Zn.origin), Un = bt.dot(Zn.direction), fo = bt.dot(uo), Wo = Zn.direction.dot(uo), ho = 1 - Un * Un, Go = Math.abs(ho) < 1e-6 ? -fo : (Un * Wo - fo) / ho;
              yt = { axis: At, dpx: wn, pt: kt.clone().addScaledVector(bt, Go) };
            }
          }
          yt && yt.dpx <= 12 && (t.copy(yt.pt), f = yt.axis, st = yt.pt.clone());
        }
        const k = !!window.__hekatanOrthoMode;
        if (!f && k) {
          const Fe = Math.abs(t.x - c[0]), Ue = Math.abs(t.y - c[1]), at = Math.abs(t.z - c[2]), wt = (_l = a[0]) == null ? void 0 : _l.object;
          let kt = null;
          wt === Te ? kt = "xy" : wt === Ie ? kt = "xz" : wt === De && (kt = "yz"), kt === "xy" ? f = Fe >= Ue ? "x" : "y" : kt === "xz" ? f = Fe >= at ? "x" : "z" : kt === "yz" ? f = Ue >= at ? "y" : "z" : f = Fe >= Ue && Fe >= at ? "x" : Ue >= at ? "y" : "z";
        }
        const R = window.__hekatanPolarTrack !== false;
        if (!f && R) {
          const Fe = t.x - c[0], Ue = t.y - c[1], at = t.z - c[2], wt = Math.hypot(Fe, Ue, at);
          if (wt > 1e-3) {
            const Ut = Math.tan(6 * Math.PI / 180) * wt, $t = Math.hypot(Ue, at), yt = Math.hypot(Fe, at), At = Math.hypot(Fe, Ue), bt = [["x", $t], ["y", yt], ["z", At]];
            bt.sort((Me, Be) => Me[1] - Be[1]), bt[0][1] <= Ut && (f = bt[0][0]);
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
        const X = Math.hypot(t.x - c[0], t.y - c[1], t.z - c[2]), G = Math.atan2(t.y - c[1], t.x - c[0]) * 180 / Math.PI, E = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        H.textContent = `${E} | \u0394L=${X.toFixed(2)}m ${G.toFixed(0)}\xB0`;
        const j = document.getElementById("hk-coord-fixed");
        j && (j.textContent = E), ae.geometry.setFromPoints([new w(c[0], c[1], c[2]), new w(t.x, t.y, t.z)]), (_n2 = ae.computeLineDistances) == null ? void 0 : _n2.call(ae), ae.visible = true, $(c[0], c[1], c[2], t.x, t.y, t.z);
        const te = window.__hekatanOrthoExt ?? 8, pe = window.__hekatanShowOrthoPlanes !== false;
        ze.visible = pe, pe || rt(null), pe && (Ze(se, c, "xy", te), Ze(Se, c, "xz", te), Ze(ge, c, "yz", te), qe(Te, c, "xy", te), qe(Ie, c, "xz", te), qe(De, c, "yz", te));
        const $e = pe ? z.intersectObjects([Te, Ie, De], false) : [];
        let ye = null;
        if ($e.length > 0) {
          const Fe = $e[0].object;
          Fe === Te ? ye = "xy" : Fe === Ie ? ye = "xz" : Fe === De && (ye = "yz");
        }
        rt(ye), ye && (Ce.style.left = n.clientX + "px", Ce.style.top = n.clientY + "px"), P.geometry.setFromPoints([new w(c[0] - te, c[1], c[2]), new w(c[0] + te, c[1], c[2])]), (_o2 = P.computeLineDistances) == null ? void 0 : _o2.call(P), K.geometry.setFromPoints([new w(c[0], c[1] - te, c[2]), new w(c[0], c[1] + te, c[2])]), (_p = K.computeLineDistances) == null ? void 0 : _p.call(K), B.geometry.setFromPoints([new w(c[0], c[1], c[2] - te), new w(c[0], c[1], c[2] + te)]), (_q = B.computeLineDistances) == null ? void 0 : _q.call(B), We.visible = true;
        const xe = P.material, mt = K.material, Xe = B.material;
        f === "x" ? (xe.opacity = 0.95, mt.opacity = 0.1, Xe.opacity = 0.1) : f === "y" ? (xe.opacity = 0.1, mt.opacity = 0.95, Xe.opacity = 0.1) : f === "z" ? (xe.opacity = 0.1, mt.opacity = 0.1, Xe.opacity = 0.95) : (xe.opacity = 0.5, mt.opacity = 0.5, Xe.opacity = 0.5);
      } else {
        const M = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        H.textContent = M;
        const c = document.getElementById("hk-coord-fixed");
        if (c && (c.textContent = M), ae.visible = false, We.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(l)) {
          if (Z = null, D = null, I.style.left = n.clientX + 20 + "px", I.style.top = n.clientY - 28 + "px", I.style.display = "block", !T) {
            I.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const k = document.activeElement;
            !(k && (k.tagName === "INPUT" || k.tagName === "TEXTAREA") && k !== I) && document.activeElement !== I && I.focus({ preventScroll: true });
            try {
              I.select();
            } catch {
            }
          }
        } else U();
      }
      v();
    } else Xn(), H.style.display = "none", ht.visible = false, ae.visible = false, We.visible = false, U(), v();
  }), L.derive(() => {
    if (!e.gridTarget) return;
    Vs(i, { position: new w(...e.gridTarget.val.position), quaternion: new Wn().setFromEuler(new xn(...e.gridTarget.val.rotation)) }, v), W.position.set(...e.gridTarget.val.position), W.quaternion.setFromEuler(new xn(...e.gridTarget.val.rotation)), W.updateMatrixWorld();
    const n = new w(0, 0, 1).applyEuler(new xn(...e.gridTarget.val.rotation));
    b = !(Math.abs(n.x) > 0.999 || Math.abs(n.y) > 0.999 || Math.abs(n.z) > 0.999);
  }), L.derive(() => {
    fe.geometry.setAttribute("position", new gt(e.points.val.flat(), 3)), fe.geometry.computeBoundingSphere();
  }), L.derive(() => {
    const n = 0.05 * S * 0.5 * x.val;
    z.params.Points.threshold = 0.4 * n;
  }), L.derive(() => {
    var _a;
    const n = e.points.val ?? [], a = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const s of a) {
      const [l, d, p] = n[s];
      t.push(l, d, p);
    }
    const r = new ue();
    r.setAttribute("position", new gt(t, 3)), _e.geometry.dispose(), _e.geometry = r;
  });
  let Bn = false, Ot = 0;
  m.addEventListener("pointerdown", () => {
    Bn = true;
  }), m.addEventListener("pointerup", () => {
    Bn = false;
  }), m.addEventListener("pointermove", () => {
    Bn && Ot++;
  });
  const St = document.createElement("div");
  St.id = "hk-window-select", St.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(St);
  let Et = null, pn = false, Vt = null;
  const Rn = (n, o, a, t, r) => {
    r ? (St.style.borderColor = "#34d399", St.style.borderStyle = "dashed", St.style.background = "rgba(52, 211, 153, 0.10)") : (St.style.borderColor = "#22d3ee", St.style.borderStyle = "solid", St.style.background = "rgba(34, 211, 238, 0.10)"), St.style.left = Math.min(n, a) + "px", St.style.top = Math.min(o, t) + "px", St.style.width = Math.abs(a - n) + "px", St.style.height = Math.abs(t - o) + "px", St.style.display = "block";
  }, so = (n, o, a, t, r) => {
    var _a, _b, _c, _d;
    const s = Math.min(n, a), l = Math.max(n, a), d = Math.min(o, t), p = Math.max(o, t), g = a < n, M = m.getBoundingClientRect(), c = h();
    c.updateMatrixWorld();
    const f = (ye) => {
      const xe = new w(ye[0], ye[1], ye[2]);
      return xe.project(c), { x: M.left + (xe.x * 0.5 + 0.5) * M.width, y: M.top + (-xe.y * 0.5 + 0.5) * M.height };
    }, k = (ye) => ye.x >= s && ye.x <= l && ye.y >= d && ye.y <= p, R = (ye, xe) => !(ye.x < s && xe.x < s || ye.x > l && xe.x > l || ye.y < d && xe.y < d || ye.y > p && xe.y > p);
    r || he.clear();
    let X = 0;
    const G = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let ye = 0; ye < G.length; ye++) {
      const xe = G[ye];
      xe && k(f(xe)) && (he.add(`pt:${ye}`), X++);
    }
    const E = (ye, xe) => g ? k(ye) || k(xe) || R(ye, xe) : k(ye) && k(xe), j = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], te = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let ye = 0; ye < j.length; ye++) {
      const xe = j[ye];
      if (te.includes(ye)) {
        let Xe;
        if (!g) Xe = xe.every((Fe) => {
          const Ue = G[Fe];
          return !!Ue && k(f(Ue));
        });
        else {
          Xe = false;
          for (let Fe = 0; Fe < xe.length - 1; Fe++) {
            const Ue = G[xe[Fe]], at = G[xe[Fe + 1]];
            if (!(!Ue || !at) && E(f(Ue), f(at))) {
              Xe = true;
              break;
            }
          }
        }
        Xe && (he.add(`poly:${ye}`), X++);
      } else for (let Xe = 0; Xe < xe.length - 1; Xe++) {
        const Fe = G[xe[Xe]], Ue = G[xe[Xe + 1]];
        !Fe || !Ue || E(f(Fe), f(Ue)) && (he.add(`seg:${ye}:${Xe}`), X++);
      }
    }
    const $e = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let ye = 0; ye < $e.length; ye++) {
      const xe = $e[ye];
      if (!xe || xe.length !== 6) continue;
      const mt = f([xe[0], xe[1], xe[2]]), Xe = f([xe[3], xe[4], xe[5]]);
      E(mt, Xe) && (he.add(`aux:${ye}`), X++);
    }
    Bt(), le(`${g ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${X} item(s) ${r ? "agregados a" : "\u2192"} selecci\xF3n (total ${he.size})`), St.style.display = "none";
  }, vn = () => {
    Vt && (Vt = null, St.style.display = "none", le("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = vn, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && Vt && vn();
  });
  const ao = () => {
    var _a, _b, _c, _d;
    if (he.size === 0) return false;
    const n = [...he], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], a = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? [], l = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Set();
    for (const R of n) {
      const [X, ...G] = R.split(":");
      if (X === "pt") l.add(+G[0]);
      else if (X === "poly") d.add(+G[0]);
      else if (X === "seg") {
        const E = +G[0], j = +G[1];
        p.has(E) || p.set(E, /* @__PURE__ */ new Set()), p.get(E).add(j);
      } else X === "aux" && g.add(+G[0]);
    }
    let M = 0, c = [], f = [];
    const k = /* @__PURE__ */ new Map();
    for (let R = 0; R < a.length; R++) {
      if (d.has(R)) {
        M++;
        continue;
      }
      k.set(R, c.length);
      const X = p.get(R);
      if (X && X.size > 0) {
        let G = [];
        for (let E = 0; E < a[R].length; E++) G.push(a[R][E]), E < a[R].length - 1 && X.has(E) && (G.length >= 2 && c.push(G), G = [], M++);
        (G.length >= 2 || G.length === 1) && c.push(G);
      } else c.push([...a[R]]);
    }
    if (l.size > 0) {
      const R = [], X = /* @__PURE__ */ new Map();
      for (let E = 0; E < o.length; E++) {
        if (l.has(E)) {
          M++;
          continue;
        }
        X.set(E, R.length), R.push([...o[E]]);
      }
      const G = [];
      for (const E of c) {
        let j = [];
        for (const te of E) {
          const pe = X.get(te);
          pe === void 0 ? (j.length >= 2 && G.push(j), j = []) : j.push(pe);
        }
        j.length >= 2 && G.push(j);
      }
      c = G, e.points.val = R;
    }
    for (const R of t) {
      const X = k.get(R);
      X !== void 0 && X < c.length && f.push(X);
    }
    if (e.polylines && (e.polylines.val = c), e.areas && (e.areas.val = f), g.size > 0 && r) {
      const R = s.filter((X, G) => !g.has(G));
      "val" in r ? r.val = R : window.__hekatanDrawingAuxLines = R, M += g.size;
    }
    he.clear(), Bt();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return le(`\u{1F5D1} ${M} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = ao, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement, a = o && (o.id === "hk3-cmd-input" || o.id === "hk-dyn-input") && o.value === "";
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && !a || he.size !== 0 && (n.preventDefault(), ao());
  });
  const Ct = document.createElement("div");
  Ct.id = "hk-properties-pane";
  const io = "hk-props-pane-pos";
  let un = null;
  try {
    const n = localStorage.getItem(io);
    n && (un = JSON.parse(n));
  } catch {
  }
  Ct.style.cssText = ["position:fixed", un ? `left:${un.left}px` : "left:14px", un ? `top:${un.top}px` : "top:452px", "transform:none", "width:min(300px, calc(100vw - 32px))", "max-height:calc(100vh - 560px)", "overflow-y:auto", "z-index:201", "box-shadow:0 6px 24px rgba(0,0,0,0.45)", "border-radius:6px", "display:none"].join(";") + ";", document.body.appendChild(Ct);
  const Yo = () => {
    const n = Ct.querySelector(".tp-rotv_b");
    if (!n || n.__hkDragWired) return;
    n.__hkDragWired = true, n.style.cursor = "move", n.style.userSelect = "none";
    let o = false, a = 0, t = 0, r = 0, s = 0;
    n.addEventListener("mousedown", (l) => {
      o = true, a = l.clientX, t = l.clientY;
      const d = Ct.getBoundingClientRect();
      r = d.left, s = d.top, Ct.style.transform = "none", Ct.style.left = `${r}px`, Ct.style.top = `${s}px`, l.preventDefault();
    }), window.addEventListener("mousemove", (l) => {
      if (!o) return;
      const d = l.clientX - a, p = l.clientY - t, g = Math.max(0, Math.min(window.innerWidth - 80, r + d)), M = Math.max(0, Math.min(window.innerHeight - 40, s + p));
      Ct.style.left = `${g}px`, Ct.style.top = `${M}px`;
    }), window.addEventListener("mouseup", () => {
      if (o) {
        o = false;
        try {
          localStorage.setItem(io, JSON.stringify({ left: parseFloat(Ct.style.left), top: parseFloat(Ct.style.top) }));
        } catch {
        }
      }
    });
  }, Y = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 }, vt = { dx: 0, dy: 0, dz: 3, copias: 1 };
  let Qe = null;
  const ut = (n, o, a, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: a, value: t } }));
  }, No = () => {
    if (Qe && (Qe.dispose(), Qe = null), he.size === 0) {
      Ct.style.display = "none";
      return;
    }
    const n = [...he], o = n.filter((c) => c.startsWith("pt:")), a = n.filter((c) => c.startsWith("seg:")), t = n.filter((c) => c.startsWith("poly:")), r = n.filter((c) => c.startsWith("aux:")), s = o.length > 0, l = a.length > 0, d = t.length > 0, p = !s && !l && !d, g = [];
    o.length && g.push(`\u{1F535} ${o.length} nodo(s)`), a.length && g.push(`\u{1F4CF} ${a.length} segmento(s)`), t.length && g.push(`\u25AD ${t.length} \xE1rea(s)`), r.length && g.push(`\u250A ${r.length} aux`);
    const M = `\u{1F3AF} ${he.size} item(s) \u2014 ${g.join(", ")}`;
    Qe = new Eo({ container: Ct, title: M });
    {
      const c = Qe.addFolder({ title: "\u270F\uFE0F Editar \u2014 Replicar / Mover", expanded: false });
      c.addBinding(vt, "dx", { label: "\u0394x (m)", step: 0.1 }), c.addBinding(vt, "dy", { label: "\u0394y (m)", step: 0.1 }), c.addBinding(vt, "dz", { label: "\u0394z (m)", step: 0.1 }), c.addBinding(vt, "copias", { label: "Copias", min: 1, max: 50, step: 1 }), c.addButton({ title: "\u29C9 Replicar selecci\xF3n" }).on("click", () => {
        var _a;
        const k = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, vt.dx, vt.dy, vt.dz, vt.copias);
        le(k ? `\u29C9 Replicado \xD7${k} (\u0394 ${vt.dx},${vt.dy},${vt.dz} m)` : "\u26A0 Nada que replicar \u2014 seleccion\xE1 nodos/frames/\xE1reas");
      }), c.addButton({ title: "\u2192 Mover selecci\xF3n (1 copia, sin duplicar geometr\xEDa base)" }).on("click", () => {
        var _a;
        const k = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, vt.dx, vt.dy, vt.dz, 1);
        le(k ? `\u2192 Copia desplazada \u0394 ${vt.dx},${vt.dy},${vt.dz} m` : "\u26A0 Nada seleccionado");
      });
      const f = c.addFolder({ title: "\u{1F9F2} Snap", expanded: false });
      f.addButton({ title: "Snap a grilla ON/OFF (F9)" }).on("click", () => {
        var _a;
        return (_a = window.__hekatanToggleSnap) == null ? void 0 : _a.call(window);
      }), f.addButton({ title: "OSNAP (endpoints/medios) ON/OFF" }).on("click", () => {
        window.__hekatanOsnapOn = !(window.__hekatanOsnapOn ?? true), le(`\u{1F9F2} OSNAP ${window.__hekatanOsnapOn ? "ON" : "OFF"}`);
      });
    }
    if (s) {
      const c = Qe.addFolder({ title: `\u{1F4CC} Restraints (DOFs) \u2014 ${o.length} nodo(s)` });
      c.addBinding(Y, "Ux"), c.addBinding(Y, "Uy"), c.addBinding(Y, "Uz"), c.addBinding(Y, "Rx"), c.addBinding(Y, "Ry"), c.addBinding(Y, "Rz");
      const f = Qe.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      f.addBinding(Y, "Kx", { label: "Kx", min: 0, step: 100 }), f.addBinding(Y, "Ky", { label: "Ky", min: 0, step: 100 }), f.addBinding(Y, "Kz", { label: "Kz", min: 0, step: 100 }), f.addBinding(Y, "Krx", { label: "Krx", min: 0, step: 1e3 }), f.addBinding(Y, "Kry", { label: "Kry", min: 0, step: 1e3 }), f.addBinding(Y, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const k = Qe.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      k.addBinding(Y, "Fx", { step: 0.1 }), k.addBinding(Y, "Fy", { step: 0.1 }), k.addBinding(Y, "Fz", { step: 0.1 }), k.addBinding(Y, "Mx", { step: 0.1 }), k.addBinding(Y, "My", { step: 0.1 }), k.addBinding(Y, "Mz", { step: 0.1 }), Qe.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(Y, "mass", { label: "m", min: 0, step: 1 }), Qe.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(Y, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), Qe.addButton({ title: `\u2713 Aplicar a ${o.length} nodo(s) seleccionado(s)` }).on("click", () => {
        let G = 0;
        const E = [Y.Ux, Y.Uy, Y.Uz, Y.Rx, Y.Ry, Y.Rz];
        E.some((pe) => pe) && (ut("nodes", o, "supports", E), G++);
        const j = [Y.Fx, Y.Fy, Y.Fz, Y.Mx, Y.My, Y.Mz];
        j.some((pe) => pe !== 0) && (ut("nodes", o, "loads", j), G++);
        const te = [Y.Kx, Y.Ky, Y.Kz, Y.Krx, Y.Kry, Y.Krz];
        if (te.some((pe) => pe !== 0) && (ut("nodes", o, "springs", te), G++), Y.mass !== 0 && (ut("nodes", o, "mass", Y.mass), G++), Y.diaphragm !== "Ninguno" && (ut("nodes", o, "diaphragm", Y.diaphragm), G++), G === 0) {
          le("\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para apoyo, o un valor de carga/resorte/masa, y volv\xE9 a aplicar.");
          let pe = document.getElementById("hk-prop-toast");
          pe || (pe = document.createElement("div"), pe.id = "hk-prop-toast", pe.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);z-index:99999;padding:9px 20px;border-radius:8px;font:600 14px system-ui;color:#fff;pointer-events:none;transition:opacity .25s;box-shadow:0 4px 16px rgba(0,0,0,.4)", document.body.appendChild(pe)), pe.textContent = "\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para empotrado/articulado, despu\xE9s Aplicar", pe.style.background = "rgba(217,119,6,0.97)", pe.style.opacity = "1", clearTimeout(window.__hekatanPropToastT), window.__hekatanPropToastT = setTimeout(() => {
            pe && (pe.style.opacity = "0");
          }, 3200);
        } else le(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    }
    if (l) {
      const c = Qe.addFolder({ title: `\u{1F4CF} Secci\xF3n frame \u2014 ${a.length} seg(s)` });
      c.addBinding(Y, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), c.addBinding(Y, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const f = Qe.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      f.addBinding(Y, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), f.addBinding(Y, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), f.addBinding(Y, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), f.addBinding(Y, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), Qe.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(Y, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), Qe.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(Y, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const X = Qe.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      X.addBinding(Y, "relMxI", { label: "Mx I" }), X.addBinding(Y, "relMyI", { label: "My I" }), X.addBinding(Y, "relMzI", { label: "Mz I" });
      const G = Qe.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      G.addBinding(Y, "relMxJ", { label: "Mx J" }), G.addBinding(Y, "relMyJ", { label: "My J" }), G.addBinding(Y, "relMzJ", { label: "Mz J" }), Qe.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(Y, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const j = Qe.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      j.addBinding(Y, "LKx", { label: "LKx", min: 0, step: 100 }), j.addBinding(Y, "LKy", { label: "LKy", min: 0, step: 100 }), j.addBinding(Y, "LKz", { label: "LKz", min: 0, step: 100 });
      const te = Qe.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      te.addBinding(Y, "qx", { step: 0.1 }), te.addBinding(Y, "qy", { step: 0.1 }), te.addBinding(Y, "qz", { step: 0.1 }), Qe.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(Y, "massPerM", { label: "m/L", min: 0, step: 1 }), Qe.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        ut("segs", a, "section", Y.section), ut("segs", a, "material", Y.material_frame);
        const $e = { A: Y.A_mod, Iz: Y.Iz_mod, Iy: Y.Iy_mod, J: Y.J_mod };
        ($e.A !== 1 || $e.Iz !== 1 || $e.Iy !== 1 || $e.J !== 1) && ut("segs", a, "modifiers", $e), Y.insertionPoint !== "10 \u2014 Centroid" && ut("segs", a, "insertionPoint", Y.insertionPoint), Y.beta !== 0 && ut("segs", a, "beta", Y.beta);
        const ye = [Y.relMxI, Y.relMyI, Y.relMzI], xe = [Y.relMxJ, Y.relMyJ, Y.relMzJ];
        (ye.some((Fe) => Fe) || xe.some((Fe) => Fe)) && ut("segs", a, "releases", { i: ye, j: xe }), Y.hinges !== "None" && ut("segs", a, "hinges", Y.hinges);
        const mt = [Y.LKx, Y.LKy, Y.LKz];
        mt.some((Fe) => Fe !== 0) && ut("segs", a, "lineSprings", mt);
        const Xe = [Y.qx, Y.qy, Y.qz];
        Xe.some((Fe) => Fe !== 0) && ut("segs", a, "distLoad", Xe), Y.massPerM !== 0 && ut("segs", a, "massPerM", Y.massPerM), le(`\u2713 Propiedades aplicadas a ${a.length} segmento(s)`);
      });
    }
    if (d) {
      const c = Qe.addFolder({ title: `\u25AD Shell / \xC1rea \u2014 ${t.length}` });
      c.addBinding(Y, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), c.addBinding(Y, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), c.addBinding(Y, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), Qe.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(Y, "surfLoad", { label: "q", step: 0.1 }), Qe.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        ut("areas", t, "shellType", Y.shellType), ut("areas", t, "thickness", Y.thickness), ut("areas", t, "material", Y.material_shell), Y.surfLoad !== 0 && ut("areas", t, "surfLoad", Y.surfLoad), le(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    }
    if (p) {
      const c = Qe.addFolder({ title: "\u2139 Selecci\xF3n" }), f = { msg: "Seleccion\xE1 nodos, frames o \xE1reas para editar" };
      c.addBinding(f, "msg", { readonly: true, label: "" });
    }
    Qe.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      he.clear(), Bt();
    }), Ct.style.display = "block", Yo();
  };
  window.__hekatanRefreshPropsPane = No;
  let sn = null, Mn = false;
  m.addEventListener("pointerdown", (n) => {
    n.button === 2 && (sn = { x: n.clientX, y: n.clientY }, Mn = false);
  }), m.addEventListener("pointermove", (n) => {
    if (sn && n.buttons & 2 && !Mn) {
      const o = n.clientX - sn.x, a = n.clientY - sn.y;
      Math.hypot(o, a) > 8 && (Mn = true);
    }
  }), m.addEventListener("pointerup", (n) => {
    var _a, _b, _c;
    if (n.button === 2) {
      const o = sn !== null && !Mn;
      sn = null;
      const a = window.__hekatanRClickOnElement === true;
      if (window.__hekatanRClickOnElement = false, a) return;
      if (o) {
        if (Vt ? vn() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), he.size > 0 && (he.clear(), Bt()), e.polylines) {
          const s = e.polylines.rawVal;
          (s[s.length - 1] ?? []).length > 0 && (e.polylines.val = [...s, []]);
        }
        const t = window.__hekatanCadState, r = (_b = (_a = t == null ? void 0 : t.get) == null ? void 0 : _a.call(t)) == null ? void 0 : _b.tool;
        r && r !== "select" && r !== "none" ? ((_c = t == null ? void 0 : t.setTool) == null ? void 0 : _c.call(t, "select"), le(`\u238B Cancelado \u2014 tool '${r}' cerrado, volv\xE9s a Seleccionar`)) : le("\u238B Cancelado (click derecho)");
      }
    }
  }), m.addEventListener("contextmenu", (n) => {
    n.preventDefault(), n.stopPropagation();
  }, { capture: true }), m.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && (window.__hekatanBloquearVentana || n.pointerType !== "touch" && (Et = null, pn = false));
  }), m.addEventListener("pointermove", (n) => {
    if (Vt && n.buttons === 0) {
      const s = n.clientX < Vt.x;
      Rn(Vt.x, Vt.y, n.clientX, n.clientY, s);
      return;
    }
    if (!Et) return;
    const o = n.clientX - Et.x, a = n.clientY - Et.y, t = Math.hypot(o, a);
    if (!pn && t < 8) return;
    pn = true;
    const r = n.clientX < Et.x;
    Rn(Et.x, Et.y, n.clientX, n.clientY, r);
  }), m.addEventListener("pointerup", (n) => {
    if (!Et) return;
    if (!pn) {
      Et = null;
      return;
    }
    const o = n.ctrlKey || n.metaKey || n.shiftKey;
    so(Et.x, Et.y, n.clientX, n.clientY, o), Et = null, pn = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const Zt = new Oe();
  Zt.visible = false, Zt.frustumCulled = false, y.add(Zt);
  const Zo = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, lo = (n, o, a, t) => {
    var _a, _b, _c, _d;
    for (; Zt.children.length; ) {
      const d = Zt.children.pop();
      (_b = (_a = d.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = d.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const r = Zo[n] ?? 16777215, s = 0.05, l = new ue().setFromPoints([new w(o - s, a - s, t), new w(o + s, a - s, t), new w(o + s, a - s, t), new w(o + s, a + s, t), new w(o + s, a + s, t), new w(o - s, a + s, t), new w(o - s, a + s, t), new w(o - s, a - s, t)]);
    Zt.add(new Xt(l, new lt({ color: r, linewidth: 2 }))), Zt.position.set(0, 0, 0), Zt.visible = true;
  }, Xn = () => {
    Zt.visible = false;
  }, Uo = (n, o, a, t) => {
    var _a;
    const r = window.__hekatanOsnap, s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let d = null;
    const p = (c, f, k, R) => {
      const X = Math.hypot(f - n, k - o, R - a);
      X > t || (!d || X < d.d) && (d = { type: c, x: f, y: k, z: R, d: X });
    };
    (r.node || r.end) && s.forEach((c) => {
      r.node && p("node", c[0], c[1], c[2]);
    });
    for (const c of l) if (!(c.length < 2)) for (let f = 0; f < c.length - 1; f++) {
      const k = s[c[f]], R = s[c[f + 1]];
      if (!(!k || !R) && (r.end && (p("end", k[0], k[1], k[2]), p("end", R[0], R[1], R[2])), r.mid && p("mid", (k[0] + R[0]) / 2, (k[1] + R[1]) / 2, (k[2] + R[2]) / 2), r.nea || r.per)) {
        const X = R[0] - k[0], G = R[1] - k[1], E = R[2] - k[2], j = X * X + G * G + E * E;
        if (j < 1e-12) continue;
        const te = Math.max(0, Math.min(1, ((n - k[0]) * X + (o - k[1]) * G + (a - k[2]) * E) / j)), pe = k[0] + te * X, $e = k[1] + te * G, ye = k[2] + te * E;
        r.nea && p("nea", pe, $e, ye), r.per && p("per", pe, $e, ye);
      }
    }
    const g = window.__hekatanDrawingAuxLines, M = (g == null ? void 0 : g.rawVal) ?? (g == null ? void 0 : g.val) ?? g ?? [];
    for (const c of M) {
      if (c.length !== 6) continue;
      const f = [c[0], c[1], c[2]], k = [c[3], c[4], c[5]];
      if (r.end && (p("end", f[0], f[1], f[2]), p("end", k[0], k[1], k[2])), r.mid && p("mid", (f[0] + k[0]) / 2, (f[1] + k[1]) / 2, (f[2] + k[2]) / 2), r.nea || r.per) {
        const R = k[0] - f[0], X = k[1] - f[1], G = k[2] - f[2], E = R * R + X * X + G * G;
        if (E < 1e-12) continue;
        const j = Math.max(0, Math.min(1, ((n - f[0]) * R + (o - f[1]) * X + (a - f[2]) * G) / E)), te = f[0] + j * R, pe = f[1] + j * X, $e = f[2] + j * G;
        r.nea && p("nea", te, pe, $e), r.per && p("per", te, pe, $e);
      }
    }
    return d ? { type: d.type, x: d.x, y: d.y, z: d.z } : null;
  };
  window.__hekatanOsnapCompute = Uo, window.__hekatanOsnapShow = lo, window.__hekatanOsnapHide = Xn;
  let Ae = [], Mt = 0;
  const fn = document.createElement("div");
  fn.id = "hk-cad-status", fn.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", fn.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(fn);
  const Ko = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), tt && n.push(`\u{1F512} LOCK ${tt.toUpperCase()}`);
    const a = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(a) > 1e-3 && n.push(`Cota Z=${a}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, le = (n) => {
    const o = n + Ko();
    fn.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    le(o);
  }, window.__hekatanCadResetPending = () => {
    Ae = [], me = [], ne.visible = false, Dn(), v(), le("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  function Dn() {
    if (!e.polylines) return;
    const n = e.polylines.rawVal.filter((o) => o.length >= 2);
    e.polylines.val = [...n, []];
  }
  window.__hekatanCerrarPolilinea = Dn;
  const hn = [], Wt = () => {
    var _a, _b;
    hn.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), hn.length > 100 && hn.shift();
  }, ro = () => {
    var _a;
    const n = hn.pop();
    if (!n) {
      le("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), Ae = [], ae.visible = false, We.visible = false, U(), le(`\u21B6 Undo \u2014 ${hn.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    v();
  };
  window.__hekatanPushUndo = Wt, window.__hekatanUndo = ro, document.addEventListener("keydown", (n) => {
    var _a;
    if ((n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey) {
      const o = n.target, a = o == null ? void 0 : o.tagName;
      if ((a === "INPUT" || a === "TEXTAREA") && o.type !== "checkbox" && o.type !== "range" && ((_a = o.value) == null ? void 0 : _a.length) > 0) return;
      n.preventDefault(), n.stopPropagation(), ro();
    }
  }, { capture: true });
  const co = () => {
    Ae = [], Dn(), tt = null, Lt(), ae.visible = false, We.visible = false, U(), le("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), v();
  };
  window.__hekatanFinalizeDraw = co;
  const po = () => {
    var _a, _b, _c;
    Ae = [], me = [], ne.visible = false;
    let n = false;
    he.size && (he.clear(), Bt(), n = true), co();
    try {
      const o = window.__hekatanCadState, a = (_b = (_a = o == null ? void 0 : o.get) == null ? void 0 : _a.call(o)) == null ? void 0 : _b.tool;
      a && a !== "select" && ((_c = o == null ? void 0 : o.setTool) == null ? void 0 : _c.call(o, "select"));
    } catch {
    }
    le(n ? "\u238B Selecci\xF3n cancelada" : "\u238B Sin herramienta \u2014 arrastr\xE1 para seleccionar"), v();
  };
  window.__hekatanEscapeCancel = po, window.__hekatanReplicateSelection = (n, o, a, t) => {
    var _a, _b, _c, _d;
    t = Math.max(1, Math.round(t || 1));
    const r = [...he], s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], d = new Set(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? []), p = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), M = [];
    if (r.forEach((X) => {
      if (X.startsWith("pt:")) p.add(+X.slice(3));
      else if (X.startsWith("poly:")) {
        const G = +X.slice(5);
        g.add(G), (l[G] || []).forEach((E) => p.add(E));
      } else if (X.startsWith("seg:")) {
        const G = X.split(":"), E = +G[1], j = +G[2], te = l[E] || [], pe = te[j], $e = te[j + 1];
        pe != null && $e != null && (M.push([pe, $e]), p.add(pe), p.add($e));
      }
    }), !p.size) return 0;
    Wt();
    const c = [...s];
    let f = l.slice();
    f.length && f[f.length - 1].length === 0 && (f = f.slice(0, -1));
    const k = [...((_c = e.areas) == null ? void 0 : _c.rawVal) ?? []], R = [...p];
    for (let X = 1; X <= t; X++) {
      const G = n * X, E = o * X, j = a * X, te = /* @__PURE__ */ new Map();
      R.forEach((pe) => {
        te.set(pe, c.length), c.push([s[pe][0] + G, s[pe][1] + E, s[pe][2] + j]);
      }), g.forEach((pe) => {
        const $e = l[pe].map((xe) => te.has(xe) ? te.get(xe) : xe), ye = f.length;
        f.push($e), d.has(pe) && k.push(ye);
      }), M.forEach(([pe, $e]) => {
        f.push([te.get(pe), te.get($e)]);
      });
    }
    f.push([]), e.points.val = c, e.polylines && (e.polylines.val = f), e.areas && (e.areas.val = k);
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return v(), t;
  }, m.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z;
    if (Ot > 5) {
      Ot = 0;
      return;
    }
    Ot = 0;
    const o = _(n);
    if (!o) return;
    z.setFromCamera(C, o);
    const a = Q();
    if (!a.length) return;
    {
      const s = o.position.distanceTo(u.target) || 1, l = a[0].distance ?? o.position.distanceTo(a[0].point), d = a[0].point;
      if (!isFinite(d.x) || !isFinite(d.y) || !isFinite(d.z) || l > Math.max(s * 12, 300)) {
        le("\u26A0 Click rasante descartado \u2014 cay\xF3 demasiado lejos. Acerc\xE1 la vista o clicke\xE1 sobre la grilla.");
        return;
      }
    }
    let t = a[0].point;
    (n.ctrlKey || n.metaKey) && (t = new w(Math.round(a[0].point.x), Math.round(a[0].point.y), Math.round(a[0].point.z)));
    {
      const s = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], l = s[s.length - 1] ?? [], d = e.points.rawVal ?? [];
      if (l.length > 0) {
        const p = d[l[l.length - 1]];
        if (p) {
          const g = !!window.__hekatanOrthoMode;
          let M = tt;
          if (!M && g) {
            const c = Math.abs(t.x - p[0]), f = Math.abs(t.y - p[1]), k = Math.abs(t.z - p[2]);
            M = c >= f && c >= k ? "x" : f >= k ? "y" : "z";
          }
          M === "x" ? t = new w(t.x, p[1], p[2]) : M === "y" ? t = new w(p[0], t.y, p[2]) : M === "z" && (t = new w(p[0], p[1], t.z));
        }
      }
    }
    if (st) t = st.clone(), le(`\u{1F4D0} Eje \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.2, l = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, s);
      if (l) t = new w(l.x, l.y, l.z), le(`\u{1F3AF} Snap [${l.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      else {
        const d = window.__hekatanSnapEnabled !== false, p = window.__hekatanSnap2D ?? 0;
        d && p > 0 && (t = new w(Math.round(t.x / p) * p, Math.round(t.y / p) * p, Math.round(t.z / p) * p));
      }
    }
    const r = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (r === "select" || r === "none" || !r) {
      if (ot) {
        Vt && vn();
        const { kind: s, a: l, b: d } = ot, p = d !== void 0 ? `${s}:${l}:${d}` : `${s}:${l}`;
        n.ctrlKey || n.metaKey || n.shiftKey || he.clear(), he.has(p) ? he.delete(p) : he.add(p), Bt(), le(`\u2713 Seleccionados ${he.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const s = n.ctrlKey || n.metaKey || n.shiftKey, l = n.clientX, d = n.clientY;
        Vt ? (so(Vt.x, Vt.y, l, d, s), Vt = null) : s || (Vt = { x: l, y: d }, le("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), Rn(l, d, l + 1, d + 1, false));
      }
      return;
    }
    if (r === "axis") {
      const s = window.__hekatanAxisDraw;
      if (!s) return;
      if (!s.pendingStart) {
        s.pendingStart = [t.x, t.y, t.z], le(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const l = s.mode === "number", d = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, s.pendingStart, [t.x, t.y, t.z], l);
      le(`\u2713 Eje "${d}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (r === "delete") {
      if (dt >= 0) {
        const s = window.__hekatanDrawingAuxLines, l = (s == null ? void 0 : s.rawVal) ?? (s == null ? void 0 : s.val) ?? s ?? [], d = dt;
        if (d >= 0 && d < l.length) {
          Wt();
          const p = l.slice(0, d).concat(l.slice(d + 1));
          s && typeof s == "object" && "val" in s ? s.val = p : window.__hekatanDrawingAuxLines = p, le(`\u{1F5D1} L\xEDnea auxiliar #${d + 1} borrada`), dt = -1, re.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (Ne >= 0) {
        const s = Ne, l = Ge;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(s)) ?? false ? (nn(s), le(`\u{1F5D1} \xC1rea #${s + 1} (shell Q4) borrada`)) : l >= 0 ? (En(s, l), le(`\u{1F5D1} Segmento ${l + 1} de polil\xEDnea #${s + 1} borrado`)) : (nn(s), le(`\u{1F5D1} Polil\xEDnea #${s + 1} borrada`));
      } else le("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (r === "circle") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        le("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [s, l] = Ae, d = Math.hypot(l[0] - s[0], l[1] - s[1], l[2] - s[2]);
      Math.abs(l[0] - s[0]);
      const p = Math.abs(l[1] - s[1]), M = Math.abs(l[2] - s[2]) < 1e-3 ? "xy" : p < 1e-3 ? "xz" : "yz", c = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, s[0], s[1], s[2], d, c, M), le(`\u2713 C\xEDrculo dibujado en ${M.toUpperCase()} \u2014 r=${d.toFixed(2)}m, ${c} segmentos`), Ae = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (r === "arc") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        le("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (Ae.length === 2) {
        le("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [s, l, d] = Ae, p = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, s, l, d, p), le(`\u2713 Arco dibujado \u2014 ${p} segmentos`), Ae = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (r === "rect") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        le("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ae;
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, s, l), le(`\u2713 Rect\xE1ngulo dibujado \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Ae = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (r === "rectarea") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        le("\u25AD \xC1rea rectangular \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ae;
      (_p = window.__hekatanDrawRectArea) == null ? void 0 : _p.call(window, s, l), le(`\u2713 \xC1rea rectangular (shell Q4) creada \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Ae = [];
      return;
    }
    if (r === "polyarea") {
      me.push([t.x, t.y, t.z]), ne.geometry.setFromPoints(me.map((s) => new w(s[0], s[1], s[2]))), ne.visible = me.length >= 1, le(`\u25B0 \xC1rea libre \u2014 ${me.length} punto(s). Click m\xE1s v\xE9rtices, o Enter / click-derecho para cerrar y mallar (m\xEDn. 3).`), v();
      return;
    }
    if (r === "plane3") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length < 3) {
        le(`\u25E3 Plano inclinado \u2014 punto ${Ae.length}/3. Tip: cambi\xE1 la Cota Z (o enganch\xE1 un nodo) entre clicks para darle inclinaci\xF3n.`);
        return;
      }
      const [s, l, d] = Ae, p = (_q = window.__hekatanSetInclinedPlaneFrom3) == null ? void 0 : _q.call(window, s, l, d);
      le(p ? "\u2713 Plano de trabajo INCLINADO activo. Dibuj\xE1 el \xE1rea (\u25AD/\u2B21) sobre \xE9l. (XY para resetear)" : "\u26A0 Los 3 puntos son colineales \u2014 no definen un plano. Reintent\xE1."), Ae = [];
      return;
    }
    if (r === "col") {
      Wt();
      const s = t.z, l = Mt && Mt > 0 ? Mt : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, s], [t.x, t.y, s + l]];
      const d = e.polylines.rawVal, p = e.points.rawVal.length;
      e.polylines.val = [...d.slice(0, -1), ...d[d.length - 1].length > 0 ? [d[d.length - 1]] : [], [p - 2, p - 1], []], Mt = 0, le(`\u258C Columna creada \u2014 h=${l.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (r === "wall") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        le("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [s, l] = Ae, d = Mt && Mt > 0 ? Mt : 3;
      Wt();
      const p = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [s[0], s[1], s[2]], [l[0], l[1], l[2]], [l[0], l[1], l[2] + d], [s[0], s[1], s[2] + d]];
      const g = e.polylines.rawVal;
      if (g.length - 1, e.polylines.val = [...g.slice(0, -1), ...g[g.length - 1].length > 0 ? [g[g.length - 1]] : [], [p, p + 1, p + 2, p + 3, p], []], e.areas) {
        const M = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, M];
      }
      le(`\u25A5 Pared Q4 creada \u2014 h=${d.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Ae = [], Mt = 0;
      try {
        (_s2 = window.__hekatanRebuild) == null ? void 0 : _s2.call(window);
      } catch {
      }
      return;
    }
    if (r === "extp") {
      Wt();
      const s = Mt && Mt > 0 ? Mt : 3, l = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, l], [t.x, t.y, l + s]];
      const d = e.polylines.rawVal, p = e.points.rawVal.length;
      e.polylines.val = [...d.slice(0, -1), ...d[d.length - 1].length > 0 ? [d[d.length - 1]] : [], [p - 2, p - 1], []], Mt = 0, le(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${s.toFixed(2)}m`);
      try {
        (_t2 = window.__hekatanRebuild) == null ? void 0 : _t2.call(window);
      } catch {
      }
      return;
    }
    if (r === "extl") {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.5, l = qt(t.x, t.y, t.z, s);
      if (!l) {
        le("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const d = e.polylines.rawVal, p = e.points.rawVal, g = d[l.polyIdx], M = p[g[l.segIdx]], c = p[g[l.segIdx + 1]];
      if (!M || !c) {
        le("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const f = Mt && Mt > 0 ? Mt : 3;
      Wt();
      const k = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [M[0], M[1], M[2]], [c[0], c[1], c[2]], [c[0], c[1], c[2] + f], [M[0], M[1], M[2] + f]];
      const R = e.polylines.rawVal;
      if (e.polylines.val = [...R.slice(0, -1), ...R[R.length - 1].length > 0 ? [R[R.length - 1]] : [], [k, k + 1, k + 2, k + 3, k], []], e.areas) {
        const X = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, X];
      }
      Mt = 0, le(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${f.toFixed(2)}m`);
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
      le(`\u2726 Punto auxiliar agregado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      return;
    }
    if (r === "aux") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        le("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [s, l] = Ae, d = window.__hekatanDrawingAuxLines;
      if (d) {
        const f = d.rawVal ?? d.val ?? [];
        d.val = [...f, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      const p = l[0] - s[0], g = l[1] - s[1], M = l[2] - s[2], c = Math.sqrt(p * p + g * g + M * M);
      le(`\u2713 L\xEDnea auxiliar creada \u2014 L=${c.toFixed(2)}m (cyan, no FEM)`), Ae = [];
      return;
    }
    if (r === "extend") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        le("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [s, l] = Ae, d = window.__hekatanDrawingAuxLines;
      if (d) {
        const p = d.rawVal ?? d.val ?? [];
        d.val = [...p, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      le("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Ae = [];
      return;
    }
    if (r === "chaflan") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        le("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ae, d = window.__hekatanChaflanR ?? 1, p = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_v = window.__hekatanDrawSlabChaflan) == null ? void 0 : _v.call(window, s, l, d, p, 6);
      const g = Math.abs(l[0] - s[0]).toFixed(1), M = Math.abs(l[1] - s[1]).toFixed(1);
      le(`\u2713 Losa con chaflanes dibujada \u2014 ${g}\xD7${M}m, r=${d}m, ${p} seg/chafl\xE1n`), Ae = [];
      try {
        (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
      } catch {
      }
      return;
    }
    if (T = false, Wt(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const s = e.polylines.rawVal, l = s.length - 1, d = s[l] ?? [];
      if (r === "line" && d.length >= 2) {
        le(`\uFF0F L\xEDnea \u2014 ${d.length - 1} tramo${d.length === 2 ? "" : "s"}. Segu\xED marcando puntos; Esc o clic derecho para terminar.`);
        try {
          (_x = window.__hekatanRebuild) == null ? void 0 : _x.call(window);
        } catch {
        }
        return;
      }
      if (r === "area" && d.length === 4) {
        e.polylines.val = [...s.slice(0, -1), [...d, d[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, l]), le("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_y = window.__hekatanRebuild) == null ? void 0 : _y.call(window);
        } catch {
        }
        return;
      }
    }
    if (r === "node") le(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (r === "line") le("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (r === "polyline") le("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (r === "area") {
      const s = ((_z = e.polylines) == null ? void 0 : _z.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      le(`\u25A6 \xC1rea \u2014 click ${s.length}/4. Marc\xE1 ${4 - s.length} v\xE9rtice${4 - s.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), m.addEventListener("contextmenu", (n) => {
    var _a, _b, _c;
    if (((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "polyarea" && me.length >= 3) {
      n.preventDefault();
      const a = cn();
      le(`\u2713 \xC1rea libre mallada \u2014 ${a} shells Q4 creados.`);
      return;
    }
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), m.addEventListener("pointermove", (n) => {
    var _a, _b;
    const o = _(n);
    if (!o) return;
    z.setFromCamera(C, o);
    const a = Q();
    if (ke.geometry.deleteAttribute("position"), a.length) {
      let t = a[0].point.clone();
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z));
      {
        const l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], d = l[l.length - 1] ?? [], p = e.points.rawVal ?? [];
        if (d.length > 0) {
          const g = p[d[d.length - 1]];
          if (g) {
            const M = !!window.__hekatanOrthoMode;
            let c = tt;
            if (!c && M) {
              const f = Math.abs(t.x - g[0]), k = Math.abs(t.y - g[1]), R = Math.abs(t.z - g[2]);
              c = f >= k && f >= R ? "x" : k >= R ? "y" : "z";
            }
            c === "x" ? t.set(t.x, g[1], g[2]) : c === "y" ? t.set(g[0], t.y, g[2]) : c === "z" && t.set(g[0], g[1], t.z);
          }
        }
      }
      const r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, r);
      if (s) t.set(s.x, s.y, s.z);
      else {
        const l = window.__hekatanSnapEnabled !== false, d = window.__hekatanSnap2D ?? 0.5;
        l && d > 0 && (t.x = Math.round(t.x / d) * d, t.y = Math.round(t.y / d) * d, t.z = Math.round(t.z / d) * d);
      }
      ke.geometry.setAttribute("position", new gt(t.toArray(), 3));
    }
    v();
  }), m.addEventListener("pointermove", (n) => {
    var _a;
    const o = _(n);
    if (!o) return;
    z.setFromCamera(C, o);
    let a = false;
    const t = z.intersectObject(fe), r = Q();
    if (t.length && r.length) {
      const s = new w(...e.points.rawVal[t[0].index]), l = new w(...r[0].point), d = s.sub(l), p = (_a = r[0].face) == null ? void 0 : _a.normal;
      p.transformDirection(W.matrixWorld), Math.abs(d.dot(p)) < 1e-4 && (a = true);
    }
    ke.visible = !a;
  });
  let Yn = false, Nn;
  m.addEventListener("pointermove", (n) => {
    var _a;
    if (!Ot) return;
    const o = _(n);
    if (!o) return;
    z.setFromCamera(C, o);
    let a = false;
    const t = z.intersectObject(fe), r = Q();
    if (t.length && r.length) {
      const l = new w(...e.points.rawVal[t[0].index]), d = new w(...r[0].point), p = l.sub(d), g = (_a = r[0].face) == null ? void 0 : _a.normal;
      g.transformDirection(W.matrixWorld), Math.abs(p.dot(g)) < 1e-4 && (a = true);
    }
    if (a && Ot < 5 && (Yn = true, u.enabled = false, Nn = t[0].index), !Yn || Ot % 2 !== 0) return;
    const s = [...e.points.rawVal];
    if (Nn !== void 0) {
      let l = r[0].point;
      (n.ctrlKey || n.metaKey) && (l = new w(Math.round(l.x), Math.round(l.y), Math.round(l.z))), s[Nn] = l.toArray();
    }
    e.points.val = s;
  }), m.addEventListener("pointerup", () => {
    u.enabled = true, Yn = false;
  }), m.addEventListener("contextmenu", (n) => {
    var _a;
    const o = _(n);
    if (!o) return;
    z.setFromCamera(C, o);
    let a = false;
    const t = z.intersectObject(fe), r = Q();
    if (t.length && r.length) {
      const d = new w(...e.points.rawVal[t[0].index]), p = new w(...r[0].point), g = d.sub(p), M = (_a = r[0].face) == null ? void 0 : _a.normal;
      M.transformDirection(W.matrixWorld), Math.abs(g.dot(M)) < 1e-4 && (a = true);
    }
    if (!a) return;
    const s = [...e.points.rawVal];
    if (s.splice(t[0].index, 1), e.points.val = s, !e.polylines) return;
    const l = e.polylines.rawVal.map((d) => d.filter((p) => p !== t[0].index)).map((d) => d.map((p) => p > t[0].index ? p - 1 : p)).filter((d) => d.length);
    l.push([]), e.polylines.val = l;
  });
}
function Vs(e, i, y) {
  const S = Math.round(14.999999999999998), x = { position: e.position.clone(), quaternion: e.quaternion.clone() }, m = setInterval(z, 1e3 / 30);
  let v = 0;
  function z() {
    v++;
    const C = v / S;
    e.position.lerpVectors(x.position, i.position, C), e.quaternion.slerpQuaternions(x.quaternion, i.quaternion, C), y && y(), v == S && clearInterval(m);
  }
}
function As(e, i, y, h) {
  const u = us(y, e.elements, h);
  return L.derive(() => {
    u.visible = i.shellResults.val != "none";
  }), u;
}
const Ts = 6, Jn = 10, Es = 0.012;
function $s(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function Is(e, i, y, h) {
  if (!y && !h) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && y) {
    const S = y[e];
    if (S && S.has(i)) return S.get(i);
  }
  return null;
}
function Ls(e, i, y, h) {
  const u = new Oe(), S = new $o();
  S.setColorMap("rainbow");
  const x = new It(), m = L.state([]);
  return L.derive(() => {
    var _a, _b, _c;
    i.deformedShape.val;
    const v = y.val, z = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], C = $s(i.frameResults.val);
    if (u.children.forEach((V) => {
      V.geometry && V.geometry.dispose(), V.material && V.material.dispose();
    }), u.clear(), !C || z.length === 0 || v.length === 0) {
      m.val = [];
      return;
    }
    const _ = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, W = (_c = e.deformOutputs) == null ? void 0 : _c.val, we = [], de = [];
    for (let V = 0; V < z.length; V++) {
      if (z[V].length !== 2) continue;
      const oe = Is(C, V, _, W);
      oe && (we.push(oe[0], oe[1]), de.push({ idx: V, vals: oe }));
    }
    if (we.length === 0) {
      m.val = [];
      return;
    }
    const ee = Math.min(...we), b = Math.max(...we);
    S.setMin(ee), S.setMax(b), m.val = we;
    const Q = [1 / 0, 1 / 0, 1 / 0], fe = [-1 / 0, -1 / 0, -1 / 0];
    for (const V of v) for (let N = 0; N < 3; N++) Q[N] = Math.min(Q[N], V[N]), fe[N] = Math.max(fe[N], V[N]);
    const _e = Math.max(fe[0] - Q[0], fe[1] - Q[1], fe[2] - Q[2], 1) * Es, I = [], Z = [], D = [];
    let T = 0;
    for (const { idx: V, vals: N } of de) {
      const oe = z[V], O = v[oe[0]], H = v[oe[1]];
      if (!O || !H) continue;
      const A = new w(H[0] - O[0], H[1] - O[1], H[2] - O[2]), ae = A.length();
      if (ae < 1e-10) continue;
      A.normalize();
      const ne = Math.abs(A.y) < 0.99 ? new w(0, 1, 0) : new w(1, 0, 0), me = new w().crossVectors(A, ne).normalize(), ie = new w().crossVectors(A, me).normalize(), Pe = Jn + 1, ce = Ts;
      for (let be = 0; be < Pe; be++) {
        const Ke = be / Jn, We = O[0] + A.x * ae * Ke, q = O[1] + A.y * ae * Ke, P = O[2] + A.z * ae * Ke, K = N[0] + (N[1] - N[0]) * Ke, B = S.getColor(K) ?? new It(0, 0, 0);
        x.copy(B).convertSRGBToLinear();
        for (let J = 0; J < ce; J++) {
          const se = J / ce * Math.PI * 2, Se = Math.cos(se), ge = Math.sin(se);
          I.push(We + (me.x * Se + ie.x * ge) * _e, q + (me.y * Se + ie.y * ge) * _e, P + (me.z * Se + ie.z * ge) * _e), Z.push(x.r, x.g, x.b);
        }
      }
      for (let be = 0; be < Jn; be++) for (let Ke = 0; Ke < ce; Ke++) {
        const We = (Ke + 1) % ce, q = T + be * ce + Ke, P = T + be * ce + We, K = T + (be + 1) * ce + Ke, B = T + (be + 1) * ce + We;
        D.push(q, P, B), D.push(q, B, K);
      }
      T += Pe * ce;
    }
    if (I.length === 0) return;
    const F = new ue();
    F.setAttribute("position", new gt(I, 3)), F.setAttribute("color", new gt(Z, 3)), F.setIndex(D), F.computeVertexNormals();
    const $ = new et({ vertexColors: true, side: Ft }), U = new He(F, $);
    U.frustumCulled = false, u.add(U);
  }), u.__colorMapValues = m, u;
}
function Bs() {
  const e = window;
  return { forceUnit: e.__hekatanForceUnit ?? localStorage.getItem("hk_forceUnit") ?? "tonf", dispUnit: e.__hekatanDispUnit ?? localStorage.getItem("hk_dispUnit") ?? "mm", stressUnit: e.__hekatanStressUnit ?? localStorage.getItem("hk_stressUnit") ?? "tonf/m\xB2" };
}
const Rs = { kN: 1, tonf: 1 / 9.80665, kip: 1 / 4.4482216 }, Xs = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Ds = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76, "kip/ft\xB2": 1 / 47.88026 };
function ct(e, i = 4) {
  return e == null || !isFinite(e) ? "\u2014" : e === 0 ? "0" : Math.abs(e) < 1e-3 || Math.abs(e) > 1e5 ? e.toExponential(i) : e.toFixed(i);
}
const Ys = 16755200, Po = 56831, Ns = 56831, Zs = 56831, kn = 65382;
function Us(e) {
  const i = new Oe();
  i.name = "__hekatan_hover", i.renderOrder = 99;
  const y = new rn(1, 16, 16), h = new et({ color: Ys, transparent: true, opacity: 0.85, depthTest: false }), u = new He(y, h);
  u.visible = false, u.renderOrder = 100, i.add(u);
  const S = new ue(), x = new lt({ color: Po, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), m = new Xt(S, x);
  m.visible = false, m.renderOrder = 100, i.add(m);
  const v = new et({ color: Po, transparent: true, opacity: 0.7, depthTest: false }), z = new He(new Mo(1, 1, 1, 12), v);
  z.visible = false, z.renderOrder = 100, i.add(z);
  const C = new ue(), _ = new et({ color: Ns, transparent: true, opacity: 0.45, side: Ft, depthTest: false }), W = new He(C, _);
  W.visible = false, W.renderOrder = 100, i.add(W);
  const we = new ue(), de = new lt({ color: Zs, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), ee = new Xt(we, de);
  ee.visible = false, ee.renderOrder = 100, i.add(ee);
  const b = new et({ color: kn, transparent: true, opacity: 0.95, depthTest: false }), Q = new et({ color: kn, transparent: true, opacity: 0.85, depthTest: false }), fe = new Mo(1, 1, 1, 12), ke = new et({ color: kn, transparent: true, opacity: 0.55, side: Ft, depthTest: false }), _e = new lt({ color: kn, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), I = [];
  window.__hekatanModelSelection = I;
  const Z = new Oe();
  Z.renderOrder = 101, i.add(Z);
  const D = document.createElement("div");
  Object.assign(D.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), D.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(D);
  }, 0);
  function T(q) {
    const P = e.derivedNodes.rawVal;
    return !P || q < 0 || q >= P.length ? null : new w(P[q][0], P[q][1], P[q][2]);
  }
  function F(q, P) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2;
    const K = e.getActiveCamera();
    if (!K || !e.mesh) return null;
    const B = e.rendererElm.getBoundingClientRect(), J = q - B.left, se = P - B.top, Se = e.derivedNodes.rawVal, ge = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!Se || !ge) return null;
    const ze = /* @__PURE__ */ new Map(), Ee = (Re) => {
      if (ze.has(Re)) return ze.get(Re);
      const Ve = T(Re);
      if (!Ve) return ze.set(Re, null), null;
      const ve = Ve.clone().project(K), Ye = (ve.x * 0.5 + 0.5) * B.width, re = (-ve.y * 0.5 + 0.5) * B.height, Ne = { x: Ye, y: re, z: ve.z };
      return ze.set(Re, Ne), Ne;
    }, Te = /* @__PURE__ */ new Set();
    for (const Re of ge) if (Re) for (const Ve of Re) Te.add(Ve);
    const Ie = 8;
    let De = -1, qe = Ie;
    for (let Re = 0; Re < Se.length; Re++) {
      if (!Te.has(Re)) continue;
      const Ve = Ee(Re);
      if (!Ve || Ve.z < -1 || Ve.z > 1) continue;
      const ve = Ve.x - J, Ye = Ve.y - se, re = Math.sqrt(ve * ve + Ye * Ye);
      re < qe && (qe = re, De = Re);
    }
    const Ce = Bs(), rt = Xs[Ce.dispUnit] ?? 1e3, Ze = Rs[Ce.forceUnit] ?? 1;
    if (De >= 0) {
      const Re = Se[De];
      let Ve = `Nodo ${De}
(${Re[0].toFixed(3)}, ${Re[1].toFixed(3)}, ${Re[2].toFixed(3)})`;
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
          const re = ve.reactions.get(De);
          re && (Math.abs(re[0]) > 1e-9 || Math.abs(re[1]) > 1e-9 || Math.abs(re[2]) > 1e-9 || Math.abs(re[3]) > 1e-6 || Math.abs(re[4]) > 1e-6 || Math.abs(re[5]) > 1e-6) && (Ve += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, Ve += `
Fx = ${ct(re[0] * Ze)} ${Ce.forceUnit}`, Ve += `
Fy = ${ct(re[1] * Ze)} ${Ce.forceUnit}`, Ve += `
Fz = ${ct(re[2] * Ze)} ${Ce.forceUnit}`, (Math.abs(re[3]) > 1e-6 || Math.abs(re[4]) > 1e-6 || Math.abs(re[5]) > 1e-6) && (Ve += `
Mx = ${ct(re[3] * Ze)} ${Ce.forceUnit}\xB7m`, Ve += `
My = ${ct(re[4] * Ze)} ${Ce.forceUnit}\xB7m`, Ve += `
Mz = ${ct(re[5] * Ze)} ${Ce.forceUnit}\xB7m`));
        }
      }
      return { type: "node", idx: De, info: Ve };
    }
    const tt = 5;
    let st = -1, nt = tt, Lt = "frame";
    for (let Re = 0; Re < ge.length; Re++) {
      const Ve = ge[Re];
      if (!(!Ve || Ve.length < 2)) {
        if (Ve.length === 2) {
          const ve = Ee(Ve[0]), Ye = Ee(Ve[1]);
          if (!ve || !Ye || ve.z < -1 || ve.z > 1 || Ye.z < -1 || Ye.z > 1) continue;
          const re = Ks(J, se, ve.x, ve.y, Ye.x, Ye.y);
          re < nt && (nt = re, st = Re, Lt = "frame");
        } else if (Ve.length === 3 || Ve.length === 4) {
          const ve = [];
          let Ye = true;
          for (const re of Ve) {
            const Ne = Ee(re);
            if (!Ne || Ne.z < -1 || Ne.z > 1) {
              Ye = false;
              break;
            }
            ve.push(Ne);
          }
          if (!Ye) continue;
          if (Ws(J, se, ve)) {
            const Ne = ve.reduce((Ge, dt) => Ge + dt.z, 0) / ve.length * 1e-3;
            Ne < nt && (nt = Ne, st = Re, Lt = "shell");
          }
        } else if (Ve.length === 8) {
          const ve = [];
          let Ye = true;
          for (const he of Ve) {
            const Le = Ee(he);
            if (!Le || Le.z < -1 || Le.z > 1) {
              Ye = false;
              break;
            }
            ve.push(Le);
          }
          if (!Ye) continue;
          const re = Math.min(...ve.map((he) => he.x)), Ne = Math.max(...ve.map((he) => he.x)), Ge = Math.min(...ve.map((he) => he.y)), dt = Math.max(...ve.map((he) => he.y));
          if (J >= re && J <= Ne && se >= Ge && se <= dt) {
            const Le = ve.reduce((Je, pt) => Je + pt.z, 0) / ve.length * 1e-3;
            Le < nt && (nt = Le, st = Re, Lt = "solid");
          }
        }
      }
    }
    if (st >= 0) {
      const Re = ge[st];
      let ve = `${Lt === "frame" ? "Frame" : Lt === "shell" ? "Shell" : "Solid"} ${st}`;
      const Ye = (_e2 = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e2.rawVal, re = (_g = (_f = Ye == null ? void 0 : Ye.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, st);
      if (re) {
        re.name && (ve += `
  \u{1F4CB} ${re.name}`), re.shape && (ve += `
  Shape: ${re.shape}`);
        const Ne = /concrete|hormig|rect.*sólida/i.test(re.shape || ""), Ge = Ne ? 100 : 1e3, dt = Ne ? "cm" : "mm", he = (Je) => {
          const pt = Je * Ge;
          return Math.abs(pt - Math.round(pt)) < 0.05 ? `${Math.round(pt)}` : `${pt.toFixed(1)}`;
        }, Le = [];
        if (re.D != null && Le.push(`D=${he(re.D)}`), re.B != null && Le.push(`B=${he(re.B)}`), re.TF != null && Le.push(`TF=${he(re.TF)}`), re.TW != null && Le.push(`TW=${he(re.TW)}`), re.t != null && Le.push(`t=${he(re.t)}`), Le.length && (ve += `
  Dim: ${Le.join(" ")} ${dt}`), re.material) {
          let Je = re.material;
          re.fillMaterial && (Je += ` + FILL "${re.fillMaterial}"`), ve += `
  Mat: ${Je}`;
        }
      } else {
        const Ne = (_i = (_h = Ye == null ? void 0 : Ye.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, st), Ge = (_k = (_j = Ye == null ? void 0 : Ye.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, st);
        Ne ? (ve += `
  ${Ne}`, Ge && !Ne.includes(Ge) && (ve += `  (${Ge})`)) : Ge && (ve += `
  Material: ${Ge}`);
      }
      if (ve += `
nodos: [${Re.join(", ")}]`, Lt === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const Ne = e.mesh.analyzeOutputs.rawVal, Ge = Ds[Ce.stressUnit] ?? 1, dt = [["bendingXX", "Mxx", Ze, `${Ce.forceUnit}\xB7m/m`], ["bendingYY", "Myy", Ze, `${Ce.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", Ze, `${Ce.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", Ze, `${Ce.forceUnit}/m`], ["membraneYY", "Nyy", Ze, `${Ce.forceUnit}/m`], ["membraneXY", "Nxy", Ze, `${Ce.forceUnit}/m`], ["shearX", "Qx", Ze, `${Ce.forceUnit}/m`], ["shearY", "Qy", Ze, `${Ce.forceUnit}/m`], ["vonMises", "\u03C3VM", Ge, Ce.stressUnit], ["pressure", "p", Ge, Ce.stressUnit]], he = [];
        for (const [Le, Je, pt, Dt] of dt) {
          const ft = Ne == null ? void 0 : Ne[Le];
          if (ft && ft instanceof Map) {
            const zt = ft.get(st);
            if (zt != null) {
              if (typeof zt == "number") he.push(`${Je} = ${ct(zt * pt, 3)} ${Dt}`);
              else if (Array.isArray(zt)) {
                let ot = zt[0];
                for (const Ht of zt) Math.abs(Ht) > Math.abs(ot) && (ot = Ht);
                he.push(`${Je} = ${ct(ot * pt, 3)} ${Dt}`);
              }
            }
          }
        }
        he.length > 0 && (ve += `
\u2500\u2500\u2500\u2500 results \u2500\u2500\u2500\u2500
` + he.slice(0, 8).join(`
`));
      }
      if (Lt === "frame" && ((_m = e.mesh) == null ? void 0 : _m.deformOutputs) && e.mesh.elementInputs) {
        const Ne = e.mesh.deformOutputs.rawVal, Ge = e.mesh.elementInputs.rawVal, dt = Ne == null ? void 0 : Ne.deformations;
        if (dt && Re.length === 2) {
          const he = dt.get(Re[0]), Le = dt.get(Re[1]), Je = Se[Re[0]], pt = Se[Re[1]];
          if (he && Le && Je && pt) {
            const Dt = pt[0] - Je[0], ft = pt[1] - Je[1], zt = pt[2] - Je[2], ot = Math.sqrt(Dt * Dt + ft * ft + zt * zt);
            if (ot > 1e-9) {
              const Ht = Dt / ot, Bt = ft / ot, tn = zt / ot, qt = (Le[0] - he[0]) * Ht + (Le[1] - he[1]) * Bt + (Le[2] - he[2]) * tn, Jt = ((_n2 = Ge.elasticities) == null ? void 0 : _n2.get(st)) ?? 0, An = ((_o2 = Ge.areas) == null ? void 0 : _o2.get(st)) ?? 0, Tn = ((_p = Ge.momentsOfInertiaY) == null ? void 0 : _p.get(st)) ?? 0, nn = ((_q = Ge.momentsOfInertiaZ) == null ? void 0 : _q.get(st)) ?? 0, En = ((_r = Ge.torsionalConstants) == null ? void 0 : _r.get(st)) ?? 0, cn = ((_s2 = Ge.shearModuli) == null ? void 0 : _s2.get(st)) ?? Jt / 2.6, Pt = Jt * An * (qt / ot), Rt = (Le[3] - he[3]) * Ht + (Le[4] - he[4]) * Bt + (Le[5] - he[5]) * tn, Yt = cn * En * (Rt / ot), Qt = Le[4] - he[4], $n = Le[5] - he[5], Nt = Jt * Tn * Qt / ot, dn = Jt * nn * $n / ot;
              ve += `
\u2500\u2500\u2500\u2500 frame \u2500\u2500\u2500\u2500`, ve += `
L = ${ct(ot, 3)} m`, ve += `
\u0394L = ${ct(qt * rt, 3)} ${Ce.dispUnit}`, ve += `
\u03B5 = ${ct(qt / ot, 6)}`, Math.abs(Pt) > 1e-6 && (ve += `
N \u2248 ${ct(Pt * Ze)} ${Ce.forceUnit}`), Math.abs(Yt) > 1e-6 && (ve += `
T \u2248 ${ct(Yt * Ze)} ${Ce.forceUnit}\xB7m`), Math.abs(Nt) > 1e-6 && (ve += `
My \u2248 ${ct(Nt * Ze)} ${Ce.forceUnit}\xB7m`), Math.abs(dn) > 1e-6 && (ve += `
Mz \u2248 ${ct(dn * Ze)} ${Ce.forceUnit}\xB7m`);
            }
          }
        }
      }
      return { type: Lt, idx: st, info: ve };
    }
    return null;
  }
  function $(q, P, K) {
    var _a, _b, _c;
    if (u.visible = false, m.visible = false, z.visible = false, W.visible = false, ee.visible = false, !q || !e.mesh) {
      D.style.display = "none", e.render();
      return;
    }
    const B = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (q.type === "node") {
      const ge = T(q.idx);
      if (ge) {
        const ze = e.derivedNodes.rawVal ?? [];
        let Ee = 1;
        if (ze.length >= 2) {
          let De = [1 / 0, 1 / 0, 1 / 0], qe = [-1 / 0, -1 / 0, -1 / 0];
          for (const Ce of ze) for (let rt = 0; rt < 3; rt++) Ce[rt] < De[rt] && (De[rt] = Ce[rt]), Ce[rt] > qe[rt] && (qe[rt] = Ce[rt]);
          Ee = Math.max(qe[0] - De[0], qe[1] - De[1], qe[2] - De[2], 0.1);
        }
        const Te = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, Ie = 0.021 * Ee * Te;
        u.position.copy(ge), u.scale.setScalar(Ie), u.visible = true;
      }
    } else if (q.type === "frame" && B) {
      const ge = B[q.idx], ze = T(ge[0]), Ee = T(ge[1]);
      if (ze && Ee) {
        const Te = ze.clone().add(Ee).multiplyScalar(0.5), Ie = Ee.clone().sub(ze), De = Ie.length(), rt = e.getActiveCamera().position.distanceTo(Te) * 35e-4;
        z.position.copy(Te);
        const Ze = new w(0, 1, 0), tt = Ze.clone().cross(Ie).normalize(), st = Ze.angleTo(Ie);
        z.quaternion.setFromAxisAngle(tt, st), z.scale.set(rt, De, rt), z.visible = true;
      }
    } else if (q.type === "shell" && B) {
      const ge = B[q.idx], ze = [], Ee = [];
      for (const Te of ge) {
        const Ie = T(Te);
        if (!Ie) return;
        ze.push(Ie.x, Ie.y, Ie.z);
      }
      ge.length === 4 ? Ee.push(0, 1, 2, 0, 2, 3) : ge.length === 3 && Ee.push(0, 1, 2), C.setAttribute("position", new gt(ze, 3)), C.setIndex(Ee), C.computeVertexNormals(), W.visible = true;
    } else if (q.type === "solid" && B) {
      const ge = B[q.idx], ze = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], Ee = [];
      for (const [Te, Ie] of ze) {
        const De = T(ge[Te]), qe = T(ge[Ie]);
        De && qe && Ee.push(De.x, De.y, De.z, qe.x, qe.y, qe.z);
      }
      we.setAttribute("position", new gt(Ee, 3)), ee.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      D.style.display = "none", e.render();
      return;
    }
    D.textContent = q.info, D.style.whiteSpace = "pre-line", D.style.display = "block";
    const se = e.rendererElm.getBoundingClientRect(), Se = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? se;
    D.style.left = `${P - Se.left}px`, D.style.top = `${K - Se.top}px`, e.render();
  }
  let U = "", V = 0, N = 0;
  const oe = window.__hekatanHoverDebug ?? false, O = (q) => {
    V && cancelAnimationFrame(V), V = requestAnimationFrame(() => {
      var _a, _b, _c;
      const P = F(q.clientX, q.clientY);
      if (oe && N < 5) {
        const B = e.derivedNodes.rawVal, J = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${q.clientX}, ${q.clientY}) nodes=${(B == null ? void 0 : B.length) ?? 0} elems=${(J == null ? void 0 : J.length) ?? 0} hover=`, P), N++;
      }
      const K = P ? `${P.type}:${P.idx}` : "";
      if (K !== U) U = K, $(P, q.clientX, q.clientY);
      else if (P) {
        const B = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        D.style.left = `${q.clientX - B.left}px`, D.style.top = `${q.clientY - B.top}px`;
      }
    });
  };
  let H = null;
  const A = () => {
    U = "", u.visible = false, m.visible = false, z.visible = false, W.visible = false, ee.visible = false, D.style.display = "none", e.render();
  }, ae = (q) => {
    const P = e.rendererElm.getBoundingClientRect(), K = q.clientX - P.left, B = q.clientY - P.top;
    (K < -2 || B < -2 || K > P.width + 2 || B > P.height + 2) && (H && clearTimeout(H), H = window.setTimeout(A, 200));
  }, ne = () => {
    H && (clearTimeout(H), H = null);
  };
  e.rendererElm.addEventListener("pointermove", O), e.rendererElm.addEventListener("pointerleave", ae), e.rendererElm.addEventListener("pointerenter", ne);
  function me() {
    var _a, _b, _c;
    const q = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    return q === "select" || q === "none" || !q;
  }
  let ie = null;
  e.rendererElm.addEventListener("pointerdown", (q) => {
    q.button === 0 && (ie = { x: q.clientX, y: q.clientY });
  }), e.rendererElm.addEventListener("pointerup", (q) => {
    if (q.button !== 0 || !ie) return;
    const P = q.clientX - ie.x, K = q.clientY - ie.y;
    if (ie = null, P * P + K * K > 9 || !me()) return;
    const B = F(q.clientX, q.clientY);
    B ? (Ke({ type: B.type, idx: B.idx }, q.shiftKey), be()) : We();
  }), window.addEventListener("keydown", (q) => {
    if (q.key !== "Escape" || !I.length) return;
    const P = document.activeElement, K = !!P && (P.id === "hk3-cmd-input" || P.id === "hk-dyn-input") && P.value === "";
    P && (P.tagName === "INPUT" || P.tagName === "TEXTAREA" || P.isContentEditable) && !K || We();
  }, { capture: true });
  function Pe() {
    for (const q of Z.children.slice()) {
      Z.remove(q);
      const P = q.geometry;
      P && P !== y && P !== fe && P.dispose();
    }
  }
  function ce(q, P) {
    var _a, _b, _c;
    const K = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
    if (q.type === "node") {
      const B = T(q.idx);
      if (!B) return;
      const J = ((_c = e.derivedDisplayScale) == null ? void 0 : _c.rawVal) ?? 1, se = new He(y, b);
      se.position.copy(B), se.scale.setScalar(0.025 * P * J), se.renderOrder = 101, Z.add(se);
    } else if (q.type === "frame" && K) {
      const B = K[q.idx], J = T(B[0]), se = T(B[1]);
      if (!J || !se) return;
      const Se = J.clone().add(se).multiplyScalar(0.5), ge = se.clone().sub(J), ze = ge.length(), Ee = e.getActiveCamera().position.distanceTo(Se), Te = new He(fe, Q);
      Te.position.copy(Se);
      const Ie = new w(0, 1, 0);
      Te.quaternion.setFromAxisAngle(Ie.clone().cross(ge).normalize(), Ie.angleTo(ge)), Te.scale.set(Ee * 35e-4, ze, Ee * 35e-4), Te.renderOrder = 101, Z.add(Te);
    } else if (q.type === "shell" && K) {
      const B = K[q.idx], J = [], se = [];
      for (const ze of B) {
        const Ee = T(ze);
        if (!Ee) return;
        J.push(Ee.x, Ee.y, Ee.z);
      }
      B.length === 4 ? se.push(0, 1, 2, 0, 2, 3) : B.length === 3 && se.push(0, 1, 2);
      const Se = new ue();
      Se.setAttribute("position", new gt(J, 3)), Se.setIndex(se), Se.computeVertexNormals();
      const ge = new He(Se, ke);
      ge.renderOrder = 101, Z.add(ge);
    } else if (q.type === "solid" && K) {
      const B = K[q.idx], J = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], se = [];
      for (const [ze, Ee] of J) {
        const Te = T(B[ze]), Ie = T(B[Ee]);
        Te && Ie && se.push(Te.x, Te.y, Te.z, Ie.x, Ie.y, Ie.z);
      }
      const Se = new ue();
      Se.setAttribute("position", new gt(se, 3));
      const ge = new Xt(Se, _e);
      ge.renderOrder = 101, Z.add(ge);
    }
  }
  function be() {
    if (Pe(), !I.length || !e.mesh) {
      e.render();
      return;
    }
    const q = e.derivedNodes.rawVal ?? [];
    let P = 1;
    if (q.length >= 2) {
      const K = [1 / 0, 1 / 0, 1 / 0], B = [-1 / 0, -1 / 0, -1 / 0];
      for (const J of q) for (let se = 0; se < 3; se++) J[se] < K[se] && (K[se] = J[se]), J[se] > B[se] && (B[se] = J[se]);
      P = Math.max(B[0] - K[0], B[1] - K[1], B[2] - K[2], 0.1);
    }
    for (const K of I) ce(K, P);
    e.render();
  }
  function Ke(q, P) {
    const K = I.findIndex((B) => B.type === q.type && B.idx === q.idx);
    K >= 0 ? I.splice(K, 1) : P || I.push(q), I.length && I[I.length - 1];
  }
  function We() {
    I.length = 0, be();
  }
  return L.derive(() => {
    e.derivedNodes.val, I.length && be();
  }), i;
}
function Ks(e, i, y, h, u, S) {
  const x = u - y, m = S - h, v = x * x + m * m;
  if (v < 1e-9) {
    const de = e - y, ee = i - h;
    return Math.sqrt(de * de + ee * ee);
  }
  let z = ((e - y) * x + (i - h) * m) / v;
  z = Math.max(0, Math.min(1, z));
  const C = y + z * x, _ = h + z * m, W = e - C, we = i - _;
  return Math.sqrt(W * W + we * we);
}
function Ws(e, i, y) {
  let h = false;
  for (let u = 0, S = y.length - 1; u < y.length; S = u++) {
    const x = y[u].x, m = y[u].y, v = y[S].x, z = y[S].y;
    m > i != z > i && e < (v - x) * (i - m) / (z - m + 1e-12) + x && (h = !h);
  }
  return h;
}
function Co(e, i = 8) {
  const y = document.createElement("div");
  y.id = "legend", y.style.setProperty("--legend-n", String(i)), setTimeout(() => {
    L.derive(() => {
      Vn.val, y.style.background = ps();
    });
  });
  const h = document.createElement("div");
  h.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", y.appendChild(h), setTimeout(() => {
    L.derive(() => {
      h.textContent = On.val ? `[${On.val}]` : "";
    });
  });
  const u = Array.from({ length: i + 1 }, (v, z) => z / i).reverse();
  let S, x;
  u.forEach((v, z) => {
    S = document.createElement("div"), S.id = `marker-${z}`, S.className = "marker", S.style.marginTop = z == 0 ? "0px" : "calc(var(--legend-h) / var(--legend-n) - 1px)", x = document.createElement("p"), x.id = `marker-text-${z}`, S.append(x), y.append(S);
  });
  const m = [];
  return y.querySelectorAll("p").forEach((v) => m.push(v)), setTimeout(() => {
    L.derive(() => {
      u.forEach((v, z) => {
        const C = m[z];
        C && (C.innerText = Gs(e.val, v).toString());
      });
    });
  }), y;
}
function Gs(e, i) {
  const y = to.val;
  if (y) return (y[0] + i * (y[1] - y[0])).toPrecision(3);
  const h = e.filter((x) => Number.isFinite(x));
  if (h.length === 0) return "0";
  let u = Math.min(...h);
  const S = Math.max(...h);
  return u >= 0 && S > 0 && (u = 0), (u + i * (S - u)).toPrecision(3);
}
function aa({ mesh: e, settingsObj: i, drawingObj: y, objects3D: h, solids: u }) {
  rs.DEFAULT_UP = new w(0, 0, 1);
  const S = document.createElement("div"), x = new os(), m = new ss(45, 1, 0.1, 2 * 1e6), v = new as(-10, 10, 10, -10, -1e3, 2e6);
  let z = m;
  const C = new is({ antialias: true });
  C.localClippingEnabled = true;
  const _ = new _o(m, C.domElement);
  _.enableDamping = true, _.dampingFactor = 0.1, _.screenSpacePanning = true, _.zoomSpeed = 0.8, _.panSpeed = 1.2, _.rotateSpeed = 0.9, _.keyPanSpeed = 12, _.listenToKeyEvents(window), _.touches = { ONE: _n.ROTATE, TWO: _n.DOLLY_PAN }, C.domElement.addEventListener("wheel", (P) => {
    if (!P.ctrlKey && Math.abs(P.deltaX) > Math.abs(P.deltaY) * 1.5) {
      P.preventDefault();
      const K = _.target, B = new w().subVectors(m.position, K), J = new w();
      J.crossVectors(m.up, B).normalize();
      const Se = B.length() * 1e-3 * _.panSpeed;
      K.addScaledVector(J, P.deltaX * Se), m.position.addScaledVector(J, P.deltaX * Se), _.update();
    }
  }, { passive: false });
  const W = new Gn(new w(-1, 0, 0), 0), we = new Gn(new w(0, -1, 0), 0), de = new Gn(new w(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function ee() {
    const P = window.__hekatanClip, K = [];
    P.enableX && (W.normal.set(P.invertX ? 1 : -1, 0, 0), W.constant = P.invertX ? -P.posX : P.posX, K.push(W)), P.enableY && (we.normal.set(0, P.invertY ? 1 : -1, 0), we.constant = P.invertY ? -P.posY : P.posY, K.push(we)), P.enableZ && (de.normal.set(0, 0, P.invertZ ? 1 : -1), de.constant = P.invertZ ? -P.posZ : P.posZ, K.push(de)), C.clippingPlanes = K, x.traverse((J) => {
      const se = J;
      if (se.material) {
        const Se = Array.isArray(se.material) ? se.material : [se.material];
        for (const ge of Se) ge.clippingPlanes = K, ge.needsUpdate = true;
      }
    });
    const B = window.__hekatanPanes ?? [];
    for (const J of B) try {
      J && typeof J.refresh == "function" && J.refresh();
    } catch {
    }
    C.render(x, z);
  }
  ee(), window.__hekatanClipApply = ee;
  const b = hs(i), Q = L.derive(() => Math.pow(10, b.displayScale.val / 10)), fe = Hs(e, b), ke = () => {
    const P = [];
    return b.gridXY.rawVal && P.push("xy"), b.gridXZ.rawVal && P.push("xz"), b.gridYZ.rawVal && P.push("yz"), P;
  }, _e = () => {
    const P = b.gridStep.rawVal, K = Math.max(P, b.gridMajor.rawVal);
    return { planes: ke(), majorStep: K, minorStep: P };
  };
  let I = qn(b.gridSize.rawVal, _e());
  I.visible = b.gridVisible.rawVal, window.__hekatanSnap2D = b.cursorSnap.rawVal;
  const Z = () => {
    const P = Math.max(0, Math.min(1, b.gridOpacity.rawVal));
    I.traverse((K) => {
      const B = K.material;
      if (!B || !("opacity" in B)) return;
      const J = K.name ?? "";
      let se = 0.35;
      J.includes("border") ? se = 1 : J.includes("major") && (se = 0.75), B.opacity = P * se;
    });
  };
  Z(), S.appendChild(fs(b, e, u)), S.setAttribute("id", "viewer"), S.appendChild(C.domElement), C.setPixelRatio(window.devicePixelRatio);
  const D = en();
  C.setClearColor(D.background, 1);
  const T = b.gridSize.rawVal, F = T * 0.5 + T * 0.5 / Math.tan(45 * 0.5);
  m.position.set(0, 0, F), m.up.set(0, 1, 0), _.target.set(0, 0, 0), _.minDistance = 0.1, _.maxDistance = 1e4, S.__settings = b, _.zoomSpeed = 1, _._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, _.update();
  let $ = ko(b.gridSize.rawVal, b.flipAxes.rawVal);
  x.add(I, $), L.derive(() => {
    window.__hekatanGridPlaneXY = b.gridXY.val, window.__hekatanGridPlaneXZ = b.gridXZ.val, window.__hekatanGridPlaneYZ = b.gridYZ.val;
  });
  let U = true;
  L.derive(() => {
    const P = b.gridVisible.val;
    if (U) {
      U = false;
      return;
    }
    I.visible = P, ne();
  });
  let V = true;
  L.derive(() => {
    if (b.gridOpacity.val, V) {
      V = false;
      return;
    }
    Z(), ne();
  }), L.derive(() => {
    const P = b.cursorSnap.val;
    window.__hekatanSnap2D = P;
  });
  let N = true;
  L.derive(() => {
    var _a;
    const P = b.gridSize.val, K = b.flipAxes.val;
    if (b.gridXY.val, b.gridXZ.val, b.gridYZ.val, b.gridStep.val, b.gridMajor.val, N) {
      N = false;
      return;
    }
    x.remove(I), (_a = I.traverse) == null ? void 0 : _a.call(I, (se) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = se.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = se.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), I = qn(P, _e()), I.visible = b.gridVisible.rawVal, x.add(I), Z(), x.remove($), $.traverse((se) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = se.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = se.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), $ = ko(P, K), x.add($);
    const B = P * 0.5 + P * 0.5 / Math.tan(45 * 0.5);
    m.position.distanceTo(_.target), Math.abs(m.position.x) < 0.1 && Math.abs(m.position.y) < 0.1 && m.position.z > 0 ? m.position.set(0, 0, B) : m.position.set(0.5 * P, -B, 0.5 * P), _.target.set(0, 0, 0), _.minDistance = Math.max(0.05, P * 0.01), _.maxDistance = Math.max(50, P * 50), _.update(), ne();
  }), new ResizeObserver((P) => {
    var _a, _b;
    for (const K of P) {
      const B = (_a = K.target) == null ? void 0 : _a.clientWidth, J = (_b = K.target) == null ? void 0 : _b.clientHeight;
      if (B === 0 || J === 0) continue;
      const Se = (O ? B / 2 : B) / J;
      m.aspect = Se, m.updateProjectionMatrix();
      const ge = v.top;
      if (v.left = -ge * Se, v.right = ge * Se, v.updateProjectionMatrix(), H && H.isPerspectiveCamera) H.aspect = Se, H.updateProjectionMatrix();
      else if (H && H.isOrthographicCamera) {
        const ze = H, Ee = ze.top;
        ze.left = -Ee * Se, ze.right = Ee * Se, ze.updateProjectionMatrix();
      }
      C.setSize(B, J), ne();
    }
  }).observe(S), _.addEventListener("change", ne), L.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, b.displayScale.val, b.nodes.val, b.elements.val, (_g = b.edges) == null ? void 0 : _g.val, b.elemColumns.val, b.elemBeams.val, b.nodesIndexes.val, b.elementsIndexes.val, b.orientations.val, b.sections.val, b.secColumns.val, b.secBeams.val, b.secFloor.val, b.supports.val, b.loads.val, b.deformedShape.val, b.nodeResults.val, b.frameResults.val, b.shellResults.val, (_h = b.solidResults) == null ? void 0 : _h.val, setTimeout(ne);
  });
  let O = false, H = null, A = null, ae = false;
  function ne() {
    const P = S.clientWidth || 1, K = S.clientHeight || 1;
    if (!O || !H) {
      C.setScissorTest(false), C.setViewport(0, 0, P, K), C.render(x, z);
      return;
    }
    const B = P / 2;
    C.setScissorTest(true), C.setViewport(0, 0, B, K), C.setScissor(0, 0, B, K), C.render(x, z), C.setViewport(B, 0, B, K), C.setScissor(B, 0, B, K), C.render(x, H), C.setScissorTest(false);
  }
  function me(P) {
    z = P, _.object = P, _.update(), ne();
  }
  function ie(P, K) {
    O = P, K && (H = K);
    const B = S.clientWidth || 1, J = S.clientHeight || 1, Se = (P ? B / 2 : B) / J;
    m.isPerspectiveCamera && (m.aspect = Se, m.updateProjectionMatrix());
    const ge = v.top;
    if (v.left = -ge * Se, v.right = ge * Se, v.updateProjectionMatrix(), P && H) {
      if (A ? (A.object = H, A.update()) : (A = new _o(H, C.domElement), A.enableDamping = true, A.dampingFactor = 0.1, A.screenSpacePanning = true, A.zoomSpeed = 0.8, A.panSpeed = 1.2, A.rotateSpeed = 0.9, A.touches = { ONE: _n.ROTATE, TWO: _n.DOLLY_PAN }, A.target.copy(_.target), A.addEventListener("change", ne), A.enabled = false), !ae) {
        const ze = (Ee) => {
          if (!O || !A) return;
          const Te = C.domElement.getBoundingClientRect(), Ie = Ee.clientX - Te.left, De = Te.width / 2, qe = Ie >= De;
          _.enabled = !qe, A.enabled = qe;
        };
        C.domElement.addEventListener("pointerdown", ze, true), C.domElement.addEventListener("wheel", ze, { capture: true, passive: true }), ae = true;
      }
    } else P || (_.enabled = true, A && (A.enabled = false));
    S.__splitMode = P, window.__hekatanSplitMode = P, window.__hekatanSplitCamera = P ? H : null, ne();
  }
  if (e) {
    x.add(ms(b, fe, Q), cs(e, b, fe), xs(b, fe, Q), gs(e, b, fe, Q), ws(e, b, fe, Q), ys(e, b, fe, Q), bs(e, b, fe, Q), Ss(e, b, fe, Q), Cs(e, b, fe, Q), ks(e, b, fe, Q));
    const P = Us({ scene: x, rendererElm: C.domElement, getActiveCamera: () => z, derivedNodes: fe, derivedDisplayScale: Q, mesh: e, settings: b, render: ne });
    x.add(P);
    const K = ea(e, b), B = As(e, b, fe, K), J = Co(K);
    x.add(B), S.appendChild(J);
    const se = Ls(e, b, fe);
    x.add(se);
    const Se = se.__colorMapValues, ge = Co(Se);
    ge.id = "frame-legend", S.appendChild(ge), L.derive(() => {
      var _a;
      const ze = b.shellResults.val != "none", Ee = (((_a = b.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", Te = ze || Ee, Ie = b.frameResults.val.startsWith("contour:");
      J.hidden = !Te, B.visible = Te, ge.hidden = !Ie;
    });
  }
  if (u) {
    const P = new ls(16777215, 0.5);
    x.add(P);
    const K = new bo(16777215, 0.5);
    K.position.set(30, 25, -10), K.shadow.mapSize.width = 1024, K.shadow.mapSize.height = 1024, x.add(K);
    const B = 10;
    K.shadow.camera.left = -B, K.shadow.camera.right = B, K.shadow.camera.top = B, K.shadow.camera.bottom = -B, K.shadow.camera.far = 1e3;
    const J = new bo(16777215, 0.5);
    J.color.setHSL(11, 43, 96), J.position.set(-10, 0, 30), x.add(J), L.derive(() => {
      (u == null ? void 0 : u.val.length) && (x.remove(...u.oldVal), x.add(...u.rawVal), ne());
    }), L.derive(() => {
      u.rawVal.forEach((se) => se.visible = b.solids.val), ne();
    });
  }
  if (h) {
    const P = [], K = (J) => {
      var _a;
      return ((_a = J == null ? void 0 : J.userData) == null ? void 0 : _a.isCota) ? b.showCotas.val : b.custom3D.val;
    }, B = () => {
      for (const J of P) J.visible = K(J);
      ne();
    };
    L.derive(() => {
      const J = h.val;
      P.length && (x.remove(...P), P.length = 0), J.length && (x.add(...J), P.push(...J), B()), ne();
    }), L.derive(() => {
      b.custom3D.val, B();
    }), L.derive(() => {
      b.showCotas.val, B();
    });
  }
  y && Fs({ drawingObj: y, gridObj: I, scene: x, getActiveCamera: () => z, controls: _, gridSize: T, derivedDisplayScale: Q, rendererElm: C.domElement, viewerRender: ne }), Vo((P, K) => {
    var _a;
    C.setClearColor(K.background, 1), x.remove(I), (_a = I.traverse) == null ? void 0 : _a.call(I, (B) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = B.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = B.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), I = qn(b.gridSize.rawVal, { planes: ke() }), x.add(I), S.style.setProperty("--awatif-legend-color", K.legendMarker), ne();
  });
  const Pe = { scene: x, perspCamera: m, orthoCamera: v, get camera() {
    return z;
  }, controls: _, renderer: C, rendererElm: C.domElement, render: ne, setActiveCamera: me, setSplitMode: ie, get splitMode() {
    return O;
  }, get splitCamera() {
    return H;
  }, settings: b };
  S.__ctx = Pe;
  const ce = document.createElement("div");
  ce.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const be = (P, K, B) => {
    const J = document.createElement("button");
    return J.textContent = P, J.title = K, J.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), J.onmouseenter = () => {
      J.style.background = "rgba(70,70,70,0.9)";
    }, J.onmouseleave = () => {
      J.style.background = "rgba(40,40,40,0.85)";
    }, J.onclick = (se) => {
      se.preventDefault(), B();
    }, J;
  }, Ke = (P, K) => {
    const B = _.target, J = new w().subVectors(z.position, B), se = J.length(), Se = new w(), ge = new w();
    Se.crossVectors(z.up, J).normalize(), ge.copy(z.up).normalize();
    const ze = se * 0.05;
    B.addScaledVector(Se, -P * ze), B.addScaledVector(ge, K * ze), z.position.addScaledVector(Se, -P * ze), z.position.addScaledVector(ge, K * ze), _.update(), ne();
  }, We = (P) => {
    const K = new w().subVectors(z.position, _.target);
    K.multiplyScalar(P), z.position.copy(_.target).add(K), _.update(), ne();
  }, q = () => {
    const P = document.createElement("div");
    return P.style.cssText = "width:32px;height:32px;", P;
  };
  return ce.append(q()), ce.append(be("\u2191", "Pan arriba", () => Ke(0, 1))), ce.append(be("\u2295", "Zoom in", () => We(0.85))), ce.append(be("\u2190", "Pan izquierda", () => Ke(-1, 0))), ce.append(be("\u2302", "Reset vista", () => {
    _.reset(), ne();
  })), ce.append(be("\u2192", "Pan derecha", () => Ke(1, 0))), ce.append(be("\u2296", "Zoom out", () => We(1.18))), ce.append(be("\u2193", "Pan abajo", () => Ke(0, -1))), ce.append(q()), getComputedStyle(S).position === "static" && (S.style.position = "relative"), S.appendChild(ce), S;
}
function Hs(e, i) {
  return L.derive(() => {
    var _a, _b, _c, _d;
    if (!i.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const y = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], h = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!h || y.length === 0) return y;
    const u = i.deformScale.val, S = i.deformScale.val * i.deformScaleZ.val, x = Number.isFinite(u) ? u : 1, m = Number.isFinite(S) ? S : 1;
    return y.map((v, z) => {
      var _a2;
      const C = ((_a2 = h.get(z)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], _ = Number.isFinite(C[0]) ? C[0] : 0, W = Number.isFinite(C[1]) ? C[1] : 0, we = Number.isFinite(C[2]) ? C[2] : 0;
      return [v[0] + _ * x, v[1] + W * x, v[2] + we * m];
    });
  });
}
const to = L.state(null), On = L.state(""), qs = L.state("kN"), Js = L.state("mm"), Qs = L.state("kN/m\xB2"), Os = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, Fo = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, js = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function ea(e, i) {
  const y = L.state([]);
  let h;
  return ((u) => {
    u.bendingXX = "bendingXX", u.bendingYY = "bendingYY", u.bendingXY = "bendingXY", u.membraneXX = "membraneXX", u.membraneYY = "membraneYY", u.membraneXY = "membraneXY", u.tranverseShearX = "tranverseShearX", u.tranverseShearY = "tranverseShearY", u.vonMises = "vonMises", u.pressure = "pressure", u.displacementX = "displacementX", u.displacementY = "displacementY", u.displacementZ = "displacementZ";
  })(h || (h = {})), L.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const u = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), de = (Pe, ce) => {
      Pe == null ? void 0 : Pe.forEach((be, Ke) => {
        const We = e.elements.val[Ke];
        if (We) for (let q = 0; q < We.length; q++) ce.set(We[q], [be[q] ?? be[0]]);
      });
    };
    de((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, u), de((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, S), de((_f = (_e2 = e.analyzeOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.bendingXY, x), de((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, m), de((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, v), de((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, z), de((_n2 = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n2.tranverseShearX, C), de((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, _), de((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, W), de((_t2 = (_s2 = e.analyzeOutputs) == null ? void 0 : _s2.val) == null ? void 0 : _t2.pressure, we);
    const ee = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, b = (_w = i.solidResults) == null ? void 0 : _w.val, fe = b && b !== "none" ? b : i.shellResults.val, ke = ee == null ? void 0 : ee[fe], _e = { bendingXX: [u, 0], bendingYY: [S, 0], bendingXY: [x, 0], membraneXX: [m, 0], membraneYY: [v, 0], membraneXY: [z, 0], tranverseShearX: [C, 0], tranverseShearY: [_, 0], vonMises: [W, 0], pressure: [we, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, I = i.shellResults.val, Z = qs.val, D = Js.val, T = I === "displacementX" || I === "displacementY" || I === "displacementZ", F = I === "bendingXX" || I === "bendingYY" || I === "bendingXY", $ = I === "membraneXX" || I === "membraneYY" || I === "membraneXY", U = I === "vonMises" || I === "pressure", V = I === "tranverseShearX" || I === "tranverseShearY", N = (_D = i.solidResults) == null ? void 0 : _D.val, oe = N === "vonMises" || N === "sigmaXX" || N === "sigmaYY" || N === "sigmaZZ" || N === "tauXY" || N === "tauYZ" || N === "tauXZ", O = N === "ux" || N === "uy" || N === "uz", H = Qs.val, A = oe ? js[H] : O || T ? Fo[D] : F || $ || U || V ? 1 / Os[Z] : 1, ae = oe ? H : O || T ? D : F ? `${Z}\xB7m/m` : $ ? `${Z}/m\xB2` : U ? `${Z}/m\xB2` : V ? `${Z}/m` : "";
    On.val = ae, to.val = Array.isArray(ke) && ke.length === 2 ? [ke[0] * A, ke[1] * A] : null;
    const me = N && N !== "none" ? [W, 0] : _e[I], ie = [];
    e.nodes.val.forEach((Pe, ce) => {
      const be = me;
      if (!be || !be[0] || typeof be[0].has != "function") return;
      if (!be[0].has(ce)) {
        ie.push(Number.NaN);
        return;
      }
      const Ke = be[0].get(ce), We = Ke ? Ke[be[1]] ?? 0 : 0;
      ie.push(We * A);
    }), y.val = ie;
  }), y;
}
export {
  us as a,
  Co as b,
  qs as c,
  Js as d,
  Qs as e,
  aa as g
};
