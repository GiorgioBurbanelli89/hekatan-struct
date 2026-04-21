/**
 * Zapata Aislada (Ecuador) — Shell Q4 + pedestal frame + Winkler springs.
 *
 * Unidades de suelo (Ecuador):
 *   q_adm  — presión admisible del suelo, tonf/m² (mínimo 1, típico 10–50, máx 100–200 para rocas)
 *   ks     — módulo de balasto, kN/m³ = q_adm × 10.5 (aprox Bowles para Lz ≈ 1m)
 *
 * Verificación:
 *   q_max ≤ q_adm  (se muestra ratio q_max/q_adm como FS inverso)
 */
import * as THREE from "three";
import van from "vanjs-core";
import { deform, analyze, modalAnalysis, type Node, type Element } from "awatif-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";
import { activeExampleVersion } from "../workspace/exampleRegistry";

const Ec = 25e6, nu_c = 0.2, Gc = Ec / (2 * (1 + nu_c)), rho = 24;
const TONF_TO_KN = 9.80665;

/**
 * Tabla geotécnica simplificada (Bowles / Das / práctica Ecuador NEC-SE-GC).
 * Propiedades indicativas; verificar siempre con estudio geotécnico real.
 *   q_adm    [tonf/m²]   presión admisible
 *   ks_factor [-]        multiplicador Bowles: ks [kN/m³] = ks_factor × q_adm [kN/m²]
 *   su       [kPa]       cohesión no drenada (arcillas)
 *   phi      [°]         ángulo de fricción (granulares)
 *   gamma    [kN/m³]     peso específico
 *   N_SPT    [-]         número de golpes SPT
 *   E_soil   [kPa]       módulo de elasticidad del suelo (para asentamientos elásticos)
 */
export const SOIL_TYPES = [
  // name                     q_adm  ks_f  su   phi  gamma  N_SPT  E_soil
  { name: "Custom",              q_adm: 20,  ks_factor: 10.5, su: 0,   phi: 30, gamma: 18, N_SPT: 20, E_soil: 20000 },
  { name: "Arcilla blanda",      q_adm: 5,   ks_factor: 12.0, su: 25,  phi: 0,  gamma: 16, N_SPT: 3,  E_soil: 3000 },
  { name: "Arcilla firme",       q_adm: 15,  ks_factor: 11.0, su: 75,  phi: 0,  gamma: 18, N_SPT: 10, E_soil: 15000 },
  { name: "Arcilla dura",        q_adm: 30,  ks_factor: 10.0, su: 150, phi: 0,  gamma: 19, N_SPT: 20, E_soil: 30000 },
  { name: "Limo compacto",       q_adm: 12,  ks_factor: 10.5, su: 40,  phi: 25, gamma: 18, N_SPT: 15, E_soil: 8000 },
  { name: "Arena suelta",        q_adm: 10,  ks_factor: 14.0, su: 0,   phi: 28, gamma: 16, N_SPT: 10, E_soil: 10000 },
  { name: "Arena media",         q_adm: 20,  ks_factor: 13.0, su: 0,   phi: 33, gamma: 18, N_SPT: 20, E_soil: 25000 },
  { name: "Arena densa",         q_adm: 40,  ks_factor: 12.0, su: 0,   phi: 40, gamma: 20, N_SPT: 40, E_soil: 60000 },
  { name: "Grava densa",         q_adm: 60,  ks_factor: 12.0, su: 0,   phi: 42, gamma: 22, N_SPT: 50, E_soil: 100000 },
  { name: "Roca alterada",       q_adm: 100, ks_factor: 15.0, su: 0,   phi: 45, gamma: 22, N_SPT: 100,E_soil: 500000 },
  { name: "Roca sana",           q_adm: 200, ks_factor: 20.0, su: 0,   phi: 50, gamma: 25, N_SPT: 100,E_soil: 2000000 },
];
// Resorte: 20 cm de "suelo virtual" debajo del plato, con suficientes coils para
// que la compresión se vea al compactarse las espiras.
const SPRING_HEIGHT = 0.20, SPRING_WIDTH = 0.035, SPRING_COILS = 8;
const MAT_SPRING = new THREE.LineBasicMaterial({ color: 0xff0033, linewidth: 2 });
const MAT_GROUND = new THREE.LineBasicMaterial({ color: 0x00cc00, linewidth: 2 });
const ANCHOR_SIZE = 0.04;          // lado del cajón verde de tierra en la base del spring
// Al asentamiento máximo, compresión visual = 80% del SPRING_HEIGHT (spring queda al 20%)
const SPRING_COMPRESSION_FRACTION = 0.8;

export const zapataAislada: ExampleDef = {
  id: "zapata-aislada",
  name: "Zapata Aislada (Ecuador q_adm tonf/m²)",
  category: "Cimentaciones",
  defaultShellResult: "pressure",
  availableShellResults: ["pressure", "bendingXX", "bendingYY", "displacementZ", "vonMises"],
  hasModal: true,
  params: {
    // Zapata aislada con defaults que permiten ver deformación cóncava (flexible footing).
    // λ = (ks·L⁴/D)^0.25 > 1 → deformación no-uniforme visible con carga puntual.
    Lz:    { default: 2.5,  min: 1.0, max: 5.0,  step: 0.05, label: "Lz (m)" },
    Bz:    { default: 2.5,  min: 1.0, max: 5.0,  step: 0.05, label: "Bz (m)" },
    // Espesor delgado para que domine la flexión sobre asentamiento rígido
    // (λ ≈ 3 → deformación cóncava visible, similar a plate-thin)
    tz:    { default: 0.10, min: 0.05, max: 1.0, step: 0.05, label: "tz (m)" },
    bc:    { default: 0.4,  min: 0.2, max: 0.8,  step: 0.05, label: "bc columna (m)" },
    Hp:    { default: 0.5,  min: 0.3, max: 2.0,  step: 0.1,  label: "Hp pedestal (m)" },
    // Selector de tipo de suelo (NEC-SE-GC Ecuador / Bowles)
    soilType: {
      default: 6,   // Arena media
      label: "Tipo de suelo",
      options: Object.fromEntries(SOIL_TYPES.map((s, i) => [s.name, i])),
    },
    q_adm:    { default: 20,    min: 1,    max: 100,    step: 1,    label: "q_adm (tonf/m²)" },
    ks_factor:{ default: 10.5,  min: 5,    max: 20,     step: 0.5,  label: "ks/q_adm (Bowles)" },
    // Propiedades geotécnicas (se autopoblan al cambiar Tipo de suelo)
    su:       { default: 0,     min: 0,    max: 300,    step: 1,    label: "su cohesión (kPa)" },
    phi:      { default: 33,    min: 0,    max: 55,     step: 1,    label: "φ fricción (°)" },
    gamma:    { default: 18,    min: 14,   max: 26,     step: 0.5,  label: "γ suelo (kN/m³)" },
    N_SPT:    { default: 20,    min: 0,    max: 100,    step: 1,    label: "N SPT" },
    E_soil:   { default: 25000, min: 1000, max: 2000000,step: 1000, label: "E suelo (kPa)" },
    // ── Checkboxes: qué patrones de carga aplicar ──
    // Cada toggle activa/desactiva un patrón. Si todos D/L/S están en 0,
    // NO se aplica nada (deformada = 0). Si useSimple=1, se IGNORAN D/L/S
    // y se usa solo el patrón Simple. Los factores fD/fL/fS solo aplican
    // si hay más de un patrón activo (modo combinación).
    useSimple: { default: 0, boolean: true, label: "🎯 Usar Carga Simple (ignora D/L/S)", folder: "Cargas — Activar" },
    useD:      { default: 1, boolean: true, label: "☑ Usar Patrón D (Muerta)",           folder: "Cargas — Activar" },
    useL:      { default: 1, boolean: true, label: "☑ Usar Patrón L (Viva)",             folder: "Cargas — Activar" },
    useS:      { default: 0, boolean: true, label: "☐ Usar Patrón S (Sobrecarga)",       folder: "Cargas — Activar" },
    useFactors:{ default: 1, boolean: true, label: "× Aplicar factores fD/fL/fS",        folder: "Cargas — Activar" },
    // ── Carga simple (solo se usa si useSimple = ON) ──
    P_simple:  { default: 20, min: 0,   max: 500, step: 0.5, label: "P (tonf)",    folder: "Cargas — Simple" },
    Mx_simple: { default: 0,  min: -50, max: 50,  step: 0.5, label: "Mx (tonf·m)", folder: "Cargas — Simple" },
    My_simple: { default: 0,  min: -50, max: 50,  step: 0.5, label: "My (tonf·m)", folder: "Cargas — Simple" },
    // ── Patrones de carga (se usan en modos 1-4: individuales o combinación) ──
    P_D:   { default: 10,   min: 0,     max: 500,  step: 0.5,  label: "P (tonf)",   folder: "Cargas — Patrón D (Muerta)" },
    Mx_D:  { default: 0,    min: -50,   max: 50,   step: 0.5,  label: "Mx (tonf·m)", folder: "Cargas — Patrón D (Muerta)" },
    My_D:  { default: 0,    min: -50,   max: 50,   step: 0.5,  label: "My (tonf·m)", folder: "Cargas — Patrón D (Muerta)" },
    P_L:   { default: 5,    min: 0,     max: 500,  step: 0.5,  label: "P (tonf)",   folder: "Cargas — Patrón L (Viva)" },
    Mx_L:  { default: 0,    min: -50,   max: 50,   step: 0.5,  label: "Mx (tonf·m)", folder: "Cargas — Patrón L (Viva)" },
    My_L:  { default: 0,    min: -50,   max: 50,   step: 0.5,  label: "My (tonf·m)", folder: "Cargas — Patrón L (Viva)" },
    P_S:   { default: 0,    min: 0,     max: 500,  step: 0.5,  label: "P (tonf)",   folder: "Cargas — Patrón S (Sobrec.)" },
    Mx_S:  { default: 0,    min: -50,   max: 50,   step: 0.5,  label: "Mx (tonf·m)", folder: "Cargas — Patrón S (Sobrec.)" },
    My_S:  { default: 0,    min: -50,   max: 50,   step: 0.5,  label: "My (tonf·m)", folder: "Cargas — Patrón S (Sobrec.)" },
    // Selector de combinación de cargas.
    //   0 = 1.2D + 1.6L (ACI 318 / NEC-SE-CG gravitatoria — default)
    //   1 = 1.4D
    //   2 = 1.2D + 1.0L
    //   3 = 1.2D + 1.0L + 0.5S
    //   4 = 1.2D + 1.6S + 0.5L
    //   5 = Servicio: 1.0D + 1.0L
    //   6 = 1.0D (solo Carga Muerta)
    //   7 = 1.0L (solo Carga Viva)
    //   8 = 1.0S (solo Sobrecarga)
    //   9 = Sísmica: 1.2D + 1.0L + 1.0E (se usa P_S como sismo E)
    //  10 = Sísmica: 0.9D + 1.0E
    //  11 = Custom (editar factores manualmente abajo)
    combo: {
      default: 0,
      label: "Combinación (solo modo 5)",
      folder: "Cargas — Combinación D+L+S",
      options: {
        "1.2D + 1.6L (gravitatoria)": 0,
        "1.4D": 1,
        "1.2D + 1.0L": 2,
        "1.2D + 1.0L + 0.5S": 3,
        "1.2D + 1.6S + 0.5L": 4,
        "Servicio 1.0D + 1.0L": 5,
        "1.0D (solo D)": 6,
        "1.0L (solo L)": 7,
        "1.0S (solo S)": 8,
        "Sísmica 1.2D+1.0L+1.0E": 9,
        "Sísmica 0.9D + 1.0E": 10,
        "Custom": 11,
      },
    },
    fD: { default: 1.2, min: -2, max: 2, step: 0.05, label: "factor D",       folder: "Cargas — Combinación D+L+S" },
    fL: { default: 1.6, min: -2, max: 2, step: 0.05, label: "factor L",       folder: "Cargas — Combinación D+L+S" },
    fS: { default: 0,   min: -2, max: 2, step: 0.05, label: "factor S (o E)", folder: "Cargas — Combinación D+L+S" },
    // Mesh fino captura concentración bajo columna (peak al centro)
    nSub:  { default: 10,   min: 3,   max: 16,   step: 1,    label: "n subdivisiones" },
  },
  /**
   * Valores calculados (read-only) que se muestran en el Tweakpane en el folder
   * "📊 Calculados". Permiten ver el módulo de balasto ks, rigidez flexural D,
   * número de Biot k_r, presiones extremas q_max/q_min y ratio q/q_adm sin entrar
   * a la consola. Se recalcula tras cada rebuild.
   */
  computedLabels(p, states) {
    const q_adm_kNm2 = (p.q_adm ?? 20) * TONF_TO_KN;
    const ks = q_adm_kNm2 * (p.ks_factor ?? 10.5);                   // kN/m³
    const tz = p.tz ?? 0.15, Lz = p.Lz ?? 2.5;
    const D = Ec * tz ** 3 / (12 * (1 - nu_c ** 2));                 // kN·m (rigidez flexural)
    const k_r = D / (ks * Lz ** 4);                                  // Biot: <1 flexible, >1 rígida
    const useSimple  = (p.useSimple  ?? 0) >= 0.5;
    const useD       = (p.useD       ?? 0) >= 0.5;
    const useL       = (p.useL       ?? 0) >= 0.5;
    const useS       = (p.useS       ?? 0) >= 0.5;
    const useFactors = (p.useFactors ?? 1) >= 0.5;
    const fD = useFactors ? (p.fD ?? 1.2) : 1;
    const fL = useFactors ? (p.fL ?? 1.6) : 1;
    const fS = useFactors ? (p.fS ?? 0)   : 1;
    const kD = useD ? 1 : 0, kL = useL ? 1 : 0, kS = useS ? 1 : 0;
    // P_total reproduce la misma lógica que el build()
    let P_total = 0;
    if (useSimple) P_total = p.P_simple ?? 0;
    else P_total = kD*fD*(p.P_D ?? 0) + kL*fL*(p.P_L ?? 0) + kS*fS*(p.P_S ?? 0);
    const activeList: string[] = [];
    if (useSimple) activeList.push("Simple");
    else {
      if (useD) activeList.push("D");
      if (useL) activeList.push("L");
      if (useS) activeList.push("S");
      if (!activeList.length) activeList.push("NINGUNO");
    }
    const modeName = activeList.join("+") + (useFactors && !useSimple ? " (factor)" : "");
    // q_max / q_min desde analyzeOutputs.pressure (map elemento → presión por nodo tonf/m²)
    let qMax = 0, qMin = 0;
    const pr = (states.analyzeOutputs.rawVal as any)?.pressure as Map<number, number[]> | undefined;
    if (pr && pr.size) {
      for (const vals of pr.values()) {
        for (const q of vals) {
          if (q < qMax) qMax = q;
          if (q < qMin || qMin === 0) qMin = q;
        }
      }
      // qMax es el más negativo (mayor compresión), qMin el menos compresivo
      let localMin = Infinity;
      for (const vals of pr.values())
        for (const q of vals) if (Math.abs(q) < localMin) localMin = Math.abs(q);
      qMin = -localMin;
    }
    const ratio = Math.abs(qMax) / (p.q_adm || 1);
    return {
      "Patrones activos": modeName,
      "ks (kN/m³)":       ks.toFixed(0),
      "D (kN·m)":         D.toFixed(1),
      "k_r (Biot)":       k_r.toFixed(3) + (k_r < 1 ? " FLEXIBLE" : " RÍGIDA"),
      "P total (tonf)":   P_total.toFixed(2),
      "q_max (tonf/m²)":  qMax.toFixed(2),
      "q_min (tonf/m²)":  qMin.toFixed(2),
      "q/q_adm":          ratio.toFixed(2) + (ratio > 1 ? " ⚠" : " ✓"),
    };
  },
  /** onParamChange:
   *   - soilType → autopoblar propiedades geotécnicas
   *   - combo    → autopoblar factores fD, fL, fS
   */
  onParamChange(key, params) {
    if (key === "soilType") {
      const idx = Math.round(params.soilType ?? 0);
      if (idx > 0) {
        const soil = SOIL_TYPES[idx];
        params.q_adm     = soil.q_adm;
        params.ks_factor = soil.ks_factor;
        params.su        = soil.su;
        params.phi       = soil.phi;
        params.gamma     = soil.gamma;
        params.N_SPT     = soil.N_SPT;
        params.E_soil    = soil.E_soil;
      }
    }
    if (key === "combo") {
      const c = Math.round(params.combo ?? 0);
      // [fD, fL, fS] para cada combinación
      const FACTORS: Array<[number, number, number]> = [
        [1.2, 1.6, 0.0], // 0: 1.2D+1.6L
        [1.4, 0.0, 0.0], // 1: 1.4D
        [1.2, 1.0, 0.0], // 2: 1.2D+1.0L
        [1.2, 1.0, 0.5], // 3: 1.2D+1.0L+0.5S
        [1.2, 0.5, 1.6], // 4: 1.2D+1.6S+0.5L
        [1.0, 1.0, 0.0], // 5: Servicio D+L
        [1.0, 0.0, 0.0], // 6: 1.0D
        [0.0, 1.0, 0.0], // 7: 1.0L
        [0.0, 0.0, 1.0], // 8: 1.0S
        [1.2, 1.0, 1.0], // 9: Sísmica 1.2D+1.0L+1.0E (E usa P_S)
        [0.9, 0.0, 1.0], // 10: Sísmica 0.9D+1.0E
        // 11: Custom — no sobrescribe (usuario edita manualmente)
      ];
      if (c >= 0 && c < FACTORS.length) {
        [params.fD, params.fL, params.fS] = FACTORS[c];
      }
    }
  },
  build(p, states) {
    const { Lz, Bz, tz, bc, Hp } = p;
    // Los params q_adm/ks_factor/su/φ/γ/N/E se autopueblan cuando cambia Tipo de suelo
    // (vía onParamChange), pero el usuario puede tunearlos manualmente después.
    const q_adm_tonf = p.q_adm;
    const ks_factor  = p.ks_factor;
    const q_adm_kNm2 = q_adm_tonf * TONF_TO_KN;           // tonf/m² → kN/m²
    const ks = q_adm_kNm2 * ks_factor;                    // kN/m³
    // ── Aplicación de cargas según toggles ──
    // Si `useSimple`=ON: se ignoran D/L/S y solo se usa Carga Simple.
    // Si `useSimple`=OFF: se suman los patrones activos (useD, useL, useS).
    // Los factores fD/fL/fS aplican si `useFactors`=ON; si OFF, multiplicamos por 1
    // (útil para ver cargas de servicio sin mayorar).
    const useSimple  = (p.useSimple  ?? 0) >= 0.5;
    const useD       = (p.useD       ?? 0) >= 0.5;
    const useL       = (p.useL       ?? 0) >= 0.5;
    const useS       = (p.useS       ?? 0) >= 0.5;
    const useFactors = (p.useFactors ?? 1) >= 0.5;
    const fD_eff = useFactors ? (p.fD ?? 1.2) : 1;
    const fL_eff = useFactors ? (p.fL ?? 1.6) : 1;
    const fS_eff = useFactors ? (p.fS ?? 0)   : 1;
    // Multiplicadores 0/1 por patrón según checkbox
    const kD = useD ? 1 : 0, kL = useL ? 1 : 0, kS = useS ? 1 : 0;
    const fD = fD_eff, fL = fL_eff, fS = fS_eff;  // aliases para el log de abajo
    let P_total_tonf = 0, Mx_total_tonf = 0, My_total_tonf = 0;
    if (useSimple) {
      P_total_tonf  = p.P_simple  ?? 0;
      Mx_total_tonf = p.Mx_simple ?? 0;
      My_total_tonf = p.My_simple ?? 0;
    } else {
      P_total_tonf  = kD*fD_eff*(p.P_D  ?? 0) + kL*fL_eff*(p.P_L  ?? 0) + kS*fS_eff*(p.P_S  ?? 0);
      Mx_total_tonf = kD*fD_eff*(p.Mx_D ?? 0) + kL*fL_eff*(p.Mx_L ?? 0) + kS*fS_eff*(p.Mx_S ?? 0);
      My_total_tonf = kD*fD_eff*(p.My_D ?? 0) + kL*fL_eff*(p.My_L ?? 0) + kS*fS_eff*(p.My_S ?? 0);
    }
    const P_kN  = P_total_tonf  * TONF_TO_KN;
    const Mx_kN = Mx_total_tonf * TONF_TO_KN;
    const My_kN = My_total_tonf * TONF_TO_KN;
    const nSub = Math.round(p.nSub);

    // Mesh shell Q4 + columna centrada
    const xC = Lz / 2, yC = Bz / 2;
    const xs: number[] = [], ys: number[] = [];
    for (let i = 0; i <= nSub; i++) { xs.push((Lz * i) / nSub); ys.push((Bz * i) / nSub); }
    // Asegurar que el nodo de columna esté en la malla
    if (!xs.includes(xC)) { xs.push(xC); xs.sort((a, b) => a - b); }
    if (!ys.includes(yC)) { ys.push(yC); ys.sort((a, b) => a - b); }

    const N: [number, number, number][] = [];
    const els: number[][] = [];
    const elasticities = new Map<number, number>();
    const poissons = new Map<number, number>();
    const areas = new Map<number, number>();
    const thicknesses = new Map<number, number>();
    const Iz = new Map<number, number>();
    const Iy = new Map<number, number>();
    const J  = new Map<number, number>();
    const Gm = new Map<number, number>();
    const densities = new Map<number, number>();
    const sections = new Map<number, any>();

    const nodeMap = new Map<string, number>();
    const addNode = (x: number, y: number, z: number): number => {
      const k = `${x.toFixed(4)},${y.toFixed(4)},${z.toFixed(4)}`;
      if (nodeMap.has(k)) return nodeMap.get(k)!;
      const idx = N.length;
      N.push([x, y, z]);
      nodeMap.set(k, idx);
      return idx;
    };

    const idx: number[][] = [];
    for (let j = 0; j < ys.length; j++) {
      const row: number[] = [];
      for (let i = 0; i < xs.length; i++) row.push(addNode(xs[i], ys[j], 0));
      idx.push(row);
    }
    for (let j = 0; j < ys.length - 1; j++)
      for (let i = 0; i < xs.length - 1; i++) {
        const e = els.length;
        els.push([idx[j][i], idx[j][i + 1], idx[j + 1][i + 1], idx[j + 1][i]]);
        thicknesses.set(e, tz); elasticities.set(e, Ec); poissons.set(e, nu_c); densities.set(e, rho);
      }

    // Pedestal vertical desde zapata hasta Hp
    const nColBot = addNode(xC, yC, 0);
    const nColTop = addNode(xC, yC, Hp);
    const ePed = els.length;
    els.push([nColBot, nColTop]);
    elasticities.set(ePed, Ec); poissons.set(ePed, nu_c); Gm.set(ePed, Gc);
    areas.set(ePed, bc * bc);
    Iz.set(ePed, bc ** 4 / 12); Iy.set(ePed, bc ** 4 / 12);
    J.set(ePed, 0.14 * bc ** 4); densities.set(ePed, rho);
    sections.set(ePed, { type: "rect", b: bc, h: bc });

    // Cargas en top pedestal (punto único: la carga baja por el pedestal al nColBot
    // que es un único nodo — esto crea concentración realista de la columna sobre la placa)
    const loads = new Map<number, [number, number, number, number, number, number]>();
    loads.set(nColTop, [0, 0, -P_kN, Mx_kN, My_kN, 0]);

    // Winkler springs (vertical) en todos los nodos de la zapata.
    // Distribución realista: ks × A_trib. La columna transmite carga puntual al nodo
    // central, por lo que aunque placa sea rígida, el peso nodal del centro es mayor
    // → w centro > w bordes → q centro > q bordes (concentración visible).
    const dxAvg = Lz / nSub, dyAvg = Bz / nSub;
    // ── Resortes Winkler en X, Y, Z (SSI suelo-estructura completa) ──
    // kh = ks_horizontal ≈ 0.5 × ks_vertical (regla típica Bowles/Das para interacción
    // suelo-zapata). Cada nodo de la zapata tiene 3 resortes de fricción con el suelo.
    const kh_factor = 0.5;
    const springsList: Array<{ node: number; dof: number; k: number }> = [];
    const springNodes: number[] = [];
    for (let j = 0; j < ys.length; j++)
      for (let i = 0; i < xs.length; i++) {
        const A_trib = dxAvg * dyAvg *
          ((i === 0 || i === xs.length - 1) ? 0.5 : 1) *
          ((j === 0 || j === ys.length - 1) ? 0.5 : 1);
        const kvz = ks * A_trib;               // resorte vertical Z
        const khxy = ks * A_trib * kh_factor;  // resortes laterales X e Y (fricción suelo)
        springsList.push({ node: idx[j][i], dof: 0, k: khxy }); // X horizontal
        springsList.push({ node: idx[j][i], dof: 1, k: khxy }); // Y horizontal
        springsList.push({ node: idx[j][i], dof: 2, k: kvz });  // Z vertical
        springNodes.push(idx[j][i]);
      }
    // Rotacionales suaves en esquina (anti-singular para Rx/Ry/Rz)
    const kRot = ks * dxAvg * dyAvg * 1e-4;
    const n00 = idx[0][0];
    springsList.push({ node: n00, dof: 3, k: kRot });
    springsList.push({ node: n00, dof: 4, k: kRot });
    springsList.push({ node: n00, dof: 5, k: kRot });

    // Commit estados
    states.nodes.val = N.map((n) => [n[0], n[1], n[2]] as Node);
    states.elements.val = els;
    states.nodeInputs.val = { supports: new Map(), loads };
    states.elementInputs.val = {
      elasticities, poissonsRatios: poissons,
      areas, momentsOfInertiaZ: Iz, momentsOfInertiaY: Iy,
      torsionalConstants: J, shearModuli: Gm,
      thicknesses, densities, sectionShapes: sections,
    };

    try {
      states.deformOutputs.val = deform(
        states.nodes.val, states.elements.val,
        states.nodeInputs.val, states.elementInputs.val,
        springsList
      );
      const ao = analyze(
        states.nodes.val, states.elements.val,
        states.elementInputs.val, states.deformOutputs.val
      );
      // Presión de contacto en tonf/m² — convención Ecuador (negativa=compresión).
      // Mismo patrón que displacementZ: centro=azul(max compresión), bordes=rojo(menor).
      const defMap = states.deformOutputs.rawVal.deformations;
      const pressureMap = new Map<number, number[]>();
      let qMinTonf = 0;  // mínimo (más negativo) = pico bajo columna
      states.elements.rawVal.forEach((el, eIdx) => {
        if (el.length !== 4) return;
        const qPerNode: number[] = [];
        for (const n of el) {
          const d = defMap?.get(n);
          const q_kN = ks * (d ? d[2] : 0);            // negativo cuando w<0 (compresión)
          const q_tonf = q_kN / TONF_TO_KN;            // → tonf/m²
          qPerNode.push(q_tonf);
          if (q_tonf < qMinTonf) qMinTonf = q_tonf;
        }
        pressureMap.set(eIdx, qPerNode);
      });
      (ao as any).pressure = pressureMap;
      // AUTO-ESCALA para todos los campos (pressure, bendingXX, vonMises, etc.) →
      // el colormap SIEMPRE muestra gradiente centro-bordes por pequeño que sea.
      // Los valores exactos y ratio q_max/q_adm van al console.log para verificación.
      states.analyzeOutputs.val = ao;

      // Log detallado: rango de presión plato + rigidez relativa
      const qMaxAbs = Math.abs(qMinTonf);  // pico bajo columna
      // q_min (más suave, bordes) del mapa de presión
      let qMinAbs = Infinity;
      pressureMap.forEach((vals) => {
        for (const q of vals) { const a = Math.abs(q); if (a < qMinAbs) qMinAbs = a; }
      });
      if (!Number.isFinite(qMinAbs)) qMinAbs = 0;
      const ratio = qMaxAbs / p.q_adm;
      // Rigidez relativa de plato (Biot): k_r = D / (ks × Lz⁴). <1 flexible, >1 rígido
      const D_plate = Ec * tz ** 3 / (12 * (1 - nu_c ** 2));
      const k_r = D_plate / (ks * Lz ** 4);
      const activeList: string[] = [];
      if (useSimple) activeList.push("Simple");
      else {
        if (useD) activeList.push(`D${useFactors ? "×" + fD : ""}`);
        if (useL) activeList.push(`L${useFactors ? "×" + fL : ""}`);
        if (useS) activeList.push(`S${useFactors ? "×" + fS : ""}`);
        if (!activeList.length) activeList.push("⚠ NINGUNO activo");
      }
      const modeName = activeList.join(" + ");
      console.log(
        `[Zapata Aislada]  Patrones activos: ${modeName}\n` +
        `  Cargas totales: P=${P_total_tonf.toFixed(2)} tonf, Mx=${Mx_total_tonf.toFixed(2)} tonf·m, My=${My_total_tonf.toFixed(2)} tonf·m\n` +
        `  Patrones: D(${p.P_D}, ${p.Mx_D}, ${p.My_D}) L(${p.P_L}, ${p.Mx_L}, ${p.My_L}) S(${p.P_S}, ${p.Mx_S}, ${p.My_S})\n` +
        `  q_max (centro) = -${qMaxAbs.toFixed(2)} tonf/m²\n` +
        `  q_min (bordes) = -${qMinAbs.toFixed(2)} tonf/m²\n` +
        `  variación = ${((1 - qMinAbs / (qMaxAbs || 1)) * 100).toFixed(1)}%\n` +
        `  q_adm = -${p.q_adm} tonf/m² | ratio q_max/q_adm = ${ratio.toFixed(2)}` +
        (ratio > 1 ? " ⚠ SOBREPASA" : " ✓ OK") + `\n` +
        `  k_rígidez = ${k_r.toFixed(2)} (${k_r < 1 ? "FLEXIBLE" : "RÍGIDA"} — flexible muestra concentración, rígida uniforme)`,
      );
    } catch (e) {
      console.error("Solver error zapata aislada:", e);
    }

    // Zigzag springs visuales sincronizados con la deformada del viewer.
    // El viewer auto-escala la deformada para que el máx sea ~7% del diagonal del modelo.
    // Uso la MISMA fórmula para que spring_top siga EXACTAMENTE al plato deformado,
    // NUNCA sobre el plato (físicamente imposible).
    const deforms = states.deformOutputs.rawVal.deformations;
    let wMaxAbs = 1e-9;
    for (const nIdx of springNodes) {
      const d = deforms?.get(nIdx);
      if (d && Number.isFinite(d[2])) wMaxAbs = Math.max(wMaxAbs, Math.abs(d[2]));
    }
    // Diagonal del modelo (aprox igual al que calcula deriveNodes en el viewer)
    const diag = Math.sqrt(Lz ** 2 + Bz ** 2 + Hp ** 2);
    const VISUAL_AMP = (0.07 * diag) / wMaxAbs;        // mismo factor que el viewer
    // zBot = suelo virtual = debajo de la máxima compresión esperada (nunca sobrepasado)
    const maxSinking = wMaxAbs * VISUAL_AMP;           // cuánto baja el plato en Three.js
    const zBot = -(maxSinking + SPRING_HEIGHT);        // base bajo el plato más hundido

    // ── Resortes 3D helicoidales (hélice paramétrica) + anclaje cúbico 3D ──
    // Parámetros visuales: SEGMENTS por vuelta controla suavidad de la hélice.
    const HELIX_SEGMENTS_PER_COIL = 12;   // 12 puntos por vuelta = hélice lisa
    const totalSegs = SPRING_COILS * HELIX_SEGMENTS_PER_COIL;

    // Mostrar TODOS los nodos donde hay resortes Winkler (1:1 con las subdivisiones
    // del mallado de la zapata — cada nodo → 1 resorte físico → 1 hélice visible).
    const visibleNodeSet = new Set<number>(springNodes);

    // ── Lee estados reactivos del viewer para sincronizar resortes ↔ plato ──
    // viewer.__settings.deformedShape determina si el plato está a z=0 o z=dz*amp.
    // viewer.__settings.displayScale escala la deformada. Nos suscribimos a ambos
    // para regenerar los resortes cuando el usuario toggle el setting o cambie slider.
    const viewerEl = document.querySelector("#viewer") as any;
    const settings = viewerEl?.__settings;

    const buildSprings = (deformedOn: boolean, deformScaleSetting: number): THREE.Object3D[] => {
      // CRÍTICO: ampEff DEBE ser IDÉNTICO al scale que el viewer usa en deriveNodes
      // para mover los nodos. Si no, la punta del resorte no toca el nodo.
      // El viewer usa: node + deformation × settings.deformScale.val
      // → ampEff = settings.deformScale.val (cuando deformedOn), 0 si no.
      const ampEff = deformedOn ? deformScaleSetting : 0;
      const maxSinkingEff = wMaxAbs * Math.max(ampEff, 1);  // zBot suficiente para cualquier caso
      const zBotEff = -(maxSinkingEff + SPRING_HEIGHT);
      const out: THREE.Object3D[] = [];
      for (const nIdx of springNodes) {
        if (!visibleNodeSet.has(nIdx)) continue;
        const node = states.nodes.rawVal[nIdx];
        if (!node) continue;
        const x = node[0], y = node[1];
        const d = deforms?.get(nIdx);
        const safe = (v: number) => Number.isFinite(v) ? v : 0;
        const dx_real = d ? safe(d[0]) : 0;
        const dy_real = d ? safe(d[1]) : 0;
        const dz_real = d ? safe(d[2]) : 0;
        // Base anclada al suelo (no se mueve) — top sigue al nodo en 3D
        const xTop = x + dx_real * ampEff;
        const yTop = y + dy_real * ampEff;
        const zTop = 0 + dz_real * ampEff;
        const zLen = zTop - zBotEff;
        // Helper: eje del spring = recta (x, y, zBot) → (xTop, yTop, zTop), parametrizado por t
        const axisAt = (t: number): [number, number, number] => [
          x + (xTop - x) * t,
          y + (yTop - y) * t,
          zBotEff + zLen * t,
        ];
        const [axB0x, axB0y, axB0z] = axisAt(0);
        const [axB1x, axB1y, axB1z] = axisAt(0.05);
        const pts: THREE.Vector3[] = [
          new THREE.Vector3(axB0x, axB0y, axB0z),
          new THREE.Vector3(axB1x, axB1y, axB1z),
        ];
        for (let k = 0; k <= totalSegs; k++) {
          const t = 0.05 + 0.9 * (k / totalSegs);
          const [cx, cy, cz] = axisAt(t);
          const angle = 2 * Math.PI * SPRING_COILS * (k / totalSegs);
          pts.push(new THREE.Vector3(
            cx + SPRING_WIDTH * Math.cos(angle),
            cy + SPRING_WIDTH * Math.sin(angle),
            cz
          ));
        }
        pts.push(new THREE.Vector3(xTop, yTop, zTop));
        out.push(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), MAT_SPRING));
        // Anclaje simple: cuadrado horizontal plano en la base (sin cubo 3D para
        // evitar "replicación visual" en vista elevación).
        const a = ANCHOR_SIZE;
        const cv = [
          new THREE.Vector3(x - a, y - a, zBotEff),
          new THREE.Vector3(x + a, y - a, zBotEff),
          new THREE.Vector3(x + a, y + a, zBotEff),
          new THREE.Vector3(x - a, y + a, zBotEff),
          new THREE.Vector3(x - a, y - a, zBotEff),
        ];
        out.push(new THREE.Line(new THREE.BufferGeometry().setFromPoints(cv), MAT_GROUND));
      }
      return out;
    };

    // Render inicial + subscripción reactiva.
    // Guard: capturamos la versión del ejemplo activo. Si cambia (usuario carga
    // otro ejemplo), el derive hace no-op — evita que los springs "viejos"
    // se copien a otros ejemplos que no son zapata.
    const myVersion = activeExampleVersion.v;
    if (settings) {
      van.derive(() => {
        const on = settings.deformedShape.val;           // reactivo
        const dScale = settings.deformScale.val;         // reactivo (MISMO scale que el viewer)
        if (activeExampleVersion.v !== myVersion) return;  // no-op si cambió ejemplo
        states.objects3D.val = buildSprings(on, dScale);
      });
    } else {
      states.objects3D.val = buildSprings(true, 1);
    }
  },
  runModal(p, states, modalPanel) {
    const nodes = states.nodes.val;
    const elements = states.elements.val;
    const ni = states.nodeInputs.val;
    const ei = states.elementInputs.val;
    if (!nodes.length || !elements.length || !ei.densities?.size) return;
    try {
      const out = modalAnalysis(nodes, elements, ni, ei, 12);
      modalPanel.render(out, {
        title: `Zapata Aislada ${p.Lz}×${p.Bz}m t=${p.tz}m`,
        properties: [`E=25 GPa  ν=0.2  ρ=24 kN/m³  col=${p.bc}m  Hp=${p.Hp}m`],
      });
      console.log(`[Zapata Modal] f₁=${out.frequencies[0]?.toFixed(4)} Hz`);
    } catch (e: any) { console.warn("Modal zapata error:", e.message); }
  },
};
