const R = [0.15, 0.25, 0.3, 0.35, 0.4, 0.5], O = { A: [0.9, 0.9, 0.9, 0.9, 0.9, 0.9], B: [1, 1, 1, 1, 1, 1], C: [1.4, 1.3, 1.25, 1.23, 1.2, 1.18], D: [1.6, 1.4, 1.3, 1.25, 1.2, 1.12], E: [1.8, 1.4, 1.25, 1.1, 1, 0.85] }, P = { A: [0.9, 0.9, 0.9, 0.9, 0.9, 0.9], B: [1, 1, 1, 1, 1, 1], C: [1.36, 1.28, 1.19, 1.15, 1.11, 1.06], D: [1.62, 1.45, 1.36, 1.28, 1.19, 1.11], E: [2.1, 1.75, 1.7, 1.65, 1.6, 1.5] }, Z = { A: [0.75, 0.75, 0.75, 0.75, 0.75, 0.75], B: [0.75, 0.75, 0.75, 0.75, 0.75, 0.75], C: [0.85, 0.94, 1.02, 1.06, 1.11, 1.23], D: [1.02, 1.06, 1.11, 1.19, 1.28, 1.4], E: [1.5, 1.6, 1.7, 1.8, 1.9, 2] }, _ = [0.15, 0.25, 0.35, 0.45, 0.55], k = { A: [0.9, 0.9, 0.9, 0.9, 0.9], B: [1, 1, 1, 1, 1], C: [1.4, 1.3, 1.23, 1.19, 1.13], D: [1.6, 1.4, 1.25, 1.14, 1], E: [1.8, 1.4, 1.1, 0.9, 0.62] }, M = { A: [0.9, 0.9, 0.9, 0.9, 0.9], B: [1, 1, 1, 1, 1], C: [1.36, 1.28, 1.15, 1.08, 1], D: [1.62, 1.45, 1.28, 1.15, 1], E: [2.1, 1.75, 1.65, 1.52, 1.36] }, w = { A: [0.75, 0.75, 0.75, 0.75, 0.75], B: [0.75, 0.75, 0.75, 0.75, 0.75], C: [0.85, 0.94, 1.06, 1.17, 1.28], D: [1.02, 1.06, 1.19, 1.32, 1.44], E: [1.5, 1.6, 1.8, 1.94, 2.09] }, v = { "Otras (1.0)": 1, "Especial (1.3 / 1.25)": 1.3, "Esencial (1.5)": 1.5 };
function N(t, n, o) {
  if (t <= n[0]) return o[0];
  if (t >= n[n.length - 1]) return o[o.length - 1];
  for (let s = 0; s < n.length - 1; s++) if (t >= n[s] && t <= n[s + 1]) {
    const c = (t - n[s]) / (n[s + 1] - n[s]);
    return o[s] + c * (o[s + 1] - o[s]);
  }
  return o[o.length - 1];
}
function I(t) {
  return t === "Costa" ? 1.8 : t === "Oriente" ? 2.6 : 2.48;
}
function V(t) {
  return t === "Costa" ? 1.2 : 1;
}
function b(t) {
  const n = t.Tmax ?? 4, o = t.dT ?? 0.02, s = t.norma === "NEC15", c = s ? R : _, f = s ? O : k, h = s ? P : M, E = s ? Z : w, u = N(t.Z, c, f[t.suelo]), C = N(t.Z, c, h[t.suelo]), F = N(t.Z, c, E[t.suelo]), e = 0.1 * F * C / u, i = (s ? 0.55 : 0.4) * F * C / u;
  let a = 2.4 * C;
  s && (t.suelo === "D" || t.suelo === "E") && (a = Math.min(a, 4));
  const d = s ? I(t.region) : 2.4, S = s ? t.suelo === "E" ? 1.5 : 1 : V(t.region), l = d * t.Z * u, g = t.R * t.phiP * t.phiE / t.I, A = (r) => s ? r <= e ? t.Z * u * (1 + (d - 1) * (r / e)) : r <= i ? l : l * Math.pow(i / r, S) : r < e ? t.Z * u * (1 + 1.4 * (r / e)) : r < i ? l : r < a ? l * Math.pow(i / r, S) : l * Math.pow(i / a, S) * Math.pow(a / r, 2), m = [], T = [];
  for (let r = 0; r <= n + 1e-9; r += o) {
    const D = A(r);
    m.push([+r.toFixed(4), +D.toFixed(5)]), T.push([+r.toFixed(4), +(D / g).toFixed(5)]);
  }
  const x = s ? { Z: "NEC-SE-DS \xA73.1.1, Tabla 1 (p.27)", suelo: "NEC-SE-DS \xA73.2.1, Tabla 2 (p.29)", FaFdFs: "NEC-SE-DS \xA73.2.2, Tablas 3-4-5 (p.31)", eta: "NEC-SE-DS \xA73.3.1 (p.34) \u2014 \u03B7 Costa 1.80 / Sierra 2.48 / Oriente 2.60", espectro: "NEC-SE-DS \xA73.3.1, Fig.3 (p.34) \u2014 Sa=\u03B7\xB7Z\xB7Fa ; Sa=\u03B7\xB7Z\xB7Fa\xB7(Tc/T)^r", periodos: "NEC-SE-DS \xA73.3.1 \u2014 T0=0.10\xB7Fs\xB7Fd/Fa ; Tc=0.55\xB7Fs\xB7Fd/Fa ; TL=2.4\xB7Fd" } : { Z: "Borrador 2023 \xA73.1, Tabla 3.1 (p.53)", suelo: "Borrador 2023 \xA73.3.1, Tabla 3.2 (p.54)", FaFdFs: "Borrador 2023 \xA73.3.2, Tablas 3.3-3.4-3.5 (p.56)", eta: "Borrador 2023 \xA73.4.1 \u2014 meseta = 2.4\xB7Z\xB7Fa (sin \u03B7)", espectro: "Borrador 2023 \xA73.4.1, Fig.3.2 (p.57) \u2014 4 ramas", periodos: "Borrador 2023 \xA73.4.1 \u2014 T0=0.10\xB7Fs\xB7Fd/Fa ; Tc=0.40\xB7Fs\xB7Fd/Fa ; TL=2.4\xB7Fd" };
  return { norma: t.norma, Fa: u, Fd: C, Fs: F, eta: d, r: S, T0: e, Tc: i, TL: a, SaPlateau: l, pga: t.Z, elastico: m, diseno: T, refs: x };
}
const B = { "Acero sin arriostramientos": { Ct: 0.072, a: 0.8 }, "Acero con arriostramientos": { Ct: 0.073, a: 0.75 }, "Hormig\xF3n sin muros": { Ct: 0.055, a: 0.9 }, "Hormig\xF3n con muros / mamposter\xEDa": { Ct: 0.055, a: 0.75 } };
function p(t, n) {
  const o = B[n] ?? B["Hormig\xF3n sin muros"];
  return o.Ct * Math.pow(t, o.a);
}
function L(t, n) {
  const o = t.elastico;
  if (n <= o[0][0]) return o[0][1];
  if (n >= o[o.length - 1][0]) return o[o.length - 1][1];
  for (let s = 0; s < o.length - 1; s++) if (n >= o[s][0] && n <= o[s + 1][0]) {
    const c = (n - o[s][0]) / (o[s + 1][0] - o[s][0]);
    return o[s][1] + c * (o[s + 1][1] - o[s][1]);
  }
  return o[o.length - 1][1];
}
function W(t) {
  const n = b(t), o = p(t.N * t.he, t.tipoTa), s = L(n, o), c = t.N * t.wPiso, f = t.I * s / (t.R * t.phiP * t.phiE), h = f * c;
  let E;
  o <= 0.5 ? E = 1 : o >= 2.5 ? E = 2 : E = 0.75 + 0.5 * o;
  const u = [];
  let C = 0;
  for (let e = 1; e <= t.N; e++) {
    const i = e * t.he, a = t.wPiso * Math.pow(i, E);
    u.push(a), C += a;
  }
  const F = [];
  for (let e = 1; e <= t.N; e++) {
    const i = u[e - 1] / C, a = i * h;
    F.push({ piso: e, hi: e * t.he, wi: t.wPiso, whk: u[e - 1], Cvx: i, Fx: a, Vi: 0 });
  }
  for (let e = 0; e < F.length; e++) {
    let i = 0;
    for (let a = e; a < F.length; a++) i += F[a].Fx;
    F[e].Vi = i;
  }
  return { Ta: o, SaTa: s, W: c, V: h, coefV: f, k: E, pisos: F, refs: { V: "NEC-SE-DS \xA76.3.2 \u2014 V = (I\xB7Sa(Ta))/(R\xB7\u03A6P\xB7\u03A6E)\xB7W (p.61)", W: "NEC-SE-DS \xA76.1.7 \u2014 W = D + 0.25\xB7L (peso s\xEDsmico reactivo)", dist: "NEC-SE-DS \xA76.3.5 \u2014 Fx=Cvx\xB7V ; Cvx=w\xB7h^k/\u03A3(w\xB7h^k)", k: "NEC-SE-DS \xA76.3.5 \u2014 k=1 (Ta\u22640.5) ; k=0.75+0.5\xB7Ta (0.5<Ta<2.5) ; k=2 (Ta\u22652.5)", ...n.refs } };
}
export {
  v as I,
  B as T,
  b as a,
  W as c,
  p
};
