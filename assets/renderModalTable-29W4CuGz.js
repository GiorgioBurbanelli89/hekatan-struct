function h() {
  const d = document.createElement("div");
  d.id = "modal-results", d.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; overflow-x: auto; pointer-events: auto;
    border: 1px solid #0f03;
  `;
  let a = false;
  function m(r, s) {
    var _a, _b;
    if (!r.frequencies || r.frequencies.length === 0) {
      d.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const g = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], x = [0, 0, 0, 0, 0, 0];
    let i = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:default;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${s.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
    if (i += '<div id="modal-body" style="padding:0 12px 10px 12px;">', s.properties) for (const t of s.properties) i += `<span style="color:#888">${t}</span>
`;
    i += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const t of g) i += `<th style="padding:2px 5px">${t}</th>`;
    if (i += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, r.frequencies.forEach((t, e) => {
      var _a2;
      const l = t > 0 ? 1 / t : 0, c = t * 2 * Math.PI, n = ((_a2 = r.massParticipation) == null ? void 0 : _a2[e]) || [0, 0, 0, 0, 0, 0];
      for (let o = 0; o < 6; o++) x[o] += n[o];
      i += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${e + 1}</td>
  <td style="padding:2px 6px; text-align:right">${t.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${l.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${c.toFixed(2)}</td>`;
      for (let o = 0; o < 6; o++) {
        const f = (n[o] * 100).toFixed(1), y = n[o] > 0.5 ? "#f00" : n[o] > 0.1 ? "#ff0" : "#0f0";
        i += `<td style="padding:2px 5px; text-align:right; color:${y}">${f}%</td>`;
      }
      i += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(x[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(x[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(x[5] * 100).toFixed(1)}%</td></tr>`;
    }), i += "</table></div>", d.innerHTML = i, a) {
      const t = d.querySelector("#modal-body"), e = d.querySelector("#modal-minimize");
      t && (t.style.display = "none"), e && (e.textContent = "\u25A2", e.title = "Restaurar");
    }
    (_a = d.querySelector("#modal-minimize")) == null ? void 0 : _a.addEventListener("click", () => {
      a = !a;
      const t = d.querySelector("#modal-body"), e = d.querySelector("#modal-minimize");
      a ? (t.style.display = "none", e.textContent = "\u25A2", e.title = "Restaurar") : (t.style.display = "block", e.textContent = "\u25AC", e.title = "Minimizar");
    }), (_b = d.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
      const t = [];
      t.push(`Modal Analysis \u2014 ${s.title}`);
      const e = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${g.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
      t.push(e), t.push("-".repeat(e.length));
      const l = [0, 0, 0, 0, 0, 0];
      r.frequencies.forEach((n, o) => {
        var _a2;
        const f = n > 0 ? 1 / n : 0, y = n * 2 * Math.PI, u = ((_a2 = r.massParticipation) == null ? void 0 : _a2[o]) || [0, 0, 0, 0, 0, 0];
        for (let p = 0; p < 6; p++) l[p] += u[p];
        const b = u.map((p) => ((p * 100).toFixed(1) + "%").padStart(6)).join(" ");
        t.push(`${String(o + 1).padStart(4)}  ${n.toFixed(4).padStart(9)}  ${f.toFixed(4).padStart(9)}  ${y.toFixed(2).padStart(9)}  ${b}  ${(l[0] * 100).toFixed(1).padStart(5)}%  ${(l[1] * 100).toFixed(1).padStart(5)}%  ${(l[5] * 100).toFixed(1).padStart(5)}%`);
      }), navigator.clipboard.writeText(t.join(`
`));
      const c = d.querySelector("#modal-copy");
      c.textContent = "\u2713", setTimeout(() => c.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: d, render: m };
}
export {
  h as c
};
