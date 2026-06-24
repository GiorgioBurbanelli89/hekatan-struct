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
  function L(R, G) {
    var _a, _b, _c, _d, _e, _f;
    if (!R.frequencies || R.frequencies.length === 0) {
      $.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const q = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], W = [0, 0, 0, 0, 0, 0], N = R.frequencies.length;
    let Y = -1, r = -1, T = -1, Q = 0, X = 0;
    {
      const i = [0, 0, 0, 0, 0, 0];
      for (let h = 0; h < N; h++) {
        const u = ((_a = R.massParticipation) == null ? void 0 : _a[h]) || [0, 0, 0, 0, 0, 0];
        for (let D = 0; D < 6; D++) i[D] += u[D];
        Y < 0 && i[0] >= x && (Y = h + 1), r < 0 && i[1] >= x && (r = h + 1), T < 0 && i[0] >= x && i[1] >= x && (T = h + 1);
      }
      Q = i[0], X = i[1];
    }
    let V = -1, _ = -1, Z = -1;
    const y = 0.1;
    for (let i = 0; i < N; i++) {
      const h = ((_b = R.massParticipation) == null ? void 0 : _b[i]) || [0, 0, 0, 0, 0, 0];
      V < 0 && h[0] > y && (V = i + 1), _ < 0 && h[1] > y && (_ = i + 1), Z < 0 && h[5] > y && (Z = i + 1);
    }
    const M = T > 0 ? `<span style="color:#0f0">\u2713 ASCE 7-22 \xA712.9.1.1 \u2014 90 % alcanzado en X e Y al modo ${T} de ${N}</span>` : Y > 0 && r < 0 ? `<span style="color:#fa0">\u26A0 X cumple en modo ${Y}, Y todav\xEDa en ${(X * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : r > 0 && Y < 0 ? `<span style="color:#fa0">\u26A0 Y cumple en modo ${r}, X todav\xEDa en ${(Q * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : `<span style="color:#f44">\u2717 ASCE 7-22 NO cumplido en ${N} modos \xB7 \u03A3Ux=${(Q * 100).toFixed(1)} % \xB7 \u03A3Uy=${(X * 100).toFixed(1)} % \u2014 aumentar nModes</span>`, E = (() => {
      const i = (h, u) => {
        var _a2;
        if (h < 0) return `<span style="color:#f44">${u}: no encontrado en ${N} modos</span>`;
        const D = ((_a2 = R.massParticipation) == null ? void 0 : _a2[h - 1]) || [0, 0, 0, 0, 0, 0], F = u === "Ux" ? 0 : u === "Uy" ? 1 : 5, w = R.frequencies[h - 1] > 0 ? 1 / R.frequencies[h - 1] : 0;
        return `<span style="color:#0f0">${u}: modo ${h}, T=${w.toFixed(3)} s, MPF=${(D[F] * 100).toFixed(1)} %</span>`;
      };
      return `<div style="margin:4px 0; padding:4px 6px; background:rgba(0,255,255,0.05); border-left:2px solid #0ff; font-size:11px;">
  \u{1F3AF} <b>Modos s\xEDsmicos principales</b> (ASCE 7-22 \xA712.9.1):<br>
  ${i(V, "Ux")} \xB7 ${i(_, "Uy")} \xB7 ${i(Z, "Rz")}
</div>`;
    })();
    let a = `<div id="modal-header" style="flex:0 0 auto; display:flex; align-items:center; justify-content:space-between; padding:6px 10px; cursor:move; border-bottom:1px solid #0f04; background:rgba(0,0,0,0.4);">
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
    if (a += '<div id="modal-body" style="flex:1 1 auto; min-height:0; overflow:auto; padding:6px 12px 10px 12px;">', a += `<div style="padding:6px 0; font-weight:bold; font-size:13px;">${M}</div>`, a += E, G.properties) for (const i of G.properties) a += `<span style="color:#888">${i}</span>
`;
    a += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const i of q) a += `<th style="padding:2px 5px">${i}</th>`;
    a += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let i = 0; i < 6; i++) W[i] = 0;
    if (R.frequencies.forEach((i, h) => {
      var _a2;
      const u = i > 0 ? 1 / i : 0, D = i * 2 * Math.PI, F = ((_a2 = R.massParticipation) == null ? void 0 : _a2[h]) || [0, 0, 0, 0, 0, 0];
      for (let st = 0; st < 6; st++) W[st] += F[st];
      let w = 0, b = F[0];
      for (let st = 1; st < 6; st++) F[st] > b && (b = F[st], w = st);
      const et = b < 0.05 ? "\u2014" : `${q[w]} (${(b * 100).toFixed(0)} %)`, j = w === 0 || w === 1 ? "#0f0" : w === 5 ? "#0ff" : w === 2 ? "#fa0" : "#888", ct = h + 1 === Y, ft = h + 1 === r, mt = h + 1 === T;
      a += `<tr style="border-bottom:1px solid #fff1; ${mt ? "background:rgba(0,255,0,0.12);" : ct || ft ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${h + 1}${mt ? " \u2605" : ""}</td>
  <td style="padding:2px 6px; text-align:right">${i.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${u.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${D.toFixed(2)}</td>`;
      for (let st = 0; st < 6; st++) {
        const At = (F[st] * 100).toFixed(1), rt = F[st] > 0.5 ? "#f00" : F[st] > 0.1 ? "#ff0" : "#0f0";
        a += `<td style="padding:2px 5px; text-align:right; color:${rt}">${At}%</td>`;
      }
      const J = W[0] >= x ? "#0f0" : "#0ff", dt = W[1] >= x ? "#0f0" : "#0ff";
      a += `<td style="padding:2px 5px; text-align:right; color:${J}">${(W[0] * 100).toFixed(1)}%${ct ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${dt}">${(W[1] * 100).toFixed(1)}%${ft ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(W[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${j}">${et}</td></tr>`;
    }), a += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, a += "</div>", $.innerHTML = a, O) {
      const i = $.querySelector("#modal-body"), h = $.querySelector("#modal-minimize");
      i && (i.style.display = "none"), h && (h.textContent = "\u25A2", h.title = "Restaurar");
    }
    (_c = $.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      O = !O;
      const i = $.querySelector("#modal-body"), h = $.querySelector("#modal-minimize");
      O ? (i.style.display = "none", h.textContent = "\u25A2", h.title = "Restaurar") : (i.style.display = "block", h.textContent = "\u25AC", h.title = "Minimizar");
    }), (_d = $.querySelector("#modal-close")) == null ? void 0 : _d.addEventListener("click", () => {
      $.style.display = "none";
    }), (_e = $.querySelector("#modal-header")) == null ? void 0 : _e.addEventListener("mousedown", (i) => {
      if (i.target.tagName === "BUTTON") return;
      const h = $.getBoundingClientRect();
      $.style.bottom = "auto", $.style.top = `${h.top}px`, $.style.left = `${h.left}px`;
      const u = i.clientX - h.left, D = i.clientY - h.top, F = (b) => {
        $.style.left = `${Math.max(0, b.clientX - u)}px`, $.style.top = `${Math.max(0, b.clientY - D)}px`;
      }, w = () => {
        document.removeEventListener("mousemove", F), document.removeEventListener("mouseup", w);
      };
      document.addEventListener("mousemove", F), document.addEventListener("mouseup", w), i.preventDefault();
    }), (_f = $.querySelector("#modal-copy")) == null ? void 0 : _f.addEventListener("click", () => {
      const i = [];
      i.push(`Modal Analysis \u2014 ${G.title}`), i.push(M.replace(/<[^>]+>/g, ""));
      const h = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${q.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      i.push(h), i.push("-".repeat(h.length));
      const u = [0, 0, 0, 0, 0, 0];
      R.frequencies.forEach((F, w) => {
        var _a2;
        const b = F > 0 ? 1 / F : 0, et = F * 2 * Math.PI, j = ((_a2 = R.massParticipation) == null ? void 0 : _a2[w]) || [0, 0, 0, 0, 0, 0];
        for (let J = 0; J < 6; J++) u[J] += j[J];
        let ct = 0, ft = j[0];
        for (let J = 1; J < 6; J++) j[J] > ft && (ft = j[J], ct = J);
        const mt = ft < 0.05 ? "\u2014" : `${q[ct]} (${(ft * 100).toFixed(0)}%)`, Mt = j.map((J) => ((J * 100).toFixed(1) + "%").padStart(6)).join(" ");
        i.push(`${String(w + 1).padStart(4)}  ${F.toFixed(4).padStart(9)}  ${b.toFixed(4).padStart(9)}  ${et.toFixed(2).padStart(9)}  ${Mt}  ${(u[0] * 100).toFixed(1).padStart(5)}%  ${(u[1] * 100).toFixed(1).padStart(5)}%  ${(u[5] * 100).toFixed(1).padStart(5)}%  ${mt}`);
      }), navigator.clipboard.writeText(i.join(`
`));
      const D = $.querySelector("#modal-copy");
      D.textContent = "\u2713", setTimeout(() => D.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: $, render: L };
}
function Jt($) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y;
  const O = $.split(/\r?\n/), x = { force: "TONF", length: "M" }, L = [], R = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), W = [], N = [], Y = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), T = [], Q = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), V = [], _ = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), a = [];
  let p = "", i = "";
  const h = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  for (const o of O) {
    const c = o.trim();
    if (c.startsWith("$ ")) {
      i = c.substring(2).trim(), h.has(i) || h.set(i, []), u.has(i) || u.set(i, o);
      continue;
    }
    if (i && (h.has(i) || h.set(i, []), h.get(i).push(o)), !(!c || c.startsWith("$"))) {
      if (i === "CONTROLS") {
        const t = c.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        t && (x.force = t[1], x.length = t[2]);
        const n = c.match(/TITLE2\s+"([^"]+)"/);
        n && (p = n[1]);
      }
      if (i === "STORIES - IN SEQUENCE FROM TOP") {
        const t = c.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (t) {
          const n = t[1], s = t[2] ? parseFloat(t[2]) : 0, l = t[3] ? parseFloat(t[3]) : void 0;
          L.push({ name: n, height: s, elev: l ?? 0 });
        }
      }
      if (i === "MATERIAL PROPERTIES") {
        const t = c.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (t) {
          const n = t[1];
          R.has(n) || R.set(n, { type: t[2] || "", E: 0, G: 0, nu: 0 });
          const s = R.get(n);
          t[2] && (s.type = t[2]);
          const l = c.match(/\bE\s+([\d.eE+-]+)/);
          l && (s.E = parseFloat(l[1]));
          const g = c.match(/\bU\s+([\d.eE+-]+)/);
          g && (s.nu = parseFloat(g[1]), s.G = s.E / (2 * (1 + s.nu)));
          const A = c.match(/\bFY\s+([\d.eE+-]+)/);
          A && (s.fy = parseFloat(A[1]));
          const k = c.match(/\bFC\s+([\d.eE+-]+)/);
          k && (s.fc = parseFloat(k[1]));
          const B = c.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          B && (s.density = parseFloat(B[1]));
        }
      }
      if (i === "FRAME SECTIONS") {
        const t = c.match(/FRAMESECTION\s+"([^"]+)"/);
        if (t) {
          const n = t[1];
          G.has(n) || G.set(n, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
          const s = G.get(n), l = c.match(/MATERIAL\s+"([^"]+)"/);
          l && (s.material = l[1]);
          const g = c.match(/SHAPE\s+"([^"]+)"/);
          g && (s.shape = g[1]);
          const A = c.match(/\bD\s+([\d.eE+-]+)/);
          A && (s.D = parseFloat(A[1]));
          const k = c.match(/\bB\s+([\d.eE+-]+)/);
          k && (s.B = parseFloat(k[1]));
          const B = c.match(/\bTF\s+([\d.eE+-]+)/);
          B && (s.TF = parseFloat(B[1]));
          const ot = c.match(/\bTW\s+([\d.eE+-]+)/);
          ot && (s.TW = parseFloat(ot[1]));
          const it = c.match(/\bR\s+([\d.eE+-]+)/);
          it && (s.R = parseFloat(it[1]));
          const at = c.match(/FILLMATERIAL\s+"([^"]+)"/);
          at && (s.fillMaterial = at[1]);
          const pt = c.match(/I2MOD\s+([\d.eE+-]+)/);
          pt && (s.modI2 = parseFloat(pt[1]));
          const ht = c.match(/I3MOD\s+([\d.eE+-]+)/);
          ht && (s.modI3 = parseFloat(ht[1]));
        }
      }
      if (i === "POINT COORDINATES") {
        const t = c.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        t && q.set(t[1], [parseFloat(t[2]), parseFloat(t[3])]);
      }
      if (i === "LINE CONNECTIVITIES") {
        const t = c.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        t && W.push({ name: t[1], type: t[2], pt1: t[3], pt2: t[4], nStories: parseInt(t[5]) });
      }
      if (i === "POINT ASSIGNS") {
        const t = c.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        t && Y.set(`${t[1]}@${t[2]}`, t[3].split(/\s+/));
      }
      if (i === "LINE ASSIGNS") {
        const t = c.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (t) {
          const n = { story: t[2], section: t[3], rigidZone: 0, releases: [], angle: 0 }, s = c.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          s && (n.rigidZone = parseFloat(s[1]));
          const l = c.match(/RELEASE\s+"([^"]+)"/);
          l && (n.releases = l[1].split(/\s+/));
          const g = c.match(/ANG\s+([-\d.eE+]+)/);
          g && (n.angle = parseFloat(g[1])), r.set(`${t[1]}@${t[2]}`, n);
        }
      }
      if (i === "GRIDS") {
        const t = c.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        t && a.push({ label: t[1], dir: t[2], coord: parseFloat(t[3]) });
      }
      if (i === "FRAME OBJECT LOADS") {
        const t = c.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        t && T.push({ line: t[1], story: t[2], type: t[3], dir: t[4], lc: t[5], val: parseFloat(t[6]) });
      }
      if (i === "AREA CONNECTIVITIES") {
        const t = c.match(/AREA\s+"([^"]+)"\s+(?:FLOOR|WALL|RAMP|PANEL)?\s*\d+\s+(.+)/);
        if (t) {
          const n = ((_a = t[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((l) => l.replace(/"/g, ""))) || [], s = (t[2].replace(/"[^"]*"/g, " ").trim().match(/-?\d+/g) || []).map(Number);
          N.push({ name: t[1], pts: n, nStories: 0, storyOffsets: s });
        }
      }
      if (i === "WALL/SLAB/DECK SECTIONS" || i === "SLAB PROPERTIES" || i === "WALL PROPERTIES" || i === "DECK PROPERTIES") {
        const t = c.match(/SHELLPROP\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const n = t[1], s = (_b = t[2].match(/SLABTHICKNESS\s+([\d.eE+-]+)/)) == null ? void 0 : _b[1], l = (_c = t[2].match(/WALLTHICKNESS\s+([\d.eE+-]+)/)) == null ? void 0 : _c[1], g = (_d = t[2].match(/MATERIAL\s+"([^"]+)"/)) == null ? void 0 : _d[1], A = (_e = t[2].match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _e[1];
          if (s || l) {
            const k = X.get(n) || { material: "", modelingType: "ShellThin" };
            X.set(n, { material: g ?? k.material, modelingType: A ?? k.modelingType, thickness: parseFloat(s ?? l ?? "0") });
          }
        }
      }
      if (i === "AREA ASSIGNS") {
        const t = c.match(/AREAASSIGN\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const n = t[1], s = t[2], l = t[3], g = ((_f = l.match(/SECTION\s+"([^"]+)"/)) == null ? void 0 : _f[1]) ?? "", A = ((_g = l.match(/CARDINALPOINT\s+"([^"]+)"/)) == null ? void 0 : _g[1]) ?? "CENTROID", k = ((_h = l.match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _h[1]) ?? "ShellThin";
          Q.set(`${n}@${s}`, { story: s, section: g, modelingType: k, cardinalPoint: A });
          const B = (_i = l.match(/SPRINGPROP\s+"([^"]+)"/)) == null ? void 0 : _i[1];
          B && M.set(`${n}@${s}`, B);
        }
      }
      if (i === "AREA SPRING PROPERTIES") {
        const t = c.match(/AREASPRING\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const n = t[1], s = t[2], l = parseFloat(((_j = s.match(/U1\s+([\d.eE+-]+)/)) == null ? void 0 : _j[1]) ?? "0"), g = parseFloat(((_k = s.match(/U2\s+([\d.eE+-]+)/)) == null ? void 0 : _k[1]) ?? "0"), A = parseFloat(((_l = s.match(/U3\s+([\d.eE+-]+)/)) == null ? void 0 : _l[1]) ?? "0");
          Z.set(n, { u1: l, u2: g, u3: A });
        }
      }
      if (i === "POINT SPRING PROPERTIES") {
        const t = c.match(/POINTSPRING\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const n = t[1], s = t[2], l = parseFloat(((_m = s.match(/UX\s+([\d.eE+-]+)/)) == null ? void 0 : _m[1]) ?? "0"), g = parseFloat(((_n = s.match(/UY\s+([\d.eE+-]+)/)) == null ? void 0 : _n[1]) ?? "0"), A = parseFloat(((_o = s.match(/UZ\s+([\d.eE+-]+)/)) == null ? void 0 : _o[1]) ?? "0");
          y.set(n, { ux: l, uy: g, uz: A });
        }
      }
      if (i === "POINT ASSIGNS") {
        const t = c.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/), n = (_q = (_p = t == null ? void 0 : t[3]) == null ? void 0 : _p.match(/SPRINGPROP\s+"([^"]+)"/)) == null ? void 0 : _q[1];
        t && n && E.set(`${t[1]}@${t[2]}`, n);
      }
      if (i === "SHELL UNIFORM LOAD SETS") {
        const t = c.match(/SHELLUNIFORMLOADSET\s+"([^"]+)"\s+LOADPAT\s+"([^"]+)"\s+VALUE\s+([\d.eE+-]+)/);
        if (t) {
          const n = t[1], s = t[2], l = parseFloat(t[3]);
          _.has(n) || _.set(n, []), _.get(n).push({ loadpat: s, value: l });
        }
      }
      if (i === "SHELL OBJECT LOADS") {
        const t = c.match(/AREALOAD\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const n = t[1], s = t[2], l = t[3], g = ((_r = l.match(/TYPE\s+"([^"]+)"/)) == null ? void 0 : _r[1]) ?? "";
          if (g === "UNIFLOADSET") {
            const A = ((_s = l.match(/UNIFLOADSET"\s+"([^"]+)"/)) == null ? void 0 : _s[1]) ?? ((_t2 = l.match(/"([^"]+)"\s*$/)) == null ? void 0 : _t2[1]) ?? "";
            V.push({ area: n, story: s, type: "UNIFLOADSET", dir: "GRAV", lc: A, val: 0 });
          } else {
            const A = ((_u = l.match(/DIR\s+"([^"]+)"/)) == null ? void 0 : _u[1]) ?? "GRAV", k = ((_v = l.match(/LC\s+"([^"]+)"/)) == null ? void 0 : _v[1]) ?? "", B = parseFloat(((_w = l.match(/FVAL\s+([\d.eE+-]+)/)) == null ? void 0 : _w[1]) ?? "0");
            V.push({ area: n, story: s, type: g, dir: A, lc: k, val: B });
          }
        }
      }
    }
  }
  const D = [];
  for (const o of V) if (o.type === "UNIFLOADSET") {
    const c = _.get(o.lc);
    if (c) for (const t of c) D.push({ area: o.area, story: o.story, type: "UNIFF", dir: o.dir, lc: t.loadpat, val: t.value });
  } else D.push(o);
  V.length = 0, V.push(...D);
  const F = /* @__PURE__ */ new Map();
  if (L.length > 0) {
    const o = L.length - 1;
    F.set(L[o].name, L[o].elev);
    for (let c = o - 1; c >= 0; c--) {
      const n = F.get(L[c + 1].name) + L[c].height;
      L[c].elev = n, F.set(L[c].name, n);
    }
  }
  const w = [], b = [], et = /* @__PURE__ */ new Map(), j = (o, c) => `${o}@${c}`, ct = /* @__PURE__ */ new Set(), ft = /* @__PURE__ */ new Map();
  for (const o of W) ft.set(o.name, o);
  for (const o of W) for (const [c, t] of r) {
    if (!c.startsWith(o.name + "@")) continue;
    const n = t.story, s = L.findIndex((l) => l.name === n);
    if (!(s < 0)) if (o.type === "COLUMN" || o.type === "BRACE") {
      ct.add(j(o.pt2, n));
      const l = Math.max(o.nStories, 1), g = Math.min(s + l, L.length - 1);
      ct.add(j(o.pt1, L[g].name));
    } else ct.add(j(o.pt1, n)), ct.add(j(o.pt2, n));
  }
  for (const [o] of Y) ct.add(o);
  const mt = new Map(L.map((o, c) => [o.name, c])), Mt = (o, c) => {
    const t = mt.get(o);
    return t === void 0 ? o : L[Math.max(0, t - (c || 0))].name;
  };
  for (const o of N) for (const [c, t] of Q) if (c.startsWith(o.name + "@")) for (let n = 0; n < o.pts.length; n++) ct.add(j(o.pts[n], Mt(t.story, ((_x = o.storyOffsets) == null ? void 0 : _x[n]) ?? 0)));
  for (const o of ct) {
    const [c, t] = o.split("@"), n = q.get(c), s = F.get(t);
    n === void 0 || s === void 0 || (w.push([n[0], n[1], s]), b.push(o), et.set(o, w.length - 1));
  }
  const J = [], dt = [], st = [], At = [], rt = /* @__PURE__ */ new Map(), Pt = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map();
  for (const o of W) for (const [c, t] of r) {
    if (!c.startsWith(o.name + "@")) continue;
    const n = t.story, s = L.findIndex((ot) => ot.name === n);
    if (s < 0) continue;
    let l, g;
    if (o.type === "COLUMN" || o.type === "BRACE") {
      const ot = Math.max(o.nStories, 1), it = Math.min(s + ot, L.length - 1);
      l = j(o.pt1, L[it].name), g = j(o.pt2, n);
    } else l = j(o.pt1, n), g = j(o.pt2, n);
    const A = et.get(l), k = et.get(g);
    if (A === void 0 || k === void 0 || A === k) continue;
    const B = J.length;
    if (J.push([A, k]), dt.push(o.name), st.push(o.type), At.push(n), rt.set(B, t.section), t.rigidZone > 0 && Pt.set(B, [t.rigidZone, t.rigidZone]), t.releases.length > 0) {
      const ot = new Array(12).fill(false), it = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const at of t.releases) {
        const pt = it[at];
        pt !== void 0 && (ot[pt] = true);
      }
      Ct.set(B, ot);
    }
  }
  const bt = /* @__PURE__ */ new Map(), xt = /* @__PURE__ */ new Map();
  for (const o of N) for (const [c, t] of Q) {
    if (!c.startsWith(o.name + "@")) continue;
    const n = [];
    for (let l = 0; l < o.pts.length; l++) {
      const g = j(o.pts[l], Mt(t.story, ((_y = o.storyOffsets) == null ? void 0 : _y[l]) ?? 0)), A = et.get(g);
      if (A === void 0) {
        n.length = 0;
        break;
      }
      n.push(A);
    }
    if (n.length !== 4 || new Set(n).size !== 4) continue;
    const s = J.length;
    J.push(n), dt.push(o.name), st.push("FLOOR"), At.push(t.story), bt.set(s, t.section), xt.set(s, t.cardinalPoint);
  }
  const Ot = /* @__PURE__ */ new Map(), St = (o, c, t) => {
    if (!(t > 0)) return;
    const n = `${o}:${c}`;
    Ot.set(n, (Ot.get(n) ?? 0) + t);
  };
  for (let o = 0; o < J.length; o++) {
    const c = J[o];
    if (c.length !== 4) continue;
    const t = M.get(`${dt[o]}@${At[o]}`), n = t ? Z.get(t) : void 0;
    if (!n) continue;
    const s = c.map((B) => w[B]), l = [s[1][0] - s[0][0], s[1][1] - s[0][1]], g = [s[3][0] - s[0][0], s[3][1] - s[0][1]], k = Math.abs(l[0] * g[1] - l[1] * g[0]) / 4;
    for (const B of c) St(B, 0, n.u1 * k), St(B, 1, n.u2 * k), St(B, 2, n.u3 * k);
  }
  for (const [o, c] of E) {
    const t = et.get(o), n = y.get(c);
    t === void 0 || !n || (St(t, 0, n.ux), St(t, 1, n.uy), St(t, 2, n.uz));
  }
  const gt = [];
  for (const [o, c] of Ot) {
    const [t, n] = o.split(":").map(Number);
    gt.push({ node: t, dof: n, k: c });
  }
  const Tt = /* @__PURE__ */ new Map();
  for (const o of V) if (o.type === "UNIFF") for (let c = 0; c < J.length; c++) {
    if (dt[c] !== o.area || At[c] !== o.story) continue;
    const t = J[c];
    if (t.length !== 4) continue;
    const n = t.map((k) => w[k]), s = [n[1][0] - n[0][0], n[1][1] - n[0][1]], l = [n[3][0] - n[0][0], n[3][1] - n[0][1]], g = Math.abs(s[0] * l[1] - s[1] * l[0]), A = -o.val * g / 4;
    for (const k of t) {
      const B = Tt.get(k) || [0, 0, 0, 0, 0, 0];
      B[2] += A, Tt.set(k, B);
    }
  }
  const Nt = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Map(), Lt = /* @__PURE__ */ new Map(), Rt = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
  for (const [o, c] of rt) {
    const t = G.get(c);
    if (!t) continue;
    const n = R.get(t.material);
    n && (Nt.set(o, n.E), $t.set(o, n.G));
    const s = t.D, l = t.B, g = t.TF, A = t.TW;
    let k = 0, B = 0, ot = 0, it = 0, at = 0, pt = 0, ht = "rect";
    switch (t.shape) {
      case "Concrete Rectangular":
        k = s * l, B = l * s ** 3 / 12, ot = s * l ** 3 / 12, it = l * s ** 3 * (1 / 3 - 0.21 * (s / l) * (1 - s ** 4 / (12 * l ** 4))), at = pt = 5 / 6 * k, ht = "rect";
        break;
      case "Concrete Circle":
        k = Math.PI * s ** 2 / 4, B = ot = Math.PI * s ** 4 / 64, it = Math.PI * s ** 4 / 32, at = pt = 0.9 * k, ht = "circ";
        break;
      case "Steel I/Wide Flange":
        k = 2 * l * g + (s - 2 * g) * A, B = (l * s ** 3 - (l - A) * (s - 2 * g) ** 3) / 12, ot = (2 * g * l ** 3 + (s - 2 * g) * A ** 3) / 12, it = (2 * l * g ** 3 + (s - 2 * g) * A ** 3) / 3, at = (s - 2 * g) * A, pt = 2 * l * g * 5 / 6, ht = "I";
        break;
      case "Steel Tube":
        k = s * l - (s - 2 * A) * (l - 2 * A), B = (l * s ** 3 - (l - 2 * A) * (s - 2 * A) ** 3) / 12, ot = (s * l ** 3 - (s - 2 * A) * (l - 2 * A) ** 3) / 12, it = 2 * A * (s - A) * (l - A) * ((s - A) * (l - A)) / (s - A + (l - A)), at = 2 * s * A, pt = 2 * l * A, ht = "HSS";
        break;
      case "Filled Steel Tube":
        k = s * l, B = l * s ** 3 / 12, ot = s * l ** 3 / 12, it = 2 * A * (s - A) * (l - A) * ((s - A) * (l - A)) / (s - A + (l - A)), at = 2 * s * A + 5 / 6 * (s - 2 * A) * (l - 2 * A), pt = 2 * l * A + 5 / 6 * (s - 2 * A) * (l - 2 * A), ht = "CFT";
        break;
      case "Steel Angle": {
        const Et = g || A;
        k = Et * (s + l - Et), B = Et * (s ** 3 + l * Et ** 2 + Et ** 2 * (s - Et)) / 12, ot = Et * (l ** 3 + s * Et ** 2 + Et ** 2 * (l - Et)) / 12, it = (s + l - Et) * Et ** 3 / 3, at = s * Et, pt = l * Et, ht = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        k = 2 * l * g + (s - 2 * g) * A, B = (A * s ** 3 + 2 * l * g * (s - g) ** 2) / 12, ot = (2 * g * l ** 3 + (s - 2 * g) * A ** 3) / 12, it = (2 * l * g ** 3 + (s - 2 * g) * A ** 3) / 3, at = (s - 2 * g) * A, pt = 2 * l * g * 5 / 6, ht = t.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        k = 2 * (2 * l * g + (s - 2 * g) * A), B = 2 * (A * s ** 3 + 2 * l * g * (s - g) ** 2) / 12, ot = 2 * (2 * g * l ** 3 + (s - 2 * g) * A ** 3) / 12, it = 2 * (2 * l * g ** 3 + (s - 2 * g) * A ** 3) / 3, at = 2 * (s - 2 * g) * A, pt = 4 * l * g * 5 / 6, ht = "2C";
        break;
      default:
        s > 0 && l > 0 && (k = s * l, B = l * s ** 3 / 12, ot = s * l ** 3 / 12, it = Math.min(s, l) * Math.max(s, l) ** 3 / 3 * 0.3, at = pt = 5 / 6 * k);
        break;
    }
    t.modI2 && (ot *= t.modI2), t.modI3 && (B *= t.modI3), It.set(o, k), Rt.set(o, B), ut.set(o, ot), e.set(o, it), at > 0 && Ft.set(o, at), pt > 0 && Lt.set(o, pt), f.set(o, { type: ht, b: l || void 0, h: s || void 0, d: ht === "circ" || ht === "pipe" ? s : void 0, tw: A || void 0, tf: g || void 0, r: t.R, name: c });
  }
  {
    let o;
    for (const n of R.values()) if (n.E > 0) {
      o = n;
      break;
    }
    const c = (o == null ? void 0 : o.E) ?? 25e6, t = (o == null ? void 0 : o.G) ?? 104e5;
    for (let n = 0; n < J.length; n++) J[n].length === 2 && ((It.get(n) ?? 0) > 0 || (It.set(n, 0.09), Rt.set(n, 675e-6), ut.set(n, 675e-6), e.set(n, 114e-5), Ft.set(n, 0.075), Lt.set(n, 0.075)), (Nt.get(n) ?? 0) > 0 || Nt.set(n, c), ($t.get(n) ?? 0) > 0 || $t.set(n, t));
  }
  const S = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map();
  let v;
  for (const o of R.values()) if (o.E > 0) {
    v = o;
    break;
  }
  for (const [o, c] of bt) {
    const t = X.get(c), n = t && t.thickness > 0 ? t.thickness : 0.2;
    S.set(o, n);
    const s = (t ? R.get(t.material) : void 0) || v;
    s && (Nt.set(o, s.E), $t.set(o, s.G), d.set(o, s.nu), s.density !== void 0 && I.set(o, s.density)), C.set(o, (t == null ? void 0 : t.modelingType) === "ShellThin" ? 1 : 0), m.set(o, 2);
  }
  const U = /* @__PURE__ */ new Map();
  for (const [o, c] of Y) {
    const t = et.get(o);
    if (t === void 0) continue;
    const n = [false, false, false, false, false, false];
    for (const s of c) s === "UX" && (n[0] = true), s === "UY" && (n[1] = true), s === "UZ" && (n[2] = true), s === "RX" && (n[3] = true), s === "RY" && (n[4] = true), s === "RZ" && (n[5] = true);
    U.set(t, n);
  }
  {
    const o = /* @__PURE__ */ new Set();
    for (const c of J) for (const t of c) o.add(t);
    for (let c = 0; c < w.length; c++) !o.has(c) && !U.has(c) && U.set(c, [true, true, true, true, true, true]);
  }
  const P = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map();
  for (let o = 0; o < dt.length; o++) H.set(`${dt[o]}@${At[o]}`, o);
  for (const o of T) {
    const c = H.get(`${o.line}@${o.story}`);
    if (c === void 0) continue;
    const [t, n] = J[c], s = w[t], l = w[n], g = Math.sqrt((l[0] - s[0]) ** 2 + (l[1] - s[1]) ** 2 + (l[2] - s[2]) ** 2);
    if (g < 1e-10) continue;
    const A = o.val * g / 2;
    let k = 0, B = 0, ot = 0;
    o.dir === "GRAV" || o.dir === "GRAVITY" ? ot = -A : o.dir === "X" ? k = A : o.dir === "Y" ? B = A : o.dir === "Z" && (ot = -A);
    for (const it of [t, n]) {
      const at = P.get(it) || [0, 0, 0, 0, 0, 0];
      at[0] += k, at[1] += B, at[2] += ot, P.set(it, at);
    }
  }
  const lt = /* @__PURE__ */ new Map();
  for (const [o, c] of rt) {
    const t = G.get(c);
    if (!t) continue;
    const n = R.get(t.material);
    (n == null ? void 0 : n.density) && lt.set(o, n.density);
  }
  for (const [o, c] of I) lt.set(o, c);
  for (const [o, c] of Tt) {
    const t = P.get(o) || [0, 0, 0, 0, 0, 0];
    P.set(o, [t[0] + c[0], t[1] + c[1], t[2] + c[2], t[3] + c[3], t[4] + c[4], t[5] + c[5]]);
  }
  const yt = { M: 1, CM: 0.01, MM: 1e-3, FT: 0.3048, IN: 0.0254, INCH: 0.0254 }, Dt = { KN: 1, N: 1e-3, TONF: 9.80665, TON: 9.80665, KGF: 980665e-8, KG: 980665e-8, KIP: 4.448222, LB: 4448222e-9 }, tt = yt[(x.length || "M").toUpperCase()] ?? 1, nt = Dt[(x.force || "KN").toUpperCase()] ?? 1;
  if (tt !== 1 || nt !== 1) {
    const o = nt / (tt * tt);
    for (const n of w) n[0] *= tt, n[1] *= tt, n[2] *= tt;
    for (const [n, s] of P) P.set(n, [s[0] * nt, s[1] * nt, s[2] * nt, s[3] * nt * tt, s[4] * nt * tt, s[5] * nt * tt]);
    const c = (n, s) => {
      for (const [l, g] of n) n.set(l, g * s);
    };
    c(Nt, o), c($t, o), c(It, tt * tt), c(Rt, tt ** 4), c(ut, tt ** 4), c(e, tt ** 4), c(Ft, tt * tt), c(Lt, tt * tt), c(S, tt), c(lt, nt / tt ** 3);
    const t = nt / tt;
    for (const n of gt) n.k *= t;
    x.force = "KN", x.length = "M";
  }
  return { units: x, stories: L.reverse(), materials: R, frameSections: G, nodes: w, nodeNames: b, nodeNameToIdx: et, elements: J, elementNames: dt, elementTypes: st, elementStories: At, elementSections: rt, nodeInputs: { supports: U, loads: P }, elementInputs: { elasticities: Nt, shearModuli: $t, areas: It, momentsOfInertiaZ: Rt, momentsOfInertiaY: ut, torsionalConstants: e, shearAreasY: Ft, shearAreasZ: Lt, rigidOffsets: Pt, momentReleases: Ct, densities: lt, sectionShapes: f, thicknesses: S, poissonsRatios: d, plateFormulations: C, drillingTypes: m }, sectionShapes: f, grids: a, springsList: gt, info: { nNodes: w.length, nFrames: J.length, nAreas: N.length, title: p }, rawSections: h, rawSectionHeaders: u };
}
function z($) {
  return $ && parseFloat($) || 0;
}
function Yt($) {
  const O = /* @__PURE__ */ new Map(), x = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let L;
  for (; (L = x.exec($)) !== null; ) O.set(L[1], L[2] !== void 0 ? L[2] : L[3]);
  return O;
}
function Wt($) {
  const O = $.split(/\r?\n/);
  return O.some((L) => L.trim().startsWith("TABLE:")) ? Ut(O) : vt(O);
}
function Ut($) {
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
  const G = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), Y = [], r = [], T = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), V = [];
  let _ = "";
  for (const Z of O) {
    const y = Z.trim();
    if (!y || y.startsWith(";") || y.startsWith("File ")) continue;
    if (y.startsWith("TABLE:")) {
      const E = y.match(/TABLE:\s+"(.+?)"/);
      _ = E ? E[1].toUpperCase() : "";
      continue;
    }
    if (y === "END TABLE DATA") {
      _ = "";
      continue;
    }
    const M = Yt(y);
    switch (_) {
      case "PROGRAM CONTROL": {
        const E = M.get("CurrUnits");
        if (E) {
          const a = E.split(",").map((p) => p.trim());
          a[0] && (L.force = a[0]), a[1] && (L.length = a[1]);
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
          const a = G.get(E) || { E: 0, nu: 0, G: 0 };
          a.E = z(M.get("E1")), a.G = z(M.get("G12")), a.nu = z(M.get("U12")), a.density = z(M.get("UnitMass")), G.set(E, a);
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
        E && W.set(E, { material: M.get("Material") || "", type: M.get("Type") || "Shell", thickness: z(M.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const E = M.get("Joint");
        if (E) {
          const a = z(M.get("XorR")), p = z(M.get("Y")), i = z(M.get("Z"));
          N.set(E, [a, p, i]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const E = M.get("Frame"), a = M.get("JointI"), p = M.get("JointJ");
        E && a && p && Y.push({ name: E, j1: a, j2: p });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const E = M.get("Area");
        if (E) {
          const a = parseInt(M.get("NumJoints") || "4"), p = [];
          for (let i = 1; i <= a; i++) {
            const h = M.get(`Joint${i}`);
            h && p.push(h);
          }
          p.length >= 3 && r.push({ name: E, joints: p });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const E = M.get("Joint");
        if (E) {
          const a = [((_a = M.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = M.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = M.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = M.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = M.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = M.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          T.set(E, a);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const E = M.get("Frame"), a = M.get("AnalSect");
        E && a && Q.set(E, a);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const E = M.get("Area"), a = M.get("Section");
        E && a && X.set(E, a);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const E = M.get("Joint");
        E && V.push({ joint: E, fx: z(M.get("F1")), fy: z(M.get("F2")), fz: z(M.get("F3")), mx: z(M.get("M1")), my: z(M.get("M2")), mz: z(M.get("M3")) });
        break;
      }
    }
  }
  return kt(L, R, G, q, W, N, Y, r, T, Q, X, V);
}
function vt($) {
  const O = { force: "KN", length: "m" };
  let x = "UX,UY,UZ,RX,RY,RZ";
  const L = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), W = [], N = [], Y = /* @__PURE__ */ new Map(), r = [];
  let T = "", Q = "";
  for (const _ of $) {
    const Z = _.trim();
    if (!Z || Z.startsWith(";")) continue;
    if (!_.startsWith(" ") && !_.startsWith("	")) {
      const E = Z.toUpperCase();
      if (E === "END") break;
      E.startsWith("SHELL SECTION") ? T = "SHELL SECTION" : E.startsWith("FRAME SECTION") ? T = "FRAME SECTION" : T = E.split(/\s+/)[0];
      continue;
    }
    const y = Yt(Z), M = Z.split(/\s+/);
    switch (T) {
      case "SYSTEM": {
        const E = y.get("DOF");
        E && (x = E);
        const a = y.get("LENGTH");
        a && (O.length = a);
        const p = y.get("FORCE");
        p && (O.force = p);
        break;
      }
      case "JOINT": {
        const E = M[0];
        q.set(E, [z(y.get("X")), z(y.get("Y")), z(y.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const E = y.get("ADD"), a = y.get("DOF");
        if (E && a) {
          const p = a.split(","), i = [false, false, false, false, false, false];
          for (const h of p) {
            const u = h.toUpperCase();
            (u === "UX" || u === "U1") && (i[0] = true), (u === "UY" || u === "U2") && (i[1] = true), (u === "UZ" || u === "U3") && (i[2] = true), (u === "RX" || u === "R1") && (i[3] = true), (u === "RY" || u === "R2") && (i[4] = true), (u === "RZ" || u === "R3") && (i[5] = true);
          }
          Y.set(E, i);
        }
        break;
      }
      case "MATERIAL": {
        const E = y.get("NAME");
        if (E) Q = E, L.set(E, { E: 0, nu: 0, G: 0 });
        else if (Q) {
          const a = L.get(Q), p = y.get("E");
          p && (a.E = z(p));
          const i = y.get("U");
          i && (a.nu = z(i)), a.G = a.E / (2 * (1 + a.nu));
          const h = y.get("M");
          h && (a.density = z(h));
        }
        break;
      }
      case "SHELL": {
        const E = M[0], a = y.get("J");
        y.get("SEC"), a && N.push({ name: E, joints: a.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const E = y.get("NAME");
        E && G.set(E, { material: y.get("MAT") || "", type: y.get("TYPE") || "Shell", thickness: z(y.get("TH")) });
        break;
      }
      case "FRAME": {
        const E = M[0], a = y.get("J");
        if (a) {
          const p = a.split(",");
          p.length >= 2 && W.push({ name: E, j1: p[0], j2: p[1] });
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
  return kt(O, x, L, R, G, q, W, N, Y, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), r);
}
function kt($, O, x, L, R, G, q, W, N, Y, r, T) {
  var _a;
  const Q = [], X = /* @__PURE__ */ new Map(), V = [];
  for (const [u, D] of G) X.set(u, V.length), Q.push(u), V.push(D);
  const _ = [], Z = [], y = /* @__PURE__ */ new Map();
  for (const u of q) {
    const D = X.get(u.j1), F = X.get(u.j2);
    if (D !== void 0 && F !== void 0) {
      const w = _.length;
      _.push([D, F]), Z.push(u.name);
      const b = Y.get(u.name);
      b && y.set(w, b);
    }
  }
  const M = _.length;
  for (const u of W) {
    const D = u.joints.map((F) => X.get(F)).filter((F) => F !== void 0);
    if (D.length >= 3) {
      const F = _.length;
      _.push(D), Z.push(u.name);
      const w = r.get(u.name);
      w && y.set(F, w);
    }
  }
  const E = _.length - M, a = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, p = /* @__PURE__ */ new Map(), i = x.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let u = 0; u < _.length; u++) {
    const D = y.get(u), F = D ? L.get(D) : null, w = D ? R.get(D) : null;
    if (F || _[u].length === 2) {
      const b = F || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, et = x.get(b.material) || i, j = et.E || i.E, ct = et.nu || 0.3, ft = et.G || j / (2 * (1 + ct));
      a.elasticities.set(u, j), a.shearModuli.set(u, ft), a.areas.set(u, b.A || b.D * b.B), a.momentsOfInertiaZ.set(u, b.Iz || b.B * b.D ** 3 / 12), a.momentsOfInertiaY.set(u, b.Iy || b.D * b.B ** 3 / 12), a.torsionalConstants.set(u, b.J || 0), a.densities.set(u, et.density || 0), ((_a = b.shape) == null ? void 0 : _a.includes("Wide Flange")) || b.shape === "I" ? p.set(u, { type: "I", b: b.B, h: b.D, name: D || "I-section" }) : p.set(u, { type: "rect", b: b.B, h: b.D });
    } else if (w) {
      const b = x.get(w.material) || i, et = b.E || i.E, j = b.nu || 0.2, ct = b.G || et / (2 * (1 + j));
      a.elasticities.set(u, et), a.shearModuli.set(u, ct), a.thicknesses.set(u, w.thickness), a.poissonsRatios.set(u, j), a.densities.set(u, b.density || 0);
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
  return { units: $, dof: O, materials: x, frameSections: L, shellSections: R, nodes: V, nodeNames: Q, nodeNameToIdx: X, elements: _, elementNames: Z, elementSections: y, nodeInputs: h, elementInputs: a, sectionShapes: p, info: { nNodes: V.length, nFrames: M, nShells: E, title: `SAP2000 (${M} frames, ${E} shells)` } };
}
function _t($) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: O, elements: x, nodeInputs: L, elementInputs: R } = $, G = $.units || { force: "KN", length: "m" }, q = $.title || "Awatif Model", W = [], N = (a) => W.push(a), Y = () => W.push(" ");
  N(`File ${q}.$2k was saved on m/d/yy at h:mm:ss`), Y(), N('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), N("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), Y();
  const r = [], T = [];
  if (x.forEach((a, p) => {
    a.length === 2 ? r.push(p) : T.push(p);
  }), r.length > 0) {
    N('TABLE:  "CONNECTIVITY - FRAME"');
    for (const a of r) {
      const p = x[a];
      N(`   Frame=${a + 1}   JointI=${p[0] + 1}   JointJ=${p[1] + 1}   IsCurved=No`);
    }
    Y();
  }
  if (T.length > 0) {
    N('TABLE:  "CONNECTIVITY - AREA"');
    for (const a of T) {
      const p = x[a], i = p.map((h, u) => `Joint${u + 1}=${h + 1}`).join("   ");
      N(`   Area=${a + 1}   NumJoints=${p.length}   ${i}`);
    }
    Y();
  }
  N('TABLE:  "COORDINATE SYSTEMS"'), N("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), Y(), N('TABLE:  "DATABASE FORMAT TYPES"'), N("   UnitsCurr=Yes   OverrideE=No"), Y();
  const Q = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map();
  for (const a of r) {
    const p = ((_a = R.areas) == null ? void 0 : _a.get(a)) || 0, i = ((_b = R.momentsOfInertiaZ) == null ? void 0 : _b.get(a)) || 0, h = ((_c = R.momentsOfInertiaY) == null ? void 0 : _c.get(a)) || 0, u = ((_d = R.torsionalConstants) == null ? void 0 : _d.get(a)) || 0, D = ((_e = R.elasticities) == null ? void 0 : _e.get(a)) || 0, F = `MAT_${Math.round(D)}`, w = `A${p.toPrecision(6)}_Iz${i.toPrecision(6)}`;
    if (!Q.has(w)) {
      let et = 0.3, j = 0.3;
      p > 0 && i > 0 && (et = Math.sqrt(12 * i / p), j = p / et), Q.set(w, { A: p, Iz: i, Iy: h, J: u, b: j, h: et, matKey: F });
    }
    const b = [...Q.keys()].indexOf(w) + 1;
    X.set(a, `SEC${b}`);
  }
  if (r.length > 0) {
    N('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const a of r) {
      const p = X.get(a) || "SEC1";
      N(`   Frame=${a + 1}   AutoSelect=N.A.   AnalSect=${p}   MatProp=Default`);
    }
    Y();
  }
  if (Q.size > 0) {
    N('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let a = 0;
    for (const [, p] of Q) {
      a++;
      const i = p.A * 5 / 6;
      N(`   SectionName=SEC${a}   Material=${p.matKey}   Shape=Rectangular   t3=${K(p.h)}   t2=${K(p.b)}   Area=${K(p.A)}   TorsConst=${K(p.J)}   I33=${K(p.Iz)}   I22=${K(p.Iy)}   I23=0   AS2=${K(i)}   AS3=${K(i)} _`), N("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    Y();
  }
  const V = !!$.layeredSection && T.length > 0, _ = $.layeredSection, Z = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
  if (!V) for (const a of T) {
    const p = ((_f = R.thicknesses) == null ? void 0 : _f.get(a)) || 0.1, i = ((_g = R.elasticities) == null ? void 0 : _g.get(a)) || 0, h = `MAT_${Math.round(i)}`, u = `t${p.toPrecision(6)}`;
    Z.has(u) || Z.set(u, { t: p, matKey: h });
    const D = [...Z.keys()].indexOf(u) + 1;
    y.set(a, `SSEC${D}`);
  }
  if (T.length > 0) {
    N('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const a of T) {
      const p = V ? _.name : y.get(a) || "SSEC1";
      N(`   Area=${a + 1}   Section=${p}   MatProp=Default`);
    }
    if (Y(), N('TABLE:  "AREA SECTION PROPERTIES"'), V) {
      const a = _, p = ((_h = a.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      N(`   Section=${a.name}   Material=${p}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${K(a.totalThickness)}   BendThick=${K(a.totalThickness)}   Color=Magenta`);
    } else {
      let a = 0;
      for (const [, p] of Z) a++, N(`   Section=SSEC${a}   Material=${p.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${K(p.t)}   BendThick=${K(p.t)}   Color=Cyan`);
    }
    if (Y(), V) {
      N('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const a = _;
      for (const p of a.layers) {
        const i = p.angle ?? 0, h = p.numIntPts ?? 3;
        N(`   Section=${a.name}   LayerName=${p.name}   Distance=${K(p.distance)}   Thickness=${K(p.thickness)}   Type=Shell   NumIntPts=${h}   Material=${p.material}   MatAngle=${K(i * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      Y();
    }
  }
  N('TABLE:  "JOINT COORDINATES"');
  for (let a = 0; a < O.length; a++) {
    const p = O[a];
    N(`   Joint=${a + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${K(p[0])}   Y=${K(p[1])}   Z=${K(p[2])}   SpecialJt=No`);
  }
  if (Y(), L.supports && L.supports.size > 0) {
    N('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [a, p] of L.supports) {
      if (!p.some((h) => h)) continue;
      const i = (h) => h ? "Yes" : "No";
      N(`   Joint=${a + 1}   U1=${i(p[0])}   U2=${i(p[1])}   U3=${i(p[2])}   R1=${i(p[3])}   R2=${i(p[4])}   R3=${i(p[5])}`);
    }
    Y();
  }
  const M = $.selfWtMult ?? 1;
  if (N('TABLE:  "LOAD PATTERN DEFINITIONS"'), N(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${M}`), Y(), N('TABLE:  "LOAD CASE DEFINITIONS"'), N('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), Y(), N('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), N('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), Y(), L.loads && L.loads.size > 0) {
    N('TABLE:  "JOINT LOADS - FORCE"');
    for (const [a, p] of L.loads) p.some((i) => Math.abs(i) > 1e-12) && N(`   Joint=${a + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${K(p[0])}   F2=${K(p[1])}   F3=${K(p[2])}   M1=${K(p[3])}   M2=${K(p[4])}   M3=${K(p[5])}`);
    Y();
  }
  const E = /* @__PURE__ */ new Map();
  for (let a = 0; a < x.length; a++) {
    const p = ((_i = R.elasticities) == null ? void 0 : _i.get(a)) || 0, i = ((_j = R.shearModuli) == null ? void 0 : _j.get(a)) || 0, h = p > 0 && i > 0 ? Math.max(0, Math.min(0.5, p / (2 * i) - 1)) : 0.2, u = ((_k = R.densities) == null ? void 0 : _k.get(a)) || 0, D = `MAT_${Math.round(p)}`;
    E.has(D) || E.set(D, { E: p, nu: h, G: i, rho: u });
  }
  N('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [a] of E) N(`   Material=${a}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  Y(), N('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [a, p] of E) N(`   Material=${a}   UnitWeight=${K(p.rho * 9.81)}   UnitMass=${K(p.rho)}   E1=${K(p.E)}   G12=${K(p.G)}   U12=${K(p.nu)}   A1=9.9E-06`);
  Y(), N('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [a] of E) N(`   Material=${a}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return Y(), N('TABLE:  "PROGRAM CONTROL"'), N(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${G.force}, ${G.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), Y(), N("END TABLE DATA"), N(""), W.join(`\r
`);
}
function K($) {
  return $ === 0 || Math.abs($) < 1e-15 ? "0" : Math.abs($) >= 1e6 || Math.abs($) < 1e-3 && Math.abs($) > 0 ? $.toExponential(8) : parseFloat($.toPrecision(10)).toString();
}
function Zt($) {
  const { nodes: O, elements: x, nodeInputs: L, elementInputs: R, title: G, e2kModel: q } = $, W = q == null ? void 0 : q.rawSections;
  return W && W.size > 0 ? Bt(W, q) : Gt($);
}
function Bt($, O) {
  const x = [], L = O == null ? void 0 : O.rawSectionHeaders;
  for (const [R, G] of $) {
    x.push((L == null ? void 0 : L.get(R)) ?? `$ ${R}`);
    for (const q of G) x.push(q);
  }
  return $.has("END OF MODEL FILE") || (x.push("  END"), x.push("$ END OF MODEL FILE")), x.join(`\r
`);
}
function Gt($) {
  var _a, _b, _c;
  const { nodes: O, elements: x, nodeInputs: L, elementInputs: R, title: G, units: q } = $, W = $.rigidDiaphragm ?? false, N = (q == null ? void 0 : q.force) || "Tonf", Y = (q == null ? void 0 : q.length) || "m", r = [], T = (e) => Math.round(e * 1e4) / 1e4, Q = (() => {
    const e = (N || "Tonf").toLowerCase();
    return e === "tonf" || e === "tonf-f" ? 1 / 9.80665 : e === "kn" || e === "kn-f" ? 1 : e === "kgf" || e === "kg" ? 1 / 980665e-8 : e === "kip" || e === "kips" ? 1 / 4.44822 : 1;
  })(), X = (e) => e * Q, V = (e) => e * Q, _ = (e) => e * Q, Z = /* @__PURE__ */ new Date(), y = `${Z.getMonth() + 1}/${Z.getDate()}/${Z.getFullYear()}  ${Z.getHours()}:${String(Z.getMinutes()).padStart(2, "0")}:${String(Z.getSeconds()).padStart(2, "0")}`;
  r.push(`$ File   "Hekatan_export.e2k"  saved ${y} in ETABS 22.6.0`), r.push(""), r.push("$ PROGRAM INFORMATION"), r.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), r.push(""), r.push("$ CONTROLS"), r.push(`  UNITS  "${N}"  "${Y}"  "C"  `), r.push('  TITLE1  "Hekatan Struct export"  '), G && r.push(`  TITLE2  "${G}"  `), r.push("  PREFERENCE  MERGETOL 0.001"), r.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), r.push("");
  const M = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set();
  O.forEach((e) => {
    M.add(T(e[0])), E.add(T(e[1]));
  });
  const a = [...M].sort((e, f) => e - f), p = [...E].sort((e, f) => e - f);
  r.push("$ GRIDS"), r.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), a.forEach((e, f) => {
    const S = f < 26 ? String.fromCharCode(65 + f) : String.fromCharCode(65 + f % 26).repeat(Math.floor(f / 26) + 1);
    r.push(`  GRID "G1"  LABEL "${S}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), p.forEach((e, f) => {
    r.push(`  GRID "G1"  LABEL "${f + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), r.push("");
  const i = /* @__PURE__ */ new Set();
  O.forEach((e) => i.add(T(e[2])));
  let h = [...i].sort((e, f) => e - f);
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
  i.size === 1 && i.has(0) && D.set(0, u[1]), r.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = h.length - 1; e >= 1; e--) r.push(`  STORY "${u[e]}"  HEIGHT ${T(h[e] - h[e - 1])} MASTERSTORY "Yes"  `);
  h.length > 0 && r.push(`  STORY "Base"  ELEV ${h[0]} `), r.push(""), x.some((e) => e.length === 4), W && (r.push("$ DIAPHRAGM NAMES"), r.push('  DIAPHRAGM "D1"    TYPE RIGID'), r.push("")), r.push("$ MATERIAL PROPERTIES");
  const F = /* @__PURE__ */ new Set();
  (_a = R.elasticities) == null ? void 0 : _a.forEach((e) => F.add(e));
  const w = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map();
  let et = 0, j = 0;
  const ct = 980665e-8, ft = /* @__PURE__ */ new Map();
  if (R.densities && R.densities.size > 0) {
    const e = /* @__PURE__ */ new Map();
    R.densities.forEach((f, S) => {
      var _a2;
      const d = (_a2 = R.elasticities) == null ? void 0 : _a2.get(S);
      d !== void 0 && (e.has(d) || e.set(d, []), e.get(d).push(f));
    }), e.forEach((f, S) => {
      const d = f.reduce((m, I) => m + I, 0) / f.length, C = d > 100 ? d * ct : d * 9.80665;
      ft.set(S, C);
    });
  }
  for (const e of F) {
    const f = e >= 1e8, S = f ? `Steel_${++et}` : `Conc_${++j}`;
    w.set(e, S), b.set(e, f);
    const d = ft.get(e) ?? (f ? 76.97 : 24), C = V(e), m = _(d), I = [];
    (_b = R.poissonsRatios) == null ? void 0 : _b.forEach((P, H) => {
      var _a2;
      ((_a2 = R.elasticities) == null ? void 0 : _a2.get(H)) === e && I.push(P);
    });
    const v = I.length > 0 ? I.reduce((P, H) => P + H, 0) / I.length : f ? 0.3 : 0.2, U = f ? 117e-7 : 1e-5;
    if (f) {
      r.push(`  MATERIAL  "${S}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${T(m)}`), r.push(`  MATERIAL  "${S}"    SYMTYPE "Isotropic"  E ${T(C)}  U ${v}  A ${U}`);
      const P = 345e3, H = 45e4;
      r.push(`  MATERIAL  "${S}"  FY ${T(V(P))}  FU ${T(V(H))}  FYE ${T(V(P * 1.1))}  FUE ${T(V(H * 1.1))}`);
    } else r.push(`  MATERIAL  "${S}"    TYPE "Concrete"    WEIGHTPERVOLUME ${T(m)}`), r.push(`  MATERIAL  "${S}"    SYMTYPE "Isotropic"  E ${T(C)}  U ${v}  A ${U}`), r.push(`  MATERIAL  "${S}"    FC ${T(V(24e3))}`);
  }
  r.push(""), r.push("$ FRAME SECTIONS");
  const mt = /* @__PURE__ */ new Set(), Mt = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), dt = 0.05;
  x.forEach((e, f) => {
    var _a2, _b2, _c2, _d, _e, _f;
    if (e.length !== 2) return;
    const S = (_a2 = R.sectionShapes) == null ? void 0 : _a2.get(f), d = ((_b2 = R.elasticities) == null ? void 0 : _b2.get(f)) ?? 0, C = w.get(d) || "Conc_1", m = b.get(d) ?? d >= 1e8, I = ((_c2 = R.areas) == null ? void 0 : _c2.get(f)) ?? 0, v = ((_d = R.momentsOfInertiaY) == null ? void 0 : _d.get(f)) ?? 0;
    (_e = R.momentsOfInertiaZ) == null ? void 0 : _e.get(f), (_f = R.torsionalConstants) == null ? void 0 : _f.get(f);
    let U = (S == null ? void 0 : S.type) || "rect", P = (S == null ? void 0 : S.h) ?? 0, H = (S == null ? void 0 : S.b) ?? 0, lt = (S == null ? void 0 : S.d) ?? 0;
    const yt = (S == null ? void 0 : S.tf) ?? 0, Dt = (S == null ? void 0 : S.tw) ?? 0;
    P <= 0 && H <= 0 && lt <= 0 && I > 0 && (v > 0 ? (P = Math.sqrt(12 * v / I), H = I / P) : P = H = Math.sqrt(I), (!isFinite(P) || P < dt) && (P = dt), (!isFinite(H) || H < dt) && (H = dt), U = "rect"), P <= 0 && H <= 0 && lt <= 0 && (P = 0.3, H = 0.3, U = "rect");
    const tt = `${U}_${T(P)}_${T(H)}_${T(lt)}_${T(yt)}_${T(Dt)}_${C}`;
    (S == null ? void 0 : S.name) && !J.has(tt) && J.set(tt, S.name);
    let nt = J.get(tt);
    if (!nt) {
      const t = m ? "S" : "C";
      U === "rect" ? nt = `${t}_R${Math.round(H * 100)}x${Math.round(P * 100)}` : U === "circ" ? nt = `${t}_C_D${Math.round(lt * 100)}` : U === "I" ? nt = `${t}_I${Math.round(P * 100)}x${Math.round(H * 100)}` : U === "HSS" ? nt = `${t}_HSS${Math.round(H * 100)}x${Math.round(P * 100)}x${Math.round(Dt * 1e3)}` : nt = `${t}_Sec${mt.size + 1}`, J.set(tt, nt);
    }
    if (Mt.set(f, nt), mt.has(nt)) return;
    mt.add(nt);
    let o;
    U === "I" ? o = "Steel I/Wide Flange" : U === "HSS" ? o = "Steel Tube" : U === "CFT" ? o = "Filled Steel Tube" : U === "pipe" ? o = "Steel Pipe" : U === "L" ? o = "Steel Angle" : U === "C" ? o = "Steel Channel" : U === "2C" ? o = "Steel Double Channel" : U === "circ" ? o = "Concrete Circle" : o = "Concrete Rectangular";
    let c = `  FRAMESECTION  "${nt}"  MATERIAL "${C}"  SHAPE "${o}"`;
    P && (c += `  D ${T(P)}`), H && (c += `  B ${T(H)}`), lt && !P && (c += `  D ${T(lt)}`), yt && (c += `  TF ${T(yt)}`), Dt && (c += `  TW ${T(Dt)}`), r.push(c);
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
  const rt = (e) => {
    const f = O[e], S = `${T(f[0])},${T(f[1])}`;
    return { pt: st.get(S) || "1", story: D.get(T(f[2])) || "Base" };
  }, Pt = (e) => {
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
  }, Ct = [], bt = /* @__PURE__ */ new Set(), xt = /* @__PURE__ */ new Map();
  x.forEach((e, f) => {
    if (e.length !== 2) return;
    const S = wt(O, e);
    if (S === "BEAM") return;
    const d = O[e[0]][2] <= O[e[1]][2] ? e[0] : e[1], C = O[e[0]][2] <= O[e[1]][2] ? e[1] : e[0];
    if (Math.abs(O[d][0] - O[C][0]) > 1e-6 || Math.abs(O[d][1] - O[C][1]) > 1e-6) return;
    const m = rt(d), I = Mt.get(f) || `Sec_${f}`, v = `${m.pt}_${I}_${S}`;
    xt.has(v) || xt.set(v, []), xt.get(v).push({ i: f, bot: d, top: C, zBot: T(O[d][2]), zTop: T(O[C][2]), planPt: m.pt, secName: I, type: S });
  }), xt.forEach((e, f) => {
    e.sort((d, C) => d.zBot - C.zBot);
    let S = 0;
    for (let d = 1; d <= e.length; d++) if (d === e.length || Math.abs(e[d].zBot - e[d - 1].zTop) > 1e-6) {
      const m = e.slice(S, d);
      m.length >= 1 && (Ct.push({ elemIndices: m.map((I) => I.i), planPt: m[0].planPt, bottomNodeIdx: m[0].bot, topNodeIdx: m[m.length - 1].top, secName: m[0].secName, type: m[0].type, nSegments: m.length }), m.forEach((I) => bt.add(I.i))), S = d;
    }
  }), r.push("$ LINE CONNECTIVITIES");
  const Ot = [];
  Ct.forEach((e, f) => {
    const S = `C${f + 1}`, d = rt(e.topNodeIdx);
    rt(e.bottomNodeIdx);
    const C = T(O[e.topNodeIdx][2]), m = T(O[e.bottomNodeIdx][2]), I = h.indexOf(C), v = h.indexOf(m), U = Math.max(1, I - v), P = Pt(e.elemIndices[0]);
    r.push(`  LINE  "${S}"  ${e.type}  "${d.pt}"  "${d.pt}"  ${U}`), Ot.push(`  LINEASSIGN  "${S}"  "${d.story}"  SECTION "${e.secName}" ${P} RIGIDZONE 0 MAXSTASPC 0.5 MINNUMSTA ${e.nSegments} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  }), x.forEach((e, f) => {
    if (e.length !== 2 || bt.has(f)) return;
    const S = wt(O, e), d = Mt.get(f) || `Sec_${f}`, C = Pt(f);
    if (S === "BEAM") {
      const m = rt(e[0]), I = rt(e[1]);
      r.push(`  LINE  "E${f + 1}"  BEAM  "${m.pt}"  "${I.pt}"  0`), Ot.push(`  LINEASSIGN  "E${f + 1}"  "${m.story}"  SECTION "${d}" ${C} RIGIDZONE 0 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const m = O[e[0]][2] <= O[e[1]][2] ? e[0] : e[1], I = O[e[0]][2] <= O[e[1]][2] ? e[1] : e[0], v = rt(I), U = T(O[m][2]), P = T(O[I][2]), H = h.indexOf(U), lt = h.indexOf(P), yt = Math.max(1, lt >= 0 && H >= 0 ? lt - H : 1);
      r.push(`  LINE  "E${f + 1}"  ${S}  "${v.pt}"  "${v.pt}"  ${yt}`), Ot.push(`  LINEASSIGN  "E${f + 1}"  "${v.story}"  SECTION "${d}" ${C} RIGIDZONE 0 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    }
  }), r.push("");
  const St = $.weightMode ?? "auto", gt = /* @__PURE__ */ new Set();
  r.push("$ POINT ASSIGNS"), (_c = L.supports) == null ? void 0 : _c.forEach((e, f) => {
    const S = [];
    if (e[0] && S.push("UX"), e[1] && S.push("UY"), e[2] && S.push("UZ"), e[3] && S.push("RX"), e[4] && S.push("RY"), e[5] && S.push("RZ"), S.length > 0) {
      const d = rt(f), C = d.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      r.push(`  POINTASSIGN  "${d.pt}"  "${d.story}"  RESTRAINT "${S.join(" ")}" ${C} `), gt.add(`${d.pt}@${d.story}`);
    }
  }), Ct.forEach((e) => {
    const f = rt(e.topNodeIdx), S = `${f.pt}@${f.story}`;
    W && !gt.has(S) && f.story !== "Base" && (r.push(`  POINTASSIGN  "${f.pt}"  "${f.story}"  DIAPH "D1"  `), gt.add(S));
  }), St === "manual" && L.loads && L.loads.forEach((e, f) => {
    const S = rt(f), d = `${S.pt}@${S.story}`;
    gt.has(d) || (r.push(`  POINTASSIGN  "${S.pt}"  "${S.story}"  DIAPH "DISCONNECTED"  `), gt.add(d));
  }), r.push(""), r.push("$ LINE ASSIGNS"), Ot.forEach((e) => r.push(e)), r.push("");
  const Tt = [];
  x.forEach((e, f) => {
    if (e.length === 4) {
      const S = O[e[0]], d = O[e[1]], C = O[e[2]], m = [d[0] - S[0], d[1] - S[1], d[2] - S[2]], I = [C[0] - S[0], C[1] - S[1], C[2] - S[2]], v = m[1] * I[2] - m[2] * I[1], U = m[2] * I[0] - m[0] * I[2], P = m[0] * I[1] - m[1] * I[0], H = Math.sqrt(v * v + U * U + P * P), lt = H > 1e-10 && Math.abs(P) / H < 0.5;
      Tt.push({ idx: f, el: e, isWall: lt });
    }
  });
  const Nt = (() => {
    for (const [e, f] of b) if (!f) return w.get(e);
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
    r.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${Nt}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${T(e)} `), r.push("");
  }
  if (Tt.some((e) => e.isWall)) {
    r.push("$ WALL PROPERTIES");
    const e = $t((f) => f.isWall, 0.2);
    r.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${Nt}"  MODELINGTYPE "ShellThin"  WALLTHICKNESS ${T(e)} `), r.push("");
  }
  const It = [];
  if (Tt.length > 0) {
    r.push("$ AREA CONNECTIVITIES");
    const e = [];
    Tt.forEach((f, S) => {
      const { el: d, isWall: C } = f, m = C ? `W${S + 1}` : `F${S + 1}`, I = C ? "PANEL" : "FLOOR", v = d.map((U) => rt(U));
      if (C) {
        const U = O[d[0]][2] <= O[d[2]][2] ? 0 : 2, P = O[d[1]][2] <= O[d[3]][2] ? 1 : 3;
        r.push(`  AREA "${m}"  ${I}  4  "${v[U].pt}"  "${v[P].pt}"  "${v[P].pt}"  "${v[U].pt}"  1  1  0  0  `);
        const H = v[U === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${m}"  "${H}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        r.push(`  AREA "${m}"  ${I}  4  "${v[0].pt}"  "${v[1].pt}"  "${v[2].pt}"  "${v[3].pt}"  0  0  0  0  `);
        const U = W ? ' DIAPH  "D1" ' : "";
        e.push(`  AREAASSIGN  "${m}"  "${v[0].story}"  SECTION "Losa" ${U} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), It.push({ aName: m, story: v[0].story, idx: f.idx, nodes: d });
      }
    }), r.push(""), r.push("$ AREA ASSIGNS"), e.forEach((f) => r.push(f)), r.push("");
  }
  const Ft = St === "manual" ? 0 : 1;
  r.push("$ LOAD PATTERNS"), r.push(`  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  ${Ft}`), r.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), r.push("");
  const Lt = /* @__PURE__ */ new Set(), Rt = [];
  if (St === "manual" && It.length > 0 && L.loads) {
    const e = (C) => {
      const m = C.map((lt) => O[lt]), I = [m[2][0] - m[0][0], m[2][1] - m[0][1], m[2][2] - m[0][2]], v = [m[3][0] - m[1][0], m[3][1] - m[1][1], m[3][2] - m[1][2]], U = I[1] * v[2] - I[2] * v[1], P = I[2] * v[0] - I[0] * v[2], H = I[0] * v[1] - I[1] * v[0];
      return 0.5 * Math.sqrt(U * U + P * P + H * H);
    };
    let f = 0, S = 0;
    for (const C of It) f += e(C.nodes), C.nodes.forEach((m) => Lt.add(m));
    Lt.forEach((C) => {
      const m = L.loads.get(C);
      m && (S += Math.abs(m[2]));
    });
    const d = f > 1e-9 ? S / f : 0;
    if (d > 1e-9) for (const C of It) Rt.push(`  AREALOAD  "${C.aName}"  "${C.story}"  TYPE "UNIFF"  DIR "GRAV"  LC "Dead"  FVAL ${T(X(d))}`);
  }
  const ut = [];
  return L.loads && L.loads.size > 0 && L.loads.forEach((e, f) => {
    const [S, d, C] = e, m = rt(f);
    Math.abs(S) > 1e-10 && ut.push(`  POINTLOAD  "${m.pt}"  "${m.story}"  TYPE "FORCE"  LC "Dead"  FX ${T(X(S))}  FY 0  FZ 0`), Math.abs(d) > 1e-10 && ut.push(`  POINTLOAD  "${m.pt}"  "${m.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY ${T(X(d))}  FZ 0`), St === "manual" && Math.abs(C) > 1e-10 && !Lt.has(f) && ut.push(`  POINTLOAD  "${m.pt}"  "${m.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY 0  FZ ${T(X(C))}`);
  }), L.moments && L.moments.size > 0 && L.moments.forEach((e, f) => {
    const [S, d, C] = e, m = rt(f);
    Math.abs(S) > 1e-10 && ut.push(`  POINTLOAD  "${m.pt}"  "${m.story}"  TYPE "MOMENT"  LC "Dead"  MX ${T(X(S))}  MY 0  MZ 0`), Math.abs(d) > 1e-10 && ut.push(`  POINTLOAD  "${m.pt}"  "${m.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY ${T(X(d))}  MZ 0`), Math.abs(C) > 1e-10 && ut.push(`  POINTLOAD  "${m.pt}"  "${m.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY 0  MZ ${T(X(C))}`);
  }), Rt.length > 0 && (r.push("$ SHELL OBJECT LOADS"), Rt.forEach((e) => r.push(e)), r.push("")), ut.length > 0 && (r.push("$ POINT OBJECT LOADS"), ut.forEach((e) => r.push(e)), r.push("")), r.push("$ ANALYSIS OPTIONS"), r.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), r.push('  PDELTA  METHOD "NONE"  '), r.push(""), r.push("$ MASS SOURCE"), r.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), r.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), r.push(""), r.push("$ LOAD CASES"), r.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), r.push('  LOADCASE "Dead"  LOADPAT  "Dead"  SF 1 '), r.push('  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), r.push('  LOADCASE "Live"  LOADPAT  "Live"  SF 1 '), r.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), r.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), r.push(""), r.push("$ LOAD COMBINATIONS"), r.push('  COMBO "1.4D"  TYPE "Linear Add"  '), r.push('  COMBO "1.4D"  LOADCASE  "Dead"  SF 1.4 '), r.push('  COMBO "1.2D+1.6L"  TYPE "Linear Add"  '), r.push('  COMBO "1.2D+1.6L"  LOADCASE  "Dead"  SF 1.2 '), r.push('  COMBO "1.2D+1.6L"  LOADCASE  "Live"  SF 1.6 '), r.push(""), r.push("  END"), r.push("$ END OF MODEL FILE"), r.join(`\r
`);
}
function wt($, O) {
  const x = $[O[0]], L = $[O[1]], R = Math.abs(L[2] - x[2]), G = Math.sqrt((L[0] - x[0]) ** 2 + (L[1] - x[1]) ** 2), q = R > G * 0.5;
  return q && G > 0.01 ? "BRACE" : q ? "COLUMN" : "BEAM";
}
export {
  _t as a,
  Wt as b,
  Ht as c,
  zt as d,
  Zt as e,
  Jt as p
};
