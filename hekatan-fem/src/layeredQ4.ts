/**
 * ============================================================================
 *  layeredQ4.ts — Solver Q4 Mindlin Shell con matriz ABBD (CLT)
 * ============================================================================
 *
 *  Implementa Q4 con 5 DOFs por nodo: [u, v, w, theta_x, theta_y]
 *  donde theta_x = -dw/dx, theta_y = -dw/dy (convencion Bathe MITC4).
 *
 *  Stiffness matrix:
 *    K = integral( B^T * [A B; B^T D] * B + Bs^T * As * Bs ) dA
 *  donde:
 *    Bm: 3x20, membrane B (strain-displacement)
 *    Bb: 3x20, bending B
 *    Bs: 2x20, shear B
 *    [A B; B^T D]: 6x6 ABBD matrix combinada (membrane+bending coupling)
 *
 *  Reference: Reddy "Mechanics of Laminated Composite Plates"
 *
 *  Limitaciones de esta v1:
 *    - Placa horizontal en plano XY (no shells curvos)
 *    - 2x2 Gauss para membrane, 1x1 para shear (selective reduced)
 *    - Sin drilling Rz (solo 5 DOFs por nodo)
 * ============================================================================
 */

import { computeABBD, type LayerDef, type ABBD, type StressMode } from "./layeredShell";

export interface LayeredQ4SolveInput {
  layers: LayerDef[];
  meshLx: number;
  meshLy: number;
  meshNx: number;
  meshNy: number;
  bcType?: "simply-supported" | "clamped";
  pressure?: number;     // force/area, +z = up (we apply -pressure for downward)
  bcs?: Array<{ node: number; dof: number; value: number }>;
  pointLoads?: Array<{ node: number; dof: number; value: number }>;
  /**
   * Modo constitutivo through-thickness:
   *   "plane-stress" (DEFAULT) — teoría placa clásica Mindlin/Kirchhoff
   *   "plane-strain" — shell 3D, replica SAP2000 Type=6 (~22% más rígido)
   * Default = "plane-stress" para mantener compat con plate-thin/thick.
   */
  stressMode?: StressMode;
}

export interface LayeredQ4Output {
  abbd: ABBD;
  nodes: Array<{ x: number; y: number }>;
  elements: Array<{ nodes: [number, number, number, number] }>;
  /** Per-node displacements [u, v, w, theta_x, theta_y] */
  displacements: Array<{ u: number; v: number; w: number; thetaX: number; thetaY: number }>;
  /** Per-element internal forces (resultantes) */
  elementResults: Array<{
    Nxx: number; Nyy: number; Nxy: number;     // membrane forces (kN/m)
    Mxx: number; Myy: number; Mxy: number;     // bending moments (kN·m/m)
    Qx: number; Qy: number;                     // transverse shears (kN/m)
  }>;
  maxW: number;
  maxMxx: number;
  maxMyy: number;
  centerW?: number;
}

// ──── Q4 shape function and Gauss helpers ─────────────────────────────

const gp2x2 = [
  [-1 / Math.sqrt(3), -1 / Math.sqrt(3)],
  [+1 / Math.sqrt(3), -1 / Math.sqrt(3)],
  [+1 / Math.sqrt(3), +1 / Math.sqrt(3)],
  [-1 / Math.sqrt(3), +1 / Math.sqrt(3)],
];

function shapeFunctionsQ4(xi: number, eta: number) {
  const N = [
    0.25 * (1 - xi) * (1 - eta),
    0.25 * (1 + xi) * (1 - eta),
    0.25 * (1 + xi) * (1 + eta),
    0.25 * (1 - xi) * (1 + eta),
  ];
  const dNdxi = [
    -0.25 * (1 - eta), 0.25 * (1 - eta), 0.25 * (1 + eta), -0.25 * (1 + eta),
  ];
  const dNdeta = [
    -0.25 * (1 - xi), -0.25 * (1 + xi), 0.25 * (1 + xi), 0.25 * (1 - xi),
  ];
  return { N, dNdxi, dNdeta };
}

function jacobian2D(x: number[], y: number[], dNdxi: number[], dNdeta: number[]) {
  let J00 = 0, J01 = 0, J10 = 0, J11 = 0;
  for (let i = 0; i < 4; i++) {
    J00 += dNdxi[i] * x[i];
    J01 += dNdxi[i] * y[i];
    J10 += dNdeta[i] * x[i];
    J11 += dNdeta[i] * y[i];
  }
  const detJ = J00 * J11 - J01 * J10;
  const invJ = [
    [J11 / detJ, -J01 / detJ],
    [-J10 / detJ, J00 / detJ],
  ];
  return { detJ, invJ };
}

// ──── Element stiffness matrix ─────────────────────────────────────────

/**
 * Compute 20x20 element stiffness matrix for Q4 Mindlin layered shell.
 * DOFs per node: [u, v, w, thetaX, thetaY]  (convention: thetaX = -dw/dx)
 */
function computeElementK(x: number[], y: number[], abbd: ABBD): number[][] {
  const A = abbd.A, B = abbd.B, D = abbd.D, As = abbd.As;
  const K: number[][] = Array(20).fill(0).map(() => Array(20).fill(0));

  // ── Membrane + Bending: 2x2 Gauss ──
  for (const [xi, eta] of gp2x2) {
    const { dNdxi, dNdeta } = shapeFunctionsQ4(xi, eta);
    const { detJ, invJ } = jacobian2D(x, y, dNdxi, dNdeta);

    // dN/dx, dN/dy
    const dNdx = new Array(4), dNdy = new Array(4);
    for (let i = 0; i < 4; i++) {
      dNdx[i] = invJ[0][0] * dNdxi[i] + invJ[0][1] * dNdeta[i];
      dNdy[i] = invJ[1][0] * dNdxi[i] + invJ[1][1] * dNdeta[i];
    }

    // Bm: 3x20 (membrane), DOFs: u,v at indices [0,1] within each 5-block
    // eps_xx = du/dx, eps_yy = dv/dy, gamma_xy = du/dy + dv/dx
    const Bm: number[][] = Array(3).fill(0).map(() => Array(20).fill(0));
    for (let i = 0; i < 4; i++) {
      const off = i * 5;
      Bm[0][off + 0] = dNdx[i];          // du/dx
      Bm[1][off + 1] = dNdy[i];          // dv/dy
      Bm[2][off + 0] = dNdy[i];          // du/dy
      Bm[2][off + 1] = dNdx[i];          // + dv/dx
    }

    // Bb: 3x20 (bending), DOFs: thetaX,thetaY at indices [3,4]
    // Convencion Bathe: thetaX=-dw/dx, thetaY=-dw/dy
    // kappa_xx = d²w/dx² = -d(thetaX)/dx
    // kappa_yy = d²w/dy² = -d(thetaY)/dy
    // 2*kappa_xy = -d(thetaX)/dy - d(thetaY)/dx
    const Bb: number[][] = Array(3).fill(0).map(() => Array(20).fill(0));
    for (let i = 0; i < 4; i++) {
      const off = i * 5;
      Bb[0][off + 3] = -dNdx[i];         // -d(thetaX)/dx
      Bb[1][off + 4] = -dNdy[i];         // -d(thetaY)/dy
      Bb[2][off + 3] = -dNdy[i];         // -d(thetaX)/dy
      Bb[2][off + 4] = -dNdx[i];         //  -d(thetaY)/dx
    }

    // K_int = (Bm^T * A * Bm) + (Bm^T * B * Bb) + (Bb^T * B^T * Bm) + (Bb^T * D * Bb)
    // All B matrices are 3x20, A,B,D are 3x3
    const ABBd = combineMatrix(A, B, D); // 6x6
    const Bcombined: number[][] = Array(6).fill(0).map(() => Array(20).fill(0));
    for (let j = 0; j < 20; j++) {
      for (let i = 0; i < 3; i++) Bcombined[i][j] = Bm[i][j];
      for (let i = 0; i < 3; i++) Bcombined[i + 3][j] = Bb[i][j];
    }

    // K += B^T * ABBD * B * detJ
    addBTKB(K, Bcombined, ABBd, Math.abs(detJ));
  }

  // ── Shear: 1x1 Gauss (reduced integration) ──
  // Use centroid for shear (xi=0, eta=0)
  {
    const { N, dNdxi, dNdeta } = shapeFunctionsQ4(0, 0);
    const { detJ, invJ } = jacobian2D(x, y, dNdxi, dNdeta);

    const dNdx = new Array(4), dNdy = new Array(4);
    for (let i = 0; i < 4; i++) {
      dNdx[i] = invJ[0][0] * dNdxi[i] + invJ[0][1] * dNdeta[i];
      dNdy[i] = invJ[1][0] * dNdxi[i] + invJ[1][1] * dNdeta[i];
    }

    // Bs: 2x20 (transverse shear), DOFs: w,thetaX,thetaY at [2,3,4]
    // gamma_xz = dw/dx + thetaX (since thetaX = -dw/dx in undeformed config; positive gamma means shear)
    // gamma_yz = dw/dy + thetaY
    const Bs: number[][] = Array(2).fill(0).map(() => Array(20).fill(0));
    for (let i = 0; i < 4; i++) {
      const off = i * 5;
      Bs[0][off + 2] = dNdx[i];          // dw/dx
      Bs[0][off + 3] = N[i];             // + thetaX (con signo positivo en convencion Bathe)
      Bs[1][off + 2] = dNdy[i];          // dw/dy
      Bs[1][off + 4] = N[i];             // + thetaY
    }

    // K_shear = Bs^T * As * Bs * detJ * 4 (scaled by 4 = 2x2 area for 1x1 reduced int)
    addBTKB(K, Bs, As, Math.abs(detJ) * 4);
  }

  return K;
}

function combineMatrix(A: number[][], B: number[][], D: number[][]): number[][] {
  const M: number[][] = Array(6).fill(0).map(() => Array(6).fill(0));
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      M[i][j] = A[i][j];
      M[i][j + 3] = B[i][j];
      M[i + 3][j] = B[j][i];   // transpose of B
      M[i + 3][j + 3] = D[i][j];
    }
  }
  return M;
}

function addBTKB(K: number[][], B: number[][], C: number[][], scale: number) {
  // K += B^T * C * B * scale
  const m = B.length;     // rows of B = 3 or 6 or 2
  const n = B[0].length;  // 20

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let val = 0;
      for (let k = 0; k < m; k++) {
        for (let l = 0; l < m; l++) {
          val += B[k][i] * C[k][l] * B[l][j];
        }
      }
      K[i][j] += val * scale;
    }
  }
}

// ──── Solver: K*u = F via Gauss elimination ───────────────────────────

function solveLinear(K: number[][], F: number[]): number[] {
  const n = F.length;
  const A: number[][] = K.map(row => [...row]);
  const b: number[] = [...F];

  // Forward elimination con pivoting
  for (let i = 0; i < n; i++) {
    // Pivot
    let maxRow = i;
    for (let k = i + 1; k < n; k++) {
      if (Math.abs(A[k][i]) > Math.abs(A[maxRow][i])) maxRow = k;
    }
    if (maxRow !== i) {
      [A[i], A[maxRow]] = [A[maxRow], A[i]];
      [b[i], b[maxRow]] = [b[maxRow], b[i]];
    }

    // Eliminate
    for (let k = i + 1; k < n; k++) {
      const factor = A[k][i] / A[i][i];
      for (let j = i; j < n; j++) A[k][j] -= factor * A[i][j];
      b[k] -= factor * b[i];
    }
  }

  // Back substitution
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let sum = b[i];
    for (let j = i + 1; j < n; j++) sum -= A[i][j] * x[j];
    x[i] = sum / A[i][i];
  }

  return x;
}

// ──── Main solver ─────────────────────────────────────────────────────

export function layeredQ4Solve(input: LayeredQ4SolveInput): LayeredQ4Output {
  const abbd = computeABBD(input.layers, input.stressMode ?? "plane-stress");

  const Lx = input.meshLx;
  const Ly = input.meshLy;
  const Nx = input.meshNx;
  const Ny = input.meshNy;
  const dx = Lx / Nx, dy = Ly / Ny;

  // Generate mesh
  const nodes: Array<{ x: number; y: number }> = [];
  for (let j = 0; j <= Ny; j++)
    for (let i = 0; i <= Nx; i++)
      nodes.push({ x: i * dx, y: j * dy });

  const elements: Array<{ nodes: [number, number, number, number] }> = [];
  for (let j = 0; j < Ny; j++)
    for (let i = 0; i < Nx; i++) {
      const n0 = j * (Nx + 1) + i;
      elements.push({ nodes: [n0, n0 + 1, n0 + 1 + (Nx + 1), n0 + (Nx + 1)] });
    }

  // Assemble global K
  const nDOF = nodes.length * 5;
  const Kg: number[][] = Array(nDOF).fill(0).map(() => Array(nDOF).fill(0));

  for (const e of elements) {
    const xCoords = e.nodes.map(n => nodes[n].x);
    const yCoords = e.nodes.map(n => nodes[n].y);
    const Ke = computeElementK(xCoords, yCoords, abbd);

    // Scatter to global
    for (let i = 0; i < 4; i++) {
      for (let id = 0; id < 5; id++) {
        const gi = e.nodes[i] * 5 + id;
        for (let j = 0; j < 4; j++) {
          for (let jd = 0; jd < 5; jd++) {
            const gj = e.nodes[j] * 5 + jd;
            Kg[gi][gj] += Ke[i * 5 + id][j * 5 + jd];
          }
        }
      }
    }
  }

  // Build force vector (uniform pressure)
  const F: number[] = new Array(nDOF).fill(0);
  if (input.pressure !== undefined && input.pressure !== 0) {
    for (const e of elements) {
      const xCoords = e.nodes.map(n => nodes[n].x);
      const yCoords = e.nodes.map(n => nodes[n].y);
      // Compute element area
      const x1 = xCoords[0], y1 = yCoords[0];
      const x2 = xCoords[1], y2 = yCoords[1];
      const x3 = xCoords[2], y3 = yCoords[2];
      const x4 = xCoords[3], y4 = yCoords[3];
      const area = 0.5 * Math.abs((x1 - x3) * (y2 - y4) - (x2 - x4) * (y1 - y3));
      // Lumped: 1/4 of total to each w-DOF
      const fNode = input.pressure * area / 4;
      for (const n of e.nodes) F[n * 5 + 2] += fNode;
    }
  }

  // Apply point loads
  if (input.pointLoads) {
    for (const pl of input.pointLoads) {
      F[pl.node * 5 + pl.dof] += pl.value;
    }
  }

  // Apply BCs (penalty method or direct elimination)
  // Generate BCs for "simply-supported" if requested
  const bcs: Array<{ node: number; dof: number; value: number }> = [];
  if (input.bcType === "simply-supported") {
    for (let j = 0; j <= Ny; j++) {
      for (let i = 0; i <= Nx; i++) {
        const isPerim = (i === 0 || i === Nx || j === 0 || j === Ny);
        if (!isPerim) continue;
        const idx = j * (Nx + 1) + i;
        // SS: w = 0 en perimetro
        bcs.push({ node: idx, dof: 2, value: 0 });
        // Una esquina: u, v fijos para evitar rigid body
        if (i === 0 && j === 0) {
          bcs.push({ node: idx, dof: 0, value: 0 });
          bcs.push({ node: idx, dof: 1, value: 0 });
        } else if (i === Nx && j === 0) {
          bcs.push({ node: idx, dof: 1, value: 0 });
        }
      }
    }
  } else if (input.bcType === "clamped") {
    for (let j = 0; j <= Ny; j++) {
      for (let i = 0; i <= Nx; i++) {
        const isPerim = (i === 0 || i === Nx || j === 0 || j === Ny);
        if (!isPerim) continue;
        const idx = j * (Nx + 1) + i;
        bcs.push({ node: idx, dof: 0, value: 0 });
        bcs.push({ node: idx, dof: 1, value: 0 });
        bcs.push({ node: idx, dof: 2, value: 0 });
        bcs.push({ node: idx, dof: 3, value: 0 });
        bcs.push({ node: idx, dof: 4, value: 0 });
      }
    }
  }
  if (input.bcs) bcs.push(...input.bcs);

  // Penalty method for BC enforcement
  const penalty = 1e15;
  for (const bc of bcs) {
    const gdof = bc.node * 5 + bc.dof;
    Kg[gdof][gdof] += penalty;
    F[gdof] += penalty * bc.value;
  }

  // Solve
  const u = solveLinear(Kg, F);

  // Extract per-node displacements
  const displacements = nodes.map((_, i) => ({
    u: u[i * 5 + 0],
    v: u[i * 5 + 1],
    w: u[i * 5 + 2],
    thetaX: u[i * 5 + 3],
    thetaY: u[i * 5 + 4],
  }));

  // Compute element results (forces) at centroid
  const elementResults = elements.map((e) => {
    const xCoords = e.nodes.map(n => nodes[n].x);
    const yCoords = e.nodes.map(n => nodes[n].y);
    const { dNdxi, dNdeta } = shapeFunctionsQ4(0, 0);
    const { invJ } = jacobian2D(xCoords, yCoords, dNdxi, dNdeta);
    const dNdx = new Array(4), dNdy = new Array(4);
    for (let i = 0; i < 4; i++) {
      dNdx[i] = invJ[0][0] * dNdxi[i] + invJ[0][1] * dNdeta[i];
      dNdy[i] = invJ[1][0] * dNdxi[i] + invJ[1][1] * dNdeta[i];
    }

    // Strains at centroid
    let epsXX = 0, epsYY = 0, gammaXY = 0;
    let kappaXX = 0, kappaYY = 0, kappaXY2 = 0;  // 2*kappa_xy
    for (let i = 0; i < 4; i++) {
      const d = displacements[e.nodes[i]];
      epsXX += dNdx[i] * d.u;
      epsYY += dNdy[i] * d.v;
      gammaXY += dNdy[i] * d.u + dNdx[i] * d.v;
      // Convencion Bathe: kappa_xx = -d(thetaX)/dx
      kappaXX += -dNdx[i] * d.thetaX;
      kappaYY += -dNdy[i] * d.thetaY;
      kappaXY2 += -dNdy[i] * d.thetaX - dNdx[i] * d.thetaY;
    }

    // Forces N, M = ABBD * [eps; kappa]
    const A = abbd.A, B = abbd.B, D = abbd.D;
    const Nxx = A[0][0]*epsXX + A[0][1]*epsYY + A[0][2]*gammaXY + B[0][0]*kappaXX + B[0][1]*kappaYY + B[0][2]*kappaXY2;
    const Nyy = A[1][0]*epsXX + A[1][1]*epsYY + A[1][2]*gammaXY + B[1][0]*kappaXX + B[1][1]*kappaYY + B[1][2]*kappaXY2;
    const Nxy = A[2][0]*epsXX + A[2][1]*epsYY + A[2][2]*gammaXY + B[2][0]*kappaXX + B[2][1]*kappaYY + B[2][2]*kappaXY2;
    const Mxx = B[0][0]*epsXX + B[0][1]*epsYY + B[0][2]*gammaXY + D[0][0]*kappaXX + D[0][1]*kappaYY + D[0][2]*kappaXY2;
    const Myy = B[1][0]*epsXX + B[1][1]*epsYY + B[1][2]*gammaXY + D[1][0]*kappaXX + D[1][1]*kappaYY + D[1][2]*kappaXY2;
    const Mxy = B[2][0]*epsXX + B[2][1]*epsYY + B[2][2]*gammaXY + D[2][0]*kappaXX + D[2][1]*kappaYY + D[2][2]*kappaXY2;

    // Shear strains
    let gammaXZ = 0, gammaYZ = 0;
    for (let i = 0; i < 4; i++) {
      const d = displacements[e.nodes[i]];
      gammaXZ += dNdx[i] * d.w + 0.25 * d.thetaX;
      gammaYZ += dNdy[i] * d.w + 0.25 * d.thetaY;
    }
    const Qx = abbd.As[0][0] * gammaXZ;
    const Qy = abbd.As[1][1] * gammaYZ;

    return { Nxx, Nyy, Nxy, Mxx, Myy, Mxy, Qx, Qy };
  });

  // Summary
  let maxW = 0, maxMxx = 0, maxMyy = 0;
  for (const d of displacements) if (Math.abs(d.w) > Math.abs(maxW)) maxW = d.w;
  for (const r of elementResults) {
    if (Math.abs(r.Mxx) > Math.abs(maxMxx)) maxMxx = r.Mxx;
    if (Math.abs(r.Myy) > Math.abs(maxMyy)) maxMyy = r.Myy;
  }

  return { abbd, nodes, elements, displacements, elementResults, maxW, maxMxx, maxMyy };
}
