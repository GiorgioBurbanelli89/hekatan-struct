/**
 * Edificio Aporticado — Pórtico 3D con parámetros completos estilo FEM Studio.
 * Incluye: cantilevers en X/Y, vigas secundarias, diagonales (braces) y losa superior.
 * Muros de corte Q4 — pendiente para una siguiente iteración.
 */
import { deform, analyze, modalAnalysis, type Node, type Element } from "awatif-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

const Ec = 25e6;
const nu_c = 0.2;
const Gc = Ec / (2 * (1 + nu_c));
const rho_c = 24;

export const edificioAporticado: ExampleDef = {
  id: "edificio-aporticado",
  name: "Edificio Aporticado (hormigón)",
  category: "Edificios",
  defaultShellResult: "displacementZ",
  availableShellResults: ["displacementZ", "bendingXX", "vonMises"],
  hasModal: true,
  params: {
    // Geometría principal
    nVanosX: { default: 2, min: 1, max: 8,  step: 1, label: "Vanos X" },
    nVanosY: { default: 2, min: 1, max: 8,  step: 1, label: "Vanos Y" },
    nPisos:  { default: 3, min: 1, max: 15, step: 1, label: "Pisos" },
    spanX:   { default: 5.0, min: 2, max: 12, step: 0.5, label: "Luz X (m)" },
    spanY:   { default: 5.0, min: 2, max: 12, step: 0.5, label: "Luz Y (m)" },
    hPiso:   { default: 3.0, min: 2, max: 5,  step: 0.1, label: "h piso (m)" },
    // Cantilevers (voladizos)
    Lvix:    { default: 0, min: 0, max: 3, step: 0.25, label: "Voladizo izq X (m)" },
    Lvdx:    { default: 0, min: 0, max: 3, step: 0.25, label: "Voladizo der X (m)" },
    Lviy:    { default: 0, min: 0, max: 3, step: 0.25, label: "Voladizo izq Y (m)" },
    Lvdy:    { default: 0, min: 0, max: 3, step: 0.25, label: "Voladizo der Y (m)" },
    // Secciones
    colSize: { default: 0.40, min: 0.25, max: 0.80, step: 0.05, label: "b columna (m)" },
    vigaB:   { default: 0.30, min: 0.20, max: 0.60, step: 0.05, label: "b viga (m)" },
    vigaH:   { default: 0.50, min: 0.30, max: 0.90, step: 0.05, label: "h viga (m)" },
    // Subdivisión (refinamiento)
    nSubViga: { default: 1, min: 1, max: 6, step: 1, label: "Div. vigas" },
    nSubCol:  { default: 1, min: 1, max: 4, step: 1, label: "Div. columnas" },
    // Vigas secundarias
    vSecOn:   { default: 0, min: 0, max: 1, step: 1, label: "Vigas secundarias (0/1)" },
    nVSec:    { default: 2, min: 1, max: 5, step: 1, label: "N° secundarias por vano" },
    vSecDir:  { default: 0, min: 0, max: 1, step: 1, label: "Dir secundarias (0=X,1=Y)" },
    // Diagonales (braces)
    bracesMode: {
      default: 0,
      label: "Diagonales",
      options: { "ninguna": 0, "perimetrales": 1, "todas": 2, "solo X": 3, "solo Y": 4 },
    },
    // Losa
    slabOn:   { default: 0, min: 0, max: 1, step: 1, label: "Losa (0/1)" },
    slabT:    { default: 0.15, min: 0.08, max: 0.30, step: 0.01, label: "t losa (m)" },
    // Cargas
    Ex:      { default: 50,  min: 0, max: 500,  step: 10, label: "Ex lateral tope (kN)" },
    CM:      { default: -5,  min: -20, max: 0, step: 1,   label: "CM por nodo (kN)" },
  },
  build(p, states) {
    const nvx = Math.round(p.nVanosX);
    const nvy = Math.round(p.nVanosY);
    const np  = Math.round(p.nPisos);
    const nSubViga = Math.max(1, Math.round(p.nSubViga));
    const nSubCol  = Math.max(1, Math.round(p.nSubCol));
    const Lvix = p.Lvix, Lvdx = p.Lvdx, Lviy = p.Lviy, Lvdy = p.Lvdy;

    // ── Grid de coords (con cantilevers) ──
    const xCoords: number[] = [];
    if (Lvix > 0) xCoords.push(-Lvix);
    xCoords.push(0);
    for (let i = 0; i < nvx; i++) xCoords.push(xCoords[xCoords.length - 1] + p.spanX);
    if (Lvdx > 0) xCoords.push(xCoords[xCoords.length - 1] + Lvdx);

    const yCoords: number[] = [];
    if (Lviy > 0) yCoords.push(-Lviy);
    yCoords.push(0);
    for (let i = 0; i < nvy; i++) yCoords.push(yCoords[yCoords.length - 1] + p.spanY);
    if (Lvdy > 0) yCoords.push(yCoords[yCoords.length - 1] + Lvdy);

    const zCoords: number[] = [];
    for (let i = 0; i <= np; i++) zCoords.push(i * p.hPiso);

    const isCantTipX = (ix: number) => (Lvix > 0 && ix === 0) || (Lvdx > 0 && ix === xCoords.length - 1);
    const isCantTipY = (iy: number) => (Lviy > 0 && iy === 0) || (Lvdy > 0 && iy === yCoords.length - 1);
    const isCantTip = (ix: number, iy: number) => isCantTipX(ix) || isCantTipY(iy);

    // ── Nodos de unión (salteando tips de cantilever en el piso base) ──
    const nodes: Node[] = [];
    const nid: Record<string, number> = {};
    for (let iz = 0; iz < zCoords.length; iz++)
      for (let iy = 0; iy < yCoords.length; iy++)
        for (let ix = 0; ix < xCoords.length; ix++) {
          if (iz === 0 && isCantTip(ix, iy)) continue;
          nid[`${ix},${iy},${iz}`] = nodes.length;
          nodes.push([xCoords[ix], yCoords[iy], zCoords[iz]]);
        }

    // ── Elementos ──
    const elements: Element[] = [];
    const colIdx = new Set<number>();
    const beamIdx = new Set<number>();
    const slabIdx = new Set<number>();

    const addSub = (ni: number, nj: number, nSub: number, bucket: Set<number>) => {
      if (nSub <= 1) { bucket.add(elements.length); elements.push([ni, nj]); return; }
      const p0 = nodes[ni], p1 = nodes[nj];
      let prev = ni;
      for (let k = 1; k < nSub; k++) {
        const t = k / nSub;
        const midIdx = nodes.length;
        nodes.push([p0[0]+(p1[0]-p0[0])*t, p0[1]+(p1[1]-p0[1])*t, p0[2]+(p1[2]-p0[2])*t]);
        bucket.add(elements.length); elements.push([prev, midIdx]);
        prev = midIdx;
      }
      bucket.add(elements.length); elements.push([prev, nj]);
    };

    // Columnas (salteando cantilever tips)
    for (let iz = 0; iz < zCoords.length - 1; iz++)
      for (let iy = 0; iy < yCoords.length; iy++)
        for (let ix = 0; ix < xCoords.length; ix++) {
          if (isCantTip(ix, iy)) continue;
          addSub(nid[`${ix},${iy},${iz}`], nid[`${ix},${iy},${iz + 1}`], nSubCol, colIdx);
        }

    // Vigas X
    for (let iz = 1; iz < zCoords.length; iz++)
      for (let iy = 0; iy < yCoords.length; iy++)
        for (let ix = 0; ix < xCoords.length - 1; ix++)
          addSub(nid[`${ix},${iy},${iz}`], nid[`${ix + 1},${iy},${iz}`], nSubViga, beamIdx);

    // Vigas Y
    for (let iz = 1; iz < zCoords.length; iz++)
      for (let ix = 0; ix < xCoords.length; ix++)
        for (let iy = 0; iy < yCoords.length - 1; iy++)
          addSub(nid[`${ix},${iy},${iz}`], nid[`${ix},${iy + 1},${iz}`], nSubViga, beamIdx);

    // ── Vigas secundarias ──
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

    // ── Diagonales (braces) ──
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

    // ── Losas Q4 (en cada piso elevado) ──
    if (p.slabOn >= 0.5) {
      const nodeIndex = new Map<string, number>();
      const nodeKey = (x: number, y: number, z: number) => `${Math.round(x*10000)},${Math.round(y*10000)},${Math.round(z*10000)}`;
      for (let ni = 0; ni < nodes.length; ni++) nodeIndex.set(nodeKey(nodes[ni][0], nodes[ni][1], nodes[ni][2]), ni);
      const nSx = nSubViga, nSy = nSubViga;
      for (let iz = 1; iz < zCoords.length; iz++) {
        const z = zCoords[iz];
        for (let bx = 0; bx < xCoords.length - 1; bx++)
          for (let by = 0; by < yCoords.length - 1; by++) {
            const x0 = xCoords[bx], x1 = xCoords[bx + 1];
            const y0 = yCoords[by], y1 = yCoords[by + 1];
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

    // ── Supports: base empotrada ──
    const supports = new Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>();
    for (let iy = 0; iy < yCoords.length; iy++)
      for (let ix = 0; ix < xCoords.length; ix++) {
        if (isCantTip(ix, iy)) continue;
        supports.set(nid[`${ix},${iy},0`], [true, true, true, true, true, true]);
      }

    // ── Loads ──
    const loads = new Map<number, [number, number, number, number, number, number]>();
    if (p.CM !== 0) {
      for (let iz = 1; iz < zCoords.length; iz++)
        for (let iy = 0; iy < yCoords.length; iy++)
          for (let ix = 0; ix < xCoords.length; ix++) {
            const k = `${ix},${iy},${iz}`;
            if (nid[k] !== undefined) loads.set(nid[k], [0, 0, p.CM, 0, 0, 0]);
          }
    }
    if (p.Ex !== 0) {
      const top = nid[`${xCoords.length-1-(Lvdx>0?1:0)},${Lviy>0?1:0},${np}`];
      if (top !== undefined) {
        const prev = loads.get(top) ?? [0, 0, 0, 0, 0, 0];
        loads.set(top, [prev[0] + p.Ex, prev[1], prev[2], prev[3], prev[4], prev[5]]);
      }
    }

    // ── Propiedades ──
    const colB = p.colSize;
    const colA = colB * colB;
    const colIz = (colB * Math.pow(colB, 3)) / 12;
    const colIy = colIz;
    const colJ  = 0.14 * Math.pow(colB, 4);
    const vB = p.vigaB, vH = p.vigaH;
    const vA = vB * vH;
    const vIz = (vB * Math.pow(vH, 3)) / 12;
    const vIy = (vH * Math.pow(vB, 3)) / 12;
    const vJ  = Math.min(vB, vH)**3 * Math.max(vB, vH) * 0.21;

    const elasticities = new Map<number, number>();
    const shearModuli = new Map<number, number>();
    const areas = new Map<number, number>();
    const Iz = new Map<number, number>();
    const Iy = new Map<number, number>();
    const J  = new Map<number, number>();
    const densities = new Map<number, number>();
    const poissons = new Map<number, number>();
    const thicknesses = new Map<number, number>();

    for (let i = 0; i < elements.length; i++) {
      elasticities.set(i, Ec);
      shearModuli.set(i, Gc);
      poissons.set(i, nu_c);
      densities.set(i, rho_c);
      if (slabIdx.has(i)) {
        thicknesses.set(i, p.slabT);
      } else if (colIdx.has(i)) {
        areas.set(i, colA); Iz.set(i, colIz); Iy.set(i, colIy); J.set(i, colJ);
      } else {
        areas.set(i, vA); Iz.set(i, vIz); Iy.set(i, vIy); J.set(i, vJ);
      }
    }

    states.nodes.val = nodes;
    states.elements.val = elements;
    states.nodeInputs.val = { supports, loads };
    states.elementInputs.val = {
      elasticities, shearModuli, areas,
      momentsOfInertiaZ: Iz, momentsOfInertiaY: Iy, torsionalConstants: J,
      densities, poissonsRatios: poissons, thicknesses,
    };

    const deformOut = deform(nodes, elements, states.nodeInputs.val, states.elementInputs.val);
    states.deformOutputs.val = deformOut;
    states.analyzeOutputs.val = analyze(nodes, elements, states.elementInputs.val, deformOut);
    states.objects3D.val = [];
  },
  runModal(p, states, modalPanel) {
    const nodes = states.nodes.val;
    const elements = states.elements.val;
    const ni = states.nodeInputs.val;
    const ei = states.elementInputs.val;
    if (!nodes.length || !elements.length || !ni.supports?.size || !ei.densities?.size) return;
    try {
      const out = modalAnalysis(nodes, elements, ni, ei, 12);
      const nvx = Math.round(p.nVanosX), nvy = Math.round(p.nVanosY), np = Math.round(p.nPisos);
      modalPanel.render(out, {
        title: `Edificio ${nvx}×${nvy} vanos, ${np} pisos`,
        properties: [
          `Luz X=${p.spanX}m  Luz Y=${p.spanY}m  h piso=${p.hPiso}m  voladizos: ${p.Lvix},${p.Lvdx},${p.Lviy},${p.Lvdy}`,
          `Cols ${p.colSize}×${p.colSize}m  Vigas ${p.vigaB}×${p.vigaH}m  ${p.slabOn>=0.5?'con losa '+p.slabT+'m  ':''}${p.bracesMode>0?'con diagonales':''}`,
        ],
      });
      const f1 = out.frequencies[0] ?? 0;
      console.log(`[Edificio Modal] f₁=${f1.toFixed(4)} Hz, T₁=${(1/f1).toFixed(4)} s`);
    } catch (e: any) {
      console.warn("Modal edificio error:", e.message);
    }
  },
};
