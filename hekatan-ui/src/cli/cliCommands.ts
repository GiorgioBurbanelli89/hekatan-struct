/**
 * 💻 CLI Commands — API programable estilo SAP2000/OpenSees TCL.
 *
 *  Expone una API `cad.*` para que el usuario construya modelos por código:
 *
 *    cad.addNode(0, 0, 0)
 *    cad.addNode(5, 0, 0)
 *    cad.addFrame(0, 1)
 *    cad.addSupport(0, [true, true, true, true, true, true])
 *    cad.addLoad(1, [10, 0, 0, 0, 0, 0])
 *    cad.solve()
 *    cad.info()
 *
 *  El CLI puede invocarse desde:
 *    - REPL del CLI panel (string parser)
 *    - Console del navegador (window.cad)
 *    - Generators de alto nivel (cad.building, cad.galpon, etc.)
 */
import type { State } from "vanjs-core";
import type { Node, Element, NodeInputs, ElementInputs, DeformOutputs } from "hekatan-fem";

export interface CliBindings {
  nodes: State<Node[]>;
  elements: State<Element[]>;
  nodeInputs: State<NodeInputs>;
  elementInputs: State<ElementInputs>;
  deformOutputs?: State<DeformOutputs>;
  /** Optional: callback for re-solve after model edits */
  onModelChange?: () => void;
}

export interface CadApi {
  addNode(x: number, y: number, z: number): number;
  addFrame(i: number, j: number): number;
  addSupport(nodeIdx: number, fixed?: boolean[] | "fixed" | "pinned"): void;
  addLoad(nodeIdx: number, fxyz: number[]): void;
  setSection(elemIdx: number, props: Record<string, number>): void;
  clear(): void;
  info(): string;
  listNodes(): void;
  listElements(): void;
  /** High-level generators (delegan a hekatan-mesh) */
  building?(spansX: number[], spansY: number[], heights: number[]): void;
  galpon?(span: number, length: number, height: number, nFrames: number): void;
  truss?(span: number, height: number, nPanels: number): void;
  /** Trigger solve manually */
  solve?(): void;
}

const HELP_TEXT = `
CLI ready. Commands:
  cad.addNode(x, y, z)              → returns node index
  cad.addFrame(i, j)                → returns element index
  cad.addSupport(n, [ux,uy,uz,rx,ry,rz])  | cad.addSupport(n, "fixed"|"pinned")
  cad.addLoad(n, [fx, fy, fz, mx, my, mz])
  cad.setSection(e, { E, A, Iy, Iz, J, ... })
  cad.clear()                       — reset model
  cad.info()                        — print model size
  cad.listNodes() / cad.listElements()
  cad.solve()                       — re-run solver
High-level generators:
  cad.building([5,5], [4,4], [3,3,3])  → frame 5×4 plan, 3 stories
  cad.galpon(12, 20, 6, 3)             → galpón 12m span × 20m × 6m × 3 frames
  cad.truss(20, 4, 6)                  → truss 20m span × 4m height × 6 panels
`.trim();

export function buildCadApi(b: CliBindings): CadApi {
  const fire = () => b.onModelChange?.();

  function ensureMaps() {
    if (!b.nodeInputs.val.supports) b.nodeInputs.val.supports = new Map();
    if (!b.nodeInputs.val.loads) b.nodeInputs.val.loads = new Map();
  }

  return {
    addNode(x, y, z) {
      const n = b.nodes.val.slice();
      n.push([x, y, z]);
      b.nodes.val = n;
      fire();
      return n.length - 1;
    },
    addFrame(i, j) {
      const e = b.elements.val.slice();
      e.push([i, j]);
      b.elements.val = e;
      fire();
      return e.length - 1;
    },
    addSupport(nodeIdx, fixed) {
      ensureMaps();
      let arr: [boolean, boolean, boolean, boolean, boolean, boolean];
      if (fixed === "fixed" || fixed === undefined) {
        arr = [true, true, true, true, true, true];
      } else if (fixed === "pinned") {
        arr = [true, true, true, false, false, false];
      } else if (Array.isArray(fixed)) {
        arr = [fixed[0], fixed[1], fixed[2], fixed[3], fixed[4], fixed[5]] as any;
      } else {
        arr = [true, true, true, true, true, true];
      }
      b.nodeInputs.val.supports!.set(nodeIdx, arr);
      // trigger reactivity
      b.nodeInputs.val = { ...b.nodeInputs.val };
      fire();
    },
    addLoad(nodeIdx, fxyz) {
      ensureMaps();
      const v: [number, number, number, number, number, number] = [
        fxyz[0] ?? 0, fxyz[1] ?? 0, fxyz[2] ?? 0,
        fxyz[3] ?? 0, fxyz[4] ?? 0, fxyz[5] ?? 0,
      ];
      b.nodeInputs.val.loads!.set(nodeIdx, v);
      b.nodeInputs.val = { ...b.nodeInputs.val };
      fire();
    },
    setSection(elemIdx, props) {
      const ei = b.elementInputs.val as any;
      if (props.E != null) {
        ei.elasticities = ei.elasticities ?? new Map();
        ei.elasticities.set(elemIdx, props.E);
      }
      if (props.A != null) {
        ei.areas = ei.areas ?? new Map();
        ei.areas.set(elemIdx, props.A);
      }
      if (props.Iy != null) {
        ei.momentsOfInertiaY = ei.momentsOfInertiaY ?? new Map();
        ei.momentsOfInertiaY.set(elemIdx, props.Iy);
      }
      if (props.Iz != null) {
        ei.momentsOfInertiaZ = ei.momentsOfInertiaZ ?? new Map();
        ei.momentsOfInertiaZ.set(elemIdx, props.Iz);
      }
      if (props.J != null) {
        ei.torsionalConstants = ei.torsionalConstants ?? new Map();
        ei.torsionalConstants.set(elemIdx, props.J);
      }
      if (props.G != null) {
        ei.shearModuli = ei.shearModuli ?? new Map();
        ei.shearModuli.set(elemIdx, props.G);
      }
      b.elementInputs.val = { ...ei };
      fire();
    },
    clear() {
      b.nodes.val = [];
      b.elements.val = [];
      b.nodeInputs.val = { supports: new Map(), loads: new Map() };
      b.elementInputs.val = {} as ElementInputs;
      fire();
    },
    info() {
      const n = b.nodes.val.length;
      const e = b.elements.val.length;
      const sup = b.nodeInputs.val.supports?.size ?? 0;
      const lds = b.nodeInputs.val.loads?.size ?? 0;
      const msg = `Model: ${n} nodes, ${e} elements (${sup} supports, ${lds} loads)`;
      console.log(msg);
      return msg;
    },
    listNodes() {
      console.table(b.nodes.val.map((n, i) => ({ idx: i, x: n[0], y: n[1], z: n[2] })));
    },
    listElements() {
      console.table(b.elements.val.map((el, i) => ({ idx: i, nodes: el.join(" → ") })));
    },
    solve() { fire(); },
  };
}

export function getCliHelp(): string {
  return HELP_TEXT;
}

/** Parsea una línea CLI tipo "cad.addNode(0, 0, 0)" y la ejecuta contra el cad API.
 *  Retorna el resultado (o el error como string). */
export function evalCliLine(line: string, cad: CadApi): { ok: boolean; result?: any; error?: string } {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("//") || trimmed.startsWith("#")) {
    return { ok: true, result: undefined };
  }
  if (trimmed === "help" || trimmed === "?") {
    return { ok: true, result: HELP_TEXT };
  }
  try {
    // Inyecta `cad` al scope vía Function constructor (sin eval directo)
    const fn = new Function("cad", `return (${trimmed});`);
    const result = fn(cad);
    return { ok: true, result };
  } catch (e: any) {
    // Try as statement (no return)
    try {
      const fn = new Function("cad", trimmed);
      fn(cad);
      return { ok: true, result: undefined };
    } catch (e2: any) {
      return { ok: false, error: e2.message ?? e.message ?? String(e2) };
    }
  }
}
