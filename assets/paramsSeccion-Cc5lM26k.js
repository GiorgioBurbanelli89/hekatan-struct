import { i, a as l, h as d, r as T, t as h } from "./cadSections-et9anjWz.js";
const r = { "Perfil I / W": 0, "Rectangular maciza": 1, "Tubo rectangular": 2, "Circular maciza": 3 };
function S(c = "Secciones", a = {}) {
  const t = a.prefijo ?? "sec", e = (n, s, m, u, o) => ({ default: s, min: m, max: u, step: o, label: n, folder: c });
  return { [`${t}Forma`]: { default: a.forma ?? r["Perfil I / W"], options: { ...r }, label: "Forma", folder: c }, [`${t}H`]: e("Canto h (mm)", a.h ?? 160, 20, 2e3, 5), [`${t}B`]: e("Ancho b / ala (mm)", a.bf ?? a.b ?? 82, 10, 1e3, 2), [`${t}Tf`]: e("Espesor ala tf (mm)", a.tf ?? 7.4, 1, 100, 0.2), [`${t}Tw`]: e("Espesor alma tw (mm)", a.tw ?? 5, 1, 100, 0.2), [`${t}T`]: e("Espesor pared t (mm)", a.t ?? 5, 0.5, 60, 0.5), [`${t}D`]: e("Di\xE1metro D (mm)", a.d ?? 200, 10, 2e3, 5) };
}
function b(c, a = "sec") {
  const t = ($) => ($ ?? 0) / 1e3, e = t(c[`${a}H`]), n = t(c[`${a}B`]), s = t(c[`${a}Tf`]), m = t(c[`${a}Tw`]), u = t(c[`${a}T`]), o = t(c[`${a}D`]);
  switch (Math.round(c[`${a}Forma`] ?? 0)) {
    case r["Rectangular maciza"]:
      return T(n, e);
    case r["Tubo rectangular"]:
      return d(n, e, u);
    case r["Circular maciza"]:
      return l(o);
    default:
      return i(n, e, s, m);
  }
}
function g(c, a = "sec") {
  const t = ($) => ($ ?? 0) / 1e3, e = t(c[`${a}H`]), n = t(c[`${a}B`]), s = t(c[`${a}Tf`]), m = t(c[`${a}Tw`]), u = t(c[`${a}T`]), o = t(c[`${a}D`]);
  switch (Math.round(c[`${a}Forma`] ?? 0)) {
    case r["Rectangular maciza"]:
      return { type: "rect", b: n, h: e };
    case r["Tubo rectangular"]:
      return { type: "HSS", b: n, h: e, tw: u, tf: u };
    case r["Circular maciza"]:
      return { type: "circ", d: o };
    default:
      return { type: "I", b: n, h: e, tf: s, tw: m };
  }
}
function w(c, a = "sec") {
  const t = (s) => (s ?? 0).toFixed(s % 1 ? 1 : 0), e = c[`${a}H`], n = c[`${a}B`];
  switch (Math.round(c[`${a}Forma`] ?? 0)) {
    case r["Rectangular maciza"]:
      return `Rect ${t(n)}\xD7${t(e)}`;
    case r["Tubo rectangular"]:
      return `Tubo ${t(n)}\xD7${t(e)}\xD7${t(c[`${a}T`])}`;
    case r["Circular maciza"]:
      return `\xD8 ${t(c[`${a}D`])}`;
    default:
      return `I ${t(e)}\xD7${t(n)}\xD7${t(c[`${a}Tf`])}/${t(c[`${a}Tw`])}`;
  }
}
function f(c, a = "sec") {
  const t = b(c, a), { moiZ: e, moiY: n } = h(t);
  return { Secci\u00F3n: w(c, a), "A (cm\xB2)": (t.A * 1e4).toFixed(2), "I33 fuerte (cm\u2074)": (e * 1e8).toFixed(0), "I22 d\xE9bil (cm\u2074)": (n * 1e8).toFixed(0), "J torsi\xF3n (cm\u2074)": (t.J * 1e8).toFixed(0), "i33 radio giro (cm)": (Math.sqrt(e / t.A) * 100).toFixed(2) };
}
export {
  r as F,
  f as e,
  g as f,
  w as n,
  S as p,
  b as s
};
