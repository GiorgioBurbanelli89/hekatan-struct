const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./calcPanel-yPr-zIDs.js","./getMesh-B1dmlgUt.js","./__vite-browser-external-D7Ct-6yo.js","./pureFunctionsAny.generated-JAcEVsJ7.js","./analyze-ClLKGn9k.js","./didacticCpp-k5rzHGLP.js","./cyclicPushoverCpp-L5erex8b.js"])))=>i.map(i=>d[i]);
import { d as kt, _ as ea, p as Uo, m as Va, s as Ua, __tla as __tla_0 } from "./didacticCpp-k5rzHGLP.js";
import { v as Jn, P as no, g as Xa, a as Ka, o as Za } from "./theme-CzzIlc4y.js";
import { G as so, b as Qa, M as ta, D as na, B as tn, c as xo, d as el, C as tl, e as ca, V as Oe, P as In, R as oa, f as sa, g as Wn, h as Gn, i as nl, S as ol, j as sl, F as Ln, a as Yn, L as Cn, k as al, l as ll, A as co, T as Xo, m as po, n as fo, o as rl, p as il } from "./Text-CBH-tcJP.js";
import { g as vo, b as yo, a as gn } from "./analyze-ClLKGn9k.js";
import { g as hn, __tla as __tla_1 } from "./getMesh-B1dmlgUt.js";
import { n as Pn, s as xn, m as on, t as os } from "./pureFunctionsAny.generated-JAcEVsJ7.js";
let ia, fl, er;
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
  const ns = [
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
  ], Vn = [
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
  function cl(e, g) {
    return e === "kN" && g === "m" ? "kPa" : e === "kN" && g === "mm" || e === "N" && g === "mm" ? "MPa" : e === "N" && g === "m" ? "Pa" : e === "kip" && g === "in" ? "ksi" : e === "kip" && g === "ft" ? "ksf" : `${e}/${g}\xB2`;
  }
  const Fn = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function Rn(e, g) {
    const R = ns.find((j) => j.id === e), M = Vn.find((j) => j.id === g), J = R.toKN, B = M.toM, U = (j, ge, T) => T / (Math.pow(J, j) * Math.pow(B, ge));
    let Y, H;
    switch (e) {
      case "kN":
        Y = 10, H = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        Y = 1, H = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        Y = 1e3, H = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        Y = 10, H = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        Y = 5e3, H = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        Y = 1e4, H = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${e}-${g}`,
      label: `${R.label}, ${M.label}`,
      force: R.label,
      length: M.label,
      stress: cl(e, g),
      moment: `${R.label}\xB7${M.label}`,
      E: U(1, -2, Fn.E),
      G: U(1, -2, Fn.G),
      A: U(0, 2, Fn.A),
      Iz: U(0, 4, Fn.Iz),
      Iy: U(0, 4, Fn.Iy),
      J: U(0, 4, Fn.J),
      rho: U(1, -4, Fn.rho),
      spanRange: M.spanRange,
      heightRange: M.heightRange,
      defaultSpan: M.defaultSpan,
      defaultHeight: M.defaultHeight,
      defaultForce: Y,
      forceRange: H,
      galponSpan: M.galponSpan,
      galponLength: M.galponLength,
      galponHeight: M.galponHeight,
      galponRise: M.galponRise
    };
  }
  Rn("kN", "m"), Rn("kip", "in");
  function uo() {
    return {
      truss: [
        {
          label: "Empotrado",
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
          label: "Articulado",
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
          label: "Roller Z",
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
          label: "Empotrado",
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
          label: "Articulado",
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
          label: "Empotrado",
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
          label: "Articulado",
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
          label: "Empotrado",
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
          label: "Articulado",
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
          label: "Empotrado",
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
          label: "Articulado",
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
          label: "Empotrado",
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
          label: "Articulado",
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
          label: "Emp-Libre",
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
          label: "Emp-Emp",
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
          label: "Emp-Art",
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
          label: "Simply Supported",
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
          label: "Empotrado",
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
          label: "Simply Supported",
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
          label: "Empotrado",
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
          label: "Simply Supported",
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
          label: "Empotrado",
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
          label: "Pin (w=0)",
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
          label: "Empotrado",
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
          label: "Empotrado",
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
          label: "Articulado",
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
          label: "Rankine (Ka)",
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
          label: "Suelo continuo",
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
          label: "Interfaz",
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
          label: "Presion agua",
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
          label: "Winkler (k)",
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
          label: "Simplemente apoyado",
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
          label: "Empotrado",
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
          label: "Pernos empotrados",
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
          label: "Empotrado",
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
          label: "Empotrado",
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
          label: "Empotrado",
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
          label: "Empotrado",
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
          label: "Empotrado",
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
          label: "Empotrado",
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
          label: "Empotrado",
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
          label: "Empotrado",
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
  function dl(e) {
    return {
      truss: [
        {
          key: "span",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `Luz (${e.length})`
        },
        {
          key: "divisions",
          val: 5,
          min: 2,
          max: 20,
          step: 1,
          label: "Divisiones"
        },
        {
          key: "height",
          val: e.defaultHeight * 0.5,
          min: e.heightRange[0] * 0.3,
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `Altura (${e.length})`
        }
      ],
      beams: [
        {
          key: "width",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `Luz (${e.length})`
        },
        {
          key: "height",
          val: e.defaultHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `Altura (${e.length})`
        },
        {
          key: "nSub",
          val: 4,
          min: 1,
          max: 10,
          step: 1,
          label: "Discretizaci\xF3n"
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
          label: "Pisos"
        },
        {
          key: "nSub",
          val: 3,
          min: 1,
          max: 8,
          step: 1,
          label: "Discretizaci\xF3n"
        }
      ],
      frame: [
        {
          key: "nVanos",
          val: 3,
          min: 1,
          max: 10,
          step: 1,
          label: "N. Vanos"
        },
        {
          key: "spanV",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `Luz vano (${e.length})`
        },
        {
          key: "nPisos",
          val: 3,
          min: 1,
          max: 20,
          step: 1,
          label: "N. Pisos"
        },
        {
          key: "hPiso",
          val: e.defaultHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `h piso (${e.length})`
        }
      ],
      edificio: [
        {
          key: "nVanosX",
          val: 2,
          min: 1,
          max: 8,
          step: 1,
          label: "Vanos X"
        },
        {
          key: "nVanosY",
          val: 2,
          min: 1,
          max: 8,
          step: 1,
          label: "Vanos Y"
        },
        {
          key: "nPisos",
          val: 3,
          min: 1,
          max: 20,
          step: 1,
          label: "N. Pisos"
        },
        {
          key: "hPiso",
          val: e.defaultHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `h piso (${e.length})`
        },
        {
          key: "nSubViga",
          val: 1,
          min: 1,
          max: 8,
          step: 1,
          label: "Div. Vigas"
        },
        {
          key: "nSubCol",
          val: 1,
          min: 1,
          max: 8,
          step: 1,
          label: "Div. Columnas"
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
          label: `Luz (${e.length})`
        },
        {
          key: "length",
          val: e.galponLength,
          min: e.spanRange[0],
          max: e.spanRange[1] * 4,
          step: e.spanRange[2],
          label: `Largo (${e.length})`
        },
        {
          key: "height",
          val: e.galponHeight,
          min: e.heightRange[0],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `Altura col (${e.length})`
        },
        {
          key: "archRise",
          val: e.galponRise,
          min: e.heightRange[2],
          max: e.heightRange[1],
          step: e.heightRange[2],
          label: `Flecha arco (${e.length})`
        },
        {
          key: "xDiv",
          val: 8,
          min: 4,
          max: 20,
          step: 1,
          label: "Div. X"
        },
        {
          key: "yDiv",
          val: 4,
          min: 2,
          max: 12,
          step: 1,
          label: "Div. Y"
        }
      ],
      barra: [
        {
          key: "L",
          val: e.defaultSpan,
          min: e.spanRange[0],
          max: e.spanRange[1],
          step: e.spanRange[2],
          label: `L total (${e.length})`
        },
        {
          key: "nElem",
          val: 3,
          min: 1,
          max: 10,
          step: 1,
          label: "Num elementos"
        },
        {
          key: "F",
          val: e.defaultForce * 10,
          min: e.forceRange[0],
          max: e.forceRange[1] * 10,
          step: Math.abs(e.forceRange[2]) * 10,
          label: `F axial (${e.force})`
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
          label: `Mesh size (${e.length})`
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
          label: "nx elem"
        },
        {
          key: "ny",
          val: 16,
          min: 2,
          max: 64,
          step: 2,
          label: "ny elem"
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
          label: "nx elem"
        },
        {
          key: "ny",
          val: 8,
          min: 4,
          max: 40,
          step: 2,
          label: "ny elem"
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
          label: `Mesh (${e.length})`
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
          label: `Mesh (${e.length})`
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
          label: `Ancho carga (${e.length})`
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
          label: `B base (${e.length})`
        },
        {
          key: "tw",
          val: 0.3,
          min: 0.1,
          max: 1,
          step: 0.05,
          label: `t muro (${e.length})`
        },
        {
          key: "tb",
          val: 0.4,
          min: 0.1,
          max: 1,
          step: 0.05,
          label: `t base (${e.length})`
        },
        {
          key: "meshSize",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.05,
          label: `Mesh (${e.length})`
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E concreto (${e.stress})`
        },
        {
          key: "nu",
          val: 0.2,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v concreto"
        },
        {
          key: "gamma",
          val: 18,
          min: 5,
          max: 30,
          step: 1,
          label: `gamma suelo (${e.force}/${e.length}\xB3)`
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
          label: `q sobrecarga (${e.stress})`
        },
        {
          key: "Es",
          val: 5e4,
          min: 100,
          max: 1e6,
          step: 1e3,
          label: `E suelo (${e.stress})`
        },
        {
          key: "nus",
          val: 0.3,
          min: 0.1,
          max: 0.49,
          step: 0.01,
          label: "v suelo"
        },
        {
          key: "kn",
          val: 1e6,
          min: 1e3,
          max: 1e9,
          step: 1e4,
          label: `kn interfaz (${e.force}/${e.length}\xB3)`
        },
        {
          key: "ks",
          val: 1e4,
          min: 100,
          max: 1e7,
          step: 1e3,
          label: `ks interfaz (${e.force}/${e.length}\xB3)`
        },
        {
          key: "gammaW",
          val: 9.81,
          min: 5,
          max: 15,
          step: 0.1,
          label: `gamma agua (${e.force}/${e.length}\xB3)`
        },
        {
          key: "Hw",
          val: 3.5,
          min: 0.5,
          max: 10,
          step: 0.5,
          label: `H agua (${e.length})`
        }
      ],
      zapata: [
        {
          key: "Lx",
          val: 2,
          min: 0.5,
          max: 6,
          step: 0.1,
          label: `Lx zapata (${e.length})`
        },
        {
          key: "Ly",
          val: 2,
          min: 0.5,
          max: 6,
          step: 0.1,
          label: `Ly zapata (${e.length})`
        },
        {
          key: "t",
          val: 0.5,
          min: 0.1,
          max: 2,
          step: 0.05,
          label: `t zapata (${e.length})`
        },
        {
          key: "colA",
          val: 0.4,
          min: 0.15,
          max: 1.5,
          step: 0.05,
          label: `a columna (${e.length})`
        },
        {
          key: "colH",
          val: 1.5,
          min: 0.5,
          max: 5,
          step: 0.5,
          label: `h pedestal (${e.length})`
        },
        {
          key: "nx",
          val: 8,
          min: 4,
          max: 20,
          step: 2,
          label: "nx elem"
        },
        {
          key: "ny",
          val: 8,
          min: 4,
          max: 20,
          step: 2,
          label: "ny elem"
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
          label: `P axial (${e.force})`
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
          label: `Placa Lx (${e.length})`
        },
        {
          key: "Ly",
          val: 0.4,
          min: 0.15,
          max: 1,
          step: 0.05,
          label: `Placa Ly (${e.length})`
        },
        {
          key: "t",
          val: 0.025,
          min: 0.01,
          max: 0.1,
          step: 5e-3,
          label: `Espesor t (${e.length})`
        },
        {
          key: "dBolt",
          val: 0.022,
          min: 0.01,
          max: 0.05,
          step: 2e-3,
          label: `d perno (${e.length})`
        },
        {
          key: "sx",
          val: 0.28,
          min: 0.08,
          max: 0.8,
          step: 0.02,
          label: `Sep. pernos X (${e.length})`
        },
        {
          key: "sy",
          val: 0.28,
          min: 0.08,
          max: 0.8,
          step: 0.02,
          label: `Sep. pernos Y (${e.length})`
        },
        {
          key: "colA",
          val: 0.2,
          min: 0.1,
          max: 0.5,
          step: 0.02,
          label: `Col a (${e.length})`
        },
        {
          key: "meshSize",
          val: 8e-3,
          min: 3e-3,
          max: 0.03,
          step: 1e-3,
          label: `Mesh (${e.length})`
        },
        {
          key: "E",
          val: e.E,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E acero (${e.stress})`
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
          label: `P axial (${e.force})`
        },
        {
          key: "nBolts",
          val: 4,
          min: 2,
          max: 8,
          step: 2,
          label: "N pernos"
        }
      ],
      "col-placa": [
        {
          key: "colB",
          val: 0.3,
          min: 0.1,
          max: 0.6,
          step: 0.02,
          label: `Col b (${e.length})`
        },
        {
          key: "colH",
          val: 0.3,
          min: 0.1,
          max: 0.6,
          step: 0.02,
          label: `Col h (${e.length})`
        },
        {
          key: "colT",
          val: 8e-3,
          min: 4e-3,
          max: 0.025,
          step: 2e-3,
          label: `Col t (${e.length})`
        },
        {
          key: "colLen",
          val: 1.5,
          min: 0.5,
          max: 4,
          step: 0.25,
          label: `Col altura (${e.length})`
        },
        {
          key: "Lx",
          val: 0.45,
          min: 0.2,
          max: 1,
          step: 0.05,
          label: `Placa Lx (${e.length})`
        },
        {
          key: "Ly",
          val: 0.45,
          min: 0.2,
          max: 1,
          step: 0.05,
          label: `Placa Ly (${e.length})`
        },
        {
          key: "tPlaca",
          val: 0.025,
          min: 0.01,
          max: 0.06,
          step: 5e-3,
          label: `Placa t (${e.length})`
        },
        {
          key: "dBolt",
          val: 0.022,
          min: 0.012,
          max: 0.04,
          step: 2e-3,
          label: `d perno (${e.length})`
        },
        {
          key: "sx",
          val: 0.32,
          min: 0.1,
          max: 0.8,
          step: 0.02,
          label: `Sep pernos X (${e.length})`
        },
        {
          key: "sy",
          val: 0.32,
          min: 0.1,
          max: 0.8,
          step: 0.02,
          label: `Sep pernos Y (${e.length})`
        },
        {
          key: "nSubColV",
          val: 6,
          min: 2,
          max: 12,
          step: 1,
          label: "Col subdiv V"
        },
        {
          key: "nSubColH",
          val: 4,
          min: 2,
          max: 8,
          step: 1,
          label: "Col subdiv H"
        },
        {
          key: "nSubPlaca",
          val: 10,
          min: 4,
          max: 20,
          step: 2,
          label: "Placa subdiv"
        },
        {
          key: "E",
          val: e.E,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E acero (${e.stress})`
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
          label: `P axial (${e.force})`
        }
      ],
      "muro-q4": [
        {
          key: "W",
          val: 5,
          min: 1,
          max: 20,
          step: 0.5,
          label: `Ancho W (${e.length})`
        },
        {
          key: "H",
          val: 3,
          min: 1,
          max: 15,
          step: 0.5,
          label: `Alto H (${e.length})`
        },
        {
          key: "t",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.05,
          label: `Espesor t (${e.length})`
        },
        {
          key: "nx",
          val: 8,
          min: 2,
          max: 20,
          step: 1,
          label: "Mesh nx"
        },
        {
          key: "ny",
          val: 6,
          min: 2,
          max: 20,
          step: 1,
          label: "Mesh ny"
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 1e4,
          max: 1e9,
          step: 1e5,
          label: `E concreto (${e.stress})`
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
          label: `P lateral (${e.force})`
        }
      ],
      "viga-q4": [
        {
          key: "L",
          val: 6,
          min: 1,
          max: 20,
          step: 0.5,
          label: `Luz L (${e.length})`
        },
        {
          key: "h",
          val: 0.5,
          min: 0.1,
          max: 3,
          step: 0.1,
          label: `Peralte h (${e.length})`
        },
        {
          key: "t",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.05,
          label: `Espesor t (${e.length})`
        },
        {
          key: "nx",
          val: 12,
          min: 2,
          max: 30,
          step: 1,
          label: "Mesh nx"
        },
        {
          key: "ny",
          val: 4,
          min: 2,
          max: 15,
          step: 1,
          label: "Mesh ny"
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 1e4,
          max: 1e9,
          step: 1e5,
          label: `E concreto (${e.stress})`
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
          label: `P puntual (${e.force})`
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
          label: `Espesor t (${e.length})`
        },
        {
          key: "nx",
          val: 8,
          min: 2,
          max: 20,
          step: 1,
          label: "Mesh nx"
        },
        {
          key: "nz",
          val: 4,
          min: 2,
          max: 15,
          step: 1,
          label: "Mesh nz"
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 1e4,
          max: 1e9,
          step: 1e5,
          label: `E concreto (${e.stress})`
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
          label: `P borde (${e.force})`
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
          label: "Angulo (deg)"
        },
        {
          key: "bTop",
          val: 3,
          min: 1,
          max: 10,
          step: 0.5,
          label: `b top (${e.length})`
        },
        {
          key: "bBot",
          val: 3,
          min: 1,
          max: 10,
          step: 0.5,
          label: `b base (${e.length})`
        },
        {
          key: "meshSize",
          val: 0.8,
          min: 0.3,
          max: 3,
          step: 0.1,
          label: `Mesh (${e.length})`
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
          label: `Cohesion c (${e.stress})`
        },
        {
          key: "phi",
          val: 30,
          min: 0,
          max: 45,
          step: 1,
          label: "Friccion \u03C6 (deg)"
        },
        {
          key: "qs",
          val: 0,
          min: 0,
          max: 100,
          step: 5,
          label: `Sobrecarga (${e.stress})`
        }
      ]
    };
  }
  function pl(e) {
    const g = e.force, [R, M, J] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: R,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: J,
          label: `CV (${g})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: R,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: J,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: R,
          max: M,
          step: J,
          label: `Ex sismo (${g})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: R,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: J,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: R,
          max: M,
          step: J,
          label: `Ex sismo (${g})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: R,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: J,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: R,
          max: M,
          step: J,
          label: `Ex sismo (${g})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: R,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: J,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: R,
          max: M,
          step: J,
          label: `Ex sismo (${g})`
        },
        {
          key: "Ey",
          val: 0,
          min: R,
          max: M,
          step: J,
          label: `Ey sismo (${g})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: R,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: J,
          label: `CV (${g})`
        }
      ],
      barra: [
        {
          key: "F",
          val: e.defaultForce * 10,
          min: e.forceRange[0] * 10,
          max: e.forceRange[1] * 10,
          step: Math.abs(e.forceRange[2]) * 5,
          label: `F axial (${g})`
        }
      ],
      "placa-3q": [
        {
          key: "CM",
          val: 0,
          min: R,
          max: 0,
          step: J,
          label: `CM (${g})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: R,
          max: 0,
          step: J,
          label: `CM (${g})`
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
      eiffel: [],
      arco: [],
      puente: [],
      twisted: [],
      burj: [],
      opera: [],
      diagrid: []
    };
  }
  fl = function() {
    const e = document.createElement("div");
    e.id = "modal-results", e.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; max-height: 60vh; overflow: auto; pointer-events: auto;
    border: 1px solid #0f03; resize: both;
  `;
    let g = false;
    function R(M, J) {
      var _a, _b;
      if (!M.frequencies || M.frequencies.length === 0) {
        e.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
        return;
      }
      const B = [
        "Ux",
        "Uy",
        "Uz",
        "Rx",
        "Ry",
        "Rz"
      ], U = [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let Y = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:move; position:sticky; top:0; background:rgba(0,0,0,0.95); z-index:1;">
  <b style="color:#ff0">MODAL \u2014 ${J.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (Y += '<div id="modal-body" style="padding:0 12px 10px 12px;">', J.properties) for (const j of J.properties) Y += `<span style="color:#888">${j}</span>
`;
      Y += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03; position:sticky; top:36px; background:rgba(0,0,0,0.95); z-index:1;">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">f (Hz)</th>
  <th style="padding:2px 6px">T (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const j of B) Y += `<th style="padding:2px 5px">${j}</th>`;
      if (Y += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, M.frequencies.forEach((j, ge) => {
        var _a2;
        const T = j > 0 ? 1 / j : 0, Z = j * 2 * Math.PI, ye = ((_a2 = M.massParticipation) == null ? void 0 : _a2[ge]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let ie = 0; ie < 6; ie++) U[ie] += ye[ie];
        Y += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${ge + 1}</td>
  <td style="padding:2px 6px; text-align:right">${j.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${T.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${Z.toFixed(2)}</td>`;
        for (let ie = 0; ie < 6; ie++) {
          const re = (ye[ie] * 100).toFixed(1), te = ye[ie] > 0.5 ? "#f00" : ye[ie] > 0.1 ? "#ff0" : "#0f0";
          Y += `<td style="padding:2px 5px; text-align:right; color:${te}">${re}%</td>`;
        }
        Y += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(U[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(U[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(U[5] * 100).toFixed(1)}%</td></tr>`;
      }), Y += "</table></div>", e.innerHTML = Y, g) {
        const j = e.querySelector("#modal-body"), ge = e.querySelector("#modal-minimize");
        j && (j.style.display = "none"), ge && (ge.textContent = "\u25A2", ge.title = "Restaurar");
      }
      (_a = e.querySelector("#modal-minimize")) == null ? void 0 : _a.addEventListener("click", () => {
        g = !g;
        const j = e.querySelector("#modal-body"), ge = e.querySelector("#modal-minimize");
        g ? (j.style.display = "none", ge.textContent = "\u25A2", ge.title = "Restaurar") : (j.style.display = "block", ge.textContent = "\u25AC", ge.title = "Minimizar");
      });
      const H = e.querySelector("#modal-header");
      if (H) {
        let j = false, ge = 0, T = 0, Z = 0, ye = 0;
        H.addEventListener("mousedown", (ie) => {
          if (ie.target.tagName === "BUTTON") return;
          j = true, ge = ie.clientX, T = ie.clientY;
          const re = e.getBoundingClientRect();
          Z = re.left, ye = re.top, ie.preventDefault();
        }), document.addEventListener("mousemove", (ie) => {
          if (!j) return;
          const re = ie.clientX - ge, te = ie.clientY - T;
          e.style.left = Z + re + "px", e.style.top = ye + te + "px", e.style.bottom = "auto", e.style.right = "auto";
        }), document.addEventListener("mouseup", () => {
          j = false;
        });
      }
      (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const j = [];
        j.push(`Modal Analysis \u2014 ${J.title}`);
        const ge = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${B.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        j.push(ge), j.push("-".repeat(ge.length));
        const T = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        M.frequencies.forEach((ye, ie) => {
          var _a2;
          const re = ye > 0 ? 1 / ye : 0, te = ye * 2 * Math.PI, q = ((_a2 = M.massParticipation) == null ? void 0 : _a2[ie]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let G = 0; G < 6; G++) T[G] += q[G];
          const D = q.map((G) => ((G * 100).toFixed(1) + "%").padStart(6)).join(" ");
          j.push(`${String(ie + 1).padStart(4)}  ${ye.toFixed(4).padStart(9)}  ${re.toFixed(4).padStart(9)}  ${te.toFixed(2).padStart(9)}  ${D}  ${(T[0] * 100).toFixed(1).padStart(5)}%  ${(T[1] * 100).toFixed(1).padStart(5)}%  ${(T[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(j.join(`
`));
        const Z = e.querySelector("#modal-copy");
        Z.textContent = "\u2713", setTimeout(() => Z.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: R
    };
  };
  const Fe = 64516e-8, N = 416231e-12, ne = 0.0254, kn = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * Fe,
      Iz: 16.4 * N,
      Iy: 2.2 * N,
      J: 0.0405 * N,
      d: 5.9 * ne,
      bf: 3.94 * ne
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * Fe,
      Iz: 29.1 * N,
      Iy: 9.32 * N,
      J: 0.103 * N,
      d: 5.99 * ne,
      bf: 5.99 * ne
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * Fe,
      Iz: 41.4 * N,
      Iy: 13.3 * N,
      J: 0.204 * N,
      d: 6.2 * ne,
      bf: 6.02 * ne
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * Fe,
      Iz: 30.8 * N,
      Iy: 2.09 * N,
      J: 0.0426 * N,
      d: 7.89 * ne,
      bf: 3.94 * ne
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * Fe,
      Iz: 61.9 * N,
      Iy: 7.97 * N,
      J: 0.172 * N,
      d: 8.14 * ne,
      bf: 5.25 * ne
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * Fe,
      Iz: 82.7 * N,
      Iy: 18.3 * N,
      J: 0.346 * N,
      d: 7.93 * ne,
      bf: 6.5 * ne
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * Fe,
      Iz: 110 * N,
      Iy: 37.1 * N,
      J: 0.536 * N,
      d: 8 * ne,
      bf: 7.995 * ne
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * Fe,
      Iz: 146 * N,
      Iy: 49.1 * N,
      J: 0.871 * N,
      d: 8.25 * ne,
      bf: 8.07 * ne
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * Fe,
      Iz: 184 * N,
      Iy: 60.9 * N,
      J: 1.45 * N,
      d: 8.5 * ne,
      bf: 8.11 * ne
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * Fe,
      Iz: 272 * N,
      Iy: 88.6 * N,
      J: 3.54 * N,
      d: 9 * ne,
      bf: 8.28 * ne
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * Fe,
      Iz: 53.8 * N,
      Iy: 2.18 * N,
      J: 0.0547 * N,
      d: 9.87 * ne,
      bf: 3.96 * ne
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * Fe,
      Iz: 118 * N,
      Iy: 11.4 * N,
      J: 0.239 * N,
      d: 10.17 * ne,
      bf: 5.75 * ne
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * Fe,
      Iz: 171 * N,
      Iy: 36.6 * N,
      J: 0.583 * N,
      d: 9.73 * ne,
      bf: 7.96 * ne
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * Fe,
      Iz: 272 * N,
      Iy: 93.4 * N,
      J: 1.39 * N,
      d: 9.98 * ne,
      bf: 10 * ne
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * Fe,
      Iz: 394 * N,
      Iy: 134 * N,
      J: 3.56 * N,
      d: 10.4 * ne,
      bf: 10.13 * ne
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * Fe,
      Iz: 623 * N,
      Iy: 207 * N,
      J: 10.9 * N,
      d: 11.1 * ne,
      bf: 10.34 * ne
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * Fe,
      Iz: 88.6 * N,
      Iy: 2.36 * N,
      J: 0.0704 * N,
      d: 11.91 * ne,
      bf: 3.97 * ne
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * Fe,
      Iz: 156 * N,
      Iy: 4.66 * N,
      J: 0.293 * N,
      d: 12.31 * ne,
      bf: 4.03 * ne
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * Fe,
      Iz: 204 * N,
      Iy: 17.3 * N,
      J: 0.3 * N,
      d: 12.22 * ne,
      bf: 6.49 * ne
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * Fe,
      Iz: 310 * N,
      Iy: 44.1 * N,
      J: 0.906 * N,
      d: 11.94 * ne,
      bf: 8.01 * ne
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * Fe,
      Iz: 425 * N,
      Iy: 95.8 * N,
      J: 1.58 * N,
      d: 12.06 * ne,
      bf: 9.99 * ne
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * Fe,
      Iz: 597 * N,
      Iy: 195 * N,
      J: 4.05 * N,
      d: 12.25 * ne,
      bf: 12.04 * ne
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * Fe,
      Iz: 833 * N,
      Iy: 270 * N,
      J: 8.44 * N,
      d: 12.71 * ne,
      bf: 12.16 * ne
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * Fe,
      Iz: 1070 * N,
      Iy: 345 * N,
      J: 16 * N,
      d: 13.12 * ne,
      bf: 12.32 * ne
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * Fe,
      Iz: 199 * N,
      Iy: 7 * N,
      J: 0.208 * N,
      d: 13.74 * ne,
      bf: 5 * ne
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * Fe,
      Iz: 291 * N,
      Iy: 19.6 * N,
      J: 0.38 * N,
      d: 13.84 * ne,
      bf: 6.73 * ne
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * Fe,
      Iz: 385 * N,
      Iy: 26.7 * N,
      J: 0.798 * N,
      d: 14.1 * ne,
      bf: 6.77 * ne
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * Fe,
      Iz: 485 * N,
      Iy: 51.4 * N,
      J: 1.45 * N,
      d: 13.79 * ne,
      bf: 8.03 * ne
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * Fe,
      Iz: 640 * N,
      Iy: 107 * N,
      J: 2.19 * N,
      d: 13.89 * ne,
      bf: 9.99 * ne
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * Fe,
      Iz: 882 * N,
      Iy: 148 * N,
      J: 5.07 * N,
      d: 14.31 * ne,
      bf: 10.13 * ne
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * Fe,
      Iz: 1240 * N,
      Iy: 447 * N,
      J: 7.12 * N,
      d: 14.32 * ne,
      bf: 14.61 * ne
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * Fe,
      Iz: 1530 * N,
      Iy: 548 * N,
      J: 12.3 * N,
      d: 14.66 * ne,
      bf: 14.73 * ne
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * Fe,
      Iz: 2140 * N,
      Iy: 838 * N,
      J: 23.7 * N,
      d: 15.22 * ne,
      bf: 15.65 * ne
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * Fe,
      Iz: 301 * N,
      Iy: 9.59 * N,
      J: 0.262 * N,
      d: 15.69 * ne,
      bf: 5.5 * ne
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * Fe,
      Iz: 448 * N,
      Iy: 24.5 * N,
      J: 0.545 * N,
      d: 15.86 * ne,
      bf: 6.99 * ne
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * Fe,
      Iz: 659 * N,
      Iy: 37.2 * N,
      J: 1.52 * N,
      d: 16.26 * ne,
      bf: 7.07 * ne
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * Fe,
      Iz: 954 * N,
      Iy: 119 * N,
      J: 2.39 * N,
      d: 16.33 * ne,
      bf: 10.24 * ne
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * Fe,
      Iz: 1300 * N,
      Iy: 163 * N,
      J: 5.45 * N,
      d: 16.75 * ne,
      bf: 10.37 * ne
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * Fe,
      Iz: 510 * N,
      Iy: 15.3 * N,
      J: 0.506 * N,
      d: 17.7 * ne,
      bf: 6 * ne
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * Fe,
      Iz: 800 * N,
      Iy: 40.1 * N,
      J: 1.24 * N,
      d: 17.99 * ne,
      bf: 7.5 * ne
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * Fe,
      Iz: 1170 * N,
      Iy: 60.3 * N,
      J: 3.49 * N,
      d: 18.47 * ne,
      bf: 7.64 * ne
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * Fe,
      Iz: 1750 * N,
      Iy: 201 * N,
      J: 5.86 * N,
      d: 18.59 * ne,
      bf: 11.15 * ne
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * Fe,
      Iz: 843 * N,
      Iy: 20.7 * N,
      J: 0.77 * N,
      d: 20.66 * ne,
      bf: 6.5 * ne
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * Fe,
      Iz: 1330 * N,
      Iy: 57.5 * N,
      J: 1.83 * N,
      d: 20.99 * ne,
      bf: 8.24 * ne
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * Fe,
      Iz: 1830 * N,
      Iy: 81.4 * N,
      J: 4.34 * N,
      d: 21.43 * ne,
      bf: 8.36 * ne
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * Fe,
      Iz: 2670 * N,
      Iy: 274 * N,
      J: 6.83 * N,
      d: 21.51 * ne,
      bf: 12.34 * ne
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * Fe,
      Iz: 1350 * N,
      Iy: 29.1 * N,
      J: 1.18 * N,
      d: 23.57 * ne,
      bf: 7.01 * ne
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * Fe,
      Iz: 2100 * N,
      Iy: 82.5 * N,
      J: 2.68 * N,
      d: 23.92 * ne,
      bf: 8.99 * ne
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * Fe,
      Iz: 3100 * N,
      Iy: 259 * N,
      J: 4.72 * N,
      d: 24.06 * ne,
      bf: 12.75 * ne
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * Fe,
      Iz: 4020 * N,
      Iy: 340 * N,
      J: 9.5 * N,
      d: 24.48 * ne,
      bf: 12.86 * ne
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * Fe,
      Iz: 4580 * N,
      Iy: 391 * N,
      J: 12.6 * N,
      d: 24.74 * ne,
      bf: 12.9 * ne
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * Fe,
      Iz: 5680 * N,
      Iy: 479 * N,
      J: 21.2 * N,
      d: 25.24 * ne,
      bf: 12.9 * ne
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * Fe,
      Iz: 2850 * N,
      Iy: 106 * N,
      J: 2.81 * N,
      d: 26.71 * ne,
      bf: 9.96 * ne
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * Fe,
      Iz: 4090 * N,
      Iy: 159 * N,
      J: 6.77 * N,
      d: 27.29 * ne,
      bf: 10.07 * ne
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * Fe,
      Iz: 3610 * N,
      Iy: 115 * N,
      J: 3.06 * N,
      d: 29.53 * ne,
      bf: 10.4 * ne
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * Fe,
      Iz: 4930 * N,
      Iy: 164 * N,
      J: 6.43 * N,
      d: 30.01 * ne,
      bf: 10.5 * ne
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * Fe,
      Iz: 5900 * N,
      Iy: 187 * N,
      J: 5.3 * N,
      d: 32.86 * ne,
      bf: 11.48 * ne
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * Fe,
      Iz: 7800 * N,
      Iy: 225 * N,
      J: 7 * N,
      d: 35.55 * ne,
      bf: 11.95 * ne
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * Fe,
      Iz: 8.22 * N,
      Iy: 8.22 * N,
      J: 13.4 * N,
      d: 4 * ne,
      bf: 4 * ne
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * Fe,
      Iz: 10.7 * N,
      Iy: 10.7 * N,
      J: 17.9 * N,
      d: 4 * ne,
      bf: 4 * ne
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * Fe,
      Iz: 12.3 * N,
      Iy: 12.3 * N,
      J: 21 * N,
      d: 4 * ne,
      bf: 4 * ne
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * Fe,
      Iz: 30.3 * N,
      Iy: 30.3 * N,
      J: 48.3 * N,
      d: 6 * ne,
      bf: 6 * ne
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * Fe,
      Iz: 41.1 * N,
      Iy: 41.1 * N,
      J: 66.9 * N,
      d: 6 * ne,
      bf: 6 * ne
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * Fe,
      Iz: 49.6 * N,
      Iy: 49.6 * N,
      J: 82.2 * N,
      d: 6 * ne,
      bf: 6 * ne
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * Fe,
      Iz: 70.7 * N,
      Iy: 70.7 * N,
      J: 112 * N,
      d: 8 * ne,
      bf: 8 * ne
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * Fe,
      Iz: 98 * N,
      Iy: 98 * N,
      J: 158 * N,
      d: 8 * ne,
      bf: 8 * ne
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * Fe,
      Iz: 122 * N,
      Iy: 122 * N,
      J: 199 * N,
      d: 8 * ne,
      bf: 8 * ne
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * Fe,
      Iz: 202 * N,
      Iy: 202 * N,
      J: 323 * N,
      d: 10 * ne,
      bf: 10 * ne
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * Fe,
      Iz: 254 * N,
      Iy: 254 * N,
      J: 412 * N,
      d: 10 * ne,
      bf: 10 * ne
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * Fe,
      Iz: 355 * N,
      Iy: 355 * N,
      J: 564 * N,
      d: 12 * ne,
      bf: 12 * ne
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * Fe,
      Iz: 452 * N,
      Iy: 452 * N,
      J: 724 * N,
      d: 12 * ne,
      bf: 12 * ne
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * Fe,
      Iz: 18 * N,
      Iy: 9.58 * N,
      J: 22.6 * N,
      d: 6 * ne,
      bf: 4 * ne
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * Fe,
      Iz: 23.8 * N,
      Iy: 12.3 * N,
      J: 30.3 * N,
      d: 6 * ne,
      bf: 4 * ne
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * Fe,
      Iz: 33.6 * N,
      Iy: 11.8 * N,
      J: 33 * N,
      d: 8 * ne,
      bf: 4 * ne
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * Fe,
      Iz: 45.1 * N,
      Iy: 15 * N,
      J: 44.5 * N,
      d: 8 * ne,
      bf: 4 * ne
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * Fe,
      Iz: 46.1 * N,
      Iy: 28.2 * N,
      J: 61.3 * N,
      d: 8 * ne,
      bf: 6 * ne
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * Fe,
      Iz: 63 * N,
      Iy: 37.5 * N,
      J: 84.6 * N,
      d: 8 * ne,
      bf: 6 * ne
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * Fe,
      Iz: 103 * N,
      Iy: 47.1 * N,
      J: 115 * N,
      d: 10 * ne,
      bf: 6 * ne
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * Fe,
      Iz: 196 * N,
      Iy: 102 * N,
      J: 249 * N,
      d: 12 * ne,
      bf: 8 * ne
    }
  ];
  function mo() {
    const e = {};
    return kn.forEach((g, R) => {
      g.type === "W" && (e[g.name] = R);
    }), e;
  }
  function bo() {
    const e = {};
    return kn.forEach((g, R) => {
      g.type === "HSS" && (e[g.name] = R);
    }), e;
  }
  function ul(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: g, elements: R, elementInputs: M, nodeInputs: J, deformOutputs: B } = e, U = g.length * 6, Y = R.length, H = R.filter((re) => re.length === 2).length, j = R.filter((re) => re.length >= 3).length, ge = document.createElement("div");
    ge.className = "rpt-overlay";
    let T = "";
    T += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', T += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", T += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', T += '<hr class="rpt-sep"/>', T += "<h2>1. Input Data</h2>", T += '<table class="rpt-info"><tbody>', T += `<tr><td>Number of nodes</td><td class="val">${g.length}</td></tr>`, T += `<tr><td>Number of elements</td><td class="val">${Y} (${H} frames, ${j} shells)</td></tr>`, T += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', T += `<tr><td>Total DOFs</td><td class="val">${U}</td></tr>`, T += "</tbody></table>", T += "<h3>1.1 Node Coordinates</h3>", T += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', g.forEach((re, te) => {
      T += `<tr><td>${te}</td><td>${ot(re[0])}</td><td>${ot(re[1])}</td><td>${ot(re[2])}</td></tr>`;
    }), T += "</tbody></table>", T += "<h3>1.2 Element Connectivity</h3>", T += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', R.forEach((re, te) => {
      var _a2, _b2, _c2, _d2;
      const q = re.length === 2, D = re.map((ve) => g[ve]), G = q ? Pn(xn(D[1], D[0])) : 0, de = ((_a2 = M.elasticities) == null ? void 0 : _a2.get(te)) ?? 0, $e = ((_b2 = M.areas) == null ? void 0 : _b2.get(te)) ?? 0, Te = ((_c2 = M.momentsOfInertiaZ) == null ? void 0 : _c2.get(te)) ?? 0, Ve = ((_d2 = M.momentsOfInertiaY) == null ? void 0 : _d2.get(te)) ?? 0;
      T += `<tr><td>${te}</td><td>${q ? "Frame" : "Shell"}</td><td>${re.join(" \u2192 ")}</td>`, T += `<td>${ot(G)}</td><td>${ot(de)}</td><td>${ot($e)}</td><td>${ot(Te)}</td><td>${ot(Ve)}</td></tr>`;
    }), T += "</tbody></table>", T += "<h2>2. Element Formulation</h2>", H > 0 && (T += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", T += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", T += "<h4>2.1.1 Shape Functions</h4>", T += "<p><b>Axial</b> (linear interpolation):</p>", T += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', T += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", T += '<table class="rpt-eq-table"><tbody>', T += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', T += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', T += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', T += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', T += "</tbody></table>", T += bl(), T += "<p><b>Torsion</b> (linear): same as axial.</p>", T += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", T += "<p>The B matrix relates nodal displacements to internal strains:</p>", T += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', T += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', T += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', T += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', T += "<h4>2.1.3 Constitutive Relations D</h4>", T += '<table class="rpt-eq-table"><tbody>', T += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', T += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', T += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', T += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', T += "</tbody></table>", T += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", T += "<p>Obtained by analytical integration:</p>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', T += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", T += '<div class="rpt-eq-small">', T += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", T += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", T += "</div>", T += "<h4>2.1.5 Transformation Matrix T</h4>", T += "<p>Direction cosines of element axis:</p>", T += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', T += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', T += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', T += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", T += "<h4>2.1.6 Global Stiffness Matrix</h4>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), T += "<h2>3. Numerical Results per Element</h2>", T += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let re = 0; re < Y; re++) {
      const te = R[re], q = te.map((at) => g[at]);
      if (!(te.length === 2)) continue;
      const G = Pn(xn(q[1], q[0])), de = ((_a = M.elasticities) == null ? void 0 : _a.get(re)) ?? 0, $e = ((_b = M.areas) == null ? void 0 : _b.get(re)) ?? 0, Te = ((_c = M.momentsOfInertiaZ) == null ? void 0 : _c.get(re)) ?? 0, Ve = ((_d = M.momentsOfInertiaY) == null ? void 0 : _d.get(re)) ?? 0, ve = ((_e = M.shearModuli) == null ? void 0 : _e.get(re)) ?? 0, Be = ((_f = M.torsionalConstants) == null ? void 0 : _f.get(re)) ?? 0;
      let He = null, be = null, Ee = null;
      try {
        He = vo(q, M, re), be = yo(q), Ee = on(os(be), on(He, be));
      } catch {
        continue;
      }
      const ze = xn(q[1], q[0]), Je = ze[0] / G, st = ze[1] / G, Ue = ze[2] / G;
      T += '<div class="rpt-elem-block">', T += `<h3 class="rpt-elem-title" data-toggle="elem${re}">\u25B6 Element ${re} \u2014 Nodes ${te[0]} \u2192 ${te[1]}, L = ${ot(G)}</h3>`, T += `<div id="rpt-elem${re}" class="rpt-elem-body" style="display:none">`, T += "<h4>Properties (numerical substitution)</h4>", T += '<div class="rpt-eq-small">', T += `E = ${ot(de)} &nbsp;&nbsp; A = ${ot($e)} &nbsp;&nbsp; I<sub>z</sub> = ${ot(Te)} &nbsp;&nbsp; I<sub>y</sub> = ${ot(Ve)} &nbsp;&nbsp; G = ${ot(ve)} &nbsp;&nbsp; J = ${ot(Be)}<br/>`, T += `EA/L = ${ot(de)}\xB7${ot($e)}/${ot(G)} = <b>${ot(de * $e / G)}</b><br/>`, T += `12EI<sub>z</sub>/L\xB3 = 12\xB7${ot(de)}\xB7${ot(Te)}/${ot(G)}\xB3 = <b>${ot(12 * de * Te / G ** 3)}</b><br/>`, T += `12EI<sub>y</sub>/L\xB3 = 12\xB7${ot(de)}\xB7${ot(Ve)}/${ot(G)}\xB3 = <b>${ot(12 * de * Ve / G ** 3)}</b><br/>`, T += `GJ/L = ${ot(ve)}\xB7${ot(Be)}/${ot(G)} = <b>${ot(ve * Be / G)}</b>`, T += "</div>", T += "<h4>Direction cosines</h4>", T += `<div class="rpt-eq-small">l = ${go(Je)}, m = ${go(st)}, n = ${go(Ue)}, D = ${go(Math.sqrt(Je ** 2 + st ** 2))}</div>`, T += "<h4>K<sub>local</sub> (12\xD712)</h4>", T += Ko(He, 12), T += "<h4>T \u2014 Transformation (12\xD712)</h4>", T += Ko(be, 12), T += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", T += Ko(Ee, 12), T += "<h4>Assembly</h4>", T += `<div class="rpt-eq-small">Global DOFs: node ${te[0]} \u2192 [${te[0] * 6}..${te[0] * 6 + 5}], node ${te[1]} \u2192 [${te[1] * 6}..${te[1] * 6 + 5}]</div>`, T += "</div></div>";
    }
    T += "<h2>4. Global Assembly</h2>", T += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${Y - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, T += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", T += gl(R, g.length), T += "<h2>5. Boundary Conditions</h2>";
    const Z = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], ye = [];
    if (T += "<h3>5.1 Supports (fixed DOFs)</h3>", J.supports && J.supports.size > 0) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const re of Z) T += `<th>${re}</th>`;
      T += "</tr></thead><tbody>", J.supports.forEach((re, te) => {
        T += `<tr><td>${te}</td>`, re.forEach((q, D) => {
          q && ye.push(te * 6 + D), T += `<td class="${q ? "fixed" : ""}">${q ? "Fixed" : "Free"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += `<div class="rpt-eq-small">Fixed DOFs: [${ye.join(", ")}] \u2192 ${ye.length} constraints<br/>`, T += `Free DOFs: ${U} \u2212 ${ye.length} = <b>${U - ye.length}</b></div>`, T += "<h3>5.2 Applied Loads</h3>", J.loads && J.loads.size > 0) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const re = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const te of re) T += `<th>${te}</th>`;
      T += "</tr></thead><tbody>", J.loads.forEach((te, q) => {
        T += `<tr><td>${q}</td>`, te.forEach((D) => {
          const G = Math.abs(D) > 1e-10;
          T += `<td class="${G ? "nz" : ""}">${G ? ot(D) : "0"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h2>6. Solution</h2>", T += "<p>After removing fixed DOFs, the reduced system is:</p>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', T += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", T += "<h3>6.1 Nodal Displacements</h3>", B == null ? void 0 : B.deformations) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const re of Z) T += `<th>${re}</th>`;
      T += "</tr></thead><tbody>", B.deformations.forEach((re, te) => {
        T += `<tr><td>${te}</td>`, re.forEach((q) => {
          const D = Math.abs(q) > 1e-10;
          T += `<td class="${D ? "nz" : ""}">${ot(q, 6)}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h3>6.2 Reactions</h3>", T += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', B == null ? void 0 : B.reactions) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const re of Z) T += `<th>${re}</th>`;
      T += "</tr></thead><tbody>", B.reactions.forEach((re, te) => {
        T += `<tr><td>${te}</td>`, re.forEach((q) => {
          const D = Math.abs(q) > 1e-10;
          T += `<td class="${D ? "nz-react" : ""}">${D ? ot(q, 4) : "0"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h2>7. Internal Forces</h2>", T += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", T += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', T += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', B == null ? void 0 : B.deformations) {
      const re = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      T += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const te of re) T += `<th>${te}<sub>i</sub></th>`;
      for (const te of re) T += `<th>${te}<sub>j</sub></th>`;
      T += "</tr></thead><tbody>";
      for (let te = 0; te < Y; te++) {
        const q = R[te];
        if (q.length !== 2) continue;
        const D = q.map((G) => g[G]);
        try {
          const G = vo(D, M, te), de = yo(D), $e = [];
          for (const ve of q) {
            const Be = ((_g = B.deformations) == null ? void 0 : _g.get(ve)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            $e.push(...Be);
          }
          const Te = on(de, $e), Ve = on(G, Te);
          T += `<tr><td>${te}</td><td>${q.join("\u2192")}</td>`;
          for (let ve = 0; ve < 12; ve++) {
            const Be = Math.abs(Ve[ve]) > 1e-10;
            T += `<td class="${Be ? "nz" : ""}">${ot(Ve[ve], 2)}</td>`;
          }
          T += "</tr>";
        } catch {
        }
      }
      T += "</tbody></table>";
    }
    const ie = `
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
    return ge.innerHTML = ie + T, (_h = ge.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => ge.remove()), ge.querySelectorAll("[data-toggle]").forEach((re) => {
      re.addEventListener("click", () => {
        const te = re.dataset.toggle, q = ge.querySelector(`#rpt-${te}`);
        if (q) {
          const D = q.style.display !== "none";
          q.style.display = D ? "none" : "", re.textContent = re.textContent.replace(/^[▼▶]/, D ? "\u25B6" : "\u25BC");
        }
      });
    }), ge;
  }
  function ot(e, g = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(g) : e.toFixed(g);
  }
  function go(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function Ko(e, g) {
    var _a;
    const R = Math.min(g, 12);
    let M = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let J = 0; J < R; J++) {
      M += "<tr>";
      for (let B = 0; B < R; B++) {
        const U = ((_a = e[J]) == null ? void 0 : _a[B]) ?? 0, Y = Math.abs(U) < 1e-10;
        M += `<td class="${Y ? "z" : ""} ${J === B && !Y ? "diag" : ""}">${Y ? "0" : ml(U)}</td>`;
      }
      M += "</tr>";
    }
    return M += "</table>", g > R && (M += `<div style="color:#888;font-size:9pt">(showing ${R}\xD7${R} of ${g}\xD7${g})</div>`), M += "</div>", M;
  }
  function ml(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function bl() {
    const U = [
      {
        name: "H\u2081",
        color: "#c44",
        fn: (H) => 1 - 3 * H ** 2 + 2 * H ** 3
      },
      {
        name: "H\u2082/L",
        color: "#2a9d8f",
        fn: (H) => H * (1 - H) ** 2
      },
      {
        name: "H\u2083",
        color: "#264653",
        fn: (H) => 3 * H ** 2 - 2 * H ** 3
      },
      {
        name: "H\u2084/L",
        color: "#e9c46a",
        fn: (H) => H ** 2 * (H - 1)
      }
    ];
    let Y = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    Y += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, Y += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', Y += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, Y += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, Y += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const H of U) {
      let j = "";
      for (let ye = 0; ye <= 80; ye++) {
        const ie = ye / 80, re = 30 + ie * 540, te = 180 / 2 - H.fn(ie) * 60;
        j += (ye === 0 ? "M" : "L") + `${re.toFixed(1)},${te.toFixed(1)}`;
      }
      Y += `<path d="${j}" fill="none" stroke="${H.color}" stroke-width="2.5"/>`;
      const ge = 0.75, T = 30 + ge * 540 + 8, Z = 180 / 2 - H.fn(ge) * 60 - 6;
      Y += `<text x="${T}" y="${Z}" fill="${H.color}" font-size="11" font-weight="bold" font-family="sans-serif">${H.name}</text>`;
    }
    return Y += "</svg>", Y;
  }
  function gl(e, g) {
    const R = g * 6, M = Math.min(R, 30);
    let J = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    J += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', J += "<tr><td></td>";
    for (let U = 0; U < M; U++) J += `<td style="color:#003366;font-weight:bold;font-size:7px">${U}</td>`;
    J += "</tr>";
    const B = Array.from({
      length: M
    }, () => Array(M).fill(0));
    for (let U = 0; U < e.length; U++) {
      const Y = e[U].map((H) => H * 6);
      for (const H of Y) for (const j of Y) for (let ge = 0; ge < 6; ge++) for (let T = 0; T < 6; T++) {
        const Z = H + ge, ye = j + T;
        Z < M && ye < M && B[Z][ye]++;
      }
    }
    for (let U = 0; U < M; U++) {
      J += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${U}</td>`;
      for (let Y = 0; Y < M; Y++) {
        const H = B[U][Y], j = H === 0 ? "#fff" : H === 1 ? "#e8f0fe" : H === 2 ? "#c6dcf5" : "#a0c4e8", ge = H === 0 ? "" : H.toString();
        J += `<td style="background:${j};color:#003366">${ge}</td>`;
      }
      J += "</tr>";
    }
    return J += "</table></div>", R > M && (J += `<div style="color:#888;font-size:9pt">(showing ${M}\xD7${M} of ${R}\xD7${R})</div>`), J;
  }
  let Zo = false;
  function hl(e) {
    if (Zo || window.katex) {
      Zo = true, e();
      return;
    }
    const g = document.createElement("link");
    g.rel = "stylesheet", g.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(g);
    const R = document.createElement("script");
    R.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", R.onload = () => {
      Zo = true, e();
    }, document.head.appendChild(R);
  }
  function aa(e, g = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: g,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function xl(e, g, R, M, J, B) {
    var _a, _b, _c, _d, _e, _f;
    const U = R[e], Y = U.map((be) => g[be]), H = U.length === 2, j = H ? Pn(xn(Y[1], Y[0])) : 0, ge = ((_a = M.elasticities) == null ? void 0 : _a.get(e)) ?? 0, T = ((_b = M.areas) == null ? void 0 : _b.get(e)) ?? 0, Z = ((_c = M.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, ye = ((_d = M.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, ie = ((_e = M.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, re = ((_f = M.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let te = null, q = null, D = null;
    try {
      te = vo(Y, M, e), q = yo(Y), D = on(os(q), on(te, q));
    } catch {
    }
    const G = H ? xn(Y[1], Y[0]) : [
      0,
      0,
      0
    ], de = j > 0 ? G[0] / j : 0, $e = j > 0 ? G[1] / j : 0, Te = j > 0 ? G[2] / j : 0, Ve = Math.sqrt(de ** 2 + $e ** 2), ve = [];
    if ((J == null ? void 0 : J.deformations) && H) for (const be of U) {
      const Ee = J.deformations.get(be) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      ve.push(...Ee);
    }
    let Be = [], He = [];
    if (ve.length === 12 && q && te) {
      try {
        Be = on(q, ve);
      } catch {
        Be = Array(12).fill(0);
      }
      try {
        He = on(te, Be);
      } catch {
        He = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: U,
      elmNodes: Y,
      isFrame: H,
      L: j,
      E: ge,
      A: T,
      Iz: Z,
      Iy: ye,
      G: ie,
      J: re,
      kLocal: te,
      T: q,
      kGlobal: D,
      l: de,
      m: $e,
      n: Te,
      D: Ve,
      uGlobal: ve,
      uLocal: Be,
      fLocal: He,
      dOut: J,
      aOut: B,
      totalNodes: g.length
    };
  }
  function vl(e, g, R, M, J, B) {
    var _a, _b;
    const U = xl(e, g, R, M, J, B), Y = document.createElement("div");
    return Y.className = "er-panel", Y.innerHTML = wl + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${U.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${U.elem.join(" \u2192 ")} \u2014 L = ${Ye(U.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${yl(U)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${la(U)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${$l(U)}</div>
  `, Y.querySelectorAll(".er-tab").forEach((H) => {
      H.addEventListener("click", () => {
        Y.querySelectorAll(".er-tab").forEach((ge) => ge.classList.remove("active")), H.classList.add("active");
        const j = H.dataset.tab;
        Y.querySelectorAll(".er-body").forEach((ge) => ge.style.display = "none"), Y.querySelector(`#er-body-${j}`).style.display = "";
      });
    }), (_a = Y.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => Y.remove()), (_b = Y.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const H = Y.classList.toggle("er-fullscreen-mode"), j = Y.querySelector("#er-fullscreen");
      j && (j.textContent = H ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const H = Y.querySelector("#er-sf-canvas");
      H && Qo(H);
      const j = Y.querySelector("#er-sf-canvas-math");
      j && Qo(j);
    }, 50), hl(() => {
      const H = Y.querySelector("#er-body-math");
      H && (H.innerHTML = la(U)), setTimeout(() => {
        const j = Y.querySelector("#er-sf-canvas-math");
        j && Qo(j);
      }, 50), Y.querySelectorAll(".er-deriv-header").forEach((j) => {
        j.addEventListener("click", () => {
          const ge = j.dataset.toggle, T = Y.querySelector(`#er-${ge}`);
          T && (T.style.display = T.style.display === "none" ? "" : "none");
        });
      });
    }), Y;
  }
  function yl(e) {
    let g = "";
    if (g += '<div class="er-section-title">1. Propiedades</div>', g += '<table class="er-props">', g += `<tr><td>E</td><td>${Ye(e.E)}</td><td>A</td><td>${Ye(e.A)}</td></tr>`, g += `<tr><td>I<sub>z</sub></td><td>${Ye(e.Iz)}</td><td>I<sub>y</sub></td><td>${Ye(e.Iy)}</td></tr>`, g += `<tr><td>G</td><td>${Ye(e.G)}</td><td>J</td><td>${Ye(e.J)}</td></tr>`, g += "</table>", e.kLocal && (g += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, g += ao(e.kLocal)), e.T && (g += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', g += ao(e.T)), e.kGlobal && (g += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', g += ao(e.kGlobal)), g += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const R = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let M = 0; M < e.elem.length; M++) {
        g += `<div class="er-sub">Nodo ${e.elem[M]}: `;
        for (let J = 0; J < 6; J++) {
          const B = e.uGlobal[M * 6 + J];
          g += `${R[J]}=<span class="${Math.abs(B) > 1e-10 ? "nz" : ""}">${Ye(B, 6)}</span> `;
        }
        g += "</div>";
      }
    } else g += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (g += '<div class="er-section-title">6. Fuerzas internas</div>', e.fLocal.length > 0 && e.fLocal.some((R) => R !== 0)) {
      const R = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const M of R) g += `<th>${M}</th>`;
      g += "</tr>", g += "<tr><td>Nodo i</td>";
      for (let M = 0; M < 6; M++) g += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[M], 3)}</td>`;
      g += "</tr><tr><td>Nodo j</td>";
      for (let M = 6; M < 12; M++) g += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[M], 3)}</td>`;
      g += "</tr></table>";
    } else g += '<div class="er-sub">Sin an\xE1lisis</div>';
    return g;
  }
  function la(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let g = "";
    const R = (ge) => aa(ge), M = (ge) => aa(ge, true);
    g += '<div class="er-section-title">1. Geometria del elemento</div>', g += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", g += `<div class="er-eq">${M("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, g += '<div class="er-eq-num">', g += `${R("\\text{Nodo } i")} = (${e.elmNodes[0].map((ge) => Ye(ge)).join(", ")})<br/>`, g += `${R("\\text{Nodo } j")} = (${e.elmNodes[1].map((ge) => Ye(ge)).join(", ")})<br/>`, g += `${M(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Ye(e.L)}}`)}`, g += "</div>", g += '<div class="er-section-title">2. Funciones de forma</div>', g += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", g += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', g += `<div class="er-eq">${M("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, g += "<p>Primera derivada:</p>", g += `<div class="er-eq">${M("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, g += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', g += `<p>Las funciones de Hermite garantizan continuidad ${R("C^1")} (desplazamiento y pendiente continuos):</p>`, g += `<div class="er-eq">${M("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${M("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${M("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, g += `<div class="er-eq">${M("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, g += `<div class="er-subsec">Derivadas segunda (curvatura ${R("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, g += `<div class="er-eq">${M("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, g += `<div class="er-eq">${M("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, g += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', g += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', g += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", g += `<div class="er-eq">${M("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, g += '<div class="er-subsec">3.1 Deformacion axial</div>', g += `<div class="er-eq">${M("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, g += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${R("I_z")})</div>`, g += `<div class="er-eq">${M("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, g += `<div class="er-eq">${M("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${R("I_y")})</div>`, g += `<div class="er-eq">${M("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, g += '<div class="er-subsec">3.4 Torsion</div>', g += `<div class="er-eq">${M("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, g += '<div class="er-section-title">4. Relaciones constitutivas D</div>', g += "<p>Cada modo de deformacion tiene su rigidez material:</p>", g += `<div class="er-eq">${M(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Ye(e.E)} \\times ${Ye(e.A)} = \\mathbf{${Ye(e.E * e.A)}}`)}</div>`, g += `<div class="er-eq">${M(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Ye(e.E)} \\times ${Ye(e.Iz)} = \\mathbf{${Ye(e.E * e.Iz)}}`)}</div>`, g += `<div class="er-eq">${M(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Ye(e.E)} \\times ${Ye(e.Iy)} = \\mathbf{${Ye(e.E * e.Iy)}}`)}</div>`, g += `<div class="er-eq">${M(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Ye(e.G)} \\times ${Ye(e.J)} = \\mathbf{${Ye(e.G * e.J)}}`)}</div>`, g += `<div class="er-section-title">5. Integracion \u2192 ${R("\\mathbf{K}_{local}")}</div>`, g += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", g += `<div class="er-eq er-eq-main">${M("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const J = e.E * e.A / e.L, B = e.E * e.Iz / e.L ** 3, U = e.E * e.Iy / e.L ** 3, Y = e.G * e.J / e.L;
    if (g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', g += "<p><b>Paso 1:</b> Funcion de forma axial</p>", g += `<div class="er-eq">${M("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, g += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", g += `<div class="er-eq">${M("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, g += `<div class="er-eq">${M("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion ${R("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, g += `<div class="er-eq">${M("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, g += `<div class="er-eq">${M("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, g += `<div class="er-eq er-eq-main">${M(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ye(e.E)}\\times${Ye(e.A)}}{${Ye(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, g += `<div class="er-eq">${M(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Ye(J)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', g += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${R("v(\\xi)")}</p>`, g += `<div class="er-eq">${M("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, g += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", g += `<div class="er-eq">${M("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, g += `<div class="er-eq">${M("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, g += `<div class="er-eq">${M("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${R("v_i \\cdot v_i")})</p>`, g += `<div class="er-eq">${M("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, g += `<p>Expandimos: ${R("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, g += `<div class="er-eq">${M("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, g += `<div class="er-eq er-eq-main">${M(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Ye(e.E)} \\times ${Ye(e.Iz)}}{${Ye(e.L)}^3} = \\mathbf{${Ye(12 * B)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', g += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', g += `<p>Mismo proceso que axial pero con ${R("\\theta_x")} y ${R("GJ")}:</p>`, g += `<div class="er-eq">${M(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ye(e.G)}\\times${Ye(e.J)}}{${Ye(e.L)}} = \\mathbf{${Ye(Y)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', g += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', g += `<p>Termino cruzado ${R("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, g += `<div class="er-eq">${M("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, g += `<div class="er-eq">${M("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, g += `<div class="er-eq">${M("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, g += `<div class="er-eq er-eq-main">${M(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Ye(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, g += "</div></div>", g += '<div class="er-subsec">Resumen de coeficientes:</div>', g += `<div class="er-eq">${M(`\\frac{EA}{L} = \\mathbf{${Ye(J)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Ye(12 * B)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Ye(12 * U)}}`)}</div>`, g += `<div class="er-eq">${M(`\\frac{GJ}{L} = \\mathbf{${Ye(Y)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Ye(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Ye(4 * e.E * e.Iz / e.L)}}`)}</div>`, g += `<div class="er-eq">${M(`\\frac{6EI_z}{L^2} = \\mathbf{${Ye(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Ye(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (g += `<div class="er-subsec">Resultado: ${R("\\mathbf{K}_{local}")} (12x12)</div>`, g += ao(e.kLocal)), g += '<div class="er-section-title">6. Transformacion de coordenadas</div>', g += "<p>Los cosenos directores del eje del elemento:</p>", g += `<div class="er-eq">${M(`l = \\frac{x_j - x_i}{L} = ${ho(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${ho(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${ho(e.n)}`)}</div>`, g += `<div class="er-eq">${M(`D = \\sqrt{l^2 + m^2} = ${ho(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      g += `<p>Caso especial: elemento vertical (${R(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const ge = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      g += `<div class="er-eq">${M(ge)}</div>`;
    } else g += `<div class="er-eq">${M("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    g += `<div class="er-eq er-eq-main">${M("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, g += `<div class="er-section-title">7. ${R("\\mathbf{K}_{global}")} = ${R("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, g += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", g += `<div class="er-eq er-eq-main">${M("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (g += ao(e.kGlobal)), g += '<div class="er-section-title">8. Ensamblaje</div>';
    const H = e.elem[0] * 6, j = e.elem[1] * 6;
    if (g += `<div class="er-eq">${M(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${H} \\ldots ${H + 5}]`)}</div>`, g += `<div class="er-eq">${M(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${j} \\ldots ${j + 5}]`)}</div>`, g += `<div class="er-eq">${M("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, g += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', g += `<div class="er-eq">${M("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, g += `<div class="er-eq er-eq-main">${M("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((ge) => ge !== 0)) {
      const ge = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const T of ge) g += `<th>${T}</th>`;
      g += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let T = 0; T < 6; T++) g += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[T], 3)}</td>`;
      g += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let T = 6; T < 12; T++) g += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[T], 3)}</td>`;
      g += "</tr></table>";
    }
    return g;
  }
  function $l(e) {
    let g = "";
    if (g += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, g += '<table class="er-props">', g += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, g += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, g += `<tr><td>Longitud</td><td><b>${Ye(e.L)}</b></td></tr>`, g += `<tr><td>E</td><td>${Ye(e.E)}</td></tr>`, g += `<tr><td>A</td><td>${Ye(e.A)}</td></tr>`, g += "</table>", e.uGlobal.length > 0) {
      g += '<div class="er-section-title">Desplazamientos</div>';
      const R = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const M of R) g += `<th>${M}</th>`;
      g += "</tr>";
      for (let M = 0; M < e.elem.length; M++) {
        g += `<tr><td>${e.elem[M]}</td>`;
        for (let J = 0; J < 6; J++) {
          const B = e.uGlobal[M * 6 + J];
          g += `<td class="${Math.abs(B) > 1e-10 ? "nz" : ""}">${Ye(B, 6)}</td>`;
        }
        g += "</tr>";
      }
      g += "</table>";
    }
    if (e.fLocal.length > 0 && e.fLocal.some((R) => R !== 0)) {
      g += '<div class="er-section-title">Fuerzas internas</div>';
      const R = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const M of R) g += `<th>${M}</th>`;
      g += "</tr><tr><td>Nodo i</td>";
      for (let M = 0; M < 6; M++) g += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[M], 3)}</td>`;
      g += "</tr><tr><td>Nodo j</td>";
      for (let M = 6; M < 12; M++) g += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[M], 3)}</td>`;
      g += "</tr></table>";
    }
    return g;
  }
  function Ye(e, g = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(g) : e.toFixed(g);
  }
  function ho(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function ao(e) {
    var _a;
    const g = e.length, R = Math.min(g, 12);
    let M = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let J = 0; J < R; J++) {
      M += "<tr>";
      for (let B = 0; B < R; B++) {
        const U = ((_a = e[J]) == null ? void 0 : _a[B]) ?? 0, Y = Math.abs(U) < 1e-10;
        M += `<td class="${Y ? "z" : ""} ${J === B && !Y ? "diag" : ""}">${Y ? "0" : Ml(U)}</td>`;
      }
      M += "</tr>";
    }
    return M += "</table>", g > R && (M += `<div style="color:var(--fem-label);font-size:9px">(${R}\xD7${R} de ${g}\xD7${g})</div>`), M += "</div>", M;
  }
  function Ml(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function Qo(e) {
    const g = e.getContext("2d");
    if (!g) return;
    const R = e.width, M = e.height, J = 30, B = R - 2 * J, U = (M - 3 * J) / 2;
    g.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", g.fillRect(0, 0, R, M);
    const Y = (H, j, ge) => {
      g.strokeStyle = "#333", g.lineWidth = 1, g.strokeRect(J, H, B, U), g.strokeStyle = "#444", g.beginPath(), g.moveTo(J, H + U / 2), g.lineTo(J + B, H + U / 2), g.stroke(), g.fillStyle = "#888", g.font = "11px sans-serif", g.fillText(j, J + 4, H + 14);
      for (const Z of ge) {
        g.strokeStyle = Z.color, g.lineWidth = 2.5, g.beginPath();
        for (let ye = 0; ye <= 100; ye++) {
          const ie = ye / 100, re = J + ie * B, te = H + U / 2 - Z.fn(ie) * (U / 2 * 0.85);
          ye === 0 ? g.moveTo(re, te) : g.lineTo(re, te);
        }
        g.stroke();
      }
      let T = J + B - 90;
      for (const Z of ge) g.fillStyle = Z.color, g.font = "bold 10px sans-serif", g.fillText(Z.label, T, H + U - 6), T += 36;
      g.fillStyle = "#666", g.font = "9px monospace", g.fillText("0", J, H + U + 12), g.fillText("1", J + B - 6, H + U + 12), g.fillText("\u03BE", J + B / 2, H + U + 12);
    };
    Y(J, "Axial (lineal)", [
      {
        fn: (H) => 1 - H,
        color: "#ff6600",
        label: "N\u2081"
      },
      {
        fn: (H) => H,
        color: "#00ccff",
        label: "N\u2082"
      }
    ]), Y(J + U + J, "Flexi\xF3n (Hermite c\xFAbicos)", [
      {
        fn: (H) => 1 - 3 * H * H + 2 * H * H * H,
        color: "#ff6600",
        label: "H\u2081"
      },
      {
        fn: (H) => H * (1 - H) * (1 - H),
        color: "#ffcc00",
        label: "H\u2082"
      },
      {
        fn: (H) => 3 * H * H - 2 * H * H * H,
        color: "#00ccff",
        label: "H\u2083"
      },
      {
        fn: (H) => H * H * (H - 1),
        color: "#00ff66",
        label: "H\u2084"
      }
    ]);
  }
  const wl = `<style>
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
</style>`, oo = [
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
  let Mo = false, On = null, ln = null, Bt = null, Tt = null;
  function El() {
    Tt = document.createElement("button"), Tt.id = "help-tour-btn", Tt.innerHTML = "?", Tt.title = "Ayuda interactiva \u2014 Tour guiado";
    let e = false;
    const g = (M) => {
      Tt.style.cssText = M ? "position:fixed;bottom:5px;right:5px;z-index:9999999;width:20px;height:20px;border-radius:50%;background:#555;color:#aaa;border:1px solid #777;font-size:10px;cursor:pointer;opacity:0.5;transition:all 0.2s;" : "position:fixed;bottom:20px;right:20px;z-index:9999999;width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:2px solid rgba(255,255,255,0.3);font-size:18px;font-weight:bold;cursor:pointer;box-shadow:0 2px 10px rgba(0,102,204,0.3);transition:all 0.2s;font-family:'Arial Nova',sans-serif;";
    };
    g(false), Tt.addEventListener("contextmenu", (M) => {
      M.preventDefault(), e = !e, g(e), Tt.innerHTML = "?";
    }), Tt.addEventListener("mouseenter", () => {
      Tt.style.transform = "scale(1.15)", Tt.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), Tt.addEventListener("mouseleave", () => {
      Tt.style.transform = "scale(1)", Tt.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), Tt.addEventListener("click", () => {
      Mo ? ss() : Sl();
    });
    const R = document.createElement("style");
    return R.textContent = `
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
  `, document.head.appendChild(R), Tt;
  }
  function Sl() {
    Mo = true, Tt && (Tt.innerHTML = "\u2715", Tt.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", Tt.style.animation = "none"), On = document.createElement("div"), On.id = "tour-overlay", On.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(On), Un(0);
  }
  function ss() {
    Mo = false, Tt && (Tt.innerHTML = "?", Tt.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", Tt.style.animation = "helpPulse 2s infinite"), ln && (ln.remove(), ln = null), Bt && (Bt.remove(), Bt = null), On && (On.remove(), On = null);
  }
  function Un(e) {
    var _a, _b;
    if (e >= oo.length) {
      Il();
      return;
    }
    const g = oo[e], R = document.querySelector(g.selector);
    if (!R) {
      Un(e + 1);
      return;
    }
    R.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), ln && ln.remove(), Bt && Bt.remove();
    const M = R.getBoundingClientRect(), J = window.innerWidth, B = window.innerHeight, U = 320, Y = 180;
    ln = document.createElement("div"), ln.style.cssText = `
    position: fixed;
    left: ${M.left - 6}px; top: ${M.top - 6}px;
    width: ${M.width + 12}px; height: ${M.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(ln);
    const H = J - M.right, j = M.left, ge = B - M.bottom, T = M.top;
    let Z = g.position || "bottom";
    Z === "bottom" && ge < Y + 20 && (Z = "top"), Z === "top" && T < Y + 20 && (Z = "right"), Z === "right" && H < U + 20 && (Z = "left"), Z === "left" && j < U + 20 && (Z = "bottom");
    let ye, ie, re = "";
    switch (Z) {
      case "bottom":
        ye = M.left + M.width / 2 - U / 2, ie = M.bottom + 14, re = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        ye = M.left + M.width / 2 - U / 2, ie = M.top - Y - 14, re = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        ye = M.right + 14, ie = M.top + M.height / 2 - Y / 2, re = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        ye = M.left - U - 14, ie = M.top + M.height / 2 - Y / 2, re = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    ye = Math.max(10, Math.min(ye, J - U - 10)), ie = Math.max(10, Math.min(ie, B - Y - 10)), Bt = document.createElement("div"), Bt.style.cssText = `
    position: fixed;
    left: ${ye}px; top: ${ie}px;
    width: ${U}px;
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
  `, Bt.innerHTML = `
    <div style="${re}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${g.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${oo.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${g.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < oo.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${oo.map((q, D) => `<div style="width:${D === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${D === e ? "#0099ff" : D < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Bt), (_a = Bt.querySelector("#tour-next")) == null ? void 0 : _a.addEventListener("click", () => {
      Un(e + 1);
    }), (_b = Bt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      Un(e - 1);
    });
    const te = (q) => {
      if (!Mo) {
        document.removeEventListener("keydown", te);
        return;
      }
      (q.key === "ArrowRight" || q.key === "Enter") && (Un(e + 1), document.removeEventListener("keydown", te)), q.key === "ArrowLeft" && (Un(Math.max(0, e - 1)), document.removeEventListener("keydown", te)), q.key === "Escape" && (ss(), document.removeEventListener("keydown", te));
    };
    document.addEventListener("keydown", te);
  }
  function Il() {
    var _a;
    ln && (ln.remove(), ln = null), Bt && (Bt.remove(), Bt = null), Bt = document.createElement("div"), Bt.style.cssText = `
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
  `, Bt.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(Bt), (_a = Bt.querySelector("#tour-done")) == null ? void 0 : _a.addEventListener("click", () => ss());
  }
  function kl(e) {
    var _a;
    const g = e.split(/\r?\n/), R = {
      force: "TONF",
      length: "M"
    }, M = [], J = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Y = [], H = [], j = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), T = [], Z = [];
    let ye = "", ie = "";
    const re = /* @__PURE__ */ new Map();
    for (const Ce of g) {
      const qe = Ce.trim();
      if (!qe || qe.startsWith("$")) {
        qe.startsWith("$ ") && (ie = qe.substring(2).trim());
        continue;
      }
      if (ie && (re.has(ie) || re.set(ie, []), re.get(ie).push(Ce)), ie === "CONTROLS") {
        const he = qe.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        he && (R.force = he[1], R.length = he[2]);
        const Ae = qe.match(/TITLE2\s+"([^"]+)"/);
        Ae && (ye = Ae[1]);
      }
      if (ie === "STORIES - IN SEQUENCE FROM TOP") {
        const he = qe.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (he) {
          const Ae = he[1], xe = he[2] ? parseFloat(he[2]) : 0, ke = he[3] ? parseFloat(he[3]) : void 0;
          M.push({
            name: Ae,
            height: xe,
            elev: ke ?? 0
          });
        }
      }
      if (ie === "MATERIAL PROPERTIES") {
        const he = qe.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (he) {
          const Ae = he[1];
          J.has(Ae) || J.set(Ae, {
            type: he[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const xe = J.get(Ae);
          he[2] && (xe.type = he[2]);
          const ke = qe.match(/\bE\s+([\d.eE+-]+)/);
          ke && (xe.E = parseFloat(ke[1]));
          const Ge = qe.match(/\bU\s+([\d.eE+-]+)/);
          Ge && (xe.nu = parseFloat(Ge[1]), xe.G = xe.E / (2 * (1 + xe.nu)));
          const _e = qe.match(/\bFY\s+([\d.eE+-]+)/);
          _e && (xe.fy = parseFloat(_e[1]));
          const it = qe.match(/\bFC\s+([\d.eE+-]+)/);
          it && (xe.fc = parseFloat(it[1]));
          const mt = qe.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          mt && (xe.density = parseFloat(mt[1]));
        }
      }
      if (ie === "FRAME SECTIONS") {
        const he = qe.match(/FRAMESECTION\s+"([^"]+)"/);
        if (he) {
          const Ae = he[1];
          B.has(Ae) || B.set(Ae, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const xe = B.get(Ae), ke = qe.match(/MATERIAL\s+"([^"]+)"/);
          ke && (xe.material = ke[1]);
          const Ge = qe.match(/SHAPE\s+"([^"]+)"/);
          Ge && (xe.shape = Ge[1]);
          const _e = qe.match(/\bD\s+([\d.eE+-]+)/);
          _e && (xe.D = parseFloat(_e[1]));
          const it = qe.match(/\bB\s+([\d.eE+-]+)/);
          it && (xe.B = parseFloat(it[1]));
          const mt = qe.match(/\bTF\s+([\d.eE+-]+)/);
          mt && (xe.TF = parseFloat(mt[1]));
          const We = qe.match(/\bTW\s+([\d.eE+-]+)/);
          We && (xe.TW = parseFloat(We[1]));
          const Xe = qe.match(/\bR\s+([\d.eE+-]+)/);
          Xe && (xe.R = parseFloat(Xe[1]));
          const pt = qe.match(/FILLMATERIAL\s+"([^"]+)"/);
          pt && (xe.fillMaterial = pt[1]);
          const lt = qe.match(/I2MOD\s+([\d.eE+-]+)/);
          lt && (xe.modI2 = parseFloat(lt[1]));
          const bt = qe.match(/I3MOD\s+([\d.eE+-]+)/);
          bt && (xe.modI3 = parseFloat(bt[1]));
        }
      }
      if (ie === "POINT COORDINATES") {
        const he = qe.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        he && U.set(he[1], [
          parseFloat(he[2]),
          parseFloat(he[3])
        ]);
      }
      if (ie === "LINE CONNECTIVITIES") {
        const he = qe.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        he && Y.push({
          name: he[1],
          type: he[2],
          pt1: he[3],
          pt2: he[4],
          nStories: parseInt(he[5])
        });
      }
      if (ie === "POINT ASSIGNS") {
        const he = qe.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        he && j.set(`${he[1]}@${he[2]}`, he[3].split(/\s+/));
      }
      if (ie === "LINE ASSIGNS") {
        const he = qe.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (he) {
          const Ae = {
            story: he[2],
            section: he[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, xe = qe.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          xe && (Ae.rigidZone = parseFloat(xe[1]));
          const ke = qe.match(/RELEASE\s+"([^"]+)"/);
          ke && (Ae.releases = ke[1].split(/\s+/));
          const Ge = qe.match(/ANG\s+([-\d.eE+]+)/);
          Ge && (Ae.angle = parseFloat(Ge[1])), ge.set(`${he[1]}@${he[2]}`, Ae);
        }
      }
      if (ie === "GRIDS") {
        const he = qe.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        he && Z.push({
          label: he[1],
          dir: he[2],
          coord: parseFloat(he[3])
        });
      }
      if (ie === "FRAME OBJECT LOADS") {
        const he = qe.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        he && T.push({
          line: he[1],
          story: he[2],
          type: he[3],
          dir: he[4],
          lc: he[5],
          val: parseFloat(he[6])
        });
      }
      if (ie === "AREA CONNECTIVITIES") {
        const he = qe.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (he) {
          const Ae = ((_a = he[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((xe) => xe.replace(/"/g, ""))) || [];
          H.push({
            name: he[1],
            pts: Ae,
            nStories: 0
          });
        }
      }
    }
    const te = /* @__PURE__ */ new Map();
    if (M.length > 0) {
      const Ce = M.length - 1;
      te.set(M[Ce].name, M[Ce].elev);
      for (let qe = Ce - 1; qe >= 0; qe--) {
        const Ae = te.get(M[qe + 1].name) + M[qe].height;
        M[qe].elev = Ae, te.set(M[qe].name, Ae);
      }
    }
    const q = [], D = [], G = /* @__PURE__ */ new Map(), de = (Ce, qe) => `${Ce}@${qe}`, $e = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Map();
    for (const Ce of Y) Te.set(Ce.name, Ce);
    for (const Ce of Y) for (const [qe, he] of ge) {
      if (!qe.startsWith(Ce.name + "@")) continue;
      const Ae = he.story, xe = M.findIndex((ke) => ke.name === Ae);
      if (!(xe < 0)) if (Ce.type === "COLUMN" || Ce.type === "BRACE") {
        $e.add(de(Ce.pt2, Ae));
        const ke = Math.max(Ce.nStories, 1), Ge = Math.min(xe + ke, M.length - 1);
        $e.add(de(Ce.pt1, M[Ge].name));
      } else $e.add(de(Ce.pt1, Ae)), $e.add(de(Ce.pt2, Ae));
    }
    for (const [Ce] of j) $e.add(Ce);
    for (const Ce of $e) {
      const [qe, he] = Ce.split("@"), Ae = U.get(qe), xe = te.get(he);
      Ae === void 0 || xe === void 0 || (q.push([
        Ae[0],
        Ae[1],
        xe
      ]), D.push(Ce), G.set(Ce, q.length - 1));
    }
    const Ve = [], ve = [], Be = [], He = [], be = /* @__PURE__ */ new Map();
    for (const Ce of Y) for (const [qe, he] of ge) {
      if (!qe.startsWith(Ce.name + "@")) continue;
      const Ae = he.story, xe = M.findIndex((We) => We.name === Ae);
      if (xe < 0) continue;
      let ke, Ge;
      if (Ce.type === "COLUMN" || Ce.type === "BRACE") {
        const We = Math.max(Ce.nStories, 1), Xe = Math.min(xe + We, M.length - 1);
        ke = de(Ce.pt1, M[Xe].name), Ge = de(Ce.pt2, Ae);
      } else ke = de(Ce.pt1, Ae), Ge = de(Ce.pt2, Ae);
      const _e = G.get(ke), it = G.get(Ge);
      if (_e === void 0 || it === void 0 || _e === it) continue;
      const mt = Ve.length;
      if (Ve.push([
        _e,
        it
      ]), ve.push(Ce.name), Be.push(Ce.type), He.push(Ae), be.set(mt, he.section), he.rigidZone > 0 && at.set(mt, [
        he.rigidZone,
        he.rigidZone
      ]), he.releases.length > 0) {
        const We = new Array(12).fill(false), Xe = {
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
        for (const pt of he.releases) {
          const lt = Xe[pt];
          lt !== void 0 && (We[lt] = true);
        }
        dt.set(mt, We);
      }
    }
    const Ee = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), zt = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map();
    for (const [Ce, qe] of be) {
      const he = B.get(qe);
      if (!he) continue;
      const Ae = J.get(he.material);
      Ae && (Ee.set(Ce, Ae.E), ze.set(Ce, Ae.G));
      const xe = he.D, ke = he.B, Ge = he.TF, _e = he.TW;
      let it = 0, mt = 0, We = 0, Xe = 0, pt = 0, lt = 0, bt = "rect";
      switch (he.shape) {
        case "Concrete Rectangular":
          it = xe * ke, mt = ke * xe ** 3 / 12, We = xe * ke ** 3 / 12, Xe = ke * xe ** 3 * (1 / 3 - 0.21 * (xe / ke) * (1 - xe ** 4 / (12 * ke ** 4))), pt = lt = 5 / 6 * it, bt = "rect";
          break;
        case "Concrete Circle":
          it = Math.PI * xe ** 2 / 4, mt = We = Math.PI * xe ** 4 / 64, Xe = Math.PI * xe ** 4 / 32, pt = lt = 0.9 * it, bt = "circ";
          break;
        case "Steel I/Wide Flange":
          it = 2 * ke * Ge + (xe - 2 * Ge) * _e, mt = (ke * xe ** 3 - (ke - _e) * (xe - 2 * Ge) ** 3) / 12, We = (2 * Ge * ke ** 3 + (xe - 2 * Ge) * _e ** 3) / 12, Xe = (2 * ke * Ge ** 3 + (xe - 2 * Ge) * _e ** 3) / 3, pt = (xe - 2 * Ge) * _e, lt = 2 * ke * Ge * 5 / 6, bt = "I";
          break;
        case "Steel Tube":
          it = xe * ke - (xe - 2 * _e) * (ke - 2 * _e), mt = (ke * xe ** 3 - (ke - 2 * _e) * (xe - 2 * _e) ** 3) / 12, We = (xe * ke ** 3 - (xe - 2 * _e) * (ke - 2 * _e) ** 3) / 12, Xe = 2 * _e * (xe - _e) * (ke - _e) * ((xe - _e) * (ke - _e)) / (xe - _e + (ke - _e)), pt = 2 * xe * _e, lt = 2 * ke * _e, bt = "HSS";
          break;
        case "Filled Steel Tube":
          it = xe * ke, mt = ke * xe ** 3 / 12, We = xe * ke ** 3 / 12, Xe = 2 * _e * (xe - _e) * (ke - _e) * ((xe - _e) * (ke - _e)) / (xe - _e + (ke - _e)), pt = 2 * xe * _e + 5 / 6 * (xe - 2 * _e) * (ke - 2 * _e), lt = 2 * ke * _e + 5 / 6 * (xe - 2 * _e) * (ke - 2 * _e), bt = "CFT";
          break;
        case "Steel Angle": {
          const Ht = Ge || _e;
          it = Ht * (xe + ke - Ht), mt = Ht * (xe ** 3 + ke * Ht ** 2 + Ht ** 2 * (xe - Ht)) / 12, We = Ht * (ke ** 3 + xe * Ht ** 2 + Ht ** 2 * (ke - Ht)) / 12, Xe = (xe + ke - Ht) * Ht ** 3 / 3, pt = xe * Ht, lt = ke * Ht, bt = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          it = 2 * ke * Ge + (xe - 2 * Ge) * _e, mt = (_e * xe ** 3 + 2 * ke * Ge * (xe - Ge) ** 2) / 12, We = (2 * Ge * ke ** 3 + (xe - 2 * Ge) * _e ** 3) / 12, Xe = (2 * ke * Ge ** 3 + (xe - 2 * Ge) * _e ** 3) / 3, pt = (xe - 2 * Ge) * _e, lt = 2 * ke * Ge * 5 / 6, bt = he.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          it = 2 * (2 * ke * Ge + (xe - 2 * Ge) * _e), mt = 2 * (_e * xe ** 3 + 2 * ke * Ge * (xe - Ge) ** 2) / 12, We = 2 * (2 * Ge * ke ** 3 + (xe - 2 * Ge) * _e ** 3) / 12, Xe = 2 * (2 * ke * Ge ** 3 + (xe - 2 * Ge) * _e ** 3) / 3, pt = 2 * (xe - 2 * Ge) * _e, lt = 4 * ke * Ge * 5 / 6, bt = "2C";
          break;
        default:
          xe > 0 && ke > 0 && (it = xe * ke, mt = ke * xe ** 3 / 12, We = xe * ke ** 3 / 12, Xe = Math.min(xe, ke) * Math.max(xe, ke) ** 3 / 3 * 0.3, pt = lt = 5 / 6 * it);
          break;
      }
      he.modI2 && (We *= he.modI2), he.modI3 && (mt *= he.modI3), Je.set(Ce, it), yt.set(Ce, mt), zt.set(Ce, We), Ft.set(Ce, Xe), pt > 0 && st.set(Ce, pt), lt > 0 && Ue.set(Ce, lt), gt.set(Ce, {
        type: bt,
        b: ke || void 0,
        h: xe || void 0,
        d: bt === "circ" || bt === "pipe" ? xe : void 0,
        tw: _e || void 0,
        tf: Ge || void 0,
        r: he.R,
        name: qe
      });
    }
    const ut = /* @__PURE__ */ new Map();
    for (const [Ce, qe] of j) {
      const he = G.get(Ce);
      if (he === void 0) continue;
      const Ae = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const xe of qe) xe === "UX" && (Ae[0] = true), xe === "UY" && (Ae[1] = true), xe === "UZ" && (Ae[2] = true), xe === "RX" && (Ae[3] = true), xe === "RY" && (Ae[4] = true), xe === "RZ" && (Ae[5] = true);
      ut.set(he, Ae);
    }
    const rn = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map();
    for (let Ce = 0; Ce < ve.length; Ce++) Ne.set(`${ve[Ce]}@${He[Ce]}`, Ce);
    for (const Ce of T) {
      const qe = Ne.get(`${Ce.line}@${Ce.story}`);
      if (qe === void 0) continue;
      const [he, Ae] = Ve[qe], xe = q[he], ke = q[Ae], Ge = Math.sqrt((ke[0] - xe[0]) ** 2 + (ke[1] - xe[1]) ** 2 + (ke[2] - xe[2]) ** 2);
      if (Ge < 1e-10) continue;
      const _e = Ce.val * Ge / 2;
      let it = 0, mt = 0, We = 0;
      Ce.dir === "GRAV" || Ce.dir === "GRAVITY" ? We = -_e : Ce.dir === "X" ? it = _e : Ce.dir === "Y" ? mt = _e : Ce.dir === "Z" && (We = -_e);
      for (const Xe of [
        he,
        Ae
      ]) {
        const pt = rn.get(Xe) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        pt[0] += it, pt[1] += mt, pt[2] += We, rn.set(Xe, pt);
      }
    }
    const xt = /* @__PURE__ */ new Map();
    for (const [Ce, qe] of be) {
      const he = B.get(qe);
      if (!he) continue;
      const Ae = J.get(he.material);
      (Ae == null ? void 0 : Ae.density) && xt.set(Ce, Ae.density);
    }
    return {
      units: R,
      stories: M.reverse(),
      materials: J,
      frameSections: B,
      nodes: q,
      nodeNames: D,
      nodeNameToIdx: G,
      elements: Ve,
      elementNames: ve,
      elementTypes: Be,
      elementStories: He,
      elementSections: be,
      nodeInputs: {
        supports: ut,
        loads: rn
      },
      elementInputs: {
        elasticities: Ee,
        shearModuli: ze,
        areas: Je,
        momentsOfInertiaZ: yt,
        momentsOfInertiaY: zt,
        torsionalConstants: Ft,
        shearAreasY: st,
        shearAreasZ: Ue,
        rigidOffsets: at,
        momentReleases: dt,
        densities: xt,
        sectionShapes: gt
      },
      sectionShapes: gt,
      grids: Z,
      info: {
        nNodes: q.length,
        nFrames: Ve.length,
        nAreas: H.length,
        title: ye
      },
      rawSections: re
    };
  }
  function tt(e) {
    return e && parseFloat(e) || 0;
  }
  function da(e) {
    const g = /* @__PURE__ */ new Map(), R = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
    let M;
    for (; (M = R.exec(e)) !== null; ) g.set(M[1], M[2] !== void 0 ? M[2] : M[3]);
    return g;
  }
  function Tl(e) {
    const g = e.split(/\r?\n/);
    return g.some((M) => M.trim().startsWith("TABLE:")) ? zl(g) : Al(g);
  }
  function zl(e) {
    var _a, _b, _c, _d, _e, _f;
    const g = [];
    let R = "";
    for (const te of e) {
      const q = te.trimEnd();
      q.endsWith("_") ? R += q.slice(0, -1) + " " : (R += q, g.push(R), R = "");
    }
    R && g.push(R);
    const M = {
      force: "KN",
      length: "m"
    };
    let J = "UX,UY,UZ,RX,RY,RZ";
    const B = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), j = [], ge = [], T = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), ie = [];
    let re = "";
    for (const te of g) {
      const q = te.trim();
      if (!q || q.startsWith(";") || q.startsWith("File ")) continue;
      if (q.startsWith("TABLE:")) {
        const G = q.match(/TABLE:\s+"(.+?)"/);
        re = G ? G[1].toUpperCase() : "";
        continue;
      }
      if (q === "END TABLE DATA") {
        re = "";
        continue;
      }
      const D = da(q);
      switch (re) {
        case "PROGRAM CONTROL": {
          const G = D.get("CurrUnits");
          if (G) {
            const de = G.split(",").map(($e) => $e.trim());
            de[0] && (M.force = de[0]), de[1] && (M.length = de[1]);
          }
          break;
        }
        case "MATERIAL PROPERTIES 01 - GENERAL": {
          const G = D.get("Material");
          G && !B.has(G) && B.set(G, {
            E: 0,
            nu: 0,
            G: 0
          });
          break;
        }
        case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
          const G = D.get("Material");
          if (G) {
            const de = B.get(G) || {
              E: 0,
              nu: 0,
              G: 0
            };
            de.E = tt(D.get("E1")), de.G = tt(D.get("G12")), de.nu = tt(D.get("U12")), de.density = tt(D.get("UnitMass")), B.set(G, de);
          }
          break;
        }
        case "MATERIAL PROPERTIES 03A - STEEL DATA": {
          const G = D.get("Material");
          G && B.has(G) && (B.get(G).fy = tt(D.get("Fy")));
          break;
        }
        case "FRAME SECTION PROPERTIES 01 - GENERAL": {
          const G = D.get("SectionName");
          G && U.set(G, {
            material: D.get("Material") || "",
            shape: D.get("Shape") || "Rectangular",
            D: tt(D.get("t3")),
            B: tt(D.get("t2")),
            TF: tt(D.get("tf")),
            TW: tt(D.get("tw")),
            A: tt(D.get("Area")),
            Iz: tt(D.get("I33")),
            Iy: tt(D.get("I22")),
            J: tt(D.get("TorsConst"))
          });
          break;
        }
        case "AREA SECTION PROPERTIES": {
          const G = D.get("Section");
          G && Y.set(G, {
            material: D.get("Material") || "",
            type: D.get("Type") || "Shell",
            thickness: tt(D.get("Thickness"))
          });
          break;
        }
        case "JOINT COORDINATES": {
          const G = D.get("Joint");
          if (G) {
            const de = tt(D.get("XorR")), $e = tt(D.get("Y")), Te = tt(D.get("Z"));
            H.set(G, [
              de,
              $e,
              Te
            ]);
          }
          break;
        }
        case "CONNECTIVITY - FRAME": {
          const G = D.get("Frame"), de = D.get("JointI"), $e = D.get("JointJ");
          G && de && $e && j.push({
            name: G,
            j1: de,
            j2: $e
          });
          break;
        }
        case "CONNECTIVITY - AREA": {
          const G = D.get("Area");
          if (G) {
            const de = parseInt(D.get("NumJoints") || "4"), $e = [];
            for (let Te = 1; Te <= de; Te++) {
              const Ve = D.get(`Joint${Te}`);
              Ve && $e.push(Ve);
            }
            $e.length >= 3 && ge.push({
              name: G,
              joints: $e
            });
          }
          break;
        }
        case "JOINT RESTRAINT ASSIGNMENTS": {
          const G = D.get("Joint");
          if (G) {
            const de = [
              ((_a = D.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes",
              ((_b = D.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes",
              ((_c = D.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes",
              ((_d = D.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes",
              ((_e = D.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes",
              ((_f = D.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"
            ];
            T.set(G, de);
          }
          break;
        }
        case "FRAME SECTION ASSIGNMENTS": {
          const G = D.get("Frame"), de = D.get("AnalSect");
          G && de && Z.set(G, de);
          break;
        }
        case "AREA SECTION ASSIGNMENTS": {
          const G = D.get("Area"), de = D.get("Section");
          G && de && ye.set(G, de);
          break;
        }
        case "JOINT LOADS - FORCE": {
          const G = D.get("Joint");
          G && ie.push({
            joint: G,
            fx: tt(D.get("F1")),
            fy: tt(D.get("F2")),
            fz: tt(D.get("F3")),
            mx: tt(D.get("M1")),
            my: tt(D.get("M2")),
            mz: tt(D.get("M3"))
          });
          break;
        }
      }
    }
    return pa(M, J, B, U, Y, H, j, ge, T, Z, ye, ie);
  }
  function Al(e) {
    const g = {
      force: "KN",
      length: "m"
    };
    let R = "UX,UY,UZ,RX,RY,RZ";
    const M = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Y = [], H = [], j = /* @__PURE__ */ new Map(), ge = [];
    let T = "", Z = "";
    for (const re of e) {
      const te = re.trim();
      if (!te || te.startsWith(";")) continue;
      if (!re.startsWith(" ") && !re.startsWith("	")) {
        const G = te.toUpperCase();
        if (G === "END") break;
        G.startsWith("SHELL SECTION") ? T = "SHELL SECTION" : G.startsWith("FRAME SECTION") ? T = "FRAME SECTION" : T = G.split(/\s+/)[0];
        continue;
      }
      const q = da(te), D = te.split(/\s+/);
      switch (T) {
        case "SYSTEM": {
          const G = q.get("DOF");
          G && (R = G);
          const de = q.get("LENGTH");
          de && (g.length = de);
          const $e = q.get("FORCE");
          $e && (g.force = $e);
          break;
        }
        case "JOINT": {
          const G = D[0];
          U.set(G, [
            tt(q.get("X")),
            tt(q.get("Y")),
            tt(q.get("Z"))
          ]);
          break;
        }
        case "RESTRAINT": {
          const G = q.get("ADD"), de = q.get("DOF");
          if (G && de) {
            const $e = de.split(","), Te = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            for (const Ve of $e) {
              const ve = Ve.toUpperCase();
              (ve === "UX" || ve === "U1") && (Te[0] = true), (ve === "UY" || ve === "U2") && (Te[1] = true), (ve === "UZ" || ve === "U3") && (Te[2] = true), (ve === "RX" || ve === "R1") && (Te[3] = true), (ve === "RY" || ve === "R2") && (Te[4] = true), (ve === "RZ" || ve === "R3") && (Te[5] = true);
            }
            j.set(G, Te);
          }
          break;
        }
        case "MATERIAL": {
          const G = q.get("NAME");
          if (G) Z = G, M.set(G, {
            E: 0,
            nu: 0,
            G: 0
          });
          else if (Z) {
            const de = M.get(Z), $e = q.get("E");
            $e && (de.E = tt($e));
            const Te = q.get("U");
            Te && (de.nu = tt(Te)), de.G = de.E / (2 * (1 + de.nu));
            const Ve = q.get("M");
            Ve && (de.density = tt(Ve));
          }
          break;
        }
        case "SHELL": {
          const G = D[0], de = q.get("J");
          q.get("SEC"), de && H.push({
            name: G,
            joints: de.split(",")
          });
          break;
        }
        case "SHELL SECTION": {
          const G = q.get("NAME");
          G && B.set(G, {
            material: q.get("MAT") || "",
            type: q.get("TYPE") || "Shell",
            thickness: tt(q.get("TH"))
          });
          break;
        }
        case "FRAME": {
          const G = D[0], de = q.get("J");
          if (de) {
            const $e = de.split(",");
            $e.length >= 2 && Y.push({
              name: G,
              j1: $e[0],
              j2: $e[1]
            });
          }
          break;
        }
        case "LOAD": {
          const G = q.get("ADD");
          G && ge.push({
            joint: G,
            fx: tt(q.get("UX")),
            fy: tt(q.get("UY")),
            fz: tt(q.get("UZ")),
            mx: tt(q.get("MX")),
            my: tt(q.get("MY")),
            mz: tt(q.get("MZ"))
          });
          break;
        }
      }
    }
    return pa(g, R, M, J, B, U, Y, H, j, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), ge);
  }
  function pa(e, g, R, M, J, B, U, Y, H, j, ge, T) {
    var _a;
    const Z = [], ye = /* @__PURE__ */ new Map(), ie = [];
    for (const [ve, Be] of B) ye.set(ve, ie.length), Z.push(ve), ie.push(Be);
    const re = [], te = [], q = /* @__PURE__ */ new Map();
    for (const ve of U) {
      const Be = ye.get(ve.j1), He = ye.get(ve.j2);
      if (Be !== void 0 && He !== void 0) {
        const be = re.length;
        re.push([
          Be,
          He
        ]), te.push(ve.name);
        const Ee = j.get(ve.name);
        Ee && q.set(be, Ee);
      }
    }
    const D = re.length;
    for (const ve of Y) {
      const Be = ve.joints.map((He) => ye.get(He)).filter((He) => He !== void 0);
      if (Be.length >= 3) {
        const He = re.length;
        re.push(Be), te.push(ve.name);
        const be = ge.get(ve.name);
        be && q.set(He, be);
      }
    }
    const G = re.length - D, de = {
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map(),
      thicknesses: /* @__PURE__ */ new Map(),
      poissonsRatios: /* @__PURE__ */ new Map()
    }, $e = /* @__PURE__ */ new Map(), Te = R.values().next().value || {
      E: 29e3,
      nu: 0.3,
      G: 11153
    };
    for (let ve = 0; ve < re.length; ve++) {
      const Be = q.get(ve), He = Be ? M.get(Be) : null, be = Be ? J.get(Be) : null;
      if (He || re[ve].length === 2) {
        const Ee = He || {
          material: "",
          A: 0,
          Iz: 0,
          Iy: 0,
          J: 0,
          D: 0.3,
          B: 0.3,
          shape: "Rectangular"
        }, ze = R.get(Ee.material) || Te, Je = ze.E || Te.E, st = ze.nu || 0.3, Ue = ze.G || Je / (2 * (1 + st));
        de.elasticities.set(ve, Je), de.shearModuli.set(ve, Ue), de.areas.set(ve, Ee.A || Ee.D * Ee.B), de.momentsOfInertiaZ.set(ve, Ee.Iz || Ee.B * Ee.D ** 3 / 12), de.momentsOfInertiaY.set(ve, Ee.Iy || Ee.D * Ee.B ** 3 / 12), de.torsionalConstants.set(ve, Ee.J || 0), de.densities.set(ve, ze.density || 0), ((_a = Ee.shape) == null ? void 0 : _a.includes("Wide Flange")) || Ee.shape === "I" ? $e.set(ve, {
          type: "I",
          b: Ee.B,
          h: Ee.D,
          name: Be || "I-section"
        }) : $e.set(ve, {
          type: "rect",
          b: Ee.B,
          h: Ee.D
        });
      } else if (be) {
        const Ee = R.get(be.material) || Te, ze = Ee.E || Te.E, Je = Ee.nu || 0.2, st = Ee.G || ze / (2 * (1 + Je));
        de.elasticities.set(ve, ze), de.shearModuli.set(ve, st), de.thicknesses.set(ve, be.thickness), de.poissonsRatios.set(ve, Je), de.densities.set(ve, Ee.density || 0);
      }
    }
    const Ve = {
      supports: /* @__PURE__ */ new Map(),
      forces: /* @__PURE__ */ new Map()
    };
    for (const [ve, Be] of H) {
      const He = ye.get(ve);
      He !== void 0 && Ve.supports.set(He, Be);
    }
    for (const ve of T) {
      const Be = ye.get(ve.joint);
      if (Be !== void 0) {
        const He = Ve.forces.get(Be) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        He[0] += ve.fx, He[1] += ve.fy, He[2] += ve.fz, He[3] += ve.mx, He[4] += ve.my, He[5] += ve.mz, Ve.forces.set(Be, He);
      }
    }
    return {
      units: e,
      dof: g,
      materials: R,
      frameSections: M,
      shellSections: J,
      nodes: ie,
      nodeNames: Z,
      nodeNameToIdx: ye,
      elements: re,
      elementNames: te,
      elementSections: q,
      nodeInputs: Ve,
      elementInputs: de,
      sectionShapes: $e,
      info: {
        nNodes: ie.length,
        nFrames: D,
        nShells: G,
        title: `SAP2000 (${D} frames, ${G} shells)`
      }
    };
  }
  function Ll(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const { nodes: g, elements: R, nodeInputs: M, elementInputs: J } = e, B = e.units || {
      force: "KN",
      length: "m"
    }, U = e.title || "Awatif Model", Y = [], H = (q) => Y.push(q), j = () => Y.push(" ");
    H(`File ${U}.$2k was saved on m/d/yy at h:mm:ss`), j(), H('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), H("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), j();
    const ge = [], T = [];
    if (R.forEach((q, D) => {
      q.length === 2 ? ge.push(D) : T.push(D);
    }), ge.length > 0) {
      H('TABLE:  "CONNECTIVITY - FRAME"');
      for (const q of ge) {
        const D = R[q];
        H(`   Frame=${q + 1}   JointI=${D[0] + 1}   JointJ=${D[1] + 1}   IsCurved=No`);
      }
      j();
    }
    if (T.length > 0) {
      H('TABLE:  "CONNECTIVITY - AREA"');
      for (const q of T) {
        const D = R[q], G = D.map((de, $e) => `Joint${$e + 1}=${de + 1}`).join("   ");
        H(`   Area=${q + 1}   NumJoints=${D.length}   ${G}`);
      }
      j();
    }
    H('TABLE:  "COORDINATE SYSTEMS"'), H("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), j(), H('TABLE:  "DATABASE FORMAT TYPES"'), H("   UnitsCurr=Yes   OverrideE=No"), j();
    const Z = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map();
    for (const q of ge) {
      const D = ((_a = J.areas) == null ? void 0 : _a.get(q)) || 0, G = ((_b = J.momentsOfInertiaZ) == null ? void 0 : _b.get(q)) || 0, de = ((_c = J.momentsOfInertiaY) == null ? void 0 : _c.get(q)) || 0, $e = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(q)) || 0, Te = ((_e = J.elasticities) == null ? void 0 : _e.get(q)) || 0, Ve = `MAT_${Math.round(Te)}`, ve = `A${D.toPrecision(6)}_Iz${G.toPrecision(6)}`;
      if (!Z.has(ve)) {
        let He = 0.3, be = 0.3;
        D > 0 && G > 0 && (He = Math.sqrt(12 * G / D), be = D / He), Z.set(ve, {
          A: D,
          Iz: G,
          Iy: de,
          J: $e,
          b: be,
          h: He,
          matKey: Ve
        });
      }
      const Be = [
        ...Z.keys()
      ].indexOf(ve) + 1;
      ye.set(q, `SEC${Be}`);
    }
    if (ge.length > 0) {
      H('TABLE:  "FRAME SECTION ASSIGNMENTS"');
      for (const q of ge) {
        const D = ye.get(q) || "SEC1";
        H(`   Frame=${q + 1}   AutoSelect=N.A.   AnalSect=${D}   MatProp=Default`);
      }
      j();
    }
    if (Z.size > 0) {
      H('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
      let q = 0;
      for (const [, D] of Z) {
        q++;
        const G = D.A * 5 / 6;
        H(`   SectionName=SEC${q}   Material=${D.matKey}   Shape=Rectangular   t3=${It(D.h)}   t2=${It(D.b)}   Area=${It(D.A)}   TorsConst=${It(D.J)}   I33=${It(D.Iz)}   I22=${It(D.Iy)}   I23=0   AS2=${It(G)}   AS3=${It(G)} _`), H("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
      }
      j();
    }
    const ie = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map();
    for (const q of T) {
      const D = ((_f = J.thicknesses) == null ? void 0 : _f.get(q)) || 0.1, G = ((_g = J.elasticities) == null ? void 0 : _g.get(q)) || 0, de = `MAT_${Math.round(G)}`, $e = `t${D.toPrecision(6)}`;
      ie.has($e) || ie.set($e, {
        t: D,
        matKey: de
      });
      const Te = [
        ...ie.keys()
      ].indexOf($e) + 1;
      re.set(q, `SSEC${Te}`);
    }
    if (T.length > 0) {
      H('TABLE:  "AREA SECTION ASSIGNMENTS"');
      for (const D of T) {
        const G = re.get(D) || "SSEC1";
        H(`   Area=${D + 1}   Section=${G}   MatProp=Default`);
      }
      j(), H('TABLE:  "AREA SECTION PROPERTIES"');
      let q = 0;
      for (const [, D] of ie) q++, H(`   Section=SSEC${q}   Material=${D.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${It(D.t)}   BendThick=${It(D.t)}   Color=Cyan`);
      j();
    }
    H('TABLE:  "JOINT COORDINATES"');
    for (let q = 0; q < g.length; q++) {
      const D = g[q];
      H(`   Joint=${q + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${It(D[0])}   Y=${It(D[1])}   Z=${It(D[2])}   SpecialJt=No`);
    }
    if (j(), M.supports && M.supports.size > 0) {
      H('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
      for (const [q, D] of M.supports) {
        if (!D.some((de) => de)) continue;
        const G = (de) => de ? "Yes" : "No";
        H(`   Joint=${q + 1}   U1=${G(D[0])}   U2=${G(D[1])}   U3=${G(D[2])}   R1=${G(D[3])}   R2=${G(D[4])}   R3=${G(D[5])}`);
      }
      j();
    }
    if (H('TABLE:  "LOAD PATTERN DEFINITIONS"'), H("   LoadPat=DEAD   DesignType=Dead   SelfWtMult=0"), j(), H('TABLE:  "LOAD CASE DEFINITIONS"'), H('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), j(), H('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), H('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), j(), M.forces && M.forces.size > 0) {
      H('TABLE:  "JOINT LOADS - FORCE"');
      for (const [q, D] of M.forces) D.some((G) => Math.abs(G) > 1e-12) && H(`   Joint=${q + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${It(D[0])}   F2=${It(D[1])}   F3=${It(D[2])}   M1=${It(D[3])}   M2=${It(D[4])}   M3=${It(D[5])}`);
      j();
    }
    const te = /* @__PURE__ */ new Map();
    for (let q = 0; q < R.length; q++) {
      const D = ((_h = J.elasticities) == null ? void 0 : _h.get(q)) || 0, G = ((_i = J.shearModuli) == null ? void 0 : _i.get(q)) || 0, de = D > 0 && G > 0 ? Math.max(0, Math.min(0.5, D / (2 * G) - 1)) : 0.2, $e = ((_j = J.densities) == null ? void 0 : _j.get(q)) || 0, Te = `MAT_${Math.round(D)}`;
      te.has(Te) || te.set(Te, {
        E: D,
        nu: de,
        G,
        rho: $e
      });
    }
    H('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
    for (const [q] of te) H(`   Material=${q}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
    j(), H('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
    for (const [q, D] of te) H(`   Material=${q}   UnitWeight=${It(D.rho * 9.81)}   UnitMass=${It(D.rho)}   E1=${It(D.E)}   G12=${It(D.G)}   U12=${It(D.nu)}   A1=9.9E-06`);
    j(), H('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
    for (const [q] of te) H(`   Material=${q}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
    return j(), H('TABLE:  "PROGRAM CONTROL"'), H(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${B.force}, ${B.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), j(), H("END TABLE DATA"), H(""), Y.join(`\r
`);
  }
  function It(e) {
    return e === 0 || Math.abs(e) < 1e-15 ? "0" : Math.abs(e) >= 1e6 || Math.abs(e) < 1e-3 && Math.abs(e) > 0 ? e.toExponential(8) : parseFloat(e.toPrecision(10)).toString();
  }
  function Cl(e) {
    const { e2kModel: g } = e, R = g == null ? void 0 : g.rawSections;
    return R && R.size > 0 ? Fl(R) : Rl(e);
  }
  function Fl(e, g) {
    const R = [], M = [
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
    R.push("$ File exported from Awatif FEM Studio (round-trip)"), R.push("");
    for (const J of M) {
      const B = e.get(J);
      if (!(!B || B.length === 0)) {
        R.push(`$ ${J}`);
        for (const U of B) R.push(U);
        R.push("");
      }
    }
    for (const [J, B] of e) if (!M.includes(J) && B.length !== 0) {
      R.push(`$ ${J}`);
      for (const U of B) R.push(U);
      R.push("");
    }
    return R.push("  END"), R.push("$ END OF MODEL FILE"), R.join(`\r
`);
  }
  function Rl(e) {
    var _a, _b, _c, _d;
    const { nodes: g, elements: R, nodeInputs: M, elementInputs: J, title: B, units: U } = e, Y = (U == null ? void 0 : U.force) || "TONF", H = (U == null ? void 0 : U.length) || "M", j = [], ge = (be) => Math.round(be * 1e4) / 1e4;
    j.push("$ File exported from Awatif FEM Studio"), j.push(""), j.push("$ PROGRAM INFORMATION"), j.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), j.push(""), j.push("$ CONTROLS"), j.push(`  UNITS  "${Y}"  "${H}"  "C"  `), B && j.push(`  TITLE2  "${B}"  `), j.push("");
    const T = /* @__PURE__ */ new Set();
    g.forEach((be) => T.add(ge(be[1])));
    const Z = [
      ...T
    ].sort((be, Ee) => be - Ee), ye = [], ie = /* @__PURE__ */ new Map();
    ye.push("Base"), ie.set(Z[0], "Base");
    for (let be = 1; be < Z.length; be++) {
      const Ee = `Level_${be}`;
      ye.push(Ee), ie.set(Z[be], Ee);
    }
    j.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let be = Z.length - 1; be >= 1; be--) j.push(`  STORY "${ye[be]}"  HEIGHT ${ge(Z[be] - Z[be - 1])} MASTERSTORY "Yes"  `);
    Z.length > 0 && j.push(`  STORY "Base"  ELEV ${Z[0]} `), j.push(""), R.some((be) => be.length === 4) && (j.push("$ DIAPHRAGM NAMES"), j.push('  DIAPHRAGM "D1"    TYPE RIGID'), j.push("")), j.push("$ MATERIAL PROPERTIES");
    const te = /* @__PURE__ */ new Set();
    (_a = J.elasticities) == null ? void 0 : _a.forEach((be) => te.add(be));
    const q = /* @__PURE__ */ new Map();
    let D = 0;
    for (const be of te) {
      const Ee = `Mat_${++D}`;
      q.set(be, Ee), j.push(`  MATERIAL  "${Ee}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), j.push(`  MATERIAL  "${Ee}"    SYMTYPE "Isotropic"  E ${be}  U 0.2  A 1E-05`);
    }
    j.push(""), j.push("$ FRAME SECTIONS");
    const G = /* @__PURE__ */ new Set(), de = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map();
    R.forEach((be, Ee) => {
      var _a2, _b2;
      if (be.length !== 2) return;
      const ze = (_a2 = J.sectionShapes) == null ? void 0 : _a2.get(Ee), Je = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(Ee)) ?? 0, st = q.get(Je) || "Mat_1", Ue = (ze == null ? void 0 : ze.h) ?? 0, at = (ze == null ? void 0 : ze.b) ?? 0, dt = (ze == null ? void 0 : ze.d) ?? 0, yt = (ze == null ? void 0 : ze.tf) ?? 0, zt = (ze == null ? void 0 : ze.tw) ?? 0, Ft = (ze == null ? void 0 : ze.type) || "rect", gt = `${Ft}_${Ue}_${at}_${dt}_${yt}_${zt}`;
      (ze == null ? void 0 : ze.name) && !$e.has(gt) && $e.set(gt, ze.name);
      let ut = $e.get(gt);
      if (ut || (Ft === "rect" ? ut = `R${ge(at * 100)}x${ge(Ue * 100)}` : Ft === "circ" ? ut = `C_D${ge(dt * 100)}` : Ft === "I" ? ut = `I_${ge(Ue * 100)}` : ut = `Sec_${G.size + 1}`, $e.set(gt, ut)), de.set(Ee, ut), G.has(ut)) return;
      G.add(ut);
      const Ne = {
        rect: "Concrete Rectangular",
        circ: "Concrete Circle",
        I: "Steel I/Wide Flange",
        HSS: "Steel Tube",
        pipe: "Steel Pipe",
        L: "Steel Angle",
        C: "Steel Channel",
        "2C": "Steel Double Channel"
      }[Ft] || "Concrete Rectangular";
      let xt = `  FRAMESECTION  "${ut}"  MATERIAL "${st}"  SHAPE "${Ne}"`;
      Ue && (xt += `  D ${Ue}`), at && (xt += `  B ${at}`), dt && !Ue && (xt += `  D ${dt}`), yt && (xt += `  TF ${yt}`), zt && (xt += `  TW ${zt}`), j.push(xt);
    }), j.push("");
    const Te = /* @__PURE__ */ new Map();
    let Ve = 0;
    g.forEach((be) => {
      const Ee = `${ge(be[0])},${ge(be[2])}`;
      Te.has(Ee) || Te.set(Ee, `${++Ve}`);
    }), j.push("$ POINT COORDINATES");
    for (const [be, Ee] of Te) {
      const [ze, Je] = be.split(",").map(Number);
      j.push(`  POINT "${Ee}"  ${ze} ${Je} `);
    }
    j.push("");
    const ve = (be) => {
      const Ee = g[be], ze = `${ge(Ee[0])},${ge(Ee[2])}`;
      return {
        pt: Te.get(ze) || "1",
        story: ie.get(ge(Ee[1])) || "Base"
      };
    };
    j.push("$ LINE CONNECTIVITIES");
    const Be = [];
    R.forEach((be, Ee) => {
      if (be.length !== 2) return;
      const ze = Pl(g, be), Je = de.get(Ee) || `Sec_${Ee}`;
      if (ze === "BEAM") {
        const st = ve(be[0]), Ue = ve(be[1]);
        j.push(`  LINE  "E${Ee + 1}"  BEAM  "${st.pt}"  "${Ue.pt}"  0`), Be.push(`  LINEASSIGN  "E${Ee + 1}"  "${st.story}"  SECTION "${Je}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const st = g[be[0]][1] <= g[be[1]][1] ? be[0] : be[1], Ue = g[be[0]][1] <= g[be[1]][1] ? be[1] : be[0];
        ve(st);
        const at = ve(Ue), dt = ge(g[st][1]), yt = ge(g[Ue][1]), zt = Z.indexOf(dt), Ft = Z.indexOf(yt), gt = Math.max(1, Ft >= 0 && zt >= 0 ? Ft - zt : 1);
        j.push(`  LINE  "E${Ee + 1}"  ${ze}  "${at.pt}"  "${at.pt}"  ${gt}`);
        for (let ut = 0; ut < gt; ut++) {
          const rn = Ft - ut;
          rn >= 0 && rn < ye.length && Be.push(`  LINEASSIGN  "E${Ee + 1}"  "${ye[rn]}"  SECTION "${Je}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), j.push(""), j.push("$ POINT ASSIGNS"), (_b = M.supports) == null ? void 0 : _b.forEach((be, Ee) => {
      const ze = [];
      if (be[0] && ze.push("UX"), be[1] && ze.push("UY"), be[2] && ze.push("UZ"), be[3] && ze.push("RX"), be[4] && ze.push("RY"), be[5] && ze.push("RZ"), ze.length > 0) {
        const Je = ve(Ee);
        j.push(`  POINTASSIGN  "${Je.pt}"  "${Je.story}"  RESTRAINT "${ze.join(" ")}"  `);
      }
    }), j.push(""), j.push("$ LINE ASSIGNS"), Be.forEach((be) => j.push(be)), j.push("");
    const He = [];
    if (R.forEach((be, Ee) => {
      if (be.length === 4) {
        const ze = g[be[0]], Je = g[be[1]], st = g[be[2]], Ue = [
          Je[0] - ze[0],
          Je[1] - ze[1],
          Je[2] - ze[2]
        ], at = [
          st[0] - ze[0],
          st[1] - ze[1],
          st[2] - ze[2]
        ], dt = Math.abs(Ue[2] * at[0] - Ue[0] * at[2]), yt = Math.sqrt((Ue[1] * at[2] - Ue[2] * at[1]) ** 2 + dt ** 2 + (Ue[0] * at[1] - Ue[1] * at[0]) ** 2), zt = yt > 1e-10 && dt / yt < 0.5;
        He.push({
          idx: Ee,
          el: be,
          isWall: zt
        });
      }
    }), He.some((be) => !be.isWall)) {
      j.push("$ SLAB PROPERTIES");
      const be = ((_c = J.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
      j.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${q.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${be} `), j.push("");
    }
    if (He.some((be) => be.isWall)) {
      j.push("$ WALL PROPERTIES");
      const be = ((_d = J.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
      j.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${q.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${be} `), j.push("");
    }
    if (He.length > 0) {
      j.push("$ AREA CONNECTIVITIES");
      const be = [];
      He.forEach((Ee, ze) => {
        const { el: Je, isWall: st } = Ee, Ue = st ? `W${ze + 1}` : `F${ze + 1}`, at = st ? "PANEL" : "FLOOR", dt = Je.map((yt) => ve(yt));
        if (st) {
          const yt = g[Je[0]][1] <= g[Je[2]][1] ? 0 : 2, zt = g[Je[1]][1] <= g[Je[3]][1] ? 1 : 3;
          j.push(`  AREA "${Ue}"  ${at}  4  "${dt[yt].pt}"  "${dt[zt].pt}"  "${dt[zt].pt}"  "${dt[yt].pt}"  1  1  0  0  `);
          const Ft = dt[yt === 0 ? 2 : 0].story;
          be.push(`  AREAASSIGN  "${Ue}"  "${Ft}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
        } else j.push(`  AREA "${Ue}"  ${at}  4  "${dt[0].pt}"  "${dt[1].pt}"  "${dt[2].pt}"  "${dt[3].pt}"  0  0  0  0  `), be.push(`  AREAASSIGN  "${Ue}"  "${dt[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }), j.push(""), j.push("$ AREA ASSIGNS"), be.forEach((Ee) => j.push(Ee)), j.push("");
    }
    return j.push("$ LOAD PATTERNS"), j.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), j.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), j.push(""), M.loads && M.loads.size > 0 && (j.push("$ POINT OBJECT LOADS"), M.loads.forEach((be, Ee) => {
      const [ze, Je, st] = be, Ue = ve(Ee);
      Math.abs(ze) > 1e-10 && j.push(`  POINTLOAD  "${Ue.pt}"  "${Ue.story}"  "Dead"  TYPE "FORCE"  FX ${ze}`), Math.abs(Je) > 1e-10 && j.push(`  POINTLOAD  "${Ue.pt}"  "${Ue.story}"  "Dead"  TYPE "FORCE"  FY ${Je}`), Math.abs(st) > 1e-10 && j.push(`  POINTLOAD  "${Ue.pt}"  "${Ue.story}"  "Dead"  TYPE "FORCE"  FZ ${st}`);
    }), j.push("")), j.push("  END"), j.push("$ END OF MODEL FILE"), j.join(`\r
`);
  }
  function Pl(e, g) {
    const R = e[g[0]], M = e[g[1]], J = Math.abs(M[1] - R[1]), B = Math.sqrt((M[0] - R[0]) ** 2 + (M[2] - R[2]) ** 2), U = J > B * 0.5;
    return U && B > 0.01 ? "BRACE" : U ? "COLUMN" : "BEAM";
  }
  function Ol(e) {
    var _a, _b;
    const { nodes: g, elements: R, nodeInputs: M, elementInputs: J } = e, B = [];
    return B.push("# OpenSeesPy model exported from Awatif FEM Studio"), B.push(`# ${g.length} nodes, ${R.length} elements`), B.push(""), B.push("import openseespy.opensees as ops"), B.push(""), B.push("ops.wipe()"), B.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), B.push(""), B.push("# --- Nodes ---"), g.forEach((U, Y) => {
      B.push(`ops.node(${Y + 1}, ${U[0]}, ${U[1]}, ${U[2]})`);
    }), B.push(""), B.push("# --- Boundary Conditions ---"), (_a = M.supports) == null ? void 0 : _a.forEach((U, Y) => {
      const H = U.map((j) => j ? 1 : 0).join(", ");
      B.push(`ops.fix(${Y + 1}, ${H})`);
    }), B.push(""), B.push("# --- Geometric Transformations ---"), B.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), B.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), B.push(""), B.push("# --- Elements (elasticBeamColumn) ---"), R.forEach((U, Y) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (U.length !== 2) return;
      const H = g[U[0]], j = g[U[1]], T = Math.abs(j[2] - H[2]) > Math.max(Math.abs(j[0] - H[0]), Math.abs(j[1] - H[1])) ? 2 : 1, Z = ((_a2 = J.areas) == null ? void 0 : _a2.get(Y)) ?? 1, ye = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(Y)) ?? 2e5, ie = ((_c = J.shearModuli) == null ? void 0 : _c.get(Y)) ?? 8e4, re = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(Y)) ?? 1, te = ((_e = J.momentsOfInertiaY) == null ? void 0 : _e.get(Y)) ?? 1, q = ((_f = J.momentsOfInertiaZ) == null ? void 0 : _f.get(Y)) ?? 1;
      B.push(`ops.element('elasticBeamColumn', ${Y + 1}, ${U[0] + 1}, ${U[1] + 1}, ${Z}, ${ye}, ${ie}, ${re}, ${te}, ${q}, ${T})`);
    }), B.push(""), M.loads && M.loads.size > 0 && (B.push("# --- Loads ---"), B.push("ops.timeSeries('Linear', 1)"), B.push("ops.pattern('Plain', 1, 1)"), M.loads.forEach((U, Y) => {
      const H = U.map((j) => j).join(", ");
      B.push(`ops.load(${Y + 1}, ${H})`);
    }), B.push("")), B.push("# --- Analysis ---"), B.push("ops.system('BandGeneral')"), B.push("ops.numberer('RCM')"), B.push("ops.constraints('Plain')"), B.push("ops.integrator('LoadControl', 1.0)"), B.push("ops.algorithm('Linear')"), B.push("ops.analysis('Static')"), B.push("ops.analyze(1)"), B.push(""), B.push("# --- Results ---"), B.push('print("\\n=== Displacements ===")'), g.forEach((U, Y) => {
      B.push(`print(f"Node {${Y + 1}}: {ops.nodeDisp(${Y + 1})}")`);
    }), B.push(""), B.push('print("\\n=== Reactions ===")'), B.push("ops.reactions()"), (_b = M.supports) == null ? void 0 : _b.forEach((U, Y) => {
      B.push(`print(f"Node {${Y + 1}}: {ops.nodeReaction(${Y + 1})}")`);
    }), B.join(`
`);
  }
  function Nl(e) {
    var _a, _b;
    const { nodes: g, elements: R, nodeInputs: M, elementInputs: J } = e, B = [];
    return B.push("# OpenSees Tcl model exported from Awatif FEM Studio"), B.push(`# ${g.length} nodes, ${R.length} elements`), B.push(""), B.push("wipe"), B.push("model basic -ndm 3 -ndf 6"), B.push(""), B.push("# --- Nodes ---"), g.forEach((U, Y) => {
      B.push(`node ${Y + 1} ${U[0]} ${U[1]} ${U[2]}`);
    }), B.push(""), B.push("# --- Boundary Conditions ---"), (_a = M.supports) == null ? void 0 : _a.forEach((U, Y) => {
      const H = U.map((j) => j ? 1 : 0).join(" ");
      B.push(`fix ${Y + 1} ${H}`);
    }), B.push(""), B.push("# --- Geometric Transformations ---"), B.push("geomTransf Linear 1 0.0 0.0 1.0"), B.push("geomTransf Linear 2 -1.0 0.0 0.0"), B.push(""), B.push("# --- Elements ---"), R.forEach((U, Y) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (U.length !== 2) return;
      const H = g[U[0]], j = g[U[1]], T = Math.abs(j[2] - H[2]) > Math.max(Math.abs(j[0] - H[0]), Math.abs(j[1] - H[1])) ? 2 : 1, Z = ((_a2 = J.areas) == null ? void 0 : _a2.get(Y)) ?? 1, ye = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(Y)) ?? 2e5, ie = ((_c = J.shearModuli) == null ? void 0 : _c.get(Y)) ?? 8e4, re = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(Y)) ?? 1, te = ((_e = J.momentsOfInertiaY) == null ? void 0 : _e.get(Y)) ?? 1, q = ((_f = J.momentsOfInertiaZ) == null ? void 0 : _f.get(Y)) ?? 1;
      B.push(`element elasticBeamColumn ${Y + 1} ${U[0] + 1} ${U[1] + 1} ${Z} ${ye} ${ie} ${re} ${te} ${q} ${T}`);
    }), B.push(""), M.loads && M.loads.size > 0 && (B.push("# --- Loads ---"), B.push("timeSeries Linear 1"), B.push("pattern Plain 1 1 {"), M.loads.forEach((U, Y) => {
      const H = U.map((j) => j).join(" ");
      B.push(`  load ${Y + 1} ${H}`);
    }), B.push("}"), B.push("")), B.push("# --- Analysis ---"), B.push("system BandGeneral"), B.push("numberer RCM"), B.push("constraints Plain"), B.push("integrator LoadControl 1.0"), B.push("algorithm Linear"), B.push("analysis Static"), B.push("analyze 1"), B.push(""), B.push("# --- Results ---"), B.push('puts "\\n=== Displacements ==="'), g.forEach((U, Y) => {
      B.push(`puts "Node ${Y + 1}: [nodeDisp ${Y + 1}]"`);
    }), B.push('puts "\\n=== Reactions ==="'), B.push("reactions"), (_b = M.supports) == null ? void 0 : _b.forEach((U, Y) => {
      B.push(`puts "Node ${Y + 1}: [nodeReaction ${Y + 1}]"`);
    }), B.join(`
`);
  }
  function ql(e) {
    const g = [], R = [], M = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map();
    for (const ye of e.split(/\r?\n/)) {
      const ie = ye.trim(), re = ie.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (re) {
        const G = parseInt(re[1]), de = g.length;
        g.push([
          parseFloat(re[2]),
          parseFloat(re[3]),
          parseFloat(re[4])
        ]), T.set(G, de);
        continue;
      }
      const te = ie.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (te) {
        const G = parseInt(te[1]), de = T.get(G);
        de !== void 0 && M.set(de, [
          te[2] === "1",
          te[3] === "1",
          te[4] === "1",
          te[5] === "1",
          te[6] === "1",
          te[7] === "1"
        ]);
        continue;
      }
      const q = ie.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (q) {
        const G = parseInt(q[1]), de = T.get(parseInt(q[2])), $e = T.get(parseInt(q[3]));
        if (de !== void 0 && $e !== void 0) {
          const Te = R.length;
          R.push([
            de,
            $e
          ]), Z.set(G, Te), Y.set(Te, parseFloat(q[4])), B.set(Te, parseFloat(q[5])), U.set(Te, parseFloat(q[6])), ge.set(Te, parseFloat(q[7])), H.set(Te, parseFloat(q[8])), j.set(Te, parseFloat(q[9]));
        }
        continue;
      }
      const D = ie.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (D) {
        const G = T.get(parseInt(D[1]));
        G !== void 0 && J.set(G, [
          parseFloat(D[2]),
          parseFloat(D[3]),
          parseFloat(D[4]),
          parseFloat(D[5]),
          parseFloat(D[6]),
          parseFloat(D[7])
        ]);
      }
    }
    return {
      nodes: g,
      elements: R,
      nodeInputs: {
        supports: M,
        loads: J
      },
      elementInputs: {
        elasticities: B,
        shearModuli: U,
        areas: Y,
        momentsOfInertiaY: H,
        momentsOfInertiaZ: j,
        torsionalConstants: ge
      }
    };
  }
  function _l(e) {
    const g = [], R = [], M = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map();
    for (const Z of e.split(/\r?\n/)) {
      const ye = Z.trim();
      if (ye.startsWith("#") || ye.startsWith("//")) continue;
      const ie = ye.split(/\s+/);
      if (ie[0] === "node" && ie.length >= 5) {
        const re = parseInt(ie[1]), te = g.length;
        g.push([
          parseFloat(ie[2]),
          parseFloat(ie[3]),
          parseFloat(ie[4])
        ]), T.set(re, te);
        continue;
      }
      if (ie[0] === "fix" && ie.length >= 8) {
        const re = T.get(parseInt(ie[1]));
        re !== void 0 && M.set(re, [
          ie[2] === "1",
          ie[3] === "1",
          ie[4] === "1",
          ie[5] === "1",
          ie[6] === "1",
          ie[7] === "1"
        ]);
        continue;
      }
      if (ie[0] === "element" && ie[1] === "elasticBeamColumn" && ie.length >= 12) {
        const re = T.get(parseInt(ie[3])), te = T.get(parseInt(ie[4]));
        if (re !== void 0 && te !== void 0) {
          const q = R.length;
          R.push([
            re,
            te
          ]), Y.set(q, parseFloat(ie[5])), B.set(q, parseFloat(ie[6])), U.set(q, parseFloat(ie[7])), ge.set(q, parseFloat(ie[8])), H.set(q, parseFloat(ie[9])), j.set(q, parseFloat(ie[10]));
        }
        continue;
      }
      if (ie[0] === "load" && ie.length >= 8) {
        const re = T.get(parseInt(ie[1]));
        re !== void 0 && J.set(re, [
          parseFloat(ie[2]),
          parseFloat(ie[3]),
          parseFloat(ie[4]),
          parseFloat(ie[5]),
          parseFloat(ie[6]),
          parseFloat(ie[7])
        ]);
      }
    }
    return {
      nodes: g,
      elements: R,
      nodeInputs: {
        supports: M,
        loads: J
      },
      elementInputs: {
        elasticities: B,
        shearModuli: U,
        areas: Y,
        momentsOfInertiaY: H,
        momentsOfInertiaZ: j,
        torsionalConstants: ge
      }
    };
  }
  function Ut(e) {
    const g = [];
    let R = 0, M = false, J = "";
    for (let B = 0; B < e.length; B++) {
      const U = e[B];
      if (U === "'" && (B === 0 || e[B - 1] !== "\\")) {
        M = !M, J += U;
        continue;
      }
      if (M) {
        J += U;
        continue;
      }
      if (U === "(") {
        R++, J += U;
        continue;
      }
      if (U === ")") {
        R--, J += U;
        continue;
      }
      if (U === "," && R === 0) {
        g.push(J.trim()), J = "";
        continue;
      }
      J += U;
    }
    return J.trim() && g.push(J.trim()), g;
  }
  function fa(e, g) {
    const R = Ut(e);
    if (g < R.length) {
      let M = R[g].trim();
      return M.startsWith("'") && M.endsWith("'") && (M = M.slice(1, -1)), M === "$" ? null : M;
    }
    return null;
  }
  function Dl(e) {
    const g = {
      schema: "",
      project: "",
      app: ""
    }, R = {}, M = {}, J = e.match(/FILE_SCHEMA\s*\(\s*\(\s*'([^']*)'/i);
    J && (g.schema = J[1]);
    const B = /^#(\d+)\s*=\s*([A-Z][A-Z0-9_]*)\s*\(([\s\S]*?)\)\s*;\s*$/gm;
    let U;
    for (; (U = B.exec(e)) !== null; ) {
      const Y = parseInt(U[1]), H = U[2].toUpperCase();
      R[Y] = {
        id: Y,
        type: H,
        args: U[3]
      }, M[H] || (M[H] = []), M[H].push(Y);
    }
    if (M.IFCPROJECT) {
      const Y = R[M.IFCPROJECT[0]];
      if (Y) {
        const H = fa(Y.args, 2);
        H && (g.project = H);
      }
    }
    return {
      meta: g,
      entities: R,
      typeIndex: M
    };
  }
  function Wt(e, g) {
    const R = g.match(/#(\d+)/);
    return R && e[parseInt(R[1])] || null;
  }
  function ua(e, g) {
    const R = Ut(g.args), M = Wt(e, R[0]), J = M ? Bl(e, M) : [
      0,
      0,
      0
    ];
    let B = [
      0,
      0,
      1
    ], U = [
      1,
      0,
      0
    ];
    if (R[1] && R[1] !== "$") {
      const Y = Wt(e, R[1]);
      Y && (B = ra(e, Y));
    }
    if (R[2] && R[2] !== "$") {
      const Y = Wt(e, R[2]);
      Y && (U = ra(e, Y));
    }
    return {
      origin: J,
      dirZ: B,
      dirX: U
    };
  }
  function Bl(e, g) {
    return g.args.replace(/[()]/g, "").split(",").map((M) => parseFloat(M.trim())).filter((M) => !isNaN(M));
  }
  function ra(e, g) {
    return g.args.replace(/[()]/g, "").split(",").map((M) => parseFloat(M.trim())).filter((M) => !isNaN(M));
  }
  function ma(e, g) {
    const R = Ut(g.args), M = Wt(e, R[1]);
    let J = {
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
    if (M && (J = ua(e, M)), R[0] && R[0] !== "$") {
      const B = Wt(e, R[0]);
      if (B && B.type === "IFCLOCALPLACEMENT") {
        const U = ma(e, B), Y = ts(J.origin, U.dirX, es(U.dirZ, U.dirX), U.dirZ);
        J.origin = [
          U.origin[0] + Y[0],
          U.origin[1] + Y[1],
          U.origin[2] + Y[2]
        ], J.dirZ = ts(J.dirZ, U.dirX, es(U.dirZ, U.dirX), U.dirZ), J.dirX = ts(J.dirX, U.dirX, es(U.dirZ, U.dirX), U.dirZ);
      }
    }
    return J;
  }
  function es(e, g) {
    return [
      e[1] * g[2] - e[2] * g[1],
      e[2] * g[0] - e[0] * g[2],
      e[0] * g[1] - e[1] * g[0]
    ];
  }
  function ts(e, g, R, M) {
    return [
      e[0] * g[0] + e[1] * R[0] + e[2] * M[0],
      e[0] * g[1] + e[1] * R[1] + e[2] * M[1],
      e[0] * g[2] + e[1] * R[2] + e[2] * M[2]
    ];
  }
  const Hl = 0.01;
  function jl(e) {
    const g = Dl(e), { entities: R, typeIndex: M } = g, J = [], B = [], U = /* @__PURE__ */ new Map();
    U.set("Hormigon", {
      E: 2132888792e-2,
      nu: 0.2,
      rho: 2.4
    }), U.set("Acero", {
      E: 2e8,
      nu: 0.3,
      rho: 7.85
    });
    let Y = 0, H = 0;
    function j(te, q, D) {
      for (const G of J) {
        const de = G.x - te, $e = G.y - q, Te = G.z - D;
        if (Math.sqrt(de * de + $e * $e + Te * Te) < Hl) return G.id;
      }
      return J.push({
        id: Y,
        x: te,
        y: q,
        z: D
      }), Y++;
    }
    function ge(te) {
      const q = fa(te.args, 2) || "", D = M.IFCRELASSOCIATESMATERIAL || [];
      for (const de of D) {
        const $e = R[de];
        if (!$e) continue;
        const Te = Ut($e.args);
        if ((Te[4] || Te[3] || "").includes(`#${te.id}`)) {
          const ve = Te[5] || Te[4] || "", Be = Wt(R, ve);
          if (Be) return T(Be);
        }
      }
      const G = q.match(/(\d+)\s*[xX×]\s*(\d+)/);
      return G ? {
        b: parseFloat(G[1]) / 100,
        h: parseFloat(G[2]) / 100,
        name: q
      } : {
        b: 0.3,
        h: 0.3,
        name: q || "Default"
      };
    }
    function T(te) {
      const q = te.type;
      if (q === "IFCRECTANGLEPROFILEDEF") {
        const D = Ut(te.args), G = (D[1] || "").replace(/'/g, ""), de = parseFloat(D[3]) || 0.3, $e = parseFloat(D[4]) || 0.3;
        return {
          b: de,
          h: $e,
          name: G
        };
      }
      if (q === "IFCMATERIALPROFILE") {
        const D = Ut(te.args), G = D[2] || D[1] || "", de = Wt(R, G);
        if (de) return T(de);
      }
      if (q === "IFCMATERIALPROFILESET") {
        const D = Ut(te.args), de = (D[2] || D[1] || "").match(/#(\d+)/);
        if (de) {
          const $e = R[parseInt(de[1])];
          if ($e) return T($e);
        }
      }
      if (q === "IFCMATERIALPROFILESETUSAGE") {
        const G = Ut(te.args)[0], de = Wt(R, G);
        if (de) return T(de);
      }
      return {
        b: 0.3,
        h: 0.3,
        name: "Unknown"
      };
    }
    function Z(te, q, D, G) {
      const de = M[te] || [];
      for (const $e of de) {
        const Te = R[$e];
        if (!Te) continue;
        const Ve = Ut(Te.args), ve = Ve[5] || Ve[4] || "", Be = Wt(R, ve);
        if (!Be) continue;
        const He = ma(R, Be), be = ge(Te);
        let Ee = G, ze = null, Je = null;
        const st = Ve[6] || Ve[5] || "", Ue = Wt(R, st);
        if (Ue) {
          const ut = $o(R, Ue);
          ut && (Ee = ut.depth || G, ze = ut.origin, Je = ut.direction);
        }
        const at = ze ? ze[0] : He.origin[0], dt = ze ? ze[1] : He.origin[1], yt = ze ? ze[2] : He.origin[2], zt = Je || (D === "Z" ? He.dirZ : He.dirX), Ft = j(at, dt, yt), gt = j(at + zt[0] * Ee, dt + zt[1] * Ee, yt + zt[2] * Ee);
        B.push({
          id: H++,
          type: "frame",
          nodeIds: [
            Ft,
            gt
          ],
          category: q,
          sectionName: be.name,
          b: be.b,
          h: be.h,
          material: "Hormigon",
          expressID: $e
        });
      }
    }
    Z("IFCCOLUMN", "column", "Z", 3), Z("IFCBEAM", "beam", "X", 5), Z("IFCMEMBER", "diagonal", "X", 4), Z("IFCPILE", "pile", "Z", 10), Z("IFCSTAIRFLIGHT", "stair", "X", 3), Z("IFCRAMPFLIGHT", "ramp", "X", 4);
    function ye(te, q, D) {
      const G = M[te] || [];
      for (const de of G) {
        const $e = R[de];
        if (!$e) continue;
        const Te = Ut($e.args), Ve = Te[5] || Te[4] || "";
        if (!Wt(R, Ve)) continue;
        let Be = D;
        const He = Te[6] || Te[5] || "", be = Wt(R, He);
        be && (Be = Wl(R, be) || D);
        const Ee = q === "slab" ? `Losa e=${(Be * 100).toFixed(0)}cm` : q === "wall" ? `Muro e=${(Be * 100).toFixed(0)}cm` : q === "footing" ? `Zapata e=${(Be * 100).toFixed(0)}cm` : `${q} e=${(Be * 100).toFixed(0)}cm`;
        B.push({
          id: H++,
          type: "shell",
          nodeIds: [],
          category: q,
          sectionName: Ee,
          b: Be,
          h: Be,
          material: "Hormigon",
          expressID: de
        });
      }
    }
    ye("IFCSLAB", "slab", 0.15), ye("IFCWALL", "wall", 0.2), ye("IFCWALLSTANDARDCASE", "wall", 0.2), ye("IFCFOOTING", "footing", 0.5), ye("IFCROOF", "slab", 0.12);
    const ie = [], re = M.IFCBUILDINGSTOREY || [];
    for (const te of re) {
      const q = R[te];
      if (!q) continue;
      const D = Ut(q.args), G = (D[2] || "").replace(/'/g, ""), de = parseFloat(D[9]) || 0;
      ie.push({
        name: G,
        elevation: de
      });
    }
    return ie.sort((te, q) => te.elevation - q.elevation), {
      nodes: J,
      elements: B,
      materials: U,
      levels: ie,
      projectName: g.meta.project,
      schema: g.meta.schema
    };
  }
  function $o(e, g) {
    const R = Ut(g.args);
    for (const M of R) {
      const J = M.match(/#(\d+)/g) || [];
      for (const B of J) {
        const U = parseInt(B.replace("#", "")), Y = e[U];
        if (Y) {
          if (Y.type === "IFCEXTRUDEDAREASOLID") {
            const H = Ut(Y.args), j = parseFloat(H[3]) || 0, ge = Wt(e, H[1]);
            let T = [
              0,
              0,
              0
            ];
            ge && (T = ua(e, ge).origin);
            const Z = Wt(e, H[2]);
            let ye = [
              0,
              0,
              1
            ];
            if (Z && Z.type === "IFCDIRECTION") {
              const ie = Z.args.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
              ie && ie.length >= 3 && (ye = ie.map(Number));
            }
            return {
              depth: j,
              origin: T,
              direction: ye
            };
          }
          if (Y.type === "IFCSHAPEREPRESENTATION") {
            const H = $o(e, Y);
            if (H) return H;
          }
          if (Y.type === "IFCMAPPEDITEM") {
            const H = Ut(Y.args), j = Wt(e, H[0]);
            if (j && j.type === "IFCREPRESENTATIONMAP") {
              const ge = Ut(j.args), T = Wt(e, ge[1]);
              if (T) {
                const Z = $o(e, T);
                if (Z) return Z;
              }
            }
          }
        }
      }
    }
    return null;
  }
  function Wl(e, g) {
    const R = $o(e, g);
    return R ? R.depth : null;
  }
  const ba = [
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
  ], ga = [
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
  ], ha = /* @__PURE__ */ new Map();
  for (const [e, g] of ba) ha.set(e, g);
  function Gl(e) {
    return ha.get(e) ?? "other";
  }
  new Set(ga);
  async function Yl(e, g) {
    var _a, _b;
    const R = window.WebIFC;
    if (!R) throw new Error("web-ifc no disponible. Verifica que web-ifc-api-iife.js se carg\xF3.");
    const M = new R.IfcAPI(), J = window.location.pathname.replace(/\/[^/]*$/, "/");
    M.SetWasmPath(J), await M.Init();
    const B = M.OpenModel(new Uint8Array(g)), U = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), H = {
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
    for (const [ye] of ba) {
      const ie = Gl(ye);
      try {
        const re = M.GetLineIDsWithType(B, ye);
        for (let te = 0; te < re.size(); te++) {
          const q = re.get(te);
          U.set(q, ie);
          let D = "";
          try {
            const G = M.GetLine(B, q);
            D = ((_a = G == null ? void 0 : G.Name) == null ? void 0 : _a.value) || ((_b = G == null ? void 0 : G.Description) == null ? void 0 : _b.value) || "";
          } catch {
          }
          Y.set(q, {
            expressID: q,
            category: ie,
            name: D,
            typeName: H[ye] || "Otro"
          });
        }
      } catch {
      }
    }
    const j = /* @__PURE__ */ new Map();
    for (const ye of ga) {
      const ie = new so();
      ie.name = `ifc-${ye}`, e.add(ie), j.set(ye, ie);
    }
    const ge = new Qa();
    let T = 0;
    const Z = new ta({
      color: 13421772,
      transparent: true,
      opacity: 0.9,
      side: na
    });
    return M.StreamAllMeshes(B, (ye) => {
      const ie = U.get(ye.expressID) ?? "other", re = j.get(ie), te = ye.geometries;
      for (let q = 0; q < te.size(); q++) {
        const D = te.get(q), G = M.GetGeometry(B, D.geometryExpressID), de = M.GetVertexArray(G.GetVertexData(), G.GetVertexDataSize()), $e = M.GetIndexArray(G.GetIndexData(), G.GetIndexDataSize()), Te = new tn(), Ve = new Float32Array(de.length / 2), ve = new Float32Array(de.length / 2);
        for (let ze = 0; ze < de.length; ze += 6) {
          const Je = ze / 2;
          Ve[Je] = de[ze], Ve[Je + 1] = de[ze + 1], Ve[Je + 2] = de[ze + 2], ve[Je] = de[ze + 3], ve[Je + 1] = de[ze + 4], ve[Je + 2] = de[ze + 5];
        }
        Te.setAttribute("position", new xo(Ve, 3)), Te.setAttribute("normal", new xo(ve, 3)), Te.setIndex(new xo(new Uint32Array($e), 1));
        const Be = new el();
        Be.fromArray(D.flatTransformation);
        let He;
        const be = D.color;
        be && (be.x !== 1 || be.y !== 1 || be.z !== 1) ? He = new ta({
          color: new tl(be.x, be.y, be.z),
          transparent: be.w < 1,
          opacity: be.w,
          side: na
        }) : He = Z, He._origOpacity = He.opacity;
        const Ee = new ca(Te, He);
        Ee.applyMatrix4(Be), Ee.userData.expressID = ye.expressID, Ee.userData.category = ie, re.add(Ee), ge.expandByObject(Ee), T++, G.delete();
      }
    }), M.CloseModel(B), {
      meshCount: T,
      bbox: ge,
      detailCategories: j,
      elementInfo: Y
    };
  }
  ia = Jn.state(false);
  er = function(e) {
    e.nodeInputs || (e.nodeInputs = Jn.state({})), e.elementInputs || (e.elementInputs = Jn.state({})), e.deformOutputs || (e.deformOutputs = Jn.state({})), e.analyzeOutputs || (e.analyzeOutputs = Jn.state({}));
    let g = "tonf", R = "m", M = Rn(g, R), J = {
      forceId: "kgf",
      lengthId: "cm",
      label: "kgf/cm\xB2"
    };
    const B = {
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
    }, U = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set();
    let H = false;
    const j = /* @__PURE__ */ new Set(), ge = /* @__PURE__ */ new Map();
    let T = "", Z = {}, ye = null, ie = "", re = [], te = [], q = [], D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), de = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), Ve = null, ve = [], Be = 0.2, He = 2, be = 2, Ee = false, ze = 2, Je = "x", st = /* @__PURE__ */ new Set(), Ue = true, at = 0.15, dt = 2, yt = 2, zt = /* @__PURE__ */ new Set(), Ft = false, gt = "perimeter";
    const ut = () => ({
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
    }), rn = (t, n) => ({
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
      }, ut),
      vigasY: Array.from({
        length: n
      }, ut)
    }), Ne = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let xt = 0, Ce = 3, qe = false, he = 0, Ae = null, xe = 0, ke = [], Ge = 1, _e = true;
    const it = fl();
    it.div.style.display = "none";
    function mt() {
      const t = uo()[T];
      return t && t[xt] ? t[xt].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let We = [], Xe = [], pt = 0, lt = [], bt = null;
    function Ht() {
      if (!bt) return;
      const t = Ze();
      t && t.scene.remove(bt), bt.traverse((n) => {
        if (n.geometry && n.geometry.dispose(), n.material) {
          const o = n.material;
          o.map && o.map.dispose(), o.dispose();
        }
      }), bt = null;
    }
    function as(t, n, o, l, s) {
      Ht();
      const c = Ze();
      if (!c) return;
      bt = new so(), bt.name = "refGrid";
      const a = Math.min(...t), r = Math.max(...t), f = Math.min(...n), i = Math.max(...n), d = Math.max(...o), b = r - a || 1, S = i - f || 1, $ = 3359829, y = 2241348;
      for (const h of o) {
        for (const I of n) {
          const A = new tn().setFromPoints([
            new Oe(a, h, I),
            new Oe(r, h, I)
          ]), z = new Wn({
            color: $,
            dashSize: b * 0.015,
            gapSize: b * 0.01,
            transparent: true,
            opacity: 0.25
          }), P = new Cn(A, z);
          P.computeLineDistances(), P.renderOrder = -10, bt.add(P);
        }
        for (const I of t) {
          const A = new tn().setFromPoints([
            new Oe(I, h, f),
            new Oe(I, h, i)
          ]), z = new Wn({
            color: $,
            dashSize: S * 0.015,
            gapSize: S * 0.01,
            transparent: true,
            opacity: 0.25
          }), P = new Cn(A, z);
          P.computeLineDistances(), P.renderOrder = -10, bt.add(P);
        }
      }
      for (const h of t) for (const I of n) {
        const A = new tn().setFromPoints([
          new Oe(h, 0, I),
          new Oe(h, d, I)
        ]), z = new Wn({
          color: y,
          dashSize: d * 0.01,
          gapSize: d * 8e-3,
          transparent: true,
          opacity: 0.15
        }), P = new Cn(A, z);
        P.computeLineDistances(), P.renderOrder = -10, bt.add(P);
      }
      const p = Math.min(b, S) * 0.015;
      for (const h of o) for (const I of t) for (const A of n) {
        const z = [
          new Oe(I - p, h, A),
          new Oe(I + p, h, A),
          new Oe(I, h, A - p),
          new Oe(I, h, A + p)
        ], P = new tn().setFromPoints(z), k = new Yn({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), m = new Gn(P, k);
        m.renderOrder = -5, bt.add(m);
      }
      bt.traverse((h) => {
        h.material && (Array.isArray(h.material) ? h.material.forEach((I) => {
          I.clippingPlanes = [];
        }) : h.material.clippingPlanes = []);
      }), c.scene.add(bt), c.render();
    }
    let Pt = null;
    function ls() {
      if (!Pt) return;
      const t = Ze();
      t && t.scene.remove(Pt), Pt.traverse((n) => {
        if (n.geometry && n.geometry.dispose(), n.material) {
          const o = n.material;
          o.map && o.map.dispose(), o.dispose();
        }
      }), Pt = null;
    }
    function Xn(t, n, o, l, s) {
      ls();
      const c = Ze();
      if (!c) return;
      Pt = new so(), Pt.name = "gridAxes";
      const a = Math.min(...t), r = Math.max(...t), f = Math.min(...n), i = Math.max(...n), d = r - a || 1, b = i - f || 1, S = Math.max(d, b), $ = S * 0.08, y = l || t.map((m, u) => String.fromCharCode(65 + u)), p = s || n.map((m, u) => String(u + 1)), h = S * 0.018, I = n.length <= 1, A = 8947848;
      for (let m = 0; m < t.length; m++) {
        const u = t[m];
        if (I) {
          const E = -$ - h * 1.5;
          Io(u, 0, 0, u, 0, E + h, A, Pt), ko(y[m] || `${m}`, u, 0, E, h, Pt);
        } else {
          const E = f - $ - h * 1.5;
          Io(u, f, 0, u, E + h, 0, A, Pt), ko(y[m] || `${m}`, u, E, 0, h, Pt);
        }
      }
      if (!I) for (let m = 0; m < n.length; m++) {
        const u = n[m], E = a - $ - h * 1.5;
        Io(a, u, 0, E + h, u, 0, A, Pt), ko(p[m] || `${m}`, E, u, 0, h, Pt);
      }
      const z = h * 1.8, P = $ * 1.2, k = $ * 1.2;
      for (let m = 0; m < t.length - 1; m++) {
        const u = t[m], E = t[m + 1], L = Math.abs(E - u), O = (u + E) / 2, W = `${L.toFixed(2)} m`;
        I ? (Eo(W, O, 0, -P, z, Pt), So(u, 0, -P * 0.7, E, 0, -P * 0.7, 16763904, Pt)) : (Eo(W, O, f - k, 0, z, Pt), So(u, f - k * 0.7, 0, E, f - k * 0.7, 0, 16763904, Pt));
      }
      if (!I) for (let m = 0; m < n.length - 1; m++) {
        const u = n[m], E = n[m + 1], L = Math.abs(E - u), O = (u + E) / 2, W = `${L.toFixed(2)} m`;
        Eo(W, a - P, O, 0, z, Pt), So(a - P * 0.7, u, 0, a - P * 0.7, E, 0, 16763904, Pt);
      }
      Pt.traverse((m) => {
        m.material && (Array.isArray(m.material) ? m.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : m.material.clippingPlanes = []);
      }), c.scene.add(Pt), c.render();
    }
    let Gt = null;
    function rs() {
      if (!Gt) return;
      const t = Ze();
      t && t.scene.remove(Gt), Gt.traverse((n) => {
        if (n.geometry && n.geometry.dispose(), n.material) {
          const o = n.material;
          o.map && o.map.dispose(), o.dispose();
        }
      }), Gt = null;
    }
    function wo(t, n, o) {
      if (rs(), t.length === 0) return;
      const l = Ze();
      if (!l) return;
      Gt = new so(), Gt.name = "storyLevels";
      const s = Math.min(...n), c = Math.max(...n), a = Math.min(...o), r = Math.max(...o), f = c - s || 1, i = r - a || 1, d = Math.max(f, i), b = d * 0.06, S = o.length <= 1, $ = 4491519, y = d * 0.015;
      for (const p of t) {
        const h = p.elev;
        S ? (Kn(s - b, 0, h, c + b, 0, h, $, Gt), is(p.name, c + b * 1.5, 0, h, y, Gt)) : (Kn(s, a, h, c, a, h, $, Gt), Kn(c, a, h, c, r, h, $, Gt), Kn(c, r, h, s, r, h, $, Gt), Kn(s, r, h, s, a, h, $, Gt), is(p.name, s - b * 1.5, a, h, y, Gt));
      }
      Gt.traverse((p) => {
        p.material && (Array.isArray(p.material) ? p.material.forEach((h) => {
          h.clippingPlanes = [];
        }) : p.material.clippingPlanes = []);
      }), l.scene.add(Gt), l.render();
    }
    function Kn(t, n, o, l, s, c, a, r) {
      const f = Math.sqrt((l - t) ** 2 + (s - n) ** 2 + (c - o) ** 2) || 1, i = new tn().setFromPoints([
        new Oe(t, n, o),
        new Oe(l, s, c)
      ]), d = new Wn({
        color: a,
        dashSize: f * 0.02,
        gapSize: f * 0.01,
        transparent: true,
        opacity: 0.5
      }), b = new Cn(i, d);
      b.computeLineDistances(), b.renderOrder = 50, r.add(b);
    }
    function is(t, n, o, l, s, c) {
      const a = document.createElement("canvas"), r = 512, f = 64;
      a.width = r, a.height = f;
      const i = a.getContext("2d");
      i.fillStyle = "rgba(30,60,120,0.8)";
      const d = 8;
      i.beginPath(), i.moveTo(d, 0), i.lineTo(r - d, 0), i.quadraticCurveTo(r, 0, r, d), i.lineTo(r, f - d), i.quadraticCurveTo(r, f, r - d, f), i.lineTo(d, f), i.quadraticCurveTo(0, f, 0, f - d), i.lineTo(0, d), i.quadraticCurveTo(0, 0, d, 0), i.closePath(), i.fill(), i.fillStyle = "#88bbff", i.font = "bold 38px monospace", i.textAlign = "center", i.textBaseline = "middle", i.fillText(t, r / 2, f / 2);
      const b = new Xo(a);
      b.needsUpdate = true;
      const S = new fo({
        map: b,
        depthTest: false,
        transparent: true
      }), $ = new po(S);
      $.position.set(n, o, l), $.scale.set(s * 8, s, 1), $.renderOrder = 101, c.add($);
    }
    function Eo(t, n, o, l, s, c) {
      const a = document.createElement("canvas"), r = 256, f = 64;
      a.width = r, a.height = f;
      const i = a.getContext("2d");
      i.fillStyle = "rgba(0,0,0,0.75)";
      const d = 8;
      i.beginPath(), i.moveTo(d, 0), i.lineTo(r - d, 0), i.quadraticCurveTo(r, 0, r, d), i.lineTo(r, f - d), i.quadraticCurveTo(r, f, r - d, f), i.lineTo(d, f), i.quadraticCurveTo(0, f, 0, f - d), i.lineTo(0, d), i.quadraticCurveTo(0, 0, d, 0), i.closePath(), i.fill(), i.fillStyle = "#ffcc00", i.font = "bold 36px monospace", i.textAlign = "center", i.textBaseline = "middle", i.fillText(t, r / 2, f / 2);
      const b = new rl(a);
      b.minFilter = il;
      const S = new fo({
        map: b,
        transparent: true,
        depthTest: false
      }), $ = new po(S);
      $.position.set(n, o, l);
      const y = r / f;
      $.scale.set(s * y, s, 1), $.renderOrder = 999, c.add($);
    }
    function So(t, n, o, l, s, c, a, r) {
      const f = [
        new Oe(t, n, o),
        new Oe(l, s, c)
      ], i = new tn().setFromPoints(f), d = new Yn({
        color: a,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), b = new Cn(i, d);
      b.renderOrder = 998, r.add(b);
    }
    function Io(t, n, o, l, s, c, a, r) {
      const f = new tn().setFromPoints([
        new Oe(t, n, o),
        new Oe(l, s, c)
      ]), i = new Wn({
        color: a,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(s - n), Math.abs(c - o), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(s - n), Math.abs(c - o), 0.1),
        transparent: true,
        opacity: 0.6
      }), d = new Cn(f, i);
      d.computeLineDistances(), r.add(d);
    }
    function ko(t, n, o, l, s, c) {
      const a = document.createElement("canvas"), r = 128;
      a.width = r, a.height = r;
      const f = a.getContext("2d");
      f.beginPath(), f.arc(r / 2, r / 2, r * 0.42, 0, Math.PI * 2), f.fillStyle = "rgba(255,255,255,0.9)", f.fill(), f.lineWidth = r * 0.04, f.strokeStyle = "#555", f.stroke(), f.fillStyle = "#222", f.font = `bold ${r * 0.45}px Arial`, f.textAlign = "center", f.textBaseline = "middle", f.fillText(t, r / 2, r / 2 + r * 0.02);
      const i = new Xo(a);
      i.needsUpdate = true;
      const d = new fo({
        map: i,
        depthTest: false,
        transparent: true
      }), b = new po(d);
      b.position.set(n, o, l);
      const S = s * 2;
      b.scale.set(S, S, 1), b.renderOrder = 100, c.add(b);
    }
    const Ke = {
      addNode(t, n, o) {
        const l = [
          ...e.nodes.val
        ], s = l.length;
        return l.push([
          t,
          n,
          o
        ]), e.nodes.val = l, console.log(`Node ${s} at (${t}, ${n}, ${o})`), Qe(), s;
      },
      removeNode(t) {
        const n = [
          ...e.nodes.val
        ];
        if (t < 0 || t >= n.length) {
          console.error(`Node ${t} not found`);
          return;
        }
        n.splice(t, 1);
        const o = e.elements.val.map(([l, s]) => {
          const c = l > t ? l - 1 : l, a = s > t ? s - 1 : s;
          return l === t || s === t ? null : [
            c,
            a
          ];
        }).filter((l) => l !== null);
        e.nodes.val = n, e.elements.val = o, console.log(`Node ${t} removed`), Qe();
      },
      listNodes() {
        const t = e.nodes.val;
        return console.table(t.map((n, o) => ({
          id: o,
          x: n[0],
          y: n[1],
          z: n[2]
        }))), t;
      },
      addFrame(t, n) {
        const o = [
          ...e.elements.val
        ], l = o.length;
        return o.push([
          t,
          n
        ]), e.elements.val = o, console.log(`Element ${l}: node ${t} -> node ${n}`), Qe(), l;
      },
      removeFrame(t) {
        const n = [
          ...e.elements.val
        ];
        if (t < 0 || t >= n.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        n.splice(t, 1), e.elements.val = n, console.log(`Element ${t} removed`), Qe();
      },
      listFrames() {
        const t = e.elements.val;
        return console.table(t.map((n, o) => ({
          id: o,
          nodeI: n[0],
          nodeJ: n[1]
        }))), t;
      },
      addSupport(t, n) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, l = new Map(o.supports || []);
        l.set(t, n || [
          true,
          true,
          true,
          true,
          true,
          true
        ]), o.supports = l, e.nodeInputs.val = o, console.log(`Support added at node ${t}`), Qe();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, o = new Map(n.supports || []);
        o.delete(t), n.supports = o, e.nodeInputs.val = n, console.log(`Support removed from node ${t}`), Qe();
      },
      addLoad(t, n) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, l = new Map(o.loads || []);
        l.set(t, n), o.loads = l, e.nodeInputs.val = o, console.log(`Load added at node ${t}: [${n.join(", ")}]`), Qe();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, o = new Map(n.loads || []);
        o.delete(t), n.loads = o, e.nodeInputs.val = n, console.log(`Load removed from node ${t}`), Qe();
      },
      listSupports() {
        if (!e.nodeInputs) return;
        const t = e.nodeInputs.val.supports;
        if (!t || t.size === 0) {
          console.log("No supports");
          return;
        }
        const n = [];
        return t.forEach((o, l) => n.push({
          node: l,
          dof: o.map((s) => s ? 1 : 0).join("")
        })), console.table(n), t;
      },
      listLoads() {
        if (!e.nodeInputs) return;
        const t = e.nodeInputs.val.loads;
        if (!t || t.size === 0) {
          console.log("No loads");
          return;
        }
        const n = [];
        return t.forEach((o, l) => n.push({
          node: l,
          Fx: o[0],
          Fy: o[1],
          Fz: o[2]
        })), console.table(n), t;
      },
      info() {
        var _a2, _b, _c, _d, _e2, _f;
        const t = e.nodes.val.length, n = e.elements.val.length, o = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0, l = ((_f = (_e2 = (_d = e.nodeInputs) == null ? void 0 : _d.val) == null ? void 0 : _e2.loads) == null ? void 0 : _f.size) || 0;
        return console.log(`Model: ${t} nodes, ${n} elements, ${o} supports, ${l} loads`), {
          nodes: t,
          elements: n,
          supports: o,
          loads: l
        };
      },
      set(t, n) {
        var _a2, _b, _c, _d;
        const o = Le.querySelectorAll("input[type=checkbox]");
        for (const l of o) {
          const s = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || "", c = l.id || "";
          if (s.toLowerCase().includes(t.toLowerCase()) || c.toLowerCase().includes(t.toLowerCase())) {
            const a = l;
            return a.checked = n !== void 0 ? n : !a.checked, a.dispatchEvent(new Event("change", {
              bubbles: true
            })), console.log(`${s || c}: ${a.checked}`), a.checked;
          }
        }
        console.log(`Setting "${t}" not found. Use cad.settings() to list.`);
      },
      settings() {
        const t = Le.querySelectorAll("input[type=checkbox]"), n = {};
        return t.forEach((o) => {
          var _a2, _b, _c, _d;
          const l = o, s = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || l.id || "?";
          n[s] = l.checked;
        }), console.table(n), n;
      },
      param(t, n) {
        const o = window.__cad;
        if (o == null ? void 0 : o.setParam) return o.setParam(t, n), console.log(`${t} = ${n}`), n;
        console.log("Parameters not available");
      },
      params() {
        const t = window.__cad;
        if (t == null ? void 0 : t.getParams) {
          const n = t.getParams();
          return console.table(n), n;
        }
        console.log("Parameters not available");
      },
      use(t) {
        const n = window.__cad;
        if (n == null ? void 0 : n.setGenerator) return n.setGenerator(t), console.log(`Generator: ${t}`), t;
      },
      panel(t, n, o) {
        const l = window.__cad;
        if (l == null ? void 0 : l.createCustomPanel) return l.createCustomPanel(t, n, o);
        console.log("Custom panels not available");
      },
      removePanel(t) {
        const n = window.__cad;
        (n == null ? void 0 : n.removeCustomPanel) && (n.removeCustomPanel(t), console.log(`Panel "${t}" removed`));
      },
      refgrid(t, n, o) {
        if (!t) {
          Ht(), console.log("Reference grid cleared");
          return;
        }
        const l = [
          0
        ];
        for (const a of t) l.push(l[l.length - 1] + a);
        const s = [
          0
        ];
        for (const a of n || [
          0
        ]) s.push(s[s.length - 1] + a);
        const c = [
          0
        ];
        for (const a of o || [
          3
        ]) c.push(c[c.length - 1] + a);
        as(l, s, c), We = l.map((a, r) => ({
          label: String.fromCharCode(65 + r),
          coord: a
        })), Xe = s.map((a, r) => ({
          label: `${r + 1}`,
          coord: a
        })), pt = c[c.length - 1], lt = c.map((a, r) => ({
          label: r === 0 ? "Base" : `P${r}`,
          elev: a
        })), Xn(We.map((a) => a.coord), Xe.map((a) => a.coord), pt, We.map((a) => a.label), Xe.map((a) => a.label));
        {
          const a = c.map((r, f) => ({
            name: f === 0 ? "Base" : `P${f}`,
            height: f > 0 ? r - c[f - 1] : 0,
            elev: r
          }));
          wo(a, We.map((r) => r.coord), Xe.map((r) => r.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${s}] Y=[${c}]`), {
          xCoords: l,
          zCoords: s,
          yLevels: c
        };
      },
      build(t) {
        var _a2;
        if (We.length === 0 || lt.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const n = (t == null ? void 0 : t.col) || "40x40", o = (t == null ? void 0 : t.viga) || "30x40", l = (t == null ? void 0 : t.fc) || 210, [s, c] = n.split("x").map((_) => parseFloat(_) / 100), [a, r] = o.split("x").map((_) => parseFloat(_) / 100), f = We.map((_) => _.coord), i = Xe.map((_) => _.coord), d = lt.map((_) => _.elev), b = f.length, S = i.length, $ = d.length, y = $ - 1, p = [], h = {};
        for (let _ = 0; _ < $; _++) for (let ue = 0; ue < S; ue++) for (let oe = 0; oe < b; oe++) h[`${oe},${ue},${_}`] = p.length, p.push([
          f[oe],
          i[ue],
          d[_]
        ]);
        const I = [], A = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Map();
        for (let _ = 0; _ < y; _++) for (let ue = 0; ue < S; ue++) for (let oe = 0; oe < b; oe++) {
          const fe = I.length;
          I.push([
            h[`${oe},${ue},${_}`],
            h[`${oe},${ue},${_ + 1}`]
          ]), A.add(fe), P.set(fe, _);
        }
        for (let _ = 1; _ < $; _++) for (let ue = 0; ue < S; ue++) for (let oe = 0; oe < b - 1; oe++) {
          const fe = I.length;
          I.push([
            h[`${oe},${ue},${_}`],
            h[`${oe + 1},${ue},${_}`]
          ]), z.add(fe), P.set(fe, _ - 1);
        }
        for (let _ = 1; _ < $; _++) for (let ue = 0; ue < b; ue++) for (let oe = 0; oe < S - 1; oe++) {
          const fe = I.length;
          I.push([
            h[`${ue},${oe},${_}`],
            h[`${ue},${oe + 1},${_}`]
          ]), z.add(fe), P.set(fe, _ - 1);
        }
        const k = ((_a2 = t == null ? void 0 : t.braces) == null ? void 0 : _a2.toLowerCase()) || "", m = /* @__PURE__ */ new Set();
        if (k) {
          const _ = k === "all" || k === "x" || k === "perimeter", ue = k === "all" || k === "y" || k === "perimeter";
          for (let oe = 0; oe < y; oe++) {
            if (_) for (let fe = 0; fe < S; fe++) {
              if (k === "perimeter" && fe !== 0 && fe !== S - 1) continue;
              const ee = Math.floor((b - 1) / 2);
              for (let me = 0; me < b - 1; me++) {
                if (k === "perimeter" && me !== ee) continue;
                const we = I.length;
                I.push([
                  h[`${me},${fe},${oe}`],
                  h[`${me + 1},${fe},${oe + 1}`]
                ]), m.add(we), P.set(we, oe);
                const se = I.length;
                I.push([
                  h[`${me + 1},${fe},${oe}`],
                  h[`${me},${fe},${oe + 1}`]
                ]), m.add(se), P.set(se, oe);
              }
            }
            if (ue) for (let fe = 0; fe < b; fe++) {
              if (k === "perimeter" && fe !== 0 && fe !== b - 1) continue;
              const ee = Math.floor((S - 1) / 2);
              for (let me = 0; me < S - 1; me++) {
                if (k === "perimeter" && me !== ee) continue;
                const we = I.length;
                I.push([
                  h[`${fe},${me},${oe}`],
                  h[`${fe},${me + 1},${oe + 1}`]
                ]), m.add(we), P.set(we, oe);
                const se = I.length;
                I.push([
                  h[`${fe},${me + 1},${oe}`],
                  h[`${fe},${me},${oe + 1}`]
                ]), m.add(se), P.set(se, oe);
              }
            }
          }
        }
        const u = 15100 * Math.sqrt(l) * 10, E = u / (2 * (1 + 0.2)), L = s * c, O = s * c ** 3 / 12, W = c * s ** 3 / 12, x = s * c * (s ** 2 + c ** 2) / 12, w = a * r, v = a * r ** 3 / 12, F = r * a ** 3 / 12, X = a * r * (a ** 2 + r ** 2) / 12, V = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map();
        for (let _ = 0; _ < I.length; _++) V.set(_, u), ae.set(_, E), A.has(_) ? (Q.set(_, L), K.set(_, O), pe.set(_, W), ce.set(_, x), Ie.set(_, {
          type: "rect",
          b: s,
          h: c,
          name: `COL${n}`
        })) : m.has(_) ? (Q.set(_, L), K.set(_, O), pe.set(_, W), ce.set(_, x), Ie.set(_, {
          type: "rect",
          b: s,
          h: c,
          name: `BR${n}`
        })) : (Q.set(_, w), K.set(_, v), pe.set(_, F), ce.set(_, X), Ie.set(_, {
          type: "rect",
          b: a,
          h: r,
          name: `V${o}`
        }));
        const Pe = /* @__PURE__ */ new Map();
        for (let _ = 0; _ < S; _++) for (let ue = 0; ue < b; ue++) Pe.set(h[`${ue},${_},0`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        return e.nodes.val = p, e.elements.val = I, e.nodeInputs.val = {
          supports: Pe,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: V,
          shearModuli: ae,
          areas: Q,
          momentsOfInertiaZ: K,
          momentsOfInertiaY: pe,
          torsionalConstants: ce,
          sectionShapes: Ie
        }, D = A, G = z, $e = P, console.log(`Built: ${p.length} nodes, ${I.length} elements (${A.size} cols, ${z.size} beams, ${m.size} braces)`), console.log(`  Col: ${n}, Viga: ${o}, f'c=${l}${k ? `, braces=${k}` : ""}`), {
          nodes: p.length,
          elements: I.length
        };
      },
      addCol(t, n, o) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = We.findIndex((y) => y.label === t), s = Xe.findIndex((y) => y.label === n);
        if (l < 0) {
          console.log(`Axis "${t}" not found. Available: ${We.map((y) => y.label)}`);
          return;
        }
        if (s < 0) {
          console.log(`Axis "${n}" not found. Available: ${Xe.map((y) => y.label)}`);
          return;
        }
        const c = We[l].coord, a = Xe[s].coord, r = [
          ...e.nodes.val
        ], f = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ];
        (_b = e.elementInputs) == null ? void 0 : _b.val;
        const i = (y) => {
          const p = r.findIndex((h) => Math.abs(h[0] - c) < 1e-3 && Math.abs(h[1] - a) < 1e-3 && Math.abs(h[2] - y) < 1e-3);
          return p >= 0 ? p : (r.push([
            c,
            a,
            y
          ]), r.length - 1);
        }, d = o ? [
          lt.findIndex((y) => y.label === o)
        ] : Array.from({
          length: lt.length - 1
        }, (y, p) => p + 1), b = new Map(((_d = (_c = e.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), S = i(lt[0].elev);
        b.has(S) || b.set(S, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        let $ = 0;
        for (const y of d) {
          if (y < 1 || y >= lt.length) continue;
          const p = i(lt[y - 1].elev), h = i(lt[y].elev);
          f.push([
            p,
            h
          ]), D.add(f.length - 1), $e.set(f.length - 1, y - 1), $++;
        }
        return e.nodes.val = r, e.elements.val = f, e.nodeInputs.val = {
          ...e.nodeInputs.val,
          supports: b,
          loads: ((_f = (_e2 = e.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${$} column(s) at ${t}-${n}${o ? ` story ${o}` : ""}`), $;
      },
      addBeam(t, n, o, l, s) {
        var _a2;
        const c = We.findIndex((P) => P.label === t), a = Xe.findIndex((P) => P.label === n), r = We.findIndex((P) => P.label === o), f = Xe.findIndex((P) => P.label === l), i = lt.findIndex((P) => P.label === s);
        if (c < 0 || a < 0 || r < 0 || f < 0) {
          console.log("Axis not found");
          return;
        }
        if (i < 1) {
          console.log(`Story "${s}" not found. Available: ${lt.filter((P) => P.label !== "Base").map((P) => P.label)}`);
          return;
        }
        const d = We[c].coord, b = Xe[a].coord, S = We[r].coord, $ = Xe[f].coord, y = lt[i].elev, p = [
          ...e.nodes.val
        ], h = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], I = (P, k, m) => {
          const u = p.findIndex((E) => Math.abs(E[0] - P) < 1e-3 && Math.abs(E[1] - k) < 1e-3 && Math.abs(E[2] - m) < 1e-3);
          return u >= 0 ? u : (p.push([
            P,
            k,
            m
          ]), p.length - 1);
        }, A = I(d, b, y), z = I(S, $, y);
        return h.push([
          A,
          z
        ]), G.add(h.length - 1), $e.set(h.length - 1, i - 1), e.nodes.val = p, e.elements.val = h, console.log(`Added beam ${t}-${n} \u2192 ${o}-${l} at ${s}`), h.length - 1;
      },
      addBrace(t, n, o, l, s, c) {
        var _a2;
        const a = We.findIndex((u) => u.label === t), r = Xe.findIndex((u) => u.label === n), f = lt.findIndex((u) => u.label === o), i = We.findIndex((u) => u.label === l), d = Xe.findIndex((u) => u.label === s), b = lt.findIndex((u) => u.label === c);
        if (a < 0 || r < 0 || f < 0) {
          console.log(`Point 1 not found: ${t}-${n}@${o}`);
          return;
        }
        if (i < 0 || d < 0 || b < 0) {
          console.log(`Point 2 not found: ${l}-${s}@${c}`);
          return;
        }
        const S = We[a].coord, $ = Xe[r].coord, y = lt[f].elev, p = We[i].coord, h = Xe[d].coord, I = lt[b].elev, A = [
          ...e.nodes.val
        ], z = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], P = (u, E, L) => {
          const O = A.findIndex((W) => Math.abs(W[0] - u) < 1e-3 && Math.abs(W[1] - E) < 1e-3 && Math.abs(W[2] - L) < 1e-3);
          return O >= 0 ? O : (A.push([
            u,
            E,
            L
          ]), A.length - 1);
        }, k = P(S, $, y), m = P(p, h, I);
        return z.push([
          k,
          m
        ]), $e.set(z.length - 1, Math.min(f, b)), e.nodes.val = A, e.elements.val = z, console.log(`Added brace ${t}-${n}@${o} \u2192 ${l}-${s}@${c}`), z.length - 1;
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
        Ke.clear();
        const n = (t == null ? void 0 : t.bx) || [
          5,
          5
        ], o = (t == null ? void 0 : t.bz) || [
          4,
          4
        ], l = (t == null ? void 0 : t.h) || [
          3.5,
          3,
          3
        ], s = (t == null ? void 0 : t.col) || "40x40", c = (t == null ? void 0 : t.viga) || "30x40", a = (t == null ? void 0 : t.fc) || 210, [r, f] = s.split("x").map((ee) => parseFloat(ee) / 100), [i, d] = c.split("x").map((ee) => parseFloat(ee) / 100), b = [
          0
        ];
        for (const ee of n) b.push(b[b.length - 1] + ee);
        const S = [
          0
        ];
        for (const ee of o) S.push(S[S.length - 1] + ee);
        const $ = [
          0
        ];
        for (const ee of l) $.push($[$.length - 1] + ee);
        const y = b.length, p = S.length, h = $.length, I = l.length, A = [], z = {};
        for (let ee = 0; ee < h; ee++) for (let me = 0; me < p; me++) for (let we = 0; we < y; we++) z[`${we},${ee},${me}`] = A.length, A.push([
          b[we],
          $[ee],
          S[me]
        ]);
        const P = [], k = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < I; ee++) for (let me = 0; me < p; me++) for (let we = 0; we < y; we++) {
          const se = P.length;
          P.push([
            z[`${we},${ee},${me}`],
            z[`${we},${ee + 1},${me}`]
          ]), k.add(se), u.set(se, ee);
        }
        for (let ee = 1; ee < h; ee++) for (let me = 0; me < p; me++) for (let we = 0; we < y - 1; we++) {
          const se = P.length;
          P.push([
            z[`${we},${ee},${me}`],
            z[`${we + 1},${ee},${me}`]
          ]), m.add(se), u.set(se, ee - 1);
        }
        for (let ee = 1; ee < h; ee++) for (let me = 0; me < y; me++) for (let we = 0; we < p - 1; we++) {
          const se = P.length;
          P.push([
            z[`${me},${ee},${we}`],
            z[`${me},${ee},${we + 1}`]
          ]), m.add(se), u.set(se, ee - 1);
        }
        const L = 15100 * Math.sqrt(a) * 10, O = L / (2 * (1 + 0.2)), W = r * f, x = r * f ** 3 / 12, w = f * r ** 3 / 12, v = r * f * (r ** 2 + f ** 2) / 12, F = i * d, X = i * d ** 3 / 12, V = d * i ** 3 / 12, ae = i * d * (i ** 2 + d ** 2) / 12, Q = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < P.length; ee++) Q.set(ee, L), K.set(ee, O), k.has(ee) ? (pe.set(ee, W), ce.set(ee, x), Ie.set(ee, w), Pe.set(ee, v), _.set(ee, {
          type: "rect",
          b: r,
          h: f,
          name: `COL${s}`
        })) : (pe.set(ee, F), ce.set(ee, X), Ie.set(ee, V), Pe.set(ee, ae), _.set(ee, {
          type: "rect",
          b: i,
          h: d,
          name: `V${c}`
        }));
        const ue = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < p; ee++) for (let me = 0; me < y; me++) ue.set(z[`${me},0,${ee}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        e.nodes.val = A, e.elements.val = P, e.nodeInputs.val = {
          supports: ue,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: Q,
          shearModuli: K,
          areas: pe,
          momentsOfInertiaZ: ce,
          momentsOfInertiaY: Ie,
          torsionalConstants: Pe,
          sectionShapes: _
        }, D = k, G = m, $e = u, We = b.map((ee, me) => ({
          label: String.fromCharCode(65 + me),
          coord: ee
        })), Xe = S.map((ee, me) => ({
          label: `${me + 1}`,
          coord: ee
        })), pt = $[$.length - 1], Xn(We.map((ee) => ee.coord), Xe.map((ee) => ee.coord), pt, We.map((ee) => ee.label), Xe.map((ee) => ee.label));
        {
          const ee = $.map((me, we) => ({
            name: we === 0 ? "Base" : `P${we}`,
            height: we > 0 ? me - $[we - 1] : 0,
            elev: me
          }));
          wo(ee, b, S);
        }
        const oe = Le.querySelector("#cad3d-axis-buttons");
        if (oe) {
          oe.style.display = "flex";
          const ee = We.map((we) => we.label), me = Xe.map((we) => we.label);
          oe.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const we of ee) oe.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${we}">${we}</button>`;
          oe.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const we of me) oe.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${we}">${we}</button>`;
        }
        const fe = Le.querySelector("#cad3d-floor-buttons");
        if (fe) {
          fe.style.display = "flex", fe.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let ee = 0; ee < I; ee++) fe.innerHTML += `<button class="floor-btn" data-floor="${ee}">P${ee + 1}</button>`;
        }
        return as(b, S, $), Qe(), console.log(`Model3D: ${A.length}n ${P.length}e | ${y}x${p} grid, ${I} floors | COL${s} V${c} f'c=${a}`), {
          nodes: A.length,
          elements: P.length,
          columns: k.size,
          beams: m.size
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), We = [], Xe = [], pt = 0, ls(), rs(), Ht();
        const t = Le.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), Qe();
      },
      frame(t, n, o = 0, l = 0) {
        Ke.clear();
        const s = [];
        o > 0 && s.push(-o);
        let c = 0;
        s.push(c);
        for (const y of t) c += y, s.push(c);
        l > 0 && s.push(c + l);
        const a = [
          0
        ];
        let r = 0;
        for (const y of n) r += y, a.push(r);
        const f = (y) => o > 0 && y === 0 || l > 0 && y === s.length - 1, i = {}, d = [];
        for (let y = 0; y < a.length; y++) for (let p = 0; p < s.length; p++) y === 0 && f(p) || (i[`${p},${y}`] = d.length, d.push([
          s[p],
          0,
          a[y]
        ]));
        const b = [];
        D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set();
        for (let y = 0; y < a.length - 1; y++) for (let p = 0; p < s.length; p++) f(p) || (D.add(b.length), b.push([
          i[`${p},${y}`],
          i[`${p},${y + 1}`]
        ]));
        for (let y = 1; y < a.length; y++) for (let p = 0; p < s.length - 1; p++) G.add(b.length), b.push([
          i[`${p},${y}`],
          i[`${p + 1},${y}`]
        ]);
        const S = /* @__PURE__ */ new Map(), $ = mt();
        for (let y = 0; y < s.length; y++) {
          if (f(y)) continue;
          const p = `${y},0`;
          i[p] !== void 0 && S.set(i[p], [
            ...$
          ]);
        }
        return e.nodes.val = d, e.elements.val = b, e.nodeInputs && (e.nodeInputs.val = {
          supports: S
        }), We = [
          ...s
        ], Xe = [
          0
        ], pt = a[a.length - 1] || 0, setTimeout(() => {
          wt(), Xn(s, [
            0
          ]), No(), qo();
        }, 50), Qe(), {
          nodes: d.length,
          elements: b.length
        };
      },
      building(t, n, o, l = 3, s = 0, c = 0, a = 0, r = 0, f = 1) {
        Ke.clear();
        const i = [];
        s > 0 && i.push(-s), i.push(0);
        for (const u of t) i.push(i[i.length - 1] + u);
        c > 0 && i.push(i[i.length - 1] + c);
        const d = [];
        a > 0 && d.push(-a), d.push(0);
        for (const u of n) d.push(d[d.length - 1] + u);
        r > 0 && d.push(d[d.length - 1] + r);
        const b = [
          0
        ];
        for (const u of o) b.push(b[b.length - 1] + u);
        const S = (u) => s > 0 && u === 0 || c > 0 && u === i.length - 1, $ = (u) => a > 0 && u === 0 || r > 0 && u === d.length - 1, y = (u, E) => S(u) || $(E), p = [], h = {};
        for (let u = 0; u < b.length; u++) for (let E = 0; E < d.length; E++) for (let L = 0; L < i.length; L++) u === 0 && y(L, E) || (h[`${L},${E},${u}`] = p.length, p.push([
          i[L],
          d[E],
          b[u]
        ]));
        const I = p.length, A = [];
        D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map();
        const z = [];
        for (let u = 0; u < b.length - 1; u++) for (let E = 0; E < d.length; E++) for (let L = 0; L < i.length; L++) y(L, E) || z.push({
          el: [
            h[`${L},${E},${u}`],
            h[`${L},${E},${u + 1}`]
          ],
          floor: u
        });
        for (const { el: [u, E], floor: L } of z) {
          if (f <= 1) {
            D.add(A.length), $e.set(A.length, L), A.push([
              u,
              E
            ]);
            continue;
          }
          const O = p[u], W = p[E];
          let x = u;
          for (let w = 1; w < f; w++) {
            const v = w / f, F = p.length;
            p.push([
              O[0] + (W[0] - O[0]) * v,
              O[1] + (W[1] - O[1]) * v,
              O[2] + (W[2] - O[2]) * v
            ]), D.add(A.length), $e.set(A.length, L), A.push([
              x,
              F
            ]), x = F;
          }
          D.add(A.length), $e.set(A.length, L), A.push([
            x,
            E
          ]);
        }
        Te = /* @__PURE__ */ new Map();
        const P = [];
        for (let u = 1; u < b.length; u++) for (let E = 0; E < d.length; E++) for (let L = 0; L < i.length - 1; L++) P.push({
          el: [
            h[`${L},${E},${u}`],
            h[`${L + 1},${E},${u}`]
          ],
          floor: u - 1,
          dir: "x",
          bay: L
        });
        for (let u = 1; u < b.length; u++) for (let E = 0; E < i.length; E++) for (let L = 0; L < d.length - 1; L++) P.push({
          el: [
            h[`${E},${L},${u}`],
            h[`${E},${L + 1},${u}`]
          ],
          floor: u - 1,
          dir: "y",
          bay: L
        });
        for (const { el: [u, E], floor: L, dir: O, bay: W } of P) {
          const x = p[u], w = p[E];
          let v = u;
          for (let X = 1; X < l; X++) {
            const V = X / l, ae = p.length;
            p.push([
              x[0] + (w[0] - x[0]) * V,
              x[1] + (w[1] - x[1]) * V,
              x[2] + (w[2] - x[2]) * V
            ]);
            const Q = A.length;
            G.add(Q), $e.set(Q, L), Te.set(Q, {
              dir: O,
              bay: W
            }), A.push([
              v,
              ae
            ]), v = ae;
          }
          const F = A.length;
          G.add(F), $e.set(F, L), Te.set(F, {
            dir: O,
            bay: W
          }), A.push([
            v,
            E
          ]);
        }
        if (st = /* @__PURE__ */ new Set(), Ee && ze > 0) {
          const u = (E, L, O) => {
            for (let x = 0; x < p.length; x++) if (Math.abs(p[x][0] - E) < 1e-6 && Math.abs(p[x][1] - L) < 1e-6 && Math.abs(p[x][2] - O) < 1e-6) return x;
            const W = p.length;
            return p.push([
              E,
              L,
              O
            ]), W;
          };
          for (let E = 1; E < b.length; E++) if (Je === "x") for (let L = 0; L < d.length - 1; L++) {
            const O = d[L], W = d[L + 1];
            for (let x = 1; x <= ze; x++) {
              const w = O + x / (ze + 1) * (W - O), v = [];
              for (let F = 0; F < i.length; F++) v.push(u(i[F], w, b[E]));
              for (let F = 0; F < i.length - 1; F++) {
                const X = A.length;
                st.add(X), G.add(X), $e.set(X, E - 1), Te.set(X, {
                  dir: "x",
                  bay: F
                }), A.push([
                  v[F],
                  v[F + 1]
                ]);
              }
            }
          }
          else for (let L = 0; L < i.length - 1; L++) {
            const O = i[L], W = i[L + 1];
            for (let x = 1; x <= ze; x++) {
              const w = O + x / (ze + 1) * (W - O), v = [];
              for (let F = 0; F < d.length; F++) v.push(u(w, d[F], b[E]));
              for (let F = 0; F < d.length - 1; F++) {
                const X = A.length;
                st.add(X), G.add(X), $e.set(X, E - 1), Te.set(X, {
                  dir: "y",
                  bay: F
                }), A.push([
                  v[F],
                  v[F + 1]
                ]);
              }
            }
          }
        }
        const k = /* @__PURE__ */ new Map(), m = mt();
        for (let u = 0; u < d.length; u++) for (let E = 0; E < i.length; E++) y(E, u) || k.set(h[`${E},${u},0`], [
          ...m
        ]);
        de = /* @__PURE__ */ new Set();
        for (const u of ve) {
          const E = b.length - 1, L = u.floors.includes(-1) ? Array.from({
            length: E
          }, (O, W) => W) : u.floors.filter((O) => O < E);
          for (const O of L) {
            let W, x, w, v;
            u.dir === "x" ? (W = u.bay, w = u.bay + 1, x = u.axisIdx, v = u.axisIdx) : (W = u.axisIdx, w = u.axisIdx, x = u.bay, v = u.bay + 1);
            const F = h[`${W},${x},${O}`], X = h[`${W},${x},${O + 1}`];
            let V, ae;
            if (u.dir === "x" ? (V = h[`${w},${v},${O}`], ae = h[`${w},${v},${O + 1}`]) : (V = h[`${w},${v},${O}`], ae = h[`${w},${v},${O + 1}`]), F === void 0 || V === void 0 || X === void 0 || ae === void 0) continue;
            const Q = be, K = He, pe = p[F], ce = p[V], Ie = p[X], Pe = p[ae], _ = [];
            for (let ue = 0; ue <= K; ue++) {
              const oe = [], fe = ue / K;
              for (let ee = 0; ee <= Q; ee++) {
                const me = ee / Q, we = (1 - fe) * ((1 - me) * pe[0] + me * ce[0]) + fe * ((1 - me) * Ie[0] + me * Pe[0]), se = (1 - fe) * ((1 - me) * pe[1] + me * ce[1]) + fe * ((1 - me) * Ie[1] + me * Pe[1]), Se = (1 - fe) * ((1 - me) * pe[2] + me * ce[2]) + fe * ((1 - me) * Ie[2] + me * Pe[2]);
                ue === 0 && ee === 0 ? oe.push(F) : ue === 0 && ee === Q ? oe.push(V) : ue === K && ee === 0 ? oe.push(X) : ue === K && ee === Q ? oe.push(ae) : (oe.push(p.length), p.push([
                  we,
                  se,
                  Se
                ]));
              }
              _.push(oe);
            }
            for (let ue = 0; ue < K; ue++) for (let oe = 0; oe < Q; oe++) {
              const fe = _[ue][oe], ee = _[ue][oe + 1], me = _[ue + 1][oe + 1], we = _[ue + 1][oe], se = A.length;
              de.add(se), $e.set(se, O), A.push([
                fe,
                ee,
                me,
                we
              ]);
            }
            if (O === 0) for (let ue = 0; ue <= Q; ue++) {
              const oe = _[0][ue];
              oe >= I && k.set(oe, [
                ...m
              ]);
            }
          }
        }
        if (zt = /* @__PURE__ */ new Set(), Ue) {
          const u = l, E = l, L = /* @__PURE__ */ new Map(), O = (W, x, w) => `${Math.round(W * 1e4)},${Math.round(x * 1e4)},${Math.round(w * 1e4)}`;
          for (let W = 0; W < p.length; W++) L.set(O(p[W][0], p[W][1], p[W][2]), W);
          for (let W = 1; W < b.length; W++) {
            const x = b[W];
            for (let w = 0; w < i.length - 1; w++) for (let v = 0; v < d.length - 1; v++) {
              const F = i[w], X = i[w + 1], V = d[v], ae = d[v + 1], Q = [];
              for (let K = 0; K <= E; K++) {
                const pe = [];
                for (let ce = 0; ce <= u; ce++) {
                  const Ie = F + ce / u * (X - F), Pe = V + K / E * (ae - V);
                  if (K === 0 && ce === 0) pe.push(h[`${w},${v},${W}`]);
                  else if (K === 0 && ce === u) pe.push(h[`${w + 1},${v},${W}`]);
                  else if (K === E && ce === 0) pe.push(h[`${w},${v + 1},${W}`]);
                  else if (K === E && ce === u) pe.push(h[`${w + 1},${v + 1},${W}`]);
                  else {
                    const _ = O(Ie, Pe, x), ue = L.get(_);
                    if (ue !== void 0) pe.push(ue);
                    else {
                      const oe = p.length;
                      p.push([
                        Ie,
                        Pe,
                        x
                      ]), L.set(_, oe), pe.push(oe);
                    }
                  }
                }
                Q.push(pe);
              }
              for (let K = 0; K < E; K++) for (let pe = 0; pe < u; pe++) {
                const ce = Q[K][pe], Ie = Q[K][pe + 1], Pe = Q[K + 1][pe + 1], _ = Q[K + 1][pe], ue = A.length;
                zt.add(ue), $e.set(ue, W - 1), A.push([
                  ce,
                  Ie,
                  Pe,
                  _
                ]);
              }
            }
          }
        }
        if (Ft && gt) {
          const u = gt === "all" || gt === "x" || gt === "perimeter", E = gt === "all" || gt === "y" || gt === "perimeter", L = b.length - 1;
          for (let O = 0; O < L; O++) {
            if (u) for (let W = 0; W < d.length; W++) {
              if (gt === "perimeter" && W !== 0 && W !== d.length - 1) continue;
              const x = Math.floor((i.length - 1) / 2);
              for (let w = 0; w < i.length - 1; w++) {
                if (gt === "perimeter" && w !== x || y(w, W) || y(w + 1, W)) continue;
                const v = h[`${w},${W},${O}`], F = h[`${w + 1},${W},${O + 1}`], X = h[`${w + 1},${W},${O}`], V = h[`${w},${W},${O + 1}`];
                v !== void 0 && F !== void 0 && (A.push([
                  v,
                  F
                ]), $e.set(A.length - 1, O)), X !== void 0 && V !== void 0 && (A.push([
                  X,
                  V
                ]), $e.set(A.length - 1, O));
              }
            }
            if (E) for (let W = 0; W < i.length; W++) {
              if (gt === "perimeter" && W !== 0 && W !== i.length - 1) continue;
              const x = Math.floor((d.length - 1) / 2);
              for (let w = 0; w < d.length - 1; w++) {
                if (gt === "perimeter" && w !== x || y(W, w) || y(W, w + 1)) continue;
                const v = h[`${W},${w},${O}`], F = h[`${W},${w + 1},${O + 1}`], X = h[`${W},${w + 1},${O}`], V = h[`${W},${w},${O + 1}`];
                v !== void 0 && F !== void 0 && (A.push([
                  v,
                  F
                ]), $e.set(A.length - 1, O)), X !== void 0 && V !== void 0 && (A.push([
                  X,
                  V
                ]), $e.set(A.length - 1, O));
              }
            }
          }
        }
        return e.nodes.val = p, e.elements.val = A, e.nodeInputs && (e.nodeInputs.val = {
          supports: k
        }), We = [
          ...i
        ], Xe = [
          ...d
        ], pt = b[b.length - 1] || 0, setTimeout(() => {
          wt(), Xn(i, d), No(), qo();
        }, 50), Qe(), {
          nodes: p.length,
          elements: A.length,
          nJointNodes: I
        };
      },
      galpon(t = 12, n = 20, o = 6, l = 3, s = 8, c = 4) {
        Ke.clear();
        const a = [], r = [], f = ($) => o + l * (1 - Math.pow(2 * $ / t - 1, 2)), i = [], d = c + 1;
        for (let $ = 0; $ < d; $++) {
          const y = [], p = n / c * $;
          y.push(a.length), a.push([
            0,
            p,
            0
          ]), y.push(a.length), a.push([
            t,
            p,
            0
          ]), y.push(a.length), a.push([
            0,
            p,
            o
          ]);
          for (let h = 1; h < s; h++) {
            const I = t / s * h;
            y.push(a.length), a.push([
              I,
              p,
              f(I)
            ]);
          }
          y.push(a.length), a.push([
            t,
            p,
            o
          ]), i.push(y);
        }
        for (let $ = 0; $ < d; $++) {
          const y = i[$];
          r.push([
            y[0],
            y[2]
          ]), r.push([
            y[1],
            y[y.length - 1]
          ]);
          for (let p = 2; p < y.length - 1; p++) r.push([
            y[p],
            y[p + 1]
          ]);
        }
        for (let $ = 0; $ < c; $++) for (let y = 2; y < i[0].length; y++) r.push([
          i[$][y],
          i[$ + 1][y]
        ]);
        for (let $ = 0; $ < c; $++) for (let y = 2; y < i[0].length - 1; y += 2) r.push([
          i[$][y],
          i[$ + 1][y + 1]
        ]);
        const b = /* @__PURE__ */ new Map(), S = mt();
        for (let $ = 0; $ < d; $++) b.set(i[$][0], [
          ...S
        ]), b.set(i[$][1], [
          ...S
        ]);
        return e.nodes.val = a, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
          supports: b
        }), Qe(), {
          nodes: a.length,
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
            Ne.colMat = 1, Ne.vigaMat = 1, Ke.clear(), et("truss"), ps();
            break;
          }
          case "beams": {
            Ne.colMat = 0, Ne.vigaMat = 0, Ne.colShape = 0, Ke.clear(), et("beams"), fs();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            Ne.colMat = 1, Ne.vigaMat = 1, Ke.clear(), et("3d"), us();
            break;
          }
          case "portico": {
            Ne.colMat = 0, Ne.vigaMat = 0, Ne.colShape = 0, et("frame"), Re();
            break;
          }
          case "edificio": {
            et("edificio"), Ne.colMat = 0, Ne.vigaMat = 0, Ne.colShape = 0, ve = [], Ue = false, Ee = false, Ft = false, Re();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            et("edificio"), Ne.colMat = 1, Ne.vigaMat = 1, Ne.steelColType = 0, Ne.steelVigaType = 0, ve = [], Ee = true, ze = 2;
            const n = re.reduce((l, s) => l + s, 0) / re.length, o = te.reduce((l, s) => l + s, 0) / te.length;
            Je = n >= o ? "y" : "x", Ue = true, at = 0.08, Ft = false, Re();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            et("edificio"), Ne.colMat = 1, Ne.vigaMat = 1, Ne.steelColType = 0, Ne.steelVigaType = 0, ve = [], Ee = true, ze = 2;
            const n = re.reduce((l, s) => l + s, 0) / re.length, o = te.reduce((l, s) => l + s, 0) / te.length;
            Je = n >= o ? "y" : "x", Ue = true, at = 0.08, Ft = true, gt = "perimeter", Re();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            et("edificio"), Ne.colMat = 0, Ne.vigaMat = 0, Ne.colShape = 0, Ee = false;
            const n = Math.round(((_a2 = Z.nVanosX) == null ? void 0 : _a2.val) ?? 2), o = Math.round(((_b = Z.nVanosY) == null ? void 0 : _b.val) ?? 2);
            ve = [
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
                bay: n - 1,
                axisIdx: o,
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
                bay: o - 1,
                axisIdx: n,
                floors: [
                  -1
                ]
              }
            ], Ue = true, at = 0.15, Re();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            et("edificio"), Ne.colMat = 2, Ne.vigaMat = 0, Ee = false;
            const n = Math.round(((_c = Z.nVanosX) == null ? void 0 : _c.val) ?? 2), o = Math.round(((_d = Z.nVanosY) == null ? void 0 : _d.val) ?? 2);
            ve = [
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
                bay: n - 1,
                axisIdx: o,
                floors: [
                  -1
                ]
              }
            ], Ue = true, at = 0.12, Re();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            et("edificio"), Z.nPisos && (Z.nPisos.val = 1), Z.hPiso && (Z.hPiso.val = 4.5), Z.nVanosX && (Z.nVanosX.val = 3), Z.nVanosY && (Z.nVanosY.val = 2), Z.nSubViga && (Z.nSubViga.val = 3), re = [
              6,
              6,
              6
            ], te = [
              5,
              5
            ], Ne.colMat = 1, Ne.vigaMat = 1, Ne.steelColType = 0, Ne.steelVigaType = 0, ve = [], Ee = true, ze = 2, Je = re[0] >= te[0] ? "y" : "x", Ue = true, at = 0.08, dt = 3, yt = 3, Re();
            break;
          }
          case "galpon": {
            et("galpon"), Ne.colMat = 1, Ne.vigaMat = 1, Re();
            break;
          }
          case "barra": {
            et("barra"), Re();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            Ke.clear(), et("placa-3q"), ms();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            Ke.clear(), et("placa-q4"), bs();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            Ke.clear(), et("losa-rect"), gs();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            Ke.clear(), et("losa-plana"), hs();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            Ke.clear(), et("viga-alta"), xs();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            Ke.clear(), et("muro-contencion"), vs();
            break;
          }
          case "zapata":
          case "footing": {
            Ke.clear(), et("zapata"), ys();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            Ke.clear(), et("placa-orificios"), $s();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            Ke.clear(), et("col-placa"), Ms();
            break;
          }
          case "talud":
          case "slope": {
            Ke.clear(), et("talud"), ws();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            Ke.clear(), et("eiffel"), _s();
            break;
          }
          case "arco":
          case "arco-gateway": {
            Ke.clear(), et("arco"), Ds();
            break;
          }
          case "puente":
          case "puente-colgante": {
            Ke.clear(), et("puente"), Bs();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            Ke.clear(), et("twisted"), Hs();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            Ke.clear(), et("burj"), js();
            break;
          }
          case "opera":
          case "sydney-opera": {
            Ke.clear(), et("opera"), Ws();
            break;
          }
          case "diagrid":
          case "gherkin": {
            Ke.clear(), et("diagrid"), Gs();
            break;
          }
          case "muro-q4":
          case "shear-wall":
          case "muro-cantilever": {
            Ke.clear(), et("muro-q4"), Vo();
            break;
          }
          case "viga-q4":
          case "cantilever-beam":
          case "viga-cantilever": {
            Ke.clear(), et("viga-q4"), Ys();
            break;
          }
          case "placa-xz":
          case "placa-cantilever":
          case "losa-cantilever": {
            Ke.clear(), et("placa-xz"), Js();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, n = 10, o = 16, l = 16, s = "simply-supported", c = -10, a = 0.2, r = 3e7, f = 0.3, i = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][i]}]: ${t}\xD7${n}, ${o}\xD7${l} elem, BC=${s}, q=${c}, t=${a}`);
        const b = performance.now(), S = Uo({
          E: r,
          nu: f,
          thickness: a,
          meshLx: t,
          meshLy: n,
          meshNx: o,
          meshNy: l,
          bcType: s,
          pressure: c,
          theoryType: i
        }), $ = performance.now() - b;
        console.log(`Solved in ${$.toFixed(1)} ms`), console.log(`w_max = ${S.maxW.toExponential(6)}`), console.log(`w_center = ${(S.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${S.maxMxx.toExponential(4)}, Myy_max = ${S.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${S.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${S.maxQx.toExponential(4)}, Qy_max = ${S.maxQy.toExponential(4)}`);
        const y = S.nodeResults.map((z) => [
          z.x,
          z.y,
          0
        ]), p = S.elementResults.map((z) => [
          ...z.nodes
        ]);
        e.nodes.val = y, e.elements.val = p;
        const h = /* @__PURE__ */ new Map();
        S.nodeResults.forEach((z, P) => {
          h.set(P, [
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
        S.nodeResults.forEach((z, P) => {
          (z.x < 1e-10 || z.x > t - 1e-10 || z.y < 1e-10 || z.y > n - 1e-10) && I.set(P, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        });
        const A = /* @__PURE__ */ new Map();
        if (Math.abs(c) > 1e-30) {
          const z = c * t * n / y.length;
          y.forEach((P, k) => {
            I.has(k) || A.set(k, [
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
          loads: A
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const z = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
          S.elementResults.forEach((m, u) => {
            z.set(u, [
              m.Mxx,
              m.Mxx,
              m.Mxx
            ]), P.set(u, [
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
            bendingYY: P,
            bendingXY: k
          };
        }
        return setTimeout(() => wt(), 50), Qe(), S;
      },
      set(t, n) {
        Z[t] ? (Z[t].val = n, console.log(`${t} = ${n}`), sn(), Re()) : ft[t] ? (ft[t].val = n, console.log(`${t} = ${n}`), sn(), Re()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...Z,
          ...ft
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const n = {};
          for (const l in Z) n[l] = Z[l].val;
          for (const l in ft) n[l] = ft[l].val;
          n.plateTheory = Ce, n.supportType = xt;
          const o = uo()[T];
          return o && o[xt] && (n.supportLabel = o[xt].label), console.table(n), n;
        }
        if (Z[t]) return Z[t].val;
        if (ft[t]) return ft[t].val;
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
        }[t.toLowerCase()] || 3), Ce = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[Ce] || Ce}`), T.includes("placa") && (sn(), Re());
      },
      setBc(t) {
        const n = uo()[T];
        if (!n || n.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const o = n.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = o >= 0 ? o : 0;
        }
        xt = t, xt >= n.length && (xt = 0), console.log(`Apoyo: ${n[xt].label} \u2192 DOFs: [${n[xt].dofs.map((o) => o ? "1" : "0").join(",")}]`), sn(), Re();
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
      units(t, n) {
        t && (g = t), n && (R = n), M = Rn(g, R);
        const o = Le.querySelector("#cad3d-force-unit"), l = Le.querySelector("#cad3d-length-unit");
        return o && (o.textContent = g), l && (l.textContent = R), T && et(T), console.log(`Unidades: ${M.label} | E=${M.E.toExponential(3)} ${M.stress}`), M.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function cs() {
      return dl(M);
    }
    function ds() {
      return pl(M);
    }
    let ft = {};
    function et(t) {
      var _a2, _b, _c, _d;
      T = t, ia.val = true, xt = 0, xe && Co(), Z = {};
      const n = cs()[t];
      if (n) for (const l of n) Z[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      ft = {};
      const o = ds()[t];
      if (o) for (const l of o) ft[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a2 = Z.nVanosX) == null ? void 0 : _a2.val) ?? 2), s = Math.round(((_b = Z.nVanosY) == null ? void 0 : _b.val) ?? 2);
        re = Array(l).fill(M.defaultSpan), te = Array(s).fill(M.defaultSpan * 0.8);
        const c = Math.round(((_c = Z.nPisos) == null ? void 0 : _c.val) ?? 3), a = ((_d = Z.hPiso) == null ? void 0 : _d.val) ?? 3;
        q = Array(c).fill(a);
      }
      sn(), setTimeout(() => {
        ka(), Re();
      }, 50);
    }
    function le(t) {
      var _a2, _b;
      return ((_a2 = Z[t]) == null ? void 0 : _a2.val) ?? ((_b = ft[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function Re() {
      switch (T) {
        case "truss":
          ps();
          break;
        case "beams":
          fs();
          break;
        case "3d":
          us();
          break;
        case "frame": {
          const n = Math.round(le("nVanos")), o = le("spanV"), l = Math.round(le("nPisos")), s = le("hPiso");
          Ke.frame(Array(n).fill(o), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const n = le("Lvix") || 0, o = le("Lvdx") || 0, l = le("Lviy") || 0, s = le("Lvdy") || 0, c = Math.max(1, Math.round(le("nSubViga") || 3)), a = Math.max(1, Math.round(le("nSubCol") || 1)), r = le("hPiso"), f = q.length > 0 ? [
            ...q
          ] : Array(Math.round(le("nPisos"))).fill(r);
          Ke.building([
            ...re
          ], [
            ...te
          ], f, c, n, o, l, s, a);
          break;
        }
        case "galpon":
          Ke.galpon(le("span"), le("length"), le("height"), le("archRise"), Math.round(le("xDiv")), Math.round(le("yDiv")));
          break;
        case "barra":
          xa();
          break;
        case "placa-3q":
          ms();
          break;
        case "placa-q4":
          bs();
          break;
        case "losa-rect":
          gs();
          break;
        case "losa-plana":
          hs();
          break;
        case "viga-alta":
          xs();
          break;
        case "muro-contencion":
          vs();
          break;
        case "zapata":
          ys();
          break;
        case "placa-orificios":
          $s();
          break;
        case "col-placa":
          Ms();
          break;
        case "talud":
          ws();
          break;
        case "eiffel":
          _s();
          break;
        case "arco":
          Ds();
          break;
        case "puente":
          Bs();
          break;
        case "twisted":
          Hs();
          break;
        case "burj":
          js();
          break;
        case "opera":
          Ws();
          break;
        case "diagrid":
          Gs();
          break;
        case "muro-q4":
          Vo();
          break;
        case "viga-q4":
          Ys();
          break;
        case "placa-xz":
          Js();
          break;
      }
      if ((T === "frame" || T === "edificio" || T === "galpon") && e.nodeInputs) {
        const n = e.nodeInputs.val;
        n.supports && (e.nodeInputs.val = {
          supports: n.supports
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
        "placa-xz"
      ].includes(T)) {
        if (U.size > 0 || Y.size > 0 || H) {
          const n = e.elements.val, o = n.filter((l, s) => !(U.has(s) || Y.has(s) || H && !j.has(s)));
          o.length !== n.length && (e.elements.val = o);
        }
        setTimeout(() => {
          vn(), Fo();
        }, 30);
      }
    }
    function ps() {
      const t = le("span"), n = Math.round(le("divisions")), o = le("height"), l = t / n, s = [], c = [];
      for (let d = 0; d <= n; d++) s.push([
        l * d,
        0,
        0
      ]);
      for (let d = 0; d <= n; d++) s.push([
        l * d,
        0,
        o
      ]);
      const a = n + 1;
      for (let d = 0; d < n; d++) c.push([
        d,
        d + 1
      ]);
      for (let d = 0; d < n; d++) c.push([
        a + d,
        a + d + 1
      ]);
      for (let d = 0; d <= n; d++) c.push([
        d,
        a + d
      ]);
      for (let d = 0; d < n; d++) d < n / 2 ? c.push([
        d,
        a + d + 1
      ]) : c.push([
        a + d,
        d + 1
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
          Math.round(n),
          [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        ]
      ]), f = (le("CM") ?? 0) + (le("CV") ?? 0), i = /* @__PURE__ */ new Map();
      if (f !== 0) for (let d = 0; d <= n; d++) i.set(d, [
        0,
        0,
        f,
        0,
        0,
        0
      ]);
      e.nodes.val = s, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: r,
        loads: i
      }), Qe();
    }
    function fs() {
      const t = le("width"), n = le("height"), o = le("Ex") ?? 0, l = (le("CM") ?? 0) + (le("CV") ?? 0), s = Math.max(1, Math.round(le("nSub") || 4)), c = [
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          n
        ],
        [
          t,
          0,
          n
        ],
        [
          t,
          0,
          0
        ]
      ], a = [];
      a.push([
        0,
        1
      ], [
        2,
        3
      ]);
      const r = [
        0,
        0,
        n
      ], f = [
        t,
        0,
        n
      ];
      let i = 1;
      for (let b = 1; b < s; b++) {
        const S = b / s, $ = c.length;
        c.push([
          r[0] + (f[0] - r[0]) * S,
          r[1] + (f[1] - r[1]) * S,
          r[2] + (f[2] - r[2]) * S
        ]), a.push([
          i,
          $
        ]), i = $;
      }
      a.push([
        i,
        2
      ]);
      const d = /* @__PURE__ */ new Map();
      if (o !== 0 && l === 0) d.set(2, [
        o,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (l !== 0 && o === 0) for (let b = 1; b < c.length; b++) b === 0 || b === 3 || d.set(b, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (o !== 0 && l !== 0) for (let b = 1; b < c.length; b++) b === 0 || b === 3 || d.set(b, [
        b === 2 ? o : 0,
        0,
        l,
        0,
        0,
        0
      ]);
      e.nodes.val = c, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
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
      }), Qe();
    }
    function us() {
      const t = le("dx"), n = le("dy"), o = le("dz"), l = Math.round(le("stories")), s = Math.max(1, Math.round(le("nSub") || 3)), c = [];
      for (let p = 0; p <= l; p++) c.push([
        0,
        0,
        o * p
      ], [
        t,
        0,
        o * p
      ], [
        t,
        n,
        o * p
      ], [
        0,
        n,
        o * p
      ]);
      const a = c.length, r = [
        ...c
      ], f = [];
      for (let p = 0; p < l; p++) for (let h = 0; h < 4; h++) f.push([
        p * 4 + h,
        (p + 1) * 4 + h
      ]);
      for (let p = 0; p < l; p++) {
        const h = p * 4;
        f.push([
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
      const i = [];
      for (let p = 1; p <= l; p++) {
        const h = p * 4;
        i.push([
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
      for (const [p, h] of i) {
        const I = c[p], A = c[h];
        let z = p;
        for (let P = 1; P < s; P++) {
          const k = P / s, m = r.length;
          r.push([
            I[0] + (A[0] - I[0]) * k,
            I[1] + (A[1] - I[1]) * k,
            I[2] + (A[2] - I[2]) * k
          ]), f.push([
            z,
            m
          ]), z = m;
        }
        f.push([
          z,
          h
        ]);
      }
      const d = /* @__PURE__ */ new Map();
      for (let p = 0; p < 4; p++) d.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const b = le("Ex") ?? 0, S = (le("CM") ?? 0) + (le("CV") ?? 0), $ = a - 2, y = /* @__PURE__ */ new Map();
      if (b !== 0 && S === 0) y.set($, [
        b,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (S !== 0 && b === 0) for (let p = 0; p < r.length; p++) d.has(p) || y.set(p, [
        0,
        0,
        S,
        0,
        0,
        0
      ]);
      else if (b !== 0 && S !== 0) for (let p = 0; p < r.length; p++) d.has(p) || y.set(p, [
        p === $ ? b : 0,
        0,
        S,
        0,
        0,
        0
      ]);
      e.nodes.val = r, e.elements.val = f, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: y
      }), Qe();
    }
    function xa() {
      const t = le("L"), n = Math.round(le("nElem")), o = le("F"), l = t / n, s = [], c = [];
      for (let f = 0; f <= n; f++) s.push([
        l * f,
        0,
        0
      ]);
      for (let f = 0; f < n; f++) c.push([
        f,
        f + 1
      ]);
      const a = /* @__PURE__ */ new Map([
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
          n,
          [
            o,
            0,
            0,
            0,
            0,
            0
          ]
        ]
      ]);
      e.nodes.val = s, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: r
      }), Qe();
    }
    function ms() {
      const t = le("Lx") || 15, n = le("Ly") || 10, o = le("meshSize") || 0.5, l = le("q") || -3, s = le("t") || 1, c = le("E") || 3e7, a = le("nu") || 0.3, r = c / (2 * (1 + a)), f = Ce === 1 ? "Membrana" : Ce === 2 ? "Kirchhoff" : "Mindlin", { nodes: i, elements: d, boundaryIndices: b } = hn({
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
            n,
            0
          ],
          [
            0,
            n,
            0
          ]
        ],
        polygon: [
          0,
          1,
          2,
          3
        ],
        maxMeshSize: o
      }), S = t * n, $ = l * S / i.length, y = new Map(b.map((h) => [
        h,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), p = new Map(i.map((h, I) => [
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
      e.nodes.val = i, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: p
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
          s
        ])),
        poissonsRatios: new Map(d.map((h, I) => [
          I,
          a
        ])),
        shearModuli: new Map(d.map((h, I) => [
          I,
          r
        ]))
      });
      try {
        const h = kt(i, d, e.nodeInputs.val, e.elementInputs.val);
        h && e.deformOutputs && (e.deformOutputs.val = h);
        const I = gn(i, d, e.elementInputs.val, h);
        I && e.analyzeOutputs && (e.analyzeOutputs.val = I), console.log(`Plate 3Q [${f}]: ${i.length} nodes, ${d.length} triangles, t=${s}, E=${c}, \u03BD=${a}`);
      } catch (h) {
        console.warn("Plate 3Q analysis failed:", h.message);
      }
      setTimeout(() => wt(), 50), Qe();
    }
    function bs() {
      const t = le("Lx") || 10, n = le("Ly") || 10, o = Math.round(le("nx") || 16), l = Math.round(le("ny") || 16), s = le("t") || 0.2, c = le("q") || -10, a = le("E") || 3e7, r = le("nu") || 0.3, f = xt === 1 ? "clamped" : "simply-supported", d = {
        1: 2,
        2: 1,
        3: 0
      }[Ce] ?? 0;
      return Ke.plateQ4(t, n, o, l, f, c, s, a, r, d);
    }
    function gs() {
      const t = le("a") || 6, n = le("b") || 4, o = Math.round(le("nx") || 12), l = Math.round(le("ny") || 8), s = le("t") || 0.1, c = le("q") || -10, a = le("E") || 35e6, r = le("nu") || 0.15, i = {
        1: 2,
        2: 1,
        3: 0
      }[Ce] ?? 0, d = Ke.plateQ4(t, n, o, l, "simply-supported", c, s, a, r, i), b = a * s * s * s / (12 * (1 - r * r));
      let S = 0;
      for (let $ = 1; $ <= 19; $ += 2) for (let y = 1; y <= 19; y += 2) {
        const p = $ * $ / (t * t) + y * y / (n * n);
        S += 1 / ($ * y * p * p);
      }
      if (S *= 16 * Math.abs(c) / (Math.PI ** 6 * b), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${S.toExponential(6)}`), d) {
        const $ = Math.abs((Math.abs(d.centerW || 0) - S) / S * 100);
        console.log(`   WASM w_center = ${(d.centerW || 0).toExponential(6)}, error = ${$.toFixed(2)}%`);
      }
      return d;
    }
    function hs() {
      const t = le("t") || 0.2, n = le("q") || -10, o = le("E") || 35e6, l = le("nu") || 0.2, s = le("meshSize") || 0.6, c = [
        3.6,
        4.2,
        4.2,
        3.6
      ], a = [
        3,
        3.6,
        3
      ], r = c.reduce((x, w) => x + w, 0), f = a.reduce((x, w) => x + w, 0), i = [
        0
      ];
      for (const x of c) i.push(i[i.length - 1] + x);
      const d = [
        0
      ];
      for (const x of a) d.push(d[d.length - 1] + x);
      const b = Math.max(2, Math.round(r / s)), S = Math.max(2, Math.round(f / s)), $ = r / b, y = f / S, p = [];
      for (let x = 0; x <= S; x++) for (let w = 0; w <= b; w++) p.push([
        w * $,
        x * y
      ]);
      const h = [], I = /* @__PURE__ */ new Set();
      for (const x of i) for (const w of d) {
        let v = 1 / 0, F = 0;
        for (let X = 0; X < p.length; X++) {
          const V = Math.hypot(p[X][0] - x, p[X][1] - w);
          V < v && (v = V, F = X);
        }
        I.has(F) || (I.add(F), h.push({
          node: F,
          dof: 0,
          k: 1e15
        }));
      }
      const z = {
        1: 2,
        2: 1,
        3: 0
      }[Ce] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][z]}]: ${r}\xD7${f}m, ${b}\xD7${S} elem, ${I.size} columnas`);
      const P = performance.now(), k = Uo({
        E: o,
        nu: l,
        thickness: t,
        meshLx: r,
        meshLy: f,
        meshNx: b,
        meshNy: S,
        bcType: "none",
        pressure: n,
        theoryType: z,
        springs: h
      }), m = performance.now() - P;
      console.log(`Solved in ${m.toFixed(1)} ms, w_max = ${k.maxW.toExponential(4)}`);
      const u = k.nodeResults.map((x) => [
        x.x,
        x.y,
        0
      ]), E = k.elementResults.map((x) => [
        ...x.nodes
      ]);
      e.nodes.val = u, e.elements.val = E;
      const L = /* @__PURE__ */ new Map();
      k.nodeResults.forEach((x, w) => {
        L.set(w, [
          0,
          0,
          x.w,
          x.bx,
          x.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: L
      });
      const O = /* @__PURE__ */ new Map();
      for (const x of I) O.set(x, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const W = /* @__PURE__ */ new Map();
      if (Math.abs(n) > 1e-30) {
        const x = n * r * f / u.length;
        u.forEach((w, v) => {
          O.has(v) || W.set(v, [
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
        supports: O,
        loads: W
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const x = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
        k.elementResults.forEach((F, X) => {
          x.set(X, [
            F.Mxx,
            F.Mxx,
            F.Mxx
          ]), w.set(X, [
            F.Myy,
            F.Myy,
            F.Myy
          ]), v.set(X, [
            F.Mxy,
            F.Mxy,
            F.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: x,
          bendingYY: w,
          bendingXY: v
        };
      }
      setTimeout(() => wt(), 50), Qe();
    }
    function xs() {
      const t = le("L") || 4, n = le("H") || 2, o = le("t") || 0.1, l = le("E") || 2e7, s = le("nu") || 0.2, c = l / (2 * (1 + s)), a = le("q") || -100, r = le("b") || 0.8, f = le("meshSize") || 0.2, { nodes: i, elements: d, boundaryIndices: b } = hn({
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
            n,
            0
          ],
          [
            0,
            n,
            0
          ]
        ],
        polygon: [
          0,
          1,
          2,
          3
        ],
        maxMeshSize: f
      }), S = i, $ = 0.4, y = /* @__PURE__ */ new Map();
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
      const p = (t - r) / 2, h = p + r, I = [];
      for (let m = 0; m < S.length; m++) if (Math.abs(S[m][1] - n) < 1e-6) {
        const u = S[m][0];
        u >= p - 1e-6 && u <= h + 1e-6 && I.push(m);
      }
      const A = a * r / Math.max(I.length, 1), z = /* @__PURE__ */ new Map();
      for (const m of I) z.set(m, [
        0,
        A,
        0,
        0,
        0,
        0
      ]);
      const P = {
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
          o
        ])),
        poissonsRatios: new Map(d.map((m, u) => [
          u,
          s
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
        const m = kt(S, d, k, P), u = gn(S, d, P, m), E = S.map((O) => [
          O[0],
          0,
          O[1]
        ]);
        if (e.nodes.val = E, e.elements.val = d, m && m.deformations) {
          const O = /* @__PURE__ */ new Map();
          m.deformations.forEach((W, x) => {
            O.set(x, [
              W[0],
              W[2],
              W[1],
              W[3],
              W[5],
              W[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: O
          });
        }
        if (e.nodeInputs) {
          const O = /* @__PURE__ */ new Map();
          y.forEach((x, w) => O.set(w, x));
          const W = /* @__PURE__ */ new Map();
          z.forEach((x, w) => W.set(w, [
            x[0],
            x[2],
            x[1],
            x[3],
            x[5],
            x[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: O,
            loads: W
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let L = 0;
        m && m.deformations && m.deformations.forEach((O) => {
          const W = Math.sqrt(O[0] * O[0] + O[1] * O[1] + O[2] * O[2]);
          L = Math.max(L, W);
        }), console.log(`Viga Alta: ${S.length} nodos, ${d.length} triangulos`), console.log(`  L=${t}, H=${n}, t=${o}, E=${l}, nu=${s}`), console.log(`  Carga: q=${a} kN/m sobre ${r}m central`), console.log(`  max|u| = ${L.toExponential(4)}`);
      } catch (m) {
        console.warn("Viga Alta analysis failed:", m.message);
      }
      setTimeout(() => wt(), 50), Qe();
    }
    function vs() {
      const t = le("H") || 4, n = le("B") || 3, o = le("tw") || 0.3, l = le("tb") || 0.4, s = le("meshSize") || 0.2, c = le("E") || 25e6, a = le("nu") || 0.2, r = c / (2 * (1 + a)), f = le("gamma") || 18, i = le("Ka") || 0.33, d = le("Es") || 5e4, b = le("nus") || 0.3, S = d / (2 * (1 + b)), $ = le("kn") || 1e6, y = le("ks") || 1e4, p = le("gammaW") || 9.81, h = le("Hw") || 3.5, I = le("qs") || 0, A = xt, z = n * 0.3, P = n * 0.7, k = [
        [
          -z,
          0,
          0
        ],
        [
          P,
          0,
          0
        ],
        [
          P,
          l,
          0
        ],
        [
          o,
          l,
          0
        ],
        [
          o,
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
      if (A === 0) {
        const w = hn({
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
          maxMeshSize: s
        });
        m = w.nodes, u = w.elements;
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
          const X = m[F][0], V = m[F][1];
          Math.abs(X - o) < s * 0.6 && V >= l - 1e-6 && v.push({
            idx: F,
            y: V
          });
        }
        v.sort((F, X) => F.y - X.y);
        for (let F = 0; F < v.length; F++) {
          const { idx: X, y: V } = v[F], ae = l + t - V, Q = i * f * ae + i * I;
          let K = s;
          F > 0 && F < v.length - 1 ? K = (v[F + 1].y - v[F - 1].y) / 2 : F === 0 && v.length > 1 ? K = (v[1].y - v[0].y) / 2 : F === v.length - 1 && v.length > 1 && (K = (v[F].y - v[F - 1].y) / 2);
          const pe = Q * K;
          Math.abs(pe) > 1e-10 && L.set(X, [
            pe,
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
            c
          ])),
          elasticitiesOrthogonal: new Map(u.map((F, X) => [
            X,
            c
          ])),
          thicknesses: new Map(u.map((F, X) => [
            X,
            o
          ])),
          poissonsRatios: new Map(u.map((F, X) => [
            X,
            a
          ])),
          shearModuli: new Map(u.map((F, X) => [
            X,
            r
          ]))
        };
      } else if (A === 1 || A === 2) {
        const w = P, v = l + t;
        if (A === 2) {
          const F = [
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
              o,
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
          ], X = Math.max(3, Math.ceil((v - l) / s)), V = [];
          for (let se = 0; se <= X; se++) V.push([
            o,
            l + se * (v - l) / X,
            0
          ]);
          const ae = hn({
            points: [
              ...F,
              ...V
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
            maxMeshSize: s
          });
          m = ae.nodes, u = ae.elements;
          const Q = s * 0.4, K = [];
          for (let se = 0; se < m.length; se++) {
            const Se = m[se][0], je = m[se][1];
            Math.abs(Se - o) < Q && je >= l - Q && K.push(se);
          }
          K.sort((se, Se) => m[se][1] - m[Se][1]);
          const pe = [
            K[0]
          ];
          for (let se = 1; se < K.length; se++) {
            const Se = m[K[se]][1] - m[pe[pe.length - 1]][1];
            Math.abs(Se) > s * 0.05 && pe.push(K[se]);
          }
          K.length = 0, K.push(...pe);
          const ce = /* @__PURE__ */ new Map();
          for (const se of K) {
            const Se = m.length;
            m.push([
              m[se][0],
              m[se][1],
              m[se][2]
            ]), ce.set(se, Se);
          }
          const Ie = u.length, Pe = [];
          for (let se = 0; se < Ie; se++) {
            const Se = u[se], je = (m[Se[0]][0] + m[Se[1]][0] + m[Se[2]][0]) / 3, rt = (m[Se[0]][1] + m[Se[1]][1] + m[Se[2]][1]) / 3, ct = je >= -z && je <= P && rt >= 0 && rt <= l, Ct = je >= 0 && je <= o && rt >= l && rt <= l + t, _t = ct || Ct;
            if (Pe.push(!_t), !_t) for (let Rt = 0; Rt < Se.length; Rt++) {
              const Dt = ce.get(Se[Rt]);
              Dt !== void 0 && (Se[Rt] = Dt);
            }
          }
          const _ = u.length;
          for (let se = 0; se < K.length - 1; se++) {
            const Se = K[se], je = K[se + 1], rt = ce.get(Se), ct = ce.get(je);
            u.push([
              je,
              Se,
              rt,
              ct
            ]);
          }
          const ue = u.length - _, oe = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map();
          for (let se = 0; se < Ie; se++) Pe[se] ? (oe.set(se, d), fe.set(se, d), me.set(se, b), we.set(se, S), ee.set(se, 1)) : (oe.set(se, c), fe.set(se, c), me.set(se, a), we.set(se, r), ee.set(se, 1));
          for (let se = _; se < u.length; se++) oe.set(se, $), fe.set(se, 0), me.set(se, 0), we.set(se, y), ee.set(se, 0);
          O = {
            elasticities: oe,
            elasticitiesOrthogonal: fe,
            thicknesses: ee,
            poissonsRatios: me,
            shearModuli: we
          };
          for (let se = 0; se < m.length; se++) {
            const Se = m[se][0], je = m[se][1];
            Math.abs(je) < 1e-6 ? E.set(se, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Se - w) < s * 0.1 && E.set(se, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let se = 0; se < Ie; se++) {
            if (!Pe[se]) continue;
            const Se = u[se], je = m[Se[0]], rt = m[Se[1]], ct = m[Se[2]], Ct = Math.abs((rt[0] - je[0]) * (ct[1] - je[1]) - (ct[0] - je[0]) * (rt[1] - je[1])) / 2, _t = -f * Ct / 3;
            for (const Rt of Se) {
              const Dt = L.get(Rt) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Dt[1] += _t, L.set(Rt, Dt);
            }
          }
          if (I > 0) {
            const se = [];
            for (let Se = 0; Se < m.length; Se++) {
              const je = m[Se][0], rt = m[Se][1];
              Math.abs(rt - v) < s * 0.1 && je > o - 1e-6 && se.push({
                idx: Se,
                x: je
              });
            }
            se.sort((Se, je) => Se.x - je.x);
            for (let Se = 0; Se < se.length; Se++) {
              let je = s;
              Se > 0 && Se < se.length - 1 ? je = (se[Se + 1].x - se[Se - 1].x) / 2 : Se === 0 && se.length > 1 ? je = (se[1].x - se[0].x) / 2 : Se === se.length - 1 && se.length > 1 && (je = (se[Se].x - se[Se - 1].x) / 2);
              const rt = -I * je, ct = L.get(se[Se].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ct[1] += rt, L.set(se[Se].idx, ct);
            }
          }
          console.log(`  Interfaz Goodman: ${K.length} nodos interfaz, ${ue} elem interfaz, kn=${$}, ks=${y}`);
        } else {
          const F = [
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
              o,
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
              o,
              l,
              0
            ]
          ], V = hn({
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
            maxMeshSize: s
          });
          m = V.nodes, u = V.elements;
          const ae = (_) => {
            const ue = (m[_[0]][0] + m[_[1]][0] + m[_[2]][0]) / 3, oe = (m[_[0]][1] + m[_[1]][1] + m[_[2]][1]) / 3, fe = ue >= -z && ue <= P && oe >= 0 && oe <= l, ee = ue >= 0 && ue <= o && oe >= l && oe <= l + t;
            return fe || ee;
          }, Q = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), Pe = [];
          for (let _ = 0; _ < u.length; _++) {
            const ue = ae(u[_]);
            Pe.push(!ue), ue ? (Q.set(_, c), K.set(_, c), ce.set(_, a), Ie.set(_, r), pe.set(_, 1)) : (Q.set(_, d), K.set(_, d), ce.set(_, b), Ie.set(_, S), pe.set(_, 1));
          }
          O = {
            elasticities: Q,
            elasticitiesOrthogonal: K,
            thicknesses: pe,
            poissonsRatios: ce,
            shearModuli: Ie
          };
          for (let _ = 0; _ < m.length; _++) {
            const ue = m[_][0], oe = m[_][1];
            Math.abs(oe) < 1e-6 ? E.set(_, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(ue - w) < s * 0.1 && E.set(_, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let _ = 0; _ < u.length; _++) {
            if (!Pe[_]) continue;
            const ue = u[_], oe = m[ue[0]], fe = m[ue[1]], ee = m[ue[2]], me = Math.abs((fe[0] - oe[0]) * (ee[1] - oe[1]) - (ee[0] - oe[0]) * (fe[1] - oe[1])) / 2, we = -f * me / 3;
            for (const se of ue) {
              const Se = L.get(se) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Se[1] += we, L.set(se, Se);
            }
          }
          if (I > 0) {
            const _ = [];
            for (let ue = 0; ue < m.length; ue++) {
              const oe = m[ue][0], fe = m[ue][1];
              Math.abs(fe - v) < s * 0.1 && oe > o - 1e-6 && _.push({
                idx: ue,
                x: oe
              });
            }
            _.sort((ue, oe) => ue.x - oe.x);
            for (let ue = 0; ue < _.length; ue++) {
              let oe = s;
              ue > 0 && ue < _.length - 1 ? oe = (_[ue + 1].x - _[ue - 1].x) / 2 : ue === 0 && _.length > 1 ? oe = (_[1].x - _[0].x) / 2 : ue === _.length - 1 && _.length > 1 && (oe = (_[ue].x - _[ue - 1].x) / 2);
              const fe = -I * oe, ee = L.get(_[ue].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ee[1] += fe, L.set(_[ue].idx, ee);
            }
          }
        }
      }
      if (A === 3) {
        const w = hn({
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
          maxMeshSize: s
        });
        m = w.nodes, u = w.elements;
        for (let ae = 0; ae < m.length; ae++) Math.abs(m[ae][1]) < 1e-6 && E.set(ae, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = l + t, F = Math.min(h, t), X = v - F, V = [];
        for (let ae = 0; ae < m.length; ae++) {
          const Q = m[ae][0], K = m[ae][1];
          Math.abs(Q - o) < s * 0.6 && K >= l - 1e-6 && V.push({
            idx: ae,
            y: K
          });
        }
        V.sort((ae, Q) => ae.y - Q.y);
        for (let ae = 0; ae < V.length; ae++) {
          const { idx: Q, y: K } = V[ae], pe = Math.max(0, v - K);
          if (pe <= 0 || K < X - 1e-6) continue;
          const ce = Math.min(pe, F), Ie = p * ce;
          let Pe = s;
          ae > 0 && ae < V.length - 1 ? Pe = (V[ae + 1].y - V[ae - 1].y) / 2 : ae === 0 && V.length > 1 ? Pe = (V[1].y - V[0].y) / 2 : ae === V.length - 1 && V.length > 1 && (Pe = (V[ae].y - V[ae - 1].y) / 2);
          const _ = Ie * Pe;
          Math.abs(_) > 1e-10 && L.set(Q, [
            _,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        O = {
          elasticities: new Map(u.map((ae, Q) => [
            Q,
            c
          ])),
          elasticitiesOrthogonal: new Map(u.map((ae, Q) => [
            Q,
            c
          ])),
          thicknesses: new Map(u.map((ae, Q) => [
            Q,
            o
          ])),
          poissonsRatios: new Map(u.map((ae, Q) => [
            Q,
            a
          ])),
          shearModuli: new Map(u.map((ae, Q) => [
            Q,
            r
          ]))
        };
      }
      const W = {
        supports: E,
        loads: L
      }, x = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const w = kt(m, u, W, O), v = u.filter((pe) => pe.length === 3), F = {};
        for (const pe of Object.keys(O)) {
          const ce = O[pe];
          if (ce && ce instanceof Map) {
            const Ie = /* @__PURE__ */ new Map();
            let Pe = 0;
            for (let _ = 0; _ < u.length; _++) u[_].length === 3 && (ce.has(_) && Ie.set(Pe, ce.get(_)), Pe++);
            F[pe] = Ie;
          }
        }
        const X = gn(m, v, F, w), V = m.map((pe) => [
          pe[0],
          0,
          pe[1]
        ]);
        if (e.nodes.val = V, e.elements.val = v, w && w.deformations) {
          const pe = /* @__PURE__ */ new Map();
          w.deformations.forEach((ce, Ie) => {
            pe.set(Ie, [
              ce[0],
              ce[2],
              ce[1],
              ce[3],
              ce[5],
              ce[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: pe
          });
        }
        const ae = /* @__PURE__ */ new Map();
        E.forEach((pe, ce) => ae.set(ce, pe));
        const Q = /* @__PURE__ */ new Map();
        L.forEach((pe, ce) => Q.set(ce, [
          pe[0],
          pe[2],
          pe[1],
          pe[3],
          pe[5],
          pe[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: ae,
          loads: Q
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let K = 0;
        w && w.deformations && w.deformations.forEach((pe) => {
          const ce = Math.sqrt(pe[0] * pe[0] + pe[1] * pe[1] + pe[2] * pe[2]);
          K = Math.max(K, ce);
        }), console.log(`Muro Contencion [${x[A]}]: ${m.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, B=${n}, tw=${o}, tb=${l}, Ka=${i}, gamma=${f}, qs=${I}`), A === 1 && console.log(`  Es=${d}, nus=${b}`), A === 2 && console.log(`  Es=${d}, nus=${b}, kn=${$}, ks=${y}`), A === 3 && console.log(`  gammaW=${p}, Hw=${h}`), console.log(`  max|u| = ${K.toExponential(4)}`);
      } catch (w) {
        console.warn("Muro Contencion failed:", w.message);
      }
      setTimeout(() => wt(), 50), Qe();
    }
    function ys() {
      const t = le("Lx") || 2, n = le("Ly") || 2, o = le("t") || 0.5, l = le("colA") || 0.4, s = le("colH") || 1.5, c = Math.round(le("nx") || 8), a = Math.round(le("ny") || 8), r = le("E") || 25e6, f = le("nu") || 0.2, i = le("P") || -500, d = le("Mx") || 0, b = le("My") || 0, S = le("ks") || 2e4, $ = t / c, y = n / a, p = t / 2, h = n / 2, I = l / 2, A = [];
      for (let E = 0; E <= a; E++) for (let L = 0; L <= c; L++) {
        const O = E * (c + 1) + L;
        let W = $, x = y;
        (L === 0 || L === c) && (W = $ / 2), (E === 0 || E === a) && (x = y / 2), A.push({
          node: O,
          dof: 0,
          k: S * W * x
        });
      }
      let z = 0;
      for (let E = 0; E <= a; E++) for (let L = 0; L <= c; L++) Math.abs(L * $ - p) <= I + 1e-6 && Math.abs(E * y - h) <= I + 1e-6 && z++;
      const P = i / Math.max(z, 1), k = [];
      for (let E = 0; E <= a; E++) for (let L = 0; L <= c; L++) {
        const O = L * $, W = E * y;
        Math.abs(O - p) <= I + 1e-6 && Math.abs(W - h) <= I + 1e-6 && k.push({
          node: E * (c + 1) + L,
          dof: 0,
          value: P
        });
      }
      if (Math.abs(d) > 1e-6) {
        const E = I > 1e-6 ? I : y, L = d / E;
        for (let O = 0; O <= a; O++) for (let W = 0; W <= c; W++) {
          const x = W * $, w = O * y;
          if (Math.abs(x - p) <= I + 1e-6 && Math.abs(w - h) <= I + 1e-6) {
            const v = w - h;
            if (Math.abs(v) > 1e-6) {
              const F = v > 0 ? 1 : -1;
              k.push({
                node: O * (c + 1) + W,
                dof: 0,
                value: F * L / z * 2
              });
            }
          }
        }
      }
      if (Math.abs(b) > 1e-6) {
        const E = I > 1e-6 ? I : $, L = b / E;
        for (let O = 0; O <= a; O++) for (let W = 0; W <= c; W++) {
          const x = W * $, w = O * y;
          if (Math.abs(x - p) <= I + 1e-6 && Math.abs(w - h) <= I + 1e-6) {
            const v = x - p;
            if (Math.abs(v) > 1e-6) {
              const F = v > 0 ? 1 : -1;
              k.push({
                node: O * (c + 1) + W,
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
      }[Ce] ?? 1;
      console.log(`Zapata: ${t}x${n}m, t=${o}m, ${c}x${a} elem`), console.log(`  col=${l}m, P=${i}, Mx=${d}, My=${b}, ks=${S}`);
      try {
        const E = Uo({
          E: r,
          nu: f,
          thickness: o,
          meshLx: t,
          meshLy: n,
          meshNx: c,
          meshNy: a,
          bcType: "none",
          pressure: 0,
          theoryType: u,
          springs: A,
          pointLoads: k
        });
        console.log(`  Solved: w_max = ${E.maxW.toExponential(4)}`);
        const L = E.nodeResults.map((X) => [
          X.x,
          X.y,
          0
        ]), O = L.length;
        L.push([
          p - I,
          h - I,
          0
        ]), L.push([
          p + I,
          h - I,
          0
        ]), L.push([
          p + I,
          h + I,
          0
        ]), L.push([
          p - I,
          h + I,
          0
        ]), L.push([
          p - I,
          h - I,
          s
        ]), L.push([
          p + I,
          h - I,
          s
        ]), L.push([
          p + I,
          h + I,
          s
        ]), L.push([
          p - I,
          h + I,
          s
        ]);
        const W = E.elementResults.map((X) => [
          ...X.nodes
        ]);
        W.push([
          O,
          O + 4
        ]), W.push([
          O + 1,
          O + 5
        ]), W.push([
          O + 2,
          O + 6
        ]), W.push([
          O + 3,
          O + 7
        ]), W.push([
          O + 4,
          O + 5
        ]), W.push([
          O + 5,
          O + 6
        ]), W.push([
          O + 6,
          O + 7
        ]), W.push([
          O + 7,
          O + 4
        ]), W.push([
          O,
          O + 1
        ]), W.push([
          O + 1,
          O + 2
        ]), W.push([
          O + 2,
          O + 3
        ]), W.push([
          O + 3,
          O
        ]), e.nodes.val = L, e.elements.val = W;
        const x = /* @__PURE__ */ new Map();
        E.nodeResults.forEach((X, V) => {
          x.set(V, [
            0,
            0,
            X.w,
            X.bx,
            X.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: x
        });
        const w = /* @__PURE__ */ new Map();
        E.nodeResults.forEach((X, V) => {
          const ae = X.x, Q = X.y;
          (ae < 1e-6 || ae > t - 1e-6 || Q < 1e-6 || Q > n - 1e-6) && w.set(V, [
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
          supports: w,
          loads: v
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const X = E.elementResults.length, V = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map();
          E.elementResults.forEach((K, pe) => {
            V.set(pe, [
              K.Mxx,
              K.Mxx,
              K.Mxx
            ]), ae.set(pe, [
              K.Myy,
              K.Myy,
              K.Myy
            ]), Q.set(pe, [
              K.Mxy,
              K.Mxy,
              K.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: V,
            bendingYY: ae,
            bendingXY: Q
          };
        }
        const F = Ze();
        F && (F.settings.shellResults.val = "bendingXX");
      } catch (E) {
        console.warn("Zapata solver failed:", E.message);
      }
      setTimeout(() => wt(), 50), Qe();
    }
    function $s() {
      const t = le("Lx") || 0.4, n = le("Ly") || 0.4, o = le("t") || 0.025, l = le("dBolt") || 0.022, s = le("sx") || 0.28, c = le("sy") || 0.28, a = le("colA") || 0.2, r = le("meshSize") || 8e-3, f = le("E") || 2e8, i = le("nu") || 0.3, d = f / (2 * (1 + i)), b = le("P") || -200, S = Math.round(le("nBolts") || 4), $ = t / 2, y = n / 2, p = l / 2, h = a / 2, I = [];
      S >= 4 && (I.push([
        $ - s / 2,
        y - c / 2
      ]), I.push([
        $ + s / 2,
        y - c / 2
      ]), I.push([
        $ + s / 2,
        y + c / 2
      ]), I.push([
        $ - s / 2,
        y + c / 2
      ])), S >= 6 && (I.push([
        $,
        y - c / 2
      ]), I.push([
        $,
        y + c / 2
      ])), S >= 8 && (I.push([
        $ - s / 2,
        y
      ]), I.push([
        $ + s / 2,
        y
      ]));
      const { nodes: A, elements: z } = hn({
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
            n,
            0
          ],
          [
            0,
            n,
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
      }), P = (x, w) => {
        for (const [v, F] of I) if ((x - v) * (x - v) + (w - F) * (w - F) < p * p) return true;
        return false;
      }, k = z.filter((x) => {
        const w = (A[x[0]][0] + A[x[1]][0] + A[x[2]][0]) / 3, v = (A[x[0]][1] + A[x[1]][1] + A[x[2]][1]) / 3;
        return !P(w, v);
      }), m = A, u = /* @__PURE__ */ new Map();
      for (let x = 0; x < m.length; x++) {
        const w = m[x][0], v = m[x][1];
        for (const [F, X] of I) {
          const V = Math.sqrt((w - F) * (w - F) + (v - X) * (v - X));
          V >= p * 0.7 && V <= p * 1.5 && u.set(x, [
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
      for (let x = 0; x < m.length; x++) {
        const w = m[x][0], v = m[x][1];
        Math.abs(w - $) <= h && Math.abs(v - y) <= h && L++;
      }
      const O = b / Math.max(L, 1);
      for (let x = 0; x < m.length; x++) {
        const w = m[x][0], v = m[x][1];
        if (Math.abs(w - $) <= h && Math.abs(v - y) <= h) {
          const F = E.get(x) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          F[2] += O, E.set(x, F);
        }
      }
      const W = {
        elasticities: new Map(k.map((x, w) => [
          w,
          f
        ])),
        elasticitiesOrthogonal: new Map(k.map((x, w) => [
          w,
          f
        ])),
        thicknesses: new Map(k.map((x, w) => [
          w,
          o
        ])),
        poissonsRatios: new Map(k.map((x, w) => [
          w,
          i
        ])),
        shearModuli: new Map(k.map((x, w) => [
          w,
          d
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${n * 1e3}mm, t=${o * 1e3}mm, ${S} pernos d=${l * 1e3}mm`), console.log(`  P=${b} kN, col=${a * 1e3}mm, mesh=${r * 1e3}mm`), console.log(`  ${k.length} triangulos, ${m.length} nodos`);
      try {
        const x = kt(m, k, {
          supports: u,
          loads: E
        }, W), w = gn(m, k, W, x);
        e.nodes.val = m, e.elements.val = k, x && e.deformOutputs && (e.deformOutputs.val = x), e.nodeInputs && (e.nodeInputs.val = {
          supports: u,
          loads: E
        }), e.elementInputs && (e.elementInputs.val = {}), w && e.analyzeOutputs && (e.analyzeOutputs.val = w);
        let v = 0;
        x && x.deformations && x.deformations.forEach((F) => {
          const X = Math.sqrt(F[0] * F[0] + F[1] * F[1] + F[2] * F[2]);
          v = Math.max(v, X);
        }), console.log(`  max|u| = ${v.toExponential(4)}`);
      } catch (x) {
        console.warn("Placa Base failed:", x.message);
      }
      setTimeout(() => wt(), 50), Qe();
    }
    function Ms() {
      const t = le("colB") || 0.3, n = le("colH") || 0.3, o = le("colT") || 8e-3, l = le("colLen") || 1.5, s = le("Lx") || 0.45, c = le("Ly") || 0.45, a = le("tPlaca") || 0.025, r = le("dBolt") || 0.022, f = le("sx") || 0.32, i = le("sy") || 0.32, d = Math.round(le("nSubColV") || 6), b = Math.round(le("nSubColH") || 4), S = Math.round(le("nSubPlaca") || 10), $ = le("E") || 2e8, y = le("nu") || 0.3, p = $ / (2 * (1 + y)), h = le("P") || -300, I = s / 2, A = c / 2, z = r / 2, P = t / 2, k = n / 2, m = [], u = [], E = S, L = s / E, O = c / E, W = (fe, ee) => ee * (E + 1) + fe;
      for (let fe = 0; fe <= E; fe++) for (let ee = 0; ee <= E; ee++) m.push([
        ee * L,
        fe * O,
        0
      ]);
      const x = [
        [
          I - f / 2,
          A - i / 2
        ],
        [
          I + f / 2,
          A - i / 2
        ],
        [
          I + f / 2,
          A + i / 2
        ],
        [
          I - f / 2,
          A + i / 2
        ]
      ], w = (fe, ee) => {
        for (const [me, we] of x) if ((fe - me) * (fe - me) + (ee - we) * (ee - we) < z * z) return true;
        return false;
      }, v = u.length;
      for (let fe = 0; fe < E; fe++) for (let ee = 0; ee < E; ee++) {
        const me = (ee + 0.5) * L, we = (fe + 0.5) * O;
        w(me, we) || u.push([
          W(ee, fe),
          W(ee + 1, fe),
          W(ee + 1, fe + 1),
          W(ee, fe + 1)
        ]);
      }
      const F = u.length - v, X = d, V = b, ae = [
        [
          I - P,
          A - k
        ],
        [
          I + P,
          A - k
        ],
        [
          I + P,
          A + k
        ],
        [
          I - P,
          A + k
        ]
      ], Q = u.length, K = [
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
      ], pe = (fe, ee) => {
        for (let me = 0; me < (E + 1) * (E + 1); me++) if (Math.abs(m[me][0] - fe) < L * 0.3 && Math.abs(m[me][1] - ee) < O * 0.3 && Math.abs(m[me][2]) < 1e-6) return me;
        return -1;
      };
      for (const [fe, ee] of K) {
        const [me, we] = ae[fe], [se, Se] = ae[ee], je = [];
        for (let rt = 0; rt <= X; rt++) {
          const ct = [], Ct = rt / X * l;
          for (let _t = 0; _t <= V; _t++) {
            const Rt = _t / V, Dt = me + Rt * (se - me), Sn = we + Rt * (Se - we);
            if (rt === 0) {
              const Vt = pe(Dt, Sn);
              if (Vt >= 0) {
                ct.push(Vt);
                continue;
              }
            }
            let an = -1;
            for (let Vt = 0; Vt < m.length; Vt++) if (Math.abs(m[Vt][0] - Dt) < 1e-6 && Math.abs(m[Vt][1] - Sn) < 1e-6 && Math.abs(m[Vt][2] - Ct) < 1e-6) {
              an = Vt;
              break;
            }
            an >= 0 ? ct.push(an) : (ct.push(m.length), m.push([
              Dt,
              Sn,
              Ct
            ]));
          }
          je.push(ct);
        }
        for (let rt = 0; rt < X; rt++) for (let ct = 0; ct < V; ct++) u.push([
          je[rt][ct],
          je[rt][ct + 1],
          je[rt + 1][ct + 1],
          je[rt + 1][ct]
        ]);
      }
      const ce = u.length - Q, Ie = /* @__PURE__ */ new Map();
      for (let fe = 0; fe < (E + 1) * (E + 1); fe++) {
        const ee = m[fe][0], me = m[fe][1];
        for (const [we, se] of x) {
          const Se = Math.sqrt((ee - we) * (ee - we) + (me - se) * (me - se));
          Se >= z * 0.5 && Se <= z * 2 && Ie.set(fe, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const Pe = /* @__PURE__ */ new Map(), _ = [];
      for (let fe = 0; fe < m.length; fe++) Math.abs(m[fe][2] - l) < 1e-6 && _.push(fe);
      const ue = h / Math.max(_.length, 1);
      for (const fe of _) Pe.set(fe, [
        0,
        0,
        ue,
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
      for (let fe = v; fe < v + F; fe++) oe.elasticities.set(fe, $), oe.poissonsRatios.set(fe, y), oe.thicknesses.set(fe, a), oe.shearModuli.set(fe, p);
      for (let fe = Q; fe < Q + ce; fe++) oe.elasticities.set(fe, $), oe.poissonsRatios.set(fe, y), oe.thicknesses.set(fe, o), oe.shearModuli.set(fe, p);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${n * 1e3}x${o * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${c * 1e3}mm, t=${a * 1e3}mm, 4 pernos d=${r * 1e3}mm`), console.log(`  ${F} Q4 placa + ${ce} Q4 columna = ${u.length} total`), console.log(`  ${m.length} nodos, P=${h} kN`);
      try {
        const fe = kt(m, u, {
          supports: Ie,
          loads: Pe
        }, oe), ee = gn(m, u, oe, fe);
        e.nodes.val = m, e.elements.val = u, fe && e.deformOutputs && (e.deformOutputs.val = fe), e.nodeInputs && (e.nodeInputs.val = {
          supports: Ie,
          loads: Pe
        }), e.elementInputs && (e.elementInputs.val = oe), ee && e.analyzeOutputs && (e.analyzeOutputs.val = ee);
        let me = 0;
        (fe == null ? void 0 : fe.deformations) && fe.deformations.forEach((we) => {
          const se = Math.sqrt(we[0] * we[0] + we[1] * we[1] + we[2] * we[2]);
          me = Math.max(me, se);
        }), console.log(`  max|u| = ${me.toExponential(4)}`);
      } catch (fe) {
        console.warn("Col+Placa failed:", fe.message), e.nodes.val = m, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
          supports: Ie,
          loads: Pe
        });
      }
      setTimeout(() => wt(), 50), Qe();
    }
    function ws() {
      const t = le("H") || 6, n = le("angle") || 45, o = le("bTop") || 3, l = le("bBot") || 3, s = le("meshSize") || 2, c = le("E") || 5e4, a = le("nu") || 0.3, r = le("gamma") || 18, f = le("c") || 15, i = le("phi") || 30, d = le("qs") || 0, b = t / Math.tan(n * Math.PI / 180), S = l + b + o, $ = t, y = [
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
          l + b,
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
      ], { nodes: p, elements: h } = hn({
        points: y,
        polygon: [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        maxMeshSize: s
      }), I = p, A = [], z = /* @__PURE__ */ new Map();
      for (let k = 0; k < I.length; k++) {
        const m = I[k][0], u = I[k][1];
        Math.abs(u + $) < 1e-6 ? (A.push({
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
        ])) : (Math.abs(m) < 1e-6 || Math.abs(m - S) < 1e-6) && (A.push({
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
      const P = t - s * 0.3;
      try {
        const k = I.map((w) => [
          w[0],
          w[1]
        ]), m = h.map((w) => [
          w[0],
          w[1],
          w[2]
        ]), u = Ua({
          nodes: k,
          elements: m,
          E: c,
          nu: a,
          gamma: r,
          c: f,
          phi: i,
          thickness: 1,
          supports: A,
          surcharge: d,
          surfaceYThreshold: P
        }), E = I.map((w) => [
          w[0],
          0,
          w[1]
        ]);
        e.nodes.val = E, e.elements.val = h;
        const L = /* @__PURE__ */ new Map();
        for (let w = 0; w < u.displacements.length; w++) {
          const [v, F] = u.displacements[w];
          L.set(w, [
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
        for (let w = 0; w < u.plasticStrain.length; w++) {
          const v = u.plasticStrain[w];
          O.set(w, [
            v,
            v,
            v
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: O
        });
        let W = 0;
        for (const [w, v] of u.displacements) {
          const F = Math.sqrt(w * w + v * v);
          W = Math.max(W, F);
        }
        let x = 0;
        for (const w of u.plasticStrain) x = Math.max(x, w);
        console.log(`Talud SRM: ${I.length} nodos, ${h.length} triangulos`), console.log(`  H=${t}, angulo=${n}\xB0, c=${f} kPa, \u03C6=${i}\xB0, \u03B3=${r}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${u.fos.toFixed(3)}`), console.log(`  max|u| = ${W.toExponential(4)}`), console.log(`  max \u03B5_pl = ${x.toExponential(4)}`), u.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : u.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (k) {
        console.warn("Talud SRM failed:", k.message);
      }
      setTimeout(() => wt(), 50), Qe();
    }
    let cn = null, At = null, dn = null;
    function va() {
      let t = document.getElementById("sections");
      if (!t) {
        t = document.createElement("div"), t.id = "sections";
        const n = document.getElementById("parameters");
        let o = document.getElementById("right-panels-wrapper");
        if (!o && n) {
          o = document.createElement("div"), o.id = "right-panels-wrapper", o.style.cssText = "position:absolute;bottom:0;right:0;z-index:3;max-height:95vh;display:flex;flex-direction:row;gap:0;align-items:flex-end;pointer-events:none;";
          let l = document.getElementById("luces-panel");
          l || (l = document.createElement("div"), l.id = "luces-panel", l.style.cssText = "width:180px;max-height:90vh;overflow-y:auto;pointer-events:auto;"), n.style.cssText = "width:240px;position:static;max-height:90vh;overflow-y:auto;pointer-events:auto;";
          const s = n.parentElement;
          s.removeChild(n), o.appendChild(t), o.appendChild(l), o.appendChild(n), s.appendChild(o);
        }
        o ? t.style.cssText = "width:200px;max-height:90vh;overflow-y:auto;pointer-events:auto;" : (t.style.cssText = "position:absolute;bottom:0;right:316px;width:250px;z-index:3;max-height:80vh;overflow-y:auto;", document.body.appendChild(t));
      }
      return t;
    }
    function $t(t) {
      const n = Vn.find((o) => o.id === R);
      return t / n.toM;
    }
    function Mt(t) {
      const n = Vn.find((o) => o.id === R);
      return t * n.toM;
    }
    function Tn(t) {
      const n = ns.find((l) => l.id === J.forceId), o = Vn.find((l) => l.id === J.lengthId);
      return t / (n.toKN / (o.toM * o.toM));
    }
    function To(t) {
      const n = ns.find((l) => l.id === J.forceId), o = Vn.find((l) => l.id === J.lengthId);
      return t * (n.toKN / (o.toM * o.toM));
    }
    function zo() {
      return J.label;
    }
    function ya() {
      switch (Vn.find((n) => n.id === R).id) {
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
    function $a() {
      const t = Tn(20594), n = Tn(58840), o = Math.max(1, Math.round((n - t) / 40));
      return [
        Math.round(t),
        Math.round(n),
        o
      ];
    }
    function Es(t, n, o, l, s) {
      const c = Ne.steelVigaType, a = c === 0 ? mo() : bo();
      if (Ne.vigaMat === 0) {
        for (let r = 0; r < n.length; r++) {
          const f = n[r], i = `b${o}${r}`, d = `h${o}${r}`, b = {};
          b[i] = +$t(f.b).toFixed(2), b[d] = +$t(f.h).toFixed(2), t.addBinding(b, i, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${o}${r + 1}`
          }), t.addBinding(b, d, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${o}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const f = (_a2 = r.target) == null ? void 0 : _a2.key, i = f == null ? void 0 : f.match(new RegExp(`^b${o}(\\d+)$`)), d = f == null ? void 0 : f.match(new RegExp(`^h${o}(\\d+)$`));
          i && (n[parseInt(i[1])].b = Mt(r.value), Re()), d && (n[parseInt(d[1])].h = Mt(r.value), Re());
        });
      } else if (c <= 1) {
        for (let r = 0; r < n.length; r++) {
          const f = {};
          f[`p${o}${r}`] = n[r].profileIdx ?? 0, t.addBinding(f, `p${o}${r}`, {
            label: `sv${o}${r + 1}`,
            options: a
          });
        }
        t.on("change", (r) => {
          var _a2, _b;
          const i = (_b = (_a2 = r.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(new RegExp(`^p${o}(\\d+)$`));
          i && (n[parseInt(i[1])].profileIdx = r.value, Re());
        });
      } else if (c === 2) {
        for (let r = 0; r < n.length; r++) {
          const f = n[r], i = {}, d = `${o}${r}`;
          i[`bf${d}`] = +$t(f.bf ?? 0.2).toFixed(3), i[`h${d}`] = +$t(f.hf ?? 0.4).toFixed(3), i[`tf${d}`] = +$t(f.tf ?? 0.015).toFixed(3), i[`tw${d}`] = +$t(f.tw ?? 0.01).toFixed(3), t.addBinding(i, `bf${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${o}${r + 1}`
          }), t.addBinding(i, `h${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${o}${r + 1}`
          }), t.addBinding(i, `tf${d}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tf sv${o}${r + 1}`
          }), t.addBinding(i, `tw${d}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tw sv${o}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const f = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let i = 0; i < n.length; i++) {
            const d = `${o}${i}`;
            f === `bf${d}` && (n[i].bf = Mt(r.value), Re()), f === `h${d}` && (n[i].hf = Mt(r.value), Re()), f === `tf${d}` && (n[i].tf = Mt(r.value), Re()), f === `tw${d}` && (n[i].tw = Mt(r.value), Re());
          }
        });
      } else {
        for (let r = 0; r < n.length; r++) {
          const f = n[r], i = {}, d = `${o}${r}`;
          i[`bc${d}`] = +$t(f.bc ?? 0.2).toFixed(3), i[`hc${d}`] = +$t(f.hc ?? 0.3).toFixed(3), i[`t${d}`] = +$t(f.t ?? 8e-3).toFixed(3), t.addBinding(i, `bc${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${o}${r + 1}`
          }), t.addBinding(i, `hc${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${o}${r + 1}`
          }), t.addBinding(i, `t${d}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `t sv${o}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const f = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let i = 0; i < n.length; i++) {
            const d = `${o}${i}`;
            f === `bc${d}` && (n[i].bc = Mt(r.value), Re()), f === `hc${d}` && (n[i].hc = Mt(r.value), Re()), f === `t${d}` && (n[i].t = Mt(r.value), Re());
          }
        });
      }
    }
    function Nn() {
      var _a2;
      if (At) {
        try {
          At.dispose();
        } catch {
        }
        At = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), T !== "edificio" && T !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const n = va();
      if (!n) return;
      n.style.display = "";
      const o = M, l = Math.round(((_a2 = Z.nPisos) == null ? void 0 : _a2.val) ?? 3), s = ya(), c = $a(), a = re.length || 1, r = te.length || 1;
      for (; Ne.perFloor.length < l; ) {
        const m = Ne.perFloor.length > 0 ? JSON.parse(JSON.stringify(Ne.perFloor[Ne.perFloor.length - 1])) : rn(a, r);
        Ne.perFloor.push(m);
      }
      Ne.perFloor.length > l && (Ne.perFloor.length = l);
      for (const m of Ne.perFloor) {
        for (; m.vigasX.length < a; ) m.vigasX.push(m.vigasX.length > 0 ? {
          ...m.vigasX[m.vigasX.length - 1]
        } : ut());
        for (m.vigasX.length > a && (m.vigasX.length = a); m.vigasY.length < r; ) m.vigasY.push(m.vigasY.length > 0 ? {
          ...m.vigasY[m.vigasY.length - 1]
        } : ut());
        m.vigasY.length > r && (m.vigasY.length = r);
      }
      At = new no({
        title: `Sections (${o.label})`,
        container: n
      });
      const f = {
        colMat: Ne.colMat
      };
      if (At.addBinding(f, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (m) => {
        Ne.colMat = m.value, Nn(), Re();
      }), Ne.colMat === 0) {
        const m = {
          forma: Ne.colShape
        };
        At.addBinding(m, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (E) => {
          Ne.colShape = E.value, Nn(), Re();
        });
        const u = {
          fc: +Tn(Ne.fc).toFixed(1)
        };
        At.addBinding(u, "fc", {
          min: c[0],
          max: c[1],
          step: c[2],
          label: `f'c col (${zo()})`
        }), At.on("change", (E) => {
          var _a3;
          ((_a3 = E.target) == null ? void 0 : _a3.key) === "fc" && (Ne.fc = To(E.value), Re());
        });
      } else if (Ne.colMat === 1) {
        const m = {
          colType: Ne.steelColType
        };
        At.addBinding(m, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          Ne.steelColType = u.value, Nn(), Re();
        });
      }
      At.addBlade({
        view: "separator"
      });
      const i = {
        vigaMat: Ne.vigaMat
      };
      if (At.addBinding(i, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (m) => {
        Ne.vigaMat = m.value, Nn(), Re();
      }), Ne.vigaMat === 1) {
        const m = {
          vigaType: Ne.steelVigaType
        };
        At.addBinding(m, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          Ne.steelVigaType = u.value, Nn(), Re();
        });
      }
      const d = Ne.steelColType === 0 ? mo() : bo();
      Ne.steelVigaType === 0 ? mo() : bo();
      const b = R === "m" ? [
        5e-3,
        0.1,
        1e-3
      ] : R === "cm" ? [
        0.5,
        10,
        0.1
      ] : R === "mm" ? [
        5,
        100,
        1
      ] : R === "in" ? [
        0.2,
        4,
        0.05
      ] : [
        0.01,
        0.5,
        5e-3
      ];
      for (let m = 0; m < l; m++) {
        const u = Ne.perFloor[m], E = At.addFolder({
          title: `Piso ${m + 1}`,
          expanded: m < 2
        });
        if (Ne.colMat === 0) if (Ne.colShape === 1) {
          const L = {
            dCol: +$t(u.dCol).toFixed(2)
          };
          E.addBinding(L, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), E.on("change", (O) => {
            var _a3;
            ((_a3 = O.target) == null ? void 0 : _a3.key) === "dCol" && (u.dCol = Mt(O.value), Re());
          });
        } else {
          const L = {
            bCol: +$t(u.bCol).toFixed(2),
            hCol: +$t(u.hCol).toFixed(2)
          };
          E.addBinding(L, "bCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "b col"
          }), E.addBinding(L, "hCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "h col"
          }), E.on("change", (O) => {
            var _a3, _b;
            ((_a3 = O.target) == null ? void 0 : _a3.key) === "bCol" && (u.bCol = Mt(O.value), Re()), ((_b = O.target) == null ? void 0 : _b.key) === "hCol" && (u.hCol = Mt(O.value), Re());
          });
        }
        else if (Ne.colMat === 1) if (Ne.steelColType <= 1) {
          const L = {
            col: u.colProfileIdx
          };
          E.addBinding(L, "col", {
            label: "Columna",
            options: d
          }).on("change", (O) => {
            u.colProfileIdx = O.value, Re();
          });
        } else if (Ne.steelColType === 2) {
          const L = {
            bf: +$t(u.colBf ?? 0.3).toFixed(3),
            h: +$t(u.colHf ?? 0.3).toFixed(3),
            tf: +$t(u.colTf ?? 0.02).toFixed(3),
            tw: +$t(u.colTw ?? 0.012).toFixed(3)
          };
          E.addBinding(L, "bf", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col bf"
          }), E.addBinding(L, "h", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), E.addBinding(L, "tf", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tf"
          }), E.addBinding(L, "tw", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tw"
          }), E.on("change", (O) => {
            var _a3, _b, _c, _d;
            ((_a3 = O.target) == null ? void 0 : _a3.key) === "bf" && (u.colBf = Mt(O.value), Re()), ((_b = O.target) == null ? void 0 : _b.key) === "h" && (u.colHf = Mt(O.value), Re()), ((_c = O.target) == null ? void 0 : _c.key) === "tf" && (u.colTf = Mt(O.value), Re()), ((_d = O.target) == null ? void 0 : _d.key) === "tw" && (u.colTw = Mt(O.value), Re());
          });
        } else {
          const L = {
            bc: +$t(u.colBc ?? 0.3).toFixed(3),
            hc: +$t(u.colHc ?? 0.3).toFixed(3),
            t: +$t(u.colT ?? 0.01).toFixed(3)
          };
          E.addBinding(L, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), E.addBinding(L, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), E.addBinding(L, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), E.on("change", (O) => {
            var _a3, _b, _c;
            ((_a3 = O.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = Mt(O.value), Re()), ((_b = O.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = Mt(O.value), Re()), ((_c = O.target) == null ? void 0 : _c.key) === "t" && (u.colT = Mt(O.value), Re());
          });
        }
        else {
          const L = {
            bc: +$t(u.colBc ?? 0.3).toFixed(3),
            hc: +$t(u.colHc ?? 0.3).toFixed(3),
            t: +$t(u.colT ?? 0.01).toFixed(3),
            Es: +Tn(u.colEs ?? 2e8).toFixed(0),
            nuS: u.colNuS ?? 0.3,
            fc: +Tn(u.colFc ?? 28e3).toFixed(1),
            nuC: u.colNuC ?? 0.2
          };
          E.addBinding(L, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), E.addBinding(L, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), E.addBinding(L, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), E.addBlade({
            view: "separator"
          });
          const O = +Tn(1e8).toFixed(0), W = +Tn(3e8).toFixed(0), x = Math.max(1, Math.round((W - O) / 200));
          E.addBinding(L, "Es", {
            min: O,
            max: W,
            step: x,
            label: `Es (${zo()})`
          }), E.addBinding(L, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), E.addBinding(L, "fc", {
            min: c[0],
            max: c[1],
            step: c[2],
            label: `f'c (${zo()})`
          }), E.addBinding(L, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), E.on("change", (w) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = w.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = Mt(w.value), Re()), ((_b = w.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = Mt(w.value), Re()), ((_c = w.target) == null ? void 0 : _c.key) === "t" && (u.colT = Mt(w.value), Re()), ((_d = w.target) == null ? void 0 : _d.key) === "Es" && (u.colEs = To(w.value), Re()), ((_e2 = w.target) == null ? void 0 : _e2.key) === "nuS" && (u.colNuS = w.value, Re()), ((_f = w.target) == null ? void 0 : _f.key) === "fc" && (u.colFc = To(w.value), Re()), ((_g = w.target) == null ? void 0 : _g.key) === "nuC" && (u.colNuC = w.value, Re());
          });
        }
        if (u.vigasX.length > 0) {
          const L = E.addFolder({
            title: `Vigas X (${u.vigasX.length})`,
            expanded: false
          });
          Es(L, u.vigasX, "x", s, b);
        }
        if (u.vigasY.length > 0) {
          const L = E.addFolder({
            title: `Vigas Y (${u.vigasY.length})`,
            expanded: false
          });
          Es(L, u.vigasY, "y", s, b);
        }
      }
      At.addBlade({
        view: "separator"
      });
      const S = At.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), $ = {
        activar: Ee,
        direccion: Je === "x" ? 0 : 1,
        cantidad: ze
      };
      S.addBinding($, "activar", {
        label: "Activar"
      }), S.addBinding($, "direccion", {
        label: "Corren en",
        options: {
          "X (entre ejes Y)": 0,
          "Y (entre ejes X)": 1
        }
      }), S.addBinding($, "cantidad", {
        min: 1,
        max: 5,
        step: 1,
        label: "Cantidad/vano"
      }), S.on("change", (m) => {
        var _a3, _b, _c;
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (Ee = m.value, Re()), ((_b = m.target) == null ? void 0 : _b.key) === "direccion" && (Je = m.value === 0 ? "x" : "y", Re()), ((_c = m.target) == null ? void 0 : _c.key) === "cantidad" && (ze = Math.round(m.value), Re());
      }), At.addBlade({
        view: "separator"
      });
      const y = At.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), p = {
        activar: Ue,
        espesor: +$t(at).toFixed(3),
        subdivX: dt,
        subdivY: yt
      };
      y.addBinding(p, "activar", {
        label: "Activar losas"
      }), y.addBinding(p, "espesor", {
        min: s[0],
        max: s[1] * 0.3,
        step: s[2],
        label: `Espesor (${o.length})`
      }), y.addBinding(p, "subdivX", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. X"
      }), y.addBinding(p, "subdivY", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. Y"
      }), y.on("change", (m) => {
        var _a3, _b, _c, _d;
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (Ue = m.value, Re()), ((_b = m.target) == null ? void 0 : _b.key) === "espesor" && (at = Mt(m.value), Re()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivX" && (dt = Math.round(m.value), Re()), ((_d = m.target) == null ? void 0 : _d.key) === "subdivY" && (yt = Math.round(m.value), Re());
      }), At.addBlade({
        view: "separator"
      });
      const h = At.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), I = {
        espesor: +$t(Be).toFixed(3),
        subdivH: He,
        subdivW: be
      };
      h.addBinding(I, "espesor", {
        min: s[0],
        max: s[1],
        step: s[2],
        label: `Espesor (${o.length})`
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
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "espesor" && (Be = Mt(m.value), Re()), ((_b = m.target) == null ? void 0 : _b.key) === "subdivH" && (He = Math.round(m.value), Re()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivW" && (be = Math.round(m.value), Re());
      });
      const A = re.length || 1, z = te.length || 1, P = A + 1, k = z + 1;
      if (A > 0) {
        const m = h.addFolder({
          title: `Muros dir X (${A} vanos)`,
          expanded: false
        });
        for (let u = 0; u < A; u++) for (let E = 0; E < k; E++) {
          const L = `wx_${u}_${E}`, O = ve.some((w) => w.dir === "x" && w.bay === u && w.axisIdx === E), W = {};
          W[L] = O;
          const x = `Vano X${u + 1} / Eje Y${String.fromCharCode(65 + E)}`;
          m.addBinding(W, L, {
            label: x
          }).on("change", (w) => {
            w.value ? ve.push({
              dir: "x",
              bay: u,
              axisIdx: E,
              floors: [
                -1
              ]
            }) : ve = ve.filter((v) => !(v.dir === "x" && v.bay === u && v.axisIdx === E)), Re();
          });
        }
      }
      if (z > 0) {
        const m = h.addFolder({
          title: `Muros dir Y (${z} vanos)`,
          expanded: false
        });
        for (let u = 0; u < z; u++) for (let E = 0; E < P; E++) {
          const L = `wy_${u}_${E}`, O = ve.some((w) => w.dir === "y" && w.bay === u && w.axisIdx === E), W = {};
          W[L] = O;
          const x = `Vano Y${u + 1} / Eje X${E + 1}`;
          m.addBinding(W, L, {
            label: x
          }).on("change", (w) => {
            w.value ? ve.push({
              dir: "y",
              bay: u,
              axisIdx: E,
              floors: [
                -1
              ]
            }) : ve = ve.filter((v) => !(v.dir === "y" && v.bay === u && v.axisIdx === E)), Re();
          });
        }
      }
      if (ve.length > 0) {
        h.addBlade({
          view: "separator"
        });
        const m = {
          muros: `${ve.length} ubicaciones`
        };
        h.addBinding(m, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function sn() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (ie || (ie = t.innerHTML), ye) {
        try {
          ye.dispose();
        } catch {
        }
        ye = null;
      }
      if (cn) {
        try {
          cn.dispose();
        } catch {
        }
        cn = null;
      }
      t.innerHTML = "";
      const n = T.charAt(0).toUpperCase() + T.slice(1);
      ye = new no({
        title: `Parameters \u2014 ${n}`,
        container: t
      });
      const o = cs()[T];
      if (o) {
        const s = {};
        for (const a of o) s[a.key] = Z[a.key].val;
        for (const a of o) ye.addBinding(s, a.key, {
          min: Z[a.key].min,
          max: Z[a.key].max,
          step: Z[a.key].step,
          label: Z[a.key].label
        });
        const c = ye.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of o) {
          const r = {
            min: Z[a.key].min,
            max: Z[a.key].max
          };
          c.addBinding(r, "min", {
            label: `${a.key} min`,
            step: a.step
          }), c.addBinding(r, "max", {
            label: `${a.key} max`,
            step: a.step
          }), c.on("change", () => {
            Z[a.key] && (Z[a.key].min = r.min, Z[a.key].max = r.max, Z[a.key].val < r.min && (Z[a.key].val = r.min), Z[a.key].val > r.max && (Z[a.key].val = r.max)), sn(), Re();
          });
        }
        ye.on("change", (a) => {
          var _a2, _b;
          const r = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (r && Z[r]) {
            if (Z[r].val = a.value, T === "edificio" && (r === "nVanosX" || r === "nVanosY" || r === "nPisos")) {
              if (r === "nVanosX" || r === "nVanosY") {
                const f = Math.round(Z.nVanosX.val), i = Math.round(Z.nVanosY.val);
                for (; re.length < f; ) re.push(re[re.length - 1] ?? M.defaultSpan);
                for (re.length > f && (re.length = f); te.length < i; ) te.push(te[te.length - 1] ?? M.defaultSpan * 0.8);
                te.length > i && (te.length = i);
              }
              if (r === "nPisos" || r === "hPiso") {
                const f = Math.round(Z.nPisos.val), i = ((_b = Z.hPiso) == null ? void 0 : _b.val) ?? 3;
                for (; q.length < f; ) q.push(q[q.length - 1] ?? i);
                q.length > f && (q.length = f);
              }
              sn();
            }
            Re();
          }
        });
      }
      if (T === "edificio") {
        if (dn) {
          try {
            dn.dispose();
          } catch {
          }
          dn = null;
        }
        const s = document.getElementById("luces-panel");
        if (s) {
          let c = function() {
            var _a2, _b, _c, _d;
            const f = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", i = ((_a2 = Z.Lvix) == null ? void 0 : _a2.val) || 0, d = ((_b = Z.Lvdx) == null ? void 0 : _b.val) || 0, b = ((_c = Z.Lviy) == null ? void 0 : _c.val) || 0, S = ((_d = Z.Lvdy) == null ? void 0 : _d.val) || 0;
            let $ = "X: ";
            i > 0 && ($ += `\u251C${i.toFixed(1)}\u2524`);
            for (let h = 0; h < re.length; h++) $ += `[${f[h + (i > 0 ? 1 : 0)]}]\u2500\u2500${re[h].toFixed(1)}\u2500\u2500`;
            $ += `[${f[re.length + (i > 0 ? 1 : 0)]}]`, d > 0 && ($ += `\u251C${d.toFixed(1)}\u2524`);
            let y = "Y: ";
            b > 0 && (y += `\u251C${b.toFixed(1)}\u2524`);
            for (let h = 0; h < te.length; h++) y += `[${h + 1 + (b > 0 ? 1 : 0)}]\u2500\u2500${te[h].toFixed(1)}\u2500\u2500`;
            y += `[${te.length + 1 + (b > 0 ? 1 : 0)}]`, S > 0 && (y += `\u251C${S.toFixed(1)}\u2524`);
            let p = "Z: ";
            for (let h = 0; h < q.length; h++) p += `P${h + 1}=${q[h].toFixed(1)} `;
            r.textContent = $ + `
` + y + `
` + p;
          };
          s.innerHTML = "";
          const a = M;
          try {
            dn = new no({
              title: `Luces (${a.length})`,
              container: s
            });
            const f = dn.addFolder({
              title: "Luces X",
              expanded: true
            });
            for (let d = 0; d < re.length; d++) {
              const b = d, S = {
                v: re[d]
              };
              f.addBinding(S, "v", {
                min: a.spanRange[0],
                max: a.spanRange[1],
                step: a.spanRange[2],
                label: `svx${d + 1}`
              }).on("change", ($) => {
                re[b] = $.value, Re();
              });
            }
            const i = dn.addFolder({
              title: "Luces Y",
              expanded: true
            });
            for (let d = 0; d < te.length; d++) {
              const b = d, S = {
                v: te[d]
              };
              i.addBinding(S, "v", {
                min: a.spanRange[0],
                max: a.spanRange[1],
                step: a.spanRange[2],
                label: `svy${d + 1}`
              }).on("change", ($) => {
                te[b] = $.value, Re();
              });
            }
            if (q.length > 0) {
              const d = dn.addFolder({
                title: "Alturas por Piso",
                expanded: true
              });
              for (let b = 0; b < q.length; b++) {
                const S = b, $ = {
                  v: q[b]
                };
                d.addBinding($, "v", {
                  min: a.heightRange[0],
                  max: a.heightRange[1],
                  step: a.heightRange[2],
                  label: `Piso ${b + 1}`
                }).on("change", (y) => {
                  q[S] = y.value, Re();
                });
              }
            }
          } catch (f) {
            console.error("Luces Tweakpane error:", f);
          }
          const r = document.createElement("div");
          r.style.cssText = "font-family:monospace;font-size:10px;color:#aaa;padding:6px;background:#1a1a2e;border-radius:4px;margin-top:6px;line-height:1.6;white-space:pre;overflow-x:auto;", c(), s.appendChild(r);
        }
      }
      if (Nn(), ye) {
        ye.addBlade({
          view: "separator"
        });
        const s = uo()[T];
        if (s && s.length > 0) {
          const c = {};
          s.forEach((r, f) => {
            c[r.label] = f;
          });
          const a = {
            apoyo: xt
          };
          ye.addBinding(a, "apoyo", {
            label: "Apoyo",
            options: c
          }).on("change", (r) => {
            xt = r.value, Re();
          });
        }
        if (T === "placa-3q" || T === "placa-q4") {
          const c = {
            teoria: Ce
          };
          ye.addBinding(c, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (a) => {
            Ce = a.value, Re();
          });
        }
      }
      const l = ds()[T];
      if (l && l.length > 0) {
        cn = new no({
          title: `Cargas Est\xE1ticas \u2014 ${n}`,
          container: t
        });
        const s = {};
        for (const a of l) s[a.key] = ft[a.key].val;
        for (const a of l) cn.addBinding(s, a.key, {
          min: ft[a.key].min,
          max: ft[a.key].max,
          step: ft[a.key].step,
          label: ft[a.key].label
        });
        const c = cn.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of l) {
          const r = {
            min: ft[a.key].min,
            max: ft[a.key].max
          };
          c.addBinding(r, "min", {
            label: `${a.key} min`,
            step: a.step
          }), c.addBinding(r, "max", {
            label: `${a.key} max`,
            step: a.step
          }), c.on("change", () => {
            ft[a.key] && (ft[a.key].min = r.min, ft[a.key].max = r.max, ft[a.key].val < r.min && (ft[a.key].val = r.min), ft[a.key].val > r.max && (ft[a.key].val = r.max)), sn(), Re();
          });
        }
        cn.on("change", (a) => {
          var _a2;
          const r = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (r && ft[r]) {
            if (ft[r].val = a.value, e.nodeInputs) {
              const f = e.nodeInputs.val;
              f.supports && (e.nodeInputs.val = {
                supports: f.supports
              });
            }
            setTimeout(() => Fo(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (s, c) => {
          if (Z[s]) Z[s].val = c, Re(), sn();
          else if (ft[s]) {
            if (ft[s].val = c, e.nodeInputs) {
              const a = e.nodeInputs.val;
              a.supports && (e.nodeInputs.val = {
                supports: a.supports
              });
            }
            setTimeout(() => {
              Fo(), sn();
            }, 30);
          }
        },
        getParams: () => {
          const s = {};
          for (const c in Z) s[c] = Z[c].val;
          for (const c in ft) s[c] = ft[c].val;
          return s;
        },
        setGenerator: et,
        createCustomPanel: (s, c, a) => Ma(s, c, a),
        removeCustomPanel: (s) => {
          Ss(s);
        }
      };
    }
    const Ao = /* @__PURE__ */ new Map();
    function Ma(t, n, o) {
      var _a2;
      Ss(t);
      let l = document.querySelector("#cad3d-custom-panels");
      if (!l) {
        l = document.createElement("div"), l.id = "cad3d-custom-panels";
        const r = document.querySelector("#parameters");
        r ? (_a2 = r.parentElement) == null ? void 0 : _a2.insertBefore(l, r.nextSibling) : document.body.appendChild(l);
      }
      const s = document.createElement("div");
      s.className = "cad3d-custom-panel", s.style.marginBottom = "4px", l.appendChild(s);
      const c = new no({
        title: t,
        container: s
      }), a = {};
      for (const [r, f] of Object.entries(n)) {
        const i = f.label || r;
        if (Array.isArray(f.value)) {
          a[r] = f.value;
          const d = {
            [r]: f.value.join(", ")
          };
          c.addBinding(d, r, {
            label: i
          }).on("change", (b) => {
            a[r] = b.value.split(",").map((S) => parseFloat(S.trim())).filter((S) => !isNaN(S)), o && o({
              ...a
            });
          });
        } else if (f.options) {
          a[r] = f.value;
          const d = {
            [r]: f.value
          }, b = {};
          for (const S of f.options) b[S] = S;
          c.addBinding(d, r, {
            label: i,
            options: b
          }).on("change", (S) => {
            a[r] = S.value, o && o({
              ...a
            });
          });
        } else if (typeof f.value == "boolean") {
          a[r] = f.value;
          const d = {
            [r]: f.value
          };
          c.addBinding(d, r, {
            label: i
          }).on("change", (b) => {
            a[r] = b.value, o && o({
              ...a
            });
          });
        } else if (typeof f.value == "string") {
          a[r] = f.value;
          const d = {
            [r]: f.value
          };
          c.addBinding(d, r, {
            label: i
          }).on("change", (b) => {
            a[r] = b.value, o && o({
              ...a
            });
          });
        } else {
          a[r] = f.value;
          const d = {
            [r]: f.value
          }, b = {
            label: i
          };
          f.min !== void 0 && (b.min = f.min), f.max !== void 0 && (b.max = f.max), f.step !== void 0 && (b.step = f.step), c.addBinding(d, r, b).on("change", (S) => {
            a[r] = S.value, o && o({
              ...a
            });
          });
        }
      }
      return o && c.addButton({
        title: "Aplicar"
      }).on("click", () => {
        o({
          ...a
        });
      }), Ao.set(t, {
        pane: c,
        values: a
      }), console.log(`Panel "${t}" created with ${Object.keys(n).length} params`), a;
    }
    function Ss(t) {
      const n = Ao.get(t);
      if (n) {
        try {
          n.pane.dispose();
        } catch {
        }
        Ao.delete(t);
      }
    }
    function wa() {
      if (ye) {
        try {
          ye.dispose();
        } catch {
        }
        ye = null;
      }
      if (cn) {
        try {
          cn.dispose();
        } catch {
        }
        cn = null;
      }
      if (At) {
        try {
          At.dispose();
        } catch {
        }
        At = null;
      }
      if (dn) {
        try {
          dn.dispose();
        } catch {
        }
        dn = null;
      }
      const t = document.getElementById("sections");
      t && t.remove();
      const n = document.getElementById("right-panels-wrapper"), o = document.getElementById("parameters");
      n && o && (o.style.cssText = "", document.body.appendChild(o), n.remove()), o && ie && (o.innerHTML = ie);
    }
    const Le = document.createElement("div");
    Le.id = "cad3d-panel";
    const Is = document.createElement("style");
    Is.textContent = `
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
  `, document.head.appendChild(Is), Ka() === "light" && document.documentElement.classList.add("awatif-light"), Za((t) => {
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), T && wt(true);
    }), Le.innerHTML = `
    <button class="toggle-btn-collapsed" id="cad3d-expand">FEM Studio</button>
    <h3>FEM Studio <span style="font-size:10px;color:var(--cad-info);margin-left:6px" id="cad3d-info">0n 0e</span><button class="toggle-btn" id="cad3d-toggle">_</button></h3>
    <div class="panel-body">
      <div class="btn-row">
        <button data-ex="truss">Cercha</button>
        <button data-ex="beams">Portico</button>
        <button data-ex="3d">Torre</button>
        <button data-ex="galpon">Galpon</button>
        <button data-ex="edificio">Edificio</button>
        <button data-ex="edif-muros">Edif. Muros</button>
        <button data-ex="edif-acero">Edif. Acero</button>
        <button data-ex="edif-acero-diag">Acero+Diag</button>
        <button data-ex="edif-mixto">Edif. Mixto</button>
        <button data-ex="mezanine">Mezanine</button>
        <button data-ex="barra">Barra</button>
        <button data-ex="placa3q">Placa 3Q</button>
        <button data-ex="placa">Placa Q4</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button data-ex="losa-rect">Losa Rect</button>
        <button data-ex="losa-plana">Losa Plana</button>
        <button data-ex="viga-alta">Viga Alta</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button data-ex="muro-contencion">Muro Cont.</button>
        <button data-ex="zapata">Zapata</button>
        <button data-ex="placa-orificios">Placa Base</button>
        <button data-ex="col-placa">Col+Placa 3D</button>
        <button data-ex="talud">Talud</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button data-ex="eiffel">Eiffel</button>
        <button data-ex="arco">Arco</button>
        <button data-ex="puente">Puente</button>
        <button data-ex="twisted">Twist</button>
        <button data-ex="burj">Burj</button>
        <button data-ex="opera">Opera</button>
        <button data-ex="diagrid">Diagrid</button>
        <button data-ex="muro-q4">Muro Q4</button>
        <button data-ex="viga-q4">Viga Q4</button>
        <button data-ex="placa-xz">Placa XZ</button>
      </div>
      <div class="btn-row" style="margin-top:4px">
        <button data-view="3d" class="view-active">3D</button>
        <button data-view="plan">Plan</button>
        <button data-view="elevX">EX</button>
        <button data-view="elevY">EY</button>
        <button id="cad3d-select">Select</button>
        <button id="cad3d-draw">Draw</button>
        <button id="cad3d-inspect">Inspect</button>
      </div>
      <div class="btn-row" id="cad3d-axis-buttons" style="margin-top:2px;display:none"></div>
      <div class="btn-row" id="cad3d-floor-buttons" style="margin-top:2px;display:none"></div>
      <div class="btn-row" style="margin-top:2px">
        <button id="cad3d-new-model" title="Nuevo modelo vac\xEDo">\u{1F195} New</button>
        <button id="cad3d-export" title="Exportar coordenadas y datos del modelo">\u{1F4CB} Export</button>
        <select id="cad3d-io-menu" title="Import/Export modelos" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);padding:2px 4px;font-size:11px;cursor:pointer;">
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
        <select id="cad3d-tests-menu" title="Validation tests vs ETABS" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);padding:2px 4px;font-size:11px;cursor:pointer;">
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
        <select id="cad3d-force-unit" title="Unidad de fuerza" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);padding:2px 4px;font-size:11px;cursor:pointer;">
          <option value="tonf">tonf</option><option value="kN">kN</option><option value="kgf">kgf</option>
          <option value="kip">kip</option><option value="lb">lb</option><option value="N">N</option>
        </select>
        <select id="cad3d-length-unit" title="Unidad de longitud" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);padding:2px 4px;font-size:11px;cursor:pointer;">
          <option value="m">m</option><option value="cm">cm</option><option value="mm">mm</option>
          <option value="ft">ft</option><option value="in">in</option>
        </select>
        <button id="cad3d-btn-clear" style="margin-left:auto">Clear</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button data-preset="MKS" class="active" title="tonf+m, esfuerzos kgf/cm\xB2">MKS</button>
        <button data-preset="SI" title="kN+m, esfuerzos kPa">SI</button>
        <button data-preset="US" title="kip+in, esfuerzos ksi">US</button>
      </div>
      <div class="btn-row" style="margin-top:4px">
        <button id="cad3d-modal" title="An\xE1lisis modal (frecuencias y modos)">\u26A1 Modal</button>
        <button id="cad3d-mode-prev" style="display:none" title="Modo anterior">\u25C0</button>
        <button id="cad3d-mode-next" style="display:none" title="Modo siguiente">\u25B6</button>
        <input id="cad3d-modal-scale" type="number" min="0.1" max="100" step="0.5" value="15" style="display:none;width:40px;font-size:10px;padding:1px 3px;background:var(--cad-bg);color:var(--cad-heading);border:1px solid var(--cad-border);border-radius:3px;text-align:center" title="Escala de animacion (% del modelo)" />
      </div>
      <div id="cad3d-mode-label" style="display:none;color:var(--cad-heading);font-size:10px;line-height:16px;padding:2px 4px;white-space:nowrap;overflow-x:auto">Modo 1</div>
      <div class="btn-row" style="margin-top:2px">
        <button id="cad3d-nonlinear" title="An\xE1lisis no-lineal din\xE1mico (BRB + sismo)">\u{1F525} Nonlinear</button>
        <button id="cad3d-pushover" title="Pushover c\xEDclico con hist\xE9resis">\u{1F4CA} Pushover</button>
        <button id="cad3d-fem-solver" title="Report Explained: derivaci\xF3n FEM paso a paso de todos los elementos">\u{1F4D0} Report Explained</button>
        <button id="cad3d-calc" title="Calculadora FEM: editor MATLAB + output KaTeX">\u{1F9EE} C\xE1lculo</button>
        <button id="cad3d-log" title="Ver log del solver">\u{1F4CB} Log</button>
      </div>
      <div class="btn-row" style="margin-top:2px">
        <button id="cad3d-cli-toggle" title="Abrir/cerrar consola CLI">\u2328 CLI</button>
      </div>
      <div id="cad3d-cli-panel" style="display:none;margin-top:2px;background:rgba(0,0,0,0.8);border:1px solid #444;border-radius:4px;padding:4px;max-height:200px;overflow-y:auto">
        <div id="cad3d-cli-output" style="font-family:monospace;font-size:10px;color:#0f0;white-space:pre-wrap;max-height:140px;overflow-y:auto;margin-bottom:4px"></div>
        <input class="cmd-input" id="cad3d-cmd" placeholder="cad.addNode(0,0,0) | cad.building([5,5],[4],3) | cad.info()" style="width:100%;font-family:monospace" />
      </div>
    </div>
  `;
    let Lt = null;
    function Ea() {
      var _a2, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, n = e.elements.val, o = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, s = R, c = g, a = [];
      if (a.push("# Awatif FEM \u2014 Model Export"), a.push(`# Generator: ${T || "custom"}`), a.push(`# Units: ${c}, ${s}`), a.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), a.push(""), a.push(`## NODES (${t.length})`), a.push("# idx     X          Y          Z"), t.forEach((i, d) => {
        a.push(`  ${String(d).padStart(4)}  ${i[0].toFixed(4).padStart(10)}  ${i[1].toFixed(4).padStart(10)}  ${i[2].toFixed(4).padStart(10)}`);
      }), a.push(""), a.push(`## ELEMENTS (${n.length})`), a.push("# idx    nodeI  nodeJ"), n.forEach((i, d) => {
        const b = i.map((S) => String(S).padStart(6)).join("");
        a.push(`  ${String(d).padStart(4)}  ${b}`);
      }), a.push(""), (o == null ? void 0 : o.supports) && o.supports.size > 0 && (a.push(`## SUPPORTS (${o.supports.size})`), a.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), o.supports.forEach((i, d) => {
        const b = i.map((S) => S ? "  1" : "  0").join("");
        a.push(`  ${String(d).padStart(4)} ${b}`);
      }), a.push("")), (o == null ? void 0 : o.loads) && o.loads.size > 0 && (a.push(`## LOADS (${o.loads.size})`), a.push("# node         Fx          Fy          Fz          Mx          My          Mz"), o.loads.forEach((i, d) => {
        const b = i.map((S) => S.toFixed(3).padStart(11)).join(" ");
        a.push(`  ${String(d).padStart(4)}  ${b}`);
      }), a.push("")), l) {
        a.push("## ELEMENT PROPERTIES");
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
        ], d = "# elem  " + i.map((b) => b.name.padStart(12)).join(" ");
        a.push(d);
        for (let b = 0; b < n.length; b++) {
          const S = i.map(($) => {
            var _a3;
            const y = (_a3 = $.map) == null ? void 0 : _a3.get(b);
            return y !== void 0 ? y.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          a.push(`  ${String(b).padStart(4)}  ${S}`);
        }
        a.push("");
      }
      const r = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      r && r.size > 0 && (a.push(`## DISPLACEMENTS (${r.size} nodes)`), a.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), r.forEach((i, d) => {
        const b = i.map((S) => S.toExponential(4).padStart(12)).join(" ");
        a.push(`  ${String(d).padStart(4)}  ${b}`);
      }), a.push(""));
      const f = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (f && f.size > 0 && (a.push(`## REACTIONS (${f.size} supports)`), a.push("# node          Rx           Ry           Rz           Mx           My           Mz"), f.forEach((i, d) => {
        const b = i.map((S) => S.toFixed(4).padStart(12)).join(" ");
        a.push(`  ${String(d).padStart(4)}  ${b}`);
      }), a.push("")), T) {
        a.push("## CLI COMMAND");
        const i = Object.entries(Z).map(([d, b]) => `${d}=${b.val}`).join(" ");
        a.push(`cad.${T === "edificio" ? "building" : T}(${i})`);
      }
      return a.join(`
`);
    }
    let Zn = false;
    function Sa() {
      var _a2, _b, _c, _d;
      if (Lt) {
        Lt.remove(), Lt = null, Zn = false;
        return;
      }
      const t = Ea();
      Lt = document.createElement("div"), Lt.id = "export-overlay", Lt.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, Lt.innerHTML = `
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
    `, document.body.appendChild(Lt), (_a2 = Lt.querySelector("#export-close")) == null ? void 0 : _a2.addEventListener("click", () => {
        Lt == null ? void 0 : Lt.remove(), Lt = null, Zn = false;
      }), (_b = Lt.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const n = Lt.querySelector("#export-body"), o = Lt.querySelector("#export-minimize");
        Zn = !Zn, Zn ? (n.style.display = "none", o.textContent = "\u25A2", o.title = "Restaurar", Lt.style.width = "auto") : (n.style.display = "flex", o.textContent = "\u25AC", o.title = "Minimizar", Lt.style.width = "720px");
      }), (_c = Lt.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const n = Lt.querySelector("#export-text");
        navigator.clipboard.writeText(n.value).then(() => {
          const o = Lt.querySelector("#export-status");
          o.textContent = "\u2713 Copiado al clipboard", setTimeout(() => o.textContent = "", 2e3);
        });
      }), (_d = Lt.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e2, _f;
        const n = e.nodes.val, o = e.elements.val, l = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, s = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, c = {
          generator: T || "custom",
          units: {
            force: g,
            length: R
          },
          nodes: n.map((d, b) => ({
            id: b,
            x: d[0],
            y: d[1],
            z: d[2]
          })),
          elements: o.map((d, b) => ({
            id: b,
            nodes: d
          }))
        };
        (l == null ? void 0 : l.supports) && (c.supports = [], l.supports.forEach((d, b) => c.supports.push({
          node: b,
          dofs: d
        }))), (l == null ? void 0 : l.loads) && (c.loads = [], l.loads.forEach((d, b) => c.loads.push({
          node: b,
          forces: d
        }))), s && (c.properties = {}, s.elasticities && (c.properties.E = Object.fromEntries(s.elasticities)), s.areas && (c.properties.A = Object.fromEntries(s.areas)), s.momentsOfInertiaZ && (c.properties.Iz = Object.fromEntries(s.momentsOfInertiaZ)), s.momentsOfInertiaY && (c.properties.Iy = Object.fromEntries(s.momentsOfInertiaY)), s.shearModuli && (c.properties.G = Object.fromEntries(s.shearModuli)), s.torsionalConstants && (c.properties.J = Object.fromEntries(s.torsionalConstants)));
        const a = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        a && a.size > 0 && (c.displacements = {}, a.forEach((d, b) => c.displacements[b] = d));
        const r = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        r && r.size > 0 && (c.reactions = {}, r.forEach((d, b) => c.reactions[b] = d));
        const f = Lt.querySelector("#export-text");
        f.value = JSON.stringify(c, null, 2);
        const i = Lt.querySelector("#export-status");
        i.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function Qe() {
      var _a2, _b, _c;
      const t = Le.querySelector("#cad3d-info");
      if (t) {
        const n = e.nodes.val.length, o = e.elements.val, l = o.length, s = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let c = 0, a = 0, r = 0;
        for (const i of o) i.length === 2 ? c++ : i.length === 3 ? a++ : i.length === 4 && r++;
        let f = `${n}n ${l}e ${s}s`;
        (r > 0 || a > 0) && (f += ` | ${c}fr`, r > 0 && (f += ` ${r}q4`), a > 0 && (f += ` ${a}tri`)), t.textContent = f;
      }
    }
    function Lo() {
      var _a2;
      if (!qe || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, n = e.elements.val, o = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || n.length === 0) && !(!o.supports || o.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const s = Math.min(12, t.length * 6 - o.supports.size * 6);
        if (s <= 0) return;
        const c = Va(t, n, o, l, Math.min(s, 12));
        if (c.frequencies && c.frequencies.length > 0) {
          Ae = c, ke = t.map((i) => [
            ...i
          ]), he = 0;
          const { extent: a } = yn(), r = (_a2 = c.modeShapes) == null ? void 0 : _a2[0];
          if (r) {
            let i = 0;
            for (let d = 0; d < t.length; d++) {
              const b = r[d * 6] || 0, S = r[d * 6 + 1] || 0, $ = r[d * 6 + 2] || 0;
              i = Math.max(i, Math.sqrt(b * b + S * S + $ * $));
            }
            Ge = i > 1e-12 ? a * 0.15 / i : 1;
          }
          const f = `${T} \u2014 ${t.length}n ${n.length}e`;
          it.render(c, {
            title: f
          }), it.div.style.display = "", Qn(), console.log(`Modal: ${c.frequencies.length} modos. f\u2081 = ${c.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), Ae = null;
      }
    }
    function Co() {
      xe && (cancelAnimationFrame(xe), xe = 0), ke.length > 0 && (e.nodes.val = ke.map((t) => [
        ...t
      ])), it.div.style.display = "none", Ae = null;
    }
    function Qn() {
      var _a2;
      if (xe && cancelAnimationFrame(xe), !(Ae == null ? void 0 : Ae.modeShapes) || !ke.length) return;
      const t = Ae.modeShapes[he];
      if (!t) return;
      const n = ((_a2 = Ae.frequencies) == null ? void 0 : _a2[he]) || 1, o = Math.max(0.5, Math.min(3, n * 0.1)), l = performance.now(), s = ke.length, c = e.elements.rawVal, { extent: a } = yn(), r = Le.querySelector("#cad3d-modal-scale"), f = r && parseFloat(r.value) || 15;
      let i = 0;
      for (let z = 0; z < s; z++) {
        const P = t[z * 6] || 0, k = t[z * 6 + 1] || 0, m = t[z * 6 + 2] || 0;
        i = Math.max(i, Math.sqrt(P * P + k * k + m * m));
      }
      const d = i > 1e-12 ? a * f / 100 / i : 1, b = Ze();
      if (!b) return;
      let S = null, $ = null, y = null;
      b.scene.traverse((z) => {
        !S && z.isPoints && z.geometry && (S = z), !$ && z.isLineSegments && z.geometry && !z.name && ($ = z), !y && z.isMesh && z.geometry && z.geometry.getAttribute("position") && (y = z);
      });
      const p = new Float32Array(s * 3), h = [];
      for (const z of c) if (z.length === 2) h.push([
        z[0],
        z[1]
      ]);
      else for (let P = 0; P < z.length; P++) h.push([
        z[P],
        z[(P + 1) % z.length]
      ]);
      const I = new Float32Array(h.length * 6);
      function A() {
        const z = (performance.now() - l) / 1e3, P = Math.sin(2 * Math.PI * o * z) * d;
        for (let k = 0; k < s; k++) {
          const m = ke[k];
          p[k * 3] = m[0] + (t[k * 6] || 0) * P, p[k * 3 + 1] = m[1] + (t[k * 6 + 1] || 0) * P, p[k * 3 + 2] = m[2] + (t[k * 6 + 2] || 0) * P;
        }
        if (S) {
          const k = S.geometry, m = k.getAttribute("position");
          m && m.array.length === p.length ? (m.array.set(p), m.needsUpdate = true) : k.setAttribute("position", new Ln(p.slice(), 3));
        }
        if ($) {
          for (let u = 0; u < h.length; u++) {
            const [E, L] = h[u];
            I[u * 6] = p[E * 3], I[u * 6 + 1] = p[E * 3 + 1], I[u * 6 + 2] = p[E * 3 + 2], I[u * 6 + 3] = p[L * 3], I[u * 6 + 4] = p[L * 3 + 1], I[u * 6 + 5] = p[L * 3 + 2];
          }
          const k = $.geometry, m = k.getAttribute("position");
          m && m.array.length === I.length ? (m.array.set(I), m.needsUpdate = true) : k.setAttribute("position", new Ln(I.slice(), 3));
        }
        if (y) {
          const k = [];
          for (const m of c) if (m.length === 3) {
            const [u, E, L] = m;
            k.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), k.push(p[E * 3], p[E * 3 + 1], p[E * 3 + 2]), k.push(p[L * 3], p[L * 3 + 1], p[L * 3 + 2]);
          } else if (m.length === 4) {
            const [u, E, L, O] = m;
            k.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), k.push(p[E * 3], p[E * 3 + 1], p[E * 3 + 2]), k.push(p[L * 3], p[L * 3 + 1], p[L * 3 + 2]), k.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), k.push(p[L * 3], p[L * 3 + 1], p[L * 3 + 2]), k.push(p[O * 3], p[O * 3 + 1], p[O * 3 + 2]);
          }
          if (k.length > 0) {
            const m = y.geometry, u = new Float32Array(k), E = m.getAttribute("position");
            E && E.array.length === u.length ? (E.array.set(u), E.needsUpdate = true) : m.setAttribute("position", new Ln(u, 3));
          }
        }
        b.render(), xe = requestAnimationFrame(A);
      }
      xe = requestAnimationFrame(A);
    }
    function Fo() {
      var _a2, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, n = e.elements.val;
      let o = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || n.length === 0 || !o.supports || o.supports.size === 0) return;
      if (!o.loads || o.loads.size === 0) {
        const y = le("CM") ?? 0, p = le("CV") ?? 0, h = y + p, I = le("Ex") ?? 0, A = le("Ey") ?? 0;
        if (h === 0 && I === 0 && A === 0) return;
        const z = /* @__PURE__ */ new Map(), P = [];
        for (let w = 0; w < t.length; w++) o.supports.has(w) || P.push(w);
        const k = (w) => Math.round(w * 1e3) / 1e3, m = /* @__PURE__ */ new Set();
        o.supports.forEach((w, v) => {
          m.add(`${k(t[v][0])},${k(t[v][1])}`);
        });
        const u = /* @__PURE__ */ new Set();
        for (const w of P) m.has(`${k(t[w][0])},${k(t[w][1])}`) && u.add(w);
        const E = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set();
        if (I !== 0 || A !== 0) {
          let w = -1 / 0, v = -1 / 0;
          for (const X of u) w = Math.max(w, k(t[X][0])), v = Math.max(v, k(t[X][1]));
          const F = /* @__PURE__ */ new Map();
          for (const X of u) {
            const V = k(t[X][2]);
            F.has(V) || F.set(V, []), F.get(V).push(X);
          }
          F.forEach((X) => {
            if (I !== 0) {
              const V = /* @__PURE__ */ new Set();
              for (const ae of X) if (k(t[ae][0]) === w) {
                const Q = k(t[ae][1]);
                V.has(Q) || (V.add(Q), E.add(ae));
              }
            }
            if (A !== 0) {
              const V = /* @__PURE__ */ new Set();
              for (const ae of X) if (k(t[ae][1]) === v) {
                const Q = k(t[ae][0]);
                V.has(Q) || (V.add(Q), L.add(ae));
              }
            }
          });
        }
        const O = 9.81, W = /* @__PURE__ */ new Map();
        for (let w = 0; w < n.length; w++) {
          const v = n[w], F = ((_a2 = l.densities) == null ? void 0 : _a2.get(w)) ?? 0;
          if (!(Math.abs(F) < 1e-15)) {
            if (v.length === 2) {
              const X = ((_b = l.areas) == null ? void 0 : _b.get(w)) ?? 0, V = t[v[0]], ae = t[v[1]], Q = Math.sqrt((ae[0] - V[0]) ** 2 + (ae[1] - V[1]) ** 2 + (ae[2] - V[2]) ** 2), pe = -(F * X * Q * O) / 2;
              W.set(v[0], (W.get(v[0]) ?? 0) + pe), W.set(v[1], (W.get(v[1]) ?? 0) + pe);
            } else if (v.length >= 3) {
              const X = ((_c = l.thicknesses) == null ? void 0 : _c.get(w)) ?? 0;
              let V = 0;
              if (v.length === 3) {
                const [K, pe, ce] = v.map((Ie) => t[Ie]);
                V = 0.5 * Math.abs((pe[0] - K[0]) * (ce[1] - K[1]) - (ce[0] - K[0]) * (pe[1] - K[1]));
              } else if (v.length === 4) {
                const [K, pe, ce, Ie] = v.map((Pe) => t[Pe]);
                if (V = 0.5 * Math.abs((pe[0] - K[0]) * (ce[1] - K[1]) - (ce[0] - K[0]) * (pe[1] - K[1])) + 0.5 * Math.abs((ce[0] - K[0]) * (Ie[1] - K[1]) - (Ie[0] - K[0]) * (ce[1] - K[1])), V < 1e-10) {
                  const Pe = [
                    pe[0] - K[0],
                    pe[1] - K[1],
                    pe[2] - K[2]
                  ], _ = [
                    Ie[0] - K[0],
                    Ie[1] - K[1],
                    Ie[2] - K[2]
                  ], ue = [
                    Pe[1] * _[2] - Pe[2] * _[1],
                    Pe[2] * _[0] - Pe[0] * _[2],
                    Pe[0] * _[1] - Pe[1] * _[0]
                  ];
                  V = Math.sqrt(ue[0] ** 2 + ue[1] ** 2 + ue[2] ** 2);
                }
              }
              const Q = -(F * X * V * O) / v.length;
              for (const K of v) W.set(K, (W.get(K) ?? 0) + Q);
            }
          }
        }
        const x = /* @__PURE__ */ new Set();
        for (const w of n) w.length === 2 && (x.add(w[0]), x.add(w[1]));
        for (const w of P) {
          const v = E.has(w) ? I : 0, F = L.has(w) ? A : 0, X = W.get(w) ?? 0, V = x.has(w) ? h : 0, ae = X + V;
          (v !== 0 || F !== 0 || Math.abs(ae) > 1e-10) && z.set(w, [
            v,
            F,
            ae,
            0,
            0,
            0
          ]);
        }
        o = {
          ...o,
          loads: z
        }, e.nodeInputs.val = o;
      }
      const s = performance.now();
      let c = 0, a = 0, r = 0;
      for (const y of n) y.length === 2 ? c++ : y.length === 3 ? r++ : y.length === 4 && a++;
      const f = ((_d = o.supports) == null ? void 0 : _d.size) || 0, i = ((_e2 = o.loads) == null ? void 0 : _e2.size) || 0, d = t.length * 6, b = d - f * 6, S = [], $ = (y) => S.push(y);
      $('<b style="color:var(--cad-heading)">FEM Solver</b>'), $(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${n.length} elem`), c && $(`&nbsp;&nbsp;Frames: <b>${c}</b>`), a && $(`&nbsp;&nbsp;Shell Q4: <b>${a}</b>`), r && $(`&nbsp;&nbsp;Triangulos: <b>${r}</b>`), $(`&nbsp;&nbsp;Apoyos: ${f} &nbsp;|&nbsp; Cargas: ${i}`), $(`<span style="color:var(--cad-info)">DOFs:</span> ${d} total, ~${b} libres`), $('<hr style="border-color:var(--cad-border);margin:4px 0">'), $(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${d}&times;${d})`), $("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const y = kt(t, n, o, l), p = performance.now() - s;
        if (y) {
          e.deformOutputs.val = y, $(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${p.toFixed(0)} ms</span>`);
          let h = 0, I = -1, A = 0, z = 0;
          y.deformations && y.deformations.forEach((E, L) => {
            const O = Math.sqrt(E[0] * E[0] + E[1] * E[1] + E[2] * E[2]);
            O > h && (h = O, I = L, A = E[0], z = E[2]);
          }), $('<span style="color:#888">3.</span> Desplazamientos:'), $(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${h.toExponential(3)}</b> m <span style="color:#666">(nodo ${I})</span>`), $(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(A * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(z * 1e3).toFixed(4)} mm`);
          const P = performance.now(), k = gn(t, n, l, y), m = performance.now() - P;
          k && (e.analyzeOutputs.val = k, $(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${m.toFixed(0)} ms</span>`), $("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const u = performance.now() - s;
          $('<hr style="border-color:var(--cad-border);margin:4px 0">'), $(`<b style="color:#00cc88">&#10004; Completado: ${u.toFixed(0)} ms</b>`);
        }
      } catch (y) {
        const p = performance.now() - s;
        $(`<b style="color:#ff4444">&#10008; Error (${p.toFixed(0)} ms): ${y.message}</b>`);
      }
      window.__femLog = S, console.log(`FEM Solver: ${t.length}n ${n.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), qe && setTimeout(() => Lo(), 50);
    }
    function Ro(t, n) {
      const o = t * n, l = t * n * n * n / 12, s = n * t * t * t / 12, c = Math.min(t, n), a = Math.max(t, n), r = c * c * c * a * (1 / 3 - 0.21 * c / a * (1 - c * c * c * c / (12 * a * a * a * a)));
      return {
        A: o,
        Iz: l,
        Iy: s,
        J: r
      };
    }
    function ks(t) {
      const n = t / 2, o = Math.PI * n * n, l = Math.PI * n * n * n * n / 4, s = Math.PI * n * n * n * n / 2;
      return {
        A: o,
        Iz: l,
        Iy: l,
        J: s
      };
    }
    function Po(t, n, o, l) {
      const s = n - 2 * o, c = 2 * t * o + s * l, a = (t * n * n * n - (t - l) * s * s * s) / 12, r = (2 * o * t * t * t + s * l * l * l) / 12, f = (2 * t * o * o * o + s * l * l * l) / 3;
      return {
        A: c,
        Iz: a,
        Iy: r,
        J: f
      };
    }
    function Oo(t, n, o) {
      const l = t - 2 * o, s = n - 2 * o, c = t * n - l * s, a = (t * n * n * n - l * s * s * s) / 12, r = (n * t * t * t - s * l * l * l) / 12, f = (t - o) * (n - o), i = 2 * ((t - o) / o + (n - o) / o), d = 4 * f * f / (i > 0 ? i : 1);
      return {
        A: c,
        Iz: a,
        Iy: r,
        J: d
      };
    }
    function Ia(t, n, o, l, s, c, a) {
      const f = 4700 * Math.sqrt(c / 1e3) * 1e3 / l, i = t - 2 * o, d = n - 2 * o, b = t * n - i * d, S = (t * n * n * n - i * d * d * d) / 12, $ = (n * t * t * t - d * i * i * i) / 12, y = i * d, p = i * d * d * d / 12, h = d * i * i * i / 12, I = b + f * y, A = S + f * p, z = $ + f * h, P = l / (2 * (1 + s)), k = (t - o) * (n - o), m = 2 * ((t - o) / o + (n - o) / o), u = 4 * k * k / (m > 0 ? m : 1);
      return {
        A: I,
        Iz: A,
        Iy: z,
        J: u,
        Es: l,
        Gs: P,
        A_steel: b,
        A_conc: y
      };
    }
    function vn() {
      if (!e.elementInputs) return;
      const t = e.elements.val, n = M, o = {
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
      if ((T === "edificio" || T === "frame") && D.size > 0) {
        const { colMat: s, vigaMat: c, colShape: a, fc: r, perFloor: f } = Ne, i = 4700 * Math.sqrt(r / 1e3) * 1e3, d = i / (2 * 1.2), b = 24 / 9.80665, S = n.E, $ = n.G, y = n.rho;
        for (let p = 0; p < t.length; p++) {
          if (de.has(p)) {
            const E = 4700 * Math.sqrt(r / 1e3) * 1e3, L = 0.2;
            o.elasticities.set(p, E), o.poissonsRatios.set(p, L), o.thicknesses.set(p, Be), o.shearModuli.set(p, E / (2 * (1 + L))), o.densities.set(p, 24 / 9.80665);
            continue;
          }
          if (zt.has(p)) {
            const E = 4700 * Math.sqrt(r / 1e3) * 1e3, L = 0.2;
            o.elasticities.set(p, E), o.poissonsRatios.set(p, L), o.thicknesses.set(p, at), o.shearModuli.set(p, E / (2 * (1 + L))), o.densities.set(p, 24 / 9.80665);
            continue;
          }
          const h = D.has(p), I = $e.get(p) ?? 0, A = f[I] ?? f[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let z, P, k, m;
          if (h) if (s === 0) P = i, k = d, m = b, z = a === 1 ? ks(A.dCol) : Ro(A.bCol, A.hCol), o.sectionShapes.set(p, a === 1 ? {
            type: "circ",
            d: A.dCol
          } : {
            type: "rect",
            b: A.bCol,
            h: A.hCol
          });
          else if (s === 1) {
            P = S, k = $, m = y;
            const E = Ne.steelColType;
            if (E <= 1) {
              const L = kn[A.colProfileIdx] ?? kn[0];
              z = {
                A: L.A,
                Iz: L.Iz,
                Iy: L.Iy,
                J: L.J
              }, o.sectionShapes.set(p, {
                type: "I",
                b: L.bf,
                h: L.d,
                name: L.name
              });
            } else if (E === 2) {
              const L = A.colBf ?? 0.3, O = A.colHf ?? 0.3, W = A.colTf ?? 0.02, x = A.colTw ?? 0.012;
              z = Po(L, O, W, x);
              const w = `I${(O * 100).toFixed(0)}x${(L * 100).toFixed(0)}`;
              o.sectionShapes.set(p, {
                type: "I",
                b: L,
                h: O,
                tf: W,
                tw: x,
                name: w
              });
            } else {
              const L = A.colBc ?? 0.3, O = A.colHc ?? 0.3, W = A.colT ?? 0.01;
              z = Oo(L, O, W);
              const x = `\u25A1${(O * 100).toFixed(0)}x${(L * 100).toFixed(0)}x${(W * 1e3).toFixed(0)}`;
              o.sectionShapes.set(p, {
                type: "HSS",
                b: L,
                h: O,
                tw: W,
                name: x
              });
            }
          } else {
            const E = A.colBc ?? 0.3, L = A.colHc ?? 0.3, O = A.colT ?? 0.01, W = A.colFc ?? 28e3, x = A.colEs ?? 2e8, w = A.colNuS ?? 0.3;
            A.colNuC;
            const v = Ia(E, L, O, x, w, W);
            z = {
              A: v.A,
              Iz: v.Iz,
              Iy: v.Iy,
              J: v.J
            }, P = v.Es, k = v.Gs;
            const F = 7.85, X = 24 / 9.80665;
            m = (F * v.A_steel + X * v.A_conc) / (v.A_steel + v.A_conc);
            const V = `CFT ${(L * 1e3).toFixed(0)}X${(E * 1e3).toFixed(0)}X${(O * 1e3).toFixed(0)}`;
            o.sectionShapes.set(p, {
              type: "CFT",
              b: E,
              h: L,
              tw: O,
              name: V
            });
          }
          else {
            const E = Te.get(p), L = E ? E.dir === "x" ? A.vigasX : A.vigasY : [], O = E ? L[E.bay] ?? L[0] ?? ut() : ut();
            if (c === 0) P = i, k = d, m = b, z = Ro(O.b, O.h), o.sectionShapes.set(p, {
              type: "rect",
              b: O.b,
              h: O.h
            });
            else {
              P = S, k = $, m = y;
              const W = Ne.steelVigaType;
              if (W <= 1) {
                const x = kn[O.profileIdx ?? 0] ?? kn[0];
                z = {
                  A: x.A,
                  Iz: x.Iz,
                  Iy: x.Iy,
                  J: x.J
                }, o.sectionShapes.set(p, {
                  type: "I",
                  b: x.bf,
                  h: x.d,
                  name: x.name
                });
              } else if (W === 2) {
                const x = O.bf ?? 0.2, w = O.hf ?? 0.4, v = O.tf ?? 0.015, F = O.tw ?? 0.01;
                z = Po(x, w, v, F);
                const X = `I${(w * 100).toFixed(0)}x${(x * 100).toFixed(0)}`;
                o.sectionShapes.set(p, {
                  type: "I",
                  b: x,
                  h: w,
                  tf: v,
                  tw: F,
                  name: X
                });
              } else {
                const x = O.bc ?? 0.2, w = O.hc ?? 0.3, v = O.t ?? 8e-3;
                z = Oo(x, w, v);
                const F = `\u25A1${(w * 100).toFixed(0)}x${(x * 100).toFixed(0)}x${(v * 1e3).toFixed(0)}`;
                o.sectionShapes.set(p, {
                  type: "HSS",
                  b: x,
                  h: w,
                  tw: v,
                  name: F
                });
              }
            }
          }
          const u = ge.get(p);
          if (u) {
            if ((u.material ?? 1) === 0 ? (P = i, k = d, m = b) : (P = S, k = $, m = y), u.secType === "rect" && u.b && u.h) z = Ro(u.b, u.h), o.sectionShapes.set(p, {
              type: "rect",
              b: u.b,
              h: u.h
            });
            else if (u.secType === "circ" && u.b) z = ks(u.b), o.sectionShapes.set(p, {
              type: "circ",
              d: u.b
            });
            else if ((u.secType === "W" || u.secType === "HSS") && u.profileIdx !== void 0) {
              const L = kn[u.profileIdx] ?? kn[0];
              z = {
                A: L.A,
                Iz: L.Iz,
                Iy: L.Iy,
                J: L.J
              }, o.sectionShapes.set(p, {
                type: "I",
                b: L.bf,
                h: L.d,
                name: L.name
              });
            } else if (u.secType === "I-param" && u.bf && u.hf && u.tf && u.tw) {
              z = Po(u.bf, u.hf, u.tf, u.tw);
              const L = `I${(u.hf * 100).toFixed(0)}x${(u.bf * 100).toFixed(0)}`;
              o.sectionShapes.set(p, {
                type: "I",
                b: u.bf,
                h: u.hf,
                tf: u.tf,
                tw: u.tw,
                name: L
              });
            } else if (u.secType === "tubular" && u.bc && u.hc && u.t) {
              z = Oo(u.bc, u.hc, u.t);
              const L = `\u25A1${(u.hc * 100).toFixed(0)}x${(u.bc * 100).toFixed(0)}x${(u.t * 1e3).toFixed(0)}`;
              o.sectionShapes.set(p, {
                type: "HSS",
                b: u.bc,
                h: u.hc,
                tw: u.t,
                name: L
              });
            }
          }
          o.elasticities.set(p, P), o.shearModuli.set(p, k), o.areas.set(p, z.A), o.momentsOfInertiaZ.set(p, z.Iy), o.momentsOfInertiaY.set(p, z.Iz), o.torsionalConstants.set(p, z.J), o.densities.set(p, m), u && u.releases12 && u.releases12.some((E) => E) && (o.momentReleases || (o.momentReleases = /* @__PURE__ */ new Map()), o.momentReleases.set(p, u.releases12)), u && u.springs12 && u.springs12.some((E) => E > 0) && (o.partialFixitySprings || (o.partialFixitySprings = /* @__PURE__ */ new Map()), o.partialFixitySprings.set(p, u.springs12));
        }
      } else for (let s = 0; s < t.length; s++) o.elasticities.set(s, n.E), o.shearModuli.set(s, n.G), o.areas.set(s, n.A), o.momentsOfInertiaZ.set(s, n.Iy), o.momentsOfInertiaY.set(s, n.Iz), o.torsionalConstants.set(s, n.J), o.densities.set(s, n.rho);
      e.elementInputs.val = o;
    }
    function Ts(t) {
      Le.querySelectorAll("[data-ex]").forEach((n) => {
        n.classList.toggle("active", n.dataset.ex === t);
      });
    }
    window.innerWidth <= 600 && Le.classList.add("collapsed"), setTimeout(() => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p;
      (_a2 = Le.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (x) => {
        x.stopPropagation(), Le.classList.add("collapsed");
      }), (_b = Le.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (x) => {
        x.stopPropagation(), Le.classList.remove("collapsed");
      }), Le.querySelectorAll("[data-ex]").forEach((x) => {
        x.addEventListener("click", (w) => {
          w.stopPropagation();
          const v = x.dataset.ex;
          Ts(v), Ke.example(v);
        });
      }), Le.querySelectorAll("[data-view]").forEach((x) => {
        x.addEventListener("click", (w) => {
          w.stopPropagation();
          const v = x.dataset.view;
          $n(v), Le.querySelectorAll("[data-view]").forEach((F) => F.classList.remove("view-active")), x.classList.add("view-active");
        });
      }), (_c = Le.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (x) => {
        x.stopPropagation(), T = "", ia.val = false, wa(), Ke.clear();
      }), (_d = Le.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (x) => {
        var _a3;
        x.stopPropagation(), nn && (nn = false, An()), pn && io(), Yt = !Yt, (_a3 = Le.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", Yt);
        const v = Ze();
        v && (v.controls.enabled = !Yt), Yt || ro();
      }), (_e2 = Le.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (x) => {
        var _a3;
        x.stopPropagation(), nn && (nn = false, An()), Yt && ro(), pn = !pn, (_a3 = Le.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", pn), pn ? La() : io();
      }), (_f = Le.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (x) => {
        var _a3;
        x.stopPropagation(), Yt && ro(), pn && io(), nn = !nn, (_a3 = Le.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", nn), nn || An();
      }), (_g = Le.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (x) => {
        x.stopPropagation(), Ke.clear(), Ve = null;
      });
      const t = Le.querySelector("#cad3d-tests-menu");
      t && t.addEventListener("change", () => {
        const x = t.value;
        t.value = "", x && n(x);
      });
      function n(x) {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const F = 15e3 * Math.sqrt(210) * 10, X = 0.2, V = F / (2 * (1 + X)), ae = 0.09, Q = 0.3 ** 4 / 12, K = 0.141 * 0.3 ** 4, pe = 0.25 * 0.4, ce = 0.25 * 0.4 ** 3 / 12, Ie = 0.4 * 0.25 ** 3 / 12, Pe = 1e-3, _ = 5 / 6 * ae, ue = 5 / 6 * pe, oe = [];
        function fe(ee, me, we) {
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
          for (const Se of me) se.elasticities.set(Se, F), se.shearModuli.set(Se, V), se.areas.set(Se, ae), se.momentsOfInertiaZ.set(Se, Q), se.momentsOfInertiaY.set(Se, Q), se.torsionalConstants.set(Se, K), se.shearAreasY.set(Se, _), se.shearAreasZ.set(Se, _);
          for (const Se of we) se.elasticities.set(Se, F), se.shearModuli.set(Se, V), se.areas.set(Se, pe), se.momentsOfInertiaZ.set(Se, Ie), se.momentsOfInertiaY.set(Se, ce), se.torsionalConstants.set(Se, Pe), se.shearAreasY.set(Se, ue), se.shearAreasZ.set(Se, ue);
          return se;
        }
        if (x === "test-cantilever" || x === "test-all") {
          const we = 270 / (3 * F * Q), se = [
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
          ], Se = [
            [
              0,
              1
            ]
          ], je = fe(1, [], []);
          je.elasticities.set(0, F), je.shearModuli.set(0, V), je.areas.set(0, ae), je.momentsOfInertiaZ.set(0, Q), je.momentsOfInertiaY.set(0, Q), je.torsionalConstants.set(0, K);
          const rt = kt(se, Se, {
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
          oe.push({
            name: "Cantilever Beam",
            formulation: "Euler-Bernoulli (PL\xB3/3EI)",
            nodes: se,
            elements: Se,
            results: [
              {
                label: "Uz tip (cm)",
                awatif: rt.deformations.get(1)[2] * 100,
                reference: we * 100,
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
          ], me = [
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
          ], we = fe(3, [
            0,
            1
          ], [
            2
          ]), se = kt(ee, me, {
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
          }, we);
          oe.push({
            name: "Portal 1-Story (Timoshenko)",
            formulation: "Frame Timoshenko (As=5/6\xB7A)",
            nodes: ee,
            elements: me,
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
          ], me = [
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
          ], we = fe(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]), se = kt(ee, me, {
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
          }, we);
          oe.push({
            name: "Portal 2-Story",
            formulation: "Frame Timoshenko",
            nodes: ee,
            elements: me,
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
          ], me = [
            [
              0,
              1,
              2,
              3
            ]
          ], se = kt(ee, me, {
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
                V
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
            elements: me,
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
          ], me = [
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
          ], we = fe(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]);
          we.elasticities.set(6, F), we.shearModuli.set(6, V), we.thicknesses = /* @__PURE__ */ new Map([
            [
              6,
              0.2
            ]
          ]), we.poissonsRatios = /* @__PURE__ */ new Map([
            [
              6,
              X
            ]
          ]);
          const se = kt(ee, me, {
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
          }, we);
          oe.push({
            name: "Portal 2-Story + Wall Q4",
            formulation: "Frame Timoshenko + Shell Q4 (Hughes-Brezzi drilling)",
            nodes: ee,
            elements: me,
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
          const rt = 0.6666666666666666, ct = [
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
          ], Ct = [
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
          ], _t = {
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
          }, Rt = /* @__PURE__ */ new Map();
          Rt.set(0, [
            true,
            true,
            true,
            true,
            true,
            true
          ]), Rt.set(5, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
          const Dt = /* @__PURE__ */ new Map();
          Dt.set(2, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]), Dt.set(3, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]);
          const Sn = 5 ** 3 / (3 * 1500 * rt);
          try {
            const an = kt(ct, Ct, {
              supports: Rt,
              loads: Dt
            }, _t), Vt = Math.abs(((_b2 = (_a3 = an.deformations) == null ? void 0 : _a3.get(2)) == null ? void 0 : _b2[1]) ?? 0), nt = Math.abs(((_d2 = (_c2 = an.deformations) == null ? void 0 : _c2.get(3)) == null ? void 0 : _d2[1]) ?? 0), St = (Vt + nt) / 2, en = St / Sn;
            oe.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "2 Q4 elements + incompatible modes (Wilson 1971, Table 6.1)",
              nodes: ct,
              elements: Ct,
              results: [
                {
                  label: "Uy/Uy_exact (cortante)",
                  awatif: en,
                  reference: 0.932,
                  refSource: "Wilson Table 6.1"
                },
                {
                  label: "Uy free end",
                  awatif: St,
                  reference: Sn * 0.932,
                  refSource: "Wilson"
                }
              ]
            });
          } catch (an) {
            oe.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "ERROR: " + an.message,
              nodes: ct,
              elements: Ct,
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
          const rt = 40 * Math.PI / 180, ct = 8, Ct = 8, _t = [];
          for (let nt = 0; nt <= ct; nt++) for (let St = 0; St <= Ct; St++) {
            const en = 25 * nt / ct, Ot = rt * St / Ct, bn = 25 * Math.sin(Ot), mn = 25 * Math.cos(Ot) - 25 * Math.cos(rt);
            _t.push([
              en,
              bn,
              mn
            ]);
          }
          const Rt = [];
          for (let nt = 0; nt < ct; nt++) for (let St = 0; St < Ct; St++) {
            const en = nt * (Ct + 1) + St, Ot = (nt + 1) * (Ct + 1) + St, bn = (nt + 1) * (Ct + 1) + (St + 1), mn = nt * (Ct + 1) + (St + 1);
            Rt.push([
              en,
              Ot,
              bn,
              mn
            ]);
          }
          const Dt = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            thicknesses: /* @__PURE__ */ new Map(),
            poissonsRatios: /* @__PURE__ */ new Map()
          }, Sn = 432e6 / (2 * 1);
          for (let nt = 0; nt < Rt.length; nt++) Dt.elasticities.set(nt, 432e6), Dt.shearModuli.set(nt, Sn), Dt.thicknesses.set(nt, 0.25), Dt.poissonsRatios.set(nt, 0);
          const an = /* @__PURE__ */ new Map();
          for (let nt = 0; nt <= ct; nt++) for (let St = 0; St <= Ct; St++) {
            const en = nt * (Ct + 1) + St, Ot = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            nt === 0 && (Ot[0] = true, Ot[4] = true, Ot[5] = true), nt === ct && (Ot[1] = true, Ot[2] = true, Ot[3] = true), St === 0 && (Ot[1] = true, Ot[3] = true, Ot[5] = true), Ot.some((bn) => bn) && an.set(en, Ot);
          }
          const Vt = /* @__PURE__ */ new Map();
          for (const nt of Rt) {
            const St = _t[nt[0]], en = _t[nt[1]], Ot = _t[nt[2]], bn = _t[nt[3]], mn = [
              Ot[0] - St[0],
              Ot[1] - St[1],
              Ot[2] - St[2]
            ], jn = [
              bn[0] - en[0],
              bn[1] - en[1],
              bn[2] - en[2]
            ], Us = mn[1] * jn[2] - mn[2] * jn[1], Xs = mn[2] * jn[0] - mn[0] * jn[2], Ks = mn[0] * jn[1] - mn[1] * jn[0], Ja = -90 * (0.5 * Math.sqrt(Us * Us + Xs * Xs + Ks * Ks)) / 4;
            for (const Zs of nt) {
              const Qs = Vt.get(Zs) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Qs[2] += Ja, Vt.set(Zs, Qs);
            }
          }
          try {
            const nt = kt(_t, Rt, {
              supports: an,
              loads: Vt
            }, Dt), St = Ct, en = ((_f2 = (_e3 = nt.deformations) == null ? void 0 : _e3.get(St)) == null ? void 0 : _f2[2]) ?? 0;
            oe.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: `Shell Q4 (${ct}x${Ct} mesh), Mindlin-Reissner + incompatible modes`,
              nodes: _t,
              elements: Rt,
              results: [
                {
                  label: "Uz midspan free edge (ft)",
                  awatif: Math.abs(en),
                  reference: 0.3086,
                  refSource: "Wilson (2004) / MacNeal-Harder"
                }
              ]
            });
          } catch (nt) {
            oe.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: "ERROR: " + nt.message,
              nodes: _t,
              elements: Rt,
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
          const me = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), se = Math.max(...ee.nodes.map((Se) => Se[2]));
          ee.nodes.forEach((Se, je) => {
            Math.abs(Se[2]) < 0.01 && me.set(je, [
              true,
              true,
              true,
              true,
              true,
              true
            ]), Math.abs(Se[2] - se) < 0.01 && we.set(je, [
              10,
              0,
              0,
              0,
              0,
              0
            ]);
          }), e.nodeInputs.val = {
            supports: me,
            loads: we
          }, e.elementInputs.val = {}, e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        }
      }
      function o(x) {
        const w = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`$ File exported from Awatif FEM Validation: ${x.name}`), v.push(" "), v.push("$ PROGRAM INFORMATION"), v.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), v.push(""), v.push("$ CONTROLS"), v.push('  UNITS  "TONF"  "M"  "C"  '), v.push("");
        const F = /* @__PURE__ */ new Set();
        x.nodes.forEach((_) => F.add(Math.round(_[1] * 1e4) / 1e4));
        const X = [
          ...F
        ].sort((_, ue) => _ - ue), V = X.map((_, ue) => ue === 0 ? "Base" : `Level_${ue}`), ae = /* @__PURE__ */ new Map();
        X.forEach((_, ue) => ae.set(_, V[ue])), v.push("$ STORIES - IN SEQUENCE FROM TOP");
        for (let _ = X.length - 1; _ >= 1; _--) v.push(`  STORY "${V[_]}"  HEIGHT ${X[_] - X[_ - 1]} MASTERSTORY "Yes"  `);
        v.push(`  STORY "Base"  ELEV ${X[0]} `), v.push(""), v.push("$ MATERIAL PROPERTIES"), v.push('  MATERIAL  "CONC"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4'), v.push(`  MATERIAL  "CONC"    SYMTYPE "Isotropic"  E ${w}  U 0.2  A 1E-05`), v.push(""), v.push("$ FRAME SECTIONS"), v.push('  FRAMESECTION  "COL30"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.3 B 0.3 '), v.push('  FRAMESECTION  "VIGA"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.4 B 0.25 '), v.push("");
        const Q = x.elements.some((_) => _.length === 4);
        Q && (v.push("$ WALL/SLAB/DECK SECTIONS"), v.push('  SHELLPROP  "Muro20"  PROPTYPE  "Wall"  MATERIAL "CONC"  MODELINGTYPE "ShellThick"  WALLTHICKNESS 0.2 '), v.push(""));
        const K = /* @__PURE__ */ new Map();
        let pe = 0;
        x.nodes.forEach((_) => {
          const ue = `${_[0]},${_[2]}`;
          K.has(ue) || K.set(ue, `${++pe}`);
        }), v.push("$ POINT COORDINATES");
        for (const [_, ue] of K) {
          const [oe, fe] = _.split(",").map(Number);
          v.push(`  POINT "${ue}"  ${oe} ${fe} `);
        }
        v.push("");
        const ce = (_) => {
          const ue = x.nodes[_], oe = `${ue[0]},${ue[2]}`;
          return {
            pt: K.get(oe) || "1",
            story: ae.get(Math.round(ue[1] * 1e4) / 1e4) || "Base"
          };
        };
        v.push("$ LINE CONNECTIVITIES");
        const Ie = [];
        if (x.elements.forEach((_, ue) => {
          if (_.length !== 2) return;
          const oe = x.nodes[_[0]], fe = x.nodes[_[1]], ee = Math.abs(fe[1] - oe[1]), me = Math.sqrt((fe[0] - oe[0]) ** 2 + (fe[2] - oe[2]) ** 2), we = ee > me * 0.5, se = ce(_[0]), Se = ce(_[1]), je = we ? "COL30" : "VIGA";
          we ? (v.push(`  LINE  "E${ue + 1}"  COLUMN  "${se.pt}"  "${se.pt}"  1`), Ie.push(`  LINEASSIGN  "E${ue + 1}"  "${Se.story}"  SECTION "${je}"  `)) : (v.push(`  LINE  "E${ue + 1}"  BEAM  "${se.pt}"  "${Se.pt}"  0`), Ie.push(`  LINEASSIGN  "E${ue + 1}"  "${se.story}"  SECTION "${je}"  `));
        }), v.push(""), Q) {
          v.push("$ AREA CONNECTIVITIES");
          const _ = [];
          x.elements.forEach((ue, oe) => {
            if (ue.length !== 4) return;
            const fe = ue.map((ee) => ce(ee));
            v.push(`  AREA "W${oe + 1}"  PANEL  4  "${fe[0].pt}"  "${fe[1].pt}"  "${fe[2].pt}"  "${fe[3].pt}"  1  1  0  0  `), _.push(`  AREAASSIGN  "W${oe + 1}"  "${fe[2].story}"  SECTION "Muro20"  `);
          }), v.push(""), v.push("$ AREA ASSIGNS"), _.forEach((ue) => v.push(ue)), v.push("");
        }
        v.push("$ POINT ASSIGNS"), x.nodes.forEach((_, ue) => {
          if (Math.abs(_[1]) < 0.01) {
            const oe = ce(ue);
            v.push(`  POINTASSIGN  "${oe.pt}"  "${oe.story}"  RESTRAINT "UX UY UZ RX RY RZ"  `);
          }
        }), v.push(""), v.push("$ LINE ASSIGNS"), Ie.forEach((_) => v.push(_)), v.push(""), v.push("$ LOAD PATTERNS"), v.push('  LOADPATTERN "Lat"  TYPE  "Other"  SELFWEIGHT  0'), v.push(""), v.push("$ POINT OBJECT LOADS");
        const Pe = Math.max(...x.nodes.map((_) => _[1]));
        return x.nodes.forEach((_, ue) => {
          if (Math.abs(_[1] - Pe) < 0.01) {
            const oe = ce(ue);
            v.push(`  POINTLOAD  "${oe.pt}"  "${oe.story}"  "Lat"  TYPE "FORCE"  FX 10`);
          }
        }), v.push(""), v.push("  END"), v.push("$ END OF MODEL FILE"), v.join(`\r
`);
      }
      function l(x) {
        const w = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`"""ETABS API Validation: ${x.name}`), v.push('Generated by Awatif FEM Studio"""'), v.push("import comtypes.client, time, math"), v.push(""), v.push("helper = comtypes.client.CreateObject('ETABSv1.Helper')"), v.push("helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)"), v.push('myETABS = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")'), v.push("myETABS.ApplicationStart()"), v.push("time.sleep(10)"), v.push("SapModel = myETABS.SapModel"), v.push("SapModel.InitializeNewModel()"), v.push("SapModel.File.NewBlank()"), v.push("SapModel.SetPresentUnits(12)  # tonf_m_C"), v.push(""), v.push(`E = ${w}`), v.push('SapModel.PropMaterial.SetMaterial("CONC", 2)'), v.push('SapModel.PropMaterial.SetMPIsotropic("CONC", E, 0.2, 5.5e-6)'), v.push('SapModel.PropFrame.SetRectangle("COL30", "CONC", 0.30, 0.30)'), v.push('SapModel.PropFrame.SetRectangle("VIGA", "CONC", 0.40, 0.25)'), x.elements.some((V) => V.length === 4) && v.push('SapModel.PropArea.SetWall("Muro20", 6, False, "CONC", 0.20)'), v.push(""), v.push("# Add elements"), v.push("FN = ' '"), x.elements.forEach((V, ae) => {
          if (V.length === 2) {
            const Q = x.nodes[V[0]], K = x.nodes[V[1]], pe = Math.abs(K[1] - Q[1]), ce = Math.sqrt((K[0] - Q[0]) ** 2 + (K[2] - Q[2]) ** 2), Ie = pe > ce * 0.5 ? "COL30" : "VIGA";
            v.push(`[FN,r]=SapModel.FrameObj.AddByCoord(${Q[0]},${Q[2]},${Q[1]}, ${K[0]},${K[2]},${K[1]}, FN,"${Ie}","E${ae + 1}","Global")`);
          } else if (V.length === 4) {
            const Q = V.map((K) => x.nodes[K]);
            v.push(`SapModel.AreaObj.AddByCoord(4, [${Q.map((K) => K[0]).join(",")}], [${Q.map((K) => K[2]).join(",")}], [${Q.map((K) => K[1]).join(",")}], "", "Muro20")`);
          }
        }), v.push(""), v.push("# Supports at Z=0"), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push("    if abs(float(c[2])) < 0.01:"), v.push("        SapModel.PointObj.SetRestraint(names[1][i], [True]*6)"), v.push(""), v.push("# Load at top"), v.push('SapModel.LoadPatterns.Add("Lat", 8, 0, True)');
        const X = Math.max(...x.nodes.map((V) => V[1]));
        v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push(`    if abs(float(c[2]) - ${X}) < 0.01:`), v.push('        SapModel.PointObj.SetLoadForce(names[1][i], "Lat", [10,0,0,0,0,0])'), v.push(""), v.push(`SapModel.File.Save(r"C:\\Users\\j-b-j\\Downloads\\validation_${x.name.replace(/[^a-zA-Z0-9]/g, "_")}.EDB")`), v.push("time.sleep(1)"), v.push("SapModel.Analyze.RunAnalysis()"), v.push("time.sleep(5)"), v.push(""), v.push("# Results"), v.push("SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()"), v.push('SapModel.Results.Setup.SetCaseSelectedForOutput("Lat")'), v.push(`print(f"\\n=== ETABS: ${x.name} ===")`), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    name = names[1][i]"), v.push("    c = SapModel.PointObj.GetCoordCartesian(name)"), v.push("    NR=0;Obj=[];Elm=[];AC=[];ST=[];SN=[];U1=[];U2=[];U3=[];R1=[];R2=[];R3=[]"), v.push("    [NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3,ret]=SapModel.Results.JointDispl(name,0,NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3)"), v.push("    if NR > 0:"), v.push('        print(f"  {name} Z={float(c[2]):.1f}: Ux={U1[0]*100:.4f} cm")'), v.push(""), v.push('print("\\nAwatif results:")');
        for (const V of x.results) v.push(`print(f"  ${V.label}: Awatif=${V.awatif.toFixed(4)}, ETABS=${V.reference.toFixed(4)}, Ratio={${V.awatif.toFixed(4)}/${V.reference.toFixed(4)}:.4f}")`);
        return v.push("SapModel.View.RefreshView(0, False)"), v.join(`
`);
      }
      function s(x, w) {
        const v = new Blob([
          x
        ], {
          type: "text/plain"
        }), F = URL.createObjectURL(v), X = document.createElement("a");
        X.href = F, X.download = w, X.click(), URL.revokeObjectURL(F);
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
      </div>`, F = true;
        window.__awatifTests = x;
        for (let V = 0; V < x.length; V++) {
          const ae = x[V];
          v += '<div style="margin-bottom:16px;border:1px solid #333;border-radius:6px;padding:10px">', v += '<div style="display:flex;justify-content:space-between;align-items:center">', v += `<div style="font-weight:bold;color:#00d4ff">${ae.name}</div>`, v += "<div>", v += `<button onclick="window.__awatifDownloadE2k(${V})" style="background:#1e3a5f;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;margin-right:4px;border-radius:3px">e2k</button>`, v += `<button onclick="window.__awatifDownloadPy(${V})" style="background:#2a1e3a;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;border-radius:3px">py</button>`, v += "</div></div>", v += `<div style="color:#888;font-size:11px;margin-bottom:8px">${ae.formulation}</div>`, v += `<table style="width:100%;border-collapse:collapse;font-size:12px">
          <tr style="color:#888"><td style="padding:3px 6px">Measure</td><td style="text-align:right">Awatif</td><td style="text-align:right">Reference</td><td style="text-align:right">Ratio</td><td style="text-align:right">Source</td><td style="text-align:center"></td></tr>`;
          for (const Q of ae.results) {
            const K = Q.reference !== 0 ? Q.awatif / Q.reference : 1, pe = Math.abs(K - 1) < 0.05;
            pe || (F = false);
            const ce = pe ? "#4caf50" : "#f44336", Ie = pe ? "PASS" : "FAIL";
            v += `<tr style="border-top:1px solid #333">
            <td style="padding:3px 6px">${Q.label}</td>
            <td style="text-align:right;color:#fff">${Q.awatif.toFixed(4)}</td>
            <td style="text-align:right;color:#aaa">${Q.reference.toFixed(4)}</td>
            <td style="text-align:right;color:${ce};font-weight:bold">${K.toFixed(4)}</td>
            <td style="text-align:right;color:#888;font-size:11px">${Q.refSource}</td>
            <td style="text-align:center;color:${ce};font-size:10px;font-weight:bold">${Ie}</td></tr>`;
          }
          v += "</table></div>";
        }
        v += F ? '<div style="color:#4caf50;font-weight:bold;text-align:center;margin-top:8px">ALL TESTS PASSED (< 5% error vs ETABS)</div>' : '<div style="color:#f44336;font-weight:bold;text-align:center;margin-top:8px">Some tests exceeded 5% tolerance</div>', w.innerHTML = v, document.body.appendChild(w), window.__awatifDownloadE2k = (V) => {
          const ae = window.__awatifTests[V], Q = ae.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(o(ae), `${Q}.e2k`);
        }, window.__awatifDownloadPy = (V) => {
          const ae = window.__awatifTests[V], Q = ae.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(l(ae), `${Q}_etabs.py`);
        };
      }
      (_h = Le.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (x) => {
        x.stopPropagation(), Sa();
      });
      let a = "";
      const r = Le.querySelector("#cad3d-io-menu"), f = Le.querySelector("#cad3d-io-file");
      function i(x, w) {
        e.nodes.val = x.nodes, e.elements.val = x.elements, e.nodeInputs.val = x.nodeInputs, e.elementInputs.val = x.elementInputs, x.sectionShapes && x.elementInputs && (x.elementInputs.sectionShapes = x.sectionShapes), e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        const v = x.elements.filter((X) => X.length === 2).length, F = x.elements.filter((X) => X.length >= 3).length;
        console.log(`${w} (${x.nodes.length} nodos, ${v} frames, ${F} shells): ${x.nodes.length} nodes, ${x.elements.length} elements`), setTimeout(() => wt(), 50);
      }
      function d(x, w) {
        var _a3, _b2, _c2;
        const v = {};
        x.elementInfo.forEach((K) => v[K.category] = (v[K.category] || 0) + 1), (_a3 = document.getElementById("ifc-filter-panel")) == null ? void 0 : _a3.remove();
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
        ], V = [
          "opening",
          "rebar",
          "plate",
          "fastener",
          "other"
        ], ae = {
          column: "Columnas",
          beam: "Vigas",
          slab: "Losas",
          footing: "Zapatas",
          member: "Diagonales",
          wall: "Muros",
          opening: "Aberturas",
          rebar: "Refuerzo",
          plate: "Placas",
          fastener: "Pernos",
          other: "Otros"
        };
        let Q = `<h3 style="color:#00ccff;margin:0 0 12px">IFC \u2192 Modelo Anal\xEDtico</h3>
        <div style="color:#888;margin-bottom:10px">Selecciona qu\xE9 convertir a FEM:</div>
        <div style="border:1px solid #444;border-radius:6px;padding:8px;margin-bottom:8px">
          <div style="color:#33ff33;font-weight:bold;margin-bottom:4px">Estructural</div>`;
        for (const K of X) {
          const pe = v[K] || 0;
          if (pe === 0) continue;
          const ce = [
            "column",
            "beam",
            "slab"
          ].includes(K) ? "checked" : "";
          Q += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0">
          <input type="checkbox" data-ifc-cat="${K}" ${ce}>
          <span>${ae[K] || K}</span>
          <span style="color:#888;margin-left:auto">(${pe})</span>
        </label>`;
        }
        Q += `</div><div style="border:1px solid #333;border-radius:6px;padding:8px;margin-bottom:12px">
        <div style="color:#ff6666;font-weight:bold;margin-bottom:4px">No estructural (solo visual)</div>`;
        for (const K of V) {
          const pe = v[K] || 0;
          pe !== 0 && (Q += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0;color:#888">
          <input type="checkbox" data-ifc-cat="${K}" disabled>
          <span>${ae[K] || K}</span>
          <span style="margin-left:auto">(${pe})</span>
        </label>`);
        }
        Q += `</div>
        <div style="display:flex;gap:8px">
          <button id="ifc-gen-analytical" style="flex:1;padding:8px;background:#0f3460;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:13px;font-weight:bold">
            \u{1F527} Generar Modelo Anal\xEDtico
          </button>
          <button id="ifc-cancel" style="padding:8px 12px;background:#333;color:#aaa;border:1px solid #555;border-radius:6px;cursor:pointer">\u2715</button>
        </div>`, F.innerHTML = Q, document.body.appendChild(F), F.querySelectorAll("input[data-ifc-cat]").forEach((K) => {
          K.addEventListener("change", () => {
            const pe = K.dataset.ifcCat, ce = x.detailCategories.get(pe);
            if (ce) {
              ce.visible = K.checked;
              const Ie = Ze();
              Ie && Ie.render();
            }
          });
        }), (_b2 = F.querySelector("#ifc-gen-analytical")) == null ? void 0 : _b2.addEventListener("click", () => {
          var _a4;
          const K = /* @__PURE__ */ new Set();
          F.querySelectorAll("input[data-ifc-cat]:checked").forEach((oe) => {
            K.add(oe.dataset.ifcCat);
          });
          const pe = w.nodes.map((oe) => [
            oe.x,
            oe.y,
            oe.z
          ]), ce = [], Ie = {
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
          let _ = 0;
          for (const oe of w.elements) if (K.has(oe.category) && oe.type === "frame" && oe.nodeIds.length >= 2) {
            ce.push(oe.nodeIds);
            const fe = ((_a4 = w.materials) == null ? void 0 : _a4.get(oe.material)) || {
              E: 2132888792e-2,
              nu: 0.2,
              rho: 2.4
            }, ee = oe.b || 0.3, me = oe.h || 0.3, we = ee * me, se = ee * me * me * me / 12, Se = me * ee * ee * ee / 12, je = ee * me * (ee * ee + me * me) / 12, rt = fe.E / (2 * (1 + fe.nu));
            Ie.elasticities.set(_, fe.E), Ie.shearModuli.set(_, rt), Ie.areas.set(_, we), Ie.momentsOfInertiaZ.set(_, Se), Ie.momentsOfInertiaY.set(_, se), Ie.torsionalConstants.set(_, je), Ie.densities.set(_, fe.rho), Ie.sectionShapes.set(_, {
              type: "rect",
              b: ee,
              h: me,
              name: oe.sectionName
            }), _++;
          }
          const ue = Math.min(...pe.map((oe) => oe[2]));
          pe.forEach((oe, fe) => {
            Math.abs(oe[2] - ue) < 0.05 && Pe.supports.set(fe, [
              true,
              true,
              true,
              true,
              true,
              true
            ]);
          });
          for (const [, oe] of x.detailCategories) {
            const fe = Ze();
            fe && fe.scene.remove(oe);
          }
          i({
            nodes: pe,
            elements: ce,
            nodeInputs: Pe,
            elementInputs: Ie,
            sectionShapes: Ie.sectionShapes,
            info: {
              nNodes: pe.length,
              nFrames: ce.length
            }
          }, "IFC analytical"), F.remove();
        }), (_c2 = F.querySelector("#ifc-cancel")) == null ? void 0 : _c2.addEventListener("click", () => {
          for (const [, pe] of x.detailCategories) {
            const ce = Ze();
            ce && ce.scene.remove(pe);
          }
          const K = Ze();
          K && K.render(), F.remove();
        });
      }
      function b(x) {
        D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map();
        const w = /* @__PURE__ */ new Map();
        for (let ce = 0; ce < x.stories.length; ce++) w.set(x.stories[ce].name, ce);
        for (let ce = 0; ce < x.elementTypes.length; ce++) {
          const Ie = x.elementTypes[ce], Pe = x.elementStories[ce], _ = w.get(Pe) ?? 0;
          $e.set(ce, _), Ie === "COLUMN" || Ie === "BRACE" ? D.add(ce) : G.add(ce);
        }
        T = "edificio";
        const v = x.grids.filter((ce) => ce.dir === "X").sort((ce, Ie) => ce.coord - Ie.coord), F = x.grids.filter((ce) => ce.dir === "Y").sort((ce, Ie) => ce.coord - Ie.coord);
        let X, V, ae, Q;
        if (v.length > 0 || F.length > 0) X = v.map((ce) => ce.coord), V = F.map((ce) => ce.coord), ae = v.map((ce) => ce.label), Q = F.map((ce) => ce.label);
        else {
          const ce = new Set(x.nodes.map((Pe) => Pe[0])), Ie = new Set(x.nodes.map((Pe) => Pe[1]));
          X = [
            ...ce
          ].sort((Pe, _) => Pe - _), V = [
            ...Ie
          ].sort((Pe, _) => Pe - _), ae = X.map((Pe, _) => String(_ + 1)), Q = V.map((Pe, _) => String.fromCharCode(65 + _));
        }
        const K = x.stories.length > 0 ? Math.max(...x.stories.map((ce) => ce.elev)) : Math.max(...x.nodes.map((ce) => ce[2]));
        We = X, Xe = V, pt = K, setTimeout(() => {
          wt(), Xn(X, V, K, ae, Q), wo(x.stories, X, V), No(), qo();
        }, 100);
        const pe = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const ce of x.elementTypes) pe[ce]++;
        console.log(`E2K grids: X=[${ae.join(",")}] Y=[${Q.join(",")}]`), console.log(`E2K stories: ${x.stories.map((ce) => `${ce.name}@${ce.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${pe.COLUMN} columns, ${pe.BEAM} beams, ${pe.BRACE} braces`), Qe();
      }
      function S(x, w) {
        const v = new Blob([
          x
        ], {
          type: "text/plain"
        }), F = URL.createObjectURL(v), X = document.createElement("a");
        X.href = F, X.download = w, X.click(), URL.revokeObjectURL(F);
      }
      r && r.addEventListener("change", () => {
        if (a = r.value, r.value = "", a.startsWith("import")) a === "import-e2k" ? f.accept = ".e2k,.E2K" : a === "import-s2k" ? f.accept = ".s2k,.S2K,.$2k" : a === "import-ifc" ? f.accept = ".ifc,.IFC" : a === "import-py" ? f.accept = ".py" : a === "import-tcl" && (f.accept = ".tcl"), f.click();
        else if (a.startsWith("export")) {
          const x = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: e.nodeInputs.val,
            elementInputs: e.elementInputs.val
          };
          try {
            a === "export-e2k" ? S(Cl({
              ...x,
              title: "Awatif Model",
              e2kModel: Ve ?? void 0
            }), "model.e2k") : a === "export-s2k" ? S(Ll({
              ...x,
              title: "Awatif Model"
            }), "model.s2k") : a === "export-py" ? S(Ol(x), "model_opensees.py") : a === "export-tcl" && S(Nl(x), "model_opensees.tcl");
          } catch (w) {
            alert("Export error: " + w.message);
          }
        }
      }), f && f.addEventListener("change", () => {
        var _a3;
        const x = (_a3 = f.files) == null ? void 0 : _a3[0];
        if (!x) return;
        if (a === "import-ifc") {
          const v = new FileReader();
          v.onload = async () => {
            const F = v.result;
            try {
              const X = Ze();
              if (!X) {
                alert("Viewer not ready");
                return;
              }
              console.log("IFC: Loading 3D geometry...");
              const V = await Yl(X.scene, F);
              console.log(`IFC: ${V.meshCount} meshes loaded, bbox:`, V.bbox);
              const ae = new Oe();
              V.bbox.getCenter(ae);
              const Q = new Oe();
              V.bbox.getSize(Q);
              const K = Math.max(Q.x, Q.y, Q.z);
              X.controls.target.copy(ae), X.camera.position.set(ae.x + K, ae.y + K * 0.5, ae.z + K), X.camera.lookAt(ae), X.controls.maxDistance = K * 5, X.controls.update(), X.render(), window.__ifcLoadResult = V, window.__ifcArrayBuffer = F;
              const pe = new FileReader();
              pe.onload = () => {
                const ce = pe.result, Ie = jl(ce);
                window.__ifcAnalytical = Ie;
                const Pe = {};
                V.elementInfo.forEach((_) => Pe[_.category] = (Pe[_.category] || 0) + 1), console.log("IFC categories:", Pe), console.log(`IFC: ${V.elementInfo.size} geometric elements, ${Ie.elements.length} analytical elements`), d(V, Ie);
              }, pe.readAsText(x);
            } catch (X) {
              alert("IFC error: " + X.message), console.error(X);
            }
          }, v.readAsArrayBuffer(x), f.value = "";
          return;
        }
        const w = new FileReader();
        w.onload = () => {
          const v = w.result;
          try {
            if (a === "import-e2k") {
              const F = kl(v);
              Ve = F, i(F, "E2K imported"), b(F);
            } else if (a === "import-s2k") {
              const F = Tl(v);
              i({
                nodes: F.nodes,
                elements: F.elements,
                nodeInputs: F.nodeInputs,
                elementInputs: F.elementInputs,
                sectionShapes: F.sectionShapes,
                info: F.info
              }, "S2K imported");
            } else if (a === "import-py") {
              const F = ql(v);
              i(F, "OpenSeesPy imported");
            } else if (a === "import-tcl") {
              const F = _l(v);
              i(F, "OpenSees Tcl imported");
            }
          } catch (F) {
            alert("Import error: " + F.message), console.error(F);
          }
        }, w.readAsText(x), f.value = "";
      });
      const $ = Le.querySelector("#cad3d-force-unit");
      $ && ($.value = g, $.addEventListener("change", (x) => {
        x.stopPropagation(), g = $.value, M = Rn(g, R), T && et(T);
      }));
      const y = Le.querySelector("#cad3d-length-unit");
      y && (y.value = R, y.addEventListener("change", (x) => {
        x.stopPropagation(), R = y.value, M = Rn(g, R), T && et(T);
      })), Le.querySelectorAll("[data-preset]").forEach((x) => {
        x.addEventListener("click", (w) => {
          w.stopPropagation();
          const v = x.dataset.preset, F = B[v];
          F && (g = F.force, R = F.length, J = F.stress, M = Rn(g, R), $ && ($.value = g), y && (y.value = R), Le.querySelectorAll("[data-preset]").forEach((X) => {
            X.classList.toggle("active", X.dataset.preset === v);
          }), T && et(T), console.log(`Preset: ${v} \u2192 ${g}+${R}, stress: ${J.label}`));
        });
      }), (_i = Le.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (x) => {
        x.stopPropagation(), _a();
      }), (_j = Le.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (x) => {
        x.stopPropagation(), Da();
      }), (_k = Le.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (x) => {
        x.stopPropagation(), Ha();
      }), (_l2 = Le.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l2.addEventListener("click", (x) => {
        x.stopPropagation(), Wa();
      }), (_m = Le.querySelector("#cad3d-calc")) == null ? void 0 : _m.addEventListener("click", (x) => {
        x.stopPropagation(), ea(async () => {
          const { openCalcPanel: w } = await import("./calcPanel-yPr-zIDs.js").then(async (m2) => {
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
      }), (_n2 = Le.querySelector("#cad3d-modal")) == null ? void 0 : _n2.addEventListener("click", (x) => {
        var _a3, _b2;
        x.stopPropagation(), qe = !qe, (_a3 = Le.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", qe);
        const v = Le.querySelector("#cad3d-mode-prev"), F = Le.querySelector("#cad3d-mode-next"), X = Le.querySelector("#cad3d-mode-label"), V = Le.querySelector("#cad3d-modal-scale");
        if (qe) {
          const ae = Ze();
          ((_b2 = ae == null ? void 0 : ae.settings) == null ? void 0 : _b2.loads) && (_e = ae.settings.loads.rawVal, ae.settings.loads.val = false), Lo(), v.style.display = "", F.style.display = "", X.style.display = "", V && (V.style.display = ""), p();
        } else Co(), v.style.display = "none", F.style.display = "none", X.style.display = "none", V && (V.style.display = "none"), T && T !== "placa-q4" && T !== "placa-3q" && Re(), setTimeout(() => {
          var _a4;
          const ae = Ze();
          ((_a4 = ae == null ? void 0 : ae.settings) == null ? void 0 : _a4.loads) && _e && (ae.settings.loads.val = true);
        }, 600);
      });
      function p() {
        var _a3;
        const x = Le.querySelector("#cad3d-mode-label");
        if (!x || !(Ae == null ? void 0 : Ae.frequencies)) return;
        const w = Ae.frequencies[he], v = w > 0 ? 1 / w : 0, F = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let X = 0; X <= he; X++) {
          const V = (_a3 = Ae.massParticipation) == null ? void 0 : _a3[X];
          if (V) for (let ae = 0; ae < 6; ae++) F[ae] += V[ae];
        }
        x.textContent = `Modo ${he + 1} \u2014 ${w.toFixed(2)} Hz \u2014 T=${v.toFixed(3)}s \u2014 \u03A3Ux=${(F[0] * 100).toFixed(1)}% \u03A3Uy=${(F[1] * 100).toFixed(1)}% \u03A3Rz=${(F[5] * 100).toFixed(1)}%`;
      }
      (_o2 = Le.querySelector("#cad3d-mode-prev")) == null ? void 0 : _o2.addEventListener("click", (x) => {
        if (x.stopPropagation(), !(Ae == null ? void 0 : Ae.modeShapes)) return;
        he = (he - 1 + Ae.modeShapes.length) % Ae.modeShapes.length;
        const w = Ae.modeShapes[he], { extent: v } = yn();
        let F = 0;
        for (let X = 0; X < ke.length; X++) {
          const V = w[X * 6] || 0, ae = w[X * 6 + 1] || 0, Q = w[X * 6 + 2] || 0;
          F = Math.max(F, Math.sqrt(V * V + ae * ae + Q * Q));
        }
        Ge = F > 1e-12 ? v * 0.05 / F : 1, Qn(), p();
      }), (_p = Le.querySelector("#cad3d-mode-next")) == null ? void 0 : _p.addEventListener("click", (x) => {
        var _a3, _b2;
        if (x.stopPropagation(), !(Ae == null ? void 0 : Ae.modeShapes)) return;
        he = (he + 1) % Ae.modeShapes.length;
        const w = Ae.modeShapes[he];
        if (!w) {
          console.warn("No shape for mode", he);
          return;
        }
        const { extent: v } = yn();
        let F = 0;
        for (let X = 0; X < ke.length; X++) {
          const V = w[X * 6] || 0, ae = w[X * 6 + 1] || 0, Q = w[X * 6 + 2] || 0;
          F = Math.max(F, Math.sqrt(V * V + ae * ae + Q * Q));
        }
        Ge = F > 1e-12 ? v * 0.05 / F : 1, console.log(`Mode ${he + 1}: maxDisp=${F.toExponential(3)}, scale=${Ge.toFixed(1)}, f=${(_b2 = (_a3 = Ae.frequencies) == null ? void 0 : _a3[he]) == null ? void 0 : _b2.toFixed(2)} Hz`), Qn(), p();
      });
      const h = Le.querySelector("#cad3d-modal-scale");
      h == null ? void 0 : h.addEventListener("mousedown", (x) => x.stopPropagation()), h == null ? void 0 : h.addEventListener("change", () => {
        qe && (Ae == null ? void 0 : Ae.modeShapes) && Qn();
      });
      const I = Le.querySelector("#cad3d-cli-toggle"), A = Le.querySelector("#cad3d-cli-panel"), z = Le.querySelector("#cad3d-cli-output"), P = Le.querySelector("#cad3d-cmd"), k = [];
      let m = -1;
      I == null ? void 0 : I.addEventListener("click", (x) => {
        if (x.stopPropagation(), A) {
          const w = A.style.display !== "none";
          A.style.display = w ? "none" : "block", w || (P == null ? void 0 : P.focus(), z && !z.textContent && (z.textContent = `CLI ready. Commands:
  cad.addNode(x, y, z)     cad.addFrame(i, j)
  cad.addSupport(n)        cad.addLoad(n, [fx,fy,fz,0,0,0])
  cad.frame([5,5],[3,3])   cad.building([5],[4],[3])
  cad.galpon(12,20,6,3)    cad.clear()
  cad.info()               cad.listNodes()
`));
        }
      }), P == null ? void 0 : P.addEventListener("mousedown", (x) => x.stopPropagation()), document.addEventListener("keydown", (x) => {
        var _a3;
        if ((x.ctrlKey || x.metaKey) && x.key === "z" && !x.shiftKey) {
          x.preventDefault(), As();
          return;
        }
        if ((x.ctrlKey || x.metaKey) && (x.key === "y" || x.key === "z" && x.shiftKey)) {
          x.preventDefault(), Ls();
          return;
        }
        if ((x.key === "Delete" || x.key === "Backspace") && ht.size > 0) {
          x.preventDefault(), ht.forEach((w) => U.add(w)), ht.clear(), fn && (fn.remove(), fn = null), Re();
          return;
        }
        if (x.key === "Escape") {
          if (pn) if (vt !== null) {
            vt = null;
            const w = Ze();
            Nt && w && (w.scene.remove(Nt), Nt.geometry.dispose(), Nt.material.dispose(), Nt = null), qt && w && (w.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), w == null ? void 0 : w.render();
          } else io();
          Yt && ro(), nn && (nn = false, An(), (_a3 = Le.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), P == null ? void 0 : P.addEventListener("keydown", (x) => {
        if (x.stopPropagation(), x.key === "Enter") {
          const w = P.value.trim();
          if (w) {
            k.unshift(w), m = -1, z && (z.textContent += `> ${w}
`);
            try {
              const v = new Function("cad", `return ${w}`)(Ke);
              if (v !== void 0 && z) {
                const F = typeof v == "object" ? JSON.stringify(v, null, 2) : String(v);
                z.textContent += `${F}
`;
              }
            } catch (v) {
              z && (z.textContent += `ERROR: ${v.message}
`);
            }
            z && (z.scrollTop = z.scrollHeight), P.value = "";
          }
        } else x.key === "ArrowUp" ? (x.preventDefault(), k.length > 0 && m < k.length - 1 && (m++, P.value = k[m])) : x.key === "ArrowDown" && (x.preventDefault(), m > 0 ? (m--, P.value = k[m]) : (m = -1, P.value = ""));
      });
      let u = false, E = 0, L = 0, O = 0, W = 0;
      Le.addEventListener("mousedown", (x) => {
        const w = x.target.tagName;
        if (w === "BUTTON" || w === "INPUT" || w === "SELECT") return;
        u = true;
        const v = Le.getBoundingClientRect();
        Le.style.bottom = "unset", E = x.clientX, L = x.clientY, O = v.left, W = v.top, x.preventDefault();
      }), window.addEventListener("mousemove", (x) => {
        u && (x.preventDefault(), Le.style.left = O + (x.clientX - E) + "px", Le.style.top = W + (x.clientY - L) + "px");
      }), window.addEventListener("mouseup", () => {
        u = false;
      }), Qe();
    }, 10);
    function Ze() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function yn() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new Oe(),
        extent: 10
      };
      let n = 1 / 0, o = 1 / 0, l = 1 / 0, s = -1 / 0, c = -1 / 0, a = -1 / 0;
      for (const [i, d, b] of t) i < n && (n = i), i > s && (s = i), d < o && (o = d), d > c && (c = d), b < l && (l = b), b > a && (a = b);
      const r = new Oe((n + s) / 2, (o + c) / 2, (l + a) / 2), f = Math.max(s - n, c - o, a - l, 1);
      return {
        center: r,
        extent: f
      };
    }
    function wt(t = false) {
      const n = Ze();
      if (!n) return;
      const { extent: o } = yn();
      let l;
      o <= 5 ? l = Math.max(1, Math.ceil(o * 1.5)) : o <= 50 ? l = Math.max(5, Math.ceil(o * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(o * 1.3 / 10) * 10), n.settings.gridSize.val = l, n.scene.children.filter((b) => b.type === "GridHelper").forEach((b) => {
        var _a2, _b;
        (_a2 = b.geometry) == null ? void 0 : _a2.dispose(), (_b = b.material) == null ? void 0 : _b.dispose(), n.scene.remove(b);
      });
      const c = Xa(), a = new ll(l, 20, c.grid, c.grid);
      a.rotation.x = Math.PI / 2, a.position.set(0.5 * l, 0.5 * l, 0), n.scene.add(a), n.scene.children.filter((b) => b.type === "Group" && b.name !== "gridAxes" && b.name !== "loadsGroup" && (b.name === "viewerAxes" || b.children.some((S) => S instanceof co))).forEach((b) => {
        b.traverse((S) => {
          S.geometry && S.geometry.dispose(), S.material && (S.material.map && S.material.map.dispose(), S.material.dispose());
        }), n.scene.remove(b);
      });
      const f = 0.05 * l, i = new so();
      i.name = "viewerAxes";
      const d = c.axisArrow;
      i.add(new co(new Oe(1, 0, 0), new Oe(), 1, d, 0.2, 0.2)), i.add(new co(new Oe(0, 1, 0), new Oe(), 1, d, 0.2, 0.2)), i.add(new co(new Oe(0, 0, 1), new Oe(), 1, d, 0.2, 0.2)), i.children.forEach((b) => b.scale.set(f, f, f));
      for (const [b, S, $] of [
        [
          "X",
          "red",
          [
            1.3 * f,
            0,
            0
          ]
        ],
        [
          "Y",
          "green",
          [
            0,
            1.3 * f,
            0
          ]
        ],
        [
          "Z",
          "blue",
          [
            0,
            0,
            1.3 * f
          ]
        ]
      ]) {
        const y = document.createElement("canvas");
        y.width = 64, y.height = 64;
        const p = y.getContext("2d");
        p.fillStyle = S, p.font = "bold 50px Arial", p.textAlign = "center", p.textBaseline = "middle", p.fillText(b, 32, 34);
        const h = new Xo(y);
        h.needsUpdate = true;
        const I = new po(new fo({
          map: h,
          depthTest: false,
          transparent: true
        }));
        I.position.set($[0], $[1], $[2]), I.scale.set(0.4 * f, 0.4 * f, 1), I.renderOrder = 99, i.add(I);
      }
      n.scene.add(i), t ? n.render() : $n("3d");
    }
    function zs(t, n, o) {
      if (t.length < 2) return o * 10;
      let l = 1 / 0;
      return n > 0 && (l = Math.min(l, Math.abs(t[n] - t[n - 1]))), n < t.length - 1 && (l = Math.min(l, Math.abs(t[n + 1] - t[n]))), l * 0.45 || o * 0.1;
    }
    function $n(t) {
      var _a2;
      const n = Ze();
      if (!n) return;
      const { center: o, extent: l } = yn(), s = n.renderer.domElement.clientWidth / (n.renderer.domElement.clientHeight || 1), c = l * 0.7;
      n.controls.maxDistance = l * 5, n.controls.minDistance = l * 0.05, n.renderer.clippingPlanes = [];
      const a = () => {
        n.scene.traverse((r) => {
          var _a3;
          if (!r.material) return;
          const f = r.type === "GridHelper" || r.type === "AxesHelper", i = r.isSprite, d = ((_a3 = r.userData) == null ? void 0 : _a3.noClip) === true;
          (f || i || d) && (Array.isArray(r.material) ? r.material.forEach((b) => {
            b.clippingPlanes = [];
          }) : r.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const r = n.perspCamera.fov, f = l / (2 * Math.tan(r * Math.PI / 360)) * 2.2;
        n.perspCamera.position.set(o.x + f * 0.5, o.y - f * 0.8, o.z + f * 0.5), n.controls.target.copy(o), n.setActiveCamera(n.perspCamera);
      } else {
        const r = n.orthoCamera;
        r.left = -c * s, r.right = c * s, r.top = c, r.bottom = -c, r.near = -l * 10, r.far = l * 10, r.updateProjectionMatrix();
        const f = (i, d, b) => {
          r.position.copy(i), r.up.copy(b), n.controls.target.copy(d), r.lookAt(d), n.controls.update();
        };
        if (t === "plan") n.renderer.clippingPlanes = [], f(new Oe(o.x, o.y, o.z + l * 2), new Oe(o.x, o.y, o.z), new Oe(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const i = parseInt(t.split(":")[1]), d = ((_a2 = Z.hPiso) == null ? void 0 : _a2.val) ?? 3, b = (i + 1) * d, S = d * 0.45;
          n.renderer.clippingPlanes = [
            new In(new Oe(0, 0, -1), b + S),
            new In(new Oe(0, 0, 1), -b + S)
          ], a(), f(new Oe(o.x, o.y, b + l * 2), new Oe(o.x, o.y, b), new Oe(0, 1, 0));
        } else if (t === "elevX") r.position.set(o.x + l * 2, o.y, o.z), r.up.set(0, 0, 1);
        else if (t === "elevY") r.position.set(o.x, o.y - l * 2, o.z), r.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const i = parseInt(t.split(":")[1]), d = We[i] ?? o.x;
          if (Xe.length > 1) {
            const S = zs(We, i, l);
            n.renderer.clippingPlanes = [
              new In(new Oe(-1, 0, 0), d + S),
              new In(new Oe(1, 0, 0), -d + S)
            ], a(), r.position.set(o.x + l * 2, o.y, o.z), n.controls.target.set(o.x, o.y, o.z);
          } else r.position.set(o.x, o.y - l * 2, o.z), n.controls.target.copy(o);
          r.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const i = parseInt(t.split(":")[1]), d = Xe[i] ?? o.y;
          if (We.length > 1) {
            const S = zs(Xe, i, l);
            n.renderer.clippingPlanes = [
              new In(new Oe(0, -1, 0), d + S),
              new In(new Oe(0, 1, 0), -d + S)
            ], a(), r.position.set(o.x, o.y - l * 2, o.z), n.controls.target.set(o.x, o.y, o.z);
          } else r.position.set(o.x + l * 2, o.y, o.z), n.controls.target.copy(o);
          r.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && n.controls.target.copy(o), n.setActiveCamera(r);
      }
    }
    function No() {
      const t = Le.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (We.length < 2 && Xe.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (c, a, r) => {
        const f = document.createElement("button");
        return f.textContent = c, f.dataset.view = a, f.title = r, f.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", f.addEventListener("click", (i) => {
          var _a2;
          i.stopPropagation();
          const d = f.classList.contains("view-active");
          Le.querySelectorAll("[data-view]").forEach((b) => b.classList.remove("view-active")), d ? ($n("3d"), (_a2 = Le.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : ($n(a), f.classList.add("view-active"));
        }), f;
      }, o = document.createElement("span");
      o.textContent = "Ejes:", o.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(o);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      We.forEach((c, a) => {
        const r = a < l.length ? l[a] : `X${a}`;
        t.appendChild(n(r, `axisX:${a}`, `Eje ${r} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(s), Xe.forEach((c, a) => {
        const r = `${a + 1}`;
        t.appendChild(n(r, `axisY:${a}`, `Eje ${r} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function qo() {
      var _a2;
      const t = Le.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const n = Math.round(((_a2 = Z.nPisos) == null ? void 0 : _a2.val) ?? 0);
      if (n < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (s, c, a) => {
        const r = document.createElement("button");
        return r.textContent = s, r.dataset.view = c, r.title = a, r.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", r.addEventListener("click", (f) => {
          var _a3;
          f.stopPropagation();
          const i = r.classList.contains("view-active");
          Le.querySelectorAll("[data-view]").forEach((d) => d.classList.remove("view-active")), i ? ($n("3d"), (_a3 = Le.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : ($n(c), r.classList.add("view-active"));
        }), r;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let s = 0; s < n; s++) t.appendChild(o(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function ka() {
      $n("3d"), Le.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    Ke.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, $n(t), Le.querySelectorAll("[data-view]").forEach((o) => o.classList.toggle("view-active", o.dataset.view === t));
    };
    let nn = false, Yt = false, pn = false, jt = "line", Xt = [], vt = null, Nt = null, qt = null, qn = null, Zt = null;
    const Et = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, _o = 0.5;
    let Do = [], Qt = null, zn = null;
    const _n = [], lo = [], Ta = 50;
    function Dn() {
      _n.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), _n.length > Ta && _n.shift(), lo.length = 0;
    }
    function As() {
      if (_n.length === 0) return;
      lo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = _n.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, vn(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function Ls() {
      if (lo.length === 0) return;
      _n.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = lo.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, vn(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const ht = /* @__PURE__ */ new Set();
    let Jt = null, Mn = [], Kt = null, fn = null;
    function Bo(t) {
      const n = Ze();
      if (!n) return;
      const o = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let r = 0; r < l.length; r++) {
        const f = o[l[r]], i = o[l[(r + 1) % l.length]];
        s.push(f[0], f[1], f[2], i[0], i[1], i[2]);
      }
      const c = new tn();
      c.setAttribute("position", new Ln(s, 3));
      const a = new Gn(c, new Yn({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      a.renderOrder = 9998, a.__elemIdx = t, n.scene.add(a), Mn.push(a), n.render();
    }
    function wn() {
      const t = Ze();
      Mn.forEach((n) => {
        t == null ? void 0 : t.scene.remove(n), n.geometry.dispose(), n.material.dispose();
      }), Mn = [], t == null ? void 0 : t.render();
    }
    function En() {
      fn && fn.remove();
      const t = Y.size > 0 || H;
      if (ht.size === 0 && !t) {
        fn = null;
        return;
      }
      const n = document.createElement("div");
      n.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", n.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${ht.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(n), fn = n, n.querySelector("#sel-assign").addEventListener("click", () => {
        Ga([
          ...ht
        ]);
      }), n.querySelector("#sel-info").addEventListener("click", () => {
        if (ht.size === 1) {
          const o = [
            ...ht
          ][0];
          qs(o);
        } else {
          const o = [
            ...ht
          ], l = e.nodes.val, s = e.elements.val;
          let c = 0, a = 0, r = 0, f = 0;
          o.forEach((d) => {
            const b = s[d];
            if (b) if (b.length === 2) {
              const S = l[b[0]], $ = l[b[1]], y = Math.abs($[0] - S[0]), p = Math.abs($[1] - S[1]), h = Math.abs($[2] - S[2]);
              h > y && h > p ? c++ : a++;
            } else b.length === 3 ? r++ : b.length === 4 && f++;
          });
          const i = [];
          c && i.push(`${c} columnas`), a && i.push(`${a} vigas`), f && i.push(`${f} shells Q4`), r && i.push(`${r} triangulos`), alert(`${o.length} elementos seleccionados:
${i.join(", ")}`);
        }
      }), n.querySelector("#sel-hide").addEventListener("click", () => {
        ht.forEach((o) => Y.add(o)), ht.clear(), wn(), En(), Re();
      }), n.querySelector("#sel-isolate").addEventListener("click", () => {
        H = true, j.clear(), ht.forEach((o) => j.add(o)), ht.clear(), wn(), En(), Re();
      }), n.querySelector("#sel-showall").addEventListener("click", () => {
        Y.clear(), H = false, j.clear(), En(), Re();
      }), n.querySelector("#sel-delete").addEventListener("click", () => {
        Dn(), ht.forEach((o) => U.add(o)), ht.clear(), wn(), En(), Re();
      }), n.querySelector("#sel-clear").addEventListener("click", () => {
        ht.clear(), wn(), En();
      });
    }
    function ro() {
      var _a2;
      Yt = false, ht.clear(), wn(), fn && (fn.remove(), fn = null), (_a2 = Le.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const n = Ze();
      n && (n.controls.enabled = true);
    }
    function An() {
      if (Jt) {
        const t = Ze();
        t == null ? void 0 : t.scene.remove(Jt), Jt.geometry.dispose(), Jt.material.dispose(), Jt = null, t == null ? void 0 : t.render();
      }
      Kt && (Kt.remove(), Kt = null);
    }
    function za(t) {
      Ho();
      const n = Ze();
      if (!n) return;
      const o = e.nodes.val[t];
      if (!o) return;
      zn = t;
      const l = 200, s = [
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
      for (const [c, a] of s) {
        const r = new Float32Array([
          o[0] - c[0] * l,
          o[1] - c[1] * l,
          o[2] - c[2] * l,
          o[0] + c[0] * l,
          o[1] + c[1] * l,
          o[2] + c[2] * l
        ]), f = new tn();
        f.setAttribute("position", new xo(r, 3));
        const i = new Wn({
          color: a,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), d = new Gn(f, i);
        d.computeLineDistances(), d.renderOrder = 9990, n.scene.add(d), Do.push(d);
      }
      n.render();
    }
    function Ho() {
      const t = Ze();
      for (const n of Do) t == null ? void 0 : t.scene.remove(n), n.geometry.dispose(), n.material.dispose();
      Do = [], zn = null, Qt && (Qt.remove(), Qt = null);
    }
    function Cs(t, n, o, l) {
      Qt || (Qt = document.createElement("div"), Qt.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(Qt));
      const s = l.x - o.x, c = l.y - o.y, a = l.z - o.z, r = Math.sqrt(s * s + c * c + a * a), f = Math.abs(s), i = Math.abs(c), d = Math.abs(a);
      let b = "";
      f > i && f > d ? b = `\u0394X=${s.toFixed(2)}` : i > f && i > d ? b = `\u0394Y=${c.toFixed(2)}` : d > 0.01 && (b = `\u0394Z=${a.toFixed(2)}`), Qt.textContent = `${r.toFixed(3)} m  ${b}`, Qt.style.left = t + 20 + "px", Qt.style.top = n - 10 + "px";
    }
    function Aa(t, n) {
      const l = e.nodes.val[n];
      if (!l) return null;
      const s = new Oe(l[0], l[1], l[2]), c = t.clone(), a = c.clone().sub(s), r = 0.3, f = Math.abs(a.x), i = Math.abs(a.y), d = Math.abs(a.z);
      return i < r && d < r && f > 0.01 ? new Oe(c.x, s.y, s.z) : f < r && d < r && i > 0.01 ? new Oe(s.x, c.y, s.z) : f < r && i < r && d > 0.01 ? new Oe(s.x, s.y, c.z) : null;
    }
    function io() {
      var _a2;
      const t = Ze();
      Nt && t && (t.scene.remove(Nt), Nt.geometry.dispose(), Nt.material.dispose(), Nt = null), qt && t && (t.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), Ho(), vt = null, Zt = null, pn = false, qn && (qn.remove(), qn = null), (_a2 = Le.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function La() {
      qn && qn.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const n = (s) => `padding:4px 10px;border:1px solid ${s ? "#00ccff" : "#555"};background:${s ? "#003355" : "#333"};color:${s ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, o = (s) => `padding:3px 6px;border:1px solid ${s ? "#33ff33" : "#444"};background:${s ? "#113311" : "#222"};color:${s ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${n(jt === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${n(jt === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${n(jt === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${n(jt === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${o(Et.node)}">Node</button>
      <button id="ds-grid" style="${o(Et.grid)}">Grid</button>
      <button id="ds-mid" style="${o(Et.midpoint)}">Mid</button>
      <button id="ds-track" style="${o(Et.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${_o}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), qn = t;
      const l = () => {
        const s = t.querySelector("#dt-line"), c = t.querySelector("#dt-arc"), a = t.querySelector("#dt-node"), r = t.querySelector("#dt-area");
        s && (s.style.cssText = n(jt === "line")), c && (c.style.cssText = n(jt === "arc")), a && (a.style.cssText = n(jt === "node")), r && (r.style.cssText = n(jt === "area"));
        const f = t.querySelector("#ds-node"), i = t.querySelector("#ds-grid"), d = t.querySelector("#ds-mid"), b = t.querySelector("#ds-track");
        f && (f.style.cssText = o(Et.node)), i && (i.style.cssText = o(Et.grid)), d && (d.style.cssText = o(Et.midpoint)), b && (b.style.cssText = o(Et.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        jt = "line", vt = null, Zt = null, Xt = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        jt = "arc", vt = null, Zt = null, Xt = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        jt = "node", vt = null, Zt = null, Xt = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        jt = "area", vt = null, Zt = null, Xt = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        Et.node = !Et.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        Et.grid = !Et.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        Et.midpoint = !Et.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        Et.track = !Et.track, Et.track || Ho(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        Et.gridSize = parseFloat(s.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => As()), t.querySelector("#dt-redo").addEventListener("click", () => Ls());
    }
    function Fs(t, n, o, l) {
      const s = l.getBoundingClientRect(), c = (t - s.left) / s.width * 2 - 1, a = -((n - s.top) / s.height) * 2 + 1, r = new oa();
      r.setFromCamera(new sa(c, a), o);
      const f = e.nodes.val, i = e.elements.val, d = 0.12;
      if (Et.node) {
        let $ = -1, y = 1 / 0;
        for (let p = 0; p < f.length; p++) {
          const h = f[p], I = new Oe(h[0], h[1], h[2]).project(o), A = Math.sqrt((I.x - c) ** 2 + (I.y - a) ** 2);
          A < d && A < y && (y = A, $ = p);
        }
        if ($ >= 0) return {
          nodeIdx: $,
          worldPos: new Oe(...f[$]),
          snapType: "node"
        };
      }
      if (Et.midpoint) {
        let $ = 1 / 0, y = null;
        for (const p of i) {
          if (p.length !== 2) continue;
          const h = f[p[0]], I = f[p[1]], A = new Oe((h[0] + I[0]) / 2, (h[1] + I[1]) / 2, (h[2] + I[2]) / 2), z = A.clone().project(o), P = Math.sqrt((z.x - c) ** 2 + (z.y - a) ** 2);
          P < d * 0.8 && P < $ && ($ = P, y = A);
        }
        if (y) return {
          nodeIdx: null,
          worldPos: y,
          snapType: "mid"
        };
      }
      if (Et.grid) {
        const $ = new In(new Oe(0, 0, 1), 0), y = new Oe();
        if (r.ray.intersectPlane($, y)) {
          const p = Et.gridSize || _o;
          return y.x = Math.round(y.x / p) * p, y.y = Math.round(y.y / p) * p, y.z = Math.round(y.z / p) * p, {
            nodeIdx: null,
            worldPos: y,
            snapType: "grid"
          };
        }
      }
      const b = new In(new Oe(0, 0, 1), 0), S = new Oe();
      return r.ray.intersectPlane(b, S), {
        nodeIdx: null,
        worldPos: S,
        snapType: "free"
      };
    }
    function Rs(t) {
      const n = Ze();
      if (!n) return;
      const o = e.nodes.val;
      if (qt && (n.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, s = t.snapType === "node" ? 0.08 : 0.06, c = t.snapType === "mid" ? new nl(s * 2, s * 2, s * 2) : new ol(s, 12, 12), a = new sl({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        qt = new ca(c, a), qt.position.copy(t.worldPos), qt.renderOrder = 9999, n.scene.add(qt);
      }
      if (Nt && (n.scene.remove(Nt), Nt.geometry.dispose(), Nt.material.dispose(), Nt = null), vt !== null && t.worldPos) {
        const l = o[vt], s = new tn();
        if (jt === "arc" && Zt !== null) {
          const a = o[Zt], r = Ps(new Oe(l[0], l[1], l[2]), new Oe(a[0], a[1], a[2]), t.worldPos, 16), f = [];
          for (let i = 0; i < r.length - 1; i++) f.push(r[i].x, r[i].y, r[i].z, r[i + 1].x, r[i + 1].y, r[i + 1].z);
          s.setAttribute("position", new Ln(f, 3));
        } else s.setAttribute("position", new Ln([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const c = new Yn({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        Nt = new Cn(s, c), jt === "arc" && Zt !== null && (Nt = new Gn(s, c)), Nt.renderOrder = 9999, n.scene.add(Nt);
      }
      n.render();
    }
    function Ps(t, n, o, l) {
      const s = [];
      for (let c = 0; c <= l; c++) {
        const a = c / l, r = n.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(o.clone().multiplyScalar(0.5)), f = (1 - a) * (1 - a), i = 2 * (1 - a) * a, d = a * a;
        s.push(new Oe(f * t.x + i * r.x + d * o.x, f * t.y + i * r.y + d * o.y, f * t.z + i * r.z + d * o.z));
      }
      return s;
    }
    function jo(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const n = e.nodes.val, o = 1e-3;
      for (let s = 0; s < n.length; s++) if (Math.abs(n[s][0] - t.worldPos.x) < o && Math.abs(n[s][1] - t.worldPos.y) < o && Math.abs(n[s][2] - t.worldPos.z) < o) return s;
      Dn();
      const l = [
        ...n,
        [
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ]
      ];
      return e.nodes.val = l, l.length - 1;
    }
    function Ca(t) {
      var _a2;
      if (jt === "node") {
        if (!t.worldPos) return;
        Dn();
        const n = [
          ...e.nodes.val
        ];
        n.push([
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ]), e.nodes.val = n;
        return;
      }
      if (jt === "line") {
        const n = jo(t);
        if (n < 0) return;
        if (vt === null) {
          vt = n;
          return;
        }
        if (n === vt) return;
        Dn();
        const o = [
          ...e.elements.val
        ];
        o.some((s) => s.length === 2 && (s[0] === vt && s[1] === n || s[1] === vt && s[0] === n)) || (o.push([
          vt,
          n
        ]), e.elements.val = o, vn(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), vt = n;
        return;
      }
      if (jt === "arc") {
        const n = jo(t);
        if (n < 0) return;
        if (vt === null) {
          vt = n;
          return;
        }
        if (Zt === null) {
          if (n === vt) return;
          Zt = n;
          return;
        }
        if (n === vt || n === Zt) return;
        const o = e.nodes.val, l = new Oe(...o[vt]), s = new Oe(...o[Zt]), c = new Oe(...o[n]), a = Math.max(4, Math.round(((_a2 = Z.nSubViga) == null ? void 0 : _a2.val) ?? 8)), r = Ps(l, s, c, a);
        Dn();
        const f = [
          ...e.nodes.val
        ], i = [
          ...e.elements.val
        ];
        let d = vt;
        for (let b = 1; b < r.length; b++) {
          let S;
          if (b === r.length - 1) S = n;
          else {
            const $ = r[b];
            S = f.length, f.push([
              $.x,
              $.y,
              $.z
            ]);
          }
          i.push([
            d,
            S
          ]), d = S;
        }
        e.nodes.val = f, e.elements.val = i, vn(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, vt = n, Zt = null;
        return;
      }
      if (jt === "area") {
        const n = jo(t);
        if (n < 0) return;
        if (Xt.length >= 3 && n === Xt[0]) {
          Dn();
          const o = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], s = Xt.map((c) => o[c]);
          try {
            const c = hn({
              points: s,
              polygon: Array.from({
                length: s.length
              }, (r, f) => f),
              maxMeshSize: _o || 0.5
            }), a = [];
            for (const r of c.nodes) {
              let f = -1;
              for (let i = 0; i < o.length; i++) {
                const d = Math.abs(o[i][0] - r[0]), b = Math.abs(o[i][1] - r[1]), S = Math.abs(o[i][2] - r[2]);
                if (d < 0.01 && b < 0.01 && S < 0.01) {
                  f = i;
                  break;
                }
              }
              f >= 0 ? a.push(f) : (a.push(o.length), o.push([
                r[0],
                r[1],
                r[2]
              ]));
            }
            for (const r of c.elements) l.push([
              a[r[0]],
              a[r[1]],
              a[r[2]]
            ]);
            e.nodes.val = o, e.elements.val = l, vn(), console.log(`Area: ${c.elements.length} triangulos creados desde ${Xt.length} vertices`);
          } catch (c) {
            console.error("Area mesh failed:", c.message);
          }
          Xt = [];
          return;
        }
        if (Xt.push(n), console.log(`Area vertex ${Xt.length}: node ${n}`), Xt.length >= 2) {
          const o = Xt[Xt.length - 2], l = e.nodes.val, s = Ze();
          if (s) {
            const c = new tn().setFromPoints([
              new Oe(...l[o]),
              new Oe(...l[n])
            ]), a = new Gn(c, new Yn({
              color: 65280,
              linewidth: 2
            }));
            a.name = "area-preview", s.scene.add(a), s.render();
          }
        }
        return;
      }
    }
    function Os(t) {
      const n = Ze();
      if (!n) return;
      Jt && (n.scene.remove(Jt), Jt.geometry.dispose(), Jt.material.dispose());
      const o = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let a = 0; a < l.length; a++) {
        const r = o[l[a]], f = o[l[(a + 1) % l.length]];
        s.push(r[0], r[1], r[2], f[0], f[1], f[2]);
      }
      const c = new tn();
      c.setAttribute("position", new Ln(s, 3)), Jt = new Gn(c, new Yn({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), Jt.renderOrder = 9999, n.scene.add(Jt), n.render();
    }
    function Wo(t) {
      const n = Ze();
      if (!n) return -1;
      const o = n.renderer.domElement.getBoundingClientRect(), l = new sa((t.clientX - o.left) / o.width * 2 - 1, -((t.clientY - o.top) / o.height) * 2 + 1), s = new oa();
      s.setFromCamera(l, n.controls.object), s.params.Line = {
        threshold: 0.5
      };
      const c = e.nodes.val, a = e.elements.val;
      if (c.length === 0 || a.length === 0) return -1;
      let r = 1 / 0, f = -1;
      const i = s.ray;
      for (let b = 0; b < a.length; b++) {
        const S = a[b];
        if (S.length === 2) {
          const $ = new Oe(...c[S[0]]), y = new Oe(...c[S[1]]), p = new al($, y), h = new Oe(), I = new Oe();
          i.closestPointToPoint(p.getCenter(new Oe()), h), p.closestPointToPoint(h, true, I);
          const A = h.distanceTo(I);
          A < r && (r = A, f = b);
        } else if (S.length === 3) {
          const $ = new Oe(...c[S[0]]), y = new Oe(...c[S[1]]), p = new Oe(...c[S[2]]), h = new Oe();
          if (i.intersectTriangle($, y, p, false, h)) {
            const A = i.origin.distanceTo(h);
            A < r && (r = A, f = b);
          } else {
            const A = $.add(y).add(p).divideScalar(3), z = new Oe();
            i.closestPointToPoint(A, z);
            const P = z.distanceTo(A);
            P < r && (r = P, f = b);
          }
        } else if (S.length === 4) {
          const $ = new Oe(...c[S[0]]), y = new Oe(...c[S[1]]), p = new Oe(...c[S[2]]), h = new Oe(...c[S[3]]), I = new Oe();
          let A = i.intersectTriangle($, y, p, false, I);
          if (A) {
            const z = i.origin.distanceTo(I);
            z < r && (r = z, f = b);
          }
          if (A = i.intersectTriangle($, p, h, false, I), A) {
            const z = i.origin.distanceTo(I);
            z < r && (r = z, f = b);
          }
        }
      }
      const { extent: d } = yn();
      return r < d * 0.1 ? f : -1;
    }
    function Me(t, n = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(n);
    }
    function Go(t, n, o = 12) {
      var _a2;
      const l = Math.min(t.length, o), s = Math.min(((_a2 = t[0]) == null ? void 0 : _a2.length) || 0, o);
      let c = "<table>";
      if (n) {
        c += '<tr><td class="header"></td>';
        for (let a = 0; a < s; a++) c += `<td class="header">${n[a] || a}</td>`;
        c += "</tr>";
      }
      for (let a = 0; a < l; a++) {
        c += "<tr>", n && (c += `<td class="header">${n[a] || a}</td>`);
        for (let r = 0; r < s; r++) {
          const f = t[a][r], i = Math.abs(f) > 1e-10 ? "nonzero" : "";
          c += `<td class="${i}">${Me(f, 2)}</td>`;
        }
        c += "</tr>";
      }
      return c += "</table>", c;
    }
    function De(t, n) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${n}</span></span>`;
    }
    function C(t, n, o) {
      let l = `<span class="var">${t}</span>`;
      return n && (l += `<sub>${n}</sub>`), l;
    }
    function Fa(t, n, o, l, s, c, a) {
      const r = 0.8333333333333334 * n, f = 5 / 6 * n, i = f > 0 && s > 0 ? 12 * t * o / (s * f * a ** 2) : 0, d = r > 0 && s > 0 ? 12 * t * l / (s * r * a ** 2) : 0, b = t * n / a, S = s * c / a, $ = 12 * t * o / a ** 3 / (1 + i), y = 6 * t * o / a ** 2 / (1 + i), p = 4 * t * o / a * (1 + i / 4) / (1 + i), h = 2 * t * o / a * (1 - i / 2) / (1 + i), I = i > 1e-10 || d > 1e-10;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n: ${I ? "Timoshenko (con deformaci\xF3n por cortante)" : "Euler-Bernoulli"}</strong></div>
      ${I ? `
      <div style="text-align:left;margin-bottom:6px;color:var(--fem-eq-sub)">
        ${C("A", "s")} = ${De("5", "6")} \xB7 ${C("A")} = <span class="highlight">${Me(r)}</span>
        &nbsp;&nbsp; \u03C6<sub>z</sub> = ${De("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("G") + "\xB7" + C("A", "s") + "\xB7" + C("L") + "\xB2")} = <span class="highlight">${Me(i)}</span>
        &nbsp;&nbsp; \u03C6<sub>y</sub> = <span class="highlight">${Me(d)}</span>
      </div>
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes Timoshenko (Dr. Aguiar):</strong></div>
      <div>${C("t", "z")} = ${De("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Me($)}</span> &nbsp;(cortante)</div>
      <div>${C("b", "z")} = ${De("6\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB2\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Me(y)}</span> &nbsp;(acoplamiento)</div>
      <div>${C("k", "z")} = ${De("4\xB7" + C("E") + "\xB7" + C("I", "z") + "\xB7(1+\u03C6/4)", C("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Me(p)}</span> &nbsp;(flexi\xF3n diagonal)</div>
      <div>${C("a", "z")} = ${De("2\xB7" + C("E") + "\xB7" + C("I", "z") + "\xB7(1\u2212\u03C6/2)", C("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Me(h)}</span> &nbsp;(flexi\xF3n off-diag)</div>
      ` : `
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      `}
      <div>${De(C("E") + "\xB7" + C("A"), C("L"))} = <span class="highlight">${Me(b)}</span> &nbsp;(axial)</div>
      <div>${De(C("G") + "\xB7" + C("J"), C("L"))} = <span class="highlight">${Me(S)}</span> &nbsp;(torsi\xF3n)</div>
      ${I ? "" : `
      <div>${De("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3")} = <span class="highlight">${Me($)}</span></div>
      <div>${De("4\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))} = <span class="highlight">${Me(p)}</span></div>
      `}
    </div>
    <div class="fem-eq">
      ${C("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${De(C("EA"), C("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${De("\u2212" + C("EA"), C("L"))}</span>
        <span class="cell">0</span><span class="cell">${C("t", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${C("b", "z")}</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">0</span><span class="cell">${C("b", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${C("k", "z")}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712 ${I ? "(Timoshenko)" : "(Euler-Bernoulli)"}</sub>
    </div>
    ${I ? `<div class="fem-eq eq-box" style="margin-top:6px">
      <div style="text-align:left"><strong style="color:var(--fem-section-title)">Matrices de rigidez (Dr. Aguiar, Fig 7.9):</strong></div>
      <div style="margin-top:4px">${C("K", "f")} = ${C("B", "f")}<sup>T</sup> \xB7 ${C("E")}\xB7${C("I")} \xB7 ${C("B", "f")} \xB7 ${C("J")} &nbsp;<sub style="color:var(--fem-label)">(flexi\xF3n, 1 pt Gauss)</sub></div>
      <div>${C("K", "c")} = ${C("B", "c")}<sup>T</sup> \xB7 ${C("G")}\xB7${C("A'")} \xB7 ${C("B", "c")} \xB7 ${C("J")} &nbsp;<sub style="color:var(--fem-label)">(cortante, 2 pts Gauss)</sub></div>
      <div>${C("K", "total")} = ${C("K", "f")} + ${C("K", "c")}</div>
    </div>` : ""}`;
    }
    function Ra(t) {
      if (t.length === 2) {
        const o = xn(t[1], t[0]), l = Pn(o), s = o[0] / l, c = o[1] / l, a = o[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${C("l")} = cos(\u03B1) = ${De("\u0394x", C("L"))} = ${De(Me(o[0]), Me(l))} = <span class="highlight">${Me(s)}</span></div>
        <div>${C("m")} = cos(\u03B2) = ${De("\u0394y", C("L"))} = ${De(Me(o[1]), Me(l))} = <span class="highlight">${Me(c)}</span></div>
        <div>${C("n")} = cos(\u03B3) = ${De("\u0394z", C("L"))} = ${De(Me(o[2]), Me(l))} = <span class="highlight">${Me(a)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${C("l")}</span><span class="cell">${C("m")}</span><span class="cell">${C("n")}</span>
          <span class="cell">${De("\u2212" + C("m"), C("D"))}</span><span class="cell">${De(C("l"), C("D"))}</span><span class="cell">0</span>
          <span class="cell">${De("\u2212" + C("l") + "\xB7" + C("n"), C("D"))}</span><span class="cell">${De("\u2212" + C("m") + "\xB7" + C("n"), C("D"))}</span><span class="cell">${C("D")}</span>
        </span>
        &nbsp; donde ${C("D")} = \u221A(${C("l")}\xB2 + ${C("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${C("T")} = ${C("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${C("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function Pa() {
      return `<div class="fem-eq">
      ${C("K", "global")} = ${C("T")}<sup>T</sup> \xB7 ${C("k", "local")} \xB7 ${C("T")}
    </div>`;
    }
    function Oa(t) {
      const n = t.map((o) => `6\xB7${o} = ${6 * o}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${C("K", "global")}[${C("i")}, ${C("j")}] += ${C("K", "elem")}[${C("i")}, ${C("j")}]</div>
      <div style="margin-top:4px">donde ${C("i")}, ${C("j")} \u2208 {${n}} + (0..5)</div>
    </div>`;
    }
    function Na(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${C("u", "local")} = ${C("T")} \xB7 ${C("u", "global")}</div>
        <div>${C("f", "local")} = ${C("k", "local")} \xB7 ${C("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${C("f")} = [${C("N", "i")}, ${C("V", "y,i")}, ${C("V", "z,i")}, ${C("M", "x,i")}, ${C("M", "y,i")}, ${C("M", "z,i")}, ${C("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${De("1", "2" + C("A"))} \xB7 ${C("D")} \xB7 ${C("B")} \xB7 ${C("u")}</div>
      <div>${C("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${C("t")} &nbsp;&nbsp; ${C("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${De(C("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function Yo(t, n) {
      const o = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let s = 0; s < o; s++) l += `<td class="hdr">${n[s] || s}</td>`;
      l += "</tr>";
      for (let s = 0; s < o; s++) {
        l += `<tr><td class="hdr">${n[s] || s}</td>`;
        for (let c = 0; c < o; c++) {
          const a = t[s][c], r = (s === c ? "diag " : "") + (Math.abs(a) > 1e-10 ? "nz" : "");
          l += `<td class="${r}">${Me(a, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function Ns() {
      const t = "0", n = De(C("EA"), C("L")), o = De("\u2212" + C("EA"), C("L")), l = De("12" + C("EI", "z"), C("L") + "\xB3"), s = De("\u221212" + C("EI", "z"), C("L") + "\xB3"), c = De("12" + C("EI", "y"), C("L") + "\xB3"), a = De("\u221212" + C("EI", "y"), C("L") + "\xB3"), r = De("6" + C("EI", "z"), C("L") + "\xB2"), f = De("\u22126" + C("EI", "z"), C("L") + "\xB2"), i = De("6" + C("EI", "y"), C("L") + "\xB2"), d = De("\u22126" + C("EI", "y"), C("L") + "\xB2"), b = De(C("GJ"), C("L")), S = De("\u2212" + C("GJ"), C("L")), $ = De("4" + C("EI", "z"), C("L")), y = De("2" + C("EI", "z"), C("L")), p = De("4" + C("EI", "y"), C("L")), h = De("2" + C("EI", "y"), C("L")), I = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', A = [
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
      ], P = [
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
          l,
          t,
          t,
          t,
          r,
          t,
          s,
          t,
          t,
          t,
          r
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
          a,
          t,
          d,
          t
        ],
        [
          t,
          t,
          t,
          b,
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
          p,
          t,
          t,
          t,
          i,
          t,
          h,
          t
        ],
        [
          t,
          r,
          t,
          t,
          t,
          $,
          t,
          f,
          t,
          t,
          t,
          y
        ],
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
          s,
          t,
          t,
          t,
          f,
          t,
          l,
          t,
          t,
          t,
          f
        ],
        [
          t,
          t,
          a,
          t,
          i,
          t,
          t,
          t,
          c,
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
          b,
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
          i,
          t,
          p,
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
          f,
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
        k += `<tr><td class="hdr">${A[m]}</td>`;
        for (let u = 0; u < 12; u++) if (u < m) k += `<td style="color:var(--fem-border-cell)">${u === 0 && m > 0 ? I : ""}</td>`;
        else {
          const E = P[m][u], L = (m === u ? "diag " : "") + (E !== "0" ? "nz" : "");
          k += `<td class="${L}">${E}</td>`;
        }
        k += "</tr>";
      }
      return k += "</table>", k;
    }
    function qa(t, n, o, l, s, c, a) {
      return `<div class="coeff-grid">${[
        {
          name: `${De(C("E") + "\xB7" + C("A"), C("L"))}`,
          calc: `${De(Me(t) + "\xD7" + Me(n), Me(a))}`,
          val: t * n / a,
          label: "Axial"
        },
        {
          name: `${De("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3")}`,
          calc: `${De("12\xD7" + Me(t) + "\xD7" + Me(o), Me(a) + "\xB3")}`,
          val: 12 * t * o / a ** 3,
          label: "Corte Y"
        },
        {
          name: `${De("6\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB2")}`,
          calc: `${De("6\xD7" + Me(t) + "\xD7" + Me(o), Me(a) + "\xB2")}`,
          val: 6 * t * o / a ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${De("12\xB7" + C("E") + "\xB7" + C("I", "y"), C("L") + "\xB3")}`,
          calc: `${De("12\xD7" + Me(t) + "\xD7" + Me(l), Me(a) + "\xB3")}`,
          val: 12 * t * l / a ** 3,
          label: "Corte Z"
        },
        {
          name: `${De("6\xB7" + C("E") + "\xB7" + C("I", "y"), C("L") + "\xB2")}`,
          calc: `${De("6\xD7" + Me(t) + "\xD7" + Me(l), Me(a) + "\xB2")}`,
          val: 6 * t * l / a ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${De(C("G") + "\xB7" + C("J"), C("L"))}`,
          calc: `${De(Me(s) + "\xD7" + Me(c), Me(a))}`,
          val: s * c / a,
          label: "Torsi\xF3n"
        },
        {
          name: `${De("4\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))}`,
          calc: `${De("4\xD7" + Me(t) + "\xD7" + Me(o), Me(a))}`,
          val: 4 * t * o / a,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${De("2\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))}`,
          calc: `${De("2\xD7" + Me(t) + "\xD7" + Me(o), Me(a))}`,
          val: 2 * t * o / a,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${De("4\xB7" + C("E") + "\xB7" + C("I", "y"), C("L"))}`,
          calc: `${De("4\xD7" + Me(t) + "\xD7" + Me(l), Me(a))}`,
          val: 4 * t * l / a,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${De("2\xB7" + C("E") + "\xB7" + C("I", "y"), C("L"))}`,
          calc: `${De("2\xD7" + Me(t) + "\xD7" + Me(l), Me(a))}`,
          val: 2 * t * l / a,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((f) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${f.label}</div>${f.name} = ${f.calc} = <span class="highlight">${Me(f.val)}</span></div>`).join("")}</div>`;
    }
    function Jo(t, n, o, l) {
      var _a2;
      const s = document.querySelector(".fem-full-overlay");
      s && s.remove();
      const c = document.createElement("div");
      c.className = "fem-full-overlay", c.innerHTML = `
      <button class="close-full" id="fem-full-close">\u2715 Cerrar</button>
      <h2>${t}</h2>
      <div class="fem-full-sections">
        <div class="full-section">
          <div class="side-title">\u2460 F\xF3rmula General (simb\xF3lica)</div>
          <div class="fem-full-sym">${n}</div>
        </div>
        ${l ? `<div class="full-section coeff">
          <div class="side-title">\u2461 C\xE1lculo de Coeficientes (sustituci\xF3n num\xE9rica)</div>
          ${l}
        </div>` : ""}
        <div class="full-section numeric">
          <div class="side-title">${l ? "\u2462" : "\u2461"} Matriz Num\xE9rica Resultante</div>
          ${o}
        </div>
      </div>
    `, document.body.appendChild(c), (_a2 = c.querySelector("#fem-full-close")) == null ? void 0 : _a2.addEventListener("click", () => c.remove()), c.addEventListener("click", (a) => {
        a.target === c && c.remove();
      });
    }
    function qs(t) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O;
      Kt && Kt.remove();
      const n = e.nodes.val, o = e.elements.val, l = o[t], s = l.map((m) => n[m]), c = l.length === 2, a = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, r = (_b = e.deformOutputs) == null ? void 0 : _b.val, f = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (c) {
        const m = Pn(xn(s[1], s[0])), u = ((_d = a.elasticities) == null ? void 0 : _d.get(t)) ?? 0, E = ((_e2 = a.areas) == null ? void 0 : _e2.get(t)) ?? 0, L = ((_f = a.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, O = ((_g = a.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, W = ((_h = a.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, x = ((_i = a.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0, w = ((_j = a.momentReleases) == null ? void 0 : _j.get(t)) || [], v = ((_k = a.partialFixitySprings) == null ? void 0 : _k.get(t)) || [], F = [
          "P (Axial)",
          "V2 (Corte)",
          "V3 (Corte)",
          "T (Torsi\xF3n)",
          "M22 (Momento)",
          "M33 (Momento)"
        ];
        let X = "";
        for (let V = 0; V < 6; V++) {
          const ae = V, Q = V + 6, K = (w.length >= 12 ? w[ae] : V >= 3 && w.length >= 6 && w[V - 3]) ? "checked" : "", pe = (w.length >= 12 ? w[Q] : V >= 3 && w.length >= 6 && w[V]) ? "checked" : "", ce = v.length >= 12 && v[ae] > 0 ? v[ae].toFixed(1) : "", Ie = v.length >= 12 && v[Q] > 0 ? v[Q].toFixed(1) : "";
          X += `<tr>
          <td style="text-align:left;color:var(--fem-key)">${F[V]}</td>
          <td style="text-align:center"><input type="checkbox" data-rel="${ae}" ${K}></td>
          <td style="text-align:center"><input type="checkbox" data-rel="${Q}" ${pe}></td>
          <td><input type="number" data-spr="${ae}" value="${ce}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
          <td><input type="number" data-spr="${Q}" value="${Ie}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
        </tr>`;
        }
        `${l[0]}${l[1]}${Me(m)}${Me(u)}${Me(E)}${Me(L)}${Me(O)}${Me(W)}${Me(x)}${X}`;
      } else {
        const m = ((_l2 = a.elasticities) == null ? void 0 : _l2.get(t)) ?? 0, u = ((_m = a.thicknesses) == null ? void 0 : _m.get(t)) ?? 0, E = ((_n2 = a.poissonsRatios) == null ? void 0 : _n2.get(t)) ?? 0, L = m / (2 * (1 + E)), O = l.length === 4, W = m / (1 - E * E);
        `${l.length}${l.join(", ")}${Me(m)}${Me(L)}${Me(u)}${Me(E)}`, O && (S = `<div class="fem-eq eq-box">
          <div style="text-align:left;margin-bottom:6px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n Q4: Membrana + Mindlin-Reissner + Drilling</strong></div>

          <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">1. Matriz constitutiva (esfuerzo plano):</strong></div>
          <div>${C("D")} = ${De(C("E"), "1\u2212\u03BD\xB2")} \xB7 <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
            <span class="cell">1</span><span class="cell">\u03BD</span><span class="cell">0</span>
            <span class="cell">\u03BD</span><span class="cell">1</span><span class="cell">0</span>
            <span class="cell">0</span><span class="cell">0</span><span class="cell">${De("1\u2212\u03BD", "2")}</span>
          </span> = ${De(Me(m), "1\u2212" + Me(E) + "\xB2")} = <span class="highlight">${Me(W)}</span></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">2. Funciones de forma (Ec. 6.2, Wilson):</strong></div>
          <div>${C("N", "i")} = \xBC\xB7(1\xB1\u03BE)\xB7(1\xB1\u03B7) &nbsp;&nbsp; <sub style="color:var(--fem-label)">i = 1..4 (bilineal)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">3. Modos incompatibles (Ec. 6.13, Wilson 1971):</strong></div>
          <div>${C("N", "5")} = 1 \u2212 \u03BE\xB2 &nbsp;&nbsp; ${C("N", "6")} = 1 \u2212 \u03B7\xB2</div>
          <div style="margin-top:4px">${C("u", "x")} = \u03A3${C("N", "i")}\xB7${C("u", "xi")} + \u03B1\u2081\xB7${C("N", "5")} + \u03B1\u2082\xB7${C("N", "6")} &nbsp;<sub style="color:var(--fem-label)">(Ec. 6.12)</sub></div>
          <div>${C("u", "y")} = \u03A3${C("N", "i")}\xB7${C("u", "yi")} + \u03B1\u2083\xB7${C("N", "5")} + \u03B1\u2084\xB7${C("N", "6")}</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">4. Deformaci\xF3n-desplazamiento (Ec. 6.3):</strong></div>
          <div>${C("d")} = [${C("B", "C")} &nbsp; ${C("B", "I")}] \xB7 [${C("u")} &nbsp; \u03B1]<sup>T</sup></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">5. Submatrices de rigidez (Ec. 6.9):</strong></div>
          <div>${C("k", "CC")} = \u222B${C("B", "C")}<sup>T</sup>\xB7${C("E")}\xB7${C("B", "C")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD78 est\xE1ndar)</sub></div>
          <div>${C("k", "CI")} = \u222B${C("B", "C")}<sup>T</sup>\xB7${C("E")}\xB7${C("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD74 acoplamiento)</sub></div>
          <div>${C("k", "II")} = \u222B${C("B\u0304", "I")}<sup>T</sup>\xB7${C("E")}\xB7${C("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(4\xD74 modos internos)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">6. Condensaci\xF3n est\xE1tica (Ec. 6.11):</strong></div>
          <div style="font-size:13px"><span class="highlight">${C("k", "C")} = ${C("k", "CC")} \u2212 ${C("k", "CI")} \xB7 ${C("k", "II")}\u207B\xB9 \xB7 ${C("k", "IC")}</span></div>
          <div style="margin-top:4px;color:var(--fem-eq-sub)">Los 4 modos incompatibles \u03B1 se eliminan antes del ensamblaje global</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">7. Correcci\xF3n de Taylor (Ec. 6.7):</strong></div>
          <div>${C("B\u0304", "I")} = ${C("B", "I")} + ${C("B", "IC")} &nbsp; donde &nbsp; ${C("B", "IC")} = \u2212${De("1", "V")}\u222B${C("B", "I")} dV</div>
          <div style="color:var(--fem-eq-sub)">Jacobiano del centro para modos incompatibles \u2192 pasa patch test</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">8. Drilling DOF (Hughes-Brezzi 1989):</strong></div>
          <div>${C("K", "drill")} = \u03B1\xB7${C("G")}\xB7${C("t")} \xB7 \u222B${C("B", "d")}<sup>T</sup>\xB7${C("B", "d")} dA &nbsp; donde \u03B1 = 0.5</div>
          <div>${C("B", "d")}[i] = \u03B8<sub>z,i</sub> \u2212 \xBD\xB7(\u2202v/\u2202x \u2212 \u2202u/\u2202y) &nbsp;<sub style="color:var(--fem-label)">(rotaci\xF3n antisim\xE9trica)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">9. Placa Mindlin-Reissner + MITC4:</strong></div>
          <div>${C("D", "b")} = ${De(C("E") + "\xB7" + C("t") + "\xB3", "12\xB7(1\u2212\u03BD\xB2)")} = <span class="highlight">${Me(m * u ** 3 / (12 * (1 - E ** 2)))}</span></div>
          <div>${C("D", "s")} = \u03BA\xB7${C("G")}\xB7${C("t")} = <span class="highlight">${Me(5 / 6 * L * u)}</span> &nbsp; <sub style="color:var(--fem-label)">\u03BA = 5/6</sub></div>
          <div style="color:var(--fem-eq-sub)">MITC4: interpolaci\xF3n de cortante en puntos de atado (tying points)</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">10. Ensamblaje final:</strong></div>
          <div>${C("K", "24\xD724")} = ${C("K", "membrana")}(8\xD78) + ${C("K", "flexi\xF3n")}(12\xD712) + ${C("K", "drilling")}(12\xD712)</div>
          <div style="color:var(--fem-eq-sub)">DOFs por nodo: [u, v, w, \u03B8x, \u03B8y, \u03B8z]</div>
        </div>`);
      }
      let i = "", d = "", b = "", S = "", $ = "", y = "", p = "", h = "", I = null, A = null, z = null, P = [];
      try {
        if (I = vo(s, a, t), A = yo(s), z = on(os(A), on(I, A)), P = c ? [
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
          "\u03B8y\u2081",
          "\u03B8z\u2082"
        ], c) {
          const L = Pn(xn(s[1], s[0])), O = ((_o2 = a.elasticities) == null ? void 0 : _o2.get(t)) ?? 0, W = ((_p = a.areas) == null ? void 0 : _p.get(t)) ?? 0, x = ((_q = a.momentsOfInertiaZ) == null ? void 0 : _q.get(t)) ?? 0, w = ((_r = a.momentsOfInertiaY) == null ? void 0 : _r.get(t)) ?? 0, v = ((_s2 = a.shearModuli) == null ? void 0 : _s2.get(t)) ?? 0, F = ((_t = a.torsionalConstants) == null ? void 0 : _t.get(t)) ?? 0;
          S = Fa(O, W, x, w, v, F, L);
        }
        $ = Ra(s), y = Pa(), p = Oa(l), h = Na(c);
        const m = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', u = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', E = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        i = `<div class="matrix-label">k_local (${I.length}\xD7${I.length}) ${m}</div>${Go(I, P)}`, d = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${A.length}\xD7${A.length}) ${u}</div>${Go(A, P)}`, b = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${E}</div>${Go(z, P)}`;
      } catch (m) {
        i = `<div style="color:red">Error: ${m.message}</div>`;
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
          ], O = m.map((W, x) => `<span class="prop-key">${W}</span>: <span class="${Math.abs(L[x]) > 1e-10 ? "result-val" : ""}">${Me(L[x])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${u}:</strong> ${O}</div>`;
        }).join("");
      }
      if (f && c && (r == null ? void 0 : r.deformations) && I && A) {
        const m = (_u = f.normals) == null ? void 0 : _u.get(t), u = (_v = f.shearsY) == null ? void 0 : _v.get(t), E = (_w = f.shearsZ) == null ? void 0 : _w.get(t), L = (_x = f.torsions) == null ? void 0 : _x.get(t), O = (_y = f.bendingsY) == null ? void 0 : _y.get(t), W = (_z = f.bendingsZ) == null ? void 0 : _z.get(t), x = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], w = [];
        for (const Q of l) {
          const K = ((_A = r.deformations) == null ? void 0 : _A.get(Q)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          w.push(...K);
        }
        let v = [];
        try {
          v = on(A, w);
        } catch {
          v = new Array(12).fill(0);
        }
        let F = [];
        try {
          F = on(I, v);
        } catch {
          F = new Array(12).fill(0);
        }
        const X = (Q, K) => Q.map((pe, ce) => `<span style="color:${Math.abs(pe) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${K[ce % 6]}=${Me(pe)}</span>`).join(", "), ae = [
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
        ].map((Q, K) => `${Q}${K < 6 ? "\u1D62" : "\u2C7C"}`);
        `${C("u", "global")}${l.map((Q, K) => `<span style="color:var(--fem-label)">nodo ${Q}:</span> ${x.map((pe, ce) => `<span style="color:${Math.abs(w[K * 6 + ce]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${Me(w[K * 6 + ce])}</span>`).join(", ")}`).join(" | ")}${C("u", "local")}${C("T")}${C("u", "global")}${C("u", "local")}${X(v, [
          ...x,
          ...x
        ])}${C("f", "local")}${C("k", "local")}${C("u", "local")}${C("f", "local")}${F.map((Q, K) => `<span style="color:${Math.abs(Q) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${ae[K]}=${Me(Q)}</span>`).join(", ")}${C("P", "1")}${C("N", "i")}${Me(F[0])}${C("P", "7")}${C("N", "j")}${Me(F[6])}${C("P", "2")}${C("V", "y,i")}${Me(F[1])}${C("P", "8")}${C("V", "y,j")}${Me(F[7])}${C("P", "3")}${C("V", "z,i")}${Me(F[2])}${C("P", "9")}${C("V", "z,j")}${Me(F[8])}${C("P", "4")}${C("M", "x,i")}${Me(F[3])}${C("P", "10")}${C("M", "x,j")}${Me(F[9])}${C("P", "5")}${C("M", "y,i")}${Me(F[4])}${C("P", "11")}${C("M", "y,j")}${Me(F[10])}${C("P", "6")}${C("M", "z,i")}${Me(F[5])}${C("P", "12")}${C("M", "z,j")}${Me(F[11])}${m ? m.map((Q) => Me(Q)).join(", ") : "\u2014"}${u ? u.map((Q) => Me(Q)).join(", ") : "\u2014"}${E ? E.map((Q) => Me(Q)).join(", ") : "\u2014"}${L ? L.map((Q) => Me(Q)).join(", ") : "\u2014"}${O ? O.map((Q) => Me(Q)).join(", ") : "\u2014"}${W ? W.map((Q) => Me(Q)).join(", ") : "\u2014"}`;
      } else if (f && c) {
        const m = (_B = f.normals) == null ? void 0 : _B.get(t), u = (_C = f.shearsY) == null ? void 0 : _C.get(t), E = (_D = f.shearsZ) == null ? void 0 : _D.get(t), L = (_E = f.torsions) == null ? void 0 : _E.get(t), O = (_F = f.bendingsY) == null ? void 0 : _F.get(t), W = (_G = f.bendingsZ) == null ? void 0 : _G.get(t);
        `${m ? m.map((x) => Me(x)).join(", ") : "\u2014"}${u ? u.map((x) => Me(x)).join(", ") : "\u2014"}${E ? E.map((x) => Me(x)).join(", ") : "\u2014"}${L ? L.map((x) => Me(x)).join(", ") : "\u2014"}${O ? O.map((x) => Me(x)).join(", ") : "\u2014"}${W ? W.map((x) => Me(x)).join(", ") : "\u2014"}`;
      } else if (f && !c) {
        const m = (_H = f.bendingXX) == null ? void 0 : _H.get(t), u = (_I = f.bendingYY) == null ? void 0 : _I.get(t), E = (_J = f.bendingXY) == null ? void 0 : _J.get(t), L = (_K = f.membraneXX) == null ? void 0 : _K.get(t), O = (_L = f.membraneYY) == null ? void 0 : _L.get(t), W = (_M = f.membraneXY) == null ? void 0 : _M.get(t);
        `${m ? m.map((x) => Me(x)).join(", ") : "\u2014"}${u ? u.map((x) => Me(x)).join(", ") : "\u2014"}${E ? E.map((x) => Me(x)).join(", ") : "\u2014"}${L ? L.map((x) => Me(x)).join(", ") : "\u2014"}${O ? O.map((x) => Me(x)).join(", ") : "\u2014"}${W ? W.map((x) => Me(x)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), n.length * 6, n.length * 6, Kt = vl(t, n, o, a, r, f), Kt.id = "fem-inspect-panel", document.body.appendChild(Kt), (_N = Kt.querySelector("#er-close")) == null ? void 0 : _N.addEventListener("click", () => An()), (_O = Kt.querySelector("#rel-apply")) == null ? void 0 : _O.addEventListener("click", () => {
        const m = Kt.querySelectorAll("input[data-rel]"), u = Kt.querySelectorAll("input[data-spr]"), E = new Array(12).fill(false), L = new Array(12).fill(0);
        m.forEach((W) => {
          E[parseInt(W.dataset.rel)] = W.checked;
        }), u.forEach((W) => {
          const x = parseFloat(W.value);
          x > 0 && (L[parseInt(W.dataset.spr)] = x);
        }), a.momentReleases || (a.momentReleases = /* @__PURE__ */ new Map()), a.partialFixitySprings || (a.partialFixitySprings = /* @__PURE__ */ new Map()), E.some((W) => W) ? a.momentReleases.set(t, E) : a.momentReleases.delete(t), L.some((W) => W > 0) ? a.partialFixitySprings.set(t, L) : a.partialFixitySprings.delete(t), console.log(`Releases elem ${t}:`, E.map((W, x) => W ? relIds[x] : "").filter(Boolean).join(" ") || "none"), console.log(`Springs elem ${t}:`, L);
        const O = Kt.querySelector("#rel-apply");
        O.textContent = "\u2713 Aplicado", O.style.background = "#4caf50", setTimeout(() => {
          O.textContent = "Aplicar", O.style.background = "var(--fem-heading)";
        }, 1500);
      });
      const k = c ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const m = Pn(xn(s[1], s[0])), u = ((_a3 = a.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, E = ((_b2 = a.areas) == null ? void 0 : _b2.get(t)) ?? 0, L = ((_c2 = a.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, O = ((_d2 = a.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, W = ((_e3 = a.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, x = ((_f2 = a.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return qa(u, E, L, O, W, x, m);
      })() : void 0;
      Kt.querySelectorAll("[data-full]").forEach((m) => {
        m.addEventListener("click", (u) => {
          u.stopPropagation();
          const E = m.dataset.full;
          if (E === "kLocal" && I) {
            const L = c ? Ns() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Jo(`Elemento ${t} \u2014 Rigidez Local k_local`, L, Yo(I, P), k);
          } else if (E === "T" && A) Jo(`Elemento ${t} \u2014 Transformaci\xF3n T`, $, Yo(A, P));
          else if (E === "kGlobal" && z) {
            const L = c ? Ns() : "<em>Shell 18\xD718</em>";
            Jo(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, L, Yo(z, P), k);
          }
        });
      });
    }
    function _s() {
      const l = [], s = [];
      for (let y = 0; y <= 8; y++) {
        const p = y / 8, h = 30 * p, A = 12 * (1 - p) * (1 - p * 0.3) / 2, z = l.length;
        if (l.push([
          -A,
          -A,
          h
        ]), l.push([
          A,
          -A,
          h
        ]), l.push([
          A,
          A,
          h
        ]), l.push([
          -A,
          A,
          h
        ]), s.push([
          z,
          z + 1
        ]), s.push([
          z + 1,
          z + 2
        ]), s.push([
          z + 2,
          z + 3
        ]), s.push([
          z + 3,
          z
        ]), y > 0 && y < 8 && (s.push([
          z,
          z + 2
        ]), s.push([
          z + 1,
          z + 3
        ])), y > 0) {
          const P = z - 4;
          for (let k = 0; k < 4; k++) s.push([
            P + k,
            z + k
          ]);
          s.push([
            P,
            z + 1
          ]), s.push([
            P + 1,
            z + 2
          ]), s.push([
            P + 2,
            z + 3
          ]), s.push([
            P + 3,
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
      const a = l.length - 4, r = /* @__PURE__ */ new Map();
      for (let y = 0; y < 4; y++) r.set(a + y, [
        0,
        0,
        -50,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: r
      });
      const f = 2e8, i = 77e6, d = 5e-3, b = 2e-6, S = 1e-6, $ = {
        elasticities: new Map(s.map((y, p) => [
          p,
          f
        ])),
        shearModuli: new Map(s.map((y, p) => [
          p,
          i
        ])),
        areas: new Map(s.map((y, p) => [
          p,
          d
        ])),
        momentsOfInertiaZ: new Map(s.map((y, p) => [
          p,
          b
        ])),
        momentsOfInertiaY: new Map(s.map((y, p) => [
          p,
          b
        ])),
        torsionalConstants: new Map(s.map((y, p) => [
          p,
          S
        ]))
      };
      e.elementInputs && (e.elementInputs.val = $);
      try {
        const y = kt(l, s, {
          supports: c,
          loads: r
        }, $);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Eiffel deform:", y.message);
      }
      setTimeout(() => wt(), 50), Qe(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function Ds() {
      const l = [], s = [];
      for (let $ = 0; $ <= 20; $++) {
        const y = $ / 20, p = 20 * y, h = 20 * (1 - Math.pow(2 * y - 1, 2)), I = 2;
        l.push([
          p,
          -2 / 2,
          h
        ]), l.push([
          p,
          I / 2,
          h
        ]);
      }
      for (let $ = 0; $ < 20; $++) s.push([
        $ * 2,
        ($ + 1) * 2
      ]), s.push([
        $ * 2 + 1,
        ($ + 1) * 2 + 1
      ]), s.push([
        $ * 2,
        $ * 2 + 1
      ]), s.push([
        $ * 2,
        ($ + 1) * 2 + 1
      ]), s.push([
        $ * 2 + 1,
        ($ + 1) * 2
      ]);
      s.push([
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
      const a = /* @__PURE__ */ new Map();
      for (let $ = 0; $ <= 20; $++) a.set($ * 2, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]), a.set($ * 2 + 1, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: a
      });
      const r = 2e8, f = 77e6, i = 0.01, d = 5e-6, b = 2e-6, S = {
        elasticities: new Map(s.map(($, y) => [
          y,
          r
        ])),
        shearModuli: new Map(s.map(($, y) => [
          y,
          f
        ])),
        areas: new Map(s.map(($, y) => [
          y,
          i
        ])),
        momentsOfInertiaZ: new Map(s.map(($, y) => [
          y,
          d
        ])),
        momentsOfInertiaY: new Map(s.map(($, y) => [
          y,
          d
        ])),
        torsionalConstants: new Map(s.map(($, y) => [
          y,
          b
        ]))
      };
      e.elementInputs && (e.elementInputs.val = S);
      try {
        const $ = kt(l, s, {
          supports: c,
          loads: a
        }, S);
        $ && e.deformOutputs && (e.deformOutputs.val = $);
      } catch ($) {
        console.warn("Arco:", $.message);
      }
      setTimeout(() => wt(), 50), Qe(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function Bs() {
      const c = [], a = [];
      for (let p = 0; p <= 16; p++) {
        const h = 60 * p / 16;
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
      const r = c.length;
      for (let p = 0; p < 16; p++) a.push([
        p * 2,
        (p + 1) * 2
      ]), a.push([
        p * 2 + 1,
        (p + 1) * 2 + 1
      ]), a.push([
        p * 2,
        p * 2 + 1
      ]);
      a.push([
        16 * 2,
        16 * 2 + 1
      ]);
      const f = [
        Math.round(16 / 3),
        Math.round(2 * 16 / 3)
      ], i = [];
      for (const p of f) {
        const h = 60 * p / 16, I = c.length;
        c.push([
          h,
          -6 / 2,
          0
        ]);
        const A = c.length;
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
        const P = c.length;
        c.push([
          h,
          6 / 2,
          28
        ]), i.push(z, P), a.push([
          I,
          p * 2
        ]), a.push([
          p * 2,
          z
        ]), a.push([
          A,
          p * 2 + 1
        ]), a.push([
          p * 2 + 1,
          P
        ]), a.push([
          z,
          P
        ]);
      }
      for (const p of i) {
        const h = c[p][0];
        for (let I = 0; I <= 16; I++) {
          const A = 60 * I / 16;
          if (Math.abs(A - h) > 60 * 0.05 && Math.abs(A - h) < 60 * 0.45) {
            const z = c[p][1] < 0 ? I * 2 : I * 2 + 1;
            I % 2 === 0 && a.push([
              p,
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
      for (let p = r; p < r + f.length * 4; p += 4) d.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), d.set(p + 1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const b = /* @__PURE__ */ new Map();
      for (let p = 0; p <= 16; p++) b.set(p * 2, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]), b.set(p * 2 + 1, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]);
      e.nodes.val = c, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: b
      });
      const S = 2e8, $ = 77e6, y = {
        elasticities: new Map(a.map((p, h) => [
          h,
          S
        ])),
        shearModuli: new Map(a.map((p, h) => [
          h,
          $
        ])),
        areas: new Map(a.map((p, h) => [
          h,
          h < 16 * 3 + 1 ? 0.02 : 1e-3
        ])),
        momentsOfInertiaZ: new Map(a.map((p, h) => [
          h,
          5e-5
        ])),
        momentsOfInertiaY: new Map(a.map((p, h) => [
          h,
          2e-5
        ])),
        torsionalConstants: new Map(a.map((p, h) => [
          h,
          1e-5
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const p = kt(c, a, {
          supports: d,
          loads: b
        }, y);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Puente:", p.message);
      }
      setTimeout(() => wt(), 50), Qe(), console.log(`Puente atirantado: ${c.length} nodos, ${a.length} elem, span=60m`);
    }
    function Hs() {
      const c = [], a = [];
      for (let h = 0; h <= 12; h++) {
        const I = h * 3.5, A = h * 5 * Math.PI / 180;
        for (let z = 0; z < 6; z++) {
          const P = A + 2 * Math.PI * z / 6, k = 5 * Math.cos(P), m = 5 * Math.sin(P);
          c.push([
            k,
            m,
            I
          ]);
        }
      }
      for (let h = 0; h <= 12; h++) {
        const I = h * 6;
        for (let A = 0; A < 6; A++) a.push([
          I + A,
          I + (A + 1) % 6
        ]);
        if (h < 12) {
          const A = (h + 1) * 6;
          for (let z = 0; z < 6; z++) a.push([
            I + z,
            A + z
          ]), a.push([
            I + z,
            A + (z + 1) % 6
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
        const A = h * 6;
        for (let z = 0; z < 6; z++) a.push([
          I,
          A + z
        ]);
      }
      const r = 13 * 6;
      for (let h = 0; h < 12; h++) a.push([
        r + h,
        r + h + 1
      ]);
      const f = /* @__PURE__ */ new Map();
      for (let h = 0; h < 6; h++) f.set(h, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      f.set(r, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const i = /* @__PURE__ */ new Map();
      for (let h = 1; h <= 12; h++) {
        const I = 10 * h / 12, A = h * 6;
        for (let z = 0; z < 6; z++) i.set(A + z, [
          I,
          0,
          -5,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = c, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: f,
        loads: i
      });
      const d = 2e8, b = 77e6, S = 8e-3, $ = 1e-5, y = 5e-6, p = {
        elasticities: new Map(a.map((h, I) => [
          I,
          d
        ])),
        shearModuli: new Map(a.map((h, I) => [
          I,
          b
        ])),
        areas: new Map(a.map((h, I) => [
          I,
          S
        ])),
        momentsOfInertiaZ: new Map(a.map((h, I) => [
          I,
          $
        ])),
        momentsOfInertiaY: new Map(a.map((h, I) => [
          I,
          $
        ])),
        torsionalConstants: new Map(a.map((h, I) => [
          I,
          y
        ]))
      };
      e.elementInputs && (e.elementInputs.val = p);
      try {
        const h = kt(c, a, {
          supports: f,
          loads: i
        }, p);
        h && e.deformOutputs && (e.deformOutputs.val = h);
      } catch (h) {
        console.warn("Twisted:", h.message);
      }
      setTimeout(() => wt(), 50), Qe(), console.log(`Torre Twist: ${c.length} nodos, ${a.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function js() {
      const s = [], c = [];
      for (let p = 0; p <= 20; p++) {
        const h = p / 20, I = p * 3;
        let A = 8 * (1 - h * 0.7);
        h > 0.4 && (A *= 0.85), h > 0.7 && (A *= 0.7);
        const z = s.length;
        s.push([
          0,
          0,
          I
        ]);
        for (let P = 0; P < 3; P++) {
          const k = P * 2 * Math.PI / 3 - Math.PI / 2, m = A * Math.cos(k), u = A * Math.sin(k), E = s.length;
          s.push([
            m,
            u,
            I
          ]), c.push([
            z,
            E
          ]);
          const L = s.length;
          s.push([
            m * 0.5,
            u * 0.5,
            I
          ]), c.push([
            z,
            L
          ]), c.push([
            L,
            E
          ]);
        }
        for (let P = 0; P < 3; P++) {
          const k = z + 1 + P * 2, m = z + 1 + (P + 1) % 3 * 2;
          c.push([
            k,
            m
          ]);
        }
        if (p < 20) {
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
      const a = /* @__PURE__ */ new Map(), r = 1 + 3 * 2;
      for (let p = 0; p < r; p++) a.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const f = /* @__PURE__ */ new Map();
      for (let p = 1; p <= 20; p++) {
        const h = p * r, I = 5 * p / 20;
        f.set(h, [
          I,
          0,
          -10,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = s, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: f
      });
      const i = 35e6, d = 14e6, b = 0.02, S = 5e-5, $ = 2e-5, y = {
        elasticities: new Map(c.map((p, h) => [
          h,
          i
        ])),
        shearModuli: new Map(c.map((p, h) => [
          h,
          d
        ])),
        areas: new Map(c.map((p, h) => [
          h,
          b
        ])),
        momentsOfInertiaZ: new Map(c.map((p, h) => [
          h,
          S
        ])),
        momentsOfInertiaY: new Map(c.map((p, h) => [
          h,
          S
        ])),
        torsionalConstants: new Map(c.map((p, h) => [
          h,
          $
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const p = kt(s, c, {
          supports: a,
          loads: f
        }, y);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Burj:", p.message);
      }
      setTimeout(() => wt(), 50), Qe(), console.log(`Burj Khalifa: ${s.length} nodos, ${c.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function Ws() {
      const t = [], n = [];
      for (let b = 0; b < 3; b++) {
        const S = b * 12, $ = 15 - b * 2, y = 20 - b * 3, p = 8 - b, h = t.length;
        for (let A = 0; A <= 4; A++) {
          const z = A / 4, P = -p / 2 + p * z, k = y * (1 - z * z * 0.3);
          for (let m = 0; m <= 12; m++) {
            const u = m / 12, E = S + k * u, L = $ * Math.sin(Math.PI * u) * (1 - z * z * 0.5), O = P;
            t.push([
              E,
              O,
              L
            ]);
          }
        }
        const I = 13;
        for (let A = 0; A < 4; A++) for (let z = 0; z < 12; z++) {
          const P = h + A * I + z, k = h + A * I + z + 1, m = h + (A + 1) * I + z + 1, u = h + (A + 1) * I + z;
          n.push([
            P,
            k,
            m,
            u
          ]);
        }
      }
      const s = /* @__PURE__ */ new Map();
      for (let b = 0; b < t.length; b++) t[b][2] < 0.5 && s.set(b, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const c = /* @__PURE__ */ new Map();
      for (let b = 0; b < t.length; b++) t[b][2] > 2 && c.set(b, [
        0,
        0,
        -5,
        0,
        0,
        0
      ]);
      e.nodes.val = t, e.elements.val = n, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: c
      });
      const a = 35e6, r = 0.2, f = 0.15, i = a / (2 * (1 + r)), d = {
        elasticities: new Map(n.map((b, S) => [
          S,
          a
        ])),
        poissonsRatios: new Map(n.map((b, S) => [
          S,
          r
        ])),
        thicknesses: new Map(n.map((b, S) => [
          S,
          f
        ])),
        shearModuli: new Map(n.map((b, S) => [
          S,
          i
        ]))
      };
      e.elementInputs && (e.elementInputs.val = d);
      try {
        const b = kt(t, n, {
          supports: s,
          loads: c
        }, d);
        b && e.deformOutputs && (e.deformOutputs.val = b);
      } catch (b) {
        console.warn("Opera:", b.message);
      }
      setTimeout(() => wt(), 50), Qe(), console.log(`Sydney Opera: ${t.length} nodos, ${n.length} shells Q4, 3 velas`);
    }
    function Gs() {
      const l = [], s = [];
      for (let y = 0; y <= 15; y++) {
        const p = y / 15, h = y * 3.5, I = 5 * (0.6 + 0.4 * Math.sin(Math.PI * p));
        if (p > 0.9) {
          const A = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (p - 0.9) * 8);
          for (let z = 0; z < 12; z++) {
            const P = 2 * Math.PI * z / 12;
            l.push([
              Math.max(A, 1) * Math.cos(P),
              Math.max(A, 1) * Math.sin(P),
              h
            ]);
          }
        } else for (let A = 0; A < 12; A++) {
          const z = 2 * Math.PI * A / 12;
          l.push([
            I * Math.cos(z),
            I * Math.sin(z),
            h
          ]);
        }
      }
      for (let y = 0; y < 15; y++) {
        const p = y * 12, h = (y + 1) * 12;
        for (let A = 0; A < 12; A++) s.push([
          p + A,
          p + (A + 1) % 12
        ]);
        const I = y % 2 === 0 ? 1 : -1;
        for (let A = 0; A < 12; A++) {
          const z = (A + I + 12) % 12;
          s.push([
            p + A,
            h + z
          ]), s.push([
            p + A,
            h + A
          ]);
        }
      }
      const c = 15 * 12;
      for (let y = 0; y < 12; y++) s.push([
        c + y,
        c + (y + 1) % 12
      ]);
      const a = /* @__PURE__ */ new Map();
      for (let y = 0; y < 12; y++) a.set(y, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const r = /* @__PURE__ */ new Map();
      for (let y = 1; y <= 15; y++) {
        const p = y * 12, h = 3 * y / 15;
        for (let I = 0; I < 12; I += 3) r.set(p + I, [
          h,
          0,
          -8,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: r
      });
      const f = 2e8, i = 77e6, d = 6e-3, b = 8e-6, S = 4e-6, $ = {
        elasticities: new Map(s.map((y, p) => [
          p,
          f
        ])),
        shearModuli: new Map(s.map((y, p) => [
          p,
          i
        ])),
        areas: new Map(s.map((y, p) => [
          p,
          d
        ])),
        momentsOfInertiaZ: new Map(s.map((y, p) => [
          p,
          b
        ])),
        momentsOfInertiaY: new Map(s.map((y, p) => [
          p,
          b
        ])),
        torsionalConstants: new Map(s.map((y, p) => [
          p,
          S
        ]))
      };
      e.elementInputs && (e.elementInputs.val = $);
      try {
        const y = kt(l, s, {
          supports: a,
          loads: r
        }, $);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Diagrid:", y.message);
      }
      setTimeout(() => wt(), 50), Qe(), console.log(`Diagrid Tower: ${l.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function Vo() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = M, n = ((_a2 = Z.W) == null ? void 0 : _a2.val) ?? 5, o = ((_b = Z.H) == null ? void 0 : _b.val) ?? 3, l = ((_c = Z.t) == null ? void 0 : _c.val) ?? 0.2, s = Math.round(((_d = Z.nx) == null ? void 0 : _d.val) ?? 8), c = Math.round(((_e2 = Z.ny) == null ? void 0 : _e2.val) ?? 6), a = ((_f = Z.E) == null ? void 0 : _f.val) ?? 25e6, r = ((_g = Z.nu) == null ? void 0 : _g.val) ?? 0.2, f = ((_h = Z.P) == null ? void 0 : _h.val) ?? 100, i = a / (2 * (1 + r)), d = n / s, b = o / c, S = [], $ = [], y = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
      for (let k = 0; k <= c; k++) for (let m = 0; m <= s; m++) S.push([
        m * d,
        0,
        k * b
      ]);
      const h = s + 1;
      for (let k = 0; k < c; k++) for (let m = 0; m < s; m++) $.push([
        k * h + m,
        k * h + m + 1,
        (k + 1) * h + m + 1,
        (k + 1) * h + m
      ]);
      for (let k = 0; k <= s; k++) y.set(k, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const I = [];
      for (let k = 0; k <= s; k++) I.push(c * h + k);
      const A = f / I.length;
      for (const k of I) p.set(k, [
        A,
        0,
        0,
        0,
        0,
        0
      ]);
      e.nodes.val = S, e.elements.val = $, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: p
      });
      const z = {
        elasticities: new Map($.map((k, m) => [
          m,
          a
        ])),
        poissonsRatios: new Map($.map((k, m) => [
          m,
          r
        ])),
        thicknesses: new Map($.map((k, m) => [
          m,
          l
        ])),
        shearModuli: new Map($.map((k, m) => [
          m,
          i
        ])),
        densities: new Map($.map((k, m) => [
          m,
          t.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = z);
      try {
        const k = kt(S, $, {
          supports: y,
          loads: p
        }, z);
        if (k && e.deformOutputs) {
          e.deformOutputs.val = k;
          const m = gn(S, $, z, k);
          e.analyzeOutputs && (e.analyzeOutputs.val = m);
          const u = c * h + Math.floor(s / 2), E = k.deformations.get(u), L = E ? E[0] : 0;
          console.log(`Muro Q4: Ux=${L.toExponential(4)} m | OS:4.602e-5 | SAP:4.629e-5 | ETABS:4.582e-5`);
        }
      } catch (k) {
        console.warn("MuroQ4:", k.message);
      }
      const P = Ze();
      P && (P.settings.shellResults.val = "displacementX"), setTimeout(() => wt(), 50), Qe();
    }
    function Ys() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = M, n = ((_a2 = Z.L) == null ? void 0 : _a2.val) ?? 6, o = ((_b = Z.h) == null ? void 0 : _b.val) ?? 0.5, l = ((_c = Z.t) == null ? void 0 : _c.val) ?? 0.2, s = Math.round(((_d = Z.nx) == null ? void 0 : _d.val) ?? 12), c = Math.round(((_e2 = Z.ny) == null ? void 0 : _e2.val) ?? 4), a = ((_f = Z.E) == null ? void 0 : _f.val) ?? 25e6, r = ((_g = Z.nu) == null ? void 0 : _g.val) ?? 0.2, f = ((_h = Z.P) == null ? void 0 : _h.val) ?? 50, i = a / (2 * (1 + r)), d = n / s, b = o / c, S = [], $ = [], y = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
      for (let P = 0; P <= c; P++) for (let k = 0; k <= s; k++) S.push([
        k * d,
        P * b,
        0
      ]);
      const h = s + 1;
      for (let P = 0; P < c; P++) for (let k = 0; k < s; k++) $.push([
        P * h + k,
        P * h + k + 1,
        (P + 1) * h + k + 1,
        (P + 1) * h + k
      ]);
      for (let P = 0; P <= c; P++) y.set(P * h, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const I = Math.floor(c / 2) * h + s;
      p.set(I, [
        0,
        0,
        -f,
        0,
        0,
        0
      ]), e.nodes.val = S, e.elements.val = $, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: p
      });
      const A = {
        elasticities: new Map($.map((P, k) => [
          k,
          a
        ])),
        poissonsRatios: new Map($.map((P, k) => [
          k,
          r
        ])),
        thicknesses: new Map($.map((P, k) => [
          k,
          l
        ])),
        shearModuli: new Map($.map((P, k) => [
          k,
          i
        ])),
        densities: new Map($.map((P, k) => [
          k,
          t.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = A);
      try {
        const P = kt(S, $, {
          supports: y,
          loads: p
        }, A);
        if (P && e.deformOutputs) {
          e.deformOutputs.val = P;
          const k = gn(S, $, A, P);
          e.analyzeOutputs && (e.analyzeOutputs.val = k);
          const m = P.deformations.get(I), u = m ? m[2] : 0, E = l * o * o * o / 12, L = f * n * n * n / (3 * a * E);
          console.log(`Viga Q4: Uz_tip=${u.toExponential(4)} | Analitico=${L.toExponential(4)} | ratio=${(Math.abs(u) / L).toFixed(4)}`);
        }
      } catch (P) {
        console.warn("VigaQ4:", P.message);
      }
      const z = Ze();
      z && (z.settings.shellResults.val = "displacementZ"), setTimeout(() => wt(), 50), Qe();
    }
    function Js() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = M, n = ((_a2 = Z.Lx) == null ? void 0 : _a2.val) ?? 4, o = ((_b = Z.Lz) == null ? void 0 : _b.val) ?? 2, l = ((_c = Z.t) == null ? void 0 : _c.val) ?? 0.15, s = Math.round(((_d = Z.nx) == null ? void 0 : _d.val) ?? 8), c = Math.round(((_e2 = Z.nz) == null ? void 0 : _e2.val) ?? 4), a = ((_f = Z.E) == null ? void 0 : _f.val) ?? 25e6, r = ((_g = Z.nu) == null ? void 0 : _g.val) ?? 0.2, f = ((_h = Z.P) == null ? void 0 : _h.val) ?? 20, i = a / (2 * (1 + r)), d = n / s, b = o / c, S = [], $ = [], y = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
      for (let k = 0; k <= c; k++) for (let m = 0; m <= s; m++) S.push([
        m * d,
        0,
        k * b
      ]);
      const h = s + 1;
      for (let k = 0; k < c; k++) for (let m = 0; m < s; m++) $.push([
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
      for (let k = 0; k <= c; k++) I.push(k * h + s);
      const A = f / I.length;
      for (const k of I) p.set(k, [
        0,
        0,
        -A,
        0,
        0,
        0
      ]);
      e.nodes.val = S, e.elements.val = $, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: p
      });
      const z = {
        elasticities: new Map($.map((k, m) => [
          m,
          a
        ])),
        poissonsRatios: new Map($.map((k, m) => [
          m,
          r
        ])),
        thicknesses: new Map($.map((k, m) => [
          m,
          l
        ])),
        shearModuli: new Map($.map((k, m) => [
          m,
          i
        ])),
        densities: new Map($.map((k, m) => [
          m,
          t.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = z);
      try {
        const k = kt(S, $, {
          supports: y,
          loads: p
        }, z);
        if (k && e.deformOutputs) {
          e.deformOutputs.val = k;
          const m = gn(S, $, z, k);
          e.analyzeOutputs && (e.analyzeOutputs.val = m);
          const u = (c / 2 | 0) * h + s, E = k.deformations.get(u), L = E ? E[2] : 0;
          console.log(`Placa XZ Q4: Uz_tip=${L.toExponential(4)} m`);
        }
      } catch (k) {
        console.warn("PlacaXZ:", k.message);
      }
      const P = Ze();
      P && (P.settings.shellResults.val = "displacementZ"), setTimeout(() => wt(), 50), Qe();
    }
    function _a() {
      var _a2, _b;
      (_a2 = document.getElementById("fem-log-panel")) == null ? void 0 : _a2.remove();
      const t = window.__femLog || [
        "<i>No hay log. Ejecuta un analisis primero.</i>"
      ], n = document.createElement("div");
      n.id = "fem-log-panel", n.style.cssText = "position:fixed;top:60px;right:10px;width:360px;max-height:500px;overflow-y:auto;background:var(--cad-bg);color:var(--cad-text);border:1px solid var(--cad-border);border-radius:8px;padding:10px;z-index:10001;font-family:'Segoe UI',system-ui,sans-serif;font-size:12px;line-height:1.6;box-shadow:0 4px 20px var(--cad-shadow);", n.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-size:14px;font-weight:bold;color:var(--cad-heading)">\u{1F4CB} Solver Log</span>
        <button id="fem-log-close" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);border-radius:3px;padding:2px 8px;cursor:pointer;font-size:11px;">\u2715</button>
      </div>
      <div style="font-family:'Segoe UI',system-ui,sans-serif;font-size:12px;line-height:1.7;">
        ${t.join("<br>")}
      </div>
    `, document.body.appendChild(n), (_b = n.querySelector("#fem-log-close")) == null ? void 0 : _b.addEventListener("click", () => n.remove());
    }
    function Da() {
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
        const n = (h) => {
          var _a3;
          return parseFloat(((_a3 = t.querySelector(`#${h}`)) == null ? void 0 : _a3.value) || "0");
        }, o = n("po-colB"), l = n("po-colH"), s = n("po-fc") * 1e3, c = n("po-fy") * 1e3, a = n("po-H"), r = n("po-L"), f = n("po-As") * 1e-4, i = n("po-nbar"), d = n("po-drift") / 100, b = n("po-ncycles"), S = t.querySelector("#pushover-status");
        S.textContent = "Generando historia de desplazamientos...";
        const $ = [], y = d * a, p = 40;
        for (let h = 1; h <= b; h++) {
          const I = y * h / b;
          for (let A = 0; A <= p; A++) $.push(I * Math.sin(2 * Math.PI * A / p));
        }
        S.textContent = `Resolviendo pushover (${$.length} pasos)...`;
        try {
          const { cyclicPushover: h } = await ea(async () => {
            const { cyclicPushover: A } = await import("./cyclicPushoverCpp-L5erex8b.js").then(async (m) => {
              await m.__tla;
              return m;
            });
            return {
              cyclicPushover: A
            };
          }, __vite__mapDeps([6,5]), import.meta.url), I = await h({
            colHeight: a,
            beamLength: r,
            col: {
              b: o,
              h: l,
              fpc: -s,
              Fy_rebar: c,
              E_rebar: 2e8,
              rebar_area: f,
              cover: 0.04,
              n_rebar: i
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -s,
              Fy_rebar: c,
              E_rebar: 2e8,
              rebar_area: f * 0.7,
              cover: 0.03,
              n_rebar: i
            },
            dispHistory: $
          });
          S.textContent = `Completado: ${I.nSteps} pasos`, Ba(t.querySelector("#pushover-canvas"), I.displacements, I.forces, `Pushover: ${o * 100}x${l * 100}cm, f'c=${s / 1e3}MPa, Fy=${c / 1e3}MPa`);
        } catch (h) {
          S.textContent = `Error: ${h.message}`, console.error("Pushover failed:", h);
        }
      });
    }
    function Ba(t, n, o, l) {
      const s = t.getContext("2d");
      if (!s || n.length === 0) return;
      const c = t.width, a = t.height, r = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, f = c - r.left - r.right, i = a - r.top - r.bottom;
      s.fillStyle = "#111118", s.fillRect(0, 0, c, a);
      let d = Math.min(...n), b = Math.max(...n), S = Math.min(...o), $ = Math.max(...o);
      d === b && (d -= 0.01, b += 0.01), S === $ && (S -= 1, $ += 1);
      const y = b - d, p = $ - S, h = (P) => r.left + (P - d) / y * f, I = (P) => r.top + i - (P - S) / p * i;
      s.strokeStyle = "#333", s.lineWidth = 0.5, d < 0 && b > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(h(0), r.top), s.lineTo(h(0), r.top + i), s.stroke()), S < 0 && $ > 0 && (s.beginPath(), s.moveTo(r.left, I(0)), s.lineTo(r.left + f, I(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(h(n[0]), I(o[0]));
      for (let P = 1; P < n.length; P++) s.lineTo(h(n[P]), I(o[P]));
      s.stroke(), s.fillStyle = "#aaa", s.font = "11px monospace", s.textAlign = "center", s.fillText("Desplazamiento (m)", r.left + f / 2, a - 5), s.save(), s.translate(12, r.top + i / 2), s.rotate(-Math.PI / 2), s.fillText("Fuerza (kN)", 0, 0), s.restore(), s.fillStyle = "#ee9b00", s.font = "bold 11px monospace", s.textAlign = "center", s.fillText(l, c / 2, 15), s.fillStyle = "#888", s.font = "9px monospace", s.textAlign = "center";
      const A = y / 5;
      for (let P = 0; P <= 5; P++) {
        const k = d + A * P;
        s.fillText((k * 1e3).toFixed(1), h(k), a - r.bottom + 15);
      }
      s.textAlign = "right";
      const z = p / 5;
      for (let P = 0; P <= 5; P++) {
        const k = S + z * P;
        s.fillText(k.toFixed(0), r.left - 5, I(k) + 3);
      }
    }
    let eo = null;
    function Ha() {
      if (eo) {
        eo.remove(), eo = null;
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
    `, document.body.appendChild(t), eo = t, t.querySelector("#nl-close").addEventListener("click", () => {
        t.remove(), eo = null;
      }), t.querySelector("#nl-test").addEventListener("click", () => ja(t));
    }
    function ja(t) {
      const n = parseFloat(t.querySelector("#nl-fy").value), o = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), s = parseFloat(t.querySelector("#nl-r0").value), c = parseFloat(t.querySelector("#nl-amp").value), a = parseInt(t.querySelector("#nl-cycles").value), r = 100, f = [];
      for (let V = 0; V < a; V++) {
        const ae = c * (1 + V * 0.5);
        for (let Q = 0; Q < r; Q++) {
          const K = Q / r * 2 * Math.PI;
          f.push(ae * Math.sin(K));
        }
      }
      const i = n / o, d = l * o;
      let b = 0, S = 0, $ = -i, y = i, p = 0, h = 0, I = 0, A = 0, z = 0, P = 0;
      const k = [];
      for (const V of f) {
        let ae = $, Q = y, K = p, pe = h, ce = I, Ie = A, Pe = z, _ = P, ue;
        const oe = V - b;
        if (Math.abs(oe) < 1e-20) {
          k.push(S);
          continue;
        }
        if ((_ === 0 || _ === 3) && (oe < 0 ? (_ = 2, pe = -i, ce = -n, K = pe, Ie = 0, Pe = 0) : (_ = 1, pe = i, ce = n, K = pe, Ie = 0, Pe = 0)), _ === 2 && oe > 0) {
          _ = 1, Ie = b, Pe = S, b < ae && (ae = b);
          const Se = (Q - ae) / (2 * 1 * i), je = 1 + 0 * Math.pow(Se, 0.8);
          pe = (n * je - d * i * je - Pe + o * Ie) / (o - d), ce = n * je + d * (pe - i * je), K = Q;
        } else if (_ === 1 && oe < 0) {
          _ = 2, Ie = b, Pe = S, b > Q && (Q = b);
          const Se = (Q - ae) / (2 * 1 * i), je = 1 + 0 * Math.pow(Se, 0.8);
          pe = (-n * je + d * i * je - Pe + o * Ie) / (o - d), ce = -n * je + d * (pe + i * je), K = ae;
        }
        const fe = Math.abs((K - pe) / i);
        let ee = s - 0.925 * fe / (0.15 + fe);
        ee < 0.1 && (ee = 0.1);
        const me = (V - Ie) / (pe - Ie), we = 1 + Math.pow(Math.abs(me), ee), se = Math.pow(we, 1 / ee);
        ue = l * me + (1 - l) * me / se, ue = ue * (ce - Pe) + Pe, k.push(ue), b = V, S = ue, $ = ae, y = Q, p = K, h = pe, I = ce, A = Ie, z = Pe, P = _;
      }
      const m = t.querySelector("#nl-canvas"), u = m.getContext("2d"), E = m.width, L = m.height;
      u.clearRect(0, 0, E, L);
      const O = Math.max(...f.map(Math.abs)), W = Math.max(...k.map(Math.abs)), x = (E - 40) / (2 * O), w = (L - 40) / (2 * W), v = E / 2, F = L / 2;
      u.strokeStyle = "#444", u.lineWidth = 1, u.beginPath(), u.moveTo(20, F), u.lineTo(E - 20, F), u.stroke(), u.beginPath(), u.moveTo(v, 20), u.lineTo(v, L - 20), u.stroke(), u.fillStyle = "#888", u.font = "10px monospace", u.textAlign = "center", u.fillText("\u03B5 (strain)", E - 40, F - 5), u.fillText("\u03C3 (stress)", v + 30, 15), u.fillText(`\xB1${(O * 100).toFixed(1)}%`, E - 30, F + 12), u.fillText(`\xB1${(W / 1e3).toFixed(0)} MPa`, v + 40, 30), u.strokeStyle = "#00ccff", u.lineWidth = 1.5, u.beginPath();
      for (let V = 0; V < f.length; V++) {
        const ae = v + f[V] * x, Q = F - k[V] * w;
        V === 0 ? u.moveTo(ae, Q) : u.lineTo(ae, Q);
      }
      u.stroke(), u.strokeStyle = "#ff333366", u.lineWidth = 1, u.setLineDash([
        4,
        4
      ]), u.beginPath(), u.moveTo(20, F - n * w), u.lineTo(E - 20, F - n * w), u.stroke(), u.beginPath(), u.moveTo(20, F + n * w), u.lineTo(E - 20, F + n * w), u.stroke(), u.setLineDash([]), u.fillStyle = "#ff6666", u.font = "9px monospace", u.fillText(`Fy = ${(n / 1e3).toFixed(0)} MPa`, E - 50, F - n * w - 5);
      const X = t.querySelector("#nl-info");
      X.textContent = `Steel02: Fy=${(n / 1e3).toFixed(0)} MPa, E\u2080=${(o / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${a} ciclos, amp=${(c * 100).toFixed(1)}%`;
    }
    function Wa() {
      var _a2, _b, _c, _d;
      const t = document.querySelector(".rpt-overlay");
      if (t) {
        t.remove();
        return;
      }
      const n = e.nodes.val, o = e.elements.val, l = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, s = ((_b = e.nodeInputs) == null ? void 0 : _b.val) || {}, c = (_c = e.deformOutputs) == null ? void 0 : _c.val;
      if ((_d = e.analyzeOutputs) == null ? void 0 : _d.val, !n.length || !o.length) {
        alert("No hay modelo cargado");
        return;
      }
      const a = ul({
        nodes: n,
        elements: o,
        nodeInputs: s,
        elementInputs: l,
        deformOutputs: c
      });
      document.body.appendChild(a);
    }
    let Bn = null;
    function Ga(t) {
      Bn && Bn.remove();
      const n = document.createElement("div");
      n.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const o = mo(), l = bo(), s = Object.entries(o).map(([i, d]) => `<option value="${d}">${i}</option>`).join(""), c = Object.entries(l).map(([i, d]) => `<option value="${d}">${i}</option>`).join("");
      n.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <b style="color:#00ccff;">Asignar Secci\xF3n (${t.length} elem.)</b>
        <button id="asgn-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <label>Tipo:</label>
        <select id="asgn-type" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;margin-top:2px;">
          <option value="rect">Rectangular (b\xD7h)</option>
          <option value="circ">Circular (d)</option>
          <option value="W">Perfil W</option>
          <option value="HSS">Perfil HSS</option>
          <option value="I-param">I Param\xE9trica</option>
          <option value="tubular">Tubular Hueca</option>
          <option value="CFT">CFT (Tubo relleno concreto)</option>
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
    `, document.body.appendChild(n), Bn = n;
      const a = n.querySelector("#asgn-type"), r = n.querySelector("#asgn-params");
      function f() {
        const i = a.value;
        let d = "";
        i === "rect" ? d = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : i === "circ" ? d = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : i === "W" ? d = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${s}</select>` : i === "HSS" ? d = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${c}</select>` : i === "I-param" ? d = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <label>bf(m):<input id="ap-bf" type="number" value="0.20" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hf" type="number" value="0.40" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tf(m):<input id="ap-tf" type="number" value="0.015" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tw(m):<input id="ap-tw" type="number" value="0.010" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>` : i === "tubular" && (d = `<div style="display:flex;gap:6px;">
          <label>b(m):<input id="ap-bc" type="number" value="0.20" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hc" type="number" value="0.30" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>t(m):<input id="ap-t" type="number" value="0.008" step="0.001" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>`), r.innerHTML = d;
      }
      a.addEventListener("change", f), f(), n.querySelector("#asgn-close").addEventListener("click", () => {
        n.remove(), Bn = null;
      }), n.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h;
        const i = a.value, d = {
          secType: i
        };
        i === "rect" ? (d.b = parseFloat(n.querySelector("#ap-b").value), d.h = parseFloat(n.querySelector("#ap-h").value), d.material = 0) : i === "circ" ? (d.b = parseFloat(n.querySelector("#ap-d").value), d.material = 0) : i === "W" || i === "HSS" ? (d.profileIdx = parseInt(n.querySelector("#ap-profile").value), d.material = 1) : i === "I-param" ? (d.bf = parseFloat(n.querySelector("#ap-bf").value), d.hf = parseFloat(n.querySelector("#ap-hf").value), d.tf = parseFloat(n.querySelector("#ap-tf").value), d.tw = parseFloat(n.querySelector("#ap-tw").value), d.material = 1) : i === "tubular" && (d.bc = parseFloat(n.querySelector("#ap-bc").value), d.hc = parseFloat(n.querySelector("#ap-hc").value), d.t = parseFloat(n.querySelector("#ap-t").value), d.material = 1);
        const b = new Array(12).fill(false), S = new Array(12).fill(0);
        n.querySelectorAll("input[data-asgn-rel]").forEach(($) => {
          b[parseInt($.dataset.asgnRel)] = $.checked;
        }), n.querySelectorAll("input[data-asgn-spr]").forEach(($) => {
          const y = parseFloat($.value);
          y > 0 && (S[parseInt($.dataset.asgnSpr)] = y);
        }), d.releases12 = b, d.springs12 = S, d.releaseRotStart = b[4] || b[5], d.releaseRotEnd = b[10] || b[11], d.releaseAxial = b[0], d.releaseTorsion = b[3], d.modI = parseFloat((_a2 = n.querySelector("#asgn-mod-i")) == null ? void 0 : _a2.value) || 1, d.modA = parseFloat((_b = n.querySelector("#asgn-mod-a")) == null ? void 0 : _b.value) || 1, d.modJ = parseFloat((_c = n.querySelector("#asgn-mod-j")) == null ? void 0 : _c.value) || 1, d.modAs2 = parseFloat((_d = n.querySelector("#asgn-mod-as2")) == null ? void 0 : _d.value) ?? 1, d.modAs3 = parseFloat((_e2 = n.querySelector("#asgn-mod-as3")) == null ? void 0 : _e2.value) ?? 1, d.modI3 = parseFloat((_f = n.querySelector("#asgn-mod-i3")) == null ? void 0 : _f.value) || 1, d.modMass = parseFloat((_g = n.querySelector("#asgn-mod-mass")) == null ? void 0 : _g.value) || 1, d.modWeight = parseFloat((_h = n.querySelector("#asgn-mod-weight")) == null ? void 0 : _h.value) || 1, t.forEach(($) => ge.set($, {
          ...d
        })), n.remove(), Bn = null, vn(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), n.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((i) => ge.delete(i)), n.remove(), Bn = null, vn(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let Hn = null;
    function Ya(t) {
      var _a2, _b, _c;
      Hn && Hn.remove();
      const n = e.nodes.val, o = e.elements.val[t];
      if (!o || o.length !== 2) return;
      const l = n[o[0]], s = n[o[1]], c = Math.abs(s[0] - l[0]), a = Math.abs(s[1] - l[1]), r = Math.abs(s[2] - l[2]), f = a > c && a > r, i = Math.sqrt(c * c + a * a + r * r), d = $e.get(t) ?? 0, b = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), S = (b == null ? void 0 : b.name) || (b ? `${b.type} ${((b.b ?? 0) * 100).toFixed(0)}x${((b.h ?? 0) * 100).toFixed(0)}` : "\u2014"), $ = document.createElement("div");
      $.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", $.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${f ? "Columna" : "Viga"} &nbsp;
        <span style="color:#888;">Piso:</span> ${d + 1} &nbsp;
        <span style="color:#888;">L:</span> ${i.toFixed(3)} m
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Secci\xF3n:</span> <span style="color:#00ccff;">${S}</span>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Nodos:</span> ${o[0]} \u2192 ${o[1]}
      </div>
      <hr style="border-color:#333;margin:12px 0;">
      <div style="display:flex;gap:8px;">
        <button id="ep-delete" style="flex:1;padding:8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F5D1} Eliminar</button>
        <button id="ep-inspect" style="flex:1;padding:8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F50D} Inspect</button>
      </div>
    `, document.body.appendChild($), Hn = $, $.querySelector("#ep-close").addEventListener("click", () => {
        $.remove(), Hn = null, An();
      }), $.querySelector("#ep-delete").addEventListener("click", () => {
        U.add(t), $.remove(), Hn = null, An(), Re();
      }), $.querySelector("#ep-inspect").addEventListener("click", () => {
        $.remove(), Hn = null, qs(t);
      });
    }
    setTimeout(() => {
      const t = document.getElementById("viewer");
      if (!t) return;
      const n = t.querySelector("canvas");
      if (!n) return;
      let o = null, l = null;
      const s = 5;
      function c(f) {
        const i = Ze();
        if (!i) return null;
        const d = i.controls.object, b = new Oe(f[0], f[1], f[2]);
        b.project(d);
        const S = n.getBoundingClientRect();
        return {
          x: (b.x + 1) / 2 * S.width,
          y: (-b.y + 1) / 2 * S.height
        };
      }
      function a(f, i, d, b, S) {
        const $ = Math.min(f, d), y = Math.max(f, d), p = Math.min(i, b), h = Math.max(i, b), I = e.nodes.val, A = e.elements.val, z = [];
        for (let P = 0; P < A.length; P++) {
          const k = A[P], m = k.map((u) => c(I[u])).filter(Boolean);
          if (m.length !== 0) if (S) m.every((E) => E.x >= $ && E.x <= y && E.y >= p && E.y <= h) && z.push(P);
          else {
            if (m.some((E) => E.x >= $ && E.x <= y && E.y >= p && E.y <= h)) {
              z.push(P);
              continue;
            }
            if (k.length === 2) {
              const E = m[0], L = m[1];
              r(E.x, E.y, L.x, L.y, $, p, y, h) && z.push(P);
            }
          }
        }
        return z;
      }
      function r(f, i, d, b, S, $, y, p) {
        const h = (A, z) => A >= S && A <= y && z >= $ && z <= p;
        if (h(f, i) || h(d, b)) return true;
        const I = (A, z, P, k, m, u, E, L) => {
          const O = (P - A) * (L - u) - (k - z) * (E - m);
          if (Math.abs(O) < 1e-10) return false;
          const W = ((m - A) * (L - u) - (u - z) * (E - m)) / O, x = ((m - A) * (k - z) - (u - z) * (P - A)) / O;
          return W >= 0 && W <= 1 && x >= 0 && x <= 1;
        };
        return I(f, i, d, b, S, $, y, $) || I(f, i, d, b, y, $, y, p) || I(f, i, d, b, S, p, y, p) || I(f, i, d, b, S, $, S, p);
      }
      n.addEventListener("mousedown", (f) => {
        Yt && (o = {
          x: f.offsetX,
          y: f.offsetY
        });
      }), n.addEventListener("mousemove", (f) => {
        if (pn) {
          const d = Ze();
          if (!d) return;
          const b = Fs(f.clientX, f.clientY, d.camera, d.rendererElm);
          if (Et.track && b.snapType === "node" && b.nodeIdx !== null && b.nodeIdx !== zn && za(b.nodeIdx), Et.track && zn !== null && b.worldPos && b.snapType !== "node") {
            const S = Aa(b.worldPos, zn);
            S && (b.worldPos = S, b.snapType = "grid");
          }
          if (zn !== null && b.worldPos) {
            const S = e.nodes.val[zn];
            S && Cs(f.clientX, f.clientY, new Oe(...S), b.worldPos);
          } else if (vt !== null && b.worldPos) {
            const S = e.nodes.val[vt];
            S && Cs(f.clientX, f.clientY, new Oe(...S), b.worldPos);
          } else Qt && (Qt.remove(), Qt = null);
          b.nodeIdx, Rs(b), n.style.cursor = b.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!nn && !Yt) return;
        if (Yt && o) {
          const d = f.offsetX - o.x, b = f.offsetY - o.y;
          if (Math.abs(d) > s || Math.abs(b) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", n.parentElement.style.position = "relative", n.parentElement.appendChild(l));
            const S = d > 0, $ = Math.min(o.x, f.offsetX), y = Math.min(o.y, f.offsetY), p = Math.abs(d), h = Math.abs(b);
            l.style.left = $ + "px", l.style.top = y + "px", l.style.width = p + "px", l.style.height = h + "px", l.style.border = S ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = S ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", n.style.cursor = "crosshair";
            return;
          }
        }
        const i = Wo(f);
        if (i >= 0) Os(i), n.style.cursor = "pointer";
        else {
          if (Jt) {
            const d = Ze();
            d == null ? void 0 : d.scene.remove(Jt), Jt = null, d == null ? void 0 : d.render();
          }
          n.style.cursor = Yt ? "crosshair" : "";
        }
      }), n.addEventListener("mouseup", (f) => {
        if (Yt && o) {
          const i = f.offsetX - o.x, d = f.offsetY - o.y;
          if (Math.abs(i) > s || Math.abs(d) > s) {
            const b = i > 0, S = a(o.x, o.y, f.offsetX, f.offsetY, b);
            f.ctrlKey || f.metaKey || (ht.clear(), wn()), S.forEach((y) => {
              ht.has(y) || (ht.add(y), Bo(y));
            }), En();
          }
          l && (l.remove(), l = null), o = null, n.style.cursor = "crosshair";
          return;
        }
        o = null;
      }), n.addEventListener("click", (f) => {
        if (pn) {
          const i = Ze();
          if (!i) return;
          const d = Fs(f.clientX, f.clientY, i.camera, i.rendererElm);
          (d.worldPos || d.nodeIdx !== null) && (Ca(d), Rs(d));
          return;
        }
        if (Yt) {
          if (l) return;
          const i = Wo(f), d = f.ctrlKey || f.metaKey;
          if (i >= 0) {
            if (d) if (ht.has(i)) {
              ht.delete(i);
              const b = Mn.findIndex((S) => S.__elemIdx === i);
              if (b >= 0) {
                const S = Ze();
                S == null ? void 0 : S.scene.remove(Mn[b]), Mn[b].geometry.dispose(), Mn[b].material.dispose(), Mn.splice(b, 1), S == null ? void 0 : S.render();
              }
            } else ht.add(i), Bo(i);
            else ht.clear(), wn(), ht.add(i), Bo(i);
            En();
          } else d || (ht.clear(), wn(), En());
          return;
        }
        if (nn) {
          const i = Wo(f);
          i >= 0 && (Os(i), Ya(i));
        }
      });
    }, 500), Jn.derive(() => {
      var _a2;
      e.nodes.val, e.elements.val, (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, Qe();
    }), Ke.modal = (t) => {
      var _a2, _b;
      if (t === void 0 && (t = !qe), qe = t, (_a2 = Le.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", qe), qe) {
        const o = Ze();
        ((_b = o == null ? void 0 : o.settings) == null ? void 0 : _b.loads) && (_e = o.settings.loads.rawVal, o.settings.loads.val = false), Lo(), Le.querySelector("#cad3d-mode-prev").style.display = "", Le.querySelector("#cad3d-mode-next").style.display = "", Le.querySelector("#cad3d-mode-label").style.display = "";
      } else Co(), Le.querySelector("#cad3d-mode-prev").style.display = "none", Le.querySelector("#cad3d-mode-next").style.display = "none", Le.querySelector("#cad3d-mode-label").style.display = "none", T && T !== "placa-q4" && T !== "placa-3q" && Re(), setTimeout(() => {
        var _a3;
        const o = Ze();
        ((_a3 = o == null ? void 0 : o.settings) == null ? void 0 : _a3.loads) && _e && (o.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${qe ? "ON" : "OFF"}`);
    }, Ke.setMode = (t) => {
      var _a2;
      if (!(Ae == null ? void 0 : Ae.modeShapes)) {
        console.error("No modal results");
        return;
      }
      he = Math.max(0, Math.min(t, Ae.modeShapes.length - 1));
      const n = Ae.modeShapes[he], { extent: o } = yn();
      let l = 0;
      for (let c = 0; c < ke.length; c++) {
        const a = n[c * 6] || 0, r = n[c * 6 + 1] || 0, f = n[c * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(a * a + r * r + f * f));
      }
      Ge = l > 1e-12 ? o * 0.05 / l : 1, Qn();
      const s = Le.querySelector("#cad3d-mode-label");
      s && Ae.frequencies && (s.textContent = `Modo ${he + 1} \u2014 ${Ae.frequencies[he].toFixed(2)} Hz`), console.log(`Modo ${he + 1}: f = ${(_a2 = Ae.frequencies) == null ? void 0 : _a2[he].toFixed(4)} Hz`);
    }, window.cad = Ke, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(Le), document.body.appendChild(it.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (et("muro-q4"), Vo(), Ts("muro-q4"), setTimeout(() => {
        T === "muro-q4" && sn();
      }, 200));
    }, 100);
    const to = document.createElement("button");
    to.id = "mobile-menu-btn", to.innerHTML = "\u2630", to.addEventListener("click", () => {
      const t = document.getElementById("cad3d-panel");
      t && (t.classList.toggle("mobile-open"), to.innerHTML = t.classList.contains("mobile-open") ? "\u2715" : "\u2630");
    }), document.body.appendChild(to);
    const un = document.createElement("button");
    un.id = "fullscreen-btn", un.innerHTML = "\u26F6", un.title = "Pantalla completa", un.style.cssText = `
    position: fixed; bottom: 20px; right: 78px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #333, #555);
    color: white; border: 3px solid rgba(255,255,255,0.2);
    font-size: 22px; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex; align-items: center; justify-content: center;
  `, un.addEventListener("mouseenter", () => {
      un.style.transform = "scale(1.15)";
    }), un.addEventListener("mouseleave", () => {
      un.style.transform = "scale(1)";
    }), un.addEventListener("click", () => {
      document.fullscreenElement ? document.exitFullscreen().catch(() => {
      }) : document.documentElement.requestFullscreen().catch(() => {
      });
    }), document.body.appendChild(un), document.body.appendChild(El());
    const Vs = document.createElement("span");
    return Vs.style.display = "none", Vs;
  };
});
export {
  __tla,
  ia as a,
  fl as c,
  er as g
};
