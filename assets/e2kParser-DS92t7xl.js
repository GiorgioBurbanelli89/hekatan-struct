const Xs = (E) => E * Math.PI / 180;
function Rs(E, m = 64) {
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
      return [[0, 0], [r, 0], [r, p], [h, p], [h, l], [0, l]].map(([S, L]) => [S - r / 2, L - l / 2]);
    }
    case "channel": {
      const { d: l, b: r, tf: p, tw: h } = E;
      return [[0, 0], [r, 0], [r, p], [h, p], [h, l - p], [r, l - p], [r, l], [0, l]].map(([S, L]) => [S - r / 2, L - l / 2]);
    }
    case "tee": {
      const { d: l, b: r, tf: p, tw: h } = E, S = (r - h) / 2;
      return [[0, l - p], [r, l - p], [r, l], [0, l]].concat([]) && [[S, 0], [S + h, 0], [S + h, l - p], [r, l - p], [r, l], [0, l], [0, l - p], [S, l - p]].map(([L, N]) => [L - r / 2, N - l / 2]);
    }
    case "isection": {
      const { d: l, b: r, tf: p, tw: h } = E, S = (r - h) / 2;
      return [[0, 0], [r, 0], [r, p], [S + h, p], [S + h, l - p], [r, l - p], [r, l], [0, l], [0, l - p], [S, l - p], [S, p], [0, p]].map(([L, N]) => [L - r / 2, N - l / 2]);
    }
    case "polygon":
      return E.puntos.slice();
    default:
      return [];
  }
}
function Ks(E, m = 64) {
  if (E.tipo === "tube") {
    const { d: l, b: r, tf: p, tw: h } = E, S = l / 2 - p, L = r / 2 - h;
    return [[[-L, -S], [-L, S], [L, S], [L, -S]]];
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
function qs(E, m = 64) {
  return E.tipo === "tube" ? Rs({ tipo: "rect", d: E.d, b: E.b }) : E.tipo === "pipe" ? Rs({ tipo: "circle", d: E.d }, m) : Rs(E, m);
}
function js(E) {
  let m = 0, l = 0, r = 0, p = 0, h = 0, S = 0;
  for (let y = 0; y < E.length; y++) {
    const [C, P] = E[y], [u, v] = E[(y + 1) % E.length], G = C * v - u * P;
    m += G, l += (C + u) * G, r += (P + v) * G, p += (P * P + P * v + v * v) * G, h += (C * C + C * u + u * u) * G, S += (C * v + 2 * C * P + 2 * u * v + u * P) * G;
  }
  if (m /= 2, Math.abs(m) < 1e-18) return { A: 0, cx: 0, cy: 0, Ixx: 0, Iyy: 0, Ixy: 0 };
  const L = l / (6 * m), N = r / (6 * m);
  return { A: m, cx: L, cy: N, Ixx: p / 12 - m * N * N, Iyy: h / 12 - m * L * L, Ixy: S / 24 - m * L * N };
}
function _s(E, m) {
  const l = Xs(m.rot ?? 0), r = Math.cos(l), p = Math.sin(l), h = m.mirror ? -1 : 1, S = E.map(([L, N]) => {
    const y = L * h;
    return [y * r - N * p + (m.xc ?? 0), y * p + N * r + (m.yc ?? 0)];
  });
  return m.mirror ? S.reverse() : S;
}
function Qs(E, m) {
  let l = 0, r = 0, p = 0;
  const h = [];
  for (const u of E) {
    const v = m > 0 && u.E ? u.E / m : 1;
    if (u.forma.tipo === "rebar") {
      const B = u.forma.area * v;
      h.push({ A: B, cx: u.xc ?? 0, cy: u.yc ?? 0, Ixx: 0, Iyy: 0, Ixy: 0, n: 1 }), l += B, r += B * (u.xc ?? 0), p += B * (u.yc ?? 0);
      continue;
    }
    const G = [qs(u.forma), ...Ks(u.forma)];
    for (const B of G) {
      if (B.length < 3) continue;
      const Z = js(_s(B, u)), H = Z.A * v;
      h.push({ ...Z, A: H, n: v }), l += H, r += H * Z.cx, p += H * Z.cy;
    }
  }
  if (Math.abs(l) < 1e-18) return { A: 0, Iz: 0, Iy: 0, Ixy: 0, J: 0, cx: 0, cy: 0, As2: 0, As3: 0, nPiezas: E.length };
  const S = r / l, L = p / l;
  let N = 0, y = 0, C = 0;
  for (const u of h) N += u.Ixx * u.n + u.A * (u.cy - L) ** 2, y += u.Iyy * u.n + u.A * (u.cx - S) ** 2, C += u.Ixy * u.n + u.A * (u.cx - S) * (u.cy - L);
  const P = (N + y) * 0.1;
  return { A: l, Iz: N, Iy: y, Ixy: C, J: P, cx: S, cy: L, As2: 5 / 6 * l, As3: 5 / 6 * l, nPiezas: E.length };
}
function st(E, m, l, r, p) {
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
function tt(E) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const m = E.split(/\r?\n/), l = { force: "TONF", length: "M" }, r = [], p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), L = [], N = [], y = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Set(), H = [], ss = [], K = /* @__PURE__ */ new Map(), ts = [];
  let J = 0;
  const ms = [], hs = [];
  let Ls = "", w = "";
  const es = /* @__PURE__ */ new Map();
  for (const o of m) {
    const e = o.trim();
    if (!e || e.startsWith("$")) {
      e.startsWith("$ ") && (w = e.substring(2).trim());
      continue;
    }
    if (w && (es.has(w) || es.set(w, []), es.get(w).push(o)), w === "CONTROLS") {
      const s = e.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
      s && (l.force = s[1], l.length = s[2]);
      const n = e.match(/TITLE2\s+"([^"]+)"/);
      n && (Ls = n[1]);
    }
    if (w === "STORIES - IN SEQUENCE FROM TOP") {
      const s = e.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
      if (s) {
        const n = s[1], t = s[2] ? parseFloat(s[2]) : 0, a = s[3] ? parseFloat(s[3]) : void 0;
        r.push({ name: n, height: t, elev: a ?? 0 });
      }
    }
    if (w === "MATERIAL PROPERTIES") {
      const s = e.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
      if (s) {
        const n = s[1];
        p.has(n) || p.set(n, { type: s[2] || "", E: 0, G: 0, nu: 0 });
        const t = p.get(n);
        s[2] && (t.type = s[2]);
        const a = e.match(/\bE\s+([\d.eE+-]+)/);
        a && (t.E = parseFloat(a[1]));
        const i = e.match(/\bU\s+([\d.eE+-]+)/);
        i && (t.nu = parseFloat(i[1]), t.G = t.E / (2 * (1 + t.nu)));
        const c = e.match(/\bFY\s+([\d.eE+-]+)/);
        c && (t.fy = parseFloat(c[1]));
        const f = e.match(/\bFC\s+([\d.eE+-]+)/);
        f && (t.fc = parseFloat(f[1]));
        const d = e.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
        d && (t.density = parseFloat(d[1]));
      }
    }
    if (w === "FRAME SECTIONS") {
      const s = e.match(/FRAMESECTION\s+"([^"]+)"/);
      if (s) {
        const n = s[1];
        h.has(n) || h.set(n, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
        const t = h.get(n), a = e.match(/MATERIAL\s+"([^"]+)"/);
        a && (t.material = a[1]);
        const i = e.match(/SHAPE\s+"([^"]+)"/);
        i && (t.shape = i[1]);
        const c = e.match(/\bD\s+([\d.eE+-]+)/);
        c && (t.D = parseFloat(c[1]));
        const f = e.match(/\bB\s+([\d.eE+-]+)/);
        f && (t.B = parseFloat(f[1]));
        const d = e.match(/\bTF\s+([\d.eE+-]+)/);
        d && (t.TF = parseFloat(d[1]));
        const I = e.match(/\bTW\s+([\d.eE+-]+)/);
        I && (t.TW = parseFloat(I[1]));
        const A = e.match(/\bR\s+([\d.eE+-]+)/);
        A && (t.R = parseFloat(A[1]));
        const O = e.match(/FILLMATERIAL\s+"([^"]+)"/);
        O && (t.fillMaterial = O[1]);
        const M = e.match(/I2MOD\s+([\d.eE+-]+)/);
        M && (t.modI2 = parseFloat(M[1]));
        const g = e.match(/I3MOD\s+([\d.eE+-]+)/);
        g && (t.modI3 = parseFloat(g[1]));
        for (const [F, Q] of [["AREA", /\bAREA\s+([\d.eE+-]+)/], ["AS2", /\bAS2\s+([\d.eE+-]+)/], ["AS3", /\bAS3\s+([\d.eE+-]+)/], ["I33", /\bI33\s+([\d.eE+-]+)/], ["I22", /\bI22\s+([\d.eE+-]+)/], ["TORSION", /\bTORSION\s+([\d.eE+-]+)/]]) {
          const x = e.match(Q);
          x && (t[F] = parseFloat(x[1]));
        }
        const T = e.match(/\bT\s+([\d.eE+-]+)/);
        T && !t.TF && !t.TW && (t.TF = parseFloat(T[1]), t.TW = parseFloat(T[1]));
        const b = e.match(/\bLIP\s+([\d.eE+-]+)/);
        b && (t.LIP = parseFloat(b[1]));
      }
    }
    if (w === "POINT COORDINATES") {
      const s = e.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)(?:\s+([-\d.eE+]+))?/);
      s && S.set(s[1], [parseFloat(s[2]), parseFloat(s[3]), parseFloat(s[4] ?? "0") || 0]);
    }
    if (w === "LINE CONNECTIVITIES") {
      const s = e.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
      s && L.push({ name: s[1], type: s[2], pt1: s[3], pt2: s[4], nStories: parseInt(s[5]) });
    }
    if (w === "POINT ASSIGNS") {
      const s = e.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
      s && u.set(`${s[1]}@${s[2]}`, s[3].split(/\s+/));
      const n = e.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)"/);
      n && Z.add(`${n[1]}@${n[2]}`);
      const t = e.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*SPRINGPROP\s+"([^"]+)"/);
      t && B.set(`${t[1]}@${t[2]}`, t[3]);
    }
    {
      const s = e.match(/(POINTSPRING|LINESPRING|AREASPRING)\s+"([^"]+)"/);
      if (s) {
        const n = s[1] === "POINTSPRING" ? "point" : s[1] === "LINESPRING" ? "line" : "area", t = ((_a = G.get(s[2])) == null ? void 0 : _a.k) ?? [0, 0, 0, 0, 0, 0], a = { UX: 0, UY: 1, UZ: 2, U1: 0, U2: 1, U3: 2, RX: 3, RY: 4, RZ: 5, R1: 3, R2: 4, R3: 5 };
        for (const i of e.matchAll(/(UX|UY|UZ|U1|U2|U3|RX|RY|RZ|R1|R2|R3)\s+([\d.eE+-]+)/g)) {
          const c = a[i[1]];
          c !== void 0 && (t[c] = parseFloat(i[2]));
        }
        G.set(s[2], { tipo: n, k: t });
      }
    }
    if (w === "LINE ASSIGNS") {
      const s = e.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
      if (s) {
        const n = { story: s[2], section: s[3], rigidZone: 0, releases: [], angle: 0 }, t = e.match(/RIGIDZONE\s+([\d.eE+-]+)/);
        t && (n.rigidZone = parseFloat(t[1]));
        const a = e.match(/LENGTHOFFI\s+([\d.eE+-]+)/), i = e.match(/LENGTHOFFJ\s+([\d.eE+-]+)/);
        (a || i) && (n.offsets = [a ? parseFloat(a[1]) : 0, i ? parseFloat(i[1]) : 0]);
        const c = e.match(/RELEASE\s+"([^"]+)"/);
        c && (n.releases = c[1].split(/\s+/));
        const f = e.match(/ANG\s+([-\d.eE+]+)/);
        f && (n.angle = parseFloat(f[1]));
        const d = e.match(/SPRINGPROP\s+"([^"]+)"/);
        d && (n.spring = d[1]), n.mallaEnCruces = /MESHATINTERSECTIONS\s+"?YES/i.test(e), v.set(`${s[1]}@${s[2]}`, n);
      }
    }
    if (w === "GRIDS") {
      const s = e.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
      s && ms.push({ label: s[1], dir: s[2], coord: parseFloat(s[3]) });
      const n = e.match(/^\s*REFERENCEPLANE\s.*\sZ\s+([-\d.eE+]+)/);
      n && hs.push({ z: parseFloat(n[1]) });
    }
    if (w === "FRAME OBJECT LOADS") {
      const s = e.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      s && H.push({ line: s[1], story: s[2], type: s[3], dir: s[4], lc: s[5], val: parseFloat(s[6]) });
    }
    {
      const s = e.match(/SHELLUNIFORMLOADSET\s+"([^"]+)"\s+LOADPAT\s+"([^"]+)"\s+VALUE\s+([-\d.eE+]+)/);
      s && (K.has(s[1]) || K.set(s[1], []), K.get(s[1]).push({ lc: s[2], val: parseFloat(s[3]) }));
    }
    if (w === "LOAD PATTERNS") {
      const s = e.match(/LOADPATTERN\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+SELFWEIGHT\s+([\d.eE+-]+)/);
      s && /dead/i.test(s[2]) && (J = Math.max(J, parseFloat(s[3])));
    }
    if (w === "POINT OBJECT LOADS") {
      const s = e.match(/POINTLOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"FORCE"\s+LC\s+"([^"]+)"\s+FX\s+([-\d.eE+]+)\s+FY\s+([-\d.eE+]+)\s+FZ\s+([-\d.eE+]+)\s+MX\s+([-\d.eE+]+)\s+MY\s+([-\d.eE+]+)\s+MZ\s+([-\d.eE+]+)/);
      s && ts.push({ pt: s[1], story: s[2], lc: s[3], v: s.slice(4, 10).map(Number) });
    }
    if (w === "SHELL OBJECT LOADS") {
      const s = e.match(/AREALOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"UNIFF"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      if (s) ss.push({ area: s[1], story: s[2], tipo: "UNIFF", dir: s[3], lc: s[4], val: parseFloat(s[5]) });
      else {
        const n = e.match(/AREALOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"UNIFLOADSET"\s+"([^"]+)"/);
        n && ss.push({ area: n[1], story: n[2], tipo: "UNIFLOADSET", dir: "GRAV", lc: "", val: 0, set: n[3] });
      }
    }
    if (w === "AREA CONNECTIVITIES") {
      const s = e.match(/AREA\s+"([^"]+)"\s+(?:([A-Za-z]\w*)\s+)?\d+\s+(.+)/);
      if (s) {
        const n = ((_b = s[3].match(/"([^"]+)"/g)) == null ? void 0 : _b.map((a) => a.replace(/"/g, ""))) || [], t = s[3].replace(/"[^"]*"/g, " ").trim().split(/\s+/).filter(Boolean).map(Number).filter((a) => Number.isFinite(a));
        N.push({ name: s[1], tipo: s[2] || "FLOOR", pts: n, dz: t.length === n.length ? t : n.map(() => 0) });
      }
    }
    if (e.startsWith("SDSECTION")) {
      const s = (_c = e.match(/SDSECTION\s+"([^"]+)"/)) == null ? void 0 : _c[1], n = (_d = e.match(/SHAPETYPE\s+"([^"]+)"/)) == null ? void 0 : _d[1];
      if (s && n) {
        const t = (a) => {
          const i = e.match(a);
          return i ? parseFloat(i[1]) : 0;
        };
        P.has(s) || P.set(s, []), P.get(s).push({ shapeType: n, material: ((_e = e.match(/MATERIAL\s+"([^"]+)"/)) == null ? void 0 : _e[1]) ?? "", D: t(/\bD\s+([\d.eE+-]+)/), B: t(/\bB\s+([\d.eE+-]+)/), TF: t(/\bTF\s+([\d.eE+-]+)/), TW: t(/\bTW\s+([\d.eE+-]+)/), XC: t(/\bXC\s+(-?[\d.eE+-]+)/), YC: t(/\bYC\s+(-?[\d.eE+-]+)/) });
      }
    }
    if (w === "AREA ASSIGNS") {
      const s = e.match(/AREAASSIGN\s+"([^"]+)"\s+"([^"]+)"\s+SECTION\s+"([^"]+)"/);
      s && y.set(s[1], { story: s[2], section: s[3], spring: (_f = e.match(/SPRINGPROP\s+"([^"]+)"/)) == null ? void 0 : _f[1] });
    }
    if (e.startsWith("SHELLPROP")) {
      const s = (_g = e.match(/SHELLPROP\s+"([^"]+)"/)) == null ? void 0 : _g[1];
      if (s) {
        const n = (f) => {
          const d = e.match(f);
          return d ? parseFloat(d[1]) : void 0;
        }, t = n(/SLABTHICKNESS\s+([\d.eE+-]+)/) ?? n(/WALLTHICKNESS\s+([\d.eE+-]+)/) ?? ((n(/DECKSLABDEPTH\s+([\d.eE+-]+)/) ?? 0) + (n(/DECKRIBDEPTH\s+([\d.eE+-]+)/) ?? 0) || void 0), i = ["F11MOD", "F22MOD", "F12MOD", "M11MOD", "M22MOD", "M12MOD", "V13MOD", "V23MOD"].map((f) => n(new RegExp(f + "\\s+([\\d.eE+-]+)"))), c = C.get(s);
        if (i.some((f) => f !== void 0)) {
          const f = i.map((d) => d ?? 1);
          C.set(s, { t: (c == null ? void 0 : c.t) ?? 0, material: (c == null ? void 0 : c.material) ?? "", modeling: (c == null ? void 0 : c.modeling) ?? "ShellThin", mods: f });
        } else t !== void 0 && C.set(s, { t, mods: c == null ? void 0 : c.mods, material: ((_h = e.match(/MATERIAL\s+"([^"]+)"/)) == null ? void 0 : _h[1]) ?? ((_i = e.match(/CONCMATERIAL\s+"([^"]+)"/)) == null ? void 0 : _i[1]) ?? "", modeling: ((_j = e.match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _j[1]) ?? (/PROPTYPE\s+"Deck"/.test(e) ? "Membrane" : "ShellThin") });
      }
    }
  }
  const os = /* @__PURE__ */ new Map();
  if (r.length > 0) {
    const o = r.length - 1;
    os.set(r[o].name, r[o].elev);
    for (let e = o - 1; e >= 0; e--) {
      const n = os.get(r[e + 1].name) + r[e].height;
      r[e].elev = n, os.set(r[e].name, n);
    }
  }
  const k = [], Os = [], X = /* @__PURE__ */ new Map(), $ = (o, e) => `${o}@${e}`, W = /* @__PURE__ */ new Set(), Zs = /* @__PURE__ */ new Map();
  for (const o of L) Zs.set(o.name, o);
  for (const o of L) for (const [e, s] of v) {
    if (!e.startsWith(o.name + "@")) continue;
    const n = s.story, t = r.findIndex((a) => a.name === n);
    if (!(t < 0)) if (o.type === "COLUMN" || o.type === "BRACE") {
      W.add($(o.pt2, n));
      const a = Math.min(t + o.nStories, r.length - 1);
      W.add($(o.pt1, r[a].name));
      for (let i = t + 1; i < a; i++) W.add($(o.pt1, r[i].name));
    } else W.add($(o.pt1, n)), W.add($(o.pt2, n));
  }
  for (const [o] of u) W.add(o);
  for (const o of Z) W.add(o);
  const ys = (o, e) => {
    const s = r.findIndex((t) => t.name === o);
    if (s < 0) return;
    const n = s + (e || 0);
    if (!(n < 0 || n > r.length - 1)) return r[n].name;
  };
  for (const o of N) {
    const e = y.get(o.name);
    e && o.pts.forEach((s, n) => {
      const t = ys(e.story, o.dz[n] ?? 0);
      t && W.add($(s, t));
    });
  }
  const Fs = /* @__PURE__ */ new Map();
  for (const o of W) {
    const [e, s] = o.split("@"), n = S.get(e), t = os.get(s);
    if (n === void 0 || t === void 0) continue;
    k.push([n[0], n[1], t - (n[2] ?? 0)]), Os.push(o), X.set(o, k.length - 1);
    const a = B.get(o);
    a && Fs.set(k.length - 1, a);
  }
  const U = [], V = [], Es = [], q = [], ns = /* @__PURE__ */ new Map(), us = /* @__PURE__ */ new Map(), Cs = /* @__PURE__ */ new Map(), as = /* @__PURE__ */ new Map(), Ps = /* @__PURE__ */ new Map(), ws = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map();
  for (const o of L) for (const [e, s] of v) {
    if (!e.startsWith(o.name + "@")) continue;
    const n = s.story, t = r.findIndex((f) => f.name === n);
    if (t < 0) continue;
    const a = [];
    if (o.type === "COLUMN" || o.type === "BRACE") {
      const f = Math.min(t + o.nStories, r.length - 1);
      for (let d = f; d > t; d--) a.push($(o.pt1, r[d].name));
      a.push($(o.pt2, n));
    } else a.push($(o.pt1, n), $(o.pt2, n));
    const i = a.map((f) => X.get(f)).filter((f) => f !== void 0);
    if (i.length < 2) continue;
    const c = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
    for (let f = 0; f < i.length - 1; f++) {
      const d = i[f], I = i[f + 1];
      if (d === I) continue;
      const A = U.length;
      if (U.push([d, I]), V.push(i.length > 2 ? `${o.name}-${f + 1}` : o.name), Es.push(o.type), q.push(n), ns.set(A, s.section), s.spring && us.set(A, s.spring), s.mallaEnCruces && Cs.set(A, true), s.rigidZone > 0 && as.set(A, [s.rigidZone, s.rigidZone]), s.angle && ws.set(A, s.angle), s.offsets && j.set(A, [s.offsets[0], s.offsets[1], s.rigidZone]), s.releases.length > 0) {
        const O = new Array(12).fill(false);
        for (const M of s.releases) {
          const g = c[M];
          g !== void 0 && (g < 6 && f !== 0 || g >= 6 && f !== i.length - 2 || (O[g] = true));
        }
        O.some(Boolean) && Ps.set(A, O);
      }
    }
  }
  const cs = /* @__PURE__ */ new Map(), is = /* @__PURE__ */ new Map(), rs = /* @__PURE__ */ new Map(), Is = /* @__PURE__ */ new Map(), gs = /* @__PURE__ */ new Map(), As = /* @__PURE__ */ new Map(), Ms = /* @__PURE__ */ new Map(), Ss = /* @__PURE__ */ new Map(), ls = /* @__PURE__ */ new Map();
  let bs = 0;
  for (const [o, e] of ns) {
    const s = h.get(e);
    if (!s) continue;
    const n = p.get(s.material);
    n && (cs.set(o, n.E), is.set(o, n.G));
    const t = s.D, a = s.B, i = s.TF, c = s.TW;
    let f = 0, d = 0, I = 0, A = 0, O = 0, M = 0, g = "rect", T = false;
    const b = P.get(e);
    if (s.shape === "SD Section" && (b == null ? void 0 : b.length)) {
      const F = (n == null ? void 0 : n.E) || ((_k = p.get(s.material)) == null ? void 0 : _k.E) || 0, Q = [];
      for (const x of b) {
        const Ws = st(x.shapeType, x.D, x.B, x.TF, x.TW);
        Ws && Q.push({ forma: Ws, xc: x.XC, yc: x.YC, E: ((_l = p.get(x.material)) == null ? void 0 : _l.E) || F });
      }
      if (Q.length) {
        const x = Qs(Q, F);
        x.A > 0 && (f = x.A, d = x.Iz, I = x.Iy, A = x.J, O = x.As2, M = x.As3, g = "rect", T = true, bs++);
      }
    }
    if (!T) switch (s.shape) {
      case "Concrete Rectangular":
        f = t * a, d = a * t ** 3 / 12, I = t * a ** 3 / 12, A = a * t ** 3 * (1 / 3 - 0.21 * (t / a) * (1 - t ** 4 / (12 * a ** 4))), O = M = 5 / 6 * f, g = "rect";
        break;
      case "Concrete Circle":
        f = Math.PI * t ** 2 / 4, d = I = Math.PI * t ** 4 / 64, A = Math.PI * t ** 4 / 32, O = M = 0.9 * f, g = "circ";
        break;
      case "Steel I/Wide Flange":
        f = 2 * a * i + (t - 2 * i) * c, d = (a * t ** 3 - (a - c) * (t - 2 * i) ** 3) / 12, I = (2 * i * a ** 3 + (t - 2 * i) * c ** 3) / 12, A = (2 * a * i ** 3 + (t - 2 * i) * c ** 3) / 3, O = (t - 2 * i) * c, M = 2 * a * i * 5 / 6, g = "I";
        break;
      case "Steel Tube":
        f = t * a - (t - 2 * c) * (a - 2 * c), d = (a * t ** 3 - (a - 2 * c) * (t - 2 * c) ** 3) / 12, I = (t * a ** 3 - (t - 2 * c) * (a - 2 * c) ** 3) / 12, A = 2 * c * (t - c) * (a - c) * ((t - c) * (a - c)) / (t - c + (a - c)), O = 2 * t * c, M = 2 * a * c, g = "HSS";
        break;
      case "Filled Steel Tube":
        f = t * a, d = a * t ** 3 / 12, I = t * a ** 3 / 12, A = 2 * c * (t - c) * (a - c) * ((t - c) * (a - c)) / (t - c + (a - c)), O = 2 * t * c + 5 / 6 * (t - 2 * c) * (a - 2 * c), M = 2 * a * c + 5 / 6 * (t - 2 * c) * (a - 2 * c), g = "CFT";
        break;
      case "Steel Angle": {
        const F = i || c;
        f = F * (t + a - F), d = F * (t ** 3 + a * F ** 2 + F ** 2 * (t - F)) / 12, I = F * (a ** 3 + t * F ** 2 + F ** 2 * (a - F)) / 12, A = (t + a - F) * F ** 3 / 3, O = t * F, M = a * F, g = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        f = 2 * a * i + (t - 2 * i) * c, d = (c * t ** 3 + 2 * a * i * (t - i) ** 2) / 12, I = (2 * i * a ** 3 + (t - 2 * i) * c ** 3) / 12, A = (2 * a * i ** 3 + (t - 2 * i) * c ** 3) / 3, O = (t - 2 * i) * c, M = 2 * a * i * 5 / 6, g = s.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        f = 2 * (2 * a * i + (t - 2 * i) * c), d = 2 * (c * t ** 3 + 2 * a * i * (t - i) ** 2) / 12, I = 2 * (2 * i * a ** 3 + (t - 2 * i) * c ** 3) / 12, A = 2 * (2 * a * i ** 3 + (t - 2 * i) * c ** 3) / 3, O = 2 * (t - 2 * i) * c, M = 4 * a * i * 5 / 6, g = "2C";
        break;
      case "General":
        if (s.AREA && s.AREA > 0) {
          f = s.AREA, d = s.I33 ?? 0, I = s.I22 ?? 0, A = s.TORSION ?? 0, M = s.AS2 ?? 0, O = s.AS3 ?? 0, g = "general";
          break;
        }
      default:
        t > 0 && a > 0 && (f = t * a, d = a * t ** 3 / 12, I = t * a ** 3 / 12, A = Math.min(t, a) * Math.max(t, a) ** 3 / 3 * 0.3, O = M = 5 / 6 * f);
        break;
    }
    s.modI2 && (I *= s.modI2), s.modI3 && (d *= s.modI3), rs.set(o, f), As.set(o, d), Ms.set(o, I), Ss.set(o, A), O > 0 && Is.set(o, O), M > 0 && gs.set(o, M), ls.set(o, { type: g, b: a || void 0, h: t || void 0, d: g === "circ" || g === "pipe" ? t : void 0, tw: c || void 0, tf: i || void 0, r: s.R, name: e });
  }
  const fs = /* @__PURE__ */ new Map();
  for (const [o, e] of u) {
    const s = X.get(o);
    if (s === void 0) continue;
    const n = [false, false, false, false, false, false];
    for (const t of e) t === "UX" && (n[0] = true), t === "UY" && (n[1] = true), t === "UZ" && (n[2] = true), t === "RX" && (n[3] = true), t === "RY" && (n[4] = true), t === "RZ" && (n[5] = true);
    fs.set(s, n);
  }
  const Y = /* @__PURE__ */ new Map(), xs = /* @__PURE__ */ new Map();
  for (let o = 0; o < V.length; o++) xs.set(`${V[o]}@${q[o]}`, o);
  for (const o of H) {
    const e = xs.get(`${o.line}@${o.story}`);
    if (e === void 0) continue;
    const [s, n] = U[e], t = k[s], a = k[n], i = Math.sqrt((a[0] - t[0]) ** 2 + (a[1] - t[1]) ** 2 + (a[2] - t[2]) ** 2);
    if (i < 1e-10) continue;
    const c = [0, 0, 0];
    o.dir === "GRAV" || o.dir === "GRAVITY" ? c[2] = -o.val : o.dir === "X" ? c[0] = o.val : o.dir === "Y" ? c[1] = o.val : o.dir === "Z" && (c[2] = o.val);
    const f = [(a[0] - t[0]) / i, (a[1] - t[1]) / i, (a[2] - t[2]) / i], d = i * i / 12, I = [f[1] * c[2] - f[2] * c[1], f[2] * c[0] - f[0] * c[2], f[0] * c[1] - f[1] * c[0]], A = (O, M) => {
      const g = Y.get(O) || [0, 0, 0, 0, 0, 0];
      for (let T = 0; T < 6; T++) g[T] += M[T];
      Y.set(O, g);
    };
    A(s, [c[0] * i / 2, c[1] * i / 2, c[2] * i / 2, d * I[0], d * I[1], d * I[2]]), A(n, [c[0] * i / 2, c[1] * i / 2, c[2] * i / 2, -d * I[0], -d * I[1], -d * I[2]]);
  }
  const _ = /* @__PURE__ */ new Map();
  for (const [o, e] of ns) {
    const s = h.get(e);
    if (!s) continue;
    const n = p.get(s.material);
    (n == null ? void 0 : n.density) && _.set(o, n.density);
  }
  const ps = /* @__PURE__ */ new Map(), Ds = /* @__PURE__ */ new Map(), vs = /* @__PURE__ */ new Map(), Gs = /* @__PURE__ */ new Map(), Ts = [], D = { sinAssign: 0, sinNudo: 0, colapsada: 0, poligono: 0 };
  for (const o of N) {
    const e = y.get(o.name);
    if (!e) {
      D.sinAssign++;
      continue;
    }
    if (o.pts.length > 4) {
      D.poligono++;
      continue;
    }
    const s = o.pts.map((c, f) => {
      const d = ys(e.story, o.dz[f] ?? 0);
      return d === void 0 ? void 0 : X.get($(c, d));
    });
    if (s.some((c) => c === void 0)) {
      D.sinNudo++;
      continue;
    }
    const n = [...new Set(s)];
    if (n.length < 3) {
      D.colapsada++;
      continue;
    }
    const t = n.length === 3 ? n : s.slice(0, 4), a = U.length;
    U.push(t), V.push(o.name), Es.push(o.tipo), q.push(e.story), Ts.push(o.name), e.spring && us.set(a, e.spring);
    const i = C.get(e.section);
    if (i) {
      ps.set(a, i.t);
      const c = p.get(i.material);
      (c == null ? void 0 : c.E) && cs.set(a, c.E), (c == null ? void 0 : c.G) && is.set(a, c.G), (c == null ? void 0 : c.nu) !== void 0 && Ds.set(a, c.nu), (c == null ? void 0 : c.density) && _.set(a, c.density);
      const f = /membrane/i.test(i.modeling);
      vs.set(a, /thick/i.test(i.modeling) || f ? 0 : 1);
      const d = i.mods ? i.mods.slice(0, 8) : [1, 1, 1, 1, 1, 1, 1, 1];
      f && (d[3] = 0, d[4] = 0, d[5] = 0, d[6] = 0, d[7] = 0), (i.mods || f) && Gs.set(a, d);
    }
  }
  const ds = /* @__PURE__ */ new Map();
  for (let o = 0; o < V.length; o++) U[o].length > 2 && ds.set(`${V[o]}@${q[o]}`, o);
  let Ns = 0;
  for (const o of ts) {
    const e = X.get($(o.pt, o.story));
    if (e === void 0) {
      Ns++;
      continue;
    }
    const s = Y.get(e) || [0, 0, 0, 0, 0, 0];
    for (let n = 0; n < 6; n++) s[n] += o.v[n];
    Y.set(e, s);
  }
  ts.length && console.log(`[e2kParser] cargas puntuales: ${ts.length - Ns} aplicadas \xB7 ${Ns} sin nudo (punto@planta que no existe)`);
  let ks = 0, $s = 0, Us = 0, Ys = 0;
  for (const o of ss) {
    const e = ds.get(`${o.area}@${o.story}`) ?? ds.get(`${o.area}@`), s = e !== void 0 ? e : (_m = [...ds].find(([T]) => T.startsWith(o.area + "@"))) == null ? void 0 : _m[1];
    if (s === void 0) {
      $s++;
      continue;
    }
    const n = U[s], t = n.map((T) => k[T]).filter(Boolean);
    if (t.length < 3) continue;
    let a = 0, i = 0, c = 0;
    for (let T = 0; T < t.length; T++) {
      const b = t[T], F = t[(T + 1) % t.length];
      a += b[1] * F[2] - b[2] * F[1], i += b[2] * F[0] - b[0] * F[2], c += b[0] * F[1] - b[1] * F[0];
    }
    const f = Math.hypot(a, i, c) / 2;
    if (!(f > 0)) continue;
    const d = o.tipo === "UNIFLOADSET" ? K.get(o.set ?? "") ?? [] : [{ lc: o.lc, val: o.val }];
    let I = 0;
    for (const T of d) I += T.val;
    if (!I) {
      Us++;
      continue;
    }
    Ys++;
    const A = I * f / t.length;
    ks += I * f;
    let O = 0, M = 0, g = 0;
    o.dir === "GRAV" || o.dir === "GRAVITY" || o.dir === "Z" ? g = -A : o.dir === "X" ? O = A : o.dir === "Y" && (M = A);
    for (const T of n) {
      const b = Y.get(T) || [0, 0, 0, 0, 0, 0];
      b[0] += O, b[1] += M, b[2] += g, Y.set(T, b);
    }
  }
  ss.length && console.info(`[e2kParser] cargas de losa: ${Ys} aplicadas \xB7 ${$s} sin area que las lleve \xB7 ${Us} sin valor \xB7 total ${ks.toFixed(0)} (unidades del fichero) \xB7 ${K.size} juegos con nombre`);
  const Bs = D.sinAssign + D.sinNudo + D.colapsada + D.poligono;
  if (Bs) {
    const o = [D.poligono && `${D.poligono} son POLIGONOS de mas de 4 lados (ETABS los admite, hekatan-fem tiene Q4 y T3: habria que triangularlos)`, D.sinAssign && `${D.sinAssign} sin AREAASSIGN`, D.sinNudo && `${D.sinNudo} con algun nudo que no resuelve a planta`, D.colapsada && `${D.colapsada} colapsadas (menos de 3 nudos distintos)`].filter(Boolean).join(" \xB7 ");
    console.warn(`[e2kParser] ${Bs} de ${N.length} areas no se montaron: ${o}. Se pierden, y el modelo sale mas flojo sin que la geometria lo delate.`);
  }
  const Hs = { MM: 1e-3, CM: 0.01, M: 1, IN: 0.0254, FT: 0.3048 }, Vs = { N: 1e-3, KN: 1, KGF: 980665e-8, TONF: 9.80665, LB: 444822e-8, KIP: 4.44822 }, R = Hs[(l.length || "M").toUpperCase()] ?? 1, z = Vs[(l.force || "KN").toUpperCase()] ?? 1;
  if (R !== 1 || z !== 1) {
    const o = (e, s) => {
      if (e) for (const [n, t] of e) e.set(n, t * s);
    };
    for (const e of k) e[0] *= R, e[1] *= R, e[2] *= R;
    for (const e of r) e.height *= R, e.elev *= R;
    for (const e of ms) e.coord *= R;
    for (const e of hs) e.z *= R;
    o(ps, R), o(rs, R * R), o(Is, R * R), o(gs, R * R), o(Ms, R ** 4), o(As, R ** 4), o(Ss, R ** 4), o(cs, z / (R * R)), o(is, z / (R * R)), o(_, z / R ** 3);
    for (const [e, s] of as) as.set(e, [s[0] * R, s[1] * R]);
    for (const [e, s] of j) j.set(e, [s[0] * R, s[1] * R, s[2]]);
    for (const [e, s] of Y) Y.set(e, s.map((n, t) => n * (t < 3 ? z : z * R)));
    for (const [, e] of G) {
      const s = e.tipo === "point" ? 1 : e.tipo === "line" ? 2 : 3;
      for (let n = 0; n < 6; n++) e.k[n] *= n < 3 ? z / R ** s : z * R / R ** (s - 1);
    }
    for (const [, e] of ls) for (const s of ["d", "b", "tf", "tw", "D", "B", "TF", "TW"]) {
      const n = e;
      typeof n[s] == "number" && (n[s] *= R);
    }
  }
  {
    const o = zs(U, fs);
    o.nPiezasFlotantes && console.warn(`[e2kParser] ${o.nPiezasFlotantes} trozos (${o.nNudosFlotantes} nudos) no llegan a ningun apoyo: la matriz sale SINGULAR y el modelo no resuelve. En ETABS los sujetan links, muelles de pilote o diafragmas, que este lector aun no importa.`);
  }
  const Js = () => {
    if (!(J > 0)) return Y;
    let o = 0;
    const e = (s, n) => {
      const t = Y.get(s) || [0, 0, 0, 0, 0, 0];
      t[2] += n, Y.set(s, t), o += n;
    };
    return U.forEach((s, n) => {
      const t = _.get(n);
      if (!t) return;
      const a = s;
      if (a.length === 2) {
        const i = rs.get(n) ?? 0, c = k[a[0]], f = k[a[1]], d = j.get(n), I = f[0] - c[0], A = f[1] - c[1], O = f[2] - c[2], M = Math.hypot(I, A), g = M > 1e-9 && Math.atan2(Math.abs(O), M) * 180 / Math.PI < 20, T = Math.max(0, Math.hypot(I, A, O) - (d && g ? d[0] + d[1] : 0)), b = t * i * T * J;
        e(a[0], -b / 2), e(a[1], -b / 2);
      } else if (a.length >= 3) {
        const i = ps.get(n) ?? 0, c = a.map((M) => k[M]);
        let f = 0, d = 0, I = 0;
        for (let M = 0; M < c.length; M++) {
          const g = c[M], T = c[(M + 1) % c.length];
          f += g[1] * T[2] - g[2] * T[1], d += g[2] * T[0] - g[0] * T[2], I += g[0] * T[1] - g[1] * T[0];
        }
        const A = Math.hypot(f, d, I) / 2, O = t * i * A * J;
        for (const M of a) e(M, -O / a.length);
      }
    }), console.log(`[e2kParser] peso propio (SELFWEIGHT ${J}): ${o.toFixed(3)} kN repartidos a los nudos`), Y;
  };
  return { units: l, stories: r.reverse(), materials: p, frameSections: h, nodes: k, nodeNames: Os, nodeNameToIdx: X, elements: U, elementNames: V, elementTypes: Es, elementStories: q, elementSections: ns, nodeInputs: { supports: fs, loads: Js(), springNames: Fs }, elementInputs: { elasticities: cs, shearModuli: is, areas: rs, momentsOfInertiaZ: As, momentsOfInertiaY: Ms, torsionalConstants: Ss, shearAreasY: Is, shearAreasZ: gs, rigidOffsets: as, momentReleases: Ps, localAngles: ws, endOffsets: j, densities: _, sectionShapes: ls, thicknesses: ps, poissonsRatios: Ds, plateFormulations: vs, shellModifiers: Gs, springNames: us, mallaEnCruces: Cs }, sectionShapes: ls, grids: ms, planosRef: hs, springProps: G, info: { ...zs(U, fs), nNodes: k.length, nFrames: U.length - Ts.length, nAreas: N.length, nAreasMontadas: Ts.length, nSDCompuestas: bs, nSDLeidas: P.size, title: Ls }, rawSections: es };
}
function zs(E, m) {
  const l = /* @__PURE__ */ new Map();
  for (const N of E) for (const y of N) for (const C of N) y !== C && (l.has(y) || l.set(y, []), l.get(y).push(C));
  const r = /* @__PURE__ */ new Set();
  for (const N of E) for (const y of N) r.add(y);
  const p = new Set([...m ?? /* @__PURE__ */ new Map()].map(([N]) => N)), h = /* @__PURE__ */ new Set();
  let S = 0, L = 0;
  for (const N of r) {
    if (h.has(N)) continue;
    const y = [N], C = [];
    for (h.add(N); y.length; ) {
      const P = y.pop();
      C.push(P);
      for (const u of l.get(P) ?? []) h.has(u) || (h.add(u), y.push(u));
    }
    C.some((P) => p.has(P)) || (S++, L += C.length);
  }
  return { nPiezasFlotantes: S, nNudosFlotantes: L };
}
export {
  zs as a,
  tt as p
};
