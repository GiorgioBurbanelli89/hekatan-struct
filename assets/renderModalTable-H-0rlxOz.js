function X() {
  const s = document.createElement("div");
  s.id = "modal-results", s.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 760px; overflow-x: auto; pointer-events: auto;
    border: 1px solid #0f03;
  `;
  let z = false;
  const y = 0.9;
  function E(a, F) {
    var _a, _b, _c, _d;
    if (!a.frequencies || a.frequencies.length === 0) {
      s.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const S = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], c = [0, 0, 0, 0, 0, 0], $ = a.frequencies.length;
    let m = -1, g = -1, b = -1, U = 0, M = 0;
    {
      const t = [0, 0, 0, 0, 0, 0];
      for (let o = 0; o < $; o++) {
        const r = ((_a = a.massParticipation) == null ? void 0 : _a[o]) || [0, 0, 0, 0, 0, 0];
        for (let l = 0; l < 6; l++) t[l] += r[l];
        m < 0 && t[0] >= y && (m = o + 1), g < 0 && t[1] >= y && (g = o + 1), b < 0 && t[0] >= y && t[1] >= y && (b = o + 1);
      }
      U = t[0], M = t[1];
    }
    let A = -1, T = -1, C = -1;
    const P = 0.1;
    for (let t = 0; t < $; t++) {
      const o = ((_b = a.massParticipation) == null ? void 0 : _b[t]) || [0, 0, 0, 0, 0, 0];
      A < 0 && o[0] > P && (A = t + 1), T < 0 && o[1] > P && (T = t + 1), C < 0 && o[5] > P && (C = t + 1);
    }
    const R = b > 0 ? `<span style="color:#0f0">\u2713 ASCE 7-22 \xA712.9.1.1 \u2014 90 % alcanzado en X e Y al modo ${b} de ${$}</span>` : m > 0 && g < 0 ? `<span style="color:#fa0">\u26A0 X cumple en modo ${m}, Y todav\xEDa en ${(M * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : g > 0 && m < 0 ? `<span style="color:#fa0">\u26A0 Y cumple en modo ${g}, X todav\xEDa en ${(U * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : `<span style="color:#f44">\u2717 ASCE 7-22 NO cumplido en ${$} modos \xB7 \u03A3Ux=${(U * 100).toFixed(1)} % \xB7 \u03A3Uy=${(M * 100).toFixed(1)} % \u2014 aumentar nModes</span>`, L = (() => {
      const t = (o, r) => {
        var _a2;
        if (o < 0) return `<span style="color:#f44">${r}: no encontrado en ${$} modos</span>`;
        const l = ((_a2 = a.massParticipation) == null ? void 0 : _a2[o - 1]) || [0, 0, 0, 0, 0, 0], i = r === "Ux" ? 0 : r === "Uy" ? 1 : 5, p = a.frequencies[o - 1] > 0 ? 1 / a.frequencies[o - 1] : 0;
        return `<span style="color:#0f0">${r}: modo ${o}, T=${p.toFixed(3)} s, MPF=${(l[i] * 100).toFixed(1)} %</span>`;
      };
      return `<div style="margin:4px 0; padding:4px 6px; background:rgba(0,255,255,0.05); border-left:2px solid #0ff; font-size:11px;">
  \u{1F3AF} <b>Modos s\xEDsmicos principales</b> (ASCE 7-22 \xA712.9.1):<br>
  ${t(A, "Ux")} \xB7 ${t(T, "Uy")} \xB7 ${t(C, "Rz")}
</div>`;
    })();
    let d = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${F.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
    if (d += '<div id="modal-body" style="padding:0 12px 10px 12px;">', d += `<div style="padding:6px 0; font-weight:bold; font-size:13px;">${R}</div>`, d += L, F.properties) for (const t of F.properties) d += `<span style="color:#888">${t}</span>
`;
    d += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const t of S) d += `<th style="padding:2px 5px">${t}</th>`;
    d += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let t = 0; t < 6; t++) c[t] = 0;
    if (a.frequencies.forEach((t, o) => {
      var _a2;
      const r = t > 0 ? 1 / t : 0, l = t * 2 * Math.PI, i = ((_a2 = a.massParticipation) == null ? void 0 : _a2[o]) || [0, 0, 0, 0, 0, 0];
      for (let e = 0; e < 6; e++) c[e] += i[e];
      let p = 0, u = i[0];
      for (let e = 1; e < 6; e++) i[e] > u && (u = i[e], p = e);
      const k = u < 0.05 ? "\u2014" : `${S[p]} (${(u * 100).toFixed(0)} %)`, x = p === 0 || p === 1 ? "#0f0" : p === 5 ? "#0ff" : p === 2 ? "#fa0" : "#888", h = o + 1 === m, f = o + 1 === g, v = o + 1 === b;
      d += `<tr style="border-bottom:1px solid #fff1; ${v ? "background:rgba(0,255,0,0.12);" : h || f ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${o + 1}${v ? " \u2605" : ""}</td>
  <td style="padding:2px 6px; text-align:right">${t.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${r.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${l.toFixed(2)}</td>`;
      for (let e = 0; e < 6; e++) {
        const Y = (i[e] * 100).toFixed(1), H = i[e] > 0.5 ? "#f00" : i[e] > 0.1 ? "#ff0" : "#0f0";
        d += `<td style="padding:2px 5px; text-align:right; color:${H}">${Y}%</td>`;
      }
      const n = c[0] >= y ? "#0f0" : "#0ff", w = c[1] >= y ? "#0f0" : "#0ff";
      d += `<td style="padding:2px 5px; text-align:right; color:${n}">${(c[0] * 100).toFixed(1)}%${h ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${w}">${(c[1] * 100).toFixed(1)}%${f ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(c[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${x}">${k}</td></tr>`;
    }), d += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, d += "</div>", s.innerHTML = d, z) {
      const t = s.querySelector("#modal-body"), o = s.querySelector("#modal-minimize");
      t && (t.style.display = "none"), o && (o.textContent = "\u25A2", o.title = "Restaurar");
    }
    (_c = s.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      z = !z;
      const t = s.querySelector("#modal-body"), o = s.querySelector("#modal-minimize");
      z ? (t.style.display = "none", o.textContent = "\u25A2", o.title = "Restaurar") : (t.style.display = "block", o.textContent = "\u25AC", o.title = "Minimizar");
    }), (_d = s.querySelector("#modal-copy")) == null ? void 0 : _d.addEventListener("click", () => {
      const t = [];
      t.push(`Modal Analysis \u2014 ${F.title}`), t.push(R.replace(/<[^>]+>/g, ""));
      const o = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${S.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      t.push(o), t.push("-".repeat(o.length));
      const r = [0, 0, 0, 0, 0, 0];
      a.frequencies.forEach((i, p) => {
        var _a2;
        const u = i > 0 ? 1 / i : 0, k = i * 2 * Math.PI, x = ((_a2 = a.massParticipation) == null ? void 0 : _a2[p]) || [0, 0, 0, 0, 0, 0];
        for (let n = 0; n < 6; n++) r[n] += x[n];
        let h = 0, f = x[0];
        for (let n = 1; n < 6; n++) x[n] > f && (f = x[n], h = n);
        const v = f < 0.05 ? "\u2014" : `${S[h]} (${(f * 100).toFixed(0)}%)`, q = x.map((n) => ((n * 100).toFixed(1) + "%").padStart(6)).join(" ");
        t.push(`${String(p + 1).padStart(4)}  ${i.toFixed(4).padStart(9)}  ${u.toFixed(4).padStart(9)}  ${k.toFixed(2).padStart(9)}  ${q}  ${(r[0] * 100).toFixed(1).padStart(5)}%  ${(r[1] * 100).toFixed(1).padStart(5)}%  ${(r[5] * 100).toFixed(1).padStart(5)}%  ${v}`);
      }), navigator.clipboard.writeText(t.join(`
`));
      const l = s.querySelector("#modal-copy");
      l.textContent = "\u2713", setTimeout(() => l.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: s, render: E };
}
export {
  X as c
};
