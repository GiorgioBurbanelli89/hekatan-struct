import { N as It, a6 as bn, q as Ho, v as L, a7 as qo, D as Ft, M as He, B as he, F as gt, a8 as Jo, x as it, a9 as Qo, aa as Oo, h as mo, ab as wo, r as en, ac as zn, ad as Pn, a4 as Vo, _ as Oe, a as lt, L as Xt, w as Ao, b as jo, ae as es, f as et, V as w, $ as jt, af as Kn, H as To, d as _t, z as Cn, ag as Fn, t as ts, o as ns, I as Gt, a2 as yn, E as yo, S as rn, m as Wn, ah as xn, g as xo, i as go, j as vo, C as Mo, K as os, U as ss, W as as, X as is, T as _n, P as Gn, Y as ls, Z as bo, O as rs } from "./theme-Co6w-pfC.js";
import { T as xt, O as _o } from "./Text-2W5davkr.js";
import { P as Eo } from "./tweakpane-BXg6ZhiP.js";
import { e as cs } from "./styles-BUnIkm-G.js";
class $o {
  constructor(i, x = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(i, x);
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
  setColorMap(i, x = 32) {
    this.map = Hn[i] || Hn.rainbow, this.n = x;
    const h = 1 / this.n, u = new It(), S = new It();
    this.lut.length = 0, this.lut.push(new It(this.map[0][1]));
    for (let y = 1; y < x; y++) {
      const m = y * h;
      for (let M = 0; M < this.map.length - 1; M++) if (m > this.map[M][0] && m <= this.map[M + 1][0]) {
        const k = this.map[M][0], F = this.map[M + 1][0];
        u.setHex(this.map[M][1], bn), S.setHex(this.map[M + 1][1], bn);
        const b = new It().lerpColors(u, S, (m - k) / (F - k));
        this.lut.push(b);
      }
    }
    return this.lut.push(new It(this.map[this.map.length - 1][1])), this;
  }
  copy(i) {
    return this.lut = i.lut, this.map = i.map, this.n = i.n, this.minV = i.minV, this.maxV = i.maxV, this;
  }
  getColor(i) {
    i = Ho.clamp(i, this.minV, this.maxV), i = (i - this.minV) / (this.maxV - this.minV);
    const x = Math.round(i * this.n);
    return this.lut[x];
  }
  addColorMap(i, x) {
    return Hn[i] = x, this;
  }
  createCanvas() {
    const i = document.createElement("canvas");
    return i.width = 1, i.height = this.n, this.updateCanvas(i), i;
  }
  updateCanvas(i) {
    const x = i.getContext("2d", { alpha: false }), h = x.getImageData(0, 0, 1, this.n), u = h.data;
    let S = 0;
    const y = 1 / this.n, m = new It(), M = new It(), k = new It();
    for (let F = 1; F >= 0; F -= y) for (let b = this.map.length - 1; b >= 0; b--) if (F < this.map[b][0] && F >= this.map[b - 1][0]) {
      const K = this.map[b - 1][0], pe = this.map[b][0];
      m.setHex(this.map[b - 1][1], bn), M.setHex(this.map[b][1], bn), k.lerpColors(m, M, (F - K) / (pe - K)), u[S * 4] = Math.round(k.r * 255), u[S * 4 + 1] = Math.round(k.g * 255), u[S * 4 + 2] = Math.round(k.b * 255), u[S * 4 + 3] = 255, S += 1;
    }
    return x.putImageData(h, 0, 0), i;
  }
}
const Hn = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, Io = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]], ds = { safe: [[0, 224, 13, 107], [0.13, 221, 20, 50], [0.27, 252, 99, 39], [0.4, 254, 161, 47], [0.52, 238, 234, 25], [0.64, 5, 193, 69], [0.78, 7, 178, 244], [0.9, 4, 132, 213], [1, 90, 175, 230]], csi: Io, jet_r: [[0, 200, 0, 0], [0.15, 255, 80, 0], [0.32, 255, 200, 0], [0.48, 180, 255, 0], [0.6, 0, 230, 90], [0.74, 0, 220, 230], [0.88, 0, 110, 255], [1, 0, 0, 180]], jet: [[0, 0, 0, 180], [0.12, 0, 110, 255], [0.26, 0, 220, 230], [0.4, 0, 230, 90], [0.52, 180, 255, 0], [0.68, 255, 200, 0], [0.85, 255, 80, 0], [1, 200, 0, 0]], viridis: [[0, 68, 1, 84], [0.25, 59, 82, 139], [0.5, 33, 145, 140], [0.75, 94, 201, 98], [1, 253, 231, 37]] }, Vn = L.state("safe");
function Lo(e) {
  e = Math.max(0, Math.min(1, e));
  const i = ds[Vn.val] ?? Io;
  for (let h = 0; h < i.length - 1; h++) {
    const [u, S, y, m] = i[h], [M, k, F, b] = i[h + 1];
    if (e <= M) {
      const K = (e - u) / (M - u);
      return [S + (k - S) * K, y + (F - y) * K, m + (b - m) * K];
    }
  }
  const x = i[i.length - 1];
  return [x[1], x[2], x[3]];
}
function So() {
  const i = new Uint8Array(1024);
  for (let h = 0; h < 256; h++) {
    const u = h / 255, [S, y, m] = Lo(u);
    i[h * 4 + 0] = S, i[h * 4 + 1] = y, i[h * 4 + 2] = m, i[h * 4 + 3] = 255;
  }
  const x = new Qo(i, 256, 1, Oo);
  return x.minFilter = mo, x.magFilter = mo, x.wrapS = wo, x.wrapT = wo, x.needsUpdate = true, x;
}
function ps() {
  const i = [];
  for (let x = 0; x <= 12; x++) {
    const h = 1 - x / 12, [u, S, y] = Lo(h);
    i.push(`rgb(${u | 0},${S | 0},${y | 0}) ${(x / 12 * 100).toFixed(0)}%`);
  }
  return `linear-gradient(${i.join(",")})`;
}
function us(e, i, x) {
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
    const y = u.uniforms.cmap.value;
    u.uniforms.cmap.value = So(), (_a = y == null ? void 0 : y.dispose) == null ? void 0 : _a.call(y);
  });
  const S = new He(new he(), u);
  return S.renderOrder = -1, S.frustumCulled = false, S.userData.isShellArea = true, S.name = "__hekatan_shell_colormap", L.derive(() => {
    S.geometry.setAttribute("position", new gt(e.val.flat(), 3));
    const y = [];
    for (const g of i.val) g.length === 3 ? y.push(g[0], g[1], g[2]) : g.length === 4 && (y.push(g[0], g[1], g[2]), y.push(g[0], g[2], g[3]));
    S.geometry.setIndex(new Jo(y, 1));
    const m = x.val.filter((g) => Number.isFinite(g));
    let M, k;
    const F = to.val;
    if (F ? (k = F[0], M = F[1]) : (M = m.length ? Math.max(...m) : 1, k = m.length ? Math.min(...m) : 0, k >= 0 && M > 0 && (k = 0)), M === k) {
      const g = Math.max(Math.abs(M) * 1e-6, 1e-9);
      M += g, k -= g;
    }
    const b = F && F[0] > F[1], K = Math.min(k, M), pe = Math.max(k, M), ie = pe - K, Q = new Float32Array(x.val.length);
    for (let g = 0; g < x.val.length; g++) {
      const O = x.val[g];
      if (!Number.isFinite(O)) {
        Q[g] = -1;
        continue;
      }
      const _e = ((b ? pe + K - O : O) - K) / ie;
      Q[g] = Math.max(0, Math.min(1, _e));
    }
    S.geometry.setAttribute("scalar", new it(Q, 1));
  }), S;
}
function fs(e, i, x) {
  const h = document.createElement("div"), u = new Eo({ title: "Settings", expanded: true, container: h });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(u), h.setAttribute("id", "settings");
  const S = "hk_settingsPos";
  let y = null;
  try {
    const b = localStorage.getItem(S);
    b && (y = JSON.parse(b));
  } catch {
  }
  h.style.cssText = ["position:fixed", y ? `left:${y.left}px` : "left:8px", y ? `top:${y.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const m = () => {
    const b = h.querySelector(".tp-rotv_b");
    if (!b) {
      setTimeout(m, 200);
      return;
    }
    b.style.cursor = "move", b.style.userSelect = "none";
    let K = false, pe = 0, ie = 0, Q = 0, g = 0;
    b.addEventListener("mousedown", (O) => {
      K = true, pe = O.clientX, ie = O.clientY;
      const ue = h.getBoundingClientRect();
      Q = ue.left, g = ue.top, h.style.left = `${Q}px`, h.style.top = `${g}px`;
    }), window.addEventListener("mousemove", (O) => {
      if (!K) return;
      const ue = O.clientX - pe, _e = O.clientY - ie, ve = Math.max(0, Math.min(window.innerWidth - 40, Q + ue)), I = Math.max(0, Math.min(window.innerHeight - 40, g + _e));
      h.style.left = `${ve}px`, h.style.top = `${I}px`;
    }), window.addEventListener("mouseup", () => {
      if (K) {
        K = false;
        try {
          localStorage.setItem(S, JSON.stringify({ left: parseFloat(h.style.left), top: parseFloat(h.style.top) }));
        } catch {
        }
      }
    });
  };
  if (m(), i == null ? void 0 : i.nodes) {
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
  x && u.addBinding(e.solids, "val", { label: "Solids" });
  const M = u.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), k = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), F = () => {
    const b = window.__hekatanClipApply;
    typeof b == "function" && b();
  };
  return M.addBinding(k, "enableX", { label: "Cortar X" }).on("change", F), M.addBinding(k, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", F), M.addBinding(k, "invertX", { label: "  invertir X" }).on("change", F), M.addBinding(k, "enableY", { label: "Cortar Y" }).on("change", F), M.addBinding(k, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", F), M.addBinding(k, "invertY", { label: "  invertir Y" }).on("change", F), M.addBinding(k, "enableZ", { label: "Cortar Z" }).on("change", F), M.addBinding(k, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", F), M.addBinding(k, "invertZ", { label: "  invertir Z" }).on("change", F), h;
}
function hs(e) {
  return { gridSize: L.state((e == null ? void 0 : e.gridSize) ?? 30), gridVisible: L.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: L.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: L.state((e == null ? void 0 : e.gridStep) ?? 1), gridMajor: L.state((e == null ? void 0 : e.gridMajor) ?? 5), cursorSnap: L.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: L.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: L.state((e == null ? void 0 : e.gridXZ) ?? false), gridYZ: L.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: L.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: L.state((e == null ? void 0 : e.nodes) ?? true), elements: L.state((e == null ? void 0 : e.elements) ?? true), edges: L.state((e == null ? void 0 : e.edges) ?? true), faces: L.state((e == null ? void 0 : e.faces) ?? true), elemColumns: L.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: L.state((e == null ? void 0 : e.elemBeams) ?? true), elemFrames: L.state((e == null ? void 0 : e.elemFrames) ?? true), elemZapatas: L.state((e == null ? void 0 : e.elemZapatas) ?? true), elemLosas: L.state((e == null ? void 0 : e.elemLosas) ?? true), colorByType: L.state((e == null ? void 0 : e.colorByType) ?? false), nodesIndexes: L.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: L.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: L.state((e == null ? void 0 : e.orientations) ?? false), sections: L.state((e == null ? void 0 : e.sections) ?? true), sectionLabels: L.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: L.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: L.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: L.state((e == null ? void 0 : e.secFloor) ?? -1), supports: L.state((e == null ? void 0 : e.supports) ?? true), loads: L.state((e == null ? void 0 : e.loads) ?? false), deformedShape: L.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: L.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: L.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: L.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: L.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: L.state((e == null ? void 0 : e.flipAxes) ?? false), solids: L.state((e == null ? void 0 : e.solids) ?? true), custom3D: L.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: L.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: L.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: L.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function ms(e, i, x) {
  const h = en(), u = new zn(new he(), new Pn({ color: h.nodePoint }));
  return Vo((S, y) => {
    u.material.color.setHex(y.nodePoint);
  }), u.frustumCulled = false, L.derive(() => {
    e.nodes.val && u.geometry.setAttribute("position", new gt(i.val.flat(), 3));
  }), L.derive(() => {
    if (x.val, i.val, !e.nodes.rawVal) return;
    const S = i.rawVal ?? [];
    let y = e.gridSize.val * 0.5;
    if (S.length >= 2) {
      const M = [1 / 0, 1 / 0, 1 / 0], k = [-1 / 0, -1 / 0, -1 / 0];
      for (const F of S) for (let b = 0; b < 3; b++) M[b] = Math.min(M[b], F[b]), k[b] = Math.max(k[b], F[b]);
      y = Math.max(k[0] - M[0], k[1] - M[1], k[2] - M[2], 0.1);
    }
    const m = 0.03 * y;
    u.material.size = m * x.rawVal;
  }), L.derive(() => {
    u.visible = e.nodes.val;
  }), u;
}
function qn(e, i) {
  const x = en(), h = new Oe();
  h.name = "hekatan-grid";
  const u = (i == null ? void 0 : i.planes) ?? ["xy"];
  let S = (i == null ? void 0 : i.majorStep) ?? 1, y = (i == null ? void 0 : i.minorStep) ?? 0.1;
  for (S <= 0 && (S = 1), y <= 0 && (y = 0.1); e / y > 500; ) y *= 2;
  for (; e / S > 100; ) S *= 2;
  const m = e / 2;
  S = Math.max(y, Math.round(S / y) * y);
  const k = new It(x.grid), F = new It(x.grid).multiplyScalar(0.45), b = (Q, g, O, ue) => {
    const _e = [], ve = Q === "xy" ? (C, $) => [C, $, 0] : Q === "xz" ? (C, $) => [C, 0, $] : (C, $) => [0, C, $], I = Math.floor(m / g);
    for (let C = -I; C <= I; C++) {
      const $ = C * g, Z = ve($, -m), A = ve($, m);
      _e.push(...Z, ...A);
    }
    for (let C = -I; C <= I; C++) {
      const $ = C * g, Z = ve(-m, $), A = ve(m, $);
      _e.push(...Z, ...A);
    }
    const X = new he();
    X.setAttribute("position", new gt(_e, 3));
    const R = new lt({ color: O, transparent: true, opacity: ue, depthWrite: false }), V = new Xt(X, R);
    return V.name = `grid-${Q}-${g === y ? "minor" : "major"}`, V;
  }, K = (Q, g, O) => {
    const ue = Q === "xy" ? (V, C) => [V, C, 0] : Q === "xz" ? (V, C) => [V, 0, C] : (V, C) => [0, V, C], _e = [[-m, -m], [m, -m], [m, m], [-m, m]], ve = [];
    for (const [V, C] of _e) ve.push(...ue(V, C));
    const I = new he();
    I.setAttribute("position", new gt(ve, 3));
    const X = new lt({ color: g, transparent: true, opacity: O, depthWrite: false }), R = new Ao(I, X);
    return R.name = `grid-${Q}-border`, R.renderOrder = 1, R;
  }, pe = (Q, g, O) => {
    const ue = Q === "xy" ? (X, R) => [X, R, 0] : Q === "xz" ? (X, R) => [X, 0, R] : (X, R) => [0, X, R], _e = g === "u" ? [...ue(-m, 0), ...ue(m, 0)] : [...ue(0, -m), ...ue(0, m)], ve = new he();
    ve.setAttribute("position", new gt(_e, 3));
    const I = new Xt(ve, new lt({ color: O, transparent: true, opacity: 0.45, depthWrite: false }));
    return I.name = `grid-${Q}-eje-${g}`, I.renderOrder = 1, I;
  }, ie = { xy: [14042459, 5155178], xz: [14042459, 4882390], yz: [5155178, 4882390] };
  for (const Q of u) {
    h.add(b(Q, y, F, 0.12)), h.add(b(Q, S, k, 0.4));
    const [g, O] = ie[Q];
    h.add(pe(Q, "u", g)), h.add(pe(Q, "v", O)), h.add(K(Q, k, 0.55));
  }
  return h.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: S, minorStep: y, gridSize: e, planes: [...u] }, h;
}
function ws(e, i, x, h) {
  const u = new Oe(), S = new jo(0.5, 0.5, 0.5), y = new es(0.45, 0.7, 4);
  y.rotateX(Math.PI / 2), y.translate(0, 0, -0.35);
  const m = new et({ color: 10166822 }), M = new et({ color: 2792847 }), k = new et({ color: 3835647 }), F = () => {
    const pe = x.rawVal ?? [];
    if (pe.length < 2) return i.gridSize.val * 0.5;
    let ie = [1 / 0, 1 / 0, 1 / 0], Q = [-1 / 0, -1 / 0, -1 / 0];
    for (const g of pe) for (let O = 0; O < 3; O++) g[O] < ie[O] && (ie[O] = g[O]), g[O] > Q[O] && (Q[O] = g[O]);
    return Math.max(Q[0] - ie[0], Q[1] - ie[1], Q[2] - ie[2], 0.1);
  }, b = () => 0.08 * F(), K = () => h.rawVal;
  return L.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, !i.supports.val) return;
    u.clear();
    const pe = b();
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((ie, Q) => {
      const g = x.val[Q];
      if (!g) return;
      const O = ie ?? [], ue = (O[0] ? 1 : 0) + (O[1] ? 1 : 0) + (O[2] ? 1 : 0), _e = (O[3] ? 1 : 0) + (O[4] ? 1 : 0) + (O[5] ? 1 : 0);
      let ve;
      ue >= 3 && _e >= 3 ? ve = new He(S, m) : ue >= 3 && _e === 0 ? ve = new He(y, M) : ve = new He(y, k), ve.position.set(g[0], g[1], g[2]);
      const I = pe * K();
      ve.scale.set(I, I, I), u.add(ve);
    });
  }), L.derive(() => {
    if (h.val, !i.supports.rawVal) return;
    const ie = b() * K();
    u.children.forEach((Q) => Q.scale.set(ie, ie, ie));
  }), L.derive(() => {
    u.visible = i.supports.val;
  }), u;
}
function ys(e, i, x, h) {
  const u = new Oe();
  u.name = "loadsGroup";
  function S(y) {
    if (y.length < 2) return 0.12 * i.gridSize.rawVal;
    const m = [1 / 0, 1 / 0, 1 / 0], M = [-1 / 0, -1 / 0, -1 / 0];
    for (const F of y) for (let b = 0; b < 3; b++) m[b] = Math.min(m[b], F[b]), M[b] = Math.max(M[b], F[b]);
    return 0.08 * Math.max(M[0] - m[0], M[1] - m[1], M[2] - m[2], 0.1);
  }
  return L.derive(() => {
    var _a, _b, _c;
    if (i.deformedShape.val, !i.loads.val) return;
    u.children.forEach((b) => b.dispose()), u.clear();
    const y = x.val, m = S(y), M = 240, k = [];
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((b, K) => {
      y[K] && b.slice(0, 3).some((pe) => Math.abs(pe) > 1e-15) && k.push(K);
    });
    let F = k;
    if (k.length > M) {
      const b = k.map((V) => y[V][0]), K = k.map((V) => y[V][1]), pe = Math.min(...b), ie = Math.max(...b), Q = Math.min(...K), g = Math.max(...K), O = k.map((V) => y[V][2]), ue = Math.max(1e-6, (Math.max(...O) - Math.min(...O)) / 40), _e = (V) => Math.round(V / ue), ve = new Set(O.map(_e)), I = Math.max(4, Math.floor(M / Math.max(1, ve.size))), X = Math.max(2, Math.round(Math.sqrt(I))), R = /* @__PURE__ */ new Map();
      for (const V of k) {
        const C = ie - pe < 1e-9 ? 0 : (y[V][0] - pe) / (ie - pe), $ = g - Q < 1e-9 ? 0 : (y[V][1] - Q) / (g - Q), Z = Math.min(X - 1, Math.floor(C * X)), A = Math.min(X - 1, Math.floor($ * X)), N = `${Z},${A},${_e(y[V][2])}`, te = Math.hypot(C * X - (Z + 0.5), $ * X - (A + 0.5)), j = R.get(N);
        (!j || te < j.d) && R.set(N, { i: V, d: te });
      }
      F = [...R.values()].map((V) => V.i);
    }
    for (const b of F) {
      const K = e.nodeInputs.val.loads.get(b), pe = y[b];
      if (!pe) continue;
      const ie = new w(...K.slice(0, 3));
      if (ie.lengthSq() < 1e-30) continue;
      ie.normalize();
      const Q = new jt(ie, new w(...pe), 1, 15637248, 0.3, 0.3), g = m * h.rawVal;
      Q.scale.set(g, g, g), u.add(Q);
    }
  }), L.derive(() => {
    if (h.val, !i.loads.rawVal) return;
    const m = S(x.rawVal) * h.rawVal;
    u.children.forEach((M) => M.scale.set(m, m, m));
  }), L.derive(() => {
    u.visible = i.loads.val;
  }), u;
}
function xs(e, i, x) {
  const h = new Oe();
  return L.derive(() => {
    if (!e.nodesIndexes.val) return;
    h.children.forEach((S) => S.dispose()), h.clear();
    const u = 0.05 * e.gridSize.val * 0.6;
    i.val.forEach((S, y) => {
      const m = new xt(`${y}`);
      m.position.set(...S), m.updateScale(u * x.rawVal), h.add(m);
    });
  }), L.derive(() => {
    if (x.val, !e.nodesIndexes.rawVal) return;
    const u = 0.05 * e.gridSize.val * 0.6;
    h.children.forEach((S) => S.updateScale(u * x.rawVal));
  }), L.derive(() => {
    h.visible = e.nodesIndexes.val;
  }), h;
}
function gs(e, i, x, h) {
  const u = new Oe();
  return L.derive(() => {
    var _a;
    if (i.deformedShape.val, !i.elementsIndexes.val) return;
    u.children.forEach((y) => y.dispose()), u.clear();
    const S = 0.05 * i.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((y, m) => {
      const M = new xt(`${m}`, void 0, "#001219");
      M.position.set(...vs(y.map((k) => x.rawVal[k]))), M.updateScale(S * h.rawVal), u.add(M);
    });
  }), L.derive(() => {
    if (h.val, !i.elementsIndexes.rawVal) return;
    const S = 0.05 * i.gridSize.val * 0.6;
    u.children.forEach((y) => y.updateScale(S * h.rawVal));
  }), L.derive(() => {
    u.visible = i.elementsIndexes.val;
  }), u;
}
function vs(e) {
  const i = e.reduce((h, u) => [h[0] + u[0], h[1] + u[1], h[2] + u[2]], [0, 0, 0]), x = e.length;
  return [i[0] / x, i[1] / x, i[2] / x];
}
function ko(e, i) {
  const x = new Oe(), h = Math.min(0.05 * e, 0.6), u = en(), S = new xt("X", "red", "transparent"), y = new xt(i ? "Z" : "Y", "green", "transparent"), m = new xt(i ? "Y" : "Z", "blue", "transparent"), M = new jt(new w(1, 0, 0), new w(0, 0, 0), 1, u.axisArrow, 0.2, 0.2), k = new jt(new w(0, 1, 0), new w(0, 0, 0), 1, u.axisArrow, 0.2, 0.2), F = new jt(new w(0, 0, 1), new w(0, 0, 0), 1, u.axisArrow, 0.2, 0.2);
  return S.position.set(1.3 * h, 0, 0), y.position.set(0, 1.3 * h, 0), m.position.set(0, 0, 1.3 * h), S.updateScale(0.4 * h), y.updateScale(0.4 * h), m.updateScale(0.4 * h), M.scale.set(h, h, h), k.scale.set(h, h, h), F.scale.set(h, h, h), x.add(M, k, F, S, y, m), x;
}
function jn(e, i) {
  const x = new w(...e), u = new w(...i).clone().sub(x), S = u.length(), y = u.dot(new w(1, 0, 0)) / S, m = u.dot(new w(0, 1, 0)) / S, M = u.dot(new w(0, 0, 1)) / S, k = Math.sqrt(y ** 2 + m ** 2);
  let F = new Kn().fromArray([[y, m, M], [-m / k, y / k, 0], [-y * M / k, -m * M / k, k]].flat());
  return M === 1 && (F = new Kn().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), M === -1 && (F = new Kn().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new To().setFromMatrix3(F);
}
function Qn(e, i) {
  return e == null ? void 0 : e.map((x, h) => (9 * x + i[h]) / 10);
}
function gn(e) {
  const i = e.reduce((h, u) => [h[0] + u[0], h[1] + u[1], h[2] + u[2]], [0, 0, 0]), x = e.length;
  return [i[0] / x, i[1] / x, i[2] / x];
}
function Ms(e, i, x) {
  const h = gn([i, x]), u = gn([e, x]), S = gn([e, i]), y = new w(...h).sub(new w(...u)).normalize(), m = new w(...x).sub(new w(...S)).normalize(), M = y.clone().cross(m).normalize(), k = M.clone().cross(y).normalize();
  return new To().makeBasis(y, k, M);
}
function bs(e, i, x, h) {
  const u = new Oe(), S = new he(), y = new lt({ vertexColors: true }), m = [0, 0, 0], M = [1, 0, 0], k = [0, 1, 0], F = [0, 0, 1];
  S.setAttribute("position", new gt([...m, ...M, ...m, ...k, ...m, ...F], 3));
  const b = [255, 0, 0], K = [0, 255, 0], pe = [0, 0, 255];
  return S.setAttribute("color", new gt([...b, ...b, ...K, ...K, ...pe, ...pe], 3)), L.derive(() => {
    var _a;
    i.deformedShape.val, i.orientations.val && (u.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((ie) => {
      const Q = new Xt(S, y), g = x.rawVal[ie[0]], O = x.rawVal[ie[1]];
      if (ie.length === 2 && (Q.position.set(...Qn(g, O)), Q.rotation.setFromRotationMatrix(jn(g, O))), ie.length === 3) {
        const ve = x.rawVal[ie[2]];
        Q.position.set(...gn([g, O, ve])), Q.rotation.setFromRotationMatrix(Ms(g, O, ve));
      }
      const _e = 0.05 * i.gridSize.rawVal * 0.75 * h.rawVal;
      Q.scale.set(_e, _e, _e), u.add(Q);
    }));
  }), L.derive(() => {
    if (h.val, !i.orientations.rawVal) return;
    const Q = 0.05 * i.gridSize.val * 0.75 * h.rawVal;
    u.children.forEach((g) => g.scale.set(Q, Q, Q));
  }), L.derive(() => {
    u.visible = i.orientations.val;
  }), u;
}
function _s(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const i = (e.b * 100).toFixed(0), x = (e.h * 100).toFixed(0);
    return `${i}x${x}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function Ss(e, i, x, h) {
  const u = new Oe(), S = new Oe();
  u.add(S);
  function y(X, R) {
    const V = X / 2, C = R / 2, $ = new Float32Array([0, -V, -C, 0, V, -C, 0, V, C, 0, -V, -C, 0, V, C, 0, -V, C]), Z = new he();
    Z.setAttribute("position", new it($, 3));
    const A = new Float32Array([0, -V, -C, 0, V, -C, 0, V, C, 0, -V, C, 0, -V, -C]), N = new he();
    return N.setAttribute("position", new it(A, 3)), { fill: Z, outline: N };
  }
  function m(X, R = 24) {
    const V = X / 2, C = new Float32Array(R * 9);
    for (let N = 0; N < R; N++) {
      const te = N / R * Math.PI * 2, j = (N + 1) / R * Math.PI * 2;
      C[N * 9] = 0, C[N * 9 + 1] = 0, C[N * 9 + 2] = 0, C[N * 9 + 3] = 0, C[N * 9 + 4] = V * Math.cos(te), C[N * 9 + 5] = V * Math.sin(te), C[N * 9 + 6] = 0, C[N * 9 + 7] = V * Math.cos(j), C[N * 9 + 8] = V * Math.sin(j);
    }
    const $ = new he();
    $.setAttribute("position", new it(C, 3));
    const Z = new Float32Array((R + 1) * 3);
    for (let N = 0; N <= R; N++) {
      const te = N / R * Math.PI * 2;
      Z[N * 3] = 0, Z[N * 3 + 1] = V * Math.cos(te), Z[N * 3 + 2] = V * Math.sin(te);
    }
    const A = new he();
    return A.setAttribute("position", new it(Z, 3)), { fill: $, outline: A };
  }
  function M(X, R, V, C) {
    const $ = V ?? R * 0.08, Z = C ?? X * 0.07, A = X / 2, N = R / 2, te = N - $, j = Z / 2, H = [];
    function T(le, Pe, de, Se) {
      H.push(0, le, Pe, 0, de, Pe, 0, de, Se, 0, le, Pe, 0, de, Se, 0, le, Se);
    }
    T(-A, -N, A, -te), T(-j, -te, j, te), T(-A, te, A, N);
    const ae = new he();
    ae.setAttribute("position", new it(new Float32Array(H), 3));
    const oe = new Float32Array([0, -A, -N, 0, A, -N, 0, A, -te, 0, j, -te, 0, j, te, 0, A, te, 0, A, N, 0, -A, N, 0, -A, te, 0, -j, te, 0, -j, -te, 0, -A, -te, 0, -A, -N]), we = new he();
    return we.setAttribute("position", new it(oe, 3)), { fill: ae, outline: we };
  }
  function k(X, R, V) {
    const C = X / 2, $ = R / 2, Z = C - V, A = $ - V, N = [];
    function te(ae, oe, we, le) {
      N.push(0, ae, oe, 0, we, oe, 0, we, le, 0, ae, oe, 0, we, le, 0, ae, le);
    }
    te(-C, -$, C, -A), te(-C, A, C, $), te(-C, -A, -Z, A), te(Z, -A, C, A);
    const j = new he();
    j.setAttribute("position", new it(new Float32Array(N), 3));
    const H = new Float32Array([0, -C, -$, 0, C, -$, 0, C, -$, 0, C, $, 0, C, $, 0, -C, $, 0, -C, $, 0, -C, -$, 0, -Z, -A, 0, Z, -A, 0, Z, -A, 0, Z, A, 0, Z, A, 0, -Z, A, 0, -Z, A, 0, -Z, -A]), T = new he();
    return T.setAttribute("position", new it(H, 3)), { fill: j, outline: T };
  }
  function F(X, R, V) {
    const C = X / 2, $ = R / 2, Z = C - V, A = $ - V, N = new he(), te = new Float32Array([0, -Z, -A, 0, Z, -A, 0, Z, A, 0, -Z, -A, 0, Z, A, 0, -Z, A]);
    N.setAttribute("position", new it(te, 3));
    const j = [];
    function H(we, le, Pe, de) {
      j.push(0, we, le, 0, Pe, le, 0, Pe, de, 0, we, le, 0, Pe, de, 0, we, de);
    }
    H(-C, -$, C, -A), H(-C, A, C, $), H(-C, -A, -Z, A), H(Z, -A, C, A);
    const T = new he();
    T.setAttribute("position", new it(new Float32Array(j), 3));
    const ae = new Float32Array([0, -C, -$, 0, C, -$, 0, C, -$, 0, C, $, 0, C, $, 0, -C, $, 0, -C, $, 0, -C, -$, 0, -Z, -A, 0, Z, -A, 0, Z, -A, 0, Z, A, 0, Z, A, 0, -Z, A, 0, -Z, A, 0, -Z, -A]), oe = new he();
    return oe.setAttribute("position", new it(ae, 3)), { concFill: N, steelFillGeom: T, outline: oe };
  }
  function b(X, R, V) {
    const C = [], $ = [[0, -X / 2, -R / 2], [0, -X / 2 + V, -R / 2], [0, -X / 2 + V, R / 2 - V], [0, X / 2, R / 2 - V], [0, X / 2, R / 2], [0, -X / 2, R / 2]], Z = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const j of Z) C.push(...$[j]);
    const A = new he();
    A.setAttribute("position", new it(new Float32Array(C), 3));
    const N = [];
    for (let j = 0; j < $.length; j++) {
      const H = (j + 1) % $.length;
      N.push(...$[j], ...$[H]);
    }
    const te = new he();
    return te.setAttribute("position", new it(new Float32Array(N), 3)), { fill: A, outline: te };
  }
  function K(X, R, V, C) {
    const $ = C / 2, Z = [], A = [[0, -X - $, -R / 2], [0, -V - $, -R / 2], [0, -V - $, R / 2 - V], [0, -$, R / 2 - V], [0, -$, R / 2], [0, -X - $, R / 2]], N = [[0, $, -R / 2], [0, $ + V, -R / 2], [0, $ + V, R / 2 - V], [0, X + $, R / 2 - V], [0, X + $, R / 2], [0, $, R / 2]], te = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const ae of te) Z.push(...A[ae]);
    for (const ae of te) Z.push(...N[ae]);
    const j = new he();
    j.setAttribute("position", new it(new Float32Array(Z), 3));
    const H = [];
    for (const ae of [A, N]) for (let oe = 0; oe < ae.length; oe++) {
      const we = (oe + 1) % ae.length;
      H.push(...ae[oe], ...ae[we]);
    }
    const T = new he();
    return T.setAttribute("position", new it(new Float32Array(H), 3)), { fill: j, outline: T };
  }
  function pe(X, R, V, C) {
    const $ = R / 2, Z = X, A = [[0, -Z, -$], [0, -Z, -$ + V], [0, -C, -$ + V], [0, -C, $ - V], [0, -Z, $ - V], [0, -Z, $], [0, 0, $], [0, 0, -$]], N = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], te = [];
    for (const ae of N) te.push(...A[ae]);
    const j = new he();
    j.setAttribute("position", new it(new Float32Array(te), 3));
    const H = [];
    for (let ae = 0; ae < A.length; ae++) {
      const oe = (ae + 1) % A.length;
      H.push(...A[ae], ...A[oe]);
    }
    const T = new he();
    return T.setAttribute("position", new it(new Float32Array(H), 3)), { fill: j, outline: T };
  }
  function ie(X, R, V, C, $) {
    const Z = R / 2, A = $ / 2, N = [], te = [[0, -X, -Z], [0, -X, -Z + V], [0, -A - C, -Z + V], [0, -A - C, Z - V], [0, -X, Z - V], [0, -X, Z], [0, -A, Z], [0, -A, -Z]], j = te.map((we) => [we[0], -we[1], we[2]]), H = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const we of H) N.push(...te[we]);
    for (const we of H) N.push(...j[we]);
    const T = new he();
    T.setAttribute("position", new it(new Float32Array(N), 3));
    const ae = [];
    for (const we of [te, j]) for (let le = 0; le < we.length; le++) {
      const Pe = (le + 1) % we.length;
      ae.push(...we[le], ...we[Pe]);
    }
    const oe = new he();
    return oe.setAttribute("position", new it(new Float32Array(ae), 3)), { fill: T, outline: oe };
  }
  function Q(X, R, V, C) {
    const $ = X / 2, Z = R / 2, A = C / 2, N = [[0, -A, -Z], [0, A, -Z], [0, A, Z - V], [0, $, Z - V], [0, $, Z], [0, -$, Z], [0, -$, Z - V], [0, -A, Z - V]], te = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], j = [];
    for (const oe of te) j.push(...N[oe]);
    const H = new he();
    H.setAttribute("position", new it(new Float32Array(j), 3));
    const T = [];
    for (let oe = 0; oe < N.length; oe++) {
      const we = (oe + 1) % N.length;
      T.push(...N[oe], ...N[we]);
    }
    const ae = new he();
    return ae.setAttribute("position", new it(new Float32Array(T), 3)), { fill: H, outline: ae };
  }
  function g(X, R, V = 24) {
    const C = X / 2, $ = C - R, Z = [];
    for (let j = 0; j < V; j++) {
      const H = j / V * Math.PI * 2, T = (j + 1) / V * Math.PI * 2, ae = Math.cos(H), oe = Math.sin(H), we = Math.cos(T), le = Math.sin(T);
      Z.push(0, C * ae, C * oe, 0, C * we, C * le, 0, $ * we, $ * le), Z.push(0, C * ae, C * oe, 0, $ * we, $ * le, 0, $ * ae, $ * oe);
    }
    const A = new he();
    A.setAttribute("position", new it(new Float32Array(Z), 3));
    const N = [];
    for (let j = 0; j < V; j++) {
      const H = j / V * Math.PI * 2, T = (j + 1) / V * Math.PI * 2;
      N.push(0, C * Math.cos(H), C * Math.sin(H), 0, C * Math.cos(T), C * Math.sin(T)), N.push(0, $ * Math.cos(H), $ * Math.sin(H), 0, $ * Math.cos(T), $ * Math.sin(T));
    }
    const te = new he();
    return te.setAttribute("position", new it(new Float32Array(N), 3)), { fill: A, outline: te };
  }
  const O = new et({ color: 52479, transparent: true, opacity: 0.35, side: Ft, depthWrite: false }), ue = new lt({ color: 52479 }), _e = new et({ color: 16750848, transparent: true, opacity: 0.4, side: Ft, depthWrite: false }), ve = new lt({ color: 16750848 });
  function I(X, R) {
    const V = Math.abs(R[0] - X[0]), C = Math.abs(R[1] - X[1]), $ = Math.abs(R[2] - X[2]);
    return $ > V && $ > C || C > V && C > $;
  }
  return L.derive(() => {
    var _a, _b;
    i.deformedShape.val, i.secColumns.val, i.secBeams.val, i.secFloor.val;
    const X = i.secColumns.rawVal, R = i.secBeams.rawVal;
    if (!X && !R) {
      u.children.forEach((A) => {
        A instanceof xt && A.dispose();
      }), u.clear();
      return;
    }
    u.children.forEach((A) => {
      A instanceof xt && A.dispose();
    }), u.clear();
    const V = (_a = e.elements) == null ? void 0 : _a.val, C = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!V || !C) return;
    const $ = C.sectionShapes, Z = i.secFloor.rawVal;
    V.forEach((A, N) => {
      if (A.length !== 2) return;
      const te = x.rawVal[A[0]], j = x.rawVal[A[1]];
      if (!te || !j) return;
      const H = I(te, j);
      if (H && !X || !H && !R) return;
      if (Z >= 0) {
        const le = Math.min(te[1], j[1]);
        Math.max(te[1], j[1]);
        const Pe = i.gridSize.rawVal || 3;
        if (Math.floor(le / Pe + 0.01) !== Z) return;
      }
      const T = $ == null ? void 0 : $.get(N);
      if (!T) return;
      const ae = [(te[0] + j[0]) / 2, (te[1] + j[1]) / 2, (te[2] + j[2]) / 2], oe = jn(te, j);
      if (T.type === "CFT") {
        const le = F(T.b, T.h, T.tw ?? T.b * 0.05), Pe = new He(le.concFill, O);
        Pe.position.set(...ae), Pe.rotation.setFromRotationMatrix(oe), u.add(Pe);
        const de = new He(le.steelFillGeom, _e);
        de.position.set(...ae), de.rotation.setFromRotationMatrix(oe), u.add(de);
        const Se = new _t(le.outline, ve);
        Se.position.set(...ae), Se.rotation.setFromRotationMatrix(oe), u.add(Se);
      } else {
        let le, Pe, de;
        switch (T.type) {
          case "rect":
            le = y(T.b, T.h), Pe = O, de = ue;
            break;
          case "circ":
            le = m(T.d), Pe = O, de = ue;
            break;
          case "I":
            le = M(T.b, T.h, T.tf, T.tw), Pe = _e, de = ve;
            break;
          case "HSS":
            le = k(T.b, T.h, T.tw ?? T.b * 0.05), Pe = _e, de = ve;
            break;
          case "CFT":
            le = F(T.b, T.h, T.tw ?? T.b * 0.05), Pe = _e, de = ve;
            break;
          case "L":
            le = b(T.b ?? T.h, T.h, T.t ?? T.tw ?? 3e-3), Pe = _e, de = ve;
            break;
          case "2L":
            le = K(T.b ?? T.h, T.h, T.t ?? T.tw ?? 3e-3, T.dis ?? 0.01), Pe = _e, de = ve;
            break;
          case "C":
          case "coldC":
            le = pe(T.b, T.h, T.tf ?? T.t ?? 3e-3, T.tw ?? T.t ?? 3e-3), Pe = _e, de = ve;
            break;
          case "2C":
            le = ie(T.b, T.h, T.tf ?? 5e-3, T.tw ?? 5e-3, T.dis ?? 0.01), Pe = _e, de = ve;
            break;
          case "T":
            le = Q(T.b, T.h, T.tf ?? 0.01, T.tw ?? 6e-3), Pe = _e, de = ve;
            break;
          case "pipe":
            le = g(T.d, T.tw ?? T.d * 0.05), Pe = _e, de = ve;
            break;
          default:
            return;
        }
        const Se = new He(le.fill, Pe);
        Se.position.set(...ae), Se.rotation.setFromRotationMatrix(oe), u.add(Se);
        const Ke = new _t(le.outline, de);
        Ke.position.set(...ae), Ke.rotation.setFromRotationMatrix(oe), u.add(Ke);
      }
      const we = _s(T);
      if (we) {
        const Pe = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(T.type) ? "#ff9900" : "#00ccff", de = new xt(we, Pe, "transparent");
        de.position.set(ae[0], ae[1], ae[2]);
        const Se = 0.05 * i.gridSize.rawVal * 0.5;
        de.updateScale(Se * ((h == null ? void 0 : h.rawVal) ?? 1)), S.add(de);
      }
    });
  }), h && L.derive(() => {
    if (h.val, !i.sections.rawVal) return;
    const X = 0.05 * i.gridSize.val * 0.5;
    S.children.forEach((R) => {
      R instanceof xt && R.updateScale(X * h.rawVal);
    });
  }), L.derive(() => {
    u.visible = i.sections.val;
  }), L.derive(() => {
    S.visible = i.sectionLabels.val;
  }), u;
}
class Sn extends Oe {
  constructor(i, x, h, u, S, y, m) {
    super();
    const M = new Cn().moveTo(0, 0).lineTo(0, y[1]).lineTo(h, y[1]).lineTo(h, 0).lineTo(0, 0), k = M.getPoints(), F = new he().setFromPoints(k);
    this.lines = new _t(F, new lt({ color: en().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(u), m && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const b = new Fn(M), K = new et({ color: y[1] > 0 ? 24435 : 11411474, side: Ft });
    this.mesh = new He(b, K), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(u), m && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new xt(`${S[1].toFixed(4)}`), this.normalizedResult = y, this.textPosition = gn([i, x]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(u), this.add(this.text);
  }
  updateScale(i) {
    this.lines.scale.set(1, i * 2, 1), this.mesh.scale.set(1, i * 2, 1), this.text.updateScale(i * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * i);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class zo extends Oe {
  constructor(i, x, h, u, S, y, m) {
    super();
    const M = S[0] * h / (S[0] + S[1]), k = S[0] * S[1] > 0;
    if (this.text = new xt(`${S[0].toFixed(4)}`), this.text2 = new xt(`${(S[1] * -1).toFixed(4)}`), this.normalizedResult = y, this.textPosition = Qn(i, x), this.text2Position = Qn(x, i), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(u), this.text2.rotation.setFromRotationMatrix(u), this.add(this.text, this.text2), k) {
      const F = new Cn().moveTo(0, 0).lineTo(0, y[0]).lineTo(M, 0).lineTo(0, 0), b = new Cn().moveTo(M, 0).lineTo(h, -y[1]).lineTo(h, 0).lineTo(M, 0), K = F.getPoints(), pe = b.getPoints(), ie = new he().setFromPoints(K), Q = new he().setFromPoints(pe), g = new lt({ color: en().resultOutline });
      this.lines = new _t(ie, g), this.lines2 = new _t(Q, g), this.lines.position.set(...i), this.lines2.position.set(...i), this.lines.rotation.setFromRotationMatrix(u), this.lines2.rotation.setFromRotationMatrix(u), m && this.lines.rotateX(Math.PI / 2), m && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const O = new Fn(F), ue = new Fn(b), _e = new et({ color: y[0] > 0 ? 24435 : 11411474, side: Ft }), ve = new et({ color: -y[1] > 0 ? 24435 : 11411474, side: Ft });
      this.mesh = new He(O, _e), this.mesh2 = new He(ue, ve), this.mesh.position.set(...i), this.mesh2.position.set(...i), this.mesh.rotation.setFromRotationMatrix(u), this.mesh2.rotation.setFromRotationMatrix(u), m && this.mesh.rotateX(Math.PI / 2), m && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const F = new Cn().moveTo(0, 0).lineTo(0, y[0]).lineTo(h, -y[1]).lineTo(h, 0).lineTo(0, 0), b = F.getPoints(), K = new he().setFromPoints(b);
      this.lines = new _t(K, new lt({ color: en().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(u), m && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const pe = new Fn(F), ie = new et({ color: y[0] > 0 ? 24435 : 11411474, side: Ft });
      this.mesh = new He(pe, ie), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(u), m && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var Ro = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(Ro || {});
function ks(e, i, x, h) {
  const u = new Oe(), S = { normals: Sn, shearsY: Sn, shearsZ: Sn, torsions: Sn, bendingsY: zo, bendingsZ: zo };
  return L.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, x.val, i.frameResults.val == "none") return;
    u.children.forEach((m) => m.dispose()), u.clear();
    const y = Ro[i.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[y]) == null ? void 0 : _b.forEach((m, M) => {
      var _a2, _b2;
      const k = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[M]) ?? [0, 1], F = x.rawVal[k[0]], b = x.rawVal[k[1]], K = new w(...b).distanceTo(new w(...F)), pe = zs((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[y]), ie = m == null ? void 0 : m.map((ue) => ue / (pe === 0 ? 1 : pe)), Q = jn(F, b), g = new S[y](F, b, K, Q, m ?? [0, 0], ie ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(y)), O = 0.05 * i.gridSize.rawVal;
      g.updateScale(O * h.rawVal), u.add(g);
    });
  }), L.derive(() => {
    if (h.val, i.frameResults.rawVal == "none") return;
    const y = 0.05 * i.gridSize.val;
    u.children.forEach((m) => m.updateScale(y * h.rawVal));
  }), L.derive(() => {
    u.visible = i.frameResults.val != "none";
  }), u;
}
function zs(e) {
  let i = 0;
  return e == null ? void 0 : e.forEach((x) => {
    const h = Math.max(...x ?? [0, 0]);
    h > i && (i = h);
  }), i;
}
class Ps extends Oe {
  constructor(i, x, h) {
    super();
    const u = x === eo.reactions;
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
function Cs(e, i, x, h) {
  const u = new Oe();
  return L.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, i.nodeResults.val == "none") return;
    u.children.forEach((m) => m.dispose()), u.clear();
    const S = eo[i.nodeResults.rawVal], y = 0.05 * i.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[S]) == null ? void 0 : _b.forEach((m, M) => {
      const k = new Ps(x.rawVal[M], S, m ?? [0, 0, 0, 0, 0, 0]);
      k.updateScale(y * h.rawVal), u.add(k);
    });
  }), L.derive(() => {
    if (h.val, i.nodeResults.rawVal == "none") return;
    const S = 0.05 * i.gridSize.val;
    u.children.forEach((y) => y.updateScale(S * h.rawVal));
  }), L.derive(() => {
    u.visible = i.nodeResults.val != "none";
  }), u;
}
function Fs({ drawingObj: e, gridObj: i, scene: x, getActiveCamera: h, controls: u, gridSize: S, derivedDisplayScale: y, rendererElm: m, viewerRender: M }) {
  const k = new ts(), F = new ns(), b = (n) => {
    const o = m.getBoundingClientRect(), a = n.clientX - o.left, t = n.clientY - o.top, r = o.width || 1, s = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const d = r / 2;
      if (a >= d) return F.x = (a - d) / d * 2 - 1, F.y = -(t / s) * 2 + 1, window.__hekatanSplitCamera ?? h();
      F.x = a / d * 2 - 1;
    } else F.x = a / r * 2 - 1;
    return F.y = -(t / s) * 2 + 1, h();
  }, K = new He(new Gt(1e4, 1e4), new et({ side: Ft, transparent: true, opacity: 0, depthWrite: false }));
  K.visible = true, K.frustumCulled = false, x.add(K);
  const pe = (n, o, a) => {
    const t = new He(new Gt(1e4, 1e4), new et({ side: Ft, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, a), t.visible = false, t.frustumCulled = false, x.add(t), t;
  }, ie = pe(Math.PI / 2, 0, 0), Q = pe(0, Math.PI / 2, 0);
  let g = false;
  const O = () => {
    if (g) return k.intersectObjects([K], false);
    if (ie.visible = !!window.__hekatanGridPlaneXZ, Q.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanOrthoRaycast === true && Te.visible) {
      const a = k.intersectObjects([Te, Ie, De], false);
      if (a.length > 0) return a;
    }
    const o = [K];
    return ie.visible && o.push(ie), Q.visible && o.push(Q), Bt.visible && Yt.length > 0 && o.push(...Yt), k.intersectObjects(o, false);
  }, ue = new zn(new he(), new Pn()), _e = new zn(new he(), new Pn({ color: "gray", sizeAttenuation: false, size: 6 })), ve = new zn(new he(), new Pn({ color: "orange", size: 0.1 }));
  x.add(ve);
  const I = document.createElement("input");
  I.id = "hk-rubber-label", I.type = "text", I.spellcheck = false, I.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, I.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none", "pointer-events:none"].join(";") + ";", document.body.appendChild(I);
  let X = null, R = null, V = false;
  const C = new w(), $ = (n, o, a, t, r, s) => {
    const l = t - n, d = r - o, p = s - a, v = Math.hypot(l, d, p);
    if (v < 0.01) {
      I.style.display = "none";
      return;
    }
    X = [n, o, a], R = [l / v, d / v, p / v], C.set((n + t) / 2, (o + r) / 2, (a + s) / 2), C.project(h());
    const _ = m.getBoundingClientRect(), c = _.left + (C.x * 0.5 + 0.5) * _.width, f = _.top + (-C.y * 0.5 + 0.5) * _.height;
    if (I.style.left = c + "px", I.style.top = f + "px", I.style.display = "block", !V) {
      if (I.value = `${v.toFixed(2)} m`, document.activeElement !== I) {
        const z = document.activeElement;
        z && (z.tagName === "INPUT" || z.tagName === "TEXTAREA") && z !== I || I.focus({ preventScroll: true });
      }
      try {
        I.select();
      } catch {
      }
    }
  }, Z = () => {
    I.style.display = "none", X = null, R = null, V = false, document.activeElement === I && I.blur();
  }, A = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      Mt = n, re(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), I.blur();
      return;
    }
    if (!X || !R || !e.polylines) return;
    let a = R[0], t = R[1], r = R[2];
    tt === "x" ? (a = Math.sign(a) || 1, t = 0, r = 0) : tt === "y" ? (a = 0, t = Math.sign(t) || 1, r = 0) : tt === "z" && (a = 0, t = 0, r = Math.sign(r) || 1);
    const s = X[0] + a * n, l = X[1] + t * n, d = X[2] + r * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [s, l, d]];
    const p = e.polylines.rawVal, v = p.length ? p[p.length - 1] : [];
    e.polylines.val = [...p.slice(0, -1), [...v, e.points.rawVal.length - 1]], I.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    M();
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
  }, te = (n) => {
    if (!n) return null;
    if (n.kind === "absCart") return [n.x, n.y, n.z];
    if (n.kind === "relCart") return X ? [X[0] + n.dx, X[1] + n.dy, X[2] + n.dz] : null;
    if (n.kind === "absPolar") {
      const o = n.ang * Math.PI / 180;
      return [n.L * Math.cos(o), n.L * Math.sin(o), 0];
    }
    if (n.kind === "relPolar") {
      if (!X) return null;
      const o = n.ang * Math.PI / 180;
      return [X[0] + n.L * Math.cos(o), X[1] + n.L * Math.sin(o), X[2]];
    }
    if (n.kind === "relSpherical") {
      if (!X) return null;
      const o = n.az * Math.PI / 180, a = n.el * Math.PI / 180, t = n.L * Math.cos(a);
      return [X[0] + t * Math.cos(o), X[1] + t * Math.sin(o), X[2] + n.L * Math.sin(a)];
    }
    return null;
  }, j = (n) => {
    var _a;
    if (!e.polylines) return;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, n];
    const o = e.polylines.rawVal, a = o.length ? o[o.length - 1] : [];
    e.polylines.val = [...o.slice(0, -1), [...a, e.points.rawVal.length - 1]], I.blur();
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    M();
  };
  window.__hekatanTypeCoord = (n) => {
    var _a, _b, _c, _d;
    const o = N(n);
    if (!o) return false;
    if (o.kind === "length") return A(o.L), true;
    const a = te(o);
    if (!a) return false;
    if (j(a), ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "area" && e.polylines) {
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
      if (V = false, a.kind === "length") A(a.L), re(`\u270F DDE ${a.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = te(a);
        if (!t) return;
        j(t);
        const r = a.kind;
        re(`\u270F ${r} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
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
    if (!X || !R || document.activeElement === I) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (I.value = n.key, I.focus(), I.setSelectionRange(1, 1), n.preventDefault());
  });
  const H = document.createElement("div");
  H.id = "hk-coord-readout", H.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", H.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(H);
  const T = document.createElement("div");
  T.id = "hk-coord-fixed", T.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", T.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(T);
  const ae = new _t(new he().setFromPoints([new w(0, 0, 0), new w(0, 0, 0)]), new yn({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  ae.frustumCulled = false, ae.visible = false, x.add(ae);
  const oe = new _t(new he(), new lt({ color: 2282478, transparent: true, opacity: 0.9 }));
  oe.frustumCulled = false, oe.visible = false, x.add(oe);
  let we = [];
  const le = new Oe(), Pe = new He(new Gt(1, 1), new et({ color: 2282478, transparent: true, opacity: 0.08, side: Ft, depthWrite: false })), de = new Xt(new yo(new Gt(1, 1)), new lt({ color: 2282478, transparent: true, opacity: 0.85 })), Se = new Xt(new he(), new lt({ color: 2282478, transparent: true, opacity: 0.3 })), Ke = (n, o) => {
    const a = [], t = Math.ceil(n / o);
    for (let r = -t; r <= t; r++) {
      const s = r * o;
      a.push(-n, s, 0, n, s, 0), a.push(s, -n, 0, s, n, 0);
    }
    Se.geometry.dispose(), Se.geometry = new he(), Se.geometry.setAttribute("position", new gt(a, 3));
  };
  le.add(Pe, de, Se), le.visible = false, le.frustumCulled = false, x.add(le);
  const We = new Oe();
  We.frustumCulled = false, We.visible = false, x.add(We);
  const q = (n) => {
    const o = new he().setFromPoints([new w(0, 0, 0), new w(0, 0, 0)]), a = new yn({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new _t(o, a);
  }, P = q(16711680), W = q(65280), B = q(35071);
  We.add(P, W, B);
  const J = (n) => {
    const o = new he().setFromPoints([new w(0, 0, 0), new w(0, 0, 0), new w(0, 0, 0), new w(0, 0, 0)]), a = new lt({ color: n, transparent: true, opacity: 0.2, depthTest: false }), t = new Ao(o, a);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, se = J(3462041), ke = J(16724804), ge = J(6333946), ze = new Oe();
  ze.frustumCulled = false, ze.visible = false, x.add(ze), ze.add(se, ke, ge);
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
      Ze(se, s, "xy", l), Ze(ke, s, "xz", l), Ze(ge, s, "yz", l), qe(Te, s, "xy", l), qe(Ie, s, "xz", l), qe(De, s, "yz", l), Te.material.opacity = 0.05, Ie.material.opacity = 0.05, De.material.opacity = 0.05;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    M();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !ze.visible) {
      M();
      return;
    }
    const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0];
    Ze(se, s, "xy", n), Ze(ke, s, "xz", n), Ze(ge, s, "yz", n), qe(Te, s, "xy", n), qe(Ie, s, "xz", n), qe(De, s, "yz", n), M();
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
    if (n.key === "Enter" && t === "polyarea" && we.length >= 3) {
      const r = cn();
      re(`\u2713 \xC1rea libre mallada \u2014 ${r} shells Q4 creados.`), n.preventDefault();
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
  const Be = new w(), Ve = new w(), Me = new w(), Ye = (n) => {
    if (!tt) return null;
    const o = n[0], a = n[1], t = n[2];
    return tt === "x" ? (Be.set(o - 1e4, a, t), Ve.set(o + 1e4, a, t)) : tt === "y" ? (Be.set(o, a - 1e4, t), Ve.set(o, a + 1e4, t)) : (Be.set(o, a, t - 1e4), Ve.set(o, a, t + 1e4)), k.ray.distanceSqToSegment(Be, Ve, null, Me), Me;
  };
  window.__hekatanProjectOnAxis = Ye;
  const ce = new _t(new he().setFromPoints([new w(0, 0, 0), new w(0, 0, 0)]), new lt({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  ce.renderOrder = 998, ce.frustumCulled = false, ce.visible = false, x.add(ce);
  let Ne = -1, Ge = -1, dt = -1;
  const me = /* @__PURE__ */ new Set();
  window.__hekatanSelection = me;
  const Le = new _t(new he().setFromPoints([new w(), new w()]), new lt({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  Le.renderOrder = 997, Le.frustumCulled = false, Le.visible = false, x.add(Le);
  const Je = new He(new rn(0.02, 12, 12), new et({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  Je.renderOrder = 998, Je.visible = false, x.add(Je);
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
  ft.frustumCulled = false, x.add(ft);
  const zt = 2282478;
  let ot = null;
  const Ht = (n, o, a, t) => {
    if (!e.points) return -1;
    const r = e.points.rawVal;
    let s = -1, l = t;
    for (let d = 0; d < r.length; d++) {
      const p = r[d];
      if (!p) continue;
      const v = Math.hypot(n - p[0], o - p[1], a - p[2]);
      v < l && (l = v, s = d);
    }
    return s;
  }, Rt = () => {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    for (; ft.children.length; ) {
      const l = ft.children.pop();
      (_b = (_a = l.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = l.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const l of me) {
      const [d, ...p] = l.split(":");
      if (d === "pt") {
        const v = n[+p[0]];
        if (!v) continue;
        const _ = new He(new rn(0.025, 12, 12), new et({ color: zt, transparent: true, opacity: 0.9, depthTest: false }));
        _.position.set(v[0], v[1], v[2]), _.renderOrder = 999, _.__isSelectionPt = true, ft.add(_);
      } else if (d === "seg") {
        const v = o[+p[0]], _ = n[v == null ? void 0 : v[+p[1]]], c = n[v == null ? void 0 : v[+p[1] + 1]];
        if (!_ || !c) continue;
        const f = new he().setFromPoints([new w(_[0], _[1], _[2]), new w(c[0], c[1], c[2])]), z = new _t(f, new lt({ color: zt, transparent: true, opacity: 0.95, depthTest: false }));
        z.renderOrder = 999, ft.add(z);
      } else if (d === "poly") {
        const _ = o[+p[0]].map((z) => {
          const D = n[z];
          return D ? new w(D[0], D[1], D[2]) : null;
        }).filter(Boolean);
        if (_.length < 2) continue;
        const c = new he().setFromPoints(_), f = new _t(c, new lt({ color: zt, transparent: true, opacity: 0.95, depthTest: false }));
        f.renderOrder = 999, ft.add(f);
      } else if (d === "aux") {
        const v = t[+p[0]];
        if (!v || v.length !== 6) continue;
        const _ = new he().setFromPoints([new w(v[0], v[1], v[2]), new w(v[3], v[4], v[5])]), c = new _t(_, new lt({ color: zt, transparent: true, opacity: 0.95, depthTest: false }));
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
    M();
  };
  window.__hekatanRefreshSelection = Rt, window.__hekatanClearSelection = () => {
    me.clear(), Rt();
  };
  const tn = (n, o, a, t, r, s, l, d, p) => {
    const v = l - t, _ = d - r, c = p - s, f = v * v + _ * _ + c * c;
    if (f < 1e-12) return Math.hypot(n - t, o - r, a - s);
    let z = ((n - t) * v + (o - r) * _ + (a - s) * c) / f;
    z = Math.max(0, Math.min(1, z));
    const D = t + z * v, Y = r + z * _, G = s + z * c;
    return Math.hypot(n - D, o - Y, a - G);
  }, qt = (n, o, a, t) => {
    if (!e.polylines) return null;
    const r = e.polylines.rawVal, s = e.points.rawVal;
    let l = -1, d = -1, p = t;
    for (let v = 0; v < r.length; v++) {
      const _ = r[v];
      for (let c = 0; c < _.length - 1; c++) {
        const f = s[_[c]], z = s[_[c + 1]];
        if (!f || !z) continue;
        const D = tn(n, o, a, f[0], f[1], f[2], z[0], z[1], z[2]);
        D < p && (p = D, l = v, d = c);
      }
    }
    return l >= 0 ? { polyIdx: l, segIdx: d, dist: p } : null;
  }, Jt = (n, o, a, t) => {
    const r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? (r == null ? void 0 : r.val) ?? r ?? [];
    let l = -1, d = t;
    for (let p = 0; p < s.length; p++) {
      const v = s[p];
      if (!v || v.length !== 6) continue;
      const _ = tn(n, o, a, v[0], v[1], v[2], v[3], v[4], v[5]);
      _ < d && (d = _, l = p);
    }
    return l;
  }, An = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      ce.visible = false;
      return;
    }
    ce.geometry.setFromPoints([new w(t[0], t[1], t[2]), new w(t[3], t[4], t[5])]), ce.visible = true;
  }, Tn = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const a = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!a || a.length < 2) {
      ce.visible = false;
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
    ce.geometry.setFromPoints(s), ce.visible = true;
  }, nn = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const a = o.filter((p, v) => v !== n), t = /* @__PURE__ */ new Set();
    for (const p of a) for (const v of p) t.add(v);
    const r = e.points.rawVal, s = /* @__PURE__ */ new Map(), l = [];
    for (let p = 0; p < r.length; p++) t.has(p) && (s.set(p, l.length), l.push(r[p]));
    const d = a.map((p) => p.map((v) => s.get(v)).filter((v) => v !== void 0));
    e.points.val = l, e.polylines.val = d, e.areas && (e.areas.val = e.areas.rawVal.filter((p) => p !== n).map((p) => p > n ? p - 1 : p)), ce.visible = false, Ne = -1, Ge = -1;
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
    for (const f of l) for (const z of f) d.add(z);
    const p = e.points.rawVal, v = /* @__PURE__ */ new Map(), _ = [];
    for (let f = 0; f < p.length; f++) d.has(f) && (v.set(f, _.length), _.push(p[f]));
    const c = l.map((f) => f.map((z) => v.get(z)).filter((z) => z !== void 0));
    if (e.points.val = _, e.polylines.val = c, e.areas) {
      const f = s.length - 1;
      e.areas.val = e.areas.rawVal.map((z) => z > n ? z + f : z);
    }
    ce.visible = false, Ne = -1, Ge = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  ue.geometry.setAttribute("position", new gt(e.points.rawVal.flat(), 3)), ue.geometry.computeBoundingSphere(), ue.frustumCulled = false, _e.frustumCulled = false, x.add(_e), K.position.set(0, 0, 0), K.rotateX(Math.PI / 2), K.geometry.rotateX(Math.PI / 2), K.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, a) => {
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
    for (let v = 0; v < l; v++) {
      const _ = 2 * Math.PI * v / l, c = t * Math.cos(_), f = t * Math.sin(_);
      let z;
      s === "xy" ? z = [n + c, o + f, a] : s === "xz" ? z = [n + c, o, a + f] : z = [n, o + c, a + f], p.push(z);
    }
    if (e.points.val = [...e.points.rawVal, ...p], e.polylines) {
      const v = [...p.map((c, f) => d + f), d], _ = e.polylines.rawVal;
      ((_a = _[_.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [..._, v, []] : e.polylines.val = [..._.slice(0, -1), v, []];
    }
  }, window.__hekatanDrawArc = (n, o, a, t = window.__hekatanArcSegs ?? 12) => {
    const r = Math.max(4, Math.round(t)), s = new w(...n), l = new w(...o), d = new w(...a), p = new w().subVectors(l, s), v = new w().subVectors(d, s), _ = new w().crossVectors(p, v).normalize(), c = new w().addVectors(s, l).multiplyScalar(0.5), f = new w().addVectors(l, d).multiplyScalar(0.5), z = new w().crossVectors(p, _).normalize(), D = new w().crossVectors(new w().subVectors(d, l), _).normalize(), Y = new w().subVectors(f, c), G = z.x * D.y - z.y * D.x;
    let E;
    if (Math.abs(G) > 1e-9) {
      const Xe = (Y.x * D.y - Y.y * D.x) / G;
      E = new w().addVectors(c, z.clone().multiplyScalar(Xe));
    } else E = c.clone();
    const ee = s.distanceTo(E), ne = new w().subVectors(s, E), fe = new w().subVectors(d, E), $e = Math.acos(Math.max(-1, Math.min(1, ne.dot(fe) / (ee * ee)))), ye = e.points.rawVal.length, xe = [], mt = _.clone();
    for (let Xe = 0; Xe <= r; Xe++) {
      const Fe = Xe / r, Ue = $e * Fe, at = new Wn().setFromAxisAngle(mt, Ue), wt = ne.clone().applyQuaternion(at).add(E);
      xe.push([wt.x, wt.y, wt.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...xe], e.polylines) {
      const Xe = xe.map((Ue, at) => ye + at), Fe = e.polylines.rawVal;
      e.polylines.val = [...Fe.slice(0, -1), Xe, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, a = 1, t = 6, r = 6) => {
    const s = Math.min(n[0], o[0]), l = Math.max(n[0], o[0]), d = Math.min(n[1], o[1]), p = Math.max(n[1], o[1]), v = (n[2] + o[2]) / 2, _ = l - s, c = p - d, f = Math.min(a, _ / 2 - 0.01, c / 2 - 0.01);
    if (f <= 0) return;
    const z = e.points.rawVal.length, D = [], Y = [], G = (E, ee) => {
      D.push([E, ee, v]), Y.push(z + D.length - 1);
    };
    for (let E = 0; E <= r; E++) G(s + f + (_ - 2 * f) * E / r, d);
    for (let E = 1; E <= t; E++) {
      const ee = -Math.PI / 2 + Math.PI / 2 * E / t;
      G(l - f + f * Math.cos(ee), d + f + f * Math.sin(ee));
    }
    for (let E = 1; E <= r; E++) G(l, d + f + (c - 2 * f) * E / r);
    for (let E = 1; E <= t; E++) {
      const ee = 0 + Math.PI / 2 * E / t;
      G(l - f + f * Math.cos(ee), p - f + f * Math.sin(ee));
    }
    for (let E = 1; E <= r; E++) G(l - f - (_ - 2 * f) * E / r, p);
    for (let E = 1; E <= t; E++) {
      const ee = Math.PI / 2 + Math.PI / 2 * E / t;
      G(s + f + f * Math.cos(ee), p - f + f * Math.sin(ee));
    }
    for (let E = 1; E <= r; E++) G(s, p - f - (c - 2 * f) * E / r);
    for (let E = 1; E <= t; E++) {
      const ee = Math.PI + Math.PI / 2 * E / t;
      G(s + f + f * Math.cos(ee), d + f + f * Math.sin(ee));
    }
    if (Y.push(z), e.points.val = [...e.points.rawVal, ...D], e.polylines) {
      const E = e.polylines.rawVal;
      e.polylines.val = [...E.slice(0, -1), Y, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const a = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], d = o[1], p = o[2];
    let v;
    if (Math.abs(s - p) < 1e-6 ? v = [[t, r, s], [l, r, s], [l, d, s], [t, d, s]] : Math.abs(r - d) < 1e-6 ? v = [[t, r, s], [l, r, s], [l, r, p], [t, r, p]] : v = [[t, r, s], [t, d, s], [t, d, p], [t, r, p]], e.points.val = [...e.points.rawVal, ...v], e.polylines) {
      const _ = [a, a + 1, a + 2, a + 3, a], c = e.polylines.rawVal;
      e.polylines.val = [...c.slice(0, -1), _, []];
    }
  }, window.__hekatanDrawRectArea = (n, o) => {
    var _a;
    const a = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], d = o[1], p = o[2];
    let v;
    if (g && e.gridTarget) {
      const _ = e.gridTarget.rawVal, c = new xn(..._.rotation), f = new w(1, 0, 0).applyEuler(c), z = new w(0, 1, 0).applyEuler(c), D = new w(..._.position), Y = new w(t, r, s), G = new w(l, d, p), E = Y.clone().sub(D).dot(f), ee = Y.clone().sub(D).dot(z), ne = G.clone().sub(D).dot(f), fe = G.clone().sub(D).dot(z), $e = (ye, xe) => D.clone().addScaledVector(f, ye).addScaledVector(z, xe).toArray();
      v = [$e(E, ee), $e(ne, ee), $e(ne, fe), $e(E, fe)];
    } else Math.abs(s - p) < 1e-6 ? v = [[t, r, s], [l, r, s], [l, d, s], [t, d, s]] : Math.abs(r - d) < 1e-6 ? v = [[t, r, s], [l, r, s], [l, r, p], [t, r, p]] : v = [[t, r, s], [t, d, s], [t, d, p], [t, r, p]];
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...v], e.polylines) {
      const _ = e.polylines.rawVal, c = _.length - 1, f = [a, a + 1, a + 2, a + 3, a];
      e.polylines.val = [..._.slice(0, -1), f, []], e.areas && (e.areas.val = [...e.areas.rawVal, c]);
    }
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    M();
  }, window.__hekatanMeshPolyArea = (n, o) => {
    var _a;
    const a = n.length;
    if (a < 3) return 0;
    let t = 0, r = 0, s = 0;
    for (let be = 0; be < a; be++) {
      const Re = n[be], je = n[(be + 1) % a];
      t += (Re[1] - je[1]) * (Re[2] + je[2]), r += (Re[2] - je[2]) * (Re[0] + je[0]), s += (Re[0] - je[0]) * (Re[1] + je[1]);
    }
    const l = Math.hypot(t, r, s) || 1;
    t /= l, r /= l, s /= l;
    let d = n[1][0] - n[0][0], p = n[1][1] - n[0][1], v = n[1][2] - n[0][2];
    const _ = Math.hypot(d, p, v) || 1;
    d /= _, p /= _, v /= _;
    let c = r * v - s * p, f = s * d - t * v, z = t * p - r * d;
    const D = Math.hypot(c, f, z) || 1;
    c /= D, f /= D, z /= D;
    const Y = n[0], G = (be) => [(be[0] - Y[0]) * d + (be[1] - Y[1]) * p + (be[2] - Y[2]) * v, (be[0] - Y[0]) * c + (be[1] - Y[1]) * f + (be[2] - Y[2]) * z], E = (be, Re) => [Y[0] + be * d + Re * c, Y[1] + be * p + Re * f, Y[2] + be * v + Re * z], ee = n.map(G);
    let ne = 1 / 0, fe = -1 / 0, $e = 1 / 0, ye = -1 / 0;
    for (const [be, Re] of ee) be < ne && (ne = be), be > fe && (fe = be), Re < $e && ($e = Re), Re > ye && (ye = Re);
    const xe = fe - ne, mt = ye - $e;
    if (xe < 1e-6 || mt < 1e-6) return 0;
    let Xe = o && o > 0 ? o : 0.5;
    for (; xe / Xe * (mt / Xe) > 2500; ) Xe *= 2;
    Xe = Math.min(Xe, Math.min(xe, mt));
    const Fe = (be, Re) => {
      let je = false;
      for (let Tt = 0, Kt = ee.length - 1; Tt < ee.length; Kt = Tt++) {
        const [an, mn] = ee[Tt], [ln, wn] = ee[Kt];
        mn > Re != wn > Re && be < (ln - an) * (Re - mn) / (wn - mn) + an && (je = !je);
      }
      return je;
    }, Ue = Math.max(1, Math.round(xe / Xe)), at = Math.max(1, Math.round(mt / Xe)), wt = xe / Ue, kt = mt / at, Ut = /* @__PURE__ */ new Map(), $t = [], yt = e.points.rawVal.length, At = (be, Re) => {
      const je = be + "," + Re, Tt = Ut.get(je);
      if (Tt !== void 0) return Tt;
      const Kt = yt + $t.length;
      return $t.push(E(ne + be * wt, $e + Re * kt)), Ut.set(je, Kt), Kt;
    }, bt = [];
    for (let be = 0; be < Ue; be++) for (let Re = 0; Re < at; Re++) {
      if (!Fe(ne + (be + 0.5) * wt, $e + (Re + 0.5) * kt)) continue;
      const je = At(be, Re), Tt = At(be + 1, Re), Kt = At(be + 1, Re + 1), an = At(be, Re + 1);
      bt.push([je, Tt, Kt, an]);
    }
    if (!bt.length) return 0;
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...$t], e.polylines && e.areas) {
      let be = e.polylines.rawVal.slice();
      be.length && be[be.length - 1].length === 0 && (be = be.slice(0, -1));
      const Re = [];
      for (const je of bt) Re.push(be.length), be.push([je[0], je[1], je[2], je[3], je[0]]);
      be.push([]), e.polylines.val = be, e.areas.val = [...e.areas.rawVal, ...Re];
    }
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    return M(), bt.length;
  };
  const cn = () => {
    if (we.length < 3) return we = [], oe.visible = false, M(), 0;
    const n = window.__hekatanMeshPolyArea(we.slice());
    return we = [], oe.visible = false, M(), n;
  };
  window.__hekatanFinalizePolyArea = cn, window.__hekatanSetInclinedPlaneFrom3 = (n, o, a) => {
    var _a;
    const t = new w(n[0], n[1], n[2]), r = new w(o[0], o[1], o[2]), s = new w(a[0], a[1], a[2]), l = new w().subVectors(r, t).cross(new w().subVectors(s, t));
    if (l.lengthSq() < 1e-9) return false;
    l.normalize();
    const d = new Wn().setFromUnitVectors(new w(0, 0, 1), l), p = new xn().setFromQuaternion(d);
    e.gridTarget && (e.gridTarget.val = { position: [t.x, t.y, t.z], rotation: [p.x, p.y, p.z] }), g = true;
    const v = new w().addVectors(t, r).add(s).multiplyScalar(1 / 3), _ = Math.max(t.distanceTo(r), t.distanceTo(s), r.distanceTo(s)) * 2.2 + 4, c = _ / 2;
    Pe.geometry.dispose(), Pe.geometry = new Gt(_, _), de.geometry.dispose(), de.geometry = new yo(new Gt(_, _)), Ke(c, 1), le.position.copy(v), le.quaternion.copy(d), le.scale.set(1, 1, 1), le.visible = true;
    try {
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
    } catch {
    }
    return M(), true;
  }, window.__hekatanResetPlaneXY = () => {
    e.gridTarget && (e.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, 0] }), g = false, le.visible = false, M();
  };
  const Pt = new Oe();
  Pt.visible = false, x.add(Pt), window.__hekatanShowAxes = (n, o, a = 12, t = 2) => {
    var _a, _b;
    for (; Pt.children.length; ) {
      const _ = Pt.children.pop();
      (_a = _.geometry) == null ? void 0 : _a.dispose(), (_b = _.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const r = Math.min(...o) - t, s = Math.max(...o) + t, l = Math.min(...n) - t, d = Math.max(...n) + t, p = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", v = (_, c, f, z, D) => {
      const Y = document.createElement("canvas");
      Y.width = 64, Y.height = 32;
      const G = Y.getContext("2d");
      G.fillStyle = D, G.font = "bold 22px sans-serif", G.textAlign = "center", G.fillText(_, 32, 26);
      const E = new xo(Y), ee = new go({ map: E, transparent: true }), ne = new vo(ee);
      return ne.position.set(c, f, z), ne.scale.set(1.2, 0.6, 1), ne;
    };
    n.forEach((_, c) => {
      const f = c < p.length ? p[c] : `X${c}`, z = new he().setFromPoints([new w(_, r, 0), new w(_, s, 0), new w(_, r, 0), new w(_, r, a)]), D = new yn({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), Y = new Xt(z, D);
      Y.computeLineDistances(), Pt.add(Y), Pt.add(v(f, _, r - 0.5, 0, "#60a5fa")), Pt.add(v(f, _, s + 0.5, 0, "#60a5fa"));
    }), o.forEach((_, c) => {
      const f = `${c + 1}`, z = new he().setFromPoints([new w(l, _, 0), new w(d, _, 0), new w(l, _, 0), new w(l, _, a)]), D = new yn({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), Y = new Xt(z, D);
      Y.computeLineDistances(), Pt.add(Y), Pt.add(v(f, l - 0.5, _, 0, "#fb7185")), Pt.add(v(f, d + 0.5, _, 0, "#fb7185"));
    }), Pt.visible = true, M();
  }, window.__hekatanHideAxes = () => {
    Pt.visible = false, M();
  };
  const Bt = new Oe();
  Bt.visible = false, x.add(Bt);
  let Yt = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, a = 0, t = 0) => {
    var _a, _b;
    for (; Bt.children.length; ) {
      const s = Bt.children.pop();
      (_a = s.geometry) == null ? void 0 : _a.dispose(), (_b = s.material) == null ? void 0 : _b.dispose();
    }
    Yt.forEach((s) => {
      x.remove(s), s.geometry.dispose(), s.material.dispose();
    }), Yt = [];
    const r = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((s, l) => {
      const d = r[l % r.length], p = o / 2, v = [new w(a - p, t - p, s), new w(a + p, t - p, s), new w(a + p, t + p, s), new w(a - p, t + p, s), new w(a - p, t - p, s)], _ = new he().setFromPoints(v), c = new lt({ color: d, transparent: true, opacity: 0.55 });
      Bt.add(new _t(_, c));
      const f = document.createElement("canvas");
      f.width = 128, f.height = 32;
      const z = f.getContext("2d");
      z.fillStyle = `#${d.toString(16).padStart(6, "0")}`, z.font = "bold 18px sans-serif", z.fillText(`Z = ${s} m`, 4, 22);
      const D = new xo(f), Y = new go({ map: D, transparent: true }), G = new vo(Y);
      G.position.set(a - p - 1.5, t - p - 1.5, s), G.scale.set(2.5, 0.6, 1), Bt.add(G);
      const E = new Gt(1e4, 1e4), ee = new et({ visible: false, side: Ft }), ne = new He(E, ee);
      ne.position.set(0, 0, s), ne.frustumCulled = false, ne.userData = { refPlaneZ: s }, x.add(ne), Yt.push(ne);
    }), Bt.visible = true, M();
  }, window.__hekatanHideRefPlanes = () => {
    Bt.visible = false, Yt.forEach((n) => {
      n.visible = false;
    }), M();
  };
  const Qt = new Oe();
  Qt.frustumCulled = false, x.add(Qt);
  const $n = () => {
    var _a, _b, _c, _d;
    for (; Qt.children.length; ) {
      const a = Qt.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (a.length !== 6) continue;
      const t = new he().setFromPoints([new w(a[0], a[1], a[2]), new w(a[3], a[4], a[5])]), r = new yn({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), s = new _t(t, r);
      s.computeLineDistances(), Qt.add(s);
    }
  };
  L.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, $n(), M());
  });
  const Nt = new Oe();
  Nt.frustumCulled = false, x.add(Nt);
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
    (n == null ? void 0 : n.val) !== void 0 && (n.val, dn(), M());
  }), u.addEventListener("change", () => {
    Nt.children.forEach((n) => {
      n.scale.setScalar(pt(n.position));
    });
  }), window.__hekatanRenderAuxPoints = dn;
  const ht = new Oe(), Bo = new He(new rn(0.01, 12, 12), new et({ color: 16724804, transparent: true, opacity: 0.95 })), Xo = new He(new rn(0.015, 12, 12), new et({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  ht.add(Bo, Xo);
  const on = 0.08, In = (n, o, a) => {
    const t = new he().setFromPoints([new w(...n), new w(...o)]);
    return new _t(t, new lt({ color: a, transparent: true, opacity: 0.7 }));
  };
  ht.add(In([-on, 0, 0], [on, 0, 0], 16711680)), ht.add(In([0, -on, 0], [0, on, 0], 65280)), ht.add(In([0, 0, -on], [0, 0, on], 35071)), ht.visible = false, ht.frustumCulled = false, x.add(ht);
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
    ht.position.set(n, o, a), ht.visible = true, Ln(), M();
  }, window.__hekatanHideSnap = () => {
    ht.visible = false, M();
  }, m.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q;
    const o = b(n);
    if (!o) return;
    k.setFromCamera(F, o);
    const a = O();
    if (a.length) {
      const t = a[0].point, r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, r);
      if (s) lo(s.type, s.x, s.y, s.z), ht.position.set(s.x, s.y, s.z), ht.visible = true, t.set(s.x, s.y, s.z);
      else {
        Xn();
        const _ = window.__hekatanSnapEnabled !== false, c = window.__hekatanSnap2D ?? 0.5;
        _ && c > 0 && (t.x = Math.round(t.x / c) * c, t.y = Math.round(t.y / c) * c, t.z = Math.round(t.z / c) * c), ht.position.copy(t), ht.visible = true;
      }
      Ln();
      const l = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (l === "select" || !l) {
        const _ = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = Ht(t.x, t.y, t.z, _), f = qt(t.x, t.y, t.z, _), z = Jt(t.x, t.y, t.z, _);
        if (c >= 0) {
          const E = e.points.rawVal[c];
          Je.position.set(E[0], E[1], E[2]), Je.visible = true, Dt(), Le.visible = false, ot = { kind: "pt", a: c };
        } else if (f) {
          const E = e.points.rawVal, ee = e.polylines.rawVal[f.polyIdx], ne = E[ee[f.segIdx]], fe = E[ee[f.segIdx + 1]];
          Le.geometry.setFromPoints([new w(ne[0], ne[1], ne[2]), new w(fe[0], fe[1], fe[2])]), Le.visible = true, Je.visible = false, ot = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(f.polyIdx)) ?? false ? { kind: "poly", a: f.polyIdx } : { kind: "seg", a: f.polyIdx, b: f.segIdx };
        } else if (z >= 0) {
          const ee = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[z];
          ee && (Le.geometry.setFromPoints([new w(ee[0], ee[1], ee[2]), new w(ee[3], ee[4], ee[5])]), Le.visible = true, Je.visible = false, ot = { kind: "aux", a: z });
        } else Le.visible = false, Je.visible = false, ot = null;
        H.style.left = n.clientX + "px", H.style.top = n.clientY + "px", H.style.display = "block";
        let D = t;
        if ((ot == null ? void 0 : ot.kind) === "pt") {
          const E = e.points.rawVal[ot.a];
          E && (D = new w(E[0], E[1], E[2]));
        }
        const Y = `X=${D.x.toFixed(2)} Y=${D.y.toFixed(2)} Z=${D.z.toFixed(2)}`;
        if (ot) {
          const E = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          H.textContent = `${Y}  \xB7  \u{1F5B1} Click \u2192 ${E[ot.kind]}`;
        } else H.textContent = Y;
        const G = document.getElementById("hk-coord-fixed");
        G && (G.textContent = Y), ae.visible = false, We.visible = false, M();
        return;
      }
      if (l === "delete") {
        const _ = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = qt(t.x, t.y, t.z, _), f = Jt(t.x, t.y, t.z, _);
        let z = false;
        if (f >= 0) if (!c) z = true;
        else {
          const E = window.__hekatanDrawingAuxLines, ne = ((E == null ? void 0 : E.rawVal) ?? (E == null ? void 0 : E.val) ?? E ?? [])[f];
          tn(t.x, t.y, t.z, ne[0], ne[1], ne[2], ne[3], ne[4], ne[5]) < c.dist && (z = true);
        }
        z ? (dt = f, Ne = -1, Ge = -1, An(f)) : c ? (Ne = c.polyIdx, Ge = c.segIdx, dt = -1, Tn(c.polyIdx, c.segIdx)) : (Ne = -1, Ge = -1, dt = -1, ce.visible = false), ae.visible = false, We.visible = false, Z(), H.style.left = n.clientX + "px", H.style.top = n.clientY + "px", H.style.display = "block";
        const D = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let Y = "";
        z ? Y = `\u{1F5D1} l\xEDnea aux #${dt + 1}` : c ? Y = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(c.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${c.polyIdx + 1}` : `\u{1F5D1} seg ${c.segIdx + 1} / poly #${c.polyIdx + 1}` : Y = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", H.textContent = `${D}  \xB7  ${Y}`;
        const G = document.getElementById("hk-coord-fixed");
        G && (G.textContent = D), M();
        return;
      } else ce.visible = false, Ne = -1, dt = -1;
      H.style.left = n.clientX + "px", H.style.top = n.clientY + "px", H.style.display = "block";
      const d = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], p = d[d.length - 1] ?? [], v = e.points.rawVal ?? [];
      if (p.length > 0 && v[p[p.length - 1]]) {
        const _ = p[p.length - 1], c = v[_];
        let f = tt;
        if (st = null, !f && window.__hekatanAxisSnap !== false) {
          const Fe = m.getBoundingClientRect(), Ue = n.clientX, at = n.clientY, wt = ((_k = settings.gridSize) == null ? void 0 : _k.rawVal) ?? 10, kt = new w(c[0], c[1], c[2]), Ut = [["x", new w(1, 0, 0)], ["y", new w(0, 1, 0)], ["z", new w(0, 0, 1)]], $t = (At) => {
            const bt = At.clone().project(o);
            return { x: (bt.x * 0.5 + 0.5) * Fe.width + Fe.left, y: (-bt.y * 0.5 + 0.5) * Fe.height + Fe.top };
          };
          let yt = null;
          for (const [At, bt] of Ut) {
            const be = $t(kt.clone().addScaledVector(bt, -wt)), Re = $t(kt.clone().addScaledVector(bt, wt)), je = Re.x - be.x, Tt = Re.y - be.y, Kt = Ue - be.x, an = at - be.y, mn = je * je + Tt * Tt || 1;
            let ln = (Kt * je + an * Tt) / mn;
            ln = Math.max(0, Math.min(1, ln));
            const wn = Math.hypot(Ue - (be.x + ln * je), at - (be.y + ln * Tt));
            if (yt === null || wn < yt.dpx) {
              const Zn = k.ray, uo = kt.clone().sub(Zn.origin), Un = bt.dot(Zn.direction), fo = bt.dot(uo), Wo = Zn.direction.dot(uo), ho = 1 - Un * Un, Go = Math.abs(ho) < 1e-6 ? -fo : (Un * Wo - fo) / ho;
              yt = { axis: At, dpx: wn, pt: kt.clone().addScaledVector(bt, Go) };
            }
          }
          yt && yt.dpx <= 12 && (t.copy(yt.pt), f = yt.axis, st = yt.pt.clone());
        }
        const z = !!window.__hekatanOrthoMode;
        if (!f && z) {
          const Fe = Math.abs(t.x - c[0]), Ue = Math.abs(t.y - c[1]), at = Math.abs(t.z - c[2]), wt = (_l = a[0]) == null ? void 0 : _l.object;
          let kt = null;
          wt === Te ? kt = "xy" : wt === Ie ? kt = "xz" : wt === De && (kt = "yz"), kt === "xy" ? f = Fe >= Ue ? "x" : "y" : kt === "xz" ? f = Fe >= at ? "x" : "z" : kt === "yz" ? f = Ue >= at ? "y" : "z" : f = Fe >= Ue && Fe >= at ? "x" : Ue >= at ? "y" : "z";
        }
        const D = window.__hekatanPolarTrack !== false;
        if (!f && D) {
          const Fe = t.x - c[0], Ue = t.y - c[1], at = t.z - c[2], wt = Math.hypot(Fe, Ue, at);
          if (wt > 1e-3) {
            const Ut = Math.tan(6 * Math.PI / 180) * wt, $t = Math.hypot(Ue, at), yt = Math.hypot(Fe, at), At = Math.hypot(Fe, Ue), bt = [["x", $t], ["y", yt], ["z", At]];
            bt.sort((be, Re) => be[1] - Re[1]), bt[0][1] <= Ut && (f = bt[0][0]);
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
        const Y = Math.hypot(t.x - c[0], t.y - c[1], t.z - c[2]), G = Math.atan2(t.y - c[1], t.x - c[0]) * 180 / Math.PI, E = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        H.textContent = `${E} | \u0394L=${Y.toFixed(2)}m ${G.toFixed(0)}\xB0`;
        const ee = document.getElementById("hk-coord-fixed");
        ee && (ee.textContent = E), ae.geometry.setFromPoints([new w(c[0], c[1], c[2]), new w(t.x, t.y, t.z)]), (_n2 = ae.computeLineDistances) == null ? void 0 : _n2.call(ae), ae.visible = true, $(c[0], c[1], c[2], t.x, t.y, t.z);
        const ne = window.__hekatanOrthoExt ?? 8, fe = window.__hekatanShowOrthoPlanes !== false;
        ze.visible = fe, fe || rt(null), fe && (Ze(se, c, "xy", ne), Ze(ke, c, "xz", ne), Ze(ge, c, "yz", ne), qe(Te, c, "xy", ne), qe(Ie, c, "xz", ne), qe(De, c, "yz", ne));
        const $e = fe ? k.intersectObjects([Te, Ie, De], false) : [];
        let ye = null;
        if ($e.length > 0) {
          const Fe = $e[0].object;
          Fe === Te ? ye = "xy" : Fe === Ie ? ye = "xz" : Fe === De && (ye = "yz");
        }
        rt(ye), ye && (Ce.style.left = n.clientX + "px", Ce.style.top = n.clientY + "px"), P.geometry.setFromPoints([new w(c[0] - ne, c[1], c[2]), new w(c[0] + ne, c[1], c[2])]), (_o2 = P.computeLineDistances) == null ? void 0 : _o2.call(P), W.geometry.setFromPoints([new w(c[0], c[1] - ne, c[2]), new w(c[0], c[1] + ne, c[2])]), (_p = W.computeLineDistances) == null ? void 0 : _p.call(W), B.geometry.setFromPoints([new w(c[0], c[1], c[2] - ne), new w(c[0], c[1], c[2] + ne)]), (_q = B.computeLineDistances) == null ? void 0 : _q.call(B), We.visible = true;
        const xe = P.material, mt = W.material, Xe = B.material;
        f === "x" ? (xe.opacity = 0.95, mt.opacity = 0.1, Xe.opacity = 0.1) : f === "y" ? (xe.opacity = 0.1, mt.opacity = 0.95, Xe.opacity = 0.1) : f === "z" ? (xe.opacity = 0.1, mt.opacity = 0.1, Xe.opacity = 0.95) : (xe.opacity = 0.5, mt.opacity = 0.5, Xe.opacity = 0.5);
      } else {
        const _ = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        H.textContent = _;
        const c = document.getElementById("hk-coord-fixed");
        if (c && (c.textContent = _), ae.visible = false, We.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(l)) {
          if (X = null, R = null, I.style.left = n.clientX + 20 + "px", I.style.top = n.clientY - 28 + "px", I.style.display = "block", !V) {
            I.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const z = document.activeElement;
            !(z && (z.tagName === "INPUT" || z.tagName === "TEXTAREA") && z !== I) && document.activeElement !== I && I.focus({ preventScroll: true });
            try {
              I.select();
            } catch {
            }
          }
        } else Z();
      }
      M();
    } else Xn(), H.style.display = "none", ht.visible = false, ae.visible = false, We.visible = false, Z(), M();
  }), L.derive(() => {
    if (!e.gridTarget) return;
    Vs(i, { position: new w(...e.gridTarget.val.position), quaternion: new Wn().setFromEuler(new xn(...e.gridTarget.val.rotation)) }, M), K.position.set(...e.gridTarget.val.position), K.quaternion.setFromEuler(new xn(...e.gridTarget.val.rotation)), K.updateMatrixWorld();
    const n = new w(0, 0, 1).applyEuler(new xn(...e.gridTarget.val.rotation));
    g = !(Math.abs(n.x) > 0.999 || Math.abs(n.y) > 0.999 || Math.abs(n.z) > 0.999);
  }), L.derive(() => {
    ue.geometry.setAttribute("position", new gt(e.points.val.flat(), 3)), ue.geometry.computeBoundingSphere();
  }), L.derive(() => {
    const n = 0.05 * S * 0.5 * y.val;
    k.params.Points.threshold = 0.4 * n;
  }), L.derive(() => {
    var _a;
    const n = e.points.val ?? [], a = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const s of a) {
      const [l, d, p] = n[s];
      t.push(l, d, p);
    }
    const r = new he();
    r.setAttribute("position", new gt(t, 3)), ve.geometry.dispose(), ve.geometry = r;
  });
  let Rn = false, Ot = 0;
  m.addEventListener("pointerdown", () => {
    Rn = true;
  }), m.addEventListener("pointerup", () => {
    Rn = false;
  }), m.addEventListener("pointermove", () => {
    Rn && Ot++;
  });
  const St = document.createElement("div");
  St.id = "hk-window-select", St.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(St);
  let Et = null, pn = false, Vt = null;
  const Bn = (n, o, a, t, r) => {
    r ? (St.style.borderColor = "#34d399", St.style.borderStyle = "dashed", St.style.background = "rgba(52, 211, 153, 0.10)") : (St.style.borderColor = "#22d3ee", St.style.borderStyle = "solid", St.style.background = "rgba(34, 211, 238, 0.10)"), St.style.left = Math.min(n, a) + "px", St.style.top = Math.min(o, t) + "px", St.style.width = Math.abs(a - n) + "px", St.style.height = Math.abs(t - o) + "px", St.style.display = "block";
  }, so = (n, o, a, t, r) => {
    var _a, _b, _c, _d;
    const s = Math.min(n, a), l = Math.max(n, a), d = Math.min(o, t), p = Math.max(o, t), v = a < n, _ = m.getBoundingClientRect(), c = h();
    c.updateMatrixWorld();
    const f = (ye) => {
      const xe = new w(ye[0], ye[1], ye[2]);
      return xe.project(c), { x: _.left + (xe.x * 0.5 + 0.5) * _.width, y: _.top + (-xe.y * 0.5 + 0.5) * _.height };
    }, z = (ye) => ye.x >= s && ye.x <= l && ye.y >= d && ye.y <= p, D = (ye, xe) => !(ye.x < s && xe.x < s || ye.x > l && xe.x > l || ye.y < d && xe.y < d || ye.y > p && xe.y > p);
    r || me.clear();
    let Y = 0;
    const G = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let ye = 0; ye < G.length; ye++) {
      const xe = G[ye];
      xe && z(f(xe)) && (me.add(`pt:${ye}`), Y++);
    }
    const E = (ye, xe) => v ? z(ye) || z(xe) || D(ye, xe) : z(ye) && z(xe), ee = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], ne = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let ye = 0; ye < ee.length; ye++) {
      const xe = ee[ye];
      if (ne.includes(ye)) {
        let Xe;
        if (!v) Xe = xe.every((Fe) => {
          const Ue = G[Fe];
          return !!Ue && z(f(Ue));
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
        Xe && (me.add(`poly:${ye}`), Y++);
      } else for (let Xe = 0; Xe < xe.length - 1; Xe++) {
        const Fe = G[xe[Xe]], Ue = G[xe[Xe + 1]];
        !Fe || !Ue || E(f(Fe), f(Ue)) && (me.add(`seg:${ye}:${Xe}`), Y++);
      }
    }
    const $e = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let ye = 0; ye < $e.length; ye++) {
      const xe = $e[ye];
      if (!xe || xe.length !== 6) continue;
      const mt = f([xe[0], xe[1], xe[2]]), Xe = f([xe[3], xe[4], xe[5]]);
      E(mt, Xe) && (me.add(`aux:${ye}`), Y++);
    }
    Rt(), re(`${v ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${Y} item(s) ${r ? "agregados a" : "\u2192"} selecci\xF3n (total ${me.size})`), St.style.display = "none";
  }, vn = () => {
    Vt && (Vt = null, St.style.display = "none", re("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = vn, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && Vt && vn();
  });
  const ao = () => {
    var _a, _b, _c, _d;
    if (me.size === 0) return false;
    const n = [...me], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], a = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? [], l = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Set();
    for (const D of n) {
      const [Y, ...G] = D.split(":");
      if (Y === "pt") l.add(+G[0]);
      else if (Y === "poly") d.add(+G[0]);
      else if (Y === "seg") {
        const E = +G[0], ee = +G[1];
        p.has(E) || p.set(E, /* @__PURE__ */ new Set()), p.get(E).add(ee);
      } else Y === "aux" && v.add(+G[0]);
    }
    let _ = 0, c = [], f = [];
    const z = /* @__PURE__ */ new Map();
    for (let D = 0; D < a.length; D++) {
      if (d.has(D)) {
        _++;
        continue;
      }
      z.set(D, c.length);
      const Y = p.get(D);
      if (Y && Y.size > 0) {
        let G = [];
        for (let E = 0; E < a[D].length; E++) G.push(a[D][E]), E < a[D].length - 1 && Y.has(E) && (G.length >= 2 && c.push(G), G = [], _++);
        (G.length >= 2 || G.length === 1) && c.push(G);
      } else c.push([...a[D]]);
    }
    if (l.size > 0) {
      const D = [], Y = /* @__PURE__ */ new Map();
      for (let E = 0; E < o.length; E++) {
        if (l.has(E)) {
          _++;
          continue;
        }
        Y.set(E, D.length), D.push([...o[E]]);
      }
      const G = [];
      for (const E of c) {
        let ee = [];
        for (const ne of E) {
          const fe = Y.get(ne);
          fe === void 0 ? (ee.length >= 2 && G.push(ee), ee = []) : ee.push(fe);
        }
        ee.length >= 2 && G.push(ee);
      }
      c = G, e.points.val = D;
    }
    for (const D of t) {
      const Y = z.get(D);
      Y !== void 0 && Y < c.length && f.push(Y);
    }
    if (e.polylines && (e.polylines.val = c), e.areas && (e.areas.val = f), v.size > 0 && r) {
      const D = s.filter((Y, G) => !v.has(G));
      "val" in r ? r.val = D : window.__hekatanDrawingAuxLines = D, _ += v.size;
    }
    me.clear(), Rt();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return re(`\u{1F5D1} ${_} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = ao, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement, a = o && (o.id === "hk3-cmd-input" || o.id === "hk-dyn-input") && o.value === "";
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && !a || me.size !== 0 && (n.preventDefault(), ao());
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
      const d = l.clientX - a, p = l.clientY - t, v = Math.max(0, Math.min(window.innerWidth - 80, r + d)), _ = Math.max(0, Math.min(window.innerHeight - 40, s + p));
      Ct.style.left = `${v}px`, Ct.style.top = `${_}px`;
    }), window.addEventListener("mouseup", () => {
      if (o) {
        o = false;
        try {
          localStorage.setItem(io, JSON.stringify({ left: parseFloat(Ct.style.left), top: parseFloat(Ct.style.top) }));
        } catch {
        }
      }
    });
  }, U = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 }, vt = { dx: 0, dy: 0, dz: 3, copias: 1 };
  let Qe = null;
  const ut = (n, o, a, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: a, value: t } }));
  }, No = () => {
    if (Qe && (Qe.dispose(), Qe = null), me.size === 0) {
      Ct.style.display = "none";
      return;
    }
    const n = [...me], o = n.filter((c) => c.startsWith("pt:")), a = n.filter((c) => c.startsWith("seg:")), t = n.filter((c) => c.startsWith("poly:")), r = n.filter((c) => c.startsWith("aux:")), s = o.length > 0, l = a.length > 0, d = t.length > 0, p = !s && !l && !d, v = [];
    o.length && v.push(`\u{1F535} ${o.length} nodo(s)`), a.length && v.push(`\u{1F4CF} ${a.length} segmento(s)`), t.length && v.push(`\u25AD ${t.length} \xE1rea(s)`), r.length && v.push(`\u250A ${r.length} aux`);
    const _ = `\u{1F3AF} ${me.size} item(s) \u2014 ${v.join(", ")}`;
    Qe = new Eo({ container: Ct, title: _ });
    {
      const c = Qe.addFolder({ title: "\u270F\uFE0F Editar \u2014 Replicar / Mover", expanded: false });
      c.addBinding(vt, "dx", { label: "\u0394x (m)", step: 0.1 }), c.addBinding(vt, "dy", { label: "\u0394y (m)", step: 0.1 }), c.addBinding(vt, "dz", { label: "\u0394z (m)", step: 0.1 }), c.addBinding(vt, "copias", { label: "Copias", min: 1, max: 50, step: 1 }), c.addButton({ title: "\u29C9 Replicar selecci\xF3n" }).on("click", () => {
        var _a;
        const z = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, vt.dx, vt.dy, vt.dz, vt.copias);
        re(z ? `\u29C9 Replicado \xD7${z} (\u0394 ${vt.dx},${vt.dy},${vt.dz} m)` : "\u26A0 Nada que replicar \u2014 seleccion\xE1 nodos/frames/\xE1reas");
      }), c.addButton({ title: "\u2192 Mover selecci\xF3n (1 copia, sin duplicar geometr\xEDa base)" }).on("click", () => {
        var _a;
        const z = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, vt.dx, vt.dy, vt.dz, 1);
        re(z ? `\u2192 Copia desplazada \u0394 ${vt.dx},${vt.dy},${vt.dz} m` : "\u26A0 Nada seleccionado");
      });
      const f = c.addFolder({ title: "\u{1F9F2} Snap", expanded: false });
      f.addButton({ title: "Snap a grilla ON/OFF (F9)" }).on("click", () => {
        var _a;
        return (_a = window.__hekatanToggleSnap) == null ? void 0 : _a.call(window);
      }), f.addButton({ title: "OSNAP (endpoints/medios) ON/OFF" }).on("click", () => {
        window.__hekatanOsnapOn = !(window.__hekatanOsnapOn ?? true), re(`\u{1F9F2} OSNAP ${window.__hekatanOsnapOn ? "ON" : "OFF"}`);
      });
    }
    if (s) {
      const c = Qe.addFolder({ title: `\u{1F4CC} Restraints (DOFs) \u2014 ${o.length} nodo(s)` });
      c.addBinding(U, "Ux"), c.addBinding(U, "Uy"), c.addBinding(U, "Uz"), c.addBinding(U, "Rx"), c.addBinding(U, "Ry"), c.addBinding(U, "Rz");
      const f = Qe.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      f.addBinding(U, "Kx", { label: "Kx", min: 0, step: 100 }), f.addBinding(U, "Ky", { label: "Ky", min: 0, step: 100 }), f.addBinding(U, "Kz", { label: "Kz", min: 0, step: 100 }), f.addBinding(U, "Krx", { label: "Krx", min: 0, step: 1e3 }), f.addBinding(U, "Kry", { label: "Kry", min: 0, step: 1e3 }), f.addBinding(U, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const z = Qe.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      z.addBinding(U, "Fx", { step: 0.1 }), z.addBinding(U, "Fy", { step: 0.1 }), z.addBinding(U, "Fz", { step: 0.1 }), z.addBinding(U, "Mx", { step: 0.1 }), z.addBinding(U, "My", { step: 0.1 }), z.addBinding(U, "Mz", { step: 0.1 }), Qe.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(U, "mass", { label: "m", min: 0, step: 1 }), Qe.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(U, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), Qe.addButton({ title: `\u2713 Aplicar a ${o.length} nodo(s) seleccionado(s)` }).on("click", () => {
        let G = 0;
        const E = [U.Ux, U.Uy, U.Uz, U.Rx, U.Ry, U.Rz];
        E.some((fe) => fe) && (ut("nodes", o, "supports", E), G++);
        const ee = [U.Fx, U.Fy, U.Fz, U.Mx, U.My, U.Mz];
        ee.some((fe) => fe !== 0) && (ut("nodes", o, "loads", ee), G++);
        const ne = [U.Kx, U.Ky, U.Kz, U.Krx, U.Kry, U.Krz];
        if (ne.some((fe) => fe !== 0) && (ut("nodes", o, "springs", ne), G++), U.mass !== 0 && (ut("nodes", o, "mass", U.mass), G++), U.diaphragm !== "Ninguno" && (ut("nodes", o, "diaphragm", U.diaphragm), G++), G === 0) {
          re("\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para apoyo, o un valor de carga/resorte/masa, y volv\xE9 a aplicar.");
          let fe = document.getElementById("hk-prop-toast");
          fe || (fe = document.createElement("div"), fe.id = "hk-prop-toast", fe.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);z-index:99999;padding:9px 20px;border-radius:8px;font:600 14px system-ui;color:#fff;pointer-events:none;transition:opacity .25s;box-shadow:0 4px 16px rgba(0,0,0,.4)", document.body.appendChild(fe)), fe.textContent = "\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para empotrado/articulado, despu\xE9s Aplicar", fe.style.background = "rgba(217,119,6,0.97)", fe.style.opacity = "1", clearTimeout(window.__hekatanPropToastT), window.__hekatanPropToastT = setTimeout(() => {
            fe && (fe.style.opacity = "0");
          }, 3200);
        } else re(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    }
    if (l) {
      const c = Qe.addFolder({ title: `\u{1F4CF} Secci\xF3n frame \u2014 ${a.length} seg(s)` });
      c.addBinding(U, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), c.addBinding(U, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const f = Qe.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      f.addBinding(U, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), f.addBinding(U, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), f.addBinding(U, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), f.addBinding(U, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), Qe.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(U, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), Qe.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(U, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const Y = Qe.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      Y.addBinding(U, "relMxI", { label: "Mx I" }), Y.addBinding(U, "relMyI", { label: "My I" }), Y.addBinding(U, "relMzI", { label: "Mz I" });
      const G = Qe.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      G.addBinding(U, "relMxJ", { label: "Mx J" }), G.addBinding(U, "relMyJ", { label: "My J" }), G.addBinding(U, "relMzJ", { label: "Mz J" }), Qe.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(U, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const ee = Qe.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      ee.addBinding(U, "LKx", { label: "LKx", min: 0, step: 100 }), ee.addBinding(U, "LKy", { label: "LKy", min: 0, step: 100 }), ee.addBinding(U, "LKz", { label: "LKz", min: 0, step: 100 });
      const ne = Qe.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      ne.addBinding(U, "qx", { step: 0.1 }), ne.addBinding(U, "qy", { step: 0.1 }), ne.addBinding(U, "qz", { step: 0.1 }), Qe.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(U, "massPerM", { label: "m/L", min: 0, step: 1 }), Qe.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        ut("segs", a, "section", U.section), ut("segs", a, "material", U.material_frame);
        const $e = { A: U.A_mod, Iz: U.Iz_mod, Iy: U.Iy_mod, J: U.J_mod };
        ($e.A !== 1 || $e.Iz !== 1 || $e.Iy !== 1 || $e.J !== 1) && ut("segs", a, "modifiers", $e), U.insertionPoint !== "10 \u2014 Centroid" && ut("segs", a, "insertionPoint", U.insertionPoint), U.beta !== 0 && ut("segs", a, "beta", U.beta);
        const ye = [U.relMxI, U.relMyI, U.relMzI], xe = [U.relMxJ, U.relMyJ, U.relMzJ];
        (ye.some((Fe) => Fe) || xe.some((Fe) => Fe)) && ut("segs", a, "releases", { i: ye, j: xe }), U.hinges !== "None" && ut("segs", a, "hinges", U.hinges);
        const mt = [U.LKx, U.LKy, U.LKz];
        mt.some((Fe) => Fe !== 0) && ut("segs", a, "lineSprings", mt);
        const Xe = [U.qx, U.qy, U.qz];
        Xe.some((Fe) => Fe !== 0) && ut("segs", a, "distLoad", Xe), U.massPerM !== 0 && ut("segs", a, "massPerM", U.massPerM), re(`\u2713 Propiedades aplicadas a ${a.length} segmento(s)`);
      });
    }
    if (d) {
      const c = Qe.addFolder({ title: `\u25AD Shell / \xC1rea \u2014 ${t.length}` });
      c.addBinding(U, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), c.addBinding(U, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), c.addBinding(U, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), Qe.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(U, "surfLoad", { label: "q", step: 0.1 }), Qe.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        ut("areas", t, "shellType", U.shellType), ut("areas", t, "thickness", U.thickness), ut("areas", t, "material", U.material_shell), U.surfLoad !== 0 && ut("areas", t, "surfLoad", U.surfLoad), re(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    }
    if (p) {
      const c = Qe.addFolder({ title: "\u2139 Selecci\xF3n" }), f = { msg: "Seleccion\xE1 nodos, frames o \xE1reas para editar" };
      c.addBinding(f, "msg", { readonly: true, label: "" });
    }
    Qe.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      me.clear(), Rt();
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
        if (Vt ? vn() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), me.size > 0 && (me.clear(), Rt()), e.polylines) {
          const s = e.polylines.rawVal;
          (s[s.length - 1] ?? []).length > 0 && (e.polylines.val = [...s, []]);
        }
        const t = window.__hekatanCadState, r = (_b = (_a = t == null ? void 0 : t.get) == null ? void 0 : _a.call(t)) == null ? void 0 : _b.tool;
        r && r !== "select" && r !== "none" ? ((_c = t == null ? void 0 : t.setTool) == null ? void 0 : _c.call(t, "select"), re(`\u238B Cancelado \u2014 tool '${r}' cerrado, volv\xE9s a Seleccionar`)) : re("\u238B Cancelado (click derecho)");
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
      Bn(Vt.x, Vt.y, n.clientX, n.clientY, s);
      return;
    }
    if (!Et) return;
    const o = n.clientX - Et.x, a = n.clientY - Et.y, t = Math.hypot(o, a);
    if (!pn && t < 8) return;
    pn = true;
    const r = n.clientX < Et.x;
    Bn(Et.x, Et.y, n.clientX, n.clientY, r);
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
  Zt.visible = false, Zt.frustumCulled = false, x.add(Zt);
  const Zo = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, lo = (n, o, a, t) => {
    var _a, _b, _c, _d;
    for (; Zt.children.length; ) {
      const d = Zt.children.pop();
      (_b = (_a = d.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = d.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const r = Zo[n] ?? 16777215, s = 0.05, l = new he().setFromPoints([new w(o - s, a - s, t), new w(o + s, a - s, t), new w(o + s, a - s, t), new w(o + s, a + s, t), new w(o + s, a + s, t), new w(o - s, a + s, t), new w(o - s, a + s, t), new w(o - s, a - s, t)]);
    Zt.add(new Xt(l, new lt({ color: r, linewidth: 2 }))), Zt.position.set(0, 0, 0), Zt.visible = true;
  }, Xn = () => {
    Zt.visible = false;
  }, Uo = (n, o, a, t) => {
    var _a;
    const r = window.__hekatanOsnap, s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let d = null;
    const p = (c, f, z, D) => {
      const Y = Math.hypot(f - n, z - o, D - a);
      Y > t || (!d || Y < d.d) && (d = { type: c, x: f, y: z, z: D, d: Y });
    };
    (r.node || r.end) && s.forEach((c) => {
      r.node && p("node", c[0], c[1], c[2]);
    });
    for (const c of l) if (!(c.length < 2)) for (let f = 0; f < c.length - 1; f++) {
      const z = s[c[f]], D = s[c[f + 1]];
      if (!(!z || !D) && (r.end && (p("end", z[0], z[1], z[2]), p("end", D[0], D[1], D[2])), r.mid && p("mid", (z[0] + D[0]) / 2, (z[1] + D[1]) / 2, (z[2] + D[2]) / 2), r.nea || r.per)) {
        const Y = D[0] - z[0], G = D[1] - z[1], E = D[2] - z[2], ee = Y * Y + G * G + E * E;
        if (ee < 1e-12) continue;
        const ne = Math.max(0, Math.min(1, ((n - z[0]) * Y + (o - z[1]) * G + (a - z[2]) * E) / ee)), fe = z[0] + ne * Y, $e = z[1] + ne * G, ye = z[2] + ne * E;
        r.nea && p("nea", fe, $e, ye), r.per && p("per", fe, $e, ye);
      }
    }
    const v = window.__hekatanDrawingAuxLines, _ = (v == null ? void 0 : v.rawVal) ?? (v == null ? void 0 : v.val) ?? v ?? [];
    for (const c of _) {
      if (c.length !== 6) continue;
      const f = [c[0], c[1], c[2]], z = [c[3], c[4], c[5]];
      if (r.end && (p("end", f[0], f[1], f[2]), p("end", z[0], z[1], z[2])), r.mid && p("mid", (f[0] + z[0]) / 2, (f[1] + z[1]) / 2, (f[2] + z[2]) / 2), r.nea || r.per) {
        const D = z[0] - f[0], Y = z[1] - f[1], G = z[2] - f[2], E = D * D + Y * Y + G * G;
        if (E < 1e-12) continue;
        const ee = Math.max(0, Math.min(1, ((n - f[0]) * D + (o - f[1]) * Y + (a - f[2]) * G) / E)), ne = f[0] + ee * D, fe = f[1] + ee * Y, $e = f[2] + ee * G;
        r.nea && p("nea", ne, fe, $e), r.per && p("per", ne, fe, $e);
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
  }, re = (n) => {
    const o = n + Ko();
    fn.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    re(o);
  }, window.__hekatanCadResetPending = () => {
    Ae = [], we = [], oe.visible = false, Dn(), M(), re("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
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
      re("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), Ae = [], ae.visible = false, We.visible = false, Z(), re(`\u21B6 Undo \u2014 ${hn.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    M();
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
    Ae = [], Dn(), tt = null, Lt(), ae.visible = false, We.visible = false, Z(), re("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), M();
  };
  window.__hekatanFinalizeDraw = co;
  const po = () => {
    var _a, _b, _c;
    Ae = [], we = [], oe.visible = false;
    let n = false;
    me.size && (me.clear(), Rt(), n = true), co();
    try {
      const o = window.__hekatanCadState, a = (_b = (_a = o == null ? void 0 : o.get) == null ? void 0 : _a.call(o)) == null ? void 0 : _b.tool;
      a && a !== "select" && ((_c = o == null ? void 0 : o.setTool) == null ? void 0 : _c.call(o, "select"));
    } catch {
    }
    re(n ? "\u238B Selecci\xF3n cancelada" : "\u238B Sin herramienta \u2014 arrastr\xE1 para seleccionar"), M();
  };
  window.__hekatanEscapeCancel = po, window.__hekatanReplicateSelection = (n, o, a, t) => {
    var _a, _b, _c, _d;
    t = Math.max(1, Math.round(t || 1));
    const r = [...me], s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], d = new Set(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? []), p = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), _ = [];
    if (r.forEach((Y) => {
      if (Y.startsWith("pt:")) p.add(+Y.slice(3));
      else if (Y.startsWith("poly:")) {
        const G = +Y.slice(5);
        v.add(G), (l[G] || []).forEach((E) => p.add(E));
      } else if (Y.startsWith("seg:")) {
        const G = Y.split(":"), E = +G[1], ee = +G[2], ne = l[E] || [], fe = ne[ee], $e = ne[ee + 1];
        fe != null && $e != null && (_.push([fe, $e]), p.add(fe), p.add($e));
      }
    }), !p.size) return 0;
    Wt();
    const c = [...s];
    let f = l.slice();
    f.length && f[f.length - 1].length === 0 && (f = f.slice(0, -1));
    const z = [...((_c = e.areas) == null ? void 0 : _c.rawVal) ?? []], D = [...p];
    for (let Y = 1; Y <= t; Y++) {
      const G = n * Y, E = o * Y, ee = a * Y, ne = /* @__PURE__ */ new Map();
      D.forEach((fe) => {
        ne.set(fe, c.length), c.push([s[fe][0] + G, s[fe][1] + E, s[fe][2] + ee]);
      }), v.forEach((fe) => {
        const $e = l[fe].map((xe) => ne.has(xe) ? ne.get(xe) : xe), ye = f.length;
        f.push($e), d.has(fe) && z.push(ye);
      }), _.forEach(([fe, $e]) => {
        f.push([ne.get(fe), ne.get($e)]);
      });
    }
    f.push([]), e.points.val = c, e.polylines && (e.polylines.val = f), e.areas && (e.areas.val = z);
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return M(), t;
  }, m.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z;
    if (Ot > 5) {
      Ot = 0;
      return;
    }
    Ot = 0;
    const o = b(n);
    if (!o) return;
    k.setFromCamera(F, o);
    const a = O();
    if (!a.length) return;
    {
      const s = o.position.distanceTo(u.target) || 1, l = a[0].distance ?? o.position.distanceTo(a[0].point), d = a[0].point;
      if (!isFinite(d.x) || !isFinite(d.y) || !isFinite(d.z) || l > Math.max(s * 12, 300)) {
        re("\u26A0 Click rasante descartado \u2014 cay\xF3 demasiado lejos. Acerc\xE1 la vista o clicke\xE1 sobre la grilla.");
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
          const v = !!window.__hekatanOrthoMode;
          let _ = tt;
          if (!_ && v) {
            const c = Math.abs(t.x - p[0]), f = Math.abs(t.y - p[1]), z = Math.abs(t.z - p[2]);
            _ = c >= f && c >= z ? "x" : f >= z ? "y" : "z";
          }
          _ === "x" ? t = new w(t.x, p[1], p[2]) : _ === "y" ? t = new w(p[0], t.y, p[2]) : _ === "z" && (t = new w(p[0], p[1], t.z));
        }
      }
    }
    if (st) t = st.clone(), re(`\u{1F4D0} Eje \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.2, l = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, s);
      if (l) t = new w(l.x, l.y, l.z), re(`\u{1F3AF} Snap [${l.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
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
        n.ctrlKey || n.metaKey || n.shiftKey || me.clear(), me.has(p) ? me.delete(p) : me.add(p), Rt(), re(`\u2713 Seleccionados ${me.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const s = n.ctrlKey || n.metaKey || n.shiftKey, l = n.clientX, d = n.clientY;
        Vt ? (so(Vt.x, Vt.y, l, d, s), Vt = null) : s || (Vt = { x: l, y: d }, re("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), Bn(l, d, l + 1, d + 1, false));
      }
      return;
    }
    if (r === "axis") {
      const s = window.__hekatanAxisDraw;
      if (!s) return;
      if (!s.pendingStart) {
        s.pendingStart = [t.x, t.y, t.z], re(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const l = s.mode === "number", d = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, s.pendingStart, [t.x, t.y, t.z], l);
      re(`\u2713 Eje "${d}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (r === "delete") {
      if (dt >= 0) {
        const s = window.__hekatanDrawingAuxLines, l = (s == null ? void 0 : s.rawVal) ?? (s == null ? void 0 : s.val) ?? s ?? [], d = dt;
        if (d >= 0 && d < l.length) {
          Wt();
          const p = l.slice(0, d).concat(l.slice(d + 1));
          s && typeof s == "object" && "val" in s ? s.val = p : window.__hekatanDrawingAuxLines = p, re(`\u{1F5D1} L\xEDnea auxiliar #${d + 1} borrada`), dt = -1, ce.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (Ne >= 0) {
        const s = Ne, l = Ge;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(s)) ?? false ? (nn(s), re(`\u{1F5D1} \xC1rea #${s + 1} (shell Q4) borrada`)) : l >= 0 ? (En(s, l), re(`\u{1F5D1} Segmento ${l + 1} de polil\xEDnea #${s + 1} borrado`)) : (nn(s), re(`\u{1F5D1} Polil\xEDnea #${s + 1} borrada`));
      } else re("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (r === "circle") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        re("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [s, l] = Ae, d = Math.hypot(l[0] - s[0], l[1] - s[1], l[2] - s[2]);
      Math.abs(l[0] - s[0]);
      const p = Math.abs(l[1] - s[1]), _ = Math.abs(l[2] - s[2]) < 1e-3 ? "xy" : p < 1e-3 ? "xz" : "yz", c = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, s[0], s[1], s[2], d, c, _), re(`\u2713 C\xEDrculo dibujado en ${_.toUpperCase()} \u2014 r=${d.toFixed(2)}m, ${c} segmentos`), Ae = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (r === "arc") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        re("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (Ae.length === 2) {
        re("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [s, l, d] = Ae, p = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, s, l, d, p), re(`\u2713 Arco dibujado \u2014 ${p} segmentos`), Ae = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (r === "rect") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        re("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ae;
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, s, l), re(`\u2713 Rect\xE1ngulo dibujado \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Ae = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (r === "rectarea") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        re("\u25AD \xC1rea rectangular \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ae;
      (_p = window.__hekatanDrawRectArea) == null ? void 0 : _p.call(window, s, l), re(`\u2713 \xC1rea rectangular (shell Q4) creada \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Ae = [];
      return;
    }
    if (r === "polyarea") {
      we.push([t.x, t.y, t.z]), oe.geometry.setFromPoints(we.map((s) => new w(s[0], s[1], s[2]))), oe.visible = we.length >= 1, re(`\u25B0 \xC1rea libre \u2014 ${we.length} punto(s). Click m\xE1s v\xE9rtices, o Enter / click-derecho para cerrar y mallar (m\xEDn. 3).`), M();
      return;
    }
    if (r === "plane3") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length < 3) {
        re(`\u25E3 Plano inclinado \u2014 punto ${Ae.length}/3. Tip: cambi\xE1 la Cota Z (o enganch\xE1 un nodo) entre clicks para darle inclinaci\xF3n.`);
        return;
      }
      const [s, l, d] = Ae, p = (_q = window.__hekatanSetInclinedPlaneFrom3) == null ? void 0 : _q.call(window, s, l, d);
      re(p ? "\u2713 Plano de trabajo INCLINADO activo. Dibuj\xE1 el \xE1rea (\u25AD/\u2B21) sobre \xE9l. (XY para resetear)" : "\u26A0 Los 3 puntos son colineales \u2014 no definen un plano. Reintent\xE1."), Ae = [];
      return;
    }
    if (r === "col") {
      Wt();
      const s = t.z, l = Mt && Mt > 0 ? Mt : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, s], [t.x, t.y, s + l]];
      const d = e.polylines.rawVal, p = e.points.rawVal.length;
      e.polylines.val = [...d.slice(0, -1), ...d[d.length - 1].length > 0 ? [d[d.length - 1]] : [], [p - 2, p - 1], []], Mt = 0, re(`\u258C Columna creada \u2014 h=${l.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (r === "wall") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        re("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [s, l] = Ae, d = Mt && Mt > 0 ? Mt : 3;
      Wt();
      const p = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [s[0], s[1], s[2]], [l[0], l[1], l[2]], [l[0], l[1], l[2] + d], [s[0], s[1], s[2] + d]];
      const v = e.polylines.rawVal;
      if (v.length - 1, e.polylines.val = [...v.slice(0, -1), ...v[v.length - 1].length > 0 ? [v[v.length - 1]] : [], [p, p + 1, p + 2, p + 3, p], []], e.areas) {
        const _ = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, _];
      }
      re(`\u25A5 Pared Q4 creada \u2014 h=${d.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Ae = [], Mt = 0;
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
      e.polylines.val = [...d.slice(0, -1), ...d[d.length - 1].length > 0 ? [d[d.length - 1]] : [], [p - 2, p - 1], []], Mt = 0, re(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${s.toFixed(2)}m`);
      try {
        (_t2 = window.__hekatanRebuild) == null ? void 0 : _t2.call(window);
      } catch {
      }
      return;
    }
    if (r === "extl") {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.5, l = qt(t.x, t.y, t.z, s);
      if (!l) {
        re("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const d = e.polylines.rawVal, p = e.points.rawVal, v = d[l.polyIdx], _ = p[v[l.segIdx]], c = p[v[l.segIdx + 1]];
      if (!_ || !c) {
        re("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const f = Mt && Mt > 0 ? Mt : 3;
      Wt();
      const z = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [_[0], _[1], _[2]], [c[0], c[1], c[2]], [c[0], c[1], c[2] + f], [_[0], _[1], _[2] + f]];
      const D = e.polylines.rawVal;
      if (e.polylines.val = [...D.slice(0, -1), ...D[D.length - 1].length > 0 ? [D[D.length - 1]] : [], [z, z + 1, z + 2, z + 3, z], []], e.areas) {
        const Y = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, Y];
      }
      Mt = 0, re(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${f.toFixed(2)}m`);
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
      re(`\u2726 Punto auxiliar agregado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      return;
    }
    if (r === "aux") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        re("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [s, l] = Ae, d = window.__hekatanDrawingAuxLines;
      if (d) {
        const f = d.rawVal ?? d.val ?? [];
        d.val = [...f, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      const p = l[0] - s[0], v = l[1] - s[1], _ = l[2] - s[2], c = Math.sqrt(p * p + v * v + _ * _);
      re(`\u2713 L\xEDnea auxiliar creada \u2014 L=${c.toFixed(2)}m (cyan, no FEM)`), Ae = [];
      return;
    }
    if (r === "extend") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        re("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [s, l] = Ae, d = window.__hekatanDrawingAuxLines;
      if (d) {
        const p = d.rawVal ?? d.val ?? [];
        d.val = [...p, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      re("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Ae = [];
      return;
    }
    if (r === "chaflan") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        re("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ae, d = window.__hekatanChaflanR ?? 1, p = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_v = window.__hekatanDrawSlabChaflan) == null ? void 0 : _v.call(window, s, l, d, p, 6);
      const v = Math.abs(l[0] - s[0]).toFixed(1), _ = Math.abs(l[1] - s[1]).toFixed(1);
      re(`\u2713 Losa con chaflanes dibujada \u2014 ${v}\xD7${_}m, r=${d}m, ${p} seg/chafl\xE1n`), Ae = [];
      try {
        (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
      } catch {
      }
      return;
    }
    if (V = false, Wt(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const s = e.polylines.rawVal, l = s.length - 1, d = s[l] ?? [];
      if (r === "line" && d.length >= 2) {
        re(`\uFF0F L\xEDnea \u2014 ${d.length - 1} tramo${d.length === 2 ? "" : "s"}. Segu\xED marcando puntos; Esc o clic derecho para terminar.`);
        try {
          (_x = window.__hekatanRebuild) == null ? void 0 : _x.call(window);
        } catch {
        }
        return;
      }
      if (r === "area" && d.length === 4) {
        e.polylines.val = [...s.slice(0, -1), [...d, d[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, l]), re("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_y = window.__hekatanRebuild) == null ? void 0 : _y.call(window);
        } catch {
        }
        return;
      }
    }
    if (r === "node") re(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (r === "line") re("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (r === "polyline") re("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (r === "area") {
      const s = ((_z = e.polylines) == null ? void 0 : _z.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      re(`\u25A6 \xC1rea \u2014 click ${s.length}/4. Marc\xE1 ${4 - s.length} v\xE9rtice${4 - s.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), m.addEventListener("contextmenu", (n) => {
    var _a, _b, _c;
    if (((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "polyarea" && we.length >= 3) {
      n.preventDefault();
      const a = cn();
      re(`\u2713 \xC1rea libre mallada \u2014 ${a} shells Q4 creados.`);
      return;
    }
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), m.addEventListener("pointermove", (n) => {
    var _a, _b;
    const o = b(n);
    if (!o) return;
    k.setFromCamera(F, o);
    const a = O();
    if (_e.geometry.deleteAttribute("position"), a.length) {
      let t = a[0].point.clone();
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z));
      {
        const l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], d = l[l.length - 1] ?? [], p = e.points.rawVal ?? [];
        if (d.length > 0) {
          const v = p[d[d.length - 1]];
          if (v) {
            const _ = !!window.__hekatanOrthoMode;
            let c = tt;
            if (!c && _) {
              const f = Math.abs(t.x - v[0]), z = Math.abs(t.y - v[1]), D = Math.abs(t.z - v[2]);
              c = f >= z && f >= D ? "x" : z >= D ? "y" : "z";
            }
            c === "x" ? t.set(t.x, v[1], v[2]) : c === "y" ? t.set(v[0], t.y, v[2]) : c === "z" && t.set(v[0], v[1], t.z);
          }
        }
      }
      const r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, r);
      if (s) t.set(s.x, s.y, s.z);
      else {
        const l = window.__hekatanSnapEnabled !== false, d = window.__hekatanSnap2D ?? 0.5;
        l && d > 0 && (t.x = Math.round(t.x / d) * d, t.y = Math.round(t.y / d) * d, t.z = Math.round(t.z / d) * d);
      }
      _e.geometry.setAttribute("position", new gt(t.toArray(), 3));
    }
    M();
  }), m.addEventListener("pointermove", (n) => {
    var _a;
    const o = b(n);
    if (!o) return;
    k.setFromCamera(F, o);
    let a = false;
    const t = k.intersectObject(ue), r = O();
    if (t.length && r.length) {
      const s = new w(...e.points.rawVal[t[0].index]), l = new w(...r[0].point), d = s.sub(l), p = (_a = r[0].face) == null ? void 0 : _a.normal;
      p.transformDirection(K.matrixWorld), Math.abs(d.dot(p)) < 1e-4 && (a = true);
    }
    _e.visible = !a;
  });
  let Yn = false, Nn;
  m.addEventListener("pointermove", (n) => {
    var _a;
    if (!Ot) return;
    const o = b(n);
    if (!o) return;
    k.setFromCamera(F, o);
    let a = false;
    const t = k.intersectObject(ue), r = O();
    if (t.length && r.length) {
      const l = new w(...e.points.rawVal[t[0].index]), d = new w(...r[0].point), p = l.sub(d), v = (_a = r[0].face) == null ? void 0 : _a.normal;
      v.transformDirection(K.matrixWorld), Math.abs(p.dot(v)) < 1e-4 && (a = true);
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
    const o = b(n);
    if (!o) return;
    k.setFromCamera(F, o);
    let a = false;
    const t = k.intersectObject(ue), r = O();
    if (t.length && r.length) {
      const d = new w(...e.points.rawVal[t[0].index]), p = new w(...r[0].point), v = d.sub(p), _ = (_a = r[0].face) == null ? void 0 : _a.normal;
      _.transformDirection(K.matrixWorld), Math.abs(v.dot(_)) < 1e-4 && (a = true);
    }
    if (!a) return;
    const s = [...e.points.rawVal];
    if (s.splice(t[0].index, 1), e.points.val = s, !e.polylines) return;
    const l = e.polylines.rawVal.map((d) => d.filter((p) => p !== t[0].index)).map((d) => d.map((p) => p > t[0].index ? p - 1 : p)).filter((d) => d.length);
    l.push([]), e.polylines.val = l;
  });
}
function Vs(e, i, x) {
  const S = Math.round(14.999999999999998), y = { position: e.position.clone(), quaternion: e.quaternion.clone() }, m = setInterval(k, 1e3 / 30);
  let M = 0;
  function k() {
    M++;
    const F = M / S;
    e.position.lerpVectors(y.position, i.position, F), e.quaternion.slerpQuaternions(y.quaternion, i.quaternion, F), x && x(), M == S && clearInterval(m);
  }
}
function As(e, i, x, h) {
  const u = us(x, e.elements, h);
  return L.derive(() => {
    u.visible = i.shellResults.val != "none";
  }), u;
}
const Ts = 6, Jn = 10, Es = 0.012;
function $s(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function Is(e, i, x, h) {
  if (!x && !h) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && x) {
    const S = x[e];
    if (S && S.has(i)) return S.get(i);
  }
  return null;
}
function Ls(e, i, x, h) {
  const u = new Oe(), S = new $o();
  S.setColorMap("rainbow");
  const y = new It(), m = L.state([]);
  return L.derive(() => {
    var _a, _b, _c;
    i.deformedShape.val;
    const M = x.val, k = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], F = $s(i.frameResults.val);
    if (u.children.forEach((A) => {
      A.geometry && A.geometry.dispose(), A.material && A.material.dispose();
    }), u.clear(), !F || k.length === 0 || M.length === 0) {
      m.val = [];
      return;
    }
    const b = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, K = (_c = e.deformOutputs) == null ? void 0 : _c.val, pe = [], ie = [];
    for (let A = 0; A < k.length; A++) {
      if (k[A].length !== 2) continue;
      const te = Is(F, A, b, K);
      te && (pe.push(te[0], te[1]), ie.push({ idx: A, vals: te }));
    }
    if (pe.length === 0) {
      m.val = [];
      return;
    }
    const Q = Math.min(...pe), g = Math.max(...pe);
    S.setMin(Q), S.setMax(g), m.val = pe;
    const O = [1 / 0, 1 / 0, 1 / 0], ue = [-1 / 0, -1 / 0, -1 / 0];
    for (const A of M) for (let N = 0; N < 3; N++) O[N] = Math.min(O[N], A[N]), ue[N] = Math.max(ue[N], A[N]);
    const ve = Math.max(ue[0] - O[0], ue[1] - O[1], ue[2] - O[2], 1) * Es, I = [], X = [], R = [];
    let V = 0;
    for (const { idx: A, vals: N } of ie) {
      const te = k[A], j = M[te[0]], H = M[te[1]];
      if (!j || !H) continue;
      const T = new w(H[0] - j[0], H[1] - j[1], H[2] - j[2]), ae = T.length();
      if (ae < 1e-10) continue;
      T.normalize();
      const oe = Math.abs(T.y) < 0.99 ? new w(0, 1, 0) : new w(1, 0, 0), we = new w().crossVectors(T, oe).normalize(), le = new w().crossVectors(T, we).normalize(), Pe = Jn + 1, de = Ts;
      for (let Se = 0; Se < Pe; Se++) {
        const Ke = Se / Jn, We = j[0] + T.x * ae * Ke, q = j[1] + T.y * ae * Ke, P = j[2] + T.z * ae * Ke, W = N[0] + (N[1] - N[0]) * Ke, B = S.getColor(W) ?? new It(0, 0, 0);
        y.copy(B).convertSRGBToLinear();
        for (let J = 0; J < de; J++) {
          const se = J / de * Math.PI * 2, ke = Math.cos(se), ge = Math.sin(se);
          I.push(We + (we.x * ke + le.x * ge) * ve, q + (we.y * ke + le.y * ge) * ve, P + (we.z * ke + le.z * ge) * ve), X.push(y.r, y.g, y.b);
        }
      }
      for (let Se = 0; Se < Jn; Se++) for (let Ke = 0; Ke < de; Ke++) {
        const We = (Ke + 1) % de, q = V + Se * de + Ke, P = V + Se * de + We, W = V + (Se + 1) * de + Ke, B = V + (Se + 1) * de + We;
        R.push(q, P, B), R.push(q, B, W);
      }
      V += Pe * de;
    }
    if (I.length === 0) return;
    const C = new he();
    C.setAttribute("position", new gt(I, 3)), C.setAttribute("color", new gt(X, 3)), C.setIndex(R), C.computeVertexNormals();
    const $ = new et({ vertexColors: true, side: Ft }), Z = new He(C, $);
    Z.frustumCulled = false, u.add(Z);
  }), u.__colorMapValues = m, u;
}
function Rs() {
  const e = window;
  return { forceUnit: e.__hekatanForceUnit ?? localStorage.getItem("hk_forceUnit") ?? "tonf", dispUnit: e.__hekatanDispUnit ?? localStorage.getItem("hk_dispUnit") ?? "mm", stressUnit: e.__hekatanStressUnit ?? localStorage.getItem("hk_stressUnit") ?? "tonf/m\xB2" };
}
const Bs = { kN: 1, tonf: 1 / 9.80665, kip: 1 / 4.4482216 }, Xs = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Ds = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76, "kip/ft\xB2": 1 / 47.88026 };
function ct(e, i = 4) {
  return e == null || !isFinite(e) ? "\u2014" : e === 0 ? "0" : Math.abs(e) < 1e-3 || Math.abs(e) > 1e5 ? e.toExponential(i) : e.toFixed(i);
}
const Ys = 16755200, Po = 56831, Ns = 56831, Zs = 56831, kn = 65382;
function Us(e) {
  const i = new Oe();
  i.name = "__hekatan_hover", i.renderOrder = 99;
  const x = new rn(1, 16, 16), h = new et({ color: Ys, transparent: true, opacity: 0.85, depthTest: false }), u = new He(x, h);
  u.visible = false, u.renderOrder = 100, i.add(u);
  const S = new he(), y = new lt({ color: Po, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), m = new Xt(S, y);
  m.visible = false, m.renderOrder = 100, i.add(m);
  const M = new et({ color: Po, transparent: true, opacity: 0.7, depthTest: false }), k = new He(new Mo(1, 1, 1, 12), M);
  k.visible = false, k.renderOrder = 100, i.add(k);
  const F = new he(), b = new et({ color: Ns, transparent: true, opacity: 0.45, side: Ft, depthTest: false }), K = new He(F, b);
  K.visible = false, K.renderOrder = 100, i.add(K);
  const pe = new he(), ie = new lt({ color: Zs, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), Q = new Xt(pe, ie);
  Q.visible = false, Q.renderOrder = 100, i.add(Q);
  const g = new et({ color: kn, transparent: true, opacity: 0.95, depthTest: false }), O = new et({ color: kn, transparent: true, opacity: 0.85, depthTest: false }), ue = new Mo(1, 1, 1, 12), _e = new et({ color: kn, transparent: true, opacity: 0.55, side: Ft, depthTest: false }), ve = new lt({ color: kn, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), I = [];
  window.__hekatanModelSelection = I;
  const X = new Oe();
  X.renderOrder = 101, i.add(X);
  const R = document.createElement("div");
  Object.assign(R.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), R.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(R);
  }, 0);
  function V(q) {
    const P = e.derivedNodes.rawVal;
    return !P || q < 0 || q >= P.length ? null : new w(P[q][0], P[q][1], P[q][2]);
  }
  function C(q, P) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2;
    const W = e.getActiveCamera();
    if (!W || !e.mesh) return null;
    const B = e.rendererElm.getBoundingClientRect(), J = q - B.left, se = P - B.top, ke = e.derivedNodes.rawVal, ge = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!ke || !ge) return null;
    const ze = /* @__PURE__ */ new Map(), Ee = (Be) => {
      if (ze.has(Be)) return ze.get(Be);
      const Ve = V(Be);
      if (!Ve) return ze.set(Be, null), null;
      const Me = Ve.clone().project(W), Ye = (Me.x * 0.5 + 0.5) * B.width, ce = (-Me.y * 0.5 + 0.5) * B.height, Ne = { x: Ye, y: ce, z: Me.z };
      return ze.set(Be, Ne), Ne;
    }, Te = /* @__PURE__ */ new Set();
    for (const Be of ge) if (Be) for (const Ve of Be) Te.add(Ve);
    const Ie = 8;
    let De = -1, qe = Ie;
    for (let Be = 0; Be < ke.length; Be++) {
      if (!Te.has(Be)) continue;
      const Ve = Ee(Be);
      if (!Ve || Ve.z < -1 || Ve.z > 1) continue;
      const Me = Ve.x - J, Ye = Ve.y - se, ce = Math.sqrt(Me * Me + Ye * Ye);
      ce < qe && (qe = ce, De = Be);
    }
    const Ce = Rs(), rt = Xs[Ce.dispUnit] ?? 1e3, Ze = Bs[Ce.forceUnit] ?? 1;
    if (De >= 0) {
      const Be = ke[De];
      let Ve = `Nodo ${De}
(${Be[0].toFixed(3)}, ${Be[1].toFixed(3)}, ${Be[2].toFixed(3)})`;
      const Me = (_c = (_b = e.mesh) == null ? void 0 : _b.deformOutputs) == null ? void 0 : _c.rawVal;
      if (Me == null ? void 0 : Me.deformations) {
        const Ye = Me.deformations.get(De);
        if (Ye && (Ve += `
\u2500\u2500\u2500\u2500 \u0394 desplaz. \u2500\u2500\u2500\u2500`, Ve += `
Ux = ${ct(Ye[0] * rt, 3)} ${Ce.dispUnit}`, Ve += `
Uy = ${ct(Ye[1] * rt, 3)} ${Ce.dispUnit}`, Ve += `
Uz = ${ct(Ye[2] * rt, 3)} ${Ce.dispUnit}`, (Math.abs(Ye[3]) > 1e-9 || Math.abs(Ye[4]) > 1e-9 || Math.abs(Ye[5]) > 1e-9) && (Ve += `
Rx = ${ct(Ye[3] * 1e3, 3)} mrad`, Ve += `
Ry = ${ct(Ye[4] * 1e3, 3)} mrad`, Ve += `
Rz = ${ct(Ye[5] * 1e3, 3)} mrad`)), Me.reactions) {
          const ce = Me.reactions.get(De);
          ce && (Math.abs(ce[0]) > 1e-9 || Math.abs(ce[1]) > 1e-9 || Math.abs(ce[2]) > 1e-9 || Math.abs(ce[3]) > 1e-6 || Math.abs(ce[4]) > 1e-6 || Math.abs(ce[5]) > 1e-6) && (Ve += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, Ve += `
Fx = ${ct(ce[0] * Ze)} ${Ce.forceUnit}`, Ve += `
Fy = ${ct(ce[1] * Ze)} ${Ce.forceUnit}`, Ve += `
Fz = ${ct(ce[2] * Ze)} ${Ce.forceUnit}`, (Math.abs(ce[3]) > 1e-6 || Math.abs(ce[4]) > 1e-6 || Math.abs(ce[5]) > 1e-6) && (Ve += `
Mx = ${ct(ce[3] * Ze)} ${Ce.forceUnit}\xB7m`, Ve += `
My = ${ct(ce[4] * Ze)} ${Ce.forceUnit}\xB7m`, Ve += `
Mz = ${ct(ce[5] * Ze)} ${Ce.forceUnit}\xB7m`));
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
          const Me = Ee(Ve[0]), Ye = Ee(Ve[1]);
          if (!Me || !Ye || Me.z < -1 || Me.z > 1 || Ye.z < -1 || Ye.z > 1) continue;
          const ce = Ks(J, se, Me.x, Me.y, Ye.x, Ye.y);
          ce < nt && (nt = ce, st = Be, Lt = "frame");
        } else if (Ve.length === 3 || Ve.length === 4) {
          const Me = [];
          let Ye = true;
          for (const ce of Ve) {
            const Ne = Ee(ce);
            if (!Ne || Ne.z < -1 || Ne.z > 1) {
              Ye = false;
              break;
            }
            Me.push(Ne);
          }
          if (!Ye) continue;
          if (Ws(J, se, Me)) {
            const Ne = Me.reduce((Ge, dt) => Ge + dt.z, 0) / Me.length * 1e-3;
            Ne < nt && (nt = Ne, st = Be, Lt = "shell");
          }
        } else if (Ve.length === 8) {
          const Me = [];
          let Ye = true;
          for (const me of Ve) {
            const Le = Ee(me);
            if (!Le || Le.z < -1 || Le.z > 1) {
              Ye = false;
              break;
            }
            Me.push(Le);
          }
          if (!Ye) continue;
          const ce = Math.min(...Me.map((me) => me.x)), Ne = Math.max(...Me.map((me) => me.x)), Ge = Math.min(...Me.map((me) => me.y)), dt = Math.max(...Me.map((me) => me.y));
          if (J >= ce && J <= Ne && se >= Ge && se <= dt) {
            const Le = Me.reduce((Je, pt) => Je + pt.z, 0) / Me.length * 1e-3;
            Le < nt && (nt = Le, st = Be, Lt = "solid");
          }
        }
      }
    }
    if (st >= 0) {
      const Be = ge[st];
      let Me = `${Lt === "frame" ? "Frame" : Lt === "shell" ? "Shell" : "Solid"} ${st}`;
      const Ye = (_e2 = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e2.rawVal, ce = (_g = (_f = Ye == null ? void 0 : Ye.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, st);
      if (ce) {
        ce.name && (Me += `
  \u{1F4CB} ${ce.name}`), ce.shape && (Me += `
  Shape: ${ce.shape}`);
        const Ne = /concrete|hormig|rect.*sólida/i.test(ce.shape || ""), Ge = Ne ? 100 : 1e3, dt = Ne ? "cm" : "mm", me = (Je) => {
          const pt = Je * Ge;
          return Math.abs(pt - Math.round(pt)) < 0.05 ? `${Math.round(pt)}` : `${pt.toFixed(1)}`;
        }, Le = [];
        if (ce.D != null && Le.push(`D=${me(ce.D)}`), ce.B != null && Le.push(`B=${me(ce.B)}`), ce.TF != null && Le.push(`TF=${me(ce.TF)}`), ce.TW != null && Le.push(`TW=${me(ce.TW)}`), ce.t != null && Le.push(`t=${me(ce.t)}`), Le.length && (Me += `
  Dim: ${Le.join(" ")} ${dt}`), ce.material) {
          let Je = ce.material;
          ce.fillMaterial && (Je += ` + FILL "${ce.fillMaterial}"`), Me += `
  Mat: ${Je}`;
        }
      } else {
        const Ne = (_i = (_h = Ye == null ? void 0 : Ye.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, st), Ge = (_k = (_j = Ye == null ? void 0 : Ye.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, st);
        Ne ? (Me += `
  ${Ne}`, Ge && !Ne.includes(Ge) && (Me += `  (${Ge})`)) : Ge && (Me += `
  Material: ${Ge}`);
      }
      if (Me += `
nodos: [${Be.join(", ")}]`, Lt === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const Ne = e.mesh.analyzeOutputs.rawVal, Ge = Ds[Ce.stressUnit] ?? 1, dt = [["bendingXX", "Mxx", Ze, `${Ce.forceUnit}\xB7m/m`], ["bendingYY", "Myy", Ze, `${Ce.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", Ze, `${Ce.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", Ze, `${Ce.forceUnit}/m`], ["membraneYY", "Nyy", Ze, `${Ce.forceUnit}/m`], ["membraneXY", "Nxy", Ze, `${Ce.forceUnit}/m`], ["shearX", "Qx", Ze, `${Ce.forceUnit}/m`], ["shearY", "Qy", Ze, `${Ce.forceUnit}/m`], ["vonMises", "\u03C3VM", Ge, Ce.stressUnit], ["pressure", "p", Ge, Ce.stressUnit]], me = [];
        for (const [Le, Je, pt, Dt] of dt) {
          const ft = Ne == null ? void 0 : Ne[Le];
          if (ft && ft instanceof Map) {
            const zt = ft.get(st);
            if (zt != null) {
              if (typeof zt == "number") me.push(`${Je} = ${ct(zt * pt, 3)} ${Dt}`);
              else if (Array.isArray(zt)) {
                let ot = zt[0];
                for (const Ht of zt) Math.abs(Ht) > Math.abs(ot) && (ot = Ht);
                me.push(`${Je} = ${ct(ot * pt, 3)} ${Dt}`);
              }
            }
          }
        }
        me.length > 0 && (Me += `
\u2500\u2500\u2500\u2500 results \u2500\u2500\u2500\u2500
` + me.slice(0, 8).join(`
`));
      }
      if (Lt === "frame" && ((_m = e.mesh) == null ? void 0 : _m.deformOutputs) && e.mesh.elementInputs) {
        const Ne = e.mesh.deformOutputs.rawVal, Ge = e.mesh.elementInputs.rawVal, dt = Ne == null ? void 0 : Ne.deformations;
        if (dt && Be.length === 2) {
          const me = dt.get(Be[0]), Le = dt.get(Be[1]), Je = ke[Be[0]], pt = ke[Be[1]];
          if (me && Le && Je && pt) {
            const Dt = pt[0] - Je[0], ft = pt[1] - Je[1], zt = pt[2] - Je[2], ot = Math.sqrt(Dt * Dt + ft * ft + zt * zt);
            if (ot > 1e-9) {
              const Ht = Dt / ot, Rt = ft / ot, tn = zt / ot, qt = (Le[0] - me[0]) * Ht + (Le[1] - me[1]) * Rt + (Le[2] - me[2]) * tn, Jt = ((_n2 = Ge.elasticities) == null ? void 0 : _n2.get(st)) ?? 0, An = ((_o2 = Ge.areas) == null ? void 0 : _o2.get(st)) ?? 0, Tn = ((_p = Ge.momentsOfInertiaY) == null ? void 0 : _p.get(st)) ?? 0, nn = ((_q = Ge.momentsOfInertiaZ) == null ? void 0 : _q.get(st)) ?? 0, En = ((_r = Ge.torsionalConstants) == null ? void 0 : _r.get(st)) ?? 0, cn = ((_s2 = Ge.shearModuli) == null ? void 0 : _s2.get(st)) ?? Jt / 2.6, Pt = Jt * An * (qt / ot), Bt = (Le[3] - me[3]) * Ht + (Le[4] - me[4]) * Rt + (Le[5] - me[5]) * tn, Yt = cn * En * (Bt / ot), Qt = Le[4] - me[4], $n = Le[5] - me[5], Nt = Jt * Tn * Qt / ot, dn = Jt * nn * $n / ot;
              Me += `
\u2500\u2500\u2500\u2500 frame \u2500\u2500\u2500\u2500`, Me += `
L = ${ct(ot, 3)} m`, Me += `
\u0394L = ${ct(qt * rt, 3)} ${Ce.dispUnit}`, Me += `
\u03B5 = ${ct(qt / ot, 6)}`, Math.abs(Pt) > 1e-6 && (Me += `
N \u2248 ${ct(Pt * Ze)} ${Ce.forceUnit}`), Math.abs(Yt) > 1e-6 && (Me += `
T \u2248 ${ct(Yt * Ze)} ${Ce.forceUnit}\xB7m`), Math.abs(Nt) > 1e-6 && (Me += `
My \u2248 ${ct(Nt * Ze)} ${Ce.forceUnit}\xB7m`), Math.abs(dn) > 1e-6 && (Me += `
Mz \u2248 ${ct(dn * Ze)} ${Ce.forceUnit}\xB7m`);
            }
          }
        }
      }
      return { type: Lt, idx: st, info: Me };
    }
    return null;
  }
  function $(q, P, W) {
    var _a, _b, _c;
    if (u.visible = false, m.visible = false, k.visible = false, K.visible = false, Q.visible = false, !q || !e.mesh) {
      R.style.display = "none", e.render();
      return;
    }
    const B = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (q.type === "node") {
      const ge = V(q.idx);
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
      const ge = B[q.idx], ze = V(ge[0]), Ee = V(ge[1]);
      if (ze && Ee) {
        const Te = ze.clone().add(Ee).multiplyScalar(0.5), Ie = Ee.clone().sub(ze), De = Ie.length(), rt = e.getActiveCamera().position.distanceTo(Te) * 35e-4;
        k.position.copy(Te);
        const Ze = new w(0, 1, 0), tt = Ze.clone().cross(Ie).normalize(), st = Ze.angleTo(Ie);
        k.quaternion.setFromAxisAngle(tt, st), k.scale.set(rt, De, rt), k.visible = true;
      }
    } else if (q.type === "shell" && B) {
      const ge = B[q.idx], ze = [], Ee = [];
      for (const Te of ge) {
        const Ie = V(Te);
        if (!Ie) return;
        ze.push(Ie.x, Ie.y, Ie.z);
      }
      ge.length === 4 ? Ee.push(0, 1, 2, 0, 2, 3) : ge.length === 3 && Ee.push(0, 1, 2), F.setAttribute("position", new gt(ze, 3)), F.setIndex(Ee), F.computeVertexNormals(), K.visible = true;
    } else if (q.type === "solid" && B) {
      const ge = B[q.idx], ze = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], Ee = [];
      for (const [Te, Ie] of ze) {
        const De = V(ge[Te]), qe = V(ge[Ie]);
        De && qe && Ee.push(De.x, De.y, De.z, qe.x, qe.y, qe.z);
      }
      pe.setAttribute("position", new gt(Ee, 3)), Q.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      R.style.display = "none", e.render();
      return;
    }
    R.textContent = q.info, R.style.whiteSpace = "pre-line", R.style.display = "block";
    const se = e.rendererElm.getBoundingClientRect(), ke = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? se;
    R.style.left = `${P - ke.left}px`, R.style.top = `${W - ke.top}px`, e.render();
  }
  let Z = "", A = 0, N = 0;
  const te = window.__hekatanHoverDebug ?? false, j = (q) => {
    A && cancelAnimationFrame(A), A = requestAnimationFrame(() => {
      var _a, _b, _c;
      const P = C(q.clientX, q.clientY);
      if (te && N < 5) {
        const B = e.derivedNodes.rawVal, J = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${q.clientX}, ${q.clientY}) nodes=${(B == null ? void 0 : B.length) ?? 0} elems=${(J == null ? void 0 : J.length) ?? 0} hover=`, P), N++;
      }
      const W = P ? `${P.type}:${P.idx}` : "";
      if (W !== Z) Z = W, $(P, q.clientX, q.clientY);
      else if (P) {
        const B = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        R.style.left = `${q.clientX - B.left}px`, R.style.top = `${q.clientY - B.top}px`;
      }
    });
  };
  let H = null;
  const T = () => {
    Z = "", u.visible = false, m.visible = false, k.visible = false, K.visible = false, Q.visible = false, R.style.display = "none", e.render();
  }, ae = (q) => {
    const P = e.rendererElm.getBoundingClientRect(), W = q.clientX - P.left, B = q.clientY - P.top;
    (W < -2 || B < -2 || W > P.width + 2 || B > P.height + 2) && (H && clearTimeout(H), H = window.setTimeout(T, 200));
  }, oe = () => {
    H && (clearTimeout(H), H = null);
  };
  e.rendererElm.addEventListener("pointermove", j), e.rendererElm.addEventListener("pointerleave", ae), e.rendererElm.addEventListener("pointerenter", oe);
  function we() {
    var _a, _b, _c;
    const q = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    return q === "select" || q === "none" || !q;
  }
  let le = null;
  e.rendererElm.addEventListener("pointerdown", (q) => {
    q.button === 0 && (le = { x: q.clientX, y: q.clientY });
  }), e.rendererElm.addEventListener("pointerup", (q) => {
    if (q.button !== 0 || !le) return;
    const P = q.clientX - le.x, W = q.clientY - le.y;
    if (le = null, P * P + W * W > 9 || !we()) return;
    const B = C(q.clientX, q.clientY);
    B ? (Ke({ type: B.type, idx: B.idx }, q.shiftKey), Se()) : We();
  }), window.addEventListener("keydown", (q) => {
    if (q.key !== "Escape" || !I.length) return;
    const P = document.activeElement, W = !!P && (P.id === "hk3-cmd-input" || P.id === "hk-dyn-input") && P.value === "";
    P && (P.tagName === "INPUT" || P.tagName === "TEXTAREA" || P.isContentEditable) && !W || We();
  }, { capture: true });
  function Pe() {
    for (const q of X.children.slice()) {
      X.remove(q);
      const P = q.geometry;
      P && P !== x && P !== ue && P.dispose();
    }
  }
  function de(q, P) {
    var _a, _b, _c;
    const W = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
    if (q.type === "node") {
      const B = V(q.idx);
      if (!B) return;
      const J = ((_c = e.derivedDisplayScale) == null ? void 0 : _c.rawVal) ?? 1, se = new He(x, g);
      se.position.copy(B), se.scale.setScalar(0.025 * P * J), se.renderOrder = 101, X.add(se);
    } else if (q.type === "frame" && W) {
      const B = W[q.idx], J = V(B[0]), se = V(B[1]);
      if (!J || !se) return;
      const ke = J.clone().add(se).multiplyScalar(0.5), ge = se.clone().sub(J), ze = ge.length(), Ee = e.getActiveCamera().position.distanceTo(ke), Te = new He(ue, O);
      Te.position.copy(ke);
      const Ie = new w(0, 1, 0);
      Te.quaternion.setFromAxisAngle(Ie.clone().cross(ge).normalize(), Ie.angleTo(ge)), Te.scale.set(Ee * 35e-4, ze, Ee * 35e-4), Te.renderOrder = 101, X.add(Te);
    } else if (q.type === "shell" && W) {
      const B = W[q.idx], J = [], se = [];
      for (const ze of B) {
        const Ee = V(ze);
        if (!Ee) return;
        J.push(Ee.x, Ee.y, Ee.z);
      }
      B.length === 4 ? se.push(0, 1, 2, 0, 2, 3) : B.length === 3 && se.push(0, 1, 2);
      const ke = new he();
      ke.setAttribute("position", new gt(J, 3)), ke.setIndex(se), ke.computeVertexNormals();
      const ge = new He(ke, _e);
      ge.renderOrder = 101, X.add(ge);
    } else if (q.type === "solid" && W) {
      const B = W[q.idx], J = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], se = [];
      for (const [ze, Ee] of J) {
        const Te = V(B[ze]), Ie = V(B[Ee]);
        Te && Ie && se.push(Te.x, Te.y, Te.z, Ie.x, Ie.y, Ie.z);
      }
      const ke = new he();
      ke.setAttribute("position", new gt(se, 3));
      const ge = new Xt(ke, ve);
      ge.renderOrder = 101, X.add(ge);
    }
  }
  function Se() {
    if (Pe(), !I.length || !e.mesh) {
      e.render();
      return;
    }
    const q = e.derivedNodes.rawVal ?? [];
    let P = 1;
    if (q.length >= 2) {
      const W = [1 / 0, 1 / 0, 1 / 0], B = [-1 / 0, -1 / 0, -1 / 0];
      for (const J of q) for (let se = 0; se < 3; se++) J[se] < W[se] && (W[se] = J[se]), J[se] > B[se] && (B[se] = J[se]);
      P = Math.max(B[0] - W[0], B[1] - W[1], B[2] - W[2], 0.1);
    }
    for (const W of I) de(W, P);
    e.render();
  }
  function Ke(q, P) {
    const W = I.findIndex((B) => B.type === q.type && B.idx === q.idx);
    W >= 0 ? I.splice(W, 1) : P || I.push(q), I.length && I[I.length - 1];
  }
  function We() {
    I.length = 0, Se();
  }
  return L.derive(() => {
    e.derivedNodes.val, I.length && Se();
  }), i;
}
function Ks(e, i, x, h, u, S) {
  const y = u - x, m = S - h, M = y * y + m * m;
  if (M < 1e-9) {
    const ie = e - x, Q = i - h;
    return Math.sqrt(ie * ie + Q * Q);
  }
  let k = ((e - x) * y + (i - h) * m) / M;
  k = Math.max(0, Math.min(1, k));
  const F = x + k * y, b = h + k * m, K = e - F, pe = i - b;
  return Math.sqrt(K * K + pe * pe);
}
function Ws(e, i, x) {
  let h = false;
  for (let u = 0, S = x.length - 1; u < x.length; S = u++) {
    const y = x[u].x, m = x[u].y, M = x[S].x, k = x[S].y;
    m > i != k > i && e < (M - y) * (i - m) / (k - m + 1e-12) + y && (h = !h);
  }
  return h;
}
function Co(e, i = 8) {
  const x = document.createElement("div");
  x.id = "legend", x.style.setProperty("--legend-n", String(i)), setTimeout(() => {
    L.derive(() => {
      Vn.val, x.style.background = ps();
    });
  });
  const h = document.createElement("div");
  h.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", x.appendChild(h), setTimeout(() => {
    L.derive(() => {
      h.textContent = On.val ? `[${On.val}]` : "";
    });
  });
  const u = Array.from({ length: i + 1 }, (M, k) => k / i).reverse();
  let S, y;
  u.forEach((M, k) => {
    S = document.createElement("div"), S.id = `marker-${k}`, S.className = "marker", S.style.marginTop = k == 0 ? "0px" : "calc(var(--legend-h) / var(--legend-n) - 1px)", y = document.createElement("p"), y.id = `marker-text-${k}`, S.append(y), x.append(S);
  });
  const m = [];
  return x.querySelectorAll("p").forEach((M) => m.push(M)), setTimeout(() => {
    L.derive(() => {
      u.forEach((M, k) => {
        const F = m[k];
        F && (F.innerText = Gs(e.val, M).toString());
      });
    });
  }), x;
}
function Gs(e, i) {
  const x = to.val;
  if (x) return (x[0] + i * (x[1] - x[0])).toPrecision(3);
  const h = e.filter((y) => Number.isFinite(y));
  if (h.length === 0) return "0";
  let u = Math.min(...h);
  const S = Math.max(...h);
  return u >= 0 && S > 0 && (u = 0), (u + i * (S - u)).toPrecision(3);
}
function aa({ mesh: e, settingsObj: i, drawingObj: x, objects3D: h, solids: u }) {
  rs.DEFAULT_UP = new w(0, 0, 1);
  const S = document.createElement("div"), y = new os(), m = new ss(45, 1, 0.1, 2 * 1e6), M = new as(-10, 10, 10, -10, -1e3, 2e6);
  let k = m;
  const F = new is({ antialias: true });
  F.localClippingEnabled = true;
  const b = new _o(m, F.domElement);
  b.enableDamping = true, b.dampingFactor = 0.1, b.screenSpacePanning = true, b.zoomSpeed = 0.8, b.panSpeed = 1.2, b.rotateSpeed = 0.9, b.keyPanSpeed = 12, b.listenToKeyEvents(window), b.touches = { ONE: _n.ROTATE, TWO: _n.DOLLY_PAN }, F.domElement.addEventListener("wheel", (P) => {
    if (!P.ctrlKey && Math.abs(P.deltaX) > Math.abs(P.deltaY) * 1.5) {
      P.preventDefault();
      const W = b.target, B = new w().subVectors(m.position, W), J = new w();
      J.crossVectors(m.up, B).normalize();
      const ke = B.length() * 1e-3 * b.panSpeed;
      W.addScaledVector(J, P.deltaX * ke), m.position.addScaledVector(J, P.deltaX * ke), b.update();
    }
  }, { passive: false });
  const K = new Gn(new w(-1, 0, 0), 0), pe = new Gn(new w(0, -1, 0), 0), ie = new Gn(new w(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function Q() {
    const P = window.__hekatanClip, W = [];
    P.enableX && (K.normal.set(P.invertX ? 1 : -1, 0, 0), K.constant = P.invertX ? -P.posX : P.posX, W.push(K)), P.enableY && (pe.normal.set(0, P.invertY ? 1 : -1, 0), pe.constant = P.invertY ? -P.posY : P.posY, W.push(pe)), P.enableZ && (ie.normal.set(0, 0, P.invertZ ? 1 : -1), ie.constant = P.invertZ ? -P.posZ : P.posZ, W.push(ie)), F.clippingPlanes = W, y.traverse((J) => {
      const se = J;
      if (se.material) {
        const ke = Array.isArray(se.material) ? se.material : [se.material];
        for (const ge of ke) ge.clippingPlanes = W, ge.needsUpdate = true;
      }
    });
    const B = window.__hekatanPanes ?? [];
    for (const J of B) try {
      J && typeof J.refresh == "function" && J.refresh();
    } catch {
    }
    F.render(y, k);
  }
  Q(), window.__hekatanClipApply = Q;
  const g = hs(i), O = L.derive(() => Math.pow(10, g.displayScale.val / 10)), ue = Hs(e, g), _e = () => {
    const P = [];
    return g.gridXY.rawVal && P.push("xy"), g.gridXZ.rawVal && P.push("xz"), g.gridYZ.rawVal && P.push("yz"), P;
  }, ve = () => {
    const P = g.gridStep.rawVal, W = Math.max(P, g.gridMajor.rawVal);
    return { planes: _e(), majorStep: W, minorStep: P };
  };
  let I = qn(g.gridSize.rawVal, ve());
  I.visible = g.gridVisible.rawVal, window.__hekatanSnap2D = g.cursorSnap.rawVal;
  const X = () => {
    const P = Math.max(0, Math.min(1, g.gridOpacity.rawVal));
    I.traverse((W) => {
      const B = W.material;
      if (!B || !("opacity" in B)) return;
      const J = W.name ?? "";
      let se = 0.35;
      J.includes("border") ? se = 1 : J.includes("major") && (se = 0.75), B.opacity = P * se;
    });
  };
  X(), S.appendChild(fs(g, e, u)), S.setAttribute("id", "viewer"), S.appendChild(F.domElement), F.setPixelRatio(window.devicePixelRatio);
  const R = en();
  F.setClearColor(R.background, 1);
  const V = g.gridSize.rawVal, C = V * 0.5 + V * 0.5 / Math.tan(45 * 0.5);
  m.position.set(0, 0, C), m.up.set(0, 1, 0), b.target.set(0, 0, 0), b.minDistance = 0.1, b.maxDistance = 1e4, S.__settings = g, b.zoomSpeed = 1, b._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, b.update();
  let $ = ko(g.gridSize.rawVal, g.flipAxes.rawVal);
  y.add(I, $), L.derive(() => {
    window.__hekatanGridPlaneXY = g.gridXY.val, window.__hekatanGridPlaneXZ = g.gridXZ.val, window.__hekatanGridPlaneYZ = g.gridYZ.val;
  });
  let Z = true;
  L.derive(() => {
    const P = g.gridVisible.val;
    if (Z) {
      Z = false;
      return;
    }
    I.visible = P, oe();
  });
  let A = true;
  L.derive(() => {
    if (g.gridOpacity.val, A) {
      A = false;
      return;
    }
    X(), oe();
  }), L.derive(() => {
    const P = g.cursorSnap.val;
    window.__hekatanSnap2D = P;
  });
  let N = true;
  L.derive(() => {
    var _a;
    const P = g.gridSize.val, W = g.flipAxes.val;
    if (g.gridXY.val, g.gridXZ.val, g.gridYZ.val, g.gridStep.val, g.gridMajor.val, N) {
      N = false;
      return;
    }
    y.remove(I), (_a = I.traverse) == null ? void 0 : _a.call(I, (se) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = se.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = se.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), I = qn(P, ve()), I.visible = g.gridVisible.rawVal, y.add(I), X(), y.remove($), $.traverse((se) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = se.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = se.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), $ = ko(P, W), y.add($);
    const B = P * 0.5 + P * 0.5 / Math.tan(45 * 0.5);
    m.position.distanceTo(b.target), Math.abs(m.position.x) < 0.1 && Math.abs(m.position.y) < 0.1 && m.position.z > 0 ? m.position.set(0, 0, B) : m.position.set(0.5 * P, -B, 0.5 * P), b.target.set(0, 0, 0), b.minDistance = Math.max(0.05, P * 0.01), b.maxDistance = Math.max(50, P * 50), b.update(), oe();
  }), new ResizeObserver((P) => {
    var _a, _b;
    for (const W of P) {
      const B = (_a = W.target) == null ? void 0 : _a.clientWidth, J = (_b = W.target) == null ? void 0 : _b.clientHeight;
      if (B === 0 || J === 0) continue;
      const ke = (j ? B / 2 : B) / J;
      m.aspect = ke, m.updateProjectionMatrix();
      const ge = M.top;
      if (M.left = -ge * ke, M.right = ge * ke, M.updateProjectionMatrix(), H && H.isPerspectiveCamera) H.aspect = ke, H.updateProjectionMatrix();
      else if (H && H.isOrthographicCamera) {
        const ze = H, Ee = ze.top;
        ze.left = -Ee * ke, ze.right = Ee * ke, ze.updateProjectionMatrix();
      }
      F.setSize(B, J), oe();
    }
  }).observe(S), b.addEventListener("change", oe), L.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, g.displayScale.val, g.nodes.val, g.elements.val, (_g = g.edges) == null ? void 0 : _g.val, g.elemColumns.val, g.elemBeams.val, g.nodesIndexes.val, g.elementsIndexes.val, g.orientations.val, g.sections.val, g.secColumns.val, g.secBeams.val, g.secFloor.val, g.supports.val, g.loads.val, g.deformedShape.val, g.nodeResults.val, g.frameResults.val, g.shellResults.val, (_h = g.solidResults) == null ? void 0 : _h.val, setTimeout(oe);
  });
  let j = false, H = null, T = null, ae = false;
  function oe() {
    const P = S.clientWidth || 1, W = S.clientHeight || 1;
    if (!j || !H) {
      F.setScissorTest(false), F.setViewport(0, 0, P, W), F.render(y, k);
      return;
    }
    const B = P / 2;
    F.setScissorTest(true), F.setViewport(0, 0, B, W), F.setScissor(0, 0, B, W), F.render(y, k), F.setViewport(B, 0, B, W), F.setScissor(B, 0, B, W), F.render(y, H), F.setScissorTest(false);
  }
  function we(P) {
    k = P, b.object = P, b.update(), oe();
  }
  function le(P, W) {
    j = P, W && (H = W);
    const B = S.clientWidth || 1, J = S.clientHeight || 1, ke = (P ? B / 2 : B) / J;
    m.isPerspectiveCamera && (m.aspect = ke, m.updateProjectionMatrix());
    const ge = M.top;
    if (M.left = -ge * ke, M.right = ge * ke, M.updateProjectionMatrix(), P && H) {
      if (T ? (T.object = H, T.update()) : (T = new _o(H, F.domElement), T.enableDamping = true, T.dampingFactor = 0.1, T.screenSpacePanning = true, T.zoomSpeed = 0.8, T.panSpeed = 1.2, T.rotateSpeed = 0.9, T.touches = { ONE: _n.ROTATE, TWO: _n.DOLLY_PAN }, T.target.copy(b.target), T.addEventListener("change", oe), T.enabled = false), !ae) {
        const ze = (Ee) => {
          if (!j || !T) return;
          const Te = F.domElement.getBoundingClientRect(), Ie = Ee.clientX - Te.left, De = Te.width / 2, qe = Ie >= De;
          b.enabled = !qe, T.enabled = qe;
        };
        F.domElement.addEventListener("pointerdown", ze, true), F.domElement.addEventListener("wheel", ze, { capture: true, passive: true }), ae = true;
      }
    } else P || (b.enabled = true, T && (T.enabled = false));
    S.__splitMode = P, window.__hekatanSplitMode = P, window.__hekatanSplitCamera = P ? H : null, oe();
  }
  if (e) {
    y.add(ms(g, ue, O), cs(e, g, ue), xs(g, ue, O), gs(e, g, ue, O), ws(e, g, ue, O), ys(e, g, ue, O), bs(e, g, ue, O), Ss(e, g, ue, O), Cs(e, g, ue, O), ks(e, g, ue, O));
    const P = Us({ scene: y, rendererElm: F.domElement, getActiveCamera: () => k, derivedNodes: ue, derivedDisplayScale: O, mesh: e, settings: g, render: oe });
    y.add(P);
    const W = ea(e, g), B = As(e, g, ue, W), J = Co(W);
    y.add(B), S.appendChild(J);
    const se = Ls(e, g, ue);
    y.add(se);
    const ke = se.__colorMapValues, ge = Co(ke);
    ge.id = "frame-legend", S.appendChild(ge), L.derive(() => {
      var _a;
      const ze = g.shellResults.val != "none", Ee = (((_a = g.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", Te = ze || Ee, Ie = g.frameResults.val.startsWith("contour:");
      J.hidden = !Te, B.visible = Te, ge.hidden = !Ie;
    });
  }
  if (u) {
    const P = new ls(16777215, 0.5);
    y.add(P);
    const W = new bo(16777215, 0.5);
    W.position.set(30, 25, -10), W.shadow.mapSize.width = 1024, W.shadow.mapSize.height = 1024, y.add(W);
    const B = 10;
    W.shadow.camera.left = -B, W.shadow.camera.right = B, W.shadow.camera.top = B, W.shadow.camera.bottom = -B, W.shadow.camera.far = 1e3;
    const J = new bo(16777215, 0.5);
    J.color.setHSL(11, 43, 96), J.position.set(-10, 0, 30), y.add(J), L.derive(() => {
      (u == null ? void 0 : u.val.length) && (y.remove(...u.oldVal), y.add(...u.rawVal), oe());
    }), L.derive(() => {
      u.rawVal.forEach((se) => se.visible = g.solids.val), oe();
    });
  }
  if (h) {
    const P = [], W = (J) => {
      var _a;
      return ((_a = J == null ? void 0 : J.userData) == null ? void 0 : _a.isCota) ? g.showCotas.val : g.custom3D.val;
    }, B = () => {
      for (const J of P) J.visible = W(J);
      oe();
    };
    L.derive(() => {
      const J = h.val;
      P.length && (y.remove(...P), P.length = 0), J.length && (y.add(...J), P.push(...J), B()), oe();
    }), L.derive(() => {
      g.custom3D.val, B();
    }), L.derive(() => {
      g.showCotas.val, B();
    });
  }
  x && Fs({ drawingObj: x, gridObj: I, scene: y, getActiveCamera: () => k, controls: b, gridSize: V, derivedDisplayScale: O, rendererElm: F.domElement, viewerRender: oe }), Vo((P, W) => {
    var _a;
    F.setClearColor(W.background, 1), y.remove(I), (_a = I.traverse) == null ? void 0 : _a.call(I, (B) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = B.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = B.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), I = qn(g.gridSize.rawVal, { planes: _e() }), y.add(I), S.style.setProperty("--awatif-legend-color", W.legendMarker), oe();
  });
  const Pe = { scene: y, perspCamera: m, orthoCamera: M, get camera() {
    return k;
  }, controls: b, renderer: F, rendererElm: F.domElement, render: oe, setActiveCamera: we, setSplitMode: le, get splitMode() {
    return j;
  }, get splitCamera() {
    return H;
  }, settings: g };
  S.__ctx = Pe;
  const de = document.createElement("div");
  de.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const Se = (P, W, B) => {
    const J = document.createElement("button");
    return J.textContent = P, J.title = W, J.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), J.onmouseenter = () => {
      J.style.background = "rgba(70,70,70,0.9)";
    }, J.onmouseleave = () => {
      J.style.background = "rgba(40,40,40,0.85)";
    }, J.onclick = (se) => {
      se.preventDefault(), B();
    }, J;
  }, Ke = (P, W) => {
    const B = b.target, J = new w().subVectors(k.position, B), se = J.length(), ke = new w(), ge = new w();
    ke.crossVectors(k.up, J).normalize(), ge.copy(k.up).normalize();
    const ze = se * 0.05;
    B.addScaledVector(ke, -P * ze), B.addScaledVector(ge, W * ze), k.position.addScaledVector(ke, -P * ze), k.position.addScaledVector(ge, W * ze), b.update(), oe();
  }, We = (P) => {
    const W = new w().subVectors(k.position, b.target);
    W.multiplyScalar(P), k.position.copy(b.target).add(W), b.update(), oe();
  }, q = () => {
    const P = document.createElement("div");
    return P.style.cssText = "width:32px;height:32px;", P;
  };
  return de.append(q()), de.append(Se("\u2191", "Pan arriba", () => Ke(0, 1))), de.append(Se("\u2295", "Zoom in", () => We(0.85))), de.append(Se("\u2190", "Pan izquierda", () => Ke(-1, 0))), de.append(Se("\u2302", "Reset vista", () => {
    b.reset(), oe();
  })), de.append(Se("\u2192", "Pan derecha", () => Ke(1, 0))), de.append(Se("\u2296", "Zoom out", () => We(1.18))), de.append(Se("\u2193", "Pan abajo", () => Ke(0, -1))), de.append(q()), getComputedStyle(S).position === "static" && (S.style.position = "relative"), S.appendChild(de), S;
}
function Hs(e, i) {
  return L.derive(() => {
    var _a, _b, _c, _d;
    if (!i.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const x = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], h = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!h || x.length === 0) return x;
    const u = i.deformScale.val, S = i.deformScale.val * i.deformScaleZ.val, y = Number.isFinite(u) ? u : 1, m = Number.isFinite(S) ? S : 1;
    return x.map((M, k) => {
      var _a2;
      const F = ((_a2 = h.get(k)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], b = Number.isFinite(F[0]) ? F[0] : 0, K = Number.isFinite(F[1]) ? F[1] : 0, pe = Number.isFinite(F[2]) ? F[2] : 0;
      return [M[0] + b * y, M[1] + K * y, M[2] + pe * m];
    });
  });
}
const to = L.state(null), On = L.state(""), qs = L.state("kN"), Js = L.state("mm"), Qs = L.state("kN/m\xB2"), Os = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, Fo = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, js = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function ea(e, i) {
  const x = L.state([]);
  let h;
  return ((u) => {
    u.bendingXX = "bendingXX", u.bendingYY = "bendingYY", u.bendingXY = "bendingXY", u.membraneXX = "membraneXX", u.membraneYY = "membraneYY", u.membraneXY = "membraneXY", u.tranverseShearX = "tranverseShearX", u.tranverseShearY = "tranverseShearY", u.vonMises = "vonMises", u.pressure = "pressure", u.displacementX = "displacementX", u.displacementY = "displacementY", u.displacementZ = "displacementZ";
  })(h || (h = {})), L.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const u = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), ie = (Pe, de) => {
      Pe == null ? void 0 : Pe.forEach((Se, Ke) => {
        const We = e.elements.val[Ke];
        if (We) for (let q = 0; q < We.length; q++) de.set(We[q], [Se[q] ?? Se[0]]);
      });
    };
    ie((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, u), ie((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, S), ie((_f = (_e2 = e.analyzeOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.bendingXY, y), ie((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, m), ie((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, M), ie((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, k), ie((_n2 = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n2.tranverseShearX, F), ie((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, b), ie((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, K), ie((_t2 = (_s2 = e.analyzeOutputs) == null ? void 0 : _s2.val) == null ? void 0 : _t2.pressure, pe);
    const Q = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, g = (_w = i.solidResults) == null ? void 0 : _w.val, ue = g && g !== "none" ? g : i.shellResults.val, _e = Q == null ? void 0 : Q[ue], ve = { bendingXX: [u, 0], bendingYY: [S, 0], bendingXY: [y, 0], membraneXX: [m, 0], membraneYY: [M, 0], membraneXY: [k, 0], tranverseShearX: [F, 0], tranverseShearY: [b, 0], vonMises: [K, 0], pressure: [pe, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, I = i.shellResults.val, X = qs.val, R = Js.val, V = I === "displacementX" || I === "displacementY" || I === "displacementZ", C = I === "bendingXX" || I === "bendingYY" || I === "bendingXY", $ = I === "membraneXX" || I === "membraneYY" || I === "membraneXY", Z = I === "vonMises" || I === "pressure", A = I === "tranverseShearX" || I === "tranverseShearY", N = (_D = i.solidResults) == null ? void 0 : _D.val, te = N === "vonMises" || N === "sigmaXX" || N === "sigmaYY" || N === "sigmaZZ" || N === "tauXY" || N === "tauYZ" || N === "tauXZ", j = N === "ux" || N === "uy" || N === "uz", H = Qs.val, T = te ? js[H] : j || V ? Fo[R] : C || $ || Z || A ? 1 / Os[X] : 1, ae = te ? H : j || V ? R : C ? `${X}\xB7m/m` : $ ? `${X}/m\xB2` : Z ? `${X}/m\xB2` : A ? `${X}/m` : "";
    On.val = ae, to.val = Array.isArray(_e) && _e.length === 2 ? [_e[0] * T, _e[1] * T] : null;
    const we = N && N !== "none" ? [K, 0] : ve[I], le = [];
    e.nodes.val.forEach((Pe, de) => {
      const Se = we;
      if (!Se || !Se[0] || typeof Se[0].has != "function") return;
      if (!Se[0].has(de)) {
        le.push(Number.NaN);
        return;
      }
      const Ke = Se[0].get(de), We = Ke ? Ke[Se[1]] ?? 0 : 0;
      le.push(We * T);
    }), x.val = le;
  }), x;
}
export {
  us as a,
  Co as b,
  qs as c,
  Js as d,
  Qs as e,
  aa as g
};
