/**
 * 🏁 Benchmark FRAME — Paz Ej. 12.1 (Grid Frame 3D — parrilla horizontal)
 *
 *  Mario Paz & Young Hoon — "Structural Dynamics: Theory & Computation" 6ª ed.
 *  Cap. 12.6, Illustrative Example 12.1, p.323
 *
 *  Modelo: 2 vigas prismáticas en plano horizontal formando una L:
 *    Elemento 1: θ=0°  (a lo largo del eje X)
 *    Elemento 2: θ=90° (a lo largo del eje Y)
 *  Nodo común central LIBRE (3 DOFs: w_z, θ_x, θ_y)
 *  Extremos lejanos EMPOTRADOS
 *
 *  Resultados del libro (p.325):
 *    ω₁ = 14.06 rad/s   →  f₁ = 2.24 Hz
 *    ω₂ = 101.99 rad/s  →  f₂ = 16.23 Hz
 *    ω₃ = 218.74 rad/s  →  f₃ = 34.81 Hz
 *
 *  Paz 12.2: respuesta a F₃ = 5000 lb step (no implementado aquí — se obtiene
 *  fácilmente con sliders de carga + el chart panel).
 */
import { modalAnalysis, deform, type Node, type Element } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";
import { buildSpaceFrameModel, generateSpaceFrameE2k, downloadTextFile, PAZ_UTILS } from "../shared/pazFrameE2k";
import { getSharedChartPanel } from "../shared/chartPanel";

const PAZ_REF = {
  freqs_Hz: [2.24, 16.23, 34.81],
};

export const benchmarkPaz12_1: ExampleDef = {
  id: "benchmark-paz-12-1",
  name: "🏁 Frame · Paz 12.1 (grid frame 3D — L horizontal)",
  category: "1️⃣ Frames · 🎯 3 GDL Pórtico plano",
  benchmark: true,
  defaultShellResult: "none",
  guide: [
    "Paz Ej. 12.1 — Grid frame en plano horizontal: 2 vigas perpendiculares en L.",
    "Elemento 1 (θ=0°) eje X; Elemento 2 (θ=90°) eje Y.",
    "Nodo central LIBRE (3 DOFs: w_z, θ_x, θ_y). Extremos empotrados.",
    "Resultados libro: f₁=2.24 Hz, f₂=16.23 Hz, f₃=34.81 Hz.",
    "📤 Toggle 'Exportar a .e2k' → modelo ETABS grid frame.",
  ],
  params: {
    L_in: { default: 100, min: 50, max: 500, step: 5, label: "L cada viga (in)", folder: "Geometría" },
    A_in2: { default: 10, min: 1, max: 100, step: 0.5, label: "A (in²)", folder: "Sección" },
    Iy_in4: { default: 200, min: 50, max: 1000, step: 5, label: "Iy strong (in⁴)", folder: "Sección" },
    J_in4: { default: 40, min: 5, max: 200, step: 1, label: "J torsión (in⁴)", folder: "Sección" },
    E_psi: { default: 30e6, min: 25e6, max: 35e6, step: 0.5e6, label: "E (psi)", folder: "Material" },
    G_psi: { default: 12e6, min: 10e6, max: 14e6, step: 0.5e6, label: "G (psi)", folder: "Material" },
    mbar: { default: 0.20, min: 0.01, max: 1.0, step: 0.01, label: "m̄ (lb·s²/in/in)", folder: "Masa" },
    F_lb: { default: 5000, min: 0, max: 20000, step: 100, label: "F vertical nodo central (lb)", folder: "Cargas" },
    exportE2k: { default: 0, boolean: true, label: "📤 Exportar a ETABS .e2k", folder: "Exportar" },
  },
  hasModal: true,

  onParamChange(changedKey, params) {
    if (changedKey === "exportE2k" && params.exportE2k > 0.5) {
      const sf = paramsToSF(params);
      const { filename, content } = generateSpaceFrameE2k(sf, "Paz_12_1");
      downloadTextFile(filename, content);
      console.log(`[Paz 12.1] e2k exportado: ${filename}`);
      params.exportE2k = 0;
    }
  },

  build(p, states) {
    const sf = paramsToSF(p);
    buildSpaceFrameModel(sf, states);
    console.log(`[Paz 12.1] Grid frame L=${p.L_in}in, A=${p.A_in2}in², I=${p.Iy_in4}in⁴, J=${p.J_in4}in⁴`);
  },

  runModal(p, states, modalPanel) {
    if (!states.nodes.val.length) return;
    try {
      const out = modalAnalysis(
        states.nodes.val, states.elements.val,
        states.nodeInputs.val, states.elementInputs.val, 6,
      );
      console.log(`[Paz 12.1 — Modal] frecuencias:\n` +
        out.frequencies.slice(0, 6).map((f, i) => {
          const ref = PAZ_REF.freqs_Hz[i] ?? null;
          const note = ref ? ` (libro ${ref.toFixed(2)})` : "";
          return `  Modo ${i + 1}: f = ${f.toFixed(3)} Hz${note}`;
        }).join("\n"));
      if (modalPanel?.render) {
        modalPanel.render(out, {
          title: "Paz 12.1 — Grid frame horizontal",
          properties: [`Libro: f₁=2.24, f₂=16.23, f₃=34.81 Hz`],
        });
      }
    } catch (e: any) {
      console.error("[Paz 12.1 Modal]", e.message);
    }
  },
};

function paramsToSF(p: Record<string, number>) {
  const L_m = PAZ_UTILS.in_to_m(p.L_in);
  const E_kNm2 = PAZ_UTILS.psi_to_kNm2(p.E_psi);
  const G_kNm2 = PAZ_UTILS.psi_to_kNm2(p.G_psi);
  const A_m2 = PAZ_UTILS.in2_to_m2(p.A_in2);
  const Iy_m4 = PAZ_UTILS.in4_to_m4(p.Iy_in4);
  const J_m4 = PAZ_UTILS.in4_to_m4(p.J_in4);
  const w_per_length_lbin = p.mbar * 386.088;
  const mass_per_length_kgm = w_per_length_lbin * 175.13 / 9.80665;
  const rho_kgm3 = mass_per_length_kgm / A_m2;

  // Geometría: nodo 1 (origen) - nodo 2 central libre - nodo 3 al final
  // L en X: 0 → L → 2L (no es así, queremos un grid en L)
  // En realidad Paz 12.1 es:
  //   nodo 1 (extremo X-): empotrado
  //   nodo 2 (centro de L): libre, con 3 DOFs (w_z, θ_x, θ_y)
  //   nodo 3 (extremo Y+): empotrado
  // Elemento 1: 1→2 a lo largo de X
  // Elemento 2: 2→3 a lo largo de Y
  const nodes: Node[] = [
    [0, 0, 0],     // 1 (X-) empotrado
    [L_m, 0, 0],   // 2 centro libre (esquina de la L)
    [L_m, L_m, 0], // 3 (Y+) empotrado
  ];
  const elements: Element[] = [[0, 1], [1, 2]];
  const supports = new Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>();
  supports.set(0, [true, true, true, true, true, true]);
  supports.set(2, [true, true, true, true, true, true]);

  const sec = {
    A: A_m2, Iy: Iy_m4, Iz: Iy_m4,  // grid: ambos iguales
    J: J_m4, E: E_kNm2, G: G_kNm2,
    rho: rho_kgm3,
    label: `Paz 12.1 grid (A=${p.A_in2}, I=${p.Iy_in4}, J=${p.J_in4} in)`,
    e2kName: "GRID_PAZ12_1",
    e2kShape: "Steel I/Wide Flange",
    e2kD: 0.30, e2kB: 0.20, e2kTF: 0.018, e2kTW: 0.011,
  };

  const loads = new Map<number, [number, number, number, number, number, number]>();
  if (p.F_lb > 0) {
    const F_kN = PAZ_UTILS.lb_to_kN(p.F_lb);
    loads.set(1, [0, 0, -F_kN, 0, 0, 0]);
  }

  return {
    nodes, elements, supports, loads,
    sectionByElement: [sec, sec],
    materialName: "A992Fy50",
    materialType: "Steel" as const,
  };
}
