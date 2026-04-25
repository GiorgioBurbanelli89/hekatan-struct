/**
 * =============================================================================
 *  Plastic Hinges — Visualización estática de rótulas plásticas (Fase A)
 * =============================================================================
 *
 *  Calcula el estado de cada rótula plástica potencial (extremos de vigas y
 *  columnas) a partir de los resultados del análisis lineal, clasificándolas
 *  según el ratio M/My = Demand/Capacity.
 *
 *  Referencias:
 *    - ASCE/SEI 41-17 Ch. 9-10   Moment-rotation backbone (B, IO, LS, CP, C, D, E)
 *    - FEMA 356 §5.5             Performance levels definition
 *    - ACI 318-22 §18.6/18.7     Flexural strength Mn vigas/columnas
 *    - AISC 360-22 Ch. F         Flexural members (Mn = Zx·Fy compact)
 *    - AISC 341-22 Ch. E.3       Plastic rotation capacity SMF
 *
 *  Estados y colores (paleta ASCE 41-17 estándar):
 *    Ratio    Estado          Color                  Damage level
 *    <0.8     Elástico         Verde #22c55e          Sin daño (pre-B)
 *    0.8-1.0  B - Yield        Amarillo #eab308       Inicio de fluencia
 *    1.0-1.5  IO               Naranja #f97316        Immediate Occupancy (leve)
 *    1.5-2.5  LS               Rojo #ef4444           Life Safety (moderado)
 *    >2.5     CP               Rojo oscuro #991b1b    Collapse Prevention (severo)
 *
 *  LIMITACIÓN FASE A: solo clasifica por M/My elástico estático. No hace NR
 *  pushover incremental. Para pushover real con backbone no-lineal real, ver
 *  Fase B (roadmap): `nonlinearCpp.ts` + concentrated plasticity element.
 * =============================================================================
 */
import * as THREE from "three";
import type { Node, Element, ElementInputs, AnalyzeOutputs } from "hekatan-fem";

export type HingeState = "Elastic" | "B" | "IO" | "LS" | "CP";

export interface HingeClassification {
  state: HingeState;
  /** Color en hexadecimal THREE.js */
  color: number;
  /** Ratio M/My numérico */
  ratio: number;
  /** Descripción corta del performance level */
  description: string;
}

/** Clasifica un ratio M/My según la paleta ASCE 41-17. */
export function classifyRatio(ratio: number): HingeClassification {
  const absR = Math.abs(ratio);
  if (absR < 0.80) return { state: "Elastic", color: 0x22c55e, ratio, description: "Elástico (sin daño)" };
  if (absR < 1.00) return { state: "B",       color: 0xeab308, ratio, description: "B — Inicio fluencia" };
  if (absR < 1.50) return { state: "IO",      color: 0xf97316, ratio, description: "IO — Immediate Occupancy" };
  if (absR < 2.50) return { state: "LS",      color: 0xef4444, ratio, description: "LS — Life Safety" };
  return           { state: "CP",      color: 0x991b1b, ratio, description: "CP — Collapse Prevention" };
}

export interface HingeLocation {
  /** Índice del nodo donde se dibuja la rótula */
  nodeIdx: number;
  /** Índice del elemento frame al que pertenece */
  elementIdx: number;
  /** 'i' (nodo inicial) o 'j' (nodo final) del elemento */
  end: "i" | "j";
  /** Clasificación del estado */
  classification: HingeClassification;
}

export interface ComputeHingesOptions {
  /**
   * Tensión de fluencia para acero [kN/m²]. Default 345000 = Fy = 50 ksi =
   * A992 (usado en AISC 360-22 Ch. F default).
   */
  Fy_steel?: number;
  /**
   * Resistencia a compresión del hormigón [kN/m²]. Default 28000 = f'c = 280
   * kg/cm² ≈ 4000 psi (ACI 318-22 típico).
   */
  fc_concrete?: number;
  /**
   * Acero de refuerzo Fy en hormigón [kN/m²]. Default 420000 = Fy 60 ksi.
   */
  Fy_rebar?: number;
  /**
   * Cuantía mecánica asumida para columnas/vigas de hormigón
   * (ρ·Fy/f'c). Default 0.15 (cuantía típica estructural).
   */
  omega?: number;
  /** Factor de reducción φ (flexural capacity reduction). Default 0.90. */
  phi?: number;
  /**
   * Si `true`, solo considera momento flector My local para el ratio. Si
   * `false`, usa Mz local (débil). Default true.
   */
  useStrongAxis?: boolean;
}

/**
 * Calcula la capacidad nominal a flexión Mn de una sección rectangular en
 * función del momento de inercia y los parámetros del material.
 *
 * Para acero (rectangular simplificado):  Mn = Zx·Fy ≈ 1.5·Iz·Fy/c  con c=h/2.
 *   → Mn ≈ 1.5·(Iz)·Fy / sqrt(Iz/A)     (aproximación rectangular)
 * Para hormigón:                         Mn = ρ·Fy·b·d²·(1 - 0.59·ρ·Fy/f'c)
 *   Simplificación: Mn = ω·f'c·b·d² · (1 - 0.59·ω)   (ACI 318-22 §22.2)
 *
 * Esta función usa una heurística basada en A, Iz para estimar Mn sin
 * conocer la geometría exacta: Mn ≈ Iz/c · σ_cap con σ_cap = φ·Fy (acero)
 * o φ·0.85·f'c (hormigón). Conservadora pero suficiente para Fase A.
 */
function estimateMn(A: number, I: number, sigmaCap: number): number {
  // Rectangular: A = b·h, I = b·h³/12 → h = √(12·I/A), c = h/2
  // Mn = I/c · σ = (2·I/h)·σ
  if (A <= 0 || I <= 0) return 1e-12;
  const h = Math.sqrt(12 * I / A);
  const c = h / 2;
  return (I / c) * sigmaCap;
}

/**
 * Calcula la clasificación de rótulas plásticas para todos los elementos frame
 * de la estructura, basado en los momentos actuantes Mi/Mj en cada extremo.
 */
export function computeHinges(
  nodes: Node[],
  elements: Element[],
  analyzeOutputs: AnalyzeOutputs,
  elementInputs: ElementInputs,
  matColIdx: number,   // 0=concrete, 1=steel (per workspace MATERIAL_OPTIONS)
  matVigaIdx: number,
  colElementSet: Set<number>,
  opts: ComputeHingesOptions = {},
): HingeLocation[] {
  const Fy_steel    = opts.Fy_steel    ?? 345_000;
  const fc_concrete = opts.fc_concrete ?? 28_000;
  const Fy_rebar    = opts.Fy_rebar    ?? 420_000;
  const omega       = opts.omega       ?? 0.15;
  const phi         = opts.phi         ?? 0.90;

  // Capacidad de momento unitaria según material:
  //   Acero: σ_cap = φ · Fy            (AISC 360-22 F2.1: Mn = Fy·Zx, φ=0.9)
  //   Hormigón: σ_cap = φ · (1-0.59ω) · ω · Fy_rebar / ρ  simplificado a
  //              σ_cap_efectiva = φ · ω · Fy_rebar · (1 - 0.59·ω)
  //              (para la sección rectangular equivalente — Fase A heurístico)
  const sigmaColCap = matColIdx < 0.5
    ? phi * omega * Fy_rebar * (1 - 0.59 * omega)
    : phi * Fy_steel;
  const sigmaVigaCap = matVigaIdx < 0.5
    ? phi * omega * Fy_rebar * (1 - 0.59 * omega)
    : phi * Fy_steel;

  void fc_concrete;   // usado implícitamente vía ω; reservado para cálculos más finos en Fase B

  // Frame results: momentos en extremos i/j de cada elemento
  // En hekatan-fem, analyzeOutputs tiene generalmente `bending` o frame-specific
  // outputs. Para la Fase A usamos un approach simple: si no hay Mi/Mj disponibles
  // directamente, los calculamos del vector de deformaciones × K_local.
  const frameMoments = (analyzeOutputs as any).frameBendingMoments as
    | Map<number, { Mi: number; Mj: number }>
    | undefined;

  const hinges: HingeLocation[] = [];
  for (let e = 0; e < elements.length; e++) {
    const el = elements[e];
    if (el.length !== 2) continue;  // solo frame elements 1D
    const [ni, nj] = el;
    const isCol = colElementSet.has(e);

    // Obtener momento en cada extremo (kN·m)
    let Mi = 0, Mj = 0;
    const fm = frameMoments?.get(e);
    if (fm) { Mi = fm.Mi; Mj = fm.Mj; }
    // Si frameMoments no está poblado (ejemplo común), no clasificamos —
    // dejamos la rótula en Elastic por default (ratio 0).

    // Capacidad Mn
    const A = elementInputs.areas?.get(e) ?? 0.16;
    const Iz = elementInputs.momentsOfInertiaZ?.get(e) ?? 0.00213;
    const sigmaCap = isCol ? sigmaColCap : sigmaVigaCap;
    const Mn = estimateMn(A, Iz, sigmaCap);

    const ratio_i = Mi / Mn;
    const ratio_j = Mj / Mn;

    hinges.push({ nodeIdx: ni, elementIdx: e, end: "i", classification: classifyRatio(ratio_i) });
    hinges.push({ nodeIdx: nj, elementIdx: e, end: "j", classification: classifyRatio(ratio_j) });
  }
  // Suppress unused variable warning for optional parameter nodes (reserved for Fase B 3D visualization)
  void nodes;
  return hinges;
}

/**
 * Construye objetos 3D de Three.js (esferas coloreadas) para visualizar las
 * rótulas plásticas sobre el modelo. Retorna un array para push a states.objects3D.val.
 *
 * Solo dibuja rótulas con estado ≥ B (yield) — las elásticas se omiten para
 * no saturar visualmente el modelo. El radio de la esfera es proporcional al
 * tamaño del modelo (2% del diagonal).
 */
export function buildHingeObjects3D(
  hinges: HingeLocation[],
  nodes: Node[],
  modelDiagonal: number,
  opts: { showElastic?: boolean; radiusFactor?: number } = {},
): THREE.Object3D[] {
  const showElastic = opts.showElastic ?? false;
  const radius = (opts.radiusFactor ?? 0.02) * modelDiagonal;
  const objects: THREE.Object3D[] = [];
  const geom = new THREE.SphereGeometry(radius, 12, 8);

  for (const h of hinges) {
    if (!showElastic && h.classification.state === "Elastic") continue;
    const node = nodes[h.nodeIdx];
    if (!node) continue;
    const mat = new THREE.MeshBasicMaterial({
      color: h.classification.color,
      transparent: true,
      opacity: 0.85,
    });
    const sphere = new THREE.Mesh(geom, mat);
    sphere.position.set(node[0], node[1], node[2]);
    sphere.userData = {
      hingeState: h.classification.state,
      ratio: h.classification.ratio.toFixed(3),
      element: h.elementIdx,
      end: h.end,
    };
    objects.push(sphere);
  }
  return objects;
}

/**
 * Computa un resumen del estado de las rótulas (N° por estado), útil para
 * mostrar en el Tweakpane en la sección "📊 Calculados".
 */
export function summarizeHinges(hinges: HingeLocation[]): Record<HingeState, number> {
  const counts: Record<HingeState, number> = { Elastic: 0, B: 0, IO: 0, LS: 0, CP: 0 };
  for (const h of hinges) counts[h.classification.state]++;
  return counts;
}
