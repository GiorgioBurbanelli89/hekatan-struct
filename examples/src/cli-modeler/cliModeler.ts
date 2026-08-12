/**
 * CLI Modeler — modelar estructuras con comandos tipo SAP/ETABS.
 *
 * Permite construir un modelo 3D desde cero escribiendo comandos en una
 * textarea (ver workspace/main.ts donde se agrega el folder de comandos).
 *
 * SINTAXIS DE COMANDOS:
 *   node ID X Y Z              (nodo en coordenada X, Y, Z)
 *   frame ID nI nJ E A I       (frame entre nodos nI y nJ)
 *   frame ID nI nJ E A Iz Iy J nu rho    (forma larga, tokens opcionales)
 *       El ORDEN de los tokens NO cambia: el 6º sigue siendo la inercia de la
 *       flexión HORIZONTAL de una viga y el 7º la de la VERTICAL (el canto va
 *       en el 7º). Los .heks ya escritos se leen igual.
 *       En nomenclatura CSI, que es la que usan ahora los ejes locales:
 *       el 6º es I22 (flexión en el plano 1-3: V3 y M2) y el 7º es I33
 *       (plano 1-2: V2 y M3). Antes iban al revés en el motor, no aquí.
 *       Sin los tokens extra: Iy=Iz, J=0.14·(√A)⁴, nu=0.2, rho=2.45 (hormigón).
 *   shell ID n1 n2 n3 n4 t E   (shell Q4 con 4 nodos y espesor t)
 *   shell ID n1 n2 n3 n4 t E q rho   (forma larga, tokens opcionales)
 *       q   = carga de superficie del propio shell, kN/m2 (+z). 0 = ninguna.
 *       rho = densidad, t/m3. Sin el token: 2.45 (hormigón macizo).
 *       Para dar rho sin carga hay que escribir q = 0: los tokens son
 *       posicionales. Un DECK metálico colaborante NO es losa maciza — su
 *       hormigón son la loseta más los nervios, así que pesa menos a igual
 *       canto y se declara con la densidad homogeneizada.
 *   support nodeID DOFs        (DOFs = "fixed" o "pinned" o "uxuyuz")
 *   load nodeID FX FY FZ MX MY MZ
 *   frameload frameID WX WY WZ (carga repartida sobre la barra, kN/m, globales)
 *       Es el `SetLoadDistributed` de ETABS. Se convierte a las fuerzas Y
 *       MOMENTOS de empotramiento de la barra, que es exacto para los
 *       desplazamientos y las reacciones. Usarlo en vez de repartir a mano por
 *       ancho tributario: el tributario ignora que la viga es CONTINUA sobre
 *       sus apoyos y se equivoca al lado de un vano ancho.
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
import { deform, analyze, type Node, type Element } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

interface ParsedModel {
  nodes: Map<number, [number, number, number]>;
  frames: Array<{
    id: number; nI: number; nJ: number; E: number; A: number; I: number;
    /** opcionales: sección asimétrica y material distinto al hormigón por defecto */
    Iy?: number; J?: number; nu?: number; rho?: number;
    /** canto y ancho reales; solo para exportar (brazos de ETABS), no para calcular */
    D?: number; B?: number;
    /** nombre de la seccion, del comentario `# VA-250`. Solo para exportar. */
    sec?: string;
  }>;
  shells: Array<{ id: number; pts: number[]; t: number; E: number; rho?: number }>;
  /** Carga de SUPERFICIE por shell, en kN/m2 (+z arriba). Ver areaload. */
  shellLoads: Map<number, number>;
  /** Modificadores de rigidez por shell: [membrana, flexion]. Default 1,1.
   *  Es el «Assign -> Area -> Stiffness Modifiers» de ETABS. Un DECK aporta
   *  poca flexion: con bending 0 trabaja como membrana y entrega la carga a
   *  las secundarias, en vez de rigidizar como losa maciza en dos sentidos. */
  shellMods: Map<number, [number, number]>;
  /** Modificadores DIRECCIONALES por shell, 8 valores en el orden del e2k
   *  de ETABS: F11 F22 F12 M11 M22 M12 V13 V23. Es lo que define un DECK:
   *  rigido en el sentido del nervio y blando cruzado. */
  shellModsDir: Map<number, number[]>;
  /** Angulo del eje local 1 del shell, en grados. En Hekatan no cambia el
   *  calculo (la unidireccionalidad sale del reparto en la malla, no de un
   *  modificador: `shellmod 1 1 1 0 0 0 1 1` es isotropo en membrana), pero
   *  ETABS lo NECESITA — es lo que decide a que vigas les entrega la carga un
   *  deck. Sin declararlo, el e2k exportado sale con ANG 0 y en ETABS el deck
   *  salva al reves. */
  shellAngles: Map<number, number>;
  /** angulo local de cada barra, en grados (comando `ang`) */
  frameAngles: Map<number, number>;
  /** Objetos de area: el area COMO LA DIBUJO el usuario, antes de mallarla.
   *  Hekatan resuelve con las celdas (`shells`), pero ETABS guarda UN objeto y
   *  lo malla por dentro. Sin esto el e2k exportado saca 90 areas donde ETABS
   *  saca 1: analiza igual, pero el modelo ya no es el mismo, y reimportarlo
   *  deja la malla congelada. `cells` son los IDs de shell que lo implementan. */
  areaObjs: Array<{ id: number; pts: number[]; cells: number[] }>;
  supports: Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>;
  loads: Map<number, [number, number, number, number, number, number]>;
  /** Carga uniformemente repartida sobre una BARRA, kN/m, en ejes GLOBALES.
   *  Es el `SetLoadDistributed` de ETABS. Hasta ahora solo habia carga nodal,
   *  asi que quien generaba el modelo tenia que repartir la carga a mano por
   *  ancho tributario — y eso IGNORA que la viga es continua sobre sus apoyos:
   *  medido contra ETABS, un tributario simple manda 16 % menos carga al apoyo
   *  interior del vano ancho y 23 % mas al extremo. */
  frameLoads: Map<number, [number, number, number]>;
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
    shellLoads: new Map(),
    shellMods: new Map(),
    shellModsDir: new Map(),
    shellAngles: new Map(),
    frameAngles: new Map(),
    areaObjs: [],
    supports: new Map(),
    loads: new Map(),
    frameLoads: new Map(),
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
          // Tokens opcionales: una sola I solo sirve para secciones simétricas.
          // Un perfil de acero (2L en cajón: Ix/Iy = 15×) necesita las dos, y
          // el acero no tiene ν=0.2 ni ρ=2.45. Si no vienen, se comporta como
          // antes — los .heks viejos siguen leyéndose igual.
          const Iy = tokens[7] !== undefined ? parseFloat(tokens[7]) : undefined;
          const J = tokens[8] !== undefined ? parseFloat(tokens[8]) : undefined;
          const nu = tokens[9] !== undefined ? parseFloat(tokens[9]) : undefined;
          const rho = tokens[10] !== undefined ? parseFloat(tokens[10]) : undefined;
          // Canto y ancho REALES de la seccion. No entran al calculo — Hekatan
          // resuelve con A, I y J — pero ETABS saca de ahi los BRAZOS de los
          // extremos (el tramo que queda dentro del nudo). Sin declararlos hay
          // que deducir un rectangulo equivalente de A e I, y para un perfil I
          // eso da otro canto: la VA-250 salia con 0.357 m en vez de 0.250, y
          // ETABS le ponia un brazo de 0.357. No cambia la rigidez (el factor
          // de zona rigida es 0 por defecto, medido) pero si donde se reportan
          // momentos y cortantes, o sea el diseno.
          const D = tokens[11] !== undefined ? parseFloat(tokens[11]) : undefined;
          const B = tokens[12] !== undefined ? parseFloat(tokens[12]) : undefined;
          // NOMBRE de la seccion, del comentario de la linea: `... # VA-250`.
          // No entra al calculo, pero sin el, el exportador de e2k no tiene con
          // que nombrar las secciones y las saca como S_G1..S_G7 — un modelo
          // reimportado en ETABS con secciones anonimas, imposible de casar
          // contra el original. El tokenizador no descarta el comentario
          // inline (solo salta las lineas que EMPIEZAN por #), asi que esta ahi.
          const iCom = tokens.indexOf("#");
          const sec = iCom >= 0 && tokens[iCom + 1] ? tokens[iCom + 1] : undefined;
          m.frames.push({ id, nI, nJ, E, A, I, Iy, J, nu, rho, D, B, sec });
          break;
        }
        // ── ANGULO LOCAL de una barra: `ang <frameID> <grados>` ──
        // Es el "local axis angle" de CSI: gira la seccion alrededor del eje de
        // la barra. Hace falta para las cerchas de cordon en C — con angulo 0 la
        // hendidura de la C mira fuera del plano de la cercha y el alma no
        // sujeta las diagonales 2L. Sin este comando no habia forma de decirlo
        // en un .heks y el e2k exportado salia con ANG 0 en todas las barras,
        // mientras el de ETABS llevaba 294 con ANG 90.
        case "ang":
        case "localaxis": {
          const fid = parseInt(tokens[1], 10);
          const g = parseFloat(tokens[2] ?? "0");
          if (isFinite(fid) && isFinite(g)) m.frameAngles.set(fid, g);
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
          // token opcional 9: densidad. Sin el, hormigon macizo (2.45 t/m3).
          // Hace falta para el DECK colaborante, que a igual canto pesa menos
          // que una losa maciza porque su hormigon son loseta + nervios.
          const rhoTok = tokens[9] !== undefined ? parseFloat(tokens[9]) : undefined;
          const rho = rhoTok !== undefined && isFinite(rhoTok) ? rhoTok : undefined;
          m.shells.push({ id, pts, t, E, rho });
          // token opcional 8: carga de superficie del propio shell
          if (tokens[8] !== undefined) {
            const q = parseFloat(tokens[8]);
            if (isFinite(q) && q !== 0) m.shellLoads.set(id, q);
          }
          break;
        }
        // ── carga de SUPERFICIE sobre un area: areaload shellID q ──
        // q en kN/m2, positivo hacia +z. Antes solo existia `load` nodal, asi
        // que una losa habia que repartirla a mano entre sus nudos: eso ignora
        // la forma del area, los huecos y a quien le toca cargar.
        // shellmod ID mem bend  — modificadores de rigidez del shell
        case "shellmod": {
          // Dos formas:
          //   shellmod ID membrana flexion                       (escalar)
          //   shellmod ID f11 f22 f12 m11 m22 m12 v13 v23        (direccional)
          const id = parseInt(tokens[1], 10);
          if (!isFinite(id)) break;
          const vals = tokens.slice(2).map(parseFloat);
          if (vals.length >= 8) {
            m.shellModsDir.set(id, vals.slice(0, 8).map(v => isFinite(v) ? v : 1));
          } else {
            const mm = vals[0], bb = vals[1];
            m.shellMods.set(id, [isFinite(mm) ? mm : 1, isFinite(bb) ? bb : 1]);
          }
          break;
        }
        case "areaobj": {
          // areaobj ID n1 n2 n3 n4 desdeShell hastaShell
          const v = tokens.slice(1).map(t => parseInt(t, 10));
          if (v.length < 7 || v.some(x => !isFinite(x))) {
            m.errors.push(`areaobj: se esperaba "areaobj ID n1 n2 n3 n4 desdeShell hastaShell"`);
            break;
          }
          const [id, a1, a2, a3, a4, desde, hasta] = v;
          const cells: number[] = [];
          for (let k = desde; k <= hasta; k++) cells.push(k);
          m.areaObjs.push({ id, pts: [a1, a2, a3, a4], cells });
          break;
        }
        case "shellang":
        case "ang": {
          // shellang ID grados — angulo del eje local 1 (como SetLocalAxes de ETABS)
          const id = parseInt(tokens[1], 10);
          const deg = parseFloat(tokens[2]);
          if (!isFinite(id) || !isFinite(deg)) {
            m.errors.push(`shellang: se esperaba "shellang shellID grados"`);
            break;
          }
          m.shellAngles.set(id, deg);
          break;
        }
        case "areaload":
        case "qarea": {
          const id = parseInt(tokens[1], 10);
          const q = parseFloat(tokens[2]);
          if (!isFinite(id) || !isFinite(q)) {
            m.errors.push(`areaload: se esperaba "areaload shellID q"`);
            break;
          }
          m.shellLoads.set(id, q);
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
        case "frameload":
        case "fl": {
          // frameload frameID wx wy wz   (kN/m, ejes globales)
          const fid = parseInt(tokens[1], 10);
          const wx = parseFloat(tokens[2] ?? "0");
          const wy = parseFloat(tokens[3] ?? "0");
          const wz = parseFloat(tokens[4] ?? "0");
          const ant = m.frameLoads.get(fid) ?? [0, 0, 0];
          m.frameLoads.set(fid, [ant[0] + wx, ant[1] + wy, ant[2] + wz]);
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
          m.supports.clear(); m.loads.clear(); m.frameLoads.clear();
          m.springs.length = 0;
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
  category: "🧪 Utilidades",
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
    const shellIdxOf = new Map<number, number>();   // id de shell -> indice de elemento
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
    // Nombres CSI para que no haya duda de cual va a que plano: I22 es la
    // flexion en el plano 1-3 (V3, M2) y I33 la del plano 1-2 (V2, M3).
    const I22 = new Map<number, number>();
    const I33 = new Map<number, number>();
    const J = new Map<number, number>();
    const densities = new Map<number, number>();
    // Canto y ancho reales de cada barra: NO entran al calculo (mandan A, I y
    // J), solo al e2k — ETABS saca de ahi los brazos de los extremos.
    const cantos = new Map<number, number>();
    const anchos = new Map<number, number>();
    const sectionShapes = new Map<number, any>();
    const localAngles = new Map<number, number>();
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
      const nu = f.nu ?? 0.2;
      elasticities.set(eIdx, f.E);
      shearModuli.set(eIdx, f.E / (2 * (1 + nu)));
      areas.set(eIdx, f.A);
      I22.set(eIdx, f.I);            // token 6
      I33.set(eIdx, f.Iy ?? f.I);    // token 7 (el del canto)
      J.set(eIdx, f.J ?? 0.14 * Math.pow(Math.sqrt(f.A), 4));
      densities.set(eIdx, f.rho ?? 2.45);
      poissons.set(eIdx, nu);
      if (f.D !== undefined && isFinite(f.D)) cantos.set(eIdx, f.D);
      if (f.B !== undefined && isFinite(f.B)) anchos.set(eIdx, f.B);
      const angF = m.frameAngles.get(f.id);
      if (angF !== undefined && isFinite(angF)) localAngles.set(eIdx, angF);
      // Forma de la seccion CON SU NOMBRE, para el exportador de e2k. Sin esto
      // sale `S_G1..S_G7` y el modelo reimportado en ETABS no se puede casar
      // contra el original.
      if (f.sec || (f.D !== undefined && f.B !== undefined)) {
        const sh: any = { type: "general" };
        if (f.sec) sh.name = f.sec;
        if (f.D !== undefined && isFinite(f.D)) sh.h = f.D;
        if (f.B !== undefined && isFinite(f.B)) sh.b = f.B;
        sectionShapes.set(eIdx, sh);
      }
    }
    for (const s of m.shells) {
      const idxs = s.pts.map(id => idToIdx.get(id));
      if (idxs.some(i => i === undefined)) {
        m.errors.push(`shell ${s.id}: algun nodo inexistente`);
        continue;
      }
      const eIdx = elements.length;
      shellIdxOf.set(s.id, eIdx);
      elements.push(idxs as Element);
      elasticities.set(eIdx, s.E);
      shearModuli.set(eIdx, s.E / (2 * 1.2));
      thicknesses.set(eIdx, s.t);
      densities.set(eIdx, s.rho ?? 2.45);
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
      if (idx !== undefined) loads.set(idx, [...ld]);
    }

    // ── frameload -> cargas nodales CONSISTENTES (fuerzas + momentos) ────────
    // Una carga repartida w sobre una barra de longitud L se sustituye por sus
    // fuerzas de empotramiento perfecto:
    //     F_i = F_j = w·L/2
    //     M_i = +(L²/12)·(t × w)      M_j = −(L²/12)·(t × w)
    // con t = versor de la barra. Esto es EXACTO para los desplazamientos y las
    // reacciones nodales, y es lo que distingue una viga continua de un reparto
    // por ancho tributario: sin los MOMENTOS, el apoyo interior de un vano ancho
    // recibe de menos y el extremo de mas (medido: −16 % y +23 % en el galpon).
    // Comprobacion del signo, viga en +x con carga hacia abajo w=(0,0,−q):
    // t×w = (0,+q,0) -> M_i = +qL²/12 alrededor de +y, que es el empotramiento
    // que da la teoria de vigas.
    if (m.frameLoads.size) {
      const acum = (idx: number, v: number[]) => {
        const a = loads.get(idx) ?? [0, 0, 0, 0, 0, 0];
        loads.set(idx, [a[0]+v[0], a[1]+v[1], a[2]+v[2],
                        a[3]+v[3], a[4]+v[4], a[5]+v[5]] as
                       [number,number,number,number,number,number]);
      };
      for (const [fid, w] of m.frameLoads.entries()) {
        const f = m.frames.find(fr => fr.id === fid);
        if (!f) { m.errors.push(`frameload ${fid}: no existe esa barra`); continue; }
        const iI = idToIdx.get(f.nI), iJ = idToIdx.get(f.nJ);
        if (iI === undefined || iJ === undefined) continue;
        const a = nodes[iI], b = nodes[iJ];
        const d = [b[0]-a[0], b[1]-a[1], b[2]-a[2]];
        const L = Math.hypot(d[0], d[1], d[2]);
        if (L < 1e-9) continue;
        const t = [d[0]/L, d[1]/L, d[2]/L];
        const c = L*L/12;
        const txw = [t[1]*w[2] - t[2]*w[1],
                     t[2]*w[0] - t[0]*w[2],
                     t[0]*w[1] - t[1]*w[0]];
        acum(iI, [w[0]*L/2, w[1]*L/2, w[2]*L/2,  c*txw[0],  c*txw[1],  c*txw[2]]);
        acum(iJ, [w[0]*L/2, w[1]*L/2, w[2]*L/2, -c*txw[0], -c*txw[1], -c*txw[2]]);
      }
    }

    // ── CARGA DE SUPERFICIE -> vector de fuerzas nodales CONSISTENTE ────────
    // Una carga de area entra al FEM por un unico camino: su vector de fuerzas
    // nodales equivalente, f_i = integral(N_i * q * dA). No hay otro. Por eso
    // calcularlo aca, antes de llamar al solver, da el MISMO resultado que
    // hacerlo dentro del kernel: es la definicion, no un atajo.
    //
    // Se integra en el cuadrado patron con Gauss 2x2 y el jacobiano REAL. En un
    // rectangulo sale q*A/4 en cada nudo; en un cuadrilatero deformado NO, y ahi
    // esta la diferencia con repartir el area entre 4. Verificado contra ETABS
    // (galpon-bodega-electoral/re_carga_area_etabs.py): la suma da q por el area
    // exacta del poligono, tambien en trapecio y en triangulo.
    const cargaDeArea = new Map<number, number>();
    const G2 = 1 / Math.sqrt(3);
    const GAUSS: Array<[number, number]> = [[-G2, -G2], [G2, -G2], [G2, G2], [-G2, G2]];
    for (const s of m.shells) {
      const q = m.shellLoads.get(s.id);
      if (!q) continue;
      const idx = s.pts.map((p) => idToIdx.get(p));
      if (idx.some((i) => i === undefined)) {
        m.errors.push(`areaload ${s.id}: algun nodo inexistente`);
        continue;
      }
      const P = idx.map((i) => nodes[i as number]);
      const f = [0, 0, 0, 0];
      for (const [xi, eta] of GAUSS) {
        const N = [0.25 * (1 - xi) * (1 - eta), 0.25 * (1 + xi) * (1 - eta),
                   0.25 * (1 + xi) * (1 + eta), 0.25 * (1 - xi) * (1 + eta)];
        const dNx = [-0.25 * (1 - eta), 0.25 * (1 - eta), 0.25 * (1 + eta), -0.25 * (1 + eta)];
        const dNe = [-0.25 * (1 - xi), -0.25 * (1 + xi), 0.25 * (1 + xi), 0.25 * (1 - xi)];
        // vectores tangentes: sirven para cualquier plano, no solo el XY
        const a = [0, 1, 2].map((k) => dNx.reduce((s2, d, i) => s2 + d * P[i][k], 0));
        const b = [0, 1, 2].map((k) => dNe.reduce((s2, d, i) => s2 + d * P[i][k], 0));
        const cr = [a[1] * b[2] - a[2] * b[1],
                    a[2] * b[0] - a[0] * b[2],
                    a[0] * b[1] - a[1] * b[0]];
        const detJ = Math.hypot(cr[0], cr[1], cr[2]);   // area diferencial real
        for (let i = 0; i < 4; i++) f[i] += N[i] * q * detJ;
      }
      for (let i = 0; i < 4; i++) {
        const k = idx[i] as number;
        const prev = loads.get(k) ?? [0, 0, 0, 0, 0, 0];
        prev[2] += f[i];                                 // Fz
        loads.set(k, prev as [number,number,number,number,number,number]);
        // Se anota APARTE cuanto de la carga de ese nudo vino del area. El
        // solver usa `loads` y no le importa, pero el exportador e2k si: ahi
        // la carga se escribe como AREALOAD sobre el objeto, y si ademas
        // saliera como POINTLOAD quedaria contada DOS VECES.
        cargaDeArea.set(k, (cargaDeArea.get(k) ?? 0) + f[i]);
      }
    }
    const springsList: Array<{node:number; dof:number; k:number}> = [];
    for (const sp of m.springs) {
      const idx = idToIdx.get(sp.node);
      if (idx !== undefined) springsList.push({ node: idx, dof: sp.dof, k: sp.k });
    }

    states.nodes.val = nodes;
    states.elements.val = elements;
    states.nodeInputs.val = { supports, loads };
    // Modificadores por elemento, indexados como los shells en `elements`
    const membraneModifiers = new Map<number, number>();
    const bendingModifiers = new Map<number, number>();
    const shellModifiers = new Map<number, number[]>();
    // Se guardan para el EXPORTADOR e2k, no para el solver: la carga de area
    // ya se repartio a los nudos arriba, pero ETABS la escribe como AREALOAD
    // sobre el objeto. Si se exporta ya repartida, al reimportar queda clavada
    // en los nudos y deja de redistribuirse al cambiar la malla.
    const shellSurfaceLoads = new Map<number, number>();
    const shellAngles = new Map<number, number>();
    for (const s of m.shells) {
      const eIdx = shellIdxOf.get(s.id);
      if (eIdx === undefined) continue;
      const qs = m.shellLoads.get(s.id);
      if (qs !== undefined) shellSurfaceLoads.set(eIdx, qs);
      const ang = m.shellAngles.get(s.id);
      if (ang !== undefined) shellAngles.set(eIdx, ang);
      const dir = m.shellModsDir.get(s.id);
      if (dir) {
        shellModifiers.set(eIdx, dir);
        // Y ADEMAS el par escalar equivalente. `deform` lee los 8 direccionales,
        // pero el MODAL solo lee membraneModifiers/bendingModifiers: si aqui se
        // hacia `continue`, esos dos mapas quedaban vacios y el modal armaba el
        // deck con flexion 1 (losa maciza) mientras el estatico lo armaba con la
        // flexion 0 declarada. Salian dos rigideces distintas para el MISMO
        // modelo — en el mezanine, +12.6 % en UY y +28 % en el modo vertical.
        // Promediar F11/F22 y M11/M22 es exacto cuando el shell es isotropo
        // (el caso de un `shellmod ID 1 1 1 0 0 0 1 1`) y aproximado solo si es
        // de verdad ortotropo.
        membraneModifiers.set(eIdx, (dir[0] + dir[1]) / 2);
        bendingModifiers.set(eIdx, (dir[3] + dir[4]) / 2);
        continue;
      }
      const mods = m.shellMods.get(s.id);
      if (mods) {
        membraneModifiers.set(eIdx, mods[0]);
        bendingModifiers.set(eIdx, mods[1]);
      }
    }

    states.elementInputs.val = {
      elasticities, shearModuli, areas,
      // Con los ejes locales en convencion CSI, momentsOfInertiaY gobierna la
      // flexion en el plano 1-3 (= I22) y momentsOfInertiaZ la del 1-2 (= I33).
      // Antes era al reves, y por eso el mapeo aqui esta cruzado respecto a la
      // version anterior: el token del .heks no cambio, cambio el motor.
      momentsOfInertiaY: I22, momentsOfInertiaZ: I33,
      torsionalConstants: J, densities, poissonsRatios: poissons, thicknesses,
      membraneModifiers, bendingModifiers, shellModifiers,
      shellSurfaceLoads, shellAngles, cargaDeArea, cantos, anchos, sectionShapes, localAngles,
      areaObjects: m.areaObjs.map(o => ({
        nodes: o.pts.map(id => idToIdx.get(id)).filter(i => i !== undefined) as number[],
        cells: o.cells.map(id => shellIdxOf.get(id)).filter(i => i !== undefined) as number[],
        q: o.cells.map(id => m.shellLoads.get(id)).find(v => v !== undefined),
        ang: o.cells.map(id => m.shellAngles.get(id)).find(v => v !== undefined),
      })).filter(o => o.nodes.length === 4 && o.cells.length > 0),
    } as any;

    if (m.doSolve && nodes.length && elements.length) {
      try {
        states.deformOutputs.val = deform(
          nodes, elements, states.nodeInputs.val, states.elementInputs.val,
          springsList.length ? springsList : undefined,
        );
        // Y los RESULTADOS: momentos, cortantes, tensiones. El CLI solo corria
        // `deform` (desplazamientos), asi que `analyzeOutputs` quedaba vacio y
        // los paneles de «Frame results» y «Shell results» no tenian nada que
        // dibujar — parecian rotos cuando en realidad nadie los habia
        // calculado.
        try {
          states.analyzeOutputs.val = analyze(
            nodes, elements, states.elementInputs.val,
            states.deformOutputs.val,
          );
        } catch (e: any) {
          console.warn("[CLI Modeler] analyze:", e?.message ?? e);
        }
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
    // Resultado en las stats: sin esto, abrir un .heks solo dice cuántas
    // barras entraron, y uno no sabe si el modelo se resolvió BIEN. Con la
    // flecha y la suma de reacciones a la vista, un modelo flojo o mal
    // apoyado se nota de una (ΣRz debe dar la carga aplicada).
    let maxUz = 0, sumRz = 0;
    const dOut = states.deformOutputs.val;
    if (dOut?.deformations?.size) {
      for (const [, v] of dOut.deformations) {
        if (Math.abs(v[2]) > Math.abs(maxUz)) maxUz = v[2];
      }
    }
    if (dOut?.reactions?.size) {
      for (const [, v] of dOut.reactions) sumRz += v[2] || 0;
    }
    (window as any).__hekatanCliStats = {
      nodes: nodes.length, frames: m.frames.length, shells: m.shells.length,
      supports: supports.size, loads: loads.size, springs: springsList.length,
      solved: m.doSolve, errors: m.errors.length,
      maxUzMm: +(maxUz * 1000).toFixed(3), sumRz: +sumRz.toFixed(1),
    };
  },
};
