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
 *  Espesor zapatas:      tz=0.55m
 *  Columna:              50×50cm
 *  Cargas:  Col1 P=110t (D=70 + L=40), Col2 P=140t (D=89 + L=51)
 *  f'c=210 kg/cm² → E≈25 GPa (default del ejemplo base)
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
  category: "📚 Libros · SAFE - Marcelo Guerra",
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
    Hp:  overrideParam(zapataVigaAmarre.params.Hp,  1.00),
    ks:  overrideParam(zapataVigaAmarre.params.ks,  37461, { max: 60000 }),
    P1:  overrideParam(zapataVigaAmarre.params.P1,  110),
    M1x: overrideParam(zapataVigaAmarre.params.M1x, 0),
    M1y: overrideParam(zapataVigaAmarre.params.M1y, 0),
    P2:  overrideParam(zapataVigaAmarre.params.P2,  140),
    M2x: overrideParam(zapataVigaAmarre.params.M2x, 0),
    M2y: overrideParam(zapataVigaAmarre.params.M2y, 0),
  },
};
