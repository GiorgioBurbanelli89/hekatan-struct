/**
 * Edificio Aporticado — Pórtico 3D con parámetros completos estilo FEM Studio.
 * Organizado en folders: Geometría / Luces / Alturas / Secciones / Apoyo / Cargas / Avanzado.
 */
import { deform, analyze, modalAnalysis, type Node, type Element } from "awatif-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";
import { buildEdificioCotas, makeLabel } from "../shared/cotas3D";
import { etabsDiscretize, DISCRETIZE_OPTIONS } from "../shared/etabsDiscretization";
import { addRigidDiaphragms, mergeDiaphragmProps } from "../shared/rigidDiaphragm";
import { computeHinges, buildHingeObjects3D, summarizeHinges } from "../shared/plasticHinges";

const rho_c = 24;

// Helper para crear params con folder
const P = (folder: string, label: string, def: number, min: number, max: number, step: number) =>
  ({ default: def, min, max, step, label, folder });
const PE = (folder: string, label: string, def: number, options: Record<string, number>) =>
  ({ default: def, label, folder, options });

export const edificioAporticado: ExampleDef = {
  id: "edificio-aporticado",
  name: "Edificio Aporticado",
  category: "Edificios",
  // Edificio aporticado tiene SOLO elementos 1D (columnas + vigas). No hay shell/plate.
  // Por eso no se ofrece shell colormap — las opciones membrane/bending/displacement
  // del dropdown aplican solo a placas Q4, y aquí darían 0 o valores irrelevantes.
  defaultShellResult: "none",
  availableShellResults: [],
  hasModal: true,
  params: {
    // ── Geometría ──
    // Params estructurales: al cambiarlos, el workspace regenera los dynamicParams
    // (Secciones por piso, Alturas por piso, Luces por vano).
    nVanosX:  { ...P("Geometría", "Vanos X", 2, 1, 6, 1), regenOnChange: true },
    nVanosY:  { ...P("Geometría", "Vanos Y", 2, 1, 6, 1), regenOnChange: true },
    nPisos:   { ...P("Geometría", "N. Pisos", 3, 1, 8, 1), regenOnChange: true },
    spanX:    P("Geometría", "Luz X uniforme (m)", 5.0, 2, 12, 0.5),
    spanY:    P("Geometría", "Luz Y uniforme (m)", 5.0, 2, 12, 0.5),
    hPiso:    P("Geometría", "h piso uniforme (m)", 3.0, 2, 5, 0.1),
    Lvix:     P("Geometría", "Voladizo izq X (m)", 0, 0, 3, 0.25),
    Lvdx:     P("Geometría", "Voladizo der X (m)", 0, 0, 3, 0.25),
    Lviy:     P("Geometría", "Voladizo izq Y (m)", 0, 0, 3, 0.25),
    Lvdy:     P("Geometría", "Voladizo der Y (m)", 0, 0, 3, 0.25),

    // Luces por vano y Alturas por piso ahora son DINÁMICAS (dynamicParams).
    // Solo se muestran svX_1..svX_{nVanosX}, svY_1..svY_{nVanosY}, hP_1..hP_{nPisos}.
    hP_7:     P("Alturas por piso", "Piso 7 (m)", 0, 0, 6, 0.1),
    hP_8:     P("Alturas por piso", "Piso 8 (m)", 0, 0, 6, 0.1),

    // ── Secciones globales (fallback si per-piso es 0) ──
    matCol:   PE("Secciones (global)", "Material columna", 0, { "Hormigón": 0, "Acero W": 1 }),
    matViga:  PE("Secciones (global)", "Material viga",    0, { "Hormigón": 0, "Acero W": 1 }),
    colShape: PE("Secciones (global)", "Forma columna", 0, { "Rectangular": 0, "Circular": 1 }),
    fcConcr:  P("Secciones (global)", "f'c hormigón (kg/cm²)", 240, 140, 420, 10),
    fyAcero:  P("Secciones (global)", "fy acero (kg/cm²)", 2530, 1800, 4200, 100),
    colSize:  P("Secciones (global)", "b×h columna (m)", 0.40, 0.25, 0.80, 0.05),
    vigaB:    P("Secciones (global)", "b viga (m)", 0.30, 0.20, 0.60, 0.05),
    vigaH:    P("Secciones (global)", "h viga (m)", 0.50, 0.30, 0.90, 0.05),

    // NOTA: las secciones por piso (colB_pN, colH_pN, vigaB_pN, vigaH_pN)
    // ahora se generan dinámicamente via `dynamicParams(currentParams)` más
    // abajo — SOLO se muestran los sliders de los pisos que realmente existen
    // según nPisos. Ya no hay slots fantasma colB_8 cuando el edificio tiene 3 pisos.

    // ── Apoyo ──
    apoyo:    PE("Apoyo", "Tipo", 0, { "Empotrado": 0, "Articulado (3 DOFs)": 1, "Rótula completa": 2 }),

    // ── Cargas (patrones tipo FEM Studio) ──
    CM:       P("Cargas", "CM (kN/nodo)", -5,   -30, 0,    0.5),
    CV:       P("Cargas", "CV (kN/nodo)", -2,   -20, 0,    0.5),
    Ex:       P("Cargas", "Ex sismo tope (kN)", 50,  0,   500, 10),
    Ey:       P("Cargas", "Ey sismo tope (kN)", 0,   0,   500, 10),

    // ── Avanzado ──
    nSubViga: P("Avanzado", "Div. vigas", 1, 1, 6, 1),
    nSubCol:  P("Avanzado", "Div. columnas", 1, 1, 4, 1),
    vSecOn:   PE("Avanzado", "Vigas secundarias",  0, { "Off": 0, "On": 1 }),
    nVSec:    P("Avanzado", "N° vigas sec. por vano", 2, 1, 5, 1),
    vSecDir:  PE("Avanzado", "Dir secundarias",  0, { "X": 0, "Y": 1 }),
    bracesMode: PE("Avanzado", "Diagonales", 0, { "ninguna": 0, "perimetrales": 1, "todas": 2, "solo X": 3, "solo Y": 4 }),
    slabOn:   PE("Avanzado", "Losa",  0, { "Off": 0, "On": 1 }),
    slabT:    P("Avanzado", "t losa (m)", 0.15, 0.08, 0.30, 0.01),
    // ── Tipo de losa según ETABS (Property Modifiers en CSI Manual §10.7) ──
    //   Shell completo:  M=1, B=1   (membrana + flexión, default ETABS)
    //   Membrane only:   M=1, B=0   (solo in-plane, suprime modos verticales)
    //   Plate only:      M=0, B=1   (solo flexión, raro en edificios)
    slabType: PE("Avanzado", "Tipo losa (ETABS)", 0, {
      "Shell (membrane+plate)": 0,
      "Membrane only": 1,
      "Plate only": 2,
    }),
    // Discretización automática ETABS-style: la losa se subdivide por paño
    // (por bay) al tamaño objetivo seleccionado. 25-50 cm replica el default
    // interno de ETABS; 15 cm es análisis fino; 0 fuerza Q4 único por paño.
    slabDisc: PE("Avanzado", "Discretización losa", 0.50, DISCRETIZE_OPTIONS),
    // Diafragma rígido (ASCE/SEI 7-22 §12.3.1 + NEC-SE-DS §6.2): une todos los
    // nodos del piso vía rigid links al centroide. Reduce DOFs laterales del piso
    // a 3 (Ux, Uy, Rz_master), modelando la losa como placa in-plane rígida.
    // ON = asunto típico cuando la losa puede considerarse rígida (losa maciza,
    // losa reticular con vigas profundas). OFF = diafragma flexible (losa delgada
    // con muros de corte discontínuos — ver ASCE 7-22 §12.3.1.2).
    diafragmaRigido: PE("Avanzado", "Diafragma rígido", 0, { "Flexible": 0, "Rígido (ASCE 7-22)": 1 }),
    // ── Modelado de masa estilo ETABS / SAP2000 ──
    // Self-weight: ρ·V de TODOS los elementos (default Hekatan, MÁS masa)
    // From loads: DEAD + 0.25·LIVE como AREALOAD (default ETABS, MENOS masa)
    massSource: PE("Avanzado", "Mass Source", 0, {
      "Self-weight (peso propio)": 0,
      "From Loads (DEAD+0.25·LIVE) ETABS": 1,
    }),
    qDead:  P("Avanzado", "qDead losa (kN/m²)", 3.5, 0.5, 10, 0.5),
    qLive:  P("Avanzado", "qLive losa (kN/m²)", 1.5, 0.0, 6, 0.5),
    // ── Cracked Section Modifiers ACI 318-22 §6.6.3.1.1 ──
    // ETABS los aplica AUTOMÁTICAMENTE en hormigón. Reducen rigidez efectiva
    // simulando fisuración bajo cargas de servicio sismicas.
    crackedSections: PE("Avanzado", "Cracked Sections (ACI 318)", 0, {
      "Off (sección bruta Ig)": 0,
      "On: 0.7·Ig col / 0.35·Ig viga / 0.25·Ig losa": 1,
    }),
  },
  /**
   * Genera sliders dinámicos SOLO para los pisos/vanos que realmente existen.
   * Si nPisos=3 y nVanosX=2 y nVanosY=3, retorna:
   *   - hP_1, hP_2, hP_3                   (alturas por piso)
   *   - svX_1, svX_2                        (luces vano X)
   *   - svY_1, svY_2, svY_3                 (luces vano Y)
   *   - colB_p1..colB_p3, colH_p1..colH_p3  (secciones columnas por piso)
   *   - vigaB_p1..vigaB_p3, vigaH_p1..vigaH_p3 (secciones vigas por piso)
   * Al subir nPisos a 5, se agregan hP_4, hP_5, colB_p4, colB_p5, etc.
   * Al bajar a 2, desaparecen los sliders sobrantes (solo quedan hP_1, hP_2).
   */
  dynamicParams(cur) {
    const out: Record<string, any> = {};
    const nP = Math.round(cur.nPisos ?? 3);
    const nVX = Math.round(cur.nVanosX ?? 2);
    const nVY = Math.round(cur.nVanosY ?? 2);
    for (let i = 1; i <= nP; i++) {
      out[`hP_${i}`]    = P("Alturas por piso", `h Piso ${i} (m)`, 0, 0, 6, 0.1);
      out[`colB_p${i}`] = P("Secciones por piso", `b col P${i} (m)`, 0, 0, 1.0, 0.05);
      out[`colH_p${i}`] = P("Secciones por piso", `h col P${i} (m)`, 0, 0, 1.0, 0.05);
      out[`vigaB_p${i}`] = P("Secciones por piso", `b viga P${i} (m)`, 0, 0, 0.8, 0.05);
      out[`vigaH_p${i}`] = P("Secciones por piso", `h viga P${i} (m)`, 0, 0, 1.0, 0.05);
    }
    for (let i = 1; i <= nVX; i++) out[`svX_${i}`] = P("Luces por vano", `svX #${i} (m)`, 0, 0, 12, 0.5);
    for (let i = 1; i <= nVY; i++) out[`svY_${i}`] = P("Luces por vano", `svY #${i} (m)`, 0, 0, 12, 0.5);
    return out;
  },
  /**
   * Muestra las reacciones máximas en apoyos (z=0) en tonf.
   * Estas son las que el ingeniero debe copiar manualmente a zapata-aislada /
   * zapata-viga-amarre para diseñar la cimentación por separado (buena práctica:
   * NO modelar edificio+zapata juntos — se desacoplan por rigidez infinita asumida).
   */
  computedLabels(p, states) {
    const TONF_TO_KN = 9.80665;
    const reactions = (states.deformOutputs.rawVal as any)?.reactions as
      Map<number, [number, number, number, number, number, number]> | undefined;
    const nodes = states.nodes.rawVal as number[][];
    if (!reactions || !nodes?.length) {
      return { "Reacciones (→ zapatas)": "—" };
    }
    // Buscar máximos en apoyos (nodos con z≈0)
    let maxFz = 0, maxMx = 0, maxMy = 0;
    let maxFz_nodo = -1, maxFz_xy: [number, number] = [0, 0];
    let minFz = 0, minFz_nodo = -1;
    reactions.forEach((r, idx) => {
      const n = nodes[idx];
      if (!n || Math.abs(n[2]) > 1e-6) return;   // sólo apoyos z=0
      const Fz = r[2], Mx = r[3], My = r[4];
      if (Math.abs(Fz) > Math.abs(maxFz)) { maxFz = Fz; maxFz_nodo = idx; maxFz_xy = [n[0], n[1]]; }
      if (Fz > 0 && Fz > Math.abs(minFz)) { minFz = Fz; minFz_nodo = idx; }   // tracción (uplift)
      if (Math.abs(Mx) > Math.abs(maxMx)) maxMx = Mx;
      if (Math.abs(My) > Math.abs(maxMy)) maxMy = My;
    });
    const P_tonf = Math.abs(maxFz) / TONF_TO_KN;
    const Mx_tonf = Math.abs(maxMx) / TONF_TO_KN;
    const My_tonf = Math.abs(maxMy) / TONF_TO_KN;
    const uplift_tonf = minFz / TONF_TO_KN;
    const nPisos = Math.round(p.nPisos);
    const result: Record<string, string> = {
      "── Reacciones máx (→ zapatas) ──": "",
      "P (compresión)": `${P_tonf.toFixed(2)} tonf (nodo ${maxFz_nodo})`,
      "Mx": `${Mx_tonf.toFixed(2)} tonf·m`,
      "My": `${My_tonf.toFixed(2)} tonf·m`,
    };
    if (uplift_tonf > 0.01) result["⚠ Uplift"] = `${uplift_tonf.toFixed(2)} tonf (nodo ${minFz_nodo})`;
    result["Pisos"] = `${nPisos}`;
    result["Copiar a → zapata-aislada"] = `P=${P_tonf.toFixed(1)}, Mx=${Mx_tonf.toFixed(1)}, My=${My_tonf.toFixed(1)}`;

    // ── Rótulas plásticas (ASCE 41-17 / FEMA 356) ──
    const hingeCounts = (states as any).__plasticHinges as Record<string, number> | undefined;
    if (hingeCounts) {
      const total = (hingeCounts.B ?? 0) + (hingeCounts.IO ?? 0) + (hingeCounts.LS ?? 0) + (hingeCounts.CP ?? 0);
      result["── Rótulas plásticas (ASCE 41-17) ──"] = "";
      result["🟢 Elástico"] = `${hingeCounts.Elastic ?? 0}`;
      result["🟡 B — Yield"] = `${hingeCounts.B ?? 0}`;
      result["🟠 IO — Immed.Occ."] = `${hingeCounts.IO ?? 0}`;
      result["🔴 LS — Life Safety"] = `${hingeCounts.LS ?? 0}`;
      result["⚫ CP — Collapse Prev."] = `${hingeCounts.CP ?? 0}`;
      result["Total rótulas formadas"] = `${total}`;
    }
    return result;
  },
  build(p, states) {
    const nvx = Math.round(p.nVanosX);
    const nvy = Math.round(p.nVanosY);
    const np  = Math.round(p.nPisos);
    const nSubViga = Math.max(1, Math.round(p.nSubViga));
    const nSubCol  = Math.max(1, Math.round(p.nSubCol));

    // Material propiedades (kN/m²)
    const fc_MPa = p.fcConcr * 0.0981;  // kg/cm² → MPa
    const Ec = 4700 * Math.sqrt(fc_MPa) * 1000;   // ACI: E = 4700√f'c MPa → kN/m²
    const Es = 200e6;                              // acero W
    const nu_c = 0.2, nu_s = 0.3;
    const Gc = Ec / (2 * (1 + nu_c));
    const Gs = Es / (2 * (1 + nu_s));

    // Arrays de luces individuales
    const svX = [p.svX_1, p.svX_2, p.svX_3, p.svX_4, p.svX_5, p.svX_6]
      .slice(0, nvx).map(v => (v > 0 ? v : p.spanX));
    const svY = [p.svY_1, p.svY_2, p.svY_3, p.svY_4, p.svY_5, p.svY_6]
      .slice(0, nvy).map(v => (v > 0 ? v : p.spanY));
    const hpisos = [p.hP_1, p.hP_2, p.hP_3, p.hP_4, p.hP_5, p.hP_6, p.hP_7, p.hP_8]
      .slice(0, np).map(v => (v > 0 ? v : p.hPiso));

    // Grid coords
    const xCoords: number[] = [];
    if (p.Lvix > 0) xCoords.push(-p.Lvix);
    xCoords.push(0);
    for (let i = 0; i < nvx; i++) xCoords.push(xCoords[xCoords.length - 1] + svX[i]);
    if (p.Lvdx > 0) xCoords.push(xCoords[xCoords.length - 1] + p.Lvdx);

    const yCoords: number[] = [];
    if (p.Lviy > 0) yCoords.push(-p.Lviy);
    yCoords.push(0);
    for (let i = 0; i < nvy; i++) yCoords.push(yCoords[yCoords.length - 1] + svY[i]);
    if (p.Lvdy > 0) yCoords.push(yCoords[yCoords.length - 1] + p.Lvdy);

    const zCoords: number[] = [0];
    for (let i = 0; i < np; i++) zCoords.push(zCoords[zCoords.length - 1] + hpisos[i]);

    const isCantTipX = (ix: number) => (p.Lvix > 0 && ix === 0) || (p.Lvdx > 0 && ix === xCoords.length - 1);
    const isCantTipY = (iy: number) => (p.Lviy > 0 && iy === 0) || (p.Lvdy > 0 && iy === yCoords.length - 1);
    const isCantTip = (ix: number, iy: number) => isCantTipX(ix) || isCantTipY(iy);

    // Nodos
    const nodes: Node[] = [];
    const nid: Record<string, number> = {};
    for (let iz = 0; iz < zCoords.length; iz++)
      for (let iy = 0; iy < yCoords.length; iy++)
        for (let ix = 0; ix < xCoords.length; ix++) {
          if (iz === 0 && isCantTip(ix, iy)) continue;
          nid[`${ix},${iy},${iz}`] = nodes.length;
          nodes.push([xCoords[ix], yCoords[iy], zCoords[iz]]);
        }

    // Elementos
    const elements: Element[] = [];
    const colIdx = new Set<number>();
    const beamIdx = new Set<number>();
    const slabIdx = new Set<number>();
    // Map de floor por elemento (0 = primer piso, etc.) para aplicar secciones por piso
    const elementFloor = new Map<number, number>();

    const addSub = (ni: number, nj: number, nSub: number, bucket: Set<number>, floor: number) => {
      if (nSub <= 1) {
        bucket.add(elements.length);
        elementFloor.set(elements.length, floor);
        elements.push([ni, nj]); return;
      }
      const p0 = nodes[ni], p1 = nodes[nj];
      let prev = ni;
      for (let k = 1; k < nSub; k++) {
        const t = k / nSub;
        const midIdx = nodes.length;
        nodes.push([p0[0]+(p1[0]-p0[0])*t, p0[1]+(p1[1]-p0[1])*t, p0[2]+(p1[2]-p0[2])*t]);
        bucket.add(elements.length);
        elementFloor.set(elements.length, floor);
        elements.push([prev, midIdx]);
        prev = midIdx;
      }
      bucket.add(elements.length);
      elementFloor.set(elements.length, floor);
      elements.push([prev, nj]);
    };

    // Columnas (floor = iz, donde iz=0 es entre base y piso 1)
    for (let iz = 0; iz < zCoords.length - 1; iz++)
      for (let iy = 0; iy < yCoords.length; iy++)
        for (let ix = 0; ix < xCoords.length; ix++) {
          if (isCantTip(ix, iy)) continue;
          addSub(nid[`${ix},${iy},${iz}`], nid[`${ix},${iy},${iz + 1}`], nSubCol, colIdx, iz);
        }
    // Vigas X (floor = iz-1, donde iz=1 es piso 1)
    for (let iz = 1; iz < zCoords.length; iz++)
      for (let iy = 0; iy < yCoords.length; iy++)
        for (let ix = 0; ix < xCoords.length - 1; ix++)
          addSub(nid[`${ix},${iy},${iz}`], nid[`${ix + 1},${iy},${iz}`], nSubViga, beamIdx, iz - 1);
    // Vigas Y
    for (let iz = 1; iz < zCoords.length; iz++)
      for (let ix = 0; ix < xCoords.length; ix++)
        for (let iy = 0; iy < yCoords.length - 1; iy++)
          addSub(nid[`${ix},${iy},${iz}`], nid[`${ix},${iy + 1},${iz}`], nSubViga, beamIdx, iz - 1);

    // Vigas secundarias
    if (p.vSecOn >= 0.5 && p.nVSec >= 1) {
      const nVSec = Math.round(p.nVSec);
      const findOrCreateNode = (x: number, y: number, z: number): number => {
        for (let ni = 0; ni < nodes.length; ni++) {
          if (Math.abs(nodes[ni][0]-x)<1e-6 && Math.abs(nodes[ni][1]-y)<1e-6 && Math.abs(nodes[ni][2]-z)<1e-6) return ni;
        }
        const idx = nodes.length; nodes.push([x, y, z]); return idx;
      };
      const dir = p.vSecDir < 0.5 ? 'x' : 'y';
      for (let iz = 1; iz < zCoords.length; iz++) {
        if (dir === 'x') {
          for (let by = 0; by < yCoords.length - 1; by++) {
            const y0 = yCoords[by], y1 = yCoords[by + 1];
            for (let k = 1; k <= nVSec; k++) {
              const ySec = y0 + k/(nVSec + 1) * (y1 - y0);
              const secNodes: number[] = [];
              for (let ix = 0; ix < xCoords.length; ix++)
                secNodes.push(findOrCreateNode(xCoords[ix], ySec, zCoords[iz]));
              for (let ix = 0; ix < xCoords.length - 1; ix++) {
                beamIdx.add(elements.length);
                elements.push([secNodes[ix], secNodes[ix + 1]]);
              }
            }
          }
        } else {
          for (let bx = 0; bx < xCoords.length - 1; bx++) {
            const x0 = xCoords[bx], x1 = xCoords[bx + 1];
            for (let k = 1; k <= nVSec; k++) {
              const xSec = x0 + k/(nVSec + 1) * (x1 - x0);
              const secNodes: number[] = [];
              for (let iy = 0; iy < yCoords.length; iy++)
                secNodes.push(findOrCreateNode(xSec, yCoords[iy], zCoords[iz]));
              for (let iy = 0; iy < yCoords.length - 1; iy++) {
                beamIdx.add(elements.length);
                elements.push([secNodes[iy], secNodes[iy + 1]]);
              }
            }
          }
        }
      }
    }

    // Diagonales
    const bm = Math.round(p.bracesMode);
    if (bm > 0) {
      const addBrX = bm === 1 || bm === 2 || bm === 3;
      const addBrY = bm === 1 || bm === 2 || bm === 4;
      const nfBr = zCoords.length - 1;
      for (let iz = 0; iz < nfBr; iz++) {
        if (addBrX) {
          for (let iy = 0; iy < yCoords.length; iy++) {
            if (bm === 1 && iy !== 0 && iy !== yCoords.length - 1) continue;
            const midBay = Math.floor((xCoords.length - 1) / 2);
            for (let ix = 0; ix < xCoords.length - 1; ix++) {
              if (bm === 1 && ix !== midBay) continue;
              if (isCantTip(ix, iy) || isCantTip(ix+1, iy)) continue;
              const n0 = nid[`${ix},${iy},${iz}`], n1 = nid[`${ix+1},${iy},${iz+1}`];
              const n2 = nid[`${ix+1},${iy},${iz}`], n3 = nid[`${ix},${iy},${iz+1}`];
              if (n0 !== undefined && n1 !== undefined) elements.push([n0, n1]);
              if (n2 !== undefined && n3 !== undefined) elements.push([n2, n3]);
            }
          }
        }
        if (addBrY) {
          for (let ix = 0; ix < xCoords.length; ix++) {
            if (bm === 1 && ix !== 0 && ix !== xCoords.length - 1) continue;
            const midBay = Math.floor((yCoords.length - 1) / 2);
            for (let iy = 0; iy < yCoords.length - 1; iy++) {
              if (bm === 1 && iy !== midBay) continue;
              if (isCantTip(ix, iy) || isCantTip(ix, iy+1)) continue;
              const n0 = nid[`${ix},${iy},${iz}`], n1 = nid[`${ix},${iy+1},${iz+1}`];
              const n2 = nid[`${ix},${iy+1},${iz}`], n3 = nid[`${ix},${iy},${iz+1}`];
              if (n0 !== undefined && n1 !== undefined) elements.push([n0, n1]);
              if (n2 !== undefined && n3 !== undefined) elements.push([n2, n3]);
            }
          }
        }
      }
    }

    // Losas
    if (p.slabOn >= 0.5) {
      const nodeIndex = new Map<string, number>();
      const nodeKey = (x: number, y: number, z: number) => `${Math.round(x*10000)},${Math.round(y*10000)},${Math.round(z*10000)}`;
      for (let ni = 0; ni < nodes.length; ni++) nodeIndex.set(nodeKey(nodes[ni][0], nodes[ni][1], nodes[ni][2]), ni);
      // Discretización ETABS-style: cada paño (bay) se mallado por separado
      // usando el tamaño objetivo que el usuario eligió en "Discretización losa".
      // Paños grandes → más elementos; paños pequeños → menos. Coherente con ETABS.
      const slabTarget = p.slabDisc > 0 ? p.slabDisc : 0.50;
      for (let iz = 1; iz < zCoords.length; iz++) {
        const z = zCoords[iz];
        for (let bx = 0; bx < xCoords.length - 1; bx++)
          for (let by = 0; by < yCoords.length - 1; by++) {
            const x0 = xCoords[bx], x1 = xCoords[bx + 1];
            const y0 = yCoords[by], y1 = yCoords[by + 1];
            // Discretización por paño según tamaño objetivo
            const { n: nSx } = etabsDiscretize(Math.abs(x1 - x0), slabTarget);
            const { n: nSy } = etabsDiscretize(Math.abs(y1 - y0), slabTarget);
            const grid: number[][] = [];
            for (let jr = 0; jr <= nSy; jr++) {
              const row: number[] = [];
              for (let jc = 0; jc <= nSx; jc++) {
                const x = x0 + jc/nSx * (x1 - x0);
                const y = y0 + jr/nSy * (y1 - y0);
                const key = nodeKey(x, y, z);
                const found = nodeIndex.get(key);
                if (found !== undefined) row.push(found);
                else {
                  const ni = nodes.length; nodes.push([x, y, z]); nodeIndex.set(key, ni); row.push(ni);
                }
              }
              grid.push(row);
            }
            for (let jr = 0; jr < nSy; jr++)
              for (let jc = 0; jc < nSx; jc++) {
                slabIdx.add(elements.length);
                elements.push([grid[jr][jc], grid[jr][jc+1], grid[jr+1][jc+1], grid[jr+1][jc]]);
              }
          }
      }
    }

    // Supports según tipo de apoyo
    const apoyo = Math.round(p.apoyo);
    const sDofs: [boolean,boolean,boolean,boolean,boolean,boolean] =
      apoyo === 0 ? [true,true,true,true,true,true] :           // empotrado
      apoyo === 1 ? [true,true,true,false,false,false] :        // articulado (solo translaciones)
      [true,true,true,false,false,false];                        // rótula = articulado visual
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
    for (let iy = 0; iy < yCoords.length; iy++)
      for (let ix = 0; ix < xCoords.length; ix++) {
        if (isCantTip(ix, iy)) continue;
        supports.set(nid[`${ix},${iy},0`], [...sDofs]);
      }

    // Loads: CM + CV vertical por nodo, Ex/Ey en esquina superior
    const loads = new Map<number, [number,number,number,number,number,number]>();
    const vertNodo = p.CM + p.CV;
    if (vertNodo !== 0) {
      for (let iz = 1; iz < zCoords.length; iz++)
        for (let iy = 0; iy < yCoords.length; iy++)
          for (let ix = 0; ix < xCoords.length; ix++) {
            const k = `${ix},${iy},${iz}`;
            if (nid[k] !== undefined) loads.set(nid[k], [0, 0, vertNodo, 0, 0, 0]);
          }
    }
    if (p.Ex !== 0 || p.Ey !== 0) {
      const top = nid[`${xCoords.length-1-(p.Lvdx>0?1:0)},${p.Lviy>0?1:0},${np}`];
      if (top !== undefined) {
        const prev = loads.get(top) ?? [0, 0, 0, 0, 0, 0];
        loads.set(top, [prev[0] + p.Ex, prev[1] + p.Ey, prev[2], prev[3], prev[4], prev[5]]);
      }
    }

    // ── Secciones por piso (fallback al global si el per-piso es 0) ──
    const colB_piso = [p.colB_1, p.colB_2, p.colB_3, p.colB_4, p.colB_5, p.colB_6, p.colB_7, p.colB_8]
      .map(v => (v > 0 ? v : p.colSize));
    const colH_piso = [p.colH_1, p.colH_2, p.colH_3, p.colH_4, p.colH_5, p.colH_6, p.colH_7, p.colH_8]
      .map(v => (v > 0 ? v : p.colSize));
    const vigaB_piso = [p.vigaB_1, p.vigaB_2, p.vigaB_3, p.vigaB_4, p.vigaB_5, p.vigaB_6, p.vigaB_7, p.vigaB_8]
      .map(v => (v > 0 ? v : p.vigaB));
    const vigaH_piso = [p.vigaH_1, p.vigaH_2, p.vigaH_3, p.vigaH_4, p.vigaH_5, p.vigaH_6, p.vigaH_7, p.vigaH_8]
      .map(v => (v > 0 ? v : p.vigaH));

    // Helpers per-floor
    const colPropsAt = (floor: number) => {
      const b = colB_piso[floor] ?? p.colSize, h = colH_piso[floor] ?? p.colSize;
      return { A: b*h, Iz: (b*h**3)/12, Iy: (h*b**3)/12, J: 0.14 * Math.pow(Math.min(b,h), 4) };
    };
    const vigaPropsAt = (floor: number) => {
      const b = vigaB_piso[floor] ?? p.vigaB, h = vigaH_piso[floor] ?? p.vigaH;
      return { A: b*h, Iz: (b*h**3)/12, Iy: (h*b**3)/12, J: 0.21 * Math.pow(Math.min(b,h), 3) * Math.max(b,h) };
    };

    const matColE = p.matCol < 0.5 ? Ec : Es;
    const matColG = p.matCol < 0.5 ? Gc : Gs;
    const matColNu = p.matCol < 0.5 ? nu_c : nu_s;
    const matVigaE = p.matViga < 0.5 ? Ec : Es;
    const matVigaG = p.matViga < 0.5 ? Gc : Gs;
    const matVigaNu = p.matViga < 0.5 ? nu_c : nu_s;

    const elasticities = new Map<number, number>();
    const shearModuli = new Map<number, number>();
    const areas = new Map<number, number>();
    const Iz = new Map<number, number>();
    const Iy = new Map<number, number>();
    const J = new Map<number, number>();
    const densities = new Map<number, number>();
    const poissons = new Map<number, number>();
    const thicknesses = new Map<number, number>();
    // Property Modifiers según p.slabType (estilo ETABS Assign → Area → Modifiers)
    const membraneModifiers = new Map<number, number>();
    const bendingModifiers = new Map<number, number>();
    const slabTypeVal = Math.round(p.slabType);
    const mFactor = slabTypeVal === 2 ? 0.0 : 1.0;  // Plate-only: membrana=0
    const bFactor = slabTypeVal === 1 ? 0.0 : 1.0;  // Membrane-only: bending=0

    // ── Cracked Section Modifiers ACI 318-22 §6.6.3.1.1 (estilo ETABS) ──
    // Estos factores REDUCEN la rigidez efectiva (Ig → Ie). NO aplica a acero.
    const isCrackedHormigon = p.crackedSections > 0.5;
    const fCol_I = (p.matCol < 0.5 && isCrackedHormigon) ? 0.70 : 1.0;
    const fVig_I = (p.matViga < 0.5 && isCrackedHormigon) ? 0.35 : 1.0;
    const fSlab_b = isCrackedHormigon ? 0.25 : 1.0;  // bending de losa
    const fSlab_m = isCrackedHormigon ? 1.0 : 1.0;   // membrana de losa NO se reduce

    // ── Mass Source from Loads (estilo ETABS) ──
    // Si massSource=1, calcular masa equivalente = (qDead + 0.25·qLive)/g · A_trib
    // y override densities. Esto da MENOS masa total (típico en ETABS).
    // Se aplica como densidad equivalente sobre el elemento shell de la losa.
    // Para frames (cols, vigas) se mantiene peso propio (mass de elements).
    const useMassFromLoads = p.massSource > 0.5;
    const qMassEquiv_kNm2 = p.qDead + 0.25 * p.qLive;  // kN/m²
    // Convertir a densidad volumétrica equivalente: ρ_eq = q/(g·t)
    // Si en kN/m³: ρ_eq = q (kN/m²) / t_losa (m) ya está en kN/m³ porque g se cancela cuando se trata como peso.
    // En awatif densities se trata como peso específico (kN/m³)
    const rho_slab_equiv = useMassFromLoads ? qMassEquiv_kNm2 / Math.max(p.slabT, 0.05) : rho_c;

    for (let i = 0; i < elements.length; i++) {
      const floor = elementFloor.get(i) ?? 0;
      if (slabIdx.has(i)) {
        elasticities.set(i, Ec); shearModuli.set(i, Gc); poissons.set(i, nu_c);
        thicknesses.set(i, p.slabT);
        // Aplicar property modifiers SOLO a las losas (no a muros)
        // Si crackedSections ON: fSlab_b para bending, fSlab_m para membrana
        membraneModifiers.set(i, mFactor * fSlab_m);
        bendingModifiers.set(i, bFactor * fSlab_b);
        // Densidad: si Mass Source = Loads, usar ρ equivalente (q/t)
        densities.set(i, rho_slab_equiv);
      } else if (colIdx.has(i)) {
        const cp = colPropsAt(Math.min(floor, 7));
        elasticities.set(i, matColE); shearModuli.set(i, matColG); poissons.set(i, matColNu);
        areas.set(i, cp.A);
        Iz.set(i, cp.Iz * fCol_I); Iy.set(i, cp.Iy * fCol_I); J.set(i, cp.J);
        // Si Mass Source = Loads, density de cols = 0 (la masa va solo en losa)
        densities.set(i, useMassFromLoads ? 0 : rho_c);
      } else {
        const vp = vigaPropsAt(Math.min(floor, 7));
        elasticities.set(i, matVigaE); shearModuli.set(i, matVigaG); poissons.set(i, matVigaNu);
        areas.set(i, vp.A);
        Iz.set(i, vp.Iz * fVig_I); Iy.set(i, vp.Iy * fVig_I); J.set(i, vp.J);
        // Si Mass Source = Loads, density de vigas = 0 (la masa va solo en losa)
        densities.set(i, useMassFromLoads ? 0 : rho_c);
      }
    }

    // ── Diafragma rígido (ASCE/SEI 7-22 §12.3.1 + NEC-SE-DS §6.2) ─────
    // Si está activo, agrega un master node por piso en el centroide + rigid
    // frame links a cada nodo del piso. Esto aproxima el constraint rigid-body
    // in-plane sin modificar el solver nativo (penalty via AE/L muy alto).
    // Los links heredan propiedades del elementInputs (ver mergeDiaphragmProps).
    if (p.diafragmaRigido >= 0.5) {
      const floorZs: number[] = [];
      for (let iz = 1; iz < zCoords.length; iz++) floorZs.push(zCoords[iz]);
      const dia = addRigidDiaphragms(nodes, floorZs);
      const baseElemOffset = elements.length;
      // Agregar master nodes al final del array de nodes
      for (const m of dia.masterNodes) nodes.push([m.x, m.y, m.z] as Node);
      // Agregar rigid links al final del array de elements
      for (const link of dia.rigidLinks) elements.push(link as Element);
      // Mergear propiedades de los links (areas, E, Iy/Iz, J, G, ρ=0)
      const elementInputsObj: any = {
        elasticities, shearModuli, areas,
        momentsOfInertiaZ: Iz, momentsOfInertiaY: Iy, torsionalConstants: J,
        densities, poissonsRatios: poissons, thicknesses,
      };
      mergeDiaphragmProps(dia, elementInputsObj, baseElemOffset);
      // Los master nodes NO tienen supports ni cargas — son puntos libres que
      // acumulan las restricciones vía los rigid links.
    }

    states.nodes.val = nodes;
    states.elements.val = elements;
    states.nodeInputs.val = { supports, loads };
    states.elementInputs.val = {
      elasticities, shearModuli, areas,
      momentsOfInertiaZ: Iz, momentsOfInertiaY: Iy, torsionalConstants: J,
      densities, poissonsRatios: poissons, thicknesses,
      membraneModifiers, bendingModifiers,
    } as any;
    const deformOut = deform(nodes, elements, states.nodeInputs.val, states.elementInputs.val);
    states.deformOutputs.val = deformOut;
    states.analyzeOutputs.val = analyze(nodes, elements, states.elementInputs.val, deformOut);

    // ── Cotas 3D (dimensiones anotadas, toggle via Settings → Cotas) ──
    const cotas = buildEdificioCotas(xCoords, yCoords, zCoords);
    // Etiqueta de sección de columna típica en esquina bajo el primer piso
    const colP1_b = colB_piso[0], colP1_h = colH_piso[0];
    const vigaP1_b = vigaB_piso[0], vigaP1_h = vigaH_piso[0];
    cotas.push(makeLabel(
      `Col ${(colP1_b*100).toFixed(0)}×${(colP1_h*100).toFixed(0)} cm`,
      xCoords[0] + 0.3, yCoords[0] + 0.3, zCoords[1] * 0.5,
      "#ffaa00"
    ));
    cotas.push(makeLabel(
      `Viga ${(vigaP1_b*100).toFixed(0)}×${(vigaP1_h*100).toFixed(0)} cm`,
      (xCoords[0] + xCoords[1]) / 2, yCoords[0], zCoords[1] + 0.2,
      "#ffaa00"
    ));

    // ── Rótulas plásticas (Fase A — ASCE 41-17, FEMA 356) ───────────
    // Clasificación estática por ratio M/My en extremos de frames. Solo se
    // muestran las rótulas que salen de rango elástico (estado B-CP) para
    // no saturar visualmente el modelo. Los counts por estado se guardan en
    // states para que computedLabels() los muestre en el folder Calculados.
    try {
      const hingesArr = computeHinges(
        nodes, elements,
        states.analyzeOutputs.rawVal as any,
        states.elementInputs.rawVal as any,
        Math.round(p.matCol),
        Math.round(p.matViga),
        colIdx,
      );
      // Calcular diagonal del modelo para dimensionar esferas
      let xMin=Infinity, yMin=Infinity, zMin=Infinity, xMax=-Infinity, yMax=-Infinity, zMax=-Infinity;
      for (const n of nodes) {
        if (n[0]<xMin) xMin=n[0]; if (n[0]>xMax) xMax=n[0];
        if (n[1]<yMin) yMin=n[1]; if (n[1]>yMax) yMax=n[1];
        if (n[2]<zMin) zMin=n[2]; if (n[2]>zMax) zMax=n[2];
      }
      const diag = Math.sqrt((xMax-xMin)**2 + (yMax-yMin)**2 + (zMax-zMin)**2) || 1;
      const hingeObjs = buildHingeObjects3D(hingesArr, nodes, diag, { showElastic: false, radiusFactor: 0.015 });
      cotas.push(...hingeObjs);
      // Guardar counts en un slot accesible por computedLabels
      (states as any).__plasticHinges = summarizeHinges(hingesArr);
    } catch (e) {
      console.warn("[Plastic Hinges]", e);
    }

    states.objects3D.val = cotas;
  },
  runModal(p, states, modalPanel) {
    const nodes = states.nodes.val;
    const elements = states.elements.val;
    const ni = states.nodeInputs.val;
    const ei = states.elementInputs.val;
    if (!nodes.length || !elements.length || !ni.supports?.size || !ei.densities?.size) return;
    try {
      // ═══════════════════════════════════════════════════════════════
      // ETABS-style modal: filtrar losas del modal + lumpear masa en columnas
      // ═══════════════════════════════════════════════════════════════
      // Las losas (shells horizontales) generan modos Uz que dominan los
      // primeros eigenvalores. ETABS y SAP las modelan como "Membrane" con
      // masa puntual concentrada en master nodes. Aquí replicamos:
      //   1. Identificar shells con todos sus nodos a la misma cota Z (losas)
      //   2. Calcular su masa total (m_slab = ρ · A · t)
      //   3. Skip esos shells en la malla del modal
      //   4. Multiplicar la densidad de las columnas por (1 + m_slab/m_cols)
      //      para conservar la masa total del edificio en el modal.
      const filteredElements: Element[] = [];
      const newAreas = new Map<number, number>();
      const newMoiY = new Map<number, number>();
      const newMoiZ = new Map<number, number>();
      const newTorsion = new Map<number, number>();
      const newE = new Map<number, number>();
      const newG = new Map<number, number>();
      const newDens = new Map<number, number>();
      const newThick = new Map<number, number>();
      const newPois = new Map<number, number>();

      let massSlab = 0; // Σ ρ · A · t
      let massCols = 0; // Σ ρ · A · L (frames verticales)
      const colIdxs: number[] = []; // índices nuevos de elementos columna
      let newIdx = 0;

      for (let i = 0; i < elements.length; i++) {
        const e = elements[i];
        let isSlab = false;
        let isCol = false;
        if (e.length === 4) {
          // Shell — verificar si es horizontal (losa)
          const zs = e.map((nIdx: number) => nodes[nIdx][2]);
          const zRange = Math.max(...zs) - Math.min(...zs);
          if (zRange < 0.02) {
            // Losa horizontal → calcular masa y skip
            const x0 = nodes[e[0]][0], y0 = nodes[e[0]][1];
            const x2 = nodes[e[2]][0], y2 = nodes[e[2]][1];
            const A_el = Math.abs((x2 - x0) * (y2 - y0)); // aproximación rectangular
            const t = ei.thicknesses?.get(i) ?? 0.15;
            const rho = ei.densities?.get(i) ?? 24;
            massSlab += rho * A_el * t;
            isSlab = true;
          }
        } else if (e.length === 2) {
          // Frame — verificar si es columna (vertical)
          const z1 = nodes[e[0]][2];
          const z2 = nodes[e[1]][2];
          const xy_dist = Math.sqrt(
            (nodes[e[1]][0] - nodes[e[0]][0]) ** 2 +
              (nodes[e[1]][1] - nodes[e[0]][1]) ** 2,
          );
          if (Math.abs(z2 - z1) > xy_dist) {
            isCol = true;
            const L = Math.abs(z2 - z1);
            const A = ei.areas?.get(i) ?? 0;
            const rho = ei.densities?.get(i) ?? 24;
            massCols += rho * A * L;
          }
        }
        if (isSlab) continue; // skip losa en modal
        // Mantener este elemento en el modal
        filteredElements.push(e);
        if (ei.areas?.has(i)) newAreas.set(newIdx, ei.areas.get(i)!);
        if (ei.momentsOfInertiaY?.has(i)) newMoiY.set(newIdx, ei.momentsOfInertiaY.get(i)!);
        if (ei.momentsOfInertiaZ?.has(i)) newMoiZ.set(newIdx, ei.momentsOfInertiaZ.get(i)!);
        if (ei.torsionalConstants?.has(i)) newTorsion.set(newIdx, ei.torsionalConstants.get(i)!);
        if (ei.elasticities?.has(i)) newE.set(newIdx, ei.elasticities.get(i)!);
        if (ei.shearModuli?.has(i)) newG.set(newIdx, ei.shearModuli.get(i)!);
        if (ei.densities?.has(i)) newDens.set(newIdx, ei.densities.get(i)!);
        if (ei.thicknesses?.has(i)) newThick.set(newIdx, ei.thicknesses.get(i)!);
        if (ei.poissonsRatios?.has(i)) newPois.set(newIdx, ei.poissonsRatios.get(i)!);
        if (isCol) colIdxs.push(newIdx);
        newIdx++;
      }

      // Lumpear la masa de losas en las columnas (multiplicar densidad)
      if (massSlab > 0 && massCols > 0 && colIdxs.length > 0) {
        const factor = 1 + massSlab / massCols;
        for (const idx of colIdxs) {
          const orig = newDens.get(idx) ?? 24;
          newDens.set(idx, orig * factor);
        }
      }

      const eiModal = {
        areas: newAreas,
        momentsOfInertiaY: newMoiY,
        momentsOfInertiaZ: newMoiZ,
        torsionalConstants: newTorsion,
        elasticities: newE,
        shearModuli: newG,
        densities: newDens,
        thicknesses: newThick,
        poissonsRatios: newPois,
      };

      const nP = Math.round(p.nPisos);
      const nModes = Math.min(60, Math.max(15, 3 * nP + 6));
      const out = modalAnalysis(nodes, filteredElements, ni, eiModal, nModes);
      const nvx = Math.round(p.nVanosX), nvy = Math.round(p.nVanosY), np = Math.round(p.nPisos);
      const lumpFactor = massCols > 0 ? 1 + massSlab / massCols : 1;
      modalPanel.render(out, {
        title: `Edificio ${nvx}×${nvy} vanos × ${np} pisos · ${nModes} modos`,
        properties: [
          `Material cols=${p.matCol<0.5?'Hormigón':'Acero'} vigas=${p.matViga<0.5?'Hormigón':'Acero'}  f'c=${p.fcConcr} kg/cm²`,
          `Apoyo: ${['Empotrado','Articulado','Rótula'][Math.round(p.apoyo)]}${p.slabOn>=0.5?` + Losa (lumped: ×${lumpFactor.toFixed(2)} dens cols, ${massSlab.toFixed(0)} kN/g)`:''}${p.bracesMode>0?' + Diagonales':''}`,
          `Estilo ETABS: losas filtradas del modal + masa transferida a columnas (igual que membrane diaphragm en ETABS/SAP)`,
        ],
      });
      const f1 = out.frequencies[0] ?? 0;
      console.log(`[Edificio Modal] ${nModes} modos · f₁=${f1.toFixed(4)} Hz · m_slab=${massSlab.toFixed(0)} m_cols=${massCols.toFixed(0)} factor=${lumpFactor.toFixed(2)}`);
    } catch (e: any) {
      console.warn("Modal edificio error:", e.message);
    }
  },
};
