/**
 * Lo que un ejemplo resuelto con `plateQ4Solve` tiene que dejar en `nodeInputs` para que
 * «Exportar F2K» (SAFE) saque el MODELO de verdad y no una zapata reconstruida desde
 * nombres de parámetros (6-sep-2026: Guerra ej1-8 y safe-bench-* salían como zapata
 * 1.5×1.5×0.30 sin carga porque el botón leía `Lz`/`P_simple`, que son de zapata-aislada).
 *
 * Convención: plateQ4 usa {w, βx, βy} = dof 0, 1, 2; el modelo de 6 gdl usa
 * [Fx, Fy, Fz, Mx, My, Mz] = 0..5. Traducción 0→2 (UZ), 1→3 (RX), 2→4 (RY), la misma que
 * los ejemplos ya usan para dibujar las flechas de carga (`dofToViewer`).
 *
 *  - `springs`: muelles Winkler nodales, los MISMOS que recibió el solver (kN/m, kN·m/rad).
 *  - `loadsSolver`: las cargas que recibió el solver (columna + peso propio), no las de
 *    visualización, que dejan el peso propio fuera para no llenar el visor de flechas.
 *    `exportF2k` prefiere `loadsSolver` a `loads` si existe.
 */
type Nodal = { node: number; dof: number; value: number };
type Muelle = { node: number; dof: number; k: number };
type F6 = [number, number, number, number, number, number];

const PLATE_A_6GDL = [2, 3, 4];

export function f2kDelPlateQ4(springs: Muelle[], pointLoads: Nodal[]) {
  const loadsSolver = new Map<number, F6>();
  for (const pl of pointLoads) {
    const c = loadsSolver.get(pl.node) ?? ([0, 0, 0, 0, 0, 0] as F6);
    c[PLATE_A_6GDL[pl.dof] ?? pl.dof] += pl.value;
    loadsSolver.set(pl.node, c);
  }
  return {
    springs: springs.map((s) => ({ node: s.node, dof: PLATE_A_6GDL[s.dof] ?? s.dof, k: s.k })),
    loadsSolver,
  };
}
