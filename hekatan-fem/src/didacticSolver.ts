/**
 * Didactic FEM Solver — Step-by-step computation with all intermediate results
 *
 * Unlike deform() which is a black box (input → output), this solver
 * returns EVERY intermediate step: shape functions, B matrices, Jacobians,
 * local K, transformation T, global K per element, assembled K, reduced system, etc.
 *
 * Based on: Dr. Aguiar (Ecuador), Wilson (2004), Paz & Leigh
 *
 * Usage:
 *   const steps = didacticSolve(nodes, elements, nodeInputs, elementInputs);
 *   // steps.elements[0].K_local → 12x12 matrix
 *   // steps.elements[0].T → transformation matrix
 *   // steps.elements[0].gaussPoints[0].B → B matrix at Gauss point 1
 *   // steps.K_assembled → full global K
 *   // steps.K_reduced → reduced K (after BCs)
 *   // steps.U → displacements
 *   // steps.R → reactions
 */

import { Node, Element, NodeInputs, ElementInputs } from "./data-model";
import { norm, subtract } from "mathjs";

// ═══════════════════════════════════════════════════════
// DATA TYPES for intermediate results
// ═══════════════════════════════════════════════════════

export interface GaussPointData {
  xi: number;
  eta: number;
  weight: number;
  N: number[];           // shape functions [N1, N2, ...] at this point
  dNdxi: number[][];     // dN/dξ, dN/dη (2×n or 1×n)
  J: number[][];          // Jacobian matrix
  detJ: number;           // determinant of J
  Jinv: number[][];       // inverse Jacobian
  dNdx: number[][];       // dN/dx, dN/dy (physical derivatives)
  B: number[][];           // strain-displacement matrix
  BtDB: number[][];        // B^T · D · B (contribution to K)
  BtDB_detJ_w: number[][]; // B^T · D · B · detJ · weight (weighted contribution)
}

export interface ElementStepData {
  index: number;
  type: "bar" | "beam-EB" | "beam-Timoshenko" | "shell-Q4";
  nodes: Node[];
  nodeIndices: number[];
  length?: number;         // for bar/beam

  // Material/section
  E: number;
  A?: number;
  Iz?: number;
  Iy?: number;
  G?: number;
  J?: number;
  t?: number;              // shell thickness
  nu?: number;

  // Constitutive matrix
  D: number[][];           // material/constitutive matrix

  // Gauss point evaluations
  gaussPoints: GaussPointData[];

  // Local stiffness (sum of all Gauss points)
  K_local: number[][];

  // Incompatible modes (for Q4)
  K_incomp?: {
    Kcc: number[][];       // standard-standard
    Kci: number[][];       // standard-incompatible coupling
    Kii: number[][];       // incompatible-incompatible
    Kii_inv: number[][];   // inverse of Kii
    K_condensed: number[][]; // Kcc - Kci · Kii^-1 · Kic
  };

  // Transformation
  T: number[][];           // transformation matrix (local → global)
  lambda: number[][];      // direction cosines (3×3)

  // Global element stiffness
  K_global: number[][];    // T^T · K_local · T
}

export interface SolverSteps {
  // Input summary
  nNodes: number;
  nElements: number;
  nDOF: number;

  // Per-element data
  elements: ElementStepData[];

  // Global assembly
  K_assembled: number[][];  // full global K (nDOF × nDOF)
  F_applied: number[];      // applied force vector

  // Boundary conditions
  freeDOFs: number[];       // indices of free DOFs
  fixedDOFs: number[];      // indices of fixed DOFs

  // Reduced system
  K_reduced: number[][];    // K after removing fixed DOFs
  F_reduced: number[];      // F after removing fixed DOFs

  // Solution
  U_reduced: number[];      // displacements (free DOFs only)
  U_full: number[];         // full displacement vector (with zeros at fixed)
  R_full: number[];         // reaction vector (K · U)

  // Per-node results
  nodeResults: { index: number; coords: number[]; disp: number[]; reaction: number[] }[];
}

// ═══════════════════════════════════════════════════════
// MAIN SOLVER
// ═══════════════════════════════════════════════════════

export function didacticSolve(
  nodes: Node[],
  elements: Element[],
  nodeInputs: NodeInputs,
  elementInputs: ElementInputs
): SolverSteps {
  const nNodes = nodes.length;
  const nDOF = nNodes * 6;

  // Step 1: Compute per-element data
  const elemData: ElementStepData[] = elements.map((el, i) => {
    if (el.length === 2) {
      return computeFrameElement(nodes, el, i, elementInputs);
    } else if (el.length === 4) {
      return computeShellQ4Element(nodes, el, i, elementInputs);
    }
    return null;
  }).filter(Boolean) as ElementStepData[];

  // Step 2: Assemble global K
  const K_assembled = Array.from({ length: nDOF }, () => Array(nDOF).fill(0));
  for (const ed of elemData) {
    const el = ed.nodeIndices;
    const nElNodes = el.length;
    for (let a = 0; a < nElNodes; a++) {
      for (let b = 0; b < nElNodes; b++) {
        for (let i = 0; i < 6; i++) {
          for (let j = 0; j < 6; j++) {
            K_assembled[el[a] * 6 + i][el[b] * 6 + j] += ed.K_global[a * 6 + i][b * 6 + j];
          }
        }
      }
    }
  }

  // Step 3: Force vector
  const F_applied = Array(nDOF).fill(0);
  if (nodeInputs.loads) {
    for (const [ni, load] of nodeInputs.loads) {
      for (let d = 0; d < 6; d++) F_applied[ni * 6 + d] = load[d];
    }
  }

  // Step 4: Boundary conditions
  const fixedDOFs: number[] = [];
  const freeDOFs: number[] = [];
  if (nodeInputs.supports) {
    for (const [ni, sup] of nodeInputs.supports) {
      for (let d = 0; d < 6; d++) {
        if (sup[d]) fixedDOFs.push(ni * 6 + d);
      }
    }
  }
  for (let i = 0; i < nDOF; i++) {
    if (!fixedDOFs.includes(i)) freeDOFs.push(i);
  }

  // Step 5: Reduce system
  const nf = freeDOFs.length;
  const K_reduced = Array.from({ length: nf }, (_, i) =>
    Array.from({ length: nf }, (_, j) => K_assembled[freeDOFs[i]][freeDOFs[j]])
  );
  const F_reduced = freeDOFs.map(i => F_applied[i]);

  // Step 6: Solve K_reduced · U_reduced = F_reduced (Gauss elimination)
  const U_reduced = solveLinearSystem(K_reduced, F_reduced);

  // Step 7: Expand to full vector
  const U_full = Array(nDOF).fill(0);
  for (let i = 0; i < nf; i++) U_full[freeDOFs[i]] = U_reduced[i];

  // Step 8: Reactions R = K · U
  const R_full = Array(nDOF).fill(0);
  for (let i = 0; i < nDOF; i++) {
    for (let j = 0; j < nDOF; j++) {
      R_full[i] += K_assembled[i][j] * U_full[j];
    }
  }

  // Node results
  const nodeResults = nodes.map((n, i) => ({
    index: i,
    coords: [...n],
    disp: U_full.slice(i * 6, i * 6 + 6),
    reaction: R_full.slice(i * 6, i * 6 + 6),
  }));

  return {
    nNodes, nElements: elements.length, nDOF,
    elements: elemData,
    K_assembled, F_applied,
    freeDOFs, fixedDOFs,
    K_reduced, F_reduced,
    U_reduced, U_full, R_full,
    nodeResults,
  };
}

// ═══════════════════════════════════════════════════════
// FRAME ELEMENT (Timoshenko beam, 12 DOF)
// ═══════════════════════════════════════════════════════

function computeFrameElement(
  nodes: Node[], el: number[], idx: number, ei: ElementInputs
): ElementStepData {
  const n0 = nodes[el[0]], n1 = nodes[el[1]];
  const L = norm(subtract(n1, n0)) as number;
  const E = ei.elasticities?.get(idx) ?? 0;
  const A = ei.areas?.get(idx) ?? 0;
  const Iz = ei.momentsOfInertiaZ?.get(idx) ?? 0;
  const Iy = ei.momentsOfInertiaY?.get(idx) ?? 0;
  const G = ei.shearModuli?.get(idx) ?? 0;
  const Jt = ei.torsionalConstants?.get(idx) ?? 0;
  const AsY = ei.shearAreasY?.get(idx) ?? 0;
  const AsZ = ei.shearAreasZ?.get(idx) ?? 0;

  // Timoshenko shear parameters
  const phiZ = (AsZ > 0 && G > 0) ? (12 * E * Iz) / (G * AsZ * L ** 2) : 0;
  const phiY = (AsY > 0 && G > 0) ? (12 * E * Iy) / (G * AsY * L ** 2) : 0;

  const EA = E * A / L;
  const GJ = G * Jt / L;

  // Timoshenko coefficients (Euler-Bernoulli when phi=0)
  const tz = (12 * E * Iz / L ** 3) / (1 + phiZ);
  const bz = (6 * E * Iz / L ** 2) / (1 + phiZ);
  const kz = (4 * E * Iz / L) * (1 + phiZ / 4) / (1 + phiZ);
  const az = (2 * E * Iz / L) * (1 - phiZ / 2) / (1 + phiZ);

  const ty = (12 * E * Iy / L ** 3) / (1 + phiY);
  const by = (6 * E * Iy / L ** 2) / (1 + phiY);
  const ky = (4 * E * Iy / L) * (1 + phiY / 4) / (1 + phiY);
  const ay = (2 * E * Iy / L) * (1 - phiY / 2) / (1 + phiY);

  const K_local: number[][] = [
    [ EA,  0,    0,    0,    0,    0,   -EA,  0,    0,    0,    0,    0  ],
    [ 0,   tz,   0,    0,    0,    bz,   0,  -tz,   0,    0,    0,    bz ],
    [ 0,   0,    ty,   0,   -by,   0,    0,   0,   -ty,   0,   -by,   0  ],
    [ 0,   0,    0,    GJ,   0,    0,    0,   0,    0,   -GJ,   0,    0  ],
    [ 0,   0,   -by,   0,    ky,   0,    0,   0,    by,   0,    ay,   0  ],
    [ 0,   bz,   0,    0,    0,    kz,   0,  -bz,   0,    0,    0,    az ],
    [-EA,  0,    0,    0,    0,    0,    EA,   0,    0,    0,    0,    0  ],
    [ 0,  -tz,   0,    0,    0,   -bz,   0,   tz,   0,    0,    0,   -bz],
    [ 0,   0,   -ty,   0,    by,   0,    0,   0,    ty,   0,    by,   0  ],
    [ 0,   0,    0,   -GJ,   0,    0,    0,   0,    0,    GJ,   0,    0  ],
    [ 0,   0,   -by,   0,    ay,   0,    0,   0,    by,   0,    ky,   0  ],
    [ 0,   bz,   0,    0,    0,    az,   0,  -bz,   0,    0,    0,    kz ],
  ];

  // Transformation matrix
  const vec = [n1[0] - n0[0], n1[1] - n0[1], n1[2] - n0[2]];
  const l = vec[0] / L, m = vec[1] / L, n = vec[2] / L;
  const D = Math.sqrt(l ** 2 + m ** 2);

  let lambda: number[][];
  if (Math.abs(n - 1) < 1e-8) {
    lambda = [[0, 0, 1], [0, 1, 0], [-1, 0, 0]];
  } else if (Math.abs(n + 1) < 1e-8) {
    lambda = [[0, 0, -1], [0, 1, 0], [1, 0, 0]];
  } else {
    lambda = [
      [l, m, n],
      [-m / D, l / D, 0],
      [(-l * n) / D, (-m * n) / D, D],
    ];
  }

  // Build 12x12 T from lambda (kronecker product with I4)
  const T: number[][] = Array.from({ length: 12 }, () => Array(12).fill(0));
  for (let block = 0; block < 4; block++) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        T[block * 3 + i][block * 3 + j] = lambda[i][j];
      }
    }
  }

  // K_global = T^T · K_local · T
  const TtK = matMul(matTranspose(T), K_local);
  const K_global = matMul(TtK, T);

  // Gauss points for beam (conceptual — the closed-form K is used directly)
  const gaussPoints: GaussPointData[] = [{
    xi: 0, eta: 0, weight: 2,
    N: [0.5, 0.5],
    dNdxi: [[-1 / L, 1 / L]],
    J: [[L / 2]],
    detJ: L / 2,
    Jinv: [[2 / L]],
    dNdx: [[-1 / L, 1 / L]],
    B: [[-1 / L, 1 / L]], // axial B matrix
    BtDB: [[EA, -EA], [-EA, EA]], // simplified axial contribution
    BtDB_detJ_w: [[EA, -EA], [-EA, EA]],
  }];

  return {
    index: idx,
    type: phiZ > 0 || phiY > 0 ? "beam-Timoshenko" : "beam-EB",
    nodes: [n0, n1],
    nodeIndices: [...el],
    length: L,
    E, A, Iz, Iy, G, J: Jt,
    D: [[E]], // simplified
    gaussPoints,
    K_local,
    T,
    lambda,
    K_global,
  };
}

// ═══════════════════════════════════════════════════════
// SHELL Q4 ELEMENT (Membrane + Plate + Drilling, 24 DOF)
// ═══════════════════════════════════════════════════════

function computeShellQ4Element(
  nodes: Node[], el: number[], idx: number, ei: ElementInputs
): ElementStepData {
  const elmNodes = el.map(i => nodes[i]);
  const E = ei.elasticities?.get(idx) ?? 0;
  const nu_val = ei.poissonsRatios?.get(idx) ?? 0.2;
  const G = ei.shearModuli?.get(idx) ?? E / (2 * (1 + nu_val));
  const t = ei.thicknesses?.get(idx) ?? 0.2;

  // Plane stress constitutive matrix D (3×3)
  const D_membrane: number[][] = [
    [E / (1 - nu_val ** 2), nu_val * E / (1 - nu_val ** 2), 0],
    [nu_val * E / (1 - nu_val ** 2), E / (1 - nu_val ** 2), 0],
    [0, 0, E / (2 * (1 + nu_val))],
  ];

  // Extract 2D coords in element plane (for now assume XZ plane, Z-up)
  // Project nodes to local 2D
  const coords2D = elmNodes.map(n => [n[0], n[2]]); // X, Z

  const gp = [-1 / Math.sqrt(3), 1 / Math.sqrt(3)];
  const wt = [1, 1];

  const gaussPoints: GaussPointData[] = [];
  let K_std = zeros2D(8, 8);
  let K_incomp_ci = zeros2D(8, 4);
  let K_incomp_ii = zeros2D(4, 4);

  for (let gi = 0; gi < 2; gi++) {
    for (let gj = 0; gj < 2; gj++) {
      const xi = gp[gi], eta = gp[gj];
      const w = wt[gi] * wt[gj];

      // Shape functions
      const N = [
        0.25 * (1 - xi) * (1 - eta),
        0.25 * (1 + xi) * (1 - eta),
        0.25 * (1 + xi) * (1 + eta),
        0.25 * (1 - xi) * (1 + eta),
      ];

      // Derivatives wrt xi, eta
      const dNdxi: number[][] = [
        [
          -0.25 * (1 - eta), 0.25 * (1 - eta),
          0.25 * (1 + eta), -0.25 * (1 + eta),
        ],
        [
          -0.25 * (1 - xi), -0.25 * (1 + xi),
          0.25 * (1 + xi), 0.25 * (1 - xi),
        ],
      ];

      // Jacobian J = dNdxi · coords
      const J_mat: number[][] = [
        [0, 0],
        [0, 0],
      ];
      for (let k = 0; k < 4; k++) {
        J_mat[0][0] += dNdxi[0][k] * coords2D[k][0];
        J_mat[0][1] += dNdxi[0][k] * coords2D[k][1];
        J_mat[1][0] += dNdxi[1][k] * coords2D[k][0];
        J_mat[1][1] += dNdxi[1][k] * coords2D[k][1];
      }

      const detJ = J_mat[0][0] * J_mat[1][1] - J_mat[0][1] * J_mat[1][0];
      const Jinv: number[][] = [
        [J_mat[1][1] / detJ, -J_mat[0][1] / detJ],
        [-J_mat[1][0] / detJ, J_mat[0][0] / detJ],
      ];

      // Physical derivatives dN/dx
      const dNdx: number[][] = [[0, 0, 0, 0], [0, 0, 0, 0]];
      for (let k = 0; k < 4; k++) {
        dNdx[0][k] = Jinv[0][0] * dNdxi[0][k] + Jinv[0][1] * dNdxi[1][k];
        dNdx[1][k] = Jinv[1][0] * dNdxi[0][k] + Jinv[1][1] * dNdxi[1][k];
      }

      // B matrix (3×8) for membrane
      const B: number[][] = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
      for (let k = 0; k < 4; k++) {
        B[0][2 * k] = dNdx[0][k];       // εx = du/dx
        B[1][2 * k + 1] = dNdx[1][k];   // εz = dw/dz
        B[2][2 * k] = dNdx[1][k];       // γxz = du/dz + dw/dx
        B[2][2 * k + 1] = dNdx[0][k];
      }

      // B^T · D · B
      const BtD = matMul(matTranspose(B), D_membrane);
      const BtDB = matMul(BtD, B);
      const BtDB_scaled = BtDB.map(row => row.map(v => v * t * detJ * w));

      // Accumulate K_std
      for (let a = 0; a < 8; a++)
        for (let b = 0; b < 8; b++)
          K_std[a][b] += BtDB_scaled[a][b];

      // Incompatible modes B_i (Wilson)
      const J0inv = Jinv; // simplified: use current Jinv (exact for rectangular)
      const dM5dx = [-2 * xi * J0inv[0][0], -2 * xi * J0inv[1][0]];
      const dM6dx = [-2 * eta * J0inv[0][1], -2 * eta * J0inv[1][1]];

      const Bi: number[][] = [
        [dM5dx[0], 0, dM6dx[0], 0],
        [0, dM5dx[1], 0, dM6dx[1]],
        [dM5dx[1], dM5dx[0], dM6dx[1], dM6dx[0]],
      ];

      const BtDi = matMul(matTranspose(B), matMul(D_membrane, Bi));
      const BitDBi = matMul(matTranspose(Bi), matMul(D_membrane, Bi));

      for (let a = 0; a < 8; a++)
        for (let b = 0; b < 4; b++)
          K_incomp_ci[a][b] += BtDi[a][b] * t * detJ * w;

      for (let a = 0; a < 4; a++)
        for (let b = 0; b < 4; b++)
          K_incomp_ii[a][b] += BitDBi[a][b] * t * detJ * w;

      gaussPoints.push({
        xi, eta, weight: w,
        N, dNdxi, J: J_mat, detJ, Jinv, dNdx,
        B, BtDB, BtDB_detJ_w: BtDB_scaled,
      });
    }
  }

  // Static condensation: K_cond = K_std - K_ci · K_ii^-1 · K_ci^T
  const Kii_inv = invertMatrix(K_incomp_ii);
  const correction = matMul(matMul(K_incomp_ci, Kii_inv), matTranspose(K_incomp_ci));
  const K_condensed = K_std.map((row, i) => row.map((v, j) => v - correction[i][j]));

  // For now, return membrane-only K (8×8) expanded to 24×24
  // TODO: add plate bending + drilling for full shell
  const K_local_24 = zeros2D(24, 24);
  // Membrane DOFs: u,w for each node → map to DOFs 0,2 of each node (u,w in XZ plane)
  const memMap = [0, 2, 6, 8, 12, 14, 18, 20]; // u1,w1, u2,w2, u3,w3, u4,w4
  for (let i = 0; i < 8; i++)
    for (let j = 0; j < 8; j++)
      K_local_24[memMap[i]][memMap[j]] = K_condensed[i][j];

  // Transformation (identity for XZ plane shell)
  const T_24 = Array.from({ length: 24 }, (_, i) =>
    Array.from({ length: 24 }, (_, j) => i === j ? 1 : 0)
  );

  return {
    index: idx,
    type: "shell-Q4",
    nodes: elmNodes,
    nodeIndices: [...el],
    E, t, nu: nu_val, G,
    D: D_membrane,
    gaussPoints,
    K_local: K_condensed, // 8×8 membrane condensed
    K_incomp: {
      Kcc: K_std,
      Kci: K_incomp_ci,
      Kii: K_incomp_ii,
      Kii_inv: Kii_inv,
      K_condensed,
    },
    T: T_24,
    lambda: [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
    K_global: K_local_24,
  };
}

// ═══════════════════════════════════════════════════════
// MATH UTILITIES
// ═══════════════════════════════════════════════════════

function zeros2D(m: number, n: number): number[][] {
  return Array.from({ length: m }, () => Array(n).fill(0));
}

function matMul(A: number[][], B: number[][]): number[][] {
  const m = A.length, n = B[0].length, p = B.length;
  const C = zeros2D(m, n);
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      for (let k = 0; k < p; k++)
        C[i][j] += A[i][k] * B[k][j];
  return C;
}

function matTranspose(A: number[][]): number[][] {
  const m = A.length, n = A[0].length;
  return Array.from({ length: n }, (_, j) => Array.from({ length: m }, (_, i) => A[i][j]));
}

function invertMatrix(M: number[][]): number[][] {
  const n = M.length;
  const aug = M.map((row, i) => {
    const r = [...row];
    for (let j = 0; j < n; j++) r.push(i === j ? 1 : 0);
    return r;
  });
  for (let col = 0; col < n; col++) {
    let pivot = col;
    for (let row = col + 1; row < n; row++)
      if (Math.abs(aug[row][col]) > Math.abs(aug[pivot][col])) pivot = row;
    [aug[col], aug[pivot]] = [aug[pivot], aug[col]];
    const d = aug[col][col];
    if (Math.abs(d) < 1e-15) return zeros2D(n, n);
    for (let j = 0; j < 2 * n; j++) aug[col][j] /= d;
    for (let row = 0; row < n; row++) {
      if (row === col) continue;
      const f = aug[row][col];
      for (let j = 0; j < 2 * n; j++) aug[row][j] -= f * aug[col][j];
    }
  }
  return aug.map(row => row.slice(n));
}

function solveLinearSystem(K: number[][], F: number[]): number[] {
  const n = K.length;
  // Augmented matrix [K | F]
  const aug = K.map((row, i) => [...row, F[i]]);
  // Gauss elimination with partial pivoting
  for (let col = 0; col < n; col++) {
    let pivot = col;
    for (let row = col + 1; row < n; row++)
      if (Math.abs(aug[row][col]) > Math.abs(aug[pivot][col])) pivot = row;
    [aug[col], aug[pivot]] = [aug[pivot], aug[col]];
    const d = aug[col][col];
    if (Math.abs(d) < 1e-15) continue;
    for (let j = col; j <= n; j++) aug[col][j] /= d;
    for (let row = 0; row < n; row++) {
      if (row === col) continue;
      const f = aug[row][col];
      for (let j = col; j <= n; j++) aug[row][j] -= f * aug[col][j];
    }
  }
  return aug.map(row => row[n]);
}
