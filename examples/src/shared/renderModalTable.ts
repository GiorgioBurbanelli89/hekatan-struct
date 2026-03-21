import { ModalOutputs } from "awatif-fem";

export interface ModalTableConfig {
  /** Title shown above the table, e.g. "Example 6.3 Space Frame" */
  title: string;
  /** Optional property lines shown below the title (e.g. "E=29500 ksi, G=11346 ksi") */
  properties?: string[];
}

/**
 * Creates a fixed-position modal results panel and returns { div, render }.
 * Call render(modalOutputs) each time modal results update.
 */
export function createModalPanel() {
  const div = document.createElement("div");
  div.id = "modal-results";
  div.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; overflow-x: auto; pointer-events: auto;
    border: 1px solid #0f03;
  `;

  let minimized = false;

  function render(m: ModalOutputs, config: ModalTableConfig) {
    if (!m.frequencies || m.frequencies.length === 0) {
      div.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }

    const dirs = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"];
    const sumP = [0, 0, 0, 0, 0, 0];

    let html = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:default;">
  <b style="color:#ff0">⚡ MODAL ANALYSIS — ${config.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">📋</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">▬</button>
  </div>
</div>`;

    html += `<div id="modal-body" style="padding:0 12px 10px 12px;">`;

    if (config.properties) {
      for (const line of config.properties) {
        html += `<span style="color:#888">${line}</span>\n`;
      }
    }

    html += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">ω (rad/s)</th>`;

    for (const d of dirs) html += `<th style="padding:2px 5px">${d}</th>`;
    html += `<th style="padding:2px 5px; color:#0ff">ΣUx</th>
  <th style="padding:2px 5px; color:#0ff">ΣUy</th>
  <th style="padding:2px 5px; color:#0ff">ΣRz</th></tr>`;

    m.frequencies.forEach((freq, i) => {
      const T = freq > 0 ? 1 / freq : 0;
      const omega = freq * 2 * Math.PI;
      const mp = m.massParticipation?.[i] || [0, 0, 0, 0, 0, 0];
      for (let d = 0; d < 6; d++) sumP[d] += mp[d];

      html += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${i + 1}</td>
  <td style="padding:2px 6px; text-align:right">${freq.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${T.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${omega.toFixed(2)}</td>`;

      for (let d = 0; d < 6; d++) {
        const pct = (mp[d] * 100).toFixed(1);
        const color = mp[d] > 0.5 ? "#f00" : mp[d] > 0.1 ? "#ff0" : "#0f0";
        html += `<td style="padding:2px 5px; text-align:right; color:${color}">${pct}%</td>`;
      }

      html += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(sumP[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(sumP[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(sumP[5] * 100).toFixed(1)}%</td></tr>`;
    });

    html += "</table></div>";
    div.innerHTML = html;

    // Restore minimized state if it was minimized before re-render
    if (minimized) {
      const body = div.querySelector("#modal-body") as HTMLElement;
      const btn = div.querySelector("#modal-minimize") as HTMLElement;
      if (body) body.style.display = "none";
      if (btn) { btn.textContent = "▢"; btn.title = "Restaurar"; }
    }

    // Minimize / Restore
    div.querySelector("#modal-minimize")?.addEventListener("click", () => {
      minimized = !minimized;
      const body = div.querySelector("#modal-body") as HTMLElement;
      const btn = div.querySelector("#modal-minimize") as HTMLElement;
      if (minimized) {
        body.style.display = "none";
        btn.textContent = "▢";
        btn.title = "Restaurar";
      } else {
        body.style.display = "block";
        btn.textContent = "▬";
        btn.title = "Minimizar";
      }
    });

    // Copy table as text
    div.querySelector("#modal-copy")?.addEventListener("click", () => {
      const lines: string[] = [];
      lines.push(`Modal Analysis — ${config.title}`);
      const hdr = `Mode  Freq(Hz)  Period(s)  ω(rad/s)  ${dirs.join("     ")}  ΣUx    ΣUy    ΣRz`;
      lines.push(hdr);
      lines.push("-".repeat(hdr.length));
      const sp2 = [0, 0, 0, 0, 0, 0];
      m.frequencies.forEach((freq, i) => {
        const T = freq > 0 ? 1 / freq : 0;
        const omega = freq * 2 * Math.PI;
        const mp = m.massParticipation?.[i] || [0, 0, 0, 0, 0, 0];
        for (let d = 0; d < 6; d++) sp2[d] += mp[d];
        const mpStr = mp.map(v => ((v * 100).toFixed(1) + "%").padStart(6)).join(" ");
        lines.push(`${String(i + 1).padStart(4)}  ${freq.toFixed(4).padStart(9)}  ${T.toFixed(4).padStart(9)}  ${omega.toFixed(2).padStart(9)}  ${mpStr}  ${(sp2[0] * 100).toFixed(1).padStart(5)}%  ${(sp2[1] * 100).toFixed(1).padStart(5)}%  ${(sp2[5] * 100).toFixed(1).padStart(5)}%`);
      });
      navigator.clipboard.writeText(lines.join("\n"));
      const btn = div.querySelector("#modal-copy") as HTMLElement;
      btn.textContent = "✓";
      setTimeout(() => btn.textContent = "📋", 1500);
    });
  }

  return { div, render };
}
