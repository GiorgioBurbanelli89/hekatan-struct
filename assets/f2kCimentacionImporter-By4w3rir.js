function H(i) {
  let m = "tonf", a = "m";
  const c = i.match(/CurrUnits\s*=\s*"([^"]+)"/);
  if (c) {
    const N = c[1].split(",").map((R) => R.trim().toLowerCase()), p = N[0], E = N[1];
    (p === "tonf" || p === "kn" || p === "kip" || p === "lb" || p === "n") && (m = p === "kn" ? "kN" : p), (E === "m" || E === "mm" || E === "cm" || E === "ft" || E === "in") && (a = E);
  }
  const M = W[m], g = Q[a];
  return { forceToKn: M, lengthToM: g, ksUnitFactor: M / Math.pow(g, 3), momentToKnm: M * g };
}
const W = { tonf: 9.80665, kN: 1, kip: 4.4482216, lb: 0.0044482216, N: 1e-3 }, Q = { m: 1, mm: 1e-3, cm: 0.01, ft: 0.3048, in: 0.0254 };
function l(i, m) {
  const a = i.split(/\r?\n/), c = [];
  let M = false;
  const g = new RegExp(`^TABLE:\\s+"${m.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}"\\s*$`);
  for (const N of a) {
    if (g.test(N.trim())) {
      M = true;
      continue;
    }
    if (M) {
      if (/^TABLE:/.test(N.trim()) || /^END\s+TABLE/.test(N.trim())) break;
      const p = N.trim();
      if (p.length === 0) continue;
      c.push(p);
    }
  }
  return c;
}
function h(i) {
  const m = {}, a = /(?:"([^"]+)"|([A-Za-z][A-Za-z0-9 _\-?]*?))\s*=\s*(?:"([^"]*)"|(\S+))/g;
  let c;
  for (; (c = a.exec(i)) !== null; ) {
    const M = (c[1] ?? c[2] ?? "").trim(), g = (c[3] ?? c[4] ?? "").trim();
    M && (m[M] = g);
  }
  return m;
}
const u = (i) => {
  if (i == null) return NaN;
  const m = i.replace(/,(?=\d)/g, ".");
  return parseFloat(m);
};
function tt(i) {
  var _a, _b;
  const m = [], a = H(i), c = /* @__PURE__ */ new Map();
  for (const n of l(i, "POINT OBJECT CONNECTIVITY")) {
    const t = h(n), o = parseInt(t.UniqueName, 10);
    isFinite(o) && c.set(o, { uid: o, x: u(t.X) * a.lengthToM, y: u(t.Y) * a.lengthToM, z: u(t.Z) * a.lengthToM, isSpecial: (t.IsSpecial ?? "No").toLowerCase() === "yes" });
  }
  const M = /* @__PURE__ */ new Map();
  for (const n of l(i, "FLOOR OBJECT CONNECTIVITY")) {
    const t = h(n), o = t["Unique Name"] ?? t.UniqueName;
    if (!o) continue;
    const s = [];
    for (let r = 1; r <= 8; r++) {
      const f = parseInt(t[`UniquePt${r}`], 10);
      isFinite(f) && s.push(f);
    }
    const e = u(t.Area);
    M.set(o, { name: o, pts: s, area: isFinite(e) ? e * a.lengthToM * a.lengthToM : 0 });
  }
  const g = /* @__PURE__ */ new Map();
  for (const n of l(i, "SLAB PROPERTY DEFINITIONS")) {
    const t = h(n), o = t.Name;
    o && g.set(o, { name: o, thickness: u(t["Slab Thickness"]) * a.lengthToM });
  }
  const N = /* @__PURE__ */ new Map();
  for (const n of l(i, "AREA ASSIGNMENTS - SECTION PROPERTIES")) {
    const t = h(n), o = t.UniqueName, s = t["Section Property"];
    o && s && N.set(o, s);
  }
  if (N.size === 0) for (const n of l(i, "AREA ASSIGNMENTS - SUMMARY")) {
    const t = h(n), o = t.UniqueName, s = t["Section Property"];
    o && s && N.set(o, s);
  }
  const p = /* @__PURE__ */ new Map();
  for (const n of l(i, "SPRING PROPERTY DEFINITIONS - AREA SPRINGS")) {
    const t = h(n), o = t.Name, s = u(t["Subgrade Modulus"]);
    o && isFinite(s) && p.set(o, s * a.ksUnitFactor);
  }
  const E = /* @__PURE__ */ new Map();
  for (const n of l(i, "AREA ASSIGNMENTS - AREA SPRINGS")) {
    const t = h(n), o = t.UniqueName, s = t["Spring Property"];
    o && s && E.set(o, s);
  }
  const R = /* @__PURE__ */ new Map();
  for (const n of l(i, "JOINT LOADS ASSIGNMENTS - FORCE")) {
    const t = h(n), o = parseInt(t.UniqueName, 10);
    isFinite(o) && R.set(o, { joint: o, pattern: t["Load Pattern"] ?? "Dead", fz: u(t.FZ), mx: u(t.MX), my: u(t.MY) });
  }
  const w = [], O = [], C = [];
  for (const [n, t] of N.entries()) /^Footing/i.test(t) ? O.push(n) : /^Stiff/i.test(t) && C.push(n);
  if (O.length === 0 && C.length === 0) for (const n of M.keys()) /^LOAD\d+/i.test(n) ? C.push(n) : /^\d+$/.test(n) && O.push(n);
  const v = (n) => {
    let t = 0, o = 0;
    for (const s of n) t += s.x, o += s.y;
    return { x: t / n.length, y: o / n.length };
  }, j = C.map((n) => {
    const t = M.get(n);
    if (!t) return null;
    const o = t.pts.map((s) => c.get(s)).filter(Boolean);
    return { area: n, pts: o, ctr: v(o) };
  }).filter(Boolean);
  for (const n of O) {
    const t = M.get(n);
    if (!t) continue;
    const o = t.pts.map((I) => c.get(I)).filter(Boolean);
    if (o.length < 4) continue;
    const s = v(o);
    let e, r = 1 / 0;
    for (const I of j) {
      const A = I.ctr.x - s.x, S = I.ctr.y - s.y, y = Math.hypot(A, S);
      y < r && (r = y, e = I);
    }
    let f;
    e && (f = Array.from(c.values()).filter((A) => A.isSpecial && Math.hypot(A.x - e.ctr.x, A.y - e.ctr.y) < 0.1)[0], f || (f = Array.from(c.values()).filter((S) => S.isSpecial && Math.hypot(S.x - s.x, S.y - s.y) < Math.max(...o.map((y) => Math.hypot(y.x - s.x, y.y - s.y))) * 0.6)[0])), w.push({ footingArea: n, stiffArea: e == null ? void 0 : e.area, pts: o, stiffPts: e == null ? void 0 : e.pts, centerJoint: f });
  }
  const G = 8, J = [], z = [], U = (n) => z.push(n);
  let b = 0, P = 0, k = 0;
  for (const n of w) {
    const t = n.pts.map((T) => T.x), o = n.pts.map((T) => T.y), s = Math.max(...t) - Math.min(...t), e = Math.max(...o) - Math.min(...o), r = (Math.min(...t) + Math.max(...t)) / 2, f = (Math.min(...o) + Math.max(...o)) / 2;
    if (Math.max(s, e) / Math.max(Math.min(s, e), 0.01) > 5 || Math.max(s, e) > G) {
      b++, s > e ? U({ x1: Math.min(...t), y1: f, x2: Math.max(...t), y2: f, h: 0.6, b: e, z: ((_a = n.pts[0]) == null ? void 0 : _a.z) ?? 0 }) : U({ x1: r, y1: Math.min(...o), x2: r, y2: Math.max(...o), h: 0.6, b: s, z: ((_b = n.pts[0]) == null ? void 0 : _b.z) ?? 0 });
      continue;
    }
    let S = 0.4, y = r, Y = f;
    if (n.stiffPts && n.stiffPts.length >= 4) {
      const T = n.stiffPts.map((B) => B.x), Z = n.stiffPts.map((B) => B.y);
      S = Math.max(...T) - Math.min(...T), y = (Math.min(...T) + Math.max(...T)) / 2, Y = (Math.min(...Z) + Math.max(...Z)) / 2;
    }
    let D = 0.3;
    const L = N.get(n.footingArea);
    L && g.has(L) && (D = g.get(L).thickness);
    let K = 0, $ = 0, V = 0;
    if (n.centerJoint && R.has(n.centerJoint.uid)) {
      const T = R.get(n.centerJoint.uid);
      K = Math.abs(T.fz) * a.forceToKn, $ = T.mx * a.momentToKnm, V = T.my * a.momentToKnm;
    }
    const q = E.get(n.footingArea);
    q && p.has(q) && (P += p.get(q), k++), J.push({ xC: r, yC: f, xCol: y, yCol: Y, Lz: s, Bz: e, tz: D, bc: S, P_dead_kN: K, Mx_dead_kNm: $, My_dead_kNm: V, label: n.footingArea });
  }
  if (k > 0) P = P / k;
  else {
    const n = Array.from(p.values())[0];
    n ? (P = n, m.push("ks no asignado a \xE1reas \u2014 usando primer SPRING PROPERTY definido.")) : m.push("No se encontr\xF3 ning\xFAn Subgrade Modulus en el F2K.");
  }
  const x = [];
  for (const n of l(i, "BEAM OBJECT CONNECTIVITY")) {
    const t = h(n), o = t["Unique Name"] ?? t.UniqueName, s = parseInt(t.UniquePtI, 10), e = parseInt(t.UniquePtJ, 10);
    o && isFinite(s) && isFinite(e) && x.push({ name: o, ptI: s, ptJ: e });
  }
  if (x.length === 0) for (const n of l(i, "LINE OBJECT CONNECTIVITY")) {
    const t = h(n), o = t["Unique Name"] ?? t.UniqueName, s = parseInt(t.UniquePtI, 10), e = parseInt(t.UniquePtJ, 10);
    o && isFinite(s) && isFinite(e) && x.push({ name: o, ptI: s, ptJ: e });
  }
  const d = /* @__PURE__ */ new Map();
  for (const n of l(i, "FRAME SECTION PROPERTY DEFINITIONS - CONCRETE RECTANGULAR")) {
    const t = h(n), o = t.Name;
    o && d.set(o, { h: u(t.Depth) * a.lengthToM, b: u(t.Width) * a.lengthToM, type: t["Section Type"] });
  }
  if (d.size === 0) for (const n of l(i, "FRAME SECTION PROPERTY DEFINITIONS - SUMMARY")) {
    const t = h(n), o = t.Name;
    if (!o) continue;
    const s = u(t.Area), e = u(t.I33);
    if (isFinite(s) && isFinite(e) && s > 0) {
      const r = Math.sqrt(12 * e / s), f = s / r;
      d.set(o, { h: r * a.lengthToM, b: f * a.lengthToM });
    }
  }
  if (d.size === 0) for (const n of l(i, "FRAME SECTION PROPERTIES - GENERAL")) {
    const t = h(n), o = t.SectionName;
    o && d.set(o, { h: u(t.t3) * a.lengthToM, b: u(t.t2) * a.lengthToM });
  }
  const F = /* @__PURE__ */ new Map();
  for (const n of l(i, "FRAME ASSIGNMENTS - SECTION PROPERTIES")) {
    const t = h(n), o = t.UniqueName, s = t["Section Property"];
    o && s && F.set(o, s);
  }
  if (F.size === 0) for (const n of l(i, "LINE ASSIGNMENTS - SECTION PROPERTIES")) {
    const t = h(n), o = t.UniqueName, s = t["Section Property"];
    o && s && F.set(o, s);
  }
  let _ = 0;
  for (const n of x) {
    const t = c.get(n.ptI), o = c.get(n.ptJ);
    if (!t || !o) continue;
    const s = F.get(n.name), e = s ? d.get(s) : void 0, r = o.x - t.x, f = o.y - t.y, I = o.z - t.z, A = Math.abs(I) > Math.max(Math.abs(r), Math.abs(f)), S = (e == null ? void 0 : e.type) === "Column";
    if (A || S) {
      _++;
      continue;
    }
    U({ x1: t.x, y1: t.y, x2: o.x, y2: o.y, h: (e == null ? void 0 : e.h) ?? 0.4, b: (e == null ? void 0 : e.b) ?? 0.25, z: t.z });
  }
  _ > 0 && m.push(`${_} BEAMs verticales/Column ignoradas (no son vigas de amarre)`), b > 0 && m.push(`${b} cimentaciones corridas/strip footings convertidas a vigas (Lz\xD7Bz > ${G}m o aspect>5)`);
  const X = c.size > 0 ? Array.from(c.values())[0].z : 0;
  return { zapatas: J, vigasAmarre: z.length ? z : void 0, ks_kNm3: P, Z: X, _zapataNames: w.map((n) => n.footingArea), _warnings: m };
}
export {
  tt as parseEdificioCimentacionF2k
};
