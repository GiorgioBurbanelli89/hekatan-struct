/**
 * Shell Q4 element (4-node quadrilateral shell)
 * Membrane (plane stress) + Mindlin-Reissner plate bending + MITC4 shear tying
 * 24 DOFs total: [u, v, w, θx, θy, θz] per node
 *
 * Ported from awatif-fem/src/cpp/utils/shellQ4.cpp
 */
import { Node, ElementInputs } from "../data-model";

const GP = 1 / Math.sqrt(3); // 0.5773502691896258

/** Bilinear shape functions and derivatives at (xi, eta) */
function shapeFunctionsQ4(xi: number, eta: number) {
  const N = [
    0.25 * (1 - xi) * (1 - eta),
    0.25 * (1 + xi) * (1 - eta),
    0.25 * (1 + xi) * (1 + eta),
    0.25 * (1 - xi) * (1 + eta),
  ];
  const dNdxi = [
    -0.25 * (1 - eta),
     0.25 * (1 - eta),
     0.25 * (1 + eta),
    -0.25 * (1 + eta),
  ];
  const dNdeta = [
    -0.25 * (1 - xi),
    -0.25 * (1 + xi),
     0.25 * (1 + xi),
     0.25 * (1 - xi),
  ];
  return { N, dNdxi, dNdeta };
}

/** 2D Jacobian: maps natural (xi,eta) → physical (x,y) in local plane */
function jacobian2D(
  dNdxi: number[], dNdeta: number[],
  x: number[], y: number[]
): { dNdx: number[]; dNdy: number[]; detJ: number } {
  let J11 = 0, J12 = 0, J21 = 0, J22 = 0;
  for (let i = 0; i < 4; i++) {
    J11 += dNdxi[i] * x[i];
    J12 += dNdxi[i] * y[i];
    J21 += dNdeta[i] * x[i];
    J22 += dNdeta[i] * y[i];
  }
  const detJ = J11 * J22 - J12 * J21;
  const invDet = 1 / detJ;

  const dNdx: number[] = [];
  const dNdy: number[] = [];
  for (let i = 0; i < 4; i++) {
    dNdx.push(invDet * ( J22 * dNdxi[i] - J12 * dNdeta[i]));
    dNdy.push(invDet * (-J21 * dNdxi[i] + J11 * dNdeta[i]));
  }
  return { dNdx, dNdy, detJ };
}

/**
 * 8x8 membrane stiffness with incompatible modes (Wilson & Taylor 1973)
 * Adds 4 internal DOFs (2 modes × 2 directions) then statically condenses.
 * This eliminates parasitic shear locking and dramatically improves bending
 * accuracy with coarse meshes — matching ETABS Q4 behavior.
 */
function getMembraneK(x: number[], y: number[], E: number, nu: number, t: number): number[][] {
  // Total DOFs: 8 external (u,v per node) + 4 internal (incompatible modes)
  const nExt = 8, nInc = 4, nTotal = nExt + nInc;
  const K_full = zeros(nTotal, nTotal);
  const f = E * t / (1 - nu * nu);

  const gpCoords: [number, number][] = [[-GP, -GP], [GP, -GP], [GP, GP], [-GP, GP]];

  // Jacobian at center (for incompatible mode derivatives)
  const { dNdxi: dN0xi, dNdeta: dN0eta } = shapeFunctionsQ4(0, 0);
  const { detJ: detJ0 } = jacobian2D(dN0xi, dN0eta, x, y);

  for (const [xi, eta] of gpCoords) {
    const { dNdxi, dNdeta } = shapeFunctionsQ4(xi, eta);
    const { dNdx, dNdy, detJ } = jacobian2D(dNdxi, dNdeta, x, y);

    // Incompatible mode shape functions: M1 = 1-ξ², M2 = 1-η²
    // Derivatives in natural coords: dM1/dξ = -2ξ, dM2/dη = -2η
    // Transform to physical using Jacobian at CENTER (Wilson's correction)
    const { dNdx: dNdx0, dNdy: dNdy0 } = jacobian2D(dN0xi, dN0eta, x, y);
    // Use center Jacobian inverse for incompatible modes
    const J0_11 = dN0xi.reduce((s, d, i) => s + d * x[i], 0);
    const J0_12 = dN0xi.reduce((s, d, i) => s + d * y[i], 0);
    const J0_21 = dN0eta.reduce((s, d, i) => s + d * x[i], 0);
    const J0_22 = dN0eta.reduce((s, d, i) => s + d * y[i], 0);
    const invDet0 = 1 / detJ0;
    // dM1/dx, dM1/dy (mode 1: 1-ξ², derivative dM1/dξ = -2ξ, dM1/dη = 0)
    const dM1dx = invDet0 * J0_22 * (-2 * xi);
    const dM1dy = invDet0 * (-J0_21) * (-2 * xi);
    // dM2/dx, dM2/dy (mode 2: 1-η², derivative dM2/dξ = 0, dM2/dη = -2η)
    const dM2dx = invDet0 * (-J0_12) * (-2 * eta);
    const dM2dy = invDet0 * J0_11 * (-2 * eta);

    // Extended B matrix (3 × 12): [8 standard + 4 incompatible]
    // Standard part: B_std (3×8) as before
    // Incompatible part: B_inc (3×4) for [u_inc1, v_inc1, u_inc2, v_inc2]
    const B: number[][] = [[], [], []];
    for (let i = 0; i < 4; i++) {
      B[0].push(dNdx[i], 0);
      B[1].push(0, dNdy[i]);
      B[2].push(dNdy[i], dNdx[i]);
    }
    // Incompatible modes: mode1 adds to u,v; mode2 adds to u,v
    B[0].push(dM1dx, 0, dM2dx, 0);      // du_inc/dx
    B[1].push(0, dM1dy, 0, dM2dy);      // dv_inc/dy
    B[2].push(dM1dy, dM1dx, dM2dy, dM2dx); // du_inc/dy + dv_inc/dx

    // K_full += B^T * Dm * B * detJ
    for (let i = 0; i < nTotal; i++) {
      for (let j = 0; j < nTotal; j++) {
        let sum = 0;
        sum += f * (B[0][i] * B[0][j] + nu * B[0][i] * B[1][j] + nu * B[1][i] * B[0][j] + B[1][i] * B[1][j]);
        sum += f * (1 - nu) / 2 * B[2][i] * B[2][j];
        K_full[i][j] += sum * Math.abs(detJ);
      }
    }
  }

  // Static condensation: K_condensed = Kee - Kei * Kii^-1 * Kie
  // e = external (0..7), i = internal (8..11)
  const Kee = zeros(nExt, nExt);
  const Kei = zeros(nExt, nInc);
  const Kie = zeros(nInc, nExt);
  const Kii = zeros(nInc, nInc);

  for (let i = 0; i < nExt; i++)
    for (let j = 0; j < nExt; j++) Kee[i][j] = K_full[i][j];
  for (let i = 0; i < nExt; i++)
    for (let j = 0; j < nInc; j++) Kei[i][j] = K_full[i][nExt + j];
  for (let i = 0; i < nInc; i++)
    for (let j = 0; j < nExt; j++) Kie[i][j] = K_full[nExt + i][j];
  for (let i = 0; i < nInc; i++)
    for (let j = 0; j < nInc; j++) Kii[i][j] = K_full[nExt + i][nExt + j];

  // Invert Kii (4x4)
  const KiiInv = invert4x4(Kii);
  if (!KiiInv) return Kee; // fallback if singular

  // Km = Kee - Kei * KiiInv * Kie
  const Km = zeros(nExt, nExt);
  for (let i = 0; i < nExt; i++) {
    for (let j = 0; j < nExt; j++) {
      let correction = 0;
      for (let p = 0; p < nInc; p++)
        for (let q = 0; q < nInc; q++)
          correction += Kei[i][p] * KiiInv[p][q] * Kie[q][j];
      Km[i][j] = Kee[i][j] - correction;
    }
  }
  return Km;
}

/** Invert a small NxN matrix via Gauss-Jordan */
function invert4x4(M: number[][]): number[][] | null {
  const n = M.length;
  const aug: number[][] = M.map((row, i) => {
    const r = [...row];
    for (let j = 0; j < n; j++) r.push(i === j ? 1 : 0);
    return r;
  });
  for (let col = 0; col < n; col++) {
    let pivot = col;
    for (let row = col + 1; row < n; row++)
      if (Math.abs(aug[row][col]) > Math.abs(aug[pivot][col])) pivot = row;
    [aug[col], aug[pivot]] = [aug[pivot], aug[col]];
    if (Math.abs(aug[col][col]) < 1e-15) return null;
    const d = aug[col][col];
    for (let j = 0; j < 2 * n; j++) aug[col][j] /= d;
    for (let row = 0; row < n; row++) {
      if (row === col) continue;
      const fac = aug[row][col];
      for (let j = 0; j < 2 * n; j++) aug[row][j] -= fac * aug[col][j];
    }
  }
  return aug.map(row => row.slice(n));
}

/** 12x12 bending + shear stiffness (Mindlin-Reissner + MITC4) */
function getBendingK(x: number[], y: number[], E: number, nu: number, t: number): number[][] {
  const Kb = zeros(12, 12);
  const D0 = E * t * t * t / (12 * (1 - nu * nu));
  // Db = D0 * [[1,nu,0],[nu,1,0],[0,0,(1-nu)/2]]
  const kappa = 5 / 6; // shear correction factor
  const Gs = kappa * E / (2 * (1 + nu)) * t;
  // Ds = Gs * I2

  const gpCoords: [number, number][] = [[-GP, -GP], [GP, -GP], [GP, GP], [-GP, GP]];

  // MITC4: pre-compute shear B at tying points
  // A=(0,-1), C=(0,+1) for γxz; B=(-1,0), D=(+1,0) for γyz
  const tyingPts: { xi: number; eta: number }[] = [
    { xi: 0, eta: -1 }, // A
    { xi: 0, eta:  1 }, // C
    { xi: -1, eta: 0 }, // B
    { xi:  1, eta: 0 }, // D
  ];

  const BsTying: number[][][] = []; // [4][2][12]
  for (const tp of tyingPts) {
    const { N, dNdxi, dNdeta } = shapeFunctionsQ4(tp.xi, tp.eta);
    const { dNdx, dNdy, detJ } = jacobian2D(dNdxi, dNdeta, x, y);
    // Bs (2x12): DOFs per node = [w, θx, θy]
    // γxz = ∂w/∂x - θx → row 0
    // γyz = ∂w/∂y - θy → row 1
    const Bs = zeros(2, 12);
    for (let i = 0; i < 4; i++) {
      Bs[0][i * 3]     = dNdx[i];  // ∂w/∂x
      Bs[0][i * 3 + 1] = -N[i];    // -θx (note: sign convention)
      Bs[1][i * 3]     = dNdy[i];  // ∂w/∂y
      Bs[1][i * 3 + 2] = -N[i];    // -θy
    }
    BsTying.push(Bs);
  }

  for (const [xi, eta] of gpCoords) {
    const { N, dNdxi, dNdeta } = shapeFunctionsQ4(xi, eta);
    const { dNdx, dNdy, detJ } = jacobian2D(dNdxi, dNdeta, x, y);

    // Bending B matrix (3x12): [∂θx/∂x, ∂θy/∂y, ∂θx/∂y + ∂θy/∂x]
    const Bb = zeros(3, 12);
    for (let i = 0; i < 4; i++) {
      Bb[0][i * 3 + 1] = dNdx[i]; // ∂θx/∂x
      Bb[1][i * 3 + 2] = dNdy[i]; // ∂θy/∂y
      Bb[2][i * 3 + 1] = dNdy[i]; // ∂θx/∂y
      Bb[2][i * 3 + 2] = dNdx[i]; // ∂θy/∂x
    }

    // Kb_bending += Bb^T * Db * Bb * detJ
    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < 12; j++) {
        let sum = 0;
        sum += D0 * (Bb[0][i] * Bb[0][j] + nu * Bb[0][i] * Bb[1][j] + nu * Bb[1][i] * Bb[0][j] + Bb[1][i] * Bb[1][j]);
        sum += D0 * (1 - nu) / 2 * Bb[2][i] * Bb[2][j];
        Kb[i][j] += sum * Math.abs(detJ);
      }
    }

    // MITC4 shear interpolation at this Gauss point
    // γxz: interpolate between A(eta=-1) and C(eta=+1) using eta
    // γyz: interpolate between B(xi=-1) and D(xi=+1) using xi
    const BsMitc = zeros(2, 12);
    const wA = 0.5 * (1 - eta), wC = 0.5 * (1 + eta);
    const wB = 0.5 * (1 - xi),  wD = 0.5 * (1 + xi);
    for (let j = 0; j < 12; j++) {
      BsMitc[0][j] = wA * BsTying[0][0][j] + wC * BsTying[1][0][j]; // γxz from A,C
      BsMitc[1][j] = wB * BsTying[2][1][j] + wD * BsTying[3][1][j]; // γyz from B,D
    }

    // Kb_shear += Bs^T * Ds * Bs * detJ
    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < 12; j++) {
        Kb[i][j] += Gs * (BsMitc[0][i] * BsMitc[0][j] + BsMitc[1][i] * BsMitc[1][j]) * Math.abs(detJ);
      }
    }
  }

  return Kb;
}

/**
 * 24x24 local stiffness matrix for Shell Q4
 * DOF order per node: [u, v, w, θx, θy, θz]
 */
export function getLocalStiffnessMatrixShellQ4(
  nodes: Node[],
  elementInputs: ElementInputs,
  index: number
): number[][] {
  const E = elementInputs?.elasticities?.get(index) ?? 0;
  const nu = elementInputs?.poissonsRatios?.get(index) ?? 0.2;
  const t = elementInputs?.thicknesses?.get(index) ?? 0;

  if (E === 0 || t === 0) return zeros(24, 24);

  // Project nodes to local plane
  const { localX, localY, localZ, localCoords } = getLocalAxes(nodes);
  const x = localCoords.map(c => c[0]);
  const y = localCoords.map(c => c[1]);

  // Membrane (8x8) and Bending+Shear (12x12)
  const Km = getMembraneK(x, y, E, nu, t);
  const Kb = getBendingK(x, y, E, nu, t);

  // Drilling stiffness: small fraction of average membrane diagonal
  let diagSum = 0;
  for (let i = 0; i < 8; i++) diagSum += Math.abs(Km[i][i]);
  const drill = 1e-6 * diagSum / 8;

  // Assemble 24x24
  // DOF mapping per node i:
  //   u = 6i+0, v = 6i+1, w = 6i+2, θx = 6i+3, θy = 6i+4, θz = 6i+5
  // Membrane Km uses [u0,v0,u1,v1,u2,v2,u3,v3]
  // Bending Kb uses [w0,θx0,θy0,w1,θx1,θy1,w2,θx2,θy2,w3,θx3,θy3]
  const K = zeros(24, 24);

  // Membrane → K
  const memDof = [0, 1, 6, 7, 12, 13, 18, 19]; // u,v for each node
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      K[memDof[i]][memDof[j]] += Km[i][j];
    }
  }

  // Bending → K
  const benDof = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22]; // w,θx,θy for each node
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
      K[benDof[i]][benDof[j]] += Kb[i][j];
    }
  }

  // Drilling → K (θz DOFs)
  for (let i = 0; i < 4; i++) {
    K[6 * i + 5][6 * i + 5] += drill;
  }

  return K;
}

/**
 * 24x24 transformation matrix for Shell Q4
 * Rotates from local to global coordinates
 */
export function getTransformationMatrixShellQ4(nodes: Node[]): number[][] {
  const { localX, localY, localZ } = getLocalAxes(nodes);

  // 3x3 rotation matrix: rows are local axes in global coords
  const R = [
    [localX[0], localX[1], localX[2]],
    [localY[0], localY[1], localY[2]],
    [localZ[0], localZ[1], localZ[2]],
  ];

  // 24x24 block diagonal (8 blocks of 3x3)
  const T = zeros(24, 24);
  for (let n = 0; n < 4; n++) {
    for (let b = 0; b < 2; b++) { // translations + rotations
      const off = n * 6 + b * 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          T[off + i][off + j] = R[i][j];
        }
      }
    }
  }
  return T;
}

/** Compute local coordinate system from Q4 node positions */
function getLocalAxes(nodes: Node[]): {
  localX: number[]; localY: number[]; localZ: number[];
  localCoords: number[][];
} {
  // Vectors along element edges
  const v1 = [nodes[2][0] - nodes[0][0], nodes[2][1] - nodes[0][1], nodes[2][2] - nodes[0][2]]; // diagonal 0→2
  const v2 = [nodes[3][0] - nodes[1][0], nodes[3][1] - nodes[1][1], nodes[3][2] - nodes[1][2]]; // diagonal 1→3

  // Normal = v1 × v2
  const nrm = cross(v1, v2);
  const nLen = Math.sqrt(nrm[0] ** 2 + nrm[1] ** 2 + nrm[2] ** 2);
  const localZ = nrm.map(c => c / nLen);

  // localX along edge 0→1
  const e01 = [nodes[1][0] - nodes[0][0], nodes[1][1] - nodes[0][1], nodes[1][2] - nodes[0][2]];
  const e01Len = Math.sqrt(e01[0] ** 2 + e01[1] ** 2 + e01[2] ** 2);
  const localX = e01.map(c => c / e01Len);

  // localY = localZ × localX
  const localY = cross(localZ, localX);

  // Project nodes to local plane
  const cx = nodes.map(n => n[0]).reduce((a, b) => a + b) / 4;
  const cy = nodes.map(n => n[1]).reduce((a, b) => a + b) / 4;
  const cz = nodes.map(n => n[2]).reduce((a, b) => a + b) / 4;

  const localCoords = nodes.map(n => {
    const dx = n[0] - cx, dy = n[1] - cy, dz = n[2] - cz;
    return [
      dx * localX[0] + dy * localX[1] + dz * localX[2],
      dx * localY[0] + dy * localY[1] + dz * localY[2],
    ];
  });

  return { localX, localY, localZ, localCoords };
}

function cross(a: number[], b: number[]): number[] {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}

function zeros(rows: number, cols: number): number[][] {
  return Array.from({ length: rows }, () => Array(cols).fill(0));
}
