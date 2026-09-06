/**
 * 🏁 Benchmark FRAME — Paz Ej. 11.1 (Plane Frame inclinado 45°)
 *
 *  Mario Paz & Young Hoon — "Structural Dynamics: Theory & Computation" 6ª ed.
 *  Cap. 11.3, Illustrative Example 11.1, p.299
 *
 *  Modelo: pórtico plano de 2 elementos prismáticos, 3 DOFs:
 *    - Elemento 1: barra inclinada a 45°
 *    - Elemento 2: barra horizontal
 *
 *  Datos del libro (matrices locales 6×6 estandarizadas):
 *    K_local: AE/L=600, 12EI/L³=12, 6EI/L²=600, 4EI/L=40,000, 2EI/L=20,000
 *    M_local: 156 (translación), 22L (acoplamiento), 4L² (rotación)
 *    → L=100 in, EI=1e6 lb·in², AE=60,000 lb
 *
 *  Resultados del libro (p.302):
 *    ω₁ = 25.26 rad/s  →  f₁ = 4.02 Hz
 *    ω₂ = 31.24 rad/s  →  f₂ = 4.97 Hz
 *    ω₃ = 64.90 rad/s  →  f₃ = 10.33 Hz
 */
import { modalAnalysisPaz } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";
import {
  buildSpaceFrameModel,
  generateSpaceFrameE2k,
  downloadTextFile,
  PAZ_UTILS,
} from "../shared/pazFrameE2k";
import type { Element, Node } from "hekatan-fem";

const PAZ_REF = {
  freqs_Hz: [4.02, 4.97, 10.33],
  L_in: 100,
  AE_lb: 60000,
  EI_lbin2: 1e6,
};

export const benchmarkPaz11_1: ExampleDef = {
  id: "benchmark-paz-11-1",
  name: "🏁 Frame · Paz 11.1 (plane frame inclinado 45°)",
  category: "1️⃣ Frames · 🎯 3 GDL Pórtico plano",
  benchmark: true,
  defaultShellResult: "none",
  guide: [
    "Paz Ej. 11.1 — Plane frame 2 elementos: barra inclinada 45° + horizontal.",
    "Datos derivados: L=100 in, AE=60,000 lb, EI=1e6 lb·in².",
    "Resultados libro: f₁=4.02 Hz, f₂=4.97 Hz, f₃=10.33 Hz (3 modos in-plane).",
    "📤 Toggle 'Exportar a .e2k' → modelo ETABS plane frame 2D.",
  ],
  params: {
    L_in: { default: 100, min: 50, max: 300, step: 5, label: "L cada barra (in)", folder: "Geometría" },
    A_in2: { default: 2.0, min: 0.5, max: 50, step: 0.1, label: "A barra (in²)", folder: "Sección" },
    I_in4: { default: 33.33, min: 10, max: 200, step: 0.5, label: "I barra (in⁴)", folder: "Sección" },
    E_psi: { default: 30e6, min: 25e6, max: 35e6, step: 0.5e6, label: "E (psi)", folder: "Material" },
    G_psi: { default: 12e6, min: 10e6, max: 14e6, step: 0.5e6, label: "G (psi)", folder: "Material" },
    // m̄ = 4.2 lb·s²/in²: la M local del libro (p.300) es [140, 156, 2200, 40 000, ...] SIN factor,
    // o sea m̄·L/420 = 1 con L = 100. (Hasta el 6-sep-2026 iba 0.078: 54 veces menos masa.)
    mbar: { default: 4.2, min: 0.01, max: 10.0, step: 0.001, label: "m̄ (lb·s²/in/in)", folder: "Masa" },
    exportE2k: { default: 0, boolean: true, label: "📤 Exportar a ETABS .e2k", folder: "Exportar" },
  },
  hasModal: true,

  onParamChange(changedKey, params) {
    if (changedKey === "exportE2k" && params.exportE2k > 0.5) {
      const sf = paramsToSF(params);
      const { filename, content } = generateSpaceFrameE2k(sf, "Paz_11_1");
      downloadTextFile(filename, content);
      console.log(`[Paz 11.1] e2k exportado: ${filename}`);
      params.exportE2k = 0;
    }
  },

  computedLabels(p) {
    const AE = p.A_in2 * p.E_psi;
    const EI = p.E_psi * p.I_in4;
    return {
      "AE": `${AE.toFixed(0)} lb  (libro 60,000)`,
      "EI": `${EI.toExponential(3)} lb·in²  (libro 1.0e6)`,
      "AE/L": (AE / p.L_in).toFixed(2),
      "EI/L³ ×12": (12 * EI / Math.pow(p.L_in, 3)).toFixed(2),
    };
  },

  build(p, states) {
    const sf = paramsToSF(p);
    buildSpaceFrameModel(sf, states);
    console.log(`[Paz 11.1] Modelo construido. L=${p.L_in}in, A=${p.A_in2}in², I=${p.I_in4}in⁴`);
  },

  runModal(p, states, modalPanel) {
    if (!states.nodes.val.length) return;
    try {
      // Masa CONSISTENTE (156 / 22L / 4L², la del libro): `modalAnalysisPaz`. El `modalAnalysis`
      // normal es lumped (ρAL/2 por extremo, como CSI) y da 3.43 / 7.86 Hz: no es un error, es
      // otra masa. Lo que queda (4.010 / 4.869 / 10.323 vs 4.02 / 4.97 / 10.33) es la deformación
      // por cortante del motor (As = 5/6·A, φ = 0.06): el libro es Euler. Medido en Python el 6-sep-2026.
      const out = modalAnalysisPaz(
        states.nodes.val, states.elements.val,
        states.nodeInputs.val, states.elementInputs.val, 6,
      );
      console.log(`[Paz 11.1 — Modal] frecuencias:\n` +
        out.frequencies.slice(0, 6).map((f, i) => {
          const ref = PAZ_REF.freqs_Hz[i] ?? null;
          const note = ref ? ` (libro ${ref.toFixed(2)})` : "";
          return `  Modo ${i + 1}: f = ${f.toFixed(3)} Hz${note}`;
        }).join("\n"));
      if (modalPanel?.render) {
        modalPanel.render(out, {
          title: "Paz 11.1 — Plane frame inclinado 45°",
          properties: [`Libro: f₁=4.02, f₂=4.97, f₃=10.33 Hz`],
        });
      }
    } catch (e: any) {
      console.error("[Paz 11.1 Modal]", e.message);
    }
  },
};

function paramsToSF(p: Record<string, number>) {
  const L_m = PAZ_UTILS.in_to_m(p.L_in);
  const E_kNm2 = PAZ_UTILS.psi_to_kNm2(p.E_psi);
  const G_kNm2 = PAZ_UTILS.psi_to_kNm2(p.G_psi);
  const A_m2 = PAZ_UTILS.in2_to_m2(p.A_in2);
  const I_m4 = PAZ_UTILS.in4_to_m4(p.I_in4);
  const w_per_length_lbin = p.mbar * 386.088;
  const mass_per_length_kgm = w_per_length_lbin * 175.13 / 9.80665;
  // E va en kN/m², así que la masa va en t (kN·s²/m): ρ en t/m³, no en kg/m³ (era 1000× hasta el 6-sep-2026)
  const rho_tm3 = mass_per_length_kgm / A_m2 / 1000;

  // Geometría: nodo 1 (origen) - nodo 2 inclinado 45° - nodo 3 horizontal
  // Elemento 1: 1→2 inclinado, Elemento 2: 2→3 horizontal
  // Nodos extremos empotrados, nodo central libre (3 DOF in-plane)
  const nodes: Node[] = [
    [0, 0, 0],                                             // 1 empotrado (esquina inferior)
    [L_m * Math.cos(Math.PI / 4), 0, L_m * Math.sin(Math.PI / 4)],  // 2 nodo libre (inclinado 45°)
    [L_m * Math.cos(Math.PI / 4) + L_m, 0, L_m * Math.sin(Math.PI / 4)],  // 3 empotrado
  ];
  const elements: Element[] = [[0, 1], [1, 2]];
  const supports = new Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>();
  supports.set(0, [true, true, true, true, true, true]);
  supports.set(2, [true, true, true, true, true, true]);
  // Pórtico PLANO (3 GDL: ux, uz, ry): el nudo libre no sale del plano XZ
  supports.set(1, [false, true, false, true, false, true]);

  const sec = {
    A: A_m2, Iy: I_m4, Iz: I_m4,
    J: I_m4 * 0.05, E: E_kNm2, G: G_kNm2,
    rho: rho_tm3,
    label: `Paz 11.1 frame elem (A=${p.A_in2}in², I=${p.I_in4}in⁴)`,
    e2kName: "FRAME_PAZ11_1",
    e2kShape: "Steel I/Wide Flange",
    e2kD: 0.30, e2kB: 0.20, e2kTF: 0.018, e2kTW: 0.011,
  };

  return {
    nodes, elements, supports,
    sectionByElement: [sec, sec],
    materialName: "A992Fy50",
    materialType: "Steel" as const,
  };
}
