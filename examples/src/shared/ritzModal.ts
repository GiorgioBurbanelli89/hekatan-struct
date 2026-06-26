/**
 * Mejoras de captura de masa modal (para alcanzar ΣU ≥ 90% como ETABS):
 *   A) Corrección de masa faltante (static / missing-mass): la masa residual
 *      que los autovectores no capturan se agrega como un pseudo-modo RÍGIDO
 *      (T≈0 → Sa ≈ PGA). Post-procesa la salida del modal por autovectores.
 *   B) Vectores de Ritz (load-dependent, como ETABS): se generan resolviendo
 *      K·ψ = M·(seed) con `deform`, M-ortonormalizando (algoritmo LDR de Wilson).
 *      Capturan la masa en muchos menos vectores que los autovectores.
 *
 * Ambos en TypeScript: usan `deform` (ya disponible) para los K-solves; NO
 * recompilan el WASM. La masa es lumpeada (consistente con el modal del motor).
 */
import { deform, type Node, type Element } from "hekatan-fem";

type Vec6 = [number, number, number, number, number, number];
const NDOF = 6;

/** Masa lumpeada por nudo [mx,my,mz,0,0,0]. ei.densities ya es densidad de MASA (peso/g). */
export function lumpedMass(nodes: Node[], elements: Element[], ei: any): number[][] {
  const M = nodes.map(() => [0, 0, 0, 0, 0, 0]);
  const d3 = (a: number[], b: number[]) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
  elements.forEach((el: number[], e: number) => {
    const rho = ei.densities?.get(e) ?? 0;
    if (el.length === 2) {
      const L = d3(nodes[el[0]], nodes[el[1]]);
      const A = ei.areas?.get(e) ?? 0;
      const me = (rho * A * L) / 2;
      for (const n of el) for (let d = 0; d < 3; d++) M[n][d] += me;
    } else if (el.length === 4) {
      const p = el.map((n) => nodes[n]);
      // área del cuadrilátero (2 triángulos)
      const cross = (u: number[], v: number[]) => Math.hypot(
        u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]);
      const sub = (a: number[], b: number[]) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
      const area = 0.5 * (cross(sub(p[1], p[0]), sub(p[3], p[0])) + cross(sub(p[1], p[2]), sub(p[3], p[2])));
      const t = ei.thicknesses?.get(e) ?? 0;
      const me = (rho * t * area) / 4;
      for (const n of el) for (let d = 0; d < 3; d++) M[n][d] += me;
    }
  });
  return M;
}

const massTotal = (M: number[][], dir: number) => M.reduce((s, m) => s + m[dir], 0);

// ───────────────────────── A) corrección de masa faltante ─────────────────────────
/** Agrega un pseudo-modo rígido (T≈0) con la masa residual no capturada en X/Y. */
export function withMissingMass(out: any): any {
  const mp: number[][] = out.massParticipation ?? [];
  if (!mp.length) return out;
  const res = new Array(NDOF).fill(0);
  for (let d = 0; d < NDOF; d++) { let s = 0; for (const m of mp) s += m[d] || 0; res[d] = Math.max(0, 1 - s); }
  if (res[0] < 0.005 && res[1] < 0.005 && res[2] < 0.005) return out;  // ya capturada
  const F_RIG = 1000;  // 1000 Hz → T=0.001 s → Sa(T)≈PGA (modo rígido)
  const nCols = out.modeShapes?.[0]?.length ?? 0;
  return {
    frequencies: [...(out.frequencies ?? []), F_RIG],
    periods: out.periods ? [...out.periods, 1 / F_RIG] : undefined,
    modeShapes: out.modeShapes ? [...out.modeShapes, new Array(nCols).fill(0)] : out.modeShapes,
    massParticipation: [...mp, res],
    missingMassIndex: mp.length,   // marca cuál fila es la corrección (para etiquetar)
  };
}

// ───────────────────────── B) vectores de Ritz (LDR) ─────────────────────────
const dotM = (x: number[][], y: number[][], M: number[][]) => {
  let s = 0; for (let n = 0; n < x.length; n++) for (let d = 0; d < NDOF; d++) s += M[n][d] * x[n][d] * y[n][d]; return s;
};
const dotF = (x: number[][], y: number[][]) => { // producto interno plano
  let s = 0; for (let n = 0; n < x.length; n++) for (let d = 0; d < NDOF; d++) s += x[n][d] * y[n][d]; return s;
};
const axpy = (y: number[][], a: number, x: number[][]) => { for (let n = 0; n < y.length; n++) for (let d = 0; d < NDOF; d++) y[n][d] += a * x[n][d]; };
const scaleF = (x: number[][], a: number) => { for (let n = 0; n < x.length; n++) for (let d = 0; d < NDOF; d++) x[n][d] *= a; };
const clone = (x: number[][]) => x.map((r) => r.slice());
const zero = (n: number) => Array.from({ length: n }, () => [0, 0, 0, 0, 0, 0]);

/** eigen simétrico (Jacobi cíclico) para matriz pequeña nxn. Devuelve {val, vec(col)}. */
function jacobiEig(A: number[][]): { val: number[]; vec: number[][] } {
  const n = A.length; const a = A.map((r) => r.slice());
  const V = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
  for (let sweep = 0; sweep < 100; sweep++) {
    let off = 0; for (let p = 0; p < n; p++) for (let q = p + 1; q < n; q++) off += a[p][q] * a[p][q];
    if (off < 1e-20) break;
    for (let p = 0; p < n; p++) for (let q = p + 1; q < n; q++) {
      if (Math.abs(a[p][q]) < 1e-18) continue;
      const theta = (a[q][q] - a[p][p]) / (2 * a[p][q]);
      const t = Math.sign(theta || 1) / (Math.abs(theta) + Math.sqrt(theta * theta + 1));
      const c = 1 / Math.sqrt(t * t + 1), s = t * c;
      for (let k = 0; k < n; k++) { const akp = a[k][p], akq = a[k][q]; a[k][p] = c * akp - s * akq; a[k][q] = s * akp + c * akq; }
      for (let k = 0; k < n; k++) { const apk = a[p][k], aqk = a[q][k]; a[p][k] = c * apk - s * aqk; a[q][k] = s * apk + c * aqk; }
      for (let k = 0; k < n; k++) { const vkp = V[k][p], vkq = V[k][q]; V[k][p] = c * vkp - s * vkq; V[k][q] = s * vkp + c * vkq; }
    }
  }
  return { val: a.map((r, i) => r[i]), vec: V };  // vec[*][j] = autovector j
}

/**
 * Modal por vectores de Ritz (load-dependent). Mismo formato que modalAnalysis.
 * dirs = direcciones semilla (0=X,1=Y,2=Z). nRitz = vectores por dirección (aprox).
 */
export function ritzModal(
  nodes: Node[], elements: Element[], nodeInputs: any, ei: any, nVec = 12, dirs = [0, 1]
): any {
  const N = nodes.length;
  const M = lumpedMass(nodes, elements, ei);
  const supports = nodeInputs.supports;
  // base de Ritz M-ortonormal + su K·ψ (para armar Kr exacto sin K explícita)
  const PSI: number[][][] = [], KPSI: number[][][] = [];
  const solveK = (f: number[][]) => {
    const loads = new Map<number, number[]>();
    for (let n = 0; n < N; n++) if (f[n].some((v) => v !== 0)) loads.set(n, f[n].slice());
    // deform().deformations es un Map<nodo,[6]> → lo paso a array por-nudo
    const def = deform(nodes, elements, { supports, loads }, ei).deformations as Map<number, number[]> | undefined;
    return nodes.map((_, n) => ((def?.get(n) as number[]) || [0, 0, 0, 0, 0, 0]).slice());
  };
  for (const dir of dirs) {
    // semilla f = M·r_dir  (r_dir = traslación rígida en 'dir')
    let f = zero(N); for (let n = 0; n < N; n++) f[n][dir] = M[n][dir];
    for (let k = 0; k < nVec; k++) {
      let x = solveK(f);                 // K x = f
      let Kx = clone(f);                 // K·x = f (exacto en el solve crudo)
      // M-ortogonalizar contra la base existente (mantener K·x consistente)
      for (let i = 0; i < PSI.length; i++) { const c = dotM(x, PSI[i], M); axpy(x, -c, PSI[i]); axpy(Kx, -c, KPSI[i]); }
      const nrm = Math.sqrt(Math.max(dotM(x, x, M), 0));
      if (nrm < 1e-9) break;             // dirección agotada
      scaleF(x, 1 / nrm); scaleF(Kx, 1 / nrm);
      PSI.push(x); KPSI.push(Kx);
      f = zero(N); for (let n = 0; n < N; n++) for (let d = 0; d < 3; d++) f[n][d] = M[n][d] * x[n][d]; // f = M·x
    }
  }
  const m = PSI.length;
  if (m === 0) return { frequencies: [], modeShapes: [], massParticipation: [] };
  // K reducida: Kr_ij = ψ_i · (K ψ_j);  Mr = I
  const Kr = Array.from({ length: m }, (_, i) => Array.from({ length: m }, (_, j) => dotF(PSI[i], KPSI[j])));
  for (let i = 0; i < m; i++) for (let j = i + 1; j < m; j++) { const v = (Kr[i][j] + Kr[j][i]) / 2; Kr[i][j] = Kr[j][i] = v; }
  const { val, vec } = jacobiEig(Kr);
  // ordenar por autovalor (ω²) ascendente
  const order = val.map((v, i) => i).sort((a, b) => val[a] - val[b]);
  const Mt = [0, 1, 2].map((d) => massTotal(M, d) || 1);
  const frequencies: number[] = [], massParticipation: number[][] = [], modeShapes: number[][] = [];
  for (const j of order) {
    const w2 = Math.max(val[j], 0); const f = Math.sqrt(w2) / (2 * Math.PI);
    if (!isFinite(f) || f <= 1e-6) continue;
    // φ = Σ_k vec[k][j] ψ_k  (M-normalizado: φ^T M φ = 1)
    const phi = zero(N);
    for (let k = 0; k < m; k++) { const q = vec[k][j]; for (let n = 0; n < N; n++) for (let d = 0; d < NDOF; d++) phi[n][d] += q * PSI[k][n][d]; }
    // participación: frac_d = (φ^T M r_d)² / M_total_d
    const part = new Array(NDOF).fill(0);
    for (let d = 0; d < 3; d++) { let L = 0; for (let n = 0; n < N; n++) L += M[n][d] * phi[n][d]; part[d] = (L * L) / Mt[d]; }
    frequencies.push(f); massParticipation.push(part); modeShapes.push(phi.flat());
  }
  return { frequencies, modeShapes, massParticipation, periods: frequencies.map((f) => 1 / f) };
}
