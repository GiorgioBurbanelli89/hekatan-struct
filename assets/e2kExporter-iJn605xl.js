const vt = { v: 0 };
function Gt() {
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
  function L(R, G) {
    var _a, _b, _c, _d, _e, _f;
    if (!R.frequencies || R.frequencies.length === 0) {
      $.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const q = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], J = [0, 0, 0, 0, 0, 0], N = R.frequencies.length;
    let Y = -1, r = -1, T = -1, Q = 0, X = 0;
    {
      const a = [0, 0, 0, 0, 0, 0];
      for (let h = 0; h < N; h++) {
        const u = ((_a = R.massParticipation) == null ? void 0 : _a[h]) || [0, 0, 0, 0, 0, 0];
        for (let D = 0; D < 6; D++) a[D] += u[D];
        Y < 0 && a[0] >= x && (Y = h + 1), r < 0 && a[1] >= x && (r = h + 1), T < 0 && a[0] >= x && a[1] >= x && (T = h + 1);
      }
      Q = a[0], X = a[1];
    }
    let _ = -1, W = -1, Z = -1;
    const y = 0.1;
    for (let a = 0; a < N; a++) {
      const h = ((_b = R.massParticipation) == null ? void 0 : _b[a]) || [0, 0, 0, 0, 0, 0];
      _ < 0 && h[0] > y && (_ = a + 1), W < 0 && h[1] > y && (W = a + 1), Z < 0 && h[5] > y && (Z = a + 1);
    }
    const M = T > 0 ? `<span style="color:#0f0">\u2713 ASCE 7-22 \xA712.9.1.1 \u2014 90 % alcanzado en X e Y al modo ${T} de ${N}</span>` : Y > 0 && r < 0 ? `<span style="color:#fa0">\u26A0 X cumple en modo ${Y}, Y todav\xEDa en ${(X * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : r > 0 && Y < 0 ? `<span style="color:#fa0">\u26A0 Y cumple en modo ${r}, X todav\xEDa en ${(Q * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : `<span style="color:#f44">\u2717 ASCE 7-22 NO cumplido en ${N} modos \xB7 \u03A3Ux=${(Q * 100).toFixed(1)} % \xB7 \u03A3Uy=${(X * 100).toFixed(1)} % \u2014 aumentar nModes</span>`, E = (() => {
      const a = (h, u) => {
        var _a2;
        if (h < 0) return `<span style="color:#f44">${u}: no encontrado en ${N} modos</span>`;
        const D = ((_a2 = R.massParticipation) == null ? void 0 : _a2[h - 1]) || [0, 0, 0, 0, 0, 0], F = u === "Ux" ? 0 : u === "Uy" ? 1 : 5, U = R.frequencies[h - 1] > 0 ? 1 / R.frequencies[h - 1] : 0;
        return `<span style="color:#0f0">${u}: modo ${h}, T=${U.toFixed(3)} s, MPF=${(D[F] * 100).toFixed(1)} %</span>`;
      };
      return `<div style="margin:4px 0; padding:4px 6px; background:rgba(0,255,255,0.05); border-left:2px solid #0ff; font-size:11px;">
  \u{1F3AF} <b>Modos s\xEDsmicos principales</b> (ASCE 7-22 \xA712.9.1):<br>
  ${a(_, "Ux")} \xB7 ${a(W, "Uy")} \xB7 ${a(Z, "Rz")}
</div>`;
    })();
    let o = `<div id="modal-header" style="flex:0 0 auto; display:flex; align-items:center; justify-content:space-between; padding:6px 10px; cursor:move; border-bottom:1px solid #0f04; background:rgba(0,0,0,0.4);">
  <b style="color:#ff0; font-size:12px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis">\u26A1 MODAL \u2014 ${G.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
    <button id="modal-close" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#7a2d2d; color:#fff; border:1px solid #b04545; border-radius:3px;" title="Cerrar (ocultar ventana)">\u2715</button>
  </div>
</div>`;
    if (o += '<div id="modal-body" style="flex:1 1 auto; min-height:0; overflow:auto; padding:6px 12px 10px 12px;">', o += `<div style="padding:6px 0; font-weight:bold; font-size:13px;">${M}</div>`, o += E, G.properties) for (const a of G.properties) o += `<span style="color:#888">${a}</span>
`;
    o += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const a of q) o += `<th style="padding:2px 5px">${a}</th>`;
    o += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let a = 0; a < 6; a++) J[a] = 0;
    if (R.frequencies.forEach((a, h) => {
      var _a2;
      const u = a > 0 ? 1 / a : 0, D = a * 2 * Math.PI, F = ((_a2 = R.massParticipation) == null ? void 0 : _a2[h]) || [0, 0, 0, 0, 0, 0];
      for (let st = 0; st < 6; st++) J[st] += F[st];
      let U = 0, b = F[0];
      for (let st = 1; st < 6; st++) F[st] > b && (b = F[st], U = st);
      const et = b < 0.05 ? "\u2014" : `${q[U]} (${(b * 100).toFixed(0)} %)`, j = U === 0 || U === 1 ? "#0f0" : U === 5 ? "#0ff" : U === 2 ? "#fa0" : "#888", it = h + 1 === Y, ft = h + 1 === r, mt = h + 1 === T;
      o += `<tr style="border-bottom:1px solid #fff1; ${mt ? "background:rgba(0,255,0,0.12);" : it || ft ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${h + 1}${mt ? " \u2605" : ""}</td>
  <td style="padding:2px 6px; text-align:right">${a.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${u.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${D.toFixed(2)}</td>`;
      for (let st = 0; st < 6; st++) {
        const At = (F[st] * 100).toFixed(1), ct = F[st] > 0.5 ? "#f00" : F[st] > 0.1 ? "#ff0" : "#0f0";
        o += `<td style="padding:2px 5px; text-align:right; color:${ct}">${At}%</td>`;
      }
      const V = J[0] >= x ? "#0f0" : "#0ff", dt = J[1] >= x ? "#0f0" : "#0ff";
      o += `<td style="padding:2px 5px; text-align:right; color:${V}">${(J[0] * 100).toFixed(1)}%${it ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${dt}">${(J[1] * 100).toFixed(1)}%${ft ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(J[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${j}">${et}</td></tr>`;
    }), o += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, o += "</div>", $.innerHTML = o, O) {
      const a = $.querySelector("#modal-body"), h = $.querySelector("#modal-minimize");
      a && (a.style.display = "none"), h && (h.textContent = "\u25A2", h.title = "Restaurar");
    }
    (_c = $.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      O = !O;
      const a = $.querySelector("#modal-body"), h = $.querySelector("#modal-minimize");
      O ? (a.style.display = "none", h.textContent = "\u25A2", h.title = "Restaurar") : (a.style.display = "block", h.textContent = "\u25AC", h.title = "Minimizar");
    }), (_d = $.querySelector("#modal-close")) == null ? void 0 : _d.addEventListener("click", () => {
      $.style.display = "none";
    }), (_e = $.querySelector("#modal-header")) == null ? void 0 : _e.addEventListener("mousedown", (a) => {
      if (a.target.tagName === "BUTTON") return;
      const h = $.getBoundingClientRect();
      $.style.bottom = "auto", $.style.top = `${h.top}px`, $.style.left = `${h.left}px`;
      const u = a.clientX - h.left, D = a.clientY - h.top, F = (b) => {
        $.style.left = `${Math.max(0, b.clientX - u)}px`, $.style.top = `${Math.max(0, b.clientY - D)}px`;
      }, U = () => {
        document.removeEventListener("mousemove", F), document.removeEventListener("mouseup", U);
      };
      document.addEventListener("mousemove", F), document.addEventListener("mouseup", U), a.preventDefault();
    }), (_f = $.querySelector("#modal-copy")) == null ? void 0 : _f.addEventListener("click", () => {
      const a = [];
      a.push(`Modal Analysis \u2014 ${G.title}`), a.push(M.replace(/<[^>]+>/g, ""));
      const h = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${q.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      a.push(h), a.push("-".repeat(h.length));
      const u = [0, 0, 0, 0, 0, 0];
      R.frequencies.forEach((F, U) => {
        var _a2;
        const b = F > 0 ? 1 / F : 0, et = F * 2 * Math.PI, j = ((_a2 = R.massParticipation) == null ? void 0 : _a2[U]) || [0, 0, 0, 0, 0, 0];
        for (let V = 0; V < 6; V++) u[V] += j[V];
        let it = 0, ft = j[0];
        for (let V = 1; V < 6; V++) j[V] > ft && (ft = j[V], it = V);
        const mt = ft < 0.05 ? "\u2014" : `${q[it]} (${(ft * 100).toFixed(0)}%)`, It = j.map((V) => ((V * 100).toFixed(1) + "%").padStart(6)).join(" ");
        a.push(`${String(U + 1).padStart(4)}  ${F.toFixed(4).padStart(9)}  ${b.toFixed(4).padStart(9)}  ${et.toFixed(2).padStart(9)}  ${It}  ${(u[0] * 100).toFixed(1).padStart(5)}%  ${(u[1] * 100).toFixed(1).padStart(5)}%  ${(u[5] * 100).toFixed(1).padStart(5)}%  ${mt}`);
      }), navigator.clipboard.writeText(a.join(`
`));
      const D = $.querySelector("#modal-copy");
      D.textContent = "\u2713", setTimeout(() => D.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: $, render: L };
}
function zt($) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
  const O = $.split(/\r?\n/), x = { force: "TONF", length: "M" }, L = [], R = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), J = [], N = [], Y = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), T = [], Q = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), _ = [], W = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), o = [];
  let l = "", a = "";
  const h = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  for (const i of O) {
    const c = i.trim();
    if (c.startsWith("$ ")) {
      a = c.substring(2).trim(), h.has(a) || h.set(a, []), u.has(a) || u.set(a, i);
      continue;
    }
    if (a && (h.has(a) || h.set(a, []), h.get(a).push(i)), !(!c || c.startsWith("$"))) {
      if (a === "CONTROLS") {
        const t = c.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        t && (x.force = t[1], x.length = t[2]);
        const n = c.match(/TITLE2\s+"([^"]+)"/);
        n && (l = n[1]);
      }
      if (a === "STORIES - IN SEQUENCE FROM TOP") {
        const t = c.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (t) {
          const n = t[1], s = t[2] ? parseFloat(t[2]) : 0, p = t[3] ? parseFloat(t[3]) : void 0;
          L.push({ name: n, height: s, elev: p ?? 0 });
        }
      }
      if (a === "MATERIAL PROPERTIES") {
        const t = c.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (t) {
          const n = t[1];
          R.has(n) || R.set(n, { type: t[2] || "", E: 0, G: 0, nu: 0 });
          const s = R.get(n);
          t[2] && (s.type = t[2]);
          const p = c.match(/\bE\s+([\d.eE+-]+)/);
          p && (s.E = parseFloat(p[1]));
          const g = c.match(/\bU\s+([\d.eE+-]+)/);
          g && (s.nu = parseFloat(g[1]), s.G = s.E / (2 * (1 + s.nu)));
          const A = c.match(/\bFY\s+([\d.eE+-]+)/);
          A && (s.fy = parseFloat(A[1]));
          const k = c.match(/\bFC\s+([\d.eE+-]+)/);
          k && (s.fc = parseFloat(k[1]));
          const v = c.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          v && (s.density = parseFloat(v[1]));
        }
      }
      if (a === "FRAME SECTIONS") {
        const t = c.match(/FRAMESECTION\s+"([^"]+)"/);
        if (t) {
          const n = t[1];
          G.has(n) || G.set(n, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
          const s = G.get(n), p = c.match(/MATERIAL\s+"([^"]+)"/);
          p && (s.material = p[1]);
          const g = c.match(/SHAPE\s+"([^"]+)"/);
          g && (s.shape = g[1]);
          const A = c.match(/\bD\s+([\d.eE+-]+)/);
          A && (s.D = parseFloat(A[1]));
          const k = c.match(/\bB\s+([\d.eE+-]+)/);
          k && (s.B = parseFloat(k[1]));
          const v = c.match(/\bTF\s+([\d.eE+-]+)/);
          v && (s.TF = parseFloat(v[1]));
          const ot = c.match(/\bTW\s+([\d.eE+-]+)/);
          ot && (s.TW = parseFloat(ot[1]));
          const at = c.match(/\bR\s+([\d.eE+-]+)/);
          at && (s.R = parseFloat(at[1]));
          const nt = c.match(/FILLMATERIAL\s+"([^"]+)"/);
          nt && (s.fillMaterial = nt[1]);
          const rt = c.match(/I2MOD\s+([\d.eE+-]+)/);
          rt && (s.modI2 = parseFloat(rt[1]));
          const ht = c.match(/I3MOD\s+([\d.eE+-]+)/);
          ht && (s.modI3 = parseFloat(ht[1]));
        }
      }
      if (a === "POINT COORDINATES") {
        const t = c.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        t && q.set(t[1], [parseFloat(t[2]), parseFloat(t[3])]);
      }
      if (a === "LINE CONNECTIVITIES") {
        const t = c.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        t && J.push({ name: t[1], type: t[2], pt1: t[3], pt2: t[4], nStories: parseInt(t[5]) });
      }
      if (a === "POINT ASSIGNS") {
        const t = c.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        t && Y.set(`${t[1]}@${t[2]}`, t[3].split(/\s+/));
      }
      if (a === "LINE ASSIGNS") {
        const t = c.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (t) {
          const n = { story: t[2], section: t[3], rigidZone: 0, releases: [], angle: 0 }, s = c.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          s && (n.rigidZone = parseFloat(s[1]));
          const p = c.match(/RELEASE\s+"([^"]+)"/);
          p && (n.releases = p[1].split(/\s+/));
          const g = c.match(/ANG\s+([-\d.eE+]+)/);
          g && (n.angle = parseFloat(g[1])), r.set(`${t[1]}@${t[2]}`, n);
        }
      }
      if (a === "GRIDS") {
        const t = c.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        t && o.push({ label: t[1], dir: t[2], coord: parseFloat(t[3]) });
      }
      if (a === "FRAME OBJECT LOADS") {
        const t = c.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        t && T.push({ line: t[1], story: t[2], type: t[3], dir: t[4], lc: t[5], val: parseFloat(t[6]) });
      }
      if (a === "AREA CONNECTIVITIES") {
        const t = c.match(/AREA\s+"([^"]+)"\s+(?:FLOOR|WALL|RAMP|PANEL)?\s*\d+\s+(.+)/);
        if (t) {
          const n = ((_a = t[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((p) => p.replace(/"/g, ""))) || [], s = (t[2].replace(/"[^"]*"/g, " ").trim().match(/-?\d+/g) || []).map(Number);
          N.push({ name: t[1], pts: n, nStories: 0, storyOffsets: s });
        }
      }
      if (a === "WALL/SLAB/DECK SECTIONS" || a === "SLAB PROPERTIES" || a === "WALL PROPERTIES" || a === "DECK PROPERTIES") {
        const t = c.match(/SHELLPROP\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const n = t[1], s = (_b = t[2].match(/SLABTHICKNESS\s+([\d.eE+-]+)/)) == null ? void 0 : _b[1], p = (_c = t[2].match(/WALLTHICKNESS\s+([\d.eE+-]+)/)) == null ? void 0 : _c[1], g = (_d = t[2].match(/MATERIAL\s+"([^"]+)"/)) == null ? void 0 : _d[1], A = (_e = t[2].match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _e[1];
          if (s || p) {
            const k = X.get(n) || { material: "", modelingType: "ShellThin" };
            X.set(n, { material: g ?? k.material, modelingType: A ?? k.modelingType, thickness: parseFloat(s ?? p ?? "0") });
          }
        }
      }
      if (a === "AREA ASSIGNS") {
        const t = c.match(/AREAASSIGN\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const n = t[1], s = t[2], p = t[3], g = ((_f = p.match(/SECTION\s+"([^"]+)"/)) == null ? void 0 : _f[1]) ?? "", A = ((_g = p.match(/CARDINALPOINT\s+"([^"]+)"/)) == null ? void 0 : _g[1]) ?? "CENTROID", k = ((_h = p.match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _h[1]) ?? "ShellThin";
          Q.set(`${n}@${s}`, { story: s, section: g, modelingType: k, cardinalPoint: A });
          const v = (_i = p.match(/SPRINGPROP\s+"([^"]+)"/)) == null ? void 0 : _i[1];
          v && M.set(`${n}@${s}`, v);
        }
      }
      if (a === "AREA SPRING PROPERTIES") {
        const t = c.match(/AREASPRING\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const n = t[1], s = t[2], p = parseFloat(((_j = s.match(/U1\s+([\d.eE+-]+)/)) == null ? void 0 : _j[1]) ?? "0"), g = parseFloat(((_k = s.match(/U2\s+([\d.eE+-]+)/)) == null ? void 0 : _k[1]) ?? "0"), A = parseFloat(((_l = s.match(/U3\s+([\d.eE+-]+)/)) == null ? void 0 : _l[1]) ?? "0");
          Z.set(n, { u1: p, u2: g, u3: A });
        }
      }
      if (a === "POINT SPRING PROPERTIES") {
        const t = c.match(/POINTSPRING\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const n = t[1], s = t[2], p = parseFloat(((_m = s.match(/UX\s+([\d.eE+-]+)/)) == null ? void 0 : _m[1]) ?? "0"), g = parseFloat(((_n = s.match(/UY\s+([\d.eE+-]+)/)) == null ? void 0 : _n[1]) ?? "0"), A = parseFloat(((_o = s.match(/UZ\s+([\d.eE+-]+)/)) == null ? void 0 : _o[1]) ?? "0");
          y.set(n, { ux: p, uy: g, uz: A });
        }
      }
      if (a === "POINT ASSIGNS") {
        const t = c.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/), n = (_q = (_p = t == null ? void 0 : t[3]) == null ? void 0 : _p.match(/SPRINGPROP\s+"([^"]+)"/)) == null ? void 0 : _q[1];
        t && n && E.set(`${t[1]}@${t[2]}`, n);
      }
      if (a === "SHELL UNIFORM LOAD SETS") {
        const t = c.match(/SHELLUNIFORMLOADSET\s+"([^"]+)"\s+LOADPAT\s+"([^"]+)"\s+VALUE\s+([\d.eE+-]+)/);
        if (t) {
          const n = t[1], s = t[2], p = parseFloat(t[3]);
          W.has(n) || W.set(n, []), W.get(n).push({ loadpat: s, value: p });
        }
      }
      if (a === "SHELL OBJECT LOADS") {
        const t = c.match(/AREALOAD\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const n = t[1], s = t[2], p = t[3], g = ((_r = p.match(/TYPE\s+"([^"]+)"/)) == null ? void 0 : _r[1]) ?? "";
          if (g === "UNIFLOADSET") {
            const A = ((_s = p.match(/UNIFLOADSET"\s+"([^"]+)"/)) == null ? void 0 : _s[1]) ?? ((_t = p.match(/"([^"]+)"\s*$/)) == null ? void 0 : _t[1]) ?? "";
            _.push({ area: n, story: s, type: "UNIFLOADSET", dir: "GRAV", lc: A, val: 0 });
          } else {
            const A = ((_u = p.match(/DIR\s+"([^"]+)"/)) == null ? void 0 : _u[1]) ?? "GRAV", k = ((_v = p.match(/LC\s+"([^"]+)"/)) == null ? void 0 : _v[1]) ?? "", v = parseFloat(((_w = p.match(/FVAL\s+([\d.eE+-]+)/)) == null ? void 0 : _w[1]) ?? "0");
            _.push({ area: n, story: s, type: g, dir: A, lc: k, val: v });
          }
        }
      }
    }
  }
  const D = [];
  for (const i of _) if (i.type === "UNIFLOADSET") {
    const c = W.get(i.lc);
    if (c) for (const t of c) D.push({ area: i.area, story: i.story, type: "UNIFF", dir: i.dir, lc: t.loadpat, val: t.value });
  } else D.push(i);
  _.length = 0, _.push(...D);
  const F = /* @__PURE__ */ new Map();
  if (L.length > 0) {
    const i = L.length - 1;
    F.set(L[i].name, L[i].elev);
    for (let c = i - 1; c >= 0; c--) {
      const n = F.get(L[c + 1].name) + L[c].height;
      L[c].elev = n, F.set(L[c].name, n);
    }
  }
  const U = [], b = [], et = /* @__PURE__ */ new Map(), j = (i, c) => `${i}@${c}`, it = /* @__PURE__ */ new Set(), ft = /* @__PURE__ */ new Map();
  for (const i of J) ft.set(i.name, i);
  for (const i of J) for (const [c, t] of r) {
    if (!c.startsWith(i.name + "@")) continue;
    const n = t.story, s = L.findIndex((p) => p.name === n);
    if (!(s < 0)) if (i.type === "COLUMN" || i.type === "BRACE") {
      it.add(j(i.pt2, n));
      const p = Math.max(i.nStories, 1), g = Math.min(s + p, L.length - 1);
      it.add(j(i.pt1, L[g].name));
    } else it.add(j(i.pt1, n)), it.add(j(i.pt2, n));
  }
  for (const [i] of Y) it.add(i);
  const mt = new Map(L.map((i, c) => [i.name, c])), It = (i, c) => {
    const t = mt.get(i);
    return t === void 0 ? i : L[Math.max(0, t - (c || 0))].name;
  };
  for (const i of N) for (const [c, t] of Q) if (c.startsWith(i.name + "@")) for (let n = 0; n < i.pts.length; n++) it.add(j(i.pts[n], It(t.story, ((_x = i.storyOffsets) == null ? void 0 : _x[n]) ?? 0)));
  for (const i of it) {
    const [c, t] = i.split("@"), n = q.get(c), s = F.get(t);
    n === void 0 || s === void 0 || (U.push([n[0], n[1], s]), b.push(i), et.set(i, U.length - 1));
  }
  const V = [], dt = [], st = [], At = [], ct = /* @__PURE__ */ new Map(), xt = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map();
  for (const i of J) for (const [c, t] of r) {
    if (!c.startsWith(i.name + "@")) continue;
    const n = t.story, s = L.findIndex((ot) => ot.name === n);
    if (s < 0) continue;
    let p, g;
    if (i.type === "COLUMN" || i.type === "BRACE") {
      const ot = Math.max(i.nStories, 1), at = Math.min(s + ot, L.length - 1);
      p = j(i.pt1, L[at].name), g = j(i.pt2, n);
    } else p = j(i.pt1, n), g = j(i.pt2, n);
    const A = et.get(p), k = et.get(g);
    if (A === void 0 || k === void 0 || A === k) continue;
    const v = V.length;
    if (V.push([A, k]), dt.push(i.name), st.push(i.type), At.push(n), ct.set(v, t.section), t.rigidZone > 0 && xt.set(v, [t.rigidZone, t.rigidZone]), t.releases.length > 0) {
      const ot = new Array(12).fill(false), at = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const nt of t.releases) {
        const rt = at[nt];
        rt !== void 0 && (ot[rt] = true);
      }
      yt.set(v, ot);
    }
  }
  const Ft = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map();
  for (const i of N) for (const [c, t] of Q) {
    if (!c.startsWith(i.name + "@")) continue;
    const n = [];
    for (let p = 0; p < i.pts.length; p++) {
      const g = j(i.pts[p], It(t.story, ((_y = i.storyOffsets) == null ? void 0 : _y[p]) ?? 0)), A = et.get(g);
      if (A === void 0) {
        n.length = 0;
        break;
      }
      n.push(A);
    }
    if (n.length !== 4 || new Set(n).size !== 4) continue;
    const s = V.length;
    V.push(n), dt.push(i.name), st.push("FLOOR"), At.push(t.story), Ft.set(s, t.section), Ct.set(s, t.cardinalPoint);
  }
  const gt = /* @__PURE__ */ new Map(), St = (i, c, t) => {
    if (!(t > 0)) return;
    const n = `${i}:${c}`;
    gt.set(n, (gt.get(n) ?? 0) + t);
  };
  for (let i = 0; i < V.length; i++) {
    const c = V[i];
    if (c.length !== 4) continue;
    const t = M.get(`${dt[i]}@${At[i]}`), n = t ? Z.get(t) : void 0;
    if (!n) continue;
    const s = c.map((v) => U[v]), p = [s[1][0] - s[0][0], s[1][1] - s[0][1]], g = [s[3][0] - s[0][0], s[3][1] - s[0][1]], k = Math.abs(p[0] * g[1] - p[1] * g[0]) / 4;
    for (const v of c) St(v, 0, n.u1 * k), St(v, 1, n.u2 * k), St(v, 2, n.u3 * k);
  }
  for (const [i, c] of E) {
    const t = et.get(i), n = y.get(c);
    t === void 0 || !n || (St(t, 0, n.ux), St(t, 1, n.uy), St(t, 2, n.uz));
  }
  const Mt = [];
  for (const [i, c] of gt) {
    const [t, n] = i.split(":").map(Number);
    Mt.push({ node: t, dof: n, k: c });
  }
  const Tt = /* @__PURE__ */ new Map();
  for (const i of _) if (i.type === "UNIFF") for (let c = 0; c < V.length; c++) {
    if (dt[c] !== i.area || At[c] !== i.story) continue;
    const t = V[c];
    if (t.length !== 4) continue;
    const n = t.map((k) => U[k]), s = [n[1][0] - n[0][0], n[1][1] - n[0][1]], p = [n[3][0] - n[0][0], n[3][1] - n[0][1]], g = Math.abs(s[0] * p[1] - s[1] * p[0]), A = -i.val * g / 4;
    for (const k of t) {
      const v = Tt.get(k) || [0, 0, 0, 0, 0, 0];
      v[2] += A, Tt.set(k, v);
    }
  }
  const $t = /* @__PURE__ */ new Map(), Ot = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), Dt = /* @__PURE__ */ new Map(), Lt = /* @__PURE__ */ new Map(), Rt = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
  for (const [i, c] of ct) {
    const t = G.get(c);
    if (!t) continue;
    const n = R.get(t.material);
    n && ($t.set(i, n.E), Ot.set(i, n.G));
    const s = t.D, p = t.B, g = t.TF, A = t.TW;
    let k = 0, v = 0, ot = 0, at = 0, nt = 0, rt = 0, ht = "rect";
    switch (t.shape) {
      case "Concrete Rectangular":
        k = s * p, v = p * s ** 3 / 12, ot = s * p ** 3 / 12, at = p * s ** 3 * (1 / 3 - 0.21 * (s / p) * (1 - s ** 4 / (12 * p ** 4))), nt = rt = 5 / 6 * k, ht = "rect";
        break;
      case "Concrete Circle":
        k = Math.PI * s ** 2 / 4, v = ot = Math.PI * s ** 4 / 64, at = Math.PI * s ** 4 / 32, nt = rt = 0.9 * k, ht = "circ";
        break;
      case "Steel I/Wide Flange":
        k = 2 * p * g + (s - 2 * g) * A, v = (p * s ** 3 - (p - A) * (s - 2 * g) ** 3) / 12, ot = (2 * g * p ** 3 + (s - 2 * g) * A ** 3) / 12, at = (2 * p * g ** 3 + (s - 2 * g) * A ** 3) / 3, nt = (s - 2 * g) * A, rt = 2 * p * g * 5 / 6, ht = "I";
        break;
      case "Steel Tube":
        k = s * p - (s - 2 * A) * (p - 2 * A), v = (p * s ** 3 - (p - 2 * A) * (s - 2 * A) ** 3) / 12, ot = (s * p ** 3 - (s - 2 * A) * (p - 2 * A) ** 3) / 12, at = 2 * A * (s - A) * (p - A) * ((s - A) * (p - A)) / (s - A + (p - A)), nt = 2 * s * A, rt = 2 * p * A, ht = "HSS";
        break;
      case "Filled Steel Tube":
        k = s * p, v = p * s ** 3 / 12, ot = s * p ** 3 / 12, at = 2 * A * (s - A) * (p - A) * ((s - A) * (p - A)) / (s - A + (p - A)), nt = 2 * s * A + 5 / 6 * (s - 2 * A) * (p - 2 * A), rt = 2 * p * A + 5 / 6 * (s - 2 * A) * (p - 2 * A), ht = "CFT";
        break;
      case "Steel Angle": {
        const Et = g || A;
        k = Et * (s + p - Et), v = Et * (s ** 3 + p * Et ** 2 + Et ** 2 * (s - Et)) / 12, ot = Et * (p ** 3 + s * Et ** 2 + Et ** 2 * (p - Et)) / 12, at = (s + p - Et) * Et ** 3 / 3, nt = s * Et, rt = p * Et, ht = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        k = 2 * p * g + (s - 2 * g) * A, v = (A * s ** 3 + 2 * p * g * (s - g) ** 2) / 12, ot = (2 * g * p ** 3 + (s - 2 * g) * A ** 3) / 12, at = (2 * p * g ** 3 + (s - 2 * g) * A ** 3) / 3, nt = (s - 2 * g) * A, rt = 2 * p * g * 5 / 6, ht = t.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        k = 2 * (2 * p * g + (s - 2 * g) * A), v = 2 * (A * s ** 3 + 2 * p * g * (s - g) ** 2) / 12, ot = 2 * (2 * g * p ** 3 + (s - 2 * g) * A ** 3) / 12, at = 2 * (2 * p * g ** 3 + (s - 2 * g) * A ** 3) / 3, nt = 2 * (s - 2 * g) * A, rt = 4 * p * g * 5 / 6, ht = "2C";
        break;
      default:
        s > 0 && p > 0 && (k = s * p, v = p * s ** 3 / 12, ot = s * p ** 3 / 12, at = Math.min(s, p) * Math.max(s, p) ** 3 / 3 * 0.3, nt = rt = 5 / 6 * k);
        break;
    }
    t.modI2 && (ot *= t.modI2), t.modI3 && (v *= t.modI3), Nt.set(i, k), Rt.set(i, v), ut.set(i, ot), e.set(i, at), nt > 0 && Dt.set(i, nt), rt > 0 && Lt.set(i, rt), f.set(i, { type: ht, b: p || void 0, h: s || void 0, d: ht === "circ" || ht === "pipe" ? s : void 0, tw: A || void 0, tf: g || void 0, r: t.R, name: c });
  }
  const S = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map();
  for (const [i, c] of Ft) {
    const t = X.get(c);
    if (!t) continue;
    S.set(i, t.thickness);
    const n = R.get(t.material);
    n && ($t.set(i, n.E), Ot.set(i, n.G), d.set(i, n.nu), n.density !== void 0 && m.set(i, n.density)), C.set(i, t.modelingType === "ShellThin" ? 1 : 0);
  }
  const I = /* @__PURE__ */ new Map();
  for (const [i, c] of Y) {
    const t = et.get(i);
    if (t === void 0) continue;
    const n = [false, false, false, false, false, false];
    for (const s of c) s === "UX" && (n[0] = true), s === "UY" && (n[1] = true), s === "UZ" && (n[2] = true), s === "RX" && (n[3] = true), s === "RY" && (n[4] = true), s === "RZ" && (n[5] = true);
    I.set(t, n);
  }
  const P = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map();
  for (let i = 0; i < dt.length; i++) B.set(`${dt[i]}@${At[i]}`, i);
  for (const i of T) {
    const c = B.get(`${i.line}@${i.story}`);
    if (c === void 0) continue;
    const [t, n] = V[c], s = U[t], p = U[n], g = Math.sqrt((p[0] - s[0]) ** 2 + (p[1] - s[1]) ** 2 + (p[2] - s[2]) ** 2);
    if (g < 1e-10) continue;
    const A = i.val * g / 2;
    let k = 0, v = 0, ot = 0;
    i.dir === "GRAV" || i.dir === "GRAVITY" ? ot = -A : i.dir === "X" ? k = A : i.dir === "Y" ? v = A : i.dir === "Z" && (ot = -A);
    for (const at of [t, n]) {
      const nt = P.get(at) || [0, 0, 0, 0, 0, 0];
      nt[0] += k, nt[1] += v, nt[2] += ot, P.set(at, nt);
    }
  }
  const w = /* @__PURE__ */ new Map();
  for (const [i, c] of ct) {
    const t = G.get(c);
    if (!t) continue;
    const n = R.get(t.material);
    (n == null ? void 0 : n.density) && w.set(i, n.density);
  }
  for (const [i, c] of m) w.set(i, c);
  for (const [i, c] of Tt) {
    const t = P.get(i) || [0, 0, 0, 0, 0, 0];
    P.set(i, [t[0] + c[0], t[1] + c[1], t[2] + c[2], t[3] + c[3], t[4] + c[4], t[5] + c[5]]);
  }
  const H = { M: 1, CM: 0.01, MM: 1e-3, FT: 0.3048, IN: 0.0254, INCH: 0.0254 }, pt = { KN: 1, N: 1e-3, TONF: 9.80665, TON: 9.80665, KGF: 980665e-8, KG: 980665e-8, KIP: 4.448222, LB: 4448222e-9 }, tt = H[(x.length || "M").toUpperCase()] ?? 1, lt = pt[(x.force || "KN").toUpperCase()] ?? 1;
  if (tt !== 1 || lt !== 1) {
    const i = lt / (tt * tt);
    for (const n of U) n[0] *= tt, n[1] *= tt, n[2] *= tt;
    for (const [n, s] of P) P.set(n, [s[0] * lt, s[1] * lt, s[2] * lt, s[3] * lt * tt, s[4] * lt * tt, s[5] * lt * tt]);
    const c = (n, s) => {
      for (const [p, g] of n) n.set(p, g * s);
    };
    c($t, i), c(Ot, i), c(Nt, tt * tt), c(Rt, tt ** 4), c(ut, tt ** 4), c(e, tt ** 4), c(Dt, tt * tt), c(Lt, tt * tt), c(S, tt), c(w, lt / tt ** 3);
    const t = lt / tt;
    for (const n of Mt) n.k *= t;
    x.force = "KN", x.length = "M";
  }
  return { units: x, stories: L.reverse(), materials: R, frameSections: G, nodes: U, nodeNames: b, nodeNameToIdx: et, elements: V, elementNames: dt, elementTypes: st, elementStories: At, elementSections: ct, nodeInputs: { supports: I, loads: P }, elementInputs: { elasticities: $t, shearModuli: Ot, areas: Nt, momentsOfInertiaZ: Rt, momentsOfInertiaY: ut, torsionalConstants: e, shearAreasY: Dt, shearAreasZ: Lt, rigidOffsets: xt, momentReleases: yt, densities: w, sectionShapes: f, thicknesses: S, poissonsRatios: d, plateFormulations: C }, sectionShapes: f, grids: o, springsList: Mt, info: { nNodes: U.length, nFrames: V.length, nAreas: N.length, title: l }, rawSections: h, rawSectionHeaders: u };
}
function z($) {
  return $ && parseFloat($) || 0;
}
function bt($) {
  const O = /* @__PURE__ */ new Map(), x = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let L;
  for (; (L = x.exec($)) !== null; ) O.set(L[1], L[2] !== void 0 ? L[2] : L[3]);
  return O;
}
function Ht($) {
  const O = $.split(/\r?\n/);
  return O.some((L) => L.trim().startsWith("TABLE:")) ? Yt(O) : Ut(O);
}
function Yt($) {
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
  const G = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), Y = [], r = [], T = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), _ = [];
  let W = "";
  for (const Z of O) {
    const y = Z.trim();
    if (!y || y.startsWith(";") || y.startsWith("File ")) continue;
    if (y.startsWith("TABLE:")) {
      const E = y.match(/TABLE:\s+"(.+?)"/);
      W = E ? E[1].toUpperCase() : "";
      continue;
    }
    if (y === "END TABLE DATA") {
      W = "";
      continue;
    }
    const M = bt(y);
    switch (W) {
      case "PROGRAM CONTROL": {
        const E = M.get("CurrUnits");
        if (E) {
          const o = E.split(",").map((l) => l.trim());
          o[0] && (L.force = o[0]), o[1] && (L.length = o[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const E = M.get("Material");
        E && !G.has(E) && G.set(E, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const E = M.get("Material");
        if (E) {
          const o = G.get(E) || { E: 0, nu: 0, G: 0 };
          o.E = z(M.get("E1")), o.G = z(M.get("G12")), o.nu = z(M.get("U12")), o.density = z(M.get("UnitMass")), G.set(E, o);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const E = M.get("Material");
        E && G.has(E) && (G.get(E).fy = z(M.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const E = M.get("SectionName");
        E && q.set(E, { material: M.get("Material") || "", shape: M.get("Shape") || "Rectangular", D: z(M.get("t3")), B: z(M.get("t2")), TF: z(M.get("tf")), TW: z(M.get("tw")), A: z(M.get("Area")), Iz: z(M.get("I33")), Iy: z(M.get("I22")), J: z(M.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const E = M.get("Section");
        E && J.set(E, { material: M.get("Material") || "", type: M.get("Type") || "Shell", thickness: z(M.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const E = M.get("Joint");
        if (E) {
          const o = z(M.get("XorR")), l = z(M.get("Y")), a = z(M.get("Z"));
          N.set(E, [o, l, a]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const E = M.get("Frame"), o = M.get("JointI"), l = M.get("JointJ");
        E && o && l && Y.push({ name: E, j1: o, j2: l });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const E = M.get("Area");
        if (E) {
          const o = parseInt(M.get("NumJoints") || "4"), l = [];
          for (let a = 1; a <= o; a++) {
            const h = M.get(`Joint${a}`);
            h && l.push(h);
          }
          l.length >= 3 && r.push({ name: E, joints: l });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const E = M.get("Joint");
        if (E) {
          const o = [((_a = M.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = M.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = M.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = M.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = M.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = M.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          T.set(E, o);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const E = M.get("Frame"), o = M.get("AnalSect");
        E && o && Q.set(E, o);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const E = M.get("Area"), o = M.get("Section");
        E && o && X.set(E, o);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const E = M.get("Joint");
        E && _.push({ joint: E, fx: z(M.get("F1")), fy: z(M.get("F2")), fz: z(M.get("F3")), mx: z(M.get("M1")), my: z(M.get("M2")), mz: z(M.get("M3")) });
        break;
      }
    }
  }
  return wt(L, R, G, q, J, N, Y, r, T, Q, X, _);
}
function Ut($) {
  const O = { force: "KN", length: "m" };
  let x = "UX,UY,UZ,RX,RY,RZ";
  const L = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), J = [], N = [], Y = /* @__PURE__ */ new Map(), r = [];
  let T = "", Q = "";
  for (const W of $) {
    const Z = W.trim();
    if (!Z || Z.startsWith(";")) continue;
    if (!W.startsWith(" ") && !W.startsWith("	")) {
      const E = Z.toUpperCase();
      if (E === "END") break;
      E.startsWith("SHELL SECTION") ? T = "SHELL SECTION" : E.startsWith("FRAME SECTION") ? T = "FRAME SECTION" : T = E.split(/\s+/)[0];
      continue;
    }
    const y = bt(Z), M = Z.split(/\s+/);
    switch (T) {
      case "SYSTEM": {
        const E = y.get("DOF");
        E && (x = E);
        const o = y.get("LENGTH");
        o && (O.length = o);
        const l = y.get("FORCE");
        l && (O.force = l);
        break;
      }
      case "JOINT": {
        const E = M[0];
        q.set(E, [z(y.get("X")), z(y.get("Y")), z(y.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const E = y.get("ADD"), o = y.get("DOF");
        if (E && o) {
          const l = o.split(","), a = [false, false, false, false, false, false];
          for (const h of l) {
            const u = h.toUpperCase();
            (u === "UX" || u === "U1") && (a[0] = true), (u === "UY" || u === "U2") && (a[1] = true), (u === "UZ" || u === "U3") && (a[2] = true), (u === "RX" || u === "R1") && (a[3] = true), (u === "RY" || u === "R2") && (a[4] = true), (u === "RZ" || u === "R3") && (a[5] = true);
          }
          Y.set(E, a);
        }
        break;
      }
      case "MATERIAL": {
        const E = y.get("NAME");
        if (E) Q = E, L.set(E, { E: 0, nu: 0, G: 0 });
        else if (Q) {
          const o = L.get(Q), l = y.get("E");
          l && (o.E = z(l));
          const a = y.get("U");
          a && (o.nu = z(a)), o.G = o.E / (2 * (1 + o.nu));
          const h = y.get("M");
          h && (o.density = z(h));
        }
        break;
      }
      case "SHELL": {
        const E = M[0], o = y.get("J");
        y.get("SEC"), o && N.push({ name: E, joints: o.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const E = y.get("NAME");
        E && G.set(E, { material: y.get("MAT") || "", type: y.get("TYPE") || "Shell", thickness: z(y.get("TH")) });
        break;
      }
      case "FRAME": {
        const E = M[0], o = y.get("J");
        if (o) {
          const l = o.split(",");
          l.length >= 2 && J.push({ name: E, j1: l[0], j2: l[1] });
        }
        break;
      }
      case "LOAD": {
        const E = y.get("ADD");
        E && r.push({ joint: E, fx: z(y.get("UX")), fy: z(y.get("UY")), fz: z(y.get("UZ")), mx: z(y.get("MX")), my: z(y.get("MY")), mz: z(y.get("MZ")) });
        break;
      }
    }
  }
  return wt(O, x, L, R, G, q, J, N, Y, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), r);
}
function wt($, O, x, L, R, G, q, J, N, Y, r, T) {
  var _a;
  const Q = [], X = /* @__PURE__ */ new Map(), _ = [];
  for (const [u, D] of G) X.set(u, _.length), Q.push(u), _.push(D);
  const W = [], Z = [], y = /* @__PURE__ */ new Map();
  for (const u of q) {
    const D = X.get(u.j1), F = X.get(u.j2);
    if (D !== void 0 && F !== void 0) {
      const U = W.length;
      W.push([D, F]), Z.push(u.name);
      const b = Y.get(u.name);
      b && y.set(U, b);
    }
  }
  const M = W.length;
  for (const u of J) {
    const D = u.joints.map((F) => X.get(F)).filter((F) => F !== void 0);
    if (D.length >= 3) {
      const F = W.length;
      W.push(D), Z.push(u.name);
      const U = r.get(u.name);
      U && y.set(F, U);
    }
  }
  const E = W.length - M, o = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, l = /* @__PURE__ */ new Map(), a = x.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let u = 0; u < W.length; u++) {
    const D = y.get(u), F = D ? L.get(D) : null, U = D ? R.get(D) : null;
    if (F || W[u].length === 2) {
      const b = F || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, et = x.get(b.material) || a, j = et.E || a.E, it = et.nu || 0.3, ft = et.G || j / (2 * (1 + it));
      o.elasticities.set(u, j), o.shearModuli.set(u, ft), o.areas.set(u, b.A || b.D * b.B), o.momentsOfInertiaZ.set(u, b.Iz || b.B * b.D ** 3 / 12), o.momentsOfInertiaY.set(u, b.Iy || b.D * b.B ** 3 / 12), o.torsionalConstants.set(u, b.J || 0), o.densities.set(u, et.density || 0), ((_a = b.shape) == null ? void 0 : _a.includes("Wide Flange")) || b.shape === "I" ? l.set(u, { type: "I", b: b.B, h: b.D, name: D || "I-section" }) : l.set(u, { type: "rect", b: b.B, h: b.D });
    } else if (U) {
      const b = x.get(U.material) || a, et = b.E || a.E, j = b.nu || 0.2, it = b.G || et / (2 * (1 + j));
      o.elasticities.set(u, et), o.shearModuli.set(u, it), o.thicknesses.set(u, U.thickness), o.poissonsRatios.set(u, j), o.densities.set(u, b.density || 0);
    }
  }
  const h = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [u, D] of N) {
    const F = X.get(u);
    F !== void 0 && h.supports.set(F, D);
  }
  for (const u of T) {
    const D = X.get(u.joint);
    if (D !== void 0) {
      const F = h.forces.get(D) || [0, 0, 0, 0, 0, 0];
      F[0] += u.fx, F[1] += u.fy, F[2] += u.fz, F[3] += u.mx, F[4] += u.my, F[5] += u.mz, h.forces.set(D, F);
    }
  }
  return { units: $, dof: O, materials: x, frameSections: L, shellSections: R, nodes: _, nodeNames: Q, nodeNameToIdx: X, elements: W, elementNames: Z, elementSections: y, nodeInputs: h, elementInputs: o, sectionShapes: l, info: { nNodes: _.length, nFrames: M, nShells: E, title: `SAP2000 (${M} frames, ${E} shells)` } };
}
function Jt($) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: O, elements: x, nodeInputs: L, elementInputs: R } = $, G = $.units || { force: "KN", length: "m" }, q = $.title || "Awatif Model", J = [], N = (o) => J.push(o), Y = () => J.push(" ");
  N(`File ${q}.$2k was saved on m/d/yy at h:mm:ss`), Y(), N('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), N("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), Y();
  const r = [], T = [];
  if (x.forEach((o, l) => {
    o.length === 2 ? r.push(l) : T.push(l);
  }), r.length > 0) {
    N('TABLE:  "CONNECTIVITY - FRAME"');
    for (const o of r) {
      const l = x[o];
      N(`   Frame=${o + 1}   JointI=${l[0] + 1}   JointJ=${l[1] + 1}   IsCurved=No`);
    }
    Y();
  }
  if (T.length > 0) {
    N('TABLE:  "CONNECTIVITY - AREA"');
    for (const o of T) {
      const l = x[o], a = l.map((h, u) => `Joint${u + 1}=${h + 1}`).join("   ");
      N(`   Area=${o + 1}   NumJoints=${l.length}   ${a}`);
    }
    Y();
  }
  N('TABLE:  "COORDINATE SYSTEMS"'), N("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), Y(), N('TABLE:  "DATABASE FORMAT TYPES"'), N("   UnitsCurr=Yes   OverrideE=No"), Y();
  const Q = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map();
  for (const o of r) {
    const l = ((_a = R.areas) == null ? void 0 : _a.get(o)) || 0, a = ((_b = R.momentsOfInertiaZ) == null ? void 0 : _b.get(o)) || 0, h = ((_c = R.momentsOfInertiaY) == null ? void 0 : _c.get(o)) || 0, u = ((_d = R.torsionalConstants) == null ? void 0 : _d.get(o)) || 0, D = ((_e = R.elasticities) == null ? void 0 : _e.get(o)) || 0, F = `MAT_${Math.round(D)}`, U = `A${l.toPrecision(6)}_Iz${a.toPrecision(6)}`;
    if (!Q.has(U)) {
      let et = 0.3, j = 0.3;
      l > 0 && a > 0 && (et = Math.sqrt(12 * a / l), j = l / et), Q.set(U, { A: l, Iz: a, Iy: h, J: u, b: j, h: et, matKey: F });
    }
    const b = [...Q.keys()].indexOf(U) + 1;
    X.set(o, `SEC${b}`);
  }
  if (r.length > 0) {
    N('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const o of r) {
      const l = X.get(o) || "SEC1";
      N(`   Frame=${o + 1}   AutoSelect=N.A.   AnalSect=${l}   MatProp=Default`);
    }
    Y();
  }
  if (Q.size > 0) {
    N('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let o = 0;
    for (const [, l] of Q) {
      o++;
      const a = l.A * 5 / 6;
      N(`   SectionName=SEC${o}   Material=${l.matKey}   Shape=Rectangular   t3=${K(l.h)}   t2=${K(l.b)}   Area=${K(l.A)}   TorsConst=${K(l.J)}   I33=${K(l.Iz)}   I22=${K(l.Iy)}   I23=0   AS2=${K(a)}   AS3=${K(a)} _`), N("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    Y();
  }
  const _ = !!$.layeredSection && T.length > 0, W = $.layeredSection, Z = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
  if (!_) for (const o of T) {
    const l = ((_f = R.thicknesses) == null ? void 0 : _f.get(o)) || 0.1, a = ((_g = R.elasticities) == null ? void 0 : _g.get(o)) || 0, h = `MAT_${Math.round(a)}`, u = `t${l.toPrecision(6)}`;
    Z.has(u) || Z.set(u, { t: l, matKey: h });
    const D = [...Z.keys()].indexOf(u) + 1;
    y.set(o, `SSEC${D}`);
  }
  if (T.length > 0) {
    N('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const o of T) {
      const l = _ ? W.name : y.get(o) || "SSEC1";
      N(`   Area=${o + 1}   Section=${l}   MatProp=Default`);
    }
    if (Y(), N('TABLE:  "AREA SECTION PROPERTIES"'), _) {
      const o = W, l = ((_h = o.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      N(`   Section=${o.name}   Material=${l}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${K(o.totalThickness)}   BendThick=${K(o.totalThickness)}   Color=Magenta`);
    } else {
      let o = 0;
      for (const [, l] of Z) o++, N(`   Section=SSEC${o}   Material=${l.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${K(l.t)}   BendThick=${K(l.t)}   Color=Cyan`);
    }
    if (Y(), _) {
      N('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const o = W;
      for (const l of o.layers) {
        const a = l.angle ?? 0, h = l.numIntPts ?? 3;
        N(`   Section=${o.name}   LayerName=${l.name}   Distance=${K(l.distance)}   Thickness=${K(l.thickness)}   Type=Shell   NumIntPts=${h}   Material=${l.material}   MatAngle=${K(a * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      Y();
    }
  }
  N('TABLE:  "JOINT COORDINATES"');
  for (let o = 0; o < O.length; o++) {
    const l = O[o];
    N(`   Joint=${o + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${K(l[0])}   Y=${K(l[1])}   Z=${K(l[2])}   SpecialJt=No`);
  }
  if (Y(), L.supports && L.supports.size > 0) {
    N('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [o, l] of L.supports) {
      if (!l.some((h) => h)) continue;
      const a = (h) => h ? "Yes" : "No";
      N(`   Joint=${o + 1}   U1=${a(l[0])}   U2=${a(l[1])}   U3=${a(l[2])}   R1=${a(l[3])}   R2=${a(l[4])}   R3=${a(l[5])}`);
    }
    Y();
  }
  const M = $.selfWtMult ?? 1;
  if (N('TABLE:  "LOAD PATTERN DEFINITIONS"'), N(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${M}`), Y(), N('TABLE:  "LOAD CASE DEFINITIONS"'), N('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), Y(), N('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), N('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), Y(), L.loads && L.loads.size > 0) {
    N('TABLE:  "JOINT LOADS - FORCE"');
    for (const [o, l] of L.loads) l.some((a) => Math.abs(a) > 1e-12) && N(`   Joint=${o + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${K(l[0])}   F2=${K(l[1])}   F3=${K(l[2])}   M1=${K(l[3])}   M2=${K(l[4])}   M3=${K(l[5])}`);
    Y();
  }
  const E = /* @__PURE__ */ new Map();
  for (let o = 0; o < x.length; o++) {
    const l = ((_i = R.elasticities) == null ? void 0 : _i.get(o)) || 0, a = ((_j = R.shearModuli) == null ? void 0 : _j.get(o)) || 0, h = l > 0 && a > 0 ? Math.max(0, Math.min(0.5, l / (2 * a) - 1)) : 0.2, u = ((_k = R.densities) == null ? void 0 : _k.get(o)) || 0, D = `MAT_${Math.round(l)}`;
    E.has(D) || E.set(D, { E: l, nu: h, G: a, rho: u });
  }
  N('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [o] of E) N(`   Material=${o}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  Y(), N('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [o, l] of E) N(`   Material=${o}   UnitWeight=${K(l.rho * 9.81)}   UnitMass=${K(l.rho)}   E1=${K(l.E)}   G12=${K(l.G)}   U12=${K(l.nu)}   A1=9.9E-06`);
  Y(), N('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [o] of E) N(`   Material=${o}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return Y(), N('TABLE:  "PROGRAM CONTROL"'), N(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${G.force}, ${G.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), Y(), N("END TABLE DATA"), N(""), J.join(`\r
`);
}
function K($) {
  return $ === 0 || Math.abs($) < 1e-15 ? "0" : Math.abs($) >= 1e6 || Math.abs($) < 1e-3 && Math.abs($) > 0 ? $.toExponential(8) : parseFloat($.toPrecision(10)).toString();
}
function Wt($) {
  const { nodes: O, elements: x, nodeInputs: L, elementInputs: R, title: G, e2kModel: q } = $, J = q == null ? void 0 : q.rawSections;
  return J && J.size > 0 ? kt(J, q) : Bt($);
}
function kt($, O) {
  const x = [], L = O == null ? void 0 : O.rawSectionHeaders;
  for (const [R, G] of $) {
    x.push((L == null ? void 0 : L.get(R)) ?? `$ ${R}`);
    for (const q of G) x.push(q);
  }
  return $.has("END OF MODEL FILE") || (x.push("  END"), x.push("$ END OF MODEL FILE")), x.join(`\r
`);
}
function Bt($) {
  var _a, _b, _c;
  const { nodes: O, elements: x, nodeInputs: L, elementInputs: R, title: G, units: q } = $, J = $.rigidDiaphragm ?? false, N = (q == null ? void 0 : q.force) || "Tonf", Y = (q == null ? void 0 : q.length) || "m", r = [], T = (e) => Math.round(e * 1e4) / 1e4, Q = (() => {
    const e = (N || "Tonf").toLowerCase();
    return e === "tonf" || e === "tonf-f" ? 1 / 9.80665 : e === "kn" || e === "kn-f" ? 1 : e === "kgf" || e === "kg" ? 1 / 980665e-8 : e === "kip" || e === "kips" ? 1 / 4.44822 : 1;
  })(), X = (e) => e * Q, _ = (e) => e * Q, W = (e) => e * Q, Z = /* @__PURE__ */ new Date(), y = `${Z.getMonth() + 1}/${Z.getDate()}/${Z.getFullYear()}  ${Z.getHours()}:${String(Z.getMinutes()).padStart(2, "0")}:${String(Z.getSeconds()).padStart(2, "0")}`;
  r.push(`$ File   "Hekatan_export.e2k"  saved ${y} in ETABS 22.6.0`), r.push(""), r.push("$ PROGRAM INFORMATION"), r.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), r.push(""), r.push("$ CONTROLS"), r.push(`  UNITS  "${N}"  "${Y}"  "C"  `), r.push('  TITLE1  "Hekatan Struct export"  '), G && r.push(`  TITLE2  "${G}"  `), r.push("  PREFERENCE  MERGETOL 0.001"), r.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), r.push("");
  const M = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set();
  O.forEach((e) => {
    M.add(T(e[0])), E.add(T(e[1]));
  });
  const o = [...M].sort((e, f) => e - f), l = [...E].sort((e, f) => e - f);
  r.push("$ GRIDS"), r.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), o.forEach((e, f) => {
    const S = f < 26 ? String.fromCharCode(65 + f) : String.fromCharCode(65 + f % 26).repeat(Math.floor(f / 26) + 1);
    r.push(`  GRID "G1"  LABEL "${S}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), l.forEach((e, f) => {
    r.push(`  GRID "G1"  LABEL "${f + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), r.push("");
  const a = /* @__PURE__ */ new Set();
  O.forEach((e) => a.add(T(e[2])));
  let h = [...a].sort((e, f) => e - f);
  if (h.length === 1) {
    const e = h[0];
    e > 0 ? h = [0, e] : h = [0, 4];
  }
  const u = [], D = /* @__PURE__ */ new Map();
  u.push("Base"), D.set(h[0], "Base");
  for (let e = 1; e < h.length; e++) {
    const f = `Story${e}`;
    u.push(f), D.set(h[e], f);
  }
  a.size === 1 && a.has(0) && D.set(0, u[1]), r.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = h.length - 1; e >= 1; e--) r.push(`  STORY "${u[e]}"  HEIGHT ${T(h[e] - h[e - 1])} MASTERSTORY "Yes"  `);
  h.length > 0 && r.push(`  STORY "Base"  ELEV ${h[0]} `), r.push(""), x.some((e) => e.length === 4), J && (r.push("$ DIAPHRAGM NAMES"), r.push('  DIAPHRAGM "D1"    TYPE RIGID'), r.push("")), r.push("$ MATERIAL PROPERTIES");
  const F = /* @__PURE__ */ new Set();
  (_a = R.elasticities) == null ? void 0 : _a.forEach((e) => F.add(e));
  const U = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map();
  let et = 0, j = 0;
  const it = 980665e-8, ft = /* @__PURE__ */ new Map();
  if (R.densities && R.densities.size > 0) {
    const e = /* @__PURE__ */ new Map();
    R.densities.forEach((f, S) => {
      var _a2;
      const d = (_a2 = R.elasticities) == null ? void 0 : _a2.get(S);
      d !== void 0 && (e.has(d) || e.set(d, []), e.get(d).push(f));
    }), e.forEach((f, S) => {
      const d = f.reduce((m, I) => m + I, 0) / f.length, C = d > 100 ? d * it : d * 9.80665;
      ft.set(S, C);
    });
  }
  for (const e of F) {
    const f = e >= 1e8, S = f ? `Steel_${++et}` : `Conc_${++j}`;
    U.set(e, S), b.set(e, f);
    const d = ft.get(e) ?? (f ? 76.97 : 24), C = _(e), m = W(d), I = [];
    (_b = R.poissonsRatios) == null ? void 0 : _b.forEach((w, H) => {
      var _a2;
      ((_a2 = R.elasticities) == null ? void 0 : _a2.get(H)) === e && I.push(w);
    });
    const P = I.length > 0 ? I.reduce((w, H) => w + H, 0) / I.length : f ? 0.3 : 0.2, B = f ? 117e-7 : 1e-5;
    if (f) {
      r.push(`  MATERIAL  "${S}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${T(m)}`), r.push(`  MATERIAL  "${S}"    SYMTYPE "Isotropic"  E ${T(C)}  U ${P}  A ${B}`);
      const w = 345e3, H = 45e4;
      r.push(`  MATERIAL  "${S}"  FY ${T(_(w))}  FU ${T(_(H))}  FYE ${T(_(w * 1.1))}  FUE ${T(_(H * 1.1))}`);
    } else r.push(`  MATERIAL  "${S}"    TYPE "Concrete"    WEIGHTPERVOLUME ${T(m)}`), r.push(`  MATERIAL  "${S}"    SYMTYPE "Isotropic"  E ${T(C)}  U ${P}  A ${B}`), r.push(`  MATERIAL  "${S}"    FC ${T(_(24e3))}`);
  }
  r.push(""), r.push("$ FRAME SECTIONS");
  const mt = /* @__PURE__ */ new Set(), It = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), dt = 0.05;
  x.forEach((e, f) => {
    var _a2, _b2, _c2, _d, _e, _f;
    if (e.length !== 2) return;
    const S = (_a2 = R.sectionShapes) == null ? void 0 : _a2.get(f), d = ((_b2 = R.elasticities) == null ? void 0 : _b2.get(f)) ?? 0, C = U.get(d) || "Conc_1", m = b.get(d) ?? d >= 1e8, I = ((_c2 = R.areas) == null ? void 0 : _c2.get(f)) ?? 0, P = ((_d = R.momentsOfInertiaY) == null ? void 0 : _d.get(f)) ?? 0;
    (_e = R.momentsOfInertiaZ) == null ? void 0 : _e.get(f), (_f = R.torsionalConstants) == null ? void 0 : _f.get(f);
    let B = (S == null ? void 0 : S.type) || "rect", w = (S == null ? void 0 : S.h) ?? 0, H = (S == null ? void 0 : S.b) ?? 0, pt = (S == null ? void 0 : S.d) ?? 0;
    const tt = (S == null ? void 0 : S.tf) ?? 0, lt = (S == null ? void 0 : S.tw) ?? 0;
    w <= 0 && H <= 0 && pt <= 0 && I > 0 && (P > 0 ? (w = Math.sqrt(12 * P / I), H = I / w) : w = H = Math.sqrt(I), (!isFinite(w) || w < dt) && (w = dt), (!isFinite(H) || H < dt) && (H = dt), B = "rect"), w <= 0 && H <= 0 && pt <= 0 && (w = 0.3, H = 0.3, B = "rect");
    const i = `${B}_${T(w)}_${T(H)}_${T(pt)}_${T(tt)}_${T(lt)}_${C}`;
    (S == null ? void 0 : S.name) && !V.has(i) && V.set(i, S.name);
    let c = V.get(i);
    if (!c) {
      const s = m ? "S" : "C";
      B === "rect" ? c = `${s}_R${Math.round(H * 100)}x${Math.round(w * 100)}` : B === "circ" ? c = `${s}_C_D${Math.round(pt * 100)}` : B === "I" ? c = `${s}_I${Math.round(w * 100)}x${Math.round(H * 100)}` : B === "HSS" ? c = `${s}_HSS${Math.round(H * 100)}x${Math.round(w * 100)}x${Math.round(lt * 1e3)}` : c = `${s}_Sec${mt.size + 1}`, V.set(i, c);
    }
    if (It.set(f, c), mt.has(c)) return;
    mt.add(c);
    let t;
    B === "I" ? t = "Steel I/Wide Flange" : B === "HSS" ? t = "Steel Tube" : B === "CFT" ? t = "Filled Steel Tube" : B === "pipe" ? t = "Steel Pipe" : B === "L" ? t = "Steel Angle" : B === "C" ? t = "Steel Channel" : B === "2C" ? t = "Steel Double Channel" : B === "circ" ? t = "Concrete Circle" : t = "Concrete Rectangular";
    let n = `  FRAMESECTION  "${c}"  MATERIAL "${C}"  SHAPE "${t}"`;
    w && (n += `  D ${T(w)}`), H && (n += `  B ${T(H)}`), pt && !w && (n += `  D ${T(pt)}`), tt && (n += `  TF ${T(tt)}`), lt && (n += `  TW ${T(lt)}`), r.push(n);
  }), r.push("");
  const st = /* @__PURE__ */ new Map();
  let At = 0;
  O.forEach((e) => {
    const f = `${T(e[0])},${T(e[1])}`;
    st.has(f) || st.set(f, `${++At}`);
  }), r.push("$ POINT COORDINATES");
  for (const [e, f] of st) {
    const [S, d] = e.split(",").map(Number);
    r.push(`  POINT "${f}"  ${S} ${d} `);
  }
  r.push("");
  const ct = (e) => {
    const f = O[e], S = `${T(f[0])},${T(f[1])}`;
    return { pt: st.get(S) || "1", story: D.get(T(f[2])) || "Base" };
  }, xt = (e) => {
    var _a2, _b2, _c2, _d;
    const f = [], S = (_a2 = $.propertyModifiers) == null ? void 0 : _a2.get(e);
    S && S.some((I) => Math.abs(I - 1) > 1e-9) && f.push(`PROPMODIFIERS "${S.map((I) => T(I)).join(" ")}"`);
    const d = (_b2 = R.momentReleases) == null ? void 0 : _b2.get(e);
    if (d && d.some((I) => I)) {
      const I = [];
      d.length === 12 ? (d[0] && I.push("PI"), d[1] && I.push("V2I"), d[2] && I.push("V3I"), d[3] && I.push("TI"), d[4] && I.push("M2I"), d[5] && I.push("M3I"), d[6] && I.push("PJ"), d[7] && I.push("V2J"), d[8] && I.push("V3J"), d[9] && I.push("TJ"), d[10] && I.push("M2J"), d[11] && I.push("M3J")) : d.length === 6 && (d[0] && I.push("TI"), d[1] && I.push("M2I"), d[2] && I.push("M3I"), d[3] && I.push("TJ"), d[4] && I.push("M2J"), d[5] && I.push("M3J")), I.length > 0 && f.push(`RELEASE "${I.join(" ")}"`);
    }
    const C = (_c2 = R.insertionPoints) == null ? void 0 : _c2.get(e);
    C && (Math.abs(C[0]) > 1e-9 || Math.abs(C[1]) > 1e-9) && f.push(`LATEROFFSET ${T(C[0])} TRANSOFFSET ${T(C[1])}`);
    const m = (_d = R.rigidOffsets) == null ? void 0 : _d.get(e);
    return m && (Math.abs(m[0]) > 1e-9 || Math.abs(m[1]) > 1e-9) && f.push(`LENGTHOFFI ${T(m[0])} LENGTHOFFJ ${T(m[1])} RIGIDZONE 0.5`), f.length > 0 ? ` ${f.join(" ")} ` : "";
  }, yt = [], Ft = /* @__PURE__ */ new Set(), Ct = /* @__PURE__ */ new Map();
  x.forEach((e, f) => {
    if (e.length !== 2) return;
    const S = Pt(O, e);
    if (S === "BEAM") return;
    const d = O[e[0]][2] <= O[e[1]][2] ? e[0] : e[1], C = O[e[0]][2] <= O[e[1]][2] ? e[1] : e[0];
    if (Math.abs(O[d][0] - O[C][0]) > 1e-6 || Math.abs(O[d][1] - O[C][1]) > 1e-6) return;
    const m = ct(d), I = It.get(f) || `Sec_${f}`, P = `${m.pt}_${I}_${S}`;
    Ct.has(P) || Ct.set(P, []), Ct.get(P).push({ i: f, bot: d, top: C, zBot: T(O[d][2]), zTop: T(O[C][2]), planPt: m.pt, secName: I, type: S });
  }), Ct.forEach((e, f) => {
    e.sort((d, C) => d.zBot - C.zBot);
    let S = 0;
    for (let d = 1; d <= e.length; d++) if (d === e.length || Math.abs(e[d].zBot - e[d - 1].zTop) > 1e-6) {
      const m = e.slice(S, d);
      m.length >= 1 && (yt.push({ elemIndices: m.map((I) => I.i), planPt: m[0].planPt, bottomNodeIdx: m[0].bot, topNodeIdx: m[m.length - 1].top, secName: m[0].secName, type: m[0].type, nSegments: m.length }), m.forEach((I) => Ft.add(I.i))), S = d;
    }
  }), r.push("$ LINE CONNECTIVITIES");
  const gt = [];
  yt.forEach((e, f) => {
    const S = `C${f + 1}`, d = ct(e.topNodeIdx);
    ct(e.bottomNodeIdx);
    const C = T(O[e.topNodeIdx][2]), m = T(O[e.bottomNodeIdx][2]), I = h.indexOf(C), P = h.indexOf(m), B = Math.max(1, I - P), w = xt(e.elemIndices[0]);
    r.push(`  LINE  "${S}"  ${e.type}  "${d.pt}"  "${d.pt}"  ${B}`), gt.push(`  LINEASSIGN  "${S}"  "${d.story}"  SECTION "${e.secName}" ${w} RIGIDZONE 0 MAXSTASPC 0.5 MINNUMSTA ${e.nSegments} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  }), x.forEach((e, f) => {
    if (e.length !== 2 || Ft.has(f)) return;
    const S = Pt(O, e), d = It.get(f) || `Sec_${f}`, C = xt(f);
    if (S === "BEAM") {
      const m = ct(e[0]), I = ct(e[1]);
      r.push(`  LINE  "E${f + 1}"  BEAM  "${m.pt}"  "${I.pt}"  0`), gt.push(`  LINEASSIGN  "E${f + 1}"  "${m.story}"  SECTION "${d}" ${C} RIGIDZONE 0 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const m = O[e[0]][2] <= O[e[1]][2] ? e[0] : e[1], I = O[e[0]][2] <= O[e[1]][2] ? e[1] : e[0], P = ct(I), B = T(O[m][2]), w = T(O[I][2]), H = h.indexOf(B), pt = h.indexOf(w), tt = Math.max(1, pt >= 0 && H >= 0 ? pt - H : 1);
      r.push(`  LINE  "E${f + 1}"  ${S}  "${P.pt}"  "${P.pt}"  ${tt}`), gt.push(`  LINEASSIGN  "E${f + 1}"  "${P.story}"  SECTION "${d}" ${C} RIGIDZONE 0 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    }
  }), r.push("");
  const St = $.weightMode ?? "auto", Mt = /* @__PURE__ */ new Set();
  r.push("$ POINT ASSIGNS"), (_c = L.supports) == null ? void 0 : _c.forEach((e, f) => {
    const S = [];
    if (e[0] && S.push("UX"), e[1] && S.push("UY"), e[2] && S.push("UZ"), e[3] && S.push("RX"), e[4] && S.push("RY"), e[5] && S.push("RZ"), S.length > 0) {
      const d = ct(f), C = d.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      r.push(`  POINTASSIGN  "${d.pt}"  "${d.story}"  RESTRAINT "${S.join(" ")}" ${C} `), Mt.add(`${d.pt}@${d.story}`);
    }
  }), yt.forEach((e) => {
    const f = ct(e.topNodeIdx), S = `${f.pt}@${f.story}`;
    J && !Mt.has(S) && f.story !== "Base" && (r.push(`  POINTASSIGN  "${f.pt}"  "${f.story}"  DIAPH "D1"  `), Mt.add(S));
  }), St === "manual" && L.loads && L.loads.forEach((e, f) => {
    const S = ct(f), d = `${S.pt}@${S.story}`;
    Mt.has(d) || (r.push(`  POINTASSIGN  "${S.pt}"  "${S.story}"  DIAPH "DISCONNECTED"  `), Mt.add(d));
  }), r.push(""), r.push("$ LINE ASSIGNS"), gt.forEach((e) => r.push(e)), r.push("");
  const Tt = [];
  x.forEach((e, f) => {
    if (e.length === 4) {
      const S = O[e[0]], d = O[e[1]], C = O[e[2]], m = [d[0] - S[0], d[1] - S[1], d[2] - S[2]], I = [C[0] - S[0], C[1] - S[1], C[2] - S[2]], P = m[1] * I[2] - m[2] * I[1], B = m[2] * I[0] - m[0] * I[2], w = m[0] * I[1] - m[1] * I[0], H = Math.sqrt(P * P + B * B + w * w), pt = H > 1e-10 && Math.abs(w) / H < 0.5;
      Tt.push({ idx: f, el: e, isWall: pt });
    }
  });
  const $t = (() => {
    for (const [e, f] of b) if (!f) return U.get(e);
    return U.values().next().value || "Conc_1";
  })(), Ot = (e, f) => {
    var _a2;
    for (const S of Tt) if (e(S)) {
      const d = (_a2 = R.thicknesses) == null ? void 0 : _a2.get(S.idx);
      if (d !== void 0) return d;
    }
    return f;
  };
  if (Tt.some((e) => !e.isWall)) {
    r.push("$ SLAB PROPERTIES");
    const e = Ot((f) => !f.isWall, 0.15);
    r.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${$t}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${T(e)} `), r.push("");
  }
  if (Tt.some((e) => e.isWall)) {
    r.push("$ WALL PROPERTIES");
    const e = Ot((f) => f.isWall, 0.2);
    r.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${$t}"  MODELINGTYPE "ShellThin"  WALLTHICKNESS ${T(e)} `), r.push("");
  }
  const Nt = [];
  if (Tt.length > 0) {
    r.push("$ AREA CONNECTIVITIES");
    const e = [];
    Tt.forEach((f, S) => {
      const { el: d, isWall: C } = f, m = C ? `W${S + 1}` : `F${S + 1}`, I = C ? "PANEL" : "FLOOR", P = d.map((B) => ct(B));
      if (C) {
        const B = O[d[0]][2] <= O[d[2]][2] ? 0 : 2, w = O[d[1]][2] <= O[d[3]][2] ? 1 : 3;
        r.push(`  AREA "${m}"  ${I}  4  "${P[B].pt}"  "${P[w].pt}"  "${P[w].pt}"  "${P[B].pt}"  1  1  0  0  `);
        const H = P[B === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${m}"  "${H}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        r.push(`  AREA "${m}"  ${I}  4  "${P[0].pt}"  "${P[1].pt}"  "${P[2].pt}"  "${P[3].pt}"  0  0  0  0  `);
        const B = J ? ' DIAPH  "D1" ' : "";
        e.push(`  AREAASSIGN  "${m}"  "${P[0].story}"  SECTION "Losa" ${B} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), Nt.push({ aName: m, story: P[0].story, idx: f.idx, nodes: d });
      }
    }), r.push(""), r.push("$ AREA ASSIGNS"), e.forEach((f) => r.push(f)), r.push("");
  }
  const Dt = St === "manual" ? 0 : 1;
  r.push("$ LOAD PATTERNS"), r.push(`  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  ${Dt}`), r.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), r.push("");
  const Lt = /* @__PURE__ */ new Set(), Rt = [];
  if (St === "manual" && Nt.length > 0 && L.loads) {
    const e = (C) => {
      const m = C.map((pt) => O[pt]), I = [m[2][0] - m[0][0], m[2][1] - m[0][1], m[2][2] - m[0][2]], P = [m[3][0] - m[1][0], m[3][1] - m[1][1], m[3][2] - m[1][2]], B = I[1] * P[2] - I[2] * P[1], w = I[2] * P[0] - I[0] * P[2], H = I[0] * P[1] - I[1] * P[0];
      return 0.5 * Math.sqrt(B * B + w * w + H * H);
    };
    let f = 0, S = 0;
    for (const C of Nt) f += e(C.nodes), C.nodes.forEach((m) => Lt.add(m));
    Lt.forEach((C) => {
      const m = L.loads.get(C);
      m && (S += Math.abs(m[2]));
    });
    const d = f > 1e-9 ? S / f : 0;
    if (d > 1e-9) for (const C of Nt) Rt.push(`  AREALOAD  "${C.aName}"  "${C.story}"  TYPE "UNIFF"  DIR "GRAV"  LC "Dead"  FVAL ${T(X(d))}`);
  }
  const ut = [];
  return L.loads && L.loads.size > 0 && L.loads.forEach((e, f) => {
    const [S, d, C] = e, m = ct(f);
    Math.abs(S) > 1e-10 && ut.push(`  POINTLOAD  "${m.pt}"  "${m.story}"  TYPE "FORCE"  LC "Dead"  FX ${T(X(S))}  FY 0  FZ 0`), Math.abs(d) > 1e-10 && ut.push(`  POINTLOAD  "${m.pt}"  "${m.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY ${T(X(d))}  FZ 0`), St === "manual" && Math.abs(C) > 1e-10 && !Lt.has(f) && ut.push(`  POINTLOAD  "${m.pt}"  "${m.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY 0  FZ ${T(X(C))}`);
  }), L.moments && L.moments.size > 0 && L.moments.forEach((e, f) => {
    const [S, d, C] = e, m = ct(f);
    Math.abs(S) > 1e-10 && ut.push(`  POINTLOAD  "${m.pt}"  "${m.story}"  TYPE "MOMENT"  LC "Dead"  MX ${T(X(S))}  MY 0  MZ 0`), Math.abs(d) > 1e-10 && ut.push(`  POINTLOAD  "${m.pt}"  "${m.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY ${T(X(d))}  MZ 0`), Math.abs(C) > 1e-10 && ut.push(`  POINTLOAD  "${m.pt}"  "${m.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY 0  MZ ${T(X(C))}`);
  }), Rt.length > 0 && (r.push("$ SHELL OBJECT LOADS"), Rt.forEach((e) => r.push(e)), r.push("")), ut.length > 0 && (r.push("$ POINT OBJECT LOADS"), ut.forEach((e) => r.push(e)), r.push("")), r.push("$ ANALYSIS OPTIONS"), r.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), r.push('  PDELTA  METHOD "NONE"  '), r.push(""), r.push("$ MASS SOURCE"), r.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), r.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), r.push(""), r.push("$ LOAD CASES"), r.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), r.push('  LOADCASE "Dead"  LOADPAT  "Dead"  SF 1 '), r.push('  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), r.push('  LOADCASE "Live"  LOADPAT  "Live"  SF 1 '), r.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), r.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), r.push(""), r.push("$ LOAD COMBINATIONS"), r.push('  COMBO "1.4D"  TYPE "Linear Add"  '), r.push('  COMBO "1.4D"  LOADCASE  "Dead"  SF 1.4 '), r.push('  COMBO "1.2D+1.6L"  TYPE "Linear Add"  '), r.push('  COMBO "1.2D+1.6L"  LOADCASE  "Dead"  SF 1.2 '), r.push('  COMBO "1.2D+1.6L"  LOADCASE  "Live"  SF 1.6 '), r.push(""), r.push("  END"), r.push("$ END OF MODEL FILE"), r.join(`\r
`);
}
function Pt($, O) {
  const x = $[O[0]], L = $[O[1]], R = Math.abs(L[2] - x[2]), G = Math.sqrt((L[0] - x[0]) ** 2 + (L[1] - x[1]) ** 2), q = R > G * 0.5;
  return q && G > 0.01 ? "BRACE" : q ? "COLUMN" : "BEAM";
}
export {
  Jt as a,
  Ht as b,
  Gt as c,
  vt as d,
  Wt as e,
  zt as p
};
