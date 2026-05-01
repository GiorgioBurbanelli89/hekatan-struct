/**
 * ============================================================================
 *  layeredShell.ts — Q4 Layered Shell con Classical Laminate Theory (CLT)
 * ============================================================================
 *
 *  Implementacion TS pura (sin C++/WASM) de Q4 Mindlin-Reissner shell con
 *  multiples capas. Cada capa puede tener:
 *    - Material distinto (E, nu, rho)
 *    - Espesor distinto
 *    - Angulo de fibra distinto (para composites/CLT)
 *    - Posicion z distinta (offset desde mid-plane)
 *
 *  Computa:
 *    - Matrices ABBD (Classical Laminate Theory):
 *      A_ij = sum_k Q_ij^(k) * t_k                        (extensional)
 *      B_ij = sum_k Q_ij^(k) * t_k * z_k                  (coupling)
 *      D_ij = sum_k Q_ij^(k) * (t_k^3/12 + t_k * z_k^2)   (bending)
 *    - Stresses por capa: sigma_xx, sigma_yy, sigma_xy
 *    - Modal: matriz de masa consistente con densidad ponderada
 *
 *  Referencia: Reddy, "Mechanics of Laminated Composite Plates and Shells"
 *  ============================================================================
 */

import { multiply, transpose, inverse } from "mathjs";

// ──── Public Types ─────────────────────────────────────────────────────

export interface LayerDef {
  /** Modulo de Young de la capa (kPa) */
  E: number;
  /** Coef de Poisson */
  nu: number;
  /** Espesor de la capa (m) */
  thickness: number;
  /** Angulo de orientacion de fibra respecto a eje X local (radianes) */
  angle?: number;
  /** Densidad (ton/m^3) */
  density?: number;
  /** Posicion z del midplane de la capa respecto a midplane del shell (m).
   *  Si no se especifica, se calcula automaticamente apilando capas
   *  desde -t_total/2 hacia +t_total/2 en orden. */
  z_mid?: number;
}

export interface LayeredQ4Input {
  /** Capas en orden de bottom a top */
  layers: LayerDef[];
  /** Mesh nodes [x, y] o [x, y, z] */
  nodes: number[][];
  /** Q4 elements [n0, n1, n2, n3] */
  elements: number[][];
  /** Boundary conditions */
  bcs?: Array<{ node: number; dof: number; value: number }>;
  /** Pressure uniforme (force/area, +z = up) */
  pressure?: number;
  /** Point loads */
  pointLoads?: Array<{ node: number; dof: number; value: number }>;
}

export interface ABBD {
  A: number[][];   // 3x3: extensional
  B: number[][];   // 3x3: coupling
  D: number[][];   // 3x3: bending
  As: number[][];  // 2x2: transverse shear
  t_total: number;
  rho_eff: number;  // densidad efectiva por unidad de area = sum(rho_k * t_k)
}

// ──── Helper: Q matrix de una capa transformada al sistema global ──────

/**
 * Q matrix (reduced stiffness) en el sistema MATERIAL de la capa
 * Q[0][0] = E1 / (1 - nu12*nu21)  (asumimos isotropico → nu12 = nu21 = nu)
 */
function Q_material(E: number, nu: number): number[][] {
  const f = E / (1 - nu * nu);
  return [
    [f, f * nu, 0],
    [f * nu, f, 0],
    [0, 0, f * (1 - nu) / 2],
  ];
}

/**
 * Q matrix transformada (en sistema GLOBAL) para una capa con angulo theta
 * (medido respecto a eje X global)
 *
 * Q_bar = T^-1 · Q · T^-T  donde T es la matriz de transformacion de strain
 */
function Q_transformed(E: number, nu: number, theta: number): number[][] {
  const Qm = Q_material(E, nu);
  if (Math.abs(theta) < 1e-10) return Qm;

  const c = Math.cos(theta);
  const s = Math.sin(theta);
  const c2 = c * c, s2 = s * s, cs = c * s;

  // Reuter matrix (reduces engineering shear to tensorial)
  // Tsigma (transforms stress: sigma_global = Tsigma * sigma_material)
  // For Q_bar in engineering convention:
  //   Q_bar_xx = Q11*c4 + 2*(Q12 + 2*Q66)*c2*s2 + Q22*s4
  //   Q_bar_yy = Q11*s4 + 2*(Q12 + 2*Q66)*c2*s2 + Q22*c4
  //   Q_bar_xy = (Q11 + Q22 - 4*Q66)*c2*s2 + Q12*(c4 + s4)
  //   Q_bar_ss = (Q11 + Q22 - 2*Q12 - 2*Q66)*c2*s2 + Q66*(c4 + s4)
  //   Q_bar_xs = (Q11 - Q12 - 2*Q66)*c3*s + (Q12 - Q22 + 2*Q66)*c*s3
  //   Q_bar_ys = (Q11 - Q12 - 2*Q66)*c*s3 + (Q12 - Q22 + 2*Q66)*c3*s
  const c4 = c2 * c2, s4 = s2 * s2;
  const c3s = c2 * cs, cs3 = cs * s2;

  const Q11 = Qm[0][0], Q12 = Qm[0][1], Q22 = Qm[1][1], Q66 = Qm[2][2];

  const Qb = [
    [
      Q11 * c4 + 2 * (Q12 + 2 * Q66) * c2 * s2 + Q22 * s4,
      (Q11 + Q22 - 4 * Q66) * c2 * s2 + Q12 * (c4 + s4),
      (Q11 - Q12 - 2 * Q66) * c3s + (Q12 - Q22 + 2 * Q66) * cs3,
    ],
    [
      (Q11 + Q22 - 4 * Q66) * c2 * s2 + Q12 * (c4 + s4),
      Q11 * s4 + 2 * (Q12 + 2 * Q66) * c2 * s2 + Q22 * c4,
      (Q11 - Q12 - 2 * Q66) * cs3 + (Q12 - Q22 + 2 * Q66) * c3s,
    ],
    [
      (Q11 - Q12 - 2 * Q66) * c3s + (Q12 - Q22 + 2 * Q66) * cs3,
      (Q11 - Q12 - 2 * Q66) * cs3 + (Q12 - Q22 + 2 * Q66) * c3s,
      (Q11 + Q22 - 2 * Q12 - 2 * Q66) * c2 * s2 + Q66 * (c4 + s4),
    ],
  ];
  return Qb;
}

// ──── Compute ABBD matrices ────────────────────────────────────────────

/**
 * Compute Classical Laminate Theory ABBD matrices from layer stack.
 *
 * If layers don't specify z_mid, they are stacked from bottom to top
 * starting at -t_total/2.
 */
export function computeABBD(layers: LayerDef[]): ABBD {
  // Determinar t_total y z_mid si no especificado
  const t_total = layers.reduce((sum, l) => sum + l.thickness, 0);

  // Generar z_mid auto si falta — apilar de bottom a top centrado
  const layersWithZ: Required<Pick<LayerDef, 'E' | 'nu' | 'thickness' | 'angle' | 'density' | 'z_mid'>>[] = [];
  let z_cursor = -t_total / 2;
  for (const l of layers) {
    const z_mid_auto = z_cursor + l.thickness / 2;
    layersWithZ.push({
      E: l.E, nu: l.nu, thickness: l.thickness,
      angle: l.angle ?? 0,
      density: l.density ?? 0,
      z_mid: l.z_mid !== undefined ? l.z_mid : z_mid_auto,
    });
    z_cursor += l.thickness;
  }

  // Inicializar matrices
  const A: number[][] = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  const B: number[][] = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  const D: number[][] = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  const As: number[][] = [[0, 0], [0, 0]];

  let rho_eff = 0;

  // Sumar contribuciones de cada capa
  for (const l of layersWithZ) {
    const Qb = Q_transformed(l.E, l.nu, l.angle);
    const t = l.thickness;
    const z = l.z_mid;

    // A_ij += Q_ij * t
    // B_ij += Q_ij * t * z
    // D_ij += Q_ij * (t^3/12 + t*z^2)
    const I_layer = (t * t * t) / 12 + t * z * z;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        A[i][j] += Qb[i][j] * t;
        B[i][j] += Qb[i][j] * t * z;
        D[i][j] += Qb[i][j] * I_layer;
      }
    }

    // Transverse shear: simplificado (homogeneo equivalente con kappa=5/6)
    const G = l.E / (2 * (1 + l.nu));
    const kappa_s = 5 / 6;
    As[0][0] += kappa_s * G * t;
    As[1][1] += kappa_s * G * t;

    rho_eff += l.density * t;
  }

  return { A, B, D, As, t_total, rho_eff };
}

// ──── Print helper para debugging ──────────────────────────────────────

export function printABBD(abbd: ABBD): string {
  const fmt = (x: number) => x.toExponential(3).padStart(11);
  let out = "";
  out += `t_total = ${abbd.t_total.toFixed(4)} m,  rho_eff = ${abbd.rho_eff.toFixed(4)} ton/m²\n`;
  out += "\nA matrix (extensional [kN/m]):\n";
  for (const row of abbd.A) out += "  [" + row.map(fmt).join(", ") + " ]\n";
  out += "\nB matrix (coupling [kN]):\n";
  for (const row of abbd.B) out += "  [" + row.map(fmt).join(", ") + " ]\n";
  out += "\nD matrix (bending [kN·m]):\n";
  for (const row of abbd.D) out += "  [" + row.map(fmt).join(", ") + " ]\n";
  out += "\nAs matrix (transverse shear [kN/m]):\n";
  for (const row of abbd.As) out += "  [" + row.map(fmt).join(", ") + " ]\n";
  return out;
}

// ──── Q4 Layered Shell Solver (TS puro, simply supported analytic prep) ──

export interface LayeredQ4Output {
  abbd: ABBD;
  // Por ahora retornamos solo el ABBD (validable contra SAP/teorica)
  // El solver completo sera en PoC2.
}

/**
 * Calcula las matrices ABBD del laminado.
 * Para validacion completa con SAP, este es el output principal.
 */
export function layeredShellSolveABBD(input: { layers: LayerDef[] }): LayeredQ4Output {
  return { abbd: computeABBD(input.layers) };
}
