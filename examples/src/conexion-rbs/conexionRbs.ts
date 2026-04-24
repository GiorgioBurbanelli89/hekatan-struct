/**
 * Conexión RBS — Reduced Beam Section precalificación según AISC 358-22.
 *
 * Simula una conexión SMF con rótula plástica concentrada en el RBS
 * (reducido de patín, "dogbone") bajo protocolo cíclico AISC 341-22 App. K3.
 *
 * El modelado es macro-level:
 *   - Viga en cantilever (stub simple para el ensayo T-subassembly simplificado)
 *   - Sección del RBS caracterizada por un material Menegotto-Pinto uniaxial
 *   - Protocolo K3 displacement-controlled aplicado al tip de la viga
 *   - M-θ obtenido vía state history del material cíclico
 *
 * Esto NO es un modelo 3D ABAQUS. Es el equivalente macro que usa la mayoría
 * de los papers de investigación (Engelhardt 1998, Chen 2000, etc.) para
 * calibrar diseños antes del ensayo físico.
 *
 * Validación AISC 341-22:
 *   SMF (Special Moment Frame): al 0.04 rad drift, M ≥ 0.80·Mp
 *   IMF (Intermediate Moment Frame): al 0.02 rad drift, M ≥ 0.80·Mp
 *
 * Referencias:
 *   - AISC 358-22 Ch. 5 (RBS Moment Connection)
 *   - AISC 341-22 App. K3 (Loading History)
 *   - Engelhardt, Winneberger, Zekany, Potyraj, "Experimental investigation
 *     of RBS connections", Rep. SAC/BD-98/01, 1998
 *   - FEMA 350 §3.3.2 (RBS design procedure)
 *   - Chen, Yeh, Chu, "Ductile steel beam-to-column connections", AISC
 *     Eng. J. 37(2) 2000
 */
import {
  initMpState, mpStep, mpHistory,
  aiscK3StrainHistory,
  type MenegottoPintoParams,
} from "awatif-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";
import type { Node, Element } from "awatif-fem";

export const conexionRbs: ExampleDef = {
  id: "conexion-rbs",
  name: "Conexión RBS (AISC 358-22 · Protocolo K3)",
  category: "Conexiones",
  hasModal: false,
  params: {
    // ── Geometría viga + columna ──
    d_beam:   { default: 0.60, min: 0.30, max: 1.00, step: 0.05, label: "d viga (m)", folder: "Viga" },
    bf_beam:  { default: 0.20, min: 0.10, max: 0.40, step: 0.01, label: "bf patín (m)", folder: "Viga" },
    tf_beam:  { default: 0.02, min: 0.01, max: 0.04, step: 0.002, label: "tf patín (m)", folder: "Viga" },
    L_beam:   { default: 3.50, min: 2.0, max: 6.0, step: 0.1, label: "L viga (m)", folder: "Viga" },
    // ── RBS geometría (AISC 358-22 §5.8) ──
    a_rbs:    { default: 0.625, min: 0.50, max: 0.75, step: 0.025, label: "a/bf", folder: "RBS" },
    b_rbs:    { default: 0.75,  min: 0.65, max: 0.85, step: 0.025, label: "b/d", folder: "RBS" },
    c_rbs:    { default: 0.25,  min: 0.20, max: 0.25, step: 0.025, label: "c/bf (reducción)", folder: "RBS" },
    // ── Material ──
    Fy:       { default: 345_000, min: 250_000, max: 450_000, step: 5_000, label: "Fy (kN/m²)", folder: "Material" },
    E_steel:  { default: 200_000_000, min: 190e6, max: 210e6, step: 1e6, label: "E (kN/m²)", folder: "Material" },
    b_hard:   { default: 0.01,  min: 0.005, max: 0.05, step: 0.005, label: "b strain hardening", folder: "Material" },
    // ── Protocolo de carga ──
    classification: { default: 1, label: "Clasificación sismo", options: { "IMF (0.02 rad)": 0, "SMF (0.04 rad)": 1, "Extendido (0.06 rad)": 2 }, folder: "Ensayo K3" },
    story_h:  { default: 3.66, min: 2.5, max: 5.0, step: 0.1, label: "h piso (m)", folder: "Ensayo K3" },
    steps_per_cycle: { default: 40, min: 20, max: 100, step: 10, label: "Steps/ciclo", folder: "Ensayo K3" },
  },
  build(p, states) {
    // ── 1. Geometría visual: viga cantilever ──────────────
    const nNodes = 8;
    const nodes: Node[] = [];
    for (let i = 0; i <= nNodes; i++) nodes.push([i * (p.L_beam / nNodes), 0, 0]);

    const elements: Element[] = [];
    for (let i = 0; i < nNodes; i++) elements.push([i, i + 1]);

    // Primera rotula visual en el nodo ~1 (ubicación RBS desde la cara de columna)
    const xRBS = p.a_rbs * p.bf_beam + p.b_rbs * p.d_beam / 2;

    const supports = new Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>();
    supports.set(0, [true, true, true, true, true, true]);   // empotrado en columna
    const loads = new Map<number, [number, number, number, number, number, number]>();
    states.nodes.val = nodes;
    states.elements.val = elements;
    states.nodeInputs.val = { supports, loads };

    // Sección de la viga (para elementInputs)
    const A_beam = p.d_beam * p.bf_beam;     // sección gruesa aproximada
    const Iz_beam = p.bf_beam * Math.pow(p.d_beam, 3) / 12;
    const Iy_beam = p.d_beam * Math.pow(p.bf_beam, 3) / 12;
    const J_beam = Iz_beam + Iy_beam;
    const G_steel = p.E_steel / (2.6);
    const rho_steel = 77;

    const elementInputs: any = {
      areas: new Map(), momentsOfInertiaY: new Map(), momentsOfInertiaZ: new Map(),
      torsionalConstants: new Map(), elasticities: new Map(), shearModuli: new Map(),
      densities: new Map(), thicknesses: new Map(), poissonsRatios: new Map(),
    };
    for (let i = 0; i < elements.length; i++) {
      elementInputs.areas.set(i, A_beam);
      elementInputs.momentsOfInertiaY.set(i, Iy_beam);
      elementInputs.momentsOfInertiaZ.set(i, Iz_beam);
      elementInputs.torsionalConstants.set(i, J_beam);
      elementInputs.elasticities.set(i, p.E_steel);
      elementInputs.shearModuli.set(i, G_steel);
      elementInputs.densities.set(i, rho_steel);
      elementInputs.thicknesses.set(i, p.tf_beam);
      elementInputs.poissonsRatios.set(i, 0.3);
    }
    states.elementInputs.val = elementInputs;
    states.deformOutputs.val = {};
    states.analyzeOutputs.val = {};
    states.objects3D.val = [];

    // ── 2. Protocolo K3 + material cíclico ──────────────
    // Generar historia de strain equivalente en la rótula plástica:
    // Asumimos que la rotación θ del hinge = drift del piso.
    // Strain en el patín superior del RBS = θ · d/2 / L_hinge (longitud de hinge ≈ b_rbs*d)
    const finalDrift = p.classification < 0.5 ? 0.02 : (p.classification < 1.5 ? 0.04 : 0.06);
    const driftHistory = aiscK3StrainHistory(p.story_h, Math.round(p.steps_per_cycle), finalDrift);
    // Convertir drift θ → strain en fibra extrema del RBS
    // ε = θ · (d/2) / L_p   con L_p ≈ b_rbs · d (longitud del RBS)
    const L_p = p.b_rbs * p.d_beam;
    const eps_factor = (p.d_beam / 2) / L_p;

    const mp_params: MenegottoPintoParams = {
      Fy: p.Fy, E: p.E_steel, b: p.b_hard, R0: 15, cR1: 0.925, cR2: 0.15,
    };

    // bf reducido: bf - 2*c*bf = bf·(1 - 2c)  — sección efectiva del RBS
    const bf_rbs = p.bf_beam * (1 - 2 * p.c_rbs);
    const Zx_rbs = bf_rbs * p.tf_beam * (p.d_beam - p.tf_beam) + (p.d_beam - 2*p.tf_beam) * (p.tf_beam * 2) * (p.d_beam - 2*p.tf_beam) / 4;
    // Simplificación para plastic modulus (W-shape aprox)
    const Zx_rbs_simple = bf_rbs * p.tf_beam * (p.d_beam - p.tf_beam);
    const Mp_rbs = p.Fy * Zx_rbs_simple;

    // Calcular M-θ para cada step con Menegotto-Pinto
    const thetaHistory: number[] = [];
    const MHistory: number[] = [];
    let state = initMpState(mp_params);
    for (const theta of driftHistory) {
      const eps = theta * eps_factor;
      state = mpStep(eps, state, mp_params);
      thetaHistory.push(theta);
      // M = σ · Zx (aproximación asumiendo distribución plástica uniforme)
      const M = state.sigma * Zx_rbs_simple;
      MHistory.push(M);
    }

    // ── 3. Guardar historia para render del plot ──────────
    (states as any).__rbsHistory = {
      theta: thetaHistory, M: MHistory, Mp: Mp_rbs,
      targetDrift: finalDrift,
      classification: p.classification < 0.5 ? "IMF" : (p.classification < 1.5 ? "SMF" : "Extended"),
    };

    // ── 4. Log verificación ──────────────────────────────
    const M_target = 0.80 * Mp_rbs;
    let M_at_target = 0;
    const targetTheta = p.classification < 0.5 ? 0.02 : (p.classification < 1.5 ? 0.04 : 0.06);
    for (let i = 0; i < thetaHistory.length; i++) {
      if (Math.abs(thetaHistory[i] - targetTheta) < 0.005) {
        if (Math.abs(MHistory[i]) > Math.abs(M_at_target)) M_at_target = MHistory[i];
      }
    }
    const ratio = Math.abs(M_at_target) / Mp_rbs;
    const passes = ratio >= 0.80;

    console.log(
      `[Conexión RBS AISC 358-22] d=${p.d_beam}m, bf=${p.bf_beam}m (reducido ${bf_rbs.toFixed(3)}m), Fy=${(p.Fy/1000).toFixed(0)}MPa\n` +
      `  Mp_rbs = ${(Mp_rbs).toFixed(1)} kN·m · Target drift = ${(targetTheta*100).toFixed(1)}% · M@target = ${M_at_target.toFixed(1)} kN·m\n` +
      `  Ratio M/Mp = ${ratio.toFixed(3)} (≥ 0.80 para ${p.classification < 0.5 ? "IMF" : "SMF"}) → ${passes ? "✓ PASA AISC 341 App. K" : "✗ FALLA"}`,
    );
  },
  computedLabels(p, states) {
    const hist = (states as any).__rbsHistory as any;
    if (!hist) return { "Status": "—" };

    // Calcular M_max en cada drift level
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
      "── Conexión RBS (AISC 358-22 §5) ──": "",
      "Clasificación ensayo": hist.classification,
      "Target drift θ": `${(targetTheta * 100).toFixed(1)} %`,
      "bf patín original": `${(p.bf_beam * 1000).toFixed(0)} mm`,
      "bf patín reducido RBS": `${(bf_rbs * 1000).toFixed(0)} mm (-${(p.c_rbs*100*2).toFixed(0)}%)`,
      "L hinge (b·d)": `${(p.b_rbs * p.d_beam * 1000).toFixed(0)} mm`,
      "Zx_rbs (plastic modulus)": `${(Zx_rbs * 1e6).toFixed(0)} cm³`,
      "Mp_rbs (capacidad)": `${Mp.toFixed(1)} kN·m`,
      "── Protocolo AISC 341 K3 ──": "",
      "M_max en historia": `${Math.abs(M_max).toFixed(1)} kN·m`,
      "M @ target drift": `${Math.abs(M_at_target).toFixed(1)} kN·m`,
      "Ratio M/Mp @ target": `${ratio.toFixed(3)}`,
      "Criterio (≥ 0.80)": `${ratio >= 0.80 ? "✓ PASA" : "✗ FALLA"} — ${hist.classification}`,
      "Data points generados": `${hist.theta.length}`,
    };
  },
};

// Suppress unused imports warning
void mpHistory;
