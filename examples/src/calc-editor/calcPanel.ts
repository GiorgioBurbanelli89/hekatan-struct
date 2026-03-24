/**
 * calcPanel.ts — Panel UI: editor de código izquierda + output KaTeX derecha
 *
 * Se abre como overlay fullscreen sobre el viewer 3D.
 * Templates seleccionables. Ctrl+Enter ejecuta.
 */

import { evaluate } from "./calcEngine";
import { renderCalcOutput, getCalcStyles } from "./calcRenderer";
import { getTemplate, templateList, ModelData } from "./calcTemplates";

let panelElement: HTMLDivElement | null = null;
let currentModelData: ModelData | null = null;
let katexLoaded = false;

/** Ensure KaTeX CSS + JS are loaded */
function ensureKatex(callback: () => void) {
  if (katexLoaded || (window as any).katex) {
    katexLoaded = true;
    callback();
    return;
  }
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css";
  document.head.appendChild(link);

  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js";
  script.onload = () => {
    katexLoaded = true;
    callback();
  };
  document.head.appendChild(script);
}

/** Open the calc panel */
export function openCalcPanel(modelData: ModelData) {
  currentModelData = modelData;

  if (panelElement) {
    panelElement.style.display = "flex";
    return;
  }

  ensureKatex(() => {
    createPanel();
    // Load default template
    loadTemplate("static");
  });
}

/** Close the calc panel */
export function closeCalcPanel() {
  if (panelElement) {
    panelElement.style.display = "none";
  }
}

/** Check if panel is open */
export function isCalcPanelOpen(): boolean {
  return panelElement !== null && panelElement.style.display !== "none";
}

// ═══════════════════════════════════════════════════════
// PANEL CREATION
// ═══════════════════════════════════════════════════════

function createPanel() {
  panelElement = document.createElement("div");
  panelElement.id = "calc-panel";

  // Inject styles
  const style = document.createElement("style");
  style.textContent = getPanelStyles() + getCalcStyles();
  document.head.appendChild(style);

  panelElement.innerHTML = `
    <div class="calc-toolbar">
      <div class="calc-toolbar-left">
        <button id="calc-run" class="calc-btn calc-btn-run" title="Ejecutar (Ctrl+Enter)">▶ Ejecutar</button>
        <button id="calc-export-m" class="calc-btn" title="Exportar a MATLAB .m">📋 .m</button>
        <button id="calc-export-py" class="calc-btn" title="Exportar a Python">🐍 .py</button>
        <select id="calc-template" class="calc-select">
          ${templateList.map(t => `<option value="${t.id}">${t.name}</option>`).join("")}
        </select>
      </div>
      <div class="calc-toolbar-right">
        <span class="calc-title">📐 Calculadora FEM</span>
        <button id="calc-close" class="calc-btn calc-btn-close" title="Cerrar">✕</button>
      </div>
    </div>
    <div class="calc-body">
      <div class="calc-editor-wrap">
        <div class="calc-editor-header">Editor</div>
        <div class="calc-editor-container">
          <div class="calc-line-numbers" id="calc-line-nums"></div>
          <textarea id="calc-editor" class="calc-textarea" spellcheck="false" wrap="off"></textarea>
        </div>
      </div>
      <div class="calc-divider"></div>
      <div class="calc-output-wrap">
        <div class="calc-output-header">Output</div>
        <div id="calc-output" class="calc-output-container"></div>
      </div>
    </div>
  `;

  document.body.appendChild(panelElement);

  // Event handlers
  const editor = panelElement.querySelector("#calc-editor") as HTMLTextAreaElement;
  const output = panelElement.querySelector("#calc-output") as HTMLDivElement;
  const runBtn = panelElement.querySelector("#calc-run") as HTMLButtonElement;
  const closeBtn = panelElement.querySelector("#calc-close") as HTMLButtonElement;
  const templateSelect = panelElement.querySelector("#calc-template") as HTMLSelectElement;
  const lineNums = panelElement.querySelector("#calc-line-nums") as HTMLDivElement;

  // Run
  runBtn.addEventListener("click", () => runCode(editor, output));

  // Ctrl+Enter
  editor.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "Enter") {
      e.preventDefault();
      runCode(editor, output);
    }
    // Tab → 2 spaces
    if (e.key === "Tab") {
      e.preventDefault();
      const start = editor.selectionStart;
      editor.value = editor.value.substring(0, start) + "  " + editor.value.substring(editor.selectionEnd);
      editor.selectionStart = editor.selectionEnd = start + 2;
    }
  });

  // Line numbers
  editor.addEventListener("input", () => updateLineNumbers(editor, lineNums));
  editor.addEventListener("scroll", () => {
    lineNums.scrollTop = editor.scrollTop;
  });

  // Close
  closeBtn.addEventListener("click", closeCalcPanel);

  // Export MATLAB
  const exportMBtn = panelElement.querySelector("#calc-export-m") as HTMLButtonElement;
  exportMBtn.addEventListener("click", () => exportAs(editor.value, "matlab"));

  // Export Python
  const exportPyBtn = panelElement.querySelector("#calc-export-py") as HTMLButtonElement;
  exportPyBtn.addEventListener("click", () => exportAs(editor.value, "python"));

  // Template
  templateSelect.addEventListener("change", () => {
    loadTemplate(templateSelect.value);
  });
}

function loadTemplate(templateId: string) {
  if (!panelElement || !currentModelData) return;
  const editor = panelElement.querySelector("#calc-editor") as HTMLTextAreaElement;
  const lineNums = panelElement.querySelector("#calc-line-nums") as HTMLDivElement;

  const code = getTemplate(templateId, currentModelData);
  editor.value = code;
  updateLineNumbers(editor, lineNums);

  // Auto-run
  const output = panelElement.querySelector("#calc-output") as HTMLDivElement;
  runCode(editor, output);
}

function runCode(editor: HTMLTextAreaElement, output: HTMLDivElement) {
  const code = editor.value;
  const result = evaluate(code, undefined, currentModelData || undefined);
  output.innerHTML = renderCalcOutput(result);

  // Scroll output to top
  output.scrollTop = 0;
}

function updateLineNumbers(editor: HTMLTextAreaElement, lineNums: HTMLDivElement) {
  const lines = editor.value.split("\n");
  lineNums.innerHTML = lines.map((_, i) =>
    `<div class="calc-ln-num">${i + 1}</div>`
  ).join("");
}

// ═══════════════════════════════════════════════════════
// EXPORT TO MATLAB / PYTHON
// ═══════════════════════════════════════════════════════

function exportAs(code: string, target: "matlab" | "python") {
  const lines = code.split("\n");
  const converted: string[] = [];

  if (target === "python") {
    converted.push("import numpy as np");
    converted.push("from numpy.linalg import inv, det, solve, norm, eig");
    converted.push("");
  }

  for (const line of lines) {
    const trimmed = line.trim();

    // Comments: % → % (MATLAB) or # (Python)
    if (trimmed.startsWith("%")) {
      converted.push(target === "python" ? trimmed.replace(/^%/, "#") : trimmed);
      continue;
    }
    if (trimmed === "") { converted.push(""); continue; }

    let out = trimmed;

    // Strip inline comments
    const cIdx = out.indexOf("%");
    const comment = cIdx >= 0 ? out.substring(cIdx) : "";
    if (cIdx >= 0) out = out.substring(0, cIdx).trim();

    // Replace awatif-specific functions with pure math equivalents
    // stiffness(i), transform(i), kglobal(i) → comment explaining manual implementation
    if (/^(\w+)\s*=\s*(stiffness|transform|kglobal|solve_model|u_node|r_node)\(/.test(out)) {
      const commentStr = target === "python" ? "#" : "%";
      converted.push(`${commentStr} ${out}  → implementar manualmente (ver abajo)`);
      continue;
    }
    if (/^(resultado|solve_model)\b/.test(out)) {
      if (target === "matlab") {
        converted.push("U = K_global \\ F_global;  % Resolver sistema");
        converted.push("R = K_global * U - F_global;  % Reacciones");
      } else {
        converted.push("U = np.linalg.solve(K_global, F_global)  # Resolver sistema");
        converted.push("R = K_global @ U - F_global  # Reacciones");
      }
      continue;
    }

    if (target === "matlab") {
      // MATLAB syntax is almost identical to our calc panel
      // Matrices: [a, b; c, d] — same in MATLAB
      // Transpose: A' — same in MATLAB
      // Backslash: K \ F — same in MATLAB
      out = out
        .replace(/\beye\((\d+)\)/g, "eye($1)")
        .replace(/\bzeros\((\d+),\s*(\d+)\)/g, "zeros($1,$2)")
        .replace(/\bones\((\d+),\s*(\d+)\)/g, "ones($1,$2)");
      converted.push(out + (comment ? "  " + comment : "") + ";");
    } else {
      // Python/NumPy conversion
      out = out
        // Matrix definition: [1,2;3,4] → np.array([[1,2],[3,4]])
        .replace(/\[([^\]]*;[^\]]*)\]/g, (_, inner) => {
          const rows = inner.split(";").map((r: string) => `[${r.trim()}]`).join(",");
          return `np.array([${rows}])`;
        })
        // Transpose: A' → A.T
        .replace(/(\w+)'/g, "$1.T")
        // Matrix multiply: A * B → A @ B (for matrices)
        .replace(/\s*\*\s*/g, " @ ")
        // Backslash solve: K \ F → np.linalg.solve(K, F)
        .replace(/(\w+)\s*\\\s*(\w+)/g, "np.linalg.solve($1, $2)")
        // eye, zeros, ones
        .replace(/\beye\((\d+)\)/g, "np.eye($1)")
        .replace(/\bzeros\((\d+),\s*(\d+)\)/g, "np.zeros(($1,$2))")
        .replace(/\bones\((\d+),\s*(\d+)\)/g, "np.ones(($1,$2))")
        .replace(/\binv\(/g, "np.linalg.inv(")
        .replace(/\bdet\(/g, "np.linalg.det(")
        .replace(/\bnorm\(/g, "np.linalg.norm(")
        .replace(/\babs\(/g, "np.abs(")
        .replace(/\bmax\(/g, "np.max(")
        .replace(/\bmin\(/g, "np.min(")
        .replace(/\bsqrt\(/g, "np.sqrt(");

      // for loop: for i = 1:n → for i in range(1, n+1):
      if (/^for\s+(\w+)\s*=\s*(\d+):(\w+)/.test(out)) {
        out = out.replace(/^for\s+(\w+)\s*=\s*(\d+):(\w+)/, "for $1 in range($2, $3+1):");
      }
      // end → (remove, Python uses indentation)
      if (out === "end") { continue; }

      converted.push(out + (comment ? "  " + comment.replace("%", "#") : ""));
    }
  }

  // Add FEM helper functions at the bottom
  if (target === "matlab") {
    converted.push("");
    converted.push("% ═══════════════════════════════════════════");
    converted.push("% Funciones FEM (implementar según necesidad)");
    converted.push("% ═══════════════════════════════════════════");
    converted.push("% function K = beam_stiffness_3d(E, A, Iz, Iy, G, J, L)");
    converted.push("%   % Timoshenko beam 12x12 stiffness matrix");
    converted.push("%   % Ver: Dr. Aguiar, Análisis Matricial de Estructuras");
    converted.push("% end");
  } else {
    converted.push("");
    converted.push("# ═══════════════════════════════════════════");
    converted.push("# Funciones FEM (implementar según necesidad)");
    converted.push("# ═══════════════════════════════════════════");
    converted.push("# def beam_stiffness_3d(E, A, Iz, Iy, G, J, L):");
    converted.push("#     # Timoshenko beam 12x12 stiffness matrix");
    converted.push("#     pass");
  }

  const ext = target === "matlab" ? "m" : "py";
  const filename = `fem_model.${ext}`;
  const blob = new Blob([converted.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// ═══════════════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════════════

function getPanelStyles(): string {
  return `
    #calc-panel {
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      background: #0d1117;
      z-index: 100000;
      display: flex;
      flex-direction: column;
      color: #d4d4d4;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .calc-toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 6px 12px;
      background: #161b22;
      border-bottom: 1px solid #30363d;
      min-height: 40px;
    }
    .calc-toolbar-left, .calc-toolbar-right {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .calc-title {
      font-size: 14px;
      font-weight: 600;
      color: #58a6ff;
    }

    .calc-btn {
      padding: 5px 12px;
      border: 1px solid #30363d;
      border-radius: 4px;
      background: #21262d;
      color: #d4d4d4;
      cursor: pointer;
      font-size: 13px;
    }
    .calc-btn:hover { background: #30363d; }
    .calc-btn-run {
      background: #238636;
      border-color: #2ea043;
      color: white;
      font-weight: 600;
    }
    .calc-btn-run:hover { background: #2ea043; }
    .calc-btn-close {
      background: transparent;
      border: none;
      color: #8b949e;
      font-size: 18px;
      padding: 2px 8px;
    }
    .calc-btn-close:hover { color: #ff6b6b; }

    .calc-select {
      padding: 5px 8px;
      border: 1px solid #30363d;
      border-radius: 4px;
      background: #21262d;
      color: #d4d4d4;
      font-size: 12px;
    }

    .calc-body {
      display: flex;
      flex: 1;
      overflow: hidden;
    }

    .calc-editor-wrap, .calc-output-wrap {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .calc-editor-header, .calc-output-header {
      padding: 4px 12px;
      background: #161b22;
      border-bottom: 1px solid #30363d;
      font-size: 11px;
      color: #8b949e;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .calc-divider {
      width: 3px;
      background: #30363d;
      cursor: col-resize;
    }
    .calc-divider:hover { background: #58a6ff; }

    .calc-editor-container {
      flex: 1;
      display: flex;
      overflow: hidden;
    }

    .calc-line-numbers {
      padding: 8px 0;
      background: #0d1117;
      border-right: 1px solid #21262d;
      overflow: hidden;
      min-width: 36px;
    }
    .calc-ln-num {
      text-align: right;
      padding: 0 8px 0 4px;
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      font-size: 13px;
      line-height: 20px;
      color: #484f58;
      user-select: none;
    }

    .calc-textarea {
      flex: 1;
      padding: 8px;
      background: #0d1117;
      color: #e6edf3;
      border: none;
      resize: none;
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      font-size: 13px;
      line-height: 20px;
      tab-size: 2;
      outline: none;
      overflow: auto;
    }
    .calc-textarea::selection {
      background: #264f78;
    }

    .calc-output-container {
      flex: 1;
      padding: 8px;
      overflow-y: auto;
      background: #0d1117;
    }

    /* Responsive: en móvil editor arriba, output abajo */
    @media (max-width: 768px) {
      .calc-body {
        flex-direction: column;
      }
      .calc-editor-wrap {
        flex: none;
        height: 45vh;
      }
      .calc-output-wrap {
        flex: 1;
      }
      .calc-divider {
        width: 100%;
        height: 3px;
        cursor: row-resize;
      }
      .calc-toolbar {
        flex-wrap: wrap;
        gap: 4px;
      }
      .calc-toolbar-left, .calc-toolbar-right {
        flex-wrap: wrap;
      }
      .calc-title { font-size: 12px; }
    }
  `;
}
