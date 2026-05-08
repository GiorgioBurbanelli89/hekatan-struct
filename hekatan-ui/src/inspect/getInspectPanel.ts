/**
 * 🔍 Inspect Panel — visor didáctico FEM por elemento.
 *
 *  Muestra para un elemento frame:
 *    Tab 1: TABLA      — Propiedades + K_local 12×12 + T 12×12 + K_global = T^T·K·T
 *    Tab 2: MATEMÁTICA — derivación KaTeX (DOFs, funciones de forma N₁/N₂,
 *                         polinomios de Hermite H₁..H₄, derivadas, curvatura)
 *    Tab 3: RESUMEN    — info ejecutiva del elemento
 *
 *  API minimal: `createInspectPanel({ getActiveElement })` retorna un panel
 *  flotante draggable. La activación (toggle, click sobre elemento) se hace
 *  desde el workspace o desde el panel del viewer.
 *
 *  Sin dependencias externas pesadas — solo Three.js + KaTeX (cargado dinámicamente).
 *  Estilo limpio, integrado con el theme de Hekatan-UI.
 */
import { computeFrameMatrices, matrixToText, type FrameElementProps, type FrameElementGeom, type FrameMatrices } from "./elementMath";
import { renderElementMath } from "./inspectMath";
import { getTheme, onThemeChange } from "../theme";
import type { Node } from "hekatan-fem";

export interface InspectElementData {
  /** Índice del elemento (para mostrar "Element 27") */
  index: number;
  /** Tipo: "frame" | "shell" | "solid" — determina qué tabs se muestran */
  type: "frame" | "shell" | "solid";
  /** Nodos del elemento (i, j para frame; cuatro para Q4; ocho para H8) */
  nodes: Node[];
  /** Índices globales de los nodos */
  nodeIndices: number[];
  /** Propiedades para frame (vacío para shell/solid por ahora) */
  frameProps?: FrameElementProps;
  /** Etiqueta amigable, ej. "rect 30×40" o "W360x72" */
  sectionLabel?: string;
}

export interface InspectPanelApi {
  el: HTMLDivElement;
  show(data: InspectElementData): void;
  hide(): void;
  toggle(): void;
  destroy(): void;
}

const PANEL_WIDTH = 540;
const PANEL_HEIGHT = 600;

export function createInspectPanel(): InspectPanelApi {
  const t = getTheme();

  // ── Container raíz (draggable + minimizable) ──
  const el = document.createElement("div");
  el.className = "hekatan-inspect-panel";
  Object.assign(el.style, {
    position: "fixed",
    top: "70px",
    right: "12px",
    width: `${PANEL_WIDTH}px`,
    maxHeight: `${PANEL_HEIGHT}px`,
    background: "rgba(20, 24, 30, 0.94)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "8px",
    boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
    fontFamily: "ui-sans-serif, system-ui, sans-serif",
    fontSize: "12px",
    color: "#e2e8f0",
    zIndex: "100",
    backdropFilter: "blur(6px)",
    display: "none",
    flexDirection: "column",
    overflow: "hidden",
  });

  // ── Header ──
  const header = document.createElement("div");
  Object.assign(header.style, {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 10px",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    cursor: "move",
    userSelect: "none",
    background: "rgba(255,255,255,0.03)",
  });
  const titleBadge = document.createElement("span");
  Object.assign(titleBadge.style, {
    background: "#f59e0b", color: "#1a1a1a", padding: "2px 8px",
    borderRadius: "4px", fontWeight: "600", fontSize: "11px",
  });
  titleBadge.textContent = "Element —";
  header.appendChild(titleBadge);
  const titleText = document.createElement("span");
  Object.assign(titleText.style, { flex: "1", fontSize: "12px", color: "#cbd5e1" });
  titleText.textContent = "—";
  header.appendChild(titleText);
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "×";
  Object.assign(closeBtn.style, {
    background: "transparent", border: "none", color: "#e2e8f0",
    fontSize: "20px", cursor: "pointer", padding: "0 6px", lineHeight: "1",
  });
  closeBtn.onclick = () => api.hide();
  header.appendChild(closeBtn);
  el.appendChild(header);

  // ── Tabs ──
  const tabs = document.createElement("div");
  Object.assign(tabs.style, {
    display: "flex", borderBottom: "1px solid rgba(255,255,255,0.1)",
  });
  el.appendChild(tabs);

  const tabNames = ["Tabla", "Matemática", "Resumen"];
  const tabBtns: HTMLButtonElement[] = [];
  let activeTab = 0;
  for (let i = 0; i < tabNames.length; i++) {
    const b = document.createElement("button");
    b.textContent = tabNames[i];
    Object.assign(b.style, {
      flex: "1", background: "transparent", border: "none",
      color: i === 0 ? "#a5b4fc" : "#94a3b8",
      borderBottom: i === 0 ? "2px solid #a5b4fc" : "2px solid transparent",
      padding: "8px 0", cursor: "pointer", fontSize: "12px",
      fontWeight: i === 0 ? "600" : "400",
    });
    b.onclick = () => switchTab(i);
    tabs.appendChild(b);
    tabBtns.push(b);
  }

  // ── Body (scroll) ──
  const body = document.createElement("div");
  Object.assign(body.style, {
    flex: "1", overflow: "auto", padding: "10px 12px",
    fontSize: "11.5px", lineHeight: "1.5",
  });
  el.appendChild(body);

  // ── Drag por header ──
  let dragOff: { x: number; y: number } | null = null;
  header.addEventListener("mousedown", (e) => {
    const rect = el.getBoundingClientRect();
    dragOff = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    e.preventDefault();
  });
  window.addEventListener("mousemove", (e) => {
    if (!dragOff) return;
    el.style.left = `${e.clientX - dragOff.x}px`;
    el.style.top = `${e.clientY - dragOff.y}px`;
    el.style.right = "auto";
  });
  window.addEventListener("mouseup", () => { dragOff = null; });

  // ── Estado: data activa ──
  let activeData: InspectElementData | null = null;
  let activeMatrices: FrameMatrices | null = null;

  function switchTab(idx: number) {
    activeTab = idx;
    tabBtns.forEach((b, i) => {
      Object.assign(b.style, {
        color: i === idx ? "#a5b4fc" : "#94a3b8",
        borderBottom: i === idx ? "2px solid #a5b4fc" : "2px solid transparent",
        fontWeight: i === idx ? "600" : "400",
      });
    });
    renderActiveTab();
  }

  function renderActiveTab() {
    body.innerHTML = "";
    if (!activeData) {
      body.textContent = "Sin elemento activo. Haz click en un elemento del modelo.";
      return;
    }
    if (activeTab === 0) renderTable();
    else if (activeTab === 1) renderMath();
    else renderSummary();
  }

  function renderTable() {
    if (!activeMatrices || !activeData?.frameProps) {
      body.textContent = "Tablas disponibles solo para elementos frame.";
      return;
    }
    const props = activeData.frameProps;
    const m = activeMatrices;

    // Section properties
    const sec = document.createElement("div");
    Object.assign(sec.style, { marginBottom: "16px" });
    sec.innerHTML = `<div style="font-weight:600;color:#a5b4fc;margin-bottom:6px">1. Propiedades</div>`;
    const tbl = document.createElement("table");
    Object.assign(tbl.style, {
      width: "100%", borderCollapse: "collapse", fontSize: "11px",
      fontFamily: "ui-monospace, Menlo, monospace",
    });
    const rows: Array<[string, string, string, string]> = [
      ["E", fmtSci(props.E), "A",  props.A.toFixed(4)],
      ["Iz", fmtSci(props.Iz), "Iy", fmtSci(props.Iy)],
      ["G", fmtSci(props.G), "J",  fmtSci(props.J)],
      ["L", m.L.toFixed(3), "—", "—"],
    ];
    rows.forEach((r) => {
      const tr = document.createElement("tr");
      r.forEach((c, i) => {
        const td = document.createElement("td");
        td.textContent = c;
        Object.assign(td.style, {
          padding: "4px 8px",
          background: (i % 2 === 0) ? "rgba(165,180,252,0.08)" : "transparent",
          color: (i % 2 === 0) ? "#a5b4fc" : "#cbd5e1",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        });
        if (i % 2 === 0) td.style.fontWeight = "600";
        tr.appendChild(td);
      });
      tbl.appendChild(tr);
    });
    sec.appendChild(tbl);
    body.appendChild(sec);

    // K_local 12×12
    body.appendChild(matrixSection("2. K_local (12×12)", m.K_local));
    // T 12×12
    body.appendChild(matrixSection("3. T — Transformación", m.T));
    // K_global
    body.appendChild(matrixSection("4. K_global = T^T · K_local · T", m.K_global));
  }

  function renderMath() {
    if (!activeData?.frameProps || !activeMatrices) {
      body.textContent = "Derivación matemática solo para elementos frame.";
      return;
    }
    renderElementMath(body, activeData, activeMatrices);
  }

  function renderSummary() {
    if (!activeData) return;
    const d = activeData;
    const html: string[] = [];
    html.push(`<div style="font-weight:600;color:#a5b4fc;margin-bottom:8px">Resumen del elemento</div>`);
    html.push(`<table style="width:100%;font-family:ui-monospace,Menlo,monospace;font-size:11.5px;border-collapse:collapse">`);
    html.push(`  <tr><td style="padding:5px;color:#94a3b8">Índice</td><td style="padding:5px">${d.index}</td></tr>`);
    html.push(`  <tr><td style="padding:5px;color:#94a3b8">Tipo</td><td style="padding:5px">${d.type.toUpperCase()}</td></tr>`);
    html.push(`  <tr><td style="padding:5px;color:#94a3b8">Nodos</td><td style="padding:5px">${d.nodeIndices.join(" → ")}</td></tr>`);
    if (d.sectionLabel) {
      html.push(`  <tr><td style="padding:5px;color:#94a3b8">Sección</td><td style="padding:5px;color:#fde68a">${d.sectionLabel}</td></tr>`);
    }
    if (activeMatrices) {
      html.push(`  <tr><td style="padding:5px;color:#94a3b8">L</td><td style="padding:5px">${activeMatrices.L.toFixed(4)} m</td></tr>`);
    }
    if (d.frameProps) {
      const p = d.frameProps;
      html.push(`  <tr><td style="padding:5px;color:#94a3b8">EA</td><td style="padding:5px">${(p.E * p.A).toExponential(3)} kN</td></tr>`);
      html.push(`  <tr><td style="padding:5px;color:#94a3b8">EIy (strong)</td><td style="padding:5px">${(p.E * p.Iy).toExponential(3)} kN·m²</td></tr>`);
      html.push(`  <tr><td style="padding:5px;color:#94a3b8">EIz (weak)</td><td style="padding:5px">${(p.E * p.Iz).toExponential(3)} kN·m²</td></tr>`);
      html.push(`  <tr><td style="padding:5px;color:#94a3b8">GJ</td><td style="padding:5px">${(p.G * p.J).toExponential(3)} kN·m²</td></tr>`);
    }
    html.push(`</table>`);

    // Botones de copia
    html.push(`<div style="margin-top:14px;display:flex;gap:8px">`);
    html.push(`  <button class="hk-copy-Klocal" style="flex:1;padding:6px 10px;background:#1e3a5f;border:1px solid #3b82f6;color:#dbeafe;border-radius:4px;cursor:pointer;font-size:11px">📋 Copiar K_local</button>`);
    html.push(`  <button class="hk-copy-Kglobal" style="flex:1;padding:6px 10px;background:#1e3a5f;border:1px solid #3b82f6;color:#dbeafe;border-radius:4px;cursor:pointer;font-size:11px">📋 Copiar K_global</button>`);
    html.push(`</div>`);
    body.innerHTML = html.join("\n");

    if (activeMatrices) {
      body.querySelector(".hk-copy-Klocal")?.addEventListener("click", () => {
        navigator.clipboard.writeText(matrixToText(activeMatrices!.K_local));
      });
      body.querySelector(".hk-copy-Kglobal")?.addEventListener("click", () => {
        navigator.clipboard.writeText(matrixToText(activeMatrices!.K_global));
      });
    }
  }

  function matrixSection(title: string, M: number[][]): HTMLElement {
    const sec = document.createElement("div");
    Object.assign(sec.style, { marginBottom: "16px" });
    sec.innerHTML = `<div style="font-weight:600;color:#a5b4fc;margin-bottom:6px">${title}</div>`;
    const wrap = document.createElement("div");
    Object.assign(wrap.style, {
      maxWidth: "100%", overflow: "auto",
      border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px",
    });
    const tbl = document.createElement("table");
    Object.assign(tbl.style, {
      borderCollapse: "collapse", fontSize: "10px",
      fontFamily: "ui-monospace, Menlo, monospace",
    });
    M.forEach((row) => {
      const tr = document.createElement("tr");
      row.forEach((v) => {
        const td = document.createElement("td");
        td.textContent = fmtCell(v);
        Object.assign(td.style, {
          padding: "3px 6px", borderBottom: "1px solid rgba(255,255,255,0.04)",
          color: Math.abs(v) < 1e-12 ? "#475569" : "#cbd5e1",
          textAlign: "right", minWidth: "60px",
        });
        tr.appendChild(td);
      });
      tbl.appendChild(tr);
    });
    wrap.appendChild(tbl);
    sec.appendChild(wrap);
    return sec;
  }

  // ── React to theme changes ──
  onThemeChange((_n, c) => {
    if (c.background) el.style.background = `${c.background}EE`;
  });

  // Append to DOM
  document.body.appendChild(el);

  const api: InspectPanelApi = {
    el,
    show(data) {
      activeData = data;
      titleBadge.textContent = `Element ${data.index}`;
      const typeStr = data.type === "frame" ? "Frame" : data.type === "shell" ? "Shell" : "Solid";
      const nodesStr = data.nodeIndices.length === 2
        ? `Nodes ${data.nodeIndices[0]} → ${data.nodeIndices[1]}`
        : `Nodes ${data.nodeIndices.join(",")}`;
      // Calcular matrices si es frame
      activeMatrices = null;
      if (data.type === "frame" && data.frameProps && data.nodes.length >= 2) {
        const geom: FrameElementGeom = { ni: data.nodes[0], nj: data.nodes[1] };
        try { activeMatrices = computeFrameMatrices(geom, data.frameProps); }
        catch (e) { console.warn("[Inspect] computeFrameMatrices error:", e); }
      }
      titleText.textContent = activeMatrices
        ? `${typeStr} — ${nodesStr} — L = ${activeMatrices.L.toFixed(2)}`
        : `${typeStr} — ${nodesStr}`;
      el.style.display = "flex";
      renderActiveTab();
    },
    hide() { el.style.display = "none"; },
    toggle() { el.style.display = el.style.display === "none" ? "flex" : "none"; },
    destroy() { el.remove(); },
  };
  return api;
}

function fmtSci(v: number): string {
  if (Math.abs(v) < 1e-12) return "0";
  if (Math.abs(v) >= 1e5 || Math.abs(v) < 1e-3) return v.toExponential(2);
  return parseFloat(v.toFixed(4)).toString();
}

function fmtCell(v: number): string {
  if (Math.abs(v) < 1e-12) return "0";
  const abs = Math.abs(v);
  if (abs >= 1e5 || abs < 1e-2) return v.toExponential(2);
  return parseFloat(v.toFixed(2)).toString();
}
