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

/** 8x8 membrane stiffness (plane stress Q4, 2x2 Gauss) */
function getMembraneK(x: number[], y: number[], E: number, nu: number, t: number): number[][] {
  const Km = zeros(8, 8);
  const f = E * t / (1 - nu * nu);
  // Constitutive: Dm = f * [[1,nu,0],[nu,1,0],[0,0,(1-nu)/2]]

  const gpCoords: [number, number][] = [[-GP, -GP], [GP, -GP], [GP, GP], [-GP, GP]];

  for (const [xi, eta] of gpCoords) {
    const { dNdxi, dNdeta } = shapeFunctionsQ4(xi, eta);
    const { dNdx, dNdy, detJ } = jacobian2D(dNdxi, dNdeta, x, y);

    // B matrix (3x8): [du/dx, dv/dy, du/dy+dv/dx]
    const B: number[][] = [[], [], []];
    for (let i = 0; i < 4; i++) {
      B[0].push(dNdx[i], 0);
      B[1].push(0, dNdy[i]);
      B[2].push(dNdy[i], dNdx[i]);
    }

    // Km += B^T * Dm * B * detJ (weight=1 for 2x2 Gauss)
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        // Compute (B^T * Dm * B)[i][j]
        let sum = 0;
        // Dm[0][0]*B[0][i]*B[0][j] + Dm[0][1]*B[0][i]*B[1][j] + ...
        sum += f * (B[0][i] * B[0][j] + nu * B[0][i] * B[1][j] + nu * B[1][i] * B[0][j] + B[1][i] * B[1][j]);
        sum += f * (1 - nu) / 2 * B[2][i] * B[2][j];
        Km[i][j] += sum * Math.abs(detJ);
      }
    }
  }
  return Km;
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
