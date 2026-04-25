/**
 * Report Explained — Academic-style FEM solver step-by-step
 * Similar to Calcpad's "Rectangular Slab FEA" document style:
 * symbolic formulas → numerical substitution → results
 */
import {
  Node,
  Element,
  NodeInputs,
  ElementInputs,
  DeformOutputs,
  AnalyzeOutputs,
  getLocalStiffnessMatrix,
  getTransformationMatrix,
} from "hekatan-fem";
import { multiply, transpose, norm, subtract } from "mathjs";

export interface ReportInput {
  nodes: Node[];
  elements: Element[];
  nodeInputs: NodeInputs;
  elementInputs: ElementInputs;
  deformOutputs?: DeformOutputs;
  analyzeOutputs?: AnalyzeOutputs;
}

export function buildReportExplained(input: ReportInput): HTMLDivElement {
  const { nodes, elements, elementInputs: ei, nodeInputs: ni, deformOutputs: dOut, analyzeOutputs: aOut } = input;
  const totalDof = nodes.length * 6;
  const nElem = elements.length;
  const nFrames = elements.filter(e => e.length === 2).length;
  const nShells = elements.filter(e => e.length >= 3).length;

  const div = document.createElement("div");
  div.className = "rpt-overlay";

  let h = "";

  // ═══════════════════════════════════════════════════
  // HEADER
  // ═══════════════════════════════════════════════════
  h += `<button class="rpt-close" id="rpt-close">✕ Close</button>`;
  h += `<h1>Finite Element Analysis — Step-by-Step Report</h1>`;
  h += `<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>`;
  h += `<hr class="rpt-sep"/>`;

  // ═══════════════════════════════════════════════════
  // 1. INPUT DATA
  // ═══════════════════════════════════════════════════
  h += `<h2>1. Input Data</h2>`;
  h += `<table class="rpt-info"><tbody>`;
  h += `<tr><td>Number of nodes</td><td class="val">${nodes.length}</td></tr>`;
  h += `<tr><td>Number of elements</td><td class="val">${nElem} (${nFrames} frames, ${nShells} shells)</td></tr>`;
  h += `<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, θ<sub>x</sub>, θ<sub>y</sub>, θ<sub>z</sub>)</td></tr>`;
  h += `<tr><td>Total DOFs</td><td class="val">${totalDof}</td></tr>`;
  h += `</tbody></table>`;

  // Node coordinates table
  h += `<h3>1.1 Node Coordinates</h3>`;
  h += `<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>`;
  nodes.forEach((n, i) => {
    h += `<tr><td>${i}</td><td>${f(n[0])}</td><td>${f(n[1])}</td><td>${f(n[2])}</td></tr>`;
  });
  h += `</tbody></table>`;

  // Element connectivity
  h += `<h3>1.2 Element Connectivity</h3>`;
  h += `<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>`;
  elements.forEach((el, i) => {
    const isFrame = el.length === 2;
    const elmN = el.map(n => nodes[n]);
    const L = isFrame ? (norm(subtract(elmN[1], elmN[0])) as number) : 0;
    const E = ei.elasticities?.get(i) ?? 0;
    const A = ei.areas?.get(i) ?? 0;
    const Iz = ei.momentsOfInertiaZ?.get(i) ?? 0;
    const Iy = ei.momentsOfInertiaY?.get(i) ?? 0;
    h += `<tr><td>${i}</td><td>${isFrame ? "Frame" : "Shell"}</td><td>${el.join(" → ")}</td>`;
    h += `<td>${f(L)}</td><td>${f(E)}</td><td>${f(A)}</td><td>${f(Iz)}</td><td>${f(Iy)}</td></tr>`;
  });
  h += `</tbody></table>`;

  // ═══════════════════════════════════════════════════
  // 2. ELEMENT FORMULATION
  // ═══════════════════════════════════════════════════
  h += `<h2>2. Element Formulation</h2>`;

  if (nFrames > 0) {
    h += `<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>`;
    h += `<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, θ<sub>x</sub>, θ<sub>y</sub>, θ<sub>z</sub>] per node.</p>`;

    // Shape functions
    h += `<h4>2.1.1 Shape Functions</h4>`;
    h += `<p><b>Axial</b> (linear interpolation):</p>`;
    h += `<div class="rpt-eq">N₁(ξ) = 1 − ξ &nbsp;&nbsp;&nbsp; N₂(ξ) = ξ &nbsp;&nbsp;&nbsp; where ξ = x/L ∈ [0, 1]</div>`;

    h += `<p><b>Bending</b> (Hermite cubic polynomials):</p>`;
    h += `<table class="rpt-eq-table"><tbody>`;
    h += `<tr><td class="eq-name">H₁(ξ)</td><td>= 1 − 3ξ² + 2ξ³</td><td class="eq-desc">displacement at node i</td></tr>`;
    h += `<tr><td class="eq-name">H₂(ξ)</td><td>= Lξ(1 − ξ)²</td><td class="eq-desc">rotation at node i</td></tr>`;
    h += `<tr><td class="eq-name">H₃(ξ)</td><td>= 3ξ² − 2ξ³</td><td class="eq-desc">displacement at node j</td></tr>`;
    h += `<tr><td class="eq-name">H₄(ξ)</td><td>= Lξ²(ξ − 1)</td><td class="eq-desc">rotation at node j</td></tr>`;
    h += `</tbody></table>`;

    // Shape function SVG
    h += shapeFunctionsSVG();

    h += `<p><b>Torsion</b> (linear): same as axial.</p>`;

    // B matrix
    h += `<h4>2.1.2 Strain-Displacement Matrix B</h4>`;
    h += `<p>The B matrix relates nodal displacements to internal strains:</p>`;
    h += `<div class="rpt-eq">ε<sub>axial</sub> = du/dx = (1/L)·[−1, 1]·{u<sub>i</sub>, u<sub>j</sub>}</div>`;
    h += `<div class="rpt-eq">κ<sub>bending</sub> = d²v/dx² = B<sub>b</sub>·{v<sub>i</sub>, θ<sub>i</sub>, v<sub>j</sub>, θ<sub>j</sub>}</div>`;
    h += `<div class="rpt-eq">B<sub>b</sub>(ξ) = (1/L²)·[−6+12ξ, L(−4+6ξ), 6−12ξ, L(−2+6ξ)]</div>`;
    h += `<div class="rpt-eq">φ′<sub>torsion</sub> = dθ<sub>x</sub>/dx = (1/L)·[−1, 1]·{θ<sub>xi</sub>, θ<sub>xj</sub>}</div>`;

    // D matrix
    h += `<h4>2.1.3 Constitutive Relations D</h4>`;
    h += `<table class="rpt-eq-table"><tbody>`;
    h += `<tr><td class="eq-name">Axial:</td><td>σ = E·ε</td><td>→ D<sub>axial</sub> = E·A</td></tr>`;
    h += `<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>·κ</td><td>→ D<sub>bz</sub> = E·I<sub>z</sub></td></tr>`;
    h += `<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>·κ</td><td>→ D<sub>by</sub> = E·I<sub>y</sub></td></tr>`;
    h += `<tr><td class="eq-name">Torsion:</td><td>T = GJ·φ′</td><td>→ D<sub>torsion</sub> = G·J</td></tr>`;
    h += `</tbody></table>`;

    // K local formula
    h += `<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>`;
    h += `<p>Obtained by analytical integration:</p>`;
    h += `<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = ∫₀ᴸ Bᵀ·D·B dx</div>`;
    h += `<p>Result for Euler-Bernoulli beam (12×12 symmetric):</p>`;
    h += `<div class="rpt-eq-small">`;
    h += `K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L³ &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L³ &nbsp;&nbsp; K[3,3] = GJ/L<br/>`;
    h += `K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L² &nbsp;&nbsp; K[2,4] = −6EI<sub>y</sub>/L²`;
    h += `</div>`;

    // T matrix formula
    h += `<h4>2.1.5 Transformation Matrix T</h4>`;
    h += `<p>Direction cosines of element axis:</p>`;
    h += `<div class="rpt-eq">l = (x<sub>j</sub>−x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>−y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>−z<sub>i</sub>)/L &nbsp;&nbsp; D = √(l²+m²)</div>`;
    h += `<div class="rpt-eq">λ = [l, m, n; −m/D, l/D, 0; −ln/D, −mn/D, D] &nbsp;&nbsp; (3×3)</div>`;
    h += `<div class="rpt-eq rpt-eq-highlight">T = I₄ ⊗ λ &nbsp;&nbsp; (12×12 block-diagonal, Kronecker product)</div>`;
    h += `<p>Special case for vertical elements (n = ±1): λ uses fixed axes.</p>`;

    // K global formula
    h += `<h4>2.1.6 Global Stiffness Matrix</h4>`;
    h += `<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = Tᵀ · K<sub>local</sub> · T</div>`;
  }

  // ═══════════════════════════════════════════════════
  // 3. NUMERICAL VALUES PER ELEMENT
  // ═══════════════════════════════════════════════════
  h += `<h2>3. Numerical Results per Element</h2>`;
  h += `<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = Tᵀ·K·T with the actual properties:</p>`;

  for (let e = 0; e < nElem; e++) {
    const elem = elements[e];
    const elmNodes = elem.map(n => nodes[n]) as Node[];
    const isFrame = elem.length === 2;
    if (!isFrame) continue; // skip shells for now

    const L = norm(subtract(elmNodes[1], elmNodes[0])) as number;
    const E = ei.elasticities?.get(e) ?? 0;
    const A = ei.areas?.get(e) ?? 0;
    const Iz = ei.momentsOfInertiaZ?.get(e) ?? 0;
    const Iy = ei.momentsOfInertiaY?.get(e) ?? 0;
    const G = ei.shearModuli?.get(e) ?? 0;
    const J = ei.torsionalConstants?.get(e) ?? 0;

    let kLocal: number[][] | null = null, T: number[][] | null = null, kGlobal: number[][] | null = null;
    try {
      kLocal = getLocalStiffnessMatrix(elmNodes, ei, e);
      T = getTransformationMatrix(elmNodes);
      kGlobal = multiply(transpose(T), multiply(kLocal, T)) as number[][];
    } catch { continue; }

    // Direction cosines
    const vec = subtract(elmNodes[1], elmNodes[0]) as number[];
    const l = vec[0] / L, m = vec[1] / L, n = vec[2] / L;

    h += `<div class="rpt-elem-block">`;
    h += `<h3 class="rpt-elem-title" data-toggle="elem${e}">▶ Element ${e} — Nodes ${elem[0]} → ${elem[1]}, L = ${f(L)}</h3>`;
    h += `<div id="rpt-elem${e}" class="rpt-elem-body" style="display:none">`;

    // Properties with substitution
    h += `<h4>Properties (numerical substitution)</h4>`;
    h += `<div class="rpt-eq-small">`;
    h += `E = ${f(E)} &nbsp;&nbsp; A = ${f(A)} &nbsp;&nbsp; I<sub>z</sub> = ${f(Iz)} &nbsp;&nbsp; I<sub>y</sub> = ${f(Iy)} &nbsp;&nbsp; G = ${f(G)} &nbsp;&nbsp; J = ${f(J)}<br/>`;
    h += `EA/L = ${f(E)}·${f(A)}/${f(L)} = <b>${f(E * A / L)}</b><br/>`;
    h += `12EI<sub>z</sub>/L³ = 12·${f(E)}·${f(Iz)}/${f(L)}³ = <b>${f(12 * E * Iz / L ** 3)}</b><br/>`;
    h += `12EI<sub>y</sub>/L³ = 12·${f(E)}·${f(Iy)}/${f(L)}³ = <b>${f(12 * E * Iy / L ** 3)}</b><br/>`;
    h += `GJ/L = ${f(G)}·${f(J)}/${f(L)} = <b>${f(G * J / L)}</b>`;
    h += `</div>`;

    // Direction cosines
    h += `<h4>Direction cosines</h4>`;
    h += `<div class="rpt-eq-small">l = ${f4(l)}, m = ${f4(m)}, n = ${f4(n)}, D = ${f4(Math.sqrt(l ** 2 + m ** 2))}</div>`;

    // K local matrix
    h += `<h4>K<sub>local</sub> (12×12)</h4>`;
    h += matrixHTML(kLocal, 12);

    // T matrix
    h += `<h4>T — Transformation (12×12)</h4>`;
    h += matrixHTML(T as number[][], 12);

    // K global matrix
    h += `<h4>K<sub>global</sub> = Tᵀ · K<sub>local</sub> · T</h4>`;
    h += matrixHTML(kGlobal as number[][], 12);

    // Assembly info
    h += `<h4>Assembly</h4>`;
    h += `<div class="rpt-eq-small">Global DOFs: node ${elem[0]} → [${elem[0] * 6}..${elem[0] * 6 + 5}], node ${elem[1]} → [${elem[1] * 6}..${elem[1] * 6 + 5}]</div>`;

    h += `</div></div>`;
  }

  // ═══════════════════════════════════════════════════
  // 4. GLOBAL ASSEMBLY
  // ═══════════════════════════════════════════════════
  h += `<h2>4. Global Assembly</h2>`;
  h += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = Σ<sub>e=0</sub><sup>${nElem - 1}</sup> (T<sub>e</sub>ᵀ · k<sub>e</sub> · T<sub>e</sub>)</div>`;
  h += `<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>`;
  h += assemblyMapHTML(elements, nodes.length);

  // ═══════════════════════════════════════════════════
  // 5. BOUNDARY CONDITIONS
  // ═══════════════════════════════════════════════════
  h += `<h2>5. Boundary Conditions</h2>`;
  const dofLabels = ["u<sub>x</sub>", "u<sub>y</sub>", "u<sub>z</sub>", "θ<sub>x</sub>", "θ<sub>y</sub>", "θ<sub>z</sub>"];
  const fixedDofs: number[] = [];

  h += `<h3>5.1 Supports (fixed DOFs)</h3>`;
  if (ni.supports && ni.supports.size > 0) {
    h += `<table class="rpt-data"><thead><tr><th>Node</th>`;
    for (const dl of dofLabels) h += `<th>${dl}</th>`;
    h += `</tr></thead><tbody>`;
    ni.supports.forEach((sup, nodeIdx) => {
      h += `<tr><td>${nodeIdx}</td>`;
      sup.forEach((fixed, d) => {
        if (fixed) fixedDofs.push(nodeIdx * 6 + d);
        h += `<td class="${fixed ? "fixed" : ""}">${fixed ? "Fixed" : "Free"}</td>`;
      });
      h += `</tr>`;
    });
    h += `</tbody></table>`;
  }
  h += `<div class="rpt-eq-small">Fixed DOFs: [${fixedDofs.join(", ")}] → ${fixedDofs.length} constraints<br/>`;
  h += `Free DOFs: ${totalDof} − ${fixedDofs.length} = <b>${totalDof - fixedDofs.length}</b></div>`;

  h += `<h3>5.2 Applied Loads</h3>`;
  if (ni.loads && ni.loads.size > 0) {
    h += `<table class="rpt-data"><thead><tr><th>Node</th>`;
    const flabels = ["F<sub>x</sub>", "F<sub>y</sub>", "F<sub>z</sub>", "M<sub>x</sub>", "M<sub>y</sub>", "M<sub>z</sub>"];
    for (const fl of flabels) h += `<th>${fl}</th>`;
    h += `</tr></thead><tbody>`;
    ni.loads.forEach((load, nodeIdx) => {
      h += `<tr><td>${nodeIdx}</td>`;
      load.forEach(v => {
        const nz = Math.abs(v) > 1e-10;
        h += `<td class="${nz ? "nz" : ""}">${nz ? f(v) : "0"}</td>`;
      });
      h += `</tr>`;
    });
    h += `</tbody></table>`;
  }

  // ═══════════════════════════════════════════════════
  // 6. SOLUTION
  // ═══════════════════════════════════════════════════
  h += `<h2>6. Solution</h2>`;
  h += `<p>After removing fixed DOFs, the reduced system is:</p>`;
  h += `<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> · u<sub>free</sub> = F<sub>free</sub></div>`;
  h += `<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>`;

  h += `<h3>6.1 Nodal Displacements</h3>`;
  if (dOut?.deformations) {
    h += `<table class="rpt-data"><thead><tr><th>Node</th>`;
    for (const dl of dofLabels) h += `<th>${dl}</th>`;
    h += `</tr></thead><tbody>`;
    dOut.deformations.forEach((d, nodeIdx) => {
      h += `<tr><td>${nodeIdx}</td>`;
      d.forEach(v => {
        const nz = Math.abs(v) > 1e-10;
        h += `<td class="${nz ? "nz" : ""}">${f(v, 6)}</td>`;
      });
      h += `</tr>`;
    });
    h += `</tbody></table>`;
  }

  h += `<h3>6.2 Reactions</h3>`;
  h += `<div class="rpt-eq">R = K<sub>total</sub> · u (extract at fixed DOFs)</div>`;
  if (dOut?.reactions) {
    h += `<table class="rpt-data"><thead><tr><th>Node</th>`;
    for (const dl of dofLabels) h += `<th>${dl}</th>`;
    h += `</tr></thead><tbody>`;
    dOut.reactions.forEach((r, nodeIdx) => {
      h += `<tr><td>${nodeIdx}</td>`;
      r.forEach(v => {
        const nz = Math.abs(v) > 1e-10;
        h += `<td class="${nz ? "nz-react" : ""}">${nz ? f(v, 4) : "0"}</td>`;
      });
      h += `</tr>`;
    });
    h += `</tbody></table>`;
  }

  // ═══════════════════════════════════════════════════
  // 7. INTERNAL FORCES
  // ═══════════════════════════════════════════════════
  h += `<h2>7. Internal Forces</h2>`;
  h += `<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>`;
  h += `<div class="rpt-eq">u<sub>local</sub> = T · u<sub>global</sub></div>`;
  h += `<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> · u<sub>local</sub></div>`;

  if (dOut?.deformations) {
    const fLabels = ["N", "V<sub>y</sub>", "V<sub>z</sub>", "M<sub>x</sub>", "M<sub>y</sub>", "M<sub>z</sub>"];
    h += `<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>`;
    for (const fl of fLabels) h += `<th>${fl}<sub>i</sub></th>`;
    for (const fl of fLabels) h += `<th>${fl}<sub>j</sub></th>`;
    h += `</tr></thead><tbody>`;

    for (let e = 0; e < nElem; e++) {
      const elem = elements[e];
      if (elem.length !== 2) continue;
      const elmNodes = elem.map(n => nodes[n]) as Node[];
      try {
        const kL = getLocalStiffnessMatrix(elmNodes, ei, e);
        const T2 = getTransformationMatrix(elmNodes);
        const uG: number[] = [];
        for (const n of elem) {
          const d = dOut.deformations?.get(n) || [0, 0, 0, 0, 0, 0];
          uG.push(...d);
        }
        const uL = multiply(T2, uG) as number[];
        const fL = multiply(kL, uL) as number[];
        h += `<tr><td>${e}</td><td>${elem.join("→")}</td>`;
        for (let i = 0; i < 12; i++) {
          const nz = Math.abs(fL[i]) > 1e-10;
          h += `<td class="${nz ? "nz" : ""}">${f(fL[i], 2)}</td>`;
        }
        h += `</tr>`;
      } catch { /* skip */ }
    }
    h += `</tbody></table>`;
  }

  // ═══════════════════════════════════════════════════
  // STYLES
  // ═══════════════════════════════════════════════════
  const style = `
    <style>
      .rpt-overlay {
        position: fixed; inset: 0; z-index: 9999999;
        background: #fff; color: #222;
        overflow-y: auto; padding: 30px 50px;
        font-family: 'Georgia Pro', 'Century Schoolbook', 'Times New Roman', serif;
        font-size: 12pt; line-height: 160%;
        max-width: 1000px; margin: 0 auto;
      }
      .rpt-overlay h1 { font-family: 'Arial Nova', Helvetica, sans-serif; font-size: 22pt; color: #003366; margin: 0 0 4px 0; }
      .rpt-overlay h2 { font-family: 'Arial Nova', Helvetica, sans-serif; font-size: 16pt; color: #003366; margin: 28px 0 12px 0; border-bottom: 2px solid #003366; padding-bottom: 4px; }
      .rpt-overlay h3 { font-family: 'Arial Nova', Helvetica, sans-serif; font-size: 13pt; color: #005599; margin: 20px 0 8px 0; }
      .rpt-overlay h4 { font-family: 'Arial Nova', Helvetica, sans-serif; font-size: 11pt; color: #666; margin: 14px 0 6px 0; }
      .rpt-overlay p { margin: 6px 0; }
      .rpt-subtitle { color: #666; font-style: italic; margin-bottom: 8px; }
      .rpt-sep { border: none; border-top: 1px solid #ccc; margin: 16px 0; }

      .rpt-close { position: fixed; top: 12px; right: 20px; background: #003366; color: #fff; border: none; border-radius: 4px; padding: 8px 16px; cursor: pointer; font-size: 13px; z-index: 10000000; }
      .rpt-close:hover { background: #005599; }

      .rpt-info { border-collapse: collapse; margin: 8px 0; font-family: 'Segoe UI', sans-serif; font-size: 11pt; }
      .rpt-info td { padding: 3px 16px 3px 0; }
      .rpt-info .val { color: #06d; font-weight: bold; }

      .rpt-data { border-collapse: collapse; margin: 8px 0; font-family: 'Consolas', monospace; font-size: 10pt; width: 100%; }
      .rpt-data th { background: #f0f4f8; color: #003366; padding: 4px 8px; border: 1px solid #ccc; text-align: center; font-size: 9pt; }
      .rpt-data td { padding: 3px 8px; border: 1px solid #ddd; text-align: right; }
      .rpt-data td.nz { color: #06d; font-weight: bold; }
      .rpt-data td.nz-react { color: #c44; font-weight: bold; }
      .rpt-data td.fixed { color: #c44; font-weight: bold; background: #fff0f0; }

      .rpt-eq { background: #f8f9fb; border-left: 3px solid #06d; padding: 8px 14px; margin: 8px 0; font-family: 'Georgia Pro', serif; font-size: 12pt; color: #06d; }
      .rpt-eq-highlight { background: #eef6ff; border-left: 4px solid #003366; font-weight: bold; }
      .rpt-eq-small { background: #fafafa; border-left: 2px solid #ccc; padding: 6px 12px; margin: 6px 0; font-family: 'Consolas', monospace; font-size: 10pt; color: #333; line-height: 180%; }

      .rpt-eq-table { border-collapse: collapse; margin: 6px 0; }
      .rpt-eq-table td { padding: 3px 12px; vertical-align: top; }
      .rpt-eq-table .eq-name { color: #06d; font-weight: bold; font-family: serif; }
      .rpt-eq-table .eq-desc { color: #888; font-style: italic; font-size: 10pt; }

      .rpt-mtx { border-collapse: collapse; font-family: 'Consolas', monospace; font-size: 9pt; margin: 6px 0; }
      .rpt-mtx td { padding: 2px 6px; text-align: right; border: 1px solid #e0e0e0; min-width: 55px; }
      .rpt-mtx td.z { color: #ccc; }
      .rpt-mtx td.diag { background: #eef6ff; color: #06d; font-weight: bold; }

      .rpt-elem-block { margin: 4px 0; border-left: 3px solid #e0e0e0; padding-left: 12px; }
      .rpt-elem-title { cursor: pointer; color: #005599; }
      .rpt-elem-title:hover { color: #08d; }
      .rpt-elem-body { margin: 4px 0 16px 0; }

      .rpt-assembly-map { border-collapse: collapse; margin: 8px 0; }
      .rpt-assembly-map td { width: 16px; height: 16px; text-align: center; font-size: 8px; padding: 0; border: 1px solid #eee; }

      @media print {
        .rpt-close { display: none; }
        .rpt-overlay { position: static; padding: 10mm; }
      }
    </style>
  `;

  div.innerHTML = style + h;

  // Event handlers
  div.querySelector("#rpt-close")?.addEventListener("click", () => div.remove());

  // Collapsible elements
  div.querySelectorAll("[data-toggle]").forEach(el => {
    el.addEventListener("click", () => {
      const id = (el as HTMLElement).dataset.toggle!;
      const body = div.querySelector(`#rpt-${id}`) as HTMLElement;
      if (body) {
        const visible = body.style.display !== "none";
        body.style.display = visible ? "none" : "";
        el.textContent = el.textContent!.replace(/^[▼▶]/, visible ? "▶" : "▼");
      }
    });
  });

  return div;
}

// ── Helpers ──

function f(v: number, dec = 2): string {
  if (Math.abs(v) < 1e-10) return "0";
  if (Math.abs(v) >= 1e7 || (Math.abs(v) < 0.01 && v !== 0)) return v.toExponential(dec);
  return v.toFixed(dec);
}

function f4(v: number): string {
  if (Math.abs(v) < 1e-10) return "0";
  return v.toFixed(4);
}

function matrixHTML(mat: number[][], size: number): string {
  const show = Math.min(size, 12);
  let h = `<div style="overflow-x:auto"><table class="rpt-mtx">`;
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
  if (size > show) h += `<div style="color:#888;font-size:9pt">(showing ${show}×${show} of ${size}×${size})</div>`;
  h += `</div>`;
  return h;
}

function fmtM(v: number): string {
  if (Math.abs(v) >= 1e6) return v.toExponential(1);
  if (Math.abs(v) < 0.01 && v !== 0) return v.toExponential(1);
  if (Math.abs(v) >= 100) return v.toFixed(0);
  return v.toFixed(2);
}

function shapeFunctionsSVG(): string {
  const W = 600, H = 180, pad = 30;
  const xScale = W - 2 * pad, yScale = 60;
  const N = 80;
  const curves = [
    { name: "H₁", color: "#c44", fn: (x: number) => 1 - 3 * x ** 2 + 2 * x ** 3 },
    { name: "H₂/L", color: "#2a9d8f", fn: (x: number) => x * (1 - x) ** 2 },
    { name: "H₃", color: "#264653", fn: (x: number) => 3 * x ** 2 - 2 * x ** 3 },
    { name: "H₄/L", color: "#e9c46a", fn: (x: number) => x ** 2 * (x - 1) },
  ];

  let svg = `<svg viewBox="0 0 ${W} ${H}" style="width:100%;max-width:${W}px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">`;
  svg += `<line x1="${pad}" y1="${H / 2}" x2="${W - pad}" y2="${H / 2}" stroke="#ccc" stroke-width="1"/>`;
  svg += `<line x1="${pad}" y1="${pad - 10}" x2="${pad}" y2="${H - pad + 10}" stroke="#ccc" stroke-width="1"/>`;
  svg += `<text x="${W / 2}" y="${H - 5}" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">ξ (0 → 1)</text>`;
  svg += `<text x="${pad - 5}" y="${H / 2 - yScale - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`;
  svg += `<text x="${pad - 5}" y="${H / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;

  for (const c of curves) {
    let path = "";
    for (let i = 0; i <= N; i++) {
      const xi = i / N;
      const x = pad + xi * xScale;
      const y = H / 2 - c.fn(xi) * yScale;
      path += (i === 0 ? "M" : "L") + `${x.toFixed(1)},${y.toFixed(1)}`;
    }
    svg += `<path d="${path}" fill="none" stroke="${c.color}" stroke-width="2.5"/>`;
    const lx = 0.75;
    const labelX = pad + lx * xScale + 8;
    const labelY = H / 2 - c.fn(lx) * yScale - 6;
    svg += `<text x="${labelX}" y="${labelY}" fill="${c.color}" font-size="11" font-weight="bold" font-family="sans-serif">${c.name}</text>`;
  }
  svg += `</svg>`;
  return svg;
}

function assemblyMapHTML(elements: Element[], nNodes: number): string {
  const totalDof = nNodes * 6;
  const maxShow = Math.min(totalDof, 30);
  let h = `<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>`;
  h += `<div style="overflow-x:auto"><table class="rpt-assembly-map">`;
  h += `<tr><td></td>`;
  for (let j = 0; j < maxShow; j++) h += `<td style="color:#003366;font-weight:bold;font-size:7px">${j}</td>`;
  h += `</tr>`;

  const contribMap: number[][] = Array.from({ length: maxShow }, () => Array(maxShow).fill(0));
  for (let e = 0; e < elements.length; e++) {
    const offsets = elements[e].map(n => n * 6);
    for (const oi of offsets) for (const oj of offsets) {
      for (let di = 0; di < 6; di++) for (let dj = 0; dj < 6; dj++) {
        const gi = oi + di, gj = oj + dj;
        if (gi < maxShow && gj < maxShow) contribMap[gi][gj]++;
      }
    }
  }

  for (let i = 0; i < maxShow; i++) {
    h += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${i}</td>`;
    for (let j = 0; j < maxShow; j++) {
      const n = contribMap[i][j];
      const bg = n === 0 ? "#fff" : n === 1 ? "#e8f0fe" : n === 2 ? "#c6dcf5" : "#a0c4e8";
      const txt = n === 0 ? "" : n.toString();
      h += `<td style="background:${bg};color:#003366">${txt}</td>`;
    }
    h += `</tr>`;
  }
  h += `</table></div>`;
  if (totalDof > maxShow) h += `<div style="color:#888;font-size:9pt">(showing ${maxShow}×${maxShow} of ${totalDof}×${totalDof})</div>`;
  return h;
}
