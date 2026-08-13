/**
 * CATALOGO DE SECCIONES — sacado de modelos reales de ETABS.
 *
 * Jorge: *"toda ese tipo de seccion, la forma, la quiero en mis plantillas, asi
 * no se esten usando, que queden registradas"*.
 *
 * De un proyecto real salen decenas de perfiles ya definidos y probados, y hasta
 * ahora se perdian con el archivo. Aqui quedan con su FORMA y sus DIMENSIONES de
 * plancha, listos para usar en cualquier plantilla.
 *
 * Origen: MODELO COMPLETO_GAD RIOCHICO.EDB (ETABS 19.1) — 22 secciones usadas
 * por 695 barras.
 *
 * Las propiedades (A, As2, As3, I33, I22, J) las da ETABS. Al final de cada
 * linea se dice de donde sale: "de ETABS" o "calculadas de las dimensiones".
 *
 * Estan tambien las de SECTION DESIGNER —los CFT, tubo de acero relleno de
 * hormigon— y las COMPUESTAS —doble canal con madera, huella en doble angulo—.
 * Esas no tienen dimensiones de plancha porque no tienen una forma de catalogo:
 * son figuras dibujadas con dos materiales. De ellas se registra lo unico que
 * las define de verdad, que son sus propiedades homogeneizadas.
 *
 * Unidades: mm y mm^2 / mm^4.
 */
export interface SeccionCatalogo {
  nombre: string;
  forma: string;                       // Tube | ISection | Channel | Rectangle | Circle | ColdC
  tipo: string;                        // lo que declara ETABS: SectionDesigner, Compuesta...
  material: string;
  dim: Record<string, number>;         // dimensiones de plancha, en mm (vacio si no tiene forma)
  A: number;                           // mm2
  As2: number;                         // mm2, area de cortante en 2
  As3: number;                         // mm2, area de cortante en 3
  I33: number;                         // mm4, eje fuerte
  I22: number;                         // mm4, eje debil
  J: number;                           // mm4, torsion
}

export const CATALOGO_SECCIONES: SeccionCatalogo[] = [
  { nombre: "CFT 135X135X4mm", forma: "FilledTube", tipo: "FilledTube", material: "A572Gr50", dim: {  },
    A: 3664.7, As2: 2604.0, As3: 2483.0, I33: 7.9699e+06, I22: 7.9699e+06, J: 1.359e+07 },   // de ETABS
  { nombre: "CFT_150X150X4mm", forma: "FilledTube", tipo: "FilledTube", material: "A36", dim: {  },
    A: 4353.6, As2: 3127.6, As3: 3127.5, I33: 1.1695e+07, I22: 1.1695e+07, J: 1.9546e+07 },   // de ETABS
  { nombre: "CFT_200X200X4mm", forma: "FilledTube", tipo: "FilledTube", material: "A572Gr50", dim: {  },
    A: 6779.5, As2: 5027.5, As3: 5024.8, I33: 3.0976e+07, I22: 3.0976e+07, J: 5.3162e+07 },   // de ETABS
  { nombre: "CFT_300X300X8", forma: "FilledTube", tipo: "FilledTube", material: "A572Gr50", dim: {  },
    A: 17414.4, As2: 12510.5, As3: 12510.0, I33: 1.8713e+08, I22: 1.8713e+08, J: 3.1274e+08 },   // de ETABS
  { nombre: "DIAGONAL", forma: "Tube", tipo: "Box", material: "A36", dim: { T3: 100, T2: 100, Tf: 3, Tw: 3 },
    A: 1139.4, As2: 583.7, As3: 546.2, I33: 1.7672e+06, I22: 1.7672e+06, J: 2.738e+06 },   // de ETABS
  { nombre: "DOBLE C_250X50X5mm+MADERA", forma: "SD", tipo: "SD", material: "A36", dim: {  },
    A: 5561.3, As2: 4348.5, As3: 5561.3, I33: 3.6903e+07, I22: 3.5881e+07, J: 4.4179e+06 },   // de ETABS
  { nombre: "HUELLA-2L280X50X4mm", forma: "SD", tipo: "SD", material: "A36", dim: {  },
    A: 2019.9, As2: 1541.9, As3: 1300.5, I33: 4.8668e+05, I22: 2.0101e+07, J: 1.2679e+06 },   // de ETABS
  { nombre: "PEDESTAL_350X350", forma: "Rectangle", tipo: "Rectangular", material: "f'c=240 Kg/cm2", dim: { T3: 350, T2: 350 },
    A: 122500.0, As2: 102083.3, As3: 102083.3, I33: 1.2505e+09, I22: 1.2505e+09, J: 2.1134e+09 },   // de ETABS
  { nombre: "PEDESTAL_550X550", forma: "Rectangle", tipo: "Rectangular", material: "f'c=240 Kg/cm2", dim: { T3: 550, T2: 550 },
    A: 302500.0, As2: 252083.3, As3: 252083.3, I33: 7.6255e+09, I22: 7.6255e+09, J: 1.2887e+10 },   // de ETABS
  { nombre: "TENSOR 3/8\"", forma: "Circle", tipo: "Circle", material: "fy=4200 Kg/cm2", dim: { T3: 10 },
    A: 78.5, As2: 70.7, As3: 70.7, I33: 490.87, I22: 490.87, J: 981.75 },   // de ETABS
  { nombre: "TR_100X150X3mm", forma: "Tube", tipo: "Box", material: "A36", dim: { T3: 150, T2: 100, Tf: 3, Tw: 3 },
    A: 1439.4, As2: 859.8, As3: 550.0, I33: 4.5989e+06, I22: 2.4731e+06, J: 4.9996e+06 },   // de ETABS
  { nombre: "TR_100X200X3mm", forma: "Tube", tipo: "Box", material: "A36", dim: { T3: 200, T2: 100, Tf: 3, Tw: 3 },
    A: 1739.4, As2: 1144.3, As3: 551.7, I33: 9.2299e+06, I22: 3.179e+06, J: 7.4521e+06 },   // de ETABS
  { nombre: "TR_100X400X4mm", forma: "ColdC", tipo: "Cold_C", material: "A36", dim: { T3: 400, T2: 100, Thick: 4, Radius: 8, Lip: 195 },
    A: 3827.3, As2: 1504.0, As3: 608.0, I33: 6.8784e+07, I22: 7.6271e+06, J: 20412 },   // de ETABS
  { nombre: "TR_40X80X3mm", forma: "Tube", tipo: "Box", material: "A36", dim: { T3: 80, T2: 40, Tf: 3, Tw: 3 },
    A: 659.4, As2: 443.6, As3: 234.9, I33: 5.2045e+05, I22: 1.7508e+05, J: 4.272e+05 },   // de ETABS
  { nombre: "V1_TECHO", forma: "Tube", tipo: "Box", material: "A36", dim: { T3: 150, T2: 100, Tf: 3, Tw: 3 },
    A: 1439.4, As2: 859.8, As3: 550.0, I33: 4.5989e+06, I22: 2.4731e+06, J: 4.9996e+06 },   // de ETABS
  { nombre: "VCIMEN 40X60", forma: "Rectangle", tipo: "Rectangular", material: "f'c=240 Kg/cm2", dim: { T3: 600, T2: 400 },
    A: 240000.0, As2: 200000.0, As3: 200000.0, I33: 7.2e+09, I22: 3.2e+09, J: 7.5125e+09 },   // de ETABS
  { nombre: "VESCALERA_1", forma: "Tube", tipo: "Box", material: "A36", dim: { T3: 150, T2: 100, Tf: 3, Tw: 3 },
    A: 1439.4, As2: 859.8, As3: 550.0, I33: 4.5989e+06, I22: 2.4731e+06, J: 4.9996e+06 },   // de ETABS
  { nombre: "VP 350X140X6X8", forma: "ISection", tipo: "I", material: "A572Gr50", dim: { T3: 350, T2: 140, Tf: 8, Tw: 6, T2b: 140, Tfb: 8 },
    A: 4244.0, As2: 2091.4, As3: 2118.4, I33: 8.4142e+07, I22: 3.6647e+06, J: 72411 },   // de ETABS
  { nombre: "VP 350X150X6X10", forma: "ISection", tipo: "I", material: "A572Gr50", dim: { T3: 350, T2: 150, Tf: 10, Tw: 6, T2b: 150, Tfb: 10 },
    A: 4980.0, As2: 2097.4, As3: 2695.0, I33: 1.0469e+08, I22: 5.6309e+06, J: 1.2448e+05 },   // de ETABS
  { nombre: "VS 200X100X4X6", forma: "ISection", tipo: "I", material: "A36-VIGAS CON FLEJES", dim: { T3: 200, T2: 100, Tf: 6, Tw: 4, T2b: 100, Tfb: 6 },
    A: 1952.0, As2: 798.3, As3: 1077.6, I33: 1.3509e+07, I22: 1.001e+06, J: 18539 },   // de ETABS
  { nombre: "VS 250X100X4X6", forma: "ISection", tipo: "I", material: "A36-VIGAS CON FLEJES", dim: { T3: 250, T2: 100, Tf: 6, Tw: 4, T2b: 100, Tfb: 6 },
    A: 2152.0, As2: 999.3, As3: 1079.3, I33: 2.2358e+07, I22: 1.0013e+06, J: 19605 },   // de ETABS
  { nombre: "VS 300X100X4X6", forma: "ISection", tipo: "I", material: "A36-VIGAS CON FLEJES", dim: { T3: 300, T2: 100, Tf: 6, Tw: 4, T2b: 100, Tfb: 6 },
    A: 2352.0, As2: 1178.3, As3: 1080.5, I33: 3.3897e+07, I22: 1.0015e+06, J: 20672 },   // de ETABS
];

/** Busca una seccion por su nombre exacto. */
export function seccionPorNombre(n: string): SeccionCatalogo | undefined {
  return CATALOGO_SECCIONES.find(s => s.nombre === n);
}

/** Las secciones de una forma dada ("Tube", "ISection"...). */
export function seccionesPorForma(f: string): SeccionCatalogo[] {
  return CATALOGO_SECCIONES.filter(s => s.forma === f);
}

/** Las de Section Designer y compuestas: las que no tienen forma de catalogo. */
export function seccionesDibujadas(): SeccionCatalogo[] {
  return CATALOGO_SECCIONES.filter(s => Object.keys(s.dim).length === 0);
}
