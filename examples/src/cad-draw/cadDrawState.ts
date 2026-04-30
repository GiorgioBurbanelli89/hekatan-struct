/**
 * Estado central del CAD Drawer + sincronización con CLI Modeler.
 *
 * El CAD produce CLI commands (texto) que se almacenan en
 * window.__hekatanCliScript. Si el usuario abre cli-modeler ve los
 * mismos comandos y puede editarlos. Si cambia al CAD, ve los nodos
 * dibujados. Es UN SOLO MODELO, dos VISTAS.
 */
import { emptyState, type CadDrawState, type CadNode, type CadLine, type CadArea } from "./cadDrawTypes";

let state: CadDrawState = emptyState();

export function getState(): CadDrawState {
  return state;
}

export function resetState(): void {
  state = emptyState();
  syncToCliScript();
}

/**
 * Reconstruir el script CLI a partir del modelo CAD actual.
 * Esto se llama después de cada acción de dibujo (addNode, addLine, etc.)
 * para que cli-modeler vea los comandos en tiempo real.
 */
export function syncToCliScript(): void {
  const lines: string[] = [
    "# CAD Drawer — modelo dibujado con mouse",
    "# (estos comandos se generan automaticamente cuando dibujas con CAD)",
    "",
  ];

  // Nodos
  if (state.model.nodes.size > 0) lines.push("# Nodos");
  for (const n of state.model.nodes.values()) {
    lines.push(`node ${n.id}  ${n.pos[0]}  ${n.pos[1]}  ${n.pos[2]}`);
  }
  if (state.model.nodes.size > 0) lines.push("");

  // Frames (lineas)
  if (state.model.lines.size > 0) lines.push("# Frames");
  for (const l of state.model.lines.values()) {
    if (l.kind === "edge") continue;  // edges puramente visuales no van al FEM
    lines.push(`frame ${l.id}  ${l.nI} ${l.nJ}  25e6  0.16  0.0021`);
  }
  if (state.model.lines.size > 0) lines.push("");

  // Shells (areas)
  if (state.model.areas.size > 0) lines.push("# Shells");
  for (const a of state.model.areas.values()) {
    if (a.pts.length < 3) continue;
    if (a.pts.length === 4) {
      lines.push(`shell ${a.id}  ${a.pts.join(" ")}  0.20  25e6`);
    } else {
      // Triángulo: dejar como comentario porque shell solo soporta Q4
      lines.push(`# shell ${a.id} (3 nodos — triangle, FEM no soportado, solo visual)`);
    }
  }
  if (state.model.areas.size > 0) lines.push("");

  (window as any).__hekatanCliScript = lines.join("\n");
}

export function addNodeAt(pos: [number, number, number]): CadNode {
  const id = state.nextNodeId++;
  const node: CadNode = { id, pos };
  state.model.nodes.set(id, node);
  syncToCliScript();
  return node;
}

export function addLine(nI: number, nJ: number, kind: "frame" | "edge" = "frame"): CadLine {
  const id = state.nextLineId++;
  const line: CadLine = { id, nI, nJ, kind };
  state.model.lines.set(id, line);
  syncToCliScript();
  return line;
}

export function addArea(pts: number[], kind: "shell" | "panel" = "shell"): CadArea {
  const id = state.nextAreaId++;
  const area: CadArea = { id, pts, kind };
  state.model.areas.set(id, area);
  syncToCliScript();
  return area;
}

export function removeNode(id: number): boolean {
  const ok = state.model.nodes.delete(id);
  // Limpiar cualquier line/area que referencie ese nodo
  for (const [lid, l] of state.model.lines) {
    if (l.nI === id || l.nJ === id) state.model.lines.delete(lid);
  }
  for (const [aid, a] of state.model.areas) {
    if (a.pts.includes(id)) state.model.areas.delete(aid);
  }
  if (ok) syncToCliScript();
  return ok;
}

export function setTool(t: CadDrawState["tool"]): void {
  state.tool = t;
  state.pendingNodes = [];  // Reset buffer al cambiar tool
}

export function setSnap(s: number): void {
  state.snap = Math.max(0, s);
}

export function setWorkPlane(p: CadDrawState["workPlane"]): void {
  state.workPlane = p;
  state.pendingNodes = [];
}

export function setWorkZ(z: number): void {
  state.workZ = z;
}

/** Estadísticas del modelo (para mostrar en Tweakpane). */
export function getStats() {
  return {
    nodes: state.model.nodes.size,
    lines: state.model.lines.size,
    areas: state.model.areas.size,
    solids: state.model.solids.size,
    tool: state.tool,
    snap: state.snap,
    workPlane: state.workPlane,
    workZ: state.workZ,
    pending: state.pendingNodes.length,
  };
}

// Expose to window for debug + para que CAD/CLI puedan leer/editar el estado
(window as any).__hekatanCadState = {
  get: getState,
  reset: resetState,
  addNode: addNodeAt,
  addLine,
  addArea,
  setTool,
  getStats,
};
