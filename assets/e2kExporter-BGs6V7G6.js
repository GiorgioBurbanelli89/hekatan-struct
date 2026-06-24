const kt = { v: 0 };
function Bt() {
  const g = document.createElement("div");
  g.id = "modal-results", g.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    width: 640px; max-width: 60vw; max-height: 50vh;
    display: flex; flex-direction: column; overflow: hidden;
    pointer-events: auto;
    border: 1px solid #0f06; box-shadow: 0 4px 20px rgba(0,0,0,0.5);
    resize: both;
    min-width: 340px; min-height: 120px;
  `;
  let $ = false;
  const C = 0.9;
  function L(O, v) {
    var _a, _b, _c, _d, _e, _f;
    if (!O.frequencies || O.frequencies.length === 0) {
      g.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
      return;
    }
    const K = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], H = [0, 0, 0, 0, 0, 0], M = O.frequencies.length;
    let b = -1, c = -1, A = -1, q = 0, V = 0;
    {
      const n = [0, 0, 0, 0, 0, 0];
      for (let E = 0; E < M; E++) {
        const S = ((_a = O.massParticipation) == null ? void 0 : _a[E]) || [0, 0, 0, 0, 0, 0];
        for (let F = 0; F < 6; F++) n[F] += S[F];
        b < 0 && n[0] >= C && (b = E + 1), c < 0 && n[1] >= C && (c = E + 1), A < 0 && n[0] >= C && n[1] >= C && (A = E + 1);
      }
      q = n[0], V = n[1];
    }
    let Z = -1, J = -1, W = -1;
    const y = 0.1;
    for (let n = 0; n < M; n++) {
      const E = ((_b = O.massParticipation) == null ? void 0 : _b[n]) || [0, 0, 0, 0, 0, 0];
      Z < 0 && E[0] > y && (Z = n + 1), J < 0 && E[1] > y && (J = n + 1), W < 0 && E[5] > y && (W = n + 1);
    }
    const T = A > 0 ? `<span style="color:#0f0">\u2713 ASCE 7-22 \xA712.9.1.1 \u2014 90 % alcanzado en X e Y al modo ${A} de ${M}</span>` : b > 0 && c < 0 ? `<span style="color:#fa0">\u26A0 X cumple en modo ${b}, Y todav\xEDa en ${(V * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : c > 0 && b < 0 ? `<span style="color:#fa0">\u26A0 Y cumple en modo ${c}, X todav\xEDa en ${(q * 100).toFixed(1)} % \u2014 aumentar nModes</span>` : `<span style="color:#f44">\u2717 ASCE 7-22 NO cumplido en ${M} modos \xB7 \u03A3Ux=${(q * 100).toFixed(1)} % \xB7 \u03A3Uy=${(V * 100).toFixed(1)} % \u2014 aumentar nModes</span>`, h = (() => {
      const n = (E, S) => {
        var _a2;
        if (E < 0) return `<span style="color:#f44">${S}: no encontrado en ${M} modos</span>`;
        const F = ((_a2 = O.massParticipation) == null ? void 0 : _a2[E - 1]) || [0, 0, 0, 0, 0, 0], x = S === "Ux" ? 0 : S === "Uy" ? 1 : 5, w = O.frequencies[E - 1] > 0 ? 1 / O.frequencies[E - 1] : 0;
        return `<span style="color:#0f0">${S}: modo ${E}, T=${w.toFixed(3)} s, MPF=${(F[x] * 100).toFixed(1)} %</span>`;
      };
      return `<div style="margin:4px 0; padding:4px 6px; background:rgba(0,255,255,0.05); border-left:2px solid #0ff; font-size:11px;">
  \u{1F3AF} <b>Modos s\xEDsmicos principales</b> (ASCE 7-22 \xA712.9.1):<br>
  ${n(Z, "Ux")} \xB7 ${n(J, "Uy")} \xB7 ${n(W, "Rz")}
</div>`;
    })();
    let o = `<div id="modal-header" style="flex:0 0 auto; display:flex; align-items:center; justify-content:space-between; padding:6px 10px; cursor:move; border-bottom:1px solid #0f04; background:rgba(0,0,0,0.4);">
  <b style="color:#ff0; font-size:12px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis">\u26A1 MODAL \u2014 ${v.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
    <button id="modal-close" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#7a2d2d; color:#fff; border:1px solid #b04545; border-radius:3px;" title="Cerrar (ocultar ventana)">\u2715</button>
  </div>
</div>`;
    if (o += '<div id="modal-body" style="flex:1 1 auto; min-height:0; overflow:auto; padding:6px 12px 10px 12px;">', o += `<div style="padding:6px 0; font-weight:bold; font-size:13px;">${T}</div>`, o += h, v.properties) for (const n of v.properties) o += `<span style="color:#888">${n}</span>
`;
    o += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const n of K) o += `<th style="padding:2px 5px">${n}</th>`;
    o += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let n = 0; n < 6; n++) H[n] = 0;
    if (O.frequencies.forEach((n, E) => {
      var _a2;
      const S = n > 0 ? 1 / n : 0, F = n * 2 * Math.PI, x = ((_a2 = O.massParticipation) == null ? void 0 : _a2[E]) || [0, 0, 0, 0, 0, 0];
      for (let Q = 0; Q < 6; Q++) H[Q] += x[Q];
      let w = 0, P = x[0];
      for (let Q = 1; Q < 6; Q++) x[Q] > P && (P = x[Q], w = Q);
      const et = P < 0.05 ? "\u2014" : `${K[w]} (${(P * 100).toFixed(0)} %)`, X = w === 0 || w === 1 ? "#0f0" : w === 5 ? "#0ff" : w === 2 ? "#fa0" : "#888", ct = E + 1 === b, ft = E + 1 === c, at = E + 1 === A;
      o += `<tr style="border-bottom:1px solid #fff1; ${at ? "background:rgba(0,255,0,0.12);" : ct || ft ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${E + 1}${at ? " \u2605" : ""}</td>
  <td style="padding:2px 6px; text-align:right">${n.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${S.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${F.toFixed(2)}</td>`;
      for (let Q = 0; Q < 6; Q++) {
        const $t = (x[Q] * 100).toFixed(1), rt = x[Q] > 0.5 ? "#f00" : x[Q] > 0.1 ? "#ff0" : "#0f0";
        o += `<td style="padding:2px 5px; text-align:right; color:${rt}">${$t}%</td>`;
      }
      const ot = H[0] >= C ? "#0f0" : "#0ff", St = H[1] >= C ? "#0f0" : "#0ff";
      o += `<td style="padding:2px 5px; text-align:right; color:${ot}">${(H[0] * 100).toFixed(1)}%${ct ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${St}">${(H[1] * 100).toFixed(1)}%${ft ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(H[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${X}">${et}</td></tr>`;
    }), o += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, o += "</div>", g.innerHTML = o, $) {
      const n = g.querySelector("#modal-body"), E = g.querySelector("#modal-minimize");
      n && (n.style.display = "none"), E && (E.textContent = "\u25A2", E.title = "Restaurar");
    }
    (_c = g.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      $ = !$;
      const n = g.querySelector("#modal-body"), E = g.querySelector("#modal-minimize");
      $ ? (n.style.display = "none", E.textContent = "\u25A2", E.title = "Restaurar") : (n.style.display = "block", E.textContent = "\u25AC", E.title = "Minimizar");
    }), (_d = g.querySelector("#modal-close")) == null ? void 0 : _d.addEventListener("click", () => {
      g.style.display = "none";
    }), (_e = g.querySelector("#modal-header")) == null ? void 0 : _e.addEventListener("mousedown", (n) => {
      if (n.target.tagName === "BUTTON") return;
      const E = g.getBoundingClientRect();
      g.style.bottom = "auto", g.style.top = `${E.top}px`, g.style.left = `${E.left}px`;
      const S = n.clientX - E.left, F = n.clientY - E.top, x = (P) => {
        g.style.left = `${Math.max(0, P.clientX - S)}px`, g.style.top = `${Math.max(0, P.clientY - F)}px`;
      }, w = () => {
        document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", w);
      };
      document.addEventListener("mousemove", x), document.addEventListener("mouseup", w), n.preventDefault();
    }), (_f = g.querySelector("#modal-copy")) == null ? void 0 : _f.addEventListener("click", () => {
      const n = [];
      n.push(`Modal Analysis \u2014 ${v.title}`), n.push(T.replace(/<[^>]+>/g, ""));
      const E = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${K.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      n.push(E), n.push("-".repeat(E.length));
      const S = [0, 0, 0, 0, 0, 0];
      O.frequencies.forEach((x, w) => {
        var _a2;
        const P = x > 0 ? 1 / x : 0, et = x * 2 * Math.PI, X = ((_a2 = O.massParticipation) == null ? void 0 : _a2[w]) || [0, 0, 0, 0, 0, 0];
        for (let ot = 0; ot < 6; ot++) S[ot] += X[ot];
        let ct = 0, ft = X[0];
        for (let ot = 1; ot < 6; ot++) X[ot] > ft && (ft = X[ot], ct = ot);
        const at = ft < 0.05 ? "\u2014" : `${K[ct]} (${(ft * 100).toFixed(0)}%)`, dt = X.map((ot) => ((ot * 100).toFixed(1) + "%").padStart(6)).join(" ");
        n.push(`${String(w + 1).padStart(4)}  ${x.toFixed(4).padStart(9)}  ${P.toFixed(4).padStart(9)}  ${et.toFixed(2).padStart(9)}  ${dt}  ${(S[0] * 100).toFixed(1).padStart(5)}%  ${(S[1] * 100).toFixed(1).padStart(5)}%  ${(S[5] * 100).toFixed(1).padStart(5)}%  ${at}`);
      }), navigator.clipboard.writeText(n.join(`
`));
      const F = g.querySelector("#modal-copy");
      F.textContent = "\u2713", setTimeout(() => F.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: g, render: L };
}
function vt(g) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w;
  const $ = g.split(/\r?\n/), C = { force: "TONF", length: "M" }, L = [], O = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), H = [], M = [], b = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), A = [], q = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), Z = [], J = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), o = [];
  let l = "", n = "";
  const E = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map();
  for (const i of $) {
    const r = i.trim();
    if (r.startsWith("$ ")) {
      n = r.substring(2).trim(), E.has(n) || E.set(n, []), S.has(n) || S.set(n, i);
      continue;
    }
    if (n && (E.has(n) || E.set(n, []), E.get(n).push(i)), !(!r || r.startsWith("$"))) {
      if (n === "CONTROLS") {
        const t = r.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        t && (C.force = t[1], C.length = t[2]);
        const a = r.match(/TITLE2\s+"([^"]+)"/);
        a && (l = a[1]);
      }
      if (n === "STORIES - IN SEQUENCE FROM TOP") {
        const t = r.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (t) {
          const a = t[1], s = t[2] ? parseFloat(t[2]) : 0, p = t[3] ? parseFloat(t[3]) : void 0;
          L.push({ name: a, height: s, elev: p ?? 0 });
        }
      }
      if (n === "MATERIAL PROPERTIES") {
        const t = r.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (t) {
          const a = t[1];
          O.has(a) || O.set(a, { type: t[2] || "", E: 0, G: 0, nu: 0 });
          const s = O.get(a);
          t[2] && (s.type = t[2]);
          const p = r.match(/\bE\s+([\d.eE+-]+)/);
          p && (s.E = parseFloat(p[1]));
          const I = r.match(/\bU\s+([\d.eE+-]+)/);
          I && (s.nu = parseFloat(I[1]), s.G = s.E / (2 * (1 + s.nu)));
          const m = r.match(/\bFY\s+([\d.eE+-]+)/);
          m && (s.fy = parseFloat(m[1]));
          const Y = r.match(/\bFC\s+([\d.eE+-]+)/);
          Y && (s.fc = parseFloat(Y[1]));
          const B = r.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          B && (s.density = parseFloat(B[1]));
        }
      }
      if (n === "FRAME SECTIONS") {
        const t = r.match(/FRAMESECTION\s+"([^"]+)"/);
        if (t) {
          const a = t[1];
          v.has(a) || v.set(a, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
          const s = v.get(a), p = r.match(/MATERIAL\s+"([^"]+)"/);
          p && (s.material = p[1]);
          const I = r.match(/SHAPE\s+"([^"]+)"/);
          I && (s.shape = I[1]);
          const m = r.match(/\bD\s+([\d.eE+-]+)/);
          m && (s.D = parseFloat(m[1]));
          const Y = r.match(/\bB\s+([\d.eE+-]+)/);
          Y && (s.B = parseFloat(Y[1]));
          const B = r.match(/\bTF\s+([\d.eE+-]+)/);
          B && (s.TF = parseFloat(B[1]));
          const st = r.match(/\bTW\s+([\d.eE+-]+)/);
          st && (s.TW = parseFloat(st[1]));
          const it = r.match(/\bR\s+([\d.eE+-]+)/);
          it && (s.R = parseFloat(it[1]));
          const nt = r.match(/FILLMATERIAL\s+"([^"]+)"/);
          nt && (s.fillMaterial = nt[1]);
          const pt = r.match(/I2MOD\s+([\d.eE+-]+)/);
          pt && (s.modI2 = parseFloat(pt[1]));
          const Et = r.match(/I3MOD\s+([\d.eE+-]+)/);
          Et && (s.modI3 = parseFloat(Et[1]));
        }
      }
      if (n === "POINT COORDINATES") {
        const t = r.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        t && K.set(t[1], [parseFloat(t[2]), parseFloat(t[3])]);
      }
      if (n === "LINE CONNECTIVITIES") {
        const t = r.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        t && H.push({ name: t[1], type: t[2], pt1: t[3], pt2: t[4], nStories: parseInt(t[5]) });
      }
      if (n === "POINT ASSIGNS") {
        const t = r.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        t && b.set(`${t[1]}@${t[2]}`, t[3].split(/\s+/));
      }
      if (n === "LINE ASSIGNS") {
        const t = r.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (t) {
          const a = { story: t[2], section: t[3], rigidZone: 0, releases: [], angle: 0 }, s = r.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          s && (a.rigidZone = parseFloat(s[1]));
          const p = r.match(/RELEASE\s+"([^"]+)"/);
          p && (a.releases = p[1].split(/\s+/));
          const I = r.match(/ANG\s+([-\d.eE+]+)/);
          I && (a.angle = parseFloat(I[1])), c.set(`${t[1]}@${t[2]}`, a);
        }
      }
      if (n === "GRIDS") {
        const t = r.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        t && o.push({ label: t[1], dir: t[2], coord: parseFloat(t[3]) });
      }
      if (n === "FRAME OBJECT LOADS") {
        const t = r.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        t && A.push({ line: t[1], story: t[2], type: t[3], dir: t[4], lc: t[5], val: parseFloat(t[6]) });
      }
      if (n === "AREA CONNECTIVITIES") {
        const t = r.match(/AREA\s+"([^"]+)"\s+(?:FLOOR|WALL|RAMP|PANEL)?\s*\d+\s+(.+)/);
        if (t) {
          const a = ((_a = t[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((s) => s.replace(/"/g, ""))) || [];
          M.push({ name: t[1], pts: a, nStories: 0 });
        }
      }
      if (n === "WALL/SLAB/DECK SECTIONS" || n === "SLAB PROPERTIES" || n === "WALL PROPERTIES" || n === "DECK PROPERTIES") {
        const t = r.match(/SHELLPROP\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const a = t[1], s = (_b = t[2].match(/SLABTHICKNESS\s+([\d.eE+-]+)/)) == null ? void 0 : _b[1], p = (_c = t[2].match(/WALLTHICKNESS\s+([\d.eE+-]+)/)) == null ? void 0 : _c[1], I = (_d = t[2].match(/MATERIAL\s+"([^"]+)"/)) == null ? void 0 : _d[1], m = (_e = t[2].match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _e[1];
          if (s || p) {
            const Y = V.get(a) || { material: "", modelingType: "ShellThin" };
            V.set(a, { material: I ?? Y.material, modelingType: m ?? Y.modelingType, thickness: parseFloat(s ?? p ?? "0") });
          }
        }
      }
      if (n === "AREA ASSIGNS") {
        const t = r.match(/AREAASSIGN\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const a = t[1], s = t[2], p = t[3], I = ((_f = p.match(/SECTION\s+"([^"]+)"/)) == null ? void 0 : _f[1]) ?? "", m = ((_g = p.match(/CARDINALPOINT\s+"([^"]+)"/)) == null ? void 0 : _g[1]) ?? "CENTROID", Y = ((_h = p.match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _h[1]) ?? "ShellThin";
          q.set(`${a}@${s}`, { story: s, section: I, modelingType: Y, cardinalPoint: m });
          const B = (_i = p.match(/SPRINGPROP\s+"([^"]+)"/)) == null ? void 0 : _i[1];
          B && T.set(`${a}@${s}`, B);
        }
      }
      if (n === "AREA SPRING PROPERTIES") {
        const t = r.match(/AREASPRING\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const a = t[1], s = t[2], p = parseFloat(((_j = s.match(/U1\s+([\d.eE+-]+)/)) == null ? void 0 : _j[1]) ?? "0"), I = parseFloat(((_k = s.match(/U2\s+([\d.eE+-]+)/)) == null ? void 0 : _k[1]) ?? "0"), m = parseFloat(((_l = s.match(/U3\s+([\d.eE+-]+)/)) == null ? void 0 : _l[1]) ?? "0");
          W.set(a, { u1: p, u2: I, u3: m });
        }
      }
      if (n === "POINT SPRING PROPERTIES") {
        const t = r.match(/POINTSPRING\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const a = t[1], s = t[2], p = parseFloat(((_m = s.match(/UX\s+([\d.eE+-]+)/)) == null ? void 0 : _m[1]) ?? "0"), I = parseFloat(((_n = s.match(/UY\s+([\d.eE+-]+)/)) == null ? void 0 : _n[1]) ?? "0"), m = parseFloat(((_o = s.match(/UZ\s+([\d.eE+-]+)/)) == null ? void 0 : _o[1]) ?? "0");
          y.set(a, { ux: p, uy: I, uz: m });
        }
      }
      if (n === "POINT ASSIGNS") {
        const t = r.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/), a = (_q = (_p = t == null ? void 0 : t[3]) == null ? void 0 : _p.match(/SPRINGPROP\s+"([^"]+)"/)) == null ? void 0 : _q[1];
        t && a && h.set(`${t[1]}@${t[2]}`, a);
      }
      if (n === "SHELL UNIFORM LOAD SETS") {
        const t = r.match(/SHELLUNIFORMLOADSET\s+"([^"]+)"\s+LOADPAT\s+"([^"]+)"\s+VALUE\s+([\d.eE+-]+)/);
        if (t) {
          const a = t[1], s = t[2], p = parseFloat(t[3]);
          J.has(a) || J.set(a, []), J.get(a).push({ loadpat: s, value: p });
        }
      }
      if (n === "SHELL OBJECT LOADS") {
        const t = r.match(/AREALOAD\s+"([^"]+)"\s+"([^"]+)"\s+(.+)/);
        if (t) {
          const a = t[1], s = t[2], p = t[3], I = ((_r = p.match(/TYPE\s+"([^"]+)"/)) == null ? void 0 : _r[1]) ?? "";
          if (I === "UNIFLOADSET") {
            const m = ((_s = p.match(/UNIFLOADSET"\s+"([^"]+)"/)) == null ? void 0 : _s[1]) ?? ((_t = p.match(/"([^"]+)"\s*$/)) == null ? void 0 : _t[1]) ?? "";
            Z.push({ area: a, story: s, type: "UNIFLOADSET", dir: "GRAV", lc: m, val: 0 });
          } else {
            const m = ((_u = p.match(/DIR\s+"([^"]+)"/)) == null ? void 0 : _u[1]) ?? "GRAV", Y = ((_v = p.match(/LC\s+"([^"]+)"/)) == null ? void 0 : _v[1]) ?? "", B = parseFloat(((_w = p.match(/FVAL\s+([\d.eE+-]+)/)) == null ? void 0 : _w[1]) ?? "0");
            Z.push({ area: a, story: s, type: I, dir: m, lc: Y, val: B });
          }
        }
      }
    }
  }
  const F = [];
  for (const i of Z) if (i.type === "UNIFLOADSET") {
    const r = J.get(i.lc);
    if (r) for (const t of r) F.push({ area: i.area, story: i.story, type: "UNIFF", dir: i.dir, lc: t.loadpat, val: t.value });
  } else F.push(i);
  Z.length = 0, Z.push(...F);
  const x = /* @__PURE__ */ new Map();
  if (L.length > 0) {
    const i = L.length - 1;
    x.set(L[i].name, L[i].elev);
    for (let r = i - 1; r >= 0; r--) {
      const a = x.get(L[r + 1].name) + L[r].height;
      L[r].elev = a, x.set(L[r].name, a);
    }
  }
  const w = [], P = [], et = /* @__PURE__ */ new Map(), X = (i, r) => `${i}@${r}`, ct = /* @__PURE__ */ new Set(), ft = /* @__PURE__ */ new Map();
  for (const i of H) ft.set(i.name, i);
  for (const i of H) for (const [r, t] of c) {
    if (!r.startsWith(i.name + "@")) continue;
    const a = t.story, s = L.findIndex((p) => p.name === a);
    if (!(s < 0)) if (i.type === "COLUMN" || i.type === "BRACE") {
      ct.add(X(i.pt2, a));
      const p = Math.max(i.nStories, 1), I = Math.min(s + p, L.length - 1);
      ct.add(X(i.pt1, L[I].name));
    } else ct.add(X(i.pt1, a)), ct.add(X(i.pt2, a));
  }
  for (const [i] of b) ct.add(i);
  for (const i of M) for (const [r, t] of q) if (r.startsWith(i.name + "@")) for (const a of i.pts) ct.add(X(a, t.story));
  for (const i of ct) {
    const [r, t] = i.split("@"), a = K.get(r), s = x.get(t);
    a === void 0 || s === void 0 || (w.push([a[0], a[1], s]), P.push(i), et.set(i, w.length - 1));
  }
  const at = [], dt = [], ot = [], St = [], Q = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map();
  for (const i of H) for (const [r, t] of c) {
    if (!r.startsWith(i.name + "@")) continue;
    const a = t.story, s = L.findIndex((st) => st.name === a);
    if (s < 0) continue;
    let p, I;
    if (i.type === "COLUMN" || i.type === "BRACE") {
      const st = Math.max(i.nStories, 1), it = Math.min(s + st, L.length - 1);
      p = X(i.pt1, L[it].name), I = X(i.pt2, a);
    } else p = X(i.pt1, a), I = X(i.pt2, a);
    const m = et.get(p), Y = et.get(I);
    if (m === void 0 || Y === void 0 || m === Y) continue;
    const B = at.length;
    if (at.push([m, Y]), dt.push(i.name), ot.push(i.type), St.push(a), Q.set(B, t.section), t.rigidZone > 0 && $t.set(B, [t.rigidZone, t.rigidZone]), t.releases.length > 0) {
      const st = new Array(12).fill(false), it = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const nt of t.releases) {
        const pt = it[nt];
        pt !== void 0 && (st[pt] = true);
      }
      rt.set(B, st);
    }
  }
  const yt = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map();
  for (const i of M) for (const [r, t] of q) {
    if (!r.startsWith(i.name + "@")) continue;
    const a = [];
    for (const p of i.pts) {
      const I = X(p, t.story), m = et.get(I);
      if (m === void 0) {
        a.length = 0;
        break;
      }
      a.push(m);
    }
    if (a.length !== 4) continue;
    const s = at.length;
    at.push(a), dt.push(i.name), ot.push("FLOOR"), St.push(t.story), yt.set(s, t.section), Ct.set(s, t.cardinalPoint);
  }
  const Ot = /* @__PURE__ */ new Map(), At = (i, r, t) => {
    if (!(t > 0)) return;
    const a = `${i}:${r}`;
    Ot.set(a, (Ot.get(a) ?? 0) + t);
  };
  for (let i = 0; i < at.length; i++) {
    const r = at[i];
    if (r.length !== 4) continue;
    const t = T.get(`${dt[i]}@${St[i]}`), a = t ? W.get(t) : void 0;
    if (!a) continue;
    const s = r.map((B) => w[B]), p = [s[1][0] - s[0][0], s[1][1] - s[0][1]], I = [s[3][0] - s[0][0], s[3][1] - s[0][1]], Y = Math.abs(p[0] * I[1] - p[1] * I[0]) / 4;
    for (const B of r) At(B, 0, a.u1 * Y), At(B, 1, a.u2 * Y), At(B, 2, a.u3 * Y);
  }
  for (const [i, r] of h) {
    const t = et.get(i), a = y.get(r);
    t === void 0 || !a || (At(t, 0, a.ux), At(t, 1, a.uy), At(t, 2, a.uz));
  }
  const Mt = [];
  for (const [i, r] of Ot) {
    const [t, a] = i.split(":").map(Number);
    Mt.push({ node: t, dof: a, k: r });
  }
  const gt = /* @__PURE__ */ new Map();
  for (const i of Z) if (i.type === "UNIFF") for (let r = 0; r < at.length; r++) {
    if (dt[r] !== i.area || St[r] !== i.story) continue;
    const t = at[r];
    if (t.length !== 4) continue;
    const a = t.map((Y) => w[Y]), s = [a[1][0] - a[0][0], a[1][1] - a[0][1]], p = [a[3][0] - a[0][0], a[3][1] - a[0][1]], I = Math.abs(s[0] * p[1] - s[1] * p[0]), m = -i.val * I / 4;
    for (const Y of t) {
      const B = gt.get(Y) || [0, 0, 0, 0, 0, 0];
      B[2] += m, gt.set(Y, B);
    }
  }
  const It = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), Rt = /* @__PURE__ */ new Map(), Lt = /* @__PURE__ */ new Map(), xt = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  for (const [i, r] of Q) {
    const t = v.get(r);
    if (!t) continue;
    const a = O.get(t.material);
    a && (It.set(i, a.E), Tt.set(i, a.G));
    const s = t.D, p = t.B, I = t.TF, m = t.TW;
    let Y = 0, B = 0, st = 0, it = 0, nt = 0, pt = 0, Et = "rect";
    switch (t.shape) {
      case "Concrete Rectangular":
        Y = s * p, B = p * s ** 3 / 12, st = s * p ** 3 / 12, it = p * s ** 3 * (1 / 3 - 0.21 * (s / p) * (1 - s ** 4 / (12 * p ** 4))), nt = pt = 5 / 6 * Y, Et = "rect";
        break;
      case "Concrete Circle":
        Y = Math.PI * s ** 2 / 4, B = st = Math.PI * s ** 4 / 64, it = Math.PI * s ** 4 / 32, nt = pt = 0.9 * Y, Et = "circ";
        break;
      case "Steel I/Wide Flange":
        Y = 2 * p * I + (s - 2 * I) * m, B = (p * s ** 3 - (p - m) * (s - 2 * I) ** 3) / 12, st = (2 * I * p ** 3 + (s - 2 * I) * m ** 3) / 12, it = (2 * p * I ** 3 + (s - 2 * I) * m ** 3) / 3, nt = (s - 2 * I) * m, pt = 2 * p * I * 5 / 6, Et = "I";
        break;
      case "Steel Tube":
        Y = s * p - (s - 2 * m) * (p - 2 * m), B = (p * s ** 3 - (p - 2 * m) * (s - 2 * m) ** 3) / 12, st = (s * p ** 3 - (s - 2 * m) * (p - 2 * m) ** 3) / 12, it = 2 * m * (s - m) * (p - m) * ((s - m) * (p - m)) / (s - m + (p - m)), nt = 2 * s * m, pt = 2 * p * m, Et = "HSS";
        break;
      case "Filled Steel Tube":
        Y = s * p, B = p * s ** 3 / 12, st = s * p ** 3 / 12, it = 2 * m * (s - m) * (p - m) * ((s - m) * (p - m)) / (s - m + (p - m)), nt = 2 * s * m + 5 / 6 * (s - 2 * m) * (p - 2 * m), pt = 2 * p * m + 5 / 6 * (s - 2 * m) * (p - 2 * m), Et = "CFT";
        break;
      case "Steel Angle": {
        const ht = I || m;
        Y = ht * (s + p - ht), B = ht * (s ** 3 + p * ht ** 2 + ht ** 2 * (s - ht)) / 12, st = ht * (p ** 3 + s * ht ** 2 + ht ** 2 * (p - ht)) / 12, it = (s + p - ht) * ht ** 3 / 3, nt = s * ht, pt = p * ht, Et = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        Y = 2 * p * I + (s - 2 * I) * m, B = (m * s ** 3 + 2 * p * I * (s - I) ** 2) / 12, st = (2 * I * p ** 3 + (s - 2 * I) * m ** 3) / 12, it = (2 * p * I ** 3 + (s - 2 * I) * m ** 3) / 3, nt = (s - 2 * I) * m, pt = 2 * p * I * 5 / 6, Et = t.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        Y = 2 * (2 * p * I + (s - 2 * I) * m), B = 2 * (m * s ** 3 + 2 * p * I * (s - I) ** 2) / 12, st = 2 * (2 * I * p ** 3 + (s - 2 * I) * m ** 3) / 12, it = 2 * (2 * p * I ** 3 + (s - 2 * I) * m ** 3) / 3, nt = 2 * (s - 2 * I) * m, pt = 4 * p * I * 5 / 6, Et = "2C";
        break;
      default:
        s > 0 && p > 0 && (Y = s * p, B = p * s ** 3 / 12, st = s * p ** 3 / 12, it = Math.min(s, p) * Math.max(s, p) ** 3 / 3 * 0.3, nt = pt = 5 / 6 * Y);
        break;
    }
    t.modI2 && (st *= t.modI2), t.modI3 && (B *= t.modI3), Rt.set(i, Y), mt.set(i, B), e.set(i, st), f.set(i, it), nt > 0 && Lt.set(i, nt), pt > 0 && xt.set(i, pt), u.set(i, { type: Et, b: p || void 0, h: s || void 0, d: Et === "circ" || Et === "pipe" ? s : void 0, tw: m || void 0, tf: I || void 0, r: t.R, name: r });
  }
  const d = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map();
  for (const [i, r] of yt) {
    const t = V.get(r);
    if (!t) continue;
    d.set(i, t.thickness);
    const a = O.get(t.material);
    a && (It.set(i, a.E), Tt.set(i, a.G), D.set(i, a.nu), a.density !== void 0 && N.set(i, a.density)), R.set(i, t.modelingType === "ShellThin" ? 1 : 0);
  }
  const _ = /* @__PURE__ */ new Map();
  for (const [i, r] of b) {
    const t = et.get(i);
    if (t === void 0) continue;
    const a = [false, false, false, false, false, false];
    for (const s of r) s === "UX" && (a[0] = true), s === "UY" && (a[1] = true), s === "UZ" && (a[2] = true), s === "RX" && (a[3] = true), s === "RY" && (a[4] = true), s === "RZ" && (a[5] = true);
    _.set(t, a);
  }
  const U = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
  for (let i = 0; i < dt.length; i++) k.set(`${dt[i]}@${St[i]}`, i);
  for (const i of A) {
    const r = k.get(`${i.line}@${i.story}`);
    if (r === void 0) continue;
    const [t, a] = at[r], s = w[t], p = w[a], I = Math.sqrt((p[0] - s[0]) ** 2 + (p[1] - s[1]) ** 2 + (p[2] - s[2]) ** 2);
    if (I < 1e-10) continue;
    const m = i.val * I / 2;
    let Y = 0, B = 0, st = 0;
    i.dir === "GRAV" || i.dir === "GRAVITY" ? st = -m : i.dir === "X" ? Y = m : i.dir === "Y" ? B = m : i.dir === "Z" && (st = -m);
    for (const it of [t, a]) {
      const nt = U.get(it) || [0, 0, 0, 0, 0, 0];
      nt[0] += Y, nt[1] += B, nt[2] += st, U.set(it, nt);
    }
  }
  const z = /* @__PURE__ */ new Map();
  for (const [i, r] of Q) {
    const t = v.get(r);
    if (!t) continue;
    const a = O.get(t.material);
    (a == null ? void 0 : a.density) && z.set(i, a.density);
  }
  for (const [i, r] of N) z.set(i, r);
  for (const [i, r] of gt) {
    const t = U.get(i) || [0, 0, 0, 0, 0, 0];
    U.set(i, [t[0] + r[0], t[1] + r[1], t[2] + r[2], t[3] + r[3], t[4] + r[4], t[5] + r[5]]);
  }
  const ut = { M: 1, CM: 0.01, MM: 1e-3, FT: 0.3048, IN: 0.0254, INCH: 0.0254 }, Nt = { KN: 1, N: 1e-3, TONF: 9.80665, TON: 9.80665, KGF: 980665e-8, KG: 980665e-8, KIP: 4.448222, LB: 4448222e-9 }, tt = ut[(C.length || "M").toUpperCase()] ?? 1, lt = Nt[(C.force || "KN").toUpperCase()] ?? 1;
  if (tt !== 1 || lt !== 1) {
    const i = lt / (tt * tt);
    for (const a of w) a[0] *= tt, a[1] *= tt, a[2] *= tt;
    for (const [a, s] of U) U.set(a, [s[0] * lt, s[1] * lt, s[2] * lt, s[3] * lt * tt, s[4] * lt * tt, s[5] * lt * tt]);
    const r = (a, s) => {
      for (const [p, I] of a) a.set(p, I * s);
    };
    r(It, i), r(Tt, i), r(Rt, tt * tt), r(mt, tt ** 4), r(e, tt ** 4), r(f, tt ** 4), r(Lt, tt * tt), r(xt, tt * tt), r(d, tt), r(z, lt / tt ** 3);
    const t = lt / tt;
    for (const a of Mt) a.k *= t;
    C.force = "KN", C.length = "M";
  }
  return { units: C, stories: L.reverse(), materials: O, frameSections: v, nodes: w, nodeNames: P, nodeNameToIdx: et, elements: at, elementNames: dt, elementTypes: ot, elementStories: St, elementSections: Q, nodeInputs: { supports: _, loads: U }, elementInputs: { elasticities: It, shearModuli: Tt, areas: Rt, momentsOfInertiaZ: mt, momentsOfInertiaY: e, torsionalConstants: f, shearAreasY: Lt, shearAreasZ: xt, rigidOffsets: $t, momentReleases: rt, densities: z, sectionShapes: u, thicknesses: d, poissonsRatios: D, plateFormulations: R }, sectionShapes: u, grids: o, springsList: Mt, info: { nNodes: w.length, nFrames: at.length, nAreas: M.length, title: l }, rawSections: E, rawSectionHeaders: S };
}
function G(g) {
  return g && parseFloat(g) || 0;
}
function Dt(g) {
  const $ = /* @__PURE__ */ new Map(), C = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let L;
  for (; (L = C.exec(g)) !== null; ) $.set(L[1], L[2] !== void 0 ? L[2] : L[3]);
  return $;
}
function Gt(g) {
  const $ = g.split(/\r?\n/);
  return $.some((L) => L.trim().startsWith("TABLE:")) ? bt($) : wt($);
}
function bt(g) {
  var _a, _b, _c, _d, _e, _f;
  const $ = [];
  let C = "";
  for (const W of g) {
    const y = W.trimEnd();
    y.endsWith("_") ? C += y.slice(0, -1) + " " : (C += y, $.push(C), C = "");
  }
  C && $.push(C);
  const L = { force: "KN", length: "m" };
  let O = "UX,UY,UZ,RX,RY,RZ";
  const v = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), b = [], c = [], A = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), Z = [];
  let J = "";
  for (const W of $) {
    const y = W.trim();
    if (!y || y.startsWith(";") || y.startsWith("File ")) continue;
    if (y.startsWith("TABLE:")) {
      const h = y.match(/TABLE:\s+"(.+?)"/);
      J = h ? h[1].toUpperCase() : "";
      continue;
    }
    if (y === "END TABLE DATA") {
      J = "";
      continue;
    }
    const T = Dt(y);
    switch (J) {
      case "PROGRAM CONTROL": {
        const h = T.get("CurrUnits");
        if (h) {
          const o = h.split(",").map((l) => l.trim());
          o[0] && (L.force = o[0]), o[1] && (L.length = o[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const h = T.get("Material");
        h && !v.has(h) && v.set(h, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const h = T.get("Material");
        if (h) {
          const o = v.get(h) || { E: 0, nu: 0, G: 0 };
          o.E = G(T.get("E1")), o.G = G(T.get("G12")), o.nu = G(T.get("U12")), o.density = G(T.get("UnitMass")), v.set(h, o);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const h = T.get("Material");
        h && v.has(h) && (v.get(h).fy = G(T.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const h = T.get("SectionName");
        h && K.set(h, { material: T.get("Material") || "", shape: T.get("Shape") || "Rectangular", D: G(T.get("t3")), B: G(T.get("t2")), TF: G(T.get("tf")), TW: G(T.get("tw")), A: G(T.get("Area")), Iz: G(T.get("I33")), Iy: G(T.get("I22")), J: G(T.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const h = T.get("Section");
        h && H.set(h, { material: T.get("Material") || "", type: T.get("Type") || "Shell", thickness: G(T.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const h = T.get("Joint");
        if (h) {
          const o = G(T.get("XorR")), l = G(T.get("Y")), n = G(T.get("Z"));
          M.set(h, [o, l, n]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const h = T.get("Frame"), o = T.get("JointI"), l = T.get("JointJ");
        h && o && l && b.push({ name: h, j1: o, j2: l });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const h = T.get("Area");
        if (h) {
          const o = parseInt(T.get("NumJoints") || "4"), l = [];
          for (let n = 1; n <= o; n++) {
            const E = T.get(`Joint${n}`);
            E && l.push(E);
          }
          l.length >= 3 && c.push({ name: h, joints: l });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const h = T.get("Joint");
        if (h) {
          const o = [((_a = T.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = T.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = T.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = T.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = T.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = T.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          A.set(h, o);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const h = T.get("Frame"), o = T.get("AnalSect");
        h && o && q.set(h, o);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const h = T.get("Area"), o = T.get("Section");
        h && o && V.set(h, o);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const h = T.get("Joint");
        h && Z.push({ joint: h, fx: G(T.get("F1")), fy: G(T.get("F2")), fz: G(T.get("F3")), mx: G(T.get("M1")), my: G(T.get("M2")), mz: G(T.get("M3")) });
        break;
      }
    }
  }
  return Pt(L, O, v, K, H, M, b, c, A, q, V, Z);
}
function wt(g) {
  const $ = { force: "KN", length: "m" };
  let C = "UX,UY,UZ,RX,RY,RZ";
  const L = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), H = [], M = [], b = /* @__PURE__ */ new Map(), c = [];
  let A = "", q = "";
  for (const J of g) {
    const W = J.trim();
    if (!W || W.startsWith(";")) continue;
    if (!J.startsWith(" ") && !J.startsWith("	")) {
      const h = W.toUpperCase();
      if (h === "END") break;
      h.startsWith("SHELL SECTION") ? A = "SHELL SECTION" : h.startsWith("FRAME SECTION") ? A = "FRAME SECTION" : A = h.split(/\s+/)[0];
      continue;
    }
    const y = Dt(W), T = W.split(/\s+/);
    switch (A) {
      case "SYSTEM": {
        const h = y.get("DOF");
        h && (C = h);
        const o = y.get("LENGTH");
        o && ($.length = o);
        const l = y.get("FORCE");
        l && ($.force = l);
        break;
      }
      case "JOINT": {
        const h = T[0];
        K.set(h, [G(y.get("X")), G(y.get("Y")), G(y.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const h = y.get("ADD"), o = y.get("DOF");
        if (h && o) {
          const l = o.split(","), n = [false, false, false, false, false, false];
          for (const E of l) {
            const S = E.toUpperCase();
            (S === "UX" || S === "U1") && (n[0] = true), (S === "UY" || S === "U2") && (n[1] = true), (S === "UZ" || S === "U3") && (n[2] = true), (S === "RX" || S === "R1") && (n[3] = true), (S === "RY" || S === "R2") && (n[4] = true), (S === "RZ" || S === "R3") && (n[5] = true);
          }
          b.set(h, n);
        }
        break;
      }
      case "MATERIAL": {
        const h = y.get("NAME");
        if (h) q = h, L.set(h, { E: 0, nu: 0, G: 0 });
        else if (q) {
          const o = L.get(q), l = y.get("E");
          l && (o.E = G(l));
          const n = y.get("U");
          n && (o.nu = G(n)), o.G = o.E / (2 * (1 + o.nu));
          const E = y.get("M");
          E && (o.density = G(E));
        }
        break;
      }
      case "SHELL": {
        const h = T[0], o = y.get("J");
        y.get("SEC"), o && M.push({ name: h, joints: o.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const h = y.get("NAME");
        h && v.set(h, { material: y.get("MAT") || "", type: y.get("TYPE") || "Shell", thickness: G(y.get("TH")) });
        break;
      }
      case "FRAME": {
        const h = T[0], o = y.get("J");
        if (o) {
          const l = o.split(",");
          l.length >= 2 && H.push({ name: h, j1: l[0], j2: l[1] });
        }
        break;
      }
      case "LOAD": {
        const h = y.get("ADD");
        h && c.push({ joint: h, fx: G(y.get("UX")), fy: G(y.get("UY")), fz: G(y.get("UZ")), mx: G(y.get("MX")), my: G(y.get("MY")), mz: G(y.get("MZ")) });
        break;
      }
    }
  }
  return Pt($, C, L, O, v, K, H, M, b, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), c);
}
function Pt(g, $, C, L, O, v, K, H, M, b, c, A) {
  var _a;
  const q = [], V = /* @__PURE__ */ new Map(), Z = [];
  for (const [S, F] of v) V.set(S, Z.length), q.push(S), Z.push(F);
  const J = [], W = [], y = /* @__PURE__ */ new Map();
  for (const S of K) {
    const F = V.get(S.j1), x = V.get(S.j2);
    if (F !== void 0 && x !== void 0) {
      const w = J.length;
      J.push([F, x]), W.push(S.name);
      const P = b.get(S.name);
      P && y.set(w, P);
    }
  }
  const T = J.length;
  for (const S of H) {
    const F = S.joints.map((x) => V.get(x)).filter((x) => x !== void 0);
    if (F.length >= 3) {
      const x = J.length;
      J.push(F), W.push(S.name);
      const w = c.get(S.name);
      w && y.set(x, w);
    }
  }
  const h = J.length - T, o = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, l = /* @__PURE__ */ new Map(), n = C.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let S = 0; S < J.length; S++) {
    const F = y.get(S), x = F ? L.get(F) : null, w = F ? O.get(F) : null;
    if (x || J[S].length === 2) {
      const P = x || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, et = C.get(P.material) || n, X = et.E || n.E, ct = et.nu || 0.3, ft = et.G || X / (2 * (1 + ct));
      o.elasticities.set(S, X), o.shearModuli.set(S, ft), o.areas.set(S, P.A || P.D * P.B), o.momentsOfInertiaZ.set(S, P.Iz || P.B * P.D ** 3 / 12), o.momentsOfInertiaY.set(S, P.Iy || P.D * P.B ** 3 / 12), o.torsionalConstants.set(S, P.J || 0), o.densities.set(S, et.density || 0), ((_a = P.shape) == null ? void 0 : _a.includes("Wide Flange")) || P.shape === "I" ? l.set(S, { type: "I", b: P.B, h: P.D, name: F || "I-section" }) : l.set(S, { type: "rect", b: P.B, h: P.D });
    } else if (w) {
      const P = C.get(w.material) || n, et = P.E || n.E, X = P.nu || 0.2, ct = P.G || et / (2 * (1 + X));
      o.elasticities.set(S, et), o.shearModuli.set(S, ct), o.thicknesses.set(S, w.thickness), o.poissonsRatios.set(S, X), o.densities.set(S, P.density || 0);
    }
  }
  const E = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [S, F] of M) {
    const x = V.get(S);
    x !== void 0 && E.supports.set(x, F);
  }
  for (const S of A) {
    const F = V.get(S.joint);
    if (F !== void 0) {
      const x = E.forces.get(F) || [0, 0, 0, 0, 0, 0];
      x[0] += S.fx, x[1] += S.fy, x[2] += S.fz, x[3] += S.mx, x[4] += S.my, x[5] += S.mz, E.forces.set(F, x);
    }
  }
  return { units: g, dof: $, materials: C, frameSections: L, shellSections: O, nodes: Z, nodeNames: q, nodeNameToIdx: V, elements: J, elementNames: W, elementSections: y, nodeInputs: E, elementInputs: o, sectionShapes: l, info: { nNodes: Z.length, nFrames: T, nShells: h, title: `SAP2000 (${T} frames, ${h} shells)` } };
}
function zt(g) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: $, elements: C, nodeInputs: L, elementInputs: O } = g, v = g.units || { force: "KN", length: "m" }, K = g.title || "Awatif Model", H = [], M = (o) => H.push(o), b = () => H.push(" ");
  M(`File ${K}.$2k was saved on m/d/yy at h:mm:ss`), b(), M('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), M("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), b();
  const c = [], A = [];
  if (C.forEach((o, l) => {
    o.length === 2 ? c.push(l) : A.push(l);
  }), c.length > 0) {
    M('TABLE:  "CONNECTIVITY - FRAME"');
    for (const o of c) {
      const l = C[o];
      M(`   Frame=${o + 1}   JointI=${l[0] + 1}   JointJ=${l[1] + 1}   IsCurved=No`);
    }
    b();
  }
  if (A.length > 0) {
    M('TABLE:  "CONNECTIVITY - AREA"');
    for (const o of A) {
      const l = C[o], n = l.map((E, S) => `Joint${S + 1}=${E + 1}`).join("   ");
      M(`   Area=${o + 1}   NumJoints=${l.length}   ${n}`);
    }
    b();
  }
  M('TABLE:  "COORDINATE SYSTEMS"'), M("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), b(), M('TABLE:  "DATABASE FORMAT TYPES"'), M("   UnitsCurr=Yes   OverrideE=No"), b();
  const q = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map();
  for (const o of c) {
    const l = ((_a = O.areas) == null ? void 0 : _a.get(o)) || 0, n = ((_b = O.momentsOfInertiaZ) == null ? void 0 : _b.get(o)) || 0, E = ((_c = O.momentsOfInertiaY) == null ? void 0 : _c.get(o)) || 0, S = ((_d = O.torsionalConstants) == null ? void 0 : _d.get(o)) || 0, F = ((_e = O.elasticities) == null ? void 0 : _e.get(o)) || 0, x = `MAT_${Math.round(F)}`, w = `A${l.toPrecision(6)}_Iz${n.toPrecision(6)}`;
    if (!q.has(w)) {
      let et = 0.3, X = 0.3;
      l > 0 && n > 0 && (et = Math.sqrt(12 * n / l), X = l / et), q.set(w, { A: l, Iz: n, Iy: E, J: S, b: X, h: et, matKey: x });
    }
    const P = [...q.keys()].indexOf(w) + 1;
    V.set(o, `SEC${P}`);
  }
  if (c.length > 0) {
    M('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const o of c) {
      const l = V.get(o) || "SEC1";
      M(`   Frame=${o + 1}   AutoSelect=N.A.   AnalSect=${l}   MatProp=Default`);
    }
    b();
  }
  if (q.size > 0) {
    M('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let o = 0;
    for (const [, l] of q) {
      o++;
      const n = l.A * 5 / 6;
      M(`   SectionName=SEC${o}   Material=${l.matKey}   Shape=Rectangular   t3=${j(l.h)}   t2=${j(l.b)}   Area=${j(l.A)}   TorsConst=${j(l.J)}   I33=${j(l.Iz)}   I22=${j(l.Iy)}   I23=0   AS2=${j(n)}   AS3=${j(n)} _`), M("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    b();
  }
  const Z = !!g.layeredSection && A.length > 0, J = g.layeredSection, W = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
  if (!Z) for (const o of A) {
    const l = ((_f = O.thicknesses) == null ? void 0 : _f.get(o)) || 0.1, n = ((_g = O.elasticities) == null ? void 0 : _g.get(o)) || 0, E = `MAT_${Math.round(n)}`, S = `t${l.toPrecision(6)}`;
    W.has(S) || W.set(S, { t: l, matKey: E });
    const F = [...W.keys()].indexOf(S) + 1;
    y.set(o, `SSEC${F}`);
  }
  if (A.length > 0) {
    M('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const o of A) {
      const l = Z ? J.name : y.get(o) || "SSEC1";
      M(`   Area=${o + 1}   Section=${l}   MatProp=Default`);
    }
    if (b(), M('TABLE:  "AREA SECTION PROPERTIES"'), Z) {
      const o = J, l = ((_h = o.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      M(`   Section=${o.name}   Material=${l}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${j(o.totalThickness)}   BendThick=${j(o.totalThickness)}   Color=Magenta`);
    } else {
      let o = 0;
      for (const [, l] of W) o++, M(`   Section=SSEC${o}   Material=${l.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${j(l.t)}   BendThick=${j(l.t)}   Color=Cyan`);
    }
    if (b(), Z) {
      M('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const o = J;
      for (const l of o.layers) {
        const n = l.angle ?? 0, E = l.numIntPts ?? 3;
        M(`   Section=${o.name}   LayerName=${l.name}   Distance=${j(l.distance)}   Thickness=${j(l.thickness)}   Type=Shell   NumIntPts=${E}   Material=${l.material}   MatAngle=${j(n * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      b();
    }
  }
  M('TABLE:  "JOINT COORDINATES"');
  for (let o = 0; o < $.length; o++) {
    const l = $[o];
    M(`   Joint=${o + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${j(l[0])}   Y=${j(l[1])}   Z=${j(l[2])}   SpecialJt=No`);
  }
  if (b(), L.supports && L.supports.size > 0) {
    M('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [o, l] of L.supports) {
      if (!l.some((E) => E)) continue;
      const n = (E) => E ? "Yes" : "No";
      M(`   Joint=${o + 1}   U1=${n(l[0])}   U2=${n(l[1])}   U3=${n(l[2])}   R1=${n(l[3])}   R2=${n(l[4])}   R3=${n(l[5])}`);
    }
    b();
  }
  const T = g.selfWtMult ?? 1;
  if (M('TABLE:  "LOAD PATTERN DEFINITIONS"'), M(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${T}`), b(), M('TABLE:  "LOAD CASE DEFINITIONS"'), M('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), b(), M('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), M('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), b(), L.loads && L.loads.size > 0) {
    M('TABLE:  "JOINT LOADS - FORCE"');
    for (const [o, l] of L.loads) l.some((n) => Math.abs(n) > 1e-12) && M(`   Joint=${o + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${j(l[0])}   F2=${j(l[1])}   F3=${j(l[2])}   M1=${j(l[3])}   M2=${j(l[4])}   M3=${j(l[5])}`);
    b();
  }
  const h = /* @__PURE__ */ new Map();
  for (let o = 0; o < C.length; o++) {
    const l = ((_i = O.elasticities) == null ? void 0 : _i.get(o)) || 0, n = ((_j = O.shearModuli) == null ? void 0 : _j.get(o)) || 0, E = l > 0 && n > 0 ? Math.max(0, Math.min(0.5, l / (2 * n) - 1)) : 0.2, S = ((_k = O.densities) == null ? void 0 : _k.get(o)) || 0, F = `MAT_${Math.round(l)}`;
    h.has(F) || h.set(F, { E: l, nu: E, G: n, rho: S });
  }
  M('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [o] of h) M(`   Material=${o}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  b(), M('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [o, l] of h) M(`   Material=${o}   UnitWeight=${j(l.rho * 9.81)}   UnitMass=${j(l.rho)}   E1=${j(l.E)}   G12=${j(l.G)}   U12=${j(l.nu)}   A1=9.9E-06`);
  b(), M('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [o] of h) M(`   Material=${o}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return b(), M('TABLE:  "PROGRAM CONTROL"'), M(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${v.force}, ${v.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), b(), M("END TABLE DATA"), M(""), H.join(`\r
`);
}
function j(g) {
  return g === 0 || Math.abs(g) < 1e-15 ? "0" : Math.abs(g) >= 1e6 || Math.abs(g) < 1e-3 && Math.abs(g) > 0 ? g.toExponential(8) : parseFloat(g.toPrecision(10)).toString();
}
function Ht(g) {
  const { nodes: $, elements: C, nodeInputs: L, elementInputs: O, title: v, e2kModel: K } = g, H = K == null ? void 0 : K.rawSections;
  return H && H.size > 0 ? Yt(H, K) : Ut(g);
}
function Yt(g, $) {
  const C = [], L = $ == null ? void 0 : $.rawSectionHeaders;
  for (const [O, v] of g) {
    C.push((L == null ? void 0 : L.get(O)) ?? `$ ${O}`);
    for (const K of v) C.push(K);
  }
  return g.has("END OF MODEL FILE") || (C.push("  END"), C.push("$ END OF MODEL FILE")), C.join(`\r
`);
}
function Ut(g) {
  var _a, _b, _c;
  const { nodes: $, elements: C, nodeInputs: L, elementInputs: O, title: v, units: K } = g, H = g.rigidDiaphragm ?? false, M = (K == null ? void 0 : K.force) || "Tonf", b = (K == null ? void 0 : K.length) || "m", c = [], A = (e) => Math.round(e * 1e4) / 1e4, q = (() => {
    const e = (M || "Tonf").toLowerCase();
    return e === "tonf" || e === "tonf-f" ? 1 / 9.80665 : e === "kn" || e === "kn-f" ? 1 : e === "kgf" || e === "kg" ? 1 / 980665e-8 : e === "kip" || e === "kips" ? 1 / 4.44822 : 1;
  })(), V = (e) => e * q, Z = (e) => e * q, J = (e) => e * q, W = /* @__PURE__ */ new Date(), y = `${W.getMonth() + 1}/${W.getDate()}/${W.getFullYear()}  ${W.getHours()}:${String(W.getMinutes()).padStart(2, "0")}:${String(W.getSeconds()).padStart(2, "0")}`;
  c.push(`$ File   "Hekatan_export.e2k"  saved ${y} in ETABS 22.6.0`), c.push(""), c.push("$ PROGRAM INFORMATION"), c.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), c.push(""), c.push("$ CONTROLS"), c.push(`  UNITS  "${M}"  "${b}"  "C"  `), c.push('  TITLE1  "Hekatan Struct export"  '), v && c.push(`  TITLE2  "${v}"  `), c.push("  PREFERENCE  MERGETOL 0.001"), c.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), c.push("");
  const T = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
  $.forEach((e) => {
    T.add(A(e[0])), h.add(A(e[1]));
  });
  const o = [...T].sort((e, f) => e - f), l = [...h].sort((e, f) => e - f);
  c.push("$ GRIDS"), c.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), o.forEach((e, f) => {
    const u = f < 26 ? String.fromCharCode(65 + f) : String.fromCharCode(65 + f % 26).repeat(Math.floor(f / 26) + 1);
    c.push(`  GRID "G1"  LABEL "${u}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), l.forEach((e, f) => {
    c.push(`  GRID "G1"  LABEL "${f + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), c.push("");
  const n = /* @__PURE__ */ new Set();
  $.forEach((e) => n.add(A(e[2])));
  let E = [...n].sort((e, f) => e - f);
  if (E.length === 1) {
    const e = E[0];
    e > 0 ? E = [0, e] : E = [0, 4];
  }
  const S = [], F = /* @__PURE__ */ new Map();
  S.push("Base"), F.set(E[0], "Base");
  for (let e = 1; e < E.length; e++) {
    const f = `Story${e}`;
    S.push(f), F.set(E[e], f);
  }
  n.size === 1 && n.has(0) && F.set(0, S[1]), c.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = E.length - 1; e >= 1; e--) c.push(`  STORY "${S[e]}"  HEIGHT ${A(E[e] - E[e - 1])} MASTERSTORY "Yes"  `);
  E.length > 0 && c.push(`  STORY "Base"  ELEV ${E[0]} `), c.push(""), C.some((e) => e.length === 4), H && (c.push("$ DIAPHRAGM NAMES"), c.push('  DIAPHRAGM "D1"    TYPE RIGID'), c.push("")), c.push("$ MATERIAL PROPERTIES");
  const x = /* @__PURE__ */ new Set();
  (_a = O.elasticities) == null ? void 0 : _a.forEach((e) => x.add(e));
  const w = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
  let et = 0, X = 0;
  const ct = 980665e-8, ft = /* @__PURE__ */ new Map();
  if (O.densities && O.densities.size > 0) {
    const e = /* @__PURE__ */ new Map();
    O.densities.forEach((f, u) => {
      var _a2;
      const d = (_a2 = O.elasticities) == null ? void 0 : _a2.get(u);
      d !== void 0 && (e.has(d) || e.set(d, []), e.get(d).push(f));
    }), e.forEach((f, u) => {
      const d = f.reduce((R, N) => R + N, 0) / f.length, D = d > 100 ? d * ct : d * 9.80665;
      ft.set(u, D);
    });
  }
  for (const e of x) {
    const f = e >= 1e8, u = f ? `Steel_${++et}` : `Conc_${++X}`;
    w.set(e, u), P.set(e, f);
    const d = ft.get(e) ?? (f ? 76.97 : 24), D = Z(e), R = J(d), N = [];
    (_b = O.poissonsRatios) == null ? void 0 : _b.forEach((k, z) => {
      var _a2;
      ((_a2 = O.elasticities) == null ? void 0 : _a2.get(z)) === e && N.push(k);
    });
    const _ = N.length > 0 ? N.reduce((k, z) => k + z, 0) / N.length : f ? 0.3 : 0.2, U = f ? 117e-7 : 1e-5;
    if (f) {
      c.push(`  MATERIAL  "${u}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${A(R)}`), c.push(`  MATERIAL  "${u}"    SYMTYPE "Isotropic"  E ${A(D)}  U ${_}  A ${U}`);
      const k = 345e3, z = 45e4;
      c.push(`  MATERIAL  "${u}"  FY ${A(Z(k))}  FU ${A(Z(z))}  FYE ${A(Z(k * 1.1))}  FUE ${A(Z(z * 1.1))}`);
    } else c.push(`  MATERIAL  "${u}"    TYPE "Concrete"    WEIGHTPERVOLUME ${A(R)}`), c.push(`  MATERIAL  "${u}"    SYMTYPE "Isotropic"  E ${A(D)}  U ${_}  A ${U}`), c.push(`  MATERIAL  "${u}"    FC ${A(Z(24e3))}`);
  }
  c.push(""), c.push("$ FRAME SECTIONS");
  const at = /* @__PURE__ */ new Set(), dt = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), St = 0.05;
  C.forEach((e, f) => {
    var _a2, _b2, _c2, _d, _e, _f;
    if (e.length !== 2) return;
    const u = (_a2 = O.sectionShapes) == null ? void 0 : _a2.get(f), d = ((_b2 = O.elasticities) == null ? void 0 : _b2.get(f)) ?? 0, D = w.get(d) || "Conc_1", R = P.get(d) ?? d >= 1e8, N = ((_c2 = O.areas) == null ? void 0 : _c2.get(f)) ?? 0, _ = ((_d = O.momentsOfInertiaY) == null ? void 0 : _d.get(f)) ?? 0;
    (_e = O.momentsOfInertiaZ) == null ? void 0 : _e.get(f), (_f = O.torsionalConstants) == null ? void 0 : _f.get(f);
    let U = (u == null ? void 0 : u.type) || "rect", k = (u == null ? void 0 : u.h) ?? 0, z = (u == null ? void 0 : u.b) ?? 0, ut = (u == null ? void 0 : u.d) ?? 0;
    const Nt = (u == null ? void 0 : u.tf) ?? 0, tt = (u == null ? void 0 : u.tw) ?? 0;
    k <= 0 && z <= 0 && ut <= 0 && N > 0 && (_ > 0 ? (k = Math.sqrt(12 * _ / N), z = N / k) : k = z = Math.sqrt(N), (!isFinite(k) || k < St) && (k = St), (!isFinite(z) || z < St) && (z = St), U = "rect"), k <= 0 && z <= 0 && ut <= 0 && (k = 0.3, z = 0.3, U = "rect");
    const lt = `${U}_${A(k)}_${A(z)}_${A(ut)}_${A(Nt)}_${A(tt)}_${D}`;
    (u == null ? void 0 : u.name) && !ot.has(lt) && ot.set(lt, u.name);
    let i = ot.get(lt);
    if (!i) {
      const a = R ? "S" : "C";
      U === "rect" ? i = `${a}_R${Math.round(z * 100)}x${Math.round(k * 100)}` : U === "circ" ? i = `${a}_C_D${Math.round(ut * 100)}` : U === "I" ? i = `${a}_I${Math.round(k * 100)}x${Math.round(z * 100)}` : U === "HSS" ? i = `${a}_HSS${Math.round(z * 100)}x${Math.round(k * 100)}x${Math.round(tt * 1e3)}` : i = `${a}_Sec${at.size + 1}`, ot.set(lt, i);
    }
    if (dt.set(f, i), at.has(i)) return;
    at.add(i);
    let r;
    U === "I" ? r = "Steel I/Wide Flange" : U === "HSS" ? r = "Steel Tube" : U === "CFT" ? r = "Filled Steel Tube" : U === "pipe" ? r = "Steel Pipe" : U === "L" ? r = "Steel Angle" : U === "C" ? r = "Steel Channel" : U === "2C" ? r = "Steel Double Channel" : U === "circ" ? r = "Concrete Circle" : r = "Concrete Rectangular";
    let t = `  FRAMESECTION  "${i}"  MATERIAL "${D}"  SHAPE "${r}"`;
    k && (t += `  D ${A(k)}`), z && (t += `  B ${A(z)}`), ut && !k && (t += `  D ${A(ut)}`), Nt && (t += `  TF ${A(Nt)}`), tt && (t += `  TW ${A(tt)}`), c.push(t);
  }), c.push("");
  const Q = /* @__PURE__ */ new Map();
  let $t = 0;
  $.forEach((e) => {
    const f = `${A(e[0])},${A(e[1])}`;
    Q.has(f) || Q.set(f, `${++$t}`);
  }), c.push("$ POINT COORDINATES");
  for (const [e, f] of Q) {
    const [u, d] = e.split(",").map(Number);
    c.push(`  POINT "${f}"  ${u} ${d} `);
  }
  c.push("");
  const rt = (e) => {
    const f = $[e], u = `${A(f[0])},${A(f[1])}`;
    return { pt: Q.get(u) || "1", story: F.get(A(f[2])) || "Base" };
  }, yt = (e) => {
    var _a2, _b2, _c2, _d;
    const f = [], u = (_a2 = g.propertyModifiers) == null ? void 0 : _a2.get(e);
    u && u.some((N) => Math.abs(N - 1) > 1e-9) && f.push(`PROPMODIFIERS "${u.map((N) => A(N)).join(" ")}"`);
    const d = (_b2 = O.momentReleases) == null ? void 0 : _b2.get(e);
    if (d && d.some((N) => N)) {
      const N = [];
      d.length === 12 ? (d[0] && N.push("PI"), d[1] && N.push("V2I"), d[2] && N.push("V3I"), d[3] && N.push("TI"), d[4] && N.push("M2I"), d[5] && N.push("M3I"), d[6] && N.push("PJ"), d[7] && N.push("V2J"), d[8] && N.push("V3J"), d[9] && N.push("TJ"), d[10] && N.push("M2J"), d[11] && N.push("M3J")) : d.length === 6 && (d[0] && N.push("TI"), d[1] && N.push("M2I"), d[2] && N.push("M3I"), d[3] && N.push("TJ"), d[4] && N.push("M2J"), d[5] && N.push("M3J")), N.length > 0 && f.push(`RELEASE "${N.join(" ")}"`);
    }
    const D = (_c2 = O.insertionPoints) == null ? void 0 : _c2.get(e);
    D && (Math.abs(D[0]) > 1e-9 || Math.abs(D[1]) > 1e-9) && f.push(`LATEROFFSET ${A(D[0])} TRANSOFFSET ${A(D[1])}`);
    const R = (_d = O.rigidOffsets) == null ? void 0 : _d.get(e);
    return R && (Math.abs(R[0]) > 1e-9 || Math.abs(R[1]) > 1e-9) && f.push(`LENGTHOFFI ${A(R[0])} LENGTHOFFJ ${A(R[1])} RIGIDZONE 0.5`), f.length > 0 ? ` ${f.join(" ")} ` : "";
  }, Ct = [], Ot = /* @__PURE__ */ new Set(), At = /* @__PURE__ */ new Map();
  C.forEach((e, f) => {
    if (e.length !== 2) return;
    const u = Ft($, e);
    if (u === "BEAM") return;
    const d = $[e[0]][2] <= $[e[1]][2] ? e[0] : e[1], D = $[e[0]][2] <= $[e[1]][2] ? e[1] : e[0];
    if (Math.abs($[d][0] - $[D][0]) > 1e-6 || Math.abs($[d][1] - $[D][1]) > 1e-6) return;
    const R = rt(d), N = dt.get(f) || `Sec_${f}`, _ = `${R.pt}_${N}_${u}`;
    At.has(_) || At.set(_, []), At.get(_).push({ i: f, bot: d, top: D, zBot: A($[d][2]), zTop: A($[D][2]), planPt: R.pt, secName: N, type: u });
  }), At.forEach((e, f) => {
    e.sort((d, D) => d.zBot - D.zBot);
    let u = 0;
    for (let d = 1; d <= e.length; d++) if (d === e.length || Math.abs(e[d].zBot - e[d - 1].zTop) > 1e-6) {
      const R = e.slice(u, d);
      R.length >= 1 && (Ct.push({ elemIndices: R.map((N) => N.i), planPt: R[0].planPt, bottomNodeIdx: R[0].bot, topNodeIdx: R[R.length - 1].top, secName: R[0].secName, type: R[0].type, nSegments: R.length }), R.forEach((N) => Ot.add(N.i))), u = d;
    }
  }), c.push("$ LINE CONNECTIVITIES");
  const Mt = [];
  Ct.forEach((e, f) => {
    const u = `C${f + 1}`, d = rt(e.topNodeIdx);
    rt(e.bottomNodeIdx);
    const D = A($[e.topNodeIdx][2]), R = A($[e.bottomNodeIdx][2]), N = E.indexOf(D), _ = E.indexOf(R), U = Math.max(1, N - _), k = yt(e.elemIndices[0]);
    c.push(`  LINE  "${u}"  ${e.type}  "${d.pt}"  "${d.pt}"  ${U}`), Mt.push(`  LINEASSIGN  "${u}"  "${d.story}"  SECTION "${e.secName}" ${k} RIGIDZONE 0 MAXSTASPC 0.5 MINNUMSTA ${e.nSegments} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  }), C.forEach((e, f) => {
    if (e.length !== 2 || Ot.has(f)) return;
    const u = Ft($, e), d = dt.get(f) || `Sec_${f}`, D = yt(f);
    if (u === "BEAM") {
      const R = rt(e[0]), N = rt(e[1]);
      c.push(`  LINE  "E${f + 1}"  BEAM  "${R.pt}"  "${N.pt}"  0`), Mt.push(`  LINEASSIGN  "E${f + 1}"  "${R.story}"  SECTION "${d}" ${D} RIGIDZONE 0 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const R = $[e[0]][2] <= $[e[1]][2] ? e[0] : e[1], N = $[e[0]][2] <= $[e[1]][2] ? e[1] : e[0], _ = rt(N), U = A($[R][2]), k = A($[N][2]), z = E.indexOf(U), ut = E.indexOf(k), Nt = Math.max(1, ut >= 0 && z >= 0 ? ut - z : 1);
      c.push(`  LINE  "E${f + 1}"  ${u}  "${_.pt}"  "${_.pt}"  ${Nt}`), Mt.push(`  LINEASSIGN  "E${f + 1}"  "${_.story}"  SECTION "${d}" ${D} RIGIDZONE 0 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    }
  }), c.push("");
  const gt = g.weightMode ?? "auto", It = /* @__PURE__ */ new Set();
  c.push("$ POINT ASSIGNS"), (_c = L.supports) == null ? void 0 : _c.forEach((e, f) => {
    const u = [];
    if (e[0] && u.push("UX"), e[1] && u.push("UY"), e[2] && u.push("UZ"), e[3] && u.push("RX"), e[4] && u.push("RY"), e[5] && u.push("RZ"), u.length > 0) {
      const d = rt(f), D = d.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      c.push(`  POINTASSIGN  "${d.pt}"  "${d.story}"  RESTRAINT "${u.join(" ")}" ${D} `), It.add(`${d.pt}@${d.story}`);
    }
  }), Ct.forEach((e) => {
    const f = rt(e.topNodeIdx), u = `${f.pt}@${f.story}`;
    H && !It.has(u) && f.story !== "Base" && (c.push(`  POINTASSIGN  "${f.pt}"  "${f.story}"  DIAPH "D1"  `), It.add(u));
  }), gt === "manual" && L.loads && L.loads.forEach((e, f) => {
    const u = rt(f), d = `${u.pt}@${u.story}`;
    It.has(d) || (c.push(`  POINTASSIGN  "${u.pt}"  "${u.story}"  DIAPH "DISCONNECTED"  `), It.add(d));
  }), c.push(""), c.push("$ LINE ASSIGNS"), Mt.forEach((e) => c.push(e)), c.push("");
  const Tt = [];
  C.forEach((e, f) => {
    if (e.length === 4) {
      const u = $[e[0]], d = $[e[1]], D = $[e[2]], R = [d[0] - u[0], d[1] - u[1], d[2] - u[2]], N = [D[0] - u[0], D[1] - u[1], D[2] - u[2]], _ = R[1] * N[2] - R[2] * N[1], U = R[2] * N[0] - R[0] * N[2], k = R[0] * N[1] - R[1] * N[0], z = Math.sqrt(_ * _ + U * U + k * k), ut = z > 1e-10 && Math.abs(k) / z < 0.5;
      Tt.push({ idx: f, el: e, isWall: ut });
    }
  });
  const Rt = (() => {
    for (const [e, f] of P) if (!f) return w.get(e);
    return w.values().next().value || "Conc_1";
  })(), Lt = (e, f) => {
    var _a2;
    for (const u of Tt) if (e(u)) {
      const d = (_a2 = O.thicknesses) == null ? void 0 : _a2.get(u.idx);
      if (d !== void 0) return d;
    }
    return f;
  };
  if (Tt.some((e) => !e.isWall)) {
    c.push("$ SLAB PROPERTIES");
    const e = Lt((f) => !f.isWall, 0.15);
    c.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${Rt}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${A(e)} `), c.push("");
  }
  if (Tt.some((e) => e.isWall)) {
    c.push("$ WALL PROPERTIES");
    const e = Lt((f) => f.isWall, 0.2);
    c.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${Rt}"  MODELINGTYPE "ShellThin"  WALLTHICKNESS ${A(e)} `), c.push("");
  }
  if (Tt.length > 0) {
    c.push("$ AREA CONNECTIVITIES");
    const e = [];
    Tt.forEach((f, u) => {
      const { el: d, isWall: D } = f, R = D ? `W${u + 1}` : `F${u + 1}`, N = D ? "PANEL" : "FLOOR", _ = d.map((U) => rt(U));
      if (D) {
        const U = $[d[0]][2] <= $[d[2]][2] ? 0 : 2, k = $[d[1]][2] <= $[d[3]][2] ? 1 : 3;
        c.push(`  AREA "${R}"  ${N}  4  "${_[U].pt}"  "${_[k].pt}"  "${_[k].pt}"  "${_[U].pt}"  1  1  0  0  `);
        const z = _[U === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${R}"  "${z}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        c.push(`  AREA "${R}"  ${N}  4  "${_[0].pt}"  "${_[1].pt}"  "${_[2].pt}"  "${_[3].pt}"  0  0  0  0  `);
        const U = H ? ' DIAPH  "D1" ' : "";
        e.push(`  AREAASSIGN  "${R}"  "${_[0].story}"  SECTION "Losa" ${U} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }
    }), c.push(""), c.push("$ AREA ASSIGNS"), e.forEach((f) => c.push(f)), c.push("");
  }
  const xt = gt === "manual" ? 0 : 1;
  c.push("$ LOAD PATTERNS"), c.push(`  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  ${xt}`), c.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), c.push("");
  const mt = [];
  return L.loads && L.loads.size > 0 && L.loads.forEach((e, f) => {
    const [u, d, D] = e, R = rt(f);
    Math.abs(u) > 1e-10 && mt.push(`  POINTLOAD  "${R.pt}"  "${R.story}"  TYPE "FORCE"  LC "Dead"  FX ${A(V(u))}  FY 0  FZ 0`), Math.abs(d) > 1e-10 && mt.push(`  POINTLOAD  "${R.pt}"  "${R.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY ${A(V(d))}  FZ 0`), gt === "manual" && Math.abs(D) > 1e-10 && mt.push(`  POINTLOAD  "${R.pt}"  "${R.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY 0  FZ ${A(V(D))}`);
  }), L.moments && L.moments.size > 0 && L.moments.forEach((e, f) => {
    const [u, d, D] = e, R = rt(f);
    Math.abs(u) > 1e-10 && mt.push(`  POINTLOAD  "${R.pt}"  "${R.story}"  TYPE "MOMENT"  LC "Dead"  MX ${A(V(u))}  MY 0  MZ 0`), Math.abs(d) > 1e-10 && mt.push(`  POINTLOAD  "${R.pt}"  "${R.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY ${A(V(d))}  MZ 0`), Math.abs(D) > 1e-10 && mt.push(`  POINTLOAD  "${R.pt}"  "${R.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY 0  MZ ${A(V(D))}`);
  }), mt.length > 0 && (c.push("$ POINT OBJECT LOADS"), mt.forEach((e) => c.push(e)), c.push("")), c.push("$ ANALYSIS OPTIONS"), c.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), c.push('  PDELTA  METHOD "NONE"  '), c.push(""), c.push("$ MASS SOURCE"), c.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), c.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), c.push(""), c.push("$ LOAD CASES"), c.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), c.push('  LOADCASE "Dead"  LOADPAT  "Dead"  SF 1 '), c.push('  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), c.push('  LOADCASE "Live"  LOADPAT  "Live"  SF 1 '), c.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), c.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), c.push(""), c.push("$ LOAD COMBINATIONS"), c.push('  COMBO "1.4D"  TYPE "Linear Add"  '), c.push('  COMBO "1.4D"  LOADCASE  "Dead"  SF 1.4 '), c.push('  COMBO "1.2D+1.6L"  TYPE "Linear Add"  '), c.push('  COMBO "1.2D+1.6L"  LOADCASE  "Dead"  SF 1.2 '), c.push('  COMBO "1.2D+1.6L"  LOADCASE  "Live"  SF 1.6 '), c.push(""), c.push("  END"), c.push("$ END OF MODEL FILE"), c.join(`\r
`);
}
function Ft(g, $) {
  const C = g[$[0]], L = g[$[1]], O = Math.abs(L[2] - C[2]), v = Math.sqrt((L[0] - C[0]) ** 2 + (L[1] - C[1]) ** 2), K = O > v * 0.5;
  return K && v > 0.01 ? "BRACE" : K ? "COLUMN" : "BEAM";
}
export {
  zt as a,
  Gt as b,
  Bt as c,
  kt as d,
  Ht as e,
  vt as p
};
