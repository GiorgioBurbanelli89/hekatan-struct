/**
 * 🧪 LA TUBERÍA de un modelo importado, en un solo sitio.
 *
 * Antes esto vivía dos veces: una en `cli/riochico_dos_modelos.mjs` y otra, a
 * medias, en el ejemplo del workspace. Y daban números distintos — el CLI
 * −10.75 mm y la app cero—, que es exactamente lo que pasa cuando hay dos
 * caminos: no se puede decir «Hekatan da esto» porque depende de por dónde
 * entres. Ahora hay una tubería y la usan los dos.
 *
 * Los pasos, en orden, y cada uno con su porqué:
 *
 *   1. **COSER** — el `.e2k` describe los OBJETOS que dibujó el proyectista, no
 *      la malla: sus líneas traen `AUTOMESH` y `MESHATINTERSECTIONS`. Sin esto
 *      el modelo se ve entero y no resuelve.
 *   2. **MUELLES** — el balasto de las vigas y losas de cimentación. Sin él una
 *      cimentación Winkler no llega a ningún apoyo.
 *   3. **COARTAR** los GDL que no sujeta nadie. Es lo que hace el solver (y
 *      ETABS); aquí con tolerancia RELATIVA, que es la que hace falta.
 *   4. **PODAR** los trozos que no llegan a ningún apoyo por traslación.
 *   5. **APARTAR LOS MECANISMOS** que quedan, por regularización.
 *
 * Los pasos 4 y 5 **quitan estructura**, así que el informe dice cuánta. Un
 * resultado con 200 nudos apartados no es el mismo modelo, y quien lo lea tiene
 * que saberlo.
 */
import type { E2kModel } from "./e2kParser";
import { coserModelo } from "./e2kCoser";
import { muellesDelModelo, type MuelleNodal } from "./e2kMuelles";
import { coartarGdlSueltos } from "./e2kMecanismos";

export interface OpcionesAnalisis {
  /**
   * Cota por debajo de la cual se quita todo y se EMPOTRA lo que quede en ella.
   * `undefined` = con cimentación, tal como viene el fichero.
   */
  cortarBajo?: number;
  /** Quitar los trozos que no llegan a ningún apoyo. */
  podar?: boolean;
  /** Vueltas máximas apartando modos de mecanismo. 0 = no apartar. */
  vueltasMecanismo?: number;
}

export interface InformeAnalisis {
  nudos: number; barras: number; shells: number;
  apoyos: number; muelles: number;
  empotrados: number;
  /** Nudos que se han quitado, y por qué. */
  podados: number; deMecanismos: number; vueltas: number;
  trozosSueltos: number;
  /** Carga vertical aplicada, y de dónde sale la reacción. */
  cargaZ: number; reaccionApoyos: number; reaccionMuelles: number;
}

function clonarMapas(o: Record<string, unknown>): Record<string, unknown> {
  const n: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(o))
    n[k] = v instanceof Map
      ? new Map([...v].map(([a, b]) => [a, Array.isArray(b) ? b.slice() : b]))
      : v;
  return n;
}

/** Se queda con los elementos que pasan el filtro, reindexando `elementInputs`. */
function filtrar(m: E2kModel, quedarse: (el: number[], i: number) => boolean): E2kModel {
  const idx: number[] = [];
  const els = (m.elements as unknown as number[][]).filter((el, i) => {
    if (quedarse(el, i)) { idx.push(i); return true; }
    return false;
  });
  const ei: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(m.elementInputs as Record<string, unknown>)) {
    if (!(v instanceof Map)) { ei[k] = v; continue; }
    const o = new Map();
    idx.forEach((viejo, j) => { if (v.has(viejo)) o.set(j, v.get(viejo)); });
    ei[k] = o;
  }
  return { ...m, elements: els as unknown as typeof m.elements,
           elementInputs: ei as typeof m.elementInputs,
           nodeInputs: clonarMapas(m.nodeInputs as unknown as Record<string, unknown>) as typeof m.nodeInputs };
}

/** Los nudos de los trozos que no llegan a un apoyo POR TRASLACIÓN. */
function nudosSueltos(m: E2kModel, muelles: MuelleNodal[]): Set<number> {
  const ady = new Map<number, number[]>();
  for (const el of m.elements as unknown as number[][])
    for (const a of el) for (const b of el)
      if (a !== b) { if (!ady.has(a)) ady.set(a, []); ady.get(a)!.push(b); }
  const usado = new Set<number>();
  for (const el of m.elements as unknown as number[][]) for (const n of el) usado.add(n);
  // ⚠️ Solo las TRASLACIONES. Un nudo con los giros coartados sigue pudiendo
  // trasladarse, así que contarlo como anclado deja dentro trozos que flotan.
  const anclado = new Set<number>();
  for (const [k, v] of ((m.nodeInputs as any).supports ?? new Map()) as Map<number, boolean[]>)
    if (v[0] || v[1] || v[2]) anclado.add(k);
  for (const s of muelles) if (s.dof < 3) anclado.add(s.node);
  const visto = new Set<number>(); const fuera = new Set<number>();
  for (const s of usado) {
    if (visto.has(s)) continue;
    const pila = [s], c: number[] = [];
    visto.add(s);
    while (pila.length) {
      const v = pila.pop()!;
      c.push(v);
      for (const w of ady.get(v) ?? []) if (!visto.has(w)) { visto.add(w); pila.push(w); }
    }
    if (!c.some((x) => anclado.has(x))) for (const x of c) fuera.add(x);
  }
  return fuera;
}

/** El modelo renumerado sin huérfanos, listo para `deform`. */
export function aparaSolver(m: E2kModel, muelles: MuelleNodal[]) {
  const usado = new Set<number>();
  for (const el of m.elements as unknown as number[][]) for (const n of el) usado.add(n);
  const mapa = new Map<number, number>();
  const nodes: number[][] = [];
  (m.nodes as unknown as number[][]).forEach((n, i) => {
    if (usado.has(i)) { mapa.set(i, nodes.length); nodes.push(n); }
  });
  const elements = (m.elements as unknown as number[][]).map((el) => el.map((i) => mapa.get(i)!));
  const rm = (mm: unknown) => {
    if (!(mm instanceof Map)) return mm;
    const o = new Map();
    for (const [i, v] of mm) { const j = mapa.get(i as number); if (j !== undefined) o.set(j, v); }
    return o;
  };
  const ni: Record<string, unknown> = {};
  for (const k of Object.keys(m.nodeInputs as Record<string, unknown>))
    ni[k] = rm((m.nodeInputs as Record<string, unknown>)[k]);
  const spr = muelles.map((s) => ({ ...s, node: mapa.get(s.node)! }))
                     .filter((s) => s.node !== undefined);
  return { nodes, elements, nodeInputs: ni, elementInputs: m.elementInputs, muelles: spr, mapa };
}

/**
 * Prepara el modelo y devuelve lo que hay que darle a `deform`, más el informe.
 *
 * `resolver` es el `deform` del motor; se pasa como argumento para que este
 * módulo no dependa de `hekatan-fem` y pueda usarse igual desde el workspace y
 * desde un CLI.
 */
export function prepararAnalisis(
  base: E2kModel,
  op: OpcionesAnalisis,
  resolver: (n: any, e: any, ni: any, ei: any, spr?: any) => any,
): { listo: ReturnType<typeof aparaSolver>; informe: InformeAnalisis } {
  const m0 = { ...base, nodeInputs: clonarMapas(base.nodeInputs as any) as typeof base.nodeInputs };
  coserModelo(m0);

  let m = m0;
  let empotrados = 0;
  let conMuelles = true;

  // ── Sin cimentación: cortar y empotrar ──
  if (op.cortarBajo !== undefined) {
    const z = op.cortarBajo;
    const N = m.nodes as unknown as number[][];
    m = filtrar(m, (el) => !el.some((n) => N[n][2] < z - 1e-6));
    const usado = new Set<number>();
    for (const el of m.elements as unknown as number[][]) for (const n of el) usado.add(n);
    const sup = ((m.nodeInputs as any).supports ?? new Map()) as Map<number, boolean[]>;
    for (const n of usado) {
      if (N[n][2] > z + 1e-6) continue;
      sup.set(n, [true, true, true, true, true, true]);
      empotrados++;
    }
    (m.nodeInputs as any).supports = sup;
    // Sin cimentación no hay balasto: los muelles se van con ella.
    (m.elementInputs as any) = { ...(m.elementInputs as any), springNames: new Map() };
    (m.nodeInputs as any).springNames = new Map();
    conMuelles = false;
  }

  let muelles = conMuelles ? muellesDelModelo(m).muelles : [];
  const sueltos0 = nudosSueltos(m, muelles);
  const inf: InformeAnalisis = {
    nudos: 0, barras: 0, shells: 0, apoyos: 0, muelles: 0, empotrados,
    podados: 0, deMecanismos: 0, vueltas: 0, trozosSueltos: sueltos0.size,
    cargaZ: 0, reaccionApoyos: 0, reaccionMuelles: 0,
  };

  if (op.podar && sueltos0.size) {
    m = filtrar(m, (el) => !el.some((n) => sueltos0.has(n)));
    inf.podados = sueltos0.size;
    muelles = conMuelles ? muellesDelModelo(m).muelles : [];
  }

  coartarGdlSueltos(m);

  // ── Apartar los modos de mecanismo ──
  //
  // Regularización de Tikhonov: un muelle de 1e-8 × la rigidez típica en todos
  // los GDL quita la singularidad, y lo que entonces se mueve 100 veces la
  // mediana es el mecanismo. Se aparta y se repite.
  const vueltasMax = op.vueltasMecanismo ?? 0;
  const fuera = new Set<number>();
  for (let v = 0; v < vueltasMax; v++) {
    const l = aparaSolver(m, muelles);
    let sano = false;
    try {
      const d = resolver(l.nodes, l.elements, l.nodeInputs, l.elementInputs, l.muelles);
      let uz = 0;
      for (const [, u] of (d?.deformations ?? [])) if (Math.abs(u[2]) > Math.abs(uz)) uz = u[2];
      sano = (d?.deformations?.size ?? 0) > 0 && Math.abs(uz) < 1;   // menos de 1 m
    } catch { sano = false; }
    if (sano) break;

    const ks: number[] = [];
    (m.elements as unknown as number[][]).forEach((el, i) => {
      if (el.length !== 2) return;
      const a = (m.nodes as unknown as number[][])[el[0]], b = (m.nodes as unknown as number[][])[el[1]];
      const L = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      const E = (m.elementInputs as any).elasticities?.get(i);
      const A = (m.elementInputs as any).areas?.get(i);
      if (E > 0 && A > 0 && L > 0) ks.push(E * A / L);
    });
    ks.sort((x, y) => x - y);
    const kReg = (ks[Math.floor(ks.length / 2)] || 1e6) * 1e-8;

    const l2 = aparaSolver(m, muelles);
    const reg = l2.muelles.slice();
    for (let n = 0; n < l2.nodes.length; n++)
      for (let g = 0; g < 6; g++) reg.push({ node: n, dof: g, k: kReg });
    const loads = new Map((l2.nodeInputs as any).loads ?? []);
    for (let n = 0; n < l2.nodes.length; n++) {
      const u = (loads.get(n) as number[]) ?? [0, 0, 0, 0, 0, 0];
      loads.set(n, [u[0] + 1, u[1] + 1, u[2] - 10, u[3], u[4], u[5]]);
    }
    let d;
    try { d = resolver(l2.nodes, l2.elements, { ...l2.nodeInputs, loads }, l2.elementInputs, reg); }
    catch { break; }
    const inv = new Map<number, number>();
    l2.mapa.forEach((j, i) => inv.set(j, i));
    const filas: Array<{ orig: number; m: number }> = [];
    for (const [n, u] of (d?.deformations ?? [])) {
      const t = Math.hypot(u[0], u[1], u[2]), g = Math.hypot(u[3], u[4], u[5]);
      filas.push({ orig: inv.get(n)!, m: Math.max(t, g) });
    }
    if (!filas.length) break;
    filas.sort((a, b) => b.m - a.m);
    const mediana = filas[Math.floor(filas.length / 2)].m;
    const modo = filas.filter((f) => f.m > mediana * 100);
    if (!modo.length) break;
    for (const f of modo) fuera.add(f.orig);
    m = filtrar(m, (el) => !el.some((n) => fuera.has(n)));
    muelles = conMuelles ? muellesDelModelo(m).muelles : [];
    coartarGdlSueltos(m);
    inf.vueltas = v + 1;
  }
  inf.deMecanismos = fuera.size;

  const listo = aparaSolver(m, muelles);
  const els = listo.elements;
  inf.nudos = listo.nodes.length;
  inf.barras = els.filter((e) => e.length === 2).length;
  inf.shells = els.length - inf.barras;
  inf.muelles = listo.muelles.length;
  const sup = (listo.nodeInputs as any).supports as Map<number, boolean[]> | undefined;
  inf.apoyos = sup ? [...sup].filter(([, v]) => v[0] || v[1] || v[2]).length : 0;
  for (const [, v] of (((listo.nodeInputs as any).loads ?? new Map()) as Map<number, number[]>))
    inf.cargaZ += v[2];

  return { listo, informe: inf };
}

/**
 * La reacción vertical, contando LOS MUELLES.
 *
 * `deform` no devuelve la fuerza de los muelles, así que sumar solo
 * `reactions` en un modelo sobre Winkler da un descuadre enorme y parece que
 * falta carga: lo que falta es contar el terreno, `F = k·u`.
 */
export function reaccionVertical(
  d: any, muelles: MuelleNodal[],
): { apoyos: number; muelles: number } {
  let apoyos = 0;
  for (const [, v] of (d?.reactions ?? [])) apoyos += v[2];
  let porMuelles = 0;
  for (const s of muelles) {
    if (s.dof !== 2) continue;
    const u = d?.deformations?.get(s.node);
    if (u) porMuelles += -s.k * u[2];
  }
  return { apoyos, muelles: porMuelles };
}
