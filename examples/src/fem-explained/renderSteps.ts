import { Node } from "awatif-fem";
import type { BeamFemSteps, FemStep } from "./femSteps";

declare const katex: {
  renderToString(tex: string, opts?: { displayMode?: boolean; throwOnError?: boolean }): string;
};

/**
 * Render all FEM steps into the panel div.
 */
export function renderFemPanel(
  panel: HTMLElement,
  steps: BeamFemSteps,
  elementIndex: number,
  elementNodes: number[],
  nodeCoords: Node[]
) {
  const { properties: p } = steps;

  let html = `
    <div class="fem-header">
      <h2>FEM Step-by-Step</h2>
      <div>
        <span class="element-badge">Element ${elementIndex}</span>
        <span class="label">Beam (2 nodes, 12 DOFs)</span>
      </div>
      <div class="info-box">
        <div><strong>Nodes:</strong> ${elementNodes[0]} → ${elementNodes[1]}</div>
        <div><strong>Coords:</strong> (${nodeCoords[0].map(v => v.toFixed(1)).join(", ")}) → (${nodeCoords[1].map(v => v.toFixed(1)).join(", ")})</div>
        <div><strong>Length:</strong> <span class="value">${steps.length.toFixed(2)}</span></div>
        <div><strong>Properties:</strong>
          E=${fmtProp(p.E)}, A=${fmtProp(p.A)}, Iz=${fmtProp(p.Iz)}, Iy=${fmtProp(p.Iy)}, G=${fmtProp(p.G)}, J=${fmtProp(p.J)}
        </div>
      </div>
    </div>
  `;

  for (let i = 0; i < steps.steps.length; i++) {
    const step = steps.steps[i];
    html += renderStep(step, i);
  }

  panel.innerHTML = html;

  // Make steps collapsible
  panel.querySelectorAll("h3").forEach((h3) => {
    h3.addEventListener("click", () => {
      const content = h3.nextElementSibling as HTMLElement;
      if (content) {
        content.classList.toggle("collapsed");
        const arrow = h3.querySelector(".arrow") as HTMLElement;
        if (arrow) {
          arrow.textContent = content.classList.contains("collapsed") ? ">" : "v";
        }
      }
    });
  });
}

function renderStep(step: FemStep, index: number): string {
  let html = `<div class="step">`;
  html += `<h3><span class="arrow" style="display:inline-block;width:16px;font-family:monospace">v</span> ${step.title}</h3>`;
  html += `<div class="step-content">`;

  // Description
  html += `<p style="color:#a0a0a0;margin:4px 0">${step.description}</p>`;

  // Formulas
  for (const formula of step.formulas) {
    html += `<div class="formula">${renderKatex(formula)}</div>`;
  }

  // Computed values
  if (step.values.length > 0) {
    html += `<div class="info-box">`;
    for (const val of step.values) {
      html += `<div class="value">${renderKatex(val)}</div>`;
    }
    html += `</div>`;
  }

  // Matrix display
  if (step.matrix) {
    html += renderMatrix(step.matrix, step.matrixLabel ?? "", step.matrixSize ?? "");
  }

  // Extra HTML
  if (step.extraHtml) {
    html += step.extraHtml;
  }

  html += `</div></div>`;
  return html;
}

function renderKatex(tex: string): string {
  try {
    if (typeof katex !== "undefined") {
      return katex.renderToString(tex, { displayMode: false, throwOnError: false });
    }
  } catch { /* fallback */ }
  return `<code>${tex}</code>`;
}

function renderMatrix(mat: number[][], label: string, size: string): string {
  const rows = mat.length;
  const cols = mat[0]?.length ?? 0;

  // For large matrices, show compact view with toggleable full view
  const maxShow = 12;
  const showRows = Math.min(rows, maxShow);
  const showCols = Math.min(cols, maxShow);

  let html = `<div style="margin:8px 0">`;
  html += `<div style="color:#e94560;font-weight:bold;margin-bottom:4px">${label} (${size})</div>`;
  html += `<div style="overflow-x:auto">`;
  html += `<table class="matrix-table">`;

  // Header with DOF labels
  html += "<tr><td></td>";
  for (let j = 0; j < showCols; j++) {
    html += `<td style="color:#00d4ff;text-align:center;font-size:9px">${dofLabel(j)}</td>`;
  }
  html += "</tr>";

  for (let i = 0; i < showRows; i++) {
    html += "<tr>";
    html += `<td style="color:#00d4ff;font-size:9px;white-space:nowrap">${dofLabel(i)}</td>`;
    for (let j = 0; j < showCols; j++) {
      const v = mat[i][j];
      const isZero = Math.abs(v) < 1e-10;
      const cls = isZero ? "zero" : (i === j ? "highlight" : "");
      html += `<td class="${cls}">${isZero ? "0" : fmtMatrix(v)}</td>`;
    }
    html += "</tr>";
  }

  html += "</table></div></div>";
  return html;
}

function dofLabel(i: number): string {
  const nodeIdx = Math.floor(i / 6);
  const dofIdx = i % 6;
  const dofNames = ["u", "v", "w", "rx", "ry", "rz"];
  return `${dofNames[dofIdx]}${nodeIdx === 0 ? "i" : "j"}`;
}

function fmtMatrix(v: number): string {
  if (Math.abs(v) >= 1e6) return v.toExponential(1);
  if (Math.abs(v) < 0.01 && v !== 0) return v.toExponential(1);
  if (Math.abs(v) >= 100) return v.toFixed(0);
  if (Math.abs(v) >= 1) return v.toFixed(2);
  return v.toFixed(4);
}

function fmtProp(v: number): string {
  if (Math.abs(v) >= 1e6) return v.toExponential(2);
  if (v === 0) return "0";
  return v.toFixed(2);
}
