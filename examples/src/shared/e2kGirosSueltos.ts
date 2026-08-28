/**
 * 🔩 Los GIROS que no sujeta NADIE.
 *
 * Un modelo puede estar entero, conectado y con todos sus apoyos, y aun así
 * devolver desplazamientos de 1e15 mm. Eso no es un trozo suelto: es un
 * **mecanismo**, y en un modelo real de ETABS casi siempre son los RELEASES.
 *
 * En el edificio real: **137 nudos** con algún giro libre, por **196 tramos**
 * (174 objetos del `.e2k`) con `RELEASE "TI M2I M2J M3I M3J"`.
 *
 * ## Por qué esa barra no sujeta nada
 *
 *   · `M2` y `M3` liberados en LAS DOS caras → no transmite flexión por
 *     ninguna: es una barra de dos fuerzas.
 *   · **La torsión va aparte**: liberada en UNA sola cara, la barra se queda
 *     sin rigidez torsional en LAS DOS — es un eje libre por un extremo. La
 *     flexión no funciona así: con `M2I` liberado sigue dando rigidez en J,
 *     que es una viga apoyada-empotrada. Contar las dos igual da CERO nudos
 *     sueltos donde sí los hay.
 *
 * ## Qué se hace con ellos, y por qué no es inventar
 *
 * Se **coartan**. Un GDL sin ninguna rigidez tiene también fuerza nula: su
 * valor no lo decide el equilibrio, lo decide el redondeo. Fijarlo a cero no
 * cambia ni un desplazamiento ni una reacción del resto del modelo — solo
 * quita la ecuación que no dice nada. Es exactamente lo que hace
 * `getZerosIndices` de `deform.cpp`, y lo que hace ETABS.
 *
 * ⚠️ Se hace aquí y no allí porque `getZerosIndices` compara con una
 * tolerancia **ABSOLUTA** de 1e-12. En kN·m las diagonales van por 1e6, así que
 * un GDL que tras condensar los releases queda en 1e-9 pasa el filtro y se
 * queda dentro: quince órdenes de magnitud por debajo de sus vecinas, pero por
 * encima del corte. Ahí es donde nace el 1e15. Lo correcto en el C++ sería una
 * tolerancia RELATIVA al máximo de la diagonal; mientras tanto, esto lo detecta
 * por la geometría y los releases, que es información que la K ya no tiene.
 */
import type { E2kModel } from "./e2kParser";

export interface InformeGiros {
  /** Nudos que tenían algún giro sin rigidez. */
  nudos: number;
  /** GDL de giro coartados en total. */
  gdl: number;
  /** Tramos de barra que no aportan giro a ninguna de sus caras. */
  barrasSinGiro: number;
}

/**
 * Marca como coartados los giros que ningún elemento sujeta.
 * Modifica `m.nodeInputs.supports` y devuelve el informe.
 */
export function coartarGirosSueltos(m: E2kModel): InformeGiros {
  const N = m.nodes as unknown as number[][];
  const els = m.elements as unknown as number[][];
  const rel = (m.elementInputs as any).momentReleases as Map<number, boolean[]> | undefined;
  const sup = ((m.nodeInputs as any).supports ?? new Map()) as Map<number, boolean[]>;

  // sujeto[nudo] = [rx, ry, rz]
  const sujeto = new Map<number, boolean[]>();
  const marca = (n: number, i: number) => {
    if (!sujeto.has(n)) sujeto.set(n, [false, false, false]);
    sujeto.get(n)![i] = true;
  };
  const marcaTodos = (n: number) => { marca(n, 0); marca(n, 1); marca(n, 2); };

  for (const [n, v] of sup) for (let i = 0; i < 3; i++) if (v[3 + i]) marca(n, i);
  // Un muelle de GIRO también sujeta.
  const nSpr = (m.nodeInputs as any).springNames as Map<number, string> | undefined;
  for (const [n, nombre] of nSpr ?? new Map()) {
    const d = m.springProps?.get(nombre);
    if (!d) continue;
    for (let i = 0; i < 3; i++) if (d.k[3 + i] > 0) marca(n, i);
  }

  let barrasSinGiro = 0;
  els.forEach((el, e) => {
    // Una cáscara aporta los tres: los dos de su plano y el normal por el
    // drilling, que el elemento ITW sí lleva.
    if (el.length > 2) { for (const n of el) marcaTodos(n); return; }
    const r = rel?.get(e);
    const a = N[el[0]], b = N[el[1]];
    if (!a || !b) return;
    if (!r) { marcaTodos(el[0]); marcaTodos(el[1]); return; }

    // Los ejes locales de CSI: 1 = i→j · 2 = en el plano vertical, arriba ·
    // 3 = 1×2. Hacen falta porque el release es LOCAL y el GDL es global.
    const L = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]) || 1;
    const e1 = [(b[0] - a[0]) / L, (b[1] - a[1]) / L, (b[2] - a[2]) / L];
    const D = Math.hypot(e1[0], e1[1]);
    const e2 = D < 1e-9 ? [1, 0, 0] : [-e1[1] / D, e1[0] / D, 0];
    const e3 = D < 1e-9 ? [0, 1, 0] : [-e1[0] * e1[2] / D, -e1[1] * e1[2] / D, D];
    const ejes = [e1, e2, e3];

    const torsion = !(r[3] || r[9]);       // liberada en UNA cara = fuera en las dos
    if (!torsion && r[4] && r[5] && r[10] && r[11]) barrasSinGiro++;
    for (const cara of [0, 1]) {
      const o = cara * 6;
      const aporta = [torsion, !r[o + 4], !r[o + 5]];
      for (let k = 0; k < 3; k++) {
        if (!aporta[k]) continue;
        for (let g = 0; g < 3; g++)
          if (Math.abs(ejes[k][g]) > 1e-6) marca(el[cara], g);
      }
    }
  });

  const usado = new Set<number>();
  for (const el of els) for (const n of el) usado.add(n);

  const inf: InformeGiros = { nudos: 0, gdl: 0, barrasSinGiro };
  for (const n of usado) {
    const s = sujeto.get(n) ?? [false, false, false];
    const libres = [0, 1, 2].filter((i) => !s[i]);
    if (!libres.length) continue;
    const v = sup.get(n) ?? [false, false, false, false, false, false];
    for (const i of libres) { v[3 + i] = true; inf.gdl++; }
    sup.set(n, v);
    inf.nudos++;
  }
  (m.nodeInputs as any).supports = sup;
  return inf;
}
