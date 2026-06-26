function yt() {
  const S = document.createElement("div");
  S.id = "modal-results", S.style.cssText = `
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
    let m = false, y = 0, Y = 0, v = 0, M = 0;
    S.addEventListener("mousedown", (s) => {
      const E = s.target;
      if (!E.closest("#modal-header") || E.closest("button")) return;
      m = true;
      const F = S.getBoundingClientRect();
      y = s.clientX, Y = s.clientY, v = F.left, M = F.top, S.style.bottom = "auto", S.style.right = "auto", S.style.left = `${F.left}px`, S.style.top = `${F.top}px`, s.preventDefault();
    }), document.addEventListener("mousemove", (s) => {
      if (!m) return;
      let E = v + (s.clientX - y), F = M + (s.clientY - Y);
      E = Math.max(-S.offsetWidth + 80, Math.min(window.innerWidth - 80, E)), F = Math.max(0, Math.min(window.innerHeight - 30, F)), S.style.left = `${E}px`, S.style.top = `${F}px`;
    }), document.addEventListener("mouseup", () => {
      m = false;
    });
  }
  let p = false;
  const I = 0.9;
  function A(m, y) {
    var _a, _b, _c, _d;
    if (!m.frequencies || m.frequencies.length === 0) {
      S.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const Y = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], v = [0, 0, 0, 0, 0, 0], M = m.frequencies.length;
    let s = -1, E = -1, F = -1, J = 0, W = 0;
    {
      const e = [0, 0, 0, 0, 0, 0];
      for (let l = 0; l < M; l++) {
        const D = ((_a = m.massParticipation) == null ? void 0 : _a[l]) || [0, 0, 0, 0, 0, 0];
        for (let d = 0; d < 6; d++) e[d] += D[d];
        s < 0 && e[0] >= I && (s = l + 1), E < 0 && e[1] >= I && (E = l + 1), F < 0 && e[0] >= I && e[1] >= I && (F = l + 1);
      }
      J = e[0], W = e[1];
    }
    let B = -1, k = -1, Z = -1;
    const L = 0.1;
    for (let e = 0; e < M; e++) {
      const l = ((_b = m.massParticipation) == null ? void 0 : _b[e]) || [0, 0, 0, 0, 0, 0];
      B < 0 && l[0] > L && (B = e + 1), k < 0 && l[1] > L && (k = e + 1), Z < 0 && l[5] > L && (Z = e + 1);
    }
    const N = F > 0 ? `<span style="color:#0f0">\u2713 ASCE 7-22 \xA712.9.1.1 \u2014 90 % alcanzado en X e Y al modo ${F} de ${M}</span>` : s > 0 && E < 0 ? `<span style="color:#fa0">\u26A0 X cumple en modo ${s}, Y todav\xEDa en ${(W * 100).toFixed(1)} % \u2014 sub\xED \xABN\xB0 modos\xBB en Settings \u25B8 S\xEDsmico NEC</span>` : E > 0 && s < 0 ? `<span style="color:#fa0">\u26A0 Y cumple en modo ${E}, X todav\xEDa en ${(J * 100).toFixed(1)} % \u2014 sub\xED \xABN\xB0 modos\xBB en Settings \u25B8 S\xEDsmico NEC</span>` : `<span style="color:#f44">\u2717 ASCE 7-22 NO cumplido en ${M} modos \xB7 \u03A3Ux=${(J * 100).toFixed(1)} % \xB7 \u03A3Uy=${(W * 100).toFixed(1)} % \u2014 sub\xED \xABN\xB0 modos\xBB en Settings \u25B8 S\xEDsmico NEC</span>`, f = (() => {
      const e = (l, D) => {
        var _a2;
        if (l < 0) return `<span style="color:#f44">${D}: no encontrado en ${M} modos</span>`;
        const d = ((_a2 = m.massParticipation) == null ? void 0 : _a2[l - 1]) || [0, 0, 0, 0, 0, 0], P = D === "Ux" ? 0 : D === "Uy" ? 1 : 5, b = m.frequencies[l - 1] > 0 ? 1 / m.frequencies[l - 1] : 0;
        return `<span style="color:#0f0">${D}: modo ${l}, T=${b.toFixed(3)} s, MPF=${(d[P] * 100).toFixed(1)} %</span>`;
      };
      return `<div style="margin:4px 0; padding:4px 6px; background:rgba(0,255,255,0.05); border-left:2px solid #0ff; font-size:11px;">
  \u{1F3AF} <b>Modos s\xEDsmicos principales</b> (ASCE 7-22 \xA712.9.1):<br>
  ${e(B, "Ux")} \xB7 ${e(k, "Uy")} \xB7 ${e(Z, "Rz")}
</div>`;
    })();
    let o = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:move; user-select:none;" title="Arrastra para mover">
  <b style="color:#ff0">\u2725 \u26A1 MODAL ANALYSIS \u2014 ${y.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
    if (o += '<div id="modal-body" style="padding:0 12px 10px 12px;">', o += `<div style="padding:6px 0; font-weight:bold; font-size:13px;">${N}</div>`, o += f, y.properties) for (const e of y.properties) o += `<span style="color:#888">${e}</span>
`;
    y.spectrumHtml && (o += y.spectrumHtml), o += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const e of Y) o += `<th style="padding:2px 5px">${e}</th>`;
    o += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let e = 0; e < 6; e++) v[e] = 0;
    if (m.frequencies.forEach((e, l) => {
      var _a2;
      const D = e > 0 ? 1 / e : 0, d = e * 2 * Math.PI, P = e >= 500, b = ((_a2 = m.massParticipation) == null ? void 0 : _a2[l]) || [0, 0, 0, 0, 0, 0];
      for (let K = 0; K < 6; K++) v[K] += b[K];
      let z = 0, U = b[0];
      for (let K = 1; K < 6; K++) b[K] > U && (U = b[K], z = K);
      const _ = P ? "masa faltante (r\xEDgida)" : U < 0.05 ? "\u2014" : `${Y[z]} (${(U * 100).toFixed(0)} %)`, q = z === 0 || z === 1 ? "#0f0" : z === 5 ? "#0ff" : z === 2 ? "#fa0" : "#888", tt = l + 1 === s, et = l + 1 === E, st = l + 1 === F;
      o += `<tr style="border-bottom:1px solid #fff1; ${P ? "background:rgba(0,180,255,0.12);" : st ? "background:rgba(0,255,0,0.12);" : tt || et ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${P ? "MF" : l + 1 + (st ? " \u2605" : "")}</td>
  <td style="padding:2px 6px; text-align:right">${P ? "r\xEDgido" : e.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${P ? "\u22480" : D.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${P ? "\u2014" : d.toFixed(2)}</td>`;
      for (let K = 0; K < 6; K++) {
        const Q = (b[K] * 100).toFixed(1), rt = b[K] > 0.5 ? "#f00" : b[K] > 0.1 ? "#ff0" : "#0f0";
        o += `<td style="padding:2px 5px; text-align:right; color:${rt}">${Q}%</td>`;
      }
      const it = v[0] >= I ? "#0f0" : "#0ff", ct = v[1] >= I ? "#0f0" : "#0ff";
      o += `<td style="padding:2px 5px; text-align:right; color:${it}">${(v[0] * 100).toFixed(1)}%${tt ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${ct}">${(v[1] * 100).toFixed(1)}%${et ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(v[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${q}">${_}</td></tr>`;
    }), o += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, o += "</div>", S.innerHTML = o, p) {
      const e = S.querySelector("#modal-body"), l = S.querySelector("#modal-minimize");
      e && (e.style.display = "none"), l && (l.textContent = "\u25A2", l.title = "Restaurar");
    }
    (_c = S.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      p = !p;
      const e = S.querySelector("#modal-body"), l = S.querySelector("#modal-minimize");
      p ? (e.style.display = "none", l.textContent = "\u25A2", l.title = "Restaurar") : (e.style.display = "block", l.textContent = "\u25AC", l.title = "Minimizar");
    }), (_d = S.querySelector("#modal-copy")) == null ? void 0 : _d.addEventListener("click", () => {
      const e = [];
      e.push(`Modal Analysis \u2014 ${y.title}`), e.push(N.replace(/<[^>]+>/g, ""));
      const l = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${Y.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      e.push(l), e.push("-".repeat(l.length));
      const D = [0, 0, 0, 0, 0, 0];
      m.frequencies.forEach((P, b) => {
        var _a2;
        const z = P > 0 ? 1 / P : 0, U = P * 2 * Math.PI, _ = ((_a2 = m.massParticipation) == null ? void 0 : _a2[b]) || [0, 0, 0, 0, 0, 0];
        for (let j = 0; j < 6; j++) D[j] += _[j];
        let q = 0, tt = _[0];
        for (let j = 1; j < 6; j++) _[j] > tt && (tt = _[j], q = j);
        const et = tt < 0.05 ? "\u2014" : `${Y[q]} (${(tt * 100).toFixed(0)}%)`, st = _.map((j) => ((j * 100).toFixed(1) + "%").padStart(6)).join(" ");
        e.push(`${String(b + 1).padStart(4)}  ${P.toFixed(4).padStart(9)}  ${z.toFixed(4).padStart(9)}  ${U.toFixed(2).padStart(9)}  ${st}  ${(D[0] * 100).toFixed(1).padStart(5)}%  ${(D[1] * 100).toFixed(1).padStart(5)}%  ${(D[5] * 100).toFixed(1).padStart(5)}%  ${et}`);
      }), navigator.clipboard.writeText(e.join(`
`));
      const d = S.querySelector("#modal-copy");
      d.textContent = "\u2713", setTimeout(() => d.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: S, render: A };
}
function Dt(S) {
  var _a;
  const p = S.split(/\r?\n/), I = { force: "TONF", length: "M" }, A = [], m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), v = [], M = [], s = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), F = [], J = [];
  let W = "", B = "";
  const k = /* @__PURE__ */ new Map();
  for (const $ of p) {
    const g = $.trim();
    if (!g || g.startsWith("$")) {
      g.startsWith("$ ") && (B = g.substring(2).trim());
      continue;
    }
    if (B && (k.has(B) || k.set(B, []), k.get(B).push($)), B === "CONTROLS") {
      const c = g.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
      c && (I.force = c[1], I.length = c[2]);
      const C = g.match(/TITLE2\s+"([^"]+)"/);
      C && (W = C[1]);
    }
    if (B === "STORIES - IN SEQUENCE FROM TOP") {
      const c = g.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
      if (c) {
        const C = c[1], i = c[2] ? parseFloat(c[2]) : 0, u = c[3] ? parseFloat(c[3]) : void 0;
        A.push({ name: C, height: i, elev: u ?? 0 });
      }
    }
    if (B === "MATERIAL PROPERTIES") {
      const c = g.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
      if (c) {
        const C = c[1];
        m.has(C) || m.set(C, { type: c[2] || "", E: 0, G: 0, nu: 0 });
        const i = m.get(C);
        c[2] && (i.type = c[2]);
        const u = g.match(/\bE\s+([\d.eE+-]+)/);
        u && (i.E = parseFloat(u[1]));
        const R = g.match(/\bU\s+([\d.eE+-]+)/);
        R && (i.nu = parseFloat(R[1]), i.G = i.E / (2 * (1 + i.nu)));
        const t = g.match(/\bFY\s+([\d.eE+-]+)/);
        t && (i.fy = parseFloat(t[1]));
        const n = g.match(/\bFC\s+([\d.eE+-]+)/);
        n && (i.fc = parseFloat(n[1]));
        const r = g.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
        r && (i.density = parseFloat(r[1]));
      }
    }
    if (B === "FRAME SECTIONS") {
      const c = g.match(/FRAMESECTION\s+"([^"]+)"/);
      if (c) {
        const C = c[1];
        y.has(C) || y.set(C, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
        const i = y.get(C), u = g.match(/MATERIAL\s+"([^"]+)"/);
        u && (i.material = u[1]);
        const R = g.match(/SHAPE\s+"([^"]+)"/);
        R && (i.shape = R[1]);
        const t = g.match(/\bD\s+([\d.eE+-]+)/);
        t && (i.D = parseFloat(t[1]));
        const n = g.match(/\bB\s+([\d.eE+-]+)/);
        n && (i.B = parseFloat(n[1]));
        const r = g.match(/\bTF\s+([\d.eE+-]+)/);
        r && (i.TF = parseFloat(r[1]));
        const a = g.match(/\bTW\s+([\d.eE+-]+)/);
        a && (i.TW = parseFloat(a[1]));
        const O = g.match(/\bR\s+([\d.eE+-]+)/);
        O && (i.R = parseFloat(O[1]));
        const h = g.match(/FILLMATERIAL\s+"([^"]+)"/);
        h && (i.fillMaterial = h[1]);
        const T = g.match(/I2MOD\s+([\d.eE+-]+)/);
        T && (i.modI2 = parseFloat(T[1]));
        const w = g.match(/I3MOD\s+([\d.eE+-]+)/);
        w && (i.modI3 = parseFloat(w[1]));
      }
    }
    if (B === "POINT COORDINATES") {
      const c = g.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
      c && Y.set(c[1], [parseFloat(c[2]), parseFloat(c[3])]);
    }
    if (B === "LINE CONNECTIVITIES") {
      const c = g.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
      c && v.push({ name: c[1], type: c[2], pt1: c[3], pt2: c[4], nStories: parseInt(c[5]) });
    }
    if (B === "POINT ASSIGNS") {
      const c = g.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
      c && s.set(`${c[1]}@${c[2]}`, c[3].split(/\s+/));
    }
    if (B === "LINE ASSIGNS") {
      const c = g.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
      if (c) {
        const C = { story: c[2], section: c[3], rigidZone: 0, releases: [], angle: 0 }, i = g.match(/RIGIDZONE\s+([\d.eE+-]+)/);
        i && (C.rigidZone = parseFloat(i[1]));
        const u = g.match(/RELEASE\s+"([^"]+)"/);
        u && (C.releases = u[1].split(/\s+/));
        const R = g.match(/ANG\s+([-\d.eE+]+)/);
        R && (C.angle = parseFloat(R[1])), E.set(`${c[1]}@${c[2]}`, C);
      }
    }
    if (B === "GRIDS") {
      const c = g.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
      c && J.push({ label: c[1], dir: c[2], coord: parseFloat(c[3]) });
    }
    if (B === "FRAME OBJECT LOADS") {
      const c = g.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      c && F.push({ line: c[1], story: c[2], type: c[3], dir: c[4], lc: c[5], val: parseFloat(c[6]) });
    }
    if (B === "AREA CONNECTIVITIES") {
      const c = g.match(/AREA\s+"([^"]+)"\s+(?:([A-Za-z]\w*)\s+)?\d+\s+(.+)/);
      if (c) {
        const C = ((_a = c[3].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((i) => i.replace(/"/g, ""))) || [];
        M.push({ name: c[1], pts: C, nStories: 0 });
      }
    }
  }
  const Z = /* @__PURE__ */ new Map();
  if (A.length > 0) {
    const $ = A.length - 1;
    Z.set(A[$].name, A[$].elev);
    for (let g = $ - 1; g >= 0; g--) {
      const C = Z.get(A[g + 1].name) + A[g].height;
      A[g].elev = C, Z.set(A[g].name, C);
    }
  }
  const L = [], N = [], f = /* @__PURE__ */ new Map(), o = ($, g) => `${$}@${g}`, e = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
  for (const $ of v) l.set($.name, $);
  for (const $ of v) for (const [g, c] of E) {
    if (!g.startsWith($.name + "@")) continue;
    const C = c.story, i = A.findIndex((u) => u.name === C);
    if (!(i < 0)) if ($.type === "COLUMN" || $.type === "BRACE") {
      e.add(o($.pt2, C));
      const u = Math.max($.nStories, 1), R = Math.min(i + u, A.length - 1);
      e.add(o($.pt1, A[R].name));
    } else e.add(o($.pt1, C)), e.add(o($.pt2, C));
  }
  for (const [$] of s) e.add($);
  for (const $ of e) {
    const [g, c] = $.split("@"), C = Y.get(g), i = Z.get(c);
    C === void 0 || i === void 0 || (L.push([C[0], C[1], i]), N.push($), f.set($, L.length - 1));
  }
  const D = [], d = [], P = [], b = [], z = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
  for (const $ of v) for (const [g, c] of E) {
    if (!g.startsWith($.name + "@")) continue;
    const C = c.story, i = A.findIndex((a) => a.name === C);
    if (i < 0) continue;
    let u, R;
    if ($.type === "COLUMN" || $.type === "BRACE") {
      const a = Math.max($.nStories, 1), O = Math.min(i + a, A.length - 1);
      u = o($.pt1, A[O].name), R = o($.pt2, C);
    } else u = o($.pt1, C), R = o($.pt2, C);
    const t = f.get(u), n = f.get(R);
    if (t === void 0 || n === void 0 || t === n) continue;
    const r = D.length;
    if (D.push([t, n]), d.push($.name), P.push($.type), b.push(C), z.set(r, c.section), c.rigidZone > 0 && U.set(r, [c.rigidZone, c.rigidZone]), c.releases.length > 0) {
      const a = new Array(12).fill(false), O = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const h of c.releases) {
        const T = O[h];
        T !== void 0 && (a[T] = true);
      }
      _.set(r, a);
    }
  }
  const q = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map();
  for (const [$, g] of z) {
    const c = y.get(g);
    if (!c) continue;
    const C = m.get(c.material);
    C && (q.set($, C.E), tt.set($, C.G));
    const i = c.D, u = c.B, R = c.TF, t = c.TW;
    let n = 0, r = 0, a = 0, O = 0, h = 0, T = 0, w = "rect";
    switch (c.shape) {
      case "Concrete Rectangular":
        n = i * u, r = u * i ** 3 / 12, a = i * u ** 3 / 12, O = u * i ** 3 * (1 / 3 - 0.21 * (i / u) * (1 - i ** 4 / (12 * u ** 4))), h = T = 5 / 6 * n, w = "rect";
        break;
      case "Concrete Circle":
        n = Math.PI * i ** 2 / 4, r = a = Math.PI * i ** 4 / 64, O = Math.PI * i ** 4 / 32, h = T = 0.9 * n, w = "circ";
        break;
      case "Steel I/Wide Flange":
        n = 2 * u * R + (i - 2 * R) * t, r = (u * i ** 3 - (u - t) * (i - 2 * R) ** 3) / 12, a = (2 * R * u ** 3 + (i - 2 * R) * t ** 3) / 12, O = (2 * u * R ** 3 + (i - 2 * R) * t ** 3) / 3, h = (i - 2 * R) * t, T = 2 * u * R * 5 / 6, w = "I";
        break;
      case "Steel Tube":
        n = i * u - (i - 2 * t) * (u - 2 * t), r = (u * i ** 3 - (u - 2 * t) * (i - 2 * t) ** 3) / 12, a = (i * u ** 3 - (i - 2 * t) * (u - 2 * t) ** 3) / 12, O = 2 * t * (i - t) * (u - t) * ((i - t) * (u - t)) / (i - t + (u - t)), h = 2 * i * t, T = 2 * u * t, w = "HSS";
        break;
      case "Filled Steel Tube":
        n = i * u, r = u * i ** 3 / 12, a = i * u ** 3 / 12, O = 2 * t * (i - t) * (u - t) * ((i - t) * (u - t)) / (i - t + (u - t)), h = 2 * i * t + 5 / 6 * (i - 2 * t) * (u - 2 * t), T = 2 * u * t + 5 / 6 * (i - 2 * t) * (u - 2 * t), w = "CFT";
        break;
      case "Steel Angle": {
        const x = R || t;
        n = x * (i + u - x), r = x * (i ** 3 + u * x ** 2 + x ** 2 * (i - x)) / 12, a = x * (u ** 3 + i * x ** 2 + x ** 2 * (u - x)) / 12, O = (i + u - x) * x ** 3 / 3, h = i * x, T = u * x, w = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        n = 2 * u * R + (i - 2 * R) * t, r = (t * i ** 3 + 2 * u * R * (i - R) ** 2) / 12, a = (2 * R * u ** 3 + (i - 2 * R) * t ** 3) / 12, O = (2 * u * R ** 3 + (i - 2 * R) * t ** 3) / 3, h = (i - 2 * R) * t, T = 2 * u * R * 5 / 6, w = c.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        n = 2 * (2 * u * R + (i - 2 * R) * t), r = 2 * (t * i ** 3 + 2 * u * R * (i - R) ** 2) / 12, a = 2 * (2 * R * u ** 3 + (i - 2 * R) * t ** 3) / 12, O = 2 * (2 * u * R ** 3 + (i - 2 * R) * t ** 3) / 3, h = 2 * (i - 2 * R) * t, T = 4 * u * R * 5 / 6, w = "2C";
        break;
      default:
        i > 0 && u > 0 && (n = i * u, r = u * i ** 3 / 12, a = i * u ** 3 / 12, O = Math.min(i, u) * Math.max(i, u) ** 3 / 3 * 0.3, h = T = 5 / 6 * n);
        break;
    }
    c.modI2 && (a *= c.modI2), c.modI3 && (r *= c.modI3), et.set($, n), it.set($, r), ct.set($, a), K.set($, O), h > 0 && st.set($, h), T > 0 && j.set($, T), Q.set($, { type: w, b: u || void 0, h: i || void 0, d: w === "circ" || w === "pipe" ? i : void 0, tw: t || void 0, tf: R || void 0, r: c.R, name: g });
  }
  const rt = /* @__PURE__ */ new Map();
  for (const [$, g] of s) {
    const c = f.get($);
    if (c === void 0) continue;
    const C = [false, false, false, false, false, false];
    for (const i of g) i === "UX" && (C[0] = true), i === "UY" && (C[1] = true), i === "UZ" && (C[2] = true), i === "RX" && (C[3] = true), i === "RY" && (C[4] = true), i === "RZ" && (C[5] = true);
    rt.set(c, C);
  }
  const lt = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map();
  for (let $ = 0; $ < d.length; $++) Et.set(`${d[$]}@${b[$]}`, $);
  for (const $ of F) {
    const g = Et.get(`${$.line}@${$.story}`);
    if (g === void 0) continue;
    const [c, C] = D[g], i = L[c], u = L[C], R = Math.sqrt((u[0] - i[0]) ** 2 + (u[1] - i[1]) ** 2 + (u[2] - i[2]) ** 2);
    if (R < 1e-10) continue;
    const t = $.val * R / 2;
    let n = 0, r = 0, a = 0;
    $.dir === "GRAV" || $.dir === "GRAVITY" ? a = -t : $.dir === "X" ? n = t : $.dir === "Y" ? r = t : $.dir === "Z" && (a = -t);
    for (const O of [c, C]) {
      const h = lt.get(O) || [0, 0, 0, 0, 0, 0];
      h[0] += n, h[1] += r, h[2] += a, lt.set(O, h);
    }
  }
  const pt = /* @__PURE__ */ new Map();
  for (const [$, g] of z) {
    const c = y.get(g);
    if (!c) continue;
    const C = m.get(c.material);
    (C == null ? void 0 : C.density) && pt.set($, C.density);
  }
  return { units: I, stories: A.reverse(), materials: m, frameSections: y, nodes: L, nodeNames: N, nodeNameToIdx: f, elements: D, elementNames: d, elementTypes: P, elementStories: b, elementSections: z, nodeInputs: { supports: rt, loads: lt }, elementInputs: { elasticities: q, shearModuli: tt, areas: et, momentsOfInertiaZ: it, momentsOfInertiaY: ct, torsionalConstants: K, shearAreasY: st, shearAreasZ: j, rigidOffsets: U, momentReleases: _, densities: pt, sectionShapes: Q }, sectionShapes: Q, grids: J, info: { nNodes: L.length, nFrames: D.length, nAreas: M.length, title: W }, rawSections: k };
}
function G(S) {
  return S && parseFloat(S) || 0;
}
function It(S) {
  const p = /* @__PURE__ */ new Map(), I = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let A;
  for (; (A = I.exec(S)) !== null; ) p.set(A[1], A[2] !== void 0 ? A[2] : A[3]);
  return p;
}
function xt(S) {
  const p = S.split(/\r?\n/);
  return p.some((A) => A.trim().startsWith("TABLE:")) ? Nt(p) : $t(p);
}
function Nt(S) {
  var _a, _b, _c, _d, _e, _f;
  const p = [];
  let I = "";
  for (const Z of S) {
    const L = Z.trimEnd();
    L.endsWith("_") ? I += L.slice(0, -1) + " " : (I += L, p.push(I), I = "");
  }
  I && p.push(I);
  const A = { force: "KN", length: "m" };
  let m = "UX,UY,UZ,RX,RY,RZ";
  const y = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), s = [], E = [], F = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), B = [];
  let k = "";
  for (const Z of p) {
    const L = Z.trim();
    if (!L || L.startsWith(";") || L.startsWith("File ")) continue;
    if (L.startsWith("TABLE:")) {
      const f = L.match(/TABLE:\s+"(.+?)"/);
      k = f ? f[1].toUpperCase() : "";
      continue;
    }
    if (L === "END TABLE DATA") {
      k = "";
      continue;
    }
    const N = It(L);
    switch (k) {
      case "PROGRAM CONTROL": {
        const f = N.get("CurrUnits");
        if (f) {
          const o = f.split(",").map((e) => e.trim());
          o[0] && (A.force = o[0]), o[1] && (A.length = o[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const f = N.get("Material");
        f && !y.has(f) && y.set(f, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const f = N.get("Material");
        if (f) {
          const o = y.get(f) || { E: 0, nu: 0, G: 0 };
          o.E = G(N.get("E1")), o.G = G(N.get("G12")), o.nu = G(N.get("U12")), o.density = G(N.get("UnitMass")), y.set(f, o);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const f = N.get("Material");
        f && y.has(f) && (y.get(f).fy = G(N.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const f = N.get("SectionName");
        f && Y.set(f, { material: N.get("Material") || "", shape: N.get("Shape") || "Rectangular", D: G(N.get("t3")), B: G(N.get("t2")), TF: G(N.get("tf")), TW: G(N.get("tw")), A: G(N.get("Area")), Iz: G(N.get("I33")), Iy: G(N.get("I22")), J: G(N.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const f = N.get("Section");
        f && v.set(f, { material: N.get("Material") || "", type: N.get("Type") || "Shell", thickness: G(N.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const f = N.get("Joint");
        if (f) {
          const o = G(N.get("XorR")), e = G(N.get("Y")), l = G(N.get("Z"));
          M.set(f, [o, e, l]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const f = N.get("Frame"), o = N.get("JointI"), e = N.get("JointJ");
        f && o && e && s.push({ name: f, j1: o, j2: e });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const f = N.get("Area");
        if (f) {
          const o = parseInt(N.get("NumJoints") || "4"), e = [];
          for (let l = 1; l <= o; l++) {
            const D = N.get(`Joint${l}`);
            D && e.push(D);
          }
          e.length >= 3 && E.push({ name: f, joints: e });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const f = N.get("Joint");
        if (f) {
          const o = [((_a = N.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = N.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = N.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = N.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = N.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = N.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          F.set(f, o);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const f = N.get("Frame"), o = N.get("AnalSect");
        f && o && J.set(f, o);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const f = N.get("Area"), o = N.get("Section");
        f && o && W.set(f, o);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const f = N.get("Joint");
        f && B.push({ joint: f, fx: G(N.get("F1")), fy: G(N.get("F2")), fz: G(N.get("F3")), mx: G(N.get("M1")), my: G(N.get("M2")), mz: G(N.get("M3")) });
        break;
      }
    }
  }
  return Mt(A, m, y, Y, v, M, s, E, F, J, W, B);
}
function $t(S) {
  const p = { force: "KN", length: "m" };
  let I = "UX,UY,UZ,RX,RY,RZ";
  const A = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), v = [], M = [], s = /* @__PURE__ */ new Map(), E = [];
  let F = "", J = "";
  for (const k of S) {
    const Z = k.trim();
    if (!Z || Z.startsWith(";")) continue;
    if (!k.startsWith(" ") && !k.startsWith("	")) {
      const f = Z.toUpperCase();
      if (f === "END") break;
      f.startsWith("SHELL SECTION") ? F = "SHELL SECTION" : f.startsWith("FRAME SECTION") ? F = "FRAME SECTION" : F = f.split(/\s+/)[0];
      continue;
    }
    const L = It(Z), N = Z.split(/\s+/);
    switch (F) {
      case "SYSTEM": {
        const f = L.get("DOF");
        f && (I = f);
        const o = L.get("LENGTH");
        o && (p.length = o);
        const e = L.get("FORCE");
        e && (p.force = e);
        break;
      }
      case "JOINT": {
        const f = N[0];
        Y.set(f, [G(L.get("X")), G(L.get("Y")), G(L.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const f = L.get("ADD"), o = L.get("DOF");
        if (f && o) {
          const e = o.split(","), l = [false, false, false, false, false, false];
          for (const D of e) {
            const d = D.toUpperCase();
            (d === "UX" || d === "U1") && (l[0] = true), (d === "UY" || d === "U2") && (l[1] = true), (d === "UZ" || d === "U3") && (l[2] = true), (d === "RX" || d === "R1") && (l[3] = true), (d === "RY" || d === "R2") && (l[4] = true), (d === "RZ" || d === "R3") && (l[5] = true);
          }
          s.set(f, l);
        }
        break;
      }
      case "MATERIAL": {
        const f = L.get("NAME");
        if (f) J = f, A.set(f, { E: 0, nu: 0, G: 0 });
        else if (J) {
          const o = A.get(J), e = L.get("E");
          e && (o.E = G(e));
          const l = L.get("U");
          l && (o.nu = G(l)), o.G = o.E / (2 * (1 + o.nu));
          const D = L.get("M");
          D && (o.density = G(D));
        }
        break;
      }
      case "SHELL": {
        const f = N[0], o = L.get("J");
        L.get("SEC"), o && M.push({ name: f, joints: o.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const f = L.get("NAME");
        f && y.set(f, { material: L.get("MAT") || "", type: L.get("TYPE") || "Shell", thickness: G(L.get("TH")) });
        break;
      }
      case "FRAME": {
        const f = N[0], o = L.get("J");
        if (o) {
          const e = o.split(",");
          e.length >= 2 && v.push({ name: f, j1: e[0], j2: e[1] });
        }
        break;
      }
      case "LOAD": {
        const f = L.get("ADD");
        f && E.push({ joint: f, fx: G(L.get("UX")), fy: G(L.get("UY")), fz: G(L.get("UZ")), mx: G(L.get("MX")), my: G(L.get("MY")), mz: G(L.get("MZ")) });
        break;
      }
    }
  }
  return Mt(p, I, A, m, y, Y, v, M, s, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), E);
}
function Mt(S, p, I, A, m, y, Y, v, M, s, E, F) {
  var _a;
  const J = [], W = /* @__PURE__ */ new Map(), B = [];
  for (const [d, P] of y) W.set(d, B.length), J.push(d), B.push(P);
  const k = [], Z = [], L = /* @__PURE__ */ new Map();
  for (const d of Y) {
    const P = W.get(d.j1), b = W.get(d.j2);
    if (P !== void 0 && b !== void 0) {
      const z = k.length;
      k.push([P, b]), Z.push(d.name);
      const U = s.get(d.name);
      U && L.set(z, U);
    }
  }
  const N = k.length;
  for (const d of v) {
    const P = d.joints.map((b) => W.get(b)).filter((b) => b !== void 0);
    if (P.length >= 3) {
      const b = k.length;
      k.push(P), Z.push(d.name);
      const z = E.get(d.name);
      z && L.set(b, z);
    }
  }
  const f = k.length - N, o = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, e = /* @__PURE__ */ new Map(), l = I.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let d = 0; d < k.length; d++) {
    const P = L.get(d), b = P ? A.get(P) : null, z = P ? m.get(P) : null;
    if (b || k[d].length === 2) {
      const U = b || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, _ = I.get(U.material) || l, q = _.E || l.E, tt = _.nu || 0.3, et = _.G || q / (2 * (1 + tt));
      o.elasticities.set(d, q), o.shearModuli.set(d, et), o.areas.set(d, U.A || U.D * U.B), o.momentsOfInertiaZ.set(d, U.Iz || U.B * U.D ** 3 / 12), o.momentsOfInertiaY.set(d, U.Iy || U.D * U.B ** 3 / 12), o.torsionalConstants.set(d, U.J || 0), o.densities.set(d, _.density || 0), ((_a = U.shape) == null ? void 0 : _a.includes("Wide Flange")) || U.shape === "I" ? e.set(d, { type: "I", b: U.B, h: U.D, name: P || "I-section" }) : e.set(d, { type: "rect", b: U.B, h: U.D });
    } else if (z) {
      const U = I.get(z.material) || l, _ = U.E || l.E, q = U.nu || 0.2, tt = U.G || _ / (2 * (1 + q));
      o.elasticities.set(d, _), o.shearModuli.set(d, tt), o.thicknesses.set(d, z.thickness), o.poissonsRatios.set(d, q), o.densities.set(d, U.density || 0);
    }
  }
  const D = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [d, P] of M) {
    const b = W.get(d);
    b !== void 0 && D.supports.set(b, P);
  }
  for (const d of F) {
    const P = W.get(d.joint);
    if (P !== void 0) {
      const b = D.forces.get(P) || [0, 0, 0, 0, 0, 0];
      b[0] += d.fx, b[1] += d.fy, b[2] += d.fz, b[3] += d.mx, b[4] += d.my, b[5] += d.mz, D.forces.set(P, b);
    }
  }
  return { units: S, dof: p, materials: I, frameSections: A, shellSections: m, nodes: B, nodeNames: J, nodeNameToIdx: W, elements: k, elementNames: Z, elementSections: L, nodeInputs: D, elementInputs: o, sectionShapes: e, info: { nNodes: B.length, nFrames: N, nShells: f, title: `SAP2000 (${N} frames, ${f} shells)` } };
}
function Ft(S) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: p, elements: I, nodeInputs: A, elementInputs: m } = S, y = S.units || { force: "KN", length: "m" }, Y = S.title || "Awatif Model", v = [], M = (o) => v.push(o), s = () => v.push(" ");
  M(`File ${Y}.$2k was saved on m/d/yy at h:mm:ss`), s(), M('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), M("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), s();
  const E = [], F = [];
  if (I.forEach((o, e) => {
    o.length === 2 ? E.push(e) : F.push(e);
  }), E.length > 0) {
    M('TABLE:  "CONNECTIVITY - FRAME"');
    for (const o of E) {
      const e = I[o];
      M(`   Frame=${o + 1}   JointI=${e[0] + 1}   JointJ=${e[1] + 1}   IsCurved=No`);
    }
    s();
  }
  if (F.length > 0) {
    M('TABLE:  "CONNECTIVITY - AREA"');
    for (const o of F) {
      const e = I[o], l = e.map((D, d) => `Joint${d + 1}=${D + 1}`).join("   ");
      M(`   Area=${o + 1}   NumJoints=${e.length}   ${l}`);
    }
    s();
  }
  M('TABLE:  "COORDINATE SYSTEMS"'), M("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), s(), M('TABLE:  "DATABASE FORMAT TYPES"'), M("   UnitsCurr=Yes   OverrideE=No"), s();
  const J = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map();
  for (const o of E) {
    const e = ((_a = m.areas) == null ? void 0 : _a.get(o)) || 0, l = ((_b = m.momentsOfInertiaZ) == null ? void 0 : _b.get(o)) || 0, D = ((_c = m.momentsOfInertiaY) == null ? void 0 : _c.get(o)) || 0, d = ((_d = m.torsionalConstants) == null ? void 0 : _d.get(o)) || 0, P = ((_e = m.elasticities) == null ? void 0 : _e.get(o)) || 0, b = `MAT_${Math.round(P)}`, z = `A${e.toPrecision(6)}_Iz${l.toPrecision(6)}`;
    if (!J.has(z)) {
      let _ = 0.3, q = 0.3;
      e > 0 && l > 0 && (_ = Math.sqrt(12 * l / e), q = e / _), J.set(z, { A: e, Iz: l, Iy: D, J: d, b: q, h: _, matKey: b });
    }
    const U = [...J.keys()].indexOf(z) + 1;
    W.set(o, `SEC${U}`);
  }
  if (E.length > 0) {
    M('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const o of E) {
      const e = W.get(o) || "SEC1";
      M(`   Frame=${o + 1}   AutoSelect=N.A.   AnalSect=${e}   MatProp=Default`);
    }
    s();
  }
  if (J.size > 0) {
    M('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let o = 0;
    for (const [, e] of J) {
      o++;
      const l = e.A * 5 / 6;
      M(`   SectionName=SEC${o}   Material=${e.matKey}   Shape=Rectangular   t3=${X(e.h)}   t2=${X(e.b)}   Area=${X(e.A)}   TorsConst=${X(e.J)}   I33=${X(e.Iz)}   I22=${X(e.Iy)}   I23=0   AS2=${X(l)}   AS3=${X(l)} _`), M("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    s();
  }
  const B = !!S.layeredSection && F.length > 0, k = S.layeredSection, Z = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map();
  if (!B) for (const o of F) {
    const e = ((_f = m.thicknesses) == null ? void 0 : _f.get(o)) || 0.1, l = ((_g = m.elasticities) == null ? void 0 : _g.get(o)) || 0, D = `MAT_${Math.round(l)}`, d = `t${e.toPrecision(6)}`;
    Z.has(d) || Z.set(d, { t: e, matKey: D });
    const P = [...Z.keys()].indexOf(d) + 1;
    L.set(o, `SSEC${P}`);
  }
  if (F.length > 0) {
    M('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const o of F) {
      const e = B ? k.name : L.get(o) || "SSEC1";
      M(`   Area=${o + 1}   Section=${e}   MatProp=Default`);
    }
    if (s(), M('TABLE:  "AREA SECTION PROPERTIES"'), B) {
      const o = k, e = ((_h = o.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      M(`   Section=${o.name}   Material=${e}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${X(o.totalThickness)}   BendThick=${X(o.totalThickness)}   Color=Magenta`);
    } else {
      let o = 0;
      for (const [, e] of Z) o++, M(`   Section=SSEC${o}   Material=${e.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${X(e.t)}   BendThick=${X(e.t)}   Color=Cyan`);
    }
    if (s(), B) {
      M('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const o = k;
      for (const e of o.layers) {
        const l = e.angle ?? 0, D = e.numIntPts ?? 3;
        M(`   Section=${o.name}   LayerName=${e.name}   Distance=${X(e.distance)}   Thickness=${X(e.thickness)}   Type=Shell   NumIntPts=${D}   Material=${e.material}   MatAngle=${X(l * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      s();
    }
  }
  M('TABLE:  "JOINT COORDINATES"');
  for (let o = 0; o < p.length; o++) {
    const e = p[o];
    M(`   Joint=${o + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${X(e[0])}   Y=${X(e[1])}   Z=${X(e[2])}   SpecialJt=No`);
  }
  if (s(), A.supports && A.supports.size > 0) {
    M('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [o, e] of A.supports) {
      if (!e.some((D) => D)) continue;
      const l = (D) => D ? "Yes" : "No";
      M(`   Joint=${o + 1}   U1=${l(e[0])}   U2=${l(e[1])}   U3=${l(e[2])}   R1=${l(e[3])}   R2=${l(e[4])}   R3=${l(e[5])}`);
    }
    s();
  }
  const N = S.selfWtMult ?? 1;
  if (M('TABLE:  "LOAD PATTERN DEFINITIONS"'), M(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${N}`), s(), M('TABLE:  "LOAD CASE DEFINITIONS"'), M('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), s(), M('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), M('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), s(), A.forces && A.forces.size > 0) {
    M('TABLE:  "JOINT LOADS - FORCE"');
    for (const [o, e] of A.forces) e.some((l) => Math.abs(l) > 1e-12) && M(`   Joint=${o + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${X(e[0])}   F2=${X(e[1])}   F3=${X(e[2])}   M1=${X(e[3])}   M2=${X(e[4])}   M3=${X(e[5])}`);
    s();
  }
  const f = /* @__PURE__ */ new Map();
  for (let o = 0; o < I.length; o++) {
    const e = ((_i = m.elasticities) == null ? void 0 : _i.get(o)) || 0, l = ((_j = m.shearModuli) == null ? void 0 : _j.get(o)) || 0, D = e > 0 && l > 0 ? Math.max(0, Math.min(0.5, e / (2 * l) - 1)) : 0.2, d = ((_k = m.densities) == null ? void 0 : _k.get(o)) || 0, P = `MAT_${Math.round(e)}`;
    f.has(P) || f.set(P, { E: e, nu: D, G: l, rho: d });
  }
  M('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [o] of f) M(`   Material=${o}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  s(), M('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [o, e] of f) M(`   Material=${o}   UnitWeight=${X(e.rho * 9.81)}   UnitMass=${X(e.rho)}   E1=${X(e.E)}   G12=${X(e.G)}   U12=${X(e.nu)}   A1=9.9E-06`);
  s(), M('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [o] of f) M(`   Material=${o}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return s(), M('TABLE:  "PROGRAM CONTROL"'), M(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${y.force}, ${y.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), s(), M("END TABLE DATA"), M(""), v.join(`\r
`);
}
function X(S) {
  return S === 0 || Math.abs(S) < 1e-15 ? "0" : Math.abs(S) >= 1e6 || Math.abs(S) < 1e-3 && Math.abs(S) > 0 ? S.toExponential(8) : parseFloat(S.toPrecision(10)).toString();
}
function gt(S, p, I = 0.05) {
  const A = p.map(([m, y]) => `${(+m).toFixed(4)} ${(+y).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${S}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${I}  SPECTYPE "USER"  `, `  FUNCTION "${S}"  TIMEVAL "${A}"  `];
}
function Ot(S) {
  const { name: p, func: I, modalCase: A = "Modal", sfX: m = 9.81, sfY: y = 9.81 } = S, Y = [`  LOADCASE "${p}"  TYPE  "Response Spectrum"  MODALCASE  "${A}"  `];
  return m && Y.push(`  LOADCASE "${p}"  ACCEL  "U1"  FUNC  "${I}"  SF  ${m}  `), y && Y.push(`  LOADCASE "${p}"  ACCEL  "U2"  FUNC  "${I}"  SF  ${y}  `), Y;
}
function ut(S) {
  const { name: p = "Modal", ritz: I = false, nModes: A = 12 } = S;
  return I ? [`  LOADCASE "${p}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${p}"  MAXMODES  ${A} MINMODES  1 `, `  LOADCASE "${p}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${p}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${p}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${p}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${p}"  MAXMODES  ${A} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function Pt(S) {
  var _a;
  const p = (_a = S.e2kModel) == null ? void 0 : _a.rawSections;
  let I = p && p.size > 0 ? Lt(p, S.e2kModel) : Rt(S);
  return S.seismicNEC && (I = Ct(I, S.seismicNEC)), I;
}
function Ct(S, p) {
  const I = S.includes(`\r
`) ? `\r
` : `
`, A = S.split(/\r?\n/), m = p.name ?? "NEC", y = gt(m, p.points, p.dampRatio ?? 0.05), Y = p.modalCase ?? "Modal", v = Ot({ name: p.caseName ?? "Sismo NEC", func: m, modalCase: Y, sfX: p.sfX, sfY: p.sfY });
  let M = [];
  const s = (E) => A.some((F) => E.test(F));
  if (p.modal) {
    const E = new RegExp(`^\\s*LOADCASE\\s+"${Y}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let F = A.length - 1; F >= 0; F--) E.test(A[F]) && A.splice(F, 1);
    M = ut({ name: Y, ritz: !!p.modal.ritz, nModes: p.modal.nModes });
  } else s(new RegExp(`LOADCASE\\s+"${Y}"\\s+TYPE\\s+"Modal`)) || (M = ut({ name: Y }));
  return Tt(A, "FUNCTIONS", y), Tt(A, "LOAD CASES", [...M, ...v]), A.join(I);
}
function Tt(S, p, I) {
  const A = S.findIndex((Y) => Y.trim() === `$ ${p}`);
  if (A >= 0) {
    S.splice(A + 1, 0, ...I);
    return;
  }
  const m = S.findIndex((Y) => Y.trim() === "END"), y = m >= 0 ? m : S.length;
  S.splice(y, 0, `$ ${p}`, ...I, "");
}
function Lt(S, p) {
  const I = [], A = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  I.push("$ File exported from Awatif FEM Studio (round-trip)"), I.push("");
  for (const m of A) {
    const y = S.get(m);
    if (!(!y || y.length === 0)) {
      I.push(`$ ${m}`);
      for (const Y of y) I.push(Y);
      I.push("");
    }
  }
  for (const [m, y] of S) if (!A.includes(m) && y.length !== 0) {
    I.push(`$ ${m}`);
    for (const Y of y) I.push(Y);
    I.push("");
  }
  return I.push("  END"), I.push("$ END OF MODEL FILE"), I.join(`\r
`);
}
function Rt(S) {
  var _a, _b, _c, _d;
  const { nodes: p, elements: I, nodeInputs: A, elementInputs: m, title: y, units: Y } = S, v = (Y == null ? void 0 : Y.force) || "Tonf", M = (Y == null ? void 0 : Y.length) || "m", s = [], E = (t) => Math.round(t * 1e4) / 1e4, F = (() => {
    const t = (v || "Tonf").toLowerCase();
    return t === "tonf" || t === "tonf-f" ? 1 / 9.80665 : t === "kn" || t === "kn-f" ? 1 : t === "kgf" || t === "kg" ? 1 / 980665e-8 : t === "kip" || t === "kips" ? 1 / 4.44822 : 1;
  })(), J = (t) => t * F, W = (t) => t * F, B = (t) => t * F, k = /* @__PURE__ */ new Date(), Z = `${k.getMonth() + 1}/${k.getDate()}/${k.getFullYear()}  ${k.getHours()}:${String(k.getMinutes()).padStart(2, "0")}:${String(k.getSeconds()).padStart(2, "0")}`;
  s.push(`$ File   "Hekatan_export.e2k"  saved ${Z} in ETABS 22.6.0`), s.push(""), s.push("$ PROGRAM INFORMATION"), s.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), s.push(""), s.push("$ CONTROLS"), s.push(`  UNITS  "${v}"  "${M}"  "C"  `), s.push('  TITLE1  "Hekatan Struct export"  '), y && s.push(`  TITLE2  "${y}"  `), s.push("  PREFERENCE  MERGETOL 0.001"), s.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), s.push("");
  const L = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set();
  p.forEach((t) => {
    L.add(E(t[0])), N.add(E(t[1]));
  });
  const f = [...L].sort((t, n) => t - n), o = [...N].sort((t, n) => t - n);
  s.push("$ GRIDS"), s.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), f.forEach((t, n) => {
    const r = n < 26 ? String.fromCharCode(65 + n) : String.fromCharCode(65 + n % 26).repeat(Math.floor(n / 26) + 1);
    s.push(`  GRID "G1"  LABEL "${r}"  DIR "X"  COORD ${t}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), o.forEach((t, n) => {
    s.push(`  GRID "G1"  LABEL "${n + 1}"  DIR "Y"  COORD ${t}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), s.push("");
  const e = /* @__PURE__ */ new Set();
  p.forEach((t) => e.add(E(t[2])));
  const l = [...e].sort((t, n) => t - n), D = [], d = /* @__PURE__ */ new Map();
  D.push("Base"), d.set(l[0], "Base");
  for (let t = 1; t < l.length; t++) {
    const n = `Level_${t}`;
    D.push(n), d.set(l[t], n);
  }
  s.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let t = l.length - 1; t >= 1; t--) s.push(`  STORY "${D[t]}"  HEIGHT ${E(l[t] - l[t - 1])} MASTERSTORY "Yes"  `);
  l.length > 0 && s.push(`  STORY "Base"  ELEV ${l[0]} `), s.push(""), I.some((t) => t.length === 4), s.push("$ DIAPHRAGM NAMES"), s.push('  DIAPHRAGM "D1"    TYPE RIGID'), s.push(""), s.push("$ MATERIAL PROPERTIES");
  const P = /* @__PURE__ */ new Set();
  (_a = m.elasticities) == null ? void 0 : _a.forEach((t) => P.add(t));
  const b = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map();
  let U = 0, _ = 0;
  const q = 980665e-8, tt = /* @__PURE__ */ new Map();
  if (m.densities && m.densities.size > 0) {
    const t = /* @__PURE__ */ new Map();
    m.densities.forEach((n, r) => {
      var _a2;
      const a = (_a2 = m.elasticities) == null ? void 0 : _a2.get(r);
      a !== void 0 && (t.has(a) || t.set(a, []), t.get(a).push(n));
    }), t.forEach((n, r) => {
      const a = n.reduce((h, T) => h + T, 0) / n.length, O = a > 100 ? a * q : a * 9.80665;
      tt.set(r, O);
    });
  }
  for (const t of P) {
    const n = t >= 1e8, r = n ? `Steel_${++U}` : `Conc_${++_}`;
    b.set(t, r), z.set(t, n);
    const a = tt.get(t) ?? (n ? 76.97 : 24), O = W(t), h = B(a), T = n ? 0.3 : 0.2, w = n ? 117e-7 : 1e-5;
    if (n) {
      s.push(`  MATERIAL  "${r}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${E(h)}`), s.push(`  MATERIAL  "${r}"    SYMTYPE "Isotropic"  E ${E(O)}  U ${T}  A ${w}`);
      const x = 345e3, H = 45e4;
      s.push(`  MATERIAL  "${r}"  FY ${E(W(x))}  FU ${E(W(H))}  FYE ${E(W(x * 1.1))}  FUE ${E(W(H * 1.1))}`);
    } else s.push(`  MATERIAL  "${r}"    TYPE "Concrete"    WEIGHTPERVOLUME ${E(h)}`), s.push(`  MATERIAL  "${r}"    SYMTYPE "Isotropic"  E ${E(O)}  U ${T}  A ${w}`), s.push(`  MATERIAL  "${r}"    FC ${E(W(24e3))}`);
  }
  s.push(""), s.push("$ FRAME SECTIONS");
  const et = /* @__PURE__ */ new Set(), st = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), it = 0.05;
  I.forEach((t, n) => {
    var _a2, _b2, _c2, _d2, _e, _f;
    if (t.length !== 2) return;
    const r = (_a2 = m.sectionShapes) == null ? void 0 : _a2.get(n), a = ((_b2 = m.elasticities) == null ? void 0 : _b2.get(n)) ?? 0, O = b.get(a) || "Conc_1", h = z.get(a) ?? a >= 1e8, T = ((_c2 = m.areas) == null ? void 0 : _c2.get(n)) ?? 0, w = ((_d2 = m.momentsOfInertiaY) == null ? void 0 : _d2.get(n)) ?? 0;
    (_e = m.momentsOfInertiaZ) == null ? void 0 : _e.get(n), (_f = m.torsionalConstants) == null ? void 0 : _f.get(n);
    let x = (r == null ? void 0 : r.type) || "rect", H = (r == null ? void 0 : r.h) ?? 0, V = (r == null ? void 0 : r.b) ?? 0, ot = (r == null ? void 0 : r.d) ?? 0;
    const dt = (r == null ? void 0 : r.tf) ?? 0, ht = (r == null ? void 0 : r.tw) ?? 0;
    H <= 0 && V <= 0 && ot <= 0 && T > 0 && (w > 0 ? (H = Math.sqrt(12 * w / T), V = T / H) : H = V = Math.sqrt(T), (!isFinite(H) || H < it) && (H = it), (!isFinite(V) || V < it) && (V = it), x = "rect"), H <= 0 && V <= 0 && ot <= 0 && (H = 0.3, V = 0.3, x = "rect");
    const At = `${x}_${E(H)}_${E(V)}_${E(ot)}_${E(dt)}_${E(ht)}_${O}`;
    (r == null ? void 0 : r.name) && !j.has(At) && j.set(At, r.name);
    let nt = j.get(At);
    if (!nt) {
      const St = h ? "S" : "C";
      x === "rect" ? nt = `${St}_R${Math.round(V * 100)}x${Math.round(H * 100)}` : x === "circ" ? nt = `${St}_C_D${Math.round(ot * 100)}` : x === "I" ? nt = `${St}_I${Math.round(H * 100)}x${Math.round(V * 100)}` : x === "HSS" ? nt = `${St}_HSS${Math.round(V * 100)}x${Math.round(H * 100)}x${Math.round(ht * 1e3)}` : nt = `${St}_Sec${et.size + 1}`, j.set(At, nt);
    }
    if (st.set(n, nt), et.has(nt)) return;
    et.add(nt);
    let at;
    x === "I" ? at = "Steel I/Wide Flange" : x === "HSS" ? at = "Steel Tube" : x === "CFT" ? at = "Filled Steel Tube" : x === "pipe" ? at = "Steel Pipe" : x === "L" ? at = "Steel Angle" : x === "C" ? at = "Steel Channel" : x === "2C" ? at = "Steel Double Channel" : x === "circ" ? at = "Concrete Circle" : at = "Concrete Rectangular";
    let ft = `  FRAMESECTION  "${nt}"  MATERIAL "${O}"  SHAPE "${at}"`;
    H && (ft += `  D ${E(H)}`), V && (ft += `  B ${E(V)}`), ot && !H && (ft += `  D ${E(ot)}`), dt && (ft += `  TF ${E(dt)}`), ht && (ft += `  TW ${E(ht)}`), s.push(ft);
  }), s.push("");
  const ct = /* @__PURE__ */ new Map();
  let K = 0;
  p.forEach((t) => {
    const n = `${E(t[0])},${E(t[1])}`;
    ct.has(n) || ct.set(n, `${++K}`);
  }), s.push("$ POINT COORDINATES");
  for (const [t, n] of ct) {
    const [r, a] = t.split(",").map(Number);
    s.push(`  POINT "${n}"  ${r} ${a} `);
  }
  s.push("");
  const Q = (t) => {
    const n = p[t], r = `${E(n[0])},${E(n[1])}`;
    return { pt: ct.get(r) || "1", story: d.get(E(n[2])) || "Base" };
  }, rt = (t) => {
    var _a2, _b2, _c2, _d2;
    const n = [], r = (_a2 = S.propertyModifiers) == null ? void 0 : _a2.get(t);
    r && r.some((T) => Math.abs(T - 1) > 1e-9) && n.push(`PROPMODIFIERS "${r.map((T) => E(T)).join(" ")}"`);
    const a = (_b2 = m.momentReleases) == null ? void 0 : _b2.get(t);
    if (a && a.some((T) => T)) {
      const T = [];
      a.length === 12 ? (a[0] && T.push("PI"), a[1] && T.push("V2I"), a[2] && T.push("V3I"), a[3] && T.push("TI"), a[4] && T.push("M2I"), a[5] && T.push("M3I"), a[6] && T.push("PJ"), a[7] && T.push("V2J"), a[8] && T.push("V3J"), a[9] && T.push("TJ"), a[10] && T.push("M2J"), a[11] && T.push("M3J")) : a.length === 6 && (a[0] && T.push("TI"), a[1] && T.push("M2I"), a[2] && T.push("M3I"), a[3] && T.push("TJ"), a[4] && T.push("M2J"), a[5] && T.push("M3J")), T.length > 0 && n.push(`RELEASE "${T.join(" ")}"`);
    }
    const O = (_c2 = m.insertionPoints) == null ? void 0 : _c2.get(t);
    O && (Math.abs(O[0]) > 1e-9 || Math.abs(O[1]) > 1e-9) && n.push(`LATEROFFSET ${E(O[0])} TRANSOFFSET ${E(O[1])}`);
    const h = (_d2 = m.rigidOffsets) == null ? void 0 : _d2.get(t);
    return h && (Math.abs(h[0]) > 1e-9 || Math.abs(h[1]) > 1e-9) && n.push(`LENGTHOFFI ${E(h[0])} LENGTHOFFJ ${E(h[1])} RIGIDZONE 0.5`), n.length > 0 ? ` ${n.join(" ")} ` : "";
  }, lt = [], Et = /* @__PURE__ */ new Set(), pt = /* @__PURE__ */ new Map();
  I.forEach((t, n) => {
    if (t.length !== 2) return;
    const r = mt(p, t);
    if (r === "BEAM") return;
    const a = p[t[0]][2] <= p[t[1]][2] ? t[0] : t[1], O = p[t[0]][2] <= p[t[1]][2] ? t[1] : t[0];
    if (Math.abs(p[a][0] - p[O][0]) > 1e-6 || Math.abs(p[a][1] - p[O][1]) > 1e-6) return;
    const h = Q(a), T = st.get(n) || `Sec_${n}`, w = `${h.pt}_${T}_${r}`;
    pt.has(w) || pt.set(w, []), pt.get(w).push({ i: n, bot: a, top: O, zBot: E(p[a][2]), zTop: E(p[O][2]), planPt: h.pt, secName: T, type: r });
  }), pt.forEach((t, n) => {
    t.sort((a, O) => a.zBot - O.zBot);
    let r = 0;
    for (let a = 1; a <= t.length; a++) if (a === t.length || Math.abs(t[a].zBot - t[a - 1].zTop) > 1e-6) {
      const h = t.slice(r, a);
      h.length >= 1 && (lt.push({ elemIndices: h.map((T) => T.i), planPt: h[0].planPt, bottomNodeIdx: h[0].bot, topNodeIdx: h[h.length - 1].top, secName: h[0].secName, type: h[0].type, nSegments: h.length }), h.forEach((T) => Et.add(T.i))), r = a;
    }
  }), s.push("$ LINE CONNECTIVITIES");
  const $ = [];
  lt.forEach((t, n) => {
    const r = `C${n + 1}`, a = Q(t.topNodeIdx);
    Q(t.bottomNodeIdx);
    const O = E(p[t.topNodeIdx][2]), h = E(p[t.bottomNodeIdx][2]), T = l.indexOf(O), w = l.indexOf(h), x = Math.max(1, T - w), H = rt(t.elemIndices[0]);
    s.push(`  LINE  "${r}"  ${t.type}  "${a.pt}"  "${a.pt}"  ${x}`), $.push(`  LINEASSIGN  "${r}"  "${a.story}"  SECTION "${t.secName}" ${H} RIGIDZONE 0.5 MAXSTASPC 0.5 MINNUMSTA ${t.nSegments} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  }), I.forEach((t, n) => {
    if (t.length !== 2 || Et.has(n)) return;
    const r = mt(p, t), a = st.get(n) || `Sec_${n}`, O = rt(n);
    if (r === "BEAM") {
      const h = Q(t[0]), T = Q(t[1]);
      s.push(`  LINE  "E${n + 1}"  BEAM  "${h.pt}"  "${T.pt}"  0`), $.push(`  LINEASSIGN  "E${n + 1}"  "${h.story}"  SECTION "${a}" ${O} RIGIDZONE 0.5 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const h = p[t[0]][2] <= p[t[1]][2] ? t[0] : t[1], T = p[t[0]][2] <= p[t[1]][2] ? t[1] : t[0], w = Q(T), x = E(p[h][2]), H = E(p[T][2]), V = l.indexOf(x), ot = l.indexOf(H), dt = Math.max(1, ot >= 0 && V >= 0 ? ot - V : 1);
      s.push(`  LINE  "E${n + 1}"  ${r}  "${w.pt}"  "${w.pt}"  ${dt}`), $.push(`  LINEASSIGN  "E${n + 1}"  "${w.story}"  SECTION "${a}" ${O} RIGIDZONE 0.5 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    }
  }), s.push("");
  const g = S.weightMode ?? "auto", c = /* @__PURE__ */ new Set();
  s.push("$ POINT ASSIGNS"), (_b = A.supports) == null ? void 0 : _b.forEach((t, n) => {
    const r = [];
    if (t[0] && r.push("UX"), t[1] && r.push("UY"), t[2] && r.push("UZ"), t[3] && r.push("RX"), t[4] && r.push("RY"), t[5] && r.push("RZ"), r.length > 0) {
      const a = Q(n), O = a.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      s.push(`  POINTASSIGN  "${a.pt}"  "${a.story}"  RESTRAINT "${r.join(" ")}" ${O} `), c.add(`${a.pt}@${a.story}`);
    }
  }), lt.forEach((t) => {
    const n = Q(t.topNodeIdx), r = `${n.pt}@${n.story}`;
    !c.has(r) && n.story !== "Base" && (s.push(`  POINTASSIGN  "${n.pt}"  "${n.story}"  DIAPH "D1"  `), c.add(r));
  }), g === "manual" && A.loads && A.loads.forEach((t, n) => {
    const r = Q(n), a = `${r.pt}@${r.story}`;
    c.has(a) || (s.push(`  POINTASSIGN  "${r.pt}"  "${r.story}"  DIAPH "DISCONNECTED"  `), c.add(a));
  }), s.push(""), s.push("$ LINE ASSIGNS"), $.forEach((t) => s.push(t)), s.push("");
  const C = [];
  I.forEach((t, n) => {
    if (t.length === 4) {
      const r = p[t[0]], a = p[t[1]], O = p[t[2]], h = [a[0] - r[0], a[1] - r[1], a[2] - r[2]], T = [O[0] - r[0], O[1] - r[1], O[2] - r[2]], w = h[1] * T[2] - h[2] * T[1], x = h[2] * T[0] - h[0] * T[2], H = h[0] * T[1] - h[1] * T[0], V = Math.sqrt(w * w + x * x + H * H), ot = V > 1e-10 && Math.abs(H) / V < 0.5;
      C.push({ idx: n, el: t, isWall: ot });
    }
  });
  const i = (() => {
    for (const [t, n] of z) if (!n) return b.get(t);
    return b.values().next().value || "Conc_1";
  })();
  if (C.some((t) => !t.isWall)) {
    s.push("$ SLAB PROPERTIES");
    const t = ((_c = m.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
    s.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${i}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${E(t)} `), s.push("");
  }
  if (C.some((t) => t.isWall)) {
    s.push("$ WALL PROPERTIES");
    const t = ((_d = m.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
    s.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${i}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${E(t)} `), s.push("");
  }
  if (C.length > 0) {
    s.push("$ AREA CONNECTIVITIES");
    const t = [];
    C.forEach((n, r) => {
      const { el: a, isWall: O } = n, h = O ? `W${r + 1}` : `F${r + 1}`, T = O ? "PANEL" : "FLOOR", w = a.map((x) => Q(x));
      if (O) {
        const x = p[a[0]][2] <= p[a[2]][2] ? 0 : 2, H = p[a[1]][2] <= p[a[3]][2] ? 1 : 3;
        s.push(`  AREA "${h}"  ${T}  4  "${w[x].pt}"  "${w[H].pt}"  "${w[H].pt}"  "${w[x].pt}"  1  1  0  0  `);
        const V = w[x === 0 ? 2 : 0].story;
        t.push(`  AREAASSIGN  "${h}"  "${V}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else s.push(`  AREA "${h}"  ${T}  4  "${w[0].pt}"  "${w[1].pt}"  "${w[2].pt}"  "${w[3].pt}"  0  0  0  0  `), t.push(`  AREAASSIGN  "${h}"  "${w[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
    }), s.push(""), s.push("$ AREA ASSIGNS"), t.forEach((n) => s.push(n)), s.push("");
  }
  const u = g === "manual" ? 0 : 1;
  s.push("$ LOAD PATTERNS"), s.push(`  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  ${u}`), s.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), s.push("");
  const R = [];
  return A.loads && A.loads.size > 0 && A.loads.forEach((t, n) => {
    const [r, a, O] = t, h = Q(n);
    Math.abs(r) > 1e-10 && R.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "FORCE"  LC "Dead"  FX ${E(J(r))}  FY 0  FZ 0`), Math.abs(a) > 1e-10 && R.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY ${E(J(a))}  FZ 0`), g === "manual" && Math.abs(O) > 1e-10 && R.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY 0  FZ ${E(J(O))}`);
  }), A.moments && A.moments.size > 0 && A.moments.forEach((t, n) => {
    const [r, a, O] = t, h = Q(n);
    Math.abs(r) > 1e-10 && R.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "MOMENT"  LC "Dead"  MX ${E(J(r))}  MY 0  MZ 0`), Math.abs(a) > 1e-10 && R.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY ${E(J(a))}  MZ 0`), Math.abs(O) > 1e-10 && R.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY 0  MZ ${E(J(O))}`);
  }), R.length > 0 && (s.push("$ POINT OBJECT LOADS"), R.forEach((t) => s.push(t)), s.push("")), s.push("$ ANALYSIS OPTIONS"), s.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), s.push('  PDELTA  METHOD "NONE"  '), s.push(""), s.push("$ MASS SOURCE"), s.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), s.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), s.push(""), s.push("$ LOAD CASES"), s.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), s.push('  LOADCASE "Dead"  LOADPAT  "Dead"  SF 1 '), s.push('  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), s.push('  LOADCASE "Live"  LOADPAT  "Live"  SF 1 '), s.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), s.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), s.push(""), s.push("$ LOAD COMBINATIONS"), s.push('  COMBO "1.4D"  TYPE "Linear Add"  '), s.push('  COMBO "1.4D"  LOADCASE  "Dead"  SF 1.4 '), s.push('  COMBO "1.2D+1.6L"  TYPE "Linear Add"  '), s.push('  COMBO "1.2D+1.6L"  LOADCASE  "Dead"  SF 1.2 '), s.push('  COMBO "1.2D+1.6L"  LOADCASE  "Live"  SF 1.6 '), s.push(""), s.push("  END"), s.push("$ END OF MODEL FILE"), s.join(`\r
`);
}
function mt(S, p) {
  const I = S[p[0]], A = S[p[1]], m = Math.abs(A[2] - I[2]), y = Math.sqrt((A[0] - I[0]) ** 2 + (A[1] - I[1]) ** 2), Y = m > y * 0.5;
  return Y && y > 0.01 ? "BRACE" : Y ? "COLUMN" : "BEAM";
}
export {
  Ft as a,
  xt as b,
  yt as c,
  Pt as e,
  Dt as p
};
