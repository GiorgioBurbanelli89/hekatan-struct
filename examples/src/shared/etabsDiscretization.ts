/**
 * =============================================================================
 *  ETABS-style automatic discretization
 * =============================================================================
 *
 *  ETABS discretiza losas y muros AUTOMÁTICAMENTE por paño usando un tamaño
 *  objetivo típico de 25-50 cm. Si un paño mide 5.0 m de ancho y el usuario
 *  no especifica subdivisiones, ETABS interno malla:
 *    target=0.50 m → 10 elementos (dx=0.500 m)
 *    target=0.25 m → 20 elementos (dx=0.250 m)
 *
 *  Este helper replica ese comportamiento para Hekatan Struct. Usado por
 *  edificio-con-losa, edificio-con-muros y las variantes de edificio que
 *  tienen paneles shell (losas o muros de corte).
 * =============================================================================
 */

export interface DiscretizationResult {
  /** Número de subdivisiones (elementos) a lo largo de la dimensión */
  n: number;
  /** Tamaño real del elemento resultante (L / n) */
  dx: number;
}

export type TargetSize = 0.25 | 0.50 | "fine" | "coarse" | number;

/**
 * Calcula el número de subdivisiones para una dimensión L dada un tamaño
 * objetivo. Redondea al entero MÁS CERCANO garantizando dx ≤ target × 1.25
 * (es decir, nunca un elemento más grande que 1.25× el objetivo).
 *
 * Ejemplos:
 *   etabsDiscretize(5.0, 0.50) → { n: 10, dx: 0.500 }
 *   etabsDiscretize(4.8, 0.50) → { n: 10, dx: 0.480 }
 *   etabsDiscretize(5.0, 0.25) → { n: 20, dx: 0.250 }
 *   etabsDiscretize(3.2, 0.25) → { n: 13, dx: 0.246 }
 *   etabsDiscretize(0.8, 0.50) → { n: 2,  dx: 0.400 }  (mínimo 2 para Q4 válido)
 */
export function etabsDiscretize(L: number, target: TargetSize = 0.50): DiscretizationResult {
  const t = resolveTarget(target);
  // n ideal = L / t; redondeamos UP para asegurar que dx ≤ t
  const nIdeal = L / t;
  let n = Math.max(2, Math.round(nIdeal));    // mínimo 2 para que haya integración Gauss 2×2
  // Si al redondear hacia el entero más cercano el dx resulta > 1.25×target,
  // sumar 1 para garantizar que cada elemento sea razonablemente pequeño.
  if (L / n > t * 1.25) n = Math.ceil(nIdeal);
  return { n, dx: L / n };
}

/** Discretización 2D para losa rectangular Lx × Ly */
export function etabsDiscretize2D(
  Lx: number, Ly: number, target: TargetSize = 0.50,
): { nx: number; ny: number; dx: number; dy: number } {
  const rx = etabsDiscretize(Lx, target);
  const ry = etabsDiscretize(Ly, target);
  return { nx: rx.n, ny: ry.n, dx: rx.dx, dy: ry.dx };
}

function resolveTarget(t: TargetSize): number {
  if (typeof t === "number") return t;
  if (t === "fine")   return 0.25;
  if (t === "coarse") return 0.50;
  return 0.50;
}

/**
 * Options para ParamDef: dropdown con los 3 modos típicos que ETABS expone
 * (grueso/fino/custom). Úsalo así en un ejemplo:
 *
 *   discretizeSlab: { default: 0.50, options: DISCRETIZE_OPTIONS, label: "Discretización losa" }
 *
 * Y luego en build():
 *   const { nx, ny } = etabsDiscretize2D(Lx, Ly, p.discretizeSlab);
 */
export const DISCRETIZE_OPTIONS = {
  "Grueso (50 cm)": 0.50,
  "Medio (30 cm)": 0.30,
  "Fino (25 cm)": 0.25,
  "Muy fino (15 cm)": 0.15,
};
