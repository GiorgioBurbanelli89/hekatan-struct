const X = ["#1a4d8c", "#c0392b", "#2d8659", "#d4a017", "#7d3c98", "#117a8b", "#e67e22", "#34495e"];
function Q(a) {
  return X[a % X.length];
}
function Z(a = {}) {
  var _a, _b, _c, _d;
  const x = a.width ?? 560, e = a.height ?? 360, l = a.parent ?? document.body, s = document.createElement("div");
  s.className = "hekatan-chart-panel", Object.assign(s.style, { position: "fixed", top: ((_a = a.position) == null ? void 0 : _a.top) != null ? `${a.position.top}px` : "auto", right: ((_b = a.position) == null ? void 0 : _b.right) != null ? `${a.position.right}px` : "16px", left: ((_c = a.position) == null ? void 0 : _c.left) != null ? `${a.position.left}px` : "auto", bottom: ((_d = a.position) == null ? void 0 : _d.bottom) != null ? `${a.position.bottom}px` : "16px", width: `${x + 16}px`, background: "rgba(20, 24, 30, 0.92)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", boxShadow: "0 6px 24px rgba(0,0,0,0.5)", padding: "8px", fontFamily: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace", fontSize: "11px", color: "#e2e8f0", zIndex: "100", backdropFilter: "blur(6px)", display: a.initiallyVisible ? "block" : "none", userSelect: "none" });
  const c = document.createElement("div");
  Object.assign(c.style, { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px", paddingBottom: "4px", borderBottom: "1px solid rgba(255,255,255,0.1)", cursor: "move" });
  const n = document.createElement("span");
  n.textContent = a.title ?? "Chart", Object.assign(n.style, { fontWeight: "600", fontSize: "12px", color: "#a5b4fc" });
  const p = document.createElement("button");
  p.textContent = "\xD7", Object.assign(p.style, { background: "transparent", border: "none", color: "#e2e8f0", fontSize: "18px", cursor: "pointer", padding: "0 6px", lineHeight: "1" }), p.onclick = () => N.hide(), c.appendChild(n), c.appendChild(p), s.appendChild(c);
  let f = null;
  c.addEventListener("mousedown", (r) => {
    const g = s.getBoundingClientRect();
    f = { x: r.clientX - g.left, y: r.clientY - g.top }, r.preventDefault();
  }), window.addEventListener("mousemove", (r) => {
    f && (s.style.left = `${r.clientX - f.x}px`, s.style.top = `${r.clientY - f.y}px`, s.style.right = "auto", s.style.bottom = "auto");
  }), window.addEventListener("mouseup", () => {
    f = null;
  });
  const y = document.createElement("canvas");
  y.width = x * window.devicePixelRatio, y.height = e * window.devicePixelRatio, Object.assign(y.style, { width: `${x}px`, height: `${e}px`, display: "block" }), s.appendChild(y);
  const w = document.createElement("div");
  Object.assign(w.style, { marginTop: "4px", display: "flex", flexWrap: "wrap", gap: "6px", paddingTop: "4px", borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: "10px" }), s.appendChild(w);
  const m = document.createElement("div");
  Object.assign(m.style, { position: "absolute", background: "rgba(0,0,0,0.85)", border: "1px solid rgba(255,255,255,0.2)", padding: "3px 6px", borderRadius: "3px", pointerEvents: "none", fontSize: "10px", display: "none", color: "#fde68a" }), s.appendChild(m), l.appendChild(s);
  let T = [], i = { xLabel: "x", yLabel: "y", grid: true };
  const t = y.getContext("2d");
  t.scale(window.devicePixelRatio, window.devicePixelRatio);
  const o = { top: 18, right: 18, bottom: 36, left: 56 };
  function d() {
    const r = T.filter((b) => b.visible !== false);
    let g = 1 / 0, u = -1 / 0, M = 1 / 0, h = -1 / 0;
    for (const b of r) for (const [k, C] of b.data) Number.isFinite(k) && Number.isFinite(C) && (k < g && (g = k), k > u && (u = k), C < M && (M = C), C > h && (h = C));
    Number.isFinite(g) || (g = 0, u = 1, M = 0, h = 1), g === u && (u = g + 1), M === h && (h = M + 1);
    const E = (u - g) * 0.02, A = (h - M) * 0.08;
    return { xMin: g - E, xMax: u + E, yMin: M - A, yMax: h + A };
  }
  function P(r, g, u = 6) {
    const M = g - r;
    if (M <= 0) return [r];
    const h = M / u, E = Math.pow(10, Math.floor(Math.log10(h))), A = h / E, b = (A < 1.5 ? 1 : A < 3 ? 2 : A < 7 ? 5 : 10) * E, k = Math.ceil(r / b) * b, C = [];
    for (let S = k; S <= g + b * 1e-3; S += b) C.push(S);
    return C;
  }
  function L(r) {
    return Math.abs(r) < 1e-12 ? "0" : Math.abs(r) >= 1e4 || Math.abs(r) < 1e-3 ? r.toExponential(1) : parseFloat(r.toFixed(4)).toString();
  }
  function F() {
    t.clearRect(0, 0, x, e);
    const r = { xMin: i.xMin ?? d().xMin, xMax: i.xMax ?? d().xMax, yMin: i.yMin ?? d().yMin, yMax: i.yMax ?? d().yMax }, g = x - o.left - o.right, u = e - o.top - o.bottom, M = (b) => o.left + (b - r.xMin) / (r.xMax - r.xMin) * g, h = (b) => o.top + u - (b - r.yMin) / (r.yMax - r.yMin) * u;
    t.fillStyle = "rgba(255,255,255,0.02)", t.fillRect(o.left, o.top, g, u), t.strokeStyle = "rgba(255,255,255,0.08)", t.fillStyle = "#94a3b8", t.font = "10px ui-monospace, monospace", t.textBaseline = "middle";
    const E = P(r.xMin, r.xMax, 7), A = P(r.yMin, r.yMax, 6);
    t.beginPath();
    for (const b of E) {
      const k = M(b);
      t.moveTo(k, o.top), t.lineTo(k, o.top + u);
    }
    for (const b of A) {
      const k = h(b);
      t.moveTo(o.left, k), t.lineTo(o.left + g, k);
    }
    t.stroke(), t.textAlign = "center";
    for (const b of E) t.fillText(L(b), M(b), e - o.bottom + 12);
    t.textAlign = "right";
    for (const b of A) t.fillText(L(b), o.left - 4, h(b));
    t.strokeStyle = "rgba(255,255,255,0.4)", t.lineWidth = 1, t.beginPath(), r.xMin <= 0 && r.xMax >= 0 && (t.moveTo(M(0), o.top), t.lineTo(M(0), o.top + u)), r.yMin <= 0 && r.yMax >= 0 && (t.moveTo(o.left, h(0)), t.lineTo(o.left + g, h(0))), t.stroke(), t.strokeStyle = "rgba(255,255,255,0.3)", t.strokeRect(o.left, o.top, g, u), t.fillStyle = "#cbd5e1", t.font = "11px ui-monospace, monospace", t.textAlign = "center", t.fillText(i.xLabel, o.left + g / 2, e - 6), t.save(), t.translate(12, o.top + u / 2), t.rotate(-Math.PI / 2), t.fillText(i.yLabel, 0, 0), t.restore();
    for (const b of T) {
      if (b.visible === false) continue;
      t.strokeStyle = b.color, t.fillStyle = b.color, t.lineWidth = b.width ?? 1.5;
      const k = b.type ?? "line";
      if (k === "line") {
        t.beginPath();
        let C = false;
        for (const [S, j] of b.data) {
          if (!Number.isFinite(S) || !Number.isFinite(j)) {
            C = false;
            continue;
          }
          const $ = M(S), I = h(j);
          C ? t.lineTo($, I) : (t.moveTo($, I), C = true);
        }
        t.stroke();
      } else if (k === "scatter") for (const [C, S] of b.data) !Number.isFinite(C) || !Number.isFinite(S) || (t.beginPath(), t.arc(M(C), h(S), 2.5, 0, Math.PI * 2), t.fill());
      else if (k === "bar") for (const [C, S] of b.data) {
        if (!Number.isFinite(C) || !Number.isFinite(S)) continue;
        const j = M(C), $ = h(0), I = h(S);
        t.fillRect(j - 2, Math.min($, I), 4, Math.abs(I - $));
      }
    }
  }
  function O() {
    w.innerHTML = "", T.forEach((r, g) => {
      const u = document.createElement("span");
      Object.assign(u.style, { display: "inline-flex", alignItems: "center", gap: "4px", padding: "1px 6px", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "3px", cursor: "pointer", opacity: r.visible === false ? "0.4" : "1" });
      const M = document.createElement("span");
      Object.assign(M.style, { display: "inline-block", width: "10px", height: "10px", background: r.color, borderRadius: "1px" });
      const h = document.createElement("span");
      h.textContent = r.label, u.appendChild(M), u.appendChild(h), u.onclick = () => {
        r.visible = r.visible === false, O(), F();
      }, w.appendChild(u);
    });
  }
  y.addEventListener("mousemove", (r) => {
    const g = y.getBoundingClientRect(), u = r.clientX - g.left, M = r.clientY - g.top;
    if (u < o.left || u > x - o.right || M < o.top || M > e - o.bottom) {
      m.style.display = "none";
      return;
    }
    const h = d(), E = i.xMin ?? h.xMin, A = i.xMax ?? h.xMax, b = i.yMin ?? h.yMin, k = i.yMax ?? h.yMax, C = x - o.left - o.right, S = e - o.top - o.bottom, j = E + (u - o.left) / C * (A - E), $ = k - (M - o.top) / S * (k - b);
    m.style.display = "block", m.style.left = `${u + 12}px`, m.style.top = `${M - 18}px`, m.textContent = `${i.xLabel}=${L(j)}  ${i.yLabel}=${L($)}`;
  }), y.addEventListener("mouseleave", () => {
    m.style.display = "none";
  });
  const N = { el: s, setSeries(r) {
    T = r.map((g, u) => ({ ...g, color: g.color || Q(u), visible: g.visible !== false })), O(), F();
  }, setAxes(r) {
    i = { ...i, ...r }, F();
  }, setTitle(r) {
    n.textContent = r;
  }, show() {
    s.style.display = "block", F();
  }, hide() {
    s.style.display = "none";
  }, toggle() {
    s.style.display = s.style.display === "none" ? "block" : "none", s.style.display === "block" && F();
  }, redraw() {
    F();
  }, destroy() {
    s.remove();
  } };
  return N;
}
let W = null;
function tt() {
  return W || (W = Z({ title: "\u{1F4C8} Gr\xE1ficas \u2014 benchmark din\xE1mico", width: 580, height: 340, position: { top: 70, right: 12 }, initiallyVisible: false })), W;
}
function G(a, x) {
  const e = a.length, l = a.map((n) => n.slice()), s = x.slice();
  for (let n = 0; n < e; n++) {
    let p = n, f = Math.abs(l[n][n]);
    for (let y = n + 1; y < e; y++) Math.abs(l[y][n]) > f && (f = Math.abs(l[y][n]), p = y);
    if (p !== n && ([l[n], l[p]] = [l[p], l[n]], [s[n], s[p]] = [s[p], s[n]]), Math.abs(l[n][n]) < 1e-14) throw new Error(`Singular matrix at row ${n}`);
    for (let y = n + 1; y < e; y++) {
      const w = l[y][n] / l[n][n];
      s[y] -= w * s[n];
      for (let m = n; m < e; m++) l[y][m] -= w * l[n][m];
    }
  }
  const c = new Array(e).fill(0);
  for (let n = e - 1; n >= 0; n--) {
    let p = s[n];
    for (let f = n + 1; f < e; f++) p -= l[n][f] * c[f];
    c[n] = p / l[n][n];
  }
  return c;
}
function z(a, x) {
  const e = a.length, l = new Array(e).fill(0);
  for (let s = 0; s < e; s++) {
    let c = 0;
    for (let n = 0; n < x.length; n++) c += a[s][n] * x[n];
    l[s] = c;
  }
  return l;
}
function D(a, x, e = 1) {
  return a.map((l, s) => l.map((c, n) => c + e * x[s][n]));
}
function R(a) {
  return Array.from({ length: a }, () => new Array(a).fill(0));
}
function et(a, x) {
  const e = a.length, l = R(e);
  for (let i = 0; i < e; i++) for (let t = 0; t <= i; t++) {
    let o = x[i][t];
    for (let d = 0; d < t; d++) o -= l[i][d] * l[t][d];
    if (i === t) {
      if (o <= 0) throw new Error("M not positive definite");
      l[i][t] = Math.sqrt(o);
    } else l[i][t] = o / l[t][t];
  }
  const s = R(e);
  for (let i = 0; i < e; i++) {
    s[i][i] = 1 / l[i][i];
    for (let t = 0; t < i; t++) {
      let o = 0;
      for (let d = t; d < i; d++) o -= l[i][d] * s[d][t];
      s[i][t] = o / l[i][i];
    }
  }
  const c = R(e);
  for (let i = 0; i < e; i++) for (let t = 0; t < e; t++) {
    let o = 0;
    for (let d = 0; d < e; d++) o += a[i][d] * s[t][d];
    c[i][t] = o;
  }
  const n = R(e);
  for (let i = 0; i < e; i++) for (let t = 0; t < e; t++) {
    let o = 0;
    for (let d = 0; d < e; d++) o += s[i][d] * c[d][t];
    n[i][t] = o;
  }
  for (let i = 0; i < e; i++) for (let t = i + 1; t < e; t++) {
    const o = (n[i][t] + n[t][i]) / 2;
    n[i][t] = o, n[t][i] = o;
  }
  const { values: p, vectors: f } = _(n), y = p.map((i, t) => t).sort((i, t) => p[i] - p[t]), w = y.map((i) => p[i]), m = y.map((i) => f.map((t) => t[i])), T = R(e);
  for (let i = 0; i < e; i++) for (let t = 0; t < e; t++) {
    let o = 0;
    for (let d = 0; d < e; d++) o += s[d][t] * m[i][d];
    T[t][i] = o;
  }
  return { omega2: w, freqs: w.map((i) => Math.sqrt(Math.max(i, 0)) / (2 * Math.PI)), modes: T };
}
function _(a) {
  const x = a.length, e = a.map((n) => n.slice()), l = R(x);
  for (let n = 0; n < x; n++) l[n][n] = 1;
  const s = 200, c = 1e-12;
  for (let n = 0; n < s; n++) {
    let p = 0, f = 1, y = 0;
    for (let o = 0; o < x; o++) for (let d = o + 1; d < x; d++) Math.abs(e[o][d]) > y && (y = Math.abs(e[o][d]), p = o, f = d);
    if (y < c) break;
    const w = (e[f][f] - e[p][p]) / (2 * e[p][f]);
    let m;
    Math.abs(w) > 1e30 ? m = 1 / (2 * w) : m = (w >= 0 ? 1 : -1) / (Math.abs(w) + Math.sqrt(w * w + 1));
    const T = 1 / Math.sqrt(m * m + 1), i = m * T, t = e[p][f];
    e[p][p] -= m * t, e[f][f] += m * t, e[p][f] = 0, e[f][p] = 0;
    for (let o = 0; o < x; o++) {
      if (o !== p && o !== f) {
        const L = e[o][p], F = e[o][f];
        e[o][p] = T * L - i * F, e[p][o] = e[o][p], e[o][f] = i * L + T * F, e[f][o] = e[o][f];
      }
      const d = l[o][p], P = l[o][f];
      l[o][p] = T * d - i * P, l[o][f] = i * d + T * P;
    }
  }
  return { values: e.map((n, p) => n[p]), vectors: l };
}
function nt(a) {
  const { M: x, K: e, loadFunc: l, u0: s, v0: c, dt: n, nSteps: p } = a, f = x.length, y = a.C ?? R(f), w = a.gamma ?? 0.5, m = a.beta ?? 0.25, T = l(0), i = z(y, c), t = z(e, s), o = T.map((E, A) => E - i[A] - t[A]), d = G(x, o), P = 1 / (m * n * n), L = w / (m * n), F = D(D(e, x, P), y, L), O = [0], N = [s.slice()], r = [c.slice()], g = [d.slice()];
  let u = s.slice(), M = c.slice(), h = d.slice();
  for (let E = 0; E < p; E++) {
    const A = (E + 1) * n, b = l(A), k = 1 / (m * n * n), C = 1 / (m * n), S = 1 / (2 * m) - 1, j = w / (m * n), $ = w / m - 1, I = n * (w / (2 * m) - 1), H = new Array(f).fill(0), K = new Array(f).fill(0), Y = new Array(f).fill(0);
    for (let v = 0; v < f; v++) K[v] = k * u[v] + C * M[v] + S * h[v], Y[v] = j * u[v] + $ * M[v] + I * h[v];
    const U = z(x, K), J = z(y, Y);
    for (let v = 0; v < f; v++) H[v] = b[v] + U[v] + J[v];
    const B = G(F, H), q = new Array(f).fill(0), V = new Array(f).fill(0);
    for (let v = 0; v < f; v++) q[v] = k * (B[v] - u[v]) - C * M[v] - S * h[v], V[v] = M[v] + n * ((1 - w) * h[v] + w * q[v]);
    O.push(A), N.push(B.slice()), r.push(V.slice()), g.push(q.slice()), u = B, M = V, h = q;
  }
  return { t: O, u: N, v: r, a: g };
}
function ot(a, x, e) {
  return (l) => l >= x && l <= e ? a : 0;
}
function it(a, x, e) {
  return (l) => {
    const s = new Array(e).fill(0);
    return s[x] = a(l), s;
  };
}
function st(a, x) {
  const e = a.length;
  if (x.length !== e) throw new Error(`k.length=${x.length} != m.length=${e}`);
  const l = R(e), s = R(e);
  for (let c = 0; c < e; c++) s[c][c] = a[c], l[c][c] = x[c] + (c + 1 < e ? x[c + 1] : 0), c + 1 < e && (l[c][c + 1] = -x[c + 1], l[c + 1][c] = -x[c + 1]);
  return { K: l, M: s };
}
function lt(a, x, e, l, s, c = s) {
  const n = l * l - e * e, p = 2 * e * l * (s * l - c * e) / n, f = 2 * (c * l - s * e) / n;
  return D(a.map((y) => y.map((w) => p * w)), x, f);
}
export {
  et as a,
  lt as b,
  tt as g,
  nt as n,
  it as p,
  ot as r,
  st as s,
  R as z
};
