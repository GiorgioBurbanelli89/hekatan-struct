/**
 * 🌀 Mesa de Torsión — Validación contra ETABS 19 (modelo Gabriela/Seproinca 2020)
 *
 * Modelo CSI original (`validacion/Api CSI Computers/etabs-api/python-verificado/
 * mesa_torsion.e2k`):
 *
 *   1 piso 6×6m × 4m alto, hormigón 4000Psi (E=24.85 GPa, ν=0.20, γ=23.57 kN/m³)
 *   - 4 columnas C40×40 — pinned-base (UX UY UZ restraint, rotaciones libres)
 *   - 4 vigas perimetrales V30×50
 *   - Losa 10 cm ShellThin (auto-mesh 1.25 m)
 *   - Diafragma rígido D1 sobre la losa
 *   - Carga area SCP=1 tonf/m² + Live=0.5 tonf/m² (peso propio incluido)
 *   - Modal Eigen 12 modos
 *
 * Propósito didáctico: "mesa de torsión" — modelo simétrico para estudiar
 * cuándo aparecen modos torsionales acoplados con traslación. Con geometría
 * y masa simétricas los 3 primeros modos son Ux, Uy, Rz puros. Activando
 * "Excentricidad de masa" (carga puntual concentrada en una esquina), los
 * modos se acoplan — exactamente lo que pasa en plantas reales con núcleos
 * de servicio desalineados con el CR.
 */
import { deform, analyze, modalAnalysis, type Node, type Element } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";
import * as THREE from "three";

// ── Constantes del modelo ETABS original ─────────────────────────────
const G = 9.80665;            // m/s² (factor tonf↔kN)
const RHO_CONC = 23.57 / 9.81;  // ton/m³ (γ_c=23.57 kN/m³ / g, ETABS 4000Psi)

// ETABS resultado de referencia (se completa cuando el script python 15_mesa_torsion.py corra).
// Placeholder — se actualizará en el módulo de comparación.
const ETABS_REF = {
  T1_s: null as number | null,   // Modo 1 traslación
  T2_s: null as number | null,   // Modo 2 traslación
  T3_s: null as number | null,   // Modo 3 torsión
};

export const mesaTorsion: ExampleDef = {
  id: "mesa-torsion",
  name: "🌀 Mesa de Torsión (ETABS Gabriela/Seproinca)",
  category: "🏁 Benchmarks · 4️⃣ Combinados",
  benchmark: true,
  defaultShellResult: "displacementZ",
  availableShellResults: [
    "none", "displacementZ", "vonMises",
    "membraneXX", "membraneYY", "membraneXY",
    "bendingXX", "bendingYY", "bendingXY",
  ],
  hasModal: true,
  guide: [
    "Modelo 'Mesa de torsión' de Gabriela/Seproinca (Venezuela 2020) reabierto en ETABS 19.1.",
    "1 piso 6×6 m × 4 m alto · 4 col C40×40 PINNED-base (UX UY UZ, rotaciones libres).",
    "4 vigas V30×50 perimetrales · losa 10 cm ShellThin · diafragma rígido auto.",
    "Modal Eigen 12 modos. Simétrico → modos 1,2,3 son Ux, Uy, Rz puros.",
    "Slider 'Excentricidad de masa' añade P concentrado en esquina → acopla torsión.",
    "Comparativa con ETABS API: ver validacion/Api CSI Computers/etabs-api/python-verificado/15_mesa_torsion.py",
    "Excel original ('Modelo Corrección de Torsión.xlsx') calcula corrección torsional analítica.",
  ],
  params: {
    // ─── Geometría ───
    Lx:        { default: 6.0,  min: 4, max: 12, step: 0.5, label: "Lx (m)", folder: "Geometría" },
    Ly:        { default: 6.0,  min: 4, max: 12, step: 0.5, label: "Ly (m)", folder: "Geometría" },
    H:         { default: 4.0,  min: 2.5, max: 6, step: 0.25, label: "H piso (m)", folder: "Geometría" },
    // ─── Mesh ───
    nMesh:     { default: 5,    min: 2, max: 12, step: 1, label: "Subdiv losa (n×n)", folder: "Geometría" },
    // ─── Secciones ───
    bCol:      { default: 0.40, min: 0.25, max: 0.80, step: 0.05, label: "b col (m)", folder: "Secciones" },
    hCol:      { default: 0.40, min: 0.25, max: 0.80, step: 0.05, label: "h col (m)", folder: "Secciones" },
    bViga:     { default: 0.30, min: 0.20, max: 0.60, step: 0.05, label: "b viga (m)", folder: "Secciones" },
    hViga:     { default: 0.50, min: 0.30, max: 0.90, step: 0.05, label: "h viga (m)", folder: "Secciones" },
    tLosa:     { default: 0.10, min: 0.08, max: 0.30, step: 0.01, label: "t losa (m)", folder: "Secciones" },
    // ─── Material (concreto 4000Psi) ───
    E_GPa:     { default: 24.85, min: 15, max: 35, step: 0.5, label: "E (GPa)", folder: "Material" },
    nu:        { default: 0.20, min: 0.10, max: 0.30, step: 0.01, label: "ν", folder: "Material" },
    // ─── Base ───
    apoyo:     { default: 0, label: "Apoyo base",
                 options: { "Pinned (UX UY UZ)": 0, "Empotrado (6 DOF)": 1 },
                 folder: "Apoyo" },
    // ─── Cargas ───
    q_SCP:     { default: 1.0, min: 0, max: 5, step: 0.1, label: "SCP (tonf/m²)", folder: "Cargas" },
    q_Live:    { default: 0.5, min: 0, max: 5, step: 0.1, label: "Live (tonf/m²)", folder: "Cargas" },
    // ─── Excentricidad (didáctico — para activar acople torsional) ───
    pEcc:      { default: 0,    min: 0, max: 30, step: 1,
                 label: "P excéntrico en esquina (tonf)", folder: "Torsión (didáctico)" },
    eccCorner: { default: 0, label: "Esquina excéntrica",
                 options: { "(0,0)": 0, "(Lx,0)": 1, "(Lx,Ly)": 2, "(0,Ly)": 3 },
                 folder: "Torsión (didáctico)" },
    // ─── Modal ───
    nModos:    { default: 12, min: 3, max: 24, step: 1, label: "N modos modal", folder: "Modal" },
  },

  computedLabels(p, states) {
    const out: Record<string, string> = {};
    // Masa total estimada (solo selfweight, igual que ETABS mass source con
    // INCLUDELOADS=No)
    const Aslab = p.Lx * p.Ly;
    const mLosa = Aslab * p.tLosa * RHO_CONC;
    const mVigas = 2 * (p.Lx + p.Ly) * p.bViga * p.hViga * RHO_CONC;
    const mCols = 4 * p.H * p.bCol * p.hCol * RHO_CONC;
    const mTotal = mLosa + mVigas + mCols;
    out["Masa losa"] = `${mLosa.toFixed(2)} ton`;
    out["Masa vigas"] = `${mVigas.toFixed(2)} ton`;
    out["Masa cols"] = `${mCols.toFixed(2)} ton`;
    out["Masa total"] = `${mTotal.toFixed(2)} ton  (≈ ${(mTotal * G).toFixed(1)} kN)`;
    // Rigidez lateral por columna (pinned-fixed = 3EI/L³)
    const E_kNm2 = p.E_GPa * 1e6;
    const Ic = (p.bCol * Math.pow(p.hCol, 3)) / 12;
    const kCol = (3 * E_kNm2 * Ic) / Math.pow(p.H, 3);
    out["k_col (pinned-fixed)"] = `${kCol.toFixed(0)} kN/m`;
    out["K total lateral (4 cols)"] = `${(4 * kCol).toFixed(0)} kN/m`;
    // Periodo aproximado SDOF
    const T_approx = 2 * Math.PI * Math.sqrt(mTotal / (4 * kCol));
    out["T₁ aprox (SDOF)"] = `${T_approx.toFixed(3)} s`;
    return out;
  },

  build(p, states) {
    const nMesh = Math.round(p.nMesh);
    const Lx = p.Lx, Ly = p.Ly, H = p.H;
    const dx = Lx / nMesh, dy = Ly / nMesh;

    // ─── Nodos ────────────────────────────────────────────────────────
    // Base: 4 nodos en las esquinas a z=0 (índices 0..3)
    // Losa: grid (nMesh+1)×(nMesh+1) a z=H (índices 4..)
    const nodes: Node[] = [];
    // Base nodes
    nodes.push([0, 0, 0]);       // 0: (0,0,0)
    nodes.push([Lx, 0, 0]);      // 1: (Lx,0,0)
    nodes.push([Lx, Ly, 0]);     // 2: (Lx,Ly,0)
    nodes.push([0, Ly, 0]);      // 3: (0,Ly,0)
    const N_BASE = 4;
    // Floor grid
    for (let j = 0; j <= nMesh; j++) {
      for (let i = 0; i <= nMesh; i++) {
        nodes.push([i * dx, j * dy, H]);
      }
    }
    const ix = (i: number, j: number) => N_BASE + j * (nMesh + 1) + i;

    // ─── Elementos ────────────────────────────────────────────────────
    const elements: Element[] = [];
    // Q4 floor shells (índices 0..nMesh²-1)
    for (let j = 0; j < nMesh; j++) {
      for (let i = 0; i < nMesh; i++) {
        elements.push([ix(i, j), ix(i + 1, j), ix(i + 1, j + 1), ix(i, j + 1)]);
      }
    }
    const shellCount = elements.length;

    // 4 columns: base → floor corners (subdiv 1 sólo, ETABS los discretiza
    // pero el modal con masa consistente sale igual con subdiv=1)
    elements.push([0, ix(0, 0)]);            // col SO (0,0)
    elements.push([1, ix(nMesh, 0)]);        // col SE (Lx,0)
    elements.push([2, ix(nMesh, nMesh)]);    // col NE (Lx,Ly)
    elements.push([3, ix(0, nMesh)]);        // col NO (0,Ly)
    const colStart = shellCount;
    const colEnd = elements.length;

    // 4 perimeter beams: discretizados según mesh para compartir nodos
    // Lado sur (y=0): j=0
    for (let i = 0; i < nMesh; i++) elements.push([ix(i, 0), ix(i + 1, 0)]);
    // Lado este (x=Lx): i=nMesh
    for (let j = 0; j < nMesh; j++) elements.push([ix(nMesh, j), ix(nMesh, j + 1)]);
    // Lado norte (y=Ly): j=nMesh
    for (let i = 0; i < nMesh; i++) elements.push([ix(i, nMesh), ix(i + 1, nMesh)]);
    // Lado oeste (x=0): i=0
    for (let j = 0; j < nMesh; j++) elements.push([ix(0, j), ix(0, j + 1)]);
    const beamStart = colEnd;
    const beamEnd = elements.length;

    // ─── Supports ────────────────────────────────────────────────────
    const supports = new Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>();
    if (p.apoyo < 0.5) {
      // Pinned base (ETABS UX UY UZ restraint, rotations free)
      supports.set(0, [true, true, true, false, false, false]);
      supports.set(1, [true, true, true, false, false, false]);
      supports.set(2, [true, true, true, false, false, false]);
      supports.set(3, [true, true, true, false, false, false]);
    } else {
      // Empotrado (6 DOF)
      supports.set(0, [true, true, true, true, true, true]);
      supports.set(1, [true, true, true, true, true, true]);
      supports.set(2, [true, true, true, true, true, true]);
      supports.set(3, [true, true, true, true, true, true]);
    }

    // ─── Cargas ──────────────────────────────────────────────────────
    // Carga uniforme SCP+Live → distribuir a nodos del piso vía apportionment
    // by area (CSI Manual Ch10), igual que membrana-csi.
    const q_kNm2 = (p.q_SCP + p.q_Live) * G;  // tonf/m² → kN/m²
    const loads = new Map<number, [number, number, number, number, number, number]>();
    for (let j = 0; j <= nMesh; j++) {
      for (let i = 0; i <= nMesh; i++) {
        const corner = (i === 0 || i === nMesh) && (j === 0 || j === nMesh);
        const edge = (i === 0 || i === nMesh || j === 0 || j === nMesh);
        const factor = corner ? 0.25 : edge ? 0.5 : 1.0;
        const Fz = -q_kNm2 * dx * dy * factor;
        loads.set(ix(i, j), [0, 0, Fz, 0, 0, 0]);
      }
    }

    // Excentricidad: P puntual concentrado en una esquina del piso (kN)
    if (p.pEcc > 0.01) {
      const corners = [ix(0, 0), ix(nMesh, 0), ix(nMesh, nMesh), ix(0, nMesh)];
      const cn = corners[Math.round(p.eccCorner) % 4];
      const prev = loads.get(cn) || [0, 0, 0, 0, 0, 0];
      const P_kN = p.pEcc * G;  // tonf → kN
      loads.set(cn, [prev[0], prev[1], prev[2] - P_kN, prev[3], prev[4], prev[5]]);
    }

    // ─── Element inputs ──────────────────────────────────────────────
    const E_kNm2 = p.E_GPa * 1e6;
    const Gmod = E_kNm2 / (2 * (1 + p.nu));
    const thicknesses = new Map<number, number>();
    const elasticities = new Map<number, number>();
    const poissons = new Map<number, number>();
    const areas = new Map<number, number>();
    const Iz = new Map<number, number>();
    const Iy = new Map<number, number>();
    const J = new Map<number, number>();
    const Gm = new Map<number, number>();
    const densities = new Map<number, number>();
    const sections = new Map<number, any>();

    // Shells losa
    for (let i = 0; i < shellCount; i++) {
      thicknesses.set(i, p.tLosa);
      elasticities.set(i, E_kNm2);
      poissons.set(i, p.nu);
      densities.set(i, RHO_CONC);
    }
    // Columnas C40×40
    const Ac = p.bCol * p.hCol;
    const Izc = (p.bCol * Math.pow(p.hCol, 3)) / 12;
    const Iyc = (p.hCol * Math.pow(p.bCol, 3)) / 12;
    const Jc = 0.28 * Math.min(p.bCol, p.hCol) * Math.pow(Math.max(p.bCol, p.hCol), 3);  // Saint-Venant aprox
    for (let i = colStart; i < colEnd; i++) {
      elasticities.set(i, E_kNm2);
      poissons.set(i, p.nu);
      Gm.set(i, Gmod);
      areas.set(i, Ac);
      // CRÍTICO (CLAUDE.md): para columnas verticales (eje +Z) en awatif,
      // local_x = Z global, momentsOfInertiaZ → eje débil (Iy AISC),
      // momentsOfInertiaY → eje fuerte (Iz AISC).
      Iz.set(i, Iyc);  // weak axis → swap
      Iy.set(i, Izc);
      J.set(i, Jc);
      densities.set(i, RHO_CONC);
      sections.set(i, { type: "rect", b: p.bCol, h: p.hCol });
    }
    // Vigas V30×50 perimetrales
    const Av = p.bViga * p.hViga;
    const Izv = (p.bViga * Math.pow(p.hViga, 3)) / 12;
    const Iyv = (p.hViga * Math.pow(p.bViga, 3)) / 12;
    const Jv = 0.28 * Math.min(p.bViga, p.hViga) * Math.pow(Math.max(p.bViga, p.hViga), 3);
    for (let i = beamStart; i < beamEnd; i++) {
      elasticities.set(i, E_kNm2);
      poissons.set(i, p.nu);
      Gm.set(i, Gmod);
      areas.set(i, Av);
      Iz.set(i, Izv);
      Iy.set(i, Iyv);
      J.set(i, Jv);
      densities.set(i, RHO_CONC);
      sections.set(i, { type: "rect", b: p.bViga, h: p.hViga });
    }

    states.nodes.val = nodes;
    states.elements.val = elements;
    states.nodeInputs.val = { supports, loads };
    states.elementInputs.val = {
      elasticities, poissonsRatios: poissons, shearModuli: Gm,
      areas, momentsOfInertiaZ: Iz, momentsOfInertiaY: Iy, torsionalConstants: J,
      thicknesses, densities, sectionShapes: sections,
    };

    // ─── Static analysis ───
    try {
      states.deformOutputs.val = deform(nodes, elements, { supports, loads }, states.elementInputs.val);
      states.analyzeOutputs.val = analyze(nodes, elements, states.elementInputs.val, states.deformOutputs.val);
      const maxDz = Math.max(...[...states.deformOutputs.val.deformations!.values()].map((d) => Math.abs(d[2])));
      console.log(
        `[Mesa torsión] ${Lx}×${Ly} m × ${H} m alto · q=${(p.q_SCP + p.q_Live).toFixed(2)} tonf/m²\n` +
        `  ${nodes.length} nodos · ${shellCount} shells losa · 4 cols · ${beamEnd - beamStart} segmentos viga\n` +
        `  Base ${p.apoyo < 0.5 ? "pinned (UX UY UZ)" : "empotrada"}\n` +
        `  δz_max = ${(maxDz * 1000).toFixed(3)} mm`,
      );
    } catch (e: any) {
      console.error("[Mesa torsión] static error:", e.message);
    }

    // Mostrar marcadores de CM y CR opcional (futuro)
    states.objects3D.val = [];
  },

  runModal(p, states, modalPanel) {
    if (!states.nodes.val.length) return;
    const nModos = Math.round(p.nModos);
    try {
      const out = modalAnalysis(
        states.nodes.val, states.elements.val,
        states.nodeInputs.val, states.elementInputs.val, nModos,
      );
      const report = [
        `[Mesa torsión — Modal Hekatan FEM 3D] ${nModos} modos:`,
        ...out.frequencies.slice(0, Math.min(nModos, 12)).map((f, i) => {
          const T = 1 / f;
          return `  Modo ${i + 1}: T = ${T.toFixed(4)} s   f = ${f.toFixed(3)} Hz   ω = ${(2 * Math.PI * f).toFixed(2)} rad/s`;
        }),
      ].join("\n");
      console.log(report);

      const refLines: string[] = [];
      if (ETABS_REF.T1_s !== null) refLines.push(`ETABS T₁ = ${ETABS_REF.T1_s} s`);
      if (ETABS_REF.T2_s !== null) refLines.push(`ETABS T₂ = ${ETABS_REF.T2_s} s`);
      if (ETABS_REF.T3_s !== null) refLines.push(`ETABS T₃ = ${ETABS_REF.T3_s} s (torsión)`);
      if (refLines.length === 0)
        refLines.push("Correr 15_mesa_torsion.py para llenar la referencia ETABS");

      if (modalPanel?.render) {
        modalPanel.render(out, {
          title: `Mesa de Torsión — ${p.Lx}×${p.Ly}m, ${p.H}m alto`,
          properties: [
            `${p.apoyo < 0.5 ? "Pinned base" : "Empotrado"}  ·  E=${p.E_GPa} GPa  ν=${p.nu}`,
            `C${(p.bCol * 100).toFixed(0)}×${(p.hCol * 100).toFixed(0)}  V${(p.bViga * 100).toFixed(0)}×${(p.hViga * 100).toFixed(0)}  losa t=${(p.tLosa * 100).toFixed(0)}cm`,
            `P excéntrico = ${p.pEcc} tonf en esquina ${["(0,0)", "(Lx,0)", "(Lx,Ly)", "(0,Ly)"][Math.round(p.eccCorner) % 4]}`,
            ...refLines,
          ],
        });
      }
    } catch (e: any) {
      console.error("[Mesa torsión Modal] error:", e.message);
    }
  },
};
