function Qt() {
  const E = document.createElement("div");
  E.id = "modal-results", E.style.cssText = `
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
    let h = false, y = 0, F = 0, z = 0, T = 0;
    E.addEventListener("mousedown", (D) => {
      const U = D.target;
      if (!U.closest("#modal-header") || U.closest("button")) return;
      h = true;
      const P = E.getBoundingClientRect();
      y = D.clientX, F = D.clientY, z = P.left, T = P.top, E.style.bottom = "auto", E.style.right = "auto", E.style.left = `${P.left}px`, E.style.top = `${P.top}px`, D.preventDefault();
    }), document.addEventListener("mousemove", (D) => {
      if (!h) return;
      let U = z + (D.clientX - y), P = T + (D.clientY - F);
      U = Math.max(-E.offsetWidth + 80, Math.min(window.innerWidth - 80, U)), P = Math.max(0, Math.min(window.innerHeight - 30, P)), E.style.left = `${U}px`, E.style.top = `${P}px`;
    }), document.addEventListener("mouseup", () => {
      h = false;
    });
  }
  let f = false;
  const I = 0.9;
  function A(h, y) {
    var _a, _b, _c, _d;
    if (!h.frequencies || h.frequencies.length === 0) {
      const a = ((_a = y.properties) == null ? void 0 : _a.length) ? y.properties.map((r) => `<div>${r}</div>`).join("") : "<div>El solver no devolvi\xF3 modos.</div>";
      E.innerHTML = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:move; user-select:none;" title="Arrastra para mover">
  <b style="color:#ff0">\u2725 \u26A1 MODAL \u2014 ${y.title}</b>
</div>
<div id="modal-body" style="padding:0 12px 10px 12px;">
  <div style="color:#f44; font-weight:bold; font-size:13px; padding:6px 0">\u2717 El an\xE1lisis modal NO se ejecut\xF3</div>
  <div style="color:#fa0; font-size:11px; line-height:1.5">${a}</div>
</div>`;
      return;
    }
    const F = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], z = [0, 0, 0, 0, 0, 0], T = h.frequencies.length;
    let D = -1, U = -1, P = -1, V = 0, q = 0;
    {
      const a = [0, 0, 0, 0, 0, 0];
      for (let r = 0; r < T; r++) {
        const m = ((_b = h.massParticipation) == null ? void 0 : _b[r]) || [0, 0, 0, 0, 0, 0];
        for (let l = 0; l < 6; l++) a[l] += m[l];
        D < 0 && a[0] >= I && (D = r + 1), U < 0 && a[1] >= I && (U = r + 1), P < 0 && a[0] >= I && a[1] >= I && (P = r + 1);
      }
      V = a[0], q = a[1];
    }
    const H = (() => {
      const a = (r) => `${((I - r) * 100).toFixed(1)} %`;
      return P > 0 ? `<span style="color:#0f0">\u2713 Masa participativa \u2265 90 % en X e Y al modo ${P} de ${T} \xB7 \u03A3Ux=${(V * 100).toFixed(1)} % \u03A3Uy=${(q * 100).toFixed(1)} % (NEC-15 \xA76.2.2 / ASCE 7-22 \xA712.9.1.1)</span>` : D > 0 && U < 0 ? `<span style="color:#fa0">\u26A0 FALTAN MODOS EN Y \u2014 \u03A3Uy=${(q * 100).toFixed(1)} % en ${T} modos (faltan ${a(q)} para el 90 % que exige NEC-15 \xA76.2.2). X cumple en el modo ${D}. Sub\xED \xABN\xB0 de modos\xBB en Settings \u25B8 \u26A1 Modal + Animaci\xF3n.</span>` : U > 0 && D < 0 ? `<span style="color:#fa0">\u26A0 FALTAN MODOS EN X \u2014 \u03A3Ux=${(V * 100).toFixed(1)} % en ${T} modos (faltan ${a(V)} para el 90 % que exige NEC-15 \xA76.2.2). Y cumple en el modo ${U}. Sub\xED \xABN\xB0 de modos\xBB en Settings \u25B8 \u26A1 Modal + Animaci\xF3n.</span>` : `<span style="color:#f44">\u2717 FALTAN MODOS EN AMBAS DIRECCIONES \u2014 \u03A3Ux=${(V * 100).toFixed(1)} % \xB7 \u03A3Uy=${(q * 100).toFixed(1)} % en ${T} modos. NEC-15 \xA76.2.2 exige \u2265 90 %: el cortante din\xE1mico sale bajo y el control Vdin/Vest no es representativo. Sub\xED \xABN\xB0 de modos\xBB en Settings \u25B8 \u26A1 Modal + Animaci\xF3n.</span>`;
    })();
    let s = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:move; user-select:none;" title="Arrastra para mover">
  <b style="color:#ff0">\u2725 \u26A1 MODAL ANALYSIS \u2014 ${y.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
    s += '<div id="modal-body" style="padding:0 12px 10px 12px;">', s += `<div style="padding:6px 0; font-weight:bold; font-size:12px; line-height:1.4">${H}</div>`, s += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
    for (const a of F) s += `<th style="padding:2px 5px">${a}</th>`;
    s += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th>
  <th style="padding:2px 5px; color:#fff">Tipo</th></tr>`;
    for (let a = 0; a < 6; a++) z[a] = 0;
    if (h.frequencies.forEach((a, r) => {
      var _a2;
      const m = a > 0 ? 1 / a : 0, l = a * 2 * Math.PI, e = a >= 500, n = ((_a2 = h.massParticipation) == null ? void 0 : _a2[r]) || [0, 0, 0, 0, 0, 0];
      for (let st = 0; st < 6; st++) z[st] += n[st];
      let N = 0, b = n[0];
      for (let st = 1; st < 6; st++) n[st] > b && (b = n[st], N = st);
      const u = e ? "masa faltante (r\xEDgida)" : b < 0.05 ? "\u2014" : `${F[N]} (${(b * 100).toFixed(0)} %)`, G = N === 0 || N === 1 ? "#0f0" : N === 5 ? "#0ff" : N === 2 ? "#fa0" : "#888", B = r + 1 === D, et = r + 1 === U, k = r + 1 === P;
      s += `<tr style="border-bottom:1px solid #fff1; ${e ? "background:rgba(0,180,255,0.12);" : k ? "background:rgba(0,255,0,0.12);" : B || et ? "background:rgba(255,200,0,0.1);" : ""}">
  <td style="padding:2px 6px; text-align:center">${e ? "MF" : r + 1 + (k ? " \u2605" : "")}</td>
  <td style="padding:2px 6px; text-align:right">${e ? "r\xEDgido" : a.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${e ? "\u22480" : m.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${e ? "\u2014" : l.toFixed(2)}</td>`;
      for (let st = 0; st < 6; st++) {
        const ht = (n[st] * 100).toFixed(1), St = n[st] > 0.5 ? "#f00" : n[st] > 0.1 ? "#ff0" : "#0f0";
        s += `<td style="padding:2px 5px; text-align:right; color:${St}">${ht}%</td>`;
      }
      const at = z[0] >= I ? "#0f0" : "#0ff", lt = z[1] >= I ? "#0f0" : "#0ff";
      s += `<td style="padding:2px 5px; text-align:right; color:${at}">${(z[0] * 100).toFixed(1)}%${B ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:${lt}">${(z[1] * 100).toFixed(1)}%${et ? " \u2713" : ""}</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(z[5] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; color:${G}">${u}</td></tr>`;
    }), s += `</table>
<div style="margin-top:6px; font-size:10px; color:#888;">
  \u2605 = primer modo donde \u03A3Ux y \u03A3Uy \u2265 90 %  \xB7  Tipos: <span style="color:#0f0">Ux/Uy</span>=lateral \xB7 <span style="color:#0ff">Rz</span>=torsional \xB7 <span style="color:#fa0">Uz</span>=vertical (no relevante para sismo)
</div>`, s += "</div>", E.innerHTML = s, f) {
      const a = E.querySelector("#modal-body"), r = E.querySelector("#modal-minimize");
      a && (a.style.display = "none"), r && (r.textContent = "\u25A2", r.title = "Restaurar");
    }
    (_c = E.querySelector("#modal-minimize")) == null ? void 0 : _c.addEventListener("click", () => {
      f = !f;
      const a = E.querySelector("#modal-body"), r = E.querySelector("#modal-minimize");
      f ? (a.style.display = "none", r.textContent = "\u25A2", r.title = "Restaurar") : (a.style.display = "block", r.textContent = "\u25AC", r.title = "Minimizar");
    }), (_d = E.querySelector("#modal-copy")) == null ? void 0 : _d.addEventListener("click", () => {
      const a = [];
      a.push(`Modal Analysis \u2014 ${y.title}`), a.push(H.replace(/<[^>]+>/g, ""));
      const r = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${F.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz   Tipo`;
      a.push(r), a.push("-".repeat(r.length));
      const m = [0, 0, 0, 0, 0, 0];
      h.frequencies.forEach((e, n) => {
        var _a2;
        const N = e > 0 ? 1 / e : 0, b = e * 2 * Math.PI, u = ((_a2 = h.massParticipation) == null ? void 0 : _a2[n]) || [0, 0, 0, 0, 0, 0];
        for (let Y = 0; Y < 6; Y++) m[Y] += u[Y];
        let G = 0, B = u[0];
        for (let Y = 1; Y < 6; Y++) u[Y] > B && (B = u[Y], G = Y);
        const et = B < 0.05 ? "\u2014" : `${F[G]} (${(B * 100).toFixed(0)}%)`, k = u.map((Y) => ((Y * 100).toFixed(1) + "%").padStart(6)).join(" ");
        a.push(`${String(n + 1).padStart(4)}  ${e.toFixed(4).padStart(9)}  ${N.toFixed(4).padStart(9)}  ${b.toFixed(2).padStart(9)}  ${k}  ${(m[0] * 100).toFixed(1).padStart(5)}%  ${(m[1] * 100).toFixed(1).padStart(5)}%  ${(m[5] * 100).toFixed(1).padStart(5)}%  ${et}`);
      }), navigator.clipboard.writeText(a.join(`
`));
      const l = E.querySelector("#modal-copy");
      l.textContent = "\u2713", setTimeout(() => l.textContent = "\u{1F4CB}", 1500);
    });
  }
  return { div: E, render: A };
}
function te(E) {
  var _a;
  const f = E.split(/\r?\n/), I = { force: "TONF", length: "M" }, A = [], h = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), z = [], T = [], D = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), P = [], V = [];
  let q = "", H = "";
  const s = /* @__PURE__ */ new Map();
  for (const M of f) {
    const R = M.trim();
    if (!R || R.startsWith("$")) {
      R.startsWith("$ ") && (H = R.substring(2).trim());
      continue;
    }
    if (H && (s.has(H) || s.set(H, []), s.get(H).push(M)), H === "CONTROLS") {
      const c = R.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
      c && (I.force = c[1], I.length = c[2]);
      const C = R.match(/TITLE2\s+"([^"]+)"/);
      C && (q = C[1]);
    }
    if (H === "STORIES - IN SEQUENCE FROM TOP") {
      const c = R.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
      if (c) {
        const C = c[1], i = c[2] ? parseFloat(c[2]) : 0, S = c[3] ? parseFloat(c[3]) : void 0;
        A.push({ name: C, height: i, elev: S ?? 0 });
      }
    }
    if (H === "MATERIAL PROPERTIES") {
      const c = R.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
      if (c) {
        const C = c[1];
        h.has(C) || h.set(C, { type: c[2] || "", E: 0, G: 0, nu: 0 });
        const i = h.get(C);
        c[2] && (i.type = c[2]);
        const S = R.match(/\bE\s+([\d.eE+-]+)/);
        S && (i.E = parseFloat(S[1]));
        const L = R.match(/\bU\s+([\d.eE+-]+)/);
        L && (i.nu = parseFloat(L[1]), i.G = i.E / (2 * (1 + i.nu)));
        const O = R.match(/\bFY\s+([\d.eE+-]+)/);
        O && (i.fy = parseFloat(O[1]));
        const J = R.match(/\bFC\s+([\d.eE+-]+)/);
        J && (i.fc = parseFloat(J[1]));
        const Z = R.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
        Z && (i.density = parseFloat(Z[1]));
      }
    }
    if (H === "FRAME SECTIONS") {
      const c = R.match(/FRAMESECTION\s+"([^"]+)"/);
      if (c) {
        const C = c[1];
        y.has(C) || y.set(C, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
        const i = y.get(C), S = R.match(/MATERIAL\s+"([^"]+)"/);
        S && (i.material = S[1]);
        const L = R.match(/SHAPE\s+"([^"]+)"/);
        L && (i.shape = L[1]);
        const O = R.match(/\bD\s+([\d.eE+-]+)/);
        O && (i.D = parseFloat(O[1]));
        const J = R.match(/\bB\s+([\d.eE+-]+)/);
        J && (i.B = parseFloat(J[1]));
        const Z = R.match(/\bTF\s+([\d.eE+-]+)/);
        Z && (i.TF = parseFloat(Z[1]));
        const _ = R.match(/\bTW\s+([\d.eE+-]+)/);
        _ && (i.TW = parseFloat(_[1]));
        const X = R.match(/\bR\s+([\d.eE+-]+)/);
        X && (i.R = parseFloat(X[1]));
        const ot = R.match(/FILLMATERIAL\s+"([^"]+)"/);
        ot && (i.fillMaterial = ot[1]);
        const nt = R.match(/I2MOD\s+([\d.eE+-]+)/);
        nt && (i.modI2 = parseFloat(nt[1]));
        const it = R.match(/I3MOD\s+([\d.eE+-]+)/);
        it && (i.modI3 = parseFloat(it[1]));
      }
    }
    if (H === "POINT COORDINATES") {
      const c = R.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
      c && F.set(c[1], [parseFloat(c[2]), parseFloat(c[3])]);
    }
    if (H === "LINE CONNECTIVITIES") {
      const c = R.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
      c && z.push({ name: c[1], type: c[2], pt1: c[3], pt2: c[4], nStories: parseInt(c[5]) });
    }
    if (H === "POINT ASSIGNS") {
      const c = R.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
      c && D.set(`${c[1]}@${c[2]}`, c[3].split(/\s+/));
    }
    if (H === "LINE ASSIGNS") {
      const c = R.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
      if (c) {
        const C = { story: c[2], section: c[3], rigidZone: 0, releases: [], angle: 0 }, i = R.match(/RIGIDZONE\s+([\d.eE+-]+)/);
        i && (C.rigidZone = parseFloat(i[1]));
        const S = R.match(/RELEASE\s+"([^"]+)"/);
        S && (C.releases = S[1].split(/\s+/));
        const L = R.match(/ANG\s+([-\d.eE+]+)/);
        L && (C.angle = parseFloat(L[1])), U.set(`${c[1]}@${c[2]}`, C);
      }
    }
    if (H === "GRIDS") {
      const c = R.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
      c && V.push({ label: c[1], dir: c[2], coord: parseFloat(c[3]) });
    }
    if (H === "FRAME OBJECT LOADS") {
      const c = R.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      c && P.push({ line: c[1], story: c[2], type: c[3], dir: c[4], lc: c[5], val: parseFloat(c[6]) });
    }
    if (H === "AREA CONNECTIVITIES") {
      const c = R.match(/AREA\s+"([^"]+)"\s+(?:([A-Za-z]\w*)\s+)?\d+\s+(.+)/);
      if (c) {
        const C = ((_a = c[3].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((i) => i.replace(/"/g, ""))) || [];
        T.push({ name: c[1], pts: C, nStories: 0 });
      }
    }
  }
  const a = /* @__PURE__ */ new Map();
  if (A.length > 0) {
    const M = A.length - 1;
    a.set(A[M].name, A[M].elev);
    for (let R = M - 1; R >= 0; R--) {
      const C = a.get(A[R + 1].name) + A[R].height;
      A[R].elev = C, a.set(A[R].name, C);
    }
  }
  const r = [], m = [], l = /* @__PURE__ */ new Map(), e = (M, R) => `${M}@${R}`, n = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Map();
  for (const M of z) N.set(M.name, M);
  for (const M of z) for (const [R, c] of U) {
    if (!R.startsWith(M.name + "@")) continue;
    const C = c.story, i = A.findIndex((S) => S.name === C);
    if (!(i < 0)) if (M.type === "COLUMN" || M.type === "BRACE") {
      n.add(e(M.pt2, C));
      const S = Math.max(M.nStories, 1), L = Math.min(i + S, A.length - 1);
      n.add(e(M.pt1, A[L].name));
    } else n.add(e(M.pt1, C)), n.add(e(M.pt2, C));
  }
  for (const [M] of D) n.add(M);
  for (const M of n) {
    const [R, c] = M.split("@"), C = F.get(R), i = a.get(c);
    C === void 0 || i === void 0 || (r.push([C[0], C[1], i]), m.push(M), l.set(M, r.length - 1));
  }
  const b = [], u = [], G = [], B = [], et = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map();
  for (const M of z) for (const [R, c] of U) {
    if (!R.startsWith(M.name + "@")) continue;
    const C = c.story, i = A.findIndex((_) => _.name === C);
    if (i < 0) continue;
    let S, L;
    if (M.type === "COLUMN" || M.type === "BRACE") {
      const _ = Math.max(M.nStories, 1), X = Math.min(i + _, A.length - 1);
      S = e(M.pt1, A[X].name), L = e(M.pt2, C);
    } else S = e(M.pt1, C), L = e(M.pt2, C);
    const O = l.get(S), J = l.get(L);
    if (O === void 0 || J === void 0 || O === J) continue;
    const Z = b.length;
    if (b.push([O, J]), u.push(M.name), G.push(M.type), B.push(C), et.set(Z, c.section), c.rigidZone > 0 && k.set(Z, [c.rigidZone, c.rigidZone]), c.releases.length > 0) {
      const _ = new Array(12).fill(false), X = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const ot of c.releases) {
        const nt = X[ot];
        nt !== void 0 && (_[nt] = true);
      }
      Y.set(Z, _);
    }
  }
  const at = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map(), Ot = /* @__PURE__ */ new Map(), Rt = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map();
  for (const [M, R] of et) {
    const c = y.get(R);
    if (!c) continue;
    const C = h.get(c.material);
    C && (at.set(M, C.E), lt.set(M, C.G));
    const i = c.D, S = c.B, L = c.TF, O = c.TW;
    let J = 0, Z = 0, _ = 0, X = 0, ot = 0, nt = 0, it = "rect";
    switch (c.shape) {
      case "Concrete Rectangular":
        J = i * S, Z = S * i ** 3 / 12, _ = i * S ** 3 / 12, X = S * i ** 3 * (1 / 3 - 0.21 * (i / S) * (1 - i ** 4 / (12 * S ** 4))), ot = nt = 5 / 6 * J, it = "rect";
        break;
      case "Concrete Circle":
        J = Math.PI * i ** 2 / 4, Z = _ = Math.PI * i ** 4 / 64, X = Math.PI * i ** 4 / 32, ot = nt = 0.9 * J, it = "circ";
        break;
      case "Steel I/Wide Flange":
        J = 2 * S * L + (i - 2 * L) * O, Z = (S * i ** 3 - (S - O) * (i - 2 * L) ** 3) / 12, _ = (2 * L * S ** 3 + (i - 2 * L) * O ** 3) / 12, X = (2 * S * L ** 3 + (i - 2 * L) * O ** 3) / 3, ot = (i - 2 * L) * O, nt = 2 * S * L * 5 / 6, it = "I";
        break;
      case "Steel Tube":
        J = i * S - (i - 2 * O) * (S - 2 * O), Z = (S * i ** 3 - (S - 2 * O) * (i - 2 * O) ** 3) / 12, _ = (i * S ** 3 - (i - 2 * O) * (S - 2 * O) ** 3) / 12, X = 2 * O * (i - O) * (S - O) * ((i - O) * (S - O)) / (i - O + (S - O)), ot = 2 * i * O, nt = 2 * S * O, it = "HSS";
        break;
      case "Filled Steel Tube":
        J = i * S, Z = S * i ** 3 / 12, _ = i * S ** 3 / 12, X = 2 * O * (i - O) * (S - O) * ((i - O) * (S - O)) / (i - O + (S - O)), ot = 2 * i * O + 5 / 6 * (i - 2 * O) * (S - 2 * O), nt = 2 * S * O + 5 / 6 * (i - 2 * O) * (S - 2 * O), it = "CFT";
        break;
      case "Steel Angle": {
        const ct = L || O;
        J = ct * (i + S - ct), Z = ct * (i ** 3 + S * ct ** 2 + ct ** 2 * (i - ct)) / 12, _ = ct * (S ** 3 + i * ct ** 2 + ct ** 2 * (S - ct)) / 12, X = (i + S - ct) * ct ** 3 / 3, ot = i * ct, nt = S * ct, it = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        J = 2 * S * L + (i - 2 * L) * O, Z = (O * i ** 3 + 2 * S * L * (i - L) ** 2) / 12, _ = (2 * L * S ** 3 + (i - 2 * L) * O ** 3) / 12, X = (2 * S * L ** 3 + (i - 2 * L) * O ** 3) / 3, ot = (i - 2 * L) * O, nt = 2 * S * L * 5 / 6, it = c.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        J = 2 * (2 * S * L + (i - 2 * L) * O), Z = 2 * (O * i ** 3 + 2 * S * L * (i - L) ** 2) / 12, _ = 2 * (2 * L * S ** 3 + (i - 2 * L) * O ** 3) / 12, X = 2 * (2 * S * L ** 3 + (i - 2 * L) * O ** 3) / 3, ot = 2 * (i - 2 * L) * O, nt = 4 * S * L * 5 / 6, it = "2C";
        break;
      default:
        i > 0 && S > 0 && (J = i * S, Z = S * i ** 3 / 12, _ = i * S ** 3 / 12, X = Math.min(i, S) * Math.max(i, S) ** 3 / 3 * 0.3, ot = nt = 5 / 6 * J);
        break;
    }
    c.modI2 && (_ *= c.modI2), c.modI3 && (Z *= c.modI3), st.set(M, J), Ot.set(M, Z), Rt.set(M, _), Ct.set(M, X), ot > 0 && ht.set(M, ot), nt > 0 && St.set(M, nt), gt.set(M, { type: it, b: S || void 0, h: i || void 0, d: it === "circ" || it === "pipe" ? i : void 0, tw: O || void 0, tf: L || void 0, r: c.R, name: R });
  }
  const mt = /* @__PURE__ */ new Map();
  for (const [M, R] of D) {
    const c = l.get(M);
    if (c === void 0) continue;
    const C = [false, false, false, false, false, false];
    for (const i of R) i === "UX" && (C[0] = true), i === "UY" && (C[1] = true), i === "UZ" && (C[2] = true), i === "RX" && (C[3] = true), i === "RY" && (C[4] = true), i === "RZ" && (C[5] = true);
    mt.set(c, C);
  }
  const Tt = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map();
  for (let M = 0; M < u.length; M++) It.set(`${u[M]}@${B[M]}`, M);
  for (const M of P) {
    const R = It.get(`${M.line}@${M.story}`);
    if (R === void 0) continue;
    const [c, C] = b[R], i = r[c], S = r[C], L = Math.sqrt((S[0] - i[0]) ** 2 + (S[1] - i[1]) ** 2 + (S[2] - i[2]) ** 2);
    if (L < 1e-10) continue;
    const O = M.val * L / 2;
    let J = 0, Z = 0, _ = 0;
    M.dir === "GRAV" || M.dir === "GRAVITY" ? _ = -O : M.dir === "X" ? J = O : M.dir === "Y" ? Z = O : M.dir === "Z" && (_ = -O);
    for (const X of [c, C]) {
      const ot = Tt.get(X) || [0, 0, 0, 0, 0, 0];
      ot[0] += J, ot[1] += Z, ot[2] += _, Tt.set(X, ot);
    }
  }
  const Et = /* @__PURE__ */ new Map();
  for (const [M, R] of et) {
    const c = y.get(R);
    if (!c) continue;
    const C = h.get(c.material);
    (C == null ? void 0 : C.density) && Et.set(M, C.density);
  }
  return { units: I, stories: A.reverse(), materials: h, frameSections: y, nodes: r, nodeNames: m, nodeNameToIdx: l, elements: b, elementNames: u, elementTypes: G, elementStories: B, elementSections: et, nodeInputs: { supports: mt, loads: Tt }, elementInputs: { elasticities: at, shearModuli: lt, areas: st, momentsOfInertiaZ: Ot, momentsOfInertiaY: Rt, torsionalConstants: Ct, shearAreasY: ht, shearAreasZ: St, rigidOffsets: k, momentReleases: Y, densities: Et, sectionShapes: gt }, sectionShapes: gt, grids: V, info: { nNodes: r.length, nFrames: b.length, nAreas: T.length, title: q }, rawSections: s };
}
function v(E) {
  return E && parseFloat(E) || 0;
}
function Gt(E) {
  const f = /* @__PURE__ */ new Map(), I = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let A;
  for (; (A = I.exec(E)) !== null; ) f.set(A[1], A[2] !== void 0 ? A[2] : A[3]);
  return f;
}
function ee(E) {
  const f = E.split(/\r?\n/);
  return f.some((A) => A.trim().startsWith("TABLE:")) ? Jt(f) : Wt(f);
}
function Jt(E) {
  var _a, _b, _c, _d, _e, _f;
  const f = [];
  let I = "";
  for (const a of E) {
    const r = a.trimEnd();
    r.endsWith("_") ? I += r.slice(0, -1) + " " : (I += r, f.push(I), I = "");
  }
  I && f.push(I);
  const A = { force: "KN", length: "m" };
  let h = "UX,UY,UZ,RX,RY,RZ";
  const y = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), D = [], U = [], P = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), H = [];
  let s = "";
  for (const a of f) {
    const r = a.trim();
    if (!r || r.startsWith(";") || r.startsWith("File ")) continue;
    if (r.startsWith("TABLE:")) {
      const l = r.match(/TABLE:\s+"(.+?)"/);
      s = l ? l[1].toUpperCase() : "";
      continue;
    }
    if (r === "END TABLE DATA") {
      s = "";
      continue;
    }
    const m = Gt(r);
    switch (s) {
      case "PROGRAM CONTROL": {
        const l = m.get("CurrUnits");
        if (l) {
          const e = l.split(",").map((n) => n.trim());
          e[0] && (A.force = e[0]), e[1] && (A.length = e[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const l = m.get("Material");
        l && !y.has(l) && y.set(l, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const l = m.get("Material");
        if (l) {
          const e = y.get(l) || { E: 0, nu: 0, G: 0 };
          e.E = v(m.get("E1")), e.G = v(m.get("G12")), e.nu = v(m.get("U12")), e.density = v(m.get("UnitMass")), y.set(l, e);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const l = m.get("Material");
        l && y.has(l) && (y.get(l).fy = v(m.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const l = m.get("SectionName");
        l && F.set(l, { material: m.get("Material") || "", shape: m.get("Shape") || "Rectangular", D: v(m.get("t3")), B: v(m.get("t2")), TF: v(m.get("tf")), TW: v(m.get("tw")), A: v(m.get("Area")), Iz: v(m.get("I33")), Iy: v(m.get("I22")), J: v(m.get("TorsConst")) });
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
          const e = v(m.get("XorR")), n = v(m.get("Y")), N = v(m.get("Z"));
          T.set(l, [e, n, N]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const l = m.get("Frame"), e = m.get("JointI"), n = m.get("JointJ");
        l && e && n && D.push({ name: l, j1: e, j2: n });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const l = m.get("Area");
        if (l) {
          const e = parseInt(m.get("NumJoints") || "4"), n = [];
          for (let N = 1; N <= e; N++) {
            const b = m.get(`Joint${N}`);
            b && n.push(b);
          }
          n.length >= 3 && U.push({ name: l, joints: n });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const l = m.get("Joint");
        if (l) {
          const e = [((_a = m.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = m.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = m.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = m.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = m.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = m.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          P.set(l, e);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const l = m.get("Frame"), e = m.get("AnalSect");
        l && e && V.set(l, e);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const l = m.get("Area"), e = m.get("Section");
        l && e && q.set(l, e);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const l = m.get("Joint");
        l && H.push({ joint: l, fx: v(m.get("F1")), fy: v(m.get("F2")), fz: v(m.get("F3")), mx: v(m.get("M1")), my: v(m.get("M2")), mz: v(m.get("M3")) });
        break;
      }
    }
  }
  return vt(A, h, y, F, z, T, D, U, P, V, q, H);
}
function Wt(E) {
  const f = { force: "KN", length: "m" };
  let I = "UX,UY,UZ,RX,RY,RZ";
  const A = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), z = [], T = [], D = /* @__PURE__ */ new Map(), U = [];
  let P = "", V = "";
  for (const s of E) {
    const a = s.trim();
    if (!a || a.startsWith(";")) continue;
    if (!s.startsWith(" ") && !s.startsWith("	")) {
      const l = a.toUpperCase();
      if (l === "END") break;
      l.startsWith("SHELL SECTION") ? P = "SHELL SECTION" : l.startsWith("FRAME SECTION") ? P = "FRAME SECTION" : P = l.split(/\s+/)[0];
      continue;
    }
    const r = Gt(a), m = a.split(/\s+/);
    switch (P) {
      case "SYSTEM": {
        const l = r.get("DOF");
        l && (I = l);
        const e = r.get("LENGTH");
        e && (f.length = e);
        const n = r.get("FORCE");
        n && (f.force = n);
        break;
      }
      case "JOINT": {
        const l = m[0];
        F.set(l, [v(r.get("X")), v(r.get("Y")), v(r.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const l = r.get("ADD"), e = r.get("DOF");
        if (l && e) {
          const n = e.split(","), N = [false, false, false, false, false, false];
          for (const b of n) {
            const u = b.toUpperCase();
            (u === "UX" || u === "U1") && (N[0] = true), (u === "UY" || u === "U2") && (N[1] = true), (u === "UZ" || u === "U3") && (N[2] = true), (u === "RX" || u === "R1") && (N[3] = true), (u === "RY" || u === "R2") && (N[4] = true), (u === "RZ" || u === "R3") && (N[5] = true);
          }
          D.set(l, N);
        }
        break;
      }
      case "MATERIAL": {
        const l = r.get("NAME");
        if (l) V = l, A.set(l, { E: 0, nu: 0, G: 0 });
        else if (V) {
          const e = A.get(V), n = r.get("E");
          n && (e.E = v(n));
          const N = r.get("U");
          N && (e.nu = v(N)), e.G = e.E / (2 * (1 + e.nu));
          const b = r.get("M");
          b && (e.density = v(b));
        }
        break;
      }
      case "SHELL": {
        const l = m[0], e = r.get("J");
        r.get("SEC"), e && T.push({ name: l, joints: e.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const l = r.get("NAME");
        l && y.set(l, { material: r.get("MAT") || "", type: r.get("TYPE") || "Shell", thickness: v(r.get("TH")) });
        break;
      }
      case "FRAME": {
        const l = m[0], e = r.get("J");
        if (e) {
          const n = e.split(",");
          n.length >= 2 && z.push({ name: l, j1: n[0], j2: n[1] });
        }
        break;
      }
      case "LOAD": {
        const l = r.get("ADD");
        l && U.push({ joint: l, fx: v(r.get("UX")), fy: v(r.get("UY")), fz: v(r.get("UZ")), mx: v(r.get("MX")), my: v(r.get("MY")), mz: v(r.get("MZ")) });
        break;
      }
    }
  }
  return vt(f, I, A, h, y, F, z, T, D, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), U);
}
function vt(E, f, I, A, h, y, F, z, T, D, U, P) {
  var _a;
  const V = [], q = /* @__PURE__ */ new Map(), H = [];
  for (const [u, G] of y) q.set(u, H.length), V.push(u), H.push(G);
  const s = [], a = [], r = /* @__PURE__ */ new Map();
  for (const u of F) {
    const G = q.get(u.j1), B = q.get(u.j2);
    if (G !== void 0 && B !== void 0) {
      const et = s.length;
      s.push([G, B]), a.push(u.name);
      const k = D.get(u.name);
      k && r.set(et, k);
    }
  }
  const m = s.length;
  for (const u of z) {
    const G = u.joints.map((B) => q.get(B)).filter((B) => B !== void 0);
    if (G.length >= 3) {
      const B = s.length;
      s.push(G), a.push(u.name);
      const et = U.get(u.name);
      et && r.set(B, et);
    }
  }
  const l = s.length - m, e = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, n = /* @__PURE__ */ new Map(), N = I.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let u = 0; u < s.length; u++) {
    const G = r.get(u), B = G ? A.get(G) : null, et = G ? h.get(G) : null;
    if (B || s[u].length === 2) {
      const k = B || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, Y = I.get(k.material) || N, at = Y.E || N.E, lt = Y.nu || 0.3, st = Y.G || at / (2 * (1 + lt));
      e.elasticities.set(u, at), e.shearModuli.set(u, st), e.areas.set(u, k.A || k.D * k.B), e.momentsOfInertiaZ.set(u, k.Iz || k.B * k.D ** 3 / 12), e.momentsOfInertiaY.set(u, k.Iy || k.D * k.B ** 3 / 12), e.torsionalConstants.set(u, k.J || 0), e.densities.set(u, Y.density || 0), ((_a = k.shape) == null ? void 0 : _a.includes("Wide Flange")) || k.shape === "I" ? n.set(u, { type: "I", b: k.B, h: k.D, name: G || "I-section" }) : n.set(u, { type: "rect", b: k.B, h: k.D });
    } else if (et) {
      const k = I.get(et.material) || N, Y = k.E || N.E, at = k.nu || 0.2, lt = k.G || Y / (2 * (1 + at));
      e.elasticities.set(u, Y), e.shearModuli.set(u, lt), e.thicknesses.set(u, et.thickness), e.poissonsRatios.set(u, at), e.densities.set(u, k.density || 0);
    }
  }
  const b = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [u, G] of T) {
    const B = q.get(u);
    B !== void 0 && b.supports.set(B, G);
  }
  for (const u of P) {
    const G = q.get(u.joint);
    if (G !== void 0) {
      const B = b.forces.get(G) || [0, 0, 0, 0, 0, 0];
      B[0] += u.fx, B[1] += u.fy, B[2] += u.fz, B[3] += u.mx, B[4] += u.my, B[5] += u.mz, b.forces.set(G, B);
    }
  }
  return { units: E, dof: f, materials: I, frameSections: A, shellSections: h, nodes: H, nodeNames: V, nodeNameToIdx: q, elements: s, elementNames: a, elementSections: r, nodeInputs: b, elementInputs: e, sectionShapes: n, info: { nNodes: H.length, nFrames: m, nShells: l, title: `SAP2000 (${m} frames, ${l} shells)` } };
}
function se(E) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: f, elements: I, nodeInputs: A, elementInputs: h } = E, y = E.units || { force: "KN", length: "m" }, F = E.title || "Awatif Model", z = [], T = (e) => z.push(e), D = () => z.push(" ");
  T(`File ${F}.$2k was saved on m/d/yy at h:mm:ss`), D(), T('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), T("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), D();
  const U = [], P = [];
  if (I.forEach((e, n) => {
    e.length === 2 ? U.push(n) : P.push(n);
  }), U.length > 0) {
    T('TABLE:  "CONNECTIVITY - FRAME"');
    for (const e of U) {
      const n = I[e];
      T(`   Frame=${e + 1}   JointI=${n[0] + 1}   JointJ=${n[1] + 1}   IsCurved=No`);
    }
    D();
  }
  if (P.length > 0) {
    T('TABLE:  "CONNECTIVITY - AREA"');
    for (const e of P) {
      const n = I[e], N = n.map((b, u) => `Joint${u + 1}=${b + 1}`).join("   ");
      T(`   Area=${e + 1}   NumJoints=${n.length}   ${N}`);
    }
    D();
  }
  T('TABLE:  "COORDINATE SYSTEMS"'), T("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), D(), T('TABLE:  "DATABASE FORMAT TYPES"'), T("   UnitsCurr=Yes   OverrideE=No"), D();
  const V = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map();
  for (const e of U) {
    const n = ((_a = h.areas) == null ? void 0 : _a.get(e)) || 0, N = ((_b = h.momentsOfInertiaZ) == null ? void 0 : _b.get(e)) || 0, b = ((_c = h.momentsOfInertiaY) == null ? void 0 : _c.get(e)) || 0, u = ((_d = h.torsionalConstants) == null ? void 0 : _d.get(e)) || 0, G = ((_e = h.elasticities) == null ? void 0 : _e.get(e)) || 0, B = `MAT_${Math.round(G)}`, et = `A${n.toPrecision(6)}_Iz${N.toPrecision(6)}`;
    if (!V.has(et)) {
      let Y = 0.3, at = 0.3;
      n > 0 && N > 0 && (Y = Math.sqrt(12 * N / n), at = n / Y), V.set(et, { A: n, Iz: N, Iy: b, J: u, b: at, h: Y, matKey: B });
    }
    const k = [...V.keys()].indexOf(et) + 1;
    q.set(e, `SEC${k}`);
  }
  if (U.length > 0) {
    T('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const e of U) {
      const n = q.get(e) || "SEC1";
      T(`   Frame=${e + 1}   AutoSelect=N.A.   AnalSect=${n}   MatProp=Default`);
    }
    D();
  }
  if (V.size > 0) {
    T('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let e = 0;
    for (const [, n] of V) {
      e++;
      const N = n.A * 5 / 6;
      T(`   SectionName=SEC${e}   Material=${n.matKey}   Shape=Rectangular   t3=${j(n.h)}   t2=${j(n.b)}   Area=${j(n.A)}   TorsConst=${j(n.J)}   I33=${j(n.Iz)}   I22=${j(n.Iy)}   I23=0   AS2=${j(N)}   AS3=${j(N)} _`), T("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    D();
  }
  const H = !!E.layeredSection && P.length > 0, s = E.layeredSection, a = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  if (!H) for (const e of P) {
    const n = ((_f = h.thicknesses) == null ? void 0 : _f.get(e)) || 0.1, N = ((_g = h.elasticities) == null ? void 0 : _g.get(e)) || 0, b = `MAT_${Math.round(N)}`, u = `t${n.toPrecision(6)}`;
    a.has(u) || a.set(u, { t: n, matKey: b });
    const G = [...a.keys()].indexOf(u) + 1;
    r.set(e, `SSEC${G}`);
  }
  if (P.length > 0) {
    T('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const e of P) {
      const n = H ? s.name : r.get(e) || "SSEC1";
      T(`   Area=${e + 1}   Section=${n}   MatProp=Default`);
    }
    if (D(), T('TABLE:  "AREA SECTION PROPERTIES"'), H) {
      const e = s, n = ((_h = e.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      T(`   Section=${e.name}   Material=${n}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${j(e.totalThickness)}   BendThick=${j(e.totalThickness)}   Color=Magenta`);
    } else {
      let e = 0;
      for (const [, n] of a) e++, T(`   Section=SSEC${e}   Material=${n.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${j(n.t)}   BendThick=${j(n.t)}   Color=Cyan`);
    }
    if (D(), H) {
      T('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const e = s;
      for (const n of e.layers) {
        const N = n.angle ?? 0, b = n.numIntPts ?? 3;
        T(`   Section=${e.name}   LayerName=${n.name}   Distance=${j(n.distance)}   Thickness=${j(n.thickness)}   Type=Shell   NumIntPts=${b}   Material=${n.material}   MatAngle=${j(N * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      D();
    }
  }
  T('TABLE:  "JOINT COORDINATES"');
  for (let e = 0; e < f.length; e++) {
    const n = f[e];
    T(`   Joint=${e + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${j(n[0])}   Y=${j(n[1])}   Z=${j(n[2])}   SpecialJt=No`);
  }
  if (D(), A.supports && A.supports.size > 0) {
    T('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [e, n] of A.supports) {
      if (!n.some((b) => b)) continue;
      const N = (b) => b ? "Yes" : "No";
      T(`   Joint=${e + 1}   U1=${N(n[0])}   U2=${N(n[1])}   U3=${N(n[2])}   R1=${N(n[3])}   R2=${N(n[4])}   R3=${N(n[5])}`);
    }
    D();
  }
  const m = E.selfWtMult ?? 1;
  if (T('TABLE:  "LOAD PATTERN DEFINITIONS"'), T(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${m}`), D(), T('TABLE:  "LOAD CASE DEFINITIONS"'), T('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), D(), T('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), T('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), D(), A.forces && A.forces.size > 0) {
    T('TABLE:  "JOINT LOADS - FORCE"');
    for (const [e, n] of A.forces) n.some((N) => Math.abs(N) > 1e-12) && T(`   Joint=${e + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${j(n[0])}   F2=${j(n[1])}   F3=${j(n[2])}   M1=${j(n[3])}   M2=${j(n[4])}   M3=${j(n[5])}`);
    D();
  }
  const l = /* @__PURE__ */ new Map();
  for (let e = 0; e < I.length; e++) {
    const n = ((_i = h.elasticities) == null ? void 0 : _i.get(e)) || 0, N = ((_j = h.shearModuli) == null ? void 0 : _j.get(e)) || 0, b = n > 0 && N > 0 ? Math.max(0, Math.min(0.5, n / (2 * N) - 1)) : 0.2, u = ((_k = h.densities) == null ? void 0 : _k.get(e)) || 0, G = `MAT_${Math.round(n)}`;
    l.has(G) || l.set(G, { E: n, nu: b, G: N, rho: u });
  }
  T('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [e] of l) T(`   Material=${e}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  D(), T('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [e, n] of l) T(`   Material=${e}   UnitWeight=${j(n.rho * 9.81)}   UnitMass=${j(n.rho)}   E1=${j(n.E)}   G12=${j(n.G)}   U12=${j(n.nu)}   A1=9.9E-06`);
  D(), T('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [e] of l) T(`   Material=${e}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return D(), T('TABLE:  "PROGRAM CONTROL"'), T(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${y.force}, ${y.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), D(), T("END TABLE DATA"), T(""), z.join(`\r
`);
}
function j(E) {
  return E === 0 || Math.abs(E) < 1e-15 ? "0" : Math.abs(E) >= 1e6 || Math.abs(E) < 1e-3 && Math.abs(E) > 0 ? E.toExponential(8) : parseFloat(E.toPrecision(10)).toString();
}
function Zt(E, f, I = 0.05) {
  const A = f.map(([h, y]) => `${(+h).toFixed(4)} ${(+y).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${E}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${I}  SPECTYPE "USER"  `, `  FUNCTION "${E}"  TIMEVAL "${A}"  `];
}
function Xt(E) {
  const { name: f, func: I, modalCase: A = "Modal", sfX: h = 9.81, sfY: y = 9.81 } = E, F = [`  LOADCASE "${f}"  TYPE  "Response Spectrum"  MODALCASE  "${A}"  `];
  return h && F.push(`  LOADCASE "${f}"  ACCEL  "U1"  FUNC  "${I}"  SF  ${h}  `), y && F.push(`  LOADCASE "${f}"  ACCEL  "U2"  FUNC  "${I}"  SF  ${y}  `), F;
}
function Ut(E) {
  const { name: f = "Modal", ritz: I = false, nModes: A = 12 } = E;
  return I ? [`  LOADCASE "${f}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${f}"  MAXMODES  ${A} MINMODES  1 `, `  LOADCASE "${f}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${f}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${f}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${f}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${f}"  MAXMODES  ${A} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function oe(E) {
  var _a;
  const f = (_a = E.e2kModel) == null ? void 0 : _a.rawSections;
  let I = f && f.size > 0 ? _t(f, E.e2kModel) : Vt(E);
  return E.seismicNEC && (I = jt(I, E.seismicNEC)), I;
}
function jt(E, f) {
  const I = E.includes(`\r
`) ? `\r
` : `
`, A = E.split(/\r?\n/), h = f.name ?? "NEC", y = Zt(h, f.points, f.dampRatio ?? 0.05), F = f.modalCase ?? "Modal", z = Xt({ name: f.caseName ?? "Sismo NEC", func: h, modalCase: F, sfX: f.sfX, sfY: f.sfY });
  let T = [];
  const D = (U) => A.some((P) => U.test(P));
  if (f.modal) {
    const U = new RegExp(`^\\s*LOADCASE\\s+"${F}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let P = A.length - 1; P >= 0; P--) U.test(A[P]) && A.splice(P, 1);
    T = Ut({ name: F, ritz: !!f.modal.ritz, nModes: f.modal.nModes });
  } else D(new RegExp(`LOADCASE\\s+"${F}"\\s+TYPE\\s+"Modal`)) || (T = Ut({ name: F }));
  return Bt(A, "FUNCTIONS", y), Bt(A, "LOAD CASES", [...T, ...z]), A.join(I);
}
function Bt(E, f, I) {
  const A = E.findIndex((F) => F.trim() === `$ ${f}`);
  if (A >= 0) {
    E.splice(A + 1, 0, ...I);
    return;
  }
  const h = E.findIndex((F) => F.trim() === "END"), y = h >= 0 ? h : E.length;
  E.splice(y, 0, `$ ${f}`, ...I, "");
}
function _t(E, f) {
  const I = [], A = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  I.push("$ File exported from Hekatan Struct Lineal (round-trip)"), I.push("");
  for (const h of A) {
    const y = E.get(h);
    if (!(!y || y.length === 0)) {
      I.push(`$ ${h}`);
      for (const F of y) I.push(F);
      I.push("");
    }
  }
  for (const [h, y] of E) if (!A.includes(h) && y.length !== 0) {
    I.push(`$ ${h}`);
    for (const F of y) I.push(F);
    I.push("");
  }
  return I.push("  END"), I.push("$ END OF MODEL FILE"), I.join(`\r
`);
}
function Vt(E) {
  var _a, _b, _c, _d, _e, _f, _g;
  const { nodes: f, elements: I, nodeInputs: A, elementInputs: h, title: y, units: F } = E, z = E.shellLoads ?? h.shellSurfaceLoads;
  let T;
  z instanceof Map && (T = /* @__PURE__ */ new Map(), z.forEach((t, o) => {
    T.set(o, typeof t == "number" ? { value: t } : t);
  }));
  const D = E.shellAngles ?? h.shellAngles, U = h.cargaDeArea, P = !!(T && T.size > 0), V = (t, o) => [o[0], o[1], o[2] - (P ? (U == null ? void 0 : U.get(t)) ?? 0 : 0)], q = (F == null ? void 0 : F.force) || "Tonf", H = (F == null ? void 0 : F.length) || "m", s = [], a = (t) => Math.round(t * 1e4) / 1e4, r = (t) => !isFinite(t) || t === 0 ? "0" : Number(t.toPrecision(10)).toString(), m = (() => {
    const t = (q || "Tonf").toLowerCase();
    return t === "tonf" || t === "tonf-f" ? 1 / 9.80665 : t === "kn" || t === "kn-f" ? 1 : t === "kgf" || t === "kg" ? 1 / 980665e-8 : t === "kip" || t === "kips" ? 1 / 4.44822 : 1;
  })(), l = (t) => t * m, e = (t) => t * m, n = (t) => t * m, N = /* @__PURE__ */ new Date(), b = `${N.getMonth() + 1}/${N.getDate()}/${N.getFullYear()}  ${N.getHours()}:${String(N.getMinutes()).padStart(2, "0")}:${String(N.getSeconds()).padStart(2, "0")}`;
  s.push(`$ File   "Hekatan_export.e2k"  saved ${b} in ETABS 22.6.0`), s.push(""), s.push("$ PROGRAM INFORMATION"), s.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), s.push(""), s.push("$ CONTROLS"), s.push(`  UNITS  "${q}"  "${H}"  "C"  `), s.push('  TITLE1  "Hekatan Struct Lineal export"  '), y && s.push(`  TITLE2  "${y}"  `), s.push("  PREFERENCE  MERGETOL 0.001"), s.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), s.push("");
  const u = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set();
  f.forEach((t) => {
    u.add(a(t[0])), G.add(a(t[1]));
  });
  const B = [...u].sort((t, o) => t - o), et = [...G].sort((t, o) => t - o);
  s.push("$ GRIDS"), s.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), B.forEach((t, o) => {
    const d = o < 26 ? String.fromCharCode(65 + o) : String.fromCharCode(65 + o % 26).repeat(Math.floor(o / 26) + 1);
    s.push(`  GRID "G1"  LABEL "${d}"  DIR "X"  COORD ${t}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), et.forEach((t, o) => {
    s.push(`  GRID "G1"  LABEL "${o + 1}"  DIR "Y"  COORD ${t}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), s.push("");
  const k = /* @__PURE__ */ new Set();
  f.forEach((t) => k.add(a(t[2])));
  const Y = [...k].sort((t, o) => t - o), at = [], lt = /* @__PURE__ */ new Map();
  at.push("Base"), lt.set(Y[0], "Base");
  for (let t = 1; t < Y.length; t++) {
    const o = `Level_${t}`;
    at.push(o), lt.set(Y[t], o);
  }
  s.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let t = Y.length - 1; t >= 1; t--) s.push(`  STORY "${at[t]}"  HEIGHT ${a(Y[t] - Y[t - 1])} MASTERSTORY "Yes"  `);
  Y.length > 0 && s.push(`  STORY "Base"  ELEV ${Y[0]} `), s.push(""), I.some((t) => t.length === 4), s.push("$ DIAPHRAGM NAMES"), s.push('  DIAPHRAGM "D1"    TYPE RIGID'), s.push(""), s.push("$ MATERIAL PROPERTIES");
  const st = /* @__PURE__ */ new Set();
  (_a = h.elasticities) == null ? void 0 : _a.forEach((t) => st.add(t));
  const ht = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map();
  let Ot = 0, Rt = 0;
  const Ct = 980665e-8, gt = /* @__PURE__ */ new Map();
  if (h.densities && h.densities.size > 0) {
    const t = /* @__PURE__ */ new Map();
    h.densities.forEach((o, d) => {
      var _a2;
      const p = (_a2 = h.elasticities) == null ? void 0 : _a2.get(d);
      p !== void 0 && (t.has(p) || t.set(p, []), t.get(p).push(o));
    }), t.forEach((o, d) => {
      const p = o.reduce(($, g) => $ + g, 0) / o.length, x = p > 100 ? p * Ct : p * 9.80665;
      gt.set(d, x);
    });
  }
  for (const t of st) {
    const o = t >= 1e8, d = o ? `Steel_${++Ot}` : `Conc_${++Rt}`;
    ht.set(t, d), St.set(t, o);
    const p = gt.get(t) ?? (o ? 76.97 : 24), x = e(t), $ = n(p), g = o ? 0.3 : 0.2, w = o ? 117e-7 : 1e-5;
    if (o) {
      s.push(`  MATERIAL  "${d}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${a($)}`), s.push(`  MATERIAL  "${d}"    SYMTYPE "Isotropic"  E ${a(x)}  U ${g}  A ${w}`);
      const Q = 345e3, rt = 45e4;
      s.push(`  MATERIAL  "${d}"  FY ${a(e(Q))}  FU ${a(e(rt))}  FYE ${a(e(Q * 1.1))}  FUE ${a(e(rt * 1.1))}`);
    } else s.push(`  MATERIAL  "${d}"    TYPE "Concrete"    WEIGHTPERVOLUME ${a($)}`), s.push(`  MATERIAL  "${d}"    SYMTYPE "Isotropic"  E ${a(x)}  U ${g}  A ${w}`), s.push(`  MATERIAL  "${d}"    FC ${a(e(24e3))}`);
  }
  s.push(""), s.push("$ FRAME SECTIONS");
  const mt = /* @__PURE__ */ new Set(), Tt = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), Et = 0.05;
  I.forEach((t, o) => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h, _i, _j;
    if (t.length !== 2) return;
    const d = (_a2 = h.sectionShapes) == null ? void 0 : _a2.get(o), p = ((_b2 = h.elasticities) == null ? void 0 : _b2.get(o)) ?? 0, x = ht.get(p) || "Conc_1", $ = St.get(p) ?? p >= 1e8, g = ((_c2 = h.areas) == null ? void 0 : _c2.get(o)) ?? 0, w = ((_d2 = h.momentsOfInertiaZ) == null ? void 0 : _d2.get(o)) ?? 0, Q = ((_e2 = h.momentsOfInertiaY) == null ? void 0 : _e2.get(o)) ?? 0, rt = ((_f2 = h.torsionalConstants) == null ? void 0 : _f2.get(o)) ?? 0;
    let K = (d == null ? void 0 : d.type) || "rect", W = (d == null ? void 0 : d.h) ?? 0, tt = (d == null ? void 0 : d.b) ?? 0, $t = (d == null ? void 0 : d.d) ?? 0;
    const Yt = (d == null ? void 0 : d.tf) ?? 0, Dt = (d == null ? void 0 : d.tw) ?? 0;
    if (!d && W <= 0 && tt <= 0 && $t <= 0 && g > 0 && w > 0 && Q > 0) {
      const ft = (_g2 = h.cantos) == null ? void 0 : _g2.get(o), Nt = (_h = h.anchos) == null ? void 0 : _h.get(o);
      W = ft && ft > 0 ? ft : Math.sqrt(12 * w / g), tt = Nt && Nt > 0 ? Nt : g / W, (!isFinite(W) || W < Et) && (W = Et), (!isFinite(tt) || tt < Et) && (tt = Et), K = "general";
    } else W <= 0 && tt <= 0 && $t <= 0 && g > 0 && (w > 0 ? (W = Math.sqrt(12 * w / g), tt = g / W) : W = tt = Math.sqrt(g), (!isFinite(W) || W < Et) && (W = Et), (!isFinite(tt) || tt < Et) && (tt = Et), K = "rect");
    W <= 0 && tt <= 0 && $t <= 0 && (W = 0.3, tt = 0.3, K = "rect");
    const xt = `${K}_${a(W)}_${a(tt)}_${a($t)}_${a(Yt)}_${a(Dt)}_${x}`;
    (d == null ? void 0 : d.name) && !It.has(xt) && It.set(xt, d.name);
    let pt = It.get(xt);
    if (!pt) {
      const ft = $ ? "S" : "C";
      K === "general" ? pt = `${ft}_G${mt.size + 1}` : K === "rect" ? pt = `${ft}_R${Math.round(tt * 100)}x${Math.round(W * 100)}` : K === "circ" ? pt = `${ft}_C_D${Math.round($t * 100)}` : K === "I" ? pt = `${ft}_I${Math.round(W * 100)}x${Math.round(tt * 100)}` : K === "HSS" ? pt = `${ft}_HSS${Math.round(tt * 100)}x${Math.round(W * 100)}x${Math.round(Dt * 1e3)}` : pt = `${ft}_Sec${mt.size + 1}`, It.set(xt, pt);
    }
    if (Tt.set(o, pt), mt.has(pt)) return;
    mt.add(pt);
    let dt;
    K === "general" ? dt = "General" : K === "I" ? dt = "Steel I/Wide Flange" : K === "HSS" ? dt = "Steel Tube" : K === "CFT" ? dt = "Filled Steel Tube" : K === "pipe" ? dt = "Steel Pipe" : K === "L" ? dt = "Steel Angle" : K === "C" ? dt = "Steel Channel" : K === "2C" ? dt = "Steel Double Channel" : K === "circ" ? dt = "Concrete Circle" : dt = "Concrete Rectangular";
    let ut = `  FRAMESECTION  "${pt}"  MATERIAL "${x}"  SHAPE "${dt}"`;
    if (K === "general") {
      const ft = ((_i = h.shearAreasY) == null ? void 0 : _i.get(o)) || g * 5 / 6, Nt = ((_j = h.shearAreasZ) == null ? void 0 : _j.get(o)) || g * 5 / 6;
      ut += `  D ${a(W)} B ${a(tt)} AREA ${r(g)} AS2 ${r(ft)} AS3 ${r(Nt)} I33 ${r(w)} I22 ${r(Q)} TORSION ${r(rt || w + Q)} S33POS ${r(2 * w / W)} S33NEG ${r(2 * w / W)} S22POS ${r(2 * Q / tt)} S22NEG ${r(2 * Q / tt)} Z33 ${r(2 * w / W)} Z22 ${r(2 * Q / tt)} R33 ${r(Math.sqrt(w / g))} R22 ${r(Math.sqrt(Q / g))} `, s.push(ut);
      return;
    }
    W && (ut += `  D ${a(W)}`), tt && (ut += `  B ${a(tt)}`), $t && !W && (ut += `  D ${a($t)}`), Yt && (ut += `  TF ${a(Yt)}`), Dt && (ut += `  TW ${a(Dt)}`), s.push(ut);
  }), s.push("");
  const M = /* @__PURE__ */ new Map();
  let R = 0;
  f.forEach((t) => {
    const o = `${a(t[0])},${a(t[1])}`;
    M.has(o) || M.set(o, `${++R}`);
  }), s.push("$ POINT COORDINATES");
  for (const [t, o] of M) {
    const [d, p] = t.split(",").map(Number);
    s.push(`  POINT "${o}"  ${d} ${p} `);
  }
  s.push("");
  const c = (t) => {
    const o = f[t], d = `${a(o[0])},${a(o[1])}`;
    return { pt: M.get(d) || "1", story: lt.get(a(o[2])) || "Base" };
  }, C = (t) => {
    var _a2, _b2, _c2, _d2;
    const o = [], d = (_a2 = E.propertyModifiers) == null ? void 0 : _a2.get(t);
    d && d.some((g) => Math.abs(g - 1) > 1e-9) && o.push(`PROPMODIFIERS "${d.map((g) => a(g)).join(" ")}"`);
    const p = (_b2 = h.momentReleases) == null ? void 0 : _b2.get(t);
    if (p && p.some((g) => g)) {
      const g = [];
      p.length === 12 ? (p[0] && g.push("PI"), p[1] && g.push("V2I"), p[2] && g.push("V3I"), p[3] && g.push("TI"), p[4] && g.push("M2I"), p[5] && g.push("M3I"), p[6] && g.push("PJ"), p[7] && g.push("V2J"), p[8] && g.push("V3J"), p[9] && g.push("TJ"), p[10] && g.push("M2J"), p[11] && g.push("M3J")) : p.length === 6 && (p[0] && g.push("TI"), p[1] && g.push("M2I"), p[2] && g.push("M3I"), p[3] && g.push("TJ"), p[4] && g.push("M2J"), p[5] && g.push("M3J")), g.length > 0 && o.push(`RELEASE "${g.join(" ")}"`);
    }
    const x = (_c2 = h.insertionPoints) == null ? void 0 : _c2.get(t);
    x && (Math.abs(x[0]) > 1e-9 || Math.abs(x[1]) > 1e-9) && o.push(`LATEROFFSET ${a(x[0])} TRANSOFFSET ${a(x[1])}`);
    const $ = (_d2 = h.rigidOffsets) == null ? void 0 : _d2.get(t);
    return $ && (Math.abs($[0]) > 1e-9 || Math.abs($[1]) > 1e-9) && o.push(`LENGTHOFFI ${a($[0])} LENGTHOFFJ ${a($[1])} RIGIDZONE 0.5`), o.length > 0 ? ` ${o.join(" ")} ` : "";
  }, i = [], S = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Map();
  I.forEach((t, o) => {
    if (t.length !== 2) return;
    const d = kt(f, t);
    if (d === "BEAM") return;
    const p = f[t[0]][2] <= f[t[1]][2] ? t[0] : t[1], x = f[t[0]][2] <= f[t[1]][2] ? t[1] : t[0];
    if (Math.abs(f[p][0] - f[x][0]) > 1e-6 || Math.abs(f[p][1] - f[x][1]) > 1e-6) return;
    const $ = c(p), g = Tt.get(o) || `Sec_${o}`, w = `${$.pt}_${g}_${d}`;
    L.has(w) || L.set(w, []), L.get(w).push({ i: o, bot: p, top: x, zBot: a(f[p][2]), zTop: a(f[x][2]), planPt: $.pt, secName: g, type: d });
  }), L.forEach((t, o) => {
    t.sort((p, x) => p.zBot - x.zBot);
    let d = 0;
    for (let p = 1; p <= t.length; p++) if (p === t.length || Math.abs(t[p].zBot - t[p - 1].zTop) > 1e-6) {
      const $ = t.slice(d, p);
      $.length >= 1 && (i.push({ elemIndices: $.map((g) => g.i), planPt: $[0].planPt, bottomNodeIdx: $[0].bot, topNodeIdx: $[$.length - 1].top, secName: $[0].secName, type: $[0].type, nSegments: $.length }), $.forEach((g) => S.add(g.i))), d = p;
    }
  }), s.push("$ LINE CONNECTIVITIES");
  const O = [];
  i.forEach((t, o) => {
    const d = `C${o + 1}`, p = c(t.topNodeIdx);
    c(t.bottomNodeIdx);
    const x = a(f[t.topNodeIdx][2]), $ = a(f[t.bottomNodeIdx][2]), g = Y.indexOf(x), w = Y.indexOf($), Q = Math.max(1, g - w), rt = C(t.elemIndices[0]);
    s.push(`  LINE  "${d}"  ${t.type}  "${p.pt}"  "${p.pt}"  ${Q}`), O.push(`  LINEASSIGN  "${d}"  "${p.story}"  SECTION "${t.secName}" ${rt} MINNUMSTA ${t.nSegments} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  }), I.forEach((t, o) => {
    if (t.length !== 2 || S.has(o)) return;
    const d = kt(f, t), p = Tt.get(o) || `Sec_${o}`, x = C(o);
    if (d === "BEAM") {
      const $ = c(t[0]), g = c(t[1]);
      s.push(`  LINE  "E${o + 1}"  BEAM  "${$.pt}"  "${g.pt}"  0`), O.push(`  LINEASSIGN  "E${o + 1}"  "${$.story}"  SECTION "${p}" ${x} MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const $ = f[t[0]][2] <= f[t[1]][2] ? t[0] : t[1], g = f[t[0]][2] <= f[t[1]][2] ? t[1] : t[0], w = c(g), Q = a(f[$][2]), rt = a(f[g][2]), K = Y.indexOf(Q), W = Y.indexOf(rt), tt = Math.max(1, W >= 0 && K >= 0 ? W - K : 1);
      s.push(`  LINE  "E${o + 1}"  ${d}  "${w.pt}"  "${w.pt}"  ${tt}`), O.push(`  LINEASSIGN  "E${o + 1}"  "${w.story}"  SECTION "${p}" ${x} MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    }
  }), s.push("");
  const J = E.weightMode ?? "auto", Z = /* @__PURE__ */ new Set();
  s.push("$ POINT ASSIGNS"), (_b = A.supports) == null ? void 0 : _b.forEach((t, o) => {
    const d = [];
    if (t[0] && d.push("UX"), t[1] && d.push("UY"), t[2] && d.push("UZ"), t[3] && d.push("RX"), t[4] && d.push("RY"), t[5] && d.push("RZ"), d.length > 0) {
      const p = c(o), x = p.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      s.push(`  POINTASSIGN  "${p.pt}"  "${p.story}"  RESTRAINT "${d.join(" ")}" ${x} `), Z.add(`${p.pt}@${p.story}`);
    }
  });
  const _ = (E.diaphragm ?? "auto") !== "none";
  _ && i.forEach((t) => {
    const o = c(t.topNodeIdx), d = `${o.pt}@${o.story}`;
    !Z.has(d) && o.story !== "Base" && (s.push(`  POINTASSIGN  "${o.pt}"  "${o.story}"  DIAPH "D1"  `), Z.add(d));
  }), J === "manual" && A.loads && A.loads.forEach((t, o) => {
    const [d, p, x] = V(o, t);
    if (Math.abs(d) < 1e-10 && Math.abs(p) < 1e-10 && Math.abs(x) < 1e-10) return;
    const $ = c(o), g = `${$.pt}@${$.story}`;
    Z.has(g) || (s.push(`  POINTASSIGN  "${$.pt}"  "${$.story}"  DIAPH "DISCONNECTED"  `), Z.add(g));
  }), s.push(""), s.push("$ LINE ASSIGNS"), O.forEach((t) => s.push(t)), s.push("");
  const X = [], ot = h.areaObjects, nt = /* @__PURE__ */ new Set(), it = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map();
  ot == null ? void 0 : ot.forEach((t) => t.cells.forEach((o) => nt.add(o))), I.forEach((t, o) => {
    if (t.length === 4) {
      const d = f[t[0]], p = f[t[1]], x = f[t[2]], $ = [p[0] - d[0], p[1] - d[1], p[2] - d[2]], g = [x[0] - d[0], x[1] - d[1], x[2] - d[2]], w = $[1] * g[2] - $[2] * g[1], Q = $[2] * g[0] - $[0] * g[2], rt = $[0] * g[1] - $[1] * g[0], K = Math.sqrt(w * w + Q * Q + rt * rt), W = K > 1e-10 && Math.abs(rt) / K < 0.5;
      X.push({ idx: o, el: t, isWall: W }), nt.has(o) && X.pop();
    }
  });
  const Lt = (() => {
    for (const [t, o] of St) if (!o) return ht.get(t);
    return ht.values().next().value || "Conc_1";
  })();
  ot == null ? void 0 : ot.forEach((t, o) => {
    X.push({ idx: t.cells[0], el: t.nodes, isWall: false }), t.q !== void 0 && it.set(t.cells[0], t.q), t.ang !== void 0 && ct.set(t.cells[0], t.ang);
  });
  const wt = "DECK";
  let Ft = false;
  const Pt = [];
  if (X.some((t) => !t.isWall)) {
    const t = h.bendingModifiers, o = h.shellModifiers;
    Ft = (() => {
      for (const p of X) {
        if (p.isWall) continue;
        const x = o == null ? void 0 : o.get(p.idx);
        if (x && Math.abs(x[3]) < 1e-9 && Math.abs(x[4]) < 1e-9) return true;
        const $ = t == null ? void 0 : t.get(p.idx);
        if ($ !== void 0 && Math.abs($) < 1e-9) return true;
      }
      return false;
    })();
    const d = ((_c = h.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
    Ft ? (s.push("$ DECK PROPERTIES"), s.push(`  SHELLPROP  "${wt}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${Lt}"  DECKMATERIAL "${Lt}"  DECKSLABDEPTH ${r(d * 65 / 120)} DECKRIBDEPTH ${r(d * 55 / 120)} DECKRIBWIDTHTOP ${r(d * 150 / 120)} DECKRIBWIDTHBOTTOM ${r(d * 100 / 120)} DECKRIBSPACING ${r(d * 200 / 120)} DECKSHEARTHICKNESS ${r(d * 0.76 / 120)} DECKUNITWEIGHT ${r(l(0.11012))} SHEARSTUDDIAM ${r(d * 19 / 120)} SHEARSTUDHEIGHT ${r(d * 100 / 120)} SHEARSTUDFU 400 `)) : (s.push("$ SLAB PROPERTIES"), s.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${Lt}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${a(d)} `)), s.push("");
  }
  if (X.some((t) => t.isWall)) {
    s.push("$ WALL PROPERTIES");
    const t = ((_d = h.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
    s.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${Lt}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${a(t)} `), s.push("");
  }
  if (X.length > 0) {
    s.push("$ AREA CONNECTIVITIES");
    const t = [];
    X.forEach((o, d) => {
      const { el: p, isWall: x } = o, $ = x ? `W${d + 1}` : `F${d + 1}`, g = x ? "PANEL" : "FLOOR", w = p.map((Q) => c(Q));
      if (x) {
        const Q = f[p[0]][2] <= f[p[2]][2] ? 0 : 2, rt = f[p[1]][2] <= f[p[3]][2] ? 1 : 3;
        s.push(`  AREA "${$}"  ${g}  4  "${w[Q].pt}"  "${w[rt].pt}"  "${w[rt].pt}"  "${w[Q].pt}"  1  1  0  0  `);
        const K = w[Q === 0 ? 2 : 0].story;
        t.push(`  AREAASSIGN  "${$}"  "${K}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        s.push(`  AREA "${$}"  ${g}  4  "${w[0].pt}"  "${w[1].pt}"  "${w[2].pt}"  "${w[3].pt}"  0  0  0  0  `);
        const Q = ct.get(o.idx) ?? (D == null ? void 0 : D.get(o.idx));
        t.push(Ft ? `  AREAASSIGN  "${$}"  "${w[0].story}"  SECTION "${wt}"  ANG ${a(Q ?? 0)} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "No"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  ` : `  AREAASSIGN  "${$}"  "${w[0].story}"  SECTION "Losa" ${_ ? ' DIAPH  "D1" ' : ""} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), Pt.push({ name: $, story: w[0].story, idx: o.idx });
      }
    }), s.push(""), s.push("$ AREA ASSIGNS"), t.forEach((o) => s.push(o)), s.push("");
  }
  const Ht = J === "manual" ? 0 : 1;
  s.push("$ LOAD PATTERNS");
  const yt = ((_e = E.loadPatterns) == null ? void 0 : _e.length) ? E.loadPatterns : [{ name: "Dead", type: "Dead", selfWeightMultiplier: Ht }, { name: "Live", type: "Live", selfWeightMultiplier: 0 }];
  for (const t of yt) {
    const o = t.type === "Dead" ? J === "manual" ? 0 : t.selfWeightMultiplier ?? 1 : t.selfWeightMultiplier ?? 0;
    s.push(`  LOADPATTERN "${t.name}"  TYPE  "${t.type ?? "Other"}"  SELFWEIGHT  ${o}`);
  }
  s.push("");
  const Mt = ((_f = yt.find((t) => t.type === "Dead")) == null ? void 0 : _f.name) ?? yt[0].name, At = [];
  if (A.loads && A.loads.size > 0 && A.loads.forEach((t, o) => {
    const [d, p, x] = V(o, t), $ = c(o);
    Math.abs(d) > 1e-10 && At.push(`  POINTLOAD  "${$.pt}"  "${$.story}"  TYPE "FORCE"  LC "${Mt}"  FX ${a(l(d))}  FY 0  FZ 0`), Math.abs(p) > 1e-10 && At.push(`  POINTLOAD  "${$.pt}"  "${$.story}"  TYPE "FORCE"  LC "${Mt}"  FX 0  FY ${a(l(p))}  FZ 0`), J === "manual" && Math.abs(x) > 1e-10 && At.push(`  POINTLOAD  "${$.pt}"  "${$.story}"  TYPE "FORCE"  LC "${Mt}"  FX 0  FY 0  FZ ${a(l(x))}`);
  }), A.moments && A.moments.size > 0 && A.moments.forEach((t, o) => {
    const [d, p, x] = t, $ = c(o);
    Math.abs(d) > 1e-10 && At.push(`  POINTLOAD  "${$.pt}"  "${$.story}"  TYPE "MOMENT"  LC "${Mt}"  MX ${a(l(d))}  MY 0  MZ 0`), Math.abs(p) > 1e-10 && At.push(`  POINTLOAD  "${$.pt}"  "${$.story}"  TYPE "MOMENT"  LC "${Mt}"  MX 0  MY ${a(l(p))}  MZ 0`), Math.abs(x) > 1e-10 && At.push(`  POINTLOAD  "${$.pt}"  "${$.story}"  TYPE "MOMENT"  LC "${Mt}"  MX 0  MY 0  MZ ${a(l(x))}`);
  }), At.length > 0 && (s.push("$ POINT OBJECT LOADS"), At.forEach((t) => s.push(t)), s.push("")), T && T.size > 0 && Pt.length > 0) {
    const t = [];
    for (const o of Pt) {
      const d = it.get(o.idx), p = d !== void 0 ? { value: d } : T.get(o.idx);
      if (!p || Math.abs(p.value) < 1e-12) continue;
      const x = p.dir ?? "GRAV", $ = x === "GRAV" ? Math.abs(p.value) : p.value;
      t.push(`  AREALOAD  "${o.name}"  "${o.story}"  TYPE "UNIFF"  DIR "${x}"  LC "${p.pattern ?? Mt}"  FVAL ${a(l($))}`);
    }
    t.length > 0 && (s.push("$ SHELL OBJECT LOADS"), t.forEach((o) => s.push(o)), s.push(""));
  }
  s.push("$ ANALYSIS OPTIONS"), s.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), s.push('  PDELTA  METHOD "NONE"  '), s.push(""), s.push("$ MASS SOURCE"), s.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), s.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), s.push(""), s.push("$ LOAD CASES");
  const zt = ((_g = E.loadCases) == null ? void 0 : _g.length) ? E.loadCases : yt.map((t) => ({ name: t.name, type: "Linear Static", patterns: [{ pattern: t.name, scaleFactor: 1 }] }));
  for (const t of zt) {
    s.push(`  LOADCASE "${t.name}"  TYPE  "${t.type ?? "Linear Static"}"  INITCOND  "PRESET"  `);
    for (const o of t.patterns ?? []) s.push(`  LOADCASE "${t.name}"  LOADPAT  "${o.pattern}"  SF ${o.scaleFactor} `);
  }
  s.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), s.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), s.push("");
  const bt = E.loadCombinations;
  if (bt && bt.length) {
    s.push("$ LOAD COMBINATIONS");
    for (const t of bt) {
      s.push(`  COMBO "${t.name}"  TYPE "${t.type ?? "Linear Add"}"  `);
      for (const o of t.cases ?? []) s.push(`  COMBO "${t.name}"  LOADCASE  "${o.case}"  SF ${o.scaleFactor} `);
    }
    s.push("");
  }
  return s.push("  END"), s.push("$ END OF MODEL FILE"), s.join(`\r
`);
}
function kt(E, f) {
  const I = E[f[0]], A = E[f[1]], h = Math.abs(A[2] - I[2]), y = Math.sqrt((A[0] - I[0]) ** 2 + (A[1] - I[1]) ** 2), F = h > y * 0.5;
  return F && y > 0.01 ? "BRACE" : F ? "COLUMN" : "BEAM";
}
export {
  se as a,
  ee as b,
  Qt as c,
  oe as e,
  te as p
};
