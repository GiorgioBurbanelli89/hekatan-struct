function Dt() {
  const N = document.createElement("div");
  N.id = "modal-results", N.style.cssText = `
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
  let $ = false;
  const x = 0.9;
  function L(O, k) {
    var _a, _b, _c, _d, _e;
    if (!O.frequencies || O.frequencies.length === 0) {
      N.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const V = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], G = [0, 0, 0, 0, 0, 0], M = O.frequencies.length;
    let w = -1, i = -1, I = -1, X = 0, _ = 0;
    {
      const l = [0, 0, 0, 0, 0, 0];
      for (let S = 0; S < M; S++) {
        const u = ((_a = O.massParticipation) == null ? void 0 : _a[S]) || [0, 0, 0, 0, 0, 0];
        for (let D = 0; D < 6; D++) l[D] += u[D];
        w < 0 && l[0] >= x && (w = S + 1), i < 0 && l[1] >= x && (i = S + 1), I < 0 && l[0] >= x && l[1] >= x && (I = S + 1);
      }
      X = l[0], _ = l[1];
    }
    let J = -1, z = -1, H = -1;
    const C = 0.1;
    for (let l = 0; l < M; l++) {
      const S = ((_b = O.massParticipation) == null ? void 0 : _b[l]) || [0, 0, 0, 0, 0, 0];
      J < 0 && S[0] > C && (J = l + 1), z < 0 && S[1] > C && (z = l + 1), H < 0 && S[5] > C && (H = l + 1);
    }
    const d = I > 0 ? `<span style="color:#0f0">\u2713 ASCE 7-22 \xA712.9.1.1 \u2014 90 % alcanzado en X e Y al modo ${I} de ${M}</span>` : w > 0 && i < 0 ? `<span style="color:#fa0">\u26A0 X cumple en modo ${w}, Y todav\xEDa en ${(_ * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : i > 0 && w < 0 ? `<span style="color:#fa0">\u26A0 Y cumple en modo ${i}, X todav\xEDa en ${(X * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : `<span style="color:#f44">\u2717 ASCE 7-22 NO cumplido en ${M} modos \xB7 \u03A3Ux=${(X * 100).toFixed(1)} % \xB7 \u03A3Uy=${(_ * 100).toFixed(1)} % \u2014 aumentar nModes</span>`, h = (() => {
      const l = (S, u) => {
        var _a2;
        if (S < 0) return `<span style="color:#f44">${u}: no encontrado en ${M} modos</span>`;
        const D = ((_a2 = O.massParticipation) == null ? void 0 : _a2[S - 1]) || [0, 0, 0, 0, 0, 0], y = u === "Ux" ? 0 : u === "Uy" ? 1 : 5, Y = O.frequencies[S - 1] > 0 ? 1 / O.frequencies[S - 1] : 0;
        return `<span style="color:#0f0">${u}: modo ${S}, T=${Y.toFixed(3)} s, MPF=${(D[y] * 100).toFixed(1)} %</span>`;
      };
      return `<div style="margin:4px 0; padding:4px 6px; background:rgba(0,255,255,0.05); border-left:2px solid #0ff; font-size:11px;">
  \u{1F3AF} <b>Modos s\xEDsmicos principales</b> (ASCE 7-22 \xA712.9.1):<br>
  ${l(J, "Ux")} \xB7 ${l(z, "Uy")} \xB7 ${l(H, "Rz")}
</div>`;
    })();
    let s = `<div id="modal-header" style="flex:0 0 auto; display:flex; align-items:center; justify-content:space-between; padding:6px 10px; cursor:move; border-bottom:1px solid #0f04; background:rgba(0,0,0,0.4);">
  <b style="color:#ff0; font-size:12px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis">\u26A1 MODAL \u2014 ${k.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
    if (s += '<div id="modal-body" style="flex:1 1 auto; min-height:0; overflow:auto; padding:6px 12px 10px 12px;">', s += `<div style="padding:6px 0; font-weight:bold; font-size:13px;">${d}</div>`, s += h, k.properties) for (const l of k.properties) s += `<span style="color:#888">${l}</span>
`;
    s += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const l of V) s += `<th style="padding:2px 5px">${l}</th>`;
    s += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let l = 0; l < 6; l++) G[l] = 0;
    if (O.frequencies.forEach((l, S) => {
      var _a2;
      const u = l > 0 ? 1 / l : 0, D = l * 2 * Math.PI, y = ((_a2 = O.massParticipation) == null ? void 0 : _a2[S]) || [0, 0, 0, 0, 0, 0];
      for (let q = 0; q < 6; q++) G[q] += y[q];
      let Y = 0, b = y[0];
      for (let q = 1; q < 6; q++) y[q] > b && (b = y[q], Y = q);
      const j = b < 0.05 ? "\u2014" : `${V[Y]} (${(b * 100).toFixed(0)} %)`, K = Y === 0 || Y === 1 ? "#0f0" : Y === 5 ? "#0ff" : Y === 2 ? "#fa0" : "#888", at = S + 1 === w, ot = S + 1 === i, rt = S + 1 === I;
      s += `<tr style="border-bottom:1px solid #fff1; ${rt ? "background:rgba(0,255,0,0.12);" : at || ot ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${S + 1}${rt ? " \u2605" : ""}</td>
  <td style="padding:2px 6px; text-align:right">${l.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${u.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${D.toFixed(2)}</td>`;
      for (let q = 0; q < 6; q++) {
        const ut = (y[q] * 100).toFixed(1), st = y[q] > 0.5 ? "#f00" : y[q] > 0.1 ? "#ff0" : "#0f0";
        s += `<td style="padding:2px 5px; text-align:right; color:${st}">${ut}%</td>`;
      }
      const Q = G[0] >= x ? "#0f0" : "#0ff", dt = G[1] >= x ? "#0f0" : "#0ff";
      s += `<td style="padding:2px 5px; text-align:right; color:${Q}">${(G[0] * 100).toFixed(1)}%${at ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${dt}">${(G[1] * 100).toFixed(1)}%${ot ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(G[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${K}">${j}</td></tr>`;
    }), s += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, s += "</div>", N.innerHTML = s, $) {
      const l = N.querySelector("#modal-body"), S = N.querySelector("#modal-minimize");
      l && (l.style.display = "none"), S && (S.textContent = "\u25A2", S.title = "Restaurar");
    }
    (_c = N.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      $ = !$;
      const l = N.querySelector("#modal-body"), S = N.querySelector("#modal-minimize");
      $ ? (l.style.display = "none", S.textContent = "\u25A2", S.title = "Restaurar") : (l.style.display = "block", S.textContent = "\u25AC", S.title = "Minimizar");
    }), (_d = N.querySelector("#modal-header")) == null ? void 0 : _d.addEventListener("mousedown", (l) => {
      if (l.target.tagName === "BUTTON") return;
      const S = N.getBoundingClientRect();
      N.style.bottom = "auto", N.style.top = `${S.top}px`, N.style.left = `${S.left}px`;
      const u = l.clientX - S.left, D = l.clientY - S.top, y = (b) => {
        N.style.left = `${Math.max(0, b.clientX - u)}px`, N.style.top = `${Math.max(0, b.clientY - D)}px`;
      }, Y = () => {
        document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", Y);
      };
      document.addEventListener("mousemove", y), document.addEventListener("mouseup", Y), l.preventDefault();
    }), (_e = N.querySelector("#modal-copy")) == null ? void 0 : _e.addEventListener("click", () => {
      const l = [];
      l.push(`Modal Analysis \u2014 ${k.title}`), l.push(d.replace(/<[^>]+>/g, ""));
      const S = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${V.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      l.push(S), l.push("-".repeat(S.length));
      const u = [0, 0, 0, 0, 0, 0];
      O.frequencies.forEach((y, Y) => {
        var _a2;
        const b = y > 0 ? 1 / y : 0, j = y * 2 * Math.PI, K = ((_a2 = O.massParticipation) == null ? void 0 : _a2[Y]) || [0, 0, 0, 0, 0, 0];
        for (let Q = 0; Q < 6; Q++) u[Q] += K[Q];
        let at = 0, ot = K[0];
        for (let Q = 1; Q < 6; Q++) K[Q] > ot && (ot = K[Q], at = Q);
        const rt = ot < 0.05 ? "\u2014" : `${V[at]} (${(ot * 100).toFixed(0)}%)`, ft = K.map((Q) => ((Q * 100).toFixed(1) + "%").padStart(6)).join(" ");
        l.push(`${String(Y + 1).padStart(4)}  ${y.toFixed(4).padStart(9)}  ${b.toFixed(4).padStart(9)}  ${j.toFixed(2).padStart(9)}  ${ft}  ${(u[0] * 100).toFixed(1).padStart(5)}%  ${(u[1] * 100).toFixed(1).padStart(5)}%  ${(u[5] * 100).toFixed(1).padStart(5)}%  ${rt}`);
      }), navigator.clipboard.writeText(l.join(`
`));
      const D = N.querySelector("#modal-copy");
      D.textContent = "\u2713", setTimeout(() => D.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: N, render: L };
}
function Ft(N) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  const $ = N.split(/\r?\n/), x = { force: "TONF", length: "M" }, L = [], O = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), G = [], M = [], w = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), I = [], X = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), J = [], z = /* @__PURE__ */ new Map(), H = [];
  let C = "", d = "";
  const h = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  for (const o of $) {
    const n = o.trim();
    if (n.startsWith("$ ")) {
      d = n.substring(2).trim(), h.has(d) || h.set(d, []), s.has(d) || s.set(d, o);
      continue;
    }
    if (d && (h.has(d) || h.set(d, []), h.get(d).push(o)), !(!n || n.startsWith("$"))) {
      if (d === "CONTROLS") {
        const t = n.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        t && (x.force = t[1], x.length = t[2]);
        const c = n.match(/TITLE2\s+"([^"]+)"/);
        c && (C = c[1]);
      }
      if (d === "STORIES - IN SEQUENCE FROM TOP") {
        const t = n.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (t) {
          const c = t[1], a = t[2] ? parseFloat(t[2]) : 0, p = t[3] ? parseFloat(t[3]) : void 0;
          L.push({ name: c, height: a, elev: p ?? 0 });
        }
      }
      if (d === "MATERIAL PROPERTIES") {
        const t = n.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (t) {
          const c = t[1];
          O.has(c) || O.set(c, { type: t[2] || "", E: 0, G: 0, nu: 0 });
          const a = O.get(c);
          t[2] && (a.type = t[2]);
          const p = n.match(/\bE\s+([\d.eE+-]+)/);
          p && (a.E = parseFloat(p[1]));
          const g = n.match(/\bU\s+([\d.eE+-]+)/);
          g && (a.nu = parseFloat(g[1]), a.G = a.E / (2 * (1 + a.nu)));
          const m = n.match(/\bFY\s+([\d.eE+-]+)/);
          m && (a.fy = parseFloat(m[1]));
          const F = n.match(/\bFC\s+([\d.eE+-]+)/);
          F && (a.fc = parseFloat(F[1]));
          const B = n.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          B && (a.density = parseFloat(B[1]));
        }
      }
      if (d === "FRAME SECTIONS") {
        const t = n.match(/FRAMESECTION\s+"([^"]+)"/);
        if (t) {
          const c = t[1];
          k.has(c) || k.set(c, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
          const a = k.get(c), p = n.match(/MATERIAL\s+"([^"]+)"/);
          p && (a.material = p[1]);
          const g = n.match(/SHAPE\s+"([^"]+)"/);
          g && (a.shape = g[1]);
          const m = n.match(/\bD\s+([\d.eE+-]+)/);
          m && (a.D = parseFloat(m[1]));
          const F = n.match(/\bB\s+([\d.eE+-]+)/);
          F && (a.B = parseFloat(F[1]));
          const B = n.match(/\bTF\s+([\d.eE+-]+)/);
          B && (a.TF = parseFloat(B[1]));
          const W = n.match(/\bTW\s+([\d.eE+-]+)/);
          W && (a.TW = parseFloat(W[1]));
          const et = n.match(/\bR\s+([\d.eE+-]+)/);
          et && (a.R = parseFloat(et[1]));
          const tt = n.match(/FILLMATERIAL\s+"([^"]+)"/);
          tt && (a.fillMaterial = tt[1]);
          const nt = n.match(/I2MOD\s+([\d.eE+-]+)/);
          nt && (a.modI2 = parseFloat(nt[1]));
          const it = n.match(/I3MOD\s+([\d.eE+-]+)/);
          it && (a.modI3 = parseFloat(it[1]));
        }
      }
      if (d === "POINT COORDINATES") {
        const t = n.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        t && V.set(t[1], [parseFloat(t[2]), parseFloat(t[3])]);
      }
      if (d === "LINE CONNECTIVITIES") {
        const t = n.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        t && G.push({ name: t[1], type: t[2], pt1: t[3], pt2: t[4], nStories: parseInt(t[5]) });
      }
      if (d === "POINT ASSIGNS") {
        const t = n.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        t && w.set(`${t[1]}@${t[2]}`, t[3].split(/\s+/));
      }
      if (d === "LINE ASSIGNS") {
        const t = n.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (t) {
          const c = { story: t[2], section: t[3], rigidZone: 0, releases: [], angle: 0 }, a = n.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          a && (c.rigidZone = parseFloat(a[1]));
          const p = n.match(/RELEASE\s+"([^"]+)"/);
          p && (c.releases = p[1].split(/\s+/));
          const g = n.match(/ANG\s+([-\d.eE+]+)/);
          g && (c.angle = parseFloat(g[1])), i.set(`${t[1]}@${t[2]}`, c);
        }
      }
      if (d === "GRIDS") {
        const t = n.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        t && H.push({ label: t[1], dir: t[2], coord: parseFloat(t[3]) });
      }
      if (d === "FRAME OBJECT LOADS") {
        const t = n.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        t && I.push({ line: t[1], story: t[2], type: t[3], dir: t[4], lc: t[5], val: parseFloat(t[6]) });
      }
      if (d === "AREA CONNECTIVITIES") {
        const t = n.match(/AREA\s+"([^"]+)"\s+(?:FLOOR|WALL|RAMP|PANEL)?\s*\d+\s+(.+)/);
        if (t) {
          const c = ((_a = t[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((a) => a.replace(/"/g, ""))) || [];
          M.push({ name: t[1], pts: c, nStories: 0 });
        }
      }
      if (d === "WALL/SLAB/DECK SECTIONS" || d === "SLAB PROPERTIES" || d === "WALL PROPERTIES" || d === "DECK PROPERTIES") {
        const t = n.match(/SHELLPROP\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const c = t[1], a = (_b = t[2].match(/SLABTHICKNESS\s+([\d.eE+-]+)/)) == null ? void 0 : _b[1], p = (_c = t[2].match(/WALLTHICKNESS\s+([\d.eE+-]+)/)) == null ? void 0 : _c[1], g = (_d = t[2].match(/MATERIAL\s+"([^"]+)"/)) == null ? void 0 : _d[1], m = (_e = t[2].match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _e[1];
          if (a || p) {
            const F = _.get(c) || { material: "", modelingType: "ShellThin" };
            _.set(c, { material: g ?? F.material, modelingType: m ?? F.modelingType, thickness: parseFloat(a ?? p ?? "0") });
          }
        }
      }
      if (d === "AREA ASSIGNS") {
        const t = n.match(/AREAASSIGN\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const c = t[1], a = t[2], p = t[3], g = ((_f = p.match(/SECTION\s+"([^"]+)"/)) == null ? void 0 : _f[1]) ?? "", m = ((_g = p.match(/CARDINALPOINT\s+"([^"]+)"/)) == null ? void 0 : _g[1]) ?? "CENTROID", F = ((_h = p.match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _h[1]) ?? "ShellThin";
          X.set(`${c}@${a}`, { story: a, section: g, modelingType: F, cardinalPoint: m });
        }
      }
      if (d === "SHELL UNIFORM LOAD SETS") {
        const t = n.match(/SHELLUNIFORMLOADSET\s+"([^"]+)"\s+LOADPAT\s+"([^"]+)"\s+VALUE\s+([\d.eE+-]+)/);
        if (t) {
          const c = t[1], a = t[2], p = parseFloat(t[3]);
          z.has(c) || z.set(c, []), z.get(c).push({ loadpat: a, value: p });
        }
      }
      if (d === "SHELL OBJECT LOADS") {
        const t = n.match(/AREALOAD\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const c = t[1], a = t[2], p = t[3], g = ((_i = p.match(/TYPE\s+"([^"]+)"/)) == null ? void 0 : _i[1]) ?? "";
          if (g === "UNIFLOADSET") {
            const m = ((_j = p.match(/UNIFLOADSET"\s+"([^"]+)"/)) == null ? void 0 : _j[1]) ?? ((_k = p.match(/"([^"]+)"\s*$/)) == null ? void 0 : _k[1]) ?? "";
            J.push({ area: c, story: a, type: "UNIFLOADSET", dir: "GRAV", lc: m, val: 0 });
          } else {
            const m = ((_l = p.match(/DIR\s+"([^"]+)"/)) == null ? void 0 : _l[1]) ?? "GRAV", F = ((_m = p.match(/LC\s+"([^"]+)"/)) == null ? void 0 : _m[1]) ?? "", B = parseFloat(((_n = p.match(/FVAL\s+([\d.eE+-]+)/)) == null ? void 0 : _n[1]) ?? "0");
            J.push({ area: c, story: a, type: g, dir: m, lc: F, val: B });
          }
        }
      }
    }
  }
  const r = [];
  for (const o of J) if (o.type === "UNIFLOADSET") {
    const n = z.get(o.lc);
    if (n) for (const t of n) r.push({ area: o.area, story: o.story, type: "UNIFF", dir: o.dir, lc: t.loadpat, val: t.value });
  } else r.push(o);
  J.length = 0, J.push(...r);
  const l = /* @__PURE__ */ new Map();
  if (L.length > 0) {
    const o = L.length - 1;
    l.set(L[o].name, L[o].elev);
    for (let n = o - 1; n >= 0; n--) {
      const c = l.get(L[n + 1].name) + L[n].height;
      L[n].elev = c, l.set(L[n].name, c);
    }
  }
  const S = [], u = [], D = /* @__PURE__ */ new Map(), y = (o, n) => `${o}@${n}`, Y = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Map();
  for (const o of G) b.set(o.name, o);
  for (const o of G) for (const [n, t] of i) {
    if (!n.startsWith(o.name + "@")) continue;
    const c = t.story, a = L.findIndex((p) => p.name === c);
    if (!(a < 0)) if (o.type === "COLUMN" || o.type === "BRACE") {
      Y.add(y(o.pt2, c));
      const p = Math.max(o.nStories, 1), g = Math.min(a + p, L.length - 1);
      Y.add(y(o.pt1, L[g].name));
    } else Y.add(y(o.pt1, c)), Y.add(y(o.pt2, c));
  }
  for (const [o] of w) Y.add(o);
  for (const o of M) for (const [n, t] of X) if (n.startsWith(o.name + "@")) for (const c of o.pts) Y.add(y(c, t.story));
  for (const o of Y) {
    const [n, t] = o.split("@"), c = V.get(n), a = l.get(t);
    c === void 0 || a === void 0 || (S.push([c[0], c[1], a]), u.push(o), D.set(o, S.length - 1));
  }
  const j = [], K = [], at = [], ot = [], rt = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map();
  for (const o of G) for (const [n, t] of i) {
    if (!n.startsWith(o.name + "@")) continue;
    const c = t.story, a = L.findIndex((W) => W.name === c);
    if (a < 0) continue;
    let p, g;
    if (o.type === "COLUMN" || o.type === "BRACE") {
      const W = Math.max(o.nStories, 1), et = Math.min(a + W, L.length - 1);
      p = y(o.pt1, L[et].name), g = y(o.pt2, c);
    } else p = y(o.pt1, c), g = y(o.pt2, c);
    const m = D.get(p), F = D.get(g);
    if (m === void 0 || F === void 0 || m === F) continue;
    const B = j.length;
    if (j.push([m, F]), K.push(o.name), at.push(o.type), ot.push(c), rt.set(B, t.section), t.rigidZone > 0 && ft.set(B, [t.rigidZone, t.rigidZone]), t.releases.length > 0) {
      const W = new Array(12).fill(false), et = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const tt of t.releases) {
        const nt = et[tt];
        nt !== void 0 && (W[nt] = true);
      }
      Q.set(B, W);
    }
  }
  const dt = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map();
  for (const o of M) for (const [n, t] of X) {
    if (!n.startsWith(o.name + "@")) continue;
    const c = [];
    for (const p of o.pts) {
      const g = y(p, t.story), m = D.get(g);
      if (m === void 0) {
        c.length = 0;
        break;
      }
      c.push(m);
    }
    if (c.length !== 4) continue;
    const a = j.length;
    j.push(c), K.push(o.name), at.push("FLOOR"), ot.push(t.story), dt.set(a, t.section), q.set(a, t.cardinalPoint);
  }
  const ut = /* @__PURE__ */ new Map();
  for (const o of J) if (o.type === "UNIFF") for (let n = 0; n < j.length; n++) {
    if (K[n] !== o.area || ot[n] !== o.story) continue;
    const t = j[n];
    if (t.length !== 4) continue;
    const c = t.map((F) => S[F]), a = [c[1][0] - c[0][0], c[1][1] - c[0][1]], p = [c[3][0] - c[0][0], c[3][1] - c[0][1]], g = Math.abs(a[0] * p[1] - a[1] * p[0]), m = -o.val * g / 4;
    for (const F of t) {
      const B = ut.get(F) || [0, 0, 0, 0, 0, 0];
      B[2] += m, ut.set(F, B);
    }
  }
  const st = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map(), At = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map();
  for (const [o, n] of rt) {
    const t = k.get(n);
    if (!t) continue;
    const c = O.get(t.material);
    c && (st.set(o, c.E), mt.set(o, c.G));
    const a = t.D, p = t.B, g = t.TF, m = t.TW;
    let F = 0, B = 0, W = 0, et = 0, tt = 0, nt = 0, it = "rect";
    switch (t.shape) {
      case "Concrete Rectangular":
        F = a * p, B = p * a ** 3 / 12, W = a * p ** 3 / 12, et = p * a ** 3 * (1 / 3 - 0.21 * (a / p) * (1 - a ** 4 / (12 * p ** 4))), tt = nt = 5 / 6 * F, it = "rect";
        break;
      case "Concrete Circle":
        F = Math.PI * a ** 2 / 4, B = W = Math.PI * a ** 4 / 64, et = Math.PI * a ** 4 / 32, tt = nt = 0.9 * F, it = "circ";
        break;
      case "Steel I/Wide Flange":
        F = 2 * p * g + (a - 2 * g) * m, B = (p * a ** 3 - (p - m) * (a - 2 * g) ** 3) / 12, W = (2 * g * p ** 3 + (a - 2 * g) * m ** 3) / 12, et = (2 * p * g ** 3 + (a - 2 * g) * m ** 3) / 3, tt = (a - 2 * g) * m, nt = 2 * p * g * 5 / 6, it = "I";
        break;
      case "Steel Tube":
        F = a * p - (a - 2 * m) * (p - 2 * m), B = (p * a ** 3 - (p - 2 * m) * (a - 2 * m) ** 3) / 12, W = (a * p ** 3 - (a - 2 * m) * (p - 2 * m) ** 3) / 12, et = 2 * m * (a - m) * (p - m) * ((a - m) * (p - m)) / (a - m + (p - m)), tt = 2 * a * m, nt = 2 * p * m, it = "HSS";
        break;
      case "Filled Steel Tube":
        F = a * p, B = p * a ** 3 / 12, W = a * p ** 3 / 12, et = 2 * m * (a - m) * (p - m) * ((a - m) * (p - m)) / (a - m + (p - m)), tt = 2 * a * m + 5 / 6 * (a - 2 * m) * (p - 2 * m), nt = 2 * p * m + 5 / 6 * (a - 2 * m) * (p - 2 * m), it = "CFT";
        break;
      case "Steel Angle": {
        const ct = g || m;
        F = ct * (a + p - ct), B = ct * (a ** 3 + p * ct ** 2 + ct ** 2 * (a - ct)) / 12, W = ct * (p ** 3 + a * ct ** 2 + ct ** 2 * (p - ct)) / 12, et = (a + p - ct) * ct ** 3 / 3, tt = a * ct, nt = p * ct, it = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        F = 2 * p * g + (a - 2 * g) * m, B = (m * a ** 3 + 2 * p * g * (a - g) ** 2) / 12, W = (2 * g * p ** 3 + (a - 2 * g) * m ** 3) / 12, et = (2 * p * g ** 3 + (a - 2 * g) * m ** 3) / 3, tt = (a - 2 * g) * m, nt = 2 * p * g * 5 / 6, it = t.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        F = 2 * (2 * p * g + (a - 2 * g) * m), B = 2 * (m * a ** 3 + 2 * p * g * (a - g) ** 2) / 12, W = 2 * (2 * g * p ** 3 + (a - 2 * g) * m ** 3) / 12, et = 2 * (2 * p * g ** 3 + (a - 2 * g) * m ** 3) / 3, tt = 2 * (a - 2 * g) * m, nt = 4 * p * g * 5 / 6, it = "2C";
        break;
      default:
        a > 0 && p > 0 && (F = a * p, B = p * a ** 3 / 12, W = a * p ** 3 / 12, et = Math.min(a, p) * Math.max(a, p) ** 3 / 3 * 0.3, tt = nt = 5 / 6 * F);
        break;
    }
    t.modI2 && (W *= t.modI2), t.modI3 && (B *= t.modI3), At.set(o, F), St.set(o, B), Tt.set(o, W), Et.set(o, et), tt > 0 && It.set(o, tt), nt > 0 && ht.set(o, nt), pt.set(o, { type: it, b: p || void 0, h: a || void 0, d: it === "circ" || it === "pipe" ? a : void 0, tw: m || void 0, tf: g || void 0, r: t.R, name: n });
  }
  const Mt = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map();
  for (const [o, n] of dt) {
    const t = _.get(n);
    if (!t) continue;
    Mt.set(o, t.thickness);
    const c = O.get(t.material);
    c && (st.set(o, c.E), mt.set(o, c.G), gt.set(o, c.nu), c.density !== void 0 && lt.set(o, c.density)), $t.set(o, t.modelingType === "ShellThin" ? 1 : 0);
  }
  const e = /* @__PURE__ */ new Map();
  for (const [o, n] of w) {
    const t = D.get(o);
    if (t === void 0) continue;
    const c = [false, false, false, false, false, false];
    for (const a of n) a === "UX" && (c[0] = true), a === "UY" && (c[1] = true), a === "UZ" && (c[2] = true), a === "RX" && (c[3] = true), a === "RY" && (c[4] = true), a === "RZ" && (c[5] = true);
    e.set(t, c);
  }
  const f = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map();
  for (let o = 0; o < K.length; o++) T.set(`${K[o]}@${ot[o]}`, o);
  for (const o of I) {
    const n = T.get(`${o.line}@${o.story}`);
    if (n === void 0) continue;
    const [t, c] = j[n], a = S[t], p = S[c], g = Math.sqrt((p[0] - a[0]) ** 2 + (p[1] - a[1]) ** 2 + (p[2] - a[2]) ** 2);
    if (g < 1e-10) continue;
    const m = o.val * g / 2;
    let F = 0, B = 0, W = 0;
    o.dir === "GRAV" || o.dir === "GRAVITY" ? W = -m : o.dir === "X" ? F = m : o.dir === "Y" ? B = m : o.dir === "Z" && (W = -m);
    for (const et of [t, c]) {
      const tt = f.get(et) || [0, 0, 0, 0, 0, 0];
      tt[0] += F, tt[1] += B, tt[2] += W, f.set(et, tt);
    }
  }
  const E = /* @__PURE__ */ new Map();
  for (const [o, n] of rt) {
    const t = k.get(n);
    if (!t) continue;
    const c = O.get(t.material);
    (c == null ? void 0 : c.density) && E.set(o, c.density);
  }
  for (const [o, n] of lt) E.set(o, n);
  for (const [o, n] of ut) {
    const t = f.get(o) || [0, 0, 0, 0, 0, 0];
    f.set(o, [t[0] + n[0], t[1] + n[1], t[2] + n[2], t[3] + n[3], t[4] + n[4], t[5] + n[5]]);
  }
  const P = { M: 1, CM: 0.01, MM: 1e-3, FT: 0.3048, IN: 0.0254, INCH: 0.0254 }, R = { KN: 1, N: 1e-3, TONF: 9.80665, TON: 9.80665, KGF: 980665e-8, KG: 980665e-8, KIP: 4.448222, LB: 4448222e-9 }, A = P[(x.length || "M").toUpperCase()] ?? 1, U = R[(x.force || "KN").toUpperCase()] ?? 1;
  if (A !== 1 || U !== 1) {
    const o = U / (A * A);
    for (const t of S) t[0] *= A, t[1] *= A, t[2] *= A;
    for (const [t, c] of f) f.set(t, [c[0] * U, c[1] * U, c[2] * U, c[3] * U * A, c[4] * U * A, c[5] * U * A]);
    const n = (t, c) => {
      for (const [a, p] of t) t.set(a, p * c);
    };
    n(st, o), n(mt, o), n(At, A * A), n(St, A ** 4), n(Tt, A ** 4), n(Et, A ** 4), n(It, A * A), n(ht, A * A), n(Mt, A), n(E, U / A ** 3), x.force = "KN", x.length = "M";
  }
  return { units: x, stories: L.reverse(), materials: O, frameSections: k, nodes: S, nodeNames: u, nodeNameToIdx: D, elements: j, elementNames: K, elementTypes: at, elementStories: ot, elementSections: rt, nodeInputs: { supports: e, loads: f }, elementInputs: { elasticities: st, shearModuli: mt, areas: At, momentsOfInertiaZ: St, momentsOfInertiaY: Tt, torsionalConstants: Et, shearAreasY: It, shearAreasZ: ht, rigidOffsets: ft, momentReleases: Q, densities: E, sectionShapes: pt, thicknesses: Mt, poissonsRatios: gt, plateFormulations: $t }, sectionShapes: pt, grids: H, info: { nNodes: S.length, nFrames: j.length, nAreas: M.length, title: C }, rawSections: h, rawSectionHeaders: s };
}
function v(N) {
  return N && parseFloat(N) || 0;
}
function Ot(N) {
  const $ = /* @__PURE__ */ new Map(), x = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let L;
  for (; (L = x.exec(N)) !== null; ) $.set(L[1], L[2] !== void 0 ? L[2] : L[3]);
  return $;
}
function Pt(N) {
  const $ = N.split(/\r?\n/);
  return $.some((L) => L.trim().startsWith("TABLE:")) ? Rt($) : yt($);
}
function Rt(N) {
  var _a, _b, _c, _d, _e, _f;
  const $ = [];
  let x = "";
  for (const H of N) {
    const C = H.trimEnd();
    C.endsWith("_") ? x += C.slice(0, -1) + " " : (x += C, $.push(x), x = "");
  }
  x && $.push(x);
  const L = { force: "KN", length: "m" };
  let O = "UX,UY,UZ,RX,RY,RZ";
  const k = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), w = [], i = [], I = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), J = [];
  let z = "";
  for (const H of $) {
    const C = H.trim();
    if (!C || C.startsWith(";") || C.startsWith("File ")) continue;
    if (C.startsWith("TABLE:")) {
      const h = C.match(/TABLE:\s+"(.+?)"/);
      z = h ? h[1].toUpperCase() : "";
      continue;
    }
    if (C === "END TABLE DATA") {
      z = "";
      continue;
    }
    const d = Ot(C);
    switch (z) {
      case "PROGRAM CONTROL": {
        const h = d.get("CurrUnits");
        if (h) {
          const s = h.split(",").map((r) => r.trim());
          s[0] && (L.force = s[0]), s[1] && (L.length = s[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const h = d.get("Material");
        h && !k.has(h) && k.set(h, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const h = d.get("Material");
        if (h) {
          const s = k.get(h) || { E: 0, nu: 0, G: 0 };
          s.E = v(d.get("E1")), s.G = v(d.get("G12")), s.nu = v(d.get("U12")), s.density = v(d.get("UnitMass")), k.set(h, s);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const h = d.get("Material");
        h && k.has(h) && (k.get(h).fy = v(d.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const h = d.get("SectionName");
        h && V.set(h, { material: d.get("Material") || "", shape: d.get("Shape") || "Rectangular", D: v(d.get("t3")), B: v(d.get("t2")), TF: v(d.get("tf")), TW: v(d.get("tw")), A: v(d.get("Area")), Iz: v(d.get("I33")), Iy: v(d.get("I22")), J: v(d.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const h = d.get("Section");
        h && G.set(h, { material: d.get("Material") || "", type: d.get("Type") || "Shell", thickness: v(d.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const h = d.get("Joint");
        if (h) {
          const s = v(d.get("XorR")), r = v(d.get("Y")), l = v(d.get("Z"));
          M.set(h, [s, r, l]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const h = d.get("Frame"), s = d.get("JointI"), r = d.get("JointJ");
        h && s && r && w.push({ name: h, j1: s, j2: r });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const h = d.get("Area");
        if (h) {
          const s = parseInt(d.get("NumJoints") || "4"), r = [];
          for (let l = 1; l <= s; l++) {
            const S = d.get(`Joint${l}`);
            S && r.push(S);
          }
          r.length >= 3 && i.push({ name: h, joints: r });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const h = d.get("Joint");
        if (h) {
          const s = [((_a = d.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = d.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = d.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = d.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = d.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = d.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          I.set(h, s);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const h = d.get("Frame"), s = d.get("AnalSect");
        h && s && X.set(h, s);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const h = d.get("Area"), s = d.get("Section");
        h && s && _.set(h, s);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const h = d.get("Joint");
        h && J.push({ joint: h, fx: v(d.get("F1")), fy: v(d.get("F2")), fz: v(d.get("F3")), mx: v(d.get("M1")), my: v(d.get("M2")), mz: v(d.get("M3")) });
        break;
      }
    }
  }
  return Lt(L, O, k, V, G, M, w, i, I, X, _, J);
}
function yt(N) {
  const $ = { force: "KN", length: "m" };
  let x = "UX,UY,UZ,RX,RY,RZ";
  const L = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), G = [], M = [], w = /* @__PURE__ */ new Map(), i = [];
  let I = "", X = "";
  for (const z of N) {
    const H = z.trim();
    if (!H || H.startsWith(";")) continue;
    if (!z.startsWith(" ") && !z.startsWith("	")) {
      const h = H.toUpperCase();
      if (h === "END") break;
      h.startsWith("SHELL SECTION") ? I = "SHELL SECTION" : h.startsWith("FRAME SECTION") ? I = "FRAME SECTION" : I = h.split(/\s+/)[0];
      continue;
    }
    const C = Ot(H), d = H.split(/\s+/);
    switch (I) {
      case "SYSTEM": {
        const h = C.get("DOF");
        h && (x = h);
        const s = C.get("LENGTH");
        s && ($.length = s);
        const r = C.get("FORCE");
        r && ($.force = r);
        break;
      }
      case "JOINT": {
        const h = d[0];
        V.set(h, [v(C.get("X")), v(C.get("Y")), v(C.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const h = C.get("ADD"), s = C.get("DOF");
        if (h && s) {
          const r = s.split(","), l = [false, false, false, false, false, false];
          for (const S of r) {
            const u = S.toUpperCase();
            (u === "UX" || u === "U1") && (l[0] = true), (u === "UY" || u === "U2") && (l[1] = true), (u === "UZ" || u === "U3") && (l[2] = true), (u === "RX" || u === "R1") && (l[3] = true), (u === "RY" || u === "R2") && (l[4] = true), (u === "RZ" || u === "R3") && (l[5] = true);
          }
          w.set(h, l);
        }
        break;
      }
      case "MATERIAL": {
        const h = C.get("NAME");
        if (h) X = h, L.set(h, { E: 0, nu: 0, G: 0 });
        else if (X) {
          const s = L.get(X), r = C.get("E");
          r && (s.E = v(r));
          const l = C.get("U");
          l && (s.nu = v(l)), s.G = s.E / (2 * (1 + s.nu));
          const S = C.get("M");
          S && (s.density = v(S));
        }
        break;
      }
      case "SHELL": {
        const h = d[0], s = C.get("J");
        C.get("SEC"), s && M.push({ name: h, joints: s.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const h = C.get("NAME");
        h && k.set(h, { material: C.get("MAT") || "", type: C.get("TYPE") || "Shell", thickness: v(C.get("TH")) });
        break;
      }
      case "FRAME": {
        const h = d[0], s = C.get("J");
        if (s) {
          const r = s.split(",");
          r.length >= 2 && G.push({ name: h, j1: r[0], j2: r[1] });
        }
        break;
      }
      case "LOAD": {
        const h = C.get("ADD");
        h && i.push({ joint: h, fx: v(C.get("UX")), fy: v(C.get("UY")), fz: v(C.get("UZ")), mx: v(C.get("MX")), my: v(C.get("MY")), mz: v(C.get("MZ")) });
        break;
      }
    }
  }
  return Lt($, x, L, O, k, V, G, M, w, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), i);
}
function Lt(N, $, x, L, O, k, V, G, M, w, i, I) {
  var _a;
  const X = [], _ = /* @__PURE__ */ new Map(), J = [];
  for (const [u, D] of k) _.set(u, J.length), X.push(u), J.push(D);
  const z = [], H = [], C = /* @__PURE__ */ new Map();
  for (const u of V) {
    const D = _.get(u.j1), y = _.get(u.j2);
    if (D !== void 0 && y !== void 0) {
      const Y = z.length;
      z.push([D, y]), H.push(u.name);
      const b = w.get(u.name);
      b && C.set(Y, b);
    }
  }
  const d = z.length;
  for (const u of G) {
    const D = u.joints.map((y) => _.get(y)).filter((y) => y !== void 0);
    if (D.length >= 3) {
      const y = z.length;
      z.push(D), H.push(u.name);
      const Y = i.get(u.name);
      Y && C.set(y, Y);
    }
  }
  const h = z.length - d, s = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, r = /* @__PURE__ */ new Map(), l = x.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let u = 0; u < z.length; u++) {
    const D = C.get(u), y = D ? L.get(D) : null, Y = D ? O.get(D) : null;
    if (y || z[u].length === 2) {
      const b = y || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, j = x.get(b.material) || l, K = j.E || l.E, at = j.nu || 0.3, ot = j.G || K / (2 * (1 + at));
      s.elasticities.set(u, K), s.shearModuli.set(u, ot), s.areas.set(u, b.A || b.D * b.B), s.momentsOfInertiaZ.set(u, b.Iz || b.B * b.D ** 3 / 12), s.momentsOfInertiaY.set(u, b.Iy || b.D * b.B ** 3 / 12), s.torsionalConstants.set(u, b.J || 0), s.densities.set(u, j.density || 0), ((_a = b.shape) == null ? void 0 : _a.includes("Wide Flange")) || b.shape === "I" ? r.set(u, { type: "I", b: b.B, h: b.D, name: D || "I-section" }) : r.set(u, { type: "rect", b: b.B, h: b.D });
    } else if (Y) {
      const b = x.get(Y.material) || l, j = b.E || l.E, K = b.nu || 0.2, at = b.G || j / (2 * (1 + K));
      s.elasticities.set(u, j), s.shearModuli.set(u, at), s.thicknesses.set(u, Y.thickness), s.poissonsRatios.set(u, K), s.densities.set(u, b.density || 0);
    }
  }
  const S = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [u, D] of M) {
    const y = _.get(u);
    y !== void 0 && S.supports.set(y, D);
  }
  for (const u of I) {
    const D = _.get(u.joint);
    if (D !== void 0) {
      const y = S.forces.get(D) || [0, 0, 0, 0, 0, 0];
      y[0] += u.fx, y[1] += u.fy, y[2] += u.fz, y[3] += u.mx, y[4] += u.my, y[5] += u.mz, S.forces.set(D, y);
    }
  }
  return { units: N, dof: $, materials: x, frameSections: L, shellSections: O, nodes: J, nodeNames: X, nodeNameToIdx: _, elements: z, elementNames: H, elementSections: C, nodeInputs: S, elementInputs: s, sectionShapes: r, info: { nNodes: J.length, nFrames: d, nShells: h, title: `SAP2000 (${d} frames, ${h} shells)` } };
}
function bt(N) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: $, elements: x, nodeInputs: L, elementInputs: O } = N, k = N.units || { force: "KN", length: "m" }, V = N.title || "Awatif Model", G = [], M = (s) => G.push(s), w = () => G.push(" ");
  M(`File ${V}.$2k was saved on m/d/yy at h:mm:ss`), w(), M('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), M("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), w();
  const i = [], I = [];
  if (x.forEach((s, r) => {
    s.length === 2 ? i.push(r) : I.push(r);
  }), i.length > 0) {
    M('TABLE:  "CONNECTIVITY - FRAME"');
    for (const s of i) {
      const r = x[s];
      M(`   Frame=${s + 1}   JointI=${r[0] + 1}   JointJ=${r[1] + 1}   IsCurved=No`);
    }
    w();
  }
  if (I.length > 0) {
    M('TABLE:  "CONNECTIVITY - AREA"');
    for (const s of I) {
      const r = x[s], l = r.map((S, u) => `Joint${u + 1}=${S + 1}`).join("   ");
      M(`   Area=${s + 1}   NumJoints=${r.length}   ${l}`);
    }
    w();
  }
  M('TABLE:  "COORDINATE SYSTEMS"'), M("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), w(), M('TABLE:  "DATABASE FORMAT TYPES"'), M("   UnitsCurr=Yes   OverrideE=No"), w();
  const X = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
  for (const s of i) {
    const r = ((_a = O.areas) == null ? void 0 : _a.get(s)) || 0, l = ((_b = O.momentsOfInertiaZ) == null ? void 0 : _b.get(s)) || 0, S = ((_c = O.momentsOfInertiaY) == null ? void 0 : _c.get(s)) || 0, u = ((_d = O.torsionalConstants) == null ? void 0 : _d.get(s)) || 0, D = ((_e = O.elasticities) == null ? void 0 : _e.get(s)) || 0, y = `MAT_${Math.round(D)}`, Y = `A${r.toPrecision(6)}_Iz${l.toPrecision(6)}`;
    if (!X.has(Y)) {
      let j = 0.3, K = 0.3;
      r > 0 && l > 0 && (j = Math.sqrt(12 * l / r), K = r / j), X.set(Y, { A: r, Iz: l, Iy: S, J: u, b: K, h: j, matKey: y });
    }
    const b = [...X.keys()].indexOf(Y) + 1;
    _.set(s, `SEC${b}`);
  }
  if (i.length > 0) {
    M('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const s of i) {
      const r = _.get(s) || "SEC1";
      M(`   Frame=${s + 1}   AutoSelect=N.A.   AnalSect=${r}   MatProp=Default`);
    }
    w();
  }
  if (X.size > 0) {
    M('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let s = 0;
    for (const [, r] of X) {
      s++;
      const l = r.A * 5 / 6;
      M(`   SectionName=SEC${s}   Material=${r.matKey}   Shape=Rectangular   t3=${Z(r.h)}   t2=${Z(r.b)}   Area=${Z(r.A)}   TorsConst=${Z(r.J)}   I33=${Z(r.Iz)}   I22=${Z(r.Iy)}   I23=0   AS2=${Z(l)}   AS3=${Z(l)} _`), M("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    w();
  }
  const J = !!N.layeredSection && I.length > 0, z = N.layeredSection, H = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map();
  if (!J) for (const s of I) {
    const r = ((_f = O.thicknesses) == null ? void 0 : _f.get(s)) || 0.1, l = ((_g = O.elasticities) == null ? void 0 : _g.get(s)) || 0, S = `MAT_${Math.round(l)}`, u = `t${r.toPrecision(6)}`;
    H.has(u) || H.set(u, { t: r, matKey: S });
    const D = [...H.keys()].indexOf(u) + 1;
    C.set(s, `SSEC${D}`);
  }
  if (I.length > 0) {
    M('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const s of I) {
      const r = J ? z.name : C.get(s) || "SSEC1";
      M(`   Area=${s + 1}   Section=${r}   MatProp=Default`);
    }
    if (w(), M('TABLE:  "AREA SECTION PROPERTIES"'), J) {
      const s = z, r = ((_h = s.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      M(`   Section=${s.name}   Material=${r}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${Z(s.totalThickness)}   BendThick=${Z(s.totalThickness)}   Color=Magenta`);
    } else {
      let s = 0;
      for (const [, r] of H) s++, M(`   Section=SSEC${s}   Material=${r.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${Z(r.t)}   BendThick=${Z(r.t)}   Color=Cyan`);
    }
    if (w(), J) {
      M('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const s = z;
      for (const r of s.layers) {
        const l = r.angle ?? 0, S = r.numIntPts ?? 3;
        M(`   Section=${s.name}   LayerName=${r.name}   Distance=${Z(r.distance)}   Thickness=${Z(r.thickness)}   Type=Shell   NumIntPts=${S}   Material=${r.material}   MatAngle=${Z(l * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      w();
    }
  }
  M('TABLE:  "JOINT COORDINATES"');
  for (let s = 0; s < $.length; s++) {
    const r = $[s];
    M(`   Joint=${s + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${Z(r[0])}   Y=${Z(r[1])}   Z=${Z(r[2])}   SpecialJt=No`);
  }
  if (w(), L.supports && L.supports.size > 0) {
    M('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [s, r] of L.supports) {
      if (!r.some((S) => S)) continue;
      const l = (S) => S ? "Yes" : "No";
      M(`   Joint=${s + 1}   U1=${l(r[0])}   U2=${l(r[1])}   U3=${l(r[2])}   R1=${l(r[3])}   R2=${l(r[4])}   R3=${l(r[5])}`);
    }
    w();
  }
  const d = N.selfWtMult ?? 1;
  if (M('TABLE:  "LOAD PATTERN DEFINITIONS"'), M(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${d}`), w(), M('TABLE:  "LOAD CASE DEFINITIONS"'), M('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), w(), M('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), M('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), w(), L.loads && L.loads.size > 0) {
    M('TABLE:  "JOINT LOADS - FORCE"');
    for (const [s, r] of L.loads) r.some((l) => Math.abs(l) > 1e-12) && M(`   Joint=${s + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${Z(r[0])}   F2=${Z(r[1])}   F3=${Z(r[2])}   M1=${Z(r[3])}   M2=${Z(r[4])}   M3=${Z(r[5])}`);
    w();
  }
  const h = /* @__PURE__ */ new Map();
  for (let s = 0; s < x.length; s++) {
    const r = ((_i = O.elasticities) == null ? void 0 : _i.get(s)) || 0, l = ((_j = O.shearModuli) == null ? void 0 : _j.get(s)) || 0, S = r > 0 && l > 0 ? Math.max(0, Math.min(0.5, r / (2 * l) - 1)) : 0.2, u = ((_k = O.densities) == null ? void 0 : _k.get(s)) || 0, D = `MAT_${Math.round(r)}`;
    h.has(D) || h.set(D, { E: r, nu: S, G: l, rho: u });
  }
  M('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [s] of h) M(`   Material=${s}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  w(), M('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [s, r] of h) M(`   Material=${s}   UnitWeight=${Z(r.rho * 9.81)}   UnitMass=${Z(r.rho)}   E1=${Z(r.E)}   G12=${Z(r.G)}   U12=${Z(r.nu)}   A1=9.9E-06`);
  w(), M('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [s] of h) M(`   Material=${s}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return w(), M('TABLE:  "PROGRAM CONTROL"'), M(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${k.force}, ${k.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), w(), M("END TABLE DATA"), M(""), G.join(`\r
`);
}
function Z(N) {
  return N === 0 || Math.abs(N) < 1e-15 ? "0" : Math.abs(N) >= 1e6 || Math.abs(N) < 1e-3 && Math.abs(N) > 0 ? N.toExponential(8) : parseFloat(N.toPrecision(10)).toString();
}
function wt(N) {
  const { nodes: $, elements: x, nodeInputs: L, elementInputs: O, title: k, e2kModel: V } = N, G = V == null ? void 0 : V.rawSections;
  return G && G.size > 0 ? Ct(G, V) : xt(N);
}
function Ct(N, $) {
  const x = [], L = $ == null ? void 0 : $.rawSectionHeaders;
  for (const [O, k] of N) {
    x.push((L == null ? void 0 : L.get(O)) ?? `$ ${O}`);
    for (const V of k) x.push(V);
  }
  return N.has("END OF MODEL FILE") || (x.push("  END"), x.push("$ END OF MODEL FILE")), x.join(`\r
`);
}
function xt(N) {
  var _a, _b, _c;
  const { nodes: $, elements: x, nodeInputs: L, elementInputs: O, title: k, units: V } = N, G = N.rigidDiaphragm ?? false, M = (V == null ? void 0 : V.force) || "Tonf", w = (V == null ? void 0 : V.length) || "m", i = [], I = (e) => Math.round(e * 1e4) / 1e4, X = (() => {
    const e = (M || "Tonf").toLowerCase();
    return e === "tonf" || e === "tonf-f" ? 1 / 9.80665 : e === "kn" || e === "kn-f" ? 1 : e === "kgf" || e === "kg" ? 1 / 980665e-8 : e === "kip" || e === "kips" ? 1 / 4.44822 : 1;
  })(), _ = (e) => e * X, J = (e) => e * X, z = (e) => e * X, H = /* @__PURE__ */ new Date(), C = `${H.getMonth() + 1}/${H.getDate()}/${H.getFullYear()}  ${H.getHours()}:${String(H.getMinutes()).padStart(2, "0")}:${String(H.getSeconds()).padStart(2, "0")}`;
  i.push(`$ File   "Hekatan_export.e2k"  saved ${C} in ETABS 22.6.0`), i.push(""), i.push("$ PROGRAM INFORMATION"), i.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), i.push(""), i.push("$ CONTROLS"), i.push(`  UNITS  "${M}"  "${w}"  "C"  `), i.push('  TITLE1  "Hekatan Struct export"  '), k && i.push(`  TITLE2  "${k}"  `), i.push("  PREFERENCE  MERGETOL 0.001"), i.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), i.push("");
  const d = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
  $.forEach((e) => {
    d.add(I(e[0])), h.add(I(e[1]));
  });
  const s = [...d].sort((e, f) => e - f), r = [...h].sort((e, f) => e - f);
  i.push("$ GRIDS"), i.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), s.forEach((e, f) => {
    const T = f < 26 ? String.fromCharCode(65 + f) : String.fromCharCode(65 + f % 26).repeat(Math.floor(f / 26) + 1);
    i.push(`  GRID "G1"  LABEL "${T}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), r.forEach((e, f) => {
    i.push(`  GRID "G1"  LABEL "${f + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), i.push("");
  const l = /* @__PURE__ */ new Set();
  $.forEach((e) => l.add(I(e[2])));
  let S = [...l].sort((e, f) => e - f);
  if (S.length === 1) {
    const e = S[0];
    e > 0 ? S = [0, e] : S = [0, 4];
  }
  const u = [], D = /* @__PURE__ */ new Map();
  u.push("Base"), D.set(S[0], "Base");
  for (let e = 1; e < S.length; e++) {
    const f = `Story${e}`;
    u.push(f), D.set(S[e], f);
  }
  l.size === 1 && l.has(0) && D.set(0, u[1]), i.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = S.length - 1; e >= 1; e--) i.push(`  STORY "${u[e]}"  HEIGHT ${I(S[e] - S[e - 1])} MASTERSTORY "Yes"  `);
  S.length > 0 && i.push(`  STORY "Base"  ELEV ${S[0]} `), i.push(""), x.some((e) => e.length === 4), G && (i.push("$ DIAPHRAGM NAMES"), i.push('  DIAPHRAGM "D1"    TYPE RIGID'), i.push("")), i.push("$ MATERIAL PROPERTIES");
  const y = /* @__PURE__ */ new Set();
  (_a = O.elasticities) == null ? void 0 : _a.forEach((e) => y.add(e));
  const Y = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map();
  let j = 0, K = 0;
  const at = 980665e-8, ot = /* @__PURE__ */ new Map();
  if (O.densities && O.densities.size > 0) {
    const e = /* @__PURE__ */ new Map();
    O.densities.forEach((f, T) => {
      var _a2;
      const E = (_a2 = O.elasticities) == null ? void 0 : _a2.get(T);
      E !== void 0 && (e.has(E) || e.set(E, []), e.get(E).push(f));
    }), e.forEach((f, T) => {
      const E = f.reduce((R, A) => R + A, 0) / f.length, P = E > 100 ? E * at : E * 9.80665;
      ot.set(T, P);
    });
  }
  for (const e of y) {
    const f = e >= 1e8, T = f ? `Steel_${++j}` : `Conc_${++K}`;
    Y.set(e, T), b.set(e, f);
    const E = ot.get(e) ?? (f ? 76.97 : 24), P = J(e), R = z(E), A = [];
    (_b = O.poissonsRatios) == null ? void 0 : _b.forEach((n, t) => {
      var _a2;
      ((_a2 = O.elasticities) == null ? void 0 : _a2.get(t)) === e && A.push(n);
    });
    const U = A.length > 0 ? A.reduce((n, t) => n + t, 0) / A.length : f ? 0.3 : 0.2, o = f ? 117e-7 : 1e-5;
    if (f) {
      i.push(`  MATERIAL  "${T}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${I(R)}`), i.push(`  MATERIAL  "${T}"    SYMTYPE "Isotropic"  E ${I(P)}  U ${U}  A ${o}`);
      const n = 345e3, t = 45e4;
      i.push(`  MATERIAL  "${T}"  FY ${I(J(n))}  FU ${I(J(t))}  FYE ${I(J(n * 1.1))}  FUE ${I(J(t * 1.1))}`);
    } else i.push(`  MATERIAL  "${T}"    TYPE "Concrete"    WEIGHTPERVOLUME ${I(R)}`), i.push(`  MATERIAL  "${T}"    SYMTYPE "Isotropic"  E ${I(P)}  U ${U}  A ${o}`), i.push(`  MATERIAL  "${T}"    FC ${I(J(24e3))}`);
  }
  i.push(""), i.push("$ FRAME SECTIONS");
  const rt = /* @__PURE__ */ new Set(), ft = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), dt = 0.05;
  x.forEach((e, f) => {
    var _a2, _b2, _c2, _d, _e, _f;
    if (e.length !== 2) return;
    const T = (_a2 = O.sectionShapes) == null ? void 0 : _a2.get(f), E = ((_b2 = O.elasticities) == null ? void 0 : _b2.get(f)) ?? 0, P = Y.get(E) || "Conc_1", R = b.get(E) ?? E >= 1e8, A = ((_c2 = O.areas) == null ? void 0 : _c2.get(f)) ?? 0, U = ((_d = O.momentsOfInertiaY) == null ? void 0 : _d.get(f)) ?? 0;
    (_e = O.momentsOfInertiaZ) == null ? void 0 : _e.get(f), (_f = O.torsionalConstants) == null ? void 0 : _f.get(f);
    let o = (T == null ? void 0 : T.type) || "rect", n = (T == null ? void 0 : T.h) ?? 0, t = (T == null ? void 0 : T.b) ?? 0, c = (T == null ? void 0 : T.d) ?? 0;
    const a = (T == null ? void 0 : T.tf) ?? 0, p = (T == null ? void 0 : T.tw) ?? 0;
    n <= 0 && t <= 0 && c <= 0 && A > 0 && (U > 0 ? (n = Math.sqrt(12 * U / A), t = A / n) : n = t = Math.sqrt(A), (!isFinite(n) || n < dt) && (n = dt), (!isFinite(t) || t < dt) && (t = dt), o = "rect"), n <= 0 && t <= 0 && c <= 0 && (n = 0.3, t = 0.3, o = "rect");
    const g = `${o}_${I(n)}_${I(t)}_${I(c)}_${I(a)}_${I(p)}_${P}`;
    (T == null ? void 0 : T.name) && !Q.has(g) && Q.set(g, T.name);
    let m = Q.get(g);
    if (!m) {
      const W = R ? "S" : "C";
      o === "rect" ? m = `${W}_R${Math.round(t * 100)}x${Math.round(n * 100)}` : o === "circ" ? m = `${W}_C_D${Math.round(c * 100)}` : o === "I" ? m = `${W}_I${Math.round(n * 100)}x${Math.round(t * 100)}` : o === "HSS" ? m = `${W}_HSS${Math.round(t * 100)}x${Math.round(n * 100)}x${Math.round(p * 1e3)}` : m = `${W}_Sec${rt.size + 1}`, Q.set(g, m);
    }
    if (ft.set(f, m), rt.has(m)) return;
    rt.add(m);
    let F;
    o === "I" ? F = "Steel I/Wide Flange" : o === "HSS" ? F = "Steel Tube" : o === "CFT" ? F = "Filled Steel Tube" : o === "pipe" ? F = "Steel Pipe" : o === "L" ? F = "Steel Angle" : o === "C" ? F = "Steel Channel" : o === "2C" ? F = "Steel Double Channel" : o === "circ" ? F = "Concrete Circle" : F = "Concrete Rectangular";
    let B = `  FRAMESECTION  "${m}"  MATERIAL "${P}"  SHAPE "${F}"`;
    n && (B += `  D ${I(n)}`), t && (B += `  B ${I(t)}`), c && !n && (B += `  D ${I(c)}`), a && (B += `  TF ${I(a)}`), p && (B += `  TW ${I(p)}`), i.push(B);
  }), i.push("");
  const q = /* @__PURE__ */ new Map();
  let ut = 0;
  $.forEach((e) => {
    const f = `${I(e[0])},${I(e[1])}`;
    q.has(f) || q.set(f, `${++ut}`);
  }), i.push("$ POINT COORDINATES");
  for (const [e, f] of q) {
    const [T, E] = e.split(",").map(Number);
    i.push(`  POINT "${f}"  ${T} ${E} `);
  }
  i.push("");
  const st = (e) => {
    const f = $[e], T = `${I(f[0])},${I(f[1])}`;
    return { pt: q.get(T) || "1", story: D.get(I(f[2])) || "Base" };
  }, mt = (e) => {
    var _a2, _b2, _c2, _d;
    const f = [], T = (_a2 = N.propertyModifiers) == null ? void 0 : _a2.get(e);
    T && T.some((A) => Math.abs(A - 1) > 1e-9) && f.push(`PROPMODIFIERS "${T.map((A) => I(A)).join(" ")}"`);
    const E = (_b2 = O.momentReleases) == null ? void 0 : _b2.get(e);
    if (E && E.some((A) => A)) {
      const A = [];
      E.length === 12 ? (E[0] && A.push("PI"), E[1] && A.push("V2I"), E[2] && A.push("V3I"), E[3] && A.push("TI"), E[4] && A.push("M2I"), E[5] && A.push("M3I"), E[6] && A.push("PJ"), E[7] && A.push("V2J"), E[8] && A.push("V3J"), E[9] && A.push("TJ"), E[10] && A.push("M2J"), E[11] && A.push("M3J")) : E.length === 6 && (E[0] && A.push("TI"), E[1] && A.push("M2I"), E[2] && A.push("M3I"), E[3] && A.push("TJ"), E[4] && A.push("M2J"), E[5] && A.push("M3J")), A.length > 0 && f.push(`RELEASE "${A.join(" ")}"`);
    }
    const P = (_c2 = O.insertionPoints) == null ? void 0 : _c2.get(e);
    P && (Math.abs(P[0]) > 1e-9 || Math.abs(P[1]) > 1e-9) && f.push(`LATEROFFSET ${I(P[0])} TRANSOFFSET ${I(P[1])}`);
    const R = (_d = O.rigidOffsets) == null ? void 0 : _d.get(e);
    return R && (Math.abs(R[0]) > 1e-9 || Math.abs(R[1]) > 1e-9) && f.push(`LENGTHOFFI ${I(R[0])} LENGTHOFFJ ${I(R[1])} RIGIDZONE 0.5`), f.length > 0 ? ` ${f.join(" ")} ` : "";
  }, At = [], It = /* @__PURE__ */ new Set(), ht = /* @__PURE__ */ new Map();
  x.forEach((e, f) => {
    if (e.length !== 2) return;
    const T = Nt($, e);
    if (T === "BEAM") return;
    const E = $[e[0]][2] <= $[e[1]][2] ? e[0] : e[1], P = $[e[0]][2] <= $[e[1]][2] ? e[1] : e[0];
    if (Math.abs($[E][0] - $[P][0]) > 1e-6 || Math.abs($[E][1] - $[P][1]) > 1e-6) return;
    const R = st(E), A = ft.get(f) || `Sec_${f}`, U = `${R.pt}_${A}_${T}`;
    ht.has(U) || ht.set(U, []), ht.get(U).push({ i: f, bot: E, top: P, zBot: I($[E][2]), zTop: I($[P][2]), planPt: R.pt, secName: A, type: T });
  }), ht.forEach((e, f) => {
    e.sort((E, P) => E.zBot - P.zBot);
    let T = 0;
    for (let E = 1; E <= e.length; E++) if (E === e.length || Math.abs(e[E].zBot - e[E - 1].zTop) > 1e-6) {
      const R = e.slice(T, E);
      R.length >= 1 && (At.push({ elemIndices: R.map((A) => A.i), planPt: R[0].planPt, bottomNodeIdx: R[0].bot, topNodeIdx: R[R.length - 1].top, secName: R[0].secName, type: R[0].type, nSegments: R.length }), R.forEach((A) => It.add(A.i))), T = E;
    }
  }), i.push("$ LINE CONNECTIVITIES");
  const St = [];
  At.forEach((e, f) => {
    const T = `C${f + 1}`, E = st(e.topNodeIdx);
    st(e.bottomNodeIdx);
    const P = I($[e.topNodeIdx][2]), R = I($[e.bottomNodeIdx][2]), A = S.indexOf(P), U = S.indexOf(R), o = Math.max(1, A - U), n = mt(e.elemIndices[0]);
    i.push(`  LINE  "${T}"  ${e.type}  "${E.pt}"  "${E.pt}"  ${o}`), St.push(`  LINEASSIGN  "${T}"  "${E.story}"  SECTION "${e.secName}" ${n} RIGIDZONE 0 MAXSTASPC 0.5 MINNUMSTA ${e.nSegments} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  }), x.forEach((e, f) => {
    if (e.length !== 2 || It.has(f)) return;
    const T = Nt($, e), E = ft.get(f) || `Sec_${f}`, P = mt(f);
    if (T === "BEAM") {
      const R = st(e[0]), A = st(e[1]);
      i.push(`  LINE  "E${f + 1}"  BEAM  "${R.pt}"  "${A.pt}"  0`), St.push(`  LINEASSIGN  "E${f + 1}"  "${R.story}"  SECTION "${E}" ${P} RIGIDZONE 0 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const R = $[e[0]][2] <= $[e[1]][2] ? e[0] : e[1], A = $[e[0]][2] <= $[e[1]][2] ? e[1] : e[0], U = st(A), o = I($[R][2]), n = I($[A][2]), t = S.indexOf(o), c = S.indexOf(n), a = Math.max(1, c >= 0 && t >= 0 ? c - t : 1);
      i.push(`  LINE  "E${f + 1}"  ${T}  "${U.pt}"  "${U.pt}"  ${a}`), St.push(`  LINEASSIGN  "E${f + 1}"  "${U.story}"  SECTION "${E}" ${P} RIGIDZONE 0 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    }
  }), i.push("");
  const Tt = N.weightMode ?? "auto", Et = /* @__PURE__ */ new Set();
  i.push("$ POINT ASSIGNS"), (_c = L.supports) == null ? void 0 : _c.forEach((e, f) => {
    const T = [];
    if (e[0] && T.push("UX"), e[1] && T.push("UY"), e[2] && T.push("UZ"), e[3] && T.push("RX"), e[4] && T.push("RY"), e[5] && T.push("RZ"), T.length > 0) {
      const E = st(f), P = E.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      i.push(`  POINTASSIGN  "${E.pt}"  "${E.story}"  RESTRAINT "${T.join(" ")}" ${P} `), Et.add(`${E.pt}@${E.story}`);
    }
  }), At.forEach((e) => {
    const f = st(e.topNodeIdx), T = `${f.pt}@${f.story}`;
    G && !Et.has(T) && f.story !== "Base" && (i.push(`  POINTASSIGN  "${f.pt}"  "${f.story}"  DIAPH "D1"  `), Et.add(T));
  }), Tt === "manual" && L.loads && L.loads.forEach((e, f) => {
    const T = st(f), E = `${T.pt}@${T.story}`;
    Et.has(E) || (i.push(`  POINTASSIGN  "${T.pt}"  "${T.story}"  DIAPH "DISCONNECTED"  `), Et.add(E));
  }), i.push(""), i.push("$ LINE ASSIGNS"), St.forEach((e) => i.push(e)), i.push("");
  const pt = [];
  x.forEach((e, f) => {
    if (e.length === 4) {
      const T = $[e[0]], E = $[e[1]], P = $[e[2]], R = [E[0] - T[0], E[1] - T[1], E[2] - T[2]], A = [P[0] - T[0], P[1] - T[1], P[2] - T[2]], U = R[1] * A[2] - R[2] * A[1], o = R[2] * A[0] - R[0] * A[2], n = R[0] * A[1] - R[1] * A[0], t = Math.sqrt(U * U + o * o + n * n), c = t > 1e-10 && Math.abs(n) / t < 0.5;
      pt.push({ idx: f, el: e, isWall: c });
    }
  });
  const Mt = (() => {
    for (const [e, f] of b) if (!f) return Y.get(e);
    return Y.values().next().value || "Conc_1";
  })(), gt = (e, f) => {
    var _a2;
    for (const T of pt) if (e(T)) {
      const E = (_a2 = O.thicknesses) == null ? void 0 : _a2.get(T.idx);
      if (E !== void 0) return E;
    }
    return f;
  };
  if (pt.some((e) => !e.isWall)) {
    i.push("$ SLAB PROPERTIES");
    const e = gt((f) => !f.isWall, 0.15);
    i.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${Mt}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${I(e)} `), i.push("");
  }
  if (pt.some((e) => e.isWall)) {
    i.push("$ WALL PROPERTIES");
    const e = gt((f) => f.isWall, 0.2);
    i.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${Mt}"  MODELINGTYPE "ShellThin"  WALLTHICKNESS ${I(e)} `), i.push("");
  }
  if (pt.length > 0) {
    i.push("$ AREA CONNECTIVITIES");
    const e = [];
    pt.forEach((f, T) => {
      const { el: E, isWall: P } = f, R = P ? `W${T + 1}` : `F${T + 1}`, A = P ? "PANEL" : "FLOOR", U = E.map((o) => st(o));
      if (P) {
        const o = $[E[0]][2] <= $[E[2]][2] ? 0 : 2, n = $[E[1]][2] <= $[E[3]][2] ? 1 : 3;
        i.push(`  AREA "${R}"  ${A}  4  "${U[o].pt}"  "${U[n].pt}"  "${U[n].pt}"  "${U[o].pt}"  1  1  0  0  `);
        const t = U[o === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${R}"  "${t}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        i.push(`  AREA "${R}"  ${A}  4  "${U[0].pt}"  "${U[1].pt}"  "${U[2].pt}"  "${U[3].pt}"  0  0  0  0  `);
        const o = G ? ' DIAPH  "D1" ' : "";
        e.push(`  AREAASSIGN  "${R}"  "${U[0].story}"  SECTION "Losa" ${o} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }
    }), i.push(""), i.push("$ AREA ASSIGNS"), e.forEach((f) => i.push(f)), i.push("");
  }
  const $t = Tt === "manual" ? 0 : 1;
  i.push("$ LOAD PATTERNS"), i.push(`  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  ${$t}`), i.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), i.push("");
  const lt = [];
  return L.loads && L.loads.size > 0 && L.loads.forEach((e, f) => {
    const [T, E, P] = e, R = st(f);
    Math.abs(T) > 1e-10 && lt.push(`  POINTLOAD  "${R.pt}"  "${R.story}"  TYPE "FORCE"  LC "Dead"  FX ${I(_(T))}  FY 0  FZ 0`), Math.abs(E) > 1e-10 && lt.push(`  POINTLOAD  "${R.pt}"  "${R.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY ${I(_(E))}  FZ 0`), Tt === "manual" && Math.abs(P) > 1e-10 && lt.push(`  POINTLOAD  "${R.pt}"  "${R.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY 0  FZ ${I(_(P))}`);
  }), L.moments && L.moments.size > 0 && L.moments.forEach((e, f) => {
    const [T, E, P] = e, R = st(f);
    Math.abs(T) > 1e-10 && lt.push(`  POINTLOAD  "${R.pt}"  "${R.story}"  TYPE "MOMENT"  LC "Dead"  MX ${I(_(T))}  MY 0  MZ 0`), Math.abs(E) > 1e-10 && lt.push(`  POINTLOAD  "${R.pt}"  "${R.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY ${I(_(E))}  MZ 0`), Math.abs(P) > 1e-10 && lt.push(`  POINTLOAD  "${R.pt}"  "${R.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY 0  MZ ${I(_(P))}`);
  }), lt.length > 0 && (i.push("$ POINT OBJECT LOADS"), lt.forEach((e) => i.push(e)), i.push("")), i.push("$ ANALYSIS OPTIONS"), i.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), i.push('  PDELTA  METHOD "NONE"  '), i.push(""), i.push("$ MASS SOURCE"), i.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), i.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), i.push(""), i.push("$ LOAD CASES"), i.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), i.push('  LOADCASE "Dead"  LOADPAT  "Dead"  SF 1 '), i.push('  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), i.push('  LOADCASE "Live"  LOADPAT  "Live"  SF 1 '), i.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), i.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), i.push(""), i.push("$ LOAD COMBINATIONS"), i.push('  COMBO "1.4D"  TYPE "Linear Add"  '), i.push('  COMBO "1.4D"  LOADCASE  "Dead"  SF 1.4 '), i.push('  COMBO "1.2D+1.6L"  TYPE "Linear Add"  '), i.push('  COMBO "1.2D+1.6L"  LOADCASE  "Dead"  SF 1.2 '), i.push('  COMBO "1.2D+1.6L"  LOADCASE  "Live"  SF 1.6 '), i.push(""), i.push("  END"), i.push("$ END OF MODEL FILE"), i.join(`\r
`);
}
function Nt(N, $) {
  const x = N[$[0]], L = N[$[1]], O = Math.abs(L[2] - x[2]), k = Math.sqrt((L[0] - x[0]) ** 2 + (L[1] - x[1]) ** 2), V = O > k * 0.5;
  return V && k > 0.01 ? "BRACE" : V ? "COLUMN" : "BEAM";
}
export {
  bt as a,
  Pt as b,
  Dt as c,
  wt as e,
  Ft as p
};
