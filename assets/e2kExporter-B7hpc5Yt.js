function ht() {
  const N = document.createElement("div");
  N.id = "modal-results", N.style.cssText = `
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
  function m(I, y) {
    var _a, _b, _c, _d;
    if (!I.frequencies || I.frequencies.length === 0) {
      N.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const z = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], B = [0, 0, 0, 0, 0, 0], A = I.frequencies.length;
    let s = -1, T = -1, v = -1, H = 0, W = 0;
    {
      const a = [0, 0, 0, 0, 0, 0];
      for (let E = 0; E < A; E++) {
        const L = ((_a = I.massParticipation) == null ? void 0 : _a[E]) || [0, 0, 0, 0, 0, 0];
        for (let p = 0; p < 6; p++) a[p] += L[p];
        s < 0 && a[0] >= M && (s = E + 1), T < 0 && a[1] >= M && (T = E + 1), v < 0 && a[0] >= M && a[1] >= M && (v = E + 1);
      }
      H = a[0], W = a[1];
    }
    let b = -1, k = -1, D = -1;
    const u = 0.1;
    for (let a = 0; a < A; a++) {
      const E = ((_b = I.massParticipation) == null ? void 0 : _b[a]) || [0, 0, 0, 0, 0, 0];
      b < 0 && E[0] > u && (b = a + 1), k < 0 && E[1] > u && (k = a + 1), D < 0 && E[5] > u && (D = a + 1);
    }
    const f = v > 0 ? `<span style="color:#0f0">\u2713 ASCE 7-22 \xA712.9.1.1 \u2014 90 % alcanzado en X e Y al modo ${v} de ${A}</span>` : s > 0 && T < 0 ? `<span style="color:#fa0">\u26A0 X cumple en modo ${s}, Y todav\xEDa en ${(W * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : T > 0 && s < 0 ? `<span style="color:#fa0">\u26A0 Y cumple en modo ${T}, X todav\xEDa en ${(H * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : `<span style="color:#f44">\u2717 ASCE 7-22 NO cumplido en ${A} modos \xB7 \u03A3Ux=${(H * 100).toFixed(1)} % \xB7 \u03A3Uy=${(W * 100).toFixed(1)} % \u2014 aumentar nModes</span>`, e = (() => {
      const a = (E, L) => {
        var _a2;
        if (E < 0) return `<span style="color:#f44">${L}: no encontrado en ${A} modos</span>`;
        const p = ((_a2 = I.massParticipation) == null ? void 0 : _a2[E - 1]) || [0, 0, 0, 0, 0, 0], C = L === "Ux" ? 0 : L === "Uy" ? 1 : 5, R = I.frequencies[E - 1] > 0 ? 1 / I.frequencies[E - 1] : 0;
        return `<span style="color:#0f0">${L}: modo ${E}, T=${R.toFixed(3)} s, MPF=${(p[C] * 100).toFixed(1)} %</span>`;
      };
      return `<div style="margin:4px 0; padding:4px 6px; background:rgba(0,255,255,0.05); border-left:2px solid #0ff; font-size:11px;">
  \u{1F3AF} <b>Modos s\xEDsmicos principales</b> (ASCE 7-22 \xA712.9.1):<br>
  ${a(b, "Ux")} \xB7 ${a(k, "Uy")} \xB7 ${a(D, "Rz")}
</div>`;
    })();
    let t = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${y.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
    if (t += '<div id="modal-body" style="padding:0 12px 10px 12px;">', t += `<div style="padding:6px 0; font-weight:bold; font-size:13px;">${f}</div>`, t += e, y.properties) for (const a of y.properties) t += `<span style="color:#888">${a}</span>
`;
    t += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const a of z) t += `<th style="padding:2px 5px">${a}</th>`;
    t += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let a = 0; a < 6; a++) B[a] = 0;
    if (I.frequencies.forEach((a, E) => {
      var _a2;
      const L = a > 0 ? 1 / a : 0, p = a * 2 * Math.PI, C = ((_a2 = I.massParticipation) == null ? void 0 : _a2[E]) || [0, 0, 0, 0, 0, 0];
      for (let h = 0; h < 6; h++) B[h] += C[h];
      let R = 0, _ = C[0];
      for (let h = 1; h < 6; h++) C[h] > _ && (_ = C[h], R = h);
      const x = _ < 0.05 ? "\u2014" : `${z[R]} (${(_ * 100).toFixed(0)} %)`, j = R === 0 || R === 1 ? "#0f0" : R === 5 ? "#0ff" : R === 2 ? "#fa0" : "#888", st = E + 1 === s, V = E + 1 === T, at = E + 1 === v;
      t += `<tr style="border-bottom:1px solid #fff1; ${at ? "background:rgba(0,255,0,0.12);" : st || V ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${E + 1}${at ? " \u2605" : ""}</td>
  <td style="padding:2px 6px; text-align:right">${a.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${L.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${p.toFixed(2)}</td>`;
      for (let h = 0; h < 6; h++) {
        const $ = (C[h] * 100).toFixed(1), Y = C[h] > 0.5 ? "#f00" : C[h] > 0.1 ? "#ff0" : "#0f0";
        t += `<td style="padding:2px 5px; text-align:right; color:${Y}">${$}%</td>`;
      }
      const Q = B[0] >= M ? "#0f0" : "#0ff", i = B[1] >= M ? "#0f0" : "#0ff";
      t += `<td style="padding:2px 5px; text-align:right; color:${Q}">${(B[0] * 100).toFixed(1)}%${st ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${i}">${(B[1] * 100).toFixed(1)}%${V ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(B[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${j}">${x}</td></tr>`;
    }), t += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, t += "</div>", N.innerHTML = t, O) {
      const a = N.querySelector("#modal-body"), E = N.querySelector("#modal-minimize");
      a && (a.style.display = "none"), E && (E.textContent = "\u25A2", E.title = "Restaurar");
    }
    (_c = N.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      O = !O;
      const a = N.querySelector("#modal-body"), E = N.querySelector("#modal-minimize");
      O ? (a.style.display = "none", E.textContent = "\u25A2", E.title = "Restaurar") : (a.style.display = "block", E.textContent = "\u25AC", E.title = "Minimizar");
    }), (_d = N.querySelector("#modal-copy")) == null ? void 0 : _d.addEventListener("click", () => {
      const a = [];
      a.push(`Modal Analysis \u2014 ${y.title}`), a.push(f.replace(/<[^>]+>/g, ""));
      const E = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${z.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      a.push(E), a.push("-".repeat(E.length));
      const L = [0, 0, 0, 0, 0, 0];
      I.frequencies.forEach((C, R) => {
        var _a2;
        const _ = C > 0 ? 1 / C : 0, x = C * 2 * Math.PI, j = ((_a2 = I.massParticipation) == null ? void 0 : _a2[R]) || [0, 0, 0, 0, 0, 0];
        for (let Q = 0; Q < 6; Q++) L[Q] += j[Q];
        let st = 0, V = j[0];
        for (let Q = 1; Q < 6; Q++) j[Q] > V && (V = j[Q], st = Q);
        const at = V < 0.05 ? "\u2014" : `${z[st]} (${(V * 100).toFixed(0)}%)`, it = j.map((Q) => ((Q * 100).toFixed(1) + "%").padStart(6)).join(" ");
        a.push(`${String(R + 1).padStart(4)}  ${C.toFixed(4).padStart(9)}  ${_.toFixed(4).padStart(9)}  ${x.toFixed(2).padStart(9)}  ${it}  ${(L[0] * 100).toFixed(1).padStart(5)}%  ${(L[1] * 100).toFixed(1).padStart(5)}%  ${(L[5] * 100).toFixed(1).padStart(5)}%  ${at}`);
      }), navigator.clipboard.writeText(a.join(`
`));
      const p = N.querySelector("#modal-copy");
      p.textContent = "\u2713", setTimeout(() => p.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: N, render: m };
}
function St(N) {
  var _a;
  const O = N.split(/\r?\n/), M = { force: "TONF", length: "M" }, m = [], I = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), B = [], A = [], s = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), v = [], H = [];
  let W = "", b = "";
  const k = /* @__PURE__ */ new Map();
  for (const c of O) {
    const r = c.trim();
    if (!r || r.startsWith("$")) {
      r.startsWith("$ ") && (b = r.substring(2).trim());
      continue;
    }
    if (b && (k.has(b) || k.set(b, []), k.get(b).push(c)), b === "CONTROLS") {
      const o = r.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
      o && (M.force = o[1], M.length = o[2]);
      const S = r.match(/TITLE2\s+"([^"]+)"/);
      S && (W = S[1]);
    }
    if (b === "STORIES - IN SEQUENCE FROM TOP") {
      const o = r.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
      if (o) {
        const S = o[1], n = o[2] ? parseFloat(o[2]) : 0, l = o[3] ? parseFloat(o[3]) : void 0;
        m.push({ name: S, height: n, elev: l ?? 0 });
      }
    }
    if (b === "MATERIAL PROPERTIES") {
      const o = r.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
      if (o) {
        const S = o[1];
        I.has(S) || I.set(S, { type: o[2] || "", E: 0, G: 0, nu: 0 });
        const n = I.get(S);
        o[2] && (n.type = o[2]);
        const l = r.match(/\bE\s+([\d.eE+-]+)/);
        l && (n.E = parseFloat(l[1]));
        const g = r.match(/\bU\s+([\d.eE+-]+)/);
        g && (n.nu = parseFloat(g[1]), n.G = n.E / (2 * (1 + n.nu)));
        const d = r.match(/\bFY\s+([\d.eE+-]+)/);
        d && (n.fy = parseFloat(d[1]));
        const P = r.match(/\bFC\s+([\d.eE+-]+)/);
        P && (n.fc = parseFloat(P[1]));
        const U = r.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
        U && (n.density = parseFloat(U[1]));
      }
    }
    if (b === "FRAME SECTIONS") {
      const o = r.match(/FRAMESECTION\s+"([^"]+)"/);
      if (o) {
        const S = o[1];
        y.has(S) || y.set(S, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
        const n = y.get(S), l = r.match(/MATERIAL\s+"([^"]+)"/);
        l && (n.material = l[1]);
        const g = r.match(/SHAPE\s+"([^"]+)"/);
        g && (n.shape = g[1]);
        const d = r.match(/\bD\s+([\d.eE+-]+)/);
        d && (n.D = parseFloat(d[1]));
        const P = r.match(/\bB\s+([\d.eE+-]+)/);
        P && (n.B = parseFloat(P[1]));
        const U = r.match(/\bTF\s+([\d.eE+-]+)/);
        U && (n.TF = parseFloat(U[1]));
        const G = r.match(/\bTW\s+([\d.eE+-]+)/);
        G && (n.TW = parseFloat(G[1]));
        const tt = r.match(/\bR\s+([\d.eE+-]+)/);
        tt && (n.R = parseFloat(tt[1]));
        const K = r.match(/FILLMATERIAL\s+"([^"]+)"/);
        K && (n.fillMaterial = K[1]);
        const et = r.match(/I2MOD\s+([\d.eE+-]+)/);
        et && (n.modI2 = parseFloat(et[1]));
        const ot = r.match(/I3MOD\s+([\d.eE+-]+)/);
        ot && (n.modI3 = parseFloat(ot[1]));
      }
    }
    if (b === "POINT COORDINATES") {
      const o = r.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
      o && z.set(o[1], [parseFloat(o[2]), parseFloat(o[3])]);
    }
    if (b === "LINE CONNECTIVITIES") {
      const o = r.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
      o && B.push({ name: o[1], type: o[2], pt1: o[3], pt2: o[4], nStories: parseInt(o[5]) });
    }
    if (b === "POINT ASSIGNS") {
      const o = r.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
      o && s.set(`${o[1]}@${o[2]}`, o[3].split(/\s+/));
    }
    if (b === "LINE ASSIGNS") {
      const o = r.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
      if (o) {
        const S = { story: o[2], section: o[3], rigidZone: 0, releases: [], angle: 0 }, n = r.match(/RIGIDZONE\s+([\d.eE+-]+)/);
        n && (S.rigidZone = parseFloat(n[1]));
        const l = r.match(/RELEASE\s+"([^"]+)"/);
        l && (S.releases = l[1].split(/\s+/));
        const g = r.match(/ANG\s+([-\d.eE+]+)/);
        g && (S.angle = parseFloat(g[1])), T.set(`${o[1]}@${o[2]}`, S);
      }
    }
    if (b === "GRIDS") {
      const o = r.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
      o && H.push({ label: o[1], dir: o[2], coord: parseFloat(o[3]) });
    }
    if (b === "FRAME OBJECT LOADS") {
      const o = r.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      o && v.push({ line: o[1], story: o[2], type: o[3], dir: o[4], lc: o[5], val: parseFloat(o[6]) });
    }
    if (b === "AREA CONNECTIVITIES") {
      const o = r.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
      if (o) {
        const S = ((_a = o[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((n) => n.replace(/"/g, ""))) || [];
        A.push({ name: o[1], pts: S, nStories: 0 });
      }
    }
  }
  const D = /* @__PURE__ */ new Map();
  if (m.length > 0) {
    const c = m.length - 1;
    D.set(m[c].name, m[c].elev);
    for (let r = c - 1; r >= 0; r--) {
      const S = D.get(m[r + 1].name) + m[r].height;
      m[r].elev = S, D.set(m[r].name, S);
    }
  }
  const u = [], f = [], e = /* @__PURE__ */ new Map(), t = (c, r) => `${c}@${r}`, a = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Map();
  for (const c of B) E.set(c.name, c);
  for (const c of B) for (const [r, o] of T) {
    if (!r.startsWith(c.name + "@")) continue;
    const S = o.story, n = m.findIndex((l) => l.name === S);
    if (!(n < 0)) if (c.type === "COLUMN" || c.type === "BRACE") {
      a.add(t(c.pt2, S));
      const l = Math.max(c.nStories, 1), g = Math.min(n + l, m.length - 1);
      a.add(t(c.pt1, m[g].name));
    } else a.add(t(c.pt1, S)), a.add(t(c.pt2, S));
  }
  for (const [c] of s) a.add(c);
  for (const c of a) {
    const [r, o] = c.split("@"), S = z.get(r), n = D.get(o);
    S === void 0 || n === void 0 || (u.push([S[0], S[1], n]), f.push(c), e.set(c, u.length - 1));
  }
  const L = [], p = [], C = [], R = [], _ = /* @__PURE__ */ new Map();
  for (const c of B) for (const [r, o] of T) {
    if (!r.startsWith(c.name + "@")) continue;
    const S = o.story, n = m.findIndex((G) => G.name === S);
    if (n < 0) continue;
    let l, g;
    if (c.type === "COLUMN" || c.type === "BRACE") {
      const G = Math.max(c.nStories, 1), tt = Math.min(n + G, m.length - 1);
      l = t(c.pt1, m[tt].name), g = t(c.pt2, S);
    } else l = t(c.pt1, S), g = t(c.pt2, S);
    const d = e.get(l), P = e.get(g);
    if (d === void 0 || P === void 0 || d === P) continue;
    const U = L.length;
    if (L.push([d, P]), p.push(c.name), C.push(c.type), R.push(S), _.set(U, o.section), o.rigidZone > 0 && it.set(U, [o.rigidZone, o.rigidZone]), o.releases.length > 0) {
      const G = new Array(12).fill(false), tt = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const K of o.releases) {
        const et = tt[K];
        et !== void 0 && (G[et] = true);
      }
      Q.set(U, G);
    }
  }
  const x = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map();
  for (const [c, r] of _) {
    const o = y.get(r);
    if (!o) continue;
    const S = I.get(o.material);
    S && (x.set(c, S.E), j.set(c, S.G));
    const n = o.D, l = o.B, g = o.TF, d = o.TW;
    let P = 0, U = 0, G = 0, tt = 0, K = 0, et = 0, ot = "rect";
    switch (o.shape) {
      case "Concrete Rectangular":
        P = n * l, U = l * n ** 3 / 12, G = n * l ** 3 / 12, tt = l * n ** 3 * (1 / 3 - 0.21 * (n / l) * (1 - n ** 4 / (12 * l ** 4))), K = et = 5 / 6 * P, ot = "rect";
        break;
      case "Concrete Circle":
        P = Math.PI * n ** 2 / 4, U = G = Math.PI * n ** 4 / 64, tt = Math.PI * n ** 4 / 32, K = et = 0.9 * P, ot = "circ";
        break;
      case "Steel I/Wide Flange":
        P = 2 * l * g + (n - 2 * g) * d, U = (l * n ** 3 - (l - d) * (n - 2 * g) ** 3) / 12, G = (2 * g * l ** 3 + (n - 2 * g) * d ** 3) / 12, tt = (2 * l * g ** 3 + (n - 2 * g) * d ** 3) / 3, K = (n - 2 * g) * d, et = 2 * l * g * 5 / 6, ot = "I";
        break;
      case "Steel Tube":
        P = n * l - (n - 2 * d) * (l - 2 * d), U = (l * n ** 3 - (l - 2 * d) * (n - 2 * d) ** 3) / 12, G = (n * l ** 3 - (n - 2 * d) * (l - 2 * d) ** 3) / 12, tt = 2 * d * (n - d) * (l - d) * ((n - d) * (l - d)) / (n - d + (l - d)), K = 2 * n * d, et = 2 * l * d, ot = "HSS";
        break;
      case "Filled Steel Tube":
        P = n * l, U = l * n ** 3 / 12, G = n * l ** 3 / 12, tt = 2 * d * (n - d) * (l - d) * ((n - d) * (l - d)) / (n - d + (l - d)), K = 2 * n * d + 5 / 6 * (n - 2 * d) * (l - 2 * d), et = 2 * l * d + 5 / 6 * (n - 2 * d) * (l - 2 * d), ot = "CFT";
        break;
      case "Steel Angle": {
        const nt = g || d;
        P = nt * (n + l - nt), U = nt * (n ** 3 + l * nt ** 2 + nt ** 2 * (n - nt)) / 12, G = nt * (l ** 3 + n * nt ** 2 + nt ** 2 * (l - nt)) / 12, tt = (n + l - nt) * nt ** 3 / 3, K = n * nt, et = l * nt, ot = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        P = 2 * l * g + (n - 2 * g) * d, U = (d * n ** 3 + 2 * l * g * (n - g) ** 2) / 12, G = (2 * g * l ** 3 + (n - 2 * g) * d ** 3) / 12, tt = (2 * l * g ** 3 + (n - 2 * g) * d ** 3) / 3, K = (n - 2 * g) * d, et = 2 * l * g * 5 / 6, ot = o.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        P = 2 * (2 * l * g + (n - 2 * g) * d), U = 2 * (d * n ** 3 + 2 * l * g * (n - g) ** 2) / 12, G = 2 * (2 * g * l ** 3 + (n - 2 * g) * d ** 3) / 12, tt = 2 * (2 * l * g ** 3 + (n - 2 * g) * d ** 3) / 3, K = 2 * (n - 2 * g) * d, et = 4 * l * g * 5 / 6, ot = "2C";
        break;
      default:
        n > 0 && l > 0 && (P = n * l, U = l * n ** 3 / 12, G = n * l ** 3 / 12, tt = Math.min(n, l) * Math.max(n, l) ** 3 / 3 * 0.3, K = et = 5 / 6 * P);
        break;
    }
    o.modI2 && (G *= o.modI2), o.modI3 && (U *= o.modI3), st.set(c, P), i.set(c, U), h.set(c, G), $.set(c, tt), K > 0 && V.set(c, K), et > 0 && at.set(c, et), Y.set(c, { type: ot, b: l || void 0, h: n || void 0, d: ot === "circ" || ot === "pipe" ? n : void 0, tw: d || void 0, tf: g || void 0, r: o.R, name: r });
  }
  const Z = /* @__PURE__ */ new Map();
  for (const [c, r] of s) {
    const o = e.get(c);
    if (o === void 0) continue;
    const S = [false, false, false, false, false, false];
    for (const n of r) n === "UX" && (S[0] = true), n === "UY" && (S[1] = true), n === "UZ" && (S[2] = true), n === "RX" && (S[3] = true), n === "RY" && (S[4] = true), n === "RZ" && (S[5] = true);
    Z.set(o, S);
  }
  const F = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map();
  for (let c = 0; c < p.length; c++) q.set(`${p[c]}@${R[c]}`, c);
  for (const c of v) {
    const r = q.get(`${c.line}@${c.story}`);
    if (r === void 0) continue;
    const [o, S] = L[r], n = u[o], l = u[S], g = Math.sqrt((l[0] - n[0]) ** 2 + (l[1] - n[1]) ** 2 + (l[2] - n[2]) ** 2);
    if (g < 1e-10) continue;
    const d = c.val * g / 2;
    let P = 0, U = 0, G = 0;
    c.dir === "GRAV" || c.dir === "GRAVITY" ? G = -d : c.dir === "X" ? P = d : c.dir === "Y" ? U = d : c.dir === "Z" && (G = -d);
    for (const tt of [o, S]) {
      const K = F.get(tt) || [0, 0, 0, 0, 0, 0];
      K[0] += P, K[1] += U, K[2] += G, F.set(tt, K);
    }
  }
  const X = /* @__PURE__ */ new Map();
  for (const [c, r] of _) {
    const o = y.get(r);
    if (!o) continue;
    const S = I.get(o.material);
    (S == null ? void 0 : S.density) && X.set(c, S.density);
  }
  return { units: M, stories: m.reverse(), materials: I, frameSections: y, nodes: u, nodeNames: f, nodeNameToIdx: e, elements: L, elementNames: p, elementTypes: C, elementStories: R, elementSections: _, nodeInputs: { supports: Z, loads: F }, elementInputs: { elasticities: x, shearModuli: j, areas: st, momentsOfInertiaZ: i, momentsOfInertiaY: h, torsionalConstants: $, shearAreasY: V, shearAreasZ: at, rigidOffsets: it, momentReleases: Q, densities: X, sectionShapes: Y }, sectionShapes: Y, grids: H, info: { nNodes: u.length, nFrames: L.length, nAreas: A.length, title: W }, rawSections: k };
}
function w(N) {
  return N && parseFloat(N) || 0;
}
function ct(N) {
  const O = /* @__PURE__ */ new Map(), M = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let m;
  for (; (m = M.exec(N)) !== null; ) O.set(m[1], m[2] !== void 0 ? m[2] : m[3]);
  return O;
}
function At(N) {
  const O = N.split(/\r?\n/);
  return O.some((m) => m.trim().startsWith("TABLE:")) ? lt(O) : pt(O);
}
function lt(N) {
  var _a, _b, _c, _d, _e, _f;
  const O = [];
  let M = "";
  for (const D of N) {
    const u = D.trimEnd();
    u.endsWith("_") ? M += u.slice(0, -1) + " " : (M += u, O.push(M), M = "");
  }
  M && O.push(M);
  const m = { force: "KN", length: "m" };
  let I = "UX,UY,UZ,RX,RY,RZ";
  const y = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), s = [], T = [], v = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), b = [];
  let k = "";
  for (const D of O) {
    const u = D.trim();
    if (!u || u.startsWith(";") || u.startsWith("File ")) continue;
    if (u.startsWith("TABLE:")) {
      const e = u.match(/TABLE:\s+"(.+?)"/);
      k = e ? e[1].toUpperCase() : "";
      continue;
    }
    if (u === "END TABLE DATA") {
      k = "";
      continue;
    }
    const f = ct(u);
    switch (k) {
      case "PROGRAM CONTROL": {
        const e = f.get("CurrUnits");
        if (e) {
          const t = e.split(",").map((a) => a.trim());
          t[0] && (m.force = t[0]), t[1] && (m.length = t[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const e = f.get("Material");
        e && !y.has(e) && y.set(e, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const e = f.get("Material");
        if (e) {
          const t = y.get(e) || { E: 0, nu: 0, G: 0 };
          t.E = w(f.get("E1")), t.G = w(f.get("G12")), t.nu = w(f.get("U12")), t.density = w(f.get("UnitMass")), y.set(e, t);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const e = f.get("Material");
        e && y.has(e) && (y.get(e).fy = w(f.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const e = f.get("SectionName");
        e && z.set(e, { material: f.get("Material") || "", shape: f.get("Shape") || "Rectangular", D: w(f.get("t3")), B: w(f.get("t2")), TF: w(f.get("tf")), TW: w(f.get("tw")), A: w(f.get("Area")), Iz: w(f.get("I33")), Iy: w(f.get("I22")), J: w(f.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const e = f.get("Section");
        e && B.set(e, { material: f.get("Material") || "", type: f.get("Type") || "Shell", thickness: w(f.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const e = f.get("Joint");
        if (e) {
          const t = w(f.get("XorR")), a = w(f.get("Y")), E = w(f.get("Z"));
          A.set(e, [t, a, E]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const e = f.get("Frame"), t = f.get("JointI"), a = f.get("JointJ");
        e && t && a && s.push({ name: e, j1: t, j2: a });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const e = f.get("Area");
        if (e) {
          const t = parseInt(f.get("NumJoints") || "4"), a = [];
          for (let E = 1; E <= t; E++) {
            const L = f.get(`Joint${E}`);
            L && a.push(L);
          }
          a.length >= 3 && T.push({ name: e, joints: a });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const e = f.get("Joint");
        if (e) {
          const t = [((_a = f.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = f.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = f.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = f.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = f.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = f.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          v.set(e, t);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const e = f.get("Frame"), t = f.get("AnalSect");
        e && t && H.set(e, t);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const e = f.get("Area"), t = f.get("Section");
        e && t && W.set(e, t);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const e = f.get("Joint");
        e && b.push({ joint: e, fx: w(f.get("F1")), fy: w(f.get("F2")), fz: w(f.get("F3")), mx: w(f.get("M1")), my: w(f.get("M2")), mz: w(f.get("M3")) });
        break;
      }
    }
  }
  return rt(m, I, y, z, B, A, s, T, v, H, W, b);
}
function pt(N) {
  const O = { force: "KN", length: "m" };
  let M = "UX,UY,UZ,RX,RY,RZ";
  const m = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), B = [], A = [], s = /* @__PURE__ */ new Map(), T = [];
  let v = "", H = "";
  for (const k of N) {
    const D = k.trim();
    if (!D || D.startsWith(";")) continue;
    if (!k.startsWith(" ") && !k.startsWith("	")) {
      const e = D.toUpperCase();
      if (e === "END") break;
      e.startsWith("SHELL SECTION") ? v = "SHELL SECTION" : e.startsWith("FRAME SECTION") ? v = "FRAME SECTION" : v = e.split(/\s+/)[0];
      continue;
    }
    const u = ct(D), f = D.split(/\s+/);
    switch (v) {
      case "SYSTEM": {
        const e = u.get("DOF");
        e && (M = e);
        const t = u.get("LENGTH");
        t && (O.length = t);
        const a = u.get("FORCE");
        a && (O.force = a);
        break;
      }
      case "JOINT": {
        const e = f[0];
        z.set(e, [w(u.get("X")), w(u.get("Y")), w(u.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const e = u.get("ADD"), t = u.get("DOF");
        if (e && t) {
          const a = t.split(","), E = [false, false, false, false, false, false];
          for (const L of a) {
            const p = L.toUpperCase();
            (p === "UX" || p === "U1") && (E[0] = true), (p === "UY" || p === "U2") && (E[1] = true), (p === "UZ" || p === "U3") && (E[2] = true), (p === "RX" || p === "R1") && (E[3] = true), (p === "RY" || p === "R2") && (E[4] = true), (p === "RZ" || p === "R3") && (E[5] = true);
          }
          s.set(e, E);
        }
        break;
      }
      case "MATERIAL": {
        const e = u.get("NAME");
        if (e) H = e, m.set(e, { E: 0, nu: 0, G: 0 });
        else if (H) {
          const t = m.get(H), a = u.get("E");
          a && (t.E = w(a));
          const E = u.get("U");
          E && (t.nu = w(E)), t.G = t.E / (2 * (1 + t.nu));
          const L = u.get("M");
          L && (t.density = w(L));
        }
        break;
      }
      case "SHELL": {
        const e = f[0], t = u.get("J");
        u.get("SEC"), t && A.push({ name: e, joints: t.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const e = u.get("NAME");
        e && y.set(e, { material: u.get("MAT") || "", type: u.get("TYPE") || "Shell", thickness: w(u.get("TH")) });
        break;
      }
      case "FRAME": {
        const e = f[0], t = u.get("J");
        if (t) {
          const a = t.split(",");
          a.length >= 2 && B.push({ name: e, j1: a[0], j2: a[1] });
        }
        break;
      }
      case "LOAD": {
        const e = u.get("ADD");
        e && T.push({ joint: e, fx: w(u.get("UX")), fy: w(u.get("UY")), fz: w(u.get("UZ")), mx: w(u.get("MX")), my: w(u.get("MY")), mz: w(u.get("MZ")) });
        break;
      }
    }
  }
  return rt(O, M, m, I, y, z, B, A, s, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), T);
}
function rt(N, O, M, m, I, y, z, B, A, s, T, v) {
  var _a;
  const H = [], W = /* @__PURE__ */ new Map(), b = [];
  for (const [p, C] of y) W.set(p, b.length), H.push(p), b.push(C);
  const k = [], D = [], u = /* @__PURE__ */ new Map();
  for (const p of z) {
    const C = W.get(p.j1), R = W.get(p.j2);
    if (C !== void 0 && R !== void 0) {
      const _ = k.length;
      k.push([C, R]), D.push(p.name);
      const x = s.get(p.name);
      x && u.set(_, x);
    }
  }
  const f = k.length;
  for (const p of B) {
    const C = p.joints.map((R) => W.get(R)).filter((R) => R !== void 0);
    if (C.length >= 3) {
      const R = k.length;
      k.push(C), D.push(p.name);
      const _ = T.get(p.name);
      _ && u.set(R, _);
    }
  }
  const e = k.length - f, t = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, a = /* @__PURE__ */ new Map(), E = M.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let p = 0; p < k.length; p++) {
    const C = u.get(p), R = C ? m.get(C) : null, _ = C ? I.get(C) : null;
    if (R || k[p].length === 2) {
      const x = R || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, j = M.get(x.material) || E, st = j.E || E.E, V = j.nu || 0.3, at = j.G || st / (2 * (1 + V));
      t.elasticities.set(p, st), t.shearModuli.set(p, at), t.areas.set(p, x.A || x.D * x.B), t.momentsOfInertiaZ.set(p, x.Iz || x.B * x.D ** 3 / 12), t.momentsOfInertiaY.set(p, x.Iy || x.D * x.B ** 3 / 12), t.torsionalConstants.set(p, x.J || 0), t.densities.set(p, j.density || 0), ((_a = x.shape) == null ? void 0 : _a.includes("Wide Flange")) || x.shape === "I" ? a.set(p, { type: "I", b: x.B, h: x.D, name: C || "I-section" }) : a.set(p, { type: "rect", b: x.B, h: x.D });
    } else if (_) {
      const x = M.get(_.material) || E, j = x.E || E.E, st = x.nu || 0.2, V = x.G || j / (2 * (1 + st));
      t.elasticities.set(p, j), t.shearModuli.set(p, V), t.thicknesses.set(p, _.thickness), t.poissonsRatios.set(p, st), t.densities.set(p, x.density || 0);
    }
  }
  const L = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [p, C] of A) {
    const R = W.get(p);
    R !== void 0 && L.supports.set(R, C);
  }
  for (const p of v) {
    const C = W.get(p.joint);
    if (C !== void 0) {
      const R = L.forces.get(C) || [0, 0, 0, 0, 0, 0];
      R[0] += p.fx, R[1] += p.fy, R[2] += p.fz, R[3] += p.mx, R[4] += p.my, R[5] += p.mz, L.forces.set(C, R);
    }
  }
  return { units: N, dof: O, materials: M, frameSections: m, shellSections: I, nodes: b, nodeNames: H, nodeNameToIdx: W, elements: k, elementNames: D, elementSections: u, nodeInputs: L, elementInputs: t, sectionShapes: a, info: { nNodes: b.length, nFrames: f, nShells: e, title: `SAP2000 (${f} frames, ${e} shells)` } };
}
function ut(N) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: O, elements: M, nodeInputs: m, elementInputs: I } = N, y = N.units || { force: "KN", length: "m" }, z = N.title || "Awatif Model", B = [], A = (e) => B.push(e), s = () => B.push(" ");
  A(`File ${z}.$2k was saved on m/d/yy at h:mm:ss`), s(), A('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), A("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), s();
  const T = [], v = [];
  if (M.forEach((e, t) => {
    e.length === 2 ? T.push(t) : v.push(t);
  }), T.length > 0) {
    A('TABLE:  "CONNECTIVITY - FRAME"');
    for (const e of T) {
      const t = M[e];
      A(`   Frame=${e + 1}   JointI=${t[0] + 1}   JointJ=${t[1] + 1}   IsCurved=No`);
    }
    s();
  }
  if (v.length > 0) {
    A('TABLE:  "CONNECTIVITY - AREA"');
    for (const e of v) {
      const t = M[e], a = t.map((E, L) => `Joint${L + 1}=${E + 1}`).join("   ");
      A(`   Area=${e + 1}   NumJoints=${t.length}   ${a}`);
    }
    s();
  }
  A('TABLE:  "COORDINATE SYSTEMS"'), A("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), s(), A('TABLE:  "DATABASE FORMAT TYPES"'), A("   UnitsCurr=Yes   OverrideE=No"), s();
  const H = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map();
  for (const e of T) {
    const t = ((_a = I.areas) == null ? void 0 : _a.get(e)) || 0, a = ((_b = I.momentsOfInertiaZ) == null ? void 0 : _b.get(e)) || 0, E = ((_c = I.momentsOfInertiaY) == null ? void 0 : _c.get(e)) || 0, L = ((_d = I.torsionalConstants) == null ? void 0 : _d.get(e)) || 0, p = ((_e = I.elasticities) == null ? void 0 : _e.get(e)) || 0, C = `MAT_${Math.round(p)}`, R = `A${t.toPrecision(6)}_Iz${a.toPrecision(6)}`;
    if (!H.has(R)) {
      let x = 0.3, j = 0.3;
      t > 0 && a > 0 && (x = Math.sqrt(12 * a / t), j = t / x), H.set(R, { A: t, Iz: a, Iy: E, J: L, b: j, h: x, matKey: C });
    }
    const _ = [...H.keys()].indexOf(R) + 1;
    W.set(e, `SEC${_}`);
  }
  if (T.length > 0) {
    A('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const e of T) {
      const t = W.get(e) || "SEC1";
      A(`   Frame=${e + 1}   AutoSelect=N.A.   AnalSect=${t}   MatProp=Default`);
    }
    s();
  }
  if (H.size > 0) {
    A('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let e = 0;
    for (const [, t] of H) {
      e++;
      const a = t.A * 5 / 6;
      A(`   SectionName=SEC${e}   Material=${t.matKey}   Shape=Rectangular   t3=${J(t.h)}   t2=${J(t.b)}   Area=${J(t.A)}   TorsConst=${J(t.J)}   I33=${J(t.Iz)}   I22=${J(t.Iy)}   I23=0   AS2=${J(a)}   AS3=${J(a)} _`), A("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    s();
  }
  const b = !!N.layeredSection && v.length > 0, k = N.layeredSection, D = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  if (!b) for (const e of v) {
    const t = ((_f = I.thicknesses) == null ? void 0 : _f.get(e)) || 0.1, a = ((_g = I.elasticities) == null ? void 0 : _g.get(e)) || 0, E = `MAT_${Math.round(a)}`, L = `t${t.toPrecision(6)}`;
    D.has(L) || D.set(L, { t, matKey: E });
    const p = [...D.keys()].indexOf(L) + 1;
    u.set(e, `SSEC${p}`);
  }
  if (v.length > 0) {
    A('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const e of v) {
      const t = b ? k.name : u.get(e) || "SSEC1";
      A(`   Area=${e + 1}   Section=${t}   MatProp=Default`);
    }
    if (s(), A('TABLE:  "AREA SECTION PROPERTIES"'), b) {
      const e = k, t = ((_h = e.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      A(`   Section=${e.name}   Material=${t}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${J(e.totalThickness)}   BendThick=${J(e.totalThickness)}   Color=Magenta`);
    } else {
      let e = 0;
      for (const [, t] of D) e++, A(`   Section=SSEC${e}   Material=${t.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${J(t.t)}   BendThick=${J(t.t)}   Color=Cyan`);
    }
    if (s(), b) {
      A('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const e = k;
      for (const t of e.layers) {
        const a = t.angle ?? 0, E = t.numIntPts ?? 3;
        A(`   Section=${e.name}   LayerName=${t.name}   Distance=${J(t.distance)}   Thickness=${J(t.thickness)}   Type=Shell   NumIntPts=${E}   Material=${t.material}   MatAngle=${J(a * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      s();
    }
  }
  A('TABLE:  "JOINT COORDINATES"');
  for (let e = 0; e < O.length; e++) {
    const t = O[e];
    A(`   Joint=${e + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${J(t[0])}   Y=${J(t[1])}   Z=${J(t[2])}   SpecialJt=No`);
  }
  if (s(), m.supports && m.supports.size > 0) {
    A('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [e, t] of m.supports) {
      if (!t.some((E) => E)) continue;
      const a = (E) => E ? "Yes" : "No";
      A(`   Joint=${e + 1}   U1=${a(t[0])}   U2=${a(t[1])}   U3=${a(t[2])}   R1=${a(t[3])}   R2=${a(t[4])}   R3=${a(t[5])}`);
    }
    s();
  }
  if (A('TABLE:  "LOAD PATTERN DEFINITIONS"'), A("   LoadPat=DEAD   DesignType=Dead   SelfWtMult=0"), s(), A('TABLE:  "LOAD CASE DEFINITIONS"'), A('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), s(), A('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), A('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), s(), m.forces && m.forces.size > 0) {
    A('TABLE:  "JOINT LOADS - FORCE"');
    for (const [e, t] of m.forces) t.some((a) => Math.abs(a) > 1e-12) && A(`   Joint=${e + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${J(t[0])}   F2=${J(t[1])}   F3=${J(t[2])}   M1=${J(t[3])}   M2=${J(t[4])}   M3=${J(t[5])}`);
    s();
  }
  const f = /* @__PURE__ */ new Map();
  for (let e = 0; e < M.length; e++) {
    const t = ((_i = I.elasticities) == null ? void 0 : _i.get(e)) || 0, a = ((_j = I.shearModuli) == null ? void 0 : _j.get(e)) || 0, E = t > 0 && a > 0 ? Math.max(0, Math.min(0.5, t / (2 * a) - 1)) : 0.2, L = ((_k = I.densities) == null ? void 0 : _k.get(e)) || 0, p = `MAT_${Math.round(t)}`;
    f.has(p) || f.set(p, { E: t, nu: E, G: a, rho: L });
  }
  A('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [e] of f) A(`   Material=${e}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  s(), A('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [e, t] of f) A(`   Material=${e}   UnitWeight=${J(t.rho * 9.81)}   UnitMass=${J(t.rho)}   E1=${J(t.E)}   G12=${J(t.G)}   U12=${J(t.nu)}   A1=9.9E-06`);
  s(), A('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [e] of f) A(`   Material=${e}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return s(), A('TABLE:  "PROGRAM CONTROL"'), A(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${y.force}, ${y.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), s(), A("END TABLE DATA"), A(""), B.join(`\r
`);
}
function J(N) {
  return N === 0 || Math.abs(N) < 1e-15 ? "0" : Math.abs(N) >= 1e6 || Math.abs(N) < 1e-3 && Math.abs(N) > 0 ? N.toExponential(8) : parseFloat(N.toPrecision(10)).toString();
}
function Tt(N) {
  const { nodes: O, elements: M, nodeInputs: m, elementInputs: I, title: y, e2kModel: z } = N, B = z == null ? void 0 : z.rawSections;
  return B && B.size > 0 ? ft(B) : Et(N);
}
function ft(N, O) {
  const M = [], m = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  M.push("$ File exported from Awatif FEM Studio (round-trip)"), M.push("");
  for (const I of m) {
    const y = N.get(I);
    if (!(!y || y.length === 0)) {
      M.push(`$ ${I}`);
      for (const z of y) M.push(z);
      M.push("");
    }
  }
  for (const [I, y] of N) if (!m.includes(I) && y.length !== 0) {
    M.push(`$ ${I}`);
    for (const z of y) M.push(z);
    M.push("");
  }
  return M.push("  END"), M.push("$ END OF MODEL FILE"), M.join(`\r
`);
}
function Et(N) {
  var _a, _b, _c, _d;
  const { nodes: O, elements: M, nodeInputs: m, elementInputs: I, title: y, units: z } = N, B = (z == null ? void 0 : z.force) || "Tonf", A = (z == null ? void 0 : z.length) || "m", s = [], T = (i) => Math.round(i * 1e4) / 1e4, v = (() => {
    const i = (B || "Tonf").toLowerCase();
    return i === "tonf" || i === "tonf-f" ? 1 / 9.80665 : i === "kn" || i === "kn-f" ? 1 : i === "kgf" || i === "kg" ? 1 / 980665e-8 : i === "kip" || i === "kips" ? 1 / 4.44822 : 1;
  })(), H = (i) => i * v, W = (i) => i * v, b = (i) => i * v;
  s.push("$ File exported from Awatif FEM Studio"), s.push(""), s.push("$ PROGRAM INFORMATION"), s.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), s.push(""), s.push("$ CONTROLS"), s.push(`  UNITS  "${B}"  "${A}"  "C"  `), y && s.push(`  TITLE2  "${y}"  `), s.push("");
  const k = /* @__PURE__ */ new Set();
  O.forEach((i) => k.add(T(i[2])));
  const D = [...k].sort((i, h) => i - h), u = [], f = /* @__PURE__ */ new Map();
  u.push("Base"), f.set(D[0], "Base");
  for (let i = 1; i < D.length; i++) {
    const h = `Level_${i}`;
    u.push(h), f.set(D[i], h);
  }
  s.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let i = D.length - 1; i >= 1; i--) s.push(`  STORY "${u[i]}"  HEIGHT ${T(D[i] - D[i - 1])} MASTERSTORY "Yes"  `);
  D.length > 0 && s.push(`  STORY "Base"  ELEV ${D[0]} `), s.push(""), M.some((i) => i.length === 4) && (s.push("$ DIAPHRAGM NAMES"), s.push('  DIAPHRAGM "D1"    TYPE RIGID'), s.push("")), s.push("$ MATERIAL PROPERTIES");
  const t = /* @__PURE__ */ new Set();
  (_a = I.elasticities) == null ? void 0 : _a.forEach((i) => t.add(i));
  const a = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map();
  let L = 0, p = 0;
  for (const i of t) {
    const h = i >= 1e8, $ = h ? `Steel_${++L}` : `Conc_${++p}`;
    a.set(i, $), E.set(i, h);
    const Y = h ? 76.97 : 24, Z = W(i), F = b(Y), q = h ? 0.3 : 0.2, X = h ? 117e-7 : 1e-5;
    if (h) {
      s.push(`  MATERIAL  "${$}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${T(F)}`), s.push(`  MATERIAL  "${$}"    SYMTYPE "Isotropic"  E ${T(Z)}  U ${q}  A ${X}`);
      const c = 345e3, r = 45e4;
      s.push(`  MATERIAL  "${$}"  FY ${T(W(c))}  FU ${T(W(r))}  FYE ${T(W(c * 1.1))}  FUE ${T(W(r * 1.1))}`);
    } else s.push(`  MATERIAL  "${$}"    TYPE "Concrete"    WEIGHTPERVOLUME ${T(F)}`), s.push(`  MATERIAL  "${$}"    SYMTYPE "Isotropic"  E ${T(Z)}  U ${q}  A ${X}`), s.push(`  MATERIAL  "${$}"    FC ${T(W(24e3))}`);
  }
  s.push(""), s.push("$ FRAME SECTIONS");
  const C = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), x = 0.05;
  M.forEach((i, h) => {
    var _a2, _b2, _c2, _d2, _e, _f;
    if (i.length !== 2) return;
    const $ = (_a2 = I.sectionShapes) == null ? void 0 : _a2.get(h), Y = ((_b2 = I.elasticities) == null ? void 0 : _b2.get(h)) ?? 0, Z = a.get(Y) || "Conc_1", F = E.get(Y) ?? Y >= 1e8, q = ((_c2 = I.areas) == null ? void 0 : _c2.get(h)) ?? 0, X = ((_d2 = I.momentsOfInertiaY) == null ? void 0 : _d2.get(h)) ?? 0;
    (_e = I.momentsOfInertiaZ) == null ? void 0 : _e.get(h), (_f = I.torsionalConstants) == null ? void 0 : _f.get(h);
    let c = ($ == null ? void 0 : $.type) || "rect", r = ($ == null ? void 0 : $.h) ?? 0, o = ($ == null ? void 0 : $.b) ?? 0, S = ($ == null ? void 0 : $.d) ?? 0;
    const n = ($ == null ? void 0 : $.tf) ?? 0, l = ($ == null ? void 0 : $.tw) ?? 0;
    r <= 0 && o <= 0 && S <= 0 && q > 0 && (X > 0 ? (r = Math.sqrt(12 * X / q), o = q / r) : r = o = Math.sqrt(q), (!isFinite(r) || r < x) && (r = x), (!isFinite(o) || o < x) && (o = x), c = "rect"), r <= 0 && o <= 0 && S <= 0 && (r = 0.3, o = 0.3, c = "rect");
    const g = `${c}_${T(r)}_${T(o)}_${T(S)}_${T(n)}_${T(l)}_${Z}`;
    ($ == null ? void 0 : $.name) && !_.has(g) && _.set(g, $.name);
    let d = _.get(g);
    if (!d) {
      const G = F ? "S" : "C";
      c === "rect" ? d = `${G}_R${Math.round(o * 100)}x${Math.round(r * 100)}` : c === "circ" ? d = `${G}_C_D${Math.round(S * 100)}` : c === "I" ? d = `${G}_I${Math.round(r * 100)}x${Math.round(o * 100)}` : c === "HSS" ? d = `${G}_HSS${Math.round(o * 100)}x${Math.round(r * 100)}x${Math.round(l * 1e3)}` : d = `${G}_Sec${C.size + 1}`, _.set(g, d);
    }
    if (R.set(h, d), C.has(d)) return;
    C.add(d);
    let P = "Concrete Rectangular";
    F ? c === "I" ? P = "Steel I/Wide Flange" : c === "HSS" ? P = "Steel Tube" : c === "pipe" ? P = "Steel Pipe" : c === "L" ? P = "Steel Angle" : c === "C" ? P = "Steel Channel" : c === "2C" ? P = "Steel Double Channel" : P = "Steel Rectangular" : c === "circ" ? P = "Concrete Circle" : P = "Concrete Rectangular";
    let U = `  FRAMESECTION  "${d}"  MATERIAL "${Z}"  SHAPE "${P}"`;
    r && (U += `  D ${T(r)}`), o && (U += `  B ${T(o)}`), S && !r && (U += `  D ${T(S)}`), n && (U += `  TF ${T(n)}`), l && (U += `  TW ${T(l)}`), s.push(U);
  }), s.push("");
  const j = /* @__PURE__ */ new Map();
  let st = 0;
  O.forEach((i) => {
    const h = `${T(i[0])},${T(i[1])}`;
    j.has(h) || j.set(h, `${++st}`);
  }), s.push("$ POINT COORDINATES");
  for (const [i, h] of j) {
    const [$, Y] = i.split(",").map(Number);
    s.push(`  POINT "${h}"  ${$} ${Y} `);
  }
  s.push("");
  const V = (i) => {
    const h = O[i], $ = `${T(h[0])},${T(h[1])}`;
    return { pt: j.get($) || "1", story: f.get(T(h[2])) || "Base" };
  };
  s.push("$ LINE CONNECTIVITIES");
  const at = [];
  M.forEach((i, h) => {
    if (i.length !== 2) return;
    const $ = dt(O, i), Y = R.get(h) || `Sec_${h}`;
    if ($ === "BEAM") {
      const Z = V(i[0]), F = V(i[1]);
      s.push(`  LINE  "E${h + 1}"  BEAM  "${Z.pt}"  "${F.pt}"  0`), at.push(`  LINEASSIGN  "E${h + 1}"  "${Z.story}"  SECTION "${Y}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const Z = O[i[0]][2] <= O[i[1]][2] ? i[0] : i[1], F = O[i[0]][2] <= O[i[1]][2] ? i[1] : i[0];
      V(Z);
      const q = V(F), X = T(O[Z][2]), c = T(O[F][2]), r = D.indexOf(X), o = D.indexOf(c), S = Math.max(1, o >= 0 && r >= 0 ? o - r : 1);
      s.push(`  LINE  "E${h + 1}"  ${$}  "${q.pt}"  "${q.pt}"  ${S}`);
      for (let n = 0; n < S; n++) {
        const l = o - n;
        l >= 0 && l < u.length && at.push(`  LINEASSIGN  "E${h + 1}"  "${u[l]}"  SECTION "${Y}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      }
    }
  }), s.push(""), s.push("$ POINT ASSIGNS"), (_b = m.supports) == null ? void 0 : _b.forEach((i, h) => {
    const $ = [];
    if (i[0] && $.push("UX"), i[1] && $.push("UY"), i[2] && $.push("UZ"), i[3] && $.push("RX"), i[4] && $.push("RY"), i[5] && $.push("RZ"), $.length > 0) {
      const Y = V(h);
      s.push(`  POINTASSIGN  "${Y.pt}"  "${Y.story}"  RESTRAINT "${$.join(" ")}"  `);
    }
  }), s.push(""), s.push("$ LINE ASSIGNS"), at.forEach((i) => s.push(i)), s.push("");
  const it = [];
  M.forEach((i, h) => {
    if (i.length === 4) {
      const $ = O[i[0]], Y = O[i[1]], Z = O[i[2]], F = [Y[0] - $[0], Y[1] - $[1], Y[2] - $[2]], q = [Z[0] - $[0], Z[1] - $[1], Z[2] - $[2]], X = F[1] * q[2] - F[2] * q[1], c = F[2] * q[0] - F[0] * q[2], r = F[0] * q[1] - F[1] * q[0], o = Math.sqrt(X * X + c * c + r * r), S = o > 1e-10 && Math.abs(r) / o < 0.5;
      it.push({ idx: h, el: i, isWall: S });
    }
  });
  const Q = (() => {
    for (const [i, h] of E) if (!h) return a.get(i);
    return a.values().next().value || "Conc_1";
  })();
  if (it.some((i) => !i.isWall)) {
    s.push("$ SLAB PROPERTIES");
    const i = ((_c = I.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
    s.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${Q}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${T(i)} `), s.push("");
  }
  if (it.some((i) => i.isWall)) {
    s.push("$ WALL PROPERTIES");
    const i = ((_d = I.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
    s.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${Q}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${T(i)} `), s.push("");
  }
  if (it.length > 0) {
    s.push("$ AREA CONNECTIVITIES");
    const i = [];
    it.forEach((h, $) => {
      const { el: Y, isWall: Z } = h, F = Z ? `W${$ + 1}` : `F${$ + 1}`, q = Z ? "PANEL" : "FLOOR", X = Y.map((c) => V(c));
      if (Z) {
        const c = O[Y[0]][2] <= O[Y[2]][2] ? 0 : 2, r = O[Y[1]][2] <= O[Y[3]][2] ? 1 : 3;
        s.push(`  AREA "${F}"  ${q}  4  "${X[c].pt}"  "${X[r].pt}"  "${X[r].pt}"  "${X[c].pt}"  1  1  0  0  `);
        const o = X[c === 0 ? 2 : 0].story;
        i.push(`  AREAASSIGN  "${F}"  "${o}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else s.push(`  AREA "${F}"  ${q}  4  "${X[0].pt}"  "${X[1].pt}"  "${X[2].pt}"  "${X[3].pt}"  0  0  0  0  `), i.push(`  AREAASSIGN  "${F}"  "${X[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
    }), s.push(""), s.push("$ AREA ASSIGNS"), i.forEach((h) => s.push(h)), s.push("");
  }
  return s.push("$ LOAD PATTERNS"), s.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  0'), s.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), s.push(""), m.loads && m.loads.size > 0 && (s.push("$ POINT OBJECT LOADS"), m.loads.forEach((i, h) => {
    const [$, Y, Z] = i, F = V(h);
    Math.abs($) > 1e-10 && s.push(`  POINTLOAD  "${F.pt}"  "${F.story}"  "Dead"  TYPE "FORCE"  FX ${T(H($))}`), Math.abs(Y) > 1e-10 && s.push(`  POINTLOAD  "${F.pt}"  "${F.story}"  "Dead"  TYPE "FORCE"  FY ${T(H(Y))}`), Math.abs(Z) > 1e-10 && s.push(`  POINTLOAD  "${F.pt}"  "${F.story}"  "Dead"  TYPE "FORCE"  FZ ${T(H(Z))}`);
  }), s.push("")), m.moments && m.moments.size > 0 && (s[s.length - 1].startsWith("$ POINT OBJECT LOADS"), m.moments.forEach((i, h) => {
    const [$, Y, Z] = i, F = V(h);
    Math.abs($) > 1e-10 && s.push(`  POINTLOAD  "${F.pt}"  "${F.story}"  "Dead"  TYPE "MOMENT"  MX ${T(H($))}`), Math.abs(Y) > 1e-10 && s.push(`  POINTLOAD  "${F.pt}"  "${F.story}"  "Dead"  TYPE "MOMENT"  MY ${T(H(Y))}`), Math.abs(Z) > 1e-10 && s.push(`  POINTLOAD  "${F.pt}"  "${F.story}"  "Dead"  TYPE "MOMENT"  MZ ${T(H(Z))}`);
  }), s.push("")), s.push("$ LOAD CASES"), s.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), s.push('  LOADCASE "Dead"  LOADPAT  "Dead"  SF 1 '), s.push('  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), s.push('  LOADCASE "Live"  LOADPAT  "Live"  SF 1 '), s.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), s.push('  LOADCASE "Modal"  MAXMODES 12  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), s.push(""), s.push("$ LOAD COMBINATIONS"), s.push('  COMBO "1.4D"  TYPE "Linear Add"  '), s.push('  COMBO "1.4D"  LOADCASE  "Dead"  SF 1.4 '), s.push('  COMBO "1.2D+1.6L"  TYPE "Linear Add"  '), s.push('  COMBO "1.2D+1.6L"  LOADCASE  "Dead"  SF 1.2 '), s.push('  COMBO "1.2D+1.6L"  LOADCASE  "Live"  SF 1.6 '), s.push(""), s.push("  END"), s.push("$ END OF MODEL FILE"), s.join(`\r
`);
}
function dt(N, O) {
  const M = N[O[0]], m = N[O[1]], I = Math.abs(m[2] - M[2]), y = Math.sqrt((m[0] - M[0]) ** 2 + (m[1] - M[1]) ** 2), z = I > y * 0.5;
  return z && y > 0.01 ? "BRACE" : z ? "COLUMN" : "BEAM";
}
export {
  ut as a,
  At as b,
  ht as c,
  Tt as e,
  St as p
};
