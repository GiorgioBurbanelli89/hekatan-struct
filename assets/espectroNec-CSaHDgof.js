const $ = ["#1a4d8c", "#c0392b", "#2d8659", "#d4a017", "#7d3c98", "#117a8b", "#e67e22", "#34495e"];
function j(t) {
  return $[t % $.length];
}
function W(t = {}) {
  var _a, _b, _c, _d;
  const l = t.width ?? 560, o = t.height ?? 360, i = t.parent ?? document.body, c = document.createElement("div");
  c.className = "hekatan-chart-panel", Object.assign(c.style, { position: "fixed", top: ((_a = t.position) == null ? void 0 : _a.top) != null ? `${t.position.top}px` : "auto", right: ((_b = t.position) == null ? void 0 : _b.right) != null ? `${t.position.right}px` : "16px", left: ((_c = t.position) == null ? void 0 : _c.left) != null ? `${t.position.left}px` : "auto", bottom: ((_d = t.position) == null ? void 0 : _d.bottom) != null ? `${t.position.bottom}px` : "16px", width: `${l + 16}px`, background: "rgba(20, 24, 30, 0.92)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", boxShadow: "0 6px 24px rgba(0,0,0,0.5)", padding: "8px", fontFamily: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace", fontSize: "11px", color: "#e2e8f0", zIndex: "100", backdropFilter: "blur(6px)", display: t.initiallyVisible ? "block" : "none", userSelect: "none" });
  const v = document.createElement("div");
  Object.assign(v.style, { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px", paddingBottom: "4px", borderBottom: "1px solid rgba(255,255,255,0.1)", cursor: "move" });
  const w = document.createElement("span");
  w.textContent = t.title ?? "Chart", Object.assign(w.style, { fontWeight: "600", fontSize: "12px", color: "#a5b4fc" });
  const E = document.createElement("button");
  E.textContent = "\xD7", Object.assign(E.style, { background: "transparent", border: "none", color: "#e2e8f0", fontSize: "18px", cursor: "pointer", padding: "0 6px", lineHeight: "1" }), E.onclick = () => A.hide(), v.appendChild(w), v.appendChild(E), c.appendChild(v);
  let g = null;
  v.addEventListener("mousedown", (e) => {
    const r = c.getBoundingClientRect();
    g = { x: e.clientX - r.left, y: e.clientY - r.top }, e.preventDefault();
  }), window.addEventListener("mousemove", (e) => {
    g && (c.style.left = `${e.clientX - g.x}px`, c.style.top = `${e.clientY - g.y}px`, c.style.right = "auto", c.style.bottom = "auto");
  }), window.addEventListener("mouseup", () => {
    g = null;
  });
  const m = document.createElement("canvas");
  m.width = l * window.devicePixelRatio, m.height = o * window.devicePixelRatio, Object.assign(m.style, { width: `${l}px`, height: `${o}px`, display: "block" }), c.appendChild(m);
  const M = document.createElement("div");
  Object.assign(M.style, { marginTop: "4px", display: "flex", flexWrap: "wrap", gap: "6px", paddingTop: "4px", borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: "10px" }), c.appendChild(M);
  const d = document.createElement("div");
  Object.assign(d.style, { position: "absolute", background: "rgba(0,0,0,0.85)", border: "1px solid rgba(255,255,255,0.2)", padding: "3px 6px", borderRadius: "3px", pointerEvents: "none", fontSize: "10px", display: "none", color: "#fde68a" }), c.appendChild(d), i.appendChild(c);
  let y = [], f = { xLabel: "x", yLabel: "y", grid: true };
  const n = m.getContext("2d");
  n.scale(window.devicePixelRatio, window.devicePixelRatio);
  const s = { top: 18, right: 18, bottom: 36, left: 56 };
  function F() {
    const e = y.filter((a) => a.visible !== false);
    let r = 1 / 0, p = -1 / 0, u = 1 / 0, x = -1 / 0;
    for (const a of e) for (const [b, h] of a.data) Number.isFinite(b) && Number.isFinite(h) && (b < r && (r = b), b > p && (p = b), h < u && (u = h), h > x && (x = h));
    Number.isFinite(r) || (r = 0, p = 1, u = 0, x = 1), r === p && (p = r + 1), u === x && (x = u + 1);
    const S = (p - r) * 0.02, T = (x - u) * 0.08;
    return { xMin: r - S, xMax: p + S, yMin: u - T, yMax: x + T };
  }
  function O(e, r, p = 6) {
    const u = r - e;
    if (u <= 0) return [e];
    const x = u / p, S = Math.pow(10, Math.floor(Math.log10(x))), T = x / S, a = (T < 1.5 ? 1 : T < 3 ? 2 : T < 7 ? 5 : 10) * S, b = Math.ceil(e / a) * a, h = [];
    for (let C = b; C <= r + a * 1e-3; C += a) h.push(C);
    return h;
  }
  function R(e) {
    return Math.abs(e) < 1e-12 ? "0" : Math.abs(e) >= 1e4 || Math.abs(e) < 1e-3 ? e.toExponential(1) : parseFloat(e.toFixed(4)).toString();
  }
  function k() {
    n.clearRect(0, 0, l, o);
    const e = { xMin: f.xMin ?? F().xMin, xMax: f.xMax ?? F().xMax, yMin: f.yMin ?? F().yMin, yMax: f.yMax ?? F().yMax }, r = l - s.left - s.right, p = o - s.top - s.bottom, u = (a) => s.left + (a - e.xMin) / (e.xMax - e.xMin) * r, x = (a) => s.top + p - (a - e.yMin) / (e.yMax - e.yMin) * p;
    n.fillStyle = "rgba(255,255,255,0.02)", n.fillRect(s.left, s.top, r, p), n.strokeStyle = "rgba(255,255,255,0.08)", n.fillStyle = "#94a3b8", n.font = "10px ui-monospace, monospace", n.textBaseline = "middle";
    const S = O(e.xMin, e.xMax, 7), T = O(e.yMin, e.yMax, 6);
    n.beginPath();
    for (const a of S) {
      const b = u(a);
      n.moveTo(b, s.top), n.lineTo(b, s.top + p);
    }
    for (const a of T) {
      const b = x(a);
      n.moveTo(s.left, b), n.lineTo(s.left + r, b);
    }
    n.stroke(), n.textAlign = "center";
    for (const a of S) n.fillText(R(a), u(a), o - s.bottom + 12);
    n.textAlign = "right";
    for (const a of T) n.fillText(R(a), s.left - 4, x(a));
    n.strokeStyle = "rgba(255,255,255,0.4)", n.lineWidth = 1, n.beginPath(), e.xMin <= 0 && e.xMax >= 0 && (n.moveTo(u(0), s.top), n.lineTo(u(0), s.top + p)), e.yMin <= 0 && e.yMax >= 0 && (n.moveTo(s.left, x(0)), n.lineTo(s.left + r, x(0))), n.stroke(), n.strokeStyle = "rgba(255,255,255,0.3)", n.strokeRect(s.left, s.top, r, p), n.fillStyle = "#cbd5e1", n.font = "11px ui-monospace, monospace", n.textAlign = "center", n.fillText(f.xLabel, s.left + r / 2, o - 6), n.save(), n.translate(12, s.top + p / 2), n.rotate(-Math.PI / 2), n.fillText(f.yLabel, 0, 0), n.restore();
    for (const a of y) {
      if (a.visible === false) continue;
      n.strokeStyle = a.color, n.fillStyle = a.color, n.lineWidth = a.width ?? 1.5;
      const b = a.type ?? "line";
      if (b === "line") {
        n.beginPath();
        let h = false;
        for (const [C, B] of a.data) {
          if (!Number.isFinite(C) || !Number.isFinite(B)) {
            h = false;
            continue;
          }
          const N = u(C), P = x(B);
          h ? n.lineTo(N, P) : (n.moveTo(N, P), h = true);
        }
        n.stroke();
      } else if (b === "scatter") for (const [h, C] of a.data) !Number.isFinite(h) || !Number.isFinite(C) || (n.beginPath(), n.arc(u(h), x(C), 2.5, 0, Math.PI * 2), n.fill());
      else if (b === "bar") for (const [h, C] of a.data) {
        if (!Number.isFinite(h) || !Number.isFinite(C)) continue;
        const B = u(h), N = x(0), P = x(C);
        n.fillRect(B - 2, Math.min(N, P), 4, Math.abs(P - N));
      }
    }
  }
  function D() {
    M.innerHTML = "", y.forEach((e, r) => {
      const p = document.createElement("span");
      Object.assign(p.style, { display: "inline-flex", alignItems: "center", gap: "4px", padding: "1px 6px", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "3px", cursor: "pointer", opacity: e.visible === false ? "0.4" : "1" });
      const u = document.createElement("span");
      Object.assign(u.style, { display: "inline-block", width: "10px", height: "10px", background: e.color, borderRadius: "1px" });
      const x = document.createElement("span");
      x.textContent = e.label, p.appendChild(u), p.appendChild(x), p.onclick = () => {
        e.visible = e.visible === false, D(), k();
      }, M.appendChild(p);
    });
  }
  m.addEventListener("mousemove", (e) => {
    const r = m.getBoundingClientRect(), p = e.clientX - r.left, u = e.clientY - r.top;
    if (p < s.left || p > l - s.right || u < s.top || u > o - s.bottom) {
      d.style.display = "none";
      return;
    }
    const x = F(), S = f.xMin ?? x.xMin, T = f.xMax ?? x.xMax, a = f.yMin ?? x.yMin, b = f.yMax ?? x.yMax, h = l - s.left - s.right, C = o - s.top - s.bottom, B = S + (p - s.left) / h * (T - S), N = b - (u - s.top) / C * (b - a);
    d.style.display = "block", d.style.left = `${p + 12}px`, d.style.top = `${u - 18}px`, d.textContent = `${f.xLabel}=${R(B)}  ${f.yLabel}=${R(N)}`;
  }), m.addEventListener("mouseleave", () => {
    d.style.display = "none";
  });
  const A = { el: c, setSeries(e) {
    y = e.map((r, p) => ({ ...r, color: r.color || j(p), visible: r.visible !== false })), D(), k();
  }, setAxes(e) {
    f = { ...f, ...e }, k();
  }, setTitle(e) {
    w.textContent = e;
  }, show() {
    c.style.display = "block", k();
  }, hide() {
    c.style.display = "none";
  }, toggle() {
    c.style.display = c.style.display === "none" ? "block" : "none", c.style.display === "block" && k();
  }, redraw() {
    k();
  }, destroy() {
    c.remove();
  } };
  return A;
}
let L = null;
function et() {
  return L || (L = W({ title: "\u{1F4C8} Gr\xE1ficas \u2014 benchmark din\xE1mico", width: 580, height: 340, position: { top: 70, right: 12 }, initiallyVisible: false })), L;
}
const Z = [0.15, 0.25, 0.3, 0.35, 0.4, 0.5], V = { A: [0.9, 0.9, 0.9, 0.9, 0.9, 0.9], B: [1, 1, 1, 1, 1, 1], C: [1.4, 1.3, 1.25, 1.23, 1.2, 1.18], D: [1.6, 1.4, 1.3, 1.25, 1.2, 1.12], E: [1.8, 1.4, 1.25, 1.1, 1, 0.85] }, H = { A: [0.9, 0.9, 0.9, 0.9, 0.9, 0.9], B: [1, 1, 1, 1, 1, 1], C: [1.36, 1.28, 1.19, 1.15, 1.11, 1.06], D: [1.62, 1.45, 1.36, 1.28, 1.19, 1.11], E: [2.1, 1.75, 1.7, 1.65, 1.6, 1.5] }, z = { A: [0.75, 0.75, 0.75, 0.75, 0.75, 0.75], B: [0.75, 0.75, 0.75, 0.75, 0.75, 0.75], C: [0.85, 0.94, 1.02, 1.06, 1.11, 1.23], D: [1.02, 1.06, 1.11, 1.19, 1.28, 1.4], E: [1.5, 1.6, 1.7, 1.8, 1.9, 2] }, X = [0.15, 0.25, 0.35, 0.45, 0.55], Y = { A: [0.9, 0.9, 0.9, 0.9, 0.9], B: [1, 1, 1, 1, 1], C: [1.4, 1.3, 1.23, 1.19, 1.13], D: [1.6, 1.4, 1.25, 1.14, 1], E: [1.8, 1.4, 1.1, 0.9, 0.62] }, G = { A: [0.9, 0.9, 0.9, 0.9, 0.9], B: [1, 1, 1, 1, 1], C: [1.36, 1.28, 1.15, 1.08, 1], D: [1.62, 1.45, 1.28, 1.15, 1], E: [2.1, 1.75, 1.65, 1.52, 1.36] }, U = { A: [0.75, 0.75, 0.75, 0.75, 0.75], B: [0.75, 0.75, 0.75, 0.75, 0.75], C: [0.85, 0.94, 1.06, 1.17, 1.28], D: [1.02, 1.06, 1.19, 1.32, 1.44], E: [1.5, 1.6, 1.8, 1.94, 2.09] }, nt = { "Otras (1.0)": 1, "Especial (1.3 / 1.25)": 1.3, "Esencial (1.5)": 1.5 };
function I(t, l, o) {
  if (t <= l[0]) return o[0];
  if (t >= l[l.length - 1]) return o[o.length - 1];
  for (let i = 0; i < l.length - 1; i++) if (t >= l[i] && t <= l[i + 1]) {
    const c = (t - l[i]) / (l[i + 1] - l[i]);
    return o[i] + c * (o[i + 1] - o[i]);
  }
  return o[o.length - 1];
}
function q(t) {
  return t === "Costa" ? 1.8 : t === "Oriente" ? 2.6 : 2.48;
}
function J(t) {
  return t === "Costa" ? 1.2 : 1;
}
function K(t) {
  const l = t.Tmax ?? 4, o = t.dT ?? 0.02, i = t.norma === "NEC15", c = i ? Z : X, v = i ? V : Y, w = i ? H : G, E = i ? z : U, g = I(t.Z, c, v[t.suelo]), m = I(t.Z, c, w[t.suelo]), M = I(t.Z, c, E[t.suelo]), d = 0.1 * M * m / g, y = (i ? 0.55 : 0.4) * M * m / g;
  let f = 2.4 * m;
  i && (t.suelo === "D" || t.suelo === "E") && (f = Math.min(f, 4));
  const n = i ? q(t.region) : 2.4, s = i ? t.suelo === "E" ? 1.5 : 1 : J(t.region), F = n * t.Z * g, O = t.R * t.phiP * t.phiE / t.I, R = (e) => i ? e <= d ? t.Z * g * (1 + (n - 1) * (e / d)) : e <= y ? F : F * Math.pow(y / e, s) : e < d ? t.Z * g * (1 + 1.4 * (e / d)) : e < y ? F : e < f ? F * Math.pow(y / e, s) : F * Math.pow(y / f, s) * Math.pow(f / e, 2), k = [], D = [];
  for (let e = 0; e <= l + 1e-9; e += o) {
    const r = R(e);
    k.push([+e.toFixed(4), +r.toFixed(5)]), D.push([+e.toFixed(4), +(r / O).toFixed(5)]);
  }
  const A = i ? { Z: "NEC-SE-DS \xA73.1.1, Tabla 1 (p.27)", suelo: "NEC-SE-DS \xA73.2.1, Tabla 2 (p.29)", FaFdFs: "NEC-SE-DS \xA73.2.2, Tablas 3-4-5 (p.31)", eta: "NEC-SE-DS \xA73.3.1 (p.34) \u2014 \u03B7 Costa 1.80 / Sierra 2.48 / Oriente 2.60", espectro: "NEC-SE-DS \xA73.3.1, Fig.3 (p.34) \u2014 Sa=\u03B7\xB7Z\xB7Fa ; Sa=\u03B7\xB7Z\xB7Fa\xB7(Tc/T)^r", periodos: "NEC-SE-DS \xA73.3.1 \u2014 T0=0.10\xB7Fs\xB7Fd/Fa ; Tc=0.55\xB7Fs\xB7Fd/Fa ; TL=2.4\xB7Fd" } : { Z: "Borrador 2023 \xA73.1, Tabla 3.1 (p.53)", suelo: "Borrador 2023 \xA73.3.1, Tabla 3.2 (p.54)", FaFdFs: "Borrador 2023 \xA73.3.2, Tablas 3.3-3.4-3.5 (p.56)", eta: "Borrador 2023 \xA73.4.1 \u2014 meseta = 2.4\xB7Z\xB7Fa (sin \u03B7)", espectro: "Borrador 2023 \xA73.4.1, Fig.3.2 (p.57) \u2014 4 ramas", periodos: "Borrador 2023 \xA73.4.1 \u2014 T0=0.10\xB7Fs\xB7Fd/Fa ; Tc=0.40\xB7Fs\xB7Fd/Fa ; TL=2.4\xB7Fd" };
  return { norma: t.norma, Fa: g, Fd: m, Fs: M, eta: n, r: s, T0: d, Tc: y, TL: f, SaPlateau: F, pga: t.Z, elastico: k, diseno: D, refs: A };
}
const _ = { "Acero sin arriostramientos": { Ct: 0.072, a: 0.8 }, "Acero con arriostramientos": { Ct: 0.073, a: 0.75 }, "Hormig\xF3n sin muros": { Ct: 0.055, a: 0.9 }, "Hormig\xF3n con muros / mamposter\xEDa": { Ct: 0.055, a: 0.75 } };
function Q(t, l) {
  const o = _[l] ?? _["Hormig\xF3n sin muros"];
  return o.Ct * Math.pow(t, o.a);
}
function tt(t, l) {
  const o = t.elastico;
  if (l <= o[0][0]) return o[0][1];
  if (l >= o[o.length - 1][0]) return o[o.length - 1][1];
  for (let i = 0; i < o.length - 1; i++) if (l >= o[i][0] && l <= o[i + 1][0]) {
    const c = (l - o[i][0]) / (o[i + 1][0] - o[i][0]);
    return o[i][1] + c * (o[i + 1][1] - o[i][1]);
  }
  return o[o.length - 1][1];
}
function ot(t) {
  const l = K(t), o = Q(t.N * t.he, t.tipoTa), i = tt(l, o), c = t.N * t.wPiso, v = t.I * i / (t.R * t.phiP * t.phiE), w = v * c;
  let E;
  o <= 0.5 ? E = 1 : o >= 2.5 ? E = 2 : E = 0.75 + 0.5 * o;
  const g = [];
  let m = 0;
  for (let d = 1; d <= t.N; d++) {
    const y = d * t.he, f = t.wPiso * Math.pow(y, E);
    g.push(f), m += f;
  }
  const M = [];
  for (let d = 1; d <= t.N; d++) {
    const y = g[d - 1] / m, f = y * w;
    M.push({ piso: d, hi: d * t.he, wi: t.wPiso, whk: g[d - 1], Cvx: y, Fx: f, Vi: 0 });
  }
  for (let d = 0; d < M.length; d++) {
    let y = 0;
    for (let f = d; f < M.length; f++) y += M[f].Fx;
    M[d].Vi = y;
  }
  return { Ta: o, SaTa: i, W: c, V: w, coefV: v, k: E, pisos: M, refs: { V: "NEC-SE-DS \xA76.3.2 \u2014 V = (I\xB7Sa(Ta))/(R\xB7\u03A6P\xB7\u03A6E)\xB7W (p.61)", W: "NEC-SE-DS \xA76.1.7 \u2014 W = D + 0.25\xB7L (peso s\xEDsmico reactivo)", dist: "NEC-SE-DS \xA76.3.5 \u2014 Fx=Cvx\xB7V ; Cvx=w\xB7h^k/\u03A3(w\xB7h^k)", k: "NEC-SE-DS \xA76.3.5 \u2014 k=1 (Ta\u22640.5) ; k=0.75+0.5\xB7Ta (0.5<Ta<2.5) ; k=2 (Ta\u22652.5)", ...l.refs } };
}
export {
  nt as I,
  _ as T,
  ot as a,
  K as b,
  W as c,
  et as g,
  Q as p
};
