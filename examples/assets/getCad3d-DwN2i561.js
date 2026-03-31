const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./calcPanel-BcV0bfdm.js","./getMesh-B1dmlgUt.js","./__vite-browser-external-D7Ct-6yo.js","./pureFunctionsAny.generated-JAcEVsJ7.js","./analyze-ClLKGn9k.js","./didacticCpp-BGUxSkhs.js","./tutorialPanel-D12tw4H_.js","./i18n-B_HPMgm2.js","./cyclicPushoverCpp-Xwxa7wee.js"])))=>i.map(i=>d[i]);
import { d as Ft, _ as cs, p as ds, m as ml, s as gl, __tla as __tla_0 } from "./didacticCpp-BGUxSkhs.js";
import { v as on, P as mn, g as bl, a as hl, o as xl } from "./theme-CzzIlc4y.js";
import { G as bn, b as vl, M as ya, D as $a, B as co, c as Cn, d as yl, C as $l, e as Ta, V as qe, P as Po, R as Ma, f as wa, g as Qo, h as en, i as Ml, S as wl, j as El, F as Do, a as tn, L as Bo, k as Sl, l as Il, A as En, T as ps, m as Sn, n as In, o as kl, p as Tl } from "./Text-CBH-tcJP.js";
import { g as Fn, b as Pn, a as Eo } from "./analyze-ClLKGn9k.js";
import { g as Io, __tla as __tla_1 } from "./getMesh-B1dmlgUt.js";
import { t as A, s as zl, u as Al } from "./i18n-B_HPMgm2.js";
import { n as Wo, s as ko, m as uo, t as xs } from "./pureFunctionsAny.generated-JAcEVsJ7.js";
let ka, Pl, Mr;
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
    const N = hs.find((G) => G.id === e), w = nn.find((G) => G.id === b), U = N.toKN, j = w.toM, Z = (G, he, T) => T / (Math.pow(U, G) * Math.pow(j, he));
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
      stress: Ll(e, b),
      moment: `${N.label}\xB7${w.label}`,
      E: Z(1, -2, Ho.E),
      G: Z(1, -2, Ho.G),
      A: Z(0, 2, Ho.A),
      Iz: Z(0, 4, Ho.Iz),
      Iy: Z(0, 4, Ho.Iy),
      J: Z(0, 4, Ho.J),
      rho: Z(1, -4, Ho.rho),
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
          val: e.defaultForce * 5,
          min: 0.1,
          max: e.forceRange[1] * 100,
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
    const b = e.force, [N, w, U] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: N,
          max: 0,
          step: U,
          label: `${A("CM")} (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: N,
          max: 0,
          step: U,
          label: `${A("CV")} (${b})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: N,
          max: 0,
          step: U,
          label: `${A("CM")} (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: N,
          max: 0,
          step: U,
          label: `${A("CV")} (${b})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: N,
          max: w,
          step: U,
          label: `${A("Ex sismo")} (${b})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: N,
          max: 0,
          step: U,
          label: `${A("CM")} (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: N,
          max: 0,
          step: U,
          label: `${A("CV")} (${b})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: N,
          max: w,
          step: U,
          label: `${A("Ex sismo")} (${b})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: N,
          max: 0,
          step: U,
          label: `${A("CM")} (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: N,
          max: 0,
          step: U,
          label: `${A("CV")} (${b})`
        },
        {
          key: "Ex",
          val: 0,
          min: N,
          max: w,
          step: U,
          label: `${A("Ex sismo")} (${b})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: N,
          max: 0,
          step: U,
          label: `${A("CM")} (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: N,
          max: 0,
          step: U,
          label: `${A("CV")} (${b})`
        },
        {
          key: "Ex",
          val: 0,
          min: N,
          max: w,
          step: U,
          label: `${A("Ex sismo")} (${b})`
        },
        {
          key: "Ey",
          val: 0,
          min: N,
          max: w,
          step: U,
          label: `${A("Ey sismo")} (${b})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: N,
          max: 0,
          step: U,
          label: `${A("CM")} (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: N,
          max: 0,
          step: U,
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
          min: N,
          max: 0,
          step: U,
          label: `${A("CM")} (${b})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: N,
          max: 0,
          step: U,
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
    function N(w, U) {
      var _a, _b;
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
        var _a2;
        const T = G > 0 ? 1 / G : 0, J = G * 2 * Math.PI, $e = ((_a2 = w.massParticipation) == null ? void 0 : _a2[he]) || [
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
  <td style="padding:2px 6px; text-align:right">${G.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${T.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${J.toFixed(2)}</td>`;
        for (let fe = 0; fe < 6; fe++) {
          const ie = ($e[fe] * 100).toFixed(1), ne = $e[fe] > 0.5 ? "#f00" : $e[fe] > 0.1 ? "#ff0" : "#0f0";
          V += `<td style="padding:2px 5px; text-align:right; color:${ne}">${ie}%</td>`;
        }
        V += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(Z[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(Z[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(Z[5] * 100).toFixed(1)}%</td></tr>`;
      }), V += "</table></div>", e.innerHTML = V, b) {
        const G = e.querySelector("#modal-body"), he = e.querySelector("#modal-minimize");
        G && (G.style.display = "none"), he && (he.textContent = "\u25A2", he.title = "Restaurar");
      }
      (_a = e.querySelector("#modal-minimize")) == null ? void 0 : _a.addEventListener("click", () => {
        b = !b;
        const G = e.querySelector("#modal-body"), he = e.querySelector("#modal-minimize");
        b ? (G.style.display = "none", he.textContent = "\u25A2", he.title = "Restaurar") : (G.style.display = "block", he.textContent = "\u25AC", he.title = "Minimizar");
      });
      const W = e.querySelector("#modal-header");
      if (W) {
        let G = false, he = 0, T = 0, J = 0, $e = 0;
        W.addEventListener("mousedown", (fe) => {
          if (fe.target.tagName === "BUTTON") return;
          G = true, he = fe.clientX, T = fe.clientY;
          const ie = e.getBoundingClientRect();
          J = ie.left, $e = ie.top, fe.preventDefault();
        }), document.addEventListener("mousemove", (fe) => {
          if (!G) return;
          const ie = fe.clientX - he, ne = fe.clientY - T;
          e.style.left = J + ie + "px", e.style.top = $e + ne + "px", e.style.bottom = "auto", e.style.right = "auto";
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
        w.frequencies.forEach(($e, fe) => {
          var _a2;
          const ie = $e > 0 ? 1 / $e : 0, ne = $e * 2 * Math.PI, D = ((_a2 = w.massParticipation) == null ? void 0 : _a2[fe]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let Y = 0; Y < 6; Y++) T[Y] += D[Y];
          const B = D.map((Y) => ((Y * 100).toFixed(1) + "%").padStart(6)).join(" ");
          G.push(`${String(fe + 1).padStart(4)}  ${$e.toFixed(4).padStart(9)}  ${ie.toFixed(4).padStart(9)}  ${ne.toFixed(2).padStart(9)}  ${B}  ${(T[0] * 100).toFixed(1).padStart(5)}%  ${(T[1] * 100).toFixed(1).padStart(5)}%  ${(T[5] * 100).toFixed(1).padStart(5)}%`);
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
    return Ro.forEach((b, N) => {
      b.type === "W" && (e[b.name] = N);
    }), e;
  }
  function zn() {
    const e = {};
    return Ro.forEach((b, N) => {
      b.type === "HSS" && (e[b.name] = N);
    }), e;
  }
  function Rl(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: b, elements: N, elementInputs: w, nodeInputs: U, deformOutputs: j } = e, Z = b.length * 6, V = N.length, W = N.filter((ie) => ie.length === 2).length, G = N.filter((ie) => ie.length >= 3).length, he = document.createElement("div");
    he.className = "rpt-overlay";
    let T = "";
    T += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', T += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", T += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', T += '<hr class="rpt-sep"/>', T += "<h2>1. Input Data</h2>", T += '<table class="rpt-info"><tbody>', T += `<tr><td>Number of nodes</td><td class="val">${b.length}</td></tr>`, T += `<tr><td>Number of elements</td><td class="val">${V} (${W} frames, ${G} shells)</td></tr>`, T += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', T += `<tr><td>Total DOFs</td><td class="val">${Z}</td></tr>`, T += "</tbody></table>", T += "<h3>1.1 Node Coordinates</h3>", T += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', b.forEach((ie, ne) => {
      T += `<tr><td>${ne}</td><td>${it(ie[0])}</td><td>${it(ie[1])}</td><td>${it(ie[2])}</td></tr>`;
    }), T += "</tbody></table>", T += "<h3>1.2 Element Connectivity</h3>", T += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', N.forEach((ie, ne) => {
      var _a2, _b2, _c2, _d2;
      const D = ie.length === 2, B = ie.map((ye) => b[ye]), Y = D ? Wo(ko(B[1], B[0])) : 0, ue = ((_a2 = w.elasticities) == null ? void 0 : _a2.get(ne)) ?? 0, Me = ((_b2 = w.areas) == null ? void 0 : _b2.get(ne)) ?? 0, Ae = ((_c2 = w.momentsOfInertiaZ) == null ? void 0 : _c2.get(ne)) ?? 0, Ke = ((_d2 = w.momentsOfInertiaY) == null ? void 0 : _d2.get(ne)) ?? 0;
      T += `<tr><td>${ne}</td><td>${D ? "Frame" : "Shell"}</td><td>${ie.join(" \u2192 ")}</td>`, T += `<td>${it(Y)}</td><td>${it(ue)}</td><td>${it(Me)}</td><td>${it(Ae)}</td><td>${it(Ke)}</td></tr>`;
    }), T += "</tbody></table>", T += "<h2>2. Element Formulation</h2>", W > 0 && (T += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", T += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", T += "<h4>2.1.1 Shape Functions</h4>", T += "<p><b>Axial</b> (linear interpolation):</p>", T += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', T += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", T += '<table class="rpt-eq-table"><tbody>', T += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', T += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', T += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', T += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', T += "</tbody></table>", T += Nl(), T += "<p><b>Torsion</b> (linear): same as axial.</p>", T += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", T += "<p>The B matrix relates nodal displacements to internal strains:</p>", T += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', T += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', T += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', T += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', T += "<h4>2.1.3 Constitutive Relations D</h4>", T += '<table class="rpt-eq-table"><tbody>', T += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', T += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', T += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', T += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', T += "</tbody></table>", T += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", T += "<p>Obtained by analytical integration:</p>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', T += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", T += '<div class="rpt-eq-small">', T += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", T += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", T += "</div>", T += "<h4>2.1.5 Transformation Matrix T</h4>", T += "<p>Direction cosines of element axis:</p>", T += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', T += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', T += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', T += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", T += "<h4>2.1.6 Global Stiffness Matrix</h4>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), T += "<h2>3. Numerical Results per Element</h2>", T += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let ie = 0; ie < V; ie++) {
      const ne = N[ie], D = ne.map((dt) => b[dt]);
      if (!(ne.length === 2)) continue;
      const Y = Wo(ko(D[1], D[0])), ue = ((_a = w.elasticities) == null ? void 0 : _a.get(ie)) ?? 0, Me = ((_b = w.areas) == null ? void 0 : _b.get(ie)) ?? 0, Ae = ((_c = w.momentsOfInertiaZ) == null ? void 0 : _c.get(ie)) ?? 0, Ke = ((_d = w.momentsOfInertiaY) == null ? void 0 : _d.get(ie)) ?? 0, ye = ((_e = w.shearModuli) == null ? void 0 : _e.get(ie)) ?? 0, Ge = ((_f = w.torsionalConstants) == null ? void 0 : _f.get(ie)) ?? 0;
      let Ye = null, be = null, Te = null;
      try {
        Ye = Fn(D, w, ie), be = Pn(D), Te = uo(xs(be), uo(Ye, be));
      } catch {
        continue;
      }
      const Ce = ko(D[1], D[0]), Xe = Ce[0] / Y, ct = Ce[1] / Y, Ze = Ce[2] / Y;
      T += '<div class="rpt-elem-block">', T += `<h3 class="rpt-elem-title" data-toggle="elem${ie}">\u25B6 Element ${ie} \u2014 Nodes ${ne[0]} \u2192 ${ne[1]}, L = ${it(Y)}</h3>`, T += `<div id="rpt-elem${ie}" class="rpt-elem-body" style="display:none">`, T += "<h4>Properties (numerical substitution)</h4>", T += '<div class="rpt-eq-small">', T += `E = ${it(ue)} &nbsp;&nbsp; A = ${it(Me)} &nbsp;&nbsp; I<sub>z</sub> = ${it(Ae)} &nbsp;&nbsp; I<sub>y</sub> = ${it(Ke)} &nbsp;&nbsp; G = ${it(ye)} &nbsp;&nbsp; J = ${it(Ge)}<br/>`, T += `EA/L = ${it(ue)}\xB7${it(Me)}/${it(Y)} = <b>${it(ue * Me / Y)}</b><br/>`, T += `12EI<sub>z</sub>/L\xB3 = 12\xB7${it(ue)}\xB7${it(Ae)}/${it(Y)}\xB3 = <b>${it(12 * ue * Ae / Y ** 3)}</b><br/>`, T += `12EI<sub>y</sub>/L\xB3 = 12\xB7${it(ue)}\xB7${it(Ke)}/${it(Y)}\xB3 = <b>${it(12 * ue * Ke / Y ** 3)}</b><br/>`, T += `GJ/L = ${it(ye)}\xB7${it(Ge)}/${it(Y)} = <b>${it(ye * Ge / Y)}</b>`, T += "</div>", T += "<h4>Direction cosines</h4>", T += `<div class="rpt-eq-small">l = ${An(Xe)}, m = ${An(ct)}, n = ${An(Ze)}, D = ${An(Math.sqrt(Xe ** 2 + ct ** 2))}</div>`, T += "<h4>K<sub>local</sub> (12\xD712)</h4>", T += fs(Ye, 12), T += "<h4>T \u2014 Transformation (12\xD712)</h4>", T += fs(be, 12), T += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", T += fs(Te, 12), T += "<h4>Assembly</h4>", T += `<div class="rpt-eq-small">Global DOFs: node ${ne[0]} \u2192 [${ne[0] * 6}..${ne[0] * 6 + 5}], node ${ne[1]} \u2192 [${ne[1] * 6}..${ne[1] * 6 + 5}]</div>`, T += "</div></div>";
    }
    T += "<h2>4. Global Assembly</h2>", T += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${V - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, T += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", T += ql(N, b.length), T += "<h2>5. Boundary Conditions</h2>";
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
      for (const ie of J) T += `<th>${ie}</th>`;
      T += "</tr></thead><tbody>", U.supports.forEach((ie, ne) => {
        T += `<tr><td>${ne}</td>`, ie.forEach((D, B) => {
          D && $e.push(ne * 6 + B), T += `<td class="${D ? "fixed" : ""}">${D ? "Fixed" : "Free"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += `<div class="rpt-eq-small">Fixed DOFs: [${$e.join(", ")}] \u2192 ${$e.length} constraints<br/>`, T += `Free DOFs: ${Z} \u2212 ${$e.length} = <b>${Z - $e.length}</b></div>`, T += "<h3>5.2 Applied Loads</h3>", U.loads && U.loads.size > 0) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const ie = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const ne of ie) T += `<th>${ne}</th>`;
      T += "</tr></thead><tbody>", U.loads.forEach((ne, D) => {
        T += `<tr><td>${D}</td>`, ne.forEach((B) => {
          const Y = Math.abs(B) > 1e-10;
          T += `<td class="${Y ? "nz" : ""}">${Y ? it(B) : "0"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h2>6. Solution</h2>", T += "<p>After removing fixed DOFs, the reduced system is:</p>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', T += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", T += "<h3>6.1 Nodal Displacements</h3>", j == null ? void 0 : j.deformations) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ie of J) T += `<th>${ie}</th>`;
      T += "</tr></thead><tbody>", j.deformations.forEach((ie, ne) => {
        T += `<tr><td>${ne}</td>`, ie.forEach((D) => {
          const B = Math.abs(D) > 1e-10;
          T += `<td class="${B ? "nz" : ""}">${it(D, 6)}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h3>6.2 Reactions</h3>", T += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', j == null ? void 0 : j.reactions) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ie of J) T += `<th>${ie}</th>`;
      T += "</tr></thead><tbody>", j.reactions.forEach((ie, ne) => {
        T += `<tr><td>${ne}</td>`, ie.forEach((D) => {
          const B = Math.abs(D) > 1e-10;
          T += `<td class="${B ? "nz-react" : ""}">${B ? it(D, 4) : "0"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h2>7. Internal Forces</h2>", T += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", T += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', T += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', j == null ? void 0 : j.deformations) {
      const ie = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      T += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const ne of ie) T += `<th>${ne}<sub>i</sub></th>`;
      for (const ne of ie) T += `<th>${ne}<sub>j</sub></th>`;
      T += "</tr></thead><tbody>";
      for (let ne = 0; ne < V; ne++) {
        const D = N[ne];
        if (D.length !== 2) continue;
        const B = D.map((Y) => b[Y]);
        try {
          const Y = Fn(B, w, ne), ue = Pn(B), Me = [];
          for (const ye of D) {
            const Ge = ((_g = j.deformations) == null ? void 0 : _g.get(ye)) || [
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
            T += `<td class="${Ge ? "nz" : ""}">${it(Ke[ye], 2)}</td>`;
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
    return he.innerHTML = fe + T, (_h = he.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => he.remove()), he.querySelectorAll("[data-toggle]").forEach((ie) => {
      ie.addEventListener("click", () => {
        const ne = ie.dataset.toggle, D = he.querySelector(`#rpt-${ne}`);
        if (D) {
          const B = D.style.display !== "none";
          D.style.display = B ? "none" : "", ie.textContent = ie.textContent.replace(/^[▼▶]/, B ? "\u25B6" : "\u25BC");
        }
      });
    }), he;
  }
  function it(e, b = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(b) : e.toFixed(b);
  }
  function An(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function fs(e, b) {
    var _a;
    const N = Math.min(b, 12);
    let w = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let U = 0; U < N; U++) {
      w += "<tr>";
      for (let j = 0; j < N; j++) {
        const Z = ((_a = e[U]) == null ? void 0 : _a[j]) ?? 0, V = Math.abs(Z) < 1e-10;
        w += `<td class="${V ? "z" : ""} ${U === j && !V ? "diag" : ""}">${V ? "0" : Ol(Z)}</td>`;
      }
      w += "</tr>";
    }
    return w += "</table>", b > N && (w += `<div style="color:#888;font-size:9pt">(showing ${N}\xD7${N} of ${b}\xD7${b})</div>`), w += "</div>", w;
  }
  function Ol(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function Nl() {
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
        const fe = $e / 80, ie = 30 + fe * 540, ne = 180 / 2 - W.fn(fe) * 60;
        G += ($e === 0 ? "M" : "L") + `${ie.toFixed(1)},${ne.toFixed(1)}`;
      }
      V += `<path d="${G}" fill="none" stroke="${W.color}" stroke-width="2.5"/>`;
      const he = 0.75, T = 30 + he * 540 + 8, J = 180 / 2 - W.fn(he) * 60 - 6;
      V += `<text x="${T}" y="${J}" fill="${W.color}" font-size="11" font-weight="bold" font-family="sans-serif">${W.name}</text>`;
    }
    return V += "</svg>", V;
  }
  function ql(e, b) {
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
  let us = false;
  function _l(e) {
    if (us || window.katex) {
      us = true, e();
      return;
    }
    const b = document.createElement("link");
    b.rel = "stylesheet", b.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(b);
    const N = document.createElement("script");
    N.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", N.onload = () => {
      us = true, e();
    }, document.head.appendChild(N);
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
  function Dl(e, b, N, w, U, j) {
    var _a, _b, _c, _d, _e, _f;
    const Z = N[e], V = Z.map((be) => b[be]), W = Z.length === 2, G = W ? Wo(ko(V[1], V[0])) : 0, he = ((_a = w.elasticities) == null ? void 0 : _a.get(e)) ?? 0, T = ((_b = w.areas) == null ? void 0 : _b.get(e)) ?? 0, J = ((_c = w.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, $e = ((_d = w.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, fe = ((_e = w.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, ie = ((_f = w.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let ne = null, D = null, B = null;
    try {
      ne = Fn(V, w, e), D = Pn(V), B = uo(xs(D), uo(ne, D));
    } catch {
    }
    const Y = W ? ko(V[1], V[0]) : [
      0,
      0,
      0
    ], ue = G > 0 ? Y[0] / G : 0, Me = G > 0 ? Y[1] / G : 0, Ae = G > 0 ? Y[2] / G : 0, Ke = Math.sqrt(ue ** 2 + Me ** 2), ye = [];
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
      isFrame: W,
      L: G,
      E: he,
      A: T,
      Iz: J,
      Iy: $e,
      G: fe,
      J: ie,
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
      dOut: U,
      aOut: j,
      totalNodes: b.length
    };
  }
  function Bl(e, b, N, w, U, j) {
    var _a, _b;
    const Z = Dl(e, b, N, w, U, j), V = document.createElement("div");
    return V.className = "er-panel", V.innerHTML = Gl + `
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
    <div class="er-body" id="er-body-tabla">${Hl(Z)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${Sa(Z)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${jl(Z)}</div>
  `, V.querySelectorAll(".er-tab").forEach((W) => {
      W.addEventListener("click", () => {
        V.querySelectorAll(".er-tab").forEach((he) => he.classList.remove("active")), W.classList.add("active");
        const G = W.dataset.tab;
        V.querySelectorAll(".er-body").forEach((he) => he.style.display = "none"), V.querySelector(`#er-body-${G}`).style.display = "";
      });
    }), (_a = V.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => V.remove()), (_b = V.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const W = V.classList.toggle("er-fullscreen-mode"), G = V.querySelector("#er-fullscreen");
      G && (G.textContent = W ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const W = V.querySelector("#er-sf-canvas");
      W && ms(W);
      const G = V.querySelector("#er-sf-canvas-math");
      G && ms(G);
    }, 50), _l(() => {
      const W = V.querySelector("#er-body-math");
      W && (W.innerHTML = Sa(Z)), setTimeout(() => {
        const G = V.querySelector("#er-sf-canvas-math");
        G && ms(G);
      }, 50), V.querySelectorAll(".er-deriv-header").forEach((G) => {
        G.addEventListener("click", () => {
          const he = G.dataset.toggle, T = V.querySelector(`#er-${he}`);
          T && (T.style.display = T.style.display === "none" ? "" : "none");
        });
      });
    }), V;
  }
  function Hl(e) {
    let b = "";
    if (b += '<div class="er-section-title">1. Propiedades</div>', b += '<table class="er-props">', b += `<tr><td>E</td><td>${Ue(e.E)}</td><td>A</td><td>${Ue(e.A)}</td></tr>`, b += `<tr><td>I<sub>z</sub></td><td>${Ue(e.Iz)}</td><td>I<sub>y</sub></td><td>${Ue(e.Iy)}</td></tr>`, b += `<tr><td>G</td><td>${Ue(e.G)}</td><td>J</td><td>${Ue(e.J)}</td></tr>`, b += "</table>", e.kLocal && (b += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, b += hn(e.kLocal)), e.T && (b += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', b += hn(e.T)), e.kGlobal && (b += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', b += hn(e.kGlobal)), b += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
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
  function Sa(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let b = "";
    const N = (he) => Ea(he), w = (he) => Ea(he, true);
    b += '<div class="er-section-title">1. Geometria del elemento</div>', b += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", b += `<div class="er-eq">${w("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, b += '<div class="er-eq-num">', b += `${N("\\text{Nodo } i")} = (${e.elmNodes[0].map((he) => Ue(he)).join(", ")})<br/>`, b += `${N("\\text{Nodo } j")} = (${e.elmNodes[1].map((he) => Ue(he)).join(", ")})<br/>`, b += `${w(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Ue(e.L)}}`)}`, b += "</div>", b += '<div class="er-section-title">2. Funciones de forma</div>', b += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", b += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', b += `<div class="er-eq">${w("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, b += "<p>Primera derivada:</p>", b += `<div class="er-eq">${w("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, b += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', b += `<p>Las funciones de Hermite garantizan continuidad ${N("C^1")} (desplazamiento y pendiente continuos):</p>`, b += `<div class="er-eq">${w("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, b += `<div class="er-eq">${w("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, b += `<div class="er-eq">${w("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, b += `<div class="er-eq">${w("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, b += `<div class="er-subsec">Derivadas segunda (curvatura ${N("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, b += `<div class="er-eq">${w("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, b += `<div class="er-eq">${w("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, b += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', b += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', b += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", b += `<div class="er-eq">${w("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, b += '<div class="er-subsec">3.1 Deformacion axial</div>', b += `<div class="er-eq">${w("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, b += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${N("I_z")})</div>`, b += `<div class="er-eq">${w("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, b += `<div class="er-eq">${w("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, b += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${N("I_y")})</div>`, b += `<div class="er-eq">${w("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, b += '<div class="er-subsec">3.4 Torsion</div>', b += `<div class="er-eq">${w("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, b += '<div class="er-section-title">4. Relaciones constitutivas D</div>', b += "<p>Cada modo de deformacion tiene su rigidez material:</p>", b += `<div class="er-eq">${w(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Ue(e.E)} \\times ${Ue(e.A)} = \\mathbf{${Ue(e.E * e.A)}}`)}</div>`, b += `<div class="er-eq">${w(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Ue(e.E)} \\times ${Ue(e.Iz)} = \\mathbf{${Ue(e.E * e.Iz)}}`)}</div>`, b += `<div class="er-eq">${w(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Ue(e.E)} \\times ${Ue(e.Iy)} = \\mathbf{${Ue(e.E * e.Iy)}}`)}</div>`, b += `<div class="er-eq">${w(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Ue(e.G)} \\times ${Ue(e.J)} = \\mathbf{${Ue(e.G * e.J)}}`)}</div>`, b += `<div class="er-section-title">5. Integracion \u2192 ${N("\\mathbf{K}_{local}")}</div>`, b += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", b += `<div class="er-eq er-eq-main">${w("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const U = e.E * e.A / e.L, j = e.E * e.Iz / e.L ** 3, Z = e.E * e.Iy / e.L ** 3, V = e.G * e.J / e.L;
    if (b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', b += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', b += "<p><b>Paso 1:</b> Funcion de forma axial</p>", b += `<div class="er-eq">${w("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, b += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", b += `<div class="er-eq">${w("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, b += `<div class="er-eq">${w("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, b += `<p><b>Paso 3:</b> Integracion ${N("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, b += `<div class="er-eq">${w("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, b += `<div class="er-eq">${w("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, b += `<div class="er-eq er-eq-main">${w(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ue(e.E)}\\times${Ue(e.A)}}{${Ue(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, b += `<div class="er-eq">${w(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Ue(U)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', b += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', b += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${N("v(\\xi)")}</p>`, b += `<div class="er-eq">${w("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, b += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", b += `<div class="er-eq">${w("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, b += `<div class="er-eq">${w("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, b += `<div class="er-eq">${w("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, b += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${N("v_i \\cdot v_i")})</p>`, b += `<div class="er-eq">${w("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, b += `<p>Expandimos: ${N("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, b += `<div class="er-eq">${w("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, b += `<div class="er-eq er-eq-main">${w(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Ue(e.E)} \\times ${Ue(e.Iz)}}{${Ue(e.L)}^3} = \\mathbf{${Ue(12 * j)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', b += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', b += `<p>Mismo proceso que axial pero con ${N("\\theta_x")} y ${N("GJ")}:</p>`, b += `<div class="er-eq">${w(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ue(e.G)}\\times${Ue(e.J)}}{${Ue(e.L)}} = \\mathbf{${Ue(V)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', b += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', b += `<p>Termino cruzado ${N("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, b += `<div class="er-eq">${w("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, b += `<div class="er-eq">${w("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, b += `<div class="er-eq">${w("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, b += `<div class="er-eq er-eq-main">${w(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Ue(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, b += "</div></div>", b += '<div class="er-subsec">Resumen de coeficientes:</div>', b += `<div class="er-eq">${w(`\\frac{EA}{L} = \\mathbf{${Ue(U)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Ue(12 * j)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Ue(12 * Z)}}`)}</div>`, b += `<div class="er-eq">${w(`\\frac{GJ}{L} = \\mathbf{${Ue(V)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Ue(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Ue(4 * e.E * e.Iz / e.L)}}`)}</div>`, b += `<div class="er-eq">${w(`\\frac{6EI_z}{L^2} = \\mathbf{${Ue(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Ue(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (b += `<div class="er-subsec">Resultado: ${N("\\mathbf{K}_{local}")} (12x12)</div>`, b += hn(e.kLocal)), b += '<div class="er-section-title">6. Transformacion de coordenadas</div>', b += "<p>Los cosenos directores del eje del elemento:</p>", b += `<div class="er-eq">${w(`l = \\frac{x_j - x_i}{L} = ${Ln(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${Ln(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${Ln(e.n)}`)}</div>`, b += `<div class="er-eq">${w(`D = \\sqrt{l^2 + m^2} = ${Ln(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      b += `<p>Caso especial: elemento vertical (${N(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const he = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      b += `<div class="er-eq">${w(he)}</div>`;
    } else b += `<div class="er-eq">${w("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    b += `<div class="er-eq er-eq-main">${w("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, b += `<div class="er-section-title">7. ${N("\\mathbf{K}_{global}")} = ${N("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, b += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", b += `<div class="er-eq er-eq-main">${w("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (b += hn(e.kGlobal)), b += '<div class="er-section-title">8. Ensamblaje</div>';
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
  function jl(e) {
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
  function Ln(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function hn(e) {
    var _a;
    const b = e.length, N = Math.min(b, 12);
    let w = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let U = 0; U < N; U++) {
      w += "<tr>";
      for (let j = 0; j < N; j++) {
        const Z = ((_a = e[U]) == null ? void 0 : _a[j]) ?? 0, V = Math.abs(Z) < 1e-10;
        w += `<td class="${V ? "z" : ""} ${U === j && !V ? "diag" : ""}">${V ? "0" : Wl(Z)}</td>`;
      }
      w += "</tr>";
    }
    return w += "</table>", b > N && (w += `<div style="color:var(--fem-label);font-size:9px">(${N}\xD7${N} de ${b}\xD7${b})</div>`), w += "</div>", w;
  }
  function Wl(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function ms(e) {
    const b = e.getContext("2d");
    if (!b) return;
    const N = e.width, w = e.height, U = 30, j = N - 2 * U, Z = (w - 3 * U) / 2;
    b.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", b.fillRect(0, 0, N, w);
    const V = (W, G, he) => {
      b.strokeStyle = "#333", b.lineWidth = 1, b.strokeRect(U, W, j, Z), b.strokeStyle = "#444", b.beginPath(), b.moveTo(U, W + Z / 2), b.lineTo(U + j, W + Z / 2), b.stroke(), b.fillStyle = "#888", b.font = "11px sans-serif", b.fillText(G, U + 4, W + 14);
      for (const J of he) {
        b.strokeStyle = J.color, b.lineWidth = 2.5, b.beginPath();
        for (let $e = 0; $e <= 100; $e++) {
          const fe = $e / 100, ie = U + fe * j, ne = W + Z / 2 - J.fn(fe) * (Z / 2 * 0.85);
          $e === 0 ? b.moveTo(ie, ne) : b.lineTo(ie, ne);
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
    const b = (w) => {
      Ot.style.cssText = w ? "width:20px;height:20px;border-radius:50%;background:#555;color:#aaa;border:1px solid #777;font-size:10px;cursor:pointer;opacity:0.5;transition:all 0.2s;" : "width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:2px solid rgba(255,255,255,0.3);font-size:18px;font-weight:bold;cursor:pointer;box-shadow:0 2px 10px rgba(0,102,204,0.3);transition:all 0.2s;font-family:'Arial Nova',sans-serif;";
    };
    b(false), Ot.addEventListener("contextmenu", (w) => {
      w.preventDefault(), e = !e, b(e), Ot.innerHTML = "?";
    }), Ot.addEventListener("mouseenter", () => {
      Ot.style.transform = "scale(1.15)", Ot.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), Ot.addEventListener("mouseleave", () => {
      Ot.style.transform = "scale(1)", Ot.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), Ot.addEventListener("click", () => {
      On ? vs() : Jl();
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
  `, document.head.appendChild(N), Ot;
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
    const b = gn[e], N = document.querySelector(b.selector);
    if (!N) {
      sn(e + 1);
      return;
    }
    N.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), bo && bo.remove(), Yt && Yt.remove();
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
    let $e, fe, ie = "";
    switch (J) {
      case "bottom":
        $e = w.left + w.width / 2 - Z / 2, fe = w.bottom + 14, ie = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        $e = w.left + w.width / 2 - Z / 2, fe = w.top - V - 14, ie = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        $e = w.right + 14, fe = w.top + w.height / 2 - V / 2, ie = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        $e = w.left - Z - 14, fe = w.top + w.height / 2 - V / 2, ie = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    $e = Math.max(10, Math.min($e, U - Z - 10)), fe = Math.max(10, Math.min(fe, j - V - 10)), Yt = document.createElement("div"), Yt.style.cssText = `
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
    <div style="${ie}"></div>
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
  function Ul(e) {
    var _a;
    const b = e.split(/\r?\n/), N = {
      force: "TONF",
      length: "M"
    }, w = [], U = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), V = [], W = [], G = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), T = [], J = [];
    let $e = "", fe = "";
    const ie = /* @__PURE__ */ new Map();
    for (const Pe of b) {
      const De = Pe.trim();
      if (!De || De.startsWith("$")) {
        De.startsWith("$ ") && (fe = De.substring(2).trim());
        continue;
      }
      if (fe && (ie.has(fe) || ie.set(fe, []), ie.get(fe).push(Pe)), fe === "CONTROLS") {
        const xe = De.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        xe && (N.force = xe[1], N.length = xe[2]);
        const Fe = De.match(/TITLE2\s+"([^"]+)"/);
        Fe && ($e = Fe[1]);
      }
      if (fe === "STORIES - IN SEQUENCE FROM TOP") {
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
      if (fe === "MATERIAL PROPERTIES") {
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
        xe && G.set(`${xe[1]}@${xe[2]}`, xe[3].split(/\s+/));
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
      const Pe = w.length - 1;
      ne.set(w[Pe].name, w[Pe].elev);
      for (let De = Pe - 1; De >= 0; De--) {
        const Fe = ne.get(w[De + 1].name) + w[De].height;
        w[De].elev = Fe, ne.set(w[De].name, Fe);
      }
    }
    const D = [], B = [], Y = /* @__PURE__ */ new Map(), ue = (Pe, De) => `${Pe}@${De}`, Me = /* @__PURE__ */ new Set(), Ae = /* @__PURE__ */ new Map();
    for (const Pe of V) Ae.set(Pe.name, Pe);
    for (const Pe of V) for (const [De, xe] of he) {
      if (!De.startsWith(Pe.name + "@")) continue;
      const Fe = xe.story, ve = w.findIndex((ze) => ze.name === Fe);
      if (!(ve < 0)) if (Pe.type === "COLUMN" || Pe.type === "BRACE") {
        Me.add(ue(Pe.pt2, Fe));
        const ze = Math.max(Pe.nStories, 1), Ve = Math.min(ve + ze, w.length - 1);
        Me.add(ue(Pe.pt1, w[Ve].name));
      } else Me.add(ue(Pe.pt1, Fe)), Me.add(ue(Pe.pt2, Fe));
    }
    for (const [Pe] of G) Me.add(Pe);
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
      const Fe = xe.story, ve = w.findIndex((Je) => Je.name === Fe);
      if (ve < 0) continue;
      let ze, Ve;
      if (Pe.type === "COLUMN" || Pe.type === "BRACE") {
        const Je = Math.max(Pe.nStories, 1), Qe = Math.min(ve + Je, w.length - 1);
        ze = ue(Pe.pt1, w[Qe].name), Ve = ue(Pe.pt2, Fe);
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
    const Te = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), Xe = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), Ze = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map();
    for (const [Pe, De] of be) {
      const xe = j.get(De);
      if (!xe) continue;
      const Fe = U.get(xe.material);
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
      xe.modI2 && (Je *= xe.modI2), xe.modI3 && (ht *= xe.modI3), Xe.set(Pe, ft), Tt.set(Pe, ht), Nt.set(Pe, Je), Bt.set(Pe, Qe), mt > 0 && ct.set(Pe, mt), pt > 0 && Ze.set(Pe, pt), Mt.set(Pe, {
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
    for (const [Pe, De] of G) {
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
      const xe = j.get(De);
      if (!xe) continue;
      const Fe = U.get(xe.material);
      (Fe == null ? void 0 : Fe.density) && St.set(Pe, Fe.density);
    }
    return {
      units: N,
      stories: w.reverse(),
      materials: U,
      frameSections: j,
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
        areas: Xe,
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
        nAreas: W.length,
        title: $e
      },
      rawSections: ie
    };
  }
  function rt(e) {
    return e && parseFloat(e) || 0;
  }
  function za(e) {
    const b = /* @__PURE__ */ new Map(), N = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
    let w;
    for (; (w = N.exec(e)) !== null; ) b.set(w[1], w[2] !== void 0 ? w[2] : w[3]);
    return b;
  }
  function Xl(e) {
    const b = e.split(/\r?\n/);
    return b.some((w) => w.trim().startsWith("TABLE:")) ? Kl(b) : Zl(b);
  }
  function Kl(e) {
    var _a, _b, _c, _d, _e, _f;
    const b = [];
    let N = "";
    for (const ne of e) {
      const D = ne.trimEnd();
      D.endsWith("_") ? N += D.slice(0, -1) + " " : (N += D, b.push(N), N = "");
    }
    N && b.push(N);
    const w = {
      force: "KN",
      length: "m"
    };
    let U = "UX,UY,UZ,RX,RY,RZ";
    const j = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), G = [], he = [], T = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map(), fe = [];
    let ie = "";
    for (const ne of b) {
      const D = ne.trim();
      if (!D || D.startsWith(";") || D.startsWith("File ")) continue;
      if (D.startsWith("TABLE:")) {
        const Y = D.match(/TABLE:\s+"(.+?)"/);
        ie = Y ? Y[1].toUpperCase() : "";
        continue;
      }
      if (D === "END TABLE DATA") {
        ie = "";
        continue;
      }
      const B = za(D);
      switch (ie) {
        case "PROGRAM CONTROL": {
          const Y = B.get("CurrUnits");
          if (Y) {
            const ue = Y.split(",").map((Me) => Me.trim());
            ue[0] && (w.force = ue[0]), ue[1] && (w.length = ue[1]);
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
            const ue = j.get(Y) || {
              E: 0,
              nu: 0,
              G: 0
            };
            ue.E = rt(B.get("E1")), ue.G = rt(B.get("G12")), ue.nu = rt(B.get("U12")), ue.density = rt(B.get("UnitMass")), j.set(Y, ue);
          }
          break;
        }
        case "MATERIAL PROPERTIES 03A - STEEL DATA": {
          const Y = B.get("Material");
          Y && j.has(Y) && (j.get(Y).fy = rt(B.get("Fy")));
          break;
        }
        case "FRAME SECTION PROPERTIES 01 - GENERAL": {
          const Y = B.get("SectionName");
          Y && Z.set(Y, {
            material: B.get("Material") || "",
            shape: B.get("Shape") || "Rectangular",
            D: rt(B.get("t3")),
            B: rt(B.get("t2")),
            TF: rt(B.get("tf")),
            TW: rt(B.get("tw")),
            A: rt(B.get("Area")),
            Iz: rt(B.get("I33")),
            Iy: rt(B.get("I22")),
            J: rt(B.get("TorsConst"))
          });
          break;
        }
        case "AREA SECTION PROPERTIES": {
          const Y = B.get("Section");
          Y && V.set(Y, {
            material: B.get("Material") || "",
            type: B.get("Type") || "Shell",
            thickness: rt(B.get("Thickness"))
          });
          break;
        }
        case "JOINT COORDINATES": {
          const Y = B.get("Joint");
          if (Y) {
            const ue = rt(B.get("XorR")), Me = rt(B.get("Y")), Ae = rt(B.get("Z"));
            W.set(Y, [
              ue,
              Me,
              Ae
            ]);
          }
          break;
        }
        case "CONNECTIVITY - FRAME": {
          const Y = B.get("Frame"), ue = B.get("JointI"), Me = B.get("JointJ");
          Y && ue && Me && G.push({
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
            fx: rt(B.get("F1")),
            fy: rt(B.get("F2")),
            fz: rt(B.get("F3")),
            mx: rt(B.get("M1")),
            my: rt(B.get("M2")),
            mz: rt(B.get("M3"))
          });
          break;
        }
      }
    }
    return Aa(w, U, j, Z, V, W, G, he, T, J, $e, fe);
  }
  function Zl(e) {
    const b = {
      force: "KN",
      length: "m"
    };
    let N = "UX,UY,UZ,RX,RY,RZ";
    const w = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), V = [], W = [], G = /* @__PURE__ */ new Map(), he = [];
    let T = "", J = "";
    for (const ie of e) {
      const ne = ie.trim();
      if (!ne || ne.startsWith(";")) continue;
      if (!ie.startsWith(" ") && !ie.startsWith("	")) {
        const Y = ne.toUpperCase();
        if (Y === "END") break;
        Y.startsWith("SHELL SECTION") ? T = "SHELL SECTION" : Y.startsWith("FRAME SECTION") ? T = "FRAME SECTION" : T = Y.split(/\s+/)[0];
        continue;
      }
      const D = za(ne), B = ne.split(/\s+/);
      switch (T) {
        case "SYSTEM": {
          const Y = D.get("DOF");
          Y && (N = Y);
          const ue = D.get("LENGTH");
          ue && (b.length = ue);
          const Me = D.get("FORCE");
          Me && (b.force = Me);
          break;
        }
        case "JOINT": {
          const Y = B[0];
          Z.set(Y, [
            rt(D.get("X")),
            rt(D.get("Y")),
            rt(D.get("Z"))
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
            G.set(Y, Ae);
          }
          break;
        }
        case "MATERIAL": {
          const Y = D.get("NAME");
          if (Y) J = Y, w.set(Y, {
            E: 0,
            nu: 0,
            G: 0
          });
          else if (J) {
            const ue = w.get(J), Me = D.get("E");
            Me && (ue.E = rt(Me));
            const Ae = D.get("U");
            Ae && (ue.nu = rt(Ae)), ue.G = ue.E / (2 * (1 + ue.nu));
            const Ke = D.get("M");
            Ke && (ue.density = rt(Ke));
          }
          break;
        }
        case "SHELL": {
          const Y = B[0], ue = D.get("J");
          D.get("SEC"), ue && W.push({
            name: Y,
            joints: ue.split(",")
          });
          break;
        }
        case "SHELL SECTION": {
          const Y = D.get("NAME");
          Y && j.set(Y, {
            material: D.get("MAT") || "",
            type: D.get("TYPE") || "Shell",
            thickness: rt(D.get("TH"))
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
            fx: rt(D.get("UX")),
            fy: rt(D.get("UY")),
            fz: rt(D.get("UZ")),
            mx: rt(D.get("MX")),
            my: rt(D.get("MY")),
            mz: rt(D.get("MZ"))
          });
          break;
        }
      }
    }
    return Aa(b, N, w, U, j, Z, V, W, G, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), he);
  }
  function Aa(e, b, N, w, U, j, Z, V, W, G, he, T) {
    var _a;
    const J = [], $e = /* @__PURE__ */ new Map(), fe = [];
    for (const [ye, Ge] of j) $e.set(ye, fe.length), J.push(ye), fe.push(Ge);
    const ie = [], ne = [], D = /* @__PURE__ */ new Map();
    for (const ye of Z) {
      const Ge = $e.get(ye.j1), Ye = $e.get(ye.j2);
      if (Ge !== void 0 && Ye !== void 0) {
        const be = ie.length;
        ie.push([
          Ge,
          Ye
        ]), ne.push(ye.name);
        const Te = G.get(ye.name);
        Te && D.set(be, Te);
      }
    }
    const B = ie.length;
    for (const ye of V) {
      const Ge = ye.joints.map((Ye) => $e.get(Ye)).filter((Ye) => Ye !== void 0);
      if (Ge.length >= 3) {
        const Ye = ie.length;
        ie.push(Ge), ne.push(ye.name);
        const be = he.get(ye.name);
        be && D.set(Ye, be);
      }
    }
    const Y = ie.length - B, ue = {
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map(),
      thicknesses: /* @__PURE__ */ new Map(),
      poissonsRatios: /* @__PURE__ */ new Map()
    }, Me = /* @__PURE__ */ new Map(), Ae = N.values().next().value || {
      E: 29e3,
      nu: 0.3,
      G: 11153
    };
    for (let ye = 0; ye < ie.length; ye++) {
      const Ge = D.get(ye), Ye = Ge ? w.get(Ge) : null, be = Ge ? U.get(Ge) : null;
      if (Ye || ie[ye].length === 2) {
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
        ue.elasticities.set(ye, Xe), ue.shearModuli.set(ye, Ze), ue.areas.set(ye, Te.A || Te.D * Te.B), ue.momentsOfInertiaZ.set(ye, Te.Iz || Te.B * Te.D ** 3 / 12), ue.momentsOfInertiaY.set(ye, Te.Iy || Te.D * Te.B ** 3 / 12), ue.torsionalConstants.set(ye, Te.J || 0), ue.densities.set(ye, Ce.density || 0), ((_a = Te.shape) == null ? void 0 : _a.includes("Wide Flange")) || Te.shape === "I" ? Me.set(ye, {
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
        const Te = N.get(be.material) || Ae, Ce = Te.E || Ae.E, Xe = Te.nu || 0.2, ct = Te.G || Ce / (2 * (1 + Xe));
        ue.elasticities.set(ye, Ce), ue.shearModuli.set(ye, ct), ue.thicknesses.set(ye, be.thickness), ue.poissonsRatios.set(ye, Xe), ue.densities.set(ye, Te.density || 0);
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
      nodes: fe,
      nodeNames: J,
      nodeNameToIdx: $e,
      elements: ie,
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
    const { nodes: b, elements: N, nodeInputs: w, elementInputs: U } = e, j = e.units || {
      force: "KN",
      length: "m"
    }, Z = e.title || "Awatif Model", V = [], W = (D) => V.push(D), G = () => V.push(" ");
    W(`File ${Z}.$2k was saved on m/d/yy at h:mm:ss`), G(), W('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), W("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), G();
    const he = [], T = [];
    if (N.forEach((D, B) => {
      D.length === 2 ? he.push(B) : T.push(B);
    }), he.length > 0) {
      W('TABLE:  "CONNECTIVITY - FRAME"');
      for (const D of he) {
        const B = N[D];
        W(`   Frame=${D + 1}   JointI=${B[0] + 1}   JointJ=${B[1] + 1}   IsCurved=No`);
      }
      G();
    }
    if (T.length > 0) {
      W('TABLE:  "CONNECTIVITY - AREA"');
      for (const D of T) {
        const B = N[D], Y = B.map((ue, Me) => `Joint${Me + 1}=${ue + 1}`).join("   ");
        W(`   Area=${D + 1}   NumJoints=${B.length}   ${Y}`);
      }
      G();
    }
    W('TABLE:  "COORDINATE SYSTEMS"'), W("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), G(), W('TABLE:  "DATABASE FORMAT TYPES"'), W("   UnitsCurr=Yes   OverrideE=No"), G();
    const J = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map();
    for (const D of he) {
      const B = ((_a = U.areas) == null ? void 0 : _a.get(D)) || 0, Y = ((_b = U.momentsOfInertiaZ) == null ? void 0 : _b.get(D)) || 0, ue = ((_c = U.momentsOfInertiaY) == null ? void 0 : _c.get(D)) || 0, Me = ((_d = U.torsionalConstants) == null ? void 0 : _d.get(D)) || 0, Ae = ((_e = U.elasticities) == null ? void 0 : _e.get(D)) || 0, Ke = `MAT_${Math.round(Ae)}`, ye = `A${B.toPrecision(6)}_Iz${Y.toPrecision(6)}`;
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
      W('TABLE:  "FRAME SECTION ASSIGNMENTS"');
      for (const D of he) {
        const B = $e.get(D) || "SEC1";
        W(`   Frame=${D + 1}   AutoSelect=N.A.   AnalSect=${B}   MatProp=Default`);
      }
      G();
    }
    if (J.size > 0) {
      W('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
      let D = 0;
      for (const [, B] of J) {
        D++;
        const Y = B.A * 5 / 6;
        W(`   SectionName=SEC${D}   Material=${B.matKey}   Shape=Rectangular   t3=${Pt(B.h)}   t2=${Pt(B.b)}   Area=${Pt(B.A)}   TorsConst=${Pt(B.J)}   I33=${Pt(B.Iz)}   I22=${Pt(B.Iy)}   I23=0   AS2=${Pt(Y)}   AS3=${Pt(Y)} _`), W("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
      }
      G();
    }
    const fe = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map();
    for (const D of T) {
      const B = ((_f = U.thicknesses) == null ? void 0 : _f.get(D)) || 0.1, Y = ((_g = U.elasticities) == null ? void 0 : _g.get(D)) || 0, ue = `MAT_${Math.round(Y)}`, Me = `t${B.toPrecision(6)}`;
      fe.has(Me) || fe.set(Me, {
        t: B,
        matKey: ue
      });
      const Ae = [
        ...fe.keys()
      ].indexOf(Me) + 1;
      ie.set(D, `SSEC${Ae}`);
    }
    if (T.length > 0) {
      W('TABLE:  "AREA SECTION ASSIGNMENTS"');
      for (const B of T) {
        const Y = ie.get(B) || "SSEC1";
        W(`   Area=${B + 1}   Section=${Y}   MatProp=Default`);
      }
      G(), W('TABLE:  "AREA SECTION PROPERTIES"');
      let D = 0;
      for (const [, B] of fe) D++, W(`   Section=SSEC${D}   Material=${B.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${Pt(B.t)}   BendThick=${Pt(B.t)}   Color=Cyan`);
      G();
    }
    W('TABLE:  "JOINT COORDINATES"');
    for (let D = 0; D < b.length; D++) {
      const B = b[D];
      W(`   Joint=${D + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${Pt(B[0])}   Y=${Pt(B[1])}   Z=${Pt(B[2])}   SpecialJt=No`);
    }
    if (G(), w.supports && w.supports.size > 0) {
      W('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
      for (const [D, B] of w.supports) {
        if (!B.some((ue) => ue)) continue;
        const Y = (ue) => ue ? "Yes" : "No";
        W(`   Joint=${D + 1}   U1=${Y(B[0])}   U2=${Y(B[1])}   U3=${Y(B[2])}   R1=${Y(B[3])}   R2=${Y(B[4])}   R3=${Y(B[5])}`);
      }
      G();
    }
    if (W('TABLE:  "LOAD PATTERN DEFINITIONS"'), W("   LoadPat=DEAD   DesignType=Dead   SelfWtMult=0"), G(), W('TABLE:  "LOAD CASE DEFINITIONS"'), W('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), G(), W('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), W('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), G(), w.forces && w.forces.size > 0) {
      W('TABLE:  "JOINT LOADS - FORCE"');
      for (const [D, B] of w.forces) B.some((Y) => Math.abs(Y) > 1e-12) && W(`   Joint=${D + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${Pt(B[0])}   F2=${Pt(B[1])}   F3=${Pt(B[2])}   M1=${Pt(B[3])}   M2=${Pt(B[4])}   M3=${Pt(B[5])}`);
      G();
    }
    const ne = /* @__PURE__ */ new Map();
    for (let D = 0; D < N.length; D++) {
      const B = ((_h = U.elasticities) == null ? void 0 : _h.get(D)) || 0, Y = ((_i = U.shearModuli) == null ? void 0 : _i.get(D)) || 0, ue = B > 0 && Y > 0 ? Math.max(0, Math.min(0.5, B / (2 * Y) - 1)) : 0.2, Me = ((_j = U.densities) == null ? void 0 : _j.get(D)) || 0, Ae = `MAT_${Math.round(B)}`;
      ne.has(Ae) || ne.set(Ae, {
        E: B,
        nu: ue,
        G: Y,
        rho: Me
      });
    }
    W('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
    for (const [D] of ne) W(`   Material=${D}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
    G(), W('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
    for (const [D, B] of ne) W(`   Material=${D}   UnitWeight=${Pt(B.rho * 9.81)}   UnitMass=${Pt(B.rho)}   E1=${Pt(B.E)}   G12=${Pt(B.G)}   U12=${Pt(B.nu)}   A1=9.9E-06`);
    G(), W('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
    for (const [D] of ne) W(`   Material=${D}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
    return G(), W('TABLE:  "PROGRAM CONTROL"'), W(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${j.force}, ${j.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), G(), W("END TABLE DATA"), W(""), V.join(`\r
`);
  }
  function Pt(e) {
    return e === 0 || Math.abs(e) < 1e-15 ? "0" : Math.abs(e) >= 1e6 || Math.abs(e) < 1e-3 && Math.abs(e) > 0 ? e.toExponential(8) : parseFloat(e.toPrecision(10)).toString();
  }
  function er(e) {
    const { e2kModel: b } = e, N = b == null ? void 0 : b.rawSections;
    return N && N.size > 0 ? tr(N) : or(e);
  }
  function tr(e, b) {
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
  function or(e) {
    var _a, _b, _c, _d;
    const { nodes: b, elements: N, nodeInputs: w, elementInputs: U, title: j, units: Z } = e, V = (Z == null ? void 0 : Z.force) || "TONF", W = (Z == null ? void 0 : Z.length) || "M", G = [], he = (be) => Math.round(be * 1e4) / 1e4;
    G.push("$ File exported from Awatif FEM Studio"), G.push(""), G.push("$ PROGRAM INFORMATION"), G.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), G.push(""), G.push("$ CONTROLS"), G.push(`  UNITS  "${V}"  "${W}"  "C"  `), j && G.push(`  TITLE2  "${j}"  `), G.push("");
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
    G.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let be = J.length - 1; be >= 1; be--) G.push(`  STORY "${$e[be]}"  HEIGHT ${he(J[be] - J[be - 1])} MASTERSTORY "Yes"  `);
    J.length > 0 && G.push(`  STORY "Base"  ELEV ${J[0]} `), G.push(""), N.some((be) => be.length === 4) && (G.push("$ DIAPHRAGM NAMES"), G.push('  DIAPHRAGM "D1"    TYPE RIGID'), G.push("")), G.push("$ MATERIAL PROPERTIES");
    const ne = /* @__PURE__ */ new Set();
    (_a = U.elasticities) == null ? void 0 : _a.forEach((be) => ne.add(be));
    const D = /* @__PURE__ */ new Map();
    let B = 0;
    for (const be of ne) {
      const Te = `Mat_${++B}`;
      D.set(be, Te), G.push(`  MATERIAL  "${Te}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), G.push(`  MATERIAL  "${Te}"    SYMTYPE "Isotropic"  E ${be}  U 0.2  A 1E-05`);
    }
    G.push(""), G.push("$ FRAME SECTIONS");
    const Y = /* @__PURE__ */ new Set(), ue = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map();
    N.forEach((be, Te) => {
      var _a2, _b2;
      if (be.length !== 2) return;
      const Ce = (_a2 = U.sectionShapes) == null ? void 0 : _a2.get(Te), Xe = ((_b2 = U.elasticities) == null ? void 0 : _b2.get(Te)) ?? 0, ct = D.get(Xe) || "Mat_1", Ze = (Ce == null ? void 0 : Ce.h) ?? 0, dt = (Ce == null ? void 0 : Ce.b) ?? 0, ut = (Ce == null ? void 0 : Ce.d) ?? 0, Tt = (Ce == null ? void 0 : Ce.tf) ?? 0, Nt = (Ce == null ? void 0 : Ce.tw) ?? 0, Bt = (Ce == null ? void 0 : Ce.type) || "rect", Mt = `${Bt}_${Ze}_${dt}_${ut}_${Tt}_${Nt}`;
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
      Ze && (St += `  D ${Ze}`), dt && (St += `  B ${dt}`), ut && !Ze && (St += `  D ${ut}`), Tt && (St += `  TF ${Tt}`), Nt && (St += `  TW ${Nt}`), G.push(St);
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
        story: fe.get(he(Te[1])) || "Base"
      };
    };
    G.push("$ LINE CONNECTIVITIES");
    const Ge = [];
    N.forEach((be, Te) => {
      if (be.length !== 2) return;
      const Ce = nr(b, be), Xe = ue.get(Te) || `Sec_${Te}`;
      if (Ce === "BEAM") {
        const ct = ye(be[0]), Ze = ye(be[1]);
        G.push(`  LINE  "E${Te + 1}"  BEAM  "${ct.pt}"  "${Ze.pt}"  0`), Ge.push(`  LINEASSIGN  "E${Te + 1}"  "${ct.story}"  SECTION "${Xe}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const ct = b[be[0]][1] <= b[be[1]][1] ? be[0] : be[1], Ze = b[be[0]][1] <= b[be[1]][1] ? be[1] : be[0];
        ye(ct);
        const dt = ye(Ze), ut = he(b[ct][1]), Tt = he(b[Ze][1]), Nt = J.indexOf(ut), Bt = J.indexOf(Tt), Mt = Math.max(1, Bt >= 0 && Nt >= 0 ? Bt - Nt : 1);
        G.push(`  LINE  "E${Te + 1}"  ${Ce}  "${dt.pt}"  "${dt.pt}"  ${Mt}`);
        for (let bt = 0; bt < Mt; bt++) {
          const ho = Bt - bt;
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
        ], ut = Math.abs(Ze[2] * dt[0] - Ze[0] * dt[2]), Tt = Math.sqrt((Ze[1] * dt[2] - Ze[2] * dt[1]) ** 2 + ut ** 2 + (Ze[0] * dt[1] - Ze[1] * dt[0]) ** 2), Nt = Tt > 1e-10 && ut / Tt < 0.5;
        Ye.push({
          idx: Te,
          el: be,
          isWall: Nt
        });
      }
    }), Ye.some((be) => !be.isWall)) {
      G.push("$ SLAB PROPERTIES");
      const be = ((_c = U.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
      G.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${D.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${be} `), G.push("");
    }
    if (Ye.some((be) => be.isWall)) {
      G.push("$ WALL PROPERTIES");
      const be = ((_d = U.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
      G.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${D.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${be} `), G.push("");
    }
    if (Ye.length > 0) {
      G.push("$ AREA CONNECTIVITIES");
      const be = [];
      Ye.forEach((Te, Ce) => {
        const { el: Xe, isWall: ct } = Te, Ze = ct ? `W${Ce + 1}` : `F${Ce + 1}`, dt = ct ? "PANEL" : "FLOOR", ut = Xe.map((Tt) => ye(Tt));
        if (ct) {
          const Tt = b[Xe[0]][1] <= b[Xe[2]][1] ? 0 : 2, Nt = b[Xe[1]][1] <= b[Xe[3]][1] ? 1 : 3;
          G.push(`  AREA "${Ze}"  ${dt}  4  "${ut[Tt].pt}"  "${ut[Nt].pt}"  "${ut[Nt].pt}"  "${ut[Tt].pt}"  1  1  0  0  `);
          const Bt = ut[Tt === 0 ? 2 : 0].story;
          be.push(`  AREAASSIGN  "${Ze}"  "${Bt}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
        } else G.push(`  AREA "${Ze}"  ${dt}  4  "${ut[0].pt}"  "${ut[1].pt}"  "${ut[2].pt}"  "${ut[3].pt}"  0  0  0  0  `), be.push(`  AREAASSIGN  "${Ze}"  "${ut[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }), G.push(""), G.push("$ AREA ASSIGNS"), be.forEach((Te) => G.push(Te)), G.push("");
    }
    return G.push("$ LOAD PATTERNS"), G.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), G.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), G.push(""), w.loads && w.loads.size > 0 && (G.push("$ POINT OBJECT LOADS"), w.loads.forEach((be, Te) => {
      const [Ce, Xe, ct] = be, Ze = ye(Te);
      Math.abs(Ce) > 1e-10 && G.push(`  POINTLOAD  "${Ze.pt}"  "${Ze.story}"  "Dead"  TYPE "FORCE"  FX ${Ce}`), Math.abs(Xe) > 1e-10 && G.push(`  POINTLOAD  "${Ze.pt}"  "${Ze.story}"  "Dead"  TYPE "FORCE"  FY ${Xe}`), Math.abs(ct) > 1e-10 && G.push(`  POINTLOAD  "${Ze.pt}"  "${Ze.story}"  "Dead"  TYPE "FORCE"  FZ ${ct}`);
    }), G.push("")), G.push("  END"), G.push("$ END OF MODEL FILE"), G.join(`\r
`);
  }
  function nr(e, b) {
    const N = e[b[0]], w = e[b[1]], U = Math.abs(w[1] - N[1]), j = Math.sqrt((w[0] - N[0]) ** 2 + (w[2] - N[2]) ** 2), Z = U > j * 0.5;
    return Z && j > 0.01 ? "BRACE" : Z ? "COLUMN" : "BEAM";
  }
  function sr(e) {
    var _a, _b;
    const { nodes: b, elements: N, nodeInputs: w, elementInputs: U } = e, j = [];
    return j.push("# OpenSeesPy model exported from Awatif FEM Studio"), j.push(`# ${b.length} nodes, ${N.length} elements`), j.push(""), j.push("import openseespy.opensees as ops"), j.push(""), j.push("ops.wipe()"), j.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), j.push(""), j.push("# --- Nodes ---"), b.forEach((Z, V) => {
      j.push(`ops.node(${V + 1}, ${Z[0]}, ${Z[1]}, ${Z[2]})`);
    }), j.push(""), j.push("# --- Boundary Conditions ---"), (_a = w.supports) == null ? void 0 : _a.forEach((Z, V) => {
      const W = Z.map((G) => G ? 1 : 0).join(", ");
      j.push(`ops.fix(${V + 1}, ${W})`);
    }), j.push(""), j.push("# --- Geometric Transformations ---"), j.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), j.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), j.push(""), j.push("# --- Elements (elasticBeamColumn) ---"), N.forEach((Z, V) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (Z.length !== 2) return;
      const W = b[Z[0]], G = b[Z[1]], T = Math.abs(G[2] - W[2]) > Math.max(Math.abs(G[0] - W[0]), Math.abs(G[1] - W[1])) ? 2 : 1, J = ((_a2 = U.areas) == null ? void 0 : _a2.get(V)) ?? 1, $e = ((_b2 = U.elasticities) == null ? void 0 : _b2.get(V)) ?? 2e5, fe = ((_c = U.shearModuli) == null ? void 0 : _c.get(V)) ?? 8e4, ie = ((_d = U.torsionalConstants) == null ? void 0 : _d.get(V)) ?? 1, ne = ((_e = U.momentsOfInertiaY) == null ? void 0 : _e.get(V)) ?? 1, D = ((_f = U.momentsOfInertiaZ) == null ? void 0 : _f.get(V)) ?? 1;
      j.push(`ops.element('elasticBeamColumn', ${V + 1}, ${Z[0] + 1}, ${Z[1] + 1}, ${J}, ${$e}, ${fe}, ${ie}, ${ne}, ${D}, ${T})`);
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
  function ar(e) {
    var _a, _b;
    const { nodes: b, elements: N, nodeInputs: w, elementInputs: U } = e, j = [];
    return j.push("# OpenSees Tcl model exported from Awatif FEM Studio"), j.push(`# ${b.length} nodes, ${N.length} elements`), j.push(""), j.push("wipe"), j.push("model basic -ndm 3 -ndf 6"), j.push(""), j.push("# --- Nodes ---"), b.forEach((Z, V) => {
      j.push(`node ${V + 1} ${Z[0]} ${Z[1]} ${Z[2]}`);
    }), j.push(""), j.push("# --- Boundary Conditions ---"), (_a = w.supports) == null ? void 0 : _a.forEach((Z, V) => {
      const W = Z.map((G) => G ? 1 : 0).join(" ");
      j.push(`fix ${V + 1} ${W}`);
    }), j.push(""), j.push("# --- Geometric Transformations ---"), j.push("geomTransf Linear 1 0.0 0.0 1.0"), j.push("geomTransf Linear 2 -1.0 0.0 0.0"), j.push(""), j.push("# --- Elements ---"), N.forEach((Z, V) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (Z.length !== 2) return;
      const W = b[Z[0]], G = b[Z[1]], T = Math.abs(G[2] - W[2]) > Math.max(Math.abs(G[0] - W[0]), Math.abs(G[1] - W[1])) ? 2 : 1, J = ((_a2 = U.areas) == null ? void 0 : _a2.get(V)) ?? 1, $e = ((_b2 = U.elasticities) == null ? void 0 : _b2.get(V)) ?? 2e5, fe = ((_c = U.shearModuli) == null ? void 0 : _c.get(V)) ?? 8e4, ie = ((_d = U.torsionalConstants) == null ? void 0 : _d.get(V)) ?? 1, ne = ((_e = U.momentsOfInertiaY) == null ? void 0 : _e.get(V)) ?? 1, D = ((_f = U.momentsOfInertiaZ) == null ? void 0 : _f.get(V)) ?? 1;
      j.push(`element elasticBeamColumn ${V + 1} ${Z[0] + 1} ${Z[1] + 1} ${J} ${$e} ${fe} ${ie} ${ne} ${D} ${T}`);
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
  function lr(e) {
    const b = [], N = [], w = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map();
    for (const $e of e.split(/\r?\n/)) {
      const fe = $e.trim(), ie = fe.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ie) {
        const Y = parseInt(ie[1]), ue = b.length;
        b.push([
          parseFloat(ie[2]),
          parseFloat(ie[3]),
          parseFloat(ie[4])
        ]), T.set(Y, ue);
        continue;
      }
      const ne = fe.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (ne) {
        const Y = parseInt(ne[1]), ue = T.get(Y);
        ue !== void 0 && w.set(ue, [
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
          const Ae = N.length;
          N.push([
            ue,
            Me
          ]), J.set(Y, Ae), V.set(Ae, parseFloat(D[4])), j.set(Ae, parseFloat(D[5])), Z.set(Ae, parseFloat(D[6])), he.set(Ae, parseFloat(D[7])), W.set(Ae, parseFloat(D[8])), G.set(Ae, parseFloat(D[9]));
        }
        continue;
      }
      const B = fe.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
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
  function rr(e) {
    const b = [], N = [], w = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map();
    for (const J of e.split(/\r?\n/)) {
      const $e = J.trim();
      if ($e.startsWith("#") || $e.startsWith("//")) continue;
      const fe = $e.split(/\s+/);
      if (fe[0] === "node" && fe.length >= 5) {
        const ie = parseInt(fe[1]), ne = b.length;
        b.push([
          parseFloat(fe[2]),
          parseFloat(fe[3]),
          parseFloat(fe[4])
        ]), T.set(ie, ne);
        continue;
      }
      if (fe[0] === "fix" && fe.length >= 8) {
        const ie = T.get(parseInt(fe[1]));
        ie !== void 0 && w.set(ie, [
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
        const ie = T.get(parseInt(fe[3])), ne = T.get(parseInt(fe[4]));
        if (ie !== void 0 && ne !== void 0) {
          const D = N.length;
          N.push([
            ie,
            ne
          ]), V.set(D, parseFloat(fe[5])), j.set(D, parseFloat(fe[6])), Z.set(D, parseFloat(fe[7])), he.set(D, parseFloat(fe[8])), W.set(D, parseFloat(fe[9])), G.set(D, parseFloat(fe[10]));
        }
        continue;
      }
      if (fe[0] === "load" && fe.length >= 8) {
        const ie = T.get(parseInt(fe[1]));
        ie !== void 0 && U.set(ie, [
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
  function La(e, b) {
    const N = no(e);
    if (b < N.length) {
      let w = N[b].trim();
      return w.startsWith("'") && w.endsWith("'") && (w = w.slice(1, -1)), w === "$" ? null : w;
    }
    return null;
  }
  function ir(e) {
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
        const W = La(V.args, 2);
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
  function Ca(e, b) {
    const N = no(b.args), w = Zt(e, N[0]), U = w ? cr(e, w) : [
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
      V && (j = Ia(e, V));
    }
    if (N[2] && N[2] !== "$") {
      const V = Zt(e, N[2]);
      V && (Z = Ia(e, V));
    }
    return {
      origin: U,
      dirZ: j,
      dirX: Z
    };
  }
  function cr(e, b) {
    return b.args.replace(/[()]/g, "").split(",").map((w) => parseFloat(w.trim())).filter((w) => !isNaN(w));
  }
  function Ia(e, b) {
    return b.args.replace(/[()]/g, "").split(",").map((w) => parseFloat(w.trim())).filter((w) => !isNaN(w));
  }
  function Fa(e, b) {
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
    if (w && (U = Ca(e, w)), N[0] && N[0] !== "$") {
      const j = Zt(e, N[0]);
      if (j && j.type === "IFCLOCALPLACEMENT") {
        const Z = Fa(e, j), V = bs(U.origin, Z.dirX, gs(Z.dirZ, Z.dirX), Z.dirZ);
        U.origin = [
          Z.origin[0] + V[0],
          Z.origin[1] + V[1],
          Z.origin[2] + V[2]
        ], U.dirZ = bs(U.dirZ, Z.dirX, gs(Z.dirZ, Z.dirX), Z.dirZ), U.dirX = bs(U.dirX, Z.dirX, gs(Z.dirZ, Z.dirX), Z.dirZ);
      }
    }
    return U;
  }
  function gs(e, b) {
    return [
      e[1] * b[2] - e[2] * b[1],
      e[2] * b[0] - e[0] * b[2],
      e[0] * b[1] - e[1] * b[0]
    ];
  }
  function bs(e, b, N, w) {
    return [
      e[0] * b[0] + e[1] * N[0] + e[2] * w[0],
      e[0] * b[1] + e[1] * N[1] + e[2] * w[1],
      e[0] * b[2] + e[1] * N[2] + e[2] * w[2]
    ];
  }
  const dr = 0.01;
  function pr(e) {
    const b = ir(e), { entities: N, typeIndex: w } = b, U = [], j = [], Z = /* @__PURE__ */ new Map();
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
    function G(ne, D, B) {
      for (const Y of U) {
        const ue = Y.x - ne, Me = Y.y - D, Ae = Y.z - B;
        if (Math.sqrt(ue * ue + Me * Me + Ae * Ae) < dr) return Y.id;
      }
      return U.push({
        id: V,
        x: ne,
        y: D,
        z: B
      }), V++;
    }
    function he(ne) {
      const D = La(ne.args, 2) || "", B = w.IFCRELASSOCIATESMATERIAL || [];
      for (const ue of B) {
        const Me = N[ue];
        if (!Me) continue;
        const Ae = no(Me.args);
        if ((Ae[4] || Ae[3] || "").includes(`#${ne.id}`)) {
          const ye = Ae[5] || Ae[4] || "", Ge = Zt(N, ye);
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
        const B = no(ne.args), Y = B[2] || B[1] || "", ue = Zt(N, Y);
        if (ue) return T(ue);
      }
      if (D === "IFCMATERIALPROFILESET") {
        const B = no(ne.args), ue = (B[2] || B[1] || "").match(/#(\d+)/);
        if (ue) {
          const Me = N[parseInt(ue[1])];
          if (Me) return T(Me);
        }
      }
      if (D === "IFCMATERIALPROFILESETUSAGE") {
        const Y = no(ne.args)[0], ue = Zt(N, Y);
        if (ue) return T(ue);
      }
      return {
        b: 0.3,
        h: 0.3,
        name: "Unknown"
      };
    }
    function J(ne, D, B, Y) {
      const ue = w[ne] || [];
      for (const Me of ue) {
        const Ae = N[Me];
        if (!Ae) continue;
        const Ke = no(Ae.args), ye = Ke[5] || Ke[4] || "", Ge = Zt(N, ye);
        if (!Ge) continue;
        const Ye = Fa(N, Ge), be = he(Ae);
        let Te = Y, Ce = null, Xe = null;
        const ct = Ke[6] || Ke[5] || "", Ze = Zt(N, ct);
        if (Ze) {
          const bt = Rn(N, Ze);
          bt && (Te = bt.depth || Y, Ce = bt.origin, Xe = bt.direction);
        }
        const dt = Ce ? Ce[0] : Ye.origin[0], ut = Ce ? Ce[1] : Ye.origin[1], Tt = Ce ? Ce[2] : Ye.origin[2], Nt = Xe || (B === "Z" ? Ye.dirZ : Ye.dirX), Bt = G(dt, ut, Tt), Mt = G(dt + Nt[0] * Te, ut + Nt[1] * Te, Tt + Nt[2] * Te);
        j.push({
          id: W++,
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
      const Y = w[ne] || [];
      for (const ue of Y) {
        const Me = N[ue];
        if (!Me) continue;
        const Ae = no(Me.args), Ke = Ae[5] || Ae[4] || "";
        if (!Zt(N, Ke)) continue;
        let Ge = B;
        const Ye = Ae[6] || Ae[5] || "", be = Zt(N, Ye);
        be && (Ge = fr(N, be) || B);
        const Te = D === "slab" ? `Losa e=${(Ge * 100).toFixed(0)}cm` : D === "wall" ? `Muro e=${(Ge * 100).toFixed(0)}cm` : D === "footing" ? `Zapata e=${(Ge * 100).toFixed(0)}cm` : `${D} e=${(Ge * 100).toFixed(0)}cm`;
        j.push({
          id: W++,
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
    const fe = [], ie = w.IFCBUILDINGSTOREY || [];
    for (const ne of ie) {
      const D = N[ne];
      if (!D) continue;
      const B = no(D.args), Y = (B[2] || "").replace(/'/g, ""), ue = parseFloat(B[9]) || 0;
      fe.push({
        name: Y,
        elevation: ue
      });
    }
    return fe.sort((ne, D) => ne.elevation - D.elevation), {
      nodes: U,
      elements: j,
      materials: Z,
      levels: fe,
      projectName: b.meta.project,
      schema: b.meta.schema
    };
  }
  function Rn(e, b) {
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
            he && (T = Ca(e, he).origin);
            const J = Zt(e, W[2]);
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
              depth: G,
              origin: T,
              direction: $e
            };
          }
          if (V.type === "IFCSHAPEREPRESENTATION") {
            const W = Rn(e, V);
            if (W) return W;
          }
          if (V.type === "IFCMAPPEDITEM") {
            const W = no(V.args), G = Zt(e, W[0]);
            if (G && G.type === "IFCREPRESENTATIONMAP") {
              const he = no(G.args), T = Zt(e, he[1]);
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
  function fr(e, b) {
    const N = Rn(e, b);
    return N ? N.depth : null;
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
  function ur(e) {
    return Oa.get(e) ?? "other";
  }
  new Set(Ra);
  async function mr(e, b) {
    var _a, _b;
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
    for (const [$e] of Pa) {
      const fe = ur($e);
      try {
        const ie = w.GetLineIDsWithType(j, $e);
        for (let ne = 0; ne < ie.size(); ne++) {
          const D = ie.get(ne);
          Z.set(D, fe);
          let B = "";
          try {
            const Y = w.GetLine(j, D);
            B = ((_a = Y == null ? void 0 : Y.Name) == null ? void 0 : _a.value) || ((_b = Y == null ? void 0 : Y.Description) == null ? void 0 : _b.value) || "";
          } catch {
          }
          V.set(D, {
            expressID: D,
            category: fe,
            name: B,
            typeName: W[$e] || "Otro"
          });
        }
      } catch {
      }
    }
    const G = /* @__PURE__ */ new Map();
    for (const $e of Ra) {
      const fe = new bn();
      fe.name = `ifc-${$e}`, e.add(fe), G.set($e, fe);
    }
    const he = new vl();
    let T = 0;
    const J = new ya({
      color: 13421772,
      transparent: true,
      opacity: 0.9,
      side: $a
    });
    return w.StreamAllMeshes(j, ($e) => {
      const fe = Z.get($e.expressID) ?? "other", ie = G.get(fe), ne = $e.geometries;
      for (let D = 0; D < ne.size(); D++) {
        const B = ne.get(D), Y = w.GetGeometry(j, B.geometryExpressID), ue = w.GetVertexArray(Y.GetVertexData(), Y.GetVertexDataSize()), Me = w.GetIndexArray(Y.GetIndexData(), Y.GetIndexDataSize()), Ae = new co(), Ke = new Float32Array(ue.length / 2), ye = new Float32Array(ue.length / 2);
        for (let Ce = 0; Ce < ue.length; Ce += 6) {
          const Xe = Ce / 2;
          Ke[Xe] = ue[Ce], Ke[Xe + 1] = ue[Ce + 1], Ke[Xe + 2] = ue[Ce + 2], ye[Xe] = ue[Ce + 3], ye[Xe + 1] = ue[Ce + 4], ye[Xe + 2] = ue[Ce + 5];
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
        Te.applyMatrix4(Ge), Te.userData.expressID = $e.expressID, Te.userData.category = fe, ie.add(Te), he.expandByObject(Te), T++, Y.delete();
      }
    }), w.CloseModel(j), {
      meshCount: T,
      bbox: he,
      detailCategories: G,
      elementInfo: V
    };
  }
  ka = on.state(false);
  Mr = function(e) {
    e.nodeInputs || (e.nodeInputs = on.state({})), e.elementInputs || (e.elementInputs = on.state({})), e.deformOutputs || (e.deformOutputs = on.state({})), e.analyzeOutputs || (e.analyzeOutputs = on.state({}));
    let b = "tonf", N = "m", w = jo(b, N), U = {
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
    let T = "", J = {}, $e = null, fe = "", ie = [], ne = [], D = [], B = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), ue = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), Ke = null, ye = [], Ge = 0.2, Ye = 2, be = 2, Te = false, Ce = 2, Xe = "x", ct = /* @__PURE__ */ new Set(), Ze = true, dt = 0.15, ut = 2, Tt = 2, Nt = /* @__PURE__ */ new Set(), Bt = false, Mt = "perimeter";
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
      const d = tt();
      if (!d) return;
      xt = new bn(), xt.name = "refGrid";
      const s = Math.min(...t), r = Math.max(...t), p = Math.min(...o), i = Math.max(...o), c = Math.max(...n), g = r - s || 1, S = i - p || 1, M = 3359829, y = 2241348;
      for (const x of n) {
        for (const I of o) {
          const C = new co().setFromPoints([
            new qe(s, x, I),
            new qe(r, x, I)
          ]), z = new Qo({
            color: M,
            dashSize: g * 0.015,
            gapSize: g * 0.01,
            transparent: true,
            opacity: 0.25
          }), R = new Bo(C, z);
          R.computeLineDistances(), R.renderOrder = -10, xt.add(R);
        }
        for (const I of t) {
          const C = new co().setFromPoints([
            new qe(I, x, p),
            new qe(I, x, i)
          ]), z = new Qo({
            color: M,
            dashSize: S * 0.015,
            gapSize: S * 0.01,
            transparent: true,
            opacity: 0.25
          }), R = new Bo(C, z);
          R.computeLineDistances(), R.renderOrder = -10, xt.add(R);
        }
      }
      for (const x of t) for (const I of o) {
        const C = new co().setFromPoints([
          new qe(x, 0, I),
          new qe(x, c, I)
        ]), z = new Qo({
          color: y,
          dashSize: c * 0.01,
          gapSize: c * 8e-3,
          transparent: true,
          opacity: 0.15
        }), R = new Bo(C, z);
        R.computeLineDistances(), R.renderOrder = -10, xt.add(R);
      }
      const f = Math.min(g, S) * 0.015;
      for (const x of n) for (const I of t) for (const C of o) {
        const z = [
          new qe(I - f, x, C),
          new qe(I + f, x, C),
          new qe(I, x, C - f),
          new qe(I, x, C + f)
        ], R = new co().setFromPoints(z), k = new tn({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), m = new en(R, k);
        m.renderOrder = -5, xt.add(m);
      }
      xt.traverse((x) => {
        x.material && (Array.isArray(x.material) ? x.material.forEach((I) => {
          I.clippingPlanes = [];
        }) : x.material.clippingPlanes = []);
      }), d.scene.add(xt), d.render();
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
      const d = tt();
      if (!d) return;
      Ht = new bn(), Ht.name = "gridAxes";
      const s = Math.min(...t), r = Math.max(...t), p = Math.min(...o), i = Math.max(...o), c = r - s || 1, g = i - p || 1, S = Math.max(c, g), M = S * 0.08, y = l || t.map((m, u) => String.fromCharCode(65 + u)), f = a || o.map((m, u) => String(u + 1)), x = S * 0.018, I = o.length <= 1, C = 8947848;
      for (let m = 0; m < t.length; m++) {
        const u = t[m];
        if (I) {
          const E = -M - x * 1.5;
          Dn(u, 0, 0, u, 0, E + x, C, Ht), Bn(y[m] || `${m}`, u, 0, E, x, Ht);
        } else {
          const E = p - M - x * 1.5;
          Dn(u, p, 0, u, E + x, 0, C, Ht), Bn(y[m] || `${m}`, u, E, 0, x, Ht);
        }
      }
      if (!I) for (let m = 0; m < o.length; m++) {
        const u = o[m], E = s - M - x * 1.5;
        Dn(s, u, 0, E + x, u, 0, C, Ht), Bn(f[m] || `${m}`, E, u, 0, x, Ht);
      }
      const z = x * 1.8, R = M * 1.2, k = M * 1.2;
      for (let m = 0; m < t.length - 1; m++) {
        const u = t[m], E = t[m + 1], L = Math.abs(E - u), O = (u + E) / 2, H = `${L.toFixed(2)} m`;
        I ? (qn(H, O, 0, -R, z, Ht), _n(u, 0, -R * 0.7, E, 0, -R * 0.7, 16763904, Ht)) : (qn(H, O, p - k, 0, z, Ht), _n(u, p - k * 0.7, 0, E, p - k * 0.7, 0, 16763904, Ht));
      }
      if (!I) for (let m = 0; m < o.length - 1; m++) {
        const u = o[m], E = o[m + 1], L = Math.abs(E - u), O = (u + E) / 2, H = `${L.toFixed(2)} m`;
        qn(H, s - R, O, 0, z, Ht), _n(s - R * 0.7, u, 0, s - R * 0.7, E, 0, 16763904, Ht);
      }
      Ht.traverse((m) => {
        m.material && (Array.isArray(m.material) ? m.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : m.material.clippingPlanes = []);
      }), d.scene.add(Ht), d.render();
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
      const a = Math.min(...o), d = Math.max(...o), s = Math.min(...n), r = Math.max(...n), p = d - a || 1, i = r - s || 1, c = Math.max(p, i), g = c * 0.06, S = n.length <= 1, M = 4491519, y = c * 0.015;
      for (const f of t) {
        const x = f.elev;
        S ? (ln(a - g, 0, x, d + g, 0, x, M, Qt), ws(f.name, d + g * 1.5, 0, x, y, Qt)) : (ln(a, s, x, d, s, x, M, Qt), ln(d, s, x, d, r, x, M, Qt), ln(d, r, x, a, r, x, M, Qt), ln(a, r, x, a, s, x, M, Qt), ws(f.name, a - g * 1.5, s, x, y, Qt));
      }
      Qt.traverse((f) => {
        f.material && (Array.isArray(f.material) ? f.material.forEach((x) => {
          x.clippingPlanes = [];
        }) : f.material.clippingPlanes = []);
      }), l.scene.add(Qt), l.render();
    }
    function ln(t, o, n, l, a, d, s, r) {
      const p = Math.sqrt((l - t) ** 2 + (a - o) ** 2 + (d - n) ** 2) || 1, i = new co().setFromPoints([
        new qe(t, o, n),
        new qe(l, a, d)
      ]), c = new Qo({
        color: s,
        dashSize: p * 0.02,
        gapSize: p * 0.01,
        transparent: true,
        opacity: 0.5
      }), g = new Bo(i, c);
      g.computeLineDistances(), g.renderOrder = 50, r.add(g);
    }
    function ws(t, o, n, l, a, d) {
      const s = document.createElement("canvas"), r = 512, p = 64;
      s.width = r, s.height = p;
      const i = s.getContext("2d");
      i.fillStyle = "rgba(30,60,120,0.8)";
      const c = 8;
      i.beginPath(), i.moveTo(c, 0), i.lineTo(r - c, 0), i.quadraticCurveTo(r, 0, r, c), i.lineTo(r, p - c), i.quadraticCurveTo(r, p, r - c, p), i.lineTo(c, p), i.quadraticCurveTo(0, p, 0, p - c), i.lineTo(0, c), i.quadraticCurveTo(0, 0, c, 0), i.closePath(), i.fill(), i.fillStyle = "#88bbff", i.font = "bold 38px monospace", i.textAlign = "center", i.textBaseline = "middle", i.fillText(t, r / 2, p / 2);
      const g = new ps(s);
      g.needsUpdate = true;
      const S = new In({
        map: g,
        depthTest: false,
        transparent: true
      }), M = new Sn(S);
      M.position.set(o, n, l), M.scale.set(a * 8, a, 1), M.renderOrder = 101, d.add(M);
    }
    function qn(t, o, n, l, a, d) {
      const s = document.createElement("canvas"), r = 256, p = 64;
      s.width = r, s.height = p;
      const i = s.getContext("2d");
      i.fillStyle = "rgba(0,0,0,0.75)";
      const c = 8;
      i.beginPath(), i.moveTo(c, 0), i.lineTo(r - c, 0), i.quadraticCurveTo(r, 0, r, c), i.lineTo(r, p - c), i.quadraticCurveTo(r, p, r - c, p), i.lineTo(c, p), i.quadraticCurveTo(0, p, 0, p - c), i.lineTo(0, c), i.quadraticCurveTo(0, 0, c, 0), i.closePath(), i.fill(), i.fillStyle = "#ffcc00", i.font = "bold 36px monospace", i.textAlign = "center", i.textBaseline = "middle", i.fillText(t, r / 2, p / 2);
      const g = new kl(s);
      g.minFilter = Tl;
      const S = new In({
        map: g,
        transparent: true,
        depthTest: false
      }), M = new Sn(S);
      M.position.set(o, n, l);
      const y = r / p;
      M.scale.set(a * y, a, 1), M.renderOrder = 999, d.add(M);
    }
    function _n(t, o, n, l, a, d, s, r) {
      const p = [
        new qe(t, o, n),
        new qe(l, a, d)
      ], i = new co().setFromPoints(p), c = new tn({
        color: s,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), g = new Bo(i, c);
      g.renderOrder = 998, r.add(g);
    }
    function Dn(t, o, n, l, a, d, s, r) {
      const p = new co().setFromPoints([
        new qe(t, o, n),
        new qe(l, a, d)
      ]), i = new Qo({
        color: s,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(a - o), Math.abs(d - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(a - o), Math.abs(d - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), c = new Bo(p, i);
      c.computeLineDistances(), r.add(c);
    }
    function Bn(t, o, n, l, a, d) {
      const s = document.createElement("canvas"), r = 128;
      s.width = r, s.height = r;
      const p = s.getContext("2d");
      p.beginPath(), p.arc(r / 2, r / 2, r * 0.42, 0, Math.PI * 2), p.fillStyle = "rgba(255,255,255,0.9)", p.fill(), p.lineWidth = r * 0.04, p.strokeStyle = "#555", p.stroke(), p.fillStyle = "#222", p.font = `bold ${r * 0.45}px Arial`, p.textAlign = "center", p.textBaseline = "middle", p.fillText(t, r / 2, r / 2 + r * 0.02);
      const i = new ps(s);
      i.needsUpdate = true;
      const c = new In({
        map: i,
        depthTest: false,
        transparent: true
      }), g = new Sn(c);
      g.position.set(o, n, l);
      const S = a * 2;
      g.scale.set(S, S, 1), g.renderOrder = 100, d.add(g);
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
          const d = l > t ? l - 1 : l, s = a > t ? a - 1 : a;
          return l === t || a === t ? null : [
            d,
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
          const a = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || "", d = l.id || "";
          if (a.toLowerCase().includes(t.toLowerCase()) || d.toLowerCase().includes(t.toLowerCase())) {
            const s = l;
            return s.checked = o !== void 0 ? o : !s.checked, s.dispatchEvent(new Event("change", {
              bubbles: true
            })), console.log(`${a || d}: ${s.checked}`), s.checked;
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
        const d = [
          0
        ];
        for (const s of n || [
          3
        ]) d.push(d[d.length - 1] + s);
        ys(l, a, d), Je = l.map((s, r) => ({
          label: String.fromCharCode(65 + r),
          coord: s
        })), Qe = a.map((s, r) => ({
          label: `${r + 1}`,
          coord: s
        })), mt = d[d.length - 1], pt = d.map((s, r) => ({
          label: r === 0 ? "Base" : `P${r}`,
          elev: s
        })), an(Je.map((s) => s.coord), Qe.map((s) => s.coord), mt, Je.map((s) => s.label), Qe.map((s) => s.label));
        {
          const s = d.map((r, p) => ({
            name: p === 0 ? "Base" : `P${p}`,
            height: p > 0 ? r - d[p - 1] : 0,
            elev: r
          }));
          Nn(s, Je.map((r) => r.coord), Qe.map((r) => r.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${a}] Y=[${d}]`), {
          xCoords: l,
          zCoords: a,
          yLevels: d
        };
      },
      build(t) {
        var _a2;
        if (Je.length === 0 || pt.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const o = (t == null ? void 0 : t.col) || "40x40", n = (t == null ? void 0 : t.viga) || "30x40", l = (t == null ? void 0 : t.fc) || 210, [a, d] = o.split("x").map((q) => parseFloat(q) / 100), [s, r] = n.split("x").map((q) => parseFloat(q) / 100), p = Je.map((q) => q.coord), i = Qe.map((q) => q.coord), c = pt.map((q) => q.elev), g = p.length, S = i.length, M = c.length, y = M - 1, f = [], x = {};
        for (let q = 0; q < M; q++) for (let ce = 0; ce < S; ce++) for (let oe = 0; oe < g; oe++) x[`${oe},${ce},${q}`] = f.length, f.push([
          p[oe],
          i[ce],
          c[q]
        ]);
        const I = [], C = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Map();
        for (let q = 0; q < y; q++) for (let ce = 0; ce < S; ce++) for (let oe = 0; oe < g; oe++) {
          const pe = I.length;
          I.push([
            x[`${oe},${ce},${q}`],
            x[`${oe},${ce},${q + 1}`]
          ]), C.add(pe), R.set(pe, q);
        }
        for (let q = 1; q < M; q++) for (let ce = 0; ce < S; ce++) for (let oe = 0; oe < g - 1; oe++) {
          const pe = I.length;
          I.push([
            x[`${oe},${ce},${q}`],
            x[`${oe + 1},${ce},${q}`]
          ]), z.add(pe), R.set(pe, q - 1);
        }
        for (let q = 1; q < M; q++) for (let ce = 0; ce < g; ce++) for (let oe = 0; oe < S - 1; oe++) {
          const pe = I.length;
          I.push([
            x[`${ce},${oe},${q}`],
            x[`${ce},${oe + 1},${q}`]
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
                  x[`${ge},${pe},${oe}`],
                  x[`${ge + 1},${pe},${oe + 1}`]
                ]), m.add(Ie), R.set(Ie, oe);
                const se = I.length;
                I.push([
                  x[`${ge + 1},${pe},${oe}`],
                  x[`${ge},${pe},${oe + 1}`]
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
                  x[`${pe},${ge},${oe}`],
                  x[`${pe},${ge + 1},${oe + 1}`]
                ]), m.add(Ie), R.set(Ie, oe);
                const se = I.length;
                I.push([
                  x[`${pe},${ge + 1},${oe}`],
                  x[`${pe},${ge},${oe + 1}`]
                ]), m.add(se), R.set(se, oe);
              }
            }
          }
        }
        const u = 15100 * Math.sqrt(l) * 10, E = u / (2 * (1 + 0.2)), L = a * d, O = a * d ** 3 / 12, H = d * a ** 3 / 12, h = a * d * (a ** 2 + d ** 2) / 12, $ = s * r, v = s * r ** 3 / 12, F = r * s ** 3 / 12, X = s * r * (s ** 2 + r ** 2) / 12, K = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map();
        for (let q = 0; q < I.length; q++) K.set(q, u), le.set(q, E), C.has(q) ? (te.set(q, L), Q.set(q, O), me.set(q, H), de.set(q, h), ke.set(q, {
          type: "rect",
          b: a,
          h: d,
          name: `COL${o}`
        })) : m.has(q) ? (te.set(q, L), Q.set(q, O), me.set(q, H), de.set(q, h), ke.set(q, {
          type: "rect",
          b: a,
          h: d,
          name: `BR${o}`
        })) : (te.set(q, $), Q.set(q, v), me.set(q, F), de.set(q, X), ke.set(q, {
          type: "rect",
          b: s,
          h: r,
          name: `V${n}`
        }));
        const Re = /* @__PURE__ */ new Map();
        for (let q = 0; q < S; q++) for (let ce = 0; ce < g; ce++) Re.set(x[`${ce},${q},0`], [
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
          elasticities: K,
          shearModuli: le,
          areas: te,
          momentsOfInertiaZ: Q,
          momentsOfInertiaY: me,
          torsionalConstants: de,
          sectionShapes: ke
        }, B = C, Y = z, Me = R, console.log(`Built: ${f.length} nodes, ${I.length} elements (${C.size} cols, ${z.size} beams, ${m.size} braces)`), console.log(`  Col: ${o}, Viga: ${n}, f'c=${l}${k ? `, braces=${k}` : ""}`), {
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
        const d = Je[l].coord, s = Qe[a].coord, r = [
          ...e.nodes.val
        ], p = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ];
        (_b = e.elementInputs) == null ? void 0 : _b.val;
        const i = (y) => {
          const f = r.findIndex((x) => Math.abs(x[0] - d) < 1e-3 && Math.abs(x[1] - s) < 1e-3 && Math.abs(x[2] - y) < 1e-3);
          return f >= 0 ? f : (r.push([
            d,
            s,
            y
          ]), r.length - 1);
        }, c = n ? [
          pt.findIndex((y) => y.label === n)
        ] : Array.from({
          length: pt.length - 1
        }, (y, f) => f + 1), g = new Map(((_d = (_c = e.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), S = i(pt[0].elev);
        g.has(S) || g.set(S, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        let M = 0;
        for (const y of c) {
          if (y < 1 || y >= pt.length) continue;
          const f = i(pt[y - 1].elev), x = i(pt[y].elev);
          p.push([
            f,
            x
          ]), B.add(p.length - 1), Me.set(p.length - 1, y - 1), M++;
        }
        return e.nodes.val = r, e.elements.val = p, e.nodeInputs.val = {
          ...e.nodeInputs.val,
          supports: g,
          loads: ((_f = (_e2 = e.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${M} column(s) at ${t}-${o}${n ? ` story ${n}` : ""}`), M;
      },
      addBeam(t, o, n, l, a) {
        var _a2;
        const d = Je.findIndex((R) => R.label === t), s = Qe.findIndex((R) => R.label === o), r = Je.findIndex((R) => R.label === n), p = Qe.findIndex((R) => R.label === l), i = pt.findIndex((R) => R.label === a);
        if (d < 0 || s < 0 || r < 0 || p < 0) {
          console.log("Axis not found");
          return;
        }
        if (i < 1) {
          console.log(`Story "${a}" not found. Available: ${pt.filter((R) => R.label !== "Base").map((R) => R.label)}`);
          return;
        }
        const c = Je[d].coord, g = Qe[s].coord, S = Je[r].coord, M = Qe[p].coord, y = pt[i].elev, f = [
          ...e.nodes.val
        ], x = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], I = (R, k, m) => {
          const u = f.findIndex((E) => Math.abs(E[0] - R) < 1e-3 && Math.abs(E[1] - k) < 1e-3 && Math.abs(E[2] - m) < 1e-3);
          return u >= 0 ? u : (f.push([
            R,
            k,
            m
          ]), f.length - 1);
        }, C = I(c, g, y), z = I(S, M, y);
        return x.push([
          C,
          z
        ]), Y.add(x.length - 1), Me.set(x.length - 1, i - 1), e.nodes.val = f, e.elements.val = x, console.log(`Added beam ${t}-${o} \u2192 ${n}-${l} at ${a}`), x.length - 1;
      },
      addBrace(t, o, n, l, a, d) {
        var _a2;
        const s = Je.findIndex((u) => u.label === t), r = Qe.findIndex((u) => u.label === o), p = pt.findIndex((u) => u.label === n), i = Je.findIndex((u) => u.label === l), c = Qe.findIndex((u) => u.label === a), g = pt.findIndex((u) => u.label === d);
        if (s < 0 || r < 0 || p < 0) {
          console.log(`Point 1 not found: ${t}-${o}@${n}`);
          return;
        }
        if (i < 0 || c < 0 || g < 0) {
          console.log(`Point 2 not found: ${l}-${a}@${d}`);
          return;
        }
        const S = Je[s].coord, M = Qe[r].coord, y = pt[p].elev, f = Je[i].coord, x = Qe[c].coord, I = pt[g].elev, C = [
          ...e.nodes.val
        ], z = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], R = (u, E, L) => {
          const O = C.findIndex((H) => Math.abs(H[0] - u) < 1e-3 && Math.abs(H[1] - E) < 1e-3 && Math.abs(H[2] - L) < 1e-3);
          return O >= 0 ? O : (C.push([
            u,
            E,
            L
          ]), C.length - 1);
        }, k = R(S, M, y), m = R(f, x, I);
        return z.push([
          k,
          m
        ]), Me.set(z.length - 1, Math.min(p, g)), e.nodes.val = C, e.elements.val = z, console.log(`Added brace ${t}-${o}@${n} \u2192 ${l}-${a}@${d}`), z.length - 1;
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
        ], a = (t == null ? void 0 : t.col) || "40x40", d = (t == null ? void 0 : t.viga) || "30x40", s = (t == null ? void 0 : t.fc) || 210, [r, p] = a.split("x").map((ee) => parseFloat(ee) / 100), [i, c] = d.split("x").map((ee) => parseFloat(ee) / 100), g = [
          0
        ];
        for (const ee of o) g.push(g[g.length - 1] + ee);
        const S = [
          0
        ];
        for (const ee of n) S.push(S[S.length - 1] + ee);
        const M = [
          0
        ];
        for (const ee of l) M.push(M[M.length - 1] + ee);
        const y = g.length, f = S.length, x = M.length, I = l.length, C = [], z = {};
        for (let ee = 0; ee < x; ee++) for (let ge = 0; ge < f; ge++) for (let Ie = 0; Ie < y; Ie++) z[`${Ie},${ee},${ge}`] = C.length, C.push([
          g[Ie],
          M[ee],
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
        for (let ee = 1; ee < x; ee++) for (let ge = 0; ge < f; ge++) for (let Ie = 0; Ie < y - 1; Ie++) {
          const se = R.length;
          R.push([
            z[`${Ie},${ee},${ge}`],
            z[`${Ie + 1},${ee},${ge}`]
          ]), m.add(se), u.set(se, ee - 1);
        }
        for (let ee = 1; ee < x; ee++) for (let ge = 0; ge < y; ge++) for (let Ie = 0; Ie < f - 1; Ie++) {
          const se = R.length;
          R.push([
            z[`${ge},${ee},${Ie}`],
            z[`${ge},${ee},${Ie + 1}`]
          ]), m.add(se), u.set(se, ee - 1);
        }
        const L = 15100 * Math.sqrt(s) * 10, O = L / (2 * (1 + 0.2)), H = r * p, h = r * p ** 3 / 12, $ = p * r ** 3 / 12, v = r * p * (r ** 2 + p ** 2) / 12, F = i * c, X = i * c ** 3 / 12, K = c * i ** 3 / 12, le = i * c * (i ** 2 + c ** 2) / 12, te = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < R.length; ee++) te.set(ee, L), Q.set(ee, O), k.has(ee) ? (me.set(ee, H), de.set(ee, h), ke.set(ee, $), Re.set(ee, v), q.set(ee, {
          type: "rect",
          b: r,
          h: p,
          name: `COL${a}`
        })) : (me.set(ee, F), de.set(ee, X), ke.set(ee, K), Re.set(ee, le), q.set(ee, {
          type: "rect",
          b: i,
          h: c,
          name: `V${d}`
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
        e.nodes.val = C, e.elements.val = R, e.nodeInputs.val = {
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
        })), mt = M[M.length - 1], an(Je.map((ee) => ee.coord), Qe.map((ee) => ee.coord), mt, Je.map((ee) => ee.label), Qe.map((ee) => ee.label));
        {
          const ee = M.map((ge, Ie) => ({
            name: Ie === 0 ? "Base" : `P${Ie}`,
            height: Ie > 0 ? ge - M[Ie - 1] : 0,
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
        return ys(g, S, M), st(), console.log(`Model3D: ${C.length}n ${R.length}e | ${y}x${f} grid, ${I} floors | COL${a} V${d} f'c=${s}`), {
          nodes: C.length,
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
        let d = 0;
        a.push(d);
        for (const y of t) d += y, a.push(d);
        l > 0 && a.push(d + l);
        const s = [
          0
        ];
        let r = 0;
        for (const y of o) r += y, s.push(r);
        const p = (y) => n > 0 && y === 0 || l > 0 && y === a.length - 1, i = {}, c = [];
        for (let y = 0; y < s.length; y++) for (let f = 0; f < a.length; f++) y === 0 && p(f) || (i[`${f},${y}`] = c.length, c.push([
          a[f],
          0,
          s[y]
        ]));
        const g = [];
        B = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set();
        for (let y = 0; y < s.length - 1; y++) for (let f = 0; f < a.length; f++) p(f) || (B.add(g.length), g.push([
          i[`${f},${y}`],
          i[`${f},${y + 1}`]
        ]));
        for (let y = 1; y < s.length; y++) for (let f = 0; f < a.length - 1; f++) Y.add(g.length), g.push([
          i[`${f},${y}`],
          i[`${f + 1},${y}`]
        ]);
        const S = /* @__PURE__ */ new Map(), M = ht();
        for (let y = 0; y < a.length; y++) {
          if (p(y)) continue;
          const f = `${y},0`;
          i[f] !== void 0 && S.set(i[f], [
            ...M
          ]);
        }
        return e.nodes.val = c, e.elements.val = g, e.nodeInputs && (e.nodeInputs.val = {
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
          nodes: c.length,
          elements: g.length
        };
      },
      building(t, o, n, l = 3, a = 0, d = 0, s = 0, r = 0, p = 1) {
        ot.clear();
        const i = [];
        a > 0 && i.push(-a), i.push(0);
        for (const u of t) i.push(i[i.length - 1] + u);
        d > 0 && i.push(i[i.length - 1] + d);
        const c = [];
        s > 0 && c.push(-s), c.push(0);
        for (const u of o) c.push(c[c.length - 1] + u);
        r > 0 && c.push(c[c.length - 1] + r);
        const g = [
          0
        ];
        for (const u of n) g.push(g[g.length - 1] + u);
        const S = (u) => a > 0 && u === 0 || d > 0 && u === i.length - 1, M = (u) => s > 0 && u === 0 || r > 0 && u === c.length - 1, y = (u, E) => S(u) || M(E), f = [], x = {};
        for (let u = 0; u < g.length; u++) for (let E = 0; E < c.length; E++) for (let L = 0; L < i.length; L++) u === 0 && y(L, E) || (x[`${L},${E},${u}`] = f.length, f.push([
          i[L],
          c[E],
          g[u]
        ]));
        const I = f.length, C = [];
        B = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map();
        const z = [];
        for (let u = 0; u < g.length - 1; u++) for (let E = 0; E < c.length; E++) for (let L = 0; L < i.length; L++) y(L, E) || z.push({
          el: [
            x[`${L},${E},${u}`],
            x[`${L},${E},${u + 1}`]
          ],
          floor: u
        });
        for (const { el: [u, E], floor: L } of z) {
          if (p <= 1) {
            B.add(C.length), Me.set(C.length, L), C.push([
              u,
              E
            ]);
            continue;
          }
          const O = f[u], H = f[E];
          let h = u;
          for (let $ = 1; $ < p; $++) {
            const v = $ / p, F = f.length;
            f.push([
              O[0] + (H[0] - O[0]) * v,
              O[1] + (H[1] - O[1]) * v,
              O[2] + (H[2] - O[2]) * v
            ]), B.add(C.length), Me.set(C.length, L), C.push([
              h,
              F
            ]), h = F;
          }
          B.add(C.length), Me.set(C.length, L), C.push([
            h,
            E
          ]);
        }
        Ae = /* @__PURE__ */ new Map();
        const R = [];
        for (let u = 1; u < g.length; u++) for (let E = 0; E < c.length; E++) for (let L = 0; L < i.length - 1; L++) R.push({
          el: [
            x[`${L},${E},${u}`],
            x[`${L + 1},${E},${u}`]
          ],
          floor: u - 1,
          dir: "x",
          bay: L
        });
        for (let u = 1; u < g.length; u++) for (let E = 0; E < i.length; E++) for (let L = 0; L < c.length - 1; L++) R.push({
          el: [
            x[`${E},${L},${u}`],
            x[`${E},${L + 1},${u}`]
          ],
          floor: u - 1,
          dir: "y",
          bay: L
        });
        for (const { el: [u, E], floor: L, dir: O, bay: H } of R) {
          const h = f[u], $ = f[E];
          let v = u;
          for (let X = 1; X < l; X++) {
            const K = X / l, le = f.length;
            f.push([
              h[0] + ($[0] - h[0]) * K,
              h[1] + ($[1] - h[1]) * K,
              h[2] + ($[2] - h[2]) * K
            ]);
            const te = C.length;
            Y.add(te), Me.set(te, L), Ae.set(te, {
              dir: O,
              bay: H
            }), C.push([
              v,
              le
            ]), v = le;
          }
          const F = C.length;
          Y.add(F), Me.set(F, L), Ae.set(F, {
            dir: O,
            bay: H
          }), C.push([
            v,
            E
          ]);
        }
        if (ct = /* @__PURE__ */ new Set(), Te && Ce > 0) {
          const u = (E, L, O) => {
            for (let h = 0; h < f.length; h++) if (Math.abs(f[h][0] - E) < 1e-6 && Math.abs(f[h][1] - L) < 1e-6 && Math.abs(f[h][2] - O) < 1e-6) return h;
            const H = f.length;
            return f.push([
              E,
              L,
              O
            ]), H;
          };
          for (let E = 1; E < g.length; E++) if (Xe === "x") for (let L = 0; L < c.length - 1; L++) {
            const O = c[L], H = c[L + 1];
            for (let h = 1; h <= Ce; h++) {
              const $ = O + h / (Ce + 1) * (H - O), v = [];
              for (let F = 0; F < i.length; F++) v.push(u(i[F], $, g[E]));
              for (let F = 0; F < i.length - 1; F++) {
                const X = C.length;
                ct.add(X), Y.add(X), Me.set(X, E - 1), Ae.set(X, {
                  dir: "x",
                  bay: F
                }), C.push([
                  v[F],
                  v[F + 1]
                ]);
              }
            }
          }
          else for (let L = 0; L < i.length - 1; L++) {
            const O = i[L], H = i[L + 1];
            for (let h = 1; h <= Ce; h++) {
              const $ = O + h / (Ce + 1) * (H - O), v = [];
              for (let F = 0; F < c.length; F++) v.push(u($, c[F], g[E]));
              for (let F = 0; F < c.length - 1; F++) {
                const X = C.length;
                ct.add(X), Y.add(X), Me.set(X, E - 1), Ae.set(X, {
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
        const k = /* @__PURE__ */ new Map(), m = ht();
        for (let u = 0; u < c.length; u++) for (let E = 0; E < i.length; E++) y(E, u) || k.set(x[`${E},${u},0`], [
          ...m
        ]);
        ue = /* @__PURE__ */ new Set();
        for (const u of ye) {
          const E = g.length - 1, L = u.floors.includes(-1) ? Array.from({
            length: E
          }, (O, H) => H) : u.floors.filter((O) => O < E);
          for (const O of L) {
            let H, h, $, v;
            u.dir === "x" ? (H = u.bay, $ = u.bay + 1, h = u.axisIdx, v = u.axisIdx) : (H = u.axisIdx, $ = u.axisIdx, h = u.bay, v = u.bay + 1);
            const F = x[`${H},${h},${O}`], X = x[`${H},${h},${O + 1}`];
            let K, le;
            if (u.dir === "x" ? (K = x[`${$},${v},${O}`], le = x[`${$},${v},${O + 1}`]) : (K = x[`${$},${v},${O}`], le = x[`${$},${v},${O + 1}`]), F === void 0 || K === void 0 || X === void 0 || le === void 0) continue;
            const te = be, Q = Ye, me = f[F], de = f[K], ke = f[X], Re = f[le], q = [];
            for (let ce = 0; ce <= Q; ce++) {
              const oe = [], pe = ce / Q;
              for (let ee = 0; ee <= te; ee++) {
                const ge = ee / te, Ie = (1 - pe) * ((1 - ge) * me[0] + ge * de[0]) + pe * ((1 - ge) * ke[0] + ge * Re[0]), se = (1 - pe) * ((1 - ge) * me[1] + ge * de[1]) + pe * ((1 - ge) * ke[1] + ge * Re[1]), we = (1 - pe) * ((1 - ge) * me[2] + ge * de[2]) + pe * ((1 - ge) * ke[2] + ge * Re[2]);
                ce === 0 && ee === 0 ? oe.push(F) : ce === 0 && ee === te ? oe.push(K) : ce === Q && ee === 0 ? oe.push(X) : ce === Q && ee === te ? oe.push(le) : (oe.push(f.length), f.push([
                  Ie,
                  se,
                  we
                ]));
              }
              q.push(oe);
            }
            for (let ce = 0; ce < Q; ce++) for (let oe = 0; oe < te; oe++) {
              const pe = q[ce][oe], ee = q[ce][oe + 1], ge = q[ce + 1][oe + 1], Ie = q[ce + 1][oe], se = C.length;
              ue.add(se), Me.set(se, O), C.push([
                pe,
                ee,
                ge,
                Ie
              ]);
            }
            if (O === 0) for (let ce = 0; ce <= te; ce++) {
              const oe = q[0][ce];
              oe >= I && k.set(oe, [
                ...m
              ]);
            }
          }
        }
        if (Nt = /* @__PURE__ */ new Set(), Ze) {
          const u = l, E = l, L = /* @__PURE__ */ new Map(), O = (H, h, $) => `${Math.round(H * 1e4)},${Math.round(h * 1e4)},${Math.round($ * 1e4)}`;
          for (let H = 0; H < f.length; H++) L.set(O(f[H][0], f[H][1], f[H][2]), H);
          for (let H = 1; H < g.length; H++) {
            const h = g[H];
            for (let $ = 0; $ < i.length - 1; $++) for (let v = 0; v < c.length - 1; v++) {
              const F = i[$], X = i[$ + 1], K = c[v], le = c[v + 1], te = [];
              for (let Q = 0; Q <= E; Q++) {
                const me = [];
                for (let de = 0; de <= u; de++) {
                  const ke = F + de / u * (X - F), Re = K + Q / E * (le - K);
                  if (Q === 0 && de === 0) me.push(x[`${$},${v},${H}`]);
                  else if (Q === 0 && de === u) me.push(x[`${$ + 1},${v},${H}`]);
                  else if (Q === E && de === 0) me.push(x[`${$},${v + 1},${H}`]);
                  else if (Q === E && de === u) me.push(x[`${$ + 1},${v + 1},${H}`]);
                  else {
                    const q = O(ke, Re, h), ce = L.get(q);
                    if (ce !== void 0) me.push(ce);
                    else {
                      const oe = f.length;
                      f.push([
                        ke,
                        Re,
                        h
                      ]), L.set(q, oe), me.push(oe);
                    }
                  }
                }
                te.push(me);
              }
              for (let Q = 0; Q < E; Q++) for (let me = 0; me < u; me++) {
                const de = te[Q][me], ke = te[Q][me + 1], Re = te[Q + 1][me + 1], q = te[Q + 1][me], ce = C.length;
                Nt.add(ce), Me.set(ce, H - 1), C.push([
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
          const u = Mt === "all" || Mt === "x" || Mt === "perimeter", E = Mt === "all" || Mt === "y" || Mt === "perimeter", L = g.length - 1;
          for (let O = 0; O < L; O++) {
            if (u) for (let H = 0; H < c.length; H++) {
              if (Mt === "perimeter" && H !== 0 && H !== c.length - 1) continue;
              const h = Math.floor((i.length - 1) / 2);
              for (let $ = 0; $ < i.length - 1; $++) {
                if (Mt === "perimeter" && $ !== h || y($, H) || y($ + 1, H)) continue;
                const v = x[`${$},${H},${O}`], F = x[`${$ + 1},${H},${O + 1}`], X = x[`${$ + 1},${H},${O}`], K = x[`${$},${H},${O + 1}`];
                v !== void 0 && F !== void 0 && (C.push([
                  v,
                  F
                ]), Me.set(C.length - 1, O)), X !== void 0 && K !== void 0 && (C.push([
                  X,
                  K
                ]), Me.set(C.length - 1, O));
              }
            }
            if (E) for (let H = 0; H < i.length; H++) {
              if (Mt === "perimeter" && H !== 0 && H !== i.length - 1) continue;
              const h = Math.floor((c.length - 1) / 2);
              for (let $ = 0; $ < c.length - 1; $++) {
                if (Mt === "perimeter" && $ !== h || y(H, $) || y(H, $ + 1)) continue;
                const v = x[`${H},${$},${O}`], F = x[`${H},${$ + 1},${O + 1}`], X = x[`${H},${$ + 1},${O}`], K = x[`${H},${$},${O + 1}`];
                v !== void 0 && F !== void 0 && (C.push([
                  v,
                  F
                ]), Me.set(C.length - 1, O)), X !== void 0 && K !== void 0 && (C.push([
                  X,
                  K
                ]), Me.set(C.length - 1, O));
              }
            }
          }
        }
        return e.nodes.val = f, e.elements.val = C, e.nodeInputs && (e.nodeInputs.val = {
          supports: k
        }), Je = [
          ...i
        ], Qe = [
          ...c
        ], mt = g[g.length - 1] || 0, setTimeout(() => {
          It(), an(i, c), Kn(), Zn();
        }, 50), st(), {
          nodes: f.length,
          elements: C.length,
          nJointNodes: I
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, a = 8, d = 4) {
        ot.clear();
        const s = [], r = [], p = (M) => n + l * (1 - Math.pow(2 * M / t - 1, 2)), i = [], c = d + 1;
        for (let M = 0; M < c; M++) {
          const y = [], f = o / d * M;
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
          ]), i.push(y);
        }
        for (let M = 0; M < c; M++) {
          const y = i[M];
          r.push([
            y[0],
            y[2]
          ]), r.push([
            y[1],
            y[y.length - 1]
          ]);
          for (let f = 2; f < y.length - 1; f++) r.push([
            y[f],
            y[f + 1]
          ]);
        }
        for (let M = 0; M < d; M++) for (let y = 2; y < i[0].length; y++) r.push([
          i[M][y],
          i[M + 1][y]
        ]);
        for (let M = 0; M < d; M++) for (let y = 2; y < i[0].length - 1; y += 2) r.push([
          i[M][y],
          i[M + 1][y + 1]
        ]);
        const g = /* @__PURE__ */ new Map(), S = ht();
        for (let M = 0; M < c; M++) g.set(i[M][0], [
          ...S
        ]), g.set(i[M][1], [
          ...S
        ]);
        return e.nodes.val = s, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
          supports: g
        }), st(), {
          nodes: s.length,
          elements: r.length
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
            const o = ie.reduce((l, a) => l + a, 0) / ie.length, n = ne.reduce((l, a) => l + a, 0) / ne.length;
            Xe = o >= n ? "y" : "x", Ze = true, dt = 0.08, Bt = false, Ne();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            nt("edificio"), _e.colMat = 1, _e.vigaMat = 1, _e.steelColType = 0, _e.steelVigaType = 0, ye = [], Te = true, Ce = 2;
            const o = ie.reduce((l, a) => l + a, 0) / ie.length, n = ne.reduce((l, a) => l + a, 0) / ne.length;
            Xe = o >= n ? "y" : "x", Ze = true, dt = 0.08, Bt = true, Mt = "perimeter", Ne();
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
            nt("edificio"), J.nPisos && (J.nPisos.val = 1), J.hPiso && (J.hPiso.val = 4.5), J.nVanosX && (J.nVanosX.val = 3), J.nVanosY && (J.nVanosY.val = 2), J.nSubViga && (J.nSubViga.val = 3), ie = [
              6,
              6,
              6
            ], ne = [
              5,
              5
            ], _e.colMat = 1, _e.vigaMat = 1, _e.steelColType = 0, _e.steelVigaType = 0, ye = [], Te = true, Ce = 2, Xe = ie[0] >= ne[0] ? "y" : "x", Ze = true, dt = 0.08, ut = 3, Tt = 3, Ne();
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
            ot.clear(), nt("muro-q4"), is();
            break;
          }
          case "viga-q4":
          case "cantilever-beam":
          case "viga-cantilever": {
            ot.clear(), nt("viga-q4"), ra();
            break;
          }
          case "placa-xz":
          case "placa-cantilever":
          case "losa-cantilever": {
            ot.clear(), nt("placa-xz"), ia();
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
      plateQ4(t = 10, o = 10, n = 16, l = 16, a = "simply-supported", d = -10, s = 0.2, r = 3e7, p = 0.3, i = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][i]}]: ${t}\xD7${o}, ${n}\xD7${l} elem, BC=${a}, q=${d}, t=${s}`);
        const g = performance.now(), S = ds({
          E: r,
          nu: p,
          thickness: s,
          meshLx: t,
          meshLy: o,
          meshNx: n,
          meshNy: l,
          bcType: a,
          pressure: d,
          theoryType: i
        }), M = performance.now() - g;
        console.log(`Solved in ${M.toFixed(1)} ms`), console.log(`w_max = ${S.maxW.toExponential(6)}`), console.log(`w_center = ${(S.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${S.maxMxx.toExponential(4)}, Myy_max = ${S.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${S.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${S.maxQx.toExponential(4)}, Qy_max = ${S.maxQy.toExponential(4)}`);
        const y = S.nodeResults.map((z) => [
          z.x,
          z.y,
          0
        ]), f = S.elementResults.map((z) => [
          ...z.nodes
        ]);
        e.nodes.val = y, e.elements.val = f;
        const x = /* @__PURE__ */ new Map();
        S.nodeResults.forEach((z, R) => {
          x.set(R, [
            0,
            0,
            z.w,
            z.bx,
            z.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: x
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
        const C = /* @__PURE__ */ new Map();
        if (Math.abs(d) > 1e-30) {
          const z = d * t * o / y.length;
          y.forEach((R, k) => {
            I.has(k) || C.set(k, [
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
          loads: C
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
        t && (b = t), o && (N = o), w = jo(b, N);
        const n = Le.querySelector("#cad3d-force-unit"), l = Le.querySelector("#cad3d-length-unit");
        return n && (n.textContent = b), l && (l.textContent = N), T && nt(T), console.log(`Unidades: ${w.label} | E=${w.E.toExponential(3)} ${w.stress}`), w.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function Es() {
      return Cl(w);
    }
    function Ss() {
      return Fl(w);
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
        ie = Array(l).fill(w.defaultSpan), ne = Array(a).fill(w.defaultSpan * 0.8);
        const d = Math.round(((_c = J.nPisos) == null ? void 0 : _c.val) ?? 3), s = ((_d = J.hPiso) == null ? void 0 : _d.val) ?? 3;
        D = Array(d).fill(s);
      }
      mo(), setTimeout(() => {
        Ya(), Ne();
      }, 50);
    }
    function re(t) {
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
          const o = Math.round(re("nVanos")), n = re("spanV"), l = Math.round(re("nPisos")), a = re("hPiso");
          ot.frame(Array(o).fill(n), Array(l).fill(a));
          break;
        }
        case "edificio": {
          const o = re("Lvix") || 0, n = re("Lvdx") || 0, l = re("Lviy") || 0, a = re("Lvdy") || 0, d = Math.max(1, Math.round(re("nSubViga") || 3)), s = Math.max(1, Math.round(re("nSubCol") || 1)), r = re("hPiso"), p = D.length > 0 ? [
            ...D
          ] : Array(Math.round(re("nPisos"))).fill(r);
          ot.building([
            ...ie
          ], [
            ...ne
          ], p, d, o, n, l, a, s);
          break;
        }
        case "galpon":
          ot.galpon(re("span"), re("length"), re("height"), re("archRise"), Math.round(re("xDiv")), Math.round(re("yDiv")));
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
          is();
          break;
        case "viga-q4":
          ra();
          break;
        case "placa-xz":
          ia();
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
        if (Z.size > 0 || V.size > 0 || W) {
          const o = e.elements.val, n = o.filter((l, a) => !(Z.has(a) || V.has(a) || W && !G.has(a)));
          if (n.length !== o.length) {
            const l = /* @__PURE__ */ new Set();
            n.forEach((d) => d.forEach((s) => l.add(s)));
            const a = e.nodes.val;
            if (l.size < a.length) {
              const d = [
                ...l
              ].sort((p, i) => p - i), s = /* @__PURE__ */ new Map();
              d.forEach((p, i) => s.set(p, i)), e.nodes.val = d.map((p) => a[p]), n.forEach((p, i) => {
                n[i] = p.map((c) => s.get(c) ?? c);
              });
              const r = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val;
              if (r == null ? void 0 : r.supports) {
                const p = /* @__PURE__ */ new Map();
                r.supports.forEach((i, c) => {
                  s.has(c) && p.set(s.get(c), i);
                }), r.supports = p;
              }
              if (r == null ? void 0 : r.loads) {
                const p = /* @__PURE__ */ new Map();
                r.loads.forEach((i, c) => {
                  s.has(c) && p.set(s.get(c), i);
                }), r.loads = p;
              }
              r && (e.nodeInputs.val = r);
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
      const t = re("span"), o = Math.round(re("divisions")), n = re("height"), l = t / o, a = [], d = [];
      for (let c = 0; c <= o; c++) a.push([
        l * c,
        0,
        0
      ]);
      for (let c = 0; c <= o; c++) a.push([
        l * c,
        0,
        n
      ]);
      const s = o + 1;
      for (let c = 0; c < o; c++) d.push([
        c,
        c + 1
      ]);
      for (let c = 0; c < o; c++) d.push([
        s + c,
        s + c + 1
      ]);
      for (let c = 0; c <= o; c++) d.push([
        c,
        s + c
      ]);
      for (let c = 0; c < o; c++) c < o / 2 ? d.push([
        c,
        s + c + 1
      ]) : d.push([
        s + c,
        c + 1
      ]);
      const r = /* @__PURE__ */ new Map([
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
      ]), p = (re("CM") ?? 0) + (re("CV") ?? 0), i = /* @__PURE__ */ new Map();
      if (p !== 0) for (let c = 0; c <= o; c++) i.set(c, [
        0,
        0,
        p,
        0,
        0,
        0
      ]);
      e.nodes.val = a, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: r,
        loads: i
      }), st();
    }
    function ks() {
      const t = re("width"), o = re("height"), n = re("Ex") ?? 0, l = (re("CM") ?? 0) + (re("CV") ?? 0), a = Math.max(1, Math.round(re("nSub") || 4)), d = [
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
      const r = [
        0,
        0,
        o
      ], p = [
        t,
        0,
        o
      ];
      let i = 1;
      for (let g = 1; g < a; g++) {
        const S = g / a, M = d.length;
        d.push([
          r[0] + (p[0] - r[0]) * S,
          r[1] + (p[1] - r[1]) * S,
          r[2] + (p[2] - r[2]) * S
        ]), s.push([
          i,
          M
        ]), i = M;
      }
      s.push([
        i,
        2
      ]);
      const c = /* @__PURE__ */ new Map();
      if (n !== 0 && l === 0) c.set(2, [
        n,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (l !== 0 && n === 0) for (let g = 1; g < d.length; g++) g === 0 || g === 3 || c.set(g, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (n !== 0 && l !== 0) for (let g = 1; g < d.length; g++) g === 0 || g === 3 || c.set(g, [
        g === 2 ? n : 0,
        0,
        l,
        0,
        0,
        0
      ]);
      e.nodes.val = d, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
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
        loads: c
      }), st();
    }
    function Ts() {
      const t = re("dx"), o = re("dy"), n = re("dz"), l = Math.round(re("stories")), a = Math.max(1, Math.round(re("nSub") || 3)), d = [];
      for (let f = 0; f <= l; f++) d.push([
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
      const s = d.length, r = [
        ...d
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
      const i = [];
      for (let f = 1; f <= l; f++) {
        const x = f * 4;
        i.push([
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
      for (const [f, x] of i) {
        const I = d[f], C = d[x];
        let z = f;
        for (let R = 1; R < a; R++) {
          const k = R / a, m = r.length;
          r.push([
            I[0] + (C[0] - I[0]) * k,
            I[1] + (C[1] - I[1]) * k,
            I[2] + (C[2] - I[2]) * k
          ]), p.push([
            z,
            m
          ]), z = m;
        }
        p.push([
          z,
          x
        ]);
      }
      const c = /* @__PURE__ */ new Map();
      for (let f = 0; f < 4; f++) c.set(f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const g = re("Ex") ?? 0, S = (re("CM") ?? 0) + (re("CV") ?? 0), M = s - 2, y = /* @__PURE__ */ new Map();
      if (g !== 0 && S === 0) y.set(M, [
        g,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (S !== 0 && g === 0) for (let f = 0; f < r.length; f++) c.has(f) || y.set(f, [
        0,
        0,
        S,
        0,
        0,
        0
      ]);
      else if (g !== 0 && S !== 0) for (let f = 0; f < r.length; f++) c.has(f) || y.set(f, [
        f === M ? g : 0,
        0,
        S,
        0,
        0,
        0
      ]);
      e.nodes.val = r, e.elements.val = p, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: y
      }), st();
    }
    function Na() {
      const t = re("L"), o = Math.round(re("nElem")), n = re("F"), l = t / o, a = [], d = [];
      for (let p = 0; p <= o; p++) a.push([
        l * p,
        0,
        0
      ]);
      for (let p = 0; p < o; p++) d.push([
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
      ]), r = /* @__PURE__ */ new Map([
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
      e.nodes.val = a, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: r
      }), st();
    }
    function zs() {
      const t = re("Lx") || 15, o = re("Ly") || 10, n = re("meshSize") || 0.5, l = re("q") || -3, a = re("t") || 1, d = re("E") || 3e7, s = re("nu") || 0.3, r = d / (2 * (1 + s)), p = Pe === 1 ? "Membrana" : Pe === 2 ? "Kirchhoff" : "Mindlin", { nodes: i, elements: c, boundaryIndices: g } = Io({
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
      }), S = t * o, M = l * S / i.length, y = new Map(g.map((x) => [
        x,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), f = new Map(i.map((x, I) => [
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
      e.nodes.val = i, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: f
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(c.map((x, I) => [
          I,
          d
        ])),
        elasticitiesOrthogonal: new Map(c.map((x, I) => [
          I,
          d
        ])),
        thicknesses: new Map(c.map((x, I) => [
          I,
          a
        ])),
        poissonsRatios: new Map(c.map((x, I) => [
          I,
          s
        ])),
        shearModuli: new Map(c.map((x, I) => [
          I,
          r
        ]))
      });
      try {
        const x = Ft(i, c, e.nodeInputs.val, e.elementInputs.val);
        x && e.deformOutputs && (e.deformOutputs.val = x);
        const I = Eo(i, c, e.elementInputs.val, x);
        I && e.analyzeOutputs && (e.analyzeOutputs.val = I), console.log(`Plate 3Q [${p}]: ${i.length} nodes, ${c.length} triangles, t=${a}, E=${d}, \u03BD=${s}`);
      } catch (x) {
        console.warn("Plate 3Q analysis failed:", x.message);
      }
      setTimeout(() => It(), 50), st();
    }
    function As() {
      const t = re("Lx") || 10, o = re("Ly") || 10, n = Math.round(re("nx") || 16), l = Math.round(re("ny") || 16), a = re("t") || 0.2, d = re("q") || -10, s = re("E") || 3e7, r = re("nu") || 0.3, p = St === 1 ? "clamped" : "simply-supported", c = {
        1: 2,
        2: 1,
        3: 0
      }[Pe] ?? 0;
      return ot.plateQ4(t, o, n, l, p, d, a, s, r, c);
    }
    function Ls() {
      const t = re("a") || 6, o = re("b") || 4, n = Math.round(re("nx") || 12), l = Math.round(re("ny") || 8), a = re("t") || 0.1, d = re("q") || -10, s = re("E") || 35e6, r = re("nu") || 0.15, i = {
        1: 2,
        2: 1,
        3: 0
      }[Pe] ?? 0, c = ot.plateQ4(t, o, n, l, "simply-supported", d, a, s, r, i), g = s * a * a * a / (12 * (1 - r * r));
      let S = 0;
      for (let M = 1; M <= 19; M += 2) for (let y = 1; y <= 19; y += 2) {
        const f = M * M / (t * t) + y * y / (o * o);
        S += 1 / (M * y * f * f);
      }
      if (S *= 16 * Math.abs(d) / (Math.PI ** 6 * g), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${S.toExponential(6)}`), c) {
        const M = Math.abs((Math.abs(c.centerW || 0) - S) / S * 100);
        console.log(`   WASM w_center = ${(c.centerW || 0).toExponential(6)}, error = ${M.toFixed(2)}%`);
      }
      return c;
    }
    function Cs() {
      const t = re("t") || 0.2, o = re("q") || -10, n = re("E") || 35e6, l = re("nu") || 0.2, a = re("meshSize") || 0.6, d = [
        3.6,
        4.2,
        4.2,
        3.6
      ], s = [
        3,
        3.6,
        3
      ], r = d.reduce((h, $) => h + $, 0), p = s.reduce((h, $) => h + $, 0), i = [
        0
      ];
      for (const h of d) i.push(i[i.length - 1] + h);
      const c = [
        0
      ];
      for (const h of s) c.push(c[c.length - 1] + h);
      const g = Math.max(2, Math.round(r / a)), S = Math.max(2, Math.round(p / a)), M = r / g, y = p / S, f = [];
      for (let h = 0; h <= S; h++) for (let $ = 0; $ <= g; $++) f.push([
        $ * M,
        h * y
      ]);
      const x = [], I = /* @__PURE__ */ new Set();
      for (const h of i) for (const $ of c) {
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
      const z = {
        1: 2,
        2: 1,
        3: 0
      }[Pe] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][z]}]: ${r}\xD7${p}m, ${g}\xD7${S} elem, ${I.size} columnas`);
      const R = performance.now(), k = ds({
        E: n,
        nu: l,
        thickness: t,
        meshLx: r,
        meshLy: p,
        meshNx: g,
        meshNy: S,
        bcType: "none",
        pressure: o,
        theoryType: z,
        springs: x
      }), m = performance.now() - R;
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
      const O = /* @__PURE__ */ new Map();
      for (const h of I) O.set(h, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const H = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const h = o * r * p / u.length;
        u.forEach(($, v) => {
          O.has(v) || H.set(v, [
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
        supports: O,
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
    function Fs() {
      const t = re("L") || 4, o = re("H") || 2, n = re("t") || 0.1, l = re("E") || 2e7, a = re("nu") || 0.2, d = l / (2 * (1 + a)), s = re("q") || -100, r = re("b") || 0.8, p = re("meshSize") || 0.2, { nodes: i, elements: c, boundaryIndices: g } = Io({
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
      }), S = i, M = 0.4, y = /* @__PURE__ */ new Map();
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
      const f = (t - r) / 2, x = f + r, I = [];
      for (let m = 0; m < S.length; m++) if (Math.abs(S[m][1] - o) < 1e-6) {
        const u = S[m][0];
        u >= f - 1e-6 && u <= x + 1e-6 && I.push(m);
      }
      const C = s * r / Math.max(I.length, 1), z = /* @__PURE__ */ new Map();
      for (const m of I) z.set(m, [
        0,
        C,
        0,
        0,
        0,
        0
      ]);
      const R = {
        elasticities: new Map(c.map((m, u) => [
          u,
          l
        ])),
        elasticitiesOrthogonal: new Map(c.map((m, u) => [
          u,
          l
        ])),
        thicknesses: new Map(c.map((m, u) => [
          u,
          n
        ])),
        poissonsRatios: new Map(c.map((m, u) => [
          u,
          a
        ])),
        shearModuli: new Map(c.map((m, u) => [
          u,
          d
        ]))
      }, k = {
        supports: y,
        loads: z
      };
      try {
        const m = Ft(S, c, k, R), u = Eo(S, c, R, m), E = S.map((O) => [
          O[0],
          0,
          O[1]
        ]);
        if (e.nodes.val = E, e.elements.val = c, m && m.deformations) {
          const O = /* @__PURE__ */ new Map();
          m.deformations.forEach((H, h) => {
            O.set(h, [
              H[0],
              H[2],
              H[1],
              H[3],
              H[5],
              H[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: O
          });
        }
        if (e.nodeInputs) {
          const O = /* @__PURE__ */ new Map();
          y.forEach((h, $) => O.set($, h));
          const H = /* @__PURE__ */ new Map();
          z.forEach((h, $) => H.set($, [
            h[0],
            h[2],
            h[1],
            h[3],
            h[5],
            h[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: O,
            loads: H
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let L = 0;
        m && m.deformations && m.deformations.forEach((O) => {
          const H = Math.sqrt(O[0] * O[0] + O[1] * O[1] + O[2] * O[2]);
          L = Math.max(L, H);
        }), console.log(`Viga Alta: ${S.length} nodos, ${c.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${a}`), console.log(`  Carga: q=${s} kN/m sobre ${r}m central`), console.log(`  max|u| = ${L.toExponential(4)}`);
      } catch (m) {
        console.warn("Viga Alta analysis failed:", m.message);
      }
      setTimeout(() => It(), 50), st();
    }
    function Ps() {
      const t = re("H") || 4, o = re("B") || 3, n = re("tw") || 0.3, l = re("tb") || 0.4, a = re("meshSize") || 0.2, d = re("E") || 25e6, s = re("nu") || 0.2, r = d / (2 * (1 + s)), p = re("gamma") || 18, i = re("Ka") || 0.33, c = re("Es") || 5e4, g = re("nus") || 0.3, S = c / (2 * (1 + g)), M = re("kn") || 1e6, y = re("ks") || 1e4, f = re("gammaW") || 9.81, x = re("Hw") || 3.5, I = re("qs") || 0, C = St, z = o * 0.3, R = o * 0.7, k = [
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
      let m = [], u = [], E = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), O;
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
          const { idx: X, y: K } = v[F], le = l + t - K, te = i * p * le + i * I;
          let Q = a;
          F > 0 && F < v.length - 1 ? Q = (v[F + 1].y - v[F - 1].y) / 2 : F === 0 && v.length > 1 ? Q = (v[1].y - v[0].y) / 2 : F === v.length - 1 && v.length > 1 && (Q = (v[F].y - v[F - 1].y) / 2);
          const me = te * Q;
          Math.abs(me) > 1e-10 && L.set(X, [
            me,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        O = {
          elasticities: new Map(u.map((F, X) => [
            X,
            d
          ])),
          elasticitiesOrthogonal: new Map(u.map((F, X) => [
            X,
            d
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
            r
          ]))
        };
      } else if (C === 1 || C === 2) {
        const $ = R, v = l + t;
        if (C === 2) {
          const F = [
            [
              -z,
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
              -z,
              l,
              0
            ]
          ], X = Math.max(3, Math.ceil((v - l) / a)), K = [];
          for (let se = 0; se <= X; se++) K.push([
            n,
            l + se * (v - l) / X,
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
          for (let se = 0; se < ke; se++) Re[se] ? (oe.set(se, c), pe.set(se, c), ge.set(se, g), Ie.set(se, S), ee.set(se, 1)) : (oe.set(se, d), pe.set(se, d), ge.set(se, s), Ie.set(se, r), ee.set(se, 1));
          for (let se = q; se < u.length; se++) oe.set(se, M), pe.set(se, 0), ge.set(se, 0), Ie.set(se, y), ee.set(se, 0);
          O = {
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
            ]) : Math.abs(we - $) < a * 0.1 && E.set(se, [
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
              const Ct = L.get(yt) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ct[1] += Dt, L.set(yt, Ct);
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
              const lt = -I * Be, et = L.get(se[we].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              et[1] += lt, L.set(se[we].idx, et);
            }
          }
          console.log(`  Interfaz Goodman: ${Q.length} nodos interfaz, ${ce} elem interfaz, kn=${M}, ks=${y}`);
        } else {
          const F = [
            [
              -z,
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
              -z,
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
          const le = (q) => {
            const ce = (m[q[0]][0] + m[q[1]][0] + m[q[2]][0]) / 3, oe = (m[q[0]][1] + m[q[1]][1] + m[q[2]][1]) / 3, pe = ce >= -z && ce <= R && oe >= 0 && oe <= l, ee = ce >= 0 && ce <= n && oe >= l && oe <= l + t;
            return pe || ee;
          }, te = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), Re = [];
          for (let q = 0; q < u.length; q++) {
            const ce = le(u[q]);
            Re.push(!ce), ce ? (te.set(q, d), Q.set(q, d), de.set(q, s), ke.set(q, r), me.set(q, 1)) : (te.set(q, c), Q.set(q, c), de.set(q, g), ke.set(q, S), me.set(q, 1));
          }
          O = {
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
            ]) : Math.abs(ce - $) < a * 0.1 && E.set(q, [
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
              const we = L.get(se) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              we[1] += Ie, L.set(se, we);
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
              const pe = -I * oe, ee = L.get(q[ce].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ee[1] += pe, L.set(q[ce].idx, ee);
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
          const te = m[le][0], Q = m[le][1];
          Math.abs(te - n) < a * 0.6 && Q >= l - 1e-6 && K.push({
            idx: le,
            y: Q
          });
        }
        K.sort((le, te) => le.y - te.y);
        for (let le = 0; le < K.length; le++) {
          const { idx: te, y: Q } = K[le], me = Math.max(0, v - Q);
          if (me <= 0 || Q < X - 1e-6) continue;
          const de = Math.min(me, F), ke = f * de;
          let Re = a;
          le > 0 && le < K.length - 1 ? Re = (K[le + 1].y - K[le - 1].y) / 2 : le === 0 && K.length > 1 ? Re = (K[1].y - K[0].y) / 2 : le === K.length - 1 && K.length > 1 && (Re = (K[le].y - K[le - 1].y) / 2);
          const q = ke * Re;
          Math.abs(q) > 1e-10 && L.set(te, [
            q,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        O = {
          elasticities: new Map(u.map((le, te) => [
            te,
            d
          ])),
          elasticitiesOrthogonal: new Map(u.map((le, te) => [
            te,
            d
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
            r
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
        const $ = Ft(m, u, H, O), v = u.filter((me) => me.length === 3), F = {};
        for (const me of Object.keys(O)) {
          const de = O[me];
          if (de && de instanceof Map) {
            const ke = /* @__PURE__ */ new Map();
            let Re = 0;
            for (let q = 0; q < u.length; q++) u[q].length === 3 && (de.has(q) && ke.set(Re, de.get(q)), Re++);
            F[me] = ke;
          }
        }
        const X = Eo(m, v, F, $), K = m.map((me) => [
          me[0],
          0,
          me[1]
        ]);
        if (e.nodes.val = K, e.elements.val = v, $ && $.deformations) {
          const me = /* @__PURE__ */ new Map();
          $.deformations.forEach((de, ke) => {
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
        L.forEach((me, de) => te.set(de, [
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
        $ && $.deformations && $.deformations.forEach((me) => {
          const de = Math.sqrt(me[0] * me[0] + me[1] * me[1] + me[2] * me[2]);
          Q = Math.max(Q, de);
        }), console.log(`Muro Contencion [${h[C]}]: ${m.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${i}, gamma=${p}, qs=${I}`), C === 1 && console.log(`  Es=${c}, nus=${g}`), C === 2 && console.log(`  Es=${c}, nus=${g}, kn=${M}, ks=${y}`), C === 3 && console.log(`  gammaW=${f}, Hw=${x}`), console.log(`  max|u| = ${Q.toExponential(4)}`);
      } catch ($) {
        console.warn("Muro Contencion failed:", $.message);
      }
      setTimeout(() => It(), 50), st();
    }
    function Rs() {
      const t = re("Lx") || 2, o = re("Ly") || 2, n = re("t") || 0.5, l = re("colA") || 0.4, a = re("colH") || 1.5, d = Math.round(re("nx") || 8), s = Math.round(re("ny") || 8), r = re("E") || 25e6, p = re("nu") || 0.2, i = re("P") || -500, c = re("Mx") || 0, g = re("My") || 0, S = re("ks") || 2e4, M = t / d, y = o / s, f = t / 2, x = o / 2, I = l / 2, C = [];
      for (let E = 0; E <= s; E++) for (let L = 0; L <= d; L++) {
        const O = E * (d + 1) + L;
        let H = M, h = y;
        (L === 0 || L === d) && (H = M / 2), (E === 0 || E === s) && (h = y / 2), C.push({
          node: O,
          dof: 0,
          k: S * H * h
        });
      }
      let z = 0;
      for (let E = 0; E <= s; E++) for (let L = 0; L <= d; L++) Math.abs(L * M - f) <= I + 1e-6 && Math.abs(E * y - x) <= I + 1e-6 && z++;
      const R = i / Math.max(z, 1), k = [];
      for (let E = 0; E <= s; E++) for (let L = 0; L <= d; L++) {
        const O = L * M, H = E * y;
        Math.abs(O - f) <= I + 1e-6 && Math.abs(H - x) <= I + 1e-6 && k.push({
          node: E * (d + 1) + L,
          dof: 0,
          value: R
        });
      }
      if (Math.abs(c) > 1e-6) {
        const E = I > 1e-6 ? I : y, L = c / E;
        for (let O = 0; O <= s; O++) for (let H = 0; H <= d; H++) {
          const h = H * M, $ = O * y;
          if (Math.abs(h - f) <= I + 1e-6 && Math.abs($ - x) <= I + 1e-6) {
            const v = $ - x;
            if (Math.abs(v) > 1e-6) {
              const F = v > 0 ? 1 : -1;
              k.push({
                node: O * (d + 1) + H,
                dof: 0,
                value: F * L / z * 2
              });
            }
          }
        }
      }
      if (Math.abs(g) > 1e-6) {
        const E = I > 1e-6 ? I : M, L = g / E;
        for (let O = 0; O <= s; O++) for (let H = 0; H <= d; H++) {
          const h = H * M, $ = O * y;
          if (Math.abs(h - f) <= I + 1e-6 && Math.abs($ - x) <= I + 1e-6) {
            const v = h - f;
            if (Math.abs(v) > 1e-6) {
              const F = v > 0 ? 1 : -1;
              k.push({
                node: O * (d + 1) + H,
                dof: 0,
                value: F * L / z * 2
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
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${d}x${s} elem`), console.log(`  col=${l}m, P=${i}, Mx=${c}, My=${g}, ks=${S}`);
      try {
        const E = ds({
          E: r,
          nu: p,
          thickness: n,
          meshLx: t,
          meshLy: o,
          meshNx: d,
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
        ]), O = L.length;
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
          O,
          O + 4
        ]), H.push([
          O + 1,
          O + 5
        ]), H.push([
          O + 2,
          O + 6
        ]), H.push([
          O + 3,
          O + 7
        ]), H.push([
          O + 4,
          O + 5
        ]), H.push([
          O + 5,
          O + 6
        ]), H.push([
          O + 6,
          O + 7
        ]), H.push([
          O + 7,
          O + 4
        ]), H.push([
          O,
          O + 1
        ]), H.push([
          O + 1,
          O + 2
        ]), H.push([
          O + 2,
          O + 3
        ]), H.push([
          O + 3,
          O
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
          const le = X.x, te = X.y;
          (le < 1e-6 || le > t - 1e-6 || te < 1e-6 || te > o - 1e-6) && $.set(K, [
            false,
            false,
            true,
            false,
            false,
            false
          ]);
        });
        const v = /* @__PURE__ */ new Map();
        if (v.set(O + 4, [
          0,
          0,
          i / 4,
          0,
          0,
          0
        ]), v.set(O + 5, [
          0,
          0,
          i / 4,
          0,
          0,
          0
        ]), v.set(O + 6, [
          0,
          0,
          i / 4,
          0,
          0,
          0
        ]), v.set(O + 7, [
          0,
          0,
          i / 4,
          0,
          0,
          0
        ]), e.nodeInputs && (e.nodeInputs.val = {
          supports: $,
          loads: v
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const X = E.elementResults.length, K = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map();
          E.elementResults.forEach((Q, me) => {
            K.set(me, [
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
            bendingXX: K,
            bendingYY: le,
            bendingXY: te
          };
        }
        const F = tt();
        F && (F.settings.shellResults.val = "bendingXX");
      } catch (E) {
        console.warn("Zapata solver failed:", E.message);
      }
      setTimeout(() => It(), 50), st();
    }
    function Os() {
      const t = re("Lx") || 0.4, o = re("Ly") || 0.4, n = re("t") || 0.025, l = re("dBolt") || 0.022, a = re("sx") || 0.28, d = re("sy") || 0.28, s = re("colA") || 0.2, r = re("meshSize") || 8e-3, p = re("E") || 2e8, i = re("nu") || 0.3, c = p / (2 * (1 + i)), g = re("P") || -200, S = Math.round(re("nBolts") || 4), M = t / 2, y = o / 2, f = l / 2, x = s / 2, I = [];
      S >= 4 && (I.push([
        M - a / 2,
        y - d / 2
      ]), I.push([
        M + a / 2,
        y - d / 2
      ]), I.push([
        M + a / 2,
        y + d / 2
      ]), I.push([
        M - a / 2,
        y + d / 2
      ])), S >= 6 && (I.push([
        M,
        y - d / 2
      ]), I.push([
        M,
        y + d / 2
      ])), S >= 8 && (I.push([
        M - a / 2,
        y
      ]), I.push([
        M + a / 2,
        y
      ]));
      const { nodes: C, elements: z } = Io({
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
        maxMeshSize: r
      }), R = (h, $) => {
        for (const [v, F] of I) if ((h - v) * (h - v) + ($ - F) * ($ - F) < f * f) return true;
        return false;
      }, k = z.filter((h) => {
        const $ = (C[h[0]][0] + C[h[1]][0] + C[h[2]][0]) / 3, v = (C[h[0]][1] + C[h[1]][1] + C[h[2]][1]) / 3;
        return !R($, v);
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
      const O = g / Math.max(L, 1);
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
          F[2] += O, E.set(h, F);
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
          i
        ])),
        shearModuli: new Map(k.map((h, $) => [
          $,
          c
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${S} pernos d=${l * 1e3}mm`), console.log(`  P=${g} kN, col=${s * 1e3}mm, mesh=${r * 1e3}mm`), console.log(`  ${k.length} triangulos, ${m.length} nodos`);
      try {
        const h = Ft(m, k, {
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
    function Ns() {
      const t = re("colB") || 0.3, o = re("colH") || 0.3, n = re("colT") || 8e-3, l = re("colLen") || 1.5, a = re("Lx") || 0.45, d = re("Ly") || 0.45, s = re("tPlaca") || 0.025, r = re("dBolt") || 0.022, p = re("sx") || 0.32, i = re("sy") || 0.32, c = Math.round(re("nSubColV") || 6), g = Math.round(re("nSubColH") || 4), S = Math.round(re("nSubPlaca") || 10), M = re("E") || 2e8, y = re("nu") || 0.3, f = M / (2 * (1 + y)), x = re("P") || -300, I = a / 2, C = d / 2, z = r / 2, R = t / 2, k = o / 2, m = [], u = [], E = S, L = a / E, O = d / E, H = (pe, ee) => ee * (E + 1) + pe;
      for (let pe = 0; pe <= E; pe++) for (let ee = 0; ee <= E; ee++) m.push([
        ee * L,
        pe * O,
        0
      ]);
      const h = [
        [
          I - p / 2,
          C - i / 2
        ],
        [
          I + p / 2,
          C - i / 2
        ],
        [
          I + p / 2,
          C + i / 2
        ],
        [
          I - p / 2,
          C + i / 2
        ]
      ], $ = (pe, ee) => {
        for (const [ge, Ie] of h) if ((pe - ge) * (pe - ge) + (ee - Ie) * (ee - Ie) < z * z) return true;
        return false;
      }, v = u.length;
      for (let pe = 0; pe < E; pe++) for (let ee = 0; ee < E; ee++) {
        const ge = (ee + 0.5) * L, Ie = (pe + 0.5) * O;
        $(ge, Ie) || u.push([
          H(ee, pe),
          H(ee + 1, pe),
          H(ee + 1, pe + 1),
          H(ee, pe + 1)
        ]);
      }
      const F = u.length - v, X = c, K = g, le = [
        [
          I - R,
          C - k
        ],
        [
          I + R,
          C - k
        ],
        [
          I + R,
          C + k
        ],
        [
          I - R,
          C + k
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
        for (let ge = 0; ge < (E + 1) * (E + 1); ge++) if (Math.abs(m[ge][0] - pe) < L * 0.3 && Math.abs(m[ge][1] - ee) < O * 0.3 && Math.abs(m[ge][2]) < 1e-6) return ge;
        return -1;
      };
      for (const [pe, ee] of Q) {
        const [ge, Ie] = le[pe], [se, we] = le[ee], Be = [];
        for (let lt = 0; lt <= X; lt++) {
          const et = [], vt = lt / X * l;
          for (let Dt = 0; Dt <= K; Dt++) {
            const yt = Dt / K, Ct = ge + yt * (se - ge), go = Ie + yt * (we - Ie);
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
        for (let lt = 0; lt < X; lt++) for (let et = 0; et < K; et++) u.push([
          Be[lt][et],
          Be[lt][et + 1],
          Be[lt + 1][et + 1],
          Be[lt + 1][et]
        ]);
      }
      const de = u.length - te, ke = /* @__PURE__ */ new Map();
      for (let pe = 0; pe < (E + 1) * (E + 1); pe++) {
        const ee = m[pe][0], ge = m[pe][1];
        for (const [Ie, se] of h) {
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
      const ce = x / Math.max(q.length, 1);
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
      for (let pe = v; pe < v + F; pe++) oe.elasticities.set(pe, M), oe.poissonsRatios.set(pe, y), oe.thicknesses.set(pe, s), oe.shearModuli.set(pe, f);
      for (let pe = te; pe < te + de; pe++) oe.elasticities.set(pe, M), oe.poissonsRatios.set(pe, y), oe.thicknesses.set(pe, n), oe.shearModuli.set(pe, f);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${a * 1e3}x${d * 1e3}mm, t=${s * 1e3}mm, 4 pernos d=${r * 1e3}mm`), console.log(`  ${F} Q4 placa + ${de} Q4 columna = ${u.length} total`), console.log(`  ${m.length} nodos, P=${x} kN`);
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
      const t = re("H") || 6, o = re("angle") || 45, n = re("bTop") || 3, l = re("bBot") || 3, a = re("meshSize") || 2, d = re("E") || 5e4, s = re("nu") || 0.3, r = re("gamma") || 18, p = re("c") || 15, i = re("phi") || 30, c = re("qs") || 0, g = t / Math.tan(o * Math.PI / 180), S = l + g + n, M = t, y = [
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
      }), I = f, C = [], z = /* @__PURE__ */ new Map();
      for (let k = 0; k < I.length; k++) {
        const m = I[k][0], u = I[k][1];
        Math.abs(u + M) < 1e-6 ? (C.push({
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
        ])) : (Math.abs(m) < 1e-6 || Math.abs(m - S) < 1e-6) && (C.push({
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
        const k = I.map(($) => [
          $[0],
          $[1]
        ]), m = x.map(($) => [
          $[0],
          $[1],
          $[2]
        ]), u = gl({
          nodes: k,
          elements: m,
          E: d,
          nu: s,
          gamma: r,
          c: p,
          phi: i,
          thickness: 1,
          supports: C,
          surcharge: c,
          surfaceYThreshold: R
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
          supports: z
        }), e.elementInputs && (e.elementInputs.val = {});
        const O = /* @__PURE__ */ new Map();
        for (let $ = 0; $ < u.plasticStrain.length; $++) {
          const v = u.plasticStrain[$];
          O.set($, [
            v,
            v,
            v
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: O
        });
        let H = 0;
        for (const [$, v] of u.displacements) {
          const F = Math.sqrt($ * $ + v * v);
          H = Math.max(H, F);
        }
        let h = 0;
        for (const $ of u.plasticStrain) h = Math.max(h, $);
        console.log(`Talud SRM: ${I.length} nodos, ${x.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${p} kPa, \u03C6=${i}\xB0, \u03B3=${r}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${u.fos.toFixed(3)}`), console.log(`  max|u| = ${H.toExponential(4)}`), console.log(`  max \u03B5_pl = ${h.toExponential(4)}`), u.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : u.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
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
      const o = nn.find((n) => n.id === N);
      return t / o.toM;
    }
    function At(t) {
      const o = nn.find((n) => n.id === N);
      return t * o.toM;
    }
    function Oo(t) {
      const o = hs.find((l) => l.id === U.forceId), n = nn.find((l) => l.id === U.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function Hn(t) {
      const o = hs.find((l) => l.id === U.forceId), n = nn.find((l) => l.id === U.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function jn() {
      return U.label;
    }
    function _a() {
      switch (nn.find((o) => o.id === N).id) {
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
      const d = _e.steelVigaType, s = d === 0 ? Tn() : zn();
      if (_e.vigaMat === 0) {
        for (let r = 0; r < o.length; r++) {
          const p = o[r], i = `b${n}${r}`, c = `h${n}${r}`, g = {};
          g[i] = +zt(p.b).toFixed(2), g[c] = +zt(p.h).toFixed(2), t.addBinding(g, i, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${r + 1}`
          }), t.addBinding(g, c, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const p = (_a2 = r.target) == null ? void 0 : _a2.key, i = p == null ? void 0 : p.match(new RegExp(`^b${n}(\\d+)$`)), c = p == null ? void 0 : p.match(new RegExp(`^h${n}(\\d+)$`));
          i && (o[parseInt(i[1])].b = At(r.value), Ne()), c && (o[parseInt(c[1])].h = At(r.value), Ne());
        });
      } else if (d <= 1) {
        for (let r = 0; r < o.length; r++) {
          const p = {};
          p[`p${n}${r}`] = o[r].profileIdx ?? 0, t.addBinding(p, `p${n}${r}`, {
            label: `sv${n}${r + 1}`,
            options: s
          });
        }
        t.on("change", (r) => {
          var _a2, _b;
          const i = (_b = (_a2 = r.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          i && (o[parseInt(i[1])].profileIdx = r.value, Ne());
        });
      } else if (d === 2) {
        for (let r = 0; r < o.length; r++) {
          const p = o[r], i = {}, c = `${n}${r}`;
          i[`bf${c}`] = +zt(p.bf ?? 0.2).toFixed(3), i[`h${c}`] = +zt(p.hf ?? 0.4).toFixed(3), i[`tf${c}`] = +zt(p.tf ?? 0.015).toFixed(3), i[`tw${c}`] = +zt(p.tw ?? 0.01).toFixed(3), t.addBinding(i, `bf${c}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${n}${r + 1}`
          }), t.addBinding(i, `h${c}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          }), t.addBinding(i, `tf${c}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `tf sv${n}${r + 1}`
          }), t.addBinding(i, `tw${c}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `tw sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const p = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let i = 0; i < o.length; i++) {
            const c = `${n}${i}`;
            p === `bf${c}` && (o[i].bf = At(r.value), Ne()), p === `h${c}` && (o[i].hf = At(r.value), Ne()), p === `tf${c}` && (o[i].tf = At(r.value), Ne()), p === `tw${c}` && (o[i].tw = At(r.value), Ne());
          }
        });
      } else {
        for (let r = 0; r < o.length; r++) {
          const p = o[r], i = {}, c = `${n}${r}`;
          i[`bc${c}`] = +zt(p.bc ?? 0.2).toFixed(3), i[`hc${c}`] = +zt(p.hc ?? 0.3).toFixed(3), i[`t${c}`] = +zt(p.t ?? 8e-3).toFixed(3), t.addBinding(i, `bc${c}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${r + 1}`
          }), t.addBinding(i, `hc${c}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          }), t.addBinding(i, `t${c}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `t sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const p = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let i = 0; i < o.length; i++) {
            const c = `${n}${i}`;
            p === `bc${c}` && (o[i].bc = At(r.value), Ne()), p === `hc${c}` && (o[i].hc = At(r.value), Ne()), p === `t${c}` && (o[i].t = At(r.value), Ne());
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
      const n = w, l = Math.round(((_a2 = J.nPisos) == null ? void 0 : _a2.val) ?? 3), a = _a(), d = Da(), s = ie.length || 1, r = ne.length || 1;
      for (; _e.perFloor.length < l; ) {
        const m = _e.perFloor.length > 0 ? JSON.parse(JSON.stringify(_e.perFloor[_e.perFloor.length - 1])) : ho(s, r);
        _e.perFloor.push(m);
      }
      _e.perFloor.length > l && (_e.perFloor.length = l);
      for (const m of _e.perFloor) {
        for (; m.vigasX.length < s; ) m.vigasX.push(m.vigasX.length > 0 ? {
          ...m.vigasX[m.vigasX.length - 1]
        } : bt());
        for (m.vigasX.length > s && (m.vigasX.length = s); m.vigasY.length < r; ) m.vigasY.push(m.vigasY.length > 0 ? {
          ...m.vigasY[m.vigasY.length - 1]
        } : bt());
        m.vigasY.length > r && (m.vigasY.length = r);
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
          min: d[0],
          max: d[1],
          step: d[2],
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
      const i = {
        vigaMat: _e.vigaMat
      };
      if (qt.addBinding(i, "vigaMat", {
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
      const c = _e.steelColType === 0 ? Tn() : zn();
      _e.steelVigaType === 0 ? Tn() : zn();
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
        const u = _e.perFloor[m], E = qt.addFolder({
          title: `${A("Piso")} ${m + 1}`,
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
          }), E.on("change", (O) => {
            var _a3;
            ((_a3 = O.target) == null ? void 0 : _a3.key) === "dCol" && (u.dCol = At(O.value), Ne());
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
          }), E.on("change", (O) => {
            var _a3, _b;
            ((_a3 = O.target) == null ? void 0 : _a3.key) === "bCol" && (u.bCol = At(O.value), Ne()), ((_b = O.target) == null ? void 0 : _b.key) === "hCol" && (u.hCol = At(O.value), Ne());
          });
        }
        else if (_e.colMat === 1) if (_e.steelColType <= 1) {
          const L = {
            col: u.colProfileIdx
          };
          E.addBinding(L, "col", {
            label: A("Columna"),
            options: c
          }).on("change", (O) => {
            u.colProfileIdx = O.value, Ne();
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
          }), E.on("change", (O) => {
            var _a3, _b, _c, _d;
            ((_a3 = O.target) == null ? void 0 : _a3.key) === "bf" && (u.colBf = At(O.value), Ne()), ((_b = O.target) == null ? void 0 : _b.key) === "h" && (u.colHf = At(O.value), Ne()), ((_c = O.target) == null ? void 0 : _c.key) === "tf" && (u.colTf = At(O.value), Ne()), ((_d = O.target) == null ? void 0 : _d.key) === "tw" && (u.colTw = At(O.value), Ne());
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
          }), E.on("change", (O) => {
            var _a3, _b, _c;
            ((_a3 = O.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = At(O.value), Ne()), ((_b = O.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = At(O.value), Ne()), ((_c = O.target) == null ? void 0 : _c.key) === "t" && (u.colT = At(O.value), Ne());
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
          const O = +Oo(1e8).toFixed(0), H = +Oo(3e8).toFixed(0), h = Math.max(1, Math.round((H - O) / 200));
          E.addBinding(L, "Es", {
            min: O,
            max: H,
            step: h,
            label: `Es (${jn()})`
          }), E.addBinding(L, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), E.addBinding(L, "fc", {
            min: d[0],
            max: d[1],
            step: d[2],
            label: `f'c (${jn()})`
          }), E.addBinding(L, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), E.on("change", ($) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = $.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = At($.value), Ne()), ((_b = $.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = At($.value), Ne()), ((_c = $.target) == null ? void 0 : _c.key) === "t" && (u.colT = At($.value), Ne()), ((_d = $.target) == null ? void 0 : _d.key) === "Es" && (u.colEs = Hn($.value), Ne()), ((_e2 = $.target) == null ? void 0 : _e2.key) === "nuS" && (u.colNuS = $.value, Ne()), ((_f = $.target) == null ? void 0 : _f.key) === "fc" && (u.colFc = Hn($.value), Ne()), ((_g = $.target) == null ? void 0 : _g.key) === "nuC" && (u.colNuC = $.value, Ne());
          });
        }
        if (u.vigasX.length > 0) {
          const L = E.addFolder({
            title: `${A("Vigas X")} (${u.vigasX.length})`,
            expanded: false
          });
          _s(L, u.vigasX, "x", a, g);
        }
        if (u.vigasY.length > 0) {
          const L = E.addFolder({
            title: `${A("Vigas Y")} (${u.vigasY.length})`,
            expanded: false
          });
          _s(L, u.vigasY, "y", a, g);
        }
      }
      qt.addBlade({
        view: "separator"
      });
      const S = qt.addFolder({
        title: A("Vigas Secundarias"),
        expanded: false
      }), M = {
        activar: Te,
        direccion: Xe === "x" ? 0 : 1,
        cantidad: Ce
      };
      S.addBinding(M, "activar", {
        label: A("Activar")
      }), S.addBinding(M, "direccion", {
        label: A("Corren en"),
        options: {
          [A("X (entre ejes Y)")]: 0,
          [A("Y (entre ejes X)")]: 1
        }
      }), S.addBinding(M, "cantidad", {
        min: 1,
        max: 5,
        step: 1,
        label: A("Cantidad/vano")
      }), S.on("change", (m) => {
        var _a3, _b, _c;
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (Te = m.value, Ne()), ((_b = m.target) == null ? void 0 : _b.key) === "direccion" && (Xe = m.value === 0 ? "x" : "y", Ne()), ((_c = m.target) == null ? void 0 : _c.key) === "cantidad" && (Ce = Math.round(m.value), Ne());
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
      const x = qt.addFolder({
        title: A("Muros de Corte"),
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
        label: `${A("Espesor")} (${n.length})`
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
      const C = ie.length || 1, z = ne.length || 1, R = C + 1, k = z + 1;
      if (C > 0) {
        const m = x.addFolder({
          title: `${A("Muros")} dir X (${C} ${A("vanos")})`,
          expanded: false
        });
        for (let u = 0; u < C; u++) for (let E = 0; E < k; E++) {
          const L = `wx_${u}_${E}`, O = ye.some(($) => $.dir === "x" && $.bay === u && $.axisIdx === E), H = {};
          H[L] = O;
          const h = `${A("Vano")} X${u + 1} / ${A("Eje")} Y${String.fromCharCode(65 + E)}`;
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
      if (z > 0) {
        const m = x.addFolder({
          title: `${A("Muros")} dir Y (${z} ${A("vanos")})`,
          expanded: false
        });
        for (let u = 0; u < z; u++) for (let E = 0; E < R; E++) {
          const L = `wy_${u}_${E}`, O = ye.some(($) => $.dir === "y" && $.bay === u && $.axisIdx === E), H = {};
          H[L] = O;
          const h = `${A("Vano")} Y${u + 1} / ${A("Eje")} X${E + 1}`;
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
          muros: `${ye.length} ${A("ubicaciones")}`
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
        const d = $e.addFolder({
          title: A("Rangos"),
          expanded: false
        });
        for (const s of n) {
          const r = {
            min: J[s.key].min,
            max: J[s.key].max
          };
          d.addBinding(r, "min", {
            label: `${s.key} min`,
            step: s.step
          }), d.addBinding(r, "max", {
            label: `${s.key} max`,
            step: s.step
          }), d.on("change", () => {
            J[s.key] && (J[s.key].min = r.min, J[s.key].max = r.max, J[s.key].val < r.min && (J[s.key].val = r.min), J[s.key].val > r.max && (J[s.key].val = r.max)), mo(), Ne();
          });
        }
        $e.on("change", (s) => {
          var _a2, _b;
          const r = (_a2 = s.target) == null ? void 0 : _a2.key;
          if (r && J[r]) {
            if (J[r].val = s.value, T === "edificio" && (r === "nVanosX" || r === "nVanosY" || r === "nPisos")) {
              if (r === "nVanosX" || r === "nVanosY") {
                const p = Math.round(J.nVanosX.val), i = Math.round(J.nVanosY.val);
                for (; ie.length < p; ) ie.push(ie[ie.length - 1] ?? w.defaultSpan);
                for (ie.length > p && (ie.length = p); ne.length < i; ) ne.push(ne[ne.length - 1] ?? w.defaultSpan * 0.8);
                ne.length > i && (ne.length = i);
              }
              if (r === "nPisos" || r === "hPiso") {
                const p = Math.round(J.nPisos.val), i = ((_b = J.hPiso) == null ? void 0 : _b.val) ?? 3;
                for (; D.length < p; ) D.push(D[D.length - 1] ?? i);
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
          let d = function() {
            var _a2, _b, _c, _d;
            const p = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", i = ((_a2 = J.Lvix) == null ? void 0 : _a2.val) || 0, c = ((_b = J.Lvdx) == null ? void 0 : _b.val) || 0, g = ((_c = J.Lviy) == null ? void 0 : _c.val) || 0, S = ((_d = J.Lvdy) == null ? void 0 : _d.val) || 0;
            let M = "X: ";
            i > 0 && (M += `\u251C${i.toFixed(1)}\u2524`);
            for (let x = 0; x < ie.length; x++) M += `[${p[x + (i > 0 ? 1 : 0)]}]\u2500\u2500${ie[x].toFixed(1)}\u2500\u2500`;
            M += `[${p[ie.length + (i > 0 ? 1 : 0)]}]`, c > 0 && (M += `\u251C${c.toFixed(1)}\u2524`);
            let y = "Y: ";
            g > 0 && (y += `\u251C${g.toFixed(1)}\u2524`);
            for (let x = 0; x < ne.length; x++) y += `[${x + 1 + (g > 0 ? 1 : 0)}]\u2500\u2500${ne[x].toFixed(1)}\u2500\u2500`;
            y += `[${ne.length + 1 + (g > 0 ? 1 : 0)}]`, S > 0 && (y += `\u251C${S.toFixed(1)}\u2524`);
            let f = "Z: ";
            for (let x = 0; x < D.length; x++) f += `P${x + 1}=${D[x].toFixed(1)} `;
            r.textContent = M + `
` + y + `
` + f;
          };
          a.innerHTML = "";
          const s = w;
          try {
            vo = new mn({
              title: `${A("Luces")} (${s.length})`,
              container: a
            });
            const p = vo.addFolder({
              title: A("Luces X"),
              expanded: true
            });
            for (let c = 0; c < ie.length; c++) {
              const g = c, S = {
                v: ie[c]
              };
              p.addBinding(S, "v", {
                min: s.spanRange[0],
                max: s.spanRange[1],
                step: s.spanRange[2],
                label: `svx${c + 1}`
              }).on("change", (M) => {
                ie[g] = M.value, Ne();
              });
            }
            const i = vo.addFolder({
              title: A("Luces Y"),
              expanded: true
            });
            for (let c = 0; c < ne.length; c++) {
              const g = c, S = {
                v: ne[c]
              };
              i.addBinding(S, "v", {
                min: s.spanRange[0],
                max: s.spanRange[1],
                step: s.spanRange[2],
                label: `svy${c + 1}`
              }).on("change", (M) => {
                ne[g] = M.value, Ne();
              });
            }
            if (D.length > 0) {
              const c = vo.addFolder({
                title: A("Alturas por Piso"),
                expanded: true
              });
              for (let g = 0; g < D.length; g++) {
                const S = g, M = {
                  v: D[g]
                };
                c.addBinding(M, "v", {
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
          const r = document.createElement("div");
          r.style.cssText = "font-family:monospace;font-size:10px;color:#aaa;padding:6px;background:#1a1a2e;border-radius:4px;margin-top:6px;line-height:1.6;white-space:pre;overflow-x:auto;", d(), a.appendChild(r);
        }
      }
      if (No(), $e) {
        $e.addBlade({
          view: "separator"
        });
        const a = kn()[T];
        if (a && a.length > 0) {
          const d = {};
          a.forEach((r, p) => {
            d[r.label] = p;
          });
          const s = {
            apoyo: St
          };
          $e.addBinding(s, "apoyo", {
            label: A("Apoyo"),
            options: d
          }).on("change", (r) => {
            St = r.value, Ne();
          });
        }
        if (T === "placa-3q" || T === "placa-q4") {
          const d = {
            teoria: Pe
          };
          $e.addBinding(d, "teoria", {
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
        const d = xo.addFolder({
          title: A("Rangos"),
          expanded: false
        });
        for (const s of l) {
          const r = {
            min: gt[s.key].min,
            max: gt[s.key].max
          };
          d.addBinding(r, "min", {
            label: `${s.key} min`,
            step: s.step
          }), d.addBinding(r, "max", {
            label: `${s.key} max`,
            step: s.step
          }), d.on("change", () => {
            gt[s.key] && (gt[s.key].min = r.min, gt[s.key].max = r.max, gt[s.key].val < r.min && (gt[s.key].val = r.min), gt[s.key].val > r.max && (gt[s.key].val = r.max)), mo(), Ne();
          });
        }
        xo.on("change", (s) => {
          var _a2;
          const r = (_a2 = s.target) == null ? void 0 : _a2.key;
          if (r && gt[r]) {
            if (gt[r].val = s.value, e.nodeInputs) {
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
        setParam: (a, d) => {
          if (J[a]) J[a].val = d, Ne(), mo();
          else if (gt[a]) {
            if (gt[a].val = d, e.nodeInputs) {
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
          for (const d in J) a[d] = J[d].val;
          for (const d in gt) a[d] = gt[d].val;
          return a;
        },
        setGenerator: nt,
        createCustomPanel: (a, d, s) => Ba(a, d, s),
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
        const r = document.querySelector("#parameters");
        r ? (_a2 = r.parentElement) == null ? void 0 : _a2.insertBefore(l, r.nextSibling) : document.body.appendChild(l);
      }
      const a = document.createElement("div");
      a.className = "cad3d-custom-panel", a.style.marginBottom = "4px", l.appendChild(a);
      const d = new mn({
        title: t,
        container: a
      }), s = {};
      for (const [r, p] of Object.entries(o)) {
        const i = p.label || r;
        if (Array.isArray(p.value)) {
          s[r] = p.value;
          const c = {
            [r]: p.value.join(", ")
          };
          d.addBinding(c, r, {
            label: i
          }).on("change", (g) => {
            s[r] = g.value.split(",").map((S) => parseFloat(S.trim())).filter((S) => !isNaN(S)), n && n({
              ...s
            });
          });
        } else if (p.options) {
          s[r] = p.value;
          const c = {
            [r]: p.value
          }, g = {};
          for (const S of p.options) g[S] = S;
          d.addBinding(c, r, {
            label: i,
            options: g
          }).on("change", (S) => {
            s[r] = S.value, n && n({
              ...s
            });
          });
        } else if (typeof p.value == "boolean") {
          s[r] = p.value;
          const c = {
            [r]: p.value
          };
          d.addBinding(c, r, {
            label: i
          }).on("change", (g) => {
            s[r] = g.value, n && n({
              ...s
            });
          });
        } else if (typeof p.value == "string") {
          s[r] = p.value;
          const c = {
            [r]: p.value
          };
          d.addBinding(c, r, {
            label: i
          }).on("change", (g) => {
            s[r] = g.value, n && n({
              ...s
            });
          });
        } else {
          s[r] = p.value;
          const c = {
            [r]: p.value
          }, g = {
            label: i
          };
          p.min !== void 0 && (g.min = p.min), p.max !== void 0 && (g.max = p.max), p.step !== void 0 && (g.step = p.step), d.addBinding(c, r, g).on("change", (S) => {
            s[r] = S.value, n && n({
              ...s
            });
          });
        }
      }
      return n && d.addButton({
        title: "Aplicar"
      }).on("click", () => {
        n({
          ...s
        });
      }), Wn.set(t, {
        pane: d,
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
      const t = e.nodes.val, o = e.elements.val, n = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, a = N, d = b, s = [];
      if (s.push("# Awatif FEM \u2014 Model Export"), s.push(`# Generator: ${T || "custom"}`), s.push(`# Units: ${d}, ${a}`), s.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), s.push(""), s.push(`## NODES (${t.length})`), s.push("# idx     X          Y          Z"), t.forEach((i, c) => {
        s.push(`  ${String(c).padStart(4)}  ${i[0].toFixed(4).padStart(10)}  ${i[1].toFixed(4).padStart(10)}  ${i[2].toFixed(4).padStart(10)}`);
      }), s.push(""), s.push(`## ELEMENTS (${o.length})`), s.push("# idx    nodeI  nodeJ"), o.forEach((i, c) => {
        const g = i.map((S) => String(S).padStart(6)).join("");
        s.push(`  ${String(c).padStart(4)}  ${g}`);
      }), s.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (s.push(`## SUPPORTS (${n.supports.size})`), s.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((i, c) => {
        const g = i.map((S) => S ? "  1" : "  0").join("");
        s.push(`  ${String(c).padStart(4)} ${g}`);
      }), s.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (s.push(`## LOADS (${n.loads.size})`), s.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((i, c) => {
        const g = i.map((S) => S.toFixed(3).padStart(11)).join(" ");
        s.push(`  ${String(c).padStart(4)}  ${g}`);
      }), s.push("")), l) {
        s.push("## ELEMENT PROPERTIES");
        const i = [
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
        ], c = "# elem  " + i.map((g) => g.name.padStart(12)).join(" ");
        s.push(c);
        for (let g = 0; g < o.length; g++) {
          const S = i.map((M) => {
            var _a3;
            const y = (_a3 = M.map) == null ? void 0 : _a3.get(g);
            return y !== void 0 ? y.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          s.push(`  ${String(g).padStart(4)}  ${S}`);
        }
        s.push("");
      }
      const r = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      r && r.size > 0 && (s.push(`## DISPLACEMENTS (${r.size} nodes)`), s.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), r.forEach((i, c) => {
        const g = i.map((S) => S.toExponential(4).padStart(12)).join(" ");
        s.push(`  ${String(c).padStart(4)}  ${g}`);
      }), s.push(""));
      const p = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (p && p.size > 0 && (s.push(`## REACTIONS (${p.size} supports)`), s.push("# node          Rx           Ry           Rz           Mx           My           Mz"), p.forEach((i, c) => {
        const g = i.map((S) => S.toFixed(4).padStart(12)).join(" ");
        s.push(`  ${String(c).padStart(4)}  ${g}`);
      }), s.push("")), T) {
        s.push("## CLI COMMAND");
        const i = Object.entries(J).map(([c, g]) => `${c}=${g.val}`).join(" ");
        s.push(`cad.${T === "edificio" ? "building" : T}(${i})`);
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
        const o = e.nodes.val, n = e.elements.val, l = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, a = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, d = {
          generator: T || "custom",
          units: {
            force: b,
            length: N
          },
          nodes: o.map((c, g) => ({
            id: g,
            x: c[0],
            y: c[1],
            z: c[2]
          })),
          elements: n.map((c, g) => ({
            id: g,
            nodes: c
          }))
        };
        (l == null ? void 0 : l.supports) && (d.supports = [], l.supports.forEach((c, g) => d.supports.push({
          node: g,
          dofs: c
        }))), (l == null ? void 0 : l.loads) && (d.loads = [], l.loads.forEach((c, g) => d.loads.push({
          node: g,
          forces: c
        }))), a && (d.properties = {}, a.elasticities && (d.properties.E = Object.fromEntries(a.elasticities)), a.areas && (d.properties.A = Object.fromEntries(a.areas)), a.momentsOfInertiaZ && (d.properties.Iz = Object.fromEntries(a.momentsOfInertiaZ)), a.momentsOfInertiaY && (d.properties.Iy = Object.fromEntries(a.momentsOfInertiaY)), a.shearModuli && (d.properties.G = Object.fromEntries(a.shearModuli)), a.torsionalConstants && (d.properties.J = Object.fromEntries(a.torsionalConstants)));
        const s = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        s && s.size > 0 && (d.displacements = {}, s.forEach((c, g) => d.displacements[g] = c));
        const r = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        r && r.size > 0 && (d.reactions = {}, r.forEach((c, g) => d.reactions[g] = c));
        const p = _t.querySelector("#export-text");
        p.value = JSON.stringify(d, null, 2);
        const i = _t.querySelector("#export-status");
        i.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function st() {
      var _a2, _b, _c;
      const t = Le.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, a = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let d = 0, s = 0, r = 0;
        for (const i of n) i.length === 2 ? d++ : i.length === 3 ? s++ : i.length === 4 && r++;
        let p = `${o}n ${l}e ${a}s`;
        (r > 0 || s > 0) && (p += ` | ${d}fr`, r > 0 && (p += ` ${r}q4`), s > 0 && (p += ` ${s}tri`)), t.textContent = p;
      }
    }
    function Gn() {
      var _a2;
      if (!De || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const a = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (a <= 0) return;
        const d = ml(t, o, n, l, Math.min(a, 12));
        if (d.frequencies && d.frequencies.length > 0) {
          Fe = d, ze = t.map((i) => [
            ...i
          ]), xe = 0;
          const { extent: s } = zo(), r = (_a2 = d.modeShapes) == null ? void 0 : _a2[0];
          if (r) {
            let i = 0;
            for (let c = 0; c < t.length; c++) {
              const g = r[c * 6] || 0, S = r[c * 6 + 1] || 0, M = r[c * 6 + 2] || 0;
              i = Math.max(i, Math.sqrt(g * g + S * S + M * M));
            }
            Ve = i > 1e-12 ? s * 0.15 / i : 1;
          }
          const p = `${T} \u2014 ${t.length}n ${o.length}e`;
          ft.render(d, {
            title: p
          }), ft.div.style.display = "", cn(), console.log(`Modal: ${d.frequencies.length} modos. f\u2081 = ${d.frequencies[0].toFixed(4)} Hz`);
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
      const o = ((_a2 = Fe.frequencies) == null ? void 0 : _a2[xe]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), a = ze.length, d = e.elements.rawVal, { extent: s } = zo(), r = Le.querySelector("#cad3d-modal-scale"), p = r && parseFloat(r.value) || 15;
      let i = 0;
      for (let z = 0; z < a; z++) {
        const R = t[z * 6] || 0, k = t[z * 6 + 1] || 0, m = t[z * 6 + 2] || 0;
        i = Math.max(i, Math.sqrt(R * R + k * k + m * m));
      }
      const c = i > 1e-12 ? s * p / 100 / i : 1, g = tt();
      if (!g) return;
      let S = null, M = null, y = null;
      g.scene.traverse((z) => {
        var _a3;
        !S && z.isPoints && z.geometry && (S = z), !M && z.isLineSegments && z.geometry && !z.name && (M = z), z.isMesh && ((_a3 = z.material) == null ? void 0 : _a3.vertexColors) && z.geometry && (y ? z.visible = false : y = z);
      });
      const f = new Float32Array(a * 3), x = [];
      for (const z of d) if (z.length === 2) x.push([
        z[0],
        z[1]
      ]);
      else for (let R = 0; R < z.length; R++) x.push([
        z[R],
        z[(R + 1) % z.length]
      ]);
      const I = new Float32Array(x.length * 6);
      function C() {
        const z = (performance.now() - l) / 1e3, R = Math.sin(2 * Math.PI * n * z) * c;
        for (let k = 0; k < a; k++) {
          const m = ze[k];
          f[k * 3] = m[0] + (t[k * 6] || 0) * R, f[k * 3 + 1] = m[1] + (t[k * 6 + 1] || 0) * R, f[k * 3 + 2] = m[2] + (t[k * 6 + 2] || 0) * R;
        }
        if (S) {
          const k = S.geometry, m = k.getAttribute("position");
          m && m.array.length === f.length ? (m.array.set(f), m.needsUpdate = true) : k.setAttribute("position", new Do(f.slice(), 3));
        }
        if (M) {
          for (let u = 0; u < x.length; u++) {
            const [E, L] = x[u];
            I[u * 6] = f[E * 3], I[u * 6 + 1] = f[E * 3 + 1], I[u * 6 + 2] = f[E * 3 + 2], I[u * 6 + 3] = f[L * 3], I[u * 6 + 4] = f[L * 3 + 1], I[u * 6 + 5] = f[L * 3 + 2];
          }
          const k = M.geometry, m = k.getAttribute("position");
          m && m.array.length === I.length ? (m.array.set(I), m.needsUpdate = true) : k.setAttribute("position", new Do(I.slice(), 3));
        }
        if (y) {
          const k = [];
          for (const m of d) if (m.length === 3) {
            const [u, E, L] = m;
            k.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), k.push(f[E * 3], f[E * 3 + 1], f[E * 3 + 2]), k.push(f[L * 3], f[L * 3 + 1], f[L * 3 + 2]);
          } else if (m.length === 4) {
            const [u, E, L, O] = m;
            k.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), k.push(f[E * 3], f[E * 3 + 1], f[E * 3 + 2]), k.push(f[L * 3], f[L * 3 + 1], f[L * 3 + 2]), k.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), k.push(f[L * 3], f[L * 3 + 1], f[L * 3 + 2]), k.push(f[O * 3], f[O * 3 + 1], f[O * 3 + 2]);
          }
          if (k.length > 0) {
            const m = y.geometry, u = new Float32Array(k), E = m.getAttribute("position");
            E && E.array.length === u.length ? (E.array.set(u), E.needsUpdate = true) : m.setAttribute("position", new Do(u, 3));
          }
        }
        g.render(), ve = requestAnimationFrame(C);
      }
      ve = requestAnimationFrame(C);
    }
    function Jn() {
      var _a2, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val;
      let n = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const y = re("CM") ?? 0, f = re("CV") ?? 0, x = y + f, I = re("Ex") ?? 0, C = re("Ey") ?? 0;
        if (x === 0 && I === 0 && C === 0) return;
        const z = /* @__PURE__ */ new Map(), R = [];
        for (let $ = 0; $ < t.length; $++) n.supports.has($) || R.push($);
        const k = ($) => Math.round($ * 1e3) / 1e3, m = /* @__PURE__ */ new Set();
        n.supports.forEach(($, v) => {
          m.add(`${k(t[v][0])},${k(t[v][1])}`);
        });
        const u = /* @__PURE__ */ new Set();
        for (const $ of R) m.has(`${k(t[$][0])},${k(t[$][1])}`) && u.add($);
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
                const te = k(t[le][1]);
                K.has(te) || (K.add(te), E.add(le));
              }
            }
            if (C !== 0) {
              const K = /* @__PURE__ */ new Set();
              for (const le of X) if (k(t[le][1]) === v) {
                const te = k(t[le][0]);
                K.has(te) || (K.add(te), L.add(le));
              }
            }
          });
        }
        const O = 9.81, H = /* @__PURE__ */ new Map();
        for (let $ = 0; $ < o.length; $++) {
          const v = o[$], F = ((_a2 = l.densities) == null ? void 0 : _a2.get($)) ?? 0;
          if (!(Math.abs(F) < 1e-15)) {
            if (v.length === 2) {
              const X = ((_b = l.areas) == null ? void 0 : _b.get($)) ?? 0, K = t[v[0]], le = t[v[1]], te = Math.sqrt((le[0] - K[0]) ** 2 + (le[1] - K[1]) ** 2 + (le[2] - K[2]) ** 2), me = -(F * X * te * O) / 2;
              H.set(v[0], (H.get(v[0]) ?? 0) + me), H.set(v[1], (H.get(v[1]) ?? 0) + me);
            } else if (v.length >= 3) {
              const X = ((_c = l.thicknesses) == null ? void 0 : _c.get($)) ?? 0;
              let K = 0;
              if (v.length === 3) {
                const [Q, me, de] = v.map((ke) => t[ke]);
                K = 0.5 * Math.abs((me[0] - Q[0]) * (de[1] - Q[1]) - (de[0] - Q[0]) * (me[1] - Q[1]));
              } else if (v.length === 4) {
                const [Q, me, de, ke] = v.map((Re) => t[Re]);
                if (K = 0.5 * Math.abs((me[0] - Q[0]) * (de[1] - Q[1]) - (de[0] - Q[0]) * (me[1] - Q[1])) + 0.5 * Math.abs((de[0] - Q[0]) * (ke[1] - Q[1]) - (ke[0] - Q[0]) * (de[1] - Q[1])), K < 1e-10) {
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
                  K = Math.sqrt(ce[0] ** 2 + ce[1] ** 2 + ce[2] ** 2);
                }
              }
              const te = -(F * X * K * O) / v.length;
              for (const Q of v) H.set(Q, (H.get(Q) ?? 0) + te);
            }
          }
        }
        const h = /* @__PURE__ */ new Set();
        for (const $ of o) $.length === 2 && (h.add($[0]), h.add($[1]));
        for (const $ of R) {
          const v = E.has($) ? I : 0, F = L.has($) ? C : 0, X = H.get($) ?? 0, K = h.has($) ? x : 0, le = X + K;
          (v !== 0 || F !== 0 || Math.abs(le) > 1e-10) && z.set($, [
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
          loads: z
        }, e.nodeInputs.val = n;
      }
      const a = performance.now();
      let d = 0, s = 0, r = 0;
      for (const y of o) y.length === 2 ? d++ : y.length === 3 ? r++ : y.length === 4 && s++;
      const p = ((_d = n.supports) == null ? void 0 : _d.size) || 0, i = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, c = t.length * 6, g = c - p * 6, S = [], M = (y) => S.push(y);
      M('<b style="color:var(--cad-heading)">FEM Solver</b>'), M(`<span style="color:var(--cad-info)">${A("Modelo")}:</span> ${t.length} ${A("nodos")}, ${o.length} elem`), d && M(`&nbsp;&nbsp;Frames: <b>${d}</b>`), s && M(`&nbsp;&nbsp;Shell Q4: <b>${s}</b>`), r && M(`&nbsp;&nbsp;${A("Tri\xE1ngulos")}: <b>${r}</b>`), M(`&nbsp;&nbsp;${A("Apoyos")}: ${p} &nbsp;|&nbsp; ${A("Cargas")}: ${i}`), M(`<span style="color:var(--cad-info)">DOFs:</span> ${c} total, ~${g} ${A("libres")}`), M('<hr style="border-color:var(--cad-border);margin:4px 0">'), M(`<span style="color:#888">1.</span> ${A("Ensamblaje")} <b>K</b> global (${c}&times;${c})`), M("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const y = Ft(t, o, n, l), f = performance.now() - a;
        if (y) {
          e.deformOutputs.val = y, M(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${f.toFixed(0)} ms</span>`);
          let x = 0, I = -1, C = 0, z = 0;
          y.deformations && y.deformations.forEach((E, L) => {
            const O = Math.sqrt(E[0] * E[0] + E[1] * E[1] + E[2] * E[2]);
            O > x && (x = O, I = L, C = E[0], z = E[2]);
          }), M('<span style="color:#888">3.</span> Desplazamientos:'), M(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${x.toExponential(3)}</b> m <span style="color:#666">(nodo ${I})</span>`), M(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(C * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(z * 1e3).toFixed(4)} mm`);
          const R = performance.now(), k = Eo(t, o, l, y), m = performance.now() - R;
          k && (e.analyzeOutputs.val = k, M(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${m.toFixed(0)} ms</span>`), M("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const u = performance.now() - a;
          M('<hr style="border-color:var(--cad-border);margin:4px 0">'), M(`<b style="color:#00cc88">&#10004; Completado: ${u.toFixed(0)} ms</b>`);
        }
      } catch (y) {
        const f = performance.now() - a;
        M(`<b style="color:#ff4444">&#10008; Error (${f.toFixed(0)} ms): ${y.message}</b>`);
      }
      window.__femLog = S, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - a).toFixed(0)}ms`), De && setTimeout(() => Gn(), 50);
    }
    function Vn(t, o) {
      const n = t * o, l = t * o * o * o / 12, a = o * t * t * t / 12, d = Math.min(t, o), s = Math.max(t, o), r = d * d * d * s * (1 / 3 - 0.21 * d / s * (1 - d * d * d * d / (12 * s * s * s * s)));
      return {
        A: n,
        Iz: l,
        Iy: a,
        J: r
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
    function Un(t, o, n, l) {
      const a = o - 2 * n, d = 2 * t * n + a * l, s = (t * o * o * o - (t - l) * a * a * a) / 12, r = (2 * n * t * t * t + a * l * l * l) / 12, p = (2 * t * n * n * n + a * l * l * l) / 3;
      return {
        A: d,
        Iz: s,
        Iy: r,
        J: p
      };
    }
    function Xn(t, o, n) {
      const l = t - 2 * n, a = o - 2 * n, d = t * o - l * a, s = (t * o * o * o - l * a * a * a) / 12, r = (o * t * t * t - a * l * l * l) / 12, p = (t - n) * (o - n), i = 2 * ((t - n) / n + (o - n) / n), c = 4 * p * p / (i > 0 ? i : 1);
      return {
        A: d,
        Iz: s,
        Iy: r,
        J: c
      };
    }
    function Ga(t, o, n, l, a, d, s) {
      const p = 4700 * Math.sqrt(d / 1e3) * 1e3 / l, i = t - 2 * n, c = o - 2 * n, g = t * o - i * c, S = (t * o * o * o - i * c * c * c) / 12, M = (o * t * t * t - c * i * i * i) / 12, y = i * c, f = i * c * c * c / 12, x = c * i * i * i / 12, I = g + p * y, C = S + p * f, z = M + p * x, R = l / (2 * (1 + a)), k = (t - n) * (o - n), m = 2 * ((t - n) / n + (o - n) / n), u = 4 * k * k / (m > 0 ? m : 1);
      return {
        A: I,
        Iz: C,
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
        const { colMat: a, vigaMat: d, colShape: s, fc: r, perFloor: p } = _e, i = 4700 * Math.sqrt(r / 1e3) * 1e3, c = i / (2 * 1.2), g = 24 / 9.80665, S = o.E, M = o.G, y = o.rho;
        for (let f = 0; f < t.length; f++) {
          if (ue.has(f)) {
            const E = 4700 * Math.sqrt(r / 1e3) * 1e3, L = 0.2;
            n.elasticities.set(f, E), n.poissonsRatios.set(f, L), n.thicknesses.set(f, Ge), n.shearModuli.set(f, E / (2 * (1 + L))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          if (Nt.has(f)) {
            const E = 4700 * Math.sqrt(r / 1e3) * 1e3, L = 0.2;
            n.elasticities.set(f, E), n.poissonsRatios.set(f, L), n.thicknesses.set(f, dt), n.shearModuli.set(f, E / (2 * (1 + L))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          const x = B.has(f), I = Me.get(f) ?? 0, C = p[I] ?? p[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let z, R, k, m;
          if (x) if (a === 0) R = i, k = c, m = g, z = s === 1 ? Hs(C.dCol) : Vn(C.bCol, C.hCol), n.sectionShapes.set(f, s === 1 ? {
            type: "circ",
            d: C.dCol
          } : {
            type: "rect",
            b: C.bCol,
            h: C.hCol
          });
          else if (a === 1) {
            R = S, k = M, m = y;
            const E = _e.steelColType;
            if (E <= 1) {
              const L = Ro[C.colProfileIdx] ?? Ro[0];
              z = {
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
              const L = C.colBf ?? 0.3, O = C.colHf ?? 0.3, H = C.colTf ?? 0.02, h = C.colTw ?? 0.012;
              z = Un(L, O, H, h);
              const $ = `I${(O * 100).toFixed(0)}x${(L * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: L,
                h: O,
                tf: H,
                tw: h,
                name: $
              });
            } else {
              const L = C.colBc ?? 0.3, O = C.colHc ?? 0.3, H = C.colT ?? 0.01;
              z = Xn(L, O, H);
              const h = `\u25A1${(O * 100).toFixed(0)}x${(L * 100).toFixed(0)}x${(H * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: L,
                h: O,
                tw: H,
                name: h
              });
            }
          } else {
            const E = C.colBc ?? 0.3, L = C.colHc ?? 0.3, O = C.colT ?? 0.01, H = C.colFc ?? 28e3, h = C.colEs ?? 2e8, $ = C.colNuS ?? 0.3;
            C.colNuC;
            const v = Ga(E, L, O, h, $, H);
            z = {
              A: v.A,
              Iz: v.Iz,
              Iy: v.Iy,
              J: v.J
            }, R = v.Es, k = v.Gs;
            const F = 7.85, X = 24 / 9.80665;
            m = (F * v.A_steel + X * v.A_conc) / (v.A_steel + v.A_conc);
            const K = `CFT ${(L * 1e3).toFixed(0)}X${(E * 1e3).toFixed(0)}X${(O * 1e3).toFixed(0)}`;
            n.sectionShapes.set(f, {
              type: "CFT",
              b: E,
              h: L,
              tw: O,
              name: K
            });
          }
          else {
            const E = Ae.get(f), L = E ? E.dir === "x" ? C.vigasX : C.vigasY : [], O = E ? L[E.bay] ?? L[0] ?? bt() : bt();
            if (d === 0) R = i, k = c, m = g, z = Vn(O.b, O.h), n.sectionShapes.set(f, {
              type: "rect",
              b: O.b,
              h: O.h
            });
            else {
              R = S, k = M, m = y;
              const H = _e.steelVigaType;
              if (H <= 1) {
                const h = Ro[O.profileIdx ?? 0] ?? Ro[0];
                z = {
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
                const h = O.bf ?? 0.2, $ = O.hf ?? 0.4, v = O.tf ?? 0.015, F = O.tw ?? 0.01;
                z = Un(h, $, v, F);
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
                const h = O.bc ?? 0.2, $ = O.hc ?? 0.3, v = O.t ?? 8e-3;
                z = Xn(h, $, v);
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
            if ((u.material ?? 1) === 0 ? (R = i, k = c, m = g) : (R = S, k = M, m = y), u.secType === "rect" && u.b && u.h) z = Vn(u.b, u.h), n.sectionShapes.set(f, {
              type: "rect",
              b: u.b,
              h: u.h
            });
            else if (u.secType === "circ" && u.b) z = Hs(u.b), n.sectionShapes.set(f, {
              type: "circ",
              d: u.b
            });
            else if ((u.secType === "W" || u.secType === "HSS") && u.profileIdx !== void 0) {
              const L = Ro[u.profileIdx] ?? Ro[0];
              z = {
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
              z = Un(u.bf, u.hf, u.tf, u.tw);
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
              z = Xn(u.bc, u.hc, u.t);
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
      (_a2 = Le.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (h) => {
        h.stopPropagation(), Le.classList.add("collapsed");
      }), (_b = Le.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (h) => {
        h.stopPropagation(), Le.classList.remove("collapsed");
      }), Le.querySelectorAll("[data-ex]").forEach((h) => {
        h.addEventListener("click", ($) => {
          $.stopPropagation();
          const v = h.dataset.ex;
          js(v), ot.example(v);
        });
      }), Le.querySelectorAll("[data-view]").forEach((h) => {
        h.addEventListener("click", ($) => {
          $.stopPropagation();
          const v = h.dataset.view;
          Ao(v), Le.querySelectorAll("[data-view]").forEach((F) => F.classList.remove("view-active")), h.classList.add("view-active");
        });
      }), (_c = Le.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (h) => {
        h.stopPropagation(), T = "", ka.val = false, Ha(), ot.clear();
      }), (_d = Le.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (h) => {
        var _a3;
        h.stopPropagation(), po && (po = false, _o()), yo && yn(), eo = !eo, (_a3 = Le.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", eo);
        const v = tt();
        v && (v.controls.enabled = !eo), eo || vn();
      }), (_e2 = Le.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (h) => {
        var _a3;
        h.stopPropagation(), po && (po = false, _o()), eo && vn(), yo = !yo, (_a3 = Le.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", yo), yo ? Xa() : yn();
      }), (_f = Le.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (h) => {
        var _a3;
        h.stopPropagation(), eo && vn(), yo && yn(), po = !po, (_a3 = Le.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", po), po || _o();
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
        const F = 15e3 * Math.sqrt(210) * 10, X = 0.2, K = F / (2 * (1 + X)), le = 0.09, te = 0.3 ** 4 / 12, Q = 0.141 * 0.3 ** 4, me = 0.25 * 0.4, de = 0.25 * 0.4 ** 3 / 12, ke = 0.4 * 0.25 ** 3 / 12, Re = 1e-3, q = 5 / 6 * le, ce = 5 / 6 * me, oe = [];
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
          for (const we of ge) se.elasticities.set(we, F), se.shearModuli.set(we, K), se.areas.set(we, le), se.momentsOfInertiaZ.set(we, te), se.momentsOfInertiaY.set(we, te), se.torsionalConstants.set(we, Q), se.shearAreasY.set(we, q), se.shearAreasZ.set(we, q);
          for (const we of Ie) se.elasticities.set(we, F), se.shearModuli.set(we, K), se.areas.set(we, me), se.momentsOfInertiaZ.set(we, ke), se.momentsOfInertiaY.set(we, de), se.torsionalConstants.set(we, Re), se.shearAreasY.set(we, ce), se.shearAreasZ.set(we, ce);
          return se;
        }
        if (h === "test-cantilever" || h === "test-all") {
          const Ie = 270 / (3 * F * te), se = [
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
          Be.elasticities.set(0, F), Be.shearModuli.set(0, K), Be.areas.set(0, le), Be.momentsOfInertiaZ.set(0, te), Be.momentsOfInertiaY.set(0, te), Be.torsionalConstants.set(0, Q);
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
        if (h === "test-portal-1p" || h === "test-all") {
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
        if (h === "test-portal-2p" || h === "test-all") {
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
        if (h === "test-wall-only" || h === "test-all") {
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
        if (h === "test-portal-wall" || h === "test-all") {
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
          Ie.elasticities.set(6, F), Ie.shearModuli.set(6, K), Ie.thicknesses = /* @__PURE__ */ new Map([
            [
              6,
              0.2
            ]
          ]), Ie.poissonsRatios = /* @__PURE__ */ new Map([
            [
              6,
              X
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
        if (h === "test-wilson-beam" || h === "test-all") {
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
            }, Dt), jt = Math.abs(((_b2 = (_a3 = Kt.deformations) == null ? void 0 : _a3.get(2)) == null ? void 0 : _b2[1]) ?? 0), at = Math.abs(((_d2 = (_c2 = Kt.deformations) == null ? void 0 : _c2.get(3)) == null ? void 0 : _d2[1]) ?? 0), $t = (jt + at) / 2, Xt = $t / go;
            oe.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "2 Q4 elements + incompatible modes (Wilson 1971, Table 6.1)",
              nodes: et,
              elements: vt,
              results: [
                {
                  label: "Uy/Uy_exact (cortante)",
                  awatif: Xt,
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
        if (h === "test-scordelis" || h === "test-all") {
          const lt = 40 * Math.PI / 180, et = 8, vt = 8, Dt = [];
          for (let at = 0; at <= et; at++) for (let $t = 0; $t <= vt; $t++) {
            const Xt = 25 * at / et, Rt = lt * $t / vt, fo = 25 * Math.sin(Rt), io = 25 * Math.cos(Rt) - 25 * Math.cos(lt);
            Dt.push([
              Xt,
              fo,
              io
            ]);
          }
          const yt = [];
          for (let at = 0; at < et; at++) for (let $t = 0; $t < vt; $t++) {
            const Xt = at * (vt + 1) + $t, Rt = (at + 1) * (vt + 1) + $t, fo = (at + 1) * (vt + 1) + ($t + 1), io = at * (vt + 1) + ($t + 1);
            yt.push([
              Xt,
              Rt,
              fo,
              io
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
            const Xt = at * (vt + 1) + $t, Rt = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            at === 0 && (Rt[0] = true, Rt[4] = true, Rt[5] = true), at === et && (Rt[1] = true, Rt[2] = true, Rt[3] = true), $t === 0 && (Rt[1] = true, Rt[3] = true, Rt[5] = true), Rt.some((fo) => fo) && Kt.set(Xt, Rt);
          }
          const jt = /* @__PURE__ */ new Map();
          for (const at of yt) {
            const $t = Dt[at[0]], Xt = Dt[at[1]], Rt = Dt[at[2]], fo = Dt[at[3]], io = [
              Rt[0] - $t[0],
              Rt[1] - $t[1],
              Rt[2] - $t[2]
            ], wo = [
              fo[0] - Xt[0],
              fo[1] - Xt[1],
              fo[2] - Xt[2]
            ], Mn = io[1] * wo[2] - io[2] * wo[1], Ko = io[2] * wo[0] - io[0] * wo[2], un = io[0] * wo[1] - io[1] * wo[0], We = -90 * (0.5 * Math.sqrt(Mn * Mn + Ko * Ko + un * un)) / 4;
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
            }, Ct), $t = vt, Xt = ((_f2 = (_e3 = at.deformations) == null ? void 0 : _e3.get($t)) == null ? void 0 : _f2[2]) ?? 0;
            oe.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: `Shell Q4 (${et}x${vt} mesh), Mindlin-Reissner + incompatible modes`,
              nodes: Dt,
              elements: yt,
              results: [
                {
                  label: "Uz midspan free edge (ft)",
                  awatif: Math.abs(Xt),
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
        if (d(oe), oe.length > 0) {
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
      function n(h) {
        const $ = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`$ File exported from Awatif FEM Validation: ${h.name}`), v.push(" "), v.push("$ PROGRAM INFORMATION"), v.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), v.push(""), v.push("$ CONTROLS"), v.push('  UNITS  "TONF"  "M"  "C"  '), v.push("");
        const F = /* @__PURE__ */ new Set();
        h.nodes.forEach((q) => F.add(Math.round(q[1] * 1e4) / 1e4));
        const X = [
          ...F
        ].sort((q, ce) => q - ce), K = X.map((q, ce) => ce === 0 ? "Base" : `Level_${ce}`), le = /* @__PURE__ */ new Map();
        X.forEach((q, ce) => le.set(q, K[ce])), v.push("$ STORIES - IN SEQUENCE FROM TOP");
        for (let q = X.length - 1; q >= 1; q--) v.push(`  STORY "${K[q]}"  HEIGHT ${X[q] - X[q - 1]} MASTERSTORY "Yes"  `);
        v.push(`  STORY "Base"  ELEV ${X[0]} `), v.push(""), v.push("$ MATERIAL PROPERTIES"), v.push('  MATERIAL  "CONC"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4'), v.push(`  MATERIAL  "CONC"    SYMTYPE "Isotropic"  E ${$}  U 0.2  A 1E-05`), v.push(""), v.push("$ FRAME SECTIONS"), v.push('  FRAMESECTION  "COL30"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.3 B 0.3 '), v.push('  FRAMESECTION  "VIGA"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.4 B 0.25 '), v.push("");
        const te = h.elements.some((q) => q.length === 4);
        te && (v.push("$ WALL/SLAB/DECK SECTIONS"), v.push('  SHELLPROP  "Muro20"  PROPTYPE  "Wall"  MATERIAL "CONC"  MODELINGTYPE "ShellThick"  WALLTHICKNESS 0.2 '), v.push(""));
        const Q = /* @__PURE__ */ new Map();
        let me = 0;
        h.nodes.forEach((q) => {
          const ce = `${q[0]},${q[2]}`;
          Q.has(ce) || Q.set(ce, `${++me}`);
        }), v.push("$ POINT COORDINATES");
        for (const [q, ce] of Q) {
          const [oe, pe] = q.split(",").map(Number);
          v.push(`  POINT "${ce}"  ${oe} ${pe} `);
        }
        v.push("");
        const de = (q) => {
          const ce = h.nodes[q], oe = `${ce[0]},${ce[2]}`;
          return {
            pt: Q.get(oe) || "1",
            story: le.get(Math.round(ce[1] * 1e4) / 1e4) || "Base"
          };
        };
        v.push("$ LINE CONNECTIVITIES");
        const ke = [];
        if (h.elements.forEach((q, ce) => {
          if (q.length !== 2) return;
          const oe = h.nodes[q[0]], pe = h.nodes[q[1]], ee = Math.abs(pe[1] - oe[1]), ge = Math.sqrt((pe[0] - oe[0]) ** 2 + (pe[2] - oe[2]) ** 2), Ie = ee > ge * 0.5, se = de(q[0]), we = de(q[1]), Be = Ie ? "COL30" : "VIGA";
          Ie ? (v.push(`  LINE  "E${ce + 1}"  COLUMN  "${se.pt}"  "${se.pt}"  1`), ke.push(`  LINEASSIGN  "E${ce + 1}"  "${we.story}"  SECTION "${Be}"  `)) : (v.push(`  LINE  "E${ce + 1}"  BEAM  "${se.pt}"  "${we.pt}"  0`), ke.push(`  LINEASSIGN  "E${ce + 1}"  "${se.story}"  SECTION "${Be}"  `));
        }), v.push(""), te) {
          v.push("$ AREA CONNECTIVITIES");
          const q = [];
          h.elements.forEach((ce, oe) => {
            if (ce.length !== 4) return;
            const pe = ce.map((ee) => de(ee));
            v.push(`  AREA "W${oe + 1}"  PANEL  4  "${pe[0].pt}"  "${pe[1].pt}"  "${pe[2].pt}"  "${pe[3].pt}"  1  1  0  0  `), q.push(`  AREAASSIGN  "W${oe + 1}"  "${pe[2].story}"  SECTION "Muro20"  `);
          }), v.push(""), v.push("$ AREA ASSIGNS"), q.forEach((ce) => v.push(ce)), v.push("");
        }
        v.push("$ POINT ASSIGNS"), h.nodes.forEach((q, ce) => {
          if (Math.abs(q[1]) < 0.01) {
            const oe = de(ce);
            v.push(`  POINTASSIGN  "${oe.pt}"  "${oe.story}"  RESTRAINT "UX UY UZ RX RY RZ"  `);
          }
        }), v.push(""), v.push("$ LINE ASSIGNS"), ke.forEach((q) => v.push(q)), v.push(""), v.push("$ LOAD PATTERNS"), v.push('  LOADPATTERN "Lat"  TYPE  "Other"  SELFWEIGHT  0'), v.push(""), v.push("$ POINT OBJECT LOADS");
        const Re = Math.max(...h.nodes.map((q) => q[1]));
        return h.nodes.forEach((q, ce) => {
          if (Math.abs(q[1] - Re) < 0.01) {
            const oe = de(ce);
            v.push(`  POINTLOAD  "${oe.pt}"  "${oe.story}"  "Lat"  TYPE "FORCE"  FX 10`);
          }
        }), v.push(""), v.push("  END"), v.push("$ END OF MODEL FILE"), v.join(`\r
`);
      }
      function l(h) {
        const $ = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`"""ETABS API Validation: ${h.name}`), v.push('Generated by Awatif FEM Studio"""'), v.push("import comtypes.client, time, math"), v.push(""), v.push("helper = comtypes.client.CreateObject('ETABSv1.Helper')"), v.push("helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)"), v.push('myETABS = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")'), v.push("myETABS.ApplicationStart()"), v.push("time.sleep(10)"), v.push("SapModel = myETABS.SapModel"), v.push("SapModel.InitializeNewModel()"), v.push("SapModel.File.NewBlank()"), v.push("SapModel.SetPresentUnits(12)  # tonf_m_C"), v.push(""), v.push(`E = ${$}`), v.push('SapModel.PropMaterial.SetMaterial("CONC", 2)'), v.push('SapModel.PropMaterial.SetMPIsotropic("CONC", E, 0.2, 5.5e-6)'), v.push('SapModel.PropFrame.SetRectangle("COL30", "CONC", 0.30, 0.30)'), v.push('SapModel.PropFrame.SetRectangle("VIGA", "CONC", 0.40, 0.25)'), h.elements.some((K) => K.length === 4) && v.push('SapModel.PropArea.SetWall("Muro20", 6, False, "CONC", 0.20)'), v.push(""), v.push("# Add elements"), v.push("FN = ' '"), h.elements.forEach((K, le) => {
          if (K.length === 2) {
            const te = h.nodes[K[0]], Q = h.nodes[K[1]], me = Math.abs(Q[1] - te[1]), de = Math.sqrt((Q[0] - te[0]) ** 2 + (Q[2] - te[2]) ** 2), ke = me > de * 0.5 ? "COL30" : "VIGA";
            v.push(`[FN,r]=SapModel.FrameObj.AddByCoord(${te[0]},${te[2]},${te[1]}, ${Q[0]},${Q[2]},${Q[1]}, FN,"${ke}","E${le + 1}","Global")`);
          } else if (K.length === 4) {
            const te = K.map((Q) => h.nodes[Q]);
            v.push(`SapModel.AreaObj.AddByCoord(4, [${te.map((Q) => Q[0]).join(",")}], [${te.map((Q) => Q[2]).join(",")}], [${te.map((Q) => Q[1]).join(",")}], "", "Muro20")`);
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
      function d(h) {
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
          for (const te of le.results) {
            const Q = te.reference !== 0 ? te.awatif / te.reference : 1, me = Math.abs(Q - 1) < 0.05;
            me || (F = false);
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
        v += F ? '<div style="color:#4caf50;font-weight:bold;text-align:center;margin-top:8px">ALL TESTS PASSED (< 5% error vs ETABS)</div>' : '<div style="color:#f44336;font-weight:bold;text-align:center;margin-top:8px">Some tests exceeded 5% tolerance</div>', $.innerHTML = v, document.body.appendChild($), window.__awatifDownloadE2k = (K) => {
          const le = window.__awatifTests[K], te = le.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          a(n(le), `${te}.e2k`);
        }, window.__awatifDownloadPy = (K) => {
          const le = window.__awatifTests[K], te = le.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          a(l(le), `${te}_etabs.py`);
        };
      }
      (_h = Le.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (h) => {
        h.stopPropagation(), Wa();
      });
      let s = "";
      const r = Le.querySelector("#cad3d-io-menu"), p = Le.querySelector("#cad3d-io-file");
      function i(h, $) {
        e.nodes.val = h.nodes, e.elements.val = h.elements, e.nodeInputs.val = h.nodeInputs, e.elementInputs.val = h.elementInputs, h.sectionShapes && h.elementInputs && (h.elementInputs.sectionShapes = h.sectionShapes), e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        const v = h.elements.filter((X) => X.length === 2).length, F = h.elements.filter((X) => X.length >= 3).length;
        console.log(`${$} (${h.nodes.length} nodos, ${v} frames, ${F} shells): ${h.nodes.length} nodes, ${h.elements.length} elements`), setTimeout(() => It(), 50);
      }
      function c(h, $) {
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
        for (const Q of X) {
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
        for (const Q of K) {
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
        </div>`, F.innerHTML = te, document.body.appendChild(F), F.querySelectorAll("input[data-ifc-cat]").forEach((Q) => {
          Q.addEventListener("change", () => {
            const me = Q.dataset.ifcCat, de = h.detailCategories.get(me);
            if (de) {
              de.visible = Q.checked;
              const ke = tt();
              ke && ke.render();
            }
          });
        }), (_b2 = F.querySelector("#ifc-gen-analytical")) == null ? void 0 : _b2.addEventListener("click", () => {
          var _a4;
          const Q = /* @__PURE__ */ new Set();
          F.querySelectorAll("input[data-ifc-cat]:checked").forEach((oe) => {
            Q.add(oe.dataset.ifcCat);
          });
          const me = $.nodes.map((oe) => [
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
          for (const oe of $.elements) if (Q.has(oe.category) && oe.type === "frame" && oe.nodeIds.length >= 2) {
            de.push(oe.nodeIds);
            const pe = ((_a4 = $.materials) == null ? void 0 : _a4.get(oe.material)) || {
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
          for (const [, oe] of h.detailCategories) {
            const pe = tt();
            pe && pe.scene.remove(oe);
          }
          i({
            nodes: me,
            elements: de,
            nodeInputs: Re,
            elementInputs: ke,
            sectionShapes: ke.sectionShapes,
            info: {
              nNodes: me.length,
              nFrames: de.length
            }
          }, "IFC analytical"), F.remove();
        }), (_c2 = F.querySelector("#ifc-cancel")) == null ? void 0 : _c2.addEventListener("click", () => {
          for (const [, me] of h.detailCategories) {
            const de = tt();
            de && de.scene.remove(me);
          }
          const Q = tt();
          Q && Q.render(), F.remove();
        });
      }
      function g(h) {
        B = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map();
        const $ = /* @__PURE__ */ new Map();
        for (let de = 0; de < h.stories.length; de++) $.set(h.stories[de].name, de);
        for (let de = 0; de < h.elementTypes.length; de++) {
          const ke = h.elementTypes[de], Re = h.elementStories[de], q = $.get(Re) ?? 0;
          Me.set(de, q), ke === "COLUMN" || ke === "BRACE" ? B.add(de) : Y.add(de);
        }
        T = "edificio";
        const v = h.grids.filter((de) => de.dir === "X").sort((de, ke) => de.coord - ke.coord), F = h.grids.filter((de) => de.dir === "Y").sort((de, ke) => de.coord - ke.coord);
        let X, K, le, te;
        if (v.length > 0 || F.length > 0) X = v.map((de) => de.coord), K = F.map((de) => de.coord), le = v.map((de) => de.label), te = F.map((de) => de.label);
        else {
          const de = new Set(h.nodes.map((Re) => Re[0])), ke = new Set(h.nodes.map((Re) => Re[1]));
          X = [
            ...de
          ].sort((Re, q) => Re - q), K = [
            ...ke
          ].sort((Re, q) => Re - q), le = X.map((Re, q) => String(q + 1)), te = K.map((Re, q) => String.fromCharCode(65 + q));
        }
        const Q = h.stories.length > 0 ? Math.max(...h.stories.map((de) => de.elev)) : Math.max(...h.nodes.map((de) => de[2]));
        Je = X, Qe = K, mt = Q, setTimeout(() => {
          It(), an(X, K, Q, le, te), Nn(h.stories, X, K), Kn(), Zn();
        }, 100);
        const me = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const de of h.elementTypes) me[de]++;
        console.log(`E2K grids: X=[${le.join(",")}] Y=[${te.join(",")}]`), console.log(`E2K stories: ${h.stories.map((de) => `${de.name}@${de.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${me.COLUMN} columns, ${me.BEAM} beams, ${me.BRACE} braces`), st();
      }
      function S(h, $) {
        const v = new Blob([
          h
        ], {
          type: "text/plain"
        }), F = URL.createObjectURL(v), X = document.createElement("a");
        X.href = F, X.download = $, X.click(), URL.revokeObjectURL(F);
      }
      r && r.addEventListener("change", () => {
        if (s = r.value, r.value = "", s.startsWith("import")) s === "import-e2k" ? p.accept = ".e2k,.E2K" : s === "import-s2k" ? p.accept = ".s2k,.S2K,.$2k" : s === "import-ifc" ? p.accept = ".ifc,.IFC" : s === "import-py" ? p.accept = ".py" : s === "import-tcl" && (p.accept = ".tcl"), p.click();
        else if (s.startsWith("export")) {
          const h = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: e.nodeInputs.val,
            elementInputs: e.elementInputs.val
          };
          try {
            s === "export-e2k" ? S(er({
              ...h,
              title: "Awatif Model",
              e2kModel: Ke ?? void 0
            }), "model.e2k") : s === "export-s2k" ? S(Ql({
              ...h,
              title: "Awatif Model"
            }), "model.s2k") : s === "export-py" ? S(sr(h), "model_opensees.py") : s === "export-tcl" && S(ar(h), "model_opensees.tcl");
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
              const X = tt();
              if (!X) {
                alert("Viewer not ready");
                return;
              }
              console.log("IFC: Loading 3D geometry...");
              const K = await mr(X.scene, F);
              console.log(`IFC: ${K.meshCount} meshes loaded, bbox:`, K.bbox);
              const le = new qe();
              K.bbox.getCenter(le);
              const te = new qe();
              K.bbox.getSize(te);
              const Q = Math.max(te.x, te.y, te.z);
              X.controls.target.copy(le), X.camera.position.set(le.x + Q, le.y + Q * 0.5, le.z + Q), X.camera.lookAt(le), X.controls.maxDistance = Q * 5, X.controls.update(), X.render(), window.__ifcLoadResult = K, window.__ifcArrayBuffer = F;
              const me = new FileReader();
              me.onload = () => {
                const de = me.result, ke = pr(de);
                window.__ifcAnalytical = ke;
                const Re = {};
                K.elementInfo.forEach((q) => Re[q.category] = (Re[q.category] || 0) + 1), console.log("IFC categories:", Re), console.log(`IFC: ${K.elementInfo.size} geometric elements, ${ke.elements.length} analytical elements`), c(K, ke);
              }, me.readAsText(h);
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
              const F = Ul(v);
              Ke = F, i(F, "E2K imported"), g(F);
            } else if (s === "import-s2k") {
              const F = Xl(v);
              i({
                nodes: F.nodes,
                elements: F.elements,
                nodeInputs: F.nodeInputs,
                elementInputs: F.elementInputs,
                sectionShapes: F.sectionShapes,
                info: F.info
              }, "S2K imported");
            } else if (s === "import-py") {
              const F = lr(v);
              i(F, "OpenSeesPy imported");
            } else if (s === "import-tcl") {
              const F = rr(v);
              i(F, "OpenSees Tcl imported");
            }
          } catch (F) {
            alert("Import error: " + F.message), console.error(F);
          }
        }, $.readAsText(h), p.value = "";
      });
      const M = Le.querySelector("#cad3d-force-unit");
      M && (M.value = b, M.addEventListener("change", (h) => {
        h.stopPropagation(), b = M.value, w = jo(b, N), T && nt(T);
      }));
      const y = Le.querySelector("#cad3d-length-unit");
      y && (y.value = N, y.addEventListener("change", (h) => {
        h.stopPropagation(), N = y.value, w = jo(b, N), T && nt(T);
      })), Le.querySelectorAll("[data-preset]").forEach((h) => {
        h.addEventListener("click", ($) => {
          $.stopPropagation();
          const v = h.dataset.preset, F = j[v];
          F && (b = F.force, N = F.length, U = F.stress, w = jo(b, N), M && (M.value = b), y && (y.value = N), Le.querySelectorAll("[data-preset]").forEach((X) => {
            X.classList.toggle("active", X.dataset.preset === v);
          }), T && nt(T), console.log(`Preset: ${v} \u2192 ${b}+${N}, stress: ${U.label}`));
        });
      }), Le.querySelectorAll("[data-lang]").forEach((h) => {
        h.addEventListener("click", ($) => {
          $.stopPropagation();
          const v = h.dataset.lang;
          zl(v), Le.querySelectorAll("[data-lang]").forEach((X) => X.classList.remove("active")), h.classList.add("active"), Al(), T && (nt(T), No()), document.getElementById("cad-panel") && typeof window.__rebuildViewPanel == "function" && window.__rebuildViewPanel();
        });
      }), (_i = Le.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (h) => {
        h.stopPropagation(), sl();
      }), (_j = Le.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (h) => {
        h.stopPropagation(), al();
      }), (_k = Le.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (h) => {
        h.stopPropagation(), rl();
      }), (_l2 = Le.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l2.addEventListener("click", (h) => {
        h.stopPropagation(), cl();
      }), (_m = Le.querySelector("#cad3d-calc")) == null ? void 0 : _m.addEventListener("click", (h) => {
        h.stopPropagation(), cs(async () => {
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
        h.stopPropagation(), cs(async () => {
          const { openTutorialPanel: $ } = await import("./tutorialPanel-D12tw4H_.js").then(async (m2) => {
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
          const le = tt();
          ((_b2 = le == null ? void 0 : le.settings) == null ? void 0 : _b2.loads) && (He = le.settings.loads.rawVal, le.settings.loads.val = false), Gn(), v.style.display = "", F.style.display = "", X.style.display = "", K && (K.style.display = ""), f();
        } else Yn(), v.style.display = "none", F.style.display = "none", X.style.display = "none", K && (K.style.display = "none"), T && T !== "placa-q4" && T !== "placa-3q" && Ne(), setTimeout(() => {
          var _a4;
          const le = tt();
          ((_a4 = le == null ? void 0 : le.settings) == null ? void 0 : _a4.loads) && He && (le.settings.loads.val = true);
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
          const K = $[X * 6] || 0, le = $[X * 6 + 1] || 0, te = $[X * 6 + 2] || 0;
          F = Math.max(F, Math.sqrt(K * K + le * le + te * te));
        }
        Ve = F > 1e-12 ? v * 0.05 / F : 1, cn(), f();
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
          const K = $[X * 6] || 0, le = $[X * 6 + 1] || 0, te = $[X * 6 + 2] || 0;
          F = Math.max(F, Math.sqrt(K * K + le * le + te * te));
        }
        Ve = F > 1e-12 ? v * 0.05 / F : 1, console.log(`Mode ${xe + 1}: maxDisp=${F.toExponential(3)}, scale=${Ve.toFixed(1)}, f=${(_b2 = (_a3 = Fe.frequencies) == null ? void 0 : _a3[xe]) == null ? void 0 : _b2.toFixed(2)} Hz`), cn(), f();
      });
      const x = Le.querySelector("#cad3d-modal-scale");
      x == null ? void 0 : x.addEventListener("mousedown", (h) => h.stopPropagation()), x == null ? void 0 : x.addEventListener("change", () => {
        De && (Fe == null ? void 0 : Fe.modeShapes) && cn();
      });
      const I = Le.querySelector("#cad3d-cli-toggle"), C = Le.querySelector("#cad3d-cli-panel"), z = Le.querySelector("#cad3d-cli-output"), R = Le.querySelector("#cad3d-cmd"), k = [];
      let m = -1;
      I == null ? void 0 : I.addEventListener("click", (h) => {
        if (h.stopPropagation(), C) {
          const $ = C.style.display !== "none";
          C.style.display = $ ? "none" : "block", $ || (R == null ? void 0 : R.focus(), z && !z.textContent && (z.textContent = `CLI ready. Commands:
  cad.addNode(x, y, z)     cad.addFrame(i, j)
  cad.addSupport(n)        cad.addLoad(n, [fx,fy,fz,0,0,0])
  cad.frame([5,5],[3,3])   cad.building([5],[4],[3])
  cad.galpon(12,20,6,3)    cad.clear()
  cad.info()               cad.listNodes()
`));
        }
      }), R == null ? void 0 : R.addEventListener("mousedown", (h) => h.stopPropagation()), document.addEventListener("keydown", (h) => {
        var _a3;
        if ((h.ctrlKey || h.metaKey) && h.key === "z" && !h.shiftKey) {
          h.preventDefault(), Gs();
          return;
        }
        if ((h.ctrlKey || h.metaKey) && (h.key === "y" || h.key === "z" && h.shiftKey)) {
          h.preventDefault(), Ys();
          return;
        }
        if ((h.key === "Delete" || h.key === "Backspace") && wt.size > 0) {
          h.preventDefault(), wt.forEach(($) => Z.add($)), wt.clear(), $o && ($o.remove(), $o = null), Ne();
          return;
        }
        if (h.key === "Escape") {
          if (yo) if (kt !== null) {
            kt = null;
            const $ = tt();
            Wt && $ && ($.scene.remove(Wt), Wt.geometry.dispose(), Wt.material.dispose(), Wt = null), Gt && $ && ($.scene.remove(Gt), Gt.geometry.dispose(), Gt.material.dispose(), Gt = null), $ == null ? void 0 : $.render();
          } else yn();
          eo && vn(), po && (po = false, _o(), (_a3 = Le.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), R == null ? void 0 : R.addEventListener("keydown", (h) => {
        if (h.stopPropagation(), h.key === "Enter") {
          const $ = R.value.trim();
          if ($) {
            k.unshift($), m = -1, z && (z.textContent += `> ${$}
`);
            try {
              const v = new Function("cad", `return ${$}`)(ot);
              if (v !== void 0 && z) {
                const F = typeof v == "object" ? JSON.stringify(v, null, 2) : String(v);
                z.textContent += `${F}
`;
              }
            } catch (v) {
              z && (z.textContent += `ERROR: ${v.message}
`);
            }
            z && (z.scrollTop = z.scrollHeight), R.value = "";
          }
        } else h.key === "ArrowUp" ? (h.preventDefault(), k.length > 0 && m < k.length - 1 && (m++, R.value = k[m])) : h.key === "ArrowDown" && (h.preventDefault(), m > 0 ? (m--, R.value = k[m]) : (m = -1, R.value = ""));
      });
      let u = false, E = 0, L = 0, O = 0, H = 0;
      Le.addEventListener("mousedown", (h) => {
        const $ = h.target.tagName;
        if ($ === "BUTTON" || $ === "INPUT" || $ === "SELECT") return;
        u = true;
        const v = Le.getBoundingClientRect();
        Le.style.bottom = "unset", E = h.clientX, L = h.clientY, O = v.left, H = v.top, h.preventDefault();
      }), window.addEventListener("mousemove", (h) => {
        u && (h.preventDefault(), Le.style.left = O + (h.clientX - E) + "px", Le.style.top = H + (h.clientY - L) + "px");
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
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, a = -1 / 0, d = -1 / 0, s = -1 / 0;
      for (const [i, c, g] of t) i < o && (o = i), i > a && (a = i), c < n && (n = c), c > d && (d = c), g < l && (l = g), g > s && (s = g);
      const r = new qe((o + a) / 2, (n + d) / 2, (l + s) / 2), p = Math.max(a - o, d - n, s - l, 1);
      return {
        center: r,
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
      const d = bl(), s = new Il(l, 20, d.grid, d.grid);
      s.rotation.x = Math.PI / 2, s.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(s), o.scene.children.filter((g) => g.type === "Group" && g.name !== "gridAxes" && g.name !== "loadsGroup" && (g.name === "viewerAxes" || g.children.some((S) => S instanceof En))).forEach((g) => {
        g.traverse((S) => {
          S.geometry && S.geometry.dispose(), S.material && (S.material.map && S.material.map.dispose(), S.material.dispose());
        }), o.scene.remove(g);
      });
      const p = 0.05 * l, i = new bn();
      i.name = "viewerAxes";
      const c = d.axisArrow;
      i.add(new En(new qe(1, 0, 0), new qe(), 1, c, 0.2, 0.2)), i.add(new En(new qe(0, 1, 0), new qe(), 1, c, 0.2, 0.2)), i.add(new En(new qe(0, 0, 1), new qe(), 1, c, 0.2, 0.2)), i.children.forEach((g) => g.scale.set(p, p, p));
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
        const x = new ps(y);
        x.needsUpdate = true;
        const I = new Sn(new In({
          map: x,
          depthTest: false,
          transparent: true
        }));
        I.position.set(M[0], M[1], M[2]), I.scale.set(0.4 * p, 0.4 * p, 1), I.renderOrder = 99, i.add(I);
      }
      o.scene.add(i), t ? o.render() : Ao("3d");
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
      const { center: n, extent: l } = zo(), a = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), d = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const s = () => {
        o.scene.traverse((r) => {
          var _a3;
          if (!r.material) return;
          const p = r.type === "GridHelper" || r.type === "AxesHelper", i = r.isSprite, c = ((_a3 = r.userData) == null ? void 0 : _a3.noClip) === true;
          (p || i || c) && (Array.isArray(r.material) ? r.material.forEach((g) => {
            g.clippingPlanes = [];
          }) : r.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const r = o.perspCamera.fov, p = l / (2 * Math.tan(r * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + p * 0.5, n.y - p * 0.8, n.z + p * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const r = o.orthoCamera;
        r.left = -d * a, r.right = d * a, r.top = d, r.bottom = -d, r.near = -l * 10, r.far = l * 10, r.updateProjectionMatrix();
        const p = (i, c, g) => {
          r.position.copy(i), r.up.copy(g), o.controls.target.copy(c), r.lookAt(c), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], p(new qe(n.x, n.y, n.z + l * 2), new qe(n.x, n.y, n.z), new qe(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const i = parseInt(t.split(":")[1]), c = ((_a2 = J.hPiso) == null ? void 0 : _a2.val) ?? 3, g = (i + 1) * c, S = c * 0.45;
          o.renderer.clippingPlanes = [
            new Po(new qe(0, 0, -1), g + S),
            new Po(new qe(0, 0, 1), -g + S)
          ], s(), p(new qe(n.x, n.y, g + l * 2), new qe(n.x, n.y, g), new qe(0, 1, 0));
        } else if (t === "elevX") r.position.set(n.x + l * 2, n.y, n.z), r.up.set(0, 0, 1);
        else if (t === "elevY") r.position.set(n.x, n.y - l * 2, n.z), r.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const i = parseInt(t.split(":")[1]), c = Je[i] ?? n.x;
          if (Qe.length > 1) {
            const S = Ws(Je, i, l);
            o.renderer.clippingPlanes = [
              new Po(new qe(-1, 0, 0), c + S),
              new Po(new qe(1, 0, 0), -c + S)
            ], s(), r.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else r.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          r.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const i = parseInt(t.split(":")[1]), c = Qe[i] ?? n.y;
          if (Je.length > 1) {
            const S = Ws(Qe, i, l);
            o.renderer.clippingPlanes = [
              new Po(new qe(0, -1, 0), c + S),
              new Po(new qe(0, 1, 0), -c + S)
            ], s(), r.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else r.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          r.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(r);
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
      const o = (d, s, r) => {
        const p = document.createElement("button");
        return p.textContent = d, p.dataset.view = s, p.title = r, p.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", p.addEventListener("click", (i) => {
          var _a2;
          i.stopPropagation();
          const c = p.classList.contains("view-active");
          Le.querySelectorAll("[data-view]").forEach((g) => g.classList.remove("view-active")), c ? (Ao("3d"), (_a2 = Le.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (Ao(s), p.classList.add("view-active"));
        }), p;
      }, n = document.createElement("span");
      n.textContent = `${A("Ejes")}:`, n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      Je.forEach((d, s) => {
        const r = s < l.length ? l[s] : `X${s}`;
        t.appendChild(o(r, `axisX:${s}`, `${A("Eje")} ${r} \u2014 ${A("elevaci\xF3n mirando en")} Y`));
      });
      const a = document.createElement("span");
      a.textContent = "|", a.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(a), Qe.forEach((d, s) => {
        const r = `${s + 1}`;
        t.appendChild(o(r, `axisY:${s}`, `${A("Eje")} ${r} \u2014 ${A("elevaci\xF3n mirando en")} X`));
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
      const n = (a, d, s) => {
        const r = document.createElement("button");
        return r.textContent = a, r.dataset.view = d, r.title = s, r.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", r.addEventListener("click", (p) => {
          var _a3;
          p.stopPropagation();
          const i = r.classList.contains("view-active");
          Le.querySelectorAll("[data-view]").forEach((c) => c.classList.remove("view-active")), i ? (Ao("3d"), (_a3 = Le.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (Ao(d), r.classList.add("view-active"));
        }), r;
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
    let es = [], ro = null, qo = null;
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
      for (let r = 0; r < l.length; r++) {
        const p = n[l[r]], i = n[l[(r + 1) % l.length]];
        a.push(p[0], p[1], p[2], i[0], i[1], i[2]);
      }
      const d = new co();
      d.setAttribute("position", new Do(a, 3));
      const s = new en(d, new tn({
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
      const t = V.size > 0 || W;
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
          let d = 0, s = 0, r = 0, p = 0;
          n.forEach((c) => {
            const g = a[c];
            if (g) if (g.length === 2) {
              const S = l[g[0]], M = l[g[1]], y = Math.abs(M[0] - S[0]), f = Math.abs(M[1] - S[1]), x = Math.abs(M[2] - S[2]);
              x > y && x > f ? d++ : s++;
            } else g.length === 3 ? r++ : g.length === 4 && p++;
          });
          const i = [];
          d && i.push(`${d} columnas`), s && i.push(`${s} vigas`), p && i.push(`${p} shells Q4`), r && i.push(`${r} triangulos`), alert(`${n.length} elementos seleccionados:
${i.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        wt.forEach((n) => V.add(n)), wt.clear(), Co(), Fo(), Ne();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        W = true, G.clear(), wt.forEach((n) => G.add(n)), wt.clear(), Co(), Fo(), Ne();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        V.clear(), W = false, G.clear(), Fo(), Ne();
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
      for (const [d, s] of a) {
        const r = new Float32Array([
          n[0] - d[0] * l,
          n[1] - d[1] * l,
          n[2] - d[2] * l,
          n[0] + d[0] * l,
          n[1] + d[1] * l,
          n[2] + d[2] * l
        ]), p = new co();
        p.setAttribute("position", new Cn(r, 3));
        const i = new Qo({
          color: s,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), c = new en(p, i);
        c.computeLineDistances(), c.renderOrder = 9990, o.scene.add(c), es.push(c);
      }
      o.render();
    }
    function os() {
      const t = tt();
      for (const o of es) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      es = [], qo = null, ro && (ro.remove(), ro = null);
    }
    function Js(t, o, n, l) {
      ro || (ro = document.createElement("div"), ro.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(ro));
      const a = l.x - n.x, d = l.y - n.y, s = l.z - n.z, r = Math.sqrt(a * a + d * d + s * s), p = Math.abs(a), i = Math.abs(d), c = Math.abs(s);
      let g = "";
      p > i && p > c ? g = `\u0394X=${a.toFixed(2)}` : i > p && i > c ? g = `\u0394Y=${d.toFixed(2)}` : c > 0.01 && (g = `\u0394Z=${s.toFixed(2)}`), ro.textContent = `${r.toFixed(3)} m  ${g}`, ro.style.left = t + 20 + "px", ro.style.top = o - 10 + "px";
    }
    function Ua(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const a = new qe(l[0], l[1], l[2]), d = t.clone(), s = d.clone().sub(a), r = 0.3, p = Math.abs(s.x), i = Math.abs(s.y), c = Math.abs(s.z);
      return i < r && c < r && p > 0.01 ? new qe(d.x, a.y, a.z) : p < r && c < r && i > 0.01 ? new qe(a.x, d.y, a.z) : p < r && i < r && c > 0.01 ? new qe(a.x, a.y, d.z) : null;
    }
    function yn() {
      var _a2;
      const t = tt();
      Wt && t && (t.scene.remove(Wt), Wt.geometry.dispose(), Wt.material.dispose(), Wt = null), Gt && t && (t.scene.remove(Gt), Gt.geometry.dispose(), Gt.material.dispose(), Gt = null), os(), kt = null, lo = null, yo = false, Yo && (Yo.remove(), Yo = null), (_a2 = Le.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function Xa() {
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
        const a = t.querySelector("#dt-line"), d = t.querySelector("#dt-arc"), s = t.querySelector("#dt-node"), r = t.querySelector("#dt-area");
        a && (a.style.cssText = o(Vt === "line")), d && (d.style.cssText = o(Vt === "arc")), s && (s.style.cssText = o(Vt === "node")), r && (r.style.cssText = o(Vt === "area"));
        const p = t.querySelector("#ds-node"), i = t.querySelector("#ds-grid"), c = t.querySelector("#ds-mid"), g = t.querySelector("#ds-track");
        p && (p.style.cssText = n(Lt.node)), i && (i.style.cssText = n(Lt.grid)), c && (c.style.cssText = n(Lt.midpoint)), g && (g.style.cssText = n(Lt.track));
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
      const a = l.getBoundingClientRect(), d = (t - a.left) / a.width * 2 - 1, s = -((o - a.top) / a.height) * 2 + 1, r = new Ma();
      r.setFromCamera(new wa(d, s), n);
      const p = e.nodes.val, i = e.elements.val, c = 0.12;
      if (Lt.node) {
        let M = -1, y = 1 / 0;
        for (let f = 0; f < p.length; f++) {
          const x = p[f], I = new qe(x[0], x[1], x[2]).project(n), C = Math.sqrt((I.x - d) ** 2 + (I.y - s) ** 2);
          C < c && C < y && (y = C, M = f);
        }
        if (M >= 0) return {
          nodeIdx: M,
          worldPos: new qe(...p[M]),
          snapType: "node"
        };
      }
      if (Lt.midpoint) {
        let M = 1 / 0, y = null;
        for (const f of i) {
          if (f.length !== 2) continue;
          const x = p[f[0]], I = p[f[1]], C = new qe((x[0] + I[0]) / 2, (x[1] + I[1]) / 2, (x[2] + I[2]) / 2), z = C.clone().project(n), R = Math.sqrt((z.x - d) ** 2 + (z.y - s) ** 2);
          R < c * 0.8 && R < M && (M = R, y = C);
        }
        if (y) return {
          nodeIdx: null,
          worldPos: y,
          snapType: "mid"
        };
      }
      if (Lt.grid) {
        const M = new Po(new qe(0, 0, 1), 0), y = new qe();
        if (r.ray.intersectPlane(M, y)) {
          const f = Lt.gridSize || Qn;
          return y.x = Math.round(y.x / f) * f, y.y = Math.round(y.y / f) * f, y.z = Math.round(y.z / f) * f, {
            nodeIdx: null,
            worldPos: y,
            snapType: "grid"
          };
        }
      }
      const g = new Po(new qe(0, 0, 1), 0), S = new qe();
      return r.ray.intersectPlane(g, S), {
        nodeIdx: null,
        worldPos: S,
        snapType: "free"
      };
    }
    function Us(t) {
      const o = tt();
      if (!o) return;
      const n = e.nodes.val;
      if (Gt && (o.scene.remove(Gt), Gt.geometry.dispose(), Gt.material.dispose(), Gt = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, a = t.snapType === "node" ? 0.08 : 0.06, d = t.snapType === "mid" ? new Ml(a * 2, a * 2, a * 2) : new wl(a, 12, 12), s = new El({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        Gt = new Ta(d, s), Gt.position.copy(t.worldPos), Gt.renderOrder = 9999, o.scene.add(Gt);
      }
      if (Wt && (o.scene.remove(Wt), Wt.geometry.dispose(), Wt.material.dispose(), Wt = null), kt !== null && t.worldPos) {
        const l = n[kt], a = new co();
        if (Vt === "arc" && lo !== null) {
          const s = n[lo], r = Xs(new qe(l[0], l[1], l[2]), new qe(s[0], s[1], s[2]), t.worldPos, 16), p = [];
          for (let i = 0; i < r.length - 1; i++) p.push(r[i].x, r[i].y, r[i].z, r[i + 1].x, r[i + 1].y, r[i + 1].z);
          a.setAttribute("position", new Do(p, 3));
        } else a.setAttribute("position", new Do([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const d = new tn({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        Wt = new Bo(a, d), Vt === "arc" && lo !== null && (Wt = new en(a, d)), Wt.renderOrder = 9999, o.scene.add(Wt);
      }
      o.render();
    }
    function Xs(t, o, n, l) {
      const a = [];
      for (let d = 0; d <= l; d++) {
        const s = d / l, r = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), p = (1 - s) * (1 - s), i = 2 * (1 - s) * s, c = s * s;
        a.push(new qe(p * t.x + i * r.x + c * n.x, p * t.y + i * r.y + c * n.y, p * t.z + i * r.z + c * n.z));
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
        const n = e.nodes.val, l = new qe(...n[kt]), a = new qe(...n[lo]), d = new qe(...n[o]), s = Math.max(4, Math.round(((_a2 = J.nSubViga) == null ? void 0 : _a2.val) ?? 8)), r = Xs(l, a, d, s);
        Vo();
        const p = [
          ...e.nodes.val
        ], i = [
          ...e.elements.val
        ];
        let c = kt;
        for (let g = 1; g < r.length; g++) {
          let S;
          if (g === r.length - 1) S = o;
          else {
            const M = r[g];
            S = p.length, p.push([
              M.x,
              M.y,
              M.z
            ]);
          }
          i.push([
            c,
            S
          ]), c = S;
        }
        e.nodes.val = p, e.elements.val = i, To(), e.elementInputs.val = {
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
          ], a = so.map((d) => n[d]);
          try {
            const d = Io({
              points: a,
              polygon: Array.from({
                length: a.length
              }, (r, p) => p),
              maxMeshSize: Qn || 0.5
            }), s = [];
            for (const r of d.nodes) {
              let p = -1;
              for (let i = 0; i < n.length; i++) {
                const c = Math.abs(n[i][0] - r[0]), g = Math.abs(n[i][1] - r[1]), S = Math.abs(n[i][2] - r[2]);
                if (c < 0.01 && g < 0.01 && S < 0.01) {
                  p = i;
                  break;
                }
              }
              p >= 0 ? s.push(p) : (s.push(n.length), n.push([
                r[0],
                r[1],
                r[2]
              ]));
            }
            for (const r of d.elements) l.push([
              s[r[0]],
              s[r[1]],
              s[r[2]]
            ]);
            e.nodes.val = n, e.elements.val = l, To(), console.log(`Area: ${d.elements.length} triangulos creados desde ${so.length} vertices`);
          } catch (d) {
            console.error("Area mesh failed:", d.message);
          }
          so = [];
          return;
        }
        if (so.push(o), console.log(`Area vertex ${so.length}: node ${o}`), so.length >= 2) {
          const n = so[so.length - 2], l = e.nodes.val, a = tt();
          if (a) {
            const d = new co().setFromPoints([
              new qe(...l[n]),
              new qe(...l[o])
            ]), s = new en(d, new tn({
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
        const r = n[l[s]], p = n[l[(s + 1) % l.length]];
        a.push(r[0], r[1], r[2], p[0], p[1], p[2]);
      }
      const d = new co();
      d.setAttribute("position", new Do(a, 3)), to = new en(d, new tn({
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
      const d = e.nodes.val, s = e.elements.val;
      if (d.length === 0 || s.length === 0) return -1;
      let r = 1 / 0, p = -1;
      const i = a.ray;
      for (let g = 0; g < s.length; g++) {
        const S = s[g];
        if (S.length === 2) {
          const M = new qe(...d[S[0]]), y = new qe(...d[S[1]]), f = new Sl(M, y), x = new qe(), I = new qe();
          i.closestPointToPoint(f.getCenter(new qe()), x), f.closestPointToPoint(x, true, I);
          const C = x.distanceTo(I);
          C < r && (r = C, p = g);
        } else if (S.length === 3) {
          const M = new qe(...d[S[0]]), y = new qe(...d[S[1]]), f = new qe(...d[S[2]]), x = new qe();
          if (i.intersectTriangle(M, y, f, false, x)) {
            const C = i.origin.distanceTo(x);
            C < r && (r = C, p = g);
          } else {
            const C = M.add(y).add(f).divideScalar(3), z = new qe();
            i.closestPointToPoint(C, z);
            const R = z.distanceTo(C);
            R < r && (r = R, p = g);
          }
        } else if (S.length === 4) {
          const M = new qe(...d[S[0]]), y = new qe(...d[S[1]]), f = new qe(...d[S[2]]), x = new qe(...d[S[3]]), I = new qe();
          let C = i.intersectTriangle(M, y, f, false, I);
          if (C) {
            const z = i.origin.distanceTo(I);
            z < r && (r = z, p = g);
          }
          if (C = i.intersectTriangle(M, f, x, false, I), C) {
            const z = i.origin.distanceTo(I);
            z < r && (r = z, p = g);
          }
        }
      }
      const { extent: c } = zo();
      return r < c * 0.1 ? p : -1;
    }
    function Ee(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function as(t, o, n = 12) {
      var _a2;
      const l = Math.min(t.length, n), a = Math.min(((_a2 = t[0]) == null ? void 0 : _a2.length) || 0, n);
      let d = "<table>";
      if (o) {
        d += '<tr><td class="header"></td>';
        for (let s = 0; s < a; s++) d += `<td class="header">${o[s] || s}</td>`;
        d += "</tr>";
      }
      for (let s = 0; s < l; s++) {
        d += "<tr>", o && (d += `<td class="header">${o[s] || s}</td>`);
        for (let r = 0; r < a; r++) {
          const p = t[s][r], i = Math.abs(p) > 1e-10 ? "nonzero" : "";
          d += `<td class="${i}">${Ee(p, 2)}</td>`;
        }
        d += "</tr>";
      }
      return d += "</table>", d;
    }
    function je(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function P(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function Za(t, o, n, l, a, d, s) {
      const r = 0.8333333333333334 * o, p = 5 / 6 * o, i = p > 0 && a > 0 ? 12 * t * n / (a * p * s ** 2) : 0, c = r > 0 && a > 0 ? 12 * t * l / (a * r * s ** 2) : 0, g = t * o / s, S = a * d / s, M = 12 * t * n / s ** 3 / (1 + i), y = 6 * t * n / s ** 2 / (1 + i), f = 4 * t * n / s * (1 + i / 4) / (1 + i), x = 2 * t * n / s * (1 - i / 2) / (1 + i), I = i > 1e-10 || c > 1e-10;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n: ${I ? "Timoshenko (con deformaci\xF3n por cortante)" : "Euler-Bernoulli"}</strong></div>
      ${I ? `
      <div style="text-align:left;margin-bottom:6px;color:var(--fem-eq-sub)">
        ${P("A", "s")} = ${je("5", "6")} \xB7 ${P("A")} = <span class="highlight">${Ee(r)}</span>
        &nbsp;&nbsp; \u03C6<sub>z</sub> = ${je("12\xB7" + P("E") + "\xB7" + P("I", "z"), P("G") + "\xB7" + P("A", "s") + "\xB7" + P("L") + "\xB2")} = <span class="highlight">${Ee(i)}</span>
        &nbsp;&nbsp; \u03C6<sub>y</sub> = <span class="highlight">${Ee(c)}</span>
      </div>
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes Timoshenko (Dr. Aguiar):</strong></div>
      <div>${P("t", "z")} = ${je("12\xB7" + P("E") + "\xB7" + P("I", "z"), P("L") + "\xB3\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Ee(M)}</span> &nbsp;(cortante)</div>
      <div>${P("b", "z")} = ${je("6\xB7" + P("E") + "\xB7" + P("I", "z"), P("L") + "\xB2\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Ee(y)}</span> &nbsp;(acoplamiento)</div>
      <div>${P("k", "z")} = ${je("4\xB7" + P("E") + "\xB7" + P("I", "z") + "\xB7(1+\u03C6/4)", P("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Ee(f)}</span> &nbsp;(flexi\xF3n diagonal)</div>
      <div>${P("a", "z")} = ${je("2\xB7" + P("E") + "\xB7" + P("I", "z") + "\xB7(1\u2212\u03C6/2)", P("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Ee(x)}</span> &nbsp;(flexi\xF3n off-diag)</div>
      ` : `
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      `}
      <div>${je(P("E") + "\xB7" + P("A"), P("L"))} = <span class="highlight">${Ee(g)}</span> &nbsp;(axial)</div>
      <div>${je(P("G") + "\xB7" + P("J"), P("L"))} = <span class="highlight">${Ee(S)}</span> &nbsp;(torsi\xF3n)</div>
      ${I ? "" : `
      <div>${je("12\xB7" + P("E") + "\xB7" + P("I", "z"), P("L") + "\xB3")} = <span class="highlight">${Ee(M)}</span></div>
      <div>${je("4\xB7" + P("E") + "\xB7" + P("I", "z"), P("L"))} = <span class="highlight">${Ee(f)}</span></div>
      `}
    </div>
    <div class="fem-eq">
      ${P("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${je(P("EA"), P("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${je("\u2212" + P("EA"), P("L"))}</span>
        <span class="cell">0</span><span class="cell">${P("t", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${P("b", "z")}</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">0</span><span class="cell">${P("b", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${P("k", "z")}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712 ${I ? "(Timoshenko)" : "(Euler-Bernoulli)"}</sub>
    </div>
    ${I ? `<div class="fem-eq eq-box" style="margin-top:6px">
      <div style="text-align:left"><strong style="color:var(--fem-section-title)">Matrices de rigidez (Dr. Aguiar, Fig 7.9):</strong></div>
      <div style="margin-top:4px">${P("K", "f")} = ${P("B", "f")}<sup>T</sup> \xB7 ${P("E")}\xB7${P("I")} \xB7 ${P("B", "f")} \xB7 ${P("J")} &nbsp;<sub style="color:var(--fem-label)">(flexi\xF3n, 1 pt Gauss)</sub></div>
      <div>${P("K", "c")} = ${P("B", "c")}<sup>T</sup> \xB7 ${P("G")}\xB7${P("A'")} \xB7 ${P("B", "c")} \xB7 ${P("J")} &nbsp;<sub style="color:var(--fem-label)">(cortante, 2 pts Gauss)</sub></div>
      <div>${P("K", "total")} = ${P("K", "f")} + ${P("K", "c")}</div>
    </div>` : ""}`;
    }
    function Qa(t) {
      if (t.length === 2) {
        const n = ko(t[1], t[0]), l = Wo(n), a = n[0] / l, d = n[1] / l, s = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${P("l")} = cos(\u03B1) = ${je("\u0394x", P("L"))} = ${je(Ee(n[0]), Ee(l))} = <span class="highlight">${Ee(a)}</span></div>
        <div>${P("m")} = cos(\u03B2) = ${je("\u0394y", P("L"))} = ${je(Ee(n[1]), Ee(l))} = <span class="highlight">${Ee(d)}</span></div>
        <div>${P("n")} = cos(\u03B3) = ${je("\u0394z", P("L"))} = ${je(Ee(n[2]), Ee(l))} = <span class="highlight">${Ee(s)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${P("l")}</span><span class="cell">${P("m")}</span><span class="cell">${P("n")}</span>
          <span class="cell">${je("\u2212" + P("m"), P("D"))}</span><span class="cell">${je(P("l"), P("D"))}</span><span class="cell">0</span>
          <span class="cell">${je("\u2212" + P("l") + "\xB7" + P("n"), P("D"))}</span><span class="cell">${je("\u2212" + P("m") + "\xB7" + P("n"), P("D"))}</span><span class="cell">${P("D")}</span>
        </span>
        &nbsp; donde ${P("D")} = \u221A(${P("l")}\xB2 + ${P("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${P("T")} = ${P("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${P("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function el() {
      return `<div class="fem-eq">
      ${P("K", "global")} = ${P("T")}<sup>T</sup> \xB7 ${P("k", "local")} \xB7 ${P("T")}
    </div>`;
    }
    function tl(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${P("K", "global")}[${P("i")}, ${P("j")}] += ${P("K", "elem")}[${P("i")}, ${P("j")}]</div>
      <div style="margin-top:4px">donde ${P("i")}, ${P("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function ol(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${P("u", "local")} = ${P("T")} \xB7 ${P("u", "global")}</div>
        <div>${P("f", "local")} = ${P("k", "local")} \xB7 ${P("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${P("f")} = [${P("N", "i")}, ${P("V", "y,i")}, ${P("V", "z,i")}, ${P("M", "x,i")}, ${P("M", "y,i")}, ${P("M", "z,i")}, ${P("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${je("1", "2" + P("A"))} \xB7 ${P("D")} \xB7 ${P("B")} \xB7 ${P("u")}</div>
      <div>${P("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${P("t")} &nbsp;&nbsp; ${P("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${je(P("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function ls(t, o) {
      const n = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let a = 0; a < n; a++) l += `<td class="hdr">${o[a] || a}</td>`;
      l += "</tr>";
      for (let a = 0; a < n; a++) {
        l += `<tr><td class="hdr">${o[a] || a}</td>`;
        for (let d = 0; d < n; d++) {
          const s = t[a][d], r = (a === d ? "diag " : "") + (Math.abs(s) > 1e-10 ? "nz" : "");
          l += `<td class="${r}">${Ee(s, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function Zs() {
      const t = "0", o = je(P("EA"), P("L")), n = je("\u2212" + P("EA"), P("L")), l = je("12" + P("EI", "z"), P("L") + "\xB3"), a = je("\u221212" + P("EI", "z"), P("L") + "\xB3"), d = je("12" + P("EI", "y"), P("L") + "\xB3"), s = je("\u221212" + P("EI", "y"), P("L") + "\xB3"), r = je("6" + P("EI", "z"), P("L") + "\xB2"), p = je("\u22126" + P("EI", "z"), P("L") + "\xB2"), i = je("6" + P("EI", "y"), P("L") + "\xB2"), c = je("\u22126" + P("EI", "y"), P("L") + "\xB2"), g = je(P("GJ"), P("L")), S = je("\u2212" + P("GJ"), P("L")), M = je("4" + P("EI", "z"), P("L")), y = je("2" + P("EI", "z"), P("L")), f = je("4" + P("EI", "y"), P("L")), x = je("2" + P("EI", "y"), P("L")), I = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', C = [
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
          r,
          t,
          a,
          t,
          t,
          t,
          r
        ],
        [
          t,
          t,
          d,
          t,
          c,
          t,
          t,
          t,
          s,
          t,
          c,
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
          c,
          t,
          f,
          t,
          t,
          t,
          i,
          t,
          x,
          t
        ],
        [
          t,
          r,
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
          i,
          t,
          t,
          t,
          d,
          t,
          i,
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
          c,
          t,
          x,
          t,
          t,
          t,
          i,
          t,
          f,
          t
        ],
        [
          t,
          r,
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
      for (const m of z) k += `<td class="hdr">${m}</td>`;
      k += "</tr>";
      for (let m = 0; m < 12; m++) {
        k += `<tr><td class="hdr">${C[m]}</td>`;
        for (let u = 0; u < 12; u++) if (u < m) k += `<td style="color:var(--fem-border-cell)">${u === 0 && m > 0 ? I : ""}</td>`;
        else {
          const E = R[m][u], L = (m === u ? "diag " : "") + (E !== "0" ? "nz" : "");
          k += `<td class="${L}">${E}</td>`;
        }
        k += "</tr>";
      }
      return k += "</table>", k;
    }
    function nl(t, o, n, l, a, d, s) {
      return `<div class="coeff-grid">${[
        {
          name: `${je(P("E") + "\xB7" + P("A"), P("L"))}`,
          calc: `${je(Ee(t) + "\xD7" + Ee(o), Ee(s))}`,
          val: t * o / s,
          label: "Axial"
        },
        {
          name: `${je("12\xB7" + P("E") + "\xB7" + P("I", "z"), P("L") + "\xB3")}`,
          calc: `${je("12\xD7" + Ee(t) + "\xD7" + Ee(n), Ee(s) + "\xB3")}`,
          val: 12 * t * n / s ** 3,
          label: "Corte Y"
        },
        {
          name: `${je("6\xB7" + P("E") + "\xB7" + P("I", "z"), P("L") + "\xB2")}`,
          calc: `${je("6\xD7" + Ee(t) + "\xD7" + Ee(n), Ee(s) + "\xB2")}`,
          val: 6 * t * n / s ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${je("12\xB7" + P("E") + "\xB7" + P("I", "y"), P("L") + "\xB3")}`,
          calc: `${je("12\xD7" + Ee(t) + "\xD7" + Ee(l), Ee(s) + "\xB3")}`,
          val: 12 * t * l / s ** 3,
          label: "Corte Z"
        },
        {
          name: `${je("6\xB7" + P("E") + "\xB7" + P("I", "y"), P("L") + "\xB2")}`,
          calc: `${je("6\xD7" + Ee(t) + "\xD7" + Ee(l), Ee(s) + "\xB2")}`,
          val: 6 * t * l / s ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${je(P("G") + "\xB7" + P("J"), P("L"))}`,
          calc: `${je(Ee(a) + "\xD7" + Ee(d), Ee(s))}`,
          val: a * d / s,
          label: "Torsi\xF3n"
        },
        {
          name: `${je("4\xB7" + P("E") + "\xB7" + P("I", "z"), P("L"))}`,
          calc: `${je("4\xD7" + Ee(t) + "\xD7" + Ee(n), Ee(s))}`,
          val: 4 * t * n / s,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${je("2\xB7" + P("E") + "\xB7" + P("I", "z"), P("L"))}`,
          calc: `${je("2\xD7" + Ee(t) + "\xD7" + Ee(n), Ee(s))}`,
          val: 2 * t * n / s,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${je("4\xB7" + P("E") + "\xB7" + P("I", "y"), P("L"))}`,
          calc: `${je("4\xD7" + Ee(t) + "\xD7" + Ee(l), Ee(s))}`,
          val: 4 * t * l / s,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${je("2\xB7" + P("E") + "\xB7" + P("I", "y"), P("L"))}`,
          calc: `${je("2\xD7" + Ee(t) + "\xD7" + Ee(l), Ee(s))}`,
          val: 2 * t * l / s,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((p) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${p.label}</div>${p.name} = ${p.calc} = <span class="highlight">${Ee(p.val)}</span></div>`).join("")}</div>`;
    }
    function rs(t, o, n, l) {
      var _a2;
      const a = document.querySelector(".fem-full-overlay");
      a && a.remove();
      const d = document.createElement("div");
      d.className = "fem-full-overlay", d.innerHTML = `
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
    `, document.body.appendChild(d), (_a2 = d.querySelector("#fem-full-close")) == null ? void 0 : _a2.addEventListener("click", () => d.remove()), d.addEventListener("click", (s) => {
        s.target === d && d.remove();
      });
    }
    function Qs(t) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O;
      ao && ao.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], a = l.map((m) => o[m]), d = l.length === 2, s = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, r = (_b = e.deformOutputs) == null ? void 0 : _b.val, p = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      var i = "";
      if (d) {
        const m = Wo(ko(a[1], a[0])), u = ((_d = s.elasticities) == null ? void 0 : _d.get(t)) ?? 0, E = ((_e2 = s.areas) == null ? void 0 : _e2.get(t)) ?? 0, L = ((_f = s.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, O = ((_g = s.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, H = ((_h = s.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, h = ((_i = s.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0, $ = ((_j = s.momentReleases) == null ? void 0 : _j.get(t)) || [], v = ((_k = s.partialFixitySprings) == null ? void 0 : _k.get(t)) || [], F = [
          "P (Axial)",
          "V2 (Corte)",
          "V3 (Corte)",
          "T (Torsi\xF3n)",
          "M22 (Momento)",
          "M33 (Momento)"
        ];
        let X = "";
        for (let K = 0; K < 6; K++) {
          const le = K, te = K + 6, Q = ($.length >= 12 ? $[le] : K >= 3 && $.length >= 6 && $[K - 3]) ? "checked" : "", me = ($.length >= 12 ? $[te] : K >= 3 && $.length >= 6 && $[K]) ? "checked" : "", de = v.length >= 12 && v[le] > 0 ? v[le].toFixed(1) : "", ke = v.length >= 12 && v[te] > 0 ? v[te].toFixed(1) : "";
          X += `<tr>
          <td style="text-align:left;color:var(--fem-key)">${F[K]}</td>
          <td style="text-align:center"><input type="checkbox" data-rel="${le}" ${Q}></td>
          <td style="text-align:center"><input type="checkbox" data-rel="${te}" ${me}></td>
          <td><input type="number" data-spr="${le}" value="${de}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
          <td><input type="number" data-spr="${te}" value="${ke}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
        </tr>`;
        }
        `${l[0]}${l[1]}${Ee(m)}${Ee(u)}${Ee(E)}${Ee(L)}${Ee(O)}${Ee(H)}${Ee(h)}${X}`;
      } else {
        const m = ((_l2 = s.elasticities) == null ? void 0 : _l2.get(t)) ?? 0, u = ((_m = s.thicknesses) == null ? void 0 : _m.get(t)) ?? 0, E = ((_n2 = s.poissonsRatios) == null ? void 0 : _n2.get(t)) ?? 0, L = m / (2 * (1 + E)), O = l.length === 4, H = m / (1 - E * E);
        `${l.length}${l.join(", ")}${Ee(m)}${Ee(L)}${Ee(u)}${Ee(E)}`, O && (i = `<div class="fem-eq eq-box">
          <div style="text-align:left;margin-bottom:6px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n Q4: Membrana + Mindlin-Reissner + Drilling</strong></div>

          <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">1. Matriz constitutiva (esfuerzo plano):</strong></div>
          <div>${P("D")} = ${je(P("E"), "1\u2212\u03BD\xB2")} \xB7 <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
            <span class="cell">1</span><span class="cell">\u03BD</span><span class="cell">0</span>
            <span class="cell">\u03BD</span><span class="cell">1</span><span class="cell">0</span>
            <span class="cell">0</span><span class="cell">0</span><span class="cell">${je("1\u2212\u03BD", "2")}</span>
          </span> = ${je(Ee(m), "1\u2212" + Ee(E) + "\xB2")} = <span class="highlight">${Ee(H)}</span></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">2. Funciones de forma (Ec. 6.2, Wilson):</strong></div>
          <div>${P("N", "i")} = \xBC\xB7(1\xB1\u03BE)\xB7(1\xB1\u03B7) &nbsp;&nbsp; <sub style="color:var(--fem-label)">i = 1..4 (bilineal)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">3. Modos incompatibles (Ec. 6.13, Wilson 1971):</strong></div>
          <div>${P("N", "5")} = 1 \u2212 \u03BE\xB2 &nbsp;&nbsp; ${P("N", "6")} = 1 \u2212 \u03B7\xB2</div>
          <div style="margin-top:4px">${P("u", "x")} = \u03A3${P("N", "i")}\xB7${P("u", "xi")} + \u03B1\u2081\xB7${P("N", "5")} + \u03B1\u2082\xB7${P("N", "6")} &nbsp;<sub style="color:var(--fem-label)">(Ec. 6.12)</sub></div>
          <div>${P("u", "y")} = \u03A3${P("N", "i")}\xB7${P("u", "yi")} + \u03B1\u2083\xB7${P("N", "5")} + \u03B1\u2084\xB7${P("N", "6")}</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">4. Deformaci\xF3n-desplazamiento (Ec. 6.3):</strong></div>
          <div>${P("d")} = [${P("B", "C")} &nbsp; ${P("B", "I")}] \xB7 [${P("u")} &nbsp; \u03B1]<sup>T</sup></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">5. Submatrices de rigidez (Ec. 6.9):</strong></div>
          <div>${P("k", "CC")} = \u222B${P("B", "C")}<sup>T</sup>\xB7${P("E")}\xB7${P("B", "C")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD78 est\xE1ndar)</sub></div>
          <div>${P("k", "CI")} = \u222B${P("B", "C")}<sup>T</sup>\xB7${P("E")}\xB7${P("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD74 acoplamiento)</sub></div>
          <div>${P("k", "II")} = \u222B${P("B\u0304", "I")}<sup>T</sup>\xB7${P("E")}\xB7${P("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(4\xD74 modos internos)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">6. Condensaci\xF3n est\xE1tica (Ec. 6.11):</strong></div>
          <div style="font-size:13px"><span class="highlight">${P("k", "C")} = ${P("k", "CC")} \u2212 ${P("k", "CI")} \xB7 ${P("k", "II")}\u207B\xB9 \xB7 ${P("k", "IC")}</span></div>
          <div style="margin-top:4px;color:var(--fem-eq-sub)">Los 4 modos incompatibles \u03B1 se eliminan antes del ensamblaje global</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">7. Correcci\xF3n de Taylor (Ec. 6.7):</strong></div>
          <div>${P("B\u0304", "I")} = ${P("B", "I")} + ${P("B", "IC")} &nbsp; donde &nbsp; ${P("B", "IC")} = \u2212${je("1", "V")}\u222B${P("B", "I")} dV</div>
          <div style="color:var(--fem-eq-sub)">Jacobiano del centro para modos incompatibles \u2192 pasa patch test</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">8. Drilling DOF (Hughes-Brezzi 1989):</strong></div>
          <div>${P("K", "drill")} = \u03B1\xB7${P("G")}\xB7${P("t")} \xB7 \u222B${P("B", "d")}<sup>T</sup>\xB7${P("B", "d")} dA &nbsp; donde \u03B1 = 0.5</div>
          <div>${P("B", "d")}[i] = \u03B8<sub>z,i</sub> \u2212 \xBD\xB7(\u2202v/\u2202x \u2212 \u2202u/\u2202y) &nbsp;<sub style="color:var(--fem-label)">(rotaci\xF3n antisim\xE9trica)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">9. Placa Mindlin-Reissner + MITC4:</strong></div>
          <div>${P("D", "b")} = ${je(P("E") + "\xB7" + P("t") + "\xB3", "12\xB7(1\u2212\u03BD\xB2)")} = <span class="highlight">${Ee(m * u ** 3 / (12 * (1 - E ** 2)))}</span></div>
          <div>${P("D", "s")} = \u03BA\xB7${P("G")}\xB7${P("t")} = <span class="highlight">${Ee(5 / 6 * L * u)}</span> &nbsp; <sub style="color:var(--fem-label)">\u03BA = 5/6</sub></div>
          <div style="color:var(--fem-eq-sub)">MITC4: interpolaci\xF3n de cortante en puntos de atado (tying points)</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">10. Ensamblaje final:</strong></div>
          <div>${P("K", "24\xD724")} = ${P("K", "membrana")}(8\xD78) + ${P("K", "flexi\xF3n")}(12\xD712) + ${P("K", "drilling")}(12\xD712)</div>
          <div style="color:var(--fem-eq-sub)">DOFs por nodo: [u, v, w, \u03B8x, \u03B8y, \u03B8z]</div>
        </div>`);
      }
      let c = "", g = "", S = "";
      i || (i = "");
      let M = "", y = "", f = "", x = "", I = null, C = null, z = null, R = [];
      try {
        if (I = Fn(a, s, t), C = Pn(a), z = uo(xs(C), uo(I, C)), R = d ? [
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
        ], d) {
          const L = Wo(ko(a[1], a[0])), O = ((_o2 = s.elasticities) == null ? void 0 : _o2.get(t)) ?? 0, H = ((_p = s.areas) == null ? void 0 : _p.get(t)) ?? 0, h = ((_q = s.momentsOfInertiaZ) == null ? void 0 : _q.get(t)) ?? 0, $ = ((_r = s.momentsOfInertiaY) == null ? void 0 : _r.get(t)) ?? 0, v = ((_s2 = s.shearModuli) == null ? void 0 : _s2.get(t)) ?? 0, F = ((_t2 = s.torsionalConstants) == null ? void 0 : _t2.get(t)) ?? 0;
          i = Za(O, H, h, $, v, F, L);
        }
        M = Qa(a), y = el(), f = tl(l), x = ol(d);
        const m = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', u = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', E = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        c = `<div class="matrix-label">k_local (${I.length}\xD7${I.length}) ${m}</div>${as(I, R)}`, g = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${C.length}\xD7${C.length}) ${u}</div>${as(C, R)}`, S = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${E}</div>${as(z, R)}`;
      } catch (m) {
        c = `<div style="color:red">Error: ${m.message}</div>`;
      }
      if (r == null ? void 0 : r.deformations) {
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
          const L = ((_a3 = r.deformations) == null ? void 0 : _a3.get(u)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], O = m.map((H, h) => `<span class="prop-key">${H}</span>: <span class="${Math.abs(L[h]) > 1e-10 ? "result-val" : ""}">${Ee(L[h])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${u}:</strong> ${O}</div>`;
        }).join("");
      }
      if (p && d && (r == null ? void 0 : r.deformations) && I && C) {
        const m = (_u = p.normals) == null ? void 0 : _u.get(t), u = (_v = p.shearsY) == null ? void 0 : _v.get(t), E = (_w = p.shearsZ) == null ? void 0 : _w.get(t), L = (_x = p.torsions) == null ? void 0 : _x.get(t), O = (_y = p.bendingsY) == null ? void 0 : _y.get(t), H = (_z = p.bendingsZ) == null ? void 0 : _z.get(t), h = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], $ = [];
        for (const te of l) {
          const Q = ((_A = r.deformations) == null ? void 0 : _A.get(te)) || [
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
        const X = (te, Q) => te.map((me, de) => `<span style="color:${Math.abs(me) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${Q[de % 6]}=${Ee(me)}</span>`).join(", "), le = [
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
        `${P("u", "global")}${l.map((te, Q) => `<span style="color:var(--fem-label)">nodo ${te}:</span> ${h.map((me, de) => `<span style="color:${Math.abs($[Q * 6 + de]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${Ee($[Q * 6 + de])}</span>`).join(", ")}`).join(" | ")}${P("u", "local")}${P("T")}${P("u", "global")}${P("u", "local")}${X(v, [
          ...h,
          ...h
        ])}${P("f", "local")}${P("k", "local")}${P("u", "local")}${P("f", "local")}${F.map((te, Q) => `<span style="color:${Math.abs(te) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${le[Q]}=${Ee(te)}</span>`).join(", ")}${P("P", "1")}${P("N", "i")}${Ee(F[0])}${P("P", "7")}${P("N", "j")}${Ee(F[6])}${P("P", "2")}${P("V", "y,i")}${Ee(F[1])}${P("P", "8")}${P("V", "y,j")}${Ee(F[7])}${P("P", "3")}${P("V", "z,i")}${Ee(F[2])}${P("P", "9")}${P("V", "z,j")}${Ee(F[8])}${P("P", "4")}${P("M", "x,i")}${Ee(F[3])}${P("P", "10")}${P("M", "x,j")}${Ee(F[9])}${P("P", "5")}${P("M", "y,i")}${Ee(F[4])}${P("P", "11")}${P("M", "y,j")}${Ee(F[10])}${P("P", "6")}${P("M", "z,i")}${Ee(F[5])}${P("P", "12")}${P("M", "z,j")}${Ee(F[11])}${m ? m.map((te) => Ee(te)).join(", ") : "\u2014"}${u ? u.map((te) => Ee(te)).join(", ") : "\u2014"}${E ? E.map((te) => Ee(te)).join(", ") : "\u2014"}${L ? L.map((te) => Ee(te)).join(", ") : "\u2014"}${O ? O.map((te) => Ee(te)).join(", ") : "\u2014"}${H ? H.map((te) => Ee(te)).join(", ") : "\u2014"}`;
      } else if (p && d) {
        const m = (_B = p.normals) == null ? void 0 : _B.get(t), u = (_C = p.shearsY) == null ? void 0 : _C.get(t), E = (_D = p.shearsZ) == null ? void 0 : _D.get(t), L = (_E = p.torsions) == null ? void 0 : _E.get(t), O = (_F = p.bendingsY) == null ? void 0 : _F.get(t), H = (_G = p.bendingsZ) == null ? void 0 : _G.get(t);
        `${m ? m.map((h) => Ee(h)).join(", ") : "\u2014"}${u ? u.map((h) => Ee(h)).join(", ") : "\u2014"}${E ? E.map((h) => Ee(h)).join(", ") : "\u2014"}${L ? L.map((h) => Ee(h)).join(", ") : "\u2014"}${O ? O.map((h) => Ee(h)).join(", ") : "\u2014"}${H ? H.map((h) => Ee(h)).join(", ") : "\u2014"}`;
      } else if (p && !d) {
        const m = (_H = p.bendingXX) == null ? void 0 : _H.get(t), u = (_I = p.bendingYY) == null ? void 0 : _I.get(t), E = (_J = p.bendingXY) == null ? void 0 : _J.get(t), L = (_K = p.membraneXX) == null ? void 0 : _K.get(t), O = (_L = p.membraneYY) == null ? void 0 : _L.get(t), H = (_M = p.membraneXY) == null ? void 0 : _M.get(t);
        `${m ? m.map((h) => Ee(h)).join(", ") : "\u2014"}${u ? u.map((h) => Ee(h)).join(", ") : "\u2014"}${E ? E.map((h) => Ee(h)).join(", ") : "\u2014"}${L ? L.map((h) => Ee(h)).join(", ") : "\u2014"}${O ? O.map((h) => Ee(h)).join(", ") : "\u2014"}${H ? H.map((h) => Ee(h)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, ao = Bl(t, o, n, s, r, p), ao.id = "fem-inspect-panel", document.body.appendChild(ao), (_N = ao.querySelector("#er-close")) == null ? void 0 : _N.addEventListener("click", () => _o()), (_O = ao.querySelector("#rel-apply")) == null ? void 0 : _O.addEventListener("click", () => {
        const m = ao.querySelectorAll("input[data-rel]"), u = ao.querySelectorAll("input[data-spr]"), E = new Array(12).fill(false), L = new Array(12).fill(0);
        m.forEach((H) => {
          E[parseInt(H.dataset.rel)] = H.checked;
        }), u.forEach((H) => {
          const h = parseFloat(H.value);
          h > 0 && (L[parseInt(H.dataset.spr)] = h);
        }), s.momentReleases || (s.momentReleases = /* @__PURE__ */ new Map()), s.partialFixitySprings || (s.partialFixitySprings = /* @__PURE__ */ new Map()), E.some((H) => H) ? s.momentReleases.set(t, E) : s.momentReleases.delete(t), L.some((H) => H > 0) ? s.partialFixitySprings.set(t, L) : s.partialFixitySprings.delete(t), console.log(`Releases elem ${t}:`, E.map((H, h) => H ? relIds[h] : "").filter(Boolean).join(" ") || "none"), console.log(`Springs elem ${t}:`, L);
        const O = ao.querySelector("#rel-apply");
        O.textContent = "\u2713 Aplicado", O.style.background = "#4caf50", setTimeout(() => {
          O.textContent = "Aplicar", O.style.background = "var(--fem-heading)";
        }, 1500);
      });
      const k = d ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const m = Wo(ko(a[1], a[0])), u = ((_a3 = s.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, E = ((_b2 = s.areas) == null ? void 0 : _b2.get(t)) ?? 0, L = ((_c2 = s.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, O = ((_d2 = s.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, H = ((_e3 = s.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, h = ((_f2 = s.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return nl(u, E, L, O, H, h, m);
      })() : void 0;
      ao.querySelectorAll("[data-full]").forEach((m) => {
        m.addEventListener("click", (u) => {
          u.stopPropagation();
          const E = m.dataset.full;
          if (E === "kLocal" && I) {
            const L = d ? Zs() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            rs(`Elemento ${t} \u2014 Rigidez Local k_local`, L, ls(I, R), k);
          } else if (E === "T" && C) rs(`Elemento ${t} \u2014 Transformaci\xF3n T`, M, ls(C, R));
          else if (E === "kGlobal" && z) {
            const L = d ? Zs() : "<em>Shell 18\xD718</em>";
            rs(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, L, ls(z, R), k);
          }
        });
      });
    }
    function ea() {
      const l = [], a = [];
      for (let y = 0; y <= 8; y++) {
        const f = y / 8, x = 30 * f, C = 12 * (1 - f) * (1 - f * 0.3) / 2, z = l.length;
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
      const d = /* @__PURE__ */ new Map();
      for (let y = 0; y < 4; y++) d.set(y, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const s = l.length - 4, r = /* @__PURE__ */ new Map();
      for (let y = 0; y < 4; y++) r.set(s + y, [
        0,
        0,
        -50,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: r
      });
      const p = 2e8, i = 77e6, c = 5e-3, g = 2e-6, S = 1e-6, M = {
        elasticities: new Map(a.map((y, f) => [
          f,
          p
        ])),
        shearModuli: new Map(a.map((y, f) => [
          f,
          i
        ])),
        areas: new Map(a.map((y, f) => [
          f,
          c
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
        const y = Ft(l, a, {
          supports: d,
          loads: r
        }, M);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Eiffel deform:", y.message);
      }
      setTimeout(() => It(), 50), st(), console.log(`Torre Eiffel: ${l.length} nodos, ${a.length} elementos, H=30m`);
    }
    function ta() {
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
      const d = /* @__PURE__ */ new Map();
      d.set(0, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), d.set(1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), d.set(20 * 2, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), d.set(20 * 2 + 1, [
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
        supports: d,
        loads: s
      });
      const r = 2e8, p = 77e6, i = 0.01, c = 5e-6, g = 2e-6, S = {
        elasticities: new Map(a.map((M, y) => [
          y,
          r
        ])),
        shearModuli: new Map(a.map((M, y) => [
          y,
          p
        ])),
        areas: new Map(a.map((M, y) => [
          y,
          i
        ])),
        momentsOfInertiaZ: new Map(a.map((M, y) => [
          y,
          c
        ])),
        momentsOfInertiaY: new Map(a.map((M, y) => [
          y,
          c
        ])),
        torsionalConstants: new Map(a.map((M, y) => [
          y,
          g
        ]))
      };
      e.elementInputs && (e.elementInputs.val = S);
      try {
        const M = Ft(l, a, {
          supports: d,
          loads: s
        }, S);
        M && e.deformOutputs && (e.deformOutputs.val = M);
      } catch (M) {
        console.warn("Arco:", M.message);
      }
      setTimeout(() => It(), 50), st(), console.log(`Arco Gateway: ${l.length} nodos, ${a.length} elem, span=20m, H=20m`);
    }
    function oa() {
      const d = [], s = [];
      for (let f = 0; f <= 16; f++) {
        const x = 60 * f / 16;
        d.push([
          x,
          -6 / 2,
          8
        ]), d.push([
          x,
          6 / 2,
          8
        ]);
      }
      const r = d.length;
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
      ], i = [];
      for (const f of p) {
        const x = 60 * f / 16, I = d.length;
        d.push([
          x,
          -6 / 2,
          0
        ]);
        const C = d.length;
        d.push([
          x,
          6 / 2,
          0
        ]);
        const z = d.length;
        d.push([
          x,
          -6 / 2,
          28
        ]);
        const R = d.length;
        d.push([
          x,
          6 / 2,
          28
        ]), i.push(z, R), s.push([
          I,
          f * 2
        ]), s.push([
          f * 2,
          z
        ]), s.push([
          C,
          f * 2 + 1
        ]), s.push([
          f * 2 + 1,
          R
        ]), s.push([
          z,
          R
        ]);
      }
      for (const f of i) {
        const x = d[f][0];
        for (let I = 0; I <= 16; I++) {
          const C = 60 * I / 16;
          if (Math.abs(C - x) > 60 * 0.05 && Math.abs(C - x) < 60 * 0.45) {
            const z = d[f][1] < 0 ? I * 2 : I * 2 + 1;
            I % 2 === 0 && s.push([
              f,
              z
            ]);
          }
        }
      }
      const c = /* @__PURE__ */ new Map();
      c.set(0, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), c.set(1, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), c.set(16 * 2, [
        false,
        true,
        true,
        false,
        false,
        false
      ]), c.set(16 * 2 + 1, [
        false,
        true,
        true,
        false,
        false,
        false
      ]);
      for (let f = r; f < r + p.length * 4; f += 4) c.set(f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), c.set(f + 1, [
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
      e.nodes.val = d, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
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
        const f = Ft(d, s, {
          supports: c,
          loads: g
        }, y);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Puente:", f.message);
      }
      setTimeout(() => It(), 50), st(), console.log(`Puente atirantado: ${d.length} nodos, ${s.length} elem, span=60m`);
    }
    function na() {
      const d = [], s = [];
      for (let x = 0; x <= 12; x++) {
        const I = x * 3.5, C = x * 5 * Math.PI / 180;
        for (let z = 0; z < 6; z++) {
          const R = C + 2 * Math.PI * z / 6, k = 5 * Math.cos(R), m = 5 * Math.sin(R);
          d.push([
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
          for (let z = 0; z < 6; z++) s.push([
            I + z,
            C + z
          ]), s.push([
            I + z,
            C + (z + 1) % 6
          ]);
        }
      }
      for (let x = 0; x <= 12; x++) {
        const I = d.length;
        d.push([
          0,
          0,
          x * 3.5
        ]);
        const C = x * 6;
        for (let z = 0; z < 6; z++) s.push([
          I,
          C + z
        ]);
      }
      const r = 13 * 6;
      for (let x = 0; x < 12; x++) s.push([
        r + x,
        r + x + 1
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
      p.set(r, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const i = /* @__PURE__ */ new Map();
      for (let x = 1; x <= 12; x++) {
        const I = 10 * x / 12, C = x * 6;
        for (let z = 0; z < 6; z++) i.set(C + z, [
          I,
          0,
          -5,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = d, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: p,
        loads: i
      });
      const c = 2e8, g = 77e6, S = 8e-3, M = 1e-5, y = 5e-6, f = {
        elasticities: new Map(s.map((x, I) => [
          I,
          c
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
        const x = Ft(d, s, {
          supports: p,
          loads: i
        }, f);
        x && e.deformOutputs && (e.deformOutputs.val = x);
      } catch (x) {
        console.warn("Twisted:", x.message);
      }
      setTimeout(() => It(), 50), st(), console.log(`Torre Twist: ${d.length} nodos, ${s.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function sa() {
      const a = [], d = [];
      for (let f = 0; f <= 20; f++) {
        const x = f / 20, I = f * 3;
        let C = 8 * (1 - x * 0.7);
        x > 0.4 && (C *= 0.85), x > 0.7 && (C *= 0.7);
        const z = a.length;
        a.push([
          0,
          0,
          I
        ]);
        for (let R = 0; R < 3; R++) {
          const k = R * 2 * Math.PI / 3 - Math.PI / 2, m = C * Math.cos(k), u = C * Math.sin(k), E = a.length;
          a.push([
            m,
            u,
            I
          ]), d.push([
            z,
            E
          ]);
          const L = a.length;
          a.push([
            m * 0.5,
            u * 0.5,
            I
          ]), d.push([
            z,
            L
          ]), d.push([
            L,
            E
          ]);
        }
        for (let R = 0; R < 3; R++) {
          const k = z + 1 + R * 2, m = z + 1 + (R + 1) % 3 * 2;
          d.push([
            k,
            m
          ]);
        }
        if (f < 20) {
          const k = z + 7;
          d.push([
            z,
            k
          ]);
          for (let m = 0; m < 3; m++) d.push([
            z + 1 + m * 2,
            k + 1 + m * 2
          ]), d.push([
            z + 2 + m * 2,
            k + 2 + m * 2
          ]), d.push([
            z + 1 + m * 2,
            k + 2 + m * 2
          ]);
        }
      }
      const s = /* @__PURE__ */ new Map(), r = 1 + 3 * 2;
      for (let f = 0; f < r; f++) s.set(f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const p = /* @__PURE__ */ new Map();
      for (let f = 1; f <= 20; f++) {
        const x = f * r, I = 5 * f / 20;
        p.set(x, [
          I,
          0,
          -10,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = a, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: p
      });
      const i = 35e6, c = 14e6, g = 0.02, S = 5e-5, M = 2e-5, y = {
        elasticities: new Map(d.map((f, x) => [
          x,
          i
        ])),
        shearModuli: new Map(d.map((f, x) => [
          x,
          c
        ])),
        areas: new Map(d.map((f, x) => [
          x,
          g
        ])),
        momentsOfInertiaZ: new Map(d.map((f, x) => [
          x,
          S
        ])),
        momentsOfInertiaY: new Map(d.map((f, x) => [
          x,
          S
        ])),
        torsionalConstants: new Map(d.map((f, x) => [
          x,
          M
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const f = Ft(a, d, {
          supports: s,
          loads: p
        }, y);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Burj:", f.message);
      }
      setTimeout(() => It(), 50), st(), console.log(`Burj Khalifa: ${a.length} nodos, ${d.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function aa() {
      const t = [], o = [];
      for (let g = 0; g < 3; g++) {
        const S = g * 12, M = 15 - g * 2, y = 20 - g * 3, f = 8 - g, x = t.length;
        for (let C = 0; C <= 4; C++) {
          const z = C / 4, R = -f / 2 + f * z, k = y * (1 - z * z * 0.3);
          for (let m = 0; m <= 12; m++) {
            const u = m / 12, E = S + k * u, L = M * Math.sin(Math.PI * u) * (1 - z * z * 0.5), O = R;
            t.push([
              E,
              O,
              L
            ]);
          }
        }
        const I = 13;
        for (let C = 0; C < 4; C++) for (let z = 0; z < 12; z++) {
          const R = x + C * I + z, k = x + C * I + z + 1, m = x + (C + 1) * I + z + 1, u = x + (C + 1) * I + z;
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
      const d = /* @__PURE__ */ new Map();
      for (let g = 0; g < t.length; g++) t[g][2] > 2 && d.set(g, [
        0,
        0,
        -5,
        0,
        0,
        0
      ]);
      e.nodes.val = t, e.elements.val = o, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: d
      });
      const s = 35e6, r = 0.2, p = 0.15, i = s / (2 * (1 + r)), c = {
        elasticities: new Map(o.map((g, S) => [
          S,
          s
        ])),
        poissonsRatios: new Map(o.map((g, S) => [
          S,
          r
        ])),
        thicknesses: new Map(o.map((g, S) => [
          S,
          p
        ])),
        shearModuli: new Map(o.map((g, S) => [
          S,
          i
        ]))
      };
      e.elementInputs && (e.elementInputs.val = c);
      try {
        const g = Ft(t, o, {
          supports: a,
          loads: d
        }, c);
        g && e.deformOutputs && (e.deformOutputs.val = g);
      } catch (g) {
        console.warn("Opera:", g.message);
      }
      setTimeout(() => It(), 50), st(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function la() {
      const l = [], a = [];
      for (let y = 0; y <= 15; y++) {
        const f = y / 15, x = y * 3.5, I = 5 * (0.6 + 0.4 * Math.sin(Math.PI * f));
        if (f > 0.9) {
          const C = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (f - 0.9) * 8);
          for (let z = 0; z < 12; z++) {
            const R = 2 * Math.PI * z / 12;
            l.push([
              Math.max(C, 1) * Math.cos(R),
              Math.max(C, 1) * Math.sin(R),
              x
            ]);
          }
        } else for (let C = 0; C < 12; C++) {
          const z = 2 * Math.PI * C / 12;
          l.push([
            I * Math.cos(z),
            I * Math.sin(z),
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
          const z = (C + I + 12) % 12;
          a.push([
            f + C,
            x + z
          ]), a.push([
            f + C,
            x + C
          ]);
        }
      }
      const d = 15 * 12;
      for (let y = 0; y < 12; y++) a.push([
        d + y,
        d + (y + 1) % 12
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
      const r = /* @__PURE__ */ new Map();
      for (let y = 1; y <= 15; y++) {
        const f = y * 12, x = 3 * y / 15;
        for (let I = 0; I < 12; I += 3) r.set(f + I, [
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
        loads: r
      });
      const p = 2e8, i = 77e6, c = 6e-3, g = 8e-6, S = 4e-6, M = {
        elasticities: new Map(a.map((y, f) => [
          f,
          p
        ])),
        shearModuli: new Map(a.map((y, f) => [
          f,
          i
        ])),
        areas: new Map(a.map((y, f) => [
          f,
          c
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
        const y = Ft(l, a, {
          supports: s,
          loads: r
        }, M);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Diagrid:", y.message);
      }
      setTimeout(() => It(), 50), st(), console.log(`Diagrid Tower: ${l.length} nodos, ${a.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function is() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = w, o = ((_a2 = J.W) == null ? void 0 : _a2.val) ?? 5, n = ((_b = J.H) == null ? void 0 : _b.val) ?? 3, l = ((_c = J.t) == null ? void 0 : _c.val) ?? 0.2, a = Math.round(((_d = J.nx) == null ? void 0 : _d.val) ?? 8), d = Math.round(((_e2 = J.ny) == null ? void 0 : _e2.val) ?? 6), s = ((_f = J.E) == null ? void 0 : _f.val) ?? 25e6, r = ((_g = J.nu) == null ? void 0 : _g.val) ?? 0.2, p = ((_h = J.P) == null ? void 0 : _h.val) ?? 100, i = s / (2 * (1 + r)), c = o / a, g = n / d, S = [], M = [], y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
      for (let k = 0; k <= d; k++) for (let m = 0; m <= a; m++) S.push([
        m * c,
        0,
        k * g
      ]);
      const x = a + 1;
      for (let k = 0; k < d; k++) for (let m = 0; m < a; m++) M.push([
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
      for (let k = 0; k <= a; k++) I.push(d * x + k);
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
      const z = {
        elasticities: new Map(M.map((k, m) => [
          m,
          s
        ])),
        poissonsRatios: new Map(M.map((k, m) => [
          m,
          r
        ])),
        thicknesses: new Map(M.map((k, m) => [
          m,
          l
        ])),
        shearModuli: new Map(M.map((k, m) => [
          m,
          i
        ])),
        densities: new Map(M.map((k, m) => [
          m,
          t.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = z);
      try {
        const k = performance.now(), m = Ft(S, M, {
          supports: y,
          loads: f
        }, z), u = performance.now() - k;
        if (m && e.deformOutputs) {
          e.deformOutputs.val = m;
          const E = Eo(S, M, z, m);
          e.analyzeOutputs && (e.analyzeOutputs.val = E);
          let L = 0, O = -1, H = 0, h = 0;
          m.deformations.forEach((v, F) => {
            const X = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
            X > L && (L = X, O = F, H = v[0], h = v[2]);
          });
          const $ = [];
          $.push('<b style="color:var(--cad-heading)">Muro Q4 \u2014 Membrana (Plane Stress)</b>'), $.push(`${S.length} nodos, ${M.length} elem Q4, ${S.length * 6} DOFs`), $.push(`W=${o}m, H=${n}m, t=${l}m, E=${s} kN/m\xB2, \u03BD=${r}`), $.push(`P=${p} kN (lateral, ${I.length} nodos top)`), $.push('<hr style="border-color:var(--cad-border);margin:4px 0">'), $.push(`K\xB7u=F \u2192 SparseLU \u2192 <span style="color:#00cc88">${u.toFixed(0)} ms</span>`), $.push("<b>Desplazamientos:</b>"), $.push(`&nbsp;&nbsp;max|u| = <b style="color:var(--cad-heading)">${L.toExponential(4)}</b> m (nodo ${O})`), $.push(`&nbsp;&nbsp;u<sub>x</sub> = <b>${(H * 1e3).toFixed(4)}</b> mm`), $.push(`&nbsp;&nbsp;u<sub>z</sub> = ${(h * 1e3).toFixed(4)} mm`), $.push('<hr style="border-color:var(--cad-border);margin:4px 0">'), $.push("<b>Desplazamientos top (ux):</b>");
          for (const v of I) {
            const F = m.deformations.get(v);
            F && $.push(`&nbsp;&nbsp;nodo ${v}: ux=${(F[0] * 1e3).toFixed(4)} mm`);
          }
          $.push('<hr style="border-color:var(--cad-border);margin:4px 0">'), $.push(`<b style="color:#00cc88">\u2714 Completado: ${(performance.now() - k).toFixed(0)} ms</b>`), window.__femLog = $, console.log(`Muro Q4: Ux_max=${H.toExponential(4)} m (nodo ${O})`);
        }
      } catch (k) {
        console.warn("MuroQ4:", k.message);
      }
      const R = tt();
      R && (R.settings.shellResults.val = "displacementX"), setTimeout(() => It(), 50), st();
    }
    function ra() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = w, o = ((_a2 = J.L) == null ? void 0 : _a2.val) ?? 6, n = ((_b = J.h) == null ? void 0 : _b.val) ?? 0.5, l = ((_c = J.t) == null ? void 0 : _c.val) ?? 0.2, a = Math.round(((_d = J.nx) == null ? void 0 : _d.val) ?? 12), d = Math.round(((_e2 = J.ny) == null ? void 0 : _e2.val) ?? 4), s = ((_f = J.E) == null ? void 0 : _f.val) ?? 25e6, r = ((_g = J.nu) == null ? void 0 : _g.val) ?? 0.2, p = ((_h = J.P) == null ? void 0 : _h.val) ?? 50, i = s / (2 * (1 + r)), c = o / a, g = n / d, S = [], M = [], y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
      for (let R = 0; R <= d; R++) for (let k = 0; k <= a; k++) S.push([
        k * c,
        R * g,
        0
      ]);
      const x = a + 1;
      for (let R = 0; R < d; R++) for (let k = 0; k < a; k++) M.push([
        R * x + k,
        R * x + k + 1,
        (R + 1) * x + k + 1,
        (R + 1) * x + k
      ]);
      for (let R = 0; R <= d; R++) y.set(R * x, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const I = Math.floor(d / 2) * x + a;
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
        elasticities: new Map(M.map((R, k) => [
          k,
          s
        ])),
        poissonsRatios: new Map(M.map((R, k) => [
          k,
          r
        ])),
        thicknesses: new Map(M.map((R, k) => [
          k,
          l
        ])),
        shearModuli: new Map(M.map((R, k) => [
          k,
          i
        ])),
        densities: new Map(M.map((R, k) => [
          k,
          t.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = C);
      try {
        const R = Ft(S, M, {
          supports: y,
          loads: f
        }, C);
        if (R && e.deformOutputs) {
          e.deformOutputs.val = R;
          const k = Eo(S, M, C, R);
          e.analyzeOutputs && (e.analyzeOutputs.val = k);
          const m = R.deformations.get(I), u = m ? m[2] : 0, E = l * n * n * n / 12, L = p * o * o * o / (3 * s * E);
          console.log(`Viga Q4: Uz_tip=${u.toExponential(4)} | Analitico=${L.toExponential(4)} | ratio=${(Math.abs(u) / L).toFixed(4)}`);
        }
      } catch (R) {
        console.warn("VigaQ4:", R.message);
      }
      const z = tt();
      z && (z.settings.shellResults.val = "displacementZ"), setTimeout(() => It(), 50), st();
    }
    function ia() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = w, o = ((_a2 = J.Lx) == null ? void 0 : _a2.val) ?? 4, n = ((_b = J.Lz) == null ? void 0 : _b.val) ?? 2, l = ((_c = J.t) == null ? void 0 : _c.val) ?? 0.15, a = Math.round(((_d = J.nx) == null ? void 0 : _d.val) ?? 8), d = Math.round(((_e2 = J.nz) == null ? void 0 : _e2.val) ?? 4), s = ((_f = J.E) == null ? void 0 : _f.val) ?? 25e6, r = ((_g = J.nu) == null ? void 0 : _g.val) ?? 0.2, p = ((_h = J.P) == null ? void 0 : _h.val) ?? 20, i = s / (2 * (1 + r)), c = o / a, g = n / d, S = [], M = [], y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
      for (let k = 0; k <= d; k++) for (let m = 0; m <= a; m++) S.push([
        m * c,
        0,
        k * g
      ]);
      const x = a + 1;
      for (let k = 0; k < d; k++) for (let m = 0; m < a; m++) M.push([
        k * x + m,
        k * x + m + 1,
        (k + 1) * x + m + 1,
        (k + 1) * x + m
      ]);
      for (let k = 0; k <= d; k++) y.set(k * x, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const I = [];
      for (let k = 0; k <= d; k++) I.push(k * x + a);
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
      const z = {
        elasticities: new Map(M.map((k, m) => [
          m,
          s
        ])),
        poissonsRatios: new Map(M.map((k, m) => [
          m,
          r
        ])),
        thicknesses: new Map(M.map((k, m) => [
          m,
          l
        ])),
        shearModuli: new Map(M.map((k, m) => [
          m,
          i
        ])),
        densities: new Map(M.map((k, m) => [
          m,
          t.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = z);
      try {
        const k = Ft(S, M, {
          supports: y,
          loads: f
        }, z);
        if (k && e.deformOutputs) {
          e.deformOutputs.val = k;
          const m = Eo(S, M, z, k);
          e.analyzeOutputs && (e.analyzeOutputs.val = m);
          const u = (d / 2 | 0) * x + a, E = k.deformations.get(u), L = E ? E[2] : 0;
          console.log(`Placa XZ Q4: Uz_tip=${L.toExponential(4)} m`);
        }
      } catch (k) {
        console.warn("PlacaXZ:", k.message);
      }
      const R = tt();
      R && (R.settings.shellResults.val = "displacementZ"), setTimeout(() => It(), 50), st();
    }
    function ca() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2;
      const t = w, o = ((_a2 = J.Lx) == null ? void 0 : _a2.val) ?? 6, n = ((_b = J.Ly) == null ? void 0 : _b.val) ?? 8, l = ((_c = J.H1) == null ? void 0 : _c.val) ?? 3, a = ((_d = J.H2) == null ? void 0 : _d.val) ?? 4.5, d = Math.round(((_e2 = J.nCol) == null ? void 0 : _e2.val) ?? 4), s = Math.round(((_f = J.nCorr) == null ? void 0 : _f.val) ?? 8), r = ((_g = J.E) == null ? void 0 : _g.val) ?? t.E, p = ((_h = J.t) == null ? void 0 : _h.val) ?? 5e-4, i = ((_i = J.q) == null ? void 0 : _i.val) ?? 1, c = 0.3, g = r / (2 * (1 + c)), S = ((_j = J.colD) == null ? void 0 : _j.val) ?? 0.16, M = ((_k = J.colBf) == null ? void 0 : _k.val) ?? 0.16, y = ((_l2 = J.colTf) == null ? void 0 : _l2.val) ?? 0.013, f = ((_m = J.colTw) == null ? void 0 : _m.val) ?? 8e-3, x = ((_n2 = J.vigD) == null ? void 0 : _n2.val) ?? 0.2, I = ((_o2 = J.vigBf) == null ? void 0 : _o2.val) ?? 0.1, C = ((_p = J.vigTf) == null ? void 0 : _p.val) ?? 85e-4, z = ((_q = J.vigTw) == null ? void 0 : _q.val) ?? 56e-4, R = ((_r = J.corrB) == null ? void 0 : _r.val) ?? 0.06, k = ((_s2 = J.corrT) == null ? void 0 : _s2.val) ?? 4e-3, m = (Se, We, Et, oo) => {
        const So = Se - 2 * Et, Zo = 2 * We * Et + So * oo, wn = (We * Se ** 3 - (We - oo) * So ** 3) / 12, fl = (2 * Et * We ** 3 + So * oo ** 3) / 12, ul = (2 * We * Et ** 3 + So * oo ** 3) / 3;
        return {
          A: Zo,
          Iy: wn,
          Iz: fl,
          J: ul
        };
      }, u = m(S, M, y, f), E = m(x, I, C, z), L = R - 2 * k, O = R * R - L * L, H = (R ** 4 - L ** 4) / 12, h = 2 * k * (R - k) ** 2 * (R - k) / 2, $ = u.A, v = u.Iz, F = u.Iy, X = u.J, K = E.A, le = E.Iz, te = E.Iy, Q = E.J, me = O, de = H, ke = H, Re = h, q = 3, ce = [], oe = [], pe = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), ge = [];
      for (let Se = 0; Se < q; Se++) ge.push(Se * o / (q - 1));
      const Ie = [];
      for (let Se = 0; Se < d; Se++) Ie.push(Se * n / (d - 1));
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
        for (let We = 0; We < d; We++) vt[Se][We] = ce.length, ce.push([
          ge[Se],
          Ie[We],
          0
        ]);
      }
      const Dt = [];
      for (let Se = 0; Se < d; Se++) Dt.push(we.findIndex((We) => Math.abs(We - Ie[Se]) < 1e-6));
      const yt = [];
      let Ct = 0;
      for (let Se = 0; Se < q; Se++) for (let We = 0; We < d; We++) oe.push([
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
      for (let Se = 0; Se < q; Se++) for (let We = 0; We < d; We++) pe.set(vt[Se][We], [
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
        const So = -i * Et * oo, Zo = et[Se][We], wn = ee.get(Zo) || [
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
      const go = /* @__PURE__ */ new Map(), Kt = /* @__PURE__ */ new Map(), jt = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map(), Xt = /* @__PURE__ */ new Map(), Rt = /* @__PURE__ */ new Map(), fo = /* @__PURE__ */ new Map(), io = /* @__PURE__ */ new Map(), wo = /* @__PURE__ */ new Map(), Mn = t.rho;
      for (let Se = 0; Se < oe.length; Se++) {
        go.set(Se, r), $t.set(Se, g), Rt.set(Se, Mn);
        const We = yt[Se];
        if (We === "col") {
          Kt.set(Se, $), jt.set(Se, v), at.set(Se, F), Xt.set(Se, X);
          const Et = new Array(12).fill(false);
          Et[10] = true, Et[11] = true, wo.set(Se, Et);
        } else if (We === "vig") Kt.set(Se, K), jt.set(Se, le), at.set(Se, te), Xt.set(Se, Q);
        else if (We === "corr") {
          Kt.set(Se, me), jt.set(Se, de), at.set(Se, ke), Xt.set(Se, Re);
          const Et = new Array(12).fill(false);
          Et[4] = true, Et[5] = true, Et[10] = true, Et[11] = true, wo.set(Se, Et);
        } else We === "shell" && (fo.set(Se, c), io.set(Se, p));
      }
      const Ko = {
        elasticities: go,
        areas: Kt,
        momentsOfInertiaZ: jt,
        momentsOfInertiaY: at,
        shearModuli: $t,
        torsionalConstants: Xt,
        densities: Rt,
        poissonsRatios: fo,
        thicknesses: io,
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
        const o = (x) => {
          var _a3;
          return parseFloat(((_a3 = t.querySelector(`#${x}`)) == null ? void 0 : _a3.value) || "0");
        }, n = o("po-colB"), l = o("po-colH"), a = o("po-fc") * 1e3, d = o("po-fy") * 1e3, s = o("po-H"), r = o("po-L"), p = o("po-As") * 1e-4, i = o("po-nbar"), c = o("po-drift") / 100, g = o("po-ncycles"), S = t.querySelector("#pushover-status");
        S.textContent = "Generando historia de desplazamientos...";
        const M = [], y = c * s, f = 40;
        for (let x = 1; x <= g; x++) {
          const I = y * x / g;
          for (let C = 0; C <= f; C++) M.push(I * Math.sin(2 * Math.PI * C / f));
        }
        S.textContent = `Resolviendo pushover (${M.length} pasos)...`;
        try {
          const { cyclicPushover: x } = await cs(async () => {
            const { cyclicPushover: C } = await import("./cyclicPushoverCpp-Xwxa7wee.js").then(async (m) => {
              await m.__tla;
              return m;
            });
            return {
              cyclicPushover: C
            };
          }, __vite__mapDeps([8,5]), import.meta.url), I = await x({
            colHeight: s,
            beamLength: r,
            col: {
              b: n,
              h: l,
              fpc: -a,
              Fy_rebar: d,
              E_rebar: 2e8,
              rebar_area: p,
              cover: 0.04,
              n_rebar: i
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -a,
              Fy_rebar: d,
              E_rebar: 2e8,
              rebar_area: p * 0.7,
              cover: 0.03,
              n_rebar: i
            },
            dispHistory: M
          });
          S.textContent = `Completado: ${I.nSteps} pasos`, ll(t.querySelector("#pushover-canvas"), I.displacements, I.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${a / 1e3}MPa, Fy=${d / 1e3}MPa`);
        } catch (x) {
          S.textContent = `Error: ${x.message}`, console.error("Pushover failed:", x);
        }
      });
    }
    function ll(t, o, n, l) {
      const a = t.getContext("2d");
      if (!a || o.length === 0) return;
      const d = t.width, s = t.height, r = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, p = d - r.left - r.right, i = s - r.top - r.bottom;
      a.fillStyle = "#111118", a.fillRect(0, 0, d, s);
      let c = Math.min(...o), g = Math.max(...o), S = Math.min(...n), M = Math.max(...n);
      c === g && (c -= 0.01, g += 0.01), S === M && (S -= 1, M += 1);
      const y = g - c, f = M - S, x = (R) => r.left + (R - c) / y * p, I = (R) => r.top + i - (R - S) / f * i;
      a.strokeStyle = "#333", a.lineWidth = 0.5, c < 0 && g > 0 && (a.strokeStyle = "#555", a.beginPath(), a.moveTo(x(0), r.top), a.lineTo(x(0), r.top + i), a.stroke()), S < 0 && M > 0 && (a.beginPath(), a.moveTo(r.left, I(0)), a.lineTo(r.left + p, I(0)), a.stroke()), a.strokeStyle = "#ff4444", a.lineWidth = 1.5, a.beginPath(), a.moveTo(x(o[0]), I(n[0]));
      for (let R = 1; R < o.length; R++) a.lineTo(x(o[R]), I(n[R]));
      a.stroke(), a.fillStyle = "#aaa", a.font = "11px monospace", a.textAlign = "center", a.fillText("Desplazamiento (m)", r.left + p / 2, s - 5), a.save(), a.translate(12, r.top + i / 2), a.rotate(-Math.PI / 2), a.fillText("Fuerza (kN)", 0, 0), a.restore(), a.fillStyle = "#ee9b00", a.font = "bold 11px monospace", a.textAlign = "center", a.fillText(l, d / 2, 15), a.fillStyle = "#888", a.font = "9px monospace", a.textAlign = "center";
      const C = y / 5;
      for (let R = 0; R <= 5; R++) {
        const k = c + C * R;
        a.fillText((k * 1e3).toFixed(1), x(k), s - r.bottom + 15);
      }
      a.textAlign = "right";
      const z = f / 5;
      for (let R = 0; R <= 5; R++) {
        const k = S + z * R;
        a.fillText(k.toFixed(0), r.left - 5, I(k) + 3);
      }
    }
    let dn = null;
    function rl() {
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
      }), t.querySelector("#nl-test").addEventListener("click", () => il(t));
    }
    function il(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), a = parseFloat(t.querySelector("#nl-r0").value), d = parseFloat(t.querySelector("#nl-amp").value), s = parseInt(t.querySelector("#nl-cycles").value), r = 100, p = [];
      for (let K = 0; K < s; K++) {
        const le = d * (1 + K * 0.5);
        for (let te = 0; te < r; te++) {
          const Q = te / r * 2 * Math.PI;
          p.push(le * Math.sin(Q));
        }
      }
      const i = o / n, c = l * n;
      let g = 0, S = 0, M = -i, y = i, f = 0, x = 0, I = 0, C = 0, z = 0, R = 0;
      const k = [];
      for (const K of p) {
        let le = M, te = y, Q = f, me = x, de = I, ke = C, Re = z, q = R, ce;
        const oe = K - g;
        if (Math.abs(oe) < 1e-20) {
          k.push(S);
          continue;
        }
        if ((q === 0 || q === 3) && (oe < 0 ? (q = 2, me = -i, de = -o, Q = me, ke = 0, Re = 0) : (q = 1, me = i, de = o, Q = me, ke = 0, Re = 0)), q === 2 && oe > 0) {
          q = 1, ke = g, Re = S, g < le && (le = g);
          const we = (te - le) / (2 * 1 * i), Be = 1 + 0 * Math.pow(we, 0.8);
          me = (o * Be - c * i * Be - Re + n * ke) / (n - c), de = o * Be + c * (me - i * Be), Q = te;
        } else if (q === 1 && oe < 0) {
          q = 2, ke = g, Re = S, g > te && (te = g);
          const we = (te - le) / (2 * 1 * i), Be = 1 + 0 * Math.pow(we, 0.8);
          me = (-o * Be + c * i * Be - Re + n * ke) / (n - c), de = -o * Be + c * (me + i * Be), Q = le;
        }
        const pe = Math.abs((Q - me) / i);
        let ee = a - 0.925 * pe / (0.15 + pe);
        ee < 0.1 && (ee = 0.1);
        const ge = (K - ke) / (me - ke), Ie = 1 + Math.pow(Math.abs(ge), ee), se = Math.pow(Ie, 1 / ee);
        ce = l * ge + (1 - l) * ge / se, ce = ce * (de - Re) + Re, k.push(ce), g = K, S = ce, M = le, y = te, f = Q, x = me, I = de, C = ke, z = Re, R = q;
      }
      const m = t.querySelector("#nl-canvas"), u = m.getContext("2d"), E = m.width, L = m.height;
      u.clearRect(0, 0, E, L);
      const O = Math.max(...p.map(Math.abs)), H = Math.max(...k.map(Math.abs)), h = (E - 40) / (2 * O), $ = (L - 40) / (2 * H), v = E / 2, F = L / 2;
      u.strokeStyle = "#444", u.lineWidth = 1, u.beginPath(), u.moveTo(20, F), u.lineTo(E - 20, F), u.stroke(), u.beginPath(), u.moveTo(v, 20), u.lineTo(v, L - 20), u.stroke(), u.fillStyle = "#888", u.font = "10px monospace", u.textAlign = "center", u.fillText("\u03B5 (strain)", E - 40, F - 5), u.fillText("\u03C3 (stress)", v + 30, 15), u.fillText(`\xB1${(O * 100).toFixed(1)}%`, E - 30, F + 12), u.fillText(`\xB1${(H / 1e3).toFixed(0)} MPa`, v + 40, 30), u.strokeStyle = "#00ccff", u.lineWidth = 1.5, u.beginPath();
      for (let K = 0; K < p.length; K++) {
        const le = v + p[K] * h, te = F - k[K] * $;
        K === 0 ? u.moveTo(le, te) : u.lineTo(le, te);
      }
      u.stroke(), u.strokeStyle = "#ff333366", u.lineWidth = 1, u.setLineDash([
        4,
        4
      ]), u.beginPath(), u.moveTo(20, F - o * $), u.lineTo(E - 20, F - o * $), u.stroke(), u.beginPath(), u.moveTo(20, F + o * $), u.lineTo(E - 20, F + o * $), u.stroke(), u.setLineDash([]), u.fillStyle = "#ff6666", u.font = "9px monospace", u.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, E - 50, F - o * $ - 5);
      const X = t.querySelector("#nl-info");
      X.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${a} \u2014 ${s} ciclos, amp=${(d * 100).toFixed(1)}%`;
    }
    function cl() {
      var _a2, _b, _c, _d;
      const t = document.querySelector(".rpt-overlay");
      if (t) {
        t.remove();
        return;
      }
      const o = e.nodes.val, n = e.elements.val, l = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, a = ((_b = e.nodeInputs) == null ? void 0 : _b.val) || {}, d = (_c = e.deformOutputs) == null ? void 0 : _c.val;
      if ((_d = e.analyzeOutputs) == null ? void 0 : _d.val, !o.length || !n.length) {
        alert("No hay modelo cargado");
        return;
      }
      const s = Rl({
        nodes: o,
        elements: n,
        nodeInputs: a,
        elementInputs: l,
        deformOutputs: d
      });
      document.body.appendChild(s);
    }
    let Uo = null;
    function dl(t) {
      Uo && Uo.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = Tn(), l = zn(), a = Object.entries(n).map(([i, c]) => `<option value="${c}">${i}</option>`).join(""), d = Object.entries(l).map(([i, c]) => `<option value="${c}">${i}</option>`).join("");
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
    `, document.body.appendChild(o), Uo = o;
      const s = o.querySelector("#asgn-type"), r = o.querySelector("#asgn-params");
      function p() {
        const i = s.value;
        let c = "";
        i === "rect" ? c = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : i === "circ" ? c = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : i === "W" ? c = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${a}</select>` : i === "HSS" ? c = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${d}</select>` : i === "I-param" ? c = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <label>bf(m):<input id="ap-bf" type="number" value="0.20" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hf" type="number" value="0.40" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tf(m):<input id="ap-tf" type="number" value="0.015" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tw(m):<input id="ap-tw" type="number" value="0.010" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>` : i === "tubular" && (c = `<div style="display:flex;gap:6px;">
          <label>b(m):<input id="ap-bc" type="number" value="0.20" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hc" type="number" value="0.30" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>t(m):<input id="ap-t" type="number" value="0.008" step="0.001" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>`), r.innerHTML = c;
      }
      s.addEventListener("change", p), p(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), Uo = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h;
        const i = s.value, c = {
          secType: i
        };
        i === "rect" ? (c.b = parseFloat(o.querySelector("#ap-b").value), c.h = parseFloat(o.querySelector("#ap-h").value), c.material = 0) : i === "circ" ? (c.b = parseFloat(o.querySelector("#ap-d").value), c.material = 0) : i === "W" || i === "HSS" ? (c.profileIdx = parseInt(o.querySelector("#ap-profile").value), c.material = 1) : i === "I-param" ? (c.bf = parseFloat(o.querySelector("#ap-bf").value), c.hf = parseFloat(o.querySelector("#ap-hf").value), c.tf = parseFloat(o.querySelector("#ap-tf").value), c.tw = parseFloat(o.querySelector("#ap-tw").value), c.material = 1) : i === "tubular" && (c.bc = parseFloat(o.querySelector("#ap-bc").value), c.hc = parseFloat(o.querySelector("#ap-hc").value), c.t = parseFloat(o.querySelector("#ap-t").value), c.material = 1);
        const g = new Array(12).fill(false), S = new Array(12).fill(0);
        o.querySelectorAll("input[data-asgn-rel]").forEach((M) => {
          g[parseInt(M.dataset.asgnRel)] = M.checked;
        }), o.querySelectorAll("input[data-asgn-spr]").forEach((M) => {
          const y = parseFloat(M.value);
          y > 0 && (S[parseInt(M.dataset.asgnSpr)] = y);
        }), c.releases12 = g, c.springs12 = S, c.releaseRotStart = g[4] || g[5], c.releaseRotEnd = g[10] || g[11], c.releaseAxial = g[0], c.releaseTorsion = g[3], c.modI = parseFloat((_a2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _a2.value) || 1, c.modA = parseFloat((_b = o.querySelector("#asgn-mod-a")) == null ? void 0 : _b.value) || 1, c.modJ = parseFloat((_c = o.querySelector("#asgn-mod-j")) == null ? void 0 : _c.value) || 1, c.modAs2 = parseFloat((_d = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _d.value) ?? 1, c.modAs3 = parseFloat((_e2 = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _e2.value) ?? 1, c.modI3 = parseFloat((_f = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _f.value) || 1, c.modMass = parseFloat((_g = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _g.value) || 1, c.modWeight = parseFloat((_h = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _h.value) || 1, t.forEach((M) => he.set(M, {
          ...c
        })), o.remove(), Uo = null, To(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((i) => he.delete(i)), o.remove(), Uo = null, To(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let Xo = null;
    function pl(t) {
      var _a2, _b, _c;
      Xo && Xo.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], a = o[n[1]], d = Math.abs(a[0] - l[0]), s = Math.abs(a[1] - l[1]), r = Math.abs(a[2] - l[2]), p = s > d && s > r, i = Math.sqrt(d * d + s * s + r * r), c = Me.get(t) ?? 0, g = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), S = (g == null ? void 0 : g.name) || (g ? `${g.type} ${((g.b ?? 0) * 100).toFixed(0)}x${((g.h ?? 0) * 100).toFixed(0)}` : "\u2014"), M = document.createElement("div");
      M.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", M.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">${A("Elemento")} ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">${A("Tipo")}:</span> ${p ? A("Columna") : A("Viga")} &nbsp;
        <span style="color:#888;">${A("Piso")}:</span> ${c + 1} &nbsp;
        <span style="color:#888;">L:</span> ${i.toFixed(3)} m
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
    `, document.body.appendChild(M), Xo = M, M.querySelector("#ep-close").addEventListener("click", () => {
        M.remove(), Xo = null, _o();
      }), M.querySelector("#ep-delete").addEventListener("click", () => {
        Z.add(t), M.remove(), Xo = null, _o(), Ne();
      }), M.querySelector("#ep-inspect").addEventListener("click", () => {
        M.remove(), Xo = null, Qs(t);
      });
    }
    setTimeout(() => {
      const t = document.getElementById("viewer");
      if (!t) return;
      const o = t.querySelector("canvas");
      if (!o) return;
      let n = null, l = null;
      const a = 5;
      function d(p) {
        const i = tt();
        if (!i) return null;
        const c = i.controls.object, g = new qe(p[0], p[1], p[2]);
        g.project(c);
        const S = o.getBoundingClientRect();
        return {
          x: (g.x + 1) / 2 * S.width,
          y: (-g.y + 1) / 2 * S.height
        };
      }
      function s(p, i, c, g, S) {
        const M = Math.min(p, c), y = Math.max(p, c), f = Math.min(i, g), x = Math.max(i, g), I = e.nodes.val, C = e.elements.val, z = [];
        for (let R = 0; R < C.length; R++) {
          const k = C[R], m = k.map((u) => d(I[u])).filter(Boolean);
          if (m.length !== 0) if (S) m.every((E) => E.x >= M && E.x <= y && E.y >= f && E.y <= x) && z.push(R);
          else {
            if (m.some((E) => E.x >= M && E.x <= y && E.y >= f && E.y <= x)) {
              z.push(R);
              continue;
            }
            if (k.length === 2) {
              const E = m[0], L = m[1];
              r(E.x, E.y, L.x, L.y, M, f, y, x) && z.push(R);
            }
          }
        }
        return z;
      }
      function r(p, i, c, g, S, M, y, f) {
        const x = (C, z) => C >= S && C <= y && z >= M && z <= f;
        if (x(p, i) || x(c, g)) return true;
        const I = (C, z, R, k, m, u, E, L) => {
          const O = (R - C) * (L - u) - (k - z) * (E - m);
          if (Math.abs(O) < 1e-10) return false;
          const H = ((m - C) * (L - u) - (u - z) * (E - m)) / O, h = ((m - C) * (k - z) - (u - z) * (R - C)) / O;
          return H >= 0 && H <= 1 && h >= 0 && h <= 1;
        };
        return I(p, i, c, g, S, M, y, M) || I(p, i, c, g, y, M, y, f) || I(p, i, c, g, S, f, y, f) || I(p, i, c, g, S, M, S, f);
      }
      o.addEventListener("mousedown", (p) => {
        eo && (n = {
          x: p.offsetX,
          y: p.offsetY
        });
      }), o.addEventListener("mousemove", (p) => {
        if (yo) {
          const c = tt();
          if (!c) return;
          const g = Vs(p.clientX, p.clientY, c.camera, c.rendererElm);
          if (Lt.track && g.snapType === "node" && g.nodeIdx !== null && g.nodeIdx !== qo && Va(g.nodeIdx), Lt.track && qo !== null && g.worldPos && g.snapType !== "node") {
            const S = Ua(g.worldPos, qo);
            S && (g.worldPos = S, g.snapType = "grid");
          }
          if (qo !== null && g.worldPos) {
            const S = e.nodes.val[qo];
            S && Js(p.clientX, p.clientY, new qe(...S), g.worldPos);
          } else if (kt !== null && g.worldPos) {
            const S = e.nodes.val[kt];
            S && Js(p.clientX, p.clientY, new qe(...S), g.worldPos);
          } else ro && (ro.remove(), ro = null);
          g.nodeIdx, Us(g), o.style.cursor = g.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!po && !eo) return;
        if (eo && n) {
          const c = p.offsetX - n.x, g = p.offsetY - n.y;
          if (Math.abs(c) > a || Math.abs(g) > a) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const S = c > 0, M = Math.min(n.x, p.offsetX), y = Math.min(n.y, p.offsetY), f = Math.abs(c), x = Math.abs(g);
            l.style.left = M + "px", l.style.top = y + "px", l.style.width = f + "px", l.style.height = x + "px", l.style.border = S ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = S ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const i = ss(p);
        if (i >= 0) Ks(i), o.style.cursor = "pointer";
        else {
          if (to) {
            const c = tt();
            c == null ? void 0 : c.scene.remove(to), to = null, c == null ? void 0 : c.render();
          }
          o.style.cursor = eo ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (p) => {
        if (eo && n) {
          const i = p.offsetX - n.x, c = p.offsetY - n.y;
          if (Math.abs(i) > a || Math.abs(c) > a) {
            const g = i > 0, S = s(n.x, n.y, p.offsetX, p.offsetY, g);
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
          const i = tt();
          if (!i) return;
          const c = Vs(p.clientX, p.clientY, i.camera, i.rendererElm);
          (c.worldPos || c.nodeIdx !== null) && (Ka(c), Us(c));
          return;
        }
        if (eo) {
          if (l) return;
          const i = ss(p), c = p.ctrlKey || p.metaKey;
          if (i >= 0) {
            if (c) if (wt.has(i)) {
              wt.delete(i);
              const g = Lo.findIndex((S) => S.__elemIdx === i);
              if (g >= 0) {
                const S = tt();
                S == null ? void 0 : S.scene.remove(Lo[g]), Lo[g].geometry.dispose(), Lo[g].material.dispose(), Lo.splice(g, 1), S == null ? void 0 : S.render();
              }
            } else wt.add(i), ts(i);
            else wt.clear(), Co(), wt.add(i), ts(i);
            Fo();
          } else c || (wt.clear(), Co(), Fo());
          return;
        }
        if (po) {
          const i = ss(p);
          i >= 0 && (Ks(i), pl(i));
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
      for (let d = 0; d < ze.length; d++) {
        const s = o[d * 6] || 0, r = o[d * 6 + 1] || 0, p = o[d * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(s * s + r * r + p * p));
      }
      Ve = l > 1e-12 ? n * 0.05 / l : 1, cn();
      const a = Le.querySelector("#cad3d-mode-label");
      a && Fe.frequencies && (a.textContent = `Modo ${xe + 1} \u2014 ${Fe.frequencies[xe].toFixed(2)} Hz`), console.log(`Modo ${xe + 1}: f = ${(_a2 = Fe.frequencies) == null ? void 0 : _a2[xe].toFixed(4)} Hz`);
    }, window.cad = ot, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(Le), document.body.appendChild(ft.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (nt("muro-q4"), is(), js("muro-q4"), setTimeout(() => {
        T === "muro-q4" && mo();
      }, 200));
    }, 100);
    const pn = document.createElement("button");
    pn.id = "mobile-menu-btn", pn.innerHTML = "\u2630", pn.addEventListener("click", () => {
      const t = document.getElementById("cad3d-panel");
      t && (t.classList.toggle("mobile-open"), pn.innerHTML = t.classList.contains("mobile-open") ? "\u2715" : "\u2630");
    }), document.body.appendChild(pn);
    const Ut = document.createElement("div");
    Ut.style.cssText = "position:fixed; bottom:20px; right:20px; z-index:10000; display:flex; gap:8px; touch-action:none; cursor:grab;";
    const da = localStorage.getItem("hk_float_pos");
    if (da) try {
      const { x: t, y: o } = JSON.parse(da);
      Ut.style.left = t + "px", Ut.style.top = o + "px", Ut.style.right = "auto", Ut.style.bottom = "auto";
    } catch {
    }
    let $n = false, pa = 0, fa = 0, ua = 0, ma = 0;
    const ga = 5;
    let fn = false;
    const ba = (t, o) => {
      $n = true, fn = false, pa = t, fa = o;
      const n = Ut.getBoundingClientRect();
      ua = n.left, ma = n.top, Ut.style.cursor = "grabbing";
    }, ha = (t, o) => {
      if (!$n) return;
      const n = t - pa, l = o - fa;
      (Math.abs(n) > ga || Math.abs(l) > ga) && (fn = true), fn && (Ut.style.left = ua + n + "px", Ut.style.top = ma + l + "px", Ut.style.right = "auto", Ut.style.bottom = "auto");
    }, xa = () => {
      if ($n = false, Ut.style.cursor = "grab", fn) {
        const t = Ut.getBoundingClientRect();
        localStorage.setItem("hk_float_pos", JSON.stringify({
          x: t.left,
          y: t.top
        }));
      }
    };
    Ut.addEventListener("mousedown", (t) => {
      ba(t.clientX, t.clientY), t.preventDefault();
    }), document.addEventListener("mousemove", (t) => ha(t.clientX, t.clientY)), document.addEventListener("mouseup", () => xa()), Ut.addEventListener("touchstart", (t) => {
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
    }), Ut.appendChild(Mo), Ut.appendChild(Yl()), document.body.appendChild(Ut);
    const va = document.createElement("span");
    return va.style.display = "none", va;
  };
});
export {
  __tla,
  ka as a,
  Pl as c,
  Mr as g
};
