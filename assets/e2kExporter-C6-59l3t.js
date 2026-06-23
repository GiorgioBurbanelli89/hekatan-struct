function Nt() {
  const m = document.createElement("div");
  m.id = "modal-results", m.style.cssText = `
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
    let T = false, P = 0, v = 0, G = 0, I = 0;
    m.addEventListener("mousedown", (s) => {
      const d = s.target;
      if (!d.closest("#modal-header") || d.closest("button")) return;
      T = true;
      const w = m.getBoundingClientRect();
      P = s.clientX, v = s.clientY, G = w.left, I = w.top, m.style.bottom = "auto", m.style.right = "auto", m.style.left = `${w.left}px`, m.style.top = `${w.top}px`, s.preventDefault();
    }), document.addEventListener("mousemove", (s) => {
      if (!T) return;
      let d = G + (s.clientX - P), w = I + (s.clientY - v);
      d = Math.max(-m.offsetWidth + 80, Math.min(window.innerWidth - 80, d)), w = Math.max(0, Math.min(window.innerHeight - 30, w)), m.style.left = `${d}px`, m.style.top = `${w}px`;
    }), document.addEventListener("mouseup", () => {
      T = false;
    });
  }
  let M = false;
  const C = 0.9;
  function N(T, P) {
    var _a, _b, _c, _d;
    if (!T.frequencies || T.frequencies.length === 0) {
      m.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const v = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], G = [0, 0, 0, 0, 0, 0], I = T.frequencies.length;
    let s = -1, d = -1, w = -1, H = 0, Z = 0;
    {
      const e = [0, 0, 0, 0, 0, 0];
      for (let l = 0; l < I; l++) {
        const y = ((_a = T.massParticipation) == null ? void 0 : _a[l]) || [0, 0, 0, 0, 0, 0];
        for (let f = 0; f < 6; f++) e[f] += y[f];
        s < 0 && e[0] >= C && (s = l + 1), d < 0 && e[1] >= C && (d = l + 1), w < 0 && e[0] >= C && e[1] >= C && (w = l + 1);
      }
      H = e[0], Z = e[1];
    }
    let B = -1, Y = -1, J = -1;
    const R = 0.1;
    for (let e = 0; e < I; e++) {
      const l = ((_b = T.massParticipation) == null ? void 0 : _b[e]) || [0, 0, 0, 0, 0, 0];
      B < 0 && l[0] > R && (B = e + 1), Y < 0 && l[1] > R && (Y = e + 1), J < 0 && l[5] > R && (J = e + 1);
    }
    const u = w > 0 ? `<span style="color:#0f0">\u2713 ASCE 7-22 \xA712.9.1.1 \u2014 90 % alcanzado en X e Y al modo ${w} de ${I}</span>` : s > 0 && d < 0 ? `<span style="color:#fa0">\u26A0 X cumple en modo ${s}, Y todav\xEDa en ${(Z * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : d > 0 && s < 0 ? `<span style="color:#fa0">\u26A0 Y cumple en modo ${d}, X todav\xEDa en ${(H * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : `<span style="color:#f44">\u2717 ASCE 7-22 NO cumplido en ${I} modos \xB7 \u03A3Ux=${(H * 100).toFixed(1)} % \xB7 \u03A3Uy=${(Z * 100).toFixed(1)} % \u2014 aumentar nModes</span>`, p = (() => {
      const e = (l, y) => {
        var _a2;
        if (l < 0) return `<span style="color:#f44">${y}: no encontrado en ${I} modos</span>`;
        const f = ((_a2 = T.massParticipation) == null ? void 0 : _a2[l - 1]) || [0, 0, 0, 0, 0, 0], x = y === "Ux" ? 0 : y === "Uy" ? 1 : 5, F = T.frequencies[l - 1] > 0 ? 1 / T.frequencies[l - 1] : 0;
        return `<span style="color:#0f0">${y}: modo ${l}, T=${F.toFixed(3)} s, MPF=${(f[x] * 100).toFixed(1)} %</span>`;
      };
      return `<div style="margin:4px 0; padding:4px 6px; background:rgba(0,255,255,0.05); border-left:2px solid #0ff; font-size:11px;">
  \u{1F3AF} <b>Modos s\xEDsmicos principales</b> (ASCE 7-22 \xA712.9.1):<br>
  ${e(B, "Ux")} \xB7 ${e(Y, "Uy")} \xB7 ${e(J, "Rz")}
</div>`;
    })();
    let o = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:move; user-select:none;" title="Arrastra para mover">
  <b style="color:#ff0">\u2725 \u26A1 MODAL ANALYSIS \u2014 ${P.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
    if (o += '<div id="modal-body" style="padding:0 12px 10px 12px;">', o += `<div style="padding:6px 0; font-weight:bold; font-size:13px;">${u}</div>`, o += p, P.properties) for (const e of P.properties) o += `<span style="color:#888">${e}</span>
`;
    o += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const e of v) o += `<th style="padding:2px 5px">${e}</th>`;
    o += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let e = 0; e < 6; e++) G[e] = 0;
    if (T.frequencies.forEach((e, l) => {
      var _a2;
      const y = e > 0 ? 1 / e : 0, f = e * 2 * Math.PI, x = ((_a2 = T.massParticipation) == null ? void 0 : _a2[l]) || [0, 0, 0, 0, 0, 0];
      for (let X = 0; X < 6; X++) G[X] += x[X];
      let F = 0, _ = x[0];
      for (let X = 1; X < 6; X++) x[X] > _ && (_ = x[X], F = X);
      const U = _ < 0.05 ? "\u2014" : `${v[F]} (${(_ * 100).toFixed(0)} %)`, V = F === 0 || F === 1 ? "#0f0" : F === 5 ? "#0ff" : F === 2 ? "#fa0" : "#888", q = l + 1 === s, tt = l + 1 === d, et = l + 1 === w;
      o += `<tr style="border-bottom:1px solid #fff1; ${et ? "background:rgba(0,255,0,0.12);" : q || tt ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${l + 1}${et ? " \u2605" : ""}</td>
  <td style="padding:2px 6px; text-align:right">${e.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${y.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${f.toFixed(2)}</td>`;
      for (let X = 0; X < 6; X++) {
        const lt = (x[X] * 100).toFixed(1), Q = x[X] > 0.5 ? "#f00" : x[X] > 0.1 ? "#ff0" : "#0f0";
        o += `<td style="padding:2px 5px; text-align:right; color:${Q}">${lt}%</td>`;
      }
      const j = G[0] >= C ? "#0f0" : "#0ff", it = G[1] >= C ? "#0f0" : "#0ff";
      o += `<td style="padding:2px 5px; text-align:right; color:${j}">${(G[0] * 100).toFixed(1)}%${q ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${it}">${(G[1] * 100).toFixed(1)}%${tt ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(G[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${V}">${U}</td></tr>`;
    }), o += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, o += "</div>", m.innerHTML = o, M) {
      const e = m.querySelector("#modal-body"), l = m.querySelector("#modal-minimize");
      e && (e.style.display = "none"), l && (l.textContent = "\u25A2", l.title = "Restaurar");
    }
    (_c = m.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      M = !M;
      const e = m.querySelector("#modal-body"), l = m.querySelector("#modal-minimize");
      M ? (e.style.display = "none", l.textContent = "\u25A2", l.title = "Restaurar") : (e.style.display = "block", l.textContent = "\u25AC", l.title = "Minimizar");
    }), (_d = m.querySelector("#modal-copy")) == null ? void 0 : _d.addEventListener("click", () => {
      const e = [];
      e.push(`Modal Analysis \u2014 ${P.title}`), e.push(u.replace(/<[^>]+>/g, ""));
      const l = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${v.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      e.push(l), e.push("-".repeat(l.length));
      const y = [0, 0, 0, 0, 0, 0];
      T.frequencies.forEach((x, F) => {
        var _a2;
        const _ = x > 0 ? 1 / x : 0, U = x * 2 * Math.PI, V = ((_a2 = T.massParticipation) == null ? void 0 : _a2[F]) || [0, 0, 0, 0, 0, 0];
        for (let j = 0; j < 6; j++) y[j] += V[j];
        let q = 0, tt = V[0];
        for (let j = 1; j < 6; j++) V[j] > tt && (tt = V[j], q = j);
        const et = tt < 0.05 ? "\u2014" : `${v[q]} (${(tt * 100).toFixed(0)}%)`, at = V.map((j) => ((j * 100).toFixed(1) + "%").padStart(6)).join(" ");
        e.push(`${String(F + 1).padStart(4)}  ${x.toFixed(4).padStart(9)}  ${_.toFixed(4).padStart(9)}  ${U.toFixed(2).padStart(9)}  ${at}  ${(y[0] * 100).toFixed(1).padStart(5)}%  ${(y[1] * 100).toFixed(1).padStart(5)}%  ${(y[5] * 100).toFixed(1).padStart(5)}%  ${et}`);
      }), navigator.clipboard.writeText(e.join(`
`));
      const f = m.querySelector("#modal-copy");
      f.textContent = "\u2713", setTimeout(() => f.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: m, render: N };
}
function Ot(m) {
  var _a;
  const M = m.split(/\r?\n/), C = { force: "TONF", length: "M" }, N = [], T = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), G = [], I = [], s = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), w = [], H = [];
  let Z = "", B = "";
  const Y = /* @__PURE__ */ new Map();
  for (const A of M) {
    const g = A.trim();
    if (!g || g.startsWith("$")) {
      g.startsWith("$ ") && (B = g.substring(2).trim());
      continue;
    }
    if (B && (Y.has(B) || Y.set(B, []), Y.get(B).push(A)), B === "CONTROLS") {
      const c = g.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
      c && (C.force = c[1], C.length = c[2]);
      const O = g.match(/TITLE2\s+"([^"]+)"/);
      O && (Z = O[1]);
    }
    if (B === "STORIES - IN SEQUENCE FROM TOP") {
      const c = g.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
      if (c) {
        const O = c[1], i = c[2] ? parseFloat(c[2]) : 0, h = c[3] ? parseFloat(c[3]) : void 0;
        N.push({ name: O, height: i, elev: h ?? 0 });
      }
    }
    if (B === "MATERIAL PROPERTIES") {
      const c = g.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
      if (c) {
        const O = c[1];
        T.has(O) || T.set(O, { type: c[2] || "", E: 0, G: 0, nu: 0 });
        const i = T.get(O);
        c[2] && (i.type = c[2]);
        const h = g.match(/\bE\s+([\d.eE+-]+)/);
        h && (i.E = parseFloat(h[1]));
        const L = g.match(/\bU\s+([\d.eE+-]+)/);
        L && (i.nu = parseFloat(L[1]), i.G = i.E / (2 * (1 + i.nu)));
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
        const O = c[1];
        P.has(O) || P.set(O, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
        const i = P.get(O), h = g.match(/MATERIAL\s+"([^"]+)"/);
        h && (i.material = h[1]);
        const L = g.match(/SHAPE\s+"([^"]+)"/);
        L && (i.shape = L[1]);
        const t = g.match(/\bD\s+([\d.eE+-]+)/);
        t && (i.D = parseFloat(t[1]));
        const n = g.match(/\bB\s+([\d.eE+-]+)/);
        n && (i.B = parseFloat(n[1]));
        const r = g.match(/\bTF\s+([\d.eE+-]+)/);
        r && (i.TF = parseFloat(r[1]));
        const a = g.match(/\bTW\s+([\d.eE+-]+)/);
        a && (i.TW = parseFloat(a[1]));
        const $ = g.match(/\bR\s+([\d.eE+-]+)/);
        $ && (i.R = parseFloat($[1]));
        const E = g.match(/FILLMATERIAL\s+"([^"]+)"/);
        E && (i.fillMaterial = E[1]);
        const S = g.match(/I2MOD\s+([\d.eE+-]+)/);
        S && (i.modI2 = parseFloat(S[1]));
        const b = g.match(/I3MOD\s+([\d.eE+-]+)/);
        b && (i.modI3 = parseFloat(b[1]));
      }
    }
    if (B === "POINT COORDINATES") {
      const c = g.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
      c && v.set(c[1], [parseFloat(c[2]), parseFloat(c[3])]);
    }
    if (B === "LINE CONNECTIVITIES") {
      const c = g.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
      c && G.push({ name: c[1], type: c[2], pt1: c[3], pt2: c[4], nStories: parseInt(c[5]) });
    }
    if (B === "POINT ASSIGNS") {
      const c = g.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
      c && s.set(`${c[1]}@${c[2]}`, c[3].split(/\s+/));
    }
    if (B === "LINE ASSIGNS") {
      const c = g.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
      if (c) {
        const O = { story: c[2], section: c[3], rigidZone: 0, releases: [], angle: 0 }, i = g.match(/RIGIDZONE\s+([\d.eE+-]+)/);
        i && (O.rigidZone = parseFloat(i[1]));
        const h = g.match(/RELEASE\s+"([^"]+)"/);
        h && (O.releases = h[1].split(/\s+/));
        const L = g.match(/ANG\s+([-\d.eE+]+)/);
        L && (O.angle = parseFloat(L[1])), d.set(`${c[1]}@${c[2]}`, O);
      }
    }
    if (B === "GRIDS") {
      const c = g.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
      c && H.push({ label: c[1], dir: c[2], coord: parseFloat(c[3]) });
    }
    if (B === "FRAME OBJECT LOADS") {
      const c = g.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      c && w.push({ line: c[1], story: c[2], type: c[3], dir: c[4], lc: c[5], val: parseFloat(c[6]) });
    }
    if (B === "AREA CONNECTIVITIES") {
      const c = g.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
      if (c) {
        const O = ((_a = c[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((i) => i.replace(/"/g, ""))) || [];
        I.push({ name: c[1], pts: O, nStories: 0 });
      }
    }
  }
  const J = /* @__PURE__ */ new Map();
  if (N.length > 0) {
    const A = N.length - 1;
    J.set(N[A].name, N[A].elev);
    for (let g = A - 1; g >= 0; g--) {
      const O = J.get(N[g + 1].name) + N[g].height;
      N[g].elev = O, J.set(N[g].name, O);
    }
  }
  const R = [], u = [], p = /* @__PURE__ */ new Map(), o = (A, g) => `${A}@${g}`, e = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
  for (const A of G) l.set(A.name, A);
  for (const A of G) for (const [g, c] of d) {
    if (!g.startsWith(A.name + "@")) continue;
    const O = c.story, i = N.findIndex((h) => h.name === O);
    if (!(i < 0)) if (A.type === "COLUMN" || A.type === "BRACE") {
      e.add(o(A.pt2, O));
      const h = Math.max(A.nStories, 1), L = Math.min(i + h, N.length - 1);
      e.add(o(A.pt1, N[L].name));
    } else e.add(o(A.pt1, O)), e.add(o(A.pt2, O));
  }
  for (const [A] of s) e.add(A);
  for (const A of e) {
    const [g, c] = A.split("@"), O = v.get(g), i = J.get(c);
    O === void 0 || i === void 0 || (R.push([O[0], O[1], i]), u.push(A), p.set(A, R.length - 1));
  }
  const y = [], f = [], x = [], F = [], _ = /* @__PURE__ */ new Map();
  for (const A of G) for (const [g, c] of d) {
    if (!g.startsWith(A.name + "@")) continue;
    const O = c.story, i = N.findIndex((a) => a.name === O);
    if (i < 0) continue;
    let h, L;
    if (A.type === "COLUMN" || A.type === "BRACE") {
      const a = Math.max(A.nStories, 1), $ = Math.min(i + a, N.length - 1);
      h = o(A.pt1, N[$].name), L = o(A.pt2, O);
    } else h = o(A.pt1, O), L = o(A.pt2, O);
    const t = p.get(h), n = p.get(L);
    if (t === void 0 || n === void 0 || t === n) continue;
    const r = y.length;
    if (y.push([t, n]), f.push(A.name), x.push(A.type), F.push(O), _.set(r, c.section), c.rigidZone > 0 && at.set(r, [c.rigidZone, c.rigidZone]), c.releases.length > 0) {
      const a = new Array(12).fill(false), $ = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const E of c.releases) {
        const S = $[E];
        S !== void 0 && (a[S] = true);
      }
      j.set(r, a);
    }
  }
  const U = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map();
  for (const [A, g] of _) {
    const c = P.get(g);
    if (!c) continue;
    const O = T.get(c.material);
    O && (U.set(A, O.E), V.set(A, O.G));
    const i = c.D, h = c.B, L = c.TF, t = c.TW;
    let n = 0, r = 0, a = 0, $ = 0, E = 0, S = 0, b = "rect";
    switch (c.shape) {
      case "Concrete Rectangular":
        n = i * h, r = h * i ** 3 / 12, a = i * h ** 3 / 12, $ = h * i ** 3 * (1 / 3 - 0.21 * (i / h) * (1 - i ** 4 / (12 * h ** 4))), E = S = 5 / 6 * n, b = "rect";
        break;
      case "Concrete Circle":
        n = Math.PI * i ** 2 / 4, r = a = Math.PI * i ** 4 / 64, $ = Math.PI * i ** 4 / 32, E = S = 0.9 * n, b = "circ";
        break;
      case "Steel I/Wide Flange":
        n = 2 * h * L + (i - 2 * L) * t, r = (h * i ** 3 - (h - t) * (i - 2 * L) ** 3) / 12, a = (2 * L * h ** 3 + (i - 2 * L) * t ** 3) / 12, $ = (2 * h * L ** 3 + (i - 2 * L) * t ** 3) / 3, E = (i - 2 * L) * t, S = 2 * h * L * 5 / 6, b = "I";
        break;
      case "Steel Tube":
        n = i * h - (i - 2 * t) * (h - 2 * t), r = (h * i ** 3 - (h - 2 * t) * (i - 2 * t) ** 3) / 12, a = (i * h ** 3 - (i - 2 * t) * (h - 2 * t) ** 3) / 12, $ = 2 * t * (i - t) * (h - t) * ((i - t) * (h - t)) / (i - t + (h - t)), E = 2 * i * t, S = 2 * h * t, b = "HSS";
        break;
      case "Filled Steel Tube":
        n = i * h, r = h * i ** 3 / 12, a = i * h ** 3 / 12, $ = 2 * t * (i - t) * (h - t) * ((i - t) * (h - t)) / (i - t + (h - t)), E = 2 * i * t + 5 / 6 * (i - 2 * t) * (h - 2 * t), S = 2 * h * t + 5 / 6 * (i - 2 * t) * (h - 2 * t), b = "CFT";
        break;
      case "Steel Angle": {
        const D = L || t;
        n = D * (i + h - D), r = D * (i ** 3 + h * D ** 2 + D ** 2 * (i - D)) / 12, a = D * (h ** 3 + i * D ** 2 + D ** 2 * (h - D)) / 12, $ = (i + h - D) * D ** 3 / 3, E = i * D, S = h * D, b = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        n = 2 * h * L + (i - 2 * L) * t, r = (t * i ** 3 + 2 * h * L * (i - L) ** 2) / 12, a = (2 * L * h ** 3 + (i - 2 * L) * t ** 3) / 12, $ = (2 * h * L ** 3 + (i - 2 * L) * t ** 3) / 3, E = (i - 2 * L) * t, S = 2 * h * L * 5 / 6, b = c.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        n = 2 * (2 * h * L + (i - 2 * L) * t), r = 2 * (t * i ** 3 + 2 * h * L * (i - L) ** 2) / 12, a = 2 * (2 * L * h ** 3 + (i - 2 * L) * t ** 3) / 12, $ = 2 * (2 * h * L ** 3 + (i - 2 * L) * t ** 3) / 3, E = 2 * (i - 2 * L) * t, S = 4 * h * L * 5 / 6, b = "2C";
        break;
      default:
        i > 0 && h > 0 && (n = i * h, r = h * i ** 3 / 12, a = i * h ** 3 / 12, $ = Math.min(i, h) * Math.max(i, h) ** 3 / 3 * 0.3, E = S = 5 / 6 * n);
        break;
    }
    c.modI2 && (a *= c.modI2), c.modI3 && (r *= c.modI3), q.set(A, n), it.set(A, r), X.set(A, a), lt.set(A, $), E > 0 && tt.set(A, E), S > 0 && et.set(A, S), Q.set(A, { type: b, b: h || void 0, h: i || void 0, d: b === "circ" || b === "pipe" ? i : void 0, tw: t || void 0, tf: L || void 0, r: c.R, name: g });
  }
  const ft = /* @__PURE__ */ new Map();
  for (const [A, g] of s) {
    const c = p.get(A);
    if (c === void 0) continue;
    const O = [false, false, false, false, false, false];
    for (const i of g) i === "UX" && (O[0] = true), i === "UY" && (O[1] = true), i === "UZ" && (O[2] = true), i === "RX" && (O[3] = true), i === "RY" && (O[4] = true), i === "RZ" && (O[5] = true);
    ft.set(c, O);
  }
  const ct = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map();
  for (let A = 0; A < f.length; A++) Et.set(`${f[A]}@${F[A]}`, A);
  for (const A of w) {
    const g = Et.get(`${A.line}@${A.story}`);
    if (g === void 0) continue;
    const [c, O] = y[g], i = R[c], h = R[O], L = Math.sqrt((h[0] - i[0]) ** 2 + (h[1] - i[1]) ** 2 + (h[2] - i[2]) ** 2);
    if (L < 1e-10) continue;
    const t = A.val * L / 2;
    let n = 0, r = 0, a = 0;
    A.dir === "GRAV" || A.dir === "GRAVITY" ? a = -t : A.dir === "X" ? n = t : A.dir === "Y" ? r = t : A.dir === "Z" && (a = -t);
    for (const $ of [c, O]) {
      const E = ct.get($) || [0, 0, 0, 0, 0, 0];
      E[0] += n, E[1] += r, E[2] += a, ct.set($, E);
    }
  }
  const rt = /* @__PURE__ */ new Map();
  for (const [A, g] of _) {
    const c = P.get(g);
    if (!c) continue;
    const O = T.get(c.material);
    (O == null ? void 0 : O.density) && rt.set(A, O.density);
  }
  return { units: C, stories: N.reverse(), materials: T, frameSections: P, nodes: R, nodeNames: u, nodeNameToIdx: p, elements: y, elementNames: f, elementTypes: x, elementStories: F, elementSections: _, nodeInputs: { supports: ft, loads: ct }, elementInputs: { elasticities: U, shearModuli: V, areas: q, momentsOfInertiaZ: it, momentsOfInertiaY: X, torsionalConstants: lt, shearAreasY: tt, shearAreasZ: et, rigidOffsets: at, momentReleases: j, densities: rt, sectionShapes: Q }, sectionShapes: Q, grids: H, info: { nNodes: R.length, nFrames: y.length, nAreas: I.length, title: Z }, rawSections: Y };
}
function k(m) {
  return m && parseFloat(m) || 0;
}
function Tt(m) {
  const M = /* @__PURE__ */ new Map(), C = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let N;
  for (; (N = C.exec(m)) !== null; ) M.set(N[1], N[2] !== void 0 ? N[2] : N[3]);
  return M;
}
function Rt(m) {
  const M = m.split(/\r?\n/);
  return M.some((N) => N.trim().startsWith("TABLE:")) ? mt(M) : Mt(M);
}
function mt(m) {
  var _a, _b, _c, _d, _e, _f;
  const M = [];
  let C = "";
  for (const J of m) {
    const R = J.trimEnd();
    R.endsWith("_") ? C += R.slice(0, -1) + " " : (C += R, M.push(C), C = "");
  }
  C && M.push(C);
  const N = { force: "KN", length: "m" };
  let T = "UX,UY,UZ,RX,RY,RZ";
  const P = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), s = [], d = [], w = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), B = [];
  let Y = "";
  for (const J of M) {
    const R = J.trim();
    if (!R || R.startsWith(";") || R.startsWith("File ")) continue;
    if (R.startsWith("TABLE:")) {
      const p = R.match(/TABLE:\s+"(.+?)"/);
      Y = p ? p[1].toUpperCase() : "";
      continue;
    }
    if (R === "END TABLE DATA") {
      Y = "";
      continue;
    }
    const u = Tt(R);
    switch (Y) {
      case "PROGRAM CONTROL": {
        const p = u.get("CurrUnits");
        if (p) {
          const o = p.split(",").map((e) => e.trim());
          o[0] && (N.force = o[0]), o[1] && (N.length = o[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const p = u.get("Material");
        p && !P.has(p) && P.set(p, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const p = u.get("Material");
        if (p) {
          const o = P.get(p) || { E: 0, nu: 0, G: 0 };
          o.E = k(u.get("E1")), o.G = k(u.get("G12")), o.nu = k(u.get("U12")), o.density = k(u.get("UnitMass")), P.set(p, o);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const p = u.get("Material");
        p && P.has(p) && (P.get(p).fy = k(u.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const p = u.get("SectionName");
        p && v.set(p, { material: u.get("Material") || "", shape: u.get("Shape") || "Rectangular", D: k(u.get("t3")), B: k(u.get("t2")), TF: k(u.get("tf")), TW: k(u.get("tw")), A: k(u.get("Area")), Iz: k(u.get("I33")), Iy: k(u.get("I22")), J: k(u.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const p = u.get("Section");
        p && G.set(p, { material: u.get("Material") || "", type: u.get("Type") || "Shell", thickness: k(u.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const p = u.get("Joint");
        if (p) {
          const o = k(u.get("XorR")), e = k(u.get("Y")), l = k(u.get("Z"));
          I.set(p, [o, e, l]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const p = u.get("Frame"), o = u.get("JointI"), e = u.get("JointJ");
        p && o && e && s.push({ name: p, j1: o, j2: e });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const p = u.get("Area");
        if (p) {
          const o = parseInt(u.get("NumJoints") || "4"), e = [];
          for (let l = 1; l <= o; l++) {
            const y = u.get(`Joint${l}`);
            y && e.push(y);
          }
          e.length >= 3 && d.push({ name: p, joints: e });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const p = u.get("Joint");
        if (p) {
          const o = [((_a = u.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = u.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = u.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = u.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = u.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = u.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          w.set(p, o);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const p = u.get("Frame"), o = u.get("AnalSect");
        p && o && H.set(p, o);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const p = u.get("Area"), o = u.get("Section");
        p && o && Z.set(p, o);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const p = u.get("Joint");
        p && B.push({ joint: p, fx: k(u.get("F1")), fy: k(u.get("F2")), fz: k(u.get("F3")), mx: k(u.get("M1")), my: k(u.get("M2")), mz: k(u.get("M3")) });
        break;
      }
    }
  }
  return It(N, T, P, v, G, I, s, d, w, H, Z, B);
}
function Mt(m) {
  const M = { force: "KN", length: "m" };
  let C = "UX,UY,UZ,RX,RY,RZ";
  const N = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), G = [], I = [], s = /* @__PURE__ */ new Map(), d = [];
  let w = "", H = "";
  for (const Y of m) {
    const J = Y.trim();
    if (!J || J.startsWith(";")) continue;
    if (!Y.startsWith(" ") && !Y.startsWith("	")) {
      const p = J.toUpperCase();
      if (p === "END") break;
      p.startsWith("SHELL SECTION") ? w = "SHELL SECTION" : p.startsWith("FRAME SECTION") ? w = "FRAME SECTION" : w = p.split(/\s+/)[0];
      continue;
    }
    const R = Tt(J), u = J.split(/\s+/);
    switch (w) {
      case "SYSTEM": {
        const p = R.get("DOF");
        p && (C = p);
        const o = R.get("LENGTH");
        o && (M.length = o);
        const e = R.get("FORCE");
        e && (M.force = e);
        break;
      }
      case "JOINT": {
        const p = u[0];
        v.set(p, [k(R.get("X")), k(R.get("Y")), k(R.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const p = R.get("ADD"), o = R.get("DOF");
        if (p && o) {
          const e = o.split(","), l = [false, false, false, false, false, false];
          for (const y of e) {
            const f = y.toUpperCase();
            (f === "UX" || f === "U1") && (l[0] = true), (f === "UY" || f === "U2") && (l[1] = true), (f === "UZ" || f === "U3") && (l[2] = true), (f === "RX" || f === "R1") && (l[3] = true), (f === "RY" || f === "R2") && (l[4] = true), (f === "RZ" || f === "R3") && (l[5] = true);
          }
          s.set(p, l);
        }
        break;
      }
      case "MATERIAL": {
        const p = R.get("NAME");
        if (p) H = p, N.set(p, { E: 0, nu: 0, G: 0 });
        else if (H) {
          const o = N.get(H), e = R.get("E");
          e && (o.E = k(e));
          const l = R.get("U");
          l && (o.nu = k(l)), o.G = o.E / (2 * (1 + o.nu));
          const y = R.get("M");
          y && (o.density = k(y));
        }
        break;
      }
      case "SHELL": {
        const p = u[0], o = R.get("J");
        R.get("SEC"), o && I.push({ name: p, joints: o.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const p = R.get("NAME");
        p && P.set(p, { material: R.get("MAT") || "", type: R.get("TYPE") || "Shell", thickness: k(R.get("TH")) });
        break;
      }
      case "FRAME": {
        const p = u[0], o = R.get("J");
        if (o) {
          const e = o.split(",");
          e.length >= 2 && G.push({ name: p, j1: e[0], j2: e[1] });
        }
        break;
      }
      case "LOAD": {
        const p = R.get("ADD");
        p && d.push({ joint: p, fx: k(R.get("UX")), fy: k(R.get("UY")), fz: k(R.get("UZ")), mx: k(R.get("MX")), my: k(R.get("MY")), mz: k(R.get("MZ")) });
        break;
      }
    }
  }
  return It(M, C, N, T, P, v, G, I, s, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), d);
}
function It(m, M, C, N, T, P, v, G, I, s, d, w) {
  var _a;
  const H = [], Z = /* @__PURE__ */ new Map(), B = [];
  for (const [f, x] of P) Z.set(f, B.length), H.push(f), B.push(x);
  const Y = [], J = [], R = /* @__PURE__ */ new Map();
  for (const f of v) {
    const x = Z.get(f.j1), F = Z.get(f.j2);
    if (x !== void 0 && F !== void 0) {
      const _ = Y.length;
      Y.push([x, F]), J.push(f.name);
      const U = s.get(f.name);
      U && R.set(_, U);
    }
  }
  const u = Y.length;
  for (const f of G) {
    const x = f.joints.map((F) => Z.get(F)).filter((F) => F !== void 0);
    if (x.length >= 3) {
      const F = Y.length;
      Y.push(x), J.push(f.name);
      const _ = d.get(f.name);
      _ && R.set(F, _);
    }
  }
  const p = Y.length - u, o = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, e = /* @__PURE__ */ new Map(), l = C.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let f = 0; f < Y.length; f++) {
    const x = R.get(f), F = x ? N.get(x) : null, _ = x ? T.get(x) : null;
    if (F || Y[f].length === 2) {
      const U = F || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, V = C.get(U.material) || l, q = V.E || l.E, tt = V.nu || 0.3, et = V.G || q / (2 * (1 + tt));
      o.elasticities.set(f, q), o.shearModuli.set(f, et), o.areas.set(f, U.A || U.D * U.B), o.momentsOfInertiaZ.set(f, U.Iz || U.B * U.D ** 3 / 12), o.momentsOfInertiaY.set(f, U.Iy || U.D * U.B ** 3 / 12), o.torsionalConstants.set(f, U.J || 0), o.densities.set(f, V.density || 0), ((_a = U.shape) == null ? void 0 : _a.includes("Wide Flange")) || U.shape === "I" ? e.set(f, { type: "I", b: U.B, h: U.D, name: x || "I-section" }) : e.set(f, { type: "rect", b: U.B, h: U.D });
    } else if (_) {
      const U = C.get(_.material) || l, V = U.E || l.E, q = U.nu || 0.2, tt = U.G || V / (2 * (1 + q));
      o.elasticities.set(f, V), o.shearModuli.set(f, tt), o.thicknesses.set(f, _.thickness), o.poissonsRatios.set(f, q), o.densities.set(f, U.density || 0);
    }
  }
  const y = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [f, x] of I) {
    const F = Z.get(f);
    F !== void 0 && y.supports.set(F, x);
  }
  for (const f of w) {
    const x = Z.get(f.joint);
    if (x !== void 0) {
      const F = y.forces.get(x) || [0, 0, 0, 0, 0, 0];
      F[0] += f.fx, F[1] += f.fy, F[2] += f.fz, F[3] += f.mx, F[4] += f.my, F[5] += f.mz, y.forces.set(x, F);
    }
  }
  return { units: m, dof: M, materials: C, frameSections: N, shellSections: T, nodes: B, nodeNames: H, nodeNameToIdx: Z, elements: Y, elementNames: J, elementSections: R, nodeInputs: y, elementInputs: o, sectionShapes: e, info: { nNodes: B.length, nFrames: u, nShells: p, title: `SAP2000 (${u} frames, ${p} shells)` } };
}
function Lt(m) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: M, elements: C, nodeInputs: N, elementInputs: T } = m, P = m.units || { force: "KN", length: "m" }, v = m.title || "Awatif Model", G = [], I = (o) => G.push(o), s = () => G.push(" ");
  I(`File ${v}.$2k was saved on m/d/yy at h:mm:ss`), s(), I('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), I("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), s();
  const d = [], w = [];
  if (C.forEach((o, e) => {
    o.length === 2 ? d.push(e) : w.push(e);
  }), d.length > 0) {
    I('TABLE:  "CONNECTIVITY - FRAME"');
    for (const o of d) {
      const e = C[o];
      I(`   Frame=${o + 1}   JointI=${e[0] + 1}   JointJ=${e[1] + 1}   IsCurved=No`);
    }
    s();
  }
  if (w.length > 0) {
    I('TABLE:  "CONNECTIVITY - AREA"');
    for (const o of w) {
      const e = C[o], l = e.map((y, f) => `Joint${f + 1}=${y + 1}`).join("   ");
      I(`   Area=${o + 1}   NumJoints=${e.length}   ${l}`);
    }
    s();
  }
  I('TABLE:  "COORDINATE SYSTEMS"'), I("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), s(), I('TABLE:  "DATABASE FORMAT TYPES"'), I("   UnitsCurr=Yes   OverrideE=No"), s();
  const H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map();
  for (const o of d) {
    const e = ((_a = T.areas) == null ? void 0 : _a.get(o)) || 0, l = ((_b = T.momentsOfInertiaZ) == null ? void 0 : _b.get(o)) || 0, y = ((_c = T.momentsOfInertiaY) == null ? void 0 : _c.get(o)) || 0, f = ((_d = T.torsionalConstants) == null ? void 0 : _d.get(o)) || 0, x = ((_e = T.elasticities) == null ? void 0 : _e.get(o)) || 0, F = `MAT_${Math.round(x)}`, _ = `A${e.toPrecision(6)}_Iz${l.toPrecision(6)}`;
    if (!H.has(_)) {
      let V = 0.3, q = 0.3;
      e > 0 && l > 0 && (V = Math.sqrt(12 * l / e), q = e / V), H.set(_, { A: e, Iz: l, Iy: y, J: f, b: q, h: V, matKey: F });
    }
    const U = [...H.keys()].indexOf(_) + 1;
    Z.set(o, `SEC${U}`);
  }
  if (d.length > 0) {
    I('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const o of d) {
      const e = Z.get(o) || "SEC1";
      I(`   Frame=${o + 1}   AutoSelect=N.A.   AnalSect=${e}   MatProp=Default`);
    }
    s();
  }
  if (H.size > 0) {
    I('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let o = 0;
    for (const [, e] of H) {
      o++;
      const l = e.A * 5 / 6;
      I(`   SectionName=SEC${o}   Material=${e.matKey}   Shape=Rectangular   t3=${W(e.h)}   t2=${W(e.b)}   Area=${W(e.A)}   TorsConst=${W(e.J)}   I33=${W(e.Iz)}   I22=${W(e.Iy)}   I23=0   AS2=${W(l)}   AS3=${W(l)} _`), I("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    s();
  }
  const B = !!m.layeredSection && w.length > 0, Y = m.layeredSection, J = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
  if (!B) for (const o of w) {
    const e = ((_f = T.thicknesses) == null ? void 0 : _f.get(o)) || 0.1, l = ((_g = T.elasticities) == null ? void 0 : _g.get(o)) || 0, y = `MAT_${Math.round(l)}`, f = `t${e.toPrecision(6)}`;
    J.has(f) || J.set(f, { t: e, matKey: y });
    const x = [...J.keys()].indexOf(f) + 1;
    R.set(o, `SSEC${x}`);
  }
  if (w.length > 0) {
    I('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const o of w) {
      const e = B ? Y.name : R.get(o) || "SSEC1";
      I(`   Area=${o + 1}   Section=${e}   MatProp=Default`);
    }
    if (s(), I('TABLE:  "AREA SECTION PROPERTIES"'), B) {
      const o = Y, e = ((_h = o.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      I(`   Section=${o.name}   Material=${e}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${W(o.totalThickness)}   BendThick=${W(o.totalThickness)}   Color=Magenta`);
    } else {
      let o = 0;
      for (const [, e] of J) o++, I(`   Section=SSEC${o}   Material=${e.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${W(e.t)}   BendThick=${W(e.t)}   Color=Cyan`);
    }
    if (s(), B) {
      I('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const o = Y;
      for (const e of o.layers) {
        const l = e.angle ?? 0, y = e.numIntPts ?? 3;
        I(`   Section=${o.name}   LayerName=${e.name}   Distance=${W(e.distance)}   Thickness=${W(e.thickness)}   Type=Shell   NumIntPts=${y}   Material=${e.material}   MatAngle=${W(l * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      s();
    }
  }
  I('TABLE:  "JOINT COORDINATES"');
  for (let o = 0; o < M.length; o++) {
    const e = M[o];
    I(`   Joint=${o + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${W(e[0])}   Y=${W(e[1])}   Z=${W(e[2])}   SpecialJt=No`);
  }
  if (s(), N.supports && N.supports.size > 0) {
    I('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [o, e] of N.supports) {
      if (!e.some((y) => y)) continue;
      const l = (y) => y ? "Yes" : "No";
      I(`   Joint=${o + 1}   U1=${l(e[0])}   U2=${l(e[1])}   U3=${l(e[2])}   R1=${l(e[3])}   R2=${l(e[4])}   R3=${l(e[5])}`);
    }
    s();
  }
  const u = m.selfWtMult ?? 1;
  if (I('TABLE:  "LOAD PATTERN DEFINITIONS"'), I(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${u}`), s(), I('TABLE:  "LOAD CASE DEFINITIONS"'), I('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), s(), I('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), I('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), s(), N.forces && N.forces.size > 0) {
    I('TABLE:  "JOINT LOADS - FORCE"');
    for (const [o, e] of N.forces) e.some((l) => Math.abs(l) > 1e-12) && I(`   Joint=${o + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${W(e[0])}   F2=${W(e[1])}   F3=${W(e[2])}   M1=${W(e[3])}   M2=${W(e[4])}   M3=${W(e[5])}`);
    s();
  }
  const p = /* @__PURE__ */ new Map();
  for (let o = 0; o < C.length; o++) {
    const e = ((_i = T.elasticities) == null ? void 0 : _i.get(o)) || 0, l = ((_j = T.shearModuli) == null ? void 0 : _j.get(o)) || 0, y = e > 0 && l > 0 ? Math.max(0, Math.min(0.5, e / (2 * l) - 1)) : 0.2, f = ((_k = T.densities) == null ? void 0 : _k.get(o)) || 0, x = `MAT_${Math.round(e)}`;
    p.has(x) || p.set(x, { E: e, nu: y, G: l, rho: f });
  }
  I('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [o] of p) I(`   Material=${o}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  s(), I('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [o, e] of p) I(`   Material=${o}   UnitWeight=${W(e.rho * 9.81)}   UnitMass=${W(e.rho)}   E1=${W(e.E)}   G12=${W(e.G)}   U12=${W(e.nu)}   A1=9.9E-06`);
  s(), I('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [o] of p) I(`   Material=${o}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return s(), I('TABLE:  "PROGRAM CONTROL"'), I(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${P.force}, ${P.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), s(), I("END TABLE DATA"), I(""), G.join(`\r
`);
}
function W(m) {
  return m === 0 || Math.abs(m) < 1e-15 ? "0" : Math.abs(m) >= 1e6 || Math.abs(m) < 1e-3 && Math.abs(m) > 0 ? m.toExponential(8) : parseFloat(m.toPrecision(10)).toString();
}
function Ct(m) {
  const { nodes: M, elements: C, nodeInputs: N, elementInputs: T, title: P, e2kModel: v } = m, G = v == null ? void 0 : v.rawSections;
  return G && G.size > 0 ? gt(G) : $t(m);
}
function gt(m, M) {
  const C = [], N = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  C.push("$ File exported from Awatif FEM Studio (round-trip)"), C.push("");
  for (const T of N) {
    const P = m.get(T);
    if (!(!P || P.length === 0)) {
      C.push(`$ ${T}`);
      for (const v of P) C.push(v);
      C.push("");
    }
  }
  for (const [T, P] of m) if (!N.includes(T) && P.length !== 0) {
    C.push(`$ ${T}`);
    for (const v of P) C.push(v);
    C.push("");
  }
  return C.push("  END"), C.push("$ END OF MODEL FILE"), C.join(`\r
`);
}
function $t(m) {
  var _a, _b, _c, _d;
  const { nodes: M, elements: C, nodeInputs: N, elementInputs: T, title: P, units: v } = m, G = (v == null ? void 0 : v.force) || "Tonf", I = (v == null ? void 0 : v.length) || "m", s = [], d = (t) => Math.round(t * 1e4) / 1e4, w = (() => {
    const t = (G || "Tonf").toLowerCase();
    return t === "tonf" || t === "tonf-f" ? 1 / 9.80665 : t === "kn" || t === "kn-f" ? 1 : t === "kgf" || t === "kg" ? 1 / 980665e-8 : t === "kip" || t === "kips" ? 1 / 4.44822 : 1;
  })(), H = (t) => t * w, Z = (t) => t * w, B = (t) => t * w, Y = /* @__PURE__ */ new Date(), J = `${Y.getMonth() + 1}/${Y.getDate()}/${Y.getFullYear()}  ${Y.getHours()}:${String(Y.getMinutes()).padStart(2, "0")}:${String(Y.getSeconds()).padStart(2, "0")}`;
  s.push(`$ File   "Hekatan_export.e2k"  saved ${J} in ETABS 22.6.0`), s.push(""), s.push("$ PROGRAM INFORMATION"), s.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), s.push(""), s.push("$ CONTROLS"), s.push(`  UNITS  "${G}"  "${I}"  "C"  `), s.push('  TITLE1  "Hekatan Struct export"  '), P && s.push(`  TITLE2  "${P}"  `), s.push("  PREFERENCE  MERGETOL 0.001"), s.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), s.push("");
  const R = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  M.forEach((t) => {
    R.add(d(t[0])), u.add(d(t[1]));
  });
  const p = [...R].sort((t, n) => t - n), o = [...u].sort((t, n) => t - n);
  s.push("$ GRIDS"), s.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), p.forEach((t, n) => {
    const r = n < 26 ? String.fromCharCode(65 + n) : String.fromCharCode(65 + n % 26).repeat(Math.floor(n / 26) + 1);
    s.push(`  GRID "G1"  LABEL "${r}"  DIR "X"  COORD ${t}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), o.forEach((t, n) => {
    s.push(`  GRID "G1"  LABEL "${n + 1}"  DIR "Y"  COORD ${t}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), s.push("");
  const e = /* @__PURE__ */ new Set();
  M.forEach((t) => e.add(d(t[2])));
  const l = [...e].sort((t, n) => t - n), y = [], f = /* @__PURE__ */ new Map();
  y.push("Base"), f.set(l[0], "Base");
  for (let t = 1; t < l.length; t++) {
    const n = `Level_${t}`;
    y.push(n), f.set(l[t], n);
  }
  s.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let t = l.length - 1; t >= 1; t--) s.push(`  STORY "${y[t]}"  HEIGHT ${d(l[t] - l[t - 1])} MASTERSTORY "Yes"  `);
  l.length > 0 && s.push(`  STORY "Base"  ELEV ${l[0]} `), s.push(""), C.some((t) => t.length === 4), s.push("$ DIAPHRAGM NAMES"), s.push('  DIAPHRAGM "D1"    TYPE RIGID'), s.push(""), s.push("$ MATERIAL PROPERTIES");
  const x = /* @__PURE__ */ new Set();
  (_a = T.elasticities) == null ? void 0 : _a.forEach((t) => x.add(t));
  const F = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
  let U = 0, V = 0;
  const q = 980665e-8, tt = /* @__PURE__ */ new Map();
  if (T.densities && T.densities.size > 0) {
    const t = /* @__PURE__ */ new Map();
    T.densities.forEach((n, r) => {
      var _a2;
      const a = (_a2 = T.elasticities) == null ? void 0 : _a2.get(r);
      a !== void 0 && (t.has(a) || t.set(a, []), t.get(a).push(n));
    }), t.forEach((n, r) => {
      const a = n.reduce((E, S) => E + S, 0) / n.length, $ = a > 100 ? a * q : a * 9.80665;
      tt.set(r, $);
    });
  }
  for (const t of x) {
    const n = t >= 1e8, r = n ? `Steel_${++U}` : `Conc_${++V}`;
    F.set(t, r), _.set(t, n);
    const a = tt.get(t) ?? (n ? 76.97 : 24), $ = Z(t), E = B(a), S = n ? 0.3 : 0.2, b = n ? 117e-7 : 1e-5;
    if (n) {
      s.push(`  MATERIAL  "${r}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${d(E)}`), s.push(`  MATERIAL  "${r}"    SYMTYPE "Isotropic"  E ${d($)}  U ${S}  A ${b}`);
      const D = 345e3, z = 45e4;
      s.push(`  MATERIAL  "${r}"  FY ${d(Z(D))}  FU ${d(Z(z))}  FYE ${d(Z(D * 1.1))}  FUE ${d(Z(z * 1.1))}`);
    } else s.push(`  MATERIAL  "${r}"    TYPE "Concrete"    WEIGHTPERVOLUME ${d(E)}`), s.push(`  MATERIAL  "${r}"    SYMTYPE "Isotropic"  E ${d($)}  U ${S}  A ${b}`), s.push(`  MATERIAL  "${r}"    FC ${d(Z(24e3))}`);
  }
  s.push(""), s.push("$ FRAME SECTIONS");
  const et = /* @__PURE__ */ new Set(), at = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), it = 0.05;
  C.forEach((t, n) => {
    var _a2, _b2, _c2, _d2, _e, _f;
    if (t.length !== 2) return;
    const r = (_a2 = T.sectionShapes) == null ? void 0 : _a2.get(n), a = ((_b2 = T.elasticities) == null ? void 0 : _b2.get(n)) ?? 0, $ = F.get(a) || "Conc_1", E = _.get(a) ?? a >= 1e8, S = ((_c2 = T.areas) == null ? void 0 : _c2.get(n)) ?? 0, b = ((_d2 = T.momentsOfInertiaY) == null ? void 0 : _d2.get(n)) ?? 0;
    (_e = T.momentsOfInertiaZ) == null ? void 0 : _e.get(n), (_f = T.torsionalConstants) == null ? void 0 : _f.get(n);
    let D = (r == null ? void 0 : r.type) || "rect", z = (r == null ? void 0 : r.h) ?? 0, K = (r == null ? void 0 : r.b) ?? 0, st = (r == null ? void 0 : r.d) ?? 0;
    const dt = (r == null ? void 0 : r.tf) ?? 0, St = (r == null ? void 0 : r.tw) ?? 0;
    z <= 0 && K <= 0 && st <= 0 && S > 0 && (b > 0 ? (z = Math.sqrt(12 * b / S), K = S / z) : z = K = Math.sqrt(S), (!isFinite(z) || z < it) && (z = it), (!isFinite(K) || K < it) && (K = it), D = "rect"), z <= 0 && K <= 0 && st <= 0 && (z = 0.3, K = 0.3, D = "rect");
    const ut = `${D}_${d(z)}_${d(K)}_${d(st)}_${d(dt)}_${d(St)}_${$}`;
    (r == null ? void 0 : r.name) && !j.has(ut) && j.set(ut, r.name);
    let ot = j.get(ut);
    if (!ot) {
      const ht = E ? "S" : "C";
      D === "rect" ? ot = `${ht}_R${Math.round(K * 100)}x${Math.round(z * 100)}` : D === "circ" ? ot = `${ht}_C_D${Math.round(st * 100)}` : D === "I" ? ot = `${ht}_I${Math.round(z * 100)}x${Math.round(K * 100)}` : D === "HSS" ? ot = `${ht}_HSS${Math.round(K * 100)}x${Math.round(z * 100)}x${Math.round(St * 1e3)}` : ot = `${ht}_Sec${et.size + 1}`, j.set(ut, ot);
    }
    if (at.set(n, ot), et.has(ot)) return;
    et.add(ot);
    let nt;
    D === "I" ? nt = "Steel I/Wide Flange" : D === "HSS" ? nt = "Steel Tube" : D === "CFT" ? nt = "Filled Steel Tube" : D === "pipe" ? nt = "Steel Pipe" : D === "L" ? nt = "Steel Angle" : D === "C" ? nt = "Steel Channel" : D === "2C" ? nt = "Steel Double Channel" : D === "circ" ? nt = "Concrete Circle" : nt = "Concrete Rectangular";
    let pt = `  FRAMESECTION  "${ot}"  MATERIAL "${$}"  SHAPE "${nt}"`;
    z && (pt += `  D ${d(z)}`), K && (pt += `  B ${d(K)}`), st && !z && (pt += `  D ${d(st)}`), dt && (pt += `  TF ${d(dt)}`), St && (pt += `  TW ${d(St)}`), s.push(pt);
  }), s.push("");
  const X = /* @__PURE__ */ new Map();
  let lt = 0;
  M.forEach((t) => {
    const n = `${d(t[0])},${d(t[1])}`;
    X.has(n) || X.set(n, `${++lt}`);
  }), s.push("$ POINT COORDINATES");
  for (const [t, n] of X) {
    const [r, a] = t.split(",").map(Number);
    s.push(`  POINT "${n}"  ${r} ${a} `);
  }
  s.push("");
  const Q = (t) => {
    const n = M[t], r = `${d(n[0])},${d(n[1])}`;
    return { pt: X.get(r) || "1", story: f.get(d(n[2])) || "Base" };
  }, ft = (t) => {
    var _a2, _b2, _c2, _d2;
    const n = [], r = (_a2 = m.propertyModifiers) == null ? void 0 : _a2.get(t);
    r && r.some((S) => Math.abs(S - 1) > 1e-9) && n.push(`PROPMODIFIERS "${r.map((S) => d(S)).join(" ")}"`);
    const a = (_b2 = T.momentReleases) == null ? void 0 : _b2.get(t);
    if (a && a.some((S) => S)) {
      const S = [];
      a.length === 12 ? (a[0] && S.push("PI"), a[1] && S.push("V2I"), a[2] && S.push("V3I"), a[3] && S.push("TI"), a[4] && S.push("M2I"), a[5] && S.push("M3I"), a[6] && S.push("PJ"), a[7] && S.push("V2J"), a[8] && S.push("V3J"), a[9] && S.push("TJ"), a[10] && S.push("M2J"), a[11] && S.push("M3J")) : a.length === 6 && (a[0] && S.push("TI"), a[1] && S.push("M2I"), a[2] && S.push("M3I"), a[3] && S.push("TJ"), a[4] && S.push("M2J"), a[5] && S.push("M3J")), S.length > 0 && n.push(`RELEASE "${S.join(" ")}"`);
    }
    const $ = (_c2 = T.insertionPoints) == null ? void 0 : _c2.get(t);
    $ && (Math.abs($[0]) > 1e-9 || Math.abs($[1]) > 1e-9) && n.push(`LATEROFFSET ${d($[0])} TRANSOFFSET ${d($[1])}`);
    const E = (_d2 = T.rigidOffsets) == null ? void 0 : _d2.get(t);
    return E && (Math.abs(E[0]) > 1e-9 || Math.abs(E[1]) > 1e-9) && n.push(`LENGTHOFFI ${d(E[0])} LENGTHOFFJ ${d(E[1])} RIGIDZONE 0.5`), n.length > 0 ? ` ${n.join(" ")} ` : "";
  }, ct = [], Et = /* @__PURE__ */ new Set(), rt = /* @__PURE__ */ new Map();
  C.forEach((t, n) => {
    if (t.length !== 2) return;
    const r = At(M, t);
    if (r === "BEAM") return;
    const a = M[t[0]][2] <= M[t[1]][2] ? t[0] : t[1], $ = M[t[0]][2] <= M[t[1]][2] ? t[1] : t[0];
    if (Math.abs(M[a][0] - M[$][0]) > 1e-6 || Math.abs(M[a][1] - M[$][1]) > 1e-6) return;
    const E = Q(a), S = at.get(n) || `Sec_${n}`, b = `${E.pt}_${S}_${r}`;
    rt.has(b) || rt.set(b, []), rt.get(b).push({ i: n, bot: a, top: $, zBot: d(M[a][2]), zTop: d(M[$][2]), planPt: E.pt, secName: S, type: r });
  }), rt.forEach((t, n) => {
    t.sort((a, $) => a.zBot - $.zBot);
    let r = 0;
    for (let a = 1; a <= t.length; a++) if (a === t.length || Math.abs(t[a].zBot - t[a - 1].zTop) > 1e-6) {
      const E = t.slice(r, a);
      E.length >= 1 && (ct.push({ elemIndices: E.map((S) => S.i), planPt: E[0].planPt, bottomNodeIdx: E[0].bot, topNodeIdx: E[E.length - 1].top, secName: E[0].secName, type: E[0].type, nSegments: E.length }), E.forEach((S) => Et.add(S.i))), r = a;
    }
  }), s.push("$ LINE CONNECTIVITIES");
  const A = [];
  ct.forEach((t, n) => {
    const r = `C${n + 1}`, a = Q(t.topNodeIdx);
    Q(t.bottomNodeIdx);
    const $ = d(M[t.topNodeIdx][2]), E = d(M[t.bottomNodeIdx][2]), S = l.indexOf($), b = l.indexOf(E), D = Math.max(1, S - b), z = ft(t.elemIndices[0]);
    s.push(`  LINE  "${r}"  ${t.type}  "${a.pt}"  "${a.pt}"  ${D}`), A.push(`  LINEASSIGN  "${r}"  "${a.story}"  SECTION "${t.secName}" ${z} RIGIDZONE 0.5 MAXSTASPC 0.5 MINNUMSTA ${t.nSegments} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  }), C.forEach((t, n) => {
    if (t.length !== 2 || Et.has(n)) return;
    const r = At(M, t), a = at.get(n) || `Sec_${n}`, $ = ft(n);
    if (r === "BEAM") {
      const E = Q(t[0]), S = Q(t[1]);
      s.push(`  LINE  "E${n + 1}"  BEAM  "${E.pt}"  "${S.pt}"  0`), A.push(`  LINEASSIGN  "E${n + 1}"  "${E.story}"  SECTION "${a}" ${$} RIGIDZONE 0.5 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const E = M[t[0]][2] <= M[t[1]][2] ? t[0] : t[1], S = M[t[0]][2] <= M[t[1]][2] ? t[1] : t[0], b = Q(S), D = d(M[E][2]), z = d(M[S][2]), K = l.indexOf(D), st = l.indexOf(z), dt = Math.max(1, st >= 0 && K >= 0 ? st - K : 1);
      s.push(`  LINE  "E${n + 1}"  ${r}  "${b.pt}"  "${b.pt}"  ${dt}`), A.push(`  LINEASSIGN  "E${n + 1}"  "${b.story}"  SECTION "${a}" ${$} RIGIDZONE 0.5 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    }
  }), s.push("");
  const g = m.weightMode ?? "auto", c = /* @__PURE__ */ new Set();
  s.push("$ POINT ASSIGNS"), (_b = N.supports) == null ? void 0 : _b.forEach((t, n) => {
    const r = [];
    if (t[0] && r.push("UX"), t[1] && r.push("UY"), t[2] && r.push("UZ"), t[3] && r.push("RX"), t[4] && r.push("RY"), t[5] && r.push("RZ"), r.length > 0) {
      const a = Q(n), $ = a.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      s.push(`  POINTASSIGN  "${a.pt}"  "${a.story}"  RESTRAINT "${r.join(" ")}" ${$} `), c.add(`${a.pt}@${a.story}`);
    }
  }), ct.forEach((t) => {
    const n = Q(t.topNodeIdx), r = `${n.pt}@${n.story}`;
    !c.has(r) && n.story !== "Base" && (s.push(`  POINTASSIGN  "${n.pt}"  "${n.story}"  DIAPH "D1"  `), c.add(r));
  }), g === "manual" && N.loads && N.loads.forEach((t, n) => {
    const r = Q(n), a = `${r.pt}@${r.story}`;
    c.has(a) || (s.push(`  POINTASSIGN  "${r.pt}"  "${r.story}"  DIAPH "DISCONNECTED"  `), c.add(a));
  }), s.push(""), s.push("$ LINE ASSIGNS"), A.forEach((t) => s.push(t)), s.push("");
  const O = [];
  C.forEach((t, n) => {
    if (t.length === 4) {
      const r = M[t[0]], a = M[t[1]], $ = M[t[2]], E = [a[0] - r[0], a[1] - r[1], a[2] - r[2]], S = [$[0] - r[0], $[1] - r[1], $[2] - r[2]], b = E[1] * S[2] - E[2] * S[1], D = E[2] * S[0] - E[0] * S[2], z = E[0] * S[1] - E[1] * S[0], K = Math.sqrt(b * b + D * D + z * z), st = K > 1e-10 && Math.abs(z) / K < 0.5;
      O.push({ idx: n, el: t, isWall: st });
    }
  });
  const i = (() => {
    for (const [t, n] of _) if (!n) return F.get(t);
    return F.values().next().value || "Conc_1";
  })();
  if (O.some((t) => !t.isWall)) {
    s.push("$ SLAB PROPERTIES");
    const t = ((_c = T.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
    s.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${i}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${d(t)} `), s.push("");
  }
  if (O.some((t) => t.isWall)) {
    s.push("$ WALL PROPERTIES");
    const t = ((_d = T.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
    s.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${i}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${d(t)} `), s.push("");
  }
  if (O.length > 0) {
    s.push("$ AREA CONNECTIVITIES");
    const t = [];
    O.forEach((n, r) => {
      const { el: a, isWall: $ } = n, E = $ ? `W${r + 1}` : `F${r + 1}`, S = $ ? "PANEL" : "FLOOR", b = a.map((D) => Q(D));
      if ($) {
        const D = M[a[0]][2] <= M[a[2]][2] ? 0 : 2, z = M[a[1]][2] <= M[a[3]][2] ? 1 : 3;
        s.push(`  AREA "${E}"  ${S}  4  "${b[D].pt}"  "${b[z].pt}"  "${b[z].pt}"  "${b[D].pt}"  1  1  0  0  `);
        const K = b[D === 0 ? 2 : 0].story;
        t.push(`  AREAASSIGN  "${E}"  "${K}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else s.push(`  AREA "${E}"  ${S}  4  "${b[0].pt}"  "${b[1].pt}"  "${b[2].pt}"  "${b[3].pt}"  0  0  0  0  `), t.push(`  AREAASSIGN  "${E}"  "${b[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
    }), s.push(""), s.push("$ AREA ASSIGNS"), t.forEach((n) => s.push(n)), s.push("");
  }
  const h = g === "manual" ? 0 : 1;
  s.push("$ LOAD PATTERNS"), s.push(`  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  ${h}`), s.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), s.push("");
  const L = [];
  return N.loads && N.loads.size > 0 && N.loads.forEach((t, n) => {
    const [r, a, $] = t, E = Q(n);
    Math.abs(r) > 1e-10 && L.push(`  POINTLOAD  "${E.pt}"  "${E.story}"  TYPE "FORCE"  LC "Dead"  FX ${d(H(r))}  FY 0  FZ 0`), Math.abs(a) > 1e-10 && L.push(`  POINTLOAD  "${E.pt}"  "${E.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY ${d(H(a))}  FZ 0`), g === "manual" && Math.abs($) > 1e-10 && L.push(`  POINTLOAD  "${E.pt}"  "${E.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY 0  FZ ${d(H($))}`);
  }), N.moments && N.moments.size > 0 && N.moments.forEach((t, n) => {
    const [r, a, $] = t, E = Q(n);
    Math.abs(r) > 1e-10 && L.push(`  POINTLOAD  "${E.pt}"  "${E.story}"  TYPE "MOMENT"  LC "Dead"  MX ${d(H(r))}  MY 0  MZ 0`), Math.abs(a) > 1e-10 && L.push(`  POINTLOAD  "${E.pt}"  "${E.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY ${d(H(a))}  MZ 0`), Math.abs($) > 1e-10 && L.push(`  POINTLOAD  "${E.pt}"  "${E.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY 0  MZ ${d(H($))}`);
  }), L.length > 0 && (s.push("$ POINT OBJECT LOADS"), L.forEach((t) => s.push(t)), s.push("")), s.push("$ ANALYSIS OPTIONS"), s.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), s.push('  PDELTA  METHOD "NONE"  '), s.push(""), s.push("$ MASS SOURCE"), s.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), s.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), s.push(""), s.push("$ LOAD CASES"), s.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), s.push('  LOADCASE "Dead"  LOADPAT  "Dead"  SF 1 '), s.push('  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), s.push('  LOADCASE "Live"  LOADPAT  "Live"  SF 1 '), s.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), s.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), s.push(""), s.push("$ LOAD COMBINATIONS"), s.push('  COMBO "1.4D"  TYPE "Linear Add"  '), s.push('  COMBO "1.4D"  LOADCASE  "Dead"  SF 1.4 '), s.push('  COMBO "1.2D+1.6L"  TYPE "Linear Add"  '), s.push('  COMBO "1.2D+1.6L"  LOADCASE  "Dead"  SF 1.2 '), s.push('  COMBO "1.2D+1.6L"  LOADCASE  "Live"  SF 1.6 '), s.push(""), s.push("  END"), s.push("$ END OF MODEL FILE"), s.join(`\r
`);
}
function At(m, M) {
  const C = m[M[0]], N = m[M[1]], T = Math.abs(N[2] - C[2]), P = Math.sqrt((N[0] - C[0]) ** 2 + (N[1] - C[1]) ** 2), v = T > P * 0.5;
  return v && P > 0.01 ? "BRACE" : v ? "COLUMN" : "BEAM";
}
export {
  Lt as a,
  Rt as b,
  Nt as c,
  Ct as e,
  Ot as p
};
