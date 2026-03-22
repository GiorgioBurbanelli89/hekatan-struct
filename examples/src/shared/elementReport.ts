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

  // Draw shape functions canvas after DOM insertion
  setTimeout(() => {
    const canvas = div.querySelector("#er-sf-canvas") as HTMLCanvasElement;
    if (canvas) drawShapeFunctions(canvas);
    const canvas2 = div.querySelector("#er-sf-canvas-math") as HTMLCanvasElement;
    if (canvas2) drawShapeFunctions(canvas2);
  }, 50);

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

  // ── 1. Geometría ──
  h += `<div class="er-section-title">1. Geometría del elemento</div>`;
  h += `<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>`;
  h += `<div class="er-eq">[u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, θ<sub>x</sub>, θ<sub>y</sub>, θ<sub>z</sub>]  →  12 GDL totales</div>`;
  h += `<div class="er-eq-num">`;
  h += `Nodo i = (${d.elmNodes[0].map(v => f(v)).join(", ")})<br/>`;
  h += `Nodo j = (${d.elmNodes[1].map(v => f(v)).join(", ")})<br/>`;
  h += `L = √[(x<sub>j</sub>−x<sub>i</sub>)² + (y<sub>j</sub>−y<sub>i</sub>)² + (z<sub>j</sub>−z<sub>i</sub>)²] = <b>${f(d.L)}</b>`;
  h += `</div>`;

  // ── 2. Funciones de forma ──
  h += `<div class="er-section-title">2. Funciones de forma</div>`;
  h += `<p>La viga usa <b>interpolación lineal</b> para axial/torsión y <b>polinomios cúbicos de Hermite</b> para flexión.</p>`;

  h += `<div class="er-subsec">2.1 Axial y Torsión (lineal)</div>`;
  h += `<div class="er-eq">N₁(ξ) = 1 − ξ &nbsp;&nbsp;&nbsp; N₂(ξ) = ξ &nbsp;&nbsp;&nbsp; donde ξ = x/L ∈ [0, 1]</div>`;
  h += `<p>Primera derivada: dN₁/dξ = −1, &nbsp; dN₂/dξ = 1</p>`;

  h += `<div class="er-subsec">2.2 Flexión (Hermite cúbicos)</div>`;
  h += `<p>Las funciones de Hermite garantizan continuidad C¹ (desplazamiento y pendiente continuos):</p>`;
  h += `<table class="er-eq-table">`;
  h += `<tr><td class="fn-name">H₁(ξ)</td><td>= 1 − 3ξ² + 2ξ³</td><td class="fn-desc">desplazamiento en nodo i</td></tr>`;
  h += `<tr><td class="fn-name">H₂(ξ)</td><td>= Lξ(1 − ξ)²</td><td class="fn-desc">rotación en nodo i</td></tr>`;
  h += `<tr><td class="fn-name">H₃(ξ)</td><td>= 3ξ² − 2ξ³</td><td class="fn-desc">desplazamiento en nodo j</td></tr>`;
  h += `<tr><td class="fn-name">H₄(ξ)</td><td>= Lξ²(ξ − 1)</td><td class="fn-desc">rotación en nodo j</td></tr>`;
  h += `</table>`;

  h += `<div class="er-subsec">Derivadas segunda (curvatura κ = d²v/dx²):</div>`;
  h += `<table class="er-eq-table">`;
  h += `<tr><td class="fn-name">H₁″(ξ)</td><td>= (−6/L²)(1 − 2ξ)</td></tr>`;
  h += `<tr><td class="fn-name">H₂″(ξ)</td><td>= (−2/L)(2 − 3ξ)</td></tr>`;
  h += `<tr><td class="fn-name">H₃″(ξ)</td><td>= (6/L²)(1 − 2ξ)</td></tr>`;
  h += `<tr><td class="fn-name">H₄″(ξ)</td><td>= (−2/L)(1 − 3ξ)</td></tr>`;
  h += `</table>`;

  h += `<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>`;

  // ── 3. Matriz B ──
  h += `<div class="er-section-title">3. Matriz B (strain-displacement)</div>`;
  h += `<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>`;
  h += `<div class="er-eq">ε = B · u</div>`;

  h += `<div class="er-subsec">3.1 Deformación axial</div>`;
  h += `<div class="er-eq">ε<sub>axial</sub> = du/dx = (1/L)·[−1, 1]·{u<sub>i</sub>, u<sub>j</sub>}</div>`;

  h += `<div class="er-subsec">3.2 Curvatura por flexión (plano XY → I<sub>z</sub>)</div>`;
  h += `<div class="er-eq">κ<sub>z</sub> = d²v/dx² = B<sub>bz</sub> · {v<sub>i</sub>, θ<sub>zi</sub>, v<sub>j</sub>, θ<sub>zj</sub>}</div>`;
  h += `<div class="er-eq">B<sub>bz</sub>(ξ) = (1/L²)·[H₁″, H₂″, H₃″, H₄″]</div>`;

  h += `<div class="er-subsec">3.3 Curvatura (plano XZ → I<sub>y</sub>)</div>`;
  h += `<div class="er-eq">κ<sub>y</sub> = d²w/dx² = B<sub>by</sub> · {w<sub>i</sub>, θ<sub>yi</sub>, w<sub>j</sub>, θ<sub>yj</sub>}</div>`;

  h += `<div class="er-subsec">3.4 Torsión</div>`;
  h += `<div class="er-eq">φ′ = dθ<sub>x</sub>/dx = (1/L)·[−1, 1]·{θ<sub>xi</sub>, θ<sub>xj</sub>}</div>`;

  // ── 4. Relaciones constitutivas D ──
  h += `<div class="er-section-title">4. Relaciones constitutivas D</div>`;
  h += `<p>Cada modo de deformación tiene su rigidez material:</p>`;
  h += `<table class="er-eq-table">`;
  h += `<tr><td class="fn-name">Axial:</td><td>σ = E·ε → D<sub>ax</sub> = E·A</td><td class="fn-desc">= ${f(d.E)}·${f(d.A)} = <b>${f(d.E * d.A)}</b></td></tr>`;
  h += `<tr><td class="fn-name">Flex Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>·κ → D<sub>bz</sub> = E·I<sub>z</sub></td><td class="fn-desc">= ${f(d.E)}·${f(d.Iz)} = <b>${f(d.E * d.Iz)}</b></td></tr>`;
  h += `<tr><td class="fn-name">Flex Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>·κ → D<sub>by</sub> = E·I<sub>y</sub></td><td class="fn-desc">= ${f(d.E)}·${f(d.Iy)} = <b>${f(d.E * d.Iy)}</b></td></tr>`;
  h += `<tr><td class="fn-name">Torsión:</td><td>T = GJ·φ′ → D<sub>t</sub> = G·J</td><td class="fn-desc">= ${f(d.G)}·${f(d.J)} = <b>${f(d.G * d.J)}</b></td></tr>`;
  h += `</table>`;

  // ── 5. K local = ∫ B^T D B dx ──
  h += `<div class="er-section-title">5. Integración → K<sub>local</sub></div>`;
  h += `<p>La matriz de rigidez local se obtiene integrando analíticamente:</p>`;
  h += `<div class="er-eq er-eq-main">K<sub>local</sub> = ∫₀ᴸ Bᵀ · D · B  dx</div>`;
  h += `<p>Para la viga Euler-Bernoulli, la integración se hace por partes para cada combinación de GDL. Los coeficientes resultantes son:</p>`;

  const EA_L = d.E * d.A / d.L;
  const EIz_L3 = d.E * d.Iz / d.L ** 3;
  const EIy_L3 = d.E * d.Iy / d.L ** 3;
  const GJ_L = d.G * d.J / d.L;

  h += `<table class="er-coeff">`;
  h += `<tr><td>EA/L</td><td>= ${f(d.E)}·${f(d.A)}/${f(d.L)}</td><td>= <b>${f(EA_L)}</b></td><td class="fn-desc">→ K[0,0], K[6,6]</td></tr>`;
  h += `<tr><td>12EI<sub>z</sub>/L³</td><td>= 12·${f(d.E)}·${f(d.Iz)}/${f(d.L)}³</td><td>= <b>${f(12 * EIz_L3)}</b></td><td class="fn-desc">→ K[1,1], K[7,7]</td></tr>`;
  h += `<tr><td>12EI<sub>y</sub>/L³</td><td>= 12·${f(d.E)}·${f(d.Iy)}/${f(d.L)}³</td><td>= <b>${f(12 * EIy_L3)}</b></td><td class="fn-desc">→ K[2,2], K[8,8]</td></tr>`;
  h += `<tr><td>GJ/L</td><td>= ${f(d.G)}·${f(d.J)}/${f(d.L)}</td><td>= <b>${f(GJ_L)}</b></td><td class="fn-desc">→ K[3,3], K[9,9]</td></tr>`;
  h += `<tr><td>4EI<sub>y</sub>/L</td><td>= 4·${f(d.E)}·${f(d.Iy)}/${f(d.L)}</td><td>= <b>${f(4 * d.E * d.Iy / d.L)}</b></td><td class="fn-desc">→ K[4,4], K[10,10]</td></tr>`;
  h += `<tr><td>4EI<sub>z</sub>/L</td><td>= 4·${f(d.E)}·${f(d.Iz)}/${f(d.L)}</td><td>= <b>${f(4 * d.E * d.Iz / d.L)}</b></td><td class="fn-desc">→ K[5,5], K[11,11]</td></tr>`;
  h += `<tr><td>6EI<sub>z</sub>/L²</td><td>= 6·${f(d.E)}·${f(d.Iz)}/${f(d.L)}²</td><td>= <b>${f(6 * d.E * d.Iz / d.L ** 2)}</b></td><td class="fn-desc">→ K[1,5] acoplamiento</td></tr>`;
  h += `<tr><td>6EI<sub>y</sub>/L²</td><td>= 6·${f(d.E)}·${f(d.Iy)}/${f(d.L)}²</td><td>= <b>${f(6 * d.E * d.Iy / d.L ** 2)}</b></td><td class="fn-desc">→ K[2,4] acoplamiento</td></tr>`;
  h += `</table>`;

  if (d.kLocal) {
    h += `<div class="er-subsec">Resultado: K<sub>local</sub> (12×12)</div>`;
    h += matrixHTML(d.kLocal);
  }

  // ── 6. Transformación ──
  h += `<div class="er-section-title">6. Transformación de coordenadas</div>`;
  h += `<p>Los cosenos directores del eje del elemento:</p>`;
  h += `<div class="er-eq-num">`;
  h += `l = (x<sub>j</sub>−x<sub>i</sub>)/L = ${f4(d.l)}<br/>`;
  h += `m = (y<sub>j</sub>−y<sub>i</sub>)/L = ${f4(d.m)}<br/>`;
  h += `n = (z<sub>j</sub>−z<sub>i</sub>)/L = ${f4(d.n)}<br/>`;
  h += `D = √(l²+m²) = ${f4(d.D)}`;
  h += `</div>`;

  if (Math.abs(d.n) > 0.999) {
    h += `<p>Caso especial: elemento vertical (n ≈ ${d.n > 0 ? "+1" : "−1"}):</p>`;
    h += `<div class="er-eq">λ = ${d.n > 0 ? "[[0,0,1],[0,1,0],[−1,0,0]]" : "[[0,0,−1],[0,1,0],[1,0,0]]"}</div>`;
  } else {
    h += `<div class="er-eq">λ = [[l, m, n], [−m/D, l/D, 0], [−ln/D, −mn/D, D]]</div>`;
  }
  h += `<div class="er-eq er-eq-main">T = I₄ ⊗ λ &nbsp; (producto de Kronecker → 12×12 bloque-diagonal)</div>`;

  // ── 7. K global ──
  h += `<div class="er-section-title">7. K<sub>global</sub> = T<sup>T</sup> · K<sub>local</sub> · T</div>`;
  h += `<p>Transformar la rigidez local al sistema global de coordenadas:</p>`;
  h += `<div class="er-eq er-eq-main">K<sub>global</sub> = T<sup>T</sup> · K<sub>local</sub> · T</div>`;
  if (d.kGlobal) h += matrixHTML(d.kGlobal as number[][]);

  // ── 8. Ensamblaje ──
  h += `<div class="er-section-title">8. Ensamblaje</div>`;
  const dofs0 = d.elem[0] * 6, dofs1 = d.elem[1] * 6;
  h += `<div class="er-eq-num">`;
  h += `Nodo ${d.elem[0]} → DOFs globales [${dofs0}..${dofs0 + 5}]<br/>`;
  h += `Nodo ${d.elem[1]} → DOFs globales [${dofs1}..${dofs1 + 5}]<br/>`;
  h += `K<sub>total</sub>[DOFs<sub>i</sub>, DOFs<sub>j</sub>] += K<sub>global</sub>[i, j]`;
  h += `</div>`;

  // ── 9. Fuerzas internas ──
  h += `<div class="er-section-title">9. Recuperación de fuerzas internas</div>`;
  h += `<div class="er-eq">u<sub>local</sub> = T · u<sub>global</sub></div>`;
  h += `<div class="er-eq er-eq-main">f<sub>local</sub> = K<sub>local</sub> · u<sub>local</sub></div>`;
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
