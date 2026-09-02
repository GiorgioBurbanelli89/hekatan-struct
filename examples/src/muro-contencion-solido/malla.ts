/**
 * Muro de contención en VOLADIZO mallado con SÓLIDOS H8 — la malla, pura.
 *
 * La misma función la usan la página (main.ts), el volcado para SAP2000
 * (cli/muro_solido_dump.mjs) y el caso de la suite: así los tres comparan la
 * MISMA malla nudo a nudo, que es la única comparación que mide el solver.
 *
 * Geometría (sección x–z, extruida L en y):
 *
 *        x = 0     toe      toe+t          toe+t+heel = B
 *         ┌────────┬────┐
 *         │        │ ▲  │  ← alzado (stem), alto H, canto t
 *         │        │ │  │
 *   z=tf ─┼────────┴─┴──┴──────────┐
 *         │  zapata (toe + t + heel), canto tf │
 *   z=0 ──┴──────────────────────────────────┘  ← base apoyada (fija)
 *
 * Carga: empuje activo de Rankine sobre la CARA TRASERA del alzado (x = toe + t,
 * del lado del relleno), p(z) = Ka·(γ·(H − z') + q0), hacia −x. Se reparte a los
 * nudos por caras: p en el centroide de cada cara × área / 4 (carga consistente
 * de una cara bilineal con p uniforme por cara). El peso propio y el relleno
 * sobre el talón NO van: lo que se valida es el sólido bajo empuje lateral.
 *
 * Numeración H8 de Hekatan: 0-1-2-3 la cara inferior antihoraria vista desde +z,
 * 4-5-6-7 la superior. (SAP2000 usa orden tensorial: 3↔4 y 7↔8 cruzados; lo hace
 * el exportador, no esta malla.)
 */
export type Vec3 = [number, number, number];
export type Hex8 = [number, number, number, number, number, number, number, number];

export interface MuroSolidoParams {
  H: number;      // alto del alzado (m), sobre la zapata
  t: number;      // canto del alzado (m)
  toe: number;    // puntera (m), delante del alzado (x menor)
  heel: number;   // talón (m), detrás del alzado (lado del relleno)
  tf: number;     // canto de la zapata (m)
  L: number;      // longitud del muro en y (m)
  ms: number;     // tamaño de elemento (m)
  E: number;      // kN/m²
  nu: number;
  Ka: number;     // coeficiente de empuje activo
  gamma: number;  // peso del relleno (kN/m³)
  q0: number;     // sobrecarga en superficie (kN/m²)
}

export interface MuroSolidoMalla {
  nodes: Vec3[];
  elements: Hex8[];
  supports: Map<number, [boolean, boolean, boolean]>;
  loads: Map<number, [number, number, number]>;
  /** nudos de la cara trasera del alzado (donde entra el empuje) */
  caraTrasera: number[];
  /** nudo de la coronación, en el centro de la longitud y en la cara trasera */
  nudoCoronacion: number;
  info: { nx: number; ny: number; nz: number; empujeTotal: number };
}

const rd = (v: number) => Math.round(v * 1e6) / 1e6;

export function mallaMuroSolido(p: MuroSolidoParams): MuroSolidoMalla {
  const B = p.toe + p.t + p.heel, Ztop = p.tf + p.H;
  const nx = Math.max(1, Math.round(B / p.ms)), ny = Math.max(1, Math.round(p.L / p.ms)), nz = Math.max(1, Math.round(Ztop / p.ms));
  const dx = B / nx, dy = p.L / ny, dz = Ztop / nz;
  // el alzado y la zapata caen en columnas/filas ENTERAS de la rejilla
  const i0 = Math.round(p.toe / dx), i1 = Math.round((p.toe + p.t) / dx), kf = Math.round(p.tf / dz);
  const dentro = (i: number, k: number) => k < kf || (i >= i0 && i < i1);   // elemento (i,k) es material
  const ids = new Map<string, number>(); const nodes: Vec3[] = [];
  const nodo = (i: number, j: number, k: number) => {
    const key = `${i},${j},${k}`; let id = ids.get(key);
    if (id === undefined) { id = nodes.length; ids.set(key, id); nodes.push([rd(i * dx), rd(j * dy), rd(k * dz)]); }
    return id;
  };
  const elements: Hex8[] = [];
  for (let k = 0; k < nz; k++) for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    if (!dentro(i, k)) continue;
    elements.push([nodo(i, j, k), nodo(i + 1, j, k), nodo(i + 1, j + 1, k), nodo(i, j + 1, k),
                   nodo(i, j, k + 1), nodo(i + 1, j, k + 1), nodo(i + 1, j + 1, k + 1), nodo(i, j + 1, k + 1)]);
  }
  // apoyos: la base de la zapata, fija
  const supports = new Map<number, [boolean, boolean, boolean]>();
  for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) { const id = ids.get(`${i},${j},0`); if (id !== undefined) supports.set(id, [true, true, true]); }
  // empuje sobre la cara trasera del alzado: x = i1*dx, z de kf*dz a Ztop
  const loads = new Map<number, [number, number, number]>(); let empujeTotal = 0;
  const caraTrasera = new Set<number>();
  for (let k = kf; k < nz; k++) for (let j = 0; j < ny; j++) {
    const zc = (k + 0.5) * dz - p.tf;                // profundidad medida desde la coronación: H - zc
    const pres = p.Ka * (p.gamma * (p.H - zc) + p.q0);   // kN/m²
    const F = pres * dy * dz; empujeTotal += F;
    for (const [jj, kk] of [[j, k], [j + 1, k], [j + 1, k + 1], [j, k + 1]] as [number, number][]) {
      const id = ids.get(`${i1},${jj},${kk}`)!; caraTrasera.add(id);
      const f = loads.get(id) ?? [0, 0, 0]; f[0] -= F / 4; loads.set(id, f);
    }
  }
  const jm = Math.round(ny / 2);
  const nudoCoronacion = ids.get(`${i1},${jm},${nz}`)!;
  return { nodes, elements, supports, loads, caraTrasera: [...caraTrasera], nudoCoronacion, info: { nx, ny, nz, empujeTotal } };
}

/** Los valores por defecto del ejemplo (los mismos en la página, el volcado y el test). */
export const MURO_SOLIDO_DEFAULT: MuroSolidoParams = {
  H: 4.0, t: 0.4, toe: 0.6, heel: 1.6, tf: 0.4, L: 1.0, ms: 0.2,
  E: 2.5e7, nu: 0.2, Ka: 1 / 3, gamma: 18, q0: 10,
};
