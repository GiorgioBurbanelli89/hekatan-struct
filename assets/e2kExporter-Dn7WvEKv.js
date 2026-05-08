function ht() {
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
  let N = false;
  const u = 0.9;
  function T(M, C) {
    var _a, _b, _c, _d;
    if (!M.frequencies || M.frequencies.length === 0) {
      g.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const G = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], U = [0, 0, 0, 0, 0, 0], E = M.frequencies.length;
    let n = -1, x = -1, z = -1, w = 0, H = 0;
    {
      const s = [0, 0, 0, 0, 0, 0];
      for (let r = 0; r < E; r++) {
        const O = ((_a = M.massParticipation) == null ? void 0 : _a[r]) || [0, 0, 0, 0, 0, 0];
        for (let c = 0; c < 6; c++) s[c] += O[c];
        n < 0 && s[0] >= u && (n = r + 1), x < 0 && s[1] >= u && (x = r + 1), z < 0 && s[0] >= u && s[1] >= u && (z = r + 1);
      }
      w = s[0], H = s[1];
    }
    let F = -1, B = -1, v = -1;
    const h = 0.1;
    for (let s = 0; s < E; s++) {
      const r = ((_b = M.massParticipation) == null ? void 0 : _b[s]) || [0, 0, 0, 0, 0, 0];
      F < 0 && r[0] > h && (F = s + 1), B < 0 && r[1] > h && (B = s + 1), v < 0 && r[5] > h && (v = s + 1);
    }
    const f = z > 0 ? `<span style="color:#0f0">\u2713 ASCE 7-22 \xA712.9.1.1 \u2014 90 % alcanzado en X e Y al modo ${z} de ${E}</span>` : n > 0 && x < 0 ? `<span style="color:#fa0">\u26A0 X cumple en modo ${n}, Y todav\xEDa en ${(H * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : x > 0 && n < 0 ? `<span style="color:#fa0">\u26A0 Y cumple en modo ${x}, X todav\xEDa en ${(w * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : `<span style="color:#f44">\u2717 ASCE 7-22 NO cumplido en ${E} modos \xB7 \u03A3Ux=${(w * 100).toFixed(1)} % \xB7 \u03A3Uy=${(H * 100).toFixed(1)} % \u2014 aumentar nModes</span>`, e = (() => {
      const s = (r, O) => {
        var _a2;
        if (r < 0) return `<span style="color:#f44">${O}: no encontrado en ${E} modos</span>`;
        const c = ((_a2 = M.massParticipation) == null ? void 0 : _a2[r - 1]) || [0, 0, 0, 0, 0, 0], y = O === "Ux" ? 0 : O === "Uy" ? 1 : 5, R = M.frequencies[r - 1] > 0 ? 1 / M.frequencies[r - 1] : 0;
        return `<span style="color:#0f0">${O}: modo ${r}, T=${R.toFixed(3)} s, MPF=${(c[y] * 100).toFixed(1)} %</span>`;
      };
      return `<div style="margin:4px 0; padding:4px 6px; background:rgba(0,255,255,0.05); border-left:2px solid #0ff; font-size:11px;">
  \u{1F3AF} <b>Modos s\xEDsmicos principales</b> (ASCE 7-22 \xA712.9.1):<br>
  ${s(F, "Ux")} \xB7 ${s(B, "Uy")} \xB7 ${s(v, "Rz")}
</div>`;
    })();
    let t = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${C.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
    if (t += '<div id="modal-body" style="padding:0 12px 10px 12px;">', t += `<div style="padding:6px 0; font-weight:bold; font-size:13px;">${f}</div>`, t += e, C.properties) for (const s of C.properties) t += `<span style="color:#888">${s}</span>
`;
    t += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const s of G) t += `<th style="padding:2px 5px">${s}</th>`;
    t += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let s = 0; s < 6; s++) U[s] = 0;
    if (M.frequencies.forEach((s, r) => {
      var _a2;
      const O = s > 0 ? 1 / s : 0, c = s * 2 * Math.PI, y = ((_a2 = M.massParticipation) == null ? void 0 : _a2[r]) || [0, 0, 0, 0, 0, 0];
      for (let k = 0; k < 6; k++) U[k] += y[k];
      let R = 0, a = y[0];
      for (let k = 1; k < 6; k++) y[k] > a && (a = y[k], R = k);
      const p = a < 0.05 ? "\u2014" : `${G[R]} (${(a * 100).toFixed(0)} %)`, m = R === 0 || R === 1 ? "#0f0" : R === 5 ? "#0ff" : R === 2 ? "#fa0" : "#888", P = r + 1 === n, Y = r + 1 === x, L = r + 1 === z;
      t += `<tr style="border-bottom:1px solid #fff1; ${L ? "background:rgba(0,255,0,0.12);" : P || Y ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${r + 1}${L ? " \u2605" : ""}</td>
  <td style="padding:2px 6px; text-align:right">${s.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${O.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${c.toFixed(2)}</td>`;
      for (let k = 0; k < 6; k++) {
        const K = (y[k] * 100).toFixed(1), et = y[k] > 0.5 ? "#f00" : y[k] > 0.1 ? "#ff0" : "#0f0";
        t += `<td style="padding:2px 5px; text-align:right; color:${et}">${K}%</td>`;
      }
      const b = U[0] >= u ? "#0f0" : "#0ff", q = U[1] >= u ? "#0f0" : "#0ff";
      t += `<td style="padding:2px 5px; text-align:right; color:${b}">${(U[0] * 100).toFixed(1)}%${P ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${q}">${(U[1] * 100).toFixed(1)}%${Y ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(U[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${m}">${p}</td></tr>`;
    }), t += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, t += "</div>", g.innerHTML = t, N) {
      const s = g.querySelector("#modal-body"), r = g.querySelector("#modal-minimize");
      s && (s.style.display = "none"), r && (r.textContent = "\u25A2", r.title = "Restaurar");
    }
    (_c = g.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      N = !N;
      const s = g.querySelector("#modal-body"), r = g.querySelector("#modal-minimize");
      N ? (s.style.display = "none", r.textContent = "\u25A2", r.title = "Restaurar") : (s.style.display = "block", r.textContent = "\u25AC", r.title = "Minimizar");
    }), (_d = g.querySelector("#modal-copy")) == null ? void 0 : _d.addEventListener("click", () => {
      const s = [];
      s.push(`Modal Analysis \u2014 ${C.title}`), s.push(f.replace(/<[^>]+>/g, ""));
      const r = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${G.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      s.push(r), s.push("-".repeat(r.length));
      const O = [0, 0, 0, 0, 0, 0];
      M.frequencies.forEach((y, R) => {
        var _a2;
        const a = y > 0 ? 1 / y : 0, p = y * 2 * Math.PI, m = ((_a2 = M.massParticipation) == null ? void 0 : _a2[R]) || [0, 0, 0, 0, 0, 0];
        for (let b = 0; b < 6; b++) O[b] += m[b];
        let P = 0, Y = m[0];
        for (let b = 1; b < 6; b++) m[b] > Y && (Y = m[b], P = b);
        const L = Y < 0.05 ? "\u2014" : `${G[P]} (${(Y * 100).toFixed(0)}%)`, X = m.map((b) => ((b * 100).toFixed(1) + "%").padStart(6)).join(" ");
        s.push(`${String(R + 1).padStart(4)}  ${y.toFixed(4).padStart(9)}  ${a.toFixed(4).padStart(9)}  ${p.toFixed(2).padStart(9)}  ${X}  ${(O[0] * 100).toFixed(1).padStart(5)}%  ${(O[1] * 100).toFixed(1).padStart(5)}%  ${(O[5] * 100).toFixed(1).padStart(5)}%  ${L}`);
      }), navigator.clipboard.writeText(s.join(`
`));
      const c = g.querySelector("#modal-copy");
      c.textContent = "\u2713", setTimeout(() => c.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: g, render: T };
}
function St(g) {
  var _a;
  const N = g.split(/\r?\n/), u = { force: "TONF", length: "M" }, T = [], M = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), U = [], E = [], n = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), z = [], w = [];
  let H = "", F = "";
  const B = /* @__PURE__ */ new Map();
  for (const d of N) {
    const A = d.trim();
    if (!A || A.startsWith("$")) {
      A.startsWith("$ ") && (F = A.substring(2).trim());
      continue;
    }
    if (F && (B.has(F) || B.set(F, []), B.get(F).push(d)), F === "CONTROLS") {
      const i = A.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
      i && (u.force = i[1], u.length = i[2]);
      const I = A.match(/TITLE2\s+"([^"]+)"/);
      I && (H = I[1]);
    }
    if (F === "STORIES - IN SEQUENCE FROM TOP") {
      const i = A.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
      if (i) {
        const I = i[1], o = i[2] ? parseFloat(i[2]) : 0, l = i[3] ? parseFloat(i[3]) : void 0;
        T.push({ name: I, height: o, elev: l ?? 0 });
      }
    }
    if (F === "MATERIAL PROPERTIES") {
      const i = A.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
      if (i) {
        const I = i[1];
        M.has(I) || M.set(I, { type: i[2] || "", E: 0, G: 0, nu: 0 });
        const o = M.get(I);
        i[2] && (o.type = i[2]);
        const l = A.match(/\bE\s+([\d.eE+-]+)/);
        l && (o.E = parseFloat(l[1]));
        const $ = A.match(/\bU\s+([\d.eE+-]+)/);
        $ && (o.nu = parseFloat($[1]), o.G = o.E / (2 * (1 + o.nu)));
        const S = A.match(/\bFY\s+([\d.eE+-]+)/);
        S && (o.fy = parseFloat(S[1]));
        const W = A.match(/\bFC\s+([\d.eE+-]+)/);
        W && (o.fc = parseFloat(W[1]));
        const j = A.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
        j && (o.density = parseFloat(j[1]));
      }
    }
    if (F === "FRAME SECTIONS") {
      const i = A.match(/FRAMESECTION\s+"([^"]+)"/);
      if (i) {
        const I = i[1];
        C.has(I) || C.set(I, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
        const o = C.get(I), l = A.match(/MATERIAL\s+"([^"]+)"/);
        l && (o.material = l[1]);
        const $ = A.match(/SHAPE\s+"([^"]+)"/);
        $ && (o.shape = $[1]);
        const S = A.match(/\bD\s+([\d.eE+-]+)/);
        S && (o.D = parseFloat(S[1]));
        const W = A.match(/\bB\s+([\d.eE+-]+)/);
        W && (o.B = parseFloat(W[1]));
        const j = A.match(/\bTF\s+([\d.eE+-]+)/);
        j && (o.TF = parseFloat(j[1]));
        const Z = A.match(/\bTW\s+([\d.eE+-]+)/);
        Z && (o.TW = parseFloat(Z[1]));
        const _ = A.match(/\bR\s+([\d.eE+-]+)/);
        _ && (o.R = parseFloat(_[1]));
        const V = A.match(/FILLMATERIAL\s+"([^"]+)"/);
        V && (o.fillMaterial = V[1]);
        const tt = A.match(/I2MOD\s+([\d.eE+-]+)/);
        tt && (o.modI2 = parseFloat(tt[1]));
        const st = A.match(/I3MOD\s+([\d.eE+-]+)/);
        st && (o.modI3 = parseFloat(st[1]));
      }
    }
    if (F === "POINT COORDINATES") {
      const i = A.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
      i && G.set(i[1], [parseFloat(i[2]), parseFloat(i[3])]);
    }
    if (F === "LINE CONNECTIVITIES") {
      const i = A.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
      i && U.push({ name: i[1], type: i[2], pt1: i[3], pt2: i[4], nStories: parseInt(i[5]) });
    }
    if (F === "POINT ASSIGNS") {
      const i = A.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
      i && n.set(`${i[1]}@${i[2]}`, i[3].split(/\s+/));
    }
    if (F === "LINE ASSIGNS") {
      const i = A.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
      if (i) {
        const I = { story: i[2], section: i[3], rigidZone: 0, releases: [], angle: 0 }, o = A.match(/RIGIDZONE\s+([\d.eE+-]+)/);
        o && (I.rigidZone = parseFloat(o[1]));
        const l = A.match(/RELEASE\s+"([^"]+)"/);
        l && (I.releases = l[1].split(/\s+/));
        const $ = A.match(/ANG\s+([-\d.eE+]+)/);
        $ && (I.angle = parseFloat($[1])), x.set(`${i[1]}@${i[2]}`, I);
      }
    }
    if (F === "GRIDS") {
      const i = A.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
      i && w.push({ label: i[1], dir: i[2], coord: parseFloat(i[3]) });
    }
    if (F === "FRAME OBJECT LOADS") {
      const i = A.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      i && z.push({ line: i[1], story: i[2], type: i[3], dir: i[4], lc: i[5], val: parseFloat(i[6]) });
    }
    if (F === "AREA CONNECTIVITIES") {
      const i = A.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
      if (i) {
        const I = ((_a = i[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((o) => o.replace(/"/g, ""))) || [];
        E.push({ name: i[1], pts: I, nStories: 0 });
      }
    }
  }
  const v = /* @__PURE__ */ new Map();
  if (T.length > 0) {
    const d = T.length - 1;
    v.set(T[d].name, T[d].elev);
    for (let A = d - 1; A >= 0; A--) {
      const I = v.get(T[A + 1].name) + T[A].height;
      T[A].elev = I, v.set(T[A].name, I);
    }
  }
  const h = [], f = [], e = /* @__PURE__ */ new Map(), t = (d, A) => `${d}@${A}`, s = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
  for (const d of U) r.set(d.name, d);
  for (const d of U) for (const [A, i] of x) {
    if (!A.startsWith(d.name + "@")) continue;
    const I = i.story, o = T.findIndex((l) => l.name === I);
    if (!(o < 0)) if (d.type === "COLUMN" || d.type === "BRACE") {
      s.add(t(d.pt2, I));
      const l = Math.max(d.nStories, 1), $ = Math.min(o + l, T.length - 1);
      s.add(t(d.pt1, T[$].name));
    } else s.add(t(d.pt1, I)), s.add(t(d.pt2, I));
  }
  for (const [d] of n) s.add(d);
  for (const d of s) {
    const [A, i] = d.split("@"), I = G.get(A), o = v.get(i);
    I === void 0 || o === void 0 || (h.push([I[0], I[1], o]), f.push(d), e.set(d, h.length - 1));
  }
  const O = [], c = [], y = [], R = [], a = /* @__PURE__ */ new Map();
  for (const d of U) for (const [A, i] of x) {
    if (!A.startsWith(d.name + "@")) continue;
    const I = i.story, o = T.findIndex((Z) => Z.name === I);
    if (o < 0) continue;
    let l, $;
    if (d.type === "COLUMN" || d.type === "BRACE") {
      const Z = Math.max(d.nStories, 1), _ = Math.min(o + Z, T.length - 1);
      l = t(d.pt1, T[_].name), $ = t(d.pt2, I);
    } else l = t(d.pt1, I), $ = t(d.pt2, I);
    const S = e.get(l), W = e.get($);
    if (S === void 0 || W === void 0 || S === W) continue;
    const j = O.length;
    if (O.push([S, W]), c.push(d.name), y.push(d.type), R.push(I), a.set(j, i.section), i.rigidZone > 0 && X.set(j, [i.rigidZone, i.rigidZone]), i.releases.length > 0) {
      const Z = new Array(12).fill(false), _ = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const V of i.releases) {
        const tt = _[V];
        tt !== void 0 && (Z[tt] = true);
      }
      b.set(j, Z);
    }
  }
  const p = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map();
  for (const [d, A] of a) {
    const i = C.get(A);
    if (!i) continue;
    const I = M.get(i.material);
    I && (p.set(d, I.E), m.set(d, I.G));
    const o = i.D, l = i.B, $ = i.TF, S = i.TW;
    let W = 0, j = 0, Z = 0, _ = 0, V = 0, tt = 0, st = "rect";
    switch (i.shape) {
      case "Concrete Rectangular":
        W = o * l, j = l * o ** 3 / 12, Z = o * l ** 3 / 12, _ = l * o ** 3 * (1 / 3 - 0.21 * (o / l) * (1 - o ** 4 / (12 * l ** 4))), V = tt = 5 / 6 * W, st = "rect";
        break;
      case "Concrete Circle":
        W = Math.PI * o ** 2 / 4, j = Z = Math.PI * o ** 4 / 64, _ = Math.PI * o ** 4 / 32, V = tt = 0.9 * W, st = "circ";
        break;
      case "Steel I/Wide Flange":
        W = 2 * l * $ + (o - 2 * $) * S, j = (l * o ** 3 - (l - S) * (o - 2 * $) ** 3) / 12, Z = (2 * $ * l ** 3 + (o - 2 * $) * S ** 3) / 12, _ = (2 * l * $ ** 3 + (o - 2 * $) * S ** 3) / 3, V = (o - 2 * $) * S, tt = 2 * l * $ * 5 / 6, st = "I";
        break;
      case "Steel Tube":
        W = o * l - (o - 2 * S) * (l - 2 * S), j = (l * o ** 3 - (l - 2 * S) * (o - 2 * S) ** 3) / 12, Z = (o * l ** 3 - (o - 2 * S) * (l - 2 * S) ** 3) / 12, _ = 2 * S * (o - S) * (l - S) * ((o - S) * (l - S)) / (o - S + (l - S)), V = 2 * o * S, tt = 2 * l * S, st = "HSS";
        break;
      case "Filled Steel Tube":
        W = o * l, j = l * o ** 3 / 12, Z = o * l ** 3 / 12, _ = 2 * S * (o - S) * (l - S) * ((o - S) * (l - S)) / (o - S + (l - S)), V = 2 * o * S + 5 / 6 * (o - 2 * S) * (l - 2 * S), tt = 2 * l * S + 5 / 6 * (o - 2 * S) * (l - 2 * S), st = "CFT";
        break;
      case "Steel Angle": {
        const ot = $ || S;
        W = ot * (o + l - ot), j = ot * (o ** 3 + l * ot ** 2 + ot ** 2 * (o - ot)) / 12, Z = ot * (l ** 3 + o * ot ** 2 + ot ** 2 * (l - ot)) / 12, _ = (o + l - ot) * ot ** 3 / 3, V = o * ot, tt = l * ot, st = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        W = 2 * l * $ + (o - 2 * $) * S, j = (S * o ** 3 + 2 * l * $ * (o - $) ** 2) / 12, Z = (2 * $ * l ** 3 + (o - 2 * $) * S ** 3) / 12, _ = (2 * l * $ ** 3 + (o - 2 * $) * S ** 3) / 3, V = (o - 2 * $) * S, tt = 2 * l * $ * 5 / 6, st = i.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        W = 2 * (2 * l * $ + (o - 2 * $) * S), j = 2 * (S * o ** 3 + 2 * l * $ * (o - $) ** 2) / 12, Z = 2 * (2 * $ * l ** 3 + (o - 2 * $) * S ** 3) / 12, _ = 2 * (2 * l * $ ** 3 + (o - 2 * $) * S ** 3) / 3, V = 2 * (o - 2 * $) * S, tt = 4 * l * $ * 5 / 6, st = "2C";
        break;
      default:
        o > 0 && l > 0 && (W = o * l, j = l * o ** 3 / 12, Z = o * l ** 3 / 12, _ = Math.min(o, l) * Math.max(o, l) ** 3 / 3 * 0.3, V = tt = 5 / 6 * W);
        break;
    }
    i.modI2 && (Z *= i.modI2), i.modI3 && (j *= i.modI3), P.set(d, W), q.set(d, j), k.set(d, Z), K.set(d, _), V > 0 && Y.set(d, V), tt > 0 && L.set(d, tt), et.set(d, { type: st, b: l || void 0, h: o || void 0, d: st === "circ" || st === "pipe" ? o : void 0, tw: S || void 0, tf: $ || void 0, r: i.R, name: A });
  }
  const Q = /* @__PURE__ */ new Map();
  for (const [d, A] of n) {
    const i = e.get(d);
    if (i === void 0) continue;
    const I = [false, false, false, false, false, false];
    for (const o of A) o === "UX" && (I[0] = true), o === "UY" && (I[1] = true), o === "UZ" && (I[2] = true), o === "RX" && (I[3] = true), o === "RY" && (I[4] = true), o === "RZ" && (I[5] = true);
    Q.set(i, I);
  }
  const at = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map();
  for (let d = 0; d < c.length; d++) it.set(`${c[d]}@${R[d]}`, d);
  for (const d of z) {
    const A = it.get(`${d.line}@${d.story}`);
    if (A === void 0) continue;
    const [i, I] = O[A], o = h[i], l = h[I], $ = Math.sqrt((l[0] - o[0]) ** 2 + (l[1] - o[1]) ** 2 + (l[2] - o[2]) ** 2);
    if ($ < 1e-10) continue;
    const S = d.val * $ / 2;
    let W = 0, j = 0, Z = 0;
    d.dir === "GRAV" || d.dir === "GRAVITY" ? Z = -S : d.dir === "X" ? W = S : d.dir === "Y" ? j = S : d.dir === "Z" && (Z = -S);
    for (const _ of [i, I]) {
      const V = at.get(_) || [0, 0, 0, 0, 0, 0];
      V[0] += W, V[1] += j, V[2] += Z, at.set(_, V);
    }
  }
  const nt = /* @__PURE__ */ new Map();
  for (const [d, A] of a) {
    const i = C.get(A);
    if (!i) continue;
    const I = M.get(i.material);
    (I == null ? void 0 : I.density) && nt.set(d, I.density);
  }
  return { units: u, stories: T.reverse(), materials: M, frameSections: C, nodes: h, nodeNames: f, nodeNameToIdx: e, elements: O, elementNames: c, elementTypes: y, elementStories: R, elementSections: a, nodeInputs: { supports: Q, loads: at }, elementInputs: { elasticities: p, shearModuli: m, areas: P, momentsOfInertiaZ: q, momentsOfInertiaY: k, torsionalConstants: K, shearAreasY: Y, shearAreasZ: L, rigidOffsets: X, momentReleases: b, densities: nt, sectionShapes: et }, sectionShapes: et, grids: w, info: { nNodes: h.length, nFrames: O.length, nAreas: E.length, title: H }, rawSections: B };
}
function D(g) {
  return g && parseFloat(g) || 0;
}
function ct(g) {
  const N = /* @__PURE__ */ new Map(), u = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let T;
  for (; (T = u.exec(g)) !== null; ) N.set(T[1], T[2] !== void 0 ? T[2] : T[3]);
  return N;
}
function mt(g) {
  const N = g.split(/\r?\n/);
  return N.some((T) => T.trim().startsWith("TABLE:")) ? lt(N) : pt(N);
}
function lt(g) {
  var _a, _b, _c, _d, _e, _f;
  const N = [];
  let u = "";
  for (const v of g) {
    const h = v.trimEnd();
    h.endsWith("_") ? u += h.slice(0, -1) + " " : (u += h, N.push(u), u = "");
  }
  u && N.push(u);
  const T = { force: "KN", length: "m" };
  let M = "UX,UY,UZ,RX,RY,RZ";
  const C = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), n = [], x = [], z = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), F = [];
  let B = "";
  for (const v of N) {
    const h = v.trim();
    if (!h || h.startsWith(";") || h.startsWith("File ")) continue;
    if (h.startsWith("TABLE:")) {
      const e = h.match(/TABLE:\s+"(.+?)"/);
      B = e ? e[1].toUpperCase() : "";
      continue;
    }
    if (h === "END TABLE DATA") {
      B = "";
      continue;
    }
    const f = ct(h);
    switch (B) {
      case "PROGRAM CONTROL": {
        const e = f.get("CurrUnits");
        if (e) {
          const t = e.split(",").map((s) => s.trim());
          t[0] && (T.force = t[0]), t[1] && (T.length = t[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const e = f.get("Material");
        e && !C.has(e) && C.set(e, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const e = f.get("Material");
        if (e) {
          const t = C.get(e) || { E: 0, nu: 0, G: 0 };
          t.E = D(f.get("E1")), t.G = D(f.get("G12")), t.nu = D(f.get("U12")), t.density = D(f.get("UnitMass")), C.set(e, t);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const e = f.get("Material");
        e && C.has(e) && (C.get(e).fy = D(f.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const e = f.get("SectionName");
        e && G.set(e, { material: f.get("Material") || "", shape: f.get("Shape") || "Rectangular", D: D(f.get("t3")), B: D(f.get("t2")), TF: D(f.get("tf")), TW: D(f.get("tw")), A: D(f.get("Area")), Iz: D(f.get("I33")), Iy: D(f.get("I22")), J: D(f.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const e = f.get("Section");
        e && U.set(e, { material: f.get("Material") || "", type: f.get("Type") || "Shell", thickness: D(f.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const e = f.get("Joint");
        if (e) {
          const t = D(f.get("XorR")), s = D(f.get("Y")), r = D(f.get("Z"));
          E.set(e, [t, s, r]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const e = f.get("Frame"), t = f.get("JointI"), s = f.get("JointJ");
        e && t && s && n.push({ name: e, j1: t, j2: s });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const e = f.get("Area");
        if (e) {
          const t = parseInt(f.get("NumJoints") || "4"), s = [];
          for (let r = 1; r <= t; r++) {
            const O = f.get(`Joint${r}`);
            O && s.push(O);
          }
          s.length >= 3 && x.push({ name: e, joints: s });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const e = f.get("Joint");
        if (e) {
          const t = [((_a = f.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = f.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = f.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = f.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = f.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = f.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          z.set(e, t);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const e = f.get("Frame"), t = f.get("AnalSect");
        e && t && w.set(e, t);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const e = f.get("Area"), t = f.get("Section");
        e && t && H.set(e, t);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const e = f.get("Joint");
        e && F.push({ joint: e, fx: D(f.get("F1")), fy: D(f.get("F2")), fz: D(f.get("F3")), mx: D(f.get("M1")), my: D(f.get("M2")), mz: D(f.get("M3")) });
        break;
      }
    }
  }
  return rt(T, M, C, G, U, E, n, x, z, w, H, F);
}
function pt(g) {
  const N = { force: "KN", length: "m" };
  let u = "UX,UY,UZ,RX,RY,RZ";
  const T = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), U = [], E = [], n = /* @__PURE__ */ new Map(), x = [];
  let z = "", w = "";
  for (const B of g) {
    const v = B.trim();
    if (!v || v.startsWith(";")) continue;
    if (!B.startsWith(" ") && !B.startsWith("	")) {
      const e = v.toUpperCase();
      if (e === "END") break;
      e.startsWith("SHELL SECTION") ? z = "SHELL SECTION" : e.startsWith("FRAME SECTION") ? z = "FRAME SECTION" : z = e.split(/\s+/)[0];
      continue;
    }
    const h = ct(v), f = v.split(/\s+/);
    switch (z) {
      case "SYSTEM": {
        const e = h.get("DOF");
        e && (u = e);
        const t = h.get("LENGTH");
        t && (N.length = t);
        const s = h.get("FORCE");
        s && (N.force = s);
        break;
      }
      case "JOINT": {
        const e = f[0];
        G.set(e, [D(h.get("X")), D(h.get("Y")), D(h.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const e = h.get("ADD"), t = h.get("DOF");
        if (e && t) {
          const s = t.split(","), r = [false, false, false, false, false, false];
          for (const O of s) {
            const c = O.toUpperCase();
            (c === "UX" || c === "U1") && (r[0] = true), (c === "UY" || c === "U2") && (r[1] = true), (c === "UZ" || c === "U3") && (r[2] = true), (c === "RX" || c === "R1") && (r[3] = true), (c === "RY" || c === "R2") && (r[4] = true), (c === "RZ" || c === "R3") && (r[5] = true);
          }
          n.set(e, r);
        }
        break;
      }
      case "MATERIAL": {
        const e = h.get("NAME");
        if (e) w = e, T.set(e, { E: 0, nu: 0, G: 0 });
        else if (w) {
          const t = T.get(w), s = h.get("E");
          s && (t.E = D(s));
          const r = h.get("U");
          r && (t.nu = D(r)), t.G = t.E / (2 * (1 + t.nu));
          const O = h.get("M");
          O && (t.density = D(O));
        }
        break;
      }
      case "SHELL": {
        const e = f[0], t = h.get("J");
        h.get("SEC"), t && E.push({ name: e, joints: t.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const e = h.get("NAME");
        e && C.set(e, { material: h.get("MAT") || "", type: h.get("TYPE") || "Shell", thickness: D(h.get("TH")) });
        break;
      }
      case "FRAME": {
        const e = f[0], t = h.get("J");
        if (t) {
          const s = t.split(",");
          s.length >= 2 && U.push({ name: e, j1: s[0], j2: s[1] });
        }
        break;
      }
      case "LOAD": {
        const e = h.get("ADD");
        e && x.push({ joint: e, fx: D(h.get("UX")), fy: D(h.get("UY")), fz: D(h.get("UZ")), mx: D(h.get("MX")), my: D(h.get("MY")), mz: D(h.get("MZ")) });
        break;
      }
    }
  }
  return rt(N, u, T, M, C, G, U, E, n, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), x);
}
function rt(g, N, u, T, M, C, G, U, E, n, x, z) {
  var _a;
  const w = [], H = /* @__PURE__ */ new Map(), F = [];
  for (const [c, y] of C) H.set(c, F.length), w.push(c), F.push(y);
  const B = [], v = [], h = /* @__PURE__ */ new Map();
  for (const c of G) {
    const y = H.get(c.j1), R = H.get(c.j2);
    if (y !== void 0 && R !== void 0) {
      const a = B.length;
      B.push([y, R]), v.push(c.name);
      const p = n.get(c.name);
      p && h.set(a, p);
    }
  }
  const f = B.length;
  for (const c of U) {
    const y = c.joints.map((R) => H.get(R)).filter((R) => R !== void 0);
    if (y.length >= 3) {
      const R = B.length;
      B.push(y), v.push(c.name);
      const a = x.get(c.name);
      a && h.set(R, a);
    }
  }
  const e = B.length - f, t = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, s = /* @__PURE__ */ new Map(), r = u.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let c = 0; c < B.length; c++) {
    const y = h.get(c), R = y ? T.get(y) : null, a = y ? M.get(y) : null;
    if (R || B[c].length === 2) {
      const p = R || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, m = u.get(p.material) || r, P = m.E || r.E, Y = m.nu || 0.3, L = m.G || P / (2 * (1 + Y));
      t.elasticities.set(c, P), t.shearModuli.set(c, L), t.areas.set(c, p.A || p.D * p.B), t.momentsOfInertiaZ.set(c, p.Iz || p.B * p.D ** 3 / 12), t.momentsOfInertiaY.set(c, p.Iy || p.D * p.B ** 3 / 12), t.torsionalConstants.set(c, p.J || 0), t.densities.set(c, m.density || 0), ((_a = p.shape) == null ? void 0 : _a.includes("Wide Flange")) || p.shape === "I" ? s.set(c, { type: "I", b: p.B, h: p.D, name: y || "I-section" }) : s.set(c, { type: "rect", b: p.B, h: p.D });
    } else if (a) {
      const p = u.get(a.material) || r, m = p.E || r.E, P = p.nu || 0.2, Y = p.G || m / (2 * (1 + P));
      t.elasticities.set(c, m), t.shearModuli.set(c, Y), t.thicknesses.set(c, a.thickness), t.poissonsRatios.set(c, P), t.densities.set(c, p.density || 0);
    }
  }
  const O = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [c, y] of E) {
    const R = H.get(c);
    R !== void 0 && O.supports.set(R, y);
  }
  for (const c of z) {
    const y = H.get(c.joint);
    if (y !== void 0) {
      const R = O.forces.get(y) || [0, 0, 0, 0, 0, 0];
      R[0] += c.fx, R[1] += c.fy, R[2] += c.fz, R[3] += c.mx, R[4] += c.my, R[5] += c.mz, O.forces.set(y, R);
    }
  }
  return { units: g, dof: N, materials: u, frameSections: T, shellSections: M, nodes: F, nodeNames: w, nodeNameToIdx: H, elements: B, elementNames: v, elementSections: h, nodeInputs: O, elementInputs: t, sectionShapes: s, info: { nNodes: F.length, nFrames: f, nShells: e, title: `SAP2000 (${f} frames, ${e} shells)` } };
}
function At(g) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: N, elements: u, nodeInputs: T, elementInputs: M } = g, C = g.units || { force: "KN", length: "m" }, G = g.title || "Awatif Model", U = [], E = (e) => U.push(e), n = () => U.push(" ");
  E(`File ${G}.$2k was saved on m/d/yy at h:mm:ss`), n(), E('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), E("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), n();
  const x = [], z = [];
  if (u.forEach((e, t) => {
    e.length === 2 ? x.push(t) : z.push(t);
  }), x.length > 0) {
    E('TABLE:  "CONNECTIVITY - FRAME"');
    for (const e of x) {
      const t = u[e];
      E(`   Frame=${e + 1}   JointI=${t[0] + 1}   JointJ=${t[1] + 1}   IsCurved=No`);
    }
    n();
  }
  if (z.length > 0) {
    E('TABLE:  "CONNECTIVITY - AREA"');
    for (const e of z) {
      const t = u[e], s = t.map((r, O) => `Joint${O + 1}=${r + 1}`).join("   ");
      E(`   Area=${e + 1}   NumJoints=${t.length}   ${s}`);
    }
    n();
  }
  E('TABLE:  "COORDINATE SYSTEMS"'), E("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), n(), E('TABLE:  "DATABASE FORMAT TYPES"'), E("   UnitsCurr=Yes   OverrideE=No"), n();
  const w = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map();
  for (const e of x) {
    const t = ((_a = M.areas) == null ? void 0 : _a.get(e)) || 0, s = ((_b = M.momentsOfInertiaZ) == null ? void 0 : _b.get(e)) || 0, r = ((_c = M.momentsOfInertiaY) == null ? void 0 : _c.get(e)) || 0, O = ((_d = M.torsionalConstants) == null ? void 0 : _d.get(e)) || 0, c = ((_e = M.elasticities) == null ? void 0 : _e.get(e)) || 0, y = `MAT_${Math.round(c)}`, R = `A${t.toPrecision(6)}_Iz${s.toPrecision(6)}`;
    if (!w.has(R)) {
      let p = 0.3, m = 0.3;
      t > 0 && s > 0 && (p = Math.sqrt(12 * s / t), m = t / p), w.set(R, { A: t, Iz: s, Iy: r, J: O, b: m, h: p, matKey: y });
    }
    const a = [...w.keys()].indexOf(R) + 1;
    H.set(e, `SEC${a}`);
  }
  if (x.length > 0) {
    E('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const e of x) {
      const t = H.get(e) || "SEC1";
      E(`   Frame=${e + 1}   AutoSelect=N.A.   AnalSect=${t}   MatProp=Default`);
    }
    n();
  }
  if (w.size > 0) {
    E('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let e = 0;
    for (const [, t] of w) {
      e++;
      const s = t.A * 5 / 6;
      E(`   SectionName=SEC${e}   Material=${t.matKey}   Shape=Rectangular   t3=${J(t.h)}   t2=${J(t.b)}   Area=${J(t.A)}   TorsConst=${J(t.J)}   I33=${J(t.Iz)}   I22=${J(t.Iy)}   I23=0   AS2=${J(s)}   AS3=${J(s)} _`), E("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    n();
  }
  const F = !!g.layeredSection && z.length > 0, B = g.layeredSection, v = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
  if (!F) for (const e of z) {
    const t = ((_f = M.thicknesses) == null ? void 0 : _f.get(e)) || 0.1, s = ((_g = M.elasticities) == null ? void 0 : _g.get(e)) || 0, r = `MAT_${Math.round(s)}`, O = `t${t.toPrecision(6)}`;
    v.has(O) || v.set(O, { t, matKey: r });
    const c = [...v.keys()].indexOf(O) + 1;
    h.set(e, `SSEC${c}`);
  }
  if (z.length > 0) {
    E('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const e of z) {
      const t = F ? B.name : h.get(e) || "SSEC1";
      E(`   Area=${e + 1}   Section=${t}   MatProp=Default`);
    }
    if (n(), E('TABLE:  "AREA SECTION PROPERTIES"'), F) {
      const e = B, t = ((_h = e.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      E(`   Section=${e.name}   Material=${t}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${J(e.totalThickness)}   BendThick=${J(e.totalThickness)}   Color=Magenta`);
    } else {
      let e = 0;
      for (const [, t] of v) e++, E(`   Section=SSEC${e}   Material=${t.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${J(t.t)}   BendThick=${J(t.t)}   Color=Cyan`);
    }
    if (n(), F) {
      E('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const e = B;
      for (const t of e.layers) {
        const s = t.angle ?? 0, r = t.numIntPts ?? 3;
        E(`   Section=${e.name}   LayerName=${t.name}   Distance=${J(t.distance)}   Thickness=${J(t.thickness)}   Type=Shell   NumIntPts=${r}   Material=${t.material}   MatAngle=${J(s * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      n();
    }
  }
  E('TABLE:  "JOINT COORDINATES"');
  for (let e = 0; e < N.length; e++) {
    const t = N[e];
    E(`   Joint=${e + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${J(t[0])}   Y=${J(t[1])}   Z=${J(t[2])}   SpecialJt=No`);
  }
  if (n(), T.supports && T.supports.size > 0) {
    E('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [e, t] of T.supports) {
      if (!t.some((r) => r)) continue;
      const s = (r) => r ? "Yes" : "No";
      E(`   Joint=${e + 1}   U1=${s(t[0])}   U2=${s(t[1])}   U3=${s(t[2])}   R1=${s(t[3])}   R2=${s(t[4])}   R3=${s(t[5])}`);
    }
    n();
  }
  if (E('TABLE:  "LOAD PATTERN DEFINITIONS"'), E("   LoadPat=DEAD   DesignType=Dead   SelfWtMult=0"), n(), E('TABLE:  "LOAD CASE DEFINITIONS"'), E('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), n(), E('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), E('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), n(), T.forces && T.forces.size > 0) {
    E('TABLE:  "JOINT LOADS - FORCE"');
    for (const [e, t] of T.forces) t.some((s) => Math.abs(s) > 1e-12) && E(`   Joint=${e + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${J(t[0])}   F2=${J(t[1])}   F3=${J(t[2])}   M1=${J(t[3])}   M2=${J(t[4])}   M3=${J(t[5])}`);
    n();
  }
  const f = /* @__PURE__ */ new Map();
  for (let e = 0; e < u.length; e++) {
    const t = ((_i = M.elasticities) == null ? void 0 : _i.get(e)) || 0, s = ((_j = M.shearModuli) == null ? void 0 : _j.get(e)) || 0, r = t > 0 && s > 0 ? Math.max(0, Math.min(0.5, t / (2 * s) - 1)) : 0.2, O = ((_k = M.densities) == null ? void 0 : _k.get(e)) || 0, c = `MAT_${Math.round(t)}`;
    f.has(c) || f.set(c, { E: t, nu: r, G: s, rho: O });
  }
  E('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [e] of f) E(`   Material=${e}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  n(), E('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [e, t] of f) E(`   Material=${e}   UnitWeight=${J(t.rho * 9.81)}   UnitMass=${J(t.rho)}   E1=${J(t.E)}   G12=${J(t.G)}   U12=${J(t.nu)}   A1=9.9E-06`);
  n(), E('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [e] of f) E(`   Material=${e}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return n(), E('TABLE:  "PROGRAM CONTROL"'), E(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${C.force}, ${C.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), n(), E("END TABLE DATA"), E(""), U.join(`\r
`);
}
function J(g) {
  return g === 0 || Math.abs(g) < 1e-15 ? "0" : Math.abs(g) >= 1e6 || Math.abs(g) < 1e-3 && Math.abs(g) > 0 ? g.toExponential(8) : parseFloat(g.toPrecision(10)).toString();
}
function Tt(g) {
  const { nodes: N, elements: u, nodeInputs: T, elementInputs: M, title: C, e2kModel: G } = g, U = G == null ? void 0 : G.rawSections;
  return U && U.size > 0 ? ft(U) : dt(g);
}
function ft(g, N) {
  const u = [], T = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  u.push("$ File exported from Awatif FEM Studio (round-trip)"), u.push("");
  for (const M of T) {
    const C = g.get(M);
    if (!(!C || C.length === 0)) {
      u.push(`$ ${M}`);
      for (const G of C) u.push(G);
      u.push("");
    }
  }
  for (const [M, C] of g) if (!T.includes(M) && C.length !== 0) {
    u.push(`$ ${M}`);
    for (const G of C) u.push(G);
    u.push("");
  }
  return u.push("  END"), u.push("$ END OF MODEL FILE"), u.join(`\r
`);
}
function dt(g) {
  var _a, _b, _c, _d;
  const { nodes: N, elements: u, nodeInputs: T, elementInputs: M, title: C, units: G } = g, U = (G == null ? void 0 : G.force) || "TONF", E = (G == null ? void 0 : G.length) || "M", n = [], x = (a) => Math.round(a * 1e4) / 1e4;
  n.push("$ File exported from Awatif FEM Studio"), n.push(""), n.push("$ PROGRAM INFORMATION"), n.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), n.push(""), n.push("$ CONTROLS"), n.push(`  UNITS  "${U}"  "${E}"  "C"  `), C && n.push(`  TITLE2  "${C}"  `), n.push("");
  const z = /* @__PURE__ */ new Set();
  N.forEach((a) => z.add(x(a[2])));
  const w = [...z].sort((a, p) => a - p), H = [], F = /* @__PURE__ */ new Map();
  H.push("Base"), F.set(w[0], "Base");
  for (let a = 1; a < w.length; a++) {
    const p = `Level_${a}`;
    H.push(p), F.set(w[a], p);
  }
  n.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let a = w.length - 1; a >= 1; a--) n.push(`  STORY "${H[a]}"  HEIGHT ${x(w[a] - w[a - 1])} MASTERSTORY "Yes"  `);
  w.length > 0 && n.push(`  STORY "Base"  ELEV ${w[0]} `), n.push(""), u.some((a) => a.length === 4) && (n.push("$ DIAPHRAGM NAMES"), n.push('  DIAPHRAGM "D1"    TYPE RIGID'), n.push("")), n.push("$ MATERIAL PROPERTIES");
  const v = /* @__PURE__ */ new Set();
  (_a = M.elasticities) == null ? void 0 : _a.forEach((a) => v.add(a));
  const h = /* @__PURE__ */ new Map();
  let f = 0;
  for (const a of v) {
    const p = `Mat_${++f}`;
    h.set(a, p), n.push(`  MATERIAL  "${p}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), n.push(`  MATERIAL  "${p}"    SYMTYPE "Isotropic"  E ${a}  U 0.2  A 1E-05`);
  }
  n.push(""), n.push("$ FRAME SECTIONS");
  const e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  u.forEach((a, p) => {
    var _a2, _b2;
    if (a.length !== 2) return;
    const m = (_a2 = M.sectionShapes) == null ? void 0 : _a2.get(p), P = ((_b2 = M.elasticities) == null ? void 0 : _b2.get(p)) ?? 0, Y = h.get(P) || "Mat_1", L = (m == null ? void 0 : m.h) ?? 0, X = (m == null ? void 0 : m.b) ?? 0, b = (m == null ? void 0 : m.d) ?? 0, q = (m == null ? void 0 : m.tf) ?? 0, k = (m == null ? void 0 : m.tw) ?? 0, K = (m == null ? void 0 : m.type) || "rect", et = `${K}_${L}_${X}_${b}_${q}_${k}`;
    (m == null ? void 0 : m.name) && !s.has(et) && s.set(et, m.name);
    let Q = s.get(et);
    if (Q || (K === "rect" ? Q = `R${x(X * 100)}x${x(L * 100)}` : K === "circ" ? Q = `C_D${x(b * 100)}` : K === "I" ? Q = `I_${x(L * 100)}` : Q = `Sec_${e.size + 1}`, s.set(et, Q)), t.set(p, Q), e.has(Q)) return;
    e.add(Q);
    const it = { rect: "Concrete Rectangular", circ: "Concrete Circle", I: "Steel I/Wide Flange", HSS: "Steel Tube", pipe: "Steel Pipe", L: "Steel Angle", C: "Steel Channel", "2C": "Steel Double Channel" }[K] || "Concrete Rectangular";
    let nt = `  FRAMESECTION  "${Q}"  MATERIAL "${Y}"  SHAPE "${it}"`;
    L && (nt += `  D ${L}`), X && (nt += `  B ${X}`), b && !L && (nt += `  D ${b}`), q && (nt += `  TF ${q}`), k && (nt += `  TW ${k}`), n.push(nt);
  }), n.push("");
  const r = /* @__PURE__ */ new Map();
  let O = 0;
  N.forEach((a) => {
    const p = `${x(a[0])},${x(a[1])}`;
    r.has(p) || r.set(p, `${++O}`);
  }), n.push("$ POINT COORDINATES");
  for (const [a, p] of r) {
    const [m, P] = a.split(",").map(Number);
    n.push(`  POINT "${p}"  ${m} ${P} `);
  }
  n.push("");
  const c = (a) => {
    const p = N[a], m = `${x(p[0])},${x(p[1])}`;
    return { pt: r.get(m) || "1", story: F.get(x(p[2])) || "Base" };
  };
  n.push("$ LINE CONNECTIVITIES");
  const y = [];
  u.forEach((a, p) => {
    if (a.length !== 2) return;
    const m = Et(N, a), P = t.get(p) || `Sec_${p}`;
    if (m === "BEAM") {
      const Y = c(a[0]), L = c(a[1]);
      n.push(`  LINE  "E${p + 1}"  BEAM  "${Y.pt}"  "${L.pt}"  0`), y.push(`  LINEASSIGN  "E${p + 1}"  "${Y.story}"  SECTION "${P}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const Y = N[a[0]][2] <= N[a[1]][2] ? a[0] : a[1], L = N[a[0]][2] <= N[a[1]][2] ? a[1] : a[0];
      c(Y);
      const X = c(L), b = x(N[Y][2]), q = x(N[L][2]), k = w.indexOf(b), K = w.indexOf(q), et = Math.max(1, K >= 0 && k >= 0 ? K - k : 1);
      n.push(`  LINE  "E${p + 1}"  ${m}  "${X.pt}"  "${X.pt}"  ${et}`);
      for (let Q = 0; Q < et; Q++) {
        const at = K - Q;
        at >= 0 && at < H.length && y.push(`  LINEASSIGN  "E${p + 1}"  "${H[at]}"  SECTION "${P}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      }
    }
  }), n.push(""), n.push("$ POINT ASSIGNS"), (_b = T.supports) == null ? void 0 : _b.forEach((a, p) => {
    const m = [];
    if (a[0] && m.push("UX"), a[1] && m.push("UY"), a[2] && m.push("UZ"), a[3] && m.push("RX"), a[4] && m.push("RY"), a[5] && m.push("RZ"), m.length > 0) {
      const P = c(p);
      n.push(`  POINTASSIGN  "${P.pt}"  "${P.story}"  RESTRAINT "${m.join(" ")}"  `);
    }
  }), n.push(""), n.push("$ LINE ASSIGNS"), y.forEach((a) => n.push(a)), n.push("");
  const R = [];
  if (u.forEach((a, p) => {
    if (a.length === 4) {
      const m = N[a[0]], P = N[a[1]], Y = N[a[2]], L = [P[0] - m[0], P[1] - m[1], P[2] - m[2]], X = [Y[0] - m[0], Y[1] - m[1], Y[2] - m[2]], b = L[1] * X[2] - L[2] * X[1], q = L[2] * X[0] - L[0] * X[2], k = L[0] * X[1] - L[1] * X[0], K = Math.sqrt(b * b + q * q + k * k), et = K > 1e-10 && Math.abs(k) / K < 0.5;
      R.push({ idx: p, el: a, isWall: et });
    }
  }), R.some((a) => !a.isWall)) {
    n.push("$ SLAB PROPERTIES");
    const a = ((_c = M.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
    n.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${h.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${a} `), n.push("");
  }
  if (R.some((a) => a.isWall)) {
    n.push("$ WALL PROPERTIES");
    const a = ((_d = M.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
    n.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${h.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${a} `), n.push("");
  }
  if (R.length > 0) {
    n.push("$ AREA CONNECTIVITIES");
    const a = [];
    R.forEach((p, m) => {
      const { el: P, isWall: Y } = p, L = Y ? `W${m + 1}` : `F${m + 1}`, X = Y ? "PANEL" : "FLOOR", b = P.map((q) => c(q));
      if (Y) {
        const q = N[P[0]][2] <= N[P[2]][2] ? 0 : 2, k = N[P[1]][2] <= N[P[3]][2] ? 1 : 3;
        n.push(`  AREA "${L}"  ${X}  4  "${b[q].pt}"  "${b[k].pt}"  "${b[k].pt}"  "${b[q].pt}"  1  1  0  0  `);
        const K = b[q === 0 ? 2 : 0].story;
        a.push(`  AREAASSIGN  "${L}"  "${K}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else n.push(`  AREA "${L}"  ${X}  4  "${b[0].pt}"  "${b[1].pt}"  "${b[2].pt}"  "${b[3].pt}"  0  0  0  0  `), a.push(`  AREAASSIGN  "${L}"  "${b[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
    }), n.push(""), n.push("$ AREA ASSIGNS"), a.forEach((p) => n.push(p)), n.push("");
  }
  return n.push("$ LOAD PATTERNS"), n.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), n.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), n.push(""), T.loads && T.loads.size > 0 && (n.push("$ POINT OBJECT LOADS"), T.loads.forEach((a, p) => {
    const [m, P, Y] = a, L = c(p);
    Math.abs(m) > 1e-10 && n.push(`  POINTLOAD  "${L.pt}"  "${L.story}"  "Dead"  TYPE "FORCE"  FX ${m}`), Math.abs(P) > 1e-10 && n.push(`  POINTLOAD  "${L.pt}"  "${L.story}"  "Dead"  TYPE "FORCE"  FY ${P}`), Math.abs(Y) > 1e-10 && n.push(`  POINTLOAD  "${L.pt}"  "${L.story}"  "Dead"  TYPE "FORCE"  FZ ${Y}`);
  }), n.push("")), n.push("  END"), n.push("$ END OF MODEL FILE"), n.join(`\r
`);
}
function Et(g, N) {
  const u = g[N[0]], T = g[N[1]], M = Math.abs(T[2] - u[2]), C = Math.sqrt((T[0] - u[0]) ** 2 + (T[1] - u[1]) ** 2), G = M > C * 0.5;
  return G && C > 0.01 ? "BRACE" : G ? "COLUMN" : "BEAM";
}
export {
  At as a,
  mt as b,
  ht as c,
  Tt as e,
  St as p
};
