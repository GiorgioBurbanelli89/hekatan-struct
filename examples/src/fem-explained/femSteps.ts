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
import { multiply, transpose, norm, subtract, flatten } from "mathjs";

export interface FemStep {
  title: string;
  description: string;
  formulas: string[];      // KaTeX strings
  values: string[];        // KaTeX strings with numeric values
  matrix?: number[][];     // Numeric matrix to display
  matrixLabel?: string;
  matrixSize?: string;     // e.g. "12x12"
  highlight?: number[];    // Indices to highlight in matrix
  extraHtml?: string;      // Additional HTML content
}

export interface BeamFemSteps {
  elementIndex: number;
  elementNodes: number[];
  nodeCoords: Node[];
  length: number;
  properties: { E: number; A: number; Iz: number; Iy: number; G: number; J: number };
  steps: FemStep[];
  kLocal: number[][];
  T: number[][];
  kGlobal: number[][];
}

/**
 * Compute all FEM steps for a beam element (2-node, 12 DOFs).
 * Returns structured data for rendering.
 */
export function computeBeamSteps(
  elementIndex: number,
  nodes: Node[],
  elements: Element[],
  elementInputs: ElementInputs,
  nodeInputs: NodeInputs,
  deformOutputs: DeformOutputs,
  analyzeOutputs: AnalyzeOutputs
): BeamFemSteps {
  const el = elements[elementIndex];
  const n0 = nodes[el[0]];
  const n1 = nodes[el[1]];
  const elmNodes: Node[] = [n0, n1];
  const L = norm(subtract(n0, n1)) as number;

  // Properties
  const E_val = elementInputs.elasticities?.get(elementIndex) ?? 0;
  const A_val = elementInputs.areas?.get(elementIndex) ?? 0;
  const Iz = elementInputs.momentsOfInertiaZ?.get(elementIndex) ?? 0;
  const Iy = elementInputs.momentsOfInertiaY?.get(elementIndex) ?? 0;
  const G_val = elementInputs.shearModuli?.get(elementIndex) ?? 0;
  const J_val = elementInputs.torsionalConstants?.get(elementIndex) ?? 0;

  // Derived
  const EA = (E_val * A_val) / L;
  const EIz = (E_val * Iz) / L ** 3;
  const EIy = (E_val * Iy) / L ** 3;
  const GJ = (G_val * J_val) / L;

  // Compute matrices using hekatan-fem functions
  const kLocal = getLocalStiffnessMatrix(elmNodes, elementInputs, elementIndex);
  const T = getTransformationMatrix(elmNodes);
  const kGlobal = multiply(transpose(T), multiply(kLocal, T)) as number[][];

  // Direction cosines
  const vec = subtract(n1, n0) as number[];
  const l = vec[0] / L;
  const m = vec[1] / L;
  const n = vec[2] / L;
  const D = Math.sqrt(l ** 2 + m ** 2);

  // Get displacements for this element
  const dofs0 = el[0] * 6;
  const dofs1 = el[1] * 6;
  const uGlobal: number[] = [];
  if (deformOutputs?.deformations) {
    const d0 = deformOutputs.deformations.get(el[0]) ?? [0, 0, 0, 0, 0, 0];
    const d1 = deformOutputs.deformations.get(el[1]) ?? [0, 0, 0, 0, 0, 0];
    uGlobal.push(...d0, ...d1);
  }

  // Local displacements and internal forces
  const uLocal = uGlobal.length === 12
    ? (multiply(T, uGlobal) as number[])
    : Array(12).fill(0);
  const fLocal = uGlobal.length === 12
    ? (multiply(kLocal, uLocal) as number[])
    : Array(12).fill(0);

  // Build steps
  const steps: FemStep[] = [];

  // --- STEP 1: Element Geometry ---
  steps.push({
    title: "Step 1: Element Geometry",
    description: "Euler-Bernoulli beam element with 2 nodes and 6 DOFs per node (u, v, w, theta_x, theta_y, theta_z).",
    formulas: [
      `\\text{Node } i = (${fmt(n0[0])},\\; ${fmt(n0[1])},\\; ${fmt(n0[2])})`,
      `\\text{Node } j = (${fmt(n1[0])},\\; ${fmt(n1[1])},\\; ${fmt(n1[2])})`,
      `L = \\sqrt{(x_j-x_i)^2 + (y_j-y_i)^2 + (z_j-z_i)^2}`,
    ],
    values: [
      `L = ${fmt(L)}`,
    ],
  });

  // --- STEP 2: Shape Functions ---
  steps.push({
    title: "Step 2: Shape Functions (Hermite Cubics)",
    description: "For bending, Euler-Bernoulli theory uses Hermite cubic polynomials. For axial and torsion, linear shape functions are used.",
    formulas: [
      `\\textbf{Axial (linear):}`,
      `N_1(\\xi) = 1 - \\xi, \\quad N_2(\\xi) = \\xi, \\quad \\xi = x/L`,
      `\\textbf{Bending (Hermite cubic):}`,
      `N_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3`,
      `N_2(\\xi) = L\\xi(1 - \\xi)^2`,
      `N_3(\\xi) = 3\\xi^2 - 2\\xi^3`,
      `N_4(\\xi) = L\\xi^2(\\xi - 1)`,
      `\\textbf{Torsion (linear):}`,
      `N_1(\\xi) = 1 - \\xi, \\quad N_2(\\xi) = \\xi`,
    ],
    values: [],
    extraHtml: shapeFunctionSVG(L),
  });

  // --- STEP 3: Strain-Displacement (B matrix concept) ---
  steps.push({
    title: "Step 3: Strain-Displacement Relations (B Matrix)",
    description: "The B matrix relates nodal displacements to strains. For each DOF type:",
    formulas: [
      `\\textbf{Axial strain:} \\quad \\varepsilon = \\frac{du}{dx} = \\frac{1}{L}[-1 \\quad 1]\\{u_i, u_j\\}`,
      `\\textbf{Bending curvature:} \\quad \\kappa = \\frac{d^2v}{dx^2} = B_b \\cdot \\{v_i, \\theta_i, v_j, \\theta_j\\}`,
      `B_b = \\frac{1}{L^3}\\begin{bmatrix} -6+12\\xi & L(-4+6\\xi) & 6-12\\xi & L(-2+6\\xi) \\end{bmatrix}`,
      `\\textbf{Torsional twist:} \\quad \\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L}[-1 \\quad 1]\\{\\theta_{xi}, \\theta_{xj}\\}`,
    ],
    values: [],
  });

  // --- STEP 4: Constitutive Relations (D matrix) ---
  steps.push({
    title: "Step 4: Constitutive Relations (Material)",
    description: "Material stiffness for each deformation mode:",
    formulas: [
      `\\textbf{Axial:} \\quad \\sigma = E \\cdot \\varepsilon \\quad \\Rightarrow \\quad D_{axial} = E \\cdot A`,
      `\\textbf{Bending Z:} \\quad M_z = E I_z \\cdot \\kappa_z \\quad \\Rightarrow \\quad D_{bz} = E \\cdot I_z`,
      `\\textbf{Bending Y:} \\quad M_y = E I_y \\cdot \\kappa_y \\quad \\Rightarrow \\quad D_{by} = E \\cdot I_y`,
      `\\textbf{Torsion:} \\quad T = G J \\cdot \\phi' \\quad \\Rightarrow \\quad D_{torsion} = G \\cdot J`,
    ],
    values: [
      `E = ${fmt(E_val)}, \\quad A = ${fmt(A_val)}, \\quad EA = ${fmt(E_val * A_val)}`,
      `I_z = ${fmt(Iz)}, \\quad I_y = ${fmt(Iy)}`,
      `G = ${fmt(G_val)}, \\quad J = ${fmt(J_val)}`,
    ],
  });

  // --- STEP 5: Local Stiffness K = integral B^T D B dx ---
  steps.push({
    title: "Step 5: Local Stiffness Matrix K_local (12x12)",
    description: "Obtained by integrating K = integral(B^T D B dx, 0, L) for each DOF combination.",
    formulas: [
      `K_{local} = \\int_0^L B^T D \\, B \\, dx`,
      `\\text{DOFs: } [u_i, v_i, w_i, \\theta_{xi}, \\theta_{yi}, \\theta_{zi}, u_j, v_j, w_j, \\theta_{xj}, \\theta_{yj}, \\theta_{zj}]`,
      `\\text{Key terms:}`,
      `K[0,0] = \\frac{EA}{L} = ${fmt(EA)}`,
      `K[1,1] = \\frac{12EI_z}{L^3} = ${fmt(12 * EIz)}`,
      `K[2,2] = \\frac{12EI_y}{L^3} = ${fmt(12 * EIy)}`,
      `K[3,3] = \\frac{GJ}{L} = ${fmt(GJ)}`,
      `K[4,4] = \\frac{4EI_y}{L} = ${fmt(4 * EIy * L ** 2)}`,
      `K[5,5] = \\frac{4EI_z}{L} = ${fmt(4 * EIz * L ** 2)}`,
    ],
    values: [],
    matrix: kLocal,
    matrixLabel: "K_local",
    matrixSize: "12x12",
  });

  // --- STEP 6: Transformation Matrix T ---
  let lambdaFormula: string;
  if (Math.abs(n) > 0.999) {
    lambdaFormula = n > 0
      ? `\\lambda = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix} \\quad \\text{(vertical, n=1)}`
      : `\\lambda = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix} \\quad \\text{(vertical, n=-1)}`;
  } else {
    lambdaFormula = `\\lambda = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}`;
  }

  steps.push({
    title: "Step 6: Coordinate Transformation Matrix T (12x12)",
    description: "Transforms from local to global coordinates using direction cosines.",
    formulas: [
      `\\text{Direction cosines: } l = ${fmt(l)}, \\; m = ${fmt(m)}, \\; n = ${fmt(n)}`,
      `D = \\sqrt{l^2 + m^2} = ${fmt(D)}`,
      lambdaFormula,
      `T = I_4 \\otimes \\lambda \\quad \\text{(Kronecker product, 12x12)}`,
    ],
    values: [],
    matrix: T as number[][],
    matrixLabel: "T",
    matrixSize: "12x12",
  });

  // --- STEP 7: Global Stiffness K_global = T^T K T ---
  steps.push({
    title: "Step 7: Global Stiffness K_global = T^T K_local T",
    description: "The global stiffness matrix in the global coordinate system.",
    formulas: [
      `K_{global} = T^T \\cdot K_{local} \\cdot T`,
    ],
    values: [],
    matrix: kGlobal as number[][],
    matrixLabel: "K_global",
    matrixSize: "12x12",
  });

  // --- STEP 8: Assembly ---
  const globalDofs0 = Array.from({ length: 6 }, (_, i) => dofs0 + i);
  const globalDofs1 = Array.from({ length: 6 }, (_, i) => dofs1 + i);
  steps.push({
    title: "Step 8: Assembly into Global System",
    description: `Element ${elementIndex} connects node ${el[0]} (DOFs ${dofs0}-${dofs0 + 5}) to node ${el[1]} (DOFs ${dofs1}-${dofs1 + 5}).`,
    formulas: [
      `\\text{Global DOFs: } [${globalDofs0.join(", ")}, ${globalDofs1.join(", ")}]`,
      `K_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= K_{global}[i, j]`,
      `\\text{Total DOFs in model: } ${nodes.length * 6}`,
      `\\text{Free DOFs (after BCs): removed fixed supports}`,
    ],
    values: [],
    extraHtml: assemblyDiagramHTML(el, nodes.length, elementIndex, elements.length),
  });

  // --- STEP 9: Solution u = K^-1 F ---
  steps.push({
    title: "Step 9: Solution u = K^{-1} F",
    description: "After applying boundary conditions, solve the reduced system.",
    formulas: [
      `K_{free} \\cdot u_{free} = F_{free}`,
      `\\text{LU decomposition: } K = L \\cdot U`,
      `u = U^{-1}(L^{-1} F)`,
    ],
    values: uGlobal.length === 12
      ? [
        `u_{node\\,${el[0]}} = [${uGlobal.slice(0, 6).map(v => fmt(v, 6)).join(", ")}]`,
        `u_{node\\,${el[1]}} = [${uGlobal.slice(6, 12).map(v => fmt(v, 6)).join(", ")}]`,
      ]
      : [`\\text{(no results available)}`],
  });

  // --- STEP 10: Internal Forces ---
  steps.push({
    title: "Step 10: Internal Forces f = K_local T u",
    description: "Transform global displacements to local, then multiply by local stiffness.",
    formulas: [
      `u_{local} = T \\cdot u_{global}`,
      `f_{local} = K_{local} \\cdot u_{local}`,
      `\\text{DOF order: } [N_i, V_{yi}, V_{zi}, T_i, M_{yi}, M_{zi}, N_j, V_{yj}, V_{zj}, T_j, M_{yj}, M_{zj}]`,
    ],
    values: fLocal.some(v => v !== 0)
      ? [
        `N_i = ${fmt(fLocal[0], 4)}, \\quad V_{yi} = ${fmt(fLocal[1], 4)}, \\quad V_{zi} = ${fmt(fLocal[2], 4)}`,
        `T_i = ${fmt(fLocal[3], 4)}, \\quad M_{yi} = ${fmt(fLocal[4], 4)}, \\quad M_{zi} = ${fmt(fLocal[5], 4)}`,
        `N_j = ${fmt(fLocal[6], 4)}, \\quad V_{yj} = ${fmt(fLocal[7], 4)}, \\quad V_{zj} = ${fmt(fLocal[8], 4)}`,
        `T_j = ${fmt(fLocal[9], 4)}, \\quad M_{yj} = ${fmt(fLocal[10], 4)}, \\quad M_{zj} = ${fmt(fLocal[11], 4)}`,
      ]
      : [`\\text{(no results available)}`],
  });

  return {
    elementIndex,
    elementNodes: el,
    nodeCoords: elmNodes,
    length: L,
    properties: { E: E_val, A: A_val, Iz, Iy, G: G_val, J: J_val },
    steps,
    kLocal,
    T: T as number[][],
    kGlobal: kGlobal as number[][],
  };
}

// --- Helper: format number ---
function fmt(v: number, decimals = 2): string {
  if (Math.abs(v) < 1e-10) return "0";
  if (Math.abs(v) > 1e6 || (Math.abs(v) < 0.01 && v !== 0)) return v.toExponential(decimals);
  return v.toFixed(decimals);
}

// --- Shape function SVG diagram ---
function shapeFunctionSVG(L: number): string {
  const w = 460, h = 140, pad = 30;
  const xScale = (w - 2 * pad) / 1;
  const yScale = 80;
  const N = 50;

  const curves: { name: string; color: string; fn: (xi: number) => number }[] = [
    { name: "N1", color: "#ff6b6b", fn: (xi) => 1 - 3 * xi ** 2 + 2 * xi ** 3 },
    { name: "N2/L", color: "#4ecdc4", fn: (xi) => xi * (1 - xi) ** 2 },
    { name: "N3", color: "#45b7d1", fn: (xi) => 3 * xi ** 2 - 2 * xi ** 3 },
    { name: "N4/L", color: "#f9ca24", fn: (xi) => xi ** 2 * (xi - 1) },
  ];

  let svg = `<svg viewBox="0 0 ${w} ${h}" style="width:100%;max-width:${w}px;background:#0d1117;border-radius:4px;margin:8px 0">`;
  // Axes
  svg += `<line x1="${pad}" y1="${h / 2}" x2="${w - pad}" y2="${h / 2}" stroke="#444" stroke-width="1"/>`;
  svg += `<line x1="${pad}" y1="${pad}" x2="${pad}" y2="${h - pad}" stroke="#444" stroke-width="1"/>`;
  svg += `<text x="${w / 2}" y="${h - 5}" fill="#888" font-size="11" text-anchor="middle">xi (0 to 1)</text>`;

  for (const curve of curves) {
    let path = "";
    for (let i = 0; i <= N; i++) {
      const xi = i / N;
      const x = pad + xi * xScale;
      const y = h / 2 - curve.fn(xi) * yScale;
      path += (i === 0 ? "M" : "L") + `${x.toFixed(1)},${y.toFixed(1)}`;
    }
    svg += `<path d="${path}" fill="none" stroke="${curve.color}" stroke-width="2"/>`;
    // Label
    const labelXi = 0.85;
    const labelX = pad + labelXi * xScale + 5;
    const labelY = h / 2 - curve.fn(labelXi) * yScale - 5;
    svg += `<text x="${labelX}" y="${labelY}" fill="${curve.color}" font-size="10" font-weight="bold">${curve.name}</text>`;
  }

  svg += "</svg>";
  return svg;
}

// --- Assembly diagram HTML ---
function assemblyDiagramHTML(
  element: number[],
  nNodes: number,
  elementIdx: number,
  nElements: number
): string {
  const totalDof = nNodes * 6;
  const size = Math.min(totalDof, 18); // Show max 18x18
  const cellSize = 22;

  const dofs0Start = element[0] * 6;
  const dofs1Start = element[1] * 6;
  const elementDofs = [
    ...Array.from({ length: 6 }, (_, i) => dofs0Start + i),
    ...Array.from({ length: 6 }, (_, i) => dofs1Start + i),
  ];

  let html = `<div style="margin:8px 0;font-size:11px;color:#888">
    <strong style="color:#e94560">Assembly map</strong> (element ${elementIdx} fills highlighted positions in K_total):
  </div>`;
  html += `<div style="overflow-x:auto"><table class="matrix-table" style="font-size:10px">`;

  // Header row
  html += "<tr><td></td>";
  for (let j = 0; j < size; j++) {
    const isElDof = elementDofs.includes(j);
    html += `<td style="text-align:center;font-size:9px;color:${isElDof ? "#00d4ff" : "#555"}">${j}</td>`;
  }
  html += "</tr>";

  for (let i = 0; i < size; i++) {
    html += "<tr>";
    const isElDofI = elementDofs.includes(i);
    html += `<td style="font-size:9px;color:${isElDofI ? "#00d4ff" : "#555"}">${i}</td>`;
    for (let j = 0; j < size; j++) {
      const isElDofJ = elementDofs.includes(j);
      const isBoth = isElDofI && isElDofJ;
      const bg = isBoth ? "#0f3460" : "transparent";
      const color = isBoth ? "#00d4ff" : "#333";
      const symbol = isBoth ? "+" : ".";
      html += `<td style="background:${bg};color:${color};text-align:center;width:${cellSize}px;height:${cellSize}px;padding:1px">${symbol}</td>`;
    }
    html += "</tr>";
  }

  html += "</table></div>";
  if (totalDof > size) {
    html += `<div style="font-size:10px;color:#666;margin-top:4px">(showing ${size}x${size} of ${totalDof}x${totalDof})</div>`;
  }
  return html;
}

// Q4 shell steps (placeholder for future implementation)
export function computeShellSteps(
  elementIndex: number,
  nodes: Node[],
  elements: Element[],
  elementInputs: ElementInputs,
  nodeInputs: NodeInputs,
  deformOutputs: DeformOutputs,
  analyzeOutputs: AnalyzeOutputs
): BeamFemSteps {
  // TODO: Implement Q4 shell step-by-step
  return null as any;
}
