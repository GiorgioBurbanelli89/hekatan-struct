/**
 * NewBlank — lienzo en blanco para dibujar estructuras 2D / 3D con CAD.
 *
 * Patrón:
 *   1. El usuario abre el ejemplo y obtiene un viewer vacío con plano de
 *      trabajo XY (planta) o XZ (elevación) a Z=0.
 *   2. El folder Tweakpane "📐 Herramientas CAD" del workspace ya provee:
 *      tools (select/node/line/area), planos (XY/XZ/YZ), snap, cota Z,
 *      plantas de pisos, copiar a CLI.
 *   3. El usuario dibuja con mouse en el viewer. drawingPoints +
 *      drawingPolylines del workspace se sincronizan automáticamente al
 *      script CLI (van.derive en main.ts) y este ejemplo los lee para
 *      construir el FEM model.
 *   4. Tweakpane params expuestos aquí: secciones (b, h, E, material),
 *      modo dim (2D/3D), tipo de apoyo, cargas default verticales y
 *      laterales. Todo en Tweakpane.
 *
 * Diferencia con cad-draw: este ejemplo lee directo de drawingPoints +
 * drawingPolylines (Hekatan-native simple), expone params físicos
 * en Tweakpane (secciones/cargas/apoyos) y permite alternar 2D/3D con
 * un toggle. Es el "nuevo proyecto en blanco" de Hekatan.
 */
import { deform, type Node, type Element } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

const Ec = 25e6, nu_c = 0.2, Gc = Ec / (2 * (1 + nu_c)), rho_c = 24;
const Es = 200e6, nu_s = 0.3, Gs = Es / (2 * (1 + nu_s)), rho_s = 78;

// Helpers para params con folder
const P = (folder: string, label: string, def: number, min: number, max: number, step: number) =>
  ({ default: def, min, max, step, label, folder });
const PE = (folder: string, label: string, def: number, options: Record<string, number>) =>
  ({ default: def, label, folder, options });

export const newBlank: ExampleDef = {
  id: "new-blank",
  name: "📄 Archivo nuevo (lienzo CAD 2D/3D)",
  category: "Archivo nuevo",
  defaultShellResult: "none",
  availableShellResults: [],
  hasModal: false,
  params: {
    // ── Modo dimensión ──
    mode: PE("Modo", "Espacio de trabajo", 1, {
      "2D (plano XZ — elevación)": 0,
      "3D (espacial)":              1,
    }),

    // ── Sección por defecto para frames dibujados ──
    mat:   PE("Sección frames", "Material", 0, { "Hormigón": 0, "Acero": 1 }),
    bCol:  P("Sección frames", "b columna (m)", 0.40, 0.10, 1.00, 0.05),
    hCol:  P("Sección frames", "h columna (m)", 0.40, 0.10, 1.00, 0.05),
    bViga: P("Sección frames", "b viga (m)", 0.30, 0.10, 0.80, 0.05),
    hViga: P("Sección frames", "h viga (m)", 0.50, 0.10, 1.00, 0.05),

    // ── Sección por defecto para shells dibujados ──
    tShell: P("Sección shells", "Espesor shell (m)", 0.20, 0.05, 1.00, 0.01),
    matShell: PE("Sección shells", "Material shell", 0, { "Hormigón": 0, "Acero": 1 }),

    // ── Apoyos automáticos en nodos del nivel más bajo ──
    // Default = "Sin apoyo automático" — el lienzo arranca limpio. El
    // usuario configura los apoyos cuando termine de dibujar.
    apoyo: PE("Apoyos", "Tipo apoyo en Z mínimo", 3, {
      "Empotrado (6 DOFs)":         0,
      "Articulado (3 trans.)":      1,
      "Rótula (Ux,Uz, libre Uy/R)": 2,
      "Sin apoyo automático":       3,
    }),

    // ── Cargas por defecto en nodos del nivel más alto ──
    // Default OFF — el lienzo arranca limpio. El usuario activa cargas
    // explícitamente cuando ya tenga geometría dibujada.
    aplicarCargas: PE("Cargas", "Aplicar cargas auto", 0, { "Sí": 1, "No": 0 }),
    Fz: P("Cargas", "Fz vertical/nodo (kN)", -10, -200, 0, 1),
    Fx: P("Cargas", "Fx lateral/nodo (kN)", 0, -100, 100, 1),

    // ── Solver ──
    autoSolve: PE("Solver", "Auto-resolver", 1, { "Sí": 1, "No": 0 }),
  },

  build(p, states) {
    // ── Leer puntos, polilíneas y áreas dibujadas (workspace native drawing) ──
    // Ambos están en window globals (escritos por van.derive en
    // workspace/main.ts cada vez que el usuario hace click).
    const drawPoints: number[][] =
      ((window as any).__hekatanDrawingPoints?.val) ??
      ((window as any).__hekatanDrawingPoints) ??
      [];
    const drawPolylines: number[][] =
      ((window as any).__hekatanDrawingPolylines?.val) ??
      ((window as any).__hekatanDrawingPolylines) ??
      [];
    // drawingAreas: índices de polylines marcadas como ÁREA (shell Q4)
    // por el tool "area" explícito. NO inferido de geometría — una
    // polilínea cerrada con tool "polyline" sigue siendo una cadena
    // de frames (cercha/truss).
    const drawAreasArr: number[] =
      ((window as any).__hekatanDrawingAreas?.val) ??
      ((window as any).__hekatanDrawingAreas) ??
      [];
    const drawAreas = new Set<number>(drawAreasArr);

    // ── Si no hay nada dibujado, mostrar viewer vacío ──
    if (!drawPoints.length) {
      states.nodes.val = [];
      states.elements.val = [];
      states.nodeInputs.val = { supports: new Map(), loads: new Map() };
      states.elementInputs.val = {} as any;
      states.objects3D.val = [];
      console.log("[NewBlank] Lienzo vacío — usá el folder 📐 Herramientas CAD para dibujar.");
      return;
    }

    // ── Construir nodes ──
    // Modo 2D: aplastamos Y a 0 (todos los puntos en plano XZ).
    const is2D = Math.round(p.mode ?? 1) === 0;
    const nodes: Node[] = drawPoints.map((pt) =>
      is2D ? [pt[0], 0, pt[2]] : [pt[0], pt[1], pt[2]]
    );

    // ── Construir elements según tipo de polilínea ──
    // Polilínea NO marcada como área → cadena de frames (1D, columnas/vigas)
    // Polilínea marcada como área → shell Q4 (4 vértices, elemento 2D)
    const elements: Element[] = [];
    const colIdx = new Set<number>();
    const beamIdx = new Set<number>();
    const shellIdx = new Set<number>();
    for (let pi = 0; pi < drawPolylines.length; pi++) {
      const poly = drawPolylines[pi];
      if (drawAreas.has(pi)) {
        // ─ ÁREA → shell Q4 ─
        // El click handler cierra la polilínea agregando poly[0] al final,
        // así que poly = [v0, v1, v2, v3, v0]. Tomamos los 4 vértices únicos.
        const verts = poly.length === 5 ? poly.slice(0, 4) : poly.slice(0, Math.min(4, poly.length));
        if (verts.length !== 4) continue;
        if (verts.some(v => nodes[v] === undefined)) continue;
        const eIdx = elements.length;
        elements.push(verts as unknown as Element);
        shellIdx.add(eIdx);
      } else {
        // ─ POLILÍNEA o LÍNEA → cadena de frames ─
        for (let i = 0; i < poly.length - 1; i++) {
          const a = poly[i], b = poly[i + 1];
          if (a === b || nodes[a] === undefined || nodes[b] === undefined) continue;
          const eIdx = elements.length;
          elements.push([a, b]);
          // Heurística: frame vertical (Δz dominante) → columna; horizontal → viga
          const dx = nodes[b][0] - nodes[a][0];
          const dy = nodes[b][1] - nodes[a][1];
          const dz = nodes[b][2] - nodes[a][2];
          const isVert = Math.abs(dz) > Math.max(Math.abs(dx), Math.abs(dy));
          if (isVert) colIdx.add(eIdx);
          else beamIdx.add(eIdx);
        }
      }
    }

    // ── Properties por elemento (frames: I/J/A; shells: thickness) ──
    const matIdx = Math.round(p.mat ?? 0);
    const E_frm = matIdx === 0 ? Ec : Es;
    const G_frm = matIdx === 0 ? Gc : Gs;
    const nu_frm = matIdx === 0 ? nu_c : nu_s;
    const rho_frm = matIdx === 0 ? rho_c : rho_s;

    const matShellIdx = Math.round(p.matShell ?? 0);
    const E_sh = matShellIdx === 0 ? Ec : Es;
    const G_sh = matShellIdx === 0 ? Gc : Gs;
    const nu_sh = matShellIdx === 0 ? nu_c : nu_s;
    const rho_sh = matShellIdx === 0 ? rho_c : rho_s;

    const elasticities = new Map<number, number>();
    const shearModuli = new Map<number, number>();
    const areas = new Map<number, number>();
    const Iz = new Map<number, number>();
    const Iy = new Map<number, number>();
    const J = new Map<number, number>();
    const densities = new Map<number, number>();
    const poissons = new Map<number, number>();
    const thicknesses = new Map<number, number>();

    for (let i = 0; i < elements.length; i++) {
      if (shellIdx.has(i)) {
        // Shell Q4 — solo necesita E, G, nu, density y espesor
        elasticities.set(i, E_sh);
        shearModuli.set(i, G_sh);
        densities.set(i, rho_sh);
        poissons.set(i, nu_sh);
        thicknesses.set(i, (p.tShell ?? 0.20) as number);
      } else {
        // Frame 1D — propiedades de sección rectangular
        const isCol = colIdx.has(i);
        const b = isCol ? p.bCol : p.bViga;
        const h = isCol ? p.hCol : p.hViga;
        const A = b * h;
        const Iz_ = (h * Math.pow(b, 3)) / 12;
        const Iy_ = (b * Math.pow(h, 3)) / 12;
        const J_ = 0.14 * Math.pow(Math.min(b, h), 4);
        elasticities.set(i, E_frm);
        shearModuli.set(i, G_frm);
        areas.set(i, A);
        Iz.set(i, Iz_);
        Iy.set(i, Iy_);
        J.set(i, J_);
        densities.set(i, rho_frm);
        poissons.set(i, nu_frm);
      }
    }

    // ── Apoyos automáticos en nodos del Z mínimo ──
    const apoyoMode = Math.round(p.apoyo ?? 0);
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
    if (nodes.length > 0 && apoyoMode !== 3) {
      const zMin = Math.min(...nodes.map(n => n[2]));
      const sDofs: [boolean,boolean,boolean,boolean,boolean,boolean] =
        apoyoMode === 0 ? [true, true, true, true,  true,  true]  : // empotrado
        apoyoMode === 1 ? [true, true, true, false, false, false] : // articulado
                          [true, false, true, false, false, false]; // rótula
      for (let i = 0; i < nodes.length; i++) {
        if (Math.abs(nodes[i][2] - zMin) < 1e-6) supports.set(i, [...sDofs]);
      }
    }

    // ── Cargas automáticas en nodos del Z máximo ──
    const loads = new Map<number, [number,number,number,number,number,number]>();
    if (Math.round(p.aplicarCargas ?? 1) === 1 && nodes.length > 0) {
      const zMax = Math.max(...nodes.map(n => n[2]));
      const Fx = (p.Fx ?? 0) as number;
      const Fz = (p.Fz ?? -10) as number;
      for (let i = 0; i < nodes.length; i++) {
        if (Math.abs(nodes[i][2] - zMax) < 1e-6) loads.set(i, [Fx, 0, Fz, 0, 0, 0]);
      }
    }

    states.nodes.val = nodes;
    states.elements.val = elements;
    states.nodeInputs.val = { supports, loads };
    states.elementInputs.val = {
      elasticities, shearModuli, areas,
      momentsOfInertiaZ: Iz, momentsOfInertiaY: Iy,
      torsionalConstants: J, densities, poissonsRatios: poissons,
      thicknesses,
    } as any;
    states.objects3D.val = [];

    // ── Auto-solve si hay apoyos + cargas + elementos ──
    if (
      Math.round(p.autoSolve ?? 1) === 1 &&
      nodes.length > 0 &&
      elements.length > 0 &&
      supports.size > 0 &&
      loads.size > 0
    ) {
      try {
        states.deformOutputs.val = deform(
          nodes, elements,
          { supports, loads },
          states.elementInputs.val,
        );
        console.log(`[NewBlank] Solve OK — ${nodes.length} nodos, ${elements.length} elementos, ${supports.size} apoyos, ${loads.size} cargas`);
      } catch (e: any) {
        console.warn(`[NewBlank] Solver falló: ${e.message}`);
      }
    } else {
      console.log(
        `[NewBlank] mode=${is2D ? "2D" : "3D"} | nodes=${nodes.length} elem=${elements.length} ` +
        `cols=${colIdx.size} vigas=${beamIdx.size} shells=${shellIdx.size} ` +
        `apoyos=${supports.size} cargas=${loads.size}`,
      );
    }
  },

  computedLabels(p, states) {
    const out: Record<string, string> = {};
    const ns = states.nodes.val.length;
    const es = states.elements.val.length;
    let frames = 0, shells = 0;
    for (const e of states.elements.val) {
      if ((e as number[]).length === 4) shells++;
      else frames++;
    }
    out["Stats"] = `${ns} nodos · ${frames} frames · ${shells} shells`;
    if (ns === 0) {
      out["💡 Tip"] = "Línea = 2 clicks · Polilínea = N clicks + click derecho · Área = 4 clicks";
    }
    return out;
  },
};
