/**
 * Los end releases al C++ van SIEMPRE con 12 banderas por barra, en el orden de
 * ETABS:
 *
 *   [U1 U2 U3 R1 R2 R3] en el nudo I  +  los mismos seis en el nudo J
 *
 * El modelo de datos admite ademas una forma corta de 6, solo rotaciones
 * —[TI, M2I, M3I, TJ, M2J, M3J]—, que es la que traian los ejemplos viejos.
 * Esta funcion la expande a sus posiciones locales 3,4,5 y 9,10,11.
 *
 * Vive aparte porque la usan los DOS caminos, el estatico y el modal, y ya ha
 * pasado cinco veces que un dato llegue por uno y no por el otro.
 */
export function releasesA12(v: boolean[] | undefined): number[] {
  const out = new Array(12).fill(0);
  if (!v) return out;
  if (v.length >= 12) {
    for (let i = 0; i < 12; i++) out[i] = v[i] ? 1 : 0;
    return out;
  }
  const posiciones = [3, 4, 5, 9, 10, 11];   // TI M2I M3I TJ M2J M3J
  for (let i = 0; i < 6 && i < v.length; i++) if (v[i]) out[posiciones[i]] = 1;
  return out;
}
