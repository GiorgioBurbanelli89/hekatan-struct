import { N as It, a6 as bn, q as Ho, v as R, a7 as qo, D as Ft, M as We, B as he, F as gt, a8 as Jo, x as it, a9 as Qo, aa as Oo, h as mo, ab as wo, r as en, ac as Pn, ad as zn, a4 as Vo, _ as Je, a as lt, L as Xt, w as Ao, b as jo, ae as es, f as Oe, V as y, $ as jt, af as Kn, H as To, d as _t, z as Cn, ag as Fn, t as ts, o as ns, I as Gt, a2 as yn, E as yo, S as rn, m as Wn, ah as xn, g as xo, i as go, j as vo, C as Mo, K as os, U as ss, W as as, X as is, T as _n, P as Gn, Y as ls, Z as bo, O as rs } from "./theme-Co6w-pfC.js";
import { T as xt, O as _o } from "./Text-2W5davkr.js";
import { P as Eo } from "./tweakpane-BXg6ZhiP.js";
import { e as cs } from "./styles-BcI84iw5.js";
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
    for (let w = 1; w < x; w++) {
      const m = w * h;
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
    const w = 1 / this.n, m = new It(), M = new It(), k = new It();
    for (let F = 1; F >= 0; F -= w) for (let b = this.map.length - 1; b >= 0; b--) if (F < this.map[b][0] && F >= this.map[b - 1][0]) {
      const U = this.map[b - 1][0], pe = this.map[b][0];
      m.setHex(this.map[b - 1][1], bn), M.setHex(this.map[b][1], bn), k.lerpColors(m, M, (F - U) / (pe - U)), u[S * 4] = Math.round(k.r * 255), u[S * 4 + 1] = Math.round(k.g * 255), u[S * 4 + 2] = Math.round(k.b * 255), u[S * 4 + 3] = 255, S += 1;
    }
    return x.putImageData(h, 0, 0), i;
  }
}
const Hn = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, Io = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]], ds = { safe: [[0, 224, 13, 107], [0.13, 221, 20, 50], [0.27, 252, 99, 39], [0.4, 254, 161, 47], [0.52, 238, 234, 25], [0.64, 5, 193, 69], [0.78, 7, 178, 244], [0.9, 4, 132, 213], [1, 90, 175, 230]], csi: Io, jet_r: [[0, 200, 0, 0], [0.15, 255, 80, 0], [0.32, 255, 200, 0], [0.48, 180, 255, 0], [0.6, 0, 230, 90], [0.74, 0, 220, 230], [0.88, 0, 110, 255], [1, 0, 0, 180]], jet: [[0, 0, 0, 180], [0.12, 0, 110, 255], [0.26, 0, 220, 230], [0.4, 0, 230, 90], [0.52, 180, 255, 0], [0.68, 255, 200, 0], [0.85, 255, 80, 0], [1, 200, 0, 0]], viridis: [[0, 68, 1, 84], [0.25, 59, 82, 139], [0.5, 33, 145, 140], [0.75, 94, 201, 98], [1, 253, 231, 37]] }, Vn = R.state("safe");
function Lo(e) {
  e = Math.max(0, Math.min(1, e));
  const i = ds[Vn.val] ?? Io;
  for (let h = 0; h < i.length - 1; h++) {
    const [u, S, w, m] = i[h], [M, k, F, b] = i[h + 1];
    if (e <= M) {
      const U = (e - u) / (M - u);
      return [S + (k - S) * U, w + (F - w) * U, m + (b - m) * U];
    }
  }
  const x = i[i.length - 1];
  return [x[1], x[2], x[3]];
}
function So() {
  const i = new Uint8Array(1024);
  for (let h = 0; h < 256; h++) {
    const u = h / 255, [S, w, m] = Lo(u);
    i[h * 4 + 0] = S, i[h * 4 + 1] = w, i[h * 4 + 2] = m, i[h * 4 + 3] = 255;
  }
  const x = new Qo(i, 256, 1, Oo);
  return x.minFilter = mo, x.magFilter = mo, x.wrapS = wo, x.wrapT = wo, x.needsUpdate = true, x;
}
function ps() {
  const i = [];
  for (let x = 0; x <= 12; x++) {
    const h = 1 - x / 12, [u, S, w] = Lo(h);
    i.push(`rgb(${u | 0},${S | 0},${w | 0}) ${(x / 12 * 100).toFixed(0)}%`);
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
  R.derive(() => {
    var _a;
    Vn.val;
    const w = u.uniforms.cmap.value;
    u.uniforms.cmap.value = So(), (_a = w == null ? void 0 : w.dispose) == null ? void 0 : _a.call(w);
  });
  const S = new We(new he(), u);
  return S.renderOrder = -1, S.frustumCulled = false, S.userData.isShellArea = true, S.name = "__hekatan_shell_colormap", R.derive(() => {
    S.geometry.setAttribute("position", new gt(e.val.flat(), 3));
    const w = [];
    for (const g of i.val) g.length === 3 ? w.push(g[0], g[1], g[2]) : g.length === 4 && (w.push(g[0], g[1], g[2]), w.push(g[0], g[2], g[3]));
    S.geometry.setIndex(new Jo(w, 1));
    const m = x.val.filter((g) => Number.isFinite(g));
    let M, k;
    const F = to.val;
    if (F ? (k = F[0], M = F[1]) : (M = m.length ? Math.max(...m) : 1, k = m.length ? Math.min(...m) : 0, k >= 0 && M > 0 && (k = 0)), M === k) {
      const g = Math.max(Math.abs(M) * 1e-6, 1e-9);
      M += g, k -= g;
    }
    const b = F && F[0] > F[1], U = Math.min(k, M), pe = Math.max(k, M), ie = pe - U, Q = new Float32Array(x.val.length);
    for (let g = 0; g < x.val.length; g++) {
      const O = x.val[g];
      if (!Number.isFinite(O)) {
        Q[g] = -1;
        continue;
      }
      const Se = ((b ? pe + U - O : O) - U) / ie;
      Q[g] = Math.max(0, Math.min(1, Se));
    }
    S.geometry.setAttribute("scalar", new it(Q, 1));
  }), S;
}
function fs(e, i, x) {
  const h = document.createElement("div"), u = new Eo({ title: "Settings", expanded: true, container: h });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(u), h.setAttribute("id", "settings");
  const S = "hk_settingsPos";
  let w = null;
  try {
    const b = localStorage.getItem(S);
    b && (w = JSON.parse(b));
  } catch {
  }
  h.style.cssText = ["position:fixed", w ? `left:${w.left}px` : "left:8px", w ? `top:${w.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const m = () => {
    const b = h.querySelector(".tp-rotv_b");
    if (!b) {
      setTimeout(m, 200);
      return;
    }
    b.style.cursor = "move", b.style.userSelect = "none";
    let U = false, pe = 0, ie = 0, Q = 0, g = 0;
    b.addEventListener("mousedown", (O) => {
      U = true, pe = O.clientX, ie = O.clientY;
      const de = h.getBoundingClientRect();
      Q = de.left, g = de.top, h.style.left = `${Q}px`, h.style.top = `${g}px`;
    }), window.addEventListener("mousemove", (O) => {
      if (!U) return;
      const de = O.clientX - pe, Se = O.clientY - ie, Me = Math.max(0, Math.min(window.innerWidth - 40, Q + de)), K = Math.max(0, Math.min(window.innerHeight - 40, g + Se));
      h.style.left = `${Me}px`, h.style.top = `${K}px`;
    }), window.addEventListener("mouseup", () => {
      if (U) {
        U = false;
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
    const U = u.addFolder({ title: "\u{1F441} Ver", expanded: false });
    U.addBinding(e.nodes, "val", { label: "Nodes" }), U.addBinding(e.elements, "val", { label: "Elements" }), U.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), U.addBinding(e.faces, "val", { label: "  Caras (fill)" }), U.addBinding(e.elemFrames, "val", { label: "  Frames (todos)" }), U.addBinding(e.elemColumns, "val", { label: "    Columnas" }), U.addBinding(e.elemBeams, "val", { label: "    Vigas" }), U.addBinding(e.elemZapatas, "val", { label: "  Zapatas (shells z\u22640)" }), U.addBinding(e.elemLosas, "val", { label: "  Losas (shells z>0)" }), U.addBinding(e.colorByType, "val", { label: "  \u{1F3A8} Color por tipo" }), U.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), U.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), U.addBinding(e.orientations, "val", { label: "Orientations" }), U.addBinding(e.sections, "val", { label: "Sections" }), U.addBinding(e.sectionLabels, "val", { label: "  Sec. Labels (30x50)" }), U.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), U.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), U.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } });
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
  return { gridSize: R.state((e == null ? void 0 : e.gridSize) ?? 30), gridVisible: R.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: R.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: R.state((e == null ? void 0 : e.gridStep) ?? 1), gridMajor: R.state((e == null ? void 0 : e.gridMajor) ?? 5), cursorSnap: R.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: R.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: R.state((e == null ? void 0 : e.gridXZ) ?? false), gridYZ: R.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: R.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: R.state((e == null ? void 0 : e.nodes) ?? true), elements: R.state((e == null ? void 0 : e.elements) ?? true), edges: R.state((e == null ? void 0 : e.edges) ?? true), faces: R.state((e == null ? void 0 : e.faces) ?? true), elemColumns: R.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: R.state((e == null ? void 0 : e.elemBeams) ?? true), elemFrames: R.state((e == null ? void 0 : e.elemFrames) ?? true), elemZapatas: R.state((e == null ? void 0 : e.elemZapatas) ?? true), elemLosas: R.state((e == null ? void 0 : e.elemLosas) ?? true), colorByType: R.state((e == null ? void 0 : e.colorByType) ?? false), nodesIndexes: R.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: R.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: R.state((e == null ? void 0 : e.orientations) ?? false), sections: R.state((e == null ? void 0 : e.sections) ?? true), sectionLabels: R.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: R.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: R.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: R.state((e == null ? void 0 : e.secFloor) ?? -1), supports: R.state((e == null ? void 0 : e.supports) ?? true), loads: R.state((e == null ? void 0 : e.loads) ?? false), deformedShape: R.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: R.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: R.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: R.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: R.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: R.state((e == null ? void 0 : e.flipAxes) ?? false), solids: R.state((e == null ? void 0 : e.solids) ?? true), custom3D: R.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: R.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: R.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: R.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function ms(e, i, x) {
  const h = en(), u = new Pn(new he(), new zn({ color: h.nodePoint }));
  return Vo((S, w) => {
    u.material.color.setHex(w.nodePoint);
  }), u.frustumCulled = false, R.derive(() => {
    e.nodes.val && u.geometry.setAttribute("position", new gt(i.val.flat(), 3));
  }), R.derive(() => {
    if (x.val, i.val, !e.nodes.rawVal) return;
    const S = i.rawVal ?? [];
    let w = e.gridSize.val * 0.5;
    if (S.length >= 2) {
      const M = [1 / 0, 1 / 0, 1 / 0], k = [-1 / 0, -1 / 0, -1 / 0];
      for (const F of S) for (let b = 0; b < 3; b++) M[b] = Math.min(M[b], F[b]), k[b] = Math.max(k[b], F[b]);
      w = Math.max(k[0] - M[0], k[1] - M[1], k[2] - M[2], 0.1);
    }
    const m = 0.03 * w;
    u.material.size = m * x.rawVal;
  }), R.derive(() => {
    u.visible = e.nodes.val;
  }), u;
}
function qn(e, i) {
  const x = en(), h = new Je();
  h.name = "hekatan-grid";
  const u = (i == null ? void 0 : i.planes) ?? ["xy"];
  let S = (i == null ? void 0 : i.majorStep) ?? 1, w = (i == null ? void 0 : i.minorStep) ?? 0.1;
  for (S <= 0 && (S = 1), w <= 0 && (w = 0.1); e / w > 500; ) w *= 2;
  for (; e / S > 100; ) S *= 2;
  const m = e / 2;
  S = Math.max(w, Math.round(S / w) * w);
  const k = new It(x.grid), F = new It(x.grid).multiplyScalar(0.45), b = (Q, g, O, de) => {
    const Se = [], Me = Q === "xy" ? (C, L) => [C, L, 0] : Q === "xz" ? (C, L) => [C, 0, L] : (C, L) => [0, C, L], K = Math.floor(m / g);
    for (let C = -K; C <= K; C++) {
      const L = C * g, E = Me(L, -m), A = Me(L, m);
      Se.push(...E, ...A);
    }
    for (let C = -K; C <= K; C++) {
      const L = C * g, E = Me(-m, L), A = Me(m, L);
      Se.push(...E, ...A);
    }
    const Y = new he();
    Y.setAttribute("position", new gt(Se, 3));
    const N = new lt({ color: O, transparent: true, opacity: de, depthWrite: false }), V = new Xt(Y, N);
    return V.name = `grid-${Q}-${g === w ? "minor" : "major"}`, V;
  }, U = (Q, g, O) => {
    const de = Q === "xy" ? (V, C) => [V, C, 0] : Q === "xz" ? (V, C) => [V, 0, C] : (V, C) => [0, V, C], Se = [[-m, -m], [m, -m], [m, m], [-m, m]], Me = [];
    for (const [V, C] of Se) Me.push(...de(V, C));
    const K = new he();
    K.setAttribute("position", new gt(Me, 3));
    const Y = new lt({ color: g, transparent: true, opacity: O, depthWrite: false }), N = new Ao(K, Y);
    return N.name = `grid-${Q}-border`, N.renderOrder = 1, N;
  }, pe = (Q, g, O) => {
    const de = Q === "xy" ? (Y, N) => [Y, N, 0] : Q === "xz" ? (Y, N) => [Y, 0, N] : (Y, N) => [0, Y, N], Se = g === "u" ? [...de(-m, 0), ...de(m, 0)] : [...de(0, -m), ...de(0, m)], Me = new he();
    Me.setAttribute("position", new gt(Se, 3));
    const K = new Xt(Me, new lt({ color: O, transparent: true, opacity: 0.45, depthWrite: false }));
    return K.name = `grid-${Q}-eje-${g}`, K.renderOrder = 1, K;
  }, ie = { xy: [14042459, 5155178], xz: [14042459, 4882390], yz: [5155178, 4882390] };
  for (const Q of u) {
    h.add(b(Q, w, F, 0.12)), h.add(b(Q, S, k, 0.4));
    const [g, O] = ie[Q];
    h.add(pe(Q, "u", g)), h.add(pe(Q, "v", O)), h.add(U(Q, k, 0.55));
  }
  return h.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: S, minorStep: w, gridSize: e, planes: [...u] }, h;
}
function ws(e, i, x, h) {
  const u = new Je(), S = new jo(0.5, 0.5, 0.5), w = new es(0.45, 0.7, 4);
  w.rotateX(Math.PI / 2), w.translate(0, 0, -0.35);
  const m = new Oe({ color: 10166822 }), M = new Oe({ color: 2792847 }), k = new Oe({ color: 3835647 }), F = () => {
    const pe = x.rawVal ?? [];
    if (pe.length < 2) return i.gridSize.val * 0.5;
    let ie = [1 / 0, 1 / 0, 1 / 0], Q = [-1 / 0, -1 / 0, -1 / 0];
    for (const g of pe) for (let O = 0; O < 3; O++) g[O] < ie[O] && (ie[O] = g[O]), g[O] > Q[O] && (Q[O] = g[O]);
    return Math.max(Q[0] - ie[0], Q[1] - ie[1], Q[2] - ie[2], 0.1);
  }, b = () => 0.08 * F(), U = () => h.rawVal;
  return R.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, !i.supports.val) return;
    u.clear();
    const pe = b();
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((ie, Q) => {
      const g = x.val[Q];
      if (!g) return;
      const O = ie ?? [], de = (O[0] ? 1 : 0) + (O[1] ? 1 : 0) + (O[2] ? 1 : 0), Se = (O[3] ? 1 : 0) + (O[4] ? 1 : 0) + (O[5] ? 1 : 0);
      let Me;
      de >= 3 && Se >= 3 ? Me = new We(S, m) : de >= 3 && Se === 0 ? Me = new We(w, M) : Me = new We(w, k), Me.position.set(g[0], g[1], g[2]);
      const K = pe * U();
      Me.scale.set(K, K, K), u.add(Me);
    });
  }), R.derive(() => {
    if (h.val, !i.supports.rawVal) return;
    const ie = b() * U();
    u.children.forEach((Q) => Q.scale.set(ie, ie, ie));
  }), R.derive(() => {
    u.visible = i.supports.val;
  }), u;
}
function ys(e, i, x, h) {
  const u = new Je();
  u.name = "loadsGroup";
  function S(w) {
    if (w.length < 2) return 0.12 * i.gridSize.rawVal;
    const m = [1 / 0, 1 / 0, 1 / 0], M = [-1 / 0, -1 / 0, -1 / 0];
    for (const F of w) for (let b = 0; b < 3; b++) m[b] = Math.min(m[b], F[b]), M[b] = Math.max(M[b], F[b]);
    return 0.08 * Math.max(M[0] - m[0], M[1] - m[1], M[2] - m[2], 0.1);
  }
  return R.derive(() => {
    var _a, _b, _c;
    if (i.deformedShape.val, !i.loads.val) return;
    u.children.forEach((b) => b.dispose()), u.clear();
    const w = x.val, m = S(w), M = 240, k = [];
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((b, U) => {
      w[U] && b.slice(0, 3).some((pe) => Math.abs(pe) > 1e-15) && k.push(U);
    });
    let F = k;
    if (k.length > M) {
      const b = k.map((V) => w[V][0]), U = k.map((V) => w[V][1]), pe = Math.min(...b), ie = Math.max(...b), Q = Math.min(...U), g = Math.max(...U), O = k.map((V) => w[V][2]), de = Math.max(1e-6, (Math.max(...O) - Math.min(...O)) / 40), Se = (V) => Math.round(V / de), Me = new Set(O.map(Se)), K = Math.max(4, Math.floor(M / Math.max(1, Me.size))), Y = Math.max(2, Math.round(Math.sqrt(K))), N = /* @__PURE__ */ new Map();
      for (const V of k) {
        const C = ie - pe < 1e-9 ? 0 : (w[V][0] - pe) / (ie - pe), L = g - Q < 1e-9 ? 0 : (w[V][1] - Q) / (g - Q), E = Math.min(Y - 1, Math.floor(C * Y)), A = Math.min(Y - 1, Math.floor(L * Y)), W = `${E},${A},${Se(w[V][2])}`, oe = Math.hypot(C * Y - (E + 0.5), L * Y - (A + 0.5)), ee = N.get(W);
        (!ee || oe < ee.d) && N.set(W, { i: V, d: oe });
      }
      F = [...N.values()].map((V) => V.i);
    }
    for (const b of F) {
      const U = e.nodeInputs.val.loads.get(b), pe = w[b];
      if (!pe) continue;
      const ie = new y(...U.slice(0, 3));
      if (ie.lengthSq() < 1e-30) continue;
      ie.normalize();
      const Q = new jt(ie, new y(...pe), 1, 15637248, 0.3, 0.3), g = m * h.rawVal;
      Q.scale.set(g, g, g), u.add(Q);
    }
  }), R.derive(() => {
    if (h.val, !i.loads.rawVal) return;
    const m = S(x.rawVal) * h.rawVal;
    u.children.forEach((M) => M.scale.set(m, m, m));
  }), R.derive(() => {
    u.visible = i.loads.val;
  }), u;
}
function xs(e, i, x) {
  const h = new Je();
  return R.derive(() => {
    if (!e.nodesIndexes.val) return;
    h.children.forEach((S) => S.dispose()), h.clear();
    const u = 0.05 * e.gridSize.val * 0.6;
    i.val.forEach((S, w) => {
      const m = new xt(`${w}`);
      m.position.set(...S), m.updateScale(u * x.rawVal), h.add(m);
    });
  }), R.derive(() => {
    if (x.val, !e.nodesIndexes.rawVal) return;
    const u = 0.05 * e.gridSize.val * 0.6;
    h.children.forEach((S) => S.updateScale(u * x.rawVal));
  }), R.derive(() => {
    h.visible = e.nodesIndexes.val;
  }), h;
}
function gs(e, i, x, h) {
  const u = new Je();
  return R.derive(() => {
    var _a;
    if (i.deformedShape.val, !i.elementsIndexes.val) return;
    u.children.forEach((w) => w.dispose()), u.clear();
    const S = 0.05 * i.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((w, m) => {
      const M = new xt(`${m}`, void 0, "#001219");
      M.position.set(...vs(w.map((k) => x.rawVal[k]))), M.updateScale(S * h.rawVal), u.add(M);
    });
  }), R.derive(() => {
    if (h.val, !i.elementsIndexes.rawVal) return;
    const S = 0.05 * i.gridSize.val * 0.6;
    u.children.forEach((w) => w.updateScale(S * h.rawVal));
  }), R.derive(() => {
    u.visible = i.elementsIndexes.val;
  }), u;
}
function vs(e) {
  const i = e.reduce((h, u) => [h[0] + u[0], h[1] + u[1], h[2] + u[2]], [0, 0, 0]), x = e.length;
  return [i[0] / x, i[1] / x, i[2] / x];
}
function ko(e, i) {
  const x = new Je(), h = Math.min(0.05 * e, 0.6), u = en(), S = new xt("X", "red", "transparent"), w = new xt(i ? "Z" : "Y", "green", "transparent"), m = new xt(i ? "Y" : "Z", "blue", "transparent"), M = new jt(new y(1, 0, 0), new y(0, 0, 0), 1, u.axisArrow, 0.2, 0.2), k = new jt(new y(0, 1, 0), new y(0, 0, 0), 1, u.axisArrow, 0.2, 0.2), F = new jt(new y(0, 0, 1), new y(0, 0, 0), 1, u.axisArrow, 0.2, 0.2);
  return S.position.set(1.3 * h, 0, 0), w.position.set(0, 1.3 * h, 0), m.position.set(0, 0, 1.3 * h), S.updateScale(0.4 * h), w.updateScale(0.4 * h), m.updateScale(0.4 * h), M.scale.set(h, h, h), k.scale.set(h, h, h), F.scale.set(h, h, h), x.add(M, k, F, S, w, m), x;
}
function jn(e, i) {
  const x = new y(...e), u = new y(...i).clone().sub(x), S = u.length(), w = u.dot(new y(1, 0, 0)) / S, m = u.dot(new y(0, 1, 0)) / S, M = u.dot(new y(0, 0, 1)) / S, k = Math.sqrt(w ** 2 + m ** 2);
  let F = new Kn().fromArray([[w, m, M], [-m / k, w / k, 0], [-w * M / k, -m * M / k, k]].flat());
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
  const h = gn([i, x]), u = gn([e, x]), S = gn([e, i]), w = new y(...h).sub(new y(...u)).normalize(), m = new y(...x).sub(new y(...S)).normalize(), M = w.clone().cross(m).normalize(), k = M.clone().cross(w).normalize();
  return new To().makeBasis(w, k, M);
}
function bs(e, i, x, h) {
  const u = new Je(), S = new he(), w = new lt({ vertexColors: true }), m = [0, 0, 0], M = [1, 0, 0], k = [0, 1, 0], F = [0, 0, 1];
  S.setAttribute("position", new gt([...m, ...M, ...m, ...k, ...m, ...F], 3));
  const b = [255, 0, 0], U = [0, 255, 0], pe = [0, 0, 255];
  return S.setAttribute("color", new gt([...b, ...b, ...U, ...U, ...pe, ...pe], 3)), R.derive(() => {
    var _a;
    i.deformedShape.val, i.orientations.val && (u.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((ie) => {
      const Q = new Xt(S, w), g = x.rawVal[ie[0]], O = x.rawVal[ie[1]];
      if (ie.length === 2 && (Q.position.set(...Qn(g, O)), Q.rotation.setFromRotationMatrix(jn(g, O))), ie.length === 3) {
        const Me = x.rawVal[ie[2]];
        Q.position.set(...gn([g, O, Me])), Q.rotation.setFromRotationMatrix(Ms(g, O, Me));
      }
      const Se = 0.05 * i.gridSize.rawVal * 0.75 * h.rawVal;
      Q.scale.set(Se, Se, Se), u.add(Q);
    }));
  }), R.derive(() => {
    if (h.val, !i.orientations.rawVal) return;
    const Q = 0.05 * i.gridSize.val * 0.75 * h.rawVal;
    u.children.forEach((g) => g.scale.set(Q, Q, Q));
  }), R.derive(() => {
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
  const u = new Je(), S = new Je();
  u.add(S);
  function w(Y, N) {
    const V = Y / 2, C = N / 2, L = new Float32Array([0, -V, -C, 0, V, -C, 0, V, C, 0, -V, -C, 0, V, C, 0, -V, C]), E = new he();
    E.setAttribute("position", new it(L, 3));
    const A = new Float32Array([0, -V, -C, 0, V, -C, 0, V, C, 0, -V, C, 0, -V, -C]), W = new he();
    return W.setAttribute("position", new it(A, 3)), { fill: E, outline: W };
  }
  function m(Y, N = 24) {
    const V = Y / 2, C = new Float32Array(N * 9);
    for (let W = 0; W < N; W++) {
      const oe = W / N * Math.PI * 2, ee = (W + 1) / N * Math.PI * 2;
      C[W * 9] = 0, C[W * 9 + 1] = 0, C[W * 9 + 2] = 0, C[W * 9 + 3] = 0, C[W * 9 + 4] = V * Math.cos(oe), C[W * 9 + 5] = V * Math.sin(oe), C[W * 9 + 6] = 0, C[W * 9 + 7] = V * Math.cos(ee), C[W * 9 + 8] = V * Math.sin(ee);
    }
    const L = new he();
    L.setAttribute("position", new it(C, 3));
    const E = new Float32Array((N + 1) * 3);
    for (let W = 0; W <= N; W++) {
      const oe = W / N * Math.PI * 2;
      E[W * 3] = 0, E[W * 3 + 1] = V * Math.cos(oe), E[W * 3 + 2] = V * Math.sin(oe);
    }
    const A = new he();
    return A.setAttribute("position", new it(E, 3)), { fill: L, outline: A };
  }
  function M(Y, N, V, C) {
    const L = V ?? N * 0.08, E = C ?? Y * 0.07, A = Y / 2, W = N / 2, oe = W - L, ee = E / 2, q = [];
    function T(re, Pe, ue, Fe) {
      q.push(0, re, Pe, 0, ue, Pe, 0, ue, Fe, 0, re, Pe, 0, ue, Fe, 0, re, Fe);
    }
    T(-A, -W, A, -oe), T(-ee, -oe, ee, oe), T(-A, oe, A, W);
    const ae = new he();
    ae.setAttribute("position", new it(new Float32Array(q), 3));
    const J = new Float32Array([0, -A, -W, 0, A, -W, 0, A, -oe, 0, ee, -oe, 0, ee, oe, 0, A, oe, 0, A, W, 0, -A, W, 0, -A, oe, 0, -ee, oe, 0, -ee, -oe, 0, -A, -oe, 0, -A, -W]), me = new he();
    return me.setAttribute("position", new it(J, 3)), { fill: ae, outline: me };
  }
  function k(Y, N, V) {
    const C = Y / 2, L = N / 2, E = C - V, A = L - V, W = [];
    function oe(ae, J, me, re) {
      W.push(0, ae, J, 0, me, J, 0, me, re, 0, ae, J, 0, me, re, 0, ae, re);
    }
    oe(-C, -L, C, -A), oe(-C, A, C, L), oe(-C, -A, -E, A), oe(E, -A, C, A);
    const ee = new he();
    ee.setAttribute("position", new it(new Float32Array(W), 3));
    const q = new Float32Array([0, -C, -L, 0, C, -L, 0, C, -L, 0, C, L, 0, C, L, 0, -C, L, 0, -C, L, 0, -C, -L, 0, -E, -A, 0, E, -A, 0, E, -A, 0, E, A, 0, E, A, 0, -E, A, 0, -E, A, 0, -E, -A]), T = new he();
    return T.setAttribute("position", new it(q, 3)), { fill: ee, outline: T };
  }
  function F(Y, N, V) {
    const C = Y / 2, L = N / 2, E = C - V, A = L - V, W = new he(), oe = new Float32Array([0, -E, -A, 0, E, -A, 0, E, A, 0, -E, -A, 0, E, A, 0, -E, A]);
    W.setAttribute("position", new it(oe, 3));
    const ee = [];
    function q(me, re, Pe, ue) {
      ee.push(0, me, re, 0, Pe, re, 0, Pe, ue, 0, me, re, 0, Pe, ue, 0, me, ue);
    }
    q(-C, -L, C, -A), q(-C, A, C, L), q(-C, -A, -E, A), q(E, -A, C, A);
    const T = new he();
    T.setAttribute("position", new it(new Float32Array(ee), 3));
    const ae = new Float32Array([0, -C, -L, 0, C, -L, 0, C, -L, 0, C, L, 0, C, L, 0, -C, L, 0, -C, L, 0, -C, -L, 0, -E, -A, 0, E, -A, 0, E, -A, 0, E, A, 0, E, A, 0, -E, A, 0, -E, A, 0, -E, -A]), J = new he();
    return J.setAttribute("position", new it(ae, 3)), { concFill: W, steelFillGeom: T, outline: J };
  }
  function b(Y, N, V) {
    const C = [], L = [[0, -Y / 2, -N / 2], [0, -Y / 2 + V, -N / 2], [0, -Y / 2 + V, N / 2 - V], [0, Y / 2, N / 2 - V], [0, Y / 2, N / 2], [0, -Y / 2, N / 2]], E = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const ee of E) C.push(...L[ee]);
    const A = new he();
    A.setAttribute("position", new it(new Float32Array(C), 3));
    const W = [];
    for (let ee = 0; ee < L.length; ee++) {
      const q = (ee + 1) % L.length;
      W.push(...L[ee], ...L[q]);
    }
    const oe = new he();
    return oe.setAttribute("position", new it(new Float32Array(W), 3)), { fill: A, outline: oe };
  }
  function U(Y, N, V, C) {
    const L = C / 2, E = [], A = [[0, -Y - L, -N / 2], [0, -V - L, -N / 2], [0, -V - L, N / 2 - V], [0, -L, N / 2 - V], [0, -L, N / 2], [0, -Y - L, N / 2]], W = [[0, L, -N / 2], [0, L + V, -N / 2], [0, L + V, N / 2 - V], [0, Y + L, N / 2 - V], [0, Y + L, N / 2], [0, L, N / 2]], oe = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const ae of oe) E.push(...A[ae]);
    for (const ae of oe) E.push(...W[ae]);
    const ee = new he();
    ee.setAttribute("position", new it(new Float32Array(E), 3));
    const q = [];
    for (const ae of [A, W]) for (let J = 0; J < ae.length; J++) {
      const me = (J + 1) % ae.length;
      q.push(...ae[J], ...ae[me]);
    }
    const T = new he();
    return T.setAttribute("position", new it(new Float32Array(q), 3)), { fill: ee, outline: T };
  }
  function pe(Y, N, V, C) {
    const L = N / 2, E = Y, A = [[0, -E, -L], [0, -E, -L + V], [0, -C, -L + V], [0, -C, L - V], [0, -E, L - V], [0, -E, L], [0, 0, L], [0, 0, -L]], W = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], oe = [];
    for (const ae of W) oe.push(...A[ae]);
    const ee = new he();
    ee.setAttribute("position", new it(new Float32Array(oe), 3));
    const q = [];
    for (let ae = 0; ae < A.length; ae++) {
      const J = (ae + 1) % A.length;
      q.push(...A[ae], ...A[J]);
    }
    const T = new he();
    return T.setAttribute("position", new it(new Float32Array(q), 3)), { fill: ee, outline: T };
  }
  function ie(Y, N, V, C, L) {
    const E = N / 2, A = L / 2, W = [], oe = [[0, -Y, -E], [0, -Y, -E + V], [0, -A - C, -E + V], [0, -A - C, E - V], [0, -Y, E - V], [0, -Y, E], [0, -A, E], [0, -A, -E]], ee = oe.map((me) => [me[0], -me[1], me[2]]), q = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const me of q) W.push(...oe[me]);
    for (const me of q) W.push(...ee[me]);
    const T = new he();
    T.setAttribute("position", new it(new Float32Array(W), 3));
    const ae = [];
    for (const me of [oe, ee]) for (let re = 0; re < me.length; re++) {
      const Pe = (re + 1) % me.length;
      ae.push(...me[re], ...me[Pe]);
    }
    const J = new he();
    return J.setAttribute("position", new it(new Float32Array(ae), 3)), { fill: T, outline: J };
  }
  function Q(Y, N, V, C) {
    const L = Y / 2, E = N / 2, A = C / 2, W = [[0, -A, -E], [0, A, -E], [0, A, E - V], [0, L, E - V], [0, L, E], [0, -L, E], [0, -L, E - V], [0, -A, E - V]], oe = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], ee = [];
    for (const J of oe) ee.push(...W[J]);
    const q = new he();
    q.setAttribute("position", new it(new Float32Array(ee), 3));
    const T = [];
    for (let J = 0; J < W.length; J++) {
      const me = (J + 1) % W.length;
      T.push(...W[J], ...W[me]);
    }
    const ae = new he();
    return ae.setAttribute("position", new it(new Float32Array(T), 3)), { fill: q, outline: ae };
  }
  function g(Y, N, V = 24) {
    const C = Y / 2, L = C - N, E = [];
    for (let ee = 0; ee < V; ee++) {
      const q = ee / V * Math.PI * 2, T = (ee + 1) / V * Math.PI * 2, ae = Math.cos(q), J = Math.sin(q), me = Math.cos(T), re = Math.sin(T);
      E.push(0, C * ae, C * J, 0, C * me, C * re, 0, L * me, L * re), E.push(0, C * ae, C * J, 0, L * me, L * re, 0, L * ae, L * J);
    }
    const A = new he();
    A.setAttribute("position", new it(new Float32Array(E), 3));
    const W = [];
    for (let ee = 0; ee < V; ee++) {
      const q = ee / V * Math.PI * 2, T = (ee + 1) / V * Math.PI * 2;
      W.push(0, C * Math.cos(q), C * Math.sin(q), 0, C * Math.cos(T), C * Math.sin(T)), W.push(0, L * Math.cos(q), L * Math.sin(q), 0, L * Math.cos(T), L * Math.sin(T));
    }
    const oe = new he();
    return oe.setAttribute("position", new it(new Float32Array(W), 3)), { fill: A, outline: oe };
  }
  const O = new Oe({ color: 52479, transparent: true, opacity: 0.35, side: Ft, depthWrite: false }), de = new lt({ color: 52479 }), Se = new Oe({ color: 16750848, transparent: true, opacity: 0.4, side: Ft, depthWrite: false }), Me = new lt({ color: 16750848 });
  function K(Y, N) {
    const V = Math.abs(N[0] - Y[0]), C = Math.abs(N[1] - Y[1]), L = Math.abs(N[2] - Y[2]);
    return L > V && L > C || C > V && C > L;
  }
  return R.derive(() => {
    var _a, _b;
    i.deformedShape.val, i.secColumns.val, i.secBeams.val, i.secFloor.val;
    const Y = i.secColumns.rawVal, N = i.secBeams.rawVal;
    if (!Y && !N) {
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
    const L = C.sectionShapes, E = i.secFloor.rawVal;
    V.forEach((A, W) => {
      if (A.length !== 2) return;
      const oe = x.rawVal[A[0]], ee = x.rawVal[A[1]];
      if (!oe || !ee) return;
      const q = K(oe, ee);
      if (q && !Y || !q && !N) return;
      if (E >= 0) {
        const re = Math.min(oe[1], ee[1]);
        Math.max(oe[1], ee[1]);
        const Pe = i.gridSize.rawVal || 3;
        if (Math.floor(re / Pe + 0.01) !== E) return;
      }
      const T = L == null ? void 0 : L.get(W);
      if (!T) return;
      const ae = [(oe[0] + ee[0]) / 2, (oe[1] + ee[1]) / 2, (oe[2] + ee[2]) / 2], J = jn(oe, ee);
      if (T.type === "CFT") {
        const re = F(T.b, T.h, T.tw ?? T.b * 0.05), Pe = new We(re.concFill, O);
        Pe.position.set(...ae), Pe.rotation.setFromRotationMatrix(J), u.add(Pe);
        const ue = new We(re.steelFillGeom, Se);
        ue.position.set(...ae), ue.rotation.setFromRotationMatrix(J), u.add(ue);
        const Fe = new _t(re.outline, Me);
        Fe.position.set(...ae), Fe.rotation.setFromRotationMatrix(J), u.add(Fe);
      } else {
        let re, Pe, ue;
        switch (T.type) {
          case "rect":
            re = w(T.b, T.h), Pe = O, ue = de;
            break;
          case "circ":
            re = m(T.d), Pe = O, ue = de;
            break;
          case "I":
            re = M(T.b, T.h, T.tf, T.tw), Pe = Se, ue = Me;
            break;
          case "HSS":
            re = k(T.b, T.h, T.tw ?? T.b * 0.05), Pe = Se, ue = Me;
            break;
          case "CFT":
            re = F(T.b, T.h, T.tw ?? T.b * 0.05), Pe = Se, ue = Me;
            break;
          case "L":
            re = b(T.b ?? T.h, T.h, T.t ?? T.tw ?? 3e-3), Pe = Se, ue = Me;
            break;
          case "2L":
            re = U(T.b ?? T.h, T.h, T.t ?? T.tw ?? 3e-3, T.dis ?? 0.01), Pe = Se, ue = Me;
            break;
          case "C":
          case "coldC":
            re = pe(T.b, T.h, T.tf ?? T.t ?? 3e-3, T.tw ?? T.t ?? 3e-3), Pe = Se, ue = Me;
            break;
          case "2C":
            re = ie(T.b, T.h, T.tf ?? 5e-3, T.tw ?? 5e-3, T.dis ?? 0.01), Pe = Se, ue = Me;
            break;
          case "T":
            re = Q(T.b, T.h, T.tf ?? 0.01, T.tw ?? 6e-3), Pe = Se, ue = Me;
            break;
          case "pipe":
            re = g(T.d, T.tw ?? T.d * 0.05), Pe = Se, ue = Me;
            break;
          default:
            return;
        }
        const Fe = new We(re.fill, Pe);
        Fe.position.set(...ae), Fe.rotation.setFromRotationMatrix(J), u.add(Fe);
        const nt = new _t(re.outline, ue);
        nt.position.set(...ae), nt.rotation.setFromRotationMatrix(J), u.add(nt);
      }
      const me = _s(T);
      if (me) {
        const Pe = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(T.type) ? "#ff9900" : "#00ccff", ue = new xt(me, Pe, "transparent");
        ue.position.set(ae[0], ae[1], ae[2]);
        const Fe = 0.05 * i.gridSize.rawVal * 0.5;
        ue.updateScale(Fe * ((h == null ? void 0 : h.rawVal) ?? 1)), S.add(ue);
      }
    });
  }), h && R.derive(() => {
    if (h.val, !i.sections.rawVal) return;
    const Y = 0.05 * i.gridSize.val * 0.5;
    S.children.forEach((N) => {
      N instanceof xt && N.updateScale(Y * h.rawVal);
    });
  }), R.derive(() => {
    u.visible = i.sections.val;
  }), R.derive(() => {
    S.visible = i.sectionLabels.val;
  }), u;
}
class Sn extends Je {
  constructor(i, x, h, u, S, w, m) {
    super();
    const M = new Cn().moveTo(0, 0).lineTo(0, w[1]).lineTo(h, w[1]).lineTo(h, 0).lineTo(0, 0), k = M.getPoints(), F = new he().setFromPoints(k);
    this.lines = new _t(F, new lt({ color: en().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(u), m && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const b = new Fn(M), U = new Oe({ color: w[1] > 0 ? 24435 : 11411474, side: Ft });
    this.mesh = new We(b, U), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(u), m && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new xt(`${S[1].toFixed(4)}`), this.normalizedResult = w, this.textPosition = gn([i, x]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(u), this.add(this.text);
  }
  updateScale(i) {
    this.lines.scale.set(1, i * 2, 1), this.mesh.scale.set(1, i * 2, 1), this.text.updateScale(i * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * i);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Po extends Je {
  constructor(i, x, h, u, S, w, m) {
    super();
    const M = S[0] * h / (S[0] + S[1]), k = S[0] * S[1] > 0;
    if (this.text = new xt(`${S[0].toFixed(4)}`), this.text2 = new xt(`${(S[1] * -1).toFixed(4)}`), this.normalizedResult = w, this.textPosition = Qn(i, x), this.text2Position = Qn(x, i), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(u), this.text2.rotation.setFromRotationMatrix(u), this.add(this.text, this.text2), k) {
      const F = new Cn().moveTo(0, 0).lineTo(0, w[0]).lineTo(M, 0).lineTo(0, 0), b = new Cn().moveTo(M, 0).lineTo(h, -w[1]).lineTo(h, 0).lineTo(M, 0), U = F.getPoints(), pe = b.getPoints(), ie = new he().setFromPoints(U), Q = new he().setFromPoints(pe), g = new lt({ color: en().resultOutline });
      this.lines = new _t(ie, g), this.lines2 = new _t(Q, g), this.lines.position.set(...i), this.lines2.position.set(...i), this.lines.rotation.setFromRotationMatrix(u), this.lines2.rotation.setFromRotationMatrix(u), m && this.lines.rotateX(Math.PI / 2), m && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const O = new Fn(F), de = new Fn(b), Se = new Oe({ color: w[0] > 0 ? 24435 : 11411474, side: Ft }), Me = new Oe({ color: -w[1] > 0 ? 24435 : 11411474, side: Ft });
      this.mesh = new We(O, Se), this.mesh2 = new We(de, Me), this.mesh.position.set(...i), this.mesh2.position.set(...i), this.mesh.rotation.setFromRotationMatrix(u), this.mesh2.rotation.setFromRotationMatrix(u), m && this.mesh.rotateX(Math.PI / 2), m && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const F = new Cn().moveTo(0, 0).lineTo(0, w[0]).lineTo(h, -w[1]).lineTo(h, 0).lineTo(0, 0), b = F.getPoints(), U = new he().setFromPoints(b);
      this.lines = new _t(U, new lt({ color: en().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(u), m && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const pe = new Fn(F), ie = new Oe({ color: w[0] > 0 ? 24435 : 11411474, side: Ft });
      this.mesh = new We(pe, ie), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(u), m && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
function ks(e, i, x, h) {
  const u = new Je(), S = { normals: Sn, shearsY: Sn, shearsZ: Sn, torsions: Sn, bendingsY: Po, bendingsZ: Po };
  return R.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, x.val, i.frameResults.val == "none") return;
    u.children.forEach((m) => m.dispose()), u.clear();
    const w = Bo[i.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[w]) == null ? void 0 : _b.forEach((m, M) => {
      var _a2, _b2;
      const k = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[M]) ?? [0, 1], F = x.rawVal[k[0]], b = x.rawVal[k[1]], U = new y(...b).distanceTo(new y(...F)), pe = Ps((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[w]), ie = m == null ? void 0 : m.map((de) => de / (pe === 0 ? 1 : pe)), Q = jn(F, b), g = new S[w](F, b, U, Q, m ?? [0, 0], ie ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(w)), O = 0.05 * i.gridSize.rawVal;
      g.updateScale(O * h.rawVal), u.add(g);
    });
  }), R.derive(() => {
    if (h.val, i.frameResults.rawVal == "none") return;
    const w = 0.05 * i.gridSize.val;
    u.children.forEach((m) => m.updateScale(w * h.rawVal));
  }), R.derive(() => {
    u.visible = i.frameResults.val != "none";
  }), u;
}
function Ps(e) {
  let i = 0;
  return e == null ? void 0 : e.forEach((x) => {
    const h = Math.max(...x ?? [0, 0]);
    h > i && (i = h);
  }), i;
}
class zs extends Je {
  constructor(i, x, h) {
    super();
    const u = x === eo.reactions;
    h[0] && (this.xText1 = new xt(`${u ? "Fx" : "Dx"}: ` + h[0].toFixed(4))), h[3] && (this.xText2 = new xt(`${u ? "Mx" : "Rx"}: ` + h[3].toFixed(4))), h[1] && (this.yText1 = new xt(`${u ? "Fy" : "Dy"}: ` + h[1].toFixed(4))), h[4] && (this.yText2 = new xt(`${u ? "My" : "Ry"}: ` + h[4].toFixed(4))), h[2] && (this.zText1 = new xt(`${u ? "Fz" : "Dz"}: ` + h[2].toFixed(4))), h[5] && (this.zText2 = new xt(`${u ? "Mz" : "Rz"}: ` + h[5].toFixed(4))), (h[0] || h[3]) && (this.xArrow = new jt(new y(1, 0, 0), new y(0, 0, 0), 1, 15637248, 0.3, 0.3)), (h[1] || h[4]) && (this.yArrow = new jt(new y(0, 1, 0), new y(0, 0, 0), 1, 15637248, 0.3, 0.3)), (h[2] || h[5]) && (this.zArrow = new jt(new y(0, 0, 1), new y(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...i), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
  const u = new Je();
  return R.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, i.nodeResults.val == "none") return;
    u.children.forEach((m) => m.dispose()), u.clear();
    const S = eo[i.nodeResults.rawVal], w = 0.05 * i.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[S]) == null ? void 0 : _b.forEach((m, M) => {
      const k = new zs(x.rawVal[M], S, m ?? [0, 0, 0, 0, 0, 0]);
      k.updateScale(w * h.rawVal), u.add(k);
    });
  }), R.derive(() => {
    if (h.val, i.nodeResults.rawVal == "none") return;
    const S = 0.05 * i.gridSize.val;
    u.children.forEach((w) => w.updateScale(S * h.rawVal));
  }), R.derive(() => {
    u.visible = i.nodeResults.val != "none";
  }), u;
}
function Fs({ drawingObj: e, gridObj: i, scene: x, getActiveCamera: h, controls: u, gridSize: S, derivedDisplayScale: w, rendererElm: m, viewerRender: M }) {
  const k = new ts(), F = new ns(), b = (n) => {
    const o = m.getBoundingClientRect(), a = n.clientX - o.left, t = n.clientY - o.top, r = o.width || 1, s = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const d = r / 2;
      if (a >= d) return F.x = (a - d) / d * 2 - 1, F.y = -(t / s) * 2 + 1, window.__hekatanSplitCamera ?? h();
      F.x = a / d * 2 - 1;
    } else F.x = a / r * 2 - 1;
    return F.y = -(t / s) * 2 + 1, h();
  }, U = new We(new Gt(1e4, 1e4), new Oe({ side: Ft, transparent: true, opacity: 0, depthWrite: false }));
  U.visible = true, U.frustumCulled = false, x.add(U);
  const pe = (n, o, a) => {
    const t = new We(new Gt(1e4, 1e4), new Oe({ side: Ft, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, a), t.visible = false, t.frustumCulled = false, x.add(t), t;
  }, ie = pe(Math.PI / 2, 0, 0), Q = pe(0, Math.PI / 2, 0);
  let g = false;
  const O = () => {
    if (g) return k.intersectObjects([U], false);
    if (ie.visible = !!window.__hekatanGridPlaneXZ, Q.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanOrthoRaycast === true && Ae.visible) {
      const a = k.intersectObjects([Ae, $e, Re], false);
      if (a.length > 0) return a;
    }
    const o = [U];
    return ie.visible && o.push(ie), Q.visible && o.push(Q), Rt.visible && Yt.length > 0 && o.push(...Yt), k.intersectObjects(o, false);
  }, de = new Pn(new he(), new zn()), Se = new Pn(new he(), new zn({ color: "gray", sizeAttenuation: false, size: 6 })), Me = new Pn(new he(), new zn({ color: "orange", size: 0.1 }));
  x.add(Me);
  const K = document.createElement("input");
  K.id = "hk-rubber-label", K.type = "text", K.spellcheck = false, K.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, K.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none", "pointer-events:none"].join(";") + ";", document.body.appendChild(K);
  let Y = null, N = null, V = false;
  const C = new y(), L = (n, o, a, t, r, s) => {
    const l = t - n, d = r - o, p = s - a, v = Math.hypot(l, d, p);
    if (v < 0.01) {
      K.style.display = "none";
      return;
    }
    Y = [n, o, a], N = [l / v, d / v, p / v], C.set((n + t) / 2, (o + r) / 2, (a + s) / 2), C.project(h());
    const _ = m.getBoundingClientRect(), c = _.left + (C.x * 0.5 + 0.5) * _.width, f = _.top + (-C.y * 0.5 + 0.5) * _.height;
    if (K.style.left = c + "px", K.style.top = f + "px", K.style.display = "block", !V) {
      if (K.value = `${v.toFixed(2)} m`, document.activeElement !== K) {
        const P = document.activeElement;
        P && (P.tagName === "INPUT" || P.tagName === "TEXTAREA") && P !== K || K.focus({ preventScroll: true });
      }
      try {
        K.select();
      } catch {
      }
    }
  }, E = () => {
    K.style.display = "none", Y = null, N = null, V = false, document.activeElement === K && K.blur();
  }, A = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      Mt = n, le(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), K.blur();
      return;
    }
    if (!Y || !N || !e.polylines) return;
    let a = N[0], t = N[1], r = N[2];
    je === "x" ? (a = Math.sign(a) || 1, t = 0, r = 0) : je === "y" ? (a = 0, t = Math.sign(t) || 1, r = 0) : je === "z" && (a = 0, t = 0, r = Math.sign(r) || 1);
    const s = Y[0] + a * n, l = Y[1] + t * n, d = Y[2] + r * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [s, l, d]];
    const p = e.polylines.rawVal, v = p.length ? p[p.length - 1] : [];
    e.polylines.val = [...p.slice(0, -1), [...v, e.points.rawVal.length - 1]], K.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    M();
  }, W = (n) => {
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
    if (n.kind === "relCart") return Y ? [Y[0] + n.dx, Y[1] + n.dy, Y[2] + n.dz] : null;
    if (n.kind === "absPolar") {
      const o = n.ang * Math.PI / 180;
      return [n.L * Math.cos(o), n.L * Math.sin(o), 0];
    }
    if (n.kind === "relPolar") {
      if (!Y) return null;
      const o = n.ang * Math.PI / 180;
      return [Y[0] + n.L * Math.cos(o), Y[1] + n.L * Math.sin(o), Y[2]];
    }
    if (n.kind === "relSpherical") {
      if (!Y) return null;
      const o = n.az * Math.PI / 180, a = n.el * Math.PI / 180, t = n.L * Math.cos(a);
      return [Y[0] + t * Math.cos(o), Y[1] + t * Math.sin(o), Y[2] + n.L * Math.sin(a)];
    }
    return null;
  }, ee = (n) => {
    var _a;
    if (!e.polylines) return;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, n];
    const o = e.polylines.rawVal, a = o.length ? o[o.length - 1] : [];
    e.polylines.val = [...o.slice(0, -1), [...a, e.points.rawVal.length - 1]], K.blur();
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    M();
  };
  window.__hekatanTypeCoord = (n) => {
    var _a, _b, _c, _d;
    const o = W(n);
    if (!o) return false;
    if (o.kind === "length") return A(o.L), true;
    const a = oe(o);
    if (!a) return false;
    if (ee(a), ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "area" && e.polylines) {
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
      const a = W(K.value);
      if (!a) return;
      if (V = false, a.kind === "length") A(a.L), le(`\u270F DDE ${a.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = oe(a);
        if (!t) return;
        ee(t);
        const r = a.kind;
        le(`\u270F ${r} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
      }
      return;
    }
    if (n.key === "Escape") {
      n.preventDefault(), V = false, K.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!V && K.style.display === "block") try {
          K.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && (V = true);
  }), window.addEventListener("keydown", (n) => {
    if (!Y || !N || document.activeElement === K) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (K.value = n.key, K.focus(), K.setSelectionRange(1, 1), n.preventDefault());
  });
  const q = document.createElement("div");
  q.id = "hk-coord-readout", q.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", q.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(q);
  const T = document.createElement("div");
  T.id = "hk-coord-fixed", T.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", T.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(T);
  const ae = new _t(new he().setFromPoints([new y(0, 0, 0), new y(0, 0, 0)]), new yn({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  ae.frustumCulled = false, ae.visible = false, x.add(ae);
  const J = new _t(new he(), new lt({ color: 2282478, transparent: true, opacity: 0.9 }));
  J.frustumCulled = false, J.visible = false, x.add(J);
  let me = [];
  const re = new Je(), Pe = new We(new Gt(1, 1), new Oe({ color: 2282478, transparent: true, opacity: 0.08, side: Ft, depthWrite: false })), ue = new Xt(new yo(new Gt(1, 1)), new lt({ color: 2282478, transparent: true, opacity: 0.85 })), Fe = new Xt(new he(), new lt({ color: 2282478, transparent: true, opacity: 0.3 })), nt = (n, o) => {
    const a = [], t = Math.ceil(n / o);
    for (let r = -t; r <= t; r++) {
      const s = r * o;
      a.push(-n, s, 0, n, s, 0), a.push(s, -n, 0, s, n, 0);
    }
    Fe.geometry.dispose(), Fe.geometry = new he(), Fe.geometry.setAttribute("position", new gt(a, 3));
  };
  re.add(Pe, ue, Fe), re.visible = false, re.frustumCulled = false, x.add(re);
  const ot = new Je();
  ot.frustumCulled = false, ot.visible = false, x.add(ot);
  const j = (n) => {
    const o = new he().setFromPoints([new y(0, 0, 0), new y(0, 0, 0)]), a = new yn({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new _t(o, a);
  }, z = j(16711680), B = j(65280), $ = j(35071);
  ot.add(z, B, $);
  const H = (n) => {
    const o = new he().setFromPoints([new y(0, 0, 0), new y(0, 0, 0), new y(0, 0, 0), new y(0, 0, 0)]), a = new lt({ color: n, transparent: true, opacity: 0.2, depthTest: false }), t = new Ao(o, a);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, te = H(3462041), xe = H(16724804), we = H(6333946), ke = new Je();
  ke.frustumCulled = false, ke.visible = false, x.add(ke), ke.add(te, xe, we);
  const Ve = (n) => {
    const o = new Gt(1, 1), a = new Oe({ color: n, transparent: true, opacity: 0.06, side: Ft, depthWrite: false }), t = new We(o, a);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, Ae = Ve(3462041), $e = Ve(16724804), Re = Ve(6333946);
  ke.add(Ae, $e, Re);
  const Ge = (n, o, a, t) => {
    n.scale.set(2 * t, 2 * t, 1), a === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : a === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, ze = document.createElement("div");
  ze.id = "hk-refplane-badge", ze.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(ze), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, ke.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0], l = window.__hekatanOrthoExt ?? 8;
      Ze(te, s, "xy", l), Ze(xe, s, "xz", l), Ze(we, s, "yz", l), Ge(Ae, s, "xy", l), Ge($e, s, "xz", l), Ge(Re, s, "yz", l), Ae.material.opacity = 0.05, $e.material.opacity = 0.05, Re.material.opacity = 0.05;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    M();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !ke.visible) {
      M();
      return;
    }
    const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0];
    Ze(te, s, "xy", n), Ze(xe, s, "xz", n), Ze(we, s, "yz", n), Ge(Ae, s, "xy", n), Ge($e, s, "xz", n), Ge(Re, s, "yz", n), M();
  };
  const rt = (n) => {
    if (Ae.material.opacity = n === "xy" ? 0.09 : 0.025, $e.material.opacity = n === "xz" ? 0.09 : 0.025, Re.material.opacity = n === "yz" ? 0.09 : 0.025, n) {
      const r = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      ze.style.background = r.bg, ze.style.color = r.text, ze.textContent = `\u25A6 Plano ${n.toUpperCase()}`, ze.style.display = "block";
    } else ze.style.display = "none";
  }, Ze = (n, o, a, t) => {
    let r;
    a === "xy" ? r = [new y(o[0] - t, o[1] - t, o[2]), new y(o[0] + t, o[1] - t, o[2]), new y(o[0] + t, o[1] + t, o[2]), new y(o[0] - t, o[1] + t, o[2]), new y(o[0] - t, o[1] - t, o[2])] : a === "xz" ? r = [new y(o[0] - t, o[1], o[2] - t), new y(o[0] + t, o[1], o[2] - t), new y(o[0] + t, o[1], o[2] + t), new y(o[0] - t, o[1], o[2] + t), new y(o[0] - t, o[1], o[2] - t)] : r = [new y(o[0], o[1] - t, o[2] - t), new y(o[0], o[1] + t, o[2] - t), new y(o[0], o[1] + t, o[2] + t), new y(o[0], o[1] - t, o[2] + t), new y(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(r);
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
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== K) return;
    const a = n.key.toLowerCase(), t = (_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool;
    if (n.key === "Enter" && t === "polyarea" && me.length >= 3) {
      const r = cn();
      le(`\u2713 \xC1rea libre mallada \u2014 ${r} shells Q4 creados.`), n.preventDefault();
      return;
    }
    if (a === "x" || a === "y" || a === "z") je = je === a ? null : a, Lt(), n.preventDefault();
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
  const Xe = new y(), Te = new y(), be = new y(), Ye = (n) => {
    if (!je) return null;
    const o = n[0], a = n[1], t = n[2];
    return je === "x" ? (Xe.set(o - 1e4, a, t), Te.set(o + 1e4, a, t)) : je === "y" ? (Xe.set(o, a - 1e4, t), Te.set(o, a + 1e4, t)) : (Xe.set(o, a, t - 1e4), Te.set(o, a, t + 1e4)), k.ray.distanceSqToSegment(Xe, Te, null, be), be;
  };
  window.__hekatanProjectOnAxis = Ye;
  const ce = new _t(new he().setFromPoints([new y(0, 0, 0), new y(0, 0, 0)]), new lt({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  ce.renderOrder = 998, ce.frustumCulled = false, ce.visible = false, x.add(ce);
  let Ne = -1, Ke = -1, dt = -1;
  const ye = /* @__PURE__ */ new Set();
  window.__hekatanSelection = ye;
  const Le = new _t(new he().setFromPoints([new y(), new y()]), new lt({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  Le.renderOrder = 997, Le.frustumCulled = false, Le.visible = false, x.add(Le);
  const He = new We(new rn(0.02, 12, 12), new Oe({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  He.renderOrder = 998, He.visible = false, x.add(He);
  const pt = (n) => {
    const o = h();
    if (o.isOrthographicCamera) {
      const t = o, r = (t.top - t.bottom) / t.zoom;
      return Math.max(0.05, r * 6e-3);
    }
    const a = o.position.distanceTo(n);
    return Math.max(0.05, a / 10);
  }, Dt = () => {
    He.visible && He.scale.setScalar(pt(He.position));
  }, ft = new Je();
  ft.frustumCulled = false, x.add(ft);
  const Pt = 2282478;
  let tt = null;
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
  }, Bt = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    for (; ft.children.length; ) {
      const l = ft.children.pop();
      (_b = (_a = l.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = l.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e = e.points) == null ? void 0 : _e.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const l of ye) {
      const [d, ...p] = l.split(":");
      if (d === "pt") {
        const v = n[+p[0]];
        if (!v) continue;
        const _ = new We(new rn(0.025, 12, 12), new Oe({ color: Pt, transparent: true, opacity: 0.9, depthTest: false }));
        _.position.set(v[0], v[1], v[2]), _.renderOrder = 999, _.__isSelectionPt = true, ft.add(_);
      } else if (d === "seg") {
        const v = o[+p[0]], _ = n[v == null ? void 0 : v[+p[1]]], c = n[v == null ? void 0 : v[+p[1] + 1]];
        if (!_ || !c) continue;
        const f = new he().setFromPoints([new y(_[0], _[1], _[2]), new y(c[0], c[1], c[2])]), P = new _t(f, new lt({ color: Pt, transparent: true, opacity: 0.95, depthTest: false }));
        P.renderOrder = 999, ft.add(P);
      } else if (d === "poly") {
        const _ = o[+p[0]].map((P) => {
          const X = n[P];
          return X ? new y(X[0], X[1], X[2]) : null;
        }).filter(Boolean);
        if (_.length < 2) continue;
        const c = new he().setFromPoints(_), f = new _t(c, new lt({ color: Pt, transparent: true, opacity: 0.95, depthTest: false }));
        f.renderOrder = 999, ft.add(f);
      } else if (d === "aux") {
        const v = t[+p[0]];
        if (!v || v.length !== 6) continue;
        const _ = new he().setFromPoints([new y(v[0], v[1], v[2]), new y(v[3], v[4], v[5])]), c = new _t(_, new lt({ color: Pt, transparent: true, opacity: 0.95, depthTest: false }));
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
  window.__hekatanRefreshSelection = Bt, window.__hekatanClearSelection = () => {
    ye.clear(), Bt();
  };
  const tn = (n, o, a, t, r, s, l, d, p) => {
    const v = l - t, _ = d - r, c = p - s, f = v * v + _ * _ + c * c;
    if (f < 1e-12) return Math.hypot(n - t, o - r, a - s);
    let P = ((n - t) * v + (o - r) * _ + (a - s) * c) / f;
    P = Math.max(0, Math.min(1, P));
    const X = t + P * v, D = r + P * _, G = s + P * c;
    return Math.hypot(n - X, o - D, a - G);
  }, qt = (n, o, a, t) => {
    if (!e.polylines) return null;
    const r = e.polylines.rawVal, s = e.points.rawVal;
    let l = -1, d = -1, p = t;
    for (let v = 0; v < r.length; v++) {
      const _ = r[v];
      for (let c = 0; c < _.length - 1; c++) {
        const f = s[_[c]], P = s[_[c + 1]];
        if (!f || !P) continue;
        const X = tn(n, o, a, f[0], f[1], f[2], P[0], P[1], P[2]);
        X < p && (p = X, l = v, d = c);
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
    ce.geometry.setFromPoints([new y(t[0], t[1], t[2]), new y(t[3], t[4], t[5])]), ce.visible = true;
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
      d && s.push(new y(d[0], d[1], d[2]));
    }
    else {
      const l = t[a[o]], d = t[a[o + 1]];
      l && s.push(new y(l[0], l[1], l[2])), d && s.push(new y(d[0], d[1], d[2]));
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
    e.points.val = l, e.polylines.val = d, e.areas && (e.areas.val = e.areas.rawVal.filter((p) => p !== n).map((p) => p > n ? p - 1 : p)), ce.visible = false, Ne = -1, Ke = -1;
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
    for (const f of l) for (const P of f) d.add(P);
    const p = e.points.rawVal, v = /* @__PURE__ */ new Map(), _ = [];
    for (let f = 0; f < p.length; f++) d.has(f) && (v.set(f, _.length), _.push(p[f]));
    const c = l.map((f) => f.map((P) => v.get(P)).filter((P) => P !== void 0));
    if (e.points.val = _, e.polylines.val = c, e.areas) {
      const f = s.length - 1;
      e.areas.val = e.areas.rawVal.map((P) => P > n ? P + f : P);
    }
    ce.visible = false, Ne = -1, Ke = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  de.geometry.setAttribute("position", new gt(e.points.rawVal.flat(), 3)), de.geometry.computeBoundingSphere(), de.frustumCulled = false, Se.frustumCulled = false, x.add(Se), U.position.set(0, 0, 0), U.rotateX(Math.PI / 2), U.geometry.rotateX(Math.PI / 2), U.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, a) => {
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
      let P;
      s === "xy" ? P = [n + c, o + f, a] : s === "xz" ? P = [n + c, o, a + f] : P = [n, o + c, a + f], p.push(P);
    }
    if (e.points.val = [...e.points.rawVal, ...p], e.polylines) {
      const v = [...p.map((c, f) => d + f), d], _ = e.polylines.rawVal;
      ((_a = _[_.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [..._, v, []] : e.polylines.val = [..._.slice(0, -1), v, []];
    }
  }, window.__hekatanDrawArc = (n, o, a, t = window.__hekatanArcSegs ?? 12) => {
    const r = Math.max(4, Math.round(t)), s = new y(...n), l = new y(...o), d = new y(...a), p = new y().subVectors(l, s), v = new y().subVectors(d, s), _ = new y().crossVectors(p, v).normalize(), c = new y().addVectors(s, l).multiplyScalar(0.5), f = new y().addVectors(l, d).multiplyScalar(0.5), P = new y().crossVectors(p, _).normalize(), X = new y().crossVectors(new y().subVectors(d, l), _).normalize(), D = new y().subVectors(f, c), G = P.x * X.y - P.y * X.x;
    let I;
    if (Math.abs(G) > 1e-9) {
      const De = (D.x * X.y - D.y * X.x) / G;
      I = new y().addVectors(c, P.clone().multiplyScalar(De));
    } else I = c.clone();
    const ne = s.distanceTo(I), se = new y().subVectors(s, I), fe = new y().subVectors(d, I), Ie = Math.acos(Math.max(-1, Math.min(1, se.dot(fe) / (ne * ne)))), ge = e.points.rawVal.length, ve = [], mt = _.clone();
    for (let De = 0; De <= r; De++) {
      const Ce = De / r, Ue = Ie * Ce, at = new Wn().setFromAxisAngle(mt, Ue), wt = se.clone().applyQuaternion(at).add(I);
      ve.push([wt.x, wt.y, wt.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...ve], e.polylines) {
      const De = ve.map((Ue, at) => ge + at), Ce = e.polylines.rawVal;
      e.polylines.val = [...Ce.slice(0, -1), De, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, a = 1, t = 6, r = 6) => {
    const s = Math.min(n[0], o[0]), l = Math.max(n[0], o[0]), d = Math.min(n[1], o[1]), p = Math.max(n[1], o[1]), v = (n[2] + o[2]) / 2, _ = l - s, c = p - d, f = Math.min(a, _ / 2 - 0.01, c / 2 - 0.01);
    if (f <= 0) return;
    const P = e.points.rawVal.length, X = [], D = [], G = (I, ne) => {
      X.push([I, ne, v]), D.push(P + X.length - 1);
    };
    for (let I = 0; I <= r; I++) G(s + f + (_ - 2 * f) * I / r, d);
    for (let I = 1; I <= t; I++) {
      const ne = -Math.PI / 2 + Math.PI / 2 * I / t;
      G(l - f + f * Math.cos(ne), d + f + f * Math.sin(ne));
    }
    for (let I = 1; I <= r; I++) G(l, d + f + (c - 2 * f) * I / r);
    for (let I = 1; I <= t; I++) {
      const ne = 0 + Math.PI / 2 * I / t;
      G(l - f + f * Math.cos(ne), p - f + f * Math.sin(ne));
    }
    for (let I = 1; I <= r; I++) G(l - f - (_ - 2 * f) * I / r, p);
    for (let I = 1; I <= t; I++) {
      const ne = Math.PI / 2 + Math.PI / 2 * I / t;
      G(s + f + f * Math.cos(ne), p - f + f * Math.sin(ne));
    }
    for (let I = 1; I <= r; I++) G(s, p - f - (c - 2 * f) * I / r);
    for (let I = 1; I <= t; I++) {
      const ne = Math.PI + Math.PI / 2 * I / t;
      G(s + f + f * Math.cos(ne), d + f + f * Math.sin(ne));
    }
    if (D.push(P), e.points.val = [...e.points.rawVal, ...X], e.polylines) {
      const I = e.polylines.rawVal;
      e.polylines.val = [...I.slice(0, -1), D, []];
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
      const _ = e.gridTarget.rawVal, c = new xn(..._.rotation), f = new y(1, 0, 0).applyEuler(c), P = new y(0, 1, 0).applyEuler(c), X = new y(..._.position), D = new y(t, r, s), G = new y(l, d, p), I = D.clone().sub(X).dot(f), ne = D.clone().sub(X).dot(P), se = G.clone().sub(X).dot(f), fe = G.clone().sub(X).dot(P), Ie = (ge, ve) => X.clone().addScaledVector(f, ge).addScaledVector(P, ve).toArray();
      v = [Ie(I, ne), Ie(se, ne), Ie(se, fe), Ie(I, fe)];
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
    for (let _e = 0; _e < a; _e++) {
      const Be = n[_e], Qe = n[(_e + 1) % a];
      t += (Be[1] - Qe[1]) * (Be[2] + Qe[2]), r += (Be[2] - Qe[2]) * (Be[0] + Qe[0]), s += (Be[0] - Qe[0]) * (Be[1] + Qe[1]);
    }
    const l = Math.hypot(t, r, s) || 1;
    t /= l, r /= l, s /= l;
    let d = n[1][0] - n[0][0], p = n[1][1] - n[0][1], v = n[1][2] - n[0][2];
    const _ = Math.hypot(d, p, v) || 1;
    d /= _, p /= _, v /= _;
    let c = r * v - s * p, f = s * d - t * v, P = t * p - r * d;
    const X = Math.hypot(c, f, P) || 1;
    c /= X, f /= X, P /= X;
    const D = n[0], G = (_e) => [(_e[0] - D[0]) * d + (_e[1] - D[1]) * p + (_e[2] - D[2]) * v, (_e[0] - D[0]) * c + (_e[1] - D[1]) * f + (_e[2] - D[2]) * P], I = (_e, Be) => [D[0] + _e * d + Be * c, D[1] + _e * p + Be * f, D[2] + _e * v + Be * P], ne = n.map(G);
    let se = 1 / 0, fe = -1 / 0, Ie = 1 / 0, ge = -1 / 0;
    for (const [_e, Be] of ne) _e < se && (se = _e), _e > fe && (fe = _e), Be < Ie && (Ie = Be), Be > ge && (ge = Be);
    const ve = fe - se, mt = ge - Ie;
    if (ve < 1e-6 || mt < 1e-6) return 0;
    let De = o && o > 0 ? o : 0.5;
    for (; ve / De * (mt / De) > 2500; ) De *= 2;
    De = Math.min(De, Math.min(ve, mt));
    const Ce = (_e, Be) => {
      let Qe = false;
      for (let Tt = 0, Kt = ne.length - 1; Tt < ne.length; Kt = Tt++) {
        const [an, mn] = ne[Tt], [ln, wn] = ne[Kt];
        mn > Be != wn > Be && _e < (ln - an) * (Be - mn) / (wn - mn) + an && (Qe = !Qe);
      }
      return Qe;
    }, Ue = Math.max(1, Math.round(ve / De)), at = Math.max(1, Math.round(mt / De)), wt = ve / Ue, kt = mt / at, Ut = /* @__PURE__ */ new Map(), $t = [], yt = e.points.rawVal.length, At = (_e, Be) => {
      const Qe = _e + "," + Be, Tt = Ut.get(Qe);
      if (Tt !== void 0) return Tt;
      const Kt = yt + $t.length;
      return $t.push(I(se + _e * wt, Ie + Be * kt)), Ut.set(Qe, Kt), Kt;
    }, bt = [];
    for (let _e = 0; _e < Ue; _e++) for (let Be = 0; Be < at; Be++) {
      if (!Ce(se + (_e + 0.5) * wt, Ie + (Be + 0.5) * kt)) continue;
      const Qe = At(_e, Be), Tt = At(_e + 1, Be), Kt = At(_e + 1, Be + 1), an = At(_e, Be + 1);
      bt.push([Qe, Tt, Kt, an]);
    }
    if (!bt.length) return 0;
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...$t], e.polylines && e.areas) {
      let _e = e.polylines.rawVal.slice();
      _e.length && _e[_e.length - 1].length === 0 && (_e = _e.slice(0, -1));
      const Be = [];
      for (const Qe of bt) Be.push(_e.length), _e.push([Qe[0], Qe[1], Qe[2], Qe[3], Qe[0]]);
      _e.push([]), e.polylines.val = _e, e.areas.val = [...e.areas.rawVal, ...Be];
    }
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    return M(), bt.length;
  };
  const cn = () => {
    if (me.length < 3) return me = [], J.visible = false, M(), 0;
    const n = window.__hekatanMeshPolyArea(me.slice());
    return me = [], J.visible = false, M(), n;
  };
  window.__hekatanFinalizePolyArea = cn, window.__hekatanSetInclinedPlaneFrom3 = (n, o, a) => {
    var _a;
    const t = new y(n[0], n[1], n[2]), r = new y(o[0], o[1], o[2]), s = new y(a[0], a[1], a[2]), l = new y().subVectors(r, t).cross(new y().subVectors(s, t));
    if (l.lengthSq() < 1e-9) return false;
    l.normalize();
    const d = new Wn().setFromUnitVectors(new y(0, 0, 1), l), p = new xn().setFromQuaternion(d);
    e.gridTarget && (e.gridTarget.val = { position: [t.x, t.y, t.z], rotation: [p.x, p.y, p.z] }), g = true;
    const v = new y().addVectors(t, r).add(s).multiplyScalar(1 / 3), _ = Math.max(t.distanceTo(r), t.distanceTo(s), r.distanceTo(s)) * 2.2 + 4, c = _ / 2;
    Pe.geometry.dispose(), Pe.geometry = new Gt(_, _), ue.geometry.dispose(), ue.geometry = new yo(new Gt(_, _)), nt(c, 1), re.position.copy(v), re.quaternion.copy(d), re.scale.set(1, 1, 1), re.visible = true;
    try {
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
    } catch {
    }
    return M(), true;
  }, window.__hekatanResetPlaneXY = () => {
    e.gridTarget && (e.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, 0] }), g = false, re.visible = false, M();
  };
  const zt = new Je();
  zt.visible = false, x.add(zt), window.__hekatanShowAxes = (n, o, a = 12, t = 2) => {
    var _a, _b;
    for (; zt.children.length; ) {
      const _ = zt.children.pop();
      (_a = _.geometry) == null ? void 0 : _a.dispose(), (_b = _.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const r = Math.min(...o) - t, s = Math.max(...o) + t, l = Math.min(...n) - t, d = Math.max(...n) + t, p = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", v = (_, c, f, P, X) => {
      const D = document.createElement("canvas");
      D.width = 64, D.height = 32;
      const G = D.getContext("2d");
      G.fillStyle = X, G.font = "bold 22px sans-serif", G.textAlign = "center", G.fillText(_, 32, 26);
      const I = new xo(D), ne = new go({ map: I, transparent: true }), se = new vo(ne);
      return se.position.set(c, f, P), se.scale.set(1.2, 0.6, 1), se;
    };
    n.forEach((_, c) => {
      const f = c < p.length ? p[c] : `X${c}`, P = new he().setFromPoints([new y(_, r, 0), new y(_, s, 0), new y(_, r, 0), new y(_, r, a)]), X = new yn({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), D = new Xt(P, X);
      D.computeLineDistances(), zt.add(D), zt.add(v(f, _, r - 0.5, 0, "#60a5fa")), zt.add(v(f, _, s + 0.5, 0, "#60a5fa"));
    }), o.forEach((_, c) => {
      const f = `${c + 1}`, P = new he().setFromPoints([new y(l, _, 0), new y(d, _, 0), new y(l, _, 0), new y(l, _, a)]), X = new yn({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), D = new Xt(P, X);
      D.computeLineDistances(), zt.add(D), zt.add(v(f, l - 0.5, _, 0, "#fb7185")), zt.add(v(f, d + 0.5, _, 0, "#fb7185"));
    }), zt.visible = true, M();
  }, window.__hekatanHideAxes = () => {
    zt.visible = false, M();
  };
  const Rt = new Je();
  Rt.visible = false, x.add(Rt);
  let Yt = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, a = 0, t = 0) => {
    var _a, _b;
    for (; Rt.children.length; ) {
      const s = Rt.children.pop();
      (_a = s.geometry) == null ? void 0 : _a.dispose(), (_b = s.material) == null ? void 0 : _b.dispose();
    }
    Yt.forEach((s) => {
      x.remove(s), s.geometry.dispose(), s.material.dispose();
    }), Yt = [];
    const r = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((s, l) => {
      const d = r[l % r.length], p = o / 2, v = [new y(a - p, t - p, s), new y(a + p, t - p, s), new y(a + p, t + p, s), new y(a - p, t + p, s), new y(a - p, t - p, s)], _ = new he().setFromPoints(v), c = new lt({ color: d, transparent: true, opacity: 0.55 });
      Rt.add(new _t(_, c));
      const f = document.createElement("canvas");
      f.width = 128, f.height = 32;
      const P = f.getContext("2d");
      P.fillStyle = `#${d.toString(16).padStart(6, "0")}`, P.font = "bold 18px sans-serif", P.fillText(`Z = ${s} m`, 4, 22);
      const X = new xo(f), D = new go({ map: X, transparent: true }), G = new vo(D);
      G.position.set(a - p - 1.5, t - p - 1.5, s), G.scale.set(2.5, 0.6, 1), Rt.add(G);
      const I = new Gt(1e4, 1e4), ne = new Oe({ visible: false, side: Ft }), se = new We(I, ne);
      se.position.set(0, 0, s), se.frustumCulled = false, se.userData = { refPlaneZ: s }, x.add(se), Yt.push(se);
    }), Rt.visible = true, M();
  }, window.__hekatanHideRefPlanes = () => {
    Rt.visible = false, Yt.forEach((n) => {
      n.visible = false;
    }), M();
  };
  const Qt = new Je();
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
      const t = new he().setFromPoints([new y(a[0], a[1], a[2]), new y(a[3], a[4], a[5])]), r = new yn({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), s = new _t(t, r);
      s.computeLineDistances(), Qt.add(s);
    }
  };
  R.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, $n(), M());
  });
  const Nt = new Je();
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
      const t = new We(new rn(0.025, 12, 12), new Oe({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(a[0], a[1], a[2]), t.renderOrder = 996, t.scale.setScalar(pt(t.position)), Nt.add(t);
    }
  };
  R.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, dn(), M());
  }), u.addEventListener("change", () => {
    Nt.children.forEach((n) => {
      n.scale.setScalar(pt(n.position));
    });
  }), window.__hekatanRenderAuxPoints = dn;
  const ht = new Je(), Ro = new We(new rn(0.01, 12, 12), new Oe({ color: 16724804, transparent: true, opacity: 0.95 })), Xo = new We(new rn(0.015, 12, 12), new Oe({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  ht.add(Ro, Xo);
  const on = 0.08, In = (n, o, a) => {
    const t = new he().setFromPoints([new y(...n), new y(...o)]);
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
    Ln(), He.visible && Dt();
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q;
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
        const _ = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = Ht(t.x, t.y, t.z, _), f = qt(t.x, t.y, t.z, _), P = Jt(t.x, t.y, t.z, _);
        if (c >= 0) {
          const I = e.points.rawVal[c];
          He.position.set(I[0], I[1], I[2]), He.visible = true, Dt(), Le.visible = false, tt = { kind: "pt", a: c };
        } else if (f) {
          const I = e.points.rawVal, ne = e.polylines.rawVal[f.polyIdx], se = I[ne[f.segIdx]], fe = I[ne[f.segIdx + 1]];
          Le.geometry.setFromPoints([new y(se[0], se[1], se[2]), new y(fe[0], fe[1], fe[2])]), Le.visible = true, He.visible = false, tt = ((_f = (_e = e.areas) == null ? void 0 : _e.rawVal) == null ? void 0 : _f.includes(f.polyIdx)) ?? false ? { kind: "poly", a: f.polyIdx } : { kind: "seg", a: f.polyIdx, b: f.segIdx };
        } else if (P >= 0) {
          const ne = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[P];
          ne && (Le.geometry.setFromPoints([new y(ne[0], ne[1], ne[2]), new y(ne[3], ne[4], ne[5])]), Le.visible = true, He.visible = false, tt = { kind: "aux", a: P });
        } else Le.visible = false, He.visible = false, tt = null;
        q.style.left = n.clientX + "px", q.style.top = n.clientY + "px", q.style.display = "block";
        let X = t;
        if ((tt == null ? void 0 : tt.kind) === "pt") {
          const I = e.points.rawVal[tt.a];
          I && (X = new y(I[0], I[1], I[2]));
        }
        const D = `X=${X.x.toFixed(2)} Y=${X.y.toFixed(2)} Z=${X.z.toFixed(2)}`;
        if (tt) {
          const I = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          q.textContent = `${D}  \xB7  \u{1F5B1} Click \u2192 ${I[tt.kind]}`;
        } else q.textContent = D;
        const G = document.getElementById("hk-coord-fixed");
        G && (G.textContent = D), ae.visible = false, ot.visible = false, M();
        return;
      }
      if (l === "delete") {
        const _ = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = qt(t.x, t.y, t.z, _), f = Jt(t.x, t.y, t.z, _);
        let P = false;
        if (f >= 0) if (!c) P = true;
        else {
          const I = window.__hekatanDrawingAuxLines, se = ((I == null ? void 0 : I.rawVal) ?? (I == null ? void 0 : I.val) ?? I ?? [])[f];
          tn(t.x, t.y, t.z, se[0], se[1], se[2], se[3], se[4], se[5]) < c.dist && (P = true);
        }
        P ? (dt = f, Ne = -1, Ke = -1, An(f)) : c ? (Ne = c.polyIdx, Ke = c.segIdx, dt = -1, Tn(c.polyIdx, c.segIdx)) : (Ne = -1, Ke = -1, dt = -1, ce.visible = false), ae.visible = false, ot.visible = false, E(), q.style.left = n.clientX + "px", q.style.top = n.clientY + "px", q.style.display = "block";
        const X = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let D = "";
        P ? D = `\u{1F5D1} l\xEDnea aux #${dt + 1}` : c ? D = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(c.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${c.polyIdx + 1}` : `\u{1F5D1} seg ${c.segIdx + 1} / poly #${c.polyIdx + 1}` : D = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", q.textContent = `${X}  \xB7  ${D}`;
        const G = document.getElementById("hk-coord-fixed");
        G && (G.textContent = X), M();
        return;
      } else ce.visible = false, Ne = -1, dt = -1;
      q.style.left = n.clientX + "px", q.style.top = n.clientY + "px", q.style.display = "block";
      const d = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], p = d[d.length - 1] ?? [], v = e.points.rawVal ?? [];
      if (p.length > 0 && v[p[p.length - 1]]) {
        const _ = p[p.length - 1], c = v[_];
        let f = je;
        if (st = null, !f && window.__hekatanAxisSnap !== false) {
          const Ce = m.getBoundingClientRect(), Ue = n.clientX, at = n.clientY, wt = ((_k = settings.gridSize) == null ? void 0 : _k.rawVal) ?? 10, kt = new y(c[0], c[1], c[2]), Ut = [["x", new y(1, 0, 0)], ["y", new y(0, 1, 0)], ["z", new y(0, 0, 1)]], $t = (At) => {
            const bt = At.clone().project(o);
            return { x: (bt.x * 0.5 + 0.5) * Ce.width + Ce.left, y: (-bt.y * 0.5 + 0.5) * Ce.height + Ce.top };
          };
          let yt = null;
          for (const [At, bt] of Ut) {
            const _e2 = $t(kt.clone().addScaledVector(bt, -wt)), Be = $t(kt.clone().addScaledVector(bt, wt)), Qe = Be.x - _e2.x, Tt = Be.y - _e2.y, Kt = Ue - _e2.x, an = at - _e2.y, mn = Qe * Qe + Tt * Tt || 1;
            let ln = (Kt * Qe + an * Tt) / mn;
            ln = Math.max(0, Math.min(1, ln));
            const wn = Math.hypot(Ue - (_e2.x + ln * Qe), at - (_e2.y + ln * Tt));
            if (yt === null || wn < yt.dpx) {
              const Zn = k.ray, uo = kt.clone().sub(Zn.origin), Un = bt.dot(Zn.direction), fo = bt.dot(uo), Wo = Zn.direction.dot(uo), ho = 1 - Un * Un, Go = Math.abs(ho) < 1e-6 ? -fo : (Un * Wo - fo) / ho;
              yt = { axis: At, dpx: wn, pt: kt.clone().addScaledVector(bt, Go) };
            }
          }
          yt && yt.dpx <= 12 && (t.copy(yt.pt), f = yt.axis, st = yt.pt.clone());
        }
        const P = !!window.__hekatanOrthoMode;
        if (!f && P) {
          const Ce = Math.abs(t.x - c[0]), Ue = Math.abs(t.y - c[1]), at = Math.abs(t.z - c[2]), wt = (_l = a[0]) == null ? void 0 : _l.object;
          let kt = null;
          wt === Ae ? kt = "xy" : wt === $e ? kt = "xz" : wt === Re && (kt = "yz"), kt === "xy" ? f = Ce >= Ue ? "x" : "y" : kt === "xz" ? f = Ce >= at ? "x" : "z" : kt === "yz" ? f = Ue >= at ? "y" : "z" : f = Ce >= Ue && Ce >= at ? "x" : Ue >= at ? "y" : "z";
        }
        const X = window.__hekatanPolarTrack !== false;
        if (!f && X) {
          const Ce = t.x - c[0], Ue = t.y - c[1], at = t.z - c[2], wt = Math.hypot(Ce, Ue, at);
          if (wt > 1e-3) {
            const Ut = Math.tan(6 * Math.PI / 180) * wt, $t = Math.hypot(Ue, at), yt = Math.hypot(Ce, at), At = Math.hypot(Ce, Ue), bt = [["x", $t], ["y", yt], ["z", At]];
            bt.sort((_e2, Be) => _e2[1] - Be[1]), bt[0][1] <= Ut && (f = bt[0][0]);
          }
        }
        if (f) {
          const Ce = c[0], Ue = c[1], at = c[2];
          f === "x" ? t.set(t.x, Ue, at) : f === "y" ? t.set(Ce, t.y, at) : t.set(Ce, Ue, t.z);
          const wt = !!je, Ut = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[f];
          et.style.background = "rgba(15,23,42,0.92)", et.style.color = Ut, et.style.border = `1.5px solid ${Ut}`;
          const $t = (_m = a[0]) == null ? void 0 : _m.object;
          let yt = null;
          $t === Ae ? yt = "xy" : $t === $e ? yt = "xz" : $t === Re && (yt = "yz");
          const At = yt ? ` (plano ${yt.toUpperCase()})` : "";
          et.textContent = wt ? `\u{1F512} LOCK ${f.toUpperCase()}${At}` : `\u22A5 ORTO ${f.toUpperCase()}${At}`, et.style.left = n.clientX + 20 + "px", et.style.top = n.clientY + 18 + "px", et.style.transform = "none", et.style.display = "block";
        } else je || (et.style.display = "none");
        const D = Math.hypot(t.x - c[0], t.y - c[1], t.z - c[2]), G = Math.atan2(t.y - c[1], t.x - c[0]) * 180 / Math.PI, I = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        q.textContent = `${I} | \u0394L=${D.toFixed(2)}m ${G.toFixed(0)}\xB0`;
        const ne = document.getElementById("hk-coord-fixed");
        ne && (ne.textContent = I), ae.geometry.setFromPoints([new y(c[0], c[1], c[2]), new y(t.x, t.y, t.z)]), (_n2 = ae.computeLineDistances) == null ? void 0 : _n2.call(ae), ae.visible = true, L(c[0], c[1], c[2], t.x, t.y, t.z);
        const se = window.__hekatanOrthoExt ?? 8, fe = window.__hekatanShowOrthoPlanes !== false;
        ke.visible = fe, fe || rt(null), fe && (Ze(te, c, "xy", se), Ze(xe, c, "xz", se), Ze(we, c, "yz", se), Ge(Ae, c, "xy", se), Ge($e, c, "xz", se), Ge(Re, c, "yz", se));
        const Ie = fe ? k.intersectObjects([Ae, $e, Re], false) : [];
        let ge = null;
        if (Ie.length > 0) {
          const Ce = Ie[0].object;
          Ce === Ae ? ge = "xy" : Ce === $e ? ge = "xz" : Ce === Re && (ge = "yz");
        }
        rt(ge), ge && (ze.style.left = n.clientX + "px", ze.style.top = n.clientY + "px"), z.geometry.setFromPoints([new y(c[0] - se, c[1], c[2]), new y(c[0] + se, c[1], c[2])]), (_o2 = z.computeLineDistances) == null ? void 0 : _o2.call(z), B.geometry.setFromPoints([new y(c[0], c[1] - se, c[2]), new y(c[0], c[1] + se, c[2])]), (_p = B.computeLineDistances) == null ? void 0 : _p.call(B), $.geometry.setFromPoints([new y(c[0], c[1], c[2] - se), new y(c[0], c[1], c[2] + se)]), (_q = $.computeLineDistances) == null ? void 0 : _q.call($), ot.visible = true;
        const ve = z.material, mt = B.material, De = $.material;
        f === "x" ? (ve.opacity = 0.95, mt.opacity = 0.1, De.opacity = 0.1) : f === "y" ? (ve.opacity = 0.1, mt.opacity = 0.95, De.opacity = 0.1) : f === "z" ? (ve.opacity = 0.1, mt.opacity = 0.1, De.opacity = 0.95) : (ve.opacity = 0.5, mt.opacity = 0.5, De.opacity = 0.5);
      } else {
        const _ = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        q.textContent = _;
        const c = document.getElementById("hk-coord-fixed");
        if (c && (c.textContent = _), ae.visible = false, ot.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(l)) {
          if (Y = null, N = null, K.style.left = n.clientX + 20 + "px", K.style.top = n.clientY - 28 + "px", K.style.display = "block", !V) {
            K.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const P = document.activeElement;
            !(P && (P.tagName === "INPUT" || P.tagName === "TEXTAREA") && P !== K) && document.activeElement !== K && K.focus({ preventScroll: true });
            try {
              K.select();
            } catch {
            }
          }
        } else E();
      }
      M();
    } else Xn(), q.style.display = "none", ht.visible = false, ae.visible = false, ot.visible = false, E(), M();
  }), R.derive(() => {
    if (!e.gridTarget) return;
    Vs(i, { position: new y(...e.gridTarget.val.position), quaternion: new Wn().setFromEuler(new xn(...e.gridTarget.val.rotation)) }, M), U.position.set(...e.gridTarget.val.position), U.quaternion.setFromEuler(new xn(...e.gridTarget.val.rotation)), U.updateMatrixWorld();
    const n = new y(0, 0, 1).applyEuler(new xn(...e.gridTarget.val.rotation));
    g = !(Math.abs(n.x) > 0.999 || Math.abs(n.y) > 0.999 || Math.abs(n.z) > 0.999);
  }), R.derive(() => {
    de.geometry.setAttribute("position", new gt(e.points.val.flat(), 3)), de.geometry.computeBoundingSphere();
  }), R.derive(() => {
    const n = 0.05 * S * 0.5 * w.val;
    k.params.Points.threshold = 0.4 * n;
  }), R.derive(() => {
    var _a;
    const n = e.points.val ?? [], a = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const s of a) {
      const [l, d, p] = n[s];
      t.push(l, d, p);
    }
    const r = new he();
    r.setAttribute("position", new gt(t, 3)), Me.geometry.dispose(), Me.geometry = r;
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
    const s = Math.min(n, a), l = Math.max(n, a), d = Math.min(o, t), p = Math.max(o, t), v = a < n, _ = m.getBoundingClientRect(), c = h();
    c.updateMatrixWorld();
    const f = (ge) => {
      const ve = new y(ge[0], ge[1], ge[2]);
      return ve.project(c), { x: _.left + (ve.x * 0.5 + 0.5) * _.width, y: _.top + (-ve.y * 0.5 + 0.5) * _.height };
    }, P = (ge) => ge.x >= s && ge.x <= l && ge.y >= d && ge.y <= p, X = (ge, ve) => !(ge.x < s && ve.x < s || ge.x > l && ve.x > l || ge.y < d && ve.y < d || ge.y > p && ve.y > p);
    r || ye.clear();
    let D = 0;
    const G = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let ge = 0; ge < G.length; ge++) {
      const ve = G[ge];
      ve && P(f(ve)) && (ye.add(`pt:${ge}`), D++);
    }
    const I = (ge, ve) => v ? P(ge) || P(ve) || X(ge, ve) : P(ge) && P(ve), ne = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], se = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let ge = 0; ge < ne.length; ge++) {
      const ve = ne[ge];
      if (se.includes(ge)) {
        let De;
        if (!v) De = ve.every((Ce) => {
          const Ue = G[Ce];
          return !!Ue && P(f(Ue));
        });
        else {
          De = false;
          for (let Ce = 0; Ce < ve.length - 1; Ce++) {
            const Ue = G[ve[Ce]], at = G[ve[Ce + 1]];
            if (!(!Ue || !at) && I(f(Ue), f(at))) {
              De = true;
              break;
            }
          }
        }
        De && (ye.add(`poly:${ge}`), D++);
      } else for (let De = 0; De < ve.length - 1; De++) {
        const Ce = G[ve[De]], Ue = G[ve[De + 1]];
        !Ce || !Ue || I(f(Ce), f(Ue)) && (ye.add(`seg:${ge}:${De}`), D++);
      }
    }
    const Ie = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let ge = 0; ge < Ie.length; ge++) {
      const ve = Ie[ge];
      if (!ve || ve.length !== 6) continue;
      const mt = f([ve[0], ve[1], ve[2]]), De = f([ve[3], ve[4], ve[5]]);
      I(mt, De) && (ye.add(`aux:${ge}`), D++);
    }
    Bt(), le(`${v ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${D} item(s) ${r ? "agregados a" : "\u2192"} selecci\xF3n (total ${ye.size})`), St.style.display = "none";
  }, vn = () => {
    Vt && (Vt = null, St.style.display = "none", le("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = vn, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && Vt && vn();
  });
  const ao = () => {
    var _a, _b, _c, _d;
    if (ye.size === 0) return false;
    const n = [...ye], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], a = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? [], l = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Set();
    for (const X of n) {
      const [D, ...G] = X.split(":");
      if (D === "pt") l.add(+G[0]);
      else if (D === "poly") d.add(+G[0]);
      else if (D === "seg") {
        const I = +G[0], ne = +G[1];
        p.has(I) || p.set(I, /* @__PURE__ */ new Set()), p.get(I).add(ne);
      } else D === "aux" && v.add(+G[0]);
    }
    let _ = 0, c = [], f = [];
    const P = /* @__PURE__ */ new Map();
    for (let X = 0; X < a.length; X++) {
      if (d.has(X)) {
        _++;
        continue;
      }
      P.set(X, c.length);
      const D = p.get(X);
      if (D && D.size > 0) {
        let G = [];
        for (let I = 0; I < a[X].length; I++) G.push(a[X][I]), I < a[X].length - 1 && D.has(I) && (G.length >= 2 && c.push(G), G = [], _++);
        (G.length >= 2 || G.length === 1) && c.push(G);
      } else c.push([...a[X]]);
    }
    if (l.size > 0) {
      const X = [], D = /* @__PURE__ */ new Map();
      for (let I = 0; I < o.length; I++) {
        if (l.has(I)) {
          _++;
          continue;
        }
        D.set(I, X.length), X.push([...o[I]]);
      }
      const G = [];
      for (const I of c) {
        let ne = [];
        for (const se of I) {
          const fe = D.get(se);
          fe === void 0 ? (ne.length >= 2 && G.push(ne), ne = []) : ne.push(fe);
        }
        ne.length >= 2 && G.push(ne);
      }
      c = G, e.points.val = X;
    }
    for (const X of t) {
      const D = P.get(X);
      D !== void 0 && D < c.length && f.push(D);
    }
    if (e.polylines && (e.polylines.val = c), e.areas && (e.areas.val = f), v.size > 0 && r) {
      const X = s.filter((D, G) => !v.has(G));
      "val" in r ? r.val = X : window.__hekatanDrawingAuxLines = X, _ += v.size;
    }
    ye.clear(), Bt();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return le(`\u{1F5D1} ${_} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = ao, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement, a = o && (o.id === "hk3-cmd-input" || o.id === "hk-dyn-input") && o.value === "";
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && !a || ye.size !== 0 && (n.preventDefault(), ao());
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
  }, Z = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 }, vt = { dx: 0, dy: 0, dz: 3, copias: 1 };
  let qe = null;
  const ut = (n, o, a, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: a, value: t } }));
  }, No = () => {
    if (qe && (qe.dispose(), qe = null), ye.size === 0) {
      Ct.style.display = "none";
      return;
    }
    const n = [...ye], o = n.filter((c) => c.startsWith("pt:")), a = n.filter((c) => c.startsWith("seg:")), t = n.filter((c) => c.startsWith("poly:")), r = n.filter((c) => c.startsWith("aux:")), s = o.length > 0, l = a.length > 0, d = t.length > 0, p = !s && !l && !d, v = [];
    o.length && v.push(`\u{1F535} ${o.length} nodo(s)`), a.length && v.push(`\u{1F4CF} ${a.length} segmento(s)`), t.length && v.push(`\u25AD ${t.length} \xE1rea(s)`), r.length && v.push(`\u250A ${r.length} aux`);
    const _ = `\u{1F3AF} ${ye.size} item(s) \u2014 ${v.join(", ")}`;
    qe = new Eo({ container: Ct, title: _ });
    {
      const c = qe.addFolder({ title: "\u270F\uFE0F Editar \u2014 Replicar / Mover", expanded: false });
      c.addBinding(vt, "dx", { label: "\u0394x (m)", step: 0.1 }), c.addBinding(vt, "dy", { label: "\u0394y (m)", step: 0.1 }), c.addBinding(vt, "dz", { label: "\u0394z (m)", step: 0.1 }), c.addBinding(vt, "copias", { label: "Copias", min: 1, max: 50, step: 1 }), c.addButton({ title: "\u29C9 Replicar selecci\xF3n" }).on("click", () => {
        var _a;
        const P = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, vt.dx, vt.dy, vt.dz, vt.copias);
        le(P ? `\u29C9 Replicado \xD7${P} (\u0394 ${vt.dx},${vt.dy},${vt.dz} m)` : "\u26A0 Nada que replicar \u2014 seleccion\xE1 nodos/frames/\xE1reas");
      }), c.addButton({ title: "\u2192 Mover selecci\xF3n (1 copia, sin duplicar geometr\xEDa base)" }).on("click", () => {
        var _a;
        const P = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, vt.dx, vt.dy, vt.dz, 1);
        le(P ? `\u2192 Copia desplazada \u0394 ${vt.dx},${vt.dy},${vt.dz} m` : "\u26A0 Nada seleccionado");
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
      const c = qe.addFolder({ title: `\u{1F4CC} Restraints (DOFs) \u2014 ${o.length} nodo(s)` });
      c.addBinding(Z, "Ux"), c.addBinding(Z, "Uy"), c.addBinding(Z, "Uz"), c.addBinding(Z, "Rx"), c.addBinding(Z, "Ry"), c.addBinding(Z, "Rz");
      const f = qe.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      f.addBinding(Z, "Kx", { label: "Kx", min: 0, step: 100 }), f.addBinding(Z, "Ky", { label: "Ky", min: 0, step: 100 }), f.addBinding(Z, "Kz", { label: "Kz", min: 0, step: 100 }), f.addBinding(Z, "Krx", { label: "Krx", min: 0, step: 1e3 }), f.addBinding(Z, "Kry", { label: "Kry", min: 0, step: 1e3 }), f.addBinding(Z, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const P = qe.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      P.addBinding(Z, "Fx", { step: 0.1 }), P.addBinding(Z, "Fy", { step: 0.1 }), P.addBinding(Z, "Fz", { step: 0.1 }), P.addBinding(Z, "Mx", { step: 0.1 }), P.addBinding(Z, "My", { step: 0.1 }), P.addBinding(Z, "Mz", { step: 0.1 }), qe.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(Z, "mass", { label: "m", min: 0, step: 1 }), qe.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(Z, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), qe.addButton({ title: `\u2713 Aplicar a ${o.length} nodo(s) seleccionado(s)` }).on("click", () => {
        let G = 0;
        const I = [Z.Ux, Z.Uy, Z.Uz, Z.Rx, Z.Ry, Z.Rz];
        I.some((fe) => fe) && (ut("nodes", o, "supports", I), G++);
        const ne = [Z.Fx, Z.Fy, Z.Fz, Z.Mx, Z.My, Z.Mz];
        ne.some((fe) => fe !== 0) && (ut("nodes", o, "loads", ne), G++);
        const se = [Z.Kx, Z.Ky, Z.Kz, Z.Krx, Z.Kry, Z.Krz];
        if (se.some((fe) => fe !== 0) && (ut("nodes", o, "springs", se), G++), Z.mass !== 0 && (ut("nodes", o, "mass", Z.mass), G++), Z.diaphragm !== "Ninguno" && (ut("nodes", o, "diaphragm", Z.diaphragm), G++), G === 0) {
          le("\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para apoyo, o un valor de carga/resorte/masa, y volv\xE9 a aplicar.");
          let fe = document.getElementById("hk-prop-toast");
          fe || (fe = document.createElement("div"), fe.id = "hk-prop-toast", fe.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);z-index:99999;padding:9px 20px;border-radius:8px;font:600 14px system-ui;color:#fff;pointer-events:none;transition:opacity .25s;box-shadow:0 4px 16px rgba(0,0,0,.4)", document.body.appendChild(fe)), fe.textContent = "\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para empotrado/articulado, despu\xE9s Aplicar", fe.style.background = "rgba(217,119,6,0.97)", fe.style.opacity = "1", clearTimeout(window.__hekatanPropToastT), window.__hekatanPropToastT = setTimeout(() => {
            fe && (fe.style.opacity = "0");
          }, 3200);
        } else le(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    }
    if (l) {
      const c = qe.addFolder({ title: `\u{1F4CF} Secci\xF3n frame \u2014 ${a.length} seg(s)` });
      c.addBinding(Z, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), c.addBinding(Z, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const f = qe.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      f.addBinding(Z, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), f.addBinding(Z, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), f.addBinding(Z, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), f.addBinding(Z, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), qe.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(Z, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), qe.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(Z, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const D = qe.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      D.addBinding(Z, "relMxI", { label: "Mx I" }), D.addBinding(Z, "relMyI", { label: "My I" }), D.addBinding(Z, "relMzI", { label: "Mz I" });
      const G = qe.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      G.addBinding(Z, "relMxJ", { label: "Mx J" }), G.addBinding(Z, "relMyJ", { label: "My J" }), G.addBinding(Z, "relMzJ", { label: "Mz J" }), qe.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(Z, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const ne = qe.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      ne.addBinding(Z, "LKx", { label: "LKx", min: 0, step: 100 }), ne.addBinding(Z, "LKy", { label: "LKy", min: 0, step: 100 }), ne.addBinding(Z, "LKz", { label: "LKz", min: 0, step: 100 });
      const se = qe.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      se.addBinding(Z, "qx", { step: 0.1 }), se.addBinding(Z, "qy", { step: 0.1 }), se.addBinding(Z, "qz", { step: 0.1 }), qe.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(Z, "massPerM", { label: "m/L", min: 0, step: 1 }), qe.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        ut("segs", a, "section", Z.section), ut("segs", a, "material", Z.material_frame);
        const Ie = { A: Z.A_mod, Iz: Z.Iz_mod, Iy: Z.Iy_mod, J: Z.J_mod };
        (Ie.A !== 1 || Ie.Iz !== 1 || Ie.Iy !== 1 || Ie.J !== 1) && ut("segs", a, "modifiers", Ie), Z.insertionPoint !== "10 \u2014 Centroid" && ut("segs", a, "insertionPoint", Z.insertionPoint), Z.beta !== 0 && ut("segs", a, "beta", Z.beta);
        const ge = [Z.relMxI, Z.relMyI, Z.relMzI], ve = [Z.relMxJ, Z.relMyJ, Z.relMzJ];
        (ge.some((Ce) => Ce) || ve.some((Ce) => Ce)) && ut("segs", a, "releases", { i: ge, j: ve }), Z.hinges !== "None" && ut("segs", a, "hinges", Z.hinges);
        const mt = [Z.LKx, Z.LKy, Z.LKz];
        mt.some((Ce) => Ce !== 0) && ut("segs", a, "lineSprings", mt);
        const De = [Z.qx, Z.qy, Z.qz];
        De.some((Ce) => Ce !== 0) && ut("segs", a, "distLoad", De), Z.massPerM !== 0 && ut("segs", a, "massPerM", Z.massPerM), le(`\u2713 Propiedades aplicadas a ${a.length} segmento(s)`);
      });
    }
    if (d) {
      const c = qe.addFolder({ title: `\u25AD Shell / \xC1rea \u2014 ${t.length}` });
      c.addBinding(Z, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), c.addBinding(Z, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), c.addBinding(Z, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), qe.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(Z, "surfLoad", { label: "q", step: 0.1 }), qe.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        ut("areas", t, "shellType", Z.shellType), ut("areas", t, "thickness", Z.thickness), ut("areas", t, "material", Z.material_shell), Z.surfLoad !== 0 && ut("areas", t, "surfLoad", Z.surfLoad), le(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    }
    if (p) {
      const c = qe.addFolder({ title: "\u2139 Selecci\xF3n" }), f = { msg: "Seleccion\xE1 nodos, frames o \xE1reas para editar" };
      c.addBinding(f, "msg", { readonly: true, label: "" });
    }
    qe.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      ye.clear(), Bt();
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
        if (Vt ? vn() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), ye.size > 0 && (ye.clear(), Bt()), e.polylines) {
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
  const Zt = new Je();
  Zt.visible = false, Zt.frustumCulled = false, x.add(Zt);
  const Zo = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, lo = (n, o, a, t) => {
    var _a, _b, _c, _d;
    for (; Zt.children.length; ) {
      const d = Zt.children.pop();
      (_b = (_a = d.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = d.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const r = Zo[n] ?? 16777215, s = 0.05, l = new he().setFromPoints([new y(o - s, a - s, t), new y(o + s, a - s, t), new y(o + s, a - s, t), new y(o + s, a + s, t), new y(o + s, a + s, t), new y(o - s, a + s, t), new y(o - s, a + s, t), new y(o - s, a - s, t)]);
    Zt.add(new Xt(l, new lt({ color: r, linewidth: 2 }))), Zt.position.set(0, 0, 0), Zt.visible = true;
  }, Xn = () => {
    Zt.visible = false;
  }, Uo = (n, o, a, t) => {
    var _a;
    const r = window.__hekatanOsnap, s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let d = null;
    const p = (c, f, P, X) => {
      const D = Math.hypot(f - n, P - o, X - a);
      D > t || (!d || D < d.d) && (d = { type: c, x: f, y: P, z: X, d: D });
    };
    (r.node || r.end) && s.forEach((c) => {
      r.node && p("node", c[0], c[1], c[2]);
    });
    for (const c of l) if (!(c.length < 2)) for (let f = 0; f < c.length - 1; f++) {
      const P = s[c[f]], X = s[c[f + 1]];
      if (!(!P || !X) && (r.end && (p("end", P[0], P[1], P[2]), p("end", X[0], X[1], X[2])), r.mid && p("mid", (P[0] + X[0]) / 2, (P[1] + X[1]) / 2, (P[2] + X[2]) / 2), r.nea || r.per)) {
        const D = X[0] - P[0], G = X[1] - P[1], I = X[2] - P[2], ne = D * D + G * G + I * I;
        if (ne < 1e-12) continue;
        const se = Math.max(0, Math.min(1, ((n - P[0]) * D + (o - P[1]) * G + (a - P[2]) * I) / ne)), fe = P[0] + se * D, Ie = P[1] + se * G, ge = P[2] + se * I;
        r.nea && p("nea", fe, Ie, ge), r.per && p("per", fe, Ie, ge);
      }
    }
    const v = window.__hekatanDrawingAuxLines, _ = (v == null ? void 0 : v.rawVal) ?? (v == null ? void 0 : v.val) ?? v ?? [];
    for (const c of _) {
      if (c.length !== 6) continue;
      const f = [c[0], c[1], c[2]], P = [c[3], c[4], c[5]];
      if (r.end && (p("end", f[0], f[1], f[2]), p("end", P[0], P[1], P[2])), r.mid && p("mid", (f[0] + P[0]) / 2, (f[1] + P[1]) / 2, (f[2] + P[2]) / 2), r.nea || r.per) {
        const X = P[0] - f[0], D = P[1] - f[1], G = P[2] - f[2], I = X * X + D * D + G * G;
        if (I < 1e-12) continue;
        const ne = Math.max(0, Math.min(1, ((n - f[0]) * X + (o - f[1]) * D + (a - f[2]) * G) / I)), se = f[0] + ne * X, fe = f[1] + ne * D, Ie = f[2] + ne * G;
        r.nea && p("nea", se, fe, Ie), r.per && p("per", se, fe, Ie);
      }
    }
    return d ? { type: d.type, x: d.x, y: d.y, z: d.z } : null;
  };
  window.__hekatanOsnapCompute = Uo, window.__hekatanOsnapShow = lo, window.__hekatanOsnapHide = Xn;
  let Ee = [], Mt = 0;
  const fn = document.createElement("div");
  fn.id = "hk-cad-status", fn.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", fn.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(fn);
  const Ko = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), je && n.push(`\u{1F512} LOCK ${je.toUpperCase()}`);
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
    Ee = [], me = [], J.visible = false, Dn(), M(), le("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
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
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), Ee = [], ae.visible = false, ot.visible = false, E(), le(`\u21B6 Undo \u2014 ${hn.length} estados restantes`);
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
    Ee = [], Dn(), je = null, Lt(), ae.visible = false, ot.visible = false, E(), le("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), M();
  };
  window.__hekatanFinalizeDraw = co;
  const po = () => {
    var _a, _b, _c;
    Ee = [], me = [], J.visible = false;
    let n = false;
    ye.size && (ye.clear(), Bt(), n = true), co();
    try {
      const o = window.__hekatanCadState, a = (_b = (_a = o == null ? void 0 : o.get) == null ? void 0 : _a.call(o)) == null ? void 0 : _b.tool;
      a && a !== "select" && ((_c = o == null ? void 0 : o.setTool) == null ? void 0 : _c.call(o, "select"));
    } catch {
    }
    le(n ? "\u238B Selecci\xF3n cancelada" : "\u238B Sin herramienta \u2014 arrastr\xE1 para seleccionar"), M();
  };
  window.__hekatanEscapeCancel = po, window.__hekatanReplicateSelection = (n, o, a, t) => {
    var _a, _b, _c, _d;
    t = Math.max(1, Math.round(t || 1));
    const r = [...ye], s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], d = new Set(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? []), p = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), _ = [];
    if (r.forEach((D) => {
      if (D.startsWith("pt:")) p.add(+D.slice(3));
      else if (D.startsWith("poly:")) {
        const G = +D.slice(5);
        v.add(G), (l[G] || []).forEach((I) => p.add(I));
      } else if (D.startsWith("seg:")) {
        const G = D.split(":"), I = +G[1], ne = +G[2], se = l[I] || [], fe = se[ne], Ie = se[ne + 1];
        fe != null && Ie != null && (_.push([fe, Ie]), p.add(fe), p.add(Ie));
      }
    }), !p.size) return 0;
    Wt();
    const c = [...s];
    let f = l.slice();
    f.length && f[f.length - 1].length === 0 && (f = f.slice(0, -1));
    const P = [...((_c = e.areas) == null ? void 0 : _c.rawVal) ?? []], X = [...p];
    for (let D = 1; D <= t; D++) {
      const G = n * D, I = o * D, ne = a * D, se = /* @__PURE__ */ new Map();
      X.forEach((fe) => {
        se.set(fe, c.length), c.push([s[fe][0] + G, s[fe][1] + I, s[fe][2] + ne]);
      }), v.forEach((fe) => {
        const Ie = l[fe].map((ve) => se.has(ve) ? se.get(ve) : ve), ge = f.length;
        f.push(Ie), d.has(fe) && P.push(ge);
      }), _.forEach(([fe, Ie]) => {
        f.push([se.get(fe), se.get(Ie)]);
      });
    }
    f.push([]), e.points.val = c, e.polylines && (e.polylines.val = f), e.areas && (e.areas.val = P);
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return M(), t;
  }, m.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z;
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
        le("\u26A0 Click rasante descartado \u2014 cay\xF3 demasiado lejos. Acerc\xE1 la vista o clicke\xE1 sobre la grilla.");
        return;
      }
    }
    let t = a[0].point;
    (n.ctrlKey || n.metaKey) && (t = new y(Math.round(a[0].point.x), Math.round(a[0].point.y), Math.round(a[0].point.z)));
    {
      const s = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], l = s[s.length - 1] ?? [], d = e.points.rawVal ?? [];
      if (l.length > 0) {
        const p = d[l[l.length - 1]];
        if (p) {
          const v = !!window.__hekatanOrthoMode;
          let _ = je;
          if (!_ && v) {
            const c = Math.abs(t.x - p[0]), f = Math.abs(t.y - p[1]), P = Math.abs(t.z - p[2]);
            _ = c >= f && c >= P ? "x" : f >= P ? "y" : "z";
          }
          _ === "x" ? t = new y(t.x, p[1], p[2]) : _ === "y" ? t = new y(p[0], t.y, p[2]) : _ === "z" && (t = new y(p[0], p[1], t.z));
        }
      }
    }
    if (st) t = st.clone(), le(`\u{1F4D0} Eje \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.2, l = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, s);
      if (l) t = new y(l.x, l.y, l.z), le(`\u{1F3AF} Snap [${l.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      else {
        const d = window.__hekatanSnapEnabled !== false, p = window.__hekatanSnap2D ?? 0;
        d && p > 0 && (t = new y(Math.round(t.x / p) * p, Math.round(t.y / p) * p, Math.round(t.z / p) * p));
      }
    }
    const r = ((_e = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e.tool) ?? "select";
    if (r === "select" || r === "none" || !r) {
      if (tt) {
        Vt && vn();
        const { kind: s, a: l, b: d } = tt, p = d !== void 0 ? `${s}:${l}:${d}` : `${s}:${l}`;
        n.ctrlKey || n.metaKey || n.shiftKey || ye.clear(), ye.has(p) ? ye.delete(p) : ye.add(p), Bt(), le(`\u2713 Seleccionados ${ye.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
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
          s && typeof s == "object" && "val" in s ? s.val = p : window.__hekatanDrawingAuxLines = p, le(`\u{1F5D1} L\xEDnea auxiliar #${d + 1} borrada`), dt = -1, ce.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (Ne >= 0) {
        const s = Ne, l = Ke;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(s)) ?? false ? (nn(s), le(`\u{1F5D1} \xC1rea #${s + 1} (shell Q4) borrada`)) : l >= 0 ? (En(s, l), le(`\u{1F5D1} Segmento ${l + 1} de polil\xEDnea #${s + 1} borrado`)) : (nn(s), le(`\u{1F5D1} Polil\xEDnea #${s + 1} borrada`));
      } else le("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (r === "circle") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        le("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [s, l] = Ee, d = Math.hypot(l[0] - s[0], l[1] - s[1], l[2] - s[2]);
      Math.abs(l[0] - s[0]);
      const p = Math.abs(l[1] - s[1]), _ = Math.abs(l[2] - s[2]) < 1e-3 ? "xy" : p < 1e-3 ? "xz" : "yz", c = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, s[0], s[1], s[2], d, c, _), le(`\u2713 C\xEDrculo dibujado en ${_.toUpperCase()} \u2014 r=${d.toFixed(2)}m, ${c} segmentos`), Ee = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (r === "arc") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        le("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (Ee.length === 2) {
        le("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [s, l, d] = Ee, p = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, s, l, d, p), le(`\u2713 Arco dibujado \u2014 ${p} segmentos`), Ee = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (r === "rect") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        le("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ee;
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, s, l), le(`\u2713 Rect\xE1ngulo dibujado \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Ee = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (r === "rectarea") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        le("\u25AD \xC1rea rectangular \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ee;
      (_p = window.__hekatanDrawRectArea) == null ? void 0 : _p.call(window, s, l), le(`\u2713 \xC1rea rectangular (shell Q4) creada \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Ee = [];
      return;
    }
    if (r === "polyarea") {
      me.push([t.x, t.y, t.z]), J.geometry.setFromPoints(me.map((s) => new y(s[0], s[1], s[2]))), J.visible = me.length >= 1, le(`\u25B0 \xC1rea libre \u2014 ${me.length} punto(s). Click m\xE1s v\xE9rtices, o Enter / click-derecho para cerrar y mallar (m\xEDn. 3).`), M();
      return;
    }
    if (r === "plane3") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length < 3) {
        le(`\u25E3 Plano inclinado \u2014 punto ${Ee.length}/3. Tip: cambi\xE1 la Cota Z (o enganch\xE1 un nodo) entre clicks para darle inclinaci\xF3n.`);
        return;
      }
      const [s, l, d] = Ee, p = (_q = window.__hekatanSetInclinedPlaneFrom3) == null ? void 0 : _q.call(window, s, l, d);
      le(p ? "\u2713 Plano de trabajo INCLINADO activo. Dibuj\xE1 el \xE1rea (\u25AD/\u2B21) sobre \xE9l. (XY para resetear)" : "\u26A0 Los 3 puntos son colineales \u2014 no definen un plano. Reintent\xE1."), Ee = [];
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
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        le("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [s, l] = Ee, d = Mt && Mt > 0 ? Mt : 3;
      Wt();
      const p = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [s[0], s[1], s[2]], [l[0], l[1], l[2]], [l[0], l[1], l[2] + d], [s[0], s[1], s[2] + d]];
      const v = e.polylines.rawVal;
      if (v.length - 1, e.polylines.val = [...v.slice(0, -1), ...v[v.length - 1].length > 0 ? [v[v.length - 1]] : [], [p, p + 1, p + 2, p + 3, p], []], e.areas) {
        const _ = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, _];
      }
      le(`\u25A5 Pared Q4 creada \u2014 h=${d.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Ee = [], Mt = 0;
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
      const d = e.polylines.rawVal, p = e.points.rawVal, v = d[l.polyIdx], _ = p[v[l.segIdx]], c = p[v[l.segIdx + 1]];
      if (!_ || !c) {
        le("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const f = Mt && Mt > 0 ? Mt : 3;
      Wt();
      const P = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [_[0], _[1], _[2]], [c[0], c[1], c[2]], [c[0], c[1], c[2] + f], [_[0], _[1], _[2] + f]];
      const X = e.polylines.rawVal;
      if (e.polylines.val = [...X.slice(0, -1), ...X[X.length - 1].length > 0 ? [X[X.length - 1]] : [], [P, P + 1, P + 2, P + 3, P], []], e.areas) {
        const D = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, D];
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
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        le("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [s, l] = Ee, d = window.__hekatanDrawingAuxLines;
      if (d) {
        const f = d.rawVal ?? d.val ?? [];
        d.val = [...f, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      const p = l[0] - s[0], v = l[1] - s[1], _ = l[2] - s[2], c = Math.sqrt(p * p + v * v + _ * _);
      le(`\u2713 L\xEDnea auxiliar creada \u2014 L=${c.toFixed(2)}m (cyan, no FEM)`), Ee = [];
      return;
    }
    if (r === "extend") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        le("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [s, l] = Ee, d = window.__hekatanDrawingAuxLines;
      if (d) {
        const p = d.rawVal ?? d.val ?? [];
        d.val = [...p, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      le("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Ee = [];
      return;
    }
    if (r === "chaflan") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        le("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ee, d = window.__hekatanChaflanR ?? 1, p = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_v = window.__hekatanDrawSlabChaflan) == null ? void 0 : _v.call(window, s, l, d, p, 6);
      const v = Math.abs(l[0] - s[0]).toFixed(1), _ = Math.abs(l[1] - s[1]).toFixed(1);
      le(`\u2713 Losa con chaflanes dibujada \u2014 ${v}\xD7${_}m, r=${d}m, ${p} seg/chafl\xE1n`), Ee = [];
      try {
        (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
      } catch {
      }
      return;
    }
    if (V = false, Wt(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
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
    const o = b(n);
    if (!o) return;
    k.setFromCamera(F, o);
    const a = O();
    if (Se.geometry.deleteAttribute("position"), a.length) {
      let t = a[0].point.clone();
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z));
      {
        const l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], d = l[l.length - 1] ?? [], p = e.points.rawVal ?? [];
        if (d.length > 0) {
          const v = p[d[d.length - 1]];
          if (v) {
            const _ = !!window.__hekatanOrthoMode;
            let c = je;
            if (!c && _) {
              const f = Math.abs(t.x - v[0]), P = Math.abs(t.y - v[1]), X = Math.abs(t.z - v[2]);
              c = f >= P && f >= X ? "x" : P >= X ? "y" : "z";
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
      Se.geometry.setAttribute("position", new gt(t.toArray(), 3));
    }
    M();
  }), m.addEventListener("pointermove", (n) => {
    var _a;
    const o = b(n);
    if (!o) return;
    k.setFromCamera(F, o);
    let a = false;
    const t = k.intersectObject(de), r = O();
    if (t.length && r.length) {
      const s = new y(...e.points.rawVal[t[0].index]), l = new y(...r[0].point), d = s.sub(l), p = (_a = r[0].face) == null ? void 0 : _a.normal;
      p.transformDirection(U.matrixWorld), Math.abs(d.dot(p)) < 1e-4 && (a = true);
    }
    Se.visible = !a;
  });
  let Yn = false, Nn;
  m.addEventListener("pointermove", (n) => {
    var _a;
    if (!Ot) return;
    const o = b(n);
    if (!o) return;
    k.setFromCamera(F, o);
    let a = false;
    const t = k.intersectObject(de), r = O();
    if (t.length && r.length) {
      const l = new y(...e.points.rawVal[t[0].index]), d = new y(...r[0].point), p = l.sub(d), v = (_a = r[0].face) == null ? void 0 : _a.normal;
      v.transformDirection(U.matrixWorld), Math.abs(p.dot(v)) < 1e-4 && (a = true);
    }
    if (a && Ot < 5 && (Yn = true, u.enabled = false, Nn = t[0].index), !Yn || Ot % 2 !== 0) return;
    const s = [...e.points.rawVal];
    if (Nn !== void 0) {
      let l = r[0].point;
      (n.ctrlKey || n.metaKey) && (l = new y(Math.round(l.x), Math.round(l.y), Math.round(l.z))), s[Nn] = l.toArray();
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
    const t = k.intersectObject(de), r = O();
    if (t.length && r.length) {
      const d = new y(...e.points.rawVal[t[0].index]), p = new y(...r[0].point), v = d.sub(p), _ = (_a = r[0].face) == null ? void 0 : _a.normal;
      _.transformDirection(U.matrixWorld), Math.abs(v.dot(_)) < 1e-4 && (a = true);
    }
    if (!a) return;
    const s = [...e.points.rawVal];
    if (s.splice(t[0].index, 1), e.points.val = s, !e.polylines) return;
    const l = e.polylines.rawVal.map((d) => d.filter((p) => p !== t[0].index)).map((d) => d.map((p) => p > t[0].index ? p - 1 : p)).filter((d) => d.length);
    l.push([]), e.polylines.val = l;
  });
}
function Vs(e, i, x) {
  const S = Math.round(14.999999999999998), w = { position: e.position.clone(), quaternion: e.quaternion.clone() }, m = setInterval(k, 1e3 / 30);
  let M = 0;
  function k() {
    M++;
    const F = M / S;
    e.position.lerpVectors(w.position, i.position, F), e.quaternion.slerpQuaternions(w.quaternion, i.quaternion, F), x && x(), M == S && clearInterval(m);
  }
}
function As(e, i, x, h) {
  const u = us(x, e.elements, h);
  return R.derive(() => {
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
  const u = new Je(), S = new $o();
  S.setColorMap("rainbow");
  const w = new It(), m = R.state([]);
  return R.derive(() => {
    var _a, _b, _c;
    i.deformedShape.val;
    const M = x.val, k = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], F = $s(i.frameResults.val);
    if (u.children.forEach((A) => {
      A.geometry && A.geometry.dispose(), A.material && A.material.dispose();
    }), u.clear(), !F || k.length === 0 || M.length === 0) {
      m.val = [];
      return;
    }
    const b = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, U = (_c = e.deformOutputs) == null ? void 0 : _c.val, pe = [], ie = [];
    for (let A = 0; A < k.length; A++) {
      if (k[A].length !== 2) continue;
      const oe = Is(F, A, b, U);
      oe && (pe.push(oe[0], oe[1]), ie.push({ idx: A, vals: oe }));
    }
    if (pe.length === 0) {
      m.val = [];
      return;
    }
    const Q = Math.min(...pe), g = Math.max(...pe);
    S.setMin(Q), S.setMax(g), m.val = pe;
    const O = [1 / 0, 1 / 0, 1 / 0], de = [-1 / 0, -1 / 0, -1 / 0];
    for (const A of M) for (let W = 0; W < 3; W++) O[W] = Math.min(O[W], A[W]), de[W] = Math.max(de[W], A[W]);
    const Me = Math.max(de[0] - O[0], de[1] - O[1], de[2] - O[2], 1) * Es, K = [], Y = [], N = [];
    let V = 0;
    for (const { idx: A, vals: W } of ie) {
      const oe = k[A], ee = M[oe[0]], q = M[oe[1]];
      if (!ee || !q) continue;
      const T = new y(q[0] - ee[0], q[1] - ee[1], q[2] - ee[2]), ae = T.length();
      if (ae < 1e-10) continue;
      T.normalize();
      const J = Math.abs(T.y) < 0.99 ? new y(0, 1, 0) : new y(1, 0, 0), me = new y().crossVectors(T, J).normalize(), re = new y().crossVectors(T, me).normalize(), Pe = Jn + 1, ue = Ts;
      for (let Fe = 0; Fe < Pe; Fe++) {
        const nt = Fe / Jn, ot = ee[0] + T.x * ae * nt, j = ee[1] + T.y * ae * nt, z = ee[2] + T.z * ae * nt, B = W[0] + (W[1] - W[0]) * nt, $ = S.getColor(B) ?? new It(0, 0, 0);
        w.copy($).convertSRGBToLinear();
        for (let H = 0; H < ue; H++) {
          const te = H / ue * Math.PI * 2, xe = Math.cos(te), we = Math.sin(te);
          K.push(ot + (me.x * xe + re.x * we) * Me, j + (me.y * xe + re.y * we) * Me, z + (me.z * xe + re.z * we) * Me), Y.push(w.r, w.g, w.b);
        }
      }
      for (let Fe = 0; Fe < Jn; Fe++) for (let nt = 0; nt < ue; nt++) {
        const ot = (nt + 1) % ue, j = V + Fe * ue + nt, z = V + Fe * ue + ot, B = V + (Fe + 1) * ue + nt, $ = V + (Fe + 1) * ue + ot;
        N.push(j, z, $), N.push(j, $, B);
      }
      V += Pe * ue;
    }
    if (K.length === 0) return;
    const C = new he();
    C.setAttribute("position", new gt(K, 3)), C.setAttribute("color", new gt(Y, 3)), C.setIndex(N), C.computeVertexNormals();
    const L = new Oe({ vertexColors: true, side: Ft }), E = new We(C, L);
    E.frustumCulled = false, u.add(E);
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
const Ys = 16755200, zo = 56831, Ns = 56831, Zs = 56831, kn = 65382;
function Us(e) {
  const i = new Je();
  i.name = "__hekatan_hover", i.renderOrder = 99;
  const x = new rn(1, 16, 16), h = new Oe({ color: Ys, transparent: true, opacity: 0.85, depthTest: false }), u = new We(x, h);
  u.visible = false, u.renderOrder = 100, i.add(u);
  const S = new he(), w = new lt({ color: zo, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), m = new Xt(S, w);
  m.visible = false, m.renderOrder = 100, i.add(m);
  const M = new Oe({ color: zo, transparent: true, opacity: 0.7, depthTest: false }), k = new We(new Mo(1, 1, 1, 12), M);
  k.visible = false, k.renderOrder = 100, i.add(k);
  const F = new he(), b = new Oe({ color: Ns, transparent: true, opacity: 0.45, side: Ft, depthTest: false }), U = new We(F, b);
  U.visible = false, U.renderOrder = 100, i.add(U);
  const pe = new he(), ie = new lt({ color: Zs, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), Q = new Xt(pe, ie);
  Q.visible = false, Q.renderOrder = 100, i.add(Q);
  const g = new Oe({ color: kn, transparent: true, opacity: 0.95, depthTest: false }), O = new Oe({ color: kn, transparent: true, opacity: 0.85, depthTest: false }), de = new Mo(1, 1, 1, 12), Se = new Oe({ color: kn, transparent: true, opacity: 0.55, side: Ft, depthTest: false }), Me = new lt({ color: kn, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), K = [];
  window.__hekatanModelSelection = K;
  const Y = new Je();
  Y.renderOrder = 101, i.add(Y);
  const N = document.createElement("div");
  Object.assign(N.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), N.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(N);
  }, 0);
  function V(j) {
    const z = e.derivedNodes.rawVal;
    return !z || j < 0 || j >= z.length ? null : new y(z[j][0], z[j][1], z[j][2]);
  }
  function C(j, z) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2;
    const B = e.getActiveCamera();
    if (!B || !e.mesh) return null;
    const $ = e.rendererElm.getBoundingClientRect(), H = j - $.left, te = z - $.top, xe = e.derivedNodes.rawVal, we = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!xe || !we) return null;
    const ke = /* @__PURE__ */ new Map(), Ve = (Xe) => {
      if (ke.has(Xe)) return ke.get(Xe);
      const Te = V(Xe);
      if (!Te) return ke.set(Xe, null), null;
      const be = Te.clone().project(B), Ye = (be.x * 0.5 + 0.5) * $.width, ce = (-be.y * 0.5 + 0.5) * $.height, Ne = { x: Ye, y: ce, z: be.z };
      return ke.set(Xe, Ne), Ne;
    }, Ae = /* @__PURE__ */ new Set();
    for (const Xe of we) if (Xe) for (const Te of Xe) Ae.add(Te);
    const $e = 8;
    let Re = -1, Ge = $e;
    for (let Xe = 0; Xe < xe.length; Xe++) {
      if (!Ae.has(Xe)) continue;
      const Te = Ve(Xe);
      if (!Te || Te.z < -1 || Te.z > 1) continue;
      const be = Te.x - H, Ye = Te.y - te, ce = Math.sqrt(be * be + Ye * Ye);
      ce < Ge && (Ge = ce, Re = Xe);
    }
    const ze = Bs(), rt = Xs[ze.dispUnit] ?? 1e3, Ze = Rs[ze.forceUnit] ?? 1;
    if (Re >= 0) {
      const Xe = xe[Re];
      let Te = `Nodo ${Re}
(${Xe[0].toFixed(3)}, ${Xe[1].toFixed(3)}, ${Xe[2].toFixed(3)})`;
      const be = (_c = (_b = e.mesh) == null ? void 0 : _b.deformOutputs) == null ? void 0 : _c.rawVal;
      if (be == null ? void 0 : be.deformations) {
        const Ye = be.deformations.get(Re);
        if (Ye && (Te += `
\u2500\u2500\u2500\u2500 \u0394 desplaz. \u2500\u2500\u2500\u2500`, Te += `
Ux = ${ct(Ye[0] * rt, 3)} ${ze.dispUnit}`, Te += `
Uy = ${ct(Ye[1] * rt, 3)} ${ze.dispUnit}`, Te += `
Uz = ${ct(Ye[2] * rt, 3)} ${ze.dispUnit}`, (Math.abs(Ye[3]) > 1e-9 || Math.abs(Ye[4]) > 1e-9 || Math.abs(Ye[5]) > 1e-9) && (Te += `
Rx = ${ct(Ye[3] * 1e3, 3)} mrad`, Te += `
Ry = ${ct(Ye[4] * 1e3, 3)} mrad`, Te += `
Rz = ${ct(Ye[5] * 1e3, 3)} mrad`)), be.reactions) {
          const ce = be.reactions.get(Re);
          ce && (Math.abs(ce[0]) > 1e-9 || Math.abs(ce[1]) > 1e-9 || Math.abs(ce[2]) > 1e-9 || Math.abs(ce[3]) > 1e-6 || Math.abs(ce[4]) > 1e-6 || Math.abs(ce[5]) > 1e-6) && (Te += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, Te += `
Fx = ${ct(ce[0] * Ze)} ${ze.forceUnit}`, Te += `
Fy = ${ct(ce[1] * Ze)} ${ze.forceUnit}`, Te += `
Fz = ${ct(ce[2] * Ze)} ${ze.forceUnit}`, (Math.abs(ce[3]) > 1e-6 || Math.abs(ce[4]) > 1e-6 || Math.abs(ce[5]) > 1e-6) && (Te += `
Mx = ${ct(ce[3] * Ze)} ${ze.forceUnit}\xB7m`, Te += `
My = ${ct(ce[4] * Ze)} ${ze.forceUnit}\xB7m`, Te += `
Mz = ${ct(ce[5] * Ze)} ${ze.forceUnit}\xB7m`));
        }
      }
      return { type: "node", idx: Re, info: Te };
    }
    const je = 5;
    let st = -1, et = je, Lt = "frame";
    for (let Xe = 0; Xe < we.length; Xe++) {
      const Te = we[Xe];
      if (!(!Te || Te.length < 2)) {
        if (Te.length === 2) {
          const be = Ve(Te[0]), Ye = Ve(Te[1]);
          if (!be || !Ye || be.z < -1 || be.z > 1 || Ye.z < -1 || Ye.z > 1) continue;
          const ce = Ks(H, te, be.x, be.y, Ye.x, Ye.y);
          ce < et && (et = ce, st = Xe, Lt = "frame");
        } else if (Te.length === 3 || Te.length === 4) {
          const be = [];
          let Ye = true;
          for (const ce of Te) {
            const Ne = Ve(ce);
            if (!Ne || Ne.z < -1 || Ne.z > 1) {
              Ye = false;
              break;
            }
            be.push(Ne);
          }
          if (!Ye) continue;
          if (Ws(H, te, be)) {
            const Ne = be.reduce((Ke, dt) => Ke + dt.z, 0) / be.length * 1e-3;
            Ne < et && (et = Ne, st = Xe, Lt = "shell");
          }
        } else if (Te.length === 8) {
          const be = [];
          let Ye = true;
          for (const ye of Te) {
            const Le = Ve(ye);
            if (!Le || Le.z < -1 || Le.z > 1) {
              Ye = false;
              break;
            }
            be.push(Le);
          }
          if (!Ye) continue;
          const ce = Math.min(...be.map((ye) => ye.x)), Ne = Math.max(...be.map((ye) => ye.x)), Ke = Math.min(...be.map((ye) => ye.y)), dt = Math.max(...be.map((ye) => ye.y));
          if (H >= ce && H <= Ne && te >= Ke && te <= dt) {
            const Le = be.reduce((He, pt) => He + pt.z, 0) / be.length * 1e-3;
            Le < et && (et = Le, st = Xe, Lt = "solid");
          }
        }
      }
    }
    if (st >= 0) {
      const Xe = we[st];
      let be = `${Lt === "frame" ? "Frame" : Lt === "shell" ? "Shell" : "Solid"} ${st}`;
      const Ye = (_e = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e.rawVal, ce = (_g = (_f = Ye == null ? void 0 : Ye.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, st);
      if (ce) {
        ce.name && (be += `
  \u{1F4CB} ${ce.name}`), ce.shape && (be += `
  Shape: ${ce.shape}`);
        const Ne = /concrete|hormig|rect.*sólida/i.test(ce.shape || ""), Ke = Ne ? 100 : 1e3, dt = Ne ? "cm" : "mm", ye = (He) => {
          const pt = He * Ke;
          return Math.abs(pt - Math.round(pt)) < 0.05 ? `${Math.round(pt)}` : `${pt.toFixed(1)}`;
        }, Le = [];
        if (ce.D != null && Le.push(`D=${ye(ce.D)}`), ce.B != null && Le.push(`B=${ye(ce.B)}`), ce.TF != null && Le.push(`TF=${ye(ce.TF)}`), ce.TW != null && Le.push(`TW=${ye(ce.TW)}`), ce.t != null && Le.push(`t=${ye(ce.t)}`), Le.length && (be += `
  Dim: ${Le.join(" ")} ${dt}`), ce.material) {
          let He = ce.material;
          ce.fillMaterial && (He += ` + FILL "${ce.fillMaterial}"`), be += `
  Mat: ${He}`;
        }
      } else {
        const Ne = (_i = (_h = Ye == null ? void 0 : Ye.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, st), Ke = (_k = (_j = Ye == null ? void 0 : Ye.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, st);
        Ne ? (be += `
  ${Ne}`, Ke && !Ne.includes(Ke) && (be += `  (${Ke})`)) : Ke && (be += `
  Material: ${Ke}`);
      }
      if (be += `
nodos: [${Xe.join(", ")}]`, Lt === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const Ne = e.mesh.analyzeOutputs.rawVal, Ke = Ds[ze.stressUnit] ?? 1, dt = [["bendingXX", "Mxx", Ze, `${ze.forceUnit}\xB7m/m`], ["bendingYY", "Myy", Ze, `${ze.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", Ze, `${ze.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", Ze, `${ze.forceUnit}/m`], ["membraneYY", "Nyy", Ze, `${ze.forceUnit}/m`], ["membraneXY", "Nxy", Ze, `${ze.forceUnit}/m`], ["shearX", "Qx", Ze, `${ze.forceUnit}/m`], ["shearY", "Qy", Ze, `${ze.forceUnit}/m`], ["vonMises", "\u03C3VM", Ke, ze.stressUnit], ["pressure", "p", Ke, ze.stressUnit]], ye = [];
        for (const [Le, He, pt, Dt] of dt) {
          const ft = Ne == null ? void 0 : Ne[Le];
          if (ft && ft instanceof Map) {
            const Pt = ft.get(st);
            if (Pt != null) {
              if (typeof Pt == "number") ye.push(`${He} = ${ct(Pt * pt, 3)} ${Dt}`);
              else if (Array.isArray(Pt)) {
                let tt = Pt[0];
                for (const Ht of Pt) Math.abs(Ht) > Math.abs(tt) && (tt = Ht);
                ye.push(`${He} = ${ct(tt * pt, 3)} ${Dt}`);
              }
            }
          }
        }
        ye.length > 0 && (be += `
\u2500\u2500\u2500\u2500 results \u2500\u2500\u2500\u2500
` + ye.slice(0, 8).join(`
`));
      }
      if (Lt === "frame" && ((_m = e.mesh) == null ? void 0 : _m.deformOutputs) && e.mesh.elementInputs) {
        const Ne = e.mesh.deformOutputs.rawVal, Ke = e.mesh.elementInputs.rawVal, dt = Ne == null ? void 0 : Ne.deformations;
        if (dt && Xe.length === 2) {
          const ye = dt.get(Xe[0]), Le = dt.get(Xe[1]), He = xe[Xe[0]], pt = xe[Xe[1]];
          if (ye && Le && He && pt) {
            const Dt = pt[0] - He[0], ft = pt[1] - He[1], Pt = pt[2] - He[2], tt = Math.sqrt(Dt * Dt + ft * ft + Pt * Pt);
            if (tt > 1e-9) {
              const Ht = Dt / tt, Bt = ft / tt, tn = Pt / tt, qt = (Le[0] - ye[0]) * Ht + (Le[1] - ye[1]) * Bt + (Le[2] - ye[2]) * tn, Jt = ((_n2 = Ke.elasticities) == null ? void 0 : _n2.get(st)) ?? 0, An = ((_o2 = Ke.areas) == null ? void 0 : _o2.get(st)) ?? 0, Tn = ((_p = Ke.momentsOfInertiaY) == null ? void 0 : _p.get(st)) ?? 0, nn = ((_q = Ke.momentsOfInertiaZ) == null ? void 0 : _q.get(st)) ?? 0, En = ((_r = Ke.torsionalConstants) == null ? void 0 : _r.get(st)) ?? 0, cn = ((_s2 = Ke.shearModuli) == null ? void 0 : _s2.get(st)) ?? Jt / 2.6, zt = Jt * An * (qt / tt), Rt = (Le[3] - ye[3]) * Ht + (Le[4] - ye[4]) * Bt + (Le[5] - ye[5]) * tn, Yt = cn * En * (Rt / tt), Qt = Le[4] - ye[4], $n = Le[5] - ye[5], Nt = Jt * Tn * Qt / tt, dn = Jt * nn * $n / tt;
              be += `
\u2500\u2500\u2500\u2500 frame \u2500\u2500\u2500\u2500`, be += `
L = ${ct(tt, 3)} m`, be += `
\u0394L = ${ct(qt * rt, 3)} ${ze.dispUnit}`, be += `
\u03B5 = ${ct(qt / tt, 6)}`, Math.abs(zt) > 1e-6 && (be += `
N \u2248 ${ct(zt * Ze)} ${ze.forceUnit}`), Math.abs(Yt) > 1e-6 && (be += `
T \u2248 ${ct(Yt * Ze)} ${ze.forceUnit}\xB7m`), Math.abs(Nt) > 1e-6 && (be += `
My \u2248 ${ct(Nt * Ze)} ${ze.forceUnit}\xB7m`), Math.abs(dn) > 1e-6 && (be += `
Mz \u2248 ${ct(dn * Ze)} ${ze.forceUnit}\xB7m`);
            }
          }
        }
      }
      return { type: Lt, idx: st, info: be };
    }
    return null;
  }
  function L(j, z, B) {
    var _a, _b, _c;
    if (u.visible = false, m.visible = false, k.visible = false, U.visible = false, Q.visible = false, !j || !e.mesh) {
      N.style.display = "none", e.render();
      return;
    }
    const $ = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (j.type === "node") {
      const we = V(j.idx);
      if (we) {
        const ke = e.derivedNodes.rawVal ?? [];
        let Ve = 1;
        if (ke.length >= 2) {
          let Re = [1 / 0, 1 / 0, 1 / 0], Ge = [-1 / 0, -1 / 0, -1 / 0];
          for (const ze of ke) for (let rt = 0; rt < 3; rt++) ze[rt] < Re[rt] && (Re[rt] = ze[rt]), ze[rt] > Ge[rt] && (Ge[rt] = ze[rt]);
          Ve = Math.max(Ge[0] - Re[0], Ge[1] - Re[1], Ge[2] - Re[2], 0.1);
        }
        const Ae = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, $e = 0.021 * Ve * Ae;
        u.position.copy(we), u.scale.setScalar($e), u.visible = true;
      }
    } else if (j.type === "frame" && $) {
      const we = $[j.idx], ke = V(we[0]), Ve = V(we[1]);
      if (ke && Ve) {
        const Ae = ke.clone().add(Ve).multiplyScalar(0.5), $e = Ve.clone().sub(ke), Re = $e.length(), rt = e.getActiveCamera().position.distanceTo(Ae) * 35e-4;
        k.position.copy(Ae);
        const Ze = new y(0, 1, 0), je = Ze.clone().cross($e).normalize(), st = Ze.angleTo($e);
        k.quaternion.setFromAxisAngle(je, st), k.scale.set(rt, Re, rt), k.visible = true;
      }
    } else if (j.type === "shell" && $) {
      const we = $[j.idx], ke = [], Ve = [];
      for (const Ae of we) {
        const $e = V(Ae);
        if (!$e) return;
        ke.push($e.x, $e.y, $e.z);
      }
      we.length === 4 ? Ve.push(0, 1, 2, 0, 2, 3) : we.length === 3 && Ve.push(0, 1, 2), F.setAttribute("position", new gt(ke, 3)), F.setIndex(Ve), F.computeVertexNormals(), U.visible = true;
    } else if (j.type === "solid" && $) {
      const we = $[j.idx], ke = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], Ve = [];
      for (const [Ae, $e] of ke) {
        const Re = V(we[Ae]), Ge = V(we[$e]);
        Re && Ge && Ve.push(Re.x, Re.y, Re.z, Ge.x, Ge.y, Ge.z);
      }
      pe.setAttribute("position", new gt(Ve, 3)), Q.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      N.style.display = "none", e.render();
      return;
    }
    N.textContent = j.info, N.style.whiteSpace = "pre-line", N.style.display = "block";
    const te = e.rendererElm.getBoundingClientRect(), xe = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? te;
    N.style.left = `${z - xe.left}px`, N.style.top = `${B - xe.top}px`, e.render();
  }
  let E = "", A = 0, W = 0;
  const oe = window.__hekatanHoverDebug ?? false, ee = (j) => {
    A && cancelAnimationFrame(A), A = requestAnimationFrame(() => {
      var _a, _b, _c;
      const z = C(j.clientX, j.clientY);
      if (oe && W < 5) {
        const $ = e.derivedNodes.rawVal, H = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${j.clientX}, ${j.clientY}) nodes=${($ == null ? void 0 : $.length) ?? 0} elems=${(H == null ? void 0 : H.length) ?? 0} hover=`, z), W++;
      }
      const B = z ? `${z.type}:${z.idx}` : "";
      if (B !== E) E = B, L(z, j.clientX, j.clientY);
      else if (z) {
        const $ = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        N.style.left = `${j.clientX - $.left}px`, N.style.top = `${j.clientY - $.top}px`;
      }
    });
  };
  let q = null;
  const T = () => {
    E = "", u.visible = false, m.visible = false, k.visible = false, U.visible = false, Q.visible = false, N.style.display = "none", e.render();
  }, ae = (j) => {
    const z = e.rendererElm.getBoundingClientRect(), B = j.clientX - z.left, $ = j.clientY - z.top;
    (B < -2 || $ < -2 || B > z.width + 2 || $ > z.height + 2) && (q && clearTimeout(q), q = window.setTimeout(T, 200));
  }, J = () => {
    q && (clearTimeout(q), q = null);
  };
  e.rendererElm.addEventListener("pointermove", ee), e.rendererElm.addEventListener("pointerleave", ae), e.rendererElm.addEventListener("pointerenter", J);
  function me() {
    var _a, _b, _c;
    const j = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    return j === "select" || j === "none" || !j;
  }
  let re = null;
  e.rendererElm.addEventListener("pointerdown", (j) => {
    j.button === 0 && (re = { x: j.clientX, y: j.clientY });
  }), e.rendererElm.addEventListener("pointerup", (j) => {
    if (j.button !== 0 || !re) return;
    const z = j.clientX - re.x, B = j.clientY - re.y;
    if (re = null, z * z + B * B > 9 || !me()) return;
    const $ = C(j.clientX, j.clientY);
    $ ? (nt({ type: $.type, idx: $.idx }, j.shiftKey), Fe()) : ot();
  }), window.addEventListener("keydown", (j) => {
    if (j.key !== "Escape" || !K.length) return;
    const z = document.activeElement, B = !!z && (z.id === "hk3-cmd-input" || z.id === "hk-dyn-input") && z.value === "";
    z && (z.tagName === "INPUT" || z.tagName === "TEXTAREA" || z.isContentEditable) && !B || ot();
  }, { capture: true });
  function Pe() {
    for (const j of Y.children.slice()) {
      Y.remove(j);
      const z = j.geometry;
      z && z !== x && z !== de && z.dispose();
    }
  }
  function ue(j, z) {
    var _a, _b, _c;
    const B = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
    if (j.type === "node") {
      const $ = V(j.idx);
      if (!$) return;
      const H = ((_c = e.derivedDisplayScale) == null ? void 0 : _c.rawVal) ?? 1, te = new We(x, g);
      te.position.copy($), te.scale.setScalar(0.025 * z * H), te.renderOrder = 101, Y.add(te);
    } else if (j.type === "frame" && B) {
      const $ = B[j.idx], H = V($[0]), te = V($[1]);
      if (!H || !te) return;
      const xe = H.clone().add(te).multiplyScalar(0.5), we = te.clone().sub(H), ke = we.length(), Ve = e.getActiveCamera().position.distanceTo(xe), Ae = new We(de, O);
      Ae.position.copy(xe);
      const $e = new y(0, 1, 0);
      Ae.quaternion.setFromAxisAngle($e.clone().cross(we).normalize(), $e.angleTo(we)), Ae.scale.set(Ve * 35e-4, ke, Ve * 35e-4), Ae.renderOrder = 101, Y.add(Ae);
    } else if (j.type === "shell" && B) {
      const $ = B[j.idx], H = [], te = [];
      for (const ke of $) {
        const Ve = V(ke);
        if (!Ve) return;
        H.push(Ve.x, Ve.y, Ve.z);
      }
      $.length === 4 ? te.push(0, 1, 2, 0, 2, 3) : $.length === 3 && te.push(0, 1, 2);
      const xe = new he();
      xe.setAttribute("position", new gt(H, 3)), xe.setIndex(te), xe.computeVertexNormals();
      const we = new We(xe, Se);
      we.renderOrder = 101, Y.add(we);
    } else if (j.type === "solid" && B) {
      const $ = B[j.idx], H = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], te = [];
      for (const [ke, Ve] of H) {
        const Ae = V($[ke]), $e = V($[Ve]);
        Ae && $e && te.push(Ae.x, Ae.y, Ae.z, $e.x, $e.y, $e.z);
      }
      const xe = new he();
      xe.setAttribute("position", new gt(te, 3));
      const we = new Xt(xe, Me);
      we.renderOrder = 101, Y.add(we);
    }
  }
  function Fe() {
    if (Pe(), !K.length || !e.mesh) {
      e.render();
      return;
    }
    const j = e.derivedNodes.rawVal ?? [];
    let z = 1;
    if (j.length >= 2) {
      const B = [1 / 0, 1 / 0, 1 / 0], $ = [-1 / 0, -1 / 0, -1 / 0];
      for (const H of j) for (let te = 0; te < 3; te++) H[te] < B[te] && (B[te] = H[te]), H[te] > $[te] && ($[te] = H[te]);
      z = Math.max($[0] - B[0], $[1] - B[1], $[2] - B[2], 0.1);
    }
    for (const B of K) ue(B, z);
    e.render();
  }
  function nt(j, z) {
    const B = K.findIndex(($) => $.type === j.type && $.idx === j.idx);
    B >= 0 ? K.splice(B, 1) : z || K.push(j), K.length && K[K.length - 1];
  }
  function ot() {
    K.length = 0, Fe();
  }
  return R.derive(() => {
    e.derivedNodes.val, K.length && Fe();
  }), i;
}
function Ks(e, i, x, h, u, S) {
  const w = u - x, m = S - h, M = w * w + m * m;
  if (M < 1e-9) {
    const ie = e - x, Q = i - h;
    return Math.sqrt(ie * ie + Q * Q);
  }
  let k = ((e - x) * w + (i - h) * m) / M;
  k = Math.max(0, Math.min(1, k));
  const F = x + k * w, b = h + k * m, U = e - F, pe = i - b;
  return Math.sqrt(U * U + pe * pe);
}
function Ws(e, i, x) {
  let h = false;
  for (let u = 0, S = x.length - 1; u < x.length; S = u++) {
    const w = x[u].x, m = x[u].y, M = x[S].x, k = x[S].y;
    m > i != k > i && e < (M - w) * (i - m) / (k - m + 1e-12) + w && (h = !h);
  }
  return h;
}
function Co(e, i = 8) {
  const x = document.createElement("div");
  x.id = "legend", x.style.setProperty("--legend-n", String(i)), setTimeout(() => {
    R.derive(() => {
      Vn.val, x.style.background = ps();
    });
  });
  const h = document.createElement("div");
  h.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", x.appendChild(h), setTimeout(() => {
    R.derive(() => {
      h.textContent = On.val ? `[${On.val}]` : "";
    });
  });
  const u = Array.from({ length: i + 1 }, (M, k) => k / i).reverse();
  let S, w;
  u.forEach((M, k) => {
    S = document.createElement("div"), S.id = `marker-${k}`, S.className = "marker", S.style.marginTop = k == 0 ? "0px" : "calc(var(--legend-h) / var(--legend-n) - 1px)", w = document.createElement("p"), w.id = `marker-text-${k}`, S.append(w), x.append(S);
  });
  const m = [];
  return x.querySelectorAll("p").forEach((M) => m.push(M)), setTimeout(() => {
    R.derive(() => {
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
  const h = e.filter((w) => Number.isFinite(w));
  if (h.length === 0) return "0";
  let u = Math.min(...h);
  const S = Math.max(...h);
  return u >= 0 && S > 0 && (u = 0), (u + i * (S - u)).toPrecision(3);
}
function aa({ mesh: e, settingsObj: i, drawingObj: x, objects3D: h, solids: u }) {
  rs.DEFAULT_UP = new y(0, 0, 1);
  const S = document.createElement("div"), w = new os(), m = new ss(45, 1, 0.1, 2 * 1e6), M = new as(-10, 10, 10, -10, -1e3, 2e6);
  let k = m;
  const F = new is({ antialias: true });
  F.localClippingEnabled = true;
  const b = new _o(m, F.domElement);
  b.enableDamping = true, b.dampingFactor = 0.1, b.screenSpacePanning = true, b.zoomSpeed = 0.8, b.panSpeed = 1.2, b.rotateSpeed = 0.9, b.keyPanSpeed = 12, b.listenToKeyEvents(window), b.touches = { ONE: _n.ROTATE, TWO: _n.DOLLY_PAN }, F.domElement.addEventListener("wheel", (z) => {
    if (!z.ctrlKey && Math.abs(z.deltaX) > Math.abs(z.deltaY) * 1.5) {
      z.preventDefault();
      const B = b.target, $ = new y().subVectors(m.position, B), H = new y();
      H.crossVectors(m.up, $).normalize();
      const xe = $.length() * 1e-3 * b.panSpeed;
      B.addScaledVector(H, z.deltaX * xe), m.position.addScaledVector(H, z.deltaX * xe), b.update();
    }
  }, { passive: false });
  const U = new Gn(new y(-1, 0, 0), 0), pe = new Gn(new y(0, -1, 0), 0), ie = new Gn(new y(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function Q() {
    const z = window.__hekatanClip, B = [];
    z.enableX && (U.normal.set(z.invertX ? 1 : -1, 0, 0), U.constant = z.invertX ? -z.posX : z.posX, B.push(U)), z.enableY && (pe.normal.set(0, z.invertY ? 1 : -1, 0), pe.constant = z.invertY ? -z.posY : z.posY, B.push(pe)), z.enableZ && (ie.normal.set(0, 0, z.invertZ ? 1 : -1), ie.constant = z.invertZ ? -z.posZ : z.posZ, B.push(ie)), F.clippingPlanes = B, w.traverse((H) => {
      const te = H;
      if (te.material) {
        const xe = Array.isArray(te.material) ? te.material : [te.material];
        for (const we of xe) we.clippingPlanes = B, we.needsUpdate = true;
      }
    });
    const $ = window.__hekatanPanes ?? [];
    for (const H of $) try {
      H && typeof H.refresh == "function" && H.refresh();
    } catch {
    }
    F.render(w, k);
  }
  Q(), window.__hekatanClipApply = Q;
  const g = hs(i), O = R.derive(() => Math.pow(10, g.displayScale.val / 10)), de = Hs(e, g), Se = () => {
    const z = [];
    return g.gridXY.rawVal && z.push("xy"), g.gridXZ.rawVal && z.push("xz"), g.gridYZ.rawVal && z.push("yz"), z;
  }, Me = () => {
    const z = g.gridStep.rawVal, B = Math.max(z, g.gridMajor.rawVal);
    return { planes: Se(), majorStep: B, minorStep: z };
  };
  let K = qn(g.gridSize.rawVal, Me());
  K.visible = g.gridVisible.rawVal, window.__hekatanSnap2D = g.cursorSnap.rawVal;
  const Y = () => {
    const z = Math.max(0, Math.min(1, g.gridOpacity.rawVal));
    K.traverse((B) => {
      const $ = B.material;
      if (!$ || !("opacity" in $)) return;
      const H = B.name ?? "";
      let te = 0.35;
      H.includes("border") ? te = 1 : H.includes("major") && (te = 0.75), $.opacity = z * te;
    });
  };
  Y(), S.appendChild(fs(g, e, u)), S.setAttribute("id", "viewer"), S.appendChild(F.domElement), F.setPixelRatio(window.devicePixelRatio);
  const N = en();
  F.setClearColor(N.background, 1);
  const V = g.gridSize.rawVal, C = V * 0.5 + V * 0.5 / Math.tan(45 * 0.5);
  m.position.set(0, 0, C), m.up.set(0, 1, 0), b.target.set(0, 0, 0), b.minDistance = 0.1, b.maxDistance = 1e4, S.__settings = g, b.zoomSpeed = 1, b._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, b.update();
  let L = ko(g.gridSize.rawVal, g.flipAxes.rawVal);
  w.add(K, L), R.derive(() => {
    window.__hekatanGridPlaneXY = g.gridXY.val, window.__hekatanGridPlaneXZ = g.gridXZ.val, window.__hekatanGridPlaneYZ = g.gridYZ.val;
  });
  let E = true;
  R.derive(() => {
    const z = g.gridVisible.val;
    if (E) {
      E = false;
      return;
    }
    K.visible = z, J();
  });
  let A = true;
  R.derive(() => {
    if (g.gridOpacity.val, A) {
      A = false;
      return;
    }
    Y(), J();
  }), R.derive(() => {
    const z = g.cursorSnap.val;
    window.__hekatanSnap2D = z;
  });
  let W = true;
  R.derive(() => {
    var _a;
    const z = g.gridSize.val, B = g.flipAxes.val;
    if (g.gridXY.val, g.gridXZ.val, g.gridYZ.val, g.gridStep.val, g.gridMajor.val, W) {
      W = false;
      return;
    }
    w.remove(K), (_a = K.traverse) == null ? void 0 : _a.call(K, (te) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = te.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = te.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), K = qn(z, Me()), K.visible = g.gridVisible.rawVal, w.add(K), Y(), w.remove(L), L.traverse((te) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = te.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = te.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), L = ko(z, B), w.add(L);
    const $ = z * 0.5 + z * 0.5 / Math.tan(45 * 0.5);
    m.position.distanceTo(b.target), Math.abs(m.position.x) < 0.1 && Math.abs(m.position.y) < 0.1 && m.position.z > 0 ? m.position.set(0, 0, $) : m.position.set(0.5 * z, -$, 0.5 * z), b.target.set(0, 0, 0), b.minDistance = Math.max(0.05, z * 0.01), b.maxDistance = Math.max(50, z * 50), b.update(), J();
  }), new ResizeObserver((z) => {
    var _a, _b;
    for (const B of z) {
      const $ = (_a = B.target) == null ? void 0 : _a.clientWidth, H = (_b = B.target) == null ? void 0 : _b.clientHeight;
      if ($ === 0 || H === 0) continue;
      const xe = (ee ? $ / 2 : $) / H;
      m.aspect = xe, m.updateProjectionMatrix();
      const we = M.top;
      if (M.left = -we * xe, M.right = we * xe, M.updateProjectionMatrix(), q && q.isPerspectiveCamera) q.aspect = xe, q.updateProjectionMatrix();
      else if (q && q.isOrthographicCamera) {
        const ke = q, Ve = ke.top;
        ke.left = -Ve * xe, ke.right = Ve * xe, ke.updateProjectionMatrix();
      }
      F.setSize($, H), J();
    }
  }).observe(S), b.addEventListener("change", J), R.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, g.displayScale.val, g.nodes.val, g.elements.val, (_g = g.edges) == null ? void 0 : _g.val, g.elemColumns.val, g.elemBeams.val, g.nodesIndexes.val, g.elementsIndexes.val, g.orientations.val, g.sections.val, g.secColumns.val, g.secBeams.val, g.secFloor.val, g.supports.val, g.loads.val, g.deformedShape.val, g.nodeResults.val, g.frameResults.val, g.shellResults.val, (_h = g.solidResults) == null ? void 0 : _h.val, setTimeout(J);
  });
  let ee = false, q = null, T = null, ae = false;
  function J() {
    const z = S.clientWidth || 1, B = S.clientHeight || 1;
    if (!ee || !q) {
      F.setScissorTest(false), F.setViewport(0, 0, z, B), F.render(w, k);
      return;
    }
    const $ = z / 2;
    F.setScissorTest(true), F.setViewport(0, 0, $, B), F.setScissor(0, 0, $, B), F.render(w, k), F.setViewport($, 0, $, B), F.setScissor($, 0, $, B), F.render(w, q), F.setScissorTest(false);
  }
  function me(z) {
    k = z, b.object = z, b.update(), J();
  }
  function re(z, B) {
    ee = z, B && (q = B);
    const $ = S.clientWidth || 1, H = S.clientHeight || 1, xe = (z ? $ / 2 : $) / H;
    m.isPerspectiveCamera && (m.aspect = xe, m.updateProjectionMatrix());
    const we = M.top;
    if (M.left = -we * xe, M.right = we * xe, M.updateProjectionMatrix(), z && q) {
      if (T ? (T.object = q, T.update()) : (T = new _o(q, F.domElement), T.enableDamping = true, T.dampingFactor = 0.1, T.screenSpacePanning = true, T.zoomSpeed = 0.8, T.panSpeed = 1.2, T.rotateSpeed = 0.9, T.touches = { ONE: _n.ROTATE, TWO: _n.DOLLY_PAN }, T.target.copy(b.target), T.addEventListener("change", J), T.enabled = false), !ae) {
        const ke = (Ve) => {
          if (!ee || !T) return;
          const Ae = F.domElement.getBoundingClientRect(), $e = Ve.clientX - Ae.left, Re = Ae.width / 2, Ge = $e >= Re;
          b.enabled = !Ge, T.enabled = Ge;
        };
        F.domElement.addEventListener("pointerdown", ke, true), F.domElement.addEventListener("wheel", ke, { capture: true, passive: true }), ae = true;
      }
    } else z || (b.enabled = true, T && (T.enabled = false));
    S.__splitMode = z, window.__hekatanSplitMode = z, window.__hekatanSplitCamera = z ? q : null, J();
  }
  if (e) {
    w.add(ms(g, de, O), cs(e, g, de), xs(g, de, O), gs(e, g, de, O), ws(e, g, de, O), ys(e, g, de, O), bs(e, g, de, O), Ss(e, g, de, O), Cs(e, g, de, O), ks(e, g, de, O));
    const z = Us({ scene: w, rendererElm: F.domElement, getActiveCamera: () => k, derivedNodes: de, derivedDisplayScale: O, mesh: e, settings: g, render: J });
    w.add(z);
    const B = ea(e, g), $ = As(e, g, de, B), H = Co(B);
    w.add($), S.appendChild(H);
    const te = Ls(e, g, de);
    w.add(te);
    const xe = te.__colorMapValues, we = Co(xe);
    we.id = "frame-legend", S.appendChild(we), R.derive(() => {
      var _a;
      const ke = g.shellResults.val != "none", Ve = (((_a = g.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", Ae = ke || Ve, $e = g.frameResults.val.startsWith("contour:");
      H.hidden = !Ae, $.visible = Ae, we.hidden = !$e;
    });
  }
  if (u) {
    const z = new ls(16777215, 0.5);
    w.add(z);
    const B = new bo(16777215, 0.5);
    B.position.set(30, 25, -10), B.shadow.mapSize.width = 1024, B.shadow.mapSize.height = 1024, w.add(B);
    const $ = 10;
    B.shadow.camera.left = -$, B.shadow.camera.right = $, B.shadow.camera.top = $, B.shadow.camera.bottom = -$, B.shadow.camera.far = 1e3;
    const H = new bo(16777215, 0.5);
    H.color.setHSL(11, 43, 96), H.position.set(-10, 0, 30), w.add(H), R.derive(() => {
      (u == null ? void 0 : u.val.length) && (w.remove(...u.oldVal), w.add(...u.rawVal), J());
    }), R.derive(() => {
      u.rawVal.forEach((te) => te.visible = g.solids.val), J();
    });
  }
  if (h) {
    const z = [], B = (H) => {
      var _a;
      return ((_a = H == null ? void 0 : H.userData) == null ? void 0 : _a.isCota) ? g.showCotas.val : g.custom3D.val;
    }, $ = () => {
      for (const H of z) H.visible = B(H);
      J();
    };
    R.derive(() => {
      const H = h.val;
      z.length && (w.remove(...z), z.length = 0), H.length && (w.add(...H), z.push(...H), $()), J();
    }), R.derive(() => {
      g.custom3D.val, $();
    }), R.derive(() => {
      g.showCotas.val, $();
    });
  }
  x && Fs({ drawingObj: x, gridObj: K, scene: w, getActiveCamera: () => k, controls: b, gridSize: V, derivedDisplayScale: O, rendererElm: F.domElement, viewerRender: J }), Vo((z, B) => {
    var _a;
    F.setClearColor(B.background, 1), w.remove(K), (_a = K.traverse) == null ? void 0 : _a.call(K, ($) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = $.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = $.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), K = qn(g.gridSize.rawVal, { planes: Se() }), w.add(K), S.style.setProperty("--awatif-legend-color", B.legendMarker), J();
  });
  const Pe = { scene: w, perspCamera: m, orthoCamera: M, get camera() {
    return k;
  }, controls: b, renderer: F, rendererElm: F.domElement, render: J, setActiveCamera: me, setSplitMode: re, get splitMode() {
    return ee;
  }, get splitCamera() {
    return q;
  }, settings: g };
  S.__ctx = Pe;
  const ue = document.createElement("div");
  ue.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const Fe = (z, B, $) => {
    const H = document.createElement("button");
    return H.textContent = z, H.title = B, H.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), H.onmouseenter = () => {
      H.style.background = "rgba(70,70,70,0.9)";
    }, H.onmouseleave = () => {
      H.style.background = "rgba(40,40,40,0.85)";
    }, H.onclick = (te) => {
      te.preventDefault(), $();
    }, H;
  }, nt = (z, B) => {
    const $ = b.target, H = new y().subVectors(k.position, $), te = H.length(), xe = new y(), we = new y();
    xe.crossVectors(k.up, H).normalize(), we.copy(k.up).normalize();
    const ke = te * 0.05;
    $.addScaledVector(xe, -z * ke), $.addScaledVector(we, B * ke), k.position.addScaledVector(xe, -z * ke), k.position.addScaledVector(we, B * ke), b.update(), J();
  }, ot = (z) => {
    const B = new y().subVectors(k.position, b.target);
    B.multiplyScalar(z), k.position.copy(b.target).add(B), b.update(), J();
  }, j = () => {
    const z = document.createElement("div");
    return z.style.cssText = "width:32px;height:32px;", z;
  };
  return ue.append(j()), ue.append(Fe("\u2191", "Pan arriba", () => nt(0, 1))), ue.append(Fe("\u2295", "Zoom in", () => ot(0.85))), ue.append(Fe("\u2190", "Pan izquierda", () => nt(-1, 0))), ue.append(Fe("\u2302", "Reset vista", () => {
    b.reset(), J();
  })), ue.append(Fe("\u2192", "Pan derecha", () => nt(1, 0))), ue.append(Fe("\u2296", "Zoom out", () => ot(1.18))), ue.append(Fe("\u2193", "Pan abajo", () => nt(0, -1))), ue.append(j()), getComputedStyle(S).position === "static" && (S.style.position = "relative"), S.appendChild(ue), S;
}
function Hs(e, i) {
  return R.derive(() => {
    var _a, _b, _c, _d;
    if (!i.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const x = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], h = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!h || x.length === 0) return x;
    const u = i.deformScale.val, S = i.deformScale.val * i.deformScaleZ.val, w = Number.isFinite(u) ? u : 1, m = Number.isFinite(S) ? S : 1;
    return x.map((M, k) => {
      var _a2;
      const F = ((_a2 = h.get(k)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], b = Number.isFinite(F[0]) ? F[0] : 0, U = Number.isFinite(F[1]) ? F[1] : 0, pe = Number.isFinite(F[2]) ? F[2] : 0;
      return [M[0] + b * w, M[1] + U * w, M[2] + pe * m];
    });
  });
}
const to = R.state(null), On = R.state(""), qs = R.state("kN"), Js = R.state("mm"), Qs = R.state("kN/m\xB2"), Os = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, Fo = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, js = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function ea(e, i) {
  const x = R.state([]);
  let h;
  return ((u) => {
    u.bendingXX = "bendingXX", u.bendingYY = "bendingYY", u.bendingXY = "bendingXY", u.membraneXX = "membraneXX", u.membraneYY = "membraneYY", u.membraneXY = "membraneXY", u.tranverseShearX = "tranverseShearX", u.tranverseShearY = "tranverseShearY", u.membranePrincipalMax = "membranePrincipalMax", u.membranePrincipalMin = "membranePrincipalMin", u.bendingPrincipalMax = "bendingPrincipalMax", u.bendingPrincipalMin = "bendingPrincipalMin", u.transverseShearMax = "transverseShearMax", u.vonMises = "vonMises", u.pressure = "pressure", u.displacementX = "displacementX", u.displacementY = "displacementY", u.displacementZ = "displacementZ";
  })(h || (h = {})), R.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const u = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), ie = (z, B) => {
      z == null ? void 0 : z.forEach(($, H) => {
        const te = e.elements.val[H];
        if (te) for (let xe = 0; xe < te.length; xe++) B.set(te[xe], [$[xe] ?? $[0]]);
      });
    };
    ie((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, u), ie((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, S), ie((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, w), ie((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, m), ie((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, M), ie((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, k), ie((_n2 = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n2.tranverseShearX, F), ie((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, b), ie((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, U), ie((_t2 = (_s2 = e.analyzeOutputs) == null ? void 0 : _s2.val) == null ? void 0 : _t2.pressure, pe);
    const Q = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), Me = (z, B, $, H, te) => {
      z.forEach((xe, we) => {
        var _a2, _b2;
        const ke = xe[0] ?? 0, Ve = ((_a2 = B.get(we)) == null ? void 0 : _a2[0]) ?? 0, Ae = ((_b2 = $.get(we)) == null ? void 0 : _b2[0]) ?? 0, $e = (ke + Ve) / 2, Re = Math.hypot((ke - Ve) / 2, Ae);
        H.set(we, [$e + Re]), te.set(we, [$e - Re]);
      });
    };
    Me(m, M, k, Q, g), Me(u, S, w, O, de), F.forEach((z, B) => {
      var _a2;
      Se.set(B, [Math.hypot(z[0] ?? 0, ((_a2 = b.get(B)) == null ? void 0 : _a2[0]) ?? 0)]);
    });
    const K = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, Y = (_w = i.solidResults) == null ? void 0 : _w.val, V = Y && Y !== "none" ? Y : i.shellResults.val, C = K == null ? void 0 : K[V], L = { bendingXX: [u, 0], bendingYY: [S, 0], bendingXY: [w, 0], membraneXX: [m, 0], membraneYY: [M, 0], membraneXY: [k, 0], tranverseShearX: [F, 0], tranverseShearY: [b, 0], membranePrincipalMax: [Q, 0], membranePrincipalMin: [g, 0], bendingPrincipalMax: [O, 0], bendingPrincipalMin: [de, 0], transverseShearMax: [Se, 0], vonMises: [U, 0], pressure: [pe, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, E = i.shellResults.val, A = qs.val, W = Js.val, oe = E === "displacementX" || E === "displacementY" || E === "displacementZ", ee = E === "bendingXX" || E === "bendingYY" || E === "bendingXY" || E === "bendingPrincipalMax" || E === "bendingPrincipalMin", q = E === "membraneXX" || E === "membraneYY" || E === "membraneXY" || E === "membranePrincipalMax" || E === "membranePrincipalMin", T = E === "vonMises" || E === "pressure", ae = E === "tranverseShearX" || E === "tranverseShearY" || E === "transverseShearMax", J = (_D = i.solidResults) == null ? void 0 : _D.val, me = J === "vonMises" || J === "sigmaXX" || J === "sigmaYY" || J === "sigmaZZ" || J === "tauXY" || J === "tauYZ" || J === "tauXZ", re = J === "ux" || J === "uy" || J === "uz", Pe = Qs.val, ue = me ? js[Pe] : re || oe ? Fo[W] : ee || q || T || ae ? 1 / Os[A] : 1, Fe = me ? Pe : re || oe ? W : ee ? `${A}\xB7m/m` : q ? `${A}/m\xB2` : T ? `${A}/m\xB2` : ae ? `${A}/m` : "";
    On.val = Fe, to.val = Array.isArray(C) && C.length === 2 ? [C[0] * ue, C[1] * ue] : null;
    const ot = J && J !== "none" ? [U, 0] : L[E], j = [];
    e.nodes.val.forEach((z, B) => {
      const $ = ot;
      if (!$ || !$[0] || typeof $[0].has != "function") return;
      if (!$[0].has(B)) {
        j.push(Number.NaN);
        return;
      }
      const H = $[0].get(B), te = H ? H[$[1]] ?? 0 : 0;
      j.push(te * ue);
    }), x.val = j;
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
