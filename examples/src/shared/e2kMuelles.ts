/**
 * 🪤 Los MUELLES de un modelo de ETABS, repartidos a los nudos.
 *
 * ETABS declara tres clases y las asigna con `SPRINGPROP "…"`:
 *
 *   · **de punto** (`POINTSPRING`) — rigidez directa en el nudo, F/L, en ejes
 *     GLOBALES.
 *   · **de línea** (`LINESPRING`) — F/L **por metro de barra**, en los ejes
 *     LOCALES de la barra. Es el balasto de una viga de cimentación.
 *   · **de área** (`AREASPRING`) — F/L **por m² de cáscara**, en los ejes
 *     locales del área. Es el balasto de una losa de cimentación.
 *
 * Sin esto, una cimentación sobre Winkler **no llega a ningún apoyo**: sus
 * nudos no están restringidos, los sujeta el terreno. En el edificio real de
 * 786 nudos eran 45 nudos de cota −1.00 m, y el modelo entero no resolvía por
 * ellos.
 *
 * ## Por qué se ensambla aquí y no en el parser
 *
 * Un muelle de línea vale «tanto por metro» y uno de área «tanto por m²»: el
 * reparto depende de la LONGITUD y del ÁREA de cada elemento. Y esos cambian
 * cuando se cose el modelo (`e2kCoser` parte 167 barras en 555 trozos). Si se
 * repartiera al leer, saldrían los muelles de la geometría vieja. El parser
 * guarda el NOMBRE de la propiedad y el reparto se hace al final.
 *
 * ## Los ejes
 *
 * Para los de línea y área hay que pasar del eje local al global. `deform` solo
 * admite muelles DIAGONALES (`{node, dof, k}`), así que de la matriz correcta
 * `k·(e⊗e)` se toma la diagonal: `k·eₓ²`, `k·e_y²`, `k·e_z²`. Es **exacto**
 * cuando el eje local coincide con uno global, que es justo el caso de una
 * cimentación horizontal (el balasto vertical va con el eje 3 = global Z), y en
 * un eje inclinado es la proyección, que es lo más que se puede hacer sin
 * cambiar la interfaz del solver.
 *
 * ## Lo que se ignora, dicho
 *
 * `NONLINEAROPT "Compression Only"` se lee y **no** se aplica: esto es un
 * programa lineal y el muelle trabaja también a tracción. Es lo mismo que hace
 * ETABS en un caso de análisis lineal — por eso se pueden comparar—, pero en
 * uno no lineal ETABS despega el muelle y aquí no.
 */
import type { E2kModel } from "./e2kParser";

export interface MuelleNodal { node: number; dof: number; k: number }

export interface InformeMuelles {
  dePunto: number;
  deLinea: number;
  deArea: number;
  nudosConMuelle: number;
  sinDefinicion: string[];
}

/** Los tres ejes locales de una barra, en la tríada de CSI (filas 1, 2, 3). */
function ejesBarra(a: number[], b: number[]): number[][] {
  const v = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
  const L = Math.hypot(v[0], v[1], v[2]) || 1;
  const e1 = [v[0] / L, v[1] / L, v[2] / L];
  const D = Math.hypot(e1[0], e1[1]);
  if (D < 1e-9) {
    // Barra vertical: no hay plano vertical que la contenga, se toma el +X
    // global, que es lo que hace CSI.
    return e1[2] > 0 ? [e1, [1, 0, 0], [0, 1, 0]] : [e1, [-1, 0, 0], [0, 1, 0]];
  }
  // eje 2 = horizontal perpendicular · eje 3 = en el plano vertical, hacia
  // arriba. Es la misma tríada de `getTransformationMatrixBeam`: para una viga
  // horizontal el 3 sale vertical, y por eso el balasto del suelo va en `U3`.
  const e2 = [-e1[1] / D, e1[0] / D, 0];
  const e3 = [-e1[0] * e1[2] / D, -e1[1] * e1[2] / D, D];
  return [e1, e2, e3];
}

/** Área y normal de un polígono de 3 o 4 nudos. */
function areaYNormal(p: number[][]): { A: number; n: number[] } {
  let nx = 0, ny = 0, nz = 0;
  for (let i = 0; i < p.length; i++) {
    const a = p[i], b = p[(i + 1) % p.length];
    nx += a[1] * b[2] - a[2] * b[1];
    ny += a[2] * b[0] - a[0] * b[2];
    nz += a[0] * b[1] - a[1] * b[0];
  }
  const L = Math.hypot(nx, ny, nz);
  return L < 1e-12 ? { A: 0, n: [0, 0, 1] } : { A: L / 2, n: [nx / L, ny / L, nz / L] };
}

/**
 * Los muelles nodales del modelo, listos para el 5º argumento de `deform`.
 * Se llama DESPUÉS de coser: usa la geometría final.
 */
export function muellesDelModelo(m: E2kModel): {
  muelles: MuelleNodal[]; informe: InformeMuelles;
} {
  const inf: InformeMuelles = {
    dePunto: 0, deLinea: 0, deArea: 0, nudosConMuelle: 0, sinDefinicion: [],
  };
  const defs = m.springProps;
  if (!defs || defs.size === 0) return { muelles: [], informe: inf };

  const N = m.nodes as unknown as number[][];
  // Se acumula por (nudo, gdl): un nudo puede tocar varias vigas de
  // cimentación, y cada una le deja su trozo de balasto. Sumar es lo correcto;
  // quedarse con el último sería perder terreno.
  const acum = new Map<string, number>();
  const suma = (nodo: number, dof: number, k: number) => {
    if (!(k > 0)) return;
    const key = `${nodo}|${dof}`;
    acum.set(key, (acum.get(key) ?? 0) + k);
  };
  const falta = new Set<string>();

  // ── de punto: directo, y ya en ejes globales ─────────────────────────────
  const nodeSpr = (m.nodeInputs as any).springNames as Map<number, string> | undefined;
  for (const [nodo, nombre] of nodeSpr ?? new Map()) {
    const d = defs.get(nombre);
    if (!d) { falta.add(nombre); continue; }
    inf.dePunto++;
    for (let i = 0; i < 6; i++) suma(nodo, i, d.k[i]);
  }

  // ── de línea y de área: por elemento, repartidos a sus nudos ─────────────
  const elemSpr = (m.elementInputs as any).springNames as Map<number, string> | undefined;
  const elems = m.elements as unknown as number[][];
  for (const [e, nombre] of elemSpr ?? new Map()) {
    const d = defs.get(nombre);
    const el = elems[e];
    if (!d || !el) { if (!d) falta.add(nombre); continue; }

    if (el.length === 2) {
      const a = N[el[0]], b = N[el[1]];
      if (!a || !b) continue;
      const L = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      if (L < 1e-9) continue;
      inf.deLinea++;
      const ejes = ejesBarra(a, b);
      // Reparto lumped: la mitad de la línea a cada extremo. Es lo mismo que
      // hace ETABS con un muelle de línea sobre una barra sin estaciones
      // intermedias — y como el modelo ya viene partido en sus
      // intersecciones, los trozos son cortos y el lumped basta.
      for (let i = 0; i < 3; i++) {
        const kt = d.k[i] * L / 2;      // F/L por metro × metros = F/L
        if (!(kt > 0)) continue;
        const e_ = ejes[i];
        for (const nodo of [el[0], el[1]])
          for (let g = 0; g < 3; g++) suma(nodo, g, kt * e_[g] * e_[g]);
      }
      // Los de giro, si los hubiera, van al eje local tal cual.
      for (let i = 3; i < 6; i++) {
        const kt = d.k[i] * L / 2;
        if (!(kt > 0)) continue;
        const e_ = ejes[i - 3];
        for (const nodo of [el[0], el[1]])
          for (let g = 0; g < 3; g++) suma(nodo, 3 + g, kt * e_[g] * e_[g]);
      }
      continue;
    }

    if (el.length === 3 || el.length === 4) {
      const p = el.map((k) => N[k]).filter(Boolean) as number[][];
      if (p.length < 3) continue;
      const { A, n } = areaYNormal(p);
      if (!(A > 0)) continue;
      inf.deArea++;
      // El área tributaria de cada nudo del Q4/T3: A/n. Es el reparto de ETABS
      // para un muelle de superficie uniforme.
      const At = A / p.length;
      // Solo la componente NORMAL (U3) tiene un eje inequívoco en un área; las
      // tangenciales U1/U2 dependerían del ángulo local del área, y usar uno
      // inventado sería peor que no ponerlas. Si las hubiera, se avisa.
      const k3 = d.k[2] * At;
      if (k3 > 0)
        for (const nodo of el)
          for (let g = 0; g < 3; g++) suma(nodo, g, k3 * n[g] * n[g]);
    }
  }

  const muelles: MuelleNodal[] = [];
  const nudos = new Set<number>();
  for (const [key, k] of acum) {
    const [nodo, dof] = key.split("|").map(Number);
    muelles.push({ node: nodo, dof, k });
    nudos.add(nodo);
  }
  inf.nudosConMuelle = nudos.size;
  inf.sinDefinicion = [...falta];
  return { muelles, informe: inf };
}
