/**
 * =============================================================================
 *  cftDesign — CFT (Concrete-Filled Tube) column design per AISC 360-22 §I2
 * =============================================================================
 *
 *  Helpers para columnas de tubo de acero relleno de concreto (Composite).
 *
 *  Normas cubiertas:
 *    - AISC 360-22 Ch. I   (Composite Members, CFT = §I2)
 *    - ACI 318-22 §10      (Composite compression members)
 *    - Eurocode 4           (simplified method analog)
 *
 *  Niveles de modelado (ver columna-cft para Level 1):
 *    Level 1 — Sección equivalente (lo que implementa este helper)
 *    Level 2 — Fiber section con Mander concreto confinado (roadmap)
 *    Level 3 — 3D solid + CDP (fuera de scope para diseño rutinario)
 * =============================================================================
 */

export type CftShape = "circular" | "rectangular";

export interface CftSectionInput {
  /** Forma del tubo: "circular" o "rectangular" */
  shape: CftSectionInput["shape"] extends never ? CftShape : CftShape;
  /** Diámetro exterior [m] para circular, ancho B para rectangular */
  D?: number;
  /** Para rectangular: altura H [m] (si shape=circular, ignorar) */
  H?: number;
  /** Espesor del tubo de acero [m] */
  t: number;
  /** Long column [m] */
  L: number;
  /** Resistencia concreto [kN/m²] (ACI convention, ≡ f'c) */
  fc: number;
  /** Tensión de fluencia acero [kN/m²] (AISC convention, ≡ Fy) */
  Fy: number;
  /** Módulo de elasticidad acero [kN/m²]. Default 200 GPa */
  Es?: number;
  /** Refuerzo adicional ρ_r (cuantía), típicamente 0 si solo relleno */
  rhoSR?: number;
  /** Factor K efectivo de longitud (AISC Table C-A-7.1). Default K=1 (empotrado-deslizante) */
  K?: number;
}

export interface CftCapacityResult {
  /** Área de acero [m²] */
  As: number;
  /** Área de concreto [m²] */
  Ac: number;
  /** Área bruta [m²] */
  Ag: number;
  /** Momento de inercia acero [m⁴] */
  Is: number;
  /** Momento de inercia concreto [m⁴] */
  Ic: number;
  /** Módulo de elasticidad concreto [kN/m²] (ACI Ec=4700√fc[MPa]) */
  Ec: number;
  /** Resistencia axial nominal compresiva [kN] — AISC §I2.1b */
  Pno: number;
  /** Rigidez flexural efectiva [kN·m²] — AISC §I2.1b ecu. I2-12 */
  EI_eff: number;
  /** Rigidez axial efectiva [kN] */
  EA_eff: number;
  /** Factor de reducción C1 para concreto (0.25–0.7) */
  C1: number;
  /** Factor C2 para Pno (0.85 rect, 0.95 circ) */
  C2: number;
  /** Factor C3 para refuerzo (0.5 default) */
  C3: number;
  /** Clasificación por esbeltez local (AISC §I1.4) */
  slenderness: "compact" | "noncompact" | "slender";
  /** Ratio D/t (o b/t para rectangular) */
  slendernessRatio: number;
  /** Límites de esbeltez λp, λr para comparación */
  lambda_p: number;
  lambda_r: number;
  /** Resistencia a pandeo global Pn [kN] — AISC §I2.2 */
  Pn: number;
  /** Resistencia a tracción Pnt = Fy·As [kN] */
  Pnt: number;
  /** Resistencia a flexión nominal Mno [kN·m] — plastic stress distribution */
  Mno: number;
  /** Resistencia a corte Vn [kN] — AISC §I2.4 */
  Vn: number;
  /** Esbeltez global adimensional Pno/Pe */
  lambda_global: number;
  /** Parámetros adicionales para debugging/reporte */
  Pe: number;   // Euler buckling load
}

/**
 * Módulo elástico del concreto según ACI 318-22 §19.2.2:
 *   Ec = 4700·√f'c [MPa]  para f'c en MPa
 *   Devuelto en kN/m² para consistencia con Hekatan.
 */
export function concreteE(fc_kNm2: number): number {
  const fc_MPa = fc_kNm2 / 1000;
  const Ec_MPa = 4700 * Math.sqrt(fc_MPa);
  return Ec_MPa * 1000;   // MPa → kN/m²
}

/**
 * Calcula capacidad completa de columna CFT según AISC 360-22 §I2.
 *
 * Diferencias clave vs simple homogenización:
 *   - Pno NO es Fy·As + f'c·Ac (equivalente ACI)
 *     ES:  Pno = Fy·As + C2·f'c·Ac·(1 + ρr·Es/Ec)  con C2=0.85 rect, 0.95 circ
 *   - EI_eff NO es Es·Is + Ec·Ic
 *     ES:  EI_eff = Es·Is + C3·Es·Isr + C1·Ec·Ic  con C1=0.25+3(As+Asr)/Ag ≤ 0.7
 *   - Diferencia del 15-25% típica → importante para diseño
 */
export function cftCapacity(input: CftSectionInput): CftCapacityResult {
  const shape = input.shape ?? "circular";
  const t = input.t;
  const L = input.L;
  const fc = input.fc;
  const Fy = input.Fy;
  const Es = input.Es ?? 200_000_000;   // 200 GPa en kN/m²
  const rhoSR = input.rhoSR ?? 0;
  const K = input.K ?? 1.0;

  // ── Geometría ──────────────────────────────────────────────────
  let As: number, Ac: number, Ag: number, Is: number, Ic: number;
  let slendernessRatio: number;
  let C2: number;

  if (shape === "circular") {
    const D_out = input.D!;
    const D_in = D_out - 2 * t;
    Ag = Math.PI * D_out * D_out / 4;
    const Ac0 = Math.PI * D_in * D_in / 4;
    As = Ag - Ac0;
    Ac = Ac0;
    Is = (Math.PI / 64) * (Math.pow(D_out, 4) - Math.pow(D_in, 4));
    Ic = (Math.PI / 64) * Math.pow(D_in, 4);
    slendernessRatio = D_out / t;
    C2 = 0.95;   // AISC §I2.1b.2 (better confinement in circular)
  } else {
    // rectangular
    const B = input.D!;      // ancho
    const H = input.H ?? B;  // alto, si no se da asume cuadrado
    Ag = B * H;
    const B_in = B - 2 * t;
    const H_in = H - 2 * t;
    const Ac0 = B_in * H_in;
    As = Ag - Ac0;
    Ac = Ac0;
    // Momentos de inercia respecto al eje débil (conservador)
    Is = (B * Math.pow(H, 3) - B_in * Math.pow(H_in, 3)) / 12;
    Ic = B_in * Math.pow(H_in, 3) / 12;
    slendernessRatio = Math.max(B, H) / t;   // b/t máximo
    C2 = 0.85;   // AISC §I2.1b.1
  }

  // ── Ec concreto (ACI 318-22 §19.2.2) ──────────────────────────
  const Ec = concreteE(fc);

  // ── Factores de reducción para EI_eff (AISC §I2.1b ecu. I2-12) ──
  // C1 = 0.25 + 3 · (As + Asr) / Ag ≤ 0.7
  const Asr = rhoSR * Ag;   // refuerzo longitudinal adicional
  const C1 = Math.min(0.7, 0.25 + 3 * (As + Asr) / Ag);
  const C3 = 0.5;   // fixed per AISC

  // ── Pno compresión nominal (AISC §I2.1b, ecu. I2-9a) ──────────
  // Pno = Fy·As + C2·f'c·(Ac + Asr·Es/Ec)
  const Pno = Fy * As + C2 * fc * (Ac + Asr * Es / Ec);

  // ── EI_eff (AISC §I2.1b, ecu. I2-12) ──────────────────────────
  // EI_eff = Es·Is + C3·Es·Isr + C1·Ec·Ic
  const Isr = 0;   // simplificación: sin refuerzo longitudinal separado del tubo
  const EI_eff = Es * Is + C3 * Es * Isr + C1 * Ec * Ic;

  // ── EA_eff ────────────────────────────────────────────────────
  const EA_eff = Es * As + Es * Asr + Ec * Ac;

  // ── Esbeltez local D/t (AISC §I1.4, Table I1.1a para CFT) ─────
  let lambda_p: number, lambda_r: number, slenderness: CftCapacityResult["slenderness"];
  if (shape === "circular") {
    // HSS circular compuesto (D/t)
    lambda_p = 0.15 * Es / Fy;
    lambda_r = 0.19 * Es / Fy;
  } else {
    // HSS rectangular compuesto (b/t)
    lambda_p = 2.26 * Math.sqrt(Es / Fy);
    lambda_r = 3.00 * Math.sqrt(Es / Fy);
  }
  if (slendernessRatio <= lambda_p)      slenderness = "compact";
  else if (slendernessRatio <= lambda_r) slenderness = "noncompact";
  else                                    slenderness = "slender";

  // ── Pandeo global (AISC §I2.2, ecu. I2-2) ─────────────────────
  // Pe = π²·EI_eff / (K·L)²
  const KL = K * L;
  const Pe = (Math.PI * Math.PI * EI_eff) / (KL * KL);
  const lambda_global = Pno / Pe;

  let Pn: number;
  if (lambda_global <= 2.25) {
    // Inelastic buckling: Pn = Pno · 0.658^(Pno/Pe)  (ecu I2-2)
    Pn = Pno * Math.pow(0.658, lambda_global);
  } else {
    // Elastic buckling: Pn = 0.877 · Pe  (ecu I2-3)
    Pn = 0.877 * Pe;
  }

  // ── Resistencia a tracción Pnt (AISC §I2.5) ───────────────────
  const Pnt = Fy * As + rhoSR * Fy * Ag;   // el concreto no aporta en tracción

  // ── Flexión nominal Mno — plastic stress distribution (simplificado) ──
  // Para CFT circular: Mno ≈ 0.9 · Fy · Zs  (Zs = módulo plástico del tubo)
  // Zs = (D_out^3 - D_in^3) / 6    (aproximación para tubo circular delgado)
  let Zs: number;
  if (shape === "circular") {
    const D_out = input.D!, D_in = D_out - 2 * t;
    Zs = (Math.pow(D_out, 3) - Math.pow(D_in, 3)) / 6;
  } else {
    const B = input.D!, H = input.H ?? B;
    const B_in = B - 2 * t, H_in = H - 2 * t;
    Zs = (B * H * H - B_in * H_in * H_in) / 4;
  }
  // Mno incluye contribución del concreto comprimido (plastic stress distribution)
  // Conservadoramente: Mno ≈ Fy·Zs (acero) + 0.85·fc·Zc/2 (concreto mitad comprimida)
  const Mno = Fy * Zs + 0.85 * fc * Ic / (input.D! / 2);

  // ── Corte nominal Vn (AISC §I2.4) ─────────────────────────────
  // Vn = 0.6·Fy·Aw  (aplicando solo al acero del tubo)
  // Aw aproximado como 2·t·(D-t) para circular, 2·t·(H-t) para rectangular
  let Aw: number;
  if (shape === "circular") {
    Aw = 2 * t * (input.D! - t);   // dos paredes en direccion de corte
  } else {
    const H = input.H ?? input.D!;
    Aw = 2 * t * (H - t);
  }
  const Vn = 0.6 * Fy * Aw;

  return {
    As, Ac, Ag, Is, Ic, Ec,
    Pno, EI_eff, EA_eff,
    C1, C2, C3,
    slenderness, slendernessRatio, lambda_p, lambda_r,
    Pn, Pnt, Mno, Vn,
    lambda_global, Pe,
  };
}

/**
 * Genera puntos del diagrama de interacción P-M para columna CFT según
 * plastic stress distribution method (AISC 360-22 §I2.3 / §I1.2).
 *
 * Puntos clave:
 *   A:  (Pn, 0)       Compresión pura (con esbeltez)
 *   B:  (0.5·fc·Ac + 0.5·Fy·As, Mno_aproximado)
 *   C:  (0, Mno)      Flexión pura
 *   D:  (Pnt, 0)      Tensión pura (negativo)
 *
 * Retorna array ordenado de {P, M} uniendo linealmente (aproximación).
 */
export function cftInteractionDiagram(input: CftSectionInput, nPoints: number = 20): Array<{ P: number; M: number }> {
  const cap = cftCapacity(input);
  const points: Array<{ P: number; M: number }> = [];

  // Tramo superior: compresión alta → balance (aprox lineal)
  // Tramo inferior: balance → flexión pura (aprox cuadrático)
  // Para una implementación didáctica, interpolación lineal suficiente.

  const Pbal = 0.5 * input.fc * cap.Ac + 0.5 * input.Fy * cap.As * 0.5;   // aprox
  const Mbal = cap.Mno * 1.1;   // pequeño aumento al tener compresión axial

  const nTop = Math.floor(nPoints / 2);
  const nBot = nPoints - nTop;

  for (let i = 0; i <= nTop; i++) {
    const alpha = i / nTop;
    points.push({
      P: cap.Pn * (1 - alpha) + Pbal * alpha,
      M: 0 + Mbal * alpha,
    });
  }
  for (let i = 1; i <= nBot; i++) {
    const alpha = i / nBot;
    points.push({
      P: Pbal * (1 - alpha),
      M: Mbal * (1 - alpha) + cap.Mno * alpha,
    });
  }
  // Tracción negativa
  points.push({ P: -cap.Pnt, M: 0 });

  return points;
}

/**
 * Verifica una demanda (Pu, Mu) contra la capacidad via ecuación de interacción
 * AISC 360-22 §H1.1 (biaxial reducida a uniaxial):
 *
 *   si Pu/Pc ≥ 0.2:  Pu/Pc + 8/9·Mu/Mc ≤ 1.0
 *   si Pu/Pc < 0.2:  Pu/(2·Pc) + Mu/Mc ≤ 1.0
 *
 * donde Pc = φc·Pn (0.75), Mc = φb·Mno (0.90).
 */
export function cftCheck(
  input: CftSectionInput,
  Pu: number,     // kN (positivo = compresión)
  Mu: number,     // kN·m
): { ratio: number; passes: boolean; Pc: number; Mc: number; governing: string } {
  const cap = cftCapacity(input);
  const phi_c = 0.75;   // AISC §I2.1b compression
  const phi_b = 0.90;   // AISC §I2.3 flexion
  const Pc = phi_c * cap.Pn;
  const Mc = phi_b * cap.Mno;

  const pRatio = Pu / Pc;
  let ratio: number;
  let governing: string;
  if (pRatio >= 0.2) {
    ratio = pRatio + (8 / 9) * (Mu / Mc);
    governing = "Eq. H1-1a (P/Pc ≥ 0.2)";
  } else {
    ratio = pRatio / 2 + Mu / Mc;
    governing = "Eq. H1-1b (P/Pc < 0.2)";
  }
  return { ratio, passes: ratio <= 1.0, Pc, Mc, governing };
}
