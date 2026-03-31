const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./calcPanel-BcV0bfdm.js","./getMesh-B1dmlgUt.js","./__vite-browser-external-D7Ct-6yo.js","./pureFunctionsAny.generated-JAcEVsJ7.js","./analyze-ClLKGn9k.js","./didacticCpp-BGUxSkhs.js","./tutorialPanel-D12tw4H_.js","./i18n-B_HPMgm2.js","./cyclicPushoverCpp-Xwxa7wee.js"])))=>i.map(i=>d[i]);
import { d as Ft, _ as cs, p as ds, m as ml, s as gl, __tla as __tla_0 } from "./didacticCpp-BGUxSkhs.js";
import { v as on, P as mn, g as bl, a as hl, o as xl } from "./theme-CzzIlc4y.js";
import { G as bn, b as vl, M as ya, D as $a, B as co, c as Cn, d as yl, C as $l, e as Ta, V as qe, P as Po, R as Ma, f as wa, g as Qo, h as en, i as Ml, S as wl, j as El, F as Do, a as tn, L as Bo, k as Sl, l as Il, A as En, T as ps, m as Sn, n as In, o as kl, p as Tl } from "./Text-CBH-tcJP.js";
import { g as Fn, b as Pn, a as Eo } from "./analyze-ClLKGn9k.js";
import { g as Io, __tla as __tla_1 } from "./getMesh-B1dmlgUt.js";
import { t as A, s as zl, u as Al } from "./i18n-B_HPMgm2.js";
import { n as Wo, s as ko, m as uo, t as xs } from "./pureFunctionsAny.generated-JAcEVsJ7.js";
let ka, Pl, Mi;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  const hs = [
    {
      id: "kN",
      label: "kN",
      toKN: 1
    },
    {
      id: "tonf",
      label: "tonf",
      toKN: 9.80665
    },
    {
      id: "kgf",
      label: "kgf",
      toKN: 980665e-8
    },
    {
      id: "kip",
      label: "kip",
      toKN: 4.44822
    },
    {
      id: "lb",
      label: "lb",
      toKN: 444822e-8
    },
    {
      id: "N",
      label: "N",
      toKN: 1e-3
    }
  ], nn = [
    {
      id: "m",
      label: "m",
      toM: 1,
      spanRange: [
        2,
        15,
        0.5
      ],
      heightRange: [
        2,
        6,
        0.5
      ],
      defaultSpan: 5,
      defaultHeight: 3,
      galponSpan: 12,
      galponLength: 20,
      galponHeight: 6,
      galponRise: 3
    },
    {
      id: "cm",
      label: "cm",
      toM: 0.01,
      spanRange: [
        200,
        1500,
        50
      ],
      heightRange: [
        200,
        600,
        50
      ],
      defaultSpan: 500,
      defaultHeight: 300,
      galponSpan: 1200,
      galponLength: 2e3,
      galponHeight: 600,
      galponRise: 300
    },
    {
      id: "mm",
      label: "mm",
      toM: 1e-3,
      spanRange: [
        2e3,
        15e3,
        500
      ],
      heightRange: [
        2e3,
        6e3,
        500
      ],
      defaultSpan: 5e3,
      defaultHeight: 3e3,
      galponSpan: 12e3,
      galponLength: 2e4,
      galponHeight: 6e3,
      galponRise: 3e3
    },
    {
      id: "in",
      label: "in",
      toM: 0.0254,
      spanRange: [
        60,
        480,
        12
      ],
      heightRange: [
        96,
        240,
        12
      ],
      defaultSpan: 240,
      defaultHeight: 144,
      galponSpan: 480,
      galponLength: 720,
      galponHeight: 240,
      galponRise: 120
    },
    {
      id: "ft",
      label: "ft",
      toM: 0.3048,
      spanRange: [
        5,
        40,
        1
      ],
      heightRange: [
        8,
        20,
        1
      ],
      defaultSpan: 20,
      defaultHeight: 12,
      galponSpan: 40,
      galponLength: 60,
      galponHeight: 20,
      galponRise: 10
    }
  ];
  function Ll(e, b) {
    return e === "kN" && b === "m" ? "kPa" : e === "kN" && b === "mm" || e === "N" && b === "mm" ? "MPa" : e === "N" && b === "m" ? "Pa" : e === "kip" && b === "in" ? "ksi" : e === "kip" && b === "ft" ? "ksf" : `${e}/${b}\xB2`;
  }
  const Ho = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function jo(e, b) {
    const O = hs.find((W) => W.id === e), M = nn.find((W) => W.id === b), X = O.toKN, H = M.toM, Z = (W, he, T) => T / (Math.pow(X, W) * Math.pow(H, he));
    let V, j;
    switch (e) {
      case "kN":
        V = 10, j = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        V = 1, j = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        V = 1e3, j = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        V = 10, j = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        V = 5e3, j = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        V = 1e4, j = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${e}-${b}`,
      label: `${O.label}, ${M.label}`,
      force: O.label,
      length: M.label,
      stress: Ll(e, b),
      moment: `${O.label}\xB7${M.label}`,
      E: Z(1, -2, Ho.E),
      G: Z(1, -2, Ho.G),
      A: Z(0, 2, Ho.A),
      Iz: Z(0, 4, Ho.Iz),
      Iy: Z(0, 4, Ho.Iy),
      J: Z(0, 4, Ho.J),
      rho: Z(1, -4, Ho.rho),
      spanRange: M.spanRange,
      heightRange: M.heightRange,
      defaultSpan: M.defaultSpan,
      defaultHeight: M.defaultHeight,
      defaultForce: V,
      forceRange: j,
      galponSpan: M.galponSpan,
      galponLength: M.galponLength,
      galponHeight: M.galponHeight,
      galponRise: M.galponRise
    };
  }
  jo("kN", "m"), jo("kip", "in");
  function kn() {
    return {
      truss: [
        {
          label: A("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: A("Articulado"),
          dofs: [
            true,
            true,
            true,
            false,
            false,
            false
          ]
        },
        {
          label: A("Roller Z"),
          dofs: [
            false,
            false,
            true,
            false,
            false,
            false
          ]
        }
      ],
      beams: [
        {
          label: A("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: A("Articulado"),
          dofs: [
            true,
            true,
            true,
            false,
            false,
            false
          ]
        }
      ],
      "3d": [
        {
          label: A("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: A("Articulado"),
          dofs: [
            true,
            true,
            true,
            false,
            false,
            false
          ]
        }
      ],
      frame: [
        {
          label: A("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: A("Articulado"),
          dofs: [
            true,
            true,
            true,
            false,
            false,
            false
          ]
        }
      ],
      edificio: [
        {
          label: A("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: A("Articulado"),
          dofs: [
            true,
            true,
            true,
            false,
            false,
            false
          ]
        }
      ],
      galpon: [
        {
          label: A("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: A("Articulado"),
          dofs: [
            true,
            true,
            true,
            false,
            false,
            false
          ]
        }
      ],
      barra: [
        {
          label: A("Emp-Libre"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: A("Emp-Emp"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: A("Emp-Art"),
          dofs: [
            true,
            true,
            true,
            false,
            false,
            false
          ]
        }
      ],
      "placa-3q": [
        {
          label: A("Simply Supported"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: A("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      "placa-q4": [
        {
          label: A("Simply Supported"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: A("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      "losa-rect": [
        {
          label: A("Simply Supported"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: A("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      "losa-plana": [
        {
          label: A("Pin (w=0)"),
          dofs: [
            false,
            false,
            true,
            false,
            false,
            false
          ]
        },
        {
          label: A("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      "viga-alta": [
        {
          label: A("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: A("Articulado"),
          dofs: [
            true,
            true,
            true,
            false,
            false,
            false
          ]
        }
      ],
      "muro-contencion": [
        {
          label: A("Rankine (Ka)"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: A("Suelo continuo"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: A("Interfaz"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          label: A("Presion agua"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      zapata: [
        {
          label: A("Winkler (k)"),
          dofs: [
            false,
            false,
            true,
            false,
            false,
            false
          ]
        }
      ],
      "placa-orificios": [
        {
          label: A("Simplemente apoyado"),
          dofs: [
            true,
            true,
            true,
            false,
            false,
            false
          ]
        },
        {
          label: A("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      "col-placa": [
        {
          label: A("Pernos empotrados"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      eiffel: [
        {
          label: A("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      arco: [
        {
          label: A("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      puente: [
        {
          label: A("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      twisted: [
        {
          label: A("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      burj: [
        {
          label: A("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      opera: [
        {
          label: A("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      diagrid: [
        {
          label: A("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      talud: [
        {
          label: A("Empotrado"),
          dofs: [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ]
    };
  }
  function Cl(e) {
    return {
      truss: [
        {
          key: "span",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `${A("Luz")} (${e.length})`
        },
        {
          key: "divisions",
          val: 5,
          min: 2,
          max: 20,
          step: 1,
          label: A("Divisiones")
        },
        {
          key: "height",
          val: e.defaultHeight * 0.5,
          min: e.heightRange[0] * 0.3,
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `${A("Altura")} (${e.length})`
        }
      ],
      beams: [
        {
          key: "width",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `${A("Luz")} (${e.length})`
        },
        {
          key: "height",
          val: e.defaultHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `${A("Altura")} (${e.length})`
        },
        {
          key: "nSub",
          val: 4,
          min: 1,
          max: 10,
          step: 1,
          label: A("Discretizaci\xF3n")
        }
      ],
      "3d": [
        {
          key: "dx",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `Dx (${e.length})`
        },
        {
          key: "dy",
          val: e.defaultSpan * 0.8,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `Dy (${e.length})`
        },
        {
          key: "dz",
          val: e.defaultHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `Dz (${e.length})`
        },
        {
          key: "stories",
          val: 2,
          min: 1,
          max: 10,
          step: 1,
          label: A("Pisos")
        },
        {
          key: "nSub",
          val: 3,
          min: 1,
          max: 8,
          step: 1,
          label: A("Discretizaci\xF3n")
        }
      ],
      frame: [
        {
          key: "nVanos",
          val: 3,
          min: 1,
          max: 10,
          step: 1,
          label: A("N. Vanos")
        },
        {
          key: "spanV",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `${A("Luz vano")} (${e.length})`
        },
        {
          key: "nPisos",
          val: 3,
          min: 1,
          max: 20,
          step: 1,
          label: A("N. Pisos")
        },
        {
          key: "hPiso",
          val: e.defaultHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `${A("h piso")} (${e.length})`
        }
      ],
      edificio: [
        {
          key: "nVanosX",
          val: 2,
          min: 1,
          max: 8,
          step: 1,
          label: A("Vanos X")
        },
        {
          key: "nVanosY",
          val: 2,
          min: 1,
          max: 8,
          step: 1,
          label: A("Vanos Y")
        },
        {
          key: "nPisos",
          val: 3,
          min: 1,
          max: 20,
          step: 1,
          label: A("N. Pisos")
        },
        {
          key: "hPiso",
          val: e.defaultHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `${A("h piso")} (${e.length})`
        },
        {
          key: "nSubViga",
          val: 1,
          min: 1,
          max: 8,
          step: 1,
          label: A("Div. Vigas")
        },
        {
          key: "nSubCol",
          val: 1,
          min: 1,
          max: 8,
          step: 1,
          label: A("Div. Columnas")
        },
        {
          key: "Lvix",
          val: 0,
          min: 0,
          max: e.spanRange[1] * 0.5,
          step: e.spanRange[2],
          label: `Lvix (${e.length})`
        },
        {
          key: "Lvdx",
          val: 0,
          min: 0,
          max: e.spanRange[1] * 0.5,
          step: e.spanRange[2],
          label: `Lvdx (${e.length})`
        },
        {
          key: "Lviy",
          val: 0,
          min: 0,
          max: e.spanRange[1] * 0.5,
          step: e.spanRange[2],
          label: `Lviy (${e.length})`
        },
        {
          key: "Lvdy",
          val: 0,
          min: 0,
          max: e.spanRange[1] * 0.5,
          step: e.spanRange[2],
          label: `Lvdy (${e.length})`
        }
      ],
      galpon: [
        {
          key: "span",
          val: e.galponSpan,
          min: e.spanRange[0],
          max: e.spanRange[1] * 3,
          step: e.spanRange[2],
          label: `${A("Luz")} (${e.length})`
        },
        {
          key: "length",
          val: e.galponLength,
          min: e.spanRange[0],
          max: e.spanRange[1] * 4,
          step: e.spanRange[2],
          label: `${A("Largo")} (${e.length})`
        },
        {
          key: "height",
          val: e.galponHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `${A("Altura col")} (${e.length})`
        },
        {
          key: "archRise",
          val: e.galponRise,
          min: e.heightRange[2],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `${A("Flecha arco")} (${e.length})`
        },
        {
          key: "xDiv",
          val: 8,
          min: 4,
          max: 20,
          step: 1,
          label: A("Div. X")
        },
        {
          key: "yDiv",
          val: 4,
          min: 2,
          max: 12,
          step: 1,
          label: A("Div. Y")
        }
      ],
      barra: [
        {
          key: "L",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `${A("L total")} (${e.length})`
        },
        {
          key: "nElem",
          val: 3,
          min: 1,
          max: 10,
          step: 1,
          label: A("Num elementos")
        },
        {
          key: "F",
          val: e.defaultForce * 10,
          min: e.forceRange[0],
          max: e.forceRange[1] * 10,
          step: Math.abs(e.forceRange[2]) * 10,
          label: `${A("F axial")} (${e.force})`
        }
      ],
      "placa-3q": [
        {
          key: "Lx",
          val: 15,
          min: 2,
          max: 30,
          step: 1,
          label: `Lx (${e.length})`
        },
        {
          key: "Ly",
          val: 10,
          min: 2,
          max: 30,
          step: 1,
          label: `Ly (${e.length})`
        },
        {
          key: "meshSize",
          val: 0.5,
          min: 0.1,
          max: 3,
          step: 0.1,
          label: `${A("Mesh size")} (${e.length})`
        },
        {
          key: "t",
          val: 1,
          min: 0.05,
          max: 5,
          step: 0.05,
          label: `t (${e.length})`
        },
        {
          key: "E",
          val: e.E * 3e7 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E (${e.stress})`
        },
        {
          key: "nu",
          val: 0.3,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "q",
          val: -3,
          min: -50,
          max: 0,
          step: 1,
          label: `q (${e.force}/${e.length}\xB2)`
        }
      ],
      "placa-q4": [
        {
          key: "Lx",
          val: 10,
          min: 1,
          max: 30,
          step: 1,
          label: `Lx (${e.length})`
        },
        {
          key: "Ly",
          val: 10,
          min: 1,
          max: 30,
          step: 1,
          label: `Ly (${e.length})`
        },
        {
          key: "nx",
          val: 16,
          min: 2,
          max: 64,
          step: 2,
          label: A("nx elem")
        },
        {
          key: "ny",
          val: 16,
          min: 2,
          max: 64,
          step: 2,
          label: A("ny elem")
        },
        {
          key: "t",
          val: 0.2,
          min: 0.05,
          max: 2,
          step: 0.05,
          label: `t (${e.length})`
        },
        {
          key: "E",
          val: e.E * 3e7 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E (${e.stress})`
        },
        {
          key: "nu",
          val: 0.3,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "q",
          val: -10,
          min: -50,
          max: 0,
          step: 1,
          label: `q (${e.force}/${e.length}\xB2)`
        }
      ],
      "losa-rect": [
        {
          key: "a",
          val: 6,
          min: 1,
          max: 20,
          step: 0.5,
          label: `a (${e.length})`
        },
        {
          key: "b",
          val: 4,
          min: 1,
          max: 20,
          step: 0.5,
          label: `b (${e.length})`
        },
        {
          key: "nx",
          val: 12,
          min: 4,
          max: 40,
          step: 2,
          label: A("nx elem")
        },
        {
          key: "ny",
          val: 8,
          min: 4,
          max: 40,
          step: 2,
          label: A("ny elem")
        },
        {
          key: "t",
          val: 0.1,
          min: 0.05,
          max: 1,
          step: 0.01,
          label: `t (${e.length})`
        },
        {
          key: "E",
          val: e.E * 35e6 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E (${e.stress})`
        },
        {
          key: "nu",
          val: 0.15,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "q",
          val: -10,
          min: -50,
          max: 0,
          step: 1,
          label: `q (${e.force}/${e.length}\xB2)`
        }
      ],
      "losa-plana": [
        {
          key: "t",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.01,
          label: `t (${e.length})`
        },
        {
          key: "meshSize",
          val: 0.6,
          min: 0.3,
          max: 2,
          step: 0.1,
          label: `${A("Mesh size")} (${e.length})`
        },
        {
          key: "E",
          val: e.E * 35e6 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E (${e.stress})`
        },
        {
          key: "nu",
          val: 0.2,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "q",
          val: -10,
          min: -50,
          max: 0,
          step: 1,
          label: `q (${e.force}/${e.length}\xB2)`
        }
      ],
      "viga-alta": [
        {
          key: "L",
          val: 4,
          min: 1,
          max: 20,
          step: 0.5,
          label: `L (${e.length})`
        },
        {
          key: "H",
          val: 2,
          min: 0.5,
          max: 10,
          step: 0.5,
          label: `H (${e.length})`
        },
        {
          key: "meshSize",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.05,
          label: `${A("Mesh size")} (${e.length})`
        },
        {
          key: "t",
          val: 0.1,
          min: 0.05,
          max: 1,
          step: 0.01,
          label: `t (${e.length})`
        },
        {
          key: "E",
          val: e.E * 2e7 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E (${e.stress})`
        },
        {
          key: "nu",
          val: 0.2,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "q",
          val: -100,
          min: -500,
          max: 0,
          step: 10,
          label: `q (${e.force}/${e.length})`
        },
        {
          key: "b",
          val: 0.8,
          min: 0.2,
          max: 4,
          step: 0.1,
          label: `${A("Ancho carga")} (${e.length})`
        }
      ],
      "muro-contencion": [
        {
          key: "H",
          val: 4,
          min: 1,
          max: 10,
          step: 0.5,
          label: `H (${e.length})`
        },
        {
          key: "B",
          val: 3,
          min: 1,
          max: 8,
          step: 0.5,
          label: `${A("B base")} (${e.length})`
        },
        {
          key: "tw",
          val: 0.3,
          min: 0.1,
          max: 1,
          step: 0.05,
          label: `${A("t muro")} (${e.length})`
        },
        {
          key: "tb",
          val: 0.4,
          min: 0.1,
          max: 1,
          step: 0.05,
          label: `${A("t base")} (${e.length})`
        },
        {
          key: "meshSize",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.05,
          label: `${A("Mesh size")} (${e.length})`
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `${A("E concreto")} (${e.stress})`
        },
        {
          key: "nu",
          val: 0.2,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: A("v concreto")
        },
        {
          key: "gamma",
          val: 18,
          min: 5,
          max: 30,
          step: 1,
          label: `${A("gamma suelo")} (${e.force}/${e.length}\xB3)`
        },
        {
          key: "Ka",
          val: 0.33,
          min: 0.1,
          max: 0.6,
          step: 0.01,
          label: "Ka"
        },
        {
          key: "qs",
          val: 0,
          min: 0,
          max: 100,
          step: 5,
          label: `${A("q sobrecarga")} (${e.stress})`
        },
        {
          key: "Es",
          val: 5e4,
          min: 100,
          max: 1e6,
          step: 1e3,
          label: `${A("E suelo")} (${e.stress})`
        },
        {
          key: "nus",
          val: 0.3,
          min: 0.1,
          max: 0.49,
          step: 0.01,
          label: A("v suelo")
        },
        {
          key: "kn",
          val: 1e6,
          min: 1e3,
          max: 1e9,
          step: 1e4,
          label: `${A("kn interfaz")} (${e.force}/${e.length}\xB3)`
        },
        {
          key: "ks",
          val: 1e4,
          min: 100,
          max: 1e7,
          step: 1e3,
          label: `${A("ks interfaz")} (${e.force}/${e.length}\xB3)`
        },
        {
          key: "gammaW",
          val: 9.81,
          min: 5,
          max: 15,
          step: 0.1,
          label: `${A("gamma agua")} (${e.force}/${e.length}\xB3)`
        },
        {
          key: "Hw",
          val: 3.5,
          min: 0.5,
          max: 10,
          step: 0.5,
          label: `${A("H agua")} (${e.length})`
        }
      ],
      zapata: [
        {
          key: "Lx",
          val: 2,
          min: 0.5,
          max: 6,
          step: 0.1,
          label: `${A("Lx zapata")} (${e.length})`
        },
        {
          key: "Ly",
          val: 2,
          min: 0.5,
          max: 6,
          step: 0.1,
          label: `${A("Ly zapata")} (${e.length})`
        },
        {
          key: "t",
          val: 0.5,
          min: 0.1,
          max: 2,
          step: 0.05,
          label: `${A("t zapata")} (${e.length})`
        },
        {
          key: "colA",
          val: 0.4,
          min: 0.15,
          max: 1.5,
          step: 0.05,
          label: `${A("a columna")} (${e.length})`
        },
        {
          key: "colH",
          val: 1.5,
          min: 0.5,
          max: 5,
          step: 0.5,
          label: `${A("h pedestal")} (${e.length})`
        },
        {
          key: "nx",
          val: 8,
          min: 4,
          max: 20,
          step: 2,
          label: A("nx elem")
        },
        {
          key: "ny",
          val: 8,
          min: 4,
          max: 20,
          step: 2,
          label: A("ny elem")
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E (${e.stress})`
        },
        {
          key: "nu",
          val: 0.2,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "P",
          val: -500,
          min: -5e3,
          max: 0,
          step: 50,
          label: `${A("P axial")} (${e.force})`
        },
        {
          key: "Mx",
          val: 0,
          min: -500,
          max: 500,
          step: 10,
          label: `Mx (${e.force}\xB7${e.length})`
        },
        {
          key: "My",
          val: 0,
          min: -500,
          max: 500,
          step: 10,
          label: `My (${e.force}\xB7${e.length})`
        },
        {
          key: "ks",
          val: 2e4,
          min: 1e3,
          max: 2e5,
          step: 1e3,
          label: `ks (${e.force}/${e.length}\xB3)`
        }
      ],
      "placa-orificios": [
        {
          key: "Lx",
          val: 0.4,
          min: 0.15,
          max: 1,
          step: 0.05,
          label: `${A("Placa Lx")} (${e.length})`
        },
        {
          key: "Ly",
          val: 0.4,
          min: 0.15,
          max: 1,
          step: 0.05,
          label: `${A("Placa Ly")} (${e.length})`
        },
        {
          key: "t",
          val: 0.025,
          min: 0.01,
          max: 0.1,
          step: 5e-3,
          label: `${A("Espesor t")} (${e.length})`
        },
        {
          key: "dBolt",
          val: 0.022,
          min: 0.01,
          max: 0.05,
          step: 2e-3,
          label: `${A("d perno")} (${e.length})`
        },
        {
          key: "sx",
          val: 0.28,
          min: 0.08,
          max: 0.8,
          step: 0.02,
          label: `${A("Sep. pernos X")} (${e.length})`
        },
        {
          key: "sy",
          val: 0.28,
          min: 0.08,
          max: 0.8,
          step: 0.02,
          label: `${A("Sep. pernos Y")} (${e.length})`
        },
        {
          key: "colA",
          val: 0.2,
          min: 0.1,
          max: 0.5,
          step: 0.02,
          label: `${A("Col a")} (${e.length})`
        },
        {
          key: "meshSize",
          val: 8e-3,
          min: 3e-3,
          max: 0.03,
          step: 1e-3,
          label: `${A("Mesh size")} (${e.length})`
        },
        {
          key: "E",
          val: e.E,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `${A("E acero")} (${e.stress})`
        },
        {
          key: "nu",
          val: 0.3,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "P",
          val: -200,
          min: -2e3,
          max: 0,
          step: 10,
          label: `${A("P axial")} (${e.force})`
        },
        {
          key: "nBolts",
          val: 4,
          min: 2,
          max: 8,
          step: 2,
          label: A("N pernos")
        }
      ],
      "col-placa": [
        {
          key: "colB",
          val: 0.3,
          min: 0.1,
          max: 0.6,
          step: 0.02,
          label: `${A("Col b")} (${e.length})`
        },
        {
          key: "colH",
          val: 0.3,
          min: 0.1,
          max: 0.6,
          step: 0.02,
          label: `${A("Col h")} (${e.length})`
        },
        {
          key: "colT",
          val: 8e-3,
          min: 4e-3,
          max: 0.025,
          step: 2e-3,
          label: `${A("Col t")} (${e.length})`
        },
        {
          key: "colLen",
          val: 1.5,
          min: 0.5,
          max: 4,
          step: 0.25,
          label: `${A("Col altura")} (${e.length})`
        },
        {
          key: "Lx",
          val: 0.45,
          min: 0.2,
          max: 1,
          step: 0.05,
          label: `${A("Placa Lx")} (${e.length})`
        },
        {
          key: "Ly",
          val: 0.45,
          min: 0.2,
          max: 1,
          step: 0.05,
          label: `${A("Placa Ly")} (${e.length})`
        },
        {
          key: "tPlaca",
          val: 0.025,
          min: 0.01,
          max: 0.06,
          step: 5e-3,
          label: `${A("Placa t")} (${e.length})`
        },
        {
          key: "dBolt",
          val: 0.022,
          min: 0.012,
          max: 0.04,
          step: 2e-3,
          label: `${A("d perno")} (${e.length})`
        },
        {
          key: "sx",
          val: 0.32,
          min: 0.1,
          max: 0.8,
          step: 0.02,
          label: `${A("Sep pernos X")} (${e.length})`
        },
        {
          key: "sy",
          val: 0.32,
          min: 0.1,
          max: 0.8,
          step: 0.02,
          label: `${A("Sep pernos Y")} (${e.length})`
        },
        {
          key: "nSubColV",
          val: 6,
          min: 2,
          max: 12,
          step: 1,
          label: A("Col subdiv V")
        },
        {
          key: "nSubColH",
          val: 4,
          min: 2,
          max: 8,
          step: 1,
          label: A("Col subdiv H")
        },
        {
          key: "nSubPlaca",
          val: 10,
          min: 4,
          max: 20,
          step: 2,
          label: A("Placa subdiv")
        },
        {
          key: "E",
          val: e.E,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `${A("E acero")} (${e.stress})`
        },
        {
          key: "nu",
          val: 0.3,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "P",
          val: -300,
          min: -3e3,
          max: 0,
          step: 25,
          label: `${A("P axial")} (${e.force})`
        }
      ],
      "muro-q4": [
        {
          key: "W",
          val: 5,
          min: 1,
          max: 20,
          step: 0.5,
          label: `${A("Ancho W")} (${e.length})`
        },
        {
          key: "H",
          val: 3,
          min: 1,
          max: 15,
          step: 0.5,
          label: `${A("Alto H")} (${e.length})`
        },
        {
          key: "t",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.05,
          label: `${A("Espesor t")} (${e.length})`
        },
        {
          key: "nx",
          val: 8,
          min: 2,
          max: 20,
          step: 1,
          label: A("Mesh nx")
        },
        {
          key: "ny",
          val: 6,
          min: 2,
          max: 20,
          step: 1,
          label: A("Mesh ny")
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 1e4,
          max: 1e9,
          step: 1e5,
          label: `${A("E concreto")} (${e.stress})`
        },
        {
          key: "nu",
          val: 0.2,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "P",
          val: e.defaultForce * 10,
          min: 1,
          max: e.forceRange[1] * 50,
          step: e.forceRange[2] * 5,
          label: `${A("P lateral")} (${e.force})`
        }
      ],
      "viga-q4": [
        {
          key: "L",
          val: 6,
          min: 1,
          max: 20,
          step: 0.5,
          label: `${A("Luz L")} (${e.length})`
        },
        {
          key: "h",
          val: 0.5,
          min: 0.1,
          max: 3,
          step: 0.1,
          label: `${A("Peralte h")} (${e.length})`
        },
        {
          key: "t",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.05,
          label: `${A("Espesor t")} (${e.length})`
        },
        {
          key: "nx",
          val: 12,
          min: 2,
          max: 30,
          step: 1,
          label: A("Mesh nx")
        },
        {
          key: "ny",
          val: 4,
          min: 2,
          max: 15,
          step: 1,
          label: A("Mesh ny")
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 1e4,
          max: 1e9,
          step: 1e5,
          label: `${A("E concreto")} (${e.stress})`
        },
        {
          key: "nu",
          val: 0.2,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "P",
          val: e.defaultForce * 5,
          min: 1,
          max: e.forceRange[1] * 50,
          step: e.forceRange[2] * 2,
          label: `${A("P puntual")} (${e.force})`
        }
      ],
      "placa-xz": [
        {
          key: "Lx",
          val: 4,
          min: 1,
          max: 15,
          step: 0.5,
          label: `Lx (${e.length})`
        },
        {
          key: "Lz",
          val: 2,
          min: 0.5,
          max: 10,
          step: 0.5,
          label: `Lz (${e.length})`
        },
        {
          key: "t",
          val: 0.15,
          min: 0.05,
          max: 0.5,
          step: 0.05,
          label: `${A("Espesor t")} (${e.length})`
        },
        {
          key: "nx",
          val: 8,
          min: 2,
          max: 20,
          step: 1,
          label: A("Mesh nx")
        },
        {
          key: "nz",
          val: 4,
          min: 2,
          max: 15,
          step: 1,
          label: A("Mesh nz")
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 1e4,
          max: 1e9,
          step: 1e5,
          label: `${A("E concreto")} (${e.stress})`
        },
        {
          key: "nu",
          val: 0.2,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "P",
          val: e.defaultForce * 2,
          min: 1,
          max: e.forceRange[1] * 20,
          step: e.forceRange[2],
          label: `${A("P borde")} (${e.force})`
        }
      ],
      pergola: [
        {
          key: "Lx",
          val: 6,
          min: 2,
          max: 20,
          step: 0.5,
          label: `${A("Ancho Lx")} (${e.length})`
        },
        {
          key: "Ly",
          val: 8,
          min: 3,
          max: 30,
          step: 0.5,
          label: `${A("Largo Ly")} (${e.length})`
        },
        {
          key: "H1",
          val: 3,
          min: 1,
          max: 8,
          step: 0.25,
          label: `${A("H bajo")} (${e.length})`
        },
        {
          key: "H2",
          val: 4.5,
          min: 1,
          max: 10,
          step: 0.25,
          label: `${A("H alto")} (${e.length})`
        },
        {
          key: "nCol",
          val: 4,
          min: 2,
          max: 8,
          step: 1,
          label: A("Columnas/p\xF3rtico")
        },
        {
          key: "nCorr",
          val: 8,
          min: 3,
          max: 20,
          step: 1,
          label: A("Correas")
        },
        {
          key: "E",
          val: e.E,
          min: 1e4,
          max: 1e9,
          step: 1e5,
          label: `${A("E acero")} (${e.stress})`
        },
        {
          key: "t",
          val: 5e-4,
          min: 3e-4,
          max: 3e-3,
          step: 1e-4,
          label: `${A("t panel")} (${e.length})`
        },
        {
          key: "q",
          val: e.defaultForce * 0.5,
          min: 0.1,
          max: e.forceRange[1] * 5,
          step: e.forceRange[2] * 0.1,
          label: `${A("q carga")} (${e.force}/${e.length}\xB2)`
        },
        {
          key: "colD",
          val: 0.16,
          min: 0.05,
          max: 0.6,
          step: 0.01,
          label: `${A("Col d")} (${e.length})`
        },
        {
          key: "colBf",
          val: 0.16,
          min: 0.05,
          max: 0.4,
          step: 0.01,
          label: `${A("Col bf")} (${e.length})`
        },
        {
          key: "colTf",
          val: 0.013,
          min: 4e-3,
          max: 0.04,
          step: 1e-3,
          label: `${A("Col tf")} (${e.length})`
        },
        {
          key: "colTw",
          val: 8e-3,
          min: 3e-3,
          max: 0.03,
          step: 1e-3,
          label: `${A("Col tw")} (${e.length})`
        },
        {
          key: "vigD",
          val: 0.2,
          min: 0.1,
          max: 0.6,
          step: 0.01,
          label: `${A("Vig d")} (${e.length})`
        },
        {
          key: "vigBf",
          val: 0.1,
          min: 0.05,
          max: 0.3,
          step: 0.01,
          label: `${A("Vig bf")} (${e.length})`
        },
        {
          key: "vigTf",
          val: 85e-4,
          min: 4e-3,
          max: 0.03,
          step: 1e-3,
          label: `${A("Vig tf")} (${e.length})`
        },
        {
          key: "vigTw",
          val: 56e-4,
          min: 3e-3,
          max: 0.02,
          step: 1e-3,
          label: `${A("Vig tw")} (${e.length})`
        },
        {
          key: "corrB",
          val: 0.06,
          min: 0.03,
          max: 0.2,
          step: 0.01,
          label: `${A("Corr b")} (${e.length})`
        },
        {
          key: "corrT",
          val: 4e-3,
          min: 2e-3,
          max: 0.01,
          step: 1e-3,
          label: `${A("Corr t")} (${e.length})`
        }
      ],
      eiffel: [],
      arco: [],
      puente: [],
      twisted: [],
      burj: [],
      opera: [],
      diagrid: [],
      talud: [
        {
          key: "H",
          val: 6,
          min: 2,
          max: 15,
          step: 0.5,
          label: `H (${e.length})`
        },
        {
          key: "angle",
          val: 45,
          min: 20,
          max: 70,
          step: 5,
          label: `${A("Angulo")} (deg)`
        },
        {
          key: "bTop",
          val: 3,
          min: 1,
          max: 10,
          step: 0.5,
          label: `${A("b top")} (${e.length})`
        },
        {
          key: "bBot",
          val: 3,
          min: 1,
          max: 10,
          step: 0.5,
          label: `${A("b base")} (${e.length})`
        },
        {
          key: "meshSize",
          val: 0.8,
          min: 0.3,
          max: 3,
          step: 0.1,
          label: `${A("Mesh size")} (${e.length})`
        },
        {
          key: "E",
          val: e.E * 5e4 / 2e8,
          min: 100,
          max: 1e12,
          step: 1e3,
          label: `E (${e.stress})`
        },
        {
          key: "nu",
          val: 0.3,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "gamma",
          val: 18,
          min: 5,
          max: 30,
          step: 1,
          label: `gamma (${e.force}/${e.length}\xB3)`
        },
        {
          key: "c",
          val: 15,
          min: 0,
          max: 100,
          step: 1,
          label: `${A("Cohesion c")} (${e.stress})`
        },
        {
          key: "phi",
          val: 30,
          min: 0,
          max: 45,
          step: 1,
          label: `${A("Friccion \u03C6")} (deg)`
        },
        {
          key: "qs",
          val: 0,
          min: 0,
          max: 100,
          step: 5,
          label: `${A("Sobrecarga")} (${e.stress})`
        }
      ]
    };
  }
  function Fl(e) {
    const b = e.force, [O, M, X] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: O,
          max: 0,
          step: X,
          label: `${A("CM")} (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: X,
          label: `${A("CV")} (${b})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: O,
          max: 0,
          step: X,
          label: `${A("CM")} (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: X,
          label: `${A("CV")} (${b})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: O,
          max: M,
          step: X,
          label: `${A("Ex sismo")} (${b})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: O,
          max: 0,
          step: X,
          label: `${A("CM")} (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: X,
          label: `${A("CV")} (${b})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: O,
          max: M,
          step: X,
          label: `${A("Ex sismo")} (${b})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: O,
          max: 0,
          step: X,
          label: `${A("CM")} (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: X,
          label: `${A("CV")} (${b})`
        },
        {
          key: "Ex",
          val: 0,
          min: O,
          max: M,
          step: X,
          label: `${A("Ex sismo")} (${b})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: O,
          max: 0,
          step: X,
          label: `${A("CM")} (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: X,
          label: `${A("CV")} (${b})`
        },
        {
          key: "Ex",
          val: 0,
          min: O,
          max: M,
          step: X,
          label: `${A("Ex sismo")} (${b})`
        },
        {
          key: "Ey",
          val: 0,
          min: O,
          max: M,
          step: X,
          label: `${A("Ey sismo")} (${b})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: O,
          max: 0,
          step: X,
          label: `${A("CM")} (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: X,
          label: `${A("CV")} (${b})`
        }
      ],
      barra: [
        {
          key: "F",
          val: e.defaultForce * 10,
          min: e.forceRange[0] * 10,
          max: e.forceRange[1] * 10,
          step: Math.abs(e.forceRange[2]) * 5,
          label: `${A("F axial")} (${b})`
        }
      ],
      "placa-3q": [
        {
          key: "CM",
          val: 0,
          min: O,
          max: 0,
          step: X,
          label: `${A("CM")} (${b})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: O,
          max: 0,
          step: X,
          label: `${A("CM")} (${b})`
        }
      ],
      "losa-rect": [],
      "losa-plana": [],
      "viga-alta": [],
      "muro-contencion": [],
      zapata: [],
      "placa-orificios": [],
      "col-placa": [],
      talud: [],
      "muro-q4": [],
      "viga-q4": [],
      "placa-xz": [],
      pergola: [],
      eiffel: [],
      arco: [],
      puente: [],
      twisted: [],
      burj: [],
      opera: [],
      diagrid: []
    };
  }
  Pl = function() {
    const e = document.createElement("div");
    e.id = "modal-results", e.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; max-height: 60vh; overflow: auto; pointer-events: auto;
    border: 1px solid #0f03; resize: both;
  `;
    let b = false;
    function O(M, X) {
      var _a, _b;
      if (!M.frequencies || M.frequencies.length === 0) {
        e.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
        return;
      }
      const H = [
        "Ux",
        "Uy",
        "Uz",
        "Rx",
        "Ry",
        "Rz"
      ], Z = [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let V = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:move; position:sticky; top:0; background:rgba(0,0,0,0.95); z-index:1;">
  <b style="color:#ff0">MODAL \u2014 ${X.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (V += '<div id="modal-body" style="padding:0 12px 10px 12px;">', X.properties) for (const W of X.properties) V += `<span style="color:#888">${W}</span>
`;
      V += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03; position:sticky; top:36px; background:rgba(0,0,0,0.95); z-index:1;">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">f (Hz)</th>
  <th style="padding:2px 6px">T (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const W of H) V += `<th style="padding:2px 5px">${W}</th>`;
      if (V += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, M.frequencies.forEach((W, he) => {
        var _a2;
        const T = W > 0 ? 1 / W : 0, J = W * 2 * Math.PI, $e = ((_a2 = M.massParticipation) == null ? void 0 : _a2[he]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let fe = 0; fe < 6; fe++) Z[fe] += $e[fe];
        V += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${he + 1}</td>
  <td style="padding:2px 6px; text-align:right">${W.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${T.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${J.toFixed(2)}</td>`;
        for (let fe = 0; fe < 6; fe++) {
          const re = ($e[fe] * 100).toFixed(1), ne = $e[fe] > 0.5 ? "#f00" : $e[fe] > 0.1 ? "#ff0" : "#0f0";
          V += `<td style="padding:2px 5px; text-align:right; color:${ne}">${re}%</td>`;
        }
        V += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(Z[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(Z[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(Z[5] * 100).toFixed(1)}%</td></tr>`;
      }), V += "</table></div>", e.innerHTML = V, b) {
        const W = e.querySelector("#modal-body"), he = e.querySelector("#modal-minimize");
        W && (W.style.display = "none"), he && (he.textContent = "\u25A2", he.title = "Restaurar");
      }
      (_a = e.querySelector("#modal-minimize")) == null ? void 0 : _a.addEventListener("click", () => {
        b = !b;
        const W = e.querySelector("#modal-body"), he = e.querySelector("#modal-minimize");
        b ? (W.style.display = "none", he.textContent = "\u25A2", he.title = "Restaurar") : (W.style.display = "block", he.textContent = "\u25AC", he.title = "Minimizar");
      });
      const j = e.querySelector("#modal-header");
      if (j) {
        let W = false, he = 0, T = 0, J = 0, $e = 0;
        j.addEventListener("mousedown", (fe) => {
          if (fe.target.tagName === "BUTTON") return;
          W = true, he = fe.clientX, T = fe.clientY;
          const re = e.getBoundingClientRect();
          J = re.left, $e = re.top, fe.preventDefault();
        }), document.addEventListener("mousemove", (fe) => {
          if (!W) return;
          const re = fe.clientX - he, ne = fe.clientY - T;
          e.style.left = J + re + "px", e.style.top = $e + ne + "px", e.style.bottom = "auto", e.style.right = "auto";
        }), document.addEventListener("mouseup", () => {
          W = false;
        });
      }
      (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const W = [];
        W.push(`Modal Analysis \u2014 ${X.title}`);
        const he = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${H.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        W.push(he), W.push("-".repeat(he.length));
        const T = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        M.frequencies.forEach(($e, fe) => {
          var _a2;
          const re = $e > 0 ? 1 / $e : 0, ne = $e * 2 * Math.PI, D = ((_a2 = M.massParticipation) == null ? void 0 : _a2[fe]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let Y = 0; Y < 6; Y++) T[Y] += D[Y];
          const B = D.map((Y) => ((Y * 100).toFixed(1) + "%").padStart(6)).join(" ");
          W.push(`${String(fe + 1).padStart(4)}  ${$e.toFixed(4).padStart(9)}  ${re.toFixed(4).padStart(9)}  ${ne.toFixed(2).padStart(9)}  ${B}  ${(T[0] * 100).toFixed(1).padStart(5)}%  ${(T[1] * 100).toFixed(1).padStart(5)}%  ${(T[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(W.join(`
`));
        const J = e.querySelector("#modal-copy");
        J.textContent = "\u2713", setTimeout(() => J.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: O
    };
  };
  const Oe = 64516e-8, _ = 416231e-12, ae = 0.0254, Ro = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * Oe,
      Iz: 16.4 * _,
      Iy: 2.2 * _,
      J: 0.0405 * _,
      d: 5.9 * ae,
      bf: 3.94 * ae
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * Oe,
      Iz: 29.1 * _,
      Iy: 9.32 * _,
      J: 0.103 * _,
      d: 5.99 * ae,
      bf: 5.99 * ae
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * Oe,
      Iz: 41.4 * _,
      Iy: 13.3 * _,
      J: 0.204 * _,
      d: 6.2 * ae,
      bf: 6.02 * ae
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * Oe,
      Iz: 30.8 * _,
      Iy: 2.09 * _,
      J: 0.0426 * _,
      d: 7.89 * ae,
      bf: 3.94 * ae
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * Oe,
      Iz: 61.9 * _,
      Iy: 7.97 * _,
      J: 0.172 * _,
      d: 8.14 * ae,
      bf: 5.25 * ae
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * Oe,
      Iz: 82.7 * _,
      Iy: 18.3 * _,
      J: 0.346 * _,
      d: 7.93 * ae,
      bf: 6.5 * ae
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * Oe,
      Iz: 110 * _,
      Iy: 37.1 * _,
      J: 0.536 * _,
      d: 8 * ae,
      bf: 7.995 * ae
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * Oe,
      Iz: 146 * _,
      Iy: 49.1 * _,
      J: 0.871 * _,
      d: 8.25 * ae,
      bf: 8.07 * ae
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * Oe,
      Iz: 184 * _,
      Iy: 60.9 * _,
      J: 1.45 * _,
      d: 8.5 * ae,
      bf: 8.11 * ae
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * Oe,
      Iz: 272 * _,
      Iy: 88.6 * _,
      J: 3.54 * _,
      d: 9 * ae,
      bf: 8.28 * ae
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * Oe,
      Iz: 53.8 * _,
      Iy: 2.18 * _,
      J: 0.0547 * _,
      d: 9.87 * ae,
      bf: 3.96 * ae
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * Oe,
      Iz: 118 * _,
      Iy: 11.4 * _,
      J: 0.239 * _,
      d: 10.17 * ae,
      bf: 5.75 * ae
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * Oe,
      Iz: 171 * _,
      Iy: 36.6 * _,
      J: 0.583 * _,
      d: 9.73 * ae,
      bf: 7.96 * ae
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * Oe,
      Iz: 272 * _,
      Iy: 93.4 * _,
      J: 1.39 * _,
      d: 9.98 * ae,
      bf: 10 * ae
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * Oe,
      Iz: 394 * _,
      Iy: 134 * _,
      J: 3.56 * _,
      d: 10.4 * ae,
      bf: 10.13 * ae
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * Oe,
      Iz: 623 * _,
      Iy: 207 * _,
      J: 10.9 * _,
      d: 11.1 * ae,
      bf: 10.34 * ae
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * Oe,
      Iz: 88.6 * _,
      Iy: 2.36 * _,
      J: 0.0704 * _,
      d: 11.91 * ae,
      bf: 3.97 * ae
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * Oe,
      Iz: 156 * _,
      Iy: 4.66 * _,
      J: 0.293 * _,
      d: 12.31 * ae,
      bf: 4.03 * ae
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * Oe,
      Iz: 204 * _,
      Iy: 17.3 * _,
      J: 0.3 * _,
      d: 12.22 * ae,
      bf: 6.49 * ae
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * Oe,
      Iz: 310 * _,
      Iy: 44.1 * _,
      J: 0.906 * _,
      d: 11.94 * ae,
      bf: 8.01 * ae
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * Oe,
      Iz: 425 * _,
      Iy: 95.8 * _,
      J: 1.58 * _,
      d: 12.06 * ae,
      bf: 9.99 * ae
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * Oe,
      Iz: 597 * _,
      Iy: 195 * _,
      J: 4.05 * _,
      d: 12.25 * ae,
      bf: 12.04 * ae
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * Oe,
      Iz: 833 * _,
      Iy: 270 * _,
      J: 8.44 * _,
      d: 12.71 * ae,
      bf: 12.16 * ae
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * Oe,
      Iz: 1070 * _,
      Iy: 345 * _,
      J: 16 * _,
      d: 13.12 * ae,
      bf: 12.32 * ae
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * Oe,
      Iz: 199 * _,
      Iy: 7 * _,
      J: 0.208 * _,
      d: 13.74 * ae,
      bf: 5 * ae
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * Oe,
      Iz: 291 * _,
      Iy: 19.6 * _,
      J: 0.38 * _,
      d: 13.84 * ae,
      bf: 6.73 * ae
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * Oe,
      Iz: 385 * _,
      Iy: 26.7 * _,
      J: 0.798 * _,
      d: 14.1 * ae,
      bf: 6.77 * ae
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * Oe,
      Iz: 485 * _,
      Iy: 51.4 * _,
      J: 1.45 * _,
      d: 13.79 * ae,
      bf: 8.03 * ae
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * Oe,
      Iz: 640 * _,
      Iy: 107 * _,
      J: 2.19 * _,
      d: 13.89 * ae,
      bf: 9.99 * ae
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * Oe,
      Iz: 882 * _,
      Iy: 148 * _,
      J: 5.07 * _,
      d: 14.31 * ae,
      bf: 10.13 * ae
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * Oe,
      Iz: 1240 * _,
      Iy: 447 * _,
      J: 7.12 * _,
      d: 14.32 * ae,
      bf: 14.61 * ae
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * Oe,
      Iz: 1530 * _,
      Iy: 548 * _,
      J: 12.3 * _,
      d: 14.66 * ae,
      bf: 14.73 * ae
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * Oe,
      Iz: 2140 * _,
      Iy: 838 * _,
      J: 23.7 * _,
      d: 15.22 * ae,
      bf: 15.65 * ae
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * Oe,
      Iz: 301 * _,
      Iy: 9.59 * _,
      J: 0.262 * _,
      d: 15.69 * ae,
      bf: 5.5 * ae
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * Oe,
      Iz: 448 * _,
      Iy: 24.5 * _,
      J: 0.545 * _,
      d: 15.86 * ae,
      bf: 6.99 * ae
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * Oe,
      Iz: 659 * _,
      Iy: 37.2 * _,
      J: 1.52 * _,
      d: 16.26 * ae,
      bf: 7.07 * ae
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * Oe,
      Iz: 954 * _,
      Iy: 119 * _,
      J: 2.39 * _,
      d: 16.33 * ae,
      bf: 10.24 * ae
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * Oe,
      Iz: 1300 * _,
      Iy: 163 * _,
      J: 5.45 * _,
      d: 16.75 * ae,
      bf: 10.37 * ae
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * Oe,
      Iz: 510 * _,
      Iy: 15.3 * _,
      J: 0.506 * _,
      d: 17.7 * ae,
      bf: 6 * ae
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * Oe,
      Iz: 800 * _,
      Iy: 40.1 * _,
      J: 1.24 * _,
      d: 17.99 * ae,
      bf: 7.5 * ae
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * Oe,
      Iz: 1170 * _,
      Iy: 60.3 * _,
      J: 3.49 * _,
      d: 18.47 * ae,
      bf: 7.64 * ae
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * Oe,
      Iz: 1750 * _,
      Iy: 201 * _,
      J: 5.86 * _,
      d: 18.59 * ae,
      bf: 11.15 * ae
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * Oe,
      Iz: 843 * _,
      Iy: 20.7 * _,
      J: 0.77 * _,
      d: 20.66 * ae,
      bf: 6.5 * ae
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * Oe,
      Iz: 1330 * _,
      Iy: 57.5 * _,
      J: 1.83 * _,
      d: 20.99 * ae,
      bf: 8.24 * ae
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * Oe,
      Iz: 1830 * _,
      Iy: 81.4 * _,
      J: 4.34 * _,
      d: 21.43 * ae,
      bf: 8.36 * ae
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * Oe,
      Iz: 2670 * _,
      Iy: 274 * _,
      J: 6.83 * _,
      d: 21.51 * ae,
      bf: 12.34 * ae
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * Oe,
      Iz: 1350 * _,
      Iy: 29.1 * _,
      J: 1.18 * _,
      d: 23.57 * ae,
      bf: 7.01 * ae
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * Oe,
      Iz: 2100 * _,
      Iy: 82.5 * _,
      J: 2.68 * _,
      d: 23.92 * ae,
      bf: 8.99 * ae
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * Oe,
      Iz: 3100 * _,
      Iy: 259 * _,
      J: 4.72 * _,
      d: 24.06 * ae,
      bf: 12.75 * ae
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * Oe,
      Iz: 4020 * _,
      Iy: 340 * _,
      J: 9.5 * _,
      d: 24.48 * ae,
      bf: 12.86 * ae
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * Oe,
      Iz: 4580 * _,
      Iy: 391 * _,
      J: 12.6 * _,
      d: 24.74 * ae,
      bf: 12.9 * ae
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * Oe,
      Iz: 5680 * _,
      Iy: 479 * _,
      J: 21.2 * _,
      d: 25.24 * ae,
      bf: 12.9 * ae
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * Oe,
      Iz: 2850 * _,
      Iy: 106 * _,
      J: 2.81 * _,
      d: 26.71 * ae,
      bf: 9.96 * ae
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * Oe,
      Iz: 4090 * _,
      Iy: 159 * _,
      J: 6.77 * _,
      d: 27.29 * ae,
      bf: 10.07 * ae
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * Oe,
      Iz: 3610 * _,
      Iy: 115 * _,
      J: 3.06 * _,
      d: 29.53 * ae,
      bf: 10.4 * ae
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * Oe,
      Iz: 4930 * _,
      Iy: 164 * _,
      J: 6.43 * _,
      d: 30.01 * ae,
      bf: 10.5 * ae
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * Oe,
      Iz: 5900 * _,
      Iy: 187 * _,
      J: 5.3 * _,
      d: 32.86 * ae,
      bf: 11.48 * ae
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * Oe,
      Iz: 7800 * _,
      Iy: 225 * _,
      J: 7 * _,
      d: 35.55 * ae,
      bf: 11.95 * ae
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * Oe,
      Iz: 8.22 * _,
      Iy: 8.22 * _,
      J: 13.4 * _,
      d: 4 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * Oe,
      Iz: 10.7 * _,
      Iy: 10.7 * _,
      J: 17.9 * _,
      d: 4 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * Oe,
      Iz: 12.3 * _,
      Iy: 12.3 * _,
      J: 21 * _,
      d: 4 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * Oe,
      Iz: 30.3 * _,
      Iy: 30.3 * _,
      J: 48.3 * _,
      d: 6 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * Oe,
      Iz: 41.1 * _,
      Iy: 41.1 * _,
      J: 66.9 * _,
      d: 6 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * Oe,
      Iz: 49.6 * _,
      Iy: 49.6 * _,
      J: 82.2 * _,
      d: 6 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * Oe,
      Iz: 70.7 * _,
      Iy: 70.7 * _,
      J: 112 * _,
      d: 8 * ae,
      bf: 8 * ae
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * Oe,
      Iz: 98 * _,
      Iy: 98 * _,
      J: 158 * _,
      d: 8 * ae,
      bf: 8 * ae
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * Oe,
      Iz: 122 * _,
      Iy: 122 * _,
      J: 199 * _,
      d: 8 * ae,
      bf: 8 * ae
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * Oe,
      Iz: 202 * _,
      Iy: 202 * _,
      J: 323 * _,
      d: 10 * ae,
      bf: 10 * ae
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * Oe,
      Iz: 254 * _,
      Iy: 254 * _,
      J: 412 * _,
      d: 10 * ae,
      bf: 10 * ae
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * Oe,
      Iz: 355 * _,
      Iy: 355 * _,
      J: 564 * _,
      d: 12 * ae,
      bf: 12 * ae
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * Oe,
      Iz: 452 * _,
      Iy: 452 * _,
      J: 724 * _,
      d: 12 * ae,
      bf: 12 * ae
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * Oe,
      Iz: 18 * _,
      Iy: 9.58 * _,
      J: 22.6 * _,
      d: 6 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * Oe,
      Iz: 23.8 * _,
      Iy: 12.3 * _,
      J: 30.3 * _,
      d: 6 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * Oe,
      Iz: 33.6 * _,
      Iy: 11.8 * _,
      J: 33 * _,
      d: 8 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * Oe,
      Iz: 45.1 * _,
      Iy: 15 * _,
      J: 44.5 * _,
      d: 8 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * Oe,
      Iz: 46.1 * _,
      Iy: 28.2 * _,
      J: 61.3 * _,
      d: 8 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * Oe,
      Iz: 63 * _,
      Iy: 37.5 * _,
      J: 84.6 * _,
      d: 8 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * Oe,
      Iz: 103 * _,
      Iy: 47.1 * _,
      J: 115 * _,
      d: 10 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * Oe,
      Iz: 196 * _,
      Iy: 102 * _,
      J: 249 * _,
      d: 12 * ae,
      bf: 8 * ae
    }
  ];
  function Tn() {
    const e = {};
    return Ro.forEach((b, O) => {
      b.type === "W" && (e[b.name] = O);
    }), e;
  }
  function zn() {
    const e = {};
    return Ro.forEach((b, O) => {
      b.type === "HSS" && (e[b.name] = O);
    }), e;
  }
  function Rl(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: b, elements: O, elementInputs: M, nodeInputs: X, deformOutputs: H } = e, Z = b.length * 6, V = O.length, j = O.filter((re) => re.length === 2).length, W = O.filter((re) => re.length >= 3).length, he = document.createElement("div");
    he.className = "rpt-overlay";
    let T = "";
    T += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', T += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", T += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', T += '<hr class="rpt-sep"/>', T += "<h2>1. Input Data</h2>", T += '<table class="rpt-info"><tbody>', T += `<tr><td>Number of nodes</td><td class="val">${b.length}</td></tr>`, T += `<tr><td>Number of elements</td><td class="val">${V} (${j} frames, ${W} shells)</td></tr>`, T += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', T += `<tr><td>Total DOFs</td><td class="val">${Z}</td></tr>`, T += "</tbody></table>", T += "<h3>1.1 Node Coordinates</h3>", T += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', b.forEach((re, ne) => {
      T += `<tr><td>${ne}</td><td>${rt(re[0])}</td><td>${rt(re[1])}</td><td>${rt(re[2])}</td></tr>`;
    }), T += "</tbody></table>", T += "<h3>1.2 Element Connectivity</h3>", T += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', O.forEach((re, ne) => {
      var _a2, _b2, _c2, _d2;
      const D = re.length === 2, B = re.map((ye) => b[ye]), Y = D ? Wo(ko(B[1], B[0])) : 0, ue = ((_a2 = M.elasticities) == null ? void 0 : _a2.get(ne)) ?? 0, Me = ((_b2 = M.areas) == null ? void 0 : _b2.get(ne)) ?? 0, Ae = ((_c2 = M.momentsOfInertiaZ) == null ? void 0 : _c2.get(ne)) ?? 0, Ke = ((_d2 = M.momentsOfInertiaY) == null ? void 0 : _d2.get(ne)) ?? 0;
      T += `<tr><td>${ne}</td><td>${D ? "Frame" : "Shell"}</td><td>${re.join(" \u2192 ")}</td>`, T += `<td>${rt(Y)}</td><td>${rt(ue)}</td><td>${rt(Me)}</td><td>${rt(Ae)}</td><td>${rt(Ke)}</td></tr>`;
    }), T += "</tbody></table>", T += "<h2>2. Element Formulation</h2>", j > 0 && (T += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", T += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", T += "<h4>2.1.1 Shape Functions</h4>", T += "<p><b>Axial</b> (linear interpolation):</p>", T += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', T += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", T += '<table class="rpt-eq-table"><tbody>', T += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', T += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', T += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', T += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', T += "</tbody></table>", T += Nl(), T += "<p><b>Torsion</b> (linear): same as axial.</p>", T += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", T += "<p>The B matrix relates nodal displacements to internal strains:</p>", T += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', T += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', T += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', T += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', T += "<h4>2.1.3 Constitutive Relations D</h4>", T += '<table class="rpt-eq-table"><tbody>', T += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', T += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', T += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', T += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', T += "</tbody></table>", T += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", T += "<p>Obtained by analytical integration:</p>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', T += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", T += '<div class="rpt-eq-small">', T += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", T += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", T += "</div>", T += "<h4>2.1.5 Transformation Matrix T</h4>", T += "<p>Direction cosines of element axis:</p>", T += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', T += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', T += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', T += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", T += "<h4>2.1.6 Global Stiffness Matrix</h4>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), T += "<h2>3. Numerical Results per Element</h2>", T += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let re = 0; re < V; re++) {
      const ne = O[re], D = ne.map((dt) => b[dt]);
      if (!(ne.length === 2)) continue;
      const Y = Wo(ko(D[1], D[0])), ue = ((_a = M.elasticities) == null ? void 0 : _a.get(re)) ?? 0, Me = ((_b = M.areas) == null ? void 0 : _b.get(re)) ?? 0, Ae = ((_c = M.momentsOfInertiaZ) == null ? void 0 : _c.get(re)) ?? 0, Ke = ((_d = M.momentsOfInertiaY) == null ? void 0 : _d.get(re)) ?? 0, ye = ((_e = M.shearModuli) == null ? void 0 : _e.get(re)) ?? 0, Ge = ((_f = M.torsionalConstants) == null ? void 0 : _f.get(re)) ?? 0;
      let Ye = null, be = null, Te = null;
      try {
        Ye = Fn(D, M, re), be = Pn(D), Te = uo(xs(be), uo(Ye, be));
      } catch {
        continue;
      }
      const Ce = ko(D[1], D[0]), Ue = Ce[0] / Y, ct = Ce[1] / Y, Ze = Ce[2] / Y;
      T += '<div class="rpt-elem-block">', T += `<h3 class="rpt-elem-title" data-toggle="elem${re}">\u25B6 Element ${re} \u2014 Nodes ${ne[0]} \u2192 ${ne[1]}, L = ${rt(Y)}</h3>`, T += `<div id="rpt-elem${re}" class="rpt-elem-body" style="display:none">`, T += "<h4>Properties (numerical substitution)</h4>", T += '<div class="rpt-eq-small">', T += `E = ${rt(ue)} &nbsp;&nbsp; A = ${rt(Me)} &nbsp;&nbsp; I<sub>z</sub> = ${rt(Ae)} &nbsp;&nbsp; I<sub>y</sub> = ${rt(Ke)} &nbsp;&nbsp; G = ${rt(ye)} &nbsp;&nbsp; J = ${rt(Ge)}<br/>`, T += `EA/L = ${rt(ue)}\xB7${rt(Me)}/${rt(Y)} = <b>${rt(ue * Me / Y)}</b><br/>`, T += `12EI<sub>z</sub>/L\xB3 = 12\xB7${rt(ue)}\xB7${rt(Ae)}/${rt(Y)}\xB3 = <b>${rt(12 * ue * Ae / Y ** 3)}</b><br/>`, T += `12EI<sub>y</sub>/L\xB3 = 12\xB7${rt(ue)}\xB7${rt(Ke)}/${rt(Y)}\xB3 = <b>${rt(12 * ue * Ke / Y ** 3)}</b><br/>`, T += `GJ/L = ${rt(ye)}\xB7${rt(Ge)}/${rt(Y)} = <b>${rt(ye * Ge / Y)}</b>`, T += "</div>", T += "<h4>Direction cosines</h4>", T += `<div class="rpt-eq-small">l = ${An(Ue)}, m = ${An(ct)}, n = ${An(Ze)}, D = ${An(Math.sqrt(Ue ** 2 + ct ** 2))}</div>`, T += "<h4>K<sub>local</sub> (12\xD712)</h4>", T += fs(Ye, 12), T += "<h4>T \u2014 Transformation (12\xD712)</h4>", T += fs(be, 12), T += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", T += fs(Te, 12), T += "<h4>Assembly</h4>", T += `<div class="rpt-eq-small">Global DOFs: node ${ne[0]} \u2192 [${ne[0] * 6}..${ne[0] * 6 + 5}], node ${ne[1]} \u2192 [${ne[1] * 6}..${ne[1] * 6 + 5}]</div>`, T += "</div></div>";
    }
    T += "<h2>4. Global Assembly</h2>", T += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${V - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, T += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", T += ql(O, b.length), T += "<h2>5. Boundary Conditions</h2>";
    const J = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], $e = [];
    if (T += "<h3>5.1 Supports (fixed DOFs)</h3>", X.supports && X.supports.size > 0) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const re of J) T += `<th>${re}</th>`;
      T += "</tr></thead><tbody>", X.supports.forEach((re, ne) => {
        T += `<tr><td>${ne}</td>`, re.forEach((D, B) => {
          D && $e.push(ne * 6 + B), T += `<td class="${D ? "fixed" : ""}">${D ? "Fixed" : "Free"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += `<div class="rpt-eq-small">Fixed DOFs: [${$e.join(", ")}] \u2192 ${$e.length} constraints<br/>`, T += `Free DOFs: ${Z} \u2212 ${$e.length} = <b>${Z - $e.length}</b></div>`, T += "<h3>5.2 Applied Loads</h3>", X.loads && X.loads.size > 0) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const re = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const ne of re) T += `<th>${ne}</th>`;
      T += "</tr></thead><tbody>", X.loads.forEach((ne, D) => {
        T += `<tr><td>${D}</td>`, ne.forEach((B) => {
          const Y = Math.abs(B) > 1e-10;
          T += `<td class="${Y ? "nz" : ""}">${Y ? rt(B) : "0"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h2>6. Solution</h2>", T += "<p>After removing fixed DOFs, the reduced system is:</p>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', T += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", T += "<h3>6.1 Nodal Displacements</h3>", H == null ? void 0 : H.deformations) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const re of J) T += `<th>${re}</th>`;
      T += "</tr></thead><tbody>", H.deformations.forEach((re, ne) => {
        T += `<tr><td>${ne}</td>`, re.forEach((D) => {
          const B = Math.abs(D) > 1e-10;
          T += `<td class="${B ? "nz" : ""}">${rt(D, 6)}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h3>6.2 Reactions</h3>", T += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', H == null ? void 0 : H.reactions) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const re of J) T += `<th>${re}</th>`;
      T += "</tr></thead><tbody>", H.reactions.forEach((re, ne) => {
        T += `<tr><td>${ne}</td>`, re.forEach((D) => {
          const B = Math.abs(D) > 1e-10;
          T += `<td class="${B ? "nz-react" : ""}">${B ? rt(D, 4) : "0"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h2>7. Internal Forces</h2>", T += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", T += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', T += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', H == null ? void 0 : H.deformations) {
      const re = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      T += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const ne of re) T += `<th>${ne}<sub>i</sub></th>`;
      for (const ne of re) T += `<th>${ne}<sub>j</sub></th>`;
      T += "</tr></thead><tbody>";
      for (let ne = 0; ne < V; ne++) {
        const D = O[ne];
        if (D.length !== 2) continue;
        const B = D.map((Y) => b[Y]);
        try {
          const Y = Fn(B, M, ne), ue = Pn(B), Me = [];
          for (const ye of D) {
            const Ge = ((_g = H.deformations) == null ? void 0 : _g.get(ye)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Me.push(...Ge);
          }
          const Ae = uo(ue, Me), Ke = uo(Y, Ae);
          T += `<tr><td>${ne}</td><td>${D.join("\u2192")}</td>`;
          for (let ye = 0; ye < 12; ye++) {
            const Ge = Math.abs(Ke[ye]) > 1e-10;
            T += `<td class="${Ge ? "nz" : ""}">${rt(Ke[ye], 2)}</td>`;
          }
          T += "</tr>";
        } catch {
        }
      }
      T += "</tbody></table>";
    }
    const fe = `
    <style>
      .rpt-overlay {
        position: fixed; inset: 0; z-index: 9999999;
        background: #fff; color: #222;
        overflow-y: auto; padding: 30px 50px;
        font-family: 'Georgia Pro', 'Century Schoolbook', 'Times New Roman', serif;
        font-size: 12pt; line-height: 160%;
        max-width: 1000px; margin: 0 auto;
      }
      .rpt-overlay h1 { font-family: 'Arial Nova', Helvetica, sans-serif; font-size: 22pt; color: #003366; margin: 0 0 4px 0; }
      .rpt-overlay h2 { font-family: 'Arial Nova', Helvetica, sans-serif; font-size: 16pt; color: #003366; margin: 28px 0 12px 0; border-bottom: 2px solid #003366; padding-bottom: 4px; }
      .rpt-overlay h3 { font-family: 'Arial Nova', Helvetica, sans-serif; font-size: 13pt; color: #005599; margin: 20px 0 8px 0; }
      .rpt-overlay h4 { font-family: 'Arial Nova', Helvetica, sans-serif; font-size: 11pt; color: #666; margin: 14px 0 6px 0; }
      .rpt-overlay p { margin: 6px 0; }
      .rpt-subtitle { color: #666; font-style: italic; margin-bottom: 8px; }
      .rpt-sep { border: none; border-top: 1px solid #ccc; margin: 16px 0; }

      .rpt-close { position: fixed; top: 12px; right: 20px; background: #003366; color: #fff; border: none; border-radius: 4px; padding: 8px 16px; cursor: pointer; font-size: 13px; z-index: 10000000; }
      .rpt-close:hover { background: #005599; }

      .rpt-info { border-collapse: collapse; margin: 8px 0; font-family: 'Segoe UI', sans-serif; font-size: 11pt; }
      .rpt-info td { padding: 3px 16px 3px 0; }
      .rpt-info .val { color: #06d; font-weight: bold; }

      .rpt-data { border-collapse: collapse; margin: 8px 0; font-family: 'Consolas', monospace; font-size: 10pt; width: 100%; }
      .rpt-data th { background: #f0f4f8; color: #003366; padding: 4px 8px; border: 1px solid #ccc; text-align: center; font-size: 9pt; }
      .rpt-data td { padding: 3px 8px; border: 1px solid #ddd; text-align: right; }
      .rpt-data td.nz { color: #06d; font-weight: bold; }
      .rpt-data td.nz-react { color: #c44; font-weight: bold; }
      .rpt-data td.fixed { color: #c44; font-weight: bold; background: #fff0f0; }

      .rpt-eq { background: #f8f9fb; border-left: 3px solid #06d; padding: 8px 14px; margin: 8px 0; font-family: 'Georgia Pro', serif; font-size: 12pt; color: #06d; }
      .rpt-eq-highlight { background: #eef6ff; border-left: 4px solid #003366; font-weight: bold; }
      .rpt-eq-small { background: #fafafa; border-left: 2px solid #ccc; padding: 6px 12px; margin: 6px 0; font-family: 'Consolas', monospace; font-size: 10pt; color: #333; line-height: 180%; }

      .rpt-eq-table { border-collapse: collapse; margin: 6px 0; }
      .rpt-eq-table td { padding: 3px 12px; vertical-align: top; }
      .rpt-eq-table .eq-name { color: #06d; font-weight: bold; font-family: serif; }
      .rpt-eq-table .eq-desc { color: #888; font-style: italic; font-size: 10pt; }

      .rpt-mtx { border-collapse: collapse; font-family: 'Consolas', monospace; font-size: 9pt; margin: 6px 0; }
      .rpt-mtx td { padding: 2px 6px; text-align: right; border: 1px solid #e0e0e0; min-width: 55px; }
      .rpt-mtx td.z { color: #ccc; }
      .rpt-mtx td.diag { background: #eef6ff; color: #06d; font-weight: bold; }

      .rpt-elem-block { margin: 4px 0; border-left: 3px solid #e0e0e0; padding-left: 12px; }
      .rpt-elem-title { cursor: pointer; color: #005599; }
      .rpt-elem-title:hover { color: #08d; }
      .rpt-elem-body { margin: 4px 0 16px 0; }

      .rpt-assembly-map { border-collapse: collapse; margin: 8px 0; }
      .rpt-assembly-map td { width: 16px; height: 16px; text-align: center; font-size: 8px; padding: 0; border: 1px solid #eee; }

      @media print {
        .rpt-close { display: none; }
        .rpt-overlay { position: static; padding: 10mm; }
      }
    </style>
  `;
    return he.innerHTML = fe + T, (_h = he.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => he.remove()), he.querySelectorAll("[data-toggle]").forEach((re) => {
      re.addEventListener("click", () => {
        const ne = re.dataset.toggle, D = he.querySelector(`#rpt-${ne}`);
        if (D) {
          const B = D.style.display !== "none";
          D.style.display = B ? "none" : "", re.textContent = re.textContent.replace(/^[▼▶]/, B ? "\u25B6" : "\u25BC");
        }
      });
    }), he;
  }
  function rt(e, b = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(b) : e.toFixed(b);
  }
  function An(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function fs(e, b) {
    var _a;
    const O = Math.min(b, 12);
    let M = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let X = 0; X < O; X++) {
      M += "<tr>";
      for (let H = 0; H < O; H++) {
        const Z = ((_a = e[X]) == null ? void 0 : _a[H]) ?? 0, V = Math.abs(Z) < 1e-10;
        M += `<td class="${V ? "z" : ""} ${X === H && !V ? "diag" : ""}">${V ? "0" : Ol(Z)}</td>`;
      }
      M += "</tr>";
    }
    return M += "</table>", b > O && (M += `<div style="color:#888;font-size:9pt">(showing ${O}\xD7${O} of ${b}\xD7${b})</div>`), M += "</div>", M;
  }
  function Ol(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function Nl() {
    const Z = [
      {
        name: "H\u2081",
        color: "#c44",
        fn: (j) => 1 - 3 * j ** 2 + 2 * j ** 3
      },
      {
        name: "H\u2082/L",
        color: "#2a9d8f",
        fn: (j) => j * (1 - j) ** 2
      },
      {
        name: "H\u2083",
        color: "#264653",
        fn: (j) => 3 * j ** 2 - 2 * j ** 3
      },
      {
        name: "H\u2084/L",
        color: "#e9c46a",
        fn: (j) => j ** 2 * (j - 1)
      }
    ];
    let V = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    V += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, V += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', V += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, V += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, V += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const j of Z) {
      let W = "";
      for (let $e = 0; $e <= 80; $e++) {
        const fe = $e / 80, re = 30 + fe * 540, ne = 180 / 2 - j.fn(fe) * 60;
        W += ($e === 0 ? "M" : "L") + `${re.toFixed(1)},${ne.toFixed(1)}`;
      }
      V += `<path d="${W}" fill="none" stroke="${j.color}" stroke-width="2.5"/>`;
      const he = 0.75, T = 30 + he * 540 + 8, J = 180 / 2 - j.fn(he) * 60 - 6;
      V += `<text x="${T}" y="${J}" fill="${j.color}" font-size="11" font-weight="bold" font-family="sans-serif">${j.name}</text>`;
    }
    return V += "</svg>", V;
  }
  function ql(e, b) {
    const O = b * 6, M = Math.min(O, 30);
    let X = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    X += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', X += "<tr><td></td>";
    for (let Z = 0; Z < M; Z++) X += `<td style="color:#003366;font-weight:bold;font-size:7px">${Z}</td>`;
    X += "</tr>";
    const H = Array.from({
      length: M
    }, () => Array(M).fill(0));
    for (let Z = 0; Z < e.length; Z++) {
      const V = e[Z].map((j) => j * 6);
      for (const j of V) for (const W of V) for (let he = 0; he < 6; he++) for (let T = 0; T < 6; T++) {
        const J = j + he, $e = W + T;
        J < M && $e < M && H[J][$e]++;
      }
    }
    for (let Z = 0; Z < M; Z++) {
      X += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${Z}</td>`;
      for (let V = 0; V < M; V++) {
        const j = H[Z][V], W = j === 0 ? "#fff" : j === 1 ? "#e8f0fe" : j === 2 ? "#c6dcf5" : "#a0c4e8", he = j === 0 ? "" : j.toString();
        X += `<td style="background:${W};color:#003366">${he}</td>`;
      }
      X += "</tr>";
    }
    return X += "</table></div>", O > M && (X += `<div style="color:#888;font-size:9pt">(showing ${M}\xD7${M} of ${O}\xD7${O})</div>`), X;
  }
  let us = false;
  function _l(e) {
    if (us || window.katex) {
      us = true, e();
      return;
    }
    const b = document.createElement("link");
    b.rel = "stylesheet", b.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(b);
    const O = document.createElement("script");
    O.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", O.onload = () => {
      us = true, e();
    }, document.head.appendChild(O);
  }
  function Ea(e, b = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: b,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function Dl(e, b, O, M, X, H) {
    var _a, _b, _c, _d, _e, _f;
    const Z = O[e], V = Z.map((be) => b[be]), j = Z.length === 2, W = j ? Wo(ko(V[1], V[0])) : 0, he = ((_a = M.elasticities) == null ? void 0 : _a.get(e)) ?? 0, T = ((_b = M.areas) == null ? void 0 : _b.get(e)) ?? 0, J = ((_c = M.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, $e = ((_d = M.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, fe = ((_e = M.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, re = ((_f = M.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let ne = null, D = null, B = null;
    try {
      ne = Fn(V, M, e), D = Pn(V), B = uo(xs(D), uo(ne, D));
    } catch {
    }
    const Y = j ? ko(V[1], V[0]) : [
      0,
      0,
      0
    ], ue = W > 0 ? Y[0] / W : 0, Me = W > 0 ? Y[1] / W : 0, Ae = W > 0 ? Y[2] / W : 0, Ke = Math.sqrt(ue ** 2 + Me ** 2), ye = [];
    if ((X == null ? void 0 : X.deformations) && j) for (const be of Z) {
      const Te = X.deformations.get(be) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      ye.push(...Te);
    }
    let Ge = [], Ye = [];
    if (ye.length === 12 && D && ne) {
      try {
        Ge = uo(D, ye);
      } catch {
        Ge = Array(12).fill(0);
      }
      try {
        Ye = uo(ne, Ge);
      } catch {
        Ye = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: Z,
      elmNodes: V,
      isFrame: j,
      L: W,
      E: he,
      A: T,
      Iz: J,
      Iy: $e,
      G: fe,
      J: re,
      kLocal: ne,
      T: D,
      kGlobal: B,
      l: ue,
      m: Me,
      n: Ae,
      D: Ke,
      uGlobal: ye,
      uLocal: Ge,
      fLocal: Ye,
      dOut: X,
      aOut: H,
      totalNodes: b.length
    };
  }
  function Bl(e, b, O, M, X, H) {
    var _a, _b;
    const Z = Dl(e, b, O, M, X, H), V = document.createElement("div");
    return V.className = "er-panel", V.innerHTML = Gl + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${Z.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${Z.elem.join(" \u2192 ")} \u2014 L = ${Xe(Z.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${Hl(Z)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${Sa(Z)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${jl(Z)}</div>
  `, V.querySelectorAll(".er-tab").forEach((j) => {
      j.addEventListener("click", () => {
        V.querySelectorAll(".er-tab").forEach((he) => he.classList.remove("active")), j.classList.add("active");
        const W = j.dataset.tab;
        V.querySelectorAll(".er-body").forEach((he) => he.style.display = "none"), V.querySelector(`#er-body-${W}`).style.display = "";
      });
    }), (_a = V.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => V.remove()), (_b = V.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const j = V.classList.toggle("er-fullscreen-mode"), W = V.querySelector("#er-fullscreen");
      W && (W.textContent = j ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const j = V.querySelector("#er-sf-canvas");
      j && ms(j);
      const W = V.querySelector("#er-sf-canvas-math");
      W && ms(W);
    }, 50), _l(() => {
      const j = V.querySelector("#er-body-math");
      j && (j.innerHTML = Sa(Z)), setTimeout(() => {
        const W = V.querySelector("#er-sf-canvas-math");
        W && ms(W);
      }, 50), V.querySelectorAll(".er-deriv-header").forEach((W) => {
        W.addEventListener("click", () => {
          const he = W.dataset.toggle, T = V.querySelector(`#er-${he}`);
          T && (T.style.display = T.style.display === "none" ? "" : "none");
        });
      });
    }), V;
  }
  function Hl(e) {
    let b = "";
    if (b += '<div class="er-section-title">1. Propiedades</div>', b += '<table class="er-props">', b += `<tr><td>E</td><td>${Xe(e.E)}</td><td>A</td><td>${Xe(e.A)}</td></tr>`, b += `<tr><td>I<sub>z</sub></td><td>${Xe(e.Iz)}</td><td>I<sub>y</sub></td><td>${Xe(e.Iy)}</td></tr>`, b += `<tr><td>G</td><td>${Xe(e.G)}</td><td>J</td><td>${Xe(e.J)}</td></tr>`, b += "</table>", e.kLocal && (b += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, b += hn(e.kLocal)), e.T && (b += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', b += hn(e.T)), e.kGlobal && (b += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', b += hn(e.kGlobal)), b += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const O = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let M = 0; M < e.elem.length; M++) {
        b += `<div class="er-sub">Nodo ${e.elem[M]}: `;
        for (let X = 0; X < 6; X++) {
          const H = e.uGlobal[M * 6 + X];
          b += `${O[X]}=<span class="${Math.abs(H) > 1e-10 ? "nz" : ""}">${Xe(H, 6)}</span> `;
        }
        b += "</div>";
      }
    } else b += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (b += '<div class="er-section-title">6. Fuerzas internas</div>', e.fLocal.length > 0 && e.fLocal.some((O) => O !== 0)) {
      const O = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const M of O) b += `<th>${M}</th>`;
      b += "</tr>", b += "<tr><td>Nodo i</td>";
      for (let M = 0; M < 6; M++) b += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Xe(e.fLocal[M], 3)}</td>`;
      b += "</tr><tr><td>Nodo j</td>";
      for (let M = 6; M < 12; M++) b += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Xe(e.fLocal[M], 3)}</td>`;
      b += "</tr></table>";
    } else b += '<div class="er-sub">Sin an\xE1lisis</div>';
    return b;
  }
  function Sa(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let b = "";
    const O = (he) => Ea(he), M = (he) => Ea(he, true);
    b += '<div class="er-section-title">1. Geometria del elemento</div>', b += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", b += `<div class="er-eq">${M("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, b += '<div class="er-eq-num">', b += `${O("\\text{Nodo } i")} = (${e.elmNodes[0].map((he) => Xe(he)).join(", ")})<br/>`, b += `${O("\\text{Nodo } j")} = (${e.elmNodes[1].map((he) => Xe(he)).join(", ")})<br/>`, b += `${M(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Xe(e.L)}}`)}`, b += "</div>", b += '<div class="er-section-title">2. Funciones de forma</div>', b += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", b += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', b += `<div class="er-eq">${M("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, b += "<p>Primera derivada:</p>", b += `<div class="er-eq">${M("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, b += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', b += `<p>Las funciones de Hermite garantizan continuidad ${O("C^1")} (desplazamiento y pendiente continuos):</p>`, b += `<div class="er-eq">${M("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, b += `<div class="er-eq">${M("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, b += `<div class="er-eq">${M("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, b += `<div class="er-eq">${M("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, b += `<div class="er-subsec">Derivadas segunda (curvatura ${O("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, b += `<div class="er-eq">${M("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, b += `<div class="er-eq">${M("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, b += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', b += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', b += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", b += `<div class="er-eq">${M("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, b += '<div class="er-subsec">3.1 Deformacion axial</div>', b += `<div class="er-eq">${M("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, b += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${O("I_z")})</div>`, b += `<div class="er-eq">${M("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, b += `<div class="er-eq">${M("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, b += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${O("I_y")})</div>`, b += `<div class="er-eq">${M("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, b += '<div class="er-subsec">3.4 Torsion</div>', b += `<div class="er-eq">${M("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, b += '<div class="er-section-title">4. Relaciones constitutivas D</div>', b += "<p>Cada modo de deformacion tiene su rigidez material:</p>", b += `<div class="er-eq">${M(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Xe(e.E)} \\times ${Xe(e.A)} = \\mathbf{${Xe(e.E * e.A)}}`)}</div>`, b += `<div class="er-eq">${M(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Xe(e.E)} \\times ${Xe(e.Iz)} = \\mathbf{${Xe(e.E * e.Iz)}}`)}</div>`, b += `<div class="er-eq">${M(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Xe(e.E)} \\times ${Xe(e.Iy)} = \\mathbf{${Xe(e.E * e.Iy)}}`)}</div>`, b += `<div class="er-eq">${M(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Xe(e.G)} \\times ${Xe(e.J)} = \\mathbf{${Xe(e.G * e.J)}}`)}</div>`, b += `<div class="er-section-title">5. Integracion \u2192 ${O("\\mathbf{K}_{local}")}</div>`, b += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", b += `<div class="er-eq er-eq-main">${M("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const X = e.E * e.A / e.L, H = e.E * e.Iz / e.L ** 3, Z = e.E * e.Iy / e.L ** 3, V = e.G * e.J / e.L;
    if (b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', b += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', b += "<p><b>Paso 1:</b> Funcion de forma axial</p>", b += `<div class="er-eq">${M("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, b += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", b += `<div class="er-eq">${M("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, b += `<div class="er-eq">${M("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, b += `<p><b>Paso 3:</b> Integracion ${O("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, b += `<div class="er-eq">${M("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, b += `<div class="er-eq">${M("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, b += `<div class="er-eq er-eq-main">${M(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Xe(e.E)}\\times${Xe(e.A)}}{${Xe(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, b += `<div class="er-eq">${M(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Xe(X)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', b += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', b += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${O("v(\\xi)")}</p>`, b += `<div class="er-eq">${M("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, b += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", b += `<div class="er-eq">${M("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, b += `<div class="er-eq">${M("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, b += `<div class="er-eq">${M("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, b += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${O("v_i \\cdot v_i")})</p>`, b += `<div class="er-eq">${M("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, b += `<p>Expandimos: ${O("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, b += `<div class="er-eq">${M("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, b += `<div class="er-eq er-eq-main">${M(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Xe(e.E)} \\times ${Xe(e.Iz)}}{${Xe(e.L)}^3} = \\mathbf{${Xe(12 * H)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', b += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', b += `<p>Mismo proceso que axial pero con ${O("\\theta_x")} y ${O("GJ")}:</p>`, b += `<div class="er-eq">${M(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Xe(e.G)}\\times${Xe(e.J)}}{${Xe(e.L)}} = \\mathbf{${Xe(V)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', b += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', b += `<p>Termino cruzado ${O("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, b += `<div class="er-eq">${M("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, b += `<div class="er-eq">${M("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, b += `<div class="er-eq">${M("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, b += `<div class="er-eq er-eq-main">${M(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Xe(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, b += "</div></div>", b += '<div class="er-subsec">Resumen de coeficientes:</div>', b += `<div class="er-eq">${M(`\\frac{EA}{L} = \\mathbf{${Xe(X)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Xe(12 * H)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Xe(12 * Z)}}`)}</div>`, b += `<div class="er-eq">${M(`\\frac{GJ}{L} = \\mathbf{${Xe(V)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Xe(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Xe(4 * e.E * e.Iz / e.L)}}`)}</div>`, b += `<div class="er-eq">${M(`\\frac{6EI_z}{L^2} = \\mathbf{${Xe(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Xe(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (b += `<div class="er-subsec">Resultado: ${O("\\mathbf{K}_{local}")} (12x12)</div>`, b += hn(e.kLocal)), b += '<div class="er-section-title">6. Transformacion de coordenadas</div>', b += "<p>Los cosenos directores del eje del elemento:</p>", b += `<div class="er-eq">${M(`l = \\frac{x_j - x_i}{L} = ${Ln(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${Ln(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${Ln(e.n)}`)}</div>`, b += `<div class="er-eq">${M(`D = \\sqrt{l^2 + m^2} = ${Ln(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      b += `<p>Caso especial: elemento vertical (${O(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const he = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      b += `<div class="er-eq">${M(he)}</div>`;
    } else b += `<div class="er-eq">${M("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    b += `<div class="er-eq er-eq-main">${M("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, b += `<div class="er-section-title">7. ${O("\\mathbf{K}_{global}")} = ${O("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, b += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", b += `<div class="er-eq er-eq-main">${M("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (b += hn(e.kGlobal)), b += '<div class="er-section-title">8. Ensamblaje</div>';
    const j = e.elem[0] * 6, W = e.elem[1] * 6;
    if (b += `<div class="er-eq">${M(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${j} \\ldots ${j + 5}]`)}</div>`, b += `<div class="er-eq">${M(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${W} \\ldots ${W + 5}]`)}</div>`, b += `<div class="er-eq">${M("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, b += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', b += `<div class="er-eq">${M("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, b += `<div class="er-eq er-eq-main">${M("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((he) => he !== 0)) {
      const he = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const T of he) b += `<th>${T}</th>`;
      b += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let T = 0; T < 6; T++) b += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${Xe(e.fLocal[T], 3)}</td>`;
      b += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let T = 6; T < 12; T++) b += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${Xe(e.fLocal[T], 3)}</td>`;
      b += "</tr></table>";
    }
    return b;
  }
  function jl(e) {
    let b = "";
    if (b += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, b += '<table class="er-props">', b += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, b += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, b += `<tr><td>Longitud</td><td><b>${Xe(e.L)}</b></td></tr>`, b += `<tr><td>E</td><td>${Xe(e.E)}</td></tr>`, b += `<tr><td>A</td><td>${Xe(e.A)}</td></tr>`, b += "</table>", e.uGlobal.length > 0) {
      b += '<div class="er-section-title">Desplazamientos</div>';
      const O = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const M of O) b += `<th>${M}</th>`;
      b += "</tr>";
      for (let M = 0; M < e.elem.length; M++) {
        b += `<tr><td>${e.elem[M]}</td>`;
        for (let X = 0; X < 6; X++) {
          const H = e.uGlobal[M * 6 + X];
          b += `<td class="${Math.abs(H) > 1e-10 ? "nz" : ""}">${Xe(H, 6)}</td>`;
        }
        b += "</tr>";
      }
      b += "</table>";
    }
    if (e.fLocal.length > 0 && e.fLocal.some((O) => O !== 0)) {
      b += '<div class="er-section-title">Fuerzas internas</div>';
      const O = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const M of O) b += `<th>${M}</th>`;
      b += "</tr><tr><td>Nodo i</td>";
      for (let M = 0; M < 6; M++) b += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Xe(e.fLocal[M], 3)}</td>`;
      b += "</tr><tr><td>Nodo j</td>";
      for (let M = 6; M < 12; M++) b += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Xe(e.fLocal[M], 3)}</td>`;
      b += "</tr></table>";
    }
    return b;
  }
  function Xe(e, b = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(b) : e.toFixed(b);
  }
  function Ln(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function hn(e) {
    var _a;
    const b = e.length, O = Math.min(b, 12);
    let M = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let X = 0; X < O; X++) {
      M += "<tr>";
      for (let H = 0; H < O; H++) {
        const Z = ((_a = e[X]) == null ? void 0 : _a[H]) ?? 0, V = Math.abs(Z) < 1e-10;
        M += `<td class="${V ? "z" : ""} ${X === H && !V ? "diag" : ""}">${V ? "0" : Wl(Z)}</td>`;
      }
      M += "</tr>";
    }
    return M += "</table>", b > O && (M += `<div style="color:var(--fem-label);font-size:9px">(${O}\xD7${O} de ${b}\xD7${b})</div>`), M += "</div>", M;
  }
  function Wl(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function ms(e) {
    const b = e.getContext("2d");
    if (!b) return;
    const O = e.width, M = e.height, X = 30, H = O - 2 * X, Z = (M - 3 * X) / 2;
    b.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", b.fillRect(0, 0, O, M);
    const V = (j, W, he) => {
      b.strokeStyle = "#333", b.lineWidth = 1, b.strokeRect(X, j, H, Z), b.strokeStyle = "#444", b.beginPath(), b.moveTo(X, j + Z / 2), b.lineTo(X + H, j + Z / 2), b.stroke(), b.fillStyle = "#888", b.font = "11px sans-serif", b.fillText(W, X + 4, j + 14);
      for (const J of he) {
        b.strokeStyle = J.color, b.lineWidth = 2.5, b.beginPath();
        for (let $e = 0; $e <= 100; $e++) {
          const fe = $e / 100, re = X + fe * H, ne = j + Z / 2 - J.fn(fe) * (Z / 2 * 0.85);
          $e === 0 ? b.moveTo(re, ne) : b.lineTo(re, ne);
        }
        b.stroke();
      }
      let T = X + H - 90;
      for (const J of he) b.fillStyle = J.color, b.font = "bold 10px sans-serif", b.fillText(J.label, T, j + Z - 6), T += 36;
      b.fillStyle = "#666", b.font = "9px monospace", b.fillText("0", X, j + Z + 12), b.fillText("1", X + H - 6, j + Z + 12), b.fillText("\u03BE", X + H / 2, j + Z + 12);
    };
    V(X, "Axial (lineal)", [
      {
        fn: (j) => 1 - j,
        color: "#ff6600",
        label: "N\u2081"
      },
      {
        fn: (j) => j,
        color: "#00ccff",
        label: "N\u2082"
      }
    ]), V(X + Z + X, "Flexi\xF3n (Hermite c\xFAbicos)", [
      {
        fn: (j) => 1 - 3 * j * j + 2 * j * j * j,
        color: "#ff6600",
        label: "H\u2081"
      },
      {
        fn: (j) => j * (1 - j) * (1 - j),
        color: "#ffcc00",
        label: "H\u2082"
      },
      {
        fn: (j) => 3 * j * j - 2 * j * j * j,
        color: "#00ccff",
        label: "H\u2083"
      },
      {
        fn: (j) => j * j * (j - 1),
        color: "#00ff66",
        label: "H\u2084"
      }
    ]);
  }
  const Gl = `<style>
  .er-panel {
    position: fixed; right: 0; top: 0; width: 560px; height: 100vh;
    background: var(--fem-bg, #111); color: var(--fem-text, #ddd);
    overflow-y: auto; z-index: 9999990; padding: 12px 16px;
    box-sizing: border-box; border-left: 3px solid var(--fem-accent, #0f3460);
    font-family: 'Segoe UI', sans-serif; font-size: 12px; line-height: 1.5;
    box-shadow: -4px 0 20px rgba(0,0,0,0.5);
  }
  .er-header { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; flex-wrap: wrap; }
  .er-badge { background: var(--fem-section-title, #e94560); color: #fff; padding: 2px 10px; border-radius: 12px; font-weight: bold; font-size: 13px; }
  .er-type { color: var(--fem-label, #888); font-size: 12px; }
  .er-fullscreen { background: transparent; border: 1px solid var(--fem-border, #333); color: var(--fem-text, #ddd); padding: 2px 8px; border-radius: 4px; cursor: pointer; font-size: 16px; margin-left: auto; }
  .er-fullscreen:hover { background: var(--fem-btn-hover, #222); }
  .er-close { background: transparent; border: 1px solid var(--fem-border, #333); color: var(--fem-text, #ddd); padding: 2px 8px; border-radius: 4px; cursor: pointer; font-size: 14px; }
  .er-close:hover { background: var(--fem-btn-hover, #222); }

  /* Fullscreen mode */
  .er-panel.er-fullscreen-mode {
    width: 100vw !important; left: 0 !important; right: 0 !important;
    max-width: none !important; border-left: none !important;
    padding: 20px 40px !important;
  }
  .er-panel.er-fullscreen-mode .er-matrix td { min-width: 65px; font-size: 10px; }
  .er-panel.er-fullscreen-mode .er-eq { font-size: 14px; }
  .er-panel.er-fullscreen-mode .katex { font-size: 1.1em; }

  .er-tabs { display: flex; gap: 0; margin-bottom: 10px; border-bottom: 2px solid var(--fem-border, #333); }
  .er-tab { background: transparent; border: none; color: var(--fem-label, #888); padding: 6px 16px; cursor: pointer; font-size: 12px; font-weight: bold; border-bottom: 2px solid transparent; margin-bottom: -2px; }
  .er-tab.active { color: var(--fem-section-title, #e94560); border-bottom-color: var(--fem-section-title, #e94560); }
  .er-tab:hover { color: var(--fem-text, #ddd); }

  .er-body { padding: 4px 0; }
  .er-section-title { color: var(--fem-section-title, #e94560); font-weight: bold; font-size: 13px; margin: 14px 0 6px 0; border-bottom: 1px solid var(--fem-border, #333); padding-bottom: 3px; }
  .er-subsec { color: var(--fem-label, #aaa); font-weight: bold; font-size: 11px; margin: 10px 0 4px 0; }
  .er-sub { color: var(--fem-label, #888); font-size: 11px; margin: 2px 0; }
  .er-sub .nz { color: var(--fem-nonzero, #7bed9f); font-weight: bold; }

  .er-eq { background: var(--fem-section-bg, #1a1a2e); border-left: 3px solid var(--fem-accent, #0f3460); padding: 6px 12px; margin: 6px 0; font-family: serif; font-size: 13px; color: var(--fem-eq-var, #58a6ff); }
  .er-eq-main { border-left: 4px solid var(--fem-section-title, #e94560); font-weight: bold; font-size: 14px; }
  .er-eq-num { background: var(--fem-section-bg, #16213e); border-left: 2px solid var(--fem-border, #444); padding: 6px 12px; margin: 4px 0; font-family: monospace; font-size: 11px; color: var(--fem-text, #ccc); line-height: 180%; }
  .er-eq-table { border-collapse: collapse; margin: 4px 0; font-size: 12px; }
  .er-eq-table td { padding: 2px 10px; vertical-align: top; }
  .er-eq-table .fn-name { color: var(--fem-eq-var, #58a6ff); font-weight: bold; font-family: serif; }
  .er-eq-table .fn-desc { color: var(--fem-label, #888); font-style: italic; font-size: 10px; }

  .er-coeff { border-collapse: collapse; margin: 6px 0; font-family: monospace; font-size: 11px; }
  .er-coeff td { padding: 3px 8px; border-bottom: 1px solid var(--fem-border, #222); }
  .er-coeff b { color: var(--fem-nonzero, #7bed9f); }

  .er-props { border-collapse: collapse; margin: 4px 0; font-size: 12px; }
  .er-props td { padding: 2px 12px 2px 0; }
  .er-props td:nth-child(even) { color: var(--fem-eq-var, #58a6ff); font-weight: bold; }

  .er-forces { border-collapse: collapse; margin: 4px 0; font-family: monospace; font-size: 11px; }
  .er-forces th { background: var(--fem-header-bg, #1a1a2e); color: var(--fem-section-title, #e94560); padding: 3px 8px; border: 1px solid var(--fem-border, #333); text-align: center; font-size: 10px; }
  .er-forces td { padding: 3px 8px; border: 1px solid var(--fem-border, #333); text-align: right; }
  .er-forces .nz { color: var(--fem-nonzero, #7bed9f); font-weight: bold; }

  .er-matrix { border-collapse: collapse; font-family: monospace; font-size: 9px; margin: 4px 0; }
  .er-matrix td { padding: 2px 5px; text-align: right; border: 1px solid var(--fem-border-cell, #222); min-width: 50px; white-space: nowrap; }
  .er-matrix td.z { color: var(--fem-eq-dots, #444); }
  .er-matrix td.diag { background: var(--fem-diag-bg, #0a1a30); color: var(--fem-eq-var, #58a6ff); font-weight: bold; }

  .er-panel p { margin: 4px 0; color: var(--fem-text, #bbb); font-size: 11px; }

  /* Derivation blocks (expandible) */
  .er-deriv-block { margin: 6px 0; border: 1px solid var(--fem-border, #333); border-radius: 4px; overflow: hidden; }
  .er-deriv-header { padding: 6px 10px; cursor: pointer; color: var(--fem-eq-var, #58a6ff); font-size: 12px; background: var(--fem-section-bg, #161b22); }
  .er-deriv-header:hover { background: var(--fem-diag-bg, #0a2a4a); }
  .er-deriv-header i { color: var(--fem-label, #666); font-size: 10px; }
  .er-deriv-body { padding: 8px 12px; background: var(--fem-bg, #0d1117); border-top: 1px solid var(--fem-border, #333); }

  .er-panel::-webkit-scrollbar { width: 6px; }
  .er-panel::-webkit-scrollbar-track { background: var(--fem-bg, #111); }
  .er-panel::-webkit-scrollbar-thumb { background: var(--fem-accent, #0f3460); border-radius: 3px; }
</style>`, gn = [
    {
      selector: "#cad3d-panel",
      title: "FEM Studio",
      description: "Panel principal. Aqui controlas todo: ejemplos, vistas, herramientas de analisis.",
      position: "right"
    },
    {
      selector: '[data-ex="edificio"]',
      title: "Ejemplos Predefinidos",
      description: "Haz click en cualquier boton para cargar una estructura: Cercha, Portico, Torre, Edificio, etc.",
      position: "right"
    },
    {
      selector: '[data-view="3d"]',
      title: "Vistas",
      description: "Cambia entre vista 3D, Planta (Plan), Elevacion X (EX), Elevacion Y (EY).",
      position: "bottom"
    },
    {
      selector: "#cad3d-select",
      title: "Select (Seleccionar)",
      description: "Activa el modo seleccion. Haz click en elementos del modelo 3D para seleccionarlos. Ctrl+click para seleccion multiple.",
      position: "bottom"
    },
    {
      selector: "#cad3d-draw",
      title: "Draw (Dibujar)",
      description: "Dibuja nuevos elementos: lineas, arcos, nodos. Usa snap a grilla, nodos y puntos medios.",
      position: "bottom"
    },
    {
      selector: "#cad3d-inspect",
      title: "Inspect (Inspeccionar)",
      description: "Haz click en un elemento para ver su reporte FEM completo: 3 pestanas (Tabla, Matematica Explicada, Resumen) con funciones de forma, K local, transformacion T, fuerzas internas.",
      position: "bottom"
    },
    {
      selector: "#cad3d-export",
      title: "Export",
      description: "Exporta coordenadas, propiedades y resultados del modelo en formato texto/JSON.",
      position: "bottom"
    },
    {
      selector: '[data-preset="MKS"]',
      title: "Sistema de Unidades",
      description: "MKS (tonf, m), SI (kN, m), US (kip, in). Cambia las unidades de todo el modelo.",
      position: "bottom"
    },
    {
      selector: "#cad3d-modal",
      title: "Modal (Analisis Modal)",
      description: "Calcula frecuencias naturales, modos de vibracion y participacion de masa. Anima los modos con flechas de navegacion.",
      position: "bottom"
    },
    {
      selector: "#cad3d-fem-solver",
      title: "Report Explained",
      description: "Genera un reporte academico completo tipo libro de texto: funciones de forma, matrices B, D, K, transformacion, ensamblaje y solucion paso a paso.",
      position: "bottom"
    },
    {
      selector: "#cad3d-pushover",
      title: "Pushover",
      description: "Analisis pushover ciclico con histeresis. Visualiza curvas fuerza-desplazamiento.",
      position: "bottom"
    },
    {
      selector: "#cad3d-nonlinear",
      title: "Nonlinear",
      description: "Analisis no-lineal dinamico con material Steel02 (Menegotto-Pinto). Para BRBs y elementos con comportamiento histeretico.",
      position: "bottom"
    },
    {
      selector: "#cad3d-cmd",
      title: "Linea de Comandos",
      description: "Escribe comandos directamente: cad.galpon(12,20,6,3), cad.edificio(3,3,3,3), cad.help() para ver todos los comandos.",
      position: "top"
    },
    {
      selector: ".tp-dfwv",
      title: "Settings (Configuracion)",
      description: "Controla la visualizacion: nodos, elementos, secciones, resultados de analisis, forma deformada, colores de esfuerzos.",
      position: "left"
    }
  ];
  let On = false, Go = null, bo = null, Yt = null, Ot = null;
  function Yl() {
    Ot = document.createElement("button"), Ot.id = "help-tour-btn", Ot.innerHTML = "?", Ot.title = "Ayuda interactiva \u2014 Tour guiado";
    let e = false;
    const b = (M) => {
      Ot.style.cssText = M ? "width:20px;height:20px;border-radius:50%;background:#555;color:#aaa;border:1px solid #777;font-size:10px;cursor:pointer;opacity:0.5;transition:all 0.2s;" : "width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:2px solid rgba(255,255,255,0.3);font-size:18px;font-weight:bold;cursor:pointer;box-shadow:0 2px 10px rgba(0,102,204,0.3);transition:all 0.2s;font-family:'Arial Nova',sans-serif;";
    };
    b(false), Ot.addEventListener("contextmenu", (M) => {
      M.preventDefault(), e = !e, b(e), Ot.innerHTML = "?";
    }), Ot.addEventListener("mouseenter", () => {
      Ot.style.transform = "scale(1.15)", Ot.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), Ot.addEventListener("mouseleave", () => {
      Ot.style.transform = "scale(1)", Ot.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), Ot.addEventListener("click", () => {
      On ? vs() : Jl();
    });
    const O = document.createElement("style");
    return O.textContent = `
    @keyframes helpPulse {
      0%, 100% { box-shadow: 0 4px 15px rgba(0,102,204,0.4); }
      50% { box-shadow: 0 4px 25px rgba(0,102,204,0.7), 0 0 0 8px rgba(0,102,204,0.1); }
    }
    @keyframes spotlightPulse {
      0%, 100% { box-shadow: 0 0 0 4px rgba(0,153,255,0.6), 0 0 0 9999px rgba(0,0,0,0.65); }
      50% { box-shadow: 0 0 0 8px rgba(0,153,255,0.3), 0 0 0 9999px rgba(0,0,0,0.65); }
    }
    @keyframes tooltipSlideIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes handPoint {
      0%, 100% { transform: translate(0, 0) rotate(-15deg); }
      50% { transform: translate(-5px, -8px) rotate(-15deg); }
    }
    .tour-hand {
      display: inline-block;
      font-size: 28px;
      animation: handPoint 1s ease-in-out infinite;
      margin-right: 6px;
    }
  `, document.head.appendChild(O), Ot;
  }
  function Jl() {
    On = true, Ot && (Ot.innerHTML = "\u2715", Ot.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", Ot.style.animation = "none"), Go = document.createElement("div"), Go.id = "tour-overlay", Go.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(Go), sn(0);
  }
  function vs() {
    On = false, Ot && (Ot.innerHTML = "?", Ot.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", Ot.style.animation = "helpPulse 2s infinite"), bo && (bo.remove(), bo = null), Yt && (Yt.remove(), Yt = null), Go && (Go.remove(), Go = null);
  }
  function sn(e) {
    var _a, _b;
    if (e >= gn.length) {
      Vl();
      return;
    }
    const b = gn[e], O = document.querySelector(b.selector);
    if (!O) {
      sn(e + 1);
      return;
    }
    O.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), bo && bo.remove(), Yt && Yt.remove();
    const M = O.getBoundingClientRect(), X = window.innerWidth, H = window.innerHeight, Z = 320, V = 180;
    bo = document.createElement("div"), bo.style.cssText = `
    position: fixed;
    left: ${M.left - 6}px; top: ${M.top - 6}px;
    width: ${M.width + 12}px; height: ${M.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(bo);
    const j = X - M.right, W = M.left, he = H - M.bottom, T = M.top;
    let J = b.position || "bottom";
    J === "bottom" && he < V + 20 && (J = "top"), J === "top" && T < V + 20 && (J = "right"), J === "right" && j < Z + 20 && (J = "left"), J === "left" && W < Z + 20 && (J = "bottom");
    let $e, fe, re = "";
    switch (J) {
      case "bottom":
        $e = M.left + M.width / 2 - Z / 2, fe = M.bottom + 14, re = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        $e = M.left + M.width / 2 - Z / 2, fe = M.top - V - 14, re = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        $e = M.right + 14, fe = M.top + M.height / 2 - V / 2, re = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        $e = M.left - Z - 14, fe = M.top + M.height / 2 - V / 2, re = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    $e = Math.max(10, Math.min($e, X - Z - 10)), fe = Math.max(10, Math.min(fe, H - V - 10)), Yt = document.createElement("div"), Yt.style.cssText = `
    position: fixed;
    left: ${$e}px; top: ${fe}px;
    width: ${Z}px;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    color: #e0e0e0;
    border: 2px solid #0099ff;
    border-radius: 12px;
    padding: 16px 18px;
    z-index: 9999992;
    pointer-events: auto;
    animation: tooltipSlideIn 0.3s ease-out;
    box-shadow: 0 8px 30px rgba(0,0,0,0.5);
    font-family: 'Segoe UI', sans-serif;
  `, Yt.innerHTML = `
    <div style="${re}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${b.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${gn.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${b.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < gn.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${gn.map((D, B) => `<div style="width:${B === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${B === e ? "#0099ff" : B < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Yt), (_a = Yt.querySelector("#tour-next")) == null ? void 0 : _a.addEventListener("click", () => {
      sn(e + 1);
    }), (_b = Yt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      sn(e - 1);
    });
    const ne = (D) => {
      if (!On) {
        document.removeEventListener("keydown", ne);
        return;
      }
      (D.key === "ArrowRight" || D.key === "Enter") && (sn(e + 1), document.removeEventListener("keydown", ne)), D.key === "ArrowLeft" && (sn(Math.max(0, e - 1)), document.removeEventListener("keydown", ne)), D.key === "Escape" && (vs(), document.removeEventListener("keydown", ne));
    };
    document.addEventListener("keydown", ne);
  }
  function Vl() {
    var _a;
    bo && (bo.remove(), bo = null), Yt && (Yt.remove(), Yt = null), Yt = document.createElement("div"), Yt.style.cssText = `
    position: fixed;
    left: 50%; top: 50%; transform: translate(-50%, -50%);
    width: 400px;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    color: #e0e0e0;
    border: 2px solid #00cc66;
    border-radius: 16px;
    padding: 30px;
    z-index: 9999992;
    pointer-events: auto;
    animation: tooltipSlideIn 0.3s ease-out;
    box-shadow: 0 8px 40px rgba(0,0,0,0.6);
    font-family: 'Segoe UI', sans-serif;
    text-align: center;
  `, Yt.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(Yt), (_a = Yt.querySelector("#tour-done")) == null ? void 0 : _a.addEventListener("click", () => vs());
  }
  function Xl(e) {
    var _a;
    const b = e.split(/\r?\n/), O = {
      force: "TONF",
      length: "M"
    }, M = [], X = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), V = [], j = [], W = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), T = [], J = [];
    let $e = "", fe = "";
    const re = /* @__PURE__ */ new Map();
    for (const Pe of b) {
      const De = Pe.trim();
      if (!De || De.startsWith("$")) {
        De.startsWith("$ ") && (fe = De.substring(2).trim());
        continue;
      }
      if (fe && (re.has(fe) || re.set(fe, []), re.get(fe).push(Pe)), fe === "CONTROLS") {
        const xe = De.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        xe && (O.force = xe[1], O.length = xe[2]);
        const Fe = De.match(/TITLE2\s+"([^"]+)"/);
        Fe && ($e = Fe[1]);
      }
      if (fe === "STORIES - IN SEQUENCE FROM TOP") {
        const xe = De.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (xe) {
          const Fe = xe[1], ve = xe[2] ? parseFloat(xe[2]) : 0, ze = xe[3] ? parseFloat(xe[3]) : void 0;
          M.push({
            name: Fe,
            height: ve,
            elev: ze ?? 0
          });
        }
      }
      if (fe === "MATERIAL PROPERTIES") {
        const xe = De.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (xe) {
          const Fe = xe[1];
          X.has(Fe) || X.set(Fe, {
            type: xe[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const ve = X.get(Fe);
          xe[2] && (ve.type = xe[2]);
          const ze = De.match(/\bE\s+([\d.eE+-]+)/);
          ze && (ve.E = parseFloat(ze[1]));
          const Ve = De.match(/\bU\s+([\d.eE+-]+)/);
          Ve && (ve.nu = parseFloat(Ve[1]), ve.G = ve.E / (2 * (1 + ve.nu)));
          const He = De.match(/\bFY\s+([\d.eE+-]+)/);
          He && (ve.fy = parseFloat(He[1]));
          const ft = De.match(/\bFC\s+([\d.eE+-]+)/);
          ft && (ve.fc = parseFloat(ft[1]));
          const ht = De.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          ht && (ve.density = parseFloat(ht[1]));
        }
      }
      if (fe === "FRAME SECTIONS") {
        const xe = De.match(/FRAMESECTION\s+"([^"]+)"/);
        if (xe) {
          const Fe = xe[1];
          H.has(Fe) || H.set(Fe, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const ve = H.get(Fe), ze = De.match(/MATERIAL\s+"([^"]+)"/);
          ze && (ve.material = ze[1]);
          const Ve = De.match(/SHAPE\s+"([^"]+)"/);
          Ve && (ve.shape = Ve[1]);
          const He = De.match(/\bD\s+([\d.eE+-]+)/);
          He && (ve.D = parseFloat(He[1]));
          const ft = De.match(/\bB\s+([\d.eE+-]+)/);
          ft && (ve.B = parseFloat(ft[1]));
          const ht = De.match(/\bTF\s+([\d.eE+-]+)/);
          ht && (ve.TF = parseFloat(ht[1]));
          const Je = De.match(/\bTW\s+([\d.eE+-]+)/);
          Je && (ve.TW = parseFloat(Je[1]));
          const Qe = De.match(/\bR\s+([\d.eE+-]+)/);
          Qe && (ve.R = parseFloat(Qe[1]));
          const mt = De.match(/FILLMATERIAL\s+"([^"]+)"/);
          mt && (ve.fillMaterial = mt[1]);
          const pt = De.match(/I2MOD\s+([\d.eE+-]+)/);
          pt && (ve.modI2 = parseFloat(pt[1]));
          const xt = De.match(/I3MOD\s+([\d.eE+-]+)/);
          xt && (ve.modI3 = parseFloat(xt[1]));
        }
      }
      if (fe === "POINT COORDINATES") {
        const xe = De.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        xe && Z.set(xe[1], [
          parseFloat(xe[2]),
          parseFloat(xe[3])
        ]);
      }
      if (fe === "LINE CONNECTIVITIES") {
        const xe = De.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        xe && V.push({
          name: xe[1],
          type: xe[2],
          pt1: xe[3],
          pt2: xe[4],
          nStories: parseInt(xe[5])
        });
      }
      if (fe === "POINT ASSIGNS") {
        const xe = De.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        xe && W.set(`${xe[1]}@${xe[2]}`, xe[3].split(/\s+/));
      }
      if (fe === "LINE ASSIGNS") {
        const xe = De.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (xe) {
          const Fe = {
            story: xe[2],
            section: xe[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, ve = De.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          ve && (Fe.rigidZone = parseFloat(ve[1]));
          const ze = De.match(/RELEASE\s+"([^"]+)"/);
          ze && (Fe.releases = ze[1].split(/\s+/));
          const Ve = De.match(/ANG\s+([-\d.eE+]+)/);
          Ve && (Fe.angle = parseFloat(Ve[1])), he.set(`${xe[1]}@${xe[2]}`, Fe);
        }
      }
      if (fe === "GRIDS") {
        const xe = De.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        xe && J.push({
          label: xe[1],
          dir: xe[2],
          coord: parseFloat(xe[3])
        });
      }
      if (fe === "FRAME OBJECT LOADS") {
        const xe = De.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        xe && T.push({
          line: xe[1],
          story: xe[2],
          type: xe[3],
          dir: xe[4],
          lc: xe[5],
          val: parseFloat(xe[6])
        });
      }
      if (fe === "AREA CONNECTIVITIES") {
        const xe = De.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (xe) {
          const Fe = ((_a = xe[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((ve) => ve.replace(/"/g, ""))) || [];
          j.push({
            name: xe[1],
            pts: Fe,
            nStories: 0
          });
        }
      }
    }
    const ne = /* @__PURE__ */ new Map();
    if (M.length > 0) {
      const Pe = M.length - 1;
      ne.set(M[Pe].name, M[Pe].elev);
      for (let De = Pe - 1; De >= 0; De--) {
        const Fe = ne.get(M[De + 1].name) + M[De].height;
        M[De].elev = Fe, ne.set(M[De].name, Fe);
      }
    }
    const D = [], B = [], Y = /* @__PURE__ */ new Map(), ue = (Pe, De) => `${Pe}@${De}`, Me = /* @__PURE__ */ new Set(), Ae = /* @__PURE__ */ new Map();
    for (const Pe of V) Ae.set(Pe.name, Pe);
    for (const Pe of V) for (const [De, xe] of he) {
      if (!De.startsWith(Pe.name + "@")) continue;
      const Fe = xe.story, ve = M.findIndex((ze) => ze.name === Fe);
      if (!(ve < 0)) if (Pe.type === "COLUMN" || Pe.type === "BRACE") {
        Me.add(ue(Pe.pt2, Fe));
        const ze = Math.max(Pe.nStories, 1), Ve = Math.min(ve + ze, M.length - 1);
        Me.add(ue(Pe.pt1, M[Ve].name));
      } else Me.add(ue(Pe.pt1, Fe)), Me.add(ue(Pe.pt2, Fe));
    }
    for (const [Pe] of W) Me.add(Pe);
    for (const Pe of Me) {
      const [De, xe] = Pe.split("@"), Fe = Z.get(De), ve = ne.get(xe);
      Fe === void 0 || ve === void 0 || (D.push([
        Fe[0],
        Fe[1],
        ve
      ]), B.push(Pe), Y.set(Pe, D.length - 1));
    }
    const Ke = [], ye = [], Ge = [], Ye = [], be = /* @__PURE__ */ new Map();
    for (const Pe of V) for (const [De, xe] of he) {
      if (!De.startsWith(Pe.name + "@")) continue;
      const Fe = xe.story, ve = M.findIndex((Je) => Je.name === Fe);
      if (ve < 0) continue;
      let ze, Ve;
      if (Pe.type === "COLUMN" || Pe.type === "BRACE") {
        const Je = Math.max(Pe.nStories, 1), Qe = Math.min(ve + Je, M.length - 1);
        ze = ue(Pe.pt1, M[Qe].name), Ve = ue(Pe.pt2, Fe);
      } else ze = ue(Pe.pt1, Fe), Ve = ue(Pe.pt2, Fe);
      const He = Y.get(ze), ft = Y.get(Ve);
      if (He === void 0 || ft === void 0 || He === ft) continue;
      const ht = Ke.length;
      if (Ke.push([
        He,
        ft
      ]), ye.push(Pe.name), Ge.push(Pe.type), Ye.push(Fe), be.set(ht, xe.section), xe.rigidZone > 0 && dt.set(ht, [
        xe.rigidZone,
        xe.rigidZone
      ]), xe.releases.length > 0) {
        const Je = new Array(12).fill(false), Qe = {
          PI: 0,
          V2I: 1,
          V3I: 2,
          TI: 3,
          M2I: 4,
          M3I: 5,
          PJ: 6,
          V2J: 7,
          V3J: 8,
          TJ: 9,
          M2J: 10,
          M3J: 11
        };
        for (const mt of xe.releases) {
          const pt = Qe[mt];
          pt !== void 0 && (Je[pt] = true);
        }
        ut.set(ht, Je);
      }
    }
    const Te = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), Ze = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map();
    for (const [Pe, De] of be) {
      const xe = H.get(De);
      if (!xe) continue;
      const Fe = X.get(xe.material);
      Fe && (Te.set(Pe, Fe.E), Ce.set(Pe, Fe.G));
      const ve = xe.D, ze = xe.B, Ve = xe.TF, He = xe.TW;
      let ft = 0, ht = 0, Je = 0, Qe = 0, mt = 0, pt = 0, xt = "rect";
      switch (xe.shape) {
        case "Concrete Rectangular":
          ft = ve * ze, ht = ze * ve ** 3 / 12, Je = ve * ze ** 3 / 12, Qe = ze * ve ** 3 * (1 / 3 - 0.21 * (ve / ze) * (1 - ve ** 4 / (12 * ze ** 4))), mt = pt = 5 / 6 * ft, xt = "rect";
          break;
        case "Concrete Circle":
          ft = Math.PI * ve ** 2 / 4, ht = Je = Math.PI * ve ** 4 / 64, Qe = Math.PI * ve ** 4 / 32, mt = pt = 0.9 * ft, xt = "circ";
          break;
        case "Steel I/Wide Flange":
          ft = 2 * ze * Ve + (ve - 2 * Ve) * He, ht = (ze * ve ** 3 - (ze - He) * (ve - 2 * Ve) ** 3) / 12, Je = (2 * Ve * ze ** 3 + (ve - 2 * Ve) * He ** 3) / 12, Qe = (2 * ze * Ve ** 3 + (ve - 2 * Ve) * He ** 3) / 3, mt = (ve - 2 * Ve) * He, pt = 2 * ze * Ve * 5 / 6, xt = "I";
          break;
        case "Steel Tube":
          ft = ve * ze - (ve - 2 * He) * (ze - 2 * He), ht = (ze * ve ** 3 - (ze - 2 * He) * (ve - 2 * He) ** 3) / 12, Je = (ve * ze ** 3 - (ve - 2 * He) * (ze - 2 * He) ** 3) / 12, Qe = 2 * He * (ve - He) * (ze - He) * ((ve - He) * (ze - He)) / (ve - He + (ze - He)), mt = 2 * ve * He, pt = 2 * ze * He, xt = "HSS";
          break;
        case "Filled Steel Tube":
          ft = ve * ze, ht = ze * ve ** 3 / 12, Je = ve * ze ** 3 / 12, Qe = 2 * He * (ve - He) * (ze - He) * ((ve - He) * (ze - He)) / (ve - He + (ze - He)), mt = 2 * ve * He + 5 / 6 * (ve - 2 * He) * (ze - 2 * He), pt = 2 * ze * He + 5 / 6 * (ve - 2 * He) * (ze - 2 * He), xt = "CFT";
          break;
        case "Steel Angle": {
          const Jt = Ve || He;
          ft = Jt * (ve + ze - Jt), ht = Jt * (ve ** 3 + ze * Jt ** 2 + Jt ** 2 * (ve - Jt)) / 12, Je = Jt * (ze ** 3 + ve * Jt ** 2 + Jt ** 2 * (ze - Jt)) / 12, Qe = (ve + ze - Jt) * Jt ** 3 / 3, mt = ve * Jt, pt = ze * Jt, xt = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          ft = 2 * ze * Ve + (ve - 2 * Ve) * He, ht = (He * ve ** 3 + 2 * ze * Ve * (ve - Ve) ** 2) / 12, Je = (2 * Ve * ze ** 3 + (ve - 2 * Ve) * He ** 3) / 12, Qe = (2 * ze * Ve ** 3 + (ve - 2 * Ve) * He ** 3) / 3, mt = (ve - 2 * Ve) * He, pt = 2 * ze * Ve * 5 / 6, xt = xe.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          ft = 2 * (2 * ze * Ve + (ve - 2 * Ve) * He), ht = 2 * (He * ve ** 3 + 2 * ze * Ve * (ve - Ve) ** 2) / 12, Je = 2 * (2 * Ve * ze ** 3 + (ve - 2 * Ve) * He ** 3) / 12, Qe = 2 * (2 * ze * Ve ** 3 + (ve - 2 * Ve) * He ** 3) / 3, mt = 2 * (ve - 2 * Ve) * He, pt = 4 * ze * Ve * 5 / 6, xt = "2C";
          break;
        default:
          ve > 0 && ze > 0 && (ft = ve * ze, ht = ze * ve ** 3 / 12, Je = ve * ze ** 3 / 12, Qe = Math.min(ve, ze) * Math.max(ve, ze) ** 3 / 3 * 0.3, mt = pt = 5 / 6 * ft);
          break;
      }
      xe.modI2 && (Je *= xe.modI2), xe.modI3 && (ht *= xe.modI3), Ue.set(Pe, ft), Tt.set(Pe, ht), Nt.set(Pe, Je), Bt.set(Pe, Qe), mt > 0 && ct.set(Pe, mt), pt > 0 && Ze.set(Pe, pt), Mt.set(Pe, {
        type: xt,
        b: ze || void 0,
        h: ve || void 0,
        d: xt === "circ" || xt === "pipe" ? ve : void 0,
        tw: He || void 0,
        tf: Ve || void 0,
        r: xe.R,
        name: De
      });
    }
    const bt = /* @__PURE__ */ new Map();
    for (const [Pe, De] of W) {
      const xe = Y.get(Pe);
      if (xe === void 0) continue;
      const Fe = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const ve of De) ve === "UX" && (Fe[0] = true), ve === "UY" && (Fe[1] = true), ve === "UZ" && (Fe[2] = true), ve === "RX" && (Fe[3] = true), ve === "RY" && (Fe[4] = true), ve === "RZ" && (Fe[5] = true);
      bt.set(xe, Fe);
    }
    const ho = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map();
    for (let Pe = 0; Pe < ye.length; Pe++) _e.set(`${ye[Pe]}@${Ye[Pe]}`, Pe);
    for (const Pe of T) {
      const De = _e.get(`${Pe.line}@${Pe.story}`);
      if (De === void 0) continue;
      const [xe, Fe] = Ke[De], ve = D[xe], ze = D[Fe], Ve = Math.sqrt((ze[0] - ve[0]) ** 2 + (ze[1] - ve[1]) ** 2 + (ze[2] - ve[2]) ** 2);
      if (Ve < 1e-10) continue;
      const He = Pe.val * Ve / 2;
      let ft = 0, ht = 0, Je = 0;
      Pe.dir === "GRAV" || Pe.dir === "GRAVITY" ? Je = -He : Pe.dir === "X" ? ft = He : Pe.dir === "Y" ? ht = He : Pe.dir === "Z" && (Je = -He);
      for (const Qe of [
        xe,
        Fe
      ]) {
        const mt = ho.get(Qe) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        mt[0] += ft, mt[1] += ht, mt[2] += Je, ho.set(Qe, mt);
      }
    }
    const St = /* @__PURE__ */ new Map();
    for (const [Pe, De] of be) {
      const xe = H.get(De);
      if (!xe) continue;
      const Fe = X.get(xe.material);
      (Fe == null ? void 0 : Fe.density) && St.set(Pe, Fe.density);
    }
    return {
      units: O,
      stories: M.reverse(),
      materials: X,
      frameSections: H,
      nodes: D,
      nodeNames: B,
      nodeNameToIdx: Y,
      elements: Ke,
      elementNames: ye,
      elementTypes: Ge,
      elementStories: Ye,
      elementSections: be,
      nodeInputs: {
        supports: bt,
        loads: ho
      },
      elementInputs: {
        elasticities: Te,
        shearModuli: Ce,
        areas: Ue,
        momentsOfInertiaZ: Tt,
        momentsOfInertiaY: Nt,
        torsionalConstants: Bt,
        shearAreasY: ct,
        shearAreasZ: Ze,
        rigidOffsets: dt,
        momentReleases: ut,
        densities: St,
        sectionShapes: Mt
      },
      sectionShapes: Mt,
      grids: J,
      info: {
        nNodes: D.length,
        nFrames: Ke.length,
        nAreas: j.length,
        title: $e
      },
      rawSections: re
    };
  }
  function it(e) {
    return e && parseFloat(e) || 0;
  }
  function za(e) {
    const b = /* @__PURE__ */ new Map(), O = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
    let M;
    for (; (M = O.exec(e)) !== null; ) b.set(M[1], M[2] !== void 0 ? M[2] : M[3]);
    return b;
  }
  function Ul(e) {
    const b = e.split(/\r?\n/);
    return b.some((M) => M.trim().startsWith("TABLE:")) ? Kl(b) : Zl(b);
  }
  function Kl(e) {
    var _a, _b, _c, _d, _e, _f;
    const b = [];
    let O = "";
    for (const ne of e) {
      const D = ne.trimEnd();
      D.endsWith("_") ? O += D.slice(0, -1) + " " : (O += D, b.push(O), O = "");
    }
    O && b.push(O);
    const M = {
      force: "KN",
      length: "m"
    };
    let X = "UX,UY,UZ,RX,RY,RZ";
    const H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), W = [], he = [], T = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map(), fe = [];
    let re = "";
    for (const ne of b) {
      const D = ne.trim();
      if (!D || D.startsWith(";") || D.startsWith("File ")) continue;
      if (D.startsWith("TABLE:")) {
        const Y = D.match(/TABLE:\s+"(.+?)"/);
        re = Y ? Y[1].toUpperCase() : "";
        continue;
      }
      if (D === "END TABLE DATA") {
        re = "";
        continue;
      }
      const B = za(D);
      switch (re) {
        case "PROGRAM CONTROL": {
          const Y = B.get("CurrUnits");
          if (Y) {
            const ue = Y.split(",").map((Me) => Me.trim());
            ue[0] && (M.force = ue[0]), ue[1] && (M.length = ue[1]);
          }
          break;
        }
        case "MATERIAL PROPERTIES 01 - GENERAL": {
          const Y = B.get("Material");
          Y && !H.has(Y) && H.set(Y, {
            E: 0,
            nu: 0,
            G: 0
          });
          break;
        }
        case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
          const Y = B.get("Material");
          if (Y) {
            const ue = H.get(Y) || {
              E: 0,
              nu: 0,
              G: 0
            };
            ue.E = it(B.get("E1")), ue.G = it(B.get("G12")), ue.nu = it(B.get("U12")), ue.density = it(B.get("UnitMass")), H.set(Y, ue);
          }
          break;
        }
        case "MATERIAL PROPERTIES 03A - STEEL DATA": {
          const Y = B.get("Material");
          Y && H.has(Y) && (H.get(Y).fy = it(B.get("Fy")));
          break;
        }
        case "FRAME SECTION PROPERTIES 01 - GENERAL": {
          const Y = B.get("SectionName");
          Y && Z.set(Y, {
            material: B.get("Material") || "",
            shape: B.get("Shape") || "Rectangular",
            D: it(B.get("t3")),
            B: it(B.get("t2")),
            TF: it(B.get("tf")),
            TW: it(B.get("tw")),
            A: it(B.get("Area")),
            Iz: it(B.get("I33")),
            Iy: it(B.get("I22")),
            J: it(B.get("TorsConst"))
          });
          break;
        }
        case "AREA SECTION PROPERTIES": {
          const Y = B.get("Section");
          Y && V.set(Y, {
            material: B.get("Material") || "",
            type: B.get("Type") || "Shell",
            thickness: it(B.get("Thickness"))
          });
          break;
        }
        case "JOINT COORDINATES": {
          const Y = B.get("Joint");
          if (Y) {
            const ue = it(B.get("XorR")), Me = it(B.get("Y")), Ae = it(B.get("Z"));
            j.set(Y, [
              ue,
              Me,
              Ae
            ]);
          }
          break;
        }
        case "CONNECTIVITY - FRAME": {
          const Y = B.get("Frame"), ue = B.get("JointI"), Me = B.get("JointJ");
          Y && ue && Me && W.push({
            name: Y,
            j1: ue,
            j2: Me
          });
          break;
        }
        case "CONNECTIVITY - AREA": {
          const Y = B.get("Area");
          if (Y) {
            const ue = parseInt(B.get("NumJoints") || "4"), Me = [];
            for (let Ae = 1; Ae <= ue; Ae++) {
              const Ke = B.get(`Joint${Ae}`);
              Ke && Me.push(Ke);
            }
            Me.length >= 3 && he.push({
              name: Y,
              joints: Me
            });
          }
          break;
        }
        case "JOINT RESTRAINT ASSIGNMENTS": {
          const Y = B.get("Joint");
          if (Y) {
            const ue = [
              ((_a = B.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes",
              ((_b = B.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes",
              ((_c = B.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes",
              ((_d = B.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes",
              ((_e = B.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes",
              ((_f = B.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"
            ];
            T.set(Y, ue);
          }
          break;
        }
        case "FRAME SECTION ASSIGNMENTS": {
          const Y = B.get("Frame"), ue = B.get("AnalSect");
          Y && ue && J.set(Y, ue);
          break;
        }
        case "AREA SECTION ASSIGNMENTS": {
          const Y = B.get("Area"), ue = B.get("Section");
          Y && ue && $e.set(Y, ue);
          break;
        }
        case "JOINT LOADS - FORCE": {
          const Y = B.get("Joint");
          Y && fe.push({
            joint: Y,
            fx: it(B.get("F1")),
            fy: it(B.get("F2")),
            fz: it(B.get("F3")),
            mx: it(B.get("M1")),
            my: it(B.get("M2")),
            mz: it(B.get("M3"))
          });
          break;
        }
      }
    }
    return Aa(M, X, H, Z, V, j, W, he, T, J, $e, fe);
  }
  function Zl(e) {
    const b = {
      force: "KN",
      length: "m"
    };
    let O = "UX,UY,UZ,RX,RY,RZ";
    const M = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), V = [], j = [], W = /* @__PURE__ */ new Map(), he = [];
    let T = "", J = "";
    for (const re of e) {
      const ne = re.trim();
      if (!ne || ne.startsWith(";")) continue;
      if (!re.startsWith(" ") && !re.startsWith("	")) {
        const Y = ne.toUpperCase();
        if (Y === "END") break;
        Y.startsWith("SHELL SECTION") ? T = "SHELL SECTION" : Y.startsWith("FRAME SECTION") ? T = "FRAME SECTION" : T = Y.split(/\s+/)[0];
        continue;
      }
      const D = za(ne), B = ne.split(/\s+/);
      switch (T) {
        case "SYSTEM": {
          const Y = D.get("DOF");
          Y && (O = Y);
          const ue = D.get("LENGTH");
          ue && (b.length = ue);
          const Me = D.get("FORCE");
          Me && (b.force = Me);
          break;
        }
        case "JOINT": {
          const Y = B[0];
          Z.set(Y, [
            it(D.get("X")),
            it(D.get("Y")),
            it(D.get("Z"))
          ]);
          break;
        }
        case "RESTRAINT": {
          const Y = D.get("ADD"), ue = D.get("DOF");
          if (Y && ue) {
            const Me = ue.split(","), Ae = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            for (const Ke of Me) {
              const ye = Ke.toUpperCase();
              (ye === "UX" || ye === "U1") && (Ae[0] = true), (ye === "UY" || ye === "U2") && (Ae[1] = true), (ye === "UZ" || ye === "U3") && (Ae[2] = true), (ye === "RX" || ye === "R1") && (Ae[3] = true), (ye === "RY" || ye === "R2") && (Ae[4] = true), (ye === "RZ" || ye === "R3") && (Ae[5] = true);
            }
            W.set(Y, Ae);
          }
          break;
        }
        case "MATERIAL": {
          const Y = D.get("NAME");
          if (Y) J = Y, M.set(Y, {
            E: 0,
            nu: 0,
            G: 0
          });
          else if (J) {
            const ue = M.get(J), Me = D.get("E");
            Me && (ue.E = it(Me));
            const Ae = D.get("U");
            Ae && (ue.nu = it(Ae)), ue.G = ue.E / (2 * (1 + ue.nu));
            const Ke = D.get("M");
            Ke && (ue.density = it(Ke));
          }
          break;
        }
        case "SHELL": {
          const Y = B[0], ue = D.get("J");
          D.get("SEC"), ue && j.push({
            name: Y,
            joints: ue.split(",")
          });
          break;
        }
        case "SHELL SECTION": {
          const Y = D.get("NAME");
          Y && H.set(Y, {
            material: D.get("MAT") || "",
            type: D.get("TYPE") || "Shell",
            thickness: it(D.get("TH"))
          });
          break;
        }
        case "FRAME": {
          const Y = B[0], ue = D.get("J");
          if (ue) {
            const Me = ue.split(",");
            Me.length >= 2 && V.push({
              name: Y,
              j1: Me[0],
              j2: Me[1]
            });
          }
          break;
        }
        case "LOAD": {
          const Y = D.get("ADD");
          Y && he.push({
            joint: Y,
            fx: it(D.get("UX")),
            fy: it(D.get("UY")),
            fz: it(D.get("UZ")),
            mx: it(D.get("MX")),
            my: it(D.get("MY")),
            mz: it(D.get("MZ"))
          });
          break;
        }
      }
    }
    return Aa(b, O, M, X, H, Z, V, j, W, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), he);
  }
  function Aa(e, b, O, M, X, H, Z, V, j, W, he, T) {
    var _a;
    const J = [], $e = /* @__PURE__ */ new Map(), fe = [];
    for (const [ye, Ge] of H) $e.set(ye, fe.length), J.push(ye), fe.push(Ge);
    const re = [], ne = [], D = /* @__PURE__ */ new Map();
    for (const ye of Z) {
      const Ge = $e.get(ye.j1), Ye = $e.get(ye.j2);
      if (Ge !== void 0 && Ye !== void 0) {
        const be = re.length;
        re.push([
          Ge,
          Ye
        ]), ne.push(ye.name);
        const Te = W.get(ye.name);
        Te && D.set(be, Te);
      }
    }
    const B = re.length;
    for (const ye of V) {
      const Ge = ye.joints.map((Ye) => $e.get(Ye)).filter((Ye) => Ye !== void 0);
      if (Ge.length >= 3) {
        const Ye = re.length;
        re.push(Ge), ne.push(ye.name);
        const be = he.get(ye.name);
        be && D.set(Ye, be);
      }
    }
    const Y = re.length - B, ue = {
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map(),
      thicknesses: /* @__PURE__ */ new Map(),
      poissonsRatios: /* @__PURE__ */ new Map()
    }, Me = /* @__PURE__ */ new Map(), Ae = O.values().next().value || {
      E: 29e3,
      nu: 0.3,
      G: 11153
    };
    for (let ye = 0; ye < re.length; ye++) {
      const Ge = D.get(ye), Ye = Ge ? M.get(Ge) : null, be = Ge ? X.get(Ge) : null;
      if (Ye || re[ye].length === 2) {
        const Te = Ye || {
          material: "",
          A: 0,
          Iz: 0,
          Iy: 0,
          J: 0,
          D: 0.3,
          B: 0.3,
          shape: "Rectangular"
        }, Ce = O.get(Te.material) || Ae, Ue = Ce.E || Ae.E, ct = Ce.nu || 0.3, Ze = Ce.G || Ue / (2 * (1 + ct));
        ue.elasticities.set(ye, Ue), ue.shearModuli.set(ye, Ze), ue.areas.set(ye, Te.A || Te.D * Te.B), ue.momentsOfInertiaZ.set(ye, Te.Iz || Te.B * Te.D ** 3 / 12), ue.momentsOfInertiaY.set(ye, Te.Iy || Te.D * Te.B ** 3 / 12), ue.torsionalConstants.set(ye, Te.J || 0), ue.densities.set(ye, Ce.density || 0), ((_a = Te.shape) == null ? void 0 : _a.includes("Wide Flange")) || Te.shape === "I" ? Me.set(ye, {
          type: "I",
          b: Te.B,
          h: Te.D,
          name: Ge || "I-section"
        }) : Me.set(ye, {
          type: "rect",
          b: Te.B,
          h: Te.D
        });
      } else if (be) {
        const Te = O.get(be.material) || Ae, Ce = Te.E || Ae.E, Ue = Te.nu || 0.2, ct = Te.G || Ce / (2 * (1 + Ue));
        ue.elasticities.set(ye, Ce), ue.shearModuli.set(ye, ct), ue.thicknesses.set(ye, be.thickness), ue.poissonsRatios.set(ye, Ue), ue.densities.set(ye, Te.density || 0);
      }
    }
    const Ke = {
      supports: /* @__PURE__ */ new Map(),
      forces: /* @__PURE__ */ new Map()
    };
    for (const [ye, Ge] of j) {
      const Ye = $e.get(ye);
      Ye !== void 0 && Ke.supports.set(Ye, Ge);
    }
    for (const ye of T) {
      const Ge = $e.get(ye.joint);
      if (Ge !== void 0) {
        const Ye = Ke.forces.get(Ge) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        Ye[0] += ye.fx, Ye[1] += ye.fy, Ye[2] += ye.fz, Ye[3] += ye.mx, Ye[4] += ye.my, Ye[5] += ye.mz, Ke.forces.set(Ge, Ye);
      }
    }
    return {
      units: e,
      dof: b,
      materials: O,
      frameSections: M,
      shellSections: X,
      nodes: fe,
      nodeNames: J,
      nodeNameToIdx: $e,
      elements: re,
      elementNames: ne,
      elementSections: D,
      nodeInputs: Ke,
      elementInputs: ue,
      sectionShapes: Me,
      info: {
        nNodes: fe.length,
        nFrames: B,
        nShells: Y,
        title: `SAP2000 (${B} frames, ${Y} shells)`
      }
    };
  }
  function Ql(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const { nodes: b, elements: O, nodeInputs: M, elementInputs: X } = e, H = e.units || {
      force: "KN",
      length: "m"
    }, Z = e.title || "Awatif Model", V = [], j = (D) => V.push(D), W = () => V.push(" ");
    j(`File ${Z}.$2k was saved on m/d/yy at h:mm:ss`), W(), j('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), j("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), W();
    const he = [], T = [];
    if (O.forEach((D, B) => {
      D.length === 2 ? he.push(B) : T.push(B);
    }), he.length > 0) {
      j('TABLE:  "CONNECTIVITY - FRAME"');
      for (const D of he) {
        const B = O[D];
        j(`   Frame=${D + 1}   JointI=${B[0] + 1}   JointJ=${B[1] + 1}   IsCurved=No`);
      }
      W();
    }
    if (T.length > 0) {
      j('TABLE:  "CONNECTIVITY - AREA"');
      for (const D of T) {
        const B = O[D], Y = B.map((ue, Me) => `Joint${Me + 1}=${ue + 1}`).join("   ");
        j(`   Area=${D + 1}   NumJoints=${B.length}   ${Y}`);
      }
      W();
    }
    j('TABLE:  "COORDINATE SYSTEMS"'), j("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), W(), j('TABLE:  "DATABASE FORMAT TYPES"'), j("   UnitsCurr=Yes   OverrideE=No"), W();
    const J = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map();
    for (const D of he) {
      const B = ((_a = X.areas) == null ? void 0 : _a.get(D)) || 0, Y = ((_b = X.momentsOfInertiaZ) == null ? void 0 : _b.get(D)) || 0, ue = ((_c = X.momentsOfInertiaY) == null ? void 0 : _c.get(D)) || 0, Me = ((_d = X.torsionalConstants) == null ? void 0 : _d.get(D)) || 0, Ae = ((_e = X.elasticities) == null ? void 0 : _e.get(D)) || 0, Ke = `MAT_${Math.round(Ae)}`, ye = `A${B.toPrecision(6)}_Iz${Y.toPrecision(6)}`;
      if (!J.has(ye)) {
        let Ye = 0.3, be = 0.3;
        B > 0 && Y > 0 && (Ye = Math.sqrt(12 * Y / B), be = B / Ye), J.set(ye, {
          A: B,
          Iz: Y,
          Iy: ue,
          J: Me,
          b: be,
          h: Ye,
          matKey: Ke
        });
      }
      const Ge = [
        ...J.keys()
      ].indexOf(ye) + 1;
      $e.set(D, `SEC${Ge}`);
    }
    if (he.length > 0) {
      j('TABLE:  "FRAME SECTION ASSIGNMENTS"');
      for (const D of he) {
        const B = $e.get(D) || "SEC1";
        j(`   Frame=${D + 1}   AutoSelect=N.A.   AnalSect=${B}   MatProp=Default`);
      }
      W();
    }
    if (J.size > 0) {
      j('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
      let D = 0;
      for (const [, B] of J) {
        D++;
        const Y = B.A * 5 / 6;
        j(`   SectionName=SEC${D}   Material=${B.matKey}   Shape=Rectangular   t3=${Pt(B.h)}   t2=${Pt(B.b)}   Area=${Pt(B.A)}   TorsConst=${Pt(B.J)}   I33=${Pt(B.Iz)}   I22=${Pt(B.Iy)}   I23=0   AS2=${Pt(Y)}   AS3=${Pt(Y)} _`), j("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
      }
      W();
    }
    const fe = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map();
    for (const D of T) {
      const B = ((_f = X.thicknesses) == null ? void 0 : _f.get(D)) || 0.1, Y = ((_g = X.elasticities) == null ? void 0 : _g.get(D)) || 0, ue = `MAT_${Math.round(Y)}`, Me = `t${B.toPrecision(6)}`;
      fe.has(Me) || fe.set(Me, {
        t: B,
        matKey: ue
      });
      const Ae = [
        ...fe.keys()
      ].indexOf(Me) + 1;
      re.set(D, `SSEC${Ae}`);
    }
    if (T.length > 0) {
      j('TABLE:  "AREA SECTION ASSIGNMENTS"');
      for (const B of T) {
        const Y = re.get(B) || "SSEC1";
        j(`   Area=${B + 1}   Section=${Y}   MatProp=Default`);
      }
      W(), j('TABLE:  "AREA SECTION PROPERTIES"');
      let D = 0;
      for (const [, B] of fe) D++, j(`   Section=SSEC${D}   Material=${B.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${Pt(B.t)}   BendThick=${Pt(B.t)}   Color=Cyan`);
      W();
    }
    j('TABLE:  "JOINT COORDINATES"');
    for (let D = 0; D < b.length; D++) {
      const B = b[D];
      j(`   Joint=${D + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${Pt(B[0])}   Y=${Pt(B[1])}   Z=${Pt(B[2])}   SpecialJt=No`);
    }
    if (W(), M.supports && M.supports.size > 0) {
      j('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
      for (const [D, B] of M.supports) {
        if (!B.some((ue) => ue)) continue;
        const Y = (ue) => ue ? "Yes" : "No";
        j(`   Joint=${D + 1}   U1=${Y(B[0])}   U2=${Y(B[1])}   U3=${Y(B[2])}   R1=${Y(B[3])}   R2=${Y(B[4])}   R3=${Y(B[5])}`);
      }
      W();
    }
    if (j('TABLE:  "LOAD PATTERN DEFINITIONS"'), j("   LoadPat=DEAD   DesignType=Dead   SelfWtMult=0"), W(), j('TABLE:  "LOAD CASE DEFINITIONS"'), j('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), W(), j('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), j('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), W(), M.forces && M.forces.size > 0) {
      j('TABLE:  "JOINT LOADS - FORCE"');
      for (const [D, B] of M.forces) B.some((Y) => Math.abs(Y) > 1e-12) && j(`   Joint=${D + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${Pt(B[0])}   F2=${Pt(B[1])}   F3=${Pt(B[2])}   M1=${Pt(B[3])}   M2=${Pt(B[4])}   M3=${Pt(B[5])}`);
      W();
    }
    const ne = /* @__PURE__ */ new Map();
    for (let D = 0; D < O.length; D++) {
      const B = ((_h = X.elasticities) == null ? void 0 : _h.get(D)) || 0, Y = ((_i = X.shearModuli) == null ? void 0 : _i.get(D)) || 0, ue = B > 0 && Y > 0 ? Math.max(0, Math.min(0.5, B / (2 * Y) - 1)) : 0.2, Me = ((_j = X.densities) == null ? void 0 : _j.get(D)) || 0, Ae = `MAT_${Math.round(B)}`;
      ne.has(Ae) || ne.set(Ae, {
        E: B,
        nu: ue,
        G: Y,
        rho: Me
      });
    }
    j('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
    for (const [D] of ne) j(`   Material=${D}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
    W(), j('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
    for (const [D, B] of ne) j(`   Material=${D}   UnitWeight=${Pt(B.rho * 9.81)}   UnitMass=${Pt(B.rho)}   E1=${Pt(B.E)}   G12=${Pt(B.G)}   U12=${Pt(B.nu)}   A1=9.9E-06`);
    W(), j('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
    for (const [D] of ne) j(`   Material=${D}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
    return W(), j('TABLE:  "PROGRAM CONTROL"'), j(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${H.force}, ${H.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), W(), j("END TABLE DATA"), j(""), V.join(`\r
`);
  }
  function Pt(e) {
    return e === 0 || Math.abs(e) < 1e-15 ? "0" : Math.abs(e) >= 1e6 || Math.abs(e) < 1e-3 && Math.abs(e) > 0 ? e.toExponential(8) : parseFloat(e.toPrecision(10)).toString();
  }
  function ei(e) {
    const { e2kModel: b } = e, O = b == null ? void 0 : b.rawSections;
    return O && O.size > 0 ? ti(O) : oi(e);
  }
  function ti(e, b) {
    const O = [], M = [
      "PROGRAM INFORMATION",
      "CONTROLS",
      "STORIES - IN SEQUENCE FROM TOP",
      "GRIDS",
      "DIAPHRAGM NAMES",
      "MATERIAL PROPERTIES",
      "REBAR DEFINITIONS",
      "FRAME SECTIONS",
      "AUTO SELECT SECTION LISTS",
      "CONCRETE SECTIONS",
      "WALL/SLAB/DECK SECTIONS",
      "POINT COORDINATES",
      "LINE CONNECTIVITIES",
      "AREA CONNECTIVITIES",
      "POINT ASSIGNS",
      "LINE ASSIGNS",
      "AREA ASSIGNS",
      "LOAD PATTERNS",
      "POINT OBJECT LOADS",
      "FRAME OBJECT LOADS",
      "SHELL OBJECT LOADS",
      "ANALYSIS OPTIONS",
      "MASS SOURCE",
      "FUNCTIONS",
      "LOAD CASES",
      "LOAD COMBINATIONS"
    ];
    O.push("$ File exported from Awatif FEM Studio (round-trip)"), O.push("");
    for (const X of M) {
      const H = e.get(X);
      if (!(!H || H.length === 0)) {
        O.push(`$ ${X}`);
        for (const Z of H) O.push(Z);
        O.push("");
      }
    }
    for (const [X, H] of e) if (!M.includes(X) && H.length !== 0) {
      O.push(`$ ${X}`);
      for (const Z of H) O.push(Z);
      O.push("");
    }
    return O.push("  END"), O.push("$ END OF MODEL FILE"), O.join(`\r
`);
  }
  function oi(e) {
    var _a, _b, _c, _d;
    const { nodes: b, elements: O, nodeInputs: M, elementInputs: X, title: H, units: Z } = e, V = (Z == null ? void 0 : Z.force) || "TONF", j = (Z == null ? void 0 : Z.length) || "M", W = [], he = (be) => Math.round(be * 1e4) / 1e4;
    W.push("$ File exported from Awatif FEM Studio"), W.push(""), W.push("$ PROGRAM INFORMATION"), W.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), W.push(""), W.push("$ CONTROLS"), W.push(`  UNITS  "${V}"  "${j}"  "C"  `), H && W.push(`  TITLE2  "${H}"  `), W.push("");
    const T = /* @__PURE__ */ new Set();
    b.forEach((be) => T.add(he(be[1])));
    const J = [
      ...T
    ].sort((be, Te) => be - Te), $e = [], fe = /* @__PURE__ */ new Map();
    $e.push("Base"), fe.set(J[0], "Base");
    for (let be = 1; be < J.length; be++) {
      const Te = `Level_${be}`;
      $e.push(Te), fe.set(J[be], Te);
    }
    W.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let be = J.length - 1; be >= 1; be--) W.push(`  STORY "${$e[be]}"  HEIGHT ${he(J[be] - J[be - 1])} MASTERSTORY "Yes"  `);
    J.length > 0 && W.push(`  STORY "Base"  ELEV ${J[0]} `), W.push(""), O.some((be) => be.length === 4) && (W.push("$ DIAPHRAGM NAMES"), W.push('  DIAPHRAGM "D1"    TYPE RIGID'), W.push("")), W.push("$ MATERIAL PROPERTIES");
    const ne = /* @__PURE__ */ new Set();
    (_a = X.elasticities) == null ? void 0 : _a.forEach((be) => ne.add(be));
    const D = /* @__PURE__ */ new Map();
    let B = 0;
    for (const be of ne) {
      const Te = `Mat_${++B}`;
      D.set(be, Te), W.push(`  MATERIAL  "${Te}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), W.push(`  MATERIAL  "${Te}"    SYMTYPE "Isotropic"  E ${be}  U 0.2  A 1E-05`);
    }
    W.push(""), W.push("$ FRAME SECTIONS");
    const Y = /* @__PURE__ */ new Set(), ue = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map();
    O.forEach((be, Te) => {
      var _a2, _b2;
      if (be.length !== 2) return;
      const Ce = (_a2 = X.sectionShapes) == null ? void 0 : _a2.get(Te), Ue = ((_b2 = X.elasticities) == null ? void 0 : _b2.get(Te)) ?? 0, ct = D.get(Ue) || "Mat_1", Ze = (Ce == null ? void 0 : Ce.h) ?? 0, dt = (Ce == null ? void 0 : Ce.b) ?? 0, ut = (Ce == null ? void 0 : Ce.d) ?? 0, Tt = (Ce == null ? void 0 : Ce.tf) ?? 0, Nt = (Ce == null ? void 0 : Ce.tw) ?? 0, Bt = (Ce == null ? void 0 : Ce.type) || "rect", Mt = `${Bt}_${Ze}_${dt}_${ut}_${Tt}_${Nt}`;
      (Ce == null ? void 0 : Ce.name) && !Me.has(Mt) && Me.set(Mt, Ce.name);
      let bt = Me.get(Mt);
      if (bt || (Bt === "rect" ? bt = `R${he(dt * 100)}x${he(Ze * 100)}` : Bt === "circ" ? bt = `C_D${he(ut * 100)}` : Bt === "I" ? bt = `I_${he(Ze * 100)}` : bt = `Sec_${Y.size + 1}`, Me.set(Mt, bt)), ue.set(Te, bt), Y.has(bt)) return;
      Y.add(bt);
      const _e = {
        rect: "Concrete Rectangular",
        circ: "Concrete Circle",
        I: "Steel I/Wide Flange",
        HSS: "Steel Tube",
        pipe: "Steel Pipe",
        L: "Steel Angle",
        C: "Steel Channel",
        "2C": "Steel Double Channel"
      }[Bt] || "Concrete Rectangular";
      let St = `  FRAMESECTION  "${bt}"  MATERIAL "${ct}"  SHAPE "${_e}"`;
      Ze && (St += `  D ${Ze}`), dt && (St += `  B ${dt}`), ut && !Ze && (St += `  D ${ut}`), Tt && (St += `  TF ${Tt}`), Nt && (St += `  TW ${Nt}`), W.push(St);
    }), W.push("");
    const Ae = /* @__PURE__ */ new Map();
    let Ke = 0;
    b.forEach((be) => {
      const Te = `${he(be[0])},${he(be[2])}`;
      Ae.has(Te) || Ae.set(Te, `${++Ke}`);
    }), W.push("$ POINT COORDINATES");
    for (const [be, Te] of Ae) {
      const [Ce, Ue] = be.split(",").map(Number);
      W.push(`  POINT "${Te}"  ${Ce} ${Ue} `);
    }
    W.push("");
    const ye = (be) => {
      const Te = b[be], Ce = `${he(Te[0])},${he(Te[2])}`;
      return {
        pt: Ae.get(Ce) || "1",
        story: fe.get(he(Te[1])) || "Base"
      };
    };
    W.push("$ LINE CONNECTIVITIES");
    const Ge = [];
    O.forEach((be, Te) => {
      if (be.length !== 2) return;
      const Ce = ni(b, be), Ue = ue.get(Te) || `Sec_${Te}`;
      if (Ce === "BEAM") {
        const ct = ye(be[0]), Ze = ye(be[1]);
        W.push(`  LINE  "E${Te + 1}"  BEAM  "${ct.pt}"  "${Ze.pt}"  0`), Ge.push(`  LINEASSIGN  "E${Te + 1}"  "${ct.story}"  SECTION "${Ue}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const ct = b[be[0]][1] <= b[be[1]][1] ? be[0] : be[1], Ze = b[be[0]][1] <= b[be[1]][1] ? be[1] : be[0];
        ye(ct);
        const dt = ye(Ze), ut = he(b[ct][1]), Tt = he(b[Ze][1]), Nt = J.indexOf(ut), Bt = J.indexOf(Tt), Mt = Math.max(1, Bt >= 0 && Nt >= 0 ? Bt - Nt : 1);
        W.push(`  LINE  "E${Te + 1}"  ${Ce}  "${dt.pt}"  "${dt.pt}"  ${Mt}`);
        for (let bt = 0; bt < Mt; bt++) {
          const ho = Bt - bt;
          ho >= 0 && ho < $e.length && Ge.push(`  LINEASSIGN  "E${Te + 1}"  "${$e[ho]}"  SECTION "${Ue}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), W.push(""), W.push("$ POINT ASSIGNS"), (_b = M.supports) == null ? void 0 : _b.forEach((be, Te) => {
      const Ce = [];
      if (be[0] && Ce.push("UX"), be[1] && Ce.push("UY"), be[2] && Ce.push("UZ"), be[3] && Ce.push("RX"), be[4] && Ce.push("RY"), be[5] && Ce.push("RZ"), Ce.length > 0) {
        const Ue = ye(Te);
        W.push(`  POINTASSIGN  "${Ue.pt}"  "${Ue.story}"  RESTRAINT "${Ce.join(" ")}"  `);
      }
    }), W.push(""), W.push("$ LINE ASSIGNS"), Ge.forEach((be) => W.push(be)), W.push("");
    const Ye = [];
    if (O.forEach((be, Te) => {
      if (be.length === 4) {
        const Ce = b[be[0]], Ue = b[be[1]], ct = b[be[2]], Ze = [
          Ue[0] - Ce[0],
          Ue[1] - Ce[1],
          Ue[2] - Ce[2]
        ], dt = [
          ct[0] - Ce[0],
          ct[1] - Ce[1],
          ct[2] - Ce[2]
        ], ut = Math.abs(Ze[2] * dt[0] - Ze[0] * dt[2]), Tt = Math.sqrt((Ze[1] * dt[2] - Ze[2] * dt[1]) ** 2 + ut ** 2 + (Ze[0] * dt[1] - Ze[1] * dt[0]) ** 2), Nt = Tt > 1e-10 && ut / Tt < 0.5;
        Ye.push({
          idx: Te,
          el: be,
          isWall: Nt
        });
      }
    }), Ye.some((be) => !be.isWall)) {
      W.push("$ SLAB PROPERTIES");
      const be = ((_c = X.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
      W.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${D.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${be} `), W.push("");
    }
    if (Ye.some((be) => be.isWall)) {
      W.push("$ WALL PROPERTIES");
      const be = ((_d = X.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
      W.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${D.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${be} `), W.push("");
    }
    if (Ye.length > 0) {
      W.push("$ AREA CONNECTIVITIES");
      const be = [];
      Ye.forEach((Te, Ce) => {
        const { el: Ue, isWall: ct } = Te, Ze = ct ? `W${Ce + 1}` : `F${Ce + 1}`, dt = ct ? "PANEL" : "FLOOR", ut = Ue.map((Tt) => ye(Tt));
        if (ct) {
          const Tt = b[Ue[0]][1] <= b[Ue[2]][1] ? 0 : 2, Nt = b[Ue[1]][1] <= b[Ue[3]][1] ? 1 : 3;
          W.push(`  AREA "${Ze}"  ${dt}  4  "${ut[Tt].pt}"  "${ut[Nt].pt}"  "${ut[Nt].pt}"  "${ut[Tt].pt}"  1  1  0  0  `);
          const Bt = ut[Tt === 0 ? 2 : 0].story;
          be.push(`  AREAASSIGN  "${Ze}"  "${Bt}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
        } else W.push(`  AREA "${Ze}"  ${dt}  4  "${ut[0].pt}"  "${ut[1].pt}"  "${ut[2].pt}"  "${ut[3].pt}"  0  0  0  0  `), be.push(`  AREAASSIGN  "${Ze}"  "${ut[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }), W.push(""), W.push("$ AREA ASSIGNS"), be.forEach((Te) => W.push(Te)), W.push("");
    }
    return W.push("$ LOAD PATTERNS"), W.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), W.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), W.push(""), M.loads && M.loads.size > 0 && (W.push("$ POINT OBJECT LOADS"), M.loads.forEach((be, Te) => {
      const [Ce, Ue, ct] = be, Ze = ye(Te);
      Math.abs(Ce) > 1e-10 && W.push(`  POINTLOAD  "${Ze.pt}"  "${Ze.story}"  "Dead"  TYPE "FORCE"  FX ${Ce}`), Math.abs(Ue) > 1e-10 && W.push(`  POINTLOAD  "${Ze.pt}"  "${Ze.story}"  "Dead"  TYPE "FORCE"  FY ${Ue}`), Math.abs(ct) > 1e-10 && W.push(`  POINTLOAD  "${Ze.pt}"  "${Ze.story}"  "Dead"  TYPE "FORCE"  FZ ${ct}`);
    }), W.push("")), W.push("  END"), W.push("$ END OF MODEL FILE"), W.join(`\r
`);
  }
  function ni(e, b) {
    const O = e[b[0]], M = e[b[1]], X = Math.abs(M[1] - O[1]), H = Math.sqrt((M[0] - O[0]) ** 2 + (M[2] - O[2]) ** 2), Z = X > H * 0.5;
    return Z && H > 0.01 ? "BRACE" : Z ? "COLUMN" : "BEAM";
  }
  function si(e) {
    var _a, _b;
    const { nodes: b, elements: O, nodeInputs: M, elementInputs: X } = e, H = [];
    return H.push("# OpenSeesPy model exported from Awatif FEM Studio"), H.push(`# ${b.length} nodes, ${O.length} elements`), H.push(""), H.push("import openseespy.opensees as ops"), H.push(""), H.push("ops.wipe()"), H.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), H.push(""), H.push("# --- Nodes ---"), b.forEach((Z, V) => {
      H.push(`ops.node(${V + 1}, ${Z[0]}, ${Z[1]}, ${Z[2]})`);
    }), H.push(""), H.push("# --- Boundary Conditions ---"), (_a = M.supports) == null ? void 0 : _a.forEach((Z, V) => {
      const j = Z.map((W) => W ? 1 : 0).join(", ");
      H.push(`ops.fix(${V + 1}, ${j})`);
    }), H.push(""), H.push("# --- Geometric Transformations ---"), H.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), H.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), H.push(""), H.push("# --- Elements (elasticBeamColumn) ---"), O.forEach((Z, V) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (Z.length !== 2) return;
      const j = b[Z[0]], W = b[Z[1]], T = Math.abs(W[2] - j[2]) > Math.max(Math.abs(W[0] - j[0]), Math.abs(W[1] - j[1])) ? 2 : 1, J = ((_a2 = X.areas) == null ? void 0 : _a2.get(V)) ?? 1, $e = ((_b2 = X.elasticities) == null ? void 0 : _b2.get(V)) ?? 2e5, fe = ((_c = X.shearModuli) == null ? void 0 : _c.get(V)) ?? 8e4, re = ((_d = X.torsionalConstants) == null ? void 0 : _d.get(V)) ?? 1, ne = ((_e = X.momentsOfInertiaY) == null ? void 0 : _e.get(V)) ?? 1, D = ((_f = X.momentsOfInertiaZ) == null ? void 0 : _f.get(V)) ?? 1;
      H.push(`ops.element('elasticBeamColumn', ${V + 1}, ${Z[0] + 1}, ${Z[1] + 1}, ${J}, ${$e}, ${fe}, ${re}, ${ne}, ${D}, ${T})`);
    }), H.push(""), M.loads && M.loads.size > 0 && (H.push("# --- Loads ---"), H.push("ops.timeSeries('Linear', 1)"), H.push("ops.pattern('Plain', 1, 1)"), M.loads.forEach((Z, V) => {
      const j = Z.map((W) => W).join(", ");
      H.push(`ops.load(${V + 1}, ${j})`);
    }), H.push("")), H.push("# --- Analysis ---"), H.push("ops.system('BandGeneral')"), H.push("ops.numberer('RCM')"), H.push("ops.constraints('Plain')"), H.push("ops.integrator('LoadControl', 1.0)"), H.push("ops.algorithm('Linear')"), H.push("ops.analysis('Static')"), H.push("ops.analyze(1)"), H.push(""), H.push("# --- Results ---"), H.push('print("\\n=== Displacements ===")'), b.forEach((Z, V) => {
      H.push(`print(f"Node {${V + 1}}: {ops.nodeDisp(${V + 1})}")`);
    }), H.push(""), H.push('print("\\n=== Reactions ===")'), H.push("ops.reactions()"), (_b = M.supports) == null ? void 0 : _b.forEach((Z, V) => {
      H.push(`print(f"Node {${V + 1}}: {ops.nodeReaction(${V + 1})}")`);
    }), H.join(`
`);
  }
  function ai(e) {
    var _a, _b;
    const { nodes: b, elements: O, nodeInputs: M, elementInputs: X } = e, H = [];
    return H.push("# OpenSees Tcl model exported from Awatif FEM Studio"), H.push(`# ${b.length} nodes, ${O.length} elements`), H.push(""), H.push("wipe"), H.push("model basic -ndm 3 -ndf 6"), H.push(""), H.push("# --- Nodes ---"), b.forEach((Z, V) => {
      H.push(`node ${V + 1} ${Z[0]} ${Z[1]} ${Z[2]}`);
    }), H.push(""), H.push("# --- Boundary Conditions ---"), (_a = M.supports) == null ? void 0 : _a.forEach((Z, V) => {
      const j = Z.map((W) => W ? 1 : 0).join(" ");
      H.push(`fix ${V + 1} ${j}`);
    }), H.push(""), H.push("# --- Geometric Transformations ---"), H.push("geomTransf Linear 1 0.0 0.0 1.0"), H.push("geomTransf Linear 2 -1.0 0.0 0.0"), H.push(""), H.push("# --- Elements ---"), O.forEach((Z, V) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (Z.length !== 2) return;
      const j = b[Z[0]], W = b[Z[1]], T = Math.abs(W[2] - j[2]) > Math.max(Math.abs(W[0] - j[0]), Math.abs(W[1] - j[1])) ? 2 : 1, J = ((_a2 = X.areas) == null ? void 0 : _a2.get(V)) ?? 1, $e = ((_b2 = X.elasticities) == null ? void 0 : _b2.get(V)) ?? 2e5, fe = ((_c = X.shearModuli) == null ? void 0 : _c.get(V)) ?? 8e4, re = ((_d = X.torsionalConstants) == null ? void 0 : _d.get(V)) ?? 1, ne = ((_e = X.momentsOfInertiaY) == null ? void 0 : _e.get(V)) ?? 1, D = ((_f = X.momentsOfInertiaZ) == null ? void 0 : _f.get(V)) ?? 1;
      H.push(`element elasticBeamColumn ${V + 1} ${Z[0] + 1} ${Z[1] + 1} ${J} ${$e} ${fe} ${re} ${ne} ${D} ${T}`);
    }), H.push(""), M.loads && M.loads.size > 0 && (H.push("# --- Loads ---"), H.push("timeSeries Linear 1"), H.push("pattern Plain 1 1 {"), M.loads.forEach((Z, V) => {
      const j = Z.map((W) => W).join(" ");
      H.push(`  load ${V + 1} ${j}`);
    }), H.push("}"), H.push("")), H.push("# --- Analysis ---"), H.push("system BandGeneral"), H.push("numberer RCM"), H.push("constraints Plain"), H.push("integrator LoadControl 1.0"), H.push("algorithm Linear"), H.push("analysis Static"), H.push("analyze 1"), H.push(""), H.push("# --- Results ---"), H.push('puts "\\n=== Displacements ==="'), b.forEach((Z, V) => {
      H.push(`puts "Node ${V + 1}: [nodeDisp ${V + 1}]"`);
    }), H.push('puts "\\n=== Reactions ==="'), H.push("reactions"), (_b = M.supports) == null ? void 0 : _b.forEach((Z, V) => {
      H.push(`puts "Node ${V + 1}: [nodeReaction ${V + 1}]"`);
    }), H.join(`
`);
  }
  function li(e) {
    const b = [], O = [], M = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map();
    for (const $e of e.split(/\r?\n/)) {
      const fe = $e.trim(), re = fe.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (re) {
        const Y = parseInt(re[1]), ue = b.length;
        b.push([
          parseFloat(re[2]),
          parseFloat(re[3]),
          parseFloat(re[4])
        ]), T.set(Y, ue);
        continue;
      }
      const ne = fe.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (ne) {
        const Y = parseInt(ne[1]), ue = T.get(Y);
        ue !== void 0 && M.set(ue, [
          ne[2] === "1",
          ne[3] === "1",
          ne[4] === "1",
          ne[5] === "1",
          ne[6] === "1",
          ne[7] === "1"
        ]);
        continue;
      }
      const D = fe.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (D) {
        const Y = parseInt(D[1]), ue = T.get(parseInt(D[2])), Me = T.get(parseInt(D[3]));
        if (ue !== void 0 && Me !== void 0) {
          const Ae = O.length;
          O.push([
            ue,
            Me
          ]), J.set(Y, Ae), V.set(Ae, parseFloat(D[4])), H.set(Ae, parseFloat(D[5])), Z.set(Ae, parseFloat(D[6])), he.set(Ae, parseFloat(D[7])), j.set(Ae, parseFloat(D[8])), W.set(Ae, parseFloat(D[9]));
        }
        continue;
      }
      const B = fe.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (B) {
        const Y = T.get(parseInt(B[1]));
        Y !== void 0 && X.set(Y, [
          parseFloat(B[2]),
          parseFloat(B[3]),
          parseFloat(B[4]),
          parseFloat(B[5]),
          parseFloat(B[6]),
          parseFloat(B[7])
        ]);
      }
    }
    return {
      nodes: b,
      elements: O,
      nodeInputs: {
        supports: M,
        loads: X
      },
      elementInputs: {
        elasticities: H,
        shearModuli: Z,
        areas: V,
        momentsOfInertiaY: j,
        momentsOfInertiaZ: W,
        torsionalConstants: he
      }
    };
  }
  function ii(e) {
    const b = [], O = [], M = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map();
    for (const J of e.split(/\r?\n/)) {
      const $e = J.trim();
      if ($e.startsWith("#") || $e.startsWith("//")) continue;
      const fe = $e.split(/\s+/);
      if (fe[0] === "node" && fe.length >= 5) {
        const re = parseInt(fe[1]), ne = b.length;
        b.push([
          parseFloat(fe[2]),
          parseFloat(fe[3]),
          parseFloat(fe[4])
        ]), T.set(re, ne);
        continue;
      }
      if (fe[0] === "fix" && fe.length >= 8) {
        const re = T.get(parseInt(fe[1]));
        re !== void 0 && M.set(re, [
          fe[2] === "1",
          fe[3] === "1",
          fe[4] === "1",
          fe[5] === "1",
          fe[6] === "1",
          fe[7] === "1"
        ]);
        continue;
      }
      if (fe[0] === "element" && fe[1] === "elasticBeamColumn" && fe.length >= 12) {
        const re = T.get(parseInt(fe[3])), ne = T.get(parseInt(fe[4]));
        if (re !== void 0 && ne !== void 0) {
          const D = O.length;
          O.push([
            re,
            ne
          ]), V.set(D, parseFloat(fe[5])), H.set(D, parseFloat(fe[6])), Z.set(D, parseFloat(fe[7])), he.set(D, parseFloat(fe[8])), j.set(D, parseFloat(fe[9])), W.set(D, parseFloat(fe[10]));
        }
        continue;
      }
      if (fe[0] === "load" && fe.length >= 8) {
        const re = T.get(parseInt(fe[1]));
        re !== void 0 && X.set(re, [
          parseFloat(fe[2]),
          parseFloat(fe[3]),
          parseFloat(fe[4]),
          parseFloat(fe[5]),
          parseFloat(fe[6]),
          parseFloat(fe[7])
        ]);
      }
    }
    return {
      nodes: b,
      elements: O,
      nodeInputs: {
        supports: M,
        loads: X
      },
      elementInputs: {
        elasticities: H,
        shearModuli: Z,
        areas: V,
        momentsOfInertiaY: j,
        momentsOfInertiaZ: W,
        torsionalConstants: he
      }
    };
  }
  function no(e) {
    const b = [];
    let O = 0, M = false, X = "";
    for (let H = 0; H < e.length; H++) {
      const Z = e[H];
      if (Z === "'" && (H === 0 || e[H - 1] !== "\\")) {
        M = !M, X += Z;
        continue;
      }
      if (M) {
        X += Z;
        continue;
      }
      if (Z === "(") {
        O++, X += Z;
        continue;
      }
      if (Z === ")") {
        O--, X += Z;
        continue;
      }
      if (Z === "," && O === 0) {
        b.push(X.trim()), X = "";
        continue;
      }
      X += Z;
    }
    return X.trim() && b.push(X.trim()), b;
  }
  function La(e, b) {
    const O = no(e);
    if (b < O.length) {
      let M = O[b].trim();
      return M.startsWith("'") && M.endsWith("'") && (M = M.slice(1, -1)), M === "$" ? null : M;
    }
    return null;
  }
  function ri(e) {
    const b = {
      schema: "",
      project: "",
      app: ""
    }, O = {}, M = {}, X = e.match(/FILE_SCHEMA\s*\(\s*\(\s*'([^']*)'/i);
    X && (b.schema = X[1]);
    const H = /^#(\d+)\s*=\s*([A-Z][A-Z0-9_]*)\s*\(([\s\S]*?)\)\s*;\s*$/gm;
    let Z;
    for (; (Z = H.exec(e)) !== null; ) {
      const V = parseInt(Z[1]), j = Z[2].toUpperCase();
      O[V] = {
        id: V,
        type: j,
        args: Z[3]
      }, M[j] || (M[j] = []), M[j].push(V);
    }
    if (M.IFCPROJECT) {
      const V = O[M.IFCPROJECT[0]];
      if (V) {
        const j = La(V.args, 2);
        j && (b.project = j);
      }
    }
    return {
      meta: b,
      entities: O,
      typeIndex: M
    };
  }
  function Zt(e, b) {
    const O = b.match(/#(\d+)/);
    return O && e[parseInt(O[1])] || null;
  }
  function Ca(e, b) {
    const O = no(b.args), M = Zt(e, O[0]), X = M ? ci(e, M) : [
      0,
      0,
      0
    ];
    let H = [
      0,
      0,
      1
    ], Z = [
      1,
      0,
      0
    ];
    if (O[1] && O[1] !== "$") {
      const V = Zt(e, O[1]);
      V && (H = Ia(e, V));
    }
    if (O[2] && O[2] !== "$") {
      const V = Zt(e, O[2]);
      V && (Z = Ia(e, V));
    }
    return {
      origin: X,
      dirZ: H,
      dirX: Z
    };
  }
  function ci(e, b) {
    return b.args.replace(/[()]/g, "").split(",").map((M) => parseFloat(M.trim())).filter((M) => !isNaN(M));
  }
  function Ia(e, b) {
    return b.args.replace(/[()]/g, "").split(",").map((M) => parseFloat(M.trim())).filter((M) => !isNaN(M));
  }
  function Fa(e, b) {
    const O = no(b.args), M = Zt(e, O[1]);
    let X = {
      origin: [
        0,
        0,
        0
      ],
      dirZ: [
        0,
        0,
        1
      ],
      dirX: [
        1,
        0,
        0
      ]
    };
    if (M && (X = Ca(e, M)), O[0] && O[0] !== "$") {
      const H = Zt(e, O[0]);
      if (H && H.type === "IFCLOCALPLACEMENT") {
        const Z = Fa(e, H), V = bs(X.origin, Z.dirX, gs(Z.dirZ, Z.dirX), Z.dirZ);
        X.origin = [
          Z.origin[0] + V[0],
          Z.origin[1] + V[1],
          Z.origin[2] + V[2]
        ], X.dirZ = bs(X.dirZ, Z.dirX, gs(Z.dirZ, Z.dirX), Z.dirZ), X.dirX = bs(X.dirX, Z.dirX, gs(Z.dirZ, Z.dirX), Z.dirZ);
      }
    }
    return X;
  }
  function gs(e, b) {
    return [
      e[1] * b[2] - e[2] * b[1],
      e[2] * b[0] - e[0] * b[2],
      e[0] * b[1] - e[1] * b[0]
    ];
  }
  function bs(e, b, O, M) {
    return [
      e[0] * b[0] + e[1] * O[0] + e[2] * M[0],
      e[0] * b[1] + e[1] * O[1] + e[2] * M[1],
      e[0] * b[2] + e[1] * O[2] + e[2] * M[2]
    ];
  }
  const di = 0.01;
  function pi(e) {
    const b = ri(e), { entities: O, typeIndex: M } = b, X = [], H = [], Z = /* @__PURE__ */ new Map();
    Z.set("Hormigon", {
      E: 2132888792e-2,
      nu: 0.2,
      rho: 2.4
    }), Z.set("Acero", {
      E: 2e8,
      nu: 0.3,
      rho: 7.85
    });
    let V = 0, j = 0;
    function W(ne, D, B) {
      for (const Y of X) {
        const ue = Y.x - ne, Me = Y.y - D, Ae = Y.z - B;
        if (Math.sqrt(ue * ue + Me * Me + Ae * Ae) < di) return Y.id;
      }
      return X.push({
        id: V,
        x: ne,
        y: D,
        z: B
      }), V++;
    }
    function he(ne) {
      const D = La(ne.args, 2) || "", B = M.IFCRELASSOCIATESMATERIAL || [];
      for (const ue of B) {
        const Me = O[ue];
        if (!Me) continue;
        const Ae = no(Me.args);
        if ((Ae[4] || Ae[3] || "").includes(`#${ne.id}`)) {
          const ye = Ae[5] || Ae[4] || "", Ge = Zt(O, ye);
          if (Ge) return T(Ge);
        }
      }
      const Y = D.match(/(\d+)\s*[xX×]\s*(\d+)/);
      return Y ? {
        b: parseFloat(Y[1]) / 100,
        h: parseFloat(Y[2]) / 100,
        name: D
      } : {
        b: 0.3,
        h: 0.3,
        name: D || "Default"
      };
    }
    function T(ne) {
      const D = ne.type;
      if (D === "IFCRECTANGLEPROFILEDEF") {
        const B = no(ne.args), Y = (B[1] || "").replace(/'/g, ""), ue = parseFloat(B[3]) || 0.3, Me = parseFloat(B[4]) || 0.3;
        return {
          b: ue,
          h: Me,
          name: Y
        };
      }
      if (D === "IFCMATERIALPROFILE") {
        const B = no(ne.args), Y = B[2] || B[1] || "", ue = Zt(O, Y);
        if (ue) return T(ue);
      }
      if (D === "IFCMATERIALPROFILESET") {
        const B = no(ne.args), ue = (B[2] || B[1] || "").match(/#(\d+)/);
        if (ue) {
          const Me = O[parseInt(ue[1])];
          if (Me) return T(Me);
        }
      }
      if (D === "IFCMATERIALPROFILESETUSAGE") {
        const Y = no(ne.args)[0], ue = Zt(O, Y);
        if (ue) return T(ue);
      }
      return {
        b: 0.3,
        h: 0.3,
        name: "Unknown"
      };
    }
    function J(ne, D, B, Y) {
      const ue = M[ne] || [];
      for (const Me of ue) {
        const Ae = O[Me];
        if (!Ae) continue;
        const Ke = no(Ae.args), ye = Ke[5] || Ke[4] || "", Ge = Zt(O, ye);
        if (!Ge) continue;
        const Ye = Fa(O, Ge), be = he(Ae);
        let Te = Y, Ce = null, Ue = null;
        const ct = Ke[6] || Ke[5] || "", Ze = Zt(O, ct);
        if (Ze) {
          const bt = Rn(O, Ze);
          bt && (Te = bt.depth || Y, Ce = bt.origin, Ue = bt.direction);
        }
        const dt = Ce ? Ce[0] : Ye.origin[0], ut = Ce ? Ce[1] : Ye.origin[1], Tt = Ce ? Ce[2] : Ye.origin[2], Nt = Ue || (B === "Z" ? Ye.dirZ : Ye.dirX), Bt = W(dt, ut, Tt), Mt = W(dt + Nt[0] * Te, ut + Nt[1] * Te, Tt + Nt[2] * Te);
        H.push({
          id: j++,
          type: "frame",
          nodeIds: [
            Bt,
            Mt
          ],
          category: D,
          sectionName: be.name,
          b: be.b,
          h: be.h,
          material: "Hormigon",
          expressID: Me
        });
      }
    }
    J("IFCCOLUMN", "column", "Z", 3), J("IFCBEAM", "beam", "X", 5), J("IFCMEMBER", "diagonal", "X", 4), J("IFCPILE", "pile", "Z", 10), J("IFCSTAIRFLIGHT", "stair", "X", 3), J("IFCRAMPFLIGHT", "ramp", "X", 4);
    function $e(ne, D, B) {
      const Y = M[ne] || [];
      for (const ue of Y) {
        const Me = O[ue];
        if (!Me) continue;
        const Ae = no(Me.args), Ke = Ae[5] || Ae[4] || "";
        if (!Zt(O, Ke)) continue;
        let Ge = B;
        const Ye = Ae[6] || Ae[5] || "", be = Zt(O, Ye);
        be && (Ge = fi(O, be) || B);
        const Te = D === "slab" ? `Losa e=${(Ge * 100).toFixed(0)}cm` : D === "wall" ? `Muro e=${(Ge * 100).toFixed(0)}cm` : D === "footing" ? `Zapata e=${(Ge * 100).toFixed(0)}cm` : `${D} e=${(Ge * 100).toFixed(0)}cm`;
        H.push({
          id: j++,
          type: "shell",
          nodeIds: [],
          category: D,
          sectionName: Te,
          b: Ge,
          h: Ge,
          material: "Hormigon",
          expressID: ue
        });
      }
    }
    $e("IFCSLAB", "slab", 0.15), $e("IFCWALL", "wall", 0.2), $e("IFCWALLSTANDARDCASE", "wall", 0.2), $e("IFCFOOTING", "footing", 0.5), $e("IFCROOF", "slab", 0.12);
    const fe = [], re = M.IFCBUILDINGSTOREY || [];
    for (const ne of re) {
      const D = O[ne];
      if (!D) continue;
      const B = no(D.args), Y = (B[2] || "").replace(/'/g, ""), ue = parseFloat(B[9]) || 0;
      fe.push({
        name: Y,
        elevation: ue
      });
    }
    return fe.sort((ne, D) => ne.elevation - D.elevation), {
      nodes: X,
      elements: H,
      materials: Z,
      levels: fe,
      projectName: b.meta.project,
      schema: b.meta.schema
    };
  }
  function Rn(e, b) {
    const O = no(b.args);
    for (const M of O) {
      const X = M.match(/#(\d+)/g) || [];
      for (const H of X) {
        const Z = parseInt(H.replace("#", "")), V = e[Z];
        if (V) {
          if (V.type === "IFCEXTRUDEDAREASOLID") {
            const j = no(V.args), W = parseFloat(j[3]) || 0, he = Zt(e, j[1]);
            let T = [
              0,
              0,
              0
            ];
            he && (T = Ca(e, he).origin);
            const J = Zt(e, j[2]);
            let $e = [
              0,
              0,
              1
            ];
            if (J && J.type === "IFCDIRECTION") {
              const fe = J.args.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
              fe && fe.length >= 3 && ($e = fe.map(Number));
            }
            return {
              depth: W,
              origin: T,
              direction: $e
            };
          }
          if (V.type === "IFCSHAPEREPRESENTATION") {
            const j = Rn(e, V);
            if (j) return j;
          }
          if (V.type === "IFCMAPPEDITEM") {
            const j = no(V.args), W = Zt(e, j[0]);
            if (W && W.type === "IFCREPRESENTATIONMAP") {
              const he = no(W.args), T = Zt(e, he[1]);
              if (T) {
                const J = Rn(e, T);
                if (J) return J;
              }
            }
          }
        }
      }
    }
    return null;
  }
  function fi(e, b) {
    const O = Rn(e, b);
    return O ? O.depth : null;
  }
  const Pa = [
    [
      843113511,
      "column"
    ],
    [
      753842376,
      "beam"
    ],
    [
      1529196076,
      "slab"
    ],
    [
      900683007,
      "footing"
    ],
    [
      1687234759,
      "footing"
    ],
    [
      979691226,
      "rebar"
    ],
    [
      2320036040,
      "rebar"
    ],
    [
      3171933400,
      "plate"
    ],
    [
      1073191201,
      "member"
    ],
    [
      377706215,
      "fastener"
    ],
    [
      2391406946,
      "wall"
    ],
    [
      3512223829,
      "wall"
    ],
    [
      3304561284,
      "opening"
    ],
    [
      395920057,
      "opening"
    ]
  ], Ra = [
    "column",
    "beam",
    "slab",
    "footing",
    "rebar",
    "plate",
    "member",
    "fastener",
    "wall",
    "opening",
    "other"
  ], Oa = /* @__PURE__ */ new Map();
  for (const [e, b] of Pa) Oa.set(e, b);
  function ui(e) {
    return Oa.get(e) ?? "other";
  }
  new Set(Ra);
  async function mi(e, b) {
    var _a, _b;
    const O = window.WebIFC;
    if (!O) throw new Error("web-ifc no disponible. Verifica que web-ifc-api-iife.js se carg\xF3.");
    const M = new O.IfcAPI(), X = window.location.pathname.replace(/\/[^/]*$/, "/");
    M.SetWasmPath(X), await M.Init();
    const H = M.OpenModel(new Uint8Array(b)), Z = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), j = {
      843113511: "Columna",
      753842376: "Viga",
      1529196076: "Losa",
      900683007: "Zapata",
      1687234759: "Pilote",
      979691226: "Barra Refuerzo",
      2320036040: "Malla Refuerzo",
      3171933400: "Placa",
      1073191201: "Miembro",
      377706215: "Perno/Anclaje",
      2391406946: "Muro",
      3512223829: "Muro",
      3304561284: "Ventana",
      395920057: "Puerta"
    };
    for (const [$e] of Pa) {
      const fe = ui($e);
      try {
        const re = M.GetLineIDsWithType(H, $e);
        for (let ne = 0; ne < re.size(); ne++) {
          const D = re.get(ne);
          Z.set(D, fe);
          let B = "";
          try {
            const Y = M.GetLine(H, D);
            B = ((_a = Y == null ? void 0 : Y.Name) == null ? void 0 : _a.value) || ((_b = Y == null ? void 0 : Y.Description) == null ? void 0 : _b.value) || "";
          } catch {
          }
          V.set(D, {
            expressID: D,
            category: fe,
            name: B,
            typeName: j[$e] || "Otro"
          });
        }
      } catch {
      }
    }
    const W = /* @__PURE__ */ new Map();
    for (const $e of Ra) {
      const fe = new bn();
      fe.name = `ifc-${$e}`, e.add(fe), W.set($e, fe);
    }
    const he = new vl();
    let T = 0;
    const J = new ya({
      color: 13421772,
      transparent: true,
      opacity: 0.9,
      side: $a
    });
    return M.StreamAllMeshes(H, ($e) => {
      const fe = Z.get($e.expressID) ?? "other", re = W.get(fe), ne = $e.geometries;
      for (let D = 0; D < ne.size(); D++) {
        const B = ne.get(D), Y = M.GetGeometry(H, B.geometryExpressID), ue = M.GetVertexArray(Y.GetVertexData(), Y.GetVertexDataSize()), Me = M.GetIndexArray(Y.GetIndexData(), Y.GetIndexDataSize()), Ae = new co(), Ke = new Float32Array(ue.length / 2), ye = new Float32Array(ue.length / 2);
        for (let Ce = 0; Ce < ue.length; Ce += 6) {
          const Ue = Ce / 2;
          Ke[Ue] = ue[Ce], Ke[Ue + 1] = ue[Ce + 1], Ke[Ue + 2] = ue[Ce + 2], ye[Ue] = ue[Ce + 3], ye[Ue + 1] = ue[Ce + 4], ye[Ue + 2] = ue[Ce + 5];
        }
        Ae.setAttribute("position", new Cn(Ke, 3)), Ae.setAttribute("normal", new Cn(ye, 3)), Ae.setIndex(new Cn(new Uint32Array(Me), 1));
        const Ge = new yl();
        Ge.fromArray(B.flatTransformation);
        let Ye;
        const be = B.color;
        be && (be.x !== 1 || be.y !== 1 || be.z !== 1) ? Ye = new ya({
          color: new $l(be.x, be.y, be.z),
          transparent: be.w < 1,
          opacity: be.w,
          side: $a
        }) : Ye = J, Ye._origOpacity = Ye.opacity;
        const Te = new Ta(Ae, Ye);
        Te.applyMatrix4(Ge), Te.userData.expressID = $e.expressID, Te.userData.category = fe, re.add(Te), he.expandByObject(Te), T++, Y.delete();
      }
    }), M.CloseModel(H), {
      meshCount: T,
      bbox: he,
      detailCategories: W,
      elementInfo: V
    };
  }
  ka = on.state(false);
  Mi = function(e) {
    e.nodeInputs || (e.nodeInputs = on.state({})), e.elementInputs || (e.elementInputs = on.state({})), e.deformOutputs || (e.deformOutputs = on.state({})), e.analyzeOutputs || (e.analyzeOutputs = on.state({}));
    let b = "tonf", O = "m", M = jo(b, O), X = {
      forceId: "kgf",
      lengthId: "cm",
      label: "kgf/cm\xB2"
    };
    const H = {
      MKS: {
        force: "tonf",
        length: "m",
        stress: {
          forceId: "kgf",
          lengthId: "cm",
          label: "kgf/cm\xB2"
        }
      },
      SI: {
        force: "kN",
        length: "m",
        stress: {
          forceId: "kN",
          lengthId: "m",
          label: "kPa"
        }
      },
      US: {
        force: "kip",
        length: "in",
        stress: {
          forceId: "kip",
          lengthId: "in",
          label: "ksi"
        }
      }
    }, Z = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set();
    let j = false;
    const W = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Map();
    let T = "", J = {}, $e = null, fe = "", re = [], ne = [], D = [], B = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), ue = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), Ke = null, ye = [], Ge = 0.2, Ye = 2, be = 2, Te = false, Ce = 2, Ue = "x", ct = /* @__PURE__ */ new Set(), Ze = true, dt = 0.15, ut = 2, Tt = 2, Nt = /* @__PURE__ */ new Set(), Bt = false, Mt = "perimeter";
    const bt = () => ({
      b: 0.3,
      h: 0.4,
      profileIdx: 0,
      secType: 0,
      bf: 0.2,
      hf: 0.4,
      tf: 0.015,
      tw: 0.01,
      hc: 0.3,
      bc: 0.2,
      t: 8e-3
    }), ho = (t, o) => ({
      bCol: 0.4,
      hCol: 0.4,
      dCol: 0.4,
      colProfileIdx: 0,
      colSecType: 0,
      colBf: 0.3,
      colHf: 0.3,
      colTf: 0.02,
      colTw: 0.012,
      colHc: 0.3,
      colBc: 0.3,
      colT: 0.01,
      colFc: 20594,
      colEs: 2e8,
      colNuS: 0.3,
      colNuC: 0.2,
      vigasX: Array.from({
        length: t
      }, bt),
      vigasY: Array.from({
        length: o
      }, bt)
    }), _e = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let St = 0, Pe = 3, De = false, xe = 0, Fe = null, ve = 0, ze = [], Ve = 1, He = true;
    const ft = Pl();
    ft.div.style.display = "none";
    function ht() {
      const t = kn()[T];
      return t && t[St] ? t[St].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let Je = [], Qe = [], mt = 0, pt = [], xt = null;
    function Jt() {
      if (!xt) return;
      const t = tt();
      t && t.scene.remove(xt), xt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), xt = null;
    }
    function ys(t, o, n, l, a) {
      Jt();
      const c = tt();
      if (!c) return;
      xt = new bn(), xt.name = "refGrid";
      const s = Math.min(...t), i = Math.max(...t), p = Math.min(...o), r = Math.max(...o), d = Math.max(...n), g = i - s || 1, S = r - p || 1, $ = 3359829, y = 2241348;
      for (const h of n) {
        for (const I of o) {
          const L = new co().setFromPoints([
            new qe(s, h, I),
            new qe(i, h, I)
          ]), z = new Qo({
            color: $,
            dashSize: g * 0.015,
            gapSize: g * 0.01,
            transparent: true,
            opacity: 0.25
          }), R = new Bo(L, z);
          R.computeLineDistances(), R.renderOrder = -10, xt.add(R);
        }
        for (const I of t) {
          const L = new co().setFromPoints([
            new qe(I, h, p),
            new qe(I, h, r)
          ]), z = new Qo({
            color: $,
            dashSize: S * 0.015,
            gapSize: S * 0.01,
            transparent: true,
            opacity: 0.25
          }), R = new Bo(L, z);
          R.computeLineDistances(), R.renderOrder = -10, xt.add(R);
        }
      }
      for (const h of t) for (const I of o) {
        const L = new co().setFromPoints([
          new qe(h, 0, I),
          new qe(h, d, I)
        ]), z = new Qo({
          color: y,
          dashSize: d * 0.01,
          gapSize: d * 8e-3,
          transparent: true,
          opacity: 0.15
        }), R = new Bo(L, z);
        R.computeLineDistances(), R.renderOrder = -10, xt.add(R);
      }
      const f = Math.min(g, S) * 0.015;
      for (const h of n) for (const I of t) for (const L of o) {
        const z = [
          new qe(I - f, h, L),
          new qe(I + f, h, L),
          new qe(I, h, L - f),
          new qe(I, h, L + f)
        ], R = new co().setFromPoints(z), k = new tn({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), m = new en(R, k);
        m.renderOrder = -5, xt.add(m);
      }
      xt.traverse((h) => {
        h.material && (Array.isArray(h.material) ? h.material.forEach((I) => {
          I.clippingPlanes = [];
        }) : h.material.clippingPlanes = []);
      }), c.scene.add(xt), c.render();
    }
    let Ht = null;
    function $s() {
      if (!Ht) return;
      const t = tt();
      t && t.scene.remove(Ht), Ht.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Ht = null;
    }
    function an(t, o, n, l, a) {
      $s();
      const c = tt();
      if (!c) return;
      Ht = new bn(), Ht.name = "gridAxes";
      const s = Math.min(...t), i = Math.max(...t), p = Math.min(...o), r = Math.max(...o), d = i - s || 1, g = r - p || 1, S = Math.max(d, g), $ = S * 0.08, y = l || t.map((m, u) => String.fromCharCode(65 + u)), f = a || o.map((m, u) => String(u + 1)), h = S * 0.018, I = o.length <= 1, L = 8947848;
      for (let m = 0; m < t.length; m++) {
        const u = t[m];
        if (I) {
          const E = -$ - h * 1.5;
          Dn(u, 0, 0, u, 0, E + h, L, Ht), Bn(y[m] || `${m}`, u, 0, E, h, Ht);
        } else {
          const E = p - $ - h * 1.5;
          Dn(u, p, 0, u, E + h, 0, L, Ht), Bn(y[m] || `${m}`, u, E, 0, h, Ht);
        }
      }
      if (!I) for (let m = 0; m < o.length; m++) {
        const u = o[m], E = s - $ - h * 1.5;
        Dn(s, u, 0, E + h, u, 0, L, Ht), Bn(f[m] || `${m}`, E, u, 0, h, Ht);
      }
      const z = h * 1.8, R = $ * 1.2, k = $ * 1.2;
      for (let m = 0; m < t.length - 1; m++) {
        const u = t[m], E = t[m + 1], C = Math.abs(E - u), N = (u + E) / 2, G = `${C.toFixed(2)} m`;
        I ? (qn(G, N, 0, -R, z, Ht), _n(u, 0, -R * 0.7, E, 0, -R * 0.7, 16763904, Ht)) : (qn(G, N, p - k, 0, z, Ht), _n(u, p - k * 0.7, 0, E, p - k * 0.7, 0, 16763904, Ht));
      }
      if (!I) for (let m = 0; m < o.length - 1; m++) {
        const u = o[m], E = o[m + 1], C = Math.abs(E - u), N = (u + E) / 2, G = `${C.toFixed(2)} m`;
        qn(G, s - R, N, 0, z, Ht), _n(s - R * 0.7, u, 0, s - R * 0.7, E, 0, 16763904, Ht);
      }
      Ht.traverse((m) => {
        m.material && (Array.isArray(m.material) ? m.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : m.material.clippingPlanes = []);
      }), c.scene.add(Ht), c.render();
    }
    let Qt = null;
    function Ms() {
      if (!Qt) return;
      const t = tt();
      t && t.scene.remove(Qt), Qt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Qt = null;
    }
    function Nn(t, o, n) {
      if (Ms(), t.length === 0) return;
      const l = tt();
      if (!l) return;
      Qt = new bn(), Qt.name = "storyLevels";
      const a = Math.min(...o), c = Math.max(...o), s = Math.min(...n), i = Math.max(...n), p = c - a || 1, r = i - s || 1, d = Math.max(p, r), g = d * 0.06, S = n.length <= 1, $ = 4491519, y = d * 0.015;
      for (const f of t) {
        const h = f.elev;
        S ? (ln(a - g, 0, h, c + g, 0, h, $, Qt), ws(f.name, c + g * 1.5, 0, h, y, Qt)) : (ln(a, s, h, c, s, h, $, Qt), ln(c, s, h, c, i, h, $, Qt), ln(c, i, h, a, i, h, $, Qt), ln(a, i, h, a, s, h, $, Qt), ws(f.name, a - g * 1.5, s, h, y, Qt));
      }
      Qt.traverse((f) => {
        f.material && (Array.isArray(f.material) ? f.material.forEach((h) => {
          h.clippingPlanes = [];
        }) : f.material.clippingPlanes = []);
      }), l.scene.add(Qt), l.render();
    }
    function ln(t, o, n, l, a, c, s, i) {
      const p = Math.sqrt((l - t) ** 2 + (a - o) ** 2 + (c - n) ** 2) || 1, r = new co().setFromPoints([
        new qe(t, o, n),
        new qe(l, a, c)
      ]), d = new Qo({
        color: s,
        dashSize: p * 0.02,
        gapSize: p * 0.01,
        transparent: true,
        opacity: 0.5
      }), g = new Bo(r, d);
      g.computeLineDistances(), g.renderOrder = 50, i.add(g);
    }
    function ws(t, o, n, l, a, c) {
      const s = document.createElement("canvas"), i = 512, p = 64;
      s.width = i, s.height = p;
      const r = s.getContext("2d");
      r.fillStyle = "rgba(30,60,120,0.8)";
      const d = 8;
      r.beginPath(), r.moveTo(d, 0), r.lineTo(i - d, 0), r.quadraticCurveTo(i, 0, i, d), r.lineTo(i, p - d), r.quadraticCurveTo(i, p, i - d, p), r.lineTo(d, p), r.quadraticCurveTo(0, p, 0, p - d), r.lineTo(0, d), r.quadraticCurveTo(0, 0, d, 0), r.closePath(), r.fill(), r.fillStyle = "#88bbff", r.font = "bold 38px monospace", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t, i / 2, p / 2);
      const g = new ps(s);
      g.needsUpdate = true;
      const S = new In({
        map: g,
        depthTest: false,
        transparent: true
      }), $ = new Sn(S);
      $.position.set(o, n, l), $.scale.set(a * 8, a, 1), $.renderOrder = 101, c.add($);
    }
    function qn(t, o, n, l, a, c) {
      const s = document.createElement("canvas"), i = 256, p = 64;
      s.width = i, s.height = p;
      const r = s.getContext("2d");
      r.fillStyle = "rgba(0,0,0,0.75)";
      const d = 8;
      r.beginPath(), r.moveTo(d, 0), r.lineTo(i - d, 0), r.quadraticCurveTo(i, 0, i, d), r.lineTo(i, p - d), r.quadraticCurveTo(i, p, i - d, p), r.lineTo(d, p), r.quadraticCurveTo(0, p, 0, p - d), r.lineTo(0, d), r.quadraticCurveTo(0, 0, d, 0), r.closePath(), r.fill(), r.fillStyle = "#ffcc00", r.font = "bold 36px monospace", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t, i / 2, p / 2);
      const g = new kl(s);
      g.minFilter = Tl;
      const S = new In({
        map: g,
        transparent: true,
        depthTest: false
      }), $ = new Sn(S);
      $.position.set(o, n, l);
      const y = i / p;
      $.scale.set(a * y, a, 1), $.renderOrder = 999, c.add($);
    }
    function _n(t, o, n, l, a, c, s, i) {
      const p = [
        new qe(t, o, n),
        new qe(l, a, c)
      ], r = new co().setFromPoints(p), d = new tn({
        color: s,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), g = new Bo(r, d);
      g.renderOrder = 998, i.add(g);
    }
    function Dn(t, o, n, l, a, c, s, i) {
      const p = new co().setFromPoints([
        new qe(t, o, n),
        new qe(l, a, c)
      ]), r = new Qo({
        color: s,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(a - o), Math.abs(c - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(a - o), Math.abs(c - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), d = new Bo(p, r);
      d.computeLineDistances(), i.add(d);
    }
    function Bn(t, o, n, l, a, c) {
      const s = document.createElement("canvas"), i = 128;
      s.width = i, s.height = i;
      const p = s.getContext("2d");
      p.beginPath(), p.arc(i / 2, i / 2, i * 0.42, 0, Math.PI * 2), p.fillStyle = "rgba(255,255,255,0.9)", p.fill(), p.lineWidth = i * 0.04, p.strokeStyle = "#555", p.stroke(), p.fillStyle = "#222", p.font = `bold ${i * 0.45}px Arial`, p.textAlign = "center", p.textBaseline = "middle", p.fillText(t, i / 2, i / 2 + i * 0.02);
      const r = new ps(s);
      r.needsUpdate = true;
      const d = new In({
        map: r,
        depthTest: false,
        transparent: true
      }), g = new Sn(d);
      g.position.set(o, n, l);
      const S = a * 2;
      g.scale.set(S, S, 1), g.renderOrder = 100, c.add(g);
    }
    const ot = {
      addNode(t, o, n) {
        const l = [
          ...e.nodes.val
        ], a = l.length;
        return l.push([
          t,
          o,
          n
        ]), e.nodes.val = l, console.log(`Node ${a} at (${t}, ${o}, ${n})`), st(), a;
      },
      removeNode(t) {
        const o = [
          ...e.nodes.val
        ];
        if (t < 0 || t >= o.length) {
          console.error(`Node ${t} not found`);
          return;
        }
        o.splice(t, 1);
        const n = e.elements.val.map(([l, a]) => {
          const c = l > t ? l - 1 : l, s = a > t ? a - 1 : a;
          return l === t || a === t ? null : [
            c,
            s
          ];
        }).filter((l) => l !== null);
        e.nodes.val = o, e.elements.val = n, console.log(`Node ${t} removed`), st();
      },
      listNodes() {
        const t = e.nodes.val;
        return console.table(t.map((o, n) => ({
          id: n,
          x: o[0],
          y: o[1],
          z: o[2]
        }))), t;
      },
      addFrame(t, o) {
        const n = [
          ...e.elements.val
        ], l = n.length;
        return n.push([
          t,
          o
        ]), e.elements.val = n, console.log(`Element ${l}: node ${t} -> node ${o}`), st(), l;
      },
      removeFrame(t) {
        const o = [
          ...e.elements.val
        ];
        if (t < 0 || t >= o.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        o.splice(t, 1), e.elements.val = o, console.log(`Element ${t} removed`), st();
      },
      listFrames() {
        const t = e.elements.val;
        return console.table(t.map((o, n) => ({
          id: n,
          nodeI: o[0],
          nodeJ: o[1]
        }))), t;
      },
      addSupport(t, o) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, l = new Map(n.supports || []);
        l.set(t, o || [
          true,
          true,
          true,
          true,
          true,
          true
        ]), n.supports = l, e.nodeInputs.val = n, console.log(`Support added at node ${t}`), st();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(t), o.supports = n, e.nodeInputs.val = o, console.log(`Support removed from node ${t}`), st();
      },
      addLoad(t, o) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, l = new Map(n.loads || []);
        l.set(t, o), n.loads = l, e.nodeInputs.val = n, console.log(`Load added at node ${t}: [${o.join(", ")}]`), st();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(t), o.loads = n, e.nodeInputs.val = o, console.log(`Load removed from node ${t}`), st();
      },
      listSupports() {
        if (!e.nodeInputs) return;
        const t = e.nodeInputs.val.supports;
        if (!t || t.size === 0) {
          console.log("No supports");
          return;
        }
        const o = [];
        return t.forEach((n, l) => o.push({
          node: l,
          dof: n.map((a) => a ? 1 : 0).join("")
        })), console.table(o), t;
      },
      listLoads() {
        if (!e.nodeInputs) return;
        const t = e.nodeInputs.val.loads;
        if (!t || t.size === 0) {
          console.log("No loads");
          return;
        }
        const o = [];
        return t.forEach((n, l) => o.push({
          node: l,
          Fx: n[0],
          Fy: n[1],
          Fz: n[2]
        })), console.table(o), t;
      },
      info() {
        var _a2, _b, _c, _d, _e2, _f;
        const t = e.nodes.val.length, o = e.elements.val.length, n = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0, l = ((_f = (_e2 = (_d = e.nodeInputs) == null ? void 0 : _d.val) == null ? void 0 : _e2.loads) == null ? void 0 : _f.size) || 0;
        return console.log(`Model: ${t} nodes, ${o} elements, ${n} supports, ${l} loads`), {
          nodes: t,
          elements: o,
          supports: n,
          loads: l
        };
      },
      set(t, o) {
        var _a2, _b, _c, _d;
        const n = Le.querySelectorAll("input[type=checkbox]");
        for (const l of n) {
          const a = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || "", c = l.id || "";
          if (a.toLowerCase().includes(t.toLowerCase()) || c.toLowerCase().includes(t.toLowerCase())) {
            const s = l;
            return s.checked = o !== void 0 ? o : !s.checked, s.dispatchEvent(new Event("change", {
              bubbles: true
            })), console.log(`${a || c}: ${s.checked}`), s.checked;
          }
        }
        console.log(`Setting "${t}" not found. Use cad.settings() to list.`);
      },
      settings() {
        const t = Le.querySelectorAll("input[type=checkbox]"), o = {};
        return t.forEach((n) => {
          var _a2, _b, _c, _d;
          const l = n, a = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || l.id || "?";
          o[a] = l.checked;
        }), console.table(o), o;
      },
      param(t, o) {
        const n = window.__cad;
        if (n == null ? void 0 : n.setParam) return n.setParam(t, o), console.log(`${t} = ${o}`), o;
        console.log("Parameters not available");
      },
      params() {
        const t = window.__cad;
        if (t == null ? void 0 : t.getParams) {
          const o = t.getParams();
          return console.table(o), o;
        }
        console.log("Parameters not available");
      },
      use(t) {
        const o = window.__cad;
        if (o == null ? void 0 : o.setGenerator) return o.setGenerator(t), console.log(`Generator: ${t}`), t;
      },
      panel(t, o, n) {
        const l = window.__cad;
        if (l == null ? void 0 : l.createCustomPanel) return l.createCustomPanel(t, o, n);
        console.log("Custom panels not available");
      },
      removePanel(t) {
        const o = window.__cad;
        (o == null ? void 0 : o.removeCustomPanel) && (o.removeCustomPanel(t), console.log(`Panel "${t}" removed`));
      },
      refgrid(t, o, n) {
        if (!t) {
          Jt(), console.log("Reference grid cleared");
          return;
        }
        const l = [
          0
        ];
        for (const s of t) l.push(l[l.length - 1] + s);
        const a = [
          0
        ];
        for (const s of o || [
          0
        ]) a.push(a[a.length - 1] + s);
        const c = [
          0
        ];
        for (const s of n || [
          3
        ]) c.push(c[c.length - 1] + s);
        ys(l, a, c), Je = l.map((s, i) => ({
          label: String.fromCharCode(65 + i),
          coord: s
        })), Qe = a.map((s, i) => ({
          label: `${i + 1}`,
          coord: s
        })), mt = c[c.length - 1], pt = c.map((s, i) => ({
          label: i === 0 ? "Base" : `P${i}`,
          elev: s
        })), an(Je.map((s) => s.coord), Qe.map((s) => s.coord), mt, Je.map((s) => s.label), Qe.map((s) => s.label));
        {
          const s = c.map((i, p) => ({
            name: p === 0 ? "Base" : `P${p}`,
            height: p > 0 ? i - c[p - 1] : 0,
            elev: i
          }));
          Nn(s, Je.map((i) => i.coord), Qe.map((i) => i.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${a}] Y=[${c}]`), {
          xCoords: l,
          zCoords: a,
          yLevels: c
        };
      },
      build(t) {
        var _a2;
        if (Je.length === 0 || pt.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const o = (t == null ? void 0 : t.col) || "40x40", n = (t == null ? void 0 : t.viga) || "30x40", l = (t == null ? void 0 : t.fc) || 210, [a, c] = o.split("x").map((q) => parseFloat(q) / 100), [s, i] = n.split("x").map((q) => parseFloat(q) / 100), p = Je.map((q) => q.coord), r = Qe.map((q) => q.coord), d = pt.map((q) => q.elev), g = p.length, S = r.length, $ = d.length, y = $ - 1, f = [], h = {};
        for (let q = 0; q < $; q++) for (let ce = 0; ce < S; ce++) for (let oe = 0; oe < g; oe++) h[`${oe},${ce},${q}`] = f.length, f.push([
          p[oe],
          r[ce],
          d[q]
        ]);
        const I = [], L = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Map();
        for (let q = 0; q < y; q++) for (let ce = 0; ce < S; ce++) for (let oe = 0; oe < g; oe++) {
          const pe = I.length;
          I.push([
            h[`${oe},${ce},${q}`],
            h[`${oe},${ce},${q + 1}`]
          ]), L.add(pe), R.set(pe, q);
        }
        for (let q = 1; q < $; q++) for (let ce = 0; ce < S; ce++) for (let oe = 0; oe < g - 1; oe++) {
          const pe = I.length;
          I.push([
            h[`${oe},${ce},${q}`],
            h[`${oe + 1},${ce},${q}`]
          ]), z.add(pe), R.set(pe, q - 1);
        }
        for (let q = 1; q < $; q++) for (let ce = 0; ce < g; ce++) for (let oe = 0; oe < S - 1; oe++) {
          const pe = I.length;
          I.push([
            h[`${ce},${oe},${q}`],
            h[`${ce},${oe + 1},${q}`]
          ]), z.add(pe), R.set(pe, q - 1);
        }
        const k = ((_a2 = t == null ? void 0 : t.braces) == null ? void 0 : _a2.toLowerCase()) || "", m = /* @__PURE__ */ new Set();
        if (k) {
          const q = k === "all" || k === "x" || k === "perimeter", ce = k === "all" || k === "y" || k === "perimeter";
          for (let oe = 0; oe < y; oe++) {
            if (q) for (let pe = 0; pe < S; pe++) {
              if (k === "perimeter" && pe !== 0 && pe !== S - 1) continue;
              const ee = Math.floor((g - 1) / 2);
              for (let ge = 0; ge < g - 1; ge++) {
                if (k === "perimeter" && ge !== ee) continue;
                const Ie = I.length;
                I.push([
                  h[`${ge},${pe},${oe}`],
                  h[`${ge + 1},${pe},${oe + 1}`]
                ]), m.add(Ie), R.set(Ie, oe);
                const se = I.length;
                I.push([
                  h[`${ge + 1},${pe},${oe}`],
                  h[`${ge},${pe},${oe + 1}`]
                ]), m.add(se), R.set(se, oe);
              }
            }
            if (ce) for (let pe = 0; pe < g; pe++) {
              if (k === "perimeter" && pe !== 0 && pe !== g - 1) continue;
              const ee = Math.floor((S - 1) / 2);
              for (let ge = 0; ge < S - 1; ge++) {
                if (k === "perimeter" && ge !== ee) continue;
                const Ie = I.length;
                I.push([
                  h[`${pe},${ge},${oe}`],
                  h[`${pe},${ge + 1},${oe + 1}`]
                ]), m.add(Ie), R.set(Ie, oe);
                const se = I.length;
                I.push([
                  h[`${pe},${ge + 1},${oe}`],
                  h[`${pe},${ge},${oe + 1}`]
                ]), m.add(se), R.set(se, oe);
              }
            }
          }
        }
        const u = 15100 * Math.sqrt(l) * 10, E = u / (2 * (1 + 0.2)), C = a * c, N = a * c ** 3 / 12, G = c * a ** 3 / 12, x = a * c * (a ** 2 + c ** 2) / 12, w = s * i, v = s * i ** 3 / 12, P = i * s ** 3 / 12, K = s * i * (s ** 2 + i ** 2) / 12, U = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map();
        for (let q = 0; q < I.length; q++) U.set(q, u), le.set(q, E), L.has(q) ? (te.set(q, C), Q.set(q, N), me.set(q, G), de.set(q, x), ke.set(q, {
          type: "rect",
          b: a,
          h: c,
          name: `COL${o}`
        })) : m.has(q) ? (te.set(q, C), Q.set(q, N), me.set(q, G), de.set(q, x), ke.set(q, {
          type: "rect",
          b: a,
          h: c,
          name: `BR${o}`
        })) : (te.set(q, w), Q.set(q, v), me.set(q, P), de.set(q, K), ke.set(q, {
          type: "rect",
          b: s,
          h: i,
          name: `V${n}`
        }));
        const Re = /* @__PURE__ */ new Map();
        for (let q = 0; q < S; q++) for (let ce = 0; ce < g; ce++) Re.set(h[`${ce},${q},0`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        return e.nodes.val = f, e.elements.val = I, e.nodeInputs.val = {
          supports: Re,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: U,
          shearModuli: le,
          areas: te,
          momentsOfInertiaZ: Q,
          momentsOfInertiaY: me,
          torsionalConstants: de,
          sectionShapes: ke
        }, B = L, Y = z, Me = R, console.log(`Built: ${f.length} nodes, ${I.length} elements (${L.size} cols, ${z.size} beams, ${m.size} braces)`), console.log(`  Col: ${o}, Viga: ${n}, f'c=${l}${k ? `, braces=${k}` : ""}`), {
          nodes: f.length,
          elements: I.length
        };
      },
      addCol(t, o, n) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = Je.findIndex((y) => y.label === t), a = Qe.findIndex((y) => y.label === o);
        if (l < 0) {
          console.log(`Axis "${t}" not found. Available: ${Je.map((y) => y.label)}`);
          return;
        }
        if (a < 0) {
          console.log(`Axis "${o}" not found. Available: ${Qe.map((y) => y.label)}`);
          return;
        }
        const c = Je[l].coord, s = Qe[a].coord, i = [
          ...e.nodes.val
        ], p = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ];
        (_b = e.elementInputs) == null ? void 0 : _b.val;
        const r = (y) => {
          const f = i.findIndex((h) => Math.abs(h[0] - c) < 1e-3 && Math.abs(h[1] - s) < 1e-3 && Math.abs(h[2] - y) < 1e-3);
          return f >= 0 ? f : (i.push([
            c,
            s,
            y
          ]), i.length - 1);
        }, d = n ? [
          pt.findIndex((y) => y.label === n)
        ] : Array.from({
          length: pt.length - 1
        }, (y, f) => f + 1), g = new Map(((_d = (_c = e.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), S = r(pt[0].elev);
        g.has(S) || g.set(S, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        let $ = 0;
        for (const y of d) {
          if (y < 1 || y >= pt.length) continue;
          const f = r(pt[y - 1].elev), h = r(pt[y].elev);
          p.push([
            f,
            h
          ]), B.add(p.length - 1), Me.set(p.length - 1, y - 1), $++;
        }
        return e.nodes.val = i, e.elements.val = p, e.nodeInputs.val = {
          ...e.nodeInputs.val,
          supports: g,
          loads: ((_f = (_e2 = e.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${$} column(s) at ${t}-${o}${n ? ` story ${n}` : ""}`), $;
      },
      addBeam(t, o, n, l, a) {
        var _a2;
        const c = Je.findIndex((R) => R.label === t), s = Qe.findIndex((R) => R.label === o), i = Je.findIndex((R) => R.label === n), p = Qe.findIndex((R) => R.label === l), r = pt.findIndex((R) => R.label === a);
        if (c < 0 || s < 0 || i < 0 || p < 0) {
          console.log("Axis not found");
          return;
        }
        if (r < 1) {
          console.log(`Story "${a}" not found. Available: ${pt.filter((R) => R.label !== "Base").map((R) => R.label)}`);
          return;
        }
        const d = Je[c].coord, g = Qe[s].coord, S = Je[i].coord, $ = Qe[p].coord, y = pt[r].elev, f = [
          ...e.nodes.val
        ], h = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], I = (R, k, m) => {
          const u = f.findIndex((E) => Math.abs(E[0] - R) < 1e-3 && Math.abs(E[1] - k) < 1e-3 && Math.abs(E[2] - m) < 1e-3);
          return u >= 0 ? u : (f.push([
            R,
            k,
            m
          ]), f.length - 1);
        }, L = I(d, g, y), z = I(S, $, y);
        return h.push([
          L,
          z
        ]), Y.add(h.length - 1), Me.set(h.length - 1, r - 1), e.nodes.val = f, e.elements.val = h, console.log(`Added beam ${t}-${o} \u2192 ${n}-${l} at ${a}`), h.length - 1;
      },
      addBrace(t, o, n, l, a, c) {
        var _a2;
        const s = Je.findIndex((u) => u.label === t), i = Qe.findIndex((u) => u.label === o), p = pt.findIndex((u) => u.label === n), r = Je.findIndex((u) => u.label === l), d = Qe.findIndex((u) => u.label === a), g = pt.findIndex((u) => u.label === c);
        if (s < 0 || i < 0 || p < 0) {
          console.log(`Point 1 not found: ${t}-${o}@${n}`);
          return;
        }
        if (r < 0 || d < 0 || g < 0) {
          console.log(`Point 2 not found: ${l}-${a}@${c}`);
          return;
        }
        const S = Je[s].coord, $ = Qe[i].coord, y = pt[p].elev, f = Je[r].coord, h = Qe[d].coord, I = pt[g].elev, L = [
          ...e.nodes.val
        ], z = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], R = (u, E, C) => {
          const N = L.findIndex((G) => Math.abs(G[0] - u) < 1e-3 && Math.abs(G[1] - E) < 1e-3 && Math.abs(G[2] - C) < 1e-3);
          return N >= 0 ? N : (L.push([
            u,
            E,
            C
          ]), L.length - 1);
        }, k = R(S, $, y), m = R(f, h, I);
        return z.push([
          k,
          m
        ]), Me.set(z.length - 1, Math.min(p, g)), e.nodes.val = L, e.elements.val = z, console.log(`Added brace ${t}-${o}@${n} \u2192 ${l}-${a}@${c}`), z.length - 1;
      },
      help() {
        return `=== CLI Commands ===
MODEL:
  cad.clear()                    New empty model
  cad.info()                     Model summary
  cad.addNode(x, y, z)          Add node (Y-up)
  cad.addFrame(i, j)            Add frame element
  cad.removeNode(i)             Remove node
  cad.removeFrame(i)            Remove element
  cad.listNodes()               List all nodes
  cad.listFrames()              List all elements

BOUNDARY:
  cad.addSupport(n)             Fixed support at node n
  cad.addSupport(n, [1,1,1,0,0,0])  Custom DOFs
  cad.removeSupport(n)          Remove support
  cad.addLoad(n, [fx,fy,fz,mx,my,mz])
  cad.removeLoad(n)
  cad.listSupports()            List supports
  cad.listLoads()               List loads

GENERATORS:
  cad.model3d()                 3D building (default 2x2, 3 floors)
  cad.model3d({bx:[5,6], bz:[4], h:[3.5,3], col:"40x40", viga:"25x30", fc:210})
  cad.use("Edificio")           Switch to parametric generator
  cad.frame([5,5], [3,3])       2D portal frame
  cad.building([5,5],[4],[3])   3D building (parametric)
  cad.galpon(12, 20, 6, 3)     Galpon/warehouse

REFERENCE GRID:
  cad.refgrid([5,5],[4,4],[3.5,3])  Construction grid lines
  cad.refgrid()                     Clear reference grid

SETTINGS & PARAMS:
  cad.settings()                List all settings
  cad.set("nodes", true)        Toggle setting on/off
  cad.set("deform")             Toggle setting
  cad.params()                  List all parameters
  cad.param("Vanos X", 3)       Set parameter value

CUSTOM PANELS (create your own Tweakpane):
  cad.panel("Grilla", {
    svx: { value: [2,3,4], label: "Vanos X" },
    svy: { value: [3.44,4,5], label: "Vanos Y" },
    sp:  { value: [3.5,3,3], label: "Alturas" },
    fc:  { value: 210, min:100, max:500, label: "f'c" },
    col: { value: "40x40", options:["30x30","40x40"], label: "Col" },
  }, (p) => { cad.refgrid(p.svx, p.svy, p.sp); })
  cad.removePanel("Grilla")     Remove custom panel

VIEW:
  cad.view("3d")                3D view
  cad.view("plan")              Plan view
  cad.view("ex")                X elevation
  cad.view("ey")                Y elevation
`;
      },
      model3d(t) {
        ot.clear();
        const o = (t == null ? void 0 : t.bx) || [
          5,
          5
        ], n = (t == null ? void 0 : t.bz) || [
          4,
          4
        ], l = (t == null ? void 0 : t.h) || [
          3.5,
          3,
          3
        ], a = (t == null ? void 0 : t.col) || "40x40", c = (t == null ? void 0 : t.viga) || "30x40", s = (t == null ? void 0 : t.fc) || 210, [i, p] = a.split("x").map((ee) => parseFloat(ee) / 100), [r, d] = c.split("x").map((ee) => parseFloat(ee) / 100), g = [
          0
        ];
        for (const ee of o) g.push(g[g.length - 1] + ee);
        const S = [
          0
        ];
        for (const ee of n) S.push(S[S.length - 1] + ee);
        const $ = [
          0
        ];
        for (const ee of l) $.push($[$.length - 1] + ee);
        const y = g.length, f = S.length, h = $.length, I = l.length, L = [], z = {};
        for (let ee = 0; ee < h; ee++) for (let ge = 0; ge < f; ge++) for (let Ie = 0; Ie < y; Ie++) z[`${Ie},${ee},${ge}`] = L.length, L.push([
          g[Ie],
          $[ee],
          S[ge]
        ]);
        const R = [], k = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < I; ee++) for (let ge = 0; ge < f; ge++) for (let Ie = 0; Ie < y; Ie++) {
          const se = R.length;
          R.push([
            z[`${Ie},${ee},${ge}`],
            z[`${Ie},${ee + 1},${ge}`]
          ]), k.add(se), u.set(se, ee);
        }
        for (let ee = 1; ee < h; ee++) for (let ge = 0; ge < f; ge++) for (let Ie = 0; Ie < y - 1; Ie++) {
          const se = R.length;
          R.push([
            z[`${Ie},${ee},${ge}`],
            z[`${Ie + 1},${ee},${ge}`]
          ]), m.add(se), u.set(se, ee - 1);
        }
        for (let ee = 1; ee < h; ee++) for (let ge = 0; ge < y; ge++) for (let Ie = 0; Ie < f - 1; Ie++) {
          const se = R.length;
          R.push([
            z[`${ge},${ee},${Ie}`],
            z[`${ge},${ee},${Ie + 1}`]
          ]), m.add(se), u.set(se, ee - 1);
        }
        const C = 15100 * Math.sqrt(s) * 10, N = C / (2 * (1 + 0.2)), G = i * p, x = i * p ** 3 / 12, w = p * i ** 3 / 12, v = i * p * (i ** 2 + p ** 2) / 12, P = r * d, K = r * d ** 3 / 12, U = d * r ** 3 / 12, le = r * d * (r ** 2 + d ** 2) / 12, te = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < R.length; ee++) te.set(ee, C), Q.set(ee, N), k.has(ee) ? (me.set(ee, G), de.set(ee, x), ke.set(ee, w), Re.set(ee, v), q.set(ee, {
          type: "rect",
          b: i,
          h: p,
          name: `COL${a}`
        })) : (me.set(ee, P), de.set(ee, K), ke.set(ee, U), Re.set(ee, le), q.set(ee, {
          type: "rect",
          b: r,
          h: d,
          name: `V${c}`
        }));
        const ce = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < f; ee++) for (let ge = 0; ge < y; ge++) ce.set(z[`${ge},0,${ee}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        e.nodes.val = L, e.elements.val = R, e.nodeInputs.val = {
          supports: ce,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: te,
          shearModuli: Q,
          areas: me,
          momentsOfInertiaZ: de,
          momentsOfInertiaY: ke,
          torsionalConstants: Re,
          sectionShapes: q
        }, B = k, Y = m, Me = u, Je = g.map((ee, ge) => ({
          label: String.fromCharCode(65 + ge),
          coord: ee
        })), Qe = S.map((ee, ge) => ({
          label: `${ge + 1}`,
          coord: ee
        })), mt = $[$.length - 1], an(Je.map((ee) => ee.coord), Qe.map((ee) => ee.coord), mt, Je.map((ee) => ee.label), Qe.map((ee) => ee.label));
        {
          const ee = $.map((ge, Ie) => ({
            name: Ie === 0 ? "Base" : `P${Ie}`,
            height: Ie > 0 ? ge - $[Ie - 1] : 0,
            elev: ge
          }));
          Nn(ee, g, S);
        }
        const oe = Le.querySelector("#cad3d-axis-buttons");
        if (oe) {
          oe.style.display = "flex";
          const ee = Je.map((Ie) => Ie.label), ge = Qe.map((Ie) => Ie.label);
          oe.innerHTML = `<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">${A("Ejes")}:</span>`;
          for (const Ie of ee) oe.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${Ie}">${Ie}</button>`;
          oe.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const Ie of ge) oe.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${Ie}">${Ie}</button>`;
        }
        const pe = Le.querySelector("#cad3d-floor-buttons");
        if (pe) {
          pe.style.display = "flex", pe.innerHTML = `<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">${A("Planta")}:</span>`;
          for (let ee = 0; ee < I; ee++) pe.innerHTML += `<button class="floor-btn" data-floor="${ee}">P${ee + 1}</button>`;
        }
        return ys(g, S, $), st(), console.log(`Model3D: ${L.length}n ${R.length}e | ${y}x${f} grid, ${I} floors | COL${a} V${c} f'c=${s}`), {
          nodes: L.length,
          elements: R.length,
          columns: k.size,
          beams: m.size
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), B = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), Je = [], Qe = [], mt = 0, $s(), Ms(), Jt();
        const t = Le.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), st();
      },
      frame(t, o, n = 0, l = 0) {
        ot.clear();
        const a = [];
        n > 0 && a.push(-n);
        let c = 0;
        a.push(c);
        for (const y of t) c += y, a.push(c);
        l > 0 && a.push(c + l);
        const s = [
          0
        ];
        let i = 0;
        for (const y of o) i += y, s.push(i);
        const p = (y) => n > 0 && y === 0 || l > 0 && y === a.length - 1, r = {}, d = [];
        for (let y = 0; y < s.length; y++) for (let f = 0; f < a.length; f++) y === 0 && p(f) || (r[`${f},${y}`] = d.length, d.push([
          a[f],
          0,
          s[y]
        ]));
        const g = [];
        B = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set();
        for (let y = 0; y < s.length - 1; y++) for (let f = 0; f < a.length; f++) p(f) || (B.add(g.length), g.push([
          r[`${f},${y}`],
          r[`${f},${y + 1}`]
        ]));
        for (let y = 1; y < s.length; y++) for (let f = 0; f < a.length - 1; f++) Y.add(g.length), g.push([
          r[`${f},${y}`],
          r[`${f + 1},${y}`]
        ]);
        const S = /* @__PURE__ */ new Map(), $ = ht();
        for (let y = 0; y < a.length; y++) {
          if (p(y)) continue;
          const f = `${y},0`;
          r[f] !== void 0 && S.set(r[f], [
            ...$
          ]);
        }
        return e.nodes.val = d, e.elements.val = g, e.nodeInputs && (e.nodeInputs.val = {
          supports: S
        }), Je = [
          ...a
        ], Qe = [
          0
        ], mt = s[s.length - 1] || 0, setTimeout(() => {
          It(), an(a, [
            0
          ]), Kn(), Zn();
        }, 50), st(), {
          nodes: d.length,
          elements: g.length
        };
      },
      building(t, o, n, l = 3, a = 0, c = 0, s = 0, i = 0, p = 1) {
        ot.clear();
        const r = [];
        a > 0 && r.push(-a), r.push(0);
        for (const u of t) r.push(r[r.length - 1] + u);
        c > 0 && r.push(r[r.length - 1] + c);
        const d = [];
        s > 0 && d.push(-s), d.push(0);
        for (const u of o) d.push(d[d.length - 1] + u);
        i > 0 && d.push(d[d.length - 1] + i);
        const g = [
          0
        ];
        for (const u of n) g.push(g[g.length - 1] + u);
        const S = (u) => a > 0 && u === 0 || c > 0 && u === r.length - 1, $ = (u) => s > 0 && u === 0 || i > 0 && u === d.length - 1, y = (u, E) => S(u) || $(E), f = [], h = {};
        for (let u = 0; u < g.length; u++) for (let E = 0; E < d.length; E++) for (let C = 0; C < r.length; C++) u === 0 && y(C, E) || (h[`${C},${E},${u}`] = f.length, f.push([
          r[C],
          d[E],
          g[u]
        ]));
        const I = f.length, L = [];
        B = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map();
        const z = [];
        for (let u = 0; u < g.length - 1; u++) for (let E = 0; E < d.length; E++) for (let C = 0; C < r.length; C++) y(C, E) || z.push({
          el: [
            h[`${C},${E},${u}`],
            h[`${C},${E},${u + 1}`]
          ],
          floor: u
        });
        for (const { el: [u, E], floor: C } of z) {
          if (p <= 1) {
            B.add(L.length), Me.set(L.length, C), L.push([
              u,
              E
            ]);
            continue;
          }
          const N = f[u], G = f[E];
          let x = u;
          for (let w = 1; w < p; w++) {
            const v = w / p, P = f.length;
            f.push([
              N[0] + (G[0] - N[0]) * v,
              N[1] + (G[1] - N[1]) * v,
              N[2] + (G[2] - N[2]) * v
            ]), B.add(L.length), Me.set(L.length, C), L.push([
              x,
              P
            ]), x = P;
          }
          B.add(L.length), Me.set(L.length, C), L.push([
            x,
            E
          ]);
        }
        Ae = /* @__PURE__ */ new Map();
        const R = [];
        for (let u = 1; u < g.length; u++) for (let E = 0; E < d.length; E++) for (let C = 0; C < r.length - 1; C++) R.push({
          el: [
            h[`${C},${E},${u}`],
            h[`${C + 1},${E},${u}`]
          ],
          floor: u - 1,
          dir: "x",
          bay: C
        });
        for (let u = 1; u < g.length; u++) for (let E = 0; E < r.length; E++) for (let C = 0; C < d.length - 1; C++) R.push({
          el: [
            h[`${E},${C},${u}`],
            h[`${E},${C + 1},${u}`]
          ],
          floor: u - 1,
          dir: "y",
          bay: C
        });
        for (const { el: [u, E], floor: C, dir: N, bay: G } of R) {
          const x = f[u], w = f[E];
          let v = u;
          for (let K = 1; K < l; K++) {
            const U = K / l, le = f.length;
            f.push([
              x[0] + (w[0] - x[0]) * U,
              x[1] + (w[1] - x[1]) * U,
              x[2] + (w[2] - x[2]) * U
            ]);
            const te = L.length;
            Y.add(te), Me.set(te, C), Ae.set(te, {
              dir: N,
              bay: G
            }), L.push([
              v,
              le
            ]), v = le;
          }
          const P = L.length;
          Y.add(P), Me.set(P, C), Ae.set(P, {
            dir: N,
            bay: G
          }), L.push([
            v,
            E
          ]);
        }
        if (ct = /* @__PURE__ */ new Set(), Te && Ce > 0) {
          const u = (E, C, N) => {
            for (let x = 0; x < f.length; x++) if (Math.abs(f[x][0] - E) < 1e-6 && Math.abs(f[x][1] - C) < 1e-6 && Math.abs(f[x][2] - N) < 1e-6) return x;
            const G = f.length;
            return f.push([
              E,
              C,
              N
            ]), G;
          };
          for (let E = 1; E < g.length; E++) if (Ue === "x") for (let C = 0; C < d.length - 1; C++) {
            const N = d[C], G = d[C + 1];
            for (let x = 1; x <= Ce; x++) {
              const w = N + x / (Ce + 1) * (G - N), v = [];
              for (let P = 0; P < r.length; P++) v.push(u(r[P], w, g[E]));
              for (let P = 0; P < r.length - 1; P++) {
                const K = L.length;
                ct.add(K), Y.add(K), Me.set(K, E - 1), Ae.set(K, {
                  dir: "x",
                  bay: P
                }), L.push([
                  v[P],
                  v[P + 1]
                ]);
              }
            }
          }
          else for (let C = 0; C < r.length - 1; C++) {
            const N = r[C], G = r[C + 1];
            for (let x = 1; x <= Ce; x++) {
              const w = N + x / (Ce + 1) * (G - N), v = [];
              for (let P = 0; P < d.length; P++) v.push(u(w, d[P], g[E]));
              for (let P = 0; P < d.length - 1; P++) {
                const K = L.length;
                ct.add(K), Y.add(K), Me.set(K, E - 1), Ae.set(K, {
                  dir: "y",
                  bay: P
                }), L.push([
                  v[P],
                  v[P + 1]
                ]);
              }
            }
          }
        }
        const k = /* @__PURE__ */ new Map(), m = ht();
        for (let u = 0; u < d.length; u++) for (let E = 0; E < r.length; E++) y(E, u) || k.set(h[`${E},${u},0`], [
          ...m
        ]);
        ue = /* @__PURE__ */ new Set();
        for (const u of ye) {
          const E = g.length - 1, C = u.floors.includes(-1) ? Array.from({
            length: E
          }, (N, G) => G) : u.floors.filter((N) => N < E);
          for (const N of C) {
            let G, x, w, v;
            u.dir === "x" ? (G = u.bay, w = u.bay + 1, x = u.axisIdx, v = u.axisIdx) : (G = u.axisIdx, w = u.axisIdx, x = u.bay, v = u.bay + 1);
            const P = h[`${G},${x},${N}`], K = h[`${G},${x},${N + 1}`];
            let U, le;
            if (u.dir === "x" ? (U = h[`${w},${v},${N}`], le = h[`${w},${v},${N + 1}`]) : (U = h[`${w},${v},${N}`], le = h[`${w},${v},${N + 1}`]), P === void 0 || U === void 0 || K === void 0 || le === void 0) continue;
            const te = be, Q = Ye, me = f[P], de = f[U], ke = f[K], Re = f[le], q = [];
            for (let ce = 0; ce <= Q; ce++) {
              const oe = [], pe = ce / Q;
              for (let ee = 0; ee <= te; ee++) {
                const ge = ee / te, Ie = (1 - pe) * ((1 - ge) * me[0] + ge * de[0]) + pe * ((1 - ge) * ke[0] + ge * Re[0]), se = (1 - pe) * ((1 - ge) * me[1] + ge * de[1]) + pe * ((1 - ge) * ke[1] + ge * Re[1]), we = (1 - pe) * ((1 - ge) * me[2] + ge * de[2]) + pe * ((1 - ge) * ke[2] + ge * Re[2]);
                ce === 0 && ee === 0 ? oe.push(P) : ce === 0 && ee === te ? oe.push(U) : ce === Q && ee === 0 ? oe.push(K) : ce === Q && ee === te ? oe.push(le) : (oe.push(f.length), f.push([
                  Ie,
                  se,
                  we
                ]));
              }
              q.push(oe);
            }
            for (let ce = 0; ce < Q; ce++) for (let oe = 0; oe < te; oe++) {
              const pe = q[ce][oe], ee = q[ce][oe + 1], ge = q[ce + 1][oe + 1], Ie = q[ce + 1][oe], se = L.length;
              ue.add(se), Me.set(se, N), L.push([
                pe,
                ee,
                ge,
                Ie
              ]);
            }
            if (N === 0) for (let ce = 0; ce <= te; ce++) {
              const oe = q[0][ce];
              oe >= I && k.set(oe, [
                ...m
              ]);
            }
          }
        }
        if (Nt = /* @__PURE__ */ new Set(), Ze) {
          const u = l, E = l, C = /* @__PURE__ */ new Map(), N = (G, x, w) => `${Math.round(G * 1e4)},${Math.round(x * 1e4)},${Math.round(w * 1e4)}`;
          for (let G = 0; G < f.length; G++) C.set(N(f[G][0], f[G][1], f[G][2]), G);
          for (let G = 1; G < g.length; G++) {
            const x = g[G];
            for (let w = 0; w < r.length - 1; w++) for (let v = 0; v < d.length - 1; v++) {
              const P = r[w], K = r[w + 1], U = d[v], le = d[v + 1], te = [];
              for (let Q = 0; Q <= E; Q++) {
                const me = [];
                for (let de = 0; de <= u; de++) {
                  const ke = P + de / u * (K - P), Re = U + Q / E * (le - U);
                  if (Q === 0 && de === 0) me.push(h[`${w},${v},${G}`]);
                  else if (Q === 0 && de === u) me.push(h[`${w + 1},${v},${G}`]);
                  else if (Q === E && de === 0) me.push(h[`${w},${v + 1},${G}`]);
                  else if (Q === E && de === u) me.push(h[`${w + 1},${v + 1},${G}`]);
                  else {
                    const q = N(ke, Re, x), ce = C.get(q);
                    if (ce !== void 0) me.push(ce);
                    else {
                      const oe = f.length;
                      f.push([
                        ke,
                        Re,
                        x
                      ]), C.set(q, oe), me.push(oe);
                    }
                  }
                }
                te.push(me);
              }
              for (let Q = 0; Q < E; Q++) for (let me = 0; me < u; me++) {
                const de = te[Q][me], ke = te[Q][me + 1], Re = te[Q + 1][me + 1], q = te[Q + 1][me], ce = L.length;
                Nt.add(ce), Me.set(ce, G - 1), L.push([
                  de,
                  ke,
                  Re,
                  q
                ]);
              }
            }
          }
        }
        if (Bt && Mt) {
          const u = Mt === "all" || Mt === "x" || Mt === "perimeter", E = Mt === "all" || Mt === "y" || Mt === "perimeter", C = g.length - 1;
          for (let N = 0; N < C; N++) {
            if (u) for (let G = 0; G < d.length; G++) {
              if (Mt === "perimeter" && G !== 0 && G !== d.length - 1) continue;
              const x = Math.floor((r.length - 1) / 2);
              for (let w = 0; w < r.length - 1; w++) {
                if (Mt === "perimeter" && w !== x || y(w, G) || y(w + 1, G)) continue;
                const v = h[`${w},${G},${N}`], P = h[`${w + 1},${G},${N + 1}`], K = h[`${w + 1},${G},${N}`], U = h[`${w},${G},${N + 1}`];
                v !== void 0 && P !== void 0 && (L.push([
                  v,
                  P
                ]), Me.set(L.length - 1, N)), K !== void 0 && U !== void 0 && (L.push([
                  K,
                  U
                ]), Me.set(L.length - 1, N));
              }
            }
            if (E) for (let G = 0; G < r.length; G++) {
              if (Mt === "perimeter" && G !== 0 && G !== r.length - 1) continue;
              const x = Math.floor((d.length - 1) / 2);
              for (let w = 0; w < d.length - 1; w++) {
                if (Mt === "perimeter" && w !== x || y(G, w) || y(G, w + 1)) continue;
                const v = h[`${G},${w},${N}`], P = h[`${G},${w + 1},${N + 1}`], K = h[`${G},${w + 1},${N}`], U = h[`${G},${w},${N + 1}`];
                v !== void 0 && P !== void 0 && (L.push([
                  v,
                  P
                ]), Me.set(L.length - 1, N)), K !== void 0 && U !== void 0 && (L.push([
                  K,
                  U
                ]), Me.set(L.length - 1, N));
              }
            }
          }
        }
        return e.nodes.val = f, e.elements.val = L, e.nodeInputs && (e.nodeInputs.val = {
          supports: k
        }), Je = [
          ...r
        ], Qe = [
          ...d
        ], mt = g[g.length - 1] || 0, setTimeout(() => {
          It(), an(r, d), Kn(), Zn();
        }, 50), st(), {
          nodes: f.length,
          elements: L.length,
          nJointNodes: I
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, a = 8, c = 4) {
        ot.clear();
        const s = [], i = [], p = ($) => n + l * (1 - Math.pow(2 * $ / t - 1, 2)), r = [], d = c + 1;
        for (let $ = 0; $ < d; $++) {
          const y = [], f = o / c * $;
          y.push(s.length), s.push([
            0,
            f,
            0
          ]), y.push(s.length), s.push([
            t,
            f,
            0
          ]), y.push(s.length), s.push([
            0,
            f,
            n
          ]);
          for (let h = 1; h < a; h++) {
            const I = t / a * h;
            y.push(s.length), s.push([
              I,
              f,
              p(I)
            ]);
          }
          y.push(s.length), s.push([
            t,
            f,
            n
          ]), r.push(y);
        }
        for (let $ = 0; $ < d; $++) {
          const y = r[$];
          i.push([
            y[0],
            y[2]
          ]), i.push([
            y[1],
            y[y.length - 1]
          ]);
          for (let f = 2; f < y.length - 1; f++) i.push([
            y[f],
            y[f + 1]
          ]);
        }
        for (let $ = 0; $ < c; $++) for (let y = 2; y < r[0].length; y++) i.push([
          r[$][y],
          r[$ + 1][y]
        ]);
        for (let $ = 0; $ < c; $++) for (let y = 2; y < r[0].length - 1; y += 2) i.push([
          r[$][y],
          r[$ + 1][y + 1]
        ]);
        const g = /* @__PURE__ */ new Map(), S = ht();
        for (let $ = 0; $ < d; $++) g.set(r[$][0], [
          ...S
        ]), g.set(r[$][1], [
          ...S
        ]);
        return e.nodes.val = s, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
          supports: g
        }), st(), {
          nodes: s.length,
          elements: i.length
        };
      },
      example(t) {
        var _a2, _b, _c, _d;
        if (!t) {
          console.log("Ejemplos: truss, beams, 3d, portico, edificio, galpon");
          return;
        }
        switch (t) {
          case "truss": {
            _e.colMat = 1, _e.vigaMat = 1, ot.clear(), nt("truss"), Is();
            break;
          }
          case "beams": {
            _e.colMat = 0, _e.vigaMat = 0, _e.colShape = 0, ot.clear(), nt("beams"), ks();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            _e.colMat = 1, _e.vigaMat = 1, ot.clear(), nt("3d"), Ts();
            break;
          }
          case "portico": {
            _e.colMat = 0, _e.vigaMat = 0, _e.colShape = 0, nt("frame"), Ne();
            break;
          }
          case "edificio": {
            nt("edificio"), _e.colMat = 0, _e.vigaMat = 0, _e.colShape = 0, ye = [], Ze = false, Te = false, Bt = false, Ne();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            nt("edificio"), _e.colMat = 1, _e.vigaMat = 1, _e.steelColType = 0, _e.steelVigaType = 0, ye = [], Te = true, Ce = 2;
            const o = re.reduce((l, a) => l + a, 0) / re.length, n = ne.reduce((l, a) => l + a, 0) / ne.length;
            Ue = o >= n ? "y" : "x", Ze = true, dt = 0.08, Bt = false, Ne();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            nt("edificio"), _e.colMat = 1, _e.vigaMat = 1, _e.steelColType = 0, _e.steelVigaType = 0, ye = [], Te = true, Ce = 2;
            const o = re.reduce((l, a) => l + a, 0) / re.length, n = ne.reduce((l, a) => l + a, 0) / ne.length;
            Ue = o >= n ? "y" : "x", Ze = true, dt = 0.08, Bt = true, Mt = "perimeter", Ne();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            nt("edificio"), _e.colMat = 0, _e.vigaMat = 0, _e.colShape = 0, Te = false;
            const o = Math.round(((_a2 = J.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = J.nVanosY) == null ? void 0 : _b.val) ?? 2);
            ye = [
              {
                dir: "x",
                bay: 0,
                axisIdx: 0,
                floors: [
                  -1
                ]
              },
              {
                dir: "x",
                bay: o - 1,
                axisIdx: n,
                floors: [
                  -1
                ]
              },
              {
                dir: "y",
                bay: 0,
                axisIdx: 0,
                floors: [
                  -1
                ]
              },
              {
                dir: "y",
                bay: n - 1,
                axisIdx: o,
                floors: [
                  -1
                ]
              }
            ], Ze = true, dt = 0.15, Ne();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            nt("edificio"), _e.colMat = 2, _e.vigaMat = 0, Te = false;
            const o = Math.round(((_c = J.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = J.nVanosY) == null ? void 0 : _d.val) ?? 2);
            ye = [
              {
                dir: "x",
                bay: 0,
                axisIdx: 0,
                floors: [
                  -1
                ]
              },
              {
                dir: "x",
                bay: o - 1,
                axisIdx: n,
                floors: [
                  -1
                ]
              }
            ], Ze = true, dt = 0.12, Ne();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            nt("edificio"), J.nPisos && (J.nPisos.val = 1), J.hPiso && (J.hPiso.val = 4.5), J.nVanosX && (J.nVanosX.val = 3), J.nVanosY && (J.nVanosY.val = 2), J.nSubViga && (J.nSubViga.val = 3), re = [
              6,
              6,
              6
            ], ne = [
              5,
              5
            ], _e.colMat = 1, _e.vigaMat = 1, _e.steelColType = 0, _e.steelVigaType = 0, ye = [], Te = true, Ce = 2, Ue = re[0] >= ne[0] ? "y" : "x", Ze = true, dt = 0.08, ut = 3, Tt = 3, Ne();
            break;
          }
          case "galpon": {
            nt("galpon"), _e.colMat = 1, _e.vigaMat = 1, Ne();
            break;
          }
          case "barra": {
            nt("barra"), Ne();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            ot.clear(), nt("placa-3q"), zs();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            ot.clear(), nt("placa-q4"), As();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            ot.clear(), nt("losa-rect"), Ls();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            ot.clear(), nt("losa-plana"), Cs();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            ot.clear(), nt("viga-alta"), Fs();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            ot.clear(), nt("muro-contencion"), Ps();
            break;
          }
          case "zapata":
          case "footing": {
            ot.clear(), nt("zapata"), Rs();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            ot.clear(), nt("placa-orificios"), Os();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            ot.clear(), nt("col-placa"), Ns();
            break;
          }
          case "talud":
          case "slope": {
            ot.clear(), nt("talud"), qs();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            ot.clear(), nt("eiffel"), ea();
            break;
          }
          case "arco":
          case "arco-gateway": {
            ot.clear(), nt("arco"), ta();
            break;
          }
          case "puente":
          case "puente-colgante": {
            ot.clear(), nt("puente"), oa();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            ot.clear(), nt("twisted"), na();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            ot.clear(), nt("burj"), sa();
            break;
          }
          case "opera":
          case "sydney-opera": {
            ot.clear(), nt("opera"), aa();
            break;
          }
          case "diagrid":
          case "gherkin": {
            ot.clear(), nt("diagrid"), la();
            break;
          }
          case "muro-q4":
          case "shear-wall":
          case "muro-cantilever": {
            ot.clear(), nt("muro-q4"), rs();
            break;
          }
          case "viga-q4":
          case "cantilever-beam":
          case "viga-cantilever": {
            ot.clear(), nt("viga-q4"), ia();
            break;
          }
          case "placa-xz":
          case "placa-cantilever":
          case "losa-cantilever": {
            ot.clear(), nt("placa-xz"), ra();
            break;
          }
          case "pergola":
          case "cubierta": {
            ot.clear(), nt("pergola"), ca();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, o = 10, n = 16, l = 16, a = "simply-supported", c = -10, s = 0.2, i = 3e7, p = 0.3, r = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][r]}]: ${t}\xD7${o}, ${n}\xD7${l} elem, BC=${a}, q=${c}, t=${s}`);
        const g = performance.now(), S = ds({
          E: i,
          nu: p,
          thickness: s,
          meshLx: t,
          meshLy: o,
          meshNx: n,
          meshNy: l,
          bcType: a,
          pressure: c,
          theoryType: r
        }), $ = performance.now() - g;
        console.log(`Solved in ${$.toFixed(1)} ms`), console.log(`w_max = ${S.maxW.toExponential(6)}`), console.log(`w_center = ${(S.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${S.maxMxx.toExponential(4)}, Myy_max = ${S.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${S.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${S.maxQx.toExponential(4)}, Qy_max = ${S.maxQy.toExponential(4)}`);
        const y = S.nodeResults.map((z) => [
          z.x,
          z.y,
          0
        ]), f = S.elementResults.map((z) => [
          ...z.nodes
        ]);
        e.nodes.val = y, e.elements.val = f;
        const h = /* @__PURE__ */ new Map();
        S.nodeResults.forEach((z, R) => {
          h.set(R, [
            0,
            0,
            z.w,
            z.bx,
            z.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: h
        });
        const I = /* @__PURE__ */ new Map();
        S.nodeResults.forEach((z, R) => {
          (z.x < 1e-10 || z.x > t - 1e-10 || z.y < 1e-10 || z.y > o - 1e-10) && I.set(R, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        });
        const L = /* @__PURE__ */ new Map();
        if (Math.abs(c) > 1e-30) {
          const z = c * t * o / y.length;
          y.forEach((R, k) => {
            I.has(k) || L.set(k, [
              0,
              0,
              z,
              0,
              0,
              0
            ]);
          });
        }
        if (e.nodeInputs && (e.nodeInputs.val = {
          supports: I,
          loads: L
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const z = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
          S.elementResults.forEach((m, u) => {
            z.set(u, [
              m.Mxx,
              m.Mxx,
              m.Mxx
            ]), R.set(u, [
              m.Myy,
              m.Myy,
              m.Myy
            ]), k.set(u, [
              m.Mxy,
              m.Mxy,
              m.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: z,
            bendingYY: R,
            bendingXY: k
          };
        }
        return setTimeout(() => It(), 50), st(), S;
      },
      set(t, o) {
        J[t] ? (J[t].val = o, console.log(`${t} = ${o}`), mo(), Ne()) : gt[t] ? (gt[t].val = o, console.log(`${t} = ${o}`), mo(), Ne()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...J,
          ...gt
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in J) o[l] = J[l].val;
          for (const l in gt) o[l] = gt[l].val;
          o.plateTheory = Pe, o.supportType = St;
          const n = kn()[T];
          return n && n[St] && (o.supportLabel = n[St].label), console.table(o), o;
        }
        if (J[t]) return J[t].val;
        if (gt[t]) return gt[t].val;
        console.error(`Par\xE1metro "${t}" no encontrado.`);
      },
      setTheory(t) {
        typeof t == "string" && (t = {
          membrana: 1,
          membrane: 1,
          kirchhoff: 2,
          delgada: 2,
          thin: 2,
          mindlin: 3,
          gruesa: 3,
          thick: 3
        }[t.toLowerCase()] || 3), Pe = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[Pe] || Pe}`), T.includes("placa") && (mo(), Ne());
      },
      setBc(t) {
        const o = kn()[T];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = n >= 0 ? n : 0;
        }
        St = t, St >= o.length && (St = 0), console.log(`${A("Apoyo")}: ${o[St].label} \u2192 DOFs: [${o[St].dofs.map((n) => n ? "1" : "0").join(",")}]`), mo(), Ne();
      },
      help() {
        console.log(`
=== FEM Studio CLI ===
Nodos:    cad.addNode(x,y,z)  cad.removeNode(i)  cad.listNodes()
Elem:     cad.addFrame(n1,n2) cad.removeFrame(i)  cad.listFrames()
BC:       cad.addSupport(n)   cad.addLoad(n,[Fx,Fy,Fz,Mx,My,Mz])
Genera:   cad.frame(sv,sp)    cad.building(svX,svY,sp)
          cad.galpon(span,length,height,archRise,xDiv,yDiv)
Ejemplos: cad.example('truss') | 'beams' | '3d' | 'portico' | 'edificio' | 'galpon' | 'barra' | 'placa'
Placa Q4: cad.plateQ4(Lx, Ly, nx, ny, bcType, pressure, thickness, E, nu)
Params:   cad.set('Lx', 15)  cad.get()  cad.get('Lx')
Placa:    cad.setTheory('mindlin'|'kirchhoff'|'membrana')  cad.setBc('ss'|'empotrado')
Modal:    cad.modal()  cad.modal(true/false)  cad.setMode(0)  \u2014 an\xE1lisis modal + animaci\xF3n
Unidades: cad.units('SI'|'US')  \u2014 cambia sistema de unidades
Util:     cad.info()  cad.clear()  cad.help()
      `);
      },
      units(t, o) {
        t && (b = t), o && (O = o), M = jo(b, O);
        const n = Le.querySelector("#cad3d-force-unit"), l = Le.querySelector("#cad3d-length-unit");
        return n && (n.textContent = b), l && (l.textContent = O), T && nt(T), console.log(`Unidades: ${M.label} | E=${M.E.toExponential(3)} ${M.stress}`), M.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function Es() {
      return Cl(M);
    }
    function Ss() {
      return Fl(M);
    }
    let gt = {};
    function nt(t) {
      var _a2, _b, _c, _d;
      T = t, ka.val = true, St = 0, ve && Yn(), J = {};
      const o = Es()[t];
      if (o) for (const l of o) J[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      gt = {};
      const n = Ss()[t];
      if (n) for (const l of n) gt[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a2 = J.nVanosX) == null ? void 0 : _a2.val) ?? 2), a = Math.round(((_b = J.nVanosY) == null ? void 0 : _b.val) ?? 2);
        re = Array(l).fill(M.defaultSpan), ne = Array(a).fill(M.defaultSpan * 0.8);
        const c = Math.round(((_c = J.nPisos) == null ? void 0 : _c.val) ?? 3), s = ((_d = J.hPiso) == null ? void 0 : _d.val) ?? 3;
        D = Array(c).fill(s);
      }
      mo(), setTimeout(() => {
        Ya(), Ne();
      }, 50);
    }
    function ie(t) {
      var _a2, _b;
      return ((_a2 = J[t]) == null ? void 0 : _a2.val) ?? ((_b = gt[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function Ne() {
      var _a2;
      switch (T) {
        case "truss":
          Is();
          break;
        case "beams":
          ks();
          break;
        case "3d":
          Ts();
          break;
        case "frame": {
          const o = Math.round(ie("nVanos")), n = ie("spanV"), l = Math.round(ie("nPisos")), a = ie("hPiso");
          ot.frame(Array(o).fill(n), Array(l).fill(a));
          break;
        }
        case "edificio": {
          const o = ie("Lvix") || 0, n = ie("Lvdx") || 0, l = ie("Lviy") || 0, a = ie("Lvdy") || 0, c = Math.max(1, Math.round(ie("nSubViga") || 3)), s = Math.max(1, Math.round(ie("nSubCol") || 1)), i = ie("hPiso"), p = D.length > 0 ? [
            ...D
          ] : Array(Math.round(ie("nPisos"))).fill(i);
          ot.building([
            ...re
          ], [
            ...ne
          ], p, c, o, n, l, a, s);
          break;
        }
        case "galpon":
          ot.galpon(ie("span"), ie("length"), ie("height"), ie("archRise"), Math.round(ie("xDiv")), Math.round(ie("yDiv")));
          break;
        case "barra":
          Na();
          break;
        case "placa-3q":
          zs();
          break;
        case "placa-q4":
          As();
          break;
        case "losa-rect":
          Ls();
          break;
        case "losa-plana":
          Cs();
          break;
        case "viga-alta":
          Fs();
          break;
        case "muro-contencion":
          Ps();
          break;
        case "zapata":
          Rs();
          break;
        case "placa-orificios":
          Os();
          break;
        case "col-placa":
          Ns();
          break;
        case "talud":
          qs();
          break;
        case "eiffel":
          ea();
          break;
        case "arco":
          ta();
          break;
        case "puente":
          oa();
          break;
        case "twisted":
          na();
          break;
        case "burj":
          sa();
          break;
        case "opera":
          aa();
          break;
        case "diagrid":
          la();
          break;
        case "muro-q4":
          rs();
          break;
        case "viga-q4":
          ia();
          break;
        case "placa-xz":
          ra();
          break;
        case "pergola":
          ca();
          break;
      }
      if ((T === "frame" || T === "edificio" || T === "galpon") && e.nodeInputs) {
        const o = e.nodeInputs.val;
        o.supports && (e.nodeInputs.val = {
          supports: o.supports
        });
      }
      if (![
        "placa-q4",
        "placa-3q",
        "losa-rect",
        "losa-plana",
        "viga-alta",
        "muro-contencion",
        "zapata",
        "placa-orificios",
        "col-placa",
        "talud",
        "eiffel",
        "arco",
        "puente",
        "twisted",
        "burj",
        "opera",
        "diagrid",
        "muro-q4",
        "viga-q4",
        "placa-xz",
        "pergola"
      ].includes(T)) {
        if (Z.size > 0 || V.size > 0 || j) {
          const o = e.elements.val, n = o.filter((l, a) => !(Z.has(a) || V.has(a) || j && !W.has(a)));
          if (n.length !== o.length) {
            const l = /* @__PURE__ */ new Set();
            n.forEach((c) => c.forEach((s) => l.add(s)));
            const a = e.nodes.val;
            if (l.size < a.length) {
              const c = [
                ...l
              ].sort((p, r) => p - r), s = /* @__PURE__ */ new Map();
              c.forEach((p, r) => s.set(p, r)), e.nodes.val = c.map((p) => a[p]), n.forEach((p, r) => {
                n[r] = p.map((d) => s.get(d) ?? d);
              });
              const i = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val;
              if (i == null ? void 0 : i.supports) {
                const p = /* @__PURE__ */ new Map();
                i.supports.forEach((r, d) => {
                  s.has(d) && p.set(s.get(d), r);
                }), i.supports = p;
              }
              if (i == null ? void 0 : i.loads) {
                const p = /* @__PURE__ */ new Map();
                i.loads.forEach((r, d) => {
                  s.has(d) && p.set(s.get(d), r);
                }), i.loads = p;
              }
              i && (e.nodeInputs.val = i);
            }
            e.elements.val = n;
          }
        }
        setTimeout(() => {
          To(), Jn();
        }, 30);
      }
    }
    function Is() {
      const t = ie("span"), o = Math.round(ie("divisions")), n = ie("height"), l = t / o, a = [], c = [];
      for (let d = 0; d <= o; d++) a.push([
        l * d,
        0,
        0
      ]);
      for (let d = 0; d <= o; d++) a.push([
        l * d,
        0,
        n
      ]);
      const s = o + 1;
      for (let d = 0; d < o; d++) c.push([
        d,
        d + 1
      ]);
      for (let d = 0; d < o; d++) c.push([
        s + d,
        s + d + 1
      ]);
      for (let d = 0; d <= o; d++) c.push([
        d,
        s + d
      ]);
      for (let d = 0; d < o; d++) d < o / 2 ? c.push([
        d,
        s + d + 1
      ]) : c.push([
        s + d,
        d + 1
      ]);
      const i = /* @__PURE__ */ new Map([
        [
          0,
          [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        ],
        [
          Math.round(o),
          [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        ]
      ]), p = (ie("CM") ?? 0) + (ie("CV") ?? 0), r = /* @__PURE__ */ new Map();
      if (p !== 0) for (let d = 0; d <= o; d++) r.set(d, [
        0,
        0,
        p,
        0,
        0,
        0
      ]);
      e.nodes.val = a, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: r
      }), st();
    }
    function ks() {
      const t = ie("width"), o = ie("height"), n = ie("Ex") ?? 0, l = (ie("CM") ?? 0) + (ie("CV") ?? 0), a = Math.max(1, Math.round(ie("nSub") || 4)), c = [
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          o
        ],
        [
          t,
          0,
          o
        ],
        [
          t,
          0,
          0
        ]
      ], s = [];
      s.push([
        0,
        1
      ], [
        2,
        3
      ]);
      const i = [
        0,
        0,
        o
      ], p = [
        t,
        0,
        o
      ];
      let r = 1;
      for (let g = 1; g < a; g++) {
        const S = g / a, $ = c.length;
        c.push([
          i[0] + (p[0] - i[0]) * S,
          i[1] + (p[1] - i[1]) * S,
          i[2] + (p[2] - i[2]) * S
        ]), s.push([
          r,
          $
        ]), r = $;
      }
      s.push([
        r,
        2
      ]);
      const d = /* @__PURE__ */ new Map();
      if (n !== 0 && l === 0) d.set(2, [
        n,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (l !== 0 && n === 0) for (let g = 1; g < c.length; g++) g === 0 || g === 3 || d.set(g, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (n !== 0 && l !== 0) for (let g = 1; g < c.length; g++) g === 0 || g === 3 || d.set(g, [
        g === 2 ? n : 0,
        0,
        l,
        0,
        0,
        0
      ]);
      e.nodes.val = c, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map([
          [
            0,
            [
              true,
              true,
              true,
              true,
              true,
              true
            ]
          ],
          [
            3,
            [
              true,
              true,
              true,
              true,
              true,
              true
            ]
          ]
        ]),
        loads: d
      }), st();
    }
    function Ts() {
      const t = ie("dx"), o = ie("dy"), n = ie("dz"), l = Math.round(ie("stories")), a = Math.max(1, Math.round(ie("nSub") || 3)), c = [];
      for (let f = 0; f <= l; f++) c.push([
        0,
        0,
        n * f
      ], [
        t,
        0,
        n * f
      ], [
        t,
        o,
        n * f
      ], [
        0,
        o,
        n * f
      ]);
      const s = c.length, i = [
        ...c
      ], p = [];
      for (let f = 0; f < l; f++) for (let h = 0; h < 4; h++) p.push([
        f * 4 + h,
        (f + 1) * 4 + h
      ]);
      for (let f = 0; f < l; f++) {
        const h = f * 4;
        p.push([
          h,
          h + 5
        ], [
          h + 3,
          h + 6
        ], [
          h,
          h + 7
        ], [
          h + 1,
          h + 6
        ]);
      }
      const r = [];
      for (let f = 1; f <= l; f++) {
        const h = f * 4;
        r.push([
          h,
          h + 1
        ], [
          h + 1,
          h + 2
        ], [
          h + 2,
          h + 3
        ], [
          h + 3,
          h
        ], [
          h,
          h + 2
        ]);
      }
      for (const [f, h] of r) {
        const I = c[f], L = c[h];
        let z = f;
        for (let R = 1; R < a; R++) {
          const k = R / a, m = i.length;
          i.push([
            I[0] + (L[0] - I[0]) * k,
            I[1] + (L[1] - I[1]) * k,
            I[2] + (L[2] - I[2]) * k
          ]), p.push([
            z,
            m
          ]), z = m;
        }
        p.push([
          z,
          h
        ]);
      }
      const d = /* @__PURE__ */ new Map();
      for (let f = 0; f < 4; f++) d.set(f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const g = ie("Ex") ?? 0, S = (ie("CM") ?? 0) + (ie("CV") ?? 0), $ = s - 2, y = /* @__PURE__ */ new Map();
      if (g !== 0 && S === 0) y.set($, [
        g,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (S !== 0 && g === 0) for (let f = 0; f < i.length; f++) d.has(f) || y.set(f, [
        0,
        0,
        S,
        0,
        0,
        0
      ]);
      else if (g !== 0 && S !== 0) for (let f = 0; f < i.length; f++) d.has(f) || y.set(f, [
        f === $ ? g : 0,
        0,
        S,
        0,
        0,
        0
      ]);
      e.nodes.val = i, e.elements.val = p, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: y
      }), st();
    }
    function Na() {
      const t = ie("L"), o = Math.round(ie("nElem")), n = ie("F"), l = t / o, a = [], c = [];
      for (let p = 0; p <= o; p++) a.push([
        l * p,
        0,
        0
      ]);
      for (let p = 0; p < o; p++) c.push([
        p,
        p + 1
      ]);
      const s = /* @__PURE__ */ new Map([
        [
          0,
          [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        ]
      ]), i = /* @__PURE__ */ new Map([
        [
          o,
          [
            n,
            0,
            0,
            0,
            0,
            0
          ]
        ]
      ]);
      e.nodes.val = a, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: i
      }), st();
    }
    function zs() {
      const t = ie("Lx") || 15, o = ie("Ly") || 10, n = ie("meshSize") || 0.5, l = ie("q") || -3, a = ie("t") || 1, c = ie("E") || 3e7, s = ie("nu") || 0.3, i = c / (2 * (1 + s)), p = Pe === 1 ? "Membrana" : Pe === 2 ? "Kirchhoff" : "Mindlin", { nodes: r, elements: d, boundaryIndices: g } = Io({
        points: [
          [
            0,
            0,
            0
          ],
          [
            t,
            0,
            0
          ],
          [
            t,
            o,
            0
          ],
          [
            0,
            o,
            0
          ]
        ],
        polygon: [
          0,
          1,
          2,
          3
        ],
        maxMeshSize: n
      }), S = t * o, $ = l * S / r.length, y = new Map(g.map((h) => [
        h,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), f = new Map(r.map((h, I) => [
        I,
        [
          0,
          0,
          $,
          0,
          0,
          0
        ]
      ]));
      e.nodes.val = r, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: f
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(d.map((h, I) => [
          I,
          c
        ])),
        elasticitiesOrthogonal: new Map(d.map((h, I) => [
          I,
          c
        ])),
        thicknesses: new Map(d.map((h, I) => [
          I,
          a
        ])),
        poissonsRatios: new Map(d.map((h, I) => [
          I,
          s
        ])),
        shearModuli: new Map(d.map((h, I) => [
          I,
          i
        ]))
      });
      try {
        const h = Ft(r, d, e.nodeInputs.val, e.elementInputs.val);
        h && e.deformOutputs && (e.deformOutputs.val = h);
        const I = Eo(r, d, e.elementInputs.val, h);
        I && e.analyzeOutputs && (e.analyzeOutputs.val = I), console.log(`Plate 3Q [${p}]: ${r.length} nodes, ${d.length} triangles, t=${a}, E=${c}, \u03BD=${s}`);
      } catch (h) {
        console.warn("Plate 3Q analysis failed:", h.message);
      }
      setTimeout(() => It(), 50), st();
    }
    function As() {
      const t = ie("Lx") || 10, o = ie("Ly") || 10, n = Math.round(ie("nx") || 16), l = Math.round(ie("ny") || 16), a = ie("t") || 0.2, c = ie("q") || -10, s = ie("E") || 3e7, i = ie("nu") || 0.3, p = St === 1 ? "clamped" : "simply-supported", d = {
        1: 2,
        2: 1,
        3: 0
      }[Pe] ?? 0;
      return ot.plateQ4(t, o, n, l, p, c, a, s, i, d);
    }
    function Ls() {
      const t = ie("a") || 6, o = ie("b") || 4, n = Math.round(ie("nx") || 12), l = Math.round(ie("ny") || 8), a = ie("t") || 0.1, c = ie("q") || -10, s = ie("E") || 35e6, i = ie("nu") || 0.15, r = {
        1: 2,
        2: 1,
        3: 0
      }[Pe] ?? 0, d = ot.plateQ4(t, o, n, l, "simply-supported", c, a, s, i, r), g = s * a * a * a / (12 * (1 - i * i));
      let S = 0;
      for (let $ = 1; $ <= 19; $ += 2) for (let y = 1; y <= 19; y += 2) {
        const f = $ * $ / (t * t) + y * y / (o * o);
        S += 1 / ($ * y * f * f);
      }
      if (S *= 16 * Math.abs(c) / (Math.PI ** 6 * g), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${S.toExponential(6)}`), d) {
        const $ = Math.abs((Math.abs(d.centerW || 0) - S) / S * 100);
        console.log(`   WASM w_center = ${(d.centerW || 0).toExponential(6)}, error = ${$.toFixed(2)}%`);
      }
      return d;
    }
    function Cs() {
      const t = ie("t") || 0.2, o = ie("q") || -10, n = ie("E") || 35e6, l = ie("nu") || 0.2, a = ie("meshSize") || 0.6, c = [
        3.6,
        4.2,
        4.2,
        3.6
      ], s = [
        3,
        3.6,
        3
      ], i = c.reduce((x, w) => x + w, 0), p = s.reduce((x, w) => x + w, 0), r = [
        0
      ];
      for (const x of c) r.push(r[r.length - 1] + x);
      const d = [
        0
      ];
      for (const x of s) d.push(d[d.length - 1] + x);
      const g = Math.max(2, Math.round(i / a)), S = Math.max(2, Math.round(p / a)), $ = i / g, y = p / S, f = [];
      for (let x = 0; x <= S; x++) for (let w = 0; w <= g; w++) f.push([
        w * $,
        x * y
      ]);
      const h = [], I = /* @__PURE__ */ new Set();
      for (const x of r) for (const w of d) {
        let v = 1 / 0, P = 0;
        for (let K = 0; K < f.length; K++) {
          const U = Math.hypot(f[K][0] - x, f[K][1] - w);
          U < v && (v = U, P = K);
        }
        I.has(P) || (I.add(P), h.push({
          node: P,
          dof: 0,
          k: 1e15
        }));
      }
      const z = {
        1: 2,
        2: 1,
        3: 0
      }[Pe] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][z]}]: ${i}\xD7${p}m, ${g}\xD7${S} elem, ${I.size} columnas`);
      const R = performance.now(), k = ds({
        E: n,
        nu: l,
        thickness: t,
        meshLx: i,
        meshLy: p,
        meshNx: g,
        meshNy: S,
        bcType: "none",
        pressure: o,
        theoryType: z,
        springs: h
      }), m = performance.now() - R;
      console.log(`Solved in ${m.toFixed(1)} ms, w_max = ${k.maxW.toExponential(4)}`);
      const u = k.nodeResults.map((x) => [
        x.x,
        x.y,
        0
      ]), E = k.elementResults.map((x) => [
        ...x.nodes
      ]);
      e.nodes.val = u, e.elements.val = E;
      const C = /* @__PURE__ */ new Map();
      k.nodeResults.forEach((x, w) => {
        C.set(w, [
          0,
          0,
          x.w,
          x.bx,
          x.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: C
      });
      const N = /* @__PURE__ */ new Map();
      for (const x of I) N.set(x, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const G = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const x = o * i * p / u.length;
        u.forEach((w, v) => {
          N.has(v) || G.set(v, [
            0,
            0,
            x,
            0,
            0,
            0
          ]);
        });
      }
      if (e.nodeInputs && (e.nodeInputs.val = {
        supports: N,
        loads: G
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const x = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
        k.elementResults.forEach((P, K) => {
          x.set(K, [
            P.Mxx,
            P.Mxx,
            P.Mxx
          ]), w.set(K, [
            P.Myy,
            P.Myy,
            P.Myy
          ]), v.set(K, [
            P.Mxy,
            P.Mxy,
            P.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: x,
          bendingYY: w,
          bendingXY: v
        };
      }
      setTimeout(() => It(), 50), st();
    }
    function Fs() {
      const t = ie("L") || 4, o = ie("H") || 2, n = ie("t") || 0.1, l = ie("E") || 2e7, a = ie("nu") || 0.2, c = l / (2 * (1 + a)), s = ie("q") || -100, i = ie("b") || 0.8, p = ie("meshSize") || 0.2, { nodes: r, elements: d, boundaryIndices: g } = Io({
        points: [
          [
            0,
            0,
            0
          ],
          [
            t,
            0,
            0
          ],
          [
            t,
            o,
            0
          ],
          [
            0,
            o,
            0
          ]
        ],
        polygon: [
          0,
          1,
          2,
          3
        ],
        maxMeshSize: p
      }), S = r, $ = 0.4, y = /* @__PURE__ */ new Map();
      for (let m = 0; m < S.length; m++) {
        const u = S[m][0], E = S[m][1];
        Math.abs(E) < 1e-6 && (u <= $ + 1e-6 || u >= t - $ - 1e-6) && y.set(m, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const f = (t - i) / 2, h = f + i, I = [];
      for (let m = 0; m < S.length; m++) if (Math.abs(S[m][1] - o) < 1e-6) {
        const u = S[m][0];
        u >= f - 1e-6 && u <= h + 1e-6 && I.push(m);
      }
      const L = s * i / Math.max(I.length, 1), z = /* @__PURE__ */ new Map();
      for (const m of I) z.set(m, [
        0,
        L,
        0,
        0,
        0,
        0
      ]);
      const R = {
        elasticities: new Map(d.map((m, u) => [
          u,
          l
        ])),
        elasticitiesOrthogonal: new Map(d.map((m, u) => [
          u,
          l
        ])),
        thicknesses: new Map(d.map((m, u) => [
          u,
          n
        ])),
        poissonsRatios: new Map(d.map((m, u) => [
          u,
          a
        ])),
        shearModuli: new Map(d.map((m, u) => [
          u,
          c
        ]))
      }, k = {
        supports: y,
        loads: z
      };
      try {
        const m = Ft(S, d, k, R), u = Eo(S, d, R, m), E = S.map((N) => [
          N[0],
          0,
          N[1]
        ]);
        if (e.nodes.val = E, e.elements.val = d, m && m.deformations) {
          const N = /* @__PURE__ */ new Map();
          m.deformations.forEach((G, x) => {
            N.set(x, [
              G[0],
              G[2],
              G[1],
              G[3],
              G[5],
              G[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: N
          });
        }
        if (e.nodeInputs) {
          const N = /* @__PURE__ */ new Map();
          y.forEach((x, w) => N.set(w, x));
          const G = /* @__PURE__ */ new Map();
          z.forEach((x, w) => G.set(w, [
            x[0],
            x[2],
            x[1],
            x[3],
            x[5],
            x[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: N,
            loads: G
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let C = 0;
        m && m.deformations && m.deformations.forEach((N) => {
          const G = Math.sqrt(N[0] * N[0] + N[1] * N[1] + N[2] * N[2]);
          C = Math.max(C, G);
        }), console.log(`Viga Alta: ${S.length} nodos, ${d.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${a}`), console.log(`  Carga: q=${s} kN/m sobre ${i}m central`), console.log(`  max|u| = ${C.toExponential(4)}`);
      } catch (m) {
        console.warn("Viga Alta analysis failed:", m.message);
      }
      setTimeout(() => It(), 50), st();
    }
    function Ps() {
      const t = ie("H") || 4, o = ie("B") || 3, n = ie("tw") || 0.3, l = ie("tb") || 0.4, a = ie("meshSize") || 0.2, c = ie("E") || 25e6, s = ie("nu") || 0.2, i = c / (2 * (1 + s)), p = ie("gamma") || 18, r = ie("Ka") || 0.33, d = ie("Es") || 5e4, g = ie("nus") || 0.3, S = d / (2 * (1 + g)), $ = ie("kn") || 1e6, y = ie("ks") || 1e4, f = ie("gammaW") || 9.81, h = ie("Hw") || 3.5, I = ie("qs") || 0, L = St, z = o * 0.3, R = o * 0.7, k = [
        [
          -z,
          0,
          0
        ],
        [
          R,
          0,
          0
        ],
        [
          R,
          l,
          0
        ],
        [
          n,
          l,
          0
        ],
        [
          n,
          l + t,
          0
        ],
        [
          0,
          l + t,
          0
        ],
        [
          0,
          l,
          0
        ],
        [
          -z,
          l,
          0
        ]
      ];
      let m = [], u = [], E = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), N;
      if (L === 0) {
        const w = Io({
          points: k,
          polygon: [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7
          ],
          maxMeshSize: a
        });
        m = w.nodes, u = w.elements;
        for (let P = 0; P < m.length; P++) Math.abs(m[P][1]) < 1e-6 && E.set(P, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = [];
        for (let P = 0; P < m.length; P++) {
          const K = m[P][0], U = m[P][1];
          Math.abs(K - n) < a * 0.6 && U >= l - 1e-6 && v.push({
            idx: P,
            y: U
          });
        }
        v.sort((P, K) => P.y - K.y);
        for (let P = 0; P < v.length; P++) {
          const { idx: K, y: U } = v[P], le = l + t - U, te = r * p * le + r * I;
          let Q = a;
          P > 0 && P < v.length - 1 ? Q = (v[P + 1].y - v[P - 1].y) / 2 : P === 0 && v.length > 1 ? Q = (v[1].y - v[0].y) / 2 : P === v.length - 1 && v.length > 1 && (Q = (v[P].y - v[P - 1].y) / 2);
          const me = te * Q;
          Math.abs(me) > 1e-10 && C.set(K, [
            me,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        N = {
          elasticities: new Map(u.map((P, K) => [
            K,
            c
          ])),
          elasticitiesOrthogonal: new Map(u.map((P, K) => [
            K,
            c
          ])),
          thicknesses: new Map(u.map((P, K) => [
            K,
            n
          ])),
          poissonsRatios: new Map(u.map((P, K) => [
            K,
            s
          ])),
          shearModuli: new Map(u.map((P, K) => [
            K,
            i
          ]))
        };
      } else if (L === 1 || L === 2) {
        const w = R, v = l + t;
        if (L === 2) {
          const P = [
            [
              -z,
              0,
              0
            ],
            [
              w,
              0,
              0
            ],
            [
              w,
              v,
              0
            ],
            [
              n,
              v,
              0
            ],
            [
              0,
              v,
              0
            ],
            [
              0,
              l,
              0
            ],
            [
              -z,
              l,
              0
            ]
          ], K = Math.max(3, Math.ceil((v - l) / a)), U = [];
          for (let se = 0; se <= K; se++) U.push([
            n,
            l + se * (v - l) / K,
            0
          ]);
          const le = Io({
            points: [
              ...P,
              ...U
            ],
            polygon: [
              0,
              1,
              2,
              3,
              4,
              5,
              6
            ],
            maxMeshSize: a
          });
          m = le.nodes, u = le.elements;
          const te = a * 0.4, Q = [];
          for (let se = 0; se < m.length; se++) {
            const we = m[se][0], Be = m[se][1];
            Math.abs(we - n) < te && Be >= l - te && Q.push(se);
          }
          Q.sort((se, we) => m[se][1] - m[we][1]);
          const me = [
            Q[0]
          ];
          for (let se = 1; se < Q.length; se++) {
            const we = m[Q[se]][1] - m[me[me.length - 1]][1];
            Math.abs(we) > a * 0.05 && me.push(Q[se]);
          }
          Q.length = 0, Q.push(...me);
          const de = /* @__PURE__ */ new Map();
          for (const se of Q) {
            const we = m.length;
            m.push([
              m[se][0],
              m[se][1],
              m[se][2]
            ]), de.set(se, we);
          }
          const ke = u.length, Re = [];
          for (let se = 0; se < ke; se++) {
            const we = u[se], Be = (m[we[0]][0] + m[we[1]][0] + m[we[2]][0]) / 3, lt = (m[we[0]][1] + m[we[1]][1] + m[we[2]][1]) / 3, et = Be >= -z && Be <= R && lt >= 0 && lt <= l, vt = Be >= 0 && Be <= n && lt >= l && lt <= l + t, Dt = et || vt;
            if (Re.push(!Dt), !Dt) for (let yt = 0; yt < we.length; yt++) {
              const Ct = de.get(we[yt]);
              Ct !== void 0 && (we[yt] = Ct);
            }
          }
          const q = u.length;
          for (let se = 0; se < Q.length - 1; se++) {
            const we = Q[se], Be = Q[se + 1], lt = de.get(we), et = de.get(Be);
            u.push([
              Be,
              we,
              lt,
              et
            ]);
          }
          const ce = u.length - q, oe = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map();
          for (let se = 0; se < ke; se++) Re[se] ? (oe.set(se, d), pe.set(se, d), ge.set(se, g), Ie.set(se, S), ee.set(se, 1)) : (oe.set(se, c), pe.set(se, c), ge.set(se, s), Ie.set(se, i), ee.set(se, 1));
          for (let se = q; se < u.length; se++) oe.set(se, $), pe.set(se, 0), ge.set(se, 0), Ie.set(se, y), ee.set(se, 0);
          N = {
            elasticities: oe,
            elasticitiesOrthogonal: pe,
            thicknesses: ee,
            poissonsRatios: ge,
            shearModuli: Ie
          };
          for (let se = 0; se < m.length; se++) {
            const we = m[se][0], Be = m[se][1];
            Math.abs(Be) < 1e-6 ? E.set(se, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(we - w) < a * 0.1 && E.set(se, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let se = 0; se < ke; se++) {
            if (!Re[se]) continue;
            const we = u[se], Be = m[we[0]], lt = m[we[1]], et = m[we[2]], vt = Math.abs((lt[0] - Be[0]) * (et[1] - Be[1]) - (et[0] - Be[0]) * (lt[1] - Be[1])) / 2, Dt = -p * vt / 3;
            for (const yt of we) {
              const Ct = C.get(yt) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ct[1] += Dt, C.set(yt, Ct);
            }
          }
          if (I > 0) {
            const se = [];
            for (let we = 0; we < m.length; we++) {
              const Be = m[we][0], lt = m[we][1];
              Math.abs(lt - v) < a * 0.1 && Be > n - 1e-6 && se.push({
                idx: we,
                x: Be
              });
            }
            se.sort((we, Be) => we.x - Be.x);
            for (let we = 0; we < se.length; we++) {
              let Be = a;
              we > 0 && we < se.length - 1 ? Be = (se[we + 1].x - se[we - 1].x) / 2 : we === 0 && se.length > 1 ? Be = (se[1].x - se[0].x) / 2 : we === se.length - 1 && se.length > 1 && (Be = (se[we].x - se[we - 1].x) / 2);
              const lt = -I * Be, et = C.get(se[we].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              et[1] += lt, C.set(se[we].idx, et);
            }
          }
          console.log(`  Interfaz Goodman: ${Q.length} nodos interfaz, ${ce} elem interfaz, kn=${$}, ks=${y}`);
        } else {
          const P = [
            [
              -z,
              0,
              0
            ],
            [
              w,
              0,
              0
            ],
            [
              w,
              v,
              0
            ],
            [
              n,
              v,
              0
            ],
            [
              0,
              v,
              0
            ],
            [
              0,
              l,
              0
            ],
            [
              -z,
              l,
              0
            ]
          ], K = [
            [
              n,
              l,
              0
            ]
          ], U = Io({
            points: [
              ...P,
              ...K
            ],
            polygon: [
              0,
              1,
              2,
              3,
              4,
              5,
              6
            ],
            maxMeshSize: a
          });
          m = U.nodes, u = U.elements;
          const le = (q) => {
            const ce = (m[q[0]][0] + m[q[1]][0] + m[q[2]][0]) / 3, oe = (m[q[0]][1] + m[q[1]][1] + m[q[2]][1]) / 3, pe = ce >= -z && ce <= R && oe >= 0 && oe <= l, ee = ce >= 0 && ce <= n && oe >= l && oe <= l + t;
            return pe || ee;
          }, te = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), Re = [];
          for (let q = 0; q < u.length; q++) {
            const ce = le(u[q]);
            Re.push(!ce), ce ? (te.set(q, c), Q.set(q, c), de.set(q, s), ke.set(q, i), me.set(q, 1)) : (te.set(q, d), Q.set(q, d), de.set(q, g), ke.set(q, S), me.set(q, 1));
          }
          N = {
            elasticities: te,
            elasticitiesOrthogonal: Q,
            thicknesses: me,
            poissonsRatios: de,
            shearModuli: ke
          };
          for (let q = 0; q < m.length; q++) {
            const ce = m[q][0], oe = m[q][1];
            Math.abs(oe) < 1e-6 ? E.set(q, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(ce - w) < a * 0.1 && E.set(q, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let q = 0; q < u.length; q++) {
            if (!Re[q]) continue;
            const ce = u[q], oe = m[ce[0]], pe = m[ce[1]], ee = m[ce[2]], ge = Math.abs((pe[0] - oe[0]) * (ee[1] - oe[1]) - (ee[0] - oe[0]) * (pe[1] - oe[1])) / 2, Ie = -p * ge / 3;
            for (const se of ce) {
              const we = C.get(se) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              we[1] += Ie, C.set(se, we);
            }
          }
          if (I > 0) {
            const q = [];
            for (let ce = 0; ce < m.length; ce++) {
              const oe = m[ce][0], pe = m[ce][1];
              Math.abs(pe - v) < a * 0.1 && oe > n - 1e-6 && q.push({
                idx: ce,
                x: oe
              });
            }
            q.sort((ce, oe) => ce.x - oe.x);
            for (let ce = 0; ce < q.length; ce++) {
              let oe = a;
              ce > 0 && ce < q.length - 1 ? oe = (q[ce + 1].x - q[ce - 1].x) / 2 : ce === 0 && q.length > 1 ? oe = (q[1].x - q[0].x) / 2 : ce === q.length - 1 && q.length > 1 && (oe = (q[ce].x - q[ce - 1].x) / 2);
              const pe = -I * oe, ee = C.get(q[ce].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ee[1] += pe, C.set(q[ce].idx, ee);
            }
          }
        }
      }
      if (L === 3) {
        const w = Io({
          points: k,
          polygon: [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7
          ],
          maxMeshSize: a
        });
        m = w.nodes, u = w.elements;
        for (let le = 0; le < m.length; le++) Math.abs(m[le][1]) < 1e-6 && E.set(le, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = l + t, P = Math.min(h, t), K = v - P, U = [];
        for (let le = 0; le < m.length; le++) {
          const te = m[le][0], Q = m[le][1];
          Math.abs(te - n) < a * 0.6 && Q >= l - 1e-6 && U.push({
            idx: le,
            y: Q
          });
        }
        U.sort((le, te) => le.y - te.y);
        for (let le = 0; le < U.length; le++) {
          const { idx: te, y: Q } = U[le], me = Math.max(0, v - Q);
          if (me <= 0 || Q < K - 1e-6) continue;
          const de = Math.min(me, P), ke = f * de;
          let Re = a;
          le > 0 && le < U.length - 1 ? Re = (U[le + 1].y - U[le - 1].y) / 2 : le === 0 && U.length > 1 ? Re = (U[1].y - U[0].y) / 2 : le === U.length - 1 && U.length > 1 && (Re = (U[le].y - U[le - 1].y) / 2);
          const q = ke * Re;
          Math.abs(q) > 1e-10 && C.set(te, [
            q,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        N = {
          elasticities: new Map(u.map((le, te) => [
            te,
            c
          ])),
          elasticitiesOrthogonal: new Map(u.map((le, te) => [
            te,
            c
          ])),
          thicknesses: new Map(u.map((le, te) => [
            te,
            n
          ])),
          poissonsRatios: new Map(u.map((le, te) => [
            te,
            s
          ])),
          shearModuli: new Map(u.map((le, te) => [
            te,
            i
          ]))
        };
      }
      const G = {
        supports: E,
        loads: C
      }, x = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const w = Ft(m, u, G, N), v = u.filter((me) => me.length === 3), P = {};
        for (const me of Object.keys(N)) {
          const de = N[me];
          if (de && de instanceof Map) {
            const ke = /* @__PURE__ */ new Map();
            let Re = 0;
            for (let q = 0; q < u.length; q++) u[q].length === 3 && (de.has(q) && ke.set(Re, de.get(q)), Re++);
            P[me] = ke;
          }
        }
        const K = Eo(m, v, P, w), U = m.map((me) => [
          me[0],
          0,
          me[1]
        ]);
        if (e.nodes.val = U, e.elements.val = v, w && w.deformations) {
          const me = /* @__PURE__ */ new Map();
          w.deformations.forEach((de, ke) => {
            me.set(ke, [
              de[0],
              de[2],
              de[1],
              de[3],
              de[5],
              de[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: me
          });
        }
        const le = /* @__PURE__ */ new Map();
        E.forEach((me, de) => le.set(de, me));
        const te = /* @__PURE__ */ new Map();
        C.forEach((me, de) => te.set(de, [
          me[0],
          me[2],
          me[1],
          me[3],
          me[5],
          me[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: le,
          loads: te
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let Q = 0;
        w && w.deformations && w.deformations.forEach((me) => {
          const de = Math.sqrt(me[0] * me[0] + me[1] * me[1] + me[2] * me[2]);
          Q = Math.max(Q, de);
        }), console.log(`Muro Contencion [${x[L]}]: ${m.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${r}, gamma=${p}, qs=${I}`), L === 1 && console.log(`  Es=${d}, nus=${g}`), L === 2 && console.log(`  Es=${d}, nus=${g}, kn=${$}, ks=${y}`), L === 3 && console.log(`  gammaW=${f}, Hw=${h}`), console.log(`  max|u| = ${Q.toExponential(4)}`);
      } catch (w) {
        console.warn("Muro Contencion failed:", w.message);
      }
      setTimeout(() => It(), 50), st();
    }
    function Rs() {
      const t = ie("Lx") || 2, o = ie("Ly") || 2, n = ie("t") || 0.5, l = ie("colA") || 0.4, a = ie("colH") || 1.5, c = Math.round(ie("nx") || 8), s = Math.round(ie("ny") || 8), i = ie("E") || 25e6, p = ie("nu") || 0.2, r = ie("P") || -500, d = ie("Mx") || 0, g = ie("My") || 0, S = ie("ks") || 2e4, $ = t / c, y = o / s, f = t / 2, h = o / 2, I = l / 2, L = [];
      for (let E = 0; E <= s; E++) for (let C = 0; C <= c; C++) {
        const N = E * (c + 1) + C;
        let G = $, x = y;
        (C === 0 || C === c) && (G = $ / 2), (E === 0 || E === s) && (x = y / 2), L.push({
          node: N,
          dof: 0,
          k: S * G * x
        });
      }
      let z = 0;
      for (let E = 0; E <= s; E++) for (let C = 0; C <= c; C++) Math.abs(C * $ - f) <= I + 1e-6 && Math.abs(E * y - h) <= I + 1e-6 && z++;
      const R = r / Math.max(z, 1), k = [];
      for (let E = 0; E <= s; E++) for (let C = 0; C <= c; C++) {
        const N = C * $, G = E * y;
        Math.abs(N - f) <= I + 1e-6 && Math.abs(G - h) <= I + 1e-6 && k.push({
          node: E * (c + 1) + C,
          dof: 0,
          value: R
        });
      }
      if (Math.abs(d) > 1e-6) {
        const E = I > 1e-6 ? I : y, C = d / E;
        for (let N = 0; N <= s; N++) for (let G = 0; G <= c; G++) {
          const x = G * $, w = N * y;
          if (Math.abs(x - f) <= I + 1e-6 && Math.abs(w - h) <= I + 1e-6) {
            const v = w - h;
            if (Math.abs(v) > 1e-6) {
              const P = v > 0 ? 1 : -1;
              k.push({
                node: N * (c + 1) + G,
                dof: 0,
                value: P * C / z * 2
              });
            }
          }
        }
      }
      if (Math.abs(g) > 1e-6) {
        const E = I > 1e-6 ? I : $, C = g / E;
        for (let N = 0; N <= s; N++) for (let G = 0; G <= c; G++) {
          const x = G * $, w = N * y;
          if (Math.abs(x - f) <= I + 1e-6 && Math.abs(w - h) <= I + 1e-6) {
            const v = x - f;
            if (Math.abs(v) > 1e-6) {
              const P = v > 0 ? 1 : -1;
              k.push({
                node: N * (c + 1) + G,
                dof: 0,
                value: P * C / z * 2
              });
            }
          }
        }
      }
      const u = {
        1: 2,
        2: 1,
        3: 0
      }[Pe] ?? 1;
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${c}x${s} elem`), console.log(`  col=${l}m, P=${r}, Mx=${d}, My=${g}, ks=${S}`);
      try {
        const E = ds({
          E: i,
          nu: p,
          thickness: n,
          meshLx: t,
          meshLy: o,
          meshNx: c,
          meshNy: s,
          bcType: "none",
          pressure: 0,
          theoryType: u,
          springs: L,
          pointLoads: k
        });
        console.log(`  Solved: w_max = ${E.maxW.toExponential(4)}`);
        const C = E.nodeResults.map((K) => [
          K.x,
          K.y,
          0
        ]), N = C.length;
        C.push([
          f - I,
          h - I,
          0
        ]), C.push([
          f + I,
          h - I,
          0
        ]), C.push([
          f + I,
          h + I,
          0
        ]), C.push([
          f - I,
          h + I,
          0
        ]), C.push([
          f - I,
          h - I,
          a
        ]), C.push([
          f + I,
          h - I,
          a
        ]), C.push([
          f + I,
          h + I,
          a
        ]), C.push([
          f - I,
          h + I,
          a
        ]);
        const G = E.elementResults.map((K) => [
          ...K.nodes
        ]);
        G.push([
          N,
          N + 4
        ]), G.push([
          N + 1,
          N + 5
        ]), G.push([
          N + 2,
          N + 6
        ]), G.push([
          N + 3,
          N + 7
        ]), G.push([
          N + 4,
          N + 5
        ]), G.push([
          N + 5,
          N + 6
        ]), G.push([
          N + 6,
          N + 7
        ]), G.push([
          N + 7,
          N + 4
        ]), G.push([
          N,
          N + 1
        ]), G.push([
          N + 1,
          N + 2
        ]), G.push([
          N + 2,
          N + 3
        ]), G.push([
          N + 3,
          N
        ]), e.nodes.val = C, e.elements.val = G;
        const x = /* @__PURE__ */ new Map();
        E.nodeResults.forEach((K, U) => {
          x.set(U, [
            0,
            0,
            K.w,
            K.bx,
            K.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: x
        });
        const w = /* @__PURE__ */ new Map();
        E.nodeResults.forEach((K, U) => {
          const le = K.x, te = K.y;
          (le < 1e-6 || le > t - 1e-6 || te < 1e-6 || te > o - 1e-6) && w.set(U, [
            false,
            false,
            true,
            false,
            false,
            false
          ]);
        });
        const v = /* @__PURE__ */ new Map();
        if (v.set(N + 4, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), v.set(N + 5, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), v.set(N + 6, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), v.set(N + 7, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), e.nodeInputs && (e.nodeInputs.val = {
          supports: w,
          loads: v
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const K = E.elementResults.length, U = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map();
          E.elementResults.forEach((Q, me) => {
            U.set(me, [
              Q.Mxx,
              Q.Mxx,
              Q.Mxx
            ]), le.set(me, [
              Q.Myy,
              Q.Myy,
              Q.Myy
            ]), te.set(me, [
              Q.Mxy,
              Q.Mxy,
              Q.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: U,
            bendingYY: le,
            bendingXY: te
          };
        }
        const P = tt();
        P && (P.settings.shellResults.val = "bendingXX");
      } catch (E) {
        console.warn("Zapata solver failed:", E.message);
      }
      setTimeout(() => It(), 50), st();
    }
    function Os() {
      const t = ie("Lx") || 0.4, o = ie("Ly") || 0.4, n = ie("t") || 0.025, l = ie("dBolt") || 0.022, a = ie("sx") || 0.28, c = ie("sy") || 0.28, s = ie("colA") || 0.2, i = ie("meshSize") || 8e-3, p = ie("E") || 2e8, r = ie("nu") || 0.3, d = p / (2 * (1 + r)), g = ie("P") || -200, S = Math.round(ie("nBolts") || 4), $ = t / 2, y = o / 2, f = l / 2, h = s / 2, I = [];
      S >= 4 && (I.push([
        $ - a / 2,
        y - c / 2
      ]), I.push([
        $ + a / 2,
        y - c / 2
      ]), I.push([
        $ + a / 2,
        y + c / 2
      ]), I.push([
        $ - a / 2,
        y + c / 2
      ])), S >= 6 && (I.push([
        $,
        y - c / 2
      ]), I.push([
        $,
        y + c / 2
      ])), S >= 8 && (I.push([
        $ - a / 2,
        y
      ]), I.push([
        $ + a / 2,
        y
      ]));
      const { nodes: L, elements: z } = Io({
        points: [
          [
            0,
            0,
            0
          ],
          [
            t,
            0,
            0
          ],
          [
            t,
            o,
            0
          ],
          [
            0,
            o,
            0
          ]
        ],
        polygon: [
          0,
          1,
          2,
          3
        ],
        maxMeshSize: i
      }), R = (x, w) => {
        for (const [v, P] of I) if ((x - v) * (x - v) + (w - P) * (w - P) < f * f) return true;
        return false;
      }, k = z.filter((x) => {
        const w = (L[x[0]][0] + L[x[1]][0] + L[x[2]][0]) / 3, v = (L[x[0]][1] + L[x[1]][1] + L[x[2]][1]) / 3;
        return !R(w, v);
      }), m = L, u = /* @__PURE__ */ new Map();
      for (let x = 0; x < m.length; x++) {
        const w = m[x][0], v = m[x][1];
        for (const [P, K] of I) {
          const U = Math.sqrt((w - P) * (w - P) + (v - K) * (v - K));
          U >= f * 0.7 && U <= f * 1.5 && u.set(x, [
            true,
            true,
            true,
            false,
            false,
            false
          ]);
        }
      }
      const E = /* @__PURE__ */ new Map();
      let C = 0;
      for (let x = 0; x < m.length; x++) {
        const w = m[x][0], v = m[x][1];
        Math.abs(w - $) <= h && Math.abs(v - y) <= h && C++;
      }
      const N = g / Math.max(C, 1);
      for (let x = 0; x < m.length; x++) {
        const w = m[x][0], v = m[x][1];
        if (Math.abs(w - $) <= h && Math.abs(v - y) <= h) {
          const P = E.get(x) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          P[2] += N, E.set(x, P);
        }
      }
      const G = {
        elasticities: new Map(k.map((x, w) => [
          w,
          p
        ])),
        elasticitiesOrthogonal: new Map(k.map((x, w) => [
          w,
          p
        ])),
        thicknesses: new Map(k.map((x, w) => [
          w,
          n
        ])),
        poissonsRatios: new Map(k.map((x, w) => [
          w,
          r
        ])),
        shearModuli: new Map(k.map((x, w) => [
          w,
          d
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${S} pernos d=${l * 1e3}mm`), console.log(`  P=${g} kN, col=${s * 1e3}mm, mesh=${i * 1e3}mm`), console.log(`  ${k.length} triangulos, ${m.length} nodos`);
      try {
        const x = Ft(m, k, {
          supports: u,
          loads: E
        }, G), w = Eo(m, k, G, x);
        e.nodes.val = m, e.elements.val = k, x && e.deformOutputs && (e.deformOutputs.val = x), e.nodeInputs && (e.nodeInputs.val = {
          supports: u,
          loads: E
        }), e.elementInputs && (e.elementInputs.val = {}), w && e.analyzeOutputs && (e.analyzeOutputs.val = w);
        let v = 0;
        x && x.deformations && x.deformations.forEach((P) => {
          const K = Math.sqrt(P[0] * P[0] + P[1] * P[1] + P[2] * P[2]);
          v = Math.max(v, K);
        }), console.log(`  max|u| = ${v.toExponential(4)}`);
      } catch (x) {
        console.warn("Placa Base failed:", x.message);
      }
      setTimeout(() => It(), 50), st();
    }
    function Ns() {
      const t = ie("colB") || 0.3, o = ie("colH") || 0.3, n = ie("colT") || 8e-3, l = ie("colLen") || 1.5, a = ie("Lx") || 0.45, c = ie("Ly") || 0.45, s = ie("tPlaca") || 0.025, i = ie("dBolt") || 0.022, p = ie("sx") || 0.32, r = ie("sy") || 0.32, d = Math.round(ie("nSubColV") || 6), g = Math.round(ie("nSubColH") || 4), S = Math.round(ie("nSubPlaca") || 10), $ = ie("E") || 2e8, y = ie("nu") || 0.3, f = $ / (2 * (1 + y)), h = ie("P") || -300, I = a / 2, L = c / 2, z = i / 2, R = t / 2, k = o / 2, m = [], u = [], E = S, C = a / E, N = c / E, G = (pe, ee) => ee * (E + 1) + pe;
      for (let pe = 0; pe <= E; pe++) for (let ee = 0; ee <= E; ee++) m.push([
        ee * C,
        pe * N,
        0
      ]);
      const x = [
        [
          I - p / 2,
          L - r / 2
        ],
        [
          I + p / 2,
          L - r / 2
        ],
        [
          I + p / 2,
          L + r / 2
        ],
        [
          I - p / 2,
          L + r / 2
        ]
      ], w = (pe, ee) => {
        for (const [ge, Ie] of x) if ((pe - ge) * (pe - ge) + (ee - Ie) * (ee - Ie) < z * z) return true;
        return false;
      }, v = u.length;
      for (let pe = 0; pe < E; pe++) for (let ee = 0; ee < E; ee++) {
        const ge = (ee + 0.5) * C, Ie = (pe + 0.5) * N;
        w(ge, Ie) || u.push([
          G(ee, pe),
          G(ee + 1, pe),
          G(ee + 1, pe + 1),
          G(ee, pe + 1)
        ]);
      }
      const P = u.length - v, K = d, U = g, le = [
        [
          I - R,
          L - k
        ],
        [
          I + R,
          L - k
        ],
        [
          I + R,
          L + k
        ],
        [
          I - R,
          L + k
        ]
      ], te = u.length, Q = [
        [
          0,
          1
        ],
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          0
        ]
      ], me = (pe, ee) => {
        for (let ge = 0; ge < (E + 1) * (E + 1); ge++) if (Math.abs(m[ge][0] - pe) < C * 0.3 && Math.abs(m[ge][1] - ee) < N * 0.3 && Math.abs(m[ge][2]) < 1e-6) return ge;
        return -1;
      };
      for (const [pe, ee] of Q) {
        const [ge, Ie] = le[pe], [se, we] = le[ee], Be = [];
        for (let lt = 0; lt <= K; lt++) {
          const et = [], vt = lt / K * l;
          for (let Dt = 0; Dt <= U; Dt++) {
            const yt = Dt / U, Ct = ge + yt * (se - ge), go = Ie + yt * (we - Ie);
            if (lt === 0) {
              const jt = me(Ct, go);
              if (jt >= 0) {
                et.push(jt);
                continue;
              }
            }
            let Kt = -1;
            for (let jt = 0; jt < m.length; jt++) if (Math.abs(m[jt][0] - Ct) < 1e-6 && Math.abs(m[jt][1] - go) < 1e-6 && Math.abs(m[jt][2] - vt) < 1e-6) {
              Kt = jt;
              break;
            }
            Kt >= 0 ? et.push(Kt) : (et.push(m.length), m.push([
              Ct,
              go,
              vt
            ]));
          }
          Be.push(et);
        }
        for (let lt = 0; lt < K; lt++) for (let et = 0; et < U; et++) u.push([
          Be[lt][et],
          Be[lt][et + 1],
          Be[lt + 1][et + 1],
          Be[lt + 1][et]
        ]);
      }
      const de = u.length - te, ke = /* @__PURE__ */ new Map();
      for (let pe = 0; pe < (E + 1) * (E + 1); pe++) {
        const ee = m[pe][0], ge = m[pe][1];
        for (const [Ie, se] of x) {
          const we = Math.sqrt((ee - Ie) * (ee - Ie) + (ge - se) * (ge - se));
          we >= z * 0.5 && we <= z * 2 && ke.set(pe, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const Re = /* @__PURE__ */ new Map(), q = [];
      for (let pe = 0; pe < m.length; pe++) Math.abs(m[pe][2] - l) < 1e-6 && q.push(pe);
      const ce = h / Math.max(q.length, 1);
      for (const pe of q) Re.set(pe, [
        0,
        0,
        ce,
        0,
        0,
        0
      ]);
      const oe = {
        elasticities: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map()
      };
      for (let pe = v; pe < v + P; pe++) oe.elasticities.set(pe, $), oe.poissonsRatios.set(pe, y), oe.thicknesses.set(pe, s), oe.shearModuli.set(pe, f);
      for (let pe = te; pe < te + de; pe++) oe.elasticities.set(pe, $), oe.poissonsRatios.set(pe, y), oe.thicknesses.set(pe, n), oe.shearModuli.set(pe, f);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${a * 1e3}x${c * 1e3}mm, t=${s * 1e3}mm, 4 pernos d=${i * 1e3}mm`), console.log(`  ${P} Q4 placa + ${de} Q4 columna = ${u.length} total`), console.log(`  ${m.length} nodos, P=${h} kN`);
      try {
        const pe = Ft(m, u, {
          supports: ke,
          loads: Re
        }, oe), ee = Eo(m, u, oe, pe);
        e.nodes.val = m, e.elements.val = u, pe && e.deformOutputs && (e.deformOutputs.val = pe), e.nodeInputs && (e.nodeInputs.val = {
          supports: ke,
          loads: Re
        }), e.elementInputs && (e.elementInputs.val = oe), ee && e.analyzeOutputs && (e.analyzeOutputs.val = ee);
        let ge = 0;
        (pe == null ? void 0 : pe.deformations) && pe.deformations.forEach((Ie) => {
          const se = Math.sqrt(Ie[0] * Ie[0] + Ie[1] * Ie[1] + Ie[2] * Ie[2]);
          ge = Math.max(ge, se);
        }), console.log(`  max|u| = ${ge.toExponential(4)}`);
      } catch (pe) {
        console.warn("Col+Placa failed:", pe.message), e.nodes.val = m, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
          supports: ke,
          loads: Re
        });
      }
      setTimeout(() => It(), 50), st();
    }
    function qs() {
      const t = ie("H") || 6, o = ie("angle") || 45, n = ie("bTop") || 3, l = ie("bBot") || 3, a = ie("meshSize") || 2, c = ie("E") || 5e4, s = ie("nu") || 0.3, i = ie("gamma") || 18, p = ie("c") || 15, r = ie("phi") || 30, d = ie("qs") || 0, g = t / Math.tan(o * Math.PI / 180), S = l + g + n, $ = t, y = [
        [
          0,
          -$,
          0
        ],
        [
          S,
          -$,
          0
        ],
        [
          S,
          t,
          0
        ],
        [
          l + g,
          t,
          0
        ],
        [
          l,
          0,
          0
        ],
        [
          0,
          0,
          0
        ]
      ], { nodes: f, elements: h } = Io({
        points: y,
        polygon: [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        maxMeshSize: a
      }), I = f, L = [], z = /* @__PURE__ */ new Map();
      for (let k = 0; k < I.length; k++) {
        const m = I[k][0], u = I[k][1];
        Math.abs(u + $) < 1e-6 ? (L.push({
          node: k,
          fixX: true,
          fixY: true
        }), z.set(k, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(m) < 1e-6 || Math.abs(m - S) < 1e-6) && (L.push({
          node: k,
          fixX: true,
          fixY: false
        }), z.set(k, [
          true,
          false,
          true,
          true,
          true,
          true
        ]));
      }
      const R = t - a * 0.3;
      try {
        const k = I.map((w) => [
          w[0],
          w[1]
        ]), m = h.map((w) => [
          w[0],
          w[1],
          w[2]
        ]), u = gl({
          nodes: k,
          elements: m,
          E: c,
          nu: s,
          gamma: i,
          c: p,
          phi: r,
          thickness: 1,
          supports: L,
          surcharge: d,
          surfaceYThreshold: R
        }), E = I.map((w) => [
          w[0],
          0,
          w[1]
        ]);
        e.nodes.val = E, e.elements.val = h;
        const C = /* @__PURE__ */ new Map();
        for (let w = 0; w < u.displacements.length; w++) {
          const [v, P] = u.displacements[w];
          C.set(w, [
            v,
            0,
            P,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: C
        }), e.nodeInputs && (e.nodeInputs.val = {
          supports: z
        }), e.elementInputs && (e.elementInputs.val = {});
        const N = /* @__PURE__ */ new Map();
        for (let w = 0; w < u.plasticStrain.length; w++) {
          const v = u.plasticStrain[w];
          N.set(w, [
            v,
            v,
            v
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: N
        });
        let G = 0;
        for (const [w, v] of u.displacements) {
          const P = Math.sqrt(w * w + v * v);
          G = Math.max(G, P);
        }
        let x = 0;
        for (const w of u.plasticStrain) x = Math.max(x, w);
        console.log(`Talud SRM: ${I.length} nodos, ${h.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${p} kPa, \u03C6=${r}\xB0, \u03B3=${i}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${u.fos.toFixed(3)}`), console.log(`  max|u| = ${G.toExponential(4)}`), console.log(`  max \u03B5_pl = ${x.toExponential(4)}`), u.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : u.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (k) {
        console.warn("Talud SRM failed:", k.message);
      }
      setTimeout(() => It(), 50), st();
    }
    let xo = null, qt = null, vo = null;
    function qa() {
      let t = document.getElementById("sections");
      if (!t) {
        t = document.createElement("div"), t.id = "sections";
        const o = document.getElementById("parameters");
        let n = document.getElementById("right-panels-wrapper");
        if (!n && o) {
          n = document.createElement("div"), n.id = "right-panels-wrapper", n.style.cssText = "position:absolute;bottom:0;right:0;z-index:3;max-height:95vh;display:flex;flex-direction:row;gap:0;align-items:flex-end;pointer-events:none;";
          let l = document.getElementById("luces-panel");
          l || (l = document.createElement("div"), l.id = "luces-panel", l.style.cssText = "width:180px;max-height:90vh;overflow-y:auto;pointer-events:auto;"), o.style.cssText = "width:240px;position:static;max-height:90vh;overflow-y:auto;pointer-events:auto;";
          const a = o.parentElement;
          a.removeChild(o), n.appendChild(t), n.appendChild(l), n.appendChild(o), a.appendChild(n);
        }
        n ? t.style.cssText = "width:200px;max-height:90vh;overflow-y:auto;pointer-events:auto;" : (t.style.cssText = "position:absolute;bottom:0;right:316px;width:250px;z-index:3;max-height:80vh;overflow-y:auto;", document.body.appendChild(t));
      }
      return t;
    }
    function zt(t) {
      const o = nn.find((n) => n.id === O);
      return t / o.toM;
    }
    function At(t) {
      const o = nn.find((n) => n.id === O);
      return t * o.toM;
    }
    function Oo(t) {
      const o = hs.find((l) => l.id === X.forceId), n = nn.find((l) => l.id === X.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function Hn(t) {
      const o = hs.find((l) => l.id === X.forceId), n = nn.find((l) => l.id === X.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function jn() {
      return X.label;
    }
    function _a() {
      switch (nn.find((o) => o.id === O).id) {
        case "m":
          return [
            0.1,
            2,
            0.05
          ];
        case "cm":
          return [
            10,
            200,
            5
          ];
        case "mm":
          return [
            100,
            2e3,
            50
          ];
        case "in":
          return [
            4,
            80,
            1
          ];
        case "ft":
          return [
            0.3,
            6,
            0.1
          ];
      }
    }
    function Da() {
      const t = Oo(20594), o = Oo(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function _s(t, o, n, l, a) {
      const c = _e.steelVigaType, s = c === 0 ? Tn() : zn();
      if (_e.vigaMat === 0) {
        for (let i = 0; i < o.length; i++) {
          const p = o[i], r = `b${n}${i}`, d = `h${n}${i}`, g = {};
          g[r] = +zt(p.b).toFixed(2), g[d] = +zt(p.h).toFixed(2), t.addBinding(g, r, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${i + 1}`
          }), t.addBinding(g, d, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${i + 1}`
          });
        }
        t.on("change", (i) => {
          var _a2;
          const p = (_a2 = i.target) == null ? void 0 : _a2.key, r = p == null ? void 0 : p.match(new RegExp(`^b${n}(\\d+)$`)), d = p == null ? void 0 : p.match(new RegExp(`^h${n}(\\d+)$`));
          r && (o[parseInt(r[1])].b = At(i.value), Ne()), d && (o[parseInt(d[1])].h = At(i.value), Ne());
        });
      } else if (c <= 1) {
        for (let i = 0; i < o.length; i++) {
          const p = {};
          p[`p${n}${i}`] = o[i].profileIdx ?? 0, t.addBinding(p, `p${n}${i}`, {
            label: `sv${n}${i + 1}`,
            options: s
          });
        }
        t.on("change", (i) => {
          var _a2, _b;
          const r = (_b = (_a2 = i.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          r && (o[parseInt(r[1])].profileIdx = i.value, Ne());
        });
      } else if (c === 2) {
        for (let i = 0; i < o.length; i++) {
          const p = o[i], r = {}, d = `${n}${i}`;
          r[`bf${d}`] = +zt(p.bf ?? 0.2).toFixed(3), r[`h${d}`] = +zt(p.hf ?? 0.4).toFixed(3), r[`tf${d}`] = +zt(p.tf ?? 0.015).toFixed(3), r[`tw${d}`] = +zt(p.tw ?? 0.01).toFixed(3), t.addBinding(r, `bf${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${n}${i + 1}`
          }), t.addBinding(r, `h${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${i + 1}`
          }), t.addBinding(r, `tf${d}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `tf sv${n}${i + 1}`
          }), t.addBinding(r, `tw${d}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `tw sv${n}${i + 1}`
          });
        }
        t.on("change", (i) => {
          var _a2;
          const p = (_a2 = i.target) == null ? void 0 : _a2.key;
          for (let r = 0; r < o.length; r++) {
            const d = `${n}${r}`;
            p === `bf${d}` && (o[r].bf = At(i.value), Ne()), p === `h${d}` && (o[r].hf = At(i.value), Ne()), p === `tf${d}` && (o[r].tf = At(i.value), Ne()), p === `tw${d}` && (o[r].tw = At(i.value), Ne());
          }
        });
      } else {
        for (let i = 0; i < o.length; i++) {
          const p = o[i], r = {}, d = `${n}${i}`;
          r[`bc${d}`] = +zt(p.bc ?? 0.2).toFixed(3), r[`hc${d}`] = +zt(p.hc ?? 0.3).toFixed(3), r[`t${d}`] = +zt(p.t ?? 8e-3).toFixed(3), t.addBinding(r, `bc${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${i + 1}`
          }), t.addBinding(r, `hc${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${i + 1}`
          }), t.addBinding(r, `t${d}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `t sv${n}${i + 1}`
          });
        }
        t.on("change", (i) => {
          var _a2;
          const p = (_a2 = i.target) == null ? void 0 : _a2.key;
          for (let r = 0; r < o.length; r++) {
            const d = `${n}${r}`;
            p === `bc${d}` && (o[r].bc = At(i.value), Ne()), p === `hc${d}` && (o[r].hc = At(i.value), Ne()), p === `t${d}` && (o[r].t = At(i.value), Ne());
          }
        });
      }
    }
    function No() {
      var _a2;
      if (qt) {
        try {
          qt.dispose();
        } catch {
        }
        qt = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), T !== "edificio" && T !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = qa();
      if (!o) return;
      o.style.display = "";
      const n = M, l = Math.round(((_a2 = J.nPisos) == null ? void 0 : _a2.val) ?? 3), a = _a(), c = Da(), s = re.length || 1, i = ne.length || 1;
      for (; _e.perFloor.length < l; ) {
        const m = _e.perFloor.length > 0 ? JSON.parse(JSON.stringify(_e.perFloor[_e.perFloor.length - 1])) : ho(s, i);
        _e.perFloor.push(m);
      }
      _e.perFloor.length > l && (_e.perFloor.length = l);
      for (const m of _e.perFloor) {
        for (; m.vigasX.length < s; ) m.vigasX.push(m.vigasX.length > 0 ? {
          ...m.vigasX[m.vigasX.length - 1]
        } : bt());
        for (m.vigasX.length > s && (m.vigasX.length = s); m.vigasY.length < i; ) m.vigasY.push(m.vigasY.length > 0 ? {
          ...m.vigasY[m.vigasY.length - 1]
        } : bt());
        m.vigasY.length > i && (m.vigasY.length = i);
      }
      qt = new mn({
        title: `${A("Secciones")} (${n.label})`,
        container: o
      });
      const p = {
        colMat: _e.colMat
      };
      if (qt.addBinding(p, "colMat", {
        label: A("Col Material"),
        options: {
          [A("Hormigon")]: 0,
          [A("Acero")]: 1,
          CFT: 2
        }
      }).on("change", (m) => {
        _e.colMat = m.value, No(), Ne();
      }), _e.colMat === 0) {
        const m = {
          forma: _e.colShape
        };
        qt.addBinding(m, "forma", {
          label: A("Col forma"),
          options: {
            [A("Rectangular")]: 0,
            [A("Circular")]: 1
          }
        }).on("change", (E) => {
          _e.colShape = E.value, No(), Ne();
        });
        const u = {
          fc: +Oo(_e.fc).toFixed(1)
        };
        qt.addBinding(u, "fc", {
          min: c[0],
          max: c[1],
          step: c[2],
          label: `f'c col (${jn()})`
        }), qt.on("change", (E) => {
          var _a3;
          ((_a3 = E.target) == null ? void 0 : _a3.key) === "fc" && (_e.fc = Hn(E.value), Ne());
        });
      } else if (_e.colMat === 1) {
        const m = {
          colType: _e.steelColType
        };
        qt.addBinding(m, "colType", {
          label: A("Col tipo"),
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            [A("Tubular")]: 3
          }
        }).on("change", (u) => {
          _e.steelColType = u.value, No(), Ne();
        });
      }
      qt.addBlade({
        view: "separator"
      });
      const r = {
        vigaMat: _e.vigaMat
      };
      if (qt.addBinding(r, "vigaMat", {
        label: A("Viga Material"),
        options: {
          [A("Hormigon")]: 0,
          [A("Acero")]: 1
        }
      }).on("change", (m) => {
        _e.vigaMat = m.value, No(), Ne();
      }), _e.vigaMat === 1) {
        const m = {
          vigaType: _e.steelVigaType
        };
        qt.addBinding(m, "vigaType", {
          label: A("Viga tipo"),
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            [A("Tubular")]: 3
          }
        }).on("change", (u) => {
          _e.steelVigaType = u.value, No(), Ne();
        });
      }
      const d = _e.steelColType === 0 ? Tn() : zn();
      _e.steelVigaType === 0 ? Tn() : zn();
      const g = O === "m" ? [
        5e-3,
        0.1,
        1e-3
      ] : O === "cm" ? [
        0.5,
        10,
        0.1
      ] : O === "mm" ? [
        5,
        100,
        1
      ] : O === "in" ? [
        0.2,
        4,
        0.05
      ] : [
        0.01,
        0.5,
        5e-3
      ];
      for (let m = 0; m < l; m++) {
        const u = _e.perFloor[m], E = qt.addFolder({
          title: `${A("Piso")} ${m + 1}`,
          expanded: m < 2
        });
        if (_e.colMat === 0) if (_e.colShape === 1) {
          const C = {
            dCol: +zt(u.dCol).toFixed(2)
          };
          E.addBinding(C, "dCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "d col"
          }), E.on("change", (N) => {
            var _a3;
            ((_a3 = N.target) == null ? void 0 : _a3.key) === "dCol" && (u.dCol = At(N.value), Ne());
          });
        } else {
          const C = {
            bCol: +zt(u.bCol).toFixed(2),
            hCol: +zt(u.hCol).toFixed(2)
          };
          E.addBinding(C, "bCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "b col"
          }), E.addBinding(C, "hCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "h col"
          }), E.on("change", (N) => {
            var _a3, _b;
            ((_a3 = N.target) == null ? void 0 : _a3.key) === "bCol" && (u.bCol = At(N.value), Ne()), ((_b = N.target) == null ? void 0 : _b.key) === "hCol" && (u.hCol = At(N.value), Ne());
          });
        }
        else if (_e.colMat === 1) if (_e.steelColType <= 1) {
          const C = {
            col: u.colProfileIdx
          };
          E.addBinding(C, "col", {
            label: A("Columna"),
            options: d
          }).on("change", (N) => {
            u.colProfileIdx = N.value, Ne();
          });
        } else if (_e.steelColType === 2) {
          const C = {
            bf: +zt(u.colBf ?? 0.3).toFixed(3),
            h: +zt(u.colHf ?? 0.3).toFixed(3),
            tf: +zt(u.colTf ?? 0.02).toFixed(3),
            tw: +zt(u.colTw ?? 0.012).toFixed(3)
          };
          E.addBinding(C, "bf", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col bf"
          }), E.addBinding(C, "h", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), E.addBinding(C, "tf", {
            min: g[0],
            max: g[1],
            step: g[2],
            label: "Col tf"
          }), E.addBinding(C, "tw", {
            min: g[0],
            max: g[1],
            step: g[2],
            label: "Col tw"
          }), E.on("change", (N) => {
            var _a3, _b, _c, _d;
            ((_a3 = N.target) == null ? void 0 : _a3.key) === "bf" && (u.colBf = At(N.value), Ne()), ((_b = N.target) == null ? void 0 : _b.key) === "h" && (u.colHf = At(N.value), Ne()), ((_c = N.target) == null ? void 0 : _c.key) === "tf" && (u.colTf = At(N.value), Ne()), ((_d = N.target) == null ? void 0 : _d.key) === "tw" && (u.colTw = At(N.value), Ne());
          });
        } else {
          const C = {
            bc: +zt(u.colBc ?? 0.3).toFixed(3),
            hc: +zt(u.colHc ?? 0.3).toFixed(3),
            t: +zt(u.colT ?? 0.01).toFixed(3)
          };
          E.addBinding(C, "bc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col b"
          }), E.addBinding(C, "hc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), E.addBinding(C, "t", {
            min: g[0],
            max: g[1],
            step: g[2],
            label: "Col t"
          }), E.on("change", (N) => {
            var _a3, _b, _c;
            ((_a3 = N.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = At(N.value), Ne()), ((_b = N.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = At(N.value), Ne()), ((_c = N.target) == null ? void 0 : _c.key) === "t" && (u.colT = At(N.value), Ne());
          });
        }
        else {
          const C = {
            bc: +zt(u.colBc ?? 0.3).toFixed(3),
            hc: +zt(u.colHc ?? 0.3).toFixed(3),
            t: +zt(u.colT ?? 0.01).toFixed(3),
            Es: +Oo(u.colEs ?? 2e8).toFixed(0),
            nuS: u.colNuS ?? 0.3,
            fc: +Oo(u.colFc ?? 28e3).toFixed(1),
            nuC: u.colNuC ?? 0.2
          };
          E.addBinding(C, "bc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col b"
          }), E.addBinding(C, "hc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), E.addBinding(C, "t", {
            min: g[0],
            max: g[1],
            step: g[2],
            label: "Col t"
          }), E.addBlade({
            view: "separator"
          });
          const N = +Oo(1e8).toFixed(0), G = +Oo(3e8).toFixed(0), x = Math.max(1, Math.round((G - N) / 200));
          E.addBinding(C, "Es", {
            min: N,
            max: G,
            step: x,
            label: `Es (${jn()})`
          }), E.addBinding(C, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), E.addBinding(C, "fc", {
            min: c[0],
            max: c[1],
            step: c[2],
            label: `f'c (${jn()})`
          }), E.addBinding(C, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), E.on("change", (w) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = w.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = At(w.value), Ne()), ((_b = w.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = At(w.value), Ne()), ((_c = w.target) == null ? void 0 : _c.key) === "t" && (u.colT = At(w.value), Ne()), ((_d = w.target) == null ? void 0 : _d.key) === "Es" && (u.colEs = Hn(w.value), Ne()), ((_e2 = w.target) == null ? void 0 : _e2.key) === "nuS" && (u.colNuS = w.value, Ne()), ((_f = w.target) == null ? void 0 : _f.key) === "fc" && (u.colFc = Hn(w.value), Ne()), ((_g = w.target) == null ? void 0 : _g.key) === "nuC" && (u.colNuC = w.value, Ne());
          });
        }
        if (u.vigasX.length > 0) {
          const C = E.addFolder({
            title: `${A("Vigas X")} (${u.vigasX.length})`,
            expanded: false
          });
          _s(C, u.vigasX, "x", a, g);
        }
        if (u.vigasY.length > 0) {
          const C = E.addFolder({
            title: `${A("Vigas Y")} (${u.vigasY.length})`,
            expanded: false
          });
          _s(C, u.vigasY, "y", a, g);
        }
      }
      qt.addBlade({
        view: "separator"
      });
      const S = qt.addFolder({
        title: A("Vigas Secundarias"),
        expanded: false
      }), $ = {
        activar: Te,
        direccion: Ue === "x" ? 0 : 1,
        cantidad: Ce
      };
      S.addBinding($, "activar", {
        label: A("Activar")
      }), S.addBinding($, "direccion", {
        label: A("Corren en"),
        options: {
          [A("X (entre ejes Y)")]: 0,
          [A("Y (entre ejes X)")]: 1
        }
      }), S.addBinding($, "cantidad", {
        min: 1,
        max: 5,
        step: 1,
        label: A("Cantidad/vano")
      }), S.on("change", (m) => {
        var _a3, _b, _c;
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (Te = m.value, Ne()), ((_b = m.target) == null ? void 0 : _b.key) === "direccion" && (Ue = m.value === 0 ? "x" : "y", Ne()), ((_c = m.target) == null ? void 0 : _c.key) === "cantidad" && (Ce = Math.round(m.value), Ne());
      }), qt.addBlade({
        view: "separator"
      });
      const y = qt.addFolder({
        title: A("Losas de Piso"),
        expanded: true
      }), f = {
        activar: Ze,
        espesor: +zt(dt).toFixed(3),
        subdivX: ut,
        subdivY: Tt
      };
      y.addBinding(f, "activar", {
        label: A("Activar losas")
      }), y.addBinding(f, "espesor", {
        min: a[0],
        max: a[1] * 0.3,
        step: a[2],
        label: `${A("Espesor")} (${n.length})`
      }), y.addBinding(f, "subdivX", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. X"
      }), y.addBinding(f, "subdivY", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. Y"
      }), y.on("change", (m) => {
        var _a3, _b, _c, _d;
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (Ze = m.value, Ne()), ((_b = m.target) == null ? void 0 : _b.key) === "espesor" && (dt = At(m.value), Ne()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivX" && (ut = Math.round(m.value), Ne()), ((_d = m.target) == null ? void 0 : _d.key) === "subdivY" && (Tt = Math.round(m.value), Ne());
      }), qt.addBlade({
        view: "separator"
      });
      const h = qt.addFolder({
        title: A("Muros de Corte"),
        expanded: true
      }), I = {
        espesor: +zt(Ge).toFixed(3),
        subdivH: Ye,
        subdivW: be
      };
      h.addBinding(I, "espesor", {
        min: a[0],
        max: a[1],
        step: a[2],
        label: `${A("Espesor")} (${n.length})`
      }), h.addBinding(I, "subdivH", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. V"
      }), h.addBinding(I, "subdivW", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. H"
      }), h.on("change", (m) => {
        var _a3, _b, _c;
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "espesor" && (Ge = At(m.value), Ne()), ((_b = m.target) == null ? void 0 : _b.key) === "subdivH" && (Ye = Math.round(m.value), Ne()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivW" && (be = Math.round(m.value), Ne());
      });
      const L = re.length || 1, z = ne.length || 1, R = L + 1, k = z + 1;
      if (L > 0) {
        const m = h.addFolder({
          title: `${A("Muros")} dir X (${L} ${A("vanos")})`,
          expanded: false
        });
        for (let u = 0; u < L; u++) for (let E = 0; E < k; E++) {
          const C = `wx_${u}_${E}`, N = ye.some((w) => w.dir === "x" && w.bay === u && w.axisIdx === E), G = {};
          G[C] = N;
          const x = `${A("Vano")} X${u + 1} / ${A("Eje")} Y${String.fromCharCode(65 + E)}`;
          m.addBinding(G, C, {
            label: x
          }).on("change", (w) => {
            w.value ? ye.push({
              dir: "x",
              bay: u,
              axisIdx: E,
              floors: [
                -1
              ]
            }) : ye = ye.filter((v) => !(v.dir === "x" && v.bay === u && v.axisIdx === E)), Ne();
          });
        }
      }
      if (z > 0) {
        const m = h.addFolder({
          title: `${A("Muros")} dir Y (${z} ${A("vanos")})`,
          expanded: false
        });
        for (let u = 0; u < z; u++) for (let E = 0; E < R; E++) {
          const C = `wy_${u}_${E}`, N = ye.some((w) => w.dir === "y" && w.bay === u && w.axisIdx === E), G = {};
          G[C] = N;
          const x = `${A("Vano")} Y${u + 1} / ${A("Eje")} X${E + 1}`;
          m.addBinding(G, C, {
            label: x
          }).on("change", (w) => {
            w.value ? ye.push({
              dir: "y",
              bay: u,
              axisIdx: E,
              floors: [
                -1
              ]
            }) : ye = ye.filter((v) => !(v.dir === "y" && v.bay === u && v.axisIdx === E)), Ne();
          });
        }
      }
      if (ye.length > 0) {
        h.addBlade({
          view: "separator"
        });
        const m = {
          muros: `${ye.length} ${A("ubicaciones")}`
        };
        h.addBinding(m, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function mo() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (fe || (fe = t.innerHTML), $e) {
        try {
          $e.dispose();
        } catch {
        }
        $e = null;
      }
      if (xo) {
        try {
          xo.dispose();
        } catch {
        }
        xo = null;
      }
      t.innerHTML = "";
      const o = T.charAt(0).toUpperCase() + T.slice(1);
      $e = new mn({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = Es()[T];
      if (n) {
        const a = {};
        for (const s of n) a[s.key] = J[s.key].val;
        for (const s of n) $e.addBinding(a, s.key, {
          min: J[s.key].min,
          max: J[s.key].max,
          step: J[s.key].step,
          label: J[s.key].label
        });
        const c = $e.addFolder({
          title: A("Rangos"),
          expanded: false
        });
        for (const s of n) {
          const i = {
            min: J[s.key].min,
            max: J[s.key].max
          };
          c.addBinding(i, "min", {
            label: `${s.key} min`,
            step: s.step
          }), c.addBinding(i, "max", {
            label: `${s.key} max`,
            step: s.step
          }), c.on("change", () => {
            J[s.key] && (J[s.key].min = i.min, J[s.key].max = i.max, J[s.key].val < i.min && (J[s.key].val = i.min), J[s.key].val > i.max && (J[s.key].val = i.max)), mo(), Ne();
          });
        }
        $e.on("change", (s) => {
          var _a2, _b;
          const i = (_a2 = s.target) == null ? void 0 : _a2.key;
          if (i && J[i]) {
            if (J[i].val = s.value, T === "edificio" && (i === "nVanosX" || i === "nVanosY" || i === "nPisos")) {
              if (i === "nVanosX" || i === "nVanosY") {
                const p = Math.round(J.nVanosX.val), r = Math.round(J.nVanosY.val);
                for (; re.length < p; ) re.push(re[re.length - 1] ?? M.defaultSpan);
                for (re.length > p && (re.length = p); ne.length < r; ) ne.push(ne[ne.length - 1] ?? M.defaultSpan * 0.8);
                ne.length > r && (ne.length = r);
              }
              if (i === "nPisos" || i === "hPiso") {
                const p = Math.round(J.nPisos.val), r = ((_b = J.hPiso) == null ? void 0 : _b.val) ?? 3;
                for (; D.length < p; ) D.push(D[D.length - 1] ?? r);
                D.length > p && (D.length = p);
              }
              mo();
            }
            Ne();
          }
        });
      }
      if (T === "edificio") {
        if (vo) {
          try {
            vo.dispose();
          } catch {
          }
          vo = null;
        }
        const a = document.getElementById("luces-panel");
        if (a) {
          let c = function() {
            var _a2, _b, _c, _d;
            const p = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", r = ((_a2 = J.Lvix) == null ? void 0 : _a2.val) || 0, d = ((_b = J.Lvdx) == null ? void 0 : _b.val) || 0, g = ((_c = J.Lviy) == null ? void 0 : _c.val) || 0, S = ((_d = J.Lvdy) == null ? void 0 : _d.val) || 0;
            let $ = "X: ";
            r > 0 && ($ += `\u251C${r.toFixed(1)}\u2524`);
            for (let h = 0; h < re.length; h++) $ += `[${p[h + (r > 0 ? 1 : 0)]}]\u2500\u2500${re[h].toFixed(1)}\u2500\u2500`;
            $ += `[${p[re.length + (r > 0 ? 1 : 0)]}]`, d > 0 && ($ += `\u251C${d.toFixed(1)}\u2524`);
            let y = "Y: ";
            g > 0 && (y += `\u251C${g.toFixed(1)}\u2524`);
            for (let h = 0; h < ne.length; h++) y += `[${h + 1 + (g > 0 ? 1 : 0)}]\u2500\u2500${ne[h].toFixed(1)}\u2500\u2500`;
            y += `[${ne.length + 1 + (g > 0 ? 1 : 0)}]`, S > 0 && (y += `\u251C${S.toFixed(1)}\u2524`);
            let f = "Z: ";
            for (let h = 0; h < D.length; h++) f += `P${h + 1}=${D[h].toFixed(1)} `;
            i.textContent = $ + `
` + y + `
` + f;
          };
          a.innerHTML = "";
          const s = M;
          try {
            vo = new mn({
              title: `${A("Luces")} (${s.length})`,
              container: a
            });
            const p = vo.addFolder({
              title: A("Luces X"),
              expanded: true
            });
            for (let d = 0; d < re.length; d++) {
              const g = d, S = {
                v: re[d]
              };
              p.addBinding(S, "v", {
                min: s.spanRange[0],
                max: s.spanRange[1],
                step: s.spanRange[2],
                label: `svx${d + 1}`
              }).on("change", ($) => {
                re[g] = $.value, Ne();
              });
            }
            const r = vo.addFolder({
              title: A("Luces Y"),
              expanded: true
            });
            for (let d = 0; d < ne.length; d++) {
              const g = d, S = {
                v: ne[d]
              };
              r.addBinding(S, "v", {
                min: s.spanRange[0],
                max: s.spanRange[1],
                step: s.spanRange[2],
                label: `svy${d + 1}`
              }).on("change", ($) => {
                ne[g] = $.value, Ne();
              });
            }
            if (D.length > 0) {
              const d = vo.addFolder({
                title: A("Alturas por Piso"),
                expanded: true
              });
              for (let g = 0; g < D.length; g++) {
                const S = g, $ = {
                  v: D[g]
                };
                d.addBinding($, "v", {
                  min: s.heightRange[0],
                  max: s.heightRange[1],
                  step: s.heightRange[2],
                  label: `${A("Piso")} ${g + 1}`
                }).on("change", (y) => {
                  D[S] = y.value, Ne();
                });
              }
            }
          } catch (p) {
            console.error("Luces Tweakpane error:", p);
          }
          const i = document.createElement("div");
          i.style.cssText = "font-family:monospace;font-size:10px;color:#aaa;padding:6px;background:#1a1a2e;border-radius:4px;margin-top:6px;line-height:1.6;white-space:pre;overflow-x:auto;", c(), a.appendChild(i);
        }
      }
      if (No(), $e) {
        $e.addBlade({
          view: "separator"
        });
        const a = kn()[T];
        if (a && a.length > 0) {
          const c = {};
          a.forEach((i, p) => {
            c[i.label] = p;
          });
          const s = {
            apoyo: St
          };
          $e.addBinding(s, "apoyo", {
            label: A("Apoyo"),
            options: c
          }).on("change", (i) => {
            St = i.value, Ne();
          });
        }
        if (T === "placa-3q" || T === "placa-q4") {
          const c = {
            teoria: Pe
          };
          $e.addBinding(c, "teoria", {
            label: A("Teor\xEDa"),
            options: {
              [A("Membrana")]: 1,
              [A("Kirchhoff (delgada)")]: 2,
              [A("Mindlin (gruesa)")]: 3
            }
          }).on("change", (s) => {
            Pe = s.value, Ne();
          });
        }
      }
      const l = Ss()[T];
      if (l && l.length > 0) {
        xo = new mn({
          title: `${A("Cargas Est\xE1ticas")} \u2014 ${o}`,
          container: t
        });
        const a = {};
        for (const s of l) a[s.key] = gt[s.key].val;
        for (const s of l) xo.addBinding(a, s.key, {
          min: gt[s.key].min,
          max: gt[s.key].max,
          step: gt[s.key].step,
          label: gt[s.key].label
        });
        const c = xo.addFolder({
          title: A("Rangos"),
          expanded: false
        });
        for (const s of l) {
          const i = {
            min: gt[s.key].min,
            max: gt[s.key].max
          };
          c.addBinding(i, "min", {
            label: `${s.key} min`,
            step: s.step
          }), c.addBinding(i, "max", {
            label: `${s.key} max`,
            step: s.step
          }), c.on("change", () => {
            gt[s.key] && (gt[s.key].min = i.min, gt[s.key].max = i.max, gt[s.key].val < i.min && (gt[s.key].val = i.min), gt[s.key].val > i.max && (gt[s.key].val = i.max)), mo(), Ne();
          });
        }
        xo.on("change", (s) => {
          var _a2;
          const i = (_a2 = s.target) == null ? void 0 : _a2.key;
          if (i && gt[i]) {
            if (gt[i].val = s.value, e.nodeInputs) {
              const p = e.nodeInputs.val;
              p.supports && (e.nodeInputs.val = {
                supports: p.supports
              });
            }
            setTimeout(() => Jn(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (a, c) => {
          if (J[a]) J[a].val = c, Ne(), mo();
          else if (gt[a]) {
            if (gt[a].val = c, e.nodeInputs) {
              const s = e.nodeInputs.val;
              s.supports && (e.nodeInputs.val = {
                supports: s.supports
              });
            }
            setTimeout(() => {
              Jn(), mo();
            }, 30);
          }
        },
        getParams: () => {
          const a = {};
          for (const c in J) a[c] = J[c].val;
          for (const c in gt) a[c] = gt[c].val;
          return a;
        },
        setGenerator: nt,
        createCustomPanel: (a, c, s) => Ba(a, c, s),
        removeCustomPanel: (a) => {
          Ds(a);
        }
      };
    }
    const Wn = /* @__PURE__ */ new Map();
    function Ba(t, o, n) {
      var _a2;
      Ds(t);
      let l = document.querySelector("#cad3d-custom-panels");
      if (!l) {
        l = document.createElement("div"), l.id = "cad3d-custom-panels";
        const i = document.querySelector("#parameters");
        i ? (_a2 = i.parentElement) == null ? void 0 : _a2.insertBefore(l, i.nextSibling) : document.body.appendChild(l);
      }
      const a = document.createElement("div");
      a.className = "cad3d-custom-panel", a.style.marginBottom = "4px", l.appendChild(a);
      const c = new mn({
        title: t,
        container: a
      }), s = {};
      for (const [i, p] of Object.entries(o)) {
        const r = p.label || i;
        if (Array.isArray(p.value)) {
          s[i] = p.value;
          const d = {
            [i]: p.value.join(", ")
          };
          c.addBinding(d, i, {
            label: r
          }).on("change", (g) => {
            s[i] = g.value.split(",").map((S) => parseFloat(S.trim())).filter((S) => !isNaN(S)), n && n({
              ...s
            });
          });
        } else if (p.options) {
          s[i] = p.value;
          const d = {
            [i]: p.value
          }, g = {};
          for (const S of p.options) g[S] = S;
          c.addBinding(d, i, {
            label: r,
            options: g
          }).on("change", (S) => {
            s[i] = S.value, n && n({
              ...s
            });
          });
        } else if (typeof p.value == "boolean") {
          s[i] = p.value;
          const d = {
            [i]: p.value
          };
          c.addBinding(d, i, {
            label: r
          }).on("change", (g) => {
            s[i] = g.value, n && n({
              ...s
            });
          });
        } else if (typeof p.value == "string") {
          s[i] = p.value;
          const d = {
            [i]: p.value
          };
          c.addBinding(d, i, {
            label: r
          }).on("change", (g) => {
            s[i] = g.value, n && n({
              ...s
            });
          });
        } else {
          s[i] = p.value;
          const d = {
            [i]: p.value
          }, g = {
            label: r
          };
          p.min !== void 0 && (g.min = p.min), p.max !== void 0 && (g.max = p.max), p.step !== void 0 && (g.step = p.step), c.addBinding(d, i, g).on("change", (S) => {
            s[i] = S.value, n && n({
              ...s
            });
          });
        }
      }
      return n && c.addButton({
        title: "Aplicar"
      }).on("click", () => {
        n({
          ...s
        });
      }), Wn.set(t, {
        pane: c,
        values: s
      }), console.log(`Panel "${t}" created with ${Object.keys(o).length} params`), s;
    }
    function Ds(t) {
      const o = Wn.get(t);
      if (o) {
        try {
          o.pane.dispose();
        } catch {
        }
        Wn.delete(t);
      }
    }
    function Ha() {
      if ($e) {
        try {
          $e.dispose();
        } catch {
        }
        $e = null;
      }
      if (xo) {
        try {
          xo.dispose();
        } catch {
        }
        xo = null;
      }
      if (qt) {
        try {
          qt.dispose();
        } catch {
        }
        qt = null;
      }
      if (vo) {
        try {
          vo.dispose();
        } catch {
        }
        vo = null;
      }
      const t = document.getElementById("sections");
      t && t.remove();
      const o = document.getElementById("right-panels-wrapper"), n = document.getElementById("parameters");
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && fe && (n.innerHTML = fe);
    }
    const Le = document.createElement("div");
    Le.id = "cad3d-panel";
    const Bs = document.createElement("style");
    Bs.textContent = `
    /* \u2500\u2500 CSS Custom Properties (Dark = default) \u2500\u2500 */
    :root {
      --fem-bg: rgba(20,20,28,0.97);
      --fem-text: #ccc;
      --fem-border: #555;
      --fem-border-light: #444;
      --fem-border-cell: #333;
      --fem-shadow: rgba(0,0,0,0.6);
      --fem-heading: #0a84ff;
      --fem-section-title: #ee9b00;
      --fem-close: #888;
      --fem-close-hover: #fff;
      --fem-key: #aaa;
      --fem-val: #fff;
      --fem-label: #888;
      --fem-cell-text: #ddd;
      --fem-nonzero: #0f0;
      --fem-header-bg: #222;
      --fem-eq-text: #e8e8ff;
      --fem-eq-var: #7cb3ff;
      --fem-eq-op: #ccc;
      --fem-eq-sub: #aaa;
      --fem-eq-border: #888;
      --fem-eq-dots: #666;
      --fem-eq-box-bg: rgba(255,255,255,0.05);
      --fem-eq-box-border: #444;
      --fem-overlay-bg: rgba(10,10,15,0.97);
      --fem-section-bg: rgba(30,30,50,0.8);
      --fem-coeff-bg: rgba(40,35,20,0.8);
      --fem-numeric-bg: rgba(30,40,30,0.8);
      --fem-step-bg: rgba(255,255,255,0.03);
      --fem-coeff-item-bg: rgba(255,255,255,0.04);
      --fem-btn-bg: #333;
      --fem-btn-hover: #444;
      --fem-btn-text: #0a84ff;
      --fem-btn-hover-text: #fff;
      --fem-frac-border: #999;
      --fem-sym-cell: #aad;
      --fem-sym-nz: #7cb3ff;
      --fem-diag-bg: rgba(255,255,0,0.06);
      --fem-vec-inline: #ccc;
      --fem-full-close-bg: #444;
      --fem-full-close-border: #666;
      /* FEM Studio panel */
      --cad-bg: rgba(30,30,36,0.95);
      --cad-text: #ccc;
      --cad-border: #555;
      --cad-shadow: rgba(0,0,0,0.5);
      --cad-heading: #ee9b00;
      --cad-info: #888;
      --cad-btn-bg: #444;
      --cad-btn-text: #ddd;
      --cad-btn-border: #666;
      --cad-btn-hover-bg: #555;
      --cad-btn-hover-text: #fff;
      --cad-input-bg: #222;
      --cad-input-text: #0f0;
      --cad-input-border: #555;
      --cad-input-placeholder: #666;
      --cad-toggle-text: #888;
      --cad-toggle-hover: #fff;
    }
    /* \u2500\u2500 Light theme overrides \u2500\u2500 */
    :root.awatif-light {
      --fem-bg: rgba(250,250,252,0.97);
      --fem-text: #333;
      --fem-border: #bbb;
      --fem-border-light: #ccc;
      --fem-border-cell: #ccc;
      --fem-shadow: rgba(0,0,0,0.15);
      --fem-heading: #0066cc;
      --fem-section-title: #b87800;
      --fem-close: #888;
      --fem-close-hover: #000;
      --fem-key: #666;
      --fem-val: #111;
      --fem-label: #888;
      --fem-cell-text: #333;
      --fem-nonzero: #006600;
      --fem-header-bg: #e8e8e8;
      --fem-eq-text: #222;
      --fem-eq-var: #0055aa;
      --fem-eq-op: #555;
      --fem-eq-sub: #777;
      --fem-eq-border: #999;
      --fem-eq-dots: #aaa;
      --fem-eq-box-bg: rgba(0,0,0,0.03);
      --fem-eq-box-border: #ccc;
      --fem-overlay-bg: rgba(245,245,248,0.97);
      --fem-section-bg: rgba(240,240,250,0.9);
      --fem-coeff-bg: rgba(255,248,230,0.9);
      --fem-numeric-bg: rgba(240,250,240,0.9);
      --fem-step-bg: rgba(0,0,0,0.02);
      --fem-coeff-item-bg: rgba(0,0,0,0.03);
      --fem-btn-bg: #e0e0e0;
      --fem-btn-hover: #ccc;
      --fem-btn-text: #0066cc;
      --fem-btn-hover-text: #000;
      --fem-frac-border: #888;
      --fem-sym-cell: #336;
      --fem-sym-nz: #0055aa;
      --fem-diag-bg: rgba(255,255,0,0.08);
      --fem-vec-inline: #444;
      --fem-full-close-bg: #ddd;
      --fem-full-close-border: #aaa;
      /* FEM Studio panel light */
      --cad-bg: rgba(248,248,250,0.95);
      --cad-text: #333;
      --cad-border: #bbb;
      --cad-shadow: rgba(0,0,0,0.15);
      --cad-heading: #b87800;
      --cad-info: #888;
      --cad-btn-bg: #e0e0e0;
      --cad-btn-text: #333;
      --cad-btn-border: #bbb;
      --cad-btn-hover-bg: #ccc;
      --cad-btn-hover-text: #000;
      --cad-input-bg: #f0f0f0;
      --cad-input-text: #006600;
      --cad-input-border: #bbb;
      --cad-input-placeholder: #aaa;
      --cad-toggle-text: #888;
      --cad-toggle-hover: #000;
    }
    #cad3d-panel {
      position: fixed; bottom: 10px; left: 10px;
      background: var(--cad-bg); color: var(--cad-text);
      border: 1px solid var(--cad-border); border-radius: 6px;
      padding: 12px 14px; font-family: monospace; font-size: 12px;
      z-index: 999999; width: 200px; box-sizing: border-box;
      max-height: calc(100vh - 20px); overflow-y: auto; overflow-x: hidden;
      user-select: none; cursor: move;
      box-shadow: 0 4px 16px var(--cad-shadow); pointer-events: auto;
      height: auto;
    }
    #cad3d-panel::-webkit-scrollbar { width: 6px; }
    #cad3d-panel::-webkit-scrollbar-track { background: transparent; }
    #cad3d-panel::-webkit-scrollbar-thumb { background: var(--cad-border); border-radius: 3px; }
    #cad3d-panel::-webkit-scrollbar-thumb:hover { background: var(--cad-heading); }
    #cad3d-panel h3 { margin: 0 0 6px 0; color: var(--cad-heading); font-size: 13px; cursor: move; display: flex; justify-content: space-between; align-items: center; }
    #cad3d-panel .info-row { display: flex; justify-content: space-between; padding: 2px 0; }
    #cad3d-panel .info-val { color: var(--fem-val); font-weight: bold; }
    #cad3d-panel .btn-row { display: flex; gap: 4px; flex-wrap: wrap; margin-top: 4px; }
    #cad3d-panel button { background: var(--cad-btn-bg); color: var(--cad-btn-text); border: 1px solid var(--cad-btn-border); border-radius: 3px; padding: 3px 8px; font-family: monospace; font-size: 11px; cursor: pointer; }
    #cad3d-panel button:hover { background: var(--cad-btn-hover-bg); color: var(--cad-btn-hover-text); }
    #cad3d-panel button.active { background: var(--cad-heading); color: #000; border-color: var(--cad-heading); }
    #cad3d-panel button.view-active { background: var(--fem-heading); color: #fff; border-color: var(--fem-heading); }
    #cad3d-panel .cmd-input { width: 100%; box-sizing: border-box; margin-top: 8px; background: var(--cad-input-bg); color: var(--cad-input-text); border: 1px solid var(--cad-input-border); border-radius: 3px; padding: 4px 6px; font-family: monospace; font-size: 11px; cursor: text; }
    #cad3d-panel .cmd-input::placeholder { color: var(--cad-input-placeholder); }
    #cad3d-panel .section-label { color: var(--cad-info); font-size: 10px; margin-top: 8px; margin-bottom: 3px; text-transform: uppercase; letter-spacing: 1px; }
    /* Collapsed: hide everything except the toggle button */
    #cad3d-panel.collapsed { width: auto; padding: 4px 6px; border-radius: 4px; overflow: hidden; }
    #cad3d-panel.collapsed h3 { display: none; }
    #cad3d-panel.collapsed .panel-body { display: none; }
    #cad3d-panel.collapsed .toggle-btn-collapsed { display: inline-block; }
    #cad3d-panel .toggle-btn-collapsed { display: none; background: var(--cad-heading); color: #000; border: none; border-radius: 3px; padding: 3px 8px; font-family: monospace; font-size: 11px; cursor: pointer; font-weight: bold; }
    #cad3d-panel .toggle-btn-collapsed:hover { background: #ffb300; }
    #cad3d-panel .toggle-btn { background: none; border: none; color: var(--cad-toggle-text); cursor: pointer; font-size: 14px; padding: 0; line-height: 1; }
    #cad3d-panel .toggle-btn:hover { color: var(--cad-toggle-hover); }
    /* \u2500\u2500 Mobile: hamburger toggle \u2500\u2500 */
    #mobile-menu-btn {
      display: none;
      position: fixed; top: 10px; left: 10px; z-index: 1000001;
      width: 40px; height: 40px; border-radius: 8px;
      background: rgba(30,30,30,0.9); color: #fff; border: 1px solid #555;
      font-size: 22px; cursor: pointer;
      align-items: center; justify-content: center;
      backdrop-filter: blur(4px);
    }
    /* \u2500\u2500 Mobile portrait: FEM Studio panel \u2500\u2500 */
    @media (max-width: 600px) {
      #mobile-menu-btn { display: flex; }
      #cad3d-panel {
        width: 170px; padding: 8px 10px; font-size: 11px;
        max-height: calc(100vh - 20px); top: 10px; bottom: auto; left: 5px;
        overflow-y: auto;
        display: none;
      }
      #cad3d-panel.mobile-open { display: block; }
      #cad3d-panel button { padding: 2px 5px; font-size: 10px; }
      #cad3d-panel .btn-row { gap: 2px; margin-top: 2px; }
      #cad3d-panel h3 { font-size: 11px; margin-bottom: 4px; }
      #cad3d-panel .cmd-input { font-size: 10px; padding: 3px 4px; margin-top: 4px; }
      #cad3d-panel .section-label { font-size: 9px; margin-top: 4px; }
      #fem-inspect-panel { width: calc(100% - 10px) !important; right: 5px !important; left: 5px !important; top: auto !important; bottom: 5px !important; max-height: 50vh; }
    }
    /* \u2500\u2500 Mobile landscape: short height \u2500\u2500 */
    @media (max-height: 500px) and (orientation: landscape) {
      #cad3d-panel {
        width: 140px; padding: 4px 6px; font-size: 10px;
        max-height: calc(100vh - 10px); bottom: 5px; left: 5px;
        top: 5px; overflow-y: auto;
      }
      #cad3d-panel h3 { font-size: 10px; margin-bottom: 2px; }
      #cad3d-panel button { padding: 1px 4px; font-size: 9px; }
      #cad3d-panel .btn-row { gap: 1px; margin-top: 1px; }
      #cad3d-panel .section-label { font-size: 8px; margin-top: 2px; }
      #cad3d-panel .cmd-input { font-size: 9px; padding: 2px 3px; margin-top: 2px; }
      /* Collapse sections panel on landscape mobile */
      .cad3d-sections-panel { display: none !important; }
      .cad3d-params-panel { display: none !important; }
      /* Make 3D viewer use full width minus CLI panel */
      canvas { position: fixed !important; top: 0 !important; left: 150px !important; width: calc(100vw - 150px) !important; height: 100vh !important; }
    }
    /* \u2500\u2500 Small mobile (< 400px width) \u2500\u2500 */
    @media (max-width: 400px) {
      #cad3d-panel {
        width: 130px; padding: 4px 6px; font-size: 9px;
        max-height: 50vh;
      }
      #cad3d-panel button { padding: 1px 3px; font-size: 8px; min-width: 0; }
    }
    #fem-inspect-panel {
      position: fixed; top: 10px; right: 10px;
      background: var(--fem-bg); color: var(--fem-text);
      border: 1px solid var(--fem-border); border-radius: 8px;
      padding: 14px 16px; font-family: monospace; font-size: 11px;
      z-index: 999999; width: 420px; max-height: calc(100vh - 20px);
      overflow-y: auto; box-shadow: 0 4px 20px var(--fem-shadow);
      pointer-events: auto;
    }
    #fem-inspect-panel h3 { margin: 0 0 8px 0; color: var(--fem-heading); font-size: 14px; display: flex; justify-content: space-between; }
    #fem-inspect-panel .close-btn { background: none; border: none; color: var(--fem-close); cursor: pointer; font-size: 16px; }
    #fem-inspect-panel .close-btn:hover { color: var(--fem-close-hover); }
    #fem-inspect-panel .section { margin-top: 10px; border-top: 1px solid var(--fem-border-light); padding-top: 8px; }
    #fem-inspect-panel .section-title { color: var(--fem-section-title); font-size: 12px; font-weight: bold; margin-bottom: 4px; }
    #fem-inspect-panel .prop-row { display: flex; justify-content: space-between; padding: 1px 0; }
    #fem-inspect-panel .prop-key { color: var(--fem-key); }
    #fem-inspect-panel .prop-val { color: var(--fem-val); font-weight: bold; }
    #fem-inspect-panel .matrix-label { color: var(--fem-label); font-size: 10px; margin-top: 6px; }
    #fem-inspect-panel table { border-collapse: collapse; width: 100%; margin-top: 4px; font-size: 10px; }
    #fem-inspect-panel td { border: 1px solid var(--fem-border-cell); padding: 2px 4px; text-align: right; color: var(--fem-cell-text); white-space: nowrap; }
    #fem-inspect-panel td.nonzero { color: var(--fem-nonzero); }
    #fem-inspect-panel td.header { color: var(--fem-section-title); font-weight: bold; background: var(--fem-header-bg); text-align: center; }
    #fem-inspect-panel .result-val { font-size: 13px; color: var(--fem-nonzero); font-weight: bold; }
    #fem-inspect-panel .dof-labels { color: var(--fem-label); font-size: 9px; }
    button.inspect-active { background: #ff4444 !important; color: #fff !important; border-color: #ff4444 !important; }
    /* Math formula rendering */
    .fem-eq { font-family: 'STIX Two Math','Cambria Math','Times New Roman',serif; font-size: 13px; color: var(--fem-eq-text); line-height: 1.6; margin: 6px 0 8px 0; text-align: center; }
    .fem-eq .var { color: var(--fem-eq-var); font-style: italic; }
    .fem-eq .op { color: var(--fem-eq-op); padding: 0 2px; }
    .fem-eq .frac { display: inline-flex; flex-direction: column; align-items: center; vertical-align: middle; margin: 0 2px; }
    .fem-eq .frac-num { border-bottom: 1px solid var(--fem-frac-border); padding: 0 4px 1px; font-size: 11px; }
    .fem-eq .frac-den { padding: 1px 4px 0; font-size: 11px; }
    .fem-eq sub { font-size: 0.75em; vertical-align: sub; color: var(--fem-eq-sub); }
    .fem-eq sup { font-size: 0.75em; vertical-align: super; }
    .fem-eq .mat-sym { display: inline-grid; border-left: 2px solid var(--fem-eq-border); border-right: 2px solid var(--fem-eq-border); padding: 2px 6px; margin: 0 4px; vertical-align: middle; gap: 1px 8px; font-size: 11px; }
    .fem-eq .mat-sym .cell { text-align: center; }
    .fem-eq .mat-sym .dots { color: var(--fem-eq-dots); }
    .fem-eq .highlight { color: var(--fem-nonzero); font-weight: bold; }
    .fem-eq .eq-box { background: var(--fem-eq-box-bg); border: 1px solid var(--fem-eq-box-border); border-radius: 4px; padding: 6px 10px; margin: 4px 0; }
    /* Full matrix overlay */
    .fem-full-overlay { position: fixed; inset: 0; background: var(--fem-overlay-bg); z-index: 9999999; overflow: auto; padding: 20px; }
    .fem-full-overlay .close-full { position: fixed; top: 12px; right: 16px; background: var(--fem-full-close-bg); color: var(--fem-val); border: 1px solid var(--fem-full-close-border); border-radius: 4px; padding: 6px 14px; cursor: pointer; font-size: 13px; z-index: 10000000; }
    .fem-full-overlay .close-full:hover { background: var(--fem-btn-hover); }
    .fem-full-overlay h2 { color: var(--fem-section-title); margin: 0 0 16px 0; font-size: 18px; font-family: monospace; }
    .fem-full-sections { display: flex; flex-direction: column; gap: 20px; }
    .fem-full-sections .full-section { background: var(--fem-section-bg); border: 1px solid var(--fem-border); border-radius: 6px; padding: 16px; overflow-x: auto; }
    .fem-full-sections .full-section.coeff { background: var(--fem-coeff-bg); }
    .fem-full-sections .full-section.numeric { background: var(--fem-numeric-bg); }
    .fem-full-sections .side-title { font-size: 13px; color: var(--fem-label); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }
    .fem-full-sections table { border-collapse: collapse; font-family: monospace; font-size: 11px; }
    .fem-full-sections td { border: 1px solid var(--fem-border-cell); padding: 3px 6px; text-align: right; color: var(--fem-cell-text); white-space: nowrap; }
    .fem-full-sections td.nz { color: var(--fem-nonzero); }
    .fem-full-sections td.hdr { color: var(--fem-section-title); font-weight: bold; background: var(--fem-header-bg); text-align: center; }
    .fem-full-sections td.diag { background: var(--fem-diag-bg); }
    .fem-full-sections .coeff-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 8px; }

    /* Report Explained (FEM Solver) overlay */
    .fem-solver-overlay { position: fixed; inset: 0; background: #0d1117; z-index: 9999999; overflow: auto; padding: 20px 30px; color: #c9d1d9; font-family: 'Segoe UI', monospace, sans-serif; font-size: 13px; }
    .fem-solver-overlay h2 { color: #58a6ff; margin: 0 0 12px 0; font-size: 20px; }
    .fem-solver-overlay h3 { color: #f0883e; margin: 16px 0 6px 0; font-size: 15px; cursor: pointer; border-bottom: 1px solid #30363d; padding-bottom: 4px; }
    .fem-solver-overlay h3:hover { color: #ffa657; }
    .fem-solver-overlay h4 { color: #7ee787; margin: 8px 0 4px 0; font-size: 13px; cursor: pointer; }
    .fem-solver-overlay h4:hover { color: #a5f3c0; }
    .fem-rpt-close { position: fixed; top: 12px; right: 20px; background: #21262d; color: #c9d1d9; border: 1px solid #30363d; border-radius: 4px; padding: 6px 14px; cursor: pointer; font-size: 14px; z-index: 10000000; }
    .fem-rpt-close:hover { background: #30363d; }
    .fem-rpt-summary { display: flex; gap: 20px; margin-bottom: 12px; color: #8b949e; font-size: 13px; }
    .fem-rpt-summary b { color: #58a6ff; }
    .fem-rpt-body { margin-left: 8px; }
    .fem-rpt-elem { margin: 4px 0; border-left: 2px solid #21262d; padding-left: 8px; }
    .fem-rpt-elem-body { margin: 4px 0 8px 0; }
    .fem-rpt-props { color: #8b949e; font-size: 11px; margin: 2px 0; }
    .fem-rpt-mtx-title { color: #f78166; font-size: 11px; font-weight: bold; margin: 6px 0 2px 0; }
    .fem-rpt-matrix { border-collapse: collapse; font-family: 'Consolas', monospace; font-size: 10px; }
    .fem-rpt-matrix td { padding: 1px 5px; text-align: right; border: 1px solid #21262d; white-space: nowrap; }
    .fem-rpt-matrix .fem-hdr { color: #58a6ff; font-weight: bold; text-align: center; background: #161b22; font-size: 9px; }
    .fem-full-sections .coeff-item { background: var(--fem-coeff-item-bg); border: 1px solid var(--fem-eq-box-border); border-radius: 4px; padding: 8px 12px; font-family: 'STIX Two Math','Cambria Math','Times New Roman',serif; font-size: 13px; color: var(--fem-eq-text); line-height: 1.6; }
    .fem-full-sections .coeff-item .var { color: var(--fem-eq-var); font-style: italic; }
    .fem-full-sections .coeff-item .frac { display: inline-flex; flex-direction: column; align-items: center; vertical-align: middle; margin: 0 2px; }
    .fem-full-sections .coeff-item .frac-num { border-bottom: 1px solid var(--fem-frac-border); padding: 0 4px 1px; font-size: 11px; }
    .fem-full-sections .coeff-item .frac-den { padding: 1px 4px 0; font-size: 11px; }
    .fem-full-sections .coeff-item .highlight { color: var(--fem-nonzero); font-weight: bold; }
    .fem-full-sections .coeff-item sub { font-size: 0.75em; vertical-align: sub; color: var(--fem-eq-sub); }
    .fem-full-sections .coeff-item sup { font-size: 0.75em; vertical-align: super; }
    /* Step-by-step force recovery */
    .fem-step { background: var(--fem-step-bg); border: 1px solid var(--fem-eq-box-border); border-radius: 4px; padding: 8px 12px; margin: 6px 0; font-family: 'STIX Two Math','Cambria Math','Times New Roman',serif; font-size: 12px; color: var(--fem-eq-text); overflow-x: auto; }
    .fem-step .step-title { color: var(--fem-section-title); font-weight: bold; font-size: 11px; margin-bottom: 4px; font-family: monospace; }
    .fem-step .step-eq { margin: 4px 0; }
    .fem-step .var { color: var(--fem-eq-var); font-style: italic; }
    .fem-step .highlight { color: var(--fem-nonzero); font-weight: bold; }
    .fem-step .vec-inline { color: var(--fem-vec-inline); font-family: monospace; font-size: 11px; }
    .fem-step sub { font-size: 0.75em; vertical-align: sub; color: var(--fem-eq-sub); }
    .fem-step .frac { display: inline-flex; flex-direction: column; align-items: center; vertical-align: middle; margin: 0 2px; }
    .fem-step .frac-num { border-bottom: 1px solid var(--fem-frac-border); padding: 0 4px 1px; font-size: 10px; }
    .fem-step .frac-den { padding: 1px 4px 0; font-size: 10px; }
    .fem-full-sym { font-family: 'STIX Two Math','Cambria Math','Times New Roman',serif; }
    .fem-full-sym table { font-family: 'STIX Two Math','Cambria Math',serif; font-size: 13px; }
    .fem-full-sym td { border: 1px solid var(--fem-eq-box-border); padding: 4px 8px; text-align: center; color: var(--fem-sym-cell); vertical-align: middle; }
    .fem-full-sym td.nz { color: var(--fem-sym-nz); }
    .fem-full-sym .frac { display: inline-flex; flex-direction: column; align-items: center; vertical-align: middle; margin: 0 1px; line-height: 1.2; }
    .fem-full-sym .frac-num { border-bottom: 1px solid var(--fem-eq-border); padding: 0 3px 1px; font-size: 11px; white-space: nowrap; }
    .fem-full-sym .frac-den { padding: 1px 3px 0; font-size: 11px; white-space: nowrap; }
    .fem-full-sym .var { color: var(--fem-sym-nz); font-style: italic; }
    .fem-full-sym sub { font-size: 0.7em; vertical-align: sub; color: var(--fem-eq-sub); }
    .fem-expand-btn { background: var(--fem-btn-bg); color: var(--fem-btn-text); border: 1px solid var(--fem-border); border-radius: 3px; padding: 2px 8px; cursor: pointer; font-size: 10px; margin-left: 8px; }
    .fem-expand-btn:hover { background: var(--fem-btn-hover); color: var(--fem-btn-hover-text); }
  `, document.head.appendChild(Bs), hl() === "light" && document.documentElement.classList.add("awatif-light"), xl((t) => {
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), T && It(true);
    }), Le.innerHTML = `
    <button class="toggle-btn-collapsed" id="cad3d-expand">FEM Studio</button>
    <h3>FEM Studio <span style="font-size:10px;color:var(--cad-info);margin-left:6px" id="cad3d-info">0n 0e</span><button class="toggle-btn" id="cad3d-toggle">_</button></h3>
    <div class="panel-body">
      <div class="btn-row">
        <button data-ex="truss" data-i18n="Cercha">Cercha</button>
        <button data-ex="beams" data-i18n="Portico">Portico</button>
        <button data-ex="3d" data-i18n="Torre">Torre</button>
        <button data-ex="galpon" data-i18n="Galpon">Galpon</button>
        <button data-ex="edificio" data-i18n="Edificio">Edificio</button>
        <button data-ex="edif-muros" data-i18n="Edif. Muros">Edif. Muros</button>
        <button data-ex="edif-acero" data-i18n="Edif. Acero">Edif. Acero</button>
        <button data-ex="edif-acero-diag" data-i18n="Acero+Diag">Acero+Diag</button>
        <button data-ex="edif-mixto" data-i18n="Edif. Mixto">Edif. Mixto</button>
        <button data-ex="mezanine" data-i18n="Mezanine">Mezanine</button>
        <button data-ex="barra" data-i18n="Barra">Barra</button>
        <button data-ex="placa3q" data-i18n="Placa 3Q">Placa 3Q</button>
        <button data-ex="placa" data-i18n="Placa Q4">Placa Q4</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button data-ex="losa-rect" data-i18n="Losa Rect">Losa Rect</button>
        <button data-ex="losa-plana" data-i18n="Losa Plana">Losa Plana</button>
        <button data-ex="viga-alta" data-i18n="Viga Alta">Viga Alta</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button data-ex="muro-contencion" data-i18n="Muro Cont.">Muro Cont.</button>
        <button data-ex="zapata" data-i18n="Zapata">Zapata</button>
        <button data-ex="placa-orificios" data-i18n="Placa Base">Placa Base</button>
        <button data-ex="col-placa" data-i18n="Col+Placa 3D">Col+Placa 3D</button>
        <button data-ex="talud" data-i18n="Talud">Talud</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button data-ex="eiffel" data-i18n="Eiffel">Eiffel</button>
        <button data-ex="arco" data-i18n="Arco">Arco</button>
        <button data-ex="puente" data-i18n="Puente">Puente</button>
        <button data-ex="twisted" data-i18n="Twist">Twist</button>
        <button data-ex="burj" data-i18n="Burj">Burj</button>
        <button data-ex="opera" data-i18n="Opera">Opera</button>
        <button data-ex="diagrid" data-i18n="Diagrid">Diagrid</button>
        <button data-ex="muro-q4" data-i18n="Muro Q4">Muro Q4</button>
        <button data-ex="viga-q4" data-i18n="Viga Q4">Viga Q4</button>
        <button data-ex="placa-xz" data-i18n="Placa XZ">Placa XZ</button>
        <button data-ex="pergola" data-i18n="P\xE9rgola">P\xE9rgola</button>
      </div>
      <div class="btn-row" style="margin-top:4px">
        <button data-view="3d" class="view-active">3D</button>
        <button data-view="plan">Plan</button>
        <button data-view="elevX">EX</button>
        <button data-view="elevY">EY</button>
        <button id="cad3d-select" data-i18n="Select">Select</button>
        <button id="cad3d-draw" data-i18n="Draw">Draw</button>
        <button id="cad3d-inspect" data-i18n="Inspect">Inspect</button>
      </div>
      <div class="btn-row" id="cad3d-axis-buttons" style="margin-top:2px;display:none"></div>
      <div class="btn-row" id="cad3d-floor-buttons" style="margin-top:2px;display:none"></div>
      <div class="btn-row" style="margin-top:2px">
        <button id="cad3d-new-model" title="Nuevo modelo vac\xEDo" data-i18n="New" data-i18n-title="Nuevo modelo vac\xEDo">\u{1F195} New</button>
        <button id="cad3d-export" title="Exportar coordenadas y datos del modelo" data-i18n="Export" data-i18n-title="Exportar coordenadas y datos del modelo">\u{1F4CB} Export</button>
        <select id="cad3d-io-menu" title="Import/Export modelos" data-i18n-title="Import/Export modelos" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);padding:2px 4px;font-size:11px;cursor:pointer;">
          <option value="">\u{1F4C2} I/O</option>
          <option value="import-e2k">\u{1F4E5} Import E2K (ETABS)</option>
          <option value="import-s2k">\u{1F4E5} Import S2K (SAP2000)</option>
          <option value="import-ifc">\u{1F4E5} Import IFC (Revit/ArchiCAD)</option>
          <option value="export-e2k">\u{1F4E4} Export E2K (ETABS)</option>
          <option value="export-s2k">\u{1F4E4} Export S2K (SAP2000)</option>
          <option value="import-py">\u{1F4E5} Import OpenSeesPy</option>
          <option value="export-py">\u{1F4E4} Export OpenSeesPy</option>
          <option value="import-tcl">\u{1F4E5} Import OpenSees Tcl</option>
          <option value="export-tcl">\u{1F4E4} Export OpenSees Tcl</option>
        </select>
        <input type="file" id="cad3d-io-file" accept=".e2k,.E2K,.s2k,.S2K,.py,.tcl,.ifc,.IFC" style="display:none">
        <select id="cad3d-tests-menu" title="Validation tests vs ETABS" data-i18n-title="Validation tests vs ETABS" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);padding:2px 4px;font-size:11px;cursor:pointer;">
          <option value="">\u{1F9EA} Tests</option>
          <option value="test-cantilever">1. Cantilever (Exact)</option>
          <option value="test-portal-1p">2. Portal 1-Story (ETABS)</option>
          <option value="test-portal-2p">3. Portal 2-Story (ETABS)</option>
          <option value="test-wall-only">4. Wall Q4 Only (ETABS)</option>
          <option value="test-portal-wall">5. Portal + Wall (ETABS)</option>
          <option value="test-wilson-beam">6. Wilson Cantilever Q4 (incomp.)</option>
          <!-- Scordelis-Lo requires MITC4 for curved shells - not yet implemented -->
          <option value="test-all">\u25B6 Run All Tests</option>
        </select>
        <select id="cad3d-force-unit" title="Unidad de fuerza" data-i18n-title="Unidad de fuerza" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);padding:2px 4px;font-size:11px;cursor:pointer;">
          <option value="tonf">tonf</option><option value="kN">kN</option><option value="kgf">kgf</option>
          <option value="kip">kip</option><option value="lb">lb</option><option value="N">N</option>
        </select>
        <select id="cad3d-length-unit" title="Unidad de longitud" data-i18n-title="Unidad de longitud" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);padding:2px 4px;font-size:11px;cursor:pointer;">
          <option value="m">m</option><option value="cm">cm</option><option value="mm">mm</option>
          <option value="ft">ft</option><option value="in">in</option>
        </select>
        <button id="cad3d-btn-clear" style="margin-left:auto" data-i18n="Clear">Clear</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button data-preset="MKS" class="active" title="tonf+m, esfuerzos kgf/cm\xB2" data-i18n-title="tonf+m, esfuerzos kgf/cm\xB2">MKS</button>
        <button data-preset="SI" title="kN+m, esfuerzos kPa" data-i18n-title="kN+m, esfuerzos kPa">SI</button>
        <button data-preset="US" title="kip+in, esfuerzos ksi" data-i18n-title="kip+in, esfuerzos ksi">US</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button data-lang="es" class="active" style="font-size:10px">ES</button>
        <button data-lang="en" style="font-size:10px">EN</button>
      </div>
      <div class="btn-row" style="margin-top:4px">
        <button id="cad3d-modal" title="An\xE1lisis modal (frecuencias y modos)" data-i18n="Modal" data-i18n-title="An\xE1lisis modal (frecuencias y modos)">\u26A1 Modal</button>
        <button id="cad3d-mode-prev" style="display:none" title="Modo anterior" data-i18n-title="Modo anterior">\u25C0</button>
        <button id="cad3d-mode-next" style="display:none" title="Modo siguiente" data-i18n-title="Modo siguiente">\u25B6</button>
        <input id="cad3d-modal-scale" type="number" min="0.1" max="100" step="0.5" value="15" style="display:none;width:40px;font-size:10px;padding:1px 3px;background:var(--cad-bg);color:var(--cad-heading);border:1px solid var(--cad-border);border-radius:3px;text-align:center" title="Escala de animacion (% del modelo)" />
      </div>
      <div id="cad3d-mode-label" style="display:none;color:var(--cad-heading);font-size:10px;line-height:16px;padding:2px 4px;white-space:nowrap;overflow-x:auto">Modo 1</div>
      <div class="btn-row" style="margin-top:2px">
        <button id="cad3d-nonlinear" title="An\xE1lisis no-lineal din\xE1mico (BRB + sismo)" data-i18n="Nonlinear" data-i18n-title="An\xE1lisis no-lineal din\xE1mico (BRB + sismo)">\u{1F525} Nonlinear</button>
        <button id="cad3d-pushover" title="Pushover c\xEDclico con hist\xE9resis" data-i18n="Pushover" data-i18n-title="Pushover c\xEDclico con hist\xE9resis">\u{1F4CA} Pushover</button>
        <button id="cad3d-fem-solver" title="Report Explained: derivaci\xF3n FEM paso a paso de todos los elementos" data-i18n="Report Explained" data-i18n-title="Report Explained: derivaci\xF3n FEM paso a paso de todos los elementos">\u{1F4D0} Report Explained</button>
        <button id="cad3d-calc" title="Calculadora FEM: editor MATLAB + output KaTeX" data-i18n="C\xE1lculo" data-i18n-title="Calculadora FEM: editor MATLAB + output KaTeX">\u{1F9EE} Calc</button>
        <button id="cad3d-tutorials" title="Tutoriales FEM: teor\xEDa + pr\xE1ctica interactiva" data-i18n="Tutorials" data-i18n-title="Tutoriales FEM: teor\xEDa + pr\xE1ctica interactiva">\u{1F4DA} Tutorials</button>
        <button id="cad3d-log" title="Ver log del solver" data-i18n="Log" data-i18n-title="Ver log del solver">\u{1F4CB} Log</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button id="cad3d-cli-toggle" title="Abrir/cerrar consola CLI" data-i18n="CLI" data-i18n-title="Abrir/cerrar consola CLI">\u2328 CLI</button>
      </div>
      <div id="cad3d-cli-panel" style="display:none;margin-top:2px;background:rgba(0,0,0,0.8);border:1px solid #444;border-radius:4px;padding:4px;max-height:200px;overflow-y:auto">
        <div id="cad3d-cli-output" style="font-family:monospace;font-size:10px;color:#0f0;white-space:pre-wrap;max-height:140px;overflow-y:auto;margin-bottom:4px"></div>
        <input class="cmd-input" id="cad3d-cmd" placeholder="cad.addNode(0,0,0) | cad.building([5,5],[4],3) | cad.info()" style="width:100%;font-family:monospace" />
      </div>
    </div>
  `;
    let _t = null;
    function ja() {
      var _a2, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, a = O, c = b, s = [];
      if (s.push("# Awatif FEM \u2014 Model Export"), s.push(`# Generator: ${T || "custom"}`), s.push(`# Units: ${c}, ${a}`), s.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), s.push(""), s.push(`## NODES (${t.length})`), s.push("# idx     X          Y          Z"), t.forEach((r, d) => {
        s.push(`  ${String(d).padStart(4)}  ${r[0].toFixed(4).padStart(10)}  ${r[1].toFixed(4).padStart(10)}  ${r[2].toFixed(4).padStart(10)}`);
      }), s.push(""), s.push(`## ELEMENTS (${o.length})`), s.push("# idx    nodeI  nodeJ"), o.forEach((r, d) => {
        const g = r.map((S) => String(S).padStart(6)).join("");
        s.push(`  ${String(d).padStart(4)}  ${g}`);
      }), s.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (s.push(`## SUPPORTS (${n.supports.size})`), s.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((r, d) => {
        const g = r.map((S) => S ? "  1" : "  0").join("");
        s.push(`  ${String(d).padStart(4)} ${g}`);
      }), s.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (s.push(`## LOADS (${n.loads.size})`), s.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((r, d) => {
        const g = r.map((S) => S.toFixed(3).padStart(11)).join(" ");
        s.push(`  ${String(d).padStart(4)}  ${g}`);
      }), s.push("")), l) {
        s.push("## ELEMENT PROPERTIES");
        const r = [
          {
            name: "E",
            map: l.elasticities
          },
          {
            name: "A",
            map: l.areas
          },
          {
            name: "Iz",
            map: l.momentsOfInertiaZ
          },
          {
            name: "Iy",
            map: l.momentsOfInertiaY
          },
          {
            name: "G",
            map: l.shearModuli
          },
          {
            name: "J",
            map: l.torsionalConstants
          },
          {
            name: "rho",
            map: l.densities
          }
        ], d = "# elem  " + r.map((g) => g.name.padStart(12)).join(" ");
        s.push(d);
        for (let g = 0; g < o.length; g++) {
          const S = r.map(($) => {
            var _a3;
            const y = (_a3 = $.map) == null ? void 0 : _a3.get(g);
            return y !== void 0 ? y.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          s.push(`  ${String(g).padStart(4)}  ${S}`);
        }
        s.push("");
      }
      const i = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      i && i.size > 0 && (s.push(`## DISPLACEMENTS (${i.size} nodes)`), s.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), i.forEach((r, d) => {
        const g = r.map((S) => S.toExponential(4).padStart(12)).join(" ");
        s.push(`  ${String(d).padStart(4)}  ${g}`);
      }), s.push(""));
      const p = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (p && p.size > 0 && (s.push(`## REACTIONS (${p.size} supports)`), s.push("# node          Rx           Ry           Rz           Mx           My           Mz"), p.forEach((r, d) => {
        const g = r.map((S) => S.toFixed(4).padStart(12)).join(" ");
        s.push(`  ${String(d).padStart(4)}  ${g}`);
      }), s.push("")), T) {
        s.push("## CLI COMMAND");
        const r = Object.entries(J).map(([d, g]) => `${d}=${g.val}`).join(" ");
        s.push(`cad.${T === "edificio" ? "building" : T}(${r})`);
      }
      return s.join(`
`);
    }
    let rn = false;
    function Wa() {
      var _a2, _b, _c, _d;
      if (_t) {
        _t.remove(), _t = null, rn = false;
        return;
      }
      const t = ja();
      _t = document.createElement("div"), _t.id = "export-overlay", _t.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, _t.innerHTML = `
      <div id="export-header" style="display:flex; align-items:center; justify-content:space-between;
        padding:8px 12px; border-bottom:1px solid var(--cad-border,#333); cursor:default;
        border-radius:8px 8px 0 0; background:var(--cad-bg,#1a1a2e);">
        <span style="font-size:12px; font-weight:bold; color:var(--cad-heading,#e0e0e0);">
          \u{1F4CB} Export \u2014 ${e.nodes.val.length}n ${e.elements.val.length}e
        </span>
        <div style="display:flex; gap:4px;">
          <button id="export-copy" style="padding:3px 8px; font-size:11px; cursor:pointer;
            background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar al clipboard">
            \u{1F4CB} Copy
          </button>
          <button id="export-json" style="padding:3px 8px; font-size:11px; cursor:pointer;
            background:#1d3557; color:#fff; border:1px solid #457b9d; border-radius:3px;" title="Formato JSON">
            {} JSON
          </button>
          <button id="export-minimize" style="padding:3px 8px; font-size:11px; cursor:pointer;
            background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar / Restaurar">
            \u25AC
          </button>
          <button id="export-close" style="padding:3px 8px; font-size:11px; cursor:pointer;
            background:#6c757d; color:#fff; border:1px solid #888; border-radius:3px;" title="Cerrar">
            \u2715
          </button>
        </div>
      </div>
      <div id="export-body" style="display:flex; flex-direction:column; padding:8px 12px;">
        <textarea id="export-text" readonly style="height:350px; resize:vertical;
          font-family:'Cascadia Code','Fira Code',monospace; font-size:11px; line-height:1.4;
          background:#0d1117; color:#c9d1d9; border:1px solid #30363d; border-radius:4px;
          padding:10px; white-space:pre; overflow:auto; tab-size:8;"
        >${t.replace(/</g, "&lt;")}</textarea>
        <div id="export-status" style="font-size:11px; color:#40916c; margin-top:4px; height:14px;"></div>
      </div>
    `, document.body.appendChild(_t), (_a2 = _t.querySelector("#export-close")) == null ? void 0 : _a2.addEventListener("click", () => {
        _t == null ? void 0 : _t.remove(), _t = null, rn = false;
      }), (_b = _t.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = _t.querySelector("#export-body"), n = _t.querySelector("#export-minimize");
        rn = !rn, rn ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", _t.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", _t.style.width = "720px");
      }), (_c = _t.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = _t.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = _t.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = _t.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e2, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, a = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, c = {
          generator: T || "custom",
          units: {
            force: b,
            length: O
          },
          nodes: o.map((d, g) => ({
            id: g,
            x: d[0],
            y: d[1],
            z: d[2]
          })),
          elements: n.map((d, g) => ({
            id: g,
            nodes: d
          }))
        };
        (l == null ? void 0 : l.supports) && (c.supports = [], l.supports.forEach((d, g) => c.supports.push({
          node: g,
          dofs: d
        }))), (l == null ? void 0 : l.loads) && (c.loads = [], l.loads.forEach((d, g) => c.loads.push({
          node: g,
          forces: d
        }))), a && (c.properties = {}, a.elasticities && (c.properties.E = Object.fromEntries(a.elasticities)), a.areas && (c.properties.A = Object.fromEntries(a.areas)), a.momentsOfInertiaZ && (c.properties.Iz = Object.fromEntries(a.momentsOfInertiaZ)), a.momentsOfInertiaY && (c.properties.Iy = Object.fromEntries(a.momentsOfInertiaY)), a.shearModuli && (c.properties.G = Object.fromEntries(a.shearModuli)), a.torsionalConstants && (c.properties.J = Object.fromEntries(a.torsionalConstants)));
        const s = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        s && s.size > 0 && (c.displacements = {}, s.forEach((d, g) => c.displacements[g] = d));
        const i = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        i && i.size > 0 && (c.reactions = {}, i.forEach((d, g) => c.reactions[g] = d));
        const p = _t.querySelector("#export-text");
        p.value = JSON.stringify(c, null, 2);
        const r = _t.querySelector("#export-status");
        r.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function st() {
      var _a2, _b, _c;
      const t = Le.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, a = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let c = 0, s = 0, i = 0;
        for (const r of n) r.length === 2 ? c++ : r.length === 3 ? s++ : r.length === 4 && i++;
        let p = `${o}n ${l}e ${a}s`;
        (i > 0 || s > 0) && (p += ` | ${c}fr`, i > 0 && (p += ` ${i}q4`), s > 0 && (p += ` ${s}tri`)), t.textContent = p;
      }
    }
    function Gn() {
      var _a2;
      if (!De || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const a = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (a <= 0) return;
        const c = ml(t, o, n, l, Math.min(a, 12));
        if (c.frequencies && c.frequencies.length > 0) {
          Fe = c, ze = t.map((r) => [
            ...r
          ]), xe = 0;
          const { extent: s } = zo(), i = (_a2 = c.modeShapes) == null ? void 0 : _a2[0];
          if (i) {
            let r = 0;
            for (let d = 0; d < t.length; d++) {
              const g = i[d * 6] || 0, S = i[d * 6 + 1] || 0, $ = i[d * 6 + 2] || 0;
              r = Math.max(r, Math.sqrt(g * g + S * S + $ * $));
            }
            Ve = r > 1e-12 ? s * 0.15 / r : 1;
          }
          const p = `${T} \u2014 ${t.length}n ${o.length}e`;
          ft.render(c, {
            title: p
          }), ft.div.style.display = "", cn(), console.log(`Modal: ${c.frequencies.length} modos. f\u2081 = ${c.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (a) {
        console.warn("Modal analysis failed:", a.message), Fe = null;
      }
    }
    function Yn() {
      ve && (cancelAnimationFrame(ve), ve = 0), ze.length > 0 && (e.nodes.val = ze.map((o) => [
        ...o
      ]));
      const t = tt();
      t && t.scene.traverse((o) => {
        var _a2;
        o.isMesh && ((_a2 = o.material) == null ? void 0 : _a2.vertexColors) && o.visible === false && (o.visible = true);
      }), ft.div.style.display = "none", Fe = null;
    }
    function cn() {
      var _a2;
      if (ve && cancelAnimationFrame(ve), !(Fe == null ? void 0 : Fe.modeShapes) || !ze.length) return;
      const t = Fe.modeShapes[xe];
      if (!t) return;
      const o = ((_a2 = Fe.frequencies) == null ? void 0 : _a2[xe]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), a = ze.length, c = e.elements.rawVal, { extent: s } = zo(), i = Le.querySelector("#cad3d-modal-scale"), p = i && parseFloat(i.value) || 15;
      let r = 0;
      for (let z = 0; z < a; z++) {
        const R = t[z * 6] || 0, k = t[z * 6 + 1] || 0, m = t[z * 6 + 2] || 0;
        r = Math.max(r, Math.sqrt(R * R + k * k + m * m));
      }
      const d = r > 1e-12 ? s * p / 100 / r : 1, g = tt();
      if (!g) return;
      let S = null, $ = null, y = null;
      g.scene.traverse((z) => {
        var _a3;
        !S && z.isPoints && z.geometry && (S = z), !$ && z.isLineSegments && z.geometry && !z.name && ($ = z), z.isMesh && ((_a3 = z.material) == null ? void 0 : _a3.vertexColors) && z.geometry && (y ? z.visible = false : y = z);
      });
      const f = new Float32Array(a * 3), h = [];
      for (const z of c) if (z.length === 2) h.push([
        z[0],
        z[1]
      ]);
      else for (let R = 0; R < z.length; R++) h.push([
        z[R],
        z[(R + 1) % z.length]
      ]);
      const I = new Float32Array(h.length * 6);
      function L() {
        const z = (performance.now() - l) / 1e3, R = Math.sin(2 * Math.PI * n * z) * d;
        for (let k = 0; k < a; k++) {
          const m = ze[k];
          f[k * 3] = m[0] + (t[k * 6] || 0) * R, f[k * 3 + 1] = m[1] + (t[k * 6 + 1] || 0) * R, f[k * 3 + 2] = m[2] + (t[k * 6 + 2] || 0) * R;
        }
        if (S) {
          const k = S.geometry, m = k.getAttribute("position");
          m && m.array.length === f.length ? (m.array.set(f), m.needsUpdate = true) : k.setAttribute("position", new Do(f.slice(), 3));
        }
        if ($) {
          for (let u = 0; u < h.length; u++) {
            const [E, C] = h[u];
            I[u * 6] = f[E * 3], I[u * 6 + 1] = f[E * 3 + 1], I[u * 6 + 2] = f[E * 3 + 2], I[u * 6 + 3] = f[C * 3], I[u * 6 + 4] = f[C * 3 + 1], I[u * 6 + 5] = f[C * 3 + 2];
          }
          const k = $.geometry, m = k.getAttribute("position");
          m && m.array.length === I.length ? (m.array.set(I), m.needsUpdate = true) : k.setAttribute("position", new Do(I.slice(), 3));
        }
        if (y) {
          const k = [];
          for (const m of c) if (m.length === 3) {
            const [u, E, C] = m;
            k.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), k.push(f[E * 3], f[E * 3 + 1], f[E * 3 + 2]), k.push(f[C * 3], f[C * 3 + 1], f[C * 3 + 2]);
          } else if (m.length === 4) {
            const [u, E, C, N] = m;
            k.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), k.push(f[E * 3], f[E * 3 + 1], f[E * 3 + 2]), k.push(f[C * 3], f[C * 3 + 1], f[C * 3 + 2]), k.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), k.push(f[C * 3], f[C * 3 + 1], f[C * 3 + 2]), k.push(f[N * 3], f[N * 3 + 1], f[N * 3 + 2]);
          }
          if (k.length > 0) {
            const m = y.geometry, u = new Float32Array(k), E = m.getAttribute("position");
            E && E.array.length === u.length ? (E.array.set(u), E.needsUpdate = true) : m.setAttribute("position", new Do(u, 3));
          }
        }
        g.render(), ve = requestAnimationFrame(L);
      }
      ve = requestAnimationFrame(L);
    }
    function Jn() {
      var _a2, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val;
      let n = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const y = ie("CM") ?? 0, f = ie("CV") ?? 0, h = y + f, I = ie("Ex") ?? 0, L = ie("Ey") ?? 0;
        if (h === 0 && I === 0 && L === 0) return;
        const z = /* @__PURE__ */ new Map(), R = [];
        for (let w = 0; w < t.length; w++) n.supports.has(w) || R.push(w);
        const k = (w) => Math.round(w * 1e3) / 1e3, m = /* @__PURE__ */ new Set();
        n.supports.forEach((w, v) => {
          m.add(`${k(t[v][0])},${k(t[v][1])}`);
        });
        const u = /* @__PURE__ */ new Set();
        for (const w of R) m.has(`${k(t[w][0])},${k(t[w][1])}`) && u.add(w);
        const E = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set();
        if (I !== 0 || L !== 0) {
          let w = -1 / 0, v = -1 / 0;
          for (const K of u) w = Math.max(w, k(t[K][0])), v = Math.max(v, k(t[K][1]));
          const P = /* @__PURE__ */ new Map();
          for (const K of u) {
            const U = k(t[K][2]);
            P.has(U) || P.set(U, []), P.get(U).push(K);
          }
          P.forEach((K) => {
            if (I !== 0) {
              const U = /* @__PURE__ */ new Set();
              for (const le of K) if (k(t[le][0]) === w) {
                const te = k(t[le][1]);
                U.has(te) || (U.add(te), E.add(le));
              }
            }
            if (L !== 0) {
              const U = /* @__PURE__ */ new Set();
              for (const le of K) if (k(t[le][1]) === v) {
                const te = k(t[le][0]);
                U.has(te) || (U.add(te), C.add(le));
              }
            }
          });
        }
        const N = 9.81, G = /* @__PURE__ */ new Map();
        for (let w = 0; w < o.length; w++) {
          const v = o[w], P = ((_a2 = l.densities) == null ? void 0 : _a2.get(w)) ?? 0;
          if (!(Math.abs(P) < 1e-15)) {
            if (v.length === 2) {
              const K = ((_b = l.areas) == null ? void 0 : _b.get(w)) ?? 0, U = t[v[0]], le = t[v[1]], te = Math.sqrt((le[0] - U[0]) ** 2 + (le[1] - U[1]) ** 2 + (le[2] - U[2]) ** 2), me = -(P * K * te * N) / 2;
              G.set(v[0], (G.get(v[0]) ?? 0) + me), G.set(v[1], (G.get(v[1]) ?? 0) + me);
            } else if (v.length >= 3) {
              const K = ((_c = l.thicknesses) == null ? void 0 : _c.get(w)) ?? 0;
              let U = 0;
              if (v.length === 3) {
                const [Q, me, de] = v.map((ke) => t[ke]);
                U = 0.5 * Math.abs((me[0] - Q[0]) * (de[1] - Q[1]) - (de[0] - Q[0]) * (me[1] - Q[1]));
              } else if (v.length === 4) {
                const [Q, me, de, ke] = v.map((Re) => t[Re]);
                if (U = 0.5 * Math.abs((me[0] - Q[0]) * (de[1] - Q[1]) - (de[0] - Q[0]) * (me[1] - Q[1])) + 0.5 * Math.abs((de[0] - Q[0]) * (ke[1] - Q[1]) - (ke[0] - Q[0]) * (de[1] - Q[1])), U < 1e-10) {
                  const Re = [
                    me[0] - Q[0],
                    me[1] - Q[1],
                    me[2] - Q[2]
                  ], q = [
                    ke[0] - Q[0],
                    ke[1] - Q[1],
                    ke[2] - Q[2]
                  ], ce = [
                    Re[1] * q[2] - Re[2] * q[1],
                    Re[2] * q[0] - Re[0] * q[2],
                    Re[0] * q[1] - Re[1] * q[0]
                  ];
                  U = Math.sqrt(ce[0] ** 2 + ce[1] ** 2 + ce[2] ** 2);
                }
              }
              const te = -(P * K * U * N) / v.length;
              for (const Q of v) G.set(Q, (G.get(Q) ?? 0) + te);
            }
          }
        }
        const x = /* @__PURE__ */ new Set();
        for (const w of o) w.length === 2 && (x.add(w[0]), x.add(w[1]));
        for (const w of R) {
          const v = E.has(w) ? I : 0, P = C.has(w) ? L : 0, K = G.get(w) ?? 0, U = x.has(w) ? h : 0, le = K + U;
          (v !== 0 || P !== 0 || Math.abs(le) > 1e-10) && z.set(w, [
            v,
            P,
            le,
            0,
            0,
            0
          ]);
        }
        n = {
          ...n,
          loads: z
        }, e.nodeInputs.val = n;
      }
      const a = performance.now();
      let c = 0, s = 0, i = 0;
      for (const y of o) y.length === 2 ? c++ : y.length === 3 ? i++ : y.length === 4 && s++;
      const p = ((_d = n.supports) == null ? void 0 : _d.size) || 0, r = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, d = t.length * 6, g = d - p * 6, S = [], $ = (y) => S.push(y);
      $('<b style="color:var(--cad-heading)">FEM Solver</b>'), $(`<span style="color:var(--cad-info)">${A("Modelo")}:</span> ${t.length} ${A("nodos")}, ${o.length} elem`), c && $(`&nbsp;&nbsp;Frames: <b>${c}</b>`), s && $(`&nbsp;&nbsp;Shell Q4: <b>${s}</b>`), i && $(`&nbsp;&nbsp;${A("Tri\xE1ngulos")}: <b>${i}</b>`), $(`&nbsp;&nbsp;${A("Apoyos")}: ${p} &nbsp;|&nbsp; ${A("Cargas")}: ${r}`), $(`<span style="color:var(--cad-info)">DOFs:</span> ${d} total, ~${g} ${A("libres")}`), $('<hr style="border-color:var(--cad-border);margin:4px 0">'), $(`<span style="color:#888">1.</span> ${A("Ensamblaje")} <b>K</b> global (${d}&times;${d})`), $("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const y = Ft(t, o, n, l), f = performance.now() - a;
        if (y) {
          e.deformOutputs.val = y, $(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${f.toFixed(0)} ms</span>`);
          let h = 0, I = -1, L = 0, z = 0;
          y.deformations && y.deformations.forEach((E, C) => {
            const N = Math.sqrt(E[0] * E[0] + E[1] * E[1] + E[2] * E[2]);
            N > h && (h = N, I = C, L = E[0], z = E[2]);
          }), $('<span style="color:#888">3.</span> Desplazamientos:'), $(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${h.toExponential(3)}</b> m <span style="color:#666">(nodo ${I})</span>`), $(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(L * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(z * 1e3).toFixed(4)} mm`);
          const R = performance.now(), k = Eo(t, o, l, y), m = performance.now() - R;
          k && (e.analyzeOutputs.val = k, $(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${m.toFixed(0)} ms</span>`), $("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const u = performance.now() - a;
          $('<hr style="border-color:var(--cad-border);margin:4px 0">'), $(`<b style="color:#00cc88">&#10004; Completado: ${u.toFixed(0)} ms</b>`);
        }
      } catch (y) {
        const f = performance.now() - a;
        $(`<b style="color:#ff4444">&#10008; Error (${f.toFixed(0)} ms): ${y.message}</b>`);
      }
      window.__femLog = S, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - a).toFixed(0)}ms`), De && setTimeout(() => Gn(), 50);
    }
    function Vn(t, o) {
      const n = t * o, l = t * o * o * o / 12, a = o * t * t * t / 12, c = Math.min(t, o), s = Math.max(t, o), i = c * c * c * s * (1 / 3 - 0.21 * c / s * (1 - c * c * c * c / (12 * s * s * s * s)));
      return {
        A: n,
        Iz: l,
        Iy: a,
        J: i
      };
    }
    function Hs(t) {
      const o = t / 2, n = Math.PI * o * o, l = Math.PI * o * o * o * o / 4, a = Math.PI * o * o * o * o / 2;
      return {
        A: n,
        Iz: l,
        Iy: l,
        J: a
      };
    }
    function Xn(t, o, n, l) {
      const a = o - 2 * n, c = 2 * t * n + a * l, s = (t * o * o * o - (t - l) * a * a * a) / 12, i = (2 * n * t * t * t + a * l * l * l) / 12, p = (2 * t * n * n * n + a * l * l * l) / 3;
      return {
        A: c,
        Iz: s,
        Iy: i,
        J: p
      };
    }
    function Un(t, o, n) {
      const l = t - 2 * n, a = o - 2 * n, c = t * o - l * a, s = (t * o * o * o - l * a * a * a) / 12, i = (o * t * t * t - a * l * l * l) / 12, p = (t - n) * (o - n), r = 2 * ((t - n) / n + (o - n) / n), d = 4 * p * p / (r > 0 ? r : 1);
      return {
        A: c,
        Iz: s,
        Iy: i,
        J: d
      };
    }
    function Ga(t, o, n, l, a, c, s) {
      const p = 4700 * Math.sqrt(c / 1e3) * 1e3 / l, r = t - 2 * n, d = o - 2 * n, g = t * o - r * d, S = (t * o * o * o - r * d * d * d) / 12, $ = (o * t * t * t - d * r * r * r) / 12, y = r * d, f = r * d * d * d / 12, h = d * r * r * r / 12, I = g + p * y, L = S + p * f, z = $ + p * h, R = l / (2 * (1 + a)), k = (t - n) * (o - n), m = 2 * ((t - n) / n + (o - n) / n), u = 4 * k * k / (m > 0 ? m : 1);
      return {
        A: I,
        Iz: L,
        Iy: z,
        J: u,
        Es: l,
        Gs: R,
        A_steel: g,
        A_conc: y
      };
    }
    function To() {
      if (!e.elementInputs) return;
      const t = e.elements.val, o = M, n = {
        elasticities: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map(),
        areas: /* @__PURE__ */ new Map(),
        momentsOfInertiaZ: /* @__PURE__ */ new Map(),
        momentsOfInertiaY: /* @__PURE__ */ new Map(),
        torsionalConstants: /* @__PURE__ */ new Map(),
        densities: /* @__PURE__ */ new Map(),
        sectionShapes: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map()
      };
      if ((T === "edificio" || T === "frame") && B.size > 0) {
        const { colMat: a, vigaMat: c, colShape: s, fc: i, perFloor: p } = _e, r = 4700 * Math.sqrt(i / 1e3) * 1e3, d = r / (2 * 1.2), g = 24 / 9.80665, S = o.E, $ = o.G, y = o.rho;
        for (let f = 0; f < t.length; f++) {
          if (ue.has(f)) {
            const E = 4700 * Math.sqrt(i / 1e3) * 1e3, C = 0.2;
            n.elasticities.set(f, E), n.poissonsRatios.set(f, C), n.thicknesses.set(f, Ge), n.shearModuli.set(f, E / (2 * (1 + C))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          if (Nt.has(f)) {
            const E = 4700 * Math.sqrt(i / 1e3) * 1e3, C = 0.2;
            n.elasticities.set(f, E), n.poissonsRatios.set(f, C), n.thicknesses.set(f, dt), n.shearModuli.set(f, E / (2 * (1 + C))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          const h = B.has(f), I = Me.get(f) ?? 0, L = p[I] ?? p[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let z, R, k, m;
          if (h) if (a === 0) R = r, k = d, m = g, z = s === 1 ? Hs(L.dCol) : Vn(L.bCol, L.hCol), n.sectionShapes.set(f, s === 1 ? {
            type: "circ",
            d: L.dCol
          } : {
            type: "rect",
            b: L.bCol,
            h: L.hCol
          });
          else if (a === 1) {
            R = S, k = $, m = y;
            const E = _e.steelColType;
            if (E <= 1) {
              const C = Ro[L.colProfileIdx] ?? Ro[0];
              z = {
                A: C.A,
                Iz: C.Iz,
                Iy: C.Iy,
                J: C.J
              }, n.sectionShapes.set(f, {
                type: "I",
                b: C.bf,
                h: C.d,
                name: C.name
              });
            } else if (E === 2) {
              const C = L.colBf ?? 0.3, N = L.colHf ?? 0.3, G = L.colTf ?? 0.02, x = L.colTw ?? 0.012;
              z = Xn(C, N, G, x);
              const w = `I${(N * 100).toFixed(0)}x${(C * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: C,
                h: N,
                tf: G,
                tw: x,
                name: w
              });
            } else {
              const C = L.colBc ?? 0.3, N = L.colHc ?? 0.3, G = L.colT ?? 0.01;
              z = Un(C, N, G);
              const x = `\u25A1${(N * 100).toFixed(0)}x${(C * 100).toFixed(0)}x${(G * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: C,
                h: N,
                tw: G,
                name: x
              });
            }
          } else {
            const E = L.colBc ?? 0.3, C = L.colHc ?? 0.3, N = L.colT ?? 0.01, G = L.colFc ?? 28e3, x = L.colEs ?? 2e8, w = L.colNuS ?? 0.3;
            L.colNuC;
            const v = Ga(E, C, N, x, w, G);
            z = {
              A: v.A,
              Iz: v.Iz,
              Iy: v.Iy,
              J: v.J
            }, R = v.Es, k = v.Gs;
            const P = 7.85, K = 24 / 9.80665;
            m = (P * v.A_steel + K * v.A_conc) / (v.A_steel + v.A_conc);
            const U = `CFT ${(C * 1e3).toFixed(0)}X${(E * 1e3).toFixed(0)}X${(N * 1e3).toFixed(0)}`;
            n.sectionShapes.set(f, {
              type: "CFT",
              b: E,
              h: C,
              tw: N,
              name: U
            });
          }
          else {
            const E = Ae.get(f), C = E ? E.dir === "x" ? L.vigasX : L.vigasY : [], N = E ? C[E.bay] ?? C[0] ?? bt() : bt();
            if (c === 0) R = r, k = d, m = g, z = Vn(N.b, N.h), n.sectionShapes.set(f, {
              type: "rect",
              b: N.b,
              h: N.h
            });
            else {
              R = S, k = $, m = y;
              const G = _e.steelVigaType;
              if (G <= 1) {
                const x = Ro[N.profileIdx ?? 0] ?? Ro[0];
                z = {
                  A: x.A,
                  Iz: x.Iz,
                  Iy: x.Iy,
                  J: x.J
                }, n.sectionShapes.set(f, {
                  type: "I",
                  b: x.bf,
                  h: x.d,
                  name: x.name
                });
              } else if (G === 2) {
                const x = N.bf ?? 0.2, w = N.hf ?? 0.4, v = N.tf ?? 0.015, P = N.tw ?? 0.01;
                z = Xn(x, w, v, P);
                const K = `I${(w * 100).toFixed(0)}x${(x * 100).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "I",
                  b: x,
                  h: w,
                  tf: v,
                  tw: P,
                  name: K
                });
              } else {
                const x = N.bc ?? 0.2, w = N.hc ?? 0.3, v = N.t ?? 8e-3;
                z = Un(x, w, v);
                const P = `\u25A1${(w * 100).toFixed(0)}x${(x * 100).toFixed(0)}x${(v * 1e3).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "HSS",
                  b: x,
                  h: w,
                  tw: v,
                  name: P
                });
              }
            }
          }
          const u = he.get(f);
          if (u) {
            if ((u.material ?? 1) === 0 ? (R = r, k = d, m = g) : (R = S, k = $, m = y), u.secType === "rect" && u.b && u.h) z = Vn(u.b, u.h), n.sectionShapes.set(f, {
              type: "rect",
              b: u.b,
              h: u.h
            });
            else if (u.secType === "circ" && u.b) z = Hs(u.b), n.sectionShapes.set(f, {
              type: "circ",
              d: u.b
            });
            else if ((u.secType === "W" || u.secType === "HSS") && u.profileIdx !== void 0) {
              const C = Ro[u.profileIdx] ?? Ro[0];
              z = {
                A: C.A,
                Iz: C.Iz,
                Iy: C.Iy,
                J: C.J
              }, n.sectionShapes.set(f, {
                type: "I",
                b: C.bf,
                h: C.d,
                name: C.name
              });
            } else if (u.secType === "I-param" && u.bf && u.hf && u.tf && u.tw) {
              z = Xn(u.bf, u.hf, u.tf, u.tw);
              const C = `I${(u.hf * 100).toFixed(0)}x${(u.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: u.bf,
                h: u.hf,
                tf: u.tf,
                tw: u.tw,
                name: C
              });
            } else if (u.secType === "tubular" && u.bc && u.hc && u.t) {
              z = Un(u.bc, u.hc, u.t);
              const C = `\u25A1${(u.hc * 100).toFixed(0)}x${(u.bc * 100).toFixed(0)}x${(u.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: u.bc,
                h: u.hc,
                tw: u.t,
                name: C
              });
            }
          }
          n.elasticities.set(f, R), n.shearModuli.set(f, k), n.areas.set(f, z.A), n.momentsOfInertiaZ.set(f, z.Iy), n.momentsOfInertiaY.set(f, z.Iz), n.torsionalConstants.set(f, z.J), n.densities.set(f, m), u && u.releases12 && u.releases12.some((E) => E) && (n.momentReleases || (n.momentReleases = /* @__PURE__ */ new Map()), n.momentReleases.set(f, u.releases12)), u && u.springs12 && u.springs12.some((E) => E > 0) && (n.partialFixitySprings || (n.partialFixitySprings = /* @__PURE__ */ new Map()), n.partialFixitySprings.set(f, u.springs12));
        }
      } else for (let a = 0; a < t.length; a++) n.elasticities.set(a, o.E), n.shearModuli.set(a, o.G), n.areas.set(a, o.A), n.momentsOfInertiaZ.set(a, o.Iy), n.momentsOfInertiaY.set(a, o.Iz), n.torsionalConstants.set(a, o.J), n.densities.set(a, o.rho);
      e.elementInputs.val = n;
    }
    function js(t) {
      Le.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === t);
      });
    }
    window.innerWidth <= 600 && Le.classList.add("collapsed"), setTimeout(() => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q;
      (_a2 = Le.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (x) => {
        x.stopPropagation(), Le.classList.add("collapsed");
      }), (_b = Le.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (x) => {
        x.stopPropagation(), Le.classList.remove("collapsed");
      }), Le.querySelectorAll("[data-ex]").forEach((x) => {
        x.addEventListener("click", (w) => {
          w.stopPropagation();
          const v = x.dataset.ex;
          js(v), ot.example(v);
        });
      }), Le.querySelectorAll("[data-view]").forEach((x) => {
        x.addEventListener("click", (w) => {
          w.stopPropagation();
          const v = x.dataset.view;
          Ao(v), Le.querySelectorAll("[data-view]").forEach((P) => P.classList.remove("view-active")), x.classList.add("view-active");
        });
      }), (_c = Le.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (x) => {
        x.stopPropagation(), T = "", ka.val = false, Ha(), ot.clear();
      }), (_d = Le.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (x) => {
        var _a3;
        x.stopPropagation(), po && (po = false, _o()), yo && yn(), eo = !eo, (_a3 = Le.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", eo);
        const v = tt();
        v && (v.controls.enabled = !eo), eo || vn();
      }), (_e2 = Le.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (x) => {
        var _a3;
        x.stopPropagation(), po && (po = false, _o()), eo && vn(), yo = !yo, (_a3 = Le.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", yo), yo ? Ua() : yn();
      }), (_f = Le.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (x) => {
        var _a3;
        x.stopPropagation(), eo && vn(), yo && yn(), po = !po, (_a3 = Le.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", po), po || _o();
      }), (_g = Le.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (x) => {
        x.stopPropagation(), ot.clear(), Ke = null;
      });
      const t = Le.querySelector("#cad3d-tests-menu");
      t && t.addEventListener("change", () => {
        const x = t.value;
        t.value = "", x && o(x);
      });
      function o(x) {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const P = 15e3 * Math.sqrt(210) * 10, K = 0.2, U = P / (2 * (1 + K)), le = 0.09, te = 0.3 ** 4 / 12, Q = 0.141 * 0.3 ** 4, me = 0.25 * 0.4, de = 0.25 * 0.4 ** 3 / 12, ke = 0.4 * 0.25 ** 3 / 12, Re = 1e-3, q = 5 / 6 * le, ce = 5 / 6 * me, oe = [];
        function pe(ee, ge, Ie) {
          const se = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            shearAreasY: /* @__PURE__ */ new Map(),
            shearAreasZ: /* @__PURE__ */ new Map()
          };
          for (const we of ge) se.elasticities.set(we, P), se.shearModuli.set(we, U), se.areas.set(we, le), se.momentsOfInertiaZ.set(we, te), se.momentsOfInertiaY.set(we, te), se.torsionalConstants.set(we, Q), se.shearAreasY.set(we, q), se.shearAreasZ.set(we, q);
          for (const we of Ie) se.elasticities.set(we, P), se.shearModuli.set(we, U), se.areas.set(we, me), se.momentsOfInertiaZ.set(we, ke), se.momentsOfInertiaY.set(we, de), se.torsionalConstants.set(we, Re), se.shearAreasY.set(we, ce), se.shearAreasZ.set(we, ce);
          return se;
        }
        if (x === "test-cantilever" || x === "test-all") {
          const Ie = 270 / (3 * P * te), se = [
            [
              0,
              0,
              0
            ],
            [
              3,
              0,
              0
            ]
          ], we = [
            [
              0,
              1
            ]
          ], Be = pe(1, [], []);
          Be.elasticities.set(0, P), Be.shearModuli.set(0, U), Be.areas.set(0, le), Be.momentsOfInertiaZ.set(0, te), Be.momentsOfInertiaY.set(0, te), Be.torsionalConstants.set(0, Q);
          const lt = Ft(se, we, {
            supports: /* @__PURE__ */ new Map([
              [
                0,
                [
                  true,
                  true,
                  true,
                  true,
                  true,
                  true
                ]
              ]
            ]),
            loads: /* @__PURE__ */ new Map([
              [
                1,
                [
                  0,
                  0,
                  10,
                  0,
                  0,
                  0
                ]
              ]
            ])
          }, Be);
          oe.push({
            name: "Cantilever Beam",
            formulation: "Euler-Bernoulli (PL\xB3/3EI)",
            nodes: se,
            elements: we,
            results: [
              {
                label: "Uz tip (cm)",
                awatif: lt.deformations.get(1)[2] * 100,
                reference: Ie * 100,
                refSource: "Analytical"
              }
            ]
          });
        }
        if (x === "test-portal-1p" || x === "test-all") {
          const ee = [
            [
              0,
              0,
              0
            ],
            [
              4,
              0,
              0
            ],
            [
              0,
              0,
              3
            ],
            [
              4,
              0,
              3
            ]
          ], ge = [
            [
              0,
              2
            ],
            [
              1,
              3
            ],
            [
              2,
              3
            ]
          ], Ie = pe(3, [
            0,
            1
          ], [
            2
          ]), se = Ft(ee, ge, {
            supports: /* @__PURE__ */ new Map([
              [
                0,
                [
                  true,
                  true,
                  true,
                  true,
                  true,
                  true
                ]
              ],
              [
                1,
                [
                  true,
                  true,
                  true,
                  true,
                  true,
                  true
                ]
              ]
            ]),
            loads: /* @__PURE__ */ new Map([
              [
                2,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ],
              [
                3,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ]
            ])
          }, Ie);
          oe.push({
            name: "Portal 1-Story (Timoshenko)",
            formulation: "Frame Timoshenko (As=5/6\xB7A)",
            nodes: ee,
            elements: ge,
            results: [
              {
                label: "Ux top (cm)",
                awatif: se.deformations.get(2)[0] * 100,
                reference: 2.0618,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (x === "test-portal-2p" || x === "test-all") {
          const ee = [
            [
              0,
              0,
              0
            ],
            [
              4,
              0,
              0
            ],
            [
              0,
              0,
              3
            ],
            [
              4,
              0,
              3
            ],
            [
              0,
              0,
              6
            ],
            [
              4,
              0,
              6
            ]
          ], ge = [
            [
              0,
              2
            ],
            [
              1,
              3
            ],
            [
              2,
              4
            ],
            [
              3,
              5
            ],
            [
              2,
              3
            ],
            [
              4,
              5
            ]
          ], Ie = pe(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]), se = Ft(ee, ge, {
            supports: /* @__PURE__ */ new Map([
              [
                0,
                [
                  true,
                  true,
                  true,
                  true,
                  true,
                  true
                ]
              ],
              [
                1,
                [
                  true,
                  true,
                  true,
                  true,
                  true,
                  true
                ]
              ]
            ]),
            loads: /* @__PURE__ */ new Map([
              [
                4,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ],
              [
                5,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ]
            ])
          }, Ie);
          oe.push({
            name: "Portal 2-Story",
            formulation: "Frame Timoshenko",
            nodes: ee,
            elements: ge,
            results: [
              {
                label: "Ux Z=3m (cm)",
                awatif: se.deformations.get(2)[0] * 100,
                reference: 2.5188,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux Z=6m (cm)",
                awatif: se.deformations.get(4)[0] * 100,
                reference: 5.6424,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (x === "test-wall-only" || x === "test-all") {
          const ee = [
            [
              0,
              0,
              0
            ],
            [
              4,
              0,
              0
            ],
            [
              4,
              0,
              3
            ],
            [
              0,
              0,
              3
            ]
          ], ge = [
            [
              0,
              1,
              2,
              3
            ]
          ], se = Ft(ee, ge, {
            supports: /* @__PURE__ */ new Map([
              [
                0,
                [
                  true,
                  true,
                  true,
                  true,
                  true,
                  true
                ]
              ],
              [
                1,
                [
                  true,
                  true,
                  true,
                  true,
                  true,
                  true
                ]
              ]
            ]),
            loads: /* @__PURE__ */ new Map([
              [
                2,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ],
              [
                3,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ]
            ])
          }, {
            elasticities: /* @__PURE__ */ new Map([
              [
                0,
                P
              ]
            ]),
            shearModuli: /* @__PURE__ */ new Map([
              [
                0,
                U
              ]
            ]),
            thicknesses: /* @__PURE__ */ new Map([
              [
                0,
                0.2
              ]
            ]),
            poissonsRatios: /* @__PURE__ */ new Map([
              [
                0,
                K
              ]
            ])
          });
          oe.push({
            name: "Wall Q4 Only",
            formulation: "Membrane (incompatible modes) + Mindlin-Reissner + Hughes-Brezzi drilling",
            nodes: ee,
            elements: ge,
            results: [
              {
                label: "Ux top (cm)",
                awatif: se.deformations.get(2)[0] * 100,
                reference: 0.013519,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (x === "test-portal-wall" || x === "test-all") {
          const ee = [
            [
              0,
              0,
              0
            ],
            [
              4,
              0,
              0
            ],
            [
              0,
              0,
              3
            ],
            [
              4,
              0,
              3
            ],
            [
              0,
              0,
              6
            ],
            [
              4,
              0,
              6
            ]
          ], ge = [
            [
              0,
              2
            ],
            [
              1,
              3
            ],
            [
              2,
              4
            ],
            [
              3,
              5
            ],
            [
              2,
              3
            ],
            [
              4,
              5
            ],
            [
              0,
              1,
              3,
              2
            ]
          ], Ie = pe(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]);
          Ie.elasticities.set(6, P), Ie.shearModuli.set(6, U), Ie.thicknesses = /* @__PURE__ */ new Map([
            [
              6,
              0.2
            ]
          ]), Ie.poissonsRatios = /* @__PURE__ */ new Map([
            [
              6,
              K
            ]
          ]);
          const se = Ft(ee, ge, {
            supports: /* @__PURE__ */ new Map([
              [
                0,
                [
                  true,
                  true,
                  true,
                  true,
                  true,
                  true
                ]
              ],
              [
                1,
                [
                  true,
                  true,
                  true,
                  true,
                  true,
                  true
                ]
              ]
            ]),
            loads: /* @__PURE__ */ new Map([
              [
                4,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ],
              [
                5,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ]
            ])
          }, Ie);
          oe.push({
            name: "Portal 2-Story + Wall Q4",
            formulation: "Frame Timoshenko + Shell Q4 (Hughes-Brezzi drilling)",
            nodes: ee,
            elements: ge,
            results: [
              {
                label: "Ux h=3m (cm)",
                awatif: se.deformations.get(2)[0] * 100,
                reference: 0.0195,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux h=6m (cm)",
                awatif: se.deformations.get(4)[0] * 100,
                reference: 2.1133,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (x === "test-wilson-beam" || x === "test-all") {
          const lt = 0.6666666666666666, et = [
            [
              0,
              -1,
              0
            ],
            [
              2.5,
              -1,
              0
            ],
            [
              5,
              -1,
              0
            ],
            [
              5,
              1,
              0
            ],
            [
              2.5,
              1,
              0
            ],
            [
              0,
              1,
              0
            ]
          ], vt = [
            [
              0,
              1,
              4,
              5
            ],
            [
              1,
              2,
              3,
              4
            ]
          ], Dt = {
            elasticities: /* @__PURE__ */ new Map([
              [
                0,
                1500
              ],
              [
                1,
                1500
              ]
            ]),
            shearModuli: /* @__PURE__ */ new Map([
              [
                0,
                600
              ],
              [
                1,
                600
              ]
            ]),
            thicknesses: /* @__PURE__ */ new Map([
              [
                0,
                1
              ],
              [
                1,
                1
              ]
            ]),
            poissonsRatios: /* @__PURE__ */ new Map([
              [
                0,
                0.25
              ],
              [
                1,
                0.25
              ]
            ])
          }, yt = /* @__PURE__ */ new Map();
          yt.set(0, [
            true,
            true,
            true,
            true,
            true,
            true
          ]), yt.set(5, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
          const Ct = /* @__PURE__ */ new Map();
          Ct.set(2, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]), Ct.set(3, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]);
          const go = 5 ** 3 / (3 * 1500 * lt);
          try {
            const Kt = Ft(et, vt, {
              supports: yt,
              loads: Ct
            }, Dt), jt = Math.abs(((_b2 = (_a3 = Kt.deformations) == null ? void 0 : _a3.get(2)) == null ? void 0 : _b2[1]) ?? 0), at = Math.abs(((_d2 = (_c2 = Kt.deformations) == null ? void 0 : _c2.get(3)) == null ? void 0 : _d2[1]) ?? 0), $t = (jt + at) / 2, Ut = $t / go;
            oe.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "2 Q4 elements + incompatible modes (Wilson 1971, Table 6.1)",
              nodes: et,
              elements: vt,
              results: [
                {
                  label: "Uy/Uy_exact (cortante)",
                  awatif: Ut,
                  reference: 0.932,
                  refSource: "Wilson Table 6.1"
                },
                {
                  label: "Uy free end",
                  awatif: $t,
                  reference: go * 0.932,
                  refSource: "Wilson"
                }
              ]
            });
          } catch (Kt) {
            oe.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "ERROR: " + Kt.message,
              nodes: et,
              elements: vt,
              results: [
                {
                  label: "Error",
                  awatif: 0,
                  reference: 0.932,
                  refSource: "Wilson"
                }
              ]
            });
          }
        }
        if (x === "test-scordelis" || x === "test-all") {
          const lt = 40 * Math.PI / 180, et = 8, vt = 8, Dt = [];
          for (let at = 0; at <= et; at++) for (let $t = 0; $t <= vt; $t++) {
            const Ut = 25 * at / et, Rt = lt * $t / vt, fo = 25 * Math.sin(Rt), ro = 25 * Math.cos(Rt) - 25 * Math.cos(lt);
            Dt.push([
              Ut,
              fo,
              ro
            ]);
          }
          const yt = [];
          for (let at = 0; at < et; at++) for (let $t = 0; $t < vt; $t++) {
            const Ut = at * (vt + 1) + $t, Rt = (at + 1) * (vt + 1) + $t, fo = (at + 1) * (vt + 1) + ($t + 1), ro = at * (vt + 1) + ($t + 1);
            yt.push([
              Ut,
              Rt,
              fo,
              ro
            ]);
          }
          const Ct = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            thicknesses: /* @__PURE__ */ new Map(),
            poissonsRatios: /* @__PURE__ */ new Map()
          }, go = 432e6 / (2 * 1);
          for (let at = 0; at < yt.length; at++) Ct.elasticities.set(at, 432e6), Ct.shearModuli.set(at, go), Ct.thicknesses.set(at, 0.25), Ct.poissonsRatios.set(at, 0);
          const Kt = /* @__PURE__ */ new Map();
          for (let at = 0; at <= et; at++) for (let $t = 0; $t <= vt; $t++) {
            const Ut = at * (vt + 1) + $t, Rt = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            at === 0 && (Rt[0] = true, Rt[4] = true, Rt[5] = true), at === et && (Rt[1] = true, Rt[2] = true, Rt[3] = true), $t === 0 && (Rt[1] = true, Rt[3] = true, Rt[5] = true), Rt.some((fo) => fo) && Kt.set(Ut, Rt);
          }
          const jt = /* @__PURE__ */ new Map();
          for (const at of yt) {
            const $t = Dt[at[0]], Ut = Dt[at[1]], Rt = Dt[at[2]], fo = Dt[at[3]], ro = [
              Rt[0] - $t[0],
              Rt[1] - $t[1],
              Rt[2] - $t[2]
            ], wo = [
              fo[0] - Ut[0],
              fo[1] - Ut[1],
              fo[2] - Ut[2]
            ], Mn = ro[1] * wo[2] - ro[2] * wo[1], Ko = ro[2] * wo[0] - ro[0] * wo[2], un = ro[0] * wo[1] - ro[1] * wo[0], We = -90 * (0.5 * Math.sqrt(Mn * Mn + Ko * Ko + un * un)) / 4;
            for (const Et of at) {
              const oo = jt.get(Et) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              oo[2] += We, jt.set(Et, oo);
            }
          }
          try {
            const at = Ft(Dt, yt, {
              supports: Kt,
              loads: jt
            }, Ct), $t = vt, Ut = ((_f2 = (_e3 = at.deformations) == null ? void 0 : _e3.get($t)) == null ? void 0 : _f2[2]) ?? 0;
            oe.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: `Shell Q4 (${et}x${vt} mesh), Mindlin-Reissner + incompatible modes`,
              nodes: Dt,
              elements: yt,
              results: [
                {
                  label: "Uz midspan free edge (ft)",
                  awatif: Math.abs(Ut),
                  reference: 0.3086,
                  refSource: "Wilson (2004) / MacNeal-Harder"
                }
              ]
            });
          } catch (at) {
            oe.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: "ERROR: " + at.message,
              nodes: Dt,
              elements: yt,
              results: [
                {
                  label: "Error",
                  awatif: 0,
                  reference: 0.3086,
                  refSource: "Wilson"
                }
              ]
            });
          }
        }
        if (c(oe), oe.length > 0) {
          const ee = oe[oe.length - 1];
          e.nodes.val = ee.nodes, e.elements.val = ee.elements;
          const ge = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), se = Math.max(...ee.nodes.map((we) => we[2]));
          ee.nodes.forEach((we, Be) => {
            Math.abs(we[2]) < 0.01 && ge.set(Be, [
              true,
              true,
              true,
              true,
              true,
              true
            ]), Math.abs(we[2] - se) < 0.01 && Ie.set(Be, [
              10,
              0,
              0,
              0,
              0,
              0
            ]);
          }), e.nodeInputs.val = {
            supports: ge,
            loads: Ie
          }, e.elementInputs.val = {}, e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        }
      }
      function n(x) {
        const w = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`$ File exported from Awatif FEM Validation: ${x.name}`), v.push(" "), v.push("$ PROGRAM INFORMATION"), v.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), v.push(""), v.push("$ CONTROLS"), v.push('  UNITS  "TONF"  "M"  "C"  '), v.push("");
        const P = /* @__PURE__ */ new Set();
        x.nodes.forEach((q) => P.add(Math.round(q[1] * 1e4) / 1e4));
        const K = [
          ...P
        ].sort((q, ce) => q - ce), U = K.map((q, ce) => ce === 0 ? "Base" : `Level_${ce}`), le = /* @__PURE__ */ new Map();
        K.forEach((q, ce) => le.set(q, U[ce])), v.push("$ STORIES - IN SEQUENCE FROM TOP");
        for (let q = K.length - 1; q >= 1; q--) v.push(`  STORY "${U[q]}"  HEIGHT ${K[q] - K[q - 1]} MASTERSTORY "Yes"  `);
        v.push(`  STORY "Base"  ELEV ${K[0]} `), v.push(""), v.push("$ MATERIAL PROPERTIES"), v.push('  MATERIAL  "CONC"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4'), v.push(`  MATERIAL  "CONC"    SYMTYPE "Isotropic"  E ${w}  U 0.2  A 1E-05`), v.push(""), v.push("$ FRAME SECTIONS"), v.push('  FRAMESECTION  "COL30"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.3 B 0.3 '), v.push('  FRAMESECTION  "VIGA"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.4 B 0.25 '), v.push("");
        const te = x.elements.some((q) => q.length === 4);
        te && (v.push("$ WALL/SLAB/DECK SECTIONS"), v.push('  SHELLPROP  "Muro20"  PROPTYPE  "Wall"  MATERIAL "CONC"  MODELINGTYPE "ShellThick"  WALLTHICKNESS 0.2 '), v.push(""));
        const Q = /* @__PURE__ */ new Map();
        let me = 0;
        x.nodes.forEach((q) => {
          const ce = `${q[0]},${q[2]}`;
          Q.has(ce) || Q.set(ce, `${++me}`);
        }), v.push("$ POINT COORDINATES");
        for (const [q, ce] of Q) {
          const [oe, pe] = q.split(",").map(Number);
          v.push(`  POINT "${ce}"  ${oe} ${pe} `);
        }
        v.push("");
        const de = (q) => {
          const ce = x.nodes[q], oe = `${ce[0]},${ce[2]}`;
          return {
            pt: Q.get(oe) || "1",
            story: le.get(Math.round(ce[1] * 1e4) / 1e4) || "Base"
          };
        };
        v.push("$ LINE CONNECTIVITIES");
        const ke = [];
        if (x.elements.forEach((q, ce) => {
          if (q.length !== 2) return;
          const oe = x.nodes[q[0]], pe = x.nodes[q[1]], ee = Math.abs(pe[1] - oe[1]), ge = Math.sqrt((pe[0] - oe[0]) ** 2 + (pe[2] - oe[2]) ** 2), Ie = ee > ge * 0.5, se = de(q[0]), we = de(q[1]), Be = Ie ? "COL30" : "VIGA";
          Ie ? (v.push(`  LINE  "E${ce + 1}"  COLUMN  "${se.pt}"  "${se.pt}"  1`), ke.push(`  LINEASSIGN  "E${ce + 1}"  "${we.story}"  SECTION "${Be}"  `)) : (v.push(`  LINE  "E${ce + 1}"  BEAM  "${se.pt}"  "${we.pt}"  0`), ke.push(`  LINEASSIGN  "E${ce + 1}"  "${se.story}"  SECTION "${Be}"  `));
        }), v.push(""), te) {
          v.push("$ AREA CONNECTIVITIES");
          const q = [];
          x.elements.forEach((ce, oe) => {
            if (ce.length !== 4) return;
            const pe = ce.map((ee) => de(ee));
            v.push(`  AREA "W${oe + 1}"  PANEL  4  "${pe[0].pt}"  "${pe[1].pt}"  "${pe[2].pt}"  "${pe[3].pt}"  1  1  0  0  `), q.push(`  AREAASSIGN  "W${oe + 1}"  "${pe[2].story}"  SECTION "Muro20"  `);
          }), v.push(""), v.push("$ AREA ASSIGNS"), q.forEach((ce) => v.push(ce)), v.push("");
        }
        v.push("$ POINT ASSIGNS"), x.nodes.forEach((q, ce) => {
          if (Math.abs(q[1]) < 0.01) {
            const oe = de(ce);
            v.push(`  POINTASSIGN  "${oe.pt}"  "${oe.story}"  RESTRAINT "UX UY UZ RX RY RZ"  `);
          }
        }), v.push(""), v.push("$ LINE ASSIGNS"), ke.forEach((q) => v.push(q)), v.push(""), v.push("$ LOAD PATTERNS"), v.push('  LOADPATTERN "Lat"  TYPE  "Other"  SELFWEIGHT  0'), v.push(""), v.push("$ POINT OBJECT LOADS");
        const Re = Math.max(...x.nodes.map((q) => q[1]));
        return x.nodes.forEach((q, ce) => {
          if (Math.abs(q[1] - Re) < 0.01) {
            const oe = de(ce);
            v.push(`  POINTLOAD  "${oe.pt}"  "${oe.story}"  "Lat"  TYPE "FORCE"  FX 10`);
          }
        }), v.push(""), v.push("  END"), v.push("$ END OF MODEL FILE"), v.join(`\r
`);
      }
      function l(x) {
        const w = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`"""ETABS API Validation: ${x.name}`), v.push('Generated by Awatif FEM Studio"""'), v.push("import comtypes.client, time, math"), v.push(""), v.push("helper = comtypes.client.CreateObject('ETABSv1.Helper')"), v.push("helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)"), v.push('myETABS = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")'), v.push("myETABS.ApplicationStart()"), v.push("time.sleep(10)"), v.push("SapModel = myETABS.SapModel"), v.push("SapModel.InitializeNewModel()"), v.push("SapModel.File.NewBlank()"), v.push("SapModel.SetPresentUnits(12)  # tonf_m_C"), v.push(""), v.push(`E = ${w}`), v.push('SapModel.PropMaterial.SetMaterial("CONC", 2)'), v.push('SapModel.PropMaterial.SetMPIsotropic("CONC", E, 0.2, 5.5e-6)'), v.push('SapModel.PropFrame.SetRectangle("COL30", "CONC", 0.30, 0.30)'), v.push('SapModel.PropFrame.SetRectangle("VIGA", "CONC", 0.40, 0.25)'), x.elements.some((U) => U.length === 4) && v.push('SapModel.PropArea.SetWall("Muro20", 6, False, "CONC", 0.20)'), v.push(""), v.push("# Add elements"), v.push("FN = ' '"), x.elements.forEach((U, le) => {
          if (U.length === 2) {
            const te = x.nodes[U[0]], Q = x.nodes[U[1]], me = Math.abs(Q[1] - te[1]), de = Math.sqrt((Q[0] - te[0]) ** 2 + (Q[2] - te[2]) ** 2), ke = me > de * 0.5 ? "COL30" : "VIGA";
            v.push(`[FN,r]=SapModel.FrameObj.AddByCoord(${te[0]},${te[2]},${te[1]}, ${Q[0]},${Q[2]},${Q[1]}, FN,"${ke}","E${le + 1}","Global")`);
          } else if (U.length === 4) {
            const te = U.map((Q) => x.nodes[Q]);
            v.push(`SapModel.AreaObj.AddByCoord(4, [${te.map((Q) => Q[0]).join(",")}], [${te.map((Q) => Q[2]).join(",")}], [${te.map((Q) => Q[1]).join(",")}], "", "Muro20")`);
          }
        }), v.push(""), v.push("# Supports at Z=0"), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push("    if abs(float(c[2])) < 0.01:"), v.push("        SapModel.PointObj.SetRestraint(names[1][i], [True]*6)"), v.push(""), v.push("# Load at top"), v.push('SapModel.LoadPatterns.Add("Lat", 8, 0, True)');
        const K = Math.max(...x.nodes.map((U) => U[1]));
        v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push(`    if abs(float(c[2]) - ${K}) < 0.01:`), v.push('        SapModel.PointObj.SetLoadForce(names[1][i], "Lat", [10,0,0,0,0,0])'), v.push(""), v.push(`SapModel.File.Save(r"C:\\Users\\j-b-j\\Downloads\\validation_${x.name.replace(/[^a-zA-Z0-9]/g, "_")}.EDB")`), v.push("time.sleep(1)"), v.push("SapModel.Analyze.RunAnalysis()"), v.push("time.sleep(5)"), v.push(""), v.push("# Results"), v.push("SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()"), v.push('SapModel.Results.Setup.SetCaseSelectedForOutput("Lat")'), v.push(`print(f"\\n=== ETABS: ${x.name} ===")`), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    name = names[1][i]"), v.push("    c = SapModel.PointObj.GetCoordCartesian(name)"), v.push("    NR=0;Obj=[];Elm=[];AC=[];ST=[];SN=[];U1=[];U2=[];U3=[];R1=[];R2=[];R3=[]"), v.push("    [NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3,ret]=SapModel.Results.JointDispl(name,0,NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3)"), v.push("    if NR > 0:"), v.push('        print(f"  {name} Z={float(c[2]):.1f}: Ux={U1[0]*100:.4f} cm")'), v.push(""), v.push('print("\\nAwatif results:")');
        for (const U of x.results) v.push(`print(f"  ${U.label}: Awatif=${U.awatif.toFixed(4)}, ETABS=${U.reference.toFixed(4)}, Ratio={${U.awatif.toFixed(4)}/${U.reference.toFixed(4)}:.4f}")`);
        return v.push("SapModel.View.RefreshView(0, False)"), v.join(`
`);
      }
      function a(x, w) {
        const v = new Blob([
          x
        ], {
          type: "text/plain"
        }), P = URL.createObjectURL(v), K = document.createElement("a");
        K.href = P, K.download = w, K.click(), URL.revokeObjectURL(P);
      }
      function c(x) {
        let w = document.getElementById("test-results-overlay");
        w && w.remove(), w = document.createElement("div"), w.id = "test-results-overlay", w.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1a1a2e;color:#eee;border:2px solid #16213e;border-radius:8px;padding:20px;
        z-index:10000;max-width:750px;width:90%;max-height:80vh;overflow-y:auto;font-family:monospace;font-size:13px;
        box-shadow:0 10px 40px rgba(0,0,0,0.5);`;
        let v = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <h3 style="margin:0;color:#00d4ff">Awatif FEM Validation</h3>
        <button onclick="this.parentElement.parentElement.remove()" style="background:none;border:none;color:#888;font-size:18px;cursor:pointer">X</button>
      </div>`, P = true;
        window.__awatifTests = x;
        for (let U = 0; U < x.length; U++) {
          const le = x[U];
          v += '<div style="margin-bottom:16px;border:1px solid #333;border-radius:6px;padding:10px">', v += '<div style="display:flex;justify-content:space-between;align-items:center">', v += `<div style="font-weight:bold;color:#00d4ff">${le.name}</div>`, v += "<div>", v += `<button onclick="window.__awatifDownloadE2k(${U})" style="background:#1e3a5f;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;margin-right:4px;border-radius:3px">e2k</button>`, v += `<button onclick="window.__awatifDownloadPy(${U})" style="background:#2a1e3a;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;border-radius:3px">py</button>`, v += "</div></div>", v += `<div style="color:#888;font-size:11px;margin-bottom:8px">${le.formulation}</div>`, v += `<table style="width:100%;border-collapse:collapse;font-size:12px">
          <tr style="color:#888"><td style="padding:3px 6px">Measure</td><td style="text-align:right">Awatif</td><td style="text-align:right">Reference</td><td style="text-align:right">Ratio</td><td style="text-align:right">Source</td><td style="text-align:center"></td></tr>`;
          for (const te of le.results) {
            const Q = te.reference !== 0 ? te.awatif / te.reference : 1, me = Math.abs(Q - 1) < 0.05;
            me || (P = false);
            const de = me ? "#4caf50" : "#f44336", ke = me ? "PASS" : "FAIL";
            v += `<tr style="border-top:1px solid #333">
            <td style="padding:3px 6px">${te.label}</td>
            <td style="text-align:right;color:#fff">${te.awatif.toFixed(4)}</td>
            <td style="text-align:right;color:#aaa">${te.reference.toFixed(4)}</td>
            <td style="text-align:right;color:${de};font-weight:bold">${Q.toFixed(4)}</td>
            <td style="text-align:right;color:#888;font-size:11px">${te.refSource}</td>
            <td style="text-align:center;color:${de};font-size:10px;font-weight:bold">${ke}</td></tr>`;
          }
          v += "</table></div>";
        }
        v += P ? '<div style="color:#4caf50;font-weight:bold;text-align:center;margin-top:8px">ALL TESTS PASSED (< 5% error vs ETABS)</div>' : '<div style="color:#f44336;font-weight:bold;text-align:center;margin-top:8px">Some tests exceeded 5% tolerance</div>', w.innerHTML = v, document.body.appendChild(w), window.__awatifDownloadE2k = (U) => {
          const le = window.__awatifTests[U], te = le.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          a(n(le), `${te}.e2k`);
        }, window.__awatifDownloadPy = (U) => {
          const le = window.__awatifTests[U], te = le.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          a(l(le), `${te}_etabs.py`);
        };
      }
      (_h = Le.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (x) => {
        x.stopPropagation(), Wa();
      });
      let s = "";
      const i = Le.querySelector("#cad3d-io-menu"), p = Le.querySelector("#cad3d-io-file");
      function r(x, w) {
        e.nodes.val = x.nodes, e.elements.val = x.elements, e.nodeInputs.val = x.nodeInputs, e.elementInputs.val = x.elementInputs, x.sectionShapes && x.elementInputs && (x.elementInputs.sectionShapes = x.sectionShapes), e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        const v = x.elements.filter((K) => K.length === 2).length, P = x.elements.filter((K) => K.length >= 3).length;
        console.log(`${w} (${x.nodes.length} nodos, ${v} frames, ${P} shells): ${x.nodes.length} nodes, ${x.elements.length} elements`), setTimeout(() => It(), 50);
      }
      function d(x, w) {
        var _a3, _b2, _c2;
        const v = {};
        x.elementInfo.forEach((Q) => v[Q.category] = (v[Q.category] || 0) + 1), (_a3 = document.getElementById("ifc-filter-panel")) == null ? void 0 : _a3.remove();
        const P = document.createElement("div");
        P.id = "ifc-filter-panel", P.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1e1e2e;border:2px solid #00ccff;border-radius:12px;padding:20px;
        z-index:1000010;color:#eee;font-family:monospace;font-size:12px;min-width:320px;
        box-shadow:0 8px 32px rgba(0,0,0,0.6);`;
        const K = [
          "column",
          "beam",
          "slab",
          "footing",
          "member",
          "wall"
        ], U = [
          "opening",
          "rebar",
          "plate",
          "fastener",
          "other"
        ], le = {
          column: A("Columnas"),
          beam: A("Vigas"),
          slab: A("Losas"),
          footing: A("Zapatas"),
          member: A("Diagonales"),
          wall: A("Muros"),
          opening: A("Aberturas"),
          rebar: A("Refuerzo"),
          plate: A("Placas"),
          fastener: A("Pernos"),
          other: A("Otros")
        };
        let te = `<h3 style="color:#00ccff;margin:0 0 12px">IFC \u2192 ${A("Modelo Anal\xEDtico")}</h3>
        <div style="color:#888;margin-bottom:10px">Selecciona qu\xE9 convertir a FEM:</div>
        <div style="border:1px solid #444;border-radius:6px;padding:8px;margin-bottom:8px">
          <div style="color:#33ff33;font-weight:bold;margin-bottom:4px">Estructural</div>`;
        for (const Q of K) {
          const me = v[Q] || 0;
          if (me === 0) continue;
          const de = [
            "column",
            "beam",
            "slab"
          ].includes(Q) ? "checked" : "";
          te += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0">
          <input type="checkbox" data-ifc-cat="${Q}" ${de}>
          <span>${le[Q] || Q}</span>
          <span style="color:#888;margin-left:auto">(${me})</span>
        </label>`;
        }
        te += `</div><div style="border:1px solid #333;border-radius:6px;padding:8px;margin-bottom:12px">
        <div style="color:#ff6666;font-weight:bold;margin-bottom:4px">No estructural (solo visual)</div>`;
        for (const Q of U) {
          const me = v[Q] || 0;
          me !== 0 && (te += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0;color:#888">
          <input type="checkbox" data-ifc-cat="${Q}" disabled>
          <span>${le[Q] || Q}</span>
          <span style="margin-left:auto">(${me})</span>
        </label>`);
        }
        te += `</div>
        <div style="display:flex;gap:8px">
          <button id="ifc-gen-analytical" style="flex:1;padding:8px;background:#0f3460;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:13px;font-weight:bold">
            \u{1F527} Generar Modelo Anal\xEDtico
          </button>
          <button id="ifc-cancel" style="padding:8px 12px;background:#333;color:#aaa;border:1px solid #555;border-radius:6px;cursor:pointer">\u2715</button>
        </div>`, P.innerHTML = te, document.body.appendChild(P), P.querySelectorAll("input[data-ifc-cat]").forEach((Q) => {
          Q.addEventListener("change", () => {
            const me = Q.dataset.ifcCat, de = x.detailCategories.get(me);
            if (de) {
              de.visible = Q.checked;
              const ke = tt();
              ke && ke.render();
            }
          });
        }), (_b2 = P.querySelector("#ifc-gen-analytical")) == null ? void 0 : _b2.addEventListener("click", () => {
          var _a4;
          const Q = /* @__PURE__ */ new Set();
          P.querySelectorAll("input[data-ifc-cat]:checked").forEach((oe) => {
            Q.add(oe.dataset.ifcCat);
          });
          const me = w.nodes.map((oe) => [
            oe.x,
            oe.y,
            oe.z
          ]), de = [], ke = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            densities: /* @__PURE__ */ new Map(),
            sectionShapes: /* @__PURE__ */ new Map()
          }, Re = {
            supports: /* @__PURE__ */ new Map(),
            loads: /* @__PURE__ */ new Map()
          };
          let q = 0;
          for (const oe of w.elements) if (Q.has(oe.category) && oe.type === "frame" && oe.nodeIds.length >= 2) {
            de.push(oe.nodeIds);
            const pe = ((_a4 = w.materials) == null ? void 0 : _a4.get(oe.material)) || {
              E: 2132888792e-2,
              nu: 0.2,
              rho: 2.4
            }, ee = oe.b || 0.3, ge = oe.h || 0.3, Ie = ee * ge, se = ee * ge * ge * ge / 12, we = ge * ee * ee * ee / 12, Be = ee * ge * (ee * ee + ge * ge) / 12, lt = pe.E / (2 * (1 + pe.nu));
            ke.elasticities.set(q, pe.E), ke.shearModuli.set(q, lt), ke.areas.set(q, Ie), ke.momentsOfInertiaZ.set(q, we), ke.momentsOfInertiaY.set(q, se), ke.torsionalConstants.set(q, Be), ke.densities.set(q, pe.rho), ke.sectionShapes.set(q, {
              type: "rect",
              b: ee,
              h: ge,
              name: oe.sectionName
            }), q++;
          }
          const ce = Math.min(...me.map((oe) => oe[2]));
          me.forEach((oe, pe) => {
            Math.abs(oe[2] - ce) < 0.05 && Re.supports.set(pe, [
              true,
              true,
              true,
              true,
              true,
              true
            ]);
          });
          for (const [, oe] of x.detailCategories) {
            const pe = tt();
            pe && pe.scene.remove(oe);
          }
          r({
            nodes: me,
            elements: de,
            nodeInputs: Re,
            elementInputs: ke,
            sectionShapes: ke.sectionShapes,
            info: {
              nNodes: me.length,
              nFrames: de.length
            }
          }, "IFC analytical"), P.remove();
        }), (_c2 = P.querySelector("#ifc-cancel")) == null ? void 0 : _c2.addEventListener("click", () => {
          for (const [, me] of x.detailCategories) {
            const de = tt();
            de && de.scene.remove(me);
          }
          const Q = tt();
          Q && Q.render(), P.remove();
        });
      }
      function g(x) {
        B = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map();
        const w = /* @__PURE__ */ new Map();
        for (let de = 0; de < x.stories.length; de++) w.set(x.stories[de].name, de);
        for (let de = 0; de < x.elementTypes.length; de++) {
          const ke = x.elementTypes[de], Re = x.elementStories[de], q = w.get(Re) ?? 0;
          Me.set(de, q), ke === "COLUMN" || ke === "BRACE" ? B.add(de) : Y.add(de);
        }
        T = "edificio";
        const v = x.grids.filter((de) => de.dir === "X").sort((de, ke) => de.coord - ke.coord), P = x.grids.filter((de) => de.dir === "Y").sort((de, ke) => de.coord - ke.coord);
        let K, U, le, te;
        if (v.length > 0 || P.length > 0) K = v.map((de) => de.coord), U = P.map((de) => de.coord), le = v.map((de) => de.label), te = P.map((de) => de.label);
        else {
          const de = new Set(x.nodes.map((Re) => Re[0])), ke = new Set(x.nodes.map((Re) => Re[1]));
          K = [
            ...de
          ].sort((Re, q) => Re - q), U = [
            ...ke
          ].sort((Re, q) => Re - q), le = K.map((Re, q) => String(q + 1)), te = U.map((Re, q) => String.fromCharCode(65 + q));
        }
        const Q = x.stories.length > 0 ? Math.max(...x.stories.map((de) => de.elev)) : Math.max(...x.nodes.map((de) => de[2]));
        Je = K, Qe = U, mt = Q, setTimeout(() => {
          It(), an(K, U, Q, le, te), Nn(x.stories, K, U), Kn(), Zn();
        }, 100);
        const me = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const de of x.elementTypes) me[de]++;
        console.log(`E2K grids: X=[${le.join(",")}] Y=[${te.join(",")}]`), console.log(`E2K stories: ${x.stories.map((de) => `${de.name}@${de.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${me.COLUMN} columns, ${me.BEAM} beams, ${me.BRACE} braces`), st();
      }
      function S(x, w) {
        const v = new Blob([
          x
        ], {
          type: "text/plain"
        }), P = URL.createObjectURL(v), K = document.createElement("a");
        K.href = P, K.download = w, K.click(), URL.revokeObjectURL(P);
      }
      i && i.addEventListener("change", () => {
        if (s = i.value, i.value = "", s.startsWith("import")) s === "import-e2k" ? p.accept = ".e2k,.E2K" : s === "import-s2k" ? p.accept = ".s2k,.S2K,.$2k" : s === "import-ifc" ? p.accept = ".ifc,.IFC" : s === "import-py" ? p.accept = ".py" : s === "import-tcl" && (p.accept = ".tcl"), p.click();
        else if (s.startsWith("export")) {
          const x = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: e.nodeInputs.val,
            elementInputs: e.elementInputs.val
          };
          try {
            s === "export-e2k" ? S(ei({
              ...x,
              title: "Awatif Model",
              e2kModel: Ke ?? void 0
            }), "model.e2k") : s === "export-s2k" ? S(Ql({
              ...x,
              title: "Awatif Model"
            }), "model.s2k") : s === "export-py" ? S(si(x), "model_opensees.py") : s === "export-tcl" && S(ai(x), "model_opensees.tcl");
          } catch (w) {
            alert("Export error: " + w.message);
          }
        }
      }), p && p.addEventListener("change", () => {
        var _a3;
        const x = (_a3 = p.files) == null ? void 0 : _a3[0];
        if (!x) return;
        if (s === "import-ifc") {
          const v = new FileReader();
          v.onload = async () => {
            const P = v.result;
            try {
              const K = tt();
              if (!K) {
                alert("Viewer not ready");
                return;
              }
              console.log("IFC: Loading 3D geometry...");
              const U = await mi(K.scene, P);
              console.log(`IFC: ${U.meshCount} meshes loaded, bbox:`, U.bbox);
              const le = new qe();
              U.bbox.getCenter(le);
              const te = new qe();
              U.bbox.getSize(te);
              const Q = Math.max(te.x, te.y, te.z);
              K.controls.target.copy(le), K.camera.position.set(le.x + Q, le.y + Q * 0.5, le.z + Q), K.camera.lookAt(le), K.controls.maxDistance = Q * 5, K.controls.update(), K.render(), window.__ifcLoadResult = U, window.__ifcArrayBuffer = P;
              const me = new FileReader();
              me.onload = () => {
                const de = me.result, ke = pi(de);
                window.__ifcAnalytical = ke;
                const Re = {};
                U.elementInfo.forEach((q) => Re[q.category] = (Re[q.category] || 0) + 1), console.log("IFC categories:", Re), console.log(`IFC: ${U.elementInfo.size} geometric elements, ${ke.elements.length} analytical elements`), d(U, ke);
              }, me.readAsText(x);
            } catch (K) {
              alert("IFC error: " + K.message), console.error(K);
            }
          }, v.readAsArrayBuffer(x), p.value = "";
          return;
        }
        const w = new FileReader();
        w.onload = () => {
          const v = w.result;
          try {
            if (s === "import-e2k") {
              const P = Xl(v);
              Ke = P, r(P, "E2K imported"), g(P);
            } else if (s === "import-s2k") {
              const P = Ul(v);
              r({
                nodes: P.nodes,
                elements: P.elements,
                nodeInputs: P.nodeInputs,
                elementInputs: P.elementInputs,
                sectionShapes: P.sectionShapes,
                info: P.info
              }, "S2K imported");
            } else if (s === "import-py") {
              const P = li(v);
              r(P, "OpenSeesPy imported");
            } else if (s === "import-tcl") {
              const P = ii(v);
              r(P, "OpenSees Tcl imported");
            }
          } catch (P) {
            alert("Import error: " + P.message), console.error(P);
          }
        }, w.readAsText(x), p.value = "";
      });
      const $ = Le.querySelector("#cad3d-force-unit");
      $ && ($.value = b, $.addEventListener("change", (x) => {
        x.stopPropagation(), b = $.value, M = jo(b, O), T && nt(T);
      }));
      const y = Le.querySelector("#cad3d-length-unit");
      y && (y.value = O, y.addEventListener("change", (x) => {
        x.stopPropagation(), O = y.value, M = jo(b, O), T && nt(T);
      })), Le.querySelectorAll("[data-preset]").forEach((x) => {
        x.addEventListener("click", (w) => {
          w.stopPropagation();
          const v = x.dataset.preset, P = H[v];
          P && (b = P.force, O = P.length, X = P.stress, M = jo(b, O), $ && ($.value = b), y && (y.value = O), Le.querySelectorAll("[data-preset]").forEach((K) => {
            K.classList.toggle("active", K.dataset.preset === v);
          }), T && nt(T), console.log(`Preset: ${v} \u2192 ${b}+${O}, stress: ${X.label}`));
        });
      }), Le.querySelectorAll("[data-lang]").forEach((x) => {
        x.addEventListener("click", (w) => {
          w.stopPropagation();
          const v = x.dataset.lang;
          zl(v), Le.querySelectorAll("[data-lang]").forEach((K) => K.classList.remove("active")), x.classList.add("active"), Al(), T && (nt(T), No()), document.getElementById("cad-panel") && typeof window.__rebuildViewPanel == "function" && window.__rebuildViewPanel();
        });
      }), (_i = Le.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (x) => {
        x.stopPropagation(), sl();
      }), (_j = Le.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (x) => {
        x.stopPropagation(), al();
      }), (_k = Le.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (x) => {
        x.stopPropagation(), il();
      }), (_l2 = Le.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l2.addEventListener("click", (x) => {
        x.stopPropagation(), cl();
      }), (_m = Le.querySelector("#cad3d-calc")) == null ? void 0 : _m.addEventListener("click", (x) => {
        x.stopPropagation(), cs(async () => {
          const { openCalcPanel: w } = await import("./calcPanel-BcV0bfdm.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          });
          return {
            openCalcPanel: w
          };
        }, __vite__mapDeps([0,1,2,3,4,5]), import.meta.url).then(({ openCalcPanel: w }) => {
          var _a3, _b2;
          const v = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: ((_a3 = e.nodeInputs) == null ? void 0 : _a3.val) ?? {},
            elementInputs: ((_b2 = e.elementInputs) == null ? void 0 : _b2.val) ?? {},
            modelName: T ? T.charAt(0).toUpperCase() + T.slice(1) : "Modelo"
          };
          w(v);
        });
      }), (_n2 = Le.querySelector("#cad3d-tutorials")) == null ? void 0 : _n2.addEventListener("click", (x) => {
        x.stopPropagation(), cs(async () => {
          const { openTutorialPanel: w } = await import("./tutorialPanel-D12tw4H_.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          });
          return {
            openTutorialPanel: w
          };
        }, __vite__mapDeps([6,5,7]), import.meta.url).then(({ openTutorialPanel: w }) => {
          var _a3, _b2;
          const v = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: ((_a3 = e.nodeInputs) == null ? void 0 : _a3.val) ?? {},
            elementInputs: ((_b2 = e.elementInputs) == null ? void 0 : _b2.val) ?? {},
            modelName: T ? T.charAt(0).toUpperCase() + T.slice(1) : "Modelo"
          };
          w(v);
        });
      }), (_o2 = Le.querySelector("#cad3d-modal")) == null ? void 0 : _o2.addEventListener("click", (x) => {
        var _a3, _b2;
        x.stopPropagation(), De = !De, (_a3 = Le.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", De);
        const v = Le.querySelector("#cad3d-mode-prev"), P = Le.querySelector("#cad3d-mode-next"), K = Le.querySelector("#cad3d-mode-label"), U = Le.querySelector("#cad3d-modal-scale");
        if (De) {
          const le = tt();
          ((_b2 = le == null ? void 0 : le.settings) == null ? void 0 : _b2.loads) && (He = le.settings.loads.rawVal, le.settings.loads.val = false), Gn(), v.style.display = "", P.style.display = "", K.style.display = "", U && (U.style.display = ""), f();
        } else Yn(), v.style.display = "none", P.style.display = "none", K.style.display = "none", U && (U.style.display = "none"), T && T !== "placa-q4" && T !== "placa-3q" && Ne(), setTimeout(() => {
          var _a4;
          const le = tt();
          ((_a4 = le == null ? void 0 : le.settings) == null ? void 0 : _a4.loads) && He && (le.settings.loads.val = true);
        }, 600);
      });
      function f() {
        var _a3;
        const x = Le.querySelector("#cad3d-mode-label");
        if (!x || !(Fe == null ? void 0 : Fe.frequencies)) return;
        const w = Fe.frequencies[xe], v = w > 0 ? 1 / w : 0, P = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let K = 0; K <= xe; K++) {
          const U = (_a3 = Fe.massParticipation) == null ? void 0 : _a3[K];
          if (U) for (let le = 0; le < 6; le++) P[le] += U[le];
        }
        x.textContent = `Modo ${xe + 1} \u2014 ${w.toFixed(2)} Hz \u2014 T=${v.toFixed(3)}s \u2014 \u03A3Ux=${(P[0] * 100).toFixed(1)}% \u03A3Uy=${(P[1] * 100).toFixed(1)}% \u03A3Rz=${(P[5] * 100).toFixed(1)}%`;
      }
      (_p = Le.querySelector("#cad3d-mode-prev")) == null ? void 0 : _p.addEventListener("click", (x) => {
        if (x.stopPropagation(), !(Fe == null ? void 0 : Fe.modeShapes)) return;
        xe = (xe - 1 + Fe.modeShapes.length) % Fe.modeShapes.length;
        const w = Fe.modeShapes[xe], { extent: v } = zo();
        let P = 0;
        for (let K = 0; K < ze.length; K++) {
          const U = w[K * 6] || 0, le = w[K * 6 + 1] || 0, te = w[K * 6 + 2] || 0;
          P = Math.max(P, Math.sqrt(U * U + le * le + te * te));
        }
        Ve = P > 1e-12 ? v * 0.05 / P : 1, cn(), f();
      }), (_q = Le.querySelector("#cad3d-mode-next")) == null ? void 0 : _q.addEventListener("click", (x) => {
        var _a3, _b2;
        if (x.stopPropagation(), !(Fe == null ? void 0 : Fe.modeShapes)) return;
        xe = (xe + 1) % Fe.modeShapes.length;
        const w = Fe.modeShapes[xe];
        if (!w) {
          console.warn("No shape for mode", xe);
          return;
        }
        const { extent: v } = zo();
        let P = 0;
        for (let K = 0; K < ze.length; K++) {
          const U = w[K * 6] || 0, le = w[K * 6 + 1] || 0, te = w[K * 6 + 2] || 0;
          P = Math.max(P, Math.sqrt(U * U + le * le + te * te));
        }
        Ve = P > 1e-12 ? v * 0.05 / P : 1, console.log(`Mode ${xe + 1}: maxDisp=${P.toExponential(3)}, scale=${Ve.toFixed(1)}, f=${(_b2 = (_a3 = Fe.frequencies) == null ? void 0 : _a3[xe]) == null ? void 0 : _b2.toFixed(2)} Hz`), cn(), f();
      });
      const h = Le.querySelector("#cad3d-modal-scale");
      h == null ? void 0 : h.addEventListener("mousedown", (x) => x.stopPropagation()), h == null ? void 0 : h.addEventListener("change", () => {
        De && (Fe == null ? void 0 : Fe.modeShapes) && cn();
      });
      const I = Le.querySelector("#cad3d-cli-toggle"), L = Le.querySelector("#cad3d-cli-panel"), z = Le.querySelector("#cad3d-cli-output"), R = Le.querySelector("#cad3d-cmd"), k = [];
      let m = -1;
      I == null ? void 0 : I.addEventListener("click", (x) => {
        if (x.stopPropagation(), L) {
          const w = L.style.display !== "none";
          L.style.display = w ? "none" : "block", w || (R == null ? void 0 : R.focus(), z && !z.textContent && (z.textContent = `CLI ready. Commands:
  cad.addNode(x, y, z)     cad.addFrame(i, j)
  cad.addSupport(n)        cad.addLoad(n, [fx,fy,fz,0,0,0])
  cad.frame([5,5],[3,3])   cad.building([5],[4],[3])
  cad.galpon(12,20,6,3)    cad.clear()
  cad.info()               cad.listNodes()
`));
        }
      }), R == null ? void 0 : R.addEventListener("mousedown", (x) => x.stopPropagation()), document.addEventListener("keydown", (x) => {
        var _a3;
        if ((x.ctrlKey || x.metaKey) && x.key === "z" && !x.shiftKey) {
          x.preventDefault(), Gs();
          return;
        }
        if ((x.ctrlKey || x.metaKey) && (x.key === "y" || x.key === "z" && x.shiftKey)) {
          x.preventDefault(), Ys();
          return;
        }
        if ((x.key === "Delete" || x.key === "Backspace") && wt.size > 0) {
          x.preventDefault(), wt.forEach((w) => Z.add(w)), wt.clear(), $o && ($o.remove(), $o = null), Ne();
          return;
        }
        if (x.key === "Escape") {
          if (yo) if (kt !== null) {
            kt = null;
            const w = tt();
            Wt && w && (w.scene.remove(Wt), Wt.geometry.dispose(), Wt.material.dispose(), Wt = null), Gt && w && (w.scene.remove(Gt), Gt.geometry.dispose(), Gt.material.dispose(), Gt = null), w == null ? void 0 : w.render();
          } else yn();
          eo && vn(), po && (po = false, _o(), (_a3 = Le.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), R == null ? void 0 : R.addEventListener("keydown", (x) => {
        if (x.stopPropagation(), x.key === "Enter") {
          const w = R.value.trim();
          if (w) {
            k.unshift(w), m = -1, z && (z.textContent += `> ${w}
`);
            try {
              const v = new Function("cad", `return ${w}`)(ot);
              if (v !== void 0 && z) {
                const P = typeof v == "object" ? JSON.stringify(v, null, 2) : String(v);
                z.textContent += `${P}
`;
              }
            } catch (v) {
              z && (z.textContent += `ERROR: ${v.message}
`);
            }
            z && (z.scrollTop = z.scrollHeight), R.value = "";
          }
        } else x.key === "ArrowUp" ? (x.preventDefault(), k.length > 0 && m < k.length - 1 && (m++, R.value = k[m])) : x.key === "ArrowDown" && (x.preventDefault(), m > 0 ? (m--, R.value = k[m]) : (m = -1, R.value = ""));
      });
      let u = false, E = 0, C = 0, N = 0, G = 0;
      Le.addEventListener("mousedown", (x) => {
        const w = x.target.tagName;
        if (w === "BUTTON" || w === "INPUT" || w === "SELECT") return;
        u = true;
        const v = Le.getBoundingClientRect();
        Le.style.bottom = "unset", E = x.clientX, C = x.clientY, N = v.left, G = v.top, x.preventDefault();
      }), window.addEventListener("mousemove", (x) => {
        u && (x.preventDefault(), Le.style.left = N + (x.clientX - E) + "px", Le.style.top = G + (x.clientY - C) + "px");
      }), window.addEventListener("mouseup", () => {
        u = false;
      }), st();
    }, 10);
    function tt() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function zo() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new qe(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, a = -1 / 0, c = -1 / 0, s = -1 / 0;
      for (const [r, d, g] of t) r < o && (o = r), r > a && (a = r), d < n && (n = d), d > c && (c = d), g < l && (l = g), g > s && (s = g);
      const i = new qe((o + a) / 2, (n + c) / 2, (l + s) / 2), p = Math.max(a - o, c - n, s - l, 1);
      return {
        center: i,
        extent: p
      };
    }
    function It(t = false) {
      const o = tt();
      if (!o) return;
      const { extent: n } = zo();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((g) => g.type === "GridHelper").forEach((g) => {
        var _a2, _b;
        (_a2 = g.geometry) == null ? void 0 : _a2.dispose(), (_b = g.material) == null ? void 0 : _b.dispose(), o.scene.remove(g);
      });
      const c = bl(), s = new Il(l, 20, c.grid, c.grid);
      s.rotation.x = Math.PI / 2, s.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(s), o.scene.children.filter((g) => g.type === "Group" && g.name !== "gridAxes" && g.name !== "loadsGroup" && (g.name === "viewerAxes" || g.children.some((S) => S instanceof En))).forEach((g) => {
        g.traverse((S) => {
          S.geometry && S.geometry.dispose(), S.material && (S.material.map && S.material.map.dispose(), S.material.dispose());
        }), o.scene.remove(g);
      });
      const p = 0.05 * l, r = new bn();
      r.name = "viewerAxes";
      const d = c.axisArrow;
      r.add(new En(new qe(1, 0, 0), new qe(), 1, d, 0.2, 0.2)), r.add(new En(new qe(0, 1, 0), new qe(), 1, d, 0.2, 0.2)), r.add(new En(new qe(0, 0, 1), new qe(), 1, d, 0.2, 0.2)), r.children.forEach((g) => g.scale.set(p, p, p));
      for (const [g, S, $] of [
        [
          "X",
          "red",
          [
            1.3 * p,
            0,
            0
          ]
        ],
        [
          "Y",
          "green",
          [
            0,
            1.3 * p,
            0
          ]
        ],
        [
          "Z",
          "blue",
          [
            0,
            0,
            1.3 * p
          ]
        ]
      ]) {
        const y = document.createElement("canvas");
        y.width = 64, y.height = 64;
        const f = y.getContext("2d");
        f.fillStyle = S, f.font = "bold 50px Arial", f.textAlign = "center", f.textBaseline = "middle", f.fillText(g, 32, 34);
        const h = new ps(y);
        h.needsUpdate = true;
        const I = new Sn(new In({
          map: h,
          depthTest: false,
          transparent: true
        }));
        I.position.set($[0], $[1], $[2]), I.scale.set(0.4 * p, 0.4 * p, 1), I.renderOrder = 99, r.add(I);
      }
      o.scene.add(r), t ? o.render() : Ao("3d");
    }
    function Ws(t, o, n) {
      if (t.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (l = Math.min(l, Math.abs(t[o + 1] - t[o]))), l * 0.45 || n * 0.1;
    }
    function Ao(t) {
      var _a2;
      const o = tt();
      if (!o) return;
      const { center: n, extent: l } = zo(), a = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), c = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const s = () => {
        o.scene.traverse((i) => {
          var _a3;
          if (!i.material) return;
          const p = i.type === "GridHelper" || i.type === "AxesHelper", r = i.isSprite, d = ((_a3 = i.userData) == null ? void 0 : _a3.noClip) === true;
          (p || r || d) && (Array.isArray(i.material) ? i.material.forEach((g) => {
            g.clippingPlanes = [];
          }) : i.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const i = o.perspCamera.fov, p = l / (2 * Math.tan(i * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + p * 0.5, n.y - p * 0.8, n.z + p * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const i = o.orthoCamera;
        i.left = -c * a, i.right = c * a, i.top = c, i.bottom = -c, i.near = -l * 10, i.far = l * 10, i.updateProjectionMatrix();
        const p = (r, d, g) => {
          i.position.copy(r), i.up.copy(g), o.controls.target.copy(d), i.lookAt(d), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], p(new qe(n.x, n.y, n.z + l * 2), new qe(n.x, n.y, n.z), new qe(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const r = parseInt(t.split(":")[1]), d = ((_a2 = J.hPiso) == null ? void 0 : _a2.val) ?? 3, g = (r + 1) * d, S = d * 0.45;
          o.renderer.clippingPlanes = [
            new Po(new qe(0, 0, -1), g + S),
            new Po(new qe(0, 0, 1), -g + S)
          ], s(), p(new qe(n.x, n.y, g + l * 2), new qe(n.x, n.y, g), new qe(0, 1, 0));
        } else if (t === "elevX") i.position.set(n.x + l * 2, n.y, n.z), i.up.set(0, 0, 1);
        else if (t === "elevY") i.position.set(n.x, n.y - l * 2, n.z), i.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const r = parseInt(t.split(":")[1]), d = Je[r] ?? n.x;
          if (Qe.length > 1) {
            const S = Ws(Je, r, l);
            o.renderer.clippingPlanes = [
              new Po(new qe(-1, 0, 0), d + S),
              new Po(new qe(1, 0, 0), -d + S)
            ], s(), i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const r = parseInt(t.split(":")[1]), d = Qe[r] ?? n.y;
          if (Je.length > 1) {
            const S = Ws(Qe, r, l);
            o.renderer.clippingPlanes = [
              new Po(new qe(0, -1, 0), d + S),
              new Po(new qe(0, 1, 0), -d + S)
            ], s(), i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(i);
      }
    }
    function Kn() {
      const t = Le.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (Je.length < 2 && Qe.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (c, s, i) => {
        const p = document.createElement("button");
        return p.textContent = c, p.dataset.view = s, p.title = i, p.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", p.addEventListener("click", (r) => {
          var _a2;
          r.stopPropagation();
          const d = p.classList.contains("view-active");
          Le.querySelectorAll("[data-view]").forEach((g) => g.classList.remove("view-active")), d ? (Ao("3d"), (_a2 = Le.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (Ao(s), p.classList.add("view-active"));
        }), p;
      }, n = document.createElement("span");
      n.textContent = `${A("Ejes")}:`, n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      Je.forEach((c, s) => {
        const i = s < l.length ? l[s] : `X${s}`;
        t.appendChild(o(i, `axisX:${s}`, `${A("Eje")} ${i} \u2014 ${A("elevaci\xF3n mirando en")} Y`));
      });
      const a = document.createElement("span");
      a.textContent = "|", a.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(a), Qe.forEach((c, s) => {
        const i = `${s + 1}`;
        t.appendChild(o(i, `axisY:${s}`, `${A("Eje")} ${i} \u2014 ${A("elevaci\xF3n mirando en")} X`));
      });
    }
    function Zn() {
      var _a2;
      const t = Le.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a2 = J.nPisos) == null ? void 0 : _a2.val) ?? 0);
      if (o < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (a, c, s) => {
        const i = document.createElement("button");
        return i.textContent = a, i.dataset.view = c, i.title = s, i.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", i.addEventListener("click", (p) => {
          var _a3;
          p.stopPropagation();
          const r = i.classList.contains("view-active");
          Le.querySelectorAll("[data-view]").forEach((d) => d.classList.remove("view-active")), r ? (Ao("3d"), (_a3 = Le.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (Ao(c), i.classList.add("view-active"));
        }), i;
      }, l = document.createElement("span");
      l.textContent = `${A("Planta")}:`, l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let a = 0; a < o; a++) t.appendChild(n(`P${a + 1}`, `plan:${a}`, `${A("Planta")} ${A("Piso")} ${a + 1}`));
    }
    function Ya() {
      Ao("3d"), Le.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    ot.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, Ao(t), Le.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let po = false, eo = false, yo = false, Vt = "line", so = [], kt = null, Wt = null, Gt = null, Yo = null, lo = null;
    const Lt = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, Qn = 0.5;
    let es = [], io = null, qo = null;
    const Jo = [], xn = [], Ja = 50;
    function Vo() {
      Jo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), Jo.length > Ja && Jo.shift(), xn.length = 0;
    }
    function Gs() {
      if (Jo.length === 0) return;
      xn.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = Jo.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, To(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function Ys() {
      if (xn.length === 0) return;
      Jo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = xn.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, To(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const wt = /* @__PURE__ */ new Set();
    let to = null, Lo = [], ao = null, $o = null;
    function ts(t) {
      const o = tt();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const a = [];
      for (let i = 0; i < l.length; i++) {
        const p = n[l[i]], r = n[l[(i + 1) % l.length]];
        a.push(p[0], p[1], p[2], r[0], r[1], r[2]);
      }
      const c = new co();
      c.setAttribute("position", new Do(a, 3));
      const s = new en(c, new tn({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      s.renderOrder = 9998, s.__elemIdx = t, o.scene.add(s), Lo.push(s), o.render();
    }
    function Co() {
      const t = tt();
      Lo.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), Lo = [], t == null ? void 0 : t.render();
    }
    function Fo() {
      $o && $o.remove();
      const t = V.size > 0 || j;
      if (wt.size === 0 && !t) {
        $o = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${wt.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), $o = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        dl([
          ...wt
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (wt.size === 1) {
          const n = [
            ...wt
          ][0];
          Qs(n);
        } else {
          const n = [
            ...wt
          ], l = e.nodes.val, a = e.elements.val;
          let c = 0, s = 0, i = 0, p = 0;
          n.forEach((d) => {
            const g = a[d];
            if (g) if (g.length === 2) {
              const S = l[g[0]], $ = l[g[1]], y = Math.abs($[0] - S[0]), f = Math.abs($[1] - S[1]), h = Math.abs($[2] - S[2]);
              h > y && h > f ? c++ : s++;
            } else g.length === 3 ? i++ : g.length === 4 && p++;
          });
          const r = [];
          c && r.push(`${c} columnas`), s && r.push(`${s} vigas`), p && r.push(`${p} shells Q4`), i && r.push(`${i} triangulos`), alert(`${n.length} elementos seleccionados:
${r.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        wt.forEach((n) => V.add(n)), wt.clear(), Co(), Fo(), Ne();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        j = true, W.clear(), wt.forEach((n) => W.add(n)), wt.clear(), Co(), Fo(), Ne();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        V.clear(), j = false, W.clear(), Fo(), Ne();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        Vo(), wt.forEach((n) => Z.add(n)), wt.clear(), Co(), Fo(), Ne();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        wt.clear(), Co(), Fo();
      });
    }
    function vn() {
      var _a2;
      eo = false, wt.clear(), Co(), $o && ($o.remove(), $o = null), (_a2 = Le.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const o = tt();
      o && (o.controls.enabled = true);
    }
    function _o() {
      if (to) {
        const t = tt();
        t == null ? void 0 : t.scene.remove(to), to.geometry.dispose(), to.material.dispose(), to = null, t == null ? void 0 : t.render();
      }
      ao && (ao.remove(), ao = null);
    }
    function Va(t) {
      os();
      const o = tt();
      if (!o) return;
      const n = e.nodes.val[t];
      if (!n) return;
      qo = t;
      const l = 200, a = [
        [
          [
            1,
            0,
            0
          ],
          16724787,
          "X"
        ],
        [
          [
            0,
            1,
            0
          ],
          3407667,
          "Y"
        ],
        [
          [
            0,
            0,
            1
          ],
          3355647,
          "Z"
        ]
      ];
      for (const [c, s] of a) {
        const i = new Float32Array([
          n[0] - c[0] * l,
          n[1] - c[1] * l,
          n[2] - c[2] * l,
          n[0] + c[0] * l,
          n[1] + c[1] * l,
          n[2] + c[2] * l
        ]), p = new co();
        p.setAttribute("position", new Cn(i, 3));
        const r = new Qo({
          color: s,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), d = new en(p, r);
        d.computeLineDistances(), d.renderOrder = 9990, o.scene.add(d), es.push(d);
      }
      o.render();
    }
    function os() {
      const t = tt();
      for (const o of es) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      es = [], qo = null, io && (io.remove(), io = null);
    }
    function Js(t, o, n, l) {
      io || (io = document.createElement("div"), io.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(io));
      const a = l.x - n.x, c = l.y - n.y, s = l.z - n.z, i = Math.sqrt(a * a + c * c + s * s), p = Math.abs(a), r = Math.abs(c), d = Math.abs(s);
      let g = "";
      p > r && p > d ? g = `\u0394X=${a.toFixed(2)}` : r > p && r > d ? g = `\u0394Y=${c.toFixed(2)}` : d > 0.01 && (g = `\u0394Z=${s.toFixed(2)}`), io.textContent = `${i.toFixed(3)} m  ${g}`, io.style.left = t + 20 + "px", io.style.top = o - 10 + "px";
    }
    function Xa(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const a = new qe(l[0], l[1], l[2]), c = t.clone(), s = c.clone().sub(a), i = 0.3, p = Math.abs(s.x), r = Math.abs(s.y), d = Math.abs(s.z);
      return r < i && d < i && p > 0.01 ? new qe(c.x, a.y, a.z) : p < i && d < i && r > 0.01 ? new qe(a.x, c.y, a.z) : p < i && r < i && d > 0.01 ? new qe(a.x, a.y, c.z) : null;
    }
    function yn() {
      var _a2;
      const t = tt();
      Wt && t && (t.scene.remove(Wt), Wt.geometry.dispose(), Wt.material.dispose(), Wt = null), Gt && t && (t.scene.remove(Gt), Gt.geometry.dispose(), Gt.material.dispose(), Gt = null), os(), kt = null, lo = null, yo = false, Yo && (Yo.remove(), Yo = null), (_a2 = Le.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function Ua() {
      Yo && Yo.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (a) => `padding:4px 10px;border:1px solid ${a ? "#00ccff" : "#555"};background:${a ? "#003355" : "#333"};color:${a ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (a) => `padding:3px 6px;border:1px solid ${a ? "#33ff33" : "#444"};background:${a ? "#113311" : "#222"};color:${a ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o(Vt === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o(Vt === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o(Vt === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o(Vt === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${n(Lt.node)}">Node</button>
      <button id="ds-grid" style="${n(Lt.grid)}">Grid</button>
      <button id="ds-mid" style="${n(Lt.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(Lt.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${Qn}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), Yo = t;
      const l = () => {
        const a = t.querySelector("#dt-line"), c = t.querySelector("#dt-arc"), s = t.querySelector("#dt-node"), i = t.querySelector("#dt-area");
        a && (a.style.cssText = o(Vt === "line")), c && (c.style.cssText = o(Vt === "arc")), s && (s.style.cssText = o(Vt === "node")), i && (i.style.cssText = o(Vt === "area"));
        const p = t.querySelector("#ds-node"), r = t.querySelector("#ds-grid"), d = t.querySelector("#ds-mid"), g = t.querySelector("#ds-track");
        p && (p.style.cssText = n(Lt.node)), r && (r.style.cssText = n(Lt.grid)), d && (d.style.cssText = n(Lt.midpoint)), g && (g.style.cssText = n(Lt.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        Vt = "line", kt = null, lo = null, so = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        Vt = "arc", kt = null, lo = null, so = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        Vt = "node", kt = null, lo = null, so = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        Vt = "area", kt = null, lo = null, so = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        Lt.node = !Lt.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        Lt.grid = !Lt.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        Lt.midpoint = !Lt.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        Lt.track = !Lt.track, Lt.track || os(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (a) => {
        Lt.gridSize = parseFloat(a.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => Gs()), t.querySelector("#dt-redo").addEventListener("click", () => Ys());
    }
    function Vs(t, o, n, l) {
      const a = l.getBoundingClientRect(), c = (t - a.left) / a.width * 2 - 1, s = -((o - a.top) / a.height) * 2 + 1, i = new Ma();
      i.setFromCamera(new wa(c, s), n);
      const p = e.nodes.val, r = e.elements.val, d = 0.12;
      if (Lt.node) {
        let $ = -1, y = 1 / 0;
        for (let f = 0; f < p.length; f++) {
          const h = p[f], I = new qe(h[0], h[1], h[2]).project(n), L = Math.sqrt((I.x - c) ** 2 + (I.y - s) ** 2);
          L < d && L < y && (y = L, $ = f);
        }
        if ($ >= 0) return {
          nodeIdx: $,
          worldPos: new qe(...p[$]),
          snapType: "node"
        };
      }
      if (Lt.midpoint) {
        let $ = 1 / 0, y = null;
        for (const f of r) {
          if (f.length !== 2) continue;
          const h = p[f[0]], I = p[f[1]], L = new qe((h[0] + I[0]) / 2, (h[1] + I[1]) / 2, (h[2] + I[2]) / 2), z = L.clone().project(n), R = Math.sqrt((z.x - c) ** 2 + (z.y - s) ** 2);
          R < d * 0.8 && R < $ && ($ = R, y = L);
        }
        if (y) return {
          nodeIdx: null,
          worldPos: y,
          snapType: "mid"
        };
      }
      if (Lt.grid) {
        const $ = new Po(new qe(0, 0, 1), 0), y = new qe();
        if (i.ray.intersectPlane($, y)) {
          const f = Lt.gridSize || Qn;
          return y.x = Math.round(y.x / f) * f, y.y = Math.round(y.y / f) * f, y.z = Math.round(y.z / f) * f, {
            nodeIdx: null,
            worldPos: y,
            snapType: "grid"
          };
        }
      }
      const g = new Po(new qe(0, 0, 1), 0), S = new qe();
      return i.ray.intersectPlane(g, S), {
        nodeIdx: null,
        worldPos: S,
        snapType: "free"
      };
    }
    function Xs(t) {
      const o = tt();
      if (!o) return;
      const n = e.nodes.val;
      if (Gt && (o.scene.remove(Gt), Gt.geometry.dispose(), Gt.material.dispose(), Gt = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, a = t.snapType === "node" ? 0.08 : 0.06, c = t.snapType === "mid" ? new Ml(a * 2, a * 2, a * 2) : new wl(a, 12, 12), s = new El({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        Gt = new Ta(c, s), Gt.position.copy(t.worldPos), Gt.renderOrder = 9999, o.scene.add(Gt);
      }
      if (Wt && (o.scene.remove(Wt), Wt.geometry.dispose(), Wt.material.dispose(), Wt = null), kt !== null && t.worldPos) {
        const l = n[kt], a = new co();
        if (Vt === "arc" && lo !== null) {
          const s = n[lo], i = Us(new qe(l[0], l[1], l[2]), new qe(s[0], s[1], s[2]), t.worldPos, 16), p = [];
          for (let r = 0; r < i.length - 1; r++) p.push(i[r].x, i[r].y, i[r].z, i[r + 1].x, i[r + 1].y, i[r + 1].z);
          a.setAttribute("position", new Do(p, 3));
        } else a.setAttribute("position", new Do([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const c = new tn({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        Wt = new Bo(a, c), Vt === "arc" && lo !== null && (Wt = new en(a, c)), Wt.renderOrder = 9999, o.scene.add(Wt);
      }
      o.render();
    }
    function Us(t, o, n, l) {
      const a = [];
      for (let c = 0; c <= l; c++) {
        const s = c / l, i = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), p = (1 - s) * (1 - s), r = 2 * (1 - s) * s, d = s * s;
        a.push(new qe(p * t.x + r * i.x + d * n.x, p * t.y + r * i.y + d * n.y, p * t.z + r * i.z + d * n.z));
      }
      return a;
    }
    function ns(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const o = e.nodes.val, n = 1e-3;
      for (let a = 0; a < o.length; a++) if (Math.abs(o[a][0] - t.worldPos.x) < n && Math.abs(o[a][1] - t.worldPos.y) < n && Math.abs(o[a][2] - t.worldPos.z) < n) return a;
      Vo();
      const l = [
        ...o,
        [
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ]
      ];
      return e.nodes.val = l, l.length - 1;
    }
    function Ka(t) {
      var _a2;
      if (Vt === "node") {
        if (!t.worldPos) return;
        Vo();
        const o = [
          ...e.nodes.val
        ];
        o.push([
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ]), e.nodes.val = o;
        return;
      }
      if (Vt === "line") {
        const o = ns(t);
        if (o < 0) return;
        if (kt === null) {
          kt = o;
          return;
        }
        if (o === kt) return;
        Vo();
        const n = [
          ...e.elements.val
        ];
        n.some((a) => a.length === 2 && (a[0] === kt && a[1] === o || a[1] === kt && a[0] === o)) || (n.push([
          kt,
          o
        ]), e.elements.val = n, To(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), kt = o;
        return;
      }
      if (Vt === "arc") {
        const o = ns(t);
        if (o < 0) return;
        if (kt === null) {
          kt = o;
          return;
        }
        if (lo === null) {
          if (o === kt) return;
          lo = o;
          return;
        }
        if (o === kt || o === lo) return;
        const n = e.nodes.val, l = new qe(...n[kt]), a = new qe(...n[lo]), c = new qe(...n[o]), s = Math.max(4, Math.round(((_a2 = J.nSubViga) == null ? void 0 : _a2.val) ?? 8)), i = Us(l, a, c, s);
        Vo();
        const p = [
          ...e.nodes.val
        ], r = [
          ...e.elements.val
        ];
        let d = kt;
        for (let g = 1; g < i.length; g++) {
          let S;
          if (g === i.length - 1) S = o;
          else {
            const $ = i[g];
            S = p.length, p.push([
              $.x,
              $.y,
              $.z
            ]);
          }
          r.push([
            d,
            S
          ]), d = S;
        }
        e.nodes.val = p, e.elements.val = r, To(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, kt = o, lo = null;
        return;
      }
      if (Vt === "area") {
        const o = ns(t);
        if (o < 0) return;
        if (so.length >= 3 && o === so[0]) {
          Vo();
          const n = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], a = so.map((c) => n[c]);
          try {
            const c = Io({
              points: a,
              polygon: Array.from({
                length: a.length
              }, (i, p) => p),
              maxMeshSize: Qn || 0.5
            }), s = [];
            for (const i of c.nodes) {
              let p = -1;
              for (let r = 0; r < n.length; r++) {
                const d = Math.abs(n[r][0] - i[0]), g = Math.abs(n[r][1] - i[1]), S = Math.abs(n[r][2] - i[2]);
                if (d < 0.01 && g < 0.01 && S < 0.01) {
                  p = r;
                  break;
                }
              }
              p >= 0 ? s.push(p) : (s.push(n.length), n.push([
                i[0],
                i[1],
                i[2]
              ]));
            }
            for (const i of c.elements) l.push([
              s[i[0]],
              s[i[1]],
              s[i[2]]
            ]);
            e.nodes.val = n, e.elements.val = l, To(), console.log(`Area: ${c.elements.length} triangulos creados desde ${so.length} vertices`);
          } catch (c) {
            console.error("Area mesh failed:", c.message);
          }
          so = [];
          return;
        }
        if (so.push(o), console.log(`Area vertex ${so.length}: node ${o}`), so.length >= 2) {
          const n = so[so.length - 2], l = e.nodes.val, a = tt();
          if (a) {
            const c = new co().setFromPoints([
              new qe(...l[n]),
              new qe(...l[o])
            ]), s = new en(c, new tn({
              color: 65280,
              linewidth: 2
            }));
            s.name = "area-preview", a.scene.add(s), a.render();
          }
        }
        return;
      }
    }
    function Ks(t) {
      const o = tt();
      if (!o) return;
      to && (o.scene.remove(to), to.geometry.dispose(), to.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const a = [];
      for (let s = 0; s < l.length; s++) {
        const i = n[l[s]], p = n[l[(s + 1) % l.length]];
        a.push(i[0], i[1], i[2], p[0], p[1], p[2]);
      }
      const c = new co();
      c.setAttribute("position", new Do(a, 3)), to = new en(c, new tn({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), to.renderOrder = 9999, o.scene.add(to), o.render();
    }
    function ss(t) {
      const o = tt();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new wa((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), a = new Ma();
      a.setFromCamera(l, o.controls.object), a.params.Line = {
        threshold: 0.5
      };
      const c = e.nodes.val, s = e.elements.val;
      if (c.length === 0 || s.length === 0) return -1;
      let i = 1 / 0, p = -1;
      const r = a.ray;
      for (let g = 0; g < s.length; g++) {
        const S = s[g];
        if (S.length === 2) {
          const $ = new qe(...c[S[0]]), y = new qe(...c[S[1]]), f = new Sl($, y), h = new qe(), I = new qe();
          r.closestPointToPoint(f.getCenter(new qe()), h), f.closestPointToPoint(h, true, I);
          const L = h.distanceTo(I);
          L < i && (i = L, p = g);
        } else if (S.length === 3) {
          const $ = new qe(...c[S[0]]), y = new qe(...c[S[1]]), f = new qe(...c[S[2]]), h = new qe();
          if (r.intersectTriangle($, y, f, false, h)) {
            const L = r.origin.distanceTo(h);
            L < i && (i = L, p = g);
          } else {
            const L = $.add(y).add(f).divideScalar(3), z = new qe();
            r.closestPointToPoint(L, z);
            const R = z.distanceTo(L);
            R < i && (i = R, p = g);
          }
        } else if (S.length === 4) {
          const $ = new qe(...c[S[0]]), y = new qe(...c[S[1]]), f = new qe(...c[S[2]]), h = new qe(...c[S[3]]), I = new qe();
          let L = r.intersectTriangle($, y, f, false, I);
          if (L) {
            const z = r.origin.distanceTo(I);
            z < i && (i = z, p = g);
          }
          if (L = r.intersectTriangle($, f, h, false, I), L) {
            const z = r.origin.distanceTo(I);
            z < i && (i = z, p = g);
          }
        }
      }
      const { extent: d } = zo();
      return i < d * 0.1 ? p : -1;
    }
    function Ee(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function as(t, o, n = 12) {
      var _a2;
      const l = Math.min(t.length, n), a = Math.min(((_a2 = t[0]) == null ? void 0 : _a2.length) || 0, n);
      let c = "<table>";
      if (o) {
        c += '<tr><td class="header"></td>';
        for (let s = 0; s < a; s++) c += `<td class="header">${o[s] || s}</td>`;
        c += "</tr>";
      }
      for (let s = 0; s < l; s++) {
        c += "<tr>", o && (c += `<td class="header">${o[s] || s}</td>`);
        for (let i = 0; i < a; i++) {
          const p = t[s][i], r = Math.abs(p) > 1e-10 ? "nonzero" : "";
          c += `<td class="${r}">${Ee(p, 2)}</td>`;
        }
        c += "</tr>";
      }
      return c += "</table>", c;
    }
    function je(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function F(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function Za(t, o, n, l, a, c, s) {
      const i = 0.8333333333333334 * o, p = 5 / 6 * o, r = p > 0 && a > 0 ? 12 * t * n / (a * p * s ** 2) : 0, d = i > 0 && a > 0 ? 12 * t * l / (a * i * s ** 2) : 0, g = t * o / s, S = a * c / s, $ = 12 * t * n / s ** 3 / (1 + r), y = 6 * t * n / s ** 2 / (1 + r), f = 4 * t * n / s * (1 + r / 4) / (1 + r), h = 2 * t * n / s * (1 - r / 2) / (1 + r), I = r > 1e-10 || d > 1e-10;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n: ${I ? "Timoshenko (con deformaci\xF3n por cortante)" : "Euler-Bernoulli"}</strong></div>
      ${I ? `
      <div style="text-align:left;margin-bottom:6px;color:var(--fem-eq-sub)">
        ${F("A", "s")} = ${je("5", "6")} \xB7 ${F("A")} = <span class="highlight">${Ee(i)}</span>
        &nbsp;&nbsp; \u03C6<sub>z</sub> = ${je("12\xB7" + F("E") + "\xB7" + F("I", "z"), F("G") + "\xB7" + F("A", "s") + "\xB7" + F("L") + "\xB2")} = <span class="highlight">${Ee(r)}</span>
        &nbsp;&nbsp; \u03C6<sub>y</sub> = <span class="highlight">${Ee(d)}</span>
      </div>
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes Timoshenko (Dr. Aguiar):</strong></div>
      <div>${F("t", "z")} = ${je("12\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB3\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Ee($)}</span> &nbsp;(cortante)</div>
      <div>${F("b", "z")} = ${je("6\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB2\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Ee(y)}</span> &nbsp;(acoplamiento)</div>
      <div>${F("k", "z")} = ${je("4\xB7" + F("E") + "\xB7" + F("I", "z") + "\xB7(1+\u03C6/4)", F("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Ee(f)}</span> &nbsp;(flexi\xF3n diagonal)</div>
      <div>${F("a", "z")} = ${je("2\xB7" + F("E") + "\xB7" + F("I", "z") + "\xB7(1\u2212\u03C6/2)", F("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Ee(h)}</span> &nbsp;(flexi\xF3n off-diag)</div>
      ` : `
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      `}
      <div>${je(F("E") + "\xB7" + F("A"), F("L"))} = <span class="highlight">${Ee(g)}</span> &nbsp;(axial)</div>
      <div>${je(F("G") + "\xB7" + F("J"), F("L"))} = <span class="highlight">${Ee(S)}</span> &nbsp;(torsi\xF3n)</div>
      ${I ? "" : `
      <div>${je("12\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB3")} = <span class="highlight">${Ee($)}</span></div>
      <div>${je("4\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))} = <span class="highlight">${Ee(f)}</span></div>
      `}
    </div>
    <div class="fem-eq">
      ${F("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${je(F("EA"), F("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${je("\u2212" + F("EA"), F("L"))}</span>
        <span class="cell">0</span><span class="cell">${F("t", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${F("b", "z")}</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">0</span><span class="cell">${F("b", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${F("k", "z")}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712 ${I ? "(Timoshenko)" : "(Euler-Bernoulli)"}</sub>
    </div>
    ${I ? `<div class="fem-eq eq-box" style="margin-top:6px">
      <div style="text-align:left"><strong style="color:var(--fem-section-title)">Matrices de rigidez (Dr. Aguiar, Fig 7.9):</strong></div>
      <div style="margin-top:4px">${F("K", "f")} = ${F("B", "f")}<sup>T</sup> \xB7 ${F("E")}\xB7${F("I")} \xB7 ${F("B", "f")} \xB7 ${F("J")} &nbsp;<sub style="color:var(--fem-label)">(flexi\xF3n, 1 pt Gauss)</sub></div>
      <div>${F("K", "c")} = ${F("B", "c")}<sup>T</sup> \xB7 ${F("G")}\xB7${F("A'")} \xB7 ${F("B", "c")} \xB7 ${F("J")} &nbsp;<sub style="color:var(--fem-label)">(cortante, 2 pts Gauss)</sub></div>
      <div>${F("K", "total")} = ${F("K", "f")} + ${F("K", "c")}</div>
    </div>` : ""}`;
    }
    function Qa(t) {
      if (t.length === 2) {
        const n = ko(t[1], t[0]), l = Wo(n), a = n[0] / l, c = n[1] / l, s = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${F("l")} = cos(\u03B1) = ${je("\u0394x", F("L"))} = ${je(Ee(n[0]), Ee(l))} = <span class="highlight">${Ee(a)}</span></div>
        <div>${F("m")} = cos(\u03B2) = ${je("\u0394y", F("L"))} = ${je(Ee(n[1]), Ee(l))} = <span class="highlight">${Ee(c)}</span></div>
        <div>${F("n")} = cos(\u03B3) = ${je("\u0394z", F("L"))} = ${je(Ee(n[2]), Ee(l))} = <span class="highlight">${Ee(s)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${F("l")}</span><span class="cell">${F("m")}</span><span class="cell">${F("n")}</span>
          <span class="cell">${je("\u2212" + F("m"), F("D"))}</span><span class="cell">${je(F("l"), F("D"))}</span><span class="cell">0</span>
          <span class="cell">${je("\u2212" + F("l") + "\xB7" + F("n"), F("D"))}</span><span class="cell">${je("\u2212" + F("m") + "\xB7" + F("n"), F("D"))}</span><span class="cell">${F("D")}</span>
        </span>
        &nbsp; donde ${F("D")} = \u221A(${F("l")}\xB2 + ${F("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${F("T")} = ${F("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${F("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function el() {
      return `<div class="fem-eq">
      ${F("K", "global")} = ${F("T")}<sup>T</sup> \xB7 ${F("k", "local")} \xB7 ${F("T")}
    </div>`;
    }
    function tl(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${F("K", "global")}[${F("i")}, ${F("j")}] += ${F("K", "elem")}[${F("i")}, ${F("j")}]</div>
      <div style="margin-top:4px">donde ${F("i")}, ${F("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function ol(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${F("u", "local")} = ${F("T")} \xB7 ${F("u", "global")}</div>
        <div>${F("f", "local")} = ${F("k", "local")} \xB7 ${F("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${F("f")} = [${F("N", "i")}, ${F("V", "y,i")}, ${F("V", "z,i")}, ${F("M", "x,i")}, ${F("M", "y,i")}, ${F("M", "z,i")}, ${F("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${je("1", "2" + F("A"))} \xB7 ${F("D")} \xB7 ${F("B")} \xB7 ${F("u")}</div>
      <div>${F("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${F("t")} &nbsp;&nbsp; ${F("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${je(F("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function ls(t, o) {
      const n = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let a = 0; a < n; a++) l += `<td class="hdr">${o[a] || a}</td>`;
      l += "</tr>";
      for (let a = 0; a < n; a++) {
        l += `<tr><td class="hdr">${o[a] || a}</td>`;
        for (let c = 0; c < n; c++) {
          const s = t[a][c], i = (a === c ? "diag " : "") + (Math.abs(s) > 1e-10 ? "nz" : "");
          l += `<td class="${i}">${Ee(s, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function Zs() {
      const t = "0", o = je(F("EA"), F("L")), n = je("\u2212" + F("EA"), F("L")), l = je("12" + F("EI", "z"), F("L") + "\xB3"), a = je("\u221212" + F("EI", "z"), F("L") + "\xB3"), c = je("12" + F("EI", "y"), F("L") + "\xB3"), s = je("\u221212" + F("EI", "y"), F("L") + "\xB3"), i = je("6" + F("EI", "z"), F("L") + "\xB2"), p = je("\u22126" + F("EI", "z"), F("L") + "\xB2"), r = je("6" + F("EI", "y"), F("L") + "\xB2"), d = je("\u22126" + F("EI", "y"), F("L") + "\xB2"), g = je(F("GJ"), F("L")), S = je("\u2212" + F("GJ"), F("L")), $ = je("4" + F("EI", "z"), F("L")), y = je("2" + F("EI", "z"), F("L")), f = je("4" + F("EI", "y"), F("L")), h = je("2" + F("EI", "y"), F("L")), I = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', L = [
        "P\u2081",
        "P\u2082",
        "P\u2083",
        "P\u2084",
        "P\u2085",
        "P\u2086",
        "P\u2087",
        "P\u2088",
        "P\u2089",
        "P\u2081\u2080",
        "P\u2081\u2081",
        "P\u2081\u2082"
      ], z = [
        "\u03B4\u2081",
        "\u03B4\u2082",
        "\u03B4\u2083",
        "\u03B4\u2084",
        "\u03B4\u2085",
        "\u03B4\u2086",
        "\u03B4\u2087",
        "\u03B4\u2088",
        "\u03B4\u2089",
        "\u03B4\u2081\u2080",
        "\u03B4\u2081\u2081",
        "\u03B4\u2081\u2082"
      ], R = [
        [
          o,
          t,
          t,
          t,
          t,
          t,
          n,
          t,
          t,
          t,
          t,
          t
        ],
        [
          t,
          l,
          t,
          t,
          t,
          i,
          t,
          a,
          t,
          t,
          t,
          i
        ],
        [
          t,
          t,
          c,
          t,
          d,
          t,
          t,
          t,
          s,
          t,
          d,
          t
        ],
        [
          t,
          t,
          t,
          g,
          t,
          t,
          t,
          t,
          t,
          S,
          t,
          t
        ],
        [
          t,
          t,
          d,
          t,
          f,
          t,
          t,
          t,
          r,
          t,
          h,
          t
        ],
        [
          t,
          i,
          t,
          t,
          t,
          $,
          t,
          p,
          t,
          t,
          t,
          y
        ],
        [
          n,
          t,
          t,
          t,
          t,
          t,
          o,
          t,
          t,
          t,
          t,
          t
        ],
        [
          t,
          a,
          t,
          t,
          t,
          p,
          t,
          l,
          t,
          t,
          t,
          p
        ],
        [
          t,
          t,
          s,
          t,
          r,
          t,
          t,
          t,
          c,
          t,
          r,
          t
        ],
        [
          t,
          t,
          t,
          S,
          t,
          t,
          t,
          t,
          t,
          g,
          t,
          t
        ],
        [
          t,
          t,
          d,
          t,
          h,
          t,
          t,
          t,
          r,
          t,
          f,
          t
        ],
        [
          t,
          i,
          t,
          t,
          t,
          y,
          t,
          p,
          t,
          t,
          t,
          $
        ]
      ];
      let k = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      k += '<table><tr><td class="hdr"></td>';
      for (const m of z) k += `<td class="hdr">${m}</td>`;
      k += "</tr>";
      for (let m = 0; m < 12; m++) {
        k += `<tr><td class="hdr">${L[m]}</td>`;
        for (let u = 0; u < 12; u++) if (u < m) k += `<td style="color:var(--fem-border-cell)">${u === 0 && m > 0 ? I : ""}</td>`;
        else {
          const E = R[m][u], C = (m === u ? "diag " : "") + (E !== "0" ? "nz" : "");
          k += `<td class="${C}">${E}</td>`;
        }
        k += "</tr>";
      }
      return k += "</table>", k;
    }
    function nl(t, o, n, l, a, c, s) {
      return `<div class="coeff-grid">${[
        {
          name: `${je(F("E") + "\xB7" + F("A"), F("L"))}`,
          calc: `${je(Ee(t) + "\xD7" + Ee(o), Ee(s))}`,
          val: t * o / s,
          label: "Axial"
        },
        {
          name: `${je("12\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB3")}`,
          calc: `${je("12\xD7" + Ee(t) + "\xD7" + Ee(n), Ee(s) + "\xB3")}`,
          val: 12 * t * n / s ** 3,
          label: "Corte Y"
        },
        {
          name: `${je("6\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB2")}`,
          calc: `${je("6\xD7" + Ee(t) + "\xD7" + Ee(n), Ee(s) + "\xB2")}`,
          val: 6 * t * n / s ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${je("12\xB7" + F("E") + "\xB7" + F("I", "y"), F("L") + "\xB3")}`,
          calc: `${je("12\xD7" + Ee(t) + "\xD7" + Ee(l), Ee(s) + "\xB3")}`,
          val: 12 * t * l / s ** 3,
          label: "Corte Z"
        },
        {
          name: `${je("6\xB7" + F("E") + "\xB7" + F("I", "y"), F("L") + "\xB2")}`,
          calc: `${je("6\xD7" + Ee(t) + "\xD7" + Ee(l), Ee(s) + "\xB2")}`,
          val: 6 * t * l / s ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${je(F("G") + "\xB7" + F("J"), F("L"))}`,
          calc: `${je(Ee(a) + "\xD7" + Ee(c), Ee(s))}`,
          val: a * c / s,
          label: "Torsi\xF3n"
        },
        {
          name: `${je("4\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))}`,
          calc: `${je("4\xD7" + Ee(t) + "\xD7" + Ee(n), Ee(s))}`,
          val: 4 * t * n / s,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${je("2\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))}`,
          calc: `${je("2\xD7" + Ee(t) + "\xD7" + Ee(n), Ee(s))}`,
          val: 2 * t * n / s,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${je("4\xB7" + F("E") + "\xB7" + F("I", "y"), F("L"))}`,
          calc: `${je("4\xD7" + Ee(t) + "\xD7" + Ee(l), Ee(s))}`,
          val: 4 * t * l / s,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${je("2\xB7" + F("E") + "\xB7" + F("I", "y"), F("L"))}`,
          calc: `${je("2\xD7" + Ee(t) + "\xD7" + Ee(l), Ee(s))}`,
          val: 2 * t * l / s,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((p) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${p.label}</div>${p.name} = ${p.calc} = <span class="highlight">${Ee(p.val)}</span></div>`).join("")}</div>`;
    }
    function is(t, o, n, l) {
      var _a2;
      const a = document.querySelector(".fem-full-overlay");
      a && a.remove();
      const c = document.createElement("div");
      c.className = "fem-full-overlay", c.innerHTML = `
      <button class="close-full" id="fem-full-close">\u2715 Cerrar</button>
      <h2>${t}</h2>
      <div class="fem-full-sections">
        <div class="full-section">
          <div class="side-title">\u2460 F\xF3rmula General (simb\xF3lica)</div>
          <div class="fem-full-sym">${o}</div>
        </div>
        ${l ? `<div class="full-section coeff">
          <div class="side-title">\u2461 C\xE1lculo de Coeficientes (sustituci\xF3n num\xE9rica)</div>
          ${l}
        </div>` : ""}
        <div class="full-section numeric">
          <div class="side-title">${l ? "\u2462" : "\u2461"} Matriz Num\xE9rica Resultante</div>
          ${n}
        </div>
      </div>
    `, document.body.appendChild(c), (_a2 = c.querySelector("#fem-full-close")) == null ? void 0 : _a2.addEventListener("click", () => c.remove()), c.addEventListener("click", (s) => {
        s.target === c && c.remove();
      });
    }
    function Qs(t) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O;
      ao && ao.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], a = l.map((m) => o[m]), c = l.length === 2, s = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, i = (_b = e.deformOutputs) == null ? void 0 : _b.val, p = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      var r = "";
      if (c) {
        const m = Wo(ko(a[1], a[0])), u = ((_d = s.elasticities) == null ? void 0 : _d.get(t)) ?? 0, E = ((_e2 = s.areas) == null ? void 0 : _e2.get(t)) ?? 0, C = ((_f = s.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, N = ((_g = s.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, G = ((_h = s.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, x = ((_i = s.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0, w = ((_j = s.momentReleases) == null ? void 0 : _j.get(t)) || [], v = ((_k = s.partialFixitySprings) == null ? void 0 : _k.get(t)) || [], P = [
          "P (Axial)",
          "V2 (Corte)",
          "V3 (Corte)",
          "T (Torsi\xF3n)",
          "M22 (Momento)",
          "M33 (Momento)"
        ];
        let K = "";
        for (let U = 0; U < 6; U++) {
          const le = U, te = U + 6, Q = (w.length >= 12 ? w[le] : U >= 3 && w.length >= 6 && w[U - 3]) ? "checked" : "", me = (w.length >= 12 ? w[te] : U >= 3 && w.length >= 6 && w[U]) ? "checked" : "", de = v.length >= 12 && v[le] > 0 ? v[le].toFixed(1) : "", ke = v.length >= 12 && v[te] > 0 ? v[te].toFixed(1) : "";
          K += `<tr>
          <td style="text-align:left;color:var(--fem-key)">${P[U]}</td>
          <td style="text-align:center"><input type="checkbox" data-rel="${le}" ${Q}></td>
          <td style="text-align:center"><input type="checkbox" data-rel="${te}" ${me}></td>
          <td><input type="number" data-spr="${le}" value="${de}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
          <td><input type="number" data-spr="${te}" value="${ke}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
        </tr>`;
        }
        `${l[0]}${l[1]}${Ee(m)}${Ee(u)}${Ee(E)}${Ee(C)}${Ee(N)}${Ee(G)}${Ee(x)}${K}`;
      } else {
        const m = ((_l2 = s.elasticities) == null ? void 0 : _l2.get(t)) ?? 0, u = ((_m = s.thicknesses) == null ? void 0 : _m.get(t)) ?? 0, E = ((_n2 = s.poissonsRatios) == null ? void 0 : _n2.get(t)) ?? 0, C = m / (2 * (1 + E)), N = l.length === 4, G = m / (1 - E * E);
        `${l.length}${l.join(", ")}${Ee(m)}${Ee(C)}${Ee(u)}${Ee(E)}`, N && (r = `<div class="fem-eq eq-box">
          <div style="text-align:left;margin-bottom:6px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n Q4: Membrana + Mindlin-Reissner + Drilling</strong></div>

          <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">1. Matriz constitutiva (esfuerzo plano):</strong></div>
          <div>${F("D")} = ${je(F("E"), "1\u2212\u03BD\xB2")} \xB7 <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
            <span class="cell">1</span><span class="cell">\u03BD</span><span class="cell">0</span>
            <span class="cell">\u03BD</span><span class="cell">1</span><span class="cell">0</span>
            <span class="cell">0</span><span class="cell">0</span><span class="cell">${je("1\u2212\u03BD", "2")}</span>
          </span> = ${je(Ee(m), "1\u2212" + Ee(E) + "\xB2")} = <span class="highlight">${Ee(G)}</span></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">2. Funciones de forma (Ec. 6.2, Wilson):</strong></div>
          <div>${F("N", "i")} = \xBC\xB7(1\xB1\u03BE)\xB7(1\xB1\u03B7) &nbsp;&nbsp; <sub style="color:var(--fem-label)">i = 1..4 (bilineal)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">3. Modos incompatibles (Ec. 6.13, Wilson 1971):</strong></div>
          <div>${F("N", "5")} = 1 \u2212 \u03BE\xB2 &nbsp;&nbsp; ${F("N", "6")} = 1 \u2212 \u03B7\xB2</div>
          <div style="margin-top:4px">${F("u", "x")} = \u03A3${F("N", "i")}\xB7${F("u", "xi")} + \u03B1\u2081\xB7${F("N", "5")} + \u03B1\u2082\xB7${F("N", "6")} &nbsp;<sub style="color:var(--fem-label)">(Ec. 6.12)</sub></div>
          <div>${F("u", "y")} = \u03A3${F("N", "i")}\xB7${F("u", "yi")} + \u03B1\u2083\xB7${F("N", "5")} + \u03B1\u2084\xB7${F("N", "6")}</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">4. Deformaci\xF3n-desplazamiento (Ec. 6.3):</strong></div>
          <div>${F("d")} = [${F("B", "C")} &nbsp; ${F("B", "I")}] \xB7 [${F("u")} &nbsp; \u03B1]<sup>T</sup></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">5. Submatrices de rigidez (Ec. 6.9):</strong></div>
          <div>${F("k", "CC")} = \u222B${F("B", "C")}<sup>T</sup>\xB7${F("E")}\xB7${F("B", "C")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD78 est\xE1ndar)</sub></div>
          <div>${F("k", "CI")} = \u222B${F("B", "C")}<sup>T</sup>\xB7${F("E")}\xB7${F("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD74 acoplamiento)</sub></div>
          <div>${F("k", "II")} = \u222B${F("B\u0304", "I")}<sup>T</sup>\xB7${F("E")}\xB7${F("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(4\xD74 modos internos)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">6. Condensaci\xF3n est\xE1tica (Ec. 6.11):</strong></div>
          <div style="font-size:13px"><span class="highlight">${F("k", "C")} = ${F("k", "CC")} \u2212 ${F("k", "CI")} \xB7 ${F("k", "II")}\u207B\xB9 \xB7 ${F("k", "IC")}</span></div>
          <div style="margin-top:4px;color:var(--fem-eq-sub)">Los 4 modos incompatibles \u03B1 se eliminan antes del ensamblaje global</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">7. Correcci\xF3n de Taylor (Ec. 6.7):</strong></div>
          <div>${F("B\u0304", "I")} = ${F("B", "I")} + ${F("B", "IC")} &nbsp; donde &nbsp; ${F("B", "IC")} = \u2212${je("1", "V")}\u222B${F("B", "I")} dV</div>
          <div style="color:var(--fem-eq-sub)">Jacobiano del centro para modos incompatibles \u2192 pasa patch test</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">8. Drilling DOF (Hughes-Brezzi 1989):</strong></div>
          <div>${F("K", "drill")} = \u03B1\xB7${F("G")}\xB7${F("t")} \xB7 \u222B${F("B", "d")}<sup>T</sup>\xB7${F("B", "d")} dA &nbsp; donde \u03B1 = 0.5</div>
          <div>${F("B", "d")}[i] = \u03B8<sub>z,i</sub> \u2212 \xBD\xB7(\u2202v/\u2202x \u2212 \u2202u/\u2202y) &nbsp;<sub style="color:var(--fem-label)">(rotaci\xF3n antisim\xE9trica)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">9. Placa Mindlin-Reissner + MITC4:</strong></div>
          <div>${F("D", "b")} = ${je(F("E") + "\xB7" + F("t") + "\xB3", "12\xB7(1\u2212\u03BD\xB2)")} = <span class="highlight">${Ee(m * u ** 3 / (12 * (1 - E ** 2)))}</span></div>
          <div>${F("D", "s")} = \u03BA\xB7${F("G")}\xB7${F("t")} = <span class="highlight">${Ee(5 / 6 * C * u)}</span> &nbsp; <sub style="color:var(--fem-label)">\u03BA = 5/6</sub></div>
          <div style="color:var(--fem-eq-sub)">MITC4: interpolaci\xF3n de cortante en puntos de atado (tying points)</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">10. Ensamblaje final:</strong></div>
          <div>${F("K", "24\xD724")} = ${F("K", "membrana")}(8\xD78) + ${F("K", "flexi\xF3n")}(12\xD712) + ${F("K", "drilling")}(12\xD712)</div>
          <div style="color:var(--fem-eq-sub)">DOFs por nodo: [u, v, w, \u03B8x, \u03B8y, \u03B8z]</div>
        </div>`);
      }
      let d = "", g = "", S = "";
      r || (r = "");
      let $ = "", y = "", f = "", h = "", I = null, L = null, z = null, R = [];
      try {
        if (I = Fn(a, s, t), L = Pn(a), z = uo(xs(L), uo(I, L)), R = c ? [
          "ux\u2080",
          "uy\u2080",
          "uz\u2080",
          "\u03B8x\u2080",
          "\u03B8y\u2080",
          "\u03B8z\u2080",
          "ux\u2081",
          "uy\u2081",
          "uz\u2081",
          "\u03B8x\u2081",
          "\u03B8y\u2081",
          "\u03B8z\u2081"
        ] : l.length === 4 ? [
          "ux\u2080",
          "uy\u2080",
          "uz\u2080",
          "\u03B8x\u2080",
          "\u03B8y\u2080",
          "\u03B8z\u2080",
          "ux\u2081",
          "uy\u2081",
          "uz\u2081",
          "\u03B8x\u2081",
          "\u03B8y\u2081",
          "\u03B8z\u2081",
          "ux\u2082",
          "uy\u2082",
          "uz\u2082",
          "\u03B8x\u2082",
          "\u03B8y\u2082",
          "\u03B8z\u2082",
          "ux\u2083",
          "uy\u2083",
          "uz\u2083",
          "\u03B8x\u2083",
          "\u03B8y\u2083",
          "\u03B8z\u2083"
        ] : [
          "ux\u2080",
          "uy\u2080",
          "uz\u2080",
          "\u03B8x\u2080",
          "\u03B8y\u2080",
          "\u03B8z\u2080",
          "ux\u2081",
          "uy\u2081",
          "uz\u2081",
          "\u03B8x\u2081",
          "\u03B8y\u2081",
          "\u03B8z\u2081",
          "ux\u2082",
          "uy\u2082",
          "uz\u2082",
          "\u03B8x\u2082",
          "\u03B8y\u2082",
          "\u03B8z\u2082"
        ], c) {
          const C = Wo(ko(a[1], a[0])), N = ((_o2 = s.elasticities) == null ? void 0 : _o2.get(t)) ?? 0, G = ((_p = s.areas) == null ? void 0 : _p.get(t)) ?? 0, x = ((_q = s.momentsOfInertiaZ) == null ? void 0 : _q.get(t)) ?? 0, w = ((_r = s.momentsOfInertiaY) == null ? void 0 : _r.get(t)) ?? 0, v = ((_s2 = s.shearModuli) == null ? void 0 : _s2.get(t)) ?? 0, P = ((_t2 = s.torsionalConstants) == null ? void 0 : _t2.get(t)) ?? 0;
          r = Za(N, G, x, w, v, P, C);
        }
        $ = Qa(a), y = el(), f = tl(l), h = ol(c);
        const m = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', u = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', E = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        d = `<div class="matrix-label">k_local (${I.length}\xD7${I.length}) ${m}</div>${as(I, R)}`, g = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${L.length}\xD7${L.length}) ${u}</div>${as(L, R)}`, S = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${E}</div>${as(z, R)}`;
      } catch (m) {
        d = `<div style="color:red">Error: ${m.message}</div>`;
      }
      if (i == null ? void 0 : i.deformations) {
        const m = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ];
        l.map((u, E) => {
          var _a3;
          const C = ((_a3 = i.deformations) == null ? void 0 : _a3.get(u)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], N = m.map((G, x) => `<span class="prop-key">${G}</span>: <span class="${Math.abs(C[x]) > 1e-10 ? "result-val" : ""}">${Ee(C[x])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${u}:</strong> ${N}</div>`;
        }).join("");
      }
      if (p && c && (i == null ? void 0 : i.deformations) && I && L) {
        const m = (_u = p.normals) == null ? void 0 : _u.get(t), u = (_v = p.shearsY) == null ? void 0 : _v.get(t), E = (_w = p.shearsZ) == null ? void 0 : _w.get(t), C = (_x = p.torsions) == null ? void 0 : _x.get(t), N = (_y = p.bendingsY) == null ? void 0 : _y.get(t), G = (_z = p.bendingsZ) == null ? void 0 : _z.get(t), x = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], w = [];
        for (const te of l) {
          const Q = ((_A = i.deformations) == null ? void 0 : _A.get(te)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          w.push(...Q);
        }
        let v = [];
        try {
          v = uo(L, w);
        } catch {
          v = new Array(12).fill(0);
        }
        let P = [];
        try {
          P = uo(I, v);
        } catch {
          P = new Array(12).fill(0);
        }
        const K = (te, Q) => te.map((me, de) => `<span style="color:${Math.abs(me) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${Q[de % 6]}=${Ee(me)}</span>`).join(", "), le = [
          "N",
          "Vy",
          "Vz",
          "Mx",
          "My",
          "Mz",
          "N",
          "Vy",
          "Vz",
          "Mx",
          "My",
          "Mz"
        ].map((te, Q) => `${te}${Q < 6 ? "\u1D62" : "\u2C7C"}`);
        `${F("u", "global")}${l.map((te, Q) => `<span style="color:var(--fem-label)">nodo ${te}:</span> ${x.map((me, de) => `<span style="color:${Math.abs(w[Q * 6 + de]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${Ee(w[Q * 6 + de])}</span>`).join(", ")}`).join(" | ")}${F("u", "local")}${F("T")}${F("u", "global")}${F("u", "local")}${K(v, [
          ...x,
          ...x
        ])}${F("f", "local")}${F("k", "local")}${F("u", "local")}${F("f", "local")}${P.map((te, Q) => `<span style="color:${Math.abs(te) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${le[Q]}=${Ee(te)}</span>`).join(", ")}${F("P", "1")}${F("N", "i")}${Ee(P[0])}${F("P", "7")}${F("N", "j")}${Ee(P[6])}${F("P", "2")}${F("V", "y,i")}${Ee(P[1])}${F("P", "8")}${F("V", "y,j")}${Ee(P[7])}${F("P", "3")}${F("V", "z,i")}${Ee(P[2])}${F("P", "9")}${F("V", "z,j")}${Ee(P[8])}${F("P", "4")}${F("M", "x,i")}${Ee(P[3])}${F("P", "10")}${F("M", "x,j")}${Ee(P[9])}${F("P", "5")}${F("M", "y,i")}${Ee(P[4])}${F("P", "11")}${F("M", "y,j")}${Ee(P[10])}${F("P", "6")}${F("M", "z,i")}${Ee(P[5])}${F("P", "12")}${F("M", "z,j")}${Ee(P[11])}${m ? m.map((te) => Ee(te)).join(", ") : "\u2014"}${u ? u.map((te) => Ee(te)).join(", ") : "\u2014"}${E ? E.map((te) => Ee(te)).join(", ") : "\u2014"}${C ? C.map((te) => Ee(te)).join(", ") : "\u2014"}${N ? N.map((te) => Ee(te)).join(", ") : "\u2014"}${G ? G.map((te) => Ee(te)).join(", ") : "\u2014"}`;
      } else if (p && c) {
        const m = (_B = p.normals) == null ? void 0 : _B.get(t), u = (_C = p.shearsY) == null ? void 0 : _C.get(t), E = (_D = p.shearsZ) == null ? void 0 : _D.get(t), C = (_E = p.torsions) == null ? void 0 : _E.get(t), N = (_F = p.bendingsY) == null ? void 0 : _F.get(t), G = (_G = p.bendingsZ) == null ? void 0 : _G.get(t);
        `${m ? m.map((x) => Ee(x)).join(", ") : "\u2014"}${u ? u.map((x) => Ee(x)).join(", ") : "\u2014"}${E ? E.map((x) => Ee(x)).join(", ") : "\u2014"}${C ? C.map((x) => Ee(x)).join(", ") : "\u2014"}${N ? N.map((x) => Ee(x)).join(", ") : "\u2014"}${G ? G.map((x) => Ee(x)).join(", ") : "\u2014"}`;
      } else if (p && !c) {
        const m = (_H = p.bendingXX) == null ? void 0 : _H.get(t), u = (_I = p.bendingYY) == null ? void 0 : _I.get(t), E = (_J = p.bendingXY) == null ? void 0 : _J.get(t), C = (_K = p.membraneXX) == null ? void 0 : _K.get(t), N = (_L = p.membraneYY) == null ? void 0 : _L.get(t), G = (_M = p.membraneXY) == null ? void 0 : _M.get(t);
        `${m ? m.map((x) => Ee(x)).join(", ") : "\u2014"}${u ? u.map((x) => Ee(x)).join(", ") : "\u2014"}${E ? E.map((x) => Ee(x)).join(", ") : "\u2014"}${C ? C.map((x) => Ee(x)).join(", ") : "\u2014"}${N ? N.map((x) => Ee(x)).join(", ") : "\u2014"}${G ? G.map((x) => Ee(x)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, ao = Bl(t, o, n, s, i, p), ao.id = "fem-inspect-panel", document.body.appendChild(ao), (_N = ao.querySelector("#er-close")) == null ? void 0 : _N.addEventListener("click", () => _o()), (_O = ao.querySelector("#rel-apply")) == null ? void 0 : _O.addEventListener("click", () => {
        const m = ao.querySelectorAll("input[data-rel]"), u = ao.querySelectorAll("input[data-spr]"), E = new Array(12).fill(false), C = new Array(12).fill(0);
        m.forEach((G) => {
          E[parseInt(G.dataset.rel)] = G.checked;
        }), u.forEach((G) => {
          const x = parseFloat(G.value);
          x > 0 && (C[parseInt(G.dataset.spr)] = x);
        }), s.momentReleases || (s.momentReleases = /* @__PURE__ */ new Map()), s.partialFixitySprings || (s.partialFixitySprings = /* @__PURE__ */ new Map()), E.some((G) => G) ? s.momentReleases.set(t, E) : s.momentReleases.delete(t), C.some((G) => G > 0) ? s.partialFixitySprings.set(t, C) : s.partialFixitySprings.delete(t), console.log(`Releases elem ${t}:`, E.map((G, x) => G ? relIds[x] : "").filter(Boolean).join(" ") || "none"), console.log(`Springs elem ${t}:`, C);
        const N = ao.querySelector("#rel-apply");
        N.textContent = "\u2713 Aplicado", N.style.background = "#4caf50", setTimeout(() => {
          N.textContent = "Aplicar", N.style.background = "var(--fem-heading)";
        }, 1500);
      });
      const k = c ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const m = Wo(ko(a[1], a[0])), u = ((_a3 = s.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, E = ((_b2 = s.areas) == null ? void 0 : _b2.get(t)) ?? 0, C = ((_c2 = s.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, N = ((_d2 = s.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, G = ((_e3 = s.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, x = ((_f2 = s.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return nl(u, E, C, N, G, x, m);
      })() : void 0;
      ao.querySelectorAll("[data-full]").forEach((m) => {
        m.addEventListener("click", (u) => {
          u.stopPropagation();
          const E = m.dataset.full;
          if (E === "kLocal" && I) {
            const C = c ? Zs() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            is(`Elemento ${t} \u2014 Rigidez Local k_local`, C, ls(I, R), k);
          } else if (E === "T" && L) is(`Elemento ${t} \u2014 Transformaci\xF3n T`, $, ls(L, R));
          else if (E === "kGlobal" && z) {
            const C = c ? Zs() : "<em>Shell 18\xD718</em>";
            is(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, C, ls(z, R), k);
          }
        });
      });
    }
    function ea() {
      const l = [], a = [];
      for (let y = 0; y <= 8; y++) {
        const f = y / 8, h = 30 * f, L = 12 * (1 - f) * (1 - f * 0.3) / 2, z = l.length;
        if (l.push([
          -L,
          -L,
          h
        ]), l.push([
          L,
          -L,
          h
        ]), l.push([
          L,
          L,
          h
        ]), l.push([
          -L,
          L,
          h
        ]), a.push([
          z,
          z + 1
        ]), a.push([
          z + 1,
          z + 2
        ]), a.push([
          z + 2,
          z + 3
        ]), a.push([
          z + 3,
          z
        ]), y > 0 && y < 8 && (a.push([
          z,
          z + 2
        ]), a.push([
          z + 1,
          z + 3
        ])), y > 0) {
          const R = z - 4;
          for (let k = 0; k < 4; k++) a.push([
            R + k,
            z + k
          ]);
          a.push([
            R,
            z + 1
          ]), a.push([
            R + 1,
            z + 2
          ]), a.push([
            R + 2,
            z + 3
          ]), a.push([
            R + 3,
            z
          ]);
        }
      }
      const c = /* @__PURE__ */ new Map();
      for (let y = 0; y < 4; y++) c.set(y, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const s = l.length - 4, i = /* @__PURE__ */ new Map();
      for (let y = 0; y < 4; y++) i.set(s + y, [
        0,
        0,
        -50,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: i
      });
      const p = 2e8, r = 77e6, d = 5e-3, g = 2e-6, S = 1e-6, $ = {
        elasticities: new Map(a.map((y, f) => [
          f,
          p
        ])),
        shearModuli: new Map(a.map((y, f) => [
          f,
          r
        ])),
        areas: new Map(a.map((y, f) => [
          f,
          d
        ])),
        momentsOfInertiaZ: new Map(a.map((y, f) => [
          f,
          g
        ])),
        momentsOfInertiaY: new Map(a.map((y, f) => [
          f,
          g
        ])),
        torsionalConstants: new Map(a.map((y, f) => [
          f,
          S
        ]))
      };
      e.elementInputs && (e.elementInputs.val = $);
      try {
        const y = Ft(l, a, {
          supports: c,
          loads: i
        }, $);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Eiffel deform:", y.message);
      }
      setTimeout(() => It(), 50), st(), console.log(`Torre Eiffel: ${l.length} nodos, ${a.length} elementos, H=30m`);
    }
    function ta() {
      const l = [], a = [];
      for (let $ = 0; $ <= 20; $++) {
        const y = $ / 20, f = 20 * y, h = 20 * (1 - Math.pow(2 * y - 1, 2)), I = 2;
        l.push([
          f,
          -2 / 2,
          h
        ]), l.push([
          f,
          I / 2,
          h
        ]);
      }
      for (let $ = 0; $ < 20; $++) a.push([
        $ * 2,
        ($ + 1) * 2
      ]), a.push([
        $ * 2 + 1,
        ($ + 1) * 2 + 1
      ]), a.push([
        $ * 2,
        $ * 2 + 1
      ]), a.push([
        $ * 2,
        ($ + 1) * 2 + 1
      ]), a.push([
        $ * 2 + 1,
        ($ + 1) * 2
      ]);
      a.push([
        20 * 2,
        20 * 2 + 1
      ]);
      const c = /* @__PURE__ */ new Map();
      c.set(0, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), c.set(1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), c.set(20 * 2, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), c.set(20 * 2 + 1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const s = /* @__PURE__ */ new Map();
      for (let $ = 0; $ <= 20; $++) s.set($ * 2, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]), s.set($ * 2 + 1, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: s
      });
      const i = 2e8, p = 77e6, r = 0.01, d = 5e-6, g = 2e-6, S = {
        elasticities: new Map(a.map(($, y) => [
          y,
          i
        ])),
        shearModuli: new Map(a.map(($, y) => [
          y,
          p
        ])),
        areas: new Map(a.map(($, y) => [
          y,
          r
        ])),
        momentsOfInertiaZ: new Map(a.map(($, y) => [
          y,
          d
        ])),
        momentsOfInertiaY: new Map(a.map(($, y) => [
          y,
          d
        ])),
        torsionalConstants: new Map(a.map(($, y) => [
          y,
          g
        ]))
      };
      e.elementInputs && (e.elementInputs.val = S);
      try {
        const $ = Ft(l, a, {
          supports: c,
          loads: s
        }, S);
        $ && e.deformOutputs && (e.deformOutputs.val = $);
      } catch ($) {
        console.warn("Arco:", $.message);
      }
      setTimeout(() => It(), 50), st(), console.log(`Arco Gateway: ${l.length} nodos, ${a.length} elem, span=20m, H=20m`);
    }
    function oa() {
      const c = [], s = [];
      for (let f = 0; f <= 16; f++) {
        const h = 60 * f / 16;
        c.push([
          h,
          -6 / 2,
          8
        ]), c.push([
          h,
          6 / 2,
          8
        ]);
      }
      const i = c.length;
      for (let f = 0; f < 16; f++) s.push([
        f * 2,
        (f + 1) * 2
      ]), s.push([
        f * 2 + 1,
        (f + 1) * 2 + 1
      ]), s.push([
        f * 2,
        f * 2 + 1
      ]);
      s.push([
        16 * 2,
        16 * 2 + 1
      ]);
      const p = [
        Math.round(16 / 3),
        Math.round(2 * 16 / 3)
      ], r = [];
      for (const f of p) {
        const h = 60 * f / 16, I = c.length;
        c.push([
          h,
          -6 / 2,
          0
        ]);
        const L = c.length;
        c.push([
          h,
          6 / 2,
          0
        ]);
        const z = c.length;
        c.push([
          h,
          -6 / 2,
          28
        ]);
        const R = c.length;
        c.push([
          h,
          6 / 2,
          28
        ]), r.push(z, R), s.push([
          I,
          f * 2
        ]), s.push([
          f * 2,
          z
        ]), s.push([
          L,
          f * 2 + 1
        ]), s.push([
          f * 2 + 1,
          R
        ]), s.push([
          z,
          R
        ]);
      }
      for (const f of r) {
        const h = c[f][0];
        for (let I = 0; I <= 16; I++) {
          const L = 60 * I / 16;
          if (Math.abs(L - h) > 60 * 0.05 && Math.abs(L - h) < 60 * 0.45) {
            const z = c[f][1] < 0 ? I * 2 : I * 2 + 1;
            I % 2 === 0 && s.push([
              f,
              z
            ]);
          }
        }
      }
      const d = /* @__PURE__ */ new Map();
      d.set(0, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), d.set(1, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), d.set(16 * 2, [
        false,
        true,
        true,
        false,
        false,
        false
      ]), d.set(16 * 2 + 1, [
        false,
        true,
        true,
        false,
        false,
        false
      ]);
      for (let f = i; f < i + p.length * 4; f += 4) d.set(f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), d.set(f + 1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const g = /* @__PURE__ */ new Map();
      for (let f = 0; f <= 16; f++) g.set(f * 2, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]), g.set(f * 2 + 1, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]);
      e.nodes.val = c, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: g
      });
      const S = 2e8, $ = 77e6, y = {
        elasticities: new Map(s.map((f, h) => [
          h,
          S
        ])),
        shearModuli: new Map(s.map((f, h) => [
          h,
          $
        ])),
        areas: new Map(s.map((f, h) => [
          h,
          h < 16 * 3 + 1 ? 0.02 : 1e-3
        ])),
        momentsOfInertiaZ: new Map(s.map((f, h) => [
          h,
          5e-5
        ])),
        momentsOfInertiaY: new Map(s.map((f, h) => [
          h,
          2e-5
        ])),
        torsionalConstants: new Map(s.map((f, h) => [
          h,
          1e-5
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const f = Ft(c, s, {
          supports: d,
          loads: g
        }, y);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Puente:", f.message);
      }
      setTimeout(() => It(), 50), st(), console.log(`Puente atirantado: ${c.length} nodos, ${s.length} elem, span=60m`);
    }
    function na() {
      const c = [], s = [];
      for (let h = 0; h <= 12; h++) {
        const I = h * 3.5, L = h * 5 * Math.PI / 180;
        for (let z = 0; z < 6; z++) {
          const R = L + 2 * Math.PI * z / 6, k = 5 * Math.cos(R), m = 5 * Math.sin(R);
          c.push([
            k,
            m,
            I
          ]);
        }
      }
      for (let h = 0; h <= 12; h++) {
        const I = h * 6;
        for (let L = 0; L < 6; L++) s.push([
          I + L,
          I + (L + 1) % 6
        ]);
        if (h < 12) {
          const L = (h + 1) * 6;
          for (let z = 0; z < 6; z++) s.push([
            I + z,
            L + z
          ]), s.push([
            I + z,
            L + (z + 1) % 6
          ]);
        }
      }
      for (let h = 0; h <= 12; h++) {
        const I = c.length;
        c.push([
          0,
          0,
          h * 3.5
        ]);
        const L = h * 6;
        for (let z = 0; z < 6; z++) s.push([
          I,
          L + z
        ]);
      }
      const i = 13 * 6;
      for (let h = 0; h < 12; h++) s.push([
        i + h,
        i + h + 1
      ]);
      const p = /* @__PURE__ */ new Map();
      for (let h = 0; h < 6; h++) p.set(h, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      p.set(i, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const r = /* @__PURE__ */ new Map();
      for (let h = 1; h <= 12; h++) {
        const I = 10 * h / 12, L = h * 6;
        for (let z = 0; z < 6; z++) r.set(L + z, [
          I,
          0,
          -5,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = c, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: p,
        loads: r
      });
      const d = 2e8, g = 77e6, S = 8e-3, $ = 1e-5, y = 5e-6, f = {
        elasticities: new Map(s.map((h, I) => [
          I,
          d
        ])),
        shearModuli: new Map(s.map((h, I) => [
          I,
          g
        ])),
        areas: new Map(s.map((h, I) => [
          I,
          S
        ])),
        momentsOfInertiaZ: new Map(s.map((h, I) => [
          I,
          $
        ])),
        momentsOfInertiaY: new Map(s.map((h, I) => [
          I,
          $
        ])),
        torsionalConstants: new Map(s.map((h, I) => [
          I,
          y
        ]))
      };
      e.elementInputs && (e.elementInputs.val = f);
      try {
        const h = Ft(c, s, {
          supports: p,
          loads: r
        }, f);
        h && e.deformOutputs && (e.deformOutputs.val = h);
      } catch (h) {
        console.warn("Twisted:", h.message);
      }
      setTimeout(() => It(), 50), st(), console.log(`Torre Twist: ${c.length} nodos, ${s.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function sa() {
      const a = [], c = [];
      for (let f = 0; f <= 20; f++) {
        const h = f / 20, I = f * 3;
        let L = 8 * (1 - h * 0.7);
        h > 0.4 && (L *= 0.85), h > 0.7 && (L *= 0.7);
        const z = a.length;
        a.push([
          0,
          0,
          I
        ]);
        for (let R = 0; R < 3; R++) {
          const k = R * 2 * Math.PI / 3 - Math.PI / 2, m = L * Math.cos(k), u = L * Math.sin(k), E = a.length;
          a.push([
            m,
            u,
            I
          ]), c.push([
            z,
            E
          ]);
          const C = a.length;
          a.push([
            m * 0.5,
            u * 0.5,
            I
          ]), c.push([
            z,
            C
          ]), c.push([
            C,
            E
          ]);
        }
        for (let R = 0; R < 3; R++) {
          const k = z + 1 + R * 2, m = z + 1 + (R + 1) % 3 * 2;
          c.push([
            k,
            m
          ]);
        }
        if (f < 20) {
          const k = z + 7;
          c.push([
            z,
            k
          ]);
          for (let m = 0; m < 3; m++) c.push([
            z + 1 + m * 2,
            k + 1 + m * 2
          ]), c.push([
            z + 2 + m * 2,
            k + 2 + m * 2
          ]), c.push([
            z + 1 + m * 2,
            k + 2 + m * 2
          ]);
        }
      }
      const s = /* @__PURE__ */ new Map(), i = 1 + 3 * 2;
      for (let f = 0; f < i; f++) s.set(f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const p = /* @__PURE__ */ new Map();
      for (let f = 1; f <= 20; f++) {
        const h = f * i, I = 5 * f / 20;
        p.set(h, [
          I,
          0,
          -10,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = a, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: p
      });
      const r = 35e6, d = 14e6, g = 0.02, S = 5e-5, $ = 2e-5, y = {
        elasticities: new Map(c.map((f, h) => [
          h,
          r
        ])),
        shearModuli: new Map(c.map((f, h) => [
          h,
          d
        ])),
        areas: new Map(c.map((f, h) => [
          h,
          g
        ])),
        momentsOfInertiaZ: new Map(c.map((f, h) => [
          h,
          S
        ])),
        momentsOfInertiaY: new Map(c.map((f, h) => [
          h,
          S
        ])),
        torsionalConstants: new Map(c.map((f, h) => [
          h,
          $
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const f = Ft(a, c, {
          supports: s,
          loads: p
        }, y);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Burj:", f.message);
      }
      setTimeout(() => It(), 50), st(), console.log(`Burj Khalifa: ${a.length} nodos, ${c.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function aa() {
      const t = [], o = [];
      for (let g = 0; g < 3; g++) {
        const S = g * 12, $ = 15 - g * 2, y = 20 - g * 3, f = 8 - g, h = t.length;
        for (let L = 0; L <= 4; L++) {
          const z = L / 4, R = -f / 2 + f * z, k = y * (1 - z * z * 0.3);
          for (let m = 0; m <= 12; m++) {
            const u = m / 12, E = S + k * u, C = $ * Math.sin(Math.PI * u) * (1 - z * z * 0.5), N = R;
            t.push([
              E,
              N,
              C
            ]);
          }
        }
        const I = 13;
        for (let L = 0; L < 4; L++) for (let z = 0; z < 12; z++) {
          const R = h + L * I + z, k = h + L * I + z + 1, m = h + (L + 1) * I + z + 1, u = h + (L + 1) * I + z;
          o.push([
            R,
            k,
            m,
            u
          ]);
        }
      }
      const a = /* @__PURE__ */ new Map();
      for (let g = 0; g < t.length; g++) t[g][2] < 0.5 && a.set(g, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const c = /* @__PURE__ */ new Map();
      for (let g = 0; g < t.length; g++) t[g][2] > 2 && c.set(g, [
        0,
        0,
        -5,
        0,
        0,
        0
      ]);
      e.nodes.val = t, e.elements.val = o, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: c
      });
      const s = 35e6, i = 0.2, p = 0.15, r = s / (2 * (1 + i)), d = {
        elasticities: new Map(o.map((g, S) => [
          S,
          s
        ])),
        poissonsRatios: new Map(o.map((g, S) => [
          S,
          i
        ])),
        thicknesses: new Map(o.map((g, S) => [
          S,
          p
        ])),
        shearModuli: new Map(o.map((g, S) => [
          S,
          r
        ]))
      };
      e.elementInputs && (e.elementInputs.val = d);
      try {
        const g = Ft(t, o, {
          supports: a,
          loads: c
        }, d);
        g && e.deformOutputs && (e.deformOutputs.val = g);
      } catch (g) {
        console.warn("Opera:", g.message);
      }
      setTimeout(() => It(), 50), st(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function la() {
      const l = [], a = [];
      for (let y = 0; y <= 15; y++) {
        const f = y / 15, h = y * 3.5, I = 5 * (0.6 + 0.4 * Math.sin(Math.PI * f));
        if (f > 0.9) {
          const L = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (f - 0.9) * 8);
          for (let z = 0; z < 12; z++) {
            const R = 2 * Math.PI * z / 12;
            l.push([
              Math.max(L, 1) * Math.cos(R),
              Math.max(L, 1) * Math.sin(R),
              h
            ]);
          }
        } else for (let L = 0; L < 12; L++) {
          const z = 2 * Math.PI * L / 12;
          l.push([
            I * Math.cos(z),
            I * Math.sin(z),
            h
          ]);
        }
      }
      for (let y = 0; y < 15; y++) {
        const f = y * 12, h = (y + 1) * 12;
        for (let L = 0; L < 12; L++) a.push([
          f + L,
          f + (L + 1) % 12
        ]);
        const I = y % 2 === 0 ? 1 : -1;
        for (let L = 0; L < 12; L++) {
          const z = (L + I + 12) % 12;
          a.push([
            f + L,
            h + z
          ]), a.push([
            f + L,
            h + L
          ]);
        }
      }
      const c = 15 * 12;
      for (let y = 0; y < 12; y++) a.push([
        c + y,
        c + (y + 1) % 12
      ]);
      const s = /* @__PURE__ */ new Map();
      for (let y = 0; y < 12; y++) s.set(y, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const i = /* @__PURE__ */ new Map();
      for (let y = 1; y <= 15; y++) {
        const f = y * 12, h = 3 * y / 15;
        for (let I = 0; I < 12; I += 3) i.set(f + I, [
          h,
          0,
          -8,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = l, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: i
      });
      const p = 2e8, r = 77e6, d = 6e-3, g = 8e-6, S = 4e-6, $ = {
        elasticities: new Map(a.map((y, f) => [
          f,
          p
        ])),
        shearModuli: new Map(a.map((y, f) => [
          f,
          r
        ])),
        areas: new Map(a.map((y, f) => [
          f,
          d
        ])),
        momentsOfInertiaZ: new Map(a.map((y, f) => [
          f,
          g
        ])),
        momentsOfInertiaY: new Map(a.map((y, f) => [
          f,
          g
        ])),
        torsionalConstants: new Map(a.map((y, f) => [
          f,
          S
        ]))
      };
      e.elementInputs && (e.elementInputs.val = $);
      try {
        const y = Ft(l, a, {
          supports: s,
          loads: i
        }, $);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Diagrid:", y.message);
      }
      setTimeout(() => It(), 50), st(), console.log(`Diagrid Tower: ${l.length} nodos, ${a.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function rs() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = M, o = ((_a2 = J.W) == null ? void 0 : _a2.val) ?? 5, n = ((_b = J.H) == null ? void 0 : _b.val) ?? 3, l = ((_c = J.t) == null ? void 0 : _c.val) ?? 0.2, a = Math.round(((_d = J.nx) == null ? void 0 : _d.val) ?? 8), c = Math.round(((_e2 = J.ny) == null ? void 0 : _e2.val) ?? 6), s = ((_f = J.E) == null ? void 0 : _f.val) ?? 25e6, i = ((_g = J.nu) == null ? void 0 : _g.val) ?? 0.2, p = ((_h = J.P) == null ? void 0 : _h.val) ?? 100, r = s / (2 * (1 + i)), d = o / a, g = n / c, S = [], $ = [], y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
      for (let k = 0; k <= c; k++) for (let m = 0; m <= a; m++) S.push([
        m * d,
        0,
        k * g
      ]);
      const h = a + 1;
      for (let k = 0; k < c; k++) for (let m = 0; m < a; m++) $.push([
        k * h + m,
        k * h + m + 1,
        (k + 1) * h + m + 1,
        (k + 1) * h + m
      ]);
      for (let k = 0; k <= a; k++) y.set(k, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const I = [];
      for (let k = 0; k <= a; k++) I.push(c * h + k);
      const L = p / I.length;
      for (const k of I) f.set(k, [
        L,
        0,
        0,
        0,
        0,
        0
      ]);
      e.nodes.val = S, e.elements.val = $, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: f
      });
      const z = {
        elasticities: new Map($.map((k, m) => [
          m,
          s
        ])),
        poissonsRatios: new Map($.map((k, m) => [
          m,
          i
        ])),
        thicknesses: new Map($.map((k, m) => [
          m,
          l
        ])),
        shearModuli: new Map($.map((k, m) => [
          m,
          r
        ])),
        densities: new Map($.map((k, m) => [
          m,
          t.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = z);
      try {
        const k = Ft(S, $, {
          supports: y,
          loads: f
        }, z);
        if (k && e.deformOutputs) {
          e.deformOutputs.val = k;
          const m = Eo(S, $, z, k);
          e.analyzeOutputs && (e.analyzeOutputs.val = m);
          const u = c * h + Math.floor(a / 2), E = k.deformations.get(u), C = E ? E[0] : 0;
          console.log(`Muro Q4: Ux=${C.toExponential(4)} m | OS:4.602e-5 | SAP:4.629e-5 | ETABS:4.582e-5`);
        }
      } catch (k) {
        console.warn("MuroQ4:", k.message);
      }
      const R = tt();
      R && (R.settings.shellResults.val = "displacementX"), setTimeout(() => It(), 50), st();
    }
    function ia() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = M, o = ((_a2 = J.L) == null ? void 0 : _a2.val) ?? 6, n = ((_b = J.h) == null ? void 0 : _b.val) ?? 0.5, l = ((_c = J.t) == null ? void 0 : _c.val) ?? 0.2, a = Math.round(((_d = J.nx) == null ? void 0 : _d.val) ?? 12), c = Math.round(((_e2 = J.ny) == null ? void 0 : _e2.val) ?? 4), s = ((_f = J.E) == null ? void 0 : _f.val) ?? 25e6, i = ((_g = J.nu) == null ? void 0 : _g.val) ?? 0.2, p = ((_h = J.P) == null ? void 0 : _h.val) ?? 50, r = s / (2 * (1 + i)), d = o / a, g = n / c, S = [], $ = [], y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
      for (let R = 0; R <= c; R++) for (let k = 0; k <= a; k++) S.push([
        k * d,
        R * g,
        0
      ]);
      const h = a + 1;
      for (let R = 0; R < c; R++) for (let k = 0; k < a; k++) $.push([
        R * h + k,
        R * h + k + 1,
        (R + 1) * h + k + 1,
        (R + 1) * h + k
      ]);
      for (let R = 0; R <= c; R++) y.set(R * h, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const I = Math.floor(c / 2) * h + a;
      f.set(I, [
        0,
        0,
        -p,
        0,
        0,
        0
      ]), e.nodes.val = S, e.elements.val = $, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: f
      });
      const L = {
        elasticities: new Map($.map((R, k) => [
          k,
          s
        ])),
        poissonsRatios: new Map($.map((R, k) => [
          k,
          i
        ])),
        thicknesses: new Map($.map((R, k) => [
          k,
          l
        ])),
        shearModuli: new Map($.map((R, k) => [
          k,
          r
        ])),
        densities: new Map($.map((R, k) => [
          k,
          t.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = L);
      try {
        const R = Ft(S, $, {
          supports: y,
          loads: f
        }, L);
        if (R && e.deformOutputs) {
          e.deformOutputs.val = R;
          const k = Eo(S, $, L, R);
          e.analyzeOutputs && (e.analyzeOutputs.val = k);
          const m = R.deformations.get(I), u = m ? m[2] : 0, E = l * n * n * n / 12, C = p * o * o * o / (3 * s * E);
          console.log(`Viga Q4: Uz_tip=${u.toExponential(4)} | Analitico=${C.toExponential(4)} | ratio=${(Math.abs(u) / C).toFixed(4)}`);
        }
      } catch (R) {
        console.warn("VigaQ4:", R.message);
      }
      const z = tt();
      z && (z.settings.shellResults.val = "displacementZ"), setTimeout(() => It(), 50), st();
    }
    function ra() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = M, o = ((_a2 = J.Lx) == null ? void 0 : _a2.val) ?? 4, n = ((_b = J.Lz) == null ? void 0 : _b.val) ?? 2, l = ((_c = J.t) == null ? void 0 : _c.val) ?? 0.15, a = Math.round(((_d = J.nx) == null ? void 0 : _d.val) ?? 8), c = Math.round(((_e2 = J.nz) == null ? void 0 : _e2.val) ?? 4), s = ((_f = J.E) == null ? void 0 : _f.val) ?? 25e6, i = ((_g = J.nu) == null ? void 0 : _g.val) ?? 0.2, p = ((_h = J.P) == null ? void 0 : _h.val) ?? 20, r = s / (2 * (1 + i)), d = o / a, g = n / c, S = [], $ = [], y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
      for (let k = 0; k <= c; k++) for (let m = 0; m <= a; m++) S.push([
        m * d,
        0,
        k * g
      ]);
      const h = a + 1;
      for (let k = 0; k < c; k++) for (let m = 0; m < a; m++) $.push([
        k * h + m,
        k * h + m + 1,
        (k + 1) * h + m + 1,
        (k + 1) * h + m
      ]);
      for (let k = 0; k <= c; k++) y.set(k * h, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const I = [];
      for (let k = 0; k <= c; k++) I.push(k * h + a);
      const L = p / I.length;
      for (const k of I) f.set(k, [
        0,
        0,
        -L,
        0,
        0,
        0
      ]);
      e.nodes.val = S, e.elements.val = $, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: f
      });
      const z = {
        elasticities: new Map($.map((k, m) => [
          m,
          s
        ])),
        poissonsRatios: new Map($.map((k, m) => [
          m,
          i
        ])),
        thicknesses: new Map($.map((k, m) => [
          m,
          l
        ])),
        shearModuli: new Map($.map((k, m) => [
          m,
          r
        ])),
        densities: new Map($.map((k, m) => [
          m,
          t.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = z);
      try {
        const k = Ft(S, $, {
          supports: y,
          loads: f
        }, z);
        if (k && e.deformOutputs) {
          e.deformOutputs.val = k;
          const m = Eo(S, $, z, k);
          e.analyzeOutputs && (e.analyzeOutputs.val = m);
          const u = (c / 2 | 0) * h + a, E = k.deformations.get(u), C = E ? E[2] : 0;
          console.log(`Placa XZ Q4: Uz_tip=${C.toExponential(4)} m`);
        }
      } catch (k) {
        console.warn("PlacaXZ:", k.message);
      }
      const R = tt();
      R && (R.settings.shellResults.val = "displacementZ"), setTimeout(() => It(), 50), st();
    }
    function ca() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2;
      const t = M, o = ((_a2 = J.Lx) == null ? void 0 : _a2.val) ?? 6, n = ((_b = J.Ly) == null ? void 0 : _b.val) ?? 8, l = ((_c = J.H1) == null ? void 0 : _c.val) ?? 3, a = ((_d = J.H2) == null ? void 0 : _d.val) ?? 4.5, c = Math.round(((_e2 = J.nCol) == null ? void 0 : _e2.val) ?? 4), s = Math.round(((_f = J.nCorr) == null ? void 0 : _f.val) ?? 8), i = ((_g = J.E) == null ? void 0 : _g.val) ?? t.E, p = ((_h = J.t) == null ? void 0 : _h.val) ?? 5e-4, r = ((_i = J.q) == null ? void 0 : _i.val) ?? 1, d = 0.3, g = i / (2 * (1 + d)), S = ((_j = J.colD) == null ? void 0 : _j.val) ?? 0.16, $ = ((_k = J.colBf) == null ? void 0 : _k.val) ?? 0.16, y = ((_l2 = J.colTf) == null ? void 0 : _l2.val) ?? 0.013, f = ((_m = J.colTw) == null ? void 0 : _m.val) ?? 8e-3, h = ((_n2 = J.vigD) == null ? void 0 : _n2.val) ?? 0.2, I = ((_o2 = J.vigBf) == null ? void 0 : _o2.val) ?? 0.1, L = ((_p = J.vigTf) == null ? void 0 : _p.val) ?? 85e-4, z = ((_q = J.vigTw) == null ? void 0 : _q.val) ?? 56e-4, R = ((_r = J.corrB) == null ? void 0 : _r.val) ?? 0.06, k = ((_s2 = J.corrT) == null ? void 0 : _s2.val) ?? 4e-3, m = (Se, We, Et, oo) => {
        const So = Se - 2 * Et, Zo = 2 * We * Et + So * oo, wn = (We * Se ** 3 - (We - oo) * So ** 3) / 12, fl = (2 * Et * We ** 3 + So * oo ** 3) / 12, ul = (2 * We * Et ** 3 + So * oo ** 3) / 3;
        return {
          A: Zo,
          Iy: wn,
          Iz: fl,
          J: ul
        };
      }, u = m(S, $, y, f), E = m(h, I, L, z), C = R - 2 * k, N = R * R - C * C, G = (R ** 4 - C ** 4) / 12, x = 2 * k * (R - k) ** 2 * (R - k) / 2, w = u.A, v = u.Iz, P = u.Iy, K = u.J, U = E.A, le = E.Iz, te = E.Iy, Q = E.J, me = N, de = G, ke = G, Re = x, q = 3, ce = [], oe = [], pe = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), ge = [];
      for (let Se = 0; Se < q; Se++) ge.push(Se * o / (q - 1));
      const Ie = [];
      for (let Se = 0; Se < c; Se++) Ie.push(Se * n / (c - 1));
      const se = [];
      for (let Se = 0; Se < s; Se++) se.push(Se * n / (s - 1));
      for (const Se of Ie) se.some((We) => Math.abs(We - Se) < 1e-6) || se.push(Se);
      const we = se.sort((Se, We) => Se - We), Be = we.length, lt = (Se) => l + (a - l) * Se / n, et = [];
      for (let Se = 0; Se < q; Se++) {
        et[Se] = [];
        for (let We = 0; We < Be; We++) et[Se][We] = ce.length, ce.push([
          ge[Se],
          we[We],
          lt(we[We])
        ]);
      }
      const vt = [];
      for (let Se = 0; Se < q; Se++) {
        vt[Se] = [];
        for (let We = 0; We < c; We++) vt[Se][We] = ce.length, ce.push([
          ge[Se],
          Ie[We],
          0
        ]);
      }
      const Dt = [];
      for (let Se = 0; Se < c; Se++) Dt.push(we.findIndex((We) => Math.abs(We - Ie[Se]) < 1e-6));
      const yt = [];
      let Ct = 0;
      for (let Se = 0; Se < q; Se++) for (let We = 0; We < c; We++) oe.push([
        vt[Se][We],
        et[Se][Dt[We]]
      ]), yt.push("col"), Ct++;
      for (let Se = 0; Se < q; Se++) for (let We = 0; We < Be - 1; We++) oe.push([
        et[Se][We],
        et[Se][We + 1]
      ]), yt.push("vig"), Ct++;
      oe.length;
      for (let Se = 0; Se < Be; Se++) for (let We = 0; We < q - 1; We++) oe.push([
        et[We][Se],
        et[We + 1][Se]
      ]), yt.push("corr"), Ct++;
      oe.length;
      for (let Se = 0; Se < q - 1; Se++) for (let We = 0; We < Be - 1; We++) oe.push([
        et[Se][We],
        et[Se + 1][We],
        et[Se + 1][We + 1],
        et[Se][We + 1]
      ]), yt.push("shell");
      for (let Se = 0; Se < q; Se++) for (let We = 0; We < c; We++) pe.set(vt[Se][We], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let Se = 0; Se < q; Se++) for (let We = 0; We < Be; We++) {
        let Et;
        Se === 0 ? Et = (ge[1] - ge[0]) / 2 : Se === q - 1 ? Et = (ge[q - 1] - ge[q - 2]) / 2 : Et = (ge[Se + 1] - ge[Se - 1]) / 2;
        let oo;
        We === 0 ? oo = (we[1] - we[0]) / 2 : We === Be - 1 ? oo = (we[Be - 1] - we[Be - 2]) / 2 : oo = (we[We + 1] - we[We - 1]) / 2;
        const So = -r * Et * oo, Zo = et[Se][We], wn = ee.get(Zo) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        wn[2] += So, ee.set(Zo, wn);
      }
      e.nodes.val = ce, e.elements.val = oe, e.nodeInputs && (e.nodeInputs.val = {
        supports: pe,
        loads: ee
      });
      const go = /* @__PURE__ */ new Map(), Kt = /* @__PURE__ */ new Map(), jt = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map(), Ut = /* @__PURE__ */ new Map(), Rt = /* @__PURE__ */ new Map(), fo = /* @__PURE__ */ new Map(), ro = /* @__PURE__ */ new Map(), wo = /* @__PURE__ */ new Map(), Mn = t.rho;
      for (let Se = 0; Se < oe.length; Se++) {
        go.set(Se, i), $t.set(Se, g), Rt.set(Se, Mn);
        const We = yt[Se];
        if (We === "col") {
          Kt.set(Se, w), jt.set(Se, v), at.set(Se, P), Ut.set(Se, K);
          const Et = new Array(12).fill(false);
          Et[10] = true, Et[11] = true, wo.set(Se, Et);
        } else if (We === "vig") Kt.set(Se, U), jt.set(Se, le), at.set(Se, te), Ut.set(Se, Q);
        else if (We === "corr") {
          Kt.set(Se, me), jt.set(Se, de), at.set(Se, ke), Ut.set(Se, Re);
          const Et = new Array(12).fill(false);
          Et[4] = true, Et[5] = true, Et[10] = true, Et[11] = true, wo.set(Se, Et);
        } else We === "shell" && (fo.set(Se, d), ro.set(Se, p));
      }
      const Ko = {
        elasticities: go,
        areas: Kt,
        momentsOfInertiaZ: jt,
        momentsOfInertiaY: at,
        shearModuli: $t,
        torsionalConstants: Ut,
        densities: Rt,
        poissonsRatios: fo,
        thicknesses: ro,
        momentReleases: wo
      };
      e.elementInputs && (e.elementInputs.val = Ko);
      try {
        const Se = Ft(ce, oe, {
          supports: pe,
          loads: ee
        }, Ko);
        if (Se && e.deformOutputs) {
          e.deformOutputs.val = Se;
          const We = Eo(ce, oe, Ko, Se);
          e.analyzeOutputs && (e.analyzeOutputs.val = We);
          let Et = 0, oo = 0;
          Se.deformations.forEach((So, Zo) => {
            Math.abs(So[2]) > Math.abs(Et) && (Et = So[2], oo = Zo);
          }), console.log(`P\xE9rgola: Uz_max=${Et.toExponential(4)} m en nodo ${oo} | ${Ct} frames + ${s - 1} shells`);
        }
      } catch (Se) {
        console.warn("Pergola:", Se.message);
      }
      const un = tt();
      un && (un.settings.shellResults.val = "displacementZ"), setTimeout(() => It(), 50), st();
    }
    function sl() {
      var _a2, _b;
      (_a2 = document.getElementById("fem-log-panel")) == null ? void 0 : _a2.remove();
      const t = window.__femLog || [
        "<i>No hay log. Ejecuta un analisis primero.</i>"
      ], o = document.createElement("div");
      o.id = "fem-log-panel", o.style.cssText = "position:fixed;top:60px;right:10px;width:360px;max-height:500px;overflow-y:auto;background:var(--cad-bg);color:var(--cad-text);border:1px solid var(--cad-border);border-radius:8px;padding:10px;z-index:10001;font-family:'Segoe UI',system-ui,sans-serif;font-size:12px;line-height:1.6;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-size:14px;font-weight:bold;color:var(--cad-heading)">\u{1F4CB} Solver Log</span>
        <button id="fem-log-close" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);border-radius:3px;padding:2px 8px;cursor:pointer;font-size:11px;">\u2715</button>
      </div>
      <div style="font-family:'Segoe UI',system-ui,sans-serif;font-size:12px;line-height:1.7;">
        ${t.join("<br>")}
      </div>
    `, document.body.appendChild(o), (_b = o.querySelector("#fem-log-close")) == null ? void 0 : _b.addEventListener("click", () => o.remove());
    }
    function al() {
      var _a2, _b, _c;
      (_a2 = document.getElementById("pushover-panel")) == null ? void 0 : _a2.remove();
      const t = document.createElement("div");
      t.id = "pushover-panel", t.style.cssText = "position:fixed;top:60px;right:10px;width:420px;background:var(--cad-bg);color:var(--cad-text);border:1px solid var(--cad-border);border-radius:8px;padding:12px;z-index:10000;font-family:monospace;font-size:12px;box-shadow:0 4px 20px var(--cad-shadow);", t.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <b style="color:var(--cad-heading);font-size:14px;">Pushover Ciclico</b>
        <button id="pushover-close" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);border-radius:3px;padding:2px 8px;cursor:pointer;">X</button>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:8px;">
        <label>Col b (m): <input id="po-colB" type="number" value="0.30" step="0.05" min="0.15" max="0.60" style="width:60px;background:var(--cad-input-bg);color:var(--cad-input-text);border:1px solid var(--cad-input-border);"></label>
        <label>Col h (m): <input id="po-colH" type="number" value="0.30" step="0.05" min="0.15" max="0.60" style="width:60px;background:var(--cad-input-bg);color:var(--cad-input-text);border:1px solid var(--cad-input-border);"></label>
        <label>f'c (MPa): <input id="po-fc" type="number" value="30" step="5" min="15" max="60" style="width:60px;background:var(--cad-input-bg);color:var(--cad-input-text);border:1px solid var(--cad-input-border);"></label>
        <label>Fy (MPa): <input id="po-fy" type="number" value="420" step="10" min="250" max="700" style="width:60px;background:var(--cad-input-bg);color:var(--cad-input-text);border:1px solid var(--cad-input-border);"></label>
        <label>H col (m): <input id="po-H" type="number" value="1.30" step="0.1" min="0.5" max="4" style="width:60px;background:var(--cad-input-bg);color:var(--cad-input-text);border:1px solid var(--cad-input-border);"></label>
        <label>L viga (m): <input id="po-L" type="number" value="2.00" step="0.1" min="1" max="6" style="width:60px;background:var(--cad-input-bg);color:var(--cad-input-text);border:1px solid var(--cad-input-border);"></label>
        <label>As bar (cm2): <input id="po-As" type="number" value="2.0" step="0.5" min="0.5" max="8" style="width:60px;background:var(--cad-input-bg);color:var(--cad-input-text);border:1px solid var(--cad-input-border);"></label>
        <label>N barras: <input id="po-nbar" type="number" value="3" step="1" min="2" max="8" style="width:60px;background:var(--cad-input-bg);color:var(--cad-input-text);border:1px solid var(--cad-input-border);"></label>
        <label>Drift max (%): <input id="po-drift" type="number" value="5" step="0.5" min="1" max="10" style="width:60px;background:var(--cad-input-bg);color:var(--cad-input-text);border:1px solid var(--cad-input-border);"></label>
        <label>N ciclos: <input id="po-ncycles" type="number" value="3" step="1" min="1" max="6" style="width:60px;background:var(--cad-input-bg);color:var(--cad-input-text);border:1px solid var(--cad-input-border);"></label>
      </div>
      <button id="pushover-run" style="width:100%;padding:6px;background:var(--cad-heading);color:#000;border:none;border-radius:4px;cursor:pointer;font-weight:bold;font-size:13px;">RUN PUSHOVER</button>
      <div id="pushover-status" style="margin-top:6px;height:16px;font-size:11px;color:var(--cad-info);"></div>
      <canvas id="pushover-canvas" width="400" height="280" style="width:100%;margin-top:6px;background:#111;border:1px solid var(--cad-border);border-radius:4px;"></canvas>
    `, document.body.appendChild(t), (_b = t.querySelector("#pushover-close")) == null ? void 0 : _b.addEventListener("click", () => t.remove()), (_c = t.querySelector("#pushover-run")) == null ? void 0 : _c.addEventListener("click", async () => {
        const o = (h) => {
          var _a3;
          return parseFloat(((_a3 = t.querySelector(`#${h}`)) == null ? void 0 : _a3.value) || "0");
        }, n = o("po-colB"), l = o("po-colH"), a = o("po-fc") * 1e3, c = o("po-fy") * 1e3, s = o("po-H"), i = o("po-L"), p = o("po-As") * 1e-4, r = o("po-nbar"), d = o("po-drift") / 100, g = o("po-ncycles"), S = t.querySelector("#pushover-status");
        S.textContent = "Generando historia de desplazamientos...";
        const $ = [], y = d * s, f = 40;
        for (let h = 1; h <= g; h++) {
          const I = y * h / g;
          for (let L = 0; L <= f; L++) $.push(I * Math.sin(2 * Math.PI * L / f));
        }
        S.textContent = `Resolviendo pushover (${$.length} pasos)...`;
        try {
          const { cyclicPushover: h } = await cs(async () => {
            const { cyclicPushover: L } = await import("./cyclicPushoverCpp-Xwxa7wee.js").then(async (m) => {
              await m.__tla;
              return m;
            });
            return {
              cyclicPushover: L
            };
          }, __vite__mapDeps([8,5]), import.meta.url), I = await h({
            colHeight: s,
            beamLength: i,
            col: {
              b: n,
              h: l,
              fpc: -a,
              Fy_rebar: c,
              E_rebar: 2e8,
              rebar_area: p,
              cover: 0.04,
              n_rebar: r
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -a,
              Fy_rebar: c,
              E_rebar: 2e8,
              rebar_area: p * 0.7,
              cover: 0.03,
              n_rebar: r
            },
            dispHistory: $
          });
          S.textContent = `Completado: ${I.nSteps} pasos`, ll(t.querySelector("#pushover-canvas"), I.displacements, I.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${a / 1e3}MPa, Fy=${c / 1e3}MPa`);
        } catch (h) {
          S.textContent = `Error: ${h.message}`, console.error("Pushover failed:", h);
        }
      });
    }
    function ll(t, o, n, l) {
      const a = t.getContext("2d");
      if (!a || o.length === 0) return;
      const c = t.width, s = t.height, i = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, p = c - i.left - i.right, r = s - i.top - i.bottom;
      a.fillStyle = "#111118", a.fillRect(0, 0, c, s);
      let d = Math.min(...o), g = Math.max(...o), S = Math.min(...n), $ = Math.max(...n);
      d === g && (d -= 0.01, g += 0.01), S === $ && (S -= 1, $ += 1);
      const y = g - d, f = $ - S, h = (R) => i.left + (R - d) / y * p, I = (R) => i.top + r - (R - S) / f * r;
      a.strokeStyle = "#333", a.lineWidth = 0.5, d < 0 && g > 0 && (a.strokeStyle = "#555", a.beginPath(), a.moveTo(h(0), i.top), a.lineTo(h(0), i.top + r), a.stroke()), S < 0 && $ > 0 && (a.beginPath(), a.moveTo(i.left, I(0)), a.lineTo(i.left + p, I(0)), a.stroke()), a.strokeStyle = "#ff4444", a.lineWidth = 1.5, a.beginPath(), a.moveTo(h(o[0]), I(n[0]));
      for (let R = 1; R < o.length; R++) a.lineTo(h(o[R]), I(n[R]));
      a.stroke(), a.fillStyle = "#aaa", a.font = "11px monospace", a.textAlign = "center", a.fillText("Desplazamiento (m)", i.left + p / 2, s - 5), a.save(), a.translate(12, i.top + r / 2), a.rotate(-Math.PI / 2), a.fillText("Fuerza (kN)", 0, 0), a.restore(), a.fillStyle = "#ee9b00", a.font = "bold 11px monospace", a.textAlign = "center", a.fillText(l, c / 2, 15), a.fillStyle = "#888", a.font = "9px monospace", a.textAlign = "center";
      const L = y / 5;
      for (let R = 0; R <= 5; R++) {
        const k = d + L * R;
        a.fillText((k * 1e3).toFixed(1), h(k), s - i.bottom + 15);
      }
      a.textAlign = "right";
      const z = f / 5;
      for (let R = 0; R <= 5; R++) {
        const k = S + z * R;
        a.fillText(k.toFixed(0), i.left - 5, I(k) + 3);
      }
    }
    let dn = null;
    function il() {
      if (dn) {
        dn.remove(), dn = null;
        return;
      }
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff6600;border-radius:8px;padding:16px;z-index:10001;width:400px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);max-height:80vh;overflow-y:auto;", t.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <b style="color:#ff6600;font-size:14px;">\u{1F525} Nonlinear Analysis</b>
        <button id="nl-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:12px;">
        <b style="color:#ffcc00;">Steel02 Material Test</b>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px;">
          <label>Fy (kN/m\xB2):<input id="nl-fy" type="number" value="250000" style="width:80px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>E\u2080 (kN/m\xB2):<input id="nl-e0" type="number" value="200000000" style="width:80px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>b (ratio):<input id="nl-b" type="number" value="0.01" step="0.005" style="width:80px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>R\u2080:<input id="nl-r0" type="number" value="15" style="width:80px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>Amp (strain):<input id="nl-amp" type="number" value="0.02" step="0.005" style="width:80px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>Ciclos:<input id="nl-cycles" type="number" value="3" min="1" max="10" style="width:80px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>
        <button id="nl-test" style="margin-top:8px;padding:6px 16px;background:#ff6600;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;width:100%;">\u25B6 Run Steel02 Test</button>
      </div>
      <canvas id="nl-canvas" width="370" height="250" style="background:#0a0a1a;border:1px solid #333;border-radius:4px;width:100%;"></canvas>
      <div id="nl-info" style="margin-top:6px;color:#888;font-size:10px;"></div>
    `, document.body.appendChild(t), dn = t, t.querySelector("#nl-close").addEventListener("click", () => {
        t.remove(), dn = null;
      }), t.querySelector("#nl-test").addEventListener("click", () => rl(t));
    }
    function rl(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), a = parseFloat(t.querySelector("#nl-r0").value), c = parseFloat(t.querySelector("#nl-amp").value), s = parseInt(t.querySelector("#nl-cycles").value), i = 100, p = [];
      for (let U = 0; U < s; U++) {
        const le = c * (1 + U * 0.5);
        for (let te = 0; te < i; te++) {
          const Q = te / i * 2 * Math.PI;
          p.push(le * Math.sin(Q));
        }
      }
      const r = o / n, d = l * n;
      let g = 0, S = 0, $ = -r, y = r, f = 0, h = 0, I = 0, L = 0, z = 0, R = 0;
      const k = [];
      for (const U of p) {
        let le = $, te = y, Q = f, me = h, de = I, ke = L, Re = z, q = R, ce;
        const oe = U - g;
        if (Math.abs(oe) < 1e-20) {
          k.push(S);
          continue;
        }
        if ((q === 0 || q === 3) && (oe < 0 ? (q = 2, me = -r, de = -o, Q = me, ke = 0, Re = 0) : (q = 1, me = r, de = o, Q = me, ke = 0, Re = 0)), q === 2 && oe > 0) {
          q = 1, ke = g, Re = S, g < le && (le = g);
          const we = (te - le) / (2 * 1 * r), Be = 1 + 0 * Math.pow(we, 0.8);
          me = (o * Be - d * r * Be - Re + n * ke) / (n - d), de = o * Be + d * (me - r * Be), Q = te;
        } else if (q === 1 && oe < 0) {
          q = 2, ke = g, Re = S, g > te && (te = g);
          const we = (te - le) / (2 * 1 * r), Be = 1 + 0 * Math.pow(we, 0.8);
          me = (-o * Be + d * r * Be - Re + n * ke) / (n - d), de = -o * Be + d * (me + r * Be), Q = le;
        }
        const pe = Math.abs((Q - me) / r);
        let ee = a - 0.925 * pe / (0.15 + pe);
        ee < 0.1 && (ee = 0.1);
        const ge = (U - ke) / (me - ke), Ie = 1 + Math.pow(Math.abs(ge), ee), se = Math.pow(Ie, 1 / ee);
        ce = l * ge + (1 - l) * ge / se, ce = ce * (de - Re) + Re, k.push(ce), g = U, S = ce, $ = le, y = te, f = Q, h = me, I = de, L = ke, z = Re, R = q;
      }
      const m = t.querySelector("#nl-canvas"), u = m.getContext("2d"), E = m.width, C = m.height;
      u.clearRect(0, 0, E, C);
      const N = Math.max(...p.map(Math.abs)), G = Math.max(...k.map(Math.abs)), x = (E - 40) / (2 * N), w = (C - 40) / (2 * G), v = E / 2, P = C / 2;
      u.strokeStyle = "#444", u.lineWidth = 1, u.beginPath(), u.moveTo(20, P), u.lineTo(E - 20, P), u.stroke(), u.beginPath(), u.moveTo(v, 20), u.lineTo(v, C - 20), u.stroke(), u.fillStyle = "#888", u.font = "10px monospace", u.textAlign = "center", u.fillText("\u03B5 (strain)", E - 40, P - 5), u.fillText("\u03C3 (stress)", v + 30, 15), u.fillText(`\xB1${(N * 100).toFixed(1)}%`, E - 30, P + 12), u.fillText(`\xB1${(G / 1e3).toFixed(0)} MPa`, v + 40, 30), u.strokeStyle = "#00ccff", u.lineWidth = 1.5, u.beginPath();
      for (let U = 0; U < p.length; U++) {
        const le = v + p[U] * x, te = P - k[U] * w;
        U === 0 ? u.moveTo(le, te) : u.lineTo(le, te);
      }
      u.stroke(), u.strokeStyle = "#ff333366", u.lineWidth = 1, u.setLineDash([
        4,
        4
      ]), u.beginPath(), u.moveTo(20, P - o * w), u.lineTo(E - 20, P - o * w), u.stroke(), u.beginPath(), u.moveTo(20, P + o * w), u.lineTo(E - 20, P + o * w), u.stroke(), u.setLineDash([]), u.fillStyle = "#ff6666", u.font = "9px monospace", u.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, E - 50, P - o * w - 5);
      const K = t.querySelector("#nl-info");
      K.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${a} \u2014 ${s} ciclos, amp=${(c * 100).toFixed(1)}%`;
    }
    function cl() {
      var _a2, _b, _c, _d;
      const t = document.querySelector(".rpt-overlay");
      if (t) {
        t.remove();
        return;
      }
      const o = e.nodes.val, n = e.elements.val, l = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, a = ((_b = e.nodeInputs) == null ? void 0 : _b.val) || {}, c = (_c = e.deformOutputs) == null ? void 0 : _c.val;
      if ((_d = e.analyzeOutputs) == null ? void 0 : _d.val, !o.length || !n.length) {
        alert("No hay modelo cargado");
        return;
      }
      const s = Rl({
        nodes: o,
        elements: n,
        nodeInputs: a,
        elementInputs: l,
        deformOutputs: c
      });
      document.body.appendChild(s);
    }
    let Xo = null;
    function dl(t) {
      Xo && Xo.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = Tn(), l = zn(), a = Object.entries(n).map(([r, d]) => `<option value="${d}">${r}</option>`).join(""), c = Object.entries(l).map(([r, d]) => `<option value="${d}">${r}</option>`).join("");
      o.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <b style="color:#00ccff;">${A("Asignar secci\xF3n")} (${t.length} elem.)</b>
        <button id="asgn-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <label>Tipo:</label>
        <select id="asgn-type" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;margin-top:2px;">
          <option value="rect">${A("Rectangular")} (b\xD7h)</option>
          <option value="circ">${A("Circular")} (d)</option>
          <option value="W">${A("Perfil")} W</option>
          <option value="HSS">${A("Perfil")} HSS</option>
          <option value="I-param">I ${A("Param\xE9trica")}</option>
          <option value="tubular">${A("Tubular Hueca")}</option>
          <option value="CFT">CFT (${A("Tubo relleno concreto")})</option>
        </select>
      </div>
      <div id="asgn-params" style="margin-bottom:10px;"></div>

      <div style="border-top:1px solid #444;padding-top:8px;margin-bottom:8px;">
        <b style="color:#ff6666;font-size:11px;">Frame Releases</b>
        <table style="width:100%;border-collapse:collapse;font-size:10px;margin-top:4px;">
          <tr>
            <td style="color:#888"></td>
            <td colspan="2" style="text-align:center;color:#ff6666;font-weight:bold;font-size:9px">Release</td>
            <td colspan="2" style="text-align:center;color:#00ccff;font-weight:bold;font-size:9px">Partial Fixity Springs</td>
          </tr>
          <tr>
            <td style="color:#888"></td>
            <td style="text-align:center;color:#aaa;font-size:9px">Start</td>
            <td style="text-align:center;color:#aaa;font-size:9px">End</td>
            <td style="text-align:center;color:#aaa;font-size:9px">Start</td>
            <td style="text-align:center;color:#aaa;font-size:9px">End</td>
          </tr>
          <tr><td style="color:#ccc">Axial Load</td><td style="text-align:center"><input type="checkbox" data-asgn-rel="0"></td><td style="text-align:center"><input type="checkbox" data-asgn-rel="6"></td><td><input type="number" data-asgn-spr="0" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td><td><input type="number" data-asgn-spr="6" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td></tr>
          <tr><td style="color:#ccc">Shear V2</td><td style="text-align:center"><input type="checkbox" data-asgn-rel="1"></td><td style="text-align:center"><input type="checkbox" data-asgn-rel="7"></td><td><input type="number" data-asgn-spr="1" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td><td><input type="number" data-asgn-spr="7" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td></tr>
          <tr><td style="color:#ccc">Shear V3</td><td style="text-align:center"><input type="checkbox" data-asgn-rel="2"></td><td style="text-align:center"><input type="checkbox" data-asgn-rel="8"></td><td><input type="number" data-asgn-spr="2" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td><td><input type="number" data-asgn-spr="8" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td></tr>
          <tr><td style="color:#ccc">Torsion</td><td style="text-align:center"><input type="checkbox" data-asgn-rel="3"></td><td style="text-align:center"><input type="checkbox" data-asgn-rel="9"></td><td><input type="number" data-asgn-spr="3" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td><td><input type="number" data-asgn-spr="9" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td></tr>
          <tr><td style="color:#ccc">Moment 22</td><td style="text-align:center"><input type="checkbox" data-asgn-rel="4"></td><td style="text-align:center"><input type="checkbox" data-asgn-rel="10"></td><td><input type="number" data-asgn-spr="4" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td><td><input type="number" data-asgn-spr="10" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td></tr>
          <tr><td style="color:#ccc">Moment 33</td><td style="text-align:center"><input type="checkbox" data-asgn-rel="5"></td><td style="text-align:center"><input type="checkbox" data-asgn-rel="11"></td><td><input type="number" data-asgn-spr="5" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td><td><input type="number" data-asgn-spr="11" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td></tr>
        </table>
        <div style="color:#888;font-size:9px;margin-top:2px;">Release = condensaci\xF3n est\xE1tica (DOF libre). Spring = conexi\xF3n semi-r\xEDgida.</div>
      </div>

      <div style="border-top:1px solid #444;padding-top:8px;margin-bottom:10px;">
        <b style="color:#33ff33;font-size:11px;">Property/Stiffness Modification Factors</b>
        <div style="margin-top:6px;font-size:11px;">
          <div style="display:grid;grid-template-columns:160px 60px;gap:2px 8px;align-items:center;">
            <span style="color:#aaa">Cross-section (axial) Area</span>
            <input id="asgn-mod-a" type="number" value="1.0" step="0.1" min="0" max="2" style="width:55px;background:#333;color:#fff;border:1px solid #555;padding:2px;text-align:center;">
            <span style="color:#aaa">Shear Area dir 2 <span style="color:#666;font-size:9px">(Vy)</span></span>
            <input id="asgn-mod-as2" type="number" value="1.0" step="0.1" min="0" max="2" style="width:55px;background:#333;color:#fff;border:1px solid #555;padding:2px;text-align:center;">
            <span style="color:#aaa">Shear Area dir 3 <span style="color:#666;font-size:9px">(Vz)</span></span>
            <input id="asgn-mod-as3" type="number" value="1.0" step="0.1" min="0" max="2" style="width:55px;background:#333;color:#fff;border:1px solid #555;padding:2px;text-align:center;">
            <span style="color:#aaa">Torsional Constant</span>
            <input id="asgn-mod-j" type="number" value="1.0" step="0.1" min="0" max="2" style="width:55px;background:#333;color:#fff;border:1px solid #555;padding:2px;text-align:center;">
            <span style="color:#aaa">Moment of Inertia 2</span>
            <input id="asgn-mod-i" type="number" value="1.0" step="0.05" min="0" max="2" style="width:55px;background:#333;color:#fff;border:1px solid #555;padding:2px;text-align:center;">
            <span style="color:#aaa">Moment of Inertia 3</span>
            <input id="asgn-mod-i3" type="number" value="1.0" step="0.05" min="0" max="2" style="width:55px;background:#333;color:#fff;border:1px solid #555;padding:2px;text-align:center;">
            <span style="color:#aaa">Mass</span>
            <input id="asgn-mod-mass" type="number" value="1.0" step="0.1" min="0" max="2" style="width:55px;background:#333;color:#fff;border:1px solid #555;padding:2px;text-align:center;">
            <span style="color:#aaa">Weight</span>
            <input id="asgn-mod-weight" type="number" value="1.0" step="0.1" min="0" max="2" style="width:55px;background:#333;color:#fff;border:1px solid #555;padding:2px;text-align:center;">
          </div>
        </div>
        <div style="color:#888;font-size:9px;margin-top:4px;line-height:1.4;">
          1.0 = sin cambio &nbsp;|&nbsp; 0.35 = seccion agrietada (ACI 318)<br>
          <span style="color:#ffaa00">Shear Area:</span> 1 = <b>Timoshenko</b> (incluye corte) &nbsp;|&nbsp; 0 = <b>Euler-Bernoulli</b> (ignora corte)
        </div>
      </div>

      <div style="display:flex;gap:8px;">
        <button id="asgn-apply" style="flex:1;padding:8px;background:#00aa66;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u2713 Aplicar</button>
        <button id="asgn-remove" style="flex:1;padding:8px;background:#996600;color:#fff;border:none;border-radius:4px;cursor:pointer;">\u21BA Quitar Override</button>
      </div>
    `, document.body.appendChild(o), Xo = o;
      const s = o.querySelector("#asgn-type"), i = o.querySelector("#asgn-params");
      function p() {
        const r = s.value;
        let d = "";
        r === "rect" ? d = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : r === "circ" ? d = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : r === "W" ? d = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${a}</select>` : r === "HSS" ? d = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${c}</select>` : r === "I-param" ? d = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <label>bf(m):<input id="ap-bf" type="number" value="0.20" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hf" type="number" value="0.40" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tf(m):<input id="ap-tf" type="number" value="0.015" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tw(m):<input id="ap-tw" type="number" value="0.010" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>` : r === "tubular" && (d = `<div style="display:flex;gap:6px;">
          <label>b(m):<input id="ap-bc" type="number" value="0.20" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hc" type="number" value="0.30" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>t(m):<input id="ap-t" type="number" value="0.008" step="0.001" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>`), i.innerHTML = d;
      }
      s.addEventListener("change", p), p(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), Xo = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h;
        const r = s.value, d = {
          secType: r
        };
        r === "rect" ? (d.b = parseFloat(o.querySelector("#ap-b").value), d.h = parseFloat(o.querySelector("#ap-h").value), d.material = 0) : r === "circ" ? (d.b = parseFloat(o.querySelector("#ap-d").value), d.material = 0) : r === "W" || r === "HSS" ? (d.profileIdx = parseInt(o.querySelector("#ap-profile").value), d.material = 1) : r === "I-param" ? (d.bf = parseFloat(o.querySelector("#ap-bf").value), d.hf = parseFloat(o.querySelector("#ap-hf").value), d.tf = parseFloat(o.querySelector("#ap-tf").value), d.tw = parseFloat(o.querySelector("#ap-tw").value), d.material = 1) : r === "tubular" && (d.bc = parseFloat(o.querySelector("#ap-bc").value), d.hc = parseFloat(o.querySelector("#ap-hc").value), d.t = parseFloat(o.querySelector("#ap-t").value), d.material = 1);
        const g = new Array(12).fill(false), S = new Array(12).fill(0);
        o.querySelectorAll("input[data-asgn-rel]").forEach(($) => {
          g[parseInt($.dataset.asgnRel)] = $.checked;
        }), o.querySelectorAll("input[data-asgn-spr]").forEach(($) => {
          const y = parseFloat($.value);
          y > 0 && (S[parseInt($.dataset.asgnSpr)] = y);
        }), d.releases12 = g, d.springs12 = S, d.releaseRotStart = g[4] || g[5], d.releaseRotEnd = g[10] || g[11], d.releaseAxial = g[0], d.releaseTorsion = g[3], d.modI = parseFloat((_a2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _a2.value) || 1, d.modA = parseFloat((_b = o.querySelector("#asgn-mod-a")) == null ? void 0 : _b.value) || 1, d.modJ = parseFloat((_c = o.querySelector("#asgn-mod-j")) == null ? void 0 : _c.value) || 1, d.modAs2 = parseFloat((_d = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _d.value) ?? 1, d.modAs3 = parseFloat((_e2 = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _e2.value) ?? 1, d.modI3 = parseFloat((_f = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _f.value) || 1, d.modMass = parseFloat((_g = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _g.value) || 1, d.modWeight = parseFloat((_h = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _h.value) || 1, t.forEach(($) => he.set($, {
          ...d
        })), o.remove(), Xo = null, To(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((r) => he.delete(r)), o.remove(), Xo = null, To(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let Uo = null;
    function pl(t) {
      var _a2, _b, _c;
      Uo && Uo.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], a = o[n[1]], c = Math.abs(a[0] - l[0]), s = Math.abs(a[1] - l[1]), i = Math.abs(a[2] - l[2]), p = s > c && s > i, r = Math.sqrt(c * c + s * s + i * i), d = Me.get(t) ?? 0, g = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), S = (g == null ? void 0 : g.name) || (g ? `${g.type} ${((g.b ?? 0) * 100).toFixed(0)}x${((g.h ?? 0) * 100).toFixed(0)}` : "\u2014"), $ = document.createElement("div");
      $.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", $.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">${A("Elemento")} ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">${A("Tipo")}:</span> ${p ? A("Columna") : A("Viga")} &nbsp;
        <span style="color:#888;">${A("Piso")}:</span> ${d + 1} &nbsp;
        <span style="color:#888;">L:</span> ${r.toFixed(3)} m
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">${A("Secci\xF3n")}:</span> <span style="color:#00ccff;">${S}</span>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">${A("Nodos")}:</span> ${n[0]} \u2192 ${n[1]}
      </div>
      <hr style="border-color:#333;margin:12px 0;">
      <div style="display:flex;gap:8px;">
        <button id="ep-delete" style="flex:1;padding:8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">${A("Eliminar")}</button>
        <button id="ep-inspect" style="flex:1;padding:8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F50D} Inspect</button>
      </div>
    `, document.body.appendChild($), Uo = $, $.querySelector("#ep-close").addEventListener("click", () => {
        $.remove(), Uo = null, _o();
      }), $.querySelector("#ep-delete").addEventListener("click", () => {
        Z.add(t), $.remove(), Uo = null, _o(), Ne();
      }), $.querySelector("#ep-inspect").addEventListener("click", () => {
        $.remove(), Uo = null, Qs(t);
      });
    }
    setTimeout(() => {
      const t = document.getElementById("viewer");
      if (!t) return;
      const o = t.querySelector("canvas");
      if (!o) return;
      let n = null, l = null;
      const a = 5;
      function c(p) {
        const r = tt();
        if (!r) return null;
        const d = r.controls.object, g = new qe(p[0], p[1], p[2]);
        g.project(d);
        const S = o.getBoundingClientRect();
        return {
          x: (g.x + 1) / 2 * S.width,
          y: (-g.y + 1) / 2 * S.height
        };
      }
      function s(p, r, d, g, S) {
        const $ = Math.min(p, d), y = Math.max(p, d), f = Math.min(r, g), h = Math.max(r, g), I = e.nodes.val, L = e.elements.val, z = [];
        for (let R = 0; R < L.length; R++) {
          const k = L[R], m = k.map((u) => c(I[u])).filter(Boolean);
          if (m.length !== 0) if (S) m.every((E) => E.x >= $ && E.x <= y && E.y >= f && E.y <= h) && z.push(R);
          else {
            if (m.some((E) => E.x >= $ && E.x <= y && E.y >= f && E.y <= h)) {
              z.push(R);
              continue;
            }
            if (k.length === 2) {
              const E = m[0], C = m[1];
              i(E.x, E.y, C.x, C.y, $, f, y, h) && z.push(R);
            }
          }
        }
        return z;
      }
      function i(p, r, d, g, S, $, y, f) {
        const h = (L, z) => L >= S && L <= y && z >= $ && z <= f;
        if (h(p, r) || h(d, g)) return true;
        const I = (L, z, R, k, m, u, E, C) => {
          const N = (R - L) * (C - u) - (k - z) * (E - m);
          if (Math.abs(N) < 1e-10) return false;
          const G = ((m - L) * (C - u) - (u - z) * (E - m)) / N, x = ((m - L) * (k - z) - (u - z) * (R - L)) / N;
          return G >= 0 && G <= 1 && x >= 0 && x <= 1;
        };
        return I(p, r, d, g, S, $, y, $) || I(p, r, d, g, y, $, y, f) || I(p, r, d, g, S, f, y, f) || I(p, r, d, g, S, $, S, f);
      }
      o.addEventListener("mousedown", (p) => {
        eo && (n = {
          x: p.offsetX,
          y: p.offsetY
        });
      }), o.addEventListener("mousemove", (p) => {
        if (yo) {
          const d = tt();
          if (!d) return;
          const g = Vs(p.clientX, p.clientY, d.camera, d.rendererElm);
          if (Lt.track && g.snapType === "node" && g.nodeIdx !== null && g.nodeIdx !== qo && Va(g.nodeIdx), Lt.track && qo !== null && g.worldPos && g.snapType !== "node") {
            const S = Xa(g.worldPos, qo);
            S && (g.worldPos = S, g.snapType = "grid");
          }
          if (qo !== null && g.worldPos) {
            const S = e.nodes.val[qo];
            S && Js(p.clientX, p.clientY, new qe(...S), g.worldPos);
          } else if (kt !== null && g.worldPos) {
            const S = e.nodes.val[kt];
            S && Js(p.clientX, p.clientY, new qe(...S), g.worldPos);
          } else io && (io.remove(), io = null);
          g.nodeIdx, Xs(g), o.style.cursor = g.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!po && !eo) return;
        if (eo && n) {
          const d = p.offsetX - n.x, g = p.offsetY - n.y;
          if (Math.abs(d) > a || Math.abs(g) > a) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const S = d > 0, $ = Math.min(n.x, p.offsetX), y = Math.min(n.y, p.offsetY), f = Math.abs(d), h = Math.abs(g);
            l.style.left = $ + "px", l.style.top = y + "px", l.style.width = f + "px", l.style.height = h + "px", l.style.border = S ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = S ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const r = ss(p);
        if (r >= 0) Ks(r), o.style.cursor = "pointer";
        else {
          if (to) {
            const d = tt();
            d == null ? void 0 : d.scene.remove(to), to = null, d == null ? void 0 : d.render();
          }
          o.style.cursor = eo ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (p) => {
        if (eo && n) {
          const r = p.offsetX - n.x, d = p.offsetY - n.y;
          if (Math.abs(r) > a || Math.abs(d) > a) {
            const g = r > 0, S = s(n.x, n.y, p.offsetX, p.offsetY, g);
            p.ctrlKey || p.metaKey || (wt.clear(), Co()), S.forEach((y) => {
              wt.has(y) || (wt.add(y), ts(y));
            }), Fo();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (p) => {
        if (yo) {
          const r = tt();
          if (!r) return;
          const d = Vs(p.clientX, p.clientY, r.camera, r.rendererElm);
          (d.worldPos || d.nodeIdx !== null) && (Ka(d), Xs(d));
          return;
        }
        if (eo) {
          if (l) return;
          const r = ss(p), d = p.ctrlKey || p.metaKey;
          if (r >= 0) {
            if (d) if (wt.has(r)) {
              wt.delete(r);
              const g = Lo.findIndex((S) => S.__elemIdx === r);
              if (g >= 0) {
                const S = tt();
                S == null ? void 0 : S.scene.remove(Lo[g]), Lo[g].geometry.dispose(), Lo[g].material.dispose(), Lo.splice(g, 1), S == null ? void 0 : S.render();
              }
            } else wt.add(r), ts(r);
            else wt.clear(), Co(), wt.add(r), ts(r);
            Fo();
          } else d || (wt.clear(), Co(), Fo());
          return;
        }
        if (po) {
          const r = ss(p);
          r >= 0 && (Ks(r), pl(r));
        }
      });
    }, 500), on.derive(() => {
      var _a2;
      e.nodes.val, e.elements.val, (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, st();
    }), ot.modal = (t) => {
      var _a2, _b;
      if (t === void 0 && (t = !De), De = t, (_a2 = Le.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", De), De) {
        const n = tt();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (He = n.settings.loads.rawVal, n.settings.loads.val = false), Gn(), Le.querySelector("#cad3d-mode-prev").style.display = "", Le.querySelector("#cad3d-mode-next").style.display = "", Le.querySelector("#cad3d-mode-label").style.display = "";
      } else Yn(), Le.querySelector("#cad3d-mode-prev").style.display = "none", Le.querySelector("#cad3d-mode-next").style.display = "none", Le.querySelector("#cad3d-mode-label").style.display = "none", T && T !== "placa-q4" && T !== "placa-3q" && Ne(), setTimeout(() => {
        var _a3;
        const n = tt();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && He && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${De ? "ON" : "OFF"}`);
    }, ot.setMode = (t) => {
      var _a2;
      if (!(Fe == null ? void 0 : Fe.modeShapes)) {
        console.error("No modal results");
        return;
      }
      xe = Math.max(0, Math.min(t, Fe.modeShapes.length - 1));
      const o = Fe.modeShapes[xe], { extent: n } = zo();
      let l = 0;
      for (let c = 0; c < ze.length; c++) {
        const s = o[c * 6] || 0, i = o[c * 6 + 1] || 0, p = o[c * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(s * s + i * i + p * p));
      }
      Ve = l > 1e-12 ? n * 0.05 / l : 1, cn();
      const a = Le.querySelector("#cad3d-mode-label");
      a && Fe.frequencies && (a.textContent = `Modo ${xe + 1} \u2014 ${Fe.frequencies[xe].toFixed(2)} Hz`), console.log(`Modo ${xe + 1}: f = ${(_a2 = Fe.frequencies) == null ? void 0 : _a2[xe].toFixed(4)} Hz`);
    }, window.cad = ot, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(Le), document.body.appendChild(ft.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (nt("muro-q4"), rs(), js("muro-q4"), setTimeout(() => {
        T === "muro-q4" && mo();
      }, 200));
    }, 100);
    const pn = document.createElement("button");
    pn.id = "mobile-menu-btn", pn.innerHTML = "\u2630", pn.addEventListener("click", () => {
      const t = document.getElementById("cad3d-panel");
      t && (t.classList.toggle("mobile-open"), pn.innerHTML = t.classList.contains("mobile-open") ? "\u2715" : "\u2630");
    }), document.body.appendChild(pn);
    const Xt = document.createElement("div");
    Xt.style.cssText = "position:fixed; bottom:20px; right:20px; z-index:10000; display:flex; gap:8px; touch-action:none; cursor:grab;";
    const da = localStorage.getItem("hk_float_pos");
    if (da) try {
      const { x: t, y: o } = JSON.parse(da);
      Xt.style.left = t + "px", Xt.style.top = o + "px", Xt.style.right = "auto", Xt.style.bottom = "auto";
    } catch {
    }
    let $n = false, pa = 0, fa = 0, ua = 0, ma = 0;
    const ga = 5;
    let fn = false;
    const ba = (t, o) => {
      $n = true, fn = false, pa = t, fa = o;
      const n = Xt.getBoundingClientRect();
      ua = n.left, ma = n.top, Xt.style.cursor = "grabbing";
    }, ha = (t, o) => {
      if (!$n) return;
      const n = t - pa, l = o - fa;
      (Math.abs(n) > ga || Math.abs(l) > ga) && (fn = true), fn && (Xt.style.left = ua + n + "px", Xt.style.top = ma + l + "px", Xt.style.right = "auto", Xt.style.bottom = "auto");
    }, xa = () => {
      if ($n = false, Xt.style.cursor = "grab", fn) {
        const t = Xt.getBoundingClientRect();
        localStorage.setItem("hk_float_pos", JSON.stringify({
          x: t.left,
          y: t.top
        }));
      }
    };
    Xt.addEventListener("mousedown", (t) => {
      ba(t.clientX, t.clientY), t.preventDefault();
    }), document.addEventListener("mousemove", (t) => ha(t.clientX, t.clientY)), document.addEventListener("mouseup", () => xa()), Xt.addEventListener("touchstart", (t) => {
      const o = t.touches[0];
      ba(o.clientX, o.clientY);
    }, {
      passive: true
    }), document.addEventListener("touchmove", (t) => {
      if ($n) {
        const o = t.touches[0];
        ha(o.clientX, o.clientY);
      }
    }), document.addEventListener("touchend", () => xa());
    const Mo = document.createElement("button");
    Mo.id = "fullscreen-btn", Mo.innerHTML = "\u26F6", Mo.title = "Pantalla completa", Mo.style.cssText = `
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #333, #555);
    color: white; border: 3px solid rgba(255,255,255,0.2);
    font-size: 22px; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex; align-items: center; justify-content: center;
  `, Mo.addEventListener("mouseenter", () => {
      Mo.style.transform = "scale(1.15)";
    }), Mo.addEventListener("mouseleave", () => {
      Mo.style.transform = "scale(1)";
    }), Mo.addEventListener("click", () => {
      fn || (document.fullscreenElement ? document.exitFullscreen().catch(() => {
      }) : document.documentElement.requestFullscreen().catch(() => {
      }));
    }), Xt.appendChild(Mo), Xt.appendChild(Yl()), document.body.appendChild(Xt);
    const va = document.createElement("span");
    return va.style.display = "none", va;
  };
});
export {
  __tla,
  ka as a,
  Pl as c,
  Mi as g
};
