/**
 * Shell Q4 element (4-node quadrilateral shell)
 * Membrane (plane stress) + Mindlin-Reissner plate bending + MITC4 shear tying
 * 24 DOFs total: [u, v, w, θx, θy, θz] per node
 *
 * Ported from hekatan-fem/src/cpp/utils/shellQ4.cpp
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
): { dNdx: number[]; dNdy: number[]; detJ: number; J: [number, number, number, number] } {
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
  return { dNdx, dNdy, detJ, J: [J11, J12, J21, J22] };
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

/**
 * 12x12 drilling stiffness (Hughes & Brezzi 1989)
 * DOFs: [u0, v0, θz0, u1, v1, θz1, u2, v2, θz2, u3, v3, θz3]
 * The drilling DOF θz is the in-plane rotation:
 *   θz = 0.5 * (∂v/∂x - ∂u/∂y)
 * Penalty formulation: Kd = α * G * t * ∫ Bd^T * Bd dA
 * where Bd relates the drilling strain γd = θz - 0.5*(∂v/∂x - ∂u/∂y)
 */
function getDrillingK(x: number[], y: number[], G: number, t: number, alpha: number): number[][] {
  const Kd = zeros(12, 12);
  const gpCoords: [number, number][] = [[-GP, -GP], [GP, -GP], [GP, GP], [-GP, GP]];

  for (const [xi, eta] of gpCoords) {
    const { N, dNdxi, dNdeta } = shapeFunctionsQ4(xi, eta);
    const { dNdx, dNdy, detJ } = jacobian2D(dNdxi, dNdeta, x, y);

    // Bd (1 × 12): drilling strain = θz_i * N_i - 0.5*(∂v/∂x - ∂u/∂y)
    // For node i: Bd = [-0.5*dNdy[i], 0.5*dNdx[i], N[i]]
    // DOF order: [u_i, v_i, θz_i]
    const Bd: number[] = new Array(12).fill(0);
    for (let i = 0; i < 4; i++) {
      Bd[i * 3]     = 0.5 * dNdy[i];   // -(-0.5*dN/dy) → +0.5*dN/dy (from ∂u/∂y)
      Bd[i * 3 + 1] = -0.5 * dNdx[i];  // 0.5*dN/dx → but with minus from ∂v/∂x sign
      Bd[i * 3 + 2] = N[i];             // θz contribution
    }

    // Kd += α * G * t * Bd^T * Bd * detJ
    const factor = alpha * G * t * Math.abs(detJ);
    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < 12; j++) {
        Kd[i][j] += factor * Bd[i] * Bd[j];
      }
    }
  }

  return Kd;
}


/**
 * Membrana ITW 1990 — Ibrahimbegovic, Taylor & Wilson, IJNME 30:445-457.
 *
 * Devuelve 12×12 con los GDL [u0,v0,θz0, u1,v1,θz1, u2,v2,θz2, u3,v3,θz3]:
 * membrana Y drilling JUNTOS. El giro entra en el CAMPO DE DESPLAZAMIENTOS
 * (interpolación de Allman por los lados + burbuja (1-r²)(1-s²) condensada),
 * no como una penalización pegada por fuera.
 *
 *   (33) K = ∫ [B G]ᵀ C [B G] dΩ    con Gauss 3×3
 *   (38) P = γ ∫ {b;g}⟨b;g⟩ dΩ      con UN SOLO PUNTO (el centro)
 *   (39) [K + P] a = f
 *
 * Es la MISMA formulación que `getMembraneITW` de `shellQ4.cpp` — este fichero
 * y aquel tienen que dar el mismo número. Hasta el 19-ago-2026 no lo daban: el
 * TS se había quedado con Hughes-Brezzi (α = 0.5) mientras el C++ ya llevaba
 * ITW, y en el patch test de orden superior salía −1.279129 contra −1.500000.
 *
 * γ = gammaFac·μ, con gammaFac = 0.4 por defecto: NO es lo del paper (que usa
 * 1.0) sino lo MEDIDO de ETABS reconstruyendo su matriz 12×12 de membrana por
 * flexibilidad. Da lo mismo de todas formas — la formulación es insensible a γ.
 */
function getMembraneITW(
  x: number[], y: number[], E: number, nu: number, t: number, gammaFac: number,
): number[][] {
  const f = E * t / (1 - nu * nu);           // el espesor va DENTRO de D
  const D = [[f, f * nu, 0], [f * nu, f, 0], [0, 0, f * (1 - nu) / 2]];

  // Coeficientes de lado de Allman: (l_JK/8)·n_JK con n = (dy, −dx)/l
  const sig = [1, 2, 3, 0], ant = [3, 0, 1, 2];
  const cx: number[] = [], cy: number[] = [];
  for (let i = 0; i < 4; i++) {
    cx.push((y[sig[i]] - y[i]) / 8);
    cy.push(-(x[sig[i]] - x[i]) / 8);
  }

  const g3 = [-Math.sqrt(3 / 5), 0, Math.sqrt(3 / 5)];
  const w3 = [5 / 9, 8 / 9, 5 / 9];
  const K14 = zeros(14, 14);
  let cN: number[] = [], cdNx: number[] = [], cdNy: number[] = [];
  let cgt2: number[] = [], cgt3: number[] = [];
  let cdNBx = 0, cdNBy = 0, cdJ = 0;

  for (let ig = 0; ig < 3; ig++) {
    for (let jg = 0; jg < 3; jg++) {
      const rr = g3[ig], ss = g3[jg], ww = w3[ig] * w3[jg];
      const { N, dNdxi, dNdeta } = shapeFunctionsQ4(rr, ss);

      // Jacobiano e inverso, a mano: hacen falta también para NS y la burbuja
      let J11 = 0, J12 = 0, J21 = 0, J22 = 0;
      for (let i = 0; i < 4; i++) {
        J11 += dNdxi[i] * x[i];  J12 += dNdxi[i] * y[i];
        J21 += dNdeta[i] * x[i]; J22 += dNdeta[i] * y[i];
      }
      const dJ = J11 * J22 - J12 * J21;
      const Ji11 = J22 / dJ, Ji12 = -J12 / dJ, Ji21 = -J21 / dJ, Ji22 = J11 / dJ;

      const dNx: number[] = [], dNy: number[] = [];
      for (let i = 0; i < 4; i++) {
        dNx.push(Ji11 * dNdxi[i] + Ji12 * dNdeta[i]);
        dNy.push(Ji21 * dNdxi[i] + Ji22 * dNdeta[i]);
      }

      // Funciones serendipity de lado, ecs. (22)-(23), con el ½ ya dentro
      const nsr = [-rr * (1 - ss), 0.5 * (1 - ss * ss), -rr * (1 + ss), -0.5 * (1 - ss * ss)];
      const nss = [-0.5 * (1 - rr * rr), -ss * (1 + rr), 0.5 * (1 - rr * rr), -ss * (1 - rr)];
      const NSx: number[] = [], NSy: number[] = [];
      for (let i = 0; i < 4; i++) {
        NSx.push(Ji11 * nsr[i] + Ji12 * nss[i]);
        NSy.push(Ji21 * nsr[i] + Ji22 * nss[i]);
      }

      // Burbuja jerárquica NB9 = (1−r²)(1−s²), ec. (24)
      const nbr = -2 * rr * (1 - ss * ss), nbs = -2 * ss * (1 - rr * rr);
      const dNBx = Ji11 * nbr + Ji12 * nbs;
      const dNBy = Ji21 * nbr + Ji22 * nbs;

      // G_I, ec. (28): cada nudo entra en SUS DOS lados con signo opuesto
      const gt1: number[] = [], gt2: number[] = [], gt3: number[] = [], gt4: number[] = [];
      for (let i = 0; i < 4; i++) {
        const p = ant[i];
        gt1.push(NSx[p] * cx[p] - NSx[i] * cx[i]);
        gt2.push(NSy[p] * cx[p] - NSy[i] * cx[i]);
        gt3.push(NSx[p] * cy[p] - NSx[i] * cy[i]);
        gt4.push(NSy[p] * cy[p] - NSy[i] * cy[i]);
      }

      const B = zeros(3, 14);
      for (let i = 0; i < 4; i++) {
        B[0][3 * i] = dNx[i];
        B[1][3 * i + 1] = dNy[i];
        B[2][3 * i] = dNy[i];
        B[2][3 * i + 1] = dNx[i];
        B[0][3 * i + 2] = gt1[i];
        B[1][3 * i + 2] = gt4[i];
        B[2][3 * i + 2] = gt2[i] + gt3[i];
      }
      B[0][12] = dNBx; B[2][12] = dNBy;
      B[1][13] = dNBy; B[2][13] = dNBx;

      const w = ww * Math.abs(dJ);
      for (let a = 0; a < 14; a++) {
        for (let b = 0; b < 14; b++) {
          let s = 0;
          for (let r = 0; r < 3; r++)
            for (let c = 0; c < 3; c++) s += B[r][a] * D[r][c] * B[c][b];
          K14[a][b] += w * s;
        }
      }

      if (ig === 1 && jg === 1) {              // el centro ya es punto de Gauss
        cN = N.slice(); cdNx = dNx.slice(); cdNy = dNy.slice();
        cgt2 = gt2.slice(); cgt3 = gt3.slice();
        cdNBx = dNBx; cdNBy = dNBy; cdJ = Math.abs(dJ);
      }
    }
  }

  // P, ec. (38), de UN SOLO PUNTO: γ·Ω·res·resᵀ, con Ω = 4·dJ0 (el área)
  const mu = E / (2 * (1 + nu));
  const res = new Array(14).fill(0);
  for (let i = 0; i < 4; i++) {
    res[3 * i] = -0.5 * cdNy[i];
    res[3 * i + 1] = 0.5 * cdNx[i];
    res[3 * i + 2] = 0.5 * (cgt3[i] - cgt2[i]) - cN[i];
  }
  res[12] = -0.5 * cdNBy;
  res[13] = 0.5 * cdNBx;
  const kp = gammaFac * mu * t * 4 * cdJ;
  for (let a = 0; a < 14; a++)
    for (let b = 0; b < 14; b++) K14[a][b] += kp * res[a] * res[b];

  // Condensación estática de la burbuja (los 2 GDL internos)
  const Kbb = [[K14[12][12], K14[12][13]], [K14[13][12], K14[13][13]]];
  const det = Kbb[0][0] * Kbb[1][1] - Kbb[0][1] * Kbb[1][0];
  const K = zeros(12, 12);
  for (let a = 0; a < 12; a++) for (let b = 0; b < 12; b++) K[a][b] = K14[a][b];
  if (Math.abs(det) < 1e-30) return K;
  const inv = [[Kbb[1][1] / det, -Kbb[0][1] / det], [-Kbb[1][0] / det, Kbb[0][0] / det]];
  for (let a = 0; a < 12; a++) {
    for (let b = 0; b < 12; b++) {
      let s = 0;
      for (let p = 0; p < 2; p++)
        for (let q = 0; q < 2; q++) s += K14[a][12 + p] * inv[p][q] * K14[12 + q][b];
      K[a][b] -= s;
    }
  }
  return K;
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

  // ⚠️ COVARIANTE, no cartesiano. El MITC4 de Dvorkin & Bathe (1984) interpola
  // las componentes γ_ξ / γ_η —las de los ejes NATURALES— y solo al final
  // vuelve al cartesiano con el J⁻¹ del punto de Gauss:
  //     γ_cov  = J · γ_cart      (J directo, en el punto de atadura)
  //     γ_cart = J⁻¹ · γ_cov     (en el punto de Gauss)
  // En un RECTANGULO J es el mismo en los cuatro puntos de atadura, entra y
  // sale del promedio y da igual — por eso cerraba en rectangulo. Distorsionado
  // NO: medido con un campo de Kirchhoff EXACTO (donde γ tiene que ser 0) en
  // los 5 elementos del patch test 2-001 de SAP2000 salia
  //     γ_espurio / pendiente = 0.47 a 2.88
  // o sea cortante inventado del orden de la propia solucion.
  const BsTying: number[][][] = []; // [4][2][12] — ya COVARIANTE
  for (const tp of tyingPts) {
    const { N, dNdxi, dNdeta } = shapeFunctionsQ4(tp.xi, tp.eta);
    const { dNdx, dNdy, detJ, J } = jacobian2D(dNdxi, dNdeta, x, y);
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
    // γ_cov = J · γ_cart
    const [j11, j12, j21, j22] = J;
    const Bcov = zeros(2, 12);
    for (let j = 0; j < 12; j++) {
      Bcov[0][j] = j11 * Bs[0][j] + j12 * Bs[1][j];
      Bcov[1][j] = j21 * Bs[0][j] + j22 * Bs[1][j];
    }
    BsTying.push(Bcov);
  }

  for (const [xi, eta] of gpCoords) {
    const { N, dNdxi, dNdeta } = shapeFunctionsQ4(xi, eta);
    const { dNdx, dNdy, detJ, J: Jg } = jacobian2D(dNdxi, dNdeta, x, y);

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
    // se interpola en COVARIANTE y se vuelve al cartesiano con el J⁻¹ de aqui
    const [g11, g12, g21, g22] = Jg;
    const iD = 1 / detJ;
    for (let j = 0; j < 12; j++) {
      const cxi = wA * BsTying[0][0][j] + wC * BsTying[1][0][j]; // γ_ξ desde A,C
      const cet = wB * BsTying[2][1][j] + wD * BsTying[3][1][j]; // γ_η desde B,D
      BsMitc[0][j] = iD * ( g22 * cxi - g12 * cet);
      BsMitc[1][j] = iD * (-g21 * cxi + g11 * cet);
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
  const Kb = getBendingK(x, y, E, nu, t);

  // Drilling stiffness — Hughes & Brezzi (1989) / Ibrahimbegovic & Wilson (1991)
  // Full drilling formulation: Kd = α * G * t * ∫ Nd^T * Nd dA
  // where Nd relates θz to in-plane displacements via the skew-symmetric gradient
  // Nd[i] = 0.5 * (∂N[i]/∂x_local2 - ∂N[i]/∂x_local1) for each node
  // This couples θz with u,v — not just diagonal stabilization
  // ⚠️ Esto era Hughes-Brezzi con alpha = 0.5, y NO coincidia con el C++ (que
  // usaba 0.05 y desde el 19-ago-2026 usa ITW). Medido en los 4 tests del paper:
  // el patch test de orden superior daba -1.279129 por el TS contra -1.500000
  // por el WASM, un 14.7 % de diferencia entre los dos motores del MISMO repo.
  // Ahora los dos llevan el ITW y dan el mismo numero.
  const GAMMA_ITW = 0.4;   // gamma/mu, lo medido de ETABS (ver shellQ4.cpp)
  const Kitw = getMembraneITW(x, y, E, nu, t, GAMMA_ITW);

  // Assemble 24x24
  // DOF mapping per node i:
  //   u = 6i+0, v = 6i+1, w = 6i+2, θx = 6i+3, θy = 6i+4, θz = 6i+5
  // Membrane Km uses [u0,v0,u1,v1,u2,v2,u3,v3]
  // Bending Kb uses [w0,θx0,θy0,w1,θx1,θy1,w2,θx2,θy2,w3,θx3,θy3]
  // Drilling Kd uses [u0,v0,θz0,u1,v1,θz1,u2,v2,θz2,u3,v3,θz3]
  const K = zeros(24, 24);

  // Membrane → K: NO se ensambla aparte. Con ITW la membrana y el drilling son
  // la MISMA matriz de 12x12 y se coloca abajo, en `drillDof`.

  // Bending → K
  //
  // ⚠️ CAMBIO DE BASE OBLIGATORIO: `getBendingK` está escrita con las
  // PENDIENTES del campo de flechas
  //     βx = ∂w/∂x        βy = ∂w/∂y
  // pero los GDL 3 y 4 de un nudo son GIROS ALREDEDOR de los ejes:
  //     θx = ∂w/∂y = βy           θy = −∂w/∂x = −βx
  //
  // o sea (w, βx, βy) = T · (w, θx, θy) con T = [[1,0,0],[0,0,−1],[0,1,0]].
  //
  // Dentro de una placa AISLADA no se nota —es un cambio de base y todos sus
  // elementos lo comparten, por eso la placa sola casaba contra ETABS y contra
  // Navier—, pero en cuanto una VIGA comparte nudo con la losa los giros dejan
  // de significar lo mismo y la unión sale rígida. Medido: con vigas, la placa
  // Thick salía MÁS RÍGIDA que la Thin (razón 0.53) cuando el cortante solo
  // puede ablandar, y no convergía al refinar.
  //
  // El motor de Python (`shell_q4_motor.py`, `_T_BEN`) ya lo hace, y con él
  // casa con `ShellMITC4` de OpenSees a 11 cifras. Sin esto, el bloque de
  // flexión de aquí es EXACTAMENTE el suyo sin girar (verificado a 1.1e-16).
  const benDof = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22]; // w,θx,θy for each node
  const Tg = [[1, 0, 0], [0, 0, -1], [0, 1, 0]];              // por nudo
  const Kbg = zeros(12, 12);
  for (let a = 0; a < 12; a++) {
    for (let b = 0; b < 12; b++) {
      // Kbg = Tᵀ·Kb·T, con T bloque-diagonal 3×3 por nudo
      let acc = 0;
      const na = (a / 3) | 0, ia = a % 3;
      const nb = (b / 3) | 0, ib = b % 3;
      for (let p = 0; p < 3; p++) {
        const tap = Tg[p][ia];
        if (tap === 0) continue;
        for (let q = 0; q < 3; q++) {
          const tbq = Tg[q][ib];
          if (tbq === 0) continue;
          acc += tap * Kb[na * 3 + p][nb * 3 + q] * tbq;
        }
      }
      Kbg[a][b] = acc;
    }
  }
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
      K[benDof[i]][benDof[j]] += Kbg[i][j];
    }
  }

  // Membrana + drilling → K. Con ITW van JUNTOS: la 12x12 trae [u, v, θz] por
  // nudo, asi que este bloque sustituye al de membrana, no se suma encima.
  const drillDof = [0, 1, 5, 6, 7, 11, 12, 13, 17, 18, 19, 23]; // u,v,θz per node
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
      K[drillDof[i]][drillDof[j]] += Kitw[i][j];
    }
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
