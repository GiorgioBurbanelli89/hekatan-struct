function st(i) {
  let l = "tonf", a = "m";
  const c = i.match(/CurrUnits\s*=\s*"([^"]+)"/);
  if (c) {
    const N = c[1].split(",").map((R) => R.trim().toLowerCase()), h = N[0], I = N[1];
    (h === "tonf" || h === "kn" || h === "kip" || h === "lb" || h === "n") && (l = h === "kn" ? "kN" : h), (I === "m" || I === "mm" || I === "cm" || I === "ft" || I === "in") && (a = I);
  }
  const u = et[l], T = it[a];
  return { forceToKn: u, lengthToM: T, ksUnitFactor: u / Math.pow(T, 3), momentToKnm: u * T };
}
const et = { tonf: 9.80665, kN: 1, kip: 4.4482216, lb: 0.0044482216, N: 1e-3 }, it = { m: 1, mm: 1e-3, cm: 0.01, ft: 0.3048, in: 0.0254 };
function m(i, l) {
  const a = i.split(/\r?\n/), c = [];
  let u = false;
  const T = new RegExp(`^TABLE:\\s+"${l.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}"\\s*$`);
  for (const N of a) {
    if (T.test(N.trim())) {
      u = true;
      continue;
    }
    if (u) {
      if (/^TABLE:/.test(N.trim()) || /^END\s+TABLE/.test(N.trim())) break;
      const h = N.trim();
      if (h.length === 0) continue;
      c.push(h);
    }
  }
  return c;
}
function p(i) {
  const l = {}, a = /(?:"([^"]+)"|([A-Za-z][A-Za-z0-9 _\-?]*?))\s*=\s*(?:"([^"]*)"|(\S+))/g;
  let c;
  for (; (c = a.exec(i)) !== null; ) {
    const u = (c[1] ?? c[2] ?? "").trim(), T = (c[3] ?? c[4] ?? "").trim();
    u && (l[u] = T);
  }
  return l;
}
const M = (i) => {
  if (i == null) return NaN;
  const l = i.replace(/,(?=\d)/g, ".");
  return parseFloat(l);
};
function at(i) {
  var _a, _b;
  const l = [], a = st(i), c = /* @__PURE__ */ new Map();
  for (const o of m(i, "POINT OBJECT CONNECTIVITY")) {
    const t = p(o), n = parseInt(t.UniqueName, 10);
    isFinite(n) && c.set(n, { uid: n, x: M(t.X) * a.lengthToM, y: M(t.Y) * a.lengthToM, z: M(t.Z) * a.lengthToM, isSpecial: (t.IsSpecial ?? "No").toLowerCase() === "yes" });
  }
  const u = /* @__PURE__ */ new Map();
  for (const o of m(i, "FLOOR OBJECT CONNECTIVITY")) {
    const t = p(o), n = t["Unique Name"] ?? t.UniqueName;
    if (!n) continue;
    const s = [];
    for (let r = 1; r <= 8; r++) {
      const f = parseInt(t[`UniquePt${r}`], 10);
      isFinite(f) && s.push(f);
    }
    const e = M(t.Area);
    u.set(n, { name: n, pts: s, area: isFinite(e) ? e * a.lengthToM * a.lengthToM : 0 });
  }
  const T = /* @__PURE__ */ new Map();
  for (const o of m(i, "SLAB PROPERTY DEFINITIONS")) {
    const t = p(o), n = t.Name;
    n && T.set(n, { name: n, thickness: M(t["Slab Thickness"]) * a.lengthToM });
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
  const h = /* @__PURE__ */ new Map();
  for (const o of m(i, "SPRING PROPERTY DEFINITIONS - AREA SPRINGS")) {
    const t = p(o), n = t.Name, s = M(t["Subgrade Modulus"]);
    n && isFinite(s) && h.set(n, s * a.ksUnitFactor);
  }
  const I = /* @__PURE__ */ new Map();
  for (const o of m(i, "AREA ASSIGNMENTS - AREA SPRINGS")) {
    const t = p(o), n = t.UniqueName, s = t["Spring Property"];
    n && s && I.set(n, s);
  }
  const R = /* @__PURE__ */ new Map();
  for (const o of m(i, "JOINT LOADS ASSIGNMENTS - FORCE")) {
    const t = p(o), n = parseInt(t.UniqueName, 10);
    if (!isFinite(n)) continue;
    const s = t["Load Pattern"] ?? "Dead";
    R.has(n) || R.set(n, /* @__PURE__ */ new Map()), R.get(n).set(s, { joint: n, pattern: s, fz: M(t.FZ), mx: M(t.MX), my: M(t.MY) });
  }
  const z = [], C = [], F = [];
  for (const [o, t] of N.entries()) /^Footing/i.test(t) ? C.push(o) : /^Stiff/i.test(t) && F.push(o);
  if (C.length === 0 && F.length === 0) for (const o of u.keys()) /^LOAD\d+/i.test(o) ? F.push(o) : /^\d+$/.test(o) && C.push(o);
  const Y = (o) => {
    let t = 0, n = 0;
    for (const s of o) t += s.x, n += s.y;
    return { x: t / o.length, y: n / o.length };
  }, nt = F.map((o) => {
    const t = u.get(o);
    if (!t) return null;
    const n = t.pts.map((s) => c.get(s)).filter(Boolean);
    return { area: o, pts: n, ctr: Y(n) };
  }).filter(Boolean);
  for (const o of C) {
    const t = u.get(o);
    if (!t) continue;
    const n = t.pts.map((A) => c.get(A)).filter(Boolean);
    if (n.length < 4) continue;
    const s = Y(n);
    let e, r = 1 / 0;
    for (const A of nt) {
      const y = A.ctr.x - s.x, g = A.ctr.y - s.y, S = Math.hypot(y, g);
      S < r && (r = S, e = A);
    }
    let f;
    e && (f = Array.from(c.values()).filter((y) => y.isSpecial && Math.hypot(y.x - e.ctr.x, y.y - e.ctr.y) < 0.1)[0], f || (f = Array.from(c.values()).filter((g) => g.isSpecial && Math.hypot(g.x - s.x, g.y - s.y) < Math.max(...n.map((S) => Math.hypot(S.x - s.x, S.y - s.y))) * 0.6)[0])), z.push({ footingArea: o, stiffArea: e == null ? void 0 : e.area, pts: n, stiffPts: e == null ? void 0 : e.pts, centerJoint: f });
  }
  const G = 8, J = [], _ = [], k = (o) => _.push(o);
  let U = 0, x = 0, L = 0;
  for (const o of z) {
    const t = o.pts.map((E) => E.x), n = o.pts.map((E) => E.y), s = Math.max(...t) - Math.min(...t), e = Math.max(...n) - Math.min(...n), r = (Math.min(...t) + Math.max(...t)) / 2, f = (Math.min(...n) + Math.max(...n)) / 2;
    if (Math.max(s, e) / Math.max(Math.min(s, e), 0.01) > 5 || Math.max(s, e) > G) {
      U++, s > e ? k({ x1: Math.min(...t), y1: f, x2: Math.max(...t), y2: f, h: 0.6, b: e, z: ((_a = o.pts[0]) == null ? void 0 : _a.z) ?? 0 }) : k({ x1: r, y1: Math.min(...n), x2: r, y2: Math.max(...n), h: 0.6, b: s, z: ((_b = o.pts[0]) == null ? void 0 : _b.z) ?? 0 });
      continue;
    }
    let g = 0.4, S = r, K = f;
    if (o.stiffPts && o.stiffPts.length >= 4) {
      const E = o.stiffPts.map((O) => O.x), P = o.stiffPts.map((O) => O.y);
      g = Math.max(...E) - Math.min(...E), S = (Math.min(...E) + Math.max(...E)) / 2, K = (Math.min(...P) + Math.max(...P)) / 2;
    }
    let $ = 0.3;
    const v = N.get(o.footingArea);
    v && T.has(v) && ($ = T.get(v).thickness);
    let V = 0, Z = 0, j = 0, X = 0, H = 0, W = 0;
    if (o.centerJoint && R.has(o.centerJoint.uid)) for (const [E, P] of R.get(o.centerJoint.uid)) {
      const O = Math.abs(P.fz) * a.forceToKn, Q = (P.mx || 0) * a.momentToKnm, tt = (P.my || 0) * a.momentToKnm;
      /live/i.test(E) ? (X += O, H += Q, W += tt) : (V += O, Z += Q, j += tt);
    }
    const B = I.get(o.footingArea);
    B && h.has(B) && (x += h.get(B), L++), J.push({ xC: r, yC: f, xCol: S, yCol: K, Lz: s, Bz: e, tz: $, bc: g, P_dead_kN: V, Mx_dead_kNm: Z, My_dead_kNm: j, P_live_kN: X, Mx_live_kNm: H, My_live_kNm: W, label: o.footingArea });
  }
  if (L > 0) x = x / L;
  else {
    const o = Array.from(h.values())[0];
    o ? (x = o, l.push("ks no asignado a \xE1reas \u2014 usando primer SPRING PROPERTY definido.")) : l.push("No se encontr\xF3 ning\xFAn Subgrade Modulus en el F2K.");
  }
  const w = [];
  for (const o of m(i, "BEAM OBJECT CONNECTIVITY")) {
    const t = p(o), n = t["Unique Name"] ?? t.UniqueName, s = parseInt(t.UniquePtI, 10), e = parseInt(t.UniquePtJ, 10);
    n && isFinite(s) && isFinite(e) && w.push({ name: n, ptI: s, ptJ: e });
  }
  if (w.length === 0) for (const o of m(i, "LINE OBJECT CONNECTIVITY")) {
    const t = p(o), n = t["Unique Name"] ?? t.UniqueName, s = parseInt(t.UniquePtI, 10), e = parseInt(t.UniquePtJ, 10);
    n && isFinite(s) && isFinite(e) && w.push({ name: n, ptI: s, ptJ: e });
  }
  const d = /* @__PURE__ */ new Map();
  for (const o of m(i, "FRAME SECTION PROPERTY DEFINITIONS - CONCRETE RECTANGULAR")) {
    const t = p(o), n = t.Name;
    n && d.set(n, { h: M(t.Depth) * a.lengthToM, b: M(t.Width) * a.lengthToM, type: t["Section Type"] });
  }
  if (d.size === 0) for (const o of m(i, "FRAME SECTION PROPERTY DEFINITIONS - SUMMARY")) {
    const t = p(o), n = t.Name;
    if (!n) continue;
    const s = M(t.Area), e = M(t.I33);
    if (isFinite(s) && isFinite(e) && s > 0) {
      const r = Math.sqrt(12 * e / s), f = s / r;
      d.set(n, { h: r * a.lengthToM, b: f * a.lengthToM });
    }
  }
  if (d.size === 0) for (const o of m(i, "FRAME SECTION PROPERTIES - GENERAL")) {
    const t = p(o), n = t.SectionName;
    n && d.set(n, { h: M(t.t3) * a.lengthToM, b: M(t.t2) * a.lengthToM });
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
  for (const o of w) {
    const t = c.get(o.ptI), n = c.get(o.ptJ);
    if (!t || !n) continue;
    const s = b.get(o.name), e = s ? d.get(s) : void 0, r = n.x - t.x, f = n.y - t.y, A = n.z - t.z, y = Math.abs(A) > Math.max(Math.abs(r), Math.abs(f)), g = s ? D.get(s) ?? "" : "", S = /steel|flange|angle|channel|\bpipe\b|\btube\b/i.test(g);
    if (y || S || !e) {
      q++;
      continue;
    }
    k({ x1: t.x, y1: t.y, x2: n.x, y2: n.y, h: e.h, b: e.b, z: t.z });
  }
  q > 0 && l.push(`${q} BEAMs verticales/Column ignoradas (no son vigas de amarre)`), U > 0 && l.push(`${U} cimentaciones corridas/strip footings convertidas a vigas (Lz\xD7Bz > ${G}m o aspect>5)`);
  const ot = c.size > 0 ? Array.from(c.values())[0].z : 0;
  return { zapatas: J, vigasAmarre: _.length ? _ : void 0, ks_kNm3: x, Z: ot, _zapataNames: z.map((o) => o.footingArea), _warnings: l };
}
export {
  at as parseEdificioCimentacionF2k
};
