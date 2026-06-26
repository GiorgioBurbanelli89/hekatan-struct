import { z as a, __tla as __tla_0 } from "./zapataVigaAmarre-HwXzu4s6.js";
let t;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function r(m, p, s) {
    return {
      ...m,
      default: p,
      ...s
    };
  }
  t = {
    ...a,
    id: "guerra-ej6-zapata-unida-viga-amarre",
    name: "Ej.6 \xB7 Zapata Unida con Viga de Amarre (Guerra MDI pag.113)",
    category: "\u{1F4DA} Libros \xB7 SAFE - Marcelo Guerra",
    guide: [
      "EJ.6 Guerra MDI pag.113-130. Zapata unida con viga de amarre.",
      "Zapata 1 (medianera): 2.38\xD73.00m. Zapata 2 (interna): 2.45\xD72.45m.",
      "Viga amarre Lv=1.64m, Bv=0.45m, Hv=0.95m. h_zapatas=0.55m.",
      "Cargas: Col1 P=110t (D=70+L=40). Col2 P=140t (D=89+L=51).",
      "f'c=210 kg/cm\xB2, q_adm=19 t/m\xB2, ks=3820 t/m\xB3.",
      "Libro Fig.180: \u03C3_max=26.179 t/m\xB2 (Z1 borde ext, col lindero)."
    ],
    params: {
      ...a.params,
      Lz1: r(a.params.Lz1, 2.38),
      Bz1: r(a.params.Bz1, 3),
      Lv: r(a.params.Lv, 1.64),
      Bv: r(a.params.Bv, 0.45, {
        max: 1
      }),
      Hv: r(a.params.Hv, 0.95, {
        max: 1.2
      }),
      Lz2: r(a.params.Lz2, 2.45),
      Bz2: r(a.params.Bz2, 2.45),
      tz: r(a.params.tz, 0.55),
      bc: r(a.params.bc, 0.5),
      Hp: r(a.params.Hp, 0.5, {
        min: 0.01,
        max: 2,
        step: 0.05
      }),
      ks: r(a.params.ks, 37461, {
        max: 6e4
      }),
      P1: r(a.params.P1, 70),
      P1_L: r(a.params.P1_L, 40),
      M1x: r(a.params.M1x, 0),
      M1y: r(a.params.M1y, 0),
      P2: r(a.params.P2, 89),
      P2_L: r(a.params.P2_L, 51),
      M2x: r(a.params.M2x, 0),
      M2y: r(a.params.M2y, -35, {
        min: -100,
        max: 100
      })
    }
  };
});
export {
  __tla,
  t as g
};
