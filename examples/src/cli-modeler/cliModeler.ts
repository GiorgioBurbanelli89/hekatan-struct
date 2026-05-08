/**
 * CLI Modeler — modelar estructuras con comandos tipo SAP/ETABS.
 *
 * Permite construir un modelo 3D desde cero escribiendo comandos en una
 * textarea (ver workspace/main.ts donde se agrega el folder de comandos).
 *
 * SINTAXIS DE COMANDOS:
 *   node ID X Y Z              (nodo en coordenada X, Y, Z)
 *   frame ID nI nJ E A I       (frame entre nodos nI y nJ)
 *   shell ID n1 n2 n3 n4 t E   (shell Q4 con 4 nodos y espesor t)
 *   support nodeID DOFs        (DOFs = "fixed" o "pinned" o "uxuyuz")
 *   load nodeID FX FY FZ MX MY MZ
 *   spring nodeID dof k        (Winkler nodal, dof: ux/uy/uz/rx/ry/rz)
 *   solve                      (corre el FEM)
 *   reset                      (limpia todo)
 *
 * EJEMPLO mínimo (cantilever 5m con carga al extremo):
 *   node 1 0 0 0
 *   node 2 5 0 0
 *   support 1 fixed
 *   frame 1 1 2 25e6 0.04 0.001
 *   load 2 0 0 -100
 *   solve
 */
import * as THREE from "three";
import { deform, type Node, type Element } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

interface ParsedModel {
  nodes: Map<number, [number, number, number]>;
  frames: Array<{ id: number; nI: number; nJ: number; E: number; A: number; I: number }>;
  shells: Array<{ id: number; pts: number[]; t: number; E: number }>;
  supports: Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>;
  loads: Map<number, [number, number, number, number, number, number]>;
  springs: Array<{ node: number; dof: number; k: number }>;
  doSolve: boolean;
  errors: string[];
}

const DOF_NAMES: Record<string, number> = {
  ux: 0, uy: 1, uz: 2, rx: 3, ry: 4, rz: 5,
  fx: 0, fy: 1, fz: 2, mx: 3, my: 4, mz: 5,
};

function parseSupportSpec(spec: string): [boolean, boolean, boolean, boolean, boolean, boolean] {
  const s = spec.toLowerCase().trim();
  if (s === "fixed" || s === "empotrado") return [true, true, true, true, true, true];
  if (s === "pinned" || s === "articulado") return [true, true, true, false, false, false];
  if (s === "roller" || s === "rodillo") return [false, false, true, false, false, false];
  // DOFs explícitos: "uxuyuz" o "ux,uy,uz" o "1,1,1,0,0,0"
  const out: [boolean, boolean, boolean, boolean, boolean, boolean] = [false,false,false,false,false,false];
  const tokens = s.split(/[\s,]+/);
  for (const t of tokens) {
    if (DOF_NAMES[t] !== undefined) out[DOF_NAMES[t]] = true;
  }
  // 6-bit pattern "111000"
  if (/^[01]+$/.test(s) && s.length <= 6) {
    for (let i = 0; i < s.length; i++) out[i] = s[i] === "1";
  }
  return out;
}

export function parseCliCommands(text: string): ParsedModel {
  const m: ParsedModel = {
    nodes: new Map(),
    frames: [],
    shells: [],
    supports: new Map(),
    loads: new Map(),
    springs: [],
    doSolve: false,
    errors: [],
  };
  // Modo BLOQUE estilo awatif (nodes ENCABEZADO, luego solo coords):
  //   nodes
  //   0 0 0
  //   5 0 0
  //   elements         (frames)
  //   0 1
  //   1 2
  //   areas            (shells Q4)
  //   0 1 2 3
  // Mantiene compatibilidad con la sintaxis explicita por linea:
  //   node 1 0 0 0
  //   frame 1 1 2 25e6 0.16 0.001
  let blockMode: "nodes" | "elements" | "areas" | "supports" | "loads" | "springs" | null = null;
  let autoNodeIdx = 0;  // 0-based para modo bloque (awatif compatible)
  let autoFrameIdx = 0;
  let autoShellIdx = 0;

  const lines = text.split(/\r?\n/);
  for (let lineNo = 0; lineNo < lines.length; lineNo++) {
    let raw = lines[lineNo].trim();
    if (!raw || raw.startsWith("#") || raw.startsWith("//")) continue;
    raw = raw.replace(/[;]+$/, "");
    const tokens = raw.split(/\s+/);
    const cmd = tokens[0].toLowerCase();
    // Detectar headers de bloque
    if (cmd === "nodes" && tokens.length === 1) { blockMode = "nodes"; continue; }
    if ((cmd === "elements" || cmd === "frames") && tokens.length === 1) { blockMode = "elements"; continue; }
    if (cmd === "areas" && tokens.length === 1) { blockMode = "areas"; continue; }
    if (cmd === "supports" && tokens.length === 1) { blockMode = "supports"; continue; }
    if (cmd === "loads" && tokens.length === 1) { blockMode = "loads"; continue; }
    if (cmd === "springs" && tokens.length === 1) { blockMode = "springs"; continue; }
    // Modo bloque: linea = solo numeros (coords o índices)
    if (blockMode && /^[\-\d]/.test(tokens[0])) {
      const nums = tokens.map(parseFloat);
      if (blockMode === "nodes" && nums.length >= 3) {
        autoNodeIdx++;
        m.nodes.set(autoNodeIdx, [nums[0], nums[1], nums[2]]);
        continue;
      }
      if (blockMode === "elements" && nums.length >= 2) {
        // En modo awatif los índices son 0-based; los convertimos a IDs 1-based
        autoFrameIdx++;
        m.frames.push({
          id: autoFrameIdx, nI: nums[0]+1, nJ: nums[1]+1,
          E: 25e6, A: 0.16, I: 0.0021,
        });
        continue;
      }
      if (blockMode === "areas" && nums.length >= 4) {
        autoShellIdx++;
        m.shells.push({
          id: autoShellIdx,
          pts: [nums[0]+1, nums[1]+1, nums[2]+1, nums[3]+1],
          t: 0.20, E: 25e6,
        });
        continue;
      }
      if (blockMode === "loads" && nums.length >= 4) {
        // Sintaxis: nodeId FX FY FZ [MX MY MZ]
        m.loads.set(nums[0], [
          nums[1] ?? 0, nums[2] ?? 0, nums[3] ?? 0,
          nums[4] ?? 0, nums[5] ?? 0, nums[6] ?? 0,
        ]);
        continue;
      }
      if (blockMode === "springs" && nums.length >= 3) {
        // Sintaxis: nodeId dof_idx k (dof_idx 0=ux .. 5=rz, default 2=uz)
        m.springs.push({ node: nums[0], dof: nums[1], k: nums[2] });
        continue;
      }
    }
    // Bloque "supports" — sintaxis: "nodeId DOFs" (ej. "1 fixed")
    if (blockMode === "supports" && /^\d/.test(tokens[0])) {
      const nodeId = parseInt(tokens[0], 10);
      const spec = tokens.slice(1).join(" ");
      m.supports.set(nodeId, parseSupportSpec(spec));
      continue;
    }
    // Si la linea no encaja con bloque, salimos del modo bloque y la procesamos
    // como comando explicito (compatibilidad atras).
    if (blockMode && !/^[\-\d]/.test(tokens[0])) blockMode = null;
    try {
      switch (cmd) {
        case "node":
        case "n": {
          const id = parseInt(tokens[1], 10);
          const x = parseFloat(tokens[2]);
          const y = parseFloat(tokens[3]);
          const z = parseFloat(tokens[4]);
          if (!isFinite(id) || !isFinite(x) || !isFinite(y) || !isFinite(z)) {
            m.errors.push(`L${lineNo+1}: node mal formado: ${raw}`);
          } else m.nodes.set(id, [x, y, z]);
          break;
        }
        case "frame":
        case "beam":
        case "column":
        case "f": {
          const id = parseInt(tokens[1], 10);
          const nI = parseInt(tokens[2], 10);
          const nJ = parseInt(tokens[3], 10);
          const E = parseFloat(tokens[4] ?? "25e6");
          const A = parseFloat(tokens[5] ?? "0.16");
          const I = parseFloat(tokens[6] ?? "0.001");
          m.frames.push({ id, nI, nJ, E, A, I });
          break;
        }
        case "shell":
        case "plate":
        case "s": {
          const id = parseInt(tokens[1], 10);
          const pts = [
            parseInt(tokens[2], 10),
            parseInt(tokens[3], 10),
            parseInt(tokens[4], 10),
            parseInt(tokens[5], 10),
          ];
          const t = parseFloat(tokens[6] ?? "0.20");
          const E = parseFloat(tokens[7] ?? "25e6");
          m.shells.push({ id, pts, t, E });
          break;
        }
        case "support":
        case "fix": {
          const nodeId = parseInt(tokens[1], 10);
          const spec = tokens.slice(2).join(" ");
          m.supports.set(nodeId, parseSupportSpec(spec));
          break;
        }
        case "load":
        case "l": {
          const nodeId = parseInt(tokens[1], 10);
          const fx = parseFloat(tokens[2] ?? "0");
          const fy = parseFloat(tokens[3] ?? "0");
          const fz = parseFloat(tokens[4] ?? "0");
          const mx = parseFloat(tokens[5] ?? "0");
          const my = parseFloat(tokens[6] ?? "0");
          const mz = parseFloat(tokens[7] ?? "0");
          m.loads.set(nodeId, [fx, fy, fz, mx, my, mz]);
          break;
        }
        case "spring": {
          const nodeId = parseInt(tokens[1], 10);
          const dofName = (tokens[2] ?? "uz").toLowerCase();
          const dof = DOF_NAMES[dofName] ?? 2;
          const k = parseFloat(tokens[3] ?? "1000");
          m.springs.push({ node: nodeId, dof, k });
          break;
        }
        case "solve":
        case "run":
        case "analyze": {
          m.doSolve = true;
          break;
        }
        case "reset":
        case "clear":
          m.nodes.clear(); m.frames.length = 0; m.shells.length = 0;
          m.supports.clear(); m.loads.clear(); m.springs.length = 0;
          break;
        default:
          m.errors.push(`L${lineNo+1}: comando desconocido "${cmd}"`);
      }
    } catch (e: any) {
      m.errors.push(`L${lineNo+1}: error "${raw}" — ${e.message}`);
    }
  }
  return m;
}

const DEFAULT_SCRIPT = `# CLI Modeler — escribí comandos para construir un modelo
# Ejemplo: pórtico 2D con carga lateral

# ── Nodos (ID  X  Y  Z) ──
node 1   0   0   0
node 2   0   0   3
node 3   5   0   3
node 4   5   0   0

# ── Apoyos ──
support 1 fixed
support 4 fixed

# ── Frames (ID  nI  nJ  E  A  I) ──
# E=25e6 kN/m², A=0.16 m², I=0.0021 m⁴ (col 0.40×0.40)
frame 1  1 2  25e6  0.16  0.0021
frame 2  2 3  25e6  0.15  0.0028
frame 3  3 4  25e6  0.16  0.0021

# ── Cargas (ID  FX  FY  FZ  MX  MY  MZ) ──
load 2  10  0  -50  0  0  0
load 3  10  0  -50  0  0  0

solve
`;

export const cliModeler: ExampleDef = {
  id: "cli-modeler",
  name: "CLI Modeler (comandos)",
  category: "Modelar",
  defaultShellResult: "none",
  availableShellResults: [],
  params: {},
  build(_p, states) {
    // Lee el script de window (lo escribe el folder Tweakpane).
    const script = (window as any).__hekatanCliScript ?? DEFAULT_SCRIPT;
    (window as any).__hekatanCliLastScript = script;
    const m = parseCliCommands(script);

    // Ordenar nodos por ID y asignar índices internos
    const idToIdx = new Map<number, number>();
    const nodes: Node[] = [];
    const sortedIds = Array.from(m.nodes.keys()).sort((a, b) => a - b);
    for (const id of sortedIds) {
      idToIdx.set(id, nodes.length);
      nodes.push(m.nodes.get(id)!);
    }

    // Frames y shells → elements + elementInputs
    const elements: Element[] = [];
    const elasticities = new Map<number, number>();
    const shearModuli = new Map<number, number>();
    const areas = new Map<number, number>();
    const Iz = new Map<number, number>();
    const Iy = new Map<number, number>();
    const J = new Map<number, number>();
    const densities = new Map<number, number>();
    const poissons = new Map<number, number>();
    const thicknesses = new Map<number, number>();

    for (const f of m.frames) {
      const ni = idToIdx.get(f.nI), nj = idToIdx.get(f.nJ);
      if (ni === undefined || nj === undefined) {
        const have = sortedIds.length
          ? `IDs disponibles: ${sortedIds.join(", ")}`
          : "ningún nodo definido";
        const missing: number[] = [];
        if (ni === undefined) missing.push(f.nI);
        if (nj === undefined) missing.push(f.nJ);
        m.errors.push(
          `frame ${f.id}: nodo(s) inexistente(s) [${missing.join(", ")}] — ${have}`
        );
        continue;
      }
      const eIdx = elements.length;
      elements.push([ni, nj]);
      elasticities.set(eIdx, f.E);
      shearModuli.set(eIdx, f.E / (2 * 1.2));  // ν=0.2
      areas.set(eIdx, f.A);
      Iz.set(eIdx, f.I);
      Iy.set(eIdx, f.I);
      J.set(eIdx, 0.14 * Math.pow(Math.sqrt(f.A), 4));
      densities.set(eIdx, 2.45);
      poissons.set(eIdx, 0.2);
    }
    for (const s of m.shells) {
      const idxs = s.pts.map(id => idToIdx.get(id));
      if (idxs.some(i => i === undefined)) {
        m.errors.push(`shell ${s.id}: algun nodo inexistente`);
        continue;
      }
      const eIdx = elements.length;
      elements.push(idxs as Element);
      elasticities.set(eIdx, s.E);
      shearModuli.set(eIdx, s.E / (2 * 1.2));
      thicknesses.set(eIdx, s.t);
      densities.set(eIdx, 2.45);
      poissons.set(eIdx, 0.2);
    }

    // Supports/loads/springs: traducir IDs a indices internos
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
    for (const [id, sp] of m.supports.entries()) {
      const idx = idToIdx.get(id);
      if (idx !== undefined) supports.set(idx, sp);
    }
    const loads = new Map<number, [number,number,number,number,number,number]>();
    for (const [id, ld] of m.loads.entries()) {
      const idx = idToIdx.get(id);
      if (idx !== undefined) loads.set(idx, ld);
    }
    const springsList: Array<{node:number; dof:number; k:number}> = [];
    for (const sp of m.springs) {
      const idx = idToIdx.get(sp.node);
      if (idx !== undefined) springsList.push({ node: idx, dof: sp.dof, k: sp.k });
    }

    states.nodes.val = nodes;
    states.elements.val = elements;
    states.nodeInputs.val = { supports, loads };
    states.elementInputs.val = {
      elasticities, shearModuli, areas,
      momentsOfInertiaZ: Iz, momentsOfInertiaY: Iy,
      torsionalConstants: J, densities, poissonsRatios: poissons, thicknesses,
    } as any;

    if (m.doSolve && nodes.length && elements.length) {
      try {
        states.deformOutputs.val = deform(
          nodes, elements, states.nodeInputs.val, states.elementInputs.val,
          springsList.length ? springsList : undefined,
        );
        console.log("[CLI Modeler] Solve OK —", elements.length, "elementos,", nodes.length, "nodos");
      } catch (e: any) {
        m.errors.push(`solve falló: ${e.message}`);
      }
    }

    // El viewer dibuja nodos/elementos automaticamente desde states.nodes
    // y states.elements (mismo render que zapata-aislada, plate, etc.).
    // No agregamos objects3D extra — ese campo se reserva para overlays
    // específicos de cada ejemplo (zigzag springs, cotas, labels).
    states.objects3D.val = [];

    // Reportar errores en consola
    if (m.errors.length) {
      console.warn("[CLI Modeler] Errores:");
      for (const e of m.errors) console.warn("  -", e);
    }
    (window as any).__hekatanCliErrors = m.errors;
    (window as any).__hekatanCliStats = {
      nodes: nodes.length, frames: m.frames.length, shells: m.shells.length,
      supports: supports.size, loads: loads.size, springs: springsList.length,
      solved: m.doSolve, errors: m.errors.length,
    };
  },
};
