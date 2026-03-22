/**
 * Element Report — 3 tabs for a single selected element:
 *   Tabla | Matematica Explicada | Resumen
 */
import {
  Node,
  ElementInputs,
  DeformOutputs,
  AnalyzeOutputs,
  getLocalStiffnessMatrix,
  getTransformationMatrix,
} from "awatif-fem";
import { multiply, transpose, norm, subtract } from "mathjs";

// ── KaTeX dynamic loader ──
let katexLoaded = false;
function ensureKatex(callback: () => void) {
  if (katexLoaded || (window as any).katex) { katexLoaded = true; callback(); return; }
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css";
  document.head.appendChild(link);
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js";
  script.onload = () => { katexLoaded = true; callback(); };
  document.head.appendChild(script);
}

function tex(latex: string, display = false): string {
  try {
    if ((window as any).katex) {
      return (window as any).katex.renderToString(latex, { displayMode: display, throwOnError: false });
    }
  } catch { /* fallback */ }
  return `<code class="er-tex-fallback">${latex}</code>`;
}

interface ElementData {
  elemIdx: number;
  elem: number[];
  elmNodes: Node[];
  isFrame: boolean;
  L: number;
  E: number; A: number; Iz: number; Iy: number; G: number; J: number;
  kLocal: number[][] | null;
  T: number[][] | null;
  kGlobal: number[][] | null;
  l: number; m: number; n: number; D: number;
  uGlobal: number[];
  uLocal: number[];
  fLocal: number[];
  dOut?: DeformOutputs;
  aOut?: AnalyzeOutputs;
  totalNodes: number;
}

function gatherData(
  elemIdx: number,
  nodesArr: Node[],
  elements: number[][],
  ei: ElementInputs,
  dOut?: DeformOutputs,
  aOut?: AnalyzeOutputs
): ElementData {
  const elem = elements[elemIdx];
  const elmNodes = elem.map(n => nodesArr[n]) as Node[];
  const isFrame = elem.length === 2;
  const L = isFrame ? (norm(subtract(elmNodes[1], elmNodes[0])) as number) : 0;
  const E = ei.elasticities?.get(elemIdx) ?? 0;
  const A = ei.areas?.get(elemIdx) ?? 0;
  const Iz = ei.momentsOfInertiaZ?.get(elemIdx) ?? 0;
  const Iy = ei.momentsOfInertiaY?.get(elemIdx) ?? 0;
  const G = ei.shearModuli?.get(elemIdx) ?? 0;
  const J = ei.torsionalConstants?.get(elemIdx) ?? 0;

  let kLocal: number[][] | null = null, T: number[][] | null = null, kGlobal: number[][] | null = null;
  try {
    kLocal = getLocalStiffnessMatrix(elmNodes, ei, elemIdx);
    T = getTransformationMatrix(elmNodes);
    kGlobal = multiply(transpose(T), multiply(kLocal, T)) as number[][];
  } catch { /* skip */ }

  const vec = isFrame ? (subtract(elmNodes[1], elmNodes[0]) as number[]) : [0, 0, 0];
  const l = L > 0 ? vec[0] / L : 0;
  const m = L > 0 ? vec[1] / L : 0;
  const n = L > 0 ? vec[2] / L : 0;
  const Dval = Math.sqrt(l ** 2 + m ** 2);

  const uGlobal: number[] = [];
  if (dOut?.deformations && isFrame) {
    for (const ni of elem) {
      const d = dOut.deformations.get(ni) || [0, 0, 0, 0, 0, 0];
      uGlobal.push(...d);
    }
  }
  let uLocal: number[] = [];
  let fLocal: number[] = [];
  if (uGlobal.length === 12 && T && kLocal) {
    try { uLocal = multiply(T, uGlobal) as number[]; } catch { uLocal = Array(12).fill(0); }
    try { fLocal = multiply(kLocal, uLocal) as number[]; } catch { fLocal = Array(12).fill(0); }
  }

  return { elemIdx, elem, elmNodes, isFrame, L, E, A, Iz, Iy, G, J, kLocal, T, kGlobal, l, m, n, D: Dval, uGlobal, uLocal, fLocal, dOut, aOut, totalNodes: nodesArr.length };
}

// ═════════════════════════════════════════════
// PUBLIC: build the 3-tab element report panel
// ═════════════════════════════════════════════
export function buildElementReport(
  elemIdx: number,
  nodesArr: Node[],
  elements: number[][],
  ei: ElementInputs,
  dOut?: DeformOutputs,
  aOut?: AnalyzeOutputs
): HTMLDivElement {
  const d = gatherData(elemIdx, nodesArr, elements, ei, dOut, aOut);

  const div = document.createElement("div");
  div.className = "er-panel";
  div.innerHTML = STYLES + `
    <div class="er-header">
      <span class="er-badge">Element ${elemIdx}</span>
      <span class="er-type">${d.isFrame ? "Frame" : "Shell"} — Nodes ${d.elem.join(" → ")} — L = ${f(d.L)}</span>
      <button class="er-close" id="er-close">✕</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${buildTabla(d)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${buildMath(d)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${buildResumen(d)}</div>
  `;

  // Tab switching
  div.querySelectorAll(".er-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      div.querySelectorAll(".er-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const tab = (btn as HTMLElement).dataset.tab!;
      div.querySelectorAll(".er-body").forEach(b => (b as HTMLElement).style.display = "none");
      (div.querySelector(`#er-body-${tab}`) as HTMLElement).style.display = "";
    });
  });

  div.querySelector("#er-close")?.addEventListener("click", () => div.remove());

  // Load KaTeX + draw shape functions after DOM insertion
  setTimeout(() => {
    const canvas = div.querySelector("#er-sf-canvas") as HTMLCanvasElement;
    if (canvas) drawShapeFunctions(canvas);
    const canvas2 = div.querySelector("#er-sf-canvas-math") as HTMLCanvasElement;
    if (canvas2) drawShapeFunctions(canvas2);
  }, 50);

  // Load KaTeX and re-render math tab with formatted equations
  ensureKatex(() => {
    const mathBody = div.querySelector("#er-body-math");
    if (mathBody) mathBody.innerHTML = buildMath(d);
    setTimeout(() => {
      const c = div.querySelector("#er-sf-canvas-math") as HTMLCanvasElement;
      if (c) drawShapeFunctions(c);
    }, 50);
  });

  return div;
}

// ═════════════════════════════════════════════
// TAB 1: TABLA — matrices numéricas
// ═════════════════════════════════════════════
function buildTabla(d: ElementData): string {
  let h = "";

  h += `<div class="er-section-title">1. Propiedades</div>`;
  h += `<table class="er-props">`;
  h += `<tr><td>E</td><td>${f(d.E)}</td><td>A</td><td>${f(d.A)}</td></tr>`;
  h += `<tr><td>I<sub>z</sub></td><td>${f(d.Iz)}</td><td>I<sub>y</sub></td><td>${f(d.Iy)}</td></tr>`;
  h += `<tr><td>G</td><td>${f(d.G)}</td><td>J</td><td>${f(d.J)}</td></tr>`;
  h += `</table>`;

  if (d.kLocal) {
    h += `<div class="er-section-title">2. K<sub>local</sub> (${d.kLocal.length}×${d.kLocal.length})</div>`;
    h += matrixHTML(d.kLocal);
  }
  if (d.T) {
    h += `<div class="er-section-title">3. T — Transformación</div>`;
    h += matrixHTML(d.T as number[][]);
  }
  if (d.kGlobal) {
    h += `<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>·K·T</div>`;
    h += matrixHTML(d.kGlobal as number[][]);
  }

  h += `<div class="er-section-title">5. Desplazamientos</div>`;
  if (d.uGlobal.length > 0) {
    const dofN = ["u<sub>x</sub>","u<sub>y</sub>","u<sub>z</sub>","θ<sub>x</sub>","θ<sub>y</sub>","θ<sub>z</sub>"];
    for (let ni = 0; ni < d.elem.length; ni++) {
      h += `<div class="er-sub">Nodo ${d.elem[ni]}: `;
      for (let j = 0; j < 6; j++) {
        const v = d.uGlobal[ni * 6 + j];
        h += `${dofN[j]}=<span class="${Math.abs(v) > 1e-10 ? "nz" : ""}">${f(v, 6)}</span> `;
      }
      h += `</div>`;
    }
  } else { h += `<div class="er-sub">Sin análisis</div>`; }

  h += `<div class="er-section-title">6. Fuerzas internas</div>`;
  if (d.fLocal.length > 0 && d.fLocal.some(v => v !== 0)) {
    const fN = ["N","V<sub>y</sub>","V<sub>z</sub>","M<sub>x</sub>","M<sub>y</sub>","M<sub>z</sub>"];
    h += `<table class="er-forces"><tr><th></th>`;
    for (const fn of fN) h += `<th>${fn}</th>`;
    h += `</tr>`;
    h += `<tr><td>Nodo i</td>`;
    for (let j = 0; j < 6; j++) h += `<td class="${Math.abs(d.fLocal[j]) > 1e-10 ? "nz" : ""}">${f(d.fLocal[j], 3)}</td>`;
    h += `</tr><tr><td>Nodo j</td>`;
    for (let j = 6; j < 12; j++) h += `<td class="${Math.abs(d.fLocal[j]) > 1e-10 ? "nz" : ""}">${f(d.fLocal[j], 3)}</td>`;
    h += `</tr></table>`;
  } else { h += `<div class="er-sub">Sin análisis</div>`; }

  return h;
}

// ═════════════════════════════════════════════
// TAB 2: MATEMÁTICA EXPLICADA — derivación completa
// ═════════════════════════════════════════════
function buildMath(d: ElementData): string {
  if (!d.isFrame) return `<div class="er-sub">Shell element math: coming soon</div>`;

  let h = "";
  const K = (s: string) => tex(s);       // inline
  const KD = (s: string) => tex(s, true); // display (centered, larger)

  // ── 1. Geometría ──
  h += `<div class="er-section-title">1. Geometria del elemento</div>`;
  h += `<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>`;
  h += `<div class="er-eq">${KD(`\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}`)}</div>`;
  h += `<div class="er-eq-num">`;
  h += `${K(`\\text{Nodo } i`)} = (${d.elmNodes[0].map(v => f(v)).join(", ")})<br/>`;
  h += `${K(`\\text{Nodo } j`)} = (${d.elmNodes[1].map(v => f(v)).join(", ")})<br/>`;
  h += `${KD(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${f(d.L)}}`)}`;
  h += `</div>`;

  // ── 2. Funciones de forma ──
  h += `<div class="er-section-title">2. Funciones de forma</div>`;
  h += `<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>`;

  h += `<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>`;
  h += `<div class="er-eq">${KD(`N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]`)}</div>`;
  h += `<p>Primera derivada:</p>`;
  h += `<div class="er-eq">${KD(`\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1`)}</div>`;

  h += `<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>`;
  h += `<p>Las funciones de Hermite garantizan continuidad ${K(`C^1`)} (desplazamiento y pendiente continuos):</p>`;
  h += `<div class="er-eq">${KD(`H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}`)}</div>`;
  h += `<div class="er-eq">${KD(`H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}`)}</div>`;
  h += `<div class="er-eq">${KD(`H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}`)}</div>`;
  h += `<div class="er-eq">${KD(`H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}`)}</div>`;

  h += `<div class="er-subsec">Derivadas segunda (curvatura ${K(`\\kappa = \\frac{d^2v}{dx^2}`)}):</div>`;
  h += `<div class="er-eq">${KD(`H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)`)}</div>`;
  h += `<div class="er-eq">${KD(`H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)`)}</div>`;

  h += `<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>`;

  // ── 3. Matriz B ──
  h += `<div class="er-section-title">3. Matriz B (strain-displacement)</div>`;
  h += `<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>`;
  h += `<div class="er-eq">${KD(`\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}`)}</div>`;

  h += `<div class="er-subsec">3.1 Deformacion axial</div>`;
  h += `<div class="er-eq">${KD(`\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}`)}</div>`;

  h += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY → ${K(`I_z`)})</div>`;
  h += `<div class="er-eq">${KD(`\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}`)}</div>`;
  h += `<div class="er-eq">${KD(`\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}`)}</div>`;

  h += `<div class="er-subsec">3.3 Curvatura (plano XZ → ${K(`I_y`)})</div>`;
  h += `<div class="er-eq">${KD(`\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}`)}</div>`;

  h += `<div class="er-subsec">3.4 Torsion</div>`;
  h += `<div class="er-eq">${KD(`\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}`)}</div>`;

  // ── 4. Relaciones constitutivas D ──
  h += `<div class="er-section-title">4. Relaciones constitutivas D</div>`;
  h += `<p>Cada modo de deformacion tiene su rigidez material:</p>`;
  h += `<div class="er-eq">${KD(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${f(d.E)} \\times ${f(d.A)} = \\mathbf{${f(d.E * d.A)}}`)}</div>`;
  h += `<div class="er-eq">${KD(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${f(d.E)} \\times ${f(d.Iz)} = \\mathbf{${f(d.E * d.Iz)}}`)}</div>`;
  h += `<div class="er-eq">${KD(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${f(d.E)} \\times ${f(d.Iy)} = \\mathbf{${f(d.E * d.Iy)}}`)}</div>`;
  h += `<div class="er-eq">${KD(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${f(d.G)} \\times ${f(d.J)} = \\mathbf{${f(d.G * d.J)}}`)}</div>`;

  // ── 5. K local = ∫ B^T D B dx ──
  h += `<div class="er-section-title">5. Integracion → ${K(`\\mathbf{K}_{local}`)}</div>`;
  h += `<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>`;
  h += `<div class="er-eq er-eq-main">${KD(`\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx`)}</div>`;
  h += `<p>Coeficientes resultantes (sustitucion numerica):</p>`;

  const EA_L = d.E * d.A / d.L;
  const EIz_L3 = d.E * d.Iz / d.L ** 3;
  const EIy_L3 = d.E * d.Iy / d.L ** 3;
  const GJ_L = d.G * d.J / d.L;

  h += `<div class="er-eq">${KD(`\\frac{EA}{L} = \\frac{${f(d.E)} \\times ${f(d.A)}}{${f(d.L)}} = \\mathbf{${f(EA_L)}} \\quad \\rightarrow K[0,0],\\, K[6,6]`)}</div>`;
  h += `<div class="er-eq">${KD(`\\frac{12EI_z}{L^3} = \\frac{12 \\times ${f(d.E)} \\times ${f(d.Iz)}}{${f(d.L)}^3} = \\mathbf{${f(12 * EIz_L3)}} \\quad \\rightarrow K[1,1],\\, K[7,7]`)}</div>`;
  h += `<div class="er-eq">${KD(`\\frac{12EI_y}{L^3} = \\frac{12 \\times ${f(d.E)} \\times ${f(d.Iy)}}{${f(d.L)}^3} = \\mathbf{${f(12 * EIy_L3)}} \\quad \\rightarrow K[2,2],\\, K[8,8]`)}</div>`;
  h += `<div class="er-eq">${KD(`\\frac{GJ}{L} = \\frac{${f(d.G)} \\times ${f(d.J)}}{${f(d.L)}} = \\mathbf{${f(GJ_L)}} \\quad \\rightarrow K[3,3],\\, K[9,9]`)}</div>`;
  h += `<div class="er-eq">${KD(`\\frac{4EI_y}{L} = \\frac{4 \\times ${f(d.E)} \\times ${f(d.Iy)}}{${f(d.L)}} = \\mathbf{${f(4 * d.E * d.Iy / d.L)}} \\quad \\rightarrow K[4,4],\\, K[10,10]`)}</div>`;
  h += `<div class="er-eq">${KD(`\\frac{4EI_z}{L} = \\frac{4 \\times ${f(d.E)} \\times ${f(d.Iz)}}{${f(d.L)}} = \\mathbf{${f(4 * d.E * d.Iz / d.L)}} \\quad \\rightarrow K[5,5],\\, K[11,11]`)}</div>`;
  h += `<div class="er-eq">${KD(`\\frac{6EI_z}{L^2} = \\mathbf{${f(6 * d.E * d.Iz / d.L ** 2)}} \\quad \\rightarrow K[1,5] \\text{ (acoplamiento corte-momento)}`)}</div>`;

  if (d.kLocal) {
    h += `<div class="er-subsec">Resultado: ${K(`\\mathbf{K}_{local}`)} (12x12)</div>`;
    h += matrixHTML(d.kLocal);
  }

  // ── 6. Transformación ──
  h += `<div class="er-section-title">6. Transformacion de coordenadas</div>`;
  h += `<p>Los cosenos directores del eje del elemento:</p>`;
  h += `<div class="er-eq">${KD(`l = \\frac{x_j - x_i}{L} = ${f4(d.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${f4(d.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${f4(d.n)}`)}</div>`;
  h += `<div class="er-eq">${KD(`D = \\sqrt{l^2 + m^2} = ${f4(d.D)}`)}</div>`;

  if (Math.abs(d.n) > 0.999) {
    h += `<p>Caso especial: elemento vertical (${K(`n \\approx ${d.n > 0 ? "+1" : "-1"}`)}):</p>`;
    const lam = d.n > 0
      ? `\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}`
      : `\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}`;
    h += `<div class="er-eq">${KD(lam)}</div>`;
  } else {
    h += `<div class="er-eq">${KD(`\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}`)}</div>`;
  }
  h += `<div class="er-eq er-eq-main">${KD(`\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}`)}</div>`;

  // ── 7. K global ──
  h += `<div class="er-section-title">7. ${K(`\\mathbf{K}_{global}`)} = ${K(`\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}`)}</div>`;
  h += `<p>Transformar la rigidez local al sistema global de coordenadas:</p>`;
  h += `<div class="er-eq er-eq-main">${KD(`\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}`)}</div>`;
  if (d.kGlobal) h += matrixHTML(d.kGlobal as number[][]);

  // ── 8. Ensamblaje ──
  h += `<div class="er-section-title">8. Ensamblaje</div>`;
  const dofs0 = d.elem[0] * 6, dofs1 = d.elem[1] * 6;
  h += `<div class="er-eq">${KD(`\\text{Nodo } ${d.elem[0]} \\rightarrow \\text{DOFs } [${dofs0} \\ldots ${dofs0 + 5}]`)}</div>`;
  h += `<div class="er-eq">${KD(`\\text{Nodo } ${d.elem[1]} \\rightarrow \\text{DOFs } [${dofs1} \\ldots ${dofs1 + 5}]`)}</div>`;
  h += `<div class="er-eq">${KD(`\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]`)}</div>`;

  // ── 9. Fuerzas internas ──
  h += `<div class="er-section-title">9. Recuperacion de fuerzas internas</div>`;
  h += `<div class="er-eq">${KD(`\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}`)}</div>`;
  h += `<div class="er-eq er-eq-main">${KD(`\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}`)}</div>`;
  if (d.fLocal.length > 0 && d.fLocal.some(v => v !== 0)) {
    const labels = ["N","V<sub>y</sub>","V<sub>z</sub>","M<sub>x</sub>","M<sub>y</sub>","M<sub>z</sub>"];
    h += `<table class="er-forces"><tr><th></th>`;
    for (const lb of labels) h += `<th>${lb}</th>`;
    h += `</tr><tr><td>i (${d.elem[0]})</td>`;
    for (let j = 0; j < 6; j++) h += `<td class="${Math.abs(d.fLocal[j]) > 1e-10 ? "nz" : ""}">${f(d.fLocal[j], 3)}</td>`;
    h += `</tr><tr><td>j (${d.elem[1]})</td>`;
    for (let j = 6; j < 12; j++) h += `<td class="${Math.abs(d.fLocal[j]) > 1e-10 ? "nz" : ""}">${f(d.fLocal[j], 3)}</td>`;
    h += `</tr></table>`;
  }

  return h;
}

// ═════════════════════════════════════════════
// TAB 3: RESUMEN — solo resultados finales
// ═════════════════════════════════════════════
function buildResumen(d: ElementData): string {
  let h = "";
  h += `<div class="er-section-title">Resumen — Elemento ${d.elemIdx}</div>`;
  h += `<table class="er-props">`;
  h += `<tr><td>Tipo</td><td>${d.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`;
  h += `<tr><td>Nodos</td><td>${d.elem.join(" → ")}</td></tr>`;
  h += `<tr><td>Longitud</td><td><b>${f(d.L)}</b></td></tr>`;
  h += `<tr><td>E</td><td>${f(d.E)}</td></tr>`;
  h += `<tr><td>A</td><td>${f(d.A)}</td></tr>`;
  h += `</table>`;

  if (d.uGlobal.length > 0) {
    h += `<div class="er-section-title">Desplazamientos</div>`;
    const dofN = ["u<sub>x</sub>","u<sub>y</sub>","u<sub>z</sub>","θ<sub>x</sub>","θ<sub>y</sub>","θ<sub>z</sub>"];
    h += `<table class="er-forces"><tr><th>Nodo</th>`;
    for (const dn of dofN) h += `<th>${dn}</th>`;
    h += `</tr>`;
    for (let ni = 0; ni < d.elem.length; ni++) {
      h += `<tr><td>${d.elem[ni]}</td>`;
      for (let j = 0; j < 6; j++) {
        const v = d.uGlobal[ni * 6 + j];
        h += `<td class="${Math.abs(v) > 1e-10 ? "nz" : ""}">${f(v, 6)}</td>`;
      }
      h += `</tr>`;
    }
    h += `</table>`;
  }

  if (d.fLocal.length > 0 && d.fLocal.some(v => v !== 0)) {
    h += `<div class="er-section-title">Fuerzas internas</div>`;
    const fN = ["N","V<sub>y</sub>","V<sub>z</sub>","M<sub>x</sub>","M<sub>y</sub>","M<sub>z</sub>"];
    h += `<table class="er-forces"><tr><th></th>`;
    for (const fn of fN) h += `<th>${fn}</th>`;
    h += `</tr><tr><td>Nodo i</td>`;
    for (let j = 0; j < 6; j++) h += `<td class="${Math.abs(d.fLocal[j]) > 1e-10 ? "nz" : ""}">${f(d.fLocal[j], 3)}</td>`;
    h += `</tr><tr><td>Nodo j</td>`;
    for (let j = 6; j < 12; j++) h += `<td class="${Math.abs(d.fLocal[j]) > 1e-10 ? "nz" : ""}">${f(d.fLocal[j], 3)}</td>`;
    h += `</tr></table>`;
  }

  return h;
}

// ═════════════════════════════════════════════
// HELPERS
// ═════════════════════════════════════════════
function f(v: number, dec = 2): string {
  if (Math.abs(v) < 1e-10) return "0";
  if (Math.abs(v) >= 1e7 || (Math.abs(v) < 0.01 && v !== 0)) return v.toExponential(dec);
  return v.toFixed(dec);
}
function f4(v: number): string { return Math.abs(v) < 1e-10 ? "0" : v.toFixed(4); }

function matrixHTML(mat: number[][]): string {
  const size = mat.length;
  const show = Math.min(size, 12);
  let h = `<div style="overflow-x:auto"><table class="er-matrix">`;
  for (let i = 0; i < show; i++) {
    h += `<tr>`;
    for (let j = 0; j < show; j++) {
      const v = mat[i]?.[j] ?? 0;
      const z = Math.abs(v) < 1e-10;
      const diag = i === j && !z;
      h += `<td class="${z ? "z" : ""} ${diag ? "diag" : ""}">${z ? "0" : fmtM(v)}</td>`;
    }
    h += `</tr>`;
  }
  h += `</table>`;
  if (size > show) h += `<div style="color:var(--fem-label);font-size:9px">(${show}×${show} de ${size}×${size})</div>`;
  h += `</div>`;
  return h;
}

function fmtM(v: number): string {
  if (Math.abs(v) >= 1e6) return v.toExponential(1);
  if (Math.abs(v) < 0.01 && v !== 0) return v.toExponential(1);
  if (Math.abs(v) >= 100) return v.toFixed(0);
  return v.toFixed(2);
}

function drawShapeFunctions(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const W = canvas.width, H = canvas.height;
  const pad = 30, gw = W - 2 * pad, gh = (H - 3 * pad) / 2;

  ctx.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111";
  ctx.fillRect(0, 0, W, H);

  const drawGraph = (y0: number, title: string, funcs: { fn: (x: number) => number; color: string; label: string }[]) => {
    ctx.strokeStyle = "#333"; ctx.lineWidth = 1;
    ctx.strokeRect(pad, y0, gw, gh);
    ctx.strokeStyle = "#444"; ctx.beginPath();
    ctx.moveTo(pad, y0 + gh / 2); ctx.lineTo(pad + gw, y0 + gh / 2); ctx.stroke();
    ctx.fillStyle = "#888"; ctx.font = "11px sans-serif";
    ctx.fillText(title, pad + 4, y0 + 14);
    for (const fc of funcs) {
      ctx.strokeStyle = fc.color; ctx.lineWidth = 2.5; ctx.beginPath();
      for (let i = 0; i <= 100; i++) {
        const xi = i / 100, px = pad + xi * gw, py = y0 + gh / 2 - fc.fn(xi) * (gh / 2 * 0.85);
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.stroke();
    }
    let lx = pad + gw - 90;
    for (const fc of funcs) {
      ctx.fillStyle = fc.color; ctx.font = "bold 10px sans-serif";
      ctx.fillText(fc.label, lx, y0 + gh - 6); lx += 36;
    }
    ctx.fillStyle = "#666"; ctx.font = "9px monospace";
    ctx.fillText("0", pad, y0 + gh + 12); ctx.fillText("1", pad + gw - 6, y0 + gh + 12);
    ctx.fillText("ξ", pad + gw / 2, y0 + gh + 12);
  };

  drawGraph(pad, "Axial (lineal)", [
    { fn: (x) => 1 - x, color: "#ff6600", label: "N₁" },
    { fn: (x) => x, color: "#00ccff", label: "N₂" },
  ]);
  drawGraph(pad + gh + pad, "Flexión (Hermite cúbicos)", [
    { fn: (x) => 1 - 3 * x * x + 2 * x * x * x, color: "#ff6600", label: "H₁" },
    { fn: (x) => x * (1 - x) * (1 - x), color: "#ffcc00", label: "H₂" },
    { fn: (x) => 3 * x * x - 2 * x * x * x, color: "#00ccff", label: "H₃" },
    { fn: (x) => x * x * (x - 1), color: "#00ff66", label: "H₄" },
  ]);
}

const STYLES = `<style>
  .er-panel {
    position: fixed; right: 0; top: 0; width: 560px; height: 100vh;
    background: var(--fem-bg, #111); color: var(--fem-text, #ddd);
    overflow-y: auto; z-index: 9999990; padding: 12px 16px;
    box-sizing: border-box; border-left: 3px solid var(--fem-accent, #0f3460);
    font-family: 'Segoe UI', sans-serif; font-size: 12px; line-height: 1.5;
    box-shadow: -4px 0 20px rgba(0,0,0,0.5);
  }
  .er-header { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; flex-wrap: wrap; }
  .er-badge { background: var(--fem-section-title, #e94560); color: #fff; padding: 2px 10px; border-radius: 12px; font-weight: bold; font-size: 13px; }
  .er-type { color: var(--fem-label, #888); font-size: 12px; }
  .er-close { margin-left: auto; background: transparent; border: 1px solid var(--fem-border, #333); color: var(--fem-text, #ddd); padding: 2px 8px; border-radius: 4px; cursor: pointer; font-size: 14px; }
  .er-close:hover { background: var(--fem-btn-hover, #222); }

  .er-tabs { display: flex; gap: 0; margin-bottom: 10px; border-bottom: 2px solid var(--fem-border, #333); }
  .er-tab { background: transparent; border: none; color: var(--fem-label, #888); padding: 6px 16px; cursor: pointer; font-size: 12px; font-weight: bold; border-bottom: 2px solid transparent; margin-bottom: -2px; }
  .er-tab.active { color: var(--fem-section-title, #e94560); border-bottom-color: var(--fem-section-title, #e94560); }
  .er-tab:hover { color: var(--fem-text, #ddd); }

  .er-body { padding: 4px 0; }
  .er-section-title { color: var(--fem-section-title, #e94560); font-weight: bold; font-size: 13px; margin: 14px 0 6px 0; border-bottom: 1px solid var(--fem-border, #333); padding-bottom: 3px; }
  .er-subsec { color: var(--fem-label, #aaa); font-weight: bold; font-size: 11px; margin: 10px 0 4px 0; }
  .er-sub { color: var(--fem-label, #888); font-size: 11px; margin: 2px 0; }
  .er-sub .nz { color: var(--fem-nonzero, #7bed9f); font-weight: bold; }

  .er-eq { background: var(--fem-section-bg, #1a1a2e); border-left: 3px solid var(--fem-accent, #0f3460); padding: 6px 12px; margin: 6px 0; font-family: serif; font-size: 13px; color: var(--fem-eq-var, #58a6ff); }
  .er-eq-main { border-left: 4px solid var(--fem-section-title, #e94560); font-weight: bold; font-size: 14px; }
  .er-eq-num { background: var(--fem-section-bg, #16213e); border-left: 2px solid var(--fem-border, #444); padding: 6px 12px; margin: 4px 0; font-family: monospace; font-size: 11px; color: var(--fem-text, #ccc); line-height: 180%; }
  .er-eq-table { border-collapse: collapse; margin: 4px 0; font-size: 12px; }
  .er-eq-table td { padding: 2px 10px; vertical-align: top; }
  .er-eq-table .fn-name { color: var(--fem-eq-var, #58a6ff); font-weight: bold; font-family: serif; }
  .er-eq-table .fn-desc { color: var(--fem-label, #888); font-style: italic; font-size: 10px; }

  .er-coeff { border-collapse: collapse; margin: 6px 0; font-family: monospace; font-size: 11px; }
  .er-coeff td { padding: 3px 8px; border-bottom: 1px solid var(--fem-border, #222); }
  .er-coeff b { color: var(--fem-nonzero, #7bed9f); }

  .er-props { border-collapse: collapse; margin: 4px 0; font-size: 12px; }
  .er-props td { padding: 2px 12px 2px 0; }
  .er-props td:nth-child(even) { color: var(--fem-eq-var, #58a6ff); font-weight: bold; }

  .er-forces { border-collapse: collapse; margin: 4px 0; font-family: monospace; font-size: 11px; }
  .er-forces th { background: var(--fem-header-bg, #1a1a2e); color: var(--fem-section-title, #e94560); padding: 3px 8px; border: 1px solid var(--fem-border, #333); text-align: center; font-size: 10px; }
  .er-forces td { padding: 3px 8px; border: 1px solid var(--fem-border, #333); text-align: right; }
  .er-forces .nz { color: var(--fem-nonzero, #7bed9f); font-weight: bold; }

  .er-matrix { border-collapse: collapse; font-family: monospace; font-size: 9px; margin: 4px 0; }
  .er-matrix td { padding: 2px 5px; text-align: right; border: 1px solid var(--fem-border-cell, #222); min-width: 50px; white-space: nowrap; }
  .er-matrix td.z { color: var(--fem-eq-dots, #444); }
  .er-matrix td.diag { background: var(--fem-diag-bg, #0a1a30); color: var(--fem-eq-var, #58a6ff); font-weight: bold; }

  .er-panel p { margin: 4px 0; color: var(--fem-text, #bbb); font-size: 11px; }

  .er-panel::-webkit-scrollbar { width: 6px; }
  .er-panel::-webkit-scrollbar-track { background: var(--fem-bg, #111); }
  .er-panel::-webkit-scrollbar-thumb { background: var(--fem-accent, #0f3460); border-radius: 3px; }
</style>`;
