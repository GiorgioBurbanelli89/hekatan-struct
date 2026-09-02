const Zs = (E) => E * Math.PI / 180;
function Ts(E, m = 64) {
  switch (E.tipo) {
    case "rect": {
      const { d: r, b: i } = E;
      return [[-i / 2, -r / 2], [i / 2, -r / 2], [i / 2, r / 2], [-i / 2, r / 2]];
    }
    case "circle": {
      const r = E.d / 2, i = [];
      for (let f = 0; f < m; f++) {
        const h = 2 * Math.PI * f / m;
        i.push([r * Math.cos(h), r * Math.sin(h)]);
      }
      return i;
    }
    case "angle": {
      const { d: r, b: i, tf: f, tw: h } = E;
      return [[0, 0], [i, 0], [i, f], [h, f], [h, r], [0, r]].map(([I, g]) => [I - i / 2, g - r / 2]);
    }
    case "channel": {
      const { d: r, b: i, tf: f, tw: h } = E;
      return [[0, 0], [i, 0], [i, f], [h, f], [h, r - f], [i, r - f], [i, r], [0, r]].map(([I, g]) => [I - i / 2, g - r / 2]);
    }
    case "tee": {
      const { d: r, b: i, tf: f, tw: h } = E, I = (i - h) / 2;
      return [[0, r - f], [i, r - f], [i, r], [0, r]].concat([]) && [[I, 0], [I + h, 0], [I + h, r - f], [i, r - f], [i, r], [0, r], [0, r - f], [I, r - f]].map(([g, A]) => [g - i / 2, A - r / 2]);
    }
    case "isection": {
      const { d: r, b: i, tf: f, tw: h } = E, I = (i - h) / 2;
      return [[0, 0], [i, 0], [i, f], [I + h, f], [I + h, r - f], [i, r - f], [i, r], [0, r], [0, r - f], [I, r - f], [I, f], [0, f]].map(([g, A]) => [g - i / 2, A - r / 2]);
    }
    case "polygon":
      return E.puntos.slice();
    default:
      return [];
  }
}
function Vs(E, m = 64) {
  if (E.tipo === "tube") {
    const { d: r, b: i, tf: f, tw: h } = E, I = r / 2 - f, g = i / 2 - h;
    return [[[-g, -I], [-g, I], [g, I], [g, -I]]];
  }
  if (E.tipo === "pipe") {
    const r = E.d / 2 - E.t, i = [];
    for (let f = m - 1; f >= 0; f--) {
      const h = 2 * Math.PI * f / m;
      i.push([r * Math.cos(h), r * Math.sin(h)]);
    }
    return [i];
  }
  return [];
}
function Hs(E, m = 64) {
  return E.tipo === "tube" ? Ts({ tipo: "rect", d: E.d, b: E.b }) : E.tipo === "pipe" ? Ts({ tipo: "circle", d: E.d }, m) : Ts(E, m);
}
function Xs(E) {
  let m = 0, r = 0, i = 0, f = 0, h = 0, I = 0;
  for (let R = 0; R < E.length; R++) {
    const [L, F] = E[R], [u, v] = E[(R + 1) % E.length], G = L * v - u * F;
    m += G, r += (L + u) * G, i += (F + v) * G, f += (F * F + F * v + v * v) * G, h += (L * L + L * u + u * u) * G, I += (L * v + 2 * L * F + 2 * u * v + u * F) * G;
  }
  if (m /= 2, Math.abs(m) < 1e-18) return { A: 0, cx: 0, cy: 0, Ixx: 0, Iyy: 0, Ixy: 0 };
  const g = r / (6 * m), A = i / (6 * m);
  return { A: m, cx: g, cy: A, Ixx: f / 12 - m * A * A, Iyy: h / 12 - m * g * g, Ixy: I / 24 - m * g * A };
}
function Js(E, m) {
  const r = Zs(m.rot ?? 0), i = Math.cos(r), f = Math.sin(r), h = m.mirror ? -1 : 1, I = E.map(([g, A]) => {
    const R = g * h;
    return [R * i - A * f + (m.xc ?? 0), R * f + A * i + (m.yc ?? 0)];
  });
  return m.mirror ? I.reverse() : I;
}
function Ks(E, m) {
  let r = 0, i = 0, f = 0;
  const h = [];
  for (const u of E) {
    const v = m > 0 && u.E ? u.E / m : 1;
    if (u.forma.tipo === "rebar") {
      const $ = u.forma.area * v;
      h.push({ A: $, cx: u.xc ?? 0, cy: u.yc ?? 0, Ixx: 0, Iyy: 0, Ixy: 0, n: 1 }), r += $, i += $ * (u.xc ?? 0), f += $ * (u.yc ?? 0);
      continue;
    }
    const G = [Hs(u.forma), ...Vs(u.forma)];
    for (const $ of G) {
      if ($.length < 3) continue;
      const Z = Xs(Js($, u)), V = Z.A * v;
      h.push({ ...Z, A: V, n: v }), r += V, i += V * Z.cx, f += V * Z.cy;
    }
  }
  if (Math.abs(r) < 1e-18) return { A: 0, Iz: 0, Iy: 0, Ixy: 0, J: 0, cx: 0, cy: 0, As2: 0, As3: 0, nPiezas: E.length };
  const I = i / r, g = f / r;
  let A = 0, R = 0, L = 0;
  for (const u of h) A += u.Ixx * u.n + u.A * (u.cy - g) ** 2, R += u.Iyy * u.n + u.A * (u.cx - I) ** 2, L += u.Ixy * u.n + u.A * (u.cx - I) * (u.cy - g);
  const F = (A + R) * 0.1;
  return { A: r, Iz: A, Iy: R, Ixy: L, J: F, cx: I, cy: g, As2: 5 / 6 * r, As3: 5 / 6 * r, nPiezas: E.length };
}
function qs(E, m, r, i, f) {
  switch ((E || "").toUpperCase()) {
    case "CONCRETE RECTANGULAR":
    case "SOLID RECT":
    case "RECTANGLE":
      return { tipo: "rect", d: m, b: r };
    case "CONCRETE CIRCLE":
    case "SOLID CIRCLE":
    case "CIRCLE":
      return { tipo: "circle", d: m };
    case "STEEL ANGLE":
    case "ANGLE":
      return { tipo: "angle", d: m, b: r, tf: i, tw: f };
    case "STEEL CHANNEL":
    case "CHANNEL":
      return { tipo: "channel", d: m, b: r, tf: i, tw: f };
    case "STEEL TEE":
    case "CONCRETE TEE":
    case "TEE":
      return { tipo: "tee", d: m, b: r, tf: i, tw: f };
    case "STEEL I/WIDE FLANGE":
    case "I SECTION":
    case "ISECTION":
      return { tipo: "isection", d: m, b: r, tf: i, tw: f };
    case "STEEL TUBE":
    case "TUBE":
      return { tipo: "tube", d: m, b: r, tf: i, tw: f };
    case "STEEL PIPE":
    case "PIPE":
      return { tipo: "pipe", d: m, t: i || f };
    default:
      return m > 0 && r > 0 ? { tipo: "rect", d: m, b: r } : null;
  }
}
function js(E) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const m = E.split(/\r?\n/), r = { force: "TONF", length: "M" }, i = [], f = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), g = [], A = [], R = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Set(), V = [], j = [], J = /* @__PURE__ */ new Map(), _ = [], ls = [], fs = [];
  let Ns = "", b = "";
  const Q = /* @__PURE__ */ new Map();
  for (const n of m) {
    const e = n.trim();
    if (!e || e.startsWith("$")) {
      e.startsWith("$ ") && (b = e.substring(2).trim());
      continue;
    }
    if (b && (Q.has(b) || Q.set(b, []), Q.get(b).push(n)), b === "CONTROLS") {
      const s = e.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
      s && (r.force = s[1], r.length = s[2]);
      const o = e.match(/TITLE2\s+"([^"]+)"/);
      o && (Ns = o[1]);
    }
    if (b === "STORIES - IN SEQUENCE FROM TOP") {
      const s = e.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
      if (s) {
        const o = s[1], t = s[2] ? parseFloat(s[2]) : 0, a = s[3] ? parseFloat(s[3]) : void 0;
        i.push({ name: o, height: t, elev: a ?? 0 });
      }
    }
    if (b === "MATERIAL PROPERTIES") {
      const s = e.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
      if (s) {
        const o = s[1];
        f.has(o) || f.set(o, { type: s[2] || "", E: 0, G: 0, nu: 0 });
        const t = f.get(o);
        s[2] && (t.type = s[2]);
        const a = e.match(/\bE\s+([\d.eE+-]+)/);
        a && (t.E = parseFloat(a[1]));
        const l = e.match(/\bU\s+([\d.eE+-]+)/);
        l && (t.nu = parseFloat(l[1]), t.G = t.E / (2 * (1 + t.nu)));
        const c = e.match(/\bFY\s+([\d.eE+-]+)/);
        c && (t.fy = parseFloat(c[1]));
        const p = e.match(/\bFC\s+([\d.eE+-]+)/);
        p && (t.fc = parseFloat(p[1]));
        const d = e.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
        d && (t.density = parseFloat(d[1]));
      }
    }
    if (b === "FRAME SECTIONS") {
      const s = e.match(/FRAMESECTION\s+"([^"]+)"/);
      if (s) {
        const o = s[1];
        h.has(o) || h.set(o, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
        const t = h.get(o), a = e.match(/MATERIAL\s+"([^"]+)"/);
        a && (t.material = a[1]);
        const l = e.match(/SHAPE\s+"([^"]+)"/);
        l && (t.shape = l[1]);
        const c = e.match(/\bD\s+([\d.eE+-]+)/);
        c && (t.D = parseFloat(c[1]));
        const p = e.match(/\bB\s+([\d.eE+-]+)/);
        p && (t.B = parseFloat(p[1]));
        const d = e.match(/\bTF\s+([\d.eE+-]+)/);
        d && (t.TF = parseFloat(d[1]));
        const M = e.match(/\bTW\s+([\d.eE+-]+)/);
        M && (t.TW = parseFloat(M[1]));
        const T = e.match(/\bR\s+([\d.eE+-]+)/);
        T && (t.R = parseFloat(T[1]));
        const N = e.match(/FILLMATERIAL\s+"([^"]+)"/);
        N && (t.fillMaterial = N[1]);
        const C = e.match(/I2MOD\s+([\d.eE+-]+)/);
        C && (t.modI2 = parseFloat(C[1]));
        const O = e.match(/I3MOD\s+([\d.eE+-]+)/);
        O && (t.modI3 = parseFloat(O[1]));
        for (const [y, q] of [["AREA", /\bAREA\s+([\d.eE+-]+)/], ["AS2", /\bAS2\s+([\d.eE+-]+)/], ["AS3", /\bAS3\s+([\d.eE+-]+)/], ["I33", /\bI33\s+([\d.eE+-]+)/], ["I22", /\bI22\s+([\d.eE+-]+)/], ["TORSION", /\bTORSION\s+([\d.eE+-]+)/]]) {
          const w = e.match(q);
          w && (t[y] = parseFloat(w[1]));
        }
        const P = e.match(/\bT\s+([\d.eE+-]+)/);
        P && !t.TF && !t.TW && (t.TF = parseFloat(P[1]), t.TW = parseFloat(P[1]));
        const x = e.match(/\bLIP\s+([\d.eE+-]+)/);
        x && (t.LIP = parseFloat(x[1]));
      }
    }
    if (b === "POINT COORDINATES") {
      const s = e.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)(?:\s+([-\d.eE+]+))?/);
      s && I.set(s[1], [parseFloat(s[2]), parseFloat(s[3]), parseFloat(s[4] ?? "0") || 0]);
    }
    if (b === "LINE CONNECTIVITIES") {
      const s = e.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
      s && g.push({ name: s[1], type: s[2], pt1: s[3], pt2: s[4], nStories: parseInt(s[5]) });
    }
    if (b === "POINT ASSIGNS") {
      const s = e.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
      s && u.set(`${s[1]}@${s[2]}`, s[3].split(/\s+/));
      const o = e.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)"/);
      o && Z.add(`${o[1]}@${o[2]}`);
      const t = e.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*SPRINGPROP\s+"([^"]+)"/);
      t && $.set(`${t[1]}@${t[2]}`, t[3]);
    }
    {
      const s = e.match(/(POINTSPRING|LINESPRING|AREASPRING)\s+"([^"]+)"/);
      if (s) {
        const o = s[1] === "POINTSPRING" ? "point" : s[1] === "LINESPRING" ? "line" : "area", t = ((_a = G.get(s[2])) == null ? void 0 : _a.k) ?? [0, 0, 0, 0, 0, 0], a = { UX: 0, UY: 1, UZ: 2, U1: 0, U2: 1, U3: 2, RX: 3, RY: 4, RZ: 5, R1: 3, R2: 4, R3: 5 };
        for (const l of e.matchAll(/(UX|UY|UZ|U1|U2|U3|RX|RY|RZ|R1|R2|R3)\s+([\d.eE+-]+)/g)) {
          const c = a[l[1]];
          c !== void 0 && (t[c] = parseFloat(l[2]));
        }
        G.set(s[2], { tipo: o, k: t });
      }
    }
    if (b === "LINE ASSIGNS") {
      const s = e.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
      if (s) {
        const o = { story: s[2], section: s[3], rigidZone: 0, releases: [], angle: 0 }, t = e.match(/RIGIDZONE\s+([\d.eE+-]+)/);
        t && (o.rigidZone = parseFloat(t[1]));
        const a = e.match(/RELEASE\s+"([^"]+)"/);
        a && (o.releases = a[1].split(/\s+/));
        const l = e.match(/ANG\s+([-\d.eE+]+)/);
        l && (o.angle = parseFloat(l[1]));
        const c = e.match(/SPRINGPROP\s+"([^"]+)"/);
        c && (o.spring = c[1]), o.mallaEnCruces = /MESHATINTERSECTIONS\s+"?YES/i.test(e), v.set(`${s[1]}@${s[2]}`, o);
      }
    }
    if (b === "GRIDS") {
      const s = e.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
      s && ls.push({ label: s[1], dir: s[2], coord: parseFloat(s[3]) });
      const o = e.match(/^\s*REFERENCEPLANE\s.*\sZ\s+([-\d.eE+]+)/);
      o && fs.push({ z: parseFloat(o[1]) });
    }
    if (b === "FRAME OBJECT LOADS") {
      const s = e.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      s && V.push({ line: s[1], story: s[2], type: s[3], dir: s[4], lc: s[5], val: parseFloat(s[6]) });
    }
    {
      const s = e.match(/SHELLUNIFORMLOADSET\s+"([^"]+)"\s+LOADPAT\s+"([^"]+)"\s+VALUE\s+([-\d.eE+]+)/);
      s && (J.has(s[1]) || J.set(s[1], []), J.get(s[1]).push({ lc: s[2], val: parseFloat(s[3]) }));
    }
    if (b === "POINT OBJECT LOADS") {
      const s = e.match(/POINTLOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"FORCE"\s+LC\s+"([^"]+)"\s+FX\s+([-\d.eE+]+)\s+FY\s+([-\d.eE+]+)\s+FZ\s+([-\d.eE+]+)\s+MX\s+([-\d.eE+]+)\s+MY\s+([-\d.eE+]+)\s+MZ\s+([-\d.eE+]+)/);
      s && _.push({ pt: s[1], story: s[2], lc: s[3], v: s.slice(4, 10).map(Number) });
    }
    if (b === "SHELL OBJECT LOADS") {
      const s = e.match(/AREALOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"UNIFF"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      if (s) j.push({ area: s[1], story: s[2], tipo: "UNIFF", dir: s[3], lc: s[4], val: parseFloat(s[5]) });
      else {
        const o = e.match(/AREALOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"UNIFLOADSET"\s+"([^"]+)"/);
        o && j.push({ area: o[1], story: o[2], tipo: "UNIFLOADSET", dir: "GRAV", lc: "", val: 0, set: o[3] });
      }
    }
    if (b === "AREA CONNECTIVITIES") {
      const s = e.match(/AREA\s+"([^"]+)"\s+(?:([A-Za-z]\w*)\s+)?\d+\s+(.+)/);
      if (s) {
        const o = ((_b = s[3].match(/"([^"]+)"/g)) == null ? void 0 : _b.map((a) => a.replace(/"/g, ""))) || [], t = s[3].replace(/"[^"]*"/g, " ").trim().split(/\s+/).filter(Boolean).map(Number).filter((a) => Number.isFinite(a));
        A.push({ name: s[1], tipo: s[2] || "FLOOR", pts: o, dz: t.length === o.length ? t : o.map(() => 0) });
      }
    }
    if (e.startsWith("SDSECTION")) {
      const s = (_c = e.match(/SDSECTION\s+"([^"]+)"/)) == null ? void 0 : _c[1], o = (_d = e.match(/SHAPETYPE\s+"([^"]+)"/)) == null ? void 0 : _d[1];
      if (s && o) {
        const t = (a) => {
          const l = e.match(a);
          return l ? parseFloat(l[1]) : 0;
        };
        F.has(s) || F.set(s, []), F.get(s).push({ shapeType: o, material: ((_e = e.match(/MATERIAL\s+"([^"]+)"/)) == null ? void 0 : _e[1]) ?? "", D: t(/\bD\s+([\d.eE+-]+)/), B: t(/\bB\s+([\d.eE+-]+)/), TF: t(/\bTF\s+([\d.eE+-]+)/), TW: t(/\bTW\s+([\d.eE+-]+)/), XC: t(/\bXC\s+(-?[\d.eE+-]+)/), YC: t(/\bYC\s+(-?[\d.eE+-]+)/) });
      }
    }
    if (b === "AREA ASSIGNS") {
      const s = e.match(/AREAASSIGN\s+"([^"]+)"\s+"([^"]+)"\s+SECTION\s+"([^"]+)"/);
      s && R.set(s[1], { story: s[2], section: s[3], spring: (_f = e.match(/SPRINGPROP\s+"([^"]+)"/)) == null ? void 0 : _f[1] });
    }
    if (e.startsWith("SHELLPROP")) {
      const s = (_g = e.match(/SHELLPROP\s+"([^"]+)"/)) == null ? void 0 : _g[1];
      if (s) {
        const o = (p) => {
          const d = e.match(p);
          return d ? parseFloat(d[1]) : void 0;
        }, t = o(/SLABTHICKNESS\s+([\d.eE+-]+)/) ?? o(/WALLTHICKNESS\s+([\d.eE+-]+)/) ?? ((o(/DECKSLABDEPTH\s+([\d.eE+-]+)/) ?? 0) + (o(/DECKRIBDEPTH\s+([\d.eE+-]+)/) ?? 0) || void 0), l = ["F11MOD", "F22MOD", "F12MOD", "M11MOD", "M22MOD", "M12MOD", "V13MOD", "V23MOD"].map((p) => o(new RegExp(p + "\\s+([\\d.eE+-]+)"))), c = L.get(s);
        if (l.some((p) => p !== void 0)) {
          const p = l.map((d) => d ?? 1);
          L.set(s, { t: (c == null ? void 0 : c.t) ?? 0, material: (c == null ? void 0 : c.material) ?? "", modeling: (c == null ? void 0 : c.modeling) ?? "ShellThin", mods: p });
        } else t !== void 0 && L.set(s, { t, mods: c == null ? void 0 : c.mods, material: ((_h = e.match(/MATERIAL\s+"([^"]+)"/)) == null ? void 0 : _h[1]) ?? ((_i = e.match(/CONCMATERIAL\s+"([^"]+)"/)) == null ? void 0 : _i[1]) ?? "", modeling: ((_j = e.match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _j[1]) ?? (/PROPTYPE\s+"Deck"/.test(e) ? "Membrane" : "ShellThin") });
      }
    }
  }
  const ss = /* @__PURE__ */ new Map();
  if (i.length > 0) {
    const n = i.length - 1;
    ss.set(i[n].name, i[n].elev);
    for (let e = n - 1; e >= 0; e--) {
      const o = ss.get(i[e + 1].name) + i[e].height;
      i[e].elev = o, ss.set(i[e].name, o);
    }
  }
  const Y = [], Rs = [], X = /* @__PURE__ */ new Map(), U = (n, e) => `${n}@${e}`, B = /* @__PURE__ */ new Set(), Bs = /* @__PURE__ */ new Map();
  for (const n of g) Bs.set(n.name, n);
  for (const n of g) for (const [e, s] of v) {
    if (!e.startsWith(n.name + "@")) continue;
    const o = s.story, t = i.findIndex((a) => a.name === o);
    if (!(t < 0)) if (n.type === "COLUMN" || n.type === "BRACE") {
      B.add(U(n.pt2, o));
      const a = Math.min(t + n.nStories, i.length - 1);
      B.add(U(n.pt1, i[a].name));
      for (let l = t + 1; l < a; l++) B.add(U(n.pt1, i[l].name));
    } else B.add(U(n.pt1, o)), B.add(U(n.pt2, o));
  }
  for (const [n] of u) B.add(n);
  for (const n of Z) B.add(n);
  const ys = (n, e) => {
    const s = i.findIndex((t) => t.name === n);
    if (s < 0) return;
    const o = s + (e || 0);
    if (!(o < 0 || o > i.length - 1)) return i[o].name;
  };
  for (const n of A) {
    const e = R.get(n.name);
    e && n.pts.forEach((s, o) => {
      const t = ys(e.story, n.dz[o] ?? 0);
      t && B.add(U(s, t));
    });
  }
  const Os = /* @__PURE__ */ new Map();
  for (const n of B) {
    const [e, s] = n.split("@"), o = I.get(e), t = ss.get(s);
    if (o === void 0 || t === void 0) continue;
    Y.push([o[0], o[1], t - (o[2] ?? 0)]), Rs.push(n), X.set(n, Y.length - 1);
    const a = $.get(n);
    a && Os.set(Y.length - 1, a);
  }
  const k = [], H = [], ps = [], K = [], ts = /* @__PURE__ */ new Map(), ds = /* @__PURE__ */ new Map(), Ls = /* @__PURE__ */ new Map(), es = /* @__PURE__ */ new Map(), Cs = /* @__PURE__ */ new Map();
  for (const n of g) for (const [e, s] of v) {
    if (!e.startsWith(n.name + "@")) continue;
    const o = s.story, t = i.findIndex((p) => p.name === o);
    if (t < 0) continue;
    const a = [];
    if (n.type === "COLUMN" || n.type === "BRACE") {
      const p = Math.min(t + n.nStories, i.length - 1);
      for (let d = p; d > t; d--) a.push(U(n.pt1, i[d].name));
      a.push(U(n.pt2, o));
    } else a.push(U(n.pt1, o), U(n.pt2, o));
    const l = a.map((p) => X.get(p)).filter((p) => p !== void 0);
    if (l.length < 2) continue;
    const c = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
    for (let p = 0; p < l.length - 1; p++) {
      const d = l[p], M = l[p + 1];
      if (d === M) continue;
      const T = k.length;
      if (k.push([d, M]), H.push(l.length > 2 ? `${n.name}-${p + 1}` : n.name), ps.push(n.type), K.push(o), ts.set(T, s.section), s.spring && ds.set(T, s.spring), s.mallaEnCruces && Ls.set(T, true), s.rigidZone > 0 && es.set(T, [s.rigidZone, s.rigidZone]), s.releases.length > 0) {
        const N = new Array(12).fill(false);
        for (const C of s.releases) {
          const O = c[C];
          O !== void 0 && (O < 6 && p !== 0 || O >= 6 && p !== l.length - 2 || (N[O] = true));
        }
        N.some(Boolean) && Cs.set(T, N);
      }
    }
  }
  const ns = /* @__PURE__ */ new Map(), os = /* @__PURE__ */ new Map(), ms = /* @__PURE__ */ new Map(), hs = /* @__PURE__ */ new Map(), Es = /* @__PURE__ */ new Map(), us = /* @__PURE__ */ new Map(), Is = /* @__PURE__ */ new Map(), As = /* @__PURE__ */ new Map(), as = /* @__PURE__ */ new Map();
  let Fs = 0;
  for (const [n, e] of ts) {
    const s = h.get(e);
    if (!s) continue;
    const o = f.get(s.material);
    o && (ns.set(n, o.E), os.set(n, o.G));
    const t = s.D, a = s.B, l = s.TF, c = s.TW;
    let p = 0, d = 0, M = 0, T = 0, N = 0, C = 0, O = "rect", P = false;
    const x = F.get(e);
    if (s.shape === "SD Section" && (x == null ? void 0 : x.length)) {
      const y = (o == null ? void 0 : o.E) || ((_k = f.get(s.material)) == null ? void 0 : _k.E) || 0, q = [];
      for (const w of x) {
        const $s = qs(w.shapeType, w.D, w.B, w.TF, w.TW);
        $s && q.push({ forma: $s, xc: w.XC, yc: w.YC, E: ((_l = f.get(w.material)) == null ? void 0 : _l.E) || y });
      }
      if (q.length) {
        const w = Ks(q, y);
        w.A > 0 && (p = w.A, d = w.Iz, M = w.Iy, T = w.J, N = w.As2, C = w.As3, O = "rect", P = true, Fs++);
      }
    }
    if (!P) switch (s.shape) {
      case "Concrete Rectangular":
        p = t * a, d = a * t ** 3 / 12, M = t * a ** 3 / 12, T = a * t ** 3 * (1 / 3 - 0.21 * (t / a) * (1 - t ** 4 / (12 * a ** 4))), N = C = 5 / 6 * p, O = "rect";
        break;
      case "Concrete Circle":
        p = Math.PI * t ** 2 / 4, d = M = Math.PI * t ** 4 / 64, T = Math.PI * t ** 4 / 32, N = C = 0.9 * p, O = "circ";
        break;
      case "Steel I/Wide Flange":
        p = 2 * a * l + (t - 2 * l) * c, d = (a * t ** 3 - (a - c) * (t - 2 * l) ** 3) / 12, M = (2 * l * a ** 3 + (t - 2 * l) * c ** 3) / 12, T = (2 * a * l ** 3 + (t - 2 * l) * c ** 3) / 3, N = (t - 2 * l) * c, C = 2 * a * l * 5 / 6, O = "I";
        break;
      case "Steel Tube":
        p = t * a - (t - 2 * c) * (a - 2 * c), d = (a * t ** 3 - (a - 2 * c) * (t - 2 * c) ** 3) / 12, M = (t * a ** 3 - (t - 2 * c) * (a - 2 * c) ** 3) / 12, T = 2 * c * (t - c) * (a - c) * ((t - c) * (a - c)) / (t - c + (a - c)), N = 2 * t * c, C = 2 * a * c, O = "HSS";
        break;
      case "Filled Steel Tube":
        p = t * a, d = a * t ** 3 / 12, M = t * a ** 3 / 12, T = 2 * c * (t - c) * (a - c) * ((t - c) * (a - c)) / (t - c + (a - c)), N = 2 * t * c + 5 / 6 * (t - 2 * c) * (a - 2 * c), C = 2 * a * c + 5 / 6 * (t - 2 * c) * (a - 2 * c), O = "CFT";
        break;
      case "Steel Angle": {
        const y = l || c;
        p = y * (t + a - y), d = y * (t ** 3 + a * y ** 2 + y ** 2 * (t - y)) / 12, M = y * (a ** 3 + t * y ** 2 + y ** 2 * (a - y)) / 12, T = (t + a - y) * y ** 3 / 3, N = t * y, C = a * y, O = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        p = 2 * a * l + (t - 2 * l) * c, d = (c * t ** 3 + 2 * a * l * (t - l) ** 2) / 12, M = (2 * l * a ** 3 + (t - 2 * l) * c ** 3) / 12, T = (2 * a * l ** 3 + (t - 2 * l) * c ** 3) / 3, N = (t - 2 * l) * c, C = 2 * a * l * 5 / 6, O = s.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        p = 2 * (2 * a * l + (t - 2 * l) * c), d = 2 * (c * t ** 3 + 2 * a * l * (t - l) ** 2) / 12, M = 2 * (2 * l * a ** 3 + (t - 2 * l) * c ** 3) / 12, T = 2 * (2 * a * l ** 3 + (t - 2 * l) * c ** 3) / 3, N = 2 * (t - 2 * l) * c, C = 4 * a * l * 5 / 6, O = "2C";
        break;
      case "General":
        if (s.AREA && s.AREA > 0) {
          p = s.AREA, d = s.I33 ?? 0, M = s.I22 ?? 0, T = s.TORSION ?? 0, C = s.AS2 ?? 0, N = s.AS3 ?? 0, O = "general";
          break;
        }
      default:
        t > 0 && a > 0 && (p = t * a, d = a * t ** 3 / 12, M = t * a ** 3 / 12, T = Math.min(t, a) * Math.max(t, a) ** 3 / 3 * 0.3, N = C = 5 / 6 * p);
        break;
    }
    s.modI2 && (M *= s.modI2), s.modI3 && (d *= s.modI3), ms.set(n, p), us.set(n, d), Is.set(n, M), As.set(n, T), N > 0 && hs.set(n, N), C > 0 && Es.set(n, C), as.set(n, { type: O, b: a || void 0, h: t || void 0, d: O === "circ" || O === "pipe" ? t : void 0, tw: c || void 0, tf: l || void 0, r: s.R, name: e });
  }
  const cs = /* @__PURE__ */ new Map();
  for (const [n, e] of u) {
    const s = X.get(n);
    if (s === void 0) continue;
    const o = [false, false, false, false, false, false];
    for (const t of e) t === "UX" && (o[0] = true), t === "UY" && (o[1] = true), t === "UZ" && (o[2] = true), t === "RX" && (o[3] = true), t === "RY" && (o[4] = true), t === "RZ" && (o[5] = true);
    cs.set(s, o);
  }
  const z = /* @__PURE__ */ new Map(), Ps = /* @__PURE__ */ new Map();
  for (let n = 0; n < H.length; n++) Ps.set(`${H[n]}@${K[n]}`, n);
  for (const n of V) {
    const e = Ps.get(`${n.line}@${n.story}`);
    if (e === void 0) continue;
    const [s, o] = k[e], t = Y[s], a = Y[o], l = Math.sqrt((a[0] - t[0]) ** 2 + (a[1] - t[1]) ** 2 + (a[2] - t[2]) ** 2);
    if (l < 1e-10) continue;
    const c = n.val * l / 2;
    let p = 0, d = 0, M = 0;
    n.dir === "GRAV" || n.dir === "GRAVITY" ? M = -c : n.dir === "X" ? p = c : n.dir === "Y" ? d = c : n.dir === "Z" && (M = -c);
    for (const T of [s, o]) {
      const N = z.get(T) || [0, 0, 0, 0, 0, 0];
      N[0] += p, N[1] += d, N[2] += M, z.set(T, N);
    }
  }
  const is = /* @__PURE__ */ new Map();
  for (const [n, e] of ts) {
    const s = h.get(e);
    if (!s) continue;
    const o = f.get(s.material);
    (o == null ? void 0 : o.density) && is.set(n, o.density);
  }
  const gs = /* @__PURE__ */ new Map(), bs = /* @__PURE__ */ new Map(), ws = /* @__PURE__ */ new Map(), xs = /* @__PURE__ */ new Map(), Ss = [], D = { sinAssign: 0, sinNudo: 0, colapsada: 0, poligono: 0 };
  for (const n of A) {
    const e = R.get(n.name);
    if (!e) {
      D.sinAssign++;
      continue;
    }
    if (n.pts.length > 4) {
      D.poligono++;
      continue;
    }
    const s = n.pts.map((c, p) => {
      const d = ys(e.story, n.dz[p] ?? 0);
      return d === void 0 ? void 0 : X.get(U(c, d));
    });
    if (s.some((c) => c === void 0)) {
      D.sinNudo++;
      continue;
    }
    const o = [...new Set(s)];
    if (o.length < 3) {
      D.colapsada++;
      continue;
    }
    const t = o.length === 3 ? o : s.slice(0, 4), a = k.length;
    k.push(t), H.push(n.name), ps.push(n.tipo), K.push(e.story), Ss.push(n.name), e.spring && ds.set(a, e.spring);
    const l = L.get(e.section);
    if (l) {
      gs.set(a, l.t);
      const c = f.get(l.material);
      (c == null ? void 0 : c.E) && ns.set(a, c.E), (c == null ? void 0 : c.G) && os.set(a, c.G), (c == null ? void 0 : c.nu) !== void 0 && bs.set(a, c.nu), (c == null ? void 0 : c.density) && is.set(a, c.density);
      const p = /membrane/i.test(l.modeling);
      ws.set(a, /thick/i.test(l.modeling) || p ? 0 : 1);
      const d = l.mods ? l.mods.slice(0, 8) : [1, 1, 1, 1, 1, 1, 1, 1];
      p && (d[3] = 0, d[4] = 0, d[5] = 0, d[6] = 0, d[7] = 0), (l.mods || p) && xs.set(a, d);
    }
  }
  const rs = /* @__PURE__ */ new Map();
  for (let n = 0; n < H.length; n++) k[n].length > 2 && rs.set(`${H[n]}@${K[n]}`, n);
  let Ms = 0;
  for (const n of _) {
    const e = X.get(U(n.pt, n.story));
    if (e === void 0) {
      Ms++;
      continue;
    }
    const s = z.get(e) || [0, 0, 0, 0, 0, 0];
    for (let o = 0; o < 6; o++) s[o] += n.v[o];
    z.set(e, s);
  }
  _.length && console.log(`[e2kParser] cargas puntuales: ${_.length - Ms} aplicadas \xB7 ${Ms} sin nudo (punto@planta que no existe)`);
  let Ds = 0, vs = 0, Gs = 0, Us = 0;
  for (const n of j) {
    const e = rs.get(`${n.area}@${n.story}`) ?? rs.get(`${n.area}@`), s = e !== void 0 ? e : (_m = [...rs].find(([P]) => P.startsWith(n.area + "@"))) == null ? void 0 : _m[1];
    if (s === void 0) {
      vs++;
      continue;
    }
    const o = k[s], t = o.map((P) => Y[P]).filter(Boolean);
    if (t.length < 3) continue;
    let a = 0, l = 0, c = 0;
    for (let P = 0; P < t.length; P++) {
      const x = t[P], y = t[(P + 1) % t.length];
      a += x[1] * y[2] - x[2] * y[1], l += x[2] * y[0] - x[0] * y[2], c += x[0] * y[1] - x[1] * y[0];
    }
    const p = Math.hypot(a, l, c) / 2;
    if (!(p > 0)) continue;
    const d = n.tipo === "UNIFLOADSET" ? J.get(n.set ?? "") ?? [] : [{ lc: n.lc, val: n.val }];
    let M = 0;
    for (const P of d) M += P.val;
    if (!M) {
      Gs++;
      continue;
    }
    Us++;
    const T = M * p / t.length;
    Ds += M * p;
    let N = 0, C = 0, O = 0;
    n.dir === "GRAV" || n.dir === "GRAVITY" || n.dir === "Z" ? O = -T : n.dir === "X" ? N = T : n.dir === "Y" && (C = T);
    for (const P of o) {
      const x = z.get(P) || [0, 0, 0, 0, 0, 0];
      x[0] += N, x[1] += C, x[2] += O, z.set(P, x);
    }
  }
  j.length && console.info(`[e2kParser] cargas de losa: ${Us} aplicadas \xB7 ${vs} sin area que las lleve \xB7 ${Gs} sin valor \xB7 total ${Ds.toFixed(0)} (unidades del fichero) \xB7 ${J.size} juegos con nombre`);
  const ks = D.sinAssign + D.sinNudo + D.colapsada + D.poligono;
  if (ks) {
    const n = [D.poligono && `${D.poligono} son POLIGONOS de mas de 4 lados (ETABS los admite, hekatan-fem tiene Q4 y T3: habria que triangularlos)`, D.sinAssign && `${D.sinAssign} sin AREAASSIGN`, D.sinNudo && `${D.sinNudo} con algun nudo que no resuelve a planta`, D.colapsada && `${D.colapsada} colapsadas (menos de 3 nudos distintos)`].filter(Boolean).join(" \xB7 ");
    console.warn(`[e2kParser] ${ks} de ${A.length} areas no se montaron: ${n}. Se pierden, y el modelo sale mas flojo sin que la geometria lo delate.`);
  }
  const zs = { MM: 1e-3, CM: 0.01, M: 1, IN: 0.0254, FT: 0.3048 }, Ws = { N: 1e-3, KN: 1, KGF: 980665e-8, TONF: 9.80665, LB: 444822e-8, KIP: 4.44822 }, S = zs[(r.length || "M").toUpperCase()] ?? 1, W = Ws[(r.force || "KN").toUpperCase()] ?? 1;
  if (S !== 1 || W !== 1) {
    const n = (e, s) => {
      if (e) for (const [o, t] of e) e.set(o, t * s);
    };
    for (const e of Y) e[0] *= S, e[1] *= S, e[2] *= S;
    for (const e of i) e.height *= S, e.elev *= S;
    for (const e of ls) e.coord *= S;
    for (const e of fs) e.z *= S;
    n(gs, S), n(ms, S * S), n(hs, S * S), n(Es, S * S), n(Is, S ** 4), n(us, S ** 4), n(As, S ** 4), n(ns, W / (S * S)), n(os, W / (S * S)), n(is, W / S ** 3);
    for (const [e, s] of es) es.set(e, [s[0] * S, s[1] * S]);
    for (const [e, s] of z) z.set(e, s.map((o, t) => o * (t < 3 ? W : W * S)));
    for (const [, e] of G) {
      const s = e.tipo === "point" ? 1 : e.tipo === "line" ? 2 : 3;
      for (let o = 0; o < 6; o++) e.k[o] *= o < 3 ? W / S ** s : W * S / S ** (s - 1);
    }
    for (const [, e] of as) for (const s of ["d", "b", "tf", "tw", "D", "B", "TF", "TW"]) {
      const o = e;
      typeof o[s] == "number" && (o[s] *= S);
    }
  }
  {
    const n = Ys(k, cs);
    n.nPiezasFlotantes && console.warn(`[e2kParser] ${n.nPiezasFlotantes} trozos (${n.nNudosFlotantes} nudos) no llegan a ningun apoyo: la matriz sale SINGULAR y el modelo no resuelve. En ETABS los sujetan links, muelles de pilote o diafragmas, que este lector aun no importa.`);
  }
  return { units: r, stories: i.reverse(), materials: f, frameSections: h, nodes: Y, nodeNames: Rs, nodeNameToIdx: X, elements: k, elementNames: H, elementTypes: ps, elementStories: K, elementSections: ts, nodeInputs: { supports: cs, loads: z, springNames: Os }, elementInputs: { elasticities: ns, shearModuli: os, areas: ms, momentsOfInertiaZ: us, momentsOfInertiaY: Is, torsionalConstants: As, shearAreasY: hs, shearAreasZ: Es, rigidOffsets: es, momentReleases: Cs, densities: is, sectionShapes: as, thicknesses: gs, poissonsRatios: bs, plateFormulations: ws, shellModifiers: xs, springNames: ds, mallaEnCruces: Ls }, sectionShapes: as, grids: ls, planosRef: fs, springProps: G, info: { ...Ys(k, cs), nNodes: Y.length, nFrames: k.length - Ss.length, nAreas: A.length, nAreasMontadas: Ss.length, nSDCompuestas: Fs, nSDLeidas: F.size, title: Ns }, rawSections: Q };
}
function Ys(E, m) {
  const r = /* @__PURE__ */ new Map();
  for (const A of E) for (const R of A) for (const L of A) R !== L && (r.has(R) || r.set(R, []), r.get(R).push(L));
  const i = /* @__PURE__ */ new Set();
  for (const A of E) for (const R of A) i.add(R);
  const f = new Set([...m ?? /* @__PURE__ */ new Map()].map(([A]) => A)), h = /* @__PURE__ */ new Set();
  let I = 0, g = 0;
  for (const A of i) {
    if (h.has(A)) continue;
    const R = [A], L = [];
    for (h.add(A); R.length; ) {
      const F = R.pop();
      L.push(F);
      for (const u of r.get(F) ?? []) h.has(u) || (h.add(u), R.push(u));
    }
    L.some((F) => f.has(F)) || (I++, g += L.length);
  }
  return { nPiezasFlotantes: I, nNudosFlotantes: g };
}
export {
  Ys as a,
  js as p
};
