/**
 * Calcula un rango razonable para el colormap basado en percentiles, evitando
 * que outliers (singularidades en concentraciones de carga) saturen el rango
 * y hagan que el resto del modelo se vea de un solo color.
 */

export function colormapPercentileRange(
  vmMap: Map<number, number[]> | undefined,
  percentile: number = 90,
  cap?: number,
): [number, number] {
  if (!vmMap || vmMap.size === 0) return [0, 1];
  const all: number[] = [];
  for (const arr of vmMap.values()) {
    for (const v of arr) {
      const a = Math.abs(v);
      if (Number.isFinite(a)) all.push(a);
    }
  }
  if (all.length === 0) return [0, 1];
  all.sort((a, b) => a - b);
  const idx = Math.floor((percentile / 100) * (all.length - 1));
  let max = all[idx];
  if (cap && max > cap) max = cap;
  return [0, max];
}
