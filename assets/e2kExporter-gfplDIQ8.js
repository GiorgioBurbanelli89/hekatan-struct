const zt = { v: 0 };
function Ht() {
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
  function L(R, v) {
    var _a, _b, _c, _d, _e, _f;
    if (!R.frequencies || R.frequencies.length === 0) {
      $.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const q = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], W = [0, 0, 0, 0, 0, 0], N = R.frequencies.length;
    let U = -1, r = -1, A = -1, Q = 0, X = 0;
    {
      const c = [0, 0, 0, 0, 0, 0];
      for (let E = 0; E < N; E++) {
        const u = ((_a = R.massParticipation) == null ? void 0 : _a[E]) || [0, 0, 0, 0, 0, 0];
        for (let F = 0; F < 6; F++) c[F] += u[F];
        U < 0 && c[0] >= x && (U = E + 1), r < 0 && c[1] >= x && (r = E + 1), A < 0 && c[0] >= x && c[1] >= x && (A = E + 1);
      }
      Q = c[0], X = c[1];
    }
    let V = -1, _ = -1, Z = -1;
    const C = 0.1;
    for (let c = 0; c < N; c++) {
      const E = ((_b = R.massParticipation) == null ? void 0 : _b[c]) || [0, 0, 0, 0, 0, 0];
      V < 0 && E[0] > C && (V = c + 1), _ < 0 && E[1] > C && (_ = c + 1), Z < 0 && E[5] > C && (Z = c + 1);
    }
    const I = A > 0 ? `<span style="color:#0f0">\u2713 ASCE 7-22 \xA712.9.1.1 \u2014 90 % alcanzado en X e Y al modo ${A} de ${N}</span>` : U > 0 && r < 0 ? `<span style="color:#fa0">\u26A0 X cumple en modo ${U}, Y todav\xEDa en ${(X * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : r > 0 && U < 0 ? `<span style="color:#fa0">\u26A0 Y cumple en modo ${r}, X todav\xEDa en ${(Q * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : `<span style="color:#f44">\u2717 ASCE 7-22 NO cumplido en ${N} modos \xB7 \u03A3Ux=${(Q * 100).toFixed(1)} % \xB7 \u03A3Uy=${(X * 100).toFixed(1)} % \u2014 aumentar nModes</span>`, h = (() => {
      const c = (E, u) => {
        var _a2;
        if (E < 0) return `<span style="color:#f44">${u}: no encontrado en ${N} modos</span>`;
        const F = ((_a2 = R.massParticipation) == null ? void 0 : _a2[E - 1]) || [0, 0, 0, 0, 0, 0], D = u === "Ux" ? 0 : u === "Uy" ? 1 : 5, w = R.frequencies[E - 1] > 0 ? 1 / R.frequencies[E - 1] : 0;
        return `<span style="color:#0f0">${u}: modo ${E}, T=${w.toFixed(3)} s, MPF=${(F[D] * 100).toFixed(1)} %</span>`;
      };
      return `<div style="margin:4px 0; padding:4px 6px; background:rgba(0,255,255,0.05); border-left:2px solid #0ff; font-size:11px;">
  \u{1F3AF} <b>Modos s\xEDsmicos principales</b> (ASCE 7-22 \xA712.9.1):<br>
  ${c(V, "Ux")} \xB7 ${c(_, "Uy")} \xB7 ${c(Z, "Rz")}
</div>`;
    })();
    let a = `<div id="modal-header" style="flex:0 0 auto; display:flex; align-items:center; justify-content:space-between; padding:6px 10px; cursor:move; border-bottom:1px solid #0f04; background:rgba(0,0,0,0.4);">
  <b style="color:#ff0; font-size:12px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis">\u26A1 MODAL \u2014 ${v.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
    <button id="modal-close" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#7a2d2d; color:#fff; border:1px solid #b04545; border-radius:3px;" title="Cerrar (ocultar ventana)">\u2715</button>
  </div>
</div>`;
    if (a += '<div id="modal-body" style="flex:1 1 auto; min-height:0; overflow:auto; padding:6px 12px 10px 12px;">', a += `<div style="padding:6px 0; font-weight:bold; font-size:13px;">${I}</div>`, a += h, v.properties) for (const c of v.properties) a += `<span style="color:#888">${c}</span>
`;
    v.spectrumHtml && (a += v.spectrumHtml), a += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const c of q) a += `<th style="padding:2px 5px">${c}</th>`;
    a += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let c = 0; c < 6; c++) W[c] = 0;
    if (R.frequencies.forEach((c, E) => {
      var _a2;
      const u = c > 0 ? 1 / c : 0, F = c * 2 * Math.PI, D = ((_a2 = R.massParticipation) == null ? void 0 : _a2[E]) || [0, 0, 0, 0, 0, 0];
      for (let st = 0; st < 6; st++) W[st] += D[st];
      let w = 0, P = D[0];
      for (let st = 1; st < 6; st++) D[st] > P && (P = D[st], w = st);
      const et = P < 0.05 ? "\u2014" : `${q[w]} (${(P * 100).toFixed(0)} %)`, j = w === 0 || w === 1 ? "#0f0" : w === 5 ? "#0ff" : w === 2 ? "#fa0" : "#888", it = E + 1 === U, pt = E + 1 === r, St = E + 1 === A;
      a += `<tr style="border-bottom:1px solid #fff1; ${St ? "background:rgba(0,255,0,0.12);" : it || pt ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${E + 1}${St ? " \u2605" : ""}</td>
  <td style="padding:2px 6px; text-align:right">${c.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${u.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${F.toFixed(2)}</td>`;
      for (let st = 0; st < 6; st++) {
        const mt = (D[st] * 100).toFixed(1), ct = D[st] > 0.5 ? "#f00" : D[st] > 0.1 ? "#ff0" : "#0f0";
        a += `<td style="padding:2px 5px; text-align:right; color:${ct}">${mt}%</td>`;
      }
      const J = W[0] >= x ? "#0f0" : "#0ff", ft = W[1] >= x ? "#0f0" : "#0ff";
      a += `<td style="padding:2px 5px; text-align:right; color:${J}">${(W[0] * 100).toFixed(1)}%${it ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${ft}">${(W[1] * 100).toFixed(1)}%${pt ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(W[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${j}">${et}</td></tr>`;
    }), a += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, a += "</div>", $.innerHTML = a, O) {
      const c = $.querySelector("#modal-body"), E = $.querySelector("#modal-minimize");
      c && (c.style.display = "none"), E && (E.textContent = "\u25A2", E.title = "Restaurar");
    }
    (_c = $.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      O = !O;
      const c = $.querySelector("#modal-body"), E = $.querySelector("#modal-minimize");
      O ? (c.style.display = "none", E.textContent = "\u25A2", E.title = "Restaurar") : (c.style.display = "block", E.textContent = "\u25AC", E.title = "Minimizar");
    }), (_d = $.querySelector("#modal-close")) == null ? void 0 : _d.addEventListener("click", () => {
      $.style.display = "none";
    }), (_e = $.querySelector("#modal-header")) == null ? void 0 : _e.addEventListener("mousedown", (c) => {
      if (c.target.tagName === "BUTTON") return;
      const E = $.getBoundingClientRect();
      $.style.bottom = "auto", $.style.top = `${E.top}px`, $.style.left = `${E.left}px`;
      const u = c.clientX - E.left, F = c.clientY - E.top, D = (P) => {
        $.style.left = `${Math.max(0, P.clientX - u)}px`, $.style.top = `${Math.max(0, P.clientY - F)}px`;
      }, w = () => {
        document.removeEventListener("mousemove", D), document.removeEventListener("mouseup", w);
      };
      document.addEventListener("mousemove", D), document.addEventListener("mouseup", w), c.preventDefault();
    }), (_f = $.querySelector("#modal-copy")) == null ? void 0 : _f.addEventListener("click", () => {
      const c = [];
      c.push(`Modal Analysis \u2014 ${v.title}`), c.push(I.replace(/<[^>]+>/g, ""));
      const E = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${q.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      c.push(E), c.push("-".repeat(E.length));
      const u = [0, 0, 0, 0, 0, 0];
      R.frequencies.forEach((D, w) => {
        var _a2;
        const P = D > 0 ? 1 / D : 0, et = D * 2 * Math.PI, j = ((_a2 = R.massParticipation) == null ? void 0 : _a2[w]) || [0, 0, 0, 0, 0, 0];
        for (let J = 0; J < 6; J++) u[J] += j[J];
        let it = 0, pt = j[0];
        for (let J = 1; J < 6; J++) j[J] > pt && (pt = j[J], it = J);
        const St = pt < 0.05 ? "\u2014" : `${q[it]} (${(pt * 100).toFixed(0)}%)`, Mt = j.map((J) => ((J * 100).toFixed(1) + "%").padStart(6)).join(" ");
        c.push(`${String(w + 1).padStart(4)}  ${D.toFixed(4).padStart(9)}  ${P.toFixed(4).padStart(9)}  ${et.toFixed(2).padStart(9)}  ${Mt}  ${(u[0] * 100).toFixed(1).padStart(5)}%  ${(u[1] * 100).toFixed(1).padStart(5)}%  ${(u[5] * 100).toFixed(1).padStart(5)}%  ${St}`);
      }), navigator.clipboard.writeText(c.join(`
`));
      const F = $.querySelector("#modal-copy");
      F.textContent = "\u2713", setTimeout(() => F.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: $, render: L };
}
function Jt($) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y;
  const O = $.split(/\r?\n/), x = { force: "TONF", length: "M" }, L = [], R = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), W = [], N = [], U = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), A = [], Q = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), V = [], _ = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), a = [];
  let p = "", c = "";
  const E = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  for (const n of O) {
    const i = n.trim();
    if (i.startsWith("$ ")) {
      c = i.substring(2).trim(), E.has(c) || E.set(c, []), u.has(c) || u.set(c, n);
      continue;
    }
    if (c && (E.has(c) || E.set(c, []), E.get(c).push(n)), !(!i || i.startsWith("$"))) {
      if (c === "CONTROLS") {
        const t = i.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        t && (x.force = t[1], x.length = t[2]);
        const o = i.match(/TITLE2\s+"([^"]+)"/);
        o && (p = o[1]);
      }
      if (c === "STORIES - IN SEQUENCE FROM TOP") {
        const t = i.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (t) {
          const o = t[1], s = t[2] ? parseFloat(t[2]) : 0, l = t[3] ? parseFloat(t[3]) : void 0;
          L.push({ name: o, height: s, elev: l ?? 0 });
        }
      }
      if (c === "MATERIAL PROPERTIES") {
        const t = i.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (t) {
          const o = t[1];
          R.has(o) || R.set(o, { type: t[2] || "", E: 0, G: 0, nu: 0 });
          const s = R.get(o);
          t[2] && (s.type = t[2]);
          const l = i.match(/\bE\s+([\d.eE+-]+)/);
          l && (s.E = parseFloat(l[1]));
          const g = i.match(/\bU\s+([\d.eE+-]+)/);
          g && (s.nu = parseFloat(g[1]), s.G = s.E / (2 * (1 + s.nu)));
          const m = i.match(/\bFY\s+([\d.eE+-]+)/);
          m && (s.fy = parseFloat(m[1]));
          const Y = i.match(/\bFC\s+([\d.eE+-]+)/);
          Y && (s.fc = parseFloat(Y[1]));
          const G = i.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          G && (s.density = parseFloat(G[1]));
        }
      }
      if (c === "FRAME SECTIONS") {
        const t = i.match(/FRAMESECTION\s+"([^"]+)"/);
        if (t) {
          const o = t[1];
          v.has(o) || v.set(o, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
          const s = v.get(o), l = i.match(/MATERIAL\s+"([^"]+)"/);
          l && (s.material = l[1]);
          const g = i.match(/SHAPE\s+"([^"]+)"/);
          g && (s.shape = g[1]);
          const m = i.match(/\bD\s+([\d.eE+-]+)/);
          m && (s.D = parseFloat(m[1]));
          const Y = i.match(/\bB\s+([\d.eE+-]+)/);
          Y && (s.B = parseFloat(Y[1]));
          const G = i.match(/\bTF\s+([\d.eE+-]+)/);
          G && (s.TF = parseFloat(G[1]));
          const ot = i.match(/\bTW\s+([\d.eE+-]+)/);
          ot && (s.TW = parseFloat(ot[1]));
          const at = i.match(/\bR\s+([\d.eE+-]+)/);
          at && (s.R = parseFloat(at[1]));
          const nt = i.match(/FILLMATERIAL\s+"([^"]+)"/);
          nt && (s.fillMaterial = nt[1]);
          const rt = i.match(/I2MOD\s+([\d.eE+-]+)/);
          rt && (s.modI2 = parseFloat(rt[1]));
          const dt = i.match(/I3MOD\s+([\d.eE+-]+)/);
          dt && (s.modI3 = parseFloat(dt[1]));
        }
      }
      if (c === "POINT COORDINATES") {
        const t = i.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        t && q.set(t[1], [parseFloat(t[2]), parseFloat(t[3])]);
      }
      if (c === "LINE CONNECTIVITIES") {
        const t = i.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        t && W.push({ name: t[1], type: t[2], pt1: t[3], pt2: t[4], nStories: parseInt(t[5]) });
      }
      if (c === "POINT ASSIGNS") {
        const t = i.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        t && U.set(`${t[1]}@${t[2]}`, t[3].split(/\s+/));
      }
      if (c === "LINE ASSIGNS") {
        const t = i.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (t) {
          const o = { story: t[2], section: t[3], rigidZone: 0, releases: [], angle: 0 }, s = i.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          s && (o.rigidZone = parseFloat(s[1]));
          const l = i.match(/RELEASE\s+"([^"]+)"/);
          l && (o.releases = l[1].split(/\s+/));
          const g = i.match(/ANG\s+([-\d.eE+]+)/);
          g && (o.angle = parseFloat(g[1])), r.set(`${t[1]}@${t[2]}`, o);
        }
      }
      if (c === "GRIDS") {
        const t = i.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        t && a.push({ label: t[1], dir: t[2], coord: parseFloat(t[3]) });
      }
      if (c === "FRAME OBJECT LOADS") {
        const t = i.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        t && A.push({ line: t[1], story: t[2], type: t[3], dir: t[4], lc: t[5], val: parseFloat(t[6]) });
      }
      if (c === "AREA CONNECTIVITIES") {
        const t = i.match(/AREA\s+"([^"]+)"\s+(?:FLOOR|WALL|RAMP|PANEL)?\s*\d+\s+(.+)/);
        if (t) {
          const o = ((_a = t[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((l) => l.replace(/"/g, ""))) || [], s = (t[2].replace(/"[^"]*"/g, " ").trim().match(/-?\d+/g) || []).map(Number);
          N.push({ name: t[1], pts: o, nStories: 0, storyOffsets: s });
        }
      }
      if (c === "WALL/SLAB/DECK SECTIONS" || c === "SLAB PROPERTIES" || c === "WALL PROPERTIES" || c === "DECK PROPERTIES") {
        const t = i.match(/SHELLPROP\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const o = t[1], s = (_b = t[2].match(/SLABTHICKNESS\s+([\d.eE+-]+)/)) == null ? void 0 : _b[1], l = (_c = t[2].match(/WALLTHICKNESS\s+([\d.eE+-]+)/)) == null ? void 0 : _c[1], g = (_d = t[2].match(/MATERIAL\s+"([^"]+)"/)) == null ? void 0 : _d[1], m = (_e = t[2].match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _e[1];
          if (s || l) {
            const Y = X.get(o) || { material: "", modelingType: "ShellThin" };
            X.set(o, { material: g ?? Y.material, modelingType: m ?? Y.modelingType, thickness: parseFloat(s ?? l ?? "0") });
          }
        }
      }
      if (c === "AREA ASSIGNS") {
        const t = i.match(/AREAASSIGN\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const o = t[1], s = t[2], l = t[3], g = ((_f = l.match(/SECTION\s+"([^"]+)"/)) == null ? void 0 : _f[1]) ?? "", m = ((_g = l.match(/CARDINALPOINT\s+"([^"]+)"/)) == null ? void 0 : _g[1]) ?? "CENTROID", Y = ((_h = l.match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _h[1]) ?? "ShellThin";
          Q.set(`${o}@${s}`, { story: s, section: g, modelingType: Y, cardinalPoint: m });
          const G = (_i = l.match(/SPRINGPROP\s+"([^"]+)"/)) == null ? void 0 : _i[1];
          G && I.set(`${o}@${s}`, G);
        }
      }
      if (c === "AREA SPRING PROPERTIES") {
        const t = i.match(/AREASPRING\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const o = t[1], s = t[2], l = parseFloat(((_j = s.match(/U1\s+([\d.eE+-]+)/)) == null ? void 0 : _j[1]) ?? "0"), g = parseFloat(((_k = s.match(/U2\s+([\d.eE+-]+)/)) == null ? void 0 : _k[1]) ?? "0"), m = parseFloat(((_l = s.match(/U3\s+([\d.eE+-]+)/)) == null ? void 0 : _l[1]) ?? "0");
          Z.set(o, { u1: l, u2: g, u3: m });
        }
      }
      if (c === "POINT SPRING PROPERTIES") {
        const t = i.match(/POINTSPRING\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const o = t[1], s = t[2], l = parseFloat(((_m = s.match(/UX\s+([\d.eE+-]+)/)) == null ? void 0 : _m[1]) ?? "0"), g = parseFloat(((_n = s.match(/UY\s+([\d.eE+-]+)/)) == null ? void 0 : _n[1]) ?? "0"), m = parseFloat(((_o = s.match(/UZ\s+([\d.eE+-]+)/)) == null ? void 0 : _o[1]) ?? "0");
          C.set(o, { ux: l, uy: g, uz: m });
        }
      }
      if (c === "POINT ASSIGNS") {
        const t = i.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/), o = (_q = (_p = t == null ? void 0 : t[3]) == null ? void 0 : _p.match(/SPRINGPROP\s+"([^"]+)"/)) == null ? void 0 : _q[1];
        t && o && h.set(`${t[1]}@${t[2]}`, o);
      }
      if (c === "SHELL UNIFORM LOAD SETS") {
        const t = i.match(/SHELLUNIFORMLOADSET\s+"([^"]+)"\s+LOADPAT\s+"([^"]+)"\s+VALUE\s+([\d.eE+-]+)/);
        if (t) {
          const o = t[1], s = t[2], l = parseFloat(t[3]);
          _.has(o) || _.set(o, []), _.get(o).push({ loadpat: s, value: l });
        }
      }
      if (c === "SHELL OBJECT LOADS") {
        const t = i.match(/AREALOAD\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const o = t[1], s = t[2], l = t[3], g = ((_r = l.match(/TYPE\s+"([^"]+)"/)) == null ? void 0 : _r[1]) ?? "";
          if (g === "UNIFLOADSET") {
            const m = ((_s = l.match(/UNIFLOADSET"\s+"([^"]+)"/)) == null ? void 0 : _s[1]) ?? ((_t2 = l.match(/"([^"]+)"\s*$/)) == null ? void 0 : _t2[1]) ?? "";
            V.push({ area: o, story: s, type: "UNIFLOADSET", dir: "GRAV", lc: m, val: 0 });
          } else {
            const m = ((_u = l.match(/DIR\s+"([^"]+)"/)) == null ? void 0 : _u[1]) ?? "GRAV", Y = ((_v = l.match(/LC\s+"([^"]+)"/)) == null ? void 0 : _v[1]) ?? "", G = parseFloat(((_w = l.match(/FVAL\s+([\d.eE+-]+)/)) == null ? void 0 : _w[1]) ?? "0");
            V.push({ area: o, story: s, type: g, dir: m, lc: Y, val: G });
          }
        }
      }
    }
  }
  const F = [];
  for (const n of V) if (n.type === "UNIFLOADSET") {
    const i = _.get(n.lc);
    if (i) for (const t of i) F.push({ area: n.area, story: n.story, type: "UNIFF", dir: n.dir, lc: t.loadpat, val: t.value });
  } else F.push(n);
  V.length = 0, V.push(...F);
  const D = /* @__PURE__ */ new Map();
  if (L.length > 0) {
    const n = L.length - 1;
    D.set(L[n].name, L[n].elev);
    for (let i = n - 1; i >= 0; i--) {
      const o = D.get(L[i + 1].name) + L[i].height;
      L[i].elev = o, D.set(L[i].name, o);
    }
  }
  const w = [], P = [], et = /* @__PURE__ */ new Map(), j = (n, i) => `${n}@${i}`, it = /* @__PURE__ */ new Set(), pt = /* @__PURE__ */ new Map();
  for (const n of W) pt.set(n.name, n);
  for (const n of W) for (const [i, t] of r) {
    if (!i.startsWith(n.name + "@")) continue;
    const o = t.story, s = L.findIndex((l) => l.name === o);
    if (!(s < 0)) if (n.type === "COLUMN" || n.type === "BRACE") {
      it.add(j(n.pt2, o));
      const l = Math.max(n.nStories, 1), g = Math.min(s + l, L.length - 1);
      it.add(j(n.pt1, L[g].name));
    } else it.add(j(n.pt1, o)), it.add(j(n.pt2, o));
  }
  for (const [n] of U) it.add(n);
  const St = new Map(L.map((n, i) => [n.name, i])), Mt = (n, i) => {
    const t = St.get(n);
    return t === void 0 ? n : L[Math.max(0, t - (i || 0))].name;
  };
  for (const n of N) for (const [i, t] of Q) if (i.startsWith(n.name + "@")) for (let o = 0; o < n.pts.length; o++) it.add(j(n.pts[o], Mt(t.story, ((_x = n.storyOffsets) == null ? void 0 : _x[o]) ?? 0)));
  for (const n of it) {
    const [i, t] = n.split("@"), o = q.get(i), s = D.get(t);
    o === void 0 || s === void 0 || (w.push([o[0], o[1], s]), P.push(n), et.set(n, w.length - 1));
  }
  const J = [], ft = [], st = [], mt = [], ct = /* @__PURE__ */ new Map(), Pt = /* @__PURE__ */ new Map(), xt = /* @__PURE__ */ new Map();
  for (const n of W) for (const [i, t] of r) {
    if (!i.startsWith(n.name + "@")) continue;
    const o = t.story, s = L.findIndex((ot) => ot.name === o);
    if (s < 0) continue;
    let l, g;
    if (n.type === "COLUMN" || n.type === "BRACE") {
      const ot = Math.max(n.nStories, 1), at = Math.min(s + ot, L.length - 1);
      l = j(n.pt1, L[at].name), g = j(n.pt2, o);
    } else l = j(n.pt1, o), g = j(n.pt2, o);
    const m = et.get(l), Y = et.get(g);
    if (m === void 0 || Y === void 0 || m === Y) continue;
    const G = J.length;
    if (J.push([m, Y]), ft.push(n.name), st.push(n.type), mt.push(o), ct.set(G, t.section), t.rigidZone > 0 && Pt.set(G, [t.rigidZone, t.rigidZone]), t.releases.length > 0) {
      const ot = new Array(12).fill(false), at = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const nt of t.releases) {
        const rt = at[nt];
        rt !== void 0 && (ot[rt] = true);
      }
      xt.set(G, ot);
    }
  }
  const bt = /* @__PURE__ */ new Map(), Dt = /* @__PURE__ */ new Map();
  for (const n of N) for (const [i, t] of Q) {
    if (!i.startsWith(n.name + "@")) continue;
    const o = [];
    for (let l = 0; l < n.pts.length; l++) {
      const g = j(n.pts[l], Mt(t.story, ((_y = n.storyOffsets) == null ? void 0 : _y[l]) ?? 0)), m = et.get(g);
      if (m === void 0) {
        o.length = 0;
        break;
      }
      o.push(m);
    }
    if (o.length !== 4 || new Set(o).size !== 4) continue;
    const s = J.length;
    J.push(o), ft.push(n.name), st.push("FLOOR"), mt.push(t.story), bt.set(s, t.section), Dt.set(s, t.cardinalPoint);
  }
  const Ot = /* @__PURE__ */ new Map(), At = (n, i, t) => {
    if (!(t > 0)) return;
    const o = `${n}:${i}`;
    Ot.set(o, (Ot.get(o) ?? 0) + t);
  };
  for (let n = 0; n < J.length; n++) {
    const i = J[n];
    if (i.length !== 4) continue;
    const t = I.get(`${ft[n]}@${mt[n]}`), o = t ? Z.get(t) : void 0;
    if (!o) continue;
    const s = i.map((G) => w[G]), l = [s[1][0] - s[0][0], s[1][1] - s[0][1]], g = [s[3][0] - s[0][0], s[3][1] - s[0][1]], Y = Math.abs(l[0] * g[1] - l[1] * g[0]) / 4;
    for (const G of i) At(G, 0, o.u1 * Y), At(G, 1, o.u2 * Y), At(G, 2, o.u3 * Y);
  }
  for (const [n, i] of h) {
    const t = et.get(n), o = C.get(i);
    t === void 0 || !o || (At(t, 0, o.ux), At(t, 1, o.uy), At(t, 2, o.uz));
  }
  const gt = [];
  for (const [n, i] of Ot) {
    const [t, o] = n.split(":").map(Number);
    gt.push({ node: t, dof: o, k: i });
  }
  const Tt = /* @__PURE__ */ new Map();
  for (const n of V) if (n.type === "UNIFF") for (let i = 0; i < J.length; i++) {
    if (ft[i] !== n.area || mt[i] !== n.story) continue;
    const t = J[i];
    if (t.length !== 4) continue;
    const o = t.map((Y) => w[Y]), s = [o[1][0] - o[0][0], o[1][1] - o[0][1]], l = [o[3][0] - o[0][0], o[3][1] - o[0][1]], g = Math.abs(s[0] * l[1] - s[1] * l[0]), m = -n.val * g / 4;
    for (const Y of t) {
      const G = Tt.get(Y) || [0, 0, 0, 0, 0, 0];
      G[2] += m, Tt.set(Y, G);
    }
  }
  const Nt = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Map(), Lt = /* @__PURE__ */ new Map(), Rt = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
  for (const [n, i] of ct) {
    const t = v.get(i);
    if (!t) continue;
    const o = R.get(t.material);
    o && (Nt.set(n, o.E), $t.set(n, o.G));
    const s = t.D, l = t.B, g = t.TF, m = t.TW;
    let Y = 0, G = 0, ot = 0, at = 0, nt = 0, rt = 0, dt = "rect";
    switch (t.shape) {
      case "Concrete Rectangular":
        Y = s * l, G = l * s ** 3 / 12, ot = s * l ** 3 / 12, at = l * s ** 3 * (1 / 3 - 0.21 * (s / l) * (1 - s ** 4 / (12 * l ** 4))), nt = rt = 5 / 6 * Y, dt = "rect";
        break;
      case "Concrete Circle":
        Y = Math.PI * s ** 2 / 4, G = ot = Math.PI * s ** 4 / 64, at = Math.PI * s ** 4 / 32, nt = rt = 0.9 * Y, dt = "circ";
        break;
      case "Steel I/Wide Flange":
        Y = 2 * l * g + (s - 2 * g) * m, G = (l * s ** 3 - (l - m) * (s - 2 * g) ** 3) / 12, ot = (2 * g * l ** 3 + (s - 2 * g) * m ** 3) / 12, at = (2 * l * g ** 3 + (s - 2 * g) * m ** 3) / 3, nt = (s - 2 * g) * m, rt = 2 * l * g * 5 / 6, dt = "I";
        break;
      case "Steel Tube":
        Y = s * l - (s - 2 * m) * (l - 2 * m), G = (l * s ** 3 - (l - 2 * m) * (s - 2 * m) ** 3) / 12, ot = (s * l ** 3 - (s - 2 * m) * (l - 2 * m) ** 3) / 12, at = 2 * m * (s - m) * (l - m) * ((s - m) * (l - m)) / (s - m + (l - m)), nt = 2 * s * m, rt = 2 * l * m, dt = "HSS";
        break;
      case "Filled Steel Tube":
        Y = s * l, G = l * s ** 3 / 12, ot = s * l ** 3 / 12, at = 2 * m * (s - m) * (l - m) * ((s - m) * (l - m)) / (s - m + (l - m)), nt = 2 * s * m + 5 / 6 * (s - 2 * m) * (l - 2 * m), rt = 2 * l * m + 5 / 6 * (s - 2 * m) * (l - 2 * m), dt = "CFT";
        break;
      case "Steel Angle": {
        const Et = g || m;
        Y = Et * (s + l - Et), G = Et * (s ** 3 + l * Et ** 2 + Et ** 2 * (s - Et)) / 12, ot = Et * (l ** 3 + s * Et ** 2 + Et ** 2 * (l - Et)) / 12, at = (s + l - Et) * Et ** 3 / 3, nt = s * Et, rt = l * Et, dt = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        Y = 2 * l * g + (s - 2 * g) * m, G = (m * s ** 3 + 2 * l * g * (s - g) ** 2) / 12, ot = (2 * g * l ** 3 + (s - 2 * g) * m ** 3) / 12, at = (2 * l * g ** 3 + (s - 2 * g) * m ** 3) / 3, nt = (s - 2 * g) * m, rt = 2 * l * g * 5 / 6, dt = t.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        Y = 2 * (2 * l * g + (s - 2 * g) * m), G = 2 * (m * s ** 3 + 2 * l * g * (s - g) ** 2) / 12, ot = 2 * (2 * g * l ** 3 + (s - 2 * g) * m ** 3) / 12, at = 2 * (2 * l * g ** 3 + (s - 2 * g) * m ** 3) / 3, nt = 2 * (s - 2 * g) * m, rt = 4 * l * g * 5 / 6, dt = "2C";
        break;
      default:
        s > 0 && l > 0 && (Y = s * l, G = l * s ** 3 / 12, ot = s * l ** 3 / 12, at = Math.min(s, l) * Math.max(s, l) ** 3 / 3 * 0.3, nt = rt = 5 / 6 * Y);
        break;
    }
    t.modI2 && (ot *= t.modI2), t.modI3 && (G *= t.modI3), It.set(n, Y), Rt.set(n, G), yt.set(n, ot), ht.set(n, at), nt > 0 && Ft.set(n, nt), rt > 0 && Lt.set(n, rt), e.set(n, { type: dt, b: l || void 0, h: s || void 0, d: dt === "circ" || dt === "pipe" ? s : void 0, tw: m || void 0, tf: g || void 0, r: t.R, name: i });
  }
  {
    let n;
    for (const o of R.values()) if (o.E > 0) {
      n = o;
      break;
    }
    const i = (n == null ? void 0 : n.E) ?? 25e6, t = (n == null ? void 0 : n.G) ?? 104e5;
    for (let o = 0; o < J.length; o++) J[o].length === 2 && ((It.get(o) ?? 0) > 0 || (It.set(o, 0.09), Rt.set(o, 675e-6), yt.set(o, 675e-6), ht.set(o, 114e-5), Ft.set(o, 0.075), Lt.set(o, 0.075)), (Nt.get(o) ?? 0) > 0 || Nt.set(o, i), ($t.get(o) ?? 0) > 0 || $t.set(o, t));
  }
  const f = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map();
  let T;
  for (const n of R.values()) if (n.E > 0) {
    T = n;
    break;
  }
  for (const [n, i] of bt) {
    const t = X.get(i), o = t && t.thickness > 0 ? t.thickness : 0.2;
    f.set(n, o);
    const s = (t ? R.get(t.material) : void 0) || T;
    s && (Nt.set(n, s.E), $t.set(n, s.G), S.set(n, s.nu), s.density !== void 0 && M.set(n, s.density)), d.set(n, (t == null ? void 0 : t.modelingType) === "ShellThin" ? 1 : 0), y.set(n, 2);
  }
  const B = /* @__PURE__ */ new Map();
  for (const [n, i] of U) {
    const t = et.get(n);
    if (t === void 0) continue;
    const o = [false, false, false, false, false, false];
    for (const s of i) s === "UX" && (o[0] = true), s === "UY" && (o[1] = true), s === "UZ" && (o[2] = true), s === "RX" && (o[3] = true), s === "RY" && (o[4] = true), s === "RZ" && (o[5] = true);
    B.set(t, o);
  }
  {
    const n = /* @__PURE__ */ new Set();
    for (const i of J) for (const t of i) n.add(t);
    for (let i = 0; i < w.length; i++) !n.has(i) && !B.has(i) && B.set(i, [true, true, true, true, true, true]);
  }
  const b = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
  for (let n = 0; n < ft.length; n++) k.set(`${ft[n]}@${mt[n]}`, n);
  for (const n of A) {
    const i = k.get(`${n.line}@${n.story}`);
    if (i === void 0) continue;
    const [t, o] = J[i], s = w[t], l = w[o], g = Math.sqrt((l[0] - s[0]) ** 2 + (l[1] - s[1]) ** 2 + (l[2] - s[2]) ** 2);
    if (g < 1e-10) continue;
    const m = n.val * g / 2;
    let Y = 0, G = 0, ot = 0;
    n.dir === "GRAV" || n.dir === "GRAVITY" ? ot = -m : n.dir === "X" ? Y = m : n.dir === "Y" ? G = m : n.dir === "Z" && (ot = -m);
    for (const at of [t, o]) {
      const nt = b.get(at) || [0, 0, 0, 0, 0, 0];
      nt[0] += Y, nt[1] += G, nt[2] += ot, b.set(at, nt);
    }
  }
  const z = /* @__PURE__ */ new Map();
  for (const [n, i] of ct) {
    const t = v.get(i);
    if (!t) continue;
    const o = R.get(t.material);
    (o == null ? void 0 : o.density) && z.set(n, o.density);
  }
  for (const [n, i] of M) z.set(n, i);
  for (const [n, i] of Tt) {
    const t = b.get(n) || [0, 0, 0, 0, 0, 0];
    b.set(n, [t[0] + i[0], t[1] + i[1], t[2] + i[2], t[3] + i[3], t[4] + i[4], t[5] + i[5]]);
  }
  const ut = { M: 1, CM: 0.01, MM: 1e-3, FT: 0.3048, IN: 0.0254, INCH: 0.0254 }, Ct = { KN: 1, N: 1e-3, TONF: 9.80665, TON: 9.80665, KGF: 980665e-8, KG: 980665e-8, KIP: 4.448222, LB: 4448222e-9 }, tt = ut[(x.length || "M").toUpperCase()] ?? 1, lt = Ct[(x.force || "KN").toUpperCase()] ?? 1;
  if (tt !== 1 || lt !== 1) {
    const n = lt / (tt * tt);
    for (const o of w) o[0] *= tt, o[1] *= tt, o[2] *= tt;
    for (const [o, s] of b) b.set(o, [s[0] * lt, s[1] * lt, s[2] * lt, s[3] * lt * tt, s[4] * lt * tt, s[5] * lt * tt]);
    const i = (o, s) => {
      for (const [l, g] of o) o.set(l, g * s);
    };
    i(Nt, n), i($t, n), i(It, tt * tt), i(Rt, tt ** 4), i(yt, tt ** 4), i(ht, tt ** 4), i(Ft, tt * tt), i(Lt, tt * tt), i(f, tt), i(z, lt / tt ** 3);
    const t = lt / tt;
    for (const o of gt) o.k *= t;
    x.force = "KN", x.length = "M";
  }
  return { units: x, stories: L.reverse(), materials: R, frameSections: v, nodes: w, nodeNames: P, nodeNameToIdx: et, elements: J, elementNames: ft, elementTypes: st, elementStories: mt, elementSections: ct, nodeInputs: { supports: B, loads: b }, elementInputs: { elasticities: Nt, shearModuli: $t, areas: It, momentsOfInertiaZ: Rt, momentsOfInertiaY: yt, torsionalConstants: ht, shearAreasY: Ft, shearAreasZ: Lt, rigidOffsets: Pt, momentReleases: xt, densities: z, sectionShapes: e, thicknesses: f, poissonsRatios: S, plateFormulations: d, drillingTypes: y }, sectionShapes: e, grids: a, springsList: gt, info: { nNodes: w.length, nFrames: J.length, nAreas: N.length, title: p }, rawSections: E, rawSectionHeaders: u };
}
function H($) {
  return $ && parseFloat($) || 0;
}
function Ut($) {
  const O = /* @__PURE__ */ new Map(), x = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let L;
  for (; (L = x.exec($)) !== null; ) O.set(L[1], L[2] !== void 0 ? L[2] : L[3]);
  return O;
}
function Wt($) {
  const O = $.split(/\r?\n/);
  return O.some((L) => L.trim().startsWith("TABLE:")) ? kt(O) : vt(O);
}
function kt($) {
  var _a, _b, _c, _d, _e, _f;
  const O = [];
  let x = "";
  for (const Z of $) {
    const C = Z.trimEnd();
    C.endsWith("_") ? x += C.slice(0, -1) + " " : (x += C, O.push(x), x = "");
  }
  x && O.push(x);
  const L = { force: "KN", length: "m" };
  let R = "UX,UY,UZ,RX,RY,RZ";
  const v = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), U = [], r = [], A = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), V = [];
  let _ = "";
  for (const Z of O) {
    const C = Z.trim();
    if (!C || C.startsWith(";") || C.startsWith("File ")) continue;
    if (C.startsWith("TABLE:")) {
      const h = C.match(/TABLE:\s+"(.+?)"/);
      _ = h ? h[1].toUpperCase() : "";
      continue;
    }
    if (C === "END TABLE DATA") {
      _ = "";
      continue;
    }
    const I = Ut(C);
    switch (_) {
      case "PROGRAM CONTROL": {
        const h = I.get("CurrUnits");
        if (h) {
          const a = h.split(",").map((p) => p.trim());
          a[0] && (L.force = a[0]), a[1] && (L.length = a[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const h = I.get("Material");
        h && !v.has(h) && v.set(h, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const h = I.get("Material");
        if (h) {
          const a = v.get(h) || { E: 0, nu: 0, G: 0 };
          a.E = H(I.get("E1")), a.G = H(I.get("G12")), a.nu = H(I.get("U12")), a.density = H(I.get("UnitMass")), v.set(h, a);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const h = I.get("Material");
        h && v.has(h) && (v.get(h).fy = H(I.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const h = I.get("SectionName");
        h && q.set(h, { material: I.get("Material") || "", shape: I.get("Shape") || "Rectangular", D: H(I.get("t3")), B: H(I.get("t2")), TF: H(I.get("tf")), TW: H(I.get("tw")), A: H(I.get("Area")), Iz: H(I.get("I33")), Iy: H(I.get("I22")), J: H(I.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const h = I.get("Section");
        h && W.set(h, { material: I.get("Material") || "", type: I.get("Type") || "Shell", thickness: H(I.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const h = I.get("Joint");
        if (h) {
          const a = H(I.get("XorR")), p = H(I.get("Y")), c = H(I.get("Z"));
          N.set(h, [a, p, c]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const h = I.get("Frame"), a = I.get("JointI"), p = I.get("JointJ");
        h && a && p && U.push({ name: h, j1: a, j2: p });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const h = I.get("Area");
        if (h) {
          const a = parseInt(I.get("NumJoints") || "4"), p = [];
          for (let c = 1; c <= a; c++) {
            const E = I.get(`Joint${c}`);
            E && p.push(E);
          }
          p.length >= 3 && r.push({ name: h, joints: p });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const h = I.get("Joint");
        if (h) {
          const a = [((_a = I.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = I.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = I.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = I.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = I.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = I.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          A.set(h, a);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const h = I.get("Frame"), a = I.get("AnalSect");
        h && a && Q.set(h, a);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const h = I.get("Area"), a = I.get("Section");
        h && a && X.set(h, a);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const h = I.get("Joint");
        h && V.push({ joint: h, fx: H(I.get("F1")), fy: H(I.get("F2")), fz: H(I.get("F3")), mx: H(I.get("M1")), my: H(I.get("M2")), mz: H(I.get("M3")) });
        break;
      }
    }
  }
  return Yt(L, R, v, q, W, N, U, r, A, Q, X, V);
}
function vt($) {
  const O = { force: "KN", length: "m" };
  let x = "UX,UY,UZ,RX,RY,RZ";
  const L = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), W = [], N = [], U = /* @__PURE__ */ new Map(), r = [];
  let A = "", Q = "";
  for (const _ of $) {
    const Z = _.trim();
    if (!Z || Z.startsWith(";")) continue;
    if (!_.startsWith(" ") && !_.startsWith("	")) {
      const h = Z.toUpperCase();
      if (h === "END") break;
      h.startsWith("SHELL SECTION") ? A = "SHELL SECTION" : h.startsWith("FRAME SECTION") ? A = "FRAME SECTION" : A = h.split(/\s+/)[0];
      continue;
    }
    const C = Ut(Z), I = Z.split(/\s+/);
    switch (A) {
      case "SYSTEM": {
        const h = C.get("DOF");
        h && (x = h);
        const a = C.get("LENGTH");
        a && (O.length = a);
        const p = C.get("FORCE");
        p && (O.force = p);
        break;
      }
      case "JOINT": {
        const h = I[0];
        q.set(h, [H(C.get("X")), H(C.get("Y")), H(C.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const h = C.get("ADD"), a = C.get("DOF");
        if (h && a) {
          const p = a.split(","), c = [false, false, false, false, false, false];
          for (const E of p) {
            const u = E.toUpperCase();
            (u === "UX" || u === "U1") && (c[0] = true), (u === "UY" || u === "U2") && (c[1] = true), (u === "UZ" || u === "U3") && (c[2] = true), (u === "RX" || u === "R1") && (c[3] = true), (u === "RY" || u === "R2") && (c[4] = true), (u === "RZ" || u === "R3") && (c[5] = true);
          }
          U.set(h, c);
        }
        break;
      }
      case "MATERIAL": {
        const h = C.get("NAME");
        if (h) Q = h, L.set(h, { E: 0, nu: 0, G: 0 });
        else if (Q) {
          const a = L.get(Q), p = C.get("E");
          p && (a.E = H(p));
          const c = C.get("U");
          c && (a.nu = H(c)), a.G = a.E / (2 * (1 + a.nu));
          const E = C.get("M");
          E && (a.density = H(E));
        }
        break;
      }
      case "SHELL": {
        const h = I[0], a = C.get("J");
        C.get("SEC"), a && N.push({ name: h, joints: a.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const h = C.get("NAME");
        h && v.set(h, { material: C.get("MAT") || "", type: C.get("TYPE") || "Shell", thickness: H(C.get("TH")) });
        break;
      }
      case "FRAME": {
        const h = I[0], a = C.get("J");
        if (a) {
          const p = a.split(",");
          p.length >= 2 && W.push({ name: h, j1: p[0], j2: p[1] });
        }
        break;
      }
      case "LOAD": {
        const h = C.get("ADD");
        h && r.push({ joint: h, fx: H(C.get("UX")), fy: H(C.get("UY")), fz: H(C.get("UZ")), mx: H(C.get("MX")), my: H(C.get("MY")), mz: H(C.get("MZ")) });
        break;
      }
    }
  }
  return Yt(O, x, L, R, v, q, W, N, U, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), r);
}
function Yt($, O, x, L, R, v, q, W, N, U, r, A) {
  var _a;
  const Q = [], X = /* @__PURE__ */ new Map(), V = [];
  for (const [u, F] of v) X.set(u, V.length), Q.push(u), V.push(F);
  const _ = [], Z = [], C = /* @__PURE__ */ new Map();
  for (const u of q) {
    const F = X.get(u.j1), D = X.get(u.j2);
    if (F !== void 0 && D !== void 0) {
      const w = _.length;
      _.push([F, D]), Z.push(u.name);
      const P = U.get(u.name);
      P && C.set(w, P);
    }
  }
  const I = _.length;
  for (const u of W) {
    const F = u.joints.map((D) => X.get(D)).filter((D) => D !== void 0);
    if (F.length >= 3) {
      const D = _.length;
      _.push(F), Z.push(u.name);
      const w = r.get(u.name);
      w && C.set(D, w);
    }
  }
  const h = _.length - I, a = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, p = /* @__PURE__ */ new Map(), c = x.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let u = 0; u < _.length; u++) {
    const F = C.get(u), D = F ? L.get(F) : null, w = F ? R.get(F) : null;
    if (D || _[u].length === 2) {
      const P = D || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, et = x.get(P.material) || c, j = et.E || c.E, it = et.nu || 0.3, pt = et.G || j / (2 * (1 + it));
      a.elasticities.set(u, j), a.shearModuli.set(u, pt), a.areas.set(u, P.A || P.D * P.B), a.momentsOfInertiaZ.set(u, P.Iz || P.B * P.D ** 3 / 12), a.momentsOfInertiaY.set(u, P.Iy || P.D * P.B ** 3 / 12), a.torsionalConstants.set(u, P.J || 0), a.densities.set(u, et.density || 0), ((_a = P.shape) == null ? void 0 : _a.includes("Wide Flange")) || P.shape === "I" ? p.set(u, { type: "I", b: P.B, h: P.D, name: F || "I-section" }) : p.set(u, { type: "rect", b: P.B, h: P.D });
    } else if (w) {
      const P = x.get(w.material) || c, et = P.E || c.E, j = P.nu || 0.2, it = P.G || et / (2 * (1 + j));
      a.elasticities.set(u, et), a.shearModuli.set(u, it), a.thicknesses.set(u, w.thickness), a.poissonsRatios.set(u, j), a.densities.set(u, P.density || 0);
    }
  }
  const E = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [u, F] of N) {
    const D = X.get(u);
    D !== void 0 && E.supports.set(D, F);
  }
  for (const u of A) {
    const F = X.get(u.joint);
    if (F !== void 0) {
      const D = E.forces.get(F) || [0, 0, 0, 0, 0, 0];
      D[0] += u.fx, D[1] += u.fy, D[2] += u.fz, D[3] += u.mx, D[4] += u.my, D[5] += u.mz, E.forces.set(F, D);
    }
  }
  return { units: $, dof: O, materials: x, frameSections: L, shellSections: R, nodes: V, nodeNames: Q, nodeNameToIdx: X, elements: _, elementNames: Z, elementSections: C, nodeInputs: E, elementInputs: a, sectionShapes: p, info: { nNodes: V.length, nFrames: I, nShells: h, title: `SAP2000 (${I} frames, ${h} shells)` } };
}
function _t($) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: O, elements: x, nodeInputs: L, elementInputs: R } = $, v = $.units || { force: "KN", length: "m" }, q = $.title || "Awatif Model", W = [], N = (a) => W.push(a), U = () => W.push(" ");
  N(`File ${q}.$2k was saved on m/d/yy at h:mm:ss`), U(), N('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), N("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), U();
  const r = [], A = [];
  if (x.forEach((a, p) => {
    a.length === 2 ? r.push(p) : A.push(p);
  }), r.length > 0) {
    N('TABLE:  "CONNECTIVITY - FRAME"');
    for (const a of r) {
      const p = x[a];
      N(`   Frame=${a + 1}   JointI=${p[0] + 1}   JointJ=${p[1] + 1}   IsCurved=No`);
    }
    U();
  }
  if (A.length > 0) {
    N('TABLE:  "CONNECTIVITY - AREA"');
    for (const a of A) {
      const p = x[a], c = p.map((E, u) => `Joint${u + 1}=${E + 1}`).join("   ");
      N(`   Area=${a + 1}   NumJoints=${p.length}   ${c}`);
    }
    U();
  }
  N('TABLE:  "COORDINATE SYSTEMS"'), N("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), U(), N('TABLE:  "DATABASE FORMAT TYPES"'), N("   UnitsCurr=Yes   OverrideE=No"), U();
  const Q = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map();
  for (const a of r) {
    const p = ((_a = R.areas) == null ? void 0 : _a.get(a)) || 0, c = ((_b = R.momentsOfInertiaZ) == null ? void 0 : _b.get(a)) || 0, E = ((_c = R.momentsOfInertiaY) == null ? void 0 : _c.get(a)) || 0, u = ((_d = R.torsionalConstants) == null ? void 0 : _d.get(a)) || 0, F = ((_e = R.elasticities) == null ? void 0 : _e.get(a)) || 0, D = `MAT_${Math.round(F)}`, w = `A${p.toPrecision(6)}_Iz${c.toPrecision(6)}`;
    if (!Q.has(w)) {
      let et = 0.3, j = 0.3;
      p > 0 && c > 0 && (et = Math.sqrt(12 * c / p), j = p / et), Q.set(w, { A: p, Iz: c, Iy: E, J: u, b: j, h: et, matKey: D });
    }
    const P = [...Q.keys()].indexOf(w) + 1;
    X.set(a, `SEC${P}`);
  }
  if (r.length > 0) {
    N('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const a of r) {
      const p = X.get(a) || "SEC1";
      N(`   Frame=${a + 1}   AutoSelect=N.A.   AnalSect=${p}   MatProp=Default`);
    }
    U();
  }
  if (Q.size > 0) {
    N('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let a = 0;
    for (const [, p] of Q) {
      a++;
      const c = p.A * 5 / 6;
      N(`   SectionName=SEC${a}   Material=${p.matKey}   Shape=Rectangular   t3=${K(p.h)}   t2=${K(p.b)}   Area=${K(p.A)}   TorsConst=${K(p.J)}   I33=${K(p.Iz)}   I22=${K(p.Iy)}   I23=0   AS2=${K(c)}   AS3=${K(c)} _`), N("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    U();
  }
  const V = !!$.layeredSection && A.length > 0, _ = $.layeredSection, Z = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map();
  if (!V) for (const a of A) {
    const p = ((_f = R.thicknesses) == null ? void 0 : _f.get(a)) || 0.1, c = ((_g = R.elasticities) == null ? void 0 : _g.get(a)) || 0, E = `MAT_${Math.round(c)}`, u = `t${p.toPrecision(6)}`;
    Z.has(u) || Z.set(u, { t: p, matKey: E });
    const F = [...Z.keys()].indexOf(u) + 1;
    C.set(a, `SSEC${F}`);
  }
  if (A.length > 0) {
    N('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const a of A) {
      const p = V ? _.name : C.get(a) || "SSEC1";
      N(`   Area=${a + 1}   Section=${p}   MatProp=Default`);
    }
    if (U(), N('TABLE:  "AREA SECTION PROPERTIES"'), V) {
      const a = _, p = ((_h = a.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      N(`   Section=${a.name}   Material=${p}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${K(a.totalThickness)}   BendThick=${K(a.totalThickness)}   Color=Magenta`);
    } else {
      let a = 0;
      for (const [, p] of Z) a++, N(`   Section=SSEC${a}   Material=${p.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${K(p.t)}   BendThick=${K(p.t)}   Color=Cyan`);
    }
    if (U(), V) {
      N('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const a = _;
      for (const p of a.layers) {
        const c = p.angle ?? 0, E = p.numIntPts ?? 3;
        N(`   Section=${a.name}   LayerName=${p.name}   Distance=${K(p.distance)}   Thickness=${K(p.thickness)}   Type=Shell   NumIntPts=${E}   Material=${p.material}   MatAngle=${K(c * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      U();
    }
  }
  N('TABLE:  "JOINT COORDINATES"');
  for (let a = 0; a < O.length; a++) {
    const p = O[a];
    N(`   Joint=${a + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${K(p[0])}   Y=${K(p[1])}   Z=${K(p[2])}   SpecialJt=No`);
  }
  if (U(), L.supports && L.supports.size > 0) {
    N('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [a, p] of L.supports) {
      if (!p.some((E) => E)) continue;
      const c = (E) => E ? "Yes" : "No";
      N(`   Joint=${a + 1}   U1=${c(p[0])}   U2=${c(p[1])}   U3=${c(p[2])}   R1=${c(p[3])}   R2=${c(p[4])}   R3=${c(p[5])}`);
    }
    U();
  }
  const I = $.selfWtMult ?? 1;
  if (N('TABLE:  "LOAD PATTERN DEFINITIONS"'), N(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${I}`), U(), N('TABLE:  "LOAD CASE DEFINITIONS"'), N('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), U(), N('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), N('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), U(), L.loads && L.loads.size > 0) {
    N('TABLE:  "JOINT LOADS - FORCE"');
    for (const [a, p] of L.loads) p.some((c) => Math.abs(c) > 1e-12) && N(`   Joint=${a + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${K(p[0])}   F2=${K(p[1])}   F3=${K(p[2])}   M1=${K(p[3])}   M2=${K(p[4])}   M3=${K(p[5])}`);
    U();
  }
  const h = /* @__PURE__ */ new Map();
  for (let a = 0; a < x.length; a++) {
    const p = ((_i = R.elasticities) == null ? void 0 : _i.get(a)) || 0, c = ((_j = R.shearModuli) == null ? void 0 : _j.get(a)) || 0, E = p > 0 && c > 0 ? Math.max(0, Math.min(0.5, p / (2 * c) - 1)) : 0.2, u = ((_k = R.densities) == null ? void 0 : _k.get(a)) || 0, F = `MAT_${Math.round(p)}`;
    h.has(F) || h.set(F, { E: p, nu: E, G: c, rho: u });
  }
  N('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [a] of h) N(`   Material=${a}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  U(), N('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [a, p] of h) N(`   Material=${a}   UnitWeight=${K(p.rho * 9.81)}   UnitMass=${K(p.rho)}   E1=${K(p.E)}   G12=${K(p.G)}   U12=${K(p.nu)}   A1=9.9E-06`);
  U(), N('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [a] of h) N(`   Material=${a}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return U(), N('TABLE:  "PROGRAM CONTROL"'), N(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${v.force}, ${v.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), U(), N("END TABLE DATA"), N(""), W.join(`\r
`);
}
function K($) {
  return $ === 0 || Math.abs($) < 1e-15 ? "0" : Math.abs($) >= 1e6 || Math.abs($) < 1e-3 && Math.abs($) > 0 ? $.toExponential(8) : parseFloat($.toPrecision(10)).toString();
}
function Zt($) {
  const { nodes: O, elements: x, nodeInputs: L, elementInputs: R, title: v, e2kModel: q } = $, W = q == null ? void 0 : q.rawSections;
  return W && W.size > 0 ? Bt(W, q) : Gt($);
}
function Bt($, O) {
  const x = [], L = O == null ? void 0 : O.rawSectionHeaders;
  for (const [R, v] of $) {
    x.push((L == null ? void 0 : L.get(R)) ?? `$ ${R}`);
    for (const q of v) x.push(q);
  }
  return $.has("END OF MODEL FILE") || (x.push("  END"), x.push("$ END OF MODEL FILE")), x.join(`\r
`);
}
function Gt($) {
  var _a, _b, _c;
  const { nodes: O, elements: x, nodeInputs: L, elementInputs: R, title: v, units: q } = $, W = $.rigidDiaphragm ?? false, N = (q == null ? void 0 : q.force) || "Tonf", U = (q == null ? void 0 : q.length) || "m", r = [], A = (e) => Math.round(e * 1e4) / 1e4, Q = (() => {
    const e = (N || "Tonf").toLowerCase();
    return e === "tonf" || e === "tonf-f" ? 1 / 9.80665 : e === "kn" || e === "kn-f" ? 1 : e === "kgf" || e === "kg" ? 1 / 980665e-8 : e === "kip" || e === "kips" ? 1 / 4.44822 : 1;
  })(), X = (e) => e * Q, V = (e) => e * Q, _ = (e) => e * Q, Z = /* @__PURE__ */ new Date(), C = `${Z.getMonth() + 1}/${Z.getDate()}/${Z.getFullYear()}  ${Z.getHours()}:${String(Z.getMinutes()).padStart(2, "0")}:${String(Z.getSeconds()).padStart(2, "0")}`;
  r.push(`$ File   "Hekatan_export.e2k"  saved ${C} in ETABS 22.6.0`), r.push(""), r.push("$ PROGRAM INFORMATION"), r.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), r.push(""), r.push("$ CONTROLS"), r.push(`  UNITS  "${N}"  "${U}"  "C"  `), r.push('  TITLE1  "Hekatan Struct export"  '), v && r.push(`  TITLE2  "${v}"  `), r.push("  PREFERENCE  MERGETOL 0.001"), r.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), r.push("");
  const I = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
  O.forEach((e) => {
    I.add(A(e[0])), h.add(A(e[1]));
  });
  const a = [...I].sort((e, f) => e - f), p = [...h].sort((e, f) => e - f);
  r.push("$ GRIDS"), r.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), a.forEach((e, f) => {
    const S = f < 26 ? String.fromCharCode(65 + f) : String.fromCharCode(65 + f % 26).repeat(Math.floor(f / 26) + 1);
    r.push(`  GRID "G1"  LABEL "${S}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), p.forEach((e, f) => {
    r.push(`  GRID "G1"  LABEL "${f + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), r.push("");
  const c = /* @__PURE__ */ new Set();
  O.forEach((e) => c.add(A(e[2])));
  let E = [...c].sort((e, f) => e - f);
  if (E.length === 1) {
    const e = E[0];
    e > 0 ? E = [0, e] : E = [0, 4];
  }
  const u = [], F = /* @__PURE__ */ new Map();
  u.push("Base"), F.set(E[0], "Base");
  for (let e = 1; e < E.length; e++) {
    const f = `Story${e}`;
    u.push(f), F.set(E[e], f);
  }
  c.size === 1 && c.has(0) && F.set(0, u[1]), r.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = E.length - 1; e >= 1; e--) r.push(`  STORY "${u[e]}"  HEIGHT ${A(E[e] - E[e - 1])} MASTERSTORY "Yes"  `);
  E.length > 0 && r.push(`  STORY "Base"  ELEV ${E[0]} `), r.push(""), x.some((e) => e.length === 4), W && (r.push("$ DIAPHRAGM NAMES"), r.push('  DIAPHRAGM "D1"    TYPE RIGID'), r.push("")), r.push("$ MATERIAL PROPERTIES");
  const D = /* @__PURE__ */ new Set();
  (_a = R.elasticities) == null ? void 0 : _a.forEach((e) => D.add(e));
  const w = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
  let et = 0, j = 0;
  const it = 980665e-8, pt = /* @__PURE__ */ new Map();
  if (R.densities && R.densities.size > 0) {
    const e = /* @__PURE__ */ new Map();
    R.densities.forEach((f, S) => {
      var _a2;
      const d = (_a2 = R.elasticities) == null ? void 0 : _a2.get(S);
      d !== void 0 && (e.has(d) || e.set(d, []), e.get(d).push(f));
    }), e.forEach((f, S) => {
      const d = f.reduce((M, T) => M + T, 0) / f.length, y = d > 100 ? d * it : d * 9.80665;
      pt.set(S, y);
    });
  }
  for (const e of D) {
    const f = e >= 1e8, S = f ? `Steel_${++et}` : `Conc_${++j}`;
    w.set(e, S), P.set(e, f);
    const d = pt.get(e) ?? (f ? 76.97 : 24), y = V(e), M = _(d), T = [];
    (_b = R.poissonsRatios) == null ? void 0 : _b.forEach((k, z) => {
      var _a2;
      ((_a2 = R.elasticities) == null ? void 0 : _a2.get(z)) === e && T.push(k);
    });
    const B = T.length > 0 ? T.reduce((k, z) => k + z, 0) / T.length : f ? 0.3 : 0.2, b = f ? 117e-7 : 1e-5;
    if (f) {
      r.push(`  MATERIAL  "${S}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${A(M)}`), r.push(`  MATERIAL  "${S}"    SYMTYPE "Isotropic"  E ${A(y)}  U ${B}  A ${b}`);
      const k = 345e3, z = 45e4;
      r.push(`  MATERIAL  "${S}"  FY ${A(V(k))}  FU ${A(V(z))}  FYE ${A(V(k * 1.1))}  FUE ${A(V(z * 1.1))}`);
    } else r.push(`  MATERIAL  "${S}"    TYPE "Concrete"    WEIGHTPERVOLUME ${A(M)}`), r.push(`  MATERIAL  "${S}"    SYMTYPE "Isotropic"  E ${A(y)}  U ${B}  A ${b}`), r.push(`  MATERIAL  "${S}"    FC ${A(V(24e3))}`);
  }
  r.push(""), r.push("$ FRAME SECTIONS");
  const St = /* @__PURE__ */ new Set(), Mt = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), ft = 0.05;
  x.forEach((e, f) => {
    var _a2, _b2, _c2, _d, _e, _f;
    if (e.length !== 2) return;
    const S = (_a2 = R.sectionShapes) == null ? void 0 : _a2.get(f), d = ((_b2 = R.elasticities) == null ? void 0 : _b2.get(f)) ?? 0, y = w.get(d) || "Conc_1", M = P.get(d) ?? d >= 1e8, T = ((_c2 = R.areas) == null ? void 0 : _c2.get(f)) ?? 0, B = ((_d = R.momentsOfInertiaY) == null ? void 0 : _d.get(f)) ?? 0;
    (_e = R.momentsOfInertiaZ) == null ? void 0 : _e.get(f), (_f = R.torsionalConstants) == null ? void 0 : _f.get(f);
    let b = (S == null ? void 0 : S.type) || "rect", k = (S == null ? void 0 : S.h) ?? 0, z = (S == null ? void 0 : S.b) ?? 0, ut = (S == null ? void 0 : S.d) ?? 0;
    const Ct = (S == null ? void 0 : S.tf) ?? 0, tt = (S == null ? void 0 : S.tw) ?? 0;
    k <= 0 && z <= 0 && ut <= 0 && T > 0 && (B > 0 ? (k = Math.sqrt(12 * B / T), z = T / k) : k = z = Math.sqrt(T), (!isFinite(k) || k < ft) && (k = ft), (!isFinite(z) || z < ft) && (z = ft), b = "rect"), k <= 0 && z <= 0 && ut <= 0 && (k = 0.3, z = 0.3, b = "rect");
    const lt = `${b}_${A(k)}_${A(z)}_${A(ut)}_${A(Ct)}_${A(tt)}_${y}`;
    (S == null ? void 0 : S.name) && !J.has(lt) && J.set(lt, S.name);
    let n = J.get(lt);
    if (!n) {
      const o = M ? "S" : "C";
      b === "rect" ? n = `${o}_R${Math.round(z * 100)}x${Math.round(k * 100)}` : b === "circ" ? n = `${o}_C_D${Math.round(ut * 100)}` : b === "I" ? n = `${o}_I${Math.round(k * 100)}x${Math.round(z * 100)}` : b === "HSS" ? n = `${o}_HSS${Math.round(z * 100)}x${Math.round(k * 100)}x${Math.round(tt * 1e3)}` : n = `${o}_Sec${St.size + 1}`, J.set(lt, n);
    }
    if (Mt.set(f, n), St.has(n)) return;
    St.add(n);
    let i;
    b === "I" ? i = "Steel I/Wide Flange" : b === "HSS" ? i = "Steel Tube" : b === "CFT" ? i = "Filled Steel Tube" : b === "pipe" ? i = "Steel Pipe" : b === "L" ? i = "Steel Angle" : b === "C" ? i = "Steel Channel" : b === "2C" ? i = "Steel Double Channel" : b === "circ" ? i = "Concrete Circle" : i = "Concrete Rectangular";
    let t = `  FRAMESECTION  "${n}"  MATERIAL "${y}"  SHAPE "${i}"`;
    k && (t += `  D ${A(k)}`), z && (t += `  B ${A(z)}`), ut && !k && (t += `  D ${A(ut)}`), Ct && (t += `  TF ${A(Ct)}`), tt && (t += `  TW ${A(tt)}`), r.push(t);
  }), r.push("");
  const st = /* @__PURE__ */ new Map();
  let mt = 0;
  O.forEach((e) => {
    const f = `${A(e[0])},${A(e[1])}`;
    st.has(f) || st.set(f, `${++mt}`);
  }), r.push("$ POINT COORDINATES");
  for (const [e, f] of st) {
    const [S, d] = e.split(",").map(Number);
    r.push(`  POINT "${f}"  ${S} ${d} `);
  }
  r.push("");
  const ct = (e) => {
    const f = O[e], S = `${A(f[0])},${A(f[1])}`;
    return { pt: st.get(S) || "1", story: F.get(A(f[2])) || "Base" };
  }, Pt = (e) => {
    var _a2, _b2, _c2, _d;
    const f = [], S = (_a2 = $.propertyModifiers) == null ? void 0 : _a2.get(e);
    S && S.some((T) => Math.abs(T - 1) > 1e-9) && f.push(`PROPMODIFIERS "${S.map((T) => A(T)).join(" ")}"`);
    const d = (_b2 = R.momentReleases) == null ? void 0 : _b2.get(e);
    if (d && d.some((T) => T)) {
      const T = [];
      d.length === 12 ? (d[0] && T.push("PI"), d[1] && T.push("V2I"), d[2] && T.push("V3I"), d[3] && T.push("TI"), d[4] && T.push("M2I"), d[5] && T.push("M3I"), d[6] && T.push("PJ"), d[7] && T.push("V2J"), d[8] && T.push("V3J"), d[9] && T.push("TJ"), d[10] && T.push("M2J"), d[11] && T.push("M3J")) : d.length === 6 && (d[0] && T.push("TI"), d[1] && T.push("M2I"), d[2] && T.push("M3I"), d[3] && T.push("TJ"), d[4] && T.push("M2J"), d[5] && T.push("M3J")), T.length > 0 && f.push(`RELEASE "${T.join(" ")}"`);
    }
    const y = (_c2 = R.insertionPoints) == null ? void 0 : _c2.get(e);
    y && (Math.abs(y[0]) > 1e-9 || Math.abs(y[1]) > 1e-9) && f.push(`LATEROFFSET ${A(y[0])} TRANSOFFSET ${A(y[1])}`);
    const M = (_d = R.rigidOffsets) == null ? void 0 : _d.get(e);
    return M && (Math.abs(M[0]) > 1e-9 || Math.abs(M[1]) > 1e-9) && f.push(`LENGTHOFFI ${A(M[0])} LENGTHOFFJ ${A(M[1])} RIGIDZONE 0.5`), f.length > 0 ? ` ${f.join(" ")} ` : "";
  }, xt = [], bt = /* @__PURE__ */ new Set(), Dt = /* @__PURE__ */ new Map();
  x.forEach((e, f) => {
    if (e.length !== 2) return;
    const S = wt(O, e);
    if (S === "BEAM") return;
    const d = O[e[0]][2] <= O[e[1]][2] ? e[0] : e[1], y = O[e[0]][2] <= O[e[1]][2] ? e[1] : e[0];
    if (Math.abs(O[d][0] - O[y][0]) > 1e-6 || Math.abs(O[d][1] - O[y][1]) > 1e-6) return;
    const M = ct(d), T = Mt.get(f) || `Sec_${f}`, B = `${M.pt}_${T}_${S}`;
    Dt.has(B) || Dt.set(B, []), Dt.get(B).push({ i: f, bot: d, top: y, zBot: A(O[d][2]), zTop: A(O[y][2]), planPt: M.pt, secName: T, type: S });
  }), Dt.forEach((e, f) => {
    e.sort((d, y) => d.zBot - y.zBot);
    let S = 0;
    for (let d = 1; d <= e.length; d++) if (d === e.length || Math.abs(e[d].zBot - e[d - 1].zTop) > 1e-6) {
      const M = e.slice(S, d);
      M.length >= 1 && (xt.push({ elemIndices: M.map((T) => T.i), planPt: M[0].planPt, bottomNodeIdx: M[0].bot, topNodeIdx: M[M.length - 1].top, secName: M[0].secName, type: M[0].type, nSegments: M.length }), M.forEach((T) => bt.add(T.i))), S = d;
    }
  }), r.push("$ LINE CONNECTIVITIES");
  const Ot = [];
  xt.forEach((e, f) => {
    const S = `C${f + 1}`, d = ct(e.topNodeIdx);
    ct(e.bottomNodeIdx);
    const y = A(O[e.topNodeIdx][2]), M = A(O[e.bottomNodeIdx][2]), T = E.indexOf(y), B = E.indexOf(M), b = Math.max(1, T - B), k = Pt(e.elemIndices[0]);
    r.push(`  LINE  "${S}"  ${e.type}  "${d.pt}"  "${d.pt}"  ${b}`), Ot.push(`  LINEASSIGN  "${S}"  "${d.story}"  SECTION "${e.secName}" ${k} RIGIDZONE 0 MAXSTASPC 0.5 MINNUMSTA ${e.nSegments} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  }), x.forEach((e, f) => {
    if (e.length !== 2 || bt.has(f)) return;
    const S = wt(O, e), d = Mt.get(f) || `Sec_${f}`, y = Pt(f);
    if (S === "BEAM") {
      const M = ct(e[0]), T = ct(e[1]);
      r.push(`  LINE  "E${f + 1}"  BEAM  "${M.pt}"  "${T.pt}"  0`), Ot.push(`  LINEASSIGN  "E${f + 1}"  "${M.story}"  SECTION "${d}" ${y} RIGIDZONE 0 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const M = O[e[0]][2] <= O[e[1]][2] ? e[0] : e[1], T = O[e[0]][2] <= O[e[1]][2] ? e[1] : e[0], B = ct(T), b = A(O[M][2]), k = A(O[T][2]), z = E.indexOf(b), ut = E.indexOf(k), Ct = Math.max(1, ut >= 0 && z >= 0 ? ut - z : 1);
      r.push(`  LINE  "E${f + 1}"  ${S}  "${B.pt}"  "${B.pt}"  ${Ct}`), Ot.push(`  LINEASSIGN  "E${f + 1}"  "${B.story}"  SECTION "${d}" ${y} RIGIDZONE 0 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    }
  }), r.push("");
  const At = $.weightMode ?? "auto", gt = /* @__PURE__ */ new Set();
  r.push("$ POINT ASSIGNS"), (_c = L.supports) == null ? void 0 : _c.forEach((e, f) => {
    const S = [];
    if (e[0] && S.push("UX"), e[1] && S.push("UY"), e[2] && S.push("UZ"), e[3] && S.push("RX"), e[4] && S.push("RY"), e[5] && S.push("RZ"), S.length > 0) {
      const d = ct(f), y = d.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      r.push(`  POINTASSIGN  "${d.pt}"  "${d.story}"  RESTRAINT "${S.join(" ")}" ${y} `), gt.add(`${d.pt}@${d.story}`);
    }
  }), xt.forEach((e) => {
    const f = ct(e.topNodeIdx), S = `${f.pt}@${f.story}`;
    W && !gt.has(S) && f.story !== "Base" && (r.push(`  POINTASSIGN  "${f.pt}"  "${f.story}"  DIAPH "D1"  `), gt.add(S));
  }), At === "manual" && L.loads && L.loads.forEach((e, f) => {
    const S = ct(f), d = `${S.pt}@${S.story}`;
    gt.has(d) || (r.push(`  POINTASSIGN  "${S.pt}"  "${S.story}"  DIAPH "DISCONNECTED"  `), gt.add(d));
  }), r.push(""), r.push("$ LINE ASSIGNS"), Ot.forEach((e) => r.push(e)), r.push("");
  const Tt = [];
  x.forEach((e, f) => {
    if (e.length === 4) {
      const S = O[e[0]], d = O[e[1]], y = O[e[2]], M = [d[0] - S[0], d[1] - S[1], d[2] - S[2]], T = [y[0] - S[0], y[1] - S[1], y[2] - S[2]], B = M[1] * T[2] - M[2] * T[1], b = M[2] * T[0] - M[0] * T[2], k = M[0] * T[1] - M[1] * T[0], z = Math.sqrt(B * B + b * b + k * k), ut = z > 1e-10 && Math.abs(k) / z < 0.5;
      Tt.push({ idx: f, el: e, isWall: ut });
    }
  });
  const Nt = (() => {
    for (const [e, f] of P) if (!f) return w.get(e);
    return w.values().next().value || "Conc_1";
  })(), $t = (e, f) => {
    var _a2;
    for (const S of Tt) if (e(S)) {
      const d = (_a2 = R.thicknesses) == null ? void 0 : _a2.get(S.idx);
      if (d !== void 0) return d;
    }
    return f;
  };
  if (Tt.some((e) => !e.isWall)) {
    r.push("$ SLAB PROPERTIES");
    const e = $t((f) => !f.isWall, 0.15);
    r.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${Nt}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${A(e)} `), r.push("");
  }
  if (Tt.some((e) => e.isWall)) {
    r.push("$ WALL PROPERTIES");
    const e = $t((f) => f.isWall, 0.2);
    r.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${Nt}"  MODELINGTYPE "ShellThin"  WALLTHICKNESS ${A(e)} `), r.push("");
  }
  const It = [];
  if (Tt.length > 0) {
    r.push("$ AREA CONNECTIVITIES");
    const e = [];
    Tt.forEach((f, S) => {
      const { el: d, isWall: y } = f, M = y ? `W${S + 1}` : `F${S + 1}`, T = y ? "PANEL" : "FLOOR", B = d.map((b) => ct(b));
      if (y) {
        const b = O[d[0]][2] <= O[d[2]][2] ? 0 : 2, k = O[d[1]][2] <= O[d[3]][2] ? 1 : 3;
        r.push(`  AREA "${M}"  ${T}  4  "${B[b].pt}"  "${B[k].pt}"  "${B[k].pt}"  "${B[b].pt}"  1  1  0  0  `);
        const z = B[b === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${M}"  "${z}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        r.push(`  AREA "${M}"  ${T}  4  "${B[0].pt}"  "${B[1].pt}"  "${B[2].pt}"  "${B[3].pt}"  0  0  0  0  `);
        const b = W ? ' DIAPH  "D1" ' : "";
        e.push(`  AREAASSIGN  "${M}"  "${B[0].story}"  SECTION "Losa" ${b} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), It.push({ aName: M, story: B[0].story, idx: f.idx, nodes: d });
      }
    }), r.push(""), r.push("$ AREA ASSIGNS"), e.forEach((f) => r.push(f)), r.push("");
  }
  const Ft = At === "manual" ? 0 : 1;
  r.push("$ LOAD PATTERNS"), r.push(`  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  ${Ft}`), r.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), r.push("");
  const Lt = /* @__PURE__ */ new Set(), Rt = [];
  let yt = 0;
  if (It.length > 0 && L.loads) {
    const e = (d) => {
      const y = d.map((z) => O[z]), M = [y[2][0] - y[0][0], y[2][1] - y[0][1], y[2][2] - y[0][2]], T = [y[3][0] - y[1][0], y[3][1] - y[1][1], y[3][2] - y[1][2]], B = M[1] * T[2] - M[2] * T[1], b = M[2] * T[0] - M[0] * T[2], k = M[0] * T[1] - M[1] * T[0];
      return 0.5 * Math.sqrt(B * B + b * b + k * k);
    };
    let f = 0, S = 0;
    for (const d of It) f += e(d.nodes), d.nodes.forEach((y) => Lt.add(y));
    if (Lt.forEach((d) => {
      const y = L.loads.get(d);
      y && (S += Math.abs(y[2]));
    }), yt = f > 1e-9 ? S / f : 0, yt > 1e-9) for (const d of It) Rt.push(`  AREALOAD  "${d.aName}"  "${d.story}"  TYPE "UNIFLOADSET"  "CargaLosa"`);
  }
  const ht = [];
  return L.loads && L.loads.size > 0 && L.loads.forEach((e, f) => {
    const [S, d, y] = e, M = ct(f);
    Math.abs(S) > 1e-10 && ht.push(`  POINTLOAD  "${M.pt}"  "${M.story}"  TYPE "FORCE"  LC "Dead"  FX ${A(X(S))}  FY 0  FZ 0`), Math.abs(d) > 1e-10 && ht.push(`  POINTLOAD  "${M.pt}"  "${M.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY ${A(X(d))}  FZ 0`), At === "manual" && Math.abs(y) > 1e-10 && !Lt.has(f) && ht.push(`  POINTLOAD  "${M.pt}"  "${M.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY 0  FZ ${A(X(y))}`);
  }), L.moments && L.moments.size > 0 && L.moments.forEach((e, f) => {
    const [S, d, y] = e, M = ct(f);
    Math.abs(S) > 1e-10 && ht.push(`  POINTLOAD  "${M.pt}"  "${M.story}"  TYPE "MOMENT"  LC "Dead"  MX ${A(X(S))}  MY 0  MZ 0`), Math.abs(d) > 1e-10 && ht.push(`  POINTLOAD  "${M.pt}"  "${M.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY ${A(X(d))}  MZ 0`), Math.abs(y) > 1e-10 && ht.push(`  POINTLOAD  "${M.pt}"  "${M.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY 0  MZ ${A(X(y))}`);
  }), Rt.length > 0 && (r.push("$ SHELL UNIFORM LOAD SETS"), r.push(`  SHELLUNIFORMLOADSET  "CargaLosa"  LOADPAT "Live"  VALUE ${A(X(yt))}`), r.push(""), r.push("$ SHELL OBJECT LOADS"), Rt.forEach((e) => r.push(e)), r.push("")), ht.length > 0 && (r.push("$ POINT OBJECT LOADS"), ht.forEach((e) => r.push(e)), r.push("")), r.push("$ ANALYSIS OPTIONS"), r.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), r.push('  PDELTA  METHOD "NONE"  '), r.push(""), r.push("$ MASS SOURCE"), r.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), r.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), r.push(""), r.push("$ LOAD CASES"), r.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), r.push('  LOADCASE "Dead"  LOADPAT  "Dead"  SF 1 '), r.push('  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), r.push('  LOADCASE "Live"  LOADPAT  "Live"  SF 1 '), r.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), r.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), r.push(""), r.push("$ LOAD COMBINATIONS"), r.push('  COMBO "1.4D"  TYPE "Linear Add"  '), r.push('  COMBO "1.4D"  LOADCASE  "Dead"  SF 1.4 '), r.push('  COMBO "1.2D+1.6L"  TYPE "Linear Add"  '), r.push('  COMBO "1.2D+1.6L"  LOADCASE  "Dead"  SF 1.2 '), r.push('  COMBO "1.2D+1.6L"  LOADCASE  "Live"  SF 1.6 '), r.push(""), r.push("  END"), r.push("$ END OF MODEL FILE"), r.join(`\r
`);
}
function wt($, O) {
  const x = $[O[0]], L = $[O[1]], R = Math.abs(L[2] - x[2]), v = Math.sqrt((L[0] - x[0]) ** 2 + (L[1] - x[1]) ** 2), q = R > v * 0.5;
  return q && v > 0.01 ? "BRACE" : q ? "COLUMN" : "BEAM";
}
export {
  _t as a,
  Wt as b,
  Ht as c,
  zt as d,
  Zt as e,
  Jt as p
};
