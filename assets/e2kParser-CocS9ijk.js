import { a as Qt, c as _t } from "./cadSections-DVtTZU6U.js";
const Ct = 64, ts = (h) => h * Math.PI / 180;
function Ot(h, m = Ct) {
  switch (h.tipo) {
    case "rect": {
      const { d: l, b: r } = h;
      return [[-r / 2, -l / 2], [r / 2, -l / 2], [r / 2, l / 2], [-r / 2, l / 2]];
    }
    case "circle": {
      const l = h.d / 2, r = [];
      for (let p = 0; p < m; p++) {
        const E = 2 * Math.PI * p / m;
        r.push([l * Math.cos(E), l * Math.sin(E)]);
      }
      return r;
    }
    case "angle": {
      const { d: l, b: r, tf: p, tw: E } = h;
      return [[0, 0], [r, 0], [r, p], [E, p], [E, l], [0, l]].map(([T, F]) => [T - r / 2, F - l / 2]);
    }
    case "channel": {
      const { d: l, b: r, tf: p, tw: E } = h;
      return [[0, 0], [r, 0], [r, p], [E, p], [E, l - p], [r, l - p], [r, l], [0, l]].map(([T, F]) => [T - r / 2, F - l / 2]);
    }
    case "tee": {
      const { d: l, b: r, tf: p, tw: E } = h, T = (r - E) / 2;
      return [[0, l - p], [r, l - p], [r, l], [0, l]].concat([]) && [[T, 0], [T + E, 0], [T + E, l - p], [r, l - p], [r, l], [0, l], [0, l - p], [T, l - p]].map(([F, R]) => [F - r / 2, R - l / 2]);
    }
    case "isection": {
      const { d: l, b: r, tf: p, tw: E } = h, T = (r - E) / 2;
      return [[0, 0], [r, 0], [r, p], [T + E, p], [T + E, l - p], [r, l - p], [r, l], [0, l], [0, l - p], [T, l - p], [T, p], [0, p]].map(([F, R]) => [F - r / 2, R - l / 2]);
    }
    case "polygon":
      return h.puntos.slice();
    default:
      return [];
  }
}
function ss(h, m = Ct) {
  if (h.tipo === "tube") {
    const { d: l, b: r, tf: p, tw: E } = h, T = l / 2 - p, F = r / 2 - E;
    return [[[-F, -T], [-F, T], [F, T], [F, -T]]];
  }
  if (h.tipo === "pipe") {
    const l = h.d / 2 - h.t, r = [];
    for (let p = m - 1; p >= 0; p--) {
      const E = 2 * Math.PI * p / m;
      r.push([l * Math.cos(E), l * Math.sin(E)]);
    }
    return [r];
  }
  return [];
}
function es(h, m = Ct) {
  return h.tipo === "tube" ? Ot({ tipo: "rect", d: h.d, b: h.b }) : h.tipo === "pipe" ? Ot({ tipo: "circle", d: h.d }, m) : Ot(h, m);
}
function os(h) {
  let m = 0, l = 0, r = 0, p = 0, E = 0, T = 0;
  for (let L = 0; L < h.length; L++) {
    const [C, w] = h[L], [u, D] = h[(L + 1) % h.length], G = C * D - u * w;
    m += G, l += (C + u) * G, r += (w + D) * G, p += (w * w + w * D + D * D) * G, E += (C * C + C * u + u * u) * G, T += (C * D + 2 * C * w + 2 * u * D + u * w) * G;
  }
  if (m /= 2, Math.abs(m) < 1e-18) return { A: 0, cx: 0, cy: 0, Ixx: 0, Iyy: 0, Ixy: 0 };
  const F = l / (6 * m), R = r / (6 * m);
  return { A: m, cx: F, cy: R, Ixx: p / 12 - m * R * R, Iyy: E / 12 - m * F * F, Ixy: T / 24 - m * F * R };
}
function ns(h, m) {
  const l = ts(m.rot ?? 0), r = Math.cos(l), p = Math.sin(l), E = m.mirror ? -1 : 1, T = h.map(([F, R]) => {
    const L = F * E;
    return [L * r - R * p + (m.xc ?? 0), L * p + R * r + (m.yc ?? 0)];
  });
  return m.mirror ? T.reverse() : T;
}
function as(h, m) {
  let l = 0, r = 0, p = 0;
  const E = [];
  for (const u of h) {
    const D = m > 0 && u.E ? u.E / m : 1;
    if (u.forma.tipo === "rebar") {
      const W = u.forma.area * D;
      E.push({ A: W, cx: u.xc ?? 0, cy: u.yc ?? 0, Ixx: 0, Iyy: 0, Ixy: 0, n: 1 }), l += W, r += W * (u.xc ?? 0), p += W * (u.yc ?? 0);
      continue;
    }
    const G = [es(u.forma), ...ss(u.forma)];
    for (const W of G) {
      if (W.length < 3) continue;
      const J = os(ns(W, u)), X = J.A * D;
      E.push({ ...J, A: X, n: D }), l += X, r += X * J.cx, p += X * J.cy;
    }
  }
  if (Math.abs(l) < 1e-18) return { A: 0, Iz: 0, Iy: 0, Ixy: 0, J: 0, cx: 0, cy: 0, As2: 0, As3: 0, nPiezas: h.length };
  const T = r / l, F = p / l;
  let R = 0, L = 0, C = 0;
  for (const u of E) R += u.Ixx * u.n + u.A * (u.cy - F) ** 2, L += u.Iyy * u.n + u.A * (u.cx - T) ** 2, C += u.Ixy * u.n + u.A * (u.cx - T) * (u.cy - F);
  const w = (R + L) * 0.1;
  return { A: l, Iz: R, Iy: L, Ixy: C, J: w, cx: T, cy: F, As2: 5 / 6 * l, As3: 5 / 6 * l, nPiezas: h.length };
}
function cs(h, m, l, r, p) {
  switch ((h || "").toUpperCase()) {
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
function rs(h) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const m = h.split(/\r?\n/), l = { force: "TONF", length: "M" }, r = [], p = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), F = [], R = [], L = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Set(), X = [], ot = [], Q = /* @__PURE__ */ new Map(), nt = [];
  let q = 0;
  const It = [], gt = [];
  let Pt = "", x = "";
  const at = /* @__PURE__ */ new Map();
  for (const o of m) {
    const e = o.trim();
    if (!e || e.startsWith("$")) {
      e.startsWith("$ ") && (x = e.substring(2).trim());
      continue;
    }
    if (x && (at.has(x) || at.set(x, []), at.get(x).push(o)), x === "CONTROLS") {
      const t = e.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
      t && (l.force = t[1], l.length = t[2]);
      const n = e.match(/TITLE2\s+"([^"]+)"/);
      n && (Pt = n[1]);
    }
    if (x === "STORIES - IN SEQUENCE FROM TOP") {
      const t = e.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
      if (t) {
        const n = t[1], s = t[2] ? parseFloat(t[2]) : 0, a = t[3] ? parseFloat(t[3]) : void 0;
        r.push({ name: n, height: s, elev: a ?? 0 });
      }
    }
    if (x === "MATERIAL PROPERTIES") {
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
    if (x === "FRAME SECTIONS") {
      const t = e.match(/FRAMESECTION\s+"([^"]+)"/);
      if (t) {
        const n = t[1];
        E.has(n) || E.set(n, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
        const s = E.get(n), a = e.match(/MATERIAL\s+"([^"]+)"/);
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
        const y = e.match(/FILLMATERIAL\s+"([^"]+)"/);
        y && (s.fillMaterial = y[1]);
        const M = e.match(/I2MOD\s+([\d.eE+-]+)/);
        M && (s.modI2 = parseFloat(M[1]));
        const g = e.match(/I3MOD\s+([\d.eE+-]+)/);
        g && (s.modI3 = parseFloat(g[1]));
        for (const [z, ut] of [["AREA", /\bAREA\s+([\d.eE+-]+)/], ["AS2", /\bAS2\s+([\d.eE+-]+)/], ["AS3", /\bAS3\s+([\d.eE+-]+)/], ["I33", /\bI33\s+([\d.eE+-]+)/], ["I22", /\bI22\s+([\d.eE+-]+)/], ["TORSION", /\bTORSION\s+([\d.eE+-]+)/]]) {
          const O = e.match(ut);
          O && (s[z] = parseFloat(O[1]));
        }
        const S = e.match(/\bT\s+([\d.eE+-]+)/);
        S && !s.TF && !s.TW && (s.TF = parseFloat(S[1]), s.TW = parseFloat(S[1]));
        const P = e.match(/\bLIP\s+([\d.eE+-]+)/);
        P && (s.LIP = parseFloat(P[1]));
      }
    }
    if (x === "POINT COORDINATES") {
      const t = e.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)(?:\s+([-\d.eE+]+))?/);
      t && T.set(t[1], [parseFloat(t[2]), parseFloat(t[3]), parseFloat(t[4] ?? "0") || 0]);
    }
    if (x === "LINE CONNECTIVITIES") {
      const t = e.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
      t && F.push({ name: t[1], type: t[2], pt1: t[3], pt2: t[4], nStories: parseInt(t[5]) });
    }
    if (x === "POINT ASSIGNS") {
      const t = e.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
      t && u.set(`${t[1]}@${t[2]}`, t[3].split(/\s+/));
      const n = e.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)"/);
      n && J.add(`${n[1]}@${n[2]}`);
      const s = e.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*SPRINGPROP\s+"([^"]+)"/);
      s && W.set(`${s[1]}@${s[2]}`, s[3]);
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
    if (x === "LINE ASSIGNS") {
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
    if (x === "GRIDS") {
      const t = e.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
      t && It.push({ label: t[1], dir: t[2], coord: parseFloat(t[3]) });
      const n = e.match(/^\s*REFERENCEPLANE\s.*\sZ\s+([-\d.eE+]+)/);
      n && gt.push({ z: parseFloat(n[1]) });
    }
    if (x === "FRAME OBJECT LOADS") {
      const t = e.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      t && X.push({ line: t[1], story: t[2], type: t[3], dir: t[4], lc: t[5], val: parseFloat(t[6]) });
    }
    {
      const t = e.match(/SHELLUNIFORMLOADSET\s+"([^"]+)"\s+LOADPAT\s+"([^"]+)"\s+VALUE\s+([-\d.eE+]+)/);
      t && (Q.has(t[1]) || Q.set(t[1], []), Q.get(t[1]).push({ lc: t[2], val: parseFloat(t[3]) }));
    }
    if (x === "LOAD PATTERNS") {
      const t = e.match(/LOADPATTERN\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+SELFWEIGHT\s+([\d.eE+-]+)/);
      t && /dead/i.test(t[2]) && (q = Math.max(q, parseFloat(t[3])));
    }
    if (x === "POINT OBJECT LOADS") {
      const t = e.match(/POINTLOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"FORCE"\s+LC\s+"([^"]+)"\s+FX\s+([-\d.eE+]+)\s+FY\s+([-\d.eE+]+)\s+FZ\s+([-\d.eE+]+)\s+MX\s+([-\d.eE+]+)\s+MY\s+([-\d.eE+]+)\s+MZ\s+([-\d.eE+]+)/);
      t && nt.push({ pt: t[1], story: t[2], lc: t[3], v: t.slice(4, 10).map(Number) });
    }
    if (x === "SHELL OBJECT LOADS") {
      const t = e.match(/AREALOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"UNIFF"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      if (t) ot.push({ area: t[1], story: t[2], tipo: "UNIFF", dir: t[3], lc: t[4], val: parseFloat(t[5]) });
      else {
        const n = e.match(/AREALOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"UNIFLOADSET"\s+"([^"]+)"/);
        n && ot.push({ area: n[1], story: n[2], tipo: "UNIFLOADSET", dir: "GRAV", lc: "", val: 0, set: n[3] });
      }
    }
    if (x === "AREA CONNECTIVITIES") {
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
        w.has(t) || w.set(t, []), w.get(t).push({ shapeType: n, material: ((_e = e.match(/MATERIAL\s+"([^"]+)"/)) == null ? void 0 : _e[1]) ?? "", D: s(/\bD\s+([\d.eE+-]+)/), B: s(/\bB\s+([\d.eE+-]+)/), TF: s(/\bTF\s+([\d.eE+-]+)/), TW: s(/\bTW\s+([\d.eE+-]+)/), XC: s(/\bXC\s+(-?[\d.eE+-]+)/), YC: s(/\bYC\s+(-?[\d.eE+-]+)/) });
      }
    }
    if (x === "AREA ASSIGNS") {
      const t = e.match(/AREAASSIGN\s+"([^"]+)"\s+"([^"]+)"\s+SECTION\s+"([^"]+)"/);
      t && L.set(t[1], { story: t[2], section: t[3], spring: (_f = e.match(/SPRINGPROP\s+"([^"]+)"/)) == null ? void 0 : _f[1] });
    }
    if (e.startsWith("SHELLPROP")) {
      const t = (_g = e.match(/SHELLPROP\s+"([^"]+)"/)) == null ? void 0 : _g[1];
      if (t) {
        const n = (f) => {
          const d = e.match(f);
          return d ? parseFloat(d[1]) : void 0;
        }, s = n(/SLABTHICKNESS\s+([\d.eE+-]+)/) ?? n(/WALLTHICKNESS\s+([\d.eE+-]+)/) ?? ((n(/DECKSLABDEPTH\s+([\d.eE+-]+)/) ?? 0) + (n(/DECKRIBDEPTH\s+([\d.eE+-]+)/) ?? 0) || void 0), i = ["F11MOD", "F22MOD", "F12MOD", "M11MOD", "M22MOD", "M12MOD", "V13MOD", "V23MOD"].map((f) => n(new RegExp(f + "\\s+([\\d.eE+-]+)"))), c = C.get(t);
        if (i.some((f) => f !== void 0)) {
          const f = i.map((d) => d ?? 1);
          C.set(t, { t: (c == null ? void 0 : c.t) ?? 0, material: (c == null ? void 0 : c.material) ?? "", modeling: (c == null ? void 0 : c.modeling) ?? "ShellThin", mods: f });
        } else s !== void 0 && C.set(t, { t: s, mods: c == null ? void 0 : c.mods, material: ((_h = e.match(/MATERIAL\s+"([^"]+)"/)) == null ? void 0 : _h[1]) ?? ((_i = e.match(/CONCMATERIAL\s+"([^"]+)"/)) == null ? void 0 : _i[1]) ?? "", modeling: ((_j = e.match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _j[1]) ?? (/PROPTYPE\s+"Deck"/.test(e) ? "Membrane" : "ShellThin") });
      }
    }
  }
  const ct = /* @__PURE__ */ new Map();
  if (r.length > 0) {
    const o = r.length - 1;
    ct.set(r[o].name, r[o].elev);
    for (let e = o - 1; e >= 0; e--) {
      const n = ct.get(r[e + 1].name) + r[e].height;
      r[e].elev = n, ct.set(r[e].name, n);
    }
  }
  const $ = [], bt = [], j = /* @__PURE__ */ new Map(), U = (o, e) => `${o}@${e}`, Z = /* @__PURE__ */ new Set(), Xt = /* @__PURE__ */ new Map();
  for (const o of F) Xt.set(o.name, o);
  for (const o of F) for (const [e, t] of D) {
    if (!e.startsWith(o.name + "@")) continue;
    const n = t.story, s = r.findIndex((a) => a.name === n);
    if (!(s < 0)) if (o.type === "COLUMN" || o.type === "BRACE") {
      Z.add(U(o.pt2, n));
      const a = Math.min(s + o.nStories, r.length - 1);
      Z.add(U(o.pt1, r[a].name));
      for (let i = s + 1; i < a; i++) Z.add(U(o.pt1, r[i].name));
    } else Z.add(U(o.pt1, n)), Z.add(U(o.pt2, n));
  }
  for (const [o] of u) Z.add(o);
  for (const o of J) Z.add(o);
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
      s && Z.add(U(t, s));
    });
  }
  const xt = /* @__PURE__ */ new Map();
  for (const o of Z) {
    const [e, t] = o.split("@"), n = T.get(e), s = ct.get(t);
    if (n === void 0 || s === void 0) continue;
    $.push([n[0], n[1], s - (n[2] ?? 0)]), bt.push(o), j.set(o, $.length - 1);
    const a = W.get(o);
    a && xt.set($.length - 1, a);
  }
  const Y = [], K = [], At = [], _ = [], it = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map(), vt = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), Dt = /* @__PURE__ */ new Map(), Gt = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map();
  for (const o of F) for (const [e, t] of D) {
    if (!e.startsWith(o.name + "@")) continue;
    const n = t.story, s = r.findIndex((f) => f.name === n);
    if (s < 0) continue;
    const a = [];
    if (o.type === "COLUMN" || o.type === "BRACE") {
      const f = Math.min(s + o.nStories, r.length - 1);
      for (let d = f; d > s; d--) a.push(U(o.pt1, r[d].name));
      a.push(U(o.pt2, n));
    } else a.push(U(o.pt1, n), U(o.pt2, n));
    const i = a.map((f) => j.get(f)).filter((f) => f !== void 0);
    if (i.length < 2) continue;
    const c = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
    for (let f = 0; f < i.length - 1; f++) {
      const d = i[f], I = i[f + 1];
      if (d === I) continue;
      const A = Y.length;
      if (Y.push([d, I]), K.push(i.length > 2 ? `${o.name}-${f + 1}` : o.name), At.push(o.type), _.push(n), it.set(A, t.section), t.spring && Mt.set(A, t.spring), t.mallaEnCruces && vt.set(A, true), t.rigidZone > 0 && rt.set(A, [t.rigidZone, t.rigidZone]), t.angle && Gt.set(A, t.angle), t.offsets && tt.set(A, [t.offsets[0], t.offsets[1], t.rigidZone]), t.releases.length > 0) {
        const y = new Array(12).fill(false);
        for (const M of t.releases) {
          const g = c[M];
          g !== void 0 && (g < 6 && f !== 0 || g >= 6 && f !== i.length - 2 || (y[g] = true));
        }
        y.some(Boolean) && Dt.set(A, y);
      }
    }
  }
  const lt = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), Rt = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map();
  let kt = 0;
  for (const [o, e] of it) {
    const t = E.get(e);
    if (!t) continue;
    const n = p.get(t.material);
    n && (lt.set(o, n.E), ft.set(o, n.G));
    const s = t.D, a = t.B, i = t.TF, c = t.TW;
    let f = 0, d = 0, I = 0, A = 0, y = 0, M = 0, g = "rect", S = 0, P = false, z = false;
    const ut = w.get(e);
    if (t.shape === "SD Section" && (ut == null ? void 0 : ut.length)) {
      const O = (n == null ? void 0 : n.E) || ((_k = p.get(t.material)) == null ? void 0 : _k.E) || 0, V = [];
      for (const b of ut) {
        const et = cs(b.shapeType, b.D, b.B, b.TF, b.TW);
        et && V.push({ forma: et, xc: b.XC, yc: b.YC, E: ((_l = p.get(b.material)) == null ? void 0 : _l.E) || O });
      }
      if (V.length) {
        const b = as(V, O);
        b.A > 0 && (f = b.A, d = b.Iz, I = b.Iy, A = b.J, y = b.As2, M = b.As3, g = "rect", z = true, kt++);
      }
    }
    if (!z) switch (t.shape) {
      case "Concrete Rectangular":
        f = s * a, d = a * s ** 3 / 12, I = s * a ** 3 / 12, A = a * s ** 3 * (1 / 3 - 0.21 * (s / a) * (1 - s ** 4 / (12 * a ** 4))), y = M = 5 / 6 * f, g = "rect";
        break;
      case "Concrete Circle":
        f = Math.PI * s ** 2 / 4, d = I = Math.PI * s ** 4 / 64, A = Math.PI * s ** 4 / 32, y = M = 0.9 * f, g = "circ";
        break;
      case "Steel I/Wide Flange":
        f = 2 * a * i + (s - 2 * i) * c, d = (a * s ** 3 - (a - c) * (s - 2 * i) ** 3) / 12, I = (2 * i * a ** 3 + (s - 2 * i) * c ** 3) / 12, A = (2 * a * i ** 3 + (s - 2 * i) * c ** 3) / 3, y = (s - 2 * i) * c, M = 2 * a * i * 5 / 6, g = "I";
        break;
      case "Steel Tube":
        f = s * a - (s - 2 * c) * (a - 2 * c), d = (a * s ** 3 - (a - 2 * c) * (s - 2 * c) ** 3) / 12, I = (s * a ** 3 - (s - 2 * c) * (a - 2 * c) ** 3) / 12, A = 2 * c * (s - c) * (a - c) * ((s - c) * (a - c)) / (s - c + (a - c)), y = 2 * s * c, M = 2 * a * c, g = "HSS";
        break;
      case "Filled Steel Pipe": {
        const O = (n == null ? void 0 : n.E) || 0, V = t.fillMaterial ? p.get(t.fillMaterial) : void 0, b = (V == null ? void 0 : V.E) || O * 0.125, et = t.T || c || i, k = _t(s, et, O || 1, (n == null ? void 0 : n.nu) ?? 0.3, b || 0.125, (V == null ? void 0 : V.nu) ?? 0.2);
        f = k.A, d = k.Iz, I = k.Iy, A = k.J, M = k.As2, y = k.As3, S = b, P = true, g = "CFT";
        break;
      }
      case "Filled Steel Tube": {
        const O = (n == null ? void 0 : n.E) || 0, V = t.fillMaterial ? p.get(t.fillMaterial) : void 0, b = (V == null ? void 0 : V.E) || O * 0.125, k = Qt(a, s, c || i, O || 1, (n == null ? void 0 : n.nu) ?? 0.3, b || 0.125, (V == null ? void 0 : V.nu) ?? 0.2);
        f = k.A, d = k.Iz, I = k.Iy, A = k.J, M = k.As2, y = k.As3, S = b, g = "CFT";
        break;
      }
      case "Steel Angle": {
        const O = i || c;
        f = O * (s + a - O), d = O * (s ** 3 + a * O ** 2 + O ** 2 * (s - O)) / 12, I = O * (a ** 3 + s * O ** 2 + O ** 2 * (a - O)) / 12, A = (s + a - O) * O ** 3 / 3, y = s * O, M = a * O, g = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        f = 2 * a * i + (s - 2 * i) * c, d = (c * s ** 3 + 2 * a * i * (s - i) ** 2) / 12, I = (2 * i * a ** 3 + (s - 2 * i) * c ** 3) / 12, A = (2 * a * i ** 3 + (s - 2 * i) * c ** 3) / 3, y = (s - 2 * i) * c, M = 2 * a * i * 5 / 6, g = t.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        f = 2 * (2 * a * i + (s - 2 * i) * c), d = 2 * (c * s ** 3 + 2 * a * i * (s - i) ** 2) / 12, I = 2 * (2 * i * a ** 3 + (s - 2 * i) * c ** 3) / 12, A = 2 * (2 * a * i ** 3 + (s - 2 * i) * c ** 3) / 3, y = 2 * (s - 2 * i) * c, M = 4 * a * i * 5 / 6, g = "2C";
        break;
      case "General":
        if (t.AREA && t.AREA > 0) {
          f = t.AREA, d = t.I33 ?? 0, I = t.I22 ?? 0, A = t.TORSION ?? 0, M = t.AS2 ?? 0, y = t.AS3 ?? 0, g = "general";
          break;
        }
      default:
        s > 0 && a > 0 && (f = s * a, d = a * s ** 3 / 12, I = s * a ** 3 / 12, A = Math.min(s, a) * Math.max(s, a) ** 3 / 3 * 0.3, y = M = 5 / 6 * f);
        break;
    }
    t.modI2 && (I *= t.modI2), t.modI3 && (d *= t.modI3), pt.set(o, f), Nt.set(o, d), Rt.set(o, I), yt.set(o, A), y > 0 && St.set(o, y), M > 0 && Tt.set(o, M), dt.set(o, { type: g, ...S > 0 ? { fillE: S } : {}, b: P ? void 0 : a || void 0, h: P ? void 0 : s || void 0, d: g === "circ" || g === "pipe" || P ? s : void 0, tw: c || void 0, tf: i || void 0, r: t.R, name: e });
  }
  const mt = /* @__PURE__ */ new Map();
  for (const [o, e] of u) {
    const t = j.get(o);
    if (t === void 0) continue;
    const n = [false, false, false, false, false, false];
    for (const s of e) s === "UX" && (n[0] = true), s === "UY" && (n[1] = true), s === "UZ" && (n[2] = true), s === "RX" && (n[3] = true), s === "RY" && (n[4] = true), s === "RZ" && (n[5] = true);
    mt.set(t, n);
  }
  const B = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map();
  for (let o = 0; o < K.length; o++) $t.set(`${K[o]}@${_[o]}`, o);
  for (const o of X) {
    const e = $t.get(`${o.line}@${o.story}`);
    if (e === void 0) continue;
    const [t, n] = Y[e], s = $[t], a = $[n], i = Math.sqrt((a[0] - s[0]) ** 2 + (a[1] - s[1]) ** 2 + (a[2] - s[2]) ** 2);
    if (i < 1e-10) continue;
    const c = [0, 0, 0];
    o.dir === "GRAV" || o.dir === "GRAVITY" ? c[2] = -o.val : o.dir === "X" ? c[0] = o.val : o.dir === "Y" ? c[1] = o.val : o.dir === "Z" && (c[2] = o.val);
    const f = [(a[0] - s[0]) / i, (a[1] - s[1]) / i, (a[2] - s[2]) / i], d = i * i / 12, I = [f[1] * c[2] - f[2] * c[1], f[2] * c[0] - f[0] * c[2], f[0] * c[1] - f[1] * c[0]], A = (y, M) => {
      const g = B.get(y) || [0, 0, 0, 0, 0, 0];
      for (let S = 0; S < 6; S++) g[S] += M[S];
      B.set(y, g);
    };
    A(t, [c[0] * i / 2, c[1] * i / 2, c[2] * i / 2, d * I[0], d * I[1], d * I[2]]), A(n, [c[0] * i / 2, c[1] * i / 2, c[2] * i / 2, -d * I[0], -d * I[1], -d * I[2]]);
  }
  const st = /* @__PURE__ */ new Map();
  for (const [o, e] of it) {
    const t = E.get(e);
    if (!t) continue;
    const n = p.get(t.material);
    (n == null ? void 0 : n.density) && st.set(o, n.density);
  }
  const Et = /* @__PURE__ */ new Map(), Ut = /* @__PURE__ */ new Map(), Yt = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map(), Ft = [], v = { sinAssign: 0, sinNudo: 0, colapsada: 0, poligono: 0 };
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
      return d === void 0 ? void 0 : j.get(U(c, d));
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
    const s = n.length === 3 ? n : t.slice(0, 4), a = Y.length;
    Y.push(s), K.push(o.name), At.push(o.tipo), _.push(e.story), Ft.push(o.name), e.spring && Mt.set(a, e.spring);
    const i = C.get(e.section);
    if (i) {
      Et.set(a, i.t);
      const c = p.get(i.material);
      (c == null ? void 0 : c.E) && lt.set(a, c.E), (c == null ? void 0 : c.G) && ft.set(a, c.G), (c == null ? void 0 : c.nu) !== void 0 && Ut.set(a, c.nu), (c == null ? void 0 : c.density) && st.set(a, c.density);
      const f = /membrane/i.test(i.modeling);
      Yt.set(a, /thick/i.test(i.modeling) || f ? 0 : 1);
      const d = i.mods ? i.mods.slice(0, 8) : [1, 1, 1, 1, 1, 1, 1, 1];
      f && (d[3] = 0, d[4] = 0, d[5] = 0, d[6] = 0, d[7] = 0), (i.mods || f) && Bt.set(a, d);
    }
  }
  const ht = /* @__PURE__ */ new Map();
  for (let o = 0; o < K.length; o++) Y[o].length > 2 && ht.set(`${K[o]}@${_[o]}`, o);
  let Lt = 0;
  for (const o of nt) {
    const e = j.get(U(o.pt, o.story));
    if (e === void 0) {
      Lt++;
      continue;
    }
    const t = B.get(e) || [0, 0, 0, 0, 0, 0];
    for (let n = 0; n < 6; n++) t[n] += o.v[n];
    B.set(e, t);
  }
  nt.length && console.log(`[e2kParser] cargas puntuales: ${nt.length - Lt} aplicadas \xB7 ${Lt} sin nudo (punto@planta que no existe)`);
  let zt = 0, Wt = 0, Zt = 0, Ht = 0;
  for (const o of ot) {
    const e = ht.get(`${o.area}@${o.story}`) ?? ht.get(`${o.area}@`), t = e !== void 0 ? e : (_m = [...ht].find(([S]) => S.startsWith(o.area + "@"))) == null ? void 0 : _m[1];
    if (t === void 0) {
      Wt++;
      continue;
    }
    const n = Y[t], s = n.map((S) => $[S]).filter(Boolean);
    if (s.length < 3) continue;
    let a = 0, i = 0, c = 0;
    for (let S = 0; S < s.length; S++) {
      const P = s[S], z = s[(S + 1) % s.length];
      a += P[1] * z[2] - P[2] * z[1], i += P[2] * z[0] - P[0] * z[2], c += P[0] * z[1] - P[1] * z[0];
    }
    const f = Math.hypot(a, i, c) / 2;
    if (!(f > 0)) continue;
    const d = o.tipo === "UNIFLOADSET" ? Q.get(o.set ?? "") ?? [] : [{ lc: o.lc, val: o.val }];
    let I = 0;
    for (const S of d) I += S.val;
    if (!I) {
      Zt++;
      continue;
    }
    Ht++;
    const A = I * f / s.length;
    zt += I * f;
    let y = 0, M = 0, g = 0;
    o.dir === "GRAV" || o.dir === "GRAVITY" || o.dir === "Z" ? g = -A : o.dir === "X" ? y = A : o.dir === "Y" && (M = A);
    for (const S of n) {
      const P = B.get(S) || [0, 0, 0, 0, 0, 0];
      P[0] += y, P[1] += M, P[2] += g, B.set(S, P);
    }
  }
  ot.length && console.info(`[e2kParser] cargas de losa: ${Ht} aplicadas \xB7 ${Wt} sin area que las lleve \xB7 ${Zt} sin valor \xB7 total ${zt.toFixed(0)} (unidades del fichero) \xB7 ${Q.size} juegos con nombre`);
  const Vt = v.sinAssign + v.sinNudo + v.colapsada + v.poligono;
  if (Vt) {
    const o = [v.poligono && `${v.poligono} son POLIGONOS de mas de 4 lados (ETABS los admite, hekatan-fem tiene Q4 y T3: habria que triangularlos)`, v.sinAssign && `${v.sinAssign} sin AREAASSIGN`, v.sinNudo && `${v.sinNudo} con algun nudo que no resuelve a planta`, v.colapsada && `${v.colapsada} colapsadas (menos de 3 nudos distintos)`].filter(Boolean).join(" \xB7 ");
    console.warn(`[e2kParser] ${Vt} de ${R.length} areas no se montaron: ${o}. Se pierden, y el modelo sale mas flojo sin que la geometria lo delate.`);
  }
  const Kt = { MM: 1e-3, CM: 0.01, M: 1, IN: 0.0254, FT: 0.3048 }, qt = { N: 1e-3, KN: 1, KGF: 980665e-8, TONF: 9.80665, LB: 444822e-8, KIP: 4.44822 }, N = Kt[(l.length || "M").toUpperCase()] ?? 1, H = qt[(l.force || "KN").toUpperCase()] ?? 1;
  if (N !== 1 || H !== 1) {
    const o = (e, t) => {
      if (e) for (const [n, s] of e) e.set(n, s * t);
    };
    for (const e of $) e[0] *= N, e[1] *= N, e[2] *= N;
    for (const e of r) e.height *= N, e.elev *= N;
    for (const e of It) e.coord *= N;
    for (const e of gt) e.z *= N;
    o(Et, N), o(pt, N * N), o(St, N * N), o(Tt, N * N), o(Rt, N ** 4), o(Nt, N ** 4), o(yt, N ** 4), o(lt, H / (N * N)), o(ft, H / (N * N)), o(st, H / N ** 3);
    for (const [e, t] of rt) rt.set(e, [t[0] * N, t[1] * N]);
    for (const [e, t] of tt) tt.set(e, [t[0] * N, t[1] * N, t[2]]);
    for (const [e, t] of B) B.set(e, t.map((n, s) => n * (s < 3 ? H : H * N)));
    for (const [, e] of G) {
      const t = e.tipo === "point" ? 1 : e.tipo === "line" ? 2 : 3;
      for (let n = 0; n < 6; n++) e.k[n] *= n < 3 ? H / N ** t : H * N / N ** (t - 1);
    }
    for (const [, e] of dt) {
      for (const t of ["d", "b", "h", "tf", "tw", "t", "r", "lip", "dis", "D", "B", "TF", "TW"]) {
        const n = e;
        typeof n[t] == "number" && (n[t] *= N);
      }
      typeof e.fillE == "number" && (e.fillE *= H / (N * N));
    }
  }
  {
    const o = Jt(Y, mt);
    o.nPiezasFlotantes && console.warn(`[e2kParser] ${o.nPiezasFlotantes} trozos (${o.nNudosFlotantes} nudos) no llegan a ningun apoyo: la matriz sale SINGULAR y el modelo no resuelve. En ETABS los sujetan links, muelles de pilote o diafragmas, que este lector aun no importa.`);
  }
  const jt = () => {
    if (!(q > 0)) return B;
    let o = 0;
    const e = (t, n) => {
      const s = B.get(t) || [0, 0, 0, 0, 0, 0];
      s[2] += n, B.set(t, s), o += n;
    };
    return Y.forEach((t, n) => {
      const s = st.get(n);
      if (!s) return;
      const a = t;
      if (a.length === 2) {
        const i = pt.get(n) ?? 0, c = $[a[0]], f = $[a[1]], d = tt.get(n), I = f[0] - c[0], A = f[1] - c[1], y = f[2] - c[2], M = Math.hypot(I, A), g = M > 1e-9 && Math.atan2(Math.abs(y), M) * 180 / Math.PI < 20, S = Math.max(0, Math.hypot(I, A, y) - (d && g ? d[0] + d[1] : 0)), P = s * i * S * q;
        e(a[0], -P / 2), e(a[1], -P / 2);
      } else if (a.length >= 3) {
        const i = Et.get(n) ?? 0, c = a.map((M) => $[M]);
        let f = 0, d = 0, I = 0;
        for (let M = 0; M < c.length; M++) {
          const g = c[M], S = c[(M + 1) % c.length];
          f += g[1] * S[2] - g[2] * S[1], d += g[2] * S[0] - g[0] * S[2], I += g[0] * S[1] - g[1] * S[0];
        }
        const A = Math.hypot(f, d, I) / 2, y = s * i * A * q;
        for (const M of a) e(M, -y / a.length);
      }
    }), console.log(`[e2kParser] peso propio (SELFWEIGHT ${q}): ${o.toFixed(3)} kN repartidos a los nudos`), B;
  };
  return { units: l, stories: r.reverse(), materials: p, frameSections: E, nodes: $, nodeNames: bt, nodeNameToIdx: j, elements: Y, elementNames: K, elementTypes: At, elementStories: _, elementSections: it, nodeInputs: { supports: mt, loads: jt(), springNames: xt }, elementInputs: { elasticities: lt, shearModuli: ft, areas: pt, momentsOfInertiaZ: Nt, momentsOfInertiaY: Rt, torsionalConstants: yt, shearAreasY: St, shearAreasZ: Tt, rigidOffsets: rt, momentReleases: Dt, localAngles: Gt, endOffsets: tt, densities: st, sectionShapes: dt, thicknesses: Et, poissonsRatios: Ut, plateFormulations: Yt, shellModifiers: Bt, springNames: Mt, mallaEnCruces: vt }, sectionShapes: dt, grids: It, planosRef: gt, springProps: G, info: { ...Jt(Y, mt), nNodes: $.length, nFrames: Y.length - Ft.length, nAreas: R.length, nAreasMontadas: Ft.length, nSDCompuestas: kt, nSDLeidas: w.size, title: Pt }, rawSections: at };
}
function Jt(h, m) {
  const l = /* @__PURE__ */ new Map();
  for (const R of h) for (const L of R) for (const C of R) L !== C && (l.has(L) || l.set(L, []), l.get(L).push(C));
  const r = /* @__PURE__ */ new Set();
  for (const R of h) for (const L of R) r.add(L);
  const p = new Set([...m ?? /* @__PURE__ */ new Map()].map(([R]) => R)), E = /* @__PURE__ */ new Set();
  let T = 0, F = 0;
  for (const R of r) {
    if (E.has(R)) continue;
    const L = [R], C = [];
    for (E.add(R); L.length; ) {
      const w = L.pop();
      C.push(w);
      for (const u of l.get(w) ?? []) E.has(u) || (E.add(u), L.push(u));
    }
    C.some((w) => p.has(w)) || (T++, F += C.length);
  }
  return { nPiezasFlotantes: T, nNudosFlotantes: F };
}
export {
  Jt as a,
  rs as p
};
