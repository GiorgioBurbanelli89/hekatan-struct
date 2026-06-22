function Lt() {
  const g = document.createElement("div");
  g.id = "modal-results", g.style.cssText = `
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
    let I = false, x = 0, G = 0, B = 0, M = 0;
    g.addEventListener("mousedown", (i) => {
      const A = i.target;
      if (!A.closest("#modal-header") || A.closest("button")) return;
      I = true;
      const b = g.getBoundingClientRect();
      x = i.clientX, G = i.clientY, B = b.left, M = b.top, g.style.bottom = "auto", g.style.right = "auto", g.style.left = `${b.left}px`, g.style.top = `${b.top}px`, i.preventDefault();
    }), document.addEventListener("mousemove", (i) => {
      if (!I) return;
      let A = B + (i.clientX - x), b = M + (i.clientY - G);
      A = Math.max(-g.offsetWidth + 80, Math.min(window.innerWidth - 80, A)), b = Math.max(0, Math.min(window.innerHeight - 30, b)), g.style.left = `${A}px`, g.style.top = `${b}px`;
    }), document.addEventListener("mouseup", () => {
      I = false;
    });
  }
  let N = false;
  const $ = 0.9;
  function O(I, x) {
    var _a, _b, _c, _d;
    if (!I.frequencies || I.frequencies.length === 0) {
      g.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const G = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], B = [0, 0, 0, 0, 0, 0], M = I.frequencies.length;
    let i = -1, A = -1, b = -1, z = 0, H = 0;
    {
      const o = [0, 0, 0, 0, 0, 0];
      for (let p = 0; p < M; p++) {
        const C = ((_a = I.massParticipation) == null ? void 0 : _a[p]) || [0, 0, 0, 0, 0, 0];
        for (let S = 0; S < 6; S++) o[S] += C[S];
        i < 0 && o[0] >= $ && (i = p + 1), A < 0 && o[1] >= $ && (A = p + 1), b < 0 && o[0] >= $ && o[1] >= $ && (b = p + 1);
      }
      z = o[0], H = o[1];
    }
    let V = -1, w = -1, _ = -1;
    const L = 0.1;
    for (let o = 0; o < M; o++) {
      const p = ((_b = I.massParticipation) == null ? void 0 : _b[o]) || [0, 0, 0, 0, 0, 0];
      V < 0 && p[0] > L && (V = o + 1), w < 0 && p[1] > L && (w = o + 1), _ < 0 && p[5] > L && (_ = o + 1);
    }
    const f = b > 0 ? `<span style="color:#0f0">\u2713 ASCE 7-22 \xA712.9.1.1 \u2014 90 % alcanzado en X e Y al modo ${b} de ${M}</span>` : i > 0 && A < 0 ? `<span style="color:#fa0">\u26A0 X cumple en modo ${i}, Y todav\xEDa en ${(H * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : A > 0 && i < 0 ? `<span style="color:#fa0">\u26A0 Y cumple en modo ${A}, X todav\xEDa en ${(z * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : `<span style="color:#f44">\u2717 ASCE 7-22 NO cumplido en ${M} modos \xB7 \u03A3Ux=${(z * 100).toFixed(1)} % \xB7 \u03A3Uy=${(H * 100).toFixed(1)} % \u2014 aumentar nModes</span>`, h = (() => {
      const o = (p, C) => {
        var _a2;
        if (p < 0) return `<span style="color:#f44">${C}: no encontrado en ${M} modos</span>`;
        const S = ((_a2 = I.massParticipation) == null ? void 0 : _a2[p - 1]) || [0, 0, 0, 0, 0, 0], R = C === "Ux" ? 0 : C === "Uy" ? 1 : 5, y = I.frequencies[p - 1] > 0 ? 1 / I.frequencies[p - 1] : 0;
        return `<span style="color:#0f0">${C}: modo ${p}, T=${y.toFixed(3)} s, MPF=${(S[R] * 100).toFixed(1)} %</span>`;
      };
      return `<div style="margin:4px 0; padding:4px 6px; background:rgba(0,255,255,0.05); border-left:2px solid #0ff; font-size:11px;">
  \u{1F3AF} <b>Modos s\xEDsmicos principales</b> (ASCE 7-22 \xA712.9.1):<br>
  ${o(V, "Ux")} \xB7 ${o(w, "Uy")} \xB7 ${o(_, "Rz")}
</div>`;
    })();
    let c = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:move; user-select:none;" title="Arrastra para mover">
  <b style="color:#ff0">\u2725 \u26A1 MODAL ANALYSIS \u2014 ${x.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
    if (c += '<div id="modal-body" style="padding:0 12px 10px 12px;">', c += `<div style="padding:6px 0; font-weight:bold; font-size:13px;">${f}</div>`, c += h, x.properties) for (const o of x.properties) c += `<span style="color:#888">${o}</span>
`;
    c += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const o of G) c += `<th style="padding:2px 5px">${o}</th>`;
    c += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let o = 0; o < 6; o++) B[o] = 0;
    if (I.frequencies.forEach((o, p) => {
      var _a2;
      const C = o > 0 ? 1 / o : 0, S = o * 2 * Math.PI, R = ((_a2 = I.massParticipation) == null ? void 0 : _a2[p]) || [0, 0, 0, 0, 0, 0];
      for (let j = 0; j < 6; j++) B[j] += R[j];
      let y = 0, X = R[0];
      for (let j = 1; j < 6; j++) R[j] > X && (X = R[j], y = j);
      const F = X < 0.05 ? "\u2014" : `${G[y]} (${(X * 100).toFixed(0)} %)`, W = y === 0 || y === 1 ? "#0f0" : y === 5 ? "#0ff" : y === 2 ? "#fa0" : "#888", Q = p + 1 === i, tt = p + 1 === A, st = p + 1 === b;
      c += `<tr style="border-bottom:1px solid #fff1; ${st ? "background:rgba(0,255,0,0.12);" : Q || tt ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${p + 1}${st ? " \u2605" : ""}</td>
  <td style="padding:2px 6px; text-align:right">${o.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${C.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${S.toFixed(2)}</td>`;
      for (let j = 0; j < 6; j++) {
        const pt = (R[j] * 100).toFixed(1), et = R[j] > 0.5 ? "#f00" : R[j] > 0.1 ? "#ff0" : "#0f0";
        c += `<td style="padding:2px 5px; text-align:right; color:${et}">${pt}%</td>`;
      }
      const q = B[0] >= $ ? "#0f0" : "#0ff", it = B[1] >= $ ? "#0f0" : "#0ff";
      c += `<td style="padding:2px 5px; text-align:right; color:${q}">${(B[0] * 100).toFixed(1)}%${Q ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${it}">${(B[1] * 100).toFixed(1)}%${tt ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(B[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${W}">${F}</td></tr>`;
    }), c += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, c += "</div>", g.innerHTML = c, N) {
      const o = g.querySelector("#modal-body"), p = g.querySelector("#modal-minimize");
      o && (o.style.display = "none"), p && (p.textContent = "\u25A2", p.title = "Restaurar");
    }
    (_c = g.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      N = !N;
      const o = g.querySelector("#modal-body"), p = g.querySelector("#modal-minimize");
      N ? (o.style.display = "none", p.textContent = "\u25A2", p.title = "Restaurar") : (o.style.display = "block", p.textContent = "\u25AC", p.title = "Minimizar");
    }), (_d = g.querySelector("#modal-copy")) == null ? void 0 : _d.addEventListener("click", () => {
      const o = [];
      o.push(`Modal Analysis \u2014 ${x.title}`), o.push(f.replace(/<[^>]+>/g, ""));
      const p = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${G.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      o.push(p), o.push("-".repeat(p.length));
      const C = [0, 0, 0, 0, 0, 0];
      I.frequencies.forEach((R, y) => {
        var _a2;
        const X = R > 0 ? 1 / R : 0, F = R * 2 * Math.PI, W = ((_a2 = I.massParticipation) == null ? void 0 : _a2[y]) || [0, 0, 0, 0, 0, 0];
        for (let q = 0; q < 6; q++) C[q] += W[q];
        let Q = 0, tt = W[0];
        for (let q = 1; q < 6; q++) W[q] > tt && (tt = W[q], Q = q);
        const st = tt < 0.05 ? "\u2014" : `${G[Q]} (${(tt * 100).toFixed(0)}%)`, ct = W.map((q) => ((q * 100).toFixed(1) + "%").padStart(6)).join(" ");
        o.push(`${String(y + 1).padStart(4)}  ${R.toFixed(4).padStart(9)}  ${X.toFixed(4).padStart(9)}  ${F.toFixed(2).padStart(9)}  ${ct}  ${(C[0] * 100).toFixed(1).padStart(5)}%  ${(C[1] * 100).toFixed(1).padStart(5)}%  ${(C[5] * 100).toFixed(1).padStart(5)}%  ${st}`);
      }), navigator.clipboard.writeText(o.join(`
`));
      const S = g.querySelector("#modal-copy");
      S.textContent = "\u2713", setTimeout(() => S.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: g, render: O };
}
function Rt(g) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  const N = g.split(/\r?\n/), $ = { force: "TONF", length: "M" }, O = [], I = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), B = [], M = [], i = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), b = [], z = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), V = [], w = /* @__PURE__ */ new Map(), _ = [];
  let L = "", f = "";
  const h = /* @__PURE__ */ new Map();
  for (const s of N) {
    const a = s.trim();
    if (!a || a.startsWith("$")) {
      a.startsWith("$ ") && (f = a.substring(2).trim());
      continue;
    }
    if (f && (h.has(f) || h.set(f, []), h.get(f).push(s)), f === "CONTROLS") {
      const t = a.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
      t && ($.force = t[1], $.length = t[2]);
      const l = a.match(/TITLE2\s+"([^"]+)"/);
      l && (L = l[1]);
    }
    if (f === "STORIES - IN SEQUENCE FROM TOP") {
      const t = a.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
      if (t) {
        const l = t[1], e = t[2] ? parseFloat(t[2]) : 0, r = t[3] ? parseFloat(t[3]) : void 0;
        O.push({ name: l, height: e, elev: r ?? 0 });
      }
    }
    if (f === "MATERIAL PROPERTIES") {
      const t = a.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
      if (t) {
        const l = t[1];
        I.has(l) || I.set(l, { type: t[2] || "", E: 0, G: 0, nu: 0 });
        const e = I.get(l);
        t[2] && (e.type = t[2]);
        const r = a.match(/\bE\s+([\d.eE+-]+)/);
        r && (e.E = parseFloat(r[1]));
        const T = a.match(/\bU\s+([\d.eE+-]+)/);
        T && (e.nu = parseFloat(T[1]), e.G = e.E / (2 * (1 + e.nu)));
        const m = a.match(/\bFY\s+([\d.eE+-]+)/);
        m && (e.fy = parseFloat(m[1]));
        const P = a.match(/\bFC\s+([\d.eE+-]+)/);
        P && (e.fc = parseFloat(P[1]));
        const k = a.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
        k && (e.density = parseFloat(k[1]));
      }
    }
    if (f === "FRAME SECTIONS") {
      const t = a.match(/FRAMESECTION\s+"([^"]+)"/);
      if (t) {
        const l = t[1];
        x.has(l) || x.set(l, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
        const e = x.get(l), r = a.match(/MATERIAL\s+"([^"]+)"/);
        r && (e.material = r[1]);
        const T = a.match(/SHAPE\s+"([^"]+)"/);
        T && (e.shape = T[1]);
        const m = a.match(/\bD\s+([\d.eE+-]+)/);
        m && (e.D = parseFloat(m[1]));
        const P = a.match(/\bB\s+([\d.eE+-]+)/);
        P && (e.B = parseFloat(P[1]));
        const k = a.match(/\bTF\s+([\d.eE+-]+)/);
        k && (e.TF = parseFloat(k[1]));
        const Y = a.match(/\bTW\s+([\d.eE+-]+)/);
        Y && (e.TW = parseFloat(Y[1]));
        const v = a.match(/\bR\s+([\d.eE+-]+)/);
        v && (e.R = parseFloat(v[1]));
        const Z = a.match(/FILLMATERIAL\s+"([^"]+)"/);
        Z && (e.fillMaterial = Z[1]);
        const K = a.match(/I2MOD\s+([\d.eE+-]+)/);
        K && (e.modI2 = parseFloat(K[1]));
        const ot = a.match(/I3MOD\s+([\d.eE+-]+)/);
        ot && (e.modI3 = parseFloat(ot[1]));
      }
    }
    if (f === "POINT COORDINATES") {
      const t = a.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
      t && G.set(t[1], [parseFloat(t[2]), parseFloat(t[3])]);
    }
    if (f === "LINE CONNECTIVITIES") {
      const t = a.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
      t && B.push({ name: t[1], type: t[2], pt1: t[3], pt2: t[4], nStories: parseInt(t[5]) });
    }
    if (f === "POINT ASSIGNS") {
      const t = a.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
      t && i.set(`${t[1]}@${t[2]}`, t[3].split(/\s+/));
    }
    if (f === "LINE ASSIGNS") {
      const t = a.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
      if (t) {
        const l = { story: t[2], section: t[3], rigidZone: 0, releases: [], angle: 0 }, e = a.match(/RIGIDZONE\s+([\d.eE+-]+)/);
        e && (l.rigidZone = parseFloat(e[1]));
        const r = a.match(/RELEASE\s+"([^"]+)"/);
        r && (l.releases = r[1].split(/\s+/));
        const T = a.match(/ANG\s+([-\d.eE+]+)/);
        T && (l.angle = parseFloat(T[1])), A.set(`${t[1]}@${t[2]}`, l);
      }
    }
    if (f === "GRIDS") {
      const t = a.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
      t && _.push({ label: t[1], dir: t[2], coord: parseFloat(t[3]) });
    }
    if (f === "FRAME OBJECT LOADS") {
      const t = a.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      t && b.push({ line: t[1], story: t[2], type: t[3], dir: t[4], lc: t[5], val: parseFloat(t[6]) });
    }
    if (f === "AREA CONNECTIVITIES") {
      const t = a.match(/AREA\s+"([^"]+)"\s+(?:FLOOR|WALL|RAMP|PANEL)?\s*\d+\s+(.+)/);
      if (t) {
        const l = ((_a = t[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((e) => e.replace(/"/g, ""))) || [];
        M.push({ name: t[1], pts: l, nStories: 0 });
      }
    }
    if (f === "WALL/SLAB/DECK SECTIONS" || f === "SLAB PROPERTIES" || f === "WALL PROPERTIES" || f === "DECK PROPERTIES") {
      const t = a.match(/SHELLPROP\s+"([^"]+)"\s+(.+)/);
      if (t) {
        const l = t[1], e = (_b = t[2].match(/SLABTHICKNESS\s+([\d.eE+-]+)/)) == null ? void 0 : _b[1], r = (_c = t[2].match(/WALLTHICKNESS\s+([\d.eE+-]+)/)) == null ? void 0 : _c[1], T = (_d = t[2].match(/MATERIAL\s+"([^"]+)"/)) == null ? void 0 : _d[1], m = (_e = t[2].match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _e[1];
        if (e || r) {
          const P = H.get(l) || { material: "", modelingType: "ShellThin" };
          H.set(l, { material: T ?? P.material, modelingType: m ?? P.modelingType, thickness: parseFloat(e ?? r ?? "0") });
        }
      }
    }
    if (f === "AREA ASSIGNS") {
      const t = a.match(/AREAASSIGN\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/);
      if (t) {
        const l = t[1], e = t[2], r = t[3], T = ((_f = r.match(/SECTION\s+"([^"]+)"/)) == null ? void 0 : _f[1]) ?? "", m = ((_g = r.match(/CARDINALPOINT\s+"([^"]+)"/)) == null ? void 0 : _g[1]) ?? "CENTROID", P = ((_h = r.match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _h[1]) ?? "ShellThin";
        z.set(`${l}@${e}`, { story: e, section: T, modelingType: P, cardinalPoint: m });
      }
    }
    if (f === "SHELL UNIFORM LOAD SETS") {
      const t = a.match(/SHELLUNIFORMLOADSET\s+"([^"]+)"\s+LOADPAT\s+"([^"]+)"\s+VALUE\s+([\d.eE+-]+)/);
      if (t) {
        const l = t[1], e = t[2], r = parseFloat(t[3]);
        w.has(l) || w.set(l, []), w.get(l).push({ loadpat: e, value: r });
      }
    }
    if (f === "SHELL OBJECT LOADS") {
      const t = a.match(/AREALOAD\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/);
      if (t) {
        const l = t[1], e = t[2], r = t[3], T = ((_i = r.match(/TYPE\s+"([^"]+)"/)) == null ? void 0 : _i[1]) ?? "";
        if (T === "UNIFLOADSET") {
          const m = ((_j = r.match(/UNIFLOADSET"\s+"([^"]+)"/)) == null ? void 0 : _j[1]) ?? ((_k = r.match(/"([^"]+)"\s*$/)) == null ? void 0 : _k[1]) ?? "";
          V.push({ area: l, story: e, type: "UNIFLOADSET", dir: "GRAV", lc: m, val: 0 });
        } else {
          const m = ((_l = r.match(/DIR\s+"([^"]+)"/)) == null ? void 0 : _l[1]) ?? "GRAV", P = ((_m = r.match(/LC\s+"([^"]+)"/)) == null ? void 0 : _m[1]) ?? "", k = parseFloat(((_n = r.match(/FVAL\s+([\d.eE+-]+)/)) == null ? void 0 : _n[1]) ?? "0");
          V.push({ area: l, story: e, type: T, dir: m, lc: P, val: k });
        }
      }
    }
  }
  const c = [];
  for (const s of V) if (s.type === "UNIFLOADSET") {
    const a = w.get(s.lc);
    if (a) for (const t of a) c.push({ area: s.area, story: s.story, type: "UNIFF", dir: s.dir, lc: t.loadpat, val: t.value });
  } else c.push(s);
  V.length = 0, V.push(...c);
  const o = /* @__PURE__ */ new Map();
  if (O.length > 0) {
    const s = O.length - 1;
    o.set(O[s].name, O[s].elev);
    for (let a = s - 1; a >= 0; a--) {
      const l = o.get(O[a + 1].name) + O[a].height;
      O[a].elev = l, o.set(O[a].name, l);
    }
  }
  const p = [], C = [], S = /* @__PURE__ */ new Map(), R = (s, a) => `${s}@${a}`, y = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Map();
  for (const s of B) X.set(s.name, s);
  for (const s of B) for (const [a, t] of A) {
    if (!a.startsWith(s.name + "@")) continue;
    const l = t.story, e = O.findIndex((r) => r.name === l);
    if (!(e < 0)) if (s.type === "COLUMN" || s.type === "BRACE") {
      y.add(R(s.pt2, l));
      const r = Math.max(s.nStories, 1), T = Math.min(e + r, O.length - 1);
      y.add(R(s.pt1, O[T].name));
    } else y.add(R(s.pt1, l)), y.add(R(s.pt2, l));
  }
  for (const [s] of i) y.add(s);
  for (const s of M) for (const [a, t] of z) if (a.startsWith(s.name + "@")) for (const l of s.pts) y.add(R(l, t.story));
  for (const s of y) {
    const [a, t] = s.split("@"), l = G.get(a), e = o.get(t);
    l === void 0 || e === void 0 || (p.push([l[0], l[1], e]), C.push(s), S.set(s, p.length - 1));
  }
  const F = [], W = [], Q = [], tt = [], st = /* @__PURE__ */ new Map();
  for (const s of B) for (const [a, t] of A) {
    if (!a.startsWith(s.name + "@")) continue;
    const l = t.story, e = O.findIndex((Y) => Y.name === l);
    if (e < 0) continue;
    let r, T;
    if (s.type === "COLUMN" || s.type === "BRACE") {
      const Y = Math.max(s.nStories, 1), v = Math.min(e + Y, O.length - 1);
      r = R(s.pt1, O[v].name), T = R(s.pt2, l);
    } else r = R(s.pt1, l), T = R(s.pt2, l);
    const m = S.get(r), P = S.get(T);
    if (m === void 0 || P === void 0 || m === P) continue;
    const k = F.length;
    if (F.push([m, P]), W.push(s.name), Q.push(s.type), tt.push(l), st.set(k, t.section), t.rigidZone > 0 && ut.set(k, [t.rigidZone, t.rigidZone]), t.releases.length > 0) {
      const Y = new Array(12).fill(false), v = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const Z of t.releases) {
        const K = v[Z];
        K !== void 0 && (Y[K] = true);
      }
      ft.set(k, Y);
    }
  }
  const ct = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map();
  for (const s of M) for (const [a, t] of z) {
    if (!a.startsWith(s.name + "@")) continue;
    const l = [];
    for (const r of s.pts) {
      const T = R(r, t.story), m = S.get(T);
      if (m === void 0) {
        l.length = 0;
        break;
      }
      l.push(m);
    }
    if (l.length !== 4) continue;
    const e = F.length;
    F.push(l), W.push(s.name), Q.push("FLOOR"), tt.push(t.story), ct.set(e, t.section), q.set(e, t.cardinalPoint);
  }
  const it = /* @__PURE__ */ new Map();
  for (const s of V) if (s.type === "UNIFF") for (let a = 0; a < F.length; a++) {
    if (W[a] !== s.area || tt[a] !== s.story) continue;
    const t = F[a];
    if (t.length !== 4) continue;
    const l = t.map((P) => p[P]), e = [l[1][0] - l[0][0], l[1][1] - l[0][1]], r = [l[3][0] - l[0][0], l[3][1] - l[0][1]], T = Math.abs(e[0] * r[1] - e[1] * r[0]), m = -s.val * T / 4;
    for (const P of t) {
      const k = it.get(P) || [0, 0, 0, 0, 0, 0];
      k[2] += m, it.set(P, k);
    }
  }
  const j = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map();
  for (const [s, a] of st) {
    const t = x.get(a);
    if (!t) continue;
    const l = I.get(t.material);
    l && (j.set(s, l.E), pt.set(s, l.G));
    const e = t.D, r = t.B, T = t.TF, m = t.TW;
    let P = 0, k = 0, Y = 0, v = 0, Z = 0, K = 0, ot = "rect";
    switch (t.shape) {
      case "Concrete Rectangular":
        P = e * r, k = r * e ** 3 / 12, Y = e * r ** 3 / 12, v = r * e ** 3 * (1 / 3 - 0.21 * (e / r) * (1 - e ** 4 / (12 * r ** 4))), Z = K = 5 / 6 * P, ot = "rect";
        break;
      case "Concrete Circle":
        P = Math.PI * e ** 2 / 4, k = Y = Math.PI * e ** 4 / 64, v = Math.PI * e ** 4 / 32, Z = K = 0.9 * P, ot = "circ";
        break;
      case "Steel I/Wide Flange":
        P = 2 * r * T + (e - 2 * T) * m, k = (r * e ** 3 - (r - m) * (e - 2 * T) ** 3) / 12, Y = (2 * T * r ** 3 + (e - 2 * T) * m ** 3) / 12, v = (2 * r * T ** 3 + (e - 2 * T) * m ** 3) / 3, Z = (e - 2 * T) * m, K = 2 * r * T * 5 / 6, ot = "I";
        break;
      case "Steel Tube":
        P = e * r - (e - 2 * m) * (r - 2 * m), k = (r * e ** 3 - (r - 2 * m) * (e - 2 * m) ** 3) / 12, Y = (e * r ** 3 - (e - 2 * m) * (r - 2 * m) ** 3) / 12, v = 2 * m * (e - m) * (r - m) * ((e - m) * (r - m)) / (e - m + (r - m)), Z = 2 * e * m, K = 2 * r * m, ot = "HSS";
        break;
      case "Filled Steel Tube":
        P = e * r, k = r * e ** 3 / 12, Y = e * r ** 3 / 12, v = 2 * m * (e - m) * (r - m) * ((e - m) * (r - m)) / (e - m + (r - m)), Z = 2 * e * m + 5 / 6 * (e - 2 * m) * (r - 2 * m), K = 2 * r * m + 5 / 6 * (e - 2 * m) * (r - 2 * m), ot = "CFT";
        break;
      case "Steel Angle": {
        const nt = T || m;
        P = nt * (e + r - nt), k = nt * (e ** 3 + r * nt ** 2 + nt ** 2 * (e - nt)) / 12, Y = nt * (r ** 3 + e * nt ** 2 + nt ** 2 * (r - nt)) / 12, v = (e + r - nt) * nt ** 3 / 3, Z = e * nt, K = r * nt, ot = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        P = 2 * r * T + (e - 2 * T) * m, k = (m * e ** 3 + 2 * r * T * (e - T) ** 2) / 12, Y = (2 * T * r ** 3 + (e - 2 * T) * m ** 3) / 12, v = (2 * r * T ** 3 + (e - 2 * T) * m ** 3) / 3, Z = (e - 2 * T) * m, K = 2 * r * T * 5 / 6, ot = t.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        P = 2 * (2 * r * T + (e - 2 * T) * m), k = 2 * (m * e ** 3 + 2 * r * T * (e - T) ** 2) / 12, Y = 2 * (2 * T * r ** 3 + (e - 2 * T) * m ** 3) / 12, v = 2 * (2 * r * T ** 3 + (e - 2 * T) * m ** 3) / 3, Z = 2 * (e - 2 * T) * m, K = 4 * r * T * 5 / 6, ot = "2C";
        break;
      default:
        e > 0 && r > 0 && (P = e * r, k = r * e ** 3 / 12, Y = e * r ** 3 / 12, v = Math.min(e, r) * Math.max(e, r) ** 3 / 3 * 0.3, Z = K = 5 / 6 * P);
        break;
    }
    t.modI2 && (Y *= t.modI2), t.modI3 && (k *= t.modI3), et.set(s, P), Et.set(s, k), ht.set(s, Y), lt.set(s, v), Z > 0 && St.set(s, Z), K > 0 && dt.set(s, K), rt.set(s, { type: ot, b: r || void 0, h: e || void 0, d: ot === "circ" || ot === "pipe" ? e : void 0, tw: m || void 0, tf: T || void 0, r: t.R, name: a });
  }
  const At = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  for (const [s, a] of ct) {
    const t = H.get(a);
    if (!t) continue;
    At.set(s, t.thickness);
    const l = I.get(t.material);
    l && (j.set(s, l.E), pt.set(s, l.G), mt.set(s, l.nu), l.density !== void 0 && n.set(s, l.density)), at.set(s, t.modelingType === "ShellThin" ? 1 : 0);
  }
  const E = /* @__PURE__ */ new Map();
  for (const [s, a] of i) {
    const t = S.get(s);
    if (t === void 0) continue;
    const l = [false, false, false, false, false, false];
    for (const e of a) e === "UX" && (l[0] = true), e === "UY" && (l[1] = true), e === "UZ" && (l[2] = true), e === "RX" && (l[3] = true), e === "RY" && (l[4] = true), e === "RZ" && (l[5] = true);
    E.set(t, l);
  }
  const u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
  for (let s = 0; s < W.length; s++) d.set(`${W[s]}@${tt[s]}`, s);
  for (const s of b) {
    const a = d.get(`${s.line}@${s.story}`);
    if (a === void 0) continue;
    const [t, l] = F[a], e = p[t], r = p[l], T = Math.sqrt((r[0] - e[0]) ** 2 + (r[1] - e[1]) ** 2 + (r[2] - e[2]) ** 2);
    if (T < 1e-10) continue;
    const m = s.val * T / 2;
    let P = 0, k = 0, Y = 0;
    s.dir === "GRAV" || s.dir === "GRAVITY" ? Y = -m : s.dir === "X" ? P = m : s.dir === "Y" ? k = m : s.dir === "Z" && (Y = -m);
    for (const v of [t, l]) {
      const Z = u.get(v) || [0, 0, 0, 0, 0, 0];
      Z[0] += P, Z[1] += k, Z[2] += Y, u.set(v, Z);
    }
  }
  const D = /* @__PURE__ */ new Map();
  for (const [s, a] of st) {
    const t = x.get(a);
    if (!t) continue;
    const l = I.get(t.material);
    (l == null ? void 0 : l.density) && D.set(s, l.density);
  }
  for (const [s, a] of n) D.set(s, a);
  for (const [s, a] of it) {
    const t = u.get(s) || [0, 0, 0, 0, 0, 0];
    u.set(s, [t[0] + a[0], t[1] + a[1], t[2] + a[2], t[3] + a[3], t[4] + a[4], t[5] + a[5]]);
  }
  return { units: $, stories: O.reverse(), materials: I, frameSections: x, nodes: p, nodeNames: C, nodeNameToIdx: S, elements: F, elementNames: W, elementTypes: Q, elementStories: tt, elementSections: st, nodeInputs: { supports: E, loads: u }, elementInputs: { elasticities: j, shearModuli: pt, areas: et, momentsOfInertiaZ: Et, momentsOfInertiaY: ht, torsionalConstants: lt, shearAreasY: St, shearAreasZ: dt, rigidOffsets: ut, momentReleases: ft, densities: D, sectionShapes: rt, thicknesses: At, poissonsRatios: mt, plateFormulations: at }, sectionShapes: rt, grids: _, info: { nNodes: p.length, nFrames: F.length, nAreas: M.length, title: L }, rawSections: h };
}
function U(g) {
  return g && parseFloat(g) || 0;
}
function It(g) {
  const N = /* @__PURE__ */ new Map(), $ = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let O;
  for (; (O = $.exec(g)) !== null; ) N.set(O[1], O[2] !== void 0 ? O[2] : O[3]);
  return N;
}
function yt(g) {
  const N = g.split(/\r?\n/);
  return N.some((O) => O.trim().startsWith("TABLE:")) ? gt(N) : Nt(N);
}
function gt(g) {
  var _a, _b, _c, _d, _e, _f;
  const N = [];
  let $ = "";
  for (const _ of g) {
    const L = _.trimEnd();
    L.endsWith("_") ? $ += L.slice(0, -1) + " " : ($ += L, N.push($), $ = "");
  }
  $ && N.push($);
  const O = { force: "KN", length: "m" };
  let I = "UX,UY,UZ,RX,RY,RZ";
  const x = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), i = [], A = [], b = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), V = [];
  let w = "";
  for (const _ of N) {
    const L = _.trim();
    if (!L || L.startsWith(";") || L.startsWith("File ")) continue;
    if (L.startsWith("TABLE:")) {
      const h = L.match(/TABLE:\s+"(.+?)"/);
      w = h ? h[1].toUpperCase() : "";
      continue;
    }
    if (L === "END TABLE DATA") {
      w = "";
      continue;
    }
    const f = It(L);
    switch (w) {
      case "PROGRAM CONTROL": {
        const h = f.get("CurrUnits");
        if (h) {
          const c = h.split(",").map((o) => o.trim());
          c[0] && (O.force = c[0]), c[1] && (O.length = c[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const h = f.get("Material");
        h && !x.has(h) && x.set(h, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const h = f.get("Material");
        if (h) {
          const c = x.get(h) || { E: 0, nu: 0, G: 0 };
          c.E = U(f.get("E1")), c.G = U(f.get("G12")), c.nu = U(f.get("U12")), c.density = U(f.get("UnitMass")), x.set(h, c);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const h = f.get("Material");
        h && x.has(h) && (x.get(h).fy = U(f.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const h = f.get("SectionName");
        h && G.set(h, { material: f.get("Material") || "", shape: f.get("Shape") || "Rectangular", D: U(f.get("t3")), B: U(f.get("t2")), TF: U(f.get("tf")), TW: U(f.get("tw")), A: U(f.get("Area")), Iz: U(f.get("I33")), Iy: U(f.get("I22")), J: U(f.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const h = f.get("Section");
        h && B.set(h, { material: f.get("Material") || "", type: f.get("Type") || "Shell", thickness: U(f.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const h = f.get("Joint");
        if (h) {
          const c = U(f.get("XorR")), o = U(f.get("Y")), p = U(f.get("Z"));
          M.set(h, [c, o, p]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const h = f.get("Frame"), c = f.get("JointI"), o = f.get("JointJ");
        h && c && o && i.push({ name: h, j1: c, j2: o });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const h = f.get("Area");
        if (h) {
          const c = parseInt(f.get("NumJoints") || "4"), o = [];
          for (let p = 1; p <= c; p++) {
            const C = f.get(`Joint${p}`);
            C && o.push(C);
          }
          o.length >= 3 && A.push({ name: h, joints: o });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const h = f.get("Joint");
        if (h) {
          const c = [((_a = f.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = f.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = f.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = f.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = f.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = f.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          b.set(h, c);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const h = f.get("Frame"), c = f.get("AnalSect");
        h && c && z.set(h, c);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const h = f.get("Area"), c = f.get("Section");
        h && c && H.set(h, c);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const h = f.get("Joint");
        h && V.push({ joint: h, fx: U(f.get("F1")), fy: U(f.get("F2")), fz: U(f.get("F3")), mx: U(f.get("M1")), my: U(f.get("M2")), mz: U(f.get("M3")) });
        break;
      }
    }
  }
  return Mt(O, I, x, G, B, M, i, A, b, z, H, V);
}
function Nt(g) {
  const N = { force: "KN", length: "m" };
  let $ = "UX,UY,UZ,RX,RY,RZ";
  const O = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), B = [], M = [], i = /* @__PURE__ */ new Map(), A = [];
  let b = "", z = "";
  for (const w of g) {
    const _ = w.trim();
    if (!_ || _.startsWith(";")) continue;
    if (!w.startsWith(" ") && !w.startsWith("	")) {
      const h = _.toUpperCase();
      if (h === "END") break;
      h.startsWith("SHELL SECTION") ? b = "SHELL SECTION" : h.startsWith("FRAME SECTION") ? b = "FRAME SECTION" : b = h.split(/\s+/)[0];
      continue;
    }
    const L = It(_), f = _.split(/\s+/);
    switch (b) {
      case "SYSTEM": {
        const h = L.get("DOF");
        h && ($ = h);
        const c = L.get("LENGTH");
        c && (N.length = c);
        const o = L.get("FORCE");
        o && (N.force = o);
        break;
      }
      case "JOINT": {
        const h = f[0];
        G.set(h, [U(L.get("X")), U(L.get("Y")), U(L.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const h = L.get("ADD"), c = L.get("DOF");
        if (h && c) {
          const o = c.split(","), p = [false, false, false, false, false, false];
          for (const C of o) {
            const S = C.toUpperCase();
            (S === "UX" || S === "U1") && (p[0] = true), (S === "UY" || S === "U2") && (p[1] = true), (S === "UZ" || S === "U3") && (p[2] = true), (S === "RX" || S === "R1") && (p[3] = true), (S === "RY" || S === "R2") && (p[4] = true), (S === "RZ" || S === "R3") && (p[5] = true);
          }
          i.set(h, p);
        }
        break;
      }
      case "MATERIAL": {
        const h = L.get("NAME");
        if (h) z = h, O.set(h, { E: 0, nu: 0, G: 0 });
        else if (z) {
          const c = O.get(z), o = L.get("E");
          o && (c.E = U(o));
          const p = L.get("U");
          p && (c.nu = U(p)), c.G = c.E / (2 * (1 + c.nu));
          const C = L.get("M");
          C && (c.density = U(C));
        }
        break;
      }
      case "SHELL": {
        const h = f[0], c = L.get("J");
        L.get("SEC"), c && M.push({ name: h, joints: c.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const h = L.get("NAME");
        h && x.set(h, { material: L.get("MAT") || "", type: L.get("TYPE") || "Shell", thickness: U(L.get("TH")) });
        break;
      }
      case "FRAME": {
        const h = f[0], c = L.get("J");
        if (c) {
          const o = c.split(",");
          o.length >= 2 && B.push({ name: h, j1: o[0], j2: o[1] });
        }
        break;
      }
      case "LOAD": {
        const h = L.get("ADD");
        h && A.push({ joint: h, fx: U(L.get("UX")), fy: U(L.get("UY")), fz: U(L.get("UZ")), mx: U(L.get("MX")), my: U(L.get("MY")), mz: U(L.get("MZ")) });
        break;
      }
    }
  }
  return Mt(N, $, O, I, x, G, B, M, i, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), A);
}
function Mt(g, N, $, O, I, x, G, B, M, i, A, b) {
  var _a;
  const z = [], H = /* @__PURE__ */ new Map(), V = [];
  for (const [S, R] of x) H.set(S, V.length), z.push(S), V.push(R);
  const w = [], _ = [], L = /* @__PURE__ */ new Map();
  for (const S of G) {
    const R = H.get(S.j1), y = H.get(S.j2);
    if (R !== void 0 && y !== void 0) {
      const X = w.length;
      w.push([R, y]), _.push(S.name);
      const F = i.get(S.name);
      F && L.set(X, F);
    }
  }
  const f = w.length;
  for (const S of B) {
    const R = S.joints.map((y) => H.get(y)).filter((y) => y !== void 0);
    if (R.length >= 3) {
      const y = w.length;
      w.push(R), _.push(S.name);
      const X = A.get(S.name);
      X && L.set(y, X);
    }
  }
  const h = w.length - f, c = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, o = /* @__PURE__ */ new Map(), p = $.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let S = 0; S < w.length; S++) {
    const R = L.get(S), y = R ? O.get(R) : null, X = R ? I.get(R) : null;
    if (y || w[S].length === 2) {
      const F = y || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, W = $.get(F.material) || p, Q = W.E || p.E, tt = W.nu || 0.3, st = W.G || Q / (2 * (1 + tt));
      c.elasticities.set(S, Q), c.shearModuli.set(S, st), c.areas.set(S, F.A || F.D * F.B), c.momentsOfInertiaZ.set(S, F.Iz || F.B * F.D ** 3 / 12), c.momentsOfInertiaY.set(S, F.Iy || F.D * F.B ** 3 / 12), c.torsionalConstants.set(S, F.J || 0), c.densities.set(S, W.density || 0), ((_a = F.shape) == null ? void 0 : _a.includes("Wide Flange")) || F.shape === "I" ? o.set(S, { type: "I", b: F.B, h: F.D, name: R || "I-section" }) : o.set(S, { type: "rect", b: F.B, h: F.D });
    } else if (X) {
      const F = $.get(X.material) || p, W = F.E || p.E, Q = F.nu || 0.2, tt = F.G || W / (2 * (1 + Q));
      c.elasticities.set(S, W), c.shearModuli.set(S, tt), c.thicknesses.set(S, X.thickness), c.poissonsRatios.set(S, Q), c.densities.set(S, F.density || 0);
    }
  }
  const C = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [S, R] of M) {
    const y = H.get(S);
    y !== void 0 && C.supports.set(y, R);
  }
  for (const S of b) {
    const R = H.get(S.joint);
    if (R !== void 0) {
      const y = C.forces.get(R) || [0, 0, 0, 0, 0, 0];
      y[0] += S.fx, y[1] += S.fy, y[2] += S.fz, y[3] += S.mx, y[4] += S.my, y[5] += S.mz, C.forces.set(R, y);
    }
  }
  return { units: g, dof: N, materials: $, frameSections: O, shellSections: I, nodes: V, nodeNames: z, nodeNameToIdx: H, elements: w, elementNames: _, elementSections: L, nodeInputs: C, elementInputs: c, sectionShapes: o, info: { nNodes: V.length, nFrames: f, nShells: h, title: `SAP2000 (${f} frames, ${h} shells)` } };
}
function Ct(g) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: N, elements: $, nodeInputs: O, elementInputs: I } = g, x = g.units || { force: "KN", length: "m" }, G = g.title || "Awatif Model", B = [], M = (c) => B.push(c), i = () => B.push(" ");
  M(`File ${G}.$2k was saved on m/d/yy at h:mm:ss`), i(), M('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), M("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), i();
  const A = [], b = [];
  if ($.forEach((c, o) => {
    c.length === 2 ? A.push(o) : b.push(o);
  }), A.length > 0) {
    M('TABLE:  "CONNECTIVITY - FRAME"');
    for (const c of A) {
      const o = $[c];
      M(`   Frame=${c + 1}   JointI=${o[0] + 1}   JointJ=${o[1] + 1}   IsCurved=No`);
    }
    i();
  }
  if (b.length > 0) {
    M('TABLE:  "CONNECTIVITY - AREA"');
    for (const c of b) {
      const o = $[c], p = o.map((C, S) => `Joint${S + 1}=${C + 1}`).join("   ");
      M(`   Area=${c + 1}   NumJoints=${o.length}   ${p}`);
    }
    i();
  }
  M('TABLE:  "COORDINATE SYSTEMS"'), M("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), i(), M('TABLE:  "DATABASE FORMAT TYPES"'), M("   UnitsCurr=Yes   OverrideE=No"), i();
  const z = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map();
  for (const c of A) {
    const o = ((_a = I.areas) == null ? void 0 : _a.get(c)) || 0, p = ((_b = I.momentsOfInertiaZ) == null ? void 0 : _b.get(c)) || 0, C = ((_c = I.momentsOfInertiaY) == null ? void 0 : _c.get(c)) || 0, S = ((_d = I.torsionalConstants) == null ? void 0 : _d.get(c)) || 0, R = ((_e = I.elasticities) == null ? void 0 : _e.get(c)) || 0, y = `MAT_${Math.round(R)}`, X = `A${o.toPrecision(6)}_Iz${p.toPrecision(6)}`;
    if (!z.has(X)) {
      let W = 0.3, Q = 0.3;
      o > 0 && p > 0 && (W = Math.sqrt(12 * p / o), Q = o / W), z.set(X, { A: o, Iz: p, Iy: C, J: S, b: Q, h: W, matKey: y });
    }
    const F = [...z.keys()].indexOf(X) + 1;
    H.set(c, `SEC${F}`);
  }
  if (A.length > 0) {
    M('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const c of A) {
      const o = H.get(c) || "SEC1";
      M(`   Frame=${c + 1}   AutoSelect=N.A.   AnalSect=${o}   MatProp=Default`);
    }
    i();
  }
  if (z.size > 0) {
    M('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let c = 0;
    for (const [, o] of z) {
      c++;
      const p = o.A * 5 / 6;
      M(`   SectionName=SEC${c}   Material=${o.matKey}   Shape=Rectangular   t3=${J(o.h)}   t2=${J(o.b)}   Area=${J(o.A)}   TorsConst=${J(o.J)}   I33=${J(o.Iz)}   I22=${J(o.Iy)}   I23=0   AS2=${J(p)}   AS3=${J(p)} _`), M("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    i();
  }
  const V = !!g.layeredSection && b.length > 0, w = g.layeredSection, _ = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map();
  if (!V) for (const c of b) {
    const o = ((_f = I.thicknesses) == null ? void 0 : _f.get(c)) || 0.1, p = ((_g = I.elasticities) == null ? void 0 : _g.get(c)) || 0, C = `MAT_${Math.round(p)}`, S = `t${o.toPrecision(6)}`;
    _.has(S) || _.set(S, { t: o, matKey: C });
    const R = [..._.keys()].indexOf(S) + 1;
    L.set(c, `SSEC${R}`);
  }
  if (b.length > 0) {
    M('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const c of b) {
      const o = V ? w.name : L.get(c) || "SSEC1";
      M(`   Area=${c + 1}   Section=${o}   MatProp=Default`);
    }
    if (i(), M('TABLE:  "AREA SECTION PROPERTIES"'), V) {
      const c = w, o = ((_h = c.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      M(`   Section=${c.name}   Material=${o}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${J(c.totalThickness)}   BendThick=${J(c.totalThickness)}   Color=Magenta`);
    } else {
      let c = 0;
      for (const [, o] of _) c++, M(`   Section=SSEC${c}   Material=${o.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${J(o.t)}   BendThick=${J(o.t)}   Color=Cyan`);
    }
    if (i(), V) {
      M('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const c = w;
      for (const o of c.layers) {
        const p = o.angle ?? 0, C = o.numIntPts ?? 3;
        M(`   Section=${c.name}   LayerName=${o.name}   Distance=${J(o.distance)}   Thickness=${J(o.thickness)}   Type=Shell   NumIntPts=${C}   Material=${o.material}   MatAngle=${J(p * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      i();
    }
  }
  M('TABLE:  "JOINT COORDINATES"');
  for (let c = 0; c < N.length; c++) {
    const o = N[c];
    M(`   Joint=${c + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${J(o[0])}   Y=${J(o[1])}   Z=${J(o[2])}   SpecialJt=No`);
  }
  if (i(), O.supports && O.supports.size > 0) {
    M('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [c, o] of O.supports) {
      if (!o.some((C) => C)) continue;
      const p = (C) => C ? "Yes" : "No";
      M(`   Joint=${c + 1}   U1=${p(o[0])}   U2=${p(o[1])}   U3=${p(o[2])}   R1=${p(o[3])}   R2=${p(o[4])}   R3=${p(o[5])}`);
    }
    i();
  }
  const f = g.selfWtMult ?? 1;
  if (M('TABLE:  "LOAD PATTERN DEFINITIONS"'), M(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${f}`), i(), M('TABLE:  "LOAD CASE DEFINITIONS"'), M('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), i(), M('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), M('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), i(), O.loads && O.loads.size > 0) {
    M('TABLE:  "JOINT LOADS - FORCE"');
    for (const [c, o] of O.loads) o.some((p) => Math.abs(p) > 1e-12) && M(`   Joint=${c + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${J(o[0])}   F2=${J(o[1])}   F3=${J(o[2])}   M1=${J(o[3])}   M2=${J(o[4])}   M3=${J(o[5])}`);
    i();
  }
  const h = /* @__PURE__ */ new Map();
  for (let c = 0; c < $.length; c++) {
    const o = ((_i = I.elasticities) == null ? void 0 : _i.get(c)) || 0, p = ((_j = I.shearModuli) == null ? void 0 : _j.get(c)) || 0, C = o > 0 && p > 0 ? Math.max(0, Math.min(0.5, o / (2 * p) - 1)) : 0.2, S = ((_k = I.densities) == null ? void 0 : _k.get(c)) || 0, R = `MAT_${Math.round(o)}`;
    h.has(R) || h.set(R, { E: o, nu: C, G: p, rho: S });
  }
  M('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [c] of h) M(`   Material=${c}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  i(), M('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [c, o] of h) M(`   Material=${c}   UnitWeight=${J(o.rho * 9.81)}   UnitMass=${J(o.rho)}   E1=${J(o.E)}   G12=${J(o.G)}   U12=${J(o.nu)}   A1=9.9E-06`);
  i(), M('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [c] of h) M(`   Material=${c}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return i(), M('TABLE:  "PROGRAM CONTROL"'), M(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${x.force}, ${x.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), i(), M("END TABLE DATA"), M(""), B.join(`\r
`);
}
function J(g) {
  return g === 0 || Math.abs(g) < 1e-15 ? "0" : Math.abs(g) >= 1e6 || Math.abs(g) < 1e-3 && Math.abs(g) > 0 ? g.toExponential(8) : parseFloat(g.toPrecision(10)).toString();
}
function Dt(g) {
  const { nodes: N, elements: $, nodeInputs: O, elementInputs: I, title: x, e2kModel: G } = g, B = G == null ? void 0 : G.rawSections;
  return B && B.size > 0 ? Ot(B) : $t(g);
}
function Ot(g, N) {
  const $ = [], O = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  $.push("$ File exported from Awatif FEM Studio (round-trip)"), $.push("");
  for (const I of O) {
    const x = g.get(I);
    if (!(!x || x.length === 0)) {
      $.push(`$ ${I}`);
      for (const G of x) $.push(G);
      $.push("");
    }
  }
  for (const [I, x] of g) if (!O.includes(I) && x.length !== 0) {
    $.push(`$ ${I}`);
    for (const G of x) $.push(G);
    $.push("");
  }
  return $.push("  END"), $.push("$ END OF MODEL FILE"), $.join(`\r
`);
}
function $t(g) {
  var _a, _b, _c, _d, _e;
  const { nodes: N, elements: $, nodeInputs: O, elementInputs: I, title: x, units: G } = g, B = (G == null ? void 0 : G.force) || "Tonf", M = (G == null ? void 0 : G.length) || "m", i = [], A = (n) => Math.round(n * 1e4) / 1e4, b = (() => {
    const n = (B || "Tonf").toLowerCase();
    return n === "tonf" || n === "tonf-f" ? 1 / 9.80665 : n === "kn" || n === "kn-f" ? 1 : n === "kgf" || n === "kg" ? 1 / 980665e-8 : n === "kip" || n === "kips" ? 1 / 4.44822 : 1;
  })(), z = (n) => n * b, H = (n) => n * b, V = (n) => n * b, w = /* @__PURE__ */ new Date(), _ = `${w.getMonth() + 1}/${w.getDate()}/${w.getFullYear()}  ${w.getHours()}:${String(w.getMinutes()).padStart(2, "0")}:${String(w.getSeconds()).padStart(2, "0")}`;
  i.push(`$ File   "Hekatan_export.e2k"  saved ${_} in ETABS 22.6.0`), i.push(""), i.push("$ PROGRAM INFORMATION"), i.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), i.push(""), i.push("$ CONTROLS"), i.push(`  UNITS  "${B}"  "${M}"  "C"  `), i.push('  TITLE1  "Hekatan Struct export"  '), x && i.push(`  TITLE2  "${x}"  `), i.push("  PREFERENCE  MERGETOL 0.001"), i.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), i.push("");
  const L = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set();
  N.forEach((n) => {
    L.add(A(n[0])), f.add(A(n[1]));
  });
  const h = [...L].sort((n, E) => n - E), c = [...f].sort((n, E) => n - E);
  i.push("$ GRIDS"), i.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), h.forEach((n, E) => {
    const u = E < 26 ? String.fromCharCode(65 + E) : String.fromCharCode(65 + E % 26).repeat(Math.floor(E / 26) + 1);
    i.push(`  GRID "G1"  LABEL "${u}"  DIR "X"  COORD ${n}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), c.forEach((n, E) => {
    i.push(`  GRID "G1"  LABEL "${E + 1}"  DIR "Y"  COORD ${n}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), i.push("");
  const o = /* @__PURE__ */ new Set();
  N.forEach((n) => o.add(A(n[2])));
  let p = [...o].sort((n, E) => n - E);
  if (p.length === 1) {
    const n = p[0];
    n > 0 ? p = [0, n] : p = [0, 4];
  }
  const C = [], S = /* @__PURE__ */ new Map();
  C.push("Base"), S.set(p[0], "Base");
  for (let n = 1; n < p.length; n++) {
    const E = `Story${n}`;
    C.push(E), S.set(p[n], E);
  }
  o.size === 1 && o.has(0) && S.set(0, C[1]), i.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let n = p.length - 1; n >= 1; n--) i.push(`  STORY "${C[n]}"  HEIGHT ${A(p[n] - p[n - 1])} MASTERSTORY "Yes"  `);
  p.length > 0 && i.push(`  STORY "Base"  ELEV ${p[0]} `), i.push(""), $.some((n) => n.length === 4), i.push("$ DIAPHRAGM NAMES"), i.push('  DIAPHRAGM "D1"    TYPE RIGID'), i.push(""), i.push("$ MATERIAL PROPERTIES");
  const R = /* @__PURE__ */ new Set();
  (_a = I.elasticities) == null ? void 0 : _a.forEach((n) => R.add(n));
  const y = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map();
  let F = 0, W = 0;
  const Q = 980665e-8, tt = /* @__PURE__ */ new Map();
  if (I.densities && I.densities.size > 0) {
    const n = /* @__PURE__ */ new Map();
    I.densities.forEach((E, u) => {
      var _a2;
      const d = (_a2 = I.elasticities) == null ? void 0 : _a2.get(u);
      d !== void 0 && (n.has(d) || n.set(d, []), n.get(d).push(E));
    }), n.forEach((E, u) => {
      const d = E.reduce((s, a) => s + a, 0) / E.length, D = d > 100 ? d * Q : d * 9.80665;
      tt.set(u, D);
    });
  }
  for (const n of R) {
    const E = n >= 1e8, u = E ? `Steel_${++F}` : `Conc_${++W}`;
    y.set(n, u), X.set(n, E);
    const d = tt.get(n) ?? (E ? 76.97 : 24), D = H(n), s = V(d), a = [];
    (_b = I.poissonsRatios) == null ? void 0 : _b.forEach((e, r) => {
      var _a2;
      ((_a2 = I.elasticities) == null ? void 0 : _a2.get(r)) === n && a.push(e);
    });
    const t = a.length > 0 ? a.reduce((e, r) => e + r, 0) / a.length : E ? 0.3 : 0.2, l = E ? 117e-7 : 1e-5;
    if (E) {
      i.push(`  MATERIAL  "${u}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${A(s)}`), i.push(`  MATERIAL  "${u}"    SYMTYPE "Isotropic"  E ${A(D)}  U ${t}  A ${l}`);
      const e = 345e3, r = 45e4;
      i.push(`  MATERIAL  "${u}"  FY ${A(H(e))}  FU ${A(H(r))}  FYE ${A(H(e * 1.1))}  FUE ${A(H(r * 1.1))}`);
    } else i.push(`  MATERIAL  "${u}"    TYPE "Concrete"    WEIGHTPERVOLUME ${A(s)}`), i.push(`  MATERIAL  "${u}"    SYMTYPE "Isotropic"  E ${A(D)}  U ${t}  A ${l}`), i.push(`  MATERIAL  "${u}"    FC ${A(H(24e3))}`);
  }
  i.push(""), i.push("$ FRAME SECTIONS");
  const st = /* @__PURE__ */ new Set(), ct = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), it = 0.05;
  $.forEach((n, E) => {
    var _a2, _b2, _c2, _d2, _e2, _f;
    if (n.length !== 2) return;
    const u = (_a2 = I.sectionShapes) == null ? void 0 : _a2.get(E), d = ((_b2 = I.elasticities) == null ? void 0 : _b2.get(E)) ?? 0, D = y.get(d) || "Conc_1", s = X.get(d) ?? d >= 1e8, a = ((_c2 = I.areas) == null ? void 0 : _c2.get(E)) ?? 0, t = ((_d2 = I.momentsOfInertiaY) == null ? void 0 : _d2.get(E)) ?? 0;
    (_e2 = I.momentsOfInertiaZ) == null ? void 0 : _e2.get(E), (_f = I.torsionalConstants) == null ? void 0 : _f.get(E);
    let l = (u == null ? void 0 : u.type) || "rect", e = (u == null ? void 0 : u.h) ?? 0, r = (u == null ? void 0 : u.b) ?? 0, T = (u == null ? void 0 : u.d) ?? 0;
    const m = (u == null ? void 0 : u.tf) ?? 0, P = (u == null ? void 0 : u.tw) ?? 0;
    e <= 0 && r <= 0 && T <= 0 && a > 0 && (t > 0 ? (e = Math.sqrt(12 * t / a), r = a / e) : e = r = Math.sqrt(a), (!isFinite(e) || e < it) && (e = it), (!isFinite(r) || r < it) && (r = it), l = "rect"), e <= 0 && r <= 0 && T <= 0 && (e = 0.3, r = 0.3, l = "rect");
    const k = `${l}_${A(e)}_${A(r)}_${A(T)}_${A(m)}_${A(P)}_${D}`;
    (u == null ? void 0 : u.name) && !q.has(k) && q.set(k, u.name);
    let Y = q.get(k);
    if (!Y) {
      const K = s ? "S" : "C";
      l === "rect" ? Y = `${K}_R${Math.round(r * 100)}x${Math.round(e * 100)}` : l === "circ" ? Y = `${K}_C_D${Math.round(T * 100)}` : l === "I" ? Y = `${K}_I${Math.round(e * 100)}x${Math.round(r * 100)}` : l === "HSS" ? Y = `${K}_HSS${Math.round(r * 100)}x${Math.round(e * 100)}x${Math.round(P * 1e3)}` : Y = `${K}_Sec${st.size + 1}`, q.set(k, Y);
    }
    if (ct.set(E, Y), st.has(Y)) return;
    st.add(Y);
    let v;
    l === "I" ? v = "Steel I/Wide Flange" : l === "HSS" ? v = "Steel Tube" : l === "CFT" ? v = "Filled Steel Tube" : l === "pipe" ? v = "Steel Pipe" : l === "L" ? v = "Steel Angle" : l === "C" ? v = "Steel Channel" : l === "2C" ? v = "Steel Double Channel" : l === "circ" ? v = "Concrete Circle" : v = "Concrete Rectangular";
    let Z = `  FRAMESECTION  "${Y}"  MATERIAL "${D}"  SHAPE "${v}"`;
    e && (Z += `  D ${A(e)}`), r && (Z += `  B ${A(r)}`), T && !e && (Z += `  D ${A(T)}`), m && (Z += `  TF ${A(m)}`), P && (Z += `  TW ${A(P)}`), i.push(Z);
  }), i.push("");
  const j = /* @__PURE__ */ new Map();
  let pt = 0;
  N.forEach((n) => {
    const E = `${A(n[0])},${A(n[1])}`;
    j.has(E) || j.set(E, `${++pt}`);
  }), i.push("$ POINT COORDINATES");
  for (const [n, E] of j) {
    const [u, d] = n.split(",").map(Number);
    i.push(`  POINT "${E}"  ${u} ${d} `);
  }
  i.push("");
  const et = (n) => {
    const E = N[n], u = `${A(E[0])},${A(E[1])}`;
    return { pt: j.get(u) || "1", story: S.get(A(E[2])) || "Base" };
  }, St = (n) => {
    var _a2, _b2, _c2, _d2;
    const E = [], u = (_a2 = g.propertyModifiers) == null ? void 0 : _a2.get(n);
    u && u.some((a) => Math.abs(a - 1) > 1e-9) && E.push(`PROPMODIFIERS "${u.map((a) => A(a)).join(" ")}"`);
    const d = (_b2 = I.momentReleases) == null ? void 0 : _b2.get(n);
    if (d && d.some((a) => a)) {
      const a = [];
      d.length === 12 ? (d[0] && a.push("PI"), d[1] && a.push("V2I"), d[2] && a.push("V3I"), d[3] && a.push("TI"), d[4] && a.push("M2I"), d[5] && a.push("M3I"), d[6] && a.push("PJ"), d[7] && a.push("V2J"), d[8] && a.push("V3J"), d[9] && a.push("TJ"), d[10] && a.push("M2J"), d[11] && a.push("M3J")) : d.length === 6 && (d[0] && a.push("TI"), d[1] && a.push("M2I"), d[2] && a.push("M3I"), d[3] && a.push("TJ"), d[4] && a.push("M2J"), d[5] && a.push("M3J")), a.length > 0 && E.push(`RELEASE "${a.join(" ")}"`);
    }
    const D = (_c2 = I.insertionPoints) == null ? void 0 : _c2.get(n);
    D && (Math.abs(D[0]) > 1e-9 || Math.abs(D[1]) > 1e-9) && E.push(`LATEROFFSET ${A(D[0])} TRANSOFFSET ${A(D[1])}`);
    const s = (_d2 = I.rigidOffsets) == null ? void 0 : _d2.get(n);
    return s && (Math.abs(s[0]) > 1e-9 || Math.abs(s[1]) > 1e-9) && E.push(`LENGTHOFFI ${A(s[0])} LENGTHOFFJ ${A(s[1])} RIGIDZONE 0.5`), E.length > 0 ? ` ${E.join(" ")} ` : "";
  }, dt = [], ut = /* @__PURE__ */ new Set(), ft = /* @__PURE__ */ new Map();
  $.forEach((n, E) => {
    if (n.length !== 2) return;
    const u = Tt(N, n);
    if (u === "BEAM") return;
    const d = N[n[0]][2] <= N[n[1]][2] ? n[0] : n[1], D = N[n[0]][2] <= N[n[1]][2] ? n[1] : n[0];
    if (Math.abs(N[d][0] - N[D][0]) > 1e-6 || Math.abs(N[d][1] - N[D][1]) > 1e-6) return;
    const s = et(d), a = ct.get(E) || `Sec_${E}`, t = `${s.pt}_${a}_${u}`;
    ft.has(t) || ft.set(t, []), ft.get(t).push({ i: E, bot: d, top: D, zBot: A(N[d][2]), zTop: A(N[D][2]), planPt: s.pt, secName: a, type: u });
  }), ft.forEach((n, E) => {
    n.sort((d, D) => d.zBot - D.zBot);
    let u = 0;
    for (let d = 1; d <= n.length; d++) if (d === n.length || Math.abs(n[d].zBot - n[d - 1].zTop) > 1e-6) {
      const s = n.slice(u, d);
      s.length >= 1 && (dt.push({ elemIndices: s.map((a) => a.i), planPt: s[0].planPt, bottomNodeIdx: s[0].bot, topNodeIdx: s[s.length - 1].top, secName: s[0].secName, type: s[0].type, nSegments: s.length }), s.forEach((a) => ut.add(a.i))), u = d;
    }
  }), i.push("$ LINE CONNECTIVITIES");
  const Et = [];
  dt.forEach((n, E) => {
    const u = `C${E + 1}`, d = et(n.topNodeIdx);
    et(n.bottomNodeIdx);
    const D = A(N[n.topNodeIdx][2]), s = A(N[n.bottomNodeIdx][2]), a = p.indexOf(D), t = p.indexOf(s), l = Math.max(1, a - t), e = St(n.elemIndices[0]);
    i.push(`  LINE  "${u}"  ${n.type}  "${d.pt}"  "${d.pt}"  ${l}`), Et.push(`  LINEASSIGN  "${u}"  "${d.story}"  SECTION "${n.secName}" ${e} RIGIDZONE 0.5 MAXSTASPC 0.5 MINNUMSTA ${n.nSegments} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  }), $.forEach((n, E) => {
    if (n.length !== 2 || ut.has(E)) return;
    const u = Tt(N, n), d = ct.get(E) || `Sec_${E}`, D = St(E);
    if (u === "BEAM") {
      const s = et(n[0]), a = et(n[1]);
      i.push(`  LINE  "E${E + 1}"  BEAM  "${s.pt}"  "${a.pt}"  0`), Et.push(`  LINEASSIGN  "E${E + 1}"  "${s.story}"  SECTION "${d}" ${D} RIGIDZONE 0.5 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const s = N[n[0]][2] <= N[n[1]][2] ? n[0] : n[1], a = N[n[0]][2] <= N[n[1]][2] ? n[1] : n[0], t = et(a), l = A(N[s][2]), e = A(N[a][2]), r = p.indexOf(l), T = p.indexOf(e), m = Math.max(1, T >= 0 && r >= 0 ? T - r : 1);
      i.push(`  LINE  "E${E + 1}"  ${u}  "${t.pt}"  "${t.pt}"  ${m}`), Et.push(`  LINEASSIGN  "E${E + 1}"  "${t.story}"  SECTION "${d}" ${D} RIGIDZONE 0.5 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    }
  }), i.push("");
  const ht = g.weightMode ?? "auto", lt = /* @__PURE__ */ new Set();
  i.push("$ POINT ASSIGNS"), (_c = O.supports) == null ? void 0 : _c.forEach((n, E) => {
    const u = [];
    if (n[0] && u.push("UX"), n[1] && u.push("UY"), n[2] && u.push("UZ"), n[3] && u.push("RX"), n[4] && u.push("RY"), n[5] && u.push("RZ"), u.length > 0) {
      const d = et(E), D = d.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      i.push(`  POINTASSIGN  "${d.pt}"  "${d.story}"  RESTRAINT "${u.join(" ")}" ${D} `), lt.add(`${d.pt}@${d.story}`);
    }
  }), dt.forEach((n) => {
    const E = et(n.topNodeIdx), u = `${E.pt}@${E.story}`;
    !lt.has(u) && E.story !== "Base" && (i.push(`  POINTASSIGN  "${E.pt}"  "${E.story}"  DIAPH "D1"  `), lt.add(u));
  }), ht === "manual" && O.loads && O.loads.forEach((n, E) => {
    const u = et(E), d = `${u.pt}@${u.story}`;
    lt.has(d) || (i.push(`  POINTASSIGN  "${u.pt}"  "${u.story}"  DIAPH "DISCONNECTED"  `), lt.add(d));
  }), i.push(""), i.push("$ LINE ASSIGNS"), Et.forEach((n) => i.push(n)), i.push("");
  const rt = [];
  $.forEach((n, E) => {
    if (n.length === 4) {
      const u = N[n[0]], d = N[n[1]], D = N[n[2]], s = [d[0] - u[0], d[1] - u[1], d[2] - u[2]], a = [D[0] - u[0], D[1] - u[1], D[2] - u[2]], t = s[1] * a[2] - s[2] * a[1], l = s[2] * a[0] - s[0] * a[2], e = s[0] * a[1] - s[1] * a[0], r = Math.sqrt(t * t + l * l + e * e), T = r > 1e-10 && Math.abs(e) / r < 0.5;
      rt.push({ idx: E, el: n, isWall: T });
    }
  });
  const At = (() => {
    for (const [n, E] of X) if (!E) return y.get(n);
    return y.values().next().value || "Conc_1";
  })();
  if (rt.some((n) => !n.isWall)) {
    i.push("$ SLAB PROPERTIES");
    const n = ((_d = I.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.15;
    i.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${At}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${A(n)} `), i.push("");
  }
  if (rt.some((n) => n.isWall)) {
    i.push("$ WALL PROPERTIES");
    const n = ((_e = I.thicknesses) == null ? void 0 : _e.values().next().value) ?? 0.2;
    i.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${At}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${A(n)} `), i.push("");
  }
  if (rt.length > 0) {
    i.push("$ AREA CONNECTIVITIES");
    const n = [];
    rt.forEach((E, u) => {
      const { el: d, isWall: D } = E, s = D ? `W${u + 1}` : `F${u + 1}`, a = D ? "PANEL" : "FLOOR", t = d.map((l) => et(l));
      if (D) {
        const l = N[d[0]][2] <= N[d[2]][2] ? 0 : 2, e = N[d[1]][2] <= N[d[3]][2] ? 1 : 3;
        i.push(`  AREA "${s}"  ${a}  4  "${t[l].pt}"  "${t[e].pt}"  "${t[e].pt}"  "${t[l].pt}"  1  1  0  0  `);
        const r = t[l === 0 ? 2 : 0].story;
        n.push(`  AREAASSIGN  "${s}"  "${r}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else i.push(`  AREA "${s}"  ${a}  4  "${t[0].pt}"  "${t[1].pt}"  "${t[2].pt}"  "${t[3].pt}"  0  0  0  0  `), n.push(`  AREAASSIGN  "${s}"  "${t[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
    }), i.push(""), i.push("$ AREA ASSIGNS"), n.forEach((E) => i.push(E)), i.push("");
  }
  const mt = ht === "manual" ? 0 : 1;
  i.push("$ LOAD PATTERNS"), i.push(`  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  ${mt}`), i.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), i.push("");
  const at = [];
  return O.loads && O.loads.size > 0 && O.loads.forEach((n, E) => {
    const [u, d, D] = n, s = et(E);
    Math.abs(u) > 1e-10 && at.push(`  POINTLOAD  "${s.pt}"  "${s.story}"  TYPE "FORCE"  LC "Dead"  FX ${A(z(u))}  FY 0  FZ 0`), Math.abs(d) > 1e-10 && at.push(`  POINTLOAD  "${s.pt}"  "${s.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY ${A(z(d))}  FZ 0`), ht === "manual" && Math.abs(D) > 1e-10 && at.push(`  POINTLOAD  "${s.pt}"  "${s.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY 0  FZ ${A(z(D))}`);
  }), O.moments && O.moments.size > 0 && O.moments.forEach((n, E) => {
    const [u, d, D] = n, s = et(E);
    Math.abs(u) > 1e-10 && at.push(`  POINTLOAD  "${s.pt}"  "${s.story}"  TYPE "MOMENT"  LC "Dead"  MX ${A(z(u))}  MY 0  MZ 0`), Math.abs(d) > 1e-10 && at.push(`  POINTLOAD  "${s.pt}"  "${s.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY ${A(z(d))}  MZ 0`), Math.abs(D) > 1e-10 && at.push(`  POINTLOAD  "${s.pt}"  "${s.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY 0  MZ ${A(z(D))}`);
  }), at.length > 0 && (i.push("$ POINT OBJECT LOADS"), at.forEach((n) => i.push(n)), i.push("")), i.push("$ ANALYSIS OPTIONS"), i.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), i.push('  PDELTA  METHOD "NONE"  '), i.push(""), i.push("$ MASS SOURCE"), i.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), i.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), i.push(""), i.push("$ LOAD CASES"), i.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), i.push('  LOADCASE "Dead"  LOADPAT  "Dead"  SF 1 '), i.push('  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), i.push('  LOADCASE "Live"  LOADPAT  "Live"  SF 1 '), i.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), i.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), i.push(""), i.push("$ LOAD COMBINATIONS"), i.push('  COMBO "1.4D"  TYPE "Linear Add"  '), i.push('  COMBO "1.4D"  LOADCASE  "Dead"  SF 1.4 '), i.push('  COMBO "1.2D+1.6L"  TYPE "Linear Add"  '), i.push('  COMBO "1.2D+1.6L"  LOADCASE  "Dead"  SF 1.2 '), i.push('  COMBO "1.2D+1.6L"  LOADCASE  "Live"  SF 1.6 '), i.push(""), i.push("  END"), i.push("$ END OF MODEL FILE"), i.join(`\r
`);
}
function Tt(g, N) {
  const $ = g[N[0]], O = g[N[1]], I = Math.abs(O[2] - $[2]), x = Math.sqrt((O[0] - $[0]) ** 2 + (O[1] - $[1]) ** 2), G = I > x * 0.5;
  return G && x > 0.01 ? "BRACE" : G ? "COLUMN" : "BEAM";
}
export {
  Ct as a,
  yt as b,
  Lt as c,
  Dt as e,
  Rt as p
};
