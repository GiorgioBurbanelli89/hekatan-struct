import "./modulepreload-polyfill-B5Qt9EMX.js";
import { P as C } from "./tweakpane-BXg6ZhiP.js";
import { c as S, I as v, T as F, b as $, p as P } from "./espectroNec-CSaHDgof.js";
document.body.style.margin = "0";
document.body.style.background = "#0d1117";
document.body.style.fontFamily = "ui-monospace, Menlo, Consolas, monospace";
const b = document.createElement("div");
b.innerHTML = `<div style="padding:10px 16px;color:#e6edf3;font-size:15px;font-weight:600;border-bottom:1px solid #30363d">
     \u{1F310} Espectro de dise\xF1o \xB7 NEC-SE-DS <span style="color:#8b949e;font-weight:400">\u2014 M\xF3dulo 1 Peligro S\xEDsmico (Hekatan)</span>
   </div>`;
document.body.appendChild(b);
const r = document.createElement("div");
Object.assign(r.style, { display: "flex", gap: "12px", padding: "12px", alignItems: "flex-start", flexWrap: "wrap" });
document.body.appendChild(r);
const l = document.createElement("div");
Object.assign(l.style, { display: "flex", flexDirection: "column", gap: "12px", width: "310px", flex: "0 0 310px" });
r.appendChild(l);
const h = document.createElement("div");
l.appendChild(h);
const p = document.createElement("div");
Object.assign(p.style, { padding: "12px 14px", color: "#e6edf3", fontSize: "12px", lineHeight: "1.55", background: "rgba(22,27,34,0.92)", border: "1px solid #30363d", borderRadius: "8px" });
l.appendChild(p);
const g = document.createElement("div");
Object.assign(g.style, { flex: "1 1 640px", minWidth: "0" });
r.appendChild(g);
const t = { norma: "NEC15", region: "Costa", suelo: "D", Z: 0.4, R: 8, I: 1, phiP: 1, phiE: 1, hn: 12, tipoTa: "Hormig\xF3n sin muros" }, c = S({ title: "Sa(T) \u2014 Espectro el\xE1stico vs dise\xF1o", width: 640, height: 440, initiallyVisible: true, parent: g });
Object.assign(c.el.style, { position: "relative", top: "auto", right: "auto", left: "auto", bottom: "auto" });
function a(e, i = 3) {
  return Number.isFinite(e) ? e.toFixed(i) : "\u2014";
}
function o() {
  const e = $({ norma: t.norma, Z: t.Z, suelo: t.suelo, region: t.region, R: t.R, I: t.I, phiP: t.phiP, phiE: t.phiE }), i = P(t.hn, t.tipoTa), T = e.elastico.reduce((n, [m, E]) => Math.abs(m - i) < Math.abs(n[0] - i) ? [m, E] : n, [0, 0])[1], u = e.SaPlateau * 1.05;
  c.setSeries([{ label: "Sa el\xE1stico", data: e.elastico, color: "#58a6ff", width: 2 }, { label: "Sa dise\xF1o (reducido)", data: e.diseno, color: "#f0883e", width: 2 }, { label: `Ta=${a(i, 2)}s`, data: [[i, 0], [i, u]], color: "#3fb950", width: 1.5 }]), c.setAxes({ xLabel: "T (s)", yLabel: "Sa (g)", xMin: 0, yMin: 0, grid: true });
  const f = t.norma === "NEC15" ? "NEC-15 (2014) \xB7 vigente" : "Borrador 2023 (no oficial)", y = t.norma === "NEC15" ? "T\u2264T0: Sa=Z\xB7Fa\xB7[1+(\u03B7\u22121)\xB7T/T0]<br>T0&lt;T\u2264Tc: Sa=\u03B7\xB7Z\xB7Fa<br>T&gt;Tc: Sa=\u03B7\xB7Z\xB7Fa\xB7(Tc/T)^r" : "T&lt;T0: Sa=Z\xB7Fa\xB7[1+1.4\xB7T/T0]<br>T0\u2264T&lt;Tc: Sa=2.4\xB7Z\xB7Fa<br>Tc\u2264T&lt;TL: Sa=2.4\xB7Z\xB7Fa\xB7(Tc/T)^r<br>T\u2265TL: Sa=2.4\xB7Z\xB7Fa\xB7(Tc/TL)^r\xB7(TL/T)\xB2";
  p.innerHTML = `
   <div style="font-weight:600;color:#58a6ff;margin-bottom:6px">\u{1F4CB} ${f}</div>
   <table style="border-collapse:collapse;width:100%">
     <tr><td>PGA = Z</td><td style="text-align:right">${a(e.pga)} g</td></tr>
     <tr><td>Fa</td><td style="text-align:right">${a(e.Fa)}</td></tr>
     <tr><td>Fd</td><td style="text-align:right">${a(e.Fd)}</td></tr>
     <tr><td>Fs</td><td style="text-align:right">${a(e.Fs)}</td></tr>
     <tr><td>${t.norma === "NEC15" ? "\u03B7" : "factor meseta"}</td><td style="text-align:right">${a(e.eta, 2)}</td></tr>
     <tr><td>r</td><td style="text-align:right">${a(e.r, 2)}</td></tr>
     <tr><td>T0</td><td style="text-align:right">${a(e.T0)} s</td></tr>
     <tr><td>Tc</td><td style="text-align:right">${a(e.Tc)} s</td></tr>
     <tr><td>TL</td><td style="text-align:right">${a(e.TL)} s</td></tr>
     <tr><td>Sa meseta (m\xE1x)</td><td style="text-align:right;color:#58a6ff">${a(e.SaPlateau)} g</td></tr>
     <tr style="border-top:1px solid #30363d"><td>Ta = Ct\xB7hn^\u03B1</td><td style="text-align:right;color:#3fb950">${a(i, 3)} s</td></tr>
     <tr><td>Sa(Ta) el\xE1stico</td><td style="text-align:right;color:#3fb950">${a(T)} g</td></tr>
   </table>
   <div style="margin-top:10px;color:#8b949e">Tramos del espectro:</div>
   <div style="font-size:11px;color:#c9d1d9;margin:4px 0;padding:6px;background:#161b22;border-radius:6px">${y}</div>
   <div style="margin-top:8px;color:#8b949e;font-size:11px">Referencias NEC:</div>
   <ul style="margin:4px 0 0 0;padding-left:16px;font-size:11px;color:#8b949e">
     ${Object.values(e.refs).map((n) => `<li>${n}</li>`).join("")}
   </ul>`;
}
const d = new C({ title: "\u2699\uFE0F Par\xE1metros NEC-SE-DS", container: h });
d.addBinding(t, "norma", { label: "Norma", options: { "NEC-15 (2014)": "NEC15", "Borrador 2023": "BORRADOR2023" } }).on("change", o);
d.addBinding(t, "region", { label: "Regi\xF3n", options: { Costa: "Costa", Sierra: "Sierra", Oriente: "Oriente", Esmeraldas: "Esmeraldas", Gal\u00E1pagos: "Galapagos" } }).on("change", o);
d.addBinding(t, "suelo", { label: "Tipo de suelo", options: { A: "A", B: "B", C: "C", D: "D", E: "E" } }).on("change", o);
d.addBinding(t, "Z", { label: "Factor Z (g)", min: 0.1, max: 0.6, step: 0.01 }).on("change", o);
const s = d.addFolder({ title: "Reducci\xF3n / dise\xF1o", expanded: true });
s.addBinding(t, "R", { label: "R", min: 1, max: 8, step: 0.5 }).on("change", o);
s.addBinding(t, "I", { label: "Importancia I", options: v }).on("change", o);
s.addBinding(t, "phiP", { label: "\u03A6P planta", min: 0.9, max: 1, step: 0.05 }).on("change", o);
s.addBinding(t, "phiE", { label: "\u03A6E elevaci\xF3n", min: 0.9, max: 1, step: 0.05 }).on("change", o);
const x = d.addFolder({ title: "Per\xEDodo Ta", expanded: true });
x.addBinding(t, "hn", { label: "Altura hn (m)", min: 3, max: 80, step: 0.5 }).on("change", o);
x.addBinding(t, "tipoTa", { label: "Tipo", options: Object.fromEntries(Object.keys(F).map((e) => [e, e])) }).on("change", o);
o();
