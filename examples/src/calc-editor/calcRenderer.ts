/**
 * calcRenderer.ts — Hekatan CSS renderer (primary) + KaTeX (fallback for comments)
 *
 * Uses the Hekatan MathCanvas renderer for:
 *   - Variable names with subscripts: K_loc → K<sub>loc</sub>
 *   - Fracciones CSS verticales: E*A/L → fraction
 *   - Matrices con bordes CSS: [1,2;3,4] → table with brackets
 *   - Greek letters: phi → φ, alpha → α
 *
 * KaTeX only for @$...$@ in comments (integrals, complex LaTeX)
 */

import type { CalcLine, CalcResult } from "./calcEngine";

declare const katex: {
  renderToString(tex: string, opts?: { displayMode?: boolean; throwOnError?: boolean }): string;
};

// ═══════════════════════════════════════════════════════
// HEKATAN CSS RENDERER (from hekatan-web/hekatan-math)
// ═══════════════════════════════════════════════════════

const GREEK: Record<string, string> = {
  alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", zeta: "ζ",
  eta: "η", theta: "θ", iota: "ι", kappa: "κ", lambda: "λ", mu: "μ",
  nu: "ν", xi: "ξ", pi: "π", rho: "ρ", sigma: "σ", tau: "τ",
  upsilon: "υ", phi: "φ", chi: "χ", psi: "ψ", omega: "ω",
  Alpha: "Α", Beta: "Β", Gamma: "Γ", Delta: "Δ", Epsilon: "Ε",
  Theta: "Θ", Lambda: "Λ", Xi: "Ξ", Pi: "Π", Sigma: "Σ", Phi: "Φ",
  Psi: "Ψ", Omega: "Ω",
};

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Render variable name with subscript + Greek: K_loc → K<sub>loc</sub>, phi → φ */
function hkVarName(name: string): string {
  const idx = name.indexOf("_");
  if (idx > 0 && idx < name.length - 1) {
    const base = GREEK[name.slice(0, idx)] ?? esc(name.slice(0, idx));
    const sub = GREEK[name.slice(idx + 1)] ?? esc(name.slice(idx + 1));
    return `<var>${base}<sub>${sub}</sub></var>`;
  }
  return `<var>${GREEK[name] ?? esc(name)}</var>`;
}

/** Format number smartly */
function hkNum(v: number): string {
  if (v === undefined || v === null || isNaN(v)) return "NaN";
  if (!isFinite(v)) return v > 0 ? "∞" : "−∞";
  if (Math.abs(v) < 1e-12) return "0";

  // Scientific notation for large/small
  if (Math.abs(v) >= 1e6 || (Math.abs(v) < 0.01 && v !== 0)) {
    const exp = Math.floor(Math.log10(Math.abs(v)));
    const mantissa = v / Math.pow(10, exp);
    const mantStr = mantissa.toFixed(4).replace(/\.?0+$/, "");
    return `${mantStr} × 10<sup>${exp}</sup>`;
  }

  return v.toFixed(6).replace(/\.?0+$/, "");
}

/** Render matrix with CSS brackets (Hekatan style) */
function hkMatrix(m: number[][], varName?: string): string {
  const rows = m.length;
  const cols = m[0]?.length ?? 0;
  const maxShow = 8;
  const showR = Math.min(rows, maxShow);
  const showC = Math.min(cols, maxShow);

  let html = '<span class="mat-wrap"><span class="mat-bkt left"></span><table class="mat"><tbody>';
  for (let i = 0; i < showR; i++) {
    html += "<tr>";
    for (let j = 0; j < showC; j++) {
      html += `<td>${hkNum(m[i][j])}</td>`;
    }
    if (cols > maxShow) html += `<td>⋯</td>`;
    html += "</tr>";
  }
  if (rows > maxShow) {
    html += "<tr>";
    for (let j = 0; j < showC; j++) html += `<td>⋮</td>`;
    if (cols > maxShow) html += `<td>⋱</td>`;
    html += "</tr>";
  }
  html += '</tbody></table><span class="mat-bkt right"></span></span>';

  const sizeTag = `<span class="mat-size">${rows}×${cols}</span>`;

  if (varName) {
    return `<div class="hk-result">${hkVarName(varName)}${sizeTag} = ${html}</div>`;
  }
  return html;
}

/** Render column vector */
function hkVector(v: number[], varName?: string): string {
  const n = v.length;
  const maxShow = 12;
  const showN = Math.min(n, maxShow);

  let html = '<span class="mat-wrap"><span class="mat-bkt left"></span><table class="mat"><tbody>';
  for (let i = 0; i < showN; i++) {
    html += `<tr><td>${hkNum(v[i])}</td></tr>`;
  }
  if (n > maxShow) html += `<tr><td>⋮</td></tr>`;
  html += '</tbody></table><span class="mat-bkt right"></span></span>';

  const sizeTag = `<span class="mat-size">${n}×1</span>`;

  if (varName) {
    return `<div class="hk-result">${hkVarName(varName)}${sizeTag} = ${html}</div>`;
  }
  return html;
}

/** Render scalar */
function hkScalar(v: number, varName?: string): string {
  const formatted = hkNum(v);
  if (varName) {
    return `<div class="hk-result">${hkVarName(varName)} = ${formatted}</div>`;
  }
  return formatted;
}

// ═══════════════════════════════════════════════════════
// MAIN RENDER
// ═══════════════════════════════════════════════════════

export function renderCalcOutput(result: CalcResult): string {
  let html = "";
  for (const line of result.lines) html += renderLine(line);
  return html;
}

function renderLine(line: CalcLine): string {
  if (line.isBlank) {
    return `<div class="calc-line calc-blank">&nbsp;</div>`;
  }

  if (line.isComment) {
    const text = line.input.trim().replace(/^%\s*/, "");
    if (/^[═─━\-=]{3,}/.test(text)) {
      return `<div class="calc-line calc-separator"><span class="calc-ln">${line.lineNum}</span><hr class="calc-hr" /></div>`;
    }
    const headingMatch = text.match(/^─+\s*(.+?)\s*─+$/);
    if (headingMatch) {
      return `<div class="calc-line calc-heading"><span class="calc-ln">${line.lineNum}</span><span class="calc-heading-text">${renderCommentMath(headingMatch[1])}</span></div>`;
    }
    return `<div class="calc-line calc-comment"><span class="calc-ln">${line.lineNum}</span><span class="calc-comment-text">${renderCommentMath(text)}</span></div>`;
  }

  if (line.error) {
    return `<div class="calc-line calc-error"><span class="calc-ln">${line.lineNum}</span><span class="calc-input">${esc(line.input)}</span><div class="calc-error-msg">Error: ${esc(line.error)}</div></div>`;
  }

  if (line.isControl) {
    return `<div class="calc-line calc-control"><span class="calc-ln">${line.lineNum}</span><span class="calc-keyword">${esc(line.input.trim())}</span></div>`;
  }

  // Result line — Hekatan CSS renderer
  const inputDisplay = esc(line.input.trim());
  const hkOutput = resultToHekatan(line);

  return `<div class="calc-line calc-result">
    <span class="calc-ln">${line.lineNum}</span>
    <div class="calc-content">
      <div class="calc-input-line">${inputDisplay}</div>
      <div class="calc-output">${hkOutput}</div>
    </div>
  </div>`;
}

function resultToHekatan(line: CalcLine): string {
  if (line.result === undefined || line.result === null) return "";

  const varName = line.varName;
  const val = line.result;

  try {
    if (line.resultType === "matrix") {
      const data = toArray2D(val);
      if (data) return hkMatrix(data, varName);
    } else if (line.resultType === "vector") {
      const data = toArray1D(val);
      if (data) return hkVector(data, varName);
    } else if (line.resultType === "scalar") {
      return hkScalar(val as number, varName);
    } else if (line.resultType === "boolean") {
      return varName
        ? `<div class="hk-result">${hkVarName(varName)} = <b>${val}</b></div>`
        : `<b>${val}</b>`;
    } else if (line.resultType === "string") {
      return `<span class="calc-string">${esc(String(val))}</span>`;
    } else {
      return varName
        ? `<div class="hk-result">${hkVarName(varName)} = ${esc(String(val))}</div>`
        : esc(String(val));
    }
  } catch { /* fallback */ }

  return `<code>${esc(String(val))}</code>`;
}

// ═══════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════

function toArray2D(val: any): number[][] | null {
  if (!val) return null;
  if (typeof val.toArray === "function") {
    const arr = val.toArray();
    if (Array.isArray(arr) && arr.length > 0) {
      if (Array.isArray(arr[0])) return arr;
      return [arr];
    }
  }
  if (Array.isArray(val) && Array.isArray(val[0])) return val;
  return null;
}

function toArray1D(val: any): number[] | null {
  if (!val) return null;
  if (typeof val.toArray === "function") {
    const arr = val.toArray();
    if (Array.isArray(arr)) {
      if (arr.length > 0 && Array.isArray(arr[0])) return arr.map((r: any) => Array.isArray(r) ? r[0] : r);
      return arr;
    }
  }
  if (Array.isArray(val)) {
    if (val.length > 0 && Array.isArray(val[0])) return val.map((r: any) => Array.isArray(r) ? r[0] : r);
    return val;
  }
  return null;
}

/** Render @$...$@ in comments with KaTeX (fallback for complex LaTeX) */
function renderCommentMath(text: string): string {
  // @$...$@ → KaTeX
  if (text.includes("@$")) {
    return text.replace(/@\$(.*?)\$@/g, (_m, tex) => {
      try {
        if (typeof katex !== "undefined") {
          return katex.renderToString(tex, { displayMode: false, throwOnError: false });
        }
      } catch { /* fallback */ }
      return `<code>${esc(tex)}</code>`;
    });
  }
  // $...$ → KaTeX
  if (text.includes("$")) {
    const parts: string[] = [];
    let remaining = text;
    while (remaining.includes("$")) {
      const start = remaining.indexOf("$");
      const end = remaining.indexOf("$", start + 1);
      if (end === -1) break;
      parts.push(esc(remaining.slice(0, start)));
      try {
        if (typeof katex !== "undefined") {
          parts.push(katex.renderToString(remaining.slice(start + 1, end), { displayMode: false, throwOnError: false }));
        } else {
          parts.push(`<code>${esc(remaining.slice(start + 1, end))}</code>`);
        }
      } catch { parts.push(`<code>${esc(remaining.slice(start + 1, end))}</code>`); }
      remaining = remaining.slice(end + 1);
    }
    parts.push(esc(remaining));
    return parts.join("");
  }
  return esc(text);
}

// ═══════════════════════════════════════════════════════
// CSS STYLES (Hekatan MathCanvas + calc panel)
// ═══════════════════════════════════════════════════════

export function getCalcStyles(): string {
  return `
    /* ─── Calc panel base ─── */
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
    .calc-comment-text .katex { font-style: normal; color: #d4d4d4; }
    .calc-separator { padding: 0; }
    .calc-hr {
      border: none;
      border-top: 2px solid #444;
      width: 100%;
      margin: 8px 0;
    }
    .calc-heading { padding: 8px 8px 4px; }
    .calc-heading-text {
      color: #61afef;
      font-weight: bold;
      font-size: 14px;
    }
    .calc-heading-text .katex { color: #61afef; }
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
    .calc-string { color: #ce9178; }

    /* ─── Hekatan CSS Math Renderer ─── */
    .hk-result {
      font-family: 'Cambria Math', 'STIX Two Math', 'Latin Modern Math', serif;
      font-size: 14px;
      color: #d4d4d4;
      margin: 4px 0;
    }
    .hk-result var {
      font-style: italic;
      color: #e0e0e0;
    }
    .hk-result var sub {
      font-size: 0.75em;
      vertical-align: sub;
      font-style: normal;
    }
    .hk-result sup {
      font-size: 0.7em;
      vertical-align: super;
    }

    /* Matrix brackets (Hekatan style) */
    .mat-wrap {
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
      gap: 0;
    }
    .mat-bkt {
      display: flex;
      flex-direction: column;
      align-self: stretch;
      width: 5px;
      min-height: 1em;
    }
    .mat-bkt.left {
      border-left: 1.5pt solid #d4d4d4;
      border-top: 1.5pt solid #d4d4d4;
      border-bottom: 1.5pt solid #d4d4d4;
      border-radius: 3pt 0 0 3pt;
      margin-right: 2pt;
    }
    .mat-bkt.right {
      border-right: 1.5pt solid #d4d4d4;
      border-top: 1.5pt solid #d4d4d4;
      border-bottom: 1.5pt solid #d4d4d4;
      border-radius: 0 3pt 3pt 0;
      margin-left: 2pt;
    }
    table.mat {
      border-collapse: collapse;
      border-spacing: 0;
      display: inline-table;
    }
    table.mat td {
      padding: 1px 4px;
      text-align: right;
      font-size: 11px;
      min-width: 10px;
      font-family: 'JetBrains Mono', monospace;
      color: #d4d4d4;
      white-space: nowrap;
    }
    .mat-size {
      font-size: 9px;
      color: #666;
      vertical-align: sub;
      margin-left: 1px;
      margin-right: 4px;
    }

    /* Fraction (Hekatan dvc/dvl) */
    .dvc {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      vertical-align: middle;
      margin: 0 2px;
    }
    .dvl {
      border-bottom: solid 1pt #d4d4d4;
      min-width: 1em;
      text-align: center;
      padding: 0 3px;
    }

    /* KaTeX fallback in comments */
    .calc-output .katex { font-size: 0.95em; }
    .calc-output .katex-display { margin: 4px 0; }
    .calc-tex-fallback {
      color: #d4d4d4;
      background: #1e1e2e;
      padding: 2px 6px;
      border-radius: 3px;
    }
  `;
}
