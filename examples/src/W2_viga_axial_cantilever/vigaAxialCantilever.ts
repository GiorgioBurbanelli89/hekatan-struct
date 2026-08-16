/**
 * 🏁 W2 Viga Axial Cantilever (1 DOF) — validación cruzada con ETABS.
 *
 * Modelo idéntico al template editado por el usuario en ETABS:
 *   - Viga horizontal en X, L=3 m, en story Base (Z=0)
 *   - POINT 1 (0,0,0) empotrado total | POINT 2 (3,0,0) libre
 *   - Sección I450 custom (Steel I/Wide Flange):
 *       D=0.45  B=0.25  TF=0.025  TW=0.013 m
 *       → A=0.0177 m²  I33=6.344e-4 m⁴  I22=6.518e-5 m⁴  J=2.805e-6 m⁴
 *   - Material A36: E=199.94 GPa (= 20389020 Tonf/m² × 9.80665), nu=0.3
 *   - Carga axial Fx = 100 kN aplicada en POINT 2
 *
 * Resultado esperado (1 DOF — solo Ux):
 *   u_x = P·L / (E·A) = 100·3 / (199.94e6 · 0.0177) = 0.0848 mm
 * ETABS confirma: Ux = 0.085 mm
 */
import { deform, analyze, modalAnalysis, type Node, type Element } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

// Material A36 (matches ETABS template)
const E_A36 = 199.94e6;   // kN/m²  (= 20389020 Tonf/m² × 9.80665)
const nu_A36 = 0.3;
const G_A36 = E_A36 / (2 * (1 + nu_A36));
const rho_A36 = 76.97 / 9.80665;  // t/m3 de MASA: E va en kN/m2, asi que la masa va en toneladas (kg/m3 pesaba 1000x)

// Calcula A, I, As de un I custom dado D, B, TF, TW
function iSectionProps(D: number, B: number, TF: number, TW: number) {
  const h_web = D - 2 * TF;
  const A_flange = 2 * B * TF;
  const A_web = h_web * TW;
  const A = A_flange + A_web;
  // I33 (strong, about Y axis perpendicular to web)
  const d_centroid_flange = (D - TF) / 2;
  const I_flange_self = 2 * (B * TF ** 3 / 12);
  const I_flange_steiner = 2 * (B * TF) * d_centroid_flange ** 2;
  const I_web = TW * h_web ** 3 / 12;
  const I33 = I_flange_self + I_flange_steiner + I_web;
  // I22 (weak, about Z axis parallel to web)
  const I22 = 2 * (TF * B ** 3 / 12) + h_web * TW ** 3 / 12;
  // Torsion J ≈ Σ (b·t³/3) para perfiles I de pared delgada
  const J = (2 * B * TF ** 3 + h_web * TW ** 3) / 3;
  // Shear areas
  const As2 = h_web * TW;       // dirección 2 (strong) ≈ área del alma
  const As3 = (5 / 6) * (2 * B * TF);  // dirección 3 (weak) ≈ alas
  return { A, I33, I22, J, As2, As3 };
}

export const vigaAxialCantilever: ExampleDef = {
  id: "W2_viga_axial_cantilever",
  name: "Viga axial Acero I-450 cantilever (1 DOF)",
  category: "🏁 Benchmarks · 1️⃣ Frames · 🏗 Vigas · 🎯 1 DOF Axial",
  benchmark: true,
  defaultShellResult: "none",
  availableShellResults: [],
  hasModal: true,
  guide: [
    "Viga horizontal cantilever bajo carga axial puntual en el extremo libre.",
    "Solo 1 grado de libertad efectivo: Ux (axial). Sin flexión ni cortante.",
    "Valida que el solver Timoshenko reproduzca exactamente u = P·L / (E·A).",
    "Default: I450 (D=0.45, B=0.25, TF=0.025, TW=0.013), Steel A36, P=100 kN, L=3 m.",
    "Esperado: Ux = 0.0848 mm — coincide con ETABS (0.085 mm).",
  ],
  params: {
    L:    { default: 3.0,    min: 0.5, max: 10.0, step: 0.1,  label: "Longitud L (m)",          folder: "Geometría" },
    D:    { default: 0.45,   min: 0.10, max: 1.00, step: 0.005, label: "D depth I (m)",         folder: "Sección" },
    B:    { default: 0.25,   min: 0.05, max: 0.60, step: 0.005, label: "B flange width (m)",    folder: "Sección" },
    TF:   { default: 0.025,  min: 0.005, max: 0.10, step: 0.001, label: "TF flange thick (m)",  folder: "Sección" },
    TW:   { default: 0.013,  min: 0.003, max: 0.05, step: 0.001, label: "TW web thick (m)",     folder: "Sección" },
    E:    { default: 199.94e6, min: 100e6, max: 250e6, step: 1e6, label: "E (kN/m²)",           folder: "Material" },
    nu:   { default: 0.3,    min: 0.1, max: 0.4, step: 0.01,    label: "ν Poisson",             folder: "Material" },
    nElem:{ default: 1,      min: 1, max: 20, step: 1,           label: "N° elementos",         folder: "Malla" },
    Fx:   { default: 100,    min: -500, max: 500, step: 5,       label: "Fx axial (kN)",        folder: "Cargas", unitType: "force" },
    showAnalytical: { default: 1, boolean: true, label: "Mostrar u analítico", folder: "Reporte" },
  },
  computedLabels(p) {
    const props = iSectionProps(p.D, p.B, p.TF, p.TW);
    const u_ana = (p.Fx * p.L) / (p.E * props.A) * 1000; // mm
    return {
      "A":                `${(props.A*1e4).toFixed(2)} cm²`,
      "I33 (strong)":     `${(props.I33*1e8).toFixed(2)} cm⁴`,
      "I22 (weak)":       `${(props.I22*1e8).toFixed(2)} cm⁴`,
      "J (torsion)":      `${(props.J*1e8).toFixed(4)} cm⁴`,
      "u_x analítico":    `${u_ana.toFixed(5)} mm`,
      "k_axial = EA/L":   `${(p.E*props.A/p.L).toExponential(3)} kN/m`,
    };
  },
  build(p, states) {
    const props = iSectionProps(p.D, p.B, p.TF, p.TW);
    const nElem = Math.max(1, Math.round(p.nElem));
    const dL = p.L / nElem;
    // Nodos a lo largo del eje X
    const nodes: Node[] = [];
    for (let i = 0; i <= nElem; i++) nodes.push([dL * i, 0, 0]);
    // Elementos
    const elements: Element[] = [];
    for (let i = 0; i < nElem; i++) elements.push([i, i + 1]);
    // Soporte: empotramiento total en nodo 0
    const supports = new Map<number,[boolean,boolean,boolean,boolean,boolean,boolean]>([
      [0, [true, true, true, true, true, true]],
    ]);
    // Carga: Fx en el extremo libre (nodo nElem)
    const loads = new Map<number,[number,number,number,number,number,number]>([
      [nElem, [p.Fx, 0, 0, 0, 0, 0]],
    ]);

    const elasticities = new Map<number, number>();
    const shearModuli = new Map<number, number>();
    const areas = new Map<number, number>();
    const Iy = new Map<number, number>();
    const Iz = new Map<number, number>();
    const J = new Map<number, number>();
    const As2 = new Map<number, number>();
    const As3 = new Map<number, number>();
    const densities = new Map<number, number>();
    const poissons = new Map<number, number>();
    const G = p.E / (2 * (1 + p.nu));
    for (let i = 0; i < elements.length; i++) {
      elasticities.set(i, p.E);
      shearModuli.set(i, G);
      areas.set(i, props.A);
      Iy.set(i, props.I33);     // strong axis = mayor I
      Iz.set(i, props.I22);     // weak axis = menor I
      J.set(i, props.J);
      As2.set(i, props.As2);
      As3.set(i, props.As3);
      densities.set(i, rho_A36);
      poissons.set(i, p.nu);
    }

    states.nodes.val = nodes;
    states.elements.val = elements;
    states.nodeInputs.val = { supports, loads };
    states.elementInputs.val = {
      elasticities, shearModuli, areas,
      momentsOfInertiaZ: Iy, momentsOfInertiaY: Iz, torsionalConstants: J,
      shearAreasY: As2, shearAreasZ: As3,
      densities, poissonsRatios: poissons,
    };

    const deformOut = deform(nodes, elements, states.nodeInputs.val, states.elementInputs.val);
    states.deformOutputs.val = deformOut;
    states.analyzeOutputs.val = analyze(nodes, elements, states.elementInputs.val, deformOut);
    states.objects3D.val = [];

    // Verificación: u = P·L / (E·A)
    const u_analitico = (p.Fx * p.L) / (p.E * props.A);
    const u_fem = deformOut.deformations?.get(nElem)?.[0] ?? 0;
    const u_etabs_ref = 0.0848e-3; // m, reportado por ETABS para defaults (L=3, I450, A36, P=100)
    const diff_pct = u_analitico !== 0 ? (u_fem - u_analitico) / u_analitico * 100 : 0;
    console.log(
      `[W2 Viga axial cantilever] L=${p.L}m  P=${p.Fx}kN  A=${(props.A*1e4).toFixed(2)} cm²\n` +
      `  u_x analítico (P·L/E·A) = ${(u_analitico*1000).toFixed(5)} mm\n` +
      `  u_x hekatan-fem         = ${(u_fem*1000).toFixed(5)} mm  (Δ ${diff_pct.toFixed(4)}%)\n` +
      `  ETABS referencia        = ${(u_etabs_ref*1000).toFixed(3)} mm  (defaults L=3 I450 A36 P=100)`
    );
  },
  runModal(p, states, modalPanel) {
    const nodes = states.nodes.val;
    const elements = states.elements.val;
    const ni = states.nodeInputs.val;
    const ei = states.elementInputs.val;
    if (!nodes.length || !elements.length || !ni.supports?.size || !ei.densities?.size) return;
    try {
      const out = modalAnalysis(nodes, elements, ni, ei, 6);
      const props = iSectionProps(p.D, p.B, p.TF, p.TW);
      modalPanel.render(out, {
        title: `W2 Viga axial — L=${p.L}m  I${(p.D*1000).toFixed(0)}`,
        properties: [
          `Sección: I custom D=${(p.D*1000).toFixed(0)}×B=${(p.B*1000).toFixed(0)}×TF=${(p.TF*1000).toFixed(0)}×TW=${(p.TW*1000).toFixed(0)} mm`,
          `A=${(props.A*1e4).toFixed(2)} cm²  E=${(p.E/1e6).toFixed(1)} GPa  γ=76.97 kN/m³`,
        ],
      });
    } catch (e: any) { console.warn("Modal W2 axial error:", e.message); }
  },
};
