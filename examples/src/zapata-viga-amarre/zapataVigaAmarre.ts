/**
 * Example: Zapata Medianera + Viga de Amarre + Zapata Centrada
 * Shell Q4 (zapatas) + Frame (viga) + Frame (pedestales) + Winkler springs real.
 */
import * as THREE from "three";
import van from "vanjs-core";
import { deform, analyze, modalAnalysis, type Node, type Element } from "awatif-fem";
import type { ExampleDef, BuildStates } from "../exampleRegistry";
import { activeExampleVersion } from "../workspace/exampleVersion";

const Ec = 25e6;
const nu_c = 0.2;
const Gc = Ec / (2 * (1 + nu_c));
const rho = 24;

// ── Parámetros visuales de resortes 3D (igual estilo que zapata-aislada) ──
const SPRING_HEIGHT = 0.20;
const SPRING_WIDTH  = 0.035;
const SPRING_COILS  = 8;
const ANCHOR_SIZE   = 0.04;
const MAT_SPRING = new THREE.LineBasicMaterial({ color: 0xff0033, linewidth: 2 });
const MAT_GROUND = new THREE.LineBasicMaterial({ color: 0x00cc00, linewidth: 2 });

export const zapataVigaAmarre: ExampleDef = {
  id: "zapata-viga-amarre",
  name: "Zapata + Viga de Amarre + Pedestal",
  category: "Cimentaciones",
  defaultShellResult: "pressure",
  availableShellResults: ["pressure", "bendingXX", "bendingYY", "displacementZ", "vonMises"],
  hasModal: true,
  params: {
    Lz1: { default: 2.0, min: 1.0, max: 4.0, step: 0.1, label: "Lz1 (m)" },
    Bz1: { default: 2.0, min: 1.0, max: 4.0, step: 0.1, label: "Bz1 (m)" },
    Lv:  { default: 3.0, min: 1.0, max: 6.0, step: 0.1, label: "Lv (m)" },
    Bv:  { default: 0.25, min: 0.2, max: 0.8, step: 0.05, label: "Bv (m)" },
    Hv:  { default: 0.30, min: 0.2, max: 0.8, step: 0.05, label: "Hv canto (m)" },
    Lz2: { default: 2.5, min: 1.0, max: 4.0, step: 0.1, label: "Lz2 (m)" },
    Bz2: { default: 2.0, min: 1.0, max: 4.0, step: 0.1, label: "Bz2 (m)" },
    tz:  { default: 0.5, min: 0.2, max: 1.0, step: 0.05, label: "tz (m)" },
    bc:  { default: 0.4, min: 0.2, max: 0.8, step: 0.05, label: "bc columna (m)" },
    Hp:  { default: 0.8, min: 0.3, max: 2.0, step: 0.1, label: "Hp pedestal (m)" },
    vigaLevel: { default: 0, min: 0, max: 1, step: 1, label: "Viga: 0=baja 1=alta" },
    ks:  { default: 2000, min: 500, max: 30000, step: 500, label: "ks Winkler (kN/m³)" },
    // Cargas lógicas: reacción típica de columna en edificio 4-8 pisos (medianera + centrada).
    // Verificado con edificio-aporticado 4 pisos: Fz≈5 tonf, Mx≈1, My≈2.5 tonf·m con
    // CM/CV por-nodo; valores default representan edificio 8-10 pisos con CM real en kN/m².
    P1:  { default: 25,  min: 1,  max: 200, step: 1,   label: "P1 axial (tonf)" },
    M1x: { default: 1,   min: -5, max: 5,   step: 0.1, label: "M1x (tonf·m)" },
    M1y: { default: 2.5, min: -5, max: 5,   step: 0.1, label: "M1y (tonf·m)" },
    P2:  { default: 40,  min: 1,  max: 200, step: 1,   label: "P2 axial (tonf)" },
    M2x: { default: 1,   min: -5, max: 5,   step: 0.1, label: "M2x (tonf·m)" },
    M2y: { default: 2.5, min: -5, max: 5,   step: 0.1, label: "M2y (tonf·m)" },
    nSubX: { default: 4, min: 2, max: 8, step: 1, label: "nx subdiv" },
    nSubY: { default: 4, min: 2, max: 8, step: 1, label: "ny subdiv" },
  },
  build(p, states) {
    const Lz1 = p.Lz1, Bz1 = p.Bz1, Lv = p.Lv, Bv = p.Bv, Hv = p.Hv;
    const Lz2 = p.Lz2, Bz2 = p.Bz2, tz = p.tz, bc = p.bc, Hp = p.Hp;
    // Conversión tonf → kN (para el solver que trabaja en SI kN/m)
    const TONF_TO_KN = 9.80665;
    const P1 = p.P1 * TONF_TO_KN, P2 = p.P2 * TONF_TO_KN;
    const ks = p.ks;
    const M1x = (p.M1x ?? 0) * TONF_TO_KN, M1y = (p.M1y ?? 0) * TONF_TO_KN;
    const M2x = (p.M2x ?? 0) * TONF_TO_KN, M2y = (p.M2y ?? 0) * TONF_TO_KN;
    const nSubX = Math.round(p.nSubX), nSubY = Math.round(p.nSubY);

    const xC1 = 0.2, yC1 = Bz1 / 2;
    const xC2 = Lz1 + Lv + Lz2 / 2, yC2 = Bz2 / 2;
    const yViga = (yC1 + yC2) / 2;

    function buildGridX(xMin: number, xMax: number, forced: number[], nSub: number): number[] {
      const all = [xMin, ...forced.filter((x) => x > xMin && x < xMax), xMax].sort((a, b) => a - b);
      const out: number[] = [];
      for (let i = 0; i < all.length - 1; i++) {
        const a = all[i], b = all[i + 1];
        const segNSub = Math.max(1, Math.round((b - a) / ((xMax - xMin) / nSub)));
        for (let k = 0; k < segNSub; k++) out.push(a + ((b - a) * k) / segNSub);
      }
      out.push(all[all.length - 1]);
      return out;
    }
    const xs1 = buildGridX(0, Lz1, [xC1], nSubX);
    const ys1 = buildGridX(0, Bz1, [yC1, yViga], nSubY);
    const xs2 = buildGridX(Lz1 + Lv, Lz1 + Lv + Lz2, [xC2], nSubX);
    const ys2 = buildGridX(0, Bz2, [yC2, yViga], nSubY);

    const N: [number, number, number][] = [];
    const elsEl: number[][] = [];
    const supports = new Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>();
    const loads = new Map<number, [number, number, number, number, number, number]>();
    const elasticities = new Map<number, number>();
    const poissons = new Map<number, number>();
    const areas = new Map<number, number>();
    const thicknesses = new Map<number, number>();
    const Iz = new Map<number, number>();
    const Iy = new Map<number, number>();
    const J = new Map<number, number>();
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

    // Shell zapata 1
    const idx1: number[][] = [];
    for (let j = 0; j < ys1.length; j++) {
      const row: number[] = [];
      for (let i = 0; i < xs1.length; i++) row.push(addNode(xs1[i], ys1[j], 0));
      idx1.push(row);
    }
    for (let j = 0; j < ys1.length - 1; j++)
      for (let i = 0; i < xs1.length - 1; i++) {
        const e = elsEl.length;
        elsEl.push([idx1[j][i], idx1[j][i + 1], idx1[j + 1][i + 1], idx1[j + 1][i]]);
        thicknesses.set(e, tz); elasticities.set(e, Ec); poissons.set(e, nu_c); densities.set(e, rho);
      }
    // Shell zapata 2
    const idx2: number[][] = [];
    for (let j = 0; j < ys2.length; j++) {
      const row: number[] = [];
      for (let i = 0; i < xs2.length; i++) row.push(addNode(xs2[i], ys2[j], 0));
      idx2.push(row);
    }
    for (let j = 0; j < ys2.length - 1; j++)
      for (let i = 0; i < xs2.length - 1; i++) {
        const e = elsEl.length;
        elsEl.push([idx2[j][i], idx2[j][i + 1], idx2[j + 1][i + 1], idx2[j + 1][i]]);
        thicknesses.set(e, tz); elasticities.set(e, Ec); poissons.set(e, nu_c); densities.set(e, rho);
      }

    // Pedestales + viga
    const vigaLevel = Math.round(p.vigaLevel);
    const zViga = vigaLevel === 0 ? tz : Hp;
    const nCol1Bot = addNode(xC1, yC1, 0);
    const nCol1Top = addNode(xC1, yC1, zViga);
    const nCol2Bot = addNode(xC2, yC2, 0);
    const nCol2Top = addNode(xC2, yC2, zViga);
    for (const [a, b] of [[nCol1Bot, nCol1Top], [nCol2Bot, nCol2Top]]) {
      const e = elsEl.length;
      elsEl.push([a, b]);
      elasticities.set(e, Ec); poissons.set(e, nu_c); Gm.set(e, Gc);
      areas.set(e, bc * bc); Iz.set(e, bc ** 4 / 12); Iy.set(e, bc ** 4 / 12);
      J.set(e, 0.14 * bc ** 4); densities.set(e, rho);
      sections.set(e, { type: "rect", b: bc, h: bc });
    }
    const eViga = elsEl.length;
    elsEl.push([nCol1Top, nCol2Top]);
    elasticities.set(eViga, Ec); poissons.set(eViga, nu_c); Gm.set(eViga, Gc);
    areas.set(eViga, Bv * Hv);
    Iz.set(eViga, (Bv * Hv ** 3) / 12);
    Iy.set(eViga, (Hv * Bv ** 3) / 12);
    J.set(eViga, 0.28 * Bv * Hv ** 3);
    densities.set(eViga, rho);
    sections.set(eViga, { type: "rect", b: Bv, h: Hv });

    loads.set(nCol1Top, [0, 0, -P1, M1x, M1y, 0]);
    loads.set(nCol2Top, [0, 0, -P2, M2x, M2y, 0]);

    // ── Winkler SSI completo: resortes en X, Y, Z en cada nodo ──
    // kh = ks_horizontal ≈ 0.5 × ks_vertical (fricción suelo-zapata tipo Bowles).
    const dxAvg1 = Lz1 / nSubX, dyAvg1 = Bz1 / nSubY;
    const dxAvg2 = Lz2 / nSubX, dyAvg2 = Bz2 / nSubY;
    const kh_factor = 0.5;
    const springsList: Array<{ node: number; dof: number; k: number }> = [];
    const zapataSpringNodes: number[] = [];
    for (let j = 0; j < ys1.length; j++)
      for (let i = 0; i < xs1.length; i++) {
        const A_trib = dxAvg1 * dyAvg1 *
          ((i === 0 || i === xs1.length - 1) ? 0.5 : 1) *
          ((j === 0 || j === ys1.length - 1) ? 0.5 : 1);
        const kvz = ks * A_trib;
        const khxy = ks * A_trib * kh_factor;
        springsList.push({ node: idx1[j][i], dof: 0, k: khxy });
        springsList.push({ node: idx1[j][i], dof: 1, k: khxy });
        springsList.push({ node: idx1[j][i], dof: 2, k: kvz });
        zapataSpringNodes.push(idx1[j][i]);
      }
    for (let j = 0; j < ys2.length; j++)
      for (let i = 0; i < xs2.length; i++) {
        const A_trib = dxAvg2 * dyAvg2 *
          ((i === 0 || i === xs2.length - 1) ? 0.5 : 1) *
          ((j === 0 || j === ys2.length - 1) ? 0.5 : 1);
        const kvz = ks * A_trib;
        const khxy = ks * A_trib * kh_factor;
        springsList.push({ node: idx2[j][i], dof: 0, k: khxy });
        springsList.push({ node: idx2[j][i], dof: 1, k: khxy });
        springsList.push({ node: idx2[j][i], dof: 2, k: kvz });
        zapataSpringNodes.push(idx2[j][i]);
      }
    // Rotacionales suaves para anti-singularidad
    const kRot = ks * dxAvg1 * dyAvg1 * 1e-4;
    springsList.push({ node: idx1[0][0], dof: 3, k: kRot });
    springsList.push({ node: idx1[0][0], dof: 4, k: kRot });
    springsList.push({ node: idx1[0][0], dof: 5, k: kRot });

    // Commit
    states.nodes.val = N.map((n) => [n[0], n[1], n[2]] as Node);
    states.elements.val = elsEl;
    states.nodeInputs.val = { supports, loads };
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
      // ── Presión de contacto Winkler: q = ks × w (kN/m²), por elemento shell ──
      // Se inyecta en el slot dedicado `pressure` del viewer (seleccionable en Shell results)
      const deformsMap = states.deformOutputs.rawVal.deformations;
      const pressureMap = new Map<number, number[]>();
      states.elements.rawVal.forEach((el, eIdx) => {
        if (el.length !== 4) return;            // solo shells Q4
        const qPerNode: number[] = [];
        for (const n of el) {
          const d = deformsMap?.get(n);
          const w = d ? d[2] : 0;
          // q = -ks × w (kN/m²). w negativo (baja) → q positiva (compresión del suelo)
          qPerNode.push(-ks * w);
        }
        pressureMap.set(eIdx, qPerNode);
      });
      (ao as any).pressure = pressureMap;  // 👈 slot dedicado "pressure" en shellResults
      states.analyzeOutputs.val = ao;
    } catch (e) {
      console.error("Solver error:", e);
    }

    // ── Resortes 3D helicoidales (igual estilo que zapata-aislada) ──
    // Usan hélice paramétrica + anclaje cúbico + reactive toggle con deformedShape.
    const deforms = states.deformOutputs.rawVal.deformations;
    let wMaxAbs = 1e-9;
    for (const nIdx of zapataSpringNodes) {
      const d = deforms?.get(nIdx);
      if (d && Number.isFinite(d[2])) wMaxAbs = Math.max(wMaxAbs, Math.abs(d[2]));
    }
    // Diagonal del modelo (zapata + viga + zapata)
    const Ltot = Lz1 + Lv + Lz2;
    const Btot = Math.max(Bz1, Bz2);
    const diag = Math.sqrt(Ltot ** 2 + Btot ** 2 + Hp ** 2);
    const VISUAL_AMP = (0.07 * diag) / wMaxAbs;

    // Muestra TODOS los nodos donde hay un resorte k Winkler (sin samplear) —
    // así los springs visibles coinciden exactamente con donde la física los aplica.
    const visibleSet = new Set<number>(zapataSpringNodes);

    const HELIX_SEGMENTS_PER_COIL = 12;
    const totalSegs = SPRING_COILS * HELIX_SEGMENTS_PER_COIL;

    const viewerEl = document.querySelector("#viewer") as any;
    const settings = viewerEl?.__settings;

    const buildSprings = (deformedOn: boolean, deformScaleSetting: number): THREE.Object3D[] => {
      // ampEff = el MISMO scale que usa el viewer (settings.deformScale)
      const ampEff = deformedOn ? deformScaleSetting : 0;
      const maxSinkingEff = wMaxAbs * Math.max(ampEff, 1);
      const zBotEff = -(maxSinkingEff + SPRING_HEIGHT);
      const out: THREE.Object3D[] = [];
      for (const nIdx of zapataSpringNodes) {
        if (!visibleSet.has(nIdx)) continue;
        const node = states.nodes.rawVal[nIdx];
        if (!node) continue;
        const x = node[0], y = node[1];
        const d = deforms?.get(nIdx);
        const safe = (v: number) => Number.isFinite(v) ? v : 0;
        const dx_real = d ? safe(d[0]) : 0;
        const dy_real = d ? safe(d[1]) : 0;
        const dz_real = d ? safe(d[2]) : 0;
        // Punta del resorte sigue al nodo en las 3 direcciones; base anclada al suelo
        const xTop = x + dx_real * ampEff;
        const yTop = y + dy_real * ampEff;
        const zTop = 0 + dz_real * ampEff;
        const zLen = zTop - zBotEff;
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
        // Anclaje simple: cuadrado horizontal plano (sin replicación visual en elevación)
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

    const myVersion = activeExampleVersion.v;
    if (settings) {
      van.derive(() => {
        const on = settings.deformedShape.val;
        const dScale = settings.deformScale.val;
        if (activeExampleVersion.v !== myVersion) return;
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
        title: `Zapata + Viga amarre Lv=${p.Lv}m`,
        properties: [`E=25 GPa  ν=0.2  ρ=24 kN/m³  Viga ${p.Bv}×${p.Hv}m`],
      });
      console.log(`[Zapata+Viga Modal] f₁=${out.frequencies[0]?.toFixed(4)} Hz`);
    } catch (e: any) { console.warn("Modal zapata-viga error:", e.message); }
  },
};
