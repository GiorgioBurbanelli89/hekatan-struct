/**
 * 📜 Solver Log — panel flotante con derivación + tiempos del solver FEM.
 *
 *  Muestra:
 *    1. Ensamblaje K_global  (T^T · K_local · T por elemento)
 *    2. Solve K · u = F      (SparseLU / dense, según solver)
 *    3. Desplazamientos      (max|u|, nodo crítico)
 *    4. Fuerzas internas     (F_int = K_local · T · u)
 *    5. Tiempos en ms por etapa
 *
 *  API: `createSolverLog()` retorna panel draggable + `update(stats)`.
 *  El driver (workspace) llama `update()` cuando termina cada análisis.
 */
import { onThemeChange } from "../theme";

export interface SolverStats {
  nNodes: number;
  nElements: number;
  nFrames?: number;
  nShells?: number;
  nSolids?: number;
  nSupports: number;
  nLoads: number;
  totalDOFs: number;
  freeDOFs: number;
  /** Tiempos en ms */
  timings?: {
    assembly?: number;
    solve?: number;
    internalForces?: number;
    total?: number;
  };
  /** max|u| del modelo (m) */
  maxDisplacement?: { value: number; nodeIdx: number; component: "ux" | "uy" | "uz" };
  /** Solver usado: "SparseLU" | "Dense" | "Eigen" */
  solverName?: string;
}

export interface SolverLogApi {
  el: HTMLDivElement;
  update(stats: SolverStats): void;
  show(): void;
  hide(): void;
  toggle(): void;
  destroy(): void;
}

export function createSolverLog(): SolverLogApi {
  const el = document.createElement("div");
  el.className = "hekatan-solver-log";
  Object.assign(el.style, {
    position: "fixed", top: "100px", right: "12px",
    width: "320px", maxHeight: "420px", overflow: "auto",
    background: "rgba(20, 24, 30, 0.94)",
    border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
    padding: "10px 12px", fontSize: "11px",
    fontFamily: "ui-monospace, Menlo, Consolas, monospace",
    color: "#e2e8f0", zIndex: "100",
    backdropFilter: "blur(6px)",
    display: "none",
  });

  // Header
  const header = document.createElement("div");
  Object.assign(header.style, {
    display: "flex", alignItems: "center", gap: "6px",
    marginBottom: "8px", paddingBottom: "6px",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    cursor: "move", userSelect: "none",
  });
  const titleEl = document.createElement("span");
  titleEl.textContent = "📜 Solver Log";
  Object.assign(titleEl.style, { flex: "1", fontWeight: "600", color: "#a5b4fc", fontSize: "12px" });
  header.appendChild(titleEl);
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "×";
  Object.assign(closeBtn.style, {
    background: "transparent", border: "none", color: "#e2e8f0",
    fontSize: "16px", cursor: "pointer", padding: "0 4px", lineHeight: "1",
  });
  closeBtn.onclick = () => api.hide();
  header.appendChild(closeBtn);
  el.appendChild(header);

  // Body (rendering target)
  const body = document.createElement("div");
  el.appendChild(body);

  // Drag
  let dragOff: { x: number; y: number } | null = null;
  header.addEventListener("mousedown", (e) => {
    const r = el.getBoundingClientRect();
    dragOff = { x: e.clientX - r.left, y: e.clientY - r.top };
    e.preventDefault();
  });
  window.addEventListener("mousemove", (e) => {
    if (!dragOff) return;
    el.style.left = `${e.clientX - dragOff.x}px`;
    el.style.top = `${e.clientY - dragOff.y}px`;
    el.style.right = "auto";
  });
  window.addEventListener("mouseup", () => { dragOff = null; });

  function render(stats: SolverStats) {
    const lines: string[] = [];

    // FEM Solver header
    lines.push(`<div style="font-weight:600;color:#fde68a;margin-bottom:4px">FEM Solver</div>`);
    lines.push(`<div style="margin-bottom:8px;color:#cbd5e1">`);
    lines.push(`  <div>Modelo: <b>${stats.nNodes}</b> nodos, <b>${stats.nElements}</b> elem</div>`);
    if (stats.nFrames != null) lines.push(`  <div>Frames: ${stats.nFrames}${stats.nShells ? ` &nbsp;|&nbsp; Shells: ${stats.nShells}` : ""}${stats.nSolids ? ` &nbsp;|&nbsp; Solids: ${stats.nSolids}` : ""}</div>`);
    lines.push(`  <div>Apoyos: ${stats.nSupports} &nbsp;|&nbsp; Cargas: ${stats.nLoads}</div>`);
    lines.push(`  <div>DOFs: ${stats.totalDOFs} total, ~${stats.freeDOFs} libres</div>`);
    lines.push(`</div>`);

    // Steps numbered
    lines.push(`<div style="color:#a5b4fc;font-weight:600">1. Ensamblaje K global (${stats.totalDOFs}×${stats.totalDOFs})</div>`);
    lines.push(`<div style="margin-left:10px;color:#cbd5e1;font-style:italic;font-size:10.5px">K_global = Σ T^T · K_local · T</div>`);

    if (stats.timings?.solve != null) {
      lines.push(`<div style="color:#a5b4fc;font-weight:600;margin-top:6px">2. K · u = F  →  ${stats.solverName ?? "SparseLU"}  →  <span style="color:#86efac">${stats.timings.solve.toFixed(1)} ms</span></div>`);
    }

    if (stats.maxDisplacement) {
      const md = stats.maxDisplacement;
      lines.push(`<div style="color:#a5b4fc;font-weight:600;margin-top:6px">3. Desplazamientos:</div>`);
      lines.push(`<div style="margin-left:10px;color:#cbd5e1">max|u| = <b style="color:#fde68a">${md.value.toExponential(4)} m</b> (nodo ${md.nodeIdx}, ${md.component})</div>`);
    }

    if (stats.timings?.internalForces != null) {
      lines.push(`<div style="color:#a5b4fc;font-weight:600;margin-top:6px">4. Fuerzas internas: <span style="color:#86efac">${stats.timings.internalForces.toFixed(1)} ms</span></div>`);
      lines.push(`<div style="margin-left:10px;color:#cbd5e1;font-style:italic;font-size:10.5px">F_int = K_local · T · u</div>`);
    }

    if (stats.timings?.total != null) {
      lines.push(`<div style="margin-top:10px;padding:6px 8px;background:rgba(134,239,172,0.1);border-left:3px solid #86efac;border-radius:3px">✓ Completado: <b>${stats.timings.total.toFixed(1)} ms</b></div>`);
    }
    body.innerHTML = lines.join("\n");
  }

  // Theme reactive
  onThemeChange((_n, c) => { if (c.background) el.style.background = `${c.background}EE`; });

  // Append to DOM
  document.body.appendChild(el);

  const api: SolverLogApi = {
    el,
    update(stats) { render(stats); },
    show() { el.style.display = "block"; },
    hide() { el.style.display = "none"; },
    toggle() { el.style.display = el.style.display === "none" ? "block" : "none"; },
    destroy() { el.remove(); },
  };
  return api;
}
