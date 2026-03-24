/**
 * calcRenderer.ts — Convierte resultados evaluados a HTML+KaTeX
 *
 * Cada línea genera output formateado:
 *   Escalar: x = 42
 *   Vector: F = [10; 5] → columna KaTeX
 *   Matriz: K = [...] → bmatrix KaTeX
 *   Indexación: K(1,2) → K_{1,2} = valor
 */

import type { CalcLine, CalcResult } from "./calcEngine";

declare const katex: {
  renderToString(tex: string, opts?: { displayMode?: boolean; throwOnError?: boolean }): string;
};

/** Render full CalcResult to HTML string */
export function renderCalcOutput(result: CalcResult): string {
  let html = "";

  for (const line of result.lines) {
    html += renderLine(line);
  }

  return html;
}

/** Render a single line */
function renderLine(line: CalcLine): string {
  // Blank
  if (line.isBlank) {
    return `<div class="calc-line calc-blank">&nbsp;</div>`;
  }

  // Comment
  if (line.isComment) {
    const text = line.input.trim().replace(/^%\s*/, "");
    return `<div class="calc-line calc-comment">
      <span class="calc-ln">${line.lineNum}</span>
      <span class="calc-comment-text">${escapeHtml(text)}</span>
    </div>`;
  }

  // Error
  if (line.error) {
    return `<div class="calc-line calc-error">
      <span class="calc-ln">${line.lineNum}</span>
      <span class="calc-input">${escapeHtml(line.input)}</span>
      <div class="calc-error-msg">Error: ${escapeHtml(line.error)}</div>
    </div>`;
  }

  // Control flow header (for/if)
  if (line.isControl) {
    return `<div class="calc-line calc-control">
      <span class="calc-ln">${line.lineNum}</span>
      <span class="calc-keyword">${escapeHtml(line.input.trim())}</span>
    </div>`;
  }

  // Result line
  const inputDisplay = escapeHtml(line.input.trim());
  const katexOutput = resultToKatex(line);

  return `<div class="calc-line calc-result">
    <span class="calc-ln">${line.lineNum}</span>
    <div class="calc-content">
      <div class="calc-input-line">${inputDisplay}</div>
      <div class="calc-output">${katexOutput}</div>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// RESULT → KATEX
// ═══════════════════════════════════════════════════════

function resultToKatex(line: CalcLine): string {
  if (line.result === undefined || line.result === null) return "";

  const varName = line.varName;
  const val = line.result;

  try {
    let tex = "";

    if (line.resultType === "matrix") {
      tex = matrixToKatex(val, varName);
    } else if (line.resultType === "vector") {
      tex = vectorToKatex(val, varName);
    } else if (line.resultType === "scalar") {
      const formatted = formatNumber(val as number);
      tex = varName ? `${texVar(varName)} = ${formatted}` : formatted;
    } else if (line.resultType === "boolean") {
      tex = varName ? `${texVar(varName)} = ${val}` : String(val);
    } else if (line.resultType === "string") {
      return `<span class="calc-string">${escapeHtml(String(val))}</span>`;
    } else {
      tex = varName ? `${texVar(varName)} = ${String(val)}` : String(val);
    }

    return renderKatex(tex);
  } catch {
    return `<code>${escapeHtml(String(val))}</code>`;
  }
}

/** Matrix → KaTeX bmatrix */
function matrixToKatex(val: any, varName?: string): string {
  const data = toArray2D(val);
  if (!data || data.length === 0) return varName ? `${texVar(varName!)} = []` : "[]";

  const rows = data.length;
  const cols = data[0].length;

  // Truncate large matrices
  const maxShow = 8;
  const showRows = Math.min(rows, maxShow);
  const showCols = Math.min(cols, maxShow);

  let tex = "\\begin{bmatrix}\n";
  for (let i = 0; i < showRows; i++) {
    const rowVals: string[] = [];
    for (let j = 0; j < showCols; j++) {
      rowVals.push(formatNumber(data[i][j]));
    }
    if (cols > maxShow) rowVals.push("\\cdots");
    tex += rowVals.join(" & ");
    if (i < showRows - 1 || rows > maxShow) tex += " \\\\";
    tex += "\n";
  }
  if (rows > maxShow) {
    const dots = Array(Math.min(showCols + (cols > maxShow ? 1 : 0), showCols + 1)).fill("\\vdots").join(" & ");
    tex += dots + "\n";
  }
  tex += "\\end{bmatrix}";

  // Add size annotation
  const sizeStr = `_{${rows}\\times${cols}}`;

  if (varName) {
    return `${texVar(varName)}${sizeStr} = ${tex}`;
  }
  return tex;
}

/** Vector → KaTeX column vector */
function vectorToKatex(val: any, varName?: string): string {
  const data = toArray1D(val);
  if (!data || data.length === 0) return varName ? `${texVar(varName!)} = []` : "[]";

  const maxShow = 12;
  const n = data.length;

  let tex = "\\begin{bmatrix}\n";
  const showN = Math.min(n, maxShow);
  for (let i = 0; i < showN; i++) {
    tex += formatNumber(data[i]);
    if (i < showN - 1 || n > maxShow) tex += " \\\\";
    tex += "\n";
  }
  if (n > maxShow) {
    tex += "\\vdots\n";
  }
  tex += "\\end{bmatrix}";

  const sizeStr = `_{${n}\\times 1}`;

  if (varName) {
    return `${texVar(varName)}${sizeStr} = ${tex}`;
  }
  return tex;
}

// ═══════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════

/** Format variable name for KaTeX (handle subscripts) */
function texVar(name: string): string {
  // K_local → K_{local}
  const parts = name.split("_");
  if (parts.length > 1) {
    return `${parts[0]}_{${parts.slice(1).join("\\_")}}`;
  }
  // Greek letters
  const greek: Record<string, string> = {
    alpha: "\\alpha", beta: "\\beta", gamma: "\\gamma", delta: "\\delta",
    phi: "\\phi", psi: "\\psi", theta: "\\theta", lambda: "\\lambda",
    mu: "\\mu", nu: "\\nu", sigma: "\\sigma", tau: "\\tau", omega: "\\omega",
  };
  if (greek[name]) return greek[name];

  return `\\mathrm{${name}}`;
}

/** Format number for display */
function formatNumber(v: number): string {
  if (v === undefined || v === null || isNaN(v)) return "\\text{NaN}";
  if (!isFinite(v)) return v > 0 ? "\\infty" : "-\\infty";
  if (Math.abs(v) < 1e-12) return "0";

  // Scientific notation for large/small numbers
  if (Math.abs(v) >= 1e6 || (Math.abs(v) < 0.01 && v !== 0)) {
    const exp = Math.floor(Math.log10(Math.abs(v)));
    const mantissa = v / Math.pow(10, exp);
    const mantStr = mantissa.toFixed(4).replace(/\.?0+$/, "");
    return `${mantStr} \\times 10^{${exp}}`;
  }

  // Regular number
  const str = v.toFixed(6).replace(/\.?0+$/, "");
  return str;
}

/** Convert math.js Matrix or array to 2D array */
function toArray2D(val: any): number[][] | null {
  if (!val) return null;

  // math.js Matrix
  if (typeof val.toArray === "function") {
    const arr = val.toArray();
    if (Array.isArray(arr) && arr.length > 0) {
      if (Array.isArray(arr[0])) return arr as number[][];
      // 1D → wrap as row
      return [arr as number[]];
    }
  }

  // Plain 2D array
  if (Array.isArray(val) && Array.isArray(val[0])) return val as number[][];

  return null;
}

/** Convert math.js Matrix or array to 1D array */
function toArray1D(val: any): number[] | null {
  if (!val) return null;

  // math.js Matrix
  if (typeof val.toArray === "function") {
    const arr = val.toArray();
    if (Array.isArray(arr)) {
      // If nested (column vector [[1],[2],[3]]) → flatten
      if (arr.length > 0 && Array.isArray(arr[0])) {
        return arr.map((row: any) => Array.isArray(row) ? row[0] : row);
      }
      return arr as number[];
    }
  }

  // Plain array
  if (Array.isArray(val)) {
    if (val.length > 0 && Array.isArray(val[0])) {
      return val.map((row: any) => Array.isArray(row) ? row[0] : row);
    }
    return val as number[];
  }

  return null;
}

/** Render KaTeX with fallback */
function renderKatex(tex: string): string {
  try {
    if (typeof katex !== "undefined") {
      return katex.renderToString(tex, { displayMode: true, throwOnError: false });
    }
  } catch { /* fallback */ }
  return `<code class="calc-tex-fallback">${escapeHtml(tex)}</code>`;
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Get CSS styles for the calc output panel */
export function getCalcStyles(): string {
  return `
    .calc-line {
      padding: 4px 8px;
      border-bottom: 1px solid #1a1a2e;
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      font-size: 13px;
      display: flex;
      align-items: flex-start;
      gap: 8px;
    }
    .calc-ln {
      color: #444;
      font-size: 11px;
      min-width: 24px;
      text-align: right;
      user-select: none;
      padding-top: 2px;
    }
    .calc-blank { min-height: 20px; }
    .calc-comment-text {
      color: #6a9955;
      font-style: italic;
    }
    .calc-error { background: #1a0000; }
    .calc-error-msg {
      color: #ff6b6b;
      font-size: 12px;
      margin-top: 2px;
    }
    .calc-control .calc-keyword {
      color: #c586c0;
      font-weight: bold;
    }
    .calc-content { flex: 1; overflow-x: auto; }
    .calc-input-line {
      color: #9cdcfe;
      margin-bottom: 4px;
      font-size: 12px;
      opacity: 0.6;
    }
    .calc-output .katex { font-size: 0.95em; }
    .calc-output .katex-display { margin: 4px 0; }
    .calc-string { color: #ce9178; }
    .calc-tex-fallback {
      color: #d4d4d4;
      background: #1e1e2e;
      padding: 2px 6px;
      border-radius: 3px;
    }
  `;
}
