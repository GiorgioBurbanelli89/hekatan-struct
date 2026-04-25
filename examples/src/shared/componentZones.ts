/**
 * Component-Based strength analysis — inspirado en IDEA StatiCa §CBFEM.
 *
 * Clasifica cada shell de una conexión en una "zona" (componente estructural)
 * y calcula el strength ratio por zona:
 *    ratio = max(σ_vm[elem_en_zona]) / Fy
 *
 * Luego identifica el componente gobernante (el de mayor ratio) y determina
 * el modo de falla esperado. Esto es la "tabla de componentes" que muestra
 * IDEA StatiCa en su panel de resultados, útil para dimensionar una conexión
 * porque te dice EXACTAMENTE qué elemento está gobernando y cuánto puede
 * subir la carga antes de que falle ese componente.
 *
 * Semáforo (convención IDEA):
 *    < 0.80 · Fy → ✓ verde   (reserva de capacidad)
 *    0.80–1.00  → ⚠ amarillo (cerca del límite, revisar)
 *    > 1.00     → ✗ rojo     (excede capacidad)
 */
import type { Node, Element } from "hekatan-fem";

export type ZoneKey =
  | "RBS_top"
  | "RBS_bot"
  | "beam_flange_top"
  | "beam_flange_bot"
  | "beam_web"
  | "col_flange_front"
  | "col_flange_back"
  | "col_web"
  | "weld_zone"
  | "plate_body"
  | "plate_around_bolt"
  | "other";

export interface ZoneClassifyInput {
  nodes: Node[];
  elements: Element[];
  // Parámetros geométricos para clasificar
  x_col_face: number;
  d_col: number;
  bf_col: number;
  tf_col: number;
  // Viga
  d_beam: number;
  bf_beam: number;
  tf_beam: number;
  x_rbs_start: number; // abs. x donde empieza el RBS
  x_rbs_end: number; // abs. x donde termina el RBS
  // Zona de soldadura = x ≈ cara columna ± tol
  weld_tol?: number; // default: 1.5 × tf_beam
}

export function classifyRbsZones(inp: ZoneClassifyInput): Map<number, ZoneKey> {
  const map = new Map<number, ZoneKey>();
  const tol = inp.weld_tol ?? inp.tf_beam * 1.5;

  for (let ei = 0; ei < inp.elements.length; ei++) {
    const e = inp.elements[ei];
    // Centroide (promedio de los 4 nodos; shell Q4)
    let cx = 0, cy = 0, cz = 0;
    for (const ni of e) {
      cx += inp.nodes[ni][0];
      cy += inp.nodes[ni][1];
      cz += inp.nodes[ni][2];
    }
    cx /= e.length;
    cy /= e.length;
    cz /= e.length;

    const absCx = Math.abs(cx);
    const absCy = Math.abs(cy);
    const absCz = Math.abs(cz);

    // Columna: |cx| cerca de ±d_col/2 → patín; |cy|≈0 y cx entre −d_col/2 y +d_col/2 → alma
    const isColFrontFlange = Math.abs(cx - (inp.d_col / 2 - inp.tf_col / 2)) < tol;
    const isColBackFlange = Math.abs(cx - (-inp.d_col / 2 + inp.tf_col / 2)) < tol;
    const isColWeb =
      absCy < 1e-3 && absCx <= inp.d_col / 2 && absCz <= inp.d_col; // cerca de la conexión

    // Viga: cx > cara de columna; cz ≈ ±d_beam/2 → patín; cy ≈ 0 → alma
    const isBeam = cx > inp.x_col_face - tol;
    const isBeamTopFlange = isBeam && Math.abs(cz - (inp.d_beam / 2 - inp.tf_beam / 2)) < tol;
    const isBeamBotFlange = isBeam && Math.abs(cz - (-inp.d_beam / 2 + inp.tf_beam / 2)) < tol;
    const isBeamWeb = isBeam && absCy < 1e-3 && absCz < inp.d_beam / 2 - inp.tf_beam / 2;

    // Zona de soldadura: primeros "tol" mm de la viga (cerca de la cara de columna)
    const isWeldZone = isBeam && cx < inp.x_col_face + tol * 2;

    // Zona RBS
    const isInRbs = cx >= inp.x_rbs_start && cx <= inp.x_rbs_end;

    let key: ZoneKey = "other";
    if (isWeldZone && (isBeamTopFlange || isBeamBotFlange || isBeamWeb)) {
      key = "weld_zone";
    } else if (isBeamTopFlange && isInRbs) key = "RBS_top";
    else if (isBeamBotFlange && isInRbs) key = "RBS_bot";
    else if (isBeamTopFlange) key = "beam_flange_top";
    else if (isBeamBotFlange) key = "beam_flange_bot";
    else if (isBeamWeb) key = "beam_web";
    else if (isColFrontFlange) key = "col_flange_front";
    else if (isColBackFlange) key = "col_flange_back";
    else if (isColWeb) key = "col_web";

    map.set(ei, key);
  }
  return map;
}

export interface StrengthRatio {
  zone: ZoneKey;
  label: string;
  nElements: number;
  maxVm: number;
  meanVm: number;
  ratio: number; // maxVm / Fy
  status: "green" | "yellow" | "red";
  statusIcon: string;
}

const ZONE_LABELS: Record<ZoneKey, string> = {
  RBS_top: "RBS — patín sup.",
  RBS_bot: "RBS — patín inf.",
  beam_flange_top: "Viga — patín sup.",
  beam_flange_bot: "Viga — patín inf.",
  beam_web: "Viga — alma",
  col_flange_front: "Columna — patín frontal",
  col_flange_back: "Columna — patín trasero",
  col_web: "Columna — alma",
  weld_zone: "Zona soldadura",
  plate_body: "Cuerpo placa",
  plate_around_bolt: "Placa alrededor del perno",
  other: "Otros",
};

export function computeStrengthRatios(
  zoneMap: Map<number, ZoneKey>,
  vonMisesPerElement: Map<number, number[]>, // analyzeOutputs.vonMises
  Fy: number,
): StrengthRatio[] {
  // Agrupar σ_vm por zona
  const groups = new Map<ZoneKey, { vmValues: number[]; count: number }>();
  for (const [ei, zone] of zoneMap.entries()) {
    const vmArr = vonMisesPerElement.get(ei);
    if (!vmArr || vmArr.length === 0) continue;
    let vmMax = 0;
    for (const v of vmArr) {
      const a = Math.abs(v);
      if (a > vmMax) vmMax = a;
    }
    let g = groups.get(zone);
    if (!g) {
      g = { vmValues: [], count: 0 };
      groups.set(zone, g);
    }
    g.vmValues.push(vmMax);
    g.count++;
  }

  const result: StrengthRatio[] = [];
  for (const [zone, g] of groups.entries()) {
    if (g.vmValues.length === 0) continue;
    const maxVm = Math.max(...g.vmValues);
    const meanVm = g.vmValues.reduce((a, b) => a + b, 0) / g.vmValues.length;
    const ratio = maxVm / Fy;
    let status: "green" | "yellow" | "red" = "green";
    let statusIcon = "🟢";
    if (ratio > 1.0) {
      status = "red";
      statusIcon = "🔴";
    } else if (ratio > 0.8) {
      status = "yellow";
      statusIcon = "🟡";
    }
    result.push({
      zone,
      label: ZONE_LABELS[zone],
      nElements: g.count,
      maxVm,
      meanVm,
      ratio,
      status,
      statusIcon,
    });
  }
  // Orden: peor (más rojo) arriba
  result.sort((a, b) => b.ratio - a.ratio);
  return result;
}

export function governingComponent(ratios: StrengthRatio[]): StrengthRatio | null {
  return ratios.length > 0 ? ratios[0] : null;
}

export function failureMode(gov: StrengthRatio | null): string {
  if (!gov) return "—";
  if (gov.ratio < 0.5) return "Sin esfuerzo significativo (aumentá carga)";
  if (gov.ratio < 0.8) return "Rango elástico seguro";
  if (gov.ratio < 1.0) return `Cerca del límite — governing: ${gov.label}`;
  if (gov.ratio < 1.5) return `⚠ Fluencia en: ${gov.label}`;
  return `✗ COLAPSO en: ${gov.label} (σ=${gov.ratio.toFixed(1)}×Fy)`;
}
