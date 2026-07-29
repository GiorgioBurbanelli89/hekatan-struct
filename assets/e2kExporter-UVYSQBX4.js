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
    let I = false, D = 0, b = 0, z = 0, $ = 0;
    d.addEventListener("mousedown", (e) => {
      const f = e.target;
      if (!f.closest("#modal-header") || f.closest("button")) return;
      I = true;
      const F = d.getBoundingClientRect();
      D = e.clientX, b = e.clientY, z = F.left, $ = F.top, d.style.bottom = "auto", d.style.right = "auto", d.style.left = `${F.left}px`, d.style.top = `${F.top}px`, e.preventDefault();
    }), document.addEventListener("mousemove", (e) => {
      if (!I) return;
      let f = z + (e.clientX - D), F = $ + (e.clientY - b);
      f = Math.max(-d.offsetWidth + 80, Math.min(window.innerWidth - 80, f)), F = Math.max(0, Math.min(window.innerHeight - 30, F)), d.style.left = `${f}px`, d.style.top = `${F}px`;
    }), document.addEventListener("mouseup", () => {
      I = false;
    });
  }
  let p = false;
  const M = 0.9;
  function A(I, D) {
    var _a, _b, _c, _d;
    if (!I.frequencies || I.frequencies.length === 0) {
      const O = ((_a = D.properties) == null ? void 0 : _a.length) ? D.properties.map((E) => `<div>${E}</div>`).join("") : "<div>El solver no devolvi\xF3 modos.</div>";
      d.innerHTML = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:move; user-select:none;" title="Arrastra para mover">
  <b style="color:#ff0">\u2725 \u26A1 MODAL \u2014 ${D.title}</b>
</div>
<div id="modal-body" style="padding:0 12px 10px 12px;">
  <div style="color:#f44; font-weight:bold; font-size:13px; padding:6px 0">\u2717 El an\xE1lisis modal NO se ejecut\xF3</div>
  <div style="color:#fa0; font-size:11px; line-height:1.5">${O}</div>
</div>`;
      return;
    }
    const b = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], z = [0, 0, 0, 0, 0, 0], $ = I.frequencies.length;
    let e = -1, f = -1, F = -1, H = 0, J = 0;
    {
      const O = [0, 0, 0, 0, 0, 0];
      for (let E = 0; E < $; E++) {
        const m = ((_b = I.massParticipation) == null ? void 0 : _b[E]) || [0, 0, 0, 0, 0, 0];
        for (let l = 0; l < 6; l++) O[l] += m[l];
        e < 0 && O[0] >= M && (e = E + 1), f < 0 && O[1] >= M && (f = E + 1), F < 0 && O[0] >= M && O[1] >= M && (F = E + 1);
      }
      H = O[0], J = O[1];
    }
    const G = (() => {
      const O = (E) => `${((M - E) * 100).toFixed(1)} %`;
      return F > 0 ? `<span style="color:#0f0">\u2713 Masa participativa \u2265 90 % en X e Y al modo ${F} de ${$} \xB7 \u03A3Ux=${(H * 100).toFixed(1)} % \u03A3Uy=${(J * 100).toFixed(1)} % (NEC-15 \xA76.2.2 / ASCE 7-22 \xA712.9.1.1)</span>` : e > 0 && f < 0 ? `<span style="color:#fa0">\u26A0 FALTAN MODOS EN Y \u2014 \u03A3Uy=${(J * 100).toFixed(1)} % en ${$} modos (faltan ${O(J)} para el 90 % que exige NEC-15 \xA76.2.2). X cumple en el modo ${e}. Sub\xED \xABN\xB0 de modos\xBB en Settings \u25B8 \u26A1 Modal + Animaci\xF3n.</span>` : f > 0 && e < 0 ? `<span style="color:#fa0">\u26A0 FALTAN MODOS EN X \u2014 \u03A3Ux=${(H * 100).toFixed(1)} % en ${$} modos (faltan ${O(H)} para el 90 % que exige NEC-15 \xA76.2.2). Y cumple en el modo ${f}. Sub\xED \xABN\xB0 de modos\xBB en Settings \u25B8 \u26A1 Modal + Animaci\xF3n.</span>` : `<span style="color:#f44">\u2717 FALTAN MODOS EN AMBAS DIRECCIONES \u2014 \u03A3Ux=${(H * 100).toFixed(1)} % \xB7 \u03A3Uy=${(J * 100).toFixed(1)} % en ${$} modos. NEC-15 \xA76.2.2 exige \u2265 90 %: el cortante din\xE1mico sale bajo y el control Vdin/Vest no es representativo. Sub\xED \xABN\xB0 de modos\xBB en Settings \u25B8 \u26A1 Modal + Animaci\xF3n.</span>`;
    })();
    let P = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:move; user-select:none;" title="Arrastra para mover">
  <b style="color:#ff0">\u2725 \u26A1 MODAL ANALYSIS \u2014 ${D.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
    P += '<div id="modal-body" style="padding:0 12px 10px 12px;">', P += `<div style="padding:6px 0; font-weight:bold; font-size:12px; line-height:1.4">${G}</div>`, P += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const O of b) P += `<th style="padding:2px 5px">${O}</th>`;
    P += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let O = 0; O < 6; O++) z[O] = 0;
    if (I.frequencies.forEach((O, E) => {
      var _a2;
      const m = O > 0 ? 1 / O : 0, l = O * 2 * Math.PI, s = O >= 500, o = ((_a2 = I.massParticipation) == null ? void 0 : _a2[E]) || [0, 0, 0, 0, 0, 0];
      for (let V = 0; V < 6; V++) z[V] += o[V];
      let N = 0, w = o[0];
      for (let V = 1; V < 6; V++) o[V] > w && (w = o[V], N = V);
      const h = s ? "masa faltante (r\xEDgida)" : w < 0.05 ? "\u2014" : `${b[N]} (${(w * 100).toFixed(0)} %)`, B = N === 0 || N === 1 ? "#0f0" : N === 5 ? "#0ff" : N === 2 ? "#fa0" : "#888", U = E + 1 === e, _ = E + 1 === f, k = E + 1 === F;
      P += `<tr style="border-bottom:1px solid #fff1; ${s ? "background:rgba(0,180,255,0.12);" : k ? "background:rgba(0,255,0,0.12);" : U || _ ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${s ? "MF" : E + 1 + (k ? " \u2605" : "")}</td>
  <td style="padding:2px 6px; text-align:right">${s ? "r\xEDgido" : O.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${s ? "\u22480" : m.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${s ? "\u2014" : l.toFixed(2)}</td>`;
      for (let V = 0; V < 6; V++) {
        const nt = (o[V] * 100).toFixed(1), ot = o[V] > 0.5 ? "#f00" : o[V] > 0.1 ? "#ff0" : "#0f0";
        P += `<td style="padding:2px 5px; text-align:right; color:${ot}">${nt}%</td>`;
      }
      const q = z[0] >= M ? "#0f0" : "#0ff", Q = z[1] >= M ? "#0f0" : "#0ff";
      P += `<td style="padding:2px 5px; text-align:right; color:${q}">${(z[0] * 100).toFixed(1)}%${U ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${Q}">${(z[1] * 100).toFixed(1)}%${_ ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(z[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${B}">${h}</td></tr>`;
    }), P += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, P += "</div>", d.innerHTML = P, p) {
      const O = d.querySelector("#modal-body"), E = d.querySelector("#modal-minimize");
      O && (O.style.display = "none"), E && (E.textContent = "\u25A2", E.title = "Restaurar");
    }
    (_c = d.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      p = !p;
      const O = d.querySelector("#modal-body"), E = d.querySelector("#modal-minimize");
      p ? (O.style.display = "none", E.textContent = "\u25A2", E.title = "Restaurar") : (O.style.display = "block", E.textContent = "\u25AC", E.title = "Minimizar");
    }), (_d = d.querySelector("#modal-copy")) == null ? void 0 : _d.addEventListener("click", () => {
      const O = [];
      O.push(`Modal Analysis \u2014 ${D.title}`), O.push(G.replace(/<[^>]+>/g, ""));
      const E = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${b.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      O.push(E), O.push("-".repeat(E.length));
      const m = [0, 0, 0, 0, 0, 0];
      I.frequencies.forEach((s, o) => {
        var _a2;
        const N = s > 0 ? 1 / s : 0, w = s * 2 * Math.PI, h = ((_a2 = I.massParticipation) == null ? void 0 : _a2[o]) || [0, 0, 0, 0, 0, 0];
        for (let Z = 0; Z < 6; Z++) m[Z] += h[Z];
        let B = 0, U = h[0];
        for (let Z = 1; Z < 6; Z++) h[Z] > U && (U = h[Z], B = Z);
        const _ = U < 0.05 ? "\u2014" : `${b[B]} (${(U * 100).toFixed(0)}%)`, k = h.map((Z) => ((Z * 100).toFixed(1) + "%").padStart(6)).join(" ");
        O.push(`${String(o + 1).padStart(4)}  ${s.toFixed(4).padStart(9)}  ${N.toFixed(4).padStart(9)}  ${w.toFixed(2).padStart(9)}  ${k}  ${(m[0] * 100).toFixed(1).padStart(5)}%  ${(m[1] * 100).toFixed(1).padStart(5)}%  ${(m[5] * 100).toFixed(1).padStart(5)}%  ${_}`);
      }), navigator.clipboard.writeText(O.join(`
`));
      const l = d.querySelector("#modal-copy");
      l.textContent = "\u2713", setTimeout(() => l.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: d, render: A };
}
function Dt(d) {
  var _a;
  const p = d.split(/\r?\n/), M = { force: "TONF", length: "M" }, A = [], I = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), z = [], $ = [], e = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), F = [], H = [];
  let J = "", G = "";
  const P = /* @__PURE__ */ new Map();
  for (const g of p) {
    const L = g.trim();
    if (!L || L.startsWith("$")) {
      L.startsWith("$ ") && (G = L.substring(2).trim());
      continue;
    }
    if (G && (P.has(G) || P.set(G, []), P.get(G).push(g)), G === "CONTROLS") {
      const c = L.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
      c && (M.force = c[1], M.length = c[2]);
      const R = L.match(/TITLE2\s+"([^"]+)"/);
      R && (J = R[1]);
    }
    if (G === "STORIES - IN SEQUENCE FROM TOP") {
      const c = L.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
      if (c) {
        const R = c[1], i = c[2] ? parseFloat(c[2]) : 0, u = c[3] ? parseFloat(c[3]) : void 0;
        A.push({ name: R, height: i, elev: u ?? 0 });
      }
    }
    if (G === "MATERIAL PROPERTIES") {
      const c = L.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
      if (c) {
        const R = c[1];
        I.has(R) || I.set(R, { type: c[2] || "", E: 0, G: 0, nu: 0 });
        const i = I.get(R);
        c[2] && (i.type = c[2]);
        const u = L.match(/\bE\s+([\d.eE+-]+)/);
        u && (i.E = parseFloat(u[1]));
        const y = L.match(/\bU\s+([\d.eE+-]+)/);
        y && (i.nu = parseFloat(y[1]), i.G = i.E / (2 * (1 + i.nu)));
        const t = L.match(/\bFY\s+([\d.eE+-]+)/);
        t && (i.fy = parseFloat(t[1]));
        const n = L.match(/\bFC\s+([\d.eE+-]+)/);
        n && (i.fc = parseFloat(n[1]));
        const r = L.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
        r && (i.density = parseFloat(r[1]));
      }
    }
    if (G === "FRAME SECTIONS") {
      const c = L.match(/FRAMESECTION\s+"([^"]+)"/);
      if (c) {
        const R = c[1];
        D.has(R) || D.set(R, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
        const i = D.get(R), u = L.match(/MATERIAL\s+"([^"]+)"/);
        u && (i.material = u[1]);
        const y = L.match(/SHAPE\s+"([^"]+)"/);
        y && (i.shape = y[1]);
        const t = L.match(/\bD\s+([\d.eE+-]+)/);
        t && (i.D = parseFloat(t[1]));
        const n = L.match(/\bB\s+([\d.eE+-]+)/);
        n && (i.B = parseFloat(n[1]));
        const r = L.match(/\bTF\s+([\d.eE+-]+)/);
        r && (i.TF = parseFloat(r[1]));
        const a = L.match(/\bTW\s+([\d.eE+-]+)/);
        a && (i.TW = parseFloat(a[1]));
        const C = L.match(/\bR\s+([\d.eE+-]+)/);
        C && (i.R = parseFloat(C[1]));
        const S = L.match(/FILLMATERIAL\s+"([^"]+)"/);
        S && (i.fillMaterial = S[1]);
        const T = L.match(/I2MOD\s+([\d.eE+-]+)/);
        T && (i.modI2 = parseFloat(T[1]));
        const Y = L.match(/I3MOD\s+([\d.eE+-]+)/);
        Y && (i.modI3 = parseFloat(Y[1]));
      }
    }
    if (G === "POINT COORDINATES") {
      const c = L.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
      c && b.set(c[1], [parseFloat(c[2]), parseFloat(c[3])]);
    }
    if (G === "LINE CONNECTIVITIES") {
      const c = L.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
      c && z.push({ name: c[1], type: c[2], pt1: c[3], pt2: c[4], nStories: parseInt(c[5]) });
    }
    if (G === "POINT ASSIGNS") {
      const c = L.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
      c && e.set(`${c[1]}@${c[2]}`, c[3].split(/\s+/));
    }
    if (G === "LINE ASSIGNS") {
      const c = L.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
      if (c) {
        const R = { story: c[2], section: c[3], rigidZone: 0, releases: [], angle: 0 }, i = L.match(/RIGIDZONE\s+([\d.eE+-]+)/);
        i && (R.rigidZone = parseFloat(i[1]));
        const u = L.match(/RELEASE\s+"([^"]+)"/);
        u && (R.releases = u[1].split(/\s+/));
        const y = L.match(/ANG\s+([-\d.eE+]+)/);
        y && (R.angle = parseFloat(y[1])), f.set(`${c[1]}@${c[2]}`, R);
      }
    }
    if (G === "GRIDS") {
      const c = L.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
      c && H.push({ label: c[1], dir: c[2], coord: parseFloat(c[3]) });
    }
    if (G === "FRAME OBJECT LOADS") {
      const c = L.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      c && F.push({ line: c[1], story: c[2], type: c[3], dir: c[4], lc: c[5], val: parseFloat(c[6]) });
    }
    if (G === "AREA CONNECTIVITIES") {
      const c = L.match(/AREA\s+"([^"]+)"\s+(?:([A-Za-z]\w*)\s+)?\d+\s+(.+)/);
      if (c) {
        const R = ((_a = c[3].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((i) => i.replace(/"/g, ""))) || [];
        $.push({ name: c[1], pts: R, nStories: 0 });
      }
    }
  }
  const O = /* @__PURE__ */ new Map();
  if (A.length > 0) {
    const g = A.length - 1;
    O.set(A[g].name, A[g].elev);
    for (let L = g - 1; L >= 0; L--) {
      const R = O.get(A[L + 1].name) + A[L].height;
      A[L].elev = R, O.set(A[L].name, R);
    }
  }
  const E = [], m = [], l = /* @__PURE__ */ new Map(), s = (g, L) => `${g}@${L}`, o = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Map();
  for (const g of z) N.set(g.name, g);
  for (const g of z) for (const [L, c] of f) {
    if (!L.startsWith(g.name + "@")) continue;
    const R = c.story, i = A.findIndex((u) => u.name === R);
    if (!(i < 0)) if (g.type === "COLUMN" || g.type === "BRACE") {
      o.add(s(g.pt2, R));
      const u = Math.max(g.nStories, 1), y = Math.min(i + u, A.length - 1);
      o.add(s(g.pt1, A[y].name));
    } else o.add(s(g.pt1, R)), o.add(s(g.pt2, R));
  }
  for (const [g] of e) o.add(g);
  for (const g of o) {
    const [L, c] = g.split("@"), R = b.get(L), i = O.get(c);
    R === void 0 || i === void 0 || (E.push([R[0], R[1], i]), m.push(g), l.set(g, E.length - 1));
  }
  const w = [], h = [], B = [], U = [], _ = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map();
  for (const g of z) for (const [L, c] of f) {
    if (!L.startsWith(g.name + "@")) continue;
    const R = c.story, i = A.findIndex((a) => a.name === R);
    if (i < 0) continue;
    let u, y;
    if (g.type === "COLUMN" || g.type === "BRACE") {
      const a = Math.max(g.nStories, 1), C = Math.min(i + a, A.length - 1);
      u = s(g.pt1, A[C].name), y = s(g.pt2, R);
    } else u = s(g.pt1, R), y = s(g.pt2, R);
    const t = l.get(u), n = l.get(y);
    if (t === void 0 || n === void 0 || t === n) continue;
    const r = w.length;
    if (w.push([t, n]), h.push(g.name), B.push(g.type), U.push(R), _.set(r, c.section), c.rigidZone > 0 && k.set(r, [c.rigidZone, c.rigidZone]), c.releases.length > 0) {
      const a = new Array(12).fill(false), C = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const S of c.releases) {
        const T = C[S];
        T !== void 0 && (a[T] = true);
      }
      Z.set(r, a);
    }
  }
  const q = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map();
  for (const [g, L] of _) {
    const c = D.get(L);
    if (!c) continue;
    const R = I.get(c.material);
    R && (q.set(g, R.E), Q.set(g, R.G));
    const i = c.D, u = c.B, y = c.TF, t = c.TW;
    let n = 0, r = 0, a = 0, C = 0, S = 0, T = 0, Y = "rect";
    switch (c.shape) {
      case "Concrete Rectangular":
        n = i * u, r = u * i ** 3 / 12, a = i * u ** 3 / 12, C = u * i ** 3 * (1 / 3 - 0.21 * (i / u) * (1 - i ** 4 / (12 * u ** 4))), S = T = 5 / 6 * n, Y = "rect";
        break;
      case "Concrete Circle":
        n = Math.PI * i ** 2 / 4, r = a = Math.PI * i ** 4 / 64, C = Math.PI * i ** 4 / 32, S = T = 0.9 * n, Y = "circ";
        break;
      case "Steel I/Wide Flange":
        n = 2 * u * y + (i - 2 * y) * t, r = (u * i ** 3 - (u - t) * (i - 2 * y) ** 3) / 12, a = (2 * y * u ** 3 + (i - 2 * y) * t ** 3) / 12, C = (2 * u * y ** 3 + (i - 2 * y) * t ** 3) / 3, S = (i - 2 * y) * t, T = 2 * u * y * 5 / 6, Y = "I";
        break;
      case "Steel Tube":
        n = i * u - (i - 2 * t) * (u - 2 * t), r = (u * i ** 3 - (u - 2 * t) * (i - 2 * t) ** 3) / 12, a = (i * u ** 3 - (i - 2 * t) * (u - 2 * t) ** 3) / 12, C = 2 * t * (i - t) * (u - t) * ((i - t) * (u - t)) / (i - t + (u - t)), S = 2 * i * t, T = 2 * u * t, Y = "HSS";
        break;
      case "Filled Steel Tube":
        n = i * u, r = u * i ** 3 / 12, a = i * u ** 3 / 12, C = 2 * t * (i - t) * (u - t) * ((i - t) * (u - t)) / (i - t + (u - t)), S = 2 * i * t + 5 / 6 * (i - 2 * t) * (u - 2 * t), T = 2 * u * t + 5 / 6 * (i - 2 * t) * (u - 2 * t), Y = "CFT";
        break;
      case "Steel Angle": {
        const x = y || t;
        n = x * (i + u - x), r = x * (i ** 3 + u * x ** 2 + x ** 2 * (i - x)) / 12, a = x * (u ** 3 + i * x ** 2 + x ** 2 * (u - x)) / 12, C = (i + u - x) * x ** 3 / 3, S = i * x, T = u * x, Y = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        n = 2 * u * y + (i - 2 * y) * t, r = (t * i ** 3 + 2 * u * y * (i - y) ** 2) / 12, a = (2 * y * u ** 3 + (i - 2 * y) * t ** 3) / 12, C = (2 * u * y ** 3 + (i - 2 * y) * t ** 3) / 3, S = (i - 2 * y) * t, T = 2 * u * y * 5 / 6, Y = c.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        n = 2 * (2 * u * y + (i - 2 * y) * t), r = 2 * (t * i ** 3 + 2 * u * y * (i - y) ** 2) / 12, a = 2 * (2 * y * u ** 3 + (i - 2 * y) * t ** 3) / 12, C = 2 * (2 * u * y ** 3 + (i - 2 * y) * t ** 3) / 3, S = 2 * (i - 2 * y) * t, T = 4 * u * y * 5 / 6, Y = "2C";
        break;
      default:
        i > 0 && u > 0 && (n = i * u, r = u * i ** 3 / 12, a = i * u ** 3 / 12, C = Math.min(i, u) * Math.max(i, u) ** 3 / 3 * 0.3, S = T = 5 / 6 * n);
        break;
    }
    c.modI2 && (a *= c.modI2), c.modI3 && (r *= c.modI3), V.set(g, n), at.set(g, r), it.set(g, a), St.set(g, C), S > 0 && nt.set(g, S), T > 0 && ot.set(g, T), K.set(g, { type: Y, b: u || void 0, h: i || void 0, d: Y === "circ" || Y === "pipe" ? i : void 0, tw: t || void 0, tf: y || void 0, r: c.R, name: L });
  }
  const pt = /* @__PURE__ */ new Map();
  for (const [g, L] of e) {
    const c = l.get(g);
    if (c === void 0) continue;
    const R = [false, false, false, false, false, false];
    for (const i of L) i === "UX" && (R[0] = true), i === "UY" && (R[1] = true), i === "UZ" && (R[2] = true), i === "RX" && (R[3] = true), i === "RY" && (R[4] = true), i === "RZ" && (R[5] = true);
    pt.set(c, R);
  }
  const ct = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map();
  for (let g = 0; g < h.length; g++) Et.set(`${h[g]}@${U[g]}`, g);
  for (const g of F) {
    const L = Et.get(`${g.line}@${g.story}`);
    if (L === void 0) continue;
    const [c, R] = w[L], i = E[c], u = E[R], y = Math.sqrt((u[0] - i[0]) ** 2 + (u[1] - i[1]) ** 2 + (u[2] - i[2]) ** 2);
    if (y < 1e-10) continue;
    const t = g.val * y / 2;
    let n = 0, r = 0, a = 0;
    g.dir === "GRAV" || g.dir === "GRAVITY" ? a = -t : g.dir === "X" ? n = t : g.dir === "Y" ? r = t : g.dir === "Z" && (a = -t);
    for (const C of [c, R]) {
      const S = ct.get(C) || [0, 0, 0, 0, 0, 0];
      S[0] += n, S[1] += r, S[2] += a, ct.set(C, S);
    }
  }
  const rt = /* @__PURE__ */ new Map();
  for (const [g, L] of _) {
    const c = D.get(L);
    if (!c) continue;
    const R = I.get(c.material);
    (R == null ? void 0 : R.density) && rt.set(g, R.density);
  }
  return { units: M, stories: A.reverse(), materials: I, frameSections: D, nodes: E, nodeNames: m, nodeNameToIdx: l, elements: w, elementNames: h, elementTypes: B, elementStories: U, elementSections: _, nodeInputs: { supports: pt, loads: ct }, elementInputs: { elasticities: q, shearModuli: Q, areas: V, momentsOfInertiaZ: at, momentsOfInertiaY: it, torsionalConstants: St, shearAreasY: nt, shearAreasZ: ot, rigidOffsets: k, momentReleases: Z, densities: rt, sectionShapes: K }, sectionShapes: K, grids: H, info: { nNodes: E.length, nFrames: w.length, nAreas: $.length, title: J }, rawSections: P };
}
function v(d) {
  return d && parseFloat(d) || 0;
}
function It(d) {
  const p = /* @__PURE__ */ new Map(), M = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let A;
  for (; (A = M.exec(d)) !== null; ) p.set(A[1], A[2] !== void 0 ? A[2] : A[3]);
  return p;
}
function xt(d) {
  const p = d.split(/\r?\n/);
  return p.some((A) => A.trim().startsWith("TABLE:")) ? Nt(p) : $t(p);
}
function Nt(d) {
  var _a, _b, _c, _d, _e, _f;
  const p = [];
  let M = "";
  for (const O of d) {
    const E = O.trimEnd();
    E.endsWith("_") ? M += E.slice(0, -1) + " " : (M += E, p.push(M), M = "");
  }
  M && p.push(M);
  const A = { force: "KN", length: "m" };
  let I = "UX,UY,UZ,RX,RY,RZ";
  const D = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), e = [], f = [], F = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), G = [];
  let P = "";
  for (const O of p) {
    const E = O.trim();
    if (!E || E.startsWith(";") || E.startsWith("File ")) continue;
    if (E.startsWith("TABLE:")) {
      const l = E.match(/TABLE:\s+"(.+?)"/);
      P = l ? l[1].toUpperCase() : "";
      continue;
    }
    if (E === "END TABLE DATA") {
      P = "";
      continue;
    }
    const m = It(E);
    switch (P) {
      case "PROGRAM CONTROL": {
        const l = m.get("CurrUnits");
        if (l) {
          const s = l.split(",").map((o) => o.trim());
          s[0] && (A.force = s[0]), s[1] && (A.length = s[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const l = m.get("Material");
        l && !D.has(l) && D.set(l, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const l = m.get("Material");
        if (l) {
          const s = D.get(l) || { E: 0, nu: 0, G: 0 };
          s.E = v(m.get("E1")), s.G = v(m.get("G12")), s.nu = v(m.get("U12")), s.density = v(m.get("UnitMass")), D.set(l, s);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const l = m.get("Material");
        l && D.has(l) && (D.get(l).fy = v(m.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const l = m.get("SectionName");
        l && b.set(l, { material: m.get("Material") || "", shape: m.get("Shape") || "Rectangular", D: v(m.get("t3")), B: v(m.get("t2")), TF: v(m.get("tf")), TW: v(m.get("tw")), A: v(m.get("Area")), Iz: v(m.get("I33")), Iy: v(m.get("I22")), J: v(m.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const l = m.get("Section");
        l && z.set(l, { material: m.get("Material") || "", type: m.get("Type") || "Shell", thickness: v(m.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const l = m.get("Joint");
        if (l) {
          const s = v(m.get("XorR")), o = v(m.get("Y")), N = v(m.get("Z"));
          $.set(l, [s, o, N]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const l = m.get("Frame"), s = m.get("JointI"), o = m.get("JointJ");
        l && s && o && e.push({ name: l, j1: s, j2: o });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const l = m.get("Area");
        if (l) {
          const s = parseInt(m.get("NumJoints") || "4"), o = [];
          for (let N = 1; N <= s; N++) {
            const w = m.get(`Joint${N}`);
            w && o.push(w);
          }
          o.length >= 3 && f.push({ name: l, joints: o });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const l = m.get("Joint");
        if (l) {
          const s = [((_a = m.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = m.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = m.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = m.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = m.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = m.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          F.set(l, s);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const l = m.get("Frame"), s = m.get("AnalSect");
        l && s && H.set(l, s);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const l = m.get("Area"), s = m.get("Section");
        l && s && J.set(l, s);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const l = m.get("Joint");
        l && G.push({ joint: l, fx: v(m.get("F1")), fy: v(m.get("F2")), fz: v(m.get("F3")), mx: v(m.get("M1")), my: v(m.get("M2")), mz: v(m.get("M3")) });
        break;
      }
    }
  }
  return Mt(A, I, D, b, z, $, e, f, F, H, J, G);
}
function $t(d) {
  const p = { force: "KN", length: "m" };
  let M = "UX,UY,UZ,RX,RY,RZ";
  const A = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), z = [], $ = [], e = /* @__PURE__ */ new Map(), f = [];
  let F = "", H = "";
  for (const P of d) {
    const O = P.trim();
    if (!O || O.startsWith(";")) continue;
    if (!P.startsWith(" ") && !P.startsWith("	")) {
      const l = O.toUpperCase();
      if (l === "END") break;
      l.startsWith("SHELL SECTION") ? F = "SHELL SECTION" : l.startsWith("FRAME SECTION") ? F = "FRAME SECTION" : F = l.split(/\s+/)[0];
      continue;
    }
    const E = It(O), m = O.split(/\s+/);
    switch (F) {
      case "SYSTEM": {
        const l = E.get("DOF");
        l && (M = l);
        const s = E.get("LENGTH");
        s && (p.length = s);
        const o = E.get("FORCE");
        o && (p.force = o);
        break;
      }
      case "JOINT": {
        const l = m[0];
        b.set(l, [v(E.get("X")), v(E.get("Y")), v(E.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const l = E.get("ADD"), s = E.get("DOF");
        if (l && s) {
          const o = s.split(","), N = [false, false, false, false, false, false];
          for (const w of o) {
            const h = w.toUpperCase();
            (h === "UX" || h === "U1") && (N[0] = true), (h === "UY" || h === "U2") && (N[1] = true), (h === "UZ" || h === "U3") && (N[2] = true), (h === "RX" || h === "R1") && (N[3] = true), (h === "RY" || h === "R2") && (N[4] = true), (h === "RZ" || h === "R3") && (N[5] = true);
          }
          e.set(l, N);
        }
        break;
      }
      case "MATERIAL": {
        const l = E.get("NAME");
        if (l) H = l, A.set(l, { E: 0, nu: 0, G: 0 });
        else if (H) {
          const s = A.get(H), o = E.get("E");
          o && (s.E = v(o));
          const N = E.get("U");
          N && (s.nu = v(N)), s.G = s.E / (2 * (1 + s.nu));
          const w = E.get("M");
          w && (s.density = v(w));
        }
        break;
      }
      case "SHELL": {
        const l = m[0], s = E.get("J");
        E.get("SEC"), s && $.push({ name: l, joints: s.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const l = E.get("NAME");
        l && D.set(l, { material: E.get("MAT") || "", type: E.get("TYPE") || "Shell", thickness: v(E.get("TH")) });
        break;
      }
      case "FRAME": {
        const l = m[0], s = E.get("J");
        if (s) {
          const o = s.split(",");
          o.length >= 2 && z.push({ name: l, j1: o[0], j2: o[1] });
        }
        break;
      }
      case "LOAD": {
        const l = E.get("ADD");
        l && f.push({ joint: l, fx: v(E.get("UX")), fy: v(E.get("UY")), fz: v(E.get("UZ")), mx: v(E.get("MX")), my: v(E.get("MY")), mz: v(E.get("MZ")) });
        break;
      }
    }
  }
  return Mt(p, M, A, I, D, b, z, $, e, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), f);
}
function Mt(d, p, M, A, I, D, b, z, $, e, f, F) {
  var _a;
  const H = [], J = /* @__PURE__ */ new Map(), G = [];
  for (const [h, B] of D) J.set(h, G.length), H.push(h), G.push(B);
  const P = [], O = [], E = /* @__PURE__ */ new Map();
  for (const h of b) {
    const B = J.get(h.j1), U = J.get(h.j2);
    if (B !== void 0 && U !== void 0) {
      const _ = P.length;
      P.push([B, U]), O.push(h.name);
      const k = e.get(h.name);
      k && E.set(_, k);
    }
  }
  const m = P.length;
  for (const h of z) {
    const B = h.joints.map((U) => J.get(U)).filter((U) => U !== void 0);
    if (B.length >= 3) {
      const U = P.length;
      P.push(B), O.push(h.name);
      const _ = f.get(h.name);
      _ && E.set(U, _);
    }
  }
  const l = P.length - m, s = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, o = /* @__PURE__ */ new Map(), N = M.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let h = 0; h < P.length; h++) {
    const B = E.get(h), U = B ? A.get(B) : null, _ = B ? I.get(B) : null;
    if (U || P[h].length === 2) {
      const k = U || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, Z = M.get(k.material) || N, q = Z.E || N.E, Q = Z.nu || 0.3, V = Z.G || q / (2 * (1 + Q));
      s.elasticities.set(h, q), s.shearModuli.set(h, V), s.areas.set(h, k.A || k.D * k.B), s.momentsOfInertiaZ.set(h, k.Iz || k.B * k.D ** 3 / 12), s.momentsOfInertiaY.set(h, k.Iy || k.D * k.B ** 3 / 12), s.torsionalConstants.set(h, k.J || 0), s.densities.set(h, Z.density || 0), ((_a = k.shape) == null ? void 0 : _a.includes("Wide Flange")) || k.shape === "I" ? o.set(h, { type: "I", b: k.B, h: k.D, name: B || "I-section" }) : o.set(h, { type: "rect", b: k.B, h: k.D });
    } else if (_) {
      const k = M.get(_.material) || N, Z = k.E || N.E, q = k.nu || 0.2, Q = k.G || Z / (2 * (1 + q));
      s.elasticities.set(h, Z), s.shearModuli.set(h, Q), s.thicknesses.set(h, _.thickness), s.poissonsRatios.set(h, q), s.densities.set(h, k.density || 0);
    }
  }
  const w = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [h, B] of $) {
    const U = J.get(h);
    U !== void 0 && w.supports.set(U, B);
  }
  for (const h of F) {
    const B = J.get(h.joint);
    if (B !== void 0) {
      const U = w.forces.get(B) || [0, 0, 0, 0, 0, 0];
      U[0] += h.fx, U[1] += h.fy, U[2] += h.fz, U[3] += h.mx, U[4] += h.my, U[5] += h.mz, w.forces.set(B, U);
    }
  }
  return { units: d, dof: p, materials: M, frameSections: A, shellSections: I, nodes: G, nodeNames: H, nodeNameToIdx: J, elements: P, elementNames: O, elementSections: E, nodeInputs: w, elementInputs: s, sectionShapes: o, info: { nNodes: G.length, nFrames: m, nShells: l, title: `SAP2000 (${m} frames, ${l} shells)` } };
}
function Ft(d) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: p, elements: M, nodeInputs: A, elementInputs: I } = d, D = d.units || { force: "KN", length: "m" }, b = d.title || "Awatif Model", z = [], $ = (s) => z.push(s), e = () => z.push(" ");
  $(`File ${b}.$2k was saved on m/d/yy at h:mm:ss`), e(), $('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), $("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), e();
  const f = [], F = [];
  if (M.forEach((s, o) => {
    s.length === 2 ? f.push(o) : F.push(o);
  }), f.length > 0) {
    $('TABLE:  "CONNECTIVITY - FRAME"');
    for (const s of f) {
      const o = M[s];
      $(`   Frame=${s + 1}   JointI=${o[0] + 1}   JointJ=${o[1] + 1}   IsCurved=No`);
    }
    e();
  }
  if (F.length > 0) {
    $('TABLE:  "CONNECTIVITY - AREA"');
    for (const s of F) {
      const o = M[s], N = o.map((w, h) => `Joint${h + 1}=${w + 1}`).join("   ");
      $(`   Area=${s + 1}   NumJoints=${o.length}   ${N}`);
    }
    e();
  }
  $('TABLE:  "COORDINATE SYSTEMS"'), $("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), e(), $('TABLE:  "DATABASE FORMAT TYPES"'), $("   UnitsCurr=Yes   OverrideE=No"), e();
  const H = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map();
  for (const s of f) {
    const o = ((_a = I.areas) == null ? void 0 : _a.get(s)) || 0, N = ((_b = I.momentsOfInertiaZ) == null ? void 0 : _b.get(s)) || 0, w = ((_c = I.momentsOfInertiaY) == null ? void 0 : _c.get(s)) || 0, h = ((_d = I.torsionalConstants) == null ? void 0 : _d.get(s)) || 0, B = ((_e = I.elasticities) == null ? void 0 : _e.get(s)) || 0, U = `MAT_${Math.round(B)}`, _ = `A${o.toPrecision(6)}_Iz${N.toPrecision(6)}`;
    if (!H.has(_)) {
      let Z = 0.3, q = 0.3;
      o > 0 && N > 0 && (Z = Math.sqrt(12 * N / o), q = o / Z), H.set(_, { A: o, Iz: N, Iy: w, J: h, b: q, h: Z, matKey: U });
    }
    const k = [...H.keys()].indexOf(_) + 1;
    J.set(s, `SEC${k}`);
  }
  if (f.length > 0) {
    $('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const s of f) {
      const o = J.get(s) || "SEC1";
      $(`   Frame=${s + 1}   AutoSelect=N.A.   AnalSect=${o}   MatProp=Default`);
    }
    e();
  }
  if (H.size > 0) {
    $('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let s = 0;
    for (const [, o] of H) {
      s++;
      const N = o.A * 5 / 6;
      $(`   SectionName=SEC${s}   Material=${o.matKey}   Shape=Rectangular   t3=${W(o.h)}   t2=${W(o.b)}   Area=${W(o.A)}   TorsConst=${W(o.J)}   I33=${W(o.Iz)}   I22=${W(o.Iy)}   I23=0   AS2=${W(N)}   AS3=${W(N)} _`), $("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    e();
  }
  const G = !!d.layeredSection && F.length > 0, P = d.layeredSection, O = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map();
  if (!G) for (const s of F) {
    const o = ((_f = I.thicknesses) == null ? void 0 : _f.get(s)) || 0.1, N = ((_g = I.elasticities) == null ? void 0 : _g.get(s)) || 0, w = `MAT_${Math.round(N)}`, h = `t${o.toPrecision(6)}`;
    O.has(h) || O.set(h, { t: o, matKey: w });
    const B = [...O.keys()].indexOf(h) + 1;
    E.set(s, `SSEC${B}`);
  }
  if (F.length > 0) {
    $('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const s of F) {
      const o = G ? P.name : E.get(s) || "SSEC1";
      $(`   Area=${s + 1}   Section=${o}   MatProp=Default`);
    }
    if (e(), $('TABLE:  "AREA SECTION PROPERTIES"'), G) {
      const s = P, o = ((_h = s.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      $(`   Section=${s.name}   Material=${o}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${W(s.totalThickness)}   BendThick=${W(s.totalThickness)}   Color=Magenta`);
    } else {
      let s = 0;
      for (const [, o] of O) s++, $(`   Section=SSEC${s}   Material=${o.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${W(o.t)}   BendThick=${W(o.t)}   Color=Cyan`);
    }
    if (e(), G) {
      $('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const s = P;
      for (const o of s.layers) {
        const N = o.angle ?? 0, w = o.numIntPts ?? 3;
        $(`   Section=${s.name}   LayerName=${o.name}   Distance=${W(o.distance)}   Thickness=${W(o.thickness)}   Type=Shell   NumIntPts=${w}   Material=${o.material}   MatAngle=${W(N * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      e();
    }
  }
  $('TABLE:  "JOINT COORDINATES"');
  for (let s = 0; s < p.length; s++) {
    const o = p[s];
    $(`   Joint=${s + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${W(o[0])}   Y=${W(o[1])}   Z=${W(o[2])}   SpecialJt=No`);
  }
  if (e(), A.supports && A.supports.size > 0) {
    $('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [s, o] of A.supports) {
      if (!o.some((w) => w)) continue;
      const N = (w) => w ? "Yes" : "No";
      $(`   Joint=${s + 1}   U1=${N(o[0])}   U2=${N(o[1])}   U3=${N(o[2])}   R1=${N(o[3])}   R2=${N(o[4])}   R3=${N(o[5])}`);
    }
    e();
  }
  const m = d.selfWtMult ?? 1;
  if ($('TABLE:  "LOAD PATTERN DEFINITIONS"'), $(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${m}`), e(), $('TABLE:  "LOAD CASE DEFINITIONS"'), $('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), e(), $('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), $('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), e(), A.forces && A.forces.size > 0) {
    $('TABLE:  "JOINT LOADS - FORCE"');
    for (const [s, o] of A.forces) o.some((N) => Math.abs(N) > 1e-12) && $(`   Joint=${s + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${W(o[0])}   F2=${W(o[1])}   F3=${W(o[2])}   M1=${W(o[3])}   M2=${W(o[4])}   M3=${W(o[5])}`);
    e();
  }
  const l = /* @__PURE__ */ new Map();
  for (let s = 0; s < M.length; s++) {
    const o = ((_i = I.elasticities) == null ? void 0 : _i.get(s)) || 0, N = ((_j = I.shearModuli) == null ? void 0 : _j.get(s)) || 0, w = o > 0 && N > 0 ? Math.max(0, Math.min(0.5, o / (2 * N) - 1)) : 0.2, h = ((_k = I.densities) == null ? void 0 : _k.get(s)) || 0, B = `MAT_${Math.round(o)}`;
    l.has(B) || l.set(B, { E: o, nu: w, G: N, rho: h });
  }
  $('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [s] of l) $(`   Material=${s}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  e(), $('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [s, o] of l) $(`   Material=${s}   UnitWeight=${W(o.rho * 9.81)}   UnitMass=${W(o.rho)}   E1=${W(o.E)}   G12=${W(o.G)}   U12=${W(o.nu)}   A1=9.9E-06`);
  e(), $('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [s] of l) $(`   Material=${s}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return e(), $('TABLE:  "PROGRAM CONTROL"'), $(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${D.force}, ${D.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), e(), $("END TABLE DATA"), $(""), z.join(`\r
`);
}
function W(d) {
  return d === 0 || Math.abs(d) < 1e-15 ? "0" : Math.abs(d) >= 1e6 || Math.abs(d) < 1e-3 && Math.abs(d) > 0 ? d.toExponential(8) : parseFloat(d.toPrecision(10)).toString();
}
function gt(d, p, M = 0.05) {
  const A = p.map(([I, D]) => `${(+I).toFixed(4)} ${(+D).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${d}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${M}  SPECTYPE "USER"  `, `  FUNCTION "${d}"  TIMEVAL "${A}"  `];
}
function Ot(d) {
  const { name: p, func: M, modalCase: A = "Modal", sfX: I = 9.81, sfY: D = 9.81 } = d, b = [`  LOADCASE "${p}"  TYPE  "Response Spectrum"  MODALCASE  "${A}"  `];
  return I && b.push(`  LOADCASE "${p}"  ACCEL  "U1"  FUNC  "${M}"  SF  ${I}  `), D && b.push(`  LOADCASE "${p}"  ACCEL  "U2"  FUNC  "${M}"  SF  ${D}  `), b;
}
function ut(d) {
  const { name: p = "Modal", ritz: M = false, nModes: A = 12 } = d;
  return M ? [`  LOADCASE "${p}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${p}"  MAXMODES  ${A} MINMODES  1 `, `  LOADCASE "${p}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${p}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${p}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${p}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${p}"  MAXMODES  ${A} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function Pt(d) {
  var _a;
  const p = (_a = d.e2kModel) == null ? void 0 : _a.rawSections;
  let M = p && p.size > 0 ? Ct(p, d.e2kModel) : Rt(d);
  return d.seismicNEC && (M = Lt(M, d.seismicNEC)), M;
}
function Lt(d, p) {
  const M = d.includes(`\r
`) ? `\r
` : `
`, A = d.split(/\r?\n/), I = p.name ?? "NEC", D = gt(I, p.points, p.dampRatio ?? 0.05), b = p.modalCase ?? "Modal", z = Ot({ name: p.caseName ?? "Sismo NEC", func: I, modalCase: b, sfX: p.sfX, sfY: p.sfY });
  let $ = [];
  const e = (f) => A.some((F) => f.test(F));
  if (p.modal) {
    const f = new RegExp(`^\\s*LOADCASE\\s+"${b}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let F = A.length - 1; F >= 0; F--) f.test(A[F]) && A.splice(F, 1);
    $ = ut({ name: b, ritz: !!p.modal.ritz, nModes: p.modal.nModes });
  } else e(new RegExp(`LOADCASE\\s+"${b}"\\s+TYPE\\s+"Modal`)) || ($ = ut({ name: b }));
  return Tt(A, "FUNCTIONS", D), Tt(A, "LOAD CASES", [...$, ...z]), A.join(M);
}
function Tt(d, p, M) {
  const A = d.findIndex((b) => b.trim() === `$ ${p}`);
  if (A >= 0) {
    d.splice(A + 1, 0, ...M);
    return;
  }
  const I = d.findIndex((b) => b.trim() === "END"), D = I >= 0 ? I : d.length;
  d.splice(D, 0, `$ ${p}`, ...M, "");
}
function Ct(d, p) {
  const M = [], A = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  M.push("$ File exported from Hekatan Struct Lineal (round-trip)"), M.push("");
  for (const I of A) {
    const D = d.get(I);
    if (!(!D || D.length === 0)) {
      M.push(`$ ${I}`);
      for (const b of D) M.push(b);
      M.push("");
    }
  }
  for (const [I, D] of d) if (!A.includes(I) && D.length !== 0) {
    M.push(`$ ${I}`);
    for (const b of D) M.push(b);
    M.push("");
  }
  return M.push("  END"), M.push("$ END OF MODEL FILE"), M.join(`\r
`);
}
function Rt(d) {
  var _a, _b, _c, _d;
  const { nodes: p, elements: M, nodeInputs: A, elementInputs: I, title: D, units: b } = d, z = (b == null ? void 0 : b.force) || "Tonf", $ = (b == null ? void 0 : b.length) || "m", e = [], f = (t) => Math.round(t * 1e4) / 1e4, F = (() => {
    const t = (z || "Tonf").toLowerCase();
    return t === "tonf" || t === "tonf-f" ? 1 / 9.80665 : t === "kn" || t === "kn-f" ? 1 : t === "kgf" || t === "kg" ? 1 / 980665e-8 : t === "kip" || t === "kips" ? 1 / 4.44822 : 1;
  })(), H = (t) => t * F, J = (t) => t * F, G = (t) => t * F, P = /* @__PURE__ */ new Date(), O = `${P.getMonth() + 1}/${P.getDate()}/${P.getFullYear()}  ${P.getHours()}:${String(P.getMinutes()).padStart(2, "0")}:${String(P.getSeconds()).padStart(2, "0")}`;
  e.push(`$ File   "Hekatan_export.e2k"  saved ${O} in ETABS 22.6.0`), e.push(""), e.push("$ PROGRAM INFORMATION"), e.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), e.push(""), e.push("$ CONTROLS"), e.push(`  UNITS  "${z}"  "${$}"  "C"  `), e.push('  TITLE1  "Hekatan Struct Lineal export"  '), D && e.push(`  TITLE2  "${D}"  `), e.push("  PREFERENCE  MERGETOL 0.001"), e.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), e.push("");
  const E = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set();
  p.forEach((t) => {
    E.add(f(t[0])), m.add(f(t[1]));
  });
  const l = [...E].sort((t, n) => t - n), s = [...m].sort((t, n) => t - n);
  e.push("$ GRIDS"), e.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), l.forEach((t, n) => {
    const r = n < 26 ? String.fromCharCode(65 + n) : String.fromCharCode(65 + n % 26).repeat(Math.floor(n / 26) + 1);
    e.push(`  GRID "G1"  LABEL "${r}"  DIR "X"  COORD ${t}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), s.forEach((t, n) => {
    e.push(`  GRID "G1"  LABEL "${n + 1}"  DIR "Y"  COORD ${t}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), e.push("");
  const o = /* @__PURE__ */ new Set();
  p.forEach((t) => o.add(f(t[2])));
  const N = [...o].sort((t, n) => t - n), w = [], h = /* @__PURE__ */ new Map();
  w.push("Base"), h.set(N[0], "Base");
  for (let t = 1; t < N.length; t++) {
    const n = `Level_${t}`;
    w.push(n), h.set(N[t], n);
  }
  e.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let t = N.length - 1; t >= 1; t--) e.push(`  STORY "${w[t]}"  HEIGHT ${f(N[t] - N[t - 1])} MASTERSTORY "Yes"  `);
  N.length > 0 && e.push(`  STORY "Base"  ELEV ${N[0]} `), e.push(""), M.some((t) => t.length === 4), e.push("$ DIAPHRAGM NAMES"), e.push('  DIAPHRAGM "D1"    TYPE RIGID'), e.push(""), e.push("$ MATERIAL PROPERTIES");
  const B = /* @__PURE__ */ new Set();
  (_a = I.elasticities) == null ? void 0 : _a.forEach((t) => B.add(t));
  const U = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
  let k = 0, Z = 0;
  const q = 980665e-8, Q = /* @__PURE__ */ new Map();
  if (I.densities && I.densities.size > 0) {
    const t = /* @__PURE__ */ new Map();
    I.densities.forEach((n, r) => {
      var _a2;
      const a = (_a2 = I.elasticities) == null ? void 0 : _a2.get(r);
      a !== void 0 && (t.has(a) || t.set(a, []), t.get(a).push(n));
    }), t.forEach((n, r) => {
      const a = n.reduce((S, T) => S + T, 0) / n.length, C = a > 100 ? a * q : a * 9.80665;
      Q.set(r, C);
    });
  }
  for (const t of B) {
    const n = t >= 1e8, r = n ? `Steel_${++k}` : `Conc_${++Z}`;
    U.set(t, r), _.set(t, n);
    const a = Q.get(t) ?? (n ? 76.97 : 24), C = J(t), S = G(a), T = n ? 0.3 : 0.2, Y = n ? 117e-7 : 1e-5;
    if (n) {
      e.push(`  MATERIAL  "${r}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${f(S)}`), e.push(`  MATERIAL  "${r}"    SYMTYPE "Isotropic"  E ${f(C)}  U ${T}  A ${Y}`);
      const x = 345e3, X = 45e4;
      e.push(`  MATERIAL  "${r}"  FY ${f(J(x))}  FU ${f(J(X))}  FYE ${f(J(x * 1.1))}  FUE ${f(J(X * 1.1))}`);
    } else e.push(`  MATERIAL  "${r}"    TYPE "Concrete"    WEIGHTPERVOLUME ${f(S)}`), e.push(`  MATERIAL  "${r}"    SYMTYPE "Isotropic"  E ${f(C)}  U ${T}  A ${Y}`), e.push(`  MATERIAL  "${r}"    FC ${f(J(24e3))}`);
  }
  e.push(""), e.push("$ FRAME SECTIONS");
  const V = /* @__PURE__ */ new Set(), nt = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), at = 0.05;
  M.forEach((t, n) => {
    var _a2, _b2, _c2, _d2, _e, _f;
    if (t.length !== 2) return;
    const r = (_a2 = I.sectionShapes) == null ? void 0 : _a2.get(n), a = ((_b2 = I.elasticities) == null ? void 0 : _b2.get(n)) ?? 0, C = U.get(a) || "Conc_1", S = _.get(a) ?? a >= 1e8, T = ((_c2 = I.areas) == null ? void 0 : _c2.get(n)) ?? 0, Y = ((_d2 = I.momentsOfInertiaY) == null ? void 0 : _d2.get(n)) ?? 0;
    (_e = I.momentsOfInertiaZ) == null ? void 0 : _e.get(n), (_f = I.torsionalConstants) == null ? void 0 : _f.get(n);
    let x = (r == null ? void 0 : r.type) || "rect", X = (r == null ? void 0 : r.h) ?? 0, j = (r == null ? void 0 : r.b) ?? 0, tt = (r == null ? void 0 : r.d) ?? 0;
    const ft = (r == null ? void 0 : r.tf) ?? 0, ht = (r == null ? void 0 : r.tw) ?? 0;
    X <= 0 && j <= 0 && tt <= 0 && T > 0 && (Y > 0 ? (X = Math.sqrt(12 * Y / T), j = T / X) : X = j = Math.sqrt(T), (!isFinite(X) || X < at) && (X = at), (!isFinite(j) || j < at) && (j = at), x = "rect"), X <= 0 && j <= 0 && tt <= 0 && (X = 0.3, j = 0.3, x = "rect");
    const At = `${x}_${f(X)}_${f(j)}_${f(tt)}_${f(ft)}_${f(ht)}_${C}`;
    (r == null ? void 0 : r.name) && !ot.has(At) && ot.set(At, r.name);
    let et = ot.get(At);
    if (!et) {
      const dt = S ? "S" : "C";
      x === "rect" ? et = `${dt}_R${Math.round(j * 100)}x${Math.round(X * 100)}` : x === "circ" ? et = `${dt}_C_D${Math.round(tt * 100)}` : x === "I" ? et = `${dt}_I${Math.round(X * 100)}x${Math.round(j * 100)}` : x === "HSS" ? et = `${dt}_HSS${Math.round(j * 100)}x${Math.round(X * 100)}x${Math.round(ht * 1e3)}` : et = `${dt}_Sec${V.size + 1}`, ot.set(At, et);
    }
    if (nt.set(n, et), V.has(et)) return;
    V.add(et);
    let st;
    x === "I" ? st = "Steel I/Wide Flange" : x === "HSS" ? st = "Steel Tube" : x === "CFT" ? st = "Filled Steel Tube" : x === "pipe" ? st = "Steel Pipe" : x === "L" ? st = "Steel Angle" : x === "C" ? st = "Steel Channel" : x === "2C" ? st = "Steel Double Channel" : x === "circ" ? st = "Concrete Circle" : st = "Concrete Rectangular";
    let lt = `  FRAMESECTION  "${et}"  MATERIAL "${C}"  SHAPE "${st}"`;
    X && (lt += `  D ${f(X)}`), j && (lt += `  B ${f(j)}`), tt && !X && (lt += `  D ${f(tt)}`), ft && (lt += `  TF ${f(ft)}`), ht && (lt += `  TW ${f(ht)}`), e.push(lt);
  }), e.push("");
  const it = /* @__PURE__ */ new Map();
  let St = 0;
  p.forEach((t) => {
    const n = `${f(t[0])},${f(t[1])}`;
    it.has(n) || it.set(n, `${++St}`);
  }), e.push("$ POINT COORDINATES");
  for (const [t, n] of it) {
    const [r, a] = t.split(",").map(Number);
    e.push(`  POINT "${n}"  ${r} ${a} `);
  }
  e.push("");
  const K = (t) => {
    const n = p[t], r = `${f(n[0])},${f(n[1])}`;
    return { pt: it.get(r) || "1", story: h.get(f(n[2])) || "Base" };
  }, pt = (t) => {
    var _a2, _b2, _c2, _d2;
    const n = [], r = (_a2 = d.propertyModifiers) == null ? void 0 : _a2.get(t);
    r && r.some((T) => Math.abs(T - 1) > 1e-9) && n.push(`PROPMODIFIERS "${r.map((T) => f(T)).join(" ")}"`);
    const a = (_b2 = I.momentReleases) == null ? void 0 : _b2.get(t);
    if (a && a.some((T) => T)) {
      const T = [];
      a.length === 12 ? (a[0] && T.push("PI"), a[1] && T.push("V2I"), a[2] && T.push("V3I"), a[3] && T.push("TI"), a[4] && T.push("M2I"), a[5] && T.push("M3I"), a[6] && T.push("PJ"), a[7] && T.push("V2J"), a[8] && T.push("V3J"), a[9] && T.push("TJ"), a[10] && T.push("M2J"), a[11] && T.push("M3J")) : a.length === 6 && (a[0] && T.push("TI"), a[1] && T.push("M2I"), a[2] && T.push("M3I"), a[3] && T.push("TJ"), a[4] && T.push("M2J"), a[5] && T.push("M3J")), T.length > 0 && n.push(`RELEASE "${T.join(" ")}"`);
    }
    const C = (_c2 = I.insertionPoints) == null ? void 0 : _c2.get(t);
    C && (Math.abs(C[0]) > 1e-9 || Math.abs(C[1]) > 1e-9) && n.push(`LATEROFFSET ${f(C[0])} TRANSOFFSET ${f(C[1])}`);
    const S = (_d2 = I.rigidOffsets) == null ? void 0 : _d2.get(t);
    return S && (Math.abs(S[0]) > 1e-9 || Math.abs(S[1]) > 1e-9) && n.push(`LENGTHOFFI ${f(S[0])} LENGTHOFFJ ${f(S[1])} RIGIDZONE 0.5`), n.length > 0 ? ` ${n.join(" ")} ` : "";
  }, ct = [], Et = /* @__PURE__ */ new Set(), rt = /* @__PURE__ */ new Map();
  M.forEach((t, n) => {
    if (t.length !== 2) return;
    const r = mt(p, t);
    if (r === "BEAM") return;
    const a = p[t[0]][2] <= p[t[1]][2] ? t[0] : t[1], C = p[t[0]][2] <= p[t[1]][2] ? t[1] : t[0];
    if (Math.abs(p[a][0] - p[C][0]) > 1e-6 || Math.abs(p[a][1] - p[C][1]) > 1e-6) return;
    const S = K(a), T = nt.get(n) || `Sec_${n}`, Y = `${S.pt}_${T}_${r}`;
    rt.has(Y) || rt.set(Y, []), rt.get(Y).push({ i: n, bot: a, top: C, zBot: f(p[a][2]), zTop: f(p[C][2]), planPt: S.pt, secName: T, type: r });
  }), rt.forEach((t, n) => {
    t.sort((a, C) => a.zBot - C.zBot);
    let r = 0;
    for (let a = 1; a <= t.length; a++) if (a === t.length || Math.abs(t[a].zBot - t[a - 1].zTop) > 1e-6) {
      const S = t.slice(r, a);
      S.length >= 1 && (ct.push({ elemIndices: S.map((T) => T.i), planPt: S[0].planPt, bottomNodeIdx: S[0].bot, topNodeIdx: S[S.length - 1].top, secName: S[0].secName, type: S[0].type, nSegments: S.length }), S.forEach((T) => Et.add(T.i))), r = a;
    }
  }), e.push("$ LINE CONNECTIVITIES");
  const g = [];
  ct.forEach((t, n) => {
    const r = `C${n + 1}`, a = K(t.topNodeIdx);
    K(t.bottomNodeIdx);
    const C = f(p[t.topNodeIdx][2]), S = f(p[t.bottomNodeIdx][2]), T = N.indexOf(C), Y = N.indexOf(S), x = Math.max(1, T - Y), X = pt(t.elemIndices[0]);
    e.push(`  LINE  "${r}"  ${t.type}  "${a.pt}"  "${a.pt}"  ${x}`), g.push(`  LINEASSIGN  "${r}"  "${a.story}"  SECTION "${t.secName}" ${X} RIGIDZONE 0.5 MAXSTASPC 0.5 MINNUMSTA ${t.nSegments} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  }), M.forEach((t, n) => {
    if (t.length !== 2 || Et.has(n)) return;
    const r = mt(p, t), a = nt.get(n) || `Sec_${n}`, C = pt(n);
    if (r === "BEAM") {
      const S = K(t[0]), T = K(t[1]);
      e.push(`  LINE  "E${n + 1}"  BEAM  "${S.pt}"  "${T.pt}"  0`), g.push(`  LINEASSIGN  "E${n + 1}"  "${S.story}"  SECTION "${a}" ${C} RIGIDZONE 0.5 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const S = p[t[0]][2] <= p[t[1]][2] ? t[0] : t[1], T = p[t[0]][2] <= p[t[1]][2] ? t[1] : t[0], Y = K(T), x = f(p[S][2]), X = f(p[T][2]), j = N.indexOf(x), tt = N.indexOf(X), ft = Math.max(1, tt >= 0 && j >= 0 ? tt - j : 1);
      e.push(`  LINE  "E${n + 1}"  ${r}  "${Y.pt}"  "${Y.pt}"  ${ft}`), g.push(`  LINEASSIGN  "E${n + 1}"  "${Y.story}"  SECTION "${a}" ${C} RIGIDZONE 0.5 MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    }
  }), e.push("");
  const L = d.weightMode ?? "auto", c = /* @__PURE__ */ new Set();
  e.push("$ POINT ASSIGNS"), (_b = A.supports) == null ? void 0 : _b.forEach((t, n) => {
    const r = [];
    if (t[0] && r.push("UX"), t[1] && r.push("UY"), t[2] && r.push("UZ"), t[3] && r.push("RX"), t[4] && r.push("RY"), t[5] && r.push("RZ"), r.length > 0) {
      const a = K(n), C = a.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      e.push(`  POINTASSIGN  "${a.pt}"  "${a.story}"  RESTRAINT "${r.join(" ")}" ${C} `), c.add(`${a.pt}@${a.story}`);
    }
  }), ct.forEach((t) => {
    const n = K(t.topNodeIdx), r = `${n.pt}@${n.story}`;
    !c.has(r) && n.story !== "Base" && (e.push(`  POINTASSIGN  "${n.pt}"  "${n.story}"  DIAPH "D1"  `), c.add(r));
  }), L === "manual" && A.loads && A.loads.forEach((t, n) => {
    const r = K(n), a = `${r.pt}@${r.story}`;
    c.has(a) || (e.push(`  POINTASSIGN  "${r.pt}"  "${r.story}"  DIAPH "DISCONNECTED"  `), c.add(a));
  }), e.push(""), e.push("$ LINE ASSIGNS"), g.forEach((t) => e.push(t)), e.push("");
  const R = [];
  M.forEach((t, n) => {
    if (t.length === 4) {
      const r = p[t[0]], a = p[t[1]], C = p[t[2]], S = [a[0] - r[0], a[1] - r[1], a[2] - r[2]], T = [C[0] - r[0], C[1] - r[1], C[2] - r[2]], Y = S[1] * T[2] - S[2] * T[1], x = S[2] * T[0] - S[0] * T[2], X = S[0] * T[1] - S[1] * T[0], j = Math.sqrt(Y * Y + x * x + X * X), tt = j > 1e-10 && Math.abs(X) / j < 0.5;
      R.push({ idx: n, el: t, isWall: tt });
    }
  });
  const i = (() => {
    for (const [t, n] of _) if (!n) return U.get(t);
    return U.values().next().value || "Conc_1";
  })();
  if (R.some((t) => !t.isWall)) {
    e.push("$ SLAB PROPERTIES");
    const t = ((_c = I.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
    e.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${i}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${f(t)} `), e.push("");
  }
  if (R.some((t) => t.isWall)) {
    e.push("$ WALL PROPERTIES");
    const t = ((_d = I.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
    e.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${i}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${f(t)} `), e.push("");
  }
  if (R.length > 0) {
    e.push("$ AREA CONNECTIVITIES");
    const t = [];
    R.forEach((n, r) => {
      const { el: a, isWall: C } = n, S = C ? `W${r + 1}` : `F${r + 1}`, T = C ? "PANEL" : "FLOOR", Y = a.map((x) => K(x));
      if (C) {
        const x = p[a[0]][2] <= p[a[2]][2] ? 0 : 2, X = p[a[1]][2] <= p[a[3]][2] ? 1 : 3;
        e.push(`  AREA "${S}"  ${T}  4  "${Y[x].pt}"  "${Y[X].pt}"  "${Y[X].pt}"  "${Y[x].pt}"  1  1  0  0  `);
        const j = Y[x === 0 ? 2 : 0].story;
        t.push(`  AREAASSIGN  "${S}"  "${j}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else e.push(`  AREA "${S}"  ${T}  4  "${Y[0].pt}"  "${Y[1].pt}"  "${Y[2].pt}"  "${Y[3].pt}"  0  0  0  0  `), t.push(`  AREAASSIGN  "${S}"  "${Y[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
    }), e.push(""), e.push("$ AREA ASSIGNS"), t.forEach((n) => e.push(n)), e.push("");
  }
  const u = L === "manual" ? 0 : 1;
  e.push("$ LOAD PATTERNS"), e.push(`  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  ${u}`), e.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), e.push("");
  const y = [];
  return A.loads && A.loads.size > 0 && A.loads.forEach((t, n) => {
    const [r, a, C] = t, S = K(n);
    Math.abs(r) > 1e-10 && y.push(`  POINTLOAD  "${S.pt}"  "${S.story}"  TYPE "FORCE"  LC "Dead"  FX ${f(H(r))}  FY 0  FZ 0`), Math.abs(a) > 1e-10 && y.push(`  POINTLOAD  "${S.pt}"  "${S.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY ${f(H(a))}  FZ 0`), L === "manual" && Math.abs(C) > 1e-10 && y.push(`  POINTLOAD  "${S.pt}"  "${S.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY 0  FZ ${f(H(C))}`);
  }), A.moments && A.moments.size > 0 && A.moments.forEach((t, n) => {
    const [r, a, C] = t, S = K(n);
    Math.abs(r) > 1e-10 && y.push(`  POINTLOAD  "${S.pt}"  "${S.story}"  TYPE "MOMENT"  LC "Dead"  MX ${f(H(r))}  MY 0  MZ 0`), Math.abs(a) > 1e-10 && y.push(`  POINTLOAD  "${S.pt}"  "${S.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY ${f(H(a))}  MZ 0`), Math.abs(C) > 1e-10 && y.push(`  POINTLOAD  "${S.pt}"  "${S.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY 0  MZ ${f(H(C))}`);
  }), y.length > 0 && (e.push("$ POINT OBJECT LOADS"), y.forEach((t) => e.push(t)), e.push("")), e.push("$ ANALYSIS OPTIONS"), e.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), e.push('  PDELTA  METHOD "NONE"  '), e.push(""), e.push("$ MASS SOURCE"), e.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), e.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), e.push(""), e.push("$ LOAD CASES"), e.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), e.push('  LOADCASE "Dead"  LOADPAT  "Dead"  SF 1 '), e.push('  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), e.push('  LOADCASE "Live"  LOADPAT  "Live"  SF 1 '), e.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), e.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), e.push(""), e.push("$ LOAD COMBINATIONS"), e.push('  COMBO "1.4D"  TYPE "Linear Add"  '), e.push('  COMBO "1.4D"  LOADCASE  "Dead"  SF 1.4 '), e.push('  COMBO "1.2D+1.6L"  TYPE "Linear Add"  '), e.push('  COMBO "1.2D+1.6L"  LOADCASE  "Dead"  SF 1.2 '), e.push('  COMBO "1.2D+1.6L"  LOADCASE  "Live"  SF 1.6 '), e.push(""), e.push("  END"), e.push("$ END OF MODEL FILE"), e.join(`\r
`);
}
function mt(d, p) {
  const M = d[p[0]], A = d[p[1]], I = Math.abs(A[2] - M[2]), D = Math.sqrt((A[0] - M[0]) ** 2 + (A[1] - M[1]) ** 2), b = I > D * 0.5;
  return b && D > 0.01 ? "BRACE" : b ? "COLUMN" : "BEAM";
}
export {
  Ft as a,
  xt as b,
  yt as c,
  Pt as e,
  Dt as p
};
