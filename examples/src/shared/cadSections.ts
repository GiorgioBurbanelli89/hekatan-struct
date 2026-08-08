/**
 * cadSections.ts — Helpers PUROS de propiedades de sección para el modelador CAD.
 *
 * Extraído de getCad3d.ts (refactor: separar la matemática pura del God file).
 * Cada función recibe dimensiones y devuelve { A, Iz, Iy, J } con la convención
 * ESTÁNDAR de sección (AISC):
 *    Iz = eje FUERTE (flexión en la dirección del canto h)
 *    Iy = eje DÉBIL  (flexión en la dirección del ancho b)
 *
 * IMPORTANTE — convención de ejes locales del solver (ver CLAUDE.md "Ejes locales"):
 * los ejes locales son ahora los de CSI (eje 2 = plano vertical hacia arriba), así
 * que al asignar al solver el eje FUERTE (Iz aquí) va en `momentsOfInertiaZ` = I33
 * y el débil (Iy aquí) en `momentsOfInertiaY` = I22. Antes era al revés.
 * Para no equivocarse, usar `toLocalInertia()`.
 */

export interface SectionProps {
  A: number;
  Iz: number; // eje fuerte (canto³)
  Iy: number; // eje débil (ancho³)
  J: number;
}

/** Mapea las inercias de sección (Iz=fuerte, Iy=débil) a los ejes LOCALES del solver.
 *  Convención CSI: el fuerte es I33 y va en momentsOfInertiaZ. */
export function toLocalInertia(sec: SectionProps): { moiZ: number; moiY: number } {
  return { moiZ: sec.Iz, moiY: sec.Iy }; // fuerte→Z (I33), débil→Y (I22)
}

/** Sección rectangular maciza. b=ancho, h=canto. */
export function rectSection(b: number, h: number): SectionProps {
  const A = b * h;
  const Iz = (b * h * h * h) / 12; // eje fuerte (canto h al cubo)
  const Iy = (h * b * b * b) / 12; // eje débil
  const a = Math.min(b, h), bv = Math.max(b, h);
  const J = a * a * a * bv * (1 / 3 - 0.21 * (a / bv) * (1 - (a * a * a * a) / (12 * bv * bv * bv * bv)));
  return { A, Iz, Iy, J };
}

/** Sección circular maciza. d=diámetro. */
export function circSection(d: number): SectionProps {
  const r = d / 2;
  const A = Math.PI * r * r;
  const I = (Math.PI * r * r * r * r) / 4;
  const J = (Math.PI * r * r * r * r) / 2;
  return { A, Iz: I, Iy: I, J };
}

/** Perfil I paramétrico. bf=ancho ala, h=canto total, tf=espesor ala, tw=espesor alma. */
export function iParamSection(bf: number, h: number, tf: number, tw: number): SectionProps {
  const hw = h - 2 * tf; // altura del alma
  const A = 2 * bf * tf + hw * tw;
  const Iz = (bf * h * h * h - (bf - tw) * hw * hw * hw) / 12; // eje fuerte
  const Iy = (2 * tf * bf * bf * bf + hw * tw * tw * tw) / 12; // eje débil
  const J = (2 * bf * tf * tf * tf + hw * tw * tw * tw) / 3; // torsión (sección abierta, aprox)
  return { A, Iz, Iy, J };
}

/** Tubular hueca rectangular. b=ancho, h=canto, t=espesor de pared. */
export function hollowRectSection(b: number, h: number, t: number): SectionProps {
  const bi = b - 2 * t, hi = h - 2 * t;
  const A = b * h - bi * hi;
  const Iz = (b * h * h * h - bi * hi * hi * hi) / 12;
  const Iy = (h * b * b * b - hi * bi * bi * bi) / 12;
  const Am = (b - t) * (h - t); // área encerrada por la línea media (Bredt)
  const perim = 2 * ((b - t) / t + (h - t) / t);
  const J = (4 * Am * Am) / (perim > 0 ? perim : 1);
  return { A, Iz, Iy, J };
}

/** CFT (tubo de acero relleno de hormigón) — sección transformada a acero equivalente.
 *  b,h=dims exteriores, t=espesor pared; Es,nuS=acero; fc,nuC=hormigón (kN/m²). */
export function cftSection(
  b: number, h: number, t: number,
  Es: number, nuS: number, fc: number, nuC: number,
): SectionProps & { Es: number; Gs: number; A_steel: number; A_conc: number } {
  const Ec = 4700 * Math.sqrt(fc / 1000) * 1000; // kN/m²
  const n = Ec / Es; // razón modular
  // Tubo de acero
  const bi = b - 2 * t, hi = h - 2 * t;
  const A_steel = b * h - bi * hi;
  const Iz_steel = (b * h * h * h - bi * hi * hi * hi) / 12;
  const Iy_steel = (h * b * b * b - hi * bi * bi * bi) / 12;
  // Núcleo de hormigón
  const A_conc = bi * hi;
  const Iz_conc = (bi * hi * hi * hi) / 12;
  const Iy_conc = (hi * bi * bi * bi) / 12;
  // Transformada (acero equivalente)
  const A = A_steel + n * A_conc;
  const Iz = Iz_steel + n * Iz_conc;
  const Iy = Iy_steel + n * Iy_conc;
  const Gs = Es / (2 * (1 + nuS));
  // Torsión (Bredt sólo tubo de acero — conservador)
  const Am = (b - t) * (h - t);
  const perim = 2 * ((b - t) / t + (h - t) / t);
  const J = (4 * Am * Am) / (perim > 0 ? perim : 1);
  return { A, Iz, Iy, J, Es, Gs, A_steel, A_conc };
}
