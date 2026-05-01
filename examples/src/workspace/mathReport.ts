/**
 * FEM Mathematical Report — floating panel in Calcpad Symbolic style
 * ====================================================================
 * Generates and displays the step-by-step FEM derivation for the active
 * workspace example (zapata Shell Thick + Winkler, Mindlin plate, etc.).
 * Uses KaTeX for math rendering.
 *
 * Usage:
 *   import { openMathReport } from "./mathReport";
 *   openMathReport(ex.id, ex.name, params, states);
 */

type ReportSection = { title: string; html: string };

/** Builds the report for a given example. Returns HTML sections. */
export function buildMathReport(
  exampleId: string,
  params: Record<string, number>,
  states: any,
): ReportSection[] {
  switch (exampleId) {
    case "zapata-aislada-validacion":
    case "zapata-aislada":
      return buildZapataReport(params, states);
    case "plate-thick":
    case "plate-thick-validacion":
      return buildPlateThickReport(params, states);
    case "plate-thin":
      return buildPlateThinReport(params, states);
    case "membrana-pstress":
      return buildMembraneReport(params, states);
    default:
      return [{
        title: "Report not available",
        html: `<p>The step-by-step mathematical report for example
               <code>${exampleId}</code> is not yet implemented.</p>
               <p>Supported: <b>zapata-aislada-validacion</b>,
               <b>plate-thick</b>, <b>plate-thin</b>, <b>membrana-pstress</b>.</p>`
      }];
  }
}

// ═══════════════════════════════════════════════════════════════════
// Helper: interpolate nodal values to a regular grid and render SVG color map
// ═══════════════════════════════════════════════════════════════════
type NodeField = { x: number; y: number; v: number };

function colorFor(t: number): string {
  // Jet-like colormap: blue → cyan → green → yellow → red
  const u = Math.max(0, Math.min(1, t));
  let r = 0, g = 0, b = 0;
  if (u < 0.25) { r = 0; g = 4 * u; b = 1; }
  else if (u < 0.5) { r = 0; g = 1; b = 1 - 4 * (u - 0.25); }
  else if (u < 0.75) { r = 4 * (u - 0.5); g = 1; b = 0; }
  else { r = 1; g = 1 - 4 * (u - 0.75); b = 0; }
  const toHex = (x: number) => Math.round(255 * x).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/** Renders a 2D SVG color map from scattered node values on a rectangular domain. */
function buildColorMapSvg(
  nodes: NodeField[], Lx: number, Ly: number, nx: number, ny: number,
  title: string, unit: string, widthPx = 420, heightPx = 280
): string {
  if (!nodes.length) return `<p><i>No data for "${title}"</i></p>`;
  const vMin = Math.min(...nodes.map(n => n.v));
  const vMax = Math.max(...nodes.map(n => n.v));
  const range = vMax - vMin || 1;
  const pad = 30;
  const scaleX = (widthPx - 2 * pad) / Lx;
  const scaleY = (heightPx - 2 * pad - 30) / Ly;
  const s = Math.min(scaleX, scaleY);
  const wPl = Lx * s, hPl = Ly * s;

  const cellsH = nx, cellsV = ny;
  const cw = wPl / cellsH, ch = hPl / cellsV;
  let cells = "";
  for (let j = 0; j < cellsV; j++) {
    for (let i = 0; i < cellsH; i++) {
      const cx = (i + 0.5) / cellsH * Lx;
      const cy = (j + 0.5) / cellsV * Ly;
      // IDW interpolation
      let wsum = 0, vsum = 0;
      for (const n of nodes) {
        const d2 = (n.x - cx) ** 2 + (n.y - cy) ** 2;
        if (d2 < 1e-10) { vsum = n.v; wsum = 1; break; }
        const w = 1 / d2;
        wsum += w;
        vsum += w * n.v;
      }
      const v = vsum / wsum;
      const t = (v - vMin) / range;
      const xPx = pad + i * cw;
      const yPx = pad + (cellsV - 1 - j) * ch;
      cells += `<rect x="${xPx.toFixed(1)}" y="${yPx.toFixed(1)}" width="${(cw+0.3).toFixed(1)}" height="${(ch+0.3).toFixed(1)}" fill="${colorFor(t)}"/>`;
    }
  }
  // Legend (color bar)
  const legX = pad + wPl + 10;
  const legH = hPl;
  let legend = "";
  const nLeg = 60;
  for (let k = 0; k < nLeg; k++) {
    const t = 1 - k / (nLeg - 1);
    legend += `<rect x="${legX}" y="${pad + k * legH / nLeg}" width="14" height="${(legH / nLeg + 0.5).toFixed(1)}" fill="${colorFor(t)}"/>`;
  }
  const labels = [
    `<text x="${legX + 18}" y="${pad + 8}" font-size="10" fill="#ddd">${vMax.toFixed(2)}</text>`,
    `<text x="${legX + 18}" y="${pad + legH / 2 + 3}" font-size="10" fill="#ddd">${((vMin + vMax) / 2).toFixed(2)}</text>`,
    `<text x="${legX + 18}" y="${pad + legH - 2}" font-size="10" fill="#ddd">${vMin.toFixed(2)}</text>`,
    `<text x="${legX + 18}" y="${pad + legH + 14}" font-size="9" fill="#999" font-style="italic">${unit}</text>`,
  ].join("");
  // Axis labels
  const axisLabels = `
    <text x="${pad + wPl / 2}" y="${pad + hPl + 20}" font-size="11" text-anchor="middle" fill="#ddd">x (m)</text>
    <text x="${pad - 18}" y="${pad + hPl / 2}" font-size="11" text-anchor="middle" fill="#ddd" transform="rotate(-90 ${pad - 18} ${pad + hPl / 2})">y (m)</text>
    <text x="${pad}" y="${pad - 8}" font-size="11" fill="#d4af37" font-weight="bold">${title}</text>
  `;
  return `<svg width="${widthPx}" height="${heightPx}" style="background:#111;border:1px solid #333;border-radius:4px;">
    ${cells}
    <rect x="${pad}" y="${pad}" width="${wPl}" height="${hPl}" fill="none" stroke="#666" stroke-width="1"/>
    ${legend}
    ${axisLabels}
  </svg>`;
}

/** Renders a lateral section curve (x or y axis) of a nodal field.
 *  Baseline for fill = the Y coordinate of v = 0 (undeformed reference).
 *  For all-negative data (deflection), fill grows DOWNWARD from y=0. */
function buildLateralSvg(
  nodes: NodeField[], L: number, axis: "x" | "y",
  title: string, unit: string, widthPx = 420, heightPx = 180
): string {
  if (!nodes.length) return "";
  // Extract cross-section at mid-domain
  const L_ortho = axis === "x"
    ? Math.max(...nodes.map(n => n.y))
    : Math.max(...nodes.map(n => n.x));
  const midOrtho = L_ortho / 2;
  const tol = L_ortho * 0.15;
  const section = nodes
    .filter(n => axis === "x" ? Math.abs(n.y - midOrtho) < tol : Math.abs(n.x - midOrtho) < tol)
    .map(n => ({ p: axis === "x" ? n.x : n.y, v: n.v }))
    .sort((a, b) => a.p - b.p);
  if (section.length < 2) return "";
  const vMinData = Math.min(...section.map(s => s.v));
  const vMaxData = Math.max(...section.map(s => s.v));
  // Always include v=0 in the visible range so the reference line is shown
  // and the fill has a natural baseline
  const vMin = Math.min(0, vMinData);
  const vMax = Math.max(0, vMaxData);
  const range = (vMax - vMin) || 1;
  const pad = 40;
  const plotW = widthPx - 2 * pad;
  const plotH = heightPx - 2 * pad - 10;
  const X = (p: number) => pad + (p / L) * plotW;
  const Y = (v: number) => pad + plotH - ((v - vMin) / range) * plotH;
  const Y0 = Y(0);  // Baseline: y position of v = 0 (undeformed plate)
  // Fill: close the polygon at the baseline (v=0) instead of at chart bottom
  let polygon = `${X(section[0].p).toFixed(1)},${Y0.toFixed(1)} `;
  section.forEach(s => polygon += `${X(s.p).toFixed(1)},${Y(s.v).toFixed(1)} `);
  polygon += `${X(section[section.length - 1].p).toFixed(1)},${Y0.toFixed(1)}`;
  // Axis
  const axisTxt = `
    <text x="${pad + plotW / 2}" y="${pad + plotH + 22}" font-size="11" text-anchor="middle" fill="#ddd">${axis === "x" ? "x" : "y"} (m) — cross-section at ${axis === "x" ? "y" : "x"} = ${midOrtho.toFixed(2)}</text>
    <text x="${pad - 28}" y="${pad + plotH / 2}" font-size="10" text-anchor="middle" fill="#ddd" transform="rotate(-90 ${pad - 28} ${pad + plotH / 2})">${unit}</text>
    <text x="${pad}" y="${pad - 10}" font-size="11" fill="#d4af37" font-weight="bold">${title}</text>
    <line x1="${pad}" y1="${pad + plotH}" x2="${pad + plotW}" y2="${pad + plotH}" stroke="#666" stroke-width="1"/>
    <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${pad + plotH}" stroke="#666" stroke-width="1"/>
    <line x1="${pad}" y1="${Y0.toFixed(1)}" x2="${pad + plotW}" y2="${Y0.toFixed(1)}" stroke="#888" stroke-width="1" stroke-dasharray="3,3"/>
    <text x="${pad + plotW + 3}" y="${(Y0 + 3).toFixed(1)}" font-size="9" fill="#aaa">0 (undeformed)</text>
    <text x="${pad - 5}" y="${pad + 5}" font-size="10" text-anchor="end" fill="#aaa">${vMax.toFixed(2)}</text>
    <text x="${pad - 5}" y="${pad + plotH + 3}" font-size="10" text-anchor="end" fill="#aaa">${vMin.toFixed(2)}</text>
  `;
  const fillColor = vMinData < 0 ? "#e74c3c" : "#3498db";  // red if below zero (deflection)
  return `<svg width="${widthPx}" height="${heightPx}" style="background:#111;border:1px solid #333;border-radius:4px;">
    <polygon points="${polygon}" fill="${fillColor}" fill-opacity="0.35" stroke="${fillColor}" stroke-width="2"/>
    ${section.map(s => `<circle cx="${X(s.p).toFixed(1)}" cy="${Y(s.v).toFixed(1)}" r="2.5" fill="#f39c12"/>`).join("")}
    ${axisTxt}
  </svg>`;
}

/** Extracts nodal pressure field from a specific `pressure*` entry
 *  stored on analyzeOutputs (in tonf/m² — compression positive).
 *  The optional `signed` flag keeps the sign for moment-only cases. */
function extractPressureField(
  _p: Record<string, number>, states: any,
  key: "pressure" | "pressure_P" | "pressure_Mx" | "pressure_My" = "pressure",
  signed = false
): NodeField[] {
  const pr = states?.analyzeOutputs?.rawVal?.[key] as Map<number, number[]> | undefined;
  const nodes = states?.nodes?.rawVal as [number, number, number][] | undefined;
  const elems = states?.elements?.rawVal as number[][] | undefined;
  if (!pr || !nodes || !elems) return [];
  const acc = new Map<number, { sum: number; count: number }>();
  elems.forEach((el, eIdx) => {
    if (el.length !== 4) return;
    const vals = pr.get(eIdx);
    if (!vals) return;
    el.forEach((nIdx, k) => {
      const entry = acc.get(nIdx) || { sum: 0, count: 0 };
      const raw = vals[k] ?? 0;
      entry.sum += signed ? raw : Math.abs(raw);
      entry.count += 1;
      acc.set(nIdx, entry);
    });
  });
  const field: NodeField[] = [];
  acc.forEach((e, idx) => {
    const n = nodes[idx];
    if (!n) return;
    field.push({ x: n[0], y: n[1], v: e.count > 0 ? e.sum / e.count : 0 });
  });
  return field;
}

/** Extracts nodal displacement Z in mm with the original sign
 *  (negative = downward deflection, positive = upward).
 *  The optional `source` argument selects an alternate deformation map
 *  stored on analyzeOutputs (e.g. `deform_P`, `deform_Mx`, `deform_My`). */
function extractDeflectionField(
  _p: Record<string, number>, states: any,
  source: "main" | "deform_P" | "deform_Mx" | "deform_My" = "main",
): NodeField[] {
  let def: Map<number, number[]> | undefined;
  if (source === "main") {
    def = states?.deformOutputs?.rawVal?.deformations as Map<number, number[]> | undefined;
  } else {
    def = states?.analyzeOutputs?.rawVal?.[source] as Map<number, number[]> | undefined;
  }
  const nodes = states?.nodes?.rawVal as [number, number, number][] | undefined;
  if (!def || !nodes) return [];
  const field: NodeField[] = [];
  def.forEach((d, idx) => {
    const n = nodes[idx];
    if (!n || n[2] !== 0) return;
    field.push({ x: n[0], y: n[1], v: 1000 * (d[2] ?? 0) });
  });
  return field;
}

// ═══════════════════════════════════════════════════════════════════
// REPORT: Isolated Footing (Shell Thick + Winkler / Mindlin-Reissner)
// ═══════════════════════════════════════════════════════════════════
function buildZapataReport(p: Record<string, number>, states: any): ReportSection[] {
  const Lz = p.Lz ?? 1.5;
  const Bz = p.Bz ?? 1.5;
  const tz = p.tz ?? 0.3;
  const bc = p.bc ?? 0.4;
  const qAdm = p.q_adm ?? 10;
  const ksFactor = p.ks_factor ?? 10.5;
  const ks = p.ks ?? 1030;
  const P = p.P_simple ?? 20;
  const Mx = p.Mx_simple ?? 0.5;
  const My = p.My_simple ?? -0.5;
  const Ec = 22800; // MPa (concrete f'c = 24 MPa → E = 4700·√fc)
  const nu = 0.2;
  const D_plate = Ec * 1000 * Math.pow(tz, 3) / (12 * (1 - nu * nu));
  const kr = D_plate / (ks * Math.pow(Lz, 4));
  const rigid = kr > 1 ? "RIGID" : "FLEXIBLE";

  return [
    {
      title: "1. Theory — Thick plate (Mindlin-Reissner) on Winkler foundation",
      html: `
<p>The isolated footing is modelled as a <b>Mindlin-Reissner plate</b>
(Shell Thick) resting on a <b>Winkler foundation</b> (bed of independent
linear springs).</p>

<p>Unlike Kirchhoff-Love (thin plate), Mindlin admits <b>transverse shear</b>
deformation — valid for <span class="math">$t/L \\geq 0.05$</span>. In our footing:</p>

<p class="math">$$\\frac{t}{L} = \\frac{${tz.toFixed(2)}}{${Lz.toFixed(2)}} = ${(tz/Lz).toFixed(3)} \\geq 0.05 \\Rightarrow \\text{Mindlin OK}$$</p>

<p>Each node has <b>3 DOFs</b>: <span class="math">$w$</span> (vertical deflection),
<span class="math">$\\theta_x$</span> (rotation about X),
<span class="math">$\\theta_y$</span> (rotation about Y).</p>
      `
    },
    {
      title: "2. Geometry and material",
      html: `
<table class="data-tbl">
<tr><th>Parameter</th><th>Symbol</th><th>Value</th><th>Unit</th></tr>
<tr><td>Length X</td><td class="math">$L_z$</td><td>${Lz.toFixed(2)}</td><td>m</td></tr>
<tr><td>Length Y</td><td class="math">$B_z$</td><td>${Bz.toFixed(2)}</td><td>m</td></tr>
<tr><td>Thickness</td><td class="math">$t$</td><td>${tz.toFixed(2)}</td><td>m</td></tr>
<tr><td>Column side</td><td class="math">$b_c$</td><td>${bc.toFixed(2)}</td><td>m</td></tr>
<tr><td>Elastic modulus</td><td class="math">$E_c$</td><td>${Ec.toLocaleString()}</td><td>MPa</td></tr>
<tr><td>Poisson ratio</td><td class="math">$\\nu$</td><td>${nu}</td><td>—</td></tr>
</table>

<p>Plate flexural rigidity:</p>

<p class="math">$$D = \\frac{E \\cdot t^3}{12(1-\\nu^2)} = \\frac{${(Ec*1000).toLocaleString()} \\cdot ${tz.toFixed(2)}^3}{12(1-${nu}^2)} = ${D_plate.toFixed(1)} \\ \\text{kN}\\cdot\\text{m}$$</p>
      `
    },
    {
      title: "3. Winkler subgrade",
      html: `
<p>The modulus of subgrade reaction <span class="math">$k_s$</span> is estimated
via the Bowles correlation from the allowable pressure:</p>

<p class="math">$$k_s = k_{factor} \\cdot q_{adm} \\cdot g = ${ksFactor} \\cdot ${qAdm} \\cdot 9.807 = ${ks.toFixed(0)} \\ \\text{kN/m}^3$$</p>

<p><b>Biot number</b> — relative plate/soil stiffness:</p>

<p class="math">$$k_r = \\frac{D}{k_s \\cdot L^4} = \\frac{${D_plate.toFixed(0)}}{${ks.toFixed(0)} \\cdot ${Lz.toFixed(2)}^4} = ${kr.toFixed(3)}$$</p>

<p>Since <span class="math">$k_r = ${kr.toFixed(2)}$</span> ⇒ plate is
<b>${rigid}</b> ${kr > 1 ? "— FEM should converge to the Meyerhof rigid method" : "— FEM will concentrate pressure under the column"}.</p>
      `
    },
    {
      title: "4. Bilinear Q4 shape functions",
      html: `
<p>Natural coordinates <span class="math">$(\\xi, \\eta) \\in [-1, +1]$</span>:</p>
<p class="math">$$N_1(\\xi,\\eta) = \\frac{(1-\\xi)(1-\\eta)}{4} \\qquad N_2(\\xi,\\eta) = \\frac{(1+\\xi)(1-\\eta)}{4}$$</p>
<p class="math">$$N_3(\\xi,\\eta) = \\frac{(1+\\xi)(1+\\eta)}{4} \\qquad N_4(\\xi,\\eta) = \\frac{(1-\\xi)(1+\\eta)}{4}$$</p>

<p>The three unknowns <span class="math">$w, \\theta_x, \\theta_y$</span>
are interpolated with the <b>same</b> <span class="math">$N_i$</span>:</p>
<p class="math">$$w = \\sum_{i=1}^{4} N_i w_i \\quad \\theta_x = \\sum_{i=1}^{4} N_i \\theta_{xi} \\quad \\theta_y = \\sum_{i=1}^{4} N_i \\theta_{yi}$$</p>
      `
    },
    {
      title: "5. Mindlin kinematics",
      html: `
<p><b>Curvatures</b> (1st derivatives of rotations, not of <span class="math">$w$</span>):</p>
<p class="math">$$\\kappa_x = -\\frac{\\partial \\theta_y}{\\partial x} \\qquad \\kappa_y = \\frac{\\partial \\theta_x}{\\partial y} \\qquad \\kappa_{xy} = \\frac{\\partial \\theta_x}{\\partial x} - \\frac{\\partial \\theta_y}{\\partial y}$$</p>

<p><b>Transverse shear strains</b> (exclusive to Mindlin — Kirchhoff sets them to zero):</p>
<p class="math">$$\\gamma_{xz} = \\frac{\\partial w}{\\partial x} - \\theta_y \\qquad \\gamma_{yz} = \\frac{\\partial w}{\\partial y} + \\theta_x$$</p>
      `
    },
    {
      title: "6. Constitutive matrices",
      html: `
<p><b>Bending</b> (same as Kirchhoff):</p>
<p class="math">$$\\mathbf{D}_b = \\frac{E t^3}{12(1-\\nu^2)}
\\begin{bmatrix} 1 & \\nu & 0 \\\\ \\nu & 1 & 0 \\\\ 0 & 0 & \\frac{1-\\nu}{2} \\end{bmatrix}$$</p>

<p><b>Shear</b> (new — shear correction factor <span class="math">$\\kappa_s = 5/6$</span>):</p>
<p class="math">$$\\mathbf{D}_s = \\kappa_s \\, G \\, t \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$$</p>
      `
    },
    {
      title: "7. Element stiffness matrix",
      html: `
<p><b>Integration scheme</b> — MITC4 (Mixed Interpolation of Tensorial Components, Dvorkin &amp; Bathe 1984):</p>
<ul>
<li><b>Bending</b>: full <b>2×2</b> Gauss quadrature (4 points, weight 1 each).</li>
<li><b>Shear</b>: <b>2×2 Gauss</b> with <b>MITC4 tied strains</b> sampled at edge midpoints A=(0,−1), B=(−1,0), C=(0,+1), D=(+1,0), then interpolated linearly. This eliminates <i>both</i> shear locking <i>and</i> hourglass zero-energy modes (unlike naive 1×1 reduced integration which introduces artificial spurious modes when point loads are applied).</li>
</ul>

<p class="math">$$\\mathbf{K}_e = \\int_{-1}^{1}\\!\\!\\int_{-1}^{1} \\!\\left[ \\mathbf{B}_b^T \\mathbf{D}_b \\mathbf{B}_b + \\mathbf{B}_s^T \\mathbf{D}_s \\mathbf{B}_s \\right] \\det(\\mathbf{J}) \\, d\\xi \\, d\\eta$$</p>

<p>Result: <b>12×12</b> matrix (4 nodes × 3 DOFs each).</p>
      `
    },
    {
      title: "8. Winkler foundation — springs in the matrix",
      html: `
<p>For each node <span class="math">$j$</span>, a spring is added to the
<b>diagonal of the w DOF</b> at position
<span class="math">$3(j-1)+1$</span>:</p>

<p class="math">$$K_{ii}^{global} \\gets K_{ii}^{global} + k_s \\cdot A_{trib,j}$$</p>

<p>The <span class="math">$\\theta_x$</span> (positions 2, 5, 8, 11, …) and
<span class="math">$\\theta_y$</span> (positions 3, 6, 9, 12, …) rows/columns
are <b>not touched</b>.</p>

<table class="data-tbl">
<tr><th>Node position</th><th>A<sub>trib</sub></th><th>Stiffness</th></tr>
<tr><td>Interior</td><td class="math">$a_1 b_1$</td><td class="math">$k_s \\cdot a_1 b_1$</td></tr>
<tr><td>Edge</td><td class="math">$a_1 b_1/2$</td><td class="math">$k_s \\cdot a_1 b_1/2$</td></tr>
<tr><td>Corner</td><td class="math">$a_1 b_1/4$</td><td class="math">$k_s \\cdot a_1 b_1/4$</td></tr>
</table>
      `
    },
    {
      title: "9. Global system and solution",
      html: `
<p>We assemble the global K by summing the elemental contributions and the
Winkler springs. With <span class="math">$n_j$</span> nodes and 3 DOFs/node,
the system size is <span class="math">$3 n_j \\times 3 n_j$</span>.</p>

<p>Load vector — only at the column (center) node:</p>
<p class="math">$$F_{w,col} = -P = -${P.toFixed(2)} \\ \\text{tonf} \\qquad F_{\\theta_x,col} = M_x = ${Mx.toFixed(2)} \\qquad F_{\\theta_y,col} = M_y = ${My.toFixed(2)}$$</p>

<p>Solve with <b>Cholesky</b> (K is symmetric positive-definite thanks to Winkler):</p>
<p class="math">$$\\mathbf{K} \\cdot \\mathbf{Z} = \\mathbf{F} \\quad \\Longrightarrow \\quad \\mathbf{Z} = \\mathbf{K}^{-1} \\mathbf{F}$$</p>
      `
    },
    {
      title: "10. Contact pressure and verification",
      html: `
<p>By the Winkler law <span class="math">$\\sigma = -k_s \\cdot w$</span>
(compression positive):</p>

<p class="math">$$\\sigma_{max}^{FEM} \\leq q_{adm} = ${qAdm.toFixed(1)} \\ \\text{tonf/m}^2 \\qquad \\text{(NEC-SE-GC)}$$</p>

<p><b>Comparison with rigid Meyerhof</b> (classical method):</p>

<p class="math">$$\\sigma_{max}^{rigid} = \\frac{P}{A} + \\frac{|M_x|}{W_x} + \\frac{|M_y|}{W_y}$$</p>

<p class="math">$$= \\frac{${P.toFixed(2)}}{${(Lz*Bz).toFixed(3)}} + \\frac{${Math.abs(Mx).toFixed(2)}}{${(Lz*Bz*Bz/6).toFixed(3)}} + \\frac{${Math.abs(My).toFixed(2)}}{${(Bz*Lz*Lz/6).toFixed(3)}} = ${((P/(Lz*Bz)) + Math.abs(Mx)/(Lz*Bz*Bz/6) + Math.abs(My)/(Bz*Lz*Lz/6)).toFixed(2)} \\ \\text{tonf/m}^2$$</p>

<p>With <span class="math">$k_r = ${kr.toFixed(2)}$</span> (${rigid}),
the FEM result should be ${kr > 1 ? "close to" : "larger (concentration) than"} the rigid value.</p>
      `
    },
    {
      title: "11. Plan view color map — contact pressure σ (tonf/m², combined)",
      html: (() => {
        const field = extractPressureField(p, states, "pressure");
        if (!field.length) {
          return `<p><i>No pressure data available. Run the analysis by adjusting any parameter to trigger a rebuild.</i></p>`;
        }
        return `
<p>2D plan view (top-down) of the contact pressure distribution at the plate-soil
interface under the <b>combined</b> load (P + M<sub>x</sub> + M<sub>y</sub>).
Colors follow the jet palette: <span style="color:#0000ff">blue</span>
(minimum compression) → <span style="color:#ff0000">red</span>
(maximum compression):</p>
<div style="text-align:center; margin: 10px 0;">
${buildColorMapSvg(field, Lz, Bz, 40, 40, "σ combined (tonf/m²)", "tonf/m²", 480, 340)}
</div>
<p><b>Interpretation</b>: with
<span class="math">$k_r = ${kr.toFixed(2)}$</span> (${rigid}), the plate
${kr > 1 ? "behaves rigidly — the plan distribution is nearly linear (Meyerhof)" : "is flexible — pressure concentrates under the column"}.</p>
        `;
      })()
    },
    {
      title: "11a. Load-case decomposition — σ and w by P only (axial)",
      html: (() => {
        const field = extractPressureField(p, states, "pressure_P");
        const wField = extractDeflectionField(p, states, "deform_P");
        if (!field.length) {
          return `<p><i>P-only pressure not computed. Adjust any parameter to rebuild.</i></p>`;
        }
        const wMin = wField.length ? Math.min(...wField.map(f => f.v)) : 0;
        return `
<p>Response when <b>only the axial load</b>
<span class="math">$P = ${P.toFixed(2)}$</span> tonf is applied at the
column node (<span class="math">$M_x = M_y = 0$</span>). The plate
stiffness and the Winkler springs distribute the effect from the centre
outward, producing the expected <b>concentric (radial) pressure
concentration</b> under the column:</p>
<ul>
<li>peak <span class="math">$\\sigma_{max}$</span> directly under the column;</li>
<li>gradual decay toward the footing edges;</li>
<li>decay rate controlled by the Biot number
<span class="math">$k_r = ${kr.toFixed(2)}$</span> — rigid plates spread the
pressure more uniformly; flexible plates concentrate more sharply.</li>
</ul>

<h4 style="color:#d4af37; margin-top:14px;">Contact pressure σ</h4>
<div style="text-align:center; margin: 10px 0;">
${buildColorMapSvg(field, Lz, Bz, 40, 40, "σ by P only (tonf/m²)", "tonf/m²", 480, 340)}
</div>
<div style="text-align:center; margin: 10px 0;">
${buildLateralSvg(field, Lz, "x", "σ(P) along X", "tonf/m²", 460, 200)}
</div>
<div style="text-align:center; margin: 10px 0;">
${buildLateralSvg(field, Bz, "y", "σ(P) along Y", "tonf/m²", 460, 200)}
</div>
<p>Theoretical mean (rigid): <span class="math">$\\sigma = P/A = ${(P/(Lz*Bz)).toFixed(2)}$</span> tonf/m².</p>

${wField.length ? `
<h4 style="color:#d4af37; margin-top:14px;">Vertical deflection w (mm, signed — negative = down)</h4>
<div style="text-align:center; margin: 10px 0;">
${buildColorMapSvg(wField, Lz, Bz, 40, 40, "w by P only (mm)", "mm", 480, 340)}
</div>
<div style="text-align:center; margin: 10px 0;">
${buildLateralSvg(wField, Lz, "x", "w(P) along X — mm, signed", "mm", 460, 200)}
</div>
<div style="text-align:center; margin: 10px 0;">
${buildLateralSvg(wField, Bz, "y", "w(P) along Y — mm, signed", "mm", 460, 200)}
</div>
<p>Minimum (most downward): <span class="math">$w_{min}^{P} = ${wMin.toFixed(3)}$</span> mm
at the column centre. With the linearity of Winkler soil,
<span class="math">$\\sigma = -k_s \\cdot w$</span>, so the pressure peak
coincides with the w-minimum.</p>` : ""}
        `;
      })()
    },
    {
      title: "11b. Load-case decomposition — σ and w by M_x only",
      html: (() => {
        const field = extractPressureField(p, states, "pressure_Mx", true);
        const wField = extractDeflectionField(p, states, "deform_Mx");
        if (!field.length) {
          return `<p><i>M<sub>x</sub>-only pressure not computed.</i></p>`;
        }
        return `
<p>Response when <b>only M<sub>x</sub></b> =
<span class="math">$${Mx.toFixed(2)}$</span> tonf·m is applied
(<span class="math">$P = M_y = 0$</span>). Anti-symmetric about the
<span class="math">$y = B/2$</span> line — net vertical force is zero:</p>

<h4 style="color:#d4af37; margin-top:14px;">Contact pressure σ</h4>
<div style="text-align:center; margin: 10px 0;">
${buildColorMapSvg(field, Lz, Bz, 40, 40, "σ by Mx only (tonf/m², signed)", "tonf/m²", 480, 340)}
</div>
<div style="text-align:center; margin: 10px 0;">
${buildLateralSvg(field, Bz, "y", "σ(Mx) along Y — anti-symmetric", "tonf/m²", 460, 200)}
</div>

${wField.length ? `
<h4 style="color:#d4af37; margin-top:14px;">Vertical deflection w (mm, signed)</h4>
<div style="text-align:center; margin: 10px 0;">
${buildColorMapSvg(wField, Lz, Bz, 40, 40, "w by Mx only (mm)", "mm", 480, 340)}
</div>
<div style="text-align:center; margin: 10px 0;">
${buildLateralSvg(wField, Bz, "y", "w(Mx) along Y — anti-symmetric", "mm", 460, 200)}
</div>` : ""}
        `;
      })()
    },
    {
      title: "11c. Load-case decomposition — σ and w by M_y only",
      html: (() => {
        const field = extractPressureField(p, states, "pressure_My", true);
        const wField = extractDeflectionField(p, states, "deform_My");
        if (!field.length) {
          return `<p><i>M<sub>y</sub>-only pressure not computed.</i></p>`;
        }
        return `
<p>Response when <b>only M<sub>y</sub></b> =
<span class="math">$${My.toFixed(2)}$</span> tonf·m is applied
(<span class="math">$P = M_x = 0$</span>). Anti-symmetric about the
<span class="math">$x = L/2$</span> line:</p>

<h4 style="color:#d4af37; margin-top:14px;">Contact pressure σ</h4>
<div style="text-align:center; margin: 10px 0;">
${buildColorMapSvg(field, Lz, Bz, 40, 40, "σ by My only (tonf/m², signed)", "tonf/m²", 480, 340)}
</div>
<div style="text-align:center; margin: 10px 0;">
${buildLateralSvg(field, Lz, "x", "σ(My) along X — anti-symmetric", "tonf/m²", 460, 200)}
</div>

${wField.length ? `
<h4 style="color:#d4af37; margin-top:14px;">Vertical deflection w (mm, signed)</h4>
<div style="text-align:center; margin: 10px 0;">
${buildColorMapSvg(wField, Lz, Bz, 40, 40, "w by My only (mm)", "mm", 480, 340)}
</div>
<div style="text-align:center; margin: 10px 0;">
${buildLateralSvg(wField, Lz, "x", "w(My) along X — anti-symmetric", "mm", 460, 200)}
</div>` : ""}

<p>By <b>linearity</b>, the combined map (section 11) equals the sum of the three
individual contributions: <span class="math">$\\sigma_{total} = \\sigma_P + \\sigma_{M_x} + \\sigma_{M_y}$</span>.</p>
        `;
      })()
    },
    {
      title: "12. Lateral elevations — X and Y cross-sections",
      html: (() => {
        const field = extractPressureField(p, states);
        if (!field.length) {
          return `<p><i>No cross-section data available.</i></p>`;
        }
        return `
<p>Cross-section of the contact pressure along the central line:</p>
<div style="text-align:center; margin: 10px 0;">
${buildLateralSvg(field, Lz, "x", "σ along X (through column)", "tonf/m²", 460, 200)}
</div>
<div style="text-align:center; margin: 10px 0;">
${buildLateralSvg(field, Bz, "y", "σ along Y (through column)", "tonf/m²", 460, 200)}
</div>
<p>Peak (dark blue fill) should coincide with the <b>column center</b>
(<span class="math">$x = L/2, y = B/2$</span>); the <b>edges</b> should
show the Meyerhof linear gradient if k<sub>r</sub> ≫ 1, or be close to zero
if the plate is flexible.</p>
        `;
      })()
    },
    {
      title: "13. Vertical deflection w (mm, signed)",
      html: (() => {
        const field = extractDeflectionField(p, states);
        if (!field.length) return `<p><i>No deflection data available.</i></p>`;
        const wMin = Math.min(...field.map(f => f.v));
        return `
<p>Plan view of the vertical deflection <span class="math">$w$</span>
in mm using the FEM sign convention (<b>negative = downward</b>, global Z
points upward). The Winkler law
<span class="math">$\\sigma = -k_s \\cdot w$</span> links this field directly
to the pressure map above — where w is most negative, the compression σ is
maximum (hence positive in the pressure plot).</p>
<div style="text-align:center; margin: 10px 0;">
${buildColorMapSvg(field, Lz, Bz, 40, 40, "w plan view (mm, signed)", "mm", 480, 340)}
</div>
<p>Minimum (most downward): <span class="math">$w_{min} = ${wMin.toFixed(3)}$</span> mm (at the column)</p>
<div style="text-align:center; margin: 10px 0;">
${buildLateralSvg(field, Lz, "x", "w along X (mm, signed)", "mm", 460, 200)}
</div>
<div style="text-align:center; margin: 10px 0;">
${buildLateralSvg(field, Bz, "y", "w along Y (mm, signed)", "mm", 460, 200)}
</div>
        `;
      })()
    }
  ];
}

// ═══════════════════════════════════════════════════════════════════
// REPORT: Thick Plate — Mindlin-Reissner (simply supported, uniform q)
// Matches the Calcpad "Rectangular Slab FEA - Thick" example exactly.
// ═══════════════════════════════════════════════════════════════════
function buildPlateThickReport(p: Record<string, number>, states: any): ReportSection[] {
  const a = p.a ?? 6;
  const b = p.b ?? 4;
  const t = p.t ?? 0.10;
  const q = p.q ?? 10;
  const E_MPa = p.E_MPa ?? 35000;
  const nu = p.nu ?? 0.15;
  const E = E_MPa * 1000; // kN/m²
  const G = E / (2 * (1 + nu));
  const kappa_s = 5 / 6;
  const D_b = E * Math.pow(t, 3) / (12 * (1 - nu * nu));
  // Navier analytical w_max ≈ α·q·b⁴/D, α ≈ 0.00772 for a/b=1.5, simply supported
  const alpha = 0.00772;
  const wKirchhoff = alpha * q * Math.pow(b, 4) / D_b * 1000; // mm

  return [
    {
      title: "1. Theory — Mindlin-Reissner thick plate",
      html: `
<p>The rectangular slab is modelled as a <b>Mindlin-Reissner plate</b>
(Shell Thick), simply supported along all four edges and subjected to a
uniform distributed load <span class="math">$q$</span>.</p>

<p>Mindlin theory admits transverse shear deformation and is valid for
<span class="math">$t/L \\geq 0.05$</span>. In this case:</p>

<p class="math">$$\\frac{t}{L_{min}} = \\frac{${t.toFixed(3)}}{${Math.min(a,b).toFixed(1)}} = ${(t/Math.min(a,b)).toFixed(4)}$$</p>

<p>Each node has <b>3 DOFs</b>: <span class="math">$w, \\theta_x, \\theta_y$</span>
(= 12 DOFs per element).</p>
      `
    },
    {
      title: "2. Input data",
      html: `
<table class="data-tbl">
<tr><th>Parameter</th><th>Symbol</th><th>Value</th><th>Unit</th></tr>
<tr><td>Length X</td><td class="math">$a$</td><td>${a.toFixed(1)}</td><td>m</td></tr>
<tr><td>Length Y</td><td class="math">$b$</td><td>${b.toFixed(1)}</td><td>m</td></tr>
<tr><td>Thickness</td><td class="math">$t$</td><td>${t.toFixed(3)}</td><td>m</td></tr>
<tr><td>Uniform load</td><td class="math">$q$</td><td>${q.toFixed(1)}</td><td>kN/m²</td></tr>
<tr><td>Elastic modulus</td><td class="math">$E$</td><td>${E_MPa.toLocaleString()}</td><td>MPa</td></tr>
<tr><td>Poisson</td><td class="math">$\\nu$</td><td>${nu.toFixed(2)}</td><td>—</td></tr>
<tr><td>Shear modulus</td><td class="math">$G$</td><td>${(G/1000).toFixed(0)}</td><td>MPa</td></tr>
<tr><td>Shear correction</td><td class="math">$\\kappa_s$</td><td>5/6</td><td>—</td></tr>
</table>

<p>Flexural rigidity:</p>
<p class="math">$$D = \\frac{E t^3}{12(1-\\nu^2)} = \\frac{${E.toLocaleString()} \\cdot ${t.toFixed(3)}^3}{12(1-${nu}^2)} = ${D_b.toFixed(1)} \\ \\text{kN}\\cdot\\text{m}$$</p>
      `
    },
    {
      title: "3. Bilinear Q4 shape functions",
      html: `
<p>Natural coordinates <span class="math">$(\\xi, \\eta) \\in [-1, +1]$</span>:</p>
<p class="math">$$N_i(\\xi,\\eta) = \\tfrac{1}{4}(1 + \\xi_i \\xi)(1 + \\eta_i \\eta), \\quad i=1,\\dots,4$$</p>

<p>The three unknowns <span class="math">$w, \\theta_x, \\theta_y$</span> at each
node are interpolated with the same <span class="math">$N_i$</span>.</p>
      `
    },
    {
      title: "4. Mindlin kinematics",
      html: `
<p><b>Curvatures</b> — first derivatives of rotations:</p>
<p class="math">$$\\kappa_x = -\\frac{\\partial \\theta_y}{\\partial x},\\quad \\kappa_y = \\frac{\\partial \\theta_x}{\\partial y},\\quad \\kappa_{xy} = \\frac{\\partial \\theta_x}{\\partial x} - \\frac{\\partial \\theta_y}{\\partial y}$$</p>

<p><b>Transverse shear strains</b>:</p>
<p class="math">$$\\gamma_{xz} = \\frac{\\partial w}{\\partial x} - \\theta_y,\\quad \\gamma_{yz} = \\frac{\\partial w}{\\partial y} + \\theta_x$$</p>
      `
    },
    {
      title: "5. Constitutive matrices",
      html: `
<p><b>Bending</b> (identical to Kirchhoff):</p>
<p class="math">$$\\mathbf{D}_b = \\frac{E t^3}{12(1-\\nu^2)} \\begin{bmatrix} 1 & \\nu & 0 \\\\ \\nu & 1 & 0 \\\\ 0 & 0 & \\frac{1-\\nu}{2} \\end{bmatrix}$$</p>

<p><b>Shear</b> — exclusive to Mindlin:</p>
<p class="math">$$\\mathbf{D}_s = \\kappa_s \\, G \\, t \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$$</p>
      `
    },
    {
      title: "6. Element stiffness matrix (selective integration)",
      html: `
<p><b>MITC4 integration scheme</b> (Mixed Interpolation of Tensorial Components,
Dvorkin &amp; Bathe 1984) — eliminates <i>both</i> shear locking (thin plates)
<i>and</i> hourglass zero-energy modes (avoids spurious oscillations under
nodal point loads that plague naive 1×1 reduced integration):</p>
<ul>
<li><b>Bending</b>: full <b>2×2 Gauss</b> (4 points, weight 1 each).</li>
<li><b>Shear</b>: <b>2×2 Gauss</b> with <b>MITC4-tied strains</b> — shear
strains are sampled at edge midpoints and interpolated bilinearly.</li>
</ul>

<p class="math">$$\\mathbf{K}_e = \\int_{-1}^{1}\\!\\!\\int_{-1}^{1} \\!\\left[\\mathbf{B}_b^T \\mathbf{D}_b \\mathbf{B}_b + \\tilde{\\mathbf{B}}_s^T \\mathbf{D}_s \\tilde{\\mathbf{B}}_s\\right]\\! \\det(\\mathbf{J}) \\,d\\xi\\,d\\eta$$</p>

<p>where <span class="math">$\\tilde{\\mathbf{B}}_s$</span> is the MITC4
tied shear operator computed from sampled values at
<span class="math">$(\\xi,\\eta) = (0,\\pm1)$</span> and
<span class="math">$(\\pm1,0)$</span>.</p>
      `
    },
    {
      title: "7. Element load vector",
      html: `
<p>For uniform pressure <span class="math">$q$</span>, only the <var>w</var>
DOFs receive force (rotations are not loaded):</p>

<p class="math">$$F_{e,w}^{(i)} = \\int\\!\\!\\int N_i \\cdot q \\, dA = \\frac{q \\cdot A_e}{4}$$</p>

<p>Each of the 4 element nodes gets equal share
<span class="math">$q \\cdot a_1 b_1 / 4$</span>.</p>
      `
    },
    {
      title: "8. Boundary conditions",
      html: `
<p>All four edges are <b>simply supported</b>: only the vertical displacement
<span class="math">$w$</span> is restrained at the edge nodes. The rotations
<span class="math">$\\theta_x, \\theta_y$</span> remain free — this is the true
physical "simply supported" condition in Mindlin theory.</p>

<p>We enforce <span class="math">$w = 0$</span> at edge nodes by adding a
penalty term <span class="math">$k_{pen} = 10^{20}$</span> to the diagonal of
the corresponding DOFs:</p>
<p class="math">$$K_{ii}^{global} \\gets K_{ii}^{global} + k_{pen} \\qquad \\forall i \\in \\text{edge } w\\text{-DOFs}$$</p>
      `
    },
    {
      title: "9. Solution and Kirchhoff comparison",
      html: `
<p>We solve the global system with Cholesky factorization:</p>
<p class="math">$$\\mathbf{K} \\cdot \\mathbf{Z} = \\mathbf{F} \\Longrightarrow \\mathbf{Z} = \\mathbf{K}^{-1} \\mathbf{F}$$</p>

<p><b>Kirchhoff analytical benchmark</b> (Navier series, simply supported
plate with uniform load, <span class="math">$a/b = ${(a/b).toFixed(2)}$</span>):</p>

<p class="math">$$w_{max}^{Kirchhoff} \\approx \\alpha \\cdot \\frac{q \\cdot b^4}{D} = ${alpha} \\cdot \\frac{${q} \\cdot ${b.toFixed(1)}^4}{${D_b.toFixed(1)}} = ${(wKirchhoff/1000).toFixed(6)} \\ \\text{m} = ${wKirchhoff.toFixed(2)} \\ \\text{mm}$$</p>

<p>Mindlin should give a <b>slightly larger</b> deflection than Kirchhoff
because it includes shear deformation energy. The difference grows with
<span class="math">$t/L$</span>.</p>
      `
    },
    {
      title: "10. Post-processing — bending moments",
      html: `
<p>After solving for displacements, the bending moments in each element are
recovered from the bending strain matrix:</p>

<p class="math">$$\\mathbf{M} = \\begin{bmatrix} M_x \\\\ M_y \\\\ M_{xy} \\end{bmatrix} = \\mathbf{D}_b \\cdot \\mathbf{B}_b(\\xi,\\eta) \\cdot \\mathbf{Z}_e$$</p>

<p>evaluated at the element center <span class="math">$\\xi=\\eta=0$</span>
(optimal point for bending in Q4 bilinear).</p>

<p>The transverse shear forces are similarly recovered:</p>
<p class="math">$$\\begin{bmatrix} Q_x \\\\ Q_y \\end{bmatrix} = \\mathbf{D}_s \\cdot \\mathbf{B}_s \\cdot \\mathbf{Z}_e$$</p>
      `
    },
    {
      title: "11. Plan view color map — deflection w (mm, signed)",
      html: (() => {
        const field = extractDeflectionField(p, states);
        if (!field.length) return `<p><i>No deflection data. Adjust any parameter to rebuild.</i></p>`;
        const wMin = Math.min(...field.map(f => f.v));
        return `
<p>2D plan view (top-down) of the vertical deflection
<span class="math">$w$</span> in mm using the FEM sign convention
(<b>negative = downward</b>). The minimum (most negative) value
<span class="math">$w_{min} = ${wMin.toFixed(3)}$</span> mm should occur
at the plate center for a simply supported plate under uniform pressure:</p>
<div style="text-align:center; margin: 10px 0;">
${buildColorMapSvg(field, a, b, 50, 30, "w plan view (mm, signed)", "mm", 520, 340)}
</div>
<p><b>Analytical benchmark</b> (Kirchhoff Navier):
<span class="math">$w_{max}^{downward} \\approx ${wKirchhoff.toFixed(3)}$</span> mm,
so FEM should give <span class="math">$w_{min}^{FEM} \\approx -${wKirchhoff.toFixed(3)}$</span> mm.
Mindlin typically gives slightly larger magnitude due to shear deformation.</p>
        `;
      })()
    },
    {
      title: "12. Lateral elevations — X and Y cross-sections (w signed)",
      html: (() => {
        const field = extractDeflectionField(p, states);
        if (!field.length) return `<p><i>No cross-section data.</i></p>`;
        return `
<p>Cross-section of the vertical deflection along the central axes.
With downward load, the curve should <b>dip below zero</b> (negative
values) at the center and return to 0 at the simply supported edges:</p>
<div style="text-align:center; margin: 10px 0;">
${buildLateralSvg(field, a, "x", "w along X (through y = b/2) — mm, signed", "mm", 500, 220)}
</div>
<div style="text-align:center; margin: 10px 0;">
${buildLateralSvg(field, b, "y", "w along Y (through x = a/2) — mm, signed", "mm", 500, 220)}
</div>
        `;
      })()
    }
  ];
}

// ═══════════════════════════════════════════════════════════════════
// Stub reports for other examples
// ═══════════════════════════════════════════════════════════════════
function buildPlateThinReport(_p: Record<string, number>, _s: any): ReportSection[] {
  return [{
    title: "Kirchhoff-Love thin plate",
    html: `<p>16 DOFs per element (w, θ<sub>x</sub>, θ<sub>y</sub>, ψ per node).
    <span class="math">$\\mathbf{K}_e = \\int\\!\\int \\mathbf{B}^T \\mathbf{D} \\mathbf{B} \\, dA$</span>
    with <span class="math">$\\mathbf{B}$</span> built from 2nd derivatives of
    Hermite shape functions. <i>Full report coming soon.</i></p>`
  }];
}
function buildMembraneReport(_p: Record<string, number>, _s: any): ReportSection[] {
  return [{
    title: "Plane stress membrane",
    html: `<p>8 DOFs per element (<span class="math">$u_i, v_i$</span> at each of 4 nodes).
    <span class="math">$\\mathbf{D}_m = \\frac{E}{1-\\nu^2}[\\dots]$</span>.
    <i>Full report coming soon.</i></p>`
  }];
}

// ═══════════════════════════════════════════════════════════════════
// UI — floating modal panel with KaTeX
// ═══════════════════════════════════════════════════════════════════
let panelEl: HTMLElement | null = null;
let katexLoaded = false;

async function ensureKaTeX(): Promise<void> {
  if (katexLoaded) return;
  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css";
  document.head.appendChild(css);
  await new Promise<void>((res, rej) => {
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js";
    s.onload = () => res();
    s.onerror = () => rej();
    document.head.appendChild(s);
  });
  await new Promise<void>((res, rej) => {
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js";
    s.onload = () => res();
    s.onerror = () => rej();
    document.head.appendChild(s);
  });
  katexLoaded = true;
}

/** Opens the panel with the current example's report. */
export async function openMathReport(
  exampleId: string,
  exampleName: string,
  params: Record<string, number>,
  states: any,
): Promise<void> {
  await ensureKaTeX();
  if (panelEl) panelEl.remove();

  const sections = buildMathReport(exampleId, params, states);

  panelEl = document.createElement("div");
  panelEl.id = "math-report-panel";
  panelEl.innerHTML = `
    <div class="mr-backdrop" id="mr-backdrop"></div>
    <div class="mr-panel">
      <div class="mr-header">
        <h2>📐 FEM Mathematical Report</h2>
        <div class="mr-subtitle">${exampleName}</div>
        <button class="mr-close" id="mr-close" title="Close">✕</button>
      </div>
      <div class="mr-nav">
        ${sections.map((s, i) => `<a href="#mr-sec-${i}" class="mr-nav-link">${i + 1}. ${s.title}</a>`).join("")}
      </div>
      <div class="mr-body" id="mr-body">
        ${sections.map((s, i) => `
          <section id="mr-sec-${i}" class="mr-section">
            <h3>${i + 1}. ${s.title}</h3>
            ${s.html}
          </section>
        `).join("")}
      </div>
    </div>
  `;

  const style = document.createElement("style");
  style.id = "math-report-styles";
  style.textContent = `
    #math-report-panel { font-family: "Segoe UI", Roboto, sans-serif; color: #e8e8e8; }
    .mr-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.55); backdrop-filter: blur(3px); z-index: 9998; }
    .mr-panel { position: fixed; top: 3%; right: 2%; bottom: 3%; width: 54%; max-width: 900px;
                background: #1e1f22; border: 1px solid #3a3b3f; border-radius: 8px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.6); z-index: 9999; display: flex; flex-direction: column;
                overflow: hidden; }
    .mr-header { padding: 12px 20px; background: linear-gradient(180deg,#2c2d31,#242529);
                 border-bottom: 1px solid #3a3b3f; position: relative; }
    .mr-header h2 { margin: 0; font-size: 16px; color: #d4af37; font-weight: 600; }
    .mr-subtitle { font-size: 12px; color: #9a9a9a; margin-top: 2px; }
    .mr-close { position: absolute; top: 10px; right: 12px; background: transparent; color: #bbb;
                border: 1px solid #555; border-radius: 4px; width: 28px; height: 28px; cursor: pointer; font-size: 14px; }
    .mr-close:hover { background: #d4af37; color: #111; border-color: #d4af37; }
    .mr-nav { padding: 10px 20px; background: #242529; border-bottom: 1px solid #3a3b3f;
              max-height: 90px; overflow-y: auto; display: flex; flex-wrap: wrap; gap: 6px 12px; }
    .mr-nav-link { font-size: 11px; color: #9dc3e6; text-decoration: none; padding: 2px 8px;
                   border: 1px solid #3a3b3f; border-radius: 3px; white-space: nowrap; }
    .mr-nav-link:hover { background: #d4af37; color: #111; border-color: #d4af37; }
    .mr-body { padding: 20px 28px; overflow-y: auto; flex: 1; line-height: 1.6; font-size: 13px; }
    .mr-section { margin-bottom: 28px; padding-bottom: 18px; border-bottom: 1px dashed #3a3b3f; }
    .mr-section:last-child { border-bottom: none; }
    .mr-section h3 { color: #d4af37; font-size: 14px; border-left: 3px solid #d4af37;
                     padding: 4px 10px; margin: 0 0 12px 0; background: rgba(212,175,55,0.08); }
    .mr-body p { margin: 8px 0; }
    .mr-body ul { margin: 6px 0; padding-left: 22px; }
    .mr-body li { margin-bottom: 4px; }
    .mr-body b, .mr-body strong { color: #ffd86b; }
    .mr-body code { background: #2c2d31; padding: 1px 5px; border-radius: 3px;
                    color: #9dc3e6; font-size: 12px; font-family: "Consolas", monospace; }
    .mr-body var { color: #ffd86b; font-style: italic; }
    .mr-body .math { text-align: center; margin: 10px 0; }
    .data-tbl { border-collapse: collapse; margin: 10px 0; font-size: 12px; width: 100%; }
    .data-tbl th, .data-tbl td { border: 1px solid #3a3b3f; padding: 5px 10px; text-align: left; }
    .data-tbl th { background: rgba(212,175,55,0.12); color: #d4af37; font-weight: 600; }
    .data-tbl td:first-child { color: #bbb; }
    @media (max-width: 1100px) { .mr-panel { width: 90%; right: 5%; } }
  `;
  document.head.appendChild(style);
  document.body.appendChild(panelEl);

  const close = () => {
    panelEl?.remove();
    style.remove();
    panelEl = null;
  };
  document.getElementById("mr-close")!.onclick = close;
  document.getElementById("mr-backdrop")!.onclick = close;
  window.addEventListener("keydown", function esc(e) {
    if (e.key === "Escape") { close(); window.removeEventListener("keydown", esc); }
  });

  const body = document.getElementById("mr-body")!;
  const renderMathInElement = (window as any).renderMathInElement;
  if (renderMathInElement) {
    renderMathInElement(body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
    });
  }
}
