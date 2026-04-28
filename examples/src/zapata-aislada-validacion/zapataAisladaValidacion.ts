/**
 * Isolated Footing — Calcpad validation
 *
 * Espejo directo del hoja de cálculo de Calcpad. Usa P/Mx/My simples (sin
 * patrones D/L/S ni combinación) para que los resultados FEM sean comparables
 * nodo a nodo con las fórmulas de Calcpad:
 *   - ks = q_adm × 9.80665 × ks_factor   (Bowles)
 *   - D = E·t³/(12·(1-ν²))
 *   - k_r Biot = D / (ks·L⁴)
 *   - σ nodal = ks × w nodal
 *
 * Corre 4 análisis en cada rebuild:
 *   1. combinado (P + Mx + My aplicados simultáneamente)
 *   2. pure P (solo axial)
 *   3. pure Mx
 *   4. pure My
 * y guarda las presiones por caso en `analyzeOutputs.pressure / pressure_P /
 * pressure_Mx / pressure_My`. Esto permite verificar superposición y comparar
 * con Calcpad caso por caso.
 *
 * Reconstruido desde el bundle gh-pages del repo awatif-workspace (origin/gh-pages).
 */
import * as THREE from "three";
import van from "vanjs-core";
import { deform, analyze, type Node, type Element } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";
// Importar desde exampleVersion (no exampleRegistry) para evitar TDZ circular.
import { activeExampleVersion } from "../workspace/exampleVersion";

const Ec = 25e6, nu_c = 0.2, Gc = Ec / (2 * (1 + nu_c)), rho = 24;
const TONF_TO_KN = 9.80665;

// Resorte visual zigzag (mismo estilo que zapata-aislada)
const SPRING_HEIGHT = 0.20, SPRING_WIDTH = 0.035, SPRING_COILS = 8;
const ANCHOR_SIZE = 0.04;
const MAT_SPRING = new THREE.LineBasicMaterial({ color: 0xff0033, linewidth: 2 });
const MAT_GROUND = new THREE.LineBasicMaterial({ color: 0x00cc00, linewidth: 2 });

export const zapataAisladaValidacion: ExampleDef = {
  id: "zapata-aislada-validacion",
  name: "Isolated Footing — Calcpad validation",
  category: "Cimentaciones",
  benchmark: true,  // 🏁 Validación Bowles 1996 — referencia Winkler clásica
  defaultShellResult: "pressure",
  availableShellResults: ["pressure", "bendingXX", "bendingYY", "displacementZ", "vonMises"],
  hasModal: false,
  params: {
    Lz:   { default: 1.5,  min: 1.0,  max: 5.0,  step: 0.05, label: "Lz — length X (m)" },
    Bz:   { default: 1.5,  min: 1.0,  max: 5.0,  step: 0.05, label: "Bz — length Y (m)" },
    tz:   { default: 0.30, min: 0.05, max: 1.0,  step: 0.05, label: "t — thickness (m)" },
    bc:   { default: 0.40, min: 0.2,  max: 0.8,  step: 0.05, label: "bc — column side (m)" },
    Hp:   { default: 0.50, min: 0.3,  max: 2.0,  step: 0.1,  label: "Hp — pedestal height (m)" },
    q_adm:     { default: 10,   min: 1,   max: 100,   step: 1,   label: "q_adm (tonf/m²)" },
    ks_factor: { default: 10.5, min: 5,   max: 20,    step: 0.5, label: "ks_factor (Bowles)" },
    ks:        { default: 1030, min: 100, max: 2e5,   step: 10,  label: "ks — subgrade modulus (kN/m³)" },
    // Suelo avanzado — Winkler horizontal y anti-singularidad rotacional
    kh_ratio:    { default: 0.5,  min: 0,   max: 1,     step: 0.05,  label: "kh / kv (Bowles 0.3-0.7)",      folder: "Suelo avanzado" },
    kRot_factor: { default: 1e-4, min: 0,   max: 1e-2,  step: 1e-5,  label: "k_rot factor (anti-singular.)", folder: "Suelo avanzado" },
    support_mode: {
      default: 0,
      options: {
        "A. Winkler 3D (kx/ky/kz)":           0,
        "B. Winkler vert. + esquinas X,Y,Rz": 1,
        "C. Winkler vert. + 1 nodo anti-sing": 2,
      },
      label: "Modelo de soporte",
      folder: "Suelo avanzado",
    },
    // Cargas SIMPLES — directamente P/Mx/My (no patrones D/L/S)
    P_simple:  { default: 20,   min: 0,   max: 500, step: 0.5, label: "P — axial (tonf)",   folder: "Loads" },
    Mx_simple: { default: 0.5,  min: -50, max: 50,  step: 0.1, label: "Mx (tonf·m)",        folder: "Loads" },
    My_simple: { default: -0.5, min: -50, max: 50,  step: 0.1, label: "My (tonf·m)",        folder: "Loads" },
    nSub: { default: 10, min: 3, max: 16, step: 1, label: "n — mesh subdivisions" },
  },
  inlineComputed: [
    {
      after: "ks_factor",
      label: "ks computed (kN/m³)",
      compute: (p) => ((p.q_adm ?? 10) * TONF_TO_KN * (p.ks_factor ?? 10.5)).toFixed(0),
    },
    {
      after: "tz",
      label: "D flexural (kN·m)",
      compute: (p) => {
        const t = p.tz ?? 0.3;
        return (Ec * t ** 3 / (12 * (1 - nu_c ** 2))).toFixed(1);
      },
    },
    {
      after: "ks",
      label: "k_r Biot",
      compute: (p) => {
        const t = p.tz ?? 0.3, L = p.Lz ?? 1.5, ks = p.ks ?? 1030;
        const kr = (Ec * t ** 3 / (12 * (1 - nu_c ** 2))) / (ks * L ** 4);
        return kr.toFixed(3) + (kr < 1 ? " FLEX" : " RIGID");
      },
    },
  ],
  computedLabels(p, states) {
    const q_adm_tonf = p.q_adm ?? 10;
    const ks_factor = p.ks_factor ?? 10.5;
    const q_adm_kN = q_adm_tonf * TONF_TO_KN;
    const ks = p.ks ?? q_adm_kN * ks_factor;
    const t = p.tz ?? 0.3, L = p.Lz ?? 1.5;
    const D = Ec * t ** 3 / (12 * (1 - nu_c ** 2));
    const kr = D / (ks * L ** 4);
    const P = p.P_simple ?? 0;
    let qMin = 0, qMax = 0, hasData = false;
    const pm = (states.analyzeOutputs.rawVal as any)?.pressure as Map<number, number[]> | undefined;
    if (pm && pm.size) {
      for (const vals of pm.values()) {
        for (const v of vals) {
          if (!hasData) { qMin = qMax = v; hasData = true; }
          if (v < qMin) qMin = v;
          if (v > qMax) qMax = v;
        }
      }
    }
    const sigmaMax = Math.abs(qMin), sigmaMin = Math.abs(qMax);
    const ratio = sigmaMax / (q_adm_tonf || 1);
    const khRatio = p.kh_ratio ?? 0.5;
    const supportModeIdx = (p.support_mode ?? 0) | 0;
    const supportModeName = ["A. Winkler 3D", "B. Vert+esquinas", "C. Vert+1 nodo"][supportModeIdx];
    return {
      "Mode": "Direct P/Mx/My",
      "Soporte": supportModeName,
      "ks (kN/m³)": ks.toFixed(0),
      "k_h/k_v": khRatio.toFixed(2) + " (Bowles)",
      "D (kN·m)": D.toFixed(1),
      "k_r (Biot)": kr.toFixed(3) + (kr < 1 ? " FLEXIBLE" : " RIGID"),
      "P (tonf)": P.toFixed(2),
      "Mx (tonf·m)": (p.Mx_simple ?? 0).toFixed(2),
      "My (tonf·m)": (p.My_simple ?? 0).toFixed(2),
      "σ_max comp (tonf/m²)": sigmaMax.toFixed(2),
      "σ_min comp (tonf/m²)": sigmaMin.toFixed(2),
      "q_adm (tonf/m²)": q_adm_tonf.toFixed(2),
      "σ/q_adm": ratio.toFixed(2) + (ratio > 1 ? " ⚠" : " ✓"),
    };
  },
  build(p, states) {
    const { Lz, Bz, tz, bc, Hp } = p;
    const q_adm_kN = p.q_adm * TONF_TO_KN;
    const ks = p.ks ?? (q_adm_kN * p.ks_factor);
    const P_kN = (p.P_simple ?? 0) * TONF_TO_KN;
    const Mx_kN = (p.Mx_simple ?? 0) * TONF_TO_KN;
    const My_kN = (p.My_simple ?? 0) * TONF_TO_KN;
    const nSub = Math.round(p.nSub);

    const xC = Lz / 2, yC = Bz / 2;
    const xs: number[] = [], ys: number[] = [];
    for (let i = 0; i <= nSub; i++) { xs.push(Lz * i / nSub); ys.push(Bz * i / nSub); }
    if (!xs.includes(xC)) { xs.push(xC); xs.sort((a, b) => a - b); }
    if (!ys.includes(yC)) { ys.push(yC); ys.sort((a, b) => a - b); }

    const N: [number, number, number][] = [];
    const elsEl: number[][] = [];
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

    // Malla Q4 de la zapata
    const idx: number[][] = [];
    for (let j = 0; j < ys.length; j++) {
      const row: number[] = [];
      for (let i = 0; i < xs.length; i++) row.push(addNode(xs[i], ys[j], 0));
      idx.push(row);
    }
    for (let j = 0; j < ys.length - 1; j++)
      for (let i = 0; i < xs.length - 1; i++) {
        const e = elsEl.length;
        elsEl.push([idx[j][i], idx[j][i + 1], idx[j + 1][i + 1], idx[j + 1][i]]);
        thicknesses.set(e, tz);
        elasticities.set(e, Ec);
        poissons.set(e, nu_c);
        densities.set(e, rho);
      }

    // Pedestal (columna ideal: bc×bc, 1 frame element desde base hasta Hp)
    const nColBot = addNode(xC, yC, 0);
    const nColTop = addNode(xC, yC, Hp);
    const ePed = elsEl.length;
    elsEl.push([nColBot, nColTop]);
    elasticities.set(ePed, Ec); poissons.set(ePed, nu_c); Gm.set(ePed, Gc);
    areas.set(ePed, bc * bc);
    Iz.set(ePed, bc ** 4 / 12);
    Iy.set(ePed, bc ** 4 / 12);
    J.set(ePed, 0.14 * bc ** 4);
    densities.set(ePed, rho);
    sections.set(ePed, { type: "rect", b: bc, h: bc });

    // Carga combinada P+Mx+My al tope del pedestal
    const loadsCombo = new Map<number, [number, number, number, number, number, number]>();
    loadsCombo.set(nColTop, [0, 0, -P_kN, Mx_kN, My_kN, 0]);

    // ─── Modelos de soporte ───────────────────────────────────────────
    //   A (0): Winkler 3D — resortes kx, ky, kz en TODOS los nodos.
    //          Ratio kh/kv configurable (Bowles 0.3-0.7). Anti-singular
    //          rotacional muy suave en esquina (0,0).
    //   B (1): Winkler vertical (kz solo) + 4 esquinas restringidas en
    //          X, Y, Rz. Asume el suelo no aporta rigidez horizontal y
    //          las restricciones puntuales evitan mecanismo. Estilo
    //          "base empotrada" para análisis sísmico simplificado.
    //   C (2): Winkler vertical solo + 1 nodo (esquina 0,0) restringido
    //          en X, Y, Rz para evitar mecanismo. Más fiel al Winkler
    //          clásico de Bowles que usa resortes rotacionales suaves.
    // ─────────────────────────────────────────────────────────────────
    const dxAvg = Lz / nSub, dyAvg = Bz / nSub;
    const KH_RATIO = p.kh_ratio ?? 0.5;
    const kRotFactor = p.kRot_factor ?? 1e-4;
    const supportMode = (p.support_mode ?? 0) | 0;
    const springs: Array<{ node: number; dof: number; k: number }> = [];
    const springNodes: number[] = [];
    const supports = new Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>();

    for (let j = 0; j < ys.length; j++)
      for (let i = 0; i < xs.length; i++) {
        const A_trib = dxAvg * dyAvg
          * ((i === 0 || i === xs.length - 1) ? 0.5 : 1)
          * ((j === 0 || j === ys.length - 1) ? 0.5 : 1);
        const kv = ks * A_trib;
        if (supportMode === 0) {
          // A: Winkler 3D
          const kh = ks * A_trib * KH_RATIO;
          springs.push({ node: idx[j][i], dof: 0, k: kh });
          springs.push({ node: idx[j][i], dof: 1, k: kh });
        }
        // Vertical Winkler en TODOS los modos
        springs.push({ node: idx[j][i], dof: 2, k: kv });
        springNodes.push(idx[j][i]);
      }

    if (supportMode === 0) {
      // A: anti-singular rotacional en esquina (0,0)
      const kRot = ks * dxAvg * dyAvg * kRotFactor;
      const n00 = idx[0][0];
      springs.push({ node: n00, dof: 3, k: kRot });
      springs.push({ node: n00, dof: 4, k: kRot });
      springs.push({ node: n00, dof: 5, k: kRot });
    } else if (supportMode === 1) {
      // B: las 4 esquinas restringidas en X, Y, Rz
      const lastJ = ys.length - 1, lastI = xs.length - 1;
      const corners = [idx[0][0], idx[0][lastI], idx[lastJ][0], idx[lastJ][lastI]];
      for (const n of corners) {
        // [Tx, Ty, Tz, Rx, Ry, Rz] — true = fijo
        supports.set(n, [true, true, false, false, false, true]);
      }
    } else if (supportMode === 2) {
      // C: 1 nodo esquina restringido en X, Y, Rz
      const n00 = idx[0][0];
      supports.set(n00, [true, true, false, false, false, true]);
    }

    states.nodes.val = N.map((n) => [n[0], n[1], n[2]] as Node);
    states.elements.val = elsEl;
    states.nodeInputs.val = { supports, loads: loadsCombo };
    states.elementInputs.val = {
      elasticities, poissonsRatios: poissons,
      areas, momentsOfInertiaZ: Iz, momentsOfInertiaY: Iy,
      torsionalConstants: J, shearModuli: Gm,
      thicknesses, densities, sectionShapes: sections,
    };

    try {
      // 1) Análisis combinado
      states.deformOutputs.val = deform(
        states.nodes.val, states.elements.val,
        states.nodeInputs.val, states.elementInputs.val, springs,
      );
      const ao = analyze(
        states.nodes.val, states.elements.val,
        states.elementInputs.val, states.deformOutputs.val,
      );

      // Helper: mapa de presiones (σ_z = ks × w, en tonf/m²) por elemento Q4
      const computePressure = (defs?: Map<number, number[]>): Map<number, number[]> => {
        const pm = new Map<number, number[]>();
        states.elements.rawVal.forEach((el, eIdx) => {
          if (el.length !== 4) return;
          const qPerNode: number[] = [];
          for (const n of el) {
            const d = defs?.get(n);
            const w = d ? d[2] : 0;
            // σ_z = ks × w. En Calcpad σ<0 = compresión (hacia abajo). w negativo al asentar.
            const sigma_kN = ks * w;
            qPerNode.push(sigma_kN / TONF_TO_KN);
          }
          pm.set(eIdx, qPerNode);
        });
        return pm;
      };
      const defsAll = states.deformOutputs.rawVal.deformations;
      const pressureAll = computePressure(defsAll);
      let qMinCombo = 0;
      pressureAll.forEach((vals) => { for (const v of vals) if (v < qMinCombo) qMinCombo = v; });
      (ao as any).pressure = pressureAll;

      // 2-4) Análisis separados: pure P, pure Mx, pure My para comparar superposición con Calcpad
      const inputsP  = { supports: new Map(), loads: new Map([[nColTop, [0, 0, -P_kN, 0, 0, 0] as [number,number,number,number,number,number]]]) };
      const inputsMx = { supports: new Map(), loads: new Map([[nColTop, [0, 0, 0, Mx_kN, 0, 0] as [number,number,number,number,number,number]]]) };
      const inputsMy = { supports: new Map(), loads: new Map([[nColTop, [0, 0, 0, 0, My_kN, 0] as [number,number,number,number,number,number]]]) };
      try {
        const r = deform(states.nodes.val, states.elements.val, inputsP, states.elementInputs.val, springs);
        (ao as any).pressure_P = computePressure(r.deformations);
        (ao as any).deform_P = r.deformations;
      } catch {}
      try {
        const r = deform(states.nodes.val, states.elements.val, inputsMx, states.elementInputs.val, springs);
        (ao as any).pressure_Mx = computePressure(r.deformations);
        (ao as any).deform_Mx = r.deformations;
      } catch {}
      try {
        const r = deform(states.nodes.val, states.elements.val, inputsMy, states.elementInputs.val, springs);
        (ao as any).pressure_My = computePressure(r.deformations);
        (ao as any).deform_My = r.deformations;
      } catch {}

      states.analyzeOutputs.val = ao;

      // Log espejo Calcpad
      const qMaxAbs = Math.abs(qMinCombo);
      let qMinAbs = Infinity;
      pressureAll.forEach((vals) => { for (const v of vals) { const a = Math.abs(v); if (a < qMinAbs) qMinAbs = a; } });
      if (!Number.isFinite(qMinAbs)) qMinAbs = 0;
      const ratio = qMaxAbs / p.q_adm;
      const D = Ec * tz ** 3 / (12 * (1 - nu_c ** 2));
      const kr = D / (ks * Lz ** 4);
      console.log(
        `[Zapata VALIDACIÓN — espejo Calcpad]\n` +
        `  Cargas: P=${(p.P_simple ?? 0).toFixed(2)} tonf, Mx=${(p.Mx_simple ?? 0).toFixed(2)} tonf·m, My=${(p.My_simple ?? 0).toFixed(2)} tonf·m\n` +
        `  ─── Valores derivados (comparar con Calcpad) ───\n` +
        `  D flexural = ${D.toFixed(1)} kN·m   (Calcpad: idem)\n` +
        `  ks         = ${ks.toFixed(0)} kN/m³   (Calcpad: idem)\n` +
        `  k_r Biot   = ${kr.toFixed(3)} ${kr < 1 ? "FLEXIBLE" : "RÍGIDA"}\n` +
        `  ─── Resultados FEM Hekatan ───\n` +
        `  q_max (centro) = -${qMaxAbs.toFixed(2)} tonf/m²\n` +
        `  q_min (bordes) = -${qMinAbs.toFixed(2)} tonf/m²\n` +
        `  variación = ${((1 - qMinAbs / (qMaxAbs || 1)) * 100).toFixed(1)}%\n` +
        `  ratio q/q_adm = ${ratio.toFixed(3)} ${ratio > 1 ? "⚠ SOBREPASA" : "✓ OK"}\n` +
        `  FS = ${(p.q_adm / (qMaxAbs || 1)).toFixed(3)}`,
      );
    } catch (e) {
      console.error("Solver error zapata validación:", e);
    }

    // Resortes 3D reactivos: siguen la deformada al mover sliders
    const deforms = states.deformOutputs.rawVal.deformations;
    let wMaxAbs = 1e-9;
    for (const nIdx of springNodes) {
      const d = deforms?.get(nIdx);
      if (d && Number.isFinite(d[2])) wMaxAbs = Math.max(wMaxAbs, Math.abs(d[2]));
    }
    const COILS_VIS = SPRING_COILS * 12;
    const springSet = new Set(springNodes);
    const viewerSettings = (document.querySelector("#viewer") as any)?.__settings;

    const buildSprings = (deformedShape: boolean, deformScaleVal: number): THREE.Object3D[] => {
      const amp = deformedShape ? deformScaleVal : 0;
      const zBot = -(wMaxAbs * Math.max(amp, 1) + SPRING_HEIGHT);
      const arr: THREE.Object3D[] = [];
      for (const nIdx of springNodes) {
        if (!springSet.has(nIdx)) continue;
        const node = states.nodes.rawVal[nIdx];
        if (!node) continue;
        const x0 = node[0], y0 = node[1];
        const d = deforms?.get(nIdx);
        const safe = (v: any) => Number.isFinite(v) ? v : 0;
        const dx = d ? safe(d[0]) : 0;
        const dy = d ? safe(d[1]) : 0;
        const dz = d ? safe(d[2]) : 0;
        const xt = x0 + dx * amp;
        const yt = y0 + dy * amp;
        const zt = 0 + dz * amp;
        const len = zt - zBot;
        const parametric = (t: number): [number, number, number] => [
          x0 + (xt - x0) * t,
          y0 + (yt - y0) * t,
          zBot + len * t,
        ];
        const [x1, y1, z1] = parametric(0);
        const [x2, y2, z2] = parametric(0.05);
        const pts: THREE.Vector3[] = [
          new THREE.Vector3(x1, y1, z1),
          new THREE.Vector3(x2, y2, z2),
        ];
        for (let c = 0; c <= COILS_VIS; c++) {
          const t = 0.05 + 0.9 * (c / COILS_VIS);
          const [xc, yc, zc] = parametric(t);
          const ang = 2 * Math.PI * SPRING_COILS * (c / COILS_VIS);
          pts.push(new THREE.Vector3(xc + SPRING_WIDTH * Math.cos(ang), yc + SPRING_WIDTH * Math.sin(ang), zc));
        }
        pts.push(new THREE.Vector3(xt, yt, zt));
        arr.push(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), MAT_SPRING));

        // Ancla verde cuadrada en el suelo
        const a = ANCHOR_SIZE;
        const aPts = [
          new THREE.Vector3(x0 - a, y0 - a, zBot),
          new THREE.Vector3(x0 + a, y0 - a, zBot),
          new THREE.Vector3(x0 + a, y0 + a, zBot),
          new THREE.Vector3(x0 - a, y0 + a, zBot),
          new THREE.Vector3(x0 - a, y0 - a, zBot),
        ];
        arr.push(new THREE.Line(new THREE.BufferGeometry().setFromPoints(aPts), MAT_GROUND));
      }
      return arr;
    };

    const myVer = activeExampleVersion.v;
    if (viewerSettings) {
      van.derive(() => {
        // ── BUGFIX zombie derive: el guard DEBE ir ANTES de leer `.val`.
        // VanJS auto-suscribe el derive a TODOS los .val que LEYÓ en su última
        // ejecución. Si leemos primero y guardamos después, las suscripciones
        // a deformedShape/deformScale persisten aunque cambiemos de ejemplo,
        // y se despiertan cada vez que conexion-rbs (u otro) anima esos vals,
        // acumulando zombies y colgando el navegador. ──
        if (activeExampleVersion.v !== myVer) return;  // no-op + drop subscriptions
        const ds = viewerSettings.deformedShape.val;
        const sc = viewerSettings.deformScale.val;
        states.objects3D.val = buildSprings(ds, sc);
      });
    } else {
      states.objects3D.val = buildSprings(true, 1);
    }
  },
};
