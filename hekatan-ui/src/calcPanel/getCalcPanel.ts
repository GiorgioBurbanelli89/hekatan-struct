/**
 * 🧮 Calculadora FEM — panel flotante con editor y output KaTeX.
 *
 *  Layout:
 *    ┌────────────┬────────────┐
 *    │  INPUT     │  OUTPUT    │
 *    │  (textarea │  (KaTeX-   │
 *    │   simple)  │   rendered │
 *    │            │   cells)   │
 *    └────────────┴────────────┘
 *
 *  Uso típico:
 *    const calc = createCalcPanel({
 *      getModelVars: () => ({ nodes, elements, K, M, F, u, ...})
 *    });
 *    calc.show();
 */
import { evaluateBlock, getDefaultTemplate, buildModelVars, type EvaluatedCell, type CalcEngineContext } from "./calcEngine";

let katexLoaded: Promise<any> | null = null;
function loadKatex(): Promise<any> {
  if (katexLoaded) return katexLoaded;
  katexLoaded = new Promise((resolve, reject) => {
    if ((window as any).katex) { resolve((window as any).katex); return; }
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css";
    document.head.appendChild(css);
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js";
    s.onload = () => resolve((window as any).katex);
    s.onerror = () => reject(new Error("Failed to load KaTeX"));
    document.head.appendChild(s);
  });
  return katexLoaded;
}

export interface CalcPanelOptions {
  /** Callback para obtener variables del modelo justo antes de evaluar.
   *  Devuelve `nodes, elements, K, M, F, u` etc. para inyectar al scope. */
  getModelVars?: () => Record<string, any>;
  /** Plantilla inicial. Default = `getDefaultTemplate()` */
  initialCode?: string;
  /** Anchor inicial del panel */
  position?: { top?: number; right?: number; left?: number; bottom?: number };
}

export interface CalcPanelApi {
  el: HTMLDivElement;
  show(): void;
  hide(): void;
  toggle(): void;
  setCode(code: string): void;
  evaluate(): void;
  destroy(): void;
}

export function createCalcPanel(opts: CalcPanelOptions = {}): CalcPanelApi {
  const el = document.createElement("div");
  el.className = "hekatan-calc-panel";
  Object.assign(el.style, {
    position: "fixed",
    top: opts.position?.top != null ? `${opts.position.top}px` : "70px",
    right: opts.position?.right != null ? `${opts.position.right}px` : "12px",
    width: "880px", height: "560px",
    background: "rgba(20, 24, 30, 0.97)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "8px",
    boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
    color: "#e2e8f0",
    fontFamily: "ui-sans-serif, system-ui",
    fontSize: "12px",
    zIndex: "100",
    backdropFilter: "blur(6px)",
    display: "none",
    flexDirection: "column",
    overflow: "hidden",
  });

  // ── Header ──
  const header = document.createElement("div");
  Object.assign(header.style, {
    display: "flex", alignItems: "center", gap: "8px",
    padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.1)",
    cursor: "move", userSelect: "none", background: "rgba(255,255,255,0.03)",
  });
  // 📥 Descargar (.txt con el código + output)
  const dlBtn = headerBtn("📥 Descargar", "#1e3a5f", "#3b82f6");
  dlBtn.onclick = () => {
    const blob = new Blob([input.value + "\n\n% ── OUTPUT ──\n" + (output.textContent ?? "")],
      { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url;
    a.download = `hekatan_calc_${Date.now()}.txt`; document.body.appendChild(a);
    a.click(); document.body.removeChild(a); setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  header.appendChild(dlBtn);

  // Templates dropdown
  const tplSelect = document.createElement("select");
  Object.assign(tplSelect.style, {
    background: "rgba(0,0,0,0.4)", color: "#e2e8f0",
    border: "1px solid rgba(255,255,255,0.15)", borderRadius: "3px",
    padding: "4px 8px", fontSize: "11px", outline: "none",
    cursor: "pointer",
  });
  const TEMPLATES: Array<{ name: string; code: string }> = [
    { name: "FEM del modelo actual (auto)", code: getDefaultTemplate() },
    { name: "Pesos por piso (Σ kN)", code: `## Pesos por piso\n% Asume que existen variables 'storyWeights' o calcula desde el modelo\nnnodes\nW_total = nelem * 5  % aprox kN\n` },
    { name: "Análisis modal — frecuencias", code: `## Modal — frecuencias y períodos\n% f_i = ω_i / (2π);  T_i = 1/f_i\n% Para edificios típicos: T1 ≈ 0.1·N_pisos\n` },
    { name: "Memoria de cálculo (template)", code: `## MEMORIA DE CÁLCULO\n% Proyecto: ___\n% Norma: NEC-SE-DS / ASCE 7\n\n## 1. Geometría\nnnodes\nnelem\nndof\n\n## 2. Cargas\n% CM = ___\n% CV = ___\n% Sismo Ex/Ey = ___\n\n## 3. Análisis\n% Resultados (deformaciones, reacciones)\n` },
    { name: "Vacío (empezar de cero)", code: `## Sin título\n% Variables: nodes, elements, nnodes, nelem, ndof\n` },
  ];
  for (const t of TEMPLATES) {
    const opt = document.createElement("option");
    opt.value = t.name; opt.textContent = t.name;
    tplSelect.appendChild(opt);
  }
  tplSelect.onchange = () => {
    const t = TEMPLATES.find(x => x.name === tplSelect.value);
    if (t) { input.value = t.code; api.evaluate(); }
  };
  header.appendChild(tplSelect);

  // ❓ Funciones (lista de funciones disponibles)
  const fnBtn = headerBtn("❓ Funciones", "rgba(255,255,255,0.06)", "rgba(255,255,255,0.2)");
  fnBtn.title = "Funciones disponibles";
  fnBtn.onclick = () => {
    output.innerHTML = `
<h3 style="color:#a5b4fc;margin:0 0 8px">📚 Funciones disponibles</h3>
<pre style="font-size:11px;line-height:1.6;color:#cbd5e1">
sqrt(x)         √x
sin(x), cos(x), tan(x)
exp(x), log(x), abs(x)
max(a,b), min(a,b)
floor, ceil, round
pow(a,b)        a^b
PI = 3.14159…   E = 2.71828…

% Constantes globales del modelo
nodes           array nodos [[x,y,z],...]
elements        array elementos
nnodes          # de nodos
nelem           # de elementos
ndof = nnodes * 6
</pre>
`;
  };
  header.appendChild(fnBtn);

  // 📚 Librería (snippets reutilizables)
  const libBtn = headerBtn("📚 Librería", "rgba(255,255,255,0.06)", "rgba(255,255,255,0.2)");
  libBtn.title = "Snippets reutilizables";
  libBtn.onclick = () => {
    output.innerHTML = `
<h3 style="color:#a5b4fc;margin:0 0 8px">📚 Librería de snippets</h3>
<div style="font-size:11.5px;line-height:1.6">
<b style="color:#fde68a">Rigidez axial (column):</b>
<pre style="background:rgba(0,0,0,0.3);padding:6px;border-radius:3px;font-size:11px">
E = 2e8     % kN/m²
A = 0.16    % m² (col 0.40×0.40)
L = 3       % m
k_axial = E * A / L  % kN/m
</pre>

<b style="color:#fde68a">Rigidez lateral cantilever:</b>
<pre style="background:rgba(0,0,0,0.3);padding:6px;border-radius:3px;font-size:11px">
EI = 2e8 * 1e-3
H = 3
k_lat = 3 * EI / pow(H, 3)  % kN/m
</pre>

<b style="color:#fde68a">Periodo aproximado edificio:</b>
<pre style="background:rgba(0,0,0,0.3);padding:6px;border-radius:3px;font-size:11px">
N = 5      % pisos
T1 = 0.1 * N    % aprox NEC-SE-DS
</pre>
</div>`;
  };
  header.appendChild(libBtn);

  // Title (en el centro)
  const titleEl = document.createElement("span");
  titleEl.textContent = "🧮 Calculadora FEM";
  Object.assign(titleEl.style, { flex: "1", fontWeight: "600", color: "#a5b4fc", fontSize: "13px", textAlign: "center" });
  header.appendChild(titleEl);

  // Run button
  const runBtn = document.createElement("button");
  runBtn.textContent = "▶ Ejecutar (Ctrl+Enter)";
  Object.assign(runBtn.style, {
    background: "#2d8659", border: "none", color: "white",
    padding: "5px 14px", borderRadius: "4px", cursor: "pointer",
    fontSize: "11.5px", fontWeight: "600",
  });
  runBtn.onclick = () => api.evaluate();
  header.appendChild(runBtn);

  // Fullscreen toggle
  const fsBtn = headerBtn("⛶", "rgba(255,255,255,0.06)", "rgba(255,255,255,0.2)");
  fsBtn.title = "Pantalla completa";
  let isFs = false;
  fsBtn.onclick = () => {
    isFs = !isFs;
    if (isFs) {
      Object.assign(el.style, { top: "0", left: "0", right: "0", bottom: "0", width: "100vw", height: "100vh" });
    } else {
      Object.assign(el.style, { top: "70px", right: "12px", left: "auto", bottom: "auto", width: "880px", height: "560px" });
    }
  };
  header.appendChild(fsBtn);

  // Close
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "×";
  Object.assign(closeBtn.style, {
    background: "transparent", border: "none", color: "#e2e8f0",
    fontSize: "20px", cursor: "pointer", padding: "0 6px", lineHeight: "1",
  });
  closeBtn.onclick = () => api.hide();
  header.appendChild(closeBtn);
  el.appendChild(header);

  // Helper to create header buttons
  function headerBtn(text: string, bg: string, border: string): HTMLButtonElement {
    const b = document.createElement("button");
    b.textContent = text;
    Object.assign(b.style, {
      background: bg, border: `1px solid ${border}`, color: "#dbeafe",
      padding: "4px 10px", borderRadius: "3px", cursor: "pointer",
      fontSize: "11px", fontFamily: "inherit",
    });
    return b;
  }

  // ── Body: split horizontal ──
  const body = document.createElement("div");
  Object.assign(body.style, { display: "flex", flex: "1", overflow: "hidden" });
  el.appendChild(body);

  // ── Editor con números de línea (estilo MATLAB) ──
  const editorWrap = document.createElement("div");
  Object.assign(editorWrap.style, {
    flex: "1", display: "flex",
    borderRight: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(0,0,0,0.3)", overflow: "hidden",
  });
  body.appendChild(editorWrap);

  // Gutter con números de línea
  const gutter = document.createElement("div");
  Object.assign(gutter.style, {
    width: "44px", padding: "10px 6px 10px 8px",
    background: "rgba(0,0,0,0.5)", color: "#64748b",
    fontFamily: "ui-monospace, Menlo, Consolas, monospace",
    fontSize: "12px", lineHeight: "1.6",
    textAlign: "right",
    borderRight: "1px solid rgba(255,255,255,0.08)",
    overflow: "hidden", whiteSpace: "pre",
    userSelect: "none",
  });
  editorWrap.appendChild(gutter);

  // INPUT (textarea)
  const input = document.createElement("textarea");
  Object.assign(input.style, {
    flex: "1", border: "none",
    padding: "10px 12px",
    background: "transparent", color: "#e2e8f0",
    fontFamily: "ui-monospace, Menlo, Consolas, monospace",
    fontSize: "12px", lineHeight: "1.6",
    resize: "none", outline: "none",
    tabSize: "2",
  });
  input.spellcheck = false;
  input.value = opts.initialCode ?? getDefaultTemplate();
  input.placeholder = "% Escribe expresiones FEM aquí...\n% Ej:  A = 0.06\n%      I = 1e-3\n%      EI = 200e6 * I";
  editorWrap.appendChild(input);

  // Actualiza gutter cuando cambia el contenido o scroll
  function updateGutter() {
    const lines = input.value.split("\n").length;
    let s = "";
    for (let i = 1; i <= Math.max(lines, 5); i++) s += i + "\n";
    gutter.textContent = s;
    gutter.scrollTop = input.scrollTop;
  }
  input.addEventListener("input", updateGutter);
  input.addEventListener("scroll", () => { gutter.scrollTop = input.scrollTop; });
  updateGutter();

  // OUTPUT con header (estilo FEM Studio)
  const outputWrap = document.createElement("div");
  Object.assign(outputWrap.style, {
    flex: "1.2", display: "flex", flexDirection: "column", overflow: "hidden",
  });
  const outputHdr = document.createElement("div");
  outputHdr.textContent = "OUTPUT";
  Object.assign(outputHdr.style, {
    padding: "6px 14px",
    background: "rgba(0,0,0,0.3)",
    color: "#94a3b8", fontSize: "10.5px", fontWeight: "600",
    letterSpacing: "0.5px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  });
  outputWrap.appendChild(outputHdr);
  const output = document.createElement("div");
  Object.assign(output.style, {
    flex: "1", overflow: "auto", padding: "10px 14px",
    background: "rgba(255,255,255,0.02)",
  });
  outputWrap.appendChild(output);
  body.appendChild(outputWrap);

  // ── Drag por header ──
  let dragOff: { x: number; y: number } | null = null;
  header.addEventListener("mousedown", (e) => {
    if (e.target !== header && e.target !== titleEl) return;
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

  // ── Ctrl+Enter to run ──
  input.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "Enter") {
      e.preventDefault();
      api.evaluate();
    }
  });

  async function evaluateNow() {
    const code = input.value;
    const ctx: CalcEngineContext = { modelVars: opts.getModelVars?.() ?? {} };
    let cells: EvaluatedCell[];
    try {
      cells = evaluateBlock(code, ctx);
    } catch (e: any) {
      cells = [{ type: "error", source: code, error: e.message }];
    }
    await renderCells(output, cells);
  }

  // Append to DOM (the bug was here — el was never attached!)
  document.body.appendChild(el);

  const api: CalcPanelApi = {
    el,
    show() { el.style.display = "flex"; api.evaluate(); },
    hide() { el.style.display = "none"; },
    toggle() { el.style.display === "none" ? api.show() : api.hide(); },
    setCode(code) { input.value = code; api.evaluate(); },
    evaluate() { evaluateNow(); },
    destroy() { el.remove(); },
  };
  return api;
}

async function renderCells(target: HTMLElement, cells: EvaluatedCell[]): Promise<void> {
  target.innerHTML = "";
  let katex: any = null;
  try { katex = await loadKatex(); } catch {}

  cells.forEach((cell, idx) => {
    const cellEl = document.createElement("div");
    Object.assign(cellEl.style, { marginBottom: "10px", paddingBottom: "8px" });

    // Source line (small, grey)
    const src = document.createElement("div");
    Object.assign(src.style, {
      fontFamily: "ui-monospace, Menlo, monospace",
      fontSize: "10.5px", color: "#64748b",
      marginBottom: "3px",
    });
    src.textContent = `${idx + 1}: ${cell.source}`;
    cellEl.appendChild(src);

    if (cell.type === "section") {
      Object.assign(cellEl.style, {
        marginTop: "12px", marginBottom: "8px",
        padding: "5px 10px",
        background: "rgba(165,180,252,0.12)", borderLeft: "3px solid #a5b4fc",
        borderRadius: "3px",
      });
      cellEl.innerHTML = `<div style="font-weight:700;color:#a5b4fc;font-size:13px">${escapeHtml(cell.title || "")}</div>`;
    } else if (cell.type === "comment") {
      const c = document.createElement("div");
      Object.assign(c.style, { color: "#86efac", fontStyle: "italic", fontSize: "11.5px" });
      c.textContent = cell.value || "";
      cellEl.appendChild(c);
    } else if (cell.type === "error") {
      const e = document.createElement("div");
      Object.assign(e.style, {
        color: "#f87171", padding: "5px 8px",
        background: "rgba(248,113,113,0.1)", borderRadius: "3px",
        fontFamily: "monospace", fontSize: "11px",
      });
      e.textContent = `❌ ${cell.error}`;
      cellEl.appendChild(e);
    } else {
      // Output: try KaTeX render
      const outDiv = document.createElement("div");
      Object.assign(outDiv.style, {
        padding: "6px 10px",
        background: "rgba(255,255,255,0.03)",
        borderLeft: "2px solid #fde68a",
        borderRadius: "3px",
        overflow: "auto",
      });
      if (cell.latex && katex) {
        try {
          katex.render(cell.latex, outDiv, { throwOnError: false, displayMode: true });
        } catch {
          outDiv.textContent = JSON.stringify(cell.value);
        }
      } else {
        outDiv.textContent = JSON.stringify(cell.value);
      }
      cellEl.appendChild(outDiv);
    }
    target.appendChild(cellEl);
  });
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

export { buildModelVars, getDefaultTemplate, evaluateBlock };
