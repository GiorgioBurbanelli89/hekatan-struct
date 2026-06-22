function Rt() {
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
  let g = false;
  const C = 0.9;
  function O(N, b) {
    var _a, _b, _c, _d, _e;
    if (!N.frequencies || N.frequencies.length === 0) {
      $.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const Z = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], U = [0, 0, 0, 0, 0, 0], M = N.frequencies.length;
    let F = -1, c = -1, I = -1, _ = 0, J = 0;
    {
      const p = [0, 0, 0, 0, 0, 0];
      for (let S = 0; S < M; S++) {
        const m = ((_a = N.massParticipation) == null ? void 0 : _a[S]) || [0, 0, 0, 0, 0, 0];
        for (let y = 0; y < 6; y++) p[y] += m[y];
        F < 0 && p[0] >= C && (F = S + 1), c < 0 && p[1] >= C && (c = S + 1), I < 0 && p[0] >= C && p[1] >= C && (I = S + 1);
      }
      _ = p[0], J = p[1];
    }
    let z = -1, k = -1, B = -1;
    const R = 0.1;
    for (let p = 0; p < M; p++) {
      const S = ((_b = N.massParticipation) == null ? void 0 : _b[p]) || [0, 0, 0, 0, 0, 0];
      z < 0 && S[0] > R && (z = p + 1), k < 0 && S[1] > R && (k = p + 1), B < 0 && S[5] > R && (B = p + 1);
    }
    const d = I > 0 ? `<span style="color:#0f0">\u2713 ASCE 7-22 \xA712.9.1.1 \u2014 90 % alcanzado en X e Y al modo ${I} de ${M}</span>` : F > 0 && c < 0 ? `<span style="color:#fa0">\u26A0 X cumple en modo ${F}, Y todav\xEDa en ${(J * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : c > 0 && F < 0 ? `<span style="color:#fa0">\u26A0 Y cumple en modo ${c}, X todav\xEDa en ${(_ * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : `<span style="color:#f44">\u2717 ASCE 7-22 NO cumplido en ${M} modos \xB7 \u03A3Ux=${(_ * 100).toFixed(1)} % \xB7 \u03A3Uy=${(J * 100).toFixed(1)} % \u2014 aumentar nModes</span>`, h = (() => {
      const p = (S, m) => {
        var _a2;
        if (S < 0) return `<span style="color:#f44">${m}: no encontrado en ${M} modos</span>`;
        const y = ((_a2 = N.massParticipation) == null ? void 0 : _a2[S - 1]) || [0, 0, 0, 0, 0, 0], L = m === "Ux" ? 0 : m === "Uy" ? 1 : 5, P = N.frequencies[S - 1] > 0 ? 1 / N.frequencies[S - 1] : 0;
        return `<span style="color:#0f0">${m}: modo ${S}, T=${P.toFixed(3)} s, MPF=${(y[L] * 100).toFixed(1)} %</span>`;
      };
      return `<div style="margin:4px 0; padding:4px 6px; background:rgba(0,255,255,0.05); border-left:2px solid #0ff; font-size:11px;">
  \u{1F3AF} <b>Modos s\xEDsmicos principales</b> (ASCE 7-22 \xA712.9.1):<br>
  ${p(z, "Ux")} \xB7 ${p(k, "Uy")} \xB7 ${p(B, "Rz")}
</div>`;
    })();
    let a = `<div id="modal-header" style="flex:0 0 auto; display:flex; align-items:center; justify-content:space-between; padding:6px 10px; cursor:move; border-bottom:1px solid #0f04; background:rgba(0,0,0,0.4);">
  <b style="color:#ff0; font-size:12px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis">\u26A1 MODAL \u2014 ${b.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
    if (a += '<div id="modal-body" style="flex:1 1 auto; min-height:0; overflow:auto; padding:6px 12px 10px 12px;">', a += `<div style="padding:6px 0; font-weight:bold; font-size:13px;">${d}</div>`, a += h, b.properties) for (const p of b.properties) a += `<span style="color:#888">${p}</span>
`;
    a += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const p of Z) a += `<th style="padding:2px 5px">${p}</th>`;
    a += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let p = 0; p < 6; p++) U[p] = 0;
    if (N.frequencies.forEach((p, S) => {
      var _a2;
      const m = p > 0 ? 1 / p : 0, y = p * 2 * Math.PI, L = ((_a2 = N.massParticipation) == null ? void 0 : _a2[S]) || [0, 0, 0, 0, 0, 0];
      for (let K = 0; K < 6; K++) U[K] += L[K];
      let P = 0, D = L[0];
      for (let K = 1; K < 6; K++) L[K] > D && (D = L[K], P = K);
      const V = D < 0.05 ? "\u2014" : `${Z[P]} (${(D * 100).toFixed(0)} %)`, X = P === 0 || P === 1 ? "#0f0" : P === 5 ? "#0ff" : P === 2 ? "#fa0" : "#888", st = S + 1 === F, tt = S + 1 === c, nt = S + 1 === I;
      a += `<tr style="border-bottom:1px solid #fff1; ${nt ? "background:rgba(0,255,0,0.12);" : st || tt ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${S + 1}${nt ? " \u2605" : ""}</td>
  <td style="padding:2px 6px; text-align:right">${p.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${m.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${y.toFixed(2)}</td>`;
      for (let K = 0; K < 6; K++) {
        const pt = (L[K] * 100).toFixed(1), et = L[K] > 0.5 ? "#f00" : L[K] > 0.1 ? "#ff0" : "#0f0";
        a += `<td style="padding:2px 5px; text-align:right; color:${et}">${pt}%</td>`;
      }
      const q = U[0] >= C ? "#0f0" : "#0ff", rt = U[1] >= C ? "#0f0" : "#0ff";
      a += `<td style="padding:2px 5px; text-align:right; color:${q}">${(U[0] * 100).toFixed(1)}%${st ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${rt}">${(U[1] * 100).toFixed(1)}%${tt ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(U[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${X}">${V}</td></tr>`;
    }), a += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, a += "</div>", $.innerHTML = a, g) {
      const p = $.querySelector("#modal-body"), S = $.querySelector("#modal-minimize");
      p && (p.style.display = "none"), S && (S.textContent = "\u25A2", S.title = "Restaurar");
    }
    (_c = $.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      g = !g;
      const p = $.querySelector("#modal-body"), S = $.querySelector("#modal-minimize");
      g ? (p.style.display = "none", S.textContent = "\u25A2", S.title = "Restaurar") : (p.style.display = "block", S.textContent = "\u25AC", S.title = "Minimizar");
    }), (_d = $.querySelector("#modal-header")) == null ? void 0 : _d.addEventListener("mousedown", (p) => {
      if (p.target.tagName === "BUTTON") return;
      const S = $.getBoundingClientRect();
      $.style.bottom = "auto", $.style.top = `${S.top}px`, $.style.left = `${S.left}px`;
      const m = p.clientX - S.left, y = p.clientY - S.top, L = (D) => {
        $.style.left = `${Math.max(0, D.clientX - m)}px`, $.style.top = `${Math.max(0, D.clientY - y)}px`;
      }, P = () => {
        document.removeEventListener("mousemove", L), document.removeEventListener("mouseup", P);
      };
      document.addEventListener("mousemove", L), document.addEventListener("mouseup", P), p.preventDefault();
    }), (_e = $.querySelector("#modal-copy")) == null ? void 0 : _e.addEventListener("click", () => {
      const p = [];
      p.push(`Modal Analysis \u2014 ${b.title}`), p.push(d.replace(/<[^>]+>/g, ""));
      const S = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${Z.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      p.push(S), p.push("-".repeat(S.length));
      const m = [0, 0, 0, 0, 0, 0];
      N.frequencies.forEach((L, P) => {
        var _a2;
        const D = L > 0 ? 1 / L : 0, V = L * 2 * Math.PI, X = ((_a2 = N.massParticipation) == null ? void 0 : _a2[P]) || [0, 0, 0, 0, 0, 0];
        for (let q = 0; q < 6; q++) m[q] += X[q];
        let st = 0, tt = X[0];
        for (let q = 1; q < 6; q++) X[q] > tt && (tt = X[q], st = q);
        const nt = tt < 0.05 ? "\u2014" : `${Z[st]} (${(tt * 100).toFixed(0)}%)`, ct = X.map((q) => ((q * 100).toFixed(1) + "%").padStart(6)).join(" ");
        p.push(`${String(P + 1).padStart(4)}  ${L.toFixed(4).padStart(9)}  ${D.toFixed(4).padStart(9)}  ${V.toFixed(2).padStart(9)}  ${ct}  ${(m[0] * 100).toFixed(1).padStart(5)}%  ${(m[1] * 100).toFixed(1).padStart(5)}%  ${(m[5] * 100).toFixed(1).padStart(5)}%  ${nt}`);
      }), navigator.clipboard.writeText(p.join(`
`));
      const y = $.querySelector("#modal-copy");
      y.textContent = "\u2713", setTimeout(() => y.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: $, render: O };
}
function yt($) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  const g = $.split(/\r?\n/), C = { force: "TONF", length: "M" }, O = [], N = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), U = [], M = [], F = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), I = [], _ = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), z = [], k = /* @__PURE__ */ new Map(), B = [];
  let R = "", d = "";
  const h = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  for (const n of g) {
    const o = n.trim();
    if (o.startsWith("$ ")) {
      d = o.substring(2).trim(), h.has(d) || h.set(d, []), a.has(d) || a.set(d, n);
      continue;
    }
    if (d && (h.has(d) || h.set(d, []), h.get(d).push(n)), !(!o || o.startsWith("$"))) {
      if (d === "CONTROLS") {
        const t = o.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        t && (C.force = t[1], C.length = t[2]);
        const r = o.match(/TITLE2\s+"([^"]+)"/);
        r && (R = r[1]);
      }
      if (d === "STORIES - IN SEQUENCE FROM TOP") {
        const t = o.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (t) {
          const r = t[1], e = t[2] ? parseFloat(t[2]) : 0, i = t[3] ? parseFloat(t[3]) : void 0;
          O.push({ name: r, height: e, elev: i ?? 0 });
        }
      }
      if (d === "MATERIAL PROPERTIES") {
        const t = o.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (t) {
          const r = t[1];
          N.has(r) || N.set(r, { type: t[2] || "", E: 0, G: 0, nu: 0 });
          const e = N.get(r);
          t[2] && (e.type = t[2]);
          const i = o.match(/\bE\s+([\d.eE+-]+)/);
          i && (e.E = parseFloat(i[1]));
          const u = o.match(/\bU\s+([\d.eE+-]+)/);
          u && (e.nu = parseFloat(u[1]), e.G = e.E / (2 * (1 + e.nu)));
          const A = o.match(/\bFY\s+([\d.eE+-]+)/);
          A && (e.fy = parseFloat(A[1]));
          const x = o.match(/\bFC\s+([\d.eE+-]+)/);
          x && (e.fc = parseFloat(x[1]));
          const Y = o.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          Y && (e.density = parseFloat(Y[1]));
        }
      }
      if (d === "FRAME SECTIONS") {
        const t = o.match(/FRAMESECTION\s+"([^"]+)"/);
        if (t) {
          const r = t[1];
          b.has(r) || b.set(r, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
          const e = b.get(r), i = o.match(/MATERIAL\s+"([^"]+)"/);
          i && (e.material = i[1]);
          const u = o.match(/SHAPE\s+"([^"]+)"/);
          u && (e.shape = u[1]);
          const A = o.match(/\bD\s+([\d.eE+-]+)/);
          A && (e.D = parseFloat(A[1]));
          const x = o.match(/\bB\s+([\d.eE+-]+)/);
          x && (e.B = parseFloat(x[1]));
          const Y = o.match(/\bTF\s+([\d.eE+-]+)/);
          Y && (e.TF = parseFloat(Y[1]));
          const H = o.match(/\bTW\s+([\d.eE+-]+)/);
          H && (e.TW = parseFloat(H[1]));
          const v = o.match(/\bR\s+([\d.eE+-]+)/);
          v && (e.R = parseFloat(v[1]));
          const G = o.match(/FILLMATERIAL\s+"([^"]+)"/);
          G && (e.fillMaterial = G[1]);
          const j = o.match(/I2MOD\s+([\d.eE+-]+)/);
          j && (e.modI2 = parseFloat(j[1]));
          const Q = o.match(/I3MOD\s+([\d.eE+-]+)/);
          Q && (e.modI3 = parseFloat(Q[1]));
        }
      }
      if (d === "POINT COORDINATES") {
        const t = o.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        t && Z.set(t[1], [parseFloat(t[2]), parseFloat(t[3])]);
      }
      if (d === "LINE CONNECTIVITIES") {
        const t = o.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        t && U.push({ name: t[1], type: t[2], pt1: t[3], pt2: t[4], nStories: parseInt(t[5]) });
      }
      if (d === "POINT ASSIGNS") {
        const t = o.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        t && F.set(`${t[1]}@${t[2]}`, t[3].split(/\s+/));
      }
      if (d === "LINE ASSIGNS") {
        const t = o.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (t) {
          const r = { story: t[2], section: t[3], rigidZone: 0, releases: [], angle: 0 }, e = o.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          e && (r.rigidZone = parseFloat(e[1]));
          const i = o.match(/RELEASE\s+"([^"]+)"/);
          i && (r.releases = i[1].split(/\s+/));
          const u = o.match(/ANG\s+([-\d.eE+]+)/);
          u && (r.angle = parseFloat(u[1])), c.set(`${t[1]}@${t[2]}`, r);
        }
      }
      if (d === "GRIDS") {
        const t = o.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        t && B.push({ label: t[1], dir: t[2], coord: parseFloat(t[3]) });
      }
      if (d === "FRAME OBJECT LOADS") {
        const t = o.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        t && I.push({ line: t[1], story: t[2], type: t[3], dir: t[4], lc: t[5], val: parseFloat(t[6]) });
      }
      if (d === "AREA CONNECTIVITIES") {
        const t = o.match(/AREA\s+"([^"]+)"\s+(?:FLOOR|WALL|RAMP|PANEL)?\s*\d+\s+(.+)/);
        if (t) {
          const r = ((_a = t[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((e) => e.replace(/"/g, ""))) || [];
          M.push({ name: t[1], pts: r, nStories: 0 });
        }
      }
      if (d === "WALL/SLAB/DECK SECTIONS" || d === "SLAB PROPERTIES" || d === "WALL PROPERTIES" || d === "DECK PROPERTIES") {
        const t = o.match(/SHELLPROP\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const r = t[1], e = (_b = t[2].match(/SLABTHICKNESS\s+([\d.eE+-]+)/)) == null ? void 0 : _b[1], i = (_c = t[2].match(/WALLTHICKNESS\s+([\d.eE+-]+)/)) == null ? void 0 : _c[1], u = (_d = t[2].match(/MATERIAL\s+"([^"]+)"/)) == null ? void 0 : _d[1], A = (_e = t[2].match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _e[1];
          if (e || i) {
            const x = J.get(r) || { material: "", modelingType: "ShellThin" };
            J.set(r, { material: u ?? x.material, modelingType: A ?? x.modelingType, thickness: parseFloat(e ?? i ?? "0") });
          }
        }
      }
      if (d === "AREA ASSIGNS") {
        const t = o.match(/AREAASSIGN\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const r = t[1], e = t[2], i = t[3], u = ((_f = i.match(/SECTION\s+"([^"]+)"/)) == null ? void 0 : _f[1]) ?? "", A = ((_g = i.match(/CARDINALPOINT\s+"([^"]+)"/)) == null ? void 0 : _g[1]) ?? "CENTROID", x = ((_h = i.match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _h[1]) ?? "ShellThin";
          _.set(`${r}@${e}`, { story: e, section: u, modelingType: x, cardinalPoint: A });
        }
      }
      if (d === "SHELL UNIFORM LOAD SETS") {
        const t = o.match(/SHELLUNIFORMLOADSET\s+"([^"]+)"\s+LOADPAT\s+"([^"]+)"\s+VALUE\s+([\d.eE+-]+)/);
        if (t) {
          const r = t[1], e = t[2], i = parseFloat(t[3]);
          k.has(r) || k.set(r, []), k.get(r).push({ loadpat: e, value: i });
        }
      }
      if (d === "SHELL OBJECT LOADS") {
        const t = o.match(/AREALOAD\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const r = t[1], e = t[2], i = t[3], u = ((_i = i.match(/TYPE\s+"([^"]+)"/)) == null ? void 0 : _i[1]) ?? "";
          if (u === "UNIFLOADSET") {
            const A = ((_j = i.match(/UNIFLOADSET"\s+"([^"]+)"/)) == null ? void 0 : _j[1]) ?? ((_k = i.match(/"([^"]+)"\s*$/)) == null ? void 0 : _k[1]) ?? "";
            z.push({ area: r, story: e, type: "UNIFLOADSET", dir: "GRAV", lc: A, val: 0 });
          } else {
            const A = ((_l = i.match(/DIR\s+"([^"]+)"/)) == null ? void 0 : _l[1]) ?? "GRAV", x = ((_m = i.match(/LC\s+"([^"]+)"/)) == null ? void 0 : _m[1]) ?? "", Y = parseFloat(((_n = i.match(/FVAL\s+([\d.eE+-]+)/)) == null ? void 0 : _n[1]) ?? "0");
            z.push({ area: r, story: e, type: u, dir: A, lc: x, val: Y });
          }
        }
      }
    }
  }
  const l = [];
  for (const n of z) if (n.type === "UNIFLOADSET") {
    const o = k.get(n.lc);
    if (o) for (const t of o) l.push({ area: n.area, story: n.story, type: "UNIFF", dir: n.dir, lc: t.loadpat, val: t.value });
  } else l.push(n);
  z.length = 0, z.push(...l);
  const p = /* @__PURE__ */ new Map();
  if (O.length > 0) {
    const n = O.length - 1;
    p.set(O[n].name, O[n].elev);
    for (let o = n - 1; o >= 0; o--) {
      const r = p.get(O[o + 1].name) + O[o].height;
      O[o].elev = r, p.set(O[o].name, r);
    }
  }
  const S = [], m = [], y = /* @__PURE__ */ new Map(), L = (n, o) => `${n}@${o}`, P = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Map();
  for (const n of U) D.set(n.name, n);
  for (const n of U) for (const [o, t] of c) {
    if (!o.startsWith(n.name + "@")) continue;
    const r = t.story, e = O.findIndex((i) => i.name === r);
    if (!(e < 0)) if (n.type === "COLUMN" || n.type === "BRACE") {
      P.add(L(n.pt2, r));
      const i = Math.max(n.nStories, 1), u = Math.min(e + i, O.length - 1);
      P.add(L(n.pt1, O[u].name));
    } else P.add(L(n.pt1, r)), P.add(L(n.pt2, r));
  }
  for (const [n] of F) P.add(n);
  for (const n of M) for (const [o, t] of _) if (o.startsWith(n.name + "@")) for (const r of n.pts) P.add(L(r, t.story));
  for (const n of P) {
    const [o, t] = n.split("@"), r = Z.get(o), e = p.get(t);
    r === void 0 || e === void 0 || (S.push([r[0], r[1], e]), m.push(n), y.set(n, S.length - 1));
  }
  const V = [], X = [], st = [], tt = [], nt = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map();
  for (const n of U) for (const [o, t] of c) {
    if (!o.startsWith(n.name + "@")) continue;
    const r = t.story, e = O.findIndex((H) => H.name === r);
    if (e < 0) continue;
    let i, u;
    if (n.type === "COLUMN" || n.type === "BRACE") {
      const H = Math.max(n.nStories, 1), v = Math.min(e + H, O.length - 1);
      i = L(n.pt1, O[v].name), u = L(n.pt2, r);
    } else i = L(n.pt1, r), u = L(n.pt2, r);
    const A = y.get(i), x = y.get(u);
    if (A === void 0 || x === void 0 || A === x) continue;
    const Y = V.length;
    if (V.push([A, x]), X.push(n.name), st.push(n.type), tt.push(r), nt.set(Y, t.section), t.rigidZone > 0 && ct.set(Y, [t.rigidZone, t.rigidZone]), t.releases.length > 0) {
      const H = new Array(12).fill(false), v = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const G of t.releases) {
        const j = v[G];
        j !== void 0 && (H[j] = true);
      }
      q.set(Y, H);
    }
  }
  const rt = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map();
  for (const n of M) for (const [o, t] of _) {
    if (!o.startsWith(n.name + "@")) continue;
    const r = [];
    for (const i of n.pts) {
      const u = L(i, t.story), A = y.get(u);
      if (A === void 0) {
        r.length = 0;
        break;
      }
      r.push(A);
    }
    if (r.length !== 4) continue;
    const e = V.length;
    V.push(r), X.push(n.name), st.push("FLOOR"), tt.push(t.story), rt.set(e, t.section), K.set(e, t.cardinalPoint);
  }
  const pt = /* @__PURE__ */ new Map();
  for (const n of z) if (n.type === "UNIFF") for (let o = 0; o < V.length; o++) {
    if (X[o] !== n.area || tt[o] !== n.story) continue;
    const t = V[o];
    if (t.length !== 4) continue;
    const r = t.map((x) => S[x]), e = [r[1][0] - r[0][0], r[1][1] - r[0][1]], i = [r[3][0] - r[0][0], r[3][1] - r[0][1]], u = Math.abs(e[0] * i[1] - e[1] * i[0]), A = -n.val * u / 4;
    for (const x of t) {
      const Y = pt.get(x) || [0, 0, 0, 0, 0, 0];
      Y[2] += A, pt.set(x, Y);
    }
  }
  const et = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map();
  for (const [n, o] of nt) {
    const t = b.get(o);
    if (!t) continue;
    const r = N.get(t.material);
    r && (et.set(n, r.E), Et.set(n, r.G));
    const e = t.D, i = t.B, u = t.TF, A = t.TW;
    let x = 0, Y = 0, H = 0, v = 0, G = 0, j = 0, Q = "rect";
    switch (t.shape) {
      case "Concrete Rectangular":
        x = e * i, Y = i * e ** 3 / 12, H = e * i ** 3 / 12, v = i * e ** 3 * (1 / 3 - 0.21 * (e / i) * (1 - e ** 4 / (12 * i ** 4))), G = j = 5 / 6 * x, Q = "rect";
        break;
      case "Concrete Circle":
        x = Math.PI * e ** 2 / 4, Y = H = Math.PI * e ** 4 / 64, v = Math.PI * e ** 4 / 32, G = j = 0.9 * x, Q = "circ";
        break;
      case "Steel I/Wide Flange":
        x = 2 * i * u + (e - 2 * u) * A, Y = (i * e ** 3 - (i - A) * (e - 2 * u) ** 3) / 12, H = (2 * u * i ** 3 + (e - 2 * u) * A ** 3) / 12, v = (2 * i * u ** 3 + (e - 2 * u) * A ** 3) / 3, G = (e - 2 * u) * A, j = 2 * i * u * 5 / 6, Q = "I";
        break;
      case "Steel Tube":
        x = e * i - (e - 2 * A) * (i - 2 * A), Y = (i * e ** 3 - (i - 2 * A) * (e - 2 * A) ** 3) / 12, H = (e * i ** 3 - (e - 2 * A) * (i - 2 * A) ** 3) / 12, v = 2 * A * (e - A) * (i - A) * ((e - A) * (i - A)) / (e - A + (i - A)), G = 2 * e * A, j = 2 * i * A, Q = "HSS";
        break;
      case "Filled Steel Tube":
        x = e * i, Y = i * e ** 3 / 12, H = e * i ** 3 / 12, v = 2 * A * (e - A) * (i - A) * ((e - A) * (i - A)) / (e - A + (i - A)), G = 2 * e * A + 5 / 6 * (e - 2 * A) * (i - 2 * A), j = 2 * i * A + 5 / 6 * (e - 2 * A) * (i - 2 * A), Q = "CFT";
        break;
      case "Steel Angle": {
        const ot = u || A;
        x = ot * (e + i - ot), Y = ot * (e ** 3 + i * ot ** 2 + ot ** 2 * (e - ot)) / 12, H = ot * (i ** 3 + e * ot ** 2 + ot ** 2 * (i - ot)) / 12, v = (e + i - ot) * ot ** 3 / 3, G = e * ot, j = i * ot, Q = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        x = 2 * i * u + (e - 2 * u) * A, Y = (A * e ** 3 + 2 * i * u * (e - u) ** 2) / 12, H = (2 * u * i ** 3 + (e - 2 * u) * A ** 3) / 12, v = (2 * i * u ** 3 + (e - 2 * u) * A ** 3) / 3, G = (e - 2 * u) * A, j = 2 * i * u * 5 / 6, Q = t.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        x = 2 * (2 * i * u + (e - 2 * u) * A), Y = 2 * (A * e ** 3 + 2 * i * u * (e - u) ** 2) / 12, H = 2 * (2 * u * i ** 3 + (e - 2 * u) * A ** 3) / 12, v = 2 * (2 * i * u ** 3 + (e - 2 * u) * A ** 3) / 3, G = 2 * (e - 2 * u) * A, j = 4 * i * u * 5 / 6, Q = "2C";
        break;
      default:
        e > 0 && i > 0 && (x = e * i, Y = i * e ** 3 / 12, H = e * i ** 3 / 12, v = Math.min(e, i) * Math.max(e, i) ** 3 / 3 * 0.3, G = j = 5 / 6 * x);
        break;
    }
    t.modI2 && (H *= t.modI2), t.modI3 && (Y *= t.modI3), ht.set(n, x), dt.set(n, Y), St.set(n, H), lt.set(n, v), G > 0 && ut.set(n, G), j > 0 && ft.set(n, j), it.set(n, { type: Q, b: i || void 0, h: e || void 0, d: Q === "circ" || Q === "pipe" ? e : void 0, tw: A || void 0, tf: u || void 0, r: t.R, name: o });
  }
  const mt = /* @__PURE__ */ new Map(), At = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map();
  for (const [n, o] of rt) {
    const t = J.get(o);
    if (!t) continue;
    mt.set(n, t.thickness);
    const r = N.get(t.material);
    r && (et.set(n, r.E), Et.set(n, r.G), At.set(n, r.nu), r.density !== void 0 && at.set(n, r.density)), Tt.set(n, t.modelingType === "ShellThin" ? 1 : 0);
  }
  const s = /* @__PURE__ */ new Map();
  for (const [n, o] of F) {
    const t = y.get(n);
    if (t === void 0) continue;
    const r = [false, false, false, false, false, false];
    for (const e of o) e === "UX" && (r[0] = true), e === "UY" && (r[1] = true), e === "UZ" && (r[2] = true), e === "RX" && (r[3] = true), e === "RY" && (r[4] = true), e === "RZ" && (r[5] = true);
    s.set(t, r);
  }
  const f = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map();
  for (let n = 0; n < X.length; n++) T.set(`${X[n]}@${tt[n]}`, n);
  for (const n of I) {
    const o = T.get(`${n.line}@${n.story}`);
    if (o === void 0) continue;
    const [t, r] = V[o], e = S[t], i = S[r], u = Math.sqrt((i[0] - e[0]) ** 2 + (i[1] - e[1]) ** 2 + (i[2] - e[2]) ** 2);
    if (u < 1e-10) continue;
    const A = n.val * u / 2;
    let x = 0, Y = 0, H = 0;
    n.dir === "GRAV" || n.dir === "GRAVITY" ? H = -A : n.dir === "X" ? x = A : n.dir === "Y" ? Y = A : n.dir === "Z" && (H = -A);
    for (const v of [t, r]) {
      const G = f.get(v) || [0, 0, 0, 0, 0, 0];
      G[0] += x, G[1] += Y, G[2] += H, f.set(v, G);
    }
  }
  const E = /* @__PURE__ */ new Map();
  for (const [n, o] of nt) {
    const t = b.get(o);
    if (!t) continue;
    const r = N.get(t.material);
    (r == null ? void 0 : r.density) && E.set(n, r.density);
  }
  for (const [n, o] of at) E.set(n, o);
  for (const [n, o] of pt) {
    const t = f.get(n) || [0, 0, 0, 0, 0, 0];
    f.set(n, [t[0] + o[0], t[1] + o[1], t[2] + o[2], t[3] + o[3], t[4] + o[4], t[5] + o[5]]);
  }
  return { units: C, stories: O.reverse(), materials: N, frameSections: b, nodes: S, nodeNames: m, nodeNameToIdx: y, elements: V, elementNames: X, elementTypes: st, elementStories: tt, elementSections: nt, nodeInputs: { supports: s, loads: f }, elementInputs: { elasticities: et, shearModuli: Et, areas: ht, momentsOfInertiaZ: dt, momentsOfInertiaY: St, torsionalConstants: lt, shearAreasY: ut, shearAreasZ: ft, rigidOffsets: ct, momentReleases: q, densities: E, sectionShapes: it, thicknesses: mt, poissonsRatios: At, plateFormulations: Tt }, sectionShapes: it, grids: B, info: { nNodes: S.length, nFrames: V.length, nAreas: M.length, title: R }, rawSections: h, rawSectionHeaders: a };
}
function w($) {
  return $ && parseFloat($) || 0;
}
function Mt($) {
  const g = /* @__PURE__ */ new Map(), C = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let O;
  for (; (O = C.exec($)) !== null; ) g.set(O[1], O[2] !== void 0 ? O[2] : O[3]);
  return g;
}
function Ct($) {
  const g = $.split(/\r?\n/);
  return g.some((O) => O.trim().startsWith("TABLE:")) ? $t(g) : Nt(g);
}
function $t($) {
  var _a, _b, _c, _d, _e, _f;
  const g = [];
  let C = "";
  for (const B of $) {
    const R = B.trimEnd();
    R.endsWith("_") ? C += R.slice(0, -1) + " " : (C += R, g.push(C), C = "");
  }
  C && g.push(C);
  const O = { force: "KN", length: "m" };
  let N = "UX,UY,UZ,RX,RY,RZ";
  const b = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), F = [], c = [], I = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), z = [];
  let k = "";
  for (const B of g) {
    const R = B.trim();
    if (!R || R.startsWith(";") || R.startsWith("File ")) continue;
    if (R.startsWith("TABLE:")) {
      const h = R.match(/TABLE:\s+"(.+?)"/);
      k = h ? h[1].toUpperCase() : "";
      continue;
    }
    if (R === "END TABLE DATA") {
      k = "";
      continue;
    }
    const d = Mt(R);
    switch (k) {
      case "PROGRAM CONTROL": {
        const h = d.get("CurrUnits");
        if (h) {
          const a = h.split(",").map((l) => l.trim());
          a[0] && (O.force = a[0]), a[1] && (O.length = a[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const h = d.get("Material");
        h && !b.has(h) && b.set(h, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const h = d.get("Material");
        if (h) {
          const a = b.get(h) || { E: 0, nu: 0, G: 0 };
          a.E = w(d.get("E1")), a.G = w(d.get("G12")), a.nu = w(d.get("U12")), a.density = w(d.get("UnitMass")), b.set(h, a);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const h = d.get("Material");
        h && b.has(h) && (b.get(h).fy = w(d.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const h = d.get("SectionName");
        h && Z.set(h, { material: d.get("Material") || "", shape: d.get("Shape") || "Rectangular", D: w(d.get("t3")), B: w(d.get("t2")), TF: w(d.get("tf")), TW: w(d.get("tw")), A: w(d.get("Area")), Iz: w(d.get("I33")), Iy: w(d.get("I22")), J: w(d.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const h = d.get("Section");
        h && U.set(h, { material: d.get("Material") || "", type: d.get("Type") || "Shell", thickness: w(d.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const h = d.get("Joint");
        if (h) {
          const a = w(d.get("XorR")), l = w(d.get("Y")), p = w(d.get("Z"));
          M.set(h, [a, l, p]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const h = d.get("Frame"), a = d.get("JointI"), l = d.get("JointJ");
        h && a && l && F.push({ name: h, j1: a, j2: l });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const h = d.get("Area");
        if (h) {
          const a = parseInt(d.get("NumJoints") || "4"), l = [];
          for (let p = 1; p <= a; p++) {
            const S = d.get(`Joint${p}`);
            S && l.push(S);
          }
          l.length >= 3 && c.push({ name: h, joints: l });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const h = d.get("Joint");
        if (h) {
          const a = [((_a = d.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = d.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = d.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = d.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = d.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = d.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          I.set(h, a);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const h = d.get("Frame"), a = d.get("AnalSect");
        h && a && _.set(h, a);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const h = d.get("Area"), a = d.get("Section");
        h && a && J.set(h, a);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const h = d.get("Joint");
        h && z.push({ joint: h, fx: w(d.get("F1")), fy: w(d.get("F2")), fz: w(d.get("F3")), mx: w(d.get("M1")), my: w(d.get("M2")), mz: w(d.get("M3")) });
        break;
      }
    }
  }
  return gt(O, N, b, Z, U, M, F, c, I, _, J, z);
}
function Nt($) {
  const g = { force: "KN", length: "m" };
  let C = "UX,UY,UZ,RX,RY,RZ";
  const O = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), U = [], M = [], F = /* @__PURE__ */ new Map(), c = [];
  let I = "", _ = "";
  for (const k of $) {
    const B = k.trim();
    if (!B || B.startsWith(";")) continue;
    if (!k.startsWith(" ") && !k.startsWith("	")) {
      const h = B.toUpperCase();
      if (h === "END") break;
      h.startsWith("SHELL SECTION") ? I = "SHELL SECTION" : h.startsWith("FRAME SECTION") ? I = "FRAME SECTION" : I = h.split(/\s+/)[0];
      continue;
    }
    const R = Mt(B), d = B.split(/\s+/);
    switch (I) {
      case "SYSTEM": {
        const h = R.get("DOF");
        h && (C = h);
        const a = R.get("LENGTH");
        a && (g.length = a);
        const l = R.get("FORCE");
        l && (g.force = l);
        break;
      }
      case "JOINT": {
        const h = d[0];
        Z.set(h, [w(R.get("X")), w(R.get("Y")), w(R.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const h = R.get("ADD"), a = R.get("DOF");
        if (h && a) {
          const l = a.split(","), p = [false, false, false, false, false, false];
          for (const S of l) {
            const m = S.toUpperCase();
            (m === "UX" || m === "U1") && (p[0] = true), (m === "UY" || m === "U2") && (p[1] = true), (m === "UZ" || m === "U3") && (p[2] = true), (m === "RX" || m === "R1") && (p[3] = true), (m === "RY" || m === "R2") && (p[4] = true), (m === "RZ" || m === "R3") && (p[5] = true);
          }
          F.set(h, p);
        }
        break;
      }
      case "MATERIAL": {
        const h = R.get("NAME");
        if (h) _ = h, O.set(h, { E: 0, nu: 0, G: 0 });
        else if (_) {
          const a = O.get(_), l = R.get("E");
          l && (a.E = w(l));
          const p = R.get("U");
          p && (a.nu = w(p)), a.G = a.E / (2 * (1 + a.nu));
          const S = R.get("M");
          S && (a.density = w(S));
        }
        break;
      }
      case "SHELL": {
        const h = d[0], a = R.get("J");
        R.get("SEC"), a && M.push({ name: h, joints: a.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const h = R.get("NAME");
        h && b.set(h, { material: R.get("MAT") || "", type: R.get("TYPE") || "Shell", thickness: w(R.get("TH")) });
        break;
      }
      case "FRAME": {
        const h = d[0], a = R.get("J");
        if (a) {
          const l = a.split(",");
          l.length >= 2 && U.push({ name: h, j1: l[0], j2: l[1] });
        }
        break;
      }
      case "LOAD": {
        const h = R.get("ADD");
        h && c.push({ joint: h, fx: w(R.get("UX")), fy: w(R.get("UY")), fz: w(R.get("UZ")), mx: w(R.get("MX")), my: w(R.get("MY")), mz: w(R.get("MZ")) });
        break;
      }
    }
  }
  return gt(g, C, O, N, b, Z, U, M, F, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), c);
}
function gt($, g, C, O, N, b, Z, U, M, F, c, I) {
  var _a;
  const _ = [], J = /* @__PURE__ */ new Map(), z = [];
  for (const [m, y] of b) J.set(m, z.length), _.push(m), z.push(y);
  const k = [], B = [], R = /* @__PURE__ */ new Map();
  for (const m of Z) {
    const y = J.get(m.j1), L = J.get(m.j2);
    if (y !== void 0 && L !== void 0) {
      const P = k.length;
      k.push([y, L]), B.push(m.name);
      const D = F.get(m.name);
      D && R.set(P, D);
    }
  }
  const d = k.length;
  for (const m of U) {
    const y = m.joints.map((L) => J.get(L)).filter((L) => L !== void 0);
    if (y.length >= 3) {
      const L = k.length;
      k.push(y), B.push(m.name);
      const P = c.get(m.name);
      P && R.set(L, P);
    }
  }
  const h = k.length - d, a = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, l = /* @__PURE__ */ new Map(), p = C.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let m = 0; m < k.length; m++) {
    const y = R.get(m), L = y ? O.get(y) : null, P = y ? N.get(y) : null;
    if (L || k[m].length === 2) {
      const D = L || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, V = C.get(D.material) || p, X = V.E || p.E, st = V.nu || 0.3, tt = V.G || X / (2 * (1 + st));
      a.elasticities.set(m, X), a.shearModuli.set(m, tt), a.areas.set(m, D.A || D.D * D.B), a.momentsOfInertiaZ.set(m, D.Iz || D.B * D.D ** 3 / 12), a.momentsOfInertiaY.set(m, D.Iy || D.D * D.B ** 3 / 12), a.torsionalConstants.set(m, D.J || 0), a.densities.set(m, V.density || 0), ((_a = D.shape) == null ? void 0 : _a.includes("Wide Flange")) || D.shape === "I" ? l.set(m, { type: "I", b: D.B, h: D.D, name: y || "I-section" }) : l.set(m, { type: "rect", b: D.B, h: D.D });
    } else if (P) {
      const D = C.get(P.material) || p, V = D.E || p.E, X = D.nu || 0.2, st = D.G || V / (2 * (1 + X));
      a.elasticities.set(m, V), a.shearModuli.set(m, st), a.thicknesses.set(m, P.thickness), a.poissonsRatios.set(m, X), a.densities.set(m, D.density || 0);
    }
  }
  const S = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [m, y] of M) {
    const L = J.get(m);
    L !== void 0 && S.supports.set(L, y);
  }
  for (const m of I) {
    const y = J.get(m.joint);
    if (y !== void 0) {
      const L = S.forces.get(y) || [0, 0, 0, 0, 0, 0];
      L[0] += m.fx, L[1] += m.fy, L[2] += m.fz, L[3] += m.mx, L[4] += m.my, L[5] += m.mz, S.forces.set(y, L);
    }
  }
  return { units: $, dof: g, materials: C, frameSections: O, shellSections: N, nodes: z, nodeNames: _, nodeNameToIdx: J, elements: k, elementNames: B, elementSections: R, nodeInputs: S, elementInputs: a, sectionShapes: l, info: { nNodes: z.length, nFrames: d, nShells: h, title: `SAP2000 (${d} frames, ${h} shells)` } };
}
function xt($) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: g, elements: C, nodeInputs: O, elementInputs: N } = $, b = $.units || { force: "KN", length: "m" }, Z = $.title || "Awatif Model", U = [], M = (a) => U.push(a), F = () => U.push(" ");
  M(`File ${Z}.$2k was saved on m/d/yy at h:mm:ss`), F(), M('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), M("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), F();
  const c = [], I = [];
  if (C.forEach((a, l) => {
    a.length === 2 ? c.push(l) : I.push(l);
  }), c.length > 0) {
    M('TABLE:  "CONNECTIVITY - FRAME"');
    for (const a of c) {
      const l = C[a];
      M(`   Frame=${a + 1}   JointI=${l[0] + 1}   JointJ=${l[1] + 1}   IsCurved=No`);
    }
    F();
  }
  if (I.length > 0) {
    M('TABLE:  "CONNECTIVITY - AREA"');
    for (const a of I) {
      const l = C[a], p = l.map((S, m) => `Joint${m + 1}=${S + 1}`).join("   ");
      M(`   Area=${a + 1}   NumJoints=${l.length}   ${p}`);
    }
    F();
  }
  M('TABLE:  "COORDINATE SYSTEMS"'), M("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), F(), M('TABLE:  "DATABASE FORMAT TYPES"'), M("   UnitsCurr=Yes   OverrideE=No"), F();
  const _ = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map();
  for (const a of c) {
    const l = ((_a = N.areas) == null ? void 0 : _a.get(a)) || 0, p = ((_b = N.momentsOfInertiaZ) == null ? void 0 : _b.get(a)) || 0, S = ((_c = N.momentsOfInertiaY) == null ? void 0 : _c.get(a)) || 0, m = ((_d = N.torsionalConstants) == null ? void 0 : _d.get(a)) || 0, y = ((_e = N.elasticities) == null ? void 0 : _e.get(a)) || 0, L = `MAT_${Math.round(y)}`, P = `A${l.toPrecision(6)}_Iz${p.toPrecision(6)}`;
    if (!_.has(P)) {
      let V = 0.3, X = 0.3;
      l > 0 && p > 0 && (V = Math.sqrt(12 * p / l), X = l / V), _.set(P, { A: l, Iz: p, Iy: S, J: m, b: X, h: V, matKey: L });
    }
    const D = [..._.keys()].indexOf(P) + 1;
    J.set(a, `SEC${D}`);
  }
  if (c.length > 0) {
    M('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const a of c) {
      const l = J.get(a) || "SEC1";
      M(`   Frame=${a + 1}   AutoSelect=N.A.   AnalSect=${l}   MatProp=Default`);
    }
    F();
  }
  if (_.size > 0) {
    M('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let a = 0;
    for (const [, l] of _) {
      a++;
      const p = l.A * 5 / 6;
      M(`   SectionName=SEC${a}   Material=${l.matKey}   Shape=Rectangular   t3=${W(l.h)}   t2=${W(l.b)}   Area=${W(l.A)}   TorsConst=${W(l.J)}   I33=${W(l.Iz)}   I22=${W(l.Iy)}   I23=0   AS2=${W(p)}   AS3=${W(p)} _`), M("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    F();
  }
  const z = !!$.layeredSection && I.length > 0, k = $.layeredSection, B = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
  if (!z) for (const a of I) {
    const l = ((_f = N.thicknesses) == null ? void 0 : _f.get(a)) || 0.1, p = ((_g = N.elasticities) == null ? void 0 : _g.get(a)) || 0, S = `MAT_${Math.round(p)}`, m = `t${l.toPrecision(6)}`;
    B.has(m) || B.set(m, { t: l, matKey: S });
    const y = [...B.keys()].indexOf(m) + 1;
    R.set(a, `SSEC${y}`);
  }
  if (I.length > 0) {
    M('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const a of I) {
      const l = z ? k.name : R.get(a) || "SSEC1";
      M(`   Area=${a + 1}   Section=${l}   MatProp=Default`);
    }
    if (F(), M('TABLE:  "AREA SECTION PROPERTIES"'), z) {
      const a = k, l = ((_h = a.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      M(`   Section=${a.name}   Material=${l}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${W(a.totalThickness)}   BendThick=${W(a.totalThickness)}   Color=Magenta`);
    } else {
      let a = 0;
      for (const [, l] of B) a++, M(`   Section=SSEC${a}   Material=${l.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${W(l.t)}   BendThick=${W(l.t)}   Color=Cyan`);
    }
    if (F(), z) {
      M('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const a = k;
      for (const l of a.layers) {
        const p = l.angle ?? 0, S = l.numIntPts ?? 3;
        M(`   Section=${a.name}   LayerName=${l.name}   Distance=${W(l.distance)}   Thickness=${W(l.thickness)}   Type=Shell   NumIntPts=${S}   Material=${l.material}   MatAngle=${W(p * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      F();
    }
  }
  M('TABLE:  "JOINT COORDINATES"');
  for (let a = 0; a < g.length; a++) {
    const l = g[a];
    M(`   Joint=${a + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${W(l[0])}   Y=${W(l[1])}   Z=${W(l[2])}   SpecialJt=No`);
  }
  if (F(), O.supports && O.supports.size > 0) {
    M('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [a, l] of O.supports) {
      if (!l.some((S) => S)) continue;
      const p = (S) => S ? "Yes" : "No";
      M(`   Joint=${a + 1}   U1=${p(l[0])}   U2=${p(l[1])}   U3=${p(l[2])}   R1=${p(l[3])}   R2=${p(l[4])}   R3=${p(l[5])}`);
    }
    F();
  }
  const d = $.selfWtMult ?? 1;
  if (M('TABLE:  "LOAD PATTERN DEFINITIONS"'), M(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${d}`), F(), M('TABLE:  "LOAD CASE DEFINITIONS"'), M('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), F(), M('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), M('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), F(), O.loads && O.loads.size > 0) {
    M('TABLE:  "JOINT LOADS - FORCE"');
    for (const [a, l] of O.loads) l.some((p) => Math.abs(p) > 1e-12) && M(`   Joint=${a + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${W(l[0])}   F2=${W(l[1])}   F3=${W(l[2])}   M1=${W(l[3])}   M2=${W(l[4])}   M3=${W(l[5])}`);
    F();
  }
  const h = /* @__PURE__ */ new Map();
  for (let a = 0; a < C.length; a++) {
    const l = ((_i = N.elasticities) == null ? void 0 : _i.get(a)) || 0, p = ((_j = N.shearModuli) == null ? void 0 : _j.get(a)) || 0, S = l > 0 && p > 0 ? Math.max(0, Math.min(0.5, l / (2 * p) - 1)) : 0.2, m = ((_k = N.densities) == null ? void 0 : _k.get(a)) || 0, y = `MAT_${Math.round(l)}`;
    h.has(y) || h.set(y, { E: l, nu: S, G: p, rho: m });
  }
  M('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [a] of h) M(`   Material=${a}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  F(), M('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [a, l] of h) M(`   Material=${a}   UnitWeight=${W(l.rho * 9.81)}   UnitMass=${W(l.rho)}   E1=${W(l.E)}   G12=${W(l.G)}   U12=${W(l.nu)}   A1=9.9E-06`);
  F(), M('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [a] of h) M(`   Material=${a}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return F(), M('TABLE:  "PROGRAM CONTROL"'), M(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${b.force}, ${b.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), F(), M("END TABLE DATA"), M(""), U.join(`\r
`);
}
function W($) {
  return $ === 0 || Math.abs($) < 1e-15 ? "0" : Math.abs($) >= 1e6 || Math.abs($) < 1e-3 && Math.abs($) > 0 ? $.toExponential(8) : parseFloat($.toPrecision(10)).toString();
}
function Dt($) {
  const { nodes: g, elements: C, nodeInputs: O, elementInputs: N, title: b, e2kModel: Z } = $, U = Z == null ? void 0 : Z.rawSections;
  return U && U.size > 0 ? Ot(U, Z) : Lt($);
}
function Ot($, g) {
  const C = [], O = g == null ? void 0 : g.rawSectionHeaders;
  for (const [N, b] of $) {
    C.push((O == null ? void 0 : O.get(N)) ?? `$ ${N}`);
    for (const Z of b) C.push(Z);
  }
  return $.has("END OF MODEL FILE") || (C.push("  END"), C.push("$ END OF MODEL FILE")), C.join(`\r
`);
}
function Lt($) {
  var _a, _b, _c;
  const { nodes: g, elements: C, nodeInputs: O, elementInputs: N, title: b, units: Z } = $, U = $.rigidDiaphragm ?? false, M = (Z == null ? void 0 : Z.force) || "Tonf", F = (Z == null ? void 0 : Z.length) || "m", c = [], I = (s) => Math.round(s * 1e4) / 1e4, _ = (() => {
    const s = (M || "Tonf").toLowerCase();
    return s === "tonf" || s === "tonf-f" ? 1 / 9.80665 : s === "kn" || s === "kn-f" ? 1 : s === "kgf" || s === "kg" ? 1 / 980665e-8 : s === "kip" || s === "kips" ? 1 / 4.44822 : 1;
  })(), J = (s) => s * _, z = (s) => s * _, k = (s) => s * _, B = /* @__PURE__ */ new Date(), R = `${B.getMonth() + 1}/${B.getDate()}/${B.getFullYear()}  ${B.getHours()}:${String(B.getMinutes()).padStart(2, "0")}:${String(B.getSeconds()).padStart(2, "0")}`;
  c.push(`$ File   "Hekatan_export.e2k"  saved ${R} in ETABS 22.6.0`), c.push(""), c.push("$ PROGRAM INFORMATION"), c.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), c.push(""), c.push("$ CONTROLS"), c.push(`  UNITS  "${M}"  "${F}"  "C"  `), c.push('  TITLE1  "Hekatan Struct export"  '), b && c.push(`  TITLE2  "${b}"  `), c.push("  PREFERENCE  MERGETOL 0.001"), c.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), c.push("");
  const d = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
  g.forEach((s) => {
    d.add(I(s[0])), h.add(I(s[1]));
  });
  const a = [...d].sort((s, f) => s - f), l = [...h].sort((s, f) => s - f);
  c.push("$ GRIDS"), c.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), a.forEach((s, f) => {
    const T = f < 26 ? String.fromCharCode(65 + f) : String.fromCharCode(65 + f % 26).repeat(Math.floor(f / 26) + 1);
    c.push(`  GRID "G1"  LABEL "${T}"  DIR "X"  COORD ${s}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), l.forEach((s, f) => {
    c.push(`  GRID "G1"  LABEL "${f + 1}"  DIR "Y"  COORD ${s}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), c.push("");
  const p = /* @__PURE__ */ new Set();
  g.forEach((s) => p.add(I(s[2])));
  let S = [...p].sort((s, f) => s - f);
  if (S.length === 1) {
    const s = S[0];
    s > 0 ? S = [0, s] : S = [0, 4];
  }
  const m = [], y = /* @__PURE__ */ new Map();
  m.push("Base"), y.set(S[0], "Base");
  for (let s = 1; s < S.length; s++) {
    const f = `Story${s}`;
    m.push(f), y.set(S[s], f);
  }
  p.size === 1 && p.has(0) && y.set(0, m[1]), c.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let s = S.length - 1; s >= 1; s--) c.push(`  STORY "${m[s]}"  HEIGHT ${I(S[s] - S[s - 1])} MASTERSTORY "Yes"  `);
  S.length > 0 && c.push(`  STORY "Base"  ELEV ${S[0]} `), c.push(""), C.some((s) => s.length === 4), U && (c.push("$ DIAPHRAGM NAMES"), c.push('  DIAPHRAGM "D1"    TYPE RIGID'), c.push("")), c.push("$ MATERIAL PROPERTIES");
  const L = /* @__PURE__ */ new Set();
  (_a = N.elasticities) == null ? void 0 : _a.forEach((s) => L.add(s));
  const P = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map();
  let V = 0, X = 0;
  const st = 980665e-8, tt = /* @__PURE__ */ new Map();
  if (N.densities && N.densities.size > 0) {
    const s = /* @__PURE__ */ new Map();
    N.densities.forEach((f, T) => {
      var _a2;
      const E = (_a2 = N.elasticities) == null ? void 0 : _a2.get(T);
      E !== void 0 && (s.has(E) || s.set(E, []), s.get(E).push(f));
    }), s.forEach((f, T) => {
      const E = f.reduce((o, t) => o + t, 0) / f.length, n = E > 100 ? E * st : E * 9.80665;
      tt.set(T, n);
    });
  }
  for (const s of L) {
    const f = s >= 1e8, T = f ? `Steel_${++V}` : `Conc_${++X}`;
    P.set(s, T), D.set(s, f);
    const E = tt.get(s) ?? (f ? 76.97 : 24), n = z(s), o = k(E), t = [];
    (_b = N.poissonsRatios) == null ? void 0 : _b.forEach((i, u) => {
      var _a2;
      ((_a2 = N.elasticities) == null ? void 0 : _a2.get(u)) === s && t.push(i);
    });
    const r = t.length > 0 ? t.reduce((i, u) => i + u, 0) / t.length : f ? 0.3 : 0.2, e = f ? 117e-7 : 1e-5;
    if (f) {
      c.push(`  MATERIAL  "${T}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${I(o)}`), c.push(`  MATERIAL  "${T}"    SYMTYPE "Isotropic"  E ${I(n)}  U ${r}  A ${e}`);
      const i = 345e3, u = 45e4;
      c.push(`  MATERIAL  "${T}"  FY ${I(z(i))}  FU ${I(z(u))}  FYE ${I(z(i * 1.1))}  FUE ${I(z(u * 1.1))}`);
    } else c.push(`  MATERIAL  "${T}"    TYPE "Concrete"    WEIGHTPERVOLUME ${I(o)}`), c.push(`  MATERIAL  "${T}"    SYMTYPE "Isotropic"  E ${I(n)}  U ${r}  A ${e}`), c.push(`  MATERIAL  "${T}"    FC ${I(z(24e3))}`);
  }
  c.push(""), c.push("$ FRAME SECTIONS");
  const nt = /* @__PURE__ */ new Set(), ct = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), rt = 0.05;
  C.forEach((s, f) => {
    var _a2, _b2, _c2, _d, _e, _f;
    if (s.length !== 2) return;
    const T = (_a2 = N.sectionShapes) == null ? void 0 : _a2.get(f), E = ((_b2 = N.elasticities) == null ? void 0 : _b2.get(f)) ?? 0, n = P.get(E) || "Conc_1", o = D.get(E) ?? E >= 1e8, t = ((_c2 = N.areas) == null ? void 0 : _c2.get(f)) ?? 0, r = ((_d = N.momentsOfInertiaY) == null ? void 0 : _d.get(f)) ?? 0;
    (_e = N.momentsOfInertiaZ) == null ? void 0 : _e.get(f), (_f = N.torsionalConstants) == null ? void 0 : _f.get(f);
    let e = (T == null ? void 0 : T.type) || "rect", i = (T == null ? void 0 : T.h) ?? 0, u = (T == null ? void 0 : T.b) ?? 0, A = (T == null ? void 0 : T.d) ?? 0;
    const x = (T == null ? void 0 : T.tf) ?? 0, Y = (T == null ? void 0 : T.tw) ?? 0;
    i <= 0 && u <= 0 && A <= 0 && t > 0 && (r > 0 ? (i = Math.sqrt(12 * r / t), u = t / i) : i = u = Math.sqrt(t), (!isFinite(i) || i < rt) && (i = rt), (!isFinite(u) || u < rt) && (u = rt), e = "rect"), i <= 0 && u <= 0 && A <= 0 && (i = 0.3, u = 0.3, e = "rect");
    const H = `${e}_${I(i)}_${I(u)}_${I(A)}_${I(x)}_${I(Y)}_${n}`;
    (T == null ? void 0 : T.name) && !q.has(H) && q.set(H, T.name);
    let v = q.get(H);
    if (!v) {
      const Q = o ? "S" : "C";
      e === "rect" ? v = `${Q}_R${Math.round(u * 100)}x${Math.round(i * 100)}` : e === "circ" ? v = `${Q}_C_D${Math.round(A * 100)}` : e === "I" ? v = `${Q}_I${Math.round(i * 100)}x${Math.round(u * 100)}` : e === "HSS" ? v = `${Q}_HSS${Math.round(u * 100)}x${Math.round(i * 100)}x${Math.round(Y * 1e3)}` : v = `${Q}_Sec${nt.size + 1}`, q.set(H, v);
    }
    if (ct.set(f, v), nt.has(v)) return;
    nt.add(v);
    let G;
    e === "I" ? G = "Steel I/Wide Flange" : e === "HSS" ? G = "Steel Tube" : e === "CFT" ? G = "Filled Steel Tube" : e === "pipe" ? G = "Steel Pipe" : e === "L" ? G = "Steel Angle" : e === "C" ? G = "Steel Channel" : e === "2C" ? G = "Steel Double Channel" : e === "circ" ? G = "Concrete Circle" : G = "Concrete Rectangular";
    let j = `  FRAMESECTION  "${v}"  MATERIAL "${n}"  SHAPE "${G}"`;
    i && (j += `  D ${I(i)}`), u && (j += `  B ${I(u)}`), A && !i && (j += `  D ${I(A)}`), x && (j += `  TF ${I(x)}`), Y && (j += `  TW ${I(Y)}`), c.push(j);
  }), c.push("");
  const K = /* @__PURE__ */ new Map();
  let pt = 0;
  g.forEach((s) => {
    const f = `${I(s[0])},${I(s[1])}`;
    K.has(f) || K.set(f, `${++pt}`);
  }), c.push("$ POINT COORDINATES");
  for (const [s, f] of K) {
    const [T, E] = s.split(",").map(Number);
    c.push(`  POINT "${f}"  ${T} ${E} `);
  }
  c.push("");
  const et = (s) => {
    const f = g[s], T = `${I(f[0])},${I(f[1])}`;
    return { pt: K.get(T) || "1", story: y.get(I(f[2])) || "Base" };
  }, Et = (s) => {
    var _a2, _b2, _c2, _d;
    const f = [], T = (_a2 = $.propertyModifiers) == null ? void 0 : _a2.get(s);
    T && T.some((t) => Math.abs(t - 1) > 1e-9) && f.push(`PROPMODIFIERS "${T.map((t) => I(t)).join(" ")}"`);
    const E = (_b2 = N.momentReleases) == null ? void 0 : _b2.get(s);
    if (E && E.some((t) => t)) {
      const t = [];
      E.length === 12 ? (E[0] && t.push("PI"), E[1] && t.push("V2I"), E[2] && t.push("V3I"), E[3] && t.push("TI"), E[4] && t.push("M2I"), E[5] && t.push("M3I"), E[6] && t.push("PJ"), E[7] && t.push("V2J"), E[8] && t.push("V3J"), E[9] && t.push("TJ"), E[10] && t.push("M2J"), E[11] && t.push("M3J")) : E.length === 6 && (E[0] && t.push("TI"), E[1] && t.push("M2I"), E[2] && t.push("M3I"), E[3] && t.push("TJ"), E[4] && t.push("M2J"), E[5] && t.push("M3J")), t.length > 0 && f.push(`RELEASE "${t.join(" ")}"`);
    }
    const n = (_c2 = N.insertionPoints) == null ? void 0 : _c2.get(s);
    n && (Math.abs(n[0]) > 1e-9 || Math.abs(n[1]) > 1e-9) && f.push(`LATEROFFSET ${I(n[0])} TRANSOFFSET ${I(n[1])}`);
    const o = (_d = N.rigidOffsets) == null ? void 0 : _d.get(s);
    return o && (Math.abs(o[0]) > 1e-9 || Math.abs(o[1]) > 1e-9) && f.push(`LENGTHOFFI ${I(o[0])} LENGTHOFFJ ${I(o[1])} RIGIDZONE 0.5`), f.length > 0 ? ` ${f.join(" ")} ` : "";
  }, ht = [], ut = /* @__PURE__ */ new Set(), ft = /* @__PURE__ */ new Map();
  C.forEach((s, f) => {
    if (s.length !== 2) return;
    const T = It(g, s);
    if (T === "BEAM") return;
    const E = g[s[0]][2] <= g[s[1]][2] ? s[0] : s[1], n = g[s[0]][2] <= g[s[1]][2] ? s[1] : s[0];
    if (Math.abs(g[E][0] - g[n][0]) > 1e-6 || Math.abs(g[E][1] - g[n][1]) > 1e-6) return;
    const o = et(E), t = ct.get(f) || `Sec_${f}`, r = `${o.pt}_${t}_${T}`;
    ft.has(r) || ft.set(r, []), ft.get(r).push({ i: f, bot: E, top: n, zBot: I(g[E][2]), zTop: I(g[n][2]), planPt: o.pt, secName: t, type: T });
  }), ft.forEach((s, f) => {
    s.sort((E, n) => E.zBot - n.zBot);
    let T = 0;
    for (let E = 1; E <= s.length; E++) if (E === s.length || Math.abs(s[E].zBot - s[E - 1].zTop) > 1e-6) {
      const o = s.slice(T, E);
      o.length >= 1 && (ht.push({ elemIndices: o.map((t) => t.i), planPt: o[0].planPt, bottomNodeIdx: o[0].bot, topNodeIdx: o[o.length - 1].top, secName: o[0].secName, type: o[0].type, nSegments: o.length }), o.forEach((t) => ut.add(t.i))), T = E;
    }
  }), c.push("$ LINE CONNECTIVITIES");
  const dt = [];
  ht.forEach((s, f) => {
    const T = `C${f + 1}`, E = et(s.topNodeIdx);
    et(s.bottomNodeIdx);
    const n = I(g[s.topNodeIdx][2]), o = I(g[s.bottomNodeIdx][2]), t = S.indexOf(n), r = S.indexOf(o), e = Math.max(1, t - r), i = Et(s.elemIndices[0]);
    c.push(`  LINE  "${T}"  ${s.type}  "${E.pt}"  "${E.pt}"  ${e}`), dt.push(`  LINEASSIGN  "${T}"  "${E.story}"  SECTION "${s.secName}" ${i} RIGIDZONE 0 MAXSTASPC 0.5 MINNUMSTA ${s.nSegments} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  }), C.forEach((s, f) => {
    if (s.length !== 2 || ut.has(f)) return;
    const T = It(g, s), E = ct.get(f) || `Sec_${f}`, n = Et(f);
    if (T === "BEAM") {
      const o = et(s[0]), t = et(s[1]);
      c.push(`  LINE  "E${f + 1}"  BEAM  "${o.pt}"  "${t.pt}"  0`), dt.push(`  LINEASSIGN  "E${f + 1}"  "${o.story}"  SECTION "${E}" ${n} RIGIDZONE 0 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const o = g[s[0]][2] <= g[s[1]][2] ? s[0] : s[1], t = g[s[0]][2] <= g[s[1]][2] ? s[1] : s[0], r = et(t), e = I(g[o][2]), i = I(g[t][2]), u = S.indexOf(e), A = S.indexOf(i), x = Math.max(1, A >= 0 && u >= 0 ? A - u : 1);
      c.push(`  LINE  "E${f + 1}"  ${T}  "${r.pt}"  "${r.pt}"  ${x}`), dt.push(`  LINEASSIGN  "E${f + 1}"  "${r.story}"  SECTION "${E}" ${n} RIGIDZONE 0 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    }
  }), c.push("");
  const St = $.weightMode ?? "auto", lt = /* @__PURE__ */ new Set();
  c.push("$ POINT ASSIGNS"), (_c = O.supports) == null ? void 0 : _c.forEach((s, f) => {
    const T = [];
    if (s[0] && T.push("UX"), s[1] && T.push("UY"), s[2] && T.push("UZ"), s[3] && T.push("RX"), s[4] && T.push("RY"), s[5] && T.push("RZ"), T.length > 0) {
      const E = et(f), n = E.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      c.push(`  POINTASSIGN  "${E.pt}"  "${E.story}"  RESTRAINT "${T.join(" ")}" ${n} `), lt.add(`${E.pt}@${E.story}`);
    }
  }), ht.forEach((s) => {
    const f = et(s.topNodeIdx), T = `${f.pt}@${f.story}`;
    U && !lt.has(T) && f.story !== "Base" && (c.push(`  POINTASSIGN  "${f.pt}"  "${f.story}"  DIAPH "D1"  `), lt.add(T));
  }), St === "manual" && O.loads && O.loads.forEach((s, f) => {
    const T = et(f), E = `${T.pt}@${T.story}`;
    lt.has(E) || (c.push(`  POINTASSIGN  "${T.pt}"  "${T.story}"  DIAPH "DISCONNECTED"  `), lt.add(E));
  }), c.push(""), c.push("$ LINE ASSIGNS"), dt.forEach((s) => c.push(s)), c.push("");
  const it = [];
  C.forEach((s, f) => {
    if (s.length === 4) {
      const T = g[s[0]], E = g[s[1]], n = g[s[2]], o = [E[0] - T[0], E[1] - T[1], E[2] - T[2]], t = [n[0] - T[0], n[1] - T[1], n[2] - T[2]], r = o[1] * t[2] - o[2] * t[1], e = o[2] * t[0] - o[0] * t[2], i = o[0] * t[1] - o[1] * t[0], u = Math.sqrt(r * r + e * e + i * i), A = u > 1e-10 && Math.abs(i) / u < 0.5;
      it.push({ idx: f, el: s, isWall: A });
    }
  });
  const mt = (() => {
    for (const [s, f] of D) if (!f) return P.get(s);
    return P.values().next().value || "Conc_1";
  })(), At = (s, f) => {
    var _a2;
    for (const T of it) if (s(T)) {
      const E = (_a2 = N.thicknesses) == null ? void 0 : _a2.get(T.idx);
      if (E !== void 0) return E;
    }
    return f;
  };
  if (it.some((s) => !s.isWall)) {
    c.push("$ SLAB PROPERTIES");
    const s = At((f) => !f.isWall, 0.15);
    c.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${mt}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${I(s)} `), c.push("");
  }
  if (it.some((s) => s.isWall)) {
    c.push("$ WALL PROPERTIES");
    const s = At((f) => f.isWall, 0.2);
    c.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${mt}"  MODELINGTYPE "ShellThin"  WALLTHICKNESS ${I(s)} `), c.push("");
  }
  if (it.length > 0) {
    c.push("$ AREA CONNECTIVITIES");
    const s = [];
    it.forEach((f, T) => {
      const { el: E, isWall: n } = f, o = n ? `W${T + 1}` : `F${T + 1}`, t = n ? "PANEL" : "FLOOR", r = E.map((e) => et(e));
      if (n) {
        const e = g[E[0]][2] <= g[E[2]][2] ? 0 : 2, i = g[E[1]][2] <= g[E[3]][2] ? 1 : 3;
        c.push(`  AREA "${o}"  ${t}  4  "${r[e].pt}"  "${r[i].pt}"  "${r[i].pt}"  "${r[e].pt}"  1  1  0  0  `);
        const u = r[e === 0 ? 2 : 0].story;
        s.push(`  AREAASSIGN  "${o}"  "${u}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        c.push(`  AREA "${o}"  ${t}  4  "${r[0].pt}"  "${r[1].pt}"  "${r[2].pt}"  "${r[3].pt}"  0  0  0  0  `);
        const e = U ? ' DIAPH  "D1" ' : "";
        s.push(`  AREAASSIGN  "${o}"  "${r[0].story}"  SECTION "Losa" ${e} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }
    }), c.push(""), c.push("$ AREA ASSIGNS"), s.forEach((f) => c.push(f)), c.push("");
  }
  const Tt = St === "manual" ? 0 : 1;
  c.push("$ LOAD PATTERNS"), c.push(`  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  ${Tt}`), c.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), c.push("");
  const at = [];
  return O.loads && O.loads.size > 0 && O.loads.forEach((s, f) => {
    const [T, E, n] = s, o = et(f);
    Math.abs(T) > 1e-10 && at.push(`  POINTLOAD  "${o.pt}"  "${o.story}"  TYPE "FORCE"  LC "Dead"  FX ${I(J(T))}  FY 0  FZ 0`), Math.abs(E) > 1e-10 && at.push(`  POINTLOAD  "${o.pt}"  "${o.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY ${I(J(E))}  FZ 0`), St === "manual" && Math.abs(n) > 1e-10 && at.push(`  POINTLOAD  "${o.pt}"  "${o.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY 0  FZ ${I(J(n))}`);
  }), O.moments && O.moments.size > 0 && O.moments.forEach((s, f) => {
    const [T, E, n] = s, o = et(f);
    Math.abs(T) > 1e-10 && at.push(`  POINTLOAD  "${o.pt}"  "${o.story}"  TYPE "MOMENT"  LC "Dead"  MX ${I(J(T))}  MY 0  MZ 0`), Math.abs(E) > 1e-10 && at.push(`  POINTLOAD  "${o.pt}"  "${o.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY ${I(J(E))}  MZ 0`), Math.abs(n) > 1e-10 && at.push(`  POINTLOAD  "${o.pt}"  "${o.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY 0  MZ ${I(J(n))}`);
  }), at.length > 0 && (c.push("$ POINT OBJECT LOADS"), at.forEach((s) => c.push(s)), c.push("")), c.push("$ ANALYSIS OPTIONS"), c.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), c.push('  PDELTA  METHOD "NONE"  '), c.push(""), c.push("$ MASS SOURCE"), c.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), c.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), c.push(""), c.push("$ LOAD CASES"), c.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), c.push('  LOADCASE "Dead"  LOADPAT  "Dead"  SF 1 '), c.push('  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), c.push('  LOADCASE "Live"  LOADPAT  "Live"  SF 1 '), c.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), c.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), c.push(""), c.push("$ LOAD COMBINATIONS"), c.push('  COMBO "1.4D"  TYPE "Linear Add"  '), c.push('  COMBO "1.4D"  LOADCASE  "Dead"  SF 1.4 '), c.push('  COMBO "1.2D+1.6L"  TYPE "Linear Add"  '), c.push('  COMBO "1.2D+1.6L"  LOADCASE  "Dead"  SF 1.2 '), c.push('  COMBO "1.2D+1.6L"  LOADCASE  "Live"  SF 1.6 '), c.push(""), c.push("  END"), c.push("$ END OF MODEL FILE"), c.join(`\r
`);
}
function It($, g) {
  const C = $[g[0]], O = $[g[1]], N = Math.abs(O[2] - C[2]), b = Math.sqrt((O[0] - C[0]) ** 2 + (O[1] - C[1]) ** 2), Z = N > b * 0.5;
  return Z && b > 0.01 ? "BRACE" : Z ? "COLUMN" : "BEAM";
}
export {
  xt as a,
  Ct as b,
  Rt as c,
  Dt as e,
  yt as p
};
