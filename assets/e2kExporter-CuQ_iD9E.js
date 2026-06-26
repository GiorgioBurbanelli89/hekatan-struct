function yt() {
  const d = document.createElement("div");
  d.id = "modal-results", d.style.cssText = `
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
    let T = false, y = 0, Y = 0, v = 0, $ = 0;
    d.addEventListener("mousedown", (s) => {
      const S = s.target;
      if (!S.closest("#modal-header") || S.closest("button")) return;
      T = true;
      const w = d.getBoundingClientRect();
      y = s.clientX, Y = s.clientY, v = w.left, $ = w.top, d.style.bottom = "auto", d.style.right = "auto", d.style.left = `${w.left}px`, d.style.top = `${w.top}px`, s.preventDefault();
    }), document.addEventListener("mousemove", (s) => {
      if (!T) return;
      let S = v + (s.clientX - y), w = $ + (s.clientY - Y);
      S = Math.max(-d.offsetWidth + 80, Math.min(window.innerWidth - 80, S)), w = Math.max(0, Math.min(window.innerHeight - 30, w)), d.style.left = `${S}px`, d.style.top = `${w}px`;
    }), document.addEventListener("mouseup", () => {
      T = false;
    });
  }
  let p = false;
  const I = 0.9;
  function m(T, y) {
    var _a, _b, _c, _d;
    if (!T.frequencies || T.frequencies.length === 0) {
      d.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const Y = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], v = [0, 0, 0, 0, 0, 0], $ = T.frequencies.length;
    let s = -1, S = -1, w = -1, J = 0, W = 0;
    {
      const e = [0, 0, 0, 0, 0, 0];
      for (let l = 0; l < $; l++) {
        const D = ((_a = T.massParticipation) == null ? void 0 : _a[l]) || [0, 0, 0, 0, 0, 0];
        for (let E = 0; E < 6; E++) e[E] += D[E];
        s < 0 && e[0] >= I && (s = l + 1), S < 0 && e[1] >= I && (S = l + 1), w < 0 && e[0] >= I && e[1] >= I && (w = l + 1);
      }
      J = e[0], W = e[1];
    }
    let k = -1, B = -1, Z = -1;
    const L = 0.1;
    for (let e = 0; e < $; e++) {
      const l = ((_b = T.massParticipation) == null ? void 0 : _b[e]) || [0, 0, 0, 0, 0, 0];
      k < 0 && l[0] > L && (k = e + 1), B < 0 && l[1] > L && (B = e + 1), Z < 0 && l[5] > L && (Z = e + 1);
    }
    const M = w > 0 ? `<span style="color:#0f0">\u2713 ASCE 7-22 \xA712.9.1.1 \u2014 90 % alcanzado en X e Y al modo ${w} de ${$}</span>` : s > 0 && S < 0 ? `<span style="color:#fa0">\u26A0 X cumple en modo ${s}, Y todav\xEDa en ${(W * 100).toFixed(1)} % \u2014 sub\xED \xABN\xB0 modos\xBB en Settings \u25B8 S\xEDsmico NEC</span>` : S > 0 && s < 0 ? `<span style="color:#fa0">\u26A0 Y cumple en modo ${S}, X todav\xEDa en ${(J * 100).toFixed(1)} % \u2014 sub\xED \xABN\xB0 modos\xBB en Settings \u25B8 S\xEDsmico NEC</span>` : `<span style="color:#f44">\u2717 ASCE 7-22 NO cumplido en ${$} modos \xB7 \u03A3Ux=${(J * 100).toFixed(1)} % \xB7 \u03A3Uy=${(W * 100).toFixed(1)} % \u2014 sub\xED \xABN\xB0 modos\xBB en Settings \u25B8 S\xEDsmico NEC</span>`, f = (() => {
      const e = (l, D) => {
        var _a2;
        if (l < 0) return `<span style="color:#f44">${D}: no encontrado en ${$} modos</span>`;
        const E = ((_a2 = T.massParticipation) == null ? void 0 : _a2[l - 1]) || [0, 0, 0, 0, 0, 0], F = D === "Ux" ? 0 : D === "Uy" ? 1 : 5, P = T.frequencies[l - 1] > 0 ? 1 / T.frequencies[l - 1] : 0;
        return `<span style="color:#0f0">${D}: modo ${l}, T=${P.toFixed(3)} s, MPF=${(E[F] * 100).toFixed(1)} %</span>`;
      };
      return `<div style="margin:4px 0; padding:4px 6px; background:rgba(0,255,255,0.05); border-left:2px solid #0ff; font-size:11px;">
  \u{1F3AF} <b>Modos s\xEDsmicos principales</b> (ASCE 7-22 \xA712.9.1):<br>
  ${e(k, "Ux")} \xB7 ${e(B, "Uy")} \xB7 ${e(Z, "Rz")}
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
    if (o += '<div id="modal-body" style="padding:0 12px 10px 12px;">', o += `<div style="padding:6px 0; font-weight:bold; font-size:13px;">${M}</div>`, o += f, y.properties) for (const e of y.properties) o += `<span style="color:#888">${e}</span>
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
    if (T.frequencies.forEach((e, l) => {
      var _a2;
      const D = e > 0 ? 1 / e : 0, E = e * 2 * Math.PI, F = e >= 500, P = ((_a2 = T.massParticipation) == null ? void 0 : _a2[l]) || [0, 0, 0, 0, 0, 0];
      for (let K = 0; K < 6; K++) v[K] += P[K];
      let z = 0, U = P[0];
      for (let K = 1; K < 6; K++) P[K] > U && (U = P[K], z = K);
      const _ = F ? "masa faltante (r\xEDgida)" : U < 0.05 ? "\u2014" : `${Y[z]} (${(U * 100).toFixed(0)} %)`, q = z === 0 || z === 1 ? "#0f0" : z === 5 ? "#0ff" : z === 2 ? "#fa0" : "#888", tt = l + 1 === s, et = l + 1 === S, st = l + 1 === w;
      o += `<tr style="border-bottom:1px solid #fff1; ${F ? "background:rgba(0,180,255,0.12);" : st ? "background:rgba(0,255,0,0.12);" : tt || et ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${F ? "MF" : l + 1 + (st ? " \u2605" : "")}</td>
  <td style="padding:2px 6px; text-align:right">${F ? "r\xEDgido" : e.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${F ? "\u22480" : D.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${F ? "\u2014" : E.toFixed(2)}</td>`;
      for (let K = 0; K < 6; K++) {
        const Q = (P[K] * 100).toFixed(1), rt = P[K] > 0.5 ? "#f00" : P[K] > 0.1 ? "#ff0" : "#0f0";
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
</div>`, o += "</div>", d.innerHTML = o, p) {
      const e = d.querySelector("#modal-body"), l = d.querySelector("#modal-minimize");
      e && (e.style.display = "none"), l && (l.textContent = "\u25A2", l.title = "Restaurar");
    }
    (_c = d.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      p = !p;
      const e = d.querySelector("#modal-body"), l = d.querySelector("#modal-minimize");
      p ? (e.style.display = "none", l.textContent = "\u25A2", l.title = "Restaurar") : (e.style.display = "block", l.textContent = "\u25AC", l.title = "Minimizar");
    }), (_d = d.querySelector("#modal-copy")) == null ? void 0 : _d.addEventListener("click", () => {
      const e = [];
      e.push(`Modal Analysis \u2014 ${y.title}`), e.push(M.replace(/<[^>]+>/g, ""));
      const l = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${Y.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      e.push(l), e.push("-".repeat(l.length));
      const D = [0, 0, 0, 0, 0, 0];
      T.frequencies.forEach((F, P) => {
        var _a2;
        const z = F > 0 ? 1 / F : 0, U = F * 2 * Math.PI, _ = ((_a2 = T.massParticipation) == null ? void 0 : _a2[P]) || [0, 0, 0, 0, 0, 0];
        for (let j = 0; j < 6; j++) D[j] += _[j];
        let q = 0, tt = _[0];
        for (let j = 1; j < 6; j++) _[j] > tt && (tt = _[j], q = j);
        const et = tt < 0.05 ? "\u2014" : `${Y[q]} (${(tt * 100).toFixed(0)}%)`, st = _.map((j) => ((j * 100).toFixed(1) + "%").padStart(6)).join(" ");
        e.push(`${String(P + 1).padStart(4)}  ${F.toFixed(4).padStart(9)}  ${z.toFixed(4).padStart(9)}  ${U.toFixed(2).padStart(9)}  ${st}  ${(D[0] * 100).toFixed(1).padStart(5)}%  ${(D[1] * 100).toFixed(1).padStart(5)}%  ${(D[5] * 100).toFixed(1).padStart(5)}%  ${et}`);
      }), navigator.clipboard.writeText(e.join(`
`));
      const E = d.querySelector("#modal-copy");
      E.textContent = "\u2713", setTimeout(() => E.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: d, render: m };
}
function Dt(d) {
  var _a;
  const p = d.split(/\r?\n/), I = { force: "TONF", length: "M" }, m = [], T = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), v = [], $ = [], s = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), w = [], J = [];
  let W = "", k = "";
  const B = /* @__PURE__ */ new Map();
  for (const N of p) {
    const g = N.trim();
    if (!g || g.startsWith("$")) {
      g.startsWith("$ ") && (k = g.substring(2).trim());
      continue;
    }
    if (k && (B.has(k) || B.set(k, []), B.get(k).push(N)), k === "CONTROLS") {
      const c = g.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
      c && (I.force = c[1], I.length = c[2]);
      const C = g.match(/TITLE2\s+"([^"]+)"/);
      C && (W = C[1]);
    }
    if (k === "STORIES - IN SEQUENCE FROM TOP") {
      const c = g.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
      if (c) {
        const C = c[1], i = c[2] ? parseFloat(c[2]) : 0, A = c[3] ? parseFloat(c[3]) : void 0;
        m.push({ name: C, height: i, elev: A ?? 0 });
      }
    }
    if (k === "MATERIAL PROPERTIES") {
      const c = g.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
      if (c) {
        const C = c[1];
        T.has(C) || T.set(C, { type: c[2] || "", E: 0, G: 0, nu: 0 });
        const i = T.get(C);
        c[2] && (i.type = c[2]);
        const A = g.match(/\bE\s+([\d.eE+-]+)/);
        A && (i.E = parseFloat(A[1]));
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
    if (k === "FRAME SECTIONS") {
      const c = g.match(/FRAMESECTION\s+"([^"]+)"/);
      if (c) {
        const C = c[1];
        y.has(C) || y.set(C, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
        const i = y.get(C), A = g.match(/MATERIAL\s+"([^"]+)"/);
        A && (i.material = A[1]);
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
        const u = g.match(/I2MOD\s+([\d.eE+-]+)/);
        u && (i.modI2 = parseFloat(u[1]));
        const b = g.match(/I3MOD\s+([\d.eE+-]+)/);
        b && (i.modI3 = parseFloat(b[1]));
      }
    }
    if (k === "POINT COORDINATES") {
      const c = g.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
      c && Y.set(c[1], [parseFloat(c[2]), parseFloat(c[3])]);
    }
    if (k === "LINE CONNECTIVITIES") {
      const c = g.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
      c && v.push({ name: c[1], type: c[2], pt1: c[3], pt2: c[4], nStories: parseInt(c[5]) });
    }
    if (k === "POINT ASSIGNS") {
      const c = g.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
      c && s.set(`${c[1]}@${c[2]}`, c[3].split(/\s+/));
    }
    if (k === "LINE ASSIGNS") {
      const c = g.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
      if (c) {
        const C = { story: c[2], section: c[3], rigidZone: 0, releases: [], angle: 0 }, i = g.match(/RIGIDZONE\s+([\d.eE+-]+)/);
        i && (C.rigidZone = parseFloat(i[1]));
        const A = g.match(/RELEASE\s+"([^"]+)"/);
        A && (C.releases = A[1].split(/\s+/));
        const R = g.match(/ANG\s+([-\d.eE+]+)/);
        R && (C.angle = parseFloat(R[1])), S.set(`${c[1]}@${c[2]}`, C);
      }
    }
    if (k === "GRIDS") {
      const c = g.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
      c && J.push({ label: c[1], dir: c[2], coord: parseFloat(c[3]) });
    }
    if (k === "FRAME OBJECT LOADS") {
      const c = g.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      c && w.push({ line: c[1], story: c[2], type: c[3], dir: c[4], lc: c[5], val: parseFloat(c[6]) });
    }
    if (k === "AREA CONNECTIVITIES") {
      const c = g.match(/AREA\s+"([^"]+)"\s+(?:([A-Za-z]\w*)\s+)?\d+\s+(.+)/);
      if (c) {
        const C = ((_a = c[3].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((i) => i.replace(/"/g, ""))) || [];
        $.push({ name: c[1], pts: C, nStories: 0 });
      }
    }
  }
  const Z = /* @__PURE__ */ new Map();
  if (m.length > 0) {
    const N = m.length - 1;
    Z.set(m[N].name, m[N].elev);
    for (let g = N - 1; g >= 0; g--) {
      const C = Z.get(m[g + 1].name) + m[g].height;
      m[g].elev = C, Z.set(m[g].name, C);
    }
  }
  const L = [], M = [], f = /* @__PURE__ */ new Map(), o = (N, g) => `${N}@${g}`, e = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
  for (const N of v) l.set(N.name, N);
  for (const N of v) for (const [g, c] of S) {
    if (!g.startsWith(N.name + "@")) continue;
    const C = c.story, i = m.findIndex((A) => A.name === C);
    if (!(i < 0)) if (N.type === "COLUMN" || N.type === "BRACE") {
      e.add(o(N.pt2, C));
      const A = Math.max(N.nStories, 1), R = Math.min(i + A, m.length - 1);
      e.add(o(N.pt1, m[R].name));
    } else e.add(o(N.pt1, C)), e.add(o(N.pt2, C));
  }
  for (const [N] of s) e.add(N);
  for (const N of e) {
    const [g, c] = N.split("@"), C = Y.get(g), i = Z.get(c);
    C === void 0 || i === void 0 || (L.push([C[0], C[1], i]), M.push(N), f.set(N, L.length - 1));
  }
  const D = [], E = [], F = [], P = [], z = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
  for (const N of v) for (const [g, c] of S) {
    if (!g.startsWith(N.name + "@")) continue;
    const C = c.story, i = m.findIndex((a) => a.name === C);
    if (i < 0) continue;
    let A, R;
    if (N.type === "COLUMN" || N.type === "BRACE") {
      const a = Math.max(N.nStories, 1), O = Math.min(i + a, m.length - 1);
      A = o(N.pt1, m[O].name), R = o(N.pt2, C);
    } else A = o(N.pt1, C), R = o(N.pt2, C);
    const t = f.get(A), n = f.get(R);
    if (t === void 0 || n === void 0 || t === n) continue;
    const r = D.length;
    if (D.push([t, n]), E.push(N.name), F.push(N.type), P.push(C), z.set(r, c.section), c.rigidZone > 0 && U.set(r, [c.rigidZone, c.rigidZone]), c.releases.length > 0) {
      const a = new Array(12).fill(false), O = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const h of c.releases) {
        const u = O[h];
        u !== void 0 && (a[u] = true);
      }
      _.set(r, a);
    }
  }
  const q = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map();
  for (const [N, g] of z) {
    const c = y.get(g);
    if (!c) continue;
    const C = T.get(c.material);
    C && (q.set(N, C.E), tt.set(N, C.G));
    const i = c.D, A = c.B, R = c.TF, t = c.TW;
    let n = 0, r = 0, a = 0, O = 0, h = 0, u = 0, b = "rect";
    switch (c.shape) {
      case "Concrete Rectangular":
        n = i * A, r = A * i ** 3 / 12, a = i * A ** 3 / 12, O = A * i ** 3 * (1 / 3 - 0.21 * (i / A) * (1 - i ** 4 / (12 * A ** 4))), h = u = 5 / 6 * n, b = "rect";
        break;
      case "Concrete Circle":
        n = Math.PI * i ** 2 / 4, r = a = Math.PI * i ** 4 / 64, O = Math.PI * i ** 4 / 32, h = u = 0.9 * n, b = "circ";
        break;
      case "Steel I/Wide Flange":
        n = 2 * A * R + (i - 2 * R) * t, r = (A * i ** 3 - (A - t) * (i - 2 * R) ** 3) / 12, a = (2 * R * A ** 3 + (i - 2 * R) * t ** 3) / 12, O = (2 * A * R ** 3 + (i - 2 * R) * t ** 3) / 3, h = (i - 2 * R) * t, u = 2 * A * R * 5 / 6, b = "I";
        break;
      case "Steel Tube":
        n = i * A - (i - 2 * t) * (A - 2 * t), r = (A * i ** 3 - (A - 2 * t) * (i - 2 * t) ** 3) / 12, a = (i * A ** 3 - (i - 2 * t) * (A - 2 * t) ** 3) / 12, O = 2 * t * (i - t) * (A - t) * ((i - t) * (A - t)) / (i - t + (A - t)), h = 2 * i * t, u = 2 * A * t, b = "HSS";
        break;
      case "Filled Steel Tube":
        n = i * A, r = A * i ** 3 / 12, a = i * A ** 3 / 12, O = 2 * t * (i - t) * (A - t) * ((i - t) * (A - t)) / (i - t + (A - t)), h = 2 * i * t + 5 / 6 * (i - 2 * t) * (A - 2 * t), u = 2 * A * t + 5 / 6 * (i - 2 * t) * (A - 2 * t), b = "CFT";
        break;
      case "Steel Angle": {
        const x = R || t;
        n = x * (i + A - x), r = x * (i ** 3 + A * x ** 2 + x ** 2 * (i - x)) / 12, a = x * (A ** 3 + i * x ** 2 + x ** 2 * (A - x)) / 12, O = (i + A - x) * x ** 3 / 3, h = i * x, u = A * x, b = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        n = 2 * A * R + (i - 2 * R) * t, r = (t * i ** 3 + 2 * A * R * (i - R) ** 2) / 12, a = (2 * R * A ** 3 + (i - 2 * R) * t ** 3) / 12, O = (2 * A * R ** 3 + (i - 2 * R) * t ** 3) / 3, h = (i - 2 * R) * t, u = 2 * A * R * 5 / 6, b = c.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        n = 2 * (2 * A * R + (i - 2 * R) * t), r = 2 * (t * i ** 3 + 2 * A * R * (i - R) ** 2) / 12, a = 2 * (2 * R * A ** 3 + (i - 2 * R) * t ** 3) / 12, O = 2 * (2 * A * R ** 3 + (i - 2 * R) * t ** 3) / 3, h = 2 * (i - 2 * R) * t, u = 4 * A * R * 5 / 6, b = "2C";
        break;
      default:
        i > 0 && A > 0 && (n = i * A, r = A * i ** 3 / 12, a = i * A ** 3 / 12, O = Math.min(i, A) * Math.max(i, A) ** 3 / 3 * 0.3, h = u = 5 / 6 * n);
        break;
    }
    c.modI2 && (a *= c.modI2), c.modI3 && (r *= c.modI3), et.set(N, n), it.set(N, r), ct.set(N, a), K.set(N, O), h > 0 && st.set(N, h), u > 0 && j.set(N, u), Q.set(N, { type: b, b: A || void 0, h: i || void 0, d: b === "circ" || b === "pipe" ? i : void 0, tw: t || void 0, tf: R || void 0, r: c.R, name: g });
  }
  const rt = /* @__PURE__ */ new Map();
  for (const [N, g] of s) {
    const c = f.get(N);
    if (c === void 0) continue;
    const C = [false, false, false, false, false, false];
    for (const i of g) i === "UX" && (C[0] = true), i === "UY" && (C[1] = true), i === "UZ" && (C[2] = true), i === "RX" && (C[3] = true), i === "RY" && (C[4] = true), i === "RZ" && (C[5] = true);
    rt.set(c, C);
  }
  const lt = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map();
  for (let N = 0; N < E.length; N++) Et.set(`${E[N]}@${P[N]}`, N);
  for (const N of w) {
    const g = Et.get(`${N.line}@${N.story}`);
    if (g === void 0) continue;
    const [c, C] = D[g], i = L[c], A = L[C], R = Math.sqrt((A[0] - i[0]) ** 2 + (A[1] - i[1]) ** 2 + (A[2] - i[2]) ** 2);
    if (R < 1e-10) continue;
    const t = N.val * R / 2;
    let n = 0, r = 0, a = 0;
    N.dir === "GRAV" || N.dir === "GRAVITY" ? a = -t : N.dir === "X" ? n = t : N.dir === "Y" ? r = t : N.dir === "Z" && (a = -t);
    for (const O of [c, C]) {
      const h = lt.get(O) || [0, 0, 0, 0, 0, 0];
      h[0] += n, h[1] += r, h[2] += a, lt.set(O, h);
    }
  }
  const pt = /* @__PURE__ */ new Map();
  for (const [N, g] of z) {
    const c = y.get(g);
    if (!c) continue;
    const C = T.get(c.material);
    (C == null ? void 0 : C.density) && pt.set(N, C.density);
  }
  return { units: I, stories: m.reverse(), materials: T, frameSections: y, nodes: L, nodeNames: M, nodeNameToIdx: f, elements: D, elementNames: E, elementTypes: F, elementStories: P, elementSections: z, nodeInputs: { supports: rt, loads: lt }, elementInputs: { elasticities: q, shearModuli: tt, areas: et, momentsOfInertiaZ: it, momentsOfInertiaY: ct, torsionalConstants: K, shearAreasY: st, shearAreasZ: j, rigidOffsets: U, momentReleases: _, densities: pt, sectionShapes: Q }, sectionShapes: Q, grids: J, info: { nNodes: L.length, nFrames: D.length, nAreas: $.length, title: W }, rawSections: B };
}
function G(d) {
  return d && parseFloat(d) || 0;
}
function mt(d) {
  const p = /* @__PURE__ */ new Map(), I = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let m;
  for (; (m = I.exec(d)) !== null; ) p.set(m[1], m[2] !== void 0 ? m[2] : m[3]);
  return p;
}
function xt(d) {
  const p = d.split(/\r?\n/);
  return p.some((m) => m.trim().startsWith("TABLE:")) ? Mt(p) : Nt(p);
}
function Mt(d) {
  var _a, _b, _c, _d, _e, _f;
  const p = [];
  let I = "";
  for (const Z of d) {
    const L = Z.trimEnd();
    L.endsWith("_") ? I += L.slice(0, -1) + " " : (I += L, p.push(I), I = "");
  }
  I && p.push(I);
  const m = { force: "KN", length: "m" };
  let T = "UX,UY,UZ,RX,RY,RZ";
  const y = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), s = [], S = [], w = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), k = [];
  let B = "";
  for (const Z of p) {
    const L = Z.trim();
    if (!L || L.startsWith(";") || L.startsWith("File ")) continue;
    if (L.startsWith("TABLE:")) {
      const f = L.match(/TABLE:\s+"(.+?)"/);
      B = f ? f[1].toUpperCase() : "";
      continue;
    }
    if (L === "END TABLE DATA") {
      B = "";
      continue;
    }
    const M = mt(L);
    switch (B) {
      case "PROGRAM CONTROL": {
        const f = M.get("CurrUnits");
        if (f) {
          const o = f.split(",").map((e) => e.trim());
          o[0] && (m.force = o[0]), o[1] && (m.length = o[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const f = M.get("Material");
        f && !y.has(f) && y.set(f, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const f = M.get("Material");
        if (f) {
          const o = y.get(f) || { E: 0, nu: 0, G: 0 };
          o.E = G(M.get("E1")), o.G = G(M.get("G12")), o.nu = G(M.get("U12")), o.density = G(M.get("UnitMass")), y.set(f, o);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const f = M.get("Material");
        f && y.has(f) && (y.get(f).fy = G(M.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const f = M.get("SectionName");
        f && Y.set(f, { material: M.get("Material") || "", shape: M.get("Shape") || "Rectangular", D: G(M.get("t3")), B: G(M.get("t2")), TF: G(M.get("tf")), TW: G(M.get("tw")), A: G(M.get("Area")), Iz: G(M.get("I33")), Iy: G(M.get("I22")), J: G(M.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const f = M.get("Section");
        f && v.set(f, { material: M.get("Material") || "", type: M.get("Type") || "Shell", thickness: G(M.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const f = M.get("Joint");
        if (f) {
          const o = G(M.get("XorR")), e = G(M.get("Y")), l = G(M.get("Z"));
          $.set(f, [o, e, l]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const f = M.get("Frame"), o = M.get("JointI"), e = M.get("JointJ");
        f && o && e && s.push({ name: f, j1: o, j2: e });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const f = M.get("Area");
        if (f) {
          const o = parseInt(M.get("NumJoints") || "4"), e = [];
          for (let l = 1; l <= o; l++) {
            const D = M.get(`Joint${l}`);
            D && e.push(D);
          }
          e.length >= 3 && S.push({ name: f, joints: e });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const f = M.get("Joint");
        if (f) {
          const o = [((_a = M.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = M.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = M.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = M.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = M.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = M.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          w.set(f, o);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const f = M.get("Frame"), o = M.get("AnalSect");
        f && o && J.set(f, o);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const f = M.get("Area"), o = M.get("Section");
        f && o && W.set(f, o);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const f = M.get("Joint");
        f && k.push({ joint: f, fx: G(M.get("F1")), fy: G(M.get("F2")), fz: G(M.get("F3")), mx: G(M.get("M1")), my: G(M.get("M2")), mz: G(M.get("M3")) });
        break;
      }
    }
  }
  return It(m, T, y, Y, v, $, s, S, w, J, W, k);
}
function Nt(d) {
  const p = { force: "KN", length: "m" };
  let I = "UX,UY,UZ,RX,RY,RZ";
  const m = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), v = [], $ = [], s = /* @__PURE__ */ new Map(), S = [];
  let w = "", J = "";
  for (const B of d) {
    const Z = B.trim();
    if (!Z || Z.startsWith(";")) continue;
    if (!B.startsWith(" ") && !B.startsWith("	")) {
      const f = Z.toUpperCase();
      if (f === "END") break;
      f.startsWith("SHELL SECTION") ? w = "SHELL SECTION" : f.startsWith("FRAME SECTION") ? w = "FRAME SECTION" : w = f.split(/\s+/)[0];
      continue;
    }
    const L = mt(Z), M = Z.split(/\s+/);
    switch (w) {
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
        const f = M[0];
        Y.set(f, [G(L.get("X")), G(L.get("Y")), G(L.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const f = L.get("ADD"), o = L.get("DOF");
        if (f && o) {
          const e = o.split(","), l = [false, false, false, false, false, false];
          for (const D of e) {
            const E = D.toUpperCase();
            (E === "UX" || E === "U1") && (l[0] = true), (E === "UY" || E === "U2") && (l[1] = true), (E === "UZ" || E === "U3") && (l[2] = true), (E === "RX" || E === "R1") && (l[3] = true), (E === "RY" || E === "R2") && (l[4] = true), (E === "RZ" || E === "R3") && (l[5] = true);
          }
          s.set(f, l);
        }
        break;
      }
      case "MATERIAL": {
        const f = L.get("NAME");
        if (f) J = f, m.set(f, { E: 0, nu: 0, G: 0 });
        else if (J) {
          const o = m.get(J), e = L.get("E");
          e && (o.E = G(e));
          const l = L.get("U");
          l && (o.nu = G(l)), o.G = o.E / (2 * (1 + o.nu));
          const D = L.get("M");
          D && (o.density = G(D));
        }
        break;
      }
      case "SHELL": {
        const f = M[0], o = L.get("J");
        L.get("SEC"), o && $.push({ name: f, joints: o.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const f = L.get("NAME");
        f && y.set(f, { material: L.get("MAT") || "", type: L.get("TYPE") || "Shell", thickness: G(L.get("TH")) });
        break;
      }
      case "FRAME": {
        const f = M[0], o = L.get("J");
        if (o) {
          const e = o.split(",");
          e.length >= 2 && v.push({ name: f, j1: e[0], j2: e[1] });
        }
        break;
      }
      case "LOAD": {
        const f = L.get("ADD");
        f && S.push({ joint: f, fx: G(L.get("UX")), fy: G(L.get("UY")), fz: G(L.get("UZ")), mx: G(L.get("MX")), my: G(L.get("MY")), mz: G(L.get("MZ")) });
        break;
      }
    }
  }
  return It(p, I, m, T, y, Y, v, $, s, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), S);
}
function It(d, p, I, m, T, y, Y, v, $, s, S, w) {
  var _a;
  const J = [], W = /* @__PURE__ */ new Map(), k = [];
  for (const [E, F] of y) W.set(E, k.length), J.push(E), k.push(F);
  const B = [], Z = [], L = /* @__PURE__ */ new Map();
  for (const E of Y) {
    const F = W.get(E.j1), P = W.get(E.j2);
    if (F !== void 0 && P !== void 0) {
      const z = B.length;
      B.push([F, P]), Z.push(E.name);
      const U = s.get(E.name);
      U && L.set(z, U);
    }
  }
  const M = B.length;
  for (const E of v) {
    const F = E.joints.map((P) => W.get(P)).filter((P) => P !== void 0);
    if (F.length >= 3) {
      const P = B.length;
      B.push(F), Z.push(E.name);
      const z = S.get(E.name);
      z && L.set(P, z);
    }
  }
  const f = B.length - M, o = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, e = /* @__PURE__ */ new Map(), l = I.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let E = 0; E < B.length; E++) {
    const F = L.get(E), P = F ? m.get(F) : null, z = F ? T.get(F) : null;
    if (P || B[E].length === 2) {
      const U = P || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, _ = I.get(U.material) || l, q = _.E || l.E, tt = _.nu || 0.3, et = _.G || q / (2 * (1 + tt));
      o.elasticities.set(E, q), o.shearModuli.set(E, et), o.areas.set(E, U.A || U.D * U.B), o.momentsOfInertiaZ.set(E, U.Iz || U.B * U.D ** 3 / 12), o.momentsOfInertiaY.set(E, U.Iy || U.D * U.B ** 3 / 12), o.torsionalConstants.set(E, U.J || 0), o.densities.set(E, _.density || 0), ((_a = U.shape) == null ? void 0 : _a.includes("Wide Flange")) || U.shape === "I" ? e.set(E, { type: "I", b: U.B, h: U.D, name: F || "I-section" }) : e.set(E, { type: "rect", b: U.B, h: U.D });
    } else if (z) {
      const U = I.get(z.material) || l, _ = U.E || l.E, q = U.nu || 0.2, tt = U.G || _ / (2 * (1 + q));
      o.elasticities.set(E, _), o.shearModuli.set(E, tt), o.thicknesses.set(E, z.thickness), o.poissonsRatios.set(E, q), o.densities.set(E, U.density || 0);
    }
  }
  const D = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [E, F] of $) {
    const P = W.get(E);
    P !== void 0 && D.supports.set(P, F);
  }
  for (const E of w) {
    const F = W.get(E.joint);
    if (F !== void 0) {
      const P = D.forces.get(F) || [0, 0, 0, 0, 0, 0];
      P[0] += E.fx, P[1] += E.fy, P[2] += E.fz, P[3] += E.mx, P[4] += E.my, P[5] += E.mz, D.forces.set(F, P);
    }
  }
  return { units: d, dof: p, materials: I, frameSections: m, shellSections: T, nodes: k, nodeNames: J, nodeNameToIdx: W, elements: B, elementNames: Z, elementSections: L, nodeInputs: D, elementInputs: o, sectionShapes: e, info: { nNodes: k.length, nFrames: M, nShells: f, title: `SAP2000 (${M} frames, ${f} shells)` } };
}
function Ft(d) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: p, elements: I, nodeInputs: m, elementInputs: T } = d, y = d.units || { force: "KN", length: "m" }, Y = d.title || "Awatif Model", v = [], $ = (o) => v.push(o), s = () => v.push(" ");
  $(`File ${Y}.$2k was saved on m/d/yy at h:mm:ss`), s(), $('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), $("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), s();
  const S = [], w = [];
  if (I.forEach((o, e) => {
    o.length === 2 ? S.push(e) : w.push(e);
  }), S.length > 0) {
    $('TABLE:  "CONNECTIVITY - FRAME"');
    for (const o of S) {
      const e = I[o];
      $(`   Frame=${o + 1}   JointI=${e[0] + 1}   JointJ=${e[1] + 1}   IsCurved=No`);
    }
    s();
  }
  if (w.length > 0) {
    $('TABLE:  "CONNECTIVITY - AREA"');
    for (const o of w) {
      const e = I[o], l = e.map((D, E) => `Joint${E + 1}=${D + 1}`).join("   ");
      $(`   Area=${o + 1}   NumJoints=${e.length}   ${l}`);
    }
    s();
  }
  $('TABLE:  "COORDINATE SYSTEMS"'), $("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), s(), $('TABLE:  "DATABASE FORMAT TYPES"'), $("   UnitsCurr=Yes   OverrideE=No"), s();
  const J = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map();
  for (const o of S) {
    const e = ((_a = T.areas) == null ? void 0 : _a.get(o)) || 0, l = ((_b = T.momentsOfInertiaZ) == null ? void 0 : _b.get(o)) || 0, D = ((_c = T.momentsOfInertiaY) == null ? void 0 : _c.get(o)) || 0, E = ((_d = T.torsionalConstants) == null ? void 0 : _d.get(o)) || 0, F = ((_e = T.elasticities) == null ? void 0 : _e.get(o)) || 0, P = `MAT_${Math.round(F)}`, z = `A${e.toPrecision(6)}_Iz${l.toPrecision(6)}`;
    if (!J.has(z)) {
      let _ = 0.3, q = 0.3;
      e > 0 && l > 0 && (_ = Math.sqrt(12 * l / e), q = e / _), J.set(z, { A: e, Iz: l, Iy: D, J: E, b: q, h: _, matKey: P });
    }
    const U = [...J.keys()].indexOf(z) + 1;
    W.set(o, `SEC${U}`);
  }
  if (S.length > 0) {
    $('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const o of S) {
      const e = W.get(o) || "SEC1";
      $(`   Frame=${o + 1}   AutoSelect=N.A.   AnalSect=${e}   MatProp=Default`);
    }
    s();
  }
  if (J.size > 0) {
    $('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let o = 0;
    for (const [, e] of J) {
      o++;
      const l = e.A * 5 / 6;
      $(`   SectionName=SEC${o}   Material=${e.matKey}   Shape=Rectangular   t3=${X(e.h)}   t2=${X(e.b)}   Area=${X(e.A)}   TorsConst=${X(e.J)}   I33=${X(e.Iz)}   I22=${X(e.Iy)}   I23=0   AS2=${X(l)}   AS3=${X(l)} _`), $("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    s();
  }
  const k = !!d.layeredSection && w.length > 0, B = d.layeredSection, Z = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map();
  if (!k) for (const o of w) {
    const e = ((_f = T.thicknesses) == null ? void 0 : _f.get(o)) || 0.1, l = ((_g = T.elasticities) == null ? void 0 : _g.get(o)) || 0, D = `MAT_${Math.round(l)}`, E = `t${e.toPrecision(6)}`;
    Z.has(E) || Z.set(E, { t: e, matKey: D });
    const F = [...Z.keys()].indexOf(E) + 1;
    L.set(o, `SSEC${F}`);
  }
  if (w.length > 0) {
    $('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const o of w) {
      const e = k ? B.name : L.get(o) || "SSEC1";
      $(`   Area=${o + 1}   Section=${e}   MatProp=Default`);
    }
    if (s(), $('TABLE:  "AREA SECTION PROPERTIES"'), k) {
      const o = B, e = ((_h = o.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      $(`   Section=${o.name}   Material=${e}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${X(o.totalThickness)}   BendThick=${X(o.totalThickness)}   Color=Magenta`);
    } else {
      let o = 0;
      for (const [, e] of Z) o++, $(`   Section=SSEC${o}   Material=${e.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${X(e.t)}   BendThick=${X(e.t)}   Color=Cyan`);
    }
    if (s(), k) {
      $('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const o = B;
      for (const e of o.layers) {
        const l = e.angle ?? 0, D = e.numIntPts ?? 3;
        $(`   Section=${o.name}   LayerName=${e.name}   Distance=${X(e.distance)}   Thickness=${X(e.thickness)}   Type=Shell   NumIntPts=${D}   Material=${e.material}   MatAngle=${X(l * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      s();
    }
  }
  $('TABLE:  "JOINT COORDINATES"');
  for (let o = 0; o < p.length; o++) {
    const e = p[o];
    $(`   Joint=${o + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${X(e[0])}   Y=${X(e[1])}   Z=${X(e[2])}   SpecialJt=No`);
  }
  if (s(), m.supports && m.supports.size > 0) {
    $('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [o, e] of m.supports) {
      if (!e.some((D) => D)) continue;
      const l = (D) => D ? "Yes" : "No";
      $(`   Joint=${o + 1}   U1=${l(e[0])}   U2=${l(e[1])}   U3=${l(e[2])}   R1=${l(e[3])}   R2=${l(e[4])}   R3=${l(e[5])}`);
    }
    s();
  }
  const M = d.selfWtMult ?? 1;
  if ($('TABLE:  "LOAD PATTERN DEFINITIONS"'), $(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${M}`), s(), $('TABLE:  "LOAD CASE DEFINITIONS"'), $('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), s(), $('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), $('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), s(), m.forces && m.forces.size > 0) {
    $('TABLE:  "JOINT LOADS - FORCE"');
    for (const [o, e] of m.forces) e.some((l) => Math.abs(l) > 1e-12) && $(`   Joint=${o + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${X(e[0])}   F2=${X(e[1])}   F3=${X(e[2])}   M1=${X(e[3])}   M2=${X(e[4])}   M3=${X(e[5])}`);
    s();
  }
  const f = /* @__PURE__ */ new Map();
  for (let o = 0; o < I.length; o++) {
    const e = ((_i = T.elasticities) == null ? void 0 : _i.get(o)) || 0, l = ((_j = T.shearModuli) == null ? void 0 : _j.get(o)) || 0, D = e > 0 && l > 0 ? Math.max(0, Math.min(0.5, e / (2 * l) - 1)) : 0.2, E = ((_k = T.densities) == null ? void 0 : _k.get(o)) || 0, F = `MAT_${Math.round(e)}`;
    f.has(F) || f.set(F, { E: e, nu: D, G: l, rho: E });
  }
  $('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [o] of f) $(`   Material=${o}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  s(), $('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [o, e] of f) $(`   Material=${o}   UnitWeight=${X(e.rho * 9.81)}   UnitMass=${X(e.rho)}   E1=${X(e.E)}   G12=${X(e.G)}   U12=${X(e.nu)}   A1=9.9E-06`);
  s(), $('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [o] of f) $(`   Material=${o}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return s(), $('TABLE:  "PROGRAM CONTROL"'), $(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${y.force}, ${y.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), s(), $("END TABLE DATA"), $(""), v.join(`\r
`);
}
function X(d) {
  return d === 0 || Math.abs(d) < 1e-15 ? "0" : Math.abs(d) >= 1e6 || Math.abs(d) < 1e-3 && Math.abs(d) > 0 ? d.toExponential(8) : parseFloat(d.toPrecision(10)).toString();
}
function $t(d, p, I = 0.05) {
  const m = p.map(([T, y]) => `${(+T).toFixed(4)} ${(+y).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${d}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${I}  SPECTYPE "USER"  `, `  FUNCTION "${d}"  TIMEVAL "${m}"  `];
}
function gt(d) {
  const { name: p, func: I, modalCase: m = "Modal", sfX: T = 9.81, sfY: y = 9.81 } = d, Y = [`  LOADCASE "${p}"  TYPE  "Response Spectrum"  MODALCASE  "${m}"  `];
  return T && Y.push(`  LOADCASE "${p}"  ACCEL  "U1"  FUNC  "${I}"  SF  ${T}  `), y && Y.push(`  LOADCASE "${p}"  ACCEL  "U2"  FUNC  "${I}"  SF  ${y}  `), Y;
}
function Ot(d) {
  const { name: p = "Modal", ritz: I = false, nModes: m = 12 } = d;
  return I ? [`  LOADCASE "${p}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${p}"  MAXMODES  ${m} MINMODES  1 `, `  LOADCASE "${p}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${p}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${p}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${p}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${p}"  MAXMODES  ${m} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function Pt(d) {
  var _a;
  const p = (_a = d.e2kModel) == null ? void 0 : _a.rawSections;
  let I = p && p.size > 0 ? Lt(p, d.e2kModel) : Rt(d);
  return d.seismicNEC && (I = Ct(I, d.seismicNEC)), I;
}
function Ct(d, p) {
  var _a, _b;
  const I = d.includes(`\r
`) ? `\r
` : `
`, m = d.split(/\r?\n/), T = p.name ?? "NEC", y = $t(T, p.points, p.dampRatio ?? 0.05), Y = p.modalCase ?? "Modal", v = gt({ name: p.caseName ?? "Sismo NEC", func: T, modalCase: Y, sfX: p.sfX, sfY: p.sfY }), s = m.some((S) => new RegExp(`LOADCASE\\s+"${Y}"\\s+TYPE\\s+"Modal`).test(S)) ? [] : Ot({ name: Y, ritz: !!((_a = p.modal) == null ? void 0 : _a.ritz), nModes: (_b = p.modal) == null ? void 0 : _b.nModes });
  return ut(m, "FUNCTIONS", y), ut(m, "LOAD CASES", [...s, ...v]), m.join(I);
}
function ut(d, p, I) {
  const m = d.findIndex((Y) => Y.trim() === `$ ${p}`);
  if (m >= 0) {
    d.splice(m + 1, 0, ...I);
    return;
  }
  const T = d.findIndex((Y) => Y.trim() === "END"), y = T >= 0 ? T : d.length;
  d.splice(y, 0, `$ ${p}`, ...I, "");
}
function Lt(d, p) {
  const I = [], m = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  I.push("$ File exported from Awatif FEM Studio (round-trip)"), I.push("");
  for (const T of m) {
    const y = d.get(T);
    if (!(!y || y.length === 0)) {
      I.push(`$ ${T}`);
      for (const Y of y) I.push(Y);
      I.push("");
    }
  }
  for (const [T, y] of d) if (!m.includes(T) && y.length !== 0) {
    I.push(`$ ${T}`);
    for (const Y of y) I.push(Y);
    I.push("");
  }
  return I.push("  END"), I.push("$ END OF MODEL FILE"), I.join(`\r
`);
}
function Rt(d) {
  var _a, _b, _c, _d;
  const { nodes: p, elements: I, nodeInputs: m, elementInputs: T, title: y, units: Y } = d, v = (Y == null ? void 0 : Y.force) || "Tonf", $ = (Y == null ? void 0 : Y.length) || "m", s = [], S = (t) => Math.round(t * 1e4) / 1e4, w = (() => {
    const t = (v || "Tonf").toLowerCase();
    return t === "tonf" || t === "tonf-f" ? 1 / 9.80665 : t === "kn" || t === "kn-f" ? 1 : t === "kgf" || t === "kg" ? 1 / 980665e-8 : t === "kip" || t === "kips" ? 1 / 4.44822 : 1;
  })(), J = (t) => t * w, W = (t) => t * w, k = (t) => t * w, B = /* @__PURE__ */ new Date(), Z = `${B.getMonth() + 1}/${B.getDate()}/${B.getFullYear()}  ${B.getHours()}:${String(B.getMinutes()).padStart(2, "0")}:${String(B.getSeconds()).padStart(2, "0")}`;
  s.push(`$ File   "Hekatan_export.e2k"  saved ${Z} in ETABS 22.6.0`), s.push(""), s.push("$ PROGRAM INFORMATION"), s.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), s.push(""), s.push("$ CONTROLS"), s.push(`  UNITS  "${v}"  "${$}"  "C"  `), s.push('  TITLE1  "Hekatan Struct export"  '), y && s.push(`  TITLE2  "${y}"  `), s.push("  PREFERENCE  MERGETOL 0.001"), s.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), s.push("");
  const L = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
  p.forEach((t) => {
    L.add(S(t[0])), M.add(S(t[1]));
  });
  const f = [...L].sort((t, n) => t - n), o = [...M].sort((t, n) => t - n);
  s.push("$ GRIDS"), s.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), f.forEach((t, n) => {
    const r = n < 26 ? String.fromCharCode(65 + n) : String.fromCharCode(65 + n % 26).repeat(Math.floor(n / 26) + 1);
    s.push(`  GRID "G1"  LABEL "${r}"  DIR "X"  COORD ${t}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), o.forEach((t, n) => {
    s.push(`  GRID "G1"  LABEL "${n + 1}"  DIR "Y"  COORD ${t}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), s.push("");
  const e = /* @__PURE__ */ new Set();
  p.forEach((t) => e.add(S(t[2])));
  const l = [...e].sort((t, n) => t - n), D = [], E = /* @__PURE__ */ new Map();
  D.push("Base"), E.set(l[0], "Base");
  for (let t = 1; t < l.length; t++) {
    const n = `Level_${t}`;
    D.push(n), E.set(l[t], n);
  }
  s.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let t = l.length - 1; t >= 1; t--) s.push(`  STORY "${D[t]}"  HEIGHT ${S(l[t] - l[t - 1])} MASTERSTORY "Yes"  `);
  l.length > 0 && s.push(`  STORY "Base"  ELEV ${l[0]} `), s.push(""), I.some((t) => t.length === 4), s.push("$ DIAPHRAGM NAMES"), s.push('  DIAPHRAGM "D1"    TYPE RIGID'), s.push(""), s.push("$ MATERIAL PROPERTIES");
  const F = /* @__PURE__ */ new Set();
  (_a = T.elasticities) == null ? void 0 : _a.forEach((t) => F.add(t));
  const P = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map();
  let U = 0, _ = 0;
  const q = 980665e-8, tt = /* @__PURE__ */ new Map();
  if (T.densities && T.densities.size > 0) {
    const t = /* @__PURE__ */ new Map();
    T.densities.forEach((n, r) => {
      var _a2;
      const a = (_a2 = T.elasticities) == null ? void 0 : _a2.get(r);
      a !== void 0 && (t.has(a) || t.set(a, []), t.get(a).push(n));
    }), t.forEach((n, r) => {
      const a = n.reduce((h, u) => h + u, 0) / n.length, O = a > 100 ? a * q : a * 9.80665;
      tt.set(r, O);
    });
  }
  for (const t of F) {
    const n = t >= 1e8, r = n ? `Steel_${++U}` : `Conc_${++_}`;
    P.set(t, r), z.set(t, n);
    const a = tt.get(t) ?? (n ? 76.97 : 24), O = W(t), h = k(a), u = n ? 0.3 : 0.2, b = n ? 117e-7 : 1e-5;
    if (n) {
      s.push(`  MATERIAL  "${r}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${S(h)}`), s.push(`  MATERIAL  "${r}"    SYMTYPE "Isotropic"  E ${S(O)}  U ${u}  A ${b}`);
      const x = 345e3, H = 45e4;
      s.push(`  MATERIAL  "${r}"  FY ${S(W(x))}  FU ${S(W(H))}  FYE ${S(W(x * 1.1))}  FUE ${S(W(H * 1.1))}`);
    } else s.push(`  MATERIAL  "${r}"    TYPE "Concrete"    WEIGHTPERVOLUME ${S(h)}`), s.push(`  MATERIAL  "${r}"    SYMTYPE "Isotropic"  E ${S(O)}  U ${u}  A ${b}`), s.push(`  MATERIAL  "${r}"    FC ${S(W(24e3))}`);
  }
  s.push(""), s.push("$ FRAME SECTIONS");
  const et = /* @__PURE__ */ new Set(), st = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), it = 0.05;
  I.forEach((t, n) => {
    var _a2, _b2, _c2, _d2, _e, _f;
    if (t.length !== 2) return;
    const r = (_a2 = T.sectionShapes) == null ? void 0 : _a2.get(n), a = ((_b2 = T.elasticities) == null ? void 0 : _b2.get(n)) ?? 0, O = P.get(a) || "Conc_1", h = z.get(a) ?? a >= 1e8, u = ((_c2 = T.areas) == null ? void 0 : _c2.get(n)) ?? 0, b = ((_d2 = T.momentsOfInertiaY) == null ? void 0 : _d2.get(n)) ?? 0;
    (_e = T.momentsOfInertiaZ) == null ? void 0 : _e.get(n), (_f = T.torsionalConstants) == null ? void 0 : _f.get(n);
    let x = (r == null ? void 0 : r.type) || "rect", H = (r == null ? void 0 : r.h) ?? 0, V = (r == null ? void 0 : r.b) ?? 0, ot = (r == null ? void 0 : r.d) ?? 0;
    const dt = (r == null ? void 0 : r.tf) ?? 0, ht = (r == null ? void 0 : r.tw) ?? 0;
    H <= 0 && V <= 0 && ot <= 0 && u > 0 && (b > 0 ? (H = Math.sqrt(12 * b / u), V = u / H) : H = V = Math.sqrt(u), (!isFinite(H) || H < it) && (H = it), (!isFinite(V) || V < it) && (V = it), x = "rect"), H <= 0 && V <= 0 && ot <= 0 && (H = 0.3, V = 0.3, x = "rect");
    const At = `${x}_${S(H)}_${S(V)}_${S(ot)}_${S(dt)}_${S(ht)}_${O}`;
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
    H && (ft += `  D ${S(H)}`), V && (ft += `  B ${S(V)}`), ot && !H && (ft += `  D ${S(ot)}`), dt && (ft += `  TF ${S(dt)}`), ht && (ft += `  TW ${S(ht)}`), s.push(ft);
  }), s.push("");
  const ct = /* @__PURE__ */ new Map();
  let K = 0;
  p.forEach((t) => {
    const n = `${S(t[0])},${S(t[1])}`;
    ct.has(n) || ct.set(n, `${++K}`);
  }), s.push("$ POINT COORDINATES");
  for (const [t, n] of ct) {
    const [r, a] = t.split(",").map(Number);
    s.push(`  POINT "${n}"  ${r} ${a} `);
  }
  s.push("");
  const Q = (t) => {
    const n = p[t], r = `${S(n[0])},${S(n[1])}`;
    return { pt: ct.get(r) || "1", story: E.get(S(n[2])) || "Base" };
  }, rt = (t) => {
    var _a2, _b2, _c2, _d2;
    const n = [], r = (_a2 = d.propertyModifiers) == null ? void 0 : _a2.get(t);
    r && r.some((u) => Math.abs(u - 1) > 1e-9) && n.push(`PROPMODIFIERS "${r.map((u) => S(u)).join(" ")}"`);
    const a = (_b2 = T.momentReleases) == null ? void 0 : _b2.get(t);
    if (a && a.some((u) => u)) {
      const u = [];
      a.length === 12 ? (a[0] && u.push("PI"), a[1] && u.push("V2I"), a[2] && u.push("V3I"), a[3] && u.push("TI"), a[4] && u.push("M2I"), a[5] && u.push("M3I"), a[6] && u.push("PJ"), a[7] && u.push("V2J"), a[8] && u.push("V3J"), a[9] && u.push("TJ"), a[10] && u.push("M2J"), a[11] && u.push("M3J")) : a.length === 6 && (a[0] && u.push("TI"), a[1] && u.push("M2I"), a[2] && u.push("M3I"), a[3] && u.push("TJ"), a[4] && u.push("M2J"), a[5] && u.push("M3J")), u.length > 0 && n.push(`RELEASE "${u.join(" ")}"`);
    }
    const O = (_c2 = T.insertionPoints) == null ? void 0 : _c2.get(t);
    O && (Math.abs(O[0]) > 1e-9 || Math.abs(O[1]) > 1e-9) && n.push(`LATEROFFSET ${S(O[0])} TRANSOFFSET ${S(O[1])}`);
    const h = (_d2 = T.rigidOffsets) == null ? void 0 : _d2.get(t);
    return h && (Math.abs(h[0]) > 1e-9 || Math.abs(h[1]) > 1e-9) && n.push(`LENGTHOFFI ${S(h[0])} LENGTHOFFJ ${S(h[1])} RIGIDZONE 0.5`), n.length > 0 ? ` ${n.join(" ")} ` : "";
  }, lt = [], Et = /* @__PURE__ */ new Set(), pt = /* @__PURE__ */ new Map();
  I.forEach((t, n) => {
    if (t.length !== 2) return;
    const r = Tt(p, t);
    if (r === "BEAM") return;
    const a = p[t[0]][2] <= p[t[1]][2] ? t[0] : t[1], O = p[t[0]][2] <= p[t[1]][2] ? t[1] : t[0];
    if (Math.abs(p[a][0] - p[O][0]) > 1e-6 || Math.abs(p[a][1] - p[O][1]) > 1e-6) return;
    const h = Q(a), u = st.get(n) || `Sec_${n}`, b = `${h.pt}_${u}_${r}`;
    pt.has(b) || pt.set(b, []), pt.get(b).push({ i: n, bot: a, top: O, zBot: S(p[a][2]), zTop: S(p[O][2]), planPt: h.pt, secName: u, type: r });
  }), pt.forEach((t, n) => {
    t.sort((a, O) => a.zBot - O.zBot);
    let r = 0;
    for (let a = 1; a <= t.length; a++) if (a === t.length || Math.abs(t[a].zBot - t[a - 1].zTop) > 1e-6) {
      const h = t.slice(r, a);
      h.length >= 1 && (lt.push({ elemIndices: h.map((u) => u.i), planPt: h[0].planPt, bottomNodeIdx: h[0].bot, topNodeIdx: h[h.length - 1].top, secName: h[0].secName, type: h[0].type, nSegments: h.length }), h.forEach((u) => Et.add(u.i))), r = a;
    }
  }), s.push("$ LINE CONNECTIVITIES");
  const N = [];
  lt.forEach((t, n) => {
    const r = `C${n + 1}`, a = Q(t.topNodeIdx);
    Q(t.bottomNodeIdx);
    const O = S(p[t.topNodeIdx][2]), h = S(p[t.bottomNodeIdx][2]), u = l.indexOf(O), b = l.indexOf(h), x = Math.max(1, u - b), H = rt(t.elemIndices[0]);
    s.push(`  LINE  "${r}"  ${t.type}  "${a.pt}"  "${a.pt}"  ${x}`), N.push(`  LINEASSIGN  "${r}"  "${a.story}"  SECTION "${t.secName}" ${H} RIGIDZONE 0.5 MAXSTASPC 0.5 MINNUMSTA ${t.nSegments} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  }), I.forEach((t, n) => {
    if (t.length !== 2 || Et.has(n)) return;
    const r = Tt(p, t), a = st.get(n) || `Sec_${n}`, O = rt(n);
    if (r === "BEAM") {
      const h = Q(t[0]), u = Q(t[1]);
      s.push(`  LINE  "E${n + 1}"  BEAM  "${h.pt}"  "${u.pt}"  0`), N.push(`  LINEASSIGN  "E${n + 1}"  "${h.story}"  SECTION "${a}" ${O} RIGIDZONE 0.5 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const h = p[t[0]][2] <= p[t[1]][2] ? t[0] : t[1], u = p[t[0]][2] <= p[t[1]][2] ? t[1] : t[0], b = Q(u), x = S(p[h][2]), H = S(p[u][2]), V = l.indexOf(x), ot = l.indexOf(H), dt = Math.max(1, ot >= 0 && V >= 0 ? ot - V : 1);
      s.push(`  LINE  "E${n + 1}"  ${r}  "${b.pt}"  "${b.pt}"  ${dt}`), N.push(`  LINEASSIGN  "E${n + 1}"  "${b.story}"  SECTION "${a}" ${O} RIGIDZONE 0.5 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    }
  }), s.push("");
  const g = d.weightMode ?? "auto", c = /* @__PURE__ */ new Set();
  s.push("$ POINT ASSIGNS"), (_b = m.supports) == null ? void 0 : _b.forEach((t, n) => {
    const r = [];
    if (t[0] && r.push("UX"), t[1] && r.push("UY"), t[2] && r.push("UZ"), t[3] && r.push("RX"), t[4] && r.push("RY"), t[5] && r.push("RZ"), r.length > 0) {
      const a = Q(n), O = a.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      s.push(`  POINTASSIGN  "${a.pt}"  "${a.story}"  RESTRAINT "${r.join(" ")}" ${O} `), c.add(`${a.pt}@${a.story}`);
    }
  }), lt.forEach((t) => {
    const n = Q(t.topNodeIdx), r = `${n.pt}@${n.story}`;
    !c.has(r) && n.story !== "Base" && (s.push(`  POINTASSIGN  "${n.pt}"  "${n.story}"  DIAPH "D1"  `), c.add(r));
  }), g === "manual" && m.loads && m.loads.forEach((t, n) => {
    const r = Q(n), a = `${r.pt}@${r.story}`;
    c.has(a) || (s.push(`  POINTASSIGN  "${r.pt}"  "${r.story}"  DIAPH "DISCONNECTED"  `), c.add(a));
  }), s.push(""), s.push("$ LINE ASSIGNS"), N.forEach((t) => s.push(t)), s.push("");
  const C = [];
  I.forEach((t, n) => {
    if (t.length === 4) {
      const r = p[t[0]], a = p[t[1]], O = p[t[2]], h = [a[0] - r[0], a[1] - r[1], a[2] - r[2]], u = [O[0] - r[0], O[1] - r[1], O[2] - r[2]], b = h[1] * u[2] - h[2] * u[1], x = h[2] * u[0] - h[0] * u[2], H = h[0] * u[1] - h[1] * u[0], V = Math.sqrt(b * b + x * x + H * H), ot = V > 1e-10 && Math.abs(H) / V < 0.5;
      C.push({ idx: n, el: t, isWall: ot });
    }
  });
  const i = (() => {
    for (const [t, n] of z) if (!n) return P.get(t);
    return P.values().next().value || "Conc_1";
  })();
  if (C.some((t) => !t.isWall)) {
    s.push("$ SLAB PROPERTIES");
    const t = ((_c = T.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
    s.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${i}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${S(t)} `), s.push("");
  }
  if (C.some((t) => t.isWall)) {
    s.push("$ WALL PROPERTIES");
    const t = ((_d = T.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
    s.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${i}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${S(t)} `), s.push("");
  }
  if (C.length > 0) {
    s.push("$ AREA CONNECTIVITIES");
    const t = [];
    C.forEach((n, r) => {
      const { el: a, isWall: O } = n, h = O ? `W${r + 1}` : `F${r + 1}`, u = O ? "PANEL" : "FLOOR", b = a.map((x) => Q(x));
      if (O) {
        const x = p[a[0]][2] <= p[a[2]][2] ? 0 : 2, H = p[a[1]][2] <= p[a[3]][2] ? 1 : 3;
        s.push(`  AREA "${h}"  ${u}  4  "${b[x].pt}"  "${b[H].pt}"  "${b[H].pt}"  "${b[x].pt}"  1  1  0  0  `);
        const V = b[x === 0 ? 2 : 0].story;
        t.push(`  AREAASSIGN  "${h}"  "${V}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else s.push(`  AREA "${h}"  ${u}  4  "${b[0].pt}"  "${b[1].pt}"  "${b[2].pt}"  "${b[3].pt}"  0  0  0  0  `), t.push(`  AREAASSIGN  "${h}"  "${b[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
    }), s.push(""), s.push("$ AREA ASSIGNS"), t.forEach((n) => s.push(n)), s.push("");
  }
  const A = g === "manual" ? 0 : 1;
  s.push("$ LOAD PATTERNS"), s.push(`  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  ${A}`), s.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), s.push("");
  const R = [];
  return m.loads && m.loads.size > 0 && m.loads.forEach((t, n) => {
    const [r, a, O] = t, h = Q(n);
    Math.abs(r) > 1e-10 && R.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "FORCE"  LC "Dead"  FX ${S(J(r))}  FY 0  FZ 0`), Math.abs(a) > 1e-10 && R.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY ${S(J(a))}  FZ 0`), g === "manual" && Math.abs(O) > 1e-10 && R.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY 0  FZ ${S(J(O))}`);
  }), m.moments && m.moments.size > 0 && m.moments.forEach((t, n) => {
    const [r, a, O] = t, h = Q(n);
    Math.abs(r) > 1e-10 && R.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "MOMENT"  LC "Dead"  MX ${S(J(r))}  MY 0  MZ 0`), Math.abs(a) > 1e-10 && R.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY ${S(J(a))}  MZ 0`), Math.abs(O) > 1e-10 && R.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY 0  MZ ${S(J(O))}`);
  }), R.length > 0 && (s.push("$ POINT OBJECT LOADS"), R.forEach((t) => s.push(t)), s.push("")), s.push("$ ANALYSIS OPTIONS"), s.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), s.push('  PDELTA  METHOD "NONE"  '), s.push(""), s.push("$ MASS SOURCE"), s.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), s.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), s.push(""), s.push("$ LOAD CASES"), s.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), s.push('  LOADCASE "Dead"  LOADPAT  "Dead"  SF 1 '), s.push('  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), s.push('  LOADCASE "Live"  LOADPAT  "Live"  SF 1 '), s.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), s.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), s.push(""), s.push("$ LOAD COMBINATIONS"), s.push('  COMBO "1.4D"  TYPE "Linear Add"  '), s.push('  COMBO "1.4D"  LOADCASE  "Dead"  SF 1.4 '), s.push('  COMBO "1.2D+1.6L"  TYPE "Linear Add"  '), s.push('  COMBO "1.2D+1.6L"  LOADCASE  "Dead"  SF 1.2 '), s.push('  COMBO "1.2D+1.6L"  LOADCASE  "Live"  SF 1.6 '), s.push(""), s.push("  END"), s.push("$ END OF MODEL FILE"), s.join(`\r
`);
}
function Tt(d, p) {
  const I = d[p[0]], m = d[p[1]], T = Math.abs(m[2] - I[2]), y = Math.sqrt((m[0] - I[0]) ** 2 + (m[1] - I[1]) ** 2), Y = T > y * 0.5;
  return Y && y > 0.01 ? "BRACE" : Y ? "COLUMN" : "BEAM";
}
export {
  Ft as a,
  xt as b,
  yt as c,
  Pt as e,
  Dt as p
};
