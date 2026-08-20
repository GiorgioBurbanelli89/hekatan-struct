/**
 * La carga de una columna llevada a los nudos como la lleva un FEM: `f_i = ∫ N_i·q·dA`.
 *
 * ## Por qué existe
 *
 * Una carga de columna entra al modelo por un único camino honesto: se reparte
 * como **presión sobre su huella** y esa presión se integra contra las funciones
 * de forma. Eso es lo que hacen SAFE (`SetLoadUniform`), SAP2000 y el propio
 * `.heks` de Hekatan (`areaload`, en `heks.py`, con Gauss 2×2 y jacobiano real).
 *
 * En el deploy convivían **tres** formas distintas de meter la misma columna, y
 * medidas contra la integral consistente sobre la zapata validada de 1.50 × 1.50
 * m (t = 0.40, P = 100 tonf, ks = 2000 tonf/m³, malla 10 × 10):
 *
 * | forma | quién la usaba | dif. |
 * |---|---|---|
 * | `∫N_i·q·dA` | `.heks`, SAFE, SAP2000 | referencia |
 * | `P / nº de nudos de la huella` | las 8 zapatas de Guerra | 0.100 % |
 * | **toda la P en UN nudo** | `safe-bench-zapata-comparativa` | **0.472 %** |
 *
 * El 0.100 % es poco pero es gratis quitarlo: repartir a partes iguales no es el
 * vector consistente, porque los nudos del **borde** de la huella reciben menos
 * que los de dentro.
 *
 * El 0.472 % es otra cosa. Una carga **puntual** sobre una placa es una
 * **singularidad**: la flecha bajo el punto no converge, **crece al refinar la
 * malla**. O sea que ese número no es un resultado, es un artefacto del tamaño
 * de celda que toque. Y comparado contra SAFE —que reparte— no compara el mismo
 * modelo.
 *
 * ## Qué devuelve
 *
 * `pointLoads` listos para `plateQ4Solve` (`dof 0` = `w`, negativo = hacia
 * abajo). Para `deform` basta con volcarlos al hueco `[2]` del vector de nudo.
 *
 * ## Nota sobre la malla
 *
 * Si la huella de la columna no cae sobre líneas de la malla, el reparto se hace
 * sobre las celdas **cuyo centro** cae dentro, y el área cargada no es
 * exactamente `col²`. Por eso se devuelve `areaCargada`: quien llame puede
 * comprobarlo. Una zapata que se queda sin carga da flecha 0, y un cero se lee
 * como «salió bien».
 */

export interface CargaConsistente {
  /** `{node, dof: 0, value}` — negativo = hacia abajo. */
  pointLoads: Array<{ node: number; dof: number; value: number }>;
  /** Los nudos que tocan la huella (para dibujar, o para el momento). */
  nodos: number[];
  /** Área realmente cargada, m². Comparar con `col²` antes de fiarse. */
  areaCargada: number;
  /** Celdas de la malla dentro de la huella. */
  celdas: number;
}

const G = 1 / Math.sqrt(3);
const GAUSS: Array<[number, number]> = [[-G, -G], [G, -G], [G, G], [-G, G]];

/**
 * @param nodes      `[x, y]` por nudo
 * @param elements   4 índices por elemento, en sentido antihorario
 * @param P          carga total (kN, positiva; se aplica hacia abajo)
 * @param cx, cy     centro de la columna
 * @param colX       lado de la huella en X (m)
 * @param colY       lado en Y; si se omite, columna cuadrada
 */
export function cargaColumnaConsistente(
  nodes: Array<[number, number]>,
  elements: Array<[number, number, number, number]>,
  P: number, cx: number, cy: number, colX: number, colY: number = colX,
): CargaConsistente {
  const c0x = cx - colX / 2, c1x = cx + colX / 2;
  const c0y = cy - colY / 2, c1y = cy + colY / 2;
  const tol = 1e-9;

  // 1ª pasada: qué celdas caen dentro de la huella y cuánta área suman. Hace
  // falta ANTES de repartir, porque `q = P / areaCargada` y esa área es la de
  // verdad, no `col²` — si la huella no cae en malla, no coinciden.
  const dentro: number[] = [];
  let areaCargada = 0;
  const areaDe = (e: [number, number, number, number]) => {
    // Gauss del cuadrilátero: ∫dA. Vale para celdas no rectangulares.
    let a = 0;
    for (const [xi, eta] of GAUSS) a += jacobiano(nodes, e, xi, eta);
    return a;
  };
  for (let k = 0; k < elements.length; k++) {
    const e = elements[k];
    let xc = 0, yc = 0;
    for (const n of e) { xc += nodes[n][0] / 4; yc += nodes[n][1] / 4; }
    if (xc < c0x - tol || xc > c1x + tol || yc < c0y - tol || yc > c1y + tol) continue;
    dentro.push(k);
    areaCargada += areaDe(e);
  }
  if (dentro.length === 0)
    throw new Error(
      `la huella de columna (${colX}x${colY} m en ${cx},${cy}) no cae sobre ` +
      `ninguna celda: ` +
      `la zapata quedaría sin carga y la flecha saldría 0`);

  // 2ª pasada: la presión, integrada contra las funciones de forma.
  const q = P / areaCargada;
  const acum = new Map<number, number>();
  for (const k of dentro) {
    const e = elements[k];
    for (const [xi, eta] of GAUSS) {
      const N = formas(xi, eta);
      const detJ = jacobiano(nodes, e, xi, eta);
      for (let i = 0; i < 4; i++)
        acum.set(e[i], (acum.get(e[i]) ?? 0) - N[i] * q * detJ);
    }
  }

  return {
    pointLoads: [...acum].map(([node, value]) => ({ node, dof: 0, value })),
    nodos: [...acum.keys()],
    areaCargada,
    celdas: dentro.length,
  };
}

function formas(xi: number, eta: number): [number, number, number, number] {
  return [0.25 * (1 - xi) * (1 - eta), 0.25 * (1 + xi) * (1 - eta),
          0.25 * (1 + xi) * (1 + eta), 0.25 * (1 - xi) * (1 + eta)];
}

/** `detJ` en (ξ,η), o sea el `dA` real de esa celda. */
function jacobiano(nodes: Array<[number, number]>,
                   e: [number, number, number, number],
                   xi: number, eta: number): number {
  const dNx = [-0.25 * (1 - eta), 0.25 * (1 - eta), 0.25 * (1 + eta), -0.25 * (1 + eta)];
  const dNe = [-0.25 * (1 - xi), -0.25 * (1 + xi), 0.25 * (1 + xi), 0.25 * (1 - xi)];
  let j11 = 0, j12 = 0, j21 = 0, j22 = 0;
  for (let i = 0; i < 4; i++) {
    j11 += dNx[i] * nodes[e[i]][0]; j12 += dNx[i] * nodes[e[i]][1];
    j21 += dNe[i] * nodes[e[i]][0]; j22 += dNe[i] * nodes[e[i]][1];
  }
  return Math.abs(j11 * j22 - j12 * j21);
}
