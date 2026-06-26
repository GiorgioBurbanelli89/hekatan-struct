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

/** Masa lumpeada por nudo [mx,my,mz,0,0,0]. ei.densities ya es densidad de MASA (peso/g).
 *  lateralOnly=true → solo masa Ux,Uy (mz=0), como el mass source de ETABS por default
 *  (INCLUDEVERTICALMASS "No") → sin inercia vertical no hay modos verticales. */
export function lumpedMass(nodes: Node[], elements: Element[], ei: any, lateralOnly = false): number[][] {
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
  if (lateralOnly) for (const m of M) m[2] = 0;   // excluir masa vertical (= ETABS)
  return M;
}

const massTotal = (M: number[][], dir: number) => M.reduce((s, m) => s + m[dir], 0);

// ───────────────────────── A) corrección de masa faltante ─────────────────────────
/** Agrega un pseudo-modo rígido (T≈0) con la masa residual no capturada en X/Y. */
export function withMissingMass(out: any): any {
  const mp: number[][] = out.massParticipation ?? [];
  if (!mp.length) return out;
  const res = new Array(NDOF).fill(0);
  // SOLO translacional (Ux,Uy,Uz). La participación rotacional Rx/Ry (cabeceo) es ~0 por
  // diseño en base empotrada → su residual daría 100% ESPURIO. No se corrige (queda en 0).
  for (let d = 0; d < 3; d++) { let s = 0; for (const m of mp) s += m[d] || 0; res[d] = Math.max(0, 1 - s); }
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
  nodes: Node[], elements: Element[], nodeInputs: any, ei: any, nVec = 12, dirs = [0, 1],
  lateralOnly = false
): any {
  const N = nodes.length;
  const M = lumpedMass(nodes, elements, ei, lateralOnly);
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

// ──────────────────── C) Diafragma rígido (como ETABS) ────────────────────
/**
 * Modal con DIAFRAGMA RÍGIDO: cada piso se condensa a 3 GDL (Ux, Uy, Rz) — el piso
 * es infinitamente rígido EN SU PLANO (como ETABS por default). Así los modos son
 * SOLO laterales/torsionales (no aparecen modos verticales de flexión de losa que
 * "ocupan cupos"), y ΣUx/ΣUy llegan al 100% en muy pocos modos.
 *
 * Método de FLEXIBILIDAD (no necesita K explícita): para cada piso y dirección se
 * aplica una carga unitaria repartida por masa (con `deform`) y se reduce el campo
 * de desplazamientos al movimiento de cuerpo rígido del piso → matriz de flexibilidad
 * F (3·nPisos). Luego eigen generalizado [√M·F·√M] → periodos + participación 100%.
 * Los periodos laterales coinciden con el modelo completo (la rigidez lateral es la
 * misma: columnas+muros); solo se elimina la flexibilidad EN EL PLANO de la losa.
 */
export function rigidDiaphragmModal(
  nodes: Node[], elements: Element[], nodeInputs: any, ei: any, nVec = 12
): any {
  const N = nodes.length;
  const M = lumpedMass(nodes, elements, ei);          // masa nodal lumpeada [6]
  const supports = nodeInputs.supports;
  const mass = (n: number) => M[n][0];                 // mx = my = mz (lumpeada)
  // ── agrupar nudos en pisos por cota z; el nivel más bajo = base (empotrada) ──
  const zOf = (n: number) => Math.round(nodes[n][2] * 1e3) / 1e3;
  const zs = [...new Set(nodes.map((_, n) => zOf(n)))].sort((a, b) => a - b);
  const zBase = zs[0];
  const levels = zs.filter((z) => z > zBase + 1e-6);   // pisos (sin base)
  const floors = levels.map((z) => {
    const ns = nodes.map((_, n) => n).filter((n) => Math.abs(zOf(n) - z) < 1e-6 && mass(n) > 0);
    let Mj = 0, cx = 0, cy = 0;
    for (const n of ns) { const m = mass(n); Mj += m; cx += m * nodes[n][0]; cy += m * nodes[n][1]; }
    cx /= Mj || 1; cy /= Mj || 1;
    let Ij = 0; for (const n of ns) { const dx = nodes[n][0] - cx, dy = nodes[n][1] - cy; Ij += mass(n) * (dx * dx + dy * dy); }
    return { z, ns, Mj, cx, cy, Ij: Ij || Mj };
  }).filter((f) => f.Mj > 0);
  const nf = floors.length;
  if (nf === 0) return { frequencies: [], modeShapes: [], massParticipation: [], periods: [] };
  const ndof = 3 * nf;                                 // [Ux,Uy,Rz] por piso

  // reduce un campo de desplazamientos nodal a los 3 GDL de cuerpo rígido de cada piso
  const reduce = (u: number[][]): number[] => {
    const q = new Array(ndof).fill(0);
    floors.forEach((f, j) => {
      let ux = 0, uy = 0, rz = 0;
      for (const n of f.ns) {
        const m = mass(n); const dx = nodes[n][0] - f.cx, dy = nodes[n][1] - f.cy;
        ux += m * u[n][0]; uy += m * u[n][1]; rz += m * (dx * u[n][1] - dy * u[n][0]);
      }
      q[3 * j] = ux / f.Mj; q[3 * j + 1] = uy / f.Mj; q[3 * j + 2] = rz / f.Ij;
    });
    return q;
  };
  const solveK = (loads: Map<number, number[]>): number[][] => {
    const def = deform(nodes, elements, { supports, loads }, ei).deformations as Map<number, number[]> | undefined;
    return nodes.map((_, n) => ((def?.get(n) as number[]) || [0, 0, 0, 0, 0, 0]).slice());
  };

  // ── matriz de flexibilidad F (ndof×ndof): columna = carga unitaria de cuerpo rígido ──
  const F: number[][] = Array.from({ length: ndof }, () => new Array(ndof).fill(0));
  for (let j = 0; j < nf; j++) {
    const f = floors[j];
    for (let c = 0; c < 3; c++) {                       // 0=Ux,1=Uy,2=Rz
      const loads = new Map<number, number[]>();
      for (const n of f.ns) {
        const m = mass(n); const dx = nodes[n][0] - f.cx, dy = nodes[n][1] - f.cy;
        let fx = 0, fy = 0;
        if (c === 0) fx = m / f.Mj;                      // fuerza Ux unitaria (Σ=1)
        else if (c === 1) fy = m / f.Mj;                 // fuerza Uy unitaria
        else { fx = -m * dy / f.Ij; fy = m * dx / f.Ij; } // torque Rz unitario
        loads.set(n, [fx, fy, 0, 0, 0, 0]);
      }
      const q = reduce(solveK(loads));
      for (let r = 0; r < ndof; r++) F[r][3 * j + c] = q[r];
    }
  }
  for (let i = 0; i < ndof; i++) for (let k = i + 1; k < ndof; k++) { const v = (F[i][k] + F[k][i]) / 2; F[i][k] = F[k][i] = v; }

  // ── M_lat (diagonal) + eigen generalizado vía A = √M·F·√M  (λ = 1/ω²) ──
  const Md = new Array(ndof);
  floors.forEach((f, j) => { Md[3 * j] = f.Mj; Md[3 * j + 1] = f.Mj; Md[3 * j + 2] = f.Ij; });
  const sq = Md.map(Math.sqrt);
  const A = F.map((row, i) => row.map((v, k) => sq[i] * v * sq[k]));
  const { val, vec } = jacobiEig(A);                   // val = 1/ω²
  const order = val.map((_, i) => i).sort((a, b) => val[b] - val[a]);  // λ grande = ω chico

  // direcciones de participación: r_x, r_y, r_rz en GDL maestros
  const rX = new Array(ndof).fill(0), rY = new Array(ndof).fill(0), rR = new Array(ndof).fill(0);
  for (let j = 0; j < nf; j++) { rX[3 * j] = 1; rY[3 * j + 1] = 1; rR[3 * j + 2] = 1; }
  const Mtot = (r: number[]) => { let s = 0; for (let i = 0; i < ndof; i++) s += Md[i] * r[i] * r[i]; return s || 1; };
  const MtX = Mtot(rX), MtY = Mtot(rY), MtR = Mtot(rR);

  const frequencies: number[] = [], massParticipation: number[][] = [], modeShapes: number[][] = [];
  const take = Math.min(nVec, ndof);
  let cnt = 0;
  for (const idx of order) {
    if (cnt >= take) break;
    const lam = val[idx]; if (!(lam > 1e-12)) continue;
    const w = 1 / Math.sqrt(lam), fr = w / (2 * Math.PI);
    if (!isFinite(fr) || fr <= 1e-6) continue;
    // φ (GDL maestros) M-normalizado:  φ = √M⁻¹ ψ
    const phi = new Array(ndof); for (let i = 0; i < ndof; i++) phi[i] = vec[i][idx] / sq[i];
    const L = (r: number[]) => { let s = 0; for (let i = 0; i < ndof; i++) s += Md[i] * phi[i] * r[i]; return s; };
    const part = new Array(NDOF).fill(0);
    part[0] = L(rX) * L(rX) / MtX; part[1] = L(rY) * L(rY) / MtY; part[5] = L(rR) * L(rR) / MtR;
    // expandir a forma modal nodal (cuerpo rígido por piso) para el visor
    const shape = zero(N);
    floors.forEach((f, j) => {
      const ux = phi[3 * j], uy = phi[3 * j + 1], rz = phi[3 * j + 2];
      for (const n of f.ns) { const dx = nodes[n][0] - f.cx, dy = nodes[n][1] - f.cy; shape[n][0] = ux - rz * dy; shape[n][1] = uy + rz * dx; }
    });
    frequencies.push(fr); massParticipation.push(part); modeShapes.push(shape.flat()); cnt++;
  }
  return { frequencies, modeShapes, massParticipation, periods: frequencies.map((f) => 1 / f) };
}

// ──────────────── D) EIGEN real (iteración de subespacio de Bathe) ────────────────
const matMul = (A: number[][], B: number[][]): number[][] => {
  const n = A.length, m = B[0].length, p = B.length;
  const C = Array.from({ length: n }, () => new Array(m).fill(0));
  for (let i = 0; i < n; i++) for (let k = 0; k < p; k++) { const a = A[i][k]; if (a) for (let j = 0; j < m; j++) C[i][j] += a * B[k][j]; }
  return C;
};
/** Eigen generalizado simétrico K Q = M Q Λ (pequeño q×q) vía M^(-1/2). */
function genEigSym(K: number[][], M: number[][]): { lam: number[]; Q: number[][] } {
  const q = K.length;
  const { val: dM, vec: U } = jacobiEig(M);                  // M = U dM Uᵀ
  const is = dM.map((v) => 1 / Math.sqrt(Math.max(v, 1e-300)));
  const P = Array.from({ length: q }, () => new Array(q).fill(0));   // P = M^(-1/2)
  for (let i = 0; i < q; i++) for (let j = 0; j < q; j++) { let s = 0; for (let k = 0; k < q; k++) s += U[i][k] * is[k] * U[j][k]; P[i][j] = s; }
  const { val: lam, vec: W } = jacobiEig(matMul(P, matMul(K, P)));   // A = P K P
  return { lam, Q: matMul(P, W) };                            // Q = P W
}
/**
 * Modal por AUTOVECTORES reales (iteración de subespacio, Bathe) — el método EIGEN,
 * no Ritz. Resuelve K·X̄ = M·X con `deform` e itera el subespacio hasta converger a
 * los autovectores exactos. Con masa solo lateral (lateralOnly) reproduce la tabla de
 * ETABS: SumUZ=0 y SumUy≈99% en 12 modos (los modos laterales reales).
 */
export function lateralEigen(
  nodes: Node[], elements: Element[], nodeInputs: any, ei: any, nModes = 12, lateralOnly = true
): any {
  const N = nodes.length;
  const M = lumpedMass(nodes, elements, ei, lateralOnly);
  const supports = nodeInputs.supports;
  const solveK = (F: number[][]) => {
    const loads = new Map<number, number[]>();
    for (let n = 0; n < N; n++) if (F[n].some((v) => v !== 0)) loads.set(n, F[n].slice());
    const def = deform(nodes, elements, { supports, loads }, ei).deformations as Map<number, number[]> | undefined;
    return nodes.map((_, n) => ((def?.get(n) as number[]) || [0, 0, 0, 0, 0, 0]).slice());
  };
  const applyM = (x: number[][]) => x.map((row, n) => row.map((v, d) => M[n][d] * v));
  // DOFs con masa (lateral), del más pesado al más liviano
  const massDofs: Array<[number, number]> = [];
  for (let n = 0; n < N; n++) for (let d = 0; d < 3; d++) if (M[n][d] > 0) massDofs.push([n, d]);
  massDofs.sort((a, b) => M[b[0]][b[1]] - M[a[0]][a[1]]);
  const q = Math.min(2 * nModes + 4, massDofs.length);   // subespacio amplio → no se salta modos cercanos
  if (q < 1) return { frequencies: [], modeShapes: [], massParticipation: [], periods: [] };
  // subespacio inicial: r_x, r_y + vectores unitarios en los DOFs más pesados
  let X: number[][][] = [];
  const rx = zero(N), ry = zero(N);
  for (let n = 0; n < N; n++) { if (M[n][0] > 0) rx[n][0] = 1; if (M[n][1] > 0) ry[n][1] = 1; }
  X.push(rx); X.push(ry);
  for (let k = 0; X.length < q; k++) { const [n, d] = massDofs[k % massDofs.length]; const e = zero(N); e[n][d] = 1; X.push(e); }
  // iteración de subespacio
  let Lam: number[] = [];
  for (let iter = 0; iter < 16; iter++) {
    const Xbar = X.map((xk) => solveK(applyM(xk)));            // K X̄ = M X
    const Kt = Array.from({ length: q }, () => new Array(q).fill(0));
    const Mt = Array.from({ length: q }, () => new Array(q).fill(0));
    for (let i = 0; i < q; i++) for (let j = i; j < q; j++) {
      let kij = 0, mij = 0;
      for (let n = 0; n < N; n++) for (let dd = 0; dd < NDOF; dd++) {
        kij += Xbar[i][n][dd] * M[n][dd] * X[j][n][dd];        // K̃ = X̄ᵀ M X
        mij += Xbar[i][n][dd] * M[n][dd] * Xbar[j][n][dd];     // M̃ = X̄ᵀ M X̄
      }
      Kt[i][j] = Kt[j][i] = kij; Mt[i][j] = Mt[j][i] = mij;
    }
    const { lam, Q } = genEigSym(Kt, Mt);
    const Xnew: number[][][] = Array.from({ length: q }, () => zero(N));   // X = X̄ Q
    for (let kk = 0; kk < q; kk++) for (let j = 0; j < q; j++) { const qjk = Q[j][kk]; if (qjk) for (let n = 0; n < N; n++) for (let dd = 0; dd < NDOF; dd++) Xnew[kk][n][dd] += qjk * Xbar[j][n][dd]; }
    X = Xnew;
    const conv = Lam.length && lam.slice(0, nModes).every((v, i) => Math.abs(v - (Lam[i] ?? 0)) <= 1e-6 * Math.abs(v) + 1e-12);
    Lam = lam;
    if (conv) break;
  }
  const Mt3 = [0, 1, 2].map((d) => massTotal(M, d) || 1);
  const order = Lam.map((_, i) => i).sort((a, b) => Lam[a] - Lam[b]);
  const frequencies: number[] = [], massParticipation: number[][] = [], modeShapes: number[][] = [];
  let cnt = 0;
  for (const idx of order) {
    if (cnt >= nModes) break;
    const w2 = Math.max(Lam[idx], 0); const f = Math.sqrt(w2) / (2 * Math.PI);
    if (!isFinite(f) || f <= 1e-6) continue;
    const phi = X[idx];
    const part = new Array(NDOF).fill(0);
    for (let d = 0; d < 3; d++) { let L = 0; for (let n = 0; n < N; n++) L += M[n][d] * phi[n][d]; part[d] = (L * L) / Mt3[d]; }
    frequencies.push(f); massParticipation.push(part); modeShapes.push(phi.flat()); cnt++;
  }
  return { frequencies, modeShapes, massParticipation, periods: frequencies.map((f) => 1 / f) };
}
