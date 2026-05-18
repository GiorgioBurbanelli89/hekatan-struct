function At() {
  const I = document.createElement("div");
  I.id = "modal-results", I.style.cssText = `
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
  let O = false;
  const M = 0.9;
  function A(T, x) {
    var _a, _b, _c, _d;
    if (!T.frequencies || T.frequencies.length === 0) {
      I.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const B = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], Y = [0, 0, 0, 0, 0, 0], u = T.frequencies.length;
    let a = -1, S = -1, k = -1, U = 0, z = 0;
    {
      const o = [0, 0, 0, 0, 0, 0];
      for (let f = 0; f < u; f++) {
        const N = ((_a = T.massParticipation) == null ? void 0 : _a[f]) || [0, 0, 0, 0, 0, 0];
        for (let E = 0; E < 6; E++) o[E] += N[E];
        a < 0 && o[0] >= M && (a = f + 1), S < 0 && o[1] >= M && (S = f + 1), k < 0 && o[0] >= M && o[1] >= M && (k = f + 1);
      }
      U = o[0], z = o[1];
    }
    let P = -1, F = -1, G = -1;
    const m = 0.1;
    for (let o = 0; o < u; o++) {
      const f = ((_b = T.massParticipation) == null ? void 0 : _b[o]) || [0, 0, 0, 0, 0, 0];
      P < 0 && f[0] > m && (P = o + 1), F < 0 && f[1] > m && (F = o + 1), G < 0 && f[5] > m && (G = o + 1);
    }
    const d = k > 0 ? `<span style="color:#0f0">\u2713 ASCE 7-22 \xA712.9.1.1 \u2014 90 % alcanzado en X e Y al modo ${k} de ${u}</span>` : a > 0 && S < 0 ? `<span style="color:#fa0">\u26A0 X cumple en modo ${a}, Y todav\xEDa en ${(z * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : S > 0 && a < 0 ? `<span style="color:#fa0">\u26A0 Y cumple en modo ${S}, X todav\xEDa en ${(U * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : `<span style="color:#f44">\u2717 ASCE 7-22 NO cumplido en ${u} modos \xB7 \u03A3Ux=${(U * 100).toFixed(1)} % \xB7 \u03A3Uy=${(z * 100).toFixed(1)} % \u2014 aumentar nModes</span>`, l = (() => {
      const o = (f, N) => {
        var _a2;
        if (f < 0) return `<span style="color:#f44">${N}: no encontrado en ${u} modos</span>`;
        const E = ((_a2 = T.massParticipation) == null ? void 0 : _a2[f - 1]) || [0, 0, 0, 0, 0, 0], L = N === "Ux" ? 0 : N === "Uy" ? 1 : 5, y = T.frequencies[f - 1] > 0 ? 1 / T.frequencies[f - 1] : 0;
        return `<span style="color:#0f0">${N}: modo ${f}, T=${y.toFixed(3)} s, MPF=${(E[L] * 100).toFixed(1)} %</span>`;
      };
      return `<div style="margin:4px 0; padding:4px 6px; background:rgba(0,255,255,0.05); border-left:2px solid #0ff; font-size:11px;">
  \u{1F3AF} <b>Modos s\xEDsmicos principales</b> (ASCE 7-22 \xA712.9.1):<br>
  ${o(P, "Ux")} \xB7 ${o(F, "Uy")} \xB7 ${o(G, "Rz")}
</div>`;
    })();
    let n = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${x.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
    if (n += '<div id="modal-body" style="padding:0 12px 10px 12px;">', n += `<div style="padding:6px 0; font-weight:bold; font-size:13px;">${d}</div>`, n += l, x.properties) for (const o of x.properties) n += `<span style="color:#888">${o}</span>
`;
    n += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const o of B) n += `<th style="padding:2px 5px">${o}</th>`;
    n += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let o = 0; o < 6; o++) Y[o] = 0;
    if (T.frequencies.forEach((o, f) => {
      var _a2;
      const N = o > 0 ? 1 / o : 0, E = o * 2 * Math.PI, L = ((_a2 = T.massParticipation) == null ? void 0 : _a2[f]) || [0, 0, 0, 0, 0, 0];
      for (let j = 0; j < 6; j++) Y[j] += L[j];
      let y = 0, J = L[0];
      for (let j = 1; j < 6; j++) L[j] > J && (J = L[j], y = j);
      const D = J < 0.05 ? "\u2014" : `${B[y]} (${(J * 100).toFixed(0)} %)`, H = y === 0 || y === 1 ? "#0f0" : y === 5 ? "#0ff" : y === 2 ? "#fa0" : "#888", X = f + 1 === a, V = f + 1 === S, K = f + 1 === k;
      n += `<tr style="border-bottom:1px solid #fff1; ${K ? "background:rgba(0,255,0,0.12);" : X || V ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${f + 1}${K ? " \u2605" : ""}</td>
  <td style="padding:2px 6px; text-align:right">${o.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${N.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${E.toFixed(2)}</td>`;
      for (let j = 0; j < 6; j++) {
        const at = (L[j] * 100).toFixed(1), ot = L[j] > 0.5 ? "#f00" : L[j] > 0.1 ? "#ff0" : "#0f0";
        n += `<td style="padding:2px 5px; text-align:right; color:${ot}">${at}%</td>`;
      }
      const q = Y[0] >= M ? "#0f0" : "#0ff", Q = Y[1] >= M ? "#0f0" : "#0ff";
      n += `<td style="padding:2px 5px; text-align:right; color:${q}">${(Y[0] * 100).toFixed(1)}%${X ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${Q}">${(Y[1] * 100).toFixed(1)}%${V ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(Y[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${H}">${D}</td></tr>`;
    }), n += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, n += "</div>", I.innerHTML = n, O) {
      const o = I.querySelector("#modal-body"), f = I.querySelector("#modal-minimize");
      o && (o.style.display = "none"), f && (f.textContent = "\u25A2", f.title = "Restaurar");
    }
    (_c = I.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      O = !O;
      const o = I.querySelector("#modal-body"), f = I.querySelector("#modal-minimize");
      O ? (o.style.display = "none", f.textContent = "\u25A2", f.title = "Restaurar") : (o.style.display = "block", f.textContent = "\u25AC", f.title = "Minimizar");
    }), (_d = I.querySelector("#modal-copy")) == null ? void 0 : _d.addEventListener("click", () => {
      const o = [];
      o.push(`Modal Analysis \u2014 ${x.title}`), o.push(d.replace(/<[^>]+>/g, ""));
      const f = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${B.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      o.push(f), o.push("-".repeat(f.length));
      const N = [0, 0, 0, 0, 0, 0];
      T.frequencies.forEach((L, y) => {
        var _a2;
        const J = L > 0 ? 1 / L : 0, D = L * 2 * Math.PI, H = ((_a2 = T.massParticipation) == null ? void 0 : _a2[y]) || [0, 0, 0, 0, 0, 0];
        for (let q = 0; q < 6; q++) N[q] += H[q];
        let X = 0, V = H[0];
        for (let q = 1; q < 6; q++) H[q] > V && (V = H[q], X = q);
        const K = V < 0.05 ? "\u2014" : `${B[X]} (${(V * 100).toFixed(0)}%)`, et = H.map((q) => ((q * 100).toFixed(1) + "%").padStart(6)).join(" ");
        o.push(`${String(y + 1).padStart(4)}  ${L.toFixed(4).padStart(9)}  ${J.toFixed(4).padStart(9)}  ${D.toFixed(2).padStart(9)}  ${et}  ${(N[0] * 100).toFixed(1).padStart(5)}%  ${(N[1] * 100).toFixed(1).padStart(5)}%  ${(N[5] * 100).toFixed(1).padStart(5)}%  ${K}`);
      }), navigator.clipboard.writeText(o.join(`
`));
      const E = I.querySelector("#modal-copy");
      E.textContent = "\u2713", setTimeout(() => E.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: I, render: A };
}
function mt(I) {
  var _a;
  const O = I.split(/\r?\n/), M = { force: "TONF", length: "M" }, A = [], T = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Y = [], u = [], a = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), k = [], U = [];
  let z = "", P = "";
  const F = /* @__PURE__ */ new Map();
  for (const h of O) {
    const e = h.trim();
    if (!e || e.startsWith("$")) {
      e.startsWith("$ ") && (P = e.substring(2).trim());
      continue;
    }
    if (P && (F.has(P) || F.set(P, []), F.get(P).push(h)), P === "CONTROLS") {
      const s = e.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
      s && (M.force = s[1], M.length = s[2]);
      const i = e.match(/TITLE2\s+"([^"]+)"/);
      i && (z = i[1]);
    }
    if (P === "STORIES - IN SEQUENCE FROM TOP") {
      const s = e.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
      if (s) {
        const i = s[1], t = s[2] ? parseFloat(s[2]) : 0, r = s[3] ? parseFloat(s[3]) : void 0;
        A.push({ name: i, height: t, elev: r ?? 0 });
      }
    }
    if (P === "MATERIAL PROPERTIES") {
      const s = e.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
      if (s) {
        const i = s[1];
        T.has(i) || T.set(i, { type: s[2] || "", E: 0, G: 0, nu: 0 });
        const t = T.get(i);
        s[2] && (t.type = s[2]);
        const r = e.match(/\bE\s+([\d.eE+-]+)/);
        r && (t.E = parseFloat(r[1]));
        const p = e.match(/\bU\s+([\d.eE+-]+)/);
        p && (t.nu = parseFloat(p[1]), t.G = t.E / (2 * (1 + t.nu)));
        const c = e.match(/\bFY\s+([\d.eE+-]+)/);
        c && (t.fy = parseFloat(c[1]));
        const R = e.match(/\bFC\s+([\d.eE+-]+)/);
        R && (t.fc = parseFloat(R[1]));
        const g = e.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
        g && (t.density = parseFloat(g[1]));
      }
    }
    if (P === "FRAME SECTIONS") {
      const s = e.match(/FRAMESECTION\s+"([^"]+)"/);
      if (s) {
        const i = s[1];
        x.has(i) || x.set(i, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
        const t = x.get(i), r = e.match(/MATERIAL\s+"([^"]+)"/);
        r && (t.material = r[1]);
        const p = e.match(/SHAPE\s+"([^"]+)"/);
        p && (t.shape = p[1]);
        const c = e.match(/\bD\s+([\d.eE+-]+)/);
        c && (t.D = parseFloat(c[1]));
        const R = e.match(/\bB\s+([\d.eE+-]+)/);
        R && (t.B = parseFloat(R[1]));
        const g = e.match(/\bTF\s+([\d.eE+-]+)/);
        g && (t.TF = parseFloat(g[1]));
        const $ = e.match(/\bTW\s+([\d.eE+-]+)/);
        $ && (t.TW = parseFloat($[1]));
        const C = e.match(/\bR\s+([\d.eE+-]+)/);
        C && (t.R = parseFloat(C[1]));
        const w = e.match(/FILLMATERIAL\s+"([^"]+)"/);
        w && (t.fillMaterial = w[1]);
        const W = e.match(/I2MOD\s+([\d.eE+-]+)/);
        W && (t.modI2 = parseFloat(W[1]));
        const Z = e.match(/I3MOD\s+([\d.eE+-]+)/);
        Z && (t.modI3 = parseFloat(Z[1]));
      }
    }
    if (P === "POINT COORDINATES") {
      const s = e.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
      s && B.set(s[1], [parseFloat(s[2]), parseFloat(s[3])]);
    }
    if (P === "LINE CONNECTIVITIES") {
      const s = e.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
      s && Y.push({ name: s[1], type: s[2], pt1: s[3], pt2: s[4], nStories: parseInt(s[5]) });
    }
    if (P === "POINT ASSIGNS") {
      const s = e.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
      s && a.set(`${s[1]}@${s[2]}`, s[3].split(/\s+/));
    }
    if (P === "LINE ASSIGNS") {
      const s = e.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
      if (s) {
        const i = { story: s[2], section: s[3], rigidZone: 0, releases: [], angle: 0 }, t = e.match(/RIGIDZONE\s+([\d.eE+-]+)/);
        t && (i.rigidZone = parseFloat(t[1]));
        const r = e.match(/RELEASE\s+"([^"]+)"/);
        r && (i.releases = r[1].split(/\s+/));
        const p = e.match(/ANG\s+([-\d.eE+]+)/);
        p && (i.angle = parseFloat(p[1])), S.set(`${s[1]}@${s[2]}`, i);
      }
    }
    if (P === "GRIDS") {
      const s = e.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
      s && U.push({ label: s[1], dir: s[2], coord: parseFloat(s[3]) });
    }
    if (P === "FRAME OBJECT LOADS") {
      const s = e.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      s && k.push({ line: s[1], story: s[2], type: s[3], dir: s[4], lc: s[5], val: parseFloat(s[6]) });
    }
    if (P === "AREA CONNECTIVITIES") {
      const s = e.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
      if (s) {
        const i = ((_a = s[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((t) => t.replace(/"/g, ""))) || [];
        u.push({ name: s[1], pts: i, nStories: 0 });
      }
    }
  }
  const G = /* @__PURE__ */ new Map();
  if (A.length > 0) {
    const h = A.length - 1;
    G.set(A[h].name, A[h].elev);
    for (let e = h - 1; e >= 0; e--) {
      const i = G.get(A[e + 1].name) + A[e].height;
      A[e].elev = i, G.set(A[e].name, i);
    }
  }
  const m = [], d = [], l = /* @__PURE__ */ new Map(), n = (h, e) => `${h}@${e}`, o = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
  for (const h of Y) f.set(h.name, h);
  for (const h of Y) for (const [e, s] of S) {
    if (!e.startsWith(h.name + "@")) continue;
    const i = s.story, t = A.findIndex((r) => r.name === i);
    if (!(t < 0)) if (h.type === "COLUMN" || h.type === "BRACE") {
      o.add(n(h.pt2, i));
      const r = Math.max(h.nStories, 1), p = Math.min(t + r, A.length - 1);
      o.add(n(h.pt1, A[p].name));
    } else o.add(n(h.pt1, i)), o.add(n(h.pt2, i));
  }
  for (const [h] of a) o.add(h);
  for (const h of o) {
    const [e, s] = h.split("@"), i = B.get(e), t = G.get(s);
    i === void 0 || t === void 0 || (m.push([i[0], i[1], t]), d.push(h), l.set(h, m.length - 1));
  }
  const N = [], E = [], L = [], y = [], J = /* @__PURE__ */ new Map();
  for (const h of Y) for (const [e, s] of S) {
    if (!e.startsWith(h.name + "@")) continue;
    const i = s.story, t = A.findIndex(($) => $.name === i);
    if (t < 0) continue;
    let r, p;
    if (h.type === "COLUMN" || h.type === "BRACE") {
      const $ = Math.max(h.nStories, 1), C = Math.min(t + $, A.length - 1);
      r = n(h.pt1, A[C].name), p = n(h.pt2, i);
    } else r = n(h.pt1, i), p = n(h.pt2, i);
    const c = l.get(r), R = l.get(p);
    if (c === void 0 || R === void 0 || c === R) continue;
    const g = N.length;
    if (N.push([c, R]), E.push(h.name), L.push(h.type), y.push(i), J.set(g, s.section), s.rigidZone > 0 && et.set(g, [s.rigidZone, s.rigidZone]), s.releases.length > 0) {
      const $ = new Array(12).fill(false), C = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const w of s.releases) {
        const W = C[w];
        W !== void 0 && ($[W] = true);
      }
      q.set(g, $);
    }
  }
  const D = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map();
  for (const [h, e] of J) {
    const s = x.get(e);
    if (!s) continue;
    const i = T.get(s.material);
    i && (D.set(h, i.E), H.set(h, i.G));
    const t = s.D, r = s.B, p = s.TF, c = s.TW;
    let R = 0, g = 0, $ = 0, C = 0, w = 0, W = 0, Z = "rect";
    switch (s.shape) {
      case "Concrete Rectangular":
        R = t * r, g = r * t ** 3 / 12, $ = t * r ** 3 / 12, C = r * t ** 3 * (1 / 3 - 0.21 * (t / r) * (1 - t ** 4 / (12 * r ** 4))), w = W = 5 / 6 * R, Z = "rect";
        break;
      case "Concrete Circle":
        R = Math.PI * t ** 2 / 4, g = $ = Math.PI * t ** 4 / 64, C = Math.PI * t ** 4 / 32, w = W = 0.9 * R, Z = "circ";
        break;
      case "Steel I/Wide Flange":
        R = 2 * r * p + (t - 2 * p) * c, g = (r * t ** 3 - (r - c) * (t - 2 * p) ** 3) / 12, $ = (2 * p * r ** 3 + (t - 2 * p) * c ** 3) / 12, C = (2 * r * p ** 3 + (t - 2 * p) * c ** 3) / 3, w = (t - 2 * p) * c, W = 2 * r * p * 5 / 6, Z = "I";
        break;
      case "Steel Tube":
        R = t * r - (t - 2 * c) * (r - 2 * c), g = (r * t ** 3 - (r - 2 * c) * (t - 2 * c) ** 3) / 12, $ = (t * r ** 3 - (t - 2 * c) * (r - 2 * c) ** 3) / 12, C = 2 * c * (t - c) * (r - c) * ((t - c) * (r - c)) / (t - c + (r - c)), w = 2 * t * c, W = 2 * r * c, Z = "HSS";
        break;
      case "Filled Steel Tube":
        R = t * r, g = r * t ** 3 / 12, $ = t * r ** 3 / 12, C = 2 * c * (t - c) * (r - c) * ((t - c) * (r - c)) / (t - c + (r - c)), w = 2 * t * c + 5 / 6 * (t - 2 * c) * (r - 2 * c), W = 2 * r * c + 5 / 6 * (t - 2 * c) * (r - 2 * c), Z = "CFT";
        break;
      case "Steel Angle": {
        const _ = p || c;
        R = _ * (t + r - _), g = _ * (t ** 3 + r * _ ** 2 + _ ** 2 * (t - _)) / 12, $ = _ * (r ** 3 + t * _ ** 2 + _ ** 2 * (r - _)) / 12, C = (t + r - _) * _ ** 3 / 3, w = t * _, W = r * _, Z = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        R = 2 * r * p + (t - 2 * p) * c, g = (c * t ** 3 + 2 * r * p * (t - p) ** 2) / 12, $ = (2 * p * r ** 3 + (t - 2 * p) * c ** 3) / 12, C = (2 * r * p ** 3 + (t - 2 * p) * c ** 3) / 3, w = (t - 2 * p) * c, W = 2 * r * p * 5 / 6, Z = s.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        R = 2 * (2 * r * p + (t - 2 * p) * c), g = 2 * (c * t ** 3 + 2 * r * p * (t - p) ** 2) / 12, $ = 2 * (2 * p * r ** 3 + (t - 2 * p) * c ** 3) / 12, C = 2 * (2 * r * p ** 3 + (t - 2 * p) * c ** 3) / 3, w = 2 * (t - 2 * p) * c, W = 4 * r * p * 5 / 6, Z = "2C";
        break;
      default:
        t > 0 && r > 0 && (R = t * r, g = r * t ** 3 / 12, $ = t * r ** 3 / 12, C = Math.min(t, r) * Math.max(t, r) ** 3 / 3 * 0.3, w = W = 5 / 6 * R);
        break;
    }
    s.modI2 && ($ *= s.modI2), s.modI3 && (g *= s.modI3), X.set(h, R), Q.set(h, g), j.set(h, $), at.set(h, C), w > 0 && V.set(h, w), W > 0 && K.set(h, W), ot.set(h, { type: Z, b: r || void 0, h: t || void 0, d: Z === "circ" || Z === "pipe" ? t : void 0, tw: c || void 0, tf: p || void 0, r: s.R, name: e });
  }
  const it = /* @__PURE__ */ new Map();
  for (const [h, e] of a) {
    const s = l.get(h);
    if (s === void 0) continue;
    const i = [false, false, false, false, false, false];
    for (const t of e) t === "UX" && (i[0] = true), t === "UY" && (i[1] = true), t === "UZ" && (i[2] = true), t === "RX" && (i[3] = true), t === "RY" && (i[4] = true), t === "RZ" && (i[5] = true);
    it.set(s, i);
  }
  const nt = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map();
  for (let h = 0; h < E.length; h++) rt.set(`${E[h]}@${y[h]}`, h);
  for (const h of k) {
    const e = rt.get(`${h.line}@${h.story}`);
    if (e === void 0) continue;
    const [s, i] = N[e], t = m[s], r = m[i], p = Math.sqrt((r[0] - t[0]) ** 2 + (r[1] - t[1]) ** 2 + (r[2] - t[2]) ** 2);
    if (p < 1e-10) continue;
    const c = h.val * p / 2;
    let R = 0, g = 0, $ = 0;
    h.dir === "GRAV" || h.dir === "GRAVITY" ? $ = -c : h.dir === "X" ? R = c : h.dir === "Y" ? g = c : h.dir === "Z" && ($ = -c);
    for (const C of [s, i]) {
      const w = nt.get(C) || [0, 0, 0, 0, 0, 0];
      w[0] += R, w[1] += g, w[2] += $, nt.set(C, w);
    }
  }
  const pt = /* @__PURE__ */ new Map();
  for (const [h, e] of J) {
    const s = x.get(e);
    if (!s) continue;
    const i = T.get(s.material);
    (i == null ? void 0 : i.density) && pt.set(h, i.density);
  }
  return { units: M, stories: A.reverse(), materials: T, frameSections: x, nodes: m, nodeNames: d, nodeNameToIdx: l, elements: N, elementNames: E, elementTypes: L, elementStories: y, elementSections: J, nodeInputs: { supports: it, loads: nt }, elementInputs: { elasticities: D, shearModuli: H, areas: X, momentsOfInertiaZ: Q, momentsOfInertiaY: j, torsionalConstants: at, shearAreasY: V, shearAreasZ: K, rigidOffsets: et, momentReleases: q, densities: pt, sectionShapes: ot }, sectionShapes: ot, grids: U, info: { nNodes: m.length, nFrames: N.length, nAreas: u.length, title: z }, rawSections: F };
}
function b(I) {
  return I && parseFloat(I) || 0;
}
function ft(I) {
  const O = /* @__PURE__ */ new Map(), M = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let A;
  for (; (A = M.exec(I)) !== null; ) O.set(A[1], A[2] !== void 0 ? A[2] : A[3]);
  return O;
}
function It(I) {
  const O = I.split(/\r?\n/);
  return O.some((A) => A.trim().startsWith("TABLE:")) ? dt(O) : ht(O);
}
function dt(I) {
  var _a, _b, _c, _d, _e, _f;
  const O = [];
  let M = "";
  for (const G of I) {
    const m = G.trimEnd();
    m.endsWith("_") ? M += m.slice(0, -1) + " " : (M += m, O.push(M), M = "");
  }
  M && O.push(M);
  const A = { force: "KN", length: "m" };
  let T = "UX,UY,UZ,RX,RY,RZ";
  const x = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), a = [], S = [], k = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), P = [];
  let F = "";
  for (const G of O) {
    const m = G.trim();
    if (!m || m.startsWith(";") || m.startsWith("File ")) continue;
    if (m.startsWith("TABLE:")) {
      const l = m.match(/TABLE:\s+"(.+?)"/);
      F = l ? l[1].toUpperCase() : "";
      continue;
    }
    if (m === "END TABLE DATA") {
      F = "";
      continue;
    }
    const d = ft(m);
    switch (F) {
      case "PROGRAM CONTROL": {
        const l = d.get("CurrUnits");
        if (l) {
          const n = l.split(",").map((o) => o.trim());
          n[0] && (A.force = n[0]), n[1] && (A.length = n[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const l = d.get("Material");
        l && !x.has(l) && x.set(l, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const l = d.get("Material");
        if (l) {
          const n = x.get(l) || { E: 0, nu: 0, G: 0 };
          n.E = b(d.get("E1")), n.G = b(d.get("G12")), n.nu = b(d.get("U12")), n.density = b(d.get("UnitMass")), x.set(l, n);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const l = d.get("Material");
        l && x.has(l) && (x.get(l).fy = b(d.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const l = d.get("SectionName");
        l && B.set(l, { material: d.get("Material") || "", shape: d.get("Shape") || "Rectangular", D: b(d.get("t3")), B: b(d.get("t2")), TF: b(d.get("tf")), TW: b(d.get("tw")), A: b(d.get("Area")), Iz: b(d.get("I33")), Iy: b(d.get("I22")), J: b(d.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const l = d.get("Section");
        l && Y.set(l, { material: d.get("Material") || "", type: d.get("Type") || "Shell", thickness: b(d.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const l = d.get("Joint");
        if (l) {
          const n = b(d.get("XorR")), o = b(d.get("Y")), f = b(d.get("Z"));
          u.set(l, [n, o, f]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const l = d.get("Frame"), n = d.get("JointI"), o = d.get("JointJ");
        l && n && o && a.push({ name: l, j1: n, j2: o });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const l = d.get("Area");
        if (l) {
          const n = parseInt(d.get("NumJoints") || "4"), o = [];
          for (let f = 1; f <= n; f++) {
            const N = d.get(`Joint${f}`);
            N && o.push(N);
          }
          o.length >= 3 && S.push({ name: l, joints: o });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const l = d.get("Joint");
        if (l) {
          const n = [((_a = d.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = d.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = d.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = d.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = d.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = d.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          k.set(l, n);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const l = d.get("Frame"), n = d.get("AnalSect");
        l && n && U.set(l, n);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const l = d.get("Area"), n = d.get("Section");
        l && n && z.set(l, n);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const l = d.get("Joint");
        l && P.push({ joint: l, fx: b(d.get("F1")), fy: b(d.get("F2")), fz: b(d.get("F3")), mx: b(d.get("M1")), my: b(d.get("M2")), mz: b(d.get("M3")) });
        break;
      }
    }
  }
  return Et(A, T, x, B, Y, u, a, S, k, U, z, P);
}
function ht(I) {
  const O = { force: "KN", length: "m" };
  let M = "UX,UY,UZ,RX,RY,RZ";
  const A = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Y = [], u = [], a = /* @__PURE__ */ new Map(), S = [];
  let k = "", U = "";
  for (const F of I) {
    const G = F.trim();
    if (!G || G.startsWith(";")) continue;
    if (!F.startsWith(" ") && !F.startsWith("	")) {
      const l = G.toUpperCase();
      if (l === "END") break;
      l.startsWith("SHELL SECTION") ? k = "SHELL SECTION" : l.startsWith("FRAME SECTION") ? k = "FRAME SECTION" : k = l.split(/\s+/)[0];
      continue;
    }
    const m = ft(G), d = G.split(/\s+/);
    switch (k) {
      case "SYSTEM": {
        const l = m.get("DOF");
        l && (M = l);
        const n = m.get("LENGTH");
        n && (O.length = n);
        const o = m.get("FORCE");
        o && (O.force = o);
        break;
      }
      case "JOINT": {
        const l = d[0];
        B.set(l, [b(m.get("X")), b(m.get("Y")), b(m.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const l = m.get("ADD"), n = m.get("DOF");
        if (l && n) {
          const o = n.split(","), f = [false, false, false, false, false, false];
          for (const N of o) {
            const E = N.toUpperCase();
            (E === "UX" || E === "U1") && (f[0] = true), (E === "UY" || E === "U2") && (f[1] = true), (E === "UZ" || E === "U3") && (f[2] = true), (E === "RX" || E === "R1") && (f[3] = true), (E === "RY" || E === "R2") && (f[4] = true), (E === "RZ" || E === "R3") && (f[5] = true);
          }
          a.set(l, f);
        }
        break;
      }
      case "MATERIAL": {
        const l = m.get("NAME");
        if (l) U = l, A.set(l, { E: 0, nu: 0, G: 0 });
        else if (U) {
          const n = A.get(U), o = m.get("E");
          o && (n.E = b(o));
          const f = m.get("U");
          f && (n.nu = b(f)), n.G = n.E / (2 * (1 + n.nu));
          const N = m.get("M");
          N && (n.density = b(N));
        }
        break;
      }
      case "SHELL": {
        const l = d[0], n = m.get("J");
        m.get("SEC"), n && u.push({ name: l, joints: n.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const l = m.get("NAME");
        l && x.set(l, { material: m.get("MAT") || "", type: m.get("TYPE") || "Shell", thickness: b(m.get("TH")) });
        break;
      }
      case "FRAME": {
        const l = d[0], n = m.get("J");
        if (n) {
          const o = n.split(",");
          o.length >= 2 && Y.push({ name: l, j1: o[0], j2: o[1] });
        }
        break;
      }
      case "LOAD": {
        const l = m.get("ADD");
        l && S.push({ joint: l, fx: b(m.get("UX")), fy: b(m.get("UY")), fz: b(m.get("UZ")), mx: b(m.get("MX")), my: b(m.get("MY")), mz: b(m.get("MZ")) });
        break;
      }
    }
  }
  return Et(O, M, A, T, x, B, Y, u, a, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), S);
}
function Et(I, O, M, A, T, x, B, Y, u, a, S, k) {
  var _a;
  const U = [], z = /* @__PURE__ */ new Map(), P = [];
  for (const [E, L] of x) z.set(E, P.length), U.push(E), P.push(L);
  const F = [], G = [], m = /* @__PURE__ */ new Map();
  for (const E of B) {
    const L = z.get(E.j1), y = z.get(E.j2);
    if (L !== void 0 && y !== void 0) {
      const J = F.length;
      F.push([L, y]), G.push(E.name);
      const D = a.get(E.name);
      D && m.set(J, D);
    }
  }
  const d = F.length;
  for (const E of Y) {
    const L = E.joints.map((y) => z.get(y)).filter((y) => y !== void 0);
    if (L.length >= 3) {
      const y = F.length;
      F.push(L), G.push(E.name);
      const J = S.get(E.name);
      J && m.set(y, J);
    }
  }
  const l = F.length - d, n = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, o = /* @__PURE__ */ new Map(), f = M.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let E = 0; E < F.length; E++) {
    const L = m.get(E), y = L ? A.get(L) : null, J = L ? T.get(L) : null;
    if (y || F[E].length === 2) {
      const D = y || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, H = M.get(D.material) || f, X = H.E || f.E, V = H.nu || 0.3, K = H.G || X / (2 * (1 + V));
      n.elasticities.set(E, X), n.shearModuli.set(E, K), n.areas.set(E, D.A || D.D * D.B), n.momentsOfInertiaZ.set(E, D.Iz || D.B * D.D ** 3 / 12), n.momentsOfInertiaY.set(E, D.Iy || D.D * D.B ** 3 / 12), n.torsionalConstants.set(E, D.J || 0), n.densities.set(E, H.density || 0), ((_a = D.shape) == null ? void 0 : _a.includes("Wide Flange")) || D.shape === "I" ? o.set(E, { type: "I", b: D.B, h: D.D, name: L || "I-section" }) : o.set(E, { type: "rect", b: D.B, h: D.D });
    } else if (J) {
      const D = M.get(J.material) || f, H = D.E || f.E, X = D.nu || 0.2, V = D.G || H / (2 * (1 + X));
      n.elasticities.set(E, H), n.shearModuli.set(E, V), n.thicknesses.set(E, J.thickness), n.poissonsRatios.set(E, X), n.densities.set(E, D.density || 0);
    }
  }
  const N = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [E, L] of u) {
    const y = z.get(E);
    y !== void 0 && N.supports.set(y, L);
  }
  for (const E of k) {
    const L = z.get(E.joint);
    if (L !== void 0) {
      const y = N.forces.get(L) || [0, 0, 0, 0, 0, 0];
      y[0] += E.fx, y[1] += E.fy, y[2] += E.fz, y[3] += E.mx, y[4] += E.my, y[5] += E.mz, N.forces.set(L, y);
    }
  }
  return { units: I, dof: O, materials: M, frameSections: A, shellSections: T, nodes: P, nodeNames: U, nodeNameToIdx: z, elements: F, elementNames: G, elementSections: m, nodeInputs: N, elementInputs: n, sectionShapes: o, info: { nNodes: P.length, nFrames: d, nShells: l, title: `SAP2000 (${d} frames, ${l} shells)` } };
}
function Mt(I) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: O, elements: M, nodeInputs: A, elementInputs: T } = I, x = I.units || { force: "KN", length: "m" }, B = I.title || "Awatif Model", Y = [], u = (n) => Y.push(n), a = () => Y.push(" ");
  u(`File ${B}.$2k was saved on m/d/yy at h:mm:ss`), a(), u('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), u("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), a();
  const S = [], k = [];
  if (M.forEach((n, o) => {
    n.length === 2 ? S.push(o) : k.push(o);
  }), S.length > 0) {
    u('TABLE:  "CONNECTIVITY - FRAME"');
    for (const n of S) {
      const o = M[n];
      u(`   Frame=${n + 1}   JointI=${o[0] + 1}   JointJ=${o[1] + 1}   IsCurved=No`);
    }
    a();
  }
  if (k.length > 0) {
    u('TABLE:  "CONNECTIVITY - AREA"');
    for (const n of k) {
      const o = M[n], f = o.map((N, E) => `Joint${E + 1}=${N + 1}`).join("   ");
      u(`   Area=${n + 1}   NumJoints=${o.length}   ${f}`);
    }
    a();
  }
  u('TABLE:  "COORDINATE SYSTEMS"'), u("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), a(), u('TABLE:  "DATABASE FORMAT TYPES"'), u("   UnitsCurr=Yes   OverrideE=No"), a();
  const U = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map();
  for (const n of S) {
    const o = ((_a = T.areas) == null ? void 0 : _a.get(n)) || 0, f = ((_b = T.momentsOfInertiaZ) == null ? void 0 : _b.get(n)) || 0, N = ((_c = T.momentsOfInertiaY) == null ? void 0 : _c.get(n)) || 0, E = ((_d = T.torsionalConstants) == null ? void 0 : _d.get(n)) || 0, L = ((_e = T.elasticities) == null ? void 0 : _e.get(n)) || 0, y = `MAT_${Math.round(L)}`, J = `A${o.toPrecision(6)}_Iz${f.toPrecision(6)}`;
    if (!U.has(J)) {
      let H = 0.3, X = 0.3;
      o > 0 && f > 0 && (H = Math.sqrt(12 * f / o), X = o / H), U.set(J, { A: o, Iz: f, Iy: N, J: E, b: X, h: H, matKey: y });
    }
    const D = [...U.keys()].indexOf(J) + 1;
    z.set(n, `SEC${D}`);
  }
  if (S.length > 0) {
    u('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const n of S) {
      const o = z.get(n) || "SEC1";
      u(`   Frame=${n + 1}   AutoSelect=N.A.   AnalSect=${o}   MatProp=Default`);
    }
    a();
  }
  if (U.size > 0) {
    u('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let n = 0;
    for (const [, o] of U) {
      n++;
      const f = o.A * 5 / 6;
      u(`   SectionName=SEC${n}   Material=${o.matKey}   Shape=Rectangular   t3=${v(o.h)}   t2=${v(o.b)}   Area=${v(o.A)}   TorsConst=${v(o.J)}   I33=${v(o.Iz)}   I22=${v(o.Iy)}   I23=0   AS2=${v(f)}   AS3=${v(f)} _`), u("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    a();
  }
  const P = !!I.layeredSection && k.length > 0, F = I.layeredSection, G = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map();
  if (!P) for (const n of k) {
    const o = ((_f = T.thicknesses) == null ? void 0 : _f.get(n)) || 0.1, f = ((_g = T.elasticities) == null ? void 0 : _g.get(n)) || 0, N = `MAT_${Math.round(f)}`, E = `t${o.toPrecision(6)}`;
    G.has(E) || G.set(E, { t: o, matKey: N });
    const L = [...G.keys()].indexOf(E) + 1;
    m.set(n, `SSEC${L}`);
  }
  if (k.length > 0) {
    u('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const n of k) {
      const o = P ? F.name : m.get(n) || "SSEC1";
      u(`   Area=${n + 1}   Section=${o}   MatProp=Default`);
    }
    if (a(), u('TABLE:  "AREA SECTION PROPERTIES"'), P) {
      const n = F, o = ((_h = n.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      u(`   Section=${n.name}   Material=${o}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${v(n.totalThickness)}   BendThick=${v(n.totalThickness)}   Color=Magenta`);
    } else {
      let n = 0;
      for (const [, o] of G) n++, u(`   Section=SSEC${n}   Material=${o.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${v(o.t)}   BendThick=${v(o.t)}   Color=Cyan`);
    }
    if (a(), P) {
      u('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const n = F;
      for (const o of n.layers) {
        const f = o.angle ?? 0, N = o.numIntPts ?? 3;
        u(`   Section=${n.name}   LayerName=${o.name}   Distance=${v(o.distance)}   Thickness=${v(o.thickness)}   Type=Shell   NumIntPts=${N}   Material=${o.material}   MatAngle=${v(f * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      a();
    }
  }
  u('TABLE:  "JOINT COORDINATES"');
  for (let n = 0; n < O.length; n++) {
    const o = O[n];
    u(`   Joint=${n + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${v(o[0])}   Y=${v(o[1])}   Z=${v(o[2])}   SpecialJt=No`);
  }
  if (a(), A.supports && A.supports.size > 0) {
    u('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [n, o] of A.supports) {
      if (!o.some((N) => N)) continue;
      const f = (N) => N ? "Yes" : "No";
      u(`   Joint=${n + 1}   U1=${f(o[0])}   U2=${f(o[1])}   U3=${f(o[2])}   R1=${f(o[3])}   R2=${f(o[4])}   R3=${f(o[5])}`);
    }
    a();
  }
  const d = I.selfWtMult ?? 1;
  if (u('TABLE:  "LOAD PATTERN DEFINITIONS"'), u(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${d}`), a(), u('TABLE:  "LOAD CASE DEFINITIONS"'), u('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), a(), u('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), u('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), a(), A.forces && A.forces.size > 0) {
    u('TABLE:  "JOINT LOADS - FORCE"');
    for (const [n, o] of A.forces) o.some((f) => Math.abs(f) > 1e-12) && u(`   Joint=${n + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${v(o[0])}   F2=${v(o[1])}   F3=${v(o[2])}   M1=${v(o[3])}   M2=${v(o[4])}   M3=${v(o[5])}`);
    a();
  }
  const l = /* @__PURE__ */ new Map();
  for (let n = 0; n < M.length; n++) {
    const o = ((_i = T.elasticities) == null ? void 0 : _i.get(n)) || 0, f = ((_j = T.shearModuli) == null ? void 0 : _j.get(n)) || 0, N = o > 0 && f > 0 ? Math.max(0, Math.min(0.5, o / (2 * f) - 1)) : 0.2, E = ((_k = T.densities) == null ? void 0 : _k.get(n)) || 0, L = `MAT_${Math.round(o)}`;
    l.has(L) || l.set(L, { E: o, nu: N, G: f, rho: E });
  }
  u('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [n] of l) u(`   Material=${n}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  a(), u('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [n, o] of l) u(`   Material=${n}   UnitWeight=${v(o.rho * 9.81)}   UnitMass=${v(o.rho)}   E1=${v(o.E)}   G12=${v(o.G)}   U12=${v(o.nu)}   A1=9.9E-06`);
  a(), u('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [n] of l) u(`   Material=${n}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return a(), u('TABLE:  "PROGRAM CONTROL"'), u(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${x.force}, ${x.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), a(), u("END TABLE DATA"), u(""), Y.join(`\r
`);
}
function v(I) {
  return I === 0 || Math.abs(I) < 1e-15 ? "0" : Math.abs(I) >= 1e6 || Math.abs(I) < 1e-3 && Math.abs(I) > 0 ? I.toExponential(8) : parseFloat(I.toPrecision(10)).toString();
}
function gt(I) {
  const { nodes: O, elements: M, nodeInputs: A, elementInputs: T, title: x, e2kModel: B } = I, Y = B == null ? void 0 : B.rawSections;
  return Y && Y.size > 0 ? St(Y) : ut(I);
}
function St(I, O) {
  const M = [], A = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  M.push("$ File exported from Awatif FEM Studio (round-trip)"), M.push("");
  for (const T of A) {
    const x = I.get(T);
    if (!(!x || x.length === 0)) {
      M.push(`$ ${T}`);
      for (const B of x) M.push(B);
      M.push("");
    }
  }
  for (const [T, x] of I) if (!A.includes(T) && x.length !== 0) {
    M.push(`$ ${T}`);
    for (const B of x) M.push(B);
    M.push("");
  }
  return M.push("  END"), M.push("$ END OF MODEL FILE"), M.join(`\r
`);
}
function ut(I) {
  var _a, _b, _c, _d;
  const { nodes: O, elements: M, nodeInputs: A, elementInputs: T, title: x, units: B } = I, Y = (B == null ? void 0 : B.force) || "Tonf", u = (B == null ? void 0 : B.length) || "m", a = [], S = (e) => Math.round(e * 1e4) / 1e4, k = (() => {
    const e = (Y || "Tonf").toLowerCase();
    return e === "tonf" || e === "tonf-f" ? 1 / 9.80665 : e === "kn" || e === "kn-f" ? 1 : e === "kgf" || e === "kg" ? 1 / 980665e-8 : e === "kip" || e === "kips" ? 1 / 4.44822 : 1;
  })(), U = (e) => e * k, z = (e) => e * k, P = (e) => e * k, F = /* @__PURE__ */ new Date(), G = `${F.getMonth() + 1}/${F.getDate()}/${F.getFullYear()}  ${F.getHours()}:${String(F.getMinutes()).padStart(2, "0")}:${String(F.getSeconds()).padStart(2, "0")}`;
  a.push(`$ File   "Hekatan_export.e2k"  saved ${G} in ETABS 22.6.0`), a.push(""), a.push("$ PROGRAM INFORMATION"), a.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), a.push(""), a.push("$ CONTROLS"), a.push(`  UNITS  "${Y}"  "${u}"  "C"  `), a.push('  TITLE1  "Hekatan Struct export"  '), x && a.push(`  TITLE2  "${x}"  `), a.push("  PREFERENCE  MERGETOL 0.1  "), a.push("");
  const m = /* @__PURE__ */ new Set();
  O.forEach((e) => m.add(S(e[2])));
  const d = [...m].sort((e, s) => e - s), l = [], n = /* @__PURE__ */ new Map();
  l.push("Base"), n.set(d[0], "Base");
  for (let e = 1; e < d.length; e++) {
    const s = `Level_${e}`;
    l.push(s), n.set(d[e], s);
  }
  a.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = d.length - 1; e >= 1; e--) a.push(`  STORY "${l[e]}"  HEIGHT ${S(d[e] - d[e - 1])} MASTERSTORY "Yes"  `);
  d.length > 0 && a.push(`  STORY "Base"  ELEV ${d[0]} `), a.push(""), M.some((e) => e.length === 4) && (a.push("$ DIAPHRAGM NAMES"), a.push('  DIAPHRAGM "D1"    TYPE RIGID'), a.push("")), a.push("$ MATERIAL PROPERTIES");
  const f = /* @__PURE__ */ new Set();
  (_a = T.elasticities) == null ? void 0 : _a.forEach((e) => f.add(e));
  const N = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map();
  let L = 0, y = 0;
  const J = 980665e-8, D = /* @__PURE__ */ new Map();
  if (T.densities && T.densities.size > 0) {
    const e = /* @__PURE__ */ new Map();
    T.densities.forEach((s, i) => {
      var _a2;
      const t = (_a2 = T.elasticities) == null ? void 0 : _a2.get(i);
      t !== void 0 && (e.has(t) || e.set(t, []), e.get(t).push(s));
    }), e.forEach((s, i) => {
      const t = s.reduce((p, c) => p + c, 0) / s.length, r = t > 100 ? t * J : t * 9.80665;
      D.set(i, r);
    });
  }
  for (const e of f) {
    const s = e >= 1e8, i = s ? `Steel_${++L}` : `Conc_${++y}`;
    N.set(e, i), E.set(e, s);
    const t = D.get(e) ?? (s ? 76.97 : 24), r = z(e), p = P(t), c = s ? 0.3 : 0.2, R = s ? 117e-7 : 1e-5;
    if (s) {
      a.push(`  MATERIAL  "${i}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${S(p)}`), a.push(`  MATERIAL  "${i}"    SYMTYPE "Isotropic"  E ${S(r)}  U ${c}  A ${R}`);
      const g = 345e3, $ = 45e4;
      a.push(`  MATERIAL  "${i}"  FY ${S(z(g))}  FU ${S(z($))}  FYE ${S(z(g * 1.1))}  FUE ${S(z($ * 1.1))}`);
    } else a.push(`  MATERIAL  "${i}"    TYPE "Concrete"    WEIGHTPERVOLUME ${S(p)}`), a.push(`  MATERIAL  "${i}"    SYMTYPE "Isotropic"  E ${S(r)}  U ${c}  A ${R}`), a.push(`  MATERIAL  "${i}"    FC ${S(z(24e3))}`);
  }
  a.push(""), a.push("$ FRAME SECTIONS");
  const H = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), K = 0.05;
  M.forEach((e, s) => {
    var _a2, _b2, _c2, _d2, _e, _f;
    if (e.length !== 2) return;
    const i = (_a2 = T.sectionShapes) == null ? void 0 : _a2.get(s), t = ((_b2 = T.elasticities) == null ? void 0 : _b2.get(s)) ?? 0, r = N.get(t) || "Conc_1", p = E.get(t) ?? t >= 1e8, c = ((_c2 = T.areas) == null ? void 0 : _c2.get(s)) ?? 0, R = ((_d2 = T.momentsOfInertiaY) == null ? void 0 : _d2.get(s)) ?? 0;
    (_e = T.momentsOfInertiaZ) == null ? void 0 : _e.get(s), (_f = T.torsionalConstants) == null ? void 0 : _f.get(s);
    let g = (i == null ? void 0 : i.type) || "rect", $ = (i == null ? void 0 : i.h) ?? 0, C = (i == null ? void 0 : i.b) ?? 0, w = (i == null ? void 0 : i.d) ?? 0;
    const W = (i == null ? void 0 : i.tf) ?? 0, Z = (i == null ? void 0 : i.tw) ?? 0;
    $ <= 0 && C <= 0 && w <= 0 && c > 0 && (R > 0 ? ($ = Math.sqrt(12 * R / c), C = c / $) : $ = C = Math.sqrt(c), (!isFinite($) || $ < K) && ($ = K), (!isFinite(C) || C < K) && (C = K), g = "rect"), $ <= 0 && C <= 0 && w <= 0 && ($ = 0.3, C = 0.3, g = "rect");
    const _ = `${g}_${S($)}_${S(C)}_${S(w)}_${S(W)}_${S(Z)}_${r}`;
    (i == null ? void 0 : i.name) && !V.has(_) && V.set(_, i.name);
    let tt = V.get(_);
    if (!tt) {
      const lt = p ? "S" : "C";
      g === "rect" ? tt = `${lt}_R${Math.round(C * 100)}x${Math.round($ * 100)}` : g === "circ" ? tt = `${lt}_C_D${Math.round(w * 100)}` : g === "I" ? tt = `${lt}_I${Math.round($ * 100)}x${Math.round(C * 100)}` : g === "HSS" ? tt = `${lt}_HSS${Math.round(C * 100)}x${Math.round($ * 100)}x${Math.round(Z * 1e3)}` : tt = `${lt}_Sec${H.size + 1}`, V.set(_, tt);
    }
    if (X.set(s, tt), H.has(tt)) return;
    H.add(tt);
    let st;
    g === "I" ? st = "Steel I/Wide Flange" : g === "HSS" ? st = "Steel Tube" : g === "CFT" ? st = "Filled Steel Tube" : g === "pipe" ? st = "Steel Pipe" : g === "L" ? st = "Steel Angle" : g === "C" ? st = "Steel Channel" : g === "2C" ? st = "Steel Double Channel" : g === "circ" ? st = "Concrete Circle" : st = "Concrete Rectangular";
    let ct = `  FRAMESECTION  "${tt}"  MATERIAL "${r}"  SHAPE "${st}"`;
    $ && (ct += `  D ${S($)}`), C && (ct += `  B ${S(C)}`), w && !$ && (ct += `  D ${S(w)}`), W && (ct += `  TF ${S(W)}`), Z && (ct += `  TW ${S(Z)}`), a.push(ct);
  }), a.push("");
  const et = /* @__PURE__ */ new Map();
  let q = 0;
  O.forEach((e) => {
    const s = `${S(e[0])},${S(e[1])}`;
    et.has(s) || et.set(s, `${++q}`);
  }), a.push("$ POINT COORDINATES");
  for (const [e, s] of et) {
    const [i, t] = e.split(",").map(Number);
    a.push(`  POINT "${s}"  ${i} ${t} `);
  }
  a.push("");
  const Q = (e) => {
    const s = O[e], i = `${S(s[0])},${S(s[1])}`;
    return { pt: et.get(i) || "1", story: n.get(S(s[2])) || "Base" };
  }, j = (e) => {
    var _a2, _b2, _c2, _d2;
    const s = [], i = (_a2 = I.propertyModifiers) == null ? void 0 : _a2.get(e);
    i && i.some((c) => Math.abs(c - 1) > 1e-9) && s.push(`PROPMODIFIERS "${i.map((c) => S(c)).join(" ")}"`);
    const t = (_b2 = T.momentReleases) == null ? void 0 : _b2.get(e);
    if (t && t.some((c) => c)) {
      const c = [];
      t.length === 12 ? (t[0] && c.push("PI"), t[1] && c.push("V2I"), t[2] && c.push("V3I"), t[3] && c.push("TI"), t[4] && c.push("M2I"), t[5] && c.push("M3I"), t[6] && c.push("PJ"), t[7] && c.push("V2J"), t[8] && c.push("V3J"), t[9] && c.push("TJ"), t[10] && c.push("M2J"), t[11] && c.push("M3J")) : t.length === 6 && (t[0] && c.push("TI"), t[1] && c.push("M2I"), t[2] && c.push("M3I"), t[3] && c.push("TJ"), t[4] && c.push("M2J"), t[5] && c.push("M3J")), c.length > 0 && s.push(`RELEASE "${c.join(" ")}"`);
    }
    const r = (_c2 = T.insertionPoints) == null ? void 0 : _c2.get(e);
    r && (Math.abs(r[0]) > 1e-9 || Math.abs(r[1]) > 1e-9) && s.push(`LATEROFFSET ${S(r[0])} TRANSOFFSET ${S(r[1])}`);
    const p = (_d2 = T.rigidOffsets) == null ? void 0 : _d2.get(e);
    return p && (Math.abs(p[0]) > 1e-9 || Math.abs(p[1]) > 1e-9) && s.push(`LENGTHOFFI ${S(p[0])} LENGTHOFFJ ${S(p[1])} RIGIDZONE 0.5`), s.length > 0 ? ` ${s.join(" ")} ` : "";
  };
  a.push("$ LINE CONNECTIVITIES");
  const at = [];
  M.forEach((e, s) => {
    if (e.length !== 2) return;
    const i = Tt(O, e), t = X.get(s) || `Sec_${s}`, r = j(s);
    if (i === "BEAM") {
      const p = Q(e[0]), c = Q(e[1]);
      a.push(`  LINE  "E${s + 1}"  BEAM  "${p.pt}"  "${c.pt}"  0`), at.push(`  LINEASSIGN  "E${s + 1}"  "${p.story}"  SECTION "${t}" ${r} MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const p = O[e[0]][2] <= O[e[1]][2] ? e[0] : e[1], c = O[e[0]][2] <= O[e[1]][2] ? e[1] : e[0];
      Q(p);
      const R = Q(c), g = S(O[p][2]), $ = S(O[c][2]), C = d.indexOf(g), w = d.indexOf($), W = Math.max(1, w >= 0 && C >= 0 ? w - C : 1);
      a.push(`  LINE  "E${s + 1}"  ${i}  "${R.pt}"  "${R.pt}"  ${W}`);
      for (let Z = 0; Z < W; Z++) {
        const _ = w - Z;
        _ >= 0 && _ < l.length && at.push(`  LINEASSIGN  "E${s + 1}"  "${l[_]}"  SECTION "${t}" ${r} MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      }
    }
  }), a.push("");
  const ot = I.weightMode ?? "auto", it = /* @__PURE__ */ new Set();
  a.push("$ POINT ASSIGNS"), (_b = A.supports) == null ? void 0 : _b.forEach((e, s) => {
    const i = [];
    if (e[0] && i.push("UX"), e[1] && i.push("UY"), e[2] && i.push("UZ"), e[3] && i.push("RX"), e[4] && i.push("RY"), e[5] && i.push("RZ"), i.length > 0) {
      const t = Q(s);
      a.push(`  POINTASSIGN  "${t.pt}"  "${t.story}"  RESTRAINT "${i.join(" ")}"  `), it.add(`${t.pt}@${t.story}`);
    }
  }), ot === "manual" && A.loads && A.loads.forEach((e, s) => {
    const i = Q(s), t = `${i.pt}@${i.story}`;
    it.has(t) || (a.push(`  POINTASSIGN  "${i.pt}"  "${i.story}"  DIAPH "DISCONNECTED"  `), it.add(t));
  }), a.push(""), a.push("$ LINE ASSIGNS"), at.forEach((e) => a.push(e)), a.push("");
  const nt = [];
  M.forEach((e, s) => {
    if (e.length === 4) {
      const i = O[e[0]], t = O[e[1]], r = O[e[2]], p = [t[0] - i[0], t[1] - i[1], t[2] - i[2]], c = [r[0] - i[0], r[1] - i[1], r[2] - i[2]], R = p[1] * c[2] - p[2] * c[1], g = p[2] * c[0] - p[0] * c[2], $ = p[0] * c[1] - p[1] * c[0], C = Math.sqrt(R * R + g * g + $ * $), w = C > 1e-10 && Math.abs($) / C < 0.5;
      nt.push({ idx: s, el: e, isWall: w });
    }
  });
  const rt = (() => {
    for (const [e, s] of E) if (!s) return N.get(e);
    return N.values().next().value || "Conc_1";
  })();
  if (nt.some((e) => !e.isWall)) {
    a.push("$ SLAB PROPERTIES");
    const e = ((_c = T.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
    a.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${rt}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${S(e)} `), a.push("");
  }
  if (nt.some((e) => e.isWall)) {
    a.push("$ WALL PROPERTIES");
    const e = ((_d = T.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
    a.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${rt}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${S(e)} `), a.push("");
  }
  if (nt.length > 0) {
    a.push("$ AREA CONNECTIVITIES");
    const e = [];
    nt.forEach((s, i) => {
      const { el: t, isWall: r } = s, p = r ? `W${i + 1}` : `F${i + 1}`, c = r ? "PANEL" : "FLOOR", R = t.map((g) => Q(g));
      if (r) {
        const g = O[t[0]][2] <= O[t[2]][2] ? 0 : 2, $ = O[t[1]][2] <= O[t[3]][2] ? 1 : 3;
        a.push(`  AREA "${p}"  ${c}  4  "${R[g].pt}"  "${R[$].pt}"  "${R[$].pt}"  "${R[g].pt}"  1  1  0  0  `);
        const C = R[g === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${p}"  "${C}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else a.push(`  AREA "${p}"  ${c}  4  "${R[0].pt}"  "${R[1].pt}"  "${R[2].pt}"  "${R[3].pt}"  0  0  0  0  `), e.push(`  AREAASSIGN  "${p}"  "${R[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
    }), a.push(""), a.push("$ AREA ASSIGNS"), e.forEach((s) => a.push(s)), a.push("");
  }
  const pt = ot === "manual" ? 0 : 1;
  a.push("$ LOAD PATTERNS"), a.push(`  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  ${pt}`), a.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), a.push("");
  const h = [];
  return A.loads && A.loads.size > 0 && A.loads.forEach((e, s) => {
    const [i, t, r] = e, p = Q(s);
    Math.abs(i) > 1e-10 && h.push(`  POINTLOAD  "${p.pt}"  "${p.story}"  TYPE "FORCE"  LC "Dead"  FX ${S(U(i))}  FY 0  FZ 0`), Math.abs(t) > 1e-10 && h.push(`  POINTLOAD  "${p.pt}"  "${p.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY ${S(U(t))}  FZ 0`), ot === "manual" && Math.abs(r) > 1e-10 && h.push(`  POINTLOAD  "${p.pt}"  "${p.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY 0  FZ ${S(U(r))}`);
  }), A.moments && A.moments.size > 0 && A.moments.forEach((e, s) => {
    const [i, t, r] = e, p = Q(s);
    Math.abs(i) > 1e-10 && h.push(`  POINTLOAD  "${p.pt}"  "${p.story}"  TYPE "MOMENT"  LC "Dead"  MX ${S(U(i))}  MY 0  MZ 0`), Math.abs(t) > 1e-10 && h.push(`  POINTLOAD  "${p.pt}"  "${p.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY ${S(U(t))}  MZ 0`), Math.abs(r) > 1e-10 && h.push(`  POINTLOAD  "${p.pt}"  "${p.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY 0  MZ ${S(U(r))}`);
  }), h.length > 0 && (a.push("$ POINT OBJECT LOADS"), h.forEach((e) => a.push(e)), a.push("")), a.push("$ LOAD CASES"), a.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), a.push('  LOADCASE "Dead"  LOADPAT  "Dead"  SF 1 '), a.push('  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), a.push('  LOADCASE "Live"  LOADPAT  "Live"  SF 1 '), a.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), a.push('  LOADCASE "Modal"  MAXMODES 12  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), a.push(""), a.push("$ LOAD COMBINATIONS"), a.push('  COMBO "1.4D"  TYPE "Linear Add"  '), a.push('  COMBO "1.4D"  LOADCASE  "Dead"  SF 1.4 '), a.push('  COMBO "1.2D+1.6L"  TYPE "Linear Add"  '), a.push('  COMBO "1.2D+1.6L"  LOADCASE  "Dead"  SF 1.2 '), a.push('  COMBO "1.2D+1.6L"  LOADCASE  "Live"  SF 1.6 '), a.push(""), a.push("  END"), a.push("$ END OF MODEL FILE"), a.join(`\r
`);
}
function Tt(I, O) {
  const M = I[O[0]], A = I[O[1]], T = Math.abs(A[2] - M[2]), x = Math.sqrt((A[0] - M[0]) ** 2 + (A[1] - M[1]) ** 2), B = T > x * 0.5;
  return B && x > 0.01 ? "BRACE" : B ? "COLUMN" : "BEAM";
}
export {
  Mt as a,
  It as b,
  At as c,
  gt as e,
  mt as p
};
