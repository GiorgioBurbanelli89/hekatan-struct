import { c as jt } from "./cadSections-et9anjWz.js";
const Ot = 64, Qt = (E) => E * Math.PI / 180;
function Lt(E, m = Ot) {
  switch (E.tipo) {
    case "rect": {
      const { d: l, b: r } = E;
      return [[-r / 2, -l / 2], [r / 2, -l / 2], [r / 2, l / 2], [-r / 2, l / 2]];
    }
    case "circle": {
      const l = E.d / 2, r = [];
      for (let p = 0; p < m; p++) {
        const h = 2 * Math.PI * p / m;
        r.push([l * Math.cos(h), l * Math.sin(h)]);
      }
      return r;
    }
    case "angle": {
      const { d: l, b: r, tf: p, tw: h } = E;
      return [[0, 0], [r, 0], [r, p], [h, p], [h, l], [0, l]].map(([T, y]) => [T - r / 2, y - l / 2]);
    }
    case "channel": {
      const { d: l, b: r, tf: p, tw: h } = E;
      return [[0, 0], [r, 0], [r, p], [h, p], [h, l - p], [r, l - p], [r, l], [0, l]].map(([T, y]) => [T - r / 2, y - l / 2]);
    }
    case "tee": {
      const { d: l, b: r, tf: p, tw: h } = E, T = (r - h) / 2;
      return [[0, l - p], [r, l - p], [r, l], [0, l]].concat([]) && [[T, 0], [T + h, 0], [T + h, l - p], [r, l - p], [r, l], [0, l], [0, l - p], [T, l - p]].map(([y, R]) => [y - r / 2, R - l / 2]);
    }
    case "isection": {
      const { d: l, b: r, tf: p, tw: h } = E, T = (r - h) / 2;
      return [[0, 0], [r, 0], [r, p], [T + h, p], [T + h, l - p], [r, l - p], [r, l], [0, l], [0, l - p], [T, l - p], [T, p], [0, p]].map(([y, R]) => [y - r / 2, R - l / 2]);
    }
    case "polygon":
      return E.puntos.slice();
    default:
      return [];
  }
}
function _t(E, m = Ot) {
  if (E.tipo === "tube") {
    const { d: l, b: r, tf: p, tw: h } = E, T = l / 2 - p, y = r / 2 - h;
    return [[[-y, -T], [-y, T], [y, T], [y, -T]]];
  }
  if (E.tipo === "pipe") {
    const l = E.d / 2 - E.t, r = [];
    for (let p = m - 1; p >= 0; p--) {
      const h = 2 * Math.PI * p / m;
      r.push([l * Math.cos(h), l * Math.sin(h)]);
    }
    return [r];
  }
  return [];
}
function ts(E, m = Ot) {
  return E.tipo === "tube" ? Lt({ tipo: "rect", d: E.d, b: E.b }) : E.tipo === "pipe" ? Lt({ tipo: "circle", d: E.d }, m) : Lt(E, m);
}
function ss(E) {
  let m = 0, l = 0, r = 0, p = 0, h = 0, T = 0;
  for (let L = 0; L < E.length; L++) {
    const [O, P] = E[L], [u, D] = E[(L + 1) % E.length], G = O * D - u * P;
    m += G, l += (O + u) * G, r += (P + D) * G, p += (P * P + P * D + D * D) * G, h += (O * O + O * u + u * u) * G, T += (O * D + 2 * O * P + 2 * u * D + u * P) * G;
  }
  if (m /= 2, Math.abs(m) < 1e-18) return { A: 0, cx: 0, cy: 0, Ixx: 0, Iyy: 0, Ixy: 0 };
  const y = l / (6 * m), R = r / (6 * m);
  return { A: m, cx: y, cy: R, Ixx: p / 12 - m * R * R, Iyy: h / 12 - m * y * y, Ixy: T / 24 - m * y * R };
}
function es(E, m) {
  const l = Qt(m.rot ?? 0), r = Math.cos(l), p = Math.sin(l), h = m.mirror ? -1 : 1, T = E.map(([y, R]) => {
    const L = y * h;
    return [L * r - R * p + (m.xc ?? 0), L * p + R * r + (m.yc ?? 0)];
  });
  return m.mirror ? T.reverse() : T;
}
function os(E, m) {
  let l = 0, r = 0, p = 0;
  const h = [];
  for (const u of E) {
    const D = m > 0 && u.E ? u.E / m : 1;
    if (u.forma.tipo === "rebar") {
      const z = u.forma.area * D;
      h.push({ A: z, cx: u.xc ?? 0, cy: u.yc ?? 0, Ixx: 0, Iyy: 0, Ixy: 0, n: 1 }), l += z, r += z * (u.xc ?? 0), p += z * (u.yc ?? 0);
      continue;
    }
    const G = [ts(u.forma), ..._t(u.forma)];
    for (const z of G) {
      if (z.length < 3) continue;
      const V = ss(es(z, u)), J = V.A * D;
      h.push({ ...V, A: J, n: D }), l += J, r += J * V.cx, p += J * V.cy;
    }
  }
  if (Math.abs(l) < 1e-18) return { A: 0, Iz: 0, Iy: 0, Ixy: 0, J: 0, cx: 0, cy: 0, As2: 0, As3: 0, nPiezas: E.length };
  const T = r / l, y = p / l;
  let R = 0, L = 0, O = 0;
  for (const u of h) R += u.Ixx * u.n + u.A * (u.cy - y) ** 2, L += u.Iyy * u.n + u.A * (u.cx - T) ** 2, O += u.Ixy * u.n + u.A * (u.cx - T) * (u.cy - y);
  const P = (R + L) * 0.1;
  return { A: l, Iz: R, Iy: L, Ixy: O, J: P, cx: T, cy: y, As2: 5 / 6 * l, As3: 5 / 6 * l, nPiezas: E.length };
}
function ns(E, m, l, r, p) {
  switch ((E || "").toUpperCase()) {
    case "CONCRETE RECTANGULAR":
    case "SOLID RECT":
    case "RECTANGLE":
      return { tipo: "rect", d: m, b: l };
    case "CONCRETE CIRCLE":
    case "SOLID CIRCLE":
    case "CIRCLE":
      return { tipo: "circle", d: m };
    case "STEEL ANGLE":
    case "ANGLE":
      return { tipo: "angle", d: m, b: l, tf: r, tw: p };
    case "STEEL CHANNEL":
    case "CHANNEL":
      return { tipo: "channel", d: m, b: l, tf: r, tw: p };
    case "STEEL TEE":
    case "CONCRETE TEE":
    case "TEE":
      return { tipo: "tee", d: m, b: l, tf: r, tw: p };
    case "STEEL I/WIDE FLANGE":
    case "I SECTION":
    case "ISECTION":
      return { tipo: "isection", d: m, b: l, tf: r, tw: p };
    case "STEEL TUBE":
    case "TUBE":
      return { tipo: "tube", d: m, b: l, tf: r, tw: p };
    case "STEEL PIPE":
    case "PIPE":
      return { tipo: "pipe", d: m, t: r || p };
    default:
      return m > 0 && l > 0 ? { tipo: "rect", d: m, b: l } : null;
  }
}
function cs(E) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const m = E.split(/\r?\n/), l = { force: "TONF", length: "M" }, r = [], p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), y = [], R = [], L = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Set(), J = [], et = [], Q = /* @__PURE__ */ new Map(), ot = [];
  let K = 0;
  const Et = [], ut = [];
  let Ct = "", w = "";
  const nt = /* @__PURE__ */ new Map();
  for (const o of m) {
    const e = o.trim();
    if (!e || e.startsWith("$")) {
      e.startsWith("$ ") && (w = e.substring(2).trim());
      continue;
    }
    if (w && (nt.has(w) || nt.set(w, []), nt.get(w).push(o)), w === "CONTROLS") {
      const t = e.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
      t && (l.force = t[1], l.length = t[2]);
      const n = e.match(/TITLE2\s+"([^"]+)"/);
      n && (Ct = n[1]);
    }
    if (w === "STORIES - IN SEQUENCE FROM TOP") {
      const t = e.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
      if (t) {
        const n = t[1], s = t[2] ? parseFloat(t[2]) : 0, a = t[3] ? parseFloat(t[3]) : void 0;
        r.push({ name: n, height: s, elev: a ?? 0 });
      }
    }
    if (w === "MATERIAL PROPERTIES") {
      const t = e.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
      if (t) {
        const n = t[1];
        p.has(n) || p.set(n, { type: t[2] || "", E: 0, G: 0, nu: 0 });
        const s = p.get(n);
        t[2] && (s.type = t[2]);
        const a = e.match(/\bE\s+([\d.eE+-]+)/);
        a && (s.E = parseFloat(a[1]));
        const i = e.match(/\bU\s+([\d.eE+-]+)/);
        i && (s.nu = parseFloat(i[1]), s.G = s.E / (2 * (1 + s.nu)));
        const c = e.match(/\bFY\s+([\d.eE+-]+)/);
        c && (s.fy = parseFloat(c[1]));
        const f = e.match(/\bFC\s+([\d.eE+-]+)/);
        f && (s.fc = parseFloat(f[1]));
        const d = e.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
        d && (s.density = parseFloat(d[1]));
      }
    }
    if (w === "FRAME SECTIONS") {
      const t = e.match(/FRAMESECTION\s+"([^"]+)"/);
      if (t) {
        const n = t[1];
        h.has(n) || h.set(n, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
        const s = h.get(n), a = e.match(/MATERIAL\s+"([^"]+)"/);
        a && (s.material = a[1]);
        const i = e.match(/SHAPE\s+"([^"]+)"/);
        i && (s.shape = i[1]);
        const c = e.match(/\bD\s+([\d.eE+-]+)/);
        c && (s.D = parseFloat(c[1]));
        const f = e.match(/\bB\s+([\d.eE+-]+)/);
        f && (s.B = parseFloat(f[1]));
        const d = e.match(/\bTF\s+([\d.eE+-]+)/);
        d && (s.TF = parseFloat(d[1]));
        const I = e.match(/\bTW\s+([\d.eE+-]+)/);
        I && (s.TW = parseFloat(I[1]));
        const A = e.match(/\bR\s+([\d.eE+-]+)/);
        A && (s.R = parseFloat(A[1]));
        const F = e.match(/FILLMATERIAL\s+"([^"]+)"/);
        F && (s.fillMaterial = F[1]);
        const M = e.match(/I2MOD\s+([\d.eE+-]+)/);
        M && (s.modI2 = parseFloat(M[1]));
        const g = e.match(/I3MOD\s+([\d.eE+-]+)/);
        g && (s.modI3 = parseFloat(g[1]));
        for (const [B, C] of [["AREA", /\bAREA\s+([\d.eE+-]+)/], ["AS2", /\bAS2\s+([\d.eE+-]+)/], ["AS3", /\bAS3\s+([\d.eE+-]+)/], ["I33", /\bI33\s+([\d.eE+-]+)/], ["I22", /\bI22\s+([\d.eE+-]+)/], ["TORSION", /\bTORSION\s+([\d.eE+-]+)/]]) {
          const H = e.match(C);
          H && (s[B] = parseFloat(H[1]));
        }
        const S = e.match(/\bT\s+([\d.eE+-]+)/);
        S && !s.TF && !s.TW && (s.TF = parseFloat(S[1]), s.TW = parseFloat(S[1]));
        const b = e.match(/\bLIP\s+([\d.eE+-]+)/);
        b && (s.LIP = parseFloat(b[1]));
      }
    }
    if (w === "POINT COORDINATES") {
      const t = e.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)(?:\s+([-\d.eE+]+))?/);
      t && T.set(t[1], [parseFloat(t[2]), parseFloat(t[3]), parseFloat(t[4] ?? "0") || 0]);
    }
    if (w === "LINE CONNECTIVITIES") {
      const t = e.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
      t && y.push({ name: t[1], type: t[2], pt1: t[3], pt2: t[4], nStories: parseInt(t[5]) });
    }
    if (w === "POINT ASSIGNS") {
      const t = e.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
      t && u.set(`${t[1]}@${t[2]}`, t[3].split(/\s+/));
      const n = e.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)"/);
      n && V.add(`${n[1]}@${n[2]}`);
      const s = e.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*SPRINGPROP\s+"([^"]+)"/);
      s && z.set(`${s[1]}@${s[2]}`, s[3]);
    }
    {
      const t = e.match(/(POINTSPRING|LINESPRING|AREASPRING)\s+"([^"]+)"/);
      if (t) {
        const n = t[1] === "POINTSPRING" ? "point" : t[1] === "LINESPRING" ? "line" : "area", s = ((_a = G.get(t[2])) == null ? void 0 : _a.k) ?? [0, 0, 0, 0, 0, 0], a = { UX: 0, UY: 1, UZ: 2, U1: 0, U2: 1, U3: 2, RX: 3, RY: 4, RZ: 5, R1: 3, R2: 4, R3: 5 };
        for (const i of e.matchAll(/(UX|UY|UZ|U1|U2|U3|RX|RY|RZ|R1|R2|R3)\s+([\d.eE+-]+)/g)) {
          const c = a[i[1]];
          c !== void 0 && (s[c] = parseFloat(i[2]));
        }
        G.set(t[2], { tipo: n, k: s });
      }
    }
    if (w === "LINE ASSIGNS") {
      const t = e.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
      if (t) {
        const n = { story: t[2], section: t[3], rigidZone: 0, releases: [], angle: 0 }, s = e.match(/RIGIDZONE\s+([\d.eE+-]+)/);
        s && (n.rigidZone = parseFloat(s[1]));
        const a = e.match(/LENGTHOFFI\s+([\d.eE+-]+)/), i = e.match(/LENGTHOFFJ\s+([\d.eE+-]+)/);
        (a || i) && (n.offsets = [a ? parseFloat(a[1]) : 0, i ? parseFloat(i[1]) : 0]);
        const c = e.match(/RELEASE\s+"([^"]+)"/);
        c && (n.releases = c[1].split(/\s+/));
        const f = e.match(/ANG\s+([-\d.eE+]+)/);
        f && (n.angle = parseFloat(f[1]));
        const d = e.match(/SPRINGPROP\s+"([^"]+)"/);
        d && (n.spring = d[1]), n.mallaEnCruces = /MESHATINTERSECTIONS\s+"?YES/i.test(e), D.set(`${t[1]}@${t[2]}`, n);
      }
    }
    if (w === "GRIDS") {
      const t = e.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
      t && Et.push({ label: t[1], dir: t[2], coord: parseFloat(t[3]) });
      const n = e.match(/^\s*REFERENCEPLANE\s.*\sZ\s+([-\d.eE+]+)/);
      n && ut.push({ z: parseFloat(n[1]) });
    }
    if (w === "FRAME OBJECT LOADS") {
      const t = e.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      t && J.push({ line: t[1], story: t[2], type: t[3], dir: t[4], lc: t[5], val: parseFloat(t[6]) });
    }
    {
      const t = e.match(/SHELLUNIFORMLOADSET\s+"([^"]+)"\s+LOADPAT\s+"([^"]+)"\s+VALUE\s+([-\d.eE+]+)/);
      t && (Q.has(t[1]) || Q.set(t[1], []), Q.get(t[1]).push({ lc: t[2], val: parseFloat(t[3]) }));
    }
    if (w === "LOAD PATTERNS") {
      const t = e.match(/LOADPATTERN\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+SELFWEIGHT\s+([\d.eE+-]+)/);
      t && /dead/i.test(t[2]) && (K = Math.max(K, parseFloat(t[3])));
    }
    if (w === "POINT OBJECT LOADS") {
      const t = e.match(/POINTLOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"FORCE"\s+LC\s+"([^"]+)"\s+FX\s+([-\d.eE+]+)\s+FY\s+([-\d.eE+]+)\s+FZ\s+([-\d.eE+]+)\s+MX\s+([-\d.eE+]+)\s+MY\s+([-\d.eE+]+)\s+MZ\s+([-\d.eE+]+)/);
      t && ot.push({ pt: t[1], story: t[2], lc: t[3], v: t.slice(4, 10).map(Number) });
    }
    if (w === "SHELL OBJECT LOADS") {
      const t = e.match(/AREALOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"UNIFF"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      if (t) et.push({ area: t[1], story: t[2], tipo: "UNIFF", dir: t[3], lc: t[4], val: parseFloat(t[5]) });
      else {
        const n = e.match(/AREALOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"UNIFLOADSET"\s+"([^"]+)"/);
        n && et.push({ area: n[1], story: n[2], tipo: "UNIFLOADSET", dir: "GRAV", lc: "", val: 0, set: n[3] });
      }
    }
    if (w === "AREA CONNECTIVITIES") {
      const t = e.match(/AREA\s+"([^"]+)"\s+(?:([A-Za-z]\w*)\s+)?\d+\s+(.+)/);
      if (t) {
        const n = ((_b = t[3].match(/"([^"]+)"/g)) == null ? void 0 : _b.map((a) => a.replace(/"/g, ""))) || [], s = t[3].replace(/"[^"]*"/g, " ").trim().split(/\s+/).filter(Boolean).map(Number).filter((a) => Number.isFinite(a));
        R.push({ name: t[1], tipo: t[2] || "FLOOR", pts: n, dz: s.length === n.length ? s : n.map(() => 0) });
      }
    }
    if (e.startsWith("SDSECTION")) {
      const t = (_c = e.match(/SDSECTION\s+"([^"]+)"/)) == null ? void 0 : _c[1], n = (_d = e.match(/SHAPETYPE\s+"([^"]+)"/)) == null ? void 0 : _d[1];
      if (t && n) {
        const s = (a) => {
          const i = e.match(a);
          return i ? parseFloat(i[1]) : 0;
        };
        P.has(t) || P.set(t, []), P.get(t).push({ shapeType: n, material: ((_e = e.match(/MATERIAL\s+"([^"]+)"/)) == null ? void 0 : _e[1]) ?? "", D: s(/\bD\s+([\d.eE+-]+)/), B: s(/\bB\s+([\d.eE+-]+)/), TF: s(/\bTF\s+([\d.eE+-]+)/), TW: s(/\bTW\s+([\d.eE+-]+)/), XC: s(/\bXC\s+(-?[\d.eE+-]+)/), YC: s(/\bYC\s+(-?[\d.eE+-]+)/) });
      }
    }
    if (w === "AREA ASSIGNS") {
      const t = e.match(/AREAASSIGN\s+"([^"]+)"\s+"([^"]+)"\s+SECTION\s+"([^"]+)"/);
      t && L.set(t[1], { story: t[2], section: t[3], spring: (_f = e.match(/SPRINGPROP\s+"([^"]+)"/)) == null ? void 0 : _f[1] });
    }
    if (e.startsWith("SHELLPROP")) {
      const t = (_g = e.match(/SHELLPROP\s+"([^"]+)"/)) == null ? void 0 : _g[1];
      if (t) {
        const n = (f) => {
          const d = e.match(f);
          return d ? parseFloat(d[1]) : void 0;
        }, s = n(/SLABTHICKNESS\s+([\d.eE+-]+)/) ?? n(/WALLTHICKNESS\s+([\d.eE+-]+)/) ?? ((n(/DECKSLABDEPTH\s+([\d.eE+-]+)/) ?? 0) + (n(/DECKRIBDEPTH\s+([\d.eE+-]+)/) ?? 0) || void 0), i = ["F11MOD", "F22MOD", "F12MOD", "M11MOD", "M22MOD", "M12MOD", "V13MOD", "V23MOD"].map((f) => n(new RegExp(f + "\\s+([\\d.eE+-]+)"))), c = O.get(t);
        if (i.some((f) => f !== void 0)) {
          const f = i.map((d) => d ?? 1);
          O.set(t, { t: (c == null ? void 0 : c.t) ?? 0, material: (c == null ? void 0 : c.material) ?? "", modeling: (c == null ? void 0 : c.modeling) ?? "ShellThin", mods: f });
        } else s !== void 0 && O.set(t, { t: s, mods: c == null ? void 0 : c.mods, material: ((_h = e.match(/MATERIAL\s+"([^"]+)"/)) == null ? void 0 : _h[1]) ?? ((_i = e.match(/CONCMATERIAL\s+"([^"]+)"/)) == null ? void 0 : _i[1]) ?? "", modeling: ((_j = e.match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _j[1]) ?? (/PROPTYPE\s+"Deck"/.test(e) ? "Membrane" : "ShellThin") });
      }
    }
  }
  const at = /* @__PURE__ */ new Map();
  if (r.length > 0) {
    const o = r.length - 1;
    at.set(r[o].name, r[o].elev);
    for (let e = o - 1; e >= 0; e--) {
      const n = at.get(r[e + 1].name) + r[e].height;
      r[e].elev = n, at.set(r[e].name, n);
    }
  }
  const k = [], Pt = [], q = /* @__PURE__ */ new Map(), $ = (o, e) => `${o}@${e}`, W = /* @__PURE__ */ new Set(), Jt = /* @__PURE__ */ new Map();
  for (const o of y) Jt.set(o.name, o);
  for (const o of y) for (const [e, t] of D) {
    if (!e.startsWith(o.name + "@")) continue;
    const n = t.story, s = r.findIndex((a) => a.name === n);
    if (!(s < 0)) if (o.type === "COLUMN" || o.type === "BRACE") {
      W.add($(o.pt2, n));
      const a = Math.min(s + o.nStories, r.length - 1);
      W.add($(o.pt1, r[a].name));
      for (let i = s + 1; i < a; i++) W.add($(o.pt1, r[i].name));
    } else W.add($(o.pt1, n)), W.add($(o.pt2, n));
  }
  for (const [o] of u) W.add(o);
  for (const o of V) W.add(o);
  const wt = (o, e) => {
    const t = r.findIndex((s) => s.name === o);
    if (t < 0) return;
    const n = t + (e || 0);
    if (!(n < 0 || n > r.length - 1)) return r[n].name;
  };
  for (const o of R) {
    const e = L.get(o.name);
    e && o.pts.forEach((t, n) => {
      const s = wt(e.story, o.dz[n] ?? 0);
      s && W.add($(t, s));
    });
  }
  const bt = /* @__PURE__ */ new Map();
  for (const o of W) {
    const [e, t] = o.split("@"), n = T.get(e), s = at.get(t);
    if (n === void 0 || s === void 0) continue;
    k.push([n[0], n[1], s - (n[2] ?? 0)]), Pt.push(o), q.set(o, k.length - 1);
    const a = z.get(o);
    a && bt.set(k.length - 1, a);
  }
  const U = [], X = [], It = [], _ = [], ct = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), xt = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), vt = /* @__PURE__ */ new Map(), Dt = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map();
  for (const o of y) for (const [e, t] of D) {
    if (!e.startsWith(o.name + "@")) continue;
    const n = t.story, s = r.findIndex((f) => f.name === n);
    if (s < 0) continue;
    const a = [];
    if (o.type === "COLUMN" || o.type === "BRACE") {
      const f = Math.min(s + o.nStories, r.length - 1);
      for (let d = f; d > s; d--) a.push($(o.pt1, r[d].name));
      a.push($(o.pt2, n));
    } else a.push($(o.pt1, n), $(o.pt2, n));
    const i = a.map((f) => q.get(f)).filter((f) => f !== void 0);
    if (i.length < 2) continue;
    const c = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
    for (let f = 0; f < i.length - 1; f++) {
      const d = i[f], I = i[f + 1];
      if (d === I) continue;
      const A = U.length;
      if (U.push([d, I]), X.push(i.length > 2 ? `${o.name}-${f + 1}` : o.name), It.push(o.type), _.push(n), ct.set(A, t.section), t.spring && gt.set(A, t.spring), t.mallaEnCruces && xt.set(A, true), t.rigidZone > 0 && it.set(A, [t.rigidZone, t.rigidZone]), t.angle && Dt.set(A, t.angle), t.offsets && tt.set(A, [t.offsets[0], t.offsets[1], t.rigidZone]), t.releases.length > 0) {
        const F = new Array(12).fill(false);
        for (const M of t.releases) {
          const g = c[M];
          g !== void 0 && (g < 6 && f !== 0 || g >= 6 && f !== i.length - 2 || (F[g] = true));
        }
        F.some(Boolean) && vt.set(A, F);
      }
    }
  }
  const rt = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), At = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map();
  let Gt = 0;
  for (const [o, e] of ct) {
    const t = h.get(e);
    if (!t) continue;
    const n = p.get(t.material);
    n && (rt.set(o, n.E), lt.set(o, n.G));
    const s = t.D, a = t.B, i = t.TF, c = t.TW;
    let f = 0, d = 0, I = 0, A = 0, F = 0, M = 0, g = "rect", S = 0, b = false;
    const B = P.get(e);
    if (t.shape === "SD Section" && (B == null ? void 0 : B.length)) {
      const C = (n == null ? void 0 : n.E) || ((_k = p.get(t.material)) == null ? void 0 : _k.E) || 0, H = [];
      for (const x of B) {
        const Ft = ns(x.shapeType, x.D, x.B, x.TF, x.TW);
        Ft && H.push({ forma: Ft, xc: x.XC, yc: x.YC, E: ((_l = p.get(x.material)) == null ? void 0 : _l.E) || C });
      }
      if (H.length) {
        const x = os(H, C);
        x.A > 0 && (f = x.A, d = x.Iz, I = x.Iy, A = x.J, F = x.As2, M = x.As3, g = "rect", b = true, Gt++);
      }
    }
    if (!b) switch (t.shape) {
      case "Concrete Rectangular":
        f = s * a, d = a * s ** 3 / 12, I = s * a ** 3 / 12, A = a * s ** 3 * (1 / 3 - 0.21 * (s / a) * (1 - s ** 4 / (12 * a ** 4))), F = M = 5 / 6 * f, g = "rect";
        break;
      case "Concrete Circle":
        f = Math.PI * s ** 2 / 4, d = I = Math.PI * s ** 4 / 64, A = Math.PI * s ** 4 / 32, F = M = 0.9 * f, g = "circ";
        break;
      case "Steel I/Wide Flange":
        f = 2 * a * i + (s - 2 * i) * c, d = (a * s ** 3 - (a - c) * (s - 2 * i) ** 3) / 12, I = (2 * i * a ** 3 + (s - 2 * i) * c ** 3) / 12, A = (2 * a * i ** 3 + (s - 2 * i) * c ** 3) / 3, F = (s - 2 * i) * c, M = 2 * a * i * 5 / 6, g = "I";
        break;
      case "Steel Tube":
        f = s * a - (s - 2 * c) * (a - 2 * c), d = (a * s ** 3 - (a - 2 * c) * (s - 2 * c) ** 3) / 12, I = (s * a ** 3 - (s - 2 * c) * (a - 2 * c) ** 3) / 12, A = 2 * c * (s - c) * (a - c) * ((s - c) * (a - c)) / (s - c + (a - c)), F = 2 * s * c, M = 2 * a * c, g = "HSS";
        break;
      case "Filled Steel Tube": {
        const C = (n == null ? void 0 : n.E) || 0, H = t.fillMaterial ? p.get(t.fillMaterial) : void 0, x = (H == null ? void 0 : H.E) || C * 0.125, j = jt(a, s, c || i, C || 1, (n == null ? void 0 : n.nu) ?? 0.3, x || 0.125, (H == null ? void 0 : H.nu) ?? 0.2);
        f = j.A, d = j.Iz, I = j.Iy, A = j.J, M = j.As2, F = j.As3, S = x, g = "CFT";
        break;
      }
      case "Steel Angle": {
        const C = i || c;
        f = C * (s + a - C), d = C * (s ** 3 + a * C ** 2 + C ** 2 * (s - C)) / 12, I = C * (a ** 3 + s * C ** 2 + C ** 2 * (a - C)) / 12, A = (s + a - C) * C ** 3 / 3, F = s * C, M = a * C, g = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        f = 2 * a * i + (s - 2 * i) * c, d = (c * s ** 3 + 2 * a * i * (s - i) ** 2) / 12, I = (2 * i * a ** 3 + (s - 2 * i) * c ** 3) / 12, A = (2 * a * i ** 3 + (s - 2 * i) * c ** 3) / 3, F = (s - 2 * i) * c, M = 2 * a * i * 5 / 6, g = t.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        f = 2 * (2 * a * i + (s - 2 * i) * c), d = 2 * (c * s ** 3 + 2 * a * i * (s - i) ** 2) / 12, I = 2 * (2 * i * a ** 3 + (s - 2 * i) * c ** 3) / 12, A = 2 * (2 * a * i ** 3 + (s - 2 * i) * c ** 3) / 3, F = 2 * (s - 2 * i) * c, M = 4 * a * i * 5 / 6, g = "2C";
        break;
      case "General":
        if (t.AREA && t.AREA > 0) {
          f = t.AREA, d = t.I33 ?? 0, I = t.I22 ?? 0, A = t.TORSION ?? 0, M = t.AS2 ?? 0, F = t.AS3 ?? 0, g = "general";
          break;
        }
      default:
        s > 0 && a > 0 && (f = s * a, d = a * s ** 3 / 12, I = s * a ** 3 / 12, A = Math.min(s, a) * Math.max(s, a) ** 3 / 3 * 0.3, F = M = 5 / 6 * f);
        break;
    }
    t.modI2 && (I *= t.modI2), t.modI3 && (d *= t.modI3), ft.set(o, f), St.set(o, d), Tt.set(o, I), Nt.set(o, A), F > 0 && At.set(o, F), M > 0 && Mt.set(o, M), pt.set(o, { type: g, ...S > 0 ? { fillE: S } : {}, b: a || void 0, h: s || void 0, d: g === "circ" || g === "pipe" ? s : void 0, tw: c || void 0, tf: i || void 0, r: t.R, name: e });
  }
  const dt = /* @__PURE__ */ new Map();
  for (const [o, e] of u) {
    const t = q.get(o);
    if (t === void 0) continue;
    const n = [false, false, false, false, false, false];
    for (const s of e) s === "UX" && (n[0] = true), s === "UY" && (n[1] = true), s === "UZ" && (n[2] = true), s === "RX" && (n[3] = true), s === "RY" && (n[4] = true), s === "RZ" && (n[5] = true);
    dt.set(t, n);
  }
  const Y = /* @__PURE__ */ new Map(), kt = /* @__PURE__ */ new Map();
  for (let o = 0; o < X.length; o++) kt.set(`${X[o]}@${_[o]}`, o);
  for (const o of J) {
    const e = kt.get(`${o.line}@${o.story}`);
    if (e === void 0) continue;
    const [t, n] = U[e], s = k[t], a = k[n], i = Math.sqrt((a[0] - s[0]) ** 2 + (a[1] - s[1]) ** 2 + (a[2] - s[2]) ** 2);
    if (i < 1e-10) continue;
    const c = [0, 0, 0];
    o.dir === "GRAV" || o.dir === "GRAVITY" ? c[2] = -o.val : o.dir === "X" ? c[0] = o.val : o.dir === "Y" ? c[1] = o.val : o.dir === "Z" && (c[2] = o.val);
    const f = [(a[0] - s[0]) / i, (a[1] - s[1]) / i, (a[2] - s[2]) / i], d = i * i / 12, I = [f[1] * c[2] - f[2] * c[1], f[2] * c[0] - f[0] * c[2], f[0] * c[1] - f[1] * c[0]], A = (F, M) => {
      const g = Y.get(F) || [0, 0, 0, 0, 0, 0];
      for (let S = 0; S < 6; S++) g[S] += M[S];
      Y.set(F, g);
    };
    A(t, [c[0] * i / 2, c[1] * i / 2, c[2] * i / 2, d * I[0], d * I[1], d * I[2]]), A(n, [c[0] * i / 2, c[1] * i / 2, c[2] * i / 2, -d * I[0], -d * I[1], -d * I[2]]);
  }
  const st = /* @__PURE__ */ new Map();
  for (const [o, e] of ct) {
    const t = h.get(e);
    if (!t) continue;
    const n = p.get(t.material);
    (n == null ? void 0 : n.density) && st.set(o, n.density);
  }
  const mt = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map(), Ut = /* @__PURE__ */ new Map(), Yt = /* @__PURE__ */ new Map(), Rt = [], v = { sinAssign: 0, sinNudo: 0, colapsada: 0, poligono: 0 };
  for (const o of R) {
    const e = L.get(o.name);
    if (!e) {
      v.sinAssign++;
      continue;
    }
    if (o.pts.length > 4) {
      v.poligono++;
      continue;
    }
    const t = o.pts.map((c, f) => {
      const d = wt(e.story, o.dz[f] ?? 0);
      return d === void 0 ? void 0 : q.get($(c, d));
    });
    if (t.some((c) => c === void 0)) {
      v.sinNudo++;
      continue;
    }
    const n = [...new Set(t)];
    if (n.length < 3) {
      v.colapsada++;
      continue;
    }
    const s = n.length === 3 ? n : t.slice(0, 4), a = U.length;
    U.push(s), X.push(o.name), It.push(o.tipo), _.push(e.story), Rt.push(o.name), e.spring && gt.set(a, e.spring);
    const i = O.get(e.section);
    if (i) {
      mt.set(a, i.t);
      const c = p.get(i.material);
      (c == null ? void 0 : c.E) && rt.set(a, c.E), (c == null ? void 0 : c.G) && lt.set(a, c.G), (c == null ? void 0 : c.nu) !== void 0 && $t.set(a, c.nu), (c == null ? void 0 : c.density) && st.set(a, c.density);
      const f = /membrane/i.test(i.modeling);
      Ut.set(a, /thick/i.test(i.modeling) || f ? 0 : 1);
      const d = i.mods ? i.mods.slice(0, 8) : [1, 1, 1, 1, 1, 1, 1, 1];
      f && (d[3] = 0, d[4] = 0, d[5] = 0, d[6] = 0, d[7] = 0), (i.mods || f) && Yt.set(a, d);
    }
  }
  const ht = /* @__PURE__ */ new Map();
  for (let o = 0; o < X.length; o++) U[o].length > 2 && ht.set(`${X[o]}@${_[o]}`, o);
  let yt = 0;
  for (const o of ot) {
    const e = q.get($(o.pt, o.story));
    if (e === void 0) {
      yt++;
      continue;
    }
    const t = Y.get(e) || [0, 0, 0, 0, 0, 0];
    for (let n = 0; n < 6; n++) t[n] += o.v[n];
    Y.set(e, t);
  }
  ot.length && console.log(`[e2kParser] cargas puntuales: ${ot.length - yt} aplicadas \xB7 ${yt} sin nudo (punto@planta que no existe)`);
  let Bt = 0, zt = 0, Wt = 0, Zt = 0;
  for (const o of et) {
    const e = ht.get(`${o.area}@${o.story}`) ?? ht.get(`${o.area}@`), t = e !== void 0 ? e : (_m = [...ht].find(([S]) => S.startsWith(o.area + "@"))) == null ? void 0 : _m[1];
    if (t === void 0) {
      zt++;
      continue;
    }
    const n = U[t], s = n.map((S) => k[S]).filter(Boolean);
    if (s.length < 3) continue;
    let a = 0, i = 0, c = 0;
    for (let S = 0; S < s.length; S++) {
      const b = s[S], B = s[(S + 1) % s.length];
      a += b[1] * B[2] - b[2] * B[1], i += b[2] * B[0] - b[0] * B[2], c += b[0] * B[1] - b[1] * B[0];
    }
    const f = Math.hypot(a, i, c) / 2;
    if (!(f > 0)) continue;
    const d = o.tipo === "UNIFLOADSET" ? Q.get(o.set ?? "") ?? [] : [{ lc: o.lc, val: o.val }];
    let I = 0;
    for (const S of d) I += S.val;
    if (!I) {
      Wt++;
      continue;
    }
    Zt++;
    const A = I * f / s.length;
    Bt += I * f;
    let F = 0, M = 0, g = 0;
    o.dir === "GRAV" || o.dir === "GRAVITY" || o.dir === "Z" ? g = -A : o.dir === "X" ? F = A : o.dir === "Y" && (M = A);
    for (const S of n) {
      const b = Y.get(S) || [0, 0, 0, 0, 0, 0];
      b[0] += F, b[1] += M, b[2] += g, Y.set(S, b);
    }
  }
  et.length && console.info(`[e2kParser] cargas de losa: ${Zt} aplicadas \xB7 ${zt} sin area que las lleve \xB7 ${Wt} sin valor \xB7 total ${Bt.toFixed(0)} (unidades del fichero) \xB7 ${Q.size} juegos con nombre`);
  const Ht = v.sinAssign + v.sinNudo + v.colapsada + v.poligono;
  if (Ht) {
    const o = [v.poligono && `${v.poligono} son POLIGONOS de mas de 4 lados (ETABS los admite, hekatan-fem tiene Q4 y T3: habria que triangularlos)`, v.sinAssign && `${v.sinAssign} sin AREAASSIGN`, v.sinNudo && `${v.sinNudo} con algun nudo que no resuelve a planta`, v.colapsada && `${v.colapsada} colapsadas (menos de 3 nudos distintos)`].filter(Boolean).join(" \xB7 ");
    console.warn(`[e2kParser] ${Ht} de ${R.length} areas no se montaron: ${o}. Se pierden, y el modelo sale mas flojo sin que la geometria lo delate.`);
  }
  const Xt = { MM: 1e-3, CM: 0.01, M: 1, IN: 0.0254, FT: 0.3048 }, Kt = { N: 1e-3, KN: 1, KGF: 980665e-8, TONF: 9.80665, LB: 444822e-8, KIP: 4.44822 }, N = Xt[(l.length || "M").toUpperCase()] ?? 1, Z = Kt[(l.force || "KN").toUpperCase()] ?? 1;
  if (N !== 1 || Z !== 1) {
    const o = (e, t) => {
      if (e) for (const [n, s] of e) e.set(n, s * t);
    };
    for (const e of k) e[0] *= N, e[1] *= N, e[2] *= N;
    for (const e of r) e.height *= N, e.elev *= N;
    for (const e of Et) e.coord *= N;
    for (const e of ut) e.z *= N;
    o(mt, N), o(ft, N * N), o(At, N * N), o(Mt, N * N), o(Tt, N ** 4), o(St, N ** 4), o(Nt, N ** 4), o(rt, Z / (N * N)), o(lt, Z / (N * N)), o(st, Z / N ** 3);
    for (const [e, t] of it) it.set(e, [t[0] * N, t[1] * N]);
    for (const [e, t] of tt) tt.set(e, [t[0] * N, t[1] * N, t[2]]);
    for (const [e, t] of Y) Y.set(e, t.map((n, s) => n * (s < 3 ? Z : Z * N)));
    for (const [, e] of G) {
      const t = e.tipo === "point" ? 1 : e.tipo === "line" ? 2 : 3;
      for (let n = 0; n < 6; n++) e.k[n] *= n < 3 ? Z / N ** t : Z * N / N ** (t - 1);
    }
    for (const [, e] of pt) {
      for (const t of ["d", "b", "h", "tf", "tw", "t", "r", "lip", "dis", "D", "B", "TF", "TW"]) {
        const n = e;
        typeof n[t] == "number" && (n[t] *= N);
      }
      typeof e.fillE == "number" && (e.fillE *= Z / (N * N));
    }
  }
  {
    const o = Vt(U, dt);
    o.nPiezasFlotantes && console.warn(`[e2kParser] ${o.nPiezasFlotantes} trozos (${o.nNudosFlotantes} nudos) no llegan a ningun apoyo: la matriz sale SINGULAR y el modelo no resuelve. En ETABS los sujetan links, muelles de pilote o diafragmas, que este lector aun no importa.`);
  }
  const qt = () => {
    if (!(K > 0)) return Y;
    let o = 0;
    const e = (t, n) => {
      const s = Y.get(t) || [0, 0, 0, 0, 0, 0];
      s[2] += n, Y.set(t, s), o += n;
    };
    return U.forEach((t, n) => {
      const s = st.get(n);
      if (!s) return;
      const a = t;
      if (a.length === 2) {
        const i = ft.get(n) ?? 0, c = k[a[0]], f = k[a[1]], d = tt.get(n), I = f[0] - c[0], A = f[1] - c[1], F = f[2] - c[2], M = Math.hypot(I, A), g = M > 1e-9 && Math.atan2(Math.abs(F), M) * 180 / Math.PI < 20, S = Math.max(0, Math.hypot(I, A, F) - (d && g ? d[0] + d[1] : 0)), b = s * i * S * K;
        e(a[0], -b / 2), e(a[1], -b / 2);
      } else if (a.length >= 3) {
        const i = mt.get(n) ?? 0, c = a.map((M) => k[M]);
        let f = 0, d = 0, I = 0;
        for (let M = 0; M < c.length; M++) {
          const g = c[M], S = c[(M + 1) % c.length];
          f += g[1] * S[2] - g[2] * S[1], d += g[2] * S[0] - g[0] * S[2], I += g[0] * S[1] - g[1] * S[0];
        }
        const A = Math.hypot(f, d, I) / 2, F = s * i * A * K;
        for (const M of a) e(M, -F / a.length);
      }
    }), console.log(`[e2kParser] peso propio (SELFWEIGHT ${K}): ${o.toFixed(3)} kN repartidos a los nudos`), Y;
  };
  return { units: l, stories: r.reverse(), materials: p, frameSections: h, nodes: k, nodeNames: Pt, nodeNameToIdx: q, elements: U, elementNames: X, elementTypes: It, elementStories: _, elementSections: ct, nodeInputs: { supports: dt, loads: qt(), springNames: bt }, elementInputs: { elasticities: rt, shearModuli: lt, areas: ft, momentsOfInertiaZ: St, momentsOfInertiaY: Tt, torsionalConstants: Nt, shearAreasY: At, shearAreasZ: Mt, rigidOffsets: it, momentReleases: vt, localAngles: Dt, endOffsets: tt, densities: st, sectionShapes: pt, thicknesses: mt, poissonsRatios: $t, plateFormulations: Ut, shellModifiers: Yt, springNames: gt, mallaEnCruces: xt }, sectionShapes: pt, grids: Et, planosRef: ut, springProps: G, info: { ...Vt(U, dt), nNodes: k.length, nFrames: U.length - Rt.length, nAreas: R.length, nAreasMontadas: Rt.length, nSDCompuestas: Gt, nSDLeidas: P.size, title: Ct }, rawSections: nt };
}
function Vt(E, m) {
  const l = /* @__PURE__ */ new Map();
  for (const R of E) for (const L of R) for (const O of R) L !== O && (l.has(L) || l.set(L, []), l.get(L).push(O));
  const r = /* @__PURE__ */ new Set();
  for (const R of E) for (const L of R) r.add(L);
  const p = new Set([...m ?? /* @__PURE__ */ new Map()].map(([R]) => R)), h = /* @__PURE__ */ new Set();
  let T = 0, y = 0;
  for (const R of r) {
    if (h.has(R)) continue;
    const L = [R], O = [];
    for (h.add(R); L.length; ) {
      const P = L.pop();
      O.push(P);
      for (const u of l.get(P) ?? []) h.has(u) || (h.add(u), L.push(u));
    }
    O.some((P) => p.has(P)) || (T++, y += O.length);
  }
  return { nPiezasFlotantes: T, nNudosFlotantes: y };
}
export {
  Vt as a,
  cs as p
};
