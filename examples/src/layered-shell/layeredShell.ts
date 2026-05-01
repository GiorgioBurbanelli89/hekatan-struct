/**
 * Layered Shell — Q4 Mindlin con Classical Laminate Theory (ABBD)
 *
 * Placa multicapa donde cada capa puede tener material, espesor y angulo
 * de fibra distintos. Utiliza `layeredQ4Solve` de hekatan-fem (TS puro).
 *
 * Soporta presets clasicos:
 *   - Isotropico (1 capa, equivalente a plate-thick)
 *   - CLT balanced 3 [0/90/0]    — laminado simetrico cross-ply
 *   - CLT balanced 5 [0/90/0/90/0]
 *   - Sandwich [face/core/face]   — caras rigidas + nucleo flexible
 *   - Asimetrico [0/90]            — laminado NO simetrico (B != 0, coupling)
 *
 * Notas:
 *   - layeredQ4Solve usa 5 DOFs/nodo: [u, v, w, thetaX, thetaY]
 *   - Para visualizar en el viewer poblamos states.nodes/elements/deformOutputs
 *     siguiendo el mismo patron que plate-thick.
 */
import { layeredQ4Solve, type LayerDef, type Node } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

// ── Presets de laminado ────────────────────────────────────────────────
// Devuelve la lista de capas para un preset dado, con espesor total = t.
// Cada capa lleva fraccion de espesor + angulo (rad) + factor sobre E base.
type LayerSpec = { fracT: number; angle: number; eFactor: number; densityFactor?: number };

const PRESETS: Record<string, LayerSpec[]> = {
  // 0 = Isotropico (1 capa)
  iso: [
    { fracT: 1.0, angle: 0, eFactor: 1.0 },
  ],
  // 1 = CLT balanced 3 [0/90/0]
  clt3: [
    { fracT: 1 / 3, angle: 0,             eFactor: 1.0 },
    { fracT: 1 / 3, angle: Math.PI / 2,   eFactor: 1.0 },
    { fracT: 1 / 3, angle: 0,             eFactor: 1.0 },
  ],
  // 2 = CLT balanced 5 [0/90/0/90/0]
  clt5: [
    { fracT: 0.20, angle: 0,             eFactor: 1.0 },
    { fracT: 0.20, angle: Math.PI / 2,   eFactor: 1.0 },
    { fracT: 0.20, angle: 0,             eFactor: 1.0 },
    { fracT: 0.20, angle: Math.PI / 2,   eFactor: 1.0 },
    { fracT: 0.20, angle: 0,             eFactor: 1.0 },
  ],
  // 3 = Sandwich [face/core/face] — caras 5% del espesor, nucleo 90%
  sandwich: [
    { fracT: 0.05, angle: 0, eFactor: 1.0,  densityFactor: 1.0 },
    { fracT: 0.90, angle: 0, eFactor: 0.02, densityFactor: 0.1 }, // E core = 2% de E base
    { fracT: 0.05, angle: 0, eFactor: 1.0,  densityFactor: 1.0 },
  ],
  // 4 = Asimetrico [0/90] — coupling B != 0
  asym: [
    { fracT: 0.5, angle: 0,           eFactor: 1.0 },
    { fracT: 0.5, angle: Math.PI / 2, eFactor: 1.0 },
  ],
};

const PRESET_NAMES = ["iso", "clt3", "clt5", "sandwich", "asym"];

function buildLayers(presetIdx: number, totalT: number, E: number, nu: number, density: number): LayerDef[] {
  const key = PRESET_NAMES[Math.round(presetIdx)] ?? "iso";
  const specs = PRESETS[key];
  return specs.map((s) => ({
    E: E * s.eFactor,
    nu,
    thickness: totalT * s.fracT,
    angle: s.angle,
    density: density * (s.densityFactor ?? 1.0),
  }));
}

export const layeredShell: ExampleDef = {
  id: "layered-shell",
  name: "Layered Shell (CLT — ABBD)",
  category: "Cáscaras",
  defaultShellResult: "bendingXX",
  availableShellResults: ["bendingXX", "bendingYY", "bendingXY", "displacementZ", "membraneXX", "membraneYY"],
  hasModal: false,
  params: {
    preset: {
      default: 1,
      label: "Laminado",
      options: { "Isotropico (1 capa)": 0, "CLT balanced [0/90/0]": 1, "CLT balanced 5 capas": 2, "Sandwich [face/core/face]": 3, "Asimetrico [0/90] (coupling B≠0)": 4 },
    },
    Lx: { default: 4.0, min: 1, max: 10, step: 0.5, label: "Lx (m)" },
    Ly: { default: 4.0, min: 1, max: 10, step: 0.5, label: "Ly (m)" },
    t:  { default: 0.30, min: 0.05, max: 0.80, step: 0.01, label: "t total (m)" },
    E:  { default: 30e6, min: 1e6, max: 200e6, step: 1e6, label: "E (kN/m²)" },
    nu: { default: 0.30, min: 0.10, max: 0.40, step: 0.01, label: "ν" },
    rho: { default: 24, min: 1, max: 80, step: 0.5, label: "ρ (kN/m³)" },
    q:  { default: 10, min: 1, max: 30, step: 1, label: "q presión ↓ (kN/m²)" },
    bcType: {
      default: 0,
      label: "BC bordes",
      options: { "Simply supported": 0, "Clamped (empotrado)": 1 },
    },
    nx: { default: 10, min: 4, max: 20, step: 1, label: "nx elementos" },
    ny: { default: 10, min: 4, max: 20, step: 1, label: "ny elementos" },
  },
  build(p, states) {
    const layers = buildLayers(p.preset, p.t, p.E, p.nu, p.rho);
    const bcType = Math.round(p.bcType) === 1 ? "clamped" : "simply-supported";

    const out = layeredQ4Solve({
      layers,
      meshLx: p.Lx, meshLy: p.Ly,
      meshNx: Math.round(p.nx), meshNy: Math.round(p.ny),
      bcType,
      pressure: -p.q,
    });

    // ── Nodos / elementos para el viewer ──
    const nodes: Node[] = out.nodes.map((n) => [n.x, n.y, 0]);
    const elems = out.elements.map((e) => e.nodes as unknown as number[]);
    states.nodes.val = nodes;
    states.elements.val = elems as number[][];

    // ── Element inputs (espesor, E, ν, ρ promedios para el viewer) ──
    const thicknesses = new Map<number, number>();
    const elasticities = new Map<number, number>();
    const poissons = new Map<number, number>();
    const densities = new Map<number, number>();
    elems.forEach((_, i) => {
      thicknesses.set(i, p.t);
      elasticities.set(i, p.E);
      poissons.set(i, p.nu);
      densities.set(i, p.rho);
    });
    states.elementInputs.val = { thicknesses, elasticities, poissonsRatios: poissons, densities };

    // ── Supports/loads (visualizacion solamente; layeredQ4Solve aplica BCs internamente) ──
    const supports = new Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>();
    const loads = new Map<number, [number, number, number, number, number, number]>();
    const A_full = (p.Lx / Math.round(p.nx)) * (p.Ly / Math.round(p.ny));
    nodes.forEach((n, i) => {
      const onEdge = Math.abs(n[0]) < 1e-6 || Math.abs(n[0] - p.Lx) < 1e-6 ||
                     Math.abs(n[1]) < 1e-6 || Math.abs(n[1] - p.Ly) < 1e-6;
      if (onEdge) {
        if (bcType === "clamped") {
          supports.set(i, [true, true, true, true, true, false]);
        } else {
          // simply supported: w=0 (+ traslacionales esquina ya restringidas en solver)
          supports.set(i, [true, true, true, false, false, false]);
        }
      }
      const corner = (Math.abs(n[0]) < 1e-6 || Math.abs(n[0] - p.Lx) < 1e-6) &&
                     (Math.abs(n[1]) < 1e-6 || Math.abs(n[1] - p.Ly) < 1e-6);
      const factor = corner ? 0.25 : onEdge ? 0.5 : 1.0;
      loads.set(i, [0, 0, -p.q * A_full * factor, 0, 0, 0]);
    });
    states.nodeInputs.val = { supports, loads };

    // ── Deformaciones por nodo (5 DOFs: u, v, w, thetaX, thetaY) ──
    // El viewer lee 6 DOFs [ux, uy, uz, rx, ry, rz] — mapeamos:
    //   u → ux, v → uy, w → uz, thetaX → rx, thetaY → ry, 0 → rz
    const deformations = new Map<number, [number, number, number, number, number, number]>();
    out.displacements.forEach((d, i) => {
      deformations.set(i, [d.u, d.v, d.w, d.thetaX, d.thetaY, 0]);
    });
    states.deformOutputs.val = { deformations };

    // ── Resultados de elemento — momentos y fuerzas membrana ──
    const bendingXX = new Map<number, number[]>();
    const bendingYY = new Map<number, number[]>();
    const bendingXY = new Map<number, number[]>();
    const membraneXX = new Map<number, number[]>();
    const membraneYY = new Map<number, number[]>();
    out.elementResults.forEach((er, i) => {
      bendingXX.set(i, [er.Mxx, er.Mxx, er.Mxx, er.Mxx]);
      bendingYY.set(i, [er.Myy, er.Myy, er.Myy, er.Myy]);
      bendingXY.set(i, [er.Mxy, er.Mxy, er.Mxy, er.Mxy]);
      membraneXX.set(i, [er.Nxx, er.Nxx, er.Nxx, er.Nxx]);
      membraneYY.set(i, [er.Nyy, er.Nyy, er.Nyy, er.Nyy]);
    });
    states.analyzeOutputs.val = { bendingXX, bendingYY, bendingXY, membraneXX, membraneYY };

    states.objects3D.val = [];

    // ── Log resumen del laminado y resultados ──
    const presetName = (Object.entries(layeredShell.params.preset.options ?? {})
      .find(([, v]) => v === Math.round(p.preset))?.[0]) ?? "?";
    const a11 = out.abbd.A[0][0], d11 = out.abbd.D[0][0], b11 = out.abbd.B[0][0];
    console.log(
      `[Layered Shell] preset=${presetName} | layers=${layers.length} | t=${p.t}m | ` +
      `BC=${bcType} | mesh=${Math.round(p.nx)}×${Math.round(p.ny)}\n` +
      `  ABBD: A11=${a11.toExponential(3)}  B11=${b11.toExponential(3)}  D11=${d11.toExponential(3)}\n` +
      `  maxW=${out.maxW.toExponential(3)} m | maxMxx=${out.maxMxx.toFixed(2)} kN·m/m | maxMyy=${out.maxMyy.toFixed(2)} kN·m/m`
    );
  },
  computedLabels(_p, states) {
    const def = states.deformOutputs.val?.deformations;
    if (!def) return {};
    let maxW = 0, maxU = 0, maxV = 0;
    def.forEach((v) => {
      if (Math.abs(v[2]) > Math.abs(maxW)) maxW = v[2];
      if (Math.abs(v[0]) > Math.abs(maxU)) maxU = v[0];
      if (Math.abs(v[1]) > Math.abs(maxV)) maxV = v[1];
    });
    const ana = states.analyzeOutputs.val;
    let maxMxx = 0, maxMyy = 0, maxNxx = 0;
    ana?.bendingXX?.forEach((arr: number[]) => { for (const v of arr) if (Math.abs(v) > Math.abs(maxMxx)) maxMxx = v; });
    ana?.bendingYY?.forEach((arr: number[]) => { for (const v of arr) if (Math.abs(v) > Math.abs(maxMyy)) maxMyy = v; });
    ana?.membraneXX?.forEach((arr: number[]) => { for (const v of arr) if (Math.abs(v) > Math.abs(maxNxx)) maxNxx = v; });
    return {
      "max w (mm)":     (maxW * 1000).toFixed(3),
      "max u_membrane (mm)": (maxU * 1000).toFixed(4),
      "max v_membrane (mm)": (maxV * 1000).toFixed(4),
      "max Mxx (kN·m/m)": maxMxx.toFixed(2),
      "max Myy (kN·m/m)": maxMyy.toFixed(2),
      "max Nxx (kN/m)":   maxNxx.toFixed(2),
    };
  },
};
