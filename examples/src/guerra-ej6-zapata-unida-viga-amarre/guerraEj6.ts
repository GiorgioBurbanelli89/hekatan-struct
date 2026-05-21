/**
 * Ej.6 Guerra MDI (pag.113-130) - ZAPATA UNIDA CON VIGA DE AMARRE
 *
 * DOS zapatas separadas:
 *  - Zapata 1 (medianera): 2.38m × 3.00m, columna 1 en (0.25, 1.50)
 *  - Zapata 2 (interna):   2.45m × 2.45m, columna 2 en x≈5.245, y=1.5
 *  - Viga amarre central:  1.64m × 0.45m × 0.95m (no apoya en suelo)
 *
 * Total bbox: 6.47m × 3.00m. ks=3820, h=0.55, f'c=210, q_adm=19.
 * Cargas: Col1 P_D=70 P_L=40 → 110t. Col2 P_D=89 P_L=51 → 140t.
 *
 * Modelado: bounding box rectangular con MASK que pone ks=0 en areas
 * fuera de los 2 footings y en la franja viga (libre de suelo).
 */
import * as THREE from "three";
import { plateQ4Solve } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";
import safeRef from "./safe-reference.json";

const TONF_TO_KN = 9.80665;
const KN_TO_TONF = 1 / TONF_TO_KN;

function buildColumnFrame(x: number, y: number, h: number, s: number): THREE.Object3D[] {
  const geom = new THREE.BoxGeometry(s, s, h);
  const lines = new THREE.LineSegments(new THREE.EdgesGeometry(geom),
    new THREE.LineBasicMaterial({ color: 0xb0b0b0, linewidth: 2 }));
  lines.position.set(x, y, h / 2);
  return [lines];
}

function buildFootingOutline(x0: number, y0: number, lx: number, ly: number, z: number): THREE.Object3D {
  const g = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(x0, y0, z), new THREE.Vector3(x0+lx, y0, z),
    new THREE.Vector3(x0+lx, y0+ly, z), new THREE.Vector3(x0, y0+ly, z),
    new THREE.Vector3(x0, y0, z),
  ]);
  return new THREE.Line(g, new THREE.LineBasicMaterial({ color: 0xfbbf24, linewidth: 2 }));
}

export const guerraEj6ZapataUnida: ExampleDef = {
  id: "guerra-ej6-zapata-unida-viga-amarre",
  name: "Ej.6 · Zapata Unida con Viga Amarre (2.38+1.64+2.45)",
  category: "📚 Libros · SAFE - Marcelo Guerra",
  benchmark: true,
  defaultShellResult: "pressure",
  availableShellResults: ["pressure", "bendingXX", "bendingYY", "bendingXY", "vonMises", "displacementZ"],
  hasModal: false,
  guide: [
    "EJ.6 pag.113-130. ZAPATA UNIDA con VIGA DE AMARRE.",
    "DOS zapatas SEPARADAS: medianera (2.38×3.00m) + interna (2.45×2.45m).",
    "Viga amarre central 1.64m × 0.45×0.95cm (solo flexión, no suelo).",
    "Col1: P_D=70, P_L=40 → 110t (en medianera).",
    "Col2: P_D=89, P_L=51 → 140t (en interna).",
    "f'c=210, q_adm=19, ks=3820. Libro pag.180: σ_max=26.18 t/m² (Z1 borde ext).",
  ],
  params: {
    L1:        { default: 2.38, min: 1.50, max: 4.00, step: 0.05, label: "L1 Zapata1 (m)" },
    B1:        { default: 3.00, min: 2.00, max: 4.50, step: 0.05, label: "B1 Zapata1 (m)" },
    L2:        { default: 2.45, min: 1.50, max: 4.00, step: 0.05, label: "L2 Zapata2 (m)" },
    B2:        { default: 2.45, min: 2.00, max: 4.50, step: 0.05, label: "B2 Zapata2 (m)" },
    L_viga:    { default: 1.64, min: 0.50, max: 4.00, step: 0.05, label: "L viga amarre (m)" },
    b_viga:    { default: 0.45, min: 0.25, max: 1.20, step: 0.05, label: "b viga (m)" },
    h:         { default: 0.55, min: 0.30, max: 0.90, step: 0.05, label: "h zapata (m)" },
    col_size:  { default: 0.50, min: 0.20, max: 1.00, step: 0.05, label: "col lado (m)" },
    ks_tm3:    { default: 3820, min: 500, max: 8000, step: 50, label: "ks (tonf/m³)" },
    P_col1:    { default: 110.0, min: 0, max: 400, step: 1, label: "P col1 D+L (tonf)" },
    P_col2:    { default: 140.0, min: 0, max: 400, step: 1, label: "P col2 D+L (tonf)" },
    fc_kgcm2:  { default: 210, min: 175, max: 600, step: 5, label: "f'c (kg/cm²)" },
    nx:        { default: 32, min: 16, max: 48, step: 2, label: "nx mesh" },
    ny:        { default: 15, min: 8, max: 24, step: 2, label: "ny mesh" },
    h_col:     { default: 0.6, min: 0.2, max: 2.0, step: 0.1, label: "Hcol viz (m)" },
  },
  build(p, states) {
    const L1 = p.L1, B1 = p.B1;
    const L2 = p.L2, B2 = p.B2;
    const Lv = p.L_viga;
    const Lz = L1 + Lv + L2;        // bbox X total
    const Bmax = Math.max(B1, B2);  // bbox Y total
    const tz = p.h;
    const nx = Math.round(p.nx), ny = Math.round(p.ny);
    const nxn = nx + 1, nyn = ny + 1;
    const dx = Lz / nx, dy = Bmax / ny;

    const P_kN_c1 = p.P_col1 * TONF_TO_KN;
    const P_kN_c2 = p.P_col2 * TONF_TO_KN;
    const ks_kNm3 = p.ks_tm3 * TONF_TO_KN;
    const E_kgcm2 = 14100 * Math.sqrt(p.fc_kgcm2);
    const E_kNm2 = E_kgcm2 * 98.0665;
    const nu = 0.20;

    // Geometria zapatas + viga amarre (en bbox local 0..Lz, 0..Bmax)
    // Zapata 1: x ∈ [0, L1], y ∈ [(Bmax-B1)/2, (Bmax+B1)/2]
    const z1 = { x0: 0, y0: (Bmax - B1)/2, x1: L1, y1: (Bmax + B1)/2 };
    // Zapata 2: x ∈ [L1+Lv, Lz], y ∈ [(Bmax-B2)/2, (Bmax+B2)/2]
    const z2 = { x0: L1 + Lv, y0: (Bmax - B2)/2, x1: Lz, y1: (Bmax + B2)/2 };
    // Viga amarre: x ∈ [L1, L1+Lv], y ∈ [(Bmax-b_viga)/2, (Bmax+b_viga)/2]
    const vb = { x0: L1, y0: (Bmax - p.b_viga)/2, x1: L1+Lv, y1: (Bmax + p.b_viga)/2 };

    const inZ1 = (x:number,y:number) => x>=z1.x0-1e-6 && x<=z1.x1+1e-6 && y>=z1.y0-1e-6 && y<=z1.y1+1e-6;
    const inZ2 = (x:number,y:number) => x>=z2.x0-1e-6 && x<=z2.x1+1e-6 && y>=z2.y0-1e-6 && y<=z2.y1+1e-6;
    const inViga = (x:number,y:number) => x>=vb.x0-1e-6 && x<=vb.x1+1e-6 && y>=vb.y0-1e-6 && y<=vb.y1+1e-6;

    const nodes: [number, number][] = [];
    for (let j = 0; j < nyn; ++j)
      for (let i = 0; i < nxn; ++i) nodes.push([i * dx, j * dy]);
    // Mesh COMPLETA (sin trim) para evitar singularidad de nodos huerfanos.
    // La "separacion visual" entre zapatas la da el ks=0 + bajo self-weight
    // afuera de footings → σ ~ 0 → color azul/transparente.
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
        const x = i * dx, y = j * dy;
        // Zapatas en contacto con suelo. Viga amarre NO toca suelo (ks=0).
        const inFooting = (inZ1(x,y) || inZ2(x,y)) && !inViga(x,y);
        const k_eff = inFooting ? ks_kNm3 * A_trib : 1e-6;
        springs.push({ node: nodeIdx, dof: 0, k: k_eff });
        if (inFooting) {
          selfWeightLoads.push({ node: nodeIdx, dof: 0, value: -sw_pressure_kN_m2 * A_trib });
        } else if (inViga(x,y)) {
          // Self-weight de la viga (mas alta que la zapata: usamos h*1.7 aprox)
          selfWeightLoads.push({ node: nodeIdx, dof: 0, value: -GAMMA_C_KN_M3 * 0.95 * A_trib });
        }
        if (eI && eJ) {
          const k_theta = 1e-6 * ks_kNm3 * dx * dy;
          springs.push({ node: nodeIdx, dof: 1, k: k_theta });
          springs.push({ node: nodeIdx, dof: 2, k: k_theta });
        }
      }

    // Posicion de columnas: Col1 en (0.25, Bmax/2), Col2 en (Lz - 0.25, Bmax/2)
    const col1_x = 0.25, col1_y = Bmax / 2;
    const col2_x = Lz - 0.25, col2_y = Bmax / 2;
    const findColNodes = (cx: number, cy: number) => {
      const r: number[] = [];
      for (let n = 0; n < nodes.length; n++) {
        const xn = nodes[n][0], yn = nodes[n][1];
        if (Math.abs(xn - cx) <= p.col_size/2 + 1e-6 &&
            Math.abs(yn - cy) <= p.col_size/2 + 1e-6) r.push(n);
      }
      return r;
    };
    const col1Nodes = findColNodes(col1_x, col1_y);
    const col2Nodes = findColNodes(col2_x, col2_y);
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
      // Centro del elemento para chequear si esta dentro de Z1/Z2/Viga
      const xc = (nodes[el[0]][0] + nodes[el[2]][0]) / 2;
      const yc = (nodes[el[0]][1] + nodes[el[2]][1]) / 2;
      const inFooting = inZ1(xc, yc) || inZ2(xc, yc);
      const inVigaArea = inViga(xc, yc) && !inFooting;
      // Pressure: solo en zapatas (con valor real). Viga + corners = NaN → gris.
      pressure.set(i, el.map(n =>
        inFooting ? -Math.abs(ks_kNm3 * result.nodeResults[n].w) : NaN
      ));
      const er = result.elementResults[i];
      // Bending: visible en zapatas Y viga (la viga tiene flexion real).
      const showBending = inFooting || inVigaArea;
      bendingXX.set(i, [er.Mxx, er.Mxx, er.Mxx, er.Mxx].map(v => showBending ? v : NaN));
      bendingYY.set(i, [er.Myy, er.Myy, er.Myy, er.Myy].map(v => showBending ? v : NaN));
      bendingXY.set(i, [er.Mxy, er.Mxy, er.Mxy, er.Mxy].map(v => showBending ? v : NaN));
      const vm = Math.sqrt(er.Mxx**2 + er.Myy**2 - er.Mxx*er.Myy + 3*er.Mxy**2);
      vonMises.set(i, [vm, vm, vm, vm].map(v => showBending ? v : NaN));
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
    objs.push(buildFootingOutline(z1.x0, z1.y0, L1, B1, 0.01));
    objs.push(buildFootingOutline(z2.x0, z2.y0, L2, B2, 0.01));
    objs.push(buildFootingOutline(vb.x0, vb.y0, Lv, p.b_viga, 0.02));
    objs.push(...buildColumnFrame(col1_x, col1_y, p.h_col, p.col_size));
    objs.push(...buildColumnFrame(col2_x, col2_y, p.h_col, p.col_size));
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
    const ref = safeRef as any;
    return {
      "📊 σ_max Hekatan":    `${sMax.toFixed(3)} t/m²`,
      "📊 σ_min Hekatan":    `${sMin.toFixed(3)} t/m²`,
      "📘 σ_max Zapata1 libro": `${ref?.manual_libro?.sigma_max_zapata1_tm2} t/m²`,
      "📘 σ_min Zapata1 libro": `${ref?.manual_libro?.sigma_min_zapata1_tm2} t/m²`,
      "📘 σ avg Zapata2 libro": `${ref?.manual_libro?.sigma_zapata2_avg_tm2} t/m²`,
    };
  },
};
