function Nt() {
  const C = document.createElement("div");
  C.id = "modal-results", C.style.cssText = `
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
  let I = false;
  const L = 0.9;
  function $(m, b) {
    var _a, _b, _c, _d;
    if (!m.frequencies || m.frequencies.length === 0) {
      C.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const z = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], k = [0, 0, 0, 0, 0, 0], T = m.frequencies.length;
    let o = -1, S = -1, G = -1, H = 0, W = 0;
    {
      const e = [0, 0, 0, 0, 0, 0];
      for (let p = 0; p < T; p++) {
        const y = ((_a = m.massParticipation) == null ? void 0 : _a[p]) || [0, 0, 0, 0, 0, 0];
        for (let f = 0; f < 6; f++) e[f] += y[f];
        o < 0 && e[0] >= L && (o = p + 1), S < 0 && e[1] >= L && (S = p + 1), G < 0 && e[0] >= L && e[1] >= L && (G = p + 1);
      }
      H = e[0], W = e[1];
    }
    let Y = -1, w = -1, J = -1;
    const O = 0.1;
    for (let e = 0; e < T; e++) {
      const p = ((_b = m.massParticipation) == null ? void 0 : _b[e]) || [0, 0, 0, 0, 0, 0];
      Y < 0 && p[0] > O && (Y = e + 1), w < 0 && p[1] > O && (w = e + 1), J < 0 && p[5] > O && (J = e + 1);
    }
    const u = G > 0 ? `<span style="color:#0f0">\u2713 ASCE 7-22 \xA712.9.1.1 \u2014 90 % alcanzado en X e Y al modo ${G} de ${T}</span>` : o > 0 && S < 0 ? `<span style="color:#fa0">\u26A0 X cumple en modo ${o}, Y todav\xEDa en ${(W * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : S > 0 && o < 0 ? `<span style="color:#fa0">\u26A0 Y cumple en modo ${S}, X todav\xEDa en ${(H * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : `<span style="color:#f44">\u2717 ASCE 7-22 NO cumplido en ${T} modos \xB7 \u03A3Ux=${(H * 100).toFixed(1)} % \xB7 \u03A3Uy=${(W * 100).toFixed(1)} % \u2014 aumentar nModes</span>`, l = (() => {
      const e = (p, y) => {
        var _a2;
        if (p < 0) return `<span style="color:#f44">${y}: no encontrado en ${T} modos</span>`;
        const f = ((_a2 = m.massParticipation) == null ? void 0 : _a2[p - 1]) || [0, 0, 0, 0, 0, 0], D = y === "Ux" ? 0 : y === "Uy" ? 1 : 5, F = m.frequencies[p - 1] > 0 ? 1 / m.frequencies[p - 1] : 0;
        return `<span style="color:#0f0">${y}: modo ${p}, T=${F.toFixed(3)} s, MPF=${(f[D] * 100).toFixed(1)} %</span>`;
      };
      return `<div style="margin:4px 0; padding:4px 6px; background:rgba(0,255,255,0.05); border-left:2px solid #0ff; font-size:11px;">
  \u{1F3AF} <b>Modos s\xEDsmicos principales</b> (ASCE 7-22 \xA712.9.1):<br>
  ${e(Y, "Ux")} \xB7 ${e(w, "Uy")} \xB7 ${e(J, "Rz")}
</div>`;
    })();
    let s = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${b.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
    if (s += '<div id="modal-body" style="padding:0 12px 10px 12px;">', s += `<div style="padding:6px 0; font-weight:bold; font-size:13px;">${u}</div>`, s += l, b.properties) for (const e of b.properties) s += `<span style="color:#888">${e}</span>
`;
    s += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const e of z) s += `<th style="padding:2px 5px">${e}</th>`;
    s += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let e = 0; e < 6; e++) k[e] = 0;
    if (m.frequencies.forEach((e, p) => {
      var _a2;
      const y = e > 0 ? 1 / e : 0, f = e * 2 * Math.PI, D = ((_a2 = m.massParticipation) == null ? void 0 : _a2[p]) || [0, 0, 0, 0, 0, 0];
      for (let X = 0; X < 6; X++) k[X] += D[X];
      let F = 0, _ = D[0];
      for (let X = 1; X < 6; X++) D[X] > _ && (_ = D[X], F = X);
      const B = _ < 0.05 ? "\u2014" : `${z[F]} (${(_ * 100).toFixed(0)} %)`, V = F === 0 || F === 1 ? "#0f0" : F === 5 ? "#0ff" : F === 2 ? "#fa0" : "#888", q = p + 1 === o, tt = p + 1 === S, et = p + 1 === G;
      s += `<tr style="border-bottom:1px solid #fff1; ${et ? "background:rgba(0,255,0,0.12);" : q || tt ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${p + 1}${et ? " \u2605" : ""}</td>
  <td style="padding:2px 6px; text-align:right">${e.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${y.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${f.toFixed(2)}</td>`;
      for (let X = 0; X < 6; X++) {
        const pt = (D[X] * 100).toFixed(1), Q = D[X] > 0.5 ? "#f00" : D[X] > 0.1 ? "#ff0" : "#0f0";
        s += `<td style="padding:2px 5px; text-align:right; color:${Q}">${pt}%</td>`;
      }
      const j = k[0] >= L ? "#0f0" : "#0ff", it = k[1] >= L ? "#0f0" : "#0ff";
      s += `<td style="padding:2px 5px; text-align:right; color:${j}">${(k[0] * 100).toFixed(1)}%${q ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${it}">${(k[1] * 100).toFixed(1)}%${tt ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(k[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${V}">${B}</td></tr>`;
    }), s += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, s += "</div>", C.innerHTML = s, I) {
      const e = C.querySelector("#modal-body"), p = C.querySelector("#modal-minimize");
      e && (e.style.display = "none"), p && (p.textContent = "\u25A2", p.title = "Restaurar");
    }
    (_c = C.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      I = !I;
      const e = C.querySelector("#modal-body"), p = C.querySelector("#modal-minimize");
      I ? (e.style.display = "none", p.textContent = "\u25A2", p.title = "Restaurar") : (e.style.display = "block", p.textContent = "\u25AC", p.title = "Minimizar");
    }), (_d = C.querySelector("#modal-copy")) == null ? void 0 : _d.addEventListener("click", () => {
      const e = [];
      e.push(`Modal Analysis \u2014 ${b.title}`), e.push(u.replace(/<[^>]+>/g, ""));
      const p = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${z.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      e.push(p), e.push("-".repeat(p.length));
      const y = [0, 0, 0, 0, 0, 0];
      m.frequencies.forEach((D, F) => {
        var _a2;
        const _ = D > 0 ? 1 / D : 0, B = D * 2 * Math.PI, V = ((_a2 = m.massParticipation) == null ? void 0 : _a2[F]) || [0, 0, 0, 0, 0, 0];
        for (let j = 0; j < 6; j++) y[j] += V[j];
        let q = 0, tt = V[0];
        for (let j = 1; j < 6; j++) V[j] > tt && (tt = V[j], q = j);
        const et = tt < 0.05 ? "\u2014" : `${z[q]} (${(tt * 100).toFixed(0)}%)`, at = V.map((j) => ((j * 100).toFixed(1) + "%").padStart(6)).join(" ");
        e.push(`${String(F + 1).padStart(4)}  ${D.toFixed(4).padStart(9)}  ${_.toFixed(4).padStart(9)}  ${B.toFixed(2).padStart(9)}  ${at}  ${(y[0] * 100).toFixed(1).padStart(5)}%  ${(y[1] * 100).toFixed(1).padStart(5)}%  ${(y[5] * 100).toFixed(1).padStart(5)}%  ${et}`);
      }), navigator.clipboard.writeText(e.join(`
`));
      const f = C.querySelector("#modal-copy");
      f.textContent = "\u2713", setTimeout(() => f.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: C, render: $ };
}
function Ot(C) {
  var _a;
  const I = C.split(/\r?\n/), L = { force: "TONF", length: "M" }, $ = [], m = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), k = [], T = [], o = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), G = [], H = [];
  let W = "", Y = "";
  const w = /* @__PURE__ */ new Map();
  for (const A of I) {
    const M = A.trim();
    if (!M || M.startsWith("$")) {
      M.startsWith("$ ") && (Y = M.substring(2).trim());
      continue;
    }
    if (Y && (w.has(Y) || w.set(Y, []), w.get(Y).push(A)), Y === "CONTROLS") {
      const c = M.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
      c && (L.force = c[1], L.length = c[2]);
      const N = M.match(/TITLE2\s+"([^"]+)"/);
      N && (W = N[1]);
    }
    if (Y === "STORIES - IN SEQUENCE FROM TOP") {
      const c = M.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
      if (c) {
        const N = c[1], i = c[2] ? parseFloat(c[2]) : 0, d = c[3] ? parseFloat(c[3]) : void 0;
        $.push({ name: N, height: i, elev: d ?? 0 });
      }
    }
    if (Y === "MATERIAL PROPERTIES") {
      const c = M.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
      if (c) {
        const N = c[1];
        m.has(N) || m.set(N, { type: c[2] || "", E: 0, G: 0, nu: 0 });
        const i = m.get(N);
        c[2] && (i.type = c[2]);
        const d = M.match(/\bE\s+([\d.eE+-]+)/);
        d && (i.E = parseFloat(d[1]));
        const R = M.match(/\bU\s+([\d.eE+-]+)/);
        R && (i.nu = parseFloat(R[1]), i.G = i.E / (2 * (1 + i.nu)));
        const t = M.match(/\bFY\s+([\d.eE+-]+)/);
        t && (i.fy = parseFloat(t[1]));
        const n = M.match(/\bFC\s+([\d.eE+-]+)/);
        n && (i.fc = parseFloat(n[1]));
        const r = M.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
        r && (i.density = parseFloat(r[1]));
      }
    }
    if (Y === "FRAME SECTIONS") {
      const c = M.match(/FRAMESECTION\s+"([^"]+)"/);
      if (c) {
        const N = c[1];
        b.has(N) || b.set(N, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
        const i = b.get(N), d = M.match(/MATERIAL\s+"([^"]+)"/);
        d && (i.material = d[1]);
        const R = M.match(/SHAPE\s+"([^"]+)"/);
        R && (i.shape = R[1]);
        const t = M.match(/\bD\s+([\d.eE+-]+)/);
        t && (i.D = parseFloat(t[1]));
        const n = M.match(/\bB\s+([\d.eE+-]+)/);
        n && (i.B = parseFloat(n[1]));
        const r = M.match(/\bTF\s+([\d.eE+-]+)/);
        r && (i.TF = parseFloat(r[1]));
        const a = M.match(/\bTW\s+([\d.eE+-]+)/);
        a && (i.TW = parseFloat(a[1]));
        const g = M.match(/\bR\s+([\d.eE+-]+)/);
        g && (i.R = parseFloat(g[1]));
        const E = M.match(/FILLMATERIAL\s+"([^"]+)"/);
        E && (i.fillMaterial = E[1]);
        const h = M.match(/I2MOD\s+([\d.eE+-]+)/);
        h && (i.modI2 = parseFloat(h[1]));
        const P = M.match(/I3MOD\s+([\d.eE+-]+)/);
        P && (i.modI3 = parseFloat(P[1]));
      }
    }
    if (Y === "POINT COORDINATES") {
      const c = M.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
      c && z.set(c[1], [parseFloat(c[2]), parseFloat(c[3])]);
    }
    if (Y === "LINE CONNECTIVITIES") {
      const c = M.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
      c && k.push({ name: c[1], type: c[2], pt1: c[3], pt2: c[4], nStories: parseInt(c[5]) });
    }
    if (Y === "POINT ASSIGNS") {
      const c = M.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
      c && o.set(`${c[1]}@${c[2]}`, c[3].split(/\s+/));
    }
    if (Y === "LINE ASSIGNS") {
      const c = M.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
      if (c) {
        const N = { story: c[2], section: c[3], rigidZone: 0, releases: [], angle: 0 }, i = M.match(/RIGIDZONE\s+([\d.eE+-]+)/);
        i && (N.rigidZone = parseFloat(i[1]));
        const d = M.match(/RELEASE\s+"([^"]+)"/);
        d && (N.releases = d[1].split(/\s+/));
        const R = M.match(/ANG\s+([-\d.eE+]+)/);
        R && (N.angle = parseFloat(R[1])), S.set(`${c[1]}@${c[2]}`, N);
      }
    }
    if (Y === "GRIDS") {
      const c = M.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
      c && H.push({ label: c[1], dir: c[2], coord: parseFloat(c[3]) });
    }
    if (Y === "FRAME OBJECT LOADS") {
      const c = M.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      c && G.push({ line: c[1], story: c[2], type: c[3], dir: c[4], lc: c[5], val: parseFloat(c[6]) });
    }
    if (Y === "AREA CONNECTIVITIES") {
      const c = M.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
      if (c) {
        const N = ((_a = c[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((i) => i.replace(/"/g, ""))) || [];
        T.push({ name: c[1], pts: N, nStories: 0 });
      }
    }
  }
  const J = /* @__PURE__ */ new Map();
  if ($.length > 0) {
    const A = $.length - 1;
    J.set($[A].name, $[A].elev);
    for (let M = A - 1; M >= 0; M--) {
      const N = J.get($[M + 1].name) + $[M].height;
      $[M].elev = N, J.set($[M].name, N);
    }
  }
  const O = [], u = [], l = /* @__PURE__ */ new Map(), s = (A, M) => `${A}@${M}`, e = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map();
  for (const A of k) p.set(A.name, A);
  for (const A of k) for (const [M, c] of S) {
    if (!M.startsWith(A.name + "@")) continue;
    const N = c.story, i = $.findIndex((d) => d.name === N);
    if (!(i < 0)) if (A.type === "COLUMN" || A.type === "BRACE") {
      e.add(s(A.pt2, N));
      const d = Math.max(A.nStories, 1), R = Math.min(i + d, $.length - 1);
      e.add(s(A.pt1, $[R].name));
    } else e.add(s(A.pt1, N)), e.add(s(A.pt2, N));
  }
  for (const [A] of o) e.add(A);
  for (const A of e) {
    const [M, c] = A.split("@"), N = z.get(M), i = J.get(c);
    N === void 0 || i === void 0 || (O.push([N[0], N[1], i]), u.push(A), l.set(A, O.length - 1));
  }
  const y = [], f = [], D = [], F = [], _ = /* @__PURE__ */ new Map();
  for (const A of k) for (const [M, c] of S) {
    if (!M.startsWith(A.name + "@")) continue;
    const N = c.story, i = $.findIndex((a) => a.name === N);
    if (i < 0) continue;
    let d, R;
    if (A.type === "COLUMN" || A.type === "BRACE") {
      const a = Math.max(A.nStories, 1), g = Math.min(i + a, $.length - 1);
      d = s(A.pt1, $[g].name), R = s(A.pt2, N);
    } else d = s(A.pt1, N), R = s(A.pt2, N);
    const t = l.get(d), n = l.get(R);
    if (t === void 0 || n === void 0 || t === n) continue;
    const r = y.length;
    if (y.push([t, n]), f.push(A.name), D.push(A.type), F.push(N), _.set(r, c.section), c.rigidZone > 0 && at.set(r, [c.rigidZone, c.rigidZone]), c.releases.length > 0) {
      const a = new Array(12).fill(false), g = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const E of c.releases) {
        const h = g[E];
        h !== void 0 && (a[h] = true);
      }
      j.set(r, a);
    }
  }
  const B = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map();
  for (const [A, M] of _) {
    const c = b.get(M);
    if (!c) continue;
    const N = m.get(c.material);
    N && (B.set(A, N.E), V.set(A, N.G));
    const i = c.D, d = c.B, R = c.TF, t = c.TW;
    let n = 0, r = 0, a = 0, g = 0, E = 0, h = 0, P = "rect";
    switch (c.shape) {
      case "Concrete Rectangular":
        n = i * d, r = d * i ** 3 / 12, a = i * d ** 3 / 12, g = d * i ** 3 * (1 / 3 - 0.21 * (i / d) * (1 - i ** 4 / (12 * d ** 4))), E = h = 5 / 6 * n, P = "rect";
        break;
      case "Concrete Circle":
        n = Math.PI * i ** 2 / 4, r = a = Math.PI * i ** 4 / 64, g = Math.PI * i ** 4 / 32, E = h = 0.9 * n, P = "circ";
        break;
      case "Steel I/Wide Flange":
        n = 2 * d * R + (i - 2 * R) * t, r = (d * i ** 3 - (d - t) * (i - 2 * R) ** 3) / 12, a = (2 * R * d ** 3 + (i - 2 * R) * t ** 3) / 12, g = (2 * d * R ** 3 + (i - 2 * R) * t ** 3) / 3, E = (i - 2 * R) * t, h = 2 * d * R * 5 / 6, P = "I";
        break;
      case "Steel Tube":
        n = i * d - (i - 2 * t) * (d - 2 * t), r = (d * i ** 3 - (d - 2 * t) * (i - 2 * t) ** 3) / 12, a = (i * d ** 3 - (i - 2 * t) * (d - 2 * t) ** 3) / 12, g = 2 * t * (i - t) * (d - t) * ((i - t) * (d - t)) / (i - t + (d - t)), E = 2 * i * t, h = 2 * d * t, P = "HSS";
        break;
      case "Filled Steel Tube":
        n = i * d, r = d * i ** 3 / 12, a = i * d ** 3 / 12, g = 2 * t * (i - t) * (d - t) * ((i - t) * (d - t)) / (i - t + (d - t)), E = 2 * i * t + 5 / 6 * (i - 2 * t) * (d - 2 * t), h = 2 * d * t + 5 / 6 * (i - 2 * t) * (d - 2 * t), P = "CFT";
        break;
      case "Steel Angle": {
        const x = R || t;
        n = x * (i + d - x), r = x * (i ** 3 + d * x ** 2 + x ** 2 * (i - x)) / 12, a = x * (d ** 3 + i * x ** 2 + x ** 2 * (d - x)) / 12, g = (i + d - x) * x ** 3 / 3, E = i * x, h = d * x, P = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        n = 2 * d * R + (i - 2 * R) * t, r = (t * i ** 3 + 2 * d * R * (i - R) ** 2) / 12, a = (2 * R * d ** 3 + (i - 2 * R) * t ** 3) / 12, g = (2 * d * R ** 3 + (i - 2 * R) * t ** 3) / 3, E = (i - 2 * R) * t, h = 2 * d * R * 5 / 6, P = c.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        n = 2 * (2 * d * R + (i - 2 * R) * t), r = 2 * (t * i ** 3 + 2 * d * R * (i - R) ** 2) / 12, a = 2 * (2 * R * d ** 3 + (i - 2 * R) * t ** 3) / 12, g = 2 * (2 * d * R ** 3 + (i - 2 * R) * t ** 3) / 3, E = 2 * (i - 2 * R) * t, h = 4 * d * R * 5 / 6, P = "2C";
        break;
      default:
        i > 0 && d > 0 && (n = i * d, r = d * i ** 3 / 12, a = i * d ** 3 / 12, g = Math.min(i, d) * Math.max(i, d) ** 3 / 3 * 0.3, E = h = 5 / 6 * n);
        break;
    }
    c.modI2 && (a *= c.modI2), c.modI3 && (r *= c.modI3), q.set(A, n), it.set(A, r), X.set(A, a), pt.set(A, g), E > 0 && tt.set(A, E), h > 0 && et.set(A, h), Q.set(A, { type: P, b: d || void 0, h: i || void 0, d: P === "circ" || P === "pipe" ? i : void 0, tw: t || void 0, tf: R || void 0, r: c.R, name: M });
  }
  const ft = /* @__PURE__ */ new Map();
  for (const [A, M] of o) {
    const c = l.get(A);
    if (c === void 0) continue;
    const N = [false, false, false, false, false, false];
    for (const i of M) i === "UX" && (N[0] = true), i === "UY" && (N[1] = true), i === "UZ" && (N[2] = true), i === "RX" && (N[3] = true), i === "RY" && (N[4] = true), i === "RZ" && (N[5] = true);
    ft.set(c, N);
  }
  const ct = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map();
  for (let A = 0; A < f.length; A++) Et.set(`${f[A]}@${F[A]}`, A);
  for (const A of G) {
    const M = Et.get(`${A.line}@${A.story}`);
    if (M === void 0) continue;
    const [c, N] = y[M], i = O[c], d = O[N], R = Math.sqrt((d[0] - i[0]) ** 2 + (d[1] - i[1]) ** 2 + (d[2] - i[2]) ** 2);
    if (R < 1e-10) continue;
    const t = A.val * R / 2;
    let n = 0, r = 0, a = 0;
    A.dir === "GRAV" || A.dir === "GRAVITY" ? a = -t : A.dir === "X" ? n = t : A.dir === "Y" ? r = t : A.dir === "Z" && (a = -t);
    for (const g of [c, N]) {
      const E = ct.get(g) || [0, 0, 0, 0, 0, 0];
      E[0] += n, E[1] += r, E[2] += a, ct.set(g, E);
    }
  }
  const rt = /* @__PURE__ */ new Map();
  for (const [A, M] of _) {
    const c = b.get(M);
    if (!c) continue;
    const N = m.get(c.material);
    (N == null ? void 0 : N.density) && rt.set(A, N.density);
  }
  return { units: L, stories: $.reverse(), materials: m, frameSections: b, nodes: O, nodeNames: u, nodeNameToIdx: l, elements: y, elementNames: f, elementTypes: D, elementStories: F, elementSections: _, nodeInputs: { supports: ft, loads: ct }, elementInputs: { elasticities: B, shearModuli: V, areas: q, momentsOfInertiaZ: it, momentsOfInertiaY: X, torsionalConstants: pt, shearAreasY: tt, shearAreasZ: et, rigidOffsets: at, momentReleases: j, densities: rt, sectionShapes: Q }, sectionShapes: Q, grids: H, info: { nNodes: O.length, nFrames: y.length, nAreas: T.length, title: W }, rawSections: w };
}
function U(C) {
  return C && parseFloat(C) || 0;
}
function Tt(C) {
  const I = /* @__PURE__ */ new Map(), L = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let $;
  for (; ($ = L.exec(C)) !== null; ) I.set($[1], $[2] !== void 0 ? $[2] : $[3]);
  return I;
}
function Rt(C) {
  const I = C.split(/\r?\n/);
  return I.some(($) => $.trim().startsWith("TABLE:")) ? mt(I) : Mt(I);
}
function mt(C) {
  var _a, _b, _c, _d, _e, _f;
  const I = [];
  let L = "";
  for (const J of C) {
    const O = J.trimEnd();
    O.endsWith("_") ? L += O.slice(0, -1) + " " : (L += O, I.push(L), L = "");
  }
  L && I.push(L);
  const $ = { force: "KN", length: "m" };
  let m = "UX,UY,UZ,RX,RY,RZ";
  const b = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), o = [], S = [], G = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), Y = [];
  let w = "";
  for (const J of I) {
    const O = J.trim();
    if (!O || O.startsWith(";") || O.startsWith("File ")) continue;
    if (O.startsWith("TABLE:")) {
      const l = O.match(/TABLE:\s+"(.+?)"/);
      w = l ? l[1].toUpperCase() : "";
      continue;
    }
    if (O === "END TABLE DATA") {
      w = "";
      continue;
    }
    const u = Tt(O);
    switch (w) {
      case "PROGRAM CONTROL": {
        const l = u.get("CurrUnits");
        if (l) {
          const s = l.split(",").map((e) => e.trim());
          s[0] && ($.force = s[0]), s[1] && ($.length = s[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const l = u.get("Material");
        l && !b.has(l) && b.set(l, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const l = u.get("Material");
        if (l) {
          const s = b.get(l) || { E: 0, nu: 0, G: 0 };
          s.E = U(u.get("E1")), s.G = U(u.get("G12")), s.nu = U(u.get("U12")), s.density = U(u.get("UnitMass")), b.set(l, s);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const l = u.get("Material");
        l && b.has(l) && (b.get(l).fy = U(u.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const l = u.get("SectionName");
        l && z.set(l, { material: u.get("Material") || "", shape: u.get("Shape") || "Rectangular", D: U(u.get("t3")), B: U(u.get("t2")), TF: U(u.get("tf")), TW: U(u.get("tw")), A: U(u.get("Area")), Iz: U(u.get("I33")), Iy: U(u.get("I22")), J: U(u.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const l = u.get("Section");
        l && k.set(l, { material: u.get("Material") || "", type: u.get("Type") || "Shell", thickness: U(u.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const l = u.get("Joint");
        if (l) {
          const s = U(u.get("XorR")), e = U(u.get("Y")), p = U(u.get("Z"));
          T.set(l, [s, e, p]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const l = u.get("Frame"), s = u.get("JointI"), e = u.get("JointJ");
        l && s && e && o.push({ name: l, j1: s, j2: e });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const l = u.get("Area");
        if (l) {
          const s = parseInt(u.get("NumJoints") || "4"), e = [];
          for (let p = 1; p <= s; p++) {
            const y = u.get(`Joint${p}`);
            y && e.push(y);
          }
          e.length >= 3 && S.push({ name: l, joints: e });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const l = u.get("Joint");
        if (l) {
          const s = [((_a = u.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = u.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = u.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = u.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = u.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = u.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          G.set(l, s);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const l = u.get("Frame"), s = u.get("AnalSect");
        l && s && H.set(l, s);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const l = u.get("Area"), s = u.get("Section");
        l && s && W.set(l, s);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const l = u.get("Joint");
        l && Y.push({ joint: l, fx: U(u.get("F1")), fy: U(u.get("F2")), fz: U(u.get("F3")), mx: U(u.get("M1")), my: U(u.get("M2")), mz: U(u.get("M3")) });
        break;
      }
    }
  }
  return It($, m, b, z, k, T, o, S, G, H, W, Y);
}
function Mt(C) {
  const I = { force: "KN", length: "m" };
  let L = "UX,UY,UZ,RX,RY,RZ";
  const $ = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), k = [], T = [], o = /* @__PURE__ */ new Map(), S = [];
  let G = "", H = "";
  for (const w of C) {
    const J = w.trim();
    if (!J || J.startsWith(";")) continue;
    if (!w.startsWith(" ") && !w.startsWith("	")) {
      const l = J.toUpperCase();
      if (l === "END") break;
      l.startsWith("SHELL SECTION") ? G = "SHELL SECTION" : l.startsWith("FRAME SECTION") ? G = "FRAME SECTION" : G = l.split(/\s+/)[0];
      continue;
    }
    const O = Tt(J), u = J.split(/\s+/);
    switch (G) {
      case "SYSTEM": {
        const l = O.get("DOF");
        l && (L = l);
        const s = O.get("LENGTH");
        s && (I.length = s);
        const e = O.get("FORCE");
        e && (I.force = e);
        break;
      }
      case "JOINT": {
        const l = u[0];
        z.set(l, [U(O.get("X")), U(O.get("Y")), U(O.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const l = O.get("ADD"), s = O.get("DOF");
        if (l && s) {
          const e = s.split(","), p = [false, false, false, false, false, false];
          for (const y of e) {
            const f = y.toUpperCase();
            (f === "UX" || f === "U1") && (p[0] = true), (f === "UY" || f === "U2") && (p[1] = true), (f === "UZ" || f === "U3") && (p[2] = true), (f === "RX" || f === "R1") && (p[3] = true), (f === "RY" || f === "R2") && (p[4] = true), (f === "RZ" || f === "R3") && (p[5] = true);
          }
          o.set(l, p);
        }
        break;
      }
      case "MATERIAL": {
        const l = O.get("NAME");
        if (l) H = l, $.set(l, { E: 0, nu: 0, G: 0 });
        else if (H) {
          const s = $.get(H), e = O.get("E");
          e && (s.E = U(e));
          const p = O.get("U");
          p && (s.nu = U(p)), s.G = s.E / (2 * (1 + s.nu));
          const y = O.get("M");
          y && (s.density = U(y));
        }
        break;
      }
      case "SHELL": {
        const l = u[0], s = O.get("J");
        O.get("SEC"), s && T.push({ name: l, joints: s.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const l = O.get("NAME");
        l && b.set(l, { material: O.get("MAT") || "", type: O.get("TYPE") || "Shell", thickness: U(O.get("TH")) });
        break;
      }
      case "FRAME": {
        const l = u[0], s = O.get("J");
        if (s) {
          const e = s.split(",");
          e.length >= 2 && k.push({ name: l, j1: e[0], j2: e[1] });
        }
        break;
      }
      case "LOAD": {
        const l = O.get("ADD");
        l && S.push({ joint: l, fx: U(O.get("UX")), fy: U(O.get("UY")), fz: U(O.get("UZ")), mx: U(O.get("MX")), my: U(O.get("MY")), mz: U(O.get("MZ")) });
        break;
      }
    }
  }
  return It(I, L, $, m, b, z, k, T, o, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), S);
}
function It(C, I, L, $, m, b, z, k, T, o, S, G) {
  var _a;
  const H = [], W = /* @__PURE__ */ new Map(), Y = [];
  for (const [f, D] of b) W.set(f, Y.length), H.push(f), Y.push(D);
  const w = [], J = [], O = /* @__PURE__ */ new Map();
  for (const f of z) {
    const D = W.get(f.j1), F = W.get(f.j2);
    if (D !== void 0 && F !== void 0) {
      const _ = w.length;
      w.push([D, F]), J.push(f.name);
      const B = o.get(f.name);
      B && O.set(_, B);
    }
  }
  const u = w.length;
  for (const f of k) {
    const D = f.joints.map((F) => W.get(F)).filter((F) => F !== void 0);
    if (D.length >= 3) {
      const F = w.length;
      w.push(D), J.push(f.name);
      const _ = S.get(f.name);
      _ && O.set(F, _);
    }
  }
  const l = w.length - u, s = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, e = /* @__PURE__ */ new Map(), p = L.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let f = 0; f < w.length; f++) {
    const D = O.get(f), F = D ? $.get(D) : null, _ = D ? m.get(D) : null;
    if (F || w[f].length === 2) {
      const B = F || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, V = L.get(B.material) || p, q = V.E || p.E, tt = V.nu || 0.3, et = V.G || q / (2 * (1 + tt));
      s.elasticities.set(f, q), s.shearModuli.set(f, et), s.areas.set(f, B.A || B.D * B.B), s.momentsOfInertiaZ.set(f, B.Iz || B.B * B.D ** 3 / 12), s.momentsOfInertiaY.set(f, B.Iy || B.D * B.B ** 3 / 12), s.torsionalConstants.set(f, B.J || 0), s.densities.set(f, V.density || 0), ((_a = B.shape) == null ? void 0 : _a.includes("Wide Flange")) || B.shape === "I" ? e.set(f, { type: "I", b: B.B, h: B.D, name: D || "I-section" }) : e.set(f, { type: "rect", b: B.B, h: B.D });
    } else if (_) {
      const B = L.get(_.material) || p, V = B.E || p.E, q = B.nu || 0.2, tt = B.G || V / (2 * (1 + q));
      s.elasticities.set(f, V), s.shearModuli.set(f, tt), s.thicknesses.set(f, _.thickness), s.poissonsRatios.set(f, q), s.densities.set(f, B.density || 0);
    }
  }
  const y = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [f, D] of T) {
    const F = W.get(f);
    F !== void 0 && y.supports.set(F, D);
  }
  for (const f of G) {
    const D = W.get(f.joint);
    if (D !== void 0) {
      const F = y.forces.get(D) || [0, 0, 0, 0, 0, 0];
      F[0] += f.fx, F[1] += f.fy, F[2] += f.fz, F[3] += f.mx, F[4] += f.my, F[5] += f.mz, y.forces.set(D, F);
    }
  }
  return { units: C, dof: I, materials: L, frameSections: $, shellSections: m, nodes: Y, nodeNames: H, nodeNameToIdx: W, elements: w, elementNames: J, elementSections: O, nodeInputs: y, elementInputs: s, sectionShapes: e, info: { nNodes: Y.length, nFrames: u, nShells: l, title: `SAP2000 (${u} frames, ${l} shells)` } };
}
function Lt(C) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: I, elements: L, nodeInputs: $, elementInputs: m } = C, b = C.units || { force: "KN", length: "m" }, z = C.title || "Awatif Model", k = [], T = (s) => k.push(s), o = () => k.push(" ");
  T(`File ${z}.$2k was saved on m/d/yy at h:mm:ss`), o(), T('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), T("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), o();
  const S = [], G = [];
  if (L.forEach((s, e) => {
    s.length === 2 ? S.push(e) : G.push(e);
  }), S.length > 0) {
    T('TABLE:  "CONNECTIVITY - FRAME"');
    for (const s of S) {
      const e = L[s];
      T(`   Frame=${s + 1}   JointI=${e[0] + 1}   JointJ=${e[1] + 1}   IsCurved=No`);
    }
    o();
  }
  if (G.length > 0) {
    T('TABLE:  "CONNECTIVITY - AREA"');
    for (const s of G) {
      const e = L[s], p = e.map((y, f) => `Joint${f + 1}=${y + 1}`).join("   ");
      T(`   Area=${s + 1}   NumJoints=${e.length}   ${p}`);
    }
    o();
  }
  T('TABLE:  "COORDINATE SYSTEMS"'), T("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), o(), T('TABLE:  "DATABASE FORMAT TYPES"'), T("   UnitsCurr=Yes   OverrideE=No"), o();
  const H = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map();
  for (const s of S) {
    const e = ((_a = m.areas) == null ? void 0 : _a.get(s)) || 0, p = ((_b = m.momentsOfInertiaZ) == null ? void 0 : _b.get(s)) || 0, y = ((_c = m.momentsOfInertiaY) == null ? void 0 : _c.get(s)) || 0, f = ((_d = m.torsionalConstants) == null ? void 0 : _d.get(s)) || 0, D = ((_e = m.elasticities) == null ? void 0 : _e.get(s)) || 0, F = `MAT_${Math.round(D)}`, _ = `A${e.toPrecision(6)}_Iz${p.toPrecision(6)}`;
    if (!H.has(_)) {
      let V = 0.3, q = 0.3;
      e > 0 && p > 0 && (V = Math.sqrt(12 * p / e), q = e / V), H.set(_, { A: e, Iz: p, Iy: y, J: f, b: q, h: V, matKey: F });
    }
    const B = [...H.keys()].indexOf(_) + 1;
    W.set(s, `SEC${B}`);
  }
  if (S.length > 0) {
    T('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const s of S) {
      const e = W.get(s) || "SEC1";
      T(`   Frame=${s + 1}   AutoSelect=N.A.   AnalSect=${e}   MatProp=Default`);
    }
    o();
  }
  if (H.size > 0) {
    T('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let s = 0;
    for (const [, e] of H) {
      s++;
      const p = e.A * 5 / 6;
      T(`   SectionName=SEC${s}   Material=${e.matKey}   Shape=Rectangular   t3=${Z(e.h)}   t2=${Z(e.b)}   Area=${Z(e.A)}   TorsConst=${Z(e.J)}   I33=${Z(e.Iz)}   I22=${Z(e.Iy)}   I23=0   AS2=${Z(p)}   AS3=${Z(p)} _`), T("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    o();
  }
  const Y = !!C.layeredSection && G.length > 0, w = C.layeredSection, J = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map();
  if (!Y) for (const s of G) {
    const e = ((_f = m.thicknesses) == null ? void 0 : _f.get(s)) || 0.1, p = ((_g = m.elasticities) == null ? void 0 : _g.get(s)) || 0, y = `MAT_${Math.round(p)}`, f = `t${e.toPrecision(6)}`;
    J.has(f) || J.set(f, { t: e, matKey: y });
    const D = [...J.keys()].indexOf(f) + 1;
    O.set(s, `SSEC${D}`);
  }
  if (G.length > 0) {
    T('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const s of G) {
      const e = Y ? w.name : O.get(s) || "SSEC1";
      T(`   Area=${s + 1}   Section=${e}   MatProp=Default`);
    }
    if (o(), T('TABLE:  "AREA SECTION PROPERTIES"'), Y) {
      const s = w, e = ((_h = s.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      T(`   Section=${s.name}   Material=${e}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${Z(s.totalThickness)}   BendThick=${Z(s.totalThickness)}   Color=Magenta`);
    } else {
      let s = 0;
      for (const [, e] of J) s++, T(`   Section=SSEC${s}   Material=${e.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${Z(e.t)}   BendThick=${Z(e.t)}   Color=Cyan`);
    }
    if (o(), Y) {
      T('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const s = w;
      for (const e of s.layers) {
        const p = e.angle ?? 0, y = e.numIntPts ?? 3;
        T(`   Section=${s.name}   LayerName=${e.name}   Distance=${Z(e.distance)}   Thickness=${Z(e.thickness)}   Type=Shell   NumIntPts=${y}   Material=${e.material}   MatAngle=${Z(p * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      o();
    }
  }
  T('TABLE:  "JOINT COORDINATES"');
  for (let s = 0; s < I.length; s++) {
    const e = I[s];
    T(`   Joint=${s + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${Z(e[0])}   Y=${Z(e[1])}   Z=${Z(e[2])}   SpecialJt=No`);
  }
  if (o(), $.supports && $.supports.size > 0) {
    T('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [s, e] of $.supports) {
      if (!e.some((y) => y)) continue;
      const p = (y) => y ? "Yes" : "No";
      T(`   Joint=${s + 1}   U1=${p(e[0])}   U2=${p(e[1])}   U3=${p(e[2])}   R1=${p(e[3])}   R2=${p(e[4])}   R3=${p(e[5])}`);
    }
    o();
  }
  const u = C.selfWtMult ?? 1;
  if (T('TABLE:  "LOAD PATTERN DEFINITIONS"'), T(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${u}`), o(), T('TABLE:  "LOAD CASE DEFINITIONS"'), T('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), o(), T('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), T('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), o(), $.forces && $.forces.size > 0) {
    T('TABLE:  "JOINT LOADS - FORCE"');
    for (const [s, e] of $.forces) e.some((p) => Math.abs(p) > 1e-12) && T(`   Joint=${s + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${Z(e[0])}   F2=${Z(e[1])}   F3=${Z(e[2])}   M1=${Z(e[3])}   M2=${Z(e[4])}   M3=${Z(e[5])}`);
    o();
  }
  const l = /* @__PURE__ */ new Map();
  for (let s = 0; s < L.length; s++) {
    const e = ((_i = m.elasticities) == null ? void 0 : _i.get(s)) || 0, p = ((_j = m.shearModuli) == null ? void 0 : _j.get(s)) || 0, y = e > 0 && p > 0 ? Math.max(0, Math.min(0.5, e / (2 * p) - 1)) : 0.2, f = ((_k = m.densities) == null ? void 0 : _k.get(s)) || 0, D = `MAT_${Math.round(e)}`;
    l.has(D) || l.set(D, { E: e, nu: y, G: p, rho: f });
  }
  T('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [s] of l) T(`   Material=${s}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  o(), T('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [s, e] of l) T(`   Material=${s}   UnitWeight=${Z(e.rho * 9.81)}   UnitMass=${Z(e.rho)}   E1=${Z(e.E)}   G12=${Z(e.G)}   U12=${Z(e.nu)}   A1=9.9E-06`);
  o(), T('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [s] of l) T(`   Material=${s}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return o(), T('TABLE:  "PROGRAM CONTROL"'), T(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${b.force}, ${b.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), o(), T("END TABLE DATA"), T(""), k.join(`\r
`);
}
function Z(C) {
  return C === 0 || Math.abs(C) < 1e-15 ? "0" : Math.abs(C) >= 1e6 || Math.abs(C) < 1e-3 && Math.abs(C) > 0 ? C.toExponential(8) : parseFloat(C.toPrecision(10)).toString();
}
function Ct(C) {
  const { nodes: I, elements: L, nodeInputs: $, elementInputs: m, title: b, e2kModel: z } = C, k = z == null ? void 0 : z.rawSections;
  return k && k.size > 0 ? gt(k) : $t(C);
}
function gt(C, I) {
  const L = [], $ = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  L.push("$ File exported from Awatif FEM Studio (round-trip)"), L.push("");
  for (const m of $) {
    const b = C.get(m);
    if (!(!b || b.length === 0)) {
      L.push(`$ ${m}`);
      for (const z of b) L.push(z);
      L.push("");
    }
  }
  for (const [m, b] of C) if (!$.includes(m) && b.length !== 0) {
    L.push(`$ ${m}`);
    for (const z of b) L.push(z);
    L.push("");
  }
  return L.push("  END"), L.push("$ END OF MODEL FILE"), L.join(`\r
`);
}
function $t(C) {
  var _a, _b, _c, _d;
  const { nodes: I, elements: L, nodeInputs: $, elementInputs: m, title: b, units: z } = C, k = (z == null ? void 0 : z.force) || "Tonf", T = (z == null ? void 0 : z.length) || "m", o = [], S = (t) => Math.round(t * 1e4) / 1e4, G = (() => {
    const t = (k || "Tonf").toLowerCase();
    return t === "tonf" || t === "tonf-f" ? 1 / 9.80665 : t === "kn" || t === "kn-f" ? 1 : t === "kgf" || t === "kg" ? 1 / 980665e-8 : t === "kip" || t === "kips" ? 1 / 4.44822 : 1;
  })(), H = (t) => t * G, W = (t) => t * G, Y = (t) => t * G, w = /* @__PURE__ */ new Date(), J = `${w.getMonth() + 1}/${w.getDate()}/${w.getFullYear()}  ${w.getHours()}:${String(w.getMinutes()).padStart(2, "0")}:${String(w.getSeconds()).padStart(2, "0")}`;
  o.push(`$ File   "Hekatan_export.e2k"  saved ${J} in ETABS 22.6.0`), o.push(""), o.push("$ PROGRAM INFORMATION"), o.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), o.push(""), o.push("$ CONTROLS"), o.push(`  UNITS  "${k}"  "${T}"  "C"  `), o.push('  TITLE1  "Hekatan Struct export"  '), b && o.push(`  TITLE2  "${b}"  `), o.push("  PREFERENCE  MERGETOL 0.001"), o.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), o.push("");
  const O = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  I.forEach((t) => {
    O.add(S(t[0])), u.add(S(t[1]));
  });
  const l = [...O].sort((t, n) => t - n), s = [...u].sort((t, n) => t - n);
  o.push("$ GRIDS"), o.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), l.forEach((t, n) => {
    const r = n < 26 ? String.fromCharCode(65 + n) : String.fromCharCode(65 + n % 26).repeat(Math.floor(n / 26) + 1);
    o.push(`  GRID "G1"  LABEL "${r}"  DIR "X"  COORD ${t}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), s.forEach((t, n) => {
    o.push(`  GRID "G1"  LABEL "${n + 1}"  DIR "Y"  COORD ${t}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), o.push("");
  const e = /* @__PURE__ */ new Set();
  I.forEach((t) => e.add(S(t[2])));
  const p = [...e].sort((t, n) => t - n), y = [], f = /* @__PURE__ */ new Map();
  y.push("Base"), f.set(p[0], "Base");
  for (let t = 1; t < p.length; t++) {
    const n = `Level_${t}`;
    y.push(n), f.set(p[t], n);
  }
  o.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let t = p.length - 1; t >= 1; t--) o.push(`  STORY "${y[t]}"  HEIGHT ${S(p[t] - p[t - 1])} MASTERSTORY "Yes"  `);
  p.length > 0 && o.push(`  STORY "Base"  ELEV ${p[0]} `), o.push(""), L.some((t) => t.length === 4), o.push("$ DIAPHRAGM NAMES"), o.push('  DIAPHRAGM "D1"    TYPE RIGID'), o.push(""), o.push("$ MATERIAL PROPERTIES");
  const D = /* @__PURE__ */ new Set();
  (_a = m.elasticities) == null ? void 0 : _a.forEach((t) => D.add(t));
  const F = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
  let B = 0, V = 0;
  const q = 980665e-8, tt = /* @__PURE__ */ new Map();
  if (m.densities && m.densities.size > 0) {
    const t = /* @__PURE__ */ new Map();
    m.densities.forEach((n, r) => {
      var _a2;
      const a = (_a2 = m.elasticities) == null ? void 0 : _a2.get(r);
      a !== void 0 && (t.has(a) || t.set(a, []), t.get(a).push(n));
    }), t.forEach((n, r) => {
      const a = n.reduce((E, h) => E + h, 0) / n.length, g = a > 100 ? a * q : a * 9.80665;
      tt.set(r, g);
    });
  }
  for (const t of D) {
    const n = t >= 1e8, r = n ? `Steel_${++B}` : `Conc_${++V}`;
    F.set(t, r), _.set(t, n);
    const a = tt.get(t) ?? (n ? 76.97 : 24), g = W(t), E = Y(a), h = n ? 0.3 : 0.2, P = n ? 117e-7 : 1e-5;
    if (n) {
      o.push(`  MATERIAL  "${r}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${S(E)}`), o.push(`  MATERIAL  "${r}"    SYMTYPE "Isotropic"  E ${S(g)}  U ${h}  A ${P}`);
      const x = 345e3, v = 45e4;
      o.push(`  MATERIAL  "${r}"  FY ${S(W(x))}  FU ${S(W(v))}  FYE ${S(W(x * 1.1))}  FUE ${S(W(v * 1.1))}`);
    } else o.push(`  MATERIAL  "${r}"    TYPE "Concrete"    WEIGHTPERVOLUME ${S(E)}`), o.push(`  MATERIAL  "${r}"    SYMTYPE "Isotropic"  E ${S(g)}  U ${h}  A ${P}`), o.push(`  MATERIAL  "${r}"    FC ${S(W(24e3))}`);
  }
  o.push(""), o.push("$ FRAME SECTIONS");
  const et = /* @__PURE__ */ new Set(), at = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), it = 0.05;
  L.forEach((t, n) => {
    var _a2, _b2, _c2, _d2, _e, _f;
    if (t.length !== 2) return;
    const r = (_a2 = m.sectionShapes) == null ? void 0 : _a2.get(n), a = ((_b2 = m.elasticities) == null ? void 0 : _b2.get(n)) ?? 0, g = F.get(a) || "Conc_1", E = _.get(a) ?? a >= 1e8, h = ((_c2 = m.areas) == null ? void 0 : _c2.get(n)) ?? 0, P = ((_d2 = m.momentsOfInertiaY) == null ? void 0 : _d2.get(n)) ?? 0;
    (_e = m.momentsOfInertiaZ) == null ? void 0 : _e.get(n), (_f = m.torsionalConstants) == null ? void 0 : _f.get(n);
    let x = (r == null ? void 0 : r.type) || "rect", v = (r == null ? void 0 : r.h) ?? 0, K = (r == null ? void 0 : r.b) ?? 0, st = (r == null ? void 0 : r.d) ?? 0;
    const dt = (r == null ? void 0 : r.tf) ?? 0, St = (r == null ? void 0 : r.tw) ?? 0;
    v <= 0 && K <= 0 && st <= 0 && h > 0 && (P > 0 ? (v = Math.sqrt(12 * P / h), K = h / v) : v = K = Math.sqrt(h), (!isFinite(v) || v < it) && (v = it), (!isFinite(K) || K < it) && (K = it), x = "rect"), v <= 0 && K <= 0 && st <= 0 && (v = 0.3, K = 0.3, x = "rect");
    const ut = `${x}_${S(v)}_${S(K)}_${S(st)}_${S(dt)}_${S(St)}_${g}`;
    (r == null ? void 0 : r.name) && !j.has(ut) && j.set(ut, r.name);
    let ot = j.get(ut);
    if (!ot) {
      const ht = E ? "S" : "C";
      x === "rect" ? ot = `${ht}_R${Math.round(K * 100)}x${Math.round(v * 100)}` : x === "circ" ? ot = `${ht}_C_D${Math.round(st * 100)}` : x === "I" ? ot = `${ht}_I${Math.round(v * 100)}x${Math.round(K * 100)}` : x === "HSS" ? ot = `${ht}_HSS${Math.round(K * 100)}x${Math.round(v * 100)}x${Math.round(St * 1e3)}` : ot = `${ht}_Sec${et.size + 1}`, j.set(ut, ot);
    }
    if (at.set(n, ot), et.has(ot)) return;
    et.add(ot);
    let nt;
    x === "I" ? nt = "Steel I/Wide Flange" : x === "HSS" ? nt = "Steel Tube" : x === "CFT" ? nt = "Filled Steel Tube" : x === "pipe" ? nt = "Steel Pipe" : x === "L" ? nt = "Steel Angle" : x === "C" ? nt = "Steel Channel" : x === "2C" ? nt = "Steel Double Channel" : x === "circ" ? nt = "Concrete Circle" : nt = "Concrete Rectangular";
    let lt = `  FRAMESECTION  "${ot}"  MATERIAL "${g}"  SHAPE "${nt}"`;
    v && (lt += `  D ${S(v)}`), K && (lt += `  B ${S(K)}`), st && !v && (lt += `  D ${S(st)}`), dt && (lt += `  TF ${S(dt)}`), St && (lt += `  TW ${S(St)}`), o.push(lt);
  }), o.push("");
  const X = /* @__PURE__ */ new Map();
  let pt = 0;
  I.forEach((t) => {
    const n = `${S(t[0])},${S(t[1])}`;
    X.has(n) || X.set(n, `${++pt}`);
  }), o.push("$ POINT COORDINATES");
  for (const [t, n] of X) {
    const [r, a] = t.split(",").map(Number);
    o.push(`  POINT "${n}"  ${r} ${a} `);
  }
  o.push("");
  const Q = (t) => {
    const n = I[t], r = `${S(n[0])},${S(n[1])}`;
    return { pt: X.get(r) || "1", story: f.get(S(n[2])) || "Base" };
  }, ft = (t) => {
    var _a2, _b2, _c2, _d2;
    const n = [], r = (_a2 = C.propertyModifiers) == null ? void 0 : _a2.get(t);
    r && r.some((h) => Math.abs(h - 1) > 1e-9) && n.push(`PROPMODIFIERS "${r.map((h) => S(h)).join(" ")}"`);
    const a = (_b2 = m.momentReleases) == null ? void 0 : _b2.get(t);
    if (a && a.some((h) => h)) {
      const h = [];
      a.length === 12 ? (a[0] && h.push("PI"), a[1] && h.push("V2I"), a[2] && h.push("V3I"), a[3] && h.push("TI"), a[4] && h.push("M2I"), a[5] && h.push("M3I"), a[6] && h.push("PJ"), a[7] && h.push("V2J"), a[8] && h.push("V3J"), a[9] && h.push("TJ"), a[10] && h.push("M2J"), a[11] && h.push("M3J")) : a.length === 6 && (a[0] && h.push("TI"), a[1] && h.push("M2I"), a[2] && h.push("M3I"), a[3] && h.push("TJ"), a[4] && h.push("M2J"), a[5] && h.push("M3J")), h.length > 0 && n.push(`RELEASE "${h.join(" ")}"`);
    }
    const g = (_c2 = m.insertionPoints) == null ? void 0 : _c2.get(t);
    g && (Math.abs(g[0]) > 1e-9 || Math.abs(g[1]) > 1e-9) && n.push(`LATEROFFSET ${S(g[0])} TRANSOFFSET ${S(g[1])}`);
    const E = (_d2 = m.rigidOffsets) == null ? void 0 : _d2.get(t);
    return E && (Math.abs(E[0]) > 1e-9 || Math.abs(E[1]) > 1e-9) && n.push(`LENGTHOFFI ${S(E[0])} LENGTHOFFJ ${S(E[1])} RIGIDZONE 0.5`), n.length > 0 ? ` ${n.join(" ")} ` : "";
  }, ct = [], Et = /* @__PURE__ */ new Set(), rt = /* @__PURE__ */ new Map();
  L.forEach((t, n) => {
    if (t.length !== 2) return;
    const r = At(I, t);
    if (r === "BEAM") return;
    const a = I[t[0]][2] <= I[t[1]][2] ? t[0] : t[1], g = I[t[0]][2] <= I[t[1]][2] ? t[1] : t[0];
    if (Math.abs(I[a][0] - I[g][0]) > 1e-6 || Math.abs(I[a][1] - I[g][1]) > 1e-6) return;
    const E = Q(a), h = at.get(n) || `Sec_${n}`, P = `${E.pt}_${h}_${r}`;
    rt.has(P) || rt.set(P, []), rt.get(P).push({ i: n, bot: a, top: g, zBot: S(I[a][2]), zTop: S(I[g][2]), planPt: E.pt, secName: h, type: r });
  }), rt.forEach((t, n) => {
    t.sort((a, g) => a.zBot - g.zBot);
    let r = 0;
    for (let a = 1; a <= t.length; a++) if (a === t.length || Math.abs(t[a].zBot - t[a - 1].zTop) > 1e-6) {
      const E = t.slice(r, a);
      E.length >= 1 && (ct.push({ elemIndices: E.map((h) => h.i), planPt: E[0].planPt, bottomNodeIdx: E[0].bot, topNodeIdx: E[E.length - 1].top, secName: E[0].secName, type: E[0].type, nSegments: E.length }), E.forEach((h) => Et.add(h.i))), r = a;
    }
  }), o.push("$ LINE CONNECTIVITIES");
  const A = [];
  ct.forEach((t, n) => {
    const r = `C${n + 1}`, a = Q(t.topNodeIdx);
    Q(t.bottomNodeIdx);
    const g = S(I[t.topNodeIdx][2]), E = S(I[t.bottomNodeIdx][2]), h = p.indexOf(g), P = p.indexOf(E), x = Math.max(1, h - P), v = ft(t.elemIndices[0]);
    o.push(`  LINE  "${r}"  ${t.type}  "${a.pt}"  "${a.pt}"  ${x}`), A.push(`  LINEASSIGN  "${r}"  "${a.story}"  SECTION "${t.secName}" ${v} RIGIDZONE 0.5 MAXSTASPC 0.5 MINNUMSTA ${t.nSegments} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  }), L.forEach((t, n) => {
    if (t.length !== 2 || Et.has(n)) return;
    const r = At(I, t), a = at.get(n) || `Sec_${n}`, g = ft(n);
    if (r === "BEAM") {
      const E = Q(t[0]), h = Q(t[1]);
      o.push(`  LINE  "E${n + 1}"  BEAM  "${E.pt}"  "${h.pt}"  0`), A.push(`  LINEASSIGN  "E${n + 1}"  "${E.story}"  SECTION "${a}" ${g} RIGIDZONE 0.5 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const E = I[t[0]][2] <= I[t[1]][2] ? t[0] : t[1], h = I[t[0]][2] <= I[t[1]][2] ? t[1] : t[0], P = Q(h), x = S(I[E][2]), v = S(I[h][2]), K = p.indexOf(x), st = p.indexOf(v), dt = Math.max(1, st >= 0 && K >= 0 ? st - K : 1);
      o.push(`  LINE  "E${n + 1}"  ${r}  "${P.pt}"  "${P.pt}"  ${dt}`), A.push(`  LINEASSIGN  "E${n + 1}"  "${P.story}"  SECTION "${a}" ${g} RIGIDZONE 0.5 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    }
  }), o.push("");
  const M = C.weightMode ?? "auto", c = /* @__PURE__ */ new Set();
  o.push("$ POINT ASSIGNS"), (_b = $.supports) == null ? void 0 : _b.forEach((t, n) => {
    const r = [];
    if (t[0] && r.push("UX"), t[1] && r.push("UY"), t[2] && r.push("UZ"), t[3] && r.push("RX"), t[4] && r.push("RY"), t[5] && r.push("RZ"), r.length > 0) {
      const a = Q(n), g = a.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      o.push(`  POINTASSIGN  "${a.pt}"  "${a.story}"  RESTRAINT "${r.join(" ")}" ${g} `), c.add(`${a.pt}@${a.story}`);
    }
  }), ct.forEach((t) => {
    const n = Q(t.topNodeIdx), r = `${n.pt}@${n.story}`;
    !c.has(r) && n.story !== "Base" && (o.push(`  POINTASSIGN  "${n.pt}"  "${n.story}"  DIAPH "D1"  `), c.add(r));
  }), M === "manual" && $.loads && $.loads.forEach((t, n) => {
    const r = Q(n), a = `${r.pt}@${r.story}`;
    c.has(a) || (o.push(`  POINTASSIGN  "${r.pt}"  "${r.story}"  DIAPH "DISCONNECTED"  `), c.add(a));
  }), o.push(""), o.push("$ LINE ASSIGNS"), A.forEach((t) => o.push(t)), o.push("");
  const N = [];
  L.forEach((t, n) => {
    if (t.length === 4) {
      const r = I[t[0]], a = I[t[1]], g = I[t[2]], E = [a[0] - r[0], a[1] - r[1], a[2] - r[2]], h = [g[0] - r[0], g[1] - r[1], g[2] - r[2]], P = E[1] * h[2] - E[2] * h[1], x = E[2] * h[0] - E[0] * h[2], v = E[0] * h[1] - E[1] * h[0], K = Math.sqrt(P * P + x * x + v * v), st = K > 1e-10 && Math.abs(v) / K < 0.5;
      N.push({ idx: n, el: t, isWall: st });
    }
  });
  const i = (() => {
    for (const [t, n] of _) if (!n) return F.get(t);
    return F.values().next().value || "Conc_1";
  })();
  if (N.some((t) => !t.isWall)) {
    o.push("$ SLAB PROPERTIES");
    const t = ((_c = m.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
    o.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${i}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${S(t)} `), o.push("");
  }
  if (N.some((t) => t.isWall)) {
    o.push("$ WALL PROPERTIES");
    const t = ((_d = m.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
    o.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${i}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${S(t)} `), o.push("");
  }
  if (N.length > 0) {
    o.push("$ AREA CONNECTIVITIES");
    const t = [];
    N.forEach((n, r) => {
      const { el: a, isWall: g } = n, E = g ? `W${r + 1}` : `F${r + 1}`, h = g ? "PANEL" : "FLOOR", P = a.map((x) => Q(x));
      if (g) {
        const x = I[a[0]][2] <= I[a[2]][2] ? 0 : 2, v = I[a[1]][2] <= I[a[3]][2] ? 1 : 3;
        o.push(`  AREA "${E}"  ${h}  4  "${P[x].pt}"  "${P[v].pt}"  "${P[v].pt}"  "${P[x].pt}"  1  1  0  0  `);
        const K = P[x === 0 ? 2 : 0].story;
        t.push(`  AREAASSIGN  "${E}"  "${K}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else o.push(`  AREA "${E}"  ${h}  4  "${P[0].pt}"  "${P[1].pt}"  "${P[2].pt}"  "${P[3].pt}"  0  0  0  0  `), t.push(`  AREAASSIGN  "${E}"  "${P[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
    }), o.push(""), o.push("$ AREA ASSIGNS"), t.forEach((n) => o.push(n)), o.push("");
  }
  const d = M === "manual" ? 0 : 1;
  o.push("$ LOAD PATTERNS"), o.push(`  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  ${d}`), o.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), o.push("");
  const R = [];
  return $.loads && $.loads.size > 0 && $.loads.forEach((t, n) => {
    const [r, a, g] = t, E = Q(n);
    Math.abs(r) > 1e-10 && R.push(`  POINTLOAD  "${E.pt}"  "${E.story}"  TYPE "FORCE"  LC "Dead"  FX ${S(H(r))}  FY 0  FZ 0`), Math.abs(a) > 1e-10 && R.push(`  POINTLOAD  "${E.pt}"  "${E.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY ${S(H(a))}  FZ 0`), M === "manual" && Math.abs(g) > 1e-10 && R.push(`  POINTLOAD  "${E.pt}"  "${E.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY 0  FZ ${S(H(g))}`);
  }), $.moments && $.moments.size > 0 && $.moments.forEach((t, n) => {
    const [r, a, g] = t, E = Q(n);
    Math.abs(r) > 1e-10 && R.push(`  POINTLOAD  "${E.pt}"  "${E.story}"  TYPE "MOMENT"  LC "Dead"  MX ${S(H(r))}  MY 0  MZ 0`), Math.abs(a) > 1e-10 && R.push(`  POINTLOAD  "${E.pt}"  "${E.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY ${S(H(a))}  MZ 0`), Math.abs(g) > 1e-10 && R.push(`  POINTLOAD  "${E.pt}"  "${E.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY 0  MZ ${S(H(g))}`);
  }), R.length > 0 && (o.push("$ POINT OBJECT LOADS"), R.forEach((t) => o.push(t)), o.push("")), o.push("$ ANALYSIS OPTIONS"), o.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), o.push('  PDELTA  METHOD "NONE"  '), o.push(""), o.push("$ MASS SOURCE"), o.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), o.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), o.push(""), o.push("$ LOAD CASES"), o.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), o.push('  LOADCASE "Dead"  LOADPAT  "Dead"  SF 1 '), o.push('  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), o.push('  LOADCASE "Live"  LOADPAT  "Live"  SF 1 '), o.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), o.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), o.push(""), o.push("$ LOAD COMBINATIONS"), o.push('  COMBO "1.4D"  TYPE "Linear Add"  '), o.push('  COMBO "1.4D"  LOADCASE  "Dead"  SF 1.4 '), o.push('  COMBO "1.2D+1.6L"  TYPE "Linear Add"  '), o.push('  COMBO "1.2D+1.6L"  LOADCASE  "Dead"  SF 1.2 '), o.push('  COMBO "1.2D+1.6L"  LOADCASE  "Live"  SF 1.6 '), o.push(""), o.push("  END"), o.push("$ END OF MODEL FILE"), o.join(`\r
`);
}
function At(C, I) {
  const L = C[I[0]], $ = C[I[1]], m = Math.abs($[2] - L[2]), b = Math.sqrt(($[0] - L[0]) ** 2 + ($[1] - L[1]) ** 2), z = m > b * 0.5;
  return z && b > 0.01 ? "BRACE" : z ? "COLUMN" : "BEAM";
}
export {
  Lt as a,
  Rt as b,
  Nt as c,
  Ct as e,
  Ot as p
};
