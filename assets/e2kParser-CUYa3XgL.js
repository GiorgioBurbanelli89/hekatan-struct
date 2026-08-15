function ae(se) {
  var _a;
  const ne = se.split(/\r?\n/), b = { force: "TONF", length: "M" }, h = [], S = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), N = [], G = [], L = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), Z = [], Y = [];
  let $ = "", I = "";
  const R = /* @__PURE__ */ new Map();
  for (const n of ne) {
    const a = n.trim();
    if (!a || a.startsWith("$")) {
      a.startsWith("$ ") && (I = a.substring(2).trim());
      continue;
    }
    if (I && (R.has(I) || R.set(I, []), R.get(I).push(n)), I === "CONTROLS") {
      const t = a.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
      t && (b.force = t[1], b.length = t[2]);
      const c = a.match(/TITLE2\s+"([^"]+)"/);
      c && ($ = c[1]);
    }
    if (I === "STORIES - IN SEQUENCE FROM TOP") {
      const t = a.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
      if (t) {
        const c = t[1], e = t[2] ? parseFloat(t[2]) : 0, s = t[3] ? parseFloat(t[3]) : void 0;
        h.push({ name: c, height: e, elev: s ?? 0 });
      }
    }
    if (I === "MATERIAL PROPERTIES") {
      const t = a.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
      if (t) {
        const c = t[1];
        S.has(c) || S.set(c, { type: t[2] || "", E: 0, G: 0, nu: 0 });
        const e = S.get(c);
        t[2] && (e.type = t[2]);
        const s = a.match(/\bE\s+([\d.eE+-]+)/);
        s && (e.E = parseFloat(s[1]));
        const i = a.match(/\bU\s+([\d.eE+-]+)/);
        i && (e.nu = parseFloat(i[1]), e.G = e.E / (2 * (1 + e.nu)));
        const o = a.match(/\bFY\s+([\d.eE+-]+)/);
        o && (e.fy = parseFloat(o[1]));
        const r = a.match(/\bFC\s+([\d.eE+-]+)/);
        r && (e.fc = parseFloat(r[1]));
        const l = a.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
        l && (e.density = parseFloat(l[1]));
      }
    }
    if (I === "FRAME SECTIONS") {
      const t = a.match(/FRAMESECTION\s+"([^"]+)"/);
      if (t) {
        const c = t[1];
        T.has(c) || T.set(c, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
        const e = T.get(c), s = a.match(/MATERIAL\s+"([^"]+)"/);
        s && (e.material = s[1]);
        const i = a.match(/SHAPE\s+"([^"]+)"/);
        i && (e.shape = i[1]);
        const o = a.match(/\bD\s+([\d.eE+-]+)/);
        o && (e.D = parseFloat(o[1]));
        const r = a.match(/\bB\s+([\d.eE+-]+)/);
        r && (e.B = parseFloat(r[1]));
        const l = a.match(/\bTF\s+([\d.eE+-]+)/);
        l && (e.TF = parseFloat(l[1]));
        const f = a.match(/\bTW\s+([\d.eE+-]+)/);
        f && (e.TW = parseFloat(f[1]));
        const p = a.match(/\bR\s+([\d.eE+-]+)/);
        p && (e.R = parseFloat(p[1]));
        const m = a.match(/FILLMATERIAL\s+"([^"]+)"/);
        m && (e.fillMaterial = m[1]);
        const d = a.match(/I2MOD\s+([\d.eE+-]+)/);
        d && (e.modI2 = parseFloat(d[1]));
        const E = a.match(/I3MOD\s+([\d.eE+-]+)/);
        E && (e.modI3 = parseFloat(E[1]));
      }
    }
    if (I === "POINT COORDINATES") {
      const t = a.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
      t && P.set(t[1], [parseFloat(t[2]), parseFloat(t[3])]);
    }
    if (I === "LINE CONNECTIVITIES") {
      const t = a.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
      t && N.push({ name: t[1], type: t[2], pt1: t[3], pt2: t[4], nStories: parseInt(t[5]) });
    }
    if (I === "POINT ASSIGNS") {
      const t = a.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
      t && L.set(`${t[1]}@${t[2]}`, t[3].split(/\s+/));
    }
    if (I === "LINE ASSIGNS") {
      const t = a.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
      if (t) {
        const c = { story: t[2], section: t[3], rigidZone: 0, releases: [], angle: 0 }, e = a.match(/RIGIDZONE\s+([\d.eE+-]+)/);
        e && (c.rigidZone = parseFloat(e[1]));
        const s = a.match(/RELEASE\s+"([^"]+)"/);
        s && (c.releases = s[1].split(/\s+/));
        const i = a.match(/ANG\s+([-\d.eE+]+)/);
        i && (c.angle = parseFloat(i[1])), v.set(`${t[1]}@${t[2]}`, c);
      }
    }
    if (I === "GRIDS") {
      const t = a.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
      t && Y.push({ label: t[1], dir: t[2], coord: parseFloat(t[3]) });
    }
    if (I === "FRAME OBJECT LOADS") {
      const t = a.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      t && Z.push({ line: t[1], story: t[2], type: t[3], dir: t[4], lc: t[5], val: parseFloat(t[6]) });
    }
    if (I === "AREA CONNECTIVITIES") {
      const t = a.match(/AREA\s+"([^"]+)"\s+(?:([A-Za-z]\w*)\s+)?\d+\s+(.+)/);
      if (t) {
        const c = ((_a = t[3].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((e) => e.replace(/"/g, ""))) || [];
        G.push({ name: t[1], pts: c, nStories: 0 });
      }
    }
  }
  const C = /* @__PURE__ */ new Map();
  if (h.length > 0) {
    const n = h.length - 1;
    C.set(h[n].name, h[n].elev);
    for (let a = n - 1; a >= 0; a--) {
      const c = C.get(h[a + 1].name) + h[a].height;
      h[a].elev = c, C.set(h[a].name, c);
    }
  }
  const g = [], B = [], y = /* @__PURE__ */ new Map(), u = (n, a) => `${n}@${a}`, A = /* @__PURE__ */ new Set(), oe = /* @__PURE__ */ new Map();
  for (const n of N) oe.set(n.name, n);
  for (const n of N) for (const [a, t] of v) {
    if (!a.startsWith(n.name + "@")) continue;
    const c = t.story, e = h.findIndex((s) => s.name === c);
    if (!(e < 0)) if (n.type === "COLUMN" || n.type === "BRACE") {
      A.add(u(n.pt2, c));
      const s = Math.max(n.nStories, 1), i = Math.min(e + s, h.length - 1);
      A.add(u(n.pt1, h[i].name));
    } else A.add(u(n.pt1, c)), A.add(u(n.pt2, c));
  }
  for (const [n] of L) A.add(n);
  for (const n of A) {
    const [a, t] = n.split("@"), c = P.get(a), e = C.get(t);
    c === void 0 || e === void 0 || (g.push([c[0], c[1], e]), B.push(n), y.set(n, g.length - 1));
  }
  const F = [], w = [], V = [], x = [], O = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map();
  for (const n of N) for (const [a, t] of v) {
    if (!a.startsWith(n.name + "@")) continue;
    const c = t.story, e = h.findIndex((f) => f.name === c);
    if (e < 0) continue;
    let s, i;
    if (n.type === "COLUMN" || n.type === "BRACE") {
      const f = Math.max(n.nStories, 1), p = Math.min(e + f, h.length - 1);
      s = u(n.pt1, h[p].name), i = u(n.pt2, c);
    } else s = u(n.pt1, c), i = u(n.pt2, c);
    const o = y.get(s), r = y.get(i);
    if (o === void 0 || r === void 0 || o === r) continue;
    const l = F.length;
    if (F.push([o, r]), w.push(n.name), V.push(n.type), x.push(c), O.set(l, t.section), t.rigidZone > 0 && U.set(l, [t.rigidZone, t.rigidZone]), t.releases.length > 0) {
      const f = new Array(12).fill(false), p = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const m of t.releases) {
        const d = p[m];
        d !== void 0 && (f[d] = true);
      }
      W.set(l, f);
    }
  }
  const J = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
  for (const [n, a] of O) {
    const t = T.get(a);
    if (!t) continue;
    const c = S.get(t.material);
    c && (J.set(n, c.E), H.set(n, c.G));
    const e = t.D, s = t.B, i = t.TF, o = t.TW;
    let r = 0, l = 0, f = 0, p = 0, m = 0, d = 0, E = "rect";
    switch (t.shape) {
      case "Concrete Rectangular":
        r = e * s, l = s * e ** 3 / 12, f = e * s ** 3 / 12, p = s * e ** 3 * (1 / 3 - 0.21 * (e / s) * (1 - e ** 4 / (12 * s ** 4))), m = d = 5 / 6 * r, E = "rect";
        break;
      case "Concrete Circle":
        r = Math.PI * e ** 2 / 4, l = f = Math.PI * e ** 4 / 64, p = Math.PI * e ** 4 / 32, m = d = 0.9 * r, E = "circ";
        break;
      case "Steel I/Wide Flange":
        r = 2 * s * i + (e - 2 * i) * o, l = (s * e ** 3 - (s - o) * (e - 2 * i) ** 3) / 12, f = (2 * i * s ** 3 + (e - 2 * i) * o ** 3) / 12, p = (2 * s * i ** 3 + (e - 2 * i) * o ** 3) / 3, m = (e - 2 * i) * o, d = 2 * s * i * 5 / 6, E = "I";
        break;
      case "Steel Tube":
        r = e * s - (e - 2 * o) * (s - 2 * o), l = (s * e ** 3 - (s - 2 * o) * (e - 2 * o) ** 3) / 12, f = (e * s ** 3 - (e - 2 * o) * (s - 2 * o) ** 3) / 12, p = 2 * o * (e - o) * (s - o) * ((e - o) * (s - o)) / (e - o + (s - o)), m = 2 * e * o, d = 2 * s * o, E = "HSS";
        break;
      case "Filled Steel Tube":
        r = e * s, l = s * e ** 3 / 12, f = e * s ** 3 / 12, p = 2 * o * (e - o) * (s - o) * ((e - o) * (s - o)) / (e - o + (s - o)), m = 2 * e * o + 5 / 6 * (e - 2 * o) * (s - 2 * o), d = 2 * s * o + 5 / 6 * (e - 2 * o) * (s - 2 * o), E = "CFT";
        break;
      case "Steel Angle": {
        const M = i || o;
        r = M * (e + s - M), l = M * (e ** 3 + s * M ** 2 + M ** 2 * (e - M)) / 12, f = M * (s ** 3 + e * M ** 2 + M ** 2 * (s - M)) / 12, p = (e + s - M) * M ** 3 / 3, m = e * M, d = s * M, E = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        r = 2 * s * i + (e - 2 * i) * o, l = (o * e ** 3 + 2 * s * i * (e - i) ** 2) / 12, f = (2 * i * s ** 3 + (e - 2 * i) * o ** 3) / 12, p = (2 * s * i ** 3 + (e - 2 * i) * o ** 3) / 3, m = (e - 2 * i) * o, d = 2 * s * i * 5 / 6, E = t.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        r = 2 * (2 * s * i + (e - 2 * i) * o), l = 2 * (o * e ** 3 + 2 * s * i * (e - i) ** 2) / 12, f = 2 * (2 * i * s ** 3 + (e - 2 * i) * o ** 3) / 12, p = 2 * (2 * s * i ** 3 + (e - 2 * i) * o ** 3) / 3, m = 2 * (e - 2 * i) * o, d = 4 * s * i * 5 / 6, E = "2C";
        break;
      default:
        e > 0 && s > 0 && (r = e * s, l = s * e ** 3 / 12, f = e * s ** 3 / 12, p = Math.min(e, s) * Math.max(e, s) ** 3 / 3 * 0.3, m = d = 5 / 6 * r);
        break;
    }
    t.modI2 && (f *= t.modI2), t.modI3 && (l *= t.modI3), z.set(n, r), q.set(n, l), Q.set(n, f), j.set(n, p), m > 0 && X.set(n, m), d > 0 && K.set(n, d), k.set(n, { type: E, b: s || void 0, h: e || void 0, d: E === "circ" || E === "pipe" ? e : void 0, tw: o || void 0, tf: i || void 0, r: t.R, name: a });
  }
  const _ = /* @__PURE__ */ new Map();
  for (const [n, a] of L) {
    const t = y.get(n);
    if (t === void 0) continue;
    const c = [false, false, false, false, false, false];
    for (const e of a) e === "UX" && (c[0] = true), e === "UY" && (c[1] = true), e === "UZ" && (c[2] = true), e === "RX" && (c[3] = true), e === "RY" && (c[4] = true), e === "RZ" && (c[5] = true);
    _.set(t, c);
  }
  const D = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map();
  for (let n = 0; n < w.length; n++) ee.set(`${w[n]}@${x[n]}`, n);
  for (const n of Z) {
    const a = ee.get(`${n.line}@${n.story}`);
    if (a === void 0) continue;
    const [t, c] = F[a], e = g[t], s = g[c], i = Math.sqrt((s[0] - e[0]) ** 2 + (s[1] - e[1]) ** 2 + (s[2] - e[2]) ** 2);
    if (i < 1e-10) continue;
    const o = n.val * i / 2;
    let r = 0, l = 0, f = 0;
    n.dir === "GRAV" || n.dir === "GRAVITY" ? f = -o : n.dir === "X" ? r = o : n.dir === "Y" ? l = o : n.dir === "Z" && (f = -o);
    for (const p of [t, c]) {
      const m = D.get(p) || [0, 0, 0, 0, 0, 0];
      m[0] += r, m[1] += l, m[2] += f, D.set(p, m);
    }
  }
  const te = /* @__PURE__ */ new Map();
  for (const [n, a] of O) {
    const t = T.get(a);
    if (!t) continue;
    const c = S.get(t.material);
    (c == null ? void 0 : c.density) && te.set(n, c.density);
  }
  return { units: b, stories: h.reverse(), materials: S, frameSections: T, nodes: g, nodeNames: B, nodeNameToIdx: y, elements: F, elementNames: w, elementTypes: V, elementStories: x, elementSections: O, nodeInputs: { supports: _, loads: D }, elementInputs: { elasticities: J, shearModuli: H, areas: z, momentsOfInertiaZ: q, momentsOfInertiaY: Q, torsionalConstants: j, shearAreasY: X, shearAreasZ: K, rigidOffsets: U, momentReleases: W, densities: te, sectionShapes: k }, sectionShapes: k, grids: Y, info: { nNodes: g.length, nFrames: F.length, nAreas: G.length, title: $ }, rawSections: R };
}
export {
  ae as p
};
