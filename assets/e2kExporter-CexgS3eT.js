const kt = { v: 0 };
function Bt() {
  const $ = document.createElement("div");
  $.id = "modal-results", $.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    width: 640px; max-width: 60vw; max-height: 50vh;
    display: flex; flex-direction: column; overflow: hidden;
    pointer-events: auto;
    border: 1px solid #0f06; box-shadow: 0 4px 20px rgba(0,0,0,0.5);
    resize: both;
    min-width: 340px; min-height: 120px;
  `;
  let O = false;
  const x = 0.9;
  function L(R, z) {
    var _a, _b, _c, _d, _e, _f;
    if (!R.frequencies || R.frequencies.length === 0) {
      $.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const K = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], J = [0, 0, 0, 0, 0, 0], N = R.frequencies.length;
    let w = -1, i = -1, T = -1, q = 0, V = 0;
    {
      const a = [0, 0, 0, 0, 0, 0];
      for (let E = 0; E < N; E++) {
        const u = ((_a = R.massParticipation) == null ? void 0 : _a[E]) || [0, 0, 0, 0, 0, 0];
        for (let P = 0; P < 6; P++) a[P] += u[P];
        w < 0 && a[0] >= x && (w = E + 1), i < 0 && a[1] >= x && (i = E + 1), T < 0 && a[0] >= x && a[1] >= x && (T = E + 1);
      }
      q = a[0], V = a[1];
    }
    let _ = -1, W = -1, Z = -1;
    const y = 0.1;
    for (let a = 0; a < N; a++) {
      const E = ((_b = R.massParticipation) == null ? void 0 : _b[a]) || [0, 0, 0, 0, 0, 0];
      _ < 0 && E[0] > y && (_ = a + 1), W < 0 && E[1] > y && (W = a + 1), Z < 0 && E[5] > y && (Z = a + 1);
    }
    const g = T > 0 ? `<span style="color:#0f0">\u2713 ASCE 7-22 \xA712.9.1.1 \u2014 90 % alcanzado en X e Y al modo ${T} de ${N}</span>` : w > 0 && i < 0 ? `<span style="color:#fa0">\u26A0 X cumple en modo ${w}, Y todav\xEDa en ${(V * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : i > 0 && w < 0 ? `<span style="color:#fa0">\u26A0 Y cumple en modo ${i}, X todav\xEDa en ${(q * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : `<span style="color:#f44">\u2717 ASCE 7-22 NO cumplido en ${N} modos \xB7 \u03A3Ux=${(q * 100).toFixed(1)} % \xB7 \u03A3Uy=${(V * 100).toFixed(1)} % \u2014 aumentar nModes</span>`, h = (() => {
      const a = (E, u) => {
        var _a2;
        if (E < 0) return `<span style="color:#f44">${u}: no encontrado en ${N} modos</span>`;
        const P = ((_a2 = R.massParticipation) == null ? void 0 : _a2[E - 1]) || [0, 0, 0, 0, 0, 0], D = u === "Ux" ? 0 : u === "Uy" ? 1 : 5, Y = R.frequencies[E - 1] > 0 ? 1 / R.frequencies[E - 1] : 0;
        return `<span style="color:#0f0">${u}: modo ${E}, T=${Y.toFixed(3)} s, MPF=${(P[D] * 100).toFixed(1)} %</span>`;
      };
      return `<div style="margin:4px 0; padding:4px 6px; background:rgba(0,255,255,0.05); border-left:2px solid #0ff; font-size:11px;">
  \u{1F3AF} <b>Modos s\xEDsmicos principales</b> (ASCE 7-22 \xA712.9.1):<br>
  ${a(_, "Ux")} \xB7 ${a(W, "Uy")} \xB7 ${a(Z, "Rz")}
</div>`;
    })();
    let o = `<div id="modal-header" style="flex:0 0 auto; display:flex; align-items:center; justify-content:space-between; padding:6px 10px; cursor:move; border-bottom:1px solid #0f04; background:rgba(0,0,0,0.4);">
  <b style="color:#ff0; font-size:12px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis">\u26A1 MODAL \u2014 ${z.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
    <button id="modal-close" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#7a2d2d; color:#fff; border:1px solid #b04545; border-radius:3px;" title="Cerrar (ocultar ventana)">\u2715</button>
  </div>
</div>`;
    if (o += '<div id="modal-body" style="flex:1 1 auto; min-height:0; overflow:auto; padding:6px 12px 10px 12px;">', o += `<div style="padding:6px 0; font-weight:bold; font-size:13px;">${g}</div>`, o += h, z.properties) for (const a of z.properties) o += `<span style="color:#888">${a}</span>
`;
    o += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const a of K) o += `<th style="padding:2px 5px">${a}</th>`;
    o += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let a = 0; a < 6; a++) J[a] = 0;
    if (R.frequencies.forEach((a, E) => {
      var _a2;
      const u = a > 0 ? 1 / a : 0, P = a * 2 * Math.PI, D = ((_a2 = R.massParticipation) == null ? void 0 : _a2[E]) || [0, 0, 0, 0, 0, 0];
      for (let Q = 0; Q < 6; Q++) J[Q] += D[Q];
      let Y = 0, b = D[0];
      for (let Q = 1; Q < 6; Q++) D[Q] > b && (b = D[Q], Y = Q);
      const tt = b < 0.05 ? "\u2014" : `${K[Y]} (${(b * 100).toFixed(0)} %)`, X = Y === 0 || Y === 1 ? "#0f0" : Y === 5 ? "#0ff" : Y === 2 ? "#fa0" : "#888", ct = E + 1 === w, lt = E + 1 === i, at = E + 1 === T;
      o += `<tr style="border-bottom:1px solid #fff1; ${at ? "background:rgba(0,255,0,0.12);" : ct || lt ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${E + 1}${at ? " \u2605" : ""}</td>
  <td style="padding:2px 6px; text-align:right">${a.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${u.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${P.toFixed(2)}</td>`;
      for (let Q = 0; Q < 6; Q++) {
        const $t = (D[Q] * 100).toFixed(1), rt = D[Q] > 0.5 ? "#f00" : D[Q] > 0.1 ? "#ff0" : "#0f0";
        o += `<td style="padding:2px 5px; text-align:right; color:${rt}">${$t}%</td>`;
      }
      const ot = J[0] >= x ? "#0f0" : "#0ff", ht = J[1] >= x ? "#0f0" : "#0ff";
      o += `<td style="padding:2px 5px; text-align:right; color:${ot}">${(J[0] * 100).toFixed(1)}%${ct ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${ht}">${(J[1] * 100).toFixed(1)}%${lt ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(J[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${X}">${tt}</td></tr>`;
    }), o += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, o += "</div>", $.innerHTML = o, O) {
      const a = $.querySelector("#modal-body"), E = $.querySelector("#modal-minimize");
      a && (a.style.display = "none"), E && (E.textContent = "\u25A2", E.title = "Restaurar");
    }
    (_c = $.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      O = !O;
      const a = $.querySelector("#modal-body"), E = $.querySelector("#modal-minimize");
      O ? (a.style.display = "none", E.textContent = "\u25A2", E.title = "Restaurar") : (a.style.display = "block", E.textContent = "\u25AC", E.title = "Minimizar");
    }), (_d = $.querySelector("#modal-close")) == null ? void 0 : _d.addEventListener("click", () => {
      $.style.display = "none";
    }), (_e = $.querySelector("#modal-header")) == null ? void 0 : _e.addEventListener("mousedown", (a) => {
      if (a.target.tagName === "BUTTON") return;
      const E = $.getBoundingClientRect();
      $.style.bottom = "auto", $.style.top = `${E.top}px`, $.style.left = `${E.left}px`;
      const u = a.clientX - E.left, P = a.clientY - E.top, D = (b) => {
        $.style.left = `${Math.max(0, b.clientX - u)}px`, $.style.top = `${Math.max(0, b.clientY - P)}px`;
      }, Y = () => {
        document.removeEventListener("mousemove", D), document.removeEventListener("mouseup", Y);
      };
      document.addEventListener("mousemove", D), document.addEventListener("mouseup", Y), a.preventDefault();
    }), (_f = $.querySelector("#modal-copy")) == null ? void 0 : _f.addEventListener("click", () => {
      const a = [];
      a.push(`Modal Analysis \u2014 ${z.title}`), a.push(g.replace(/<[^>]+>/g, ""));
      const E = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${K.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      a.push(E), a.push("-".repeat(E.length));
      const u = [0, 0, 0, 0, 0, 0];
      R.frequencies.forEach((D, Y) => {
        var _a2;
        const b = D > 0 ? 1 / D : 0, tt = D * 2 * Math.PI, X = ((_a2 = R.massParticipation) == null ? void 0 : _a2[Y]) || [0, 0, 0, 0, 0, 0];
        for (let ot = 0; ot < 6; ot++) u[ot] += X[ot];
        let ct = 0, lt = X[0];
        for (let ot = 1; ot < 6; ot++) X[ot] > lt && (lt = X[ot], ct = ot);
        const at = lt < 0.05 ? "\u2014" : `${K[ct]} (${(lt * 100).toFixed(0)}%)`, ft = X.map((ot) => ((ot * 100).toFixed(1) + "%").padStart(6)).join(" ");
        a.push(`${String(Y + 1).padStart(4)}  ${D.toFixed(4).padStart(9)}  ${b.toFixed(4).padStart(9)}  ${tt.toFixed(2).padStart(9)}  ${ft}  ${(u[0] * 100).toFixed(1).padStart(5)}%  ${(u[1] * 100).toFixed(1).padStart(5)}%  ${(u[5] * 100).toFixed(1).padStart(5)}%  ${at}`);
      }), navigator.clipboard.writeText(a.join(`
`));
      const P = $.querySelector("#modal-copy");
      P.textContent = "\u2713", setTimeout(() => P.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: $, render: L };
}
function vt($) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w;
  const O = $.split(/\r?\n/), x = { force: "TONF", length: "M" }, L = [], R = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), J = [], N = [], w = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), T = [], q = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), _ = [], W = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), o = [];
  let l = "", a = "";
  const E = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  for (const c of O) {
    const r = c.trim();
    if (r.startsWith("$ ")) {
      a = r.substring(2).trim(), E.has(a) || E.set(a, []), u.has(a) || u.set(a, c);
      continue;
    }
    if (a && (E.has(a) || E.set(a, []), E.get(a).push(c)), !(!r || r.startsWith("$"))) {
      if (a === "CONTROLS") {
        const t = r.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        t && (x.force = t[1], x.length = t[2]);
        const n = r.match(/TITLE2\s+"([^"]+)"/);
        n && (l = n[1]);
      }
      if (a === "STORIES - IN SEQUENCE FROM TOP") {
        const t = r.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (t) {
          const n = t[1], s = t[2] ? parseFloat(t[2]) : 0, p = t[3] ? parseFloat(t[3]) : void 0;
          L.push({ name: n, height: s, elev: p ?? 0 });
        }
      }
      if (a === "MATERIAL PROPERTIES") {
        const t = r.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (t) {
          const n = t[1];
          R.has(n) || R.set(n, { type: t[2] || "", E: 0, G: 0, nu: 0 });
          const s = R.get(n);
          t[2] && (s.type = t[2]);
          const p = r.match(/\bE\s+([\d.eE+-]+)/);
          p && (s.E = parseFloat(p[1]));
          const I = r.match(/\bU\s+([\d.eE+-]+)/);
          I && (s.nu = parseFloat(I[1]), s.G = s.E / (2 * (1 + s.nu)));
          const A = r.match(/\bFY\s+([\d.eE+-]+)/);
          A && (s.fy = parseFloat(A[1]));
          const k = r.match(/\bFC\s+([\d.eE+-]+)/);
          k && (s.fc = parseFloat(k[1]));
          const G = r.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          G && (s.density = parseFloat(G[1]));
        }
      }
      if (a === "FRAME SECTIONS") {
        const t = r.match(/FRAMESECTION\s+"([^"]+)"/);
        if (t) {
          const n = t[1];
          z.has(n) || z.set(n, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
          const s = z.get(n), p = r.match(/MATERIAL\s+"([^"]+)"/);
          p && (s.material = p[1]);
          const I = r.match(/SHAPE\s+"([^"]+)"/);
          I && (s.shape = I[1]);
          const A = r.match(/\bD\s+([\d.eE+-]+)/);
          A && (s.D = parseFloat(A[1]));
          const k = r.match(/\bB\s+([\d.eE+-]+)/);
          k && (s.B = parseFloat(k[1]));
          const G = r.match(/\bTF\s+([\d.eE+-]+)/);
          G && (s.TF = parseFloat(G[1]));
          const et = r.match(/\bTW\s+([\d.eE+-]+)/);
          et && (s.TW = parseFloat(et[1]));
          const it = r.match(/\bR\s+([\d.eE+-]+)/);
          it && (s.R = parseFloat(it[1]));
          const nt = r.match(/FILLMATERIAL\s+"([^"]+)"/);
          nt && (s.fillMaterial = nt[1]);
          const pt = r.match(/I2MOD\s+([\d.eE+-]+)/);
          pt && (s.modI2 = parseFloat(pt[1]));
          const dt = r.match(/I3MOD\s+([\d.eE+-]+)/);
          dt && (s.modI3 = parseFloat(dt[1]));
        }
      }
      if (a === "POINT COORDINATES") {
        const t = r.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        t && K.set(t[1], [parseFloat(t[2]), parseFloat(t[3])]);
      }
      if (a === "LINE CONNECTIVITIES") {
        const t = r.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        t && J.push({ name: t[1], type: t[2], pt1: t[3], pt2: t[4], nStories: parseInt(t[5]) });
      }
      if (a === "POINT ASSIGNS") {
        const t = r.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        t && w.set(`${t[1]}@${t[2]}`, t[3].split(/\s+/));
      }
      if (a === "LINE ASSIGNS") {
        const t = r.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (t) {
          const n = { story: t[2], section: t[3], rigidZone: 0, releases: [], angle: 0 }, s = r.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          s && (n.rigidZone = parseFloat(s[1]));
          const p = r.match(/RELEASE\s+"([^"]+)"/);
          p && (n.releases = p[1].split(/\s+/));
          const I = r.match(/ANG\s+([-\d.eE+]+)/);
          I && (n.angle = parseFloat(I[1])), i.set(`${t[1]}@${t[2]}`, n);
        }
      }
      if (a === "GRIDS") {
        const t = r.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        t && o.push({ label: t[1], dir: t[2], coord: parseFloat(t[3]) });
      }
      if (a === "FRAME OBJECT LOADS") {
        const t = r.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        t && T.push({ line: t[1], story: t[2], type: t[3], dir: t[4], lc: t[5], val: parseFloat(t[6]) });
      }
      if (a === "AREA CONNECTIVITIES") {
        const t = r.match(/AREA\s+"([^"]+)"\s+(?:FLOOR|WALL|RAMP|PANEL)?\s*\d+\s+(.+)/);
        if (t) {
          const n = ((_a = t[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((s) => s.replace(/"/g, ""))) || [];
          N.push({ name: t[1], pts: n, nStories: 0 });
        }
      }
      if (a === "WALL/SLAB/DECK SECTIONS" || a === "SLAB PROPERTIES" || a === "WALL PROPERTIES" || a === "DECK PROPERTIES") {
        const t = r.match(/SHELLPROP\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const n = t[1], s = (_b = t[2].match(/SLABTHICKNESS\s+([\d.eE+-]+)/)) == null ? void 0 : _b[1], p = (_c = t[2].match(/WALLTHICKNESS\s+([\d.eE+-]+)/)) == null ? void 0 : _c[1], I = (_d = t[2].match(/MATERIAL\s+"([^"]+)"/)) == null ? void 0 : _d[1], A = (_e = t[2].match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _e[1];
          if (s || p) {
            const k = V.get(n) || { material: "", modelingType: "ShellThin" };
            V.set(n, { material: I ?? k.material, modelingType: A ?? k.modelingType, thickness: parseFloat(s ?? p ?? "0") });
          }
        }
      }
      if (a === "AREA ASSIGNS") {
        const t = r.match(/AREAASSIGN\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const n = t[1], s = t[2], p = t[3], I = ((_f = p.match(/SECTION\s+"([^"]+)"/)) == null ? void 0 : _f[1]) ?? "", A = ((_g = p.match(/CARDINALPOINT\s+"([^"]+)"/)) == null ? void 0 : _g[1]) ?? "CENTROID", k = ((_h = p.match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _h[1]) ?? "ShellThin";
          q.set(`${n}@${s}`, { story: s, section: I, modelingType: k, cardinalPoint: A });
          const G = (_i = p.match(/SPRINGPROP\s+"([^"]+)"/)) == null ? void 0 : _i[1];
          G && g.set(`${n}@${s}`, G);
        }
      }
      if (a === "AREA SPRING PROPERTIES") {
        const t = r.match(/AREASPRING\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const n = t[1], s = t[2], p = parseFloat(((_j = s.match(/U1\s+([\d.eE+-]+)/)) == null ? void 0 : _j[1]) ?? "0"), I = parseFloat(((_k = s.match(/U2\s+([\d.eE+-]+)/)) == null ? void 0 : _k[1]) ?? "0"), A = parseFloat(((_l = s.match(/U3\s+([\d.eE+-]+)/)) == null ? void 0 : _l[1]) ?? "0");
          Z.set(n, { u1: p, u2: I, u3: A });
        }
      }
      if (a === "POINT SPRING PROPERTIES") {
        const t = r.match(/POINTSPRING\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const n = t[1], s = t[2], p = parseFloat(((_m = s.match(/UX\s+([\d.eE+-]+)/)) == null ? void 0 : _m[1]) ?? "0"), I = parseFloat(((_n = s.match(/UY\s+([\d.eE+-]+)/)) == null ? void 0 : _n[1]) ?? "0"), A = parseFloat(((_o = s.match(/UZ\s+([\d.eE+-]+)/)) == null ? void 0 : _o[1]) ?? "0");
          y.set(n, { ux: p, uy: I, uz: A });
        }
      }
      if (a === "POINT ASSIGNS") {
        const t = r.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/), n = (_q = (_p = t == null ? void 0 : t[3]) == null ? void 0 : _p.match(/SPRINGPROP\s+"([^"]+)"/)) == null ? void 0 : _q[1];
        t && n && h.set(`${t[1]}@${t[2]}`, n);
      }
      if (a === "SHELL UNIFORM LOAD SETS") {
        const t = r.match(/SHELLUNIFORMLOADSET\s+"([^"]+)"\s+LOADPAT\s+"([^"]+)"\s+VALUE\s+([\d.eE+-]+)/);
        if (t) {
          const n = t[1], s = t[2], p = parseFloat(t[3]);
          W.has(n) || W.set(n, []), W.get(n).push({ loadpat: s, value: p });
        }
      }
      if (a === "SHELL OBJECT LOADS") {
        const t = r.match(/AREALOAD\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const n = t[1], s = t[2], p = t[3], I = ((_r = p.match(/TYPE\s+"([^"]+)"/)) == null ? void 0 : _r[1]) ?? "";
          if (I === "UNIFLOADSET") {
            const A = ((_s = p.match(/UNIFLOADSET"\s+"([^"]+)"/)) == null ? void 0 : _s[1]) ?? ((_t = p.match(/"([^"]+)"\s*$/)) == null ? void 0 : _t[1]) ?? "";
            _.push({ area: n, story: s, type: "UNIFLOADSET", dir: "GRAV", lc: A, val: 0 });
          } else {
            const A = ((_u = p.match(/DIR\s+"([^"]+)"/)) == null ? void 0 : _u[1]) ?? "GRAV", k = ((_v = p.match(/LC\s+"([^"]+)"/)) == null ? void 0 : _v[1]) ?? "", G = parseFloat(((_w = p.match(/FVAL\s+([\d.eE+-]+)/)) == null ? void 0 : _w[1]) ?? "0");
            _.push({ area: n, story: s, type: I, dir: A, lc: k, val: G });
          }
        }
      }
    }
  }
  const P = [];
  for (const c of _) if (c.type === "UNIFLOADSET") {
    const r = W.get(c.lc);
    if (r) for (const t of r) P.push({ area: c.area, story: c.story, type: "UNIFF", dir: c.dir, lc: t.loadpat, val: t.value });
  } else P.push(c);
  _.length = 0, _.push(...P);
  const D = /* @__PURE__ */ new Map();
  if (L.length > 0) {
    const c = L.length - 1;
    D.set(L[c].name, L[c].elev);
    for (let r = c - 1; r >= 0; r--) {
      const n = D.get(L[r + 1].name) + L[r].height;
      L[r].elev = n, D.set(L[r].name, n);
    }
  }
  const Y = [], b = [], tt = /* @__PURE__ */ new Map(), X = (c, r) => `${c}@${r}`, ct = /* @__PURE__ */ new Set(), lt = /* @__PURE__ */ new Map();
  for (const c of J) lt.set(c.name, c);
  for (const c of J) for (const [r, t] of i) {
    if (!r.startsWith(c.name + "@")) continue;
    const n = t.story, s = L.findIndex((p) => p.name === n);
    if (!(s < 0)) if (c.type === "COLUMN" || c.type === "BRACE") {
      ct.add(X(c.pt2, n));
      const p = Math.max(c.nStories, 1), I = Math.min(s + p, L.length - 1);
      ct.add(X(c.pt1, L[I].name));
    } else ct.add(X(c.pt1, n)), ct.add(X(c.pt2, n));
  }
  for (const [c] of w) ct.add(c);
  for (const c of N) for (const [r, t] of q) if (r.startsWith(c.name + "@")) for (const n of c.pts) ct.add(X(n, t.story));
  for (const c of ct) {
    const [r, t] = c.split("@"), n = K.get(r), s = D.get(t);
    n === void 0 || s === void 0 || (Y.push([n[0], n[1], s]), b.push(c), tt.set(c, Y.length - 1));
  }
  const at = [], ft = [], ot = [], ht = [], Q = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map();
  for (const c of J) for (const [r, t] of i) {
    if (!r.startsWith(c.name + "@")) continue;
    const n = t.story, s = L.findIndex((et) => et.name === n);
    if (s < 0) continue;
    let p, I;
    if (c.type === "COLUMN" || c.type === "BRACE") {
      const et = Math.max(c.nStories, 1), it = Math.min(s + et, L.length - 1);
      p = X(c.pt1, L[it].name), I = X(c.pt2, n);
    } else p = X(c.pt1, n), I = X(c.pt2, n);
    const A = tt.get(p), k = tt.get(I);
    if (A === void 0 || k === void 0 || A === k) continue;
    const G = at.length;
    if (at.push([A, k]), ft.push(c.name), ot.push(c.type), ht.push(n), Q.set(G, t.section), t.rigidZone > 0 && $t.set(G, [t.rigidZone, t.rigidZone]), t.releases.length > 0) {
      const et = new Array(12).fill(false), it = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const nt of t.releases) {
        const pt = it[nt];
        pt !== void 0 && (et[pt] = true);
      }
      rt.set(G, et);
    }
  }
  const yt = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map();
  for (const c of N) for (const [r, t] of q) {
    if (!r.startsWith(c.name + "@")) continue;
    const n = [];
    for (const p of c.pts) {
      const I = X(p, t.story), A = tt.get(I);
      if (A === void 0) {
        n.length = 0;
        break;
      }
      n.push(A);
    }
    if (n.length !== 4) continue;
    const s = at.length;
    at.push(n), ft.push(c.name), ot.push("FLOOR"), ht.push(t.story), yt.set(s, t.section), Ct.set(s, t.cardinalPoint);
  }
  const Ot = /* @__PURE__ */ new Map(), St = (c, r, t) => {
    if (!(t > 0)) return;
    const n = `${c}:${r}`;
    Ot.set(n, (Ot.get(n) ?? 0) + t);
  };
  for (let c = 0; c < at.length; c++) {
    const r = at[c];
    if (r.length !== 4) continue;
    const t = g.get(`${ft[c]}@${ht[c]}`), n = t ? Z.get(t) : void 0;
    if (!n) continue;
    const s = r.map((G) => Y[G]), p = [s[1][0] - s[0][0], s[1][1] - s[0][1]], I = [s[3][0] - s[0][0], s[3][1] - s[0][1]], k = Math.abs(p[0] * I[1] - p[1] * I[0]) / 4;
    for (const G of r) St(G, 0, n.u1 * k), St(G, 1, n.u2 * k), St(G, 2, n.u3 * k);
  }
  for (const [c, r] of h) {
    const t = tt.get(c), n = y.get(r);
    t === void 0 || !n || (St(t, 0, n.ux), St(t, 1, n.uy), St(t, 2, n.uz));
  }
  const Tt = [];
  for (const [c, r] of Ot) {
    const [t, n] = c.split(":").map(Number);
    Tt.push({ node: t, dof: n, k: r });
  }
  const It = /* @__PURE__ */ new Map();
  for (const c of _) if (c.type === "UNIFF") for (let r = 0; r < at.length; r++) {
    if (ft[r] !== c.area || ht[r] !== c.story) continue;
    const t = at[r];
    if (t.length !== 4) continue;
    const n = t.map((k) => Y[k]), s = [n[1][0] - n[0][0], n[1][1] - n[0][1]], p = [n[3][0] - n[0][0], n[3][1] - n[0][1]], I = Math.abs(s[0] * p[1] - s[1] * p[0]), A = -c.val * I / 4;
    for (const k of t) {
      const G = It.get(k) || [0, 0, 0, 0, 0, 0];
      G[2] += A, It.set(k, G);
    }
  }
  const At = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map(), Lt = /* @__PURE__ */ new Map(), Rt = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map(), xt = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map();
  for (const [c, r] of Q) {
    const t = z.get(r);
    if (!t) continue;
    const n = R.get(t.material);
    n && (At.set(c, n.E), mt.set(c, n.G));
    const s = t.D, p = t.B, I = t.TF, A = t.TW;
    let k = 0, G = 0, et = 0, it = 0, nt = 0, pt = 0, dt = "rect";
    switch (t.shape) {
      case "Concrete Rectangular":
        k = s * p, G = p * s ** 3 / 12, et = s * p ** 3 / 12, it = p * s ** 3 * (1 / 3 - 0.21 * (s / p) * (1 - s ** 4 / (12 * p ** 4))), nt = pt = 5 / 6 * k, dt = "rect";
        break;
      case "Concrete Circle":
        k = Math.PI * s ** 2 / 4, G = et = Math.PI * s ** 4 / 64, it = Math.PI * s ** 4 / 32, nt = pt = 0.9 * k, dt = "circ";
        break;
      case "Steel I/Wide Flange":
        k = 2 * p * I + (s - 2 * I) * A, G = (p * s ** 3 - (p - A) * (s - 2 * I) ** 3) / 12, et = (2 * I * p ** 3 + (s - 2 * I) * A ** 3) / 12, it = (2 * p * I ** 3 + (s - 2 * I) * A ** 3) / 3, nt = (s - 2 * I) * A, pt = 2 * p * I * 5 / 6, dt = "I";
        break;
      case "Steel Tube":
        k = s * p - (s - 2 * A) * (p - 2 * A), G = (p * s ** 3 - (p - 2 * A) * (s - 2 * A) ** 3) / 12, et = (s * p ** 3 - (s - 2 * A) * (p - 2 * A) ** 3) / 12, it = 2 * A * (s - A) * (p - A) * ((s - A) * (p - A)) / (s - A + (p - A)), nt = 2 * s * A, pt = 2 * p * A, dt = "HSS";
        break;
      case "Filled Steel Tube":
        k = s * p, G = p * s ** 3 / 12, et = s * p ** 3 / 12, it = 2 * A * (s - A) * (p - A) * ((s - A) * (p - A)) / (s - A + (p - A)), nt = 2 * s * A + 5 / 6 * (s - 2 * A) * (p - 2 * A), pt = 2 * p * A + 5 / 6 * (s - 2 * A) * (p - 2 * A), dt = "CFT";
        break;
      case "Steel Angle": {
        const Et = I || A;
        k = Et * (s + p - Et), G = Et * (s ** 3 + p * Et ** 2 + Et ** 2 * (s - Et)) / 12, et = Et * (p ** 3 + s * Et ** 2 + Et ** 2 * (p - Et)) / 12, it = (s + p - Et) * Et ** 3 / 3, nt = s * Et, pt = p * Et, dt = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        k = 2 * p * I + (s - 2 * I) * A, G = (A * s ** 3 + 2 * p * I * (s - I) ** 2) / 12, et = (2 * I * p ** 3 + (s - 2 * I) * A ** 3) / 12, it = (2 * p * I ** 3 + (s - 2 * I) * A ** 3) / 3, nt = (s - 2 * I) * A, pt = 2 * p * I * 5 / 6, dt = t.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        k = 2 * (2 * p * I + (s - 2 * I) * A), G = 2 * (A * s ** 3 + 2 * p * I * (s - I) ** 2) / 12, et = 2 * (2 * I * p ** 3 + (s - 2 * I) * A ** 3) / 12, it = 2 * (2 * p * I ** 3 + (s - 2 * I) * A ** 3) / 3, nt = 2 * (s - 2 * I) * A, pt = 4 * p * I * 5 / 6, dt = "2C";
        break;
      default:
        s > 0 && p > 0 && (k = s * p, G = p * s ** 3 / 12, et = s * p ** 3 / 12, it = Math.min(s, p) * Math.max(s, p) ** 3 / 3 * 0.3, nt = pt = 5 / 6 * k);
        break;
    }
    t.modI2 && (et *= t.modI2), t.modI3 && (G *= t.modI3), Lt.set(c, k), xt.set(c, G), gt.set(c, et), Nt.set(c, it), nt > 0 && Rt.set(c, nt), pt > 0 && Mt.set(c, pt), ut.set(c, { type: dt, b: p || void 0, h: s || void 0, d: dt === "circ" || dt === "pipe" ? s : void 0, tw: A || void 0, tf: I || void 0, r: t.R, name: r });
  }
  const e = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
  for (const [c, r] of yt) {
    const t = V.get(r);
    if (!t) continue;
    e.set(c, t.thickness);
    const n = R.get(t.material);
    n && (At.set(c, n.E), mt.set(c, n.G), f.set(c, n.nu), n.density !== void 0 && d.set(c, n.density)), m.set(c, t.modelingType === "ShellThin" ? 1 : 0);
  }
  const C = /* @__PURE__ */ new Map();
  for (const [c, r] of w) {
    const t = tt.get(c);
    if (t === void 0) continue;
    const n = [false, false, false, false, false, false];
    for (const s of r) s === "UX" && (n[0] = true), s === "UY" && (n[1] = true), s === "UZ" && (n[2] = true), s === "RX" && (n[3] = true), s === "RY" && (n[4] = true), s === "RZ" && (n[5] = true);
    C.set(t, n);
  }
  const S = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map();
  for (let c = 0; c < ft.length; c++) M.set(`${ft[c]}@${ht[c]}`, c);
  for (const c of T) {
    const r = M.get(`${c.line}@${c.story}`);
    if (r === void 0) continue;
    const [t, n] = at[r], s = Y[t], p = Y[n], I = Math.sqrt((p[0] - s[0]) ** 2 + (p[1] - s[1]) ** 2 + (p[2] - s[2]) ** 2);
    if (I < 1e-10) continue;
    const A = c.val * I / 2;
    let k = 0, G = 0, et = 0;
    c.dir === "GRAV" || c.dir === "GRAVITY" ? et = -A : c.dir === "X" ? k = A : c.dir === "Y" ? G = A : c.dir === "Z" && (et = -A);
    for (const it of [t, n]) {
      const nt = S.get(it) || [0, 0, 0, 0, 0, 0];
      nt[0] += k, nt[1] += G, nt[2] += et, S.set(it, nt);
    }
  }
  const U = /* @__PURE__ */ new Map();
  for (const [c, r] of Q) {
    const t = z.get(r);
    if (!t) continue;
    const n = R.get(t.material);
    (n == null ? void 0 : n.density) && U.set(c, n.density);
  }
  for (const [c, r] of d) U.set(c, r);
  for (const [c, r] of It) {
    const t = S.get(c) || [0, 0, 0, 0, 0, 0];
    S.set(c, [t[0] + r[0], t[1] + r[1], t[2] + r[2], t[3] + r[3], t[4] + r[4], t[5] + r[5]]);
  }
  const v = { M: 1, CM: 0.01, MM: 1e-3, FT: 0.3048, IN: 0.0254, INCH: 0.0254 }, B = { KN: 1, N: 1e-3, TONF: 9.80665, TON: 9.80665, KGF: 980665e-8, KG: 980665e-8, KIP: 4.448222, LB: 4448222e-9 }, F = v[(x.length || "M").toUpperCase()] ?? 1, st = B[(x.force || "KN").toUpperCase()] ?? 1;
  if (F !== 1 || st !== 1) {
    const c = st / (F * F);
    for (const n of Y) n[0] *= F, n[1] *= F, n[2] *= F;
    for (const [n, s] of S) S.set(n, [s[0] * st, s[1] * st, s[2] * st, s[3] * st * F, s[4] * st * F, s[5] * st * F]);
    const r = (n, s) => {
      for (const [p, I] of n) n.set(p, I * s);
    };
    r(At, c), r(mt, c), r(Lt, F * F), r(xt, F ** 4), r(gt, F ** 4), r(Nt, F ** 4), r(Rt, F * F), r(Mt, F * F), r(e, F), r(U, st / F ** 3);
    const t = st / F;
    for (const n of Tt) n.k *= t;
    x.force = "KN", x.length = "M";
  }
  return { units: x, stories: L.reverse(), materials: R, frameSections: z, nodes: Y, nodeNames: b, nodeNameToIdx: tt, elements: at, elementNames: ft, elementTypes: ot, elementStories: ht, elementSections: Q, nodeInputs: { supports: C, loads: S }, elementInputs: { elasticities: At, shearModuli: mt, areas: Lt, momentsOfInertiaZ: xt, momentsOfInertiaY: gt, torsionalConstants: Nt, shearAreasY: Rt, shearAreasZ: Mt, rigidOffsets: $t, momentReleases: rt, densities: U, sectionShapes: ut, thicknesses: e, poissonsRatios: f, plateFormulations: m }, sectionShapes: ut, grids: o, springsList: Tt, info: { nNodes: Y.length, nFrames: at.length, nAreas: N.length, title: l }, rawSections: E, rawSectionHeaders: u };
}
function H($) {
  return $ && parseFloat($) || 0;
}
function Dt($) {
  const O = /* @__PURE__ */ new Map(), x = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let L;
  for (; (L = x.exec($)) !== null; ) O.set(L[1], L[2] !== void 0 ? L[2] : L[3]);
  return O;
}
function Gt($) {
  const O = $.split(/\r?\n/);
  return O.some((L) => L.trim().startsWith("TABLE:")) ? bt(O) : wt(O);
}
function bt($) {
  var _a, _b, _c, _d, _e, _f;
  const O = [];
  let x = "";
  for (const Z of $) {
    const y = Z.trimEnd();
    y.endsWith("_") ? x += y.slice(0, -1) + " " : (x += y, O.push(x), x = "");
  }
  x && O.push(x);
  const L = { force: "KN", length: "m" };
  let R = "UX,UY,UZ,RX,RY,RZ";
  const z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), w = [], i = [], T = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), _ = [];
  let W = "";
  for (const Z of O) {
    const y = Z.trim();
    if (!y || y.startsWith(";") || y.startsWith("File ")) continue;
    if (y.startsWith("TABLE:")) {
      const h = y.match(/TABLE:\s+"(.+?)"/);
      W = h ? h[1].toUpperCase() : "";
      continue;
    }
    if (y === "END TABLE DATA") {
      W = "";
      continue;
    }
    const g = Dt(y);
    switch (W) {
      case "PROGRAM CONTROL": {
        const h = g.get("CurrUnits");
        if (h) {
          const o = h.split(",").map((l) => l.trim());
          o[0] && (L.force = o[0]), o[1] && (L.length = o[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const h = g.get("Material");
        h && !z.has(h) && z.set(h, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const h = g.get("Material");
        if (h) {
          const o = z.get(h) || { E: 0, nu: 0, G: 0 };
          o.E = H(g.get("E1")), o.G = H(g.get("G12")), o.nu = H(g.get("U12")), o.density = H(g.get("UnitMass")), z.set(h, o);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const h = g.get("Material");
        h && z.has(h) && (z.get(h).fy = H(g.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const h = g.get("SectionName");
        h && K.set(h, { material: g.get("Material") || "", shape: g.get("Shape") || "Rectangular", D: H(g.get("t3")), B: H(g.get("t2")), TF: H(g.get("tf")), TW: H(g.get("tw")), A: H(g.get("Area")), Iz: H(g.get("I33")), Iy: H(g.get("I22")), J: H(g.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const h = g.get("Section");
        h && J.set(h, { material: g.get("Material") || "", type: g.get("Type") || "Shell", thickness: H(g.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const h = g.get("Joint");
        if (h) {
          const o = H(g.get("XorR")), l = H(g.get("Y")), a = H(g.get("Z"));
          N.set(h, [o, l, a]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const h = g.get("Frame"), o = g.get("JointI"), l = g.get("JointJ");
        h && o && l && w.push({ name: h, j1: o, j2: l });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const h = g.get("Area");
        if (h) {
          const o = parseInt(g.get("NumJoints") || "4"), l = [];
          for (let a = 1; a <= o; a++) {
            const E = g.get(`Joint${a}`);
            E && l.push(E);
          }
          l.length >= 3 && i.push({ name: h, joints: l });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const h = g.get("Joint");
        if (h) {
          const o = [((_a = g.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = g.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = g.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = g.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = g.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = g.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          T.set(h, o);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const h = g.get("Frame"), o = g.get("AnalSect");
        h && o && q.set(h, o);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const h = g.get("Area"), o = g.get("Section");
        h && o && V.set(h, o);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const h = g.get("Joint");
        h && _.push({ joint: h, fx: H(g.get("F1")), fy: H(g.get("F2")), fz: H(g.get("F3")), mx: H(g.get("M1")), my: H(g.get("M2")), mz: H(g.get("M3")) });
        break;
      }
    }
  }
  return Pt(L, R, z, K, J, N, w, i, T, q, V, _);
}
function wt($) {
  const O = { force: "KN", length: "m" };
  let x = "UX,UY,UZ,RX,RY,RZ";
  const L = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), J = [], N = [], w = /* @__PURE__ */ new Map(), i = [];
  let T = "", q = "";
  for (const W of $) {
    const Z = W.trim();
    if (!Z || Z.startsWith(";")) continue;
    if (!W.startsWith(" ") && !W.startsWith("	")) {
      const h = Z.toUpperCase();
      if (h === "END") break;
      h.startsWith("SHELL SECTION") ? T = "SHELL SECTION" : h.startsWith("FRAME SECTION") ? T = "FRAME SECTION" : T = h.split(/\s+/)[0];
      continue;
    }
    const y = Dt(Z), g = Z.split(/\s+/);
    switch (T) {
      case "SYSTEM": {
        const h = y.get("DOF");
        h && (x = h);
        const o = y.get("LENGTH");
        o && (O.length = o);
        const l = y.get("FORCE");
        l && (O.force = l);
        break;
      }
      case "JOINT": {
        const h = g[0];
        K.set(h, [H(y.get("X")), H(y.get("Y")), H(y.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const h = y.get("ADD"), o = y.get("DOF");
        if (h && o) {
          const l = o.split(","), a = [false, false, false, false, false, false];
          for (const E of l) {
            const u = E.toUpperCase();
            (u === "UX" || u === "U1") && (a[0] = true), (u === "UY" || u === "U2") && (a[1] = true), (u === "UZ" || u === "U3") && (a[2] = true), (u === "RX" || u === "R1") && (a[3] = true), (u === "RY" || u === "R2") && (a[4] = true), (u === "RZ" || u === "R3") && (a[5] = true);
          }
          w.set(h, a);
        }
        break;
      }
      case "MATERIAL": {
        const h = y.get("NAME");
        if (h) q = h, L.set(h, { E: 0, nu: 0, G: 0 });
        else if (q) {
          const o = L.get(q), l = y.get("E");
          l && (o.E = H(l));
          const a = y.get("U");
          a && (o.nu = H(a)), o.G = o.E / (2 * (1 + o.nu));
          const E = y.get("M");
          E && (o.density = H(E));
        }
        break;
      }
      case "SHELL": {
        const h = g[0], o = y.get("J");
        y.get("SEC"), o && N.push({ name: h, joints: o.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const h = y.get("NAME");
        h && z.set(h, { material: y.get("MAT") || "", type: y.get("TYPE") || "Shell", thickness: H(y.get("TH")) });
        break;
      }
      case "FRAME": {
        const h = g[0], o = y.get("J");
        if (o) {
          const l = o.split(",");
          l.length >= 2 && J.push({ name: h, j1: l[0], j2: l[1] });
        }
        break;
      }
      case "LOAD": {
        const h = y.get("ADD");
        h && i.push({ joint: h, fx: H(y.get("UX")), fy: H(y.get("UY")), fz: H(y.get("UZ")), mx: H(y.get("MX")), my: H(y.get("MY")), mz: H(y.get("MZ")) });
        break;
      }
    }
  }
  return Pt(O, x, L, R, z, K, J, N, w, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), i);
}
function Pt($, O, x, L, R, z, K, J, N, w, i, T) {
  var _a;
  const q = [], V = /* @__PURE__ */ new Map(), _ = [];
  for (const [u, P] of z) V.set(u, _.length), q.push(u), _.push(P);
  const W = [], Z = [], y = /* @__PURE__ */ new Map();
  for (const u of K) {
    const P = V.get(u.j1), D = V.get(u.j2);
    if (P !== void 0 && D !== void 0) {
      const Y = W.length;
      W.push([P, D]), Z.push(u.name);
      const b = w.get(u.name);
      b && y.set(Y, b);
    }
  }
  const g = W.length;
  for (const u of J) {
    const P = u.joints.map((D) => V.get(D)).filter((D) => D !== void 0);
    if (P.length >= 3) {
      const D = W.length;
      W.push(P), Z.push(u.name);
      const Y = i.get(u.name);
      Y && y.set(D, Y);
    }
  }
  const h = W.length - g, o = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, l = /* @__PURE__ */ new Map(), a = x.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let u = 0; u < W.length; u++) {
    const P = y.get(u), D = P ? L.get(P) : null, Y = P ? R.get(P) : null;
    if (D || W[u].length === 2) {
      const b = D || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, tt = x.get(b.material) || a, X = tt.E || a.E, ct = tt.nu || 0.3, lt = tt.G || X / (2 * (1 + ct));
      o.elasticities.set(u, X), o.shearModuli.set(u, lt), o.areas.set(u, b.A || b.D * b.B), o.momentsOfInertiaZ.set(u, b.Iz || b.B * b.D ** 3 / 12), o.momentsOfInertiaY.set(u, b.Iy || b.D * b.B ** 3 / 12), o.torsionalConstants.set(u, b.J || 0), o.densities.set(u, tt.density || 0), ((_a = b.shape) == null ? void 0 : _a.includes("Wide Flange")) || b.shape === "I" ? l.set(u, { type: "I", b: b.B, h: b.D, name: P || "I-section" }) : l.set(u, { type: "rect", b: b.B, h: b.D });
    } else if (Y) {
      const b = x.get(Y.material) || a, tt = b.E || a.E, X = b.nu || 0.2, ct = b.G || tt / (2 * (1 + X));
      o.elasticities.set(u, tt), o.shearModuli.set(u, ct), o.thicknesses.set(u, Y.thickness), o.poissonsRatios.set(u, X), o.densities.set(u, b.density || 0);
    }
  }
  const E = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [u, P] of N) {
    const D = V.get(u);
    D !== void 0 && E.supports.set(D, P);
  }
  for (const u of T) {
    const P = V.get(u.joint);
    if (P !== void 0) {
      const D = E.forces.get(P) || [0, 0, 0, 0, 0, 0];
      D[0] += u.fx, D[1] += u.fy, D[2] += u.fz, D[3] += u.mx, D[4] += u.my, D[5] += u.mz, E.forces.set(P, D);
    }
  }
  return { units: $, dof: O, materials: x, frameSections: L, shellSections: R, nodes: _, nodeNames: q, nodeNameToIdx: V, elements: W, elementNames: Z, elementSections: y, nodeInputs: E, elementInputs: o, sectionShapes: l, info: { nNodes: _.length, nFrames: g, nShells: h, title: `SAP2000 (${g} frames, ${h} shells)` } };
}
function zt($) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: O, elements: x, nodeInputs: L, elementInputs: R } = $, z = $.units || { force: "KN", length: "m" }, K = $.title || "Awatif Model", J = [], N = (o) => J.push(o), w = () => J.push(" ");
  N(`File ${K}.$2k was saved on m/d/yy at h:mm:ss`), w(), N('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), N("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), w();
  const i = [], T = [];
  if (x.forEach((o, l) => {
    o.length === 2 ? i.push(l) : T.push(l);
  }), i.length > 0) {
    N('TABLE:  "CONNECTIVITY - FRAME"');
    for (const o of i) {
      const l = x[o];
      N(`   Frame=${o + 1}   JointI=${l[0] + 1}   JointJ=${l[1] + 1}   IsCurved=No`);
    }
    w();
  }
  if (T.length > 0) {
    N('TABLE:  "CONNECTIVITY - AREA"');
    for (const o of T) {
      const l = x[o], a = l.map((E, u) => `Joint${u + 1}=${E + 1}`).join("   ");
      N(`   Area=${o + 1}   NumJoints=${l.length}   ${a}`);
    }
    w();
  }
  N('TABLE:  "COORDINATE SYSTEMS"'), N("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), w(), N('TABLE:  "DATABASE FORMAT TYPES"'), N("   UnitsCurr=Yes   OverrideE=No"), w();
  const q = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map();
  for (const o of i) {
    const l = ((_a = R.areas) == null ? void 0 : _a.get(o)) || 0, a = ((_b = R.momentsOfInertiaZ) == null ? void 0 : _b.get(o)) || 0, E = ((_c = R.momentsOfInertiaY) == null ? void 0 : _c.get(o)) || 0, u = ((_d = R.torsionalConstants) == null ? void 0 : _d.get(o)) || 0, P = ((_e = R.elasticities) == null ? void 0 : _e.get(o)) || 0, D = `MAT_${Math.round(P)}`, Y = `A${l.toPrecision(6)}_Iz${a.toPrecision(6)}`;
    if (!q.has(Y)) {
      let tt = 0.3, X = 0.3;
      l > 0 && a > 0 && (tt = Math.sqrt(12 * a / l), X = l / tt), q.set(Y, { A: l, Iz: a, Iy: E, J: u, b: X, h: tt, matKey: D });
    }
    const b = [...q.keys()].indexOf(Y) + 1;
    V.set(o, `SEC${b}`);
  }
  if (i.length > 0) {
    N('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const o of i) {
      const l = V.get(o) || "SEC1";
      N(`   Frame=${o + 1}   AutoSelect=N.A.   AnalSect=${l}   MatProp=Default`);
    }
    w();
  }
  if (q.size > 0) {
    N('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let o = 0;
    for (const [, l] of q) {
      o++;
      const a = l.A * 5 / 6;
      N(`   SectionName=SEC${o}   Material=${l.matKey}   Shape=Rectangular   t3=${j(l.h)}   t2=${j(l.b)}   Area=${j(l.A)}   TorsConst=${j(l.J)}   I33=${j(l.Iz)}   I22=${j(l.Iy)}   I23=0   AS2=${j(a)}   AS3=${j(a)} _`), N("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    w();
  }
  const _ = !!$.layeredSection && T.length > 0, W = $.layeredSection, Z = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
  if (!_) for (const o of T) {
    const l = ((_f = R.thicknesses) == null ? void 0 : _f.get(o)) || 0.1, a = ((_g = R.elasticities) == null ? void 0 : _g.get(o)) || 0, E = `MAT_${Math.round(a)}`, u = `t${l.toPrecision(6)}`;
    Z.has(u) || Z.set(u, { t: l, matKey: E });
    const P = [...Z.keys()].indexOf(u) + 1;
    y.set(o, `SSEC${P}`);
  }
  if (T.length > 0) {
    N('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const o of T) {
      const l = _ ? W.name : y.get(o) || "SSEC1";
      N(`   Area=${o + 1}   Section=${l}   MatProp=Default`);
    }
    if (w(), N('TABLE:  "AREA SECTION PROPERTIES"'), _) {
      const o = W, l = ((_h = o.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      N(`   Section=${o.name}   Material=${l}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${j(o.totalThickness)}   BendThick=${j(o.totalThickness)}   Color=Magenta`);
    } else {
      let o = 0;
      for (const [, l] of Z) o++, N(`   Section=SSEC${o}   Material=${l.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${j(l.t)}   BendThick=${j(l.t)}   Color=Cyan`);
    }
    if (w(), _) {
      N('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const o = W;
      for (const l of o.layers) {
        const a = l.angle ?? 0, E = l.numIntPts ?? 3;
        N(`   Section=${o.name}   LayerName=${l.name}   Distance=${j(l.distance)}   Thickness=${j(l.thickness)}   Type=Shell   NumIntPts=${E}   Material=${l.material}   MatAngle=${j(a * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      w();
    }
  }
  N('TABLE:  "JOINT COORDINATES"');
  for (let o = 0; o < O.length; o++) {
    const l = O[o];
    N(`   Joint=${o + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${j(l[0])}   Y=${j(l[1])}   Z=${j(l[2])}   SpecialJt=No`);
  }
  if (w(), L.supports && L.supports.size > 0) {
    N('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [o, l] of L.supports) {
      if (!l.some((E) => E)) continue;
      const a = (E) => E ? "Yes" : "No";
      N(`   Joint=${o + 1}   U1=${a(l[0])}   U2=${a(l[1])}   U3=${a(l[2])}   R1=${a(l[3])}   R2=${a(l[4])}   R3=${a(l[5])}`);
    }
    w();
  }
  const g = $.selfWtMult ?? 1;
  if (N('TABLE:  "LOAD PATTERN DEFINITIONS"'), N(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${g}`), w(), N('TABLE:  "LOAD CASE DEFINITIONS"'), N('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), w(), N('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), N('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), w(), L.loads && L.loads.size > 0) {
    N('TABLE:  "JOINT LOADS - FORCE"');
    for (const [o, l] of L.loads) l.some((a) => Math.abs(a) > 1e-12) && N(`   Joint=${o + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${j(l[0])}   F2=${j(l[1])}   F3=${j(l[2])}   M1=${j(l[3])}   M2=${j(l[4])}   M3=${j(l[5])}`);
    w();
  }
  const h = /* @__PURE__ */ new Map();
  for (let o = 0; o < x.length; o++) {
    const l = ((_i = R.elasticities) == null ? void 0 : _i.get(o)) || 0, a = ((_j = R.shearModuli) == null ? void 0 : _j.get(o)) || 0, E = l > 0 && a > 0 ? Math.max(0, Math.min(0.5, l / (2 * a) - 1)) : 0.2, u = ((_k = R.densities) == null ? void 0 : _k.get(o)) || 0, P = `MAT_${Math.round(l)}`;
    h.has(P) || h.set(P, { E: l, nu: E, G: a, rho: u });
  }
  N('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [o] of h) N(`   Material=${o}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  w(), N('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [o, l] of h) N(`   Material=${o}   UnitWeight=${j(l.rho * 9.81)}   UnitMass=${j(l.rho)}   E1=${j(l.E)}   G12=${j(l.G)}   U12=${j(l.nu)}   A1=9.9E-06`);
  w(), N('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [o] of h) N(`   Material=${o}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return w(), N('TABLE:  "PROGRAM CONTROL"'), N(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${z.force}, ${z.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), w(), N("END TABLE DATA"), N(""), J.join(`\r
`);
}
function j($) {
  return $ === 0 || Math.abs($) < 1e-15 ? "0" : Math.abs($) >= 1e6 || Math.abs($) < 1e-3 && Math.abs($) > 0 ? $.toExponential(8) : parseFloat($.toPrecision(10)).toString();
}
function Ht($) {
  const { nodes: O, elements: x, nodeInputs: L, elementInputs: R, title: z, e2kModel: K } = $, J = K == null ? void 0 : K.rawSections;
  return J && J.size > 0 ? Yt(J, K) : Ut($);
}
function Yt($, O) {
  const x = [], L = O == null ? void 0 : O.rawSectionHeaders;
  for (const [R, z] of $) {
    x.push((L == null ? void 0 : L.get(R)) ?? `$ ${R}`);
    for (const K of z) x.push(K);
  }
  return $.has("END OF MODEL FILE") || (x.push("  END"), x.push("$ END OF MODEL FILE")), x.join(`\r
`);
}
function Ut($) {
  var _a, _b, _c;
  const { nodes: O, elements: x, nodeInputs: L, elementInputs: R, title: z, units: K } = $, J = $.rigidDiaphragm ?? false, N = (K == null ? void 0 : K.force) || "Tonf", w = (K == null ? void 0 : K.length) || "m", i = [], T = (e) => Math.round(e * 1e4) / 1e4, q = (() => {
    const e = (N || "Tonf").toLowerCase();
    return e === "tonf" || e === "tonf-f" ? 1 / 9.80665 : e === "kn" || e === "kn-f" ? 1 : e === "kgf" || e === "kg" ? 1 / 980665e-8 : e === "kip" || e === "kips" ? 1 / 4.44822 : 1;
  })(), V = (e) => e * q, _ = (e) => e * q, W = (e) => e * q, Z = /* @__PURE__ */ new Date(), y = `${Z.getMonth() + 1}/${Z.getDate()}/${Z.getFullYear()}  ${Z.getHours()}:${String(Z.getMinutes()).padStart(2, "0")}:${String(Z.getSeconds()).padStart(2, "0")}`;
  i.push(`$ File   "Hekatan_export.e2k"  saved ${y} in ETABS 22.6.0`), i.push(""), i.push("$ PROGRAM INFORMATION"), i.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), i.push(""), i.push("$ CONTROLS"), i.push(`  UNITS  "${N}"  "${w}"  "C"  `), i.push('  TITLE1  "Hekatan Struct export"  '), z && i.push(`  TITLE2  "${z}"  `), i.push("  PREFERENCE  MERGETOL 0.001"), i.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), i.push("");
  const g = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
  O.forEach((e) => {
    g.add(T(e[0])), h.add(T(e[1]));
  });
  const o = [...g].sort((e, f) => e - f), l = [...h].sort((e, f) => e - f);
  i.push("$ GRIDS"), i.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), o.forEach((e, f) => {
    const m = f < 26 ? String.fromCharCode(65 + f) : String.fromCharCode(65 + f % 26).repeat(Math.floor(f / 26) + 1);
    i.push(`  GRID "G1"  LABEL "${m}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), l.forEach((e, f) => {
    i.push(`  GRID "G1"  LABEL "${f + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), i.push("");
  const a = /* @__PURE__ */ new Set();
  O.forEach((e) => a.add(T(e[2])));
  let E = [...a].sort((e, f) => e - f);
  if (E.length === 1) {
    const e = E[0];
    e > 0 ? E = [0, e] : E = [0, 4];
  }
  const u = [], P = /* @__PURE__ */ new Map();
  u.push("Base"), P.set(E[0], "Base");
  for (let e = 1; e < E.length; e++) {
    const f = `Story${e}`;
    u.push(f), P.set(E[e], f);
  }
  a.size === 1 && a.has(0) && P.set(0, u[1]), i.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = E.length - 1; e >= 1; e--) i.push(`  STORY "${u[e]}"  HEIGHT ${T(E[e] - E[e - 1])} MASTERSTORY "Yes"  `);
  E.length > 0 && i.push(`  STORY "Base"  ELEV ${E[0]} `), i.push(""), x.some((e) => e.length === 4), J && (i.push("$ DIAPHRAGM NAMES"), i.push('  DIAPHRAGM "D1"    TYPE RIGID'), i.push("")), i.push("$ MATERIAL PROPERTIES");
  const D = /* @__PURE__ */ new Set();
  (_a = R.elasticities) == null ? void 0 : _a.forEach((e) => D.add(e));
  const Y = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map();
  let tt = 0, X = 0;
  const ct = 980665e-8, lt = /* @__PURE__ */ new Map();
  if (R.densities && R.densities.size > 0) {
    const e = /* @__PURE__ */ new Map();
    R.densities.forEach((f, m) => {
      var _a2;
      const d = (_a2 = R.elasticities) == null ? void 0 : _a2.get(m);
      d !== void 0 && (e.has(d) || e.set(d, []), e.get(d).push(f));
    }), e.forEach((f, m) => {
      const d = f.reduce((S, M) => S + M, 0) / f.length, C = d > 100 ? d * ct : d * 9.80665;
      lt.set(m, C);
    });
  }
  for (const e of D) {
    const f = e >= 1e8, m = f ? `Steel_${++tt}` : `Conc_${++X}`;
    Y.set(e, m), b.set(e, f);
    const d = lt.get(e) ?? (f ? 76.97 : 24), C = _(e), S = W(d), M = [];
    (_b = R.poissonsRatios) == null ? void 0 : _b.forEach((B, F) => {
      var _a2;
      ((_a2 = R.elasticities) == null ? void 0 : _a2.get(F)) === e && M.push(B);
    });
    const U = M.length > 0 ? M.reduce((B, F) => B + F, 0) / M.length : f ? 0.3 : 0.2, v = f ? 117e-7 : 1e-5;
    if (f) {
      i.push(`  MATERIAL  "${m}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${T(S)}`), i.push(`  MATERIAL  "${m}"    SYMTYPE "Isotropic"  E ${T(C)}  U ${U}  A ${v}`);
      const B = 345e3, F = 45e4;
      i.push(`  MATERIAL  "${m}"  FY ${T(_(B))}  FU ${T(_(F))}  FYE ${T(_(B * 1.1))}  FUE ${T(_(F * 1.1))}`);
    } else i.push(`  MATERIAL  "${m}"    TYPE "Concrete"    WEIGHTPERVOLUME ${T(S)}`), i.push(`  MATERIAL  "${m}"    SYMTYPE "Isotropic"  E ${T(C)}  U ${U}  A ${v}`), i.push(`  MATERIAL  "${m}"    FC ${T(_(24e3))}`);
  }
  i.push(""), i.push("$ FRAME SECTIONS");
  const at = /* @__PURE__ */ new Set(), ft = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), ht = 0.05;
  x.forEach((e, f) => {
    var _a2, _b2, _c2, _d, _e, _f;
    if (e.length !== 2) return;
    const m = (_a2 = R.sectionShapes) == null ? void 0 : _a2.get(f), d = ((_b2 = R.elasticities) == null ? void 0 : _b2.get(f)) ?? 0, C = Y.get(d) || "Conc_1", S = b.get(d) ?? d >= 1e8, M = ((_c2 = R.areas) == null ? void 0 : _c2.get(f)) ?? 0, U = ((_d = R.momentsOfInertiaY) == null ? void 0 : _d.get(f)) ?? 0;
    (_e = R.momentsOfInertiaZ) == null ? void 0 : _e.get(f), (_f = R.torsionalConstants) == null ? void 0 : _f.get(f);
    let v = (m == null ? void 0 : m.type) || "rect", B = (m == null ? void 0 : m.h) ?? 0, F = (m == null ? void 0 : m.b) ?? 0, st = (m == null ? void 0 : m.d) ?? 0;
    const c = (m == null ? void 0 : m.tf) ?? 0, r = (m == null ? void 0 : m.tw) ?? 0;
    B <= 0 && F <= 0 && st <= 0 && M > 0 && (U > 0 ? (B = Math.sqrt(12 * U / M), F = M / B) : B = F = Math.sqrt(M), (!isFinite(B) || B < ht) && (B = ht), (!isFinite(F) || F < ht) && (F = ht), v = "rect"), B <= 0 && F <= 0 && st <= 0 && (B = 0.3, F = 0.3, v = "rect");
    const t = `${v}_${T(B)}_${T(F)}_${T(st)}_${T(c)}_${T(r)}_${C}`;
    (m == null ? void 0 : m.name) && !ot.has(t) && ot.set(t, m.name);
    let n = ot.get(t);
    if (!n) {
      const I = S ? "S" : "C";
      v === "rect" ? n = `${I}_R${Math.round(F * 100)}x${Math.round(B * 100)}` : v === "circ" ? n = `${I}_C_D${Math.round(st * 100)}` : v === "I" ? n = `${I}_I${Math.round(B * 100)}x${Math.round(F * 100)}` : v === "HSS" ? n = `${I}_HSS${Math.round(F * 100)}x${Math.round(B * 100)}x${Math.round(r * 1e3)}` : n = `${I}_Sec${at.size + 1}`, ot.set(t, n);
    }
    if (ft.set(f, n), at.has(n)) return;
    at.add(n);
    let s;
    v === "I" ? s = "Steel I/Wide Flange" : v === "HSS" ? s = "Steel Tube" : v === "CFT" ? s = "Filled Steel Tube" : v === "pipe" ? s = "Steel Pipe" : v === "L" ? s = "Steel Angle" : v === "C" ? s = "Steel Channel" : v === "2C" ? s = "Steel Double Channel" : v === "circ" ? s = "Concrete Circle" : s = "Concrete Rectangular";
    let p = `  FRAMESECTION  "${n}"  MATERIAL "${C}"  SHAPE "${s}"`;
    B && (p += `  D ${T(B)}`), F && (p += `  B ${T(F)}`), st && !B && (p += `  D ${T(st)}`), c && (p += `  TF ${T(c)}`), r && (p += `  TW ${T(r)}`), i.push(p);
  }), i.push("");
  const Q = /* @__PURE__ */ new Map();
  let $t = 0;
  O.forEach((e) => {
    const f = `${T(e[0])},${T(e[1])}`;
    Q.has(f) || Q.set(f, `${++$t}`);
  }), i.push("$ POINT COORDINATES");
  for (const [e, f] of Q) {
    const [m, d] = e.split(",").map(Number);
    i.push(`  POINT "${f}"  ${m} ${d} `);
  }
  i.push("");
  const rt = (e) => {
    const f = O[e], m = `${T(f[0])},${T(f[1])}`;
    return { pt: Q.get(m) || "1", story: P.get(T(f[2])) || "Base" };
  }, yt = (e) => {
    var _a2, _b2, _c2, _d;
    const f = [], m = (_a2 = $.propertyModifiers) == null ? void 0 : _a2.get(e);
    m && m.some((M) => Math.abs(M - 1) > 1e-9) && f.push(`PROPMODIFIERS "${m.map((M) => T(M)).join(" ")}"`);
    const d = (_b2 = R.momentReleases) == null ? void 0 : _b2.get(e);
    if (d && d.some((M) => M)) {
      const M = [];
      d.length === 12 ? (d[0] && M.push("PI"), d[1] && M.push("V2I"), d[2] && M.push("V3I"), d[3] && M.push("TI"), d[4] && M.push("M2I"), d[5] && M.push("M3I"), d[6] && M.push("PJ"), d[7] && M.push("V2J"), d[8] && M.push("V3J"), d[9] && M.push("TJ"), d[10] && M.push("M2J"), d[11] && M.push("M3J")) : d.length === 6 && (d[0] && M.push("TI"), d[1] && M.push("M2I"), d[2] && M.push("M3I"), d[3] && M.push("TJ"), d[4] && M.push("M2J"), d[5] && M.push("M3J")), M.length > 0 && f.push(`RELEASE "${M.join(" ")}"`);
    }
    const C = (_c2 = R.insertionPoints) == null ? void 0 : _c2.get(e);
    C && (Math.abs(C[0]) > 1e-9 || Math.abs(C[1]) > 1e-9) && f.push(`LATEROFFSET ${T(C[0])} TRANSOFFSET ${T(C[1])}`);
    const S = (_d = R.rigidOffsets) == null ? void 0 : _d.get(e);
    return S && (Math.abs(S[0]) > 1e-9 || Math.abs(S[1]) > 1e-9) && f.push(`LENGTHOFFI ${T(S[0])} LENGTHOFFJ ${T(S[1])} RIGIDZONE 0.5`), f.length > 0 ? ` ${f.join(" ")} ` : "";
  }, Ct = [], Ot = /* @__PURE__ */ new Set(), St = /* @__PURE__ */ new Map();
  x.forEach((e, f) => {
    if (e.length !== 2) return;
    const m = Ft(O, e);
    if (m === "BEAM") return;
    const d = O[e[0]][2] <= O[e[1]][2] ? e[0] : e[1], C = O[e[0]][2] <= O[e[1]][2] ? e[1] : e[0];
    if (Math.abs(O[d][0] - O[C][0]) > 1e-6 || Math.abs(O[d][1] - O[C][1]) > 1e-6) return;
    const S = rt(d), M = ft.get(f) || `Sec_${f}`, U = `${S.pt}_${M}_${m}`;
    St.has(U) || St.set(U, []), St.get(U).push({ i: f, bot: d, top: C, zBot: T(O[d][2]), zTop: T(O[C][2]), planPt: S.pt, secName: M, type: m });
  }), St.forEach((e, f) => {
    e.sort((d, C) => d.zBot - C.zBot);
    let m = 0;
    for (let d = 1; d <= e.length; d++) if (d === e.length || Math.abs(e[d].zBot - e[d - 1].zTop) > 1e-6) {
      const S = e.slice(m, d);
      S.length >= 1 && (Ct.push({ elemIndices: S.map((M) => M.i), planPt: S[0].planPt, bottomNodeIdx: S[0].bot, topNodeIdx: S[S.length - 1].top, secName: S[0].secName, type: S[0].type, nSegments: S.length }), S.forEach((M) => Ot.add(M.i))), m = d;
    }
  }), i.push("$ LINE CONNECTIVITIES");
  const Tt = [];
  Ct.forEach((e, f) => {
    const m = `C${f + 1}`, d = rt(e.topNodeIdx);
    rt(e.bottomNodeIdx);
    const C = T(O[e.topNodeIdx][2]), S = T(O[e.bottomNodeIdx][2]), M = E.indexOf(C), U = E.indexOf(S), v = Math.max(1, M - U), B = yt(e.elemIndices[0]);
    i.push(`  LINE  "${m}"  ${e.type}  "${d.pt}"  "${d.pt}"  ${v}`), Tt.push(`  LINEASSIGN  "${m}"  "${d.story}"  SECTION "${e.secName}" ${B} RIGIDZONE 0 MAXSTASPC 0.5 MINNUMSTA ${e.nSegments} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  }), x.forEach((e, f) => {
    if (e.length !== 2 || Ot.has(f)) return;
    const m = Ft(O, e), d = ft.get(f) || `Sec_${f}`, C = yt(f);
    if (m === "BEAM") {
      const S = rt(e[0]), M = rt(e[1]);
      i.push(`  LINE  "E${f + 1}"  BEAM  "${S.pt}"  "${M.pt}"  0`), Tt.push(`  LINEASSIGN  "E${f + 1}"  "${S.story}"  SECTION "${d}" ${C} RIGIDZONE 0 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const S = O[e[0]][2] <= O[e[1]][2] ? e[0] : e[1], M = O[e[0]][2] <= O[e[1]][2] ? e[1] : e[0], U = rt(M), v = T(O[S][2]), B = T(O[M][2]), F = E.indexOf(v), st = E.indexOf(B), c = Math.max(1, st >= 0 && F >= 0 ? st - F : 1);
      i.push(`  LINE  "E${f + 1}"  ${m}  "${U.pt}"  "${U.pt}"  ${c}`), Tt.push(`  LINEASSIGN  "E${f + 1}"  "${U.story}"  SECTION "${d}" ${C} RIGIDZONE 0 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    }
  }), i.push("");
  const It = $.weightMode ?? "auto", At = /* @__PURE__ */ new Set();
  i.push("$ POINT ASSIGNS"), (_c = L.supports) == null ? void 0 : _c.forEach((e, f) => {
    const m = [];
    if (e[0] && m.push("UX"), e[1] && m.push("UY"), e[2] && m.push("UZ"), e[3] && m.push("RX"), e[4] && m.push("RY"), e[5] && m.push("RZ"), m.length > 0) {
      const d = rt(f), C = d.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      i.push(`  POINTASSIGN  "${d.pt}"  "${d.story}"  RESTRAINT "${m.join(" ")}" ${C} `), At.add(`${d.pt}@${d.story}`);
    }
  }), Ct.forEach((e) => {
    const f = rt(e.topNodeIdx), m = `${f.pt}@${f.story}`;
    J && !At.has(m) && f.story !== "Base" && (i.push(`  POINTASSIGN  "${f.pt}"  "${f.story}"  DIAPH "D1"  `), At.add(m));
  }), It === "manual" && L.loads && L.loads.forEach((e, f) => {
    const m = rt(f), d = `${m.pt}@${m.story}`;
    At.has(d) || (i.push(`  POINTASSIGN  "${m.pt}"  "${m.story}"  DIAPH "DISCONNECTED"  `), At.add(d));
  }), i.push(""), i.push("$ LINE ASSIGNS"), Tt.forEach((e) => i.push(e)), i.push("");
  const mt = [];
  x.forEach((e, f) => {
    if (e.length === 4) {
      const m = O[e[0]], d = O[e[1]], C = O[e[2]], S = [d[0] - m[0], d[1] - m[1], d[2] - m[2]], M = [C[0] - m[0], C[1] - m[1], C[2] - m[2]], U = S[1] * M[2] - S[2] * M[1], v = S[2] * M[0] - S[0] * M[2], B = S[0] * M[1] - S[1] * M[0], F = Math.sqrt(U * U + v * v + B * B), st = F > 1e-10 && Math.abs(B) / F < 0.5;
      mt.push({ idx: f, el: e, isWall: st });
    }
  });
  const Lt = (() => {
    for (const [e, f] of b) if (!f) return Y.get(e);
    return Y.values().next().value || "Conc_1";
  })(), Rt = (e, f) => {
    var _a2;
    for (const m of mt) if (e(m)) {
      const d = (_a2 = R.thicknesses) == null ? void 0 : _a2.get(m.idx);
      if (d !== void 0) return d;
    }
    return f;
  };
  if (mt.some((e) => !e.isWall)) {
    i.push("$ SLAB PROPERTIES");
    const e = Rt((f) => !f.isWall, 0.15);
    i.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${Lt}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${T(e)} `), i.push("");
  }
  if (mt.some((e) => e.isWall)) {
    i.push("$ WALL PROPERTIES");
    const e = Rt((f) => f.isWall, 0.2);
    i.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${Lt}"  MODELINGTYPE "ShellThin"  WALLTHICKNESS ${T(e)} `), i.push("");
  }
  const Mt = [];
  if (mt.length > 0) {
    i.push("$ AREA CONNECTIVITIES");
    const e = [];
    mt.forEach((f, m) => {
      const { el: d, isWall: C } = f, S = C ? `W${m + 1}` : `F${m + 1}`, M = C ? "PANEL" : "FLOOR", U = d.map((v) => rt(v));
      if (C) {
        const v = O[d[0]][2] <= O[d[2]][2] ? 0 : 2, B = O[d[1]][2] <= O[d[3]][2] ? 1 : 3;
        i.push(`  AREA "${S}"  ${M}  4  "${U[v].pt}"  "${U[B].pt}"  "${U[B].pt}"  "${U[v].pt}"  1  1  0  0  `);
        const F = U[v === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${S}"  "${F}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        i.push(`  AREA "${S}"  ${M}  4  "${U[0].pt}"  "${U[1].pt}"  "${U[2].pt}"  "${U[3].pt}"  0  0  0  0  `);
        const v = J ? ' DIAPH  "D1" ' : "";
        e.push(`  AREAASSIGN  "${S}"  "${U[0].story}"  SECTION "Losa" ${v} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), Mt.push({ aName: S, story: U[0].story, idx: f.idx, nodes: d });
      }
    }), i.push(""), i.push("$ AREA ASSIGNS"), e.forEach((f) => i.push(f)), i.push("");
  }
  const xt = It === "manual" ? 0 : 1;
  i.push("$ LOAD PATTERNS"), i.push(`  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  ${xt}`), i.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), i.push("");
  const gt = /* @__PURE__ */ new Set(), Nt = [];
  if (It === "manual" && Mt.length > 0 && L.loads) {
    const e = (C) => {
      const S = C.map((st) => O[st]), M = [S[2][0] - S[0][0], S[2][1] - S[0][1], S[2][2] - S[0][2]], U = [S[3][0] - S[1][0], S[3][1] - S[1][1], S[3][2] - S[1][2]], v = M[1] * U[2] - M[2] * U[1], B = M[2] * U[0] - M[0] * U[2], F = M[0] * U[1] - M[1] * U[0];
      return 0.5 * Math.sqrt(v * v + B * B + F * F);
    };
    let f = 0, m = 0;
    for (const C of Mt) f += e(C.nodes), C.nodes.forEach((S) => gt.add(S));
    gt.forEach((C) => {
      const S = L.loads.get(C);
      S && (m += Math.abs(S[2]));
    });
    const d = f > 1e-9 ? m / f : 0;
    if (d > 1e-9) for (const C of Mt) Nt.push(`  AREALOAD  "${C.aName}"  "${C.story}"  TYPE "UNIFF"  DIR "GRAV"  LC "Dead"  FVAL ${T(V(d))}`);
  }
  const ut = [];
  return L.loads && L.loads.size > 0 && L.loads.forEach((e, f) => {
    const [m, d, C] = e, S = rt(f);
    Math.abs(m) > 1e-10 && ut.push(`  POINTLOAD  "${S.pt}"  "${S.story}"  TYPE "FORCE"  LC "Dead"  FX ${T(V(m))}  FY 0  FZ 0`), Math.abs(d) > 1e-10 && ut.push(`  POINTLOAD  "${S.pt}"  "${S.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY ${T(V(d))}  FZ 0`), It === "manual" && Math.abs(C) > 1e-10 && !gt.has(f) && ut.push(`  POINTLOAD  "${S.pt}"  "${S.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY 0  FZ ${T(V(C))}`);
  }), L.moments && L.moments.size > 0 && L.moments.forEach((e, f) => {
    const [m, d, C] = e, S = rt(f);
    Math.abs(m) > 1e-10 && ut.push(`  POINTLOAD  "${S.pt}"  "${S.story}"  TYPE "MOMENT"  LC "Dead"  MX ${T(V(m))}  MY 0  MZ 0`), Math.abs(d) > 1e-10 && ut.push(`  POINTLOAD  "${S.pt}"  "${S.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY ${T(V(d))}  MZ 0`), Math.abs(C) > 1e-10 && ut.push(`  POINTLOAD  "${S.pt}"  "${S.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY 0  MZ ${T(V(C))}`);
  }), Nt.length > 0 && (i.push("$ SHELL OBJECT LOADS"), Nt.forEach((e) => i.push(e)), i.push("")), ut.length > 0 && (i.push("$ POINT OBJECT LOADS"), ut.forEach((e) => i.push(e)), i.push("")), i.push("$ ANALYSIS OPTIONS"), i.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), i.push('  PDELTA  METHOD "NONE"  '), i.push(""), i.push("$ MASS SOURCE"), i.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), i.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), i.push(""), i.push("$ LOAD CASES"), i.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), i.push('  LOADCASE "Dead"  LOADPAT  "Dead"  SF 1 '), i.push('  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), i.push('  LOADCASE "Live"  LOADPAT  "Live"  SF 1 '), i.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), i.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), i.push(""), i.push("$ LOAD COMBINATIONS"), i.push('  COMBO "1.4D"  TYPE "Linear Add"  '), i.push('  COMBO "1.4D"  LOADCASE  "Dead"  SF 1.4 '), i.push('  COMBO "1.2D+1.6L"  TYPE "Linear Add"  '), i.push('  COMBO "1.2D+1.6L"  LOADCASE  "Dead"  SF 1.2 '), i.push('  COMBO "1.2D+1.6L"  LOADCASE  "Live"  SF 1.6 '), i.push(""), i.push("  END"), i.push("$ END OF MODEL FILE"), i.join(`\r
`);
}
function Ft($, O) {
  const x = $[O[0]], L = $[O[1]], R = Math.abs(L[2] - x[2]), z = Math.sqrt((L[0] - x[0]) ** 2 + (L[1] - x[1]) ** 2), K = R > z * 0.5;
  return K && z > 0.01 ? "BRACE" : K ? "COLUMN" : "BEAM";
}
export {
  zt as a,
  Gt as b,
  Bt as c,
  kt as d,
  Ht as e,
  vt as p
};
