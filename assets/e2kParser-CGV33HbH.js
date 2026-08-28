function ue(pe) {
  var _a, _b, _c, _d, _e;
  const he = pe.split(/\r?\n/), y = { force: "TONF", length: "M" }, p = [], S = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), b = [], C = [], W = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), ne = [], H = [];
  let oe = "", M = "";
  const P = /* @__PURE__ */ new Map();
  for (const n of he) {
    const s = n.trim();
    if (!s || s.startsWith("$")) {
      s.startsWith("$ ") && (M = s.substring(2).trim());
      continue;
    }
    if (M && (P.has(M) || P.set(M, []), P.get(M).push(n)), M === "CONTROLS") {
      const e = s.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
      e && (y.force = e[1], y.length = e[2]);
      const a = s.match(/TITLE2\s+"([^"]+)"/);
      a && (oe = a[1]);
    }
    if (M === "STORIES - IN SEQUENCE FROM TOP") {
      const e = s.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
      if (e) {
        const a = e[1], t = e[2] ? parseFloat(e[2]) : 0, o = e[3] ? parseFloat(e[3]) : void 0;
        p.push({ name: a, height: t, elev: o ?? 0 });
      }
    }
    if (M === "MATERIAL PROPERTIES") {
      const e = s.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
      if (e) {
        const a = e[1];
        S.has(a) || S.set(a, { type: e[2] || "", E: 0, G: 0, nu: 0 });
        const t = S.get(a);
        e[2] && (t.type = e[2]);
        const o = s.match(/\bE\s+([\d.eE+-]+)/);
        o && (t.E = parseFloat(o[1]));
        const c = s.match(/\bU\s+([\d.eE+-]+)/);
        c && (t.nu = parseFloat(c[1]), t.G = t.E / (2 * (1 + t.nu)));
        const i = s.match(/\bFY\s+([\d.eE+-]+)/);
        i && (t.fy = parseFloat(i[1]));
        const r = s.match(/\bFC\s+([\d.eE+-]+)/);
        r && (t.fc = parseFloat(r[1]));
        const f = s.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
        f && (t.density = parseFloat(f[1]));
      }
    }
    if (M === "FRAME SECTIONS") {
      const e = s.match(/FRAMESECTION\s+"([^"]+)"/);
      if (e) {
        const a = e[1];
        N.has(a) || N.set(a, { material: "", shape: "", D: 0, B: 0, TF: 0, TW: 0 });
        const t = N.get(a), o = s.match(/MATERIAL\s+"([^"]+)"/);
        o && (t.material = o[1]);
        const c = s.match(/SHAPE\s+"([^"]+)"/);
        c && (t.shape = c[1]);
        const i = s.match(/\bD\s+([\d.eE+-]+)/);
        i && (t.D = parseFloat(i[1]));
        const r = s.match(/\bB\s+([\d.eE+-]+)/);
        r && (t.B = parseFloat(r[1]));
        const f = s.match(/\bTF\s+([\d.eE+-]+)/);
        f && (t.TF = parseFloat(f[1]));
        const m = s.match(/\bTW\s+([\d.eE+-]+)/);
        m && (t.TW = parseFloat(m[1]));
        const h = s.match(/\bR\s+([\d.eE+-]+)/);
        h && (t.R = parseFloat(h[1]));
        const d = s.match(/FILLMATERIAL\s+"([^"]+)"/);
        d && (t.fillMaterial = d[1]);
        const E = s.match(/I2MOD\s+([\d.eE+-]+)/);
        E && (t.modI2 = parseFloat(E[1]));
        const I = s.match(/I3MOD\s+([\d.eE+-]+)/);
        I && (t.modI3 = parseFloat(I[1]));
      }
    }
    if (M === "POINT COORDINATES") {
      const e = s.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
      e && se.set(e[1], [parseFloat(e[2]), parseFloat(e[3])]);
    }
    if (M === "LINE CONNECTIVITIES") {
      const e = s.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
      e && b.push({ name: e[1], type: e[2], pt1: e[3], pt2: e[4], nStories: parseInt(e[5]) });
    }
    if (M === "POINT ASSIGNS") {
      const e = s.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
      e && Z.set(`${e[1]}@${e[2]}`, e[3].split(/\s+/));
    }
    if (M === "LINE ASSIGNS") {
      const e = s.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
      if (e) {
        const a = { story: e[2], section: e[3], rigidZone: 0, releases: [], angle: 0 }, t = s.match(/RIGIDZONE\s+([\d.eE+-]+)/);
        t && (a.rigidZone = parseFloat(t[1]));
        const o = s.match(/RELEASE\s+"([^"]+)"/);
        o && (a.releases = o[1].split(/\s+/));
        const c = s.match(/ANG\s+([-\d.eE+]+)/);
        c && (a.angle = parseFloat(c[1])), U.set(`${e[1]}@${e[2]}`, a);
      }
    }
    if (M === "GRIDS") {
      const e = s.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
      e && H.push({ label: e[1], dir: e[2], coord: parseFloat(e[3]) });
    }
    if (M === "FRAME OBJECT LOADS") {
      const e = s.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
      e && ne.push({ line: e[1], story: e[2], type: e[3], dir: e[4], lc: e[5], val: parseFloat(e[6]) });
    }
    if (M === "AREA CONNECTIVITIES") {
      const e = s.match(/AREA\s+"([^"]+)"\s+(?:([A-Za-z]\w*)\s+)?\d+\s+(.+)/);
      if (e) {
        const a = ((_a = e[3].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((o) => o.replace(/"/g, ""))) || [], t = e[3].replace(/"[^"]*"/g, " ").trim().split(/\s+/).filter(Boolean).map(Number).filter((o) => Number.isFinite(o));
        C.push({ name: e[1], tipo: e[2] || "FLOOR", pts: a, dz: t.length === a.length ? t : a.map(() => 0) });
      }
    }
    if (M === "AREA ASSIGNS") {
      const e = s.match(/AREAASSIGN\s+"([^"]+)"\s+"([^"]+)"\s+SECTION\s+"([^"]+)"/);
      e && W.set(e[1], { story: e[2], section: e[3] });
    }
    if (s.startsWith("SHELLPROP")) {
      const e = (_b = s.match(/SHELLPROP\s+"([^"]+)"/)) == null ? void 0 : _b[1];
      if (e) {
        const a = (r) => {
          const f = s.match(r);
          return f ? parseFloat(f[1]) : void 0;
        }, t = a(/SLABTHICKNESS\s+([\d.eE+-]+)/) ?? a(/WALLTHICKNESS\s+([\d.eE+-]+)/) ?? ((a(/DECKSLABDEPTH\s+([\d.eE+-]+)/) ?? 0) + (a(/DECKRIBDEPTH\s+([\d.eE+-]+)/) ?? 0) || void 0), c = ["F11MOD", "F22MOD", "F12MOD", "M11MOD", "M22MOD", "M12MOD", "V13MOD", "V23MOD"].map((r) => a(new RegExp(r + "\\s+([\\d.eE+-]+)"))), i = D.get(e);
        if (c.some((r) => r !== void 0)) {
          const r = c.map((f) => f ?? 1);
          D.set(e, { t: (i == null ? void 0 : i.t) ?? 0, material: (i == null ? void 0 : i.material) ?? "", modeling: (i == null ? void 0 : i.modeling) ?? "ShellThin", mods: r });
        } else t !== void 0 && D.set(e, { t, mods: i == null ? void 0 : i.mods, material: ((_c = s.match(/MATERIAL\s+"([^"]+)"/)) == null ? void 0 : _c[1]) ?? ((_d = s.match(/CONCMATERIAL\s+"([^"]+)"/)) == null ? void 0 : _d[1]) ?? "", modeling: ((_e = s.match(/MODELINGTYPE\s+"([^"]+)"/)) == null ? void 0 : _e[1]) ?? (/PROPTYPE\s+"Deck"/.test(s) ? "Membrane" : "ShellThin") });
      }
    }
  }
  const x = /* @__PURE__ */ new Map();
  if (p.length > 0) {
    const n = p.length - 1;
    x.set(p[n].name, p[n].elev);
    for (let s = n - 1; s >= 0; s--) {
      const a = x.get(p[s + 1].name) + p[s].height;
      p[s].elev = a, x.set(p[s].name, a);
    }
  }
  const A = [], ae = [], O = /* @__PURE__ */ new Map(), g = (n, s) => `${n}@${s}`, T = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map();
  for (const n of b) Me.set(n.name, n);
  for (const n of b) for (const [s, e] of U) {
    if (!s.startsWith(n.name + "@")) continue;
    const a = e.story, t = p.findIndex((o) => o.name === a);
    if (!(t < 0)) if (n.type === "COLUMN" || n.type === "BRACE") {
      T.add(g(n.pt2, a));
      const o = Math.max(n.nStories, 1), c = Math.min(t + o, p.length - 1);
      T.add(g(n.pt1, p[c].name));
    } else T.add(g(n.pt1, a)), T.add(g(n.pt2, a));
  }
  for (const [n] of Z) T.add(n);
  const ie = (n, s) => {
    const e = p.findIndex((t) => t.name === n);
    if (e < 0) return;
    const a = e + (s || 0);
    if (!(a < 0 || a > p.length - 1)) return p[a].name;
  };
  for (const n of C) {
    const s = W.get(n.name);
    s && n.pts.forEach((e, a) => {
      const t = ie(s.story, n.dz[a] ?? 0);
      t && T.add(g(e, t));
    });
  }
  for (const n of T) {
    const [s, e] = n.split("@"), a = se.get(s), t = x.get(e);
    a === void 0 || t === void 0 || (A.push([a[0], a[1], t]), ae.push(n), O.set(n, A.length - 1));
  }
  const F = [], w = [], K = [], k = [], G = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map();
  for (const n of b) for (const [s, e] of U) {
    if (!s.startsWith(n.name + "@")) continue;
    const a = e.story, t = p.findIndex((m) => m.name === a);
    if (t < 0) continue;
    let o, c;
    if (n.type === "COLUMN" || n.type === "BRACE") {
      const m = Math.max(n.nStories, 1), h = Math.min(t + m, p.length - 1);
      o = g(n.pt1, p[h].name), c = g(n.pt2, a);
    } else o = g(n.pt1, a), c = g(n.pt2, a);
    const i = O.get(o), r = O.get(c);
    if (i === void 0 || r === void 0 || i === r) continue;
    const f = F.length;
    if (F.push([i, r]), w.push(n.name), K.push(n.type), k.push(a), G.set(f, e.section), e.rigidZone > 0 && z.set(f, [e.rigidZone, e.rigidZone]), e.releases.length > 0) {
      const m = new Array(12).fill(false), h = { PI: 0, V2I: 1, V3I: 2, TI: 3, M2I: 4, M3I: 5, PJ: 6, V2J: 7, V3J: 8, TJ: 9, M2J: 10, M3J: 11 };
      for (const d of e.releases) {
        const E = h[d];
        E !== void 0 && (m[E] = true);
      }
      ce.set(f, m);
    }
  }
  const B = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map();
  for (const [n, s] of G) {
    const e = N.get(s);
    if (!e) continue;
    const a = S.get(e.material);
    a && (B.set(n, a.E), Y.set(n, a.G));
    const t = e.D, o = e.B, c = e.TF, i = e.TW;
    let r = 0, f = 0, m = 0, h = 0, d = 0, E = 0, I = "rect";
    switch (e.shape) {
      case "Concrete Rectangular":
        r = t * o, f = o * t ** 3 / 12, m = t * o ** 3 / 12, h = o * t ** 3 * (1 / 3 - 0.21 * (t / o) * (1 - t ** 4 / (12 * o ** 4))), d = E = 5 / 6 * r, I = "rect";
        break;
      case "Concrete Circle":
        r = Math.PI * t ** 2 / 4, f = m = Math.PI * t ** 4 / 64, h = Math.PI * t ** 4 / 32, d = E = 0.9 * r, I = "circ";
        break;
      case "Steel I/Wide Flange":
        r = 2 * o * c + (t - 2 * c) * i, f = (o * t ** 3 - (o - i) * (t - 2 * c) ** 3) / 12, m = (2 * c * o ** 3 + (t - 2 * c) * i ** 3) / 12, h = (2 * o * c ** 3 + (t - 2 * c) * i ** 3) / 3, d = (t - 2 * c) * i, E = 2 * o * c * 5 / 6, I = "I";
        break;
      case "Steel Tube":
        r = t * o - (t - 2 * i) * (o - 2 * i), f = (o * t ** 3 - (o - 2 * i) * (t - 2 * i) ** 3) / 12, m = (t * o ** 3 - (t - 2 * i) * (o - 2 * i) ** 3) / 12, h = 2 * i * (t - i) * (o - i) * ((t - i) * (o - i)) / (t - i + (o - i)), d = 2 * t * i, E = 2 * o * i, I = "HSS";
        break;
      case "Filled Steel Tube":
        r = t * o, f = o * t ** 3 / 12, m = t * o ** 3 / 12, h = 2 * i * (t - i) * (o - i) * ((t - i) * (o - i)) / (t - i + (o - i)), d = 2 * t * i + 5 / 6 * (t - 2 * i) * (o - 2 * i), E = 2 * o * i + 5 / 6 * (t - 2 * i) * (o - 2 * i), I = "CFT";
        break;
      case "Steel Angle": {
        const u = c || i;
        r = u * (t + o - u), f = u * (t ** 3 + o * u ** 2 + u ** 2 * (t - u)) / 12, m = u * (o ** 3 + t * u ** 2 + u ** 2 * (o - u)) / 12, h = (t + o - u) * u ** 3 / 3, d = t * u, E = o * u, I = "L";
        break;
      }
      case "Steel Channel":
      case "Cold Formed C":
        r = 2 * o * c + (t - 2 * c) * i, f = (i * t ** 3 + 2 * o * c * (t - c) ** 2) / 12, m = (2 * c * o ** 3 + (t - 2 * c) * i ** 3) / 12, h = (2 * o * c ** 3 + (t - 2 * c) * i ** 3) / 3, d = (t - 2 * c) * i, E = 2 * o * c * 5 / 6, I = e.shape === "Cold Formed C" ? "coldC" : "C";
        break;
      case "Steel Double Channel":
        r = 2 * (2 * o * c + (t - 2 * c) * i), f = 2 * (i * t ** 3 + 2 * o * c * (t - c) ** 2) / 12, m = 2 * (2 * c * o ** 3 + (t - 2 * c) * i ** 3) / 12, h = 2 * (2 * o * c ** 3 + (t - 2 * c) * i ** 3) / 3, d = 2 * (t - 2 * c) * i, E = 4 * o * c * 5 / 6, I = "2C";
        break;
      default:
        t > 0 && o > 0 && (r = t * o, f = o * t ** 3 / 12, m = t * o ** 3 / 12, h = Math.min(t, o) * Math.max(t, o) ** 3 / 3 * 0.3, d = E = 5 / 6 * r);
        break;
    }
    e.modI2 && (m *= e.modI2), e.modI3 && (f *= e.modI3), J.set(n, r), q.set(n, f), Q.set(n, m), _.set(n, h), d > 0 && X.set(n, d), E > 0 && j.set(n, E), $.set(n, { type: I, b: o || void 0, h: t || void 0, d: I === "circ" || I === "pipe" ? t : void 0, tw: i || void 0, tf: c || void 0, r: e.R, name: s });
  }
  const re = /* @__PURE__ */ new Map();
  for (const [n, s] of Z) {
    const e = O.get(n);
    if (e === void 0) continue;
    const a = [false, false, false, false, false, false];
    for (const t of s) t === "UX" && (a[0] = true), t === "UY" && (a[1] = true), t === "UZ" && (a[2] = true), t === "RX" && (a[3] = true), t === "RY" && (a[4] = true), t === "RZ" && (a[5] = true);
    re.set(e, a);
  }
  const L = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map();
  for (let n = 0; n < w.length; n++) fe.set(`${w[n]}@${k[n]}`, n);
  for (const n of ne) {
    const s = fe.get(`${n.line}@${n.story}`);
    if (s === void 0) continue;
    const [e, a] = F[s], t = A[e], o = A[a], c = Math.sqrt((o[0] - t[0]) ** 2 + (o[1] - t[1]) ** 2 + (o[2] - t[2]) ** 2);
    if (c < 1e-10) continue;
    const i = n.val * c / 2;
    let r = 0, f = 0, m = 0;
    n.dir === "GRAV" || n.dir === "GRAVITY" ? m = -i : n.dir === "X" ? r = i : n.dir === "Y" ? f = i : n.dir === "Z" && (m = -i);
    for (const h of [e, a]) {
      const d = L.get(h) || [0, 0, 0, 0, 0, 0];
      d[0] += r, d[1] += f, d[2] += m, L.set(h, d);
    }
  }
  const V = /* @__PURE__ */ new Map();
  for (const [n, s] of G) {
    const e = N.get(s);
    if (!e) continue;
    const a = S.get(e.material);
    (a == null ? void 0 : a.density) && V.set(n, a.density);
  }
  const ee = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), te = [];
  let v = 0;
  for (const n of C) {
    const s = W.get(n.name);
    if (!s) {
      v++;
      continue;
    }
    const e = n.pts.map((i, r) => {
      const f = ie(s.story, n.dz[r] ?? 0);
      return f === void 0 ? void 0 : O.get(g(i, f));
    });
    if (e.some((i) => i === void 0)) {
      v++;
      continue;
    }
    const a = [...new Set(e)];
    if (a.length < 3) {
      v++;
      continue;
    }
    const t = a.length === 3 ? a : e.slice(0, 4), o = F.length;
    F.push(t), w.push(n.name), K.push(n.tipo), k.push(s.story), te.push(n.name);
    const c = D.get(s.section);
    if (c) {
      ee.set(o, c.t);
      const i = S.get(c.material);
      (i == null ? void 0 : i.E) && B.set(o, i.E), (i == null ? void 0 : i.G) && Y.set(o, i.G), (i == null ? void 0 : i.nu) !== void 0 && le.set(o, i.nu), (i == null ? void 0 : i.density) && V.set(o, i.density);
      const r = /membrane/i.test(c.modeling);
      me.set(o, /thick/i.test(c.modeling) || r ? 0 : 1);
      const f = c.mods ? c.mods.slice(0, 8) : [1, 1, 1, 1, 1, 1, 1, 1];
      r && (f[3] = 0, f[4] = 0, f[5] = 0, f[6] = 0, f[7] = 0), (c.mods || r) && de.set(o, f);
    }
  }
  v && console.warn(`[e2kParser] ${v} de ${C.length} areas no se pudieron montar (sin AREAASSIGN, sin planta o con nudos repetidos). Se pierden: el modelo sale mas flojo y sin avisar en la geometria.`);
  const Ee = { MM: 1e-3, CM: 0.01, M: 1, IN: 0.0254, FT: 0.3048 }, Ie = { N: 1e-3, KN: 1, KGF: 980665e-8, TONF: 9.80665, LB: 444822e-8, KIP: 4.44822 }, l = Ee[(y.length || "M").toUpperCase()] ?? 1, R = Ie[(y.force || "KN").toUpperCase()] ?? 1;
  if (l !== 1 || R !== 1) {
    const n = (s, e) => {
      if (s) for (const [a, t] of s) s.set(a, t * e);
    };
    for (const s of A) s[0] *= l, s[1] *= l, s[2] *= l;
    for (const s of p) s.height *= l, s.elev *= l;
    for (const s of H) s.coord *= l;
    n(ee, l), n(J, l * l), n(X, l * l), n(j, l * l), n(Q, l ** 4), n(q, l ** 4), n(_, l ** 4), n(B, R / (l * l)), n(Y, R / (l * l)), n(V, R / l ** 3), n(z, l);
    for (const [s, e] of L) L.set(s, e.map((a, t) => a * (t < 3 ? R : R * l)));
    for (const [, s] of $) for (const e of ["d", "b", "tf", "tw", "D", "B", "TF", "TW"]) {
      const a = s;
      typeof a[e] == "number" && (a[e] *= l);
    }
  }
  return { units: y, stories: p.reverse(), materials: S, frameSections: N, nodes: A, nodeNames: ae, nodeNameToIdx: O, elements: F, elementNames: w, elementTypes: K, elementStories: k, elementSections: G, nodeInputs: { supports: re, loads: L }, elementInputs: { elasticities: B, shearModuli: Y, areas: J, momentsOfInertiaZ: q, momentsOfInertiaY: Q, torsionalConstants: _, shearAreasY: X, shearAreasZ: j, rigidOffsets: z, momentReleases: ce, densities: V, sectionShapes: $, thicknesses: ee, poissonsRatios: le, plateFormulations: me, shellModifiers: de }, sectionShapes: $, grids: H, info: { nNodes: A.length, nFrames: F.length - te.length, nAreas: C.length, nAreasMontadas: te.length, title: oe }, rawSections: P };
}
export {
  ue as p
};
