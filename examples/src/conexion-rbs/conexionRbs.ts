/**
 * Conexión RBS — Reduced Beam Section precalificación según AISC 358-22.
 *
 * Geometría 3D REAL de la conexión usando shells:
 *   - Columna W-shape vertical (2 patines + alma)
 *   - Viga W-shape horizontal (2 patines + alma)
 *   - Corte dogbone circular VISIBLE en los patines de la viga (zona RBS)
 *   - Esfera roja = rótula plástica en el centro del RBS (ASCE 41-17 LS/CP)
 *   - Torus naranja = indicador de zona de rotación plástica
 *
 * Análisis:
 *   - Protocolo cíclico AISC 341-22 App. K3 desplazamiento-controlado
 *   - Material Menegotto-Pinto (1973) uniaxial en la fibra extrema RBS
 *   - M-θ histerético registrado en __rbsHistory para plot futuro
 *
 * Referencias:
 *   - AISC 358-22 Ch. 5 (RBS Moment Connection — prequalified)
 *   - AISC 341-22 App. K3 (Loading History — 30 ciclos, 0.00375→0.06 rad)
 *   - FEMA 350 §3.3.2 (RBS design procedure)
 *   - Engelhardt et al. 1998 Rep. SAC/BD-98/01
 */
import {
  initMpState, mpStep, mpHistory,
  aiscK3StrainHistory,
  deform, analyze,
  type MenegottoPintoParams,
} from "awatif-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";
import type { Node, Element } from "awatif-fem";
import * as THREE from "three";

export const conexionRbs: ExampleDef = {
  id: "conexion-rbs",
  name: "Conexión RBS (AISC 358-22 · Protocolo K3)",
  category: "Conexiones",
  hasModal: false,
  defaultShellResult: "vonMises",
  availableShellResults: ["vonMises", "membraneXX", "membraneYY", "membraneXY", "bendingXX", "bendingYY", "displacementZ"],
  params: {
    // ── Viga W-shape ──
    d_beam:  { default: 0.60, min: 0.30, max: 1.00, step: 0.02, label: "d viga (m)", folder: "Viga" },
    bf_beam: { default: 0.22, min: 0.12, max: 0.40, step: 0.01, label: "bf patín viga (m)", folder: "Viga" },
    tf_beam: { default: 0.020, min: 0.010, max: 0.040, step: 0.002, label: "tf patín viga (m)", folder: "Viga" },
    tw_beam: { default: 0.012, min: 0.006, max: 0.025, step: 0.001, label: "tw alma viga (m)", folder: "Viga" },
    L_beam:  { default: 3.50, min: 2.0, max: 6.0, step: 0.10, label: "L viga (m)", folder: "Viga" },
    // ── Columna W-shape ──
    d_col:   { default: 0.42, min: 0.30, max: 0.70, step: 0.02, label: "d columna (m)", folder: "Columna" },
    bf_col:  { default: 0.40, min: 0.25, max: 0.60, step: 0.01, label: "bf patín col (m)", folder: "Columna" },
    tf_col:  { default: 0.025, min: 0.012, max: 0.050, step: 0.002, label: "tf patín col (m)", folder: "Columna" },
    tw_col:  { default: 0.018, min: 0.010, max: 0.035, step: 0.001, label: "tw alma col (m)", folder: "Columna" },
    // ── RBS geometría (AISC 358-22 §5.8) ──
    a_rbs:   { default: 0.625, min: 0.50, max: 0.75, step: 0.025, label: "a/bf", folder: "RBS" },
    b_rbs:   { default: 0.75,  min: 0.65, max: 0.85, step: 0.025, label: "b/d", folder: "RBS" },
    c_rbs:   { default: 0.25,  min: 0.20, max: 0.25, step: 0.025, label: "c/bf (reducción)", folder: "RBS" },
    // ── Material ──
    Fy:      { default: 345_000, min: 250_000, max: 450_000, step: 5_000, label: "Fy (kN/m²)", folder: "Material" },
    E_steel: { default: 200_000_000, min: 190e6, max: 210e6, step: 1e6, label: "E (kN/m²)", folder: "Material" },
    b_hard:  { default: 0.01, min: 0.005, max: 0.05, step: 0.005, label: "b strain hardening", folder: "Material" },
    // ── Protocolo de carga ──
    classification: { default: 1, label: "Clasificación sismo", options: { "IMF (0.02 rad)": 0, "SMF (0.04 rad)": 1, "Extendido (0.06 rad)": 2 }, folder: "Ensayo K3" },
    story_h: { default: 3.66, min: 2.5, max: 5.0, step: 0.1, label: "h piso (m)", folder: "Ensayo K3" },
    steps_per_cycle: { default: 40, min: 20, max: 100, step: 10, label: "Steps/ciclo", folder: "Ensayo K3" },
    // ── Malla (para ver concentración de tensiones / fracturas) ──
    mesh_density: { default: 3, min: 1, max: 5, step: 1, label: "Densidad malla", folder: "Malla" },
  },
  build(p, states) {
    // ── 1. Geometría 3D REAL con shells ──────────────────
    const nodes: Node[] = [];
    const elements: Element[] = [];
    const thicknesses = new Map<number, number>();
    const elasticities = new Map<number, number>();
    const poissonsRatios = new Map<number, number>();
    const densities = new Map<number, number>();
    const areas = new Map<number, number>();
    const momentsOfInertiaY = new Map<number, number>();
    const momentsOfInertiaZ = new Map<number, number>();
    const torsionalConstants = new Map<number, number>();
    const shearModuli = new Map<number, number>();

    const G_steel = p.E_steel / 2.6;
    const rho_steel = 77;

    const addNode = (x: number, y: number, z: number): number => {
      nodes.push([x, y, z]);
      return nodes.length - 1;
    };
    const addShell = (n0: number, n1: number, n2: number, n3: number, t: number) => {
      elements.push([n0, n1, n2, n3]);
      const idx = elements.length - 1;
      thicknesses.set(idx, t);
      elasticities.set(idx, p.E_steel);
      poissonsRatios.set(idx, 0.3);
      densities.set(idx, rho_steel);
      areas.set(idx, 0);
      momentsOfInertiaY.set(idx, 0);
      momentsOfInertiaZ.set(idx, 0);
      torsionalConstants.set(idx, 0);
      shearModuli.set(idx, G_steel);
    };

    // ── Columna W-shape (eje longitudinal Z) ──
    // Patines en planos x = ±d_col/2, alma en y = 0
    const L_col = p.story_h;
    const md = Math.max(1, Math.round(p.mesh_density));
    const nz_col = 6 * md;
    const ny_col_flange = 2 * md;
    const nxc_web = md + 1;

    // Patín frontal (+x)
    const colFrontGrid: number[][] = [];
    for (let iz = 0; iz <= nz_col; iz++) {
      const z = -L_col / 2 + (iz * L_col) / nz_col;
      const row: number[] = [];
      for (let iy = 0; iy <= ny_col_flange; iy++) {
        const y = -p.bf_col / 2 + (iy * p.bf_col) / ny_col_flange;
        row.push(addNode(+p.d_col / 2, y, z));
      }
      colFrontGrid.push(row);
    }
    for (let iz = 0; iz < nz_col; iz++) {
      for (let iy = 0; iy < ny_col_flange; iy++) {
        addShell(
          colFrontGrid[iz][iy], colFrontGrid[iz][iy + 1],
          colFrontGrid[iz + 1][iy + 1], colFrontGrid[iz + 1][iy],
          p.tf_col,
        );
      }
    }

    // Patín trasero (-x)
    const colBackGrid: number[][] = [];
    for (let iz = 0; iz <= nz_col; iz++) {
      const z = -L_col / 2 + (iz * L_col) / nz_col;
      const row: number[] = [];
      for (let iy = 0; iy <= ny_col_flange; iy++) {
        const y = -p.bf_col / 2 + (iy * p.bf_col) / ny_col_flange;
        row.push(addNode(-p.d_col / 2, y, z));
      }
      colBackGrid.push(row);
    }
    for (let iz = 0; iz < nz_col; iz++) {
      for (let iy = 0; iy < ny_col_flange; iy++) {
        addShell(
          colBackGrid[iz][iy], colBackGrid[iz][iy + 1],
          colBackGrid[iz + 1][iy + 1], colBackGrid[iz + 1][iy],
          p.tf_col,
        );
      }
    }

    // Alma columna (plano XZ, y=0)
    const colWebGrid: number[][] = [];
    for (let iz = 0; iz <= nz_col; iz++) {
      const z = -L_col / 2 + (iz * L_col) / nz_col;
      const row: number[] = [];
      for (let ix = 0; ix <= nxc_web; ix++) {
        const x = -p.d_col / 2 + p.tf_col + (p.d_col - 2 * p.tf_col) * (ix / nxc_web);
        row.push(addNode(x, 0, z));
      }
      colWebGrid.push(row);
    }
    for (let iz = 0; iz < nz_col; iz++) {
      for (let ix = 0; ix < nxc_web; ix++) {
        addShell(
          colWebGrid[iz][ix], colWebGrid[iz][ix + 1],
          colWebGrid[iz + 1][ix + 1], colWebGrid[iz + 1][ix],
          p.tw_col,
        );
      }
    }

    // ── Viga W-shape con RBS (eje longitudinal X) ──
    const x0 = p.d_col / 2; // cara de la columna

    // Función bf(x_local) dogbone circular (AISC 358-22 Eq. 5.8-1)
    const x_a_loc = p.a_rbs * p.bf_beam;
    const x_b_loc = x_a_loc + p.b_rbs * p.d_beam;
    const x_rbs_center_local = (x_a_loc + x_b_loc) / 2;
    const c_cut = p.c_rbs * p.bf_beam;
    const b_dim = p.b_rbs * p.d_beam;
    const R_cut = (4 * c_cut * c_cut + b_dim * b_dim) / (8 * c_cut);

    const bfAt = (x_local: number): number => {
      if (x_local < x_a_loc || x_local > x_b_loc) return p.bf_beam;
      const dx = x_local - x_rbs_center_local;
      // Dogbone circular AISC 358-22 Fig. 5.1:
      //   reducción máxima (=c) en el CENTRO del RBS (dx=0)
      //   reducción CERO en los extremos (dx = ±b/2)
      // Centro del arco a distancia (R - c) del plano del patín original.
      const reduction = Math.sqrt(Math.max(0, R_cut * R_cut - dx * dx)) - (R_cut - c_cut);
      return p.bf_beam - 2 * Math.max(0, reduction);
    };

    // Discretización X con densidad en zona RBS (escala con mesh_density)
    const xList: number[] = [0];
    const n_before = 2 * md;
    for (let i = 1; i <= n_before; i++) xList.push((x_a_loc * i) / n_before);
    const n_rbs = 8 * md + 4; // más denso en la zona del dogbone (donde se ven fracturas)
    for (let i = 1; i < n_rbs; i++) xList.push(x_a_loc + ((x_b_loc - x_a_loc) * i) / n_rbs);
    xList.push(x_b_loc);
    const n_after = 5 * md;
    for (let i = 1; i <= n_after; i++) xList.push(x_b_loc + ((p.L_beam - x_b_loc) * i) / n_after);

    xList.sort((a, b) => a - b);
    const xUnique: number[] = [];
    for (const x of xList) {
      if (xUnique.length === 0 || xUnique[xUnique.length - 1] < x - 1e-6) xUnique.push(x);
    }

    // Nodos viga (patines con divisiones en Y, alma con divisiones en Z)
    const topFlangeGrid: number[][] = [];
    const botFlangeGrid: number[][] = [];
    const webGrid: number[][] = [];
    const ny_beam_flange = 2 * md;
    const nz_beam_web = 2 * md;

    for (const x_local of xUnique) {
      const bf_local = bfAt(x_local);
      const x = x0 + x_local;

      const topRow: number[] = [];
      const botRow: number[] = [];
      for (let iy = 0; iy <= ny_beam_flange; iy++) {
        const y = -bf_local / 2 + (iy * bf_local) / ny_beam_flange;
        topRow.push(addNode(x, y, +p.d_beam / 2));
        botRow.push(addNode(x, y, -p.d_beam / 2));
      }
      topFlangeGrid.push(topRow);
      botFlangeGrid.push(botRow);

      const webRow: number[] = [];
      for (let iz = 0; iz <= nz_beam_web; iz++) {
        const z = -p.d_beam / 2 + p.tf_beam + (p.d_beam - 2 * p.tf_beam) * (iz / nz_beam_web);
        webRow.push(addNode(x, 0, z));
      }
      webGrid.push(webRow);
    }

    for (let i = 0; i < xUnique.length - 1; i++) {
      for (let iy = 0; iy < ny_beam_flange; iy++) {
        addShell(
          topFlangeGrid[i][iy], topFlangeGrid[i][iy + 1],
          topFlangeGrid[i + 1][iy + 1], topFlangeGrid[i + 1][iy],
          p.tf_beam,
        );
        addShell(
          botFlangeGrid[i][iy], botFlangeGrid[i][iy + 1],
          botFlangeGrid[i + 1][iy + 1], botFlangeGrid[i + 1][iy],
          p.tf_beam,
        );
      }
      for (let iz = 0; iz < nz_beam_web; iz++) {
        addShell(
          webGrid[i][iz], webGrid[i][iz + 1],
          webGrid[i + 1][iz + 1], webGrid[i + 1][iz],
          p.tw_beam,
        );
      }
    }

    // ── Supports: la viga se empotra EN LA CARA DE LA COLUMNA (x = x0, i.e. xUnique[0]=0)
    //     Esto simula la conexión RBS completa (columna solo visual).
    //     Además empotramos la base de la columna para que no flote. ──
    const supports = new Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>();
    // Empotrar nodos de la viga en la cara de columna (primer índice X de la viga)
    const iFix = 0;
    for (let iy = 0; iy <= ny_beam_flange; iy++) {
      supports.set(topFlangeGrid[iFix][iy], [true, true, true, true, true, true]);
      supports.set(botFlangeGrid[iFix][iy], [true, true, true, true, true, true]);
    }
    for (let iz = 0; iz <= nz_beam_web; iz++) {
      supports.set(webGrid[iFix][iz], [true, true, true, true, true, true]);
    }
    // Empotrar base y top de columna (soporte visual, no afecta la viga)
    for (let i = 0; i < nodes.length; i++) {
      const z = nodes[i][2];
      const isCol = Math.abs(nodes[i][0]) > p.d_col / 2 - 1e-4 - 1e-6 || Math.abs(nodes[i][1]) < 1e-6;
      if (Math.abs(Math.abs(z) - L_col / 2) < 1e-4 && isCol && nodes[i][0] <= p.d_col / 2 + 1e-4) {
        if (!supports.has(i)) supports.set(i, [true, true, true, true, true, true]);
      }
    }

    // ── Cargas: fuerza vertical suave en el extremo de la viga (20% Mp_rbs para quedar en rango elástico) ──
    const bf_rbs_min = p.bf_beam * (1 - 2 * p.c_rbs);
    const Zx_rbs_est = bf_rbs_min * p.tf_beam * (p.d_beam - p.tf_beam);
    const Mp_rbs_est = p.Fy * Zx_rbs_est;
    const lever_arm = p.L_beam - p.a_rbs * p.bf_beam - (p.b_rbs * p.d_beam) / 2;
    const F_tip = (0.45 * Mp_rbs_est) / Math.max(lever_arm, 0.5); // 45% Mp → rango elástico con concentración visible

    const loads = new Map<number, [number, number, number, number, number, number]>();
    const iTip = xUnique.length - 1; // último índice X (extremo libre)
    const F_per_node = F_tip / (ny_beam_flange + 1);
    for (let iy = 0; iy <= ny_beam_flange; iy++) {
      loads.set(topFlangeGrid[iTip][iy], [0, 0, -F_per_node, 0, 0, 0]);
    }

    states.nodes.val = nodes;
    states.elements.val = elements;
    states.nodeInputs.val = { supports, loads };
    states.elementInputs.val = {
      thicknesses, elasticities, poissonsRatios, densities,
      areas, momentsOfInertiaY, momentsOfInertiaZ, torsionalConstants, shearModuli,
    } as any;

    // ── Ejecutar solver (deform + analyze) para obtener colormap de von Mises ──
    console.log("[conexion-rbs] Running deform() with", nodes.length, "nodes,", elements.length, "shells,", supports.size, "supports,", loads.size, "loads");
    try {
      const dOut = deform(nodes, elements, { supports, loads }, states.elementInputs.val);
      console.log("[conexion-rbs] deform() OK → deformations keys:", dOut.deformations ? [...dOut.deformations.keys()].slice(0, 3) : "none");
      states.deformOutputs.val = dOut;
      const aOut = analyze(nodes, elements, states.elementInputs.val, dOut);
      // Normalizar colormap vonMises al rango [0, Fy] para visualizar plastificación
      (aOut as any).colorMapRanges = { ...(aOut as any).colorMapRanges, vonMises: [0, p.Fy] };
      console.log("[conexion-rbs] analyze() OK → vonMises keys:", aOut.vonMises ? [...aOut.vonMises.keys()].slice(0, 3) : "none");
      states.analyzeOutputs.val = aOut;
    } catch (e: any) {
      console.error("[conexion-rbs] solver error:", e?.message || e, e);
      states.deformOutputs.val = {} as any;
      states.analyzeOutputs.val = {} as any;
    }

    // ── Rótula plástica visual en el centro del RBS ──
    const objects: THREE.Object3D[] = [];
    const x_rbs_center = x0 + x_rbs_center_local;
    const r_hinge = Math.min(p.bf_beam, p.d_beam) * 0.28;

    // Esfera roja — zona de rótula plástica
    const hingeGeom = new THREE.SphereGeometry(r_hinge, 20, 16);
    const hingeMat = new THREE.MeshStandardMaterial({
      color: 0xff2200, emissive: 0x661100, metalness: 0.2, roughness: 0.5,
      transparent: true, opacity: 0.85,
    });
    const hingeSphere = new THREE.Mesh(hingeGeom, hingeMat);
    hingeSphere.position.set(x_rbs_center, 0, 0);
    objects.push(hingeSphere);

    // Anillo naranja horizontal (marca de rotación plástica)
    const ringGeom = new THREE.TorusGeometry(r_hinge * 1.25, 0.015, 12, 32);
    const ringMat = new THREE.MeshStandardMaterial({ color: 0xffaa00, emissive: 0x442200 });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.position.set(x_rbs_center, 0, 0);
    ring.rotation.y = Math.PI / 2;
    objects.push(ring);

    // Marcas guía de inicio y fin del RBS (líneas amarillas en los patines)
    const mkLine = (x_local: number) => {
      const bf_l = bfAt(x_local);
      const x = x0 + x_local;
      const pts = [
        new THREE.Vector3(x, -bf_l / 2, +p.d_beam / 2 + 0.005),
        new THREE.Vector3(x, +bf_l / 2, +p.d_beam / 2 + 0.005),
        new THREE.Vector3(x, +bf_l / 2, -p.d_beam / 2 - 0.005),
        new THREE.Vector3(x, -bf_l / 2, -p.d_beam / 2 - 0.005),
        new THREE.Vector3(x, -bf_l / 2, +p.d_beam / 2 + 0.005),
      ];
      const lg = new THREE.BufferGeometry().setFromPoints(pts);
      const lm = new THREE.LineBasicMaterial({ color: 0xffff00 });
      return new THREE.Line(lg, lm);
    };
    objects.push(mkLine(x_a_loc));
    objects.push(mkLine(x_b_loc));

    states.objects3D.val = objects;

    // ── 2. Protocolo K3 + material cíclico Menegotto-Pinto ──
    const finalDrift = p.classification < 0.5 ? 0.02 : p.classification < 1.5 ? 0.04 : 0.06;
    const driftHistory = aiscK3StrainHistory(p.story_h, Math.round(p.steps_per_cycle), finalDrift);
    const L_p = p.b_rbs * p.d_beam;
    const eps_factor = p.d_beam / 2 / L_p;

    const mp_params: MenegottoPintoParams = {
      Fy: p.Fy, E: p.E_steel, b: p.b_hard, R0: 15, cR1: 0.925, cR2: 0.15,
    };

    const bf_rbs = p.bf_beam * (1 - 2 * p.c_rbs);
    const Zx_rbs_simple = bf_rbs * p.tf_beam * (p.d_beam - p.tf_beam);
    const Mp_rbs = p.Fy * Zx_rbs_simple;

    const thetaHistory: number[] = [];
    const MHistory: number[] = [];
    let state = initMpState(mp_params);
    for (const theta of driftHistory) {
      const eps = theta * eps_factor;
      state = mpStep(eps, state, mp_params);
      thetaHistory.push(theta);
      MHistory.push(state.sigma * Zx_rbs_simple);
    }

    (states as any).__rbsHistory = {
      theta: thetaHistory, M: MHistory, Mp: Mp_rbs,
      targetDrift: finalDrift,
      classification: p.classification < 0.5 ? "IMF" : p.classification < 1.5 ? "SMF" : "Extended",
    };

    // Log verificación
    let M_at_target = 0;
    for (let i = 0; i < thetaHistory.length; i++) {
      if (Math.abs(thetaHistory[i] - finalDrift) < 0.005) {
        if (Math.abs(MHistory[i]) > Math.abs(M_at_target)) M_at_target = MHistory[i];
      }
    }
    const ratio = Math.abs(M_at_target) / Mp_rbs;
    console.log(
      `[RBS AISC 358-22] Shells=${elements.length}, Nodos=${nodes.length}\n` +
        `  bf_rbs=${bf_rbs.toFixed(3)}m, Mp_rbs=${Mp_rbs.toFixed(1)} kN·m\n` +
        `  M@${(finalDrift * 100).toFixed(1)}%=${M_at_target.toFixed(1)} kN·m · Ratio=${ratio.toFixed(3)} → ${ratio >= 0.8 ? "PASA" : "FALLA"}`,
    );
  },
  computedLabels(p, states) {
    const hist = (states as any).__rbsHistory as any;
    if (!hist) return { "Status": "—" };

    const bf_rbs = p.bf_beam * (1 - 2 * p.c_rbs);
    const Zx_rbs = bf_rbs * p.tf_beam * (p.d_beam - p.tf_beam);
    const Mp = hist.Mp;
    const targetTheta = hist.targetDrift;

    let M_max = 0;
    for (const M of hist.M as number[]) {
      if (Math.abs(M) > Math.abs(M_max)) M_max = M;
    }
    let M_at_target = 0;
    for (let i = 0; i < hist.theta.length; i++) {
      if (Math.abs(hist.theta[i] - targetTheta) < 0.005) {
        if (Math.abs(hist.M[i]) > Math.abs(M_at_target)) M_at_target = hist.M[i];
      }
    }
    const ratio = Math.abs(M_at_target) / Mp;

    return {
      "── Geometría RBS (AISC 358-22 §5) ──": "",
      "Clasificación ensayo": hist.classification,
      "Target drift θ": `${(targetTheta * 100).toFixed(1)} %`,
      "bf patín original": `${(p.bf_beam * 1000).toFixed(0)} mm`,
      "bf patín reducido RBS": `${(bf_rbs * 1000).toFixed(0)} mm (-${(p.c_rbs * 100 * 2).toFixed(0)}%)`,
      "a (inicio dogbone)": `${(p.a_rbs * p.bf_beam * 1000).toFixed(0)} mm desde cara col`,
      "b (long. dogbone)": `${(p.b_rbs * p.d_beam * 1000).toFixed(0)} mm`,
      "c (corte máx c/lado)": `${(p.c_rbs * p.bf_beam * 1000).toFixed(0)} mm`,
      "Zx_rbs": `${(Zx_rbs * 1e6).toFixed(0)} cm³`,
      "Mp_rbs": `${Mp.toFixed(1)} kN·m`,
      "── Protocolo AISC 341 K3 ──": "",
      "M_max en historia": `${Math.abs(M_max).toFixed(1)} kN·m`,
      "M @ target drift": `${Math.abs(M_at_target).toFixed(1)} kN·m`,
      "Ratio M/Mp @ target": `${ratio.toFixed(3)}`,
      "Criterio (≥ 0.80)": `${ratio >= 0.8 ? "✓ PASA" : "✗ FALLA"} — ${hist.classification}`,
      "Data points generados": `${hist.theta.length}`,
    };
  },
};

// Suppress unused
void mpHistory;
