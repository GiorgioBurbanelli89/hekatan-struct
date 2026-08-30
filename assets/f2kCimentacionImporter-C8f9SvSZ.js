function st(i) {
  let l = "tonf", a = "m";
  const c = i.match(/CurrUnits\s*=\s*"([^"]+)"/);
  if (c) {
    const N = c[1].split(",").map((d) => d.trim().toLowerCase()), T = N[0], x = N[1], y = { tonf: "tonf", kn: "kN", kip: "kip", lb: "lb", n: "N" }, R = { m: "m", mm: "mm", cm: "cm", ft: "ft", in: "in" };
    y[T] && (l = y[T]), R[x] && (a = R[x]);
  }
  const M = et[l], u = it[a];
  return { forceToKn: M, lengthToM: u, ksUnitFactor: M / Math.pow(u, 3), momentToKnm: M * u };
}
const et = { tonf: 9.80665, kN: 1, kip: 4.4482216, lb: 0.0044482216, N: 1e-3 }, it = { m: 1, mm: 1e-3, cm: 0.01, ft: 0.3048, in: 0.0254 };
function m(i, l) {
  const a = i.split(/\r?\n/), c = [];
  let M = false;
  const u = new RegExp(`^TABLE:\\s+"${l.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}"\\s*$`);
  for (const N of a) {
    if (u.test(N.trim())) {
      M = true;
      continue;
    }
    if (M) {
      if (/^TABLE:/.test(N.trim()) || /^END\s+TABLE/.test(N.trim())) break;
      const T = N.trim();
      if (T.length === 0) continue;
      c.push(T);
    }
  }
  return c;
}
function p(i) {
  const l = {}, a = /(?:"([^"]+)"|([A-Za-z][A-Za-z0-9 _\-?]*?))\s*=\s*(?:"([^"]*)"|(\S+))/g;
  let c;
  for (; (c = a.exec(i)) !== null; ) {
    const M = (c[1] ?? c[2] ?? "").trim(), u = (c[3] ?? c[4] ?? "").trim();
    M && (l[M] = u);
  }
  return l;
}
const h = (i) => {
  if (i == null) return NaN;
  const l = i.replace(/,(?=\d)/g, ".");
  return parseFloat(l);
};
function at(i) {
  var _a, _b;
  const l = [], a = st(i), c = /* @__PURE__ */ new Map();
  for (const o of m(i, "POINT OBJECT CONNECTIVITY")) {
    const t = p(o), n = parseInt(t.UniqueName, 10);
    isFinite(n) && c.set(n, { uid: n, x: h(t.X) * a.lengthToM, y: h(t.Y) * a.lengthToM, z: h(t.Z) * a.lengthToM, isSpecial: (t.IsSpecial ?? "No").toLowerCase() === "yes" });
  }
  const M = /* @__PURE__ */ new Map();
  for (const o of m(i, "FLOOR OBJECT CONNECTIVITY")) {
    const t = p(o), n = t["Unique Name"] ?? t.UniqueName;
    if (!n) continue;
    const s = [];
    for (let r = 1; r <= 8; r++) {
      const f = parseInt(t[`UniquePt${r}`], 10);
      isFinite(f) && s.push(f);
    }
    const e = h(t.Area);
    M.set(n, { name: n, pts: s, area: isFinite(e) ? e * a.lengthToM * a.lengthToM : 0 });
  }
  const u = /* @__PURE__ */ new Map();
  for (const o of m(i, "SLAB PROPERTY DEFINITIONS")) {
    const t = p(o), n = t.Name;
    n && u.set(n, { name: n, thickness: h(t["Slab Thickness"]) * a.lengthToM });
  }
  const N = /* @__PURE__ */ new Map();
  for (const o of m(i, "AREA ASSIGNMENTS - SECTION PROPERTIES")) {
    const t = p(o), n = t.UniqueName, s = t["Section Property"];
    n && s && N.set(n, s);
  }
  if (N.size === 0) for (const o of m(i, "AREA ASSIGNMENTS - SUMMARY")) {
    const t = p(o), n = t.UniqueName, s = t["Section Property"];
    n && s && N.set(n, s);
  }
  const T = /* @__PURE__ */ new Map();
  for (const o of m(i, "SPRING PROPERTY DEFINITIONS - AREA SPRINGS")) {
    const t = p(o), n = t.Name, s = h(t["Subgrade Modulus"]);
    n && isFinite(s) && T.set(n, s * a.ksUnitFactor);
  }
  const x = /* @__PURE__ */ new Map();
  for (const o of m(i, "AREA ASSIGNMENTS - AREA SPRINGS")) {
    const t = p(o), n = t.UniqueName, s = t["Spring Property"];
    n && s && x.set(n, s);
  }
  const y = /* @__PURE__ */ new Map();
  for (const o of m(i, "JOINT LOADS ASSIGNMENTS - FORCE")) {
    const t = p(o), n = parseInt(t.UniqueName, 10);
    if (!isFinite(n)) continue;
    const s = t["Load Pattern"] ?? "Dead";
    y.has(n) || y.set(n, /* @__PURE__ */ new Map()), y.get(n).set(s, { joint: n, pattern: s, fz: h(t.FZ), mx: h(t.MX), my: h(t.MY) });
  }
  const R = [], d = [], w = [];
  for (const [o, t] of N.entries()) /^Footing/i.test(t) ? d.push(o) : /^Stiff/i.test(t) && w.push(o);
  if (d.length === 0 && w.length === 0) for (const o of M.keys()) /^LOAD\d+/i.test(o) ? w.push(o) : /^\d+$/.test(o) && d.push(o);
  const G = (o) => {
    let t = 0, n = 0;
    for (const s of o) t += s.x, n += s.y;
    return { x: t / o.length, y: n / o.length };
  }, nt = w.map((o) => {
    const t = M.get(o);
    if (!t) return null;
    const n = t.pts.map((s) => c.get(s)).filter(Boolean);
    return { area: o, pts: n, ctr: G(n) };
  }).filter(Boolean);
  for (const o of d) {
    const t = M.get(o);
    if (!t) continue;
    const n = t.pts.map((I) => c.get(I)).filter(Boolean);
    if (n.length < 4) continue;
    const s = G(n);
    let e, r = 1 / 0;
    for (const I of nt) {
      const A = I.ctr.x - s.x, g = I.ctr.y - s.y, S = Math.hypot(A, g);
      S < r && (r = S, e = I);
    }
    let f;
    e && (f = Array.from(c.values()).filter((A) => A.isSpecial && Math.hypot(A.x - e.ctr.x, A.y - e.ctr.y) < 0.1)[0], f || (f = Array.from(c.values()).filter((g) => g.isSpecial && Math.hypot(g.x - s.x, g.y - s.y) < Math.max(...n.map((S) => Math.hypot(S.x - s.x, S.y - s.y))) * 0.6)[0])), R.push({ footingArea: o, stiffArea: e == null ? void 0 : e.area, pts: n, stiffPts: e == null ? void 0 : e.pts, centerJoint: f });
  }
  const Y = 8, J = [], z = [], k = (o) => z.push(o);
  let U = 0, C = 0, L = 0;
  for (const o of R) {
    const t = o.pts.map((E) => E.x), n = o.pts.map((E) => E.y), s = Math.max(...t) - Math.min(...t), e = Math.max(...n) - Math.min(...n), r = (Math.min(...t) + Math.max(...t)) / 2, f = (Math.min(...n) + Math.max(...n)) / 2;
    if (Math.max(s, e) / Math.max(Math.min(s, e), 0.01) > 5 || Math.max(s, e) > Y) {
      U++, s > e ? k({ x1: Math.min(...t), y1: f, x2: Math.max(...t), y2: f, h: 0.6, b: e, z: ((_a = o.pts[0]) == null ? void 0 : _a.z) ?? 0 }) : k({ x1: r, y1: Math.min(...n), x2: r, y2: Math.max(...n), h: 0.6, b: s, z: ((_b = o.pts[0]) == null ? void 0 : _b.z) ?? 0 });
      continue;
    }
    let g = 0.4, S = r, K = f;
    if (o.stiffPts && o.stiffPts.length >= 4) {
      const E = o.stiffPts.map((F) => F.x), O = o.stiffPts.map((F) => F.y);
      g = Math.max(...E) - Math.min(...E), S = (Math.min(...E) + Math.max(...E)) / 2, K = (Math.min(...O) + Math.max(...O)) / 2;
    }
    let $ = 0.3;
    const v = N.get(o.footingArea);
    v && u.has(v) && ($ = u.get(v).thickness);
    let Z = 0, V = 0, j = 0, X = 0, H = 0, W = 0;
    if (o.centerJoint && y.has(o.centerJoint.uid)) for (const [E, O] of y.get(o.centerJoint.uid)) {
      const F = Math.abs(O.fz) * a.forceToKn, Q = (O.mx || 0) * a.momentToKnm, tt = (O.my || 0) * a.momentToKnm;
      /live/i.test(E) ? (X += F, H += Q, W += tt) : (Z += F, V += Q, j += tt);
    }
    const B = x.get(o.footingArea);
    B && T.has(B) && (C += T.get(B), L++), J.push({ xC: r, yC: f, xCol: S, yCol: K, Lz: s, Bz: e, tz: $, bc: g, P_dead_kN: Z, Mx_dead_kNm: V, My_dead_kNm: j, P_live_kN: X, Mx_live_kNm: H, My_live_kNm: W, label: o.footingArea });
  }
  if (L > 0) C = C / L;
  else {
    const o = Array.from(T.values())[0];
    o ? (C = o, l.push("ks no asignado a \xE1reas \u2014 usando primer SPRING PROPERTY definido.")) : l.push("No se encontr\xF3 ning\xFAn Subgrade Modulus en el F2K.");
  }
  const _ = [];
  for (const o of m(i, "BEAM OBJECT CONNECTIVITY")) {
    const t = p(o), n = t["Unique Name"] ?? t.UniqueName, s = parseInt(t.UniquePtI, 10), e = parseInt(t.UniquePtJ, 10);
    n && isFinite(s) && isFinite(e) && _.push({ name: n, ptI: s, ptJ: e });
  }
  if (_.length === 0) for (const o of m(i, "LINE OBJECT CONNECTIVITY")) {
    const t = p(o), n = t["Unique Name"] ?? t.UniqueName, s = parseInt(t.UniquePtI, 10), e = parseInt(t.UniquePtJ, 10);
    n && isFinite(s) && isFinite(e) && _.push({ name: n, ptI: s, ptJ: e });
  }
  const P = /* @__PURE__ */ new Map();
  for (const o of m(i, "FRAME SECTION PROPERTY DEFINITIONS - CONCRETE RECTANGULAR")) {
    const t = p(o), n = t.Name;
    n && P.set(n, { h: h(t.Depth) * a.lengthToM, b: h(t.Width) * a.lengthToM, type: t["Section Type"] });
  }
  if (P.size === 0) for (const o of m(i, "FRAME SECTION PROPERTY DEFINITIONS - SUMMARY")) {
    const t = p(o), n = t.Name;
    if (!n) continue;
    const s = h(t.Area), e = h(t.I33);
    if (isFinite(s) && isFinite(e) && s > 0) {
      const r = Math.sqrt(12 * e / s), f = s / r;
      P.set(n, { h: r * a.lengthToM, b: f * a.lengthToM });
    }
  }
  if (P.size === 0) for (const o of m(i, "FRAME SECTION PROPERTIES - GENERAL")) {
    const t = p(o), n = t.SectionName;
    n && P.set(n, { h: h(t.t3) * a.lengthToM, b: h(t.t2) * a.lengthToM });
  }
  const D = /* @__PURE__ */ new Map();
  for (const o of m(i, "FRAME SECTION PROPERTY DEFINITIONS - SUMMARY")) {
    const t = p(o), n = t.Name;
    n && t.Shape && D.set(n, t.Shape);
  }
  const b = /* @__PURE__ */ new Map();
  for (const o of m(i, "FRAME ASSIGNMENTS - SECTION PROPERTIES")) {
    const t = p(o), n = t.UniqueName, s = t["Section Property"];
    n && s && b.set(n, s);
  }
  if (b.size === 0) for (const o of m(i, "LINE ASSIGNMENTS - SECTION PROPERTIES")) {
    const t = p(o), n = t.UniqueName, s = t["Section Property"];
    n && s && b.set(n, s);
  }
  let q = 0;
  for (const o of _) {
    const t = c.get(o.ptI), n = c.get(o.ptJ);
    if (!t || !n) continue;
    const s = b.get(o.name), e = s ? P.get(s) : void 0, r = n.x - t.x, f = n.y - t.y, I = n.z - t.z, A = Math.abs(I) > Math.max(Math.abs(r), Math.abs(f)), g = s ? D.get(s) ?? "" : "", S = /steel|flange|angle|channel|\bpipe\b|\btube\b/i.test(g);
    if (A || S || !e) {
      q++;
      continue;
    }
    k({ x1: t.x, y1: t.y, x2: n.x, y2: n.y, h: e.h, b: e.b, z: t.z });
  }
  q > 0 && l.push(`${q} BEAMs verticales/Column ignoradas (no son vigas de amarre)`), U > 0 && l.push(`${U} cimentaciones corridas/strip footings convertidas a vigas (Lz\xD7Bz > ${Y}m o aspect>5)`);
  const ot = c.size > 0 ? Array.from(c.values())[0].z : 0;
  return { zapatas: J, vigasAmarre: z.length ? z : void 0, ks_kNm3: C, Z: ot, _zapataNames: R.map((o) => o.footingArea), _warnings: l };
}
export {
  at as parseEdificioCimentacionF2k
};
