function ht() {
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
  let O = false;
  const M = 0.9;
  function u(I, C) {
    var _a, _b, _c, _d;
    if (!I.frequencies || I.frequencies.length === 0) {
      $.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const v = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], B = [0, 0, 0, 0, 0, 0], S = I.frequencies.length;
    let n = -1, A = -1, G = -1, z = 0, W = 0;
    {
      const a = [0, 0, 0, 0, 0, 0];
      for (let d = 0; d < S; d++) {
        const R = ((_a = I.massParticipation) == null ? void 0 : _a[d]) || [0, 0, 0, 0, 0, 0];
        for (let f = 0; f < 6; f++) a[f] += R[f];
        n < 0 && a[0] >= M && (n = d + 1), A < 0 && a[1] >= M && (A = d + 1), G < 0 && a[0] >= M && a[1] >= M && (G = d + 1);
      }
      z = a[0], W = a[1];
    }
    let P = -1, D = -1, H = -1;
    const T = 0.1;
    for (let a = 0; a < S; a++) {
      const d = ((_b = I.massParticipation) == null ? void 0 : _b[a]) || [0, 0, 0, 0, 0, 0];
      P < 0 && d[0] > T && (P = a + 1), D < 0 && d[1] > T && (D = a + 1), H < 0 && d[5] > T && (H = a + 1);
    }
    const p = G > 0 ? `<span style="color:#0f0">\u2713 ASCE 7-22 \xA712.9.1.1 \u2014 90 % alcanzado en X e Y al modo ${G} de ${S}</span>` : n > 0 && A < 0 ? `<span style="color:#fa0">\u26A0 X cumple en modo ${n}, Y todav\xEDa en ${(W * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : A > 0 && n < 0 ? `<span style="color:#fa0">\u26A0 Y cumple en modo ${A}, X todav\xEDa en ${(z * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : `<span style="color:#f44">\u2717 ASCE 7-22 NO cumplido en ${S} modos \xB7 \u03A3Ux=${(z * 100).toFixed(1)} % \xB7 \u03A3Uy=${(W * 100).toFixed(1)} % \u2014 aumentar nModes</span>`, e = (() => {
      const a = (d, R) => {
        var _a2;
        if (d < 0) return `<span style="color:#f44">${R}: no encontrado en ${S} modos</span>`;
        const f = ((_a2 = I.massParticipation) == null ? void 0 : _a2[d - 1]) || [0, 0, 0, 0, 0, 0], y = R === "Ux" ? 0 : R === "Uy" ? 1 : 5, L = I.frequencies[d - 1] > 0 ? 1 / I.frequencies[d - 1] : 0;
        return `<span style="color:#0f0">${R}: modo ${d}, T=${L.toFixed(3)} s, MPF=${(f[y] * 100).toFixed(1)} %</span>`;
      };
      return `<div style="margin:4px 0; padding:4px 6px; background:rgba(0,255,255,0.05); border-left:2px solid #0ff; font-size:11px;">
  \u{1F3AF} <b>Modos s\xEDsmicos principales</b> (ASCE 7-22 \xA712.9.1):<br>
  ${a(P, "Ux")} \xB7 ${a(D, "Uy")} \xB7 ${a(H, "Rz")}
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
    if (t += '<div id="modal-body" style="padding:0 12px 10px 12px;">', t += `<div style="padding:6px 0; font-weight:bold; font-size:13px;">${p}</div>`, t += e, C.properties) for (const a of C.properties) t += `<span style="color:#888">${a}</span>
`;
    t += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const a of v) t += `<th style="padding:2px 5px">${a}</th>`;
    t += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let a = 0; a < 6; a++) B[a] = 0;
    if (I.frequencies.forEach((a, d) => {
      var _a2;
      const R = a > 0 ? 1 / a : 0, f = a * 2 * Math.PI, y = ((_a2 = I.massParticipation) == null ? void 0 : _a2[d]) || [0, 0, 0, 0, 0, 0];
      for (let q = 0; q < 6; q++) B[q] += y[q];
      let L = 0, X = y[0];
      for (let q = 1; q < 6; q++) y[q] > X && (X = y[q], L = q);
      const x = X < 0.05 ? "\u2014" : `${v[L]} (${(X * 100).toFixed(0)} %)`, V = L === 0 || L === 1 ? "#0f0" : L === 5 ? "#0ff" : L === 2 ? "#fa0" : "#888", Q = d + 1 === n, tt = d + 1 === A, at = d + 1 === G;
      t += `<tr style="border-bottom:1px solid #fff1; ${at ? "background:rgba(0,255,0,0.12);" : Q || tt ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${d + 1}${at ? " \u2605" : ""}</td>
  <td style="padding:2px 6px; text-align:right">${a.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${R.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${f.toFixed(2)}</td>`;
      for (let q = 0; q < 6; q++) {
        const i = (y[q] * 100).toFixed(1), g = y[q] > 0.5 ? "#f00" : y[q] > 0.1 ? "#ff0" : "#0f0";
        t += `<td style="padding:2px 5px; text-align:right; color:${g}">${i}%</td>`;
      }
      const K = B[0] >= M ? "#0f0" : "#0ff", it = B[1] >= M ? "#0f0" : "#0ff";
      t += `<td style="padding:2px 5px; text-align:right; color:${K}">${(B[0] * 100).toFixed(1)}%${Q ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${it}">${(B[1] * 100).toFixed(1)}%${tt ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(B[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${V}">${x}</td></tr>`;
    }), t += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, t += "</div>", $.innerHTML = t, O) {
      const a = $.querySelector("#modal-body"), d = $.querySelector("#modal-minimize");
      a && (a.style.display = "none"), d && (d.textContent = "\u25A2", d.title = "Restaurar");
    }
    (_c = $.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      O = !O;
      const a = $.querySelector("#modal-body"), d = $.querySelector("#modal-minimize");
      O ? (a.style.display = "none", d.textContent = "\u25A2", d.title = "Restaurar") : (a.style.display = "block", d.textContent = "\u25AC", d.title = "Minimizar");
    }), (_d = $.querySelector("#modal-copy")) == null ? void 0 : _d.addEventListener("click", () => {
      const a = [];
      a.push(`Modal Analysis \u2014 ${C.title}`), a.push(p.replace(/<[^>]+>/g, ""));
      const d = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${v.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      a.push(d), a.push("-".repeat(d.length));
      const R = [0, 0, 0, 0, 0, 0];
      I.frequencies.forEach((y, L) => {
        var _a2;
        const X = y > 0 ? 1 / y : 0, x = y * 2 * Math.PI, V = ((_a2 = I.massParticipation) == null ? void 0 : _a2[L]) || [0, 0, 0, 0, 0, 0];
        for (let K = 0; K < 6; K++) R[K] += V[K];
        let Q = 0, tt = V[0];
        for (let K = 1; K < 6; K++) V[K] > tt && (tt = V[K], Q = K);
        const at = tt < 0.05 ? "\u2014" : `${v[Q]} (${(tt * 100).toFixed(0)}%)`, st = V.map((K) => ((K * 100).toFixed(1) + "%").padStart(6)).join(" ");
        a.push(`${String(L + 1).padStart(4)}  ${y.toFixed(4).padStart(9)}  ${X.toFixed(4).padStart(9)}  ${x.toFixed(2).padStart(9)}  ${st}  ${(R[0] * 100).toFixed(1).padStart(5)}%  ${(R[1] * 100).toFixed(1).padStart(5)}%  ${(R[5] * 100).toFixed(1).padStart(5)}%  ${at}`);
      }), navigator.clipboard.writeText(a.join(`
`));
      const f = $.querySelector("#modal-copy");
      f.textContent = "\u2713", setTimeout(() => f.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: $, render: u };
}
function St($) {
  var _a;
  const O = $.split(/\r?\n/), M = { force: "TONF", length: "M" }, u = [], I = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), B = [], S = [], n = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), G = [], z = [];
  let W = "", P = "";
  const D = /* @__PURE__ */ new Map();
  for (const r of O) {
    const E = r.trim();
    if (!E || E.startsWith("$")) {
      E.startsWith("$ ") && (P = E.substring(2).trim());
      continue;
    }
    if (P && (D.has(P) || D.set(P, []), D.get(P).push(r)), P === "CONTROLS") {
      const o = E.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
      o && (M.force = o[1], M.length = o[2]);
      const l = E.match(/TITLE2\s+"([^"]+)"/);
      l && (W = l[1]);
    }
    if (P === "STORIES - IN SEQUENCE FROM TOP") {
      const o = E.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
      if (o) {
        const l = o[1], s = o[2] ? parseFloat(o[2]) : 0, c = o[3] ? parseFloat(o[3]) : void 0;
        u.push({ name: l, height: s, elev: c ?? 0 });
      }
    }
    if (P === "MATERIAL PROPERTIES") {
      const o = E.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
      if (o) {
        const l = o[1];
        I.has(l) || I.set(l, { type: o[2] || "", E: 0, G: 0, nu: 0 });
        const s = I.get(l);
        o[2] && (s.type = o[2]);
        const c = E.match(/\bE\s+([\d.eE+-]+)/);
        c && (s.E = parseFloat(c[1]));
        const m = E.match(/\bU\s+([\d.eE+-]+)/);
        m && (s.nu = parseFloat(m[1]), s.G = s.E / (2 * (1 + s.nu)));
        const h = E.match(/\bFY\s+([\d.eE+-]+)/);
        h && (s.fy = parseFloat(h[1]));
        const U = E.match(/\bFC\s+([\d.eE+-]+)/);
        U && (s.fc = parseFloat(U[1]));
        const b = E.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
        b && (s.density = parseFloat(b[1]));
      }
    }
    if (P === "FRAME SECTIONS") {
      const o = E.match(/FRAMESECTION\s+"([^"]+)"/);
      if (o) {
        const l = o[1];
        C.has(l) || C.set(l, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
        const s = C.get(l), c = E.match(/MATERIAL\s+"([^"]+)"/);
        c && (s.material = c[1]);
        const m = E.match(/SHAPE\s+"([^"]+)"/);
        m && (s.shape = m[1]);
        const h = E.match(/\bD\s+([\d.eE+-]+)/);
        h && (s.D = parseFloat(h[1]));
        const U = E.match(/\bB\s+([\d.eE+-]+)/);
        U && (s.B = parseFloat(U[1]));
        const b = E.match(/\bTF\s+([\d.eE+-]+)/);
        b && (s.TF = parseFloat(b[1]));
        const w = E.match(/\bTW\s+([\d.eE+-]+)/);
        w && (s.TW = parseFloat(w[1]));
        const Z = E.match(/\bR\s+([\d.eE+-]+)/);
        Z && (s.R = parseFloat(Z[1]));
        const j = E.match(/FILLMATERIAL\s+"([^"]+)"/);
        j && (s.fillMaterial = j[1]);
        const et = E.match(/I2MOD\s+([\d.eE+-]+)/);
        et && (s.modI2 = parseFloat(et[1]));
        const nt = E.match(/I3MOD\s+([\d.eE+-]+)/);
        nt && (s.modI3 = parseFloat(nt[1]));
      }
    }
    if (P === "POINT COORDINATES") {
      const o = E.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
      o && v.set(o[1], [parseFloat(o[2]), parseFloat(o[3])]);
    }
    if (P === "LINE CONNECTIVITIES") {
      const o = E.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
      o && B.push({ name: o[1], type: o[2], pt1: o[3], pt2: o[4], nStories: parseInt(o[5]) });
    }
    if (P === "POINT ASSIGNS") {
      const o = E.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
      o && n.set(`${o[1]}@${o[2]}`, o[3].split(/\s+/));
    }
    if (P === "LINE ASSIGNS") {
      const o = E.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
      if (o) {
        const l = { story: o[2], section: o[3], rigidZone: 0, releases: [], angle: 0 }, s = E.match(/RIGIDZONE\s+([\d.eE+-]+)/);
        s && (l.rigidZone = parseFloat(s[1]));
        const c = E.match(/RELEASE\s+"([^"]+)"/);
        c && (l.releases = c[1].split(/\s+/));
        const m = E.match(/ANG\s+([-\d.eE+]+)/);
        m && (l.angle = parseFloat(m[1])), A.set(`${o[1]}@${o[2]}`, l);
      }
    }
    if (P === "GRIDS") {
      const o = E.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
      o && z.push({ label: o[1], dir: o[2], coord: parseFloat(o[3]) });
    }
    if (P === "FRAME OBJECT LOADS") {
      const o = E.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      o && G.push({ line: o[1], story: o[2], type: o[3], dir: o[4], lc: o[5], val: parseFloat(o[6]) });
    }
    if (P === "AREA CONNECTIVITIES") {
      const o = E.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
      if (o) {
        const l = ((_a = o[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((s) => s.replace(/"/g, ""))) || [];
        S.push({ name: o[1], pts: l, nStories: 0 });
      }
    }
  }
  const H = /* @__PURE__ */ new Map();
  if (u.length > 0) {
    const r = u.length - 1;
    H.set(u[r].name, u[r].elev);
    for (let E = r - 1; E >= 0; E--) {
      const l = H.get(u[E + 1].name) + u[E].height;
      u[E].elev = l, H.set(u[E].name, l);
    }
  }
  const T = [], p = [], e = /* @__PURE__ */ new Map(), t = (r, E) => `${r}@${E}`, a = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
  for (const r of B) d.set(r.name, r);
  for (const r of B) for (const [E, o] of A) {
    if (!E.startsWith(r.name + "@")) continue;
    const l = o.story, s = u.findIndex((c) => c.name === l);
    if (!(s < 0)) if (r.type === "COLUMN" || r.type === "BRACE") {
      a.add(t(r.pt2, l));
      const c = Math.max(r.nStories, 1), m = Math.min(s + c, u.length - 1);
      a.add(t(r.pt1, u[m].name));
    } else a.add(t(r.pt1, l)), a.add(t(r.pt2, l));
  }
  for (const [r] of n) a.add(r);
  for (const r of a) {
    const [E, o] = r.split("@"), l = v.get(E), s = H.get(o);
    l === void 0 || s === void 0 || (T.push([l[0], l[1], s]), p.push(r), e.set(r, T.length - 1));
  }
  const R = [], f = [], y = [], L = [], X = /* @__PURE__ */ new Map();
  for (const r of B) for (const [E, o] of A) {
    if (!E.startsWith(r.name + "@")) continue;
    const l = o.story, s = u.findIndex((w) => w.name === l);
    if (s < 0) continue;
    let c, m;
    if (r.type === "COLUMN" || r.type === "BRACE") {
      const w = Math.max(r.nStories, 1), Z = Math.min(s + w, u.length - 1);
      c = t(r.pt1, u[Z].name), m = t(r.pt2, l);
    } else c = t(r.pt1, l), m = t(r.pt2, l);
    const h = e.get(c), U = e.get(m);
    if (h === void 0 || U === void 0 || h === U) continue;
    const b = R.length;
    if (R.push([h, U]), f.push(r.name), y.push(r.type), L.push(l), X.set(b, o.section), o.rigidZone > 0 && st.set(b, [o.rigidZone, o.rigidZone]), o.releases.length > 0) {
      const w = new Array(12).fill(false), Z = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const j of o.releases) {
        const et = Z[j];
        et !== void 0 && (w[et] = true);
      }
      K.set(b, w);
    }
  }
  const x = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map();
  for (const [r, E] of X) {
    const o = C.get(E);
    if (!o) continue;
    const l = I.get(o.material);
    l && (x.set(r, l.E), V.set(r, l.G));
    const s = o.D, c = o.B, m = o.TF, h = o.TW;
    let U = 0, b = 0, w = 0, Z = 0, j = 0, et = 0, nt = "rect";
    switch (o.shape) {
      case "Concrete Rectangular":
        U = s * c, b = c * s ** 3 / 12, w = s * c ** 3 / 12, Z = c * s ** 3 * (1 / 3 - 0.21 * (s / c) * (1 - s ** 4 / (12 * c ** 4))), j = et = 5 / 6 * U, nt = "rect";
        break;
      case "Concrete Circle":
        U = Math.PI * s ** 2 / 4, b = w = Math.PI * s ** 4 / 64, Z = Math.PI * s ** 4 / 32, j = et = 0.9 * U, nt = "circ";
        break;
      case "Steel I/Wide Flange":
        U = 2 * c * m + (s - 2 * m) * h, b = (c * s ** 3 - (c - h) * (s - 2 * m) ** 3) / 12, w = (2 * m * c ** 3 + (s - 2 * m) * h ** 3) / 12, Z = (2 * c * m ** 3 + (s - 2 * m) * h ** 3) / 3, j = (s - 2 * m) * h, et = 2 * c * m * 5 / 6, nt = "I";
        break;
      case "Steel Tube":
        U = s * c - (s - 2 * h) * (c - 2 * h), b = (c * s ** 3 - (c - 2 * h) * (s - 2 * h) ** 3) / 12, w = (s * c ** 3 - (s - 2 * h) * (c - 2 * h) ** 3) / 12, Z = 2 * h * (s - h) * (c - h) * ((s - h) * (c - h)) / (s - h + (c - h)), j = 2 * s * h, et = 2 * c * h, nt = "HSS";
        break;
      case "Filled Steel Tube":
        U = s * c, b = c * s ** 3 / 12, w = s * c ** 3 / 12, Z = 2 * h * (s - h) * (c - h) * ((s - h) * (c - h)) / (s - h + (c - h)), j = 2 * s * h + 5 / 6 * (s - 2 * h) * (c - 2 * h), et = 2 * c * h + 5 / 6 * (s - 2 * h) * (c - 2 * h), nt = "CFT";
        break;
      case "Steel Angle": {
        const ot = m || h;
        U = ot * (s + c - ot), b = ot * (s ** 3 + c * ot ** 2 + ot ** 2 * (s - ot)) / 12, w = ot * (c ** 3 + s * ot ** 2 + ot ** 2 * (c - ot)) / 12, Z = (s + c - ot) * ot ** 3 / 3, j = s * ot, et = c * ot, nt = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        U = 2 * c * m + (s - 2 * m) * h, b = (h * s ** 3 + 2 * c * m * (s - m) ** 2) / 12, w = (2 * m * c ** 3 + (s - 2 * m) * h ** 3) / 12, Z = (2 * c * m ** 3 + (s - 2 * m) * h ** 3) / 3, j = (s - 2 * m) * h, et = 2 * c * m * 5 / 6, nt = o.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        U = 2 * (2 * c * m + (s - 2 * m) * h), b = 2 * (h * s ** 3 + 2 * c * m * (s - m) ** 2) / 12, w = 2 * (2 * m * c ** 3 + (s - 2 * m) * h ** 3) / 12, Z = 2 * (2 * c * m ** 3 + (s - 2 * m) * h ** 3) / 3, j = 2 * (s - 2 * m) * h, et = 4 * c * m * 5 / 6, nt = "2C";
        break;
      default:
        s > 0 && c > 0 && (U = s * c, b = c * s ** 3 / 12, w = s * c ** 3 / 12, Z = Math.min(s, c) * Math.max(s, c) ** 3 / 3 * 0.3, j = et = 5 / 6 * U);
        break;
    }
    o.modI2 && (w *= o.modI2), o.modI3 && (b *= o.modI3), Q.set(r, U), it.set(r, b), q.set(r, w), i.set(r, Z), j > 0 && tt.set(r, j), et > 0 && at.set(r, et), g.set(r, { type: nt, b: c || void 0, h: s || void 0, d: nt === "circ" || nt === "pipe" ? s : void 0, tw: h || void 0, tf: m || void 0, r: o.R, name: E });
  }
  const N = /* @__PURE__ */ new Map();
  for (const [r, E] of n) {
    const o = e.get(r);
    if (o === void 0) continue;
    const l = [false, false, false, false, false, false];
    for (const s of E) s === "UX" && (l[0] = true), s === "UY" && (l[1] = true), s === "UZ" && (l[2] = true), s === "RX" && (l[3] = true), s === "RY" && (l[4] = true), s === "RZ" && (l[5] = true);
    N.set(o, l);
  }
  const k = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
  for (let r = 0; r < f.length; r++) _.set(`${f[r]}@${L[r]}`, r);
  for (const r of G) {
    const E = _.get(`${r.line}@${r.story}`);
    if (E === void 0) continue;
    const [o, l] = R[E], s = T[o], c = T[l], m = Math.sqrt((c[0] - s[0]) ** 2 + (c[1] - s[1]) ** 2 + (c[2] - s[2]) ** 2);
    if (m < 1e-10) continue;
    const h = r.val * m / 2;
    let U = 0, b = 0, w = 0;
    r.dir === "GRAV" || r.dir === "GRAVITY" ? w = -h : r.dir === "X" ? U = h : r.dir === "Y" ? b = h : r.dir === "Z" && (w = -h);
    for (const Z of [o, l]) {
      const j = k.get(Z) || [0, 0, 0, 0, 0, 0];
      j[0] += U, j[1] += b, j[2] += w, k.set(Z, j);
    }
  }
  const F = /* @__PURE__ */ new Map();
  for (const [r, E] of X) {
    const o = C.get(E);
    if (!o) continue;
    const l = I.get(o.material);
    (l == null ? void 0 : l.density) && F.set(r, l.density);
  }
  return { units: M, stories: u.reverse(), materials: I, frameSections: C, nodes: T, nodeNames: p, nodeNameToIdx: e, elements: R, elementNames: f, elementTypes: y, elementStories: L, elementSections: X, nodeInputs: { supports: N, loads: k }, elementInputs: { elasticities: x, shearModuli: V, areas: Q, momentsOfInertiaZ: it, momentsOfInertiaY: q, torsionalConstants: i, shearAreasY: tt, shearAreasZ: at, rigidOffsets: st, momentReleases: K, densities: F, sectionShapes: g }, sectionShapes: g, grids: z, info: { nNodes: T.length, nFrames: R.length, nAreas: S.length, title: W }, rawSections: D };
}
function Y($) {
  return $ && parseFloat($) || 0;
}
function ct($) {
  const O = /* @__PURE__ */ new Map(), M = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let u;
  for (; (u = M.exec($)) !== null; ) O.set(u[1], u[2] !== void 0 ? u[2] : u[3]);
  return O;
}
function At($) {
  const O = $.split(/\r?\n/);
  return O.some((u) => u.trim().startsWith("TABLE:")) ? lt(O) : pt(O);
}
function lt($) {
  var _a, _b, _c, _d, _e, _f;
  const O = [];
  let M = "";
  for (const H of $) {
    const T = H.trimEnd();
    T.endsWith("_") ? M += T.slice(0, -1) + " " : (M += T, O.push(M), M = "");
  }
  M && O.push(M);
  const u = { force: "KN", length: "m" };
  let I = "UX,UY,UZ,RX,RY,RZ";
  const C = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), n = [], A = [], G = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), P = [];
  let D = "";
  for (const H of O) {
    const T = H.trim();
    if (!T || T.startsWith(";") || T.startsWith("File ")) continue;
    if (T.startsWith("TABLE:")) {
      const e = T.match(/TABLE:\s+"(.+?)"/);
      D = e ? e[1].toUpperCase() : "";
      continue;
    }
    if (T === "END TABLE DATA") {
      D = "";
      continue;
    }
    const p = ct(T);
    switch (D) {
      case "PROGRAM CONTROL": {
        const e = p.get("CurrUnits");
        if (e) {
          const t = e.split(",").map((a) => a.trim());
          t[0] && (u.force = t[0]), t[1] && (u.length = t[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const e = p.get("Material");
        e && !C.has(e) && C.set(e, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const e = p.get("Material");
        if (e) {
          const t = C.get(e) || { E: 0, nu: 0, G: 0 };
          t.E = Y(p.get("E1")), t.G = Y(p.get("G12")), t.nu = Y(p.get("U12")), t.density = Y(p.get("UnitMass")), C.set(e, t);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const e = p.get("Material");
        e && C.has(e) && (C.get(e).fy = Y(p.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const e = p.get("SectionName");
        e && v.set(e, { material: p.get("Material") || "", shape: p.get("Shape") || "Rectangular", D: Y(p.get("t3")), B: Y(p.get("t2")), TF: Y(p.get("tf")), TW: Y(p.get("tw")), A: Y(p.get("Area")), Iz: Y(p.get("I33")), Iy: Y(p.get("I22")), J: Y(p.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const e = p.get("Section");
        e && B.set(e, { material: p.get("Material") || "", type: p.get("Type") || "Shell", thickness: Y(p.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const e = p.get("Joint");
        if (e) {
          const t = Y(p.get("XorR")), a = Y(p.get("Y")), d = Y(p.get("Z"));
          S.set(e, [t, a, d]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const e = p.get("Frame"), t = p.get("JointI"), a = p.get("JointJ");
        e && t && a && n.push({ name: e, j1: t, j2: a });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const e = p.get("Area");
        if (e) {
          const t = parseInt(p.get("NumJoints") || "4"), a = [];
          for (let d = 1; d <= t; d++) {
            const R = p.get(`Joint${d}`);
            R && a.push(R);
          }
          a.length >= 3 && A.push({ name: e, joints: a });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const e = p.get("Joint");
        if (e) {
          const t = [((_a = p.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = p.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = p.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = p.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = p.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = p.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          G.set(e, t);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const e = p.get("Frame"), t = p.get("AnalSect");
        e && t && z.set(e, t);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const e = p.get("Area"), t = p.get("Section");
        e && t && W.set(e, t);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const e = p.get("Joint");
        e && P.push({ joint: e, fx: Y(p.get("F1")), fy: Y(p.get("F2")), fz: Y(p.get("F3")), mx: Y(p.get("M1")), my: Y(p.get("M2")), mz: Y(p.get("M3")) });
        break;
      }
    }
  }
  return rt(u, I, C, v, B, S, n, A, G, z, W, P);
}
function pt($) {
  const O = { force: "KN", length: "m" };
  let M = "UX,UY,UZ,RX,RY,RZ";
  const u = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), B = [], S = [], n = /* @__PURE__ */ new Map(), A = [];
  let G = "", z = "";
  for (const D of $) {
    const H = D.trim();
    if (!H || H.startsWith(";")) continue;
    if (!D.startsWith(" ") && !D.startsWith("	")) {
      const e = H.toUpperCase();
      if (e === "END") break;
      e.startsWith("SHELL SECTION") ? G = "SHELL SECTION" : e.startsWith("FRAME SECTION") ? G = "FRAME SECTION" : G = e.split(/\s+/)[0];
      continue;
    }
    const T = ct(H), p = H.split(/\s+/);
    switch (G) {
      case "SYSTEM": {
        const e = T.get("DOF");
        e && (M = e);
        const t = T.get("LENGTH");
        t && (O.length = t);
        const a = T.get("FORCE");
        a && (O.force = a);
        break;
      }
      case "JOINT": {
        const e = p[0];
        v.set(e, [Y(T.get("X")), Y(T.get("Y")), Y(T.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const e = T.get("ADD"), t = T.get("DOF");
        if (e && t) {
          const a = t.split(","), d = [false, false, false, false, false, false];
          for (const R of a) {
            const f = R.toUpperCase();
            (f === "UX" || f === "U1") && (d[0] = true), (f === "UY" || f === "U2") && (d[1] = true), (f === "UZ" || f === "U3") && (d[2] = true), (f === "RX" || f === "R1") && (d[3] = true), (f === "RY" || f === "R2") && (d[4] = true), (f === "RZ" || f === "R3") && (d[5] = true);
          }
          n.set(e, d);
        }
        break;
      }
      case "MATERIAL": {
        const e = T.get("NAME");
        if (e) z = e, u.set(e, { E: 0, nu: 0, G: 0 });
        else if (z) {
          const t = u.get(z), a = T.get("E");
          a && (t.E = Y(a));
          const d = T.get("U");
          d && (t.nu = Y(d)), t.G = t.E / (2 * (1 + t.nu));
          const R = T.get("M");
          R && (t.density = Y(R));
        }
        break;
      }
      case "SHELL": {
        const e = p[0], t = T.get("J");
        T.get("SEC"), t && S.push({ name: e, joints: t.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const e = T.get("NAME");
        e && C.set(e, { material: T.get("MAT") || "", type: T.get("TYPE") || "Shell", thickness: Y(T.get("TH")) });
        break;
      }
      case "FRAME": {
        const e = p[0], t = T.get("J");
        if (t) {
          const a = t.split(",");
          a.length >= 2 && B.push({ name: e, j1: a[0], j2: a[1] });
        }
        break;
      }
      case "LOAD": {
        const e = T.get("ADD");
        e && A.push({ joint: e, fx: Y(T.get("UX")), fy: Y(T.get("UY")), fz: Y(T.get("UZ")), mx: Y(T.get("MX")), my: Y(T.get("MY")), mz: Y(T.get("MZ")) });
        break;
      }
    }
  }
  return rt(O, M, u, I, C, v, B, S, n, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), A);
}
function rt($, O, M, u, I, C, v, B, S, n, A, G) {
  var _a;
  const z = [], W = /* @__PURE__ */ new Map(), P = [];
  for (const [f, y] of C) W.set(f, P.length), z.push(f), P.push(y);
  const D = [], H = [], T = /* @__PURE__ */ new Map();
  for (const f of v) {
    const y = W.get(f.j1), L = W.get(f.j2);
    if (y !== void 0 && L !== void 0) {
      const X = D.length;
      D.push([y, L]), H.push(f.name);
      const x = n.get(f.name);
      x && T.set(X, x);
    }
  }
  const p = D.length;
  for (const f of B) {
    const y = f.joints.map((L) => W.get(L)).filter((L) => L !== void 0);
    if (y.length >= 3) {
      const L = D.length;
      D.push(y), H.push(f.name);
      const X = A.get(f.name);
      X && T.set(L, X);
    }
  }
  const e = D.length - p, t = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, a = /* @__PURE__ */ new Map(), d = M.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let f = 0; f < D.length; f++) {
    const y = T.get(f), L = y ? u.get(y) : null, X = y ? I.get(y) : null;
    if (L || D[f].length === 2) {
      const x = L || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, V = M.get(x.material) || d, Q = V.E || d.E, tt = V.nu || 0.3, at = V.G || Q / (2 * (1 + tt));
      t.elasticities.set(f, Q), t.shearModuli.set(f, at), t.areas.set(f, x.A || x.D * x.B), t.momentsOfInertiaZ.set(f, x.Iz || x.B * x.D ** 3 / 12), t.momentsOfInertiaY.set(f, x.Iy || x.D * x.B ** 3 / 12), t.torsionalConstants.set(f, x.J || 0), t.densities.set(f, V.density || 0), ((_a = x.shape) == null ? void 0 : _a.includes("Wide Flange")) || x.shape === "I" ? a.set(f, { type: "I", b: x.B, h: x.D, name: y || "I-section" }) : a.set(f, { type: "rect", b: x.B, h: x.D });
    } else if (X) {
      const x = M.get(X.material) || d, V = x.E || d.E, Q = x.nu || 0.2, tt = x.G || V / (2 * (1 + Q));
      t.elasticities.set(f, V), t.shearModuli.set(f, tt), t.thicknesses.set(f, X.thickness), t.poissonsRatios.set(f, Q), t.densities.set(f, x.density || 0);
    }
  }
  const R = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [f, y] of S) {
    const L = W.get(f);
    L !== void 0 && R.supports.set(L, y);
  }
  for (const f of G) {
    const y = W.get(f.joint);
    if (y !== void 0) {
      const L = R.forces.get(y) || [0, 0, 0, 0, 0, 0];
      L[0] += f.fx, L[1] += f.fy, L[2] += f.fz, L[3] += f.mx, L[4] += f.my, L[5] += f.mz, R.forces.set(y, L);
    }
  }
  return { units: $, dof: O, materials: M, frameSections: u, shellSections: I, nodes: P, nodeNames: z, nodeNameToIdx: W, elements: D, elementNames: H, elementSections: T, nodeInputs: R, elementInputs: t, sectionShapes: a, info: { nNodes: P.length, nFrames: p, nShells: e, title: `SAP2000 (${p} frames, ${e} shells)` } };
}
function ut($) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: O, elements: M, nodeInputs: u, elementInputs: I } = $, C = $.units || { force: "KN", length: "m" }, v = $.title || "Awatif Model", B = [], S = (e) => B.push(e), n = () => B.push(" ");
  S(`File ${v}.$2k was saved on m/d/yy at h:mm:ss`), n(), S('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), S("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), n();
  const A = [], G = [];
  if (M.forEach((e, t) => {
    e.length === 2 ? A.push(t) : G.push(t);
  }), A.length > 0) {
    S('TABLE:  "CONNECTIVITY - FRAME"');
    for (const e of A) {
      const t = M[e];
      S(`   Frame=${e + 1}   JointI=${t[0] + 1}   JointJ=${t[1] + 1}   IsCurved=No`);
    }
    n();
  }
  if (G.length > 0) {
    S('TABLE:  "CONNECTIVITY - AREA"');
    for (const e of G) {
      const t = M[e], a = t.map((d, R) => `Joint${R + 1}=${d + 1}`).join("   ");
      S(`   Area=${e + 1}   NumJoints=${t.length}   ${a}`);
    }
    n();
  }
  S('TABLE:  "COORDINATE SYSTEMS"'), S("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), n(), S('TABLE:  "DATABASE FORMAT TYPES"'), S("   UnitsCurr=Yes   OverrideE=No"), n();
  const z = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map();
  for (const e of A) {
    const t = ((_a = I.areas) == null ? void 0 : _a.get(e)) || 0, a = ((_b = I.momentsOfInertiaZ) == null ? void 0 : _b.get(e)) || 0, d = ((_c = I.momentsOfInertiaY) == null ? void 0 : _c.get(e)) || 0, R = ((_d = I.torsionalConstants) == null ? void 0 : _d.get(e)) || 0, f = ((_e = I.elasticities) == null ? void 0 : _e.get(e)) || 0, y = `MAT_${Math.round(f)}`, L = `A${t.toPrecision(6)}_Iz${a.toPrecision(6)}`;
    if (!z.has(L)) {
      let x = 0.3, V = 0.3;
      t > 0 && a > 0 && (x = Math.sqrt(12 * a / t), V = t / x), z.set(L, { A: t, Iz: a, Iy: d, J: R, b: V, h: x, matKey: y });
    }
    const X = [...z.keys()].indexOf(L) + 1;
    W.set(e, `SEC${X}`);
  }
  if (A.length > 0) {
    S('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const e of A) {
      const t = W.get(e) || "SEC1";
      S(`   Frame=${e + 1}   AutoSelect=N.A.   AnalSect=${t}   MatProp=Default`);
    }
    n();
  }
  if (z.size > 0) {
    S('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let e = 0;
    for (const [, t] of z) {
      e++;
      const a = t.A * 5 / 6;
      S(`   SectionName=SEC${e}   Material=${t.matKey}   Shape=Rectangular   t3=${J(t.h)}   t2=${J(t.b)}   Area=${J(t.A)}   TorsConst=${J(t.J)}   I33=${J(t.Iz)}   I22=${J(t.Iy)}   I23=0   AS2=${J(a)}   AS3=${J(a)} _`), S("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    n();
  }
  const P = !!$.layeredSection && G.length > 0, D = $.layeredSection, H = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map();
  if (!P) for (const e of G) {
    const t = ((_f = I.thicknesses) == null ? void 0 : _f.get(e)) || 0.1, a = ((_g = I.elasticities) == null ? void 0 : _g.get(e)) || 0, d = `MAT_${Math.round(a)}`, R = `t${t.toPrecision(6)}`;
    H.has(R) || H.set(R, { t, matKey: d });
    const f = [...H.keys()].indexOf(R) + 1;
    T.set(e, `SSEC${f}`);
  }
  if (G.length > 0) {
    S('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const e of G) {
      const t = P ? D.name : T.get(e) || "SSEC1";
      S(`   Area=${e + 1}   Section=${t}   MatProp=Default`);
    }
    if (n(), S('TABLE:  "AREA SECTION PROPERTIES"'), P) {
      const e = D, t = ((_h = e.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      S(`   Section=${e.name}   Material=${t}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${J(e.totalThickness)}   BendThick=${J(e.totalThickness)}   Color=Magenta`);
    } else {
      let e = 0;
      for (const [, t] of H) e++, S(`   Section=SSEC${e}   Material=${t.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${J(t.t)}   BendThick=${J(t.t)}   Color=Cyan`);
    }
    if (n(), P) {
      S('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const e = D;
      for (const t of e.layers) {
        const a = t.angle ?? 0, d = t.numIntPts ?? 3;
        S(`   Section=${e.name}   LayerName=${t.name}   Distance=${J(t.distance)}   Thickness=${J(t.thickness)}   Type=Shell   NumIntPts=${d}   Material=${t.material}   MatAngle=${J(a * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      n();
    }
  }
  S('TABLE:  "JOINT COORDINATES"');
  for (let e = 0; e < O.length; e++) {
    const t = O[e];
    S(`   Joint=${e + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${J(t[0])}   Y=${J(t[1])}   Z=${J(t[2])}   SpecialJt=No`);
  }
  if (n(), u.supports && u.supports.size > 0) {
    S('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [e, t] of u.supports) {
      if (!t.some((d) => d)) continue;
      const a = (d) => d ? "Yes" : "No";
      S(`   Joint=${e + 1}   U1=${a(t[0])}   U2=${a(t[1])}   U3=${a(t[2])}   R1=${a(t[3])}   R2=${a(t[4])}   R3=${a(t[5])}`);
    }
    n();
  }
  if (S('TABLE:  "LOAD PATTERN DEFINITIONS"'), S("   LoadPat=DEAD   DesignType=Dead   SelfWtMult=0"), n(), S('TABLE:  "LOAD CASE DEFINITIONS"'), S('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), n(), S('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), S('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), n(), u.forces && u.forces.size > 0) {
    S('TABLE:  "JOINT LOADS - FORCE"');
    for (const [e, t] of u.forces) t.some((a) => Math.abs(a) > 1e-12) && S(`   Joint=${e + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${J(t[0])}   F2=${J(t[1])}   F3=${J(t[2])}   M1=${J(t[3])}   M2=${J(t[4])}   M3=${J(t[5])}`);
    n();
  }
  const p = /* @__PURE__ */ new Map();
  for (let e = 0; e < M.length; e++) {
    const t = ((_i = I.elasticities) == null ? void 0 : _i.get(e)) || 0, a = ((_j = I.shearModuli) == null ? void 0 : _j.get(e)) || 0, d = t > 0 && a > 0 ? Math.max(0, Math.min(0.5, t / (2 * a) - 1)) : 0.2, R = ((_k = I.densities) == null ? void 0 : _k.get(e)) || 0, f = `MAT_${Math.round(t)}`;
    p.has(f) || p.set(f, { E: t, nu: d, G: a, rho: R });
  }
  S('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [e] of p) S(`   Material=${e}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  n(), S('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [e, t] of p) S(`   Material=${e}   UnitWeight=${J(t.rho * 9.81)}   UnitMass=${J(t.rho)}   E1=${J(t.E)}   G12=${J(t.G)}   U12=${J(t.nu)}   A1=9.9E-06`);
  n(), S('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [e] of p) S(`   Material=${e}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return n(), S('TABLE:  "PROGRAM CONTROL"'), S(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${C.force}, ${C.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), n(), S("END TABLE DATA"), S(""), B.join(`\r
`);
}
function J($) {
  return $ === 0 || Math.abs($) < 1e-15 ? "0" : Math.abs($) >= 1e6 || Math.abs($) < 1e-3 && Math.abs($) > 0 ? $.toExponential(8) : parseFloat($.toPrecision(10)).toString();
}
function Tt($) {
  const { nodes: O, elements: M, nodeInputs: u, elementInputs: I, title: C, e2kModel: v } = $, B = v == null ? void 0 : v.rawSections;
  return B && B.size > 0 ? ft(B) : Et($);
}
function ft($, O) {
  const M = [], u = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  M.push("$ File exported from Awatif FEM Studio (round-trip)"), M.push("");
  for (const I of u) {
    const C = $.get(I);
    if (!(!C || C.length === 0)) {
      M.push(`$ ${I}`);
      for (const v of C) M.push(v);
      M.push("");
    }
  }
  for (const [I, C] of $) if (!u.includes(I) && C.length !== 0) {
    M.push(`$ ${I}`);
    for (const v of C) M.push(v);
    M.push("");
  }
  return M.push("  END"), M.push("$ END OF MODEL FILE"), M.join(`\r
`);
}
function Et($) {
  var _a, _b, _c, _d;
  const { nodes: O, elements: M, nodeInputs: u, elementInputs: I, title: C, units: v } = $, B = (v == null ? void 0 : v.force) || "Tonf", S = (v == null ? void 0 : v.length) || "m", n = [], A = (i) => Math.round(i * 1e4) / 1e4, G = (() => {
    const i = (B || "Tonf").toLowerCase();
    return i === "tonf" || i === "tonf-f" ? 1 / 9.80665 : i === "kn" || i === "kn-f" ? 1 : i === "kgf" || i === "kg" ? 1 / 980665e-8 : i === "kip" || i === "kips" ? 1 / 4.44822 : 1;
  })(), z = (i) => i * G, W = (i) => i * G, P = (i) => i * G, D = /* @__PURE__ */ new Date(), H = `${D.getMonth() + 1}/${D.getDate()}/${D.getFullYear()}  ${D.getHours()}:${String(D.getMinutes()).padStart(2, "0")}:${String(D.getSeconds()).padStart(2, "0")}`;
  n.push(`$ File   "Hekatan_export.e2k"  saved ${H} in ETABS 19.1.0`), n.push(""), n.push("$ PROGRAM INFORMATION"), n.push('  PROGRAM  "ETABS"  VERSION "19.1.0"  '), n.push(""), n.push("$ CONTROLS"), n.push(`  UNITS  "${B}"  "${S}"  "C"  `), n.push('  TITLE1  "Hekatan Struct export"  '), C && n.push(`  TITLE2  "${C}"  `), n.push("  PREFERENCE  MERGETOL 0.1  "), n.push("");
  const T = /* @__PURE__ */ new Set();
  O.forEach((i) => T.add(A(i[2])));
  const p = [...T].sort((i, g) => i - g), e = [], t = /* @__PURE__ */ new Map();
  e.push("Base"), t.set(p[0], "Base");
  for (let i = 1; i < p.length; i++) {
    const g = `Level_${i}`;
    e.push(g), t.set(p[i], g);
  }
  n.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let i = p.length - 1; i >= 1; i--) n.push(`  STORY "${e[i]}"  HEIGHT ${A(p[i] - p[i - 1])} MASTERSTORY "Yes"  `);
  p.length > 0 && n.push(`  STORY "Base"  ELEV ${p[0]} `), n.push(""), M.some((i) => i.length === 4) && (n.push("$ DIAPHRAGM NAMES"), n.push('  DIAPHRAGM "D1"    TYPE RIGID'), n.push("")), n.push("$ MATERIAL PROPERTIES");
  const d = /* @__PURE__ */ new Set();
  (_a = I.elasticities) == null ? void 0 : _a.forEach((i) => d.add(i));
  const R = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
  let y = 0, L = 0;
  for (const i of d) {
    const g = i >= 1e8, N = g ? `Steel_${++y}` : `Conc_${++L}`;
    R.set(i, N), f.set(i, g);
    const k = g ? 76.97 : 24, _ = W(i), F = P(k), r = g ? 0.3 : 0.2, E = g ? 117e-7 : 1e-5;
    if (g) {
      n.push(`  MATERIAL  "${N}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${A(F)}`), n.push(`  MATERIAL  "${N}"    SYMTYPE "Isotropic"  E ${A(_)}  U ${r}  A ${E}`);
      const o = 345e3, l = 45e4;
      n.push(`  MATERIAL  "${N}"  FY ${A(W(o))}  FU ${A(W(l))}  FYE ${A(W(o * 1.1))}  FUE ${A(W(l * 1.1))}`);
    } else n.push(`  MATERIAL  "${N}"    TYPE "Concrete"    WEIGHTPERVOLUME ${A(F)}`), n.push(`  MATERIAL  "${N}"    SYMTYPE "Isotropic"  E ${A(_)}  U ${r}  A ${E}`), n.push(`  MATERIAL  "${N}"    FC ${A(W(24e3))}`);
  }
  n.push(""), n.push("$ FRAME SECTIONS");
  const X = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), Q = 0.05;
  M.forEach((i, g) => {
    var _a2, _b2, _c2, _d2, _e, _f;
    if (i.length !== 2) return;
    const N = (_a2 = I.sectionShapes) == null ? void 0 : _a2.get(g), k = ((_b2 = I.elasticities) == null ? void 0 : _b2.get(g)) ?? 0, _ = R.get(k) || "Conc_1", F = f.get(k) ?? k >= 1e8, r = ((_c2 = I.areas) == null ? void 0 : _c2.get(g)) ?? 0, E = ((_d2 = I.momentsOfInertiaY) == null ? void 0 : _d2.get(g)) ?? 0;
    (_e = I.momentsOfInertiaZ) == null ? void 0 : _e.get(g), (_f = I.torsionalConstants) == null ? void 0 : _f.get(g);
    let o = (N == null ? void 0 : N.type) || "rect", l = (N == null ? void 0 : N.h) ?? 0, s = (N == null ? void 0 : N.b) ?? 0, c = (N == null ? void 0 : N.d) ?? 0;
    const m = (N == null ? void 0 : N.tf) ?? 0, h = (N == null ? void 0 : N.tw) ?? 0;
    l <= 0 && s <= 0 && c <= 0 && r > 0 && (E > 0 ? (l = Math.sqrt(12 * E / r), s = r / l) : l = s = Math.sqrt(r), (!isFinite(l) || l < Q) && (l = Q), (!isFinite(s) || s < Q) && (s = Q), o = "rect"), l <= 0 && s <= 0 && c <= 0 && (l = 0.3, s = 0.3, o = "rect");
    const U = `${o}_${A(l)}_${A(s)}_${A(c)}_${A(m)}_${A(h)}_${_}`;
    (N == null ? void 0 : N.name) && !V.has(U) && V.set(U, N.name);
    let b = V.get(U);
    if (!b) {
      const j = F ? "S" : "C";
      o === "rect" ? b = `${j}_R${Math.round(s * 100)}x${Math.round(l * 100)}` : o === "circ" ? b = `${j}_C_D${Math.round(c * 100)}` : o === "I" ? b = `${j}_I${Math.round(l * 100)}x${Math.round(s * 100)}` : o === "HSS" ? b = `${j}_HSS${Math.round(s * 100)}x${Math.round(l * 100)}x${Math.round(h * 1e3)}` : b = `${j}_Sec${X.size + 1}`, V.set(U, b);
    }
    if (x.set(g, b), X.has(b)) return;
    X.add(b);
    let w = "Concrete Rectangular";
    F ? o === "I" ? w = "Steel I/Wide Flange" : o === "HSS" ? w = "Steel Tube" : o === "pipe" ? w = "Steel Pipe" : o === "L" ? w = "Steel Angle" : o === "C" ? w = "Steel Channel" : o === "2C" ? w = "Steel Double Channel" : w = "Steel Rectangular" : o === "circ" ? w = "Concrete Circle" : w = "Concrete Rectangular";
    let Z = `  FRAMESECTION  "${b}"  MATERIAL "${_}"  SHAPE "${w}"`;
    l && (Z += `  D ${A(l)}`), s && (Z += `  B ${A(s)}`), c && !l && (Z += `  D ${A(c)}`), m && (Z += `  TF ${A(m)}`), h && (Z += `  TW ${A(h)}`), n.push(Z);
  }), n.push("");
  const tt = /* @__PURE__ */ new Map();
  let at = 0;
  O.forEach((i) => {
    const g = `${A(i[0])},${A(i[1])}`;
    tt.has(g) || tt.set(g, `${++at}`);
  }), n.push("$ POINT COORDINATES");
  for (const [i, g] of tt) {
    const [N, k] = i.split(",").map(Number);
    n.push(`  POINT "${g}"  ${N} ${k} `);
  }
  n.push("");
  const st = (i) => {
    const g = O[i], N = `${A(g[0])},${A(g[1])}`;
    return { pt: tt.get(N) || "1", story: t.get(A(g[2])) || "Base" };
  };
  n.push("$ LINE CONNECTIVITIES");
  const K = [];
  M.forEach((i, g) => {
    if (i.length !== 2) return;
    const N = dt(O, i), k = x.get(g) || `Sec_${g}`;
    if (N === "BEAM") {
      const _ = st(i[0]), F = st(i[1]);
      n.push(`  LINE  "E${g + 1}"  BEAM  "${_.pt}"  "${F.pt}"  0`), K.push(`  LINEASSIGN  "E${g + 1}"  "${_.story}"  SECTION "${k}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const _ = O[i[0]][2] <= O[i[1]][2] ? i[0] : i[1], F = O[i[0]][2] <= O[i[1]][2] ? i[1] : i[0];
      st(_);
      const r = st(F), E = A(O[_][2]), o = A(O[F][2]), l = p.indexOf(E), s = p.indexOf(o), c = Math.max(1, s >= 0 && l >= 0 ? s - l : 1);
      n.push(`  LINE  "E${g + 1}"  ${N}  "${r.pt}"  "${r.pt}"  ${c}`);
      for (let m = 0; m < c; m++) {
        const h = s - m;
        h >= 0 && h < e.length && K.push(`  LINEASSIGN  "E${g + 1}"  "${e[h]}"  SECTION "${k}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      }
    }
  }), n.push(""), n.push("$ POINT ASSIGNS"), (_b = u.supports) == null ? void 0 : _b.forEach((i, g) => {
    const N = [];
    if (i[0] && N.push("UX"), i[1] && N.push("UY"), i[2] && N.push("UZ"), i[3] && N.push("RX"), i[4] && N.push("RY"), i[5] && N.push("RZ"), N.length > 0) {
      const k = st(g);
      n.push(`  POINTASSIGN  "${k.pt}"  "${k.story}"  RESTRAINT "${N.join(" ")}"  `);
    }
  }), n.push(""), n.push("$ LINE ASSIGNS"), K.forEach((i) => n.push(i)), n.push("");
  const it = [];
  M.forEach((i, g) => {
    if (i.length === 4) {
      const N = O[i[0]], k = O[i[1]], _ = O[i[2]], F = [k[0] - N[0], k[1] - N[1], k[2] - N[2]], r = [_[0] - N[0], _[1] - N[1], _[2] - N[2]], E = F[1] * r[2] - F[2] * r[1], o = F[2] * r[0] - F[0] * r[2], l = F[0] * r[1] - F[1] * r[0], s = Math.sqrt(E * E + o * o + l * l), c = s > 1e-10 && Math.abs(l) / s < 0.5;
      it.push({ idx: g, el: i, isWall: c });
    }
  });
  const q = (() => {
    for (const [i, g] of f) if (!g) return R.get(i);
    return R.values().next().value || "Conc_1";
  })();
  if (it.some((i) => !i.isWall)) {
    n.push("$ SLAB PROPERTIES");
    const i = ((_c = I.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
    n.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${q}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${A(i)} `), n.push("");
  }
  if (it.some((i) => i.isWall)) {
    n.push("$ WALL PROPERTIES");
    const i = ((_d = I.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
    n.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${q}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${A(i)} `), n.push("");
  }
  if (it.length > 0) {
    n.push("$ AREA CONNECTIVITIES");
    const i = [];
    it.forEach((g, N) => {
      const { el: k, isWall: _ } = g, F = _ ? `W${N + 1}` : `F${N + 1}`, r = _ ? "PANEL" : "FLOOR", E = k.map((o) => st(o));
      if (_) {
        const o = O[k[0]][2] <= O[k[2]][2] ? 0 : 2, l = O[k[1]][2] <= O[k[3]][2] ? 1 : 3;
        n.push(`  AREA "${F}"  ${r}  4  "${E[o].pt}"  "${E[l].pt}"  "${E[l].pt}"  "${E[o].pt}"  1  1  0  0  `);
        const s = E[o === 0 ? 2 : 0].story;
        i.push(`  AREAASSIGN  "${F}"  "${s}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else n.push(`  AREA "${F}"  ${r}  4  "${E[0].pt}"  "${E[1].pt}"  "${E[2].pt}"  "${E[3].pt}"  0  0  0  0  `), i.push(`  AREAASSIGN  "${F}"  "${E[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
    }), n.push(""), n.push("$ AREA ASSIGNS"), i.forEach((g) => n.push(g)), n.push("");
  }
  return n.push("$ LOAD PATTERNS"), n.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  0'), n.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), n.push(""), u.loads && u.loads.size > 0 && (n.push("$ POINT OBJECT LOADS"), u.loads.forEach((i, g) => {
    const [N, k, _] = i, F = st(g);
    Math.abs(N) > 1e-10 && n.push(`  POINTLOAD  "${F.pt}"  "${F.story}"  "Dead"  TYPE "FORCE"  FX ${A(z(N))}`), Math.abs(k) > 1e-10 && n.push(`  POINTLOAD  "${F.pt}"  "${F.story}"  "Dead"  TYPE "FORCE"  FY ${A(z(k))}`), Math.abs(_) > 1e-10 && n.push(`  POINTLOAD  "${F.pt}"  "${F.story}"  "Dead"  TYPE "FORCE"  FZ ${A(z(_))}`);
  }), n.push("")), u.moments && u.moments.size > 0 && (n[n.length - 1].startsWith("$ POINT OBJECT LOADS"), u.moments.forEach((i, g) => {
    const [N, k, _] = i, F = st(g);
    Math.abs(N) > 1e-10 && n.push(`  POINTLOAD  "${F.pt}"  "${F.story}"  "Dead"  TYPE "MOMENT"  MX ${A(z(N))}`), Math.abs(k) > 1e-10 && n.push(`  POINTLOAD  "${F.pt}"  "${F.story}"  "Dead"  TYPE "MOMENT"  MY ${A(z(k))}`), Math.abs(_) > 1e-10 && n.push(`  POINTLOAD  "${F.pt}"  "${F.story}"  "Dead"  TYPE "MOMENT"  MZ ${A(z(_))}`);
  }), n.push("")), n.push("$ LOAD CASES"), n.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), n.push('  LOADCASE "Dead"  LOADPAT  "Dead"  SF 1 '), n.push('  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), n.push('  LOADCASE "Live"  LOADPAT  "Live"  SF 1 '), n.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), n.push('  LOADCASE "Modal"  MAXMODES 12  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), n.push(""), n.push("$ LOAD COMBINATIONS"), n.push('  COMBO "1.4D"  TYPE "Linear Add"  '), n.push('  COMBO "1.4D"  LOADCASE  "Dead"  SF 1.4 '), n.push('  COMBO "1.2D+1.6L"  TYPE "Linear Add"  '), n.push('  COMBO "1.2D+1.6L"  LOADCASE  "Dead"  SF 1.2 '), n.push('  COMBO "1.2D+1.6L"  LOADCASE  "Live"  SF 1.6 '), n.push(""), n.push("  END"), n.push("$ END OF MODEL FILE"), n.join(`\r
`);
}
function dt($, O) {
  const M = $[O[0]], u = $[O[1]], I = Math.abs(u[2] - M[2]), C = Math.sqrt((u[0] - M[0]) ** 2 + (u[1] - M[1]) ** 2), v = I > C * 0.5;
  return v && C > 0.01 ? "BRACE" : v ? "COLUMN" : "BEAM";
}
export {
  ut as a,
  At as b,
  ht as c,
  Tt as e,
  St as p
};
