const N = ["#1a4d8c", "#c0392b", "#2d8659", "#d4a017", "#7d3c98", "#117a8b", "#e67e22", "#34495e"];
function W(d) {
  return N[d % N.length];
}
function z(d = {}) {
  var _a, _b, _c, _d;
  const h = d.width ?? 560, u = d.height ?? 360, B = d.parent ?? document.body, p = document.createElement("div");
  p.className = "hekatan-chart-panel", Object.assign(p.style, { position: "fixed", top: ((_a = d.position) == null ? void 0 : _a.top) != null ? `${d.position.top}px` : "auto", right: ((_b = d.position) == null ? void 0 : _b.right) != null ? `${d.position.right}px` : "16px", left: ((_c = d.position) == null ? void 0 : _c.left) != null ? `${d.position.left}px` : "auto", bottom: ((_d = d.position) == null ? void 0 : _d.bottom) != null ? `${d.position.bottom}px` : "16px", width: `${h + 16}px`, background: "rgba(20, 24, 30, 0.92)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", boxShadow: "0 6px 24px rgba(0,0,0,0.5)", padding: "8px", fontFamily: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace", fontSize: "11px", color: "#e2e8f0", zIndex: "100", backdropFilter: "blur(6px)", display: d.initiallyVisible ? "block" : "none", userSelect: "none" });
  const k = document.createElement("div");
  Object.assign(k.style, { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px", paddingBottom: "4px", borderBottom: "1px solid rgba(255,255,255,0.1)", cursor: "move" });
  const E = document.createElement("span");
  E.textContent = d.title ?? "Chart", Object.assign(E.style, { fontWeight: "600", fontSize: "12px", color: "#a5b4fc" });
  const R = document.createElement("button");
  R.textContent = "\xD7", Object.assign(R.style, { background: "transparent", border: "none", color: "#e2e8f0", fontSize: "18px", cursor: "pointer", padding: "0 6px", lineHeight: "1" }), R.onclick = () => I.hide(), k.appendChild(E), k.appendChild(R), p.appendChild(k);
  let C = null;
  k.addEventListener("mousedown", (t) => {
    const l = p.getBoundingClientRect();
    C = { x: t.clientX - l.left, y: t.clientY - l.top }, t.preventDefault();
  }), window.addEventListener("mousemove", (t) => {
    C && (p.style.left = `${t.clientX - C.x}px`, p.style.top = `${t.clientY - C.y}px`, p.style.right = "auto", p.style.bottom = "auto");
  }), window.addEventListener("mouseup", () => {
    C = null;
  });
  const g = document.createElement("canvas");
  g.width = h * window.devicePixelRatio, g.height = u * window.devicePixelRatio, Object.assign(g.style, { width: `${h}px`, height: `${u}px`, display: "block" }), p.appendChild(g);
  const F = document.createElement("div");
  Object.assign(F.style, { marginTop: "4px", display: "flex", flexWrap: "wrap", gap: "6px", paddingTop: "4px", borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: "10px" }), p.appendChild(F);
  const m = document.createElement("div");
  Object.assign(m.style, { position: "absolute", background: "rgba(0,0,0,0.85)", border: "1px solid rgba(255,255,255,0.2)", padding: "3px 6px", borderRadius: "3px", pointerEvents: "none", fontSize: "10px", display: "none", color: "#fde68a" }), p.appendChild(m), B.appendChild(p);
  let L = [], x = { xLabel: "x", yLabel: "y", grid: true };
  const e = g.getContext("2d");
  e.scale(window.devicePixelRatio, window.devicePixelRatio);
  const i = { top: 18, right: 18, bottom: 36, left: 56 };
  function S() {
    const t = L.filter((n) => n.visible !== false);
    let l = 1 / 0, o = -1 / 0, s = 1 / 0, a = -1 / 0;
    for (const n of t) for (const [r, c] of n.data) Number.isFinite(r) && Number.isFinite(c) && (r < l && (l = r), r > o && (o = r), c < s && (s = c), c > a && (a = c));
    Number.isFinite(l) || (l = 0, o = 1, s = 0, a = 1), l === o && (o = l + 1), s === a && (a = s + 1);
    const y = (o - l) * 0.02, b = (a - s) * 0.08;
    return { xMin: l - y, xMax: o + y, yMin: s - b, yMax: a + b };
  }
  function O(t, l, o = 6) {
    const s = l - t;
    if (s <= 0) return [t];
    const a = s / o, y = Math.pow(10, Math.floor(Math.log10(a))), b = a / y, n = (b < 1.5 ? 1 : b < 3 ? 2 : b < 7 ? 5 : 10) * y, r = Math.ceil(t / n) * n, c = [];
    for (let f = r; f <= l + n * 1e-3; f += n) c.push(f);
    return c;
  }
  function $(t) {
    return Math.abs(t) < 1e-12 ? "0" : Math.abs(t) >= 1e4 || Math.abs(t) < 1e-3 ? t.toExponential(1) : parseFloat(t.toFixed(4)).toString();
  }
  function v() {
    e.clearRect(0, 0, h, u);
    const t = { xMin: x.xMin ?? S().xMin, xMax: x.xMax ?? S().xMax, yMin: x.yMin ?? S().yMin, yMax: x.yMax ?? S().yMax }, l = h - i.left - i.right, o = u - i.top - i.bottom, s = (n) => i.left + (n - t.xMin) / (t.xMax - t.xMin) * l, a = (n) => i.top + o - (n - t.yMin) / (t.yMax - t.yMin) * o;
    e.fillStyle = "rgba(255,255,255,0.02)", e.fillRect(i.left, i.top, l, o), e.strokeStyle = "rgba(255,255,255,0.08)", e.fillStyle = "#94a3b8", e.font = "10px ui-monospace, monospace", e.textBaseline = "middle";
    const y = O(t.xMin, t.xMax, 7), b = O(t.yMin, t.yMax, 6);
    e.beginPath();
    for (const n of y) {
      const r = s(n);
      e.moveTo(r, i.top), e.lineTo(r, i.top + o);
    }
    for (const n of b) {
      const r = a(n);
      e.moveTo(i.left, r), e.lineTo(i.left + l, r);
    }
    e.stroke(), e.textAlign = "center";
    for (const n of y) e.fillText($(n), s(n), u - i.bottom + 12);
    e.textAlign = "right";
    for (const n of b) e.fillText($(n), i.left - 4, a(n));
    e.strokeStyle = "rgba(255,255,255,0.4)", e.lineWidth = 1, e.beginPath(), t.xMin <= 0 && t.xMax >= 0 && (e.moveTo(s(0), i.top), e.lineTo(s(0), i.top + o)), t.yMin <= 0 && t.yMax >= 0 && (e.moveTo(i.left, a(0)), e.lineTo(i.left + l, a(0))), e.stroke(), e.strokeStyle = "rgba(255,255,255,0.3)", e.strokeRect(i.left, i.top, l, o), e.fillStyle = "#cbd5e1", e.font = "11px ui-monospace, monospace", e.textAlign = "center", e.fillText(x.xLabel, i.left + l / 2, u - 6), e.save(), e.translate(12, i.top + o / 2), e.rotate(-Math.PI / 2), e.fillText(x.yLabel, 0, 0), e.restore();
    for (const n of L) {
      if (n.visible === false) continue;
      e.strokeStyle = n.color, e.fillStyle = n.color, e.lineWidth = n.width ?? 1.5;
      const r = n.type ?? "line";
      if (r === "line") {
        e.beginPath();
        let c = false;
        for (const [f, w] of n.data) {
          if (!Number.isFinite(f) || !Number.isFinite(w)) {
            c = false;
            continue;
          }
          const M = s(f), T = a(w);
          c ? e.lineTo(M, T) : (e.moveTo(M, T), c = true);
        }
        e.stroke();
      } else if (r === "scatter") for (const [c, f] of n.data) !Number.isFinite(c) || !Number.isFinite(f) || (e.beginPath(), e.arc(s(c), a(f), 2.5, 0, Math.PI * 2), e.fill());
      else if (r === "bar") for (const [c, f] of n.data) {
        if (!Number.isFinite(c) || !Number.isFinite(f)) continue;
        const w = s(c), M = a(0), T = a(f);
        e.fillRect(w - 2, Math.min(M, T), 4, Math.abs(T - M));
      }
    }
  }
  function j() {
    F.innerHTML = "", L.forEach((t, l) => {
      const o = document.createElement("span");
      Object.assign(o.style, { display: "inline-flex", alignItems: "center", gap: "4px", padding: "1px 6px", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "3px", cursor: "pointer", opacity: t.visible === false ? "0.4" : "1" });
      const s = document.createElement("span");
      Object.assign(s.style, { display: "inline-block", width: "10px", height: "10px", background: t.color, borderRadius: "1px" });
      const a = document.createElement("span");
      a.textContent = t.label, o.appendChild(s), o.appendChild(a), o.onclick = () => {
        t.visible = t.visible === false, j(), v();
      }, F.appendChild(o);
    });
  }
  g.addEventListener("mousemove", (t) => {
    const l = g.getBoundingClientRect(), o = t.clientX - l.left, s = t.clientY - l.top;
    if (o < i.left || o > h - i.right || s < i.top || s > u - i.bottom) {
      m.style.display = "none";
      return;
    }
    const a = S(), y = x.xMin ?? a.xMin, b = x.xMax ?? a.xMax, n = x.yMin ?? a.yMin, r = x.yMax ?? a.yMax, c = h - i.left - i.right, f = u - i.top - i.bottom, w = y + (o - i.left) / c * (b - y), M = r - (s - i.top) / f * (r - n);
    m.style.display = "block", m.style.left = `${o + 12}px`, m.style.top = `${s - 18}px`, m.textContent = `${x.xLabel}=${$(w)}  ${x.yLabel}=${$(M)}`;
  }), g.addEventListener("mouseleave", () => {
    m.style.display = "none";
  });
  const I = { el: p, setSeries(t) {
    L = t.map((l, o) => ({ ...l, color: l.color || W(o), visible: l.visible !== false })), j(), v();
  }, setAxes(t) {
    x = { ...x, ...t }, v();
  }, setTitle(t) {
    E.textContent = t;
  }, show() {
    p.style.display = "block", v();
  }, hide() {
    p.style.display = "none";
  }, toggle() {
    p.style.display = p.style.display === "none" ? "block" : "none", p.style.display === "block" && v();
  }, redraw() {
    v();
  }, destroy() {
    p.remove();
  } };
  return I;
}
let P = null;
function A() {
  return P || (P = z({ title: "\u{1F4C8} Gr\xE1ficas \u2014 benchmark din\xE1mico", width: 580, height: 340, position: { top: 70, right: 12 }, initiallyVisible: false })), P;
}
export {
  z as c,
  A as g
};
