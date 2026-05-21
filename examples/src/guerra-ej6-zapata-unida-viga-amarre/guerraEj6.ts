/**
 * Ej.6 Guerra MDI (pag.113-130) - ZAPATA UNIDA CON VIGA DE AMARRE
 * 2 zapatas separadas + viga de amarre. L_entre = 5m.
 * Col1 (medianera): P=110t. Col2 (interna): P=140t. f'c=290.
 * Aprox: modelamos como un AREA combinada larga con zonas no-loaded entre cols.
 */
import * as THREE from "three";
import { plateQ4Solve } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";
import safeRef from "./safe-reference.json";

const TONF_TO_KN = 9.80665;
const KN_TO_TONF = 1 / TONF_TO_KN;

function buildColumnFrame(x: number, y: number, h: number, s: number): THREE.Object3D[] {
  const geom = new THREE.BoxGeometry(s, s, h);
  const lines = new THREE.LineSegments(
    new THREE.EdgesGeometry(geom),
    new THREE.LineBasicMaterial({ color: 0xb0b0b0, linewidth: 2 }),
  );
  lines.position.set(x, y, h / 2);
  return [lines];
}

export const guerraEj6ZapataUnida: ExampleDef = {
  id: "guerra-ej6-zapata-unida-viga-amarre",
  name: "Ej.6 · Zapata Unida con Viga de Amarre",
  category: "📚 Libros · SAFE - Marcelo Guerra",
  benchmark: true,
  defaultShellResult: "pressure",
  availableShellResults: ["pressure", "bendingXX", "bendingYY", "bendingXY", "vonMises", "displacementZ"],
  hasModal: false,
  guide: [
    "EJ.6 pag.113-130. Zapata medianera + interna conectadas por viga.",
    "Col 1 (medianera, x=0.25 in F1): P=110t. Col 2 (interna en F2): P=140t.",
    "L entre cols = 5m. Cols 50×50cm. f'c=290.",
  ],
  params: {
    L_tot:       { default: 5.50, min: 4.00, max: 8.00, step: 0.05, label: "L total bbox (m)" },
    B:           { default: 3.15, min: 2.00, max: 4.50, step: 0.05, label: "B (m)" },
    h:           { default: 0.50, min: 0.30, max: 0.90, step: 0.05, label: "h (m)" },
    col1_x:      { default: 0.25, min: 0.10, max: 1.50, step: 0.05, label: "col1 x (m)" },
    col2_x:      { default: 5.25, min: 3.00, max: 7.00, step: 0.05, label: "col2 x (m)" },
    col_size:    { default: 0.50, min: 0.20, max: 1.00, step: 0.05, label: "col lado (m)" },
    ks_tm3:      { default: 3800, min: 500, max: 8000, step: 50, label: "ks (tonf/m³)" },
    P_col1:      { default: 110.0, min: 0, max: 400, step: 1, label: "P col1 (tonf)" },
    P_col2:      { default: 140.0, min: 0, max: 400, step: 1, label: "P col2 (tonf)" },
    fc_kgcm2:    { default: 290, min: 175, max: 600, step: 5, label: "f'c (kg/cm²)" },
    nx:          { default: 24, min: 12, max: 40, step: 2, label: "nx mesh" },
    ny:          { default: 12, min: 6, max: 24, step: 2, label: "ny mesh" },
    h_col:       { default: 0.6, min: 0.2, max: 2.0, step: 0.1, label: "Hcol viz (m)" },
  },
  build(p, states) {
    const Lz = p.L_tot, Bz = p.B, tz = p.h;
    const nx = Math.round(p.nx), ny = Math.round(p.ny);
    const nxn = nx + 1, nyn = ny + 1;
    const dx = Lz / nx, dy = Bz / ny;

    const P_kN_c1 = p.P_col1 * TONF_TO_KN;
    const P_kN_c2 = p.P_col2 * TONF_TO_KN;
    const ks_kNm3 = p.ks_tm3 * TONF_TO_KN;
    const E_kgcm2 = 14100 * Math.sqrt(p.fc_kgcm2);
    const E_kNm2 = E_kgcm2 * 98.0665;
    const nu = 0.20;

    const nodes: [number, number][] = [];
    for (let j = 0; j < nyn; ++j)
      for (let i = 0; i < nxn; ++i) nodes.push([i * dx, j * dy]);
    const elements: [number, number, number, number][] = [];
    for (let j = 0; j < ny; ++j)
      for (let i = 0; i < nx; ++i) {
        const n0 = j * nxn + i;
        elements.push([n0, n0 + 1, n0 + nxn + 1, n0 + nxn]);
      }

    const GAMMA_C_KN_M3 = 2.4 * TONF_TO_KN;
    const sw_pressure_kN_m2 = GAMMA_C_KN_M3 * tz;
    const springs: Array<{ node: number; dof: number; k: number }> = [];
    const selfWeightLoads: Array<{ node: number; dof: number; value: number }> = [];
    for (let j = 0; j < nyn; ++j)
      for (let i = 0; i < nxn; ++i) {
        const eI = (i === 0 || i === nxn - 1);
        const eJ = (j === 0 || j === nyn - 1);
        const factor = eI && eJ ? 0.25 : (eI || eJ ? 0.5 : 1.0);
        const A_trib = dx * dy * factor;
        const nodeIdx = j * nxn + i;
        springs.push({ node: nodeIdx, dof: 0, k: ks_kNm3 * A_trib });
        selfWeightLoads.push({ node: nodeIdx, dof: 0, value: -sw_pressure_kN_m2 * A_trib });
        if (eI && eJ) {
          const k_theta = 1e-6 * ks_kNm3 * dx * dy;
          springs.push({ node: nodeIdx, dof: 1, k: k_theta });
          springs.push({ node: nodeIdx, dof: 2, k: k_theta });
        }
      }

    const cy = Bz / 2;
    const findColNodes = (cxCol: number) => {
      const r: number[] = [];
      for (let n = 0; n < nodes.length; n++) {
        const xn = nodes[n][0], yn = nodes[n][1];
        if (Math.abs(xn - cxCol) <= p.col_size/2 + 1e-6 &&
            Math.abs(yn - cy) <= p.col_size/2 + 1e-6) r.push(n);
      }
      return r;
    };
    const col1Nodes = findColNodes(p.col1_x);
    const col2Nodes = findColNodes(p.col2_x);
    const columnLoads: Array<{ node: number; dof: number; value: number }> = [];
    if (col1Nodes.length > 0) {
      const Pp = P_kN_c1 / col1Nodes.length;
      for (const n of col1Nodes) columnLoads.push({ node: n, dof: 0, value: -Pp });
    }
    if (col2Nodes.length > 0) {
      const Pp = P_kN_c2 / col2Nodes.length;
      for (const n of col2Nodes) columnLoads.push({ node: n, dof: 0, value: -Pp });
    }
    const pointLoads = [...columnLoads, ...selfWeightLoads];

    const result = plateQ4Solve({
      E: E_kNm2, nu, thickness: tz, theoryType: 0,
      bcType: "none", nodes, elements,
      bcs: [], pointLoads, springs,
    });

    const pressure = new Map<number, number[]>();
    const bendingXX = new Map<number, number[]>();
    const bendingYY = new Map<number, number[]>();
    const bendingXY = new Map<number, number[]>();
    const vonMises = new Map<number, number[]>();
    elements.forEach((el, i) => {
      pressure.set(i, el.map(n => -Math.abs(ks_kNm3 * result.nodeResults[n].w)));
      const er = result.elementResults[i];
      bendingXX.set(i, [er.Mxx, er.Mxx, er.Mxx, er.Mxx]);
      bendingYY.set(i, [er.Myy, er.Myy, er.Myy, er.Myy]);
      bendingXY.set(i, [er.Mxy, er.Mxy, er.Mxy, er.Mxy]);
      const vm = Math.sqrt(er.Mxx**2 + er.Myy**2 - er.Mxx*er.Myy + 3*er.Mxy**2);
      vonMises.set(i, [vm, vm, vm, vm]);
    });

    const N3D: [number, number, number][] = nodes.map(n => [n[0], n[1], 0]);
    states.nodes.val = N3D;
    states.elements.val = elements as unknown as number[][];
    states.nodeInputs.val = { supports: new Map(), loads: new Map() };
    states.elementInputs.val = {
      elasticities: new Map(elements.map((_, i) => [i, E_kNm2])),
      poissonsRatios: new Map(elements.map((_, i) => [i, nu])),
      thicknesses: new Map(elements.map((_, i) => [i, tz])),
    };
    const deformations = new Map<number, [number, number, number, number, number, number]>();
    for (const r of result.nodeResults) deformations.set(r.node, [0, 0, r.w, r.bx, r.by, 0]);
    states.deformOutputs.val = { deformations, reactions: new Map() };
    states.analyzeOutputs.val = { pressure, bendingXX, bendingYY, bendingXY, vonMises };

    const objs: THREE.Object3D[] = [];
    objs.push(...buildColumnFrame(p.col1_x, cy, p.h_col, p.col_size));
    objs.push(...buildColumnFrame(p.col2_x, cy, p.h_col, p.col_size));
    states.objects3D.val = objs;
  },

  computedLabels(_p, states) {
    const pressureMap = states.analyzeOutputs.val.pressure;
    let sMax = -Infinity, sMin = Infinity;
    if (pressureMap)
      for (const arr of pressureMap.values())
        for (const v of arr) {
          const v_tm2 = Math.abs(v) * KN_TO_TONF;
          if (v_tm2 > sMax) sMax = v_tm2;
          if (v_tm2 < sMin) sMin = v_tm2;
        }
    if (sMax === -Infinity) { sMax = 0; sMin = 0; }
    return {
      "📊 σ_max Hekatan": `${sMax.toFixed(3)} t/m²`,
      "📊 σ_min Hekatan": `${sMin.toFixed(3)} t/m²`,
      "📘 q_adm libro": "19.00 t/m²",
    };
  },
};
