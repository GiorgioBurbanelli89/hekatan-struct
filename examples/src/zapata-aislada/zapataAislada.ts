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
import { deform, analyze, type Node, type Element } from "awatif-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

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
  params: {
    // Zapata aislada típica Ecuador: cuadrada 1.50×1.50 m
    Lz:    { default: 1.5,  min: 1.0, max: 5.0,  step: 0.05, label: "Lz (m)" },
    Bz:    { default: 1.5,  min: 1.0, max: 5.0,  step: 0.05, label: "Bz (m)" },
    // Espesor realista NEC-SE-HM Ecuador
    tz:    { default: 0.30, min: 0.20, max: 1.0, step: 0.05, label: "tz (m)" },
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
    // Rangos típicos Ecuador: P 1-400 tonf (edificios pequeños a medianos), M ±1 tonf·m
    P:     { default: 20,   min: 1,     max: 400,  step: 1,    label: "P axial (tonf)" },
    Mx:    { default: 0,    min: -1,    max: 1,    step: 0.05, label: "Mx (tonf·m)" },
    My:    { default: 0,    min: -1,    max: 1,    step: 0.05, label: "My (tonf·m)" },
    // Mesh fino captura concentración bajo columna (peak al centro)
    nSub:  { default: 10,   min: 3,   max: 16,   step: 1,    label: "n subdivisiones" },
  },
  /** Cuando cambia el tipo de suelo → autopoblar TODAS las propiedades geotécnicas */
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
  },
  build(p, states) {
    const { Lz, Bz, tz, bc, Hp } = p;
    // Los params q_adm/ks_factor/su/φ/γ/N/E se autopueblan cuando cambia Tipo de suelo
    // (vía onParamChange), pero el usuario puede tunearlos manualmente después.
    const q_adm_tonf = p.q_adm;
    const ks_factor  = p.ks_factor;
    const q_adm_kNm2 = q_adm_tonf * TONF_TO_KN;           // tonf/m² → kN/m²
    const ks = q_adm_kNm2 * ks_factor;                    // kN/m³
    const P_kN  = p.P  * TONF_TO_KN;
    const Mx_kN = p.Mx * TONF_TO_KN;
    const My_kN = p.My * TONF_TO_KN;
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
    const springsList: Array<{ node: number; dof: number; k: number }> = [];
    const springNodes: number[] = [];
    for (let j = 0; j < ys.length; j++)
      for (let i = 0; i < xs.length; i++) {
        const A_trib = dxAvg * dyAvg *
          ((i === 0 || i === xs.length - 1) ? 0.5 : 1) *
          ((j === 0 || j === ys.length - 1) ? 0.5 : 1);
        springsList.push({ node: idx[j][i], dof: 2, k: ks * A_trib });
        springNodes.push(idx[j][i]);
      }
    // Springs laterales suaves en esquina (para evitar matriz singular X/Y/Rx/Ry/Rz)
    const kLat = ks * dxAvg * dyAvg * 0.01, kRot = kLat * 0.01;
    const n00 = idx[0][0];
    springsList.push({ node: n00, dof: 0, k: kLat });
    springsList.push({ node: n00, dof: 1, k: kLat });
    springsList.push({ node: n00, dof: 3, k: kRot });
    springsList.push({ node: n00, dof: 4, k: kRot });
    springsList.push({ node: n00, dof: 5, k: kRot });
    springsList.push({ node: idx[ys.length - 1][xs.length - 1], dof: 1, k: kLat });

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
      console.log(
        `[Zapata Aislada]\n` +
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
      if (d) wMaxAbs = Math.max(wMaxAbs, Math.abs(d[2]));
    }
    // Diagonal del modelo (aprox igual al que calcula deriveNodes en el viewer)
    const diag = Math.sqrt(Lz ** 2 + Bz ** 2 + Hp ** 2);
    const VISUAL_AMP = (0.07 * diag) / wMaxAbs;        // mismo factor que el viewer
    // zBot = suelo virtual = debajo de la máxima compresión esperada (nunca sobrepasado)
    const maxSinking = wMaxAbs * VISUAL_AMP;           // cuánto baja el plato en Three.js
    const zBot = -(maxSinking + SPRING_HEIGHT);        // base bajo el plato más hundido

    const springs3D: THREE.Object3D[] = [];
    for (const nIdx of springNodes) {
      const node = states.nodes.rawVal[nIdx];
      if (!node) continue;
      const x = node[0], y = node[1];
      const d = deforms?.get(nIdx);
      const dz_real = d ? d[2] : 0;
      const zTop = 0 + dz_real * VISUAL_AMP;
      const step = (zTop - zBot) / SPRING_COILS;

      // Zigzag del spring (rojo)
      const pts: THREE.Vector3[] = [new THREE.Vector3(x, y, zTop)];
      for (let i = 1; i < SPRING_COILS; i++) {
        const side = i % 2 === 0 ? SPRING_WIDTH : -SPRING_WIDTH;
        pts.push(new THREE.Vector3(x + side, y, zTop - i * step));
      }
      pts.push(new THREE.Vector3(x, y, zBot));
      springs3D.push(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(pts), MAT_SPRING));

      // Base verde: cajón anchor representando el suelo fijo (referencia ground)
      const a = ANCHOR_SIZE;
      const anchorPts: THREE.Vector3[] = [
        new THREE.Vector3(x - a, y, zBot - a),
        new THREE.Vector3(x + a, y, zBot - a),
        new THREE.Vector3(x + a, y, zBot + a),
        new THREE.Vector3(x - a, y, zBot + a),
        new THREE.Vector3(x - a, y, zBot - a),  // cerrar
      ];
      springs3D.push(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(anchorPts), MAT_GROUND));
    }
    states.objects3D.val = springs3D;
  },
};
