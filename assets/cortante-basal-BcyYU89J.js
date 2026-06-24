import "./modulepreload-polyfill-B5Qt9EMX.js";
import { P as y } from "./tweakpane-BXg6ZhiP.js";
import { c as C, I as E, T as N, a as v } from "./espectroNec-CSaHDgof.js";
document.body.style.margin = "0";
document.body.style.background = "#0d1117";
document.body.style.fontFamily = "ui-monospace, Menlo, Consolas, monospace";
const x = document.createElement("div");
x.innerHTML = `<div style="padding:10px 16px;color:#e6edf3;font-size:15px;font-weight:600;border-bottom:1px solid #30363d">
     \u{1F3E2} Cortante basal \xB7 NEC-SE-DS <span style="color:#8b949e;font-weight:400">\u2014 M\xF3dulo 3 (Hekatan)</span>
   </div>`;
document.body.appendChild(x);
const d = document.createElement("div");
Object.assign(d.style, { display: "flex", gap: "12px", padding: "12px", alignItems: "flex-start", flexWrap: "wrap" });
document.body.appendChild(d);
const s = document.createElement("div");
Object.assign(s.style, { display: "flex", flexDirection: "column", gap: "12px", width: "310px", flex: "0 0 310px" });
d.appendChild(s);
const b = document.createElement("div");
s.appendChild(b);
const h = document.createElement("div");
Object.assign(h.style, { padding: "12px 14px", color: "#e6edf3", fontSize: "11.5px", lineHeight: "1.5", background: "rgba(22,27,34,0.92)", border: "1px solid #30363d", borderRadius: "8px" });
s.appendChild(h);
const m = document.createElement("div");
Object.assign(m.style, { flex: "1 1 620px", minWidth: "0" });
d.appendChild(m);
const t = { norma: "NEC15", region: "Costa", suelo: "D", Z: 0.4, R: 8, I: 1, phiP: 1, phiE: 1, tipoTa: "Hormig\xF3n sin muros", N: 5, he: 3, wPiso: 1200 }, g = C({ title: "Distribuci\xF3n de fuerzas \u2014 Fx y cortante Vi vs altura", width: 620, height: 460, initiallyVisible: true, parent: m });
Object.assign(g.el.style, { position: "relative", top: "auto", right: "auto", left: "auto", bottom: "auto" });
const o = (e, l = 2) => Number.isFinite(e) ? e.toFixed(l) : "\u2014";
function i() {
  const e = v({ norma: t.norma, Z: t.Z, suelo: t.suelo, region: t.region, R: t.R, I: t.I, phiP: t.phiP, phiE: t.phiE, N: t.N, he: t.he, wPiso: t.wPiso, tipoTa: t.tipoTa }), l = [[0, 0]];
  e.pisos.forEach((a) => l.push([a.Fx, a.hi]));
  const c = [];
  e.pisos.forEach((a) => c.push([a.Vi, a.hi])), c.push([0, e.pisos[e.pisos.length - 1].hi + t.he]), g.setSeries([{ label: "Fx (kN)", data: l, color: "#f0883e", type: "scatter", width: 6 }, { label: "Vi cortante (kN)", data: c, color: "#58a6ff", width: 2 }]), g.setAxes({ xLabel: "Fuerza / Cortante (kN)", yLabel: "Altura (m)", xMin: 0, yMin: 0, grid: true });
  const f = t.norma === "NEC15" ? "NEC-15 (2014) \xB7 vigente" : "Borrador 2023", u = e.pisos.slice().reverse().map((a) => `
    <tr>
      <td style="text-align:center">${a.piso}</td>
      <td style="text-align:right">${o(a.hi, 1)}</td>
      <td style="text-align:right">${o(a.Cvx, 3)}</td>
      <td style="text-align:right;color:#f0883e">${o(a.Fx, 1)}</td>
      <td style="text-align:right;color:#58a6ff">${o(a.Vi, 1)}</td>
    </tr>`).join("");
  h.innerHTML = `
   <div style="font-weight:600;color:#58a6ff;margin-bottom:6px">\u{1F4CB} ${f} \u2014 Cortante basal</div>
   <table style="border-collapse:collapse;width:100%;margin-bottom:8px">
     <tr><td>Ta</td><td style="text-align:right">${o(e.Ta, 3)} s</td></tr>
     <tr><td>Sa(Ta) el\xE1stico</td><td style="text-align:right">${o(e.SaTa, 3)} g</td></tr>
     <tr><td>W (peso reactivo)</td><td style="text-align:right">${o(e.W, 0)} kN</td></tr>
     <tr><td>V / W (coef. s\xEDsmico)</td><td style="text-align:right">${o(e.coefV, 3)}</td></tr>
     <tr><td>k (exponente)</td><td style="text-align:right">${o(e.k, 2)}</td></tr>
     <tr style="border-top:1px solid #30363d"><td><b>V cortante basal</b></td><td style="text-align:right;color:#3fb950"><b>${o(e.V, 1)} kN</b></td></tr>
   </table>
   <table style="border-collapse:collapse;width:100%;font-size:11px">
     <tr style="color:#8b949e;border-bottom:1px solid #30363d">
       <th>Piso</th><th style="text-align:right">h (m)</th><th style="text-align:right">Cvx</th>
       <th style="text-align:right">Fx (kN)</th><th style="text-align:right">Vi (kN)</th>
     </tr>
     ${u}
   </table>
   <div style="margin-top:8px;color:#8b949e;font-size:10.5px">Referencias NEC:</div>
   <ul style="margin:4px 0 0 0;padding-left:15px;font-size:10.5px;color:#8b949e">
     ${[e.refs.V, e.refs.W, e.refs.dist, e.refs.k].map((a) => `<li>${a}</li>`).join("")}
   </ul>`;
}
const n = new y({ title: "\u2699\uFE0F Cortante basal NEC-SE-DS", container: b });
n.addBinding(t, "norma", { label: "Norma", options: { "NEC-15 (2014)": "NEC15", "Borrador 2023": "BORRADOR2023" } }).on("change", i);
n.addBinding(t, "region", { label: "Regi\xF3n", options: { Costa: "Costa", Sierra: "Sierra", Oriente: "Oriente", Esmeraldas: "Esmeraldas", Gal\u00E1pagos: "Galapagos" } }).on("change", i);
n.addBinding(t, "suelo", { label: "Suelo", options: { A: "A", B: "B", C: "C", D: "D", E: "E" } }).on("change", i);
n.addBinding(t, "Z", { label: "Factor Z (g)", min: 0.1, max: 0.6, step: 0.01 }).on("change", i);
const r = n.addFolder({ title: "Reducci\xF3n", expanded: true });
r.addBinding(t, "R", { label: "R", min: 1, max: 8, step: 0.5 }).on("change", i);
r.addBinding(t, "I", { label: "Importancia I", options: E }).on("change", i);
r.addBinding(t, "phiP", { label: "\u03A6P", min: 0.9, max: 1, step: 0.05 }).on("change", i);
r.addBinding(t, "phiE", { label: "\u03A6E", min: 0.9, max: 1, step: 0.05 }).on("change", i);
const p = n.addFolder({ title: "Edificio", expanded: true });
p.addBinding(t, "N", { label: "N\xB0 pisos", min: 1, max: 40, step: 1 }).on("change", i);
p.addBinding(t, "he", { label: "Altura entrepiso (m)", min: 2.4, max: 5, step: 0.1 }).on("change", i);
p.addBinding(t, "wPiso", { label: "Peso/piso W (kN)", min: 100, max: 1e4, step: 50 }).on("change", i);
p.addBinding(t, "tipoTa", { label: "Tipo (Ta)", options: Object.fromEntries(Object.keys(N).map((e) => [e, e])) }).on("change", i);
i();
