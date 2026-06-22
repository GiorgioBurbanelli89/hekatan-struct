function Rt() {
  const O = document.createElement("div");
  O.id = "modal-results", O.style.cssText = `
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
  let g = false;
  const y = 0.9;
  function N($, P) {
    var _a, _b, _c, _d;
    if (!$.frequencies || $.frequencies.length === 0) {
      O.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const _ = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], Y = [0, 0, 0, 0, 0, 0], I = $.frequencies.length;
    let x = -1, r = -1, T = -1, V = 0, W = 0;
    {
      const o = [0, 0, 0, 0, 0, 0];
      for (let d = 0; d < I; d++) {
        const M = ((_a = $.massParticipation) == null ? void 0 : _a[d]) || [0, 0, 0, 0, 0, 0];
        for (let m = 0; m < 6; m++) o[m] += M[m];
        x < 0 && o[0] >= y && (x = d + 1), r < 0 && o[1] >= y && (r = d + 1), T < 0 && o[0] >= y && o[1] >= y && (T = d + 1);
      }
      V = o[0], W = o[1];
    }
    let z = -1, U = -1, k = -1;
    const L = 0.1;
    for (let o = 0; o < I; o++) {
      const d = ((_b = $.massParticipation) == null ? void 0 : _b[o]) || [0, 0, 0, 0, 0, 0];
      z < 0 && d[0] > L && (z = o + 1), U < 0 && d[1] > L && (U = o + 1), k < 0 && d[5] > L && (k = o + 1);
    }
    const f = T > 0 ? `<span style="color:#0f0">\u2713 ASCE 7-22 \xA712.9.1.1 \u2014 90 % alcanzado en X e Y al modo ${T} de ${I}</span>` : x > 0 && r < 0 ? `<span style="color:#fa0">\u26A0 X cumple en modo ${x}, Y todav\xEDa en ${(W * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : r > 0 && x < 0 ? `<span style="color:#fa0">\u26A0 Y cumple en modo ${r}, X todav\xEDa en ${(V * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : `<span style="color:#f44">\u2717 ASCE 7-22 NO cumplido en ${I} modos \xB7 \u03A3Ux=${(V * 100).toFixed(1)} % \xB7 \u03A3Uy=${(W * 100).toFixed(1)} % \u2014 aumentar nModes</span>`, h = (() => {
      const o = (d, M) => {
        var _a2;
        if (d < 0) return `<span style="color:#f44">${M}: no encontrado en ${I} modos</span>`;
        const m = ((_a2 = $.massParticipation) == null ? void 0 : _a2[d - 1]) || [0, 0, 0, 0, 0, 0], R = M === "Ux" ? 0 : M === "Uy" ? 1 : 5, C = $.frequencies[d - 1] > 0 ? 1 / $.frequencies[d - 1] : 0;
        return `<span style="color:#0f0">${M}: modo ${d}, T=${C.toFixed(3)} s, MPF=${(m[R] * 100).toFixed(1)} %</span>`;
      };
      return `<div style="margin:4px 0; padding:4px 6px; background:rgba(0,255,255,0.05); border-left:2px solid #0ff; font-size:11px;">
  \u{1F3AF} <b>Modos s\xEDsmicos principales</b> (ASCE 7-22 \xA712.9.1):<br>
  ${o(z, "Ux")} \xB7 ${o(U, "Uy")} \xB7 ${o(k, "Rz")}
</div>`;
    })();
    let i = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${P.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
    if (i += '<div id="modal-body" style="padding:0 12px 10px 12px;">', i += `<div style="padding:6px 0; font-weight:bold; font-size:13px;">${f}</div>`, i += h, P.properties) for (const o of P.properties) i += `<span style="color:#888">${o}</span>
`;
    i += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const o of _) i += `<th style="padding:2px 5px">${o}</th>`;
    i += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let o = 0; o < 6; o++) Y[o] = 0;
    if ($.frequencies.forEach((o, d) => {
      var _a2;
      const M = o > 0 ? 1 / o : 0, m = o * 2 * Math.PI, R = ((_a2 = $.massParticipation) == null ? void 0 : _a2[d]) || [0, 0, 0, 0, 0, 0];
      for (let X = 0; X < 6; X++) Y[X] += R[X];
      let C = 0, B = R[0];
      for (let X = 1; X < 6; X++) R[X] > B && (B = R[X], C = X);
      const F = B < 0.05 ? "\u2014" : `${_[C]} (${(B * 100).toFixed(0)} %)`, H = C === 0 || C === 1 ? "#0f0" : C === 5 ? "#0ff" : C === 2 ? "#fa0" : "#888", K = d + 1 === x, tt = d + 1 === r, st = d + 1 === T;
      i += `<tr style="border-bottom:1px solid #fff1; ${st ? "background:rgba(0,255,0,0.12);" : K || tt ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${d + 1}${st ? " \u2605" : ""}</td>
  <td style="padding:2px 6px; text-align:right">${o.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${M.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${m.toFixed(2)}</td>`;
      for (let X = 0; X < 6; X++) {
        const rt = (R[X] * 100).toFixed(1), pt = R[X] > 0.5 ? "#f00" : R[X] > 0.1 ? "#ff0" : "#0f0";
        i += `<td style="padding:2px 5px; text-align:right; color:${pt}">${rt}%</td>`;
      }
      const q = Y[0] >= y ? "#0f0" : "#0ff", ct = Y[1] >= y ? "#0f0" : "#0ff";
      i += `<td style="padding:2px 5px; text-align:right; color:${q}">${(Y[0] * 100).toFixed(1)}%${K ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${ct}">${(Y[1] * 100).toFixed(1)}%${tt ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(Y[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${H}">${F}</td></tr>`;
    }), i += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, i += "</div>", O.innerHTML = i, g) {
      const o = O.querySelector("#modal-body"), d = O.querySelector("#modal-minimize");
      o && (o.style.display = "none"), d && (d.textContent = "\u25A2", d.title = "Restaurar");
    }
    (_c = O.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      g = !g;
      const o = O.querySelector("#modal-body"), d = O.querySelector("#modal-minimize");
      g ? (o.style.display = "none", d.textContent = "\u25A2", d.title = "Restaurar") : (o.style.display = "block", d.textContent = "\u25AC", d.title = "Minimizar");
    }), (_d = O.querySelector("#modal-copy")) == null ? void 0 : _d.addEventListener("click", () => {
      const o = [];
      o.push(`Modal Analysis \u2014 ${P.title}`), o.push(f.replace(/<[^>]+>/g, ""));
      const d = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${_.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      o.push(d), o.push("-".repeat(d.length));
      const M = [0, 0, 0, 0, 0, 0];
      $.frequencies.forEach((R, C) => {
        var _a2;
        const B = R > 0 ? 1 / R : 0, F = R * 2 * Math.PI, H = ((_a2 = $.massParticipation) == null ? void 0 : _a2[C]) || [0, 0, 0, 0, 0, 0];
        for (let q = 0; q < 6; q++) M[q] += H[q];
        let K = 0, tt = H[0];
        for (let q = 1; q < 6; q++) H[q] > tt && (tt = H[q], K = q);
        const st = tt < 0.05 ? "\u2014" : `${_[K]} (${(tt * 100).toFixed(0)}%)`, nt = H.map((q) => ((q * 100).toFixed(1) + "%").padStart(6)).join(" ");
        o.push(`${String(C + 1).padStart(4)}  ${R.toFixed(4).padStart(9)}  ${B.toFixed(4).padStart(9)}  ${F.toFixed(2).padStart(9)}  ${nt}  ${(M[0] * 100).toFixed(1).padStart(5)}%  ${(M[1] * 100).toFixed(1).padStart(5)}%  ${(M[5] * 100).toFixed(1).padStart(5)}%  ${st}`);
      }), navigator.clipboard.writeText(o.join(`
`));
      const m = O.querySelector("#modal-copy");
      m.textContent = "\u2713", setTimeout(() => m.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: O, render: N };
}
function yt(O) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  const g = O.split(/\r?\n/), y = { force: "TONF", length: "M" }, N = [], $ = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), Y = [], I = [], x = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), T = [], V = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), z = [], U = /* @__PURE__ */ new Map(), k = [];
  let L = "", f = "";
  const h = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  for (const a of g) {
    const n = a.trim();
    if (n.startsWith("$ ")) {
      f = n.substring(2).trim(), h.has(f) || h.set(f, []), i.has(f) || i.set(f, a);
      continue;
    }
    if (f && (h.has(f) || h.set(f, []), h.get(f).push(a)), !(!n || n.startsWith("$"))) {
      if (f === "CONTROLS") {
        const t = n.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        t && (y.force = t[1], y.length = t[2]);
        const l = n.match(/TITLE2\s+"([^"]+)"/);
        l && (L = l[1]);
      }
      if (f === "STORIES - IN SEQUENCE FROM TOP") {
        const t = n.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (t) {
          const l = t[1], e = t[2] ? parseFloat(t[2]) : 0, c = t[3] ? parseFloat(t[3]) : void 0;
          N.push({ name: l, height: e, elev: c ?? 0 });
        }
      }
      if (f === "MATERIAL PROPERTIES") {
        const t = n.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (t) {
          const l = t[1];
          $.has(l) || $.set(l, { type: t[2] || "", E: 0, G: 0, nu: 0 });
          const e = $.get(l);
          t[2] && (e.type = t[2]);
          const c = n.match(/\bE\s+([\d.eE+-]+)/);
          c && (e.E = parseFloat(c[1]));
          const S = n.match(/\bU\s+([\d.eE+-]+)/);
          S && (e.nu = parseFloat(S[1]), e.G = e.E / (2 * (1 + e.nu)));
          const u = n.match(/\bFY\s+([\d.eE+-]+)/);
          u && (e.fy = parseFloat(u[1]));
          const D = n.match(/\bFC\s+([\d.eE+-]+)/);
          D && (e.fc = parseFloat(D[1]));
          const w = n.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          w && (e.density = parseFloat(w[1]));
        }
      }
      if (f === "FRAME SECTIONS") {
        const t = n.match(/FRAMESECTION\s+"([^"]+)"/);
        if (t) {
          const l = t[1];
          P.has(l) || P.set(l, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
          const e = P.get(l), c = n.match(/MATERIAL\s+"([^"]+)"/);
          c && (e.material = c[1]);
          const S = n.match(/SHAPE\s+"([^"]+)"/);
          S && (e.shape = S[1]);
          const u = n.match(/\bD\s+([\d.eE+-]+)/);
          u && (e.D = parseFloat(u[1]));
          const D = n.match(/\bB\s+([\d.eE+-]+)/);
          D && (e.B = parseFloat(D[1]));
          const w = n.match(/\bTF\s+([\d.eE+-]+)/);
          w && (e.TF = parseFloat(w[1]));
          const J = n.match(/\bTW\s+([\d.eE+-]+)/);
          J && (e.TW = parseFloat(J[1]));
          const G = n.match(/\bR\s+([\d.eE+-]+)/);
          G && (e.R = parseFloat(G[1]));
          const v = n.match(/FILLMATERIAL\s+"([^"]+)"/);
          v && (e.fillMaterial = v[1]);
          const j = n.match(/I2MOD\s+([\d.eE+-]+)/);
          j && (e.modI2 = parseFloat(j[1]));
          const Q = n.match(/I3MOD\s+([\d.eE+-]+)/);
          Q && (e.modI3 = parseFloat(Q[1]));
        }
      }
      if (f === "POINT COORDINATES") {
        const t = n.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        t && _.set(t[1], [parseFloat(t[2]), parseFloat(t[3])]);
      }
      if (f === "LINE CONNECTIVITIES") {
        const t = n.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        t && Y.push({ name: t[1], type: t[2], pt1: t[3], pt2: t[4], nStories: parseInt(t[5]) });
      }
      if (f === "POINT ASSIGNS") {
        const t = n.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        t && x.set(`${t[1]}@${t[2]}`, t[3].split(/\s+/));
      }
      if (f === "LINE ASSIGNS") {
        const t = n.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (t) {
          const l = { story: t[2], section: t[3], rigidZone: 0, releases: [], angle: 0 }, e = n.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          e && (l.rigidZone = parseFloat(e[1]));
          const c = n.match(/RELEASE\s+"([^"]+)"/);
          c && (l.releases = c[1].split(/\s+/));
          const S = n.match(/ANG\s+([-\d.eE+]+)/);
          S && (l.angle = parseFloat(S[1])), r.set(`${t[1]}@${t[2]}`, l);
        }
      }
      if (f === "GRIDS") {
        const t = n.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        t && k.push({ label: t[1], dir: t[2], coord: parseFloat(t[3]) });
      }
      if (f === "FRAME OBJECT LOADS") {
        const t = n.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        t && T.push({ line: t[1], story: t[2], type: t[3], dir: t[4], lc: t[5], val: parseFloat(t[6]) });
      }
      if (f === "AREA CONNECTIVITIES") {
        const t = n.match(/AREA\s+"([^"]+)"\s+(?:FLOOR|WALL|RAMP|PANEL)?\s*\d+\s+(.+)/);
        if (t) {
          const l = ((_a = t[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((e) => e.replace(/"/g, ""))) || [];
          I.push({ name: t[1], pts: l, nStories: 0 });
        }
      }
      if (f === "WALL/SLAB/DECK SECTIONS" || f === "SLAB PROPERTIES" || f === "WALL PROPERTIES" || f === "DECK PROPERTIES") {
        const t = n.match(/SHELLPROP\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const l = t[1], e = (_b = t[2].match(/SLABTHICKNESS\s+([\d.eE+-]+)/)) == null ? void 0 : _b[1], c = (_c = t[2].match(/WALLTHICKNESS\s+([\d.eE+-]+)/)) == null ? void 0 : _c[1], S = (_d = t[2].match(/MATERIAL\s+"([^"]+)"/)) == null ? void 0 : _d[1], u = (_e = t[2].match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _e[1];
          if (e || c) {
            const D = W.get(l) || { material: "", modelingType: "ShellThin" };
            W.set(l, { material: S ?? D.material, modelingType: u ?? D.modelingType, thickness: parseFloat(e ?? c ?? "0") });
          }
        }
      }
      if (f === "AREA ASSIGNS") {
        const t = n.match(/AREAASSIGN\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const l = t[1], e = t[2], c = t[3], S = ((_f = c.match(/SECTION\s+"([^"]+)"/)) == null ? void 0 : _f[1]) ?? "", u = ((_g = c.match(/CARDINALPOINT\s+"([^"]+)"/)) == null ? void 0 : _g[1]) ?? "CENTROID", D = ((_h = c.match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _h[1]) ?? "ShellThin";
          V.set(`${l}@${e}`, { story: e, section: S, modelingType: D, cardinalPoint: u });
        }
      }
      if (f === "SHELL UNIFORM LOAD SETS") {
        const t = n.match(/SHELLUNIFORMLOADSET\s+"([^"]+)"\s+LOADPAT\s+"([^"]+)"\s+VALUE\s+([\d.eE+-]+)/);
        if (t) {
          const l = t[1], e = t[2], c = parseFloat(t[3]);
          U.has(l) || U.set(l, []), U.get(l).push({ loadpat: e, value: c });
        }
      }
      if (f === "SHELL OBJECT LOADS") {
        const t = n.match(/AREALOAD\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const l = t[1], e = t[2], c = t[3], S = ((_i = c.match(/TYPE\s+"([^"]+)"/)) == null ? void 0 : _i[1]) ?? "";
          if (S === "UNIFLOADSET") {
            const u = ((_j = c.match(/UNIFLOADSET"\s+"([^"]+)"/)) == null ? void 0 : _j[1]) ?? ((_k = c.match(/"([^"]+)"\s*$/)) == null ? void 0 : _k[1]) ?? "";
            z.push({ area: l, story: e, type: "UNIFLOADSET", dir: "GRAV", lc: u, val: 0 });
          } else {
            const u = ((_l = c.match(/DIR\s+"([^"]+)"/)) == null ? void 0 : _l[1]) ?? "GRAV", D = ((_m = c.match(/LC\s+"([^"]+)"/)) == null ? void 0 : _m[1]) ?? "", w = parseFloat(((_n = c.match(/FVAL\s+([\d.eE+-]+)/)) == null ? void 0 : _n[1]) ?? "0");
            z.push({ area: l, story: e, type: S, dir: u, lc: D, val: w });
          }
        }
      }
    }
  }
  const o = [];
  for (const a of z) if (a.type === "UNIFLOADSET") {
    const n = U.get(a.lc);
    if (n) for (const t of n) o.push({ area: a.area, story: a.story, type: "UNIFF", dir: a.dir, lc: t.loadpat, val: t.value });
  } else o.push(a);
  z.length = 0, z.push(...o);
  const d = /* @__PURE__ */ new Map();
  if (N.length > 0) {
    const a = N.length - 1;
    d.set(N[a].name, N[a].elev);
    for (let n = a - 1; n >= 0; n--) {
      const l = d.get(N[n + 1].name) + N[n].height;
      N[n].elev = l, d.set(N[n].name, l);
    }
  }
  const M = [], m = [], R = /* @__PURE__ */ new Map(), C = (a, n) => `${a}@${n}`, B = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Map();
  for (const a of Y) F.set(a.name, a);
  for (const a of Y) for (const [n, t] of r) {
    if (!n.startsWith(a.name + "@")) continue;
    const l = t.story, e = N.findIndex((c) => c.name === l);
    if (!(e < 0)) if (a.type === "COLUMN" || a.type === "BRACE") {
      B.add(C(a.pt2, l));
      const c = Math.max(a.nStories, 1), S = Math.min(e + c, N.length - 1);
      B.add(C(a.pt1, N[S].name));
    } else B.add(C(a.pt1, l)), B.add(C(a.pt2, l));
  }
  for (const [a] of x) B.add(a);
  for (const a of I) for (const [n, t] of V) if (n.startsWith(a.name + "@")) for (const l of a.pts) B.add(C(l, t.story));
  for (const a of B) {
    const [n, t] = a.split("@"), l = _.get(n), e = d.get(t);
    l === void 0 || e === void 0 || (M.push([l[0], l[1], e]), m.push(a), R.set(a, M.length - 1));
  }
  const H = [], K = [], tt = [], st = [], nt = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map();
  for (const a of Y) for (const [n, t] of r) {
    if (!n.startsWith(a.name + "@")) continue;
    const l = t.story, e = N.findIndex((J) => J.name === l);
    if (e < 0) continue;
    let c, S;
    if (a.type === "COLUMN" || a.type === "BRACE") {
      const J = Math.max(a.nStories, 1), G = Math.min(e + J, N.length - 1);
      c = C(a.pt1, N[G].name), S = C(a.pt2, l);
    } else c = C(a.pt1, l), S = C(a.pt2, l);
    const u = R.get(c), D = R.get(S);
    if (u === void 0 || D === void 0 || u === D) continue;
    const w = H.length;
    if (H.push([u, D]), K.push(a.name), tt.push(a.type), st.push(l), nt.set(w, t.section), t.rigidZone > 0 && q.set(w, [t.rigidZone, t.rigidZone]), t.releases.length > 0) {
      const J = new Array(12).fill(false), G = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const v of t.releases) {
        const j = G[v];
        j !== void 0 && (J[j] = true);
      }
      ct.set(w, J);
    }
  }
  const X = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map();
  for (const a of I) for (const [n, t] of V) {
    if (!n.startsWith(a.name + "@")) continue;
    const l = [];
    for (const c of a.pts) {
      const S = C(c, t.story), u = R.get(S);
      if (u === void 0) {
        l.length = 0;
        break;
      }
      l.push(u);
    }
    if (l.length !== 4) continue;
    const e = H.length;
    H.push(l), K.push(a.name), tt.push("FLOOR"), st.push(t.story), X.set(e, t.section), rt.set(e, t.cardinalPoint);
  }
  const pt = /* @__PURE__ */ new Map();
  for (const a of z) if (a.type === "UNIFF") for (let n = 0; n < H.length; n++) {
    if (K[n] !== a.area || st[n] !== a.story) continue;
    const t = H[n];
    if (t.length !== 4) continue;
    const l = t.map((D) => M[D]), e = [l[1][0] - l[0][0], l[1][1] - l[0][1]], c = [l[3][0] - l[0][0], l[3][1] - l[0][1]], S = Math.abs(e[0] * c[1] - e[1] * c[0]), u = -a.val * S / 4;
    for (const D of t) {
      const w = pt.get(D) || [0, 0, 0, 0, 0, 0];
      w[2] += u, pt.set(D, w);
    }
  }
  const et = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map();
  for (const [a, n] of nt) {
    const t = P.get(n);
    if (!t) continue;
    const l = $.get(t.material);
    l && (et.set(a, l.E), dt.set(a, l.G));
    const e = t.D, c = t.B, S = t.TF, u = t.TW;
    let D = 0, w = 0, J = 0, G = 0, v = 0, j = 0, Q = "rect";
    switch (t.shape) {
      case "Concrete Rectangular":
        D = e * c, w = c * e ** 3 / 12, J = e * c ** 3 / 12, G = c * e ** 3 * (1 / 3 - 0.21 * (e / c) * (1 - e ** 4 / (12 * c ** 4))), v = j = 5 / 6 * D, Q = "rect";
        break;
      case "Concrete Circle":
        D = Math.PI * e ** 2 / 4, w = J = Math.PI * e ** 4 / 64, G = Math.PI * e ** 4 / 32, v = j = 0.9 * D, Q = "circ";
        break;
      case "Steel I/Wide Flange":
        D = 2 * c * S + (e - 2 * S) * u, w = (c * e ** 3 - (c - u) * (e - 2 * S) ** 3) / 12, J = (2 * S * c ** 3 + (e - 2 * S) * u ** 3) / 12, G = (2 * c * S ** 3 + (e - 2 * S) * u ** 3) / 3, v = (e - 2 * S) * u, j = 2 * c * S * 5 / 6, Q = "I";
        break;
      case "Steel Tube":
        D = e * c - (e - 2 * u) * (c - 2 * u), w = (c * e ** 3 - (c - 2 * u) * (e - 2 * u) ** 3) / 12, J = (e * c ** 3 - (e - 2 * u) * (c - 2 * u) ** 3) / 12, G = 2 * u * (e - u) * (c - u) * ((e - u) * (c - u)) / (e - u + (c - u)), v = 2 * e * u, j = 2 * c * u, Q = "HSS";
        break;
      case "Filled Steel Tube":
        D = e * c, w = c * e ** 3 / 12, J = e * c ** 3 / 12, G = 2 * u * (e - u) * (c - u) * ((e - u) * (c - u)) / (e - u + (c - u)), v = 2 * e * u + 5 / 6 * (e - 2 * u) * (c - 2 * u), j = 2 * c * u + 5 / 6 * (e - 2 * u) * (c - 2 * u), Q = "CFT";
        break;
      case "Steel Angle": {
        const ot = S || u;
        D = ot * (e + c - ot), w = ot * (e ** 3 + c * ot ** 2 + ot ** 2 * (e - ot)) / 12, J = ot * (c ** 3 + e * ot ** 2 + ot ** 2 * (c - ot)) / 12, G = (e + c - ot) * ot ** 3 / 3, v = e * ot, j = c * ot, Q = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        D = 2 * c * S + (e - 2 * S) * u, w = (u * e ** 3 + 2 * c * S * (e - S) ** 2) / 12, J = (2 * S * c ** 3 + (e - 2 * S) * u ** 3) / 12, G = (2 * c * S ** 3 + (e - 2 * S) * u ** 3) / 3, v = (e - 2 * S) * u, j = 2 * c * S * 5 / 6, Q = t.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        D = 2 * (2 * c * S + (e - 2 * S) * u), w = 2 * (u * e ** 3 + 2 * c * S * (e - S) ** 2) / 12, J = 2 * (2 * S * c ** 3 + (e - 2 * S) * u ** 3) / 12, G = 2 * (2 * c * S ** 3 + (e - 2 * S) * u ** 3) / 3, v = 2 * (e - 2 * S) * u, j = 4 * c * S * 5 / 6, Q = "2C";
        break;
      default:
        e > 0 && c > 0 && (D = e * c, w = c * e ** 3 / 12, J = e * c ** 3 / 12, G = Math.min(e, c) * Math.max(e, c) ** 3 / 3 * 0.3, v = j = 5 / 6 * D);
        break;
    }
    t.modI2 && (J *= t.modI2), t.modI3 && (w *= t.modI3), ht.set(a, D), Et.set(a, w), St.set(a, J), lt.set(a, G), v > 0 && ut.set(a, v), j > 0 && ft.set(a, j), it.set(a, { type: Q, b: c || void 0, h: e || void 0, d: Q === "circ" || Q === "pipe" ? e : void 0, tw: u || void 0, tf: S || void 0, r: t.R, name: n });
  }
  const mt = /* @__PURE__ */ new Map(), At = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map();
  for (const [a, n] of X) {
    const t = W.get(n);
    if (!t) continue;
    mt.set(a, t.thickness);
    const l = $.get(t.material);
    l && (et.set(a, l.E), dt.set(a, l.G), At.set(a, l.nu), l.density !== void 0 && at.set(a, l.density)), Tt.set(a, t.modelingType === "ShellThin" ? 1 : 0);
  }
  const s = /* @__PURE__ */ new Map();
  for (const [a, n] of x) {
    const t = R.get(a);
    if (t === void 0) continue;
    const l = [false, false, false, false, false, false];
    for (const e of n) e === "UX" && (l[0] = true), e === "UY" && (l[1] = true), e === "UZ" && (l[2] = true), e === "RX" && (l[3] = true), e === "RY" && (l[4] = true), e === "RZ" && (l[5] = true);
    s.set(t, l);
  }
  const p = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
  for (let a = 0; a < K.length; a++) A.set(`${K[a]}@${st[a]}`, a);
  for (const a of T) {
    const n = A.get(`${a.line}@${a.story}`);
    if (n === void 0) continue;
    const [t, l] = H[n], e = M[t], c = M[l], S = Math.sqrt((c[0] - e[0]) ** 2 + (c[1] - e[1]) ** 2 + (c[2] - e[2]) ** 2);
    if (S < 1e-10) continue;
    const u = a.val * S / 2;
    let D = 0, w = 0, J = 0;
    a.dir === "GRAV" || a.dir === "GRAVITY" ? J = -u : a.dir === "X" ? D = u : a.dir === "Y" ? w = u : a.dir === "Z" && (J = -u);
    for (const G of [t, l]) {
      const v = p.get(G) || [0, 0, 0, 0, 0, 0];
      v[0] += D, v[1] += w, v[2] += J, p.set(G, v);
    }
  }
  const E = /* @__PURE__ */ new Map();
  for (const [a, n] of nt) {
    const t = P.get(n);
    if (!t) continue;
    const l = $.get(t.material);
    (l == null ? void 0 : l.density) && E.set(a, l.density);
  }
  for (const [a, n] of at) E.set(a, n);
  for (const [a, n] of pt) {
    const t = p.get(a) || [0, 0, 0, 0, 0, 0];
    p.set(a, [t[0] + n[0], t[1] + n[1], t[2] + n[2], t[3] + n[3], t[4] + n[4], t[5] + n[5]]);
  }
  return { units: y, stories: N.reverse(), materials: $, frameSections: P, nodes: M, nodeNames: m, nodeNameToIdx: R, elements: H, elementNames: K, elementTypes: tt, elementStories: st, elementSections: nt, nodeInputs: { supports: s, loads: p }, elementInputs: { elasticities: et, shearModuli: dt, areas: ht, momentsOfInertiaZ: Et, momentsOfInertiaY: St, torsionalConstants: lt, shearAreasY: ut, shearAreasZ: ft, rigidOffsets: q, momentReleases: ct, densities: E, sectionShapes: it, thicknesses: mt, poissonsRatios: At, plateFormulations: Tt }, sectionShapes: it, grids: k, info: { nNodes: M.length, nFrames: H.length, nAreas: I.length, title: L }, rawSections: h, rawSectionHeaders: i };
}
function b(O) {
  return O && parseFloat(O) || 0;
}
function Mt(O) {
  const g = /* @__PURE__ */ new Map(), y = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let N;
  for (; (N = y.exec(O)) !== null; ) g.set(N[1], N[2] !== void 0 ? N[2] : N[3]);
  return g;
}
function Ct(O) {
  const g = O.split(/\r?\n/);
  return g.some((N) => N.trim().startsWith("TABLE:")) ? $t(g) : Nt(g);
}
function $t(O) {
  var _a, _b, _c, _d, _e, _f;
  const g = [];
  let y = "";
  for (const k of O) {
    const L = k.trimEnd();
    L.endsWith("_") ? y += L.slice(0, -1) + " " : (y += L, g.push(y), y = "");
  }
  y && g.push(y);
  const N = { force: "KN", length: "m" };
  let $ = "UX,UY,UZ,RX,RY,RZ";
  const P = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), x = [], r = [], T = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), z = [];
  let U = "";
  for (const k of g) {
    const L = k.trim();
    if (!L || L.startsWith(";") || L.startsWith("File ")) continue;
    if (L.startsWith("TABLE:")) {
      const h = L.match(/TABLE:\s+"(.+?)"/);
      U = h ? h[1].toUpperCase() : "";
      continue;
    }
    if (L === "END TABLE DATA") {
      U = "";
      continue;
    }
    const f = Mt(L);
    switch (U) {
      case "PROGRAM CONTROL": {
        const h = f.get("CurrUnits");
        if (h) {
          const i = h.split(",").map((o) => o.trim());
          i[0] && (N.force = i[0]), i[1] && (N.length = i[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const h = f.get("Material");
        h && !P.has(h) && P.set(h, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const h = f.get("Material");
        if (h) {
          const i = P.get(h) || { E: 0, nu: 0, G: 0 };
          i.E = b(f.get("E1")), i.G = b(f.get("G12")), i.nu = b(f.get("U12")), i.density = b(f.get("UnitMass")), P.set(h, i);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const h = f.get("Material");
        h && P.has(h) && (P.get(h).fy = b(f.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const h = f.get("SectionName");
        h && _.set(h, { material: f.get("Material") || "", shape: f.get("Shape") || "Rectangular", D: b(f.get("t3")), B: b(f.get("t2")), TF: b(f.get("tf")), TW: b(f.get("tw")), A: b(f.get("Area")), Iz: b(f.get("I33")), Iy: b(f.get("I22")), J: b(f.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const h = f.get("Section");
        h && Y.set(h, { material: f.get("Material") || "", type: f.get("Type") || "Shell", thickness: b(f.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const h = f.get("Joint");
        if (h) {
          const i = b(f.get("XorR")), o = b(f.get("Y")), d = b(f.get("Z"));
          I.set(h, [i, o, d]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const h = f.get("Frame"), i = f.get("JointI"), o = f.get("JointJ");
        h && i && o && x.push({ name: h, j1: i, j2: o });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const h = f.get("Area");
        if (h) {
          const i = parseInt(f.get("NumJoints") || "4"), o = [];
          for (let d = 1; d <= i; d++) {
            const M = f.get(`Joint${d}`);
            M && o.push(M);
          }
          o.length >= 3 && r.push({ name: h, joints: o });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const h = f.get("Joint");
        if (h) {
          const i = [((_a = f.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = f.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = f.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = f.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = f.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = f.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          T.set(h, i);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const h = f.get("Frame"), i = f.get("AnalSect");
        h && i && V.set(h, i);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const h = f.get("Area"), i = f.get("Section");
        h && i && W.set(h, i);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const h = f.get("Joint");
        h && z.push({ joint: h, fx: b(f.get("F1")), fy: b(f.get("F2")), fz: b(f.get("F3")), mx: b(f.get("M1")), my: b(f.get("M2")), mz: b(f.get("M3")) });
        break;
      }
    }
  }
  return gt(N, $, P, _, Y, I, x, r, T, V, W, z);
}
function Nt(O) {
  const g = { force: "KN", length: "m" };
  let y = "UX,UY,UZ,RX,RY,RZ";
  const N = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), Y = [], I = [], x = /* @__PURE__ */ new Map(), r = [];
  let T = "", V = "";
  for (const U of O) {
    const k = U.trim();
    if (!k || k.startsWith(";")) continue;
    if (!U.startsWith(" ") && !U.startsWith("	")) {
      const h = k.toUpperCase();
      if (h === "END") break;
      h.startsWith("SHELL SECTION") ? T = "SHELL SECTION" : h.startsWith("FRAME SECTION") ? T = "FRAME SECTION" : T = h.split(/\s+/)[0];
      continue;
    }
    const L = Mt(k), f = k.split(/\s+/);
    switch (T) {
      case "SYSTEM": {
        const h = L.get("DOF");
        h && (y = h);
        const i = L.get("LENGTH");
        i && (g.length = i);
        const o = L.get("FORCE");
        o && (g.force = o);
        break;
      }
      case "JOINT": {
        const h = f[0];
        _.set(h, [b(L.get("X")), b(L.get("Y")), b(L.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const h = L.get("ADD"), i = L.get("DOF");
        if (h && i) {
          const o = i.split(","), d = [false, false, false, false, false, false];
          for (const M of o) {
            const m = M.toUpperCase();
            (m === "UX" || m === "U1") && (d[0] = true), (m === "UY" || m === "U2") && (d[1] = true), (m === "UZ" || m === "U3") && (d[2] = true), (m === "RX" || m === "R1") && (d[3] = true), (m === "RY" || m === "R2") && (d[4] = true), (m === "RZ" || m === "R3") && (d[5] = true);
          }
          x.set(h, d);
        }
        break;
      }
      case "MATERIAL": {
        const h = L.get("NAME");
        if (h) V = h, N.set(h, { E: 0, nu: 0, G: 0 });
        else if (V) {
          const i = N.get(V), o = L.get("E");
          o && (i.E = b(o));
          const d = L.get("U");
          d && (i.nu = b(d)), i.G = i.E / (2 * (1 + i.nu));
          const M = L.get("M");
          M && (i.density = b(M));
        }
        break;
      }
      case "SHELL": {
        const h = f[0], i = L.get("J");
        L.get("SEC"), i && I.push({ name: h, joints: i.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const h = L.get("NAME");
        h && P.set(h, { material: L.get("MAT") || "", type: L.get("TYPE") || "Shell", thickness: b(L.get("TH")) });
        break;
      }
      case "FRAME": {
        const h = f[0], i = L.get("J");
        if (i) {
          const o = i.split(",");
          o.length >= 2 && Y.push({ name: h, j1: o[0], j2: o[1] });
        }
        break;
      }
      case "LOAD": {
        const h = L.get("ADD");
        h && r.push({ joint: h, fx: b(L.get("UX")), fy: b(L.get("UY")), fz: b(L.get("UZ")), mx: b(L.get("MX")), my: b(L.get("MY")), mz: b(L.get("MZ")) });
        break;
      }
    }
  }
  return gt(g, y, N, $, P, _, Y, I, x, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), r);
}
function gt(O, g, y, N, $, P, _, Y, I, x, r, T) {
  var _a;
  const V = [], W = /* @__PURE__ */ new Map(), z = [];
  for (const [m, R] of P) W.set(m, z.length), V.push(m), z.push(R);
  const U = [], k = [], L = /* @__PURE__ */ new Map();
  for (const m of _) {
    const R = W.get(m.j1), C = W.get(m.j2);
    if (R !== void 0 && C !== void 0) {
      const B = U.length;
      U.push([R, C]), k.push(m.name);
      const F = x.get(m.name);
      F && L.set(B, F);
    }
  }
  const f = U.length;
  for (const m of Y) {
    const R = m.joints.map((C) => W.get(C)).filter((C) => C !== void 0);
    if (R.length >= 3) {
      const C = U.length;
      U.push(R), k.push(m.name);
      const B = r.get(m.name);
      B && L.set(C, B);
    }
  }
  const h = U.length - f, i = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, o = /* @__PURE__ */ new Map(), d = y.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let m = 0; m < U.length; m++) {
    const R = L.get(m), C = R ? N.get(R) : null, B = R ? $.get(R) : null;
    if (C || U[m].length === 2) {
      const F = C || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, H = y.get(F.material) || d, K = H.E || d.E, tt = H.nu || 0.3, st = H.G || K / (2 * (1 + tt));
      i.elasticities.set(m, K), i.shearModuli.set(m, st), i.areas.set(m, F.A || F.D * F.B), i.momentsOfInertiaZ.set(m, F.Iz || F.B * F.D ** 3 / 12), i.momentsOfInertiaY.set(m, F.Iy || F.D * F.B ** 3 / 12), i.torsionalConstants.set(m, F.J || 0), i.densities.set(m, H.density || 0), ((_a = F.shape) == null ? void 0 : _a.includes("Wide Flange")) || F.shape === "I" ? o.set(m, { type: "I", b: F.B, h: F.D, name: R || "I-section" }) : o.set(m, { type: "rect", b: F.B, h: F.D });
    } else if (B) {
      const F = y.get(B.material) || d, H = F.E || d.E, K = F.nu || 0.2, tt = F.G || H / (2 * (1 + K));
      i.elasticities.set(m, H), i.shearModuli.set(m, tt), i.thicknesses.set(m, B.thickness), i.poissonsRatios.set(m, K), i.densities.set(m, F.density || 0);
    }
  }
  const M = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [m, R] of I) {
    const C = W.get(m);
    C !== void 0 && M.supports.set(C, R);
  }
  for (const m of T) {
    const R = W.get(m.joint);
    if (R !== void 0) {
      const C = M.forces.get(R) || [0, 0, 0, 0, 0, 0];
      C[0] += m.fx, C[1] += m.fy, C[2] += m.fz, C[3] += m.mx, C[4] += m.my, C[5] += m.mz, M.forces.set(R, C);
    }
  }
  return { units: O, dof: g, materials: y, frameSections: N, shellSections: $, nodes: z, nodeNames: V, nodeNameToIdx: W, elements: U, elementNames: k, elementSections: L, nodeInputs: M, elementInputs: i, sectionShapes: o, info: { nNodes: z.length, nFrames: f, nShells: h, title: `SAP2000 (${f} frames, ${h} shells)` } };
}
function Dt(O) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: g, elements: y, nodeInputs: N, elementInputs: $ } = O, P = O.units || { force: "KN", length: "m" }, _ = O.title || "Awatif Model", Y = [], I = (i) => Y.push(i), x = () => Y.push(" ");
  I(`File ${_}.$2k was saved on m/d/yy at h:mm:ss`), x(), I('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), I("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), x();
  const r = [], T = [];
  if (y.forEach((i, o) => {
    i.length === 2 ? r.push(o) : T.push(o);
  }), r.length > 0) {
    I('TABLE:  "CONNECTIVITY - FRAME"');
    for (const i of r) {
      const o = y[i];
      I(`   Frame=${i + 1}   JointI=${o[0] + 1}   JointJ=${o[1] + 1}   IsCurved=No`);
    }
    x();
  }
  if (T.length > 0) {
    I('TABLE:  "CONNECTIVITY - AREA"');
    for (const i of T) {
      const o = y[i], d = o.map((M, m) => `Joint${m + 1}=${M + 1}`).join("   ");
      I(`   Area=${i + 1}   NumJoints=${o.length}   ${d}`);
    }
    x();
  }
  I('TABLE:  "COORDINATE SYSTEMS"'), I("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), x(), I('TABLE:  "DATABASE FORMAT TYPES"'), I("   UnitsCurr=Yes   OverrideE=No"), x();
  const V = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map();
  for (const i of r) {
    const o = ((_a = $.areas) == null ? void 0 : _a.get(i)) || 0, d = ((_b = $.momentsOfInertiaZ) == null ? void 0 : _b.get(i)) || 0, M = ((_c = $.momentsOfInertiaY) == null ? void 0 : _c.get(i)) || 0, m = ((_d = $.torsionalConstants) == null ? void 0 : _d.get(i)) || 0, R = ((_e = $.elasticities) == null ? void 0 : _e.get(i)) || 0, C = `MAT_${Math.round(R)}`, B = `A${o.toPrecision(6)}_Iz${d.toPrecision(6)}`;
    if (!V.has(B)) {
      let H = 0.3, K = 0.3;
      o > 0 && d > 0 && (H = Math.sqrt(12 * d / o), K = o / H), V.set(B, { A: o, Iz: d, Iy: M, J: m, b: K, h: H, matKey: C });
    }
    const F = [...V.keys()].indexOf(B) + 1;
    W.set(i, `SEC${F}`);
  }
  if (r.length > 0) {
    I('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const i of r) {
      const o = W.get(i) || "SEC1";
      I(`   Frame=${i + 1}   AutoSelect=N.A.   AnalSect=${o}   MatProp=Default`);
    }
    x();
  }
  if (V.size > 0) {
    I('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let i = 0;
    for (const [, o] of V) {
      i++;
      const d = o.A * 5 / 6;
      I(`   SectionName=SEC${i}   Material=${o.matKey}   Shape=Rectangular   t3=${Z(o.h)}   t2=${Z(o.b)}   Area=${Z(o.A)}   TorsConst=${Z(o.J)}   I33=${Z(o.Iz)}   I22=${Z(o.Iy)}   I23=0   AS2=${Z(d)}   AS3=${Z(d)} _`), I("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    x();
  }
  const z = !!O.layeredSection && T.length > 0, U = O.layeredSection, k = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map();
  if (!z) for (const i of T) {
    const o = ((_f = $.thicknesses) == null ? void 0 : _f.get(i)) || 0.1, d = ((_g = $.elasticities) == null ? void 0 : _g.get(i)) || 0, M = `MAT_${Math.round(d)}`, m = `t${o.toPrecision(6)}`;
    k.has(m) || k.set(m, { t: o, matKey: M });
    const R = [...k.keys()].indexOf(m) + 1;
    L.set(i, `SSEC${R}`);
  }
  if (T.length > 0) {
    I('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const i of T) {
      const o = z ? U.name : L.get(i) || "SSEC1";
      I(`   Area=${i + 1}   Section=${o}   MatProp=Default`);
    }
    if (x(), I('TABLE:  "AREA SECTION PROPERTIES"'), z) {
      const i = U, o = ((_h = i.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      I(`   Section=${i.name}   Material=${o}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${Z(i.totalThickness)}   BendThick=${Z(i.totalThickness)}   Color=Magenta`);
    } else {
      let i = 0;
      for (const [, o] of k) i++, I(`   Section=SSEC${i}   Material=${o.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${Z(o.t)}   BendThick=${Z(o.t)}   Color=Cyan`);
    }
    if (x(), z) {
      I('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const i = U;
      for (const o of i.layers) {
        const d = o.angle ?? 0, M = o.numIntPts ?? 3;
        I(`   Section=${i.name}   LayerName=${o.name}   Distance=${Z(o.distance)}   Thickness=${Z(o.thickness)}   Type=Shell   NumIntPts=${M}   Material=${o.material}   MatAngle=${Z(d * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      x();
    }
  }
  I('TABLE:  "JOINT COORDINATES"');
  for (let i = 0; i < g.length; i++) {
    const o = g[i];
    I(`   Joint=${i + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${Z(o[0])}   Y=${Z(o[1])}   Z=${Z(o[2])}   SpecialJt=No`);
  }
  if (x(), N.supports && N.supports.size > 0) {
    I('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [i, o] of N.supports) {
      if (!o.some((M) => M)) continue;
      const d = (M) => M ? "Yes" : "No";
      I(`   Joint=${i + 1}   U1=${d(o[0])}   U2=${d(o[1])}   U3=${d(o[2])}   R1=${d(o[3])}   R2=${d(o[4])}   R3=${d(o[5])}`);
    }
    x();
  }
  const f = O.selfWtMult ?? 1;
  if (I('TABLE:  "LOAD PATTERN DEFINITIONS"'), I(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${f}`), x(), I('TABLE:  "LOAD CASE DEFINITIONS"'), I('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), x(), I('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), I('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), x(), N.loads && N.loads.size > 0) {
    I('TABLE:  "JOINT LOADS - FORCE"');
    for (const [i, o] of N.loads) o.some((d) => Math.abs(d) > 1e-12) && I(`   Joint=${i + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${Z(o[0])}   F2=${Z(o[1])}   F3=${Z(o[2])}   M1=${Z(o[3])}   M2=${Z(o[4])}   M3=${Z(o[5])}`);
    x();
  }
  const h = /* @__PURE__ */ new Map();
  for (let i = 0; i < y.length; i++) {
    const o = ((_i = $.elasticities) == null ? void 0 : _i.get(i)) || 0, d = ((_j = $.shearModuli) == null ? void 0 : _j.get(i)) || 0, M = o > 0 && d > 0 ? Math.max(0, Math.min(0.5, o / (2 * d) - 1)) : 0.2, m = ((_k = $.densities) == null ? void 0 : _k.get(i)) || 0, R = `MAT_${Math.round(o)}`;
    h.has(R) || h.set(R, { E: o, nu: M, G: d, rho: m });
  }
  I('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [i] of h) I(`   Material=${i}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  x(), I('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [i, o] of h) I(`   Material=${i}   UnitWeight=${Z(o.rho * 9.81)}   UnitMass=${Z(o.rho)}   E1=${Z(o.E)}   G12=${Z(o.G)}   U12=${Z(o.nu)}   A1=9.9E-06`);
  x(), I('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [i] of h) I(`   Material=${i}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return x(), I('TABLE:  "PROGRAM CONTROL"'), I(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${P.force}, ${P.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), x(), I("END TABLE DATA"), I(""), Y.join(`\r
`);
}
function Z(O) {
  return O === 0 || Math.abs(O) < 1e-15 ? "0" : Math.abs(O) >= 1e6 || Math.abs(O) < 1e-3 && Math.abs(O) > 0 ? O.toExponential(8) : parseFloat(O.toPrecision(10)).toString();
}
function xt(O) {
  const { nodes: g, elements: y, nodeInputs: N, elementInputs: $, title: P, e2kModel: _ } = O, Y = _ == null ? void 0 : _.rawSections;
  return Y && Y.size > 0 ? Ot(Y, _) : Lt(O);
}
function Ot(O, g) {
  const y = [], N = g == null ? void 0 : g.rawSectionHeaders;
  for (const [$, P] of O) {
    y.push((N == null ? void 0 : N.get($)) ?? `$ ${$}`);
    for (const _ of P) y.push(_);
  }
  return O.has("END OF MODEL FILE") || (y.push("  END"), y.push("$ END OF MODEL FILE")), y.join(`\r
`);
}
function Lt(O) {
  var _a, _b, _c;
  const { nodes: g, elements: y, nodeInputs: N, elementInputs: $, title: P, units: _ } = O, Y = O.rigidDiaphragm ?? false, I = (_ == null ? void 0 : _.force) || "Tonf", x = (_ == null ? void 0 : _.length) || "m", r = [], T = (s) => Math.round(s * 1e4) / 1e4, V = (() => {
    const s = (I || "Tonf").toLowerCase();
    return s === "tonf" || s === "tonf-f" ? 1 / 9.80665 : s === "kn" || s === "kn-f" ? 1 : s === "kgf" || s === "kg" ? 1 / 980665e-8 : s === "kip" || s === "kips" ? 1 / 4.44822 : 1;
  })(), W = (s) => s * V, z = (s) => s * V, U = (s) => s * V, k = /* @__PURE__ */ new Date(), L = `${k.getMonth() + 1}/${k.getDate()}/${k.getFullYear()}  ${k.getHours()}:${String(k.getMinutes()).padStart(2, "0")}:${String(k.getSeconds()).padStart(2, "0")}`;
  r.push(`$ File   "Hekatan_export.e2k"  saved ${L} in ETABS 22.6.0`), r.push(""), r.push("$ PROGRAM INFORMATION"), r.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), r.push(""), r.push("$ CONTROLS"), r.push(`  UNITS  "${I}"  "${x}"  "C"  `), r.push('  TITLE1  "Hekatan Struct export"  '), P && r.push(`  TITLE2  "${P}"  `), r.push("  PREFERENCE  MERGETOL 0.001"), r.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), r.push("");
  const f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
  g.forEach((s) => {
    f.add(T(s[0])), h.add(T(s[1]));
  });
  const i = [...f].sort((s, p) => s - p), o = [...h].sort((s, p) => s - p);
  r.push("$ GRIDS"), r.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), i.forEach((s, p) => {
    const A = p < 26 ? String.fromCharCode(65 + p) : String.fromCharCode(65 + p % 26).repeat(Math.floor(p / 26) + 1);
    r.push(`  GRID "G1"  LABEL "${A}"  DIR "X"  COORD ${s}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), o.forEach((s, p) => {
    r.push(`  GRID "G1"  LABEL "${p + 1}"  DIR "Y"  COORD ${s}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), r.push("");
  const d = /* @__PURE__ */ new Set();
  g.forEach((s) => d.add(T(s[2])));
  let M = [...d].sort((s, p) => s - p);
  if (M.length === 1) {
    const s = M[0];
    s > 0 ? M = [0, s] : M = [0, 4];
  }
  const m = [], R = /* @__PURE__ */ new Map();
  m.push("Base"), R.set(M[0], "Base");
  for (let s = 1; s < M.length; s++) {
    const p = `Story${s}`;
    m.push(p), R.set(M[s], p);
  }
  d.size === 1 && d.has(0) && R.set(0, m[1]), r.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let s = M.length - 1; s >= 1; s--) r.push(`  STORY "${m[s]}"  HEIGHT ${T(M[s] - M[s - 1])} MASTERSTORY "Yes"  `);
  M.length > 0 && r.push(`  STORY "Base"  ELEV ${M[0]} `), r.push(""), y.some((s) => s.length === 4), Y && (r.push("$ DIAPHRAGM NAMES"), r.push('  DIAPHRAGM "D1"    TYPE RIGID'), r.push("")), r.push("$ MATERIAL PROPERTIES");
  const C = /* @__PURE__ */ new Set();
  (_a = $.elasticities) == null ? void 0 : _a.forEach((s) => C.add(s));
  const B = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map();
  let H = 0, K = 0;
  const tt = 980665e-8, st = /* @__PURE__ */ new Map();
  if ($.densities && $.densities.size > 0) {
    const s = /* @__PURE__ */ new Map();
    $.densities.forEach((p, A) => {
      var _a2;
      const E = (_a2 = $.elasticities) == null ? void 0 : _a2.get(A);
      E !== void 0 && (s.has(E) || s.set(E, []), s.get(E).push(p));
    }), s.forEach((p, A) => {
      const E = p.reduce((n, t) => n + t, 0) / p.length, a = E > 100 ? E * tt : E * 9.80665;
      st.set(A, a);
    });
  }
  for (const s of C) {
    const p = s >= 1e8, A = p ? `Steel_${++H}` : `Conc_${++K}`;
    B.set(s, A), F.set(s, p);
    const E = st.get(s) ?? (p ? 76.97 : 24), a = z(s), n = U(E), t = [];
    (_b = $.poissonsRatios) == null ? void 0 : _b.forEach((c, S) => {
      var _a2;
      ((_a2 = $.elasticities) == null ? void 0 : _a2.get(S)) === s && t.push(c);
    });
    const l = t.length > 0 ? t.reduce((c, S) => c + S, 0) / t.length : p ? 0.3 : 0.2, e = p ? 117e-7 : 1e-5;
    if (p) {
      r.push(`  MATERIAL  "${A}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${T(n)}`), r.push(`  MATERIAL  "${A}"    SYMTYPE "Isotropic"  E ${T(a)}  U ${l}  A ${e}`);
      const c = 345e3, S = 45e4;
      r.push(`  MATERIAL  "${A}"  FY ${T(z(c))}  FU ${T(z(S))}  FYE ${T(z(c * 1.1))}  FUE ${T(z(S * 1.1))}`);
    } else r.push(`  MATERIAL  "${A}"    TYPE "Concrete"    WEIGHTPERVOLUME ${T(n)}`), r.push(`  MATERIAL  "${A}"    SYMTYPE "Isotropic"  E ${T(a)}  U ${l}  A ${e}`), r.push(`  MATERIAL  "${A}"    FC ${T(z(24e3))}`);
  }
  r.push(""), r.push("$ FRAME SECTIONS");
  const nt = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), X = 0.05;
  y.forEach((s, p) => {
    var _a2, _b2, _c2, _d, _e, _f;
    if (s.length !== 2) return;
    const A = (_a2 = $.sectionShapes) == null ? void 0 : _a2.get(p), E = ((_b2 = $.elasticities) == null ? void 0 : _b2.get(p)) ?? 0, a = B.get(E) || "Conc_1", n = F.get(E) ?? E >= 1e8, t = ((_c2 = $.areas) == null ? void 0 : _c2.get(p)) ?? 0, l = ((_d = $.momentsOfInertiaY) == null ? void 0 : _d.get(p)) ?? 0;
    (_e = $.momentsOfInertiaZ) == null ? void 0 : _e.get(p), (_f = $.torsionalConstants) == null ? void 0 : _f.get(p);
    let e = (A == null ? void 0 : A.type) || "rect", c = (A == null ? void 0 : A.h) ?? 0, S = (A == null ? void 0 : A.b) ?? 0, u = (A == null ? void 0 : A.d) ?? 0;
    const D = (A == null ? void 0 : A.tf) ?? 0, w = (A == null ? void 0 : A.tw) ?? 0;
    c <= 0 && S <= 0 && u <= 0 && t > 0 && (l > 0 ? (c = Math.sqrt(12 * l / t), S = t / c) : c = S = Math.sqrt(t), (!isFinite(c) || c < X) && (c = X), (!isFinite(S) || S < X) && (S = X), e = "rect"), c <= 0 && S <= 0 && u <= 0 && (c = 0.3, S = 0.3, e = "rect");
    const J = `${e}_${T(c)}_${T(S)}_${T(u)}_${T(D)}_${T(w)}_${a}`;
    (A == null ? void 0 : A.name) && !ct.has(J) && ct.set(J, A.name);
    let G = ct.get(J);
    if (!G) {
      const Q = n ? "S" : "C";
      e === "rect" ? G = `${Q}_R${Math.round(S * 100)}x${Math.round(c * 100)}` : e === "circ" ? G = `${Q}_C_D${Math.round(u * 100)}` : e === "I" ? G = `${Q}_I${Math.round(c * 100)}x${Math.round(S * 100)}` : e === "HSS" ? G = `${Q}_HSS${Math.round(S * 100)}x${Math.round(c * 100)}x${Math.round(w * 1e3)}` : G = `${Q}_Sec${nt.size + 1}`, ct.set(J, G);
    }
    if (q.set(p, G), nt.has(G)) return;
    nt.add(G);
    let v;
    e === "I" ? v = "Steel I/Wide Flange" : e === "HSS" ? v = "Steel Tube" : e === "CFT" ? v = "Filled Steel Tube" : e === "pipe" ? v = "Steel Pipe" : e === "L" ? v = "Steel Angle" : e === "C" ? v = "Steel Channel" : e === "2C" ? v = "Steel Double Channel" : e === "circ" ? v = "Concrete Circle" : v = "Concrete Rectangular";
    let j = `  FRAMESECTION  "${G}"  MATERIAL "${a}"  SHAPE "${v}"`;
    c && (j += `  D ${T(c)}`), S && (j += `  B ${T(S)}`), u && !c && (j += `  D ${T(u)}`), D && (j += `  TF ${T(D)}`), w && (j += `  TW ${T(w)}`), r.push(j);
  }), r.push("");
  const rt = /* @__PURE__ */ new Map();
  let pt = 0;
  g.forEach((s) => {
    const p = `${T(s[0])},${T(s[1])}`;
    rt.has(p) || rt.set(p, `${++pt}`);
  }), r.push("$ POINT COORDINATES");
  for (const [s, p] of rt) {
    const [A, E] = s.split(",").map(Number);
    r.push(`  POINT "${p}"  ${A} ${E} `);
  }
  r.push("");
  const et = (s) => {
    const p = g[s], A = `${T(p[0])},${T(p[1])}`;
    return { pt: rt.get(A) || "1", story: R.get(T(p[2])) || "Base" };
  }, dt = (s) => {
    var _a2, _b2, _c2, _d;
    const p = [], A = (_a2 = O.propertyModifiers) == null ? void 0 : _a2.get(s);
    A && A.some((t) => Math.abs(t - 1) > 1e-9) && p.push(`PROPMODIFIERS "${A.map((t) => T(t)).join(" ")}"`);
    const E = (_b2 = $.momentReleases) == null ? void 0 : _b2.get(s);
    if (E && E.some((t) => t)) {
      const t = [];
      E.length === 12 ? (E[0] && t.push("PI"), E[1] && t.push("V2I"), E[2] && t.push("V3I"), E[3] && t.push("TI"), E[4] && t.push("M2I"), E[5] && t.push("M3I"), E[6] && t.push("PJ"), E[7] && t.push("V2J"), E[8] && t.push("V3J"), E[9] && t.push("TJ"), E[10] && t.push("M2J"), E[11] && t.push("M3J")) : E.length === 6 && (E[0] && t.push("TI"), E[1] && t.push("M2I"), E[2] && t.push("M3I"), E[3] && t.push("TJ"), E[4] && t.push("M2J"), E[5] && t.push("M3J")), t.length > 0 && p.push(`RELEASE "${t.join(" ")}"`);
    }
    const a = (_c2 = $.insertionPoints) == null ? void 0 : _c2.get(s);
    a && (Math.abs(a[0]) > 1e-9 || Math.abs(a[1]) > 1e-9) && p.push(`LATEROFFSET ${T(a[0])} TRANSOFFSET ${T(a[1])}`);
    const n = (_d = $.rigidOffsets) == null ? void 0 : _d.get(s);
    return n && (Math.abs(n[0]) > 1e-9 || Math.abs(n[1]) > 1e-9) && p.push(`LENGTHOFFI ${T(n[0])} LENGTHOFFJ ${T(n[1])} RIGIDZONE 0.5`), p.length > 0 ? ` ${p.join(" ")} ` : "";
  }, ht = [], ut = /* @__PURE__ */ new Set(), ft = /* @__PURE__ */ new Map();
  y.forEach((s, p) => {
    if (s.length !== 2) return;
    const A = It(g, s);
    if (A === "BEAM") return;
    const E = g[s[0]][2] <= g[s[1]][2] ? s[0] : s[1], a = g[s[0]][2] <= g[s[1]][2] ? s[1] : s[0];
    if (Math.abs(g[E][0] - g[a][0]) > 1e-6 || Math.abs(g[E][1] - g[a][1]) > 1e-6) return;
    const n = et(E), t = q.get(p) || `Sec_${p}`, l = `${n.pt}_${t}_${A}`;
    ft.has(l) || ft.set(l, []), ft.get(l).push({ i: p, bot: E, top: a, zBot: T(g[E][2]), zTop: T(g[a][2]), planPt: n.pt, secName: t, type: A });
  }), ft.forEach((s, p) => {
    s.sort((E, a) => E.zBot - a.zBot);
    let A = 0;
    for (let E = 1; E <= s.length; E++) if (E === s.length || Math.abs(s[E].zBot - s[E - 1].zTop) > 1e-6) {
      const n = s.slice(A, E);
      n.length >= 1 && (ht.push({ elemIndices: n.map((t) => t.i), planPt: n[0].planPt, bottomNodeIdx: n[0].bot, topNodeIdx: n[n.length - 1].top, secName: n[0].secName, type: n[0].type, nSegments: n.length }), n.forEach((t) => ut.add(t.i))), A = E;
    }
  }), r.push("$ LINE CONNECTIVITIES");
  const Et = [];
  ht.forEach((s, p) => {
    const A = `C${p + 1}`, E = et(s.topNodeIdx);
    et(s.bottomNodeIdx);
    const a = T(g[s.topNodeIdx][2]), n = T(g[s.bottomNodeIdx][2]), t = M.indexOf(a), l = M.indexOf(n), e = Math.max(1, t - l), c = dt(s.elemIndices[0]);
    r.push(`  LINE  "${A}"  ${s.type}  "${E.pt}"  "${E.pt}"  ${e}`), Et.push(`  LINEASSIGN  "${A}"  "${E.story}"  SECTION "${s.secName}" ${c} RIGIDZONE 0 MAXSTASPC 0.5 MINNUMSTA ${s.nSegments} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  }), y.forEach((s, p) => {
    if (s.length !== 2 || ut.has(p)) return;
    const A = It(g, s), E = q.get(p) || `Sec_${p}`, a = dt(p);
    if (A === "BEAM") {
      const n = et(s[0]), t = et(s[1]);
      r.push(`  LINE  "E${p + 1}"  BEAM  "${n.pt}"  "${t.pt}"  0`), Et.push(`  LINEASSIGN  "E${p + 1}"  "${n.story}"  SECTION "${E}" ${a} RIGIDZONE 0 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const n = g[s[0]][2] <= g[s[1]][2] ? s[0] : s[1], t = g[s[0]][2] <= g[s[1]][2] ? s[1] : s[0], l = et(t), e = T(g[n][2]), c = T(g[t][2]), S = M.indexOf(e), u = M.indexOf(c), D = Math.max(1, u >= 0 && S >= 0 ? u - S : 1);
      r.push(`  LINE  "E${p + 1}"  ${A}  "${l.pt}"  "${l.pt}"  ${D}`), Et.push(`  LINEASSIGN  "E${p + 1}"  "${l.story}"  SECTION "${E}" ${a} RIGIDZONE 0 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    }
  }), r.push("");
  const St = O.weightMode ?? "auto", lt = /* @__PURE__ */ new Set();
  r.push("$ POINT ASSIGNS"), (_c = N.supports) == null ? void 0 : _c.forEach((s, p) => {
    const A = [];
    if (s[0] && A.push("UX"), s[1] && A.push("UY"), s[2] && A.push("UZ"), s[3] && A.push("RX"), s[4] && A.push("RY"), s[5] && A.push("RZ"), A.length > 0) {
      const E = et(p), a = E.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      r.push(`  POINTASSIGN  "${E.pt}"  "${E.story}"  RESTRAINT "${A.join(" ")}" ${a} `), lt.add(`${E.pt}@${E.story}`);
    }
  }), ht.forEach((s) => {
    const p = et(s.topNodeIdx), A = `${p.pt}@${p.story}`;
    Y && !lt.has(A) && p.story !== "Base" && (r.push(`  POINTASSIGN  "${p.pt}"  "${p.story}"  DIAPH "D1"  `), lt.add(A));
  }), St === "manual" && N.loads && N.loads.forEach((s, p) => {
    const A = et(p), E = `${A.pt}@${A.story}`;
    lt.has(E) || (r.push(`  POINTASSIGN  "${A.pt}"  "${A.story}"  DIAPH "DISCONNECTED"  `), lt.add(E));
  }), r.push(""), r.push("$ LINE ASSIGNS"), Et.forEach((s) => r.push(s)), r.push("");
  const it = [];
  y.forEach((s, p) => {
    if (s.length === 4) {
      const A = g[s[0]], E = g[s[1]], a = g[s[2]], n = [E[0] - A[0], E[1] - A[1], E[2] - A[2]], t = [a[0] - A[0], a[1] - A[1], a[2] - A[2]], l = n[1] * t[2] - n[2] * t[1], e = n[2] * t[0] - n[0] * t[2], c = n[0] * t[1] - n[1] * t[0], S = Math.sqrt(l * l + e * e + c * c), u = S > 1e-10 && Math.abs(c) / S < 0.5;
      it.push({ idx: p, el: s, isWall: u });
    }
  });
  const mt = (() => {
    for (const [s, p] of F) if (!p) return B.get(s);
    return B.values().next().value || "Conc_1";
  })(), At = (s, p) => {
    var _a2;
    for (const A of it) if (s(A)) {
      const E = (_a2 = $.thicknesses) == null ? void 0 : _a2.get(A.idx);
      if (E !== void 0) return E;
    }
    return p;
  };
  if (it.some((s) => !s.isWall)) {
    r.push("$ SLAB PROPERTIES");
    const s = At((p) => !p.isWall, 0.15);
    r.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${mt}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${T(s)} `), r.push("");
  }
  if (it.some((s) => s.isWall)) {
    r.push("$ WALL PROPERTIES");
    const s = At((p) => p.isWall, 0.2);
    r.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${mt}"  MODELINGTYPE "ShellThin"  WALLTHICKNESS ${T(s)} `), r.push("");
  }
  if (it.length > 0) {
    r.push("$ AREA CONNECTIVITIES");
    const s = [];
    it.forEach((p, A) => {
      const { el: E, isWall: a } = p, n = a ? `W${A + 1}` : `F${A + 1}`, t = a ? "PANEL" : "FLOOR", l = E.map((e) => et(e));
      if (a) {
        const e = g[E[0]][2] <= g[E[2]][2] ? 0 : 2, c = g[E[1]][2] <= g[E[3]][2] ? 1 : 3;
        r.push(`  AREA "${n}"  ${t}  4  "${l[e].pt}"  "${l[c].pt}"  "${l[c].pt}"  "${l[e].pt}"  1  1  0  0  `);
        const S = l[e === 0 ? 2 : 0].story;
        s.push(`  AREAASSIGN  "${n}"  "${S}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        r.push(`  AREA "${n}"  ${t}  4  "${l[0].pt}"  "${l[1].pt}"  "${l[2].pt}"  "${l[3].pt}"  0  0  0  0  `);
        const e = Y ? ' DIAPH  "D1" ' : "";
        s.push(`  AREAASSIGN  "${n}"  "${l[0].story}"  SECTION "Losa" ${e} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }
    }), r.push(""), r.push("$ AREA ASSIGNS"), s.forEach((p) => r.push(p)), r.push("");
  }
  const Tt = St === "manual" ? 0 : 1;
  r.push("$ LOAD PATTERNS"), r.push(`  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  ${Tt}`), r.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), r.push("");
  const at = [];
  return N.loads && N.loads.size > 0 && N.loads.forEach((s, p) => {
    const [A, E, a] = s, n = et(p);
    Math.abs(A) > 1e-10 && at.push(`  POINTLOAD  "${n.pt}"  "${n.story}"  TYPE "FORCE"  LC "Dead"  FX ${T(W(A))}  FY 0  FZ 0`), Math.abs(E) > 1e-10 && at.push(`  POINTLOAD  "${n.pt}"  "${n.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY ${T(W(E))}  FZ 0`), St === "manual" && Math.abs(a) > 1e-10 && at.push(`  POINTLOAD  "${n.pt}"  "${n.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY 0  FZ ${T(W(a))}`);
  }), N.moments && N.moments.size > 0 && N.moments.forEach((s, p) => {
    const [A, E, a] = s, n = et(p);
    Math.abs(A) > 1e-10 && at.push(`  POINTLOAD  "${n.pt}"  "${n.story}"  TYPE "MOMENT"  LC "Dead"  MX ${T(W(A))}  MY 0  MZ 0`), Math.abs(E) > 1e-10 && at.push(`  POINTLOAD  "${n.pt}"  "${n.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY ${T(W(E))}  MZ 0`), Math.abs(a) > 1e-10 && at.push(`  POINTLOAD  "${n.pt}"  "${n.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY 0  MZ ${T(W(a))}`);
  }), at.length > 0 && (r.push("$ POINT OBJECT LOADS"), at.forEach((s) => r.push(s)), r.push("")), r.push("$ ANALYSIS OPTIONS"), r.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), r.push('  PDELTA  METHOD "NONE"  '), r.push(""), r.push("$ MASS SOURCE"), r.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), r.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), r.push(""), r.push("$ LOAD CASES"), r.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), r.push('  LOADCASE "Dead"  LOADPAT  "Dead"  SF 1 '), r.push('  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), r.push('  LOADCASE "Live"  LOADPAT  "Live"  SF 1 '), r.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), r.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), r.push(""), r.push("$ LOAD COMBINATIONS"), r.push('  COMBO "1.4D"  TYPE "Linear Add"  '), r.push('  COMBO "1.4D"  LOADCASE  "Dead"  SF 1.4 '), r.push('  COMBO "1.2D+1.6L"  TYPE "Linear Add"  '), r.push('  COMBO "1.2D+1.6L"  LOADCASE  "Dead"  SF 1.2 '), r.push('  COMBO "1.2D+1.6L"  LOADCASE  "Live"  SF 1.6 '), r.push(""), r.push("  END"), r.push("$ END OF MODEL FILE"), r.join(`\r
`);
}
function It(O, g) {
  const y = O[g[0]], N = O[g[1]], $ = Math.abs(N[2] - y[2]), P = Math.sqrt((N[0] - y[0]) ** 2 + (N[1] - y[1]) ** 2), _ = $ > P * 0.5;
  return _ && P > 0.01 ? "BRACE" : _ ? "COLUMN" : "BEAM";
}
export {
  Dt as a,
  Ct as b,
  Rt as c,
  xt as e,
  yt as p
};
