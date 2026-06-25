function Lt() {
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
    let m = false, y = 0, w = 0, v = 0, N = 0;
    d.addEventListener("mousedown", (s) => {
      const S = s.target;
      if (!S.closest("#modal-header") || S.closest("button")) return;
      m = true;
      const Y = d.getBoundingClientRect();
      y = s.clientX, w = s.clientY, v = Y.left, N = Y.top, d.style.bottom = "auto", d.style.right = "auto", d.style.left = `${Y.left}px`, d.style.top = `${Y.top}px`, s.preventDefault();
    }), document.addEventListener("mousemove", (s) => {
      if (!m) return;
      let S = v + (s.clientX - y), Y = N + (s.clientY - w);
      S = Math.max(-d.offsetWidth + 80, Math.min(window.innerWidth - 80, S)), Y = Math.max(0, Math.min(window.innerHeight - 30, Y)), d.style.left = `${S}px`, d.style.top = `${Y}px`;
    }), document.addEventListener("mouseup", () => {
      m = false;
    });
  }
  let E = false;
  const $ = 0.9;
  function T(m, y) {
    var _a, _b, _c, _d;
    if (!m.frequencies || m.frequencies.length === 0) {
      d.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const w = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], v = [0, 0, 0, 0, 0, 0], N = m.frequencies.length;
    let s = -1, S = -1, Y = -1, H = 0, Z = 0;
    {
      const e = [0, 0, 0, 0, 0, 0];
      for (let l = 0; l < N; l++) {
        const x = ((_a = m.massParticipation) == null ? void 0 : _a[l]) || [0, 0, 0, 0, 0, 0];
        for (let f = 0; f < 6; f++) e[f] += x[f];
        s < 0 && e[0] >= $ && (s = l + 1), S < 0 && e[1] >= $ && (S = l + 1), Y < 0 && e[0] >= $ && e[1] >= $ && (Y = l + 1);
      }
      H = e[0], Z = e[1];
    }
    let B = -1, U = -1, J = -1;
    const C = 0.1;
    for (let e = 0; e < N; e++) {
      const l = ((_b = m.massParticipation) == null ? void 0 : _b[e]) || [0, 0, 0, 0, 0, 0];
      B < 0 && l[0] > C && (B = e + 1), U < 0 && l[1] > C && (U = e + 1), J < 0 && l[5] > C && (J = e + 1);
    }
    const I = Y > 0 ? `<span style="color:#0f0">\u2713 ASCE 7-22 \xA712.9.1.1 \u2014 90 % alcanzado en X e Y al modo ${Y} de ${N}</span>` : s > 0 && S < 0 ? `<span style="color:#fa0">\u26A0 X cumple en modo ${s}, Y todav\xEDa en ${(Z * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : S > 0 && s < 0 ? `<span style="color:#fa0">\u26A0 Y cumple en modo ${S}, X todav\xEDa en ${(H * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : `<span style="color:#f44">\u2717 ASCE 7-22 NO cumplido en ${N} modos \xB7 \u03A3Ux=${(H * 100).toFixed(1)} % \xB7 \u03A3Uy=${(Z * 100).toFixed(1)} % \u2014 aumentar nModes</span>`, p = (() => {
      const e = (l, x) => {
        var _a2;
        if (l < 0) return `<span style="color:#f44">${x}: no encontrado en ${N} modos</span>`;
        const f = ((_a2 = m.massParticipation) == null ? void 0 : _a2[l - 1]) || [0, 0, 0, 0, 0, 0], D = x === "Ux" ? 0 : x === "Uy" ? 1 : 5, P = m.frequencies[l - 1] > 0 ? 1 / m.frequencies[l - 1] : 0;
        return `<span style="color:#0f0">${x}: modo ${l}, T=${P.toFixed(3)} s, MPF=${(f[D] * 100).toFixed(1)} %</span>`;
      };
      return `<div style="margin:4px 0; padding:4px 6px; background:rgba(0,255,255,0.05); border-left:2px solid #0ff; font-size:11px;">
  \u{1F3AF} <b>Modos s\xEDsmicos principales</b> (ASCE 7-22 \xA712.9.1):<br>
  ${e(B, "Ux")} \xB7 ${e(U, "Uy")} \xB7 ${e(J, "Rz")}
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
    if (o += '<div id="modal-body" style="padding:0 12px 10px 12px;">', o += `<div style="padding:6px 0; font-weight:bold; font-size:13px;">${I}</div>`, o += p, y.properties) for (const e of y.properties) o += `<span style="color:#888">${e}</span>
`;
    y.spectrumHtml && (o += y.spectrumHtml), o += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const e of w) o += `<th style="padding:2px 5px">${e}</th>`;
    o += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let e = 0; e < 6; e++) v[e] = 0;
    if (m.frequencies.forEach((e, l) => {
      var _a2;
      const x = e > 0 ? 1 / e : 0, f = e * 2 * Math.PI, D = ((_a2 = m.massParticipation) == null ? void 0 : _a2[l]) || [0, 0, 0, 0, 0, 0];
      for (let V = 0; V < 6; V++) v[V] += D[V];
      let P = 0, _ = D[0];
      for (let V = 1; V < 6; V++) D[V] > _ && (_ = D[V], P = V);
      const k = _ < 0.05 ? "\u2014" : `${w[P]} (${(_ * 100).toFixed(0)} %)`, X = P === 0 || P === 1 ? "#0f0" : P === 5 ? "#0ff" : P === 2 ? "#fa0" : "#888", q = l + 1 === s, tt = l + 1 === S, et = l + 1 === Y;
      o += `<tr style="border-bottom:1px solid #fff1; ${et ? "background:rgba(0,255,0,0.12);" : q || tt ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${l + 1}${et ? " \u2605" : ""}</td>
  <td style="padding:2px 6px; text-align:right">${e.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${x.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${f.toFixed(2)}</td>`;
      for (let V = 0; V < 6; V++) {
        const lt = (D[V] * 100).toFixed(1), Q = D[V] > 0.5 ? "#f00" : D[V] > 0.1 ? "#ff0" : "#0f0";
        o += `<td style="padding:2px 5px; text-align:right; color:${Q}">${lt}%</td>`;
      }
      const j = v[0] >= $ ? "#0f0" : "#0ff", it = v[1] >= $ ? "#0f0" : "#0ff";
      o += `<td style="padding:2px 5px; text-align:right; color:${j}">${(v[0] * 100).toFixed(1)}%${q ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${it}">${(v[1] * 100).toFixed(1)}%${tt ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(v[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${X}">${k}</td></tr>`;
    }), o += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, o += "</div>", d.innerHTML = o, E) {
      const e = d.querySelector("#modal-body"), l = d.querySelector("#modal-minimize");
      e && (e.style.display = "none"), l && (l.textContent = "\u25A2", l.title = "Restaurar");
    }
    (_c = d.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      E = !E;
      const e = d.querySelector("#modal-body"), l = d.querySelector("#modal-minimize");
      E ? (e.style.display = "none", l.textContent = "\u25A2", l.title = "Restaurar") : (e.style.display = "block", l.textContent = "\u25AC", l.title = "Minimizar");
    }), (_d = d.querySelector("#modal-copy")) == null ? void 0 : _d.addEventListener("click", () => {
      const e = [];
      e.push(`Modal Analysis \u2014 ${y.title}`), e.push(I.replace(/<[^>]+>/g, ""));
      const l = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${w.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      e.push(l), e.push("-".repeat(l.length));
      const x = [0, 0, 0, 0, 0, 0];
      m.frequencies.forEach((D, P) => {
        var _a2;
        const _ = D > 0 ? 1 / D : 0, k = D * 2 * Math.PI, X = ((_a2 = m.massParticipation) == null ? void 0 : _a2[P]) || [0, 0, 0, 0, 0, 0];
        for (let j = 0; j < 6; j++) x[j] += X[j];
        let q = 0, tt = X[0];
        for (let j = 1; j < 6; j++) X[j] > tt && (tt = X[j], q = j);
        const et = tt < 0.05 ? "\u2014" : `${w[q]} (${(tt * 100).toFixed(0)}%)`, at = X.map((j) => ((j * 100).toFixed(1) + "%").padStart(6)).join(" ");
        e.push(`${String(P + 1).padStart(4)}  ${D.toFixed(4).padStart(9)}  ${_.toFixed(4).padStart(9)}  ${k.toFixed(2).padStart(9)}  ${at}  ${(x[0] * 100).toFixed(1).padStart(5)}%  ${(x[1] * 100).toFixed(1).padStart(5)}%  ${(x[5] * 100).toFixed(1).padStart(5)}%  ${et}`);
      }), navigator.clipboard.writeText(e.join(`
`));
      const f = d.querySelector("#modal-copy");
      f.textContent = "\u2713", setTimeout(() => f.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: d, render: T };
}
function yt(d) {
  var _a;
  const E = d.split(/\r?\n/), $ = { force: "TONF", length: "M" }, T = [], m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), v = [], N = [], s = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), Y = [], H = [];
  let Z = "", B = "";
  const U = /* @__PURE__ */ new Map();
  for (const M of E) {
    const g = M.trim();
    if (!g || g.startsWith("$")) {
      g.startsWith("$ ") && (B = g.substring(2).trim());
      continue;
    }
    if (B && (U.has(B) || U.set(B, []), U.get(B).push(M)), B === "CONTROLS") {
      const c = g.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
      c && ($.force = c[1], $.length = c[2]);
      const R = g.match(/TITLE2\s+"([^"]+)"/);
      R && (Z = R[1]);
    }
    if (B === "STORIES - IN SEQUENCE FROM TOP") {
      const c = g.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
      if (c) {
        const R = c[1], i = c[2] ? parseFloat(c[2]) : 0, u = c[3] ? parseFloat(c[3]) : void 0;
        T.push({ name: R, height: i, elev: u ?? 0 });
      }
    }
    if (B === "MATERIAL PROPERTIES") {
      const c = g.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
      if (c) {
        const R = c[1];
        m.has(R) || m.set(R, { type: c[2] || "", E: 0, G: 0, nu: 0 });
        const i = m.get(R);
        c[2] && (i.type = c[2]);
        const u = g.match(/\bE\s+([\d.eE+-]+)/);
        u && (i.E = parseFloat(u[1]));
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
        const R = c[1];
        y.has(R) || y.set(R, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
        const i = y.get(R), u = g.match(/MATERIAL\s+"([^"]+)"/);
        u && (i.material = u[1]);
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
        const O = g.match(/\bR\s+([\d.eE+-]+)/);
        O && (i.R = parseFloat(O[1]));
        const h = g.match(/FILLMATERIAL\s+"([^"]+)"/);
        h && (i.fillMaterial = h[1]);
        const A = g.match(/I2MOD\s+([\d.eE+-]+)/);
        A && (i.modI2 = parseFloat(A[1]));
        const b = g.match(/I3MOD\s+([\d.eE+-]+)/);
        b && (i.modI3 = parseFloat(b[1]));
      }
    }
    if (B === "POINT COORDINATES") {
      const c = g.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
      c && w.set(c[1], [parseFloat(c[2]), parseFloat(c[3])]);
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
        const R = { story: c[2], section: c[3], rigidZone: 0, releases: [], angle: 0 }, i = g.match(/RIGIDZONE\s+([\d.eE+-]+)/);
        i && (R.rigidZone = parseFloat(i[1]));
        const u = g.match(/RELEASE\s+"([^"]+)"/);
        u && (R.releases = u[1].split(/\s+/));
        const L = g.match(/ANG\s+([-\d.eE+]+)/);
        L && (R.angle = parseFloat(L[1])), S.set(`${c[1]}@${c[2]}`, R);
      }
    }
    if (B === "GRIDS") {
      const c = g.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
      c && H.push({ label: c[1], dir: c[2], coord: parseFloat(c[3]) });
    }
    if (B === "FRAME OBJECT LOADS") {
      const c = g.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      c && Y.push({ line: c[1], story: c[2], type: c[3], dir: c[4], lc: c[5], val: parseFloat(c[6]) });
    }
    if (B === "AREA CONNECTIVITIES") {
      const c = g.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
      if (c) {
        const R = ((_a = c[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((i) => i.replace(/"/g, ""))) || [];
        N.push({ name: c[1], pts: R, nStories: 0 });
      }
    }
  }
  const J = /* @__PURE__ */ new Map();
  if (T.length > 0) {
    const M = T.length - 1;
    J.set(T[M].name, T[M].elev);
    for (let g = M - 1; g >= 0; g--) {
      const R = J.get(T[g + 1].name) + T[g].height;
      T[g].elev = R, J.set(T[g].name, R);
    }
  }
  const C = [], I = [], p = /* @__PURE__ */ new Map(), o = (M, g) => `${M}@${g}`, e = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
  for (const M of v) l.set(M.name, M);
  for (const M of v) for (const [g, c] of S) {
    if (!g.startsWith(M.name + "@")) continue;
    const R = c.story, i = T.findIndex((u) => u.name === R);
    if (!(i < 0)) if (M.type === "COLUMN" || M.type === "BRACE") {
      e.add(o(M.pt2, R));
      const u = Math.max(M.nStories, 1), L = Math.min(i + u, T.length - 1);
      e.add(o(M.pt1, T[L].name));
    } else e.add(o(M.pt1, R)), e.add(o(M.pt2, R));
  }
  for (const [M] of s) e.add(M);
  for (const M of e) {
    const [g, c] = M.split("@"), R = w.get(g), i = J.get(c);
    R === void 0 || i === void 0 || (C.push([R[0], R[1], i]), I.push(M), p.set(M, C.length - 1));
  }
  const x = [], f = [], D = [], P = [], _ = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map();
  for (const M of v) for (const [g, c] of S) {
    if (!g.startsWith(M.name + "@")) continue;
    const R = c.story, i = T.findIndex((a) => a.name === R);
    if (i < 0) continue;
    let u, L;
    if (M.type === "COLUMN" || M.type === "BRACE") {
      const a = Math.max(M.nStories, 1), O = Math.min(i + a, T.length - 1);
      u = o(M.pt1, T[O].name), L = o(M.pt2, R);
    } else u = o(M.pt1, R), L = o(M.pt2, R);
    const t = p.get(u), n = p.get(L);
    if (t === void 0 || n === void 0 || t === n) continue;
    const r = x.length;
    if (x.push([t, n]), f.push(M.name), D.push(M.type), P.push(R), _.set(r, c.section), c.rigidZone > 0 && k.set(r, [c.rigidZone, c.rigidZone]), c.releases.length > 0) {
      const a = new Array(12).fill(false), O = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const h of c.releases) {
        const A = O[h];
        A !== void 0 && (a[A] = true);
      }
      X.set(r, a);
    }
  }
  const q = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map();
  for (const [M, g] of _) {
    const c = y.get(g);
    if (!c) continue;
    const R = m.get(c.material);
    R && (q.set(M, R.E), tt.set(M, R.G));
    const i = c.D, u = c.B, L = c.TF, t = c.TW;
    let n = 0, r = 0, a = 0, O = 0, h = 0, A = 0, b = "rect";
    switch (c.shape) {
      case "Concrete Rectangular":
        n = i * u, r = u * i ** 3 / 12, a = i * u ** 3 / 12, O = u * i ** 3 * (1 / 3 - 0.21 * (i / u) * (1 - i ** 4 / (12 * u ** 4))), h = A = 5 / 6 * n, b = "rect";
        break;
      case "Concrete Circle":
        n = Math.PI * i ** 2 / 4, r = a = Math.PI * i ** 4 / 64, O = Math.PI * i ** 4 / 32, h = A = 0.9 * n, b = "circ";
        break;
      case "Steel I/Wide Flange":
        n = 2 * u * L + (i - 2 * L) * t, r = (u * i ** 3 - (u - t) * (i - 2 * L) ** 3) / 12, a = (2 * L * u ** 3 + (i - 2 * L) * t ** 3) / 12, O = (2 * u * L ** 3 + (i - 2 * L) * t ** 3) / 3, h = (i - 2 * L) * t, A = 2 * u * L * 5 / 6, b = "I";
        break;
      case "Steel Tube":
        n = i * u - (i - 2 * t) * (u - 2 * t), r = (u * i ** 3 - (u - 2 * t) * (i - 2 * t) ** 3) / 12, a = (i * u ** 3 - (i - 2 * t) * (u - 2 * t) ** 3) / 12, O = 2 * t * (i - t) * (u - t) * ((i - t) * (u - t)) / (i - t + (u - t)), h = 2 * i * t, A = 2 * u * t, b = "HSS";
        break;
      case "Filled Steel Tube":
        n = i * u, r = u * i ** 3 / 12, a = i * u ** 3 / 12, O = 2 * t * (i - t) * (u - t) * ((i - t) * (u - t)) / (i - t + (u - t)), h = 2 * i * t + 5 / 6 * (i - 2 * t) * (u - 2 * t), A = 2 * u * t + 5 / 6 * (i - 2 * t) * (u - 2 * t), b = "CFT";
        break;
      case "Steel Angle": {
        const F = L || t;
        n = F * (i + u - F), r = F * (i ** 3 + u * F ** 2 + F ** 2 * (i - F)) / 12, a = F * (u ** 3 + i * F ** 2 + F ** 2 * (u - F)) / 12, O = (i + u - F) * F ** 3 / 3, h = i * F, A = u * F, b = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        n = 2 * u * L + (i - 2 * L) * t, r = (t * i ** 3 + 2 * u * L * (i - L) ** 2) / 12, a = (2 * L * u ** 3 + (i - 2 * L) * t ** 3) / 12, O = (2 * u * L ** 3 + (i - 2 * L) * t ** 3) / 3, h = (i - 2 * L) * t, A = 2 * u * L * 5 / 6, b = c.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        n = 2 * (2 * u * L + (i - 2 * L) * t), r = 2 * (t * i ** 3 + 2 * u * L * (i - L) ** 2) / 12, a = 2 * (2 * L * u ** 3 + (i - 2 * L) * t ** 3) / 12, O = 2 * (2 * u * L ** 3 + (i - 2 * L) * t ** 3) / 3, h = 2 * (i - 2 * L) * t, A = 4 * u * L * 5 / 6, b = "2C";
        break;
      default:
        i > 0 && u > 0 && (n = i * u, r = u * i ** 3 / 12, a = i * u ** 3 / 12, O = Math.min(i, u) * Math.max(i, u) ** 3 / 3 * 0.3, h = A = 5 / 6 * n);
        break;
    }
    c.modI2 && (a *= c.modI2), c.modI3 && (r *= c.modI3), et.set(M, n), it.set(M, r), V.set(M, a), lt.set(M, O), h > 0 && at.set(M, h), A > 0 && j.set(M, A), Q.set(M, { type: b, b: u || void 0, h: i || void 0, d: b === "circ" || b === "pipe" ? i : void 0, tw: t || void 0, tf: L || void 0, r: c.R, name: g });
  }
  const ft = /* @__PURE__ */ new Map();
  for (const [M, g] of s) {
    const c = p.get(M);
    if (c === void 0) continue;
    const R = [false, false, false, false, false, false];
    for (const i of g) i === "UX" && (R[0] = true), i === "UY" && (R[1] = true), i === "UZ" && (R[2] = true), i === "RX" && (R[3] = true), i === "RY" && (R[4] = true), i === "RZ" && (R[5] = true);
    ft.set(c, R);
  }
  const ct = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map();
  for (let M = 0; M < f.length; M++) Et.set(`${f[M]}@${P[M]}`, M);
  for (const M of Y) {
    const g = Et.get(`${M.line}@${M.story}`);
    if (g === void 0) continue;
    const [c, R] = x[g], i = C[c], u = C[R], L = Math.sqrt((u[0] - i[0]) ** 2 + (u[1] - i[1]) ** 2 + (u[2] - i[2]) ** 2);
    if (L < 1e-10) continue;
    const t = M.val * L / 2;
    let n = 0, r = 0, a = 0;
    M.dir === "GRAV" || M.dir === "GRAVITY" ? a = -t : M.dir === "X" ? n = t : M.dir === "Y" ? r = t : M.dir === "Z" && (a = -t);
    for (const O of [c, R]) {
      const h = ct.get(O) || [0, 0, 0, 0, 0, 0];
      h[0] += n, h[1] += r, h[2] += a, ct.set(O, h);
    }
  }
  const rt = /* @__PURE__ */ new Map();
  for (const [M, g] of _) {
    const c = y.get(g);
    if (!c) continue;
    const R = m.get(c.material);
    (R == null ? void 0 : R.density) && rt.set(M, R.density);
  }
  return { units: $, stories: T.reverse(), materials: m, frameSections: y, nodes: C, nodeNames: I, nodeNameToIdx: p, elements: x, elementNames: f, elementTypes: D, elementStories: P, elementSections: _, nodeInputs: { supports: ft, loads: ct }, elementInputs: { elasticities: q, shearModuli: tt, areas: et, momentsOfInertiaZ: it, momentsOfInertiaY: V, torsionalConstants: lt, shearAreasY: at, shearAreasZ: j, rigidOffsets: k, momentReleases: X, densities: rt, sectionShapes: Q }, sectionShapes: Q, grids: H, info: { nNodes: C.length, nFrames: x.length, nAreas: N.length, title: Z }, rawSections: U };
}
function G(d) {
  return d && parseFloat(d) || 0;
}
function Tt(d) {
  const E = /* @__PURE__ */ new Map(), $ = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let T;
  for (; (T = $.exec(d)) !== null; ) E.set(T[1], T[2] !== void 0 ? T[2] : T[3]);
  return E;
}
function xt(d) {
  const E = d.split(/\r?\n/);
  return E.some((T) => T.trim().startsWith("TABLE:")) ? Mt(E) : $t(E);
}
function Mt(d) {
  var _a, _b, _c, _d, _e, _f;
  const E = [];
  let $ = "";
  for (const J of d) {
    const C = J.trimEnd();
    C.endsWith("_") ? $ += C.slice(0, -1) + " " : ($ += C, E.push($), $ = "");
  }
  $ && E.push($);
  const T = { force: "KN", length: "m" };
  let m = "UX,UY,UZ,RX,RY,RZ";
  const y = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), s = [], S = [], Y = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), B = [];
  let U = "";
  for (const J of E) {
    const C = J.trim();
    if (!C || C.startsWith(";") || C.startsWith("File ")) continue;
    if (C.startsWith("TABLE:")) {
      const p = C.match(/TABLE:\s+"(.+?)"/);
      U = p ? p[1].toUpperCase() : "";
      continue;
    }
    if (C === "END TABLE DATA") {
      U = "";
      continue;
    }
    const I = Tt(C);
    switch (U) {
      case "PROGRAM CONTROL": {
        const p = I.get("CurrUnits");
        if (p) {
          const o = p.split(",").map((e) => e.trim());
          o[0] && (T.force = o[0]), o[1] && (T.length = o[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const p = I.get("Material");
        p && !y.has(p) && y.set(p, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const p = I.get("Material");
        if (p) {
          const o = y.get(p) || { E: 0, nu: 0, G: 0 };
          o.E = G(I.get("E1")), o.G = G(I.get("G12")), o.nu = G(I.get("U12")), o.density = G(I.get("UnitMass")), y.set(p, o);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const p = I.get("Material");
        p && y.has(p) && (y.get(p).fy = G(I.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const p = I.get("SectionName");
        p && w.set(p, { material: I.get("Material") || "", shape: I.get("Shape") || "Rectangular", D: G(I.get("t3")), B: G(I.get("t2")), TF: G(I.get("tf")), TW: G(I.get("tw")), A: G(I.get("Area")), Iz: G(I.get("I33")), Iy: G(I.get("I22")), J: G(I.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const p = I.get("Section");
        p && v.set(p, { material: I.get("Material") || "", type: I.get("Type") || "Shell", thickness: G(I.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const p = I.get("Joint");
        if (p) {
          const o = G(I.get("XorR")), e = G(I.get("Y")), l = G(I.get("Z"));
          N.set(p, [o, e, l]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const p = I.get("Frame"), o = I.get("JointI"), e = I.get("JointJ");
        p && o && e && s.push({ name: p, j1: o, j2: e });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const p = I.get("Area");
        if (p) {
          const o = parseInt(I.get("NumJoints") || "4"), e = [];
          for (let l = 1; l <= o; l++) {
            const x = I.get(`Joint${l}`);
            x && e.push(x);
          }
          e.length >= 3 && S.push({ name: p, joints: e });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const p = I.get("Joint");
        if (p) {
          const o = [((_a = I.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = I.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = I.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = I.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = I.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = I.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          Y.set(p, o);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const p = I.get("Frame"), o = I.get("AnalSect");
        p && o && H.set(p, o);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const p = I.get("Area"), o = I.get("Section");
        p && o && Z.set(p, o);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const p = I.get("Joint");
        p && B.push({ joint: p, fx: G(I.get("F1")), fy: G(I.get("F2")), fz: G(I.get("F3")), mx: G(I.get("M1")), my: G(I.get("M2")), mz: G(I.get("M3")) });
        break;
      }
    }
  }
  return It(T, m, y, w, v, N, s, S, Y, H, Z, B);
}
function $t(d) {
  const E = { force: "KN", length: "m" };
  let $ = "UX,UY,UZ,RX,RY,RZ";
  const T = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), v = [], N = [], s = /* @__PURE__ */ new Map(), S = [];
  let Y = "", H = "";
  for (const U of d) {
    const J = U.trim();
    if (!J || J.startsWith(";")) continue;
    if (!U.startsWith(" ") && !U.startsWith("	")) {
      const p = J.toUpperCase();
      if (p === "END") break;
      p.startsWith("SHELL SECTION") ? Y = "SHELL SECTION" : p.startsWith("FRAME SECTION") ? Y = "FRAME SECTION" : Y = p.split(/\s+/)[0];
      continue;
    }
    const C = Tt(J), I = J.split(/\s+/);
    switch (Y) {
      case "SYSTEM": {
        const p = C.get("DOF");
        p && ($ = p);
        const o = C.get("LENGTH");
        o && (E.length = o);
        const e = C.get("FORCE");
        e && (E.force = e);
        break;
      }
      case "JOINT": {
        const p = I[0];
        w.set(p, [G(C.get("X")), G(C.get("Y")), G(C.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const p = C.get("ADD"), o = C.get("DOF");
        if (p && o) {
          const e = o.split(","), l = [false, false, false, false, false, false];
          for (const x of e) {
            const f = x.toUpperCase();
            (f === "UX" || f === "U1") && (l[0] = true), (f === "UY" || f === "U2") && (l[1] = true), (f === "UZ" || f === "U3") && (l[2] = true), (f === "RX" || f === "R1") && (l[3] = true), (f === "RY" || f === "R2") && (l[4] = true), (f === "RZ" || f === "R3") && (l[5] = true);
          }
          s.set(p, l);
        }
        break;
      }
      case "MATERIAL": {
        const p = C.get("NAME");
        if (p) H = p, T.set(p, { E: 0, nu: 0, G: 0 });
        else if (H) {
          const o = T.get(H), e = C.get("E");
          e && (o.E = G(e));
          const l = C.get("U");
          l && (o.nu = G(l)), o.G = o.E / (2 * (1 + o.nu));
          const x = C.get("M");
          x && (o.density = G(x));
        }
        break;
      }
      case "SHELL": {
        const p = I[0], o = C.get("J");
        C.get("SEC"), o && N.push({ name: p, joints: o.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const p = C.get("NAME");
        p && y.set(p, { material: C.get("MAT") || "", type: C.get("TYPE") || "Shell", thickness: G(C.get("TH")) });
        break;
      }
      case "FRAME": {
        const p = I[0], o = C.get("J");
        if (o) {
          const e = o.split(",");
          e.length >= 2 && v.push({ name: p, j1: e[0], j2: e[1] });
        }
        break;
      }
      case "LOAD": {
        const p = C.get("ADD");
        p && S.push({ joint: p, fx: G(C.get("UX")), fy: G(C.get("UY")), fz: G(C.get("UZ")), mx: G(C.get("MX")), my: G(C.get("MY")), mz: G(C.get("MZ")) });
        break;
      }
    }
  }
  return It(E, $, T, m, y, w, v, N, s, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), S);
}
function It(d, E, $, T, m, y, w, v, N, s, S, Y) {
  var _a;
  const H = [], Z = /* @__PURE__ */ new Map(), B = [];
  for (const [f, D] of y) Z.set(f, B.length), H.push(f), B.push(D);
  const U = [], J = [], C = /* @__PURE__ */ new Map();
  for (const f of w) {
    const D = Z.get(f.j1), P = Z.get(f.j2);
    if (D !== void 0 && P !== void 0) {
      const _ = U.length;
      U.push([D, P]), J.push(f.name);
      const k = s.get(f.name);
      k && C.set(_, k);
    }
  }
  const I = U.length;
  for (const f of v) {
    const D = f.joints.map((P) => Z.get(P)).filter((P) => P !== void 0);
    if (D.length >= 3) {
      const P = U.length;
      U.push(D), J.push(f.name);
      const _ = S.get(f.name);
      _ && C.set(P, _);
    }
  }
  const p = U.length - I, o = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, e = /* @__PURE__ */ new Map(), l = $.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let f = 0; f < U.length; f++) {
    const D = C.get(f), P = D ? T.get(D) : null, _ = D ? m.get(D) : null;
    if (P || U[f].length === 2) {
      const k = P || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, X = $.get(k.material) || l, q = X.E || l.E, tt = X.nu || 0.3, et = X.G || q / (2 * (1 + tt));
      o.elasticities.set(f, q), o.shearModuli.set(f, et), o.areas.set(f, k.A || k.D * k.B), o.momentsOfInertiaZ.set(f, k.Iz || k.B * k.D ** 3 / 12), o.momentsOfInertiaY.set(f, k.Iy || k.D * k.B ** 3 / 12), o.torsionalConstants.set(f, k.J || 0), o.densities.set(f, X.density || 0), ((_a = k.shape) == null ? void 0 : _a.includes("Wide Flange")) || k.shape === "I" ? e.set(f, { type: "I", b: k.B, h: k.D, name: D || "I-section" }) : e.set(f, { type: "rect", b: k.B, h: k.D });
    } else if (_) {
      const k = $.get(_.material) || l, X = k.E || l.E, q = k.nu || 0.2, tt = k.G || X / (2 * (1 + q));
      o.elasticities.set(f, X), o.shearModuli.set(f, tt), o.thicknesses.set(f, _.thickness), o.poissonsRatios.set(f, q), o.densities.set(f, k.density || 0);
    }
  }
  const x = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [f, D] of N) {
    const P = Z.get(f);
    P !== void 0 && x.supports.set(P, D);
  }
  for (const f of Y) {
    const D = Z.get(f.joint);
    if (D !== void 0) {
      const P = x.forces.get(D) || [0, 0, 0, 0, 0, 0];
      P[0] += f.fx, P[1] += f.fy, P[2] += f.fz, P[3] += f.mx, P[4] += f.my, P[5] += f.mz, x.forces.set(D, P);
    }
  }
  return { units: d, dof: E, materials: $, frameSections: T, shellSections: m, nodes: B, nodeNames: H, nodeNameToIdx: Z, elements: U, elementNames: J, elementSections: C, nodeInputs: x, elementInputs: o, sectionShapes: e, info: { nNodes: B.length, nFrames: I, nShells: p, title: `SAP2000 (${I} frames, ${p} shells)` } };
}
function Dt(d) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: E, elements: $, nodeInputs: T, elementInputs: m } = d, y = d.units || { force: "KN", length: "m" }, w = d.title || "Awatif Model", v = [], N = (o) => v.push(o), s = () => v.push(" ");
  N(`File ${w}.$2k was saved on m/d/yy at h:mm:ss`), s(), N('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), N("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), s();
  const S = [], Y = [];
  if ($.forEach((o, e) => {
    o.length === 2 ? S.push(e) : Y.push(e);
  }), S.length > 0) {
    N('TABLE:  "CONNECTIVITY - FRAME"');
    for (const o of S) {
      const e = $[o];
      N(`   Frame=${o + 1}   JointI=${e[0] + 1}   JointJ=${e[1] + 1}   IsCurved=No`);
    }
    s();
  }
  if (Y.length > 0) {
    N('TABLE:  "CONNECTIVITY - AREA"');
    for (const o of Y) {
      const e = $[o], l = e.map((x, f) => `Joint${f + 1}=${x + 1}`).join("   ");
      N(`   Area=${o + 1}   NumJoints=${e.length}   ${l}`);
    }
    s();
  }
  N('TABLE:  "COORDINATE SYSTEMS"'), N("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), s(), N('TABLE:  "DATABASE FORMAT TYPES"'), N("   UnitsCurr=Yes   OverrideE=No"), s();
  const H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map();
  for (const o of S) {
    const e = ((_a = m.areas) == null ? void 0 : _a.get(o)) || 0, l = ((_b = m.momentsOfInertiaZ) == null ? void 0 : _b.get(o)) || 0, x = ((_c = m.momentsOfInertiaY) == null ? void 0 : _c.get(o)) || 0, f = ((_d = m.torsionalConstants) == null ? void 0 : _d.get(o)) || 0, D = ((_e = m.elasticities) == null ? void 0 : _e.get(o)) || 0, P = `MAT_${Math.round(D)}`, _ = `A${e.toPrecision(6)}_Iz${l.toPrecision(6)}`;
    if (!H.has(_)) {
      let X = 0.3, q = 0.3;
      e > 0 && l > 0 && (X = Math.sqrt(12 * l / e), q = e / X), H.set(_, { A: e, Iz: l, Iy: x, J: f, b: q, h: X, matKey: P });
    }
    const k = [...H.keys()].indexOf(_) + 1;
    Z.set(o, `SEC${k}`);
  }
  if (S.length > 0) {
    N('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const o of S) {
      const e = Z.get(o) || "SEC1";
      N(`   Frame=${o + 1}   AutoSelect=N.A.   AnalSect=${e}   MatProp=Default`);
    }
    s();
  }
  if (H.size > 0) {
    N('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let o = 0;
    for (const [, e] of H) {
      o++;
      const l = e.A * 5 / 6;
      N(`   SectionName=SEC${o}   Material=${e.matKey}   Shape=Rectangular   t3=${W(e.h)}   t2=${W(e.b)}   Area=${W(e.A)}   TorsConst=${W(e.J)}   I33=${W(e.Iz)}   I22=${W(e.Iy)}   I23=0   AS2=${W(l)}   AS3=${W(l)} _`), N("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    s();
  }
  const B = !!d.layeredSection && Y.length > 0, U = d.layeredSection, J = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map();
  if (!B) for (const o of Y) {
    const e = ((_f = m.thicknesses) == null ? void 0 : _f.get(o)) || 0.1, l = ((_g = m.elasticities) == null ? void 0 : _g.get(o)) || 0, x = `MAT_${Math.round(l)}`, f = `t${e.toPrecision(6)}`;
    J.has(f) || J.set(f, { t: e, matKey: x });
    const D = [...J.keys()].indexOf(f) + 1;
    C.set(o, `SSEC${D}`);
  }
  if (Y.length > 0) {
    N('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const o of Y) {
      const e = B ? U.name : C.get(o) || "SSEC1";
      N(`   Area=${o + 1}   Section=${e}   MatProp=Default`);
    }
    if (s(), N('TABLE:  "AREA SECTION PROPERTIES"'), B) {
      const o = U, e = ((_h = o.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      N(`   Section=${o.name}   Material=${e}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${W(o.totalThickness)}   BendThick=${W(o.totalThickness)}   Color=Magenta`);
    } else {
      let o = 0;
      for (const [, e] of J) o++, N(`   Section=SSEC${o}   Material=${e.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${W(e.t)}   BendThick=${W(e.t)}   Color=Cyan`);
    }
    if (s(), B) {
      N('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const o = U;
      for (const e of o.layers) {
        const l = e.angle ?? 0, x = e.numIntPts ?? 3;
        N(`   Section=${o.name}   LayerName=${e.name}   Distance=${W(e.distance)}   Thickness=${W(e.thickness)}   Type=Shell   NumIntPts=${x}   Material=${e.material}   MatAngle=${W(l * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      s();
    }
  }
  N('TABLE:  "JOINT COORDINATES"');
  for (let o = 0; o < E.length; o++) {
    const e = E[o];
    N(`   Joint=${o + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${W(e[0])}   Y=${W(e[1])}   Z=${W(e[2])}   SpecialJt=No`);
  }
  if (s(), T.supports && T.supports.size > 0) {
    N('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [o, e] of T.supports) {
      if (!e.some((x) => x)) continue;
      const l = (x) => x ? "Yes" : "No";
      N(`   Joint=${o + 1}   U1=${l(e[0])}   U2=${l(e[1])}   U3=${l(e[2])}   R1=${l(e[3])}   R2=${l(e[4])}   R3=${l(e[5])}`);
    }
    s();
  }
  const I = d.selfWtMult ?? 1;
  if (N('TABLE:  "LOAD PATTERN DEFINITIONS"'), N(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${I}`), s(), N('TABLE:  "LOAD CASE DEFINITIONS"'), N('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), s(), N('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), N('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), s(), T.forces && T.forces.size > 0) {
    N('TABLE:  "JOINT LOADS - FORCE"');
    for (const [o, e] of T.forces) e.some((l) => Math.abs(l) > 1e-12) && N(`   Joint=${o + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${W(e[0])}   F2=${W(e[1])}   F3=${W(e[2])}   M1=${W(e[3])}   M2=${W(e[4])}   M3=${W(e[5])}`);
    s();
  }
  const p = /* @__PURE__ */ new Map();
  for (let o = 0; o < $.length; o++) {
    const e = ((_i = m.elasticities) == null ? void 0 : _i.get(o)) || 0, l = ((_j = m.shearModuli) == null ? void 0 : _j.get(o)) || 0, x = e > 0 && l > 0 ? Math.max(0, Math.min(0.5, e / (2 * l) - 1)) : 0.2, f = ((_k = m.densities) == null ? void 0 : _k.get(o)) || 0, D = `MAT_${Math.round(e)}`;
    p.has(D) || p.set(D, { E: e, nu: x, G: l, rho: f });
  }
  N('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [o] of p) N(`   Material=${o}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  s(), N('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [o, e] of p) N(`   Material=${o}   UnitWeight=${W(e.rho * 9.81)}   UnitMass=${W(e.rho)}   E1=${W(e.E)}   G12=${W(e.G)}   U12=${W(e.nu)}   A1=9.9E-06`);
  s(), N('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [o] of p) N(`   Material=${o}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return s(), N('TABLE:  "PROGRAM CONTROL"'), N(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${y.force}, ${y.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), s(), N("END TABLE DATA"), N(""), v.join(`\r
`);
}
function W(d) {
  return d === 0 || Math.abs(d) < 1e-15 ? "0" : Math.abs(d) >= 1e6 || Math.abs(d) < 1e-3 && Math.abs(d) > 0 ? d.toExponential(8) : parseFloat(d.toPrecision(10)).toString();
}
function Nt(d, E, $ = 0.05) {
  const T = E.map(([m, y]) => `${(+m).toFixed(4)} ${(+y).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${d}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${$}  SPECTYPE "USER"  `, `  FUNCTION "${d}"  TIMEVAL "${T}"  `];
}
function gt(d) {
  const { name: E, func: $, modalCase: T = "Modal", sfX: m = 9.81, sfY: y = 9.81 } = d, w = [`  LOADCASE "${E}"  TYPE  "Response Spectrum"  MODALCASE  "${T}"  `];
  return m && w.push(`  LOADCASE "${E}"  ACCEL  "U1"  FUNC  "${$}"  SF  ${m}  `), y && w.push(`  LOADCASE "${E}"  ACCEL  "U2"  FUNC  "${$}"  SF  ${y}  `), w;
}
function Ft(d) {
  var _a;
  const E = (_a = d.e2kModel) == null ? void 0 : _a.rawSections;
  let $ = E && E.size > 0 ? Rt(E, d.e2kModel) : Ct(d);
  return d.seismicNEC && ($ = Ot($, d.seismicNEC)), $;
}
function Ot(d, E) {
  const $ = d.includes(`\r
`) ? `\r
` : `
`, T = d.split(/\r?\n/), m = E.name ?? "NEC", y = Nt(m, E.points, E.dampRatio ?? 0.05), w = gt({ name: E.caseName ?? "Sismo NEC", func: m, modalCase: E.modalCase, sfX: E.sfX, sfY: E.sfY });
  return At(T, "FUNCTIONS", y), At(T, "LOAD CASES", w), T.join($);
}
function At(d, E, $) {
  const T = d.findIndex((w) => w.trim() === `$ ${E}`);
  if (T >= 0) {
    d.splice(T + 1, 0, ...$);
    return;
  }
  const m = d.findIndex((w) => w.trim() === "END"), y = m >= 0 ? m : d.length;
  d.splice(y, 0, `$ ${E}`, ...$, "");
}
function Rt(d, E) {
  const $ = [], T = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  $.push("$ File exported from Awatif FEM Studio (round-trip)"), $.push("");
  for (const m of T) {
    const y = d.get(m);
    if (!(!y || y.length === 0)) {
      $.push(`$ ${m}`);
      for (const w of y) $.push(w);
      $.push("");
    }
  }
  for (const [m, y] of d) if (!T.includes(m) && y.length !== 0) {
    $.push(`$ ${m}`);
    for (const w of y) $.push(w);
    $.push("");
  }
  return $.push("  END"), $.push("$ END OF MODEL FILE"), $.join(`\r
`);
}
function Ct(d) {
  var _a, _b, _c, _d;
  const { nodes: E, elements: $, nodeInputs: T, elementInputs: m, title: y, units: w } = d, v = (w == null ? void 0 : w.force) || "Tonf", N = (w == null ? void 0 : w.length) || "m", s = [], S = (t) => Math.round(t * 1e4) / 1e4, Y = (() => {
    const t = (v || "Tonf").toLowerCase();
    return t === "tonf" || t === "tonf-f" ? 1 / 9.80665 : t === "kn" || t === "kn-f" ? 1 : t === "kgf" || t === "kg" ? 1 / 980665e-8 : t === "kip" || t === "kips" ? 1 / 4.44822 : 1;
  })(), H = (t) => t * Y, Z = (t) => t * Y, B = (t) => t * Y, U = /* @__PURE__ */ new Date(), J = `${U.getMonth() + 1}/${U.getDate()}/${U.getFullYear()}  ${U.getHours()}:${String(U.getMinutes()).padStart(2, "0")}:${String(U.getSeconds()).padStart(2, "0")}`;
  s.push(`$ File   "Hekatan_export.e2k"  saved ${J} in ETABS 22.6.0`), s.push(""), s.push("$ PROGRAM INFORMATION"), s.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), s.push(""), s.push("$ CONTROLS"), s.push(`  UNITS  "${v}"  "${N}"  "C"  `), s.push('  TITLE1  "Hekatan Struct export"  '), y && s.push(`  TITLE2  "${y}"  `), s.push("  PREFERENCE  MERGETOL 0.001"), s.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), s.push("");
  const C = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set();
  E.forEach((t) => {
    C.add(S(t[0])), I.add(S(t[1]));
  });
  const p = [...C].sort((t, n) => t - n), o = [...I].sort((t, n) => t - n);
  s.push("$ GRIDS"), s.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), p.forEach((t, n) => {
    const r = n < 26 ? String.fromCharCode(65 + n) : String.fromCharCode(65 + n % 26).repeat(Math.floor(n / 26) + 1);
    s.push(`  GRID "G1"  LABEL "${r}"  DIR "X"  COORD ${t}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), o.forEach((t, n) => {
    s.push(`  GRID "G1"  LABEL "${n + 1}"  DIR "Y"  COORD ${t}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), s.push("");
  const e = /* @__PURE__ */ new Set();
  E.forEach((t) => e.add(S(t[2])));
  const l = [...e].sort((t, n) => t - n), x = [], f = /* @__PURE__ */ new Map();
  x.push("Base"), f.set(l[0], "Base");
  for (let t = 1; t < l.length; t++) {
    const n = `Level_${t}`;
    x.push(n), f.set(l[t], n);
  }
  s.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let t = l.length - 1; t >= 1; t--) s.push(`  STORY "${x[t]}"  HEIGHT ${S(l[t] - l[t - 1])} MASTERSTORY "Yes"  `);
  l.length > 0 && s.push(`  STORY "Base"  ELEV ${l[0]} `), s.push(""), $.some((t) => t.length === 4), s.push("$ DIAPHRAGM NAMES"), s.push('  DIAPHRAGM "D1"    TYPE RIGID'), s.push(""), s.push("$ MATERIAL PROPERTIES");
  const D = /* @__PURE__ */ new Set();
  (_a = m.elasticities) == null ? void 0 : _a.forEach((t) => D.add(t));
  const P = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
  let k = 0, X = 0;
  const q = 980665e-8, tt = /* @__PURE__ */ new Map();
  if (m.densities && m.densities.size > 0) {
    const t = /* @__PURE__ */ new Map();
    m.densities.forEach((n, r) => {
      var _a2;
      const a = (_a2 = m.elasticities) == null ? void 0 : _a2.get(r);
      a !== void 0 && (t.has(a) || t.set(a, []), t.get(a).push(n));
    }), t.forEach((n, r) => {
      const a = n.reduce((h, A) => h + A, 0) / n.length, O = a > 100 ? a * q : a * 9.80665;
      tt.set(r, O);
    });
  }
  for (const t of D) {
    const n = t >= 1e8, r = n ? `Steel_${++k}` : `Conc_${++X}`;
    P.set(t, r), _.set(t, n);
    const a = tt.get(t) ?? (n ? 76.97 : 24), O = Z(t), h = B(a), A = n ? 0.3 : 0.2, b = n ? 117e-7 : 1e-5;
    if (n) {
      s.push(`  MATERIAL  "${r}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${S(h)}`), s.push(`  MATERIAL  "${r}"    SYMTYPE "Isotropic"  E ${S(O)}  U ${A}  A ${b}`);
      const F = 345e3, z = 45e4;
      s.push(`  MATERIAL  "${r}"  FY ${S(Z(F))}  FU ${S(Z(z))}  FYE ${S(Z(F * 1.1))}  FUE ${S(Z(z * 1.1))}`);
    } else s.push(`  MATERIAL  "${r}"    TYPE "Concrete"    WEIGHTPERVOLUME ${S(h)}`), s.push(`  MATERIAL  "${r}"    SYMTYPE "Isotropic"  E ${S(O)}  U ${A}  A ${b}`), s.push(`  MATERIAL  "${r}"    FC ${S(Z(24e3))}`);
  }
  s.push(""), s.push("$ FRAME SECTIONS");
  const et = /* @__PURE__ */ new Set(), at = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), it = 0.05;
  $.forEach((t, n) => {
    var _a2, _b2, _c2, _d2, _e, _f;
    if (t.length !== 2) return;
    const r = (_a2 = m.sectionShapes) == null ? void 0 : _a2.get(n), a = ((_b2 = m.elasticities) == null ? void 0 : _b2.get(n)) ?? 0, O = P.get(a) || "Conc_1", h = _.get(a) ?? a >= 1e8, A = ((_c2 = m.areas) == null ? void 0 : _c2.get(n)) ?? 0, b = ((_d2 = m.momentsOfInertiaY) == null ? void 0 : _d2.get(n)) ?? 0;
    (_e = m.momentsOfInertiaZ) == null ? void 0 : _e.get(n), (_f = m.torsionalConstants) == null ? void 0 : _f.get(n);
    let F = (r == null ? void 0 : r.type) || "rect", z = (r == null ? void 0 : r.h) ?? 0, K = (r == null ? void 0 : r.b) ?? 0, st = (r == null ? void 0 : r.d) ?? 0;
    const dt = (r == null ? void 0 : r.tf) ?? 0, St = (r == null ? void 0 : r.tw) ?? 0;
    z <= 0 && K <= 0 && st <= 0 && A > 0 && (b > 0 ? (z = Math.sqrt(12 * b / A), K = A / z) : z = K = Math.sqrt(A), (!isFinite(z) || z < it) && (z = it), (!isFinite(K) || K < it) && (K = it), F = "rect"), z <= 0 && K <= 0 && st <= 0 && (z = 0.3, K = 0.3, F = "rect");
    const ut = `${F}_${S(z)}_${S(K)}_${S(st)}_${S(dt)}_${S(St)}_${O}`;
    (r == null ? void 0 : r.name) && !j.has(ut) && j.set(ut, r.name);
    let ot = j.get(ut);
    if (!ot) {
      const ht = h ? "S" : "C";
      F === "rect" ? ot = `${ht}_R${Math.round(K * 100)}x${Math.round(z * 100)}` : F === "circ" ? ot = `${ht}_C_D${Math.round(st * 100)}` : F === "I" ? ot = `${ht}_I${Math.round(z * 100)}x${Math.round(K * 100)}` : F === "HSS" ? ot = `${ht}_HSS${Math.round(K * 100)}x${Math.round(z * 100)}x${Math.round(St * 1e3)}` : ot = `${ht}_Sec${et.size + 1}`, j.set(ut, ot);
    }
    if (at.set(n, ot), et.has(ot)) return;
    et.add(ot);
    let nt;
    F === "I" ? nt = "Steel I/Wide Flange" : F === "HSS" ? nt = "Steel Tube" : F === "CFT" ? nt = "Filled Steel Tube" : F === "pipe" ? nt = "Steel Pipe" : F === "L" ? nt = "Steel Angle" : F === "C" ? nt = "Steel Channel" : F === "2C" ? nt = "Steel Double Channel" : F === "circ" ? nt = "Concrete Circle" : nt = "Concrete Rectangular";
    let pt = `  FRAMESECTION  "${ot}"  MATERIAL "${O}"  SHAPE "${nt}"`;
    z && (pt += `  D ${S(z)}`), K && (pt += `  B ${S(K)}`), st && !z && (pt += `  D ${S(st)}`), dt && (pt += `  TF ${S(dt)}`), St && (pt += `  TW ${S(St)}`), s.push(pt);
  }), s.push("");
  const V = /* @__PURE__ */ new Map();
  let lt = 0;
  E.forEach((t) => {
    const n = `${S(t[0])},${S(t[1])}`;
    V.has(n) || V.set(n, `${++lt}`);
  }), s.push("$ POINT COORDINATES");
  for (const [t, n] of V) {
    const [r, a] = t.split(",").map(Number);
    s.push(`  POINT "${n}"  ${r} ${a} `);
  }
  s.push("");
  const Q = (t) => {
    const n = E[t], r = `${S(n[0])},${S(n[1])}`;
    return { pt: V.get(r) || "1", story: f.get(S(n[2])) || "Base" };
  }, ft = (t) => {
    var _a2, _b2, _c2, _d2;
    const n = [], r = (_a2 = d.propertyModifiers) == null ? void 0 : _a2.get(t);
    r && r.some((A) => Math.abs(A - 1) > 1e-9) && n.push(`PROPMODIFIERS "${r.map((A) => S(A)).join(" ")}"`);
    const a = (_b2 = m.momentReleases) == null ? void 0 : _b2.get(t);
    if (a && a.some((A) => A)) {
      const A = [];
      a.length === 12 ? (a[0] && A.push("PI"), a[1] && A.push("V2I"), a[2] && A.push("V3I"), a[3] && A.push("TI"), a[4] && A.push("M2I"), a[5] && A.push("M3I"), a[6] && A.push("PJ"), a[7] && A.push("V2J"), a[8] && A.push("V3J"), a[9] && A.push("TJ"), a[10] && A.push("M2J"), a[11] && A.push("M3J")) : a.length === 6 && (a[0] && A.push("TI"), a[1] && A.push("M2I"), a[2] && A.push("M3I"), a[3] && A.push("TJ"), a[4] && A.push("M2J"), a[5] && A.push("M3J")), A.length > 0 && n.push(`RELEASE "${A.join(" ")}"`);
    }
    const O = (_c2 = m.insertionPoints) == null ? void 0 : _c2.get(t);
    O && (Math.abs(O[0]) > 1e-9 || Math.abs(O[1]) > 1e-9) && n.push(`LATEROFFSET ${S(O[0])} TRANSOFFSET ${S(O[1])}`);
    const h = (_d2 = m.rigidOffsets) == null ? void 0 : _d2.get(t);
    return h && (Math.abs(h[0]) > 1e-9 || Math.abs(h[1]) > 1e-9) && n.push(`LENGTHOFFI ${S(h[0])} LENGTHOFFJ ${S(h[1])} RIGIDZONE 0.5`), n.length > 0 ? ` ${n.join(" ")} ` : "";
  }, ct = [], Et = /* @__PURE__ */ new Set(), rt = /* @__PURE__ */ new Map();
  $.forEach((t, n) => {
    if (t.length !== 2) return;
    const r = mt(E, t);
    if (r === "BEAM") return;
    const a = E[t[0]][2] <= E[t[1]][2] ? t[0] : t[1], O = E[t[0]][2] <= E[t[1]][2] ? t[1] : t[0];
    if (Math.abs(E[a][0] - E[O][0]) > 1e-6 || Math.abs(E[a][1] - E[O][1]) > 1e-6) return;
    const h = Q(a), A = at.get(n) || `Sec_${n}`, b = `${h.pt}_${A}_${r}`;
    rt.has(b) || rt.set(b, []), rt.get(b).push({ i: n, bot: a, top: O, zBot: S(E[a][2]), zTop: S(E[O][2]), planPt: h.pt, secName: A, type: r });
  }), rt.forEach((t, n) => {
    t.sort((a, O) => a.zBot - O.zBot);
    let r = 0;
    for (let a = 1; a <= t.length; a++) if (a === t.length || Math.abs(t[a].zBot - t[a - 1].zTop) > 1e-6) {
      const h = t.slice(r, a);
      h.length >= 1 && (ct.push({ elemIndices: h.map((A) => A.i), planPt: h[0].planPt, bottomNodeIdx: h[0].bot, topNodeIdx: h[h.length - 1].top, secName: h[0].secName, type: h[0].type, nSegments: h.length }), h.forEach((A) => Et.add(A.i))), r = a;
    }
  }), s.push("$ LINE CONNECTIVITIES");
  const M = [];
  ct.forEach((t, n) => {
    const r = `C${n + 1}`, a = Q(t.topNodeIdx);
    Q(t.bottomNodeIdx);
    const O = S(E[t.topNodeIdx][2]), h = S(E[t.bottomNodeIdx][2]), A = l.indexOf(O), b = l.indexOf(h), F = Math.max(1, A - b), z = ft(t.elemIndices[0]);
    s.push(`  LINE  "${r}"  ${t.type}  "${a.pt}"  "${a.pt}"  ${F}`), M.push(`  LINEASSIGN  "${r}"  "${a.story}"  SECTION "${t.secName}" ${z} RIGIDZONE 0.5 MAXSTASPC 0.5 MINNUMSTA ${t.nSegments} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  }), $.forEach((t, n) => {
    if (t.length !== 2 || Et.has(n)) return;
    const r = mt(E, t), a = at.get(n) || `Sec_${n}`, O = ft(n);
    if (r === "BEAM") {
      const h = Q(t[0]), A = Q(t[1]);
      s.push(`  LINE  "E${n + 1}"  BEAM  "${h.pt}"  "${A.pt}"  0`), M.push(`  LINEASSIGN  "E${n + 1}"  "${h.story}"  SECTION "${a}" ${O} RIGIDZONE 0.5 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const h = E[t[0]][2] <= E[t[1]][2] ? t[0] : t[1], A = E[t[0]][2] <= E[t[1]][2] ? t[1] : t[0], b = Q(A), F = S(E[h][2]), z = S(E[A][2]), K = l.indexOf(F), st = l.indexOf(z), dt = Math.max(1, st >= 0 && K >= 0 ? st - K : 1);
      s.push(`  LINE  "E${n + 1}"  ${r}  "${b.pt}"  "${b.pt}"  ${dt}`), M.push(`  LINEASSIGN  "E${n + 1}"  "${b.story}"  SECTION "${a}" ${O} RIGIDZONE 0.5 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    }
  }), s.push("");
  const g = d.weightMode ?? "auto", c = /* @__PURE__ */ new Set();
  s.push("$ POINT ASSIGNS"), (_b = T.supports) == null ? void 0 : _b.forEach((t, n) => {
    const r = [];
    if (t[0] && r.push("UX"), t[1] && r.push("UY"), t[2] && r.push("UZ"), t[3] && r.push("RX"), t[4] && r.push("RY"), t[5] && r.push("RZ"), r.length > 0) {
      const a = Q(n), O = a.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      s.push(`  POINTASSIGN  "${a.pt}"  "${a.story}"  RESTRAINT "${r.join(" ")}" ${O} `), c.add(`${a.pt}@${a.story}`);
    }
  }), ct.forEach((t) => {
    const n = Q(t.topNodeIdx), r = `${n.pt}@${n.story}`;
    !c.has(r) && n.story !== "Base" && (s.push(`  POINTASSIGN  "${n.pt}"  "${n.story}"  DIAPH "D1"  `), c.add(r));
  }), g === "manual" && T.loads && T.loads.forEach((t, n) => {
    const r = Q(n), a = `${r.pt}@${r.story}`;
    c.has(a) || (s.push(`  POINTASSIGN  "${r.pt}"  "${r.story}"  DIAPH "DISCONNECTED"  `), c.add(a));
  }), s.push(""), s.push("$ LINE ASSIGNS"), M.forEach((t) => s.push(t)), s.push("");
  const R = [];
  $.forEach((t, n) => {
    if (t.length === 4) {
      const r = E[t[0]], a = E[t[1]], O = E[t[2]], h = [a[0] - r[0], a[1] - r[1], a[2] - r[2]], A = [O[0] - r[0], O[1] - r[1], O[2] - r[2]], b = h[1] * A[2] - h[2] * A[1], F = h[2] * A[0] - h[0] * A[2], z = h[0] * A[1] - h[1] * A[0], K = Math.sqrt(b * b + F * F + z * z), st = K > 1e-10 && Math.abs(z) / K < 0.5;
      R.push({ idx: n, el: t, isWall: st });
    }
  });
  const i = (() => {
    for (const [t, n] of _) if (!n) return P.get(t);
    return P.values().next().value || "Conc_1";
  })();
  if (R.some((t) => !t.isWall)) {
    s.push("$ SLAB PROPERTIES");
    const t = ((_c = m.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
    s.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${i}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${S(t)} `), s.push("");
  }
  if (R.some((t) => t.isWall)) {
    s.push("$ WALL PROPERTIES");
    const t = ((_d = m.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
    s.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${i}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${S(t)} `), s.push("");
  }
  if (R.length > 0) {
    s.push("$ AREA CONNECTIVITIES");
    const t = [];
    R.forEach((n, r) => {
      const { el: a, isWall: O } = n, h = O ? `W${r + 1}` : `F${r + 1}`, A = O ? "PANEL" : "FLOOR", b = a.map((F) => Q(F));
      if (O) {
        const F = E[a[0]][2] <= E[a[2]][2] ? 0 : 2, z = E[a[1]][2] <= E[a[3]][2] ? 1 : 3;
        s.push(`  AREA "${h}"  ${A}  4  "${b[F].pt}"  "${b[z].pt}"  "${b[z].pt}"  "${b[F].pt}"  1  1  0  0  `);
        const K = b[F === 0 ? 2 : 0].story;
        t.push(`  AREAASSIGN  "${h}"  "${K}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else s.push(`  AREA "${h}"  ${A}  4  "${b[0].pt}"  "${b[1].pt}"  "${b[2].pt}"  "${b[3].pt}"  0  0  0  0  `), t.push(`  AREAASSIGN  "${h}"  "${b[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
    }), s.push(""), s.push("$ AREA ASSIGNS"), t.forEach((n) => s.push(n)), s.push("");
  }
  const u = g === "manual" ? 0 : 1;
  s.push("$ LOAD PATTERNS"), s.push(`  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  ${u}`), s.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), s.push("");
  const L = [];
  return T.loads && T.loads.size > 0 && T.loads.forEach((t, n) => {
    const [r, a, O] = t, h = Q(n);
    Math.abs(r) > 1e-10 && L.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "FORCE"  LC "Dead"  FX ${S(H(r))}  FY 0  FZ 0`), Math.abs(a) > 1e-10 && L.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY ${S(H(a))}  FZ 0`), g === "manual" && Math.abs(O) > 1e-10 && L.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY 0  FZ ${S(H(O))}`);
  }), T.moments && T.moments.size > 0 && T.moments.forEach((t, n) => {
    const [r, a, O] = t, h = Q(n);
    Math.abs(r) > 1e-10 && L.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "MOMENT"  LC "Dead"  MX ${S(H(r))}  MY 0  MZ 0`), Math.abs(a) > 1e-10 && L.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY ${S(H(a))}  MZ 0`), Math.abs(O) > 1e-10 && L.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY 0  MZ ${S(H(O))}`);
  }), L.length > 0 && (s.push("$ POINT OBJECT LOADS"), L.forEach((t) => s.push(t)), s.push("")), s.push("$ ANALYSIS OPTIONS"), s.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), s.push('  PDELTA  METHOD "NONE"  '), s.push(""), s.push("$ MASS SOURCE"), s.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), s.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), s.push(""), s.push("$ LOAD CASES"), s.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), s.push('  LOADCASE "Dead"  LOADPAT  "Dead"  SF 1 '), s.push('  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), s.push('  LOADCASE "Live"  LOADPAT  "Live"  SF 1 '), s.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), s.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), s.push(""), s.push("$ LOAD COMBINATIONS"), s.push('  COMBO "1.4D"  TYPE "Linear Add"  '), s.push('  COMBO "1.4D"  LOADCASE  "Dead"  SF 1.4 '), s.push('  COMBO "1.2D+1.6L"  TYPE "Linear Add"  '), s.push('  COMBO "1.2D+1.6L"  LOADCASE  "Dead"  SF 1.2 '), s.push('  COMBO "1.2D+1.6L"  LOADCASE  "Live"  SF 1.6 '), s.push(""), s.push("  END"), s.push("$ END OF MODEL FILE"), s.join(`\r
`);
}
function mt(d, E) {
  const $ = d[E[0]], T = d[E[1]], m = Math.abs(T[2] - $[2]), y = Math.sqrt((T[0] - $[0]) ** 2 + (T[1] - $[1]) ** 2), w = m > y * 0.5;
  return w && y > 0.01 ? "BRACE" : w ? "COLUMN" : "BEAM";
}
export {
  Dt as a,
  xt as b,
  Lt as c,
  Ft as e,
  yt as p
};
