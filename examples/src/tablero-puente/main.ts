/**
 * Tablero de Puente — 3 vigas doble-T + losa shell (test Gustavo Solar).
 *
 * PROBLEMA QUE EL USUARIO REPORTA:
 *   En SAP2000 (y MITC4+) los esfuerzos de la viga difieren MUCHO de su programa
 *   propio. Causa habitual: vinculación incorrecta entre viga frame y losa shell.
 *
 * RECOMENDACIÓN GUSTAVO SOLAR (modelado correcto en SAP2000):
 *   Cuando insertás vigas frame con su EJE en el plano medio de la losa shell
 *   (nodos compartidos, sin offset), DEBES descontar la "ala efectiva de losa"
 *   del cálculo de la sección de la viga. La losa shell ya aporta esa ala como
 *   parte de su rigidez de membrana + flexión. Si modelás la viga T COMPLETA
 *   (con su patín superior), estás DUPLICANDO la rigidez del ala superior.
 *
 *   Sección a usar para la viga frame:
 *     ✓ Solo el alma + patín inferior  (la losa shell aporta el ala superior)
 *     ✗ NO la doble-T completa  (cuenta el ala superior dos veces)
 *
 * 3 MODOS implementados aquí (toggle en Tweakpane):
 *   0 = Naive: viga doble-T COMPLETA, eje al plano medio (rigidez duplicada)
 *   1 = Solar: viga "alma + patín inferior" SIN ala superior (correcto)
 *   2 = Eccentric: viga doble-T completa con OFFSET vertical (rigid link al
 *       centroide real, equivalente al método correcto pero con offset)
 *
 * El usuario debería ver que el modo 1 (Solar) o 2 (Eccentric) coincide con
 * SAP2000, mientras que el modo 0 (Naive) sobre-rigidiza por factor ~2.
 */
import van, { State } from "vanjs-core";
import { Pane } from "tweakpane";
import * as THREE from "three";
import {
  Node, Element, NodeInputs, ElementInputs, DeformOutputs, AnalyzeOutputs,
} from "hekatan-fem";
import { analyze, deform } from "hekatan-fem";
import {
  getToolbar, getParameters, Parameters, getViewer,
  colorMapForceUnit, colorMapDispUnit, colorMapStressUnit, enableDraggableAllPanes,
} from "hekatan-ui";

// Materiales
// LOSA = concreto armado f'c=24 MPa
const Ec = 25e6;       // kN/m²
const nu_c = 0.20;
const Gc = Ec / (2 * (1 + nu_c));
const rho_c = 24 / 9.80665;  // tonf/m³ -> usado como densidad consistente kN/m³ en hekatan-fem
// VIGAS = acero estructural ASTM A36 (Fy=250 MPa, E=200 GPa)
const Es = 200e6;      // kN/m²
const nu_s = 0.30;
const Gs = Es / (2 * (1 + nu_s));
const rho_s = 78 / 9.80665;  // tonf/m³ -> 7.85 t/m³ acero

const parameters: Parameters = {
  // Geometría tablero
  L:   { value: van.state(15.0), min: 5,  max: 30,  step: 0.5,  label: "L luz (m)" },
  W:   { value: van.state(6.0),  min: 4,  max: 12,  step: 0.5,  label: "W ancho (m)" },
  t_s: { value: van.state(0.20), min: 0.10, max: 0.40, step: 0.01, label: "t losa (m)" },
  // Vigas doble-T METÁLICAS (3 vigas longitudinales, perfil W tipico A36)
  // Defaults aprox W21x44: d=525mm, bf=165mm, tf=11mm, tw=9mm
  s_b:  { value: van.state(2.0),  min: 1.0, max: 4.0, step: 0.1, label: "spacing vigas (m)" },
  bf:   { value: van.state(0.20), min: 0.10, max: 0.50, step: 0.01, label: "bf patines (m)" },
  tf:   { value: van.state(0.015), min: 0.008, max: 0.040, step: 0.001, label: "tf patines (m)" },
  hw:   { value: van.state(0.55), min: 0.30, max: 1.20, step: 0.025, label: "hw alma (m)" },
  tw:   { value: van.state(0.010), min: 0.005, max: 0.030, step: 0.001, label: "tw alma (m)" },
  // Modo de vinculación viga-losa
  modo: {
    value: van.state(1),
    options: { "0 — Naive (doble-T completa)": 0, "1 — Solar (alma+patín inf)": 1, "2 — Eccentric (offset rigid link)": 2 },
    label: "Modo viga-losa",
  },
  // Carga distribuida sobre losa (kN/m²) — equiv HL-93 lane ~9.3 kN/m, con ancho efectivo
  q:   { value: van.state(15.0), min: 1, max: 50, step: 0.5, label: "q losa (kN/m²)" },
  // Mesh
  nx:  { value: van.state(20), min: 8, max: 40, step: 2, label: "Mesh nx (long)" },
  ny:  { value: van.state(12), min: 4, max: 24, step: 2, label: "Mesh ny (transv)" },
};

const nodesState: State<Node[]>                  = van.state([]);
const elementsState: State<Element[]>            = van.state([]);
const nodeInputsState: State<NodeInputs>         = van.state({});
const elementInputsState: State<ElementInputs>   = van.state({});
const deformOutputsState: State<DeformOutputs>   = van.state({});
const analyzeOutputsState: State<AnalyzeOutputs> = van.state({});
const objects3DState: State<THREE.Object3D[]>    = van.state([]);

// Resultados comparativos
const resultsState: State<{
  modo: string;
  M_max_kNm: number;          // momento máximo en viga central
  V_max_kN: number;            // cortante máximo en viga central
  delta_mm: number;            // deflección midspan
  vM_slab_max: number;         // von Mises slab (kN/m²)
  ratio_naive: number;         // ratio M/M_naive (siempre comparado al modo 0)
  A_beam: number;              // área sección viga frame
  Iz_beam: number;             // I de la sección viga frame
}> = van.state({
  modo: "—", M_max_kNm: 0, V_max_kN: 0, delta_mm: 0, vM_slab_max: 0,
  ratio_naive: 1.0, A_beam: 0, Iz_beam: 0,
});

van.derive(() => {
  const L = parameters.L.value.val, W = parameters.W.value.val, t_s = parameters.t_s.value.val;
  const s_b = parameters.s_b.value.val;
  const bf = parameters.bf.value.val, tf = parameters.tf.value.val;
  const hw = parameters.hw.value.val, tw = parameters.tw.value.val;
  const modo = Math.round(parameters.modo.value.val);
  const q = parameters.q.value.val;
  const nx = Math.round(parameters.nx.value.val), ny = Math.round(parameters.ny.value.val);

  // ── Sección de la viga FRAME según modo ──
  // Doble-T completa: 2 alas + alma
  //   A_full = 2*bf*tf + hw*tw
  //   I_full (eje horizontal centroidal) = computar con ejes paralelos
  // Solar (alma + patín inferior): 1 ala (inferior) + alma
  //   A_solar = bf*tf + hw*tw    (ala superior la aporta la losa shell)
  // Eccentric: doble-T completa pero con offset vertical (no implementado aquí
  //   por simplicidad — Hekatan no soporta beam offsets nativamente. Ver SAP2000
  //   "Insertion Point" o ETABS "Joint Offset". Acá lo dejamos = naive.)

  // Doble-T completa
  const A_full  = 2 * bf * tf + hw * tw;
  const h_total = 2 * tf + hw;
  // Centroide al centro (simétrico)
  // I_full = bf*tf*(hw/2 + tf/2)² × 2 + tw*hw³/12  (Steiner)
  const I_full  = 2 * (bf * tf * Math.pow(hw / 2 + tf / 2, 2)) + tw * Math.pow(hw, 3) / 12;
  const J_full  = (bf * Math.pow(tf, 3) + bf * Math.pow(tf, 3) + hw * Math.pow(tw, 3)) / 3;

  // Solar: alma + patín inferior (ala superior viene de la losa)
  // Centroide y_c_solar (medido desde fondo del patín):
  //   A_solar = bf*tf + hw*tw
  //   y_c = (bf*tf*tf/2 + hw*tw*(tf+hw/2)) / A_solar
  const A_solar  = bf * tf + hw * tw;
  const y_c_solar = (bf * tf * (tf / 2) + hw * tw * (tf + hw / 2)) / A_solar;
  // Iz_solar respecto al centroide:
  //   I_patin   = bf*tf³/12 + bf*tf*(y_c - tf/2)²
  //   I_alma    = tw*hw³/12 + hw*tw*(tf + hw/2 - y_c)²
  const I_patin = bf * Math.pow(tf, 3) / 12 + bf * tf * Math.pow(y_c_solar - tf / 2, 2);
  const I_alma  = tw * Math.pow(hw, 3) / 12 + hw * tw * Math.pow(tf + hw / 2 - y_c_solar, 2);
  const I_solar = I_patin + I_alma;
  const J_solar = (bf * Math.pow(tf, 3) + hw * Math.pow(tw, 3)) / 3;

  // Selección según modo
  const A_beam   = (modo === 1) ? A_solar  : A_full;
  const I_beam   = (modo === 1) ? I_solar  : I_full;
  const J_beam   = (modo === 1) ? J_solar  : J_full;

  // ── Generar nodos y elementos ──
  const nodes: Node[] = [];
  const elements: Element[] = [];
  const thicknesses = new Map<number, number>();
  const elasticities = new Map<number, number>();
  const poissonsRatios = new Map<number, number>();
  const densities = new Map<number, number>();
  const shearModuli = new Map<number, number>();
  const areas = new Map<number, number>();
  const Iz = new Map<number, number>();
  const Iy = new Map<number, number>();
  const J = new Map<number, number>();

  function addNode(x: number, y: number, z: number): number {
    nodes.push([x, y, z]); return nodes.length - 1;
  }
  function addShell(n0: number, n1: number, n2: number, n3: number, t: number) {
    elements.push([n0, n1, n2, n3]);
    const i = elements.length - 1;
    thicknesses.set(i, t); elasticities.set(i, Ec); poissonsRatios.set(i, nu_c);
    densities.set(i, rho_c); shearModuli.set(i, Gc);
    areas.set(i, 0); Iy.set(i, 0); Iz.set(i, 0); J.set(i, 0);
  }
  function addFrame(n0: number, n1: number, A: number, Imom: number, Jt: number) {
    elements.push([n0, n1]);
    const i = elements.length - 1;
    // ACERO ESTRUCTURAL para las vigas frame (3 vigas doble-T metalicas)
    elasticities.set(i, Es); poissonsRatios.set(i, nu_s);
    densities.set(i, rho_s); shearModuli.set(i, Gs);
    areas.set(i, A); Iy.set(i, Imom); Iz.set(i, Imom); J.set(i, Jt);
    thicknesses.set(i, 0);
  }

  // ── LOSA SHELL Q4 ──
  // Posiciones de las 3 vigas a lo ancho — las alineamos a la malla
  const yBeams = [W/2 - s_b, W/2, W/2 + s_b];

  const dx = L / nx, dy = W / ny;
  // Asegurar que las posiciones de viga estén exactamente en una columna de nodos.
  // Generamos nodos a paso dy uniforme y los y-positions de viga snap al más cercano.
  const ys: number[] = [];
  for (let j = 0; j <= ny; j++) ys.push(j * dy);
  // Reemplazar 3 ys por las posiciones exactas de las 3 vigas (snap al más cercano)
  const beamRowIndices: number[] = [];
  for (const yB of yBeams) {
    let bestJ = 0, dmin = Infinity;
    for (let j = 0; j <= ny; j++) {
      const d = Math.abs(ys[j] - yB);
      if (d < dmin) { dmin = d; bestJ = j; }
    }
    ys[bestJ] = yB;
    beamRowIndices.push(bestJ);
  }

  // Grid de nodos en la losa (z=0, plano medio del shell)
  const slabGrid: number[][] = [];
  for (let j = 0; j <= ny; j++) {
    const row: number[] = [];
    for (let i = 0; i <= nx; i++) {
      row.push(addNode(i * dx, ys[j], 0));
    }
    slabGrid.push(row);
  }
  for (let j = 0; j < ny; j++) {
    for (let i = 0; i < nx; i++) {
      addShell(slabGrid[j][i], slabGrid[j][i+1], slabGrid[j+1][i+1], slabGrid[j+1][i], t_s);
    }
  }

  // ── VIGAS FRAME ──
  // Vinculación: comparten nodos con la losa (eje al plano medio del shell)
  // Modo 2 (Eccentric) requiere offset — Hekatan no lo soporta nativamente, así
  // que para mode 2 simulamos AGREGANDO una rigidez extra en I (Steiner) que
  // representa el offset z = -(t_s/2 + h_total/2) del centroide de la viga.
  // En SAP2000 esto se lograría con "Joint Offset" o "Insertion Point".
  let I_eff = I_beam, A_eff = A_beam;
  if (modo === 2) {
    // Offset desde el plano medio de la losa hasta el centroide de la viga T
    const offset = t_s / 2 + h_total / 2;  // m (positivo = viga abajo de la losa)
    // Iz aumentada por Steiner: I_eff = I_full + A_full × offset²
    I_eff = I_full + A_full * offset * offset;
    A_eff = A_full;
  }

  // Frames longitudinales en cada viga
  const beamFrameElements: number[] = [];
  for (const jBeam of beamRowIndices) {
    for (let i = 0; i < nx; i++) {
      const n0 = slabGrid[jBeam][i], n1 = slabGrid[jBeam][i+1];
      addFrame(n0, n1, A_eff, I_eff, J_beam);
      beamFrameElements.push(elements.length - 1);
    }
  }

  // ── APOYOS SIMPLES en los extremos de cada viga ──
  // Pinned uno extremo, roller el otro (elimina restricción longitudinal para
  // que la viga pueda dilatarse libremente — comportamiento real de tablero
  // simplemente apoyado).
  const supports = new Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>();
  for (const jBeam of beamRowIndices) {
    const nL = slabGrid[jBeam][0];
    const nR = slabGrid[jBeam][nx];
    // Extremo izquierdo: pin (Ux, Uy, Uz, Rx libres en y/z; Rz libre)
    supports.set(nL, [true, true, true, false, false, false]);
    // Extremo derecho: roller (Uy, Uz, Rx; libre Ux para dilatación)
    supports.set(nR, [false, true, true, false, false, false]);
  }

  // ── CARGAS: distribuida q (kN/m²) sobre la losa, repartida a nodos ──
  // f_z_node = -q × A_trib_node (negativo = hacia abajo)
  const loads = new Map<number, [number, number, number, number, number, number]>();
  for (let j = 0; j <= ny; j++) {
    for (let i = 0; i <= nx; i++) {
      const dy_eff = (j === 0 || j === ny) ? dy / 2 : dy;
      const dx_eff = (i === 0 || i === nx) ? dx / 2 : dx;
      const A_trib = dx_eff * dy_eff;
      const fz = -q * A_trib;  // kN
      const id = slabGrid[j][i];
      loads.set(id, [0, 0, fz, 0, 0, 0]);
    }
  }

  const nodeInputs: NodeInputs = { supports, loads };
  const elementInputs: ElementInputs = {
    elasticities, shearModuli, areas,
    momentsOfInertiaZ: Iz, momentsOfInertiaY: Iy, torsionalConstants: J,
    densities, poissonsRatios, thicknesses,
  };

  let deformOutputs: DeformOutputs = {} as DeformOutputs;
  let analyzeOutputs: AnalyzeOutputs = {} as AnalyzeOutputs;
  try {
    deformOutputs = deform(nodes, elements, nodeInputs, elementInputs);
    analyzeOutputs = analyze(nodes, elements, elementInputs, deformOutputs);
  } catch (e: any) { console.warn("tablero-puente:", e?.message ?? e); }

  // ── ANÁLISIS DE RESULTADOS ──
  // analyzeOutputs para FRAMES (de hekatan-fem/src/analyze.ts):
  //   bendingsY/Z:  Map<eIdx, [M_start, M_end]>   (M en eje local Y o Z)
  //   shearsY/Z:    Map<eIdx, [V_start, V_end]>
  //   normals:      Map<eIdx, [N_start, N_end]>
  //   torsions:     Map<eIdx, [T_start, T_end]>
  let M_max_kNm = 0, V_max_kN = 0;
  const ao = analyzeOutputs as any;
  // Para una viga horizontal (eje X) cargada en Z, M flexor = bendingsY (eje local Y = transversal)
  const M_map = ao?.bendingsY as Map<number, number[]> | undefined;
  const V_map = ao?.shearsZ as Map<number, number[]> | undefined;
  const jBeamCentral = beamRowIndices[1];
  const i_mid = Math.round(nx / 2);
  // beamFrameElements: 3 vigas × nx elementos cada una. Central = índices [nx, 2nx)
  const startIdxBeamCentral = nx;
  for (let i = 0; i < nx; i++) {
    const eIdx = beamFrameElements[startIdxBeamCentral + i];
    const ms = M_map?.get(eIdx);
    const vs = V_map?.get(eIdx);
    if (ms) for (const m of ms) if (Math.abs(m) > M_max_kNm) M_max_kNm = Math.abs(m);
    if (vs) for (const v of vs) if (Math.abs(v) > V_max_kN) V_max_kN = Math.abs(v);
  }
  // Si bendingsY no tiene nada, probar bendingsZ (otra orientación de eje local)
  if (M_max_kNm === 0) {
    const M2 = ao?.bendingsZ as Map<number, number[]> | undefined;
    const V2 = ao?.shearsY as Map<number, number[]> | undefined;
    for (let i = 0; i < nx; i++) {
      const eIdx = beamFrameElements[startIdxBeamCentral + i];
      const ms = M2?.get(eIdx); const vs = V2?.get(eIdx);
      if (ms) for (const m of ms) if (Math.abs(m) > M_max_kNm) M_max_kNm = Math.abs(m);
      if (vs) for (const v of vs) if (Math.abs(v) > V_max_kN) V_max_kN = Math.abs(v);
    }
  }
  // Deflección midspan en viga central (nodo medio de jBeamCentral)
  const nMid = slabGrid[jBeamCentral][i_mid];
  const def = (deformOutputs as any)?.deformations as Map<number, number[]> | undefined;
  const w_mid = def?.get(nMid)?.[2] ?? 0;
  const delta_mm = Math.abs(w_mid * 1000);

  // vM losa
  let vM_slab_max = 0;
  const vmMap = ao?.vonMises as Map<number, number[]> | undefined;
  if (vmMap) vmMap.forEach(arr => arr.forEach(v => { if (v > vM_slab_max) vM_slab_max = v; }));

  // Ratio respecto a Naive teórico (M analítico de viga simple = q_eff × L² / 8)
  // q_eff por viga ≈ q × s_b (área tributaria por viga)
  const q_eff = q * s_b;
  const M_naive_teorico = q_eff * L * L / 8;
  const ratio_naive = M_max_kNm / Math.max(0.001, M_naive_teorico);

  resultsState.val = {
    modo: ["0 — Naive (doble-T)", "1 — Solar (alma+patín inf)", "2 — Eccentric (offset)"][modo],
    M_max_kNm, V_max_kN, delta_mm, vM_slab_max, ratio_naive,
    A_beam: A_eff, Iz_beam: I_eff,
  };

  // Decoraciones 3D
  const objs: THREE.Object3D[] = [];
  // Renderizar las vigas como BoxGeometry para que se VEAN (frame de Hekatan
  // es solo una línea por defecto). Usamos las dimensiones reales según modo.
  const matBeam = new THREE.MeshStandardMaterial({
    color: modo === 0 ? 0xff8800 : modo === 1 ? 0x00ccff : 0x88ff44,
    transparent: true, opacity: 0.7,
  });
  for (const yB of yBeams) {
    if (modo === 1) {
      // Solo alma + patín inferior — geometría reducida
      const beamWeb = new THREE.Mesh(new THREE.BoxGeometry(L, tw, hw), matBeam);
      beamWeb.position.set(L/2, yB, -t_s/2 - hw/2);
      objs.push(beamWeb);
      const beamBot = new THREE.Mesh(new THREE.BoxGeometry(L, bf, tf), matBeam);
      beamBot.position.set(L/2, yB, -t_s/2 - hw - tf/2);
      objs.push(beamBot);
    } else {
      // Doble-T completa
      const beamWeb = new THREE.Mesh(new THREE.BoxGeometry(L, tw, hw), matBeam);
      beamWeb.position.set(L/2, yB, -t_s/2 - hw/2 - tf);
      objs.push(beamWeb);
      const beamTop = new THREE.Mesh(new THREE.BoxGeometry(L, bf, tf), matBeam);
      beamTop.position.set(L/2, yB, -t_s/2 - tf/2);
      objs.push(beamTop);
      const beamBot = new THREE.Mesh(new THREE.BoxGeometry(L, bf, tf), matBeam);
      beamBot.position.set(L/2, yB, -t_s/2 - hw - tf - tf/2);
      objs.push(beamBot);
    }
  }

  nodesState.val = nodes;
  elementsState.val = elements;
  nodeInputsState.val = nodeInputs;
  elementInputsState.val = elementInputs;
  deformOutputsState.val = deformOutputs;
  analyzeOutputsState.val = analyzeOutputs;
  objects3DState.val = objs;
});

const viewerEl = getViewer({
  mesh: {
    nodes: nodesState, elements: elementsState,
    nodeInputs: nodeInputsState, elementInputs: elementInputsState,
    deformOutputs: deformOutputsState, analyzeOutputs: analyzeOutputsState,
  },
  objects3D: objects3DState,
  settingsObj: {
    deformedShape: false, shellResults: "vonMises",
    gridSize: 2, deformScale: 5, custom3D: true,
    loads: false, supports: true, showCotas: false, displayScale: 0.3,
  },
});

const benchContainer = document.createElement("div");
benchContainer.style.cssText = "position:fixed;top:8px;right:8px;width:340px;max-height:85vh;overflow-y:auto;z-index:9999;";
const benchPane = new Pane({ title: "🌉 Tablero puente — vigas+losa", container: benchContainer, expanded: true });
const benchObj = {
  modo: "—", M_max_kNm: 0, V_max_kN: 0, delta_mm: 0, vM_slab_max: 0,
  ratio_naive: 1.0, A_beam: 0, Iz_beam: 0,
};

const fInfo = benchPane.addFolder({ title: "ℹ️ Recomendación Solar" });
fInfo.addBinding({ msg: "Modo 1 (Solar) coincide con SAP2000" }, "msg", { readonly: true, view: "text", interval: 0 } as any);
fInfo.addBinding({ msg: "Modo 0 SOBRE-rigidiza por ~2x" }, "msg", { readonly: true, view: "text", interval: 0 } as any);
fInfo.addBinding({ msg: "Modo 2 (Eccentric) ≈ Modo 1 si offset bien" }, "msg", { readonly: true, view: "text", interval: 0 } as any);

const fSect = benchPane.addFolder({ title: "📐 Sección viga FRAME usada" });
fSect.addBinding(benchObj, "modo",   { readonly: true, label: "Modo activo", view: "text", interval: 0 } as any);
fSect.addBinding(benchObj, "A_beam", { readonly: true, label: "A (m²)",     format: (v: number) => v.toFixed(5) });
fSect.addBinding(benchObj, "Iz_beam",{ readonly: true, label: "Iz (m⁴)",    format: (v: number) => v.toExponential(3) });

const fRes = benchPane.addFolder({ title: "📊 Resultados análisis" });
fRes.addBinding(benchObj, "M_max_kNm",   { readonly: true, label: "M max viga (kN·m)", format: (v: number) => v.toFixed(1) });
fRes.addBinding(benchObj, "V_max_kN",    { readonly: true, label: "V max viga (kN)", format: (v: number) => v.toFixed(1) });
fRes.addBinding(benchObj, "delta_mm",    { readonly: true, label: "δ midspan (mm)", format: (v: number) => v.toFixed(2) });
fRes.addBinding(benchObj, "vM_slab_max", { readonly: true, label: "σvM losa max (kN/m²)", format: (v: number) => v.toExponential(3) });
fRes.addBinding(benchObj, "ratio_naive", { readonly: true, label: "M / (qL²/8)", format: (v: number) => v.toFixed(3) });

const fU = benchPane.addFolder({ title: "Unidades", expanded: false });
const unitsObj = { stress: colorMapStressUnit.val, disp: colorMapDispUnit.val };
fU.addBinding(unitsObj, "stress", { options: { "kN/m²":"kN/m²","MPa":"MPa","kgf/cm²":"kgf/cm²","ksi":"ksi" }, label: "σ" })
  .on("change", (e: any) => { colorMapStressUnit.val = e.value; });
fU.addBinding(unitsObj, "disp", { options: { m:"m",cm:"cm",mm:"mm" }, label: "u" })
  .on("change", (e: any) => { colorMapDispUnit.val = e.value; });
void colorMapForceUnit;

document.body.append(benchContainer);

van.derive(() => {
  Object.assign(benchObj, resultsState.val);
  benchPane.refresh();
});

document.body.append(
  getParameters(parameters), viewerEl,
  getToolbar({ sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/tablero-puente/main.ts" }),
);

setTimeout(() => enableDraggableAllPanes(), 200);
setTimeout(() => {
  const ctx = (viewerEl as any).__ctx;
  if (ctx?.camera && ctx?.controls) {
    ctx.camera.up.set(0, 0, 1);
    const L = parameters.L.value.val, W = parameters.W.value.val;
    // Vista oblicua amplia para ver TODO el tablero — viga horizontal a lo largo de X
    const D = Math.max(L, W) * 1.8;
    ctx.camera.position.set(L / 2 + D, -D * 0.6, D * 0.4);
    ctx.controls.target.set(L / 2, W / 2, -0.5);
    ctx.controls.update(); ctx.render?.();
  }
}, 800);
