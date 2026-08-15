function R() {
  const o = document.createElement("div");
  o.id = "modal-results", o.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 760px; max-height: 60vh;
    overflow-x: auto; overflow-y: auto;
    pointer-events: auto;
    border: 1px solid #0f03;
    resize: both;
    min-width: 400px; min-height: 200px;
  `;
  {
    let s = false, m = 0, b = 0, x = 0, y = 0;
    o.addEventListener("mousedown", (d) => {
      const a = d.target;
      if (!a.closest("#modal-header") || a.closest("button")) return;
      s = true;
      const n = o.getBoundingClientRect();
      m = d.clientX, b = d.clientY, x = n.left, y = n.top, o.style.bottom = "auto", o.style.right = "auto", o.style.left = `${n.left}px`, o.style.top = `${n.top}px`, d.preventDefault();
    }), document.addEventListener("mousemove", (d) => {
      if (!s) return;
      let a = x + (d.clientX - m), n = y + (d.clientY - b);
      a = Math.max(-o.offsetWidth + 80, Math.min(window.innerWidth - 80, a)), n = Math.max(0, Math.min(window.innerHeight - 30, n)), o.style.left = `${a}px`, o.style.top = `${n}px`;
    }), document.addEventListener("mouseup", () => {
      s = false;
    });
  }
  let M = false;
  const h = 0.9;
  function N(s, m) {
    var _a, _b, _c, _d;
    if (!s.frequencies || s.frequencies.length === 0) {
      const t = ((_a = m.properties) == null ? void 0 : _a.length) ? m.properties.map((e) => `<div>${e}</div>`).join("") : "<div>El solver no devolvi\xF3 modos.</div>";
      o.innerHTML = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:move; user-select:none;" title="Arrastra para mover">
  <b style="color:#ff0">\u2725 \u26A1 MODAL \u2014 ${m.title}</b>
</div>
<div id="modal-body" style="padding:0 12px 10px 12px;">
  <div style="color:#f44; font-weight:bold; font-size:13px; padding:6px 0">\u2717 El an\xE1lisis modal NO se ejecut\xF3</div>
  <div style="color:#fa0; font-size:11px; line-height:1.5">${t}</div>
</div>`;
      return;
    }
    const b = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], x = [0, 0, 0, 0, 0, 0], y = s.frequencies.length;
    let d = -1, a = -1, n = -1, F = 0, A = 0;
    {
      const t = [0, 0, 0, 0, 0, 0];
      for (let e = 0; e < y; e++) {
        const g = ((_b = s.massParticipation) == null ? void 0 : _b[e]) || [0, 0, 0, 0, 0, 0];
        for (let f = 0; f < 6; f++) t[f] += g[f];
        d < 0 && t[0] >= h && (d = e + 1), a < 0 && t[1] >= h && (a = e + 1), n < 0 && t[0] >= h && t[1] >= h && (n = e + 1);
      }
      F = t[0], A = t[1];
    }
    const U = (() => {
      const t = (e) => `${((h - e) * 100).toFixed(1)} %`;
      return n > 0 ? `<span style="color:#0f0">\u2713 Masa participativa \u2265 90 % en X e Y al modo ${n} de ${y} \xB7 \u03A3Ux=${(F * 100).toFixed(1)} % \u03A3Uy=${(A * 100).toFixed(1)} % (NEC-15 \xA76.2.2 / ASCE 7-22 \xA712.9.1.1)</span>` : d > 0 && a < 0 ? `<span style="color:#fa0">\u26A0 FALTAN MODOS EN Y \u2014 \u03A3Uy=${(A * 100).toFixed(1)} % en ${y} modos (faltan ${t(A)} para el 90 % que exige NEC-15 \xA76.2.2). X cumple en el modo ${d}. Sub\xED \xABN\xB0 de modos\xBB en Settings \u25B8 \u26A1 Modal + Animaci\xF3n.</span>` : a > 0 && d < 0 ? `<span style="color:#fa0">\u26A0 FALTAN MODOS EN X \u2014 \u03A3Ux=${(F * 100).toFixed(1)} % en ${y} modos (faltan ${t(F)} para el 90 % que exige NEC-15 \xA76.2.2). Y cumple en el modo ${a}. Sub\xED \xABN\xB0 de modos\xBB en Settings \u25B8 \u26A1 Modal + Animaci\xF3n.</span>` : `<span style="color:#f44">\u2717 FALTAN MODOS EN AMBAS DIRECCIONES \u2014 \u03A3Ux=${(F * 100).toFixed(1)} % \xB7 \u03A3Uy=${(A * 100).toFixed(1)} % en ${y} modos. NEC-15 \xA76.2.2 exige \u2265 90 %: el cortante din\xE1mico sale bajo y el control Vdin/Vest no es representativo. Sub\xED \xABN\xB0 de modos\xBB en Settings \u25B8 \u26A1 Modal + Animaci\xF3n.</span>`;
    })();
    let r = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:move; user-select:none;" title="Arrastra para mover">
  <b style="color:#ff0">\u2725 \u26A1 MODAL ANALYSIS \u2014 ${m.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
    r += '<div id="modal-body" style="padding:0 12px 10px 12px;">', r += `<div style="padding:6px 0; font-weight:bold; font-size:12px; line-height:1.4">${U}</div>`, r += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const t of b) r += `<th style="padding:2px 5px">${t}</th>`;
    r += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let t = 0; t < 6; t++) x[t] = 0;
    if (s.frequencies.forEach((t, e) => {
      var _a2;
      const g = t > 0 ? 1 / t : 0, f = t * 2 * Math.PI, p = t >= 500, c = ((_a2 = s.massParticipation) == null ? void 0 : _a2[e]) || [0, 0, 0, 0, 0, 0];
      for (let i = 0; i < 6; i++) x[i] += c[i];
      let u = 0, S = c[0];
      for (let i = 1; i < 6; i++) c[i] > S && (S = c[i], u = i);
      const $ = p ? "masa faltante (r\xEDgida)" : S < 0.05 ? "\u2014" : `${b[u]} (${(S * 100).toFixed(0)} %)`, z = u === 0 || u === 1 ? "#0f0" : u === 5 ? "#0ff" : u === 2 ? "#fa0" : "#888", v = e + 1 === d, E = e + 1 === a, C = e + 1 === n;
      r += `<tr style="border-bottom:1px solid #fff1; ${p ? "background:rgba(0,180,255,0.12);" : C ? "background:rgba(0,255,0,0.12);" : v || E ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${p ? "MF" : e + 1 + (C ? " \u2605" : "")}</td>
  <td style="padding:2px 6px; text-align:right">${p ? "r\xEDgido" : t.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${p ? "\u22480" : g.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${p ? "\u2014" : f.toFixed(2)}</td>`;
      for (let i = 0; i < 6; i++) {
        const T = (c[i] * 100).toFixed(1), O = c[i] > 0.5 ? "#f00" : c[i] > 0.1 ? "#ff0" : "#0f0";
        r += `<td style="padding:2px 5px; text-align:right; color:${O}">${T}%</td>`;
      }
      const w = x[0] >= h ? "#0f0" : "#0ff", L = x[1] >= h ? "#0f0" : "#0ff";
      r += `<td style="padding:2px 5px; text-align:right; color:${w}">${(x[0] * 100).toFixed(1)}%${v ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${L}">${(x[1] * 100).toFixed(1)}%${E ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(x[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${z}">${$}</td></tr>`;
    }), r += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, r += "</div>", o.innerHTML = r, M) {
      const t = o.querySelector("#modal-body"), e = o.querySelector("#modal-minimize");
      t && (t.style.display = "none"), e && (e.textContent = "\u25A2", e.title = "Restaurar");
    }
    (_c = o.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      M = !M;
      const t = o.querySelector("#modal-body"), e = o.querySelector("#modal-minimize");
      M ? (t.style.display = "none", e.textContent = "\u25A2", e.title = "Restaurar") : (t.style.display = "block", e.textContent = "\u25AC", e.title = "Minimizar");
    }), (_d = o.querySelector("#modal-copy")) == null ? void 0 : _d.addEventListener("click", () => {
      const t = [];
      t.push(`Modal Analysis \u2014 ${m.title}`), t.push(U.replace(/<[^>]+>/g, ""));
      const e = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${b.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      t.push(e), t.push("-".repeat(e.length));
      const g = [0, 0, 0, 0, 0, 0];
      s.frequencies.forEach((p, c) => {
        var _a2;
        const u = p > 0 ? 1 / p : 0, S = p * 2 * Math.PI, $ = ((_a2 = s.massParticipation) == null ? void 0 : _a2[c]) || [0, 0, 0, 0, 0, 0];
        for (let l = 0; l < 6; l++) g[l] += $[l];
        let z = 0, v = $[0];
        for (let l = 1; l < 6; l++) $[l] > v && (v = $[l], z = l);
        const E = v < 0.05 ? "\u2014" : `${b[z]} (${(v * 100).toFixed(0)}%)`, C = $.map((l) => ((l * 100).toFixed(1) + "%").padStart(6)).join(" ");
        t.push(`${String(c + 1).padStart(4)}  ${p.toFixed(4).padStart(9)}  ${u.toFixed(4).padStart(9)}  ${S.toFixed(2).padStart(9)}  ${C}  ${(g[0] * 100).toFixed(1).padStart(5)}%  ${(g[1] * 100).toFixed(1).padStart(5)}%  ${(g[5] * 100).toFixed(1).padStart(5)}%  ${E}`);
      }), navigator.clipboard.writeText(t.join(`
`));
      const f = o.querySelector("#modal-copy");
      f.textContent = "\u2713", setTimeout(() => f.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: o, render: N };
}
export {
  R as c
};
