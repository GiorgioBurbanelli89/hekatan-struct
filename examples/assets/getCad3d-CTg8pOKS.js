const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./calcPanel-BcV0bfdm.js","./getMesh-B1dmlgUt.js","./__vite-browser-external-D7Ct-6yo.js","./pureFunctionsAny.generated-JAcEVsJ7.js","./analyze-ClLKGn9k.js","./didacticCpp-BGUxSkhs.js","./tutorialPanel-6s7xqDFI.js","./i18n-CT48TDFp.js","./cyclicPushoverCpp-Xwxa7wee.js"])))=>i.map(i=>d[i]);
import { d as Rt, _ as gs, p as bs, m as $l, s as Ml, __tla as __tla_0 } from "./didacticCpp-BGUxSkhs.js";
import { v as sn, P as hn, g as wl, a as El, o as Sl } from "./theme-CzzIlc4y.js";
import { G as vn, b as Il, M as Ia, D as ka, B as ro, c as Pn, d as kl, C as Tl, e as Ra, V as qe, P as Ro, R as Ta, f as za, g as tn, h as on, i as zl, S as Al, j as Ll, F as Ho, a as nn, L as jo, k as Cl, l as Fl, A as kn, T as hs, m as Tn, n as zn, o as Rl, p as Pl } from "./Text-CBH-tcJP.js";
import { g as On, b as Nn, a as Eo } from "./analyze-ClLKGn9k.js";
import { g as Io, __tla as __tla_1 } from "./getMesh-B1dmlgUt.js";
import { t as z, s as Ol, u as Nl } from "./i18n-CT48TDFp.js";
import { n as Yo, s as ko, m as uo, t as Es } from "./pureFunctionsAny.generated-JAcEVsJ7.js";
let Fa, Bl, zi;
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
  const ws = [
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
  ], an = [
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
  function ql(e, b) {
    return e === "kN" && b === "m" ? "kPa" : e === "kN" && b === "mm" || e === "N" && b === "mm" ? "MPa" : e === "N" && b === "m" ? "Pa" : e === "kip" && b === "in" ? "ksi" : e === "kip" && b === "ft" ? "ksf" : `${e}/${b}\xB2`;
  }
  const Wo = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function Go(e, b) {
    const N = ws.find((G) => G.id === e), w = an.find((G) => G.id === b), U = N.toKN, j = w.toM, Z = (G, he, T) => T / (Math.pow(U, G) * Math.pow(j, he));
    let V, W;
    switch (e) {
      case "kN":
        V = 10, W = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        V = 1, W = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        V = 1e3, W = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        V = 10, W = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        V = 5e3, W = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        V = 1e4, W = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${e}-${b}`,
      label: `${N.label}, ${w.label}`,
      force: N.label,
      length: w.label,
      stress: ql(e, b),
      moment: `${N.label}\xB7${w.label}`,
      E: Z(1, -2, Wo.E),
      G: Z(1, -2, Wo.G),
      A: Z(0, 2, Wo.A),
      Iz: Z(0, 4, Wo.Iz),
      Iy: Z(0, 4, Wo.Iy),
      J: Z(0, 4, Wo.J),
      rho: Z(1, -4, Wo.rho),
      spanRange: w.spanRange,
      heightRange: w.heightRange,
      defaultSpan: w.defaultSpan,
      defaultHeight: w.defaultHeight,
      defaultForce: V,
      forceRange: W,
      galponSpan: w.galponSpan,
      galponLength: w.galponLength,
      galponHeight: w.galponHeight,
      galponRise: w.galponRise
    };
  }
  Go("kN", "m"), Go("kip", "in");
  function An() {
    return {
      truss: [
        {
          label: z("Empotrado"),
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
          label: z("Articulado"),
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
          label: z("Roller Z"),
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
          label: z("Empotrado"),
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
          label: z("Articulado"),
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
          label: z("Empotrado"),
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
          label: z("Articulado"),
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
          label: z("Empotrado"),
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
          label: z("Articulado"),
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
          label: z("Empotrado"),
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
          label: z("Articulado"),
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
          label: z("Empotrado"),
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
          label: z("Articulado"),
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
          label: z("Emp-Libre"),
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
          label: z("Emp-Emp"),
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
          label: z("Emp-Art"),
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
          label: z("Simply Supported"),
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
          label: z("Empotrado"),
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
          label: z("Simply Supported"),
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
          label: z("Empotrado"),
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
          label: z("Simply Supported"),
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
          label: z("Empotrado"),
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
          label: z("Pin (w=0)"),
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
          label: z("Empotrado"),
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
          label: z("Empotrado"),
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
          label: z("Articulado"),
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
          label: z("Rankine (Ka)"),
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
          label: z("Suelo continuo"),
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
          label: z("Interfaz"),
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
          label: z("Presion agua"),
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
          label: z("Winkler (k)"),
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
          label: z("Simplemente apoyado"),
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
          label: z("Empotrado"),
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
          label: z("Pernos empotrados"),
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
          label: z("Empotrado"),
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
          label: z("Empotrado"),
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
          label: z("Empotrado"),
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
          label: z("Empotrado"),
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
          label: z("Empotrado"),
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
          label: z("Empotrado"),
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
          label: z("Empotrado"),
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
          label: z("Empotrado"),
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
  function _l(e) {
    return {
      truss: [
        {
          key: "span",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `${z("Luz")} (${e.length})`
        },
        {
          key: "divisions",
          val: 5,
          min: 2,
          max: 20,
          step: 1,
          label: z("Divisiones")
        },
        {
          key: "height",
          val: e.defaultHeight * 0.5,
          min: e.heightRange[0] * 0.3,
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `${z("Altura")} (${e.length})`
        }
      ],
      beams: [
        {
          key: "width",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `${z("Luz")} (${e.length})`
        },
        {
          key: "height",
          val: e.defaultHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `${z("Altura")} (${e.length})`
        },
        {
          key: "nSub",
          val: 4,
          min: 1,
          max: 10,
          step: 1,
          label: z("Discretizaci\xF3n")
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
          label: z("Pisos")
        },
        {
          key: "nSub",
          val: 3,
          min: 1,
          max: 8,
          step: 1,
          label: z("Discretizaci\xF3n")
        }
      ],
      frame: [
        {
          key: "nVanos",
          val: 3,
          min: 1,
          max: 10,
          step: 1,
          label: z("N. Vanos")
        },
        {
          key: "spanV",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `${z("Luz vano")} (${e.length})`
        },
        {
          key: "nPisos",
          val: 3,
          min: 1,
          max: 20,
          step: 1,
          label: z("N. Pisos")
        },
        {
          key: "hPiso",
          val: e.defaultHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `${z("h piso")} (${e.length})`
        }
      ],
      edificio: [
        {
          key: "nVanosX",
          val: 2,
          min: 1,
          max: 8,
          step: 1,
          label: z("Vanos X")
        },
        {
          key: "nVanosY",
          val: 2,
          min: 1,
          max: 8,
          step: 1,
          label: z("Vanos Y")
        },
        {
          key: "nPisos",
          val: 3,
          min: 1,
          max: 20,
          step: 1,
          label: z("N. Pisos")
        },
        {
          key: "hPiso",
          val: e.defaultHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `${z("h piso")} (${e.length})`
        },
        {
          key: "nSubViga",
          val: 1,
          min: 1,
          max: 8,
          step: 1,
          label: z("Div. Vigas")
        },
        {
          key: "nSubCol",
          val: 1,
          min: 1,
          max: 8,
          step: 1,
          label: z("Div. Columnas")
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
          label: `${z("Luz")} (${e.length})`
        },
        {
          key: "length",
          val: e.galponLength,
          min: e.spanRange[0],
          max: e.spanRange[1] * 4,
          step: e.spanRange[2],
          label: `${z("Largo")} (${e.length})`
        },
        {
          key: "height",
          val: e.galponHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `${z("Altura col")} (${e.length})`
        },
        {
          key: "archRise",
          val: e.galponRise,
          min: e.heightRange[2],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `${z("Flecha arco")} (${e.length})`
        },
        {
          key: "xDiv",
          val: 8,
          min: 4,
          max: 20,
          step: 1,
          label: z("Div. X")
        },
        {
          key: "yDiv",
          val: 4,
          min: 2,
          max: 12,
          step: 1,
          label: z("Div. Y")
        }
      ],
      barra: [
        {
          key: "L",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `${z("L total")} (${e.length})`
        },
        {
          key: "nElem",
          val: 3,
          min: 1,
          max: 10,
          step: 1,
          label: z("Num elementos")
        },
        {
          key: "F",
          val: e.defaultForce * 10,
          min: e.forceRange[0],
          max: e.forceRange[1] * 10,
          step: Math.abs(e.forceRange[2]) * 10,
          label: `${z("F axial")} (${e.force})`
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
          label: `${z("Mesh size")} (${e.length})`
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
          label: z("nx elem")
        },
        {
          key: "ny",
          val: 16,
          min: 2,
          max: 64,
          step: 2,
          label: z("ny elem")
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
          label: z("nx elem")
        },
        {
          key: "ny",
          val: 8,
          min: 4,
          max: 40,
          step: 2,
          label: z("ny elem")
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
          label: `${z("Mesh size")} (${e.length})`
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
          label: `${z("Mesh size")} (${e.length})`
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
          label: `${z("Ancho carga")} (${e.length})`
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
          label: `${z("B base")} (${e.length})`
        },
        {
          key: "tw",
          val: 0.3,
          min: 0.1,
          max: 1,
          step: 0.05,
          label: `${z("t muro")} (${e.length})`
        },
        {
          key: "tb",
          val: 0.4,
          min: 0.1,
          max: 1,
          step: 0.05,
          label: `${z("t base")} (${e.length})`
        },
        {
          key: "meshSize",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.05,
          label: `${z("Mesh size")} (${e.length})`
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `${z("E concreto")} (${e.stress})`
        },
        {
          key: "nu",
          val: 0.2,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: z("v concreto")
        },
        {
          key: "gamma",
          val: 18,
          min: 5,
          max: 30,
          step: 1,
          label: `${z("gamma suelo")} (${e.force}/${e.length}\xB3)`
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
          label: `${z("q sobrecarga")} (${e.stress})`
        },
        {
          key: "Es",
          val: 5e4,
          min: 100,
          max: 1e6,
          step: 1e3,
          label: `${z("E suelo")} (${e.stress})`
        },
        {
          key: "nus",
          val: 0.3,
          min: 0.1,
          max: 0.49,
          step: 0.01,
          label: z("v suelo")
        },
        {
          key: "kn",
          val: 1e6,
          min: 1e3,
          max: 1e9,
          step: 1e4,
          label: `${z("kn interfaz")} (${e.force}/${e.length}\xB3)`
        },
        {
          key: "ks",
          val: 1e4,
          min: 100,
          max: 1e7,
          step: 1e3,
          label: `${z("ks interfaz")} (${e.force}/${e.length}\xB3)`
        },
        {
          key: "gammaW",
          val: 9.81,
          min: 5,
          max: 15,
          step: 0.1,
          label: `${z("gamma agua")} (${e.force}/${e.length}\xB3)`
        },
        {
          key: "Hw",
          val: 3.5,
          min: 0.5,
          max: 10,
          step: 0.5,
          label: `${z("H agua")} (${e.length})`
        }
      ],
      zapata: [
        {
          key: "Lx",
          val: 2,
          min: 0.5,
          max: 6,
          step: 0.1,
          label: `${z("Lx zapata")} (${e.length})`
        },
        {
          key: "Ly",
          val: 2,
          min: 0.5,
          max: 6,
          step: 0.1,
          label: `${z("Ly zapata")} (${e.length})`
        },
        {
          key: "t",
          val: 0.5,
          min: 0.1,
          max: 2,
          step: 0.05,
          label: `${z("t zapata")} (${e.length})`
        },
        {
          key: "colA",
          val: 0.4,
          min: 0.15,
          max: 1.5,
          step: 0.05,
          label: `${z("a columna")} (${e.length})`
        },
        {
          key: "colH",
          val: 1.5,
          min: 0.5,
          max: 5,
          step: 0.5,
          label: `${z("h pedestal")} (${e.length})`
        },
        {
          key: "nx",
          val: 8,
          min: 4,
          max: 20,
          step: 2,
          label: z("nx elem")
        },
        {
          key: "ny",
          val: 8,
          min: 4,
          max: 20,
          step: 2,
          label: z("ny elem")
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
          label: `${z("P axial")} (${e.force})`
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
          label: `${z("Placa Lx")} (${e.length})`
        },
        {
          key: "Ly",
          val: 0.4,
          min: 0.15,
          max: 1,
          step: 0.05,
          label: `${z("Placa Ly")} (${e.length})`
        },
        {
          key: "t",
          val: 0.025,
          min: 0.01,
          max: 0.1,
          step: 5e-3,
          label: `${z("Espesor t")} (${e.length})`
        },
        {
          key: "dBolt",
          val: 0.022,
          min: 0.01,
          max: 0.05,
          step: 2e-3,
          label: `${z("d perno")} (${e.length})`
        },
        {
          key: "sx",
          val: 0.28,
          min: 0.08,
          max: 0.8,
          step: 0.02,
          label: `${z("Sep. pernos X")} (${e.length})`
        },
        {
          key: "sy",
          val: 0.28,
          min: 0.08,
          max: 0.8,
          step: 0.02,
          label: `${z("Sep. pernos Y")} (${e.length})`
        },
        {
          key: "colA",
          val: 0.2,
          min: 0.1,
          max: 0.5,
          step: 0.02,
          label: `${z("Col a")} (${e.length})`
        },
        {
          key: "meshSize",
          val: 8e-3,
          min: 3e-3,
          max: 0.03,
          step: 1e-3,
          label: `${z("Mesh size")} (${e.length})`
        },
        {
          key: "E",
          val: e.E,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `${z("E acero")} (${e.stress})`
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
          label: `${z("P axial")} (${e.force})`
        },
        {
          key: "nBolts",
          val: 4,
          min: 2,
          max: 8,
          step: 2,
          label: z("N pernos")
        }
      ],
      "col-placa": [
        {
          key: "colB",
          val: 0.3,
          min: 0.1,
          max: 0.6,
          step: 0.02,
          label: `${z("Col b")} (${e.length})`
        },
        {
          key: "colH",
          val: 0.3,
          min: 0.1,
          max: 0.6,
          step: 0.02,
          label: `${z("Col h")} (${e.length})`
        },
        {
          key: "colT",
          val: 8e-3,
          min: 4e-3,
          max: 0.025,
          step: 2e-3,
          label: `${z("Col t")} (${e.length})`
        },
        {
          key: "colLen",
          val: 1.5,
          min: 0.5,
          max: 4,
          step: 0.25,
          label: `${z("Col altura")} (${e.length})`
        },
        {
          key: "Lx",
          val: 0.45,
          min: 0.2,
          max: 1,
          step: 0.05,
          label: `${z("Placa Lx")} (${e.length})`
        },
        {
          key: "Ly",
          val: 0.45,
          min: 0.2,
          max: 1,
          step: 0.05,
          label: `${z("Placa Ly")} (${e.length})`
        },
        {
          key: "tPlaca",
          val: 0.025,
          min: 0.01,
          max: 0.06,
          step: 5e-3,
          label: `${z("Placa t")} (${e.length})`
        },
        {
          key: "dBolt",
          val: 0.022,
          min: 0.012,
          max: 0.04,
          step: 2e-3,
          label: `${z("d perno")} (${e.length})`
        },
        {
          key: "sx",
          val: 0.32,
          min: 0.1,
          max: 0.8,
          step: 0.02,
          label: `${z("Sep pernos X")} (${e.length})`
        },
        {
          key: "sy",
          val: 0.32,
          min: 0.1,
          max: 0.8,
          step: 0.02,
          label: `${z("Sep pernos Y")} (${e.length})`
        },
        {
          key: "nSubColV",
          val: 6,
          min: 2,
          max: 12,
          step: 1,
          label: z("Col subdiv V")
        },
        {
          key: "nSubColH",
          val: 4,
          min: 2,
          max: 8,
          step: 1,
          label: z("Col subdiv H")
        },
        {
          key: "nSubPlaca",
          val: 10,
          min: 4,
          max: 20,
          step: 2,
          label: z("Placa subdiv")
        },
        {
          key: "E",
          val: e.E,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `${z("E acero")} (${e.stress})`
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
          label: `${z("P axial")} (${e.force})`
        }
      ],
      "muro-q4": [
        {
          key: "W",
          val: 5,
          min: 1,
          max: 20,
          step: 0.5,
          label: `${z("Ancho W")} (${e.length})`
        },
        {
          key: "H",
          val: 3,
          min: 1,
          max: 15,
          step: 0.5,
          label: `${z("Alto H")} (${e.length})`
        },
        {
          key: "t",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.05,
          label: `${z("Espesor t")} (${e.length})`
        },
        {
          key: "nx",
          val: 8,
          min: 2,
          max: 20,
          step: 1,
          label: z("Mesh nx")
        },
        {
          key: "ny",
          val: 6,
          min: 2,
          max: 20,
          step: 1,
          label: z("Mesh ny")
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 1e4,
          max: 1e9,
          step: 1e5,
          label: `${z("E concreto")} (${e.stress})`
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
          min: 0.1,
          max: e.forceRange[1] * 100,
          step: e.forceRange[2] * 5,
          label: `${z("P lateral")} (${e.force})`
        }
      ],
      "viga-q4": [
        {
          key: "L",
          val: 6,
          min: 1,
          max: 20,
          step: 0.5,
          label: `${z("Luz L")} (${e.length})`
        },
        {
          key: "h",
          val: 0.5,
          min: 0.1,
          max: 3,
          step: 0.1,
          label: `${z("Peralte h")} (${e.length})`
        },
        {
          key: "t",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.05,
          label: `${z("Espesor t")} (${e.length})`
        },
        {
          key: "nx",
          val: 12,
          min: 2,
          max: 30,
          step: 1,
          label: z("Mesh nx")
        },
        {
          key: "ny",
          val: 4,
          min: 2,
          max: 15,
          step: 1,
          label: z("Mesh ny")
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 1e4,
          max: 1e9,
          step: 1e5,
          label: `${z("E concreto")} (${e.stress})`
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
          label: `${z("P puntual")} (${e.force})`
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
          label: `${z("Espesor t")} (${e.length})`
        },
        {
          key: "nx",
          val: 8,
          min: 2,
          max: 20,
          step: 1,
          label: z("Mesh nx")
        },
        {
          key: "nz",
          val: 4,
          min: 2,
          max: 15,
          step: 1,
          label: z("Mesh nz")
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 1e4,
          max: 1e9,
          step: 1e5,
          label: `${z("E concreto")} (${e.stress})`
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
          label: `${z("P borde")} (${e.force})`
        }
      ],
      pergola: [
        {
          key: "Lx",
          val: 6,
          min: 2,
          max: 20,
          step: 0.5,
          label: `${z("Ancho Lx")} (${e.length})`
        },
        {
          key: "Ly",
          val: 8,
          min: 3,
          max: 30,
          step: 0.5,
          label: `${z("Largo Ly")} (${e.length})`
        },
        {
          key: "H1",
          val: 3,
          min: 1,
          max: 8,
          step: 0.25,
          label: `${z("H bajo")} (${e.length})`
        },
        {
          key: "H2",
          val: 4.5,
          min: 1,
          max: 10,
          step: 0.25,
          label: `${z("H alto")} (${e.length})`
        },
        {
          key: "nCol",
          val: 4,
          min: 2,
          max: 8,
          step: 1,
          label: z("Columnas/p\xF3rtico")
        },
        {
          key: "nCorr",
          val: 8,
          min: 3,
          max: 20,
          step: 1,
          label: z("Correas")
        },
        {
          key: "E",
          val: e.E,
          min: 1e4,
          max: 1e9,
          step: 1e5,
          label: `${z("E acero")} (${e.stress})`
        },
        {
          key: "t",
          val: 5e-4,
          min: 3e-4,
          max: 3e-3,
          step: 1e-4,
          label: `${z("t panel")} (${e.length})`
        },
        {
          key: "q",
          val: e.defaultForce * 0.5,
          min: 0.1,
          max: e.forceRange[1] * 5,
          step: e.forceRange[2] * 0.1,
          label: `${z("q carga")} (${e.force}/${e.length}\xB2)`
        },
        {
          key: "colD",
          val: 0.16,
          min: 0.05,
          max: 0.6,
          step: 0.01,
          label: `${z("Col d")} (${e.length})`
        },
        {
          key: "colBf",
          val: 0.16,
          min: 0.05,
          max: 0.4,
          step: 0.01,
          label: `${z("Col bf")} (${e.length})`
        },
        {
          key: "colTf",
          val: 0.013,
          min: 4e-3,
          max: 0.04,
          step: 1e-3,
          label: `${z("Col tf")} (${e.length})`
        },
        {
          key: "colTw",
          val: 8e-3,
          min: 3e-3,
          max: 0.03,
          step: 1e-3,
          label: `${z("Col tw")} (${e.length})`
        },
        {
          key: "vigD",
          val: 0.2,
          min: 0.1,
          max: 0.6,
          step: 0.01,
          label: `${z("Vig d")} (${e.length})`
        },
        {
          key: "vigBf",
          val: 0.1,
          min: 0.05,
          max: 0.3,
          step: 0.01,
          label: `${z("Vig bf")} (${e.length})`
        },
        {
          key: "vigTf",
          val: 85e-4,
          min: 4e-3,
          max: 0.03,
          step: 1e-3,
          label: `${z("Vig tf")} (${e.length})`
        },
        {
          key: "vigTw",
          val: 56e-4,
          min: 3e-3,
          max: 0.02,
          step: 1e-3,
          label: `${z("Vig tw")} (${e.length})`
        },
        {
          key: "corrB",
          val: 0.06,
          min: 0.03,
          max: 0.2,
          step: 0.01,
          label: `${z("Corr b")} (${e.length})`
        },
        {
          key: "corrT",
          val: 4e-3,
          min: 2e-3,
          max: 0.01,
          step: 1e-3,
          label: `${z("Corr t")} (${e.length})`
        },
        {
          key: "supUx",
          val: 1,
          min: 0,
          max: 1,
          step: 1,
          label: z("Apoyo Ux")
        },
        {
          key: "supUy",
          val: 1,
          min: 0,
          max: 1,
          step: 1,
          label: z("Apoyo Uy")
        },
        {
          key: "supUz",
          val: 1,
          min: 0,
          max: 1,
          step: 1,
          label: z("Apoyo Uz")
        },
        {
          key: "supRx",
          val: 1,
          min: 0,
          max: 1,
          step: 1,
          label: z("Apoyo Rx")
        },
        {
          key: "supRy",
          val: 1,
          min: 0,
          max: 1,
          step: 1,
          label: z("Apoyo Ry")
        },
        {
          key: "supRz",
          val: 1,
          min: 0,
          max: 1,
          step: 1,
          label: z("Apoyo Rz")
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
          label: `${z("Angulo")} (deg)`
        },
        {
          key: "bTop",
          val: 3,
          min: 1,
          max: 10,
          step: 0.5,
          label: `${z("b top")} (${e.length})`
        },
        {
          key: "bBot",
          val: 3,
          min: 1,
          max: 10,
          step: 0.5,
          label: `${z("b base")} (${e.length})`
        },
        {
          key: "meshSize",
          val: 0.8,
          min: 0.3,
          max: 3,
          step: 0.1,
          label: `${z("Mesh size")} (${e.length})`
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
          label: `${z("Cohesion c")} (${e.stress})`
        },
        {
          key: "phi",
          val: 30,
          min: 0,
          max: 45,
          step: 1,
          label: `${z("Friccion \u03C6")} (deg)`
        },
        {
          key: "qs",
          val: 0,
          min: 0,
          max: 100,
          step: 5,
          label: `${z("Sobrecarga")} (${e.stress})`
        }
      ]
    };
  }
  function Dl(e) {
    const b = e.force, [N, w, U] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: N,
          max: 0,
          step: U,
          label: `${z("CM")} (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: N,
          max: 0,
          step: U,
          label: `${z("CV")} (${b})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: N,
          max: 0,
          step: U,
          label: `${z("CM")} (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: N,
          max: 0,
          step: U,
          label: `${z("CV")} (${b})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: N,
          max: w,
          step: U,
          label: `${z("Ex sismo")} (${b})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: N,
          max: 0,
          step: U,
          label: `${z("CM")} (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: N,
          max: 0,
          step: U,
          label: `${z("CV")} (${b})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: N,
          max: w,
          step: U,
          label: `${z("Ex sismo")} (${b})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: N,
          max: 0,
          step: U,
          label: `${z("CM")} (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: N,
          max: 0,
          step: U,
          label: `${z("CV")} (${b})`
        },
        {
          key: "Ex",
          val: 0,
          min: N,
          max: w,
          step: U,
          label: `${z("Ex sismo")} (${b})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: N,
          max: 0,
          step: U,
          label: `${z("CM")} (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: N,
          max: 0,
          step: U,
          label: `${z("CV")} (${b})`
        },
        {
          key: "Ex",
          val: 0,
          min: N,
          max: w,
          step: U,
          label: `${z("Ex sismo")} (${b})`
        },
        {
          key: "Ey",
          val: 0,
          min: N,
          max: w,
          step: U,
          label: `${z("Ey sismo")} (${b})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: N,
          max: 0,
          step: U,
          label: `${z("CM")} (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: N,
          max: 0,
          step: U,
          label: `${z("CV")} (${b})`
        }
      ],
      barra: [
        {
          key: "F",
          val: e.defaultForce * 10,
          min: e.forceRange[0] * 10,
          max: e.forceRange[1] * 10,
          step: Math.abs(e.forceRange[2]) * 5,
          label: `${z("F axial")} (${b})`
        }
      ],
      "placa-3q": [
        {
          key: "CM",
          val: 0,
          min: N,
          max: 0,
          step: U,
          label: `${z("CM")} (${b})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: N,
          max: 0,
          step: U,
          label: `${z("CM")} (${b})`
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
  Bl = function() {
    const e = document.createElement("div");
    e.id = "modal-results", e.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; max-height: 60vh; overflow: auto; pointer-events: auto;
    border: 1px solid #0f03; resize: both;
  `;
    let b = false;
    function N(w, U) {
      var _a2, _b;
      if (!w.frequencies || w.frequencies.length === 0) {
        e.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
        return;
      }
      const j = [
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
  <b style="color:#ff0">MODAL \u2014 ${U.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (V += '<div id="modal-body" style="padding:0 12px 10px 12px;">', U.properties) for (const G of U.properties) V += `<span style="color:#888">${G}</span>
`;
      V += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03; position:sticky; top:36px; background:rgba(0,0,0,0.95); z-index:1;">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">f (Hz)</th>
  <th style="padding:2px 6px">T (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const G of j) V += `<th style="padding:2px 5px">${G}</th>`;
      if (V += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, w.frequencies.forEach((G, he) => {
        var _a3;
        const T = G > 0 ? 1 / G : 0, J = G * 2 * Math.PI, $e = ((_a3 = w.massParticipation) == null ? void 0 : _a3[he]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let de = 0; de < 6; de++) Z[de] += $e[de];
        V += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${he + 1}</td>
  <td style="padding:2px 6px; text-align:right">${G.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${T.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${J.toFixed(2)}</td>`;
        for (let de = 0; de < 6; de++) {
          const re = ($e[de] * 100).toFixed(1), ne = $e[de] > 0.5 ? "#f00" : $e[de] > 0.1 ? "#ff0" : "#0f0";
          V += `<td style="padding:2px 5px; text-align:right; color:${ne}">${re}%</td>`;
        }
        V += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(Z[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(Z[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(Z[5] * 100).toFixed(1)}%</td></tr>`;
      }), V += "</table></div>", e.innerHTML = V, b) {
        const G = e.querySelector("#modal-body"), he = e.querySelector("#modal-minimize");
        G && (G.style.display = "none"), he && (he.textContent = "\u25A2", he.title = "Restaurar");
      }
      (_a2 = e.querySelector("#modal-minimize")) == null ? void 0 : _a2.addEventListener("click", () => {
        b = !b;
        const G = e.querySelector("#modal-body"), he = e.querySelector("#modal-minimize");
        b ? (G.style.display = "none", he.textContent = "\u25A2", he.title = "Restaurar") : (G.style.display = "block", he.textContent = "\u25AC", he.title = "Minimizar");
      });
      const W = e.querySelector("#modal-header");
      if (W) {
        let G = false, he = 0, T = 0, J = 0, $e = 0;
        W.addEventListener("mousedown", (de) => {
          if (de.target.tagName === "BUTTON") return;
          G = true, he = de.clientX, T = de.clientY;
          const re = e.getBoundingClientRect();
          J = re.left, $e = re.top, de.preventDefault();
        }), document.addEventListener("mousemove", (de) => {
          if (!G) return;
          const re = de.clientX - he, ne = de.clientY - T;
          e.style.left = J + re + "px", e.style.top = $e + ne + "px", e.style.bottom = "auto", e.style.right = "auto";
        }), document.addEventListener("mouseup", () => {
          G = false;
        });
      }
      (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const G = [];
        G.push(`Modal Analysis \u2014 ${U.title}`);
        const he = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${j.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        G.push(he), G.push("-".repeat(he.length));
        const T = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        w.frequencies.forEach(($e, de) => {
          var _a3;
          const re = $e > 0 ? 1 / $e : 0, ne = $e * 2 * Math.PI, _ = ((_a3 = w.massParticipation) == null ? void 0 : _a3[de]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let Y = 0; Y < 6; Y++) T[Y] += _[Y];
          const B = _.map((Y) => ((Y * 100).toFixed(1) + "%").padStart(6)).join(" ");
          G.push(`${String(de + 1).padStart(4)}  ${$e.toFixed(4).padStart(9)}  ${re.toFixed(4).padStart(9)}  ${ne.toFixed(2).padStart(9)}  ${B}  ${(T[0] * 100).toFixed(1).padStart(5)}%  ${(T[1] * 100).toFixed(1).padStart(5)}%  ${(T[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(G.join(`
`));
        const J = e.querySelector("#modal-copy");
        J.textContent = "\u2713", setTimeout(() => J.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: N
    };
  };
  const Oe = 64516e-8, q = 416231e-12, ae = 0.0254, Po = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * Oe,
      Iz: 16.4 * q,
      Iy: 2.2 * q,
      J: 0.0405 * q,
      d: 5.9 * ae,
      bf: 3.94 * ae
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * Oe,
      Iz: 29.1 * q,
      Iy: 9.32 * q,
      J: 0.103 * q,
      d: 5.99 * ae,
      bf: 5.99 * ae
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * Oe,
      Iz: 41.4 * q,
      Iy: 13.3 * q,
      J: 0.204 * q,
      d: 6.2 * ae,
      bf: 6.02 * ae
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * Oe,
      Iz: 30.8 * q,
      Iy: 2.09 * q,
      J: 0.0426 * q,
      d: 7.89 * ae,
      bf: 3.94 * ae
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * Oe,
      Iz: 61.9 * q,
      Iy: 7.97 * q,
      J: 0.172 * q,
      d: 8.14 * ae,
      bf: 5.25 * ae
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * Oe,
      Iz: 82.7 * q,
      Iy: 18.3 * q,
      J: 0.346 * q,
      d: 7.93 * ae,
      bf: 6.5 * ae
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * Oe,
      Iz: 110 * q,
      Iy: 37.1 * q,
      J: 0.536 * q,
      d: 8 * ae,
      bf: 7.995 * ae
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * Oe,
      Iz: 146 * q,
      Iy: 49.1 * q,
      J: 0.871 * q,
      d: 8.25 * ae,
      bf: 8.07 * ae
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * Oe,
      Iz: 184 * q,
      Iy: 60.9 * q,
      J: 1.45 * q,
      d: 8.5 * ae,
      bf: 8.11 * ae
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * Oe,
      Iz: 272 * q,
      Iy: 88.6 * q,
      J: 3.54 * q,
      d: 9 * ae,
      bf: 8.28 * ae
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * Oe,
      Iz: 53.8 * q,
      Iy: 2.18 * q,
      J: 0.0547 * q,
      d: 9.87 * ae,
      bf: 3.96 * ae
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * Oe,
      Iz: 118 * q,
      Iy: 11.4 * q,
      J: 0.239 * q,
      d: 10.17 * ae,
      bf: 5.75 * ae
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * Oe,
      Iz: 171 * q,
      Iy: 36.6 * q,
      J: 0.583 * q,
      d: 9.73 * ae,
      bf: 7.96 * ae
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * Oe,
      Iz: 272 * q,
      Iy: 93.4 * q,
      J: 1.39 * q,
      d: 9.98 * ae,
      bf: 10 * ae
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * Oe,
      Iz: 394 * q,
      Iy: 134 * q,
      J: 3.56 * q,
      d: 10.4 * ae,
      bf: 10.13 * ae
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * Oe,
      Iz: 623 * q,
      Iy: 207 * q,
      J: 10.9 * q,
      d: 11.1 * ae,
      bf: 10.34 * ae
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * Oe,
      Iz: 88.6 * q,
      Iy: 2.36 * q,
      J: 0.0704 * q,
      d: 11.91 * ae,
      bf: 3.97 * ae
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * Oe,
      Iz: 156 * q,
      Iy: 4.66 * q,
      J: 0.293 * q,
      d: 12.31 * ae,
      bf: 4.03 * ae
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * Oe,
      Iz: 204 * q,
      Iy: 17.3 * q,
      J: 0.3 * q,
      d: 12.22 * ae,
      bf: 6.49 * ae
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * Oe,
      Iz: 310 * q,
      Iy: 44.1 * q,
      J: 0.906 * q,
      d: 11.94 * ae,
      bf: 8.01 * ae
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * Oe,
      Iz: 425 * q,
      Iy: 95.8 * q,
      J: 1.58 * q,
      d: 12.06 * ae,
      bf: 9.99 * ae
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * Oe,
      Iz: 597 * q,
      Iy: 195 * q,
      J: 4.05 * q,
      d: 12.25 * ae,
      bf: 12.04 * ae
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * Oe,
      Iz: 833 * q,
      Iy: 270 * q,
      J: 8.44 * q,
      d: 12.71 * ae,
      bf: 12.16 * ae
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * Oe,
      Iz: 1070 * q,
      Iy: 345 * q,
      J: 16 * q,
      d: 13.12 * ae,
      bf: 12.32 * ae
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * Oe,
      Iz: 199 * q,
      Iy: 7 * q,
      J: 0.208 * q,
      d: 13.74 * ae,
      bf: 5 * ae
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * Oe,
      Iz: 291 * q,
      Iy: 19.6 * q,
      J: 0.38 * q,
      d: 13.84 * ae,
      bf: 6.73 * ae
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * Oe,
      Iz: 385 * q,
      Iy: 26.7 * q,
      J: 0.798 * q,
      d: 14.1 * ae,
      bf: 6.77 * ae
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * Oe,
      Iz: 485 * q,
      Iy: 51.4 * q,
      J: 1.45 * q,
      d: 13.79 * ae,
      bf: 8.03 * ae
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * Oe,
      Iz: 640 * q,
      Iy: 107 * q,
      J: 2.19 * q,
      d: 13.89 * ae,
      bf: 9.99 * ae
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * Oe,
      Iz: 882 * q,
      Iy: 148 * q,
      J: 5.07 * q,
      d: 14.31 * ae,
      bf: 10.13 * ae
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * Oe,
      Iz: 1240 * q,
      Iy: 447 * q,
      J: 7.12 * q,
      d: 14.32 * ae,
      bf: 14.61 * ae
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * Oe,
      Iz: 1530 * q,
      Iy: 548 * q,
      J: 12.3 * q,
      d: 14.66 * ae,
      bf: 14.73 * ae
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * Oe,
      Iz: 2140 * q,
      Iy: 838 * q,
      J: 23.7 * q,
      d: 15.22 * ae,
      bf: 15.65 * ae
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * Oe,
      Iz: 301 * q,
      Iy: 9.59 * q,
      J: 0.262 * q,
      d: 15.69 * ae,
      bf: 5.5 * ae
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * Oe,
      Iz: 448 * q,
      Iy: 24.5 * q,
      J: 0.545 * q,
      d: 15.86 * ae,
      bf: 6.99 * ae
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * Oe,
      Iz: 659 * q,
      Iy: 37.2 * q,
      J: 1.52 * q,
      d: 16.26 * ae,
      bf: 7.07 * ae
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * Oe,
      Iz: 954 * q,
      Iy: 119 * q,
      J: 2.39 * q,
      d: 16.33 * ae,
      bf: 10.24 * ae
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * Oe,
      Iz: 1300 * q,
      Iy: 163 * q,
      J: 5.45 * q,
      d: 16.75 * ae,
      bf: 10.37 * ae
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * Oe,
      Iz: 510 * q,
      Iy: 15.3 * q,
      J: 0.506 * q,
      d: 17.7 * ae,
      bf: 6 * ae
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * Oe,
      Iz: 800 * q,
      Iy: 40.1 * q,
      J: 1.24 * q,
      d: 17.99 * ae,
      bf: 7.5 * ae
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * Oe,
      Iz: 1170 * q,
      Iy: 60.3 * q,
      J: 3.49 * q,
      d: 18.47 * ae,
      bf: 7.64 * ae
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * Oe,
      Iz: 1750 * q,
      Iy: 201 * q,
      J: 5.86 * q,
      d: 18.59 * ae,
      bf: 11.15 * ae
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * Oe,
      Iz: 843 * q,
      Iy: 20.7 * q,
      J: 0.77 * q,
      d: 20.66 * ae,
      bf: 6.5 * ae
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * Oe,
      Iz: 1330 * q,
      Iy: 57.5 * q,
      J: 1.83 * q,
      d: 20.99 * ae,
      bf: 8.24 * ae
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * Oe,
      Iz: 1830 * q,
      Iy: 81.4 * q,
      J: 4.34 * q,
      d: 21.43 * ae,
      bf: 8.36 * ae
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * Oe,
      Iz: 2670 * q,
      Iy: 274 * q,
      J: 6.83 * q,
      d: 21.51 * ae,
      bf: 12.34 * ae
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * Oe,
      Iz: 1350 * q,
      Iy: 29.1 * q,
      J: 1.18 * q,
      d: 23.57 * ae,
      bf: 7.01 * ae
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * Oe,
      Iz: 2100 * q,
      Iy: 82.5 * q,
      J: 2.68 * q,
      d: 23.92 * ae,
      bf: 8.99 * ae
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * Oe,
      Iz: 3100 * q,
      Iy: 259 * q,
      J: 4.72 * q,
      d: 24.06 * ae,
      bf: 12.75 * ae
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * Oe,
      Iz: 4020 * q,
      Iy: 340 * q,
      J: 9.5 * q,
      d: 24.48 * ae,
      bf: 12.86 * ae
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * Oe,
      Iz: 4580 * q,
      Iy: 391 * q,
      J: 12.6 * q,
      d: 24.74 * ae,
      bf: 12.9 * ae
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * Oe,
      Iz: 5680 * q,
      Iy: 479 * q,
      J: 21.2 * q,
      d: 25.24 * ae,
      bf: 12.9 * ae
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * Oe,
      Iz: 2850 * q,
      Iy: 106 * q,
      J: 2.81 * q,
      d: 26.71 * ae,
      bf: 9.96 * ae
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * Oe,
      Iz: 4090 * q,
      Iy: 159 * q,
      J: 6.77 * q,
      d: 27.29 * ae,
      bf: 10.07 * ae
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * Oe,
      Iz: 3610 * q,
      Iy: 115 * q,
      J: 3.06 * q,
      d: 29.53 * ae,
      bf: 10.4 * ae
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * Oe,
      Iz: 4930 * q,
      Iy: 164 * q,
      J: 6.43 * q,
      d: 30.01 * ae,
      bf: 10.5 * ae
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * Oe,
      Iz: 5900 * q,
      Iy: 187 * q,
      J: 5.3 * q,
      d: 32.86 * ae,
      bf: 11.48 * ae
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * Oe,
      Iz: 7800 * q,
      Iy: 225 * q,
      J: 7 * q,
      d: 35.55 * ae,
      bf: 11.95 * ae
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * Oe,
      Iz: 8.22 * q,
      Iy: 8.22 * q,
      J: 13.4 * q,
      d: 4 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * Oe,
      Iz: 10.7 * q,
      Iy: 10.7 * q,
      J: 17.9 * q,
      d: 4 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * Oe,
      Iz: 12.3 * q,
      Iy: 12.3 * q,
      J: 21 * q,
      d: 4 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * Oe,
      Iz: 30.3 * q,
      Iy: 30.3 * q,
      J: 48.3 * q,
      d: 6 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * Oe,
      Iz: 41.1 * q,
      Iy: 41.1 * q,
      J: 66.9 * q,
      d: 6 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * Oe,
      Iz: 49.6 * q,
      Iy: 49.6 * q,
      J: 82.2 * q,
      d: 6 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * Oe,
      Iz: 70.7 * q,
      Iy: 70.7 * q,
      J: 112 * q,
      d: 8 * ae,
      bf: 8 * ae
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * Oe,
      Iz: 98 * q,
      Iy: 98 * q,
      J: 158 * q,
      d: 8 * ae,
      bf: 8 * ae
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * Oe,
      Iz: 122 * q,
      Iy: 122 * q,
      J: 199 * q,
      d: 8 * ae,
      bf: 8 * ae
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * Oe,
      Iz: 202 * q,
      Iy: 202 * q,
      J: 323 * q,
      d: 10 * ae,
      bf: 10 * ae
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * Oe,
      Iz: 254 * q,
      Iy: 254 * q,
      J: 412 * q,
      d: 10 * ae,
      bf: 10 * ae
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * Oe,
      Iz: 355 * q,
      Iy: 355 * q,
      J: 564 * q,
      d: 12 * ae,
      bf: 12 * ae
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * Oe,
      Iz: 452 * q,
      Iy: 452 * q,
      J: 724 * q,
      d: 12 * ae,
      bf: 12 * ae
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * Oe,
      Iz: 18 * q,
      Iy: 9.58 * q,
      J: 22.6 * q,
      d: 6 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * Oe,
      Iz: 23.8 * q,
      Iy: 12.3 * q,
      J: 30.3 * q,
      d: 6 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * Oe,
      Iz: 33.6 * q,
      Iy: 11.8 * q,
      J: 33 * q,
      d: 8 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * Oe,
      Iz: 45.1 * q,
      Iy: 15 * q,
      J: 44.5 * q,
      d: 8 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * Oe,
      Iz: 46.1 * q,
      Iy: 28.2 * q,
      J: 61.3 * q,
      d: 8 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * Oe,
      Iz: 63 * q,
      Iy: 37.5 * q,
      J: 84.6 * q,
      d: 8 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * Oe,
      Iz: 103 * q,
      Iy: 47.1 * q,
      J: 115 * q,
      d: 10 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * Oe,
      Iz: 196 * q,
      Iy: 102 * q,
      J: 249 * q,
      d: 12 * ae,
      bf: 8 * ae
    }
  ];
  function Ln() {
    const e = {};
    return Po.forEach((b, N) => {
      b.type === "W" && (e[b.name] = N);
    }), e;
  }
  function Cn() {
    const e = {};
    return Po.forEach((b, N) => {
      b.type === "HSS" && (e[b.name] = N);
    }), e;
  }
  function Hl(e) {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: b, elements: N, elementInputs: w, nodeInputs: U, deformOutputs: j } = e, Z = b.length * 6, V = N.length, W = N.filter((re) => re.length === 2).length, G = N.filter((re) => re.length >= 3).length, he = document.createElement("div");
    he.className = "rpt-overlay";
    let T = "";
    T += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', T += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", T += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', T += '<hr class="rpt-sep"/>', T += "<h2>1. Input Data</h2>", T += '<table class="rpt-info"><tbody>', T += `<tr><td>Number of nodes</td><td class="val">${b.length}</td></tr>`, T += `<tr><td>Number of elements</td><td class="val">${V} (${W} frames, ${G} shells)</td></tr>`, T += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', T += `<tr><td>Total DOFs</td><td class="val">${Z}</td></tr>`, T += "</tbody></table>", T += "<h3>1.1 Node Coordinates</h3>", T += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', b.forEach((re, ne) => {
      T += `<tr><td>${ne}</td><td>${rt(re[0])}</td><td>${rt(re[1])}</td><td>${rt(re[2])}</td></tr>`;
    }), T += "</tbody></table>", T += "<h3>1.2 Element Connectivity</h3>", T += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', N.forEach((re, ne) => {
      var _a3, _b2, _c2, _d2;
      const _ = re.length === 2, B = re.map((ye) => b[ye]), Y = _ ? Yo(ko(B[1], B[0])) : 0, pe = ((_a3 = w.elasticities) == null ? void 0 : _a3.get(ne)) ?? 0, we = ((_b2 = w.areas) == null ? void 0 : _b2.get(ne)) ?? 0, Ae = ((_c2 = w.momentsOfInertiaZ) == null ? void 0 : _c2.get(ne)) ?? 0, Ke = ((_d2 = w.momentsOfInertiaY) == null ? void 0 : _d2.get(ne)) ?? 0;
      T += `<tr><td>${ne}</td><td>${_ ? "Frame" : "Shell"}</td><td>${re.join(" \u2192 ")}</td>`, T += `<td>${rt(Y)}</td><td>${rt(pe)}</td><td>${rt(we)}</td><td>${rt(Ae)}</td><td>${rt(Ke)}</td></tr>`;
    }), T += "</tbody></table>", T += "<h2>2. Element Formulation</h2>", W > 0 && (T += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", T += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", T += "<h4>2.1.1 Shape Functions</h4>", T += "<p><b>Axial</b> (linear interpolation):</p>", T += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', T += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", T += '<table class="rpt-eq-table"><tbody>', T += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', T += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', T += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', T += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', T += "</tbody></table>", T += Wl(), T += "<p><b>Torsion</b> (linear): same as axial.</p>", T += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", T += "<p>The B matrix relates nodal displacements to internal strains:</p>", T += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', T += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', T += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', T += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', T += "<h4>2.1.3 Constitutive Relations D</h4>", T += '<table class="rpt-eq-table"><tbody>', T += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', T += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', T += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', T += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', T += "</tbody></table>", T += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", T += "<p>Obtained by analytical integration:</p>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', T += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", T += '<div class="rpt-eq-small">', T += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", T += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", T += "</div>", T += "<h4>2.1.5 Transformation Matrix T</h4>", T += "<p>Direction cosines of element axis:</p>", T += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', T += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', T += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', T += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", T += "<h4>2.1.6 Global Stiffness Matrix</h4>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), T += "<h2>3. Numerical Results per Element</h2>", T += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let re = 0; re < V; re++) {
      const ne = N[re], _ = ne.map((dt) => b[dt]);
      if (!(ne.length === 2)) continue;
      const Y = Yo(ko(_[1], _[0])), pe = ((_a2 = w.elasticities) == null ? void 0 : _a2.get(re)) ?? 0, we = ((_b = w.areas) == null ? void 0 : _b.get(re)) ?? 0, Ae = ((_c = w.momentsOfInertiaZ) == null ? void 0 : _c.get(re)) ?? 0, Ke = ((_d = w.momentsOfInertiaY) == null ? void 0 : _d.get(re)) ?? 0, ye = ((_e = w.shearModuli) == null ? void 0 : _e.get(re)) ?? 0, Ge = ((_f = w.torsionalConstants) == null ? void 0 : _f.get(re)) ?? 0;
      let Ye = null, be = null, Te = null;
      try {
        Ye = On(_, w, re), be = Nn(_), Te = uo(Es(be), uo(Ye, be));
      } catch {
        continue;
      }
      const Ce = ko(_[1], _[0]), Xe = Ce[0] / Y, ct = Ce[1] / Y, Ze = Ce[2] / Y;
      T += '<div class="rpt-elem-block">', T += `<h3 class="rpt-elem-title" data-toggle="elem${re}">\u25B6 Element ${re} \u2014 Nodes ${ne[0]} \u2192 ${ne[1]}, L = ${rt(Y)}</h3>`, T += `<div id="rpt-elem${re}" class="rpt-elem-body" style="display:none">`, T += "<h4>Properties (numerical substitution)</h4>", T += '<div class="rpt-eq-small">', T += `E = ${rt(pe)} &nbsp;&nbsp; A = ${rt(we)} &nbsp;&nbsp; I<sub>z</sub> = ${rt(Ae)} &nbsp;&nbsp; I<sub>y</sub> = ${rt(Ke)} &nbsp;&nbsp; G = ${rt(ye)} &nbsp;&nbsp; J = ${rt(Ge)}<br/>`, T += `EA/L = ${rt(pe)}\xB7${rt(we)}/${rt(Y)} = <b>${rt(pe * we / Y)}</b><br/>`, T += `12EI<sub>z</sub>/L\xB3 = 12\xB7${rt(pe)}\xB7${rt(Ae)}/${rt(Y)}\xB3 = <b>${rt(12 * pe * Ae / Y ** 3)}</b><br/>`, T += `12EI<sub>y</sub>/L\xB3 = 12\xB7${rt(pe)}\xB7${rt(Ke)}/${rt(Y)}\xB3 = <b>${rt(12 * pe * Ke / Y ** 3)}</b><br/>`, T += `GJ/L = ${rt(ye)}\xB7${rt(Ge)}/${rt(Y)} = <b>${rt(ye * Ge / Y)}</b>`, T += "</div>", T += "<h4>Direction cosines</h4>", T += `<div class="rpt-eq-small">l = ${Fn(Xe)}, m = ${Fn(ct)}, n = ${Fn(Ze)}, D = ${Fn(Math.sqrt(Xe ** 2 + ct ** 2))}</div>`, T += "<h4>K<sub>local</sub> (12\xD712)</h4>", T += xs(Ye, 12), T += "<h4>T \u2014 Transformation (12\xD712)</h4>", T += xs(be, 12), T += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", T += xs(Te, 12), T += "<h4>Assembly</h4>", T += `<div class="rpt-eq-small">Global DOFs: node ${ne[0]} \u2192 [${ne[0] * 6}..${ne[0] * 6 + 5}], node ${ne[1]} \u2192 [${ne[1] * 6}..${ne[1] * 6 + 5}]</div>`, T += "</div></div>";
    }
    T += "<h2>4. Global Assembly</h2>", T += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${V - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, T += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", T += Gl(N, b.length), T += "<h2>5. Boundary Conditions</h2>";
    const J = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], $e = [];
    if (T += "<h3>5.1 Supports (fixed DOFs)</h3>", U.supports && U.supports.size > 0) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const re of J) T += `<th>${re}</th>`;
      T += "</tr></thead><tbody>", U.supports.forEach((re, ne) => {
        T += `<tr><td>${ne}</td>`, re.forEach((_, B) => {
          _ && $e.push(ne * 6 + B), T += `<td class="${_ ? "fixed" : ""}">${_ ? "Fixed" : "Free"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += `<div class="rpt-eq-small">Fixed DOFs: [${$e.join(", ")}] \u2192 ${$e.length} constraints<br/>`, T += `Free DOFs: ${Z} \u2212 ${$e.length} = <b>${Z - $e.length}</b></div>`, T += "<h3>5.2 Applied Loads</h3>", U.loads && U.loads.size > 0) {
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
      T += "</tr></thead><tbody>", U.loads.forEach((ne, _) => {
        T += `<tr><td>${_}</td>`, ne.forEach((B) => {
          const Y = Math.abs(B) > 1e-10;
          T += `<td class="${Y ? "nz" : ""}">${Y ? rt(B) : "0"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h2>6. Solution</h2>", T += "<p>After removing fixed DOFs, the reduced system is:</p>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', T += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", T += "<h3>6.1 Nodal Displacements</h3>", j == null ? void 0 : j.deformations) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const re of J) T += `<th>${re}</th>`;
      T += "</tr></thead><tbody>", j.deformations.forEach((re, ne) => {
        T += `<tr><td>${ne}</td>`, re.forEach((_) => {
          const B = Math.abs(_) > 1e-10;
          T += `<td class="${B ? "nz" : ""}">${rt(_, 6)}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h3>6.2 Reactions</h3>", T += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', j == null ? void 0 : j.reactions) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const re of J) T += `<th>${re}</th>`;
      T += "</tr></thead><tbody>", j.reactions.forEach((re, ne) => {
        T += `<tr><td>${ne}</td>`, re.forEach((_) => {
          const B = Math.abs(_) > 1e-10;
          T += `<td class="${B ? "nz-react" : ""}">${B ? rt(_, 4) : "0"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h2>7. Internal Forces</h2>", T += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", T += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', T += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', j == null ? void 0 : j.deformations) {
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
        const _ = N[ne];
        if (_.length !== 2) continue;
        const B = _.map((Y) => b[Y]);
        try {
          const Y = On(B, w, ne), pe = Nn(B), we = [];
          for (const ye of _) {
            const Ge = ((_g = j.deformations) == null ? void 0 : _g.get(ye)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            we.push(...Ge);
          }
          const Ae = uo(pe, we), Ke = uo(Y, Ae);
          T += `<tr><td>${ne}</td><td>${_.join("\u2192")}</td>`;
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
    const de = `
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
    return he.innerHTML = de + T, (_h = he.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => he.remove()), he.querySelectorAll("[data-toggle]").forEach((re) => {
      re.addEventListener("click", () => {
        const ne = re.dataset.toggle, _ = he.querySelector(`#rpt-${ne}`);
        if (_) {
          const B = _.style.display !== "none";
          _.style.display = B ? "none" : "", re.textContent = re.textContent.replace(/^[▼▶]/, B ? "\u25B6" : "\u25BC");
        }
      });
    }), he;
  }
  function rt(e, b = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(b) : e.toFixed(b);
  }
  function Fn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function xs(e, b) {
    var _a2;
    const N = Math.min(b, 12);
    let w = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let U = 0; U < N; U++) {
      w += "<tr>";
      for (let j = 0; j < N; j++) {
        const Z = ((_a2 = e[U]) == null ? void 0 : _a2[j]) ?? 0, V = Math.abs(Z) < 1e-10;
        w += `<td class="${V ? "z" : ""} ${U === j && !V ? "diag" : ""}">${V ? "0" : jl(Z)}</td>`;
      }
      w += "</tr>";
    }
    return w += "</table>", b > N && (w += `<div style="color:#888;font-size:9pt">(showing ${N}\xD7${N} of ${b}\xD7${b})</div>`), w += "</div>", w;
  }
  function jl(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function Wl() {
    const Z = [
      {
        name: "H\u2081",
        color: "#c44",
        fn: (W) => 1 - 3 * W ** 2 + 2 * W ** 3
      },
      {
        name: "H\u2082/L",
        color: "#2a9d8f",
        fn: (W) => W * (1 - W) ** 2
      },
      {
        name: "H\u2083",
        color: "#264653",
        fn: (W) => 3 * W ** 2 - 2 * W ** 3
      },
      {
        name: "H\u2084/L",
        color: "#e9c46a",
        fn: (W) => W ** 2 * (W - 1)
      }
    ];
    let V = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    V += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, V += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', V += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, V += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, V += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const W of Z) {
      let G = "";
      for (let $e = 0; $e <= 80; $e++) {
        const de = $e / 80, re = 30 + de * 540, ne = 180 / 2 - W.fn(de) * 60;
        G += ($e === 0 ? "M" : "L") + `${re.toFixed(1)},${ne.toFixed(1)}`;
      }
      V += `<path d="${G}" fill="none" stroke="${W.color}" stroke-width="2.5"/>`;
      const he = 0.75, T = 30 + he * 540 + 8, J = 180 / 2 - W.fn(he) * 60 - 6;
      V += `<text x="${T}" y="${J}" fill="${W.color}" font-size="11" font-weight="bold" font-family="sans-serif">${W.name}</text>`;
    }
    return V += "</svg>", V;
  }
  function Gl(e, b) {
    const N = b * 6, w = Math.min(N, 30);
    let U = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    U += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', U += "<tr><td></td>";
    for (let Z = 0; Z < w; Z++) U += `<td style="color:#003366;font-weight:bold;font-size:7px">${Z}</td>`;
    U += "</tr>";
    const j = Array.from({
      length: w
    }, () => Array(w).fill(0));
    for (let Z = 0; Z < e.length; Z++) {
      const V = e[Z].map((W) => W * 6);
      for (const W of V) for (const G of V) for (let he = 0; he < 6; he++) for (let T = 0; T < 6; T++) {
        const J = W + he, $e = G + T;
        J < w && $e < w && j[J][$e]++;
      }
    }
    for (let Z = 0; Z < w; Z++) {
      U += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${Z}</td>`;
      for (let V = 0; V < w; V++) {
        const W = j[Z][V], G = W === 0 ? "#fff" : W === 1 ? "#e8f0fe" : W === 2 ? "#c6dcf5" : "#a0c4e8", he = W === 0 ? "" : W.toString();
        U += `<td style="background:${G};color:#003366">${he}</td>`;
      }
      U += "</tr>";
    }
    return U += "</table></div>", N > w && (U += `<div style="color:#888;font-size:9pt">(showing ${w}\xD7${w} of ${N}\xD7${N})</div>`), U;
  }
  let vs = false;
  function Yl(e) {
    if (vs || window.katex) {
      vs = true, e();
      return;
    }
    const b = document.createElement("link");
    b.rel = "stylesheet", b.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(b);
    const N = document.createElement("script");
    N.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", N.onload = () => {
      vs = true, e();
    }, document.head.appendChild(N);
  }
  function Aa(e, b = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: b,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function Jl(e, b, N, w, U, j) {
    var _a2, _b, _c, _d, _e, _f;
    const Z = N[e], V = Z.map((be) => b[be]), W = Z.length === 2, G = W ? Yo(ko(V[1], V[0])) : 0, he = ((_a2 = w.elasticities) == null ? void 0 : _a2.get(e)) ?? 0, T = ((_b = w.areas) == null ? void 0 : _b.get(e)) ?? 0, J = ((_c = w.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, $e = ((_d = w.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, de = ((_e = w.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, re = ((_f = w.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let ne = null, _ = null, B = null;
    try {
      ne = On(V, w, e), _ = Nn(V), B = uo(Es(_), uo(ne, _));
    } catch {
    }
    const Y = W ? ko(V[1], V[0]) : [
      0,
      0,
      0
    ], pe = G > 0 ? Y[0] / G : 0, we = G > 0 ? Y[1] / G : 0, Ae = G > 0 ? Y[2] / G : 0, Ke = Math.sqrt(pe ** 2 + we ** 2), ye = [];
    if ((U == null ? void 0 : U.deformations) && W) for (const be of Z) {
      const Te = U.deformations.get(be) || [
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
    if (ye.length === 12 && _ && ne) {
      try {
        Ge = uo(_, ye);
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
      isFrame: W,
      L: G,
      E: he,
      A: T,
      Iz: J,
      Iy: $e,
      G: de,
      J: re,
      kLocal: ne,
      T: _,
      kGlobal: B,
      l: pe,
      m: we,
      n: Ae,
      D: Ke,
      uGlobal: ye,
      uLocal: Ge,
      fLocal: Ye,
      dOut: U,
      aOut: j,
      totalNodes: b.length
    };
  }
  function Vl(e, b, N, w, U, j) {
    var _a2, _b;
    const Z = Jl(e, b, N, w, U, j), V = document.createElement("div");
    return V.className = "er-panel", V.innerHTML = Zl + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${Z.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${Z.elem.join(" \u2192 ")} \u2014 L = ${Ue(Z.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${Ul(Z)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${La(Z)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${Xl(Z)}</div>
  `, V.querySelectorAll(".er-tab").forEach((W) => {
      W.addEventListener("click", () => {
        V.querySelectorAll(".er-tab").forEach((he) => he.classList.remove("active")), W.classList.add("active");
        const G = W.dataset.tab;
        V.querySelectorAll(".er-body").forEach((he) => he.style.display = "none"), V.querySelector(`#er-body-${G}`).style.display = "";
      });
    }), (_a2 = V.querySelector("#er-close")) == null ? void 0 : _a2.addEventListener("click", () => V.remove()), (_b = V.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const W = V.classList.toggle("er-fullscreen-mode"), G = V.querySelector("#er-fullscreen");
      G && (G.textContent = W ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const W = V.querySelector("#er-sf-canvas");
      W && ys(W);
      const G = V.querySelector("#er-sf-canvas-math");
      G && ys(G);
    }, 50), Yl(() => {
      const W = V.querySelector("#er-body-math");
      W && (W.innerHTML = La(Z)), setTimeout(() => {
        const G = V.querySelector("#er-sf-canvas-math");
        G && ys(G);
      }, 50), V.querySelectorAll(".er-deriv-header").forEach((G) => {
        G.addEventListener("click", () => {
          const he = G.dataset.toggle, T = V.querySelector(`#er-${he}`);
          T && (T.style.display = T.style.display === "none" ? "" : "none");
        });
      });
    }), V;
  }
  function Ul(e) {
    let b = "";
    if (b += '<div class="er-section-title">1. Propiedades</div>', b += '<table class="er-props">', b += `<tr><td>E</td><td>${Ue(e.E)}</td><td>A</td><td>${Ue(e.A)}</td></tr>`, b += `<tr><td>I<sub>z</sub></td><td>${Ue(e.Iz)}</td><td>I<sub>y</sub></td><td>${Ue(e.Iy)}</td></tr>`, b += `<tr><td>G</td><td>${Ue(e.G)}</td><td>J</td><td>${Ue(e.J)}</td></tr>`, b += "</table>", e.kLocal && (b += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, b += yn(e.kLocal)), e.T && (b += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', b += yn(e.T)), e.kGlobal && (b += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', b += yn(e.kGlobal)), b += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const N = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let w = 0; w < e.elem.length; w++) {
        b += `<div class="er-sub">Nodo ${e.elem[w]}: `;
        for (let U = 0; U < 6; U++) {
          const j = e.uGlobal[w * 6 + U];
          b += `${N[U]}=<span class="${Math.abs(j) > 1e-10 ? "nz" : ""}">${Ue(j, 6)}</span> `;
        }
        b += "</div>";
      }
    } else b += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (b += '<div class="er-section-title">6. Fuerzas internas</div>', e.fLocal.length > 0 && e.fLocal.some((N) => N !== 0)) {
      const N = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const w of N) b += `<th>${w}</th>`;
      b += "</tr>", b += "<tr><td>Nodo i</td>";
      for (let w = 0; w < 6; w++) b += `<td class="${Math.abs(e.fLocal[w]) > 1e-10 ? "nz" : ""}">${Ue(e.fLocal[w], 3)}</td>`;
      b += "</tr><tr><td>Nodo j</td>";
      for (let w = 6; w < 12; w++) b += `<td class="${Math.abs(e.fLocal[w]) > 1e-10 ? "nz" : ""}">${Ue(e.fLocal[w], 3)}</td>`;
      b += "</tr></table>";
    } else b += '<div class="er-sub">Sin an\xE1lisis</div>';
    return b;
  }
  function La(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let b = "";
    const N = (he) => Aa(he), w = (he) => Aa(he, true);
    b += '<div class="er-section-title">1. Geometria del elemento</div>', b += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", b += `<div class="er-eq">${w("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, b += '<div class="er-eq-num">', b += `${N("\\text{Nodo } i")} = (${e.elmNodes[0].map((he) => Ue(he)).join(", ")})<br/>`, b += `${N("\\text{Nodo } j")} = (${e.elmNodes[1].map((he) => Ue(he)).join(", ")})<br/>`, b += `${w(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Ue(e.L)}}`)}`, b += "</div>", b += '<div class="er-section-title">2. Funciones de forma</div>', b += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", b += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', b += `<div class="er-eq">${w("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, b += "<p>Primera derivada:</p>", b += `<div class="er-eq">${w("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, b += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', b += `<p>Las funciones de Hermite garantizan continuidad ${N("C^1")} (desplazamiento y pendiente continuos):</p>`, b += `<div class="er-eq">${w("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, b += `<div class="er-eq">${w("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, b += `<div class="er-eq">${w("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, b += `<div class="er-eq">${w("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, b += `<div class="er-subsec">Derivadas segunda (curvatura ${N("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, b += `<div class="er-eq">${w("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, b += `<div class="er-eq">${w("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, b += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', b += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', b += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", b += `<div class="er-eq">${w("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, b += '<div class="er-subsec">3.1 Deformacion axial</div>', b += `<div class="er-eq">${w("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, b += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${N("I_z")})</div>`, b += `<div class="er-eq">${w("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, b += `<div class="er-eq">${w("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, b += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${N("I_y")})</div>`, b += `<div class="er-eq">${w("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, b += '<div class="er-subsec">3.4 Torsion</div>', b += `<div class="er-eq">${w("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, b += '<div class="er-section-title">4. Relaciones constitutivas D</div>', b += "<p>Cada modo de deformacion tiene su rigidez material:</p>", b += `<div class="er-eq">${w(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Ue(e.E)} \\times ${Ue(e.A)} = \\mathbf{${Ue(e.E * e.A)}}`)}</div>`, b += `<div class="er-eq">${w(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Ue(e.E)} \\times ${Ue(e.Iz)} = \\mathbf{${Ue(e.E * e.Iz)}}`)}</div>`, b += `<div class="er-eq">${w(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Ue(e.E)} \\times ${Ue(e.Iy)} = \\mathbf{${Ue(e.E * e.Iy)}}`)}</div>`, b += `<div class="er-eq">${w(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Ue(e.G)} \\times ${Ue(e.J)} = \\mathbf{${Ue(e.G * e.J)}}`)}</div>`, b += `<div class="er-section-title">5. Integracion \u2192 ${N("\\mathbf{K}_{local}")}</div>`, b += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", b += `<div class="er-eq er-eq-main">${w("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const U = e.E * e.A / e.L, j = e.E * e.Iz / e.L ** 3, Z = e.E * e.Iy / e.L ** 3, V = e.G * e.J / e.L;
    if (b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', b += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', b += "<p><b>Paso 1:</b> Funcion de forma axial</p>", b += `<div class="er-eq">${w("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, b += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", b += `<div class="er-eq">${w("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, b += `<div class="er-eq">${w("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, b += `<p><b>Paso 3:</b> Integracion ${N("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, b += `<div class="er-eq">${w("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, b += `<div class="er-eq">${w("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, b += `<div class="er-eq er-eq-main">${w(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ue(e.E)}\\times${Ue(e.A)}}{${Ue(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, b += `<div class="er-eq">${w(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Ue(U)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', b += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', b += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${N("v(\\xi)")}</p>`, b += `<div class="er-eq">${w("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, b += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", b += `<div class="er-eq">${w("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, b += `<div class="er-eq">${w("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, b += `<div class="er-eq">${w("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, b += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${N("v_i \\cdot v_i")})</p>`, b += `<div class="er-eq">${w("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, b += `<p>Expandimos: ${N("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, b += `<div class="er-eq">${w("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, b += `<div class="er-eq er-eq-main">${w(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Ue(e.E)} \\times ${Ue(e.Iz)}}{${Ue(e.L)}^3} = \\mathbf{${Ue(12 * j)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', b += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', b += `<p>Mismo proceso que axial pero con ${N("\\theta_x")} y ${N("GJ")}:</p>`, b += `<div class="er-eq">${w(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ue(e.G)}\\times${Ue(e.J)}}{${Ue(e.L)}} = \\mathbf{${Ue(V)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', b += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', b += `<p>Termino cruzado ${N("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, b += `<div class="er-eq">${w("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, b += `<div class="er-eq">${w("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, b += `<div class="er-eq">${w("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, b += `<div class="er-eq er-eq-main">${w(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Ue(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, b += "</div></div>", b += '<div class="er-subsec">Resumen de coeficientes:</div>', b += `<div class="er-eq">${w(`\\frac{EA}{L} = \\mathbf{${Ue(U)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Ue(12 * j)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Ue(12 * Z)}}`)}</div>`, b += `<div class="er-eq">${w(`\\frac{GJ}{L} = \\mathbf{${Ue(V)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Ue(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Ue(4 * e.E * e.Iz / e.L)}}`)}</div>`, b += `<div class="er-eq">${w(`\\frac{6EI_z}{L^2} = \\mathbf{${Ue(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Ue(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (b += `<div class="er-subsec">Resultado: ${N("\\mathbf{K}_{local}")} (12x12)</div>`, b += yn(e.kLocal)), b += '<div class="er-section-title">6. Transformacion de coordenadas</div>', b += "<p>Los cosenos directores del eje del elemento:</p>", b += `<div class="er-eq">${w(`l = \\frac{x_j - x_i}{L} = ${Rn(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${Rn(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${Rn(e.n)}`)}</div>`, b += `<div class="er-eq">${w(`D = \\sqrt{l^2 + m^2} = ${Rn(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      b += `<p>Caso especial: elemento vertical (${N(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const he = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      b += `<div class="er-eq">${w(he)}</div>`;
    } else b += `<div class="er-eq">${w("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    b += `<div class="er-eq er-eq-main">${w("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, b += `<div class="er-section-title">7. ${N("\\mathbf{K}_{global}")} = ${N("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, b += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", b += `<div class="er-eq er-eq-main">${w("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (b += yn(e.kGlobal)), b += '<div class="er-section-title">8. Ensamblaje</div>';
    const W = e.elem[0] * 6, G = e.elem[1] * 6;
    if (b += `<div class="er-eq">${w(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${W} \\ldots ${W + 5}]`)}</div>`, b += `<div class="er-eq">${w(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${G} \\ldots ${G + 5}]`)}</div>`, b += `<div class="er-eq">${w("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, b += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', b += `<div class="er-eq">${w("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, b += `<div class="er-eq er-eq-main">${w("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((he) => he !== 0)) {
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
      for (let T = 0; T < 6; T++) b += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${Ue(e.fLocal[T], 3)}</td>`;
      b += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let T = 6; T < 12; T++) b += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${Ue(e.fLocal[T], 3)}</td>`;
      b += "</tr></table>";
    }
    return b;
  }
  function Xl(e) {
    let b = "";
    if (b += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, b += '<table class="er-props">', b += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, b += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, b += `<tr><td>Longitud</td><td><b>${Ue(e.L)}</b></td></tr>`, b += `<tr><td>E</td><td>${Ue(e.E)}</td></tr>`, b += `<tr><td>A</td><td>${Ue(e.A)}</td></tr>`, b += "</table>", e.uGlobal.length > 0) {
      b += '<div class="er-section-title">Desplazamientos</div>';
      const N = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const w of N) b += `<th>${w}</th>`;
      b += "</tr>";
      for (let w = 0; w < e.elem.length; w++) {
        b += `<tr><td>${e.elem[w]}</td>`;
        for (let U = 0; U < 6; U++) {
          const j = e.uGlobal[w * 6 + U];
          b += `<td class="${Math.abs(j) > 1e-10 ? "nz" : ""}">${Ue(j, 6)}</td>`;
        }
        b += "</tr>";
      }
      b += "</table>";
    }
    if (e.fLocal.length > 0 && e.fLocal.some((N) => N !== 0)) {
      b += '<div class="er-section-title">Fuerzas internas</div>';
      const N = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const w of N) b += `<th>${w}</th>`;
      b += "</tr><tr><td>Nodo i</td>";
      for (let w = 0; w < 6; w++) b += `<td class="${Math.abs(e.fLocal[w]) > 1e-10 ? "nz" : ""}">${Ue(e.fLocal[w], 3)}</td>`;
      b += "</tr><tr><td>Nodo j</td>";
      for (let w = 6; w < 12; w++) b += `<td class="${Math.abs(e.fLocal[w]) > 1e-10 ? "nz" : ""}">${Ue(e.fLocal[w], 3)}</td>`;
      b += "</tr></table>";
    }
    return b;
  }
  function Ue(e, b = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(b) : e.toFixed(b);
  }
  function Rn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function yn(e) {
    var _a2;
    const b = e.length, N = Math.min(b, 12);
    let w = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let U = 0; U < N; U++) {
      w += "<tr>";
      for (let j = 0; j < N; j++) {
        const Z = ((_a2 = e[U]) == null ? void 0 : _a2[j]) ?? 0, V = Math.abs(Z) < 1e-10;
        w += `<td class="${V ? "z" : ""} ${U === j && !V ? "diag" : ""}">${V ? "0" : Kl(Z)}</td>`;
      }
      w += "</tr>";
    }
    return w += "</table>", b > N && (w += `<div style="color:var(--fem-label);font-size:9px">(${N}\xD7${N} de ${b}\xD7${b})</div>`), w += "</div>", w;
  }
  function Kl(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function ys(e) {
    const b = e.getContext("2d");
    if (!b) return;
    const N = e.width, w = e.height, U = 30, j = N - 2 * U, Z = (w - 3 * U) / 2;
    b.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", b.fillRect(0, 0, N, w);
    const V = (W, G, he) => {
      b.strokeStyle = "#333", b.lineWidth = 1, b.strokeRect(U, W, j, Z), b.strokeStyle = "#444", b.beginPath(), b.moveTo(U, W + Z / 2), b.lineTo(U + j, W + Z / 2), b.stroke(), b.fillStyle = "#888", b.font = "11px sans-serif", b.fillText(G, U + 4, W + 14);
      for (const J of he) {
        b.strokeStyle = J.color, b.lineWidth = 2.5, b.beginPath();
        for (let $e = 0; $e <= 100; $e++) {
          const de = $e / 100, re = U + de * j, ne = W + Z / 2 - J.fn(de) * (Z / 2 * 0.85);
          $e === 0 ? b.moveTo(re, ne) : b.lineTo(re, ne);
        }
        b.stroke();
      }
      let T = U + j - 90;
      for (const J of he) b.fillStyle = J.color, b.font = "bold 10px sans-serif", b.fillText(J.label, T, W + Z - 6), T += 36;
      b.fillStyle = "#666", b.font = "9px monospace", b.fillText("0", U, W + Z + 12), b.fillText("1", U + j - 6, W + Z + 12), b.fillText("\u03BE", U + j / 2, W + Z + 12);
    };
    V(U, "Axial (lineal)", [
      {
        fn: (W) => 1 - W,
        color: "#ff6600",
        label: "N\u2081"
      },
      {
        fn: (W) => W,
        color: "#00ccff",
        label: "N\u2082"
      }
    ]), V(U + Z + U, "Flexi\xF3n (Hermite c\xFAbicos)", [
      {
        fn: (W) => 1 - 3 * W * W + 2 * W * W * W,
        color: "#ff6600",
        label: "H\u2081"
      },
      {
        fn: (W) => W * (1 - W) * (1 - W),
        color: "#ffcc00",
        label: "H\u2082"
      },
      {
        fn: (W) => 3 * W * W - 2 * W * W * W,
        color: "#00ccff",
        label: "H\u2083"
      },
      {
        fn: (W) => W * W * (W - 1),
        color: "#00ff66",
        label: "H\u2084"
      }
    ]);
  }
  const Zl = `<style>
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
</style>`, xn = [
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
  let _n = false, Jo = null, bo = null, Jt = null, Nt = null;
  function Ql() {
    Nt = document.createElement("button"), Nt.id = "help-tour-btn", Nt.innerHTML = "?", Nt.title = "Ayuda interactiva \u2014 Tour guiado";
    let e = false;
    const b = (w) => {
      Nt.style.cssText = w ? "width:20px;height:20px;border-radius:50%;background:#555;color:#aaa;border:1px solid #777;font-size:10px;cursor:pointer;opacity:0.5;transition:all 0.2s;" : "width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:2px solid rgba(255,255,255,0.3);font-size:18px;font-weight:bold;cursor:pointer;box-shadow:0 2px 10px rgba(0,102,204,0.3);transition:all 0.2s;font-family:'Arial Nova',sans-serif;";
    };
    b(false), Nt.addEventListener("contextmenu", (w) => {
      w.preventDefault(), e = !e, b(e), Nt.innerHTML = "?";
    }), Nt.addEventListener("mouseenter", () => {
      Nt.style.transform = "scale(1.15)", Nt.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), Nt.addEventListener("mouseleave", () => {
      Nt.style.transform = "scale(1)", Nt.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), Nt.addEventListener("click", () => {
      _n ? Ss() : ei();
    });
    const N = document.createElement("style");
    return N.textContent = `
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
  `, document.head.appendChild(N), Nt;
  }
  function ei() {
    _n = true, Nt && (Nt.innerHTML = "\u2715", Nt.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", Nt.style.animation = "none"), Jo = document.createElement("div"), Jo.id = "tour-overlay", Jo.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(Jo), ln(0);
  }
  function Ss() {
    _n = false, Nt && (Nt.innerHTML = "?", Nt.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", Nt.style.animation = "helpPulse 2s infinite"), bo && (bo.remove(), bo = null), Jt && (Jt.remove(), Jt = null), Jo && (Jo.remove(), Jo = null);
  }
  function ln(e) {
    var _a2, _b;
    if (e >= xn.length) {
      ti();
      return;
    }
    const b = xn[e], N = document.querySelector(b.selector);
    if (!N) {
      ln(e + 1);
      return;
    }
    N.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), bo && bo.remove(), Jt && Jt.remove();
    const w = N.getBoundingClientRect(), U = window.innerWidth, j = window.innerHeight, Z = 320, V = 180;
    bo = document.createElement("div"), bo.style.cssText = `
    position: fixed;
    left: ${w.left - 6}px; top: ${w.top - 6}px;
    width: ${w.width + 12}px; height: ${w.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(bo);
    const W = U - w.right, G = w.left, he = j - w.bottom, T = w.top;
    let J = b.position || "bottom";
    J === "bottom" && he < V + 20 && (J = "top"), J === "top" && T < V + 20 && (J = "right"), J === "right" && W < Z + 20 && (J = "left"), J === "left" && G < Z + 20 && (J = "bottom");
    let $e, de, re = "";
    switch (J) {
      case "bottom":
        $e = w.left + w.width / 2 - Z / 2, de = w.bottom + 14, re = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        $e = w.left + w.width / 2 - Z / 2, de = w.top - V - 14, re = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        $e = w.right + 14, de = w.top + w.height / 2 - V / 2, re = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        $e = w.left - Z - 14, de = w.top + w.height / 2 - V / 2, re = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    $e = Math.max(10, Math.min($e, U - Z - 10)), de = Math.max(10, Math.min(de, j - V - 10)), Jt = document.createElement("div"), Jt.style.cssText = `
    position: fixed;
    left: ${$e}px; top: ${de}px;
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
  `, Jt.innerHTML = `
    <div style="${re}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${b.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${xn.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${b.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < xn.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${xn.map((_, B) => `<div style="width:${B === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${B === e ? "#0099ff" : B < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Jt), (_a2 = Jt.querySelector("#tour-next")) == null ? void 0 : _a2.addEventListener("click", () => {
      ln(e + 1);
    }), (_b = Jt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      ln(e - 1);
    });
    const ne = (_) => {
      if (!_n) {
        document.removeEventListener("keydown", ne);
        return;
      }
      (_.key === "ArrowRight" || _.key === "Enter") && (ln(e + 1), document.removeEventListener("keydown", ne)), _.key === "ArrowLeft" && (ln(Math.max(0, e - 1)), document.removeEventListener("keydown", ne)), _.key === "Escape" && (Ss(), document.removeEventListener("keydown", ne));
    };
    document.addEventListener("keydown", ne);
  }
  function ti() {
    var _a2;
    bo && (bo.remove(), bo = null), Jt && (Jt.remove(), Jt = null), Jt = document.createElement("div"), Jt.style.cssText = `
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
  `, Jt.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(Jt), (_a2 = Jt.querySelector("#tour-done")) == null ? void 0 : _a2.addEventListener("click", () => Ss());
  }
  function oi(e) {
    var _a2;
    const b = e.split(/\r?\n/), N = {
      force: "TONF",
      length: "M"
    }, w = [], U = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), V = [], W = [], G = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), T = [], J = [];
    let $e = "", de = "";
    const re = /* @__PURE__ */ new Map();
    for (const Re of b) {
      const De = Re.trim();
      if (!De || De.startsWith("$")) {
        De.startsWith("$ ") && (de = De.substring(2).trim());
        continue;
      }
      if (de && (re.has(de) || re.set(de, []), re.get(de).push(Re)), de === "CONTROLS") {
        const xe = De.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        xe && (N.force = xe[1], N.length = xe[2]);
        const Fe = De.match(/TITLE2\s+"([^"]+)"/);
        Fe && ($e = Fe[1]);
      }
      if (de === "STORIES - IN SEQUENCE FROM TOP") {
        const xe = De.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (xe) {
          const Fe = xe[1], ve = xe[2] ? parseFloat(xe[2]) : 0, ze = xe[3] ? parseFloat(xe[3]) : void 0;
          w.push({
            name: Fe,
            height: ve,
            elev: ze ?? 0
          });
        }
      }
      if (de === "MATERIAL PROPERTIES") {
        const xe = De.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (xe) {
          const Fe = xe[1];
          U.has(Fe) || U.set(Fe, {
            type: xe[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const ve = U.get(Fe);
          xe[2] && (ve.type = xe[2]);
          const ze = De.match(/\bE\s+([\d.eE+-]+)/);
          ze && (ve.E = parseFloat(ze[1]));
          const Ve = De.match(/\bU\s+([\d.eE+-]+)/);
          Ve && (ve.nu = parseFloat(Ve[1]), ve.G = ve.E / (2 * (1 + ve.nu)));
          const Be = De.match(/\bFY\s+([\d.eE+-]+)/);
          Be && (ve.fy = parseFloat(Be[1]));
          const ft = De.match(/\bFC\s+([\d.eE+-]+)/);
          ft && (ve.fc = parseFloat(ft[1]));
          const vt = De.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          vt && (ve.density = parseFloat(vt[1]));
        }
      }
      if (de === "FRAME SECTIONS") {
        const xe = De.match(/FRAMESECTION\s+"([^"]+)"/);
        if (xe) {
          const Fe = xe[1];
          j.has(Fe) || j.set(Fe, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const ve = j.get(Fe), ze = De.match(/MATERIAL\s+"([^"]+)"/);
          ze && (ve.material = ze[1]);
          const Ve = De.match(/SHAPE\s+"([^"]+)"/);
          Ve && (ve.shape = Ve[1]);
          const Be = De.match(/\bD\s+([\d.eE+-]+)/);
          Be && (ve.D = parseFloat(Be[1]));
          const ft = De.match(/\bB\s+([\d.eE+-]+)/);
          ft && (ve.B = parseFloat(ft[1]));
          const vt = De.match(/\bTF\s+([\d.eE+-]+)/);
          vt && (ve.TF = parseFloat(vt[1]));
          const Je = De.match(/\bTW\s+([\d.eE+-]+)/);
          Je && (ve.TW = parseFloat(Je[1]));
          const Qe = De.match(/\bR\s+([\d.eE+-]+)/);
          Qe && (ve.R = parseFloat(Qe[1]));
          const gt = De.match(/FILLMATERIAL\s+"([^"]+)"/);
          gt && (ve.fillMaterial = gt[1]);
          const pt = De.match(/I2MOD\s+([\d.eE+-]+)/);
          pt && (ve.modI2 = parseFloat(pt[1]));
          const $t = De.match(/I3MOD\s+([\d.eE+-]+)/);
          $t && (ve.modI3 = parseFloat($t[1]));
        }
      }
      if (de === "POINT COORDINATES") {
        const xe = De.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        xe && Z.set(xe[1], [
          parseFloat(xe[2]),
          parseFloat(xe[3])
        ]);
      }
      if (de === "LINE CONNECTIVITIES") {
        const xe = De.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        xe && V.push({
          name: xe[1],
          type: xe[2],
          pt1: xe[3],
          pt2: xe[4],
          nStories: parseInt(xe[5])
        });
      }
      if (de === "POINT ASSIGNS") {
        const xe = De.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        xe && G.set(`${xe[1]}@${xe[2]}`, xe[3].split(/\s+/));
      }
      if (de === "LINE ASSIGNS") {
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
      if (de === "GRIDS") {
        const xe = De.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        xe && J.push({
          label: xe[1],
          dir: xe[2],
          coord: parseFloat(xe[3])
        });
      }
      if (de === "FRAME OBJECT LOADS") {
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
      if (de === "AREA CONNECTIVITIES") {
        const xe = De.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (xe) {
          const Fe = ((_a2 = xe[2].match(/"([^"]+)"/g)) == null ? void 0 : _a2.map((ve) => ve.replace(/"/g, ""))) || [];
          W.push({
            name: xe[1],
            pts: Fe,
            nStories: 0
          });
        }
      }
    }
    const ne = /* @__PURE__ */ new Map();
    if (w.length > 0) {
      const Re = w.length - 1;
      ne.set(w[Re].name, w[Re].elev);
      for (let De = Re - 1; De >= 0; De--) {
        const Fe = ne.get(w[De + 1].name) + w[De].height;
        w[De].elev = Fe, ne.set(w[De].name, Fe);
      }
    }
    const _ = [], B = [], Y = /* @__PURE__ */ new Map(), pe = (Re, De) => `${Re}@${De}`, we = /* @__PURE__ */ new Set(), Ae = /* @__PURE__ */ new Map();
    for (const Re of V) Ae.set(Re.name, Re);
    for (const Re of V) for (const [De, xe] of he) {
      if (!De.startsWith(Re.name + "@")) continue;
      const Fe = xe.story, ve = w.findIndex((ze) => ze.name === Fe);
      if (!(ve < 0)) if (Re.type === "COLUMN" || Re.type === "BRACE") {
        we.add(pe(Re.pt2, Fe));
        const ze = Math.max(Re.nStories, 1), Ve = Math.min(ve + ze, w.length - 1);
        we.add(pe(Re.pt1, w[Ve].name));
      } else we.add(pe(Re.pt1, Fe)), we.add(pe(Re.pt2, Fe));
    }
    for (const [Re] of G) we.add(Re);
    for (const Re of we) {
      const [De, xe] = Re.split("@"), Fe = Z.get(De), ve = ne.get(xe);
      Fe === void 0 || ve === void 0 || (_.push([
        Fe[0],
        Fe[1],
        ve
      ]), B.push(Re), Y.set(Re, _.length - 1));
    }
    const Ke = [], ye = [], Ge = [], Ye = [], be = /* @__PURE__ */ new Map();
    for (const Re of V) for (const [De, xe] of he) {
      if (!De.startsWith(Re.name + "@")) continue;
      const Fe = xe.story, ve = w.findIndex((Je) => Je.name === Fe);
      if (ve < 0) continue;
      let ze, Ve;
      if (Re.type === "COLUMN" || Re.type === "BRACE") {
        const Je = Math.max(Re.nStories, 1), Qe = Math.min(ve + Je, w.length - 1);
        ze = pe(Re.pt1, w[Qe].name), Ve = pe(Re.pt2, Fe);
      } else ze = pe(Re.pt1, Fe), Ve = pe(Re.pt2, Fe);
      const Be = Y.get(ze), ft = Y.get(Ve);
      if (Be === void 0 || ft === void 0 || Be === ft) continue;
      const vt = Ke.length;
      if (Ke.push([
        Be,
        ft
      ]), ye.push(Re.name), Ge.push(Re.type), Ye.push(Fe), be.set(vt, xe.section), xe.rigidZone > 0 && dt.set(vt, [
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
        for (const gt of xe.releases) {
          const pt = Qe[gt];
          pt !== void 0 && (Je[pt] = true);
        }
        mt.set(vt, Je);
      }
    }
    const Te = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), Xe = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), Ze = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), qt = /* @__PURE__ */ new Map(), Ht = /* @__PURE__ */ new Map(), wt = /* @__PURE__ */ new Map();
    for (const [Re, De] of be) {
      const xe = j.get(De);
      if (!xe) continue;
      const Fe = U.get(xe.material);
      Fe && (Te.set(Re, Fe.E), Ce.set(Re, Fe.G));
      const ve = xe.D, ze = xe.B, Ve = xe.TF, Be = xe.TW;
      let ft = 0, vt = 0, Je = 0, Qe = 0, gt = 0, pt = 0, $t = "rect";
      switch (xe.shape) {
        case "Concrete Rectangular":
          ft = ve * ze, vt = ze * ve ** 3 / 12, Je = ve * ze ** 3 / 12, Qe = ze * ve ** 3 * (1 / 3 - 0.21 * (ve / ze) * (1 - ve ** 4 / (12 * ze ** 4))), gt = pt = 5 / 6 * ft, $t = "rect";
          break;
        case "Concrete Circle":
          ft = Math.PI * ve ** 2 / 4, vt = Je = Math.PI * ve ** 4 / 64, Qe = Math.PI * ve ** 4 / 32, gt = pt = 0.9 * ft, $t = "circ";
          break;
        case "Steel I/Wide Flange":
          ft = 2 * ze * Ve + (ve - 2 * Ve) * Be, vt = (ze * ve ** 3 - (ze - Be) * (ve - 2 * Ve) ** 3) / 12, Je = (2 * Ve * ze ** 3 + (ve - 2 * Ve) * Be ** 3) / 12, Qe = (2 * ze * Ve ** 3 + (ve - 2 * Ve) * Be ** 3) / 3, gt = (ve - 2 * Ve) * Be, pt = 2 * ze * Ve * 5 / 6, $t = "I";
          break;
        case "Steel Tube":
          ft = ve * ze - (ve - 2 * Be) * (ze - 2 * Be), vt = (ze * ve ** 3 - (ze - 2 * Be) * (ve - 2 * Be) ** 3) / 12, Je = (ve * ze ** 3 - (ve - 2 * Be) * (ze - 2 * Be) ** 3) / 12, Qe = 2 * Be * (ve - Be) * (ze - Be) * ((ve - Be) * (ze - Be)) / (ve - Be + (ze - Be)), gt = 2 * ve * Be, pt = 2 * ze * Be, $t = "HSS";
          break;
        case "Filled Steel Tube":
          ft = ve * ze, vt = ze * ve ** 3 / 12, Je = ve * ze ** 3 / 12, Qe = 2 * Be * (ve - Be) * (ze - Be) * ((ve - Be) * (ze - Be)) / (ve - Be + (ze - Be)), gt = 2 * ve * Be + 5 / 6 * (ve - 2 * Be) * (ze - 2 * Be), pt = 2 * ze * Be + 5 / 6 * (ve - 2 * Be) * (ze - 2 * Be), $t = "CFT";
          break;
        case "Steel Angle": {
          const Vt = Ve || Be;
          ft = Vt * (ve + ze - Vt), vt = Vt * (ve ** 3 + ze * Vt ** 2 + Vt ** 2 * (ve - Vt)) / 12, Je = Vt * (ze ** 3 + ve * Vt ** 2 + Vt ** 2 * (ze - Vt)) / 12, Qe = (ve + ze - Vt) * Vt ** 3 / 3, gt = ve * Vt, pt = ze * Vt, $t = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          ft = 2 * ze * Ve + (ve - 2 * Ve) * Be, vt = (Be * ve ** 3 + 2 * ze * Ve * (ve - Ve) ** 2) / 12, Je = (2 * Ve * ze ** 3 + (ve - 2 * Ve) * Be ** 3) / 12, Qe = (2 * ze * Ve ** 3 + (ve - 2 * Ve) * Be ** 3) / 3, gt = (ve - 2 * Ve) * Be, pt = 2 * ze * Ve * 5 / 6, $t = xe.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          ft = 2 * (2 * ze * Ve + (ve - 2 * Ve) * Be), vt = 2 * (Be * ve ** 3 + 2 * ze * Ve * (ve - Ve) ** 2) / 12, Je = 2 * (2 * Ve * ze ** 3 + (ve - 2 * Ve) * Be ** 3) / 12, Qe = 2 * (2 * ze * Ve ** 3 + (ve - 2 * Ve) * Be ** 3) / 3, gt = 2 * (ve - 2 * Ve) * Be, pt = 4 * ze * Ve * 5 / 6, $t = "2C";
          break;
        default:
          ve > 0 && ze > 0 && (ft = ve * ze, vt = ze * ve ** 3 / 12, Je = ve * ze ** 3 / 12, Qe = Math.min(ve, ze) * Math.max(ve, ze) ** 3 / 3 * 0.3, gt = pt = 5 / 6 * ft);
          break;
      }
      xe.modI2 && (Je *= xe.modI2), xe.modI3 && (vt *= xe.modI3), Xe.set(Re, ft), Tt.set(Re, vt), qt.set(Re, Je), Ht.set(Re, Qe), gt > 0 && ct.set(Re, gt), pt > 0 && Ze.set(Re, pt), wt.set(Re, {
        type: $t,
        b: ze || void 0,
        h: ve || void 0,
        d: $t === "circ" || $t === "pipe" ? ve : void 0,
        tw: Be || void 0,
        tf: Ve || void 0,
        r: xe.R,
        name: De
      });
    }
    const xt = /* @__PURE__ */ new Map();
    for (const [Re, De] of G) {
      const xe = Y.get(Re);
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
      xt.set(xe, Fe);
    }
    const ho = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map();
    for (let Re = 0; Re < ye.length; Re++) _e.set(`${ye[Re]}@${Ye[Re]}`, Re);
    for (const Re of T) {
      const De = _e.get(`${Re.line}@${Re.story}`);
      if (De === void 0) continue;
      const [xe, Fe] = Ke[De], ve = _[xe], ze = _[Fe], Ve = Math.sqrt((ze[0] - ve[0]) ** 2 + (ze[1] - ve[1]) ** 2 + (ze[2] - ve[2]) ** 2);
      if (Ve < 1e-10) continue;
      const Be = Re.val * Ve / 2;
      let ft = 0, vt = 0, Je = 0;
      Re.dir === "GRAV" || Re.dir === "GRAVITY" ? Je = -Be : Re.dir === "X" ? ft = Be : Re.dir === "Y" ? vt = Be : Re.dir === "Z" && (Je = -Be);
      for (const Qe of [
        xe,
        Fe
      ]) {
        const gt = ho.get(Qe) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        gt[0] += ft, gt[1] += vt, gt[2] += Je, ho.set(Qe, gt);
      }
    }
    const St = /* @__PURE__ */ new Map();
    for (const [Re, De] of be) {
      const xe = j.get(De);
      if (!xe) continue;
      const Fe = U.get(xe.material);
      (Fe == null ? void 0 : Fe.density) && St.set(Re, Fe.density);
    }
    return {
      units: N,
      stories: w.reverse(),
      materials: U,
      frameSections: j,
      nodes: _,
      nodeNames: B,
      nodeNameToIdx: Y,
      elements: Ke,
      elementNames: ye,
      elementTypes: Ge,
      elementStories: Ye,
      elementSections: be,
      nodeInputs: {
        supports: xt,
        loads: ho
      },
      elementInputs: {
        elasticities: Te,
        shearModuli: Ce,
        areas: Xe,
        momentsOfInertiaZ: Tt,
        momentsOfInertiaY: qt,
        torsionalConstants: Ht,
        shearAreasY: ct,
        shearAreasZ: Ze,
        rigidOffsets: dt,
        momentReleases: mt,
        densities: St,
        sectionShapes: wt
      },
      sectionShapes: wt,
      grids: J,
      info: {
        nNodes: _.length,
        nFrames: Ke.length,
        nAreas: W.length,
        title: $e
      },
      rawSections: re
    };
  }
  function it(e) {
    return e && parseFloat(e) || 0;
  }
  function Pa(e) {
    const b = /* @__PURE__ */ new Map(), N = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
    let w;
    for (; (w = N.exec(e)) !== null; ) b.set(w[1], w[2] !== void 0 ? w[2] : w[3]);
    return b;
  }
  function ni(e) {
    const b = e.split(/\r?\n/);
    return b.some((w) => w.trim().startsWith("TABLE:")) ? si(b) : ai(b);
  }
  function si(e) {
    var _a2, _b, _c, _d, _e, _f;
    const b = [];
    let N = "";
    for (const ne of e) {
      const _ = ne.trimEnd();
      _.endsWith("_") ? N += _.slice(0, -1) + " " : (N += _, b.push(N), N = "");
    }
    N && b.push(N);
    const w = {
      force: "KN",
      length: "m"
    };
    let U = "UX,UY,UZ,RX,RY,RZ";
    const j = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), G = [], he = [], T = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map(), de = [];
    let re = "";
    for (const ne of b) {
      const _ = ne.trim();
      if (!_ || _.startsWith(";") || _.startsWith("File ")) continue;
      if (_.startsWith("TABLE:")) {
        const Y = _.match(/TABLE:\s+"(.+?)"/);
        re = Y ? Y[1].toUpperCase() : "";
        continue;
      }
      if (_ === "END TABLE DATA") {
        re = "";
        continue;
      }
      const B = Pa(_);
      switch (re) {
        case "PROGRAM CONTROL": {
          const Y = B.get("CurrUnits");
          if (Y) {
            const pe = Y.split(",").map((we) => we.trim());
            pe[0] && (w.force = pe[0]), pe[1] && (w.length = pe[1]);
          }
          break;
        }
        case "MATERIAL PROPERTIES 01 - GENERAL": {
          const Y = B.get("Material");
          Y && !j.has(Y) && j.set(Y, {
            E: 0,
            nu: 0,
            G: 0
          });
          break;
        }
        case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
          const Y = B.get("Material");
          if (Y) {
            const pe = j.get(Y) || {
              E: 0,
              nu: 0,
              G: 0
            };
            pe.E = it(B.get("E1")), pe.G = it(B.get("G12")), pe.nu = it(B.get("U12")), pe.density = it(B.get("UnitMass")), j.set(Y, pe);
          }
          break;
        }
        case "MATERIAL PROPERTIES 03A - STEEL DATA": {
          const Y = B.get("Material");
          Y && j.has(Y) && (j.get(Y).fy = it(B.get("Fy")));
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
            const pe = it(B.get("XorR")), we = it(B.get("Y")), Ae = it(B.get("Z"));
            W.set(Y, [
              pe,
              we,
              Ae
            ]);
          }
          break;
        }
        case "CONNECTIVITY - FRAME": {
          const Y = B.get("Frame"), pe = B.get("JointI"), we = B.get("JointJ");
          Y && pe && we && G.push({
            name: Y,
            j1: pe,
            j2: we
          });
          break;
        }
        case "CONNECTIVITY - AREA": {
          const Y = B.get("Area");
          if (Y) {
            const pe = parseInt(B.get("NumJoints") || "4"), we = [];
            for (let Ae = 1; Ae <= pe; Ae++) {
              const Ke = B.get(`Joint${Ae}`);
              Ke && we.push(Ke);
            }
            we.length >= 3 && he.push({
              name: Y,
              joints: we
            });
          }
          break;
        }
        case "JOINT RESTRAINT ASSIGNMENTS": {
          const Y = B.get("Joint");
          if (Y) {
            const pe = [
              ((_a2 = B.get("U1")) == null ? void 0 : _a2.toLowerCase()) === "yes",
              ((_b = B.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes",
              ((_c = B.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes",
              ((_d = B.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes",
              ((_e = B.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes",
              ((_f = B.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"
            ];
            T.set(Y, pe);
          }
          break;
        }
        case "FRAME SECTION ASSIGNMENTS": {
          const Y = B.get("Frame"), pe = B.get("AnalSect");
          Y && pe && J.set(Y, pe);
          break;
        }
        case "AREA SECTION ASSIGNMENTS": {
          const Y = B.get("Area"), pe = B.get("Section");
          Y && pe && $e.set(Y, pe);
          break;
        }
        case "JOINT LOADS - FORCE": {
          const Y = B.get("Joint");
          Y && de.push({
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
    return Oa(w, U, j, Z, V, W, G, he, T, J, $e, de);
  }
  function ai(e) {
    const b = {
      force: "KN",
      length: "m"
    };
    let N = "UX,UY,UZ,RX,RY,RZ";
    const w = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), V = [], W = [], G = /* @__PURE__ */ new Map(), he = [];
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
      const _ = Pa(ne), B = ne.split(/\s+/);
      switch (T) {
        case "SYSTEM": {
          const Y = _.get("DOF");
          Y && (N = Y);
          const pe = _.get("LENGTH");
          pe && (b.length = pe);
          const we = _.get("FORCE");
          we && (b.force = we);
          break;
        }
        case "JOINT": {
          const Y = B[0];
          Z.set(Y, [
            it(_.get("X")),
            it(_.get("Y")),
            it(_.get("Z"))
          ]);
          break;
        }
        case "RESTRAINT": {
          const Y = _.get("ADD"), pe = _.get("DOF");
          if (Y && pe) {
            const we = pe.split(","), Ae = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            for (const Ke of we) {
              const ye = Ke.toUpperCase();
              (ye === "UX" || ye === "U1") && (Ae[0] = true), (ye === "UY" || ye === "U2") && (Ae[1] = true), (ye === "UZ" || ye === "U3") && (Ae[2] = true), (ye === "RX" || ye === "R1") && (Ae[3] = true), (ye === "RY" || ye === "R2") && (Ae[4] = true), (ye === "RZ" || ye === "R3") && (Ae[5] = true);
            }
            G.set(Y, Ae);
          }
          break;
        }
        case "MATERIAL": {
          const Y = _.get("NAME");
          if (Y) J = Y, w.set(Y, {
            E: 0,
            nu: 0,
            G: 0
          });
          else if (J) {
            const pe = w.get(J), we = _.get("E");
            we && (pe.E = it(we));
            const Ae = _.get("U");
            Ae && (pe.nu = it(Ae)), pe.G = pe.E / (2 * (1 + pe.nu));
            const Ke = _.get("M");
            Ke && (pe.density = it(Ke));
          }
          break;
        }
        case "SHELL": {
          const Y = B[0], pe = _.get("J");
          _.get("SEC"), pe && W.push({
            name: Y,
            joints: pe.split(",")
          });
          break;
        }
        case "SHELL SECTION": {
          const Y = _.get("NAME");
          Y && j.set(Y, {
            material: _.get("MAT") || "",
            type: _.get("TYPE") || "Shell",
            thickness: it(_.get("TH"))
          });
          break;
        }
        case "FRAME": {
          const Y = B[0], pe = _.get("J");
          if (pe) {
            const we = pe.split(",");
            we.length >= 2 && V.push({
              name: Y,
              j1: we[0],
              j2: we[1]
            });
          }
          break;
        }
        case "LOAD": {
          const Y = _.get("ADD");
          Y && he.push({
            joint: Y,
            fx: it(_.get("UX")),
            fy: it(_.get("UY")),
            fz: it(_.get("UZ")),
            mx: it(_.get("MX")),
            my: it(_.get("MY")),
            mz: it(_.get("MZ"))
          });
          break;
        }
      }
    }
    return Oa(b, N, w, U, j, Z, V, W, G, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), he);
  }
  function Oa(e, b, N, w, U, j, Z, V, W, G, he, T) {
    var _a2;
    const J = [], $e = /* @__PURE__ */ new Map(), de = [];
    for (const [ye, Ge] of j) $e.set(ye, de.length), J.push(ye), de.push(Ge);
    const re = [], ne = [], _ = /* @__PURE__ */ new Map();
    for (const ye of Z) {
      const Ge = $e.get(ye.j1), Ye = $e.get(ye.j2);
      if (Ge !== void 0 && Ye !== void 0) {
        const be = re.length;
        re.push([
          Ge,
          Ye
        ]), ne.push(ye.name);
        const Te = G.get(ye.name);
        Te && _.set(be, Te);
      }
    }
    const B = re.length;
    for (const ye of V) {
      const Ge = ye.joints.map((Ye) => $e.get(Ye)).filter((Ye) => Ye !== void 0);
      if (Ge.length >= 3) {
        const Ye = re.length;
        re.push(Ge), ne.push(ye.name);
        const be = he.get(ye.name);
        be && _.set(Ye, be);
      }
    }
    const Y = re.length - B, pe = {
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map(),
      thicknesses: /* @__PURE__ */ new Map(),
      poissonsRatios: /* @__PURE__ */ new Map()
    }, we = /* @__PURE__ */ new Map(), Ae = N.values().next().value || {
      E: 29e3,
      nu: 0.3,
      G: 11153
    };
    for (let ye = 0; ye < re.length; ye++) {
      const Ge = _.get(ye), Ye = Ge ? w.get(Ge) : null, be = Ge ? U.get(Ge) : null;
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
        }, Ce = N.get(Te.material) || Ae, Xe = Ce.E || Ae.E, ct = Ce.nu || 0.3, Ze = Ce.G || Xe / (2 * (1 + ct));
        pe.elasticities.set(ye, Xe), pe.shearModuli.set(ye, Ze), pe.areas.set(ye, Te.A || Te.D * Te.B), pe.momentsOfInertiaZ.set(ye, Te.Iz || Te.B * Te.D ** 3 / 12), pe.momentsOfInertiaY.set(ye, Te.Iy || Te.D * Te.B ** 3 / 12), pe.torsionalConstants.set(ye, Te.J || 0), pe.densities.set(ye, Ce.density || 0), ((_a2 = Te.shape) == null ? void 0 : _a2.includes("Wide Flange")) || Te.shape === "I" ? we.set(ye, {
          type: "I",
          b: Te.B,
          h: Te.D,
          name: Ge || "I-section"
        }) : we.set(ye, {
          type: "rect",
          b: Te.B,
          h: Te.D
        });
      } else if (be) {
        const Te = N.get(be.material) || Ae, Ce = Te.E || Ae.E, Xe = Te.nu || 0.2, ct = Te.G || Ce / (2 * (1 + Xe));
        pe.elasticities.set(ye, Ce), pe.shearModuli.set(ye, ct), pe.thicknesses.set(ye, be.thickness), pe.poissonsRatios.set(ye, Xe), pe.densities.set(ye, Te.density || 0);
      }
    }
    const Ke = {
      supports: /* @__PURE__ */ new Map(),
      forces: /* @__PURE__ */ new Map()
    };
    for (const [ye, Ge] of W) {
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
      materials: N,
      frameSections: w,
      shellSections: U,
      nodes: de,
      nodeNames: J,
      nodeNameToIdx: $e,
      elements: re,
      elementNames: ne,
      elementSections: _,
      nodeInputs: Ke,
      elementInputs: pe,
      sectionShapes: we,
      info: {
        nNodes: de.length,
        nFrames: B,
        nShells: Y,
        title: `SAP2000 (${B} frames, ${Y} shells)`
      }
    };
  }
  function li(e) {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const { nodes: b, elements: N, nodeInputs: w, elementInputs: U } = e, j = e.units || {
      force: "KN",
      length: "m"
    }, Z = e.title || "Awatif Model", V = [], W = (_) => V.push(_), G = () => V.push(" ");
    W(`File ${Z}.$2k was saved on m/d/yy at h:mm:ss`), G(), W('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), W("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), G();
    const he = [], T = [];
    if (N.forEach((_, B) => {
      _.length === 2 ? he.push(B) : T.push(B);
    }), he.length > 0) {
      W('TABLE:  "CONNECTIVITY - FRAME"');
      for (const _ of he) {
        const B = N[_];
        W(`   Frame=${_ + 1}   JointI=${B[0] + 1}   JointJ=${B[1] + 1}   IsCurved=No`);
      }
      G();
    }
    if (T.length > 0) {
      W('TABLE:  "CONNECTIVITY - AREA"');
      for (const _ of T) {
        const B = N[_], Y = B.map((pe, we) => `Joint${we + 1}=${pe + 1}`).join("   ");
        W(`   Area=${_ + 1}   NumJoints=${B.length}   ${Y}`);
      }
      G();
    }
    W('TABLE:  "COORDINATE SYSTEMS"'), W("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), G(), W('TABLE:  "DATABASE FORMAT TYPES"'), W("   UnitsCurr=Yes   OverrideE=No"), G();
    const J = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map();
    for (const _ of he) {
      const B = ((_a2 = U.areas) == null ? void 0 : _a2.get(_)) || 0, Y = ((_b = U.momentsOfInertiaZ) == null ? void 0 : _b.get(_)) || 0, pe = ((_c = U.momentsOfInertiaY) == null ? void 0 : _c.get(_)) || 0, we = ((_d = U.torsionalConstants) == null ? void 0 : _d.get(_)) || 0, Ae = ((_e = U.elasticities) == null ? void 0 : _e.get(_)) || 0, Ke = `MAT_${Math.round(Ae)}`, ye = `A${B.toPrecision(6)}_Iz${Y.toPrecision(6)}`;
      if (!J.has(ye)) {
        let Ye = 0.3, be = 0.3;
        B > 0 && Y > 0 && (Ye = Math.sqrt(12 * Y / B), be = B / Ye), J.set(ye, {
          A: B,
          Iz: Y,
          Iy: pe,
          J: we,
          b: be,
          h: Ye,
          matKey: Ke
        });
      }
      const Ge = [
        ...J.keys()
      ].indexOf(ye) + 1;
      $e.set(_, `SEC${Ge}`);
    }
    if (he.length > 0) {
      W('TABLE:  "FRAME SECTION ASSIGNMENTS"');
      for (const _ of he) {
        const B = $e.get(_) || "SEC1";
        W(`   Frame=${_ + 1}   AutoSelect=N.A.   AnalSect=${B}   MatProp=Default`);
      }
      G();
    }
    if (J.size > 0) {
      W('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
      let _ = 0;
      for (const [, B] of J) {
        _++;
        const Y = B.A * 5 / 6;
        W(`   SectionName=SEC${_}   Material=${B.matKey}   Shape=Rectangular   t3=${Pt(B.h)}   t2=${Pt(B.b)}   Area=${Pt(B.A)}   TorsConst=${Pt(B.J)}   I33=${Pt(B.Iz)}   I22=${Pt(B.Iy)}   I23=0   AS2=${Pt(Y)}   AS3=${Pt(Y)} _`), W("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
      }
      G();
    }
    const de = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map();
    for (const _ of T) {
      const B = ((_f = U.thicknesses) == null ? void 0 : _f.get(_)) || 0.1, Y = ((_g = U.elasticities) == null ? void 0 : _g.get(_)) || 0, pe = `MAT_${Math.round(Y)}`, we = `t${B.toPrecision(6)}`;
      de.has(we) || de.set(we, {
        t: B,
        matKey: pe
      });
      const Ae = [
        ...de.keys()
      ].indexOf(we) + 1;
      re.set(_, `SSEC${Ae}`);
    }
    if (T.length > 0) {
      W('TABLE:  "AREA SECTION ASSIGNMENTS"');
      for (const B of T) {
        const Y = re.get(B) || "SSEC1";
        W(`   Area=${B + 1}   Section=${Y}   MatProp=Default`);
      }
      G(), W('TABLE:  "AREA SECTION PROPERTIES"');
      let _ = 0;
      for (const [, B] of de) _++, W(`   Section=SSEC${_}   Material=${B.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${Pt(B.t)}   BendThick=${Pt(B.t)}   Color=Cyan`);
      G();
    }
    W('TABLE:  "JOINT COORDINATES"');
    for (let _ = 0; _ < b.length; _++) {
      const B = b[_];
      W(`   Joint=${_ + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${Pt(B[0])}   Y=${Pt(B[1])}   Z=${Pt(B[2])}   SpecialJt=No`);
    }
    if (G(), w.supports && w.supports.size > 0) {
      W('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
      for (const [_, B] of w.supports) {
        if (!B.some((pe) => pe)) continue;
        const Y = (pe) => pe ? "Yes" : "No";
        W(`   Joint=${_ + 1}   U1=${Y(B[0])}   U2=${Y(B[1])}   U3=${Y(B[2])}   R1=${Y(B[3])}   R2=${Y(B[4])}   R3=${Y(B[5])}`);
      }
      G();
    }
    if (W('TABLE:  "LOAD PATTERN DEFINITIONS"'), W("   LoadPat=DEAD   DesignType=Dead   SelfWtMult=0"), G(), W('TABLE:  "LOAD CASE DEFINITIONS"'), W('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), G(), W('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), W('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), G(), w.forces && w.forces.size > 0) {
      W('TABLE:  "JOINT LOADS - FORCE"');
      for (const [_, B] of w.forces) B.some((Y) => Math.abs(Y) > 1e-12) && W(`   Joint=${_ + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${Pt(B[0])}   F2=${Pt(B[1])}   F3=${Pt(B[2])}   M1=${Pt(B[3])}   M2=${Pt(B[4])}   M3=${Pt(B[5])}`);
      G();
    }
    const ne = /* @__PURE__ */ new Map();
    for (let _ = 0; _ < N.length; _++) {
      const B = ((_h = U.elasticities) == null ? void 0 : _h.get(_)) || 0, Y = ((_i = U.shearModuli) == null ? void 0 : _i.get(_)) || 0, pe = B > 0 && Y > 0 ? Math.max(0, Math.min(0.5, B / (2 * Y) - 1)) : 0.2, we = ((_j = U.densities) == null ? void 0 : _j.get(_)) || 0, Ae = `MAT_${Math.round(B)}`;
      ne.has(Ae) || ne.set(Ae, {
        E: B,
        nu: pe,
        G: Y,
        rho: we
      });
    }
    W('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
    for (const [_] of ne) W(`   Material=${_}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
    G(), W('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
    for (const [_, B] of ne) W(`   Material=${_}   UnitWeight=${Pt(B.rho * 9.81)}   UnitMass=${Pt(B.rho)}   E1=${Pt(B.E)}   G12=${Pt(B.G)}   U12=${Pt(B.nu)}   A1=9.9E-06`);
    G(), W('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
    for (const [_] of ne) W(`   Material=${_}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
    return G(), W('TABLE:  "PROGRAM CONTROL"'), W(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${j.force}, ${j.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), G(), W("END TABLE DATA"), W(""), V.join(`\r
`);
  }
  function Pt(e) {
    return e === 0 || Math.abs(e) < 1e-15 ? "0" : Math.abs(e) >= 1e6 || Math.abs(e) < 1e-3 && Math.abs(e) > 0 ? e.toExponential(8) : parseFloat(e.toPrecision(10)).toString();
  }
  function ii(e) {
    const { e2kModel: b } = e, N = b == null ? void 0 : b.rawSections;
    return N && N.size > 0 ? ri(N) : ci(e);
  }
  function ri(e, b) {
    const N = [], w = [
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
    N.push("$ File exported from Awatif FEM Studio (round-trip)"), N.push("");
    for (const U of w) {
      const j = e.get(U);
      if (!(!j || j.length === 0)) {
        N.push(`$ ${U}`);
        for (const Z of j) N.push(Z);
        N.push("");
      }
    }
    for (const [U, j] of e) if (!w.includes(U) && j.length !== 0) {
      N.push(`$ ${U}`);
      for (const Z of j) N.push(Z);
      N.push("");
    }
    return N.push("  END"), N.push("$ END OF MODEL FILE"), N.join(`\r
`);
  }
  function ci(e) {
    var _a2, _b, _c, _d;
    const { nodes: b, elements: N, nodeInputs: w, elementInputs: U, title: j, units: Z } = e, V = (Z == null ? void 0 : Z.force) || "TONF", W = (Z == null ? void 0 : Z.length) || "M", G = [], he = (be) => Math.round(be * 1e4) / 1e4;
    G.push("$ File exported from Awatif FEM Studio"), G.push(""), G.push("$ PROGRAM INFORMATION"), G.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), G.push(""), G.push("$ CONTROLS"), G.push(`  UNITS  "${V}"  "${W}"  "C"  `), j && G.push(`  TITLE2  "${j}"  `), G.push("");
    const T = /* @__PURE__ */ new Set();
    b.forEach((be) => T.add(he(be[1])));
    const J = [
      ...T
    ].sort((be, Te) => be - Te), $e = [], de = /* @__PURE__ */ new Map();
    $e.push("Base"), de.set(J[0], "Base");
    for (let be = 1; be < J.length; be++) {
      const Te = `Level_${be}`;
      $e.push(Te), de.set(J[be], Te);
    }
    G.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let be = J.length - 1; be >= 1; be--) G.push(`  STORY "${$e[be]}"  HEIGHT ${he(J[be] - J[be - 1])} MASTERSTORY "Yes"  `);
    J.length > 0 && G.push(`  STORY "Base"  ELEV ${J[0]} `), G.push(""), N.some((be) => be.length === 4) && (G.push("$ DIAPHRAGM NAMES"), G.push('  DIAPHRAGM "D1"    TYPE RIGID'), G.push("")), G.push("$ MATERIAL PROPERTIES");
    const ne = /* @__PURE__ */ new Set();
    (_a2 = U.elasticities) == null ? void 0 : _a2.forEach((be) => ne.add(be));
    const _ = /* @__PURE__ */ new Map();
    let B = 0;
    for (const be of ne) {
      const Te = `Mat_${++B}`;
      _.set(be, Te), G.push(`  MATERIAL  "${Te}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), G.push(`  MATERIAL  "${Te}"    SYMTYPE "Isotropic"  E ${be}  U 0.2  A 1E-05`);
    }
    G.push(""), G.push("$ FRAME SECTIONS");
    const Y = /* @__PURE__ */ new Set(), pe = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map();
    N.forEach((be, Te) => {
      var _a3, _b2;
      if (be.length !== 2) return;
      const Ce = (_a3 = U.sectionShapes) == null ? void 0 : _a3.get(Te), Xe = ((_b2 = U.elasticities) == null ? void 0 : _b2.get(Te)) ?? 0, ct = _.get(Xe) || "Mat_1", Ze = (Ce == null ? void 0 : Ce.h) ?? 0, dt = (Ce == null ? void 0 : Ce.b) ?? 0, mt = (Ce == null ? void 0 : Ce.d) ?? 0, Tt = (Ce == null ? void 0 : Ce.tf) ?? 0, qt = (Ce == null ? void 0 : Ce.tw) ?? 0, Ht = (Ce == null ? void 0 : Ce.type) || "rect", wt = `${Ht}_${Ze}_${dt}_${mt}_${Tt}_${qt}`;
      (Ce == null ? void 0 : Ce.name) && !we.has(wt) && we.set(wt, Ce.name);
      let xt = we.get(wt);
      if (xt || (Ht === "rect" ? xt = `R${he(dt * 100)}x${he(Ze * 100)}` : Ht === "circ" ? xt = `C_D${he(mt * 100)}` : Ht === "I" ? xt = `I_${he(Ze * 100)}` : xt = `Sec_${Y.size + 1}`, we.set(wt, xt)), pe.set(Te, xt), Y.has(xt)) return;
      Y.add(xt);
      const _e = {
        rect: "Concrete Rectangular",
        circ: "Concrete Circle",
        I: "Steel I/Wide Flange",
        HSS: "Steel Tube",
        pipe: "Steel Pipe",
        L: "Steel Angle",
        C: "Steel Channel",
        "2C": "Steel Double Channel"
      }[Ht] || "Concrete Rectangular";
      let St = `  FRAMESECTION  "${xt}"  MATERIAL "${ct}"  SHAPE "${_e}"`;
      Ze && (St += `  D ${Ze}`), dt && (St += `  B ${dt}`), mt && !Ze && (St += `  D ${mt}`), Tt && (St += `  TF ${Tt}`), qt && (St += `  TW ${qt}`), G.push(St);
    }), G.push("");
    const Ae = /* @__PURE__ */ new Map();
    let Ke = 0;
    b.forEach((be) => {
      const Te = `${he(be[0])},${he(be[2])}`;
      Ae.has(Te) || Ae.set(Te, `${++Ke}`);
    }), G.push("$ POINT COORDINATES");
    for (const [be, Te] of Ae) {
      const [Ce, Xe] = be.split(",").map(Number);
      G.push(`  POINT "${Te}"  ${Ce} ${Xe} `);
    }
    G.push("");
    const ye = (be) => {
      const Te = b[be], Ce = `${he(Te[0])},${he(Te[2])}`;
      return {
        pt: Ae.get(Ce) || "1",
        story: de.get(he(Te[1])) || "Base"
      };
    };
    G.push("$ LINE CONNECTIVITIES");
    const Ge = [];
    N.forEach((be, Te) => {
      if (be.length !== 2) return;
      const Ce = di(b, be), Xe = pe.get(Te) || `Sec_${Te}`;
      if (Ce === "BEAM") {
        const ct = ye(be[0]), Ze = ye(be[1]);
        G.push(`  LINE  "E${Te + 1}"  BEAM  "${ct.pt}"  "${Ze.pt}"  0`), Ge.push(`  LINEASSIGN  "E${Te + 1}"  "${ct.story}"  SECTION "${Xe}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const ct = b[be[0]][1] <= b[be[1]][1] ? be[0] : be[1], Ze = b[be[0]][1] <= b[be[1]][1] ? be[1] : be[0];
        ye(ct);
        const dt = ye(Ze), mt = he(b[ct][1]), Tt = he(b[Ze][1]), qt = J.indexOf(mt), Ht = J.indexOf(Tt), wt = Math.max(1, Ht >= 0 && qt >= 0 ? Ht - qt : 1);
        G.push(`  LINE  "E${Te + 1}"  ${Ce}  "${dt.pt}"  "${dt.pt}"  ${wt}`);
        for (let xt = 0; xt < wt; xt++) {
          const ho = Ht - xt;
          ho >= 0 && ho < $e.length && Ge.push(`  LINEASSIGN  "E${Te + 1}"  "${$e[ho]}"  SECTION "${Xe}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), G.push(""), G.push("$ POINT ASSIGNS"), (_b = w.supports) == null ? void 0 : _b.forEach((be, Te) => {
      const Ce = [];
      if (be[0] && Ce.push("UX"), be[1] && Ce.push("UY"), be[2] && Ce.push("UZ"), be[3] && Ce.push("RX"), be[4] && Ce.push("RY"), be[5] && Ce.push("RZ"), Ce.length > 0) {
        const Xe = ye(Te);
        G.push(`  POINTASSIGN  "${Xe.pt}"  "${Xe.story}"  RESTRAINT "${Ce.join(" ")}"  `);
      }
    }), G.push(""), G.push("$ LINE ASSIGNS"), Ge.forEach((be) => G.push(be)), G.push("");
    const Ye = [];
    if (N.forEach((be, Te) => {
      if (be.length === 4) {
        const Ce = b[be[0]], Xe = b[be[1]], ct = b[be[2]], Ze = [
          Xe[0] - Ce[0],
          Xe[1] - Ce[1],
          Xe[2] - Ce[2]
        ], dt = [
          ct[0] - Ce[0],
          ct[1] - Ce[1],
          ct[2] - Ce[2]
        ], mt = Math.abs(Ze[2] * dt[0] - Ze[0] * dt[2]), Tt = Math.sqrt((Ze[1] * dt[2] - Ze[2] * dt[1]) ** 2 + mt ** 2 + (Ze[0] * dt[1] - Ze[1] * dt[0]) ** 2), qt = Tt > 1e-10 && mt / Tt < 0.5;
        Ye.push({
          idx: Te,
          el: be,
          isWall: qt
        });
      }
    }), Ye.some((be) => !be.isWall)) {
      G.push("$ SLAB PROPERTIES");
      const be = ((_c = U.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
      G.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${_.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${be} `), G.push("");
    }
    if (Ye.some((be) => be.isWall)) {
      G.push("$ WALL PROPERTIES");
      const be = ((_d = U.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
      G.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${_.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${be} `), G.push("");
    }
    if (Ye.length > 0) {
      G.push("$ AREA CONNECTIVITIES");
      const be = [];
      Ye.forEach((Te, Ce) => {
        const { el: Xe, isWall: ct } = Te, Ze = ct ? `W${Ce + 1}` : `F${Ce + 1}`, dt = ct ? "PANEL" : "FLOOR", mt = Xe.map((Tt) => ye(Tt));
        if (ct) {
          const Tt = b[Xe[0]][1] <= b[Xe[2]][1] ? 0 : 2, qt = b[Xe[1]][1] <= b[Xe[3]][1] ? 1 : 3;
          G.push(`  AREA "${Ze}"  ${dt}  4  "${mt[Tt].pt}"  "${mt[qt].pt}"  "${mt[qt].pt}"  "${mt[Tt].pt}"  1  1  0  0  `);
          const Ht = mt[Tt === 0 ? 2 : 0].story;
          be.push(`  AREAASSIGN  "${Ze}"  "${Ht}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
        } else G.push(`  AREA "${Ze}"  ${dt}  4  "${mt[0].pt}"  "${mt[1].pt}"  "${mt[2].pt}"  "${mt[3].pt}"  0  0  0  0  `), be.push(`  AREAASSIGN  "${Ze}"  "${mt[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }), G.push(""), G.push("$ AREA ASSIGNS"), be.forEach((Te) => G.push(Te)), G.push("");
    }
    return G.push("$ LOAD PATTERNS"), G.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), G.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), G.push(""), w.loads && w.loads.size > 0 && (G.push("$ POINT OBJECT LOADS"), w.loads.forEach((be, Te) => {
      const [Ce, Xe, ct] = be, Ze = ye(Te);
      Math.abs(Ce) > 1e-10 && G.push(`  POINTLOAD  "${Ze.pt}"  "${Ze.story}"  "Dead"  TYPE "FORCE"  FX ${Ce}`), Math.abs(Xe) > 1e-10 && G.push(`  POINTLOAD  "${Ze.pt}"  "${Ze.story}"  "Dead"  TYPE "FORCE"  FY ${Xe}`), Math.abs(ct) > 1e-10 && G.push(`  POINTLOAD  "${Ze.pt}"  "${Ze.story}"  "Dead"  TYPE "FORCE"  FZ ${ct}`);
    }), G.push("")), G.push("  END"), G.push("$ END OF MODEL FILE"), G.join(`\r
`);
  }
  function di(e, b) {
    const N = e[b[0]], w = e[b[1]], U = Math.abs(w[1] - N[1]), j = Math.sqrt((w[0] - N[0]) ** 2 + (w[2] - N[2]) ** 2), Z = U > j * 0.5;
    return Z && j > 0.01 ? "BRACE" : Z ? "COLUMN" : "BEAM";
  }
  function pi(e) {
    var _a2, _b;
    const { nodes: b, elements: N, nodeInputs: w, elementInputs: U } = e, j = [];
    return j.push("# OpenSeesPy model exported from Awatif FEM Studio"), j.push(`# ${b.length} nodes, ${N.length} elements`), j.push(""), j.push("import openseespy.opensees as ops"), j.push(""), j.push("ops.wipe()"), j.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), j.push(""), j.push("# --- Nodes ---"), b.forEach((Z, V) => {
      j.push(`ops.node(${V + 1}, ${Z[0]}, ${Z[1]}, ${Z[2]})`);
    }), j.push(""), j.push("# --- Boundary Conditions ---"), (_a2 = w.supports) == null ? void 0 : _a2.forEach((Z, V) => {
      const W = Z.map((G) => G ? 1 : 0).join(", ");
      j.push(`ops.fix(${V + 1}, ${W})`);
    }), j.push(""), j.push("# --- Geometric Transformations ---"), j.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), j.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), j.push(""), j.push("# --- Elements (elasticBeamColumn) ---"), N.forEach((Z, V) => {
      var _a3, _b2, _c, _d, _e, _f;
      if (Z.length !== 2) return;
      const W = b[Z[0]], G = b[Z[1]], T = Math.abs(G[2] - W[2]) > Math.max(Math.abs(G[0] - W[0]), Math.abs(G[1] - W[1])) ? 2 : 1, J = ((_a3 = U.areas) == null ? void 0 : _a3.get(V)) ?? 1, $e = ((_b2 = U.elasticities) == null ? void 0 : _b2.get(V)) ?? 2e5, de = ((_c = U.shearModuli) == null ? void 0 : _c.get(V)) ?? 8e4, re = ((_d = U.torsionalConstants) == null ? void 0 : _d.get(V)) ?? 1, ne = ((_e = U.momentsOfInertiaY) == null ? void 0 : _e.get(V)) ?? 1, _ = ((_f = U.momentsOfInertiaZ) == null ? void 0 : _f.get(V)) ?? 1;
      j.push(`ops.element('elasticBeamColumn', ${V + 1}, ${Z[0] + 1}, ${Z[1] + 1}, ${J}, ${$e}, ${de}, ${re}, ${ne}, ${_}, ${T})`);
    }), j.push(""), w.loads && w.loads.size > 0 && (j.push("# --- Loads ---"), j.push("ops.timeSeries('Linear', 1)"), j.push("ops.pattern('Plain', 1, 1)"), w.loads.forEach((Z, V) => {
      const W = Z.map((G) => G).join(", ");
      j.push(`ops.load(${V + 1}, ${W})`);
    }), j.push("")), j.push("# --- Analysis ---"), j.push("ops.system('BandGeneral')"), j.push("ops.numberer('RCM')"), j.push("ops.constraints('Plain')"), j.push("ops.integrator('LoadControl', 1.0)"), j.push("ops.algorithm('Linear')"), j.push("ops.analysis('Static')"), j.push("ops.analyze(1)"), j.push(""), j.push("# --- Results ---"), j.push('print("\\n=== Displacements ===")'), b.forEach((Z, V) => {
      j.push(`print(f"Node {${V + 1}}: {ops.nodeDisp(${V + 1})}")`);
    }), j.push(""), j.push('print("\\n=== Reactions ===")'), j.push("ops.reactions()"), (_b = w.supports) == null ? void 0 : _b.forEach((Z, V) => {
      j.push(`print(f"Node {${V + 1}}: {ops.nodeReaction(${V + 1})}")`);
    }), j.join(`
`);
  }
  function fi(e) {
    var _a2, _b;
    const { nodes: b, elements: N, nodeInputs: w, elementInputs: U } = e, j = [];
    return j.push("# OpenSees Tcl model exported from Awatif FEM Studio"), j.push(`# ${b.length} nodes, ${N.length} elements`), j.push(""), j.push("wipe"), j.push("model basic -ndm 3 -ndf 6"), j.push(""), j.push("# --- Nodes ---"), b.forEach((Z, V) => {
      j.push(`node ${V + 1} ${Z[0]} ${Z[1]} ${Z[2]}`);
    }), j.push(""), j.push("# --- Boundary Conditions ---"), (_a2 = w.supports) == null ? void 0 : _a2.forEach((Z, V) => {
      const W = Z.map((G) => G ? 1 : 0).join(" ");
      j.push(`fix ${V + 1} ${W}`);
    }), j.push(""), j.push("# --- Geometric Transformations ---"), j.push("geomTransf Linear 1 0.0 0.0 1.0"), j.push("geomTransf Linear 2 -1.0 0.0 0.0"), j.push(""), j.push("# --- Elements ---"), N.forEach((Z, V) => {
      var _a3, _b2, _c, _d, _e, _f;
      if (Z.length !== 2) return;
      const W = b[Z[0]], G = b[Z[1]], T = Math.abs(G[2] - W[2]) > Math.max(Math.abs(G[0] - W[0]), Math.abs(G[1] - W[1])) ? 2 : 1, J = ((_a3 = U.areas) == null ? void 0 : _a3.get(V)) ?? 1, $e = ((_b2 = U.elasticities) == null ? void 0 : _b2.get(V)) ?? 2e5, de = ((_c = U.shearModuli) == null ? void 0 : _c.get(V)) ?? 8e4, re = ((_d = U.torsionalConstants) == null ? void 0 : _d.get(V)) ?? 1, ne = ((_e = U.momentsOfInertiaY) == null ? void 0 : _e.get(V)) ?? 1, _ = ((_f = U.momentsOfInertiaZ) == null ? void 0 : _f.get(V)) ?? 1;
      j.push(`element elasticBeamColumn ${V + 1} ${Z[0] + 1} ${Z[1] + 1} ${J} ${$e} ${de} ${re} ${ne} ${_} ${T}`);
    }), j.push(""), w.loads && w.loads.size > 0 && (j.push("# --- Loads ---"), j.push("timeSeries Linear 1"), j.push("pattern Plain 1 1 {"), w.loads.forEach((Z, V) => {
      const W = Z.map((G) => G).join(" ");
      j.push(`  load ${V + 1} ${W}`);
    }), j.push("}"), j.push("")), j.push("# --- Analysis ---"), j.push("system BandGeneral"), j.push("numberer RCM"), j.push("constraints Plain"), j.push("integrator LoadControl 1.0"), j.push("algorithm Linear"), j.push("analysis Static"), j.push("analyze 1"), j.push(""), j.push("# --- Results ---"), j.push('puts "\\n=== Displacements ==="'), b.forEach((Z, V) => {
      j.push(`puts "Node ${V + 1}: [nodeDisp ${V + 1}]"`);
    }), j.push('puts "\\n=== Reactions ==="'), j.push("reactions"), (_b = w.supports) == null ? void 0 : _b.forEach((Z, V) => {
      j.push(`puts "Node ${V + 1}: [nodeReaction ${V + 1}]"`);
    }), j.join(`
`);
  }
  function ui(e) {
    const b = [], N = [], w = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map();
    for (const $e of e.split(/\r?\n/)) {
      const de = $e.trim(), re = de.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (re) {
        const Y = parseInt(re[1]), pe = b.length;
        b.push([
          parseFloat(re[2]),
          parseFloat(re[3]),
          parseFloat(re[4])
        ]), T.set(Y, pe);
        continue;
      }
      const ne = de.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (ne) {
        const Y = parseInt(ne[1]), pe = T.get(Y);
        pe !== void 0 && w.set(pe, [
          ne[2] === "1",
          ne[3] === "1",
          ne[4] === "1",
          ne[5] === "1",
          ne[6] === "1",
          ne[7] === "1"
        ]);
        continue;
      }
      const _ = de.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (_) {
        const Y = parseInt(_[1]), pe = T.get(parseInt(_[2])), we = T.get(parseInt(_[3]));
        if (pe !== void 0 && we !== void 0) {
          const Ae = N.length;
          N.push([
            pe,
            we
          ]), J.set(Y, Ae), V.set(Ae, parseFloat(_[4])), j.set(Ae, parseFloat(_[5])), Z.set(Ae, parseFloat(_[6])), he.set(Ae, parseFloat(_[7])), W.set(Ae, parseFloat(_[8])), G.set(Ae, parseFloat(_[9]));
        }
        continue;
      }
      const B = de.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (B) {
        const Y = T.get(parseInt(B[1]));
        Y !== void 0 && U.set(Y, [
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
      elements: N,
      nodeInputs: {
        supports: w,
        loads: U
      },
      elementInputs: {
        elasticities: j,
        shearModuli: Z,
        areas: V,
        momentsOfInertiaY: W,
        momentsOfInertiaZ: G,
        torsionalConstants: he
      }
    };
  }
  function mi(e) {
    const b = [], N = [], w = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map();
    for (const J of e.split(/\r?\n/)) {
      const $e = J.trim();
      if ($e.startsWith("#") || $e.startsWith("//")) continue;
      const de = $e.split(/\s+/);
      if (de[0] === "node" && de.length >= 5) {
        const re = parseInt(de[1]), ne = b.length;
        b.push([
          parseFloat(de[2]),
          parseFloat(de[3]),
          parseFloat(de[4])
        ]), T.set(re, ne);
        continue;
      }
      if (de[0] === "fix" && de.length >= 8) {
        const re = T.get(parseInt(de[1]));
        re !== void 0 && w.set(re, [
          de[2] === "1",
          de[3] === "1",
          de[4] === "1",
          de[5] === "1",
          de[6] === "1",
          de[7] === "1"
        ]);
        continue;
      }
      if (de[0] === "element" && de[1] === "elasticBeamColumn" && de.length >= 12) {
        const re = T.get(parseInt(de[3])), ne = T.get(parseInt(de[4]));
        if (re !== void 0 && ne !== void 0) {
          const _ = N.length;
          N.push([
            re,
            ne
          ]), V.set(_, parseFloat(de[5])), j.set(_, parseFloat(de[6])), Z.set(_, parseFloat(de[7])), he.set(_, parseFloat(de[8])), W.set(_, parseFloat(de[9])), G.set(_, parseFloat(de[10]));
        }
        continue;
      }
      if (de[0] === "load" && de.length >= 8) {
        const re = T.get(parseInt(de[1]));
        re !== void 0 && U.set(re, [
          parseFloat(de[2]),
          parseFloat(de[3]),
          parseFloat(de[4]),
          parseFloat(de[5]),
          parseFloat(de[6]),
          parseFloat(de[7])
        ]);
      }
    }
    return {
      nodes: b,
      elements: N,
      nodeInputs: {
        supports: w,
        loads: U
      },
      elementInputs: {
        elasticities: j,
        shearModuli: Z,
        areas: V,
        momentsOfInertiaY: W,
        momentsOfInertiaZ: G,
        torsionalConstants: he
      }
    };
  }
  function no(e) {
    const b = [];
    let N = 0, w = false, U = "";
    for (let j = 0; j < e.length; j++) {
      const Z = e[j];
      if (Z === "'" && (j === 0 || e[j - 1] !== "\\")) {
        w = !w, U += Z;
        continue;
      }
      if (w) {
        U += Z;
        continue;
      }
      if (Z === "(") {
        N++, U += Z;
        continue;
      }
      if (Z === ")") {
        N--, U += Z;
        continue;
      }
      if (Z === "," && N === 0) {
        b.push(U.trim()), U = "";
        continue;
      }
      U += Z;
    }
    return U.trim() && b.push(U.trim()), b;
  }
  function Na(e, b) {
    const N = no(e);
    if (b < N.length) {
      let w = N[b].trim();
      return w.startsWith("'") && w.endsWith("'") && (w = w.slice(1, -1)), w === "$" ? null : w;
    }
    return null;
  }
  function gi(e) {
    const b = {
      schema: "",
      project: "",
      app: ""
    }, N = {}, w = {}, U = e.match(/FILE_SCHEMA\s*\(\s*\(\s*'([^']*)'/i);
    U && (b.schema = U[1]);
    const j = /^#(\d+)\s*=\s*([A-Z][A-Z0-9_]*)\s*\(([\s\S]*?)\)\s*;\s*$/gm;
    let Z;
    for (; (Z = j.exec(e)) !== null; ) {
      const V = parseInt(Z[1]), W = Z[2].toUpperCase();
      N[V] = {
        id: V,
        type: W,
        args: Z[3]
      }, w[W] || (w[W] = []), w[W].push(V);
    }
    if (w.IFCPROJECT) {
      const V = N[w.IFCPROJECT[0]];
      if (V) {
        const W = Na(V.args, 2);
        W && (b.project = W);
      }
    }
    return {
      meta: b,
      entities: N,
      typeIndex: w
    };
  }
  function Zt(e, b) {
    const N = b.match(/#(\d+)/);
    return N && e[parseInt(N[1])] || null;
  }
  function qa(e, b) {
    const N = no(b.args), w = Zt(e, N[0]), U = w ? bi(e, w) : [
      0,
      0,
      0
    ];
    let j = [
      0,
      0,
      1
    ], Z = [
      1,
      0,
      0
    ];
    if (N[1] && N[1] !== "$") {
      const V = Zt(e, N[1]);
      V && (j = Ca(e, V));
    }
    if (N[2] && N[2] !== "$") {
      const V = Zt(e, N[2]);
      V && (Z = Ca(e, V));
    }
    return {
      origin: U,
      dirZ: j,
      dirX: Z
    };
  }
  function bi(e, b) {
    return b.args.replace(/[()]/g, "").split(",").map((w) => parseFloat(w.trim())).filter((w) => !isNaN(w));
  }
  function Ca(e, b) {
    return b.args.replace(/[()]/g, "").split(",").map((w) => parseFloat(w.trim())).filter((w) => !isNaN(w));
  }
  function _a(e, b) {
    const N = no(b.args), w = Zt(e, N[1]);
    let U = {
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
    if (w && (U = qa(e, w)), N[0] && N[0] !== "$") {
      const j = Zt(e, N[0]);
      if (j && j.type === "IFCLOCALPLACEMENT") {
        const Z = _a(e, j), V = Ms(U.origin, Z.dirX, $s(Z.dirZ, Z.dirX), Z.dirZ);
        U.origin = [
          Z.origin[0] + V[0],
          Z.origin[1] + V[1],
          Z.origin[2] + V[2]
        ], U.dirZ = Ms(U.dirZ, Z.dirX, $s(Z.dirZ, Z.dirX), Z.dirZ), U.dirX = Ms(U.dirX, Z.dirX, $s(Z.dirZ, Z.dirX), Z.dirZ);
      }
    }
    return U;
  }
  function $s(e, b) {
    return [
      e[1] * b[2] - e[2] * b[1],
      e[2] * b[0] - e[0] * b[2],
      e[0] * b[1] - e[1] * b[0]
    ];
  }
  function Ms(e, b, N, w) {
    return [
      e[0] * b[0] + e[1] * N[0] + e[2] * w[0],
      e[0] * b[1] + e[1] * N[1] + e[2] * w[1],
      e[0] * b[2] + e[1] * N[2] + e[2] * w[2]
    ];
  }
  const hi = 0.01;
  function xi(e) {
    const b = gi(e), { entities: N, typeIndex: w } = b, U = [], j = [], Z = /* @__PURE__ */ new Map();
    Z.set("Hormigon", {
      E: 2132888792e-2,
      nu: 0.2,
      rho: 2.4
    }), Z.set("Acero", {
      E: 2e8,
      nu: 0.3,
      rho: 7.85
    });
    let V = 0, W = 0;
    function G(ne, _, B) {
      for (const Y of U) {
        const pe = Y.x - ne, we = Y.y - _, Ae = Y.z - B;
        if (Math.sqrt(pe * pe + we * we + Ae * Ae) < hi) return Y.id;
      }
      return U.push({
        id: V,
        x: ne,
        y: _,
        z: B
      }), V++;
    }
    function he(ne) {
      const _ = Na(ne.args, 2) || "", B = w.IFCRELASSOCIATESMATERIAL || [];
      for (const pe of B) {
        const we = N[pe];
        if (!we) continue;
        const Ae = no(we.args);
        if ((Ae[4] || Ae[3] || "").includes(`#${ne.id}`)) {
          const ye = Ae[5] || Ae[4] || "", Ge = Zt(N, ye);
          if (Ge) return T(Ge);
        }
      }
      const Y = _.match(/(\d+)\s*[xX×]\s*(\d+)/);
      return Y ? {
        b: parseFloat(Y[1]) / 100,
        h: parseFloat(Y[2]) / 100,
        name: _
      } : {
        b: 0.3,
        h: 0.3,
        name: _ || "Default"
      };
    }
    function T(ne) {
      const _ = ne.type;
      if (_ === "IFCRECTANGLEPROFILEDEF") {
        const B = no(ne.args), Y = (B[1] || "").replace(/'/g, ""), pe = parseFloat(B[3]) || 0.3, we = parseFloat(B[4]) || 0.3;
        return {
          b: pe,
          h: we,
          name: Y
        };
      }
      if (_ === "IFCMATERIALPROFILE") {
        const B = no(ne.args), Y = B[2] || B[1] || "", pe = Zt(N, Y);
        if (pe) return T(pe);
      }
      if (_ === "IFCMATERIALPROFILESET") {
        const B = no(ne.args), pe = (B[2] || B[1] || "").match(/#(\d+)/);
        if (pe) {
          const we = N[parseInt(pe[1])];
          if (we) return T(we);
        }
      }
      if (_ === "IFCMATERIALPROFILESETUSAGE") {
        const Y = no(ne.args)[0], pe = Zt(N, Y);
        if (pe) return T(pe);
      }
      return {
        b: 0.3,
        h: 0.3,
        name: "Unknown"
      };
    }
    function J(ne, _, B, Y) {
      const pe = w[ne] || [];
      for (const we of pe) {
        const Ae = N[we];
        if (!Ae) continue;
        const Ke = no(Ae.args), ye = Ke[5] || Ke[4] || "", Ge = Zt(N, ye);
        if (!Ge) continue;
        const Ye = _a(N, Ge), be = he(Ae);
        let Te = Y, Ce = null, Xe = null;
        const ct = Ke[6] || Ke[5] || "", Ze = Zt(N, ct);
        if (Ze) {
          const xt = qn(N, Ze);
          xt && (Te = xt.depth || Y, Ce = xt.origin, Xe = xt.direction);
        }
        const dt = Ce ? Ce[0] : Ye.origin[0], mt = Ce ? Ce[1] : Ye.origin[1], Tt = Ce ? Ce[2] : Ye.origin[2], qt = Xe || (B === "Z" ? Ye.dirZ : Ye.dirX), Ht = G(dt, mt, Tt), wt = G(dt + qt[0] * Te, mt + qt[1] * Te, Tt + qt[2] * Te);
        j.push({
          id: W++,
          type: "frame",
          nodeIds: [
            Ht,
            wt
          ],
          category: _,
          sectionName: be.name,
          b: be.b,
          h: be.h,
          material: "Hormigon",
          expressID: we
        });
      }
    }
    J("IFCCOLUMN", "column", "Z", 3), J("IFCBEAM", "beam", "X", 5), J("IFCMEMBER", "diagonal", "X", 4), J("IFCPILE", "pile", "Z", 10), J("IFCSTAIRFLIGHT", "stair", "X", 3), J("IFCRAMPFLIGHT", "ramp", "X", 4);
    function $e(ne, _, B) {
      const Y = w[ne] || [];
      for (const pe of Y) {
        const we = N[pe];
        if (!we) continue;
        const Ae = no(we.args), Ke = Ae[5] || Ae[4] || "";
        if (!Zt(N, Ke)) continue;
        let Ge = B;
        const Ye = Ae[6] || Ae[5] || "", be = Zt(N, Ye);
        be && (Ge = vi(N, be) || B);
        const Te = _ === "slab" ? `Losa e=${(Ge * 100).toFixed(0)}cm` : _ === "wall" ? `Muro e=${(Ge * 100).toFixed(0)}cm` : _ === "footing" ? `Zapata e=${(Ge * 100).toFixed(0)}cm` : `${_} e=${(Ge * 100).toFixed(0)}cm`;
        j.push({
          id: W++,
          type: "shell",
          nodeIds: [],
          category: _,
          sectionName: Te,
          b: Ge,
          h: Ge,
          material: "Hormigon",
          expressID: pe
        });
      }
    }
    $e("IFCSLAB", "slab", 0.15), $e("IFCWALL", "wall", 0.2), $e("IFCWALLSTANDARDCASE", "wall", 0.2), $e("IFCFOOTING", "footing", 0.5), $e("IFCROOF", "slab", 0.12);
    const de = [], re = w.IFCBUILDINGSTOREY || [];
    for (const ne of re) {
      const _ = N[ne];
      if (!_) continue;
      const B = no(_.args), Y = (B[2] || "").replace(/'/g, ""), pe = parseFloat(B[9]) || 0;
      de.push({
        name: Y,
        elevation: pe
      });
    }
    return de.sort((ne, _) => ne.elevation - _.elevation), {
      nodes: U,
      elements: j,
      materials: Z,
      levels: de,
      projectName: b.meta.project,
      schema: b.meta.schema
    };
  }
  function qn(e, b) {
    const N = no(b.args);
    for (const w of N) {
      const U = w.match(/#(\d+)/g) || [];
      for (const j of U) {
        const Z = parseInt(j.replace("#", "")), V = e[Z];
        if (V) {
          if (V.type === "IFCEXTRUDEDAREASOLID") {
            const W = no(V.args), G = parseFloat(W[3]) || 0, he = Zt(e, W[1]);
            let T = [
              0,
              0,
              0
            ];
            he && (T = qa(e, he).origin);
            const J = Zt(e, W[2]);
            let $e = [
              0,
              0,
              1
            ];
            if (J && J.type === "IFCDIRECTION") {
              const de = J.args.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
              de && de.length >= 3 && ($e = de.map(Number));
            }
            return {
              depth: G,
              origin: T,
              direction: $e
            };
          }
          if (V.type === "IFCSHAPEREPRESENTATION") {
            const W = qn(e, V);
            if (W) return W;
          }
          if (V.type === "IFCMAPPEDITEM") {
            const W = no(V.args), G = Zt(e, W[0]);
            if (G && G.type === "IFCREPRESENTATIONMAP") {
              const he = no(G.args), T = Zt(e, he[1]);
              if (T) {
                const J = qn(e, T);
                if (J) return J;
              }
            }
          }
        }
      }
    }
    return null;
  }
  function vi(e, b) {
    const N = qn(e, b);
    return N ? N.depth : null;
  }
  const Da = [
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
  ], Ba = [
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
  ], Ha = /* @__PURE__ */ new Map();
  for (const [e, b] of Da) Ha.set(e, b);
  function yi(e) {
    return Ha.get(e) ?? "other";
  }
  new Set(Ba);
  async function $i(e, b) {
    var _a2, _b;
    const N = window.WebIFC;
    if (!N) throw new Error("web-ifc no disponible. Verifica que web-ifc-api-iife.js se carg\xF3.");
    const w = new N.IfcAPI(), U = window.location.pathname.replace(/\/[^/]*$/, "/");
    w.SetWasmPath(U), await w.Init();
    const j = w.OpenModel(new Uint8Array(b)), Z = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), W = {
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
    for (const [$e] of Da) {
      const de = yi($e);
      try {
        const re = w.GetLineIDsWithType(j, $e);
        for (let ne = 0; ne < re.size(); ne++) {
          const _ = re.get(ne);
          Z.set(_, de);
          let B = "";
          try {
            const Y = w.GetLine(j, _);
            B = ((_a2 = Y == null ? void 0 : Y.Name) == null ? void 0 : _a2.value) || ((_b = Y == null ? void 0 : Y.Description) == null ? void 0 : _b.value) || "";
          } catch {
          }
          V.set(_, {
            expressID: _,
            category: de,
            name: B,
            typeName: W[$e] || "Otro"
          });
        }
      } catch {
      }
    }
    const G = /* @__PURE__ */ new Map();
    for (const $e of Ba) {
      const de = new vn();
      de.name = `ifc-${$e}`, e.add(de), G.set($e, de);
    }
    const he = new Il();
    let T = 0;
    const J = new Ia({
      color: 13421772,
      transparent: true,
      opacity: 0.9,
      side: ka
    });
    return w.StreamAllMeshes(j, ($e) => {
      const de = Z.get($e.expressID) ?? "other", re = G.get(de), ne = $e.geometries;
      for (let _ = 0; _ < ne.size(); _++) {
        const B = ne.get(_), Y = w.GetGeometry(j, B.geometryExpressID), pe = w.GetVertexArray(Y.GetVertexData(), Y.GetVertexDataSize()), we = w.GetIndexArray(Y.GetIndexData(), Y.GetIndexDataSize()), Ae = new ro(), Ke = new Float32Array(pe.length / 2), ye = new Float32Array(pe.length / 2);
        for (let Ce = 0; Ce < pe.length; Ce += 6) {
          const Xe = Ce / 2;
          Ke[Xe] = pe[Ce], Ke[Xe + 1] = pe[Ce + 1], Ke[Xe + 2] = pe[Ce + 2], ye[Xe] = pe[Ce + 3], ye[Xe + 1] = pe[Ce + 4], ye[Xe + 2] = pe[Ce + 5];
        }
        Ae.setAttribute("position", new Pn(Ke, 3)), Ae.setAttribute("normal", new Pn(ye, 3)), Ae.setIndex(new Pn(new Uint32Array(we), 1));
        const Ge = new kl();
        Ge.fromArray(B.flatTransformation);
        let Ye;
        const be = B.color;
        be && (be.x !== 1 || be.y !== 1 || be.z !== 1) ? Ye = new Ia({
          color: new Tl(be.x, be.y, be.z),
          transparent: be.w < 1,
          opacity: be.w,
          side: ka
        }) : Ye = J, Ye._origOpacity = Ye.opacity;
        const Te = new Ra(Ae, Ye);
        Te.applyMatrix4(Ge), Te.userData.expressID = $e.expressID, Te.userData.category = de, re.add(Te), he.expandByObject(Te), T++, Y.delete();
      }
    }), w.CloseModel(j), {
      meshCount: T,
      bbox: he,
      detailCategories: G,
      elementInfo: V
    };
  }
  Fa = sn.state(false);
  zi = function(e) {
    e.nodeInputs || (e.nodeInputs = sn.state({})), e.elementInputs || (e.elementInputs = sn.state({})), e.deformOutputs || (e.deformOutputs = sn.state({})), e.analyzeOutputs || (e.analyzeOutputs = sn.state({}));
    let b = "tonf", N = "m", w = Go(b, N), U = {
      forceId: "kgf",
      lengthId: "cm",
      label: "kgf/cm\xB2"
    };
    const j = {
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
    let W = false;
    const G = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Map();
    let T = "", J = {}, $e = null, de = "", re = [], ne = [], _ = [], B = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), pe = /* @__PURE__ */ new Set(), we = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), Ke = null, ye = [], Ge = 0.2, Ye = 2, be = 2, Te = false, Ce = 2, Xe = "x", ct = /* @__PURE__ */ new Set(), Ze = true, dt = 0.15, mt = 2, Tt = 2, qt = /* @__PURE__ */ new Set(), Ht = false, wt = "perimeter";
    const xt = () => ({
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
      }, xt),
      vigasY: Array.from({
        length: o
      }, xt)
    }), _e = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let St = 0, Re = 3, De = false, xe = 0, Fe = null, ve = 0, ze = [], Ve = 1, Be = true;
    const ft = Bl();
    ft.div.style.display = "none";
    function vt() {
      const t = An()[T];
      return t && t[St] ? t[St].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let Je = [], Qe = [], gt = 0, pt = [], $t = null;
    function Vt() {
      if (!$t) return;
      const t = et();
      t && t.scene.remove($t), $t.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), $t = null;
    }
    function Is(t, o, n, l, a) {
      Vt();
      const c = et();
      if (!c) return;
      $t = new vn(), $t.name = "refGrid";
      const s = Math.min(...t), i = Math.max(...t), p = Math.min(...o), r = Math.max(...o), d = Math.max(...n), g = i - s || 1, S = r - p || 1, M = 3359829, y = 2241348;
      for (const x of n) {
        for (const I of o) {
          const C = new ro().setFromPoints([
            new qe(s, x, I),
            new qe(i, x, I)
          ]), A = new tn({
            color: M,
            dashSize: g * 0.015,
            gapSize: g * 0.01,
            transparent: true,
            opacity: 0.25
          }), O = new jo(C, A);
          O.computeLineDistances(), O.renderOrder = -10, $t.add(O);
        }
        for (const I of t) {
          const C = new ro().setFromPoints([
            new qe(I, x, p),
            new qe(I, x, r)
          ]), A = new tn({
            color: M,
            dashSize: S * 0.015,
            gapSize: S * 0.01,
            transparent: true,
            opacity: 0.25
          }), O = new jo(C, A);
          O.computeLineDistances(), O.renderOrder = -10, $t.add(O);
        }
      }
      for (const x of t) for (const I of o) {
        const C = new ro().setFromPoints([
          new qe(x, 0, I),
          new qe(x, d, I)
        ]), A = new tn({
          color: y,
          dashSize: d * 0.01,
          gapSize: d * 8e-3,
          transparent: true,
          opacity: 0.15
        }), O = new jo(C, A);
        O.computeLineDistances(), O.renderOrder = -10, $t.add(O);
      }
      const f = Math.min(g, S) * 0.015;
      for (const x of n) for (const I of t) for (const C of o) {
        const A = [
          new qe(I - f, x, C),
          new qe(I + f, x, C),
          new qe(I, x, C - f),
          new qe(I, x, C + f)
        ], O = new ro().setFromPoints(A), k = new nn({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), m = new on(O, k);
        m.renderOrder = -5, $t.add(m);
      }
      $t.traverse((x) => {
        x.material && (Array.isArray(x.material) ? x.material.forEach((I) => {
          I.clippingPlanes = [];
        }) : x.material.clippingPlanes = []);
      }), c.scene.add($t), c.render();
    }
    let jt = null;
    function ks() {
      if (!jt) return;
      const t = et();
      t && t.scene.remove(jt), jt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), jt = null;
    }
    function rn(t, o, n, l, a) {
      ks();
      const c = et();
      if (!c) return;
      jt = new vn(), jt.name = "gridAxes";
      const s = Math.min(...t), i = Math.max(...t), p = Math.min(...o), r = Math.max(...o), d = i - s || 1, g = r - p || 1, S = Math.max(d, g), M = S * 0.08, y = l || t.map((m, u) => String.fromCharCode(65 + u)), f = a || o.map((m, u) => String(u + 1)), x = S * 0.018, I = o.length <= 1, C = 8947848;
      for (let m = 0; m < t.length; m++) {
        const u = t[m];
        if (I) {
          const E = -M - x * 1.5;
          jn(u, 0, 0, u, 0, E + x, C, jt), Wn(y[m] || `${m}`, u, 0, E, x, jt);
        } else {
          const E = p - M - x * 1.5;
          jn(u, p, 0, u, E + x, 0, C, jt), Wn(y[m] || `${m}`, u, E, 0, x, jt);
        }
      }
      if (!I) for (let m = 0; m < o.length; m++) {
        const u = o[m], E = s - M - x * 1.5;
        jn(s, u, 0, E + x, u, 0, C, jt), Wn(f[m] || `${m}`, E, u, 0, x, jt);
      }
      const A = x * 1.8, O = M * 1.2, k = M * 1.2;
      for (let m = 0; m < t.length - 1; m++) {
        const u = t[m], E = t[m + 1], L = Math.abs(E - u), P = (u + E) / 2, H = `${L.toFixed(2)} m`;
        I ? (Bn(H, P, 0, -O, A, jt), Hn(u, 0, -O * 0.7, E, 0, -O * 0.7, 16763904, jt)) : (Bn(H, P, p - k, 0, A, jt), Hn(u, p - k * 0.7, 0, E, p - k * 0.7, 0, 16763904, jt));
      }
      if (!I) for (let m = 0; m < o.length - 1; m++) {
        const u = o[m], E = o[m + 1], L = Math.abs(E - u), P = (u + E) / 2, H = `${L.toFixed(2)} m`;
        Bn(H, s - O, P, 0, A, jt), Hn(s - O * 0.7, u, 0, s - O * 0.7, E, 0, 16763904, jt);
      }
      jt.traverse((m) => {
        m.material && (Array.isArray(m.material) ? m.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : m.material.clippingPlanes = []);
      }), c.scene.add(jt), c.render();
    }
    let Qt = null;
    function Ts() {
      if (!Qt) return;
      const t = et();
      t && t.scene.remove(Qt), Qt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Qt = null;
    }
    function Dn(t, o, n) {
      if (Ts(), t.length === 0) return;
      const l = et();
      if (!l) return;
      Qt = new vn(), Qt.name = "storyLevels";
      const a = Math.min(...o), c = Math.max(...o), s = Math.min(...n), i = Math.max(...n), p = c - a || 1, r = i - s || 1, d = Math.max(p, r), g = d * 0.06, S = n.length <= 1, M = 4491519, y = d * 0.015;
      for (const f of t) {
        const x = f.elev;
        S ? (cn(a - g, 0, x, c + g, 0, x, M, Qt), zs(f.name, c + g * 1.5, 0, x, y, Qt)) : (cn(a, s, x, c, s, x, M, Qt), cn(c, s, x, c, i, x, M, Qt), cn(c, i, x, a, i, x, M, Qt), cn(a, i, x, a, s, x, M, Qt), zs(f.name, a - g * 1.5, s, x, y, Qt));
      }
      Qt.traverse((f) => {
        f.material && (Array.isArray(f.material) ? f.material.forEach((x) => {
          x.clippingPlanes = [];
        }) : f.material.clippingPlanes = []);
      }), l.scene.add(Qt), l.render();
    }
    function cn(t, o, n, l, a, c, s, i) {
      const p = Math.sqrt((l - t) ** 2 + (a - o) ** 2 + (c - n) ** 2) || 1, r = new ro().setFromPoints([
        new qe(t, o, n),
        new qe(l, a, c)
      ]), d = new tn({
        color: s,
        dashSize: p * 0.02,
        gapSize: p * 0.01,
        transparent: true,
        opacity: 0.5
      }), g = new jo(r, d);
      g.computeLineDistances(), g.renderOrder = 50, i.add(g);
    }
    function zs(t, o, n, l, a, c) {
      const s = document.createElement("canvas"), i = 512, p = 64;
      s.width = i, s.height = p;
      const r = s.getContext("2d");
      r.fillStyle = "rgba(30,60,120,0.8)";
      const d = 8;
      r.beginPath(), r.moveTo(d, 0), r.lineTo(i - d, 0), r.quadraticCurveTo(i, 0, i, d), r.lineTo(i, p - d), r.quadraticCurveTo(i, p, i - d, p), r.lineTo(d, p), r.quadraticCurveTo(0, p, 0, p - d), r.lineTo(0, d), r.quadraticCurveTo(0, 0, d, 0), r.closePath(), r.fill(), r.fillStyle = "#88bbff", r.font = "bold 38px monospace", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t, i / 2, p / 2);
      const g = new hs(s);
      g.needsUpdate = true;
      const S = new zn({
        map: g,
        depthTest: false,
        transparent: true
      }), M = new Tn(S);
      M.position.set(o, n, l), M.scale.set(a * 8, a, 1), M.renderOrder = 101, c.add(M);
    }
    function Bn(t, o, n, l, a, c) {
      const s = document.createElement("canvas"), i = 256, p = 64;
      s.width = i, s.height = p;
      const r = s.getContext("2d");
      r.fillStyle = "rgba(0,0,0,0.75)";
      const d = 8;
      r.beginPath(), r.moveTo(d, 0), r.lineTo(i - d, 0), r.quadraticCurveTo(i, 0, i, d), r.lineTo(i, p - d), r.quadraticCurveTo(i, p, i - d, p), r.lineTo(d, p), r.quadraticCurveTo(0, p, 0, p - d), r.lineTo(0, d), r.quadraticCurveTo(0, 0, d, 0), r.closePath(), r.fill(), r.fillStyle = "#ffcc00", r.font = "bold 36px monospace", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t, i / 2, p / 2);
      const g = new Rl(s);
      g.minFilter = Pl;
      const S = new zn({
        map: g,
        transparent: true,
        depthTest: false
      }), M = new Tn(S);
      M.position.set(o, n, l);
      const y = i / p;
      M.scale.set(a * y, a, 1), M.renderOrder = 999, c.add(M);
    }
    function Hn(t, o, n, l, a, c, s, i) {
      const p = [
        new qe(t, o, n),
        new qe(l, a, c)
      ], r = new ro().setFromPoints(p), d = new nn({
        color: s,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), g = new jo(r, d);
      g.renderOrder = 998, i.add(g);
    }
    function jn(t, o, n, l, a, c, s, i) {
      const p = new ro().setFromPoints([
        new qe(t, o, n),
        new qe(l, a, c)
      ]), r = new tn({
        color: s,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(a - o), Math.abs(c - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(a - o), Math.abs(c - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), d = new jo(p, r);
      d.computeLineDistances(), i.add(d);
    }
    function Wn(t, o, n, l, a, c) {
      const s = document.createElement("canvas"), i = 128;
      s.width = i, s.height = i;
      const p = s.getContext("2d");
      p.beginPath(), p.arc(i / 2, i / 2, i * 0.42, 0, Math.PI * 2), p.fillStyle = "rgba(255,255,255,0.9)", p.fill(), p.lineWidth = i * 0.04, p.strokeStyle = "#555", p.stroke(), p.fillStyle = "#222", p.font = `bold ${i * 0.45}px Arial`, p.textAlign = "center", p.textBaseline = "middle", p.fillText(t, i / 2, i / 2 + i * 0.02);
      const r = new hs(s);
      r.needsUpdate = true;
      const d = new zn({
        map: r,
        depthTest: false,
        transparent: true
      }), g = new Tn(d);
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
          Vt(), console.log("Reference grid cleared");
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
        Is(l, a, c), Je = l.map((s, i) => ({
          label: String.fromCharCode(65 + i),
          coord: s
        })), Qe = a.map((s, i) => ({
          label: `${i + 1}`,
          coord: s
        })), gt = c[c.length - 1], pt = c.map((s, i) => ({
          label: i === 0 ? "Base" : `P${i}`,
          elev: s
        })), rn(Je.map((s) => s.coord), Qe.map((s) => s.coord), gt, Je.map((s) => s.label), Qe.map((s) => s.label));
        {
          const s = c.map((i, p) => ({
            name: p === 0 ? "Base" : `P${p}`,
            height: p > 0 ? i - c[p - 1] : 0,
            elev: i
          }));
          Dn(s, Je.map((i) => i.coord), Qe.map((i) => i.coord));
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
        const o = (t == null ? void 0 : t.col) || "40x40", n = (t == null ? void 0 : t.viga) || "30x40", l = (t == null ? void 0 : t.fc) || 210, [a, c] = o.split("x").map((D) => parseFloat(D) / 100), [s, i] = n.split("x").map((D) => parseFloat(D) / 100), p = Je.map((D) => D.coord), r = Qe.map((D) => D.coord), d = pt.map((D) => D.elev), g = p.length, S = r.length, M = d.length, y = M - 1, f = [], x = {};
        for (let D = 0; D < M; D++) for (let me = 0; me < S; me++) for (let se = 0; se < g; se++) x[`${se},${me},${D}`] = f.length, f.push([
          p[se],
          r[me],
          d[D]
        ]);
        const I = [], C = /* @__PURE__ */ new Set(), A = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Map();
        for (let D = 0; D < y; D++) for (let me = 0; me < S; me++) for (let se = 0; se < g; se++) {
          const ue = I.length;
          I.push([
            x[`${se},${me},${D}`],
            x[`${se},${me},${D + 1}`]
          ]), C.add(ue), O.set(ue, D);
        }
        for (let D = 1; D < M; D++) for (let me = 0; me < S; me++) for (let se = 0; se < g - 1; se++) {
          const ue = I.length;
          I.push([
            x[`${se},${me},${D}`],
            x[`${se + 1},${me},${D}`]
          ]), A.add(ue), O.set(ue, D - 1);
        }
        for (let D = 1; D < M; D++) for (let me = 0; me < g; me++) for (let se = 0; se < S - 1; se++) {
          const ue = I.length;
          I.push([
            x[`${me},${se},${D}`],
            x[`${me},${se + 1},${D}`]
          ]), A.add(ue), O.set(ue, D - 1);
        }
        const k = ((_a2 = t == null ? void 0 : t.braces) == null ? void 0 : _a2.toLowerCase()) || "", m = /* @__PURE__ */ new Set();
        if (k) {
          const D = k === "all" || k === "x" || k === "perimeter", me = k === "all" || k === "y" || k === "perimeter";
          for (let se = 0; se < y; se++) {
            if (D) for (let ue = 0; ue < S; ue++) {
              if (k === "perimeter" && ue !== 0 && ue !== S - 1) continue;
              const te = Math.floor((g - 1) / 2);
              for (let ge = 0; ge < g - 1; ge++) {
                if (k === "perimeter" && ge !== te) continue;
                const Me = I.length;
                I.push([
                  x[`${ge},${ue},${se}`],
                  x[`${ge + 1},${ue},${se + 1}`]
                ]), m.add(Me), O.set(Me, se);
                const oe = I.length;
                I.push([
                  x[`${ge + 1},${ue},${se}`],
                  x[`${ge},${ue},${se + 1}`]
                ]), m.add(oe), O.set(oe, se);
              }
            }
            if (me) for (let ue = 0; ue < g; ue++) {
              if (k === "perimeter" && ue !== 0 && ue !== g - 1) continue;
              const te = Math.floor((S - 1) / 2);
              for (let ge = 0; ge < S - 1; ge++) {
                if (k === "perimeter" && ge !== te) continue;
                const Me = I.length;
                I.push([
                  x[`${ue},${ge},${se}`],
                  x[`${ue},${ge + 1},${se + 1}`]
                ]), m.add(Me), O.set(Me, se);
                const oe = I.length;
                I.push([
                  x[`${ue},${ge + 1},${se}`],
                  x[`${ue},${ge},${se + 1}`]
                ]), m.add(oe), O.set(oe, se);
              }
            }
          }
        }
        const u = 15100 * Math.sqrt(l) * 10, E = u / (2 * (1 + 0.2)), L = a * c, P = a * c ** 3 / 12, H = c * a ** 3 / 12, h = a * c * (a ** 2 + c ** 2) / 12, $ = s * i, v = s * i ** 3 / 12, F = i * s ** 3 / 12, X = s * i * (s ** 2 + i ** 2) / 12, K = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map();
        for (let D = 0; D < I.length; D++) K.set(D, u), le.set(D, E), C.has(D) ? (ee.set(D, L), Q.set(D, P), fe.set(D, H), ce.set(D, h), ke.set(D, {
          type: "rect",
          b: a,
          h: c,
          name: `COL${o}`
        })) : m.has(D) ? (ee.set(D, L), Q.set(D, P), fe.set(D, H), ce.set(D, h), ke.set(D, {
          type: "rect",
          b: a,
          h: c,
          name: `BR${o}`
        })) : (ee.set(D, $), Q.set(D, v), fe.set(D, F), ce.set(D, X), ke.set(D, {
          type: "rect",
          b: s,
          h: i,
          name: `V${n}`
        }));
        const Pe = /* @__PURE__ */ new Map();
        for (let D = 0; D < S; D++) for (let me = 0; me < g; me++) Pe.set(x[`${me},${D},0`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        return e.nodes.val = f, e.elements.val = I, e.nodeInputs.val = {
          supports: Pe,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: K,
          shearModuli: le,
          areas: ee,
          momentsOfInertiaZ: Q,
          momentsOfInertiaY: fe,
          torsionalConstants: ce,
          sectionShapes: ke
        }, B = C, Y = A, we = O, console.log(`Built: ${f.length} nodes, ${I.length} elements (${C.size} cols, ${A.size} beams, ${m.size} braces)`), console.log(`  Col: ${o}, Viga: ${n}, f'c=${l}${k ? `, braces=${k}` : ""}`), {
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
          const f = i.findIndex((x) => Math.abs(x[0] - c) < 1e-3 && Math.abs(x[1] - s) < 1e-3 && Math.abs(x[2] - y) < 1e-3);
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
        let M = 0;
        for (const y of d) {
          if (y < 1 || y >= pt.length) continue;
          const f = r(pt[y - 1].elev), x = r(pt[y].elev);
          p.push([
            f,
            x
          ]), B.add(p.length - 1), we.set(p.length - 1, y - 1), M++;
        }
        return e.nodes.val = i, e.elements.val = p, e.nodeInputs.val = {
          ...e.nodeInputs.val,
          supports: g,
          loads: ((_f = (_e2 = e.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${M} column(s) at ${t}-${o}${n ? ` story ${n}` : ""}`), M;
      },
      addBeam(t, o, n, l, a) {
        var _a2;
        const c = Je.findIndex((O) => O.label === t), s = Qe.findIndex((O) => O.label === o), i = Je.findIndex((O) => O.label === n), p = Qe.findIndex((O) => O.label === l), r = pt.findIndex((O) => O.label === a);
        if (c < 0 || s < 0 || i < 0 || p < 0) {
          console.log("Axis not found");
          return;
        }
        if (r < 1) {
          console.log(`Story "${a}" not found. Available: ${pt.filter((O) => O.label !== "Base").map((O) => O.label)}`);
          return;
        }
        const d = Je[c].coord, g = Qe[s].coord, S = Je[i].coord, M = Qe[p].coord, y = pt[r].elev, f = [
          ...e.nodes.val
        ], x = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], I = (O, k, m) => {
          const u = f.findIndex((E) => Math.abs(E[0] - O) < 1e-3 && Math.abs(E[1] - k) < 1e-3 && Math.abs(E[2] - m) < 1e-3);
          return u >= 0 ? u : (f.push([
            O,
            k,
            m
          ]), f.length - 1);
        }, C = I(d, g, y), A = I(S, M, y);
        return x.push([
          C,
          A
        ]), Y.add(x.length - 1), we.set(x.length - 1, r - 1), e.nodes.val = f, e.elements.val = x, console.log(`Added beam ${t}-${o} \u2192 ${n}-${l} at ${a}`), x.length - 1;
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
        const S = Je[s].coord, M = Qe[i].coord, y = pt[p].elev, f = Je[r].coord, x = Qe[d].coord, I = pt[g].elev, C = [
          ...e.nodes.val
        ], A = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], O = (u, E, L) => {
          const P = C.findIndex((H) => Math.abs(H[0] - u) < 1e-3 && Math.abs(H[1] - E) < 1e-3 && Math.abs(H[2] - L) < 1e-3);
          return P >= 0 ? P : (C.push([
            u,
            E,
            L
          ]), C.length - 1);
        }, k = O(S, M, y), m = O(f, x, I);
        return A.push([
          k,
          m
        ]), we.set(A.length - 1, Math.min(p, g)), e.nodes.val = C, e.elements.val = A, console.log(`Added brace ${t}-${o}@${n} \u2192 ${l}-${a}@${c}`), A.length - 1;
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
        ], a = (t == null ? void 0 : t.col) || "40x40", c = (t == null ? void 0 : t.viga) || "30x40", s = (t == null ? void 0 : t.fc) || 210, [i, p] = a.split("x").map((te) => parseFloat(te) / 100), [r, d] = c.split("x").map((te) => parseFloat(te) / 100), g = [
          0
        ];
        for (const te of o) g.push(g[g.length - 1] + te);
        const S = [
          0
        ];
        for (const te of n) S.push(S[S.length - 1] + te);
        const M = [
          0
        ];
        for (const te of l) M.push(M[M.length - 1] + te);
        const y = g.length, f = S.length, x = M.length, I = l.length, C = [], A = {};
        for (let te = 0; te < x; te++) for (let ge = 0; ge < f; ge++) for (let Me = 0; Me < y; Me++) A[`${Me},${te},${ge}`] = C.length, C.push([
          g[Me],
          M[te],
          S[ge]
        ]);
        const O = [], k = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (let te = 0; te < I; te++) for (let ge = 0; ge < f; ge++) for (let Me = 0; Me < y; Me++) {
          const oe = O.length;
          O.push([
            A[`${Me},${te},${ge}`],
            A[`${Me},${te + 1},${ge}`]
          ]), k.add(oe), u.set(oe, te);
        }
        for (let te = 1; te < x; te++) for (let ge = 0; ge < f; ge++) for (let Me = 0; Me < y - 1; Me++) {
          const oe = O.length;
          O.push([
            A[`${Me},${te},${ge}`],
            A[`${Me + 1},${te},${ge}`]
          ]), m.add(oe), u.set(oe, te - 1);
        }
        for (let te = 1; te < x; te++) for (let ge = 0; ge < y; ge++) for (let Me = 0; Me < f - 1; Me++) {
          const oe = O.length;
          O.push([
            A[`${ge},${te},${Me}`],
            A[`${ge},${te},${Me + 1}`]
          ]), m.add(oe), u.set(oe, te - 1);
        }
        const L = 15100 * Math.sqrt(s) * 10, P = L / (2 * (1 + 0.2)), H = i * p, h = i * p ** 3 / 12, $ = p * i ** 3 / 12, v = i * p * (i ** 2 + p ** 2) / 12, F = r * d, X = r * d ** 3 / 12, K = d * r ** 3 / 12, le = r * d * (r ** 2 + d ** 2) / 12, ee = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map();
        for (let te = 0; te < O.length; te++) ee.set(te, L), Q.set(te, P), k.has(te) ? (fe.set(te, H), ce.set(te, h), ke.set(te, $), Pe.set(te, v), D.set(te, {
          type: "rect",
          b: i,
          h: p,
          name: `COL${a}`
        })) : (fe.set(te, F), ce.set(te, X), ke.set(te, K), Pe.set(te, le), D.set(te, {
          type: "rect",
          b: r,
          h: d,
          name: `V${c}`
        }));
        const me = /* @__PURE__ */ new Map();
        for (let te = 0; te < f; te++) for (let ge = 0; ge < y; ge++) me.set(A[`${ge},0,${te}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        e.nodes.val = C, e.elements.val = O, e.nodeInputs.val = {
          supports: me,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: ee,
          shearModuli: Q,
          areas: fe,
          momentsOfInertiaZ: ce,
          momentsOfInertiaY: ke,
          torsionalConstants: Pe,
          sectionShapes: D
        }, B = k, Y = m, we = u, Je = g.map((te, ge) => ({
          label: String.fromCharCode(65 + ge),
          coord: te
        })), Qe = S.map((te, ge) => ({
          label: `${ge + 1}`,
          coord: te
        })), gt = M[M.length - 1], rn(Je.map((te) => te.coord), Qe.map((te) => te.coord), gt, Je.map((te) => te.label), Qe.map((te) => te.label));
        {
          const te = M.map((ge, Me) => ({
            name: Me === 0 ? "Base" : `P${Me}`,
            height: Me > 0 ? ge - M[Me - 1] : 0,
            elev: ge
          }));
          Dn(te, g, S);
        }
        const se = Le.querySelector("#cad3d-axis-buttons");
        if (se) {
          se.style.display = "flex";
          const te = Je.map((Me) => Me.label), ge = Qe.map((Me) => Me.label);
          se.innerHTML = `<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">${z("Ejes")}:</span>`;
          for (const Me of te) se.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${Me}">${Me}</button>`;
          se.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const Me of ge) se.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${Me}">${Me}</button>`;
        }
        const ue = Le.querySelector("#cad3d-floor-buttons");
        if (ue) {
          ue.style.display = "flex", ue.innerHTML = `<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">${z("Planta")}:</span>`;
          for (let te = 0; te < I; te++) ue.innerHTML += `<button class="floor-btn" data-floor="${te}">P${te + 1}</button>`;
        }
        return Is(g, S, M), st(), console.log(`Model3D: ${C.length}n ${O.length}e | ${y}x${f} grid, ${I} floors | COL${a} V${c} f'c=${s}`), {
          nodes: C.length,
          elements: O.length,
          columns: k.size,
          beams: m.size
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), B = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), we = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), Je = [], Qe = [], gt = 0, ks(), Ts(), Vt();
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
        const S = /* @__PURE__ */ new Map(), M = vt();
        for (let y = 0; y < a.length; y++) {
          if (p(y)) continue;
          const f = `${y},0`;
          r[f] !== void 0 && S.set(r[f], [
            ...M
          ]);
        }
        return e.nodes.val = d, e.elements.val = g, e.nodeInputs && (e.nodeInputs.val = {
          supports: S
        }), Je = [
          ...a
        ], Qe = [
          0
        ], gt = s[s.length - 1] || 0, setTimeout(() => {
          It(), rn(a, [
            0
          ]), es(), ts();
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
        const S = (u) => a > 0 && u === 0 || c > 0 && u === r.length - 1, M = (u) => s > 0 && u === 0 || i > 0 && u === d.length - 1, y = (u, E) => S(u) || M(E), f = [], x = {};
        for (let u = 0; u < g.length; u++) for (let E = 0; E < d.length; E++) for (let L = 0; L < r.length; L++) u === 0 && y(L, E) || (x[`${L},${E},${u}`] = f.length, f.push([
          r[L],
          d[E],
          g[u]
        ]));
        const I = f.length, C = [];
        B = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), we = /* @__PURE__ */ new Map();
        const A = [];
        for (let u = 0; u < g.length - 1; u++) for (let E = 0; E < d.length; E++) for (let L = 0; L < r.length; L++) y(L, E) || A.push({
          el: [
            x[`${L},${E},${u}`],
            x[`${L},${E},${u + 1}`]
          ],
          floor: u
        });
        for (const { el: [u, E], floor: L } of A) {
          if (p <= 1) {
            B.add(C.length), we.set(C.length, L), C.push([
              u,
              E
            ]);
            continue;
          }
          const P = f[u], H = f[E];
          let h = u;
          for (let $ = 1; $ < p; $++) {
            const v = $ / p, F = f.length;
            f.push([
              P[0] + (H[0] - P[0]) * v,
              P[1] + (H[1] - P[1]) * v,
              P[2] + (H[2] - P[2]) * v
            ]), B.add(C.length), we.set(C.length, L), C.push([
              h,
              F
            ]), h = F;
          }
          B.add(C.length), we.set(C.length, L), C.push([
            h,
            E
          ]);
        }
        Ae = /* @__PURE__ */ new Map();
        const O = [];
        for (let u = 1; u < g.length; u++) for (let E = 0; E < d.length; E++) for (let L = 0; L < r.length - 1; L++) O.push({
          el: [
            x[`${L},${E},${u}`],
            x[`${L + 1},${E},${u}`]
          ],
          floor: u - 1,
          dir: "x",
          bay: L
        });
        for (let u = 1; u < g.length; u++) for (let E = 0; E < r.length; E++) for (let L = 0; L < d.length - 1; L++) O.push({
          el: [
            x[`${E},${L},${u}`],
            x[`${E},${L + 1},${u}`]
          ],
          floor: u - 1,
          dir: "y",
          bay: L
        });
        for (const { el: [u, E], floor: L, dir: P, bay: H } of O) {
          const h = f[u], $ = f[E];
          let v = u;
          for (let X = 1; X < l; X++) {
            const K = X / l, le = f.length;
            f.push([
              h[0] + ($[0] - h[0]) * K,
              h[1] + ($[1] - h[1]) * K,
              h[2] + ($[2] - h[2]) * K
            ]);
            const ee = C.length;
            Y.add(ee), we.set(ee, L), Ae.set(ee, {
              dir: P,
              bay: H
            }), C.push([
              v,
              le
            ]), v = le;
          }
          const F = C.length;
          Y.add(F), we.set(F, L), Ae.set(F, {
            dir: P,
            bay: H
          }), C.push([
            v,
            E
          ]);
        }
        if (ct = /* @__PURE__ */ new Set(), Te && Ce > 0) {
          const u = (E, L, P) => {
            for (let h = 0; h < f.length; h++) if (Math.abs(f[h][0] - E) < 1e-6 && Math.abs(f[h][1] - L) < 1e-6 && Math.abs(f[h][2] - P) < 1e-6) return h;
            const H = f.length;
            return f.push([
              E,
              L,
              P
            ]), H;
          };
          for (let E = 1; E < g.length; E++) if (Xe === "x") for (let L = 0; L < d.length - 1; L++) {
            const P = d[L], H = d[L + 1];
            for (let h = 1; h <= Ce; h++) {
              const $ = P + h / (Ce + 1) * (H - P), v = [];
              for (let F = 0; F < r.length; F++) v.push(u(r[F], $, g[E]));
              for (let F = 0; F < r.length - 1; F++) {
                const X = C.length;
                ct.add(X), Y.add(X), we.set(X, E - 1), Ae.set(X, {
                  dir: "x",
                  bay: F
                }), C.push([
                  v[F],
                  v[F + 1]
                ]);
              }
            }
          }
          else for (let L = 0; L < r.length - 1; L++) {
            const P = r[L], H = r[L + 1];
            for (let h = 1; h <= Ce; h++) {
              const $ = P + h / (Ce + 1) * (H - P), v = [];
              for (let F = 0; F < d.length; F++) v.push(u($, d[F], g[E]));
              for (let F = 0; F < d.length - 1; F++) {
                const X = C.length;
                ct.add(X), Y.add(X), we.set(X, E - 1), Ae.set(X, {
                  dir: "y",
                  bay: F
                }), C.push([
                  v[F],
                  v[F + 1]
                ]);
              }
            }
          }
        }
        const k = /* @__PURE__ */ new Map(), m = vt();
        for (let u = 0; u < d.length; u++) for (let E = 0; E < r.length; E++) y(E, u) || k.set(x[`${E},${u},0`], [
          ...m
        ]);
        pe = /* @__PURE__ */ new Set();
        for (const u of ye) {
          const E = g.length - 1, L = u.floors.includes(-1) ? Array.from({
            length: E
          }, (P, H) => H) : u.floors.filter((P) => P < E);
          for (const P of L) {
            let H, h, $, v;
            u.dir === "x" ? (H = u.bay, $ = u.bay + 1, h = u.axisIdx, v = u.axisIdx) : (H = u.axisIdx, $ = u.axisIdx, h = u.bay, v = u.bay + 1);
            const F = x[`${H},${h},${P}`], X = x[`${H},${h},${P + 1}`];
            let K, le;
            if (u.dir === "x" ? (K = x[`${$},${v},${P}`], le = x[`${$},${v},${P + 1}`]) : (K = x[`${$},${v},${P}`], le = x[`${$},${v},${P + 1}`]), F === void 0 || K === void 0 || X === void 0 || le === void 0) continue;
            const ee = be, Q = Ye, fe = f[F], ce = f[K], ke = f[X], Pe = f[le], D = [];
            for (let me = 0; me <= Q; me++) {
              const se = [], ue = me / Q;
              for (let te = 0; te <= ee; te++) {
                const ge = te / ee, Me = (1 - ue) * ((1 - ge) * fe[0] + ge * ce[0]) + ue * ((1 - ge) * ke[0] + ge * Pe[0]), oe = (1 - ue) * ((1 - ge) * fe[1] + ge * ce[1]) + ue * ((1 - ge) * ke[1] + ge * Pe[1]), Ee = (1 - ue) * ((1 - ge) * fe[2] + ge * ce[2]) + ue * ((1 - ge) * ke[2] + ge * Pe[2]);
                me === 0 && te === 0 ? se.push(F) : me === 0 && te === ee ? se.push(K) : me === Q && te === 0 ? se.push(X) : me === Q && te === ee ? se.push(le) : (se.push(f.length), f.push([
                  Me,
                  oe,
                  Ee
                ]));
              }
              D.push(se);
            }
            for (let me = 0; me < Q; me++) for (let se = 0; se < ee; se++) {
              const ue = D[me][se], te = D[me][se + 1], ge = D[me + 1][se + 1], Me = D[me + 1][se], oe = C.length;
              pe.add(oe), we.set(oe, P), C.push([
                ue,
                te,
                ge,
                Me
              ]);
            }
            if (P === 0) for (let me = 0; me <= ee; me++) {
              const se = D[0][me];
              se >= I && k.set(se, [
                ...m
              ]);
            }
          }
        }
        if (qt = /* @__PURE__ */ new Set(), Ze) {
          const u = l, E = l, L = /* @__PURE__ */ new Map(), P = (H, h, $) => `${Math.round(H * 1e4)},${Math.round(h * 1e4)},${Math.round($ * 1e4)}`;
          for (let H = 0; H < f.length; H++) L.set(P(f[H][0], f[H][1], f[H][2]), H);
          for (let H = 1; H < g.length; H++) {
            const h = g[H];
            for (let $ = 0; $ < r.length - 1; $++) for (let v = 0; v < d.length - 1; v++) {
              const F = r[$], X = r[$ + 1], K = d[v], le = d[v + 1], ee = [];
              for (let Q = 0; Q <= E; Q++) {
                const fe = [];
                for (let ce = 0; ce <= u; ce++) {
                  const ke = F + ce / u * (X - F), Pe = K + Q / E * (le - K);
                  if (Q === 0 && ce === 0) fe.push(x[`${$},${v},${H}`]);
                  else if (Q === 0 && ce === u) fe.push(x[`${$ + 1},${v},${H}`]);
                  else if (Q === E && ce === 0) fe.push(x[`${$},${v + 1},${H}`]);
                  else if (Q === E && ce === u) fe.push(x[`${$ + 1},${v + 1},${H}`]);
                  else {
                    const D = P(ke, Pe, h), me = L.get(D);
                    if (me !== void 0) fe.push(me);
                    else {
                      const se = f.length;
                      f.push([
                        ke,
                        Pe,
                        h
                      ]), L.set(D, se), fe.push(se);
                    }
                  }
                }
                ee.push(fe);
              }
              for (let Q = 0; Q < E; Q++) for (let fe = 0; fe < u; fe++) {
                const ce = ee[Q][fe], ke = ee[Q][fe + 1], Pe = ee[Q + 1][fe + 1], D = ee[Q + 1][fe], me = C.length;
                qt.add(me), we.set(me, H - 1), C.push([
                  ce,
                  ke,
                  Pe,
                  D
                ]);
              }
            }
          }
        }
        if (Ht && wt) {
          const u = wt === "all" || wt === "x" || wt === "perimeter", E = wt === "all" || wt === "y" || wt === "perimeter", L = g.length - 1;
          for (let P = 0; P < L; P++) {
            if (u) for (let H = 0; H < d.length; H++) {
              if (wt === "perimeter" && H !== 0 && H !== d.length - 1) continue;
              const h = Math.floor((r.length - 1) / 2);
              for (let $ = 0; $ < r.length - 1; $++) {
                if (wt === "perimeter" && $ !== h || y($, H) || y($ + 1, H)) continue;
                const v = x[`${$},${H},${P}`], F = x[`${$ + 1},${H},${P + 1}`], X = x[`${$ + 1},${H},${P}`], K = x[`${$},${H},${P + 1}`];
                v !== void 0 && F !== void 0 && (C.push([
                  v,
                  F
                ]), we.set(C.length - 1, P)), X !== void 0 && K !== void 0 && (C.push([
                  X,
                  K
                ]), we.set(C.length - 1, P));
              }
            }
            if (E) for (let H = 0; H < r.length; H++) {
              if (wt === "perimeter" && H !== 0 && H !== r.length - 1) continue;
              const h = Math.floor((d.length - 1) / 2);
              for (let $ = 0; $ < d.length - 1; $++) {
                if (wt === "perimeter" && $ !== h || y(H, $) || y(H, $ + 1)) continue;
                const v = x[`${H},${$},${P}`], F = x[`${H},${$ + 1},${P + 1}`], X = x[`${H},${$ + 1},${P}`], K = x[`${H},${$},${P + 1}`];
                v !== void 0 && F !== void 0 && (C.push([
                  v,
                  F
                ]), we.set(C.length - 1, P)), X !== void 0 && K !== void 0 && (C.push([
                  X,
                  K
                ]), we.set(C.length - 1, P));
              }
            }
          }
        }
        return e.nodes.val = f, e.elements.val = C, e.nodeInputs && (e.nodeInputs.val = {
          supports: k
        }), Je = [
          ...r
        ], Qe = [
          ...d
        ], gt = g[g.length - 1] || 0, setTimeout(() => {
          It(), rn(r, d), es(), ts();
        }, 50), st(), {
          nodes: f.length,
          elements: C.length,
          nJointNodes: I
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, a = 8, c = 4) {
        ot.clear();
        const s = [], i = [], p = (M) => n + l * (1 - Math.pow(2 * M / t - 1, 2)), r = [], d = c + 1;
        for (let M = 0; M < d; M++) {
          const y = [], f = o / c * M;
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
          for (let x = 1; x < a; x++) {
            const I = t / a * x;
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
        for (let M = 0; M < d; M++) {
          const y = r[M];
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
        for (let M = 0; M < c; M++) for (let y = 2; y < r[0].length; y++) i.push([
          r[M][y],
          r[M + 1][y]
        ]);
        for (let M = 0; M < c; M++) for (let y = 2; y < r[0].length - 1; y += 2) i.push([
          r[M][y],
          r[M + 1][y + 1]
        ]);
        const g = /* @__PURE__ */ new Map(), S = vt();
        for (let M = 0; M < d; M++) g.set(r[M][0], [
          ...S
        ]), g.set(r[M][1], [
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
            _e.colMat = 1, _e.vigaMat = 1, ot.clear(), nt("truss"), Cs();
            break;
          }
          case "beams": {
            _e.colMat = 0, _e.vigaMat = 0, _e.colShape = 0, ot.clear(), nt("beams"), Fs();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            _e.colMat = 1, _e.vigaMat = 1, ot.clear(), nt("3d"), Rs();
            break;
          }
          case "portico": {
            _e.colMat = 0, _e.vigaMat = 0, _e.colShape = 0, nt("frame"), Ne();
            break;
          }
          case "edificio": {
            nt("edificio"), _e.colMat = 0, _e.vigaMat = 0, _e.colShape = 0, ye = [], Ze = false, Te = false, Ht = false, Ne();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            nt("edificio"), _e.colMat = 1, _e.vigaMat = 1, _e.steelColType = 0, _e.steelVigaType = 0, ye = [], Te = true, Ce = 2;
            const o = re.reduce((l, a) => l + a, 0) / re.length, n = ne.reduce((l, a) => l + a, 0) / ne.length;
            Xe = o >= n ? "y" : "x", Ze = true, dt = 0.08, Ht = false, Ne();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            nt("edificio"), _e.colMat = 1, _e.vigaMat = 1, _e.steelColType = 0, _e.steelVigaType = 0, ye = [], Te = true, Ce = 2;
            const o = re.reduce((l, a) => l + a, 0) / re.length, n = ne.reduce((l, a) => l + a, 0) / ne.length;
            Xe = o >= n ? "y" : "x", Ze = true, dt = 0.08, Ht = true, wt = "perimeter", Ne();
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
            ], _e.colMat = 1, _e.vigaMat = 1, _e.steelColType = 0, _e.steelVigaType = 0, ye = [], Te = true, Ce = 2, Xe = re[0] >= ne[0] ? "y" : "x", Ze = true, dt = 0.08, mt = 3, Tt = 3, Ne();
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
            ot.clear(), nt("placa-3q"), Ps();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            ot.clear(), nt("placa-q4"), Os();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            ot.clear(), nt("losa-rect"), Ns();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            ot.clear(), nt("losa-plana"), qs();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            ot.clear(), nt("viga-alta"), _s();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            ot.clear(), nt("muro-contencion"), Ds();
            break;
          }
          case "zapata":
          case "footing": {
            ot.clear(), nt("zapata"), Bs();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            ot.clear(), nt("placa-orificios"), Hs();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            ot.clear(), nt("col-placa"), js();
            break;
          }
          case "talud":
          case "slope": {
            ot.clear(), nt("talud"), Ws();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            ot.clear(), nt("eiffel"), la();
            break;
          }
          case "arco":
          case "arco-gateway": {
            ot.clear(), nt("arco"), ia();
            break;
          }
          case "puente":
          case "puente-colgante": {
            ot.clear(), nt("puente"), ra();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            ot.clear(), nt("twisted"), ca();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            ot.clear(), nt("burj"), da();
            break;
          }
          case "opera":
          case "sydney-opera": {
            ot.clear(), nt("opera"), pa();
            break;
          }
          case "diagrid":
          case "gherkin": {
            ot.clear(), nt("diagrid"), fa();
            break;
          }
          case "muro-q4":
          case "shear-wall":
          case "muro-cantilever": {
            ot.clear(), nt("muro-q4"), ps();
            break;
          }
          case "viga-q4":
          case "cantilever-beam":
          case "viga-cantilever": {
            ot.clear(), nt("viga-q4"), ua();
            break;
          }
          case "placa-xz":
          case "placa-cantilever":
          case "losa-cantilever": {
            ot.clear(), nt("placa-xz"), ma();
            break;
          }
          case "pergola":
          case "cubierta": {
            ot.clear(), nt("pergola"), ga();
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
        const g = performance.now(), S = bs({
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
        }), M = performance.now() - g;
        console.log(`Solved in ${M.toFixed(1)} ms`), console.log(`w_max = ${S.maxW.toExponential(6)}`), console.log(`w_center = ${(S.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${S.maxMxx.toExponential(4)}, Myy_max = ${S.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${S.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${S.maxQx.toExponential(4)}, Qy_max = ${S.maxQy.toExponential(4)}`);
        const y = S.nodeResults.map((A) => [
          A.x,
          A.y,
          0
        ]), f = S.elementResults.map((A) => [
          ...A.nodes
        ]);
        e.nodes.val = y, e.elements.val = f;
        const x = /* @__PURE__ */ new Map();
        S.nodeResults.forEach((A, O) => {
          x.set(O, [
            0,
            0,
            A.w,
            A.bx,
            A.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: x
        });
        const I = /* @__PURE__ */ new Map();
        S.nodeResults.forEach((A, O) => {
          (A.x < 1e-10 || A.x > t - 1e-10 || A.y < 1e-10 || A.y > o - 1e-10) && I.set(O, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        });
        const C = /* @__PURE__ */ new Map();
        if (Math.abs(c) > 1e-30) {
          const A = c * t * o / y.length;
          y.forEach((O, k) => {
            I.has(k) || C.set(k, [
              0,
              0,
              A,
              0,
              0,
              0
            ]);
          });
        }
        if (e.nodeInputs && (e.nodeInputs.val = {
          supports: I,
          loads: C
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const A = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
          S.elementResults.forEach((m, u) => {
            A.set(u, [
              m.Mxx,
              m.Mxx,
              m.Mxx
            ]), O.set(u, [
              m.Myy,
              m.Myy,
              m.Myy
            ]), k.set(u, [
              m.Mxy,
              m.Mxy,
              m.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: A,
            bendingYY: O,
            bendingXY: k
          };
        }
        return setTimeout(() => It(), 50), st(), S;
      },
      set(t, o) {
        J[t] ? (J[t].val = o, console.log(`${t} = ${o}`), mo(), Ne()) : bt[t] ? (bt[t].val = o, console.log(`${t} = ${o}`), mo(), Ne()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...J,
          ...bt
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in J) o[l] = J[l].val;
          for (const l in bt) o[l] = bt[l].val;
          o.plateTheory = Re, o.supportType = St;
          const n = An()[T];
          return n && n[St] && (o.supportLabel = n[St].label), console.table(o), o;
        }
        if (J[t]) return J[t].val;
        if (bt[t]) return bt[t].val;
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
        }[t.toLowerCase()] || 3), Re = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[Re] || Re}`), T.includes("placa") && (mo(), Ne());
      },
      setBc(t) {
        const o = An()[T];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = n >= 0 ? n : 0;
        }
        St = t, St >= o.length && (St = 0), console.log(`${z("Apoyo")}: ${o[St].label} \u2192 DOFs: [${o[St].dofs.map((n) => n ? "1" : "0").join(",")}]`), mo(), Ne();
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
        t && (b = t), o && (N = o), w = Go(b, N);
        const n = Le.querySelector("#cad3d-force-unit"), l = Le.querySelector("#cad3d-length-unit");
        return n && (n.textContent = b), l && (l.textContent = N), T && nt(T), console.log(`Unidades: ${w.label} | E=${w.E.toExponential(3)} ${w.stress}`), w.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function As() {
      return _l(w);
    }
    function Ls() {
      return Dl(w);
    }
    let bt = {};
    function nt(t) {
      var _a2, _b, _c, _d;
      T = t, Fa.val = true, St = 0, window.__muroQ4ScaleSet = false, ve && Un(), J = {};
      const o = As()[t];
      if (o) for (const l of o) J[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      bt = {};
      const n = Ls()[t];
      if (n) for (const l of n) bt[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a2 = J.nVanosX) == null ? void 0 : _a2.val) ?? 2), a = Math.round(((_b = J.nVanosY) == null ? void 0 : _b.val) ?? 2);
        re = Array(l).fill(w.defaultSpan), ne = Array(a).fill(w.defaultSpan * 0.8);
        const c = Math.round(((_c = J.nPisos) == null ? void 0 : _c.val) ?? 3), s = ((_d = J.hPiso) == null ? void 0 : _d.val) ?? 3;
        _ = Array(c).fill(s);
      }
      mo(), setTimeout(() => {
        Za(), Ne();
      }, 50);
    }
    function ie(t) {
      var _a2, _b;
      return ((_a2 = J[t]) == null ? void 0 : _a2.val) ?? ((_b = bt[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function Ne() {
      var _a2;
      switch (T) {
        case "truss":
          Cs();
          break;
        case "beams":
          Fs();
          break;
        case "3d":
          Rs();
          break;
        case "frame": {
          const o = Math.round(ie("nVanos")), n = ie("spanV"), l = Math.round(ie("nPisos")), a = ie("hPiso");
          ot.frame(Array(o).fill(n), Array(l).fill(a));
          break;
        }
        case "edificio": {
          const o = ie("Lvix") || 0, n = ie("Lvdx") || 0, l = ie("Lviy") || 0, a = ie("Lvdy") || 0, c = Math.max(1, Math.round(ie("nSubViga") || 3)), s = Math.max(1, Math.round(ie("nSubCol") || 1)), i = ie("hPiso"), p = _.length > 0 ? [
            ..._
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
          ja();
          break;
        case "placa-3q":
          Ps();
          break;
        case "placa-q4":
          Os();
          break;
        case "losa-rect":
          Ns();
          break;
        case "losa-plana":
          qs();
          break;
        case "viga-alta":
          _s();
          break;
        case "muro-contencion":
          Ds();
          break;
        case "zapata":
          Bs();
          break;
        case "placa-orificios":
          Hs();
          break;
        case "col-placa":
          js();
          break;
        case "talud":
          Ws();
          break;
        case "eiffel":
          la();
          break;
        case "arco":
          ia();
          break;
        case "puente":
          ra();
          break;
        case "twisted":
          ca();
          break;
        case "burj":
          da();
          break;
        case "opera":
          pa();
          break;
        case "diagrid":
          fa();
          break;
        case "muro-q4":
          ps();
          break;
        case "viga-q4":
          ua();
          break;
        case "placa-xz":
          ma();
          break;
        case "pergola":
          ga();
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
        if (Z.size > 0 || V.size > 0 || W) {
          const o = e.elements.val, n = o.filter((l, a) => !(Z.has(a) || V.has(a) || W && !G.has(a)));
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
          To(), Xn();
        }, 30);
      }
    }
    function Cs() {
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
    function Fs() {
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
        const S = g / a, M = c.length;
        c.push([
          i[0] + (p[0] - i[0]) * S,
          i[1] + (p[1] - i[1]) * S,
          i[2] + (p[2] - i[2]) * S
        ]), s.push([
          r,
          M
        ]), r = M;
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
    function Rs() {
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
      for (let f = 0; f < l; f++) for (let x = 0; x < 4; x++) p.push([
        f * 4 + x,
        (f + 1) * 4 + x
      ]);
      for (let f = 0; f < l; f++) {
        const x = f * 4;
        p.push([
          x,
          x + 5
        ], [
          x + 3,
          x + 6
        ], [
          x,
          x + 7
        ], [
          x + 1,
          x + 6
        ]);
      }
      const r = [];
      for (let f = 1; f <= l; f++) {
        const x = f * 4;
        r.push([
          x,
          x + 1
        ], [
          x + 1,
          x + 2
        ], [
          x + 2,
          x + 3
        ], [
          x + 3,
          x
        ], [
          x,
          x + 2
        ]);
      }
      for (const [f, x] of r) {
        const I = c[f], C = c[x];
        let A = f;
        for (let O = 1; O < a; O++) {
          const k = O / a, m = i.length;
          i.push([
            I[0] + (C[0] - I[0]) * k,
            I[1] + (C[1] - I[1]) * k,
            I[2] + (C[2] - I[2]) * k
          ]), p.push([
            A,
            m
          ]), A = m;
        }
        p.push([
          A,
          x
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
      const g = ie("Ex") ?? 0, S = (ie("CM") ?? 0) + (ie("CV") ?? 0), M = s - 2, y = /* @__PURE__ */ new Map();
      if (g !== 0 && S === 0) y.set(M, [
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
        f === M ? g : 0,
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
    function ja() {
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
    function Ps() {
      const t = ie("Lx") || 15, o = ie("Ly") || 10, n = ie("meshSize") || 0.5, l = ie("q") || -3, a = ie("t") || 1, c = ie("E") || 3e7, s = ie("nu") || 0.3, i = c / (2 * (1 + s)), p = Re === 1 ? "Membrana" : Re === 2 ? "Kirchhoff" : "Mindlin", { nodes: r, elements: d, boundaryIndices: g } = Io({
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
      }), S = t * o, M = l * S / r.length, y = new Map(g.map((x) => [
        x,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), f = new Map(r.map((x, I) => [
        I,
        [
          0,
          0,
          M,
          0,
          0,
          0
        ]
      ]));
      e.nodes.val = r, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: f
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(d.map((x, I) => [
          I,
          c
        ])),
        elasticitiesOrthogonal: new Map(d.map((x, I) => [
          I,
          c
        ])),
        thicknesses: new Map(d.map((x, I) => [
          I,
          a
        ])),
        poissonsRatios: new Map(d.map((x, I) => [
          I,
          s
        ])),
        shearModuli: new Map(d.map((x, I) => [
          I,
          i
        ]))
      });
      try {
        const x = Rt(r, d, e.nodeInputs.val, e.elementInputs.val);
        x && e.deformOutputs && (e.deformOutputs.val = x);
        const I = Eo(r, d, e.elementInputs.val, x);
        I && e.analyzeOutputs && (e.analyzeOutputs.val = I), console.log(`Plate 3Q [${p}]: ${r.length} nodes, ${d.length} triangles, t=${a}, E=${c}, \u03BD=${s}`);
      } catch (x) {
        console.warn("Plate 3Q analysis failed:", x.message);
      }
      setTimeout(() => It(), 50), st();
    }
    function Os() {
      const t = ie("Lx") || 10, o = ie("Ly") || 10, n = Math.round(ie("nx") || 16), l = Math.round(ie("ny") || 16), a = ie("t") || 0.2, c = ie("q") || -10, s = ie("E") || 3e7, i = ie("nu") || 0.3, p = St === 1 ? "clamped" : "simply-supported", d = {
        1: 2,
        2: 1,
        3: 0
      }[Re] ?? 0;
      return ot.plateQ4(t, o, n, l, p, c, a, s, i, d);
    }
    function Ns() {
      const t = ie("a") || 6, o = ie("b") || 4, n = Math.round(ie("nx") || 12), l = Math.round(ie("ny") || 8), a = ie("t") || 0.1, c = ie("q") || -10, s = ie("E") || 35e6, i = ie("nu") || 0.15, r = {
        1: 2,
        2: 1,
        3: 0
      }[Re] ?? 0, d = ot.plateQ4(t, o, n, l, "simply-supported", c, a, s, i, r), g = s * a * a * a / (12 * (1 - i * i));
      let S = 0;
      for (let M = 1; M <= 19; M += 2) for (let y = 1; y <= 19; y += 2) {
        const f = M * M / (t * t) + y * y / (o * o);
        S += 1 / (M * y * f * f);
      }
      if (S *= 16 * Math.abs(c) / (Math.PI ** 6 * g), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${S.toExponential(6)}`), d) {
        const M = Math.abs((Math.abs(d.centerW || 0) - S) / S * 100);
        console.log(`   WASM w_center = ${(d.centerW || 0).toExponential(6)}, error = ${M.toFixed(2)}%`);
      }
      return d;
    }
    function qs() {
      const t = ie("t") || 0.2, o = ie("q") || -10, n = ie("E") || 35e6, l = ie("nu") || 0.2, a = ie("meshSize") || 0.6, c = [
        3.6,
        4.2,
        4.2,
        3.6
      ], s = [
        3,
        3.6,
        3
      ], i = c.reduce((h, $) => h + $, 0), p = s.reduce((h, $) => h + $, 0), r = [
        0
      ];
      for (const h of c) r.push(r[r.length - 1] + h);
      const d = [
        0
      ];
      for (const h of s) d.push(d[d.length - 1] + h);
      const g = Math.max(2, Math.round(i / a)), S = Math.max(2, Math.round(p / a)), M = i / g, y = p / S, f = [];
      for (let h = 0; h <= S; h++) for (let $ = 0; $ <= g; $++) f.push([
        $ * M,
        h * y
      ]);
      const x = [], I = /* @__PURE__ */ new Set();
      for (const h of r) for (const $ of d) {
        let v = 1 / 0, F = 0;
        for (let X = 0; X < f.length; X++) {
          const K = Math.hypot(f[X][0] - h, f[X][1] - $);
          K < v && (v = K, F = X);
        }
        I.has(F) || (I.add(F), x.push({
          node: F,
          dof: 0,
          k: 1e15
        }));
      }
      const A = {
        1: 2,
        2: 1,
        3: 0
      }[Re] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][A]}]: ${i}\xD7${p}m, ${g}\xD7${S} elem, ${I.size} columnas`);
      const O = performance.now(), k = bs({
        E: n,
        nu: l,
        thickness: t,
        meshLx: i,
        meshLy: p,
        meshNx: g,
        meshNy: S,
        bcType: "none",
        pressure: o,
        theoryType: A,
        springs: x
      }), m = performance.now() - O;
      console.log(`Solved in ${m.toFixed(1)} ms, w_max = ${k.maxW.toExponential(4)}`);
      const u = k.nodeResults.map((h) => [
        h.x,
        h.y,
        0
      ]), E = k.elementResults.map((h) => [
        ...h.nodes
      ]);
      e.nodes.val = u, e.elements.val = E;
      const L = /* @__PURE__ */ new Map();
      k.nodeResults.forEach((h, $) => {
        L.set($, [
          0,
          0,
          h.w,
          h.bx,
          h.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: L
      });
      const P = /* @__PURE__ */ new Map();
      for (const h of I) P.set(h, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const H = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const h = o * i * p / u.length;
        u.forEach(($, v) => {
          P.has(v) || H.set(v, [
            0,
            0,
            h,
            0,
            0,
            0
          ]);
        });
      }
      if (e.nodeInputs && (e.nodeInputs.val = {
        supports: P,
        loads: H
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const h = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
        k.elementResults.forEach((F, X) => {
          h.set(X, [
            F.Mxx,
            F.Mxx,
            F.Mxx
          ]), $.set(X, [
            F.Myy,
            F.Myy,
            F.Myy
          ]), v.set(X, [
            F.Mxy,
            F.Mxy,
            F.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: h,
          bendingYY: $,
          bendingXY: v
        };
      }
      setTimeout(() => It(), 50), st();
    }
    function _s() {
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
      }), S = r, M = 0.4, y = /* @__PURE__ */ new Map();
      for (let m = 0; m < S.length; m++) {
        const u = S[m][0], E = S[m][1];
        Math.abs(E) < 1e-6 && (u <= M + 1e-6 || u >= t - M - 1e-6) && y.set(m, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const f = (t - i) / 2, x = f + i, I = [];
      for (let m = 0; m < S.length; m++) if (Math.abs(S[m][1] - o) < 1e-6) {
        const u = S[m][0];
        u >= f - 1e-6 && u <= x + 1e-6 && I.push(m);
      }
      const C = s * i / Math.max(I.length, 1), A = /* @__PURE__ */ new Map();
      for (const m of I) A.set(m, [
        0,
        C,
        0,
        0,
        0,
        0
      ]);
      const O = {
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
        loads: A
      };
      try {
        const m = Rt(S, d, k, O), u = Eo(S, d, O, m), E = S.map((P) => [
          P[0],
          0,
          P[1]
        ]);
        if (e.nodes.val = E, e.elements.val = d, m && m.deformations) {
          const P = /* @__PURE__ */ new Map();
          m.deformations.forEach((H, h) => {
            P.set(h, [
              H[0],
              H[2],
              H[1],
              H[3],
              H[5],
              H[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: P
          });
        }
        if (e.nodeInputs) {
          const P = /* @__PURE__ */ new Map();
          y.forEach((h, $) => P.set($, h));
          const H = /* @__PURE__ */ new Map();
          A.forEach((h, $) => H.set($, [
            h[0],
            h[2],
            h[1],
            h[3],
            h[5],
            h[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: P,
            loads: H
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let L = 0;
        m && m.deformations && m.deformations.forEach((P) => {
          const H = Math.sqrt(P[0] * P[0] + P[1] * P[1] + P[2] * P[2]);
          L = Math.max(L, H);
        }), console.log(`Viga Alta: ${S.length} nodos, ${d.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${a}`), console.log(`  Carga: q=${s} kN/m sobre ${i}m central`), console.log(`  max|u| = ${L.toExponential(4)}`);
      } catch (m) {
        console.warn("Viga Alta analysis failed:", m.message);
      }
      setTimeout(() => It(), 50), st();
    }
    function Ds() {
      const t = ie("H") || 4, o = ie("B") || 3, n = ie("tw") || 0.3, l = ie("tb") || 0.4, a = ie("meshSize") || 0.2, c = ie("E") || 25e6, s = ie("nu") || 0.2, i = c / (2 * (1 + s)), p = ie("gamma") || 18, r = ie("Ka") || 0.33, d = ie("Es") || 5e4, g = ie("nus") || 0.3, S = d / (2 * (1 + g)), M = ie("kn") || 1e6, y = ie("ks") || 1e4, f = ie("gammaW") || 9.81, x = ie("Hw") || 3.5, I = ie("qs") || 0, C = St, A = o * 0.3, O = o * 0.7, k = [
        [
          -A,
          0,
          0
        ],
        [
          O,
          0,
          0
        ],
        [
          O,
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
          -A,
          l,
          0
        ]
      ];
      let m = [], u = [], E = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), P;
      if (C === 0) {
        const $ = Io({
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
        m = $.nodes, u = $.elements;
        for (let F = 0; F < m.length; F++) Math.abs(m[F][1]) < 1e-6 && E.set(F, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = [];
        for (let F = 0; F < m.length; F++) {
          const X = m[F][0], K = m[F][1];
          Math.abs(X - n) < a * 0.6 && K >= l - 1e-6 && v.push({
            idx: F,
            y: K
          });
        }
        v.sort((F, X) => F.y - X.y);
        for (let F = 0; F < v.length; F++) {
          const { idx: X, y: K } = v[F], le = l + t - K, ee = r * p * le + r * I;
          let Q = a;
          F > 0 && F < v.length - 1 ? Q = (v[F + 1].y - v[F - 1].y) / 2 : F === 0 && v.length > 1 ? Q = (v[1].y - v[0].y) / 2 : F === v.length - 1 && v.length > 1 && (Q = (v[F].y - v[F - 1].y) / 2);
          const fe = ee * Q;
          Math.abs(fe) > 1e-10 && L.set(X, [
            fe,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        P = {
          elasticities: new Map(u.map((F, X) => [
            X,
            c
          ])),
          elasticitiesOrthogonal: new Map(u.map((F, X) => [
            X,
            c
          ])),
          thicknesses: new Map(u.map((F, X) => [
            X,
            n
          ])),
          poissonsRatios: new Map(u.map((F, X) => [
            X,
            s
          ])),
          shearModuli: new Map(u.map((F, X) => [
            X,
            i
          ]))
        };
      } else if (C === 1 || C === 2) {
        const $ = O, v = l + t;
        if (C === 2) {
          const F = [
            [
              -A,
              0,
              0
            ],
            [
              $,
              0,
              0
            ],
            [
              $,
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
              -A,
              l,
              0
            ]
          ], X = Math.max(3, Math.ceil((v - l) / a)), K = [];
          for (let oe = 0; oe <= X; oe++) K.push([
            n,
            l + oe * (v - l) / X,
            0
          ]);
          const le = Io({
            points: [
              ...F,
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
          m = le.nodes, u = le.elements;
          const ee = a * 0.4, Q = [];
          for (let oe = 0; oe < m.length; oe++) {
            const Ee = m[oe][0], je = m[oe][1];
            Math.abs(Ee - n) < ee && je >= l - ee && Q.push(oe);
          }
          Q.sort((oe, Ee) => m[oe][1] - m[Ee][1]);
          const fe = [
            Q[0]
          ];
          for (let oe = 1; oe < Q.length; oe++) {
            const Ee = m[Q[oe]][1] - m[fe[fe.length - 1]][1];
            Math.abs(Ee) > a * 0.05 && fe.push(Q[oe]);
          }
          Q.length = 0, Q.push(...fe);
          const ce = /* @__PURE__ */ new Map();
          for (const oe of Q) {
            const Ee = m.length;
            m.push([
              m[oe][0],
              m[oe][1],
              m[oe][2]
            ]), ce.set(oe, Ee);
          }
          const ke = u.length, Pe = [];
          for (let oe = 0; oe < ke; oe++) {
            const Ee = u[oe], je = (m[Ee[0]][0] + m[Ee[1]][0] + m[Ee[2]][0]) / 3, at = (m[Ee[0]][1] + m[Ee[1]][1] + m[Ee[2]][1]) / 3, tt = je >= -A && je <= O && at >= 0 && at <= l, Mt = je >= 0 && je <= n && at >= l && at <= l + t, Ct = tt || Mt;
            if (Pe.push(!Ct), !Ct) for (let ut = 0; ut < Ee.length; ut++) {
              const yt = ce.get(Ee[ut]);
              yt !== void 0 && (Ee[ut] = yt);
            }
          }
          const D = u.length;
          for (let oe = 0; oe < Q.length - 1; oe++) {
            const Ee = Q[oe], je = Q[oe + 1], at = ce.get(Ee), tt = ce.get(je);
            u.push([
              je,
              Ee,
              at,
              tt
            ]);
          }
          const me = u.length - D, se = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map();
          for (let oe = 0; oe < ke; oe++) Pe[oe] ? (se.set(oe, d), ue.set(oe, d), ge.set(oe, g), Me.set(oe, S), te.set(oe, 1)) : (se.set(oe, c), ue.set(oe, c), ge.set(oe, s), Me.set(oe, i), te.set(oe, 1));
          for (let oe = D; oe < u.length; oe++) se.set(oe, M), ue.set(oe, 0), ge.set(oe, 0), Me.set(oe, y), te.set(oe, 0);
          P = {
            elasticities: se,
            elasticitiesOrthogonal: ue,
            thicknesses: te,
            poissonsRatios: ge,
            shearModuli: Me
          };
          for (let oe = 0; oe < m.length; oe++) {
            const Ee = m[oe][0], je = m[oe][1];
            Math.abs(je) < 1e-6 ? E.set(oe, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Ee - $) < a * 0.1 && E.set(oe, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let oe = 0; oe < ke; oe++) {
            if (!Pe[oe]) continue;
            const Ee = u[oe], je = m[Ee[0]], at = m[Ee[1]], tt = m[Ee[2]], Mt = Math.abs((at[0] - je[0]) * (tt[1] - je[1]) - (tt[0] - je[0]) * (at[1] - je[1])) / 2, Ct = -p * Mt / 3;
            for (const ut of Ee) {
              const yt = L.get(ut) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              yt[1] += Ct, L.set(ut, yt);
            }
          }
          if (I > 0) {
            const oe = [];
            for (let Ee = 0; Ee < m.length; Ee++) {
              const je = m[Ee][0], at = m[Ee][1];
              Math.abs(at - v) < a * 0.1 && je > n - 1e-6 && oe.push({
                idx: Ee,
                x: je
              });
            }
            oe.sort((Ee, je) => Ee.x - je.x);
            for (let Ee = 0; Ee < oe.length; Ee++) {
              let je = a;
              Ee > 0 && Ee < oe.length - 1 ? je = (oe[Ee + 1].x - oe[Ee - 1].x) / 2 : Ee === 0 && oe.length > 1 ? je = (oe[1].x - oe[0].x) / 2 : Ee === oe.length - 1 && oe.length > 1 && (je = (oe[Ee].x - oe[Ee - 1].x) / 2);
              const at = -I * je, tt = L.get(oe[Ee].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              tt[1] += at, L.set(oe[Ee].idx, tt);
            }
          }
          console.log(`  Interfaz Goodman: ${Q.length} nodos interfaz, ${me} elem interfaz, kn=${M}, ks=${y}`);
        } else {
          const F = [
            [
              -A,
              0,
              0
            ],
            [
              $,
              0,
              0
            ],
            [
              $,
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
              -A,
              l,
              0
            ]
          ], X = [
            [
              n,
              l,
              0
            ]
          ], K = Io({
            points: [
              ...F,
              ...X
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
          m = K.nodes, u = K.elements;
          const le = (D) => {
            const me = (m[D[0]][0] + m[D[1]][0] + m[D[2]][0]) / 3, se = (m[D[0]][1] + m[D[1]][1] + m[D[2]][1]) / 3, ue = me >= -A && me <= O && se >= 0 && se <= l, te = me >= 0 && me <= n && se >= l && se <= l + t;
            return ue || te;
          }, ee = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), Pe = [];
          for (let D = 0; D < u.length; D++) {
            const me = le(u[D]);
            Pe.push(!me), me ? (ee.set(D, c), Q.set(D, c), ce.set(D, s), ke.set(D, i), fe.set(D, 1)) : (ee.set(D, d), Q.set(D, d), ce.set(D, g), ke.set(D, S), fe.set(D, 1));
          }
          P = {
            elasticities: ee,
            elasticitiesOrthogonal: Q,
            thicknesses: fe,
            poissonsRatios: ce,
            shearModuli: ke
          };
          for (let D = 0; D < m.length; D++) {
            const me = m[D][0], se = m[D][1];
            Math.abs(se) < 1e-6 ? E.set(D, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(me - $) < a * 0.1 && E.set(D, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let D = 0; D < u.length; D++) {
            if (!Pe[D]) continue;
            const me = u[D], se = m[me[0]], ue = m[me[1]], te = m[me[2]], ge = Math.abs((ue[0] - se[0]) * (te[1] - se[1]) - (te[0] - se[0]) * (ue[1] - se[1])) / 2, Me = -p * ge / 3;
            for (const oe of me) {
              const Ee = L.get(oe) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ee[1] += Me, L.set(oe, Ee);
            }
          }
          if (I > 0) {
            const D = [];
            for (let me = 0; me < m.length; me++) {
              const se = m[me][0], ue = m[me][1];
              Math.abs(ue - v) < a * 0.1 && se > n - 1e-6 && D.push({
                idx: me,
                x: se
              });
            }
            D.sort((me, se) => me.x - se.x);
            for (let me = 0; me < D.length; me++) {
              let se = a;
              me > 0 && me < D.length - 1 ? se = (D[me + 1].x - D[me - 1].x) / 2 : me === 0 && D.length > 1 ? se = (D[1].x - D[0].x) / 2 : me === D.length - 1 && D.length > 1 && (se = (D[me].x - D[me - 1].x) / 2);
              const ue = -I * se, te = L.get(D[me].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              te[1] += ue, L.set(D[me].idx, te);
            }
          }
        }
      }
      if (C === 3) {
        const $ = Io({
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
        m = $.nodes, u = $.elements;
        for (let le = 0; le < m.length; le++) Math.abs(m[le][1]) < 1e-6 && E.set(le, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = l + t, F = Math.min(x, t), X = v - F, K = [];
        for (let le = 0; le < m.length; le++) {
          const ee = m[le][0], Q = m[le][1];
          Math.abs(ee - n) < a * 0.6 && Q >= l - 1e-6 && K.push({
            idx: le,
            y: Q
          });
        }
        K.sort((le, ee) => le.y - ee.y);
        for (let le = 0; le < K.length; le++) {
          const { idx: ee, y: Q } = K[le], fe = Math.max(0, v - Q);
          if (fe <= 0 || Q < X - 1e-6) continue;
          const ce = Math.min(fe, F), ke = f * ce;
          let Pe = a;
          le > 0 && le < K.length - 1 ? Pe = (K[le + 1].y - K[le - 1].y) / 2 : le === 0 && K.length > 1 ? Pe = (K[1].y - K[0].y) / 2 : le === K.length - 1 && K.length > 1 && (Pe = (K[le].y - K[le - 1].y) / 2);
          const D = ke * Pe;
          Math.abs(D) > 1e-10 && L.set(ee, [
            D,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        P = {
          elasticities: new Map(u.map((le, ee) => [
            ee,
            c
          ])),
          elasticitiesOrthogonal: new Map(u.map((le, ee) => [
            ee,
            c
          ])),
          thicknesses: new Map(u.map((le, ee) => [
            ee,
            n
          ])),
          poissonsRatios: new Map(u.map((le, ee) => [
            ee,
            s
          ])),
          shearModuli: new Map(u.map((le, ee) => [
            ee,
            i
          ]))
        };
      }
      const H = {
        supports: E,
        loads: L
      }, h = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const $ = Rt(m, u, H, P), v = u.filter((fe) => fe.length === 3), F = {};
        for (const fe of Object.keys(P)) {
          const ce = P[fe];
          if (ce && ce instanceof Map) {
            const ke = /* @__PURE__ */ new Map();
            let Pe = 0;
            for (let D = 0; D < u.length; D++) u[D].length === 3 && (ce.has(D) && ke.set(Pe, ce.get(D)), Pe++);
            F[fe] = ke;
          }
        }
        const X = Eo(m, v, F, $), K = m.map((fe) => [
          fe[0],
          0,
          fe[1]
        ]);
        if (e.nodes.val = K, e.elements.val = v, $ && $.deformations) {
          const fe = /* @__PURE__ */ new Map();
          $.deformations.forEach((ce, ke) => {
            fe.set(ke, [
              ce[0],
              ce[2],
              ce[1],
              ce[3],
              ce[5],
              ce[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: fe
          });
        }
        const le = /* @__PURE__ */ new Map();
        E.forEach((fe, ce) => le.set(ce, fe));
        const ee = /* @__PURE__ */ new Map();
        L.forEach((fe, ce) => ee.set(ce, [
          fe[0],
          fe[2],
          fe[1],
          fe[3],
          fe[5],
          fe[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: le,
          loads: ee
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let Q = 0;
        $ && $.deformations && $.deformations.forEach((fe) => {
          const ce = Math.sqrt(fe[0] * fe[0] + fe[1] * fe[1] + fe[2] * fe[2]);
          Q = Math.max(Q, ce);
        }), console.log(`Muro Contencion [${h[C]}]: ${m.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${r}, gamma=${p}, qs=${I}`), C === 1 && console.log(`  Es=${d}, nus=${g}`), C === 2 && console.log(`  Es=${d}, nus=${g}, kn=${M}, ks=${y}`), C === 3 && console.log(`  gammaW=${f}, Hw=${x}`), console.log(`  max|u| = ${Q.toExponential(4)}`);
      } catch ($) {
        console.warn("Muro Contencion failed:", $.message);
      }
      setTimeout(() => It(), 50), st();
    }
    function Bs() {
      const t = ie("Lx") || 2, o = ie("Ly") || 2, n = ie("t") || 0.5, l = ie("colA") || 0.4, a = ie("colH") || 1.5, c = Math.round(ie("nx") || 8), s = Math.round(ie("ny") || 8), i = ie("E") || 25e6, p = ie("nu") || 0.2, r = ie("P") || -500, d = ie("Mx") || 0, g = ie("My") || 0, S = ie("ks") || 2e4, M = t / c, y = o / s, f = t / 2, x = o / 2, I = l / 2, C = [];
      for (let E = 0; E <= s; E++) for (let L = 0; L <= c; L++) {
        const P = E * (c + 1) + L;
        let H = M, h = y;
        (L === 0 || L === c) && (H = M / 2), (E === 0 || E === s) && (h = y / 2), C.push({
          node: P,
          dof: 0,
          k: S * H * h
        });
      }
      let A = 0;
      for (let E = 0; E <= s; E++) for (let L = 0; L <= c; L++) Math.abs(L * M - f) <= I + 1e-6 && Math.abs(E * y - x) <= I + 1e-6 && A++;
      const O = r / Math.max(A, 1), k = [];
      for (let E = 0; E <= s; E++) for (let L = 0; L <= c; L++) {
        const P = L * M, H = E * y;
        Math.abs(P - f) <= I + 1e-6 && Math.abs(H - x) <= I + 1e-6 && k.push({
          node: E * (c + 1) + L,
          dof: 0,
          value: O
        });
      }
      if (Math.abs(d) > 1e-6) {
        const E = I > 1e-6 ? I : y, L = d / E;
        for (let P = 0; P <= s; P++) for (let H = 0; H <= c; H++) {
          const h = H * M, $ = P * y;
          if (Math.abs(h - f) <= I + 1e-6 && Math.abs($ - x) <= I + 1e-6) {
            const v = $ - x;
            if (Math.abs(v) > 1e-6) {
              const F = v > 0 ? 1 : -1;
              k.push({
                node: P * (c + 1) + H,
                dof: 0,
                value: F * L / A * 2
              });
            }
          }
        }
      }
      if (Math.abs(g) > 1e-6) {
        const E = I > 1e-6 ? I : M, L = g / E;
        for (let P = 0; P <= s; P++) for (let H = 0; H <= c; H++) {
          const h = H * M, $ = P * y;
          if (Math.abs(h - f) <= I + 1e-6 && Math.abs($ - x) <= I + 1e-6) {
            const v = h - f;
            if (Math.abs(v) > 1e-6) {
              const F = v > 0 ? 1 : -1;
              k.push({
                node: P * (c + 1) + H,
                dof: 0,
                value: F * L / A * 2
              });
            }
          }
        }
      }
      const u = {
        1: 2,
        2: 1,
        3: 0
      }[Re] ?? 1;
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${c}x${s} elem`), console.log(`  col=${l}m, P=${r}, Mx=${d}, My=${g}, ks=${S}`);
      try {
        const E = bs({
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
          springs: C,
          pointLoads: k
        });
        console.log(`  Solved: w_max = ${E.maxW.toExponential(4)}`);
        const L = E.nodeResults.map((X) => [
          X.x,
          X.y,
          0
        ]), P = L.length;
        L.push([
          f - I,
          x - I,
          0
        ]), L.push([
          f + I,
          x - I,
          0
        ]), L.push([
          f + I,
          x + I,
          0
        ]), L.push([
          f - I,
          x + I,
          0
        ]), L.push([
          f - I,
          x - I,
          a
        ]), L.push([
          f + I,
          x - I,
          a
        ]), L.push([
          f + I,
          x + I,
          a
        ]), L.push([
          f - I,
          x + I,
          a
        ]);
        const H = E.elementResults.map((X) => [
          ...X.nodes
        ]);
        H.push([
          P,
          P + 4
        ]), H.push([
          P + 1,
          P + 5
        ]), H.push([
          P + 2,
          P + 6
        ]), H.push([
          P + 3,
          P + 7
        ]), H.push([
          P + 4,
          P + 5
        ]), H.push([
          P + 5,
          P + 6
        ]), H.push([
          P + 6,
          P + 7
        ]), H.push([
          P + 7,
          P + 4
        ]), H.push([
          P,
          P + 1
        ]), H.push([
          P + 1,
          P + 2
        ]), H.push([
          P + 2,
          P + 3
        ]), H.push([
          P + 3,
          P
        ]), e.nodes.val = L, e.elements.val = H;
        const h = /* @__PURE__ */ new Map();
        E.nodeResults.forEach((X, K) => {
          h.set(K, [
            0,
            0,
            X.w,
            X.bx,
            X.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: h
        });
        const $ = /* @__PURE__ */ new Map();
        E.nodeResults.forEach((X, K) => {
          const le = X.x, ee = X.y;
          (le < 1e-6 || le > t - 1e-6 || ee < 1e-6 || ee > o - 1e-6) && $.set(K, [
            false,
            false,
            true,
            false,
            false,
            false
          ]);
        });
        const v = /* @__PURE__ */ new Map();
        if (v.set(P + 4, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), v.set(P + 5, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), v.set(P + 6, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), v.set(P + 7, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), e.nodeInputs && (e.nodeInputs.val = {
          supports: $,
          loads: v
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const X = E.elementResults.length, K = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map();
          E.elementResults.forEach((Q, fe) => {
            K.set(fe, [
              Q.Mxx,
              Q.Mxx,
              Q.Mxx
            ]), le.set(fe, [
              Q.Myy,
              Q.Myy,
              Q.Myy
            ]), ee.set(fe, [
              Q.Mxy,
              Q.Mxy,
              Q.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: K,
            bendingYY: le,
            bendingXY: ee
          };
        }
        const F = et();
        F && (F.settings.shellResults.val = "bendingXX");
      } catch (E) {
        console.warn("Zapata solver failed:", E.message);
      }
      setTimeout(() => It(), 50), st();
    }
    function Hs() {
      const t = ie("Lx") || 0.4, o = ie("Ly") || 0.4, n = ie("t") || 0.025, l = ie("dBolt") || 0.022, a = ie("sx") || 0.28, c = ie("sy") || 0.28, s = ie("colA") || 0.2, i = ie("meshSize") || 8e-3, p = ie("E") || 2e8, r = ie("nu") || 0.3, d = p / (2 * (1 + r)), g = ie("P") || -200, S = Math.round(ie("nBolts") || 4), M = t / 2, y = o / 2, f = l / 2, x = s / 2, I = [];
      S >= 4 && (I.push([
        M - a / 2,
        y - c / 2
      ]), I.push([
        M + a / 2,
        y - c / 2
      ]), I.push([
        M + a / 2,
        y + c / 2
      ]), I.push([
        M - a / 2,
        y + c / 2
      ])), S >= 6 && (I.push([
        M,
        y - c / 2
      ]), I.push([
        M,
        y + c / 2
      ])), S >= 8 && (I.push([
        M - a / 2,
        y
      ]), I.push([
        M + a / 2,
        y
      ]));
      const { nodes: C, elements: A } = Io({
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
      }), O = (h, $) => {
        for (const [v, F] of I) if ((h - v) * (h - v) + ($ - F) * ($ - F) < f * f) return true;
        return false;
      }, k = A.filter((h) => {
        const $ = (C[h[0]][0] + C[h[1]][0] + C[h[2]][0]) / 3, v = (C[h[0]][1] + C[h[1]][1] + C[h[2]][1]) / 3;
        return !O($, v);
      }), m = C, u = /* @__PURE__ */ new Map();
      for (let h = 0; h < m.length; h++) {
        const $ = m[h][0], v = m[h][1];
        for (const [F, X] of I) {
          const K = Math.sqrt(($ - F) * ($ - F) + (v - X) * (v - X));
          K >= f * 0.7 && K <= f * 1.5 && u.set(h, [
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
      let L = 0;
      for (let h = 0; h < m.length; h++) {
        const $ = m[h][0], v = m[h][1];
        Math.abs($ - M) <= x && Math.abs(v - y) <= x && L++;
      }
      const P = g / Math.max(L, 1);
      for (let h = 0; h < m.length; h++) {
        const $ = m[h][0], v = m[h][1];
        if (Math.abs($ - M) <= x && Math.abs(v - y) <= x) {
          const F = E.get(h) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          F[2] += P, E.set(h, F);
        }
      }
      const H = {
        elasticities: new Map(k.map((h, $) => [
          $,
          p
        ])),
        elasticitiesOrthogonal: new Map(k.map((h, $) => [
          $,
          p
        ])),
        thicknesses: new Map(k.map((h, $) => [
          $,
          n
        ])),
        poissonsRatios: new Map(k.map((h, $) => [
          $,
          r
        ])),
        shearModuli: new Map(k.map((h, $) => [
          $,
          d
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${S} pernos d=${l * 1e3}mm`), console.log(`  P=${g} kN, col=${s * 1e3}mm, mesh=${i * 1e3}mm`), console.log(`  ${k.length} triangulos, ${m.length} nodos`);
      try {
        const h = Rt(m, k, {
          supports: u,
          loads: E
        }, H), $ = Eo(m, k, H, h);
        e.nodes.val = m, e.elements.val = k, h && e.deformOutputs && (e.deformOutputs.val = h), e.nodeInputs && (e.nodeInputs.val = {
          supports: u,
          loads: E
        }), e.elementInputs && (e.elementInputs.val = {}), $ && e.analyzeOutputs && (e.analyzeOutputs.val = $);
        let v = 0;
        h && h.deformations && h.deformations.forEach((F) => {
          const X = Math.sqrt(F[0] * F[0] + F[1] * F[1] + F[2] * F[2]);
          v = Math.max(v, X);
        }), console.log(`  max|u| = ${v.toExponential(4)}`);
      } catch (h) {
        console.warn("Placa Base failed:", h.message);
      }
      setTimeout(() => It(), 50), st();
    }
    function js() {
      const t = ie("colB") || 0.3, o = ie("colH") || 0.3, n = ie("colT") || 8e-3, l = ie("colLen") || 1.5, a = ie("Lx") || 0.45, c = ie("Ly") || 0.45, s = ie("tPlaca") || 0.025, i = ie("dBolt") || 0.022, p = ie("sx") || 0.32, r = ie("sy") || 0.32, d = Math.round(ie("nSubColV") || 6), g = Math.round(ie("nSubColH") || 4), S = Math.round(ie("nSubPlaca") || 10), M = ie("E") || 2e8, y = ie("nu") || 0.3, f = M / (2 * (1 + y)), x = ie("P") || -300, I = a / 2, C = c / 2, A = i / 2, O = t / 2, k = o / 2, m = [], u = [], E = S, L = a / E, P = c / E, H = (ue, te) => te * (E + 1) + ue;
      for (let ue = 0; ue <= E; ue++) for (let te = 0; te <= E; te++) m.push([
        te * L,
        ue * P,
        0
      ]);
      const h = [
        [
          I - p / 2,
          C - r / 2
        ],
        [
          I + p / 2,
          C - r / 2
        ],
        [
          I + p / 2,
          C + r / 2
        ],
        [
          I - p / 2,
          C + r / 2
        ]
      ], $ = (ue, te) => {
        for (const [ge, Me] of h) if ((ue - ge) * (ue - ge) + (te - Me) * (te - Me) < A * A) return true;
        return false;
      }, v = u.length;
      for (let ue = 0; ue < E; ue++) for (let te = 0; te < E; te++) {
        const ge = (te + 0.5) * L, Me = (ue + 0.5) * P;
        $(ge, Me) || u.push([
          H(te, ue),
          H(te + 1, ue),
          H(te + 1, ue + 1),
          H(te, ue + 1)
        ]);
      }
      const F = u.length - v, X = d, K = g, le = [
        [
          I - O,
          C - k
        ],
        [
          I + O,
          C - k
        ],
        [
          I + O,
          C + k
        ],
        [
          I - O,
          C + k
        ]
      ], ee = u.length, Q = [
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
      ], fe = (ue, te) => {
        for (let ge = 0; ge < (E + 1) * (E + 1); ge++) if (Math.abs(m[ge][0] - ue) < L * 0.3 && Math.abs(m[ge][1] - te) < P * 0.3 && Math.abs(m[ge][2]) < 1e-6) return ge;
        return -1;
      };
      for (const [ue, te] of Q) {
        const [ge, Me] = le[ue], [oe, Ee] = le[te], je = [];
        for (let at = 0; at <= X; at++) {
          const tt = [], Mt = at / X * l;
          for (let Ct = 0; Ct <= K; Ct++) {
            const ut = Ct / K, yt = ge + ut * (oe - ge), wo = Me + ut * (Ee - Me);
            if (at === 0) {
              const Wt = fe(yt, wo);
              if (Wt >= 0) {
                tt.push(Wt);
                continue;
              }
            }
            let Ft = -1;
            for (let Wt = 0; Wt < m.length; Wt++) if (Math.abs(m[Wt][0] - yt) < 1e-6 && Math.abs(m[Wt][1] - wo) < 1e-6 && Math.abs(m[Wt][2] - Mt) < 1e-6) {
              Ft = Wt;
              break;
            }
            Ft >= 0 ? tt.push(Ft) : (tt.push(m.length), m.push([
              yt,
              wo,
              Mt
            ]));
          }
          je.push(tt);
        }
        for (let at = 0; at < X; at++) for (let tt = 0; tt < K; tt++) u.push([
          je[at][tt],
          je[at][tt + 1],
          je[at + 1][tt + 1],
          je[at + 1][tt]
        ]);
      }
      const ce = u.length - ee, ke = /* @__PURE__ */ new Map();
      for (let ue = 0; ue < (E + 1) * (E + 1); ue++) {
        const te = m[ue][0], ge = m[ue][1];
        for (const [Me, oe] of h) {
          const Ee = Math.sqrt((te - Me) * (te - Me) + (ge - oe) * (ge - oe));
          Ee >= A * 0.5 && Ee <= A * 2 && ke.set(ue, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const Pe = /* @__PURE__ */ new Map(), D = [];
      for (let ue = 0; ue < m.length; ue++) Math.abs(m[ue][2] - l) < 1e-6 && D.push(ue);
      const me = x / Math.max(D.length, 1);
      for (const ue of D) Pe.set(ue, [
        0,
        0,
        me,
        0,
        0,
        0
      ]);
      const se = {
        elasticities: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map()
      };
      for (let ue = v; ue < v + F; ue++) se.elasticities.set(ue, M), se.poissonsRatios.set(ue, y), se.thicknesses.set(ue, s), se.shearModuli.set(ue, f);
      for (let ue = ee; ue < ee + ce; ue++) se.elasticities.set(ue, M), se.poissonsRatios.set(ue, y), se.thicknesses.set(ue, n), se.shearModuli.set(ue, f);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${a * 1e3}x${c * 1e3}mm, t=${s * 1e3}mm, 4 pernos d=${i * 1e3}mm`), console.log(`  ${F} Q4 placa + ${ce} Q4 columna = ${u.length} total`), console.log(`  ${m.length} nodos, P=${x} kN`);
      try {
        const ue = Rt(m, u, {
          supports: ke,
          loads: Pe
        }, se), te = Eo(m, u, se, ue);
        e.nodes.val = m, e.elements.val = u, ue && e.deformOutputs && (e.deformOutputs.val = ue), e.nodeInputs && (e.nodeInputs.val = {
          supports: ke,
          loads: Pe
        }), e.elementInputs && (e.elementInputs.val = se), te && e.analyzeOutputs && (e.analyzeOutputs.val = te);
        let ge = 0;
        (ue == null ? void 0 : ue.deformations) && ue.deformations.forEach((Me) => {
          const oe = Math.sqrt(Me[0] * Me[0] + Me[1] * Me[1] + Me[2] * Me[2]);
          ge = Math.max(ge, oe);
        }), console.log(`  max|u| = ${ge.toExponential(4)}`);
      } catch (ue) {
        console.warn("Col+Placa failed:", ue.message), e.nodes.val = m, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
          supports: ke,
          loads: Pe
        });
      }
      setTimeout(() => It(), 50), st();
    }
    function Ws() {
      const t = ie("H") || 6, o = ie("angle") || 45, n = ie("bTop") || 3, l = ie("bBot") || 3, a = ie("meshSize") || 2, c = ie("E") || 5e4, s = ie("nu") || 0.3, i = ie("gamma") || 18, p = ie("c") || 15, r = ie("phi") || 30, d = ie("qs") || 0, g = t / Math.tan(o * Math.PI / 180), S = l + g + n, M = t, y = [
        [
          0,
          -M,
          0
        ],
        [
          S,
          -M,
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
      ], { nodes: f, elements: x } = Io({
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
      }), I = f, C = [], A = /* @__PURE__ */ new Map();
      for (let k = 0; k < I.length; k++) {
        const m = I[k][0], u = I[k][1];
        Math.abs(u + M) < 1e-6 ? (C.push({
          node: k,
          fixX: true,
          fixY: true
        }), A.set(k, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(m) < 1e-6 || Math.abs(m - S) < 1e-6) && (C.push({
          node: k,
          fixX: true,
          fixY: false
        }), A.set(k, [
          true,
          false,
          true,
          true,
          true,
          true
        ]));
      }
      const O = t - a * 0.3;
      try {
        const k = I.map(($) => [
          $[0],
          $[1]
        ]), m = x.map(($) => [
          $[0],
          $[1],
          $[2]
        ]), u = Ml({
          nodes: k,
          elements: m,
          E: c,
          nu: s,
          gamma: i,
          c: p,
          phi: r,
          thickness: 1,
          supports: C,
          surcharge: d,
          surfaceYThreshold: O
        }), E = I.map(($) => [
          $[0],
          0,
          $[1]
        ]);
        e.nodes.val = E, e.elements.val = x;
        const L = /* @__PURE__ */ new Map();
        for (let $ = 0; $ < u.displacements.length; $++) {
          const [v, F] = u.displacements[$];
          L.set($, [
            v,
            0,
            F,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: L
        }), e.nodeInputs && (e.nodeInputs.val = {
          supports: A
        }), e.elementInputs && (e.elementInputs.val = {});
        const P = /* @__PURE__ */ new Map();
        for (let $ = 0; $ < u.plasticStrain.length; $++) {
          const v = u.plasticStrain[$];
          P.set($, [
            v,
            v,
            v
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: P
        });
        let H = 0;
        for (const [$, v] of u.displacements) {
          const F = Math.sqrt($ * $ + v * v);
          H = Math.max(H, F);
        }
        let h = 0;
        for (const $ of u.plasticStrain) h = Math.max(h, $);
        console.log(`Talud SRM: ${I.length} nodos, ${x.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${p} kPa, \u03C6=${r}\xB0, \u03B3=${i}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${u.fos.toFixed(3)}`), console.log(`  max|u| = ${H.toExponential(4)}`), console.log(`  max \u03B5_pl = ${h.toExponential(4)}`), u.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : u.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (k) {
        console.warn("Talud SRM failed:", k.message);
      }
      setTimeout(() => It(), 50), st();
    }
    let xo = null, _t = null, vo = null;
    function Wa() {
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
      const o = an.find((n) => n.id === N);
      return t / o.toM;
    }
    function At(t) {
      const o = an.find((n) => n.id === N);
      return t * o.toM;
    }
    function Oo(t) {
      const o = ws.find((l) => l.id === U.forceId), n = an.find((l) => l.id === U.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function Gn(t) {
      const o = ws.find((l) => l.id === U.forceId), n = an.find((l) => l.id === U.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function Yn() {
      return U.label;
    }
    function Ga() {
      switch (an.find((o) => o.id === N).id) {
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
    function Ya() {
      const t = Oo(20594), o = Oo(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function Gs(t, o, n, l, a) {
      const c = _e.steelVigaType, s = c === 0 ? Ln() : Cn();
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
      if (_t) {
        try {
          _t.dispose();
        } catch {
        }
        _t = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), T !== "edificio" && T !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = Wa();
      if (!o) return;
      o.style.display = "";
      const n = w, l = Math.round(((_a2 = J.nPisos) == null ? void 0 : _a2.val) ?? 3), a = Ga(), c = Ya(), s = re.length || 1, i = ne.length || 1;
      for (; _e.perFloor.length < l; ) {
        const m = _e.perFloor.length > 0 ? JSON.parse(JSON.stringify(_e.perFloor[_e.perFloor.length - 1])) : ho(s, i);
        _e.perFloor.push(m);
      }
      _e.perFloor.length > l && (_e.perFloor.length = l);
      for (const m of _e.perFloor) {
        for (; m.vigasX.length < s; ) m.vigasX.push(m.vigasX.length > 0 ? {
          ...m.vigasX[m.vigasX.length - 1]
        } : xt());
        for (m.vigasX.length > s && (m.vigasX.length = s); m.vigasY.length < i; ) m.vigasY.push(m.vigasY.length > 0 ? {
          ...m.vigasY[m.vigasY.length - 1]
        } : xt());
        m.vigasY.length > i && (m.vigasY.length = i);
      }
      _t = new hn({
        title: `${z("Secciones")} (${n.label})`,
        container: o
      });
      const p = {
        colMat: _e.colMat
      };
      if (_t.addBinding(p, "colMat", {
        label: z("Col Material"),
        options: {
          [z("Hormigon")]: 0,
          [z("Acero")]: 1,
          CFT: 2
        }
      }).on("change", (m) => {
        _e.colMat = m.value, No(), Ne();
      }), _e.colMat === 0) {
        const m = {
          forma: _e.colShape
        };
        _t.addBinding(m, "forma", {
          label: z("Col forma"),
          options: {
            [z("Rectangular")]: 0,
            [z("Circular")]: 1
          }
        }).on("change", (E) => {
          _e.colShape = E.value, No(), Ne();
        });
        const u = {
          fc: +Oo(_e.fc).toFixed(1)
        };
        _t.addBinding(u, "fc", {
          min: c[0],
          max: c[1],
          step: c[2],
          label: `f'c col (${Yn()})`
        }), _t.on("change", (E) => {
          var _a3;
          ((_a3 = E.target) == null ? void 0 : _a3.key) === "fc" && (_e.fc = Gn(E.value), Ne());
        });
      } else if (_e.colMat === 1) {
        const m = {
          colType: _e.steelColType
        };
        _t.addBinding(m, "colType", {
          label: z("Col tipo"),
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            [z("Tubular")]: 3
          }
        }).on("change", (u) => {
          _e.steelColType = u.value, No(), Ne();
        });
      }
      _t.addBlade({
        view: "separator"
      });
      const r = {
        vigaMat: _e.vigaMat
      };
      if (_t.addBinding(r, "vigaMat", {
        label: z("Viga Material"),
        options: {
          [z("Hormigon")]: 0,
          [z("Acero")]: 1
        }
      }).on("change", (m) => {
        _e.vigaMat = m.value, No(), Ne();
      }), _e.vigaMat === 1) {
        const m = {
          vigaType: _e.steelVigaType
        };
        _t.addBinding(m, "vigaType", {
          label: z("Viga tipo"),
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            [z("Tubular")]: 3
          }
        }).on("change", (u) => {
          _e.steelVigaType = u.value, No(), Ne();
        });
      }
      const d = _e.steelColType === 0 ? Ln() : Cn();
      _e.steelVigaType === 0 ? Ln() : Cn();
      const g = N === "m" ? [
        5e-3,
        0.1,
        1e-3
      ] : N === "cm" ? [
        0.5,
        10,
        0.1
      ] : N === "mm" ? [
        5,
        100,
        1
      ] : N === "in" ? [
        0.2,
        4,
        0.05
      ] : [
        0.01,
        0.5,
        5e-3
      ];
      for (let m = 0; m < l; m++) {
        const u = _e.perFloor[m], E = _t.addFolder({
          title: `${z("Piso")} ${m + 1}`,
          expanded: m < 2
        });
        if (_e.colMat === 0) if (_e.colShape === 1) {
          const L = {
            dCol: +zt(u.dCol).toFixed(2)
          };
          E.addBinding(L, "dCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "d col"
          }), E.on("change", (P) => {
            var _a3;
            ((_a3 = P.target) == null ? void 0 : _a3.key) === "dCol" && (u.dCol = At(P.value), Ne());
          });
        } else {
          const L = {
            bCol: +zt(u.bCol).toFixed(2),
            hCol: +zt(u.hCol).toFixed(2)
          };
          E.addBinding(L, "bCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "b col"
          }), E.addBinding(L, "hCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "h col"
          }), E.on("change", (P) => {
            var _a3, _b;
            ((_a3 = P.target) == null ? void 0 : _a3.key) === "bCol" && (u.bCol = At(P.value), Ne()), ((_b = P.target) == null ? void 0 : _b.key) === "hCol" && (u.hCol = At(P.value), Ne());
          });
        }
        else if (_e.colMat === 1) if (_e.steelColType <= 1) {
          const L = {
            col: u.colProfileIdx
          };
          E.addBinding(L, "col", {
            label: z("Columna"),
            options: d
          }).on("change", (P) => {
            u.colProfileIdx = P.value, Ne();
          });
        } else if (_e.steelColType === 2) {
          const L = {
            bf: +zt(u.colBf ?? 0.3).toFixed(3),
            h: +zt(u.colHf ?? 0.3).toFixed(3),
            tf: +zt(u.colTf ?? 0.02).toFixed(3),
            tw: +zt(u.colTw ?? 0.012).toFixed(3)
          };
          E.addBinding(L, "bf", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col bf"
          }), E.addBinding(L, "h", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), E.addBinding(L, "tf", {
            min: g[0],
            max: g[1],
            step: g[2],
            label: "Col tf"
          }), E.addBinding(L, "tw", {
            min: g[0],
            max: g[1],
            step: g[2],
            label: "Col tw"
          }), E.on("change", (P) => {
            var _a3, _b, _c, _d;
            ((_a3 = P.target) == null ? void 0 : _a3.key) === "bf" && (u.colBf = At(P.value), Ne()), ((_b = P.target) == null ? void 0 : _b.key) === "h" && (u.colHf = At(P.value), Ne()), ((_c = P.target) == null ? void 0 : _c.key) === "tf" && (u.colTf = At(P.value), Ne()), ((_d = P.target) == null ? void 0 : _d.key) === "tw" && (u.colTw = At(P.value), Ne());
          });
        } else {
          const L = {
            bc: +zt(u.colBc ?? 0.3).toFixed(3),
            hc: +zt(u.colHc ?? 0.3).toFixed(3),
            t: +zt(u.colT ?? 0.01).toFixed(3)
          };
          E.addBinding(L, "bc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col b"
          }), E.addBinding(L, "hc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), E.addBinding(L, "t", {
            min: g[0],
            max: g[1],
            step: g[2],
            label: "Col t"
          }), E.on("change", (P) => {
            var _a3, _b, _c;
            ((_a3 = P.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = At(P.value), Ne()), ((_b = P.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = At(P.value), Ne()), ((_c = P.target) == null ? void 0 : _c.key) === "t" && (u.colT = At(P.value), Ne());
          });
        }
        else {
          const L = {
            bc: +zt(u.colBc ?? 0.3).toFixed(3),
            hc: +zt(u.colHc ?? 0.3).toFixed(3),
            t: +zt(u.colT ?? 0.01).toFixed(3),
            Es: +Oo(u.colEs ?? 2e8).toFixed(0),
            nuS: u.colNuS ?? 0.3,
            fc: +Oo(u.colFc ?? 28e3).toFixed(1),
            nuC: u.colNuC ?? 0.2
          };
          E.addBinding(L, "bc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col b"
          }), E.addBinding(L, "hc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), E.addBinding(L, "t", {
            min: g[0],
            max: g[1],
            step: g[2],
            label: "Col t"
          }), E.addBlade({
            view: "separator"
          });
          const P = +Oo(1e8).toFixed(0), H = +Oo(3e8).toFixed(0), h = Math.max(1, Math.round((H - P) / 200));
          E.addBinding(L, "Es", {
            min: P,
            max: H,
            step: h,
            label: `Es (${Yn()})`
          }), E.addBinding(L, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), E.addBinding(L, "fc", {
            min: c[0],
            max: c[1],
            step: c[2],
            label: `f'c (${Yn()})`
          }), E.addBinding(L, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), E.on("change", ($) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = $.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = At($.value), Ne()), ((_b = $.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = At($.value), Ne()), ((_c = $.target) == null ? void 0 : _c.key) === "t" && (u.colT = At($.value), Ne()), ((_d = $.target) == null ? void 0 : _d.key) === "Es" && (u.colEs = Gn($.value), Ne()), ((_e2 = $.target) == null ? void 0 : _e2.key) === "nuS" && (u.colNuS = $.value, Ne()), ((_f = $.target) == null ? void 0 : _f.key) === "fc" && (u.colFc = Gn($.value), Ne()), ((_g = $.target) == null ? void 0 : _g.key) === "nuC" && (u.colNuC = $.value, Ne());
          });
        }
        if (u.vigasX.length > 0) {
          const L = E.addFolder({
            title: `${z("Vigas X")} (${u.vigasX.length})`,
            expanded: false
          });
          Gs(L, u.vigasX, "x", a, g);
        }
        if (u.vigasY.length > 0) {
          const L = E.addFolder({
            title: `${z("Vigas Y")} (${u.vigasY.length})`,
            expanded: false
          });
          Gs(L, u.vigasY, "y", a, g);
        }
      }
      _t.addBlade({
        view: "separator"
      });
      const S = _t.addFolder({
        title: z("Vigas Secundarias"),
        expanded: false
      }), M = {
        activar: Te,
        direccion: Xe === "x" ? 0 : 1,
        cantidad: Ce
      };
      S.addBinding(M, "activar", {
        label: z("Activar")
      }), S.addBinding(M, "direccion", {
        label: z("Corren en"),
        options: {
          [z("X (entre ejes Y)")]: 0,
          [z("Y (entre ejes X)")]: 1
        }
      }), S.addBinding(M, "cantidad", {
        min: 1,
        max: 5,
        step: 1,
        label: z("Cantidad/vano")
      }), S.on("change", (m) => {
        var _a3, _b, _c;
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (Te = m.value, Ne()), ((_b = m.target) == null ? void 0 : _b.key) === "direccion" && (Xe = m.value === 0 ? "x" : "y", Ne()), ((_c = m.target) == null ? void 0 : _c.key) === "cantidad" && (Ce = Math.round(m.value), Ne());
      }), _t.addBlade({
        view: "separator"
      });
      const y = _t.addFolder({
        title: z("Losas de Piso"),
        expanded: true
      }), f = {
        activar: Ze,
        espesor: +zt(dt).toFixed(3),
        subdivX: mt,
        subdivY: Tt
      };
      y.addBinding(f, "activar", {
        label: z("Activar losas")
      }), y.addBinding(f, "espesor", {
        min: a[0],
        max: a[1] * 0.3,
        step: a[2],
        label: `${z("Espesor")} (${n.length})`
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
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (Ze = m.value, Ne()), ((_b = m.target) == null ? void 0 : _b.key) === "espesor" && (dt = At(m.value), Ne()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivX" && (mt = Math.round(m.value), Ne()), ((_d = m.target) == null ? void 0 : _d.key) === "subdivY" && (Tt = Math.round(m.value), Ne());
      }), _t.addBlade({
        view: "separator"
      });
      const x = _t.addFolder({
        title: z("Muros de Corte"),
        expanded: true
      }), I = {
        espesor: +zt(Ge).toFixed(3),
        subdivH: Ye,
        subdivW: be
      };
      x.addBinding(I, "espesor", {
        min: a[0],
        max: a[1],
        step: a[2],
        label: `${z("Espesor")} (${n.length})`
      }), x.addBinding(I, "subdivH", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. V"
      }), x.addBinding(I, "subdivW", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. H"
      }), x.on("change", (m) => {
        var _a3, _b, _c;
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "espesor" && (Ge = At(m.value), Ne()), ((_b = m.target) == null ? void 0 : _b.key) === "subdivH" && (Ye = Math.round(m.value), Ne()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivW" && (be = Math.round(m.value), Ne());
      });
      const C = re.length || 1, A = ne.length || 1, O = C + 1, k = A + 1;
      if (C > 0) {
        const m = x.addFolder({
          title: `${z("Muros")} dir X (${C} ${z("vanos")})`,
          expanded: false
        });
        for (let u = 0; u < C; u++) for (let E = 0; E < k; E++) {
          const L = `wx_${u}_${E}`, P = ye.some(($) => $.dir === "x" && $.bay === u && $.axisIdx === E), H = {};
          H[L] = P;
          const h = `${z("Vano")} X${u + 1} / ${z("Eje")} Y${String.fromCharCode(65 + E)}`;
          m.addBinding(H, L, {
            label: h
          }).on("change", ($) => {
            $.value ? ye.push({
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
      if (A > 0) {
        const m = x.addFolder({
          title: `${z("Muros")} dir Y (${A} ${z("vanos")})`,
          expanded: false
        });
        for (let u = 0; u < A; u++) for (let E = 0; E < O; E++) {
          const L = `wy_${u}_${E}`, P = ye.some(($) => $.dir === "y" && $.bay === u && $.axisIdx === E), H = {};
          H[L] = P;
          const h = `${z("Vano")} Y${u + 1} / ${z("Eje")} X${E + 1}`;
          m.addBinding(H, L, {
            label: h
          }).on("change", ($) => {
            $.value ? ye.push({
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
        x.addBlade({
          view: "separator"
        });
        const m = {
          muros: `${ye.length} ${z("ubicaciones")}`
        };
        x.addBinding(m, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function mo() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (de || (de = t.innerHTML), $e) {
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
      $e = new hn({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = As()[T];
      if (n) {
        const a = {};
        for (const s of n) {
          const i = J[s.key], p = i.min === 0 && i.max === 1 && i.step === 1;
          a[s.key] = p ? i.val >= 0.5 : i.val;
        }
        for (const s of n) {
          const i = J[s.key];
          i.min === 0 && i.max === 1 && i.step === 1 ? $e.addBinding(a, s.key, {
            label: i.label
          }) : $e.addBinding(a, s.key, {
            min: i.min,
            max: i.max,
            step: i.step,
            label: i.label
          });
        }
        const c = $e.addFolder({
          title: z("Rangos"),
          expanded: false
        });
        for (const s of n) {
          const i = J[s.key];
          if (i.min === 0 && i.max === 1 && i.step === 1) continue;
          const p = {
            min: J[s.key].min,
            max: J[s.key].max
          };
          c.addBinding(p, "min", {
            label: `${s.key} min`,
            step: s.step
          }), c.addBinding(p, "max", {
            label: `${s.key} max`,
            step: s.step
          }), c.on("change", () => {
            J[s.key] && (J[s.key].min = p.min, J[s.key].max = p.max, J[s.key].val < p.min && (J[s.key].val = p.min), J[s.key].val > p.max && (J[s.key].val = p.max)), mo(), Ne();
          });
        }
        $e.on("change", (s) => {
          var _a2, _b;
          const i = (_a2 = s.target) == null ? void 0 : _a2.key;
          if (i && J[i]) {
            if (J[i].val = typeof s.value == "boolean" ? s.value ? 1 : 0 : s.value, T === "edificio" && (i === "nVanosX" || i === "nVanosY" || i === "nPisos")) {
              if (i === "nVanosX" || i === "nVanosY") {
                const p = Math.round(J.nVanosX.val), r = Math.round(J.nVanosY.val);
                for (; re.length < p; ) re.push(re[re.length - 1] ?? w.defaultSpan);
                for (re.length > p && (re.length = p); ne.length < r; ) ne.push(ne[ne.length - 1] ?? w.defaultSpan * 0.8);
                ne.length > r && (ne.length = r);
              }
              if (i === "nPisos" || i === "hPiso") {
                const p = Math.round(J.nPisos.val), r = ((_b = J.hPiso) == null ? void 0 : _b.val) ?? 3;
                for (; _.length < p; ) _.push(_[_.length - 1] ?? r);
                _.length > p && (_.length = p);
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
            let M = "X: ";
            r > 0 && (M += `\u251C${r.toFixed(1)}\u2524`);
            for (let x = 0; x < re.length; x++) M += `[${p[x + (r > 0 ? 1 : 0)]}]\u2500\u2500${re[x].toFixed(1)}\u2500\u2500`;
            M += `[${p[re.length + (r > 0 ? 1 : 0)]}]`, d > 0 && (M += `\u251C${d.toFixed(1)}\u2524`);
            let y = "Y: ";
            g > 0 && (y += `\u251C${g.toFixed(1)}\u2524`);
            for (let x = 0; x < ne.length; x++) y += `[${x + 1 + (g > 0 ? 1 : 0)}]\u2500\u2500${ne[x].toFixed(1)}\u2500\u2500`;
            y += `[${ne.length + 1 + (g > 0 ? 1 : 0)}]`, S > 0 && (y += `\u251C${S.toFixed(1)}\u2524`);
            let f = "Z: ";
            for (let x = 0; x < _.length; x++) f += `P${x + 1}=${_[x].toFixed(1)} `;
            i.textContent = M + `
` + y + `
` + f;
          };
          a.innerHTML = "";
          const s = w;
          try {
            vo = new hn({
              title: `${z("Luces")} (${s.length})`,
              container: a
            });
            const p = vo.addFolder({
              title: z("Luces X"),
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
              }).on("change", (M) => {
                re[g] = M.value, Ne();
              });
            }
            const r = vo.addFolder({
              title: z("Luces Y"),
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
              }).on("change", (M) => {
                ne[g] = M.value, Ne();
              });
            }
            if (_.length > 0) {
              const d = vo.addFolder({
                title: z("Alturas por Piso"),
                expanded: true
              });
              for (let g = 0; g < _.length; g++) {
                const S = g, M = {
                  v: _[g]
                };
                d.addBinding(M, "v", {
                  min: s.heightRange[0],
                  max: s.heightRange[1],
                  step: s.heightRange[2],
                  label: `${z("Piso")} ${g + 1}`
                }).on("change", (y) => {
                  _[S] = y.value, Ne();
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
        const a = An()[T];
        if (a && a.length > 0) {
          const c = {};
          a.forEach((i, p) => {
            c[i.label] = p;
          });
          const s = {
            apoyo: St
          };
          $e.addBinding(s, "apoyo", {
            label: z("Apoyo"),
            options: c
          }).on("change", (i) => {
            St = i.value, Ne();
          });
        }
        if (T === "placa-3q" || T === "placa-q4") {
          const c = {
            teoria: Re
          };
          $e.addBinding(c, "teoria", {
            label: z("Teor\xEDa"),
            options: {
              [z("Membrana")]: 1,
              [z("Kirchhoff (delgada)")]: 2,
              [z("Mindlin (gruesa)")]: 3
            }
          }).on("change", (s) => {
            Re = s.value, Ne();
          });
        }
      }
      const l = Ls()[T];
      if (l && l.length > 0) {
        xo = new hn({
          title: `${z("Cargas Est\xE1ticas")} \u2014 ${o}`,
          container: t
        });
        const a = {};
        for (const s of l) a[s.key] = bt[s.key].val;
        for (const s of l) xo.addBinding(a, s.key, {
          min: bt[s.key].min,
          max: bt[s.key].max,
          step: bt[s.key].step,
          label: bt[s.key].label
        });
        const c = xo.addFolder({
          title: z("Rangos"),
          expanded: false
        });
        for (const s of l) {
          const i = {
            min: bt[s.key].min,
            max: bt[s.key].max
          };
          c.addBinding(i, "min", {
            label: `${s.key} min`,
            step: s.step
          }), c.addBinding(i, "max", {
            label: `${s.key} max`,
            step: s.step
          }), c.on("change", () => {
            bt[s.key] && (bt[s.key].min = i.min, bt[s.key].max = i.max, bt[s.key].val < i.min && (bt[s.key].val = i.min), bt[s.key].val > i.max && (bt[s.key].val = i.max)), mo(), Ne();
          });
        }
        xo.on("change", (s) => {
          var _a2;
          const i = (_a2 = s.target) == null ? void 0 : _a2.key;
          if (i && bt[i]) {
            if (bt[i].val = s.value, e.nodeInputs) {
              const p = e.nodeInputs.val;
              p.supports && (e.nodeInputs.val = {
                supports: p.supports
              });
            }
            setTimeout(() => Xn(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (a, c) => {
          if (J[a]) J[a].val = c, Ne(), mo();
          else if (bt[a]) {
            if (bt[a].val = c, e.nodeInputs) {
              const s = e.nodeInputs.val;
              s.supports && (e.nodeInputs.val = {
                supports: s.supports
              });
            }
            setTimeout(() => {
              Xn(), mo();
            }, 30);
          }
        },
        getParams: () => {
          const a = {};
          for (const c in J) a[c] = J[c].val;
          for (const c in bt) a[c] = bt[c].val;
          return a;
        },
        setGenerator: nt,
        createCustomPanel: (a, c, s) => Ja(a, c, s),
        removeCustomPanel: (a) => {
          Ys(a);
        }
      };
    }
    const Jn = /* @__PURE__ */ new Map();
    function Ja(t, o, n) {
      var _a2;
      Ys(t);
      let l = document.querySelector("#cad3d-custom-panels");
      if (!l) {
        l = document.createElement("div"), l.id = "cad3d-custom-panels";
        const i = document.querySelector("#parameters");
        i ? (_a2 = i.parentElement) == null ? void 0 : _a2.insertBefore(l, i.nextSibling) : document.body.appendChild(l);
      }
      const a = document.createElement("div");
      a.className = "cad3d-custom-panel", a.style.marginBottom = "4px", l.appendChild(a);
      const c = new hn({
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
      }), Jn.set(t, {
        pane: c,
        values: s
      }), console.log(`Panel "${t}" created with ${Object.keys(o).length} params`), s;
    }
    function Ys(t) {
      const o = Jn.get(t);
      if (o) {
        try {
          o.pane.dispose();
        } catch {
        }
        Jn.delete(t);
      }
    }
    function Va() {
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
      if (_t) {
        try {
          _t.dispose();
        } catch {
        }
        _t = null;
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
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && de && (n.innerHTML = de);
    }
    const Le = document.createElement("div");
    Le.id = "cad3d-panel";
    const Js = document.createElement("style");
    Js.textContent = `
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
  `, document.head.appendChild(Js), El() === "light" && document.documentElement.classList.add("awatif-light"), Sl((t) => {
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
    let Dt = null;
    function Ua() {
      var _a2, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, a = N, c = b, s = [];
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
          const S = r.map((M) => {
            var _a3;
            const y = (_a3 = M.map) == null ? void 0 : _a3.get(g);
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
    let dn = false;
    function Xa() {
      var _a2, _b, _c, _d;
      if (Dt) {
        Dt.remove(), Dt = null, dn = false;
        return;
      }
      const t = Ua();
      Dt = document.createElement("div"), Dt.id = "export-overlay", Dt.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, Dt.innerHTML = `
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
    `, document.body.appendChild(Dt), (_a2 = Dt.querySelector("#export-close")) == null ? void 0 : _a2.addEventListener("click", () => {
        Dt == null ? void 0 : Dt.remove(), Dt = null, dn = false;
      }), (_b = Dt.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = Dt.querySelector("#export-body"), n = Dt.querySelector("#export-minimize");
        dn = !dn, dn ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", Dt.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", Dt.style.width = "720px");
      }), (_c = Dt.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = Dt.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = Dt.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = Dt.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e2, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, a = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, c = {
          generator: T || "custom",
          units: {
            force: b,
            length: N
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
        const p = Dt.querySelector("#export-text");
        p.value = JSON.stringify(c, null, 2);
        const r = Dt.querySelector("#export-status");
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
    function Vn() {
      var _a2;
      if (!De || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const a = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (a <= 0) return;
        const c = $l(t, o, n, l, Math.min(a, 12));
        if (c.frequencies && c.frequencies.length > 0) {
          Fe = c, ze = t.map((r) => [
            ...r
          ]), xe = 0;
          const { extent: s } = zo(), i = (_a2 = c.modeShapes) == null ? void 0 : _a2[0];
          if (i) {
            let r = 0;
            for (let d = 0; d < t.length; d++) {
              const g = i[d * 6] || 0, S = i[d * 6 + 1] || 0, M = i[d * 6 + 2] || 0;
              r = Math.max(r, Math.sqrt(g * g + S * S + M * M));
            }
            Ve = r > 1e-12 ? s * 0.15 / r : 1;
          }
          const p = `${T} \u2014 ${t.length}n ${o.length}e`;
          ft.render(c, {
            title: p
          }), ft.div.style.display = "", pn(), console.log(`Modal: ${c.frequencies.length} modos. f\u2081 = ${c.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (a) {
        console.warn("Modal analysis failed:", a.message), Fe = null;
      }
    }
    function Un() {
      ve && (cancelAnimationFrame(ve), ve = 0), ze.length > 0 && (e.nodes.val = ze.map((o) => [
        ...o
      ]));
      const t = et();
      t && t.scene.traverse((o) => {
        var _a2;
        o.isMesh && ((_a2 = o.material) == null ? void 0 : _a2.vertexColors) && o.visible === false && (o.visible = true);
      }), ft.div.style.display = "none", Fe = null;
    }
    function pn() {
      var _a2;
      if (ve && cancelAnimationFrame(ve), !(Fe == null ? void 0 : Fe.modeShapes) || !ze.length) return;
      const t = Fe.modeShapes[xe];
      if (!t) return;
      const o = ((_a2 = Fe.frequencies) == null ? void 0 : _a2[xe]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), a = ze.length, c = e.elements.rawVal, { extent: s } = zo(), i = Le.querySelector("#cad3d-modal-scale"), p = i && parseFloat(i.value) || 15;
      let r = 0;
      for (let A = 0; A < a; A++) {
        const O = t[A * 6] || 0, k = t[A * 6 + 1] || 0, m = t[A * 6 + 2] || 0;
        r = Math.max(r, Math.sqrt(O * O + k * k + m * m));
      }
      const d = r > 1e-12 ? s * p / 100 / r : 1, g = et();
      if (!g) return;
      let S = null, M = null, y = null;
      g.scene.traverse((A) => {
        var _a3;
        !S && A.isPoints && A.geometry && (S = A), !M && A.isLineSegments && A.geometry && !A.name && (M = A), A.isMesh && ((_a3 = A.material) == null ? void 0 : _a3.vertexColors) && A.geometry && (y ? A.visible = false : y = A);
      });
      const f = new Float32Array(a * 3), x = [];
      for (const A of c) if (A.length === 2) x.push([
        A[0],
        A[1]
      ]);
      else for (let O = 0; O < A.length; O++) x.push([
        A[O],
        A[(O + 1) % A.length]
      ]);
      const I = new Float32Array(x.length * 6);
      function C() {
        const A = (performance.now() - l) / 1e3, O = Math.sin(2 * Math.PI * n * A) * d;
        for (let k = 0; k < a; k++) {
          const m = ze[k];
          f[k * 3] = m[0] + (t[k * 6] || 0) * O, f[k * 3 + 1] = m[1] + (t[k * 6 + 1] || 0) * O, f[k * 3 + 2] = m[2] + (t[k * 6 + 2] || 0) * O;
        }
        if (S) {
          const k = S.geometry, m = k.getAttribute("position");
          m && m.array.length === f.length ? (m.array.set(f), m.needsUpdate = true) : k.setAttribute("position", new Ho(f.slice(), 3));
        }
        if (M) {
          for (let u = 0; u < x.length; u++) {
            const [E, L] = x[u];
            I[u * 6] = f[E * 3], I[u * 6 + 1] = f[E * 3 + 1], I[u * 6 + 2] = f[E * 3 + 2], I[u * 6 + 3] = f[L * 3], I[u * 6 + 4] = f[L * 3 + 1], I[u * 6 + 5] = f[L * 3 + 2];
          }
          const k = M.geometry, m = k.getAttribute("position");
          m && m.array.length === I.length ? (m.array.set(I), m.needsUpdate = true) : k.setAttribute("position", new Ho(I.slice(), 3));
        }
        if (y) {
          const k = [];
          for (const m of c) if (m.length === 3) {
            const [u, E, L] = m;
            k.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), k.push(f[E * 3], f[E * 3 + 1], f[E * 3 + 2]), k.push(f[L * 3], f[L * 3 + 1], f[L * 3 + 2]);
          } else if (m.length === 4) {
            const [u, E, L, P] = m;
            k.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), k.push(f[E * 3], f[E * 3 + 1], f[E * 3 + 2]), k.push(f[L * 3], f[L * 3 + 1], f[L * 3 + 2]), k.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), k.push(f[L * 3], f[L * 3 + 1], f[L * 3 + 2]), k.push(f[P * 3], f[P * 3 + 1], f[P * 3 + 2]);
          }
          if (k.length > 0) {
            const m = y.geometry, u = new Float32Array(k), E = m.getAttribute("position");
            E && E.array.length === u.length ? (E.array.set(u), E.needsUpdate = true) : m.setAttribute("position", new Ho(u, 3));
          }
        }
        g.render(), ve = requestAnimationFrame(C);
      }
      ve = requestAnimationFrame(C);
    }
    function Xn() {
      var _a2, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val;
      let n = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const y = ie("CM") ?? 0, f = ie("CV") ?? 0, x = y + f, I = ie("Ex") ?? 0, C = ie("Ey") ?? 0;
        if (x === 0 && I === 0 && C === 0) return;
        const A = /* @__PURE__ */ new Map(), O = [];
        for (let $ = 0; $ < t.length; $++) n.supports.has($) || O.push($);
        const k = ($) => Math.round($ * 1e3) / 1e3, m = /* @__PURE__ */ new Set();
        n.supports.forEach(($, v) => {
          m.add(`${k(t[v][0])},${k(t[v][1])}`);
        });
        const u = /* @__PURE__ */ new Set();
        for (const $ of O) m.has(`${k(t[$][0])},${k(t[$][1])}`) && u.add($);
        const E = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set();
        if (I !== 0 || C !== 0) {
          let $ = -1 / 0, v = -1 / 0;
          for (const X of u) $ = Math.max($, k(t[X][0])), v = Math.max(v, k(t[X][1]));
          const F = /* @__PURE__ */ new Map();
          for (const X of u) {
            const K = k(t[X][2]);
            F.has(K) || F.set(K, []), F.get(K).push(X);
          }
          F.forEach((X) => {
            if (I !== 0) {
              const K = /* @__PURE__ */ new Set();
              for (const le of X) if (k(t[le][0]) === $) {
                const ee = k(t[le][1]);
                K.has(ee) || (K.add(ee), E.add(le));
              }
            }
            if (C !== 0) {
              const K = /* @__PURE__ */ new Set();
              for (const le of X) if (k(t[le][1]) === v) {
                const ee = k(t[le][0]);
                K.has(ee) || (K.add(ee), L.add(le));
              }
            }
          });
        }
        const P = 9.81, H = /* @__PURE__ */ new Map();
        for (let $ = 0; $ < o.length; $++) {
          const v = o[$], F = ((_a2 = l.densities) == null ? void 0 : _a2.get($)) ?? 0;
          if (!(Math.abs(F) < 1e-15)) {
            if (v.length === 2) {
              const X = ((_b = l.areas) == null ? void 0 : _b.get($)) ?? 0, K = t[v[0]], le = t[v[1]], ee = Math.sqrt((le[0] - K[0]) ** 2 + (le[1] - K[1]) ** 2 + (le[2] - K[2]) ** 2), fe = -(F * X * ee * P) / 2;
              H.set(v[0], (H.get(v[0]) ?? 0) + fe), H.set(v[1], (H.get(v[1]) ?? 0) + fe);
            } else if (v.length >= 3) {
              const X = ((_c = l.thicknesses) == null ? void 0 : _c.get($)) ?? 0;
              let K = 0;
              if (v.length === 3) {
                const [Q, fe, ce] = v.map((ke) => t[ke]);
                K = 0.5 * Math.abs((fe[0] - Q[0]) * (ce[1] - Q[1]) - (ce[0] - Q[0]) * (fe[1] - Q[1]));
              } else if (v.length === 4) {
                const [Q, fe, ce, ke] = v.map((Pe) => t[Pe]);
                if (K = 0.5 * Math.abs((fe[0] - Q[0]) * (ce[1] - Q[1]) - (ce[0] - Q[0]) * (fe[1] - Q[1])) + 0.5 * Math.abs((ce[0] - Q[0]) * (ke[1] - Q[1]) - (ke[0] - Q[0]) * (ce[1] - Q[1])), K < 1e-10) {
                  const Pe = [
                    fe[0] - Q[0],
                    fe[1] - Q[1],
                    fe[2] - Q[2]
                  ], D = [
                    ke[0] - Q[0],
                    ke[1] - Q[1],
                    ke[2] - Q[2]
                  ], me = [
                    Pe[1] * D[2] - Pe[2] * D[1],
                    Pe[2] * D[0] - Pe[0] * D[2],
                    Pe[0] * D[1] - Pe[1] * D[0]
                  ];
                  K = Math.sqrt(me[0] ** 2 + me[1] ** 2 + me[2] ** 2);
                }
              }
              const ee = -(F * X * K * P) / v.length;
              for (const Q of v) H.set(Q, (H.get(Q) ?? 0) + ee);
            }
          }
        }
        const h = /* @__PURE__ */ new Set();
        for (const $ of o) $.length === 2 && (h.add($[0]), h.add($[1]));
        for (const $ of O) {
          const v = E.has($) ? I : 0, F = L.has($) ? C : 0, X = H.get($) ?? 0, K = h.has($) ? x : 0, le = X + K;
          (v !== 0 || F !== 0 || Math.abs(le) > 1e-10) && A.set($, [
            v,
            F,
            le,
            0,
            0,
            0
          ]);
        }
        n = {
          ...n,
          loads: A
        }, e.nodeInputs.val = n;
      }
      const a = performance.now();
      let c = 0, s = 0, i = 0;
      for (const y of o) y.length === 2 ? c++ : y.length === 3 ? i++ : y.length === 4 && s++;
      const p = ((_d = n.supports) == null ? void 0 : _d.size) || 0, r = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, d = t.length * 6, g = d - p * 6, S = [], M = (y) => S.push(y);
      M('<b style="color:var(--cad-heading)">FEM Solver</b>'), M(`<span style="color:var(--cad-info)">${z("Modelo")}:</span> ${t.length} ${z("nodos")}, ${o.length} elem`), c && M(`&nbsp;&nbsp;Frames: <b>${c}</b>`), s && M(`&nbsp;&nbsp;Shell Q4: <b>${s}</b>`), i && M(`&nbsp;&nbsp;${z("Tri\xE1ngulos")}: <b>${i}</b>`), M(`&nbsp;&nbsp;${z("Apoyos")}: ${p} &nbsp;|&nbsp; ${z("Cargas")}: ${r}`), M(`<span style="color:var(--cad-info)">DOFs:</span> ${d} total, ~${g} ${z("libres")}`), M('<hr style="border-color:var(--cad-border);margin:4px 0">'), M(`<span style="color:#888">1.</span> ${z("Ensamblaje")} <b>K</b> global (${d}&times;${d})`), M("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const y = Rt(t, o, n, l), f = performance.now() - a;
        if (y) {
          e.deformOutputs.val = y, M(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${f.toFixed(0)} ms</span>`);
          let x = 0, I = -1, C = 0, A = 0;
          y.deformations && y.deformations.forEach((E, L) => {
            const P = Math.sqrt(E[0] * E[0] + E[1] * E[1] + E[2] * E[2]);
            P > x && (x = P, I = L, C = E[0], A = E[2]);
          }), M('<span style="color:#888">3.</span> Desplazamientos:'), M(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${x.toExponential(3)}</b> m <span style="color:#666">(nodo ${I})</span>`), M(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(C * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(A * 1e3).toFixed(4)} mm`);
          const O = performance.now(), k = Eo(t, o, l, y), m = performance.now() - O;
          k && (e.analyzeOutputs.val = k, M(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${m.toFixed(0)} ms</span>`), M("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const u = performance.now() - a;
          M('<hr style="border-color:var(--cad-border);margin:4px 0">'), M(`<b style="color:#00cc88">&#10004; Completado: ${u.toFixed(0)} ms</b>`);
        }
      } catch (y) {
        const f = performance.now() - a;
        M(`<b style="color:#ff4444">&#10008; Error (${f.toFixed(0)} ms): ${y.message}</b>`);
      }
      window.__femLog = S, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - a).toFixed(0)}ms`), De && setTimeout(() => Vn(), 50);
    }
    function Kn(t, o) {
      const n = t * o, l = t * o * o * o / 12, a = o * t * t * t / 12, c = Math.min(t, o), s = Math.max(t, o), i = c * c * c * s * (1 / 3 - 0.21 * c / s * (1 - c * c * c * c / (12 * s * s * s * s)));
      return {
        A: n,
        Iz: l,
        Iy: a,
        J: i
      };
    }
    function Vs(t) {
      const o = t / 2, n = Math.PI * o * o, l = Math.PI * o * o * o * o / 4, a = Math.PI * o * o * o * o / 2;
      return {
        A: n,
        Iz: l,
        Iy: l,
        J: a
      };
    }
    function Zn(t, o, n, l) {
      const a = o - 2 * n, c = 2 * t * n + a * l, s = (t * o * o * o - (t - l) * a * a * a) / 12, i = (2 * n * t * t * t + a * l * l * l) / 12, p = (2 * t * n * n * n + a * l * l * l) / 3;
      return {
        A: c,
        Iz: s,
        Iy: i,
        J: p
      };
    }
    function Qn(t, o, n) {
      const l = t - 2 * n, a = o - 2 * n, c = t * o - l * a, s = (t * o * o * o - l * a * a * a) / 12, i = (o * t * t * t - a * l * l * l) / 12, p = (t - n) * (o - n), r = 2 * ((t - n) / n + (o - n) / n), d = 4 * p * p / (r > 0 ? r : 1);
      return {
        A: c,
        Iz: s,
        Iy: i,
        J: d
      };
    }
    function Ka(t, o, n, l, a, c, s) {
      const p = 4700 * Math.sqrt(c / 1e3) * 1e3 / l, r = t - 2 * n, d = o - 2 * n, g = t * o - r * d, S = (t * o * o * o - r * d * d * d) / 12, M = (o * t * t * t - d * r * r * r) / 12, y = r * d, f = r * d * d * d / 12, x = d * r * r * r / 12, I = g + p * y, C = S + p * f, A = M + p * x, O = l / (2 * (1 + a)), k = (t - n) * (o - n), m = 2 * ((t - n) / n + (o - n) / n), u = 4 * k * k / (m > 0 ? m : 1);
      return {
        A: I,
        Iz: C,
        Iy: A,
        J: u,
        Es: l,
        Gs: O,
        A_steel: g,
        A_conc: y
      };
    }
    function To() {
      if (!e.elementInputs) return;
      const t = e.elements.val, o = w, n = {
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
        const { colMat: a, vigaMat: c, colShape: s, fc: i, perFloor: p } = _e, r = 4700 * Math.sqrt(i / 1e3) * 1e3, d = r / (2 * 1.2), g = 24 / 9.80665, S = o.E, M = o.G, y = o.rho;
        for (let f = 0; f < t.length; f++) {
          if (pe.has(f)) {
            const E = 4700 * Math.sqrt(i / 1e3) * 1e3, L = 0.2;
            n.elasticities.set(f, E), n.poissonsRatios.set(f, L), n.thicknesses.set(f, Ge), n.shearModuli.set(f, E / (2 * (1 + L))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          if (qt.has(f)) {
            const E = 4700 * Math.sqrt(i / 1e3) * 1e3, L = 0.2;
            n.elasticities.set(f, E), n.poissonsRatios.set(f, L), n.thicknesses.set(f, dt), n.shearModuli.set(f, E / (2 * (1 + L))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          const x = B.has(f), I = we.get(f) ?? 0, C = p[I] ?? p[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let A, O, k, m;
          if (x) if (a === 0) O = r, k = d, m = g, A = s === 1 ? Vs(C.dCol) : Kn(C.bCol, C.hCol), n.sectionShapes.set(f, s === 1 ? {
            type: "circ",
            d: C.dCol
          } : {
            type: "rect",
            b: C.bCol,
            h: C.hCol
          });
          else if (a === 1) {
            O = S, k = M, m = y;
            const E = _e.steelColType;
            if (E <= 1) {
              const L = Po[C.colProfileIdx] ?? Po[0];
              A = {
                A: L.A,
                Iz: L.Iz,
                Iy: L.Iy,
                J: L.J
              }, n.sectionShapes.set(f, {
                type: "I",
                b: L.bf,
                h: L.d,
                name: L.name
              });
            } else if (E === 2) {
              const L = C.colBf ?? 0.3, P = C.colHf ?? 0.3, H = C.colTf ?? 0.02, h = C.colTw ?? 0.012;
              A = Zn(L, P, H, h);
              const $ = `I${(P * 100).toFixed(0)}x${(L * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: L,
                h: P,
                tf: H,
                tw: h,
                name: $
              });
            } else {
              const L = C.colBc ?? 0.3, P = C.colHc ?? 0.3, H = C.colT ?? 0.01;
              A = Qn(L, P, H);
              const h = `\u25A1${(P * 100).toFixed(0)}x${(L * 100).toFixed(0)}x${(H * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: L,
                h: P,
                tw: H,
                name: h
              });
            }
          } else {
            const E = C.colBc ?? 0.3, L = C.colHc ?? 0.3, P = C.colT ?? 0.01, H = C.colFc ?? 28e3, h = C.colEs ?? 2e8, $ = C.colNuS ?? 0.3;
            C.colNuC;
            const v = Ka(E, L, P, h, $, H);
            A = {
              A: v.A,
              Iz: v.Iz,
              Iy: v.Iy,
              J: v.J
            }, O = v.Es, k = v.Gs;
            const F = 7.85, X = 24 / 9.80665;
            m = (F * v.A_steel + X * v.A_conc) / (v.A_steel + v.A_conc);
            const K = `CFT ${(L * 1e3).toFixed(0)}X${(E * 1e3).toFixed(0)}X${(P * 1e3).toFixed(0)}`;
            n.sectionShapes.set(f, {
              type: "CFT",
              b: E,
              h: L,
              tw: P,
              name: K
            });
          }
          else {
            const E = Ae.get(f), L = E ? E.dir === "x" ? C.vigasX : C.vigasY : [], P = E ? L[E.bay] ?? L[0] ?? xt() : xt();
            if (c === 0) O = r, k = d, m = g, A = Kn(P.b, P.h), n.sectionShapes.set(f, {
              type: "rect",
              b: P.b,
              h: P.h
            });
            else {
              O = S, k = M, m = y;
              const H = _e.steelVigaType;
              if (H <= 1) {
                const h = Po[P.profileIdx ?? 0] ?? Po[0];
                A = {
                  A: h.A,
                  Iz: h.Iz,
                  Iy: h.Iy,
                  J: h.J
                }, n.sectionShapes.set(f, {
                  type: "I",
                  b: h.bf,
                  h: h.d,
                  name: h.name
                });
              } else if (H === 2) {
                const h = P.bf ?? 0.2, $ = P.hf ?? 0.4, v = P.tf ?? 0.015, F = P.tw ?? 0.01;
                A = Zn(h, $, v, F);
                const X = `I${($ * 100).toFixed(0)}x${(h * 100).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "I",
                  b: h,
                  h: $,
                  tf: v,
                  tw: F,
                  name: X
                });
              } else {
                const h = P.bc ?? 0.2, $ = P.hc ?? 0.3, v = P.t ?? 8e-3;
                A = Qn(h, $, v);
                const F = `\u25A1${($ * 100).toFixed(0)}x${(h * 100).toFixed(0)}x${(v * 1e3).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "HSS",
                  b: h,
                  h: $,
                  tw: v,
                  name: F
                });
              }
            }
          }
          const u = he.get(f);
          if (u) {
            if ((u.material ?? 1) === 0 ? (O = r, k = d, m = g) : (O = S, k = M, m = y), u.secType === "rect" && u.b && u.h) A = Kn(u.b, u.h), n.sectionShapes.set(f, {
              type: "rect",
              b: u.b,
              h: u.h
            });
            else if (u.secType === "circ" && u.b) A = Vs(u.b), n.sectionShapes.set(f, {
              type: "circ",
              d: u.b
            });
            else if ((u.secType === "W" || u.secType === "HSS") && u.profileIdx !== void 0) {
              const L = Po[u.profileIdx] ?? Po[0];
              A = {
                A: L.A,
                Iz: L.Iz,
                Iy: L.Iy,
                J: L.J
              }, n.sectionShapes.set(f, {
                type: "I",
                b: L.bf,
                h: L.d,
                name: L.name
              });
            } else if (u.secType === "I-param" && u.bf && u.hf && u.tf && u.tw) {
              A = Zn(u.bf, u.hf, u.tf, u.tw);
              const L = `I${(u.hf * 100).toFixed(0)}x${(u.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: u.bf,
                h: u.hf,
                tf: u.tf,
                tw: u.tw,
                name: L
              });
            } else if (u.secType === "tubular" && u.bc && u.hc && u.t) {
              A = Qn(u.bc, u.hc, u.t);
              const L = `\u25A1${(u.hc * 100).toFixed(0)}x${(u.bc * 100).toFixed(0)}x${(u.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: u.bc,
                h: u.hc,
                tw: u.t,
                name: L
              });
            }
          }
          n.elasticities.set(f, O), n.shearModuli.set(f, k), n.areas.set(f, A.A), n.momentsOfInertiaZ.set(f, A.Iy), n.momentsOfInertiaY.set(f, A.Iz), n.torsionalConstants.set(f, A.J), n.densities.set(f, m), u && u.releases12 && u.releases12.some((E) => E) && (n.momentReleases || (n.momentReleases = /* @__PURE__ */ new Map()), n.momentReleases.set(f, u.releases12)), u && u.springs12 && u.springs12.some((E) => E > 0) && (n.partialFixitySprings || (n.partialFixitySprings = /* @__PURE__ */ new Map()), n.partialFixitySprings.set(f, u.springs12));
        }
      } else for (let a = 0; a < t.length; a++) n.elasticities.set(a, o.E), n.shearModuli.set(a, o.G), n.areas.set(a, o.A), n.momentsOfInertiaZ.set(a, o.Iy), n.momentsOfInertiaY.set(a, o.Iz), n.torsionalConstants.set(a, o.J), n.densities.set(a, o.rho);
      e.elementInputs.val = n;
    }
    function Us(t) {
      Le.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === t);
      });
    }
    window.innerWidth <= 600 && Le.classList.add("collapsed"), setTimeout(() => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q;
      (_a2 = Le.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (h) => {
        h.stopPropagation(), Le.classList.add("collapsed");
      }), (_b = Le.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (h) => {
        h.stopPropagation(), Le.classList.remove("collapsed");
      }), Le.querySelectorAll("[data-ex]").forEach((h) => {
        h.addEventListener("click", ($) => {
          $.stopPropagation();
          const v = h.dataset.ex;
          Us(v), ot.example(v);
        });
      }), Le.querySelectorAll("[data-view]").forEach((h) => {
        h.addEventListener("click", ($) => {
          $.stopPropagation();
          const v = h.dataset.view;
          Ao(v), Le.querySelectorAll("[data-view]").forEach((F) => F.classList.remove("view-active")), h.classList.add("view-active");
        });
      }), (_c = Le.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (h) => {
        h.stopPropagation(), T = "", Fa.val = false, Va(), ot.clear();
      }), (_d = Le.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (h) => {
        var _a3;
        h.stopPropagation(), co && (co = false, _o()), yo && wn(), eo = !eo, (_a3 = Le.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", eo);
        const v = et();
        v && (v.controls.enabled = !eo), eo || Mn();
      }), (_e2 = Le.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (h) => {
        var _a3;
        h.stopPropagation(), co && (co = false, _o()), eo && Mn(), yo = !yo, (_a3 = Le.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", yo), yo ? ol() : wn();
      }), (_f = Le.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (h) => {
        var _a3;
        h.stopPropagation(), eo && Mn(), yo && wn(), co = !co, (_a3 = Le.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", co), co || _o();
      }), (_g = Le.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (h) => {
        h.stopPropagation(), ot.clear(), Ke = null;
      });
      const t = Le.querySelector("#cad3d-tests-menu");
      t && t.addEventListener("change", () => {
        const h = t.value;
        t.value = "", h && o(h);
      });
      function o(h) {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const F = 15e3 * Math.sqrt(210) * 10, X = 0.2, K = F / (2 * (1 + X)), le = 0.09, ee = 0.3 ** 4 / 12, Q = 0.141 * 0.3 ** 4, fe = 0.25 * 0.4, ce = 0.25 * 0.4 ** 3 / 12, ke = 0.4 * 0.25 ** 3 / 12, Pe = 1e-3, D = 5 / 6 * le, me = 5 / 6 * fe, se = [];
        function ue(te, ge, Me) {
          const oe = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            shearAreasY: /* @__PURE__ */ new Map(),
            shearAreasZ: /* @__PURE__ */ new Map()
          };
          for (const Ee of ge) oe.elasticities.set(Ee, F), oe.shearModuli.set(Ee, K), oe.areas.set(Ee, le), oe.momentsOfInertiaZ.set(Ee, ee), oe.momentsOfInertiaY.set(Ee, ee), oe.torsionalConstants.set(Ee, Q), oe.shearAreasY.set(Ee, D), oe.shearAreasZ.set(Ee, D);
          for (const Ee of Me) oe.elasticities.set(Ee, F), oe.shearModuli.set(Ee, K), oe.areas.set(Ee, fe), oe.momentsOfInertiaZ.set(Ee, ke), oe.momentsOfInertiaY.set(Ee, ce), oe.torsionalConstants.set(Ee, Pe), oe.shearAreasY.set(Ee, me), oe.shearAreasZ.set(Ee, me);
          return oe;
        }
        if (h === "test-cantilever" || h === "test-all") {
          const Me = 270 / (3 * F * ee), oe = [
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
          ], Ee = [
            [
              0,
              1
            ]
          ], je = ue(1, [], []);
          je.elasticities.set(0, F), je.shearModuli.set(0, K), je.areas.set(0, le), je.momentsOfInertiaZ.set(0, ee), je.momentsOfInertiaY.set(0, ee), je.torsionalConstants.set(0, Q);
          const at = Rt(oe, Ee, {
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
          }, je);
          se.push({
            name: "Cantilever Beam",
            formulation: "Euler-Bernoulli (PL\xB3/3EI)",
            nodes: oe,
            elements: Ee,
            results: [
              {
                label: "Uz tip (cm)",
                awatif: at.deformations.get(1)[2] * 100,
                reference: Me * 100,
                refSource: "Analytical"
              }
            ]
          });
        }
        if (h === "test-portal-1p" || h === "test-all") {
          const te = [
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
          ], Me = ue(3, [
            0,
            1
          ], [
            2
          ]), oe = Rt(te, ge, {
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
          }, Me);
          se.push({
            name: "Portal 1-Story (Timoshenko)",
            formulation: "Frame Timoshenko (As=5/6\xB7A)",
            nodes: te,
            elements: ge,
            results: [
              {
                label: "Ux top (cm)",
                awatif: oe.deformations.get(2)[0] * 100,
                reference: 2.0618,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (h === "test-portal-2p" || h === "test-all") {
          const te = [
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
          ], Me = ue(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]), oe = Rt(te, ge, {
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
          }, Me);
          se.push({
            name: "Portal 2-Story",
            formulation: "Frame Timoshenko",
            nodes: te,
            elements: ge,
            results: [
              {
                label: "Ux Z=3m (cm)",
                awatif: oe.deformations.get(2)[0] * 100,
                reference: 2.5188,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux Z=6m (cm)",
                awatif: oe.deformations.get(4)[0] * 100,
                reference: 5.6424,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (h === "test-wall-only" || h === "test-all") {
          const te = [
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
          ], oe = Rt(te, ge, {
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
                F
              ]
            ]),
            shearModuli: /* @__PURE__ */ new Map([
              [
                0,
                K
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
                X
              ]
            ])
          });
          se.push({
            name: "Wall Q4 Only",
            formulation: "Membrane (incompatible modes) + Mindlin-Reissner + Hughes-Brezzi drilling",
            nodes: te,
            elements: ge,
            results: [
              {
                label: "Ux top (cm)",
                awatif: oe.deformations.get(2)[0] * 100,
                reference: 0.013519,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (h === "test-portal-wall" || h === "test-all") {
          const te = [
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
          ], Me = ue(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]);
          Me.elasticities.set(6, F), Me.shearModuli.set(6, K), Me.thicknesses = /* @__PURE__ */ new Map([
            [
              6,
              0.2
            ]
          ]), Me.poissonsRatios = /* @__PURE__ */ new Map([
            [
              6,
              X
            ]
          ]);
          const oe = Rt(te, ge, {
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
          }, Me);
          se.push({
            name: "Portal 2-Story + Wall Q4",
            formulation: "Frame Timoshenko + Shell Q4 (Hughes-Brezzi drilling)",
            nodes: te,
            elements: ge,
            results: [
              {
                label: "Ux h=3m (cm)",
                awatif: oe.deformations.get(2)[0] * 100,
                reference: 0.0195,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux h=6m (cm)",
                awatif: oe.deformations.get(4)[0] * 100,
                reference: 2.1133,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (h === "test-wilson-beam" || h === "test-all") {
          const at = 0.6666666666666666, tt = [
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
          ], Mt = [
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
          ], Ct = {
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
          }, ut = /* @__PURE__ */ new Map();
          ut.set(0, [
            true,
            true,
            true,
            true,
            true,
            true
          ]), ut.set(5, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
          const yt = /* @__PURE__ */ new Map();
          yt.set(2, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]), yt.set(3, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]);
          const wo = 5 ** 3 / (3 * 1500 * at);
          try {
            const Ft = Rt(tt, Mt, {
              supports: ut,
              loads: yt
            }, Ct), Wt = Math.abs(((_b2 = (_a3 = Ft.deformations) == null ? void 0 : _a3.get(2)) == null ? void 0 : _b2[1]) ?? 0), lt = Math.abs(((_d2 = (_c2 = Ft.deformations) == null ? void 0 : _c2.get(3)) == null ? void 0 : _d2[1]) ?? 0), ht = (Wt + lt) / 2, Kt = ht / wo;
            se.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "2 Q4 elements + incompatible modes (Wilson 1971, Table 6.1)",
              nodes: tt,
              elements: Mt,
              results: [
                {
                  label: "Uy/Uy_exact (cortante)",
                  awatif: Kt,
                  reference: 0.932,
                  refSource: "Wilson Table 6.1"
                },
                {
                  label: "Uy free end",
                  awatif: ht,
                  reference: wo * 0.932,
                  refSource: "Wilson"
                }
              ]
            });
          } catch (Ft) {
            se.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "ERROR: " + Ft.message,
              nodes: tt,
              elements: Mt,
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
        if (h === "test-scordelis" || h === "test-all") {
          const at = 40 * Math.PI / 180, tt = 8, Mt = 8, Ct = [];
          for (let lt = 0; lt <= tt; lt++) for (let ht = 0; ht <= Mt; ht++) {
            const Kt = 25 * lt / tt, Bt = at * ht / Mt, po = 25 * Math.sin(Bt), oo = 25 * Math.cos(Bt) - 25 * Math.cos(at);
            Ct.push([
              Kt,
              po,
              oo
            ]);
          }
          const ut = [];
          for (let lt = 0; lt < tt; lt++) for (let ht = 0; ht < Mt; ht++) {
            const Kt = lt * (Mt + 1) + ht, Bt = (lt + 1) * (Mt + 1) + ht, po = (lt + 1) * (Mt + 1) + (ht + 1), oo = lt * (Mt + 1) + (ht + 1);
            ut.push([
              Kt,
              Bt,
              po,
              oo
            ]);
          }
          const yt = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            thicknesses: /* @__PURE__ */ new Map(),
            poissonsRatios: /* @__PURE__ */ new Map()
          }, wo = 432e6 / (2 * 1);
          for (let lt = 0; lt < ut.length; lt++) yt.elasticities.set(lt, 432e6), yt.shearModuli.set(lt, wo), yt.thicknesses.set(lt, 0.25), yt.poissonsRatios.set(lt, 0);
          const Ft = /* @__PURE__ */ new Map();
          for (let lt = 0; lt <= tt; lt++) for (let ht = 0; ht <= Mt; ht++) {
            const Kt = lt * (Mt + 1) + ht, Bt = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            lt === 0 && (Bt[0] = true, Bt[4] = true, Bt[5] = true), lt === tt && (Bt[1] = true, Bt[2] = true, Bt[3] = true), ht === 0 && (Bt[1] = true, Bt[3] = true, Bt[5] = true), Bt.some((po) => po) && Ft.set(Kt, Bt);
          }
          const Wt = /* @__PURE__ */ new Map();
          for (const lt of ut) {
            const ht = Ct[lt[0]], Kt = Ct[lt[1]], Bt = Ct[lt[2]], po = Ct[lt[3]], oo = [
              Bt[0] - ht[0],
              Bt[1] - ht[1],
              Bt[2] - ht[2]
            ], go = [
              po[0] - Kt[0],
              po[1] - Kt[1],
              po[2] - Kt[2]
            ], Do = oo[1] * go[2] - oo[2] * go[1], gn = oo[2] * go[0] - oo[0] * go[2], Bo = oo[0] * go[1] - oo[1] * go[0], Sn = -90 * (0.5 * Math.sqrt(Do * Do + gn * gn + Bo * Bo)) / 4;
            for (const bn of lt) {
              const Qo = Wt.get(bn) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Qo[2] += Sn, Wt.set(bn, Qo);
            }
          }
          try {
            const lt = Rt(Ct, ut, {
              supports: Ft,
              loads: Wt
            }, yt), ht = Mt, Kt = ((_f2 = (_e3 = lt.deformations) == null ? void 0 : _e3.get(ht)) == null ? void 0 : _f2[2]) ?? 0;
            se.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: `Shell Q4 (${tt}x${Mt} mesh), Mindlin-Reissner + incompatible modes`,
              nodes: Ct,
              elements: ut,
              results: [
                {
                  label: "Uz midspan free edge (ft)",
                  awatif: Math.abs(Kt),
                  reference: 0.3086,
                  refSource: "Wilson (2004) / MacNeal-Harder"
                }
              ]
            });
          } catch (lt) {
            se.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: "ERROR: " + lt.message,
              nodes: Ct,
              elements: ut,
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
        if (c(se), se.length > 0) {
          const te = se[se.length - 1];
          e.nodes.val = te.nodes, e.elements.val = te.elements;
          const ge = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), oe = Math.max(...te.nodes.map((Ee) => Ee[2]));
          te.nodes.forEach((Ee, je) => {
            Math.abs(Ee[2]) < 0.01 && ge.set(je, [
              true,
              true,
              true,
              true,
              true,
              true
            ]), Math.abs(Ee[2] - oe) < 0.01 && Me.set(je, [
              10,
              0,
              0,
              0,
              0,
              0
            ]);
          }), e.nodeInputs.val = {
            supports: ge,
            loads: Me
          }, e.elementInputs.val = {}, e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        }
      }
      function n(h) {
        const $ = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`$ File exported from Awatif FEM Validation: ${h.name}`), v.push(" "), v.push("$ PROGRAM INFORMATION"), v.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), v.push(""), v.push("$ CONTROLS"), v.push('  UNITS  "TONF"  "M"  "C"  '), v.push("");
        const F = /* @__PURE__ */ new Set();
        h.nodes.forEach((D) => F.add(Math.round(D[1] * 1e4) / 1e4));
        const X = [
          ...F
        ].sort((D, me) => D - me), K = X.map((D, me) => me === 0 ? "Base" : `Level_${me}`), le = /* @__PURE__ */ new Map();
        X.forEach((D, me) => le.set(D, K[me])), v.push("$ STORIES - IN SEQUENCE FROM TOP");
        for (let D = X.length - 1; D >= 1; D--) v.push(`  STORY "${K[D]}"  HEIGHT ${X[D] - X[D - 1]} MASTERSTORY "Yes"  `);
        v.push(`  STORY "Base"  ELEV ${X[0]} `), v.push(""), v.push("$ MATERIAL PROPERTIES"), v.push('  MATERIAL  "CONC"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4'), v.push(`  MATERIAL  "CONC"    SYMTYPE "Isotropic"  E ${$}  U 0.2  A 1E-05`), v.push(""), v.push("$ FRAME SECTIONS"), v.push('  FRAMESECTION  "COL30"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.3 B 0.3 '), v.push('  FRAMESECTION  "VIGA"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.4 B 0.25 '), v.push("");
        const ee = h.elements.some((D) => D.length === 4);
        ee && (v.push("$ WALL/SLAB/DECK SECTIONS"), v.push('  SHELLPROP  "Muro20"  PROPTYPE  "Wall"  MATERIAL "CONC"  MODELINGTYPE "ShellThick"  WALLTHICKNESS 0.2 '), v.push(""));
        const Q = /* @__PURE__ */ new Map();
        let fe = 0;
        h.nodes.forEach((D) => {
          const me = `${D[0]},${D[2]}`;
          Q.has(me) || Q.set(me, `${++fe}`);
        }), v.push("$ POINT COORDINATES");
        for (const [D, me] of Q) {
          const [se, ue] = D.split(",").map(Number);
          v.push(`  POINT "${me}"  ${se} ${ue} `);
        }
        v.push("");
        const ce = (D) => {
          const me = h.nodes[D], se = `${me[0]},${me[2]}`;
          return {
            pt: Q.get(se) || "1",
            story: le.get(Math.round(me[1] * 1e4) / 1e4) || "Base"
          };
        };
        v.push("$ LINE CONNECTIVITIES");
        const ke = [];
        if (h.elements.forEach((D, me) => {
          if (D.length !== 2) return;
          const se = h.nodes[D[0]], ue = h.nodes[D[1]], te = Math.abs(ue[1] - se[1]), ge = Math.sqrt((ue[0] - se[0]) ** 2 + (ue[2] - se[2]) ** 2), Me = te > ge * 0.5, oe = ce(D[0]), Ee = ce(D[1]), je = Me ? "COL30" : "VIGA";
          Me ? (v.push(`  LINE  "E${me + 1}"  COLUMN  "${oe.pt}"  "${oe.pt}"  1`), ke.push(`  LINEASSIGN  "E${me + 1}"  "${Ee.story}"  SECTION "${je}"  `)) : (v.push(`  LINE  "E${me + 1}"  BEAM  "${oe.pt}"  "${Ee.pt}"  0`), ke.push(`  LINEASSIGN  "E${me + 1}"  "${oe.story}"  SECTION "${je}"  `));
        }), v.push(""), ee) {
          v.push("$ AREA CONNECTIVITIES");
          const D = [];
          h.elements.forEach((me, se) => {
            if (me.length !== 4) return;
            const ue = me.map((te) => ce(te));
            v.push(`  AREA "W${se + 1}"  PANEL  4  "${ue[0].pt}"  "${ue[1].pt}"  "${ue[2].pt}"  "${ue[3].pt}"  1  1  0  0  `), D.push(`  AREAASSIGN  "W${se + 1}"  "${ue[2].story}"  SECTION "Muro20"  `);
          }), v.push(""), v.push("$ AREA ASSIGNS"), D.forEach((me) => v.push(me)), v.push("");
        }
        v.push("$ POINT ASSIGNS"), h.nodes.forEach((D, me) => {
          if (Math.abs(D[1]) < 0.01) {
            const se = ce(me);
            v.push(`  POINTASSIGN  "${se.pt}"  "${se.story}"  RESTRAINT "UX UY UZ RX RY RZ"  `);
          }
        }), v.push(""), v.push("$ LINE ASSIGNS"), ke.forEach((D) => v.push(D)), v.push(""), v.push("$ LOAD PATTERNS"), v.push('  LOADPATTERN "Lat"  TYPE  "Other"  SELFWEIGHT  0'), v.push(""), v.push("$ POINT OBJECT LOADS");
        const Pe = Math.max(...h.nodes.map((D) => D[1]));
        return h.nodes.forEach((D, me) => {
          if (Math.abs(D[1] - Pe) < 0.01) {
            const se = ce(me);
            v.push(`  POINTLOAD  "${se.pt}"  "${se.story}"  "Lat"  TYPE "FORCE"  FX 10`);
          }
        }), v.push(""), v.push("  END"), v.push("$ END OF MODEL FILE"), v.join(`\r
`);
      }
      function l(h) {
        const $ = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`"""ETABS API Validation: ${h.name}`), v.push('Generated by Awatif FEM Studio"""'), v.push("import comtypes.client, time, math"), v.push(""), v.push("helper = comtypes.client.CreateObject('ETABSv1.Helper')"), v.push("helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)"), v.push('myETABS = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")'), v.push("myETABS.ApplicationStart()"), v.push("time.sleep(10)"), v.push("SapModel = myETABS.SapModel"), v.push("SapModel.InitializeNewModel()"), v.push("SapModel.File.NewBlank()"), v.push("SapModel.SetPresentUnits(12)  # tonf_m_C"), v.push(""), v.push(`E = ${$}`), v.push('SapModel.PropMaterial.SetMaterial("CONC", 2)'), v.push('SapModel.PropMaterial.SetMPIsotropic("CONC", E, 0.2, 5.5e-6)'), v.push('SapModel.PropFrame.SetRectangle("COL30", "CONC", 0.30, 0.30)'), v.push('SapModel.PropFrame.SetRectangle("VIGA", "CONC", 0.40, 0.25)'), h.elements.some((K) => K.length === 4) && v.push('SapModel.PropArea.SetWall("Muro20", 6, False, "CONC", 0.20)'), v.push(""), v.push("# Add elements"), v.push("FN = ' '"), h.elements.forEach((K, le) => {
          if (K.length === 2) {
            const ee = h.nodes[K[0]], Q = h.nodes[K[1]], fe = Math.abs(Q[1] - ee[1]), ce = Math.sqrt((Q[0] - ee[0]) ** 2 + (Q[2] - ee[2]) ** 2), ke = fe > ce * 0.5 ? "COL30" : "VIGA";
            v.push(`[FN,r]=SapModel.FrameObj.AddByCoord(${ee[0]},${ee[2]},${ee[1]}, ${Q[0]},${Q[2]},${Q[1]}, FN,"${ke}","E${le + 1}","Global")`);
          } else if (K.length === 4) {
            const ee = K.map((Q) => h.nodes[Q]);
            v.push(`SapModel.AreaObj.AddByCoord(4, [${ee.map((Q) => Q[0]).join(",")}], [${ee.map((Q) => Q[2]).join(",")}], [${ee.map((Q) => Q[1]).join(",")}], "", "Muro20")`);
          }
        }), v.push(""), v.push("# Supports at Z=0"), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push("    if abs(float(c[2])) < 0.01:"), v.push("        SapModel.PointObj.SetRestraint(names[1][i], [True]*6)"), v.push(""), v.push("# Load at top"), v.push('SapModel.LoadPatterns.Add("Lat", 8, 0, True)');
        const X = Math.max(...h.nodes.map((K) => K[1]));
        v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push(`    if abs(float(c[2]) - ${X}) < 0.01:`), v.push('        SapModel.PointObj.SetLoadForce(names[1][i], "Lat", [10,0,0,0,0,0])'), v.push(""), v.push(`SapModel.File.Save(r"C:\\Users\\j-b-j\\Downloads\\validation_${h.name.replace(/[^a-zA-Z0-9]/g, "_")}.EDB")`), v.push("time.sleep(1)"), v.push("SapModel.Analyze.RunAnalysis()"), v.push("time.sleep(5)"), v.push(""), v.push("# Results"), v.push("SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()"), v.push('SapModel.Results.Setup.SetCaseSelectedForOutput("Lat")'), v.push(`print(f"\\n=== ETABS: ${h.name} ===")`), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    name = names[1][i]"), v.push("    c = SapModel.PointObj.GetCoordCartesian(name)"), v.push("    NR=0;Obj=[];Elm=[];AC=[];ST=[];SN=[];U1=[];U2=[];U3=[];R1=[];R2=[];R3=[]"), v.push("    [NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3,ret]=SapModel.Results.JointDispl(name,0,NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3)"), v.push("    if NR > 0:"), v.push('        print(f"  {name} Z={float(c[2]):.1f}: Ux={U1[0]*100:.4f} cm")'), v.push(""), v.push('print("\\nAwatif results:")');
        for (const K of h.results) v.push(`print(f"  ${K.label}: Awatif=${K.awatif.toFixed(4)}, ETABS=${K.reference.toFixed(4)}, Ratio={${K.awatif.toFixed(4)}/${K.reference.toFixed(4)}:.4f}")`);
        return v.push("SapModel.View.RefreshView(0, False)"), v.join(`
`);
      }
      function a(h, $) {
        const v = new Blob([
          h
        ], {
          type: "text/plain"
        }), F = URL.createObjectURL(v), X = document.createElement("a");
        X.href = F, X.download = $, X.click(), URL.revokeObjectURL(F);
      }
      function c(h) {
        let $ = document.getElementById("test-results-overlay");
        $ && $.remove(), $ = document.createElement("div"), $.id = "test-results-overlay", $.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1a1a2e;color:#eee;border:2px solid #16213e;border-radius:8px;padding:20px;
        z-index:10000;max-width:750px;width:90%;max-height:80vh;overflow-y:auto;font-family:monospace;font-size:13px;
        box-shadow:0 10px 40px rgba(0,0,0,0.5);`;
        let v = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <h3 style="margin:0;color:#00d4ff">Awatif FEM Validation</h3>
        <button onclick="this.parentElement.parentElement.remove()" style="background:none;border:none;color:#888;font-size:18px;cursor:pointer">X</button>
      </div>`, F = true;
        window.__awatifTests = h;
        for (let K = 0; K < h.length; K++) {
          const le = h[K];
          v += '<div style="margin-bottom:16px;border:1px solid #333;border-radius:6px;padding:10px">', v += '<div style="display:flex;justify-content:space-between;align-items:center">', v += `<div style="font-weight:bold;color:#00d4ff">${le.name}</div>`, v += "<div>", v += `<button onclick="window.__awatifDownloadE2k(${K})" style="background:#1e3a5f;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;margin-right:4px;border-radius:3px">e2k</button>`, v += `<button onclick="window.__awatifDownloadPy(${K})" style="background:#2a1e3a;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;border-radius:3px">py</button>`, v += "</div></div>", v += `<div style="color:#888;font-size:11px;margin-bottom:8px">${le.formulation}</div>`, v += `<table style="width:100%;border-collapse:collapse;font-size:12px">
          <tr style="color:#888"><td style="padding:3px 6px">Measure</td><td style="text-align:right">Awatif</td><td style="text-align:right">Reference</td><td style="text-align:right">Ratio</td><td style="text-align:right">Source</td><td style="text-align:center"></td></tr>`;
          for (const ee of le.results) {
            const Q = ee.reference !== 0 ? ee.awatif / ee.reference : 1, fe = Math.abs(Q - 1) < 0.05;
            fe || (F = false);
            const ce = fe ? "#4caf50" : "#f44336", ke = fe ? "PASS" : "FAIL";
            v += `<tr style="border-top:1px solid #333">
            <td style="padding:3px 6px">${ee.label}</td>
            <td style="text-align:right;color:#fff">${ee.awatif.toFixed(4)}</td>
            <td style="text-align:right;color:#aaa">${ee.reference.toFixed(4)}</td>
            <td style="text-align:right;color:${ce};font-weight:bold">${Q.toFixed(4)}</td>
            <td style="text-align:right;color:#888;font-size:11px">${ee.refSource}</td>
            <td style="text-align:center;color:${ce};font-size:10px;font-weight:bold">${ke}</td></tr>`;
          }
          v += "</table></div>";
        }
        v += F ? '<div style="color:#4caf50;font-weight:bold;text-align:center;margin-top:8px">ALL TESTS PASSED (< 5% error vs ETABS)</div>' : '<div style="color:#f44336;font-weight:bold;text-align:center;margin-top:8px">Some tests exceeded 5% tolerance</div>', $.innerHTML = v, document.body.appendChild($), window.__awatifDownloadE2k = (K) => {
          const le = window.__awatifTests[K], ee = le.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          a(n(le), `${ee}.e2k`);
        }, window.__awatifDownloadPy = (K) => {
          const le = window.__awatifTests[K], ee = le.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          a(l(le), `${ee}_etabs.py`);
        };
      }
      (_h = Le.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (h) => {
        h.stopPropagation(), Xa();
      });
      let s = "";
      const i = Le.querySelector("#cad3d-io-menu"), p = Le.querySelector("#cad3d-io-file");
      function r(h, $) {
        e.nodes.val = h.nodes, e.elements.val = h.elements, e.nodeInputs.val = h.nodeInputs, e.elementInputs.val = h.elementInputs, h.sectionShapes && h.elementInputs && (h.elementInputs.sectionShapes = h.sectionShapes), e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        const v = h.elements.filter((X) => X.length === 2).length, F = h.elements.filter((X) => X.length >= 3).length;
        console.log(`${$} (${h.nodes.length} nodos, ${v} frames, ${F} shells): ${h.nodes.length} nodes, ${h.elements.length} elements`), setTimeout(() => It(), 50);
      }
      function d(h, $) {
        var _a3, _b2, _c2;
        const v = {};
        h.elementInfo.forEach((Q) => v[Q.category] = (v[Q.category] || 0) + 1), (_a3 = document.getElementById("ifc-filter-panel")) == null ? void 0 : _a3.remove();
        const F = document.createElement("div");
        F.id = "ifc-filter-panel", F.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1e1e2e;border:2px solid #00ccff;border-radius:12px;padding:20px;
        z-index:1000010;color:#eee;font-family:monospace;font-size:12px;min-width:320px;
        box-shadow:0 8px 32px rgba(0,0,0,0.6);`;
        const X = [
          "column",
          "beam",
          "slab",
          "footing",
          "member",
          "wall"
        ], K = [
          "opening",
          "rebar",
          "plate",
          "fastener",
          "other"
        ], le = {
          column: z("Columnas"),
          beam: z("Vigas"),
          slab: z("Losas"),
          footing: z("Zapatas"),
          member: z("Diagonales"),
          wall: z("Muros"),
          opening: z("Aberturas"),
          rebar: z("Refuerzo"),
          plate: z("Placas"),
          fastener: z("Pernos"),
          other: z("Otros")
        };
        let ee = `<h3 style="color:#00ccff;margin:0 0 12px">IFC \u2192 ${z("Modelo Anal\xEDtico")}</h3>
        <div style="color:#888;margin-bottom:10px">Selecciona qu\xE9 convertir a FEM:</div>
        <div style="border:1px solid #444;border-radius:6px;padding:8px;margin-bottom:8px">
          <div style="color:#33ff33;font-weight:bold;margin-bottom:4px">Estructural</div>`;
        for (const Q of X) {
          const fe = v[Q] || 0;
          if (fe === 0) continue;
          const ce = [
            "column",
            "beam",
            "slab"
          ].includes(Q) ? "checked" : "";
          ee += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0">
          <input type="checkbox" data-ifc-cat="${Q}" ${ce}>
          <span>${le[Q] || Q}</span>
          <span style="color:#888;margin-left:auto">(${fe})</span>
        </label>`;
        }
        ee += `</div><div style="border:1px solid #333;border-radius:6px;padding:8px;margin-bottom:12px">
        <div style="color:#ff6666;font-weight:bold;margin-bottom:4px">No estructural (solo visual)</div>`;
        for (const Q of K) {
          const fe = v[Q] || 0;
          fe !== 0 && (ee += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0;color:#888">
          <input type="checkbox" data-ifc-cat="${Q}" disabled>
          <span>${le[Q] || Q}</span>
          <span style="margin-left:auto">(${fe})</span>
        </label>`);
        }
        ee += `</div>
        <div style="display:flex;gap:8px">
          <button id="ifc-gen-analytical" style="flex:1;padding:8px;background:#0f3460;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:13px;font-weight:bold">
            \u{1F527} Generar Modelo Anal\xEDtico
          </button>
          <button id="ifc-cancel" style="padding:8px 12px;background:#333;color:#aaa;border:1px solid #555;border-radius:6px;cursor:pointer">\u2715</button>
        </div>`, F.innerHTML = ee, document.body.appendChild(F), F.querySelectorAll("input[data-ifc-cat]").forEach((Q) => {
          Q.addEventListener("change", () => {
            const fe = Q.dataset.ifcCat, ce = h.detailCategories.get(fe);
            if (ce) {
              ce.visible = Q.checked;
              const ke = et();
              ke && ke.render();
            }
          });
        }), (_b2 = F.querySelector("#ifc-gen-analytical")) == null ? void 0 : _b2.addEventListener("click", () => {
          var _a4;
          const Q = /* @__PURE__ */ new Set();
          F.querySelectorAll("input[data-ifc-cat]:checked").forEach((se) => {
            Q.add(se.dataset.ifcCat);
          });
          const fe = $.nodes.map((se) => [
            se.x,
            se.y,
            se.z
          ]), ce = [], ke = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            densities: /* @__PURE__ */ new Map(),
            sectionShapes: /* @__PURE__ */ new Map()
          }, Pe = {
            supports: /* @__PURE__ */ new Map(),
            loads: /* @__PURE__ */ new Map()
          };
          let D = 0;
          for (const se of $.elements) if (Q.has(se.category) && se.type === "frame" && se.nodeIds.length >= 2) {
            ce.push(se.nodeIds);
            const ue = ((_a4 = $.materials) == null ? void 0 : _a4.get(se.material)) || {
              E: 2132888792e-2,
              nu: 0.2,
              rho: 2.4
            }, te = se.b || 0.3, ge = se.h || 0.3, Me = te * ge, oe = te * ge * ge * ge / 12, Ee = ge * te * te * te / 12, je = te * ge * (te * te + ge * ge) / 12, at = ue.E / (2 * (1 + ue.nu));
            ke.elasticities.set(D, ue.E), ke.shearModuli.set(D, at), ke.areas.set(D, Me), ke.momentsOfInertiaZ.set(D, Ee), ke.momentsOfInertiaY.set(D, oe), ke.torsionalConstants.set(D, je), ke.densities.set(D, ue.rho), ke.sectionShapes.set(D, {
              type: "rect",
              b: te,
              h: ge,
              name: se.sectionName
            }), D++;
          }
          const me = Math.min(...fe.map((se) => se[2]));
          fe.forEach((se, ue) => {
            Math.abs(se[2] - me) < 0.05 && Pe.supports.set(ue, [
              true,
              true,
              true,
              true,
              true,
              true
            ]);
          });
          for (const [, se] of h.detailCategories) {
            const ue = et();
            ue && ue.scene.remove(se);
          }
          r({
            nodes: fe,
            elements: ce,
            nodeInputs: Pe,
            elementInputs: ke,
            sectionShapes: ke.sectionShapes,
            info: {
              nNodes: fe.length,
              nFrames: ce.length
            }
          }, "IFC analytical"), F.remove();
        }), (_c2 = F.querySelector("#ifc-cancel")) == null ? void 0 : _c2.addEventListener("click", () => {
          for (const [, fe] of h.detailCategories) {
            const ce = et();
            ce && ce.scene.remove(fe);
          }
          const Q = et();
          Q && Q.render(), F.remove();
        });
      }
      function g(h) {
        B = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), we = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map();
        const $ = /* @__PURE__ */ new Map();
        for (let ce = 0; ce < h.stories.length; ce++) $.set(h.stories[ce].name, ce);
        for (let ce = 0; ce < h.elementTypes.length; ce++) {
          const ke = h.elementTypes[ce], Pe = h.elementStories[ce], D = $.get(Pe) ?? 0;
          we.set(ce, D), ke === "COLUMN" || ke === "BRACE" ? B.add(ce) : Y.add(ce);
        }
        T = "edificio";
        const v = h.grids.filter((ce) => ce.dir === "X").sort((ce, ke) => ce.coord - ke.coord), F = h.grids.filter((ce) => ce.dir === "Y").sort((ce, ke) => ce.coord - ke.coord);
        let X, K, le, ee;
        if (v.length > 0 || F.length > 0) X = v.map((ce) => ce.coord), K = F.map((ce) => ce.coord), le = v.map((ce) => ce.label), ee = F.map((ce) => ce.label);
        else {
          const ce = new Set(h.nodes.map((Pe) => Pe[0])), ke = new Set(h.nodes.map((Pe) => Pe[1]));
          X = [
            ...ce
          ].sort((Pe, D) => Pe - D), K = [
            ...ke
          ].sort((Pe, D) => Pe - D), le = X.map((Pe, D) => String(D + 1)), ee = K.map((Pe, D) => String.fromCharCode(65 + D));
        }
        const Q = h.stories.length > 0 ? Math.max(...h.stories.map((ce) => ce.elev)) : Math.max(...h.nodes.map((ce) => ce[2]));
        Je = X, Qe = K, gt = Q, setTimeout(() => {
          It(), rn(X, K, Q, le, ee), Dn(h.stories, X, K), es(), ts();
        }, 100);
        const fe = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const ce of h.elementTypes) fe[ce]++;
        console.log(`E2K grids: X=[${le.join(",")}] Y=[${ee.join(",")}]`), console.log(`E2K stories: ${h.stories.map((ce) => `${ce.name}@${ce.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${fe.COLUMN} columns, ${fe.BEAM} beams, ${fe.BRACE} braces`), st();
      }
      function S(h, $) {
        const v = new Blob([
          h
        ], {
          type: "text/plain"
        }), F = URL.createObjectURL(v), X = document.createElement("a");
        X.href = F, X.download = $, X.click(), URL.revokeObjectURL(F);
      }
      i && i.addEventListener("change", () => {
        if (s = i.value, i.value = "", s.startsWith("import")) s === "import-e2k" ? p.accept = ".e2k,.E2K" : s === "import-s2k" ? p.accept = ".s2k,.S2K,.$2k" : s === "import-ifc" ? p.accept = ".ifc,.IFC" : s === "import-py" ? p.accept = ".py" : s === "import-tcl" && (p.accept = ".tcl"), p.click();
        else if (s.startsWith("export")) {
          const h = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: e.nodeInputs.val,
            elementInputs: e.elementInputs.val
          };
          try {
            s === "export-e2k" ? S(ii({
              ...h,
              title: "Awatif Model",
              e2kModel: Ke ?? void 0
            }), "model.e2k") : s === "export-s2k" ? S(li({
              ...h,
              title: "Awatif Model"
            }), "model.s2k") : s === "export-py" ? S(pi(h), "model_opensees.py") : s === "export-tcl" && S(fi(h), "model_opensees.tcl");
          } catch ($) {
            alert("Export error: " + $.message);
          }
        }
      }), p && p.addEventListener("change", () => {
        var _a3;
        const h = (_a3 = p.files) == null ? void 0 : _a3[0];
        if (!h) return;
        if (s === "import-ifc") {
          const v = new FileReader();
          v.onload = async () => {
            const F = v.result;
            try {
              const X = et();
              if (!X) {
                alert("Viewer not ready");
                return;
              }
              console.log("IFC: Loading 3D geometry...");
              const K = await $i(X.scene, F);
              console.log(`IFC: ${K.meshCount} meshes loaded, bbox:`, K.bbox);
              const le = new qe();
              K.bbox.getCenter(le);
              const ee = new qe();
              K.bbox.getSize(ee);
              const Q = Math.max(ee.x, ee.y, ee.z);
              X.controls.target.copy(le), X.camera.position.set(le.x + Q, le.y + Q * 0.5, le.z + Q), X.camera.lookAt(le), X.controls.maxDistance = Q * 5, X.controls.update(), X.render(), window.__ifcLoadResult = K, window.__ifcArrayBuffer = F;
              const fe = new FileReader();
              fe.onload = () => {
                const ce = fe.result, ke = xi(ce);
                window.__ifcAnalytical = ke;
                const Pe = {};
                K.elementInfo.forEach((D) => Pe[D.category] = (Pe[D.category] || 0) + 1), console.log("IFC categories:", Pe), console.log(`IFC: ${K.elementInfo.size} geometric elements, ${ke.elements.length} analytical elements`), d(K, ke);
              }, fe.readAsText(h);
            } catch (X) {
              alert("IFC error: " + X.message), console.error(X);
            }
          }, v.readAsArrayBuffer(h), p.value = "";
          return;
        }
        const $ = new FileReader();
        $.onload = () => {
          const v = $.result;
          try {
            if (s === "import-e2k") {
              const F = oi(v);
              Ke = F, r(F, "E2K imported"), g(F);
            } else if (s === "import-s2k") {
              const F = ni(v);
              r({
                nodes: F.nodes,
                elements: F.elements,
                nodeInputs: F.nodeInputs,
                elementInputs: F.elementInputs,
                sectionShapes: F.sectionShapes,
                info: F.info
              }, "S2K imported");
            } else if (s === "import-py") {
              const F = ui(v);
              r(F, "OpenSeesPy imported");
            } else if (s === "import-tcl") {
              const F = mi(v);
              r(F, "OpenSees Tcl imported");
            }
          } catch (F) {
            alert("Import error: " + F.message), console.error(F);
          }
        }, $.readAsText(h), p.value = "";
      });
      const M = Le.querySelector("#cad3d-force-unit");
      M && (M.value = b, M.addEventListener("change", (h) => {
        h.stopPropagation(), b = M.value, w = Go(b, N), T && nt(T);
      }));
      const y = Le.querySelector("#cad3d-length-unit");
      y && (y.value = N, y.addEventListener("change", (h) => {
        h.stopPropagation(), N = y.value, w = Go(b, N), T && nt(T);
      })), Le.querySelectorAll("[data-preset]").forEach((h) => {
        h.addEventListener("click", ($) => {
          $.stopPropagation();
          const v = h.dataset.preset, F = j[v];
          F && (b = F.force, N = F.length, U = F.stress, w = Go(b, N), M && (M.value = b), y && (y.value = N), Le.querySelectorAll("[data-preset]").forEach((X) => {
            X.classList.toggle("active", X.dataset.preset === v);
          }), T && nt(T), console.log(`Preset: ${v} \u2192 ${b}+${N}, stress: ${U.label}`));
        });
      }), Le.querySelectorAll("[data-lang]").forEach((h) => {
        h.addEventListener("click", ($) => {
          $.stopPropagation();
          const v = h.dataset.lang;
          Ol(v), Le.querySelectorAll("[data-lang]").forEach((X) => X.classList.remove("active")), h.classList.add("active"), Nl(), T && (nt(T), No()), document.getElementById("cad-panel") && typeof window.__rebuildViewPanel == "function" && window.__rebuildViewPanel();
        });
      }), (_i = Le.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (h) => {
        h.stopPropagation(), dl();
      }), (_j = Le.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (h) => {
        h.stopPropagation(), pl();
      }), (_k = Le.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (h) => {
        h.stopPropagation(), ul();
      }), (_l2 = Le.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l2.addEventListener("click", (h) => {
        h.stopPropagation(), gl();
      }), (_m = Le.querySelector("#cad3d-calc")) == null ? void 0 : _m.addEventListener("click", (h) => {
        h.stopPropagation(), gs(async () => {
          const { openCalcPanel: $ } = await import("./calcPanel-BcV0bfdm.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          });
          return {
            openCalcPanel: $
          };
        }, __vite__mapDeps([0,1,2,3,4,5]), import.meta.url).then(({ openCalcPanel: $ }) => {
          var _a3, _b2;
          const v = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: ((_a3 = e.nodeInputs) == null ? void 0 : _a3.val) ?? {},
            elementInputs: ((_b2 = e.elementInputs) == null ? void 0 : _b2.val) ?? {},
            modelName: T ? T.charAt(0).toUpperCase() + T.slice(1) : "Modelo"
          };
          $(v);
        });
      }), (_n2 = Le.querySelector("#cad3d-tutorials")) == null ? void 0 : _n2.addEventListener("click", (h) => {
        h.stopPropagation(), gs(async () => {
          const { openTutorialPanel: $ } = await import("./tutorialPanel-6s7xqDFI.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          });
          return {
            openTutorialPanel: $
          };
        }, __vite__mapDeps([6,5,7]), import.meta.url).then(({ openTutorialPanel: $ }) => {
          var _a3, _b2;
          const v = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: ((_a3 = e.nodeInputs) == null ? void 0 : _a3.val) ?? {},
            elementInputs: ((_b2 = e.elementInputs) == null ? void 0 : _b2.val) ?? {},
            modelName: T ? T.charAt(0).toUpperCase() + T.slice(1) : "Modelo"
          };
          $(v);
        });
      }), (_o2 = Le.querySelector("#cad3d-modal")) == null ? void 0 : _o2.addEventListener("click", (h) => {
        var _a3, _b2;
        h.stopPropagation(), De = !De, (_a3 = Le.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", De);
        const v = Le.querySelector("#cad3d-mode-prev"), F = Le.querySelector("#cad3d-mode-next"), X = Le.querySelector("#cad3d-mode-label"), K = Le.querySelector("#cad3d-modal-scale");
        if (De) {
          const le = et();
          ((_b2 = le == null ? void 0 : le.settings) == null ? void 0 : _b2.loads) && (Be = le.settings.loads.rawVal, le.settings.loads.val = false), Vn(), v.style.display = "", F.style.display = "", X.style.display = "", K && (K.style.display = ""), f();
        } else Un(), v.style.display = "none", F.style.display = "none", X.style.display = "none", K && (K.style.display = "none"), T && T !== "placa-q4" && T !== "placa-3q" && Ne(), setTimeout(() => {
          var _a4;
          const le = et();
          ((_a4 = le == null ? void 0 : le.settings) == null ? void 0 : _a4.loads) && Be && (le.settings.loads.val = true);
        }, 600);
      });
      function f() {
        var _a3;
        const h = Le.querySelector("#cad3d-mode-label");
        if (!h || !(Fe == null ? void 0 : Fe.frequencies)) return;
        const $ = Fe.frequencies[xe], v = $ > 0 ? 1 / $ : 0, F = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let X = 0; X <= xe; X++) {
          const K = (_a3 = Fe.massParticipation) == null ? void 0 : _a3[X];
          if (K) for (let le = 0; le < 6; le++) F[le] += K[le];
        }
        h.textContent = `Modo ${xe + 1} \u2014 ${$.toFixed(2)} Hz \u2014 T=${v.toFixed(3)}s \u2014 \u03A3Ux=${(F[0] * 100).toFixed(1)}% \u03A3Uy=${(F[1] * 100).toFixed(1)}% \u03A3Rz=${(F[5] * 100).toFixed(1)}%`;
      }
      (_p = Le.querySelector("#cad3d-mode-prev")) == null ? void 0 : _p.addEventListener("click", (h) => {
        if (h.stopPropagation(), !(Fe == null ? void 0 : Fe.modeShapes)) return;
        xe = (xe - 1 + Fe.modeShapes.length) % Fe.modeShapes.length;
        const $ = Fe.modeShapes[xe], { extent: v } = zo();
        let F = 0;
        for (let X = 0; X < ze.length; X++) {
          const K = $[X * 6] || 0, le = $[X * 6 + 1] || 0, ee = $[X * 6 + 2] || 0;
          F = Math.max(F, Math.sqrt(K * K + le * le + ee * ee));
        }
        Ve = F > 1e-12 ? v * 0.05 / F : 1, pn(), f();
      }), (_q = Le.querySelector("#cad3d-mode-next")) == null ? void 0 : _q.addEventListener("click", (h) => {
        var _a3, _b2;
        if (h.stopPropagation(), !(Fe == null ? void 0 : Fe.modeShapes)) return;
        xe = (xe + 1) % Fe.modeShapes.length;
        const $ = Fe.modeShapes[xe];
        if (!$) {
          console.warn("No shape for mode", xe);
          return;
        }
        const { extent: v } = zo();
        let F = 0;
        for (let X = 0; X < ze.length; X++) {
          const K = $[X * 6] || 0, le = $[X * 6 + 1] || 0, ee = $[X * 6 + 2] || 0;
          F = Math.max(F, Math.sqrt(K * K + le * le + ee * ee));
        }
        Ve = F > 1e-12 ? v * 0.05 / F : 1, console.log(`Mode ${xe + 1}: maxDisp=${F.toExponential(3)}, scale=${Ve.toFixed(1)}, f=${(_b2 = (_a3 = Fe.frequencies) == null ? void 0 : _a3[xe]) == null ? void 0 : _b2.toFixed(2)} Hz`), pn(), f();
      });
      const x = Le.querySelector("#cad3d-modal-scale");
      x == null ? void 0 : x.addEventListener("mousedown", (h) => h.stopPropagation()), x == null ? void 0 : x.addEventListener("change", () => {
        De && (Fe == null ? void 0 : Fe.modeShapes) && pn();
      });
      const I = Le.querySelector("#cad3d-cli-toggle"), C = Le.querySelector("#cad3d-cli-panel"), A = Le.querySelector("#cad3d-cli-output"), O = Le.querySelector("#cad3d-cmd"), k = [];
      let m = -1;
      I == null ? void 0 : I.addEventListener("click", (h) => {
        if (h.stopPropagation(), C) {
          const $ = C.style.display !== "none";
          C.style.display = $ ? "none" : "block", $ || (O == null ? void 0 : O.focus(), A && !A.textContent && (A.textContent = `CLI ready. Commands:
  cad.addNode(x, y, z)     cad.addFrame(i, j)
  cad.addSupport(n)        cad.addLoad(n, [fx,fy,fz,0,0,0])
  cad.frame([5,5],[3,3])   cad.building([5],[4],[3])
  cad.galpon(12,20,6,3)    cad.clear()
  cad.info()               cad.listNodes()
`));
        }
      }), O == null ? void 0 : O.addEventListener("mousedown", (h) => h.stopPropagation()), document.addEventListener("keydown", (h) => {
        var _a3;
        if ((h.ctrlKey || h.metaKey) && h.key === "z" && !h.shiftKey) {
          h.preventDefault(), Ks();
          return;
        }
        if ((h.ctrlKey || h.metaKey) && (h.key === "y" || h.key === "z" && h.shiftKey)) {
          h.preventDefault(), Zs();
          return;
        }
        if ((h.key === "Delete" || h.key === "Backspace") && Et.size > 0) {
          h.preventDefault(), Et.forEach(($) => Z.add($)), Et.clear(), $o && ($o.remove(), $o = null), Ne();
          return;
        }
        if (h.key === "Escape") {
          if (yo) if (kt !== null) {
            kt = null;
            const $ = et();
            Gt && $ && ($.scene.remove(Gt), Gt.geometry.dispose(), Gt.material.dispose(), Gt = null), Yt && $ && ($.scene.remove(Yt), Yt.geometry.dispose(), Yt.material.dispose(), Yt = null), $ == null ? void 0 : $.render();
          } else wn();
          eo && Mn(), co && (co = false, _o(), (_a3 = Le.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), O == null ? void 0 : O.addEventListener("keydown", (h) => {
        if (h.stopPropagation(), h.key === "Enter") {
          const $ = O.value.trim();
          if ($) {
            k.unshift($), m = -1, A && (A.textContent += `> ${$}
`);
            try {
              const v = new Function("cad", `return ${$}`)(ot);
              if (v !== void 0 && A) {
                const F = typeof v == "object" ? JSON.stringify(v, null, 2) : String(v);
                A.textContent += `${F}
`;
              }
            } catch (v) {
              A && (A.textContent += `ERROR: ${v.message}
`);
            }
            A && (A.scrollTop = A.scrollHeight), O.value = "";
          }
        } else h.key === "ArrowUp" ? (h.preventDefault(), k.length > 0 && m < k.length - 1 && (m++, O.value = k[m])) : h.key === "ArrowDown" && (h.preventDefault(), m > 0 ? (m--, O.value = k[m]) : (m = -1, O.value = ""));
      });
      let u = false, E = 0, L = 0, P = 0, H = 0;
      Le.addEventListener("mousedown", (h) => {
        const $ = h.target.tagName;
        if ($ === "BUTTON" || $ === "INPUT" || $ === "SELECT") return;
        u = true;
        const v = Le.getBoundingClientRect();
        Le.style.bottom = "unset", E = h.clientX, L = h.clientY, P = v.left, H = v.top, h.preventDefault();
      }), window.addEventListener("mousemove", (h) => {
        u && (h.preventDefault(), Le.style.left = P + (h.clientX - E) + "px", Le.style.top = H + (h.clientY - L) + "px");
      }), window.addEventListener("mouseup", () => {
        u = false;
      }), st();
    }, 10);
    function et() {
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
      const o = et();
      if (!o) return;
      const { extent: n } = zo();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((g) => g.type === "GridHelper").forEach((g) => {
        var _a2, _b;
        (_a2 = g.geometry) == null ? void 0 : _a2.dispose(), (_b = g.material) == null ? void 0 : _b.dispose(), o.scene.remove(g);
      });
      const c = wl(), s = new Fl(l, 20, c.grid, c.grid);
      s.rotation.x = Math.PI / 2, s.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(s), o.scene.children.filter((g) => g.type === "Group" && g.name !== "gridAxes" && g.name !== "loadsGroup" && (g.name === "viewerAxes" || g.children.some((S) => S instanceof kn))).forEach((g) => {
        g.traverse((S) => {
          S.geometry && S.geometry.dispose(), S.material && (S.material.map && S.material.map.dispose(), S.material.dispose());
        }), o.scene.remove(g);
      });
      const p = 0.05 * l, r = new vn();
      r.name = "viewerAxes";
      const d = c.axisArrow;
      r.add(new kn(new qe(1, 0, 0), new qe(), 1, d, 0.2, 0.2)), r.add(new kn(new qe(0, 1, 0), new qe(), 1, d, 0.2, 0.2)), r.add(new kn(new qe(0, 0, 1), new qe(), 1, d, 0.2, 0.2)), r.children.forEach((g) => g.scale.set(p, p, p));
      for (const [g, S, M] of [
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
        const x = new hs(y);
        x.needsUpdate = true;
        const I = new Tn(new zn({
          map: x,
          depthTest: false,
          transparent: true
        }));
        I.position.set(M[0], M[1], M[2]), I.scale.set(0.4 * p, 0.4 * p, 1), I.renderOrder = 99, r.add(I);
      }
      o.scene.add(r), t ? o.render() : Ao("3d");
    }
    function Xs(t, o, n) {
      if (t.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (l = Math.min(l, Math.abs(t[o + 1] - t[o]))), l * 0.45 || n * 0.1;
    }
    function Ao(t) {
      var _a2;
      const o = et();
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
            new Ro(new qe(0, 0, -1), g + S),
            new Ro(new qe(0, 0, 1), -g + S)
          ], s(), p(new qe(n.x, n.y, g + l * 2), new qe(n.x, n.y, g), new qe(0, 1, 0));
        } else if (t === "elevX") i.position.set(n.x + l * 2, n.y, n.z), i.up.set(0, 0, 1);
        else if (t === "elevY") i.position.set(n.x, n.y - l * 2, n.z), i.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const r = parseInt(t.split(":")[1]), d = Je[r] ?? n.x;
          if (Qe.length > 1) {
            const S = Xs(Je, r, l);
            o.renderer.clippingPlanes = [
              new Ro(new qe(-1, 0, 0), d + S),
              new Ro(new qe(1, 0, 0), -d + S)
            ], s(), i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const r = parseInt(t.split(":")[1]), d = Qe[r] ?? n.y;
          if (Je.length > 1) {
            const S = Xs(Qe, r, l);
            o.renderer.clippingPlanes = [
              new Ro(new qe(0, -1, 0), d + S),
              new Ro(new qe(0, 1, 0), -d + S)
            ], s(), i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(i);
      }
    }
    function es() {
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
      n.textContent = `${z("Ejes")}:`, n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      Je.forEach((c, s) => {
        const i = s < l.length ? l[s] : `X${s}`;
        t.appendChild(o(i, `axisX:${s}`, `${z("Eje")} ${i} \u2014 ${z("elevaci\xF3n mirando en")} Y`));
      });
      const a = document.createElement("span");
      a.textContent = "|", a.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(a), Qe.forEach((c, s) => {
        const i = `${s + 1}`;
        t.appendChild(o(i, `axisY:${s}`, `${z("Eje")} ${i} \u2014 ${z("elevaci\xF3n mirando en")} X`));
      });
    }
    function ts() {
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
      l.textContent = `${z("Planta")}:`, l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let a = 0; a < o; a++) t.appendChild(n(`P${a + 1}`, `plan:${a}`, `${z("Planta")} ${z("Piso")} ${a + 1}`));
    }
    function Za() {
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
    let co = false, eo = false, yo = false, Ut = "line", so = [], kt = null, Gt = null, Yt = null, Vo = null, lo = null;
    const Lt = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, os = 0.5;
    let ns = [], io = null, qo = null;
    const Uo = [], $n = [], Qa = 50;
    function Xo() {
      Uo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), Uo.length > Qa && Uo.shift(), $n.length = 0;
    }
    function Ks() {
      if (Uo.length === 0) return;
      $n.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = Uo.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, To(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function Zs() {
      if ($n.length === 0) return;
      Uo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = $n.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, To(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const Et = /* @__PURE__ */ new Set();
    let to = null, Lo = [], ao = null, $o = null;
    function ss(t) {
      const o = et();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const a = [];
      for (let i = 0; i < l.length; i++) {
        const p = n[l[i]], r = n[l[(i + 1) % l.length]];
        a.push(p[0], p[1], p[2], r[0], r[1], r[2]);
      }
      const c = new ro();
      c.setAttribute("position", new Ho(a, 3));
      const s = new on(c, new nn({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      s.renderOrder = 9998, s.__elemIdx = t, o.scene.add(s), Lo.push(s), o.render();
    }
    function Co() {
      const t = et();
      Lo.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), Lo = [], t == null ? void 0 : t.render();
    }
    function Fo() {
      $o && $o.remove();
      const t = V.size > 0 || W;
      if (Et.size === 0 && !t) {
        $o = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${Et.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), $o = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        bl([
          ...Et
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (Et.size === 1) {
          const n = [
            ...Et
          ][0];
          aa(n);
        } else {
          const n = [
            ...Et
          ], l = e.nodes.val, a = e.elements.val;
          let c = 0, s = 0, i = 0, p = 0;
          n.forEach((d) => {
            const g = a[d];
            if (g) if (g.length === 2) {
              const S = l[g[0]], M = l[g[1]], y = Math.abs(M[0] - S[0]), f = Math.abs(M[1] - S[1]), x = Math.abs(M[2] - S[2]);
              x > y && x > f ? c++ : s++;
            } else g.length === 3 ? i++ : g.length === 4 && p++;
          });
          const r = [];
          c && r.push(`${c} columnas`), s && r.push(`${s} vigas`), p && r.push(`${p} shells Q4`), i && r.push(`${i} triangulos`), alert(`${n.length} elementos seleccionados:
${r.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        Et.forEach((n) => V.add(n)), Et.clear(), Co(), Fo(), Ne();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        W = true, G.clear(), Et.forEach((n) => G.add(n)), Et.clear(), Co(), Fo(), Ne();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        V.clear(), W = false, G.clear(), Fo(), Ne();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        Xo(), Et.forEach((n) => Z.add(n)), Et.clear(), Co(), Fo(), Ne();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        Et.clear(), Co(), Fo();
      });
    }
    function Mn() {
      var _a2;
      eo = false, Et.clear(), Co(), $o && ($o.remove(), $o = null), (_a2 = Le.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const o = et();
      o && (o.controls.enabled = true);
    }
    function _o() {
      if (to) {
        const t = et();
        t == null ? void 0 : t.scene.remove(to), to.geometry.dispose(), to.material.dispose(), to = null, t == null ? void 0 : t.render();
      }
      ao && (ao.remove(), ao = null);
    }
    function el(t) {
      as();
      const o = et();
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
        ]), p = new ro();
        p.setAttribute("position", new Pn(i, 3));
        const r = new tn({
          color: s,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), d = new on(p, r);
        d.computeLineDistances(), d.renderOrder = 9990, o.scene.add(d), ns.push(d);
      }
      o.render();
    }
    function as() {
      const t = et();
      for (const o of ns) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      ns = [], qo = null, io && (io.remove(), io = null);
    }
    function Qs(t, o, n, l) {
      io || (io = document.createElement("div"), io.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(io));
      const a = l.x - n.x, c = l.y - n.y, s = l.z - n.z, i = Math.sqrt(a * a + c * c + s * s), p = Math.abs(a), r = Math.abs(c), d = Math.abs(s);
      let g = "";
      p > r && p > d ? g = `\u0394X=${a.toFixed(2)}` : r > p && r > d ? g = `\u0394Y=${c.toFixed(2)}` : d > 0.01 && (g = `\u0394Z=${s.toFixed(2)}`), io.textContent = `${i.toFixed(3)} m  ${g}`, io.style.left = t + 20 + "px", io.style.top = o - 10 + "px";
    }
    function tl(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const a = new qe(l[0], l[1], l[2]), c = t.clone(), s = c.clone().sub(a), i = 0.3, p = Math.abs(s.x), r = Math.abs(s.y), d = Math.abs(s.z);
      return r < i && d < i && p > 0.01 ? new qe(c.x, a.y, a.z) : p < i && d < i && r > 0.01 ? new qe(a.x, c.y, a.z) : p < i && r < i && d > 0.01 ? new qe(a.x, a.y, c.z) : null;
    }
    function wn() {
      var _a2;
      const t = et();
      Gt && t && (t.scene.remove(Gt), Gt.geometry.dispose(), Gt.material.dispose(), Gt = null), Yt && t && (t.scene.remove(Yt), Yt.geometry.dispose(), Yt.material.dispose(), Yt = null), as(), kt = null, lo = null, yo = false, Vo && (Vo.remove(), Vo = null), (_a2 = Le.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function ol() {
      Vo && Vo.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (a) => `padding:4px 10px;border:1px solid ${a ? "#00ccff" : "#555"};background:${a ? "#003355" : "#333"};color:${a ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (a) => `padding:3px 6px;border:1px solid ${a ? "#33ff33" : "#444"};background:${a ? "#113311" : "#222"};color:${a ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o(Ut === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o(Ut === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o(Ut === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o(Ut === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${n(Lt.node)}">Node</button>
      <button id="ds-grid" style="${n(Lt.grid)}">Grid</button>
      <button id="ds-mid" style="${n(Lt.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(Lt.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${os}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), Vo = t;
      const l = () => {
        const a = t.querySelector("#dt-line"), c = t.querySelector("#dt-arc"), s = t.querySelector("#dt-node"), i = t.querySelector("#dt-area");
        a && (a.style.cssText = o(Ut === "line")), c && (c.style.cssText = o(Ut === "arc")), s && (s.style.cssText = o(Ut === "node")), i && (i.style.cssText = o(Ut === "area"));
        const p = t.querySelector("#ds-node"), r = t.querySelector("#ds-grid"), d = t.querySelector("#ds-mid"), g = t.querySelector("#ds-track");
        p && (p.style.cssText = n(Lt.node)), r && (r.style.cssText = n(Lt.grid)), d && (d.style.cssText = n(Lt.midpoint)), g && (g.style.cssText = n(Lt.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        Ut = "line", kt = null, lo = null, so = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        Ut = "arc", kt = null, lo = null, so = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        Ut = "node", kt = null, lo = null, so = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        Ut = "area", kt = null, lo = null, so = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        Lt.node = !Lt.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        Lt.grid = !Lt.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        Lt.midpoint = !Lt.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        Lt.track = !Lt.track, Lt.track || as(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (a) => {
        Lt.gridSize = parseFloat(a.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => Ks()), t.querySelector("#dt-redo").addEventListener("click", () => Zs());
    }
    function ea(t, o, n, l) {
      const a = l.getBoundingClientRect(), c = (t - a.left) / a.width * 2 - 1, s = -((o - a.top) / a.height) * 2 + 1, i = new Ta();
      i.setFromCamera(new za(c, s), n);
      const p = e.nodes.val, r = e.elements.val, d = 0.12;
      if (Lt.node) {
        let M = -1, y = 1 / 0;
        for (let f = 0; f < p.length; f++) {
          const x = p[f], I = new qe(x[0], x[1], x[2]).project(n), C = Math.sqrt((I.x - c) ** 2 + (I.y - s) ** 2);
          C < d && C < y && (y = C, M = f);
        }
        if (M >= 0) return {
          nodeIdx: M,
          worldPos: new qe(...p[M]),
          snapType: "node"
        };
      }
      if (Lt.midpoint) {
        let M = 1 / 0, y = null;
        for (const f of r) {
          if (f.length !== 2) continue;
          const x = p[f[0]], I = p[f[1]], C = new qe((x[0] + I[0]) / 2, (x[1] + I[1]) / 2, (x[2] + I[2]) / 2), A = C.clone().project(n), O = Math.sqrt((A.x - c) ** 2 + (A.y - s) ** 2);
          O < d * 0.8 && O < M && (M = O, y = C);
        }
        if (y) return {
          nodeIdx: null,
          worldPos: y,
          snapType: "mid"
        };
      }
      if (Lt.grid) {
        const M = new Ro(new qe(0, 0, 1), 0), y = new qe();
        if (i.ray.intersectPlane(M, y)) {
          const f = Lt.gridSize || os;
          return y.x = Math.round(y.x / f) * f, y.y = Math.round(y.y / f) * f, y.z = Math.round(y.z / f) * f, {
            nodeIdx: null,
            worldPos: y,
            snapType: "grid"
          };
        }
      }
      const g = new Ro(new qe(0, 0, 1), 0), S = new qe();
      return i.ray.intersectPlane(g, S), {
        nodeIdx: null,
        worldPos: S,
        snapType: "free"
      };
    }
    function ta(t) {
      const o = et();
      if (!o) return;
      const n = e.nodes.val;
      if (Yt && (o.scene.remove(Yt), Yt.geometry.dispose(), Yt.material.dispose(), Yt = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, a = t.snapType === "node" ? 0.08 : 0.06, c = t.snapType === "mid" ? new zl(a * 2, a * 2, a * 2) : new Al(a, 12, 12), s = new Ll({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        Yt = new Ra(c, s), Yt.position.copy(t.worldPos), Yt.renderOrder = 9999, o.scene.add(Yt);
      }
      if (Gt && (o.scene.remove(Gt), Gt.geometry.dispose(), Gt.material.dispose(), Gt = null), kt !== null && t.worldPos) {
        const l = n[kt], a = new ro();
        if (Ut === "arc" && lo !== null) {
          const s = n[lo], i = oa(new qe(l[0], l[1], l[2]), new qe(s[0], s[1], s[2]), t.worldPos, 16), p = [];
          for (let r = 0; r < i.length - 1; r++) p.push(i[r].x, i[r].y, i[r].z, i[r + 1].x, i[r + 1].y, i[r + 1].z);
          a.setAttribute("position", new Ho(p, 3));
        } else a.setAttribute("position", new Ho([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const c = new nn({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        Gt = new jo(a, c), Ut === "arc" && lo !== null && (Gt = new on(a, c)), Gt.renderOrder = 9999, o.scene.add(Gt);
      }
      o.render();
    }
    function oa(t, o, n, l) {
      const a = [];
      for (let c = 0; c <= l; c++) {
        const s = c / l, i = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), p = (1 - s) * (1 - s), r = 2 * (1 - s) * s, d = s * s;
        a.push(new qe(p * t.x + r * i.x + d * n.x, p * t.y + r * i.y + d * n.y, p * t.z + r * i.z + d * n.z));
      }
      return a;
    }
    function ls(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const o = e.nodes.val, n = 1e-3;
      for (let a = 0; a < o.length; a++) if (Math.abs(o[a][0] - t.worldPos.x) < n && Math.abs(o[a][1] - t.worldPos.y) < n && Math.abs(o[a][2] - t.worldPos.z) < n) return a;
      Xo();
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
    function nl(t) {
      var _a2;
      if (Ut === "node") {
        if (!t.worldPos) return;
        Xo();
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
      if (Ut === "line") {
        const o = ls(t);
        if (o < 0) return;
        if (kt === null) {
          kt = o;
          return;
        }
        if (o === kt) return;
        Xo();
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
      if (Ut === "arc") {
        const o = ls(t);
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
        const n = e.nodes.val, l = new qe(...n[kt]), a = new qe(...n[lo]), c = new qe(...n[o]), s = Math.max(4, Math.round(((_a2 = J.nSubViga) == null ? void 0 : _a2.val) ?? 8)), i = oa(l, a, c, s);
        Xo();
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
            const M = i[g];
            S = p.length, p.push([
              M.x,
              M.y,
              M.z
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
      if (Ut === "area") {
        const o = ls(t);
        if (o < 0) return;
        if (so.length >= 3 && o === so[0]) {
          Xo();
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
              maxMeshSize: os || 0.5
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
          const n = so[so.length - 2], l = e.nodes.val, a = et();
          if (a) {
            const c = new ro().setFromPoints([
              new qe(...l[n]),
              new qe(...l[o])
            ]), s = new on(c, new nn({
              color: 65280,
              linewidth: 2
            }));
            s.name = "area-preview", a.scene.add(s), a.render();
          }
        }
        return;
      }
    }
    function na(t) {
      const o = et();
      if (!o) return;
      to && (o.scene.remove(to), to.geometry.dispose(), to.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const a = [];
      for (let s = 0; s < l.length; s++) {
        const i = n[l[s]], p = n[l[(s + 1) % l.length]];
        a.push(i[0], i[1], i[2], p[0], p[1], p[2]);
      }
      const c = new ro();
      c.setAttribute("position", new Ho(a, 3)), to = new on(c, new nn({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), to.renderOrder = 9999, o.scene.add(to), o.render();
    }
    function is(t) {
      const o = et();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new za((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), a = new Ta();
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
          const M = new qe(...c[S[0]]), y = new qe(...c[S[1]]), f = new Cl(M, y), x = new qe(), I = new qe();
          r.closestPointToPoint(f.getCenter(new qe()), x), f.closestPointToPoint(x, true, I);
          const C = x.distanceTo(I);
          C < i && (i = C, p = g);
        } else if (S.length === 3) {
          const M = new qe(...c[S[0]]), y = new qe(...c[S[1]]), f = new qe(...c[S[2]]), x = new qe();
          if (r.intersectTriangle(M, y, f, false, x)) {
            const C = r.origin.distanceTo(x);
            C < i && (i = C, p = g);
          } else {
            const C = M.add(y).add(f).divideScalar(3), A = new qe();
            r.closestPointToPoint(C, A);
            const O = A.distanceTo(C);
            O < i && (i = O, p = g);
          }
        } else if (S.length === 4) {
          const M = new qe(...c[S[0]]), y = new qe(...c[S[1]]), f = new qe(...c[S[2]]), x = new qe(...c[S[3]]), I = new qe();
          let C = r.intersectTriangle(M, y, f, false, I);
          if (C) {
            const A = r.origin.distanceTo(I);
            A < i && (i = A, p = g);
          }
          if (C = r.intersectTriangle(M, f, x, false, I), C) {
            const A = r.origin.distanceTo(I);
            A < i && (i = A, p = g);
          }
        }
      }
      const { extent: d } = zo();
      return i < d * 0.1 ? p : -1;
    }
    function Se(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function rs(t, o, n = 12) {
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
          c += `<td class="${r}">${Se(p, 2)}</td>`;
        }
        c += "</tr>";
      }
      return c += "</table>", c;
    }
    function He(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function R(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function sl(t, o, n, l, a, c, s) {
      const i = 0.8333333333333334 * o, p = 5 / 6 * o, r = p > 0 && a > 0 ? 12 * t * n / (a * p * s ** 2) : 0, d = i > 0 && a > 0 ? 12 * t * l / (a * i * s ** 2) : 0, g = t * o / s, S = a * c / s, M = 12 * t * n / s ** 3 / (1 + r), y = 6 * t * n / s ** 2 / (1 + r), f = 4 * t * n / s * (1 + r / 4) / (1 + r), x = 2 * t * n / s * (1 - r / 2) / (1 + r), I = r > 1e-10 || d > 1e-10;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n: ${I ? "Timoshenko (con deformaci\xF3n por cortante)" : "Euler-Bernoulli"}</strong></div>
      ${I ? `
      <div style="text-align:left;margin-bottom:6px;color:var(--fem-eq-sub)">
        ${R("A", "s")} = ${He("5", "6")} \xB7 ${R("A")} = <span class="highlight">${Se(i)}</span>
        &nbsp;&nbsp; \u03C6<sub>z</sub> = ${He("12\xB7" + R("E") + "\xB7" + R("I", "z"), R("G") + "\xB7" + R("A", "s") + "\xB7" + R("L") + "\xB2")} = <span class="highlight">${Se(r)}</span>
        &nbsp;&nbsp; \u03C6<sub>y</sub> = <span class="highlight">${Se(d)}</span>
      </div>
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes Timoshenko (Dr. Aguiar):</strong></div>
      <div>${R("t", "z")} = ${He("12\xB7" + R("E") + "\xB7" + R("I", "z"), R("L") + "\xB3\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Se(M)}</span> &nbsp;(cortante)</div>
      <div>${R("b", "z")} = ${He("6\xB7" + R("E") + "\xB7" + R("I", "z"), R("L") + "\xB2\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Se(y)}</span> &nbsp;(acoplamiento)</div>
      <div>${R("k", "z")} = ${He("4\xB7" + R("E") + "\xB7" + R("I", "z") + "\xB7(1+\u03C6/4)", R("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Se(f)}</span> &nbsp;(flexi\xF3n diagonal)</div>
      <div>${R("a", "z")} = ${He("2\xB7" + R("E") + "\xB7" + R("I", "z") + "\xB7(1\u2212\u03C6/2)", R("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Se(x)}</span> &nbsp;(flexi\xF3n off-diag)</div>
      ` : `
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      `}
      <div>${He(R("E") + "\xB7" + R("A"), R("L"))} = <span class="highlight">${Se(g)}</span> &nbsp;(axial)</div>
      <div>${He(R("G") + "\xB7" + R("J"), R("L"))} = <span class="highlight">${Se(S)}</span> &nbsp;(torsi\xF3n)</div>
      ${I ? "" : `
      <div>${He("12\xB7" + R("E") + "\xB7" + R("I", "z"), R("L") + "\xB3")} = <span class="highlight">${Se(M)}</span></div>
      <div>${He("4\xB7" + R("E") + "\xB7" + R("I", "z"), R("L"))} = <span class="highlight">${Se(f)}</span></div>
      `}
    </div>
    <div class="fem-eq">
      ${R("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${He(R("EA"), R("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${He("\u2212" + R("EA"), R("L"))}</span>
        <span class="cell">0</span><span class="cell">${R("t", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${R("b", "z")}</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">0</span><span class="cell">${R("b", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${R("k", "z")}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712 ${I ? "(Timoshenko)" : "(Euler-Bernoulli)"}</sub>
    </div>
    ${I ? `<div class="fem-eq eq-box" style="margin-top:6px">
      <div style="text-align:left"><strong style="color:var(--fem-section-title)">Matrices de rigidez (Dr. Aguiar, Fig 7.9):</strong></div>
      <div style="margin-top:4px">${R("K", "f")} = ${R("B", "f")}<sup>T</sup> \xB7 ${R("E")}\xB7${R("I")} \xB7 ${R("B", "f")} \xB7 ${R("J")} &nbsp;<sub style="color:var(--fem-label)">(flexi\xF3n, 1 pt Gauss)</sub></div>
      <div>${R("K", "c")} = ${R("B", "c")}<sup>T</sup> \xB7 ${R("G")}\xB7${R("A'")} \xB7 ${R("B", "c")} \xB7 ${R("J")} &nbsp;<sub style="color:var(--fem-label)">(cortante, 2 pts Gauss)</sub></div>
      <div>${R("K", "total")} = ${R("K", "f")} + ${R("K", "c")}</div>
    </div>` : ""}`;
    }
    function al(t) {
      if (t.length === 2) {
        const n = ko(t[1], t[0]), l = Yo(n), a = n[0] / l, c = n[1] / l, s = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${R("l")} = cos(\u03B1) = ${He("\u0394x", R("L"))} = ${He(Se(n[0]), Se(l))} = <span class="highlight">${Se(a)}</span></div>
        <div>${R("m")} = cos(\u03B2) = ${He("\u0394y", R("L"))} = ${He(Se(n[1]), Se(l))} = <span class="highlight">${Se(c)}</span></div>
        <div>${R("n")} = cos(\u03B3) = ${He("\u0394z", R("L"))} = ${He(Se(n[2]), Se(l))} = <span class="highlight">${Se(s)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${R("l")}</span><span class="cell">${R("m")}</span><span class="cell">${R("n")}</span>
          <span class="cell">${He("\u2212" + R("m"), R("D"))}</span><span class="cell">${He(R("l"), R("D"))}</span><span class="cell">0</span>
          <span class="cell">${He("\u2212" + R("l") + "\xB7" + R("n"), R("D"))}</span><span class="cell">${He("\u2212" + R("m") + "\xB7" + R("n"), R("D"))}</span><span class="cell">${R("D")}</span>
        </span>
        &nbsp; donde ${R("D")} = \u221A(${R("l")}\xB2 + ${R("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${R("T")} = ${R("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${R("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function ll() {
      return `<div class="fem-eq">
      ${R("K", "global")} = ${R("T")}<sup>T</sup> \xB7 ${R("k", "local")} \xB7 ${R("T")}
    </div>`;
    }
    function il(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${R("K", "global")}[${R("i")}, ${R("j")}] += ${R("K", "elem")}[${R("i")}, ${R("j")}]</div>
      <div style="margin-top:4px">donde ${R("i")}, ${R("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function rl(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${R("u", "local")} = ${R("T")} \xB7 ${R("u", "global")}</div>
        <div>${R("f", "local")} = ${R("k", "local")} \xB7 ${R("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${R("f")} = [${R("N", "i")}, ${R("V", "y,i")}, ${R("V", "z,i")}, ${R("M", "x,i")}, ${R("M", "y,i")}, ${R("M", "z,i")}, ${R("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${He("1", "2" + R("A"))} \xB7 ${R("D")} \xB7 ${R("B")} \xB7 ${R("u")}</div>
      <div>${R("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${R("t")} &nbsp;&nbsp; ${R("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${He(R("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function cs(t, o) {
      const n = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let a = 0; a < n; a++) l += `<td class="hdr">${o[a] || a}</td>`;
      l += "</tr>";
      for (let a = 0; a < n; a++) {
        l += `<tr><td class="hdr">${o[a] || a}</td>`;
        for (let c = 0; c < n; c++) {
          const s = t[a][c], i = (a === c ? "diag " : "") + (Math.abs(s) > 1e-10 ? "nz" : "");
          l += `<td class="${i}">${Se(s, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function sa() {
      const t = "0", o = He(R("EA"), R("L")), n = He("\u2212" + R("EA"), R("L")), l = He("12" + R("EI", "z"), R("L") + "\xB3"), a = He("\u221212" + R("EI", "z"), R("L") + "\xB3"), c = He("12" + R("EI", "y"), R("L") + "\xB3"), s = He("\u221212" + R("EI", "y"), R("L") + "\xB3"), i = He("6" + R("EI", "z"), R("L") + "\xB2"), p = He("\u22126" + R("EI", "z"), R("L") + "\xB2"), r = He("6" + R("EI", "y"), R("L") + "\xB2"), d = He("\u22126" + R("EI", "y"), R("L") + "\xB2"), g = He(R("GJ"), R("L")), S = He("\u2212" + R("GJ"), R("L")), M = He("4" + R("EI", "z"), R("L")), y = He("2" + R("EI", "z"), R("L")), f = He("4" + R("EI", "y"), R("L")), x = He("2" + R("EI", "y"), R("L")), I = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', C = [
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
      ], A = [
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
      ], O = [
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
          x,
          t
        ],
        [
          t,
          i,
          t,
          t,
          t,
          M,
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
          x,
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
          M
        ]
      ];
      let k = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      k += '<table><tr><td class="hdr"></td>';
      for (const m of A) k += `<td class="hdr">${m}</td>`;
      k += "</tr>";
      for (let m = 0; m < 12; m++) {
        k += `<tr><td class="hdr">${C[m]}</td>`;
        for (let u = 0; u < 12; u++) if (u < m) k += `<td style="color:var(--fem-border-cell)">${u === 0 && m > 0 ? I : ""}</td>`;
        else {
          const E = O[m][u], L = (m === u ? "diag " : "") + (E !== "0" ? "nz" : "");
          k += `<td class="${L}">${E}</td>`;
        }
        k += "</tr>";
      }
      return k += "</table>", k;
    }
    function cl(t, o, n, l, a, c, s) {
      return `<div class="coeff-grid">${[
        {
          name: `${He(R("E") + "\xB7" + R("A"), R("L"))}`,
          calc: `${He(Se(t) + "\xD7" + Se(o), Se(s))}`,
          val: t * o / s,
          label: "Axial"
        },
        {
          name: `${He("12\xB7" + R("E") + "\xB7" + R("I", "z"), R("L") + "\xB3")}`,
          calc: `${He("12\xD7" + Se(t) + "\xD7" + Se(n), Se(s) + "\xB3")}`,
          val: 12 * t * n / s ** 3,
          label: "Corte Y"
        },
        {
          name: `${He("6\xB7" + R("E") + "\xB7" + R("I", "z"), R("L") + "\xB2")}`,
          calc: `${He("6\xD7" + Se(t) + "\xD7" + Se(n), Se(s) + "\xB2")}`,
          val: 6 * t * n / s ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${He("12\xB7" + R("E") + "\xB7" + R("I", "y"), R("L") + "\xB3")}`,
          calc: `${He("12\xD7" + Se(t) + "\xD7" + Se(l), Se(s) + "\xB3")}`,
          val: 12 * t * l / s ** 3,
          label: "Corte Z"
        },
        {
          name: `${He("6\xB7" + R("E") + "\xB7" + R("I", "y"), R("L") + "\xB2")}`,
          calc: `${He("6\xD7" + Se(t) + "\xD7" + Se(l), Se(s) + "\xB2")}`,
          val: 6 * t * l / s ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${He(R("G") + "\xB7" + R("J"), R("L"))}`,
          calc: `${He(Se(a) + "\xD7" + Se(c), Se(s))}`,
          val: a * c / s,
          label: "Torsi\xF3n"
        },
        {
          name: `${He("4\xB7" + R("E") + "\xB7" + R("I", "z"), R("L"))}`,
          calc: `${He("4\xD7" + Se(t) + "\xD7" + Se(n), Se(s))}`,
          val: 4 * t * n / s,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${He("2\xB7" + R("E") + "\xB7" + R("I", "z"), R("L"))}`,
          calc: `${He("2\xD7" + Se(t) + "\xD7" + Se(n), Se(s))}`,
          val: 2 * t * n / s,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${He("4\xB7" + R("E") + "\xB7" + R("I", "y"), R("L"))}`,
          calc: `${He("4\xD7" + Se(t) + "\xD7" + Se(l), Se(s))}`,
          val: 4 * t * l / s,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${He("2\xB7" + R("E") + "\xB7" + R("I", "y"), R("L"))}`,
          calc: `${He("2\xD7" + Se(t) + "\xD7" + Se(l), Se(s))}`,
          val: 2 * t * l / s,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((p) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${p.label}</div>${p.name} = ${p.calc} = <span class="highlight">${Se(p.val)}</span></div>`).join("")}</div>`;
    }
    function ds(t, o, n, l) {
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
    function aa(t) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O;
      ao && ao.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], a = l.map((m) => o[m]), c = l.length === 2, s = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, i = (_b = e.deformOutputs) == null ? void 0 : _b.val, p = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      var r = "";
      if (c) {
        const m = Yo(ko(a[1], a[0])), u = ((_d = s.elasticities) == null ? void 0 : _d.get(t)) ?? 0, E = ((_e2 = s.areas) == null ? void 0 : _e2.get(t)) ?? 0, L = ((_f = s.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, P = ((_g = s.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, H = ((_h = s.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, h = ((_i = s.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0, $ = ((_j = s.momentReleases) == null ? void 0 : _j.get(t)) || [], v = ((_k = s.partialFixitySprings) == null ? void 0 : _k.get(t)) || [], F = [
          "P (Axial)",
          "V2 (Corte)",
          "V3 (Corte)",
          "T (Torsi\xF3n)",
          "M22 (Momento)",
          "M33 (Momento)"
        ];
        let X = "";
        for (let K = 0; K < 6; K++) {
          const le = K, ee = K + 6, Q = ($.length >= 12 ? $[le] : K >= 3 && $.length >= 6 && $[K - 3]) ? "checked" : "", fe = ($.length >= 12 ? $[ee] : K >= 3 && $.length >= 6 && $[K]) ? "checked" : "", ce = v.length >= 12 && v[le] > 0 ? v[le].toFixed(1) : "", ke = v.length >= 12 && v[ee] > 0 ? v[ee].toFixed(1) : "";
          X += `<tr>
          <td style="text-align:left;color:var(--fem-key)">${F[K]}</td>
          <td style="text-align:center"><input type="checkbox" data-rel="${le}" ${Q}></td>
          <td style="text-align:center"><input type="checkbox" data-rel="${ee}" ${fe}></td>
          <td><input type="number" data-spr="${le}" value="${ce}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
          <td><input type="number" data-spr="${ee}" value="${ke}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
        </tr>`;
        }
        `${l[0]}${l[1]}${Se(m)}${Se(u)}${Se(E)}${Se(L)}${Se(P)}${Se(H)}${Se(h)}${X}`;
      } else {
        const m = ((_l2 = s.elasticities) == null ? void 0 : _l2.get(t)) ?? 0, u = ((_m = s.thicknesses) == null ? void 0 : _m.get(t)) ?? 0, E = ((_n2 = s.poissonsRatios) == null ? void 0 : _n2.get(t)) ?? 0, L = m / (2 * (1 + E)), P = l.length === 4, H = m / (1 - E * E);
        `${l.length}${l.join(", ")}${Se(m)}${Se(L)}${Se(u)}${Se(E)}`, P && (r = `<div class="fem-eq eq-box">
          <div style="text-align:left;margin-bottom:6px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n Q4: Membrana + Mindlin-Reissner + Drilling</strong></div>

          <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">1. Matriz constitutiva (esfuerzo plano):</strong></div>
          <div>${R("D")} = ${He(R("E"), "1\u2212\u03BD\xB2")} \xB7 <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
            <span class="cell">1</span><span class="cell">\u03BD</span><span class="cell">0</span>
            <span class="cell">\u03BD</span><span class="cell">1</span><span class="cell">0</span>
            <span class="cell">0</span><span class="cell">0</span><span class="cell">${He("1\u2212\u03BD", "2")}</span>
          </span> = ${He(Se(m), "1\u2212" + Se(E) + "\xB2")} = <span class="highlight">${Se(H)}</span></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">2. Funciones de forma (Ec. 6.2, Wilson):</strong></div>
          <div>${R("N", "i")} = \xBC\xB7(1\xB1\u03BE)\xB7(1\xB1\u03B7) &nbsp;&nbsp; <sub style="color:var(--fem-label)">i = 1..4 (bilineal)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">3. Modos incompatibles (Ec. 6.13, Wilson 1971):</strong></div>
          <div>${R("N", "5")} = 1 \u2212 \u03BE\xB2 &nbsp;&nbsp; ${R("N", "6")} = 1 \u2212 \u03B7\xB2</div>
          <div style="margin-top:4px">${R("u", "x")} = \u03A3${R("N", "i")}\xB7${R("u", "xi")} + \u03B1\u2081\xB7${R("N", "5")} + \u03B1\u2082\xB7${R("N", "6")} &nbsp;<sub style="color:var(--fem-label)">(Ec. 6.12)</sub></div>
          <div>${R("u", "y")} = \u03A3${R("N", "i")}\xB7${R("u", "yi")} + \u03B1\u2083\xB7${R("N", "5")} + \u03B1\u2084\xB7${R("N", "6")}</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">4. Deformaci\xF3n-desplazamiento (Ec. 6.3):</strong></div>
          <div>${R("d")} = [${R("B", "C")} &nbsp; ${R("B", "I")}] \xB7 [${R("u")} &nbsp; \u03B1]<sup>T</sup></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">5. Submatrices de rigidez (Ec. 6.9):</strong></div>
          <div>${R("k", "CC")} = \u222B${R("B", "C")}<sup>T</sup>\xB7${R("E")}\xB7${R("B", "C")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD78 est\xE1ndar)</sub></div>
          <div>${R("k", "CI")} = \u222B${R("B", "C")}<sup>T</sup>\xB7${R("E")}\xB7${R("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD74 acoplamiento)</sub></div>
          <div>${R("k", "II")} = \u222B${R("B\u0304", "I")}<sup>T</sup>\xB7${R("E")}\xB7${R("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(4\xD74 modos internos)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">6. Condensaci\xF3n est\xE1tica (Ec. 6.11):</strong></div>
          <div style="font-size:13px"><span class="highlight">${R("k", "C")} = ${R("k", "CC")} \u2212 ${R("k", "CI")} \xB7 ${R("k", "II")}\u207B\xB9 \xB7 ${R("k", "IC")}</span></div>
          <div style="margin-top:4px;color:var(--fem-eq-sub)">Los 4 modos incompatibles \u03B1 se eliminan antes del ensamblaje global</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">7. Correcci\xF3n de Taylor (Ec. 6.7):</strong></div>
          <div>${R("B\u0304", "I")} = ${R("B", "I")} + ${R("B", "IC")} &nbsp; donde &nbsp; ${R("B", "IC")} = \u2212${He("1", "V")}\u222B${R("B", "I")} dV</div>
          <div style="color:var(--fem-eq-sub)">Jacobiano del centro para modos incompatibles \u2192 pasa patch test</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">8. Drilling DOF (Hughes-Brezzi 1989):</strong></div>
          <div>${R("K", "drill")} = \u03B1\xB7${R("G")}\xB7${R("t")} \xB7 \u222B${R("B", "d")}<sup>T</sup>\xB7${R("B", "d")} dA &nbsp; donde \u03B1 = 0.5</div>
          <div>${R("B", "d")}[i] = \u03B8<sub>z,i</sub> \u2212 \xBD\xB7(\u2202v/\u2202x \u2212 \u2202u/\u2202y) &nbsp;<sub style="color:var(--fem-label)">(rotaci\xF3n antisim\xE9trica)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">9. Placa Mindlin-Reissner + MITC4:</strong></div>
          <div>${R("D", "b")} = ${He(R("E") + "\xB7" + R("t") + "\xB3", "12\xB7(1\u2212\u03BD\xB2)")} = <span class="highlight">${Se(m * u ** 3 / (12 * (1 - E ** 2)))}</span></div>
          <div>${R("D", "s")} = \u03BA\xB7${R("G")}\xB7${R("t")} = <span class="highlight">${Se(5 / 6 * L * u)}</span> &nbsp; <sub style="color:var(--fem-label)">\u03BA = 5/6</sub></div>
          <div style="color:var(--fem-eq-sub)">MITC4: interpolaci\xF3n de cortante en puntos de atado (tying points)</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">10. Ensamblaje final:</strong></div>
          <div>${R("K", "24\xD724")} = ${R("K", "membrana")}(8\xD78) + ${R("K", "flexi\xF3n")}(12\xD712) + ${R("K", "drilling")}(12\xD712)</div>
          <div style="color:var(--fem-eq-sub)">DOFs por nodo: [u, v, w, \u03B8x, \u03B8y, \u03B8z]</div>
        </div>`);
      }
      let d = "", g = "", S = "";
      r || (r = "");
      let M = "", y = "", f = "", x = "", I = null, C = null, A = null, O = [];
      try {
        if (I = On(a, s, t), C = Nn(a), A = uo(Es(C), uo(I, C)), O = c ? [
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
          const L = Yo(ko(a[1], a[0])), P = ((_o2 = s.elasticities) == null ? void 0 : _o2.get(t)) ?? 0, H = ((_p = s.areas) == null ? void 0 : _p.get(t)) ?? 0, h = ((_q = s.momentsOfInertiaZ) == null ? void 0 : _q.get(t)) ?? 0, $ = ((_r = s.momentsOfInertiaY) == null ? void 0 : _r.get(t)) ?? 0, v = ((_s2 = s.shearModuli) == null ? void 0 : _s2.get(t)) ?? 0, F = ((_t2 = s.torsionalConstants) == null ? void 0 : _t2.get(t)) ?? 0;
          r = sl(P, H, h, $, v, F, L);
        }
        M = al(a), y = ll(), f = il(l), x = rl(c);
        const m = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', u = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', E = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        d = `<div class="matrix-label">k_local (${I.length}\xD7${I.length}) ${m}</div>${rs(I, O)}`, g = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${C.length}\xD7${C.length}) ${u}</div>${rs(C, O)}`, S = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${E}</div>${rs(A, O)}`;
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
          const L = ((_a3 = i.deformations) == null ? void 0 : _a3.get(u)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], P = m.map((H, h) => `<span class="prop-key">${H}</span>: <span class="${Math.abs(L[h]) > 1e-10 ? "result-val" : ""}">${Se(L[h])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${u}:</strong> ${P}</div>`;
        }).join("");
      }
      if (p && c && (i == null ? void 0 : i.deformations) && I && C) {
        const m = (_u = p.normals) == null ? void 0 : _u.get(t), u = (_v = p.shearsY) == null ? void 0 : _v.get(t), E = (_w = p.shearsZ) == null ? void 0 : _w.get(t), L = (_x = p.torsions) == null ? void 0 : _x.get(t), P = (_y = p.bendingsY) == null ? void 0 : _y.get(t), H = (_z = p.bendingsZ) == null ? void 0 : _z.get(t), h = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], $ = [];
        for (const ee of l) {
          const Q = ((_A = i.deformations) == null ? void 0 : _A.get(ee)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          $.push(...Q);
        }
        let v = [];
        try {
          v = uo(C, $);
        } catch {
          v = new Array(12).fill(0);
        }
        let F = [];
        try {
          F = uo(I, v);
        } catch {
          F = new Array(12).fill(0);
        }
        const X = (ee, Q) => ee.map((fe, ce) => `<span style="color:${Math.abs(fe) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${Q[ce % 6]}=${Se(fe)}</span>`).join(", "), le = [
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
        ].map((ee, Q) => `${ee}${Q < 6 ? "\u1D62" : "\u2C7C"}`);
        `${R("u", "global")}${l.map((ee, Q) => `<span style="color:var(--fem-label)">nodo ${ee}:</span> ${h.map((fe, ce) => `<span style="color:${Math.abs($[Q * 6 + ce]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${Se($[Q * 6 + ce])}</span>`).join(", ")}`).join(" | ")}${R("u", "local")}${R("T")}${R("u", "global")}${R("u", "local")}${X(v, [
          ...h,
          ...h
        ])}${R("f", "local")}${R("k", "local")}${R("u", "local")}${R("f", "local")}${F.map((ee, Q) => `<span style="color:${Math.abs(ee) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${le[Q]}=${Se(ee)}</span>`).join(", ")}${R("P", "1")}${R("N", "i")}${Se(F[0])}${R("P", "7")}${R("N", "j")}${Se(F[6])}${R("P", "2")}${R("V", "y,i")}${Se(F[1])}${R("P", "8")}${R("V", "y,j")}${Se(F[7])}${R("P", "3")}${R("V", "z,i")}${Se(F[2])}${R("P", "9")}${R("V", "z,j")}${Se(F[8])}${R("P", "4")}${R("M", "x,i")}${Se(F[3])}${R("P", "10")}${R("M", "x,j")}${Se(F[9])}${R("P", "5")}${R("M", "y,i")}${Se(F[4])}${R("P", "11")}${R("M", "y,j")}${Se(F[10])}${R("P", "6")}${R("M", "z,i")}${Se(F[5])}${R("P", "12")}${R("M", "z,j")}${Se(F[11])}${m ? m.map((ee) => Se(ee)).join(", ") : "\u2014"}${u ? u.map((ee) => Se(ee)).join(", ") : "\u2014"}${E ? E.map((ee) => Se(ee)).join(", ") : "\u2014"}${L ? L.map((ee) => Se(ee)).join(", ") : "\u2014"}${P ? P.map((ee) => Se(ee)).join(", ") : "\u2014"}${H ? H.map((ee) => Se(ee)).join(", ") : "\u2014"}`;
      } else if (p && c) {
        const m = (_B = p.normals) == null ? void 0 : _B.get(t), u = (_C = p.shearsY) == null ? void 0 : _C.get(t), E = (_D = p.shearsZ) == null ? void 0 : _D.get(t), L = (_E = p.torsions) == null ? void 0 : _E.get(t), P = (_F = p.bendingsY) == null ? void 0 : _F.get(t), H = (_G = p.bendingsZ) == null ? void 0 : _G.get(t);
        `${m ? m.map((h) => Se(h)).join(", ") : "\u2014"}${u ? u.map((h) => Se(h)).join(", ") : "\u2014"}${E ? E.map((h) => Se(h)).join(", ") : "\u2014"}${L ? L.map((h) => Se(h)).join(", ") : "\u2014"}${P ? P.map((h) => Se(h)).join(", ") : "\u2014"}${H ? H.map((h) => Se(h)).join(", ") : "\u2014"}`;
      } else if (p && !c) {
        const m = (_H = p.bendingXX) == null ? void 0 : _H.get(t), u = (_I = p.bendingYY) == null ? void 0 : _I.get(t), E = (_J = p.bendingXY) == null ? void 0 : _J.get(t), L = (_K = p.membraneXX) == null ? void 0 : _K.get(t), P = (_L = p.membraneYY) == null ? void 0 : _L.get(t), H = (_M = p.membraneXY) == null ? void 0 : _M.get(t);
        `${m ? m.map((h) => Se(h)).join(", ") : "\u2014"}${u ? u.map((h) => Se(h)).join(", ") : "\u2014"}${E ? E.map((h) => Se(h)).join(", ") : "\u2014"}${L ? L.map((h) => Se(h)).join(", ") : "\u2014"}${P ? P.map((h) => Se(h)).join(", ") : "\u2014"}${H ? H.map((h) => Se(h)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, ao = Vl(t, o, n, s, i, p), ao.id = "fem-inspect-panel", document.body.appendChild(ao), (_N = ao.querySelector("#er-close")) == null ? void 0 : _N.addEventListener("click", () => _o()), (_O = ao.querySelector("#rel-apply")) == null ? void 0 : _O.addEventListener("click", () => {
        const m = ao.querySelectorAll("input[data-rel]"), u = ao.querySelectorAll("input[data-spr]"), E = new Array(12).fill(false), L = new Array(12).fill(0);
        m.forEach((H) => {
          E[parseInt(H.dataset.rel)] = H.checked;
        }), u.forEach((H) => {
          const h = parseFloat(H.value);
          h > 0 && (L[parseInt(H.dataset.spr)] = h);
        }), s.momentReleases || (s.momentReleases = /* @__PURE__ */ new Map()), s.partialFixitySprings || (s.partialFixitySprings = /* @__PURE__ */ new Map()), E.some((H) => H) ? s.momentReleases.set(t, E) : s.momentReleases.delete(t), L.some((H) => H > 0) ? s.partialFixitySprings.set(t, L) : s.partialFixitySprings.delete(t), console.log(`Releases elem ${t}:`, E.map((H, h) => H ? relIds[h] : "").filter(Boolean).join(" ") || "none"), console.log(`Springs elem ${t}:`, L);
        const P = ao.querySelector("#rel-apply");
        P.textContent = "\u2713 Aplicado", P.style.background = "#4caf50", setTimeout(() => {
          P.textContent = "Aplicar", P.style.background = "var(--fem-heading)";
        }, 1500);
      });
      const k = c ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const m = Yo(ko(a[1], a[0])), u = ((_a3 = s.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, E = ((_b2 = s.areas) == null ? void 0 : _b2.get(t)) ?? 0, L = ((_c2 = s.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, P = ((_d2 = s.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, H = ((_e3 = s.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, h = ((_f2 = s.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return cl(u, E, L, P, H, h, m);
      })() : void 0;
      ao.querySelectorAll("[data-full]").forEach((m) => {
        m.addEventListener("click", (u) => {
          u.stopPropagation();
          const E = m.dataset.full;
          if (E === "kLocal" && I) {
            const L = c ? sa() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            ds(`Elemento ${t} \u2014 Rigidez Local k_local`, L, cs(I, O), k);
          } else if (E === "T" && C) ds(`Elemento ${t} \u2014 Transformaci\xF3n T`, M, cs(C, O));
          else if (E === "kGlobal" && A) {
            const L = c ? sa() : "<em>Shell 18\xD718</em>";
            ds(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, L, cs(A, O), k);
          }
        });
      });
    }
    function la() {
      const l = [], a = [];
      for (let y = 0; y <= 8; y++) {
        const f = y / 8, x = 30 * f, C = 12 * (1 - f) * (1 - f * 0.3) / 2, A = l.length;
        if (l.push([
          -C,
          -C,
          x
        ]), l.push([
          C,
          -C,
          x
        ]), l.push([
          C,
          C,
          x
        ]), l.push([
          -C,
          C,
          x
        ]), a.push([
          A,
          A + 1
        ]), a.push([
          A + 1,
          A + 2
        ]), a.push([
          A + 2,
          A + 3
        ]), a.push([
          A + 3,
          A
        ]), y > 0 && y < 8 && (a.push([
          A,
          A + 2
        ]), a.push([
          A + 1,
          A + 3
        ])), y > 0) {
          const O = A - 4;
          for (let k = 0; k < 4; k++) a.push([
            O + k,
            A + k
          ]);
          a.push([
            O,
            A + 1
          ]), a.push([
            O + 1,
            A + 2
          ]), a.push([
            O + 2,
            A + 3
          ]), a.push([
            O + 3,
            A
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
      const p = 2e8, r = 77e6, d = 5e-3, g = 2e-6, S = 1e-6, M = {
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
      e.elementInputs && (e.elementInputs.val = M);
      try {
        const y = Rt(l, a, {
          supports: c,
          loads: i
        }, M);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Eiffel deform:", y.message);
      }
      setTimeout(() => It(), 50), st(), console.log(`Torre Eiffel: ${l.length} nodos, ${a.length} elementos, H=30m`);
    }
    function ia() {
      const l = [], a = [];
      for (let M = 0; M <= 20; M++) {
        const y = M / 20, f = 20 * y, x = 20 * (1 - Math.pow(2 * y - 1, 2)), I = 2;
        l.push([
          f,
          -2 / 2,
          x
        ]), l.push([
          f,
          I / 2,
          x
        ]);
      }
      for (let M = 0; M < 20; M++) a.push([
        M * 2,
        (M + 1) * 2
      ]), a.push([
        M * 2 + 1,
        (M + 1) * 2 + 1
      ]), a.push([
        M * 2,
        M * 2 + 1
      ]), a.push([
        M * 2,
        (M + 1) * 2 + 1
      ]), a.push([
        M * 2 + 1,
        (M + 1) * 2
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
      for (let M = 0; M <= 20; M++) s.set(M * 2, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]), s.set(M * 2 + 1, [
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
        elasticities: new Map(a.map((M, y) => [
          y,
          i
        ])),
        shearModuli: new Map(a.map((M, y) => [
          y,
          p
        ])),
        areas: new Map(a.map((M, y) => [
          y,
          r
        ])),
        momentsOfInertiaZ: new Map(a.map((M, y) => [
          y,
          d
        ])),
        momentsOfInertiaY: new Map(a.map((M, y) => [
          y,
          d
        ])),
        torsionalConstants: new Map(a.map((M, y) => [
          y,
          g
        ]))
      };
      e.elementInputs && (e.elementInputs.val = S);
      try {
        const M = Rt(l, a, {
          supports: c,
          loads: s
        }, S);
        M && e.deformOutputs && (e.deformOutputs.val = M);
      } catch (M) {
        console.warn("Arco:", M.message);
      }
      setTimeout(() => It(), 50), st(), console.log(`Arco Gateway: ${l.length} nodos, ${a.length} elem, span=20m, H=20m`);
    }
    function ra() {
      const c = [], s = [];
      for (let f = 0; f <= 16; f++) {
        const x = 60 * f / 16;
        c.push([
          x,
          -6 / 2,
          8
        ]), c.push([
          x,
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
        const x = 60 * f / 16, I = c.length;
        c.push([
          x,
          -6 / 2,
          0
        ]);
        const C = c.length;
        c.push([
          x,
          6 / 2,
          0
        ]);
        const A = c.length;
        c.push([
          x,
          -6 / 2,
          28
        ]);
        const O = c.length;
        c.push([
          x,
          6 / 2,
          28
        ]), r.push(A, O), s.push([
          I,
          f * 2
        ]), s.push([
          f * 2,
          A
        ]), s.push([
          C,
          f * 2 + 1
        ]), s.push([
          f * 2 + 1,
          O
        ]), s.push([
          A,
          O
        ]);
      }
      for (const f of r) {
        const x = c[f][0];
        for (let I = 0; I <= 16; I++) {
          const C = 60 * I / 16;
          if (Math.abs(C - x) > 60 * 0.05 && Math.abs(C - x) < 60 * 0.45) {
            const A = c[f][1] < 0 ? I * 2 : I * 2 + 1;
            I % 2 === 0 && s.push([
              f,
              A
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
      const S = 2e8, M = 77e6, y = {
        elasticities: new Map(s.map((f, x) => [
          x,
          S
        ])),
        shearModuli: new Map(s.map((f, x) => [
          x,
          M
        ])),
        areas: new Map(s.map((f, x) => [
          x,
          x < 16 * 3 + 1 ? 0.02 : 1e-3
        ])),
        momentsOfInertiaZ: new Map(s.map((f, x) => [
          x,
          5e-5
        ])),
        momentsOfInertiaY: new Map(s.map((f, x) => [
          x,
          2e-5
        ])),
        torsionalConstants: new Map(s.map((f, x) => [
          x,
          1e-5
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const f = Rt(c, s, {
          supports: d,
          loads: g
        }, y);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Puente:", f.message);
      }
      setTimeout(() => It(), 50), st(), console.log(`Puente atirantado: ${c.length} nodos, ${s.length} elem, span=60m`);
    }
    function ca() {
      const c = [], s = [];
      for (let x = 0; x <= 12; x++) {
        const I = x * 3.5, C = x * 5 * Math.PI / 180;
        for (let A = 0; A < 6; A++) {
          const O = C + 2 * Math.PI * A / 6, k = 5 * Math.cos(O), m = 5 * Math.sin(O);
          c.push([
            k,
            m,
            I
          ]);
        }
      }
      for (let x = 0; x <= 12; x++) {
        const I = x * 6;
        for (let C = 0; C < 6; C++) s.push([
          I + C,
          I + (C + 1) % 6
        ]);
        if (x < 12) {
          const C = (x + 1) * 6;
          for (let A = 0; A < 6; A++) s.push([
            I + A,
            C + A
          ]), s.push([
            I + A,
            C + (A + 1) % 6
          ]);
        }
      }
      for (let x = 0; x <= 12; x++) {
        const I = c.length;
        c.push([
          0,
          0,
          x * 3.5
        ]);
        const C = x * 6;
        for (let A = 0; A < 6; A++) s.push([
          I,
          C + A
        ]);
      }
      const i = 13 * 6;
      for (let x = 0; x < 12; x++) s.push([
        i + x,
        i + x + 1
      ]);
      const p = /* @__PURE__ */ new Map();
      for (let x = 0; x < 6; x++) p.set(x, [
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
      for (let x = 1; x <= 12; x++) {
        const I = 10 * x / 12, C = x * 6;
        for (let A = 0; A < 6; A++) r.set(C + A, [
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
      const d = 2e8, g = 77e6, S = 8e-3, M = 1e-5, y = 5e-6, f = {
        elasticities: new Map(s.map((x, I) => [
          I,
          d
        ])),
        shearModuli: new Map(s.map((x, I) => [
          I,
          g
        ])),
        areas: new Map(s.map((x, I) => [
          I,
          S
        ])),
        momentsOfInertiaZ: new Map(s.map((x, I) => [
          I,
          M
        ])),
        momentsOfInertiaY: new Map(s.map((x, I) => [
          I,
          M
        ])),
        torsionalConstants: new Map(s.map((x, I) => [
          I,
          y
        ]))
      };
      e.elementInputs && (e.elementInputs.val = f);
      try {
        const x = Rt(c, s, {
          supports: p,
          loads: r
        }, f);
        x && e.deformOutputs && (e.deformOutputs.val = x);
      } catch (x) {
        console.warn("Twisted:", x.message);
      }
      setTimeout(() => It(), 50), st(), console.log(`Torre Twist: ${c.length} nodos, ${s.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function da() {
      const a = [], c = [];
      for (let f = 0; f <= 20; f++) {
        const x = f / 20, I = f * 3;
        let C = 8 * (1 - x * 0.7);
        x > 0.4 && (C *= 0.85), x > 0.7 && (C *= 0.7);
        const A = a.length;
        a.push([
          0,
          0,
          I
        ]);
        for (let O = 0; O < 3; O++) {
          const k = O * 2 * Math.PI / 3 - Math.PI / 2, m = C * Math.cos(k), u = C * Math.sin(k), E = a.length;
          a.push([
            m,
            u,
            I
          ]), c.push([
            A,
            E
          ]);
          const L = a.length;
          a.push([
            m * 0.5,
            u * 0.5,
            I
          ]), c.push([
            A,
            L
          ]), c.push([
            L,
            E
          ]);
        }
        for (let O = 0; O < 3; O++) {
          const k = A + 1 + O * 2, m = A + 1 + (O + 1) % 3 * 2;
          c.push([
            k,
            m
          ]);
        }
        if (f < 20) {
          const k = A + 7;
          c.push([
            A,
            k
          ]);
          for (let m = 0; m < 3; m++) c.push([
            A + 1 + m * 2,
            k + 1 + m * 2
          ]), c.push([
            A + 2 + m * 2,
            k + 2 + m * 2
          ]), c.push([
            A + 1 + m * 2,
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
        const x = f * i, I = 5 * f / 20;
        p.set(x, [
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
      const r = 35e6, d = 14e6, g = 0.02, S = 5e-5, M = 2e-5, y = {
        elasticities: new Map(c.map((f, x) => [
          x,
          r
        ])),
        shearModuli: new Map(c.map((f, x) => [
          x,
          d
        ])),
        areas: new Map(c.map((f, x) => [
          x,
          g
        ])),
        momentsOfInertiaZ: new Map(c.map((f, x) => [
          x,
          S
        ])),
        momentsOfInertiaY: new Map(c.map((f, x) => [
          x,
          S
        ])),
        torsionalConstants: new Map(c.map((f, x) => [
          x,
          M
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const f = Rt(a, c, {
          supports: s,
          loads: p
        }, y);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Burj:", f.message);
      }
      setTimeout(() => It(), 50), st(), console.log(`Burj Khalifa: ${a.length} nodos, ${c.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function pa() {
      const t = [], o = [];
      for (let g = 0; g < 3; g++) {
        const S = g * 12, M = 15 - g * 2, y = 20 - g * 3, f = 8 - g, x = t.length;
        for (let C = 0; C <= 4; C++) {
          const A = C / 4, O = -f / 2 + f * A, k = y * (1 - A * A * 0.3);
          for (let m = 0; m <= 12; m++) {
            const u = m / 12, E = S + k * u, L = M * Math.sin(Math.PI * u) * (1 - A * A * 0.5), P = O;
            t.push([
              E,
              P,
              L
            ]);
          }
        }
        const I = 13;
        for (let C = 0; C < 4; C++) for (let A = 0; A < 12; A++) {
          const O = x + C * I + A, k = x + C * I + A + 1, m = x + (C + 1) * I + A + 1, u = x + (C + 1) * I + A;
          o.push([
            O,
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
        const g = Rt(t, o, {
          supports: a,
          loads: c
        }, d);
        g && e.deformOutputs && (e.deformOutputs.val = g);
      } catch (g) {
        console.warn("Opera:", g.message);
      }
      setTimeout(() => It(), 50), st(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function fa() {
      const l = [], a = [];
      for (let y = 0; y <= 15; y++) {
        const f = y / 15, x = y * 3.5, I = 5 * (0.6 + 0.4 * Math.sin(Math.PI * f));
        if (f > 0.9) {
          const C = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (f - 0.9) * 8);
          for (let A = 0; A < 12; A++) {
            const O = 2 * Math.PI * A / 12;
            l.push([
              Math.max(C, 1) * Math.cos(O),
              Math.max(C, 1) * Math.sin(O),
              x
            ]);
          }
        } else for (let C = 0; C < 12; C++) {
          const A = 2 * Math.PI * C / 12;
          l.push([
            I * Math.cos(A),
            I * Math.sin(A),
            x
          ]);
        }
      }
      for (let y = 0; y < 15; y++) {
        const f = y * 12, x = (y + 1) * 12;
        for (let C = 0; C < 12; C++) a.push([
          f + C,
          f + (C + 1) % 12
        ]);
        const I = y % 2 === 0 ? 1 : -1;
        for (let C = 0; C < 12; C++) {
          const A = (C + I + 12) % 12;
          a.push([
            f + C,
            x + A
          ]), a.push([
            f + C,
            x + C
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
        const f = y * 12, x = 3 * y / 15;
        for (let I = 0; I < 12; I += 3) i.set(f + I, [
          x,
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
      const p = 2e8, r = 77e6, d = 6e-3, g = 8e-6, S = 4e-6, M = {
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
      e.elementInputs && (e.elementInputs.val = M);
      try {
        const y = Rt(l, a, {
          supports: s,
          loads: i
        }, M);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Diagrid:", y.message);
      }
      setTimeout(() => It(), 50), st(), console.log(`Diagrid Tower: ${l.length} nodos, ${a.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function ps() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i;
      const t = w, o = ((_a2 = J.W) == null ? void 0 : _a2.val) ?? 5, n = ((_b = J.H) == null ? void 0 : _b.val) ?? 3, l = ((_c = J.t) == null ? void 0 : _c.val) ?? 0.2, a = Math.round(((_d = J.nx) == null ? void 0 : _d.val) ?? 8), c = Math.round(((_e2 = J.ny) == null ? void 0 : _e2.val) ?? 6), s = ((_f = J.E) == null ? void 0 : _f.val) ?? 25e6, i = ((_g = J.nu) == null ? void 0 : _g.val) ?? 0.2, p = ((_h = J.P) == null ? void 0 : _h.val) ?? 100, r = s / (2 * (1 + i)), d = o / a, g = n / c, S = [], M = [], y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
      for (let k = 0; k <= c; k++) for (let m = 0; m <= a; m++) S.push([
        m * d,
        0,
        k * g
      ]);
      const x = a + 1;
      for (let k = 0; k < c; k++) for (let m = 0; m < a; m++) M.push([
        k * x + m,
        k * x + m + 1,
        (k + 1) * x + m + 1,
        (k + 1) * x + m
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
      for (let k = 0; k <= a; k++) I.push(c * x + k);
      const C = p / I.length;
      for (const k of I) f.set(k, [
        C,
        0,
        0,
        0,
        0,
        0
      ]);
      e.nodes.val = S, e.elements.val = M, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: f
      });
      const A = {
        elasticities: new Map(M.map((k, m) => [
          m,
          s
        ])),
        poissonsRatios: new Map(M.map((k, m) => [
          m,
          i
        ])),
        thicknesses: new Map(M.map((k, m) => [
          m,
          l
        ])),
        shearModuli: new Map(M.map((k, m) => [
          m,
          r
        ])),
        densities: new Map(M.map((k, m) => [
          m,
          t.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = A);
      try {
        const k = performance.now(), m = Rt(S, M, {
          supports: y,
          loads: f
        }, A), u = performance.now() - k;
        if (m && e.deformOutputs) {
          e.deformOutputs.val = m;
          const E = Eo(S, M, A, m);
          e.analyzeOutputs && (e.analyzeOutputs.val = E);
          let L = 0, P = -1, H = 0, h = 0;
          m.deformations.forEach((v, F) => {
            const X = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
            X > L && (L = X, P = F, H = v[0], h = v[2]);
          });
          const $ = [];
          $.push('<b style="color:var(--cad-heading)">Muro Q4 \u2014 Membrana (Plane Stress)</b>'), $.push(`${S.length} nodos, ${M.length} elem Q4, ${S.length * 6} DOFs`), $.push(`W=${o}m, H=${n}m, t=${l}m, E=${s} kN/m\xB2, \u03BD=${i}`), $.push(`P=${p} kN (lateral, ${I.length} nodos top)`), $.push('<hr style="border-color:var(--cad-border);margin:4px 0">'), $.push(`K\xB7u=F \u2192 SparseLU \u2192 <span style="color:#00cc88">${u.toFixed(0)} ms</span>`), $.push("<b>Desplazamientos:</b>"), $.push(`&nbsp;&nbsp;max|u| = <b style="color:var(--cad-heading)">${L.toExponential(4)}</b> m (nodo ${P})`), $.push(`&nbsp;&nbsp;u<sub>x</sub> = <b>${(H * 1e3).toFixed(4)}</b> mm`), $.push(`&nbsp;&nbsp;u<sub>z</sub> = ${(h * 1e3).toFixed(4)} mm`), $.push('<hr style="border-color:var(--cad-border);margin:4px 0">'), $.push("<b>Desplazamientos top (ux):</b>");
          for (const v of I) {
            const F = m.deformations.get(v);
            F && $.push(`&nbsp;&nbsp;nodo ${v}: ux=${(F[0] * 1e3).toFixed(4)} mm`);
          }
          $.push('<hr style="border-color:var(--cad-border);margin:4px 0">'), $.push(`<b style="color:#00cc88">\u2714 Completado: ${(performance.now() - k).toFixed(0)} ms</b>`), window.__femLog = $, console.log(`Muro Q4: Ux_max=${H.toExponential(4)} m (nodo ${P})`);
        }
      } catch (k) {
        console.warn("MuroQ4:", k.message);
      }
      const O = et();
      if (O && (O.settings.shellResults.val = "displacementX", O.settings.deformedShape.val = true, !window.__muroQ4ScaleSet)) {
        const k = (_i = e.deformOutputs) == null ? void 0 : _i.val;
        if (k == null ? void 0 : k.deformations) {
          let m = 0;
          k.deformations.forEach((E) => {
            const L = Math.sqrt(E[0] * E[0] + E[1] * E[1] + E[2] * E[2]);
            L > m && (m = L);
          });
          const u = Math.sqrt(o * o + n * n);
          if (m > 1e-30) {
            const E = Math.round(0.07 * u / m);
            O.settings.deformScale.val = Math.max(1, Math.min(E, 1e4));
          }
        }
        window.__muroQ4ScaleSet = true;
      }
      setTimeout(() => It(), 50), st();
    }
    function ua() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = w, o = ((_a2 = J.L) == null ? void 0 : _a2.val) ?? 6, n = ((_b = J.h) == null ? void 0 : _b.val) ?? 0.5, l = ((_c = J.t) == null ? void 0 : _c.val) ?? 0.2, a = Math.round(((_d = J.nx) == null ? void 0 : _d.val) ?? 12), c = Math.round(((_e2 = J.ny) == null ? void 0 : _e2.val) ?? 4), s = ((_f = J.E) == null ? void 0 : _f.val) ?? 25e6, i = ((_g = J.nu) == null ? void 0 : _g.val) ?? 0.2, p = ((_h = J.P) == null ? void 0 : _h.val) ?? 50, r = s / (2 * (1 + i)), d = o / a, g = n / c, S = [], M = [], y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
      for (let O = 0; O <= c; O++) for (let k = 0; k <= a; k++) S.push([
        k * d,
        O * g,
        0
      ]);
      const x = a + 1;
      for (let O = 0; O < c; O++) for (let k = 0; k < a; k++) M.push([
        O * x + k,
        O * x + k + 1,
        (O + 1) * x + k + 1,
        (O + 1) * x + k
      ]);
      for (let O = 0; O <= c; O++) y.set(O * x, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const I = Math.floor(c / 2) * x + a;
      f.set(I, [
        0,
        0,
        -p,
        0,
        0,
        0
      ]), e.nodes.val = S, e.elements.val = M, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: f
      });
      const C = {
        elasticities: new Map(M.map((O, k) => [
          k,
          s
        ])),
        poissonsRatios: new Map(M.map((O, k) => [
          k,
          i
        ])),
        thicknesses: new Map(M.map((O, k) => [
          k,
          l
        ])),
        shearModuli: new Map(M.map((O, k) => [
          k,
          r
        ])),
        densities: new Map(M.map((O, k) => [
          k,
          t.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = C);
      try {
        const O = Rt(S, M, {
          supports: y,
          loads: f
        }, C);
        if (O && e.deformOutputs) {
          e.deformOutputs.val = O;
          const k = Eo(S, M, C, O);
          e.analyzeOutputs && (e.analyzeOutputs.val = k);
          const m = O.deformations.get(I), u = m ? m[2] : 0, E = l * n * n * n / 12, L = p * o * o * o / (3 * s * E);
          console.log(`Viga Q4: Uz_tip=${u.toExponential(4)} | Analitico=${L.toExponential(4)} | ratio=${(Math.abs(u) / L).toFixed(4)}`);
        }
      } catch (O) {
        console.warn("VigaQ4:", O.message);
      }
      const A = et();
      A && (A.settings.shellResults.val = "displacementZ", A.settings.deformedShape.val = true), setTimeout(() => It(), 50), st();
    }
    function ma() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = w, o = ((_a2 = J.Lx) == null ? void 0 : _a2.val) ?? 4, n = ((_b = J.Lz) == null ? void 0 : _b.val) ?? 2, l = ((_c = J.t) == null ? void 0 : _c.val) ?? 0.15, a = Math.round(((_d = J.nx) == null ? void 0 : _d.val) ?? 8), c = Math.round(((_e2 = J.nz) == null ? void 0 : _e2.val) ?? 4), s = ((_f = J.E) == null ? void 0 : _f.val) ?? 25e6, i = ((_g = J.nu) == null ? void 0 : _g.val) ?? 0.2, p = ((_h = J.P) == null ? void 0 : _h.val) ?? 20, r = s / (2 * (1 + i)), d = o / a, g = n / c, S = [], M = [], y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
      for (let k = 0; k <= c; k++) for (let m = 0; m <= a; m++) S.push([
        m * d,
        0,
        k * g
      ]);
      const x = a + 1;
      for (let k = 0; k < c; k++) for (let m = 0; m < a; m++) M.push([
        k * x + m,
        k * x + m + 1,
        (k + 1) * x + m + 1,
        (k + 1) * x + m
      ]);
      for (let k = 0; k <= c; k++) y.set(k * x, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const I = [];
      for (let k = 0; k <= c; k++) I.push(k * x + a);
      const C = p / I.length;
      for (const k of I) f.set(k, [
        0,
        0,
        -C,
        0,
        0,
        0
      ]);
      e.nodes.val = S, e.elements.val = M, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: f
      });
      const A = {
        elasticities: new Map(M.map((k, m) => [
          m,
          s
        ])),
        poissonsRatios: new Map(M.map((k, m) => [
          m,
          i
        ])),
        thicknesses: new Map(M.map((k, m) => [
          m,
          l
        ])),
        shearModuli: new Map(M.map((k, m) => [
          m,
          r
        ])),
        densities: new Map(M.map((k, m) => [
          m,
          t.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = A);
      try {
        const k = Rt(S, M, {
          supports: y,
          loads: f
        }, A);
        if (k && e.deformOutputs) {
          e.deformOutputs.val = k;
          const m = Eo(S, M, A, k);
          e.analyzeOutputs && (e.analyzeOutputs.val = m);
          const u = (c / 2 | 0) * x + a, E = k.deformations.get(u), L = E ? E[2] : 0;
          console.log(`Placa XZ Q4: Uz_tip=${L.toExponential(4)} m`);
        }
      } catch (k) {
        console.warn("PlacaXZ:", k.message);
      }
      const O = et();
      O && (O.settings.shellResults.val = "displacementZ", O.settings.deformedShape.val = true), setTimeout(() => It(), 50), st();
    }
    function ga() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y;
      const t = w, o = ((_a2 = J.Lx) == null ? void 0 : _a2.val) ?? 6, n = ((_b = J.Ly) == null ? void 0 : _b.val) ?? 8, l = ((_c = J.H1) == null ? void 0 : _c.val) ?? 3, a = ((_d = J.H2) == null ? void 0 : _d.val) ?? 4.5, c = Math.round(((_e2 = J.nCol) == null ? void 0 : _e2.val) ?? 4), s = Math.round(((_f = J.nCorr) == null ? void 0 : _f.val) ?? 8), i = ((_g = J.E) == null ? void 0 : _g.val) ?? t.E, p = ((_h = J.t) == null ? void 0 : _h.val) ?? 5e-4, r = ((_i = J.q) == null ? void 0 : _i.val) ?? 1, d = (((_j = J.supUx) == null ? void 0 : _j.val) ?? 1) >= 0.5, g = (((_k = J.supUy) == null ? void 0 : _k.val) ?? 1) >= 0.5, S = (((_l2 = J.supUz) == null ? void 0 : _l2.val) ?? 1) >= 0.5, M = (((_m = J.supRx) == null ? void 0 : _m.val) ?? 1) >= 0.5, y = (((_n2 = J.supRy) == null ? void 0 : _n2.val) ?? 1) >= 0.5, f = (((_o2 = J.supRz) == null ? void 0 : _o2.val) ?? 1) >= 0.5, x = 0.3, I = i / (2 * (1 + x)), C = ((_p = J.colD) == null ? void 0 : _p.val) ?? 0.16, A = ((_q = J.colBf) == null ? void 0 : _q.val) ?? 0.16, O = ((_r = J.colTf) == null ? void 0 : _r.val) ?? 0.013, k = ((_s2 = J.colTw) == null ? void 0 : _s2.val) ?? 8e-3, m = ((_t2 = J.vigD) == null ? void 0 : _t2.val) ?? 0.2, u = ((_u = J.vigBf) == null ? void 0 : _u.val) ?? 0.1, E = ((_v = J.vigTf) == null ? void 0 : _v.val) ?? 85e-4, L = ((_w = J.vigTw) == null ? void 0 : _w.val) ?? 56e-4, P = ((_x = J.corrB) == null ? void 0 : _x.val) ?? 0.06, H = ((_y = J.corrT) == null ? void 0 : _y.val) ?? 4e-3, h = (Ie, We, Ot, fo) => {
        const So = Ie - 2 * Ot, en = 2 * We * Ot + So * fo, In = (We * Ie ** 3 - (We - fo) * So ** 3) / 12, vl = (2 * Ot * We ** 3 + So * fo ** 3) / 12, yl = (2 * We * Ot ** 3 + So * fo ** 3) / 3;
        return {
          A: en,
          Iy: In,
          Iz: vl,
          J: yl
        };
      }, $ = h(C, A, O, k), v = h(m, u, E, L), F = P - 2 * H, X = P * P - F * F, K = (P ** 4 - F ** 4) / 12, le = 2 * H * (P - H) ** 2 * (P - H) / 2, ee = $.A, Q = $.Iz, fe = $.Iy, ce = $.J, ke = v.A, Pe = v.Iz, D = v.Iy, me = v.J, se = X, ue = K, te = K, ge = le, Me = 3, oe = [], Ee = [], je = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), tt = [];
      for (let Ie = 0; Ie < Me; Ie++) tt.push(Ie * o / (Me - 1));
      const Mt = [];
      for (let Ie = 0; Ie < c; Ie++) Mt.push(Ie * n / (c - 1));
      const Ct = [];
      for (let Ie = 0; Ie < s; Ie++) Ct.push(Ie * n / (s - 1));
      for (const Ie of Mt) Ct.some((We) => Math.abs(We - Ie) < 1e-6) || Ct.push(Ie);
      const ut = Ct.sort((Ie, We) => Ie - We), yt = ut.length, wo = (Ie) => l + (a - l) * Ie / n, Ft = [];
      for (let Ie = 0; Ie < Me; Ie++) {
        Ft[Ie] = [];
        for (let We = 0; We < yt; We++) Ft[Ie][We] = oe.length, oe.push([
          tt[Ie],
          ut[We],
          wo(ut[We])
        ]);
      }
      const Wt = [];
      for (let Ie = 0; Ie < Me; Ie++) {
        Wt[Ie] = [];
        for (let We = 0; We < c; We++) Wt[Ie][We] = oe.length, oe.push([
          tt[Ie],
          Mt[We],
          0
        ]);
      }
      const lt = [];
      for (let Ie = 0; Ie < c; Ie++) lt.push(ut.findIndex((We) => Math.abs(We - Mt[Ie]) < 1e-6));
      const ht = [];
      let Kt = 0;
      for (let Ie = 0; Ie < Me; Ie++) for (let We = 0; We < c; We++) Ee.push([
        Wt[Ie][We],
        Ft[Ie][lt[We]]
      ]), ht.push("col"), Kt++;
      for (let Ie = 0; Ie < Me; Ie++) for (let We = 0; We < yt - 1; We++) Ee.push([
        Ft[Ie][We],
        Ft[Ie][We + 1]
      ]), ht.push("vig"), Kt++;
      Ee.length;
      for (let Ie = 0; Ie < yt; Ie++) for (let We = 0; We < Me - 1; We++) Ee.push([
        Ft[We][Ie],
        Ft[We + 1][Ie]
      ]), ht.push("corr"), Kt++;
      Ee.length;
      for (let Ie = 0; Ie < Me - 1; Ie++) for (let We = 0; We < yt - 1; We++) Ee.push([
        Ft[Ie][We],
        Ft[Ie + 1][We],
        Ft[Ie + 1][We + 1],
        Ft[Ie][We + 1]
      ]), ht.push("shell");
      const Bt = [
        d,
        g,
        S,
        M,
        y,
        f
      ];
      for (let Ie = 0; Ie < Me; Ie++) for (let We = 0; We < c; We++) je.set(Wt[Ie][We], Bt);
      for (let Ie = 0; Ie < Me; Ie++) for (let We = 0; We < yt; We++) {
        let Ot;
        Ie === 0 ? Ot = (tt[1] - tt[0]) / 2 : Ie === Me - 1 ? Ot = (tt[Me - 1] - tt[Me - 2]) / 2 : Ot = (tt[Ie + 1] - tt[Ie - 1]) / 2;
        let fo;
        We === 0 ? fo = (ut[1] - ut[0]) / 2 : We === yt - 1 ? fo = (ut[yt - 1] - ut[yt - 2]) / 2 : fo = (ut[We + 1] - ut[We - 1]) / 2;
        const So = -r * Ot * fo, en = Ft[Ie][We], In = at.get(en) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        In[2] += So, at.set(en, In);
      }
      e.nodes.val = oe, e.elements.val = Ee, e.nodeInputs && (e.nodeInputs.val = {
        supports: je,
        loads: at
      });
      const po = /* @__PURE__ */ new Map(), oo = /* @__PURE__ */ new Map(), go = /* @__PURE__ */ new Map(), Do = /* @__PURE__ */ new Map(), gn = /* @__PURE__ */ new Map(), Bo = /* @__PURE__ */ new Map(), fs = /* @__PURE__ */ new Map(), Sn = /* @__PURE__ */ new Map(), bn = /* @__PURE__ */ new Map(), Qo = /* @__PURE__ */ new Map(), xl = t.rho;
      for (let Ie = 0; Ie < Ee.length; Ie++) {
        po.set(Ie, i), gn.set(Ie, I), fs.set(Ie, xl);
        const We = ht[Ie];
        if (We === "col") {
          oo.set(Ie, ee), go.set(Ie, Q), Do.set(Ie, fe), Bo.set(Ie, ce);
          const Ot = new Array(12).fill(false);
          Ot[10] = true, Ot[11] = true, Qo.set(Ie, Ot);
        } else if (We === "vig") oo.set(Ie, ke), go.set(Ie, Pe), Do.set(Ie, D), Bo.set(Ie, me);
        else if (We === "corr") {
          oo.set(Ie, se), go.set(Ie, ue), Do.set(Ie, te), Bo.set(Ie, ge);
          const Ot = new Array(12).fill(false);
          Ot[4] = true, Ot[5] = true, Ot[10] = true, Ot[11] = true, Qo.set(Ie, Ot);
        } else We === "shell" && (Sn.set(Ie, x), bn.set(Ie, p));
      }
      const us = {
        elasticities: po,
        areas: oo,
        momentsOfInertiaZ: go,
        momentsOfInertiaY: Do,
        shearModuli: gn,
        torsionalConstants: Bo,
        densities: fs,
        poissonsRatios: Sn,
        thicknesses: bn,
        momentReleases: Qo
      };
      e.elementInputs && (e.elementInputs.val = us);
      try {
        const Ie = Rt(oe, Ee, {
          supports: je,
          loads: at
        }, us);
        if (Ie && e.deformOutputs) {
          e.deformOutputs.val = Ie;
          const We = Eo(oe, Ee, us, Ie);
          e.analyzeOutputs && (e.analyzeOutputs.val = We);
          let Ot = 0, fo = 0;
          Ie.deformations.forEach((So, en) => {
            Math.abs(So[2]) > Math.abs(Ot) && (Ot = So[2], fo = en);
          }), console.log(`P\xE9rgola: Uz_max=${Ot.toExponential(4)} m en nodo ${fo} | ${Kt} frames + ${s - 1} shells`);
        }
      } catch (Ie) {
        console.warn("Pergola:", Ie.message);
      }
      const ms = et();
      ms && (ms.settings.shellResults.val = "displacementZ", ms.settings.deformedShape.val = true), setTimeout(() => It(), 50), st();
    }
    function dl() {
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
    function pl() {
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
        const o = (x) => {
          var _a3;
          return parseFloat(((_a3 = t.querySelector(`#${x}`)) == null ? void 0 : _a3.value) || "0");
        }, n = o("po-colB"), l = o("po-colH"), a = o("po-fc") * 1e3, c = o("po-fy") * 1e3, s = o("po-H"), i = o("po-L"), p = o("po-As") * 1e-4, r = o("po-nbar"), d = o("po-drift") / 100, g = o("po-ncycles"), S = t.querySelector("#pushover-status");
        S.textContent = "Generando historia de desplazamientos...";
        const M = [], y = d * s, f = 40;
        for (let x = 1; x <= g; x++) {
          const I = y * x / g;
          for (let C = 0; C <= f; C++) M.push(I * Math.sin(2 * Math.PI * C / f));
        }
        S.textContent = `Resolviendo pushover (${M.length} pasos)...`;
        try {
          const { cyclicPushover: x } = await gs(async () => {
            const { cyclicPushover: C } = await import("./cyclicPushoverCpp-Xwxa7wee.js").then(async (m) => {
              await m.__tla;
              return m;
            });
            return {
              cyclicPushover: C
            };
          }, __vite__mapDeps([8,5]), import.meta.url), I = await x({
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
            dispHistory: M
          });
          S.textContent = `Completado: ${I.nSteps} pasos`, fl(t.querySelector("#pushover-canvas"), I.displacements, I.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${a / 1e3}MPa, Fy=${c / 1e3}MPa`);
        } catch (x) {
          S.textContent = `Error: ${x.message}`, console.error("Pushover failed:", x);
        }
      });
    }
    function fl(t, o, n, l) {
      const a = t.getContext("2d");
      if (!a || o.length === 0) return;
      const c = t.width, s = t.height, i = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, p = c - i.left - i.right, r = s - i.top - i.bottom;
      a.fillStyle = "#111118", a.fillRect(0, 0, c, s);
      let d = Math.min(...o), g = Math.max(...o), S = Math.min(...n), M = Math.max(...n);
      d === g && (d -= 0.01, g += 0.01), S === M && (S -= 1, M += 1);
      const y = g - d, f = M - S, x = (O) => i.left + (O - d) / y * p, I = (O) => i.top + r - (O - S) / f * r;
      a.strokeStyle = "#333", a.lineWidth = 0.5, d < 0 && g > 0 && (a.strokeStyle = "#555", a.beginPath(), a.moveTo(x(0), i.top), a.lineTo(x(0), i.top + r), a.stroke()), S < 0 && M > 0 && (a.beginPath(), a.moveTo(i.left, I(0)), a.lineTo(i.left + p, I(0)), a.stroke()), a.strokeStyle = "#ff4444", a.lineWidth = 1.5, a.beginPath(), a.moveTo(x(o[0]), I(n[0]));
      for (let O = 1; O < o.length; O++) a.lineTo(x(o[O]), I(n[O]));
      a.stroke(), a.fillStyle = "#aaa", a.font = "11px monospace", a.textAlign = "center", a.fillText("Desplazamiento (m)", i.left + p / 2, s - 5), a.save(), a.translate(12, i.top + r / 2), a.rotate(-Math.PI / 2), a.fillText("Fuerza (kN)", 0, 0), a.restore(), a.fillStyle = "#ee9b00", a.font = "bold 11px monospace", a.textAlign = "center", a.fillText(l, c / 2, 15), a.fillStyle = "#888", a.font = "9px monospace", a.textAlign = "center";
      const C = y / 5;
      for (let O = 0; O <= 5; O++) {
        const k = d + C * O;
        a.fillText((k * 1e3).toFixed(1), x(k), s - i.bottom + 15);
      }
      a.textAlign = "right";
      const A = f / 5;
      for (let O = 0; O <= 5; O++) {
        const k = S + A * O;
        a.fillText(k.toFixed(0), i.left - 5, I(k) + 3);
      }
    }
    let fn = null;
    function ul() {
      if (fn) {
        fn.remove(), fn = null;
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
    `, document.body.appendChild(t), fn = t, t.querySelector("#nl-close").addEventListener("click", () => {
        t.remove(), fn = null;
      }), t.querySelector("#nl-test").addEventListener("click", () => ml(t));
    }
    function ml(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), a = parseFloat(t.querySelector("#nl-r0").value), c = parseFloat(t.querySelector("#nl-amp").value), s = parseInt(t.querySelector("#nl-cycles").value), i = 100, p = [];
      for (let K = 0; K < s; K++) {
        const le = c * (1 + K * 0.5);
        for (let ee = 0; ee < i; ee++) {
          const Q = ee / i * 2 * Math.PI;
          p.push(le * Math.sin(Q));
        }
      }
      const r = o / n, d = l * n;
      let g = 0, S = 0, M = -r, y = r, f = 0, x = 0, I = 0, C = 0, A = 0, O = 0;
      const k = [];
      for (const K of p) {
        let le = M, ee = y, Q = f, fe = x, ce = I, ke = C, Pe = A, D = O, me;
        const se = K - g;
        if (Math.abs(se) < 1e-20) {
          k.push(S);
          continue;
        }
        if ((D === 0 || D === 3) && (se < 0 ? (D = 2, fe = -r, ce = -o, Q = fe, ke = 0, Pe = 0) : (D = 1, fe = r, ce = o, Q = fe, ke = 0, Pe = 0)), D === 2 && se > 0) {
          D = 1, ke = g, Pe = S, g < le && (le = g);
          const Ee = (ee - le) / (2 * 1 * r), je = 1 + 0 * Math.pow(Ee, 0.8);
          fe = (o * je - d * r * je - Pe + n * ke) / (n - d), ce = o * je + d * (fe - r * je), Q = ee;
        } else if (D === 1 && se < 0) {
          D = 2, ke = g, Pe = S, g > ee && (ee = g);
          const Ee = (ee - le) / (2 * 1 * r), je = 1 + 0 * Math.pow(Ee, 0.8);
          fe = (-o * je + d * r * je - Pe + n * ke) / (n - d), ce = -o * je + d * (fe + r * je), Q = le;
        }
        const ue = Math.abs((Q - fe) / r);
        let te = a - 0.925 * ue / (0.15 + ue);
        te < 0.1 && (te = 0.1);
        const ge = (K - ke) / (fe - ke), Me = 1 + Math.pow(Math.abs(ge), te), oe = Math.pow(Me, 1 / te);
        me = l * ge + (1 - l) * ge / oe, me = me * (ce - Pe) + Pe, k.push(me), g = K, S = me, M = le, y = ee, f = Q, x = fe, I = ce, C = ke, A = Pe, O = D;
      }
      const m = t.querySelector("#nl-canvas"), u = m.getContext("2d"), E = m.width, L = m.height;
      u.clearRect(0, 0, E, L);
      const P = Math.max(...p.map(Math.abs)), H = Math.max(...k.map(Math.abs)), h = (E - 40) / (2 * P), $ = (L - 40) / (2 * H), v = E / 2, F = L / 2;
      u.strokeStyle = "#444", u.lineWidth = 1, u.beginPath(), u.moveTo(20, F), u.lineTo(E - 20, F), u.stroke(), u.beginPath(), u.moveTo(v, 20), u.lineTo(v, L - 20), u.stroke(), u.fillStyle = "#888", u.font = "10px monospace", u.textAlign = "center", u.fillText("\u03B5 (strain)", E - 40, F - 5), u.fillText("\u03C3 (stress)", v + 30, 15), u.fillText(`\xB1${(P * 100).toFixed(1)}%`, E - 30, F + 12), u.fillText(`\xB1${(H / 1e3).toFixed(0)} MPa`, v + 40, 30), u.strokeStyle = "#00ccff", u.lineWidth = 1.5, u.beginPath();
      for (let K = 0; K < p.length; K++) {
        const le = v + p[K] * h, ee = F - k[K] * $;
        K === 0 ? u.moveTo(le, ee) : u.lineTo(le, ee);
      }
      u.stroke(), u.strokeStyle = "#ff333366", u.lineWidth = 1, u.setLineDash([
        4,
        4
      ]), u.beginPath(), u.moveTo(20, F - o * $), u.lineTo(E - 20, F - o * $), u.stroke(), u.beginPath(), u.moveTo(20, F + o * $), u.lineTo(E - 20, F + o * $), u.stroke(), u.setLineDash([]), u.fillStyle = "#ff6666", u.font = "9px monospace", u.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, E - 50, F - o * $ - 5);
      const X = t.querySelector("#nl-info");
      X.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${a} \u2014 ${s} ciclos, amp=${(c * 100).toFixed(1)}%`;
    }
    function gl() {
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
      const s = Hl({
        nodes: o,
        elements: n,
        nodeInputs: a,
        elementInputs: l,
        deformOutputs: c
      });
      document.body.appendChild(s);
    }
    let Ko = null;
    function bl(t) {
      Ko && Ko.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = Ln(), l = Cn(), a = Object.entries(n).map(([r, d]) => `<option value="${d}">${r}</option>`).join(""), c = Object.entries(l).map(([r, d]) => `<option value="${d}">${r}</option>`).join("");
      o.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <b style="color:#00ccff;">${z("Asignar secci\xF3n")} (${t.length} elem.)</b>
        <button id="asgn-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <label>Tipo:</label>
        <select id="asgn-type" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;margin-top:2px;">
          <option value="rect">${z("Rectangular")} (b\xD7h)</option>
          <option value="circ">${z("Circular")} (d)</option>
          <option value="W">${z("Perfil")} W</option>
          <option value="HSS">${z("Perfil")} HSS</option>
          <option value="I-param">I ${z("Param\xE9trica")}</option>
          <option value="tubular">${z("Tubular Hueca")}</option>
          <option value="CFT">CFT (${z("Tubo relleno concreto")})</option>
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
    `, document.body.appendChild(o), Ko = o;
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
        o.remove(), Ko = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h;
        const r = s.value, d = {
          secType: r
        };
        r === "rect" ? (d.b = parseFloat(o.querySelector("#ap-b").value), d.h = parseFloat(o.querySelector("#ap-h").value), d.material = 0) : r === "circ" ? (d.b = parseFloat(o.querySelector("#ap-d").value), d.material = 0) : r === "W" || r === "HSS" ? (d.profileIdx = parseInt(o.querySelector("#ap-profile").value), d.material = 1) : r === "I-param" ? (d.bf = parseFloat(o.querySelector("#ap-bf").value), d.hf = parseFloat(o.querySelector("#ap-hf").value), d.tf = parseFloat(o.querySelector("#ap-tf").value), d.tw = parseFloat(o.querySelector("#ap-tw").value), d.material = 1) : r === "tubular" && (d.bc = parseFloat(o.querySelector("#ap-bc").value), d.hc = parseFloat(o.querySelector("#ap-hc").value), d.t = parseFloat(o.querySelector("#ap-t").value), d.material = 1);
        const g = new Array(12).fill(false), S = new Array(12).fill(0);
        o.querySelectorAll("input[data-asgn-rel]").forEach((M) => {
          g[parseInt(M.dataset.asgnRel)] = M.checked;
        }), o.querySelectorAll("input[data-asgn-spr]").forEach((M) => {
          const y = parseFloat(M.value);
          y > 0 && (S[parseInt(M.dataset.asgnSpr)] = y);
        }), d.releases12 = g, d.springs12 = S, d.releaseRotStart = g[4] || g[5], d.releaseRotEnd = g[10] || g[11], d.releaseAxial = g[0], d.releaseTorsion = g[3], d.modI = parseFloat((_a2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _a2.value) || 1, d.modA = parseFloat((_b = o.querySelector("#asgn-mod-a")) == null ? void 0 : _b.value) || 1, d.modJ = parseFloat((_c = o.querySelector("#asgn-mod-j")) == null ? void 0 : _c.value) || 1, d.modAs2 = parseFloat((_d = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _d.value) ?? 1, d.modAs3 = parseFloat((_e2 = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _e2.value) ?? 1, d.modI3 = parseFloat((_f = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _f.value) || 1, d.modMass = parseFloat((_g = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _g.value) || 1, d.modWeight = parseFloat((_h = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _h.value) || 1, t.forEach((M) => he.set(M, {
          ...d
        })), o.remove(), Ko = null, To(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((r) => he.delete(r)), o.remove(), Ko = null, To(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let Zo = null;
    function hl(t) {
      var _a2, _b, _c;
      Zo && Zo.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], a = o[n[1]], c = Math.abs(a[0] - l[0]), s = Math.abs(a[1] - l[1]), i = Math.abs(a[2] - l[2]), p = s > c && s > i, r = Math.sqrt(c * c + s * s + i * i), d = we.get(t) ?? 0, g = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), S = (g == null ? void 0 : g.name) || (g ? `${g.type} ${((g.b ?? 0) * 100).toFixed(0)}x${((g.h ?? 0) * 100).toFixed(0)}` : "\u2014"), M = document.createElement("div");
      M.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", M.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">${z("Elemento")} ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">${z("Tipo")}:</span> ${p ? z("Columna") : z("Viga")} &nbsp;
        <span style="color:#888;">${z("Piso")}:</span> ${d + 1} &nbsp;
        <span style="color:#888;">L:</span> ${r.toFixed(3)} m
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">${z("Secci\xF3n")}:</span> <span style="color:#00ccff;">${S}</span>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">${z("Nodos")}:</span> ${n[0]} \u2192 ${n[1]}
      </div>
      <hr style="border-color:#333;margin:12px 0;">
      <div style="display:flex;gap:8px;">
        <button id="ep-delete" style="flex:1;padding:8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">${z("Eliminar")}</button>
        <button id="ep-inspect" style="flex:1;padding:8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F50D} Inspect</button>
      </div>
    `, document.body.appendChild(M), Zo = M, M.querySelector("#ep-close").addEventListener("click", () => {
        M.remove(), Zo = null, _o();
      }), M.querySelector("#ep-delete").addEventListener("click", () => {
        Z.add(t), M.remove(), Zo = null, _o(), Ne();
      }), M.querySelector("#ep-inspect").addEventListener("click", () => {
        M.remove(), Zo = null, aa(t);
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
        const r = et();
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
        const M = Math.min(p, d), y = Math.max(p, d), f = Math.min(r, g), x = Math.max(r, g), I = e.nodes.val, C = e.elements.val, A = [];
        for (let O = 0; O < C.length; O++) {
          const k = C[O], m = k.map((u) => c(I[u])).filter(Boolean);
          if (m.length !== 0) if (S) m.every((E) => E.x >= M && E.x <= y && E.y >= f && E.y <= x) && A.push(O);
          else {
            if (m.some((E) => E.x >= M && E.x <= y && E.y >= f && E.y <= x)) {
              A.push(O);
              continue;
            }
            if (k.length === 2) {
              const E = m[0], L = m[1];
              i(E.x, E.y, L.x, L.y, M, f, y, x) && A.push(O);
            }
          }
        }
        return A;
      }
      function i(p, r, d, g, S, M, y, f) {
        const x = (C, A) => C >= S && C <= y && A >= M && A <= f;
        if (x(p, r) || x(d, g)) return true;
        const I = (C, A, O, k, m, u, E, L) => {
          const P = (O - C) * (L - u) - (k - A) * (E - m);
          if (Math.abs(P) < 1e-10) return false;
          const H = ((m - C) * (L - u) - (u - A) * (E - m)) / P, h = ((m - C) * (k - A) - (u - A) * (O - C)) / P;
          return H >= 0 && H <= 1 && h >= 0 && h <= 1;
        };
        return I(p, r, d, g, S, M, y, M) || I(p, r, d, g, y, M, y, f) || I(p, r, d, g, S, f, y, f) || I(p, r, d, g, S, M, S, f);
      }
      o.addEventListener("mousedown", (p) => {
        eo && (n = {
          x: p.offsetX,
          y: p.offsetY
        });
      }), o.addEventListener("mousemove", (p) => {
        if (yo) {
          const d = et();
          if (!d) return;
          const g = ea(p.clientX, p.clientY, d.camera, d.rendererElm);
          if (Lt.track && g.snapType === "node" && g.nodeIdx !== null && g.nodeIdx !== qo && el(g.nodeIdx), Lt.track && qo !== null && g.worldPos && g.snapType !== "node") {
            const S = tl(g.worldPos, qo);
            S && (g.worldPos = S, g.snapType = "grid");
          }
          if (qo !== null && g.worldPos) {
            const S = e.nodes.val[qo];
            S && Qs(p.clientX, p.clientY, new qe(...S), g.worldPos);
          } else if (kt !== null && g.worldPos) {
            const S = e.nodes.val[kt];
            S && Qs(p.clientX, p.clientY, new qe(...S), g.worldPos);
          } else io && (io.remove(), io = null);
          g.nodeIdx, ta(g), o.style.cursor = g.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!co && !eo) return;
        if (eo && n) {
          const d = p.offsetX - n.x, g = p.offsetY - n.y;
          if (Math.abs(d) > a || Math.abs(g) > a) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const S = d > 0, M = Math.min(n.x, p.offsetX), y = Math.min(n.y, p.offsetY), f = Math.abs(d), x = Math.abs(g);
            l.style.left = M + "px", l.style.top = y + "px", l.style.width = f + "px", l.style.height = x + "px", l.style.border = S ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = S ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const r = is(p);
        if (r >= 0) na(r), o.style.cursor = "pointer";
        else {
          if (to) {
            const d = et();
            d == null ? void 0 : d.scene.remove(to), to = null, d == null ? void 0 : d.render();
          }
          o.style.cursor = eo ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (p) => {
        if (eo && n) {
          const r = p.offsetX - n.x, d = p.offsetY - n.y;
          if (Math.abs(r) > a || Math.abs(d) > a) {
            const g = r > 0, S = s(n.x, n.y, p.offsetX, p.offsetY, g);
            p.ctrlKey || p.metaKey || (Et.clear(), Co()), S.forEach((y) => {
              Et.has(y) || (Et.add(y), ss(y));
            }), Fo();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (p) => {
        if (yo) {
          const r = et();
          if (!r) return;
          const d = ea(p.clientX, p.clientY, r.camera, r.rendererElm);
          (d.worldPos || d.nodeIdx !== null) && (nl(d), ta(d));
          return;
        }
        if (eo) {
          if (l) return;
          const r = is(p), d = p.ctrlKey || p.metaKey;
          if (r >= 0) {
            if (d) if (Et.has(r)) {
              Et.delete(r);
              const g = Lo.findIndex((S) => S.__elemIdx === r);
              if (g >= 0) {
                const S = et();
                S == null ? void 0 : S.scene.remove(Lo[g]), Lo[g].geometry.dispose(), Lo[g].material.dispose(), Lo.splice(g, 1), S == null ? void 0 : S.render();
              }
            } else Et.add(r), ss(r);
            else Et.clear(), Co(), Et.add(r), ss(r);
            Fo();
          } else d || (Et.clear(), Co(), Fo());
          return;
        }
        if (co) {
          const r = is(p);
          r >= 0 && (na(r), hl(r));
        }
      });
    }, 500), sn.derive(() => {
      var _a2;
      e.nodes.val, e.elements.val, (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, st();
    }), ot.modal = (t) => {
      var _a2, _b;
      if (t === void 0 && (t = !De), De = t, (_a2 = Le.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", De), De) {
        const n = et();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (Be = n.settings.loads.rawVal, n.settings.loads.val = false), Vn(), Le.querySelector("#cad3d-mode-prev").style.display = "", Le.querySelector("#cad3d-mode-next").style.display = "", Le.querySelector("#cad3d-mode-label").style.display = "";
      } else Un(), Le.querySelector("#cad3d-mode-prev").style.display = "none", Le.querySelector("#cad3d-mode-next").style.display = "none", Le.querySelector("#cad3d-mode-label").style.display = "none", T && T !== "placa-q4" && T !== "placa-3q" && Ne(), setTimeout(() => {
        var _a3;
        const n = et();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && Be && (n.settings.loads.val = true);
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
      Ve = l > 1e-12 ? n * 0.05 / l : 1, pn();
      const a = Le.querySelector("#cad3d-mode-label");
      a && Fe.frequencies && (a.textContent = `Modo ${xe + 1} \u2014 ${Fe.frequencies[xe].toFixed(2)} Hz`), console.log(`Modo ${xe + 1}: f = ${(_a2 = Fe.frequencies) == null ? void 0 : _a2[xe].toFixed(4)} Hz`);
    }, window.cad = ot, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(Le), document.body.appendChild(ft.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (nt("muro-q4"), ps(), Us("muro-q4"), setTimeout(() => {
        T === "muro-q4" && mo();
      }, 200));
    }, 100);
    const un = document.createElement("button");
    un.id = "mobile-menu-btn", un.innerHTML = "\u2630", un.addEventListener("click", () => {
      const t = document.getElementById("cad3d-panel");
      t && (t.classList.toggle("mobile-open"), un.innerHTML = t.classList.contains("mobile-open") ? "\u2715" : "\u2630");
    }), document.body.appendChild(un);
    const Xt = document.createElement("div");
    Xt.style.cssText = "position:fixed; bottom:20px; right:20px; z-index:10000; display:flex; gap:8px; touch-action:none; cursor:grab;";
    const ba = localStorage.getItem("hk_float_pos");
    if (ba) try {
      const { x: t, y: o } = JSON.parse(ba);
      Xt.style.left = t + "px", Xt.style.top = o + "px", Xt.style.right = "auto", Xt.style.bottom = "auto";
    } catch {
    }
    let En = false, ha = 0, xa = 0, va = 0, ya = 0;
    const $a = 5;
    let mn = false;
    const Ma = (t, o) => {
      En = true, mn = false, ha = t, xa = o;
      const n = Xt.getBoundingClientRect();
      va = n.left, ya = n.top, Xt.style.cursor = "grabbing";
    }, wa = (t, o) => {
      if (!En) return;
      const n = t - ha, l = o - xa;
      (Math.abs(n) > $a || Math.abs(l) > $a) && (mn = true), mn && (Xt.style.left = va + n + "px", Xt.style.top = ya + l + "px", Xt.style.right = "auto", Xt.style.bottom = "auto");
    }, Ea = () => {
      if (En = false, Xt.style.cursor = "grab", mn) {
        const t = Xt.getBoundingClientRect();
        localStorage.setItem("hk_float_pos", JSON.stringify({
          x: t.left,
          y: t.top
        }));
      }
    };
    Xt.addEventListener("mousedown", (t) => {
      Ma(t.clientX, t.clientY), t.preventDefault();
    }), document.addEventListener("mousemove", (t) => wa(t.clientX, t.clientY)), document.addEventListener("mouseup", () => Ea()), Xt.addEventListener("touchstart", (t) => {
      const o = t.touches[0];
      Ma(o.clientX, o.clientY);
    }, {
      passive: true
    }), document.addEventListener("touchmove", (t) => {
      if (En) {
        const o = t.touches[0];
        wa(o.clientX, o.clientY);
      }
    }), document.addEventListener("touchend", () => Ea());
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
      mn || (document.fullscreenElement ? document.exitFullscreen().catch(() => {
      }) : document.documentElement.requestFullscreen().catch(() => {
      }));
    }), Xt.appendChild(Mo), Xt.appendChild(Ql()), document.body.appendChild(Xt);
    const Sa = document.createElement("span");
    return Sa.style.display = "none", Sa;
  };
});
export {
  __tla,
  Fa as a,
  Bl as c,
  zi as g
};
