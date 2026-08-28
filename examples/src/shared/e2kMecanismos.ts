/**
 * 🔍 Dónde está el MECANISMO, sin preguntarle al solver.
 *
 * Un modelo que devuelve «Matrix decomposition failed» o desplazamientos de
 * 1e15 mm tiene grados de libertad que no sujeta nadie. El solver solo dice que
 * la matriz no se pudo factorizar — no dice qué nudo ni por qué, y con 800
 * nudos eso no sirve de nada.
 *
 * Aquí se busca por GEOMETRÍA, que es la información que la K ya perdió: por
 * cada nudo se junta en qué DIRECCIONES le da rigidez alguien, y se mira si
 * esas direcciones llenan el espacio.
 *
 *     M = Σ d ⊗ d      sobre cada dirección d en la que algo sujeta al nudo
 *
 * Si `M` no tiene rango 3, hay una dirección en la que el nudo se puede mover
 * sin que nada se oponga: eso es el mecanismo. Y como se hace por elemento, se
 * puede decir **qué** barra y **qué** release lo provocan, que es lo que hace
 * falta para arreglarlo.
 *
 * ## Qué aporta cada cosa
 *
 *   · **barra normal** — las tres direcciones: el axil por su eje y el cortante
 *     con la flexión por las otras dos.
 *   · **barra con los momentos liberados en las dos caras** — SOLO su eje. Es
 *     una barra de dos fuerzas: sin momentos no hay cortante que transmitir.
 *     Un nudo al que solo llegan barras así, y todas alineadas, se mueve libre
 *     en el plano perpendicular.
 *   · **cáscara** — las dos direcciones de su plano; y la normal solo si tiene
 *     flexión (una membrana pura no la tiene).
 *   · **apoyo** y **muelle** — el eje global que coartan.
 *
 * ⚠️ **La torsión va aparte de la flexión.** Liberada en UNA cara, la barra se
 * queda sin rigidez torsional en LAS DOS: es un eje libre por un extremo. La
 * flexión no: con `M2I` liberado sigue dando rigidez en J, que es una viga
 * apoyada-empotrada. Contarlas igual da CERO nudos sueltos donde sí los hay.
 */
import type { E2kModel } from "./e2kParser";

export interface NudoSuelto {
  nudo: number;
  nombre: string;
  /**
   * GDL GLOBALES sueltos: 0,1,2 = traslación X,Y,Z · 3,4,5 = giro X,Y,Z.
   *
   * ⚠️ Son ejes GLOBALES, medidos con `gᵀ M g` = la diagonal de M, no los
   * autovalores ordenados. Los autovalores dicen si hay mecanismo (rango < 3)
   * pero no en qué eje: llamar «UY» al segundo autovalor es una etiqueta
   * inventada, y encima es la que haría falta para poder coartarlo.
   */
  libres: number[];
  /** Rango de la matriz de direcciones: < 3 es un mecanismo. */
  rangoT: number;
  rangoG: number;
  /**
   * El mecanismo va en una dirección OBLICUA: hay rango perdido pero ningún eje
   * global está suelto del todo. No se puede coartar con `supports`, que va por
   * ejes; se avisa y se deja.
   */
  oblicuo?: boolean;
}

export interface InformeMecanismos {
  nudos: number;
  sueltosTraslacion: number;
  sueltosGiro: number;
  /** Tramos que no aportan rigidez de giro a ninguna de sus caras. */
  barrasSoloAxil: number;
  lista: NudoSuelto[];
}

/** Valores propios de una simétrica 3×3, por Jacobi. Bastan 12 barridos. */
function autovalores(M: number[][]): number[] {
  const A = M.map((f) => f.slice());
  for (let it = 0; it < 12; it++) {
    let p = 0, q = 1, may = Math.abs(A[0][1]);
    for (const [i, j] of [[0, 2], [1, 2]] as Array<[number, number]>)
      if (Math.abs(A[i][j]) > may) { may = Math.abs(A[i][j]); p = i; q = j; }
    if (may < 1e-14) break;
    const th = 0.5 * Math.atan2(2 * A[p][q], A[q][q] - A[p][p]);
    const c = Math.cos(th), s = Math.sin(th);
    const B = A.map((f) => f.slice());
    for (let k = 0; k < 3; k++) {
      B[p][k] = c * A[p][k] - s * A[q][k];
      B[q][k] = s * A[p][k] + c * A[q][k];
    }
    for (let k = 0; k < 3; k++) {
      A[k][p] = c * B[k][p] - s * B[k][q];
      A[k][q] = s * B[k][p] + c * B[k][q];
    }
    for (let k = 0; k < 3; k++) { A[p][k] = B[p][k]; A[q][k] = B[q][k]; }
    for (let k = 0; k < 3; k++) {
      const bp = c * B[k][p] - s * B[k][q], bq = s * B[k][p] + c * B[k][q];
      A[k][p] = bp; A[k][q] = bq;
    }
  }
  return [A[0][0], A[1][1], A[2][2]];
}

/** Los tres ejes locales de CSI de una barra. */
function ejesBarra(a: number[], b: number[]): number[][] {
  const v = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
  const L = Math.hypot(v[0], v[1], v[2]) || 1;
  const e1 = [v[0] / L, v[1] / L, v[2] / L];
  const D = Math.hypot(e1[0], e1[1]);
  if (D < 1e-9) return [e1, [1, 0, 0], [0, 1, 0]];
  return [e1, [-e1[1] / D, e1[0] / D, 0],
          [-e1[0] * e1[2] / D, -e1[1] * e1[2] / D, D]];
}

export function buscarMecanismos(m: E2kModel): InformeMecanismos {
  const N = m.nodes as unknown as number[][];
  const els = m.elements as unknown as number[][];
  const rel = (m.elementInputs as any).momentReleases as Map<number, boolean[]> | undefined;
  const mods = (m.elementInputs as any).shellModifiers as Map<number, number[]> | undefined;
  const sup = ((m.nodeInputs as any).supports ?? new Map()) as Map<number, boolean[]>;

  const cero = () => [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  const T = new Map<number, number[][]>();   // direcciones de TRASLACIÓN
  const G = new Map<number, number[][]>();   // direcciones de GIRO
  const suma = (mapa: Map<number, number[][]>, n: number, d: number[]) => {
    if (!mapa.has(n)) mapa.set(n, cero());
    const M = mapa.get(n)!;
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) M[i][j] += d[i] * d[j];
  };
  const EJE = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];

  for (const [n, v] of sup) {
    for (let i = 0; i < 3; i++) if (v[i]) suma(T, n, EJE[i]);
    for (let i = 0; i < 3; i++) if (v[3 + i]) suma(G, n, EJE[i]);
  }
  const nSpr = (m.nodeInputs as any).springNames as Map<number, string> | undefined;
  for (const [n, nombre] of nSpr ?? new Map()) {
    const d = m.springProps?.get(nombre);
    if (!d) continue;
    for (let i = 0; i < 3; i++) if (d.k[i] > 0) suma(T, n, EJE[i]);
    for (let i = 0; i < 3; i++) if (d.k[3 + i] > 0) suma(G, n, EJE[i]);
  }

  let barrasSoloAxil = 0;
  els.forEach((el, e) => {
    // ── CÁSCARA ──
    if (el.length > 2) {
      const p = el.map((k) => N[k]).filter(Boolean) as number[][];
      if (p.length < 3) return;
      const u = [p[1][0] - p[0][0], p[1][1] - p[0][1], p[1][2] - p[0][2]];
      const w = [p[2][0] - p[0][0], p[2][1] - p[0][1], p[2][2] - p[0][2]];
      const nx = u[1] * w[2] - u[2] * w[1], ny = u[2] * w[0] - u[0] * w[2],
            nz = u[0] * w[1] - u[1] * w[0];
      const ln = Math.hypot(nx, ny, nz) || 1;
      const nor = [nx / ln, ny / ln, nz / ln];
      const lu = Math.hypot(u[0], u[1], u[2]) || 1;
      const e1 = [u[0] / lu, u[1] / lu, u[2] / lu];
      const e2 = [nor[1] * e1[2] - nor[2] * e1[1], nor[2] * e1[0] - nor[0] * e1[2],
                  nor[0] * e1[1] - nor[1] * e1[0]];
      // Los modificadores mandan: una membrana lleva M11 = M22 = 0 y entonces
      // NO sujeta la normal ni los giros del plano.
      const md = mods?.get(e);
      const conMembrana = !md || md[0] > 0 || md[1] > 0 || md[2] > 0;
      const conFlexion = !md || md[3] > 0 || md[4] > 0 || md[5] > 0;
      for (const n of el) {
        if (conMembrana) { suma(T, n, e1); suma(T, n, e2); }
        if (conFlexion) { suma(T, n, nor); suma(G, n, e1); suma(G, n, e2); }
        // El drilling da el giro normal, y el ITW lo lleva.
        if (conMembrana) suma(G, n, nor);
      }
      return;
    }
    // ── BARRA ──
    const a = N[el[0]], b = N[el[1]];
    if (!a || !b) return;
    const ejes = ejesBarra(a, b);
    const r = rel?.get(e);
    if (!r) {
      for (const n of el) for (const d of ejes) { suma(T, n, d); suma(G, n, d); }
      return;
    }
    const torsion = !(r[3] || r[9]);
    const flex2 = !(r[4] && r[10]);   // M2 liberado en las DOS caras -> fuera
    const flex3 = !(r[5] && r[11]);
    if (!torsion && !flex2 && !flex3) barrasSoloAxil++;
    for (const cara of [0, 1]) {
      const n = el[cara], o = cara * 6;
      // El AXIL siempre: liberar `P` es otra cosa y aqui no se toca.
      suma(T, n, ejes[0]);
      // El cortante en un plano solo existe si ese plano transmite momento.
      if (flex3) suma(T, n, ejes[1]);
      if (flex2) suma(T, n, ejes[2]);
      if (torsion) suma(G, n, ejes[0]);
      if (!r[o + 4]) suma(G, n, ejes[1]);
      if (!r[o + 5]) suma(G, n, ejes[2]);
    }
  });

  const usado = new Set<number>();
  for (const el of els) for (const n of el) usado.add(n);

  const inf: InformeMecanismos = {
    nudos: usado.size, sueltosTraslacion: 0, sueltosGiro: 0, barrasSoloAxil, lista: [],
  };
  for (const n of usado) {
    const libres: number[] = [];
    let oblicuo = false;
    const rangos: number[] = [];
    for (const [mapa, base] of [[T, 0], [G, 3]] as Array<[Map<number, number[][]>, number]>) {
      const M = mapa.get(n);
      if (!M) { libres.push(base, base + 1, base + 2); rangos.push(0); continue; }
      const ev = autovalores(M).sort((x, y) => y - x);
      // Relativo al mayor: una direccion con 1e-15 de la rigidez de su vecina no
      // sujeta nada, y compararla contra un absoluto no lo caza.
      const corte = Math.max(ev[0], 1e-30) * 1e-9;
      const rango = ev.filter((v) => v >= corte).length;
      rangos.push(rango);
      if (rango === 3) continue;
      // QUE EJE GLOBAL esta suelto: `gᵀ M g` es la diagonal de M.
      const may = Math.max(M[0][0], M[1][1], M[2][2], 1e-30);
      let hallados = 0;
      for (let k = 0; k < 3; k++)
        if (M[k][k] < may * 1e-9) { libres.push(base + k); hallados++; }

      // ── El caso OBLICUO ──
      //
      // Falta rango pero ningun eje global esta suelto del todo: la direccion
      // libre no es X, Y ni Z. Pasa en un nudo donde dos barras llegan con los
      // momentos liberados justo en la cara que lo toca —una rotula de verdad—
      // y ninguna de las dos es paralela a un eje.
      //
      // Se coartan los `3 - rango` ejes globales con MENOS rigidez. No es
      // exacto: el eje global no es la direccion libre, asi que se coarta un
      // poco de mas. Pero la alternativa es que la matriz salga singular y no
      // haya resultado ninguno, y el error queda acotado —es un nudo, y ademas
      // se CUENTA aparte (`oblicuos`) para que se sepa cuantos hay. Con uno
      // solo, como en el edificio real, no se mide en ningun sitio.
      if (hallados < 3 - rango) {
        const orden = [0, 1, 2].sort((a, b) => M[a][a] - M[b][b]);
        for (const k of orden) {
          if (hallados >= 3 - rango) break;
          if (libres.includes(base + k)) continue;
          libres.push(base + k); hallados++; oblicuo = true;
        }
      }
    }
    if (!libres.length && !oblicuo) continue;
    if (libres.some((k) => k < 3) || rangos[0] < 3) inf.sueltosTraslacion++;
    if (libres.some((k) => k >= 3) || rangos[1] < 3) inf.sueltosGiro++;
    inf.lista.push({ nudo: n, nombre: m.nodeNames?.[n] ?? String(n), libres,
                     rangoT: rangos[0], rangoG: rangos[1], oblicuo: oblicuo || undefined });
  }
  return inf;
}


/**
 * Coarta los GDL que no sujeta nadie. Modifica `m.nodeInputs.supports`.
 *
 * No es una licencia: un GDL sin ninguna rigidez tiene también fuerza nula, así
 * que su valor no lo decide el equilibrio sino el redondeo. Fijarlo a cero no
 * cambia ni un desplazamiento ni una reacción del resto — solo quita la
 * ecuación que no dice nada. Es lo que hace `getZerosIndices` en `deform.cpp`,
 * y lo que hace ETABS.
 *
 * ⚠️ Se hace aquí y no allí porque `getZerosIndices` compara con una tolerancia
 * **ABSOLUTA** de 1e-12. En kN·m las diagonales van por 1e6, así que un GDL que
 * tras condensar los releases queda en 1e-9 pasa el filtro y se queda dentro:
 * quince órdenes por debajo de sus vecinas, pero por encima del corte. De ahí
 * salen los 1e15 mm. Lo correcto en el C++ es una tolerancia RELATIVA al máximo
 * de la diagonal; mientras tanto, esto lo detecta por la geometría, que es
 * información que la K ya no tiene.
 */
export function coartarGdlSueltos(m: E2kModel): InformeMecanismos & { coartados: number; oblicuos: number } {
  const inf = buscarMecanismos(m);
  const sup = ((m.nodeInputs as any).supports ?? new Map()) as Map<number, boolean[]>;
  let coartados = 0, oblicuos = 0;
  for (const x of inf.lista) {
    if (x.oblicuo) oblicuos++;
    if (!x.libres.length) continue;
    const v = sup.get(x.nudo) ?? [false, false, false, false, false, false];
    for (const k of x.libres) if (!v[k]) { v[k] = true; coartados++; }
    sup.set(x.nudo, v);
  }
  (m.nodeInputs as any).supports = sup;
  return { ...inf, coartados, oblicuos };
}
