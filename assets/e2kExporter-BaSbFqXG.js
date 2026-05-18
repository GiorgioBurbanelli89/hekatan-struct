function mt() {
  const $ = document.createElement("div");
  $.id = "modal-results", $.style.cssText = `
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
  const N = 0.9;
  function m(T, D) {
    var _a, _b, _c, _d;
    if (!T.frequencies || T.frequencies.length === 0) {
      $.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const G = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], k = [0, 0, 0, 0, 0, 0], A = T.frequencies.length;
    let i = -1, S = -1, U = -1, v = 0, J = 0;
    {
      const s = [0, 0, 0, 0, 0, 0];
      for (let l = 0; l < A; l++) {
        const C = ((_a = T.massParticipation) == null ? void 0 : _a[l]) || [0, 0, 0, 0, 0, 0];
        for (let d = 0; d < 6; d++) s[d] += C[d];
        i < 0 && s[0] >= N && (i = l + 1), S < 0 && s[1] >= N && (S = l + 1), U < 0 && s[0] >= N && s[1] >= N && (U = l + 1);
      }
      v = s[0], J = s[1];
    }
    let w = -1, b = -1, z = -1;
    const g = 0.1;
    for (let s = 0; s < A; s++) {
      const l = ((_b = T.massParticipation) == null ? void 0 : _b[s]) || [0, 0, 0, 0, 0, 0];
      w < 0 && l[0] > g && (w = s + 1), b < 0 && l[1] > g && (b = s + 1), z < 0 && l[5] > g && (z = s + 1);
    }
    const h = U > 0 ? `<span style="color:#0f0">\u2713 ASCE 7-22 \xA712.9.1.1 \u2014 90 % alcanzado en X e Y al modo ${U} de ${A}</span>` : i > 0 && S < 0 ? `<span style="color:#fa0">\u26A0 X cumple en modo ${i}, Y todav\xEDa en ${(J * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : S > 0 && i < 0 ? `<span style="color:#fa0">\u26A0 Y cumple en modo ${S}, X todav\xEDa en ${(v * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : `<span style="color:#f44">\u2717 ASCE 7-22 NO cumplido en ${A} modos \xB7 \u03A3Ux=${(v * 100).toFixed(1)} % \xB7 \u03A3Uy=${(J * 100).toFixed(1)} % \u2014 aumentar nModes</span>`, p = (() => {
      const s = (l, C) => {
        var _a2;
        if (l < 0) return `<span style="color:#f44">${C}: no encontrado en ${A} modos</span>`;
        const d = ((_a2 = T.massParticipation) == null ? void 0 : _a2[l - 1]) || [0, 0, 0, 0, 0, 0], y = C === "Ux" ? 0 : C === "Uy" ? 1 : 5, x = T.frequencies[l - 1] > 0 ? 1 / T.frequencies[l - 1] : 0;
        return `<span style="color:#0f0">${C}: modo ${l}, T=${x.toFixed(3)} s, MPF=${(d[y] * 100).toFixed(1)} %</span>`;
      };
      return `<div style="margin:4px 0; padding:4px 6px; background:rgba(0,255,255,0.05); border-left:2px solid #0ff; font-size:11px;">
  \u{1F3AF} <b>Modos s\xEDsmicos principales</b> (ASCE 7-22 \xA712.9.1):<br>
  ${s(w, "Ux")} \xB7 ${s(b, "Uy")} \xB7 ${s(z, "Rz")}
</div>`;
    })();
    let n = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${D.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
    if (n += '<div id="modal-body" style="padding:0 12px 10px 12px;">', n += `<div style="padding:6px 0; font-weight:bold; font-size:13px;">${h}</div>`, n += p, D.properties) for (const s of D.properties) n += `<span style="color:#888">${s}</span>
`;
    n += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const s of G) n += `<th style="padding:2px 5px">${s}</th>`;
    n += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let s = 0; s < 6; s++) k[s] = 0;
    if (T.frequencies.forEach((s, l) => {
      var _a2;
      const C = s > 0 ? 1 / s : 0, d = s * 2 * Math.PI, y = ((_a2 = T.massParticipation) == null ? void 0 : _a2[l]) || [0, 0, 0, 0, 0, 0];
      for (let X = 0; X < 6; X++) k[X] += y[X];
      let x = 0, Z = y[0];
      for (let X = 1; X < 6; X++) y[X] > Z && (Z = y[X], x = X);
      const P = Z < 0.05 ? "\u2014" : `${G[x]} (${(Z * 100).toFixed(0)} %)`, W = x === 0 || x === 1 ? "#0f0" : x === 5 ? "#0ff" : x === 2 ? "#fa0" : "#888", V = l + 1 === i, K = l + 1 === S, q = l + 1 === U;
      n += `<tr style="border-bottom:1px solid #fff1; ${q ? "background:rgba(0,255,0,0.12);" : V || K ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${l + 1}${q ? " \u2605" : ""}</td>
  <td style="padding:2px 6px; text-align:right">${s.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${C.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${d.toFixed(2)}</td>`;
      for (let X = 0; X < 6; X++) {
        const it = (y[X] * 100).toFixed(1), tt = y[X] > 0.5 ? "#f00" : y[X] > 0.1 ? "#ff0" : "#0f0";
        n += `<td style="padding:2px 5px; text-align:right; color:${tt}">${it}%</td>`;
      }
      const B = k[0] >= N ? "#0f0" : "#0ff", at = k[1] >= N ? "#0f0" : "#0ff";
      n += `<td style="padding:2px 5px; text-align:right; color:${B}">${(k[0] * 100).toFixed(1)}%${V ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${at}">${(k[1] * 100).toFixed(1)}%${K ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(k[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${W}">${P}</td></tr>`;
    }), n += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, n += "</div>", $.innerHTML = n, I) {
      const s = $.querySelector("#modal-body"), l = $.querySelector("#modal-minimize");
      s && (s.style.display = "none"), l && (l.textContent = "\u25A2", l.title = "Restaurar");
    }
    (_c = $.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      I = !I;
      const s = $.querySelector("#modal-body"), l = $.querySelector("#modal-minimize");
      I ? (s.style.display = "none", l.textContent = "\u25A2", l.title = "Restaurar") : (s.style.display = "block", l.textContent = "\u25AC", l.title = "Minimizar");
    }), (_d = $.querySelector("#modal-copy")) == null ? void 0 : _d.addEventListener("click", () => {
      const s = [];
      s.push(`Modal Analysis \u2014 ${D.title}`), s.push(h.replace(/<[^>]+>/g, ""));
      const l = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${G.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      s.push(l), s.push("-".repeat(l.length));
      const C = [0, 0, 0, 0, 0, 0];
      T.frequencies.forEach((y, x) => {
        var _a2;
        const Z = y > 0 ? 1 / y : 0, P = y * 2 * Math.PI, W = ((_a2 = T.massParticipation) == null ? void 0 : _a2[x]) || [0, 0, 0, 0, 0, 0];
        for (let B = 0; B < 6; B++) C[B] += W[B];
        let V = 0, K = W[0];
        for (let B = 1; B < 6; B++) W[B] > K && (K = W[B], V = B);
        const q = K < 0.05 ? "\u2014" : `${G[V]} (${(K * 100).toFixed(0)}%)`, nt = W.map((B) => ((B * 100).toFixed(1) + "%").padStart(6)).join(" ");
        s.push(`${String(x + 1).padStart(4)}  ${y.toFixed(4).padStart(9)}  ${Z.toFixed(4).padStart(9)}  ${P.toFixed(2).padStart(9)}  ${nt}  ${(C[0] * 100).toFixed(1).padStart(5)}%  ${(C[1] * 100).toFixed(1).padStart(5)}%  ${(C[5] * 100).toFixed(1).padStart(5)}%  ${q}`);
      }), navigator.clipboard.writeText(s.join(`
`));
      const d = $.querySelector("#modal-copy");
      d.textContent = "\u2713", setTimeout(() => d.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: $, render: m };
}
function Mt($) {
  var _a;
  const I = $.split(/\r?\n/), N = { force: "TONF", length: "M" }, m = [], T = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), k = [], A = [], i = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), U = [], v = [];
  let J = "", w = "";
  const b = /* @__PURE__ */ new Map();
  for (const u of I) {
    const M = u.trim();
    if (!M || M.startsWith("$")) {
      M.startsWith("$ ") && (w = M.substring(2).trim());
      continue;
    }
    if (w && (b.has(w) || b.set(w, []), b.get(w).push(u)), w === "CONTROLS") {
      const c = M.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
      c && (N.force = c[1], N.length = c[2]);
      const t = M.match(/TITLE2\s+"([^"]+)"/);
      t && (J = t[1]);
    }
    if (w === "STORIES - IN SEQUENCE FROM TOP") {
      const c = M.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
      if (c) {
        const t = c[1], e = c[2] ? parseFloat(c[2]) : 0, o = c[3] ? parseFloat(c[3]) : void 0;
        m.push({ name: t, height: e, elev: o ?? 0 });
      }
    }
    if (w === "MATERIAL PROPERTIES") {
      const c = M.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
      if (c) {
        const t = c[1];
        T.has(t) || T.set(t, { type: c[2] || "", E: 0, G: 0, nu: 0 });
        const e = T.get(t);
        c[2] && (e.type = c[2]);
        const o = M.match(/\bE\s+([\d.eE+-]+)/);
        o && (e.E = parseFloat(o[1]));
        const a = M.match(/\bU\s+([\d.eE+-]+)/);
        a && (e.nu = parseFloat(a[1]), e.G = e.E / (2 * (1 + e.nu)));
        const r = M.match(/\bFY\s+([\d.eE+-]+)/);
        r && (e.fy = parseFloat(r[1]));
        const f = M.match(/\bFC\s+([\d.eE+-]+)/);
        f && (e.fc = parseFloat(f[1]));
        const E = M.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
        E && (e.density = parseFloat(E[1]));
      }
    }
    if (w === "FRAME SECTIONS") {
      const c = M.match(/FRAMESECTION\s+"([^"]+)"/);
      if (c) {
        const t = c[1];
        D.has(t) || D.set(t, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
        const e = D.get(t), o = M.match(/MATERIAL\s+"([^"]+)"/);
        o && (e.material = o[1]);
        const a = M.match(/SHAPE\s+"([^"]+)"/);
        a && (e.shape = a[1]);
        const r = M.match(/\bD\s+([\d.eE+-]+)/);
        r && (e.D = parseFloat(r[1]));
        const f = M.match(/\bB\s+([\d.eE+-]+)/);
        f && (e.B = parseFloat(f[1]));
        const E = M.match(/\bTF\s+([\d.eE+-]+)/);
        E && (e.TF = parseFloat(E[1]));
        const O = M.match(/\bTW\s+([\d.eE+-]+)/);
        O && (e.TW = parseFloat(O[1]));
        const R = M.match(/\bR\s+([\d.eE+-]+)/);
        R && (e.R = parseFloat(R[1]));
        const L = M.match(/FILLMATERIAL\s+"([^"]+)"/);
        L && (e.fillMaterial = L[1]);
        const F = M.match(/I2MOD\s+([\d.eE+-]+)/);
        F && (e.modI2 = parseFloat(F[1]));
        const _ = M.match(/I3MOD\s+([\d.eE+-]+)/);
        _ && (e.modI3 = parseFloat(_[1]));
      }
    }
    if (w === "POINT COORDINATES") {
      const c = M.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
      c && G.set(c[1], [parseFloat(c[2]), parseFloat(c[3])]);
    }
    if (w === "LINE CONNECTIVITIES") {
      const c = M.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
      c && k.push({ name: c[1], type: c[2], pt1: c[3], pt2: c[4], nStories: parseInt(c[5]) });
    }
    if (w === "POINT ASSIGNS") {
      const c = M.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
      c && i.set(`${c[1]}@${c[2]}`, c[3].split(/\s+/));
    }
    if (w === "LINE ASSIGNS") {
      const c = M.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
      if (c) {
        const t = { story: c[2], section: c[3], rigidZone: 0, releases: [], angle: 0 }, e = M.match(/RIGIDZONE\s+([\d.eE+-]+)/);
        e && (t.rigidZone = parseFloat(e[1]));
        const o = M.match(/RELEASE\s+"([^"]+)"/);
        o && (t.releases = o[1].split(/\s+/));
        const a = M.match(/ANG\s+([-\d.eE+]+)/);
        a && (t.angle = parseFloat(a[1])), S.set(`${c[1]}@${c[2]}`, t);
      }
    }
    if (w === "GRIDS") {
      const c = M.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
      c && v.push({ label: c[1], dir: c[2], coord: parseFloat(c[3]) });
    }
    if (w === "FRAME OBJECT LOADS") {
      const c = M.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      c && U.push({ line: c[1], story: c[2], type: c[3], dir: c[4], lc: c[5], val: parseFloat(c[6]) });
    }
    if (w === "AREA CONNECTIVITIES") {
      const c = M.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
      if (c) {
        const t = ((_a = c[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((e) => e.replace(/"/g, ""))) || [];
        A.push({ name: c[1], pts: t, nStories: 0 });
      }
    }
  }
  const z = /* @__PURE__ */ new Map();
  if (m.length > 0) {
    const u = m.length - 1;
    z.set(m[u].name, m[u].elev);
    for (let M = u - 1; M >= 0; M--) {
      const t = z.get(m[M + 1].name) + m[M].height;
      m[M].elev = t, z.set(m[M].name, t);
    }
  }
  const g = [], h = [], p = /* @__PURE__ */ new Map(), n = (u, M) => `${u}@${M}`, s = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
  for (const u of k) l.set(u.name, u);
  for (const u of k) for (const [M, c] of S) {
    if (!M.startsWith(u.name + "@")) continue;
    const t = c.story, e = m.findIndex((o) => o.name === t);
    if (!(e < 0)) if (u.type === "COLUMN" || u.type === "BRACE") {
      s.add(n(u.pt2, t));
      const o = Math.max(u.nStories, 1), a = Math.min(e + o, m.length - 1);
      s.add(n(u.pt1, m[a].name));
    } else s.add(n(u.pt1, t)), s.add(n(u.pt2, t));
  }
  for (const [u] of i) s.add(u);
  for (const u of s) {
    const [M, c] = u.split("@"), t = G.get(M), e = z.get(c);
    t === void 0 || e === void 0 || (g.push([t[0], t[1], e]), h.push(u), p.set(u, g.length - 1));
  }
  const C = [], d = [], y = [], x = [], Z = /* @__PURE__ */ new Map();
  for (const u of k) for (const [M, c] of S) {
    if (!M.startsWith(u.name + "@")) continue;
    const t = c.story, e = m.findIndex((O) => O.name === t);
    if (e < 0) continue;
    let o, a;
    if (u.type === "COLUMN" || u.type === "BRACE") {
      const O = Math.max(u.nStories, 1), R = Math.min(e + O, m.length - 1);
      o = n(u.pt1, m[R].name), a = n(u.pt2, t);
    } else o = n(u.pt1, t), a = n(u.pt2, t);
    const r = p.get(o), f = p.get(a);
    if (r === void 0 || f === void 0 || r === f) continue;
    const E = C.length;
    if (C.push([r, f]), d.push(u.name), y.push(u.type), x.push(t), Z.set(E, c.section), c.rigidZone > 0 && nt.set(E, [c.rigidZone, c.rigidZone]), c.releases.length > 0) {
      const O = new Array(12).fill(false), R = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const L of c.releases) {
        const F = R[L];
        F !== void 0 && (O[F] = true);
      }
      B.set(E, O);
    }
  }
  const P = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map();
  for (const [u, M] of Z) {
    const c = D.get(M);
    if (!c) continue;
    const t = T.get(c.material);
    t && (P.set(u, t.E), W.set(u, t.G));
    const e = c.D, o = c.B, a = c.TF, r = c.TW;
    let f = 0, E = 0, O = 0, R = 0, L = 0, F = 0, _ = "rect";
    switch (c.shape) {
      case "Concrete Rectangular":
        f = e * o, E = o * e ** 3 / 12, O = e * o ** 3 / 12, R = o * e ** 3 * (1 / 3 - 0.21 * (e / o) * (1 - e ** 4 / (12 * o ** 4))), L = F = 5 / 6 * f, _ = "rect";
        break;
      case "Concrete Circle":
        f = Math.PI * e ** 2 / 4, E = O = Math.PI * e ** 4 / 64, R = Math.PI * e ** 4 / 32, L = F = 0.9 * f, _ = "circ";
        break;
      case "Steel I/Wide Flange":
        f = 2 * o * a + (e - 2 * a) * r, E = (o * e ** 3 - (o - r) * (e - 2 * a) ** 3) / 12, O = (2 * a * o ** 3 + (e - 2 * a) * r ** 3) / 12, R = (2 * o * a ** 3 + (e - 2 * a) * r ** 3) / 3, L = (e - 2 * a) * r, F = 2 * o * a * 5 / 6, _ = "I";
        break;
      case "Steel Tube":
        f = e * o - (e - 2 * r) * (o - 2 * r), E = (o * e ** 3 - (o - 2 * r) * (e - 2 * r) ** 3) / 12, O = (e * o ** 3 - (e - 2 * r) * (o - 2 * r) ** 3) / 12, R = 2 * r * (e - r) * (o - r) * ((e - r) * (o - r)) / (e - r + (o - r)), L = 2 * e * r, F = 2 * o * r, _ = "HSS";
        break;
      case "Filled Steel Tube":
        f = e * o, E = o * e ** 3 / 12, O = e * o ** 3 / 12, R = 2 * r * (e - r) * (o - r) * ((e - r) * (o - r)) / (e - r + (o - r)), L = 2 * e * r + 5 / 6 * (e - 2 * r) * (o - 2 * r), F = 2 * o * r + 5 / 6 * (e - 2 * r) * (o - 2 * r), _ = "CFT";
        break;
      case "Steel Angle": {
        const j = a || r;
        f = j * (e + o - j), E = j * (e ** 3 + o * j ** 2 + j ** 2 * (e - j)) / 12, O = j * (o ** 3 + e * j ** 2 + j ** 2 * (o - j)) / 12, R = (e + o - j) * j ** 3 / 3, L = e * j, F = o * j, _ = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        f = 2 * o * a + (e - 2 * a) * r, E = (r * e ** 3 + 2 * o * a * (e - a) ** 2) / 12, O = (2 * a * o ** 3 + (e - 2 * a) * r ** 3) / 12, R = (2 * o * a ** 3 + (e - 2 * a) * r ** 3) / 3, L = (e - 2 * a) * r, F = 2 * o * a * 5 / 6, _ = c.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        f = 2 * (2 * o * a + (e - 2 * a) * r), E = 2 * (r * e ** 3 + 2 * o * a * (e - a) ** 2) / 12, O = 2 * (2 * a * o ** 3 + (e - 2 * a) * r ** 3) / 12, R = 2 * (2 * o * a ** 3 + (e - 2 * a) * r ** 3) / 3, L = 2 * (e - 2 * a) * r, F = 4 * o * a * 5 / 6, _ = "2C";
        break;
      default:
        e > 0 && o > 0 && (f = e * o, E = o * e ** 3 / 12, O = e * o ** 3 / 12, R = Math.min(e, o) * Math.max(e, o) ** 3 / 3 * 0.3, L = F = 5 / 6 * f);
        break;
    }
    c.modI2 && (O *= c.modI2), c.modI3 && (E *= c.modI3), V.set(u, f), at.set(u, E), X.set(u, O), it.set(u, R), L > 0 && K.set(u, L), F > 0 && q.set(u, F), tt.set(u, { type: _, b: o || void 0, h: e || void 0, d: _ === "circ" || _ === "pipe" ? e : void 0, tw: r || void 0, tf: a || void 0, r: c.R, name: M });
  }
  const ct = /* @__PURE__ */ new Map();
  for (const [u, M] of i) {
    const c = p.get(u);
    if (c === void 0) continue;
    const t = [false, false, false, false, false, false];
    for (const e of M) e === "UX" && (t[0] = true), e === "UY" && (t[1] = true), e === "UZ" && (t[2] = true), e === "RX" && (t[3] = true), e === "RY" && (t[4] = true), e === "RZ" && (t[5] = true);
    ct.set(c, t);
  }
  const rt = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map();
  for (let u = 0; u < d.length; u++) st.set(`${d[u]}@${x[u]}`, u);
  for (const u of U) {
    const M = st.get(`${u.line}@${u.story}`);
    if (M === void 0) continue;
    const [c, t] = C[M], e = g[c], o = g[t], a = Math.sqrt((o[0] - e[0]) ** 2 + (o[1] - e[1]) ** 2 + (o[2] - e[2]) ** 2);
    if (a < 1e-10) continue;
    const r = u.val * a / 2;
    let f = 0, E = 0, O = 0;
    u.dir === "GRAV" || u.dir === "GRAVITY" ? O = -r : u.dir === "X" ? f = r : u.dir === "Y" ? E = r : u.dir === "Z" && (O = -r);
    for (const R of [c, t]) {
      const L = rt.get(R) || [0, 0, 0, 0, 0, 0];
      L[0] += f, L[1] += E, L[2] += O, rt.set(R, L);
    }
  }
  const ot = /* @__PURE__ */ new Map();
  for (const [u, M] of Z) {
    const c = D.get(M);
    if (!c) continue;
    const t = T.get(c.material);
    (t == null ? void 0 : t.density) && ot.set(u, t.density);
  }
  return { units: N, stories: m.reverse(), materials: T, frameSections: D, nodes: g, nodeNames: h, nodeNameToIdx: p, elements: C, elementNames: d, elementTypes: y, elementStories: x, elementSections: Z, nodeInputs: { supports: ct, loads: rt }, elementInputs: { elasticities: P, shearModuli: W, areas: V, momentsOfInertiaZ: at, momentsOfInertiaY: X, torsionalConstants: it, shearAreasY: K, shearAreasZ: q, rigidOffsets: nt, momentReleases: B, densities: ot, sectionShapes: tt }, sectionShapes: tt, grids: v, info: { nNodes: g.length, nFrames: C.length, nAreas: A.length, title: J }, rawSections: b };
}
function Y($) {
  return $ && parseFloat($) || 0;
}
function ht($) {
  const I = /* @__PURE__ */ new Map(), N = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let m;
  for (; (m = N.exec($)) !== null; ) I.set(m[1], m[2] !== void 0 ? m[2] : m[3]);
  return I;
}
function gt($) {
  const I = $.split(/\r?\n/);
  return I.some((m) => m.trim().startsWith("TABLE:")) ? ut(I) : At(I);
}
function ut($) {
  var _a, _b, _c, _d, _e, _f;
  const I = [];
  let N = "";
  for (const z of $) {
    const g = z.trimEnd();
    g.endsWith("_") ? N += g.slice(0, -1) + " " : (N += g, I.push(N), N = "");
  }
  N && I.push(N);
  const m = { force: "KN", length: "m" };
  let T = "UX,UY,UZ,RX,RY,RZ";
  const D = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), i = [], S = [], U = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), w = [];
  let b = "";
  for (const z of I) {
    const g = z.trim();
    if (!g || g.startsWith(";") || g.startsWith("File ")) continue;
    if (g.startsWith("TABLE:")) {
      const p = g.match(/TABLE:\s+"(.+?)"/);
      b = p ? p[1].toUpperCase() : "";
      continue;
    }
    if (g === "END TABLE DATA") {
      b = "";
      continue;
    }
    const h = ht(g);
    switch (b) {
      case "PROGRAM CONTROL": {
        const p = h.get("CurrUnits");
        if (p) {
          const n = p.split(",").map((s) => s.trim());
          n[0] && (m.force = n[0]), n[1] && (m.length = n[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const p = h.get("Material");
        p && !D.has(p) && D.set(p, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const p = h.get("Material");
        if (p) {
          const n = D.get(p) || { E: 0, nu: 0, G: 0 };
          n.E = Y(h.get("E1")), n.G = Y(h.get("G12")), n.nu = Y(h.get("U12")), n.density = Y(h.get("UnitMass")), D.set(p, n);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const p = h.get("Material");
        p && D.has(p) && (D.get(p).fy = Y(h.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const p = h.get("SectionName");
        p && G.set(p, { material: h.get("Material") || "", shape: h.get("Shape") || "Rectangular", D: Y(h.get("t3")), B: Y(h.get("t2")), TF: Y(h.get("tf")), TW: Y(h.get("tw")), A: Y(h.get("Area")), Iz: Y(h.get("I33")), Iy: Y(h.get("I22")), J: Y(h.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const p = h.get("Section");
        p && k.set(p, { material: h.get("Material") || "", type: h.get("Type") || "Shell", thickness: Y(h.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const p = h.get("Joint");
        if (p) {
          const n = Y(h.get("XorR")), s = Y(h.get("Y")), l = Y(h.get("Z"));
          A.set(p, [n, s, l]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const p = h.get("Frame"), n = h.get("JointI"), s = h.get("JointJ");
        p && n && s && i.push({ name: p, j1: n, j2: s });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const p = h.get("Area");
        if (p) {
          const n = parseInt(h.get("NumJoints") || "4"), s = [];
          for (let l = 1; l <= n; l++) {
            const C = h.get(`Joint${l}`);
            C && s.push(C);
          }
          s.length >= 3 && S.push({ name: p, joints: s });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const p = h.get("Joint");
        if (p) {
          const n = [((_a = h.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = h.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = h.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = h.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = h.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = h.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          U.set(p, n);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const p = h.get("Frame"), n = h.get("AnalSect");
        p && n && v.set(p, n);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const p = h.get("Area"), n = h.get("Section");
        p && n && J.set(p, n);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const p = h.get("Joint");
        p && w.push({ joint: p, fx: Y(h.get("F1")), fy: Y(h.get("F2")), fz: Y(h.get("F3")), mx: Y(h.get("M1")), my: Y(h.get("M2")), mz: Y(h.get("M3")) });
        break;
      }
    }
  }
  return St(m, T, D, G, k, A, i, S, U, v, J, w);
}
function At($) {
  const I = { force: "KN", length: "m" };
  let N = "UX,UY,UZ,RX,RY,RZ";
  const m = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), k = [], A = [], i = /* @__PURE__ */ new Map(), S = [];
  let U = "", v = "";
  for (const b of $) {
    const z = b.trim();
    if (!z || z.startsWith(";")) continue;
    if (!b.startsWith(" ") && !b.startsWith("	")) {
      const p = z.toUpperCase();
      if (p === "END") break;
      p.startsWith("SHELL SECTION") ? U = "SHELL SECTION" : p.startsWith("FRAME SECTION") ? U = "FRAME SECTION" : U = p.split(/\s+/)[0];
      continue;
    }
    const g = ht(z), h = z.split(/\s+/);
    switch (U) {
      case "SYSTEM": {
        const p = g.get("DOF");
        p && (N = p);
        const n = g.get("LENGTH");
        n && (I.length = n);
        const s = g.get("FORCE");
        s && (I.force = s);
        break;
      }
      case "JOINT": {
        const p = h[0];
        G.set(p, [Y(g.get("X")), Y(g.get("Y")), Y(g.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const p = g.get("ADD"), n = g.get("DOF");
        if (p && n) {
          const s = n.split(","), l = [false, false, false, false, false, false];
          for (const C of s) {
            const d = C.toUpperCase();
            (d === "UX" || d === "U1") && (l[0] = true), (d === "UY" || d === "U2") && (l[1] = true), (d === "UZ" || d === "U3") && (l[2] = true), (d === "RX" || d === "R1") && (l[3] = true), (d === "RY" || d === "R2") && (l[4] = true), (d === "RZ" || d === "R3") && (l[5] = true);
          }
          i.set(p, l);
        }
        break;
      }
      case "MATERIAL": {
        const p = g.get("NAME");
        if (p) v = p, m.set(p, { E: 0, nu: 0, G: 0 });
        else if (v) {
          const n = m.get(v), s = g.get("E");
          s && (n.E = Y(s));
          const l = g.get("U");
          l && (n.nu = Y(l)), n.G = n.E / (2 * (1 + n.nu));
          const C = g.get("M");
          C && (n.density = Y(C));
        }
        break;
      }
      case "SHELL": {
        const p = h[0], n = g.get("J");
        g.get("SEC"), n && A.push({ name: p, joints: n.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const p = g.get("NAME");
        p && D.set(p, { material: g.get("MAT") || "", type: g.get("TYPE") || "Shell", thickness: Y(g.get("TH")) });
        break;
      }
      case "FRAME": {
        const p = h[0], n = g.get("J");
        if (n) {
          const s = n.split(",");
          s.length >= 2 && k.push({ name: p, j1: s[0], j2: s[1] });
        }
        break;
      }
      case "LOAD": {
        const p = g.get("ADD");
        p && S.push({ joint: p, fx: Y(g.get("UX")), fy: Y(g.get("UY")), fz: Y(g.get("UZ")), mx: Y(g.get("MX")), my: Y(g.get("MY")), mz: Y(g.get("MZ")) });
        break;
      }
    }
  }
  return St(I, N, m, T, D, G, k, A, i, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), S);
}
function St($, I, N, m, T, D, G, k, A, i, S, U) {
  var _a;
  const v = [], J = /* @__PURE__ */ new Map(), w = [];
  for (const [d, y] of D) J.set(d, w.length), v.push(d), w.push(y);
  const b = [], z = [], g = /* @__PURE__ */ new Map();
  for (const d of G) {
    const y = J.get(d.j1), x = J.get(d.j2);
    if (y !== void 0 && x !== void 0) {
      const Z = b.length;
      b.push([y, x]), z.push(d.name);
      const P = i.get(d.name);
      P && g.set(Z, P);
    }
  }
  const h = b.length;
  for (const d of k) {
    const y = d.joints.map((x) => J.get(x)).filter((x) => x !== void 0);
    if (y.length >= 3) {
      const x = b.length;
      b.push(y), z.push(d.name);
      const Z = S.get(d.name);
      Z && g.set(x, Z);
    }
  }
  const p = b.length - h, n = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, s = /* @__PURE__ */ new Map(), l = N.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let d = 0; d < b.length; d++) {
    const y = g.get(d), x = y ? m.get(y) : null, Z = y ? T.get(y) : null;
    if (x || b[d].length === 2) {
      const P = x || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, W = N.get(P.material) || l, V = W.E || l.E, K = W.nu || 0.3, q = W.G || V / (2 * (1 + K));
      n.elasticities.set(d, V), n.shearModuli.set(d, q), n.areas.set(d, P.A || P.D * P.B), n.momentsOfInertiaZ.set(d, P.Iz || P.B * P.D ** 3 / 12), n.momentsOfInertiaY.set(d, P.Iy || P.D * P.B ** 3 / 12), n.torsionalConstants.set(d, P.J || 0), n.densities.set(d, W.density || 0), ((_a = P.shape) == null ? void 0 : _a.includes("Wide Flange")) || P.shape === "I" ? s.set(d, { type: "I", b: P.B, h: P.D, name: y || "I-section" }) : s.set(d, { type: "rect", b: P.B, h: P.D });
    } else if (Z) {
      const P = N.get(Z.material) || l, W = P.E || l.E, V = P.nu || 0.2, K = P.G || W / (2 * (1 + V));
      n.elasticities.set(d, W), n.shearModuli.set(d, K), n.thicknesses.set(d, Z.thickness), n.poissonsRatios.set(d, V), n.densities.set(d, P.density || 0);
    }
  }
  const C = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [d, y] of A) {
    const x = J.get(d);
    x !== void 0 && C.supports.set(x, y);
  }
  for (const d of U) {
    const y = J.get(d.joint);
    if (y !== void 0) {
      const x = C.forces.get(y) || [0, 0, 0, 0, 0, 0];
      x[0] += d.fx, x[1] += d.fy, x[2] += d.fz, x[3] += d.mx, x[4] += d.my, x[5] += d.mz, C.forces.set(y, x);
    }
  }
  return { units: $, dof: I, materials: N, frameSections: m, shellSections: T, nodes: w, nodeNames: v, nodeNameToIdx: J, elements: b, elementNames: z, elementSections: g, nodeInputs: C, elementInputs: n, sectionShapes: s, info: { nNodes: w.length, nFrames: h, nShells: p, title: `SAP2000 (${h} frames, ${p} shells)` } };
}
function Nt($) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: I, elements: N, nodeInputs: m, elementInputs: T } = $, D = $.units || { force: "KN", length: "m" }, G = $.title || "Awatif Model", k = [], A = (n) => k.push(n), i = () => k.push(" ");
  A(`File ${G}.$2k was saved on m/d/yy at h:mm:ss`), i(), A('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), A("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), i();
  const S = [], U = [];
  if (N.forEach((n, s) => {
    n.length === 2 ? S.push(s) : U.push(s);
  }), S.length > 0) {
    A('TABLE:  "CONNECTIVITY - FRAME"');
    for (const n of S) {
      const s = N[n];
      A(`   Frame=${n + 1}   JointI=${s[0] + 1}   JointJ=${s[1] + 1}   IsCurved=No`);
    }
    i();
  }
  if (U.length > 0) {
    A('TABLE:  "CONNECTIVITY - AREA"');
    for (const n of U) {
      const s = N[n], l = s.map((C, d) => `Joint${d + 1}=${C + 1}`).join("   ");
      A(`   Area=${n + 1}   NumJoints=${s.length}   ${l}`);
    }
    i();
  }
  A('TABLE:  "COORDINATE SYSTEMS"'), A("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), i(), A('TABLE:  "DATABASE FORMAT TYPES"'), A("   UnitsCurr=Yes   OverrideE=No"), i();
  const v = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map();
  for (const n of S) {
    const s = ((_a = T.areas) == null ? void 0 : _a.get(n)) || 0, l = ((_b = T.momentsOfInertiaZ) == null ? void 0 : _b.get(n)) || 0, C = ((_c = T.momentsOfInertiaY) == null ? void 0 : _c.get(n)) || 0, d = ((_d = T.torsionalConstants) == null ? void 0 : _d.get(n)) || 0, y = ((_e = T.elasticities) == null ? void 0 : _e.get(n)) || 0, x = `MAT_${Math.round(y)}`, Z = `A${s.toPrecision(6)}_Iz${l.toPrecision(6)}`;
    if (!v.has(Z)) {
      let W = 0.3, V = 0.3;
      s > 0 && l > 0 && (W = Math.sqrt(12 * l / s), V = s / W), v.set(Z, { A: s, Iz: l, Iy: C, J: d, b: V, h: W, matKey: x });
    }
    const P = [...v.keys()].indexOf(Z) + 1;
    J.set(n, `SEC${P}`);
  }
  if (S.length > 0) {
    A('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const n of S) {
      const s = J.get(n) || "SEC1";
      A(`   Frame=${n + 1}   AutoSelect=N.A.   AnalSect=${s}   MatProp=Default`);
    }
    i();
  }
  if (v.size > 0) {
    A('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let n = 0;
    for (const [, s] of v) {
      n++;
      const l = s.A * 5 / 6;
      A(`   SectionName=SEC${n}   Material=${s.matKey}   Shape=Rectangular   t3=${H(s.h)}   t2=${H(s.b)}   Area=${H(s.A)}   TorsConst=${H(s.J)}   I33=${H(s.Iz)}   I22=${H(s.Iy)}   I23=0   AS2=${H(l)}   AS3=${H(l)} _`), A("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    i();
  }
  const w = !!$.layeredSection && U.length > 0, b = $.layeredSection, z = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map();
  if (!w) for (const n of U) {
    const s = ((_f = T.thicknesses) == null ? void 0 : _f.get(n)) || 0.1, l = ((_g = T.elasticities) == null ? void 0 : _g.get(n)) || 0, C = `MAT_${Math.round(l)}`, d = `t${s.toPrecision(6)}`;
    z.has(d) || z.set(d, { t: s, matKey: C });
    const y = [...z.keys()].indexOf(d) + 1;
    g.set(n, `SSEC${y}`);
  }
  if (U.length > 0) {
    A('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const n of U) {
      const s = w ? b.name : g.get(n) || "SSEC1";
      A(`   Area=${n + 1}   Section=${s}   MatProp=Default`);
    }
    if (i(), A('TABLE:  "AREA SECTION PROPERTIES"'), w) {
      const n = b, s = ((_h = n.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      A(`   Section=${n.name}   Material=${s}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${H(n.totalThickness)}   BendThick=${H(n.totalThickness)}   Color=Magenta`);
    } else {
      let n = 0;
      for (const [, s] of z) n++, A(`   Section=SSEC${n}   Material=${s.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${H(s.t)}   BendThick=${H(s.t)}   Color=Cyan`);
    }
    if (i(), w) {
      A('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const n = b;
      for (const s of n.layers) {
        const l = s.angle ?? 0, C = s.numIntPts ?? 3;
        A(`   Section=${n.name}   LayerName=${s.name}   Distance=${H(s.distance)}   Thickness=${H(s.thickness)}   Type=Shell   NumIntPts=${C}   Material=${s.material}   MatAngle=${H(l * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      i();
    }
  }
  A('TABLE:  "JOINT COORDINATES"');
  for (let n = 0; n < I.length; n++) {
    const s = I[n];
    A(`   Joint=${n + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${H(s[0])}   Y=${H(s[1])}   Z=${H(s[2])}   SpecialJt=No`);
  }
  if (i(), m.supports && m.supports.size > 0) {
    A('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [n, s] of m.supports) {
      if (!s.some((C) => C)) continue;
      const l = (C) => C ? "Yes" : "No";
      A(`   Joint=${n + 1}   U1=${l(s[0])}   U2=${l(s[1])}   U3=${l(s[2])}   R1=${l(s[3])}   R2=${l(s[4])}   R3=${l(s[5])}`);
    }
    i();
  }
  const h = $.selfWtMult ?? 1;
  if (A('TABLE:  "LOAD PATTERN DEFINITIONS"'), A(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${h}`), i(), A('TABLE:  "LOAD CASE DEFINITIONS"'), A('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), i(), A('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), A('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), i(), m.forces && m.forces.size > 0) {
    A('TABLE:  "JOINT LOADS - FORCE"');
    for (const [n, s] of m.forces) s.some((l) => Math.abs(l) > 1e-12) && A(`   Joint=${n + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${H(s[0])}   F2=${H(s[1])}   F3=${H(s[2])}   M1=${H(s[3])}   M2=${H(s[4])}   M3=${H(s[5])}`);
    i();
  }
  const p = /* @__PURE__ */ new Map();
  for (let n = 0; n < N.length; n++) {
    const s = ((_i = T.elasticities) == null ? void 0 : _i.get(n)) || 0, l = ((_j = T.shearModuli) == null ? void 0 : _j.get(n)) || 0, C = s > 0 && l > 0 ? Math.max(0, Math.min(0.5, s / (2 * l) - 1)) : 0.2, d = ((_k = T.densities) == null ? void 0 : _k.get(n)) || 0, y = `MAT_${Math.round(s)}`;
    p.has(y) || p.set(y, { E: s, nu: C, G: l, rho: d });
  }
  A('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [n] of p) A(`   Material=${n}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  i(), A('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [n, s] of p) A(`   Material=${n}   UnitWeight=${H(s.rho * 9.81)}   UnitMass=${H(s.rho)}   E1=${H(s.E)}   G12=${H(s.G)}   U12=${H(s.nu)}   A1=9.9E-06`);
  i(), A('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [n] of p) A(`   Material=${n}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return i(), A('TABLE:  "PROGRAM CONTROL"'), A(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${D.force}, ${D.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), i(), A("END TABLE DATA"), A(""), k.join(`\r
`);
}
function H($) {
  return $ === 0 || Math.abs($) < 1e-15 ? "0" : Math.abs($) >= 1e6 || Math.abs($) < 1e-3 && Math.abs($) > 0 ? $.toExponential(8) : parseFloat($.toPrecision(10)).toString();
}
function $t($) {
  const { nodes: I, elements: N, nodeInputs: m, elementInputs: T, title: D, e2kModel: G } = $, k = G == null ? void 0 : G.rawSections;
  return k && k.size > 0 ? Tt(k) : It($);
}
function Tt($, I) {
  const N = [], m = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  N.push("$ File exported from Awatif FEM Studio (round-trip)"), N.push("");
  for (const T of m) {
    const D = $.get(T);
    if (!(!D || D.length === 0)) {
      N.push(`$ ${T}`);
      for (const G of D) N.push(G);
      N.push("");
    }
  }
  for (const [T, D] of $) if (!m.includes(T) && D.length !== 0) {
    N.push(`$ ${T}`);
    for (const G of D) N.push(G);
    N.push("");
  }
  return N.push("  END"), N.push("$ END OF MODEL FILE"), N.join(`\r
`);
}
function It($) {
  var _a, _b, _c, _d;
  const { nodes: I, elements: N, nodeInputs: m, elementInputs: T, title: D, units: G } = $, k = (G == null ? void 0 : G.force) || "Tonf", A = (G == null ? void 0 : G.length) || "m", i = [], S = (t) => Math.round(t * 1e4) / 1e4, U = (() => {
    const t = (k || "Tonf").toLowerCase();
    return t === "tonf" || t === "tonf-f" ? 1 / 9.80665 : t === "kn" || t === "kn-f" ? 1 : t === "kgf" || t === "kg" ? 1 / 980665e-8 : t === "kip" || t === "kips" ? 1 / 4.44822 : 1;
  })(), v = (t) => t * U, J = (t) => t * U, w = (t) => t * U, b = /* @__PURE__ */ new Date(), z = `${b.getMonth() + 1}/${b.getDate()}/${b.getFullYear()}  ${b.getHours()}:${String(b.getMinutes()).padStart(2, "0")}:${String(b.getSeconds()).padStart(2, "0")}`;
  i.push(`$ File   "Hekatan_export.e2k"  saved ${z} in ETABS 22.6.0`), i.push(""), i.push("$ PROGRAM INFORMATION"), i.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), i.push(""), i.push("$ CONTROLS"), i.push(`  UNITS  "${k}"  "${A}"  "C"  `), i.push('  TITLE1  "Hekatan Struct export"  '), D && i.push(`  TITLE2  "${D}"  `), i.push("  PREFERENCE  MERGETOL 0.001"), i.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), i.push(""), i.push("$ GRIDS"), i.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), i.push("");
  const g = /* @__PURE__ */ new Set();
  I.forEach((t) => g.add(S(t[2])));
  const h = [...g].sort((t, e) => t - e), p = [], n = /* @__PURE__ */ new Map();
  p.push("Base"), n.set(h[0], "Base");
  for (let t = 1; t < h.length; t++) {
    const e = `Level_${t}`;
    p.push(e), n.set(h[t], e);
  }
  i.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let t = h.length - 1; t >= 1; t--) i.push(`  STORY "${p[t]}"  HEIGHT ${S(h[t] - h[t - 1])} MASTERSTORY "Yes"  `);
  h.length > 0 && i.push(`  STORY "Base"  ELEV ${h[0]} `), i.push(""), N.some((t) => t.length === 4), i.push("$ DIAPHRAGM NAMES"), i.push('  DIAPHRAGM "D1"    TYPE RIGID'), i.push(""), i.push("$ MATERIAL PROPERTIES");
  const s = /* @__PURE__ */ new Set();
  (_a = T.elasticities) == null ? void 0 : _a.forEach((t) => s.add(t));
  const l = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map();
  let d = 0, y = 0;
  const x = 980665e-8, Z = /* @__PURE__ */ new Map();
  if (T.densities && T.densities.size > 0) {
    const t = /* @__PURE__ */ new Map();
    T.densities.forEach((e, o) => {
      var _a2;
      const a = (_a2 = T.elasticities) == null ? void 0 : _a2.get(o);
      a !== void 0 && (t.has(a) || t.set(a, []), t.get(a).push(e));
    }), t.forEach((e, o) => {
      const a = e.reduce((f, E) => f + E, 0) / e.length, r = a > 100 ? a * x : a * 9.80665;
      Z.set(o, r);
    });
  }
  for (const t of s) {
    const e = t >= 1e8, o = e ? `Steel_${++d}` : `Conc_${++y}`;
    l.set(t, o), C.set(t, e);
    const a = Z.get(t) ?? (e ? 76.97 : 24), r = J(t), f = w(a), E = e ? 0.3 : 0.2, O = e ? 117e-7 : 1e-5;
    if (e) {
      i.push(`  MATERIAL  "${o}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${S(f)}`), i.push(`  MATERIAL  "${o}"    SYMTYPE "Isotropic"  E ${S(r)}  U ${E}  A ${O}`);
      const R = 345e3, L = 45e4;
      i.push(`  MATERIAL  "${o}"  FY ${S(J(R))}  FU ${S(J(L))}  FYE ${S(J(R * 1.1))}  FUE ${S(J(L * 1.1))}`);
    } else i.push(`  MATERIAL  "${o}"    TYPE "Concrete"    WEIGHTPERVOLUME ${S(f)}`), i.push(`  MATERIAL  "${o}"    SYMTYPE "Isotropic"  E ${S(r)}  U ${E}  A ${O}`), i.push(`  MATERIAL  "${o}"    FC ${S(J(24e3))}`);
  }
  i.push(""), i.push("$ FRAME SECTIONS");
  const P = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), K = 0.05;
  N.forEach((t, e) => {
    var _a2, _b2, _c2, _d2, _e, _f;
    if (t.length !== 2) return;
    const o = (_a2 = T.sectionShapes) == null ? void 0 : _a2.get(e), a = ((_b2 = T.elasticities) == null ? void 0 : _b2.get(e)) ?? 0, r = l.get(a) || "Conc_1", f = C.get(a) ?? a >= 1e8, E = ((_c2 = T.areas) == null ? void 0 : _c2.get(e)) ?? 0, O = ((_d2 = T.momentsOfInertiaY) == null ? void 0 : _d2.get(e)) ?? 0;
    (_e = T.momentsOfInertiaZ) == null ? void 0 : _e.get(e), (_f = T.torsionalConstants) == null ? void 0 : _f.get(e);
    let R = (o == null ? void 0 : o.type) || "rect", L = (o == null ? void 0 : o.h) ?? 0, F = (o == null ? void 0 : o.b) ?? 0, _ = (o == null ? void 0 : o.d) ?? 0;
    const j = (o == null ? void 0 : o.tf) ?? 0, ft = (o == null ? void 0 : o.tw) ?? 0;
    L <= 0 && F <= 0 && _ <= 0 && E > 0 && (O > 0 ? (L = Math.sqrt(12 * O / E), F = E / L) : L = F = Math.sqrt(E), (!isFinite(L) || L < K) && (L = K), (!isFinite(F) || F < K) && (F = K), R = "rect"), L <= 0 && F <= 0 && _ <= 0 && (L = 0.3, F = 0.3, R = "rect");
    const Et = `${R}_${S(L)}_${S(F)}_${S(_)}_${S(j)}_${S(ft)}_${r}`;
    (o == null ? void 0 : o.name) && !V.has(Et) && V.set(Et, o.name);
    let Q = V.get(Et);
    if (!Q) {
      const lt = f ? "S" : "C";
      R === "rect" ? Q = `${lt}_R${Math.round(F * 100)}x${Math.round(L * 100)}` : R === "circ" ? Q = `${lt}_C_D${Math.round(_ * 100)}` : R === "I" ? Q = `${lt}_I${Math.round(L * 100)}x${Math.round(F * 100)}` : R === "HSS" ? Q = `${lt}_HSS${Math.round(F * 100)}x${Math.round(L * 100)}x${Math.round(ft * 1e3)}` : Q = `${lt}_Sec${P.size + 1}`, V.set(Et, Q);
    }
    if (W.set(e, Q), P.has(Q)) return;
    P.add(Q);
    let et;
    R === "I" ? et = "Steel I/Wide Flange" : R === "HSS" ? et = "Steel Tube" : R === "CFT" ? et = "Filled Steel Tube" : R === "pipe" ? et = "Steel Pipe" : R === "L" ? et = "Steel Angle" : R === "C" ? et = "Steel Channel" : R === "2C" ? et = "Steel Double Channel" : R === "circ" ? et = "Concrete Circle" : et = "Concrete Rectangular";
    let pt = `  FRAMESECTION  "${Q}"  MATERIAL "${r}"  SHAPE "${et}"`;
    L && (pt += `  D ${S(L)}`), F && (pt += `  B ${S(F)}`), _ && !L && (pt += `  D ${S(_)}`), j && (pt += `  TF ${S(j)}`), ft && (pt += `  TW ${S(ft)}`), i.push(pt);
  }), i.push("");
  const q = /* @__PURE__ */ new Map();
  let nt = 0;
  I.forEach((t) => {
    const e = `${S(t[0])},${S(t[1])}`;
    q.has(e) || q.set(e, `${++nt}`);
  }), i.push("$ POINT COORDINATES");
  for (const [t, e] of q) {
    const [o, a] = t.split(",").map(Number);
    i.push(`  POINT "${e}"  ${o} ${a} `);
  }
  i.push("");
  const B = (t) => {
    const e = I[t], o = `${S(e[0])},${S(e[1])}`;
    return { pt: q.get(o) || "1", story: n.get(S(e[2])) || "Base" };
  }, at = (t) => {
    var _a2, _b2, _c2, _d2;
    const e = [], o = (_a2 = $.propertyModifiers) == null ? void 0 : _a2.get(t);
    o && o.some((E) => Math.abs(E - 1) > 1e-9) && e.push(`PROPMODIFIERS "${o.map((E) => S(E)).join(" ")}"`);
    const a = (_b2 = T.momentReleases) == null ? void 0 : _b2.get(t);
    if (a && a.some((E) => E)) {
      const E = [];
      a.length === 12 ? (a[0] && E.push("PI"), a[1] && E.push("V2I"), a[2] && E.push("V3I"), a[3] && E.push("TI"), a[4] && E.push("M2I"), a[5] && E.push("M3I"), a[6] && E.push("PJ"), a[7] && E.push("V2J"), a[8] && E.push("V3J"), a[9] && E.push("TJ"), a[10] && E.push("M2J"), a[11] && E.push("M3J")) : a.length === 6 && (a[0] && E.push("TI"), a[1] && E.push("M2I"), a[2] && E.push("M3I"), a[3] && E.push("TJ"), a[4] && E.push("M2J"), a[5] && E.push("M3J")), E.length > 0 && e.push(`RELEASE "${E.join(" ")}"`);
    }
    const r = (_c2 = T.insertionPoints) == null ? void 0 : _c2.get(t);
    r && (Math.abs(r[0]) > 1e-9 || Math.abs(r[1]) > 1e-9) && e.push(`LATEROFFSET ${S(r[0])} TRANSOFFSET ${S(r[1])}`);
    const f = (_d2 = T.rigidOffsets) == null ? void 0 : _d2.get(t);
    return f && (Math.abs(f[0]) > 1e-9 || Math.abs(f[1]) > 1e-9) && e.push(`LENGTHOFFI ${S(f[0])} LENGTHOFFJ ${S(f[1])} RIGIDZONE 0.5`), e.length > 0 ? ` ${e.join(" ")} ` : "";
  }, X = [], it = /* @__PURE__ */ new Set(), tt = /* @__PURE__ */ new Map();
  N.forEach((t, e) => {
    if (t.length !== 2) return;
    const o = dt(I, t);
    if (o === "BEAM") return;
    const a = I[t[0]][2] <= I[t[1]][2] ? t[0] : t[1], r = I[t[0]][2] <= I[t[1]][2] ? t[1] : t[0];
    if (Math.abs(I[a][0] - I[r][0]) > 1e-6 || Math.abs(I[a][1] - I[r][1]) > 1e-6) return;
    const f = B(a), E = W.get(e) || `Sec_${e}`, O = `${f.pt}_${E}_${o}`;
    tt.has(O) || tt.set(O, []), tt.get(O).push({ i: e, bot: a, top: r, zBot: S(I[a][2]), zTop: S(I[r][2]), planPt: f.pt, secName: E, type: o });
  }), tt.forEach((t, e) => {
    t.sort((a, r) => a.zBot - r.zBot);
    let o = 0;
    for (let a = 1; a <= t.length; a++) if (a === t.length || Math.abs(t[a].zBot - t[a - 1].zTop) > 1e-6) {
      const f = t.slice(o, a);
      f.length >= 1 && (X.push({ elemIndices: f.map((E) => E.i), planPt: f[0].planPt, bottomNodeIdx: f[0].bot, topNodeIdx: f[f.length - 1].top, secName: f[0].secName, type: f[0].type, nSegments: f.length }), f.forEach((E) => it.add(E.i))), o = a;
    }
  }), i.push("$ LINE CONNECTIVITIES");
  const ct = [];
  X.forEach((t, e) => {
    const o = `C${e + 1}`, a = B(t.topNodeIdx);
    B(t.bottomNodeIdx);
    const r = S(I[t.topNodeIdx][2]), f = S(I[t.bottomNodeIdx][2]), E = h.indexOf(r), O = h.indexOf(f), R = Math.max(1, E - O), L = at(t.elemIndices[0]);
    i.push(`  LINE  "${o}"  ${t.type}  "${a.pt}"  "${a.pt}"  ${R}`), ct.push(`  LINEASSIGN  "${o}"  "${a.story}"  SECTION "${t.secName}" ${L} RIGIDZONE 0.5 MAXSTASPC 0.5 MINNUMSTA ${t.nSegments} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  }), N.forEach((t, e) => {
    if (t.length !== 2 || it.has(e)) return;
    const o = dt(I, t), a = W.get(e) || `Sec_${e}`, r = at(e);
    if (o === "BEAM") {
      const f = B(t[0]), E = B(t[1]);
      i.push(`  LINE  "E${e + 1}"  BEAM  "${f.pt}"  "${E.pt}"  0`), ct.push(`  LINEASSIGN  "E${e + 1}"  "${f.story}"  SECTION "${a}" ${r} RIGIDZONE 0.5 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const f = I[t[0]][2] <= I[t[1]][2] ? t[0] : t[1], E = I[t[0]][2] <= I[t[1]][2] ? t[1] : t[0], O = B(E), R = S(I[f][2]), L = S(I[E][2]), F = h.indexOf(R), _ = h.indexOf(L), j = Math.max(1, _ >= 0 && F >= 0 ? _ - F : 1);
      i.push(`  LINE  "E${e + 1}"  ${o}  "${O.pt}"  "${O.pt}"  ${j}`), ct.push(`  LINEASSIGN  "E${e + 1}"  "${O.story}"  SECTION "${a}" ${r} RIGIDZONE 0.5 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    }
  }), i.push("");
  const rt = $.weightMode ?? "auto", st = /* @__PURE__ */ new Set();
  i.push("$ POINT ASSIGNS"), (_b = m.supports) == null ? void 0 : _b.forEach((t, e) => {
    const o = [];
    if (t[0] && o.push("UX"), t[1] && o.push("UY"), t[2] && o.push("UZ"), t[3] && o.push("RX"), t[4] && o.push("RY"), t[5] && o.push("RZ"), o.length > 0) {
      const a = B(e), r = a.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      i.push(`  POINTASSIGN  "${a.pt}"  "${a.story}"  RESTRAINT "${o.join(" ")}" ${r} `), st.add(`${a.pt}@${a.story}`);
    }
  }), X.forEach((t) => {
    const e = B(t.topNodeIdx), o = `${e.pt}@${e.story}`;
    !st.has(o) && e.story !== "Base" && (i.push(`  POINTASSIGN  "${e.pt}"  "${e.story}"  DIAPH "D1"  `), st.add(o));
  }), rt === "manual" && m.loads && m.loads.forEach((t, e) => {
    const o = B(e), a = `${o.pt}@${o.story}`;
    st.has(a) || (i.push(`  POINTASSIGN  "${o.pt}"  "${o.story}"  DIAPH "DISCONNECTED"  `), st.add(a));
  }), i.push(""), i.push("$ LINE ASSIGNS"), ct.forEach((t) => i.push(t)), i.push("");
  const ot = [];
  N.forEach((t, e) => {
    if (t.length === 4) {
      const o = I[t[0]], a = I[t[1]], r = I[t[2]], f = [a[0] - o[0], a[1] - o[1], a[2] - o[2]], E = [r[0] - o[0], r[1] - o[1], r[2] - o[2]], O = f[1] * E[2] - f[2] * E[1], R = f[2] * E[0] - f[0] * E[2], L = f[0] * E[1] - f[1] * E[0], F = Math.sqrt(O * O + R * R + L * L), _ = F > 1e-10 && Math.abs(L) / F < 0.5;
      ot.push({ idx: e, el: t, isWall: _ });
    }
  });
  const u = (() => {
    for (const [t, e] of C) if (!e) return l.get(t);
    return l.values().next().value || "Conc_1";
  })();
  if (ot.some((t) => !t.isWall)) {
    i.push("$ SLAB PROPERTIES");
    const t = ((_c = T.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
    i.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${u}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${S(t)} `), i.push("");
  }
  if (ot.some((t) => t.isWall)) {
    i.push("$ WALL PROPERTIES");
    const t = ((_d = T.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
    i.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${u}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${S(t)} `), i.push("");
  }
  if (ot.length > 0) {
    i.push("$ AREA CONNECTIVITIES");
    const t = [];
    ot.forEach((e, o) => {
      const { el: a, isWall: r } = e, f = r ? `W${o + 1}` : `F${o + 1}`, E = r ? "PANEL" : "FLOOR", O = a.map((R) => B(R));
      if (r) {
        const R = I[a[0]][2] <= I[a[2]][2] ? 0 : 2, L = I[a[1]][2] <= I[a[3]][2] ? 1 : 3;
        i.push(`  AREA "${f}"  ${E}  4  "${O[R].pt}"  "${O[L].pt}"  "${O[L].pt}"  "${O[R].pt}"  1  1  0  0  `);
        const F = O[R === 0 ? 2 : 0].story;
        t.push(`  AREAASSIGN  "${f}"  "${F}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else i.push(`  AREA "${f}"  ${E}  4  "${O[0].pt}"  "${O[1].pt}"  "${O[2].pt}"  "${O[3].pt}"  0  0  0  0  `), t.push(`  AREAASSIGN  "${f}"  "${O[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
    }), i.push(""), i.push("$ AREA ASSIGNS"), t.forEach((e) => i.push(e)), i.push("");
  }
  const M = rt === "manual" ? 0 : 1;
  i.push("$ LOAD PATTERNS"), i.push(`  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  ${M}`), i.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), i.push("");
  const c = [];
  return m.loads && m.loads.size > 0 && m.loads.forEach((t, e) => {
    const [o, a, r] = t, f = B(e);
    Math.abs(o) > 1e-10 && c.push(`  POINTLOAD  "${f.pt}"  "${f.story}"  TYPE "FORCE"  LC "Dead"  FX ${S(v(o))}  FY 0  FZ 0`), Math.abs(a) > 1e-10 && c.push(`  POINTLOAD  "${f.pt}"  "${f.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY ${S(v(a))}  FZ 0`), rt === "manual" && Math.abs(r) > 1e-10 && c.push(`  POINTLOAD  "${f.pt}"  "${f.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY 0  FZ ${S(v(r))}`);
  }), m.moments && m.moments.size > 0 && m.moments.forEach((t, e) => {
    const [o, a, r] = t, f = B(e);
    Math.abs(o) > 1e-10 && c.push(`  POINTLOAD  "${f.pt}"  "${f.story}"  TYPE "MOMENT"  LC "Dead"  MX ${S(v(o))}  MY 0  MZ 0`), Math.abs(a) > 1e-10 && c.push(`  POINTLOAD  "${f.pt}"  "${f.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY ${S(v(a))}  MZ 0`), Math.abs(r) > 1e-10 && c.push(`  POINTLOAD  "${f.pt}"  "${f.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY 0  MZ ${S(v(r))}`);
  }), c.length > 0 && (i.push("$ POINT OBJECT LOADS"), c.forEach((t) => i.push(t)), i.push("")), i.push("$ ANALYSIS OPTIONS"), i.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), i.push('  PDELTA  METHOD "NONE"  '), i.push(""), i.push("$ MASS SOURCE"), i.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), i.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), i.push(""), i.push("$ LOAD CASES"), i.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), i.push('  LOADCASE "Dead"  LOADPAT  "Dead"  SF 1 '), i.push('  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), i.push('  LOADCASE "Live"  LOADPAT  "Live"  SF 1 '), i.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), i.push('  LOADCASE "Modal"  MAXMODES 12  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), i.push(""), i.push("$ LOAD COMBINATIONS"), i.push('  COMBO "1.4D"  TYPE "Linear Add"  '), i.push('  COMBO "1.4D"  LOADCASE  "Dead"  SF 1.4 '), i.push('  COMBO "1.2D+1.6L"  TYPE "Linear Add"  '), i.push('  COMBO "1.2D+1.6L"  LOADCASE  "Dead"  SF 1.2 '), i.push('  COMBO "1.2D+1.6L"  LOADCASE  "Live"  SF 1.6 '), i.push(""), i.push("  END"), i.push("$ END OF MODEL FILE"), i.join(`\r
`);
}
function dt($, I) {
  const N = $[I[0]], m = $[I[1]], T = Math.abs(m[2] - N[2]), D = Math.sqrt((m[0] - N[0]) ** 2 + (m[1] - N[1]) ** 2), G = T > D * 0.5;
  return G && D > 0.01 ? "BRACE" : G ? "COLUMN" : "BEAM";
}
export {
  Nt as a,
  gt as b,
  mt as c,
  $t as e,
  Mt as p
};
