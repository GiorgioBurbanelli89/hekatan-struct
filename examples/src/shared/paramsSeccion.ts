/**
 * Parámetros de SECCIÓN para el panel de un ejemplo.
 *
 * Jorge: *«las secciones del Tweakpane, ojo: solo muestra el área y la inercia,
 * no debe mostrar el área sino también las secciones»*.
 *
 * Y tiene razón. Pedir «Área barra (m²) = 0.002» no describe ninguna sección:
 * con esa misma área cabe un cuadrado de 4.47 cm, un IPE 160 o un tubo de
 * 100×100×5, y **su inercia se diferencia en veinte veces**. Un área suelta
 * obliga además a inventarse la inercia por otro lado — así es como el galpón
 * acabó con `I = A²/12`, la de un cuadrado macizo, y un periodo de 11.7 s.
 *
 * Aquí se pide lo que de verdad define una sección —su FORMA y sus
 * DIMENSIONES— y `A`, `I33`, `I22` y `J` salen calculados de ahí, a la vista
 * en el folder «📊 Sección calculada».
 *
 * Las fórmulas NO se reescriben: son las de `cadSections.ts`, las mismas que
 * usa el modelador CAD.
 *
 * Uso en un ExampleDef:
 *
 *     params: { ...paramsSeccion("Secciones"), ...otros },
 *     build(p, states) {
 *       const s = seccionDe(p);              // { A, Iz, Iy, J } en m y m⁴
 *       const { moiZ, moiY } = toLocalInertia(s);
 *       areas.set(i, s.A); Iz.set(i, moiZ); Iy.set(i, moiY); J.set(i, s.J);
 *     },
 *     computedLabels: (p) => etiquetasSeccion(p),
 */
import {
  rectSection, circSection, iParamSection, hollowRectSection,
  toLocalInertia, type SectionProps,
} from "./cadSections";

export { toLocalInertia, type SectionProps };

/** Las formas del selector. El orden es el del dropdown. */
export const FORMAS = {
  "Perfil I / W": 0,
  "Rectangular maciza": 1,
  "Tubo rectangular": 2,
  "Circular maciza": 3,
} as const;

export interface OpcionesSeccion {
  folder?: string;
  prefijo?: string;
  /** Forma por defecto (una de FORMAS). */
  forma?: number;
  /** Dimensiones por defecto, en MILÍMETROS (que es como vienen los perfiles). */
  h?: number; bf?: number; tf?: number; tw?: number; t?: number; d?: number;
  b?: number;
}

/**
 * Params del panel. Se muestran los cuatro grupos de dimensiones a la vez: el
 * que no aplica a la forma elegida se ignora en el cálculo, y así el usuario
 * ve de un vistazo qué define cada forma sin que el panel se reconstruya.
 *
 * Todo en MILÍMETROS, que es como se nombra un perfil (IPE 160, no 0.16 m).
 */
export function paramsSeccion(folder = "Secciones", o: OpcionesSeccion = {}) {
  const pre = o.prefijo ?? "sec";
  const P = (label: string, def: number, min: number, max: number, step: number) =>
    ({ default: def, min, max, step, label, folder });
  return {
    [`${pre}Forma`]: {
      default: o.forma ?? FORMAS["Perfil I / W"],
      options: { ...FORMAS }, label: "Forma", folder,
    },
    // I / W · rectangular · tubo
    [`${pre}H`]:  P("Canto h (mm)",        o.h  ?? 160, 20, 2000, 5),
    [`${pre}B`]:  P("Ancho b / ala (mm)",  o.bf ?? o.b ?? 82, 10, 1000, 2),
    [`${pre}Tf`]: P("Espesor ala tf (mm)", o.tf ?? 7.4, 1, 100, 0.2),
    [`${pre}Tw`]: P("Espesor alma tw (mm)", o.tw ?? 5.0, 1, 100, 0.2),
    [`${pre}T`]:  P("Espesor pared t (mm)", o.t ?? 5.0, 0.5, 60, 0.5),
    // circular
    [`${pre}D`]:  P("Diámetro D (mm)",     o.d ?? 200, 10, 2000, 5),
  } as Record<string, any>;
}

/** Propiedades de la sección elegida, en metros y m⁴ (lo que espera el solver). */
export function seccionDe(p: Record<string, number>, prefijo = "sec"): SectionProps {
  const mm = (v: number) => (v ?? 0) / 1000;      // el panel va en mm, el solver en m
  const h = mm(p[`${prefijo}H`]), b = mm(p[`${prefijo}B`]);
  const tf = mm(p[`${prefijo}Tf`]), tw = mm(p[`${prefijo}Tw`]);
  const t = mm(p[`${prefijo}T`]), d = mm(p[`${prefijo}D`]);
  switch (Math.round(p[`${prefijo}Forma`] ?? 0)) {
    case FORMAS["Rectangular maciza"]: return rectSection(b, h);
    case FORMAS["Tubo rectangular"]:   return hollowRectSection(b, h, t);
    case FORMAS["Circular maciza"]:    return circSection(d);
    default:                           return iParamSection(b, h, tf, tw);
  }
}

/** Nombre legible de la sección, para el título del panel o del modal. */
export function nombreSeccion(p: Record<string, number>, prefijo = "sec"): string {
  const n = (v: number) => (v ?? 0).toFixed(v % 1 ? 1 : 0);
  const h = p[`${prefijo}H`], b = p[`${prefijo}B`];
  switch (Math.round(p[`${prefijo}Forma`] ?? 0)) {
    case FORMAS["Rectangular maciza"]: return `Rect ${n(b)}×${n(h)}`;
    case FORMAS["Tubo rectangular"]:   return `Tubo ${n(b)}×${n(h)}×${n(p[`${prefijo}T`])}`;
    case FORMAS["Circular maciza"]:    return `Ø ${n(p[`${prefijo}D`])}`;
    default: return `I ${n(h)}×${n(b)}×${n(p[`${prefijo}Tf`])}/${n(p[`${prefijo}Tw`])}`;
  }
}

/**
 * Lo que se enseña en el folder «📊 Sección calculada». En cm² y cm⁴, que es
 * como se leen en cualquier tabla de perfiles — en m⁴ un IPE 160 es 8.69e-6 y
 * no se puede comparar de un vistazo con nada.
 */
export function etiquetasSeccion(p: Record<string, number>, prefijo = "sec"): Record<string, string> {
  const s = seccionDe(p, prefijo);
  const { moiZ, moiY } = toLocalInertia(s);
  return {
    "Sección":      nombreSeccion(p, prefijo),
    "A (cm²)":      (s.A * 1e4).toFixed(2),
    "I33 fuerte (cm⁴)": (moiZ * 1e8).toFixed(0),
    "I22 débil (cm⁴)":  (moiY * 1e8).toFixed(0),
    "J torsión (cm⁴)":  (s.J * 1e8).toFixed(0),
    "i33 radio giro (cm)": (Math.sqrt(moiZ / s.A) * 100).toFixed(2),
  };
}
