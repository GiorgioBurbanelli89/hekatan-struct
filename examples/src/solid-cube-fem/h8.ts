/**
 * Solver H8 — elementos sólidos hexaédricos de 8 nodos en TypeScript puro.
 *
 * Implementación clásica de FEM 3D linear elastic:
 *   - 8 funciones de forma N_i(ξ,η,ζ) = (1/8)(1+ξ_i ξ)(1+η_i η)(1+ζ_i ζ)
 *   - 24 DOFs por elemento (8 nodos × 3 displacement DOFs)
 *   - Integración Gauss 2×2×2 (8 puntos)
 *   - Matriz constitutiva isótropa 6×6 (Lamé)
 *   - Ensamble sparse Map → matriz densa para solver pequeño
 *   - Solver: Gaussian elimination con pivoteo parcial (modelos < 2000 DOF)
 *
 * Útil para validación contra CalculiX, Code Aster, FEniCS, SAP2000 en el caso
 * canónico del cubo bajo carga uniaxial / cantilever / pedestal de concreto.
 *
 * Performance esperada: 4×4×4 cube (125 nodes, 375 DOF) ≈ 100ms en browser.
 *                      8×8×8 cube (729 nodes, 2187 DOF) ≈ 5-10 s.
 *
 * Para mallas grandes, se debería compilar a WASM (futuro: hekatan-fem/cpp/hexa8.cpp).
 */

export type Vec3 = [number, number, number];
export type Hex8 = [number, number, number, number, number, number, number, number];

/** Coordenadas naturales de los 8 nodos del cubo de referencia. */
const NODE_XI: Vec3[] = [
  [-1, -1, -1], [+1, -1, -1], [+1, +1, -1], [-1, +1, -1],
  [-1, -1, +1], [+1, -1, +1], [+1, +1, +1], [-1, +1, +1],
];

/** 8 puntos de Gauss 2×2×2 en (±1/√3) con weight 1. */
const G = 1 / Math.sqrt(3);
const GAUSS: Vec3[] = [
  [-G, -G, -G], [+G, -G, -G], [+G, +G, -G], [-G, +G, -G],
  [-G, -G, +G], [+G, -G, +G], [+G, +G, +G], [-G, +G, +G],
];

/**
 * Derivadas de las funciones de forma respecto a (ξ, η, ζ) en el punto natural.
 * Retorna matriz 3×8: dN[d][i] = ∂N_i/∂coord_d donde d=0:ξ, 1:η, 2:ζ.
 */
function shapeDerivativesNatural(xi: number, eta: number, zeta: number): number[][] {
  const dN = [
    new Array(8).fill(0) as number[],
    new Array(8).fill(0) as number[],
    new Array(8).fill(0) as number[],
  ];
  for (let i = 0; i < 8; i++) {
    const [xi_i, eta_i, zeta_i] = NODE_XI[i];
    dN[0][i] = (xi_i / 8) * (1 + eta_i * eta) * (1 + zeta_i * zeta);
    dN[1][i] = (eta_i / 8) * (1 + xi_i * xi) * (1 + zeta_i * zeta);
    dN[2][i] = (zeta_i / 8) * (1 + xi_i * xi) * (1 + eta_i * eta);
  }
  return dN;
}

/**
 * Calcula el Jacobiano J = sum_i dN_i × x_i (3×3).
 * nodeCoords[i] = [x_i, y_i, z_i] en orden de los 8 nodos del elemento.
 */
function jacobian(nodeCoords: Vec3[], dN: number[][]): number[][] {
  const J = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  for (let i = 0; i < 8; i++) {
    const [x, y, z] = nodeCoords[i];
    J[0][0] += dN[0][i] * x; J[0][1] += dN[0][i] * y; J[0][2] += dN[0][i] * z;
    J[1][0] += dN[1][i] * x; J[1][1] += dN[1][i] * y; J[1][2] += dN[1][i] * z;
    J[2][0] += dN[2][i] * x; J[2][1] += dN[2][i] * y; J[2][2] += dN[2][i] * z;
  }
  return J;
}

/** Determinante 3×3. */
function det3(M: number[][]): number {
  return (
    M[0][0] * (M[1][1] * M[2][2] - M[1][2] * M[2][1]) -
    M[0][1] * (M[1][0] * M[2][2] - M[1][2] * M[2][0]) +
    M[0][2] * (M[1][0] * M[2][1] - M[1][1] * M[2][0])
  );
}

/** Inversa 3×3. */
function inv3(M: number[][]): number[][] {
  const d = det3(M);
  return [
    [
      (M[1][1] * M[2][2] - M[1][2] * M[2][1]) / d,
      (M[0][2] * M[2][1] - M[0][1] * M[2][2]) / d,
      (M[0][1] * M[1][2] - M[0][2] * M[1][1]) / d,
    ],
    [
      (M[1][2] * M[2][0] - M[1][0] * M[2][2]) / d,
      (M[0][0] * M[2][2] - M[0][2] * M[2][0]) / d,
      (M[0][2] * M[1][0] - M[0][0] * M[1][2]) / d,
    ],
    [
      (M[1][0] * M[2][1] - M[1][1] * M[2][0]) / d,
      (M[0][1] * M[2][0] - M[0][0] * M[2][1]) / d,
      (M[0][0] * M[1][1] - M[0][1] * M[1][0]) / d,
    ],
  ];
}

/**
 * Calcula la matriz B 6×24 (strain-displacement) en el punto Gauss.
 * Strain order: [εxx, εyy, εzz, γxy, γyz, γxz]^T = B · u  donde u = [u₁x, u₁y, u₁z, u₂x, ...]^T
 */
function bMatrix(dNxyz: number[][]): number[][] {
  // dNxyz[d][i] = ∂N_i/∂x_d donde d=0:x, 1:y, 2:z
  const B: number[][] = [];
  for (let r = 0; r < 6; r++) B.push(new Array(24).fill(0));
  for (let i = 0; i < 8; i++) {
    const dNx = dNxyz[0][i], dNy = dNxyz[1][i], dNz = dNxyz[2][i];
    const c = i * 3;
    // εxx = du/dx
    B[0][c + 0] = dNx;
    // εyy = dv/dy
    B[1][c + 1] = dNy;
    // εzz = dw/dz
    B[2][c + 2] = dNz;
    // γxy = du/dy + dv/dx
    B[3][c + 0] = dNy; B[3][c + 1] = dNx;
    // γyz = dv/dz + dw/dy
    B[4][c + 1] = dNz; B[4][c + 2] = dNy;
    // γxz = du/dz + dw/dx
    B[5][c + 0] = dNz; B[5][c + 2] = dNx;
  }
  return B;
}

/** Matriz constitutiva isótropa elástica D 6×6 (Lamé λ, μ). */
function dMatrix(E: number, nu: number): number[][] {
  const lambda = (E * nu) / ((1 + nu) * (1 - 2 * nu));
  const mu = E / (2 * (1 + nu));
  const a = lambda + 2 * mu;
  return [
    [a, lambda, lambda, 0, 0, 0],
    [lambda, a, lambda, 0, 0, 0],
    [lambda, lambda, a, 0, 0, 0],
    [0, 0, 0, mu, 0, 0],
    [0, 0, 0, 0, mu, 0],
    [0, 0, 0, 0, 0, mu],
  ];
}

/**
 * Calcula la matriz de rigidez del elemento H8 24×24.
 * K_e = ∑_g B^T D B |J| w_g  (8 puntos Gauss, weight=1)
 */
export function hex8Stiffness(nodeCoords: Vec3[], E: number, nu: number): number[][] {
  const D = dMatrix(E, nu);
  const Ke: number[][] = [];
  for (let i = 0; i < 24; i++) Ke.push(new Array(24).fill(0));

  for (const [xi, eta, zeta] of GAUSS) {
    const dNnat = shapeDerivativesNatural(xi, eta, zeta);
    const J = jacobian(nodeCoords, dNnat);
    const detJ = det3(J);
    const Jinv = inv3(J);
    // dN/dx = J^-1 · dN/dξ
    const dNxyz = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
    for (let i = 0; i < 8; i++) {
      dNxyz[0][i] = Jinv[0][0] * dNnat[0][i] + Jinv[0][1] * dNnat[1][i] + Jinv[0][2] * dNnat[2][i];
      dNxyz[1][i] = Jinv[1][0] * dNnat[0][i] + Jinv[1][1] * dNnat[1][i] + Jinv[1][2] * dNnat[2][i];
      dNxyz[2][i] = Jinv[2][0] * dNnat[0][i] + Jinv[2][1] * dNnat[1][i] + Jinv[2][2] * dNnat[2][i];
    }
    const B = bMatrix(dNxyz);
    // K_e += B^T D B |J| · 1 (weight = 1 in 2-pt Gauss)
    // Compute D·B first (6×24)
    const DB: number[][] = [];
    for (let r = 0; r < 6; r++) {
      DB.push(new Array(24).fill(0));
      for (let c = 0; c < 24; c++) {
        let s = 0;
        for (let k = 0; k < 6; k++) s += D[r][k] * B[k][c];
        DB[r][c] = s;
      }
    }
    // K_e += B^T · DB · detJ
    for (let r = 0; r < 24; r++) {
      for (let c = 0; c < 24; c++) {
        let s = 0;
        for (let k = 0; k < 6; k++) s += B[k][r] * DB[k][c];
        Ke[r][c] += s * detJ;
      }
    }
  }
  return Ke;
}

/** Solver Gaussian elimination con pivoteo parcial. K es N×N, F es N. Retorna u. */
export function solveLinear(K: number[][], F: number[]): number[] {
  const n = F.length;
  // Augmented matrix
  const A: number[][] = [];
  for (let i = 0; i < n; i++) A.push([...K[i], F[i]]);

  // Forward elimination con pivoteo parcial
  for (let i = 0; i < n; i++) {
    // Pivot: encontrar fila con máximo |A[k][i]|
    let maxRow = i;
    let maxVal = Math.abs(A[i][i]);
    for (let k = i + 1; k < n; k++) {
      if (Math.abs(A[k][i]) > maxVal) { maxRow = k; maxVal = Math.abs(A[k][i]); }
    }
    if (maxVal < 1e-12) throw new Error(`Matriz singular en pivoteo i=${i}`);
    if (maxRow !== i) {
      [A[i], A[maxRow]] = [A[maxRow], A[i]];
    }
    // Eliminate
    for (let k = i + 1; k < n; k++) {
      const f = A[k][i] / A[i][i];
      for (let j = i; j <= n; j++) A[k][j] -= f * A[i][j];
    }
  }
  // Back-substitution
  const u = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let s = A[i][n];
    for (let j = i + 1; j < n; j++) s -= A[i][j] * u[j];
    u[i] = s / A[i][i];
  }
  return u;
}

export interface Hex8SolveInput {
  nodes: Vec3[];
  elements: Hex8[];
  E: number;
  nu: number;
  /** Map node → [fixUx, fixUy, fixUz] */
  supports: Map<number, [boolean, boolean, boolean]>;
  /** Map node → [Fx, Fy, Fz] in kN */
  loads: Map<number, [number, number, number]>;
}

export interface Hex8SolveOutput {
  /** Map node → [ux, uy, uz] */
  displacements: Map<number, Vec3>;
  /** Map element → von Mises stress per Gauss point (8 values) */
  vonMisesPerElement: Map<number, number[]>;
  /** Map element → 6-component stress per Gauss point: [σxx,σyy,σzz,τxy,τyz,τxz][] */
  stressPerElement: Map<number, number[][]>;
  /** Tiempo total del solver en ms */
  elapsedMs: number;
}

/**
 * Función principal de solver H8.
 * Ensambla K global denso, aplica BC, resuelve, calcula tensiones.
 */
export function hex8Solve(input: Hex8SolveInput): Hex8SolveOutput {
  const t0 = performance.now();
  const { nodes, elements, E, nu, supports, loads } = input;
  const N = nodes.length;
  const NDOF = 3 * N;
  const D = dMatrix(E, nu);

  // K global denso (puede ser pesado para muchos nodos)
  const K: number[][] = [];
  for (let i = 0; i < NDOF; i++) K.push(new Array(NDOF).fill(0));

  for (const elem of elements) {
    const ec: Vec3[] = elem.map((id) => nodes[id]);
    const Ke = hex8Stiffness(ec, E, nu);
    for (let a = 0; a < 8; a++) {
      for (let b = 0; b < 8; b++) {
        for (let p = 0; p < 3; p++) {
          for (let q = 0; q < 3; q++) {
            K[3 * elem[a] + p][3 * elem[b] + q] += Ke[3 * a + p][3 * b + q];
          }
        }
      }
    }
  }

  // F vector
  const F = new Array(NDOF).fill(0);
  loads.forEach(([fx, fy, fz], n) => {
    F[3 * n + 0] += fx; F[3 * n + 1] += fy; F[3 * n + 2] += fz;
  });

  // Aplicar BCs: penalty grande sobre la diagonal donde fix=true
  const PEN = 1e15;
  supports.forEach(([fx, fy, fz], n) => {
    if (fx) K[3 * n + 0][3 * n + 0] += PEN;
    if (fy) K[3 * n + 1][3 * n + 1] += PEN;
    if (fz) K[3 * n + 2][3 * n + 2] += PEN;
  });

  // Resolver
  const u = solveLinear(K, F);
  const displacements = new Map<number, Vec3>();
  for (let i = 0; i < N; i++) {
    displacements.set(i, [u[3 * i], u[3 * i + 1], u[3 * i + 2]]);
  }

  // Calcular σ (6 componentes) + von Mises por elemento (en cada punto Gauss)
  const vmMap = new Map<number, number[]>();
  const stressMap = new Map<number, number[][]>();
  for (let eidx = 0; eidx < elements.length; eidx++) {
    const elem = elements[eidx];
    const ec: Vec3[] = elem.map((id) => nodes[id]);
    const ueElem: number[] = [];
    for (const id of elem) {
      ueElem.push(u[3 * id], u[3 * id + 1], u[3 * id + 2]);
    }
    const vmList: number[] = [];
    const sigList: number[][] = [];
    for (const [xi, eta, zeta] of GAUSS) {
      const dNnat = shapeDerivativesNatural(xi, eta, zeta);
      const J = jacobian(ec, dNnat);
      const Jinv = inv3(J);
      const dNxyz = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
      for (let i = 0; i < 8; i++) {
        dNxyz[0][i] = Jinv[0][0] * dNnat[0][i] + Jinv[0][1] * dNnat[1][i] + Jinv[0][2] * dNnat[2][i];
        dNxyz[1][i] = Jinv[1][0] * dNnat[0][i] + Jinv[1][1] * dNnat[1][i] + Jinv[1][2] * dNnat[2][i];
        dNxyz[2][i] = Jinv[2][0] * dNnat[0][i] + Jinv[2][1] * dNnat[1][i] + Jinv[2][2] * dNnat[2][i];
      }
      const B = bMatrix(dNxyz);
      // ε = B · u
      const eps = new Array(6).fill(0);
      for (let r = 0; r < 6; r++) {
        for (let c = 0; c < 24; c++) eps[r] += B[r][c] * ueElem[c];
      }
      // σ = D · ε  (orden: σxx, σyy, σzz, τxy, τyz, τxz)
      const sig = new Array(6).fill(0);
      for (let r = 0; r < 6; r++) {
        for (let c = 0; c < 6; c++) sig[r] += D[r][c] * eps[c];
      }
      // von Mises (3D)
      const sxx = sig[0], syy = sig[1], szz = sig[2];
      const sxy = sig[3], syz = sig[4], sxz = sig[5];
      const vm = Math.sqrt(
        0.5 * ((sxx - syy) ** 2 + (syy - szz) ** 2 + (szz - sxx) ** 2) +
        3 * (sxy * sxy + syz * syz + sxz * sxz)
      );
      vmList.push(vm);
      sigList.push([sxx, syy, szz, sxy, syz, sxz]);
    }
    vmMap.set(eidx, vmList);
    stressMap.set(eidx, sigList);
  }

  return {
    displacements,
    vonMisesPerElement: vmMap,
    stressPerElement: stressMap,
    elapsedMs: performance.now() - t0,
  };
}
