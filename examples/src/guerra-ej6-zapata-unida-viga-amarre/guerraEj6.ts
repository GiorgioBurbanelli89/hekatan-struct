/**
 * Ej.6 Guerra MDI (pag.113-130) - ZAPATA UNIDA CON VIGA DE AMARRE
 *
 * Reutiliza el ejemplo existente `zapata-viga-amarre` (que ya tiene Shell Q4
 * + Frame viga + Pedestales + Winkler springs correctamente modelados) y
 * sobreescribe los defaults con los datos del libro Guerra Ej.6.
 *
 * Datos libro pag.113:
 *  Zapata 1 (medianera): Lz1=2.38m × Bz1=3.00m
 *  Zapata 2 (interna):   Lz2=2.45m × Bz2=2.45m
 *  Viga amarre:          Lv=1.64m, Bv=0.45m, Hv=0.95m
 *  Espesor zapatas:      tz=0.55m (Footing Thickness del f2k SAFE Ejm6 = h adoptado libro)
 *  Columna:              50×50cm
 *  Cargas:  Col1 P=110t (D=70 + L=40), Col2 P=140t (D=89 + L=51)
 *  f'c=210 kg/cm² → E=20.04 GPa (=14100·√210, valor del libro/SAFE)
 *  Suelo: q_adm=19 t/m², ks=3820 t/m³ = 37461 kN/m³
 */
import { zapataVigaAmarre } from "../zapata-viga-amarre/zapataVigaAmarre";
import type { ExampleDef } from "../workspace/exampleRegistry";

// Helper para override de parametros preservando metadata
function overrideParam(orig: any, newDefault: number, extras?: any) {
  return { ...orig, default: newDefault, ...extras };
}

export const guerraEj6ZapataUnida: ExampleDef = {
  ...zapataVigaAmarre,
  id: "guerra-ej6-zapata-unida-viga-amarre",
  name: "Ej.6 · Zapata Unida con Viga de Amarre (Guerra MDI pag.113)",
  category: "4️⃣ Mixtos · 🧰 Cimentaciones",
  guide: [
    "EJ.6 Guerra MDI pag.113-130. Zapata unida con viga de amarre.",
    "Zapata 1 (medianera): 2.38×3.00m. Zapata 2 (interna): 2.45×2.45m.",
    "Viga amarre Lv=1.64m, Bv=0.45m, Hv=0.95m. h_zapatas=0.55m.",
    "Cargas: Col1 P=110t (D=70+L=40). Col2 P=140t (D=89+L=51).",
    "f'c=210 kg/cm², q_adm=19 t/m², ks=3820 t/m³.",
    "Libro Fig.180: σ_max=26.179 t/m² (Z1 borde ext, col lindero).",
  ],
  params: {
    ...zapataVigaAmarre.params,
    Lz1: overrideParam(zapataVigaAmarre.params.Lz1, 2.38),
    Bz1: overrideParam(zapataVigaAmarre.params.Bz1, 3.00),
    Lv:  overrideParam(zapataVigaAmarre.params.Lv,  1.64),
    Bv:  overrideParam(zapataVigaAmarre.params.Bv,  0.45, { max: 1.0 }),
    Hv:  overrideParam(zapataVigaAmarre.params.Hv,  0.95, { max: 1.20 }),
    Lz2: overrideParam(zapataVigaAmarre.params.Lz2, 2.45),
    Bz2: overrideParam(zapataVigaAmarre.params.Bz2, 2.45),
    tz:  overrideParam(zapataVigaAmarre.params.tz,  0.55),
    bc:  overrideParam(zapataVigaAmarre.params.bc,  0.50),
    // Hp=0.5: pedestal corto pero suficiente para frame coupling entre Z1↔Z2.
    // Con Hp=0 (sin pedestal) la viga amarre NO transmite momentos → Z2 queda
    // uniforme. Con Hp=0.5 la eccentricidad de Col1 (medianera) se transfiere
    // parcialmente a Z2 via frame, generando gradiente visible como libro Fig.180.
    Hp:  overrideParam(zapataVigaAmarre.params.Hp,  0.5, { min: 0.01, max: 2.0, step: 0.05 }),
    ks:  overrideParam(zapataVigaAmarre.params.ks,  37461, { max: 60000 }),
    // Cargas del libro Guerra Ej.6 pag.113 separadas D y L:
    //   Col1: PCM=70t (Dead), PCV=40t (Live), total P1=110t (= D+L servicio)
    //   Col2: PCM=89t (Dead), PCV=51t (Live), total P2=140t (= D+L servicio)
    // Pu1 = 1.4·70 + 1.7·40 = 166.0t (combo LRFD per libro Guerra)
    // Pu2 = 1.4·89 + 1.7·51 = 211.3t
    // El FEM Hekatan aplica D+L servicio total; el F2K exporta D y L por
    // separado + combo Pu para que SAFE pueda diseñar con LRFD.
    P1:    overrideParam(zapataVigaAmarre.params.P1,    70),  // PCM
    P1_L:  overrideParam(zapataVigaAmarre.params.P1_L,  40),  // PCV
    M1x: overrideParam(zapataVigaAmarre.params.M1x, 0),
    M1y: overrideParam(zapataVigaAmarre.params.M1y, 0),
    P2:    overrideParam(zapataVigaAmarre.params.P2,    89),  // PCM
    P2_L:  overrideParam(zapataVigaAmarre.params.P2_L,  51),  // PCV
    M2x: overrideParam(zapataVigaAmarre.params.M2x, 0),
    // M2y = 0: SIN fudge. El gradiente de presión debe salir NATURAL de la
    // excentricidad de la columna medianera (al borde de Z1) + el acople de la
    // viga de amarre y los pedestales (Hp=0.8). Antes había un -35 manual para
    // forzar la figura del libro; lo quitamos para que el modelo sea físico.
    M2y: overrideParam(zapataVigaAmarre.params.M2y, 0, { min: -100, max: 100 }),
  },
  // Surfacea σ_max/σ_min de Hekatan + comparación con el libro (Fig.180), para
  // que Ej.6 muestre su resultado como el resto de los ejemplos Guerra.
  computedLabels(_p: any, states: any) {
    const KN_TO_TONF = 1 / 9.80665;
    const pmap = states.analyzeOutputs?.val?.pressure;
    let sMax = -Infinity, sMin = Infinity;
    if (pmap) for (const arr of pmap.values()) for (const v of arr) {
      const t = Math.abs(v) * KN_TO_TONF;
      if (t > sMax) sMax = t; if (t < sMin) sMin = t;
    }
    if (sMax === -Infinity) { sMax = 0; sMin = 0; }
    const SAFE_LIBRO = 24.179, MANUAL_LIBRO = 26.179;
    return {
      "📊 σ_max Hekatan": `${sMax.toFixed(3)} t/m²`,
      "📊 σ_min Hekatan": `${sMin.toFixed(3)} t/m²`,
      "📚 σ_max SAFE (libro)": `${SAFE_LIBRO} t/m²`,
      "📘 σ_max manual (Fig.180)": `${MANUAL_LIBRO} t/m²`,
      "Δ vs SAFE libro": `${((sMax - SAFE_LIBRO) / SAFE_LIBRO * 100).toFixed(1)} %`,
    };
  },
};
