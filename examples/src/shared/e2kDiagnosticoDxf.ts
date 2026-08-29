/**
 * 📐 EL DIAGNÓSTICO, EN DXF — para verlo, no para leerlo.
 *
 * «124 trozos, 359 nudos» no dice dónde está el problema. Un DXF sí: se abre en
 * el visor (o en AutoCAD), se apaga la capa del modelo, se corta por un eje y
 * se ve que en el eje B falta la columna entre N+3.65 y N+7.10.
 *
 * Cada cosa va en su CAPA, para poder apagarlas por separado:
 *
 *   MODELO      todas las barras, en gris
 *   AREAS       el contorno de cada cáscara
 *   EJES        las líneas de rejilla del `.e2k` con su etiqueta (A, B, 1, 2…)
 *   PLANTAS     una línea a la cota de cada planta, con su nombre
 *   APOYOS      un cuadrado en cada nudo con apoyo
 *   MUELLES     un círculo en cada nudo con balasto
 *   SUELTOS     ⚠️ las barras de los trozos que no llegan a ningún apoyo
 *   MECANISMO   ⚠️ los nudos del modo de mecanismo
 *
 * Se escribe **DXF R12 en ASCII** a propósito: es el que abre absolutamente
 * todo, sin tablas de objetos ni handles. Un DXF moderno tiene más cosas y más
 * sitios donde fallar, y aquí lo que hace falta es que se abra.
 */
import type { E2kModel } from "./e2kParser";

/** Los colores de AutoCAD que se usan. Van por índice, que es lo de R12. */
const COLOR = {
  MODELO: 8,      // gris
  AREAS: 251,     // gris claro
  EJES: 4,        // cian
  PLANTAS: 3,     // verde
  APOYOS: 5,      // azul
  MUELLES: 2,     // amarillo
  SUELTOS: 1,     // ROJO
  MECANISMO: 30,  // naranja
} as const;

export interface DatosDiagnostico {
  /** Nudos de los trozos que no llegan a ningún apoyo. */
  sueltos?: Set<number> | number[];
  /** Nudos del modo de mecanismo. */
  mecanismo?: Set<number> | number[];
  /** Nudos con muelle. */
  conMuelle?: Set<number> | number[];
}

function g(codigo: number, valor: string | number): string {
  return `${codigo}\n${valor}\n`;
}

function linea(capa: string, color: number, a: number[], b: number[]): string {
  return g(0, "LINE") + g(8, capa) + g(62, color) +
    g(10, a[0].toFixed(4)) + g(20, a[1].toFixed(4)) + g(30, a[2].toFixed(4)) +
    g(11, b[0].toFixed(4)) + g(21, b[1].toFixed(4)) + g(31, b[2].toFixed(4));
}

function circulo(capa: string, color: number, p: number[], r: number): string {
  return g(0, "CIRCLE") + g(8, capa) + g(62, color) +
    g(10, p[0].toFixed(4)) + g(20, p[1].toFixed(4)) + g(30, p[2].toFixed(4)) +
    g(40, r.toFixed(4));
}

function texto(capa: string, color: number, p: number[], h: number, t: string): string {
  return g(0, "TEXT") + g(8, capa) + g(62, color) +
    g(10, p[0].toFixed(4)) + g(20, p[1].toFixed(4)) + g(30, p[2].toFixed(4)) +
    g(40, h.toFixed(4)) + g(1, t);
}

/** Un cuadrado plano, para marcar un apoyo. */
function cuadrado(capa: string, color: number, p: number[], r: number): string {
  const q = [[-r, -r], [r, -r], [r, r], [-r, r]];
  let s = "";
  for (let i = 0; i < 4; i++) {
    const a = q[i], b = q[(i + 1) % 4];
    s += linea(capa, color, [p[0] + a[0], p[1] + a[1], p[2]],
                            [p[0] + b[0], p[1] + b[1], p[2]]);
  }
  return s;
}

/**
 * El DXF del modelo con su diagnóstico encima.
 *
 * `escala` es el tamaño de los marcadores en metros; por defecto 0.15, que en
 * un edificio se ve sin taparlo.
 */
export function diagnosticoDxf(
  m: E2kModel, datos: DatosDiagnostico = {}, escala = 0.15,
): string {
  const N = m.nodes as unknown as number[][];
  const els = m.elements as unknown as number[][];
  const set = (x?: Set<number> | number[]) =>
    x instanceof Set ? x : new Set(x ?? []);
  const sueltos = set(datos.sueltos);
  const mecanismo = set(datos.mecanismo);
  const conMuelle = set(datos.conMuelle);

  let s = "";
  // ── cabecera mínima: solo los límites, que es lo que usa el visor para
  //    encuadrar. Sin esto algunos abren el dibujo en un punto cualquiera.
  let mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity];
  for (const n of N) for (let i = 0; i < 3; i++) {
    if (n[i] < mn[i]) mn[i] = n[i];
    if (n[i] > mx[i]) mx[i] = n[i];
  }
  if (!Number.isFinite(mn[0])) { mn = [0, 0, 0]; mx = [1, 1, 1]; }
  s += g(0, "SECTION") + g(2, "HEADER");
  s += g(9, "$EXTMIN") + g(10, mn[0].toFixed(4)) + g(20, mn[1].toFixed(4)) + g(30, mn[2].toFixed(4));
  s += g(9, "$EXTMAX") + g(10, mx[0].toFixed(4)) + g(20, mx[1].toFixed(4)) + g(30, mx[2].toFixed(4));
  s += g(0, "ENDSEC");

  // ── tabla de capas ──
  const capas = Object.keys(COLOR);
  s += g(0, "SECTION") + g(2, "TABLES") + g(0, "TABLE") + g(2, "LAYER") + g(70, capas.length);
  for (const c of capas)
    s += g(0, "LAYER") + g(2, c) + g(70, 0) +
         g(62, (COLOR as Record<string, number>)[c]) + g(6, "CONTINUOUS");
  s += g(0, "ENDTAB") + g(0, "ENDSEC");

  s += g(0, "SECTION") + g(2, "ENTITIES");

  // ── el modelo ──
  els.forEach((el) => {
    if (el.length === 2) {
      const a = N[el[0]], b = N[el[1]];
      if (!a || !b) return;
      // Una barra de un trozo suelto va en ROJO y en su capa: es lo que hay que
      // mirar, y con el modelo apagado queda sola en pantalla.
      const roja = el.some((n) => sueltos.has(n));
      s += linea(roja ? "SUELTOS" : "MODELO",
                 roja ? COLOR.SUELTOS : COLOR.MODELO, a, b);
      return;
    }
    // El contorno del área, lado a lado.
    for (let k = 0; k < el.length; k++) {
      const a = N[el[k]], b = N[el[(k + 1) % el.length]];
      if (a && b) s += linea("AREAS", COLOR.AREAS, a, b);
    }
  });

  // ── los EJES del .e2k, que es por donde se corta ──
  //
  // Sin ellos el DXF es una nube de barras. Con ellos se dice «el eje B» y se
  // sabe de que se habla, que es como se habla en obra.
  const ejes = m.grids ?? [];
  for (const ej of ejes) {
    const a = ej.dir === "X"
      ? [ej.coord, mn[1] - 1, mn[2]] : [mn[0] - 1, ej.coord, mn[2]];
    const b = ej.dir === "X"
      ? [ej.coord, mx[1] + 1, mn[2]] : [mx[0] + 1, ej.coord, mn[2]];
    s += linea("EJES", COLOR.EJES, a, b);
    s += texto("EJES", COLOR.EJES, [b[0] + 0.3, b[1] + 0.3, b[2]], 0.4, ej.label);
  }

  // ── las PLANTAS, con su nombre ──
  for (const pl of m.stories ?? []) {
    if (!Number.isFinite(pl.elev)) continue;
    s += linea("PLANTAS", COLOR.PLANTAS,
      [mn[0] - 1, mn[1] - 1, pl.elev], [mx[0] + 1, mn[1] - 1, pl.elev]);
    s += texto("PLANTAS", COLOR.PLANTAS,
      [mx[0] + 1.2, mn[1] - 1, pl.elev], 0.4, `${pl.name}  (${pl.elev.toFixed(2)})`);
  }

  // ── apoyos, muelles y el modo ──
  const sup = ((m.nodeInputs as any).supports ?? new Map()) as Map<number, boolean[]>;
  for (const [n, v] of sup) {
    if (!(v[0] || v[1] || v[2])) continue;      // los giros solos no son apoyo
    const p = N[n];
    if (p) s += cuadrado("APOYOS", COLOR.APOYOS, p, escala);
  }
  for (const n of conMuelle) {
    const p = N[n];
    if (p) s += circulo("MUELLES", COLOR.MUELLES, p, escala * 0.8);
  }
  for (const n of mecanismo) {
    const p = N[n];
    if (!p) continue;
    // Una cruz, que se distingue del circulo del muelle aunque se solapen.
    s += linea("MECANISMO", COLOR.MECANISMO,
      [p[0] - escala, p[1] - escala, p[2]], [p[0] + escala, p[1] + escala, p[2]]);
    s += linea("MECANISMO", COLOR.MECANISMO,
      [p[0] - escala, p[1] + escala, p[2]], [p[0] + escala, p[1] - escala, p[2]]);
  }

  s += g(0, "ENDSEC") + g(0, "EOF");
  return s;
}
