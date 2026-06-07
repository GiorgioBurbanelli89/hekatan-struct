function Rt() {
  const R = document.createElement("div");
  R.id = "modal-results", R.style.cssText = `
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
  const O = 0.9;
  function N(I, P) {
    var _a, _b, _c, _d;
    if (!I.frequencies || I.frequencies.length === 0) {
      R.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const z = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], B = [0, 0, 0, 0, 0, 0], M = I.frequencies.length;
    let c = -1, T = -1, G = -1, v = 0, H = 0;
    {
      const o = [0, 0, 0, 0, 0, 0];
      for (let p = 0; p < M; p++) {
        const y = ((_a = I.massParticipation) == null ? void 0 : _a[p]) || [0, 0, 0, 0, 0, 0];
        for (let S = 0; S < 6; S++) o[S] += y[S];
        c < 0 && o[0] >= O && (c = p + 1), T < 0 && o[1] >= O && (T = p + 1), G < 0 && o[0] >= O && o[1] >= O && (G = p + 1);
      }
      v = o[0], H = o[1];
    }
    let V = -1, b = -1, _ = -1;
    const $ = 0.1;
    for (let o = 0; o < M; o++) {
      const p = ((_b = I.massParticipation) == null ? void 0 : _b[o]) || [0, 0, 0, 0, 0, 0];
      V < 0 && p[0] > $ && (V = o + 1), b < 0 && p[1] > $ && (b = o + 1), _ < 0 && p[5] > $ && (_ = o + 1);
    }
    const f = G > 0 ? `<span style="color:#0f0">\u2713 ASCE 7-22 \xA712.9.1.1 \u2014 90 % alcanzado en X e Y al modo ${G} de ${M}</span>` : c > 0 && T < 0 ? `<span style="color:#fa0">\u26A0 X cumple en modo ${c}, Y todav\xEDa en ${(H * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : T > 0 && c < 0 ? `<span style="color:#fa0">\u26A0 Y cumple en modo ${T}, X todav\xEDa en ${(v * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : `<span style="color:#f44">\u2717 ASCE 7-22 NO cumplido en ${M} modos \xB7 \u03A3Ux=${(v * 100).toFixed(1)} % \xB7 \u03A3Uy=${(H * 100).toFixed(1)} % \u2014 aumentar nModes</span>`, h = (() => {
      const o = (p, y) => {
        var _a2;
        if (p < 0) return `<span style="color:#f44">${y}: no encontrado en ${M} modos</span>`;
        const S = ((_a2 = I.massParticipation) == null ? void 0 : _a2[p - 1]) || [0, 0, 0, 0, 0, 0], L = y === "Ux" ? 0 : y === "Uy" ? 1 : 5, C = I.frequencies[p - 1] > 0 ? 1 / I.frequencies[p - 1] : 0;
        return `<span style="color:#0f0">${y}: modo ${p}, T=${C.toFixed(3)} s, MPF=${(S[L] * 100).toFixed(1)} %</span>`;
      };
      return `<div style="margin:4px 0; padding:4px 6px; background:rgba(0,255,255,0.05); border-left:2px solid #0ff; font-size:11px;">
  \u{1F3AF} <b>Modos s\xEDsmicos principales</b> (ASCE 7-22 \xA712.9.1):<br>
  ${o(V, "Ux")} \xB7 ${o(b, "Uy")} \xB7 ${o(_, "Rz")}
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
    for (const o of z) i += `<th style="padding:2px 5px">${o}</th>`;
    i += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let o = 0; o < 6; o++) B[o] = 0;
    if (I.frequencies.forEach((o, p) => {
      var _a2;
      const y = o > 0 ? 1 / o : 0, S = o * 2 * Math.PI, L = ((_a2 = I.massParticipation) == null ? void 0 : _a2[p]) || [0, 0, 0, 0, 0, 0];
      for (let j = 0; j < 6; j++) B[j] += L[j];
      let C = 0, X = L[0];
      for (let j = 1; j < 6; j++) L[j] > X && (X = L[j], C = j);
      const F = X < 0.05 ? "\u2014" : `${z[C]} (${(X * 100).toFixed(0)} %)`, W = C === 0 || C === 1 ? "#0f0" : C === 5 ? "#0ff" : C === 2 ? "#fa0" : "#888", Q = p + 1 === c, tt = p + 1 === T, st = p + 1 === G;
      i += `<tr style="border-bottom:1px solid #fff1; ${st ? "background:rgba(0,255,0,0.12);" : Q || tt ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${p + 1}${st ? " \u2605" : ""}</td>
  <td style="padding:2px 6px; text-align:right">${o.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${y.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${S.toFixed(2)}</td>`;
      for (let j = 0; j < 6; j++) {
        const pt = (L[j] * 100).toFixed(1), et = L[j] > 0.5 ? "#f00" : L[j] > 0.1 ? "#ff0" : "#0f0";
        i += `<td style="padding:2px 5px; text-align:right; color:${et}">${pt}%</td>`;
      }
      const q = B[0] >= O ? "#0f0" : "#0ff", it = B[1] >= O ? "#0f0" : "#0ff";
      i += `<td style="padding:2px 5px; text-align:right; color:${q}">${(B[0] * 100).toFixed(1)}%${Q ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${it}">${(B[1] * 100).toFixed(1)}%${tt ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(B[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${W}">${F}</td></tr>`;
    }), i += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, i += "</div>", R.innerHTML = i, g) {
      const o = R.querySelector("#modal-body"), p = R.querySelector("#modal-minimize");
      o && (o.style.display = "none"), p && (p.textContent = "\u25A2", p.title = "Restaurar");
    }
    (_c = R.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      g = !g;
      const o = R.querySelector("#modal-body"), p = R.querySelector("#modal-minimize");
      g ? (o.style.display = "none", p.textContent = "\u25A2", p.title = "Restaurar") : (o.style.display = "block", p.textContent = "\u25AC", p.title = "Minimizar");
    }), (_d = R.querySelector("#modal-copy")) == null ? void 0 : _d.addEventListener("click", () => {
      const o = [];
      o.push(`Modal Analysis \u2014 ${P.title}`), o.push(f.replace(/<[^>]+>/g, ""));
      const p = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${z.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      o.push(p), o.push("-".repeat(p.length));
      const y = [0, 0, 0, 0, 0, 0];
      I.frequencies.forEach((L, C) => {
        var _a2;
        const X = L > 0 ? 1 / L : 0, F = L * 2 * Math.PI, W = ((_a2 = I.massParticipation) == null ? void 0 : _a2[C]) || [0, 0, 0, 0, 0, 0];
        for (let q = 0; q < 6; q++) y[q] += W[q];
        let Q = 0, tt = W[0];
        for (let q = 1; q < 6; q++) W[q] > tt && (tt = W[q], Q = q);
        const st = tt < 0.05 ? "\u2014" : `${z[Q]} (${(tt * 100).toFixed(0)}%)`, ct = W.map((q) => ((q * 100).toFixed(1) + "%").padStart(6)).join(" ");
        o.push(`${String(C + 1).padStart(4)}  ${L.toFixed(4).padStart(9)}  ${X.toFixed(4).padStart(9)}  ${F.toFixed(2).padStart(9)}  ${ct}  ${(y[0] * 100).toFixed(1).padStart(5)}%  ${(y[1] * 100).toFixed(1).padStart(5)}%  ${(y[5] * 100).toFixed(1).padStart(5)}%  ${st}`);
      }), navigator.clipboard.writeText(o.join(`
`));
      const S = R.querySelector("#modal-copy");
      S.textContent = "\u2713", setTimeout(() => S.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: R, render: N };
}
function Lt(R) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  const g = R.split(/\r?\n/), O = { force: "TONF", length: "M" }, N = [], I = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), B = [], M = [], c = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), G = [], v = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), V = [], b = /* @__PURE__ */ new Map(), _ = [];
  let $ = "", f = "";
  const h = /* @__PURE__ */ new Map();
  for (const s of g) {
    const a = s.trim();
    if (!a || a.startsWith("$")) {
      a.startsWith("$ ") && (f = a.substring(2).trim());
      continue;
    }
    if (f && (h.has(f) || h.set(f, []), h.get(f).push(s)), f === "CONTROLS") {
      const t = a.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
      t && (O.force = t[1], O.length = t[2]);
      const l = a.match(/TITLE2\s+"([^"]+)"/);
      l && ($ = l[1]);
    }
    if (f === "STORIES - IN SEQUENCE FROM TOP") {
      const t = a.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
      if (t) {
        const l = t[1], e = t[2] ? parseFloat(t[2]) : 0, r = t[3] ? parseFloat(t[3]) : void 0;
        N.push({ name: l, height: e, elev: r ?? 0 });
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
        const m = a.match(/\bU\s+([\d.eE+-]+)/);
        m && (e.nu = parseFloat(m[1]), e.G = e.E / (2 * (1 + e.nu)));
        const A = a.match(/\bFY\s+([\d.eE+-]+)/);
        A && (e.fy = parseFloat(A[1]));
        const x = a.match(/\bFC\s+([\d.eE+-]+)/);
        x && (e.fc = parseFloat(x[1]));
        const U = a.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
        U && (e.density = parseFloat(U[1]));
      }
    }
    if (f === "FRAME SECTIONS") {
      const t = a.match(/FRAMESECTION\s+"([^"]+)"/);
      if (t) {
        const l = t[1];
        P.has(l) || P.set(l, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
        const e = P.get(l), r = a.match(/MATERIAL\s+"([^"]+)"/);
        r && (e.material = r[1]);
        const m = a.match(/SHAPE\s+"([^"]+)"/);
        m && (e.shape = m[1]);
        const A = a.match(/\bD\s+([\d.eE+-]+)/);
        A && (e.D = parseFloat(A[1]));
        const x = a.match(/\bB\s+([\d.eE+-]+)/);
        x && (e.B = parseFloat(x[1]));
        const U = a.match(/\bTF\s+([\d.eE+-]+)/);
        U && (e.TF = parseFloat(U[1]));
        const w = a.match(/\bTW\s+([\d.eE+-]+)/);
        w && (e.TW = parseFloat(w[1]));
        const k = a.match(/\bR\s+([\d.eE+-]+)/);
        k && (e.R = parseFloat(k[1]));
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
      t && z.set(t[1], [parseFloat(t[2]), parseFloat(t[3])]);
    }
    if (f === "LINE CONNECTIVITIES") {
      const t = a.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
      t && B.push({ name: t[1], type: t[2], pt1: t[3], pt2: t[4], nStories: parseInt(t[5]) });
    }
    if (f === "POINT ASSIGNS") {
      const t = a.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
      t && c.set(`${t[1]}@${t[2]}`, t[3].split(/\s+/));
    }
    if (f === "LINE ASSIGNS") {
      const t = a.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
      if (t) {
        const l = { story: t[2], section: t[3], rigidZone: 0, releases: [], angle: 0 }, e = a.match(/RIGIDZONE\s+([\d.eE+-]+)/);
        e && (l.rigidZone = parseFloat(e[1]));
        const r = a.match(/RELEASE\s+"([^"]+)"/);
        r && (l.releases = r[1].split(/\s+/));
        const m = a.match(/ANG\s+([-\d.eE+]+)/);
        m && (l.angle = parseFloat(m[1])), T.set(`${t[1]}@${t[2]}`, l);
      }
    }
    if (f === "GRIDS") {
      const t = a.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
      t && _.push({ label: t[1], dir: t[2], coord: parseFloat(t[3]) });
    }
    if (f === "FRAME OBJECT LOADS") {
      const t = a.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      t && G.push({ line: t[1], story: t[2], type: t[3], dir: t[4], lc: t[5], val: parseFloat(t[6]) });
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
        const l = t[1], e = (_b = t[2].match(/SLABTHICKNESS\s+([\d.eE+-]+)/)) == null ? void 0 : _b[1], r = (_c = t[2].match(/WALLTHICKNESS\s+([\d.eE+-]+)/)) == null ? void 0 : _c[1], m = (_d = t[2].match(/MATERIAL\s+"([^"]+)"/)) == null ? void 0 : _d[1], A = (_e = t[2].match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _e[1];
        if (e || r) {
          const x = H.get(l) || { material: "", modelingType: "ShellThin" };
          H.set(l, { material: m ?? x.material, modelingType: A ?? x.modelingType, thickness: parseFloat(e ?? r ?? "0") });
        }
      }
    }
    if (f === "AREA ASSIGNS") {
      const t = a.match(/AREAASSIGN\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/);
      if (t) {
        const l = t[1], e = t[2], r = t[3], m = ((_f = r.match(/SECTION\s+"([^"]+)"/)) == null ? void 0 : _f[1]) ?? "", A = ((_g = r.match(/CARDINALPOINT\s+"([^"]+)"/)) == null ? void 0 : _g[1]) ?? "CENTROID", x = ((_h = r.match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _h[1]) ?? "ShellThin";
        v.set(`${l}@${e}`, { story: e, section: m, modelingType: x, cardinalPoint: A });
      }
    }
    if (f === "SHELL UNIFORM LOAD SETS") {
      const t = a.match(/SHELLUNIFORMLOADSET\s+"([^"]+)"\s+LOADPAT\s+"([^"]+)"\s+VALUE\s+([\d.eE+-]+)/);
      if (t) {
        const l = t[1], e = t[2], r = parseFloat(t[3]);
        b.has(l) || b.set(l, []), b.get(l).push({ loadpat: e, value: r });
      }
    }
    if (f === "SHELL OBJECT LOADS") {
      const t = a.match(/AREALOAD\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/);
      if (t) {
        const l = t[1], e = t[2], r = t[3], m = ((_i = r.match(/TYPE\s+"([^"]+)"/)) == null ? void 0 : _i[1]) ?? "";
        if (m === "UNIFLOADSET") {
          const A = ((_j = r.match(/UNIFLOADSET"\s+"([^"]+)"/)) == null ? void 0 : _j[1]) ?? ((_k = r.match(/"([^"]+)"\s*$/)) == null ? void 0 : _k[1]) ?? "";
          V.push({ area: l, story: e, type: "UNIFLOADSET", dir: "GRAV", lc: A, val: 0 });
        } else {
          const A = ((_l = r.match(/DIR\s+"([^"]+)"/)) == null ? void 0 : _l[1]) ?? "GRAV", x = ((_m = r.match(/LC\s+"([^"]+)"/)) == null ? void 0 : _m[1]) ?? "", U = parseFloat(((_n = r.match(/FVAL\s+([\d.eE+-]+)/)) == null ? void 0 : _n[1]) ?? "0");
          V.push({ area: l, story: e, type: m, dir: A, lc: x, val: U });
        }
      }
    }
  }
  const i = [];
  for (const s of V) if (s.type === "UNIFLOADSET") {
    const a = b.get(s.lc);
    if (a) for (const t of a) i.push({ area: s.area, story: s.story, type: "UNIFF", dir: s.dir, lc: t.loadpat, val: t.value });
  } else i.push(s);
  V.length = 0, V.push(...i);
  const o = /* @__PURE__ */ new Map();
  if (N.length > 0) {
    const s = N.length - 1;
    o.set(N[s].name, N[s].elev);
    for (let a = s - 1; a >= 0; a--) {
      const l = o.get(N[a + 1].name) + N[a].height;
      N[a].elev = l, o.set(N[a].name, l);
    }
  }
  const p = [], y = [], S = /* @__PURE__ */ new Map(), L = (s, a) => `${s}@${a}`, C = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Map();
  for (const s of B) X.set(s.name, s);
  for (const s of B) for (const [a, t] of T) {
    if (!a.startsWith(s.name + "@")) continue;
    const l = t.story, e = N.findIndex((r) => r.name === l);
    if (!(e < 0)) if (s.type === "COLUMN" || s.type === "BRACE") {
      C.add(L(s.pt2, l));
      const r = Math.max(s.nStories, 1), m = Math.min(e + r, N.length - 1);
      C.add(L(s.pt1, N[m].name));
    } else C.add(L(s.pt1, l)), C.add(L(s.pt2, l));
  }
  for (const [s] of c) C.add(s);
  for (const s of M) for (const [a, t] of v) if (a.startsWith(s.name + "@")) for (const l of s.pts) C.add(L(l, t.story));
  for (const s of C) {
    const [a, t] = s.split("@"), l = z.get(a), e = o.get(t);
    l === void 0 || e === void 0 || (p.push([l[0], l[1], e]), y.push(s), S.set(s, p.length - 1));
  }
  const F = [], W = [], Q = [], tt = [], st = /* @__PURE__ */ new Map();
  for (const s of B) for (const [a, t] of T) {
    if (!a.startsWith(s.name + "@")) continue;
    const l = t.story, e = N.findIndex((w) => w.name === l);
    if (e < 0) continue;
    let r, m;
    if (s.type === "COLUMN" || s.type === "BRACE") {
      const w = Math.max(s.nStories, 1), k = Math.min(e + w, N.length - 1);
      r = L(s.pt1, N[k].name), m = L(s.pt2, l);
    } else r = L(s.pt1, l), m = L(s.pt2, l);
    const A = S.get(r), x = S.get(m);
    if (A === void 0 || x === void 0 || A === x) continue;
    const U = F.length;
    if (F.push([A, x]), W.push(s.name), Q.push(s.type), tt.push(l), st.set(U, t.section), t.rigidZone > 0 && ut.set(U, [t.rigidZone, t.rigidZone]), t.releases.length > 0) {
      const w = new Array(12).fill(false), k = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const Z of t.releases) {
        const K = k[Z];
        K !== void 0 && (w[K] = true);
      }
      ft.set(U, w);
    }
  }
  const ct = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map();
  for (const s of M) for (const [a, t] of v) {
    if (!a.startsWith(s.name + "@")) continue;
    const l = [];
    for (const r of s.pts) {
      const m = L(r, t.story), A = S.get(m);
      if (A === void 0) {
        l.length = 0;
        break;
      }
      l.push(A);
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
    const l = t.map((x) => p[x]), e = [l[1][0] - l[0][0], l[1][1] - l[0][1]], r = [l[3][0] - l[0][0], l[3][1] - l[0][1]], m = Math.abs(e[0] * r[1] - e[1] * r[0]), A = -s.val * m / 4;
    for (const x of t) {
      const U = it.get(x) || [0, 0, 0, 0, 0, 0];
      U[2] += A, it.set(x, U);
    }
  }
  const j = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map();
  for (const [s, a] of st) {
    const t = P.get(a);
    if (!t) continue;
    const l = I.get(t.material);
    l && (j.set(s, l.E), pt.set(s, l.G));
    const e = t.D, r = t.B, m = t.TF, A = t.TW;
    let x = 0, U = 0, w = 0, k = 0, Z = 0, K = 0, ot = "rect";
    switch (t.shape) {
      case "Concrete Rectangular":
        x = e * r, U = r * e ** 3 / 12, w = e * r ** 3 / 12, k = r * e ** 3 * (1 / 3 - 0.21 * (e / r) * (1 - e ** 4 / (12 * r ** 4))), Z = K = 5 / 6 * x, ot = "rect";
        break;
      case "Concrete Circle":
        x = Math.PI * e ** 2 / 4, U = w = Math.PI * e ** 4 / 64, k = Math.PI * e ** 4 / 32, Z = K = 0.9 * x, ot = "circ";
        break;
      case "Steel I/Wide Flange":
        x = 2 * r * m + (e - 2 * m) * A, U = (r * e ** 3 - (r - A) * (e - 2 * m) ** 3) / 12, w = (2 * m * r ** 3 + (e - 2 * m) * A ** 3) / 12, k = (2 * r * m ** 3 + (e - 2 * m) * A ** 3) / 3, Z = (e - 2 * m) * A, K = 2 * r * m * 5 / 6, ot = "I";
        break;
      case "Steel Tube":
        x = e * r - (e - 2 * A) * (r - 2 * A), U = (r * e ** 3 - (r - 2 * A) * (e - 2 * A) ** 3) / 12, w = (e * r ** 3 - (e - 2 * A) * (r - 2 * A) ** 3) / 12, k = 2 * A * (e - A) * (r - A) * ((e - A) * (r - A)) / (e - A + (r - A)), Z = 2 * e * A, K = 2 * r * A, ot = "HSS";
        break;
      case "Filled Steel Tube":
        x = e * r, U = r * e ** 3 / 12, w = e * r ** 3 / 12, k = 2 * A * (e - A) * (r - A) * ((e - A) * (r - A)) / (e - A + (r - A)), Z = 2 * e * A + 5 / 6 * (e - 2 * A) * (r - 2 * A), K = 2 * r * A + 5 / 6 * (e - 2 * A) * (r - 2 * A), ot = "CFT";
        break;
      case "Steel Angle": {
        const nt = m || A;
        x = nt * (e + r - nt), U = nt * (e ** 3 + r * nt ** 2 + nt ** 2 * (e - nt)) / 12, w = nt * (r ** 3 + e * nt ** 2 + nt ** 2 * (r - nt)) / 12, k = (e + r - nt) * nt ** 3 / 3, Z = e * nt, K = r * nt, ot = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        x = 2 * r * m + (e - 2 * m) * A, U = (A * e ** 3 + 2 * r * m * (e - m) ** 2) / 12, w = (2 * m * r ** 3 + (e - 2 * m) * A ** 3) / 12, k = (2 * r * m ** 3 + (e - 2 * m) * A ** 3) / 3, Z = (e - 2 * m) * A, K = 2 * r * m * 5 / 6, ot = t.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        x = 2 * (2 * r * m + (e - 2 * m) * A), U = 2 * (A * e ** 3 + 2 * r * m * (e - m) ** 2) / 12, w = 2 * (2 * m * r ** 3 + (e - 2 * m) * A ** 3) / 12, k = 2 * (2 * r * m ** 3 + (e - 2 * m) * A ** 3) / 3, Z = 2 * (e - 2 * m) * A, K = 4 * r * m * 5 / 6, ot = "2C";
        break;
      default:
        e > 0 && r > 0 && (x = e * r, U = r * e ** 3 / 12, w = e * r ** 3 / 12, k = Math.min(e, r) * Math.max(e, r) ** 3 / 3 * 0.3, Z = K = 5 / 6 * x);
        break;
    }
    t.modI2 && (w *= t.modI2), t.modI3 && (U *= t.modI3), et.set(s, x), Et.set(s, U), ht.set(s, w), lt.set(s, k), Z > 0 && St.set(s, Z), K > 0 && dt.set(s, K), rt.set(s, { type: ot, b: r || void 0, h: e || void 0, d: ot === "circ" || ot === "pipe" ? e : void 0, tw: A || void 0, tf: m || void 0, r: t.R, name: a });
  }
  const At = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  for (const [s, a] of ct) {
    const t = H.get(a);
    if (!t) continue;
    At.set(s, t.thickness);
    const l = I.get(t.material);
    l && (j.set(s, l.E), pt.set(s, l.G), Tt.set(s, l.nu), l.density !== void 0 && n.set(s, l.density)), at.set(s, t.modelingType === "ShellThin" ? 1 : 0);
  }
  const E = /* @__PURE__ */ new Map();
  for (const [s, a] of c) {
    const t = S.get(s);
    if (t === void 0) continue;
    const l = [false, false, false, false, false, false];
    for (const e of a) e === "UX" && (l[0] = true), e === "UY" && (l[1] = true), e === "UZ" && (l[2] = true), e === "RX" && (l[3] = true), e === "RY" && (l[4] = true), e === "RZ" && (l[5] = true);
    E.set(t, l);
  }
  const u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
  for (let s = 0; s < W.length; s++) d.set(`${W[s]}@${tt[s]}`, s);
  for (const s of G) {
    const a = d.get(`${s.line}@${s.story}`);
    if (a === void 0) continue;
    const [t, l] = F[a], e = p[t], r = p[l], m = Math.sqrt((r[0] - e[0]) ** 2 + (r[1] - e[1]) ** 2 + (r[2] - e[2]) ** 2);
    if (m < 1e-10) continue;
    const A = s.val * m / 2;
    let x = 0, U = 0, w = 0;
    s.dir === "GRAV" || s.dir === "GRAVITY" ? w = -A : s.dir === "X" ? x = A : s.dir === "Y" ? U = A : s.dir === "Z" && (w = -A);
    for (const k of [t, l]) {
      const Z = u.get(k) || [0, 0, 0, 0, 0, 0];
      Z[0] += x, Z[1] += U, Z[2] += w, u.set(k, Z);
    }
  }
  const D = /* @__PURE__ */ new Map();
  for (const [s, a] of st) {
    const t = P.get(a);
    if (!t) continue;
    const l = I.get(t.material);
    (l == null ? void 0 : l.density) && D.set(s, l.density);
  }
  for (const [s, a] of n) D.set(s, a);
  for (const [s, a] of it) {
    const t = u.get(s) || [0, 0, 0, 0, 0, 0];
    u.set(s, [t[0] + a[0], t[1] + a[1], t[2] + a[2], t[3] + a[3], t[4] + a[4], t[5] + a[5]]);
  }
  return { units: O, stories: N.reverse(), materials: I, frameSections: P, nodes: p, nodeNames: y, nodeNameToIdx: S, elements: F, elementNames: W, elementTypes: Q, elementStories: tt, elementSections: st, nodeInputs: { supports: E, loads: u }, elementInputs: { elasticities: j, shearModuli: pt, areas: et, momentsOfInertiaZ: Et, momentsOfInertiaY: ht, torsionalConstants: lt, shearAreasY: St, shearAreasZ: dt, rigidOffsets: ut, momentReleases: ft, densities: D, sectionShapes: rt, thicknesses: At, poissonsRatios: Tt, plateFormulations: at }, sectionShapes: rt, grids: _, info: { nNodes: p.length, nFrames: F.length, nAreas: M.length, title: $ }, rawSections: h };
}
function Y(R) {
  return R && parseFloat(R) || 0;
}
function It(R) {
  const g = /* @__PURE__ */ new Map(), O = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let N;
  for (; (N = O.exec(R)) !== null; ) g.set(N[1], N[2] !== void 0 ? N[2] : N[3]);
  return g;
}
function Ct(R) {
  const g = R.split(/\r?\n/);
  return g.some((N) => N.trim().startsWith("TABLE:")) ? gt(g) : Nt(g);
}
function gt(R) {
  var _a, _b, _c, _d, _e, _f;
  const g = [];
  let O = "";
  for (const _ of R) {
    const $ = _.trimEnd();
    $.endsWith("_") ? O += $.slice(0, -1) + " " : (O += $, g.push(O), O = "");
  }
  O && g.push(O);
  const N = { force: "KN", length: "m" };
  let I = "UX,UY,UZ,RX,RY,RZ";
  const P = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), c = [], T = [], G = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), V = [];
  let b = "";
  for (const _ of g) {
    const $ = _.trim();
    if (!$ || $.startsWith(";") || $.startsWith("File ")) continue;
    if ($.startsWith("TABLE:")) {
      const h = $.match(/TABLE:\s+"(.+?)"/);
      b = h ? h[1].toUpperCase() : "";
      continue;
    }
    if ($ === "END TABLE DATA") {
      b = "";
      continue;
    }
    const f = It($);
    switch (b) {
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
          i.E = Y(f.get("E1")), i.G = Y(f.get("G12")), i.nu = Y(f.get("U12")), i.density = Y(f.get("UnitMass")), P.set(h, i);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const h = f.get("Material");
        h && P.has(h) && (P.get(h).fy = Y(f.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const h = f.get("SectionName");
        h && z.set(h, { material: f.get("Material") || "", shape: f.get("Shape") || "Rectangular", D: Y(f.get("t3")), B: Y(f.get("t2")), TF: Y(f.get("tf")), TW: Y(f.get("tw")), A: Y(f.get("Area")), Iz: Y(f.get("I33")), Iy: Y(f.get("I22")), J: Y(f.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const h = f.get("Section");
        h && B.set(h, { material: f.get("Material") || "", type: f.get("Type") || "Shell", thickness: Y(f.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const h = f.get("Joint");
        if (h) {
          const i = Y(f.get("XorR")), o = Y(f.get("Y")), p = Y(f.get("Z"));
          M.set(h, [i, o, p]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const h = f.get("Frame"), i = f.get("JointI"), o = f.get("JointJ");
        h && i && o && c.push({ name: h, j1: i, j2: o });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const h = f.get("Area");
        if (h) {
          const i = parseInt(f.get("NumJoints") || "4"), o = [];
          for (let p = 1; p <= i; p++) {
            const y = f.get(`Joint${p}`);
            y && o.push(y);
          }
          o.length >= 3 && T.push({ name: h, joints: o });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const h = f.get("Joint");
        if (h) {
          const i = [((_a = f.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = f.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = f.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = f.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = f.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = f.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          G.set(h, i);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const h = f.get("Frame"), i = f.get("AnalSect");
        h && i && v.set(h, i);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const h = f.get("Area"), i = f.get("Section");
        h && i && H.set(h, i);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const h = f.get("Joint");
        h && V.push({ joint: h, fx: Y(f.get("F1")), fy: Y(f.get("F2")), fz: Y(f.get("F3")), mx: Y(f.get("M1")), my: Y(f.get("M2")), mz: Y(f.get("M3")) });
        break;
      }
    }
  }
  return Mt(N, I, P, z, B, M, c, T, G, v, H, V);
}
function Nt(R) {
  const g = { force: "KN", length: "m" };
  let O = "UX,UY,UZ,RX,RY,RZ";
  const N = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), B = [], M = [], c = /* @__PURE__ */ new Map(), T = [];
  let G = "", v = "";
  for (const b of R) {
    const _ = b.trim();
    if (!_ || _.startsWith(";")) continue;
    if (!b.startsWith(" ") && !b.startsWith("	")) {
      const h = _.toUpperCase();
      if (h === "END") break;
      h.startsWith("SHELL SECTION") ? G = "SHELL SECTION" : h.startsWith("FRAME SECTION") ? G = "FRAME SECTION" : G = h.split(/\s+/)[0];
      continue;
    }
    const $ = It(_), f = _.split(/\s+/);
    switch (G) {
      case "SYSTEM": {
        const h = $.get("DOF");
        h && (O = h);
        const i = $.get("LENGTH");
        i && (g.length = i);
        const o = $.get("FORCE");
        o && (g.force = o);
        break;
      }
      case "JOINT": {
        const h = f[0];
        z.set(h, [Y($.get("X")), Y($.get("Y")), Y($.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const h = $.get("ADD"), i = $.get("DOF");
        if (h && i) {
          const o = i.split(","), p = [false, false, false, false, false, false];
          for (const y of o) {
            const S = y.toUpperCase();
            (S === "UX" || S === "U1") && (p[0] = true), (S === "UY" || S === "U2") && (p[1] = true), (S === "UZ" || S === "U3") && (p[2] = true), (S === "RX" || S === "R1") && (p[3] = true), (S === "RY" || S === "R2") && (p[4] = true), (S === "RZ" || S === "R3") && (p[5] = true);
          }
          c.set(h, p);
        }
        break;
      }
      case "MATERIAL": {
        const h = $.get("NAME");
        if (h) v = h, N.set(h, { E: 0, nu: 0, G: 0 });
        else if (v) {
          const i = N.get(v), o = $.get("E");
          o && (i.E = Y(o));
          const p = $.get("U");
          p && (i.nu = Y(p)), i.G = i.E / (2 * (1 + i.nu));
          const y = $.get("M");
          y && (i.density = Y(y));
        }
        break;
      }
      case "SHELL": {
        const h = f[0], i = $.get("J");
        $.get("SEC"), i && M.push({ name: h, joints: i.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const h = $.get("NAME");
        h && P.set(h, { material: $.get("MAT") || "", type: $.get("TYPE") || "Shell", thickness: Y($.get("TH")) });
        break;
      }
      case "FRAME": {
        const h = f[0], i = $.get("J");
        if (i) {
          const o = i.split(",");
          o.length >= 2 && B.push({ name: h, j1: o[0], j2: o[1] });
        }
        break;
      }
      case "LOAD": {
        const h = $.get("ADD");
        h && T.push({ joint: h, fx: Y($.get("UX")), fy: Y($.get("UY")), fz: Y($.get("UZ")), mx: Y($.get("MX")), my: Y($.get("MY")), mz: Y($.get("MZ")) });
        break;
      }
    }
  }
  return Mt(g, O, N, I, P, z, B, M, c, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), T);
}
function Mt(R, g, O, N, I, P, z, B, M, c, T, G) {
  var _a;
  const v = [], H = /* @__PURE__ */ new Map(), V = [];
  for (const [S, L] of P) H.set(S, V.length), v.push(S), V.push(L);
  const b = [], _ = [], $ = /* @__PURE__ */ new Map();
  for (const S of z) {
    const L = H.get(S.j1), C = H.get(S.j2);
    if (L !== void 0 && C !== void 0) {
      const X = b.length;
      b.push([L, C]), _.push(S.name);
      const F = c.get(S.name);
      F && $.set(X, F);
    }
  }
  const f = b.length;
  for (const S of B) {
    const L = S.joints.map((C) => H.get(C)).filter((C) => C !== void 0);
    if (L.length >= 3) {
      const C = b.length;
      b.push(L), _.push(S.name);
      const X = T.get(S.name);
      X && $.set(C, X);
    }
  }
  const h = b.length - f, i = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, o = /* @__PURE__ */ new Map(), p = O.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let S = 0; S < b.length; S++) {
    const L = $.get(S), C = L ? N.get(L) : null, X = L ? I.get(L) : null;
    if (C || b[S].length === 2) {
      const F = C || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, W = O.get(F.material) || p, Q = W.E || p.E, tt = W.nu || 0.3, st = W.G || Q / (2 * (1 + tt));
      i.elasticities.set(S, Q), i.shearModuli.set(S, st), i.areas.set(S, F.A || F.D * F.B), i.momentsOfInertiaZ.set(S, F.Iz || F.B * F.D ** 3 / 12), i.momentsOfInertiaY.set(S, F.Iy || F.D * F.B ** 3 / 12), i.torsionalConstants.set(S, F.J || 0), i.densities.set(S, W.density || 0), ((_a = F.shape) == null ? void 0 : _a.includes("Wide Flange")) || F.shape === "I" ? o.set(S, { type: "I", b: F.B, h: F.D, name: L || "I-section" }) : o.set(S, { type: "rect", b: F.B, h: F.D });
    } else if (X) {
      const F = O.get(X.material) || p, W = F.E || p.E, Q = F.nu || 0.2, tt = F.G || W / (2 * (1 + Q));
      i.elasticities.set(S, W), i.shearModuli.set(S, tt), i.thicknesses.set(S, X.thickness), i.poissonsRatios.set(S, Q), i.densities.set(S, F.density || 0);
    }
  }
  const y = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [S, L] of M) {
    const C = H.get(S);
    C !== void 0 && y.supports.set(C, L);
  }
  for (const S of G) {
    const L = H.get(S.joint);
    if (L !== void 0) {
      const C = y.forces.get(L) || [0, 0, 0, 0, 0, 0];
      C[0] += S.fx, C[1] += S.fy, C[2] += S.fz, C[3] += S.mx, C[4] += S.my, C[5] += S.mz, y.forces.set(L, C);
    }
  }
  return { units: R, dof: g, materials: O, frameSections: N, shellSections: I, nodes: V, nodeNames: v, nodeNameToIdx: H, elements: b, elementNames: _, elementSections: $, nodeInputs: y, elementInputs: i, sectionShapes: o, info: { nNodes: V.length, nFrames: f, nShells: h, title: `SAP2000 (${f} frames, ${h} shells)` } };
}
function yt(R) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: g, elements: O, nodeInputs: N, elementInputs: I } = R, P = R.units || { force: "KN", length: "m" }, z = R.title || "Awatif Model", B = [], M = (i) => B.push(i), c = () => B.push(" ");
  M(`File ${z}.$2k was saved on m/d/yy at h:mm:ss`), c(), M('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), M("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), c();
  const T = [], G = [];
  if (O.forEach((i, o) => {
    i.length === 2 ? T.push(o) : G.push(o);
  }), T.length > 0) {
    M('TABLE:  "CONNECTIVITY - FRAME"');
    for (const i of T) {
      const o = O[i];
      M(`   Frame=${i + 1}   JointI=${o[0] + 1}   JointJ=${o[1] + 1}   IsCurved=No`);
    }
    c();
  }
  if (G.length > 0) {
    M('TABLE:  "CONNECTIVITY - AREA"');
    for (const i of G) {
      const o = O[i], p = o.map((y, S) => `Joint${S + 1}=${y + 1}`).join("   ");
      M(`   Area=${i + 1}   NumJoints=${o.length}   ${p}`);
    }
    c();
  }
  M('TABLE:  "COORDINATE SYSTEMS"'), M("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), c(), M('TABLE:  "DATABASE FORMAT TYPES"'), M("   UnitsCurr=Yes   OverrideE=No"), c();
  const v = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map();
  for (const i of T) {
    const o = ((_a = I.areas) == null ? void 0 : _a.get(i)) || 0, p = ((_b = I.momentsOfInertiaZ) == null ? void 0 : _b.get(i)) || 0, y = ((_c = I.momentsOfInertiaY) == null ? void 0 : _c.get(i)) || 0, S = ((_d = I.torsionalConstants) == null ? void 0 : _d.get(i)) || 0, L = ((_e = I.elasticities) == null ? void 0 : _e.get(i)) || 0, C = `MAT_${Math.round(L)}`, X = `A${o.toPrecision(6)}_Iz${p.toPrecision(6)}`;
    if (!v.has(X)) {
      let W = 0.3, Q = 0.3;
      o > 0 && p > 0 && (W = Math.sqrt(12 * p / o), Q = o / W), v.set(X, { A: o, Iz: p, Iy: y, J: S, b: Q, h: W, matKey: C });
    }
    const F = [...v.keys()].indexOf(X) + 1;
    H.set(i, `SEC${F}`);
  }
  if (T.length > 0) {
    M('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const i of T) {
      const o = H.get(i) || "SEC1";
      M(`   Frame=${i + 1}   AutoSelect=N.A.   AnalSect=${o}   MatProp=Default`);
    }
    c();
  }
  if (v.size > 0) {
    M('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let i = 0;
    for (const [, o] of v) {
      i++;
      const p = o.A * 5 / 6;
      M(`   SectionName=SEC${i}   Material=${o.matKey}   Shape=Rectangular   t3=${J(o.h)}   t2=${J(o.b)}   Area=${J(o.A)}   TorsConst=${J(o.J)}   I33=${J(o.Iz)}   I22=${J(o.Iy)}   I23=0   AS2=${J(p)}   AS3=${J(p)} _`), M("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    c();
  }
  const V = !!R.layeredSection && G.length > 0, b = R.layeredSection, _ = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map();
  if (!V) for (const i of G) {
    const o = ((_f = I.thicknesses) == null ? void 0 : _f.get(i)) || 0.1, p = ((_g = I.elasticities) == null ? void 0 : _g.get(i)) || 0, y = `MAT_${Math.round(p)}`, S = `t${o.toPrecision(6)}`;
    _.has(S) || _.set(S, { t: o, matKey: y });
    const L = [..._.keys()].indexOf(S) + 1;
    $.set(i, `SSEC${L}`);
  }
  if (G.length > 0) {
    M('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const i of G) {
      const o = V ? b.name : $.get(i) || "SSEC1";
      M(`   Area=${i + 1}   Section=${o}   MatProp=Default`);
    }
    if (c(), M('TABLE:  "AREA SECTION PROPERTIES"'), V) {
      const i = b, o = ((_h = i.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      M(`   Section=${i.name}   Material=${o}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${J(i.totalThickness)}   BendThick=${J(i.totalThickness)}   Color=Magenta`);
    } else {
      let i = 0;
      for (const [, o] of _) i++, M(`   Section=SSEC${i}   Material=${o.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${J(o.t)}   BendThick=${J(o.t)}   Color=Cyan`);
    }
    if (c(), V) {
      M('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const i = b;
      for (const o of i.layers) {
        const p = o.angle ?? 0, y = o.numIntPts ?? 3;
        M(`   Section=${i.name}   LayerName=${o.name}   Distance=${J(o.distance)}   Thickness=${J(o.thickness)}   Type=Shell   NumIntPts=${y}   Material=${o.material}   MatAngle=${J(p * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      c();
    }
  }
  M('TABLE:  "JOINT COORDINATES"');
  for (let i = 0; i < g.length; i++) {
    const o = g[i];
    M(`   Joint=${i + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${J(o[0])}   Y=${J(o[1])}   Z=${J(o[2])}   SpecialJt=No`);
  }
  if (c(), N.supports && N.supports.size > 0) {
    M('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [i, o] of N.supports) {
      if (!o.some((y) => y)) continue;
      const p = (y) => y ? "Yes" : "No";
      M(`   Joint=${i + 1}   U1=${p(o[0])}   U2=${p(o[1])}   U3=${p(o[2])}   R1=${p(o[3])}   R2=${p(o[4])}   R3=${p(o[5])}`);
    }
    c();
  }
  const f = R.selfWtMult ?? 1;
  if (M('TABLE:  "LOAD PATTERN DEFINITIONS"'), M(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${f}`), c(), M('TABLE:  "LOAD CASE DEFINITIONS"'), M('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), c(), M('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), M('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), c(), N.loads && N.loads.size > 0) {
    M('TABLE:  "JOINT LOADS - FORCE"');
    for (const [i, o] of N.loads) o.some((p) => Math.abs(p) > 1e-12) && M(`   Joint=${i + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${J(o[0])}   F2=${J(o[1])}   F3=${J(o[2])}   M1=${J(o[3])}   M2=${J(o[4])}   M3=${J(o[5])}`);
    c();
  }
  const h = /* @__PURE__ */ new Map();
  for (let i = 0; i < O.length; i++) {
    const o = ((_i = I.elasticities) == null ? void 0 : _i.get(i)) || 0, p = ((_j = I.shearModuli) == null ? void 0 : _j.get(i)) || 0, y = o > 0 && p > 0 ? Math.max(0, Math.min(0.5, o / (2 * p) - 1)) : 0.2, S = ((_k = I.densities) == null ? void 0 : _k.get(i)) || 0, L = `MAT_${Math.round(o)}`;
    h.has(L) || h.set(L, { E: o, nu: y, G: p, rho: S });
  }
  M('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [i] of h) M(`   Material=${i}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  c(), M('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [i, o] of h) M(`   Material=${i}   UnitWeight=${J(o.rho * 9.81)}   UnitMass=${J(o.rho)}   E1=${J(o.E)}   G12=${J(o.G)}   U12=${J(o.nu)}   A1=9.9E-06`);
  c(), M('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [i] of h) M(`   Material=${i}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return c(), M('TABLE:  "PROGRAM CONTROL"'), M(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${P.force}, ${P.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), c(), M("END TABLE DATA"), M(""), B.join(`\r
`);
}
function J(R) {
  return R === 0 || Math.abs(R) < 1e-15 ? "0" : Math.abs(R) >= 1e6 || Math.abs(R) < 1e-3 && Math.abs(R) > 0 ? R.toExponential(8) : parseFloat(R.toPrecision(10)).toString();
}
function Dt(R) {
  const { nodes: g, elements: O, nodeInputs: N, elementInputs: I, title: P, e2kModel: z } = R, B = z == null ? void 0 : z.rawSections;
  return B && B.size > 0 ? Ot(B) : $t(R);
}
function Ot(R, g) {
  const O = [], N = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  O.push("$ File exported from Awatif FEM Studio (round-trip)"), O.push("");
  for (const I of N) {
    const P = R.get(I);
    if (!(!P || P.length === 0)) {
      O.push(`$ ${I}`);
      for (const z of P) O.push(z);
      O.push("");
    }
  }
  for (const [I, P] of R) if (!N.includes(I) && P.length !== 0) {
    O.push(`$ ${I}`);
    for (const z of P) O.push(z);
    O.push("");
  }
  return O.push("  END"), O.push("$ END OF MODEL FILE"), O.join(`\r
`);
}
function $t(R) {
  var _a, _b, _c, _d, _e;
  const { nodes: g, elements: O, nodeInputs: N, elementInputs: I, title: P, units: z } = R, B = (z == null ? void 0 : z.force) || "Tonf", M = (z == null ? void 0 : z.length) || "m", c = [], T = (n) => Math.round(n * 1e4) / 1e4, G = (() => {
    const n = (B || "Tonf").toLowerCase();
    return n === "tonf" || n === "tonf-f" ? 1 / 9.80665 : n === "kn" || n === "kn-f" ? 1 : n === "kgf" || n === "kg" ? 1 / 980665e-8 : n === "kip" || n === "kips" ? 1 / 4.44822 : 1;
  })(), v = (n) => n * G, H = (n) => n * G, V = (n) => n * G, b = /* @__PURE__ */ new Date(), _ = `${b.getMonth() + 1}/${b.getDate()}/${b.getFullYear()}  ${b.getHours()}:${String(b.getMinutes()).padStart(2, "0")}:${String(b.getSeconds()).padStart(2, "0")}`;
  c.push(`$ File   "Hekatan_export.e2k"  saved ${_} in ETABS 22.6.0`), c.push(""), c.push("$ PROGRAM INFORMATION"), c.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), c.push(""), c.push("$ CONTROLS"), c.push(`  UNITS  "${B}"  "${M}"  "C"  `), c.push('  TITLE1  "Hekatan Struct export"  '), P && c.push(`  TITLE2  "${P}"  `), c.push("  PREFERENCE  MERGETOL 0.001"), c.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), c.push("");
  const $ = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set();
  g.forEach((n) => {
    $.add(T(n[0])), f.add(T(n[1]));
  });
  const h = [...$].sort((n, E) => n - E), i = [...f].sort((n, E) => n - E);
  c.push("$ GRIDS"), c.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), h.forEach((n, E) => {
    const u = E < 26 ? String.fromCharCode(65 + E) : String.fromCharCode(65 + E % 26).repeat(Math.floor(E / 26) + 1);
    c.push(`  GRID "G1"  LABEL "${u}"  DIR "X"  COORD ${n}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), i.forEach((n, E) => {
    c.push(`  GRID "G1"  LABEL "${E + 1}"  DIR "Y"  COORD ${n}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), c.push("");
  const o = /* @__PURE__ */ new Set();
  g.forEach((n) => o.add(T(n[2])));
  let p = [...o].sort((n, E) => n - E);
  if (p.length === 1) {
    const n = p[0];
    n > 0 ? p = [0, n] : p = [0, 4];
  }
  const y = [], S = /* @__PURE__ */ new Map();
  y.push("Base"), S.set(p[0], "Base");
  for (let n = 1; n < p.length; n++) {
    const E = `Story${n}`;
    y.push(E), S.set(p[n], E);
  }
  o.size === 1 && o.has(0) && S.set(0, y[1]), c.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let n = p.length - 1; n >= 1; n--) c.push(`  STORY "${y[n]}"  HEIGHT ${T(p[n] - p[n - 1])} MASTERSTORY "Yes"  `);
  p.length > 0 && c.push(`  STORY "Base"  ELEV ${p[0]} `), c.push(""), O.some((n) => n.length === 4), c.push("$ DIAPHRAGM NAMES"), c.push('  DIAPHRAGM "D1"    TYPE RIGID'), c.push(""), c.push("$ MATERIAL PROPERTIES");
  const L = /* @__PURE__ */ new Set();
  (_a = I.elasticities) == null ? void 0 : _a.forEach((n) => L.add(n));
  const C = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map();
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
  for (const n of L) {
    const E = n >= 1e8, u = E ? `Steel_${++F}` : `Conc_${++W}`;
    C.set(n, u), X.set(n, E);
    const d = tt.get(n) ?? (E ? 76.97 : 24), D = H(n), s = V(d), a = [];
    (_b = I.poissonsRatios) == null ? void 0 : _b.forEach((e, r) => {
      var _a2;
      ((_a2 = I.elasticities) == null ? void 0 : _a2.get(r)) === n && a.push(e);
    });
    const t = a.length > 0 ? a.reduce((e, r) => e + r, 0) / a.length : E ? 0.3 : 0.2, l = E ? 117e-7 : 1e-5;
    if (E) {
      c.push(`  MATERIAL  "${u}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${T(s)}`), c.push(`  MATERIAL  "${u}"    SYMTYPE "Isotropic"  E ${T(D)}  U ${t}  A ${l}`);
      const e = 345e3, r = 45e4;
      c.push(`  MATERIAL  "${u}"  FY ${T(H(e))}  FU ${T(H(r))}  FYE ${T(H(e * 1.1))}  FUE ${T(H(r * 1.1))}`);
    } else c.push(`  MATERIAL  "${u}"    TYPE "Concrete"    WEIGHTPERVOLUME ${T(s)}`), c.push(`  MATERIAL  "${u}"    SYMTYPE "Isotropic"  E ${T(D)}  U ${t}  A ${l}`), c.push(`  MATERIAL  "${u}"    FC ${T(H(24e3))}`);
  }
  c.push(""), c.push("$ FRAME SECTIONS");
  const st = /* @__PURE__ */ new Set(), ct = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), it = 0.05;
  O.forEach((n, E) => {
    var _a2, _b2, _c2, _d2, _e2, _f;
    if (n.length !== 2) return;
    const u = (_a2 = I.sectionShapes) == null ? void 0 : _a2.get(E), d = ((_b2 = I.elasticities) == null ? void 0 : _b2.get(E)) ?? 0, D = C.get(d) || "Conc_1", s = X.get(d) ?? d >= 1e8, a = ((_c2 = I.areas) == null ? void 0 : _c2.get(E)) ?? 0, t = ((_d2 = I.momentsOfInertiaY) == null ? void 0 : _d2.get(E)) ?? 0;
    (_e2 = I.momentsOfInertiaZ) == null ? void 0 : _e2.get(E), (_f = I.torsionalConstants) == null ? void 0 : _f.get(E);
    let l = (u == null ? void 0 : u.type) || "rect", e = (u == null ? void 0 : u.h) ?? 0, r = (u == null ? void 0 : u.b) ?? 0, m = (u == null ? void 0 : u.d) ?? 0;
    const A = (u == null ? void 0 : u.tf) ?? 0, x = (u == null ? void 0 : u.tw) ?? 0;
    e <= 0 && r <= 0 && m <= 0 && a > 0 && (t > 0 ? (e = Math.sqrt(12 * t / a), r = a / e) : e = r = Math.sqrt(a), (!isFinite(e) || e < it) && (e = it), (!isFinite(r) || r < it) && (r = it), l = "rect"), e <= 0 && r <= 0 && m <= 0 && (e = 0.3, r = 0.3, l = "rect");
    const U = `${l}_${T(e)}_${T(r)}_${T(m)}_${T(A)}_${T(x)}_${D}`;
    (u == null ? void 0 : u.name) && !q.has(U) && q.set(U, u.name);
    let w = q.get(U);
    if (!w) {
      const K = s ? "S" : "C";
      l === "rect" ? w = `${K}_R${Math.round(r * 100)}x${Math.round(e * 100)}` : l === "circ" ? w = `${K}_C_D${Math.round(m * 100)}` : l === "I" ? w = `${K}_I${Math.round(e * 100)}x${Math.round(r * 100)}` : l === "HSS" ? w = `${K}_HSS${Math.round(r * 100)}x${Math.round(e * 100)}x${Math.round(x * 1e3)}` : w = `${K}_Sec${st.size + 1}`, q.set(U, w);
    }
    if (ct.set(E, w), st.has(w)) return;
    st.add(w);
    let k;
    l === "I" ? k = "Steel I/Wide Flange" : l === "HSS" ? k = "Steel Tube" : l === "CFT" ? k = "Filled Steel Tube" : l === "pipe" ? k = "Steel Pipe" : l === "L" ? k = "Steel Angle" : l === "C" ? k = "Steel Channel" : l === "2C" ? k = "Steel Double Channel" : l === "circ" ? k = "Concrete Circle" : k = "Concrete Rectangular";
    let Z = `  FRAMESECTION  "${w}"  MATERIAL "${D}"  SHAPE "${k}"`;
    e && (Z += `  D ${T(e)}`), r && (Z += `  B ${T(r)}`), m && !e && (Z += `  D ${T(m)}`), A && (Z += `  TF ${T(A)}`), x && (Z += `  TW ${T(x)}`), c.push(Z);
  }), c.push("");
  const j = /* @__PURE__ */ new Map();
  let pt = 0;
  g.forEach((n) => {
    const E = `${T(n[0])},${T(n[1])}`;
    j.has(E) || j.set(E, `${++pt}`);
  }), c.push("$ POINT COORDINATES");
  for (const [n, E] of j) {
    const [u, d] = n.split(",").map(Number);
    c.push(`  POINT "${E}"  ${u} ${d} `);
  }
  c.push("");
  const et = (n) => {
    const E = g[n], u = `${T(E[0])},${T(E[1])}`;
    return { pt: j.get(u) || "1", story: S.get(T(E[2])) || "Base" };
  }, St = (n) => {
    var _a2, _b2, _c2, _d2;
    const E = [], u = (_a2 = R.propertyModifiers) == null ? void 0 : _a2.get(n);
    u && u.some((a) => Math.abs(a - 1) > 1e-9) && E.push(`PROPMODIFIERS "${u.map((a) => T(a)).join(" ")}"`);
    const d = (_b2 = I.momentReleases) == null ? void 0 : _b2.get(n);
    if (d && d.some((a) => a)) {
      const a = [];
      d.length === 12 ? (d[0] && a.push("PI"), d[1] && a.push("V2I"), d[2] && a.push("V3I"), d[3] && a.push("TI"), d[4] && a.push("M2I"), d[5] && a.push("M3I"), d[6] && a.push("PJ"), d[7] && a.push("V2J"), d[8] && a.push("V3J"), d[9] && a.push("TJ"), d[10] && a.push("M2J"), d[11] && a.push("M3J")) : d.length === 6 && (d[0] && a.push("TI"), d[1] && a.push("M2I"), d[2] && a.push("M3I"), d[3] && a.push("TJ"), d[4] && a.push("M2J"), d[5] && a.push("M3J")), a.length > 0 && E.push(`RELEASE "${a.join(" ")}"`);
    }
    const D = (_c2 = I.insertionPoints) == null ? void 0 : _c2.get(n);
    D && (Math.abs(D[0]) > 1e-9 || Math.abs(D[1]) > 1e-9) && E.push(`LATEROFFSET ${T(D[0])} TRANSOFFSET ${T(D[1])}`);
    const s = (_d2 = I.rigidOffsets) == null ? void 0 : _d2.get(n);
    return s && (Math.abs(s[0]) > 1e-9 || Math.abs(s[1]) > 1e-9) && E.push(`LENGTHOFFI ${T(s[0])} LENGTHOFFJ ${T(s[1])} RIGIDZONE 0.5`), E.length > 0 ? ` ${E.join(" ")} ` : "";
  }, dt = [], ut = /* @__PURE__ */ new Set(), ft = /* @__PURE__ */ new Map();
  O.forEach((n, E) => {
    if (n.length !== 2) return;
    const u = mt(g, n);
    if (u === "BEAM") return;
    const d = g[n[0]][2] <= g[n[1]][2] ? n[0] : n[1], D = g[n[0]][2] <= g[n[1]][2] ? n[1] : n[0];
    if (Math.abs(g[d][0] - g[D][0]) > 1e-6 || Math.abs(g[d][1] - g[D][1]) > 1e-6) return;
    const s = et(d), a = ct.get(E) || `Sec_${E}`, t = `${s.pt}_${a}_${u}`;
    ft.has(t) || ft.set(t, []), ft.get(t).push({ i: E, bot: d, top: D, zBot: T(g[d][2]), zTop: T(g[D][2]), planPt: s.pt, secName: a, type: u });
  }), ft.forEach((n, E) => {
    n.sort((d, D) => d.zBot - D.zBot);
    let u = 0;
    for (let d = 1; d <= n.length; d++) if (d === n.length || Math.abs(n[d].zBot - n[d - 1].zTop) > 1e-6) {
      const s = n.slice(u, d);
      s.length >= 1 && (dt.push({ elemIndices: s.map((a) => a.i), planPt: s[0].planPt, bottomNodeIdx: s[0].bot, topNodeIdx: s[s.length - 1].top, secName: s[0].secName, type: s[0].type, nSegments: s.length }), s.forEach((a) => ut.add(a.i))), u = d;
    }
  }), c.push("$ LINE CONNECTIVITIES");
  const Et = [];
  dt.forEach((n, E) => {
    const u = `C${E + 1}`, d = et(n.topNodeIdx);
    et(n.bottomNodeIdx);
    const D = T(g[n.topNodeIdx][2]), s = T(g[n.bottomNodeIdx][2]), a = p.indexOf(D), t = p.indexOf(s), l = Math.max(1, a - t), e = St(n.elemIndices[0]);
    c.push(`  LINE  "${u}"  ${n.type}  "${d.pt}"  "${d.pt}"  ${l}`), Et.push(`  LINEASSIGN  "${u}"  "${d.story}"  SECTION "${n.secName}" ${e} RIGIDZONE 0.5 MAXSTASPC 0.5 MINNUMSTA ${n.nSegments} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  }), O.forEach((n, E) => {
    if (n.length !== 2 || ut.has(E)) return;
    const u = mt(g, n), d = ct.get(E) || `Sec_${E}`, D = St(E);
    if (u === "BEAM") {
      const s = et(n[0]), a = et(n[1]);
      c.push(`  LINE  "E${E + 1}"  BEAM  "${s.pt}"  "${a.pt}"  0`), Et.push(`  LINEASSIGN  "E${E + 1}"  "${s.story}"  SECTION "${d}" ${D} RIGIDZONE 0.5 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const s = g[n[0]][2] <= g[n[1]][2] ? n[0] : n[1], a = g[n[0]][2] <= g[n[1]][2] ? n[1] : n[0], t = et(a), l = T(g[s][2]), e = T(g[a][2]), r = p.indexOf(l), m = p.indexOf(e), A = Math.max(1, m >= 0 && r >= 0 ? m - r : 1);
      c.push(`  LINE  "E${E + 1}"  ${u}  "${t.pt}"  "${t.pt}"  ${A}`), Et.push(`  LINEASSIGN  "E${E + 1}"  "${t.story}"  SECTION "${d}" ${D} RIGIDZONE 0.5 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    }
  }), c.push("");
  const ht = R.weightMode ?? "auto", lt = /* @__PURE__ */ new Set();
  c.push("$ POINT ASSIGNS"), (_c = N.supports) == null ? void 0 : _c.forEach((n, E) => {
    const u = [];
    if (n[0] && u.push("UX"), n[1] && u.push("UY"), n[2] && u.push("UZ"), n[3] && u.push("RX"), n[4] && u.push("RY"), n[5] && u.push("RZ"), u.length > 0) {
      const d = et(E), D = d.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      c.push(`  POINTASSIGN  "${d.pt}"  "${d.story}"  RESTRAINT "${u.join(" ")}" ${D} `), lt.add(`${d.pt}@${d.story}`);
    }
  }), dt.forEach((n) => {
    const E = et(n.topNodeIdx), u = `${E.pt}@${E.story}`;
    !lt.has(u) && E.story !== "Base" && (c.push(`  POINTASSIGN  "${E.pt}"  "${E.story}"  DIAPH "D1"  `), lt.add(u));
  }), ht === "manual" && N.loads && N.loads.forEach((n, E) => {
    const u = et(E), d = `${u.pt}@${u.story}`;
    lt.has(d) || (c.push(`  POINTASSIGN  "${u.pt}"  "${u.story}"  DIAPH "DISCONNECTED"  `), lt.add(d));
  }), c.push(""), c.push("$ LINE ASSIGNS"), Et.forEach((n) => c.push(n)), c.push("");
  const rt = [];
  O.forEach((n, E) => {
    if (n.length === 4) {
      const u = g[n[0]], d = g[n[1]], D = g[n[2]], s = [d[0] - u[0], d[1] - u[1], d[2] - u[2]], a = [D[0] - u[0], D[1] - u[1], D[2] - u[2]], t = s[1] * a[2] - s[2] * a[1], l = s[2] * a[0] - s[0] * a[2], e = s[0] * a[1] - s[1] * a[0], r = Math.sqrt(t * t + l * l + e * e), m = r > 1e-10 && Math.abs(e) / r < 0.5;
      rt.push({ idx: E, el: n, isWall: m });
    }
  });
  const At = (() => {
    for (const [n, E] of X) if (!E) return C.get(n);
    return C.values().next().value || "Conc_1";
  })();
  if (rt.some((n) => !n.isWall)) {
    c.push("$ SLAB PROPERTIES");
    const n = ((_d = I.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.15;
    c.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${At}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${T(n)} `), c.push("");
  }
  if (rt.some((n) => n.isWall)) {
    c.push("$ WALL PROPERTIES");
    const n = ((_e = I.thicknesses) == null ? void 0 : _e.values().next().value) ?? 0.2;
    c.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${At}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${T(n)} `), c.push("");
  }
  if (rt.length > 0) {
    c.push("$ AREA CONNECTIVITIES");
    const n = [];
    rt.forEach((E, u) => {
      const { el: d, isWall: D } = E, s = D ? `W${u + 1}` : `F${u + 1}`, a = D ? "PANEL" : "FLOOR", t = d.map((l) => et(l));
      if (D) {
        const l = g[d[0]][2] <= g[d[2]][2] ? 0 : 2, e = g[d[1]][2] <= g[d[3]][2] ? 1 : 3;
        c.push(`  AREA "${s}"  ${a}  4  "${t[l].pt}"  "${t[e].pt}"  "${t[e].pt}"  "${t[l].pt}"  1  1  0  0  `);
        const r = t[l === 0 ? 2 : 0].story;
        n.push(`  AREAASSIGN  "${s}"  "${r}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else c.push(`  AREA "${s}"  ${a}  4  "${t[0].pt}"  "${t[1].pt}"  "${t[2].pt}"  "${t[3].pt}"  0  0  0  0  `), n.push(`  AREAASSIGN  "${s}"  "${t[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
    }), c.push(""), c.push("$ AREA ASSIGNS"), n.forEach((E) => c.push(E)), c.push("");
  }
  const Tt = ht === "manual" ? 0 : 1;
  c.push("$ LOAD PATTERNS"), c.push(`  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  ${Tt}`), c.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), c.push("");
  const at = [];
  return N.loads && N.loads.size > 0 && N.loads.forEach((n, E) => {
    const [u, d, D] = n, s = et(E);
    Math.abs(u) > 1e-10 && at.push(`  POINTLOAD  "${s.pt}"  "${s.story}"  TYPE "FORCE"  LC "Dead"  FX ${T(v(u))}  FY 0  FZ 0`), Math.abs(d) > 1e-10 && at.push(`  POINTLOAD  "${s.pt}"  "${s.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY ${T(v(d))}  FZ 0`), ht === "manual" && Math.abs(D) > 1e-10 && at.push(`  POINTLOAD  "${s.pt}"  "${s.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY 0  FZ ${T(v(D))}`);
  }), N.moments && N.moments.size > 0 && N.moments.forEach((n, E) => {
    const [u, d, D] = n, s = et(E);
    Math.abs(u) > 1e-10 && at.push(`  POINTLOAD  "${s.pt}"  "${s.story}"  TYPE "MOMENT"  LC "Dead"  MX ${T(v(u))}  MY 0  MZ 0`), Math.abs(d) > 1e-10 && at.push(`  POINTLOAD  "${s.pt}"  "${s.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY ${T(v(d))}  MZ 0`), Math.abs(D) > 1e-10 && at.push(`  POINTLOAD  "${s.pt}"  "${s.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY 0  MZ ${T(v(D))}`);
  }), at.length > 0 && (c.push("$ POINT OBJECT LOADS"), at.forEach((n) => c.push(n)), c.push("")), c.push("$ ANALYSIS OPTIONS"), c.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), c.push('  PDELTA  METHOD "NONE"  '), c.push(""), c.push("$ MASS SOURCE"), c.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), c.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), c.push(""), c.push("$ LOAD CASES"), c.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), c.push('  LOADCASE "Dead"  LOADPAT  "Dead"  SF 1 '), c.push('  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), c.push('  LOADCASE "Live"  LOADPAT  "Live"  SF 1 '), c.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), c.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), c.push(""), c.push("$ LOAD COMBINATIONS"), c.push('  COMBO "1.4D"  TYPE "Linear Add"  '), c.push('  COMBO "1.4D"  LOADCASE  "Dead"  SF 1.4 '), c.push('  COMBO "1.2D+1.6L"  TYPE "Linear Add"  '), c.push('  COMBO "1.2D+1.6L"  LOADCASE  "Dead"  SF 1.2 '), c.push('  COMBO "1.2D+1.6L"  LOADCASE  "Live"  SF 1.6 '), c.push(""), c.push("  END"), c.push("$ END OF MODEL FILE"), c.join(`\r
`);
}
function mt(R, g) {
  const O = R[g[0]], N = R[g[1]], I = Math.abs(N[2] - O[2]), P = Math.sqrt((N[0] - O[0]) ** 2 + (N[1] - O[1]) ** 2), z = I > P * 0.5;
  return z && P > 0.01 ? "BRACE" : z ? "COLUMN" : "BEAM";
}
export {
  yt as a,
  Ct as b,
  Rt as c,
  Dt as e,
  Lt as p
};
